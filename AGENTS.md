# Reserve AI Agent Instructions

This file is the first context file every coding agent must read before making changes in this repository.

## 1. Project Identity

This repository is the Reserve AI marketing website and strategy workspace.

Reserve AI is an AI booking assistant for service businesses. The product answers booking and reservation calls, captures missed demand, creates bookings or handoffs, and connects to an online dashboard/POS direction.

The brand direction is green and black with an orbital solar-system AI logo concept.

Do not reintroduce the old public brand names:

- Re.Serve
- Reserve-AI
- ReserveAI as the public written name

Use:

- Reserve AI

## 2. Required Reading Before Any Change

Before editing code, copy, assets, or docs, read the relevant source files first.

Minimum required docs:

- `README.md`
- `docs/PRODUCT_STRATEGY.md`
- `docs/REBRAND_BRIEF.md`
- `docs/POS_SYSTEM_STRATEGY.md`
- `docs/AGENT_DASHBOARD_POS_INTEGRATION.md`
- `docs/AGENT_CHANGELOG.md`

If touching the website implementation, also inspect:

- `src/app/[locale]/page.tsx`
- `src/app/globals.css`
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `src/components/BrandLogo.tsx`
- `messages/en.json`
- `messages/de.json`

If touching the AI agent, dashboard, POS, or integration strategy, also inspect the external project:

- `D:\Work\Reserve_Ai\agent\Livekit\Restaurantia_New`
- `D:\Work\Reserve_Ai\agent\Dashboard`

Key external files:

- `D:\Work\Reserve_Ai\agent\Livekit\Restaurantia_New\src\restaurantia\agent.py`
- `D:\Work\Reserve_Ai\agent\Livekit\Restaurantia_New\src\restaurantia\tools.py`
- `D:\Work\Reserve_Ai\agent\Livekit\Restaurantia_New\src\restaurantia\db.py`
- `D:\Work\Reserve_Ai\agent\Dashboard\README.md`
- `D:\Work\Reserve_Ai\agent\Dashboard\docs\architecture\ai-agents.md`
- `D:\Work\Reserve_Ai\agent\Dashboard\supabase\full_schema.sql`
- `D:\Work\Reserve_Ai\agent\Dashboard\apps\web\app\api\pos\ingest\route.ts`

## 3. Working Rule

Do not make changes from memory only.

Before editing:

1. Check the relevant docs.
2. Check the relevant implementation files.
3. Identify whether the task affects brand, product strategy, landing page, POS, dashboard, or LiveKit agent.
4. Make the smallest coherent change.
5. Verify the change if it affects runnable code.
6. Record the change in `docs/AGENT_CHANGELOG.md`.

## 4. Change Logging Requirement

After every completed change, update `docs/AGENT_CHANGELOG.md`.

Each log entry must include:

- Date.
- Agent or author name if known.
- Summary of the request.
- Files changed.
- What changed.
- Verification run.
- Open risks or next steps.

If no tests were run, write `Not run` and explain why.

Do not skip the changelog for documentation-only changes.

## 5. Product Context

The current strategy is:

- Main product: Reserve AI booking assistant.
- Main customer: service businesses that depend on bookings, reservations, appointments, or phone orders.
- Priority industries: restaurants, salons, barbershops, tattoo studios, nail studios, wellness centers, and spas.
- Business promise: fewer missed calls, more confirmed bookings, calmer staff.
- POS direction: evolve the existing online dashboard into Reserve POS.
- Agent direction: keep the LiveKit voice agent focused on conversation and use dashboard/POS APIs for business rules.

Important system model:

Reserve AI talks to the customer. Reserve POS checks the business rules. The dashboard gives staff control.

## 6. Website Context

Current website stack:

- Next.js App Router.
- React 19.
- Tailwind CSS 4.
- `next-intl` for English and German.
- Framer Motion.
- Nodemailer contact form.

Important site files:

- Homepage: `src/app/[locale]/page.tsx`
- Global styles: `src/app/globals.css`
- Navbar: `src/components/Navbar.tsx`
- Footer: `src/components/Footer.tsx`
- Logo component: `src/components/BrandLogo.tsx`
- English copy: `messages/en.json`
- German copy: `messages/de.json`

Brand assets:

- `public/brand/reserve-ai-mark.svg`
- `public/brand/reserve-ai-logo.svg`

## 7. POS And Agent Context

The existing agent/dashboard system is not inside this repo, but it is part of the product context.

Current agent:

- Python LiveKit agent.
- Handles inbound calls.
- Uses OpenAI GPT-4o.
- Saves reservations and call logs to Supabase.
- Sends SMS confirmations through Twilio.

Current dashboard:

- Next.js/Supabase multi-tenant dashboard.
- Has restaurants, menu items, reservations, call logs, settings, POS API keys, and POS ingest.
- Should become the first version of Reserve POS.

Main product gap:

The AI currently writes reservations directly. The target architecture is for the AI to call POS-safe dashboard APIs that check availability, business rules, orders, customers, and handoffs before confirming actions.

## 8. Documentation Discipline

When adding major product decisions, update the right doc:

- Product positioning: `docs/PRODUCT_STRATEGY.md`
- Brand/logo decisions: `docs/REBRAND_BRIEF.md`
- POS concept: `docs/POS_SYSTEM_STRATEGY.md`
- Existing agent/dashboard integration: `docs/AGENT_DASHBOARD_POS_INTEGRATION.md`
- Work history: `docs/AGENT_CHANGELOG.md`
- Project navigation: `README.md`

If a new doc is created, add it to `README.md`.

## 9. Verification Guidelines

For code changes in this repo, prefer:

- `npm run lint`
- `npm run build`

For copy/docs-only changes:

- Check formatting.
- Check links/paths.
- Check ASCII unless existing files require special characters.

For JSON changes:

- Parse `messages/en.json` and `messages/de.json`.

## 10. Guardrails

- Preserve the Reserve AI green/black/orbital brand direction.
- Do not casually rename product concepts without updating strategy docs.
- Do not make the company look like a generic agency if the task is product positioning.
- Do not edit old prompt docs unless the task specifically asks for image-prompt cleanup.
- Do not delete or replace the old logo file unless confirming nothing depends on it.
- Do not change dependency versions unless the task requires it.
- Do not make destructive Git changes.

