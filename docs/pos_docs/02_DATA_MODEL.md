# 02 - Data Model

The Postgres schema for Reserve POS. All tables live in a Supabase project. RLS on by default.

This extends the schema in `D:\Work\Reserve_Ai\agent\Dashboard\supabase\full_schema.sql`. Existing tables stay; new tables are listed in section 3 and 4. Migrations live in `apps/web/supabase/migrations/`.

## 1. Conventions

- All table names lower_snake plural: `customers`, `order_items`.
- Primary key: `id uuid primary key default gen_random_uuid()`.
- Tenant column: `restaurant_id uuid not null references restaurants(id) on delete cascade`.
- Money columns: `*_cents integer` plus separate `currency text default 'EUR'`. Never store floats.
- Timestamps: `created_at timestamptz not null default now()`, `updated_at timestamptz not null default now()` with a trigger.
- Soft delete: `deleted_at timestamptz null` only on tables where it matters (catalog items). Sales records are immutable.
- Status columns are text with a CHECK constraint listing allowed values. Easier to evolve than enums.
- All business tables have a Realtime publication and an RLS policy.

## 2. Existing tables (already in dashboard)

Do not duplicate or rename these. New tables FK into them.

```
profiles                     -- linked to auth.users
restaurants                  -- the tenant
restaurant_memberships       -- profile <-> restaurant with role
restaurant_settings          -- per-restaurant config
restaurant_phone_numbers     -- Twilio SID + number -> restaurant
menu_items                   -- legacy product catalog (extended in section 3)
reservations                 -- legacy bookings (extended in section 3)
call_logs                    -- LiveKit call transcripts
pos_integrations             -- API key for external POS / agent
pos_external_ids             -- map dashboard ids to external ids
```

Two carry-over notes:

- `menu_items` becomes the products/services table. Add columns rather than create a new one (section 3.1).
- `reservations` keeps its existing rows. Orders are a new table; reservations remain the bookings concept.

## 3. Table additions

### 3.1 menu_items - additions

```sql
alter table menu_items
  add column if not exists kind text not null default 'product'
    check (kind in ('product','service')),
  add column if not exists barcode text,
  add column if not exists sku text,
  add column if not exists category_id uuid references categories(id),
  add column if not exists cost_price_cents integer,
  add column if not exists tax_rate_bps integer default 0,        -- basis points: 1900 = 19%
  add column if not exists stock_quantity integer,                 -- null for services
  add column if not exists low_stock_threshold integer default 5,
  add column if not exists duration_minutes integer,               -- services only
  add column if not exists buffer_minutes integer default 0,
  add column if not exists is_active boolean not null default true,
  add column if not exists deleted_at timestamptz;

create unique index if not exists menu_items_barcode_key
  on menu_items (restaurant_id, barcode) where barcode is not null;
```

Why one table: the PDF says `products`; the dashboard already uses `menu_items`. Adding a `kind` column is cheaper than maintaining two parallel tables and lets a salon ship without a schema redesign.

### 3.2 categories

```sql
create table categories (
  id uuid primary key default gen_random_uuid(),
  restaurant_id uuid not null references restaurants(id) on delete cascade,
  name text not null,
  position integer not null default 0,
  created_at timestamptz not null default now(),
  unique (restaurant_id, name)
);
```

### 3.3 customers

```sql
create table customers (
  id uuid primary key default gen_random_uuid(),
  restaurant_id uuid not null references restaurants(id) on delete cascade,
  name text,
  phone text,
  email text,
  language text default 'en',
  notes text,
  tags text[] default '{}',
  consent_marketing boolean not null default false,
  visits_count integer not null default 0,
  total_spend_cents integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index customers_phone_key on customers (restaurant_id, phone) where phone is not null;
create unique index customers_email_key on customers (restaurant_id, email) where email is not null;
```

`visits_count` and `total_spend_cents` are denormalized; updated by trigger on order completion.

### 3.4 staff_members

