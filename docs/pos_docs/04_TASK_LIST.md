# 04 - Task List

The build plan, broken into phases. Every task has an ID, dependencies, acceptance criteria, a dev-day estimate, and a verification step.

Conventions:

- 1 dev-day = one focused engineer-day on this stack (Next.js + Supabase familiar).
- Solo calendar pace ~ 0.6 dev-day per calendar day. Multiply estimates by ~1.7 for solo calendar weeks.
- "Verify" is the minimum check to call a task done; not full QA.
- IDs are stable. Reference them in commit messages: `feat(pos): T2.04 sales screen cart`.

## Phase 0 - Foundations

Goal: branch is alive, env is set up, the dashboard runs locally with a feature flag for POS work.

| ID | Task | Depends | Acceptance | Verify | Days |
| --- | --- | --- | --- | --- | --- |
| T0.01 | Create `pos-mvp` branch in Dashboard repo | - | Branch exists, pushed. | `git log` | 0.25 |
| T0.02 | Add feature flag `POS_OPERATIONAL_ENABLED` (env var) | T0.01 | Reading the flag in a route returns the value. | unit test | 0.25 |
| T0.03 | Add `pos_docs/` link in `apps/web/README.md` | T0.01 | Link present, points to this folder. | manual | 0.1 |
| T0.04 | Confirm local Supabase runs (or shared dev project) | T0.01 | `pnpm dev` against the project shows existing dashboard. | manual | 0.5 |
| T0.05 | Add Vitest + Playwright skeleton scripts | T0.01 | `pnpm test` runs zero-test green. | terminal | 0.5 |
| T0.06 | Add ESLint rule banning floats in `*-cents` columns | T0.05 | Test fixture demonstrates rule trip. | unit test | 0.25 |
| T0.07 | Add `Idempotency-Key` middleware util | T0.05 | Util tested with two same-key requests, second returns cache. | unit test | 1.0 |

Phase 0 total: ~2.85 dev-days (round to 2-3).

## Phase 1 - Schema additions

Goal: every new table from `02_DATA_MODEL.md` exists in Supabase with RLS, plus seed data.

| ID | Task | Depends | Acceptance | Verify | Days |
| --- | --- | --- | --- | --- | --- |
| T1.01 | Migration: `categories` table + RLS | T0.04 | Insert/select via SQL works. | psql / Supabase studio | 0.5 |
| T1.02 | Migration: `customers` table + RLS + dedupe indexes | T0.04 | Phone-uniqueness enforced per restaurant. | unit test | 0.75 |
| T1.03 | Migration: `staff_members` + RLS | T0.04 | CRUD via Supabase studio. | manual | 0.5 |
| T1.04 | Migration: `resources` + RLS | T0.04 | Same as above. | manual | 0.4 |
| T1.05 | Migration: `availability_rules` + RLS | T1.03, T1.04 | Recurring + holiday rules insertable. | unit test | 0.6 |
| T1.06 | Migration: extend `menu_items` (kind, barcode, sku, stock, etc.) | T0.04 | Existing menu rows still readable; new fields default sensible. | regression run | 0.75 |
| T1.07 | Migration: extend `reservations` (customer, status, source, call_log_id) | T1.02 | Existing reservation rows backfilled with sensible defaults. | regression run | 0.75 |
| T1.08 | Migration: `orders` + receipt_number sequence + RLS | T0.04 | Sequence yields unique numbers per restaurant. | unit test | 1.0 |
| T1.09 | Migration: `order_items` + RLS | T1.08 | FK cascades on order delete (only soft-delete used). | unit test | 0.5 |
| T1.10 | Migration: `stock_movements` ledger + RLS | T1.06 | Sum-of-movements equals `menu_items.stock_quantity` after seed. | unit test | 0.75 |
| T1.11 | Migration: `payments` + check constraint (order_id or reservation_id) | T1.08 | Insert with neither id rejected. | unit test | 0.5 |
| T1.12 | Migration: `refunds` | T1.11 | FK to payments enforced. | unit test | 0.4 |
| T1.13 | Migration: `ai_actions` (idempotency-key unique) | T0.04 | Same key twice rejected at DB level. | unit test | 0.5 |
| T1.14 | Migration: `handoffs` | T0.04 | Status enum check. | unit test | 0.4 |
| T1.15 | Migration: `audit_log` (bigserial, indexes) | T0.04 | Insert/select with index hit confirmed in `EXPLAIN`. | manual | 0.5 |
| T1.16 | Postgres function `pos_finalize_sale(payload jsonb)` | T1.08-T1.11 | Single-call atomic insert; rollback on negative stock. | integration test | 1.5 |
| T1.17 | Postgres function `pos_next_receipt_number(restaurant_id uuid)` | T1.08 | Concurrent calls produce no duplicates. | integration test | 0.5 |
| T1.18 | Views: `v_daily_sales`, `v_low_stock` | T1.08, T1.06 | Query against seeded data returns expected rows. | manual | 0.4 |
| T1.19 | Seed: demo restaurant + categories + 20 menu items | all above | `pnpm db:seed:demo` populates a complete tenant. | manual | 0.75 |

