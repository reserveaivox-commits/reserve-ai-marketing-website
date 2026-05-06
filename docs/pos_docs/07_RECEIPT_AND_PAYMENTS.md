# 07 - Receipts and Payments

How a sale becomes a receipt and a payment record. This file pins the "important sale logic" from the PDF (section 10) to actual tables, code shape, and edge cases.

## 1. Sale lifecycle

```
DRAFT      ---> ACCEPTED   ---> IN_PROGRESS ---> READY      ---> COMPLETED
   |                                                            |     |
   +-- CANCELLED  (any time before COMPLETED)                   |     +-- REFUNDED (full or partial)
                                                                 +-- VOID (rare; admin-only)
```

For pure cashier flow (no kitchen), DRAFT -> COMPLETED happens in one transaction. For voice/takeaway, the agent creates DRAFT, kitchen accepts (ACCEPTED), prepares (IN_PROGRESS), marks READY, and a cashier marks COMPLETED on pickup.

## 2. The "important sale logic" - now with our tables

PDF section 10 sale logic, mapped exactly:

```
Inputs:
  restaurant_id, items [{ menu_item_id, quantity, notes? }],
  payment { method, paid_amount_cents }, discount_cents?, customer_id?, source

Steps (all inside one Postgres transaction, function pos_finalize_sale):
  1. Lock and load every menu_item by id WHERE restaurant_id = $1 AND deleted_at IS NULL.
     - If any missing: return error UNKNOWN_ITEM.
  2. For each item where kind = 'product' AND stock_quantity IS NOT NULL:
       - If stock_quantity < requested_quantity: return error OUT_OF_STOCK { item_id, available }.
  3. Compute line totals using each item's price_cents and tax_rate_bps.
       line_subtotal = unit_price * quantity
       line_tax      = round(line_subtotal * tax_rate_bps / 10000)
       line_total    = line_subtotal + line_tax
  4. Compute order subtotal, tax, discount, total.
       discount_cents must be <= subtotal.
  5. INSERT INTO orders (...) VALUES (...) RETURNING id, receipt_number=pos_next_receipt_number($1).
  6. INSERT INTO order_items (...) one per line.
  7. UPDATE menu_items SET stock_quantity = stock_quantity - quantity for products only.
  8. INSERT INTO stock_movements (type='sale', quantity=-q, reason='order:'||order_id) per product.
  9. INSERT INTO payments (status, method, amount, ...).
  10. INSERT INTO audit_log (action='sale.created', entity='order', before=null, after=order_row).
  COMMIT.

  Return: { order_id, receipt_number, total_cents }.
```

Key invariants verified by the function:

- All-or-nothing. A failed step rolls back stock and order.
- Receipt number is monotonic per restaurant.
- Stock cache and ledger agree (the function updates both).

## 3. Sketch of `pos_finalize_sale`

```sql
create or replace function pos_finalize_sale(p_restaurant_id uuid, p_payload jsonb)
returns jsonb
language plpgsql
security definer
as $$
declare
  v_order_id uuid := gen_random_uuid();
  v_receipt_number text := pos_next_receipt_number(p_restaurant_id);
  v_subtotal int := 0;
  v_tax int := 0;
  v_discount int := coalesce((p_payload->>'discount_cents')::int, 0);
  v_total int := 0;
  v_item jsonb;
  v_menu record;
begin
  -- 1+2 validate items + stock
  for v_item in select * from jsonb_array_elements(p_payload->'items') loop
    select id, kind, name, price_cents, tax_rate_bps, stock_quantity
      into v_menu
      from menu_items
      where id = (v_item->>'menu_item_id')::uuid
        and restaurant_id = p_restaurant_id
        and deleted_at is null
      for update;

    if not found then
      raise exception 'UNKNOWN_ITEM:%', (v_item->>'menu_item_id');
    end if;

    if v_menu.kind = 'product' and v_menu.stock_quantity is not null
       and v_menu.stock_quantity < (v_item->>'quantity')::numeric then
      raise exception 'OUT_OF_STOCK:%:%', v_menu.id, v_menu.stock_quantity;
    end if;

    -- accumulate
    declare
      v_qty numeric := (v_item->>'quantity')::numeric;
      v_line_sub int := round(v_menu.price_cents * v_qty)::int;
      v_line_tax int := round(v_line_sub * v_menu.tax_rate_bps / 10000.0)::int;
    begin
      v_subtotal := v_subtotal + v_line_sub;
      v_tax      := v_tax + v_line_tax;
    end;
  end loop;

  v_total := greatest(0, v_subtotal + v_tax - v_discount);

  -- 5 order
  insert into orders (id, restaurant_id, receipt_number, status, source,
                      subtotal_cents, tax_cents, discount_cents, total_cents,
                      payment_status, customer_id, currency, call_log_id)
  values (v_order_id, p_restaurant_id, v_receipt_number, 'completed',
          coalesce(p_payload->>'source','cashier'),
          v_subtotal, v_tax, v_discount, v_total,
          'paid', (p_payload->>'customer_id')::uuid,
          coalesce(p_payload->>'currency','EUR'),
          (p_payload->>'call_log_id')::uuid);

  -- 6 + 7 + 8 items, stock, ledger
  for v_item in select * from jsonb_array_elements(p_payload->'items') loop
    -- ... (insert order_items, update menu_items.stock_quantity, insert stock_movements)
    null;
  end loop;

  -- 9 payment
  insert into payments (restaurant_id, order_id, amount_cents, currency, method, status)
  values (p_restaurant_id, v_order_id, v_total,
          coalesce(p_payload->>'currency','EUR'),
          p_payload->'payment'->>'method',
          'paid');

  -- 10 audit
  insert into audit_log (restaurant_id, actor_type, actor_id, action, entity_type, entity_id, after_json)
  values (p_restaurant_id, 'user',
          (p_payload->>'actor_id')::uuid,
          'sale.created', 'order', v_order_id,
          jsonb_build_object('total_cents', v_total));

  return jsonb_build_object('order_id', v_order_id, 'receipt_number', v_receipt_number, 'total_cents', v_total);
end;
$$;
```

