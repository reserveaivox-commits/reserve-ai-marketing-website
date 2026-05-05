# Agent, Dashboard, And POS Integration Map

Last updated: April 29, 2026

Source reviewed:

- `D:\Work\Reserve_Ai\agent\Livekit\Restaurantia_New`
- `D:\Work\Reserve_Ai\agent\Dashboard`

## 1. Current System Summary

You already have two important pieces:

- Voice agent: a Python LiveKit agent called Restaurantia/Sophia.
- Online dashboard: a Next.js/Supabase dashboard for restaurants.

The agent currently handles inbound phone conversations, collects reservation details, validates dates and phone numbers, saves reservations to Supabase, sends SMS confirmations, and logs call transcripts.

The dashboard currently lets a restaurant owner log in, manage menu items, view reservations, view AI calls, and manage settings. It is multi-tenant through `restaurant_id`, Supabase Auth, restaurant memberships, and RLS.

This means the POS should not be a separate disconnected product. It should evolve from the dashboard.

Recommended direction:

The current dashboard becomes the first version of Reserve POS. The LiveKit agent becomes one of the main input channels that creates bookings, orders, call logs, and handoff tasks inside that POS.

## 2. What The Agent Does Today

Project:

`D:\Work\Reserve_Ai\agent\Livekit\Restaurantia_New`

Main files:

- `src/restaurantia/agent.py`
- `src/restaurantia/tools.py`
- `src/restaurantia/db.py`
- `src/restaurantia/prompts.py`
- `src/restaurantia/state.py`
- `src/restaurantia/sms.py`
- `src/restaurantia/phone.py`
- `src/restaurantia/dates.py`

Current call flow:

1. Caller reaches LiveKit through phone/SIP/WebRTC.
2. `agent.py` creates a per-call session.
3. Agent resolves `restaurant_id`.
4. Agent checks concurrent call capacity.
5. Sophia greets the caller.
6. OpenAI GPT-4o drives the conversation.
7. Agent uses tools:
   - `validate_date`
   - `validate_phone_number`
   - `finalize_reservation`
   - `get_menu_recommendation`
8. `finalize_reservation` saves the booking to Supabase.
9. Twilio sends SMS confirmation if configured.
10. `log_call` writes transcript and call analytics to Supabase.

Current database writes:

- `reservations`
- `call_logs`

Important limitation:

The agent currently finalizes reservations directly. It does not yet ask a POS availability engine whether a table, staff member, room, product, or service slot is truly available.

## 3. What The Dashboard Does Today

Project:

`D:\Work\Reserve_Ai\agent\Dashboard`

Main files:

- `apps/web/app/page.tsx`
- `apps/web/app/orders/page.tsx`
- `apps/web/app/menu/page.tsx`
- `apps/web/app/ai-calls/page.tsx`
- `apps/web/app/settings/page.tsx`
- `apps/web/app/api/bootstrap/route.ts`
- `apps/web/app/api/pos/key/route.ts`
- `apps/web/app/api/pos/ingest/route.ts`
- `apps/web/app/api/voice/inbound/route.ts`
- `apps/web/lib/data.ts`
- `supabase/full_schema.sql`

Current dashboard capabilities:

- User login and restaurant onboarding.
- Multi-tenant restaurant membership.
- Restaurant settings.
- Menu item CRUD.
- Reservation CRUD.
- AI call log display.
- Realtime updates from Supabase.
- POS ingest endpoint for external systems.
- API key generation for POS ingest.
- Twilio inbound route that maps phone numbers to restaurants.

Current database tables:

- `profiles`
- `restaurants`
- `restaurant_memberships`
- `restaurant_settings`
- `restaurant_phone_numbers`
- `menu_items`
- `reservations`
- `call_logs`
- `pos_integrations`
- `pos_external_ids`

Current limitation:

The dashboard is close to an operations console, but it is not yet a complete POS. The code itself notes the main gap: orders are currently represented by `reservations`, and revenue is `0` until pricing, order, or payment data exists.

## 4. How This Becomes The POS

The POS should be built by expanding the dashboard, not by replacing it.

The existing dashboard already has:

- Tenant model.
- Auth.
- Restaurant records.
- Settings.
- Menu.
- Reservations.
- AI calls.
- POS API key model.
- Supabase realtime.

The next step is to add the missing POS primitives:

- Customers.
- Staff.
- Services.
- Tables/resources.
- Availability rules.
- Orders.
- Order items.
- Payments.
- AI actions.
- Handoff inbox.
- Audit log.

Once these exist, the AI agent can stop writing only basic reservations and start using POS-safe APIs.

## 5. Target Data Flow

Target call-to-POS flow:

1. Customer calls the business.
2. LiveKit agent answers.
3. Agent identifies intent: booking, order, question, cancellation, change request, or handoff.
4. Agent calls POS API to read catalog, business rules, and availability.
5. POS returns only valid options.
6. Agent offers options to the customer.
7. Customer confirms.
8. Agent creates a draft or confirmed POS record.
9. Dashboard updates in realtime.
10. Staff can accept, edit, cancel, or complete the item.
11. POS reports the revenue and links it back to the AI call.

Critical rule:

The AI should not invent availability, prices, or policies. It should read them from the POS.

## 6. Recommended Architecture

Keep the current separation:

- Python LiveKit agent handles realtime voice.
- Next.js dashboard handles UI and business APIs.
- Supabase stores shared business data.

Recommended responsibility split:

