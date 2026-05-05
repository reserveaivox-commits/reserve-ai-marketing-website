# Reserve AI Rebrand Brief

Last updated: April 29, 2026

## 1. Brand Decision

Use the name Reserve AI.

Do not use:

- Re.Serve
- Reserve-AI
- ReserveAI as the public wordmark

Preferred written form:

Reserve AI

Reason:

The name is clearer, easier to say, easier to search, and directly connects the product to reservations, bookings, and artificial intelligence.

## 2. Logo Concept

The new logo direction is green and black with a solar-system AI concept.

Meaning:

- Black foundation: reliability, focus, premium software.
- Green orbit lines: active automation, growth, recovered bookings, always-on service.
- Solar-system structure: Reserve AI sits at the center and coordinates calls, bookings, calendars, and customer requests.
- AI core: the product is powered by an intelligent assistant, not just a static booking form.
- Orbiting dots: calls, customers, reservations, reminders, and follow-ups moving through one system.

The mark should feel precise and technical, not childish or decorative. The goal is "AI control center for bookings," not "space cartoon."

## 3. Created Assets

The rebrand assets added to this project:

- `public/brand/reserve-ai-mark.svg`: compact app mark and favicon-style logo.
- `public/brand/reserve-ai-logo.svg`: full horizontal logo with mark and wordmark.
- `src/components/BrandLogo.tsx`: reusable React logo component used in the navbar and footer.

Active implementation:

- Navbar now uses `BrandLogo`.
- Footer now uses `BrandLogo`.
- Site metadata title now uses Reserve AI.
- Site icon metadata points to `public/brand/reserve-ai-mark.svg`.
- Active EN/DE site copy uses Reserve AI instead of Re.Serve or Reserve-AI.

## 4. Color System

Primary colors:

- Orbit Black: `#050806`
- Deep Space: `#020403`
- Signal Green: `#32E875`
- Core Green: `#1BAA55`
- Dark Green: `#0E7A3B`
- Soft Glow: `#9CFFB3`

Supporting colors:

- Ice White: `#F6FBF4`
- Pale Green: `#DDFBE8`
- Mist Green: `#EFFFF4`
- Interface Slate: `#08101C`

Usage:

- Use black and deep space for premium backgrounds.
- Use Signal Green for CTAs, orbital accents, and active states.
- Use Soft Glow for highlights, hover states, and subtle AI energy.
- Use white and pale green for text contrast.
- Avoid returning to the old purple/gold accent system for the primary brand.

## 5. Typography

Current site typography:

- Montserrat for primary UI and headings.
- Playfair Display is loaded but the latest visual direction mostly uses a bold sans-serif system.

Recommendation:

Use Montserrat as the main brand typeface for now. It is readable, modern, and already implemented. If the brand later needs a more distinctive type system, evaluate one strong display face for hero headlines only, but do not introduce extra complexity before the product positioning is stable.

## 6. Logo Usage

Primary logo:

Use the full horizontal logo when there is enough width, such as the website header, footer, pitch decks, and proposals.

Mark only:

Use the compact mark for favicons, app icons, social avatars, small cards, and places where the full wordmark would be too small.

Clear space:

Keep at least one AI core width of empty space around the mark. Do not crowd it with text, icons, or borders.

Minimum size:

- Mark: 28px minimum in digital UI.
- Full logo: 140px minimum width in digital UI.

Backgrounds:

- Preferred: dark green/black backgrounds.
- Acceptable: white or pale green if the black mark remains visible.
- Avoid: busy photos behind the logo unless a dark overlay is used.

Do not:

- Do not stretch or rotate the logo.
- Do not recolor the orbits to purple or gold.
- Do not add a dot between Re and Serve.
- Do not add extra planets, stars, or AI icons around the mark.
- Do not use the old `Logo_Name.png` as the primary brand.

## 7. Visual Direction

The website should feel like:

- A calm AI command center.
- A premium booking automation system.
- A reliable digital assistant for real local businesses.

Visual ingredients:

- Dark panels with soft green glow.
- Orbital motion and circular systems.
- Clear booking outcomes and dashboards.
- Real industry imagery for local business relevance.
- Crisp CTA buttons with high contrast.

Avoid:

- Generic purple AI gradients.
- Overly futuristic sci-fi visuals that make the product feel abstract.
- Too many separate service colors competing with the main green brand.
- Decorative space visuals that do not support the booking/automation story.

## 8. Brand Voice

Tone:

- Clear
- Direct
- Helpful
- Operational
- Revenue-aware

The voice should sound like a practical business partner, not a hype-driven AI startup.

Preferred language:

- "Recover missed bookings."
- "Answer calls during busy hours."
- "Keep your team focused on customers."
- "Go live in 24 to 48 hours."
- "Connect your phone number, rules, and booking workflow."
- "See calls, outcomes, and recovered opportunities."

Avoid:

- "Revolutionary AI transformation."
- "Fully autonomous business brain."
- "Replace your staff."
- "Unlimited custom AI."
- "Magic automation."

## 9. Message Architecture

Primary message:

Reserve AI answers booking calls automatically, so your team can stay focused and no appointment gets lost.

Secondary messages:

- 24/7 booking coverage for busy service businesses.
- Built for restaurants, salons, barbershops, tattoo studios, nail studios, wellness centers, and spas.
- German and English support.
- Setup in 24 to 48 hours for simple workflows.
- Integrates with common calendars, booking tools, and POS workflows where possible.
- Reports what calls were handled and what opportunities were recovered.

Short tagline options:

- Your AI booking assistant.
- Never miss a booking call.
- More bookings. Fewer interruptions.
- The AI front desk for service businesses.
- Booking calls handled automatically.

Recommended tagline:

Your AI booking assistant.

## 10. Website Rebrand Checklist

Completed in this project:

- Added new SVG logo mark.
- Added new SVG full logo.
- Added reusable logo component.
- Replaced navbar text logo with the new component.
- Replaced footer old name with the new component.
- Updated site metadata and favicon icon reference.
- Updated active site copy from Re.Serve and Reserve-AI to Reserve AI.
- Shifted global brand tokens away from purple/gold and toward green/black.

Recommended next:

- Export PNG versions of the mark at 512px, 1024px, and transparent background variants.
- Create an Open Graph image using the new logo and product promise.
- Update any old prompt documents or mark them as legacy.
- Replace `public/images/Logo_Name.png` only after confirming nothing depends on it.
- Create a one-page PDF brand sheet for partners.
- Create pitch deck cover slide using the new logo and tagline.

## 11. Partner Explanation

Simple explanation for partners:

The new Reserve AI brand is built around an orbital AI system. The black base signals premium reliability. The green orbit system signals growth, automation, and bookings moving through one assistant. The AI core makes it obvious that the product is intelligent, while the solar-system layout communicates that Reserve AI coordinates calls, calendars, reminders, and customer requests from one center.

The brand should make the product easier to understand in the first five seconds: this is not a generic web agency or chatbot. This is an AI booking assistant that helps businesses recover missed revenue.

