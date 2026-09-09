# Reserve AI Marketing Website

Public website and product storytelling layer for Reserve AI. This project explains the offer, supports English and German content, collects leads, and presents the voice-agent/POS platform to prospective customers.

It is the public face of the product, not the operational system of record.

## At A Glance

| Item | Details |
| --- | --- |
| Local path | `D:\Work\Reserve_Ai\new may 2026\01-marketing-website` |
| Recommended repo | `reserve-ai-marketing-website` |
| Package name | `reserve-app` |
| Current branch | `main` |
| Current origin | `https://github.com/reserveaivox-commits/reserve-ai-marketing-website.git` |
| Hosting | Netlify config present; marketing live URL needs confirmation; demo embed uses Railway |
| Changelog | `docs/AGENT_CHANGELOG.md` |

## What This Project Owns

| Owns | Notes |
| --- | --- |
| Public website | Homepage, services, industries, contact, and legal pages |
| Website copy | English and German public-facing content |
| Lead capture | Contact form and email delivery |
| Brand presentation | Logo usage, website visuals, product positioning |
| Marketing docs | Product strategy, rebrand brief, website guidance |

It does not own bookings, calls, tenant data, POS records, Supabase writes, or staff workflows.

## How It Connects

```text
Visitor
  -> Marketing Website
  -> Contact form or sales conversation
  -> Reserve AI team
  -> Onboarding into Dashboard / POS / LiveKit setup
```

The website may use assets from `../assets` and describe features from POS, Dashboard, and LiveKit, but operational data belongs to those systems.

## Repository And Hosting

| Field | Value |
| --- | --- |
| Canonical target | Company GitHub repo `reserve-ai-marketing-website` |
| Temporary hosting custodian | Shail's Netlify account |
| Future hosting target | Company Netlify team |
| Deploy config | `netlify.toml` |
| Live URL | Add after confirmation |

Current remotes:

```text
origin:       https://github.com/reserveaivox-commits/reserve-ai-marketing-website.git
rosee-origin: https://github.com/Rosee1001/LANDING-PAGE-RESERVE-AI-MAY-2026.git
old-origin:   https://github.com/Rosee1001/NEW-RESERVE-WEBSITE.git
```

The Rosee remotes are legacy/reference remotes until cleanup is confirmed.

## Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16 App Router |
| UI | React 19, Tailwind CSS 4, Framer Motion |
| Localization | `next-intl` |
| Email | Nodemailer with Gmail SMTP |
| Package manager | npm |
| Runtime | Node.js `>=20.11.0` |

## Local Development

```powershell
npm install
npm run dev
```

Open:

```text
http://127.0.0.1:3000
```

## Environment

Create `.env.local`:

```env
GMAIL_USER=contact@re-serveai.com
GMAIL_APP_PASSWORD=your_gmail_app_password
NEXT_PUBLIC_DEMO_FRONTEND_URL=https://new-reserve-website-production.up.railway.app/
```

Contact form route:

```text
src/app/api/contact/route.ts
```

Live demo embed:

```text
src/components/HeroDemoGate.tsx
```

The homepage demo overlay embeds the public demo frontend from `NEXT_PUBLIC_DEMO_FRONTEND_URL`. The current Railway demo frontend is `https://new-reserve-website-production.up.railway.app/`; its token endpoint is served at `/api/token`. The demo backend/agent health root provided for this setup is `https://alert-creation-production-7799.up.railway.app/`. Keep the demo frontend token route dynamic/no-store because LiveKit JWTs expire quickly.

## Common Commands

| Command | Purpose |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server |
| `npm run build` | Build production output |
| `npm run lint` | Run ESLint |

## Important Paths

| Path | Purpose |
| --- | --- |
| `src/app/[locale]/page.tsx` | Localized homepage |
| `src/app/[locale]/contact/page.tsx` | Contact page |
| `src/app/api/contact/route.ts` | Contact form API route |
| `src/components/ContactForm.tsx` | Lead capture UI |
| `src/components/HeroDemoGate.tsx` | Homepage live demo iframe |
| `src/components/BrandLogo.tsx` | Website logo component |
| `messages/en.json` | English copy |
| `messages/de.json` | German copy |
| `public/brand/` | Website brand assets |
| `docs/` | Strategy, brand, and agent documentation |

## Agent Workflow

Before changing this project:

1. Read `../AGENTS.md`.
2. Read `../agent-skills/reserve-ai-context-loader/SKILL.md`.
3. Read this project's `AGENTS.md`.
4. Inspect the route, component, messages, and docs related to the task.
5. Before finishing, use `../agent-skills/reserve-ai-sync/SKILL.md`.
6. Update `docs/AGENT_CHANGELOG.md`.

Update root `../CHANGELOG.md` too when the change affects product positioning, shared assets, repo/hosting status, or another project.

## Deployment Notes

| Netlify field | Value |
| --- | --- |
| Build command | `npm run build` |
| Publish directory | `.next` |
| Plugin | `@netlify/plugin-nextjs` |

When the company Netlify team is available, either transfer the existing project or recreate it from the company GitHub repo and repoint DNS.

## Safety Rules

- Do not commit `.env.local`.
- Do not commit Gmail app passwords.
- Keep the public brand name as `Reserve AI`.
- Keep English and German content in sync when changing visible copy.
- Do not claim product capabilities that POS, Dashboard, or LiveKit do not actually support.

## Related Projects

| Project | Relationship |
| --- | --- |
| `../assets` | Logos, screenshots, videos, diagrams |
| `../02-PosSystem` | Operational POS and booking workflows |
| `../04-livekit-agent` | Voice agent referenced in the public offer |
| `../03-dashboard` | Existing operations dashboard referenced in product context |
TEST
