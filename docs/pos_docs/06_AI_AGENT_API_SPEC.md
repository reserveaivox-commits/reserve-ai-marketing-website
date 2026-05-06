# 06 - AI Agent API Spec

The contract between the Python LiveKit agent and the Next.js POS dashboard. Every endpoint here lives under `/api/agent/*` and is authenticated by a per-restaurant API key (not a user session).

This spec replaces the agent's current direct-to-Supabase writes (`finalize_reservation` in `D:\Work\Reserve_Ai\agent\Livekit\Restaurantia_New\src\restaurantia\tools.py`). After Phase 3, the agent calls these endpoints; the dashboard owns business rules.

## 1. Auth

```
Authorization: Bearer <api_key>
X-Restaurant-Id: <uuid>           (optional; key already maps to one restaurant)
Idempotency-Key: <opaque>         (required for write endpoints)
```

The key is generated in the dashboard (`/settings/integrations`), persisted in `pos_integrations`, and rotated by the owner. Each key is scoped to one restaurant. The middleware:

1. Parses `Bearer` token.
2. Looks up the active `pos_integrations` row.
3. Resolves `restaurant_id` from the row.
4. Rate-limits per key (default 60 requests / minute, configurable).
5. Sets `req.context = { restaurant_id, key_id }`.

If anything fails, returns:

```json
{ "ok": false, "error": { "code": "auth_failed", "message": "..." } }
```

## 2. Common envelopes

All responses follow:

```json
{ "ok": true,  "data": { ... } }
{ "ok": false, "error": { "code": "<stable-string>", "message": "...", "details": { ... } } }
```

Stable error codes:

```
auth_failed
rate_limited
rule_violation
slot_unavailable
out_of_stock
unknown_item
unknown_customer
customer_blocked
duplicate_request
validation_failed
internal_error
```

## 3. Time and timezone

- All datetimes in requests and responses are ISO 8601 with timezone offset, e.g. `2026-05-12T19:30:00+02:00`.
- The dashboard normalizes everything to UTC at storage and returns the restaurant's local timezone in metadata where relevant.
- Date-only fields use `YYYY-MM-DD` and assume the restaurant's local date.

## 4. Read endpoints

### 4.1 GET /api/agent/business-profile

Returns the data the agent needs to greet, set tone, and gate features.

Request: no body.

Response (200):

```json
{
  "ok": true,
  "data": {
    "restaurant_id": "uuid",
    "name": "Trattoria Sophia",
    "timezone": "Europe/Berlin",
    "languages": ["en", "de", "it"],
    "currency": "EUR",
    "voice_tone": "friendly_professional",
    "deposit_policy": { "required_above_party": 8, "amount_cents": 1000, "currency": "EUR" },
    "auto_confirm_voice_bookings": true,
    "hours_today": [{ "open": "12:00", "close": "23:00" }],
    "phones": ["+49 30 12345678"]
  }
}
```

### 4.2 GET /api/agent/catalog

Active products and services for the restaurant.

Query: `?kind=product|service|all` (default `all`), `?include_inactive=false`.

Response:

```json
{
  "ok": true,
  "data": {
    "categories": [
      { "id": "uuid", "name": "Pasta", "position": 1 }
    ],
    "items": [
      {
        "id": "uuid",
        "kind": "product",
        "name": "Spaghetti Carbonara",
        "category_id": "uuid",
        "price_cents": 1690,
        "currency": "EUR",
        "tax_rate_bps": 1900,
        "duration_minutes": null,
        "description": "Classic Roman recipe",
        "is_active": true,
        "stock_quantity": null
      }
    ]
  }
}
```

### 4.3 GET /api/agent/availability

The endpoint that prevents the agent from inventing slots.

Query parameters:

- `target_type=table|service|staff_member` (required)
- `service_id` or `resource_id` (optional, depending on `target_type`)
- `start=YYYY-MM-DDTHH:MM:SSZ` (required)
- `end=...` (required)
- `party_size=integer` (required for tables)

Response:

```json
{
  "ok": true,
  "data": {
    "slots": [
      { "start": "2026-05-12T19:00:00+02:00", "end": "2026-05-12T20:30:00+02:00", "capacity_left": 2 },
      { "start": "2026-05-12T19:30:00+02:00", "end": "2026-05-12T21:00:00+02:00", "capacity_left": 1 }
    ],
    "next_available_after_window": "2026-05-12T21:30:00+02:00"
  }
}
```

