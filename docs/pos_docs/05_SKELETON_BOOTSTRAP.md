# 05 - Skeleton Bootstrap

What to do on day 1-5 to get a working dev environment with the first POS migration shipped end to end. Copy-pasteable.

## 0. What you should already have

- Windows or macOS with Node 20 LTS, Git, pnpm 9.
- Access to the existing Dashboard repo at `D:\Work\Reserve_Ai\agent\Dashboard`.
- Access to a Supabase project (dev) and its URL + anon + service-role keys.
- Optional but recommended: Docker Desktop for `supabase start` local stack.

If any of these are missing, fix that first. Do not try to bootstrap on a machine that cannot run the existing dashboard.

## 1. Day 1 - Repo and branch

```bash
cd D:/Work/Reserve_Ai/agent/Dashboard
git fetch origin
git checkout main
git pull
git checkout -b pos-mvp
```

Create the `apps/web/.env.local` if it does not exist:

```
NEXT_PUBLIC_SUPABASE_URL=https://<project>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon>
SUPABASE_URL=https://<project>.supabase.co
SUPABASE_SERVICE_ROLE_KEY=<service-role>
POS_OPERATIONAL_ENABLED=true
```

Install and run:

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`. You should see the existing dashboard. If not, stop and fix.

## 2. Day 1 - Confirm Supabase connection

In `apps/web/app/api` create a temporary smoke route:

```ts
// apps/web/app/api/_smoke/route.ts
import { createClient } from '@supabase/supabase-js'

export async function GET() {
  const supa = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
  const { count, error } = await supa.from('restaurants').select('id', { count: 'exact', head: true })
  return Response.json({ ok: !error, restaurants: count, error: error?.message ?? null })
}
```

Hit `http://localhost:3000/api/_smoke`. Expect `{ "ok": true, "restaurants": <n> }`.

Delete the file before you commit anything.

## 3. Day 2 - Migration tooling

The existing repo uses `supabase/full_schema.sql` as one bundled file. We move to numbered migrations going forward without touching the existing file.

Create `apps/web/supabase/migrations/0010_pos_categories.sql`:

```sql
create table if not exists categories (
  id uuid primary key default gen_random_uuid(),
  restaurant_id uuid not null references restaurants(id) on delete cascade,
  name text not null,
  position integer not null default 0,
  created_at timestamptz not null default now(),
  unique (restaurant_id, name)
);

alter table categories enable row level security;

create policy categories_tenant_select on categories
  for select using (
    restaurant_id in (
      select restaurant_id from restaurant_memberships
      where user_id = auth.uid()
    )
  );

create policy categories_tenant_write on categories
  for all using (
    restaurant_id in (
      select restaurant_id from restaurant_memberships
      where user_id = auth.uid() and role in ('owner','manager','front_desk')
    )
  );
```

Apply it. Two options:

- Hosted Supabase: paste into SQL Editor and run.
- Local stack (preferred for repeatability): `pnpm supabase db reset` then `pnpm supabase db push`.

Verify in Supabase Studio: `categories` table exists, RLS is on, two policies attached.

Commit:

```bash
git add apps/web/supabase/migrations/0010_pos_categories.sql
git commit -m "feat(pos): T1.01 categories table + RLS"
```

## 4. Day 2 - First feature flag

Add to `apps/web/lib/flags.ts` (create if missing):

```ts
export const flags = {
  posOperational: process.env.POS_OPERATIONAL_ENABLED === 'true',
} as const
```

Use in any new route or page so you can ship with the flag off in production until ready:

```ts
import { flags } from '@/lib/flags'
import { notFound } from 'next/navigation'

export default function Page() {
  if (!flags.posOperational) notFound()
  return <SalesScreen />
}
```

## 5. Day 3 - First new page

Goal: prove the layout works. No real logic.

Create `apps/web/app/(staff)/sales/page.tsx`:

```tsx
import { flags } from '@/lib/flags'
import { notFound } from 'next/navigation'

export default function SalesPage() {
  if (!flags.posOperational) notFound()

  return (
    <div className="grid grid-cols-[1fr_360px] gap-4 p-4 h-[calc(100vh-64px)]">
      <section className="rounded-2xl bg-zinc-900/40 p-4 backdrop-blur">
        <h2 className="text-lg font-semibold text-white">Catalog</h2>
        <p className="text-sm text-white/60">Coming up: T2.01.</p>
      </section>
      <aside className="rounded-2xl bg-zinc-900/60 p-4">
        <h2 className="text-lg font-semibold text-white">Cart</h2>
        <p className="text-sm text-white/60">Coming up: T2.04.</p>
      </aside>
    </div>
  )
}
```

Visit `http://localhost:3000/sales`. Layout shows.

Commit:

```bash
git commit -am "feat(pos): T2.03 sales page shell"
```

