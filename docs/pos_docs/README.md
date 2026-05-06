# Reserve POS - Implementation Docs

This folder is the practical companion to the Reserve POS strategy. It tells a builder exactly what to make, in what order, with what stack, and how to start.

The strategy lives elsewhere; do not duplicate it here. Source-of-truth strategy docs:

- `../POS_SYSTEM_STRATEGY.md` - product concept, modules, MVP tiers
- `../AGENT_DASHBOARD_POS_INTEGRATION.md` - how the existing dashboard and LiveKit agent become the POS
- `../PRODUCT_STRATEGY.md` - positioning, target customer, pricing
- `../REBRAND_BRIEF.md` - brand voice, colours, logo rules
- `../../AGENTS.md` - workflow rules for any coding agent

## Reading order

| Reader | Read in this order |
| --- | --- |
| First-time builder | README -> 03 -> 01 -> 05 -> 04 |
| Product / non-technical | README -> 01 -> 04 -> 08 |
| Backend engineer | 02 -> 06 -> 07 -> 04 |
| AI / agent engineer | 06 -> 01 (section 6) -> 02 (ai_actions, handoffs) |
| Anyone planning a sprint | 04 -> 08 |

## Files

| # | File | What it answers |
| --- | --- | --- |
| 0 | `README.md` | Where do I start? |
| 1 | `01_SYSTEM_DESIGN.md` | How is the system shaped? Modules, flows, multi-tenancy, AI safety boundary. |
| 2 | `02_DATA_MODEL.md` | What tables, columns, and invariants exist? |
| 3 | `03_TECH_STACK.md` | Which technologies and why? |
| 4 | `04_TASK_LIST.md` | What do I build, in what order, how long does each take? |
| 5 | `05_SKELETON_BOOTSTRAP.md` | What do I run on day 1 to get a working dev environment? |
| 6 | `06_AI_AGENT_API_SPEC.md` | What endpoints does the LiveKit agent call, with what shapes? |
| 7 | `07_RECEIPT_AND_PAYMENTS.md` | How does a sale become a receipt and a payment record? |
| 8 | `08_OPEN_QUESTIONS.md` | What decisions are still open? |

## Core architectural rules (do not violate without updating strategy docs)

1. Reserve POS is built by extending `D:\Work\Reserve_Ai\agent\Dashboard`, not as a new project.
2. The LiveKit agent never writes business data directly. It calls `/api/agent/*` endpoints.
3. Every AI write becomes an `ai_actions` row plus a downstream entity row, in one transaction.
4. Every business table is multi-tenant by `restaurant_id` and protected by Supabase RLS.
5. The first vertical is restaurants. Schema must accept salon, barber, tattoo, nail, wellness, spa later without rewrites.
6. MVP payments are manual (cash / card / transfer / paid-on-pickup). Stripe and terminal integration come after MVP.
7. MVP receipts are on-screen plus downloadable PDF. Thermal, email, WhatsApp come later.
8. Currency is stored as ISO code per row. EUR ships first; MUR and others work without migration.

## What this folder is not

- Not a strategy doc. Strategy lives in the parent `docs/` files listed above.
- Not a code repo. The code lives in `D:\Work\Reserve_Ai\agent\Dashboard`. This folder describes how to extend it.
- Not a final spec. Open questions in `08_OPEN_QUESTIONS.md` get resolved during build.

## Update rules

- If a file in this folder gets out of sync with `POS_SYSTEM_STRATEGY.md` or `AGENT_DASHBOARD_POS_INTEGRATION.md`, update this folder, not those.
- Append every change to `../AGENT_CHANGELOG.md` per `AGENTS.md` section 4.
- Keep ASCII only. No emojis, no smart quotes.