```sql
create table staff_members (
  id uuid primary key default gen_random_uuid(),
  restaurant_id uuid not null references restaurants(id) on delete cascade,
  profile_id uuid references profiles(id),                          -- null if staff has no login
  display_name text not null,
  role text not null default 'staff',
  phone text,
  email text,
  color_hex text default '#22c55e',                                 -- calendar tint
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);
```

### 3.5 resources

Tables, rooms, chairs, treatment beds, stations.

```sql
create table resources (
  id uuid primary key default gen_random_uuid(),
  restaurant_id uuid not null references restaurants(id) on delete cascade,
  type text not null check (type in ('table','chair','room','station','equipment','other')),
  name text not null,
  capacity integer not null default 1,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);
```

### 3.6 availability_rules

Generic rule table the AI reads to avoid inventing slots.

```sql
create table availability_rules (
  id uuid primary key default gen_random_uuid(),
  restaurant_id uuid not null references restaurants(id) on delete cascade,
  target_type text not null check (target_type in ('restaurant','staff_member','resource','service')),
  target_id uuid,
  weekday smallint check (weekday between 0 and 6),                 -- 0 = Monday
  date date,                                                         -- specific date overrides weekday
  start_time time,
  end_time time,
  capacity integer,
  is_closed boolean not null default false,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);
```

Combinations: `(weekday, start_time, end_time)` for recurring hours; `(date, is_closed=true)` for holidays; `(target_type='staff_member', target_id, weekday, ...)` for staff schedules.

### 3.7 reservations - additions

```sql
alter table reservations
  add column if not exists customer_id uuid references customers(id),
  add column if not exists staff_member_id uuid references staff_members(id),
  add column if not exists resource_id uuid references resources(id),
  add column if not exists service_id uuid references menu_items(id),
  add column if not exists duration_minutes integer,
  add column if not exists status text not null default 'confirmed'
    check (status in ('draft_ai','pending','confirmed','rescheduled','cancelled','no_show','completed')),
  add column if not exists source text default 'manual'
    check (source in ('manual','voice','web','sms','external_pos')),
  add column if not exists call_log_id uuid references call_logs(id),
  add column if not exists deposit_payment_id uuid;                  -- FK added after payments
```

### 3.8 orders

```sql
create table orders (
  id uuid primary key default gen_random_uuid(),
  restaurant_id uuid not null references restaurants(id) on delete cascade,
  customer_id uuid references customers(id),
  staff_member_id uuid references staff_members(id),
  receipt_number text not null,                                      -- per-restaurant sequence
  status text not null default 'draft'
    check (status in ('draft','accepted','in_progress','ready','completed','cancelled','refunded')),
  source text not null default 'cashier'
    check (source in ('cashier','voice','web','external_pos')),
  call_log_id uuid references call_logs(id),
  currency text not null default 'EUR',
  subtotal_cents integer not null default 0,
  discount_cents integer not null default 0,
  tax_cents integer not null default 0,
  total_cents integer not null default 0,
  payment_status text not null default 'unpaid'
    check (payment_status in ('unpaid','partial','paid','refunded','void')),
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (restaurant_id, receipt_number)
);
```

Receipt numbers are generated by a per-restaurant sequence: `pos_next_receipt_number(restaurant_id)`. Format: `POS-2026-000123`. Resets nothing; monotonic forever for accounting cleanliness (PDF section 11).

### 3.9 order_items

```sql
create table order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references orders(id) on delete cascade,
  menu_item_id uuid references menu_items(id),
  name_snapshot text not null,                                       -- frozen at sale time
  kind_snapshot text not null,                                       -- 'product' or 'service'
  quantity numeric(10,3) not null check (quantity > 0),              -- numeric for half-portions
  unit_price_cents integer not null,
  tax_rate_bps integer not null default 0,
  line_subtotal_cents integer not null,
  line_tax_cents integer not null default 0,
  line_total_cents integer not null,
  notes text,
  created_at timestamptz not null default now()
);
```

