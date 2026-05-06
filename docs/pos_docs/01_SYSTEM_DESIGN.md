# 01 - System Design

How Reserve POS is shaped. Read this before touching code.

## 1. One-line model

Reserve AI talks to the customer. Reserve POS checks the business rules. The dashboard gives staff control.

## 2. Three runtime processes

```
+---------------------------+      +-----------------------------+      +--------------------------+
|  LiveKit voice agent      |----->|  Dashboard (Next.js)        |----->|  Supabase (Postgres)     |
|  Python                    | HTTPS|  apps/web                  | SQL  |  RLS by restaurant_id    |
|  D:\...\Restaurantia_New  |      |  D:\...\agent\Dashboard    |      |                          |
+---------------------------+      +-----------------------------+      +--------------------------+
       ^                                    ^                                      |
       | SIP / WebRTC                       | HTTPS (browser)                      | Realtime
       |                                    |                                      v
+--------------+                    +---------------+                    +----------------------+
|  Caller      |                    |  Owner/Staff  |                    |  Subscribed clients  |
+--------------+                    +---------------+                    +----------------------+
```

- **LiveKit voice agent** - handles realtime voice. Owns conversation, intent, transcript, function tools.
- **Dashboard (Next.js App Router)** - owns business rules, validation, persistence, UI. All AI writes flow through here.
- **Supabase** - Postgres + Auth + Realtime + Row-Level Security. Multi-tenant by `restaurant_id`.

## 3. Module map

The dashboard ships as one Next.js app with these surfaces:

```
apps/web/app
  /(staff)                    -- staff-facing UI
    /dashboard                -- today widgets (existing)
    /sales                    -- NEW. Cashier sales screen (cart + payment + receipt)
    /catalog                  -- NEW. Products + services + categories (extends current /menu)
    /orders                   -- existing reservations view, extended for orders
    /reservations             -- existing
    /customers                -- NEW. CRM lookup
    /calendar                 -- NEW. Staff/resource availability view
    /ai-inbox                 -- NEW. Handoffs + AI action review queue
    /ai-calls                 -- existing call log
    /reports                  -- NEW. Daily sales, AI-attributed revenue
    /settings                 -- existing
  /api
    /agent/*                  -- NEW. AI-safe endpoints (read/draft/confirm/handoff)
    /pos/ingest               -- existing external POS import
    /pos/key                  -- existing API key management
    /voice/inbound            -- existing Twilio webhook
    /receipts/[id].pdf        -- NEW. Receipt PDF rendering
```

Two surfaces share the same database:

- **Booking surface** (existing): reservations, calendar, AI inbox.
- **Operational surface** (new): sales, payments, receipts, stock movements.

They share `customers`, `payments`, `audit_log`, `ai_actions`.

## 4. Roles and permissions

Mapped to `restaurant_memberships.role` (existing column).

| Role | Catalog | Sales | Reservations | AI Inbox | Reports | Settings | Users |
| --- | --- | --- | --- | --- | --- | --- | --- |
| owner | full | full | full | full | full | full | full |
| manager | full | full | full | full | full | most (no billing) | invite only |
| cashier | read | full | read | read assigned | own | none | none |
| front_desk | read | full | full | full | none | none | none |
| accountant | read | read | read | none | full | none | none |
| ai_agent (service) | read | none | draft+confirm via API | create | none | none | none |

Enforcement layers:

1. Supabase RLS policies keyed on `auth.uid()` -> `restaurant_memberships`.
2. Server-side route guards in `apps/web/app/api/*` checking role per action.
3. UI guards (hide buttons), but never trust the UI.

## 5. Request flow - cashier sells two coffees

Tied to PDF section 10 sale logic. Every step lives in code; every database write is in one transaction.

```
1. Staff clicks "Add" twice on "Espresso" in /sales
2. Frontend updates cart in local state (no DB write yet)
3. Staff selects "Cash" and clicks "Complete sale"
4. POST /api/sales  { restaurant_id, items: [...], payment_method, paid_amount }
5. Server starts transaction:
     a. Validate items exist + active for this restaurant
     b. Validate stock_quantity >= requested for each (skip for service items)
     c. INSERT INTO orders (status='completed', source='cashier', subtotal, tax, total)
     d. INSERT INTO order_items rows
     e. UPDATE products SET stock_quantity = stock_quantity - qty (skip services)
     f. INSERT INTO stock_movements rows (type='sale', reason='order:<id>')
     g. INSERT INTO payments (status='paid', method, amount)
     h. INSERT INTO audit_log (actor='user:<id>', action='sale.created', entity='order:<id>')
   COMMIT
6. Server returns { order_id, receipt_url: "/api/receipts/<id>.pdf" }
7. Frontend shows receipt preview + print/download buttons
8. Realtime broadcast updates the dashboard widgets
```