Phase 1 total: ~11.5 dev-days. (Plan says 6-9 but this is granular - the bigger number is closer to truth. Update phase budget below.)

## Phase 2 - Operational core (cashier flow)

Goal: a cashier can sell two items, take a payment, get a receipt. PDF section 5 flow is real.

| ID | Task | Depends | Acceptance | Verify | Days |
| --- | --- | --- | --- | --- | --- |
| T2.01 | `/catalog` page extending `/menu` with kind toggle | T1.06 | Owner can mark an item as service vs product, set stock. | manual | 1.5 |
| T2.02 | Catalog import CSV (optional) | T2.01 | CSV with name, price, barcode imports cleanly. | manual | 1.0 |
| T2.03 | `/sales` page shell (left: catalog grid, right: cart) | T1.08 | Layout renders, no actions yet. | visual | 0.75 |
| T2.04 | Cart state + add/remove/qty change | T2.03 | Total math correct including tax. | unit test | 1.0 |
| T2.05 | Discount input (line + order level) | T2.04 | Negative discount rejected. | unit test | 0.5 |
| T2.06 | Barcode scanner support (USB HID typing) | T2.04 | Scanner adds item; missing barcode shows toast. | manual | 0.5 |
| T2.07 | Payment modal (cash, card_manual, transfer, mobile) | T2.04 | Required fields per method enforced. | unit test | 0.75 |
| T2.08 | API: `POST /api/sales` calling `pos_finalize_sale` | T1.16 | Returns `{ order_id, receipt_url }`. | integration | 1.0 |
| T2.09 | Stock decrement validated; out-of-stock rejection UX | T2.08 | Cashier sees "Out of stock for X" inline. | manual | 0.5 |
| T2.10 | Receipt PDF route `/api/receipts/[id].pdf` | T2.08 | PDF renders with correct totals + business header. | visual | 1.0 |
| T2.11 | Receipt on-screen preview component | T2.10 | Same component renders both PDF and HTML. | visual | 0.75 |
| T2.12 | Receipt number generator + format | T1.17 | Per-restaurant monotonic, formatted `POS-YYYY-NNNNNN`. | unit test | 0.25 |
| T2.13 | Cashier session: open day / close day with cash count | T2.08 | Z-report PDF lists sales totals by method for the session. | manual | 1.0 |
| T2.14 | Quick refund flow (full refund of last sale) | T1.12, T2.08 | Refund creates negative stock movement; payment marked refunded. | integration | 1.0 |
| T2.15 | Low-stock badge in catalog using `v_low_stock` | T1.18 | Items at/below threshold show pill. | visual | 0.4 |
| T2.16 | Cashier role enforcement (no settings, no reports) | T2.08 | Cashier login cannot reach `/settings`. | manual | 0.5 |

