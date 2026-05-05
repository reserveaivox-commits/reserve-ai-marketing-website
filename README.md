# Reserve AI Website

Marketing website for Reserve AI built with Next.js 16, React 19, Tailwind CSS 4, and `next-intl`.

## Stack

- Next.js App Router
- React 19
- Tailwind CSS 4
- `next-intl` for `de` and `en`
- Framer Motion for motion
- Nodemailer for contact form delivery

## Main Areas

- Homepage with animated hero demo and moving industry cards
- Services hub and service detail pages
- Industries hub and industry detail pages
- Contact page with Gmail-backed contact form
- Footer legal pages

## Local Development

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:3000`.

## Environment

Create `.env.local` with:

```env
GMAIL_USER=reserveaivox@gmail.com
GMAIL_APP_PASSWORD=your_gmail_app_password
```

The contact form posts to `src/app/api/contact/route.ts` and sends email to `reserveaivox@gmail.com`.

## Important Paths

- `src/app/[locale]/page.tsx` - homepage
- `src/components/HeroDemoGate.tsx` - live demo/orbit section
- `src/components/BrandLogo.tsx` - Reserve AI logo component
- `public/brand/reserve-ai-mark.svg` - compact green/black orbital AI mark
- `public/brand/reserve-ai-logo.svg` - full Reserve AI logo asset
- `src/components/CaseStudyDashboard.tsx` - animated booking impact section
- `src/app/[locale]/contact/page.tsx` - contact page
- `src/app/[locale]/services/websites/showcase/page.tsx` - website showcase gallery
- `src/lib/websiteShowcase.ts` - website showcase catalog data
- `src/components/ContactForm.tsx` - contact form UI
- `src/app/api/contact/route.ts` - Gmail mail handler
- `public/images/website-showcase/` - optimized website showcase screenshots
- `src/components/Footer.tsx` - footer and legal links
- `messages/en.json`
- `messages/de.json`
- `AGENTS.md` - required instructions for future coding agents
- `docs/AGENT_CHANGELOG.md` - mandatory log of agent changes
- `docs/AGENT_START_PROMPT.md` - copy/paste prompt to give future agents before work
- `docs/PRODUCT_STRATEGY.md` - partner-facing product strategy
- `docs/REBRAND_BRIEF.md` - brand/logo direction and usage
- `docs/POS_SYSTEM_STRATEGY.md` - POS system concept designed to work with the AI agent
- `docs/AGENT_DASHBOARD_POS_INTEGRATION.md` - map of the existing agent/dashboard and how it becomes the POS
- `docs/WEBSITE_SHOWCASE_GUIDE.md` - how to add and maintain website showcase examples

## Notes From April 13, 2026

- Restyled the site toward a unified dark visual system
- Added site-wide aurora/stars and then optimized them for smoother performance
- Reworked the homepage demo to use a cleaner orbit system and live voice demo overlay
- Added animated case-study charts
- Updated pricing and package copy
- Restyled service pages, industries pages, and contact page to match the homepage
- Removed duplicate CTA sections and simplified footer flow
- Added working legal pages: privacy, imprint, and terms
- Wired the contact form to Gmail SMTP
- Added a moving industries marquee on the homepage

## Runtime Data

- `.data/` stores local development inbox/demo submissions
- `.data/` is ignored and should not be committed