Errors:

- `validation_failed` if `start >= end` or `party_size` missing for tables.
- `rule_violation` if the requested target is not bookable (closed day, off-hours).

### 4.4 GET /api/agent/customer

Returns the customer if the phone matches.

Query: `?phone=+4915123456789`.

Response (found):

```json
{
  "ok": true,
  "data": {
    "id": "uuid",
    "name": "Maria",
    "phone": "+4915123456789",
    "email": null,
    "language": "de",
    "tags": ["regular"],
    "visits_count": 7,
    "last_visit_at": "2026-04-30T20:15:00+02:00"
  }
}
```

Response (not found):

```json
{ "ok": true, "data": null }
```

The agent should never use this to read PII out loud unless the caller already identified themselves; this is a privacy rule, not a technical one.

### 4.5 GET /api/agent/rules

Business rules the agent should respect during conversation.

Response:

```json
{
  "ok": true,
  "data": {
    "deposit_required_above_party": 8,
    "max_party_size": 12,
    "max_advance_days": 60,
    "min_advance_minutes": 30,
    "cancellation_window_minutes": 120,
    "languages_supported": ["en", "de"],
    "no_show_policy_text": "Two no-shows in a year requires a deposit on next booking.",
    "auto_confirm_voice_bookings": true
  }
}
```

## 5. Write endpoints

All writes:

- Require `Idempotency-Key` header.
- Return the same response if called twice with the same key + body.
- Create an `ai_actions` row in the same DB transaction as the entity row.

### 5.1 POST /api/agent/bookings/draft

Body:

```json
{
  "customer": {
    "phone": "+4915123456789",
    "name": "Maria",
    "language": "de"
  },
  "datetime": "2026-05-12T19:30:00+02:00",
  "duration_minutes": 90,
  "party_size": 4,
  "service_id": null,
  "staff_member_id": null,
  "resource_type": "table",
  "notes": "window seat please",
  "source": "voice",
  "call_log_id": "uuid-of-call"
}
```

Response (success):

```json
{
  "ok": true,
  "data": {
    "reservation_id": "uuid",
    "status": "draft_ai",
    "ai_action_id": "uuid",
    "expires_at": "2026-05-12T19:30:00+02:00"
  }
}
```

Errors:

- `slot_unavailable` if availability check fails.
- `validation_failed` for malformed input.
- `customer_blocked` if the phone is on the block list.

### 5.2 POST /api/agent/bookings/confirm

Body:

```json
{
  "reservation_id": "uuid",
  "send_sms": true
}
```

Behavior:

- If `auto_confirm_voice_bookings = true`, moves status `draft_ai -> confirmed`, fires SMS, returns the updated reservation.
- If `false`, returns `{ ok: true, data: { reservation_id, status: "draft_ai", awaiting_staff: true } }` and notifies staff via the AI Inbox.

Errors:

- `rule_violation` if the slot was taken between draft and confirm (race condition; agent should re-quote).

### 5.3 POST /api/agent/bookings/cancel

Body: `{ "reservation_id": "uuid", "reason": "customer_request" }`.

Response: `{ ok, data: { reservation_id, status: "cancelled" } }`.

### 5.4 POST /api/agent/orders/draft

For takeaway / phone orders.

Body:

```json
{
  "customer": { "phone": "...", "name": "..." },
  "items": [
    { "menu_item_id": "uuid", "quantity": 2, "notes": "no onion" },
    { "menu_item_id": "uuid", "quantity": 1 }
  ],
  "pickup_at": "2026-05-12T19:00:00+02:00",
  "notes": "ring buzzer 3",
  "source": "voice",
  "call_log_id": "uuid"
}
```

Response:

```json
{
  "ok": true,
  "data": {
    "order_id": "uuid",
    "status": "draft",
    "subtotal_cents": 4280,
    "tax_cents": 813,
    "total_cents": 5093,
    "currency": "EUR",
    "ai_action_id": "uuid"
  }
}
```

Errors:

- `unknown_item` if any `menu_item_id` does not belong to this restaurant or is inactive.
- `out_of_stock` if a product item is below requested quantity.

### 5.5 POST /api/agent/orders/confirm