Production version handles partial payment, voids, and refunds; this sketch is the spine.

## 4. Receipt template

The on-screen and PDF receipt share one component (`apps/web/components/receipt/Receipt.tsx`) with a `mode: 'screen' | 'pdf'` prop. Layout target:

```
+----------------------------------+
| TRATTORIA SOPHIA                 |
| Friedrichstrasse 12, 10117 Berlin|
| Tel: +49 30 12345678             |
|                                  |
| Receipt: POS-2026-000123         |
| Date: 12 May 2026, 19:42         |
| Cashier: Maria L.                |
| Customer: Tom S. (+49 ...)       |
+----------------------------------+
| Spaghetti Carbonara x2  EUR 33.80|
|   no onion                       |
| Tiramisu x1             EUR  6.90|
+----------------------------------+
| Subtotal           EUR 40.70     |
| Tax (19%)          EUR  7.73     |
| Discount           EUR  0.00     |
| Total              EUR 48.43     |
| Paid (cash)        EUR 50.00     |
| Change             EUR  1.57     |
+----------------------------------+
| Thank you. See you again.        |
| reserve-ai.example / scan QR     |
+----------------------------------+
```

PDF library: `@react-pdf/renderer`. The component returns either:

- HTML JSX wrapped in Tailwind for the dashboard preview, or
- `<Document><Page>...</Page></Document>` PDF JSX when `mode === 'pdf'`.

A small adapter switches between primitives so the underlying data flows through one tree.

## 5. Receipt numbering

Per PDF section 11 ("bad receipt numbering -> messy accounting"):

- One sequence per restaurant: `pos_receipt_seq_<restaurant_id_short>` (created lazily).
- Function `pos_next_receipt_number(restaurant_id)` formats `POS-YYYY-NNNNNN` using the sequence's `nextval` and the current local year.
- Sequence is monotonic forever. Year change does not reset the counter.
- For accounting clarity, do not allow gaps. If a transaction is rolled back after consuming a sequence value, log a `audit_log` row `action='receipt_number.skipped'`.

## 6. Payment recording

MVP records the method and amount; no provider integration. Manual flow:

| Method | What we store | What staff does |
| --- | --- | --- |
| `cash` | `amount_cents`, change calculated client-side | Counts cash, hits Confirm. |
| `card_manual` | amount + last 4 (optional notes) | Runs external terminal, confirms in POS. |
| `transfer` | amount + reference | Customer shows transfer receipt. |
| `mobile` | amount + provider name in notes | Customer pays via app. |

Future, post-MVP:

- `online_card` -> Stripe Payment Intents.
- `terminal` -> SumUp / Adyen / Stripe Terminal.
- `voucher` -> internal credit, deducted from `customers.store_credit_cents` (when added).

## 7. Refunds

Two patterns:

### 7.1 Full refund of the latest sale

UI: "Refund last sale" on the cashier screen.

```
1. Confirm with manager PIN (Phase 5) or owner role.
2. Insert refund row { payment_id, amount_cents = payment.amount_cents }.
3. Update payment.status = 'refunded'.
4. Update order.status = 'refunded', order.payment_status = 'refunded'.
5. For each order_item with kind='product':
     INSERT stock_movement { type='restock', quantity=+q, reason='refund:'||order_id }.
     UPDATE menu_items.stock_quantity = stock_quantity + q.
6. Insert audit_log { action='sale.refunded', entity='order', actor_id=user }.
```

All in one transaction, like sale finalization.

### 7.2 Partial refund

Same flow but `amount_cents < payment.amount_cents`, `order.payment_status = 'partially_refunded'`, no automatic stock restore (operator decides per item).

## 8. Receipt delivery (MVP and beyond)

| Channel | MVP? | How |
| --- | --- | --- |
| On-screen preview | Yes | Receipt component HTML mode |
| Download PDF | Yes | `/api/receipts/[id].pdf` |
| Printer | No | Phase 5 stretch goal: WebUSB ESC/POS |
| Email | No | After MVP: reuse Nodemailer pattern from website project |
| WhatsApp | No | After MVP: Twilio WhatsApp template |

## 9. Edge cases

- **Item price changed mid-sale.** `name_snapshot` and `unit_price_cents` are frozen on `order_items`. Editing the menu later does not change historical receipts.
- **Tax rate changed.** Same approach: `tax_rate_bps` snapshotted per line.
- **Negative cash.** Reject; cashier should reduce items or apply discount instead.
- **Discount larger than subtotal.** Cap at subtotal in code; never store negative totals.
- **Stock decrement under concurrency.** `for update` lock per row inside `pos_finalize_sale` plus the unique stock-movement ledger keep concurrent sales correct.
- **Network drop after finalize but before client renders receipt.** Idempotent retrieval: `GET /api/orders/<id>/receipt` always works once the order exists. Client should use `Idempotency-Key` so retrying the sale does not double-charge.

## 10. What this doc does not cover

- Deposits (handled by `payments` rows linked to a `reservations.deposit_payment_id`; details in Phase 3).
- Tip handling (post-MVP; stored as a separate `payments` row or column on the existing payment).
- Tax brackets per region with effective dates (post-MVP).
- Multi-currency receipts (schema-ready; UX deferred).
