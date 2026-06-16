# Reserve AI Marketing Website

Recommended repo name:

```text
reserve-ai-marketing-website
```

Git description:

```text
Public Reserve AI website for brand, services, industries, contact, legal pages, and customer education.
```

## Project Role

This is the public-facing Reserve AI website. It explains the offer, supports English and German content, presents service and industry pages, and handles the contact flow.

It is the sales and education layer of the Reserve AI system. It does not own bookings, reservations, calls, POS data, or tenant operations.

## How It Connects

```text
Visitor
  -> Marketing Website
  -> Contact form / lead
  -> Reserve AI team
  -> Onboarding into Dashboard / POS / LiveKit setup
```

The website can reference demos, screenshots, and brand material from `assets`, but operational data belongs to Reserve POS, the Dashboard, Supabase, and the LiveKit agent.

## Repository And Hosting

Canonical target:

```text
Company GitHub repo: reserve-ai-marketing-website
```

Current local remote situation:

```text
origin:       https://github.com/reserveaivox-commits/reserve-ai-marketing-website.git
rosee-origin: https://github.com/Rosee1001/LANDING-PAGE-RESERVE-AI-MAY-2026.git
old-origin:   https://github.com/Rosee1001/NEW-RESERVE-WEBSITE.git
```

The `origin` URL is the intended company repo. It must be created from the `reserveaivox-commits` GitHub account before this local repo can push to it.

Hosting:

```text
Temporary hosting custodian: Shail's Netlify account
Target future hosting: company Netlify team when available
Config file: netlify.toml
Live URL: add after confirmation
```

## Stack

- Next.js 16 App Router
- React 19
- Tailwind CSS 4
- `next-intl`
- Framer Motion
- Nodemailer
- npm

## Local Setup

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
GMAIL_USER=reserveaivox@gmail.com
GMAIL_APP_PASSWORD=your_gmail_app_password
```

The contact form posts to:

```text
src/app/api/contact/route.ts
```

It sends mail to:

```text
reserveaivox@gmail.com
```

## Common Commands

```powershell
npm install
npm run dev
npm run build
npm run lint
```

## Important Paths

```text
src/app/[locale]/page.tsx
src/app/[locale]/contact/page.tsx
src/app/api/contact/route.ts
src/components/ContactForm.tsx
src/components/BrandLogo.tsx
src/components/HeroDemoGate.tsx
messages/en.json
messages/de.json
public/brand/
public/images/
docs/
```

## Deployment Notes

Netlify uses:

```text
Build command: npm run build
Publish directory: .next
Plugin: @netlify/plugin-nextjs
```

When the company Netlify team is available, either transfer the existing Netlify project or recreate it from the company GitHub repo and repoint DNS.

## Safety Rules

- Do not commit `.env.local`.
- Do not commit Gmail app passwords.
- Keep brand name as `Reserve AI`.
- Keep English and German content in sync when changing visible copy.

## Related Projects

- `../assets` provides logos, screenshots, videos, and diagrams.
- `../02-PosSystem` owns operational POS and booking workflows.
- `../04-livekit-agent` owns the voice agent referenced by the public offer.
