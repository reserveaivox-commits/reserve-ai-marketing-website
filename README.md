# Re.Serve AI Website

Marketing website for Re.Serve AI built with Next.js 16, React 19, Tailwind CSS 4, and `next-intl`.

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
- `src/components/CaseStudyDashboard.tsx` - animated booking impact section
- `src/app/[locale]/contact/page.tsx` - contact page
- `src/components/ContactForm.tsx` - contact form UI
- `src/app/api/contact/route.ts` - Gmail mail handler
- `src/components/Footer.tsx` - footer and legal links
- `messages/en.json`
- `messages/de.json`

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