Phase 2 total: ~12.4 dev-days.

## Phase 3 - Booking + AI inbox + Agent API

Goal: the LiveKit agent reads catalog and availability, drafts and confirms bookings through `/api/agent/*`. Staff review AI activity.

| ID | Task | Depends | Acceptance | Verify | Days |
| --- | --- | --- | --- | --- | --- |
| T3.01 | API key model: rotate / scope per restaurant | T1.13 | Key has scope `agent:read,agent:write`. | unit test | 0.75 |
| T3.02 | Middleware: API-key auth + rate limit + tenant resolve | T3.01 | Bad key rejected; rate limit returns 429. | integration | 1.0 |
| T3.03 | `GET /api/agent/business-profile` | T3.02 | Returns name, hours, timezone, languages, deposit policy. | contract test | 0.5 |
| T3.04 | `GET /api/agent/catalog` (active items only) | T3.02 | Filterable by kind. | contract test | 0.75 |
| T3.05 | `GET /api/agent/availability` (services + tables) | T1.05 | Honors `availability_rules`, existing reservations, capacity. | integration | 2.0 |
| T3.06 | `GET /api/agent/customer?phone=` | T3.02 | Returns null or customer summary. | contract test | 0.4 |
| T3.07 | `POST /api/agent/bookings/draft` (idempotent) | T3.02, T1.13 | Creates reservation in `draft_ai`, ai_actions row. | integration | 1.25 |
| T3.08 | `POST /api/agent/bookings/confirm` | T3.07 | Honors `auto_confirm_voice_bookings` setting; SMS via existing flow. | integration | 1.0 |
| T3.09 | `POST /api/agent/orders/draft` (takeaway) | T3.02 | Creates order in `draft`, ai_actions row. | integration | 1.25 |
| T3.10 | `POST /api/agent/handoffs` | T3.02 | Creates handoff row, broadcasts to AI inbox. | integration | 0.5 |
| T3.11 | `POST /api/agent/call-events` (lifecycle) | T3.02 | Updates `call_logs` with outcome flags. | integration | 0.5 |
| T3.12 | AI Inbox page: handoffs list + detail with transcript + accept/edit/reject | T3.10 | Reject moves status to `rejected_by_staff`. | manual | 1.5 |
| T3.13 | AI Inbox: "AI bookings awaiting review" stream | T3.07 | Staff can confirm or reject draft_ai reservations. | manual | 1.0 |
| T3.14 | Realtime channels: `ai_actions`, `handoffs`, `reservations` for AI Inbox | T3.12 | New row appears within 1s. | manual | 0.5 |
| T3.15 | Adapt LiveKit agent: replace `finalize_reservation` direct DB call with API client | T3.07, T3.08 | Smoke test call books via API. | end-to-end | 1.5 |
| T3.16 | Adapt LiveKit agent: add `lookup_customer`, `get_business_rules`, `check_availability` tools | T3.03-T3.06 | Integration test in agent repo passes. | end-to-end | 1.5 |
| T3.17 | Update `AGENT_DASHBOARD_POS_INTEGRATION.md` to reflect actual endpoint URLs | T3.07-T3.11 | Doc and code agree. | review | 0.25 |

Phase 3 total: ~16.2 dev-days. Bigger than the 8-12 range in the plan because the agent migration is real work; if scope must shrink, defer T3.09 (orders.draft) to MVP 2 of POS strategy.

## Phase 4 - Reporting

Goal: owner sees revenue, AI-attributed revenue, recovered missed calls, low stock.