## 6. Day 3 - First new API route

Goal: prove the server side works against the new table.

Create `apps/web/app/api/categories/route.ts`:

```ts
import { NextRequest } from 'next/server'
import { createServerSupabase } from '@/lib/supabase/server'
import { z } from 'zod'

const Create = z.object({
  name: z.string().min(1).max(80),
  position: z.number().int().min(0).max(9999).default(0),
})

export async function GET() {
  const supa = await createServerSupabase()
  const { data, error } = await supa.from('categories').select('*').order('position')
  if (error) return Response.json({ ok: false, error: error.message }, { status: 500 })
  return Response.json({ ok: true, data })
}

export async function POST(req: NextRequest) {
  const supa = await createServerSupabase()
  const body = await req.json().catch(() => ({}))
  const parsed = Create.safeParse(body)
  if (!parsed.success) return Response.json({ ok: false, error: 'invalid_body', details: parsed.error.flatten() }, { status: 400 })

  const { data, error } = await supa.from('categories').insert(parsed.data).select().single()
  if (error) return Response.json({ ok: false, error: error.message }, { status: 500 })
  return Response.json({ ok: true, data })
}
```

Test with curl while logged in (browser session - dev only):

```bash
curl -X POST http://localhost:3000/api/categories \
  -H 'Content-Type: application/json' \
  -d '{"name":"Drinks","position":1}'
```

Expect `{ "ok": true, "data": { ... } }`. RLS will reject if the requesting user is not in `restaurant_memberships`.

## 7. Day 4 - Idempotency util

Drop `apps/web/lib/idempotency.ts`:

```ts
import { createClient } from '@supabase/supabase-js'

const supa = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

export async function withIdempotency<T>(
  restaurantId: string,
  key: string | null,
  fn: () => Promise<T>,
): Promise<T> {
  if (!key) return fn()

  // Check existing
  const { data: existing } = await supa
    .from('ai_actions')
    .select('result_entity_id, result_entity_type, status, payload')
    .eq('restaurant_id', restaurantId)
    .eq('idempotency_key', key)
    .maybeSingle()

  if (existing) return existing as unknown as T

  return fn()
}
```

Real wiring lands with `T0.07`. This stub unblocks `/api/agent/*` development.

## 8. Day 4 - Vitest first test

`apps/web/lib/money.test.ts`:

```ts
import { describe, it, expect } from 'vitest'

export function lineSubtotalCents(unit: number, qty: number): number {
  if (!Number.isInteger(unit)) throw new Error('unit must be integer cents')
  if (qty <= 0) throw new Error('qty must be positive')
  return Math.round(unit * qty)
}

describe('lineSubtotalCents', () => {
  it('multiplies cleanly', () => {
    expect(lineSubtotalCents(350, 2)).toBe(700)
  })
  it('rejects float cents', () => {
    expect(() => lineSubtotalCents(3.5, 2)).toThrow()
  })
})
```

Add `vitest` to dev deps if not present:

```bash
pnpm add -D vitest
```

Run:

```bash
pnpm vitest run
```

Green = your testing baseline is real.

## 9. Day 5 - First end-to-end smoke

Confirm the slice works:

1. With Supabase Studio, INSERT a row in `restaurants` and a `restaurant_memberships` row for your dev user.
2. Hit `POST /api/categories` with `{"name":"Drinks","position":1}`.
3. Hit `GET /api/categories`. Drinks shows.
4. RLS check: log in as a user without that restaurant membership; same calls return empty / 403.
5. Visit `/sales`. Layout shows.

If all five pass, the bootstrap is done. From here you work the task list (`04_TASK_LIST.md`) phase by phase.

## 10. Commit hygiene

- Branch `pos-mvp`. Sub-branches per phase: `pos-mvp/phase-1-schema`, `pos-mvp/phase-2-cashier`.
- Commits prefixed with task ID: `feat(pos): T2.04 cart state`. Easy to grep when tracing back.
- PRs squash into the phase branch. Phase branch merges to `pos-mvp` after green CI.
- `pos-mvp` lands on `main` only when MVP cuts; for now it stays open.

## 11. CI minimum

Add to existing GitHub Actions or equivalent:

- `pnpm lint`
- `pnpm vitest run`
- `pnpm build`

That is enough for Phase 0-2. Add Playwright e2e once `/sales` flow exists (Phase 2 end).

## 12. Things to avoid on day 1

- Do not refactor the existing dashboard files. Add, do not rewrite.
- Do not flip `POS_OPERATIONAL_ENABLED=true` in production env until Phase 5 polish is done.
- Do not write a new auth layer; reuse Supabase Auth.
- Do not introduce a second package manager. pnpm only.
- Do not add a new ORM. Use raw SQL + the existing `supabase-js` patterns.
