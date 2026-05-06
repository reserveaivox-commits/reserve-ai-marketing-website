# 03 - Tech Stack

The chosen stack for Reserve POS, why, and what we are not picking. This is the reference any engineer can point at when a "let's just use X" suggestion comes up.

## 1. Headline choice

Reserve POS extends the existing dashboard, so we inherit its stack:

| Concern | Choice | Version (target) |
| --- | --- | --- |
| Web framework | Next.js (App Router) | 14.x or newer |
| Language | TypeScript | 5.x |
| UI styling | Tailwind CSS | 3.x (project may upgrade to 4 later) |
| UI primitives | Radix UI + custom `packages/ui` | latest stable |
| Forms / validation | React Hook Form + Zod | latest |
| Database | Postgres via Supabase | Supabase managed |
| Auth | Supabase Auth (email + magic link) | managed |
| Realtime | Supabase Realtime | managed |
| Storage (PDFs, logos) | Supabase Storage | managed |
| Server-side runtime | Node.js (Next.js route handlers) | 20 LTS |
| Background jobs | Supabase Edge Functions for short jobs; pg-cron for scheduled | managed |
| Voice agent | Python LiveKit agents (existing) | unchanged |
| LLM | OpenAI GPT-4o (current) via LiveKit | unchanged |
| SMS | Twilio (existing) | unchanged |
| PDF receipts | `@react-pdf/renderer` | latest |
| Package manager | pnpm | 9.x |
| Monorepo | Turbo | 2.x |
| Lint / format | ESLint + Prettier | latest |
| Testing | Vitest (unit) + Playwright (e2e) | latest |
| Deploy | Vercel for web, Railway/Fly for edge workers if needed | n/a |
| Observability | Vercel Analytics + Supabase logs + Sentry | latest |

## 2. Why this stack

- **Match what is running.** The dashboard repo at `D:\Work\Reserve_Ai\agent\Dashboard` is already Next.js + Supabase. Switching stacks means rewriting, not building.
- **One language end to end.** TypeScript on the server (route handlers) and the client cuts a class of bugs around DTOs.
- **RLS over hand-rolled auth.** Supabase Postgres + RLS is multi-tenant by design. Keeps the AI safety boundary easy: agent gets a service token, RLS plus our `/api/agent/*` checks isolate tenants.
- **PDF library colocated with React.** `@react-pdf/renderer` lets us share styling primitives between the on-screen receipt and the printable PDF. Less template drift.
- **Realtime built-in.** No socket server to host. Sales screen, AI inbox, calendar all subscribe to Supabase channels.
- **Cheap operationally.** Vercel + Supabase covers an MVP at near-zero infra effort.

## 3. Libraries by concern

### 3.1 Validation, schemas, types

- `zod` for input schemas. Every `/api/*` route imports a Zod schema and infers the type from it.
- `zod-to-openapi` (or hand-written) to publish the `/api/agent/*` schema for the Python agent.

### 3.2 Database access

- `@supabase/supabase-js` for client-side reads.
- Server-side: `@supabase/supabase-js` with the service-role key in route handlers, plus raw SQL via Postgres functions for transactional flows (`pos_finalize_sale`).
- No ORM. Drizzle was considered; ruled out because Supabase migrations and RLS are easier to maintain in raw SQL files.

### 3.3 UI components

- Radix primitives wrapped in `packages/ui` for accessibility.
- Tailwind for layout, custom CSS variables for theming (matches existing dashboard).
- `lucide-react` icons.
- `recharts` for reports.

### 3.4 Forms

- React Hook Form + Zod resolver. Already in the dashboard.

### 3.5 Receipts / PDFs

- `@react-pdf/renderer` for downloadable PDFs.
- Same JSX renders an on-screen preview and the PDF (one component, two layouts via prop).

### 3.6 Background work

- Short async tasks (send SMS confirmation, recompute stock cache): Supabase Edge Functions.
- Scheduled (nightly stock reconciliation, daily sales digest): `pg_cron` plus Edge Function.
- Anything heavier than 30 seconds: defer to MVP 3 with a real worker.

### 3.7 Testing

- Unit: Vitest for pure functions (price math, stock decrement logic, receipt-number formatting).
- Integration: Vitest + a temporary Supabase project (or `supabase db reset` against a local container).
- E2E: Playwright covering "owner sells two items, prints receipt".
- Contract test for `/api/agent/*`: a Python script in the LiveKit agent repo runs against a staging URL.

## 4. Why-not list

| Suggestion | Why we are not picking it |
| --- | --- |
| Vue / Angular | Dashboard is already React; switching cost is huge for zero gain. |
| Express / NestJS | Next.js route handlers already serve API routes; one runtime is simpler. |
| MySQL | Supabase = Postgres. RLS, JSONB, `gen_random_uuid()`, `pg_cron` are first-class. |
| Prisma / Drizzle | RLS plus stored procedures (`pos_finalize_sale`) work better with raw SQL. ORM noise outweighs benefit at this size. |
| MongoDB | We need transactional integrity on stock + sale. Document store does not help. |
| Custom auth | Supabase Auth is good enough; building auth wastes weeks. |
| Stripe at MVP | The MVP can ship with manual payment recording. Stripe is MVP 3, not MVP 1. |
| Self-hosted Postgres | Increases ops burden with no payoff at this scale. Move later if cost dictates. |
| GraphQL | Public surface is `/api/agent/*` plus internal route handlers. REST + Zod is enough. |

## 5. Browser and device targets

- Modern Chrome / Safari / Firefox on desktop and tablet.
- iPad in landscape is the priority cashier device.
- Phone view is read-only (today, calendar, AI inbox); cashier flow is tablet+ first.

## 6. Performance budgets (informal, MVP)

- Sales screen "complete sale" round-trip: under 400 ms on Vercel + Supabase EU region.
- Catalog grid (200 items): under 150 ms first paint with Server Components.
- AI Inbox realtime new-row latency: under 1 s end to end.
- PDF receipt generation: under 800 ms.

If a budget is missed, file an issue and add a note here. Do not silently accept regressions.

## 7. Versioning policy

- Pin major versions. Patch bumps land via Renovate weekly.
- A new major (Next 15, React 19, etc.) needs a one-paragraph ADR before the upgrade PR.

## 8. Out-of-stack tools we still use

- Twilio for SMS, voice number routing.
- LiveKit for realtime voice transport. Python agent stays Python.
- OpenAI for the conversational LLM. Model choice is owned by the agent project, not the POS.
- Email (Nodemailer) for receipts / confirmations - lifted from the website project's pattern.