Body: `{ "order_id": "uuid" }`. Moves `draft -> accepted`, fires kitchen / staff notification.

### 5.6 POST /api/agent/handoffs

For requests the agent should not handle.

Body:

```json
{
  "reason": "low_confidence",
  "summary": "Caller wants to book a private event for 30 people on May 25",
  "customer": { "phone": "...", "name": "..." },
  "call_log_id": "uuid"
}
```

Response: `{ ok, data: { handoff_id, status: "open" } }`.

### 5.7 POST /api/agent/call-events

Lifecycle pings to enrich `call_logs` and analytics.

Body:

```json
{
  "call_log_id": "uuid",
  "event": "started" | "intent_detected" | "handoff" | "ended",
  "metadata": { "intent": "booking", "confidence": 0.86 }
}
```

Response: `{ ok: true }`.

## 6. Python client sketch

A minimal client lives in the agent repo as `restaurantia.pos_client`. Sketch:

```python
import os
import uuid
import httpx

BASE = os.environ["RESERVE_POS_BASE_URL"]
KEY  = os.environ["RESERVE_POS_API_KEY"]

def _headers(idem: str | None = None) -> dict[str, str]:
    h = {"Authorization": f"Bearer {KEY}", "Content-Type": "application/json"}
    if idem:
        h["Idempotency-Key"] = idem
    return h

async def get_availability(target_type: str, start: str, end: str, party_size: int | None = None):
    async with httpx.AsyncClient(timeout=8.0) as c:
        r = await c.get(f"{BASE}/api/agent/availability",
                        params={"target_type": target_type, "start": start, "end": end, "party_size": party_size},
                        headers=_headers())
        r.raise_for_status()
        return r.json()

async def draft_booking(payload: dict):
    idem = str(uuid.uuid4())
    async with httpx.AsyncClient(timeout=8.0) as c:
        r = await c.post(f"{BASE}/api/agent/bookings/draft", json=payload, headers=_headers(idem))
        r.raise_for_status()
        return r.json()
```

## 7. Adapting the existing tools

Map the current LiveKit `function_tool`s to new endpoints. From `tools.py`:

| Current tool | New behavior | Endpoint |
| --- | --- | --- |
| `validate_phone_number` | unchanged (local) | n/a |
| `validate_date` | unchanged (local) | n/a |
| `finalize_reservation` | replaced | POST /api/agent/bookings/draft -> POST /confirm |
| `get_menu_recommendation` | replaced (catalog-driven) | GET /api/agent/catalog |
| (new) `lookup_customer` | new | GET /api/agent/customer |
| (new) `check_availability` | new | GET /api/agent/availability |
| (new) `create_handoff` | new | POST /api/agent/handoffs |
| (new) `log_ai_action` | implicit on every write | n/a |

Recommendations to prevent regressions during cutover:

- Keep `finalize_reservation` working temporarily by having it call `bookings/draft` then `bookings/confirm` instead of writing Supabase directly. Same external signature; staff sees the new flow.
- Feature-flag the cutover per restaurant: `pos_integrations.use_pos_api = true|false`. Old restaurants keep the old path until verified.

## 8. Versioning

- Path-based versioning is overkill for now. Keep `/api/agent/*`. If a breaking change is needed, introduce `/api/agent/v2/*` and deprecate v1 with a 6-month window.
- Add `X-Reserve-API-Version` response header for client logging.

## 9. Rate limiting and quotas

- Default 60 req/min per key.
- Hard ceiling 5 req/sec per key to prevent runaway loops.
- 429 includes `Retry-After: <seconds>`.

## 10. Logging

Every request hits `audit_log` with `actor_type='agent'`, `actor_id=<api_key_id>`, plus a row in `ai_actions` for write endpoints. Owners can see exactly what the agent did, when, with what payload.

## 11. Test contract

A contract test in the agent repo runs against staging on every push. Suite:

1. Get business-profile.
2. Get availability for tomorrow 19:00, party 4. Expect at least one slot or a clean empty array.
3. Draft a booking with a fake phone. Confirm. Verify status moves.
4. Draft a takeaway order with two items. Confirm.
5. Create a handoff. Verify it appears in the AI Inbox via Realtime.
6. Send call-events lifecycle. Verify call_logs metadata.

Tests use idempotency keys so reruns do not create duplicate rows.
