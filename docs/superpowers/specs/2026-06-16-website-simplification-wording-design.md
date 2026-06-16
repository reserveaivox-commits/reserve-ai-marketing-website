# Reserve AI Website — Simplification & Wording Pass

Design spec — 2026-06-16

## Goal

Make the marketing website simpler and fix the wording so it clearly answers
three questions: **who we are**, **what we do**, and **how we are better**.

## Positioning decision

Reserve AI is positioned as **one product**: an AI booking assistant for service
businesses. This matches `docs/PRODUCT_STRATEGY.md`. Websites, booking
integrations, AI bots, AI agents, and SaaS/dashboards are reframed as **add-ons**
that make the assistant work better — not co-equal agency services.

## Messaging spine (approved)

Brand voice: clear, direct, helpful, operational, revenue-aware. No hype
("revolutionary", "magic", "replace your staff"). Per `docs/REBRAND_BRIEF.md`.

- **Who we are:** "Reserve AI is the AI booking assistant for restaurants,
  salons, and service businesses."
- **What we do (hero headline):** "Never lose a booking to a missed call."
  - Sub: "Reserve AI answers your phone 24/7 in German and English, books the
    customer, and keeps your team focused on the people in front of them."
- **How we're better — "Why Reserve AI" (4 pillars):**
  1. **Always on.** Answers every call, even at peak hours, evenings, and weekends.
  2. **Speaks your customers' language.** Handles German and English callers by default.
  3. **Knows your business.** Uses your real hours, services, and availability — it doesn't guess.
  4. **Live in 24–48 hours.** No IT team, no complex rollout. Connect your number and go.

All four pillars confirmed safe to claim publicly today.

## Mechanics

- **Copy** lives in `messages/en.json` and `messages/de.json` (~970 lines each).
  Both files are updated together and kept 1:1 in sync (identical key sets).
- **Structure** lives in the page/component `.tsx` files under
  `src/app/[locale]/` and `src/components/`.
- Languages updated this pass: **English + German**.

## Homepage structure (approved)

Current order: Hero → Problem → ServicesHub → HowItWorks → CaseStudy → Pricing →
Industries → FAQ → Closing.

Target order: Hero → Problem → **Add-ons strip** (demoted ServicesHub) →
HowItWorks → **Why Reserve AI (new)** → CaseStudy → Pricing → Industries → FAQ →
Closing.

## Scope — phased

### Phase 1 — Homepage (core "who / what / better")

- **Hero** (`hero` keys): rewrite `title`, `subtitle`; `badge` carries the
  "who we are" line. Keep the three stats (24/7, 48h, DE/EN) and the live demo.
- **Demote Services Hub** (`ServicesHubSection` in `page.tsx`, `services_hub`
  keys): convert from headline section ("Everything your business needs to grow")
  into a compact **"Add-ons"** strip below the core story. Reframe badge/title/
  subtitle so the 5 items read as optional extras, not co-equal services.
- **Add "Why Reserve AI"** section: new `WhyReserveSection` component placed
  between HowItWorks and CaseStudy, built from the 4 approved pillars. Reuse and
  rework the existing-but-unused `features` copy block as the source keys.
- Light polish only on Problem / How / Closing (already on-message).

### Phase 2 — Service pages reframed as add-ons

- Pages: `services` (index) + `services/websites`, `services/booking`,
  `services/ai-agents`, `services/ai-bots`, `services/saas-apps`.
- Keep the pages; reword intros (`services_page`, `svc_*` keys) so each reads as
  "an add-on to your Reserve AI booking assistant," not a standalone offering.

### Phase 3 — Supporting pages polish

- Industries index + 7 industry pages, pricing, contact, navbar, footer.
- Tighten wording for consistency with the spine; ensure every CTA points at the
  one outcome (book a demo / capture more bookings).
- Keys: `nav`, `footer`, `industries`, `industries_hub`, `ind_detail`,
  `pricing`, `contact_page`.

## Out of scope (this pass)

- Legal pages (privacy, terms, imprint).
- New features: ROI calculator, missed-call audit form, new lead-form fields.
- Logo / visual / color redesign. This pass is structure + wording only.

## Verification

- `npm run build` passes.
- `/en` and `/de` homepages render without missing-key errors.
- Every `t(...)` key referenced by changed components exists in **both**
  `en.json` and `de.json`.
- Manual spot-check that no demoted/removed section leaves a dangling import or
  unused component reference.