- Agent: conversation, intent detection, tool calls, voice, transcript.
- Dashboard API: business rules, availability, booking/order creation, handoff creation.
- Supabase: source of truth for POS data.
- Dashboard UI: staff operations and owner reporting.

This gives you a clean model:

Agent speaks. POS decides. Dashboard operates.

## 7. API Structure The Agent Should Use

Add API endpoints to the dashboard for agent-safe actions.

Read endpoints:

- `GET /api/agent/business-profile`
- `GET /api/agent/catalog`
- `GET /api/agent/availability`
- `GET /api/agent/customer?phone=...`
- `GET /api/agent/rules`

Write endpoints:

- `POST /api/agent/bookings/draft`
- `POST /api/agent/bookings/confirm`
- `POST /api/agent/orders/draft`
- `POST /api/agent/orders/confirm`
- `POST /api/agent/handoffs`
- `POST /api/agent/call-events`

Why separate these from normal dashboard routes:

- The AI needs stricter permissions than staff.
- Every AI action must be logged.
- Some businesses may allow automatic confirmation, while others may require staff review.
- You need a clean boundary for future non-restaurant industries.

## 8. Schema Additions

Add these tables next.

### `customers`

Stores people who book, order, or call.

Fields:

- `id`
- `restaurant_id`
- `name`
- `phone`
- `email`
- `language`
- `notes`
- `created_at`
- `updated_at`

### `staff_members`

Stores workers who can be assigned to services, tables, or orders.

Fields:

- `id`
- `restaurant_id`
- `name`
- `role`
- `phone`
- `email`
- `is_active`

### `resources`

Represents tables, chairs, rooms, stations, or equipment.

Fields:

- `id`
- `restaurant_id`
- `type`
- `name`
- `capacity`
- `is_active`

### `services`

Needed when you expand beyond restaurants into salons, tattoo studios, spas, and wellness.

Fields:

- `id`
- `restaurant_id`
- `name`
- `description`
- `duration_minutes`
- `price_cents`
- `is_active`

### `availability_rules`

Controls what the AI is allowed to offer.

Fields:

- `id`
- `restaurant_id`
- `target_type`
- `target_id`
- `weekday`
- `start_time`
- `end_time`
- `capacity`
- `is_active`

### `orders`

Real POS order header.

Fields:

- `id`
- `restaurant_id`
- `customer_id`
- `status`
- `source`
- `subtotal_cents`
- `tax_cents`
- `total_cents`
- `payment_status`
- `created_at`
- `updated_at`

### `order_items`

Items inside an order.

Fields:

- `id`
- `order_id`
- `menu_item_id`
- `name_snapshot`
- `quantity`
- `unit_price_cents`
- `notes`

### `payments`

Tracks money.

Fields:

- `id`
- `restaurant_id`
- `order_id`
- `reservation_id`
- `amount_cents`
- `method`
- `status`
- `provider`
- `provider_payment_id`
- `created_at`

### `ai_actions`

Every important AI action.

Fields:

- `id`
- `restaurant_id`
- `call_log_id`
- `action_type`
- `status`
- `payload`
- `result_entity_type`
- `result_entity_id`
- `created_at`

### `handoffs`

Tasks that require human review.

Fields:

- `id`
- `restaurant_id`
- `customer_id`
- `call_log_id`
- `reason`
- `summary`
- `status`
- `assigned_to`
- `created_at`
- `resolved_at`

## 9. Dashboard Pages To Add

The existing pages are a good baseline:

- Dashboard
- Orders/Reservations
- Menu
- AI Calls
- Settings

Add these pages next:

- Customers
- Calendar
- AI Inbox
- Payments
- Staff
- Availability
- Reports

Most important first page:

AI Inbox.

Reason:

This is where staff review what the AI created or could not complete. It makes the system safer and easier to trust.

## 10. First Implementation Phase

Phase 1 should make the existing dashboard into an AI booking POS console.

Build:

- `customers` table.
- `ai_actions` table.
- `handoffs` table.
- Better reservation records linked to customers and call logs.
- Agent-safe dashboard APIs.
- AI Inbox page.
- Availability rules for restaurants.
- Dashboard reporting for AI-created bookings.

Do not build first:

- Inventory.
- Complex kitchen display.
- Full accounting.
- Multi-location analytics.
- Hardware terminal support.

Reason:

The fastest valuable product is not a full generic POS. It is an AI-native booking and order console that proves the agent creates real operational value.

## 11. How To Adapt The Current Agent

Current tool:

- `finalize_reservation`

Recommended future tools:

- `lookup_customer`
- `get_business_rules`
- `check_availability`
- `create_booking_draft`
- `confirm_booking`
- `create_order_draft`
- `create_handoff`
- `log_ai_action`

Current behavior:

The agent saves reservations directly to Supabase.

Recommended behavior:

The agent calls the dashboard API. The dashboard API validates business rules, writes the database, and logs the AI action.

This keeps the Python agent focused on voice and conversation instead of business logic.

## 12. Partner Explanation

Simple explanation:

The current dashboard is already the foundation of the POS. It stores the restaurant, menu, reservations, settings, call logs, and POS integration keys. The LiveKit agent already writes reservations and calls into the same Supabase database. To build the POS, we expand the dashboard with customers, staff, orders, payments, availability, and an AI Inbox. Then the agent uses POS APIs before confirming anything with the customer.

One-line system model:

Reserve AI talks to the customer, Reserve POS checks the business rules, and the dashboard gives staff control.