| ID | Task | Depends | Acceptance | Verify | Days |
| --- | --- | --- | --- | --- | --- |
| T4.01 | Reports page shell with date range picker | T0.04 | Range applied to all widgets. | manual | 0.5 |
| T4.02 | Daily / weekly / monthly sales chart (recharts) | T1.18 | Matches raw SQL totals. | unit test | 0.75 |
| T4.03 | "AI revenue" widget | T1.18 | `where source='voice'`. | manual | 0.4 |
| T4.04 | Best-selling items + low-stock list | T1.18 | Top 10 sortable. | manual | 0.5 |
| T4.05 | Cashier sales / payment-method split | T1.16 | Matches Z-report. | unit test | 0.75 |
| T4.06 | Missed-call recovery estimate (AI bookings created from missed calls) | T3.07 | Counts unique caller numbers with `draft_ai -> confirmed`. | unit test | 1.0 |
| T4.07 | CSV export per widget | T4.02-T4.06 | Downloads tally with on-screen numbers. | manual | 0.5 |
| T4.08 | Daily digest email (optional) | T4.02 | Owner receives 8am summary. | manual | 1.0 |

Phase 4 total: ~5.4 dev-days.

## Phase 5 - Polish + onboarding

Goal: a real customer can be onboarded and trusted to go live.

| ID | Task | Depends | Acceptance | Verify | Days |
| --- | --- | --- | --- | --- | --- |
| T5.01 | Roles + invitations UI | T0.04 | Owner invites manager, cashier, accountant. | manual | 1.0 |
| T5.02 | DE/EN copy for all new POS pages | all UI | i18n keys all translated. | manual | 1.0 |
| T5.03 | Onboarding wizard: business profile, hours, services, deposit policy, voice tone | T1.05 | New tenant ready in under 30 min. | manual | 1.5 |
| T5.04 | Test-call panel (LiveKit) wired to setup | T3.15 | Owner triggers a test call from the dashboard. | manual | 0.75 |
| T5.05 | Backups documented + tested restore | T0.04 | Restore from yesterday on staging. | manual | 0.5 |
| T5.06 | Sentry + structured logs in route handlers | T0.04 | Forced 500 produces alert. | manual | 0.5 |
| T5.07 | Production deploy checklist + DNS + Twilio numbers | all | First customer goes live. | go-live | 1.0 |

Phase 5 total: ~6.25 dev-days.

## Aggregate

| Phase | Dev-days |
| --- | --- |
| 0 - Foundations | 2.85 |
| 1 - Schema | 11.5 |
| 2 - Operational core | 12.4 |
| 3 - AI bridge + Inbox | 16.2 |
| 4 - Reporting | 5.4 |
| 5 - Polish + onboarding | 6.25 |
| **MVP total** | **~54.6 dev-days** |

Translate to calendar:

- Solo (0.6 dev-day per calendar day): ~91 calendar days = ~13 weeks = ~3 months.
- Two-engineer pair (1.4x speedup, not 2x, due to coordination): ~9-10 weeks.
- Add 15-20% slack for unknowns and customer-feedback loops.

The plan's earlier 34-50 estimate underbudgeted Phase 1 (schema is ~11 days, not 6-9) and Phase 3 (16 days, not 8-12) once each task was sized. This list is the better number.

## Risk-weighted "must ship vs nice to have"

If the timeline is tight, ship in this order:

1. Phase 0 + Phase 1 (T1.01-T1.16, skip T1.18 views).
2. Phase 2 minus T2.02 (CSV import), T2.06 (barcode), T2.13 (Z-report). Cashier flow alive at ~7 dev-days.
3. Phase 3 minus T3.09 (orders.draft via voice) and T3.13 (full AI Inbox - ship handoffs only).
4. Phase 4: T4.02 + T4.03 + T4.04 only.
5. Phase 5: T5.01 + T5.03 + T5.07.

Cut-down MVP target: ~30 dev-days = 6-7 calendar weeks solo. Trade-off: no barcode, no shop-style takeaway voice ordering, lighter AI inbox, no email digest.

## Out of scope (deferred)

These are tracked here so they do not creep in:

- Stripe / terminal payments
- Kitchen display
- Floor-plan table layout
- Multi-location reporting
- Inventory PO flow
- Loyalty / gift cards
- Mobile cashier app
- Thermal printer driver