`name_snapshot` and `unit_price_cents` are frozen so changing a product price later does not retroactively alter old receipts.

### 3.10 stock_movements

PDF section 4. Append-only ledger.

```sql
create table stock_movements (
  id uuid primary key default gen_random_uuid(),
  restaurant_id uuid not null references restaurants(id) on delete cascade,
  menu_item_id uuid not null references menu_items(id),
  type text not null check (type in ('sale','adjustment','restock','waste','transfer','correction')),
  quantity numeric(10,3) not null,                                   -- signed; negative = decrement
  reason text,                                                        -- e.g. 'order:<uuid>'
  actor_type text not null check (actor_type in ('user','agent','system')),
  actor_id uuid,
  created_at timestamptz not null default now()
);
```

Stock-on-hand is the sum of movements per item. The `menu_items.stock_quantity` column is a denormalized cache updated by the same transaction; reconciliation job runs nightly.

### 3.11 payments

```sql
create table payments (
  id uuid primary key default gen_random_uuid(),
  restaurant_id uuid not null references restaurants(id) on delete cascade,
  order_id uuid references orders(id),
  reservation_id uuid references reservations(id),
  customer_id uuid references customers(id),
  amount_cents integer not null,
  currency text not null default 'EUR',
  method text not null check (method in ('cash','card_manual','transfer','mobile','online_card','terminal','voucher')),
  status text not null default 'paid'
    check (status in ('pending','paid','failed','refunded','partially_refunded','void')),
  provider text,                                                     -- 'stripe' once added
  provider_payment_id text,
  notes text,
  created_at timestamptz not null default now(),
  check ((order_id is not null) or (reservation_id is not null))
);
```

### 3.12 refunds

```sql
create table refunds (
  id uuid primary key default gen_random_uuid(),
  restaurant_id uuid not null references restaurants(id) on delete cascade,
  payment_id uuid not null references payments(id),
  amount_cents integer not null,
  reason text,
  actor_type text not null,
  actor_id uuid,
  created_at timestamptz not null default now()
);
```

### 3.13 ai_actions

```sql
create table ai_actions (
  id uuid primary key default gen_random_uuid(),
  restaurant_id uuid not null references restaurants(id) on delete cascade,
  call_log_id uuid references call_logs(id),
  action_type text not null,                                         -- 'booking.draft', 'booking.confirm', 'order.draft', etc.
  status text not null check (status in ('pending','succeeded','failed','rejected_by_staff')),
  payload jsonb not null,
  result_entity_type text,                                            -- 'reservation','order','handoff'
  result_entity_id uuid,
  error_code text,
  error_message text,
  idempotency_key text,
  created_at timestamptz not null default now(),
  unique (restaurant_id, idempotency_key)
);
```

### 3.14 handoffs

```sql
create table handoffs (
  id uuid primary key default gen_random_uuid(),
  restaurant_id uuid not null references restaurants(id) on delete cascade,
  customer_id uuid references customers(id),
  call_log_id uuid references call_logs(id),
  reason text not null,                                              -- e.g. 'unusual_request', 'low_confidence'
  summary text,
  status text not null default 'open'
    check (status in ('open','assigned','resolved','dismissed')),
  assigned_to uuid references profiles(id),
  resolved_at timestamptz,
  created_at timestamptz not null default now()
);
```

### 3.15 audit_log

```sql
create table audit_log (
  id bigserial primary key,
  restaurant_id uuid not null references restaurants(id) on delete cascade,
  actor_type text not null check (actor_type in ('user','agent','system')),
  actor_id uuid,
  action text not null,                                              -- 'sale.created', 'reservation.cancelled'
  entity_type text not null,
  entity_id uuid,
  before_json jsonb,
  after_json jsonb,
  ip text,
  user_agent text,
  created_at timestamptz not null default now()
);

create index audit_log_restaurant_time on audit_log (restaurant_id, created_at desc);
create index audit_log_entity on audit_log (entity_type, entity_id);
```

## 4. ER overview (ASCII)

