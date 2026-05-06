# 08 - Open Questions

Decisions that are not locked yet. Each entry has options, a recommendation, and the impact if we get it wrong. Resolve these as the build progresses; do not block Phase 0-1 on them, but pin them before the phases they touch.

## Q1 - Hardware support level for v1

Options:

- A. None. Browser-only. Customer prints from a normal printer if needed.
- B. Thermal printer only (USB ESC/POS via WebUSB).
- C. Full hardware (thermal + cash drawer + barcode scanner).

Recommendation: A for MVP. Barcode scanners that emulate keyboards already work without integration. WebUSB thermal printer is a Phase 5 stretch.

Impact if wrong: under-promising hardware blocks brick-and-mortar shops; over-promising delays MVP by weeks.

Resolve before: T2.06 (barcode), T2.13 (Z-report).

## Q2 - First vertical to ship

Options:

- A. Restaurants only (matches existing LiveKit agent).
- B. Restaurants + salons (data model already supports both).
- C. Generic shop (closer to PDF flow; simpler than restaurants).

Recommendation: A. Strategy docs and the working agent are restaurant-focused. Salons and shops are post-MVP without rewriting schema.

Impact if wrong: launching too broad means each vertical gets half-baked UX. Launching too narrow means slower TAM growth.

Resolve before: Phase 5 onboarding wizard (T5.03).

## Q3 - Multi-currency strategy

Options:

- A. EUR only at MVP. Schema stores ISO code per row but UI hides it.
- B. EUR + MUR (per the PDF examples).
- C. Per-tenant currency at signup, picked once.

Recommendation: A, with C wired in for Phase 5 onboarding. Adding MUR is a settings tweak, not a code change.

Impact if wrong: EUR-only blocks non-EU customers; multi-currency at MVP doubles testing surface.

Resolve before: T1.08 (orders schema review).

## Q4 - Refund authority

Options:

- A. Owner only.
- B. Owner + Manager.
- C. Owner + Manager with PIN; Cashier can request, manager approves.

Recommendation: B for MVP, C for v1.1. PIN flow is a real feature, not a sentence in docs.

Impact if wrong: too loose -> internal fraud risk; too strict -> slow customer experience at the till.

Resolve before: T2.14 (refund flow).

## Q5 - Table management depth in v1

Options:

- A. No tables. Reservations are time + party size only.
- B. Capacity rules per restaurant (e.g. 6 tables of 4, 3 tables of 6) without floor map.
- C. Drag-and-drop floor map.

Recommendation: B. The `resources` table + `availability_rules` already support B.

Impact if wrong: A blocks proper availability rejection ("seat for 6 at 7pm" should fail when only 4-tops are free); C is months of design work.

Resolve before: T3.05 (availability endpoint logic).

## Q6 - Kitchen display in v1

Options:

- A. None. Orders flow into the existing reservations/orders list.
- B. Read-only kitchen view filtered to ACCEPTED/IN_PROGRESS.
- C. Full KDS with ticket timing, course logic, bumping.

Recommendation: A. Kitchen displays warrant their own MVP cycle. AGENTS.md and POS strategy explicitly defer this.

Impact if wrong: shipping a half-KDS upsets actual restaurants more than no KDS does.

Resolve before: T2 phase planning if a customer demands it.

## Q7 - Auto-confirm voice bookings

Options:

- A. Always auto-confirm (current agent behavior).
- B. Always staff-review.
- C. Per-tenant setting `auto_confirm_voice_bookings` (already in `08_OPEN_QUESTIONS` but lives as a column in `restaurant_settings`).

Recommendation: C, default true for restaurants, default false for salons/tattoo (where artist preference matters).

Impact if wrong: auto-confirming every voice booking can override staff judgment; never auto-confirming defeats the AI value.

Resolve before: T3.08 (confirm endpoint).

## Q8 - Stripe vs cash-only at first paid customer

Options:

- A. Manual recording only at MVP. Owner signs off that they collect payment outside POS.
- B. Stripe Payment Links for deposits and online card.
- C. Full Stripe integration including refunds.

Recommendation: A at MVP, B at MVP+1 (about 1 month after first customer). C only when scale demands it.

Impact if wrong: A makes accounting messy for cards; B too soon eats engineering time before MVP ships.

Resolve before: first customer go-live (T5.07).

## Q9 - Where does the agent run authentication state?

Options:

- A. One API key per restaurant, stored in the agent's env per-restaurant.
- B. One master key, agent passes `restaurant_id` per request.
- C. Short-lived JWT minted by dashboard, agent fetches per call.

Recommendation: A. Maps to `pos_integrations` table 1:1, simplest to rotate.

Impact if wrong: B has tenant-isolation risk if the agent leaks an id; C is overkill at our scale.

Resolve before: T3.01 (API key model).

## Q10 - Single-page or multi-page cashier UI

Options:

- A. SPA: catalog left, cart right, modal for payment.
- B. Two-step page flow (catalog -> review -> pay).
- C. Touch-keypad mode for self-service / bar.

Recommendation: A. Faster, fewer reloads, matches every modern POS.

Impact if wrong: B is slower; C is its own product.

Resolve before: T2.03 design review.

## Q11 - Internationalization

Options:

- A. EN + DE only at MVP (existing dashboard languages).
- B. EN + DE + IT + FR (matches Reserve AI website target market).
- C. Customer-language detection on caller side only; staff UI stays EN+DE.

Recommendation: A for staff UI. The agent already speaks more languages on the customer side.

Impact if wrong: B requires translation work for every new screen; A keeps the team moving.

Resolve before: T5.02 (DE/EN copy task).

## Q12 - Receipt legal requirements (Germany)

Germany has GoBD requirements (immutable receipts, fiskal sign-off). Worth checking before live launch.

Options:

- A. Ignore at MVP, document as risk.
- B. Add a TSE (Technical Security Equipment) integration before live launch.
- C. Limit to non-cash businesses where GoBD pressure is lighter.

Recommendation: A short-term, with a hard prerequisite to resolve before any cash-heavy customer goes live in DE. Talk to a tax accountant.

Impact if wrong: launching cash-handling customers in Germany without TSE creates real legal exposure.

Resolve before: T5.07 (production deploy checklist) for any cash-handling tenant.

## Q13 - Backups and disaster recovery

Supabase has daily backups on most plans, but:

- Are point-in-time backups enabled?
- Is there a tested restore procedure?
- Where do receipts (PDFs) live? Storage backups?

Recommendation: Enable PITR on the production project, store nightly DB dump + storage snapshot to a separate bucket, run a quarterly restore drill.

Impact if wrong: a corrupted production DB without a tested restore path is an existential risk for any paying customer.

Resolve before: T5.05.

## Q14 - Demo data for sales conversations

Options:

- A. One seeded "Demo Pizzeria" tenant available to anyone with an Owner login.
- B. A read-only public demo URL with curated data and disabled writes.
- C. Per-prospect ephemeral tenants spun up on demand.

Recommendation: A for MVP, B once Reserve AI sales team needs to demo without setup.

Impact if wrong: nothing for MVP; B is a nice growth lever later.

Resolve before: never blocks build; resolve when sales motion demands.

## Q15 - When do we update strategy docs?

The plan says do not edit `POS_SYSTEM_STRATEGY.md` during this work. But the build will surface decisions (e.g. concrete endpoint URLs, table capacities) that supersede strategy text.

Recommendation: keep strategy docs as the *why*, keep `pos_docs/` as the *how*. When they conflict, update `pos_docs/`. Once a quarter, sweep both and reconcile in a single PR.

Resolve before: any time a partner asks "is the strategy still right?"