Key invariant: stock decrement and order creation must be in the same transaction. A crash between them leaves stock wrong. Implemented with a Postgres function `pos_finalize_sale(order_payload jsonb) returns jsonb` called from the route.

## 6. Request flow - AI agent books a table

```
1. Caller: "Table for 4 at 7:30 tonight"
2. LiveKit agent extracts intent + slots
3. Agent calls GET /api/agent/availability?restaurant_id=<x>&type=table&party_size=4&start=...
4. Dashboard answers from availability_rules + existing reservations
5. Agent offers 19:30 (or alternative)
6. Caller confirms
7. Agent calls POST /api/agent/bookings/draft { customer, datetime, party_size, source='voice', call_log_id }
8. Dashboard:
     a. Looks up or creates customer by phone (deduped)
     b. INSERT INTO reservations status='draft_ai'
     c. INSERT INTO ai_actions { type='booking.draft', call_log_id, result_entity='reservation:<id>' }
     d. Realtime broadcast -> AI Inbox lights up for staff
9. Agent calls POST /api/agent/bookings/confirm { reservation_id, idempotency_key }
   only if business rule "auto_confirm_voice_bookings = true"; otherwise leaves as draft for staff
10. Dashboard updates reservation status='confirmed' + audit_log
11. Twilio SMS sent
```

Crucial difference from today: the agent does not write `reservations` directly. It calls the dashboard, which validates against `availability_rules`, deduplicates `customers`, and logs the AI action.

## 7. AI safety boundary

Three rules every endpoint under `/api/agent/*` must enforce:

1. **Auth by service token, not user session.** The agent uses a per-restaurant API key (extends existing `pos_integrations` table). No user impersonation.
2. **Append, never overwrite.** Drafts go to a draft status; confirms move them forward; nothing the AI did is silently destroyed.
3. **Logged in `ai_actions`.** Every call writes a row with `action_type`, `payload`, `result_entity_*`, `status`. Staff can audit every AI write.

If a request fails any business rule (slot taken, customer banned, item out of stock, etc.), the response carries a structured `error.code` so the agent can ask the caller a clarifying question instead of failing silently.

## 8. Multi-tenancy

Every business row carries `restaurant_id` (later `organization_id` for chains). Enforcement:

- Every Postgres table that holds business data has `restaurant_id uuid not null references restaurants(id)`.
- RLS policy: `using (restaurant_id in (select restaurant_id from restaurant_memberships where user_id = auth.uid()))`.
- Server routes accept `restaurant_id` from session context, not from request body, except for `/api/agent/*` which derives it from the API key.
- Service-role writes (background jobs, agent writes) include explicit `restaurant_id` and bypass RLS, so they need extra defensive checks in code.

## 9. Audit and AI action log

Two append-only tables:

- `audit_log` - any state change with `actor_type`, `actor_id`, `action`, `entity_type`, `entity_id`, `before_jsonb`, `after_jsonb`. Indexed on `(restaurant_id, created_at)`.
- `ai_actions` - subset specifically for AI writes, joined to `call_logs` so a transcript points to every booking it created.

Retention: indefinite for now. A future ADR decides cold-storage rules.

## 10. Realtime updates

Supabase Realtime channels keep staff screens fresh:

| Table | Channels | Used by |
| --- | --- | --- |
| `reservations` | per-restaurant | dashboard, calendar, AI inbox |
| `orders` | per-restaurant | sales screen, dashboard, kitchen view (later) |
| `ai_actions` | per-restaurant | AI inbox |
| `handoffs` | per-restaurant | AI inbox |
| `payments` | per-restaurant | dashboard, reports |

## 11. Errors and idempotency

- All `/api/agent/*` write endpoints accept an `Idempotency-Key` header. Repeated requests with same key + body return the original response.
- Every endpoint returns a typed error envelope: `{ ok: false, error: { code, message, details? } }`.
- Domain error codes are stable strings: `slot_unavailable`, `out_of_stock`, `customer_blocked`, `rule_violation`, `insufficient_payment`, `unknown_item`.

## 12. Out of scope for v1

Listed so they do not creep into the design:

- Inventory purchase orders, suppliers, COGS waterfalls.
- Kitchen display system with course timing.
- Table layout drag-and-drop with floor map.
- Hardware terminal integration (cash drawer, thermal printer, barcode scanner).
- Loyalty, gift cards, store credit.
- Multi-location reporting, transfers between locations.
- Third-party POS bidirectional sync (one-way ingest is already in `apps/web/app/api/pos/ingest`).

These all become MVP 4+ work per `POS_SYSTEM_STRATEGY.md` section 9.