```
profiles ----< restaurant_memberships >---- restaurants
                                                |
                                                +--< menu_items (kind: product|service)
                                                |       \--< stock_movements
                                                +--< categories
                                                +--< customers ----< reservations
                                                |       |             \--- staff_members
                                                |       |             \--- resources
                                                |       |             \--- services (menu_items)
                                                |       \--< orders ----< order_items
                                                |              \--< payments ----< refunds
                                                +--< staff_members
                                                +--< resources
                                                +--< availability_rules
                                                +--< call_logs ----< ai_actions
                                                |                  \--< handoffs
                                                +--< audit_log
```

## 5. Key invariants

1. **Atomic sale.** Order, items, stock movement, stock cache, payment, audit row are committed in one DB transaction. Implemented inside `pos_finalize_sale(payload jsonb)` Postgres function.
2. **Stock never lies.** `menu_items.stock_quantity` equals `sum(stock_movements.quantity)` for each product. A nightly job verifies and writes a discrepancy row to `audit_log`.
3. **Receipts are immutable.** Once `orders.status = 'completed'`, only `notes` and refund-linked fields can change.
4. **AI writes go through `ai_actions`.** No row may be written to `reservations` or `orders` with `source = 'voice'` unless an `ai_actions` row exists in the same transaction.
5. **Tenant isolation.** Every business row carries `restaurant_id`. RLS denies cross-tenant reads. Service-role writes (jobs, agent) include explicit `restaurant_id` in every statement.
6. **Money is integer cents.** No floats in monetary columns or computations.
7. **Time is UTC at rest, displayed in restaurant timezone.** `restaurant_settings.timezone` (already exists) drives display.

## 6. RLS policy intent (samples)

Real policies live in `apps/web/supabase/migrations/`. Intent:

```sql
-- customers, orders, etc. (same shape for each)
create policy customers_tenant_select on customers
  for select using (
    restaurant_id in (
      select restaurant_id from restaurant_memberships
      where user_id = auth.uid()
    )
  );

create policy customers_tenant_write on customers
  for all using (
    restaurant_id in (
      select restaurant_id from restaurant_memberships
      where user_id = auth.uid() and role in ('owner','manager','front_desk')
    )
  );
```

Agent writes use the service role and skip RLS, so the route handler must verify `restaurant_id` matches the API key's restaurant.

## 7. Migrations strategy

- One migration file per feature: `0010_pos_categories.sql`, `0011_pos_orders.sql`, etc.
- Migrations are forward-only and idempotent (use `if not exists`).
- Seed data lives in `apps/web/supabase/seed.sql` (categories, default availability rules, demo restaurant).
- Test data: a `pnpm db:seed:demo` script populates a "Demo Pizzeria" tenant for local dev.

## 8. Reporting views

Materialized? No, regular views first; materialize only if a report exceeds 500 ms.

```sql
create or replace view v_daily_sales as
  select restaurant_id,
         date_trunc('day', created_at at time zone 'UTC')::date as day,
         count(*)                            as orders_count,
         sum(total_cents) filter (where status = 'completed') as revenue_cents,
         sum(total_cents) filter (where status = 'completed' and source = 'voice') as ai_revenue_cents
  from orders
  group by 1, 2;

create or replace view v_low_stock as
  select restaurant_id, id as menu_item_id, name, stock_quantity, low_stock_threshold
  from menu_items
  where kind = 'product'
    and stock_quantity is not null
    and stock_quantity <= low_stock_threshold
    and is_active
    and deleted_at is null;
```

## 9. What we are intentionally not modeling yet

- Inventory PO, suppliers, batch/lot tracking.
- Ingredient-level recipes / yield tracking for restaurants.
- Tip pooling and split-bill fairness rules.
- Tax brackets per region with effective dates (we store one rate per item; multi-tax tables come later).
- Loyalty points, gift cards, store credit.
- Multi-location variants (`organization_id`, `location_id`) - schema-ready (use `restaurant_id` as the location key for now), but no UI.
