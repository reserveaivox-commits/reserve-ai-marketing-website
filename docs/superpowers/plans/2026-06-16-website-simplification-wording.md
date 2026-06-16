# Website Simplification & Wording Pass — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Simplify the Reserve AI marketing site and fix wording so it clearly answers who we are, what we do, and how we are better — positioning one product (the AI booking assistant) with everything else demoted to add-ons.

**Architecture:** Nearly all copy lives in `messages/en.json` and `messages/de.json`; both are edited together and must keep identical key sets. Structure lives in `src/app/[locale]/page.tsx` and `src/components/`. The only new component is `WhyReserveSection`. No new routes, no dependency changes.

**Tech Stack:** Next.js App Router (React 19), next-intl (JSON message catalogs), Tailwind CSS 4, Framer Motion. Package manager: npm. Verification: `npm run build`.

**Conventions for every task:**
- Edit EN and DE in the same task. Keys must match 1:1 across both files.
- Keep JSON valid (commas, quotes). After JSON edits, the parity/build check is the "test".
- Brand voice: clear, direct, revenue-aware. Never use "revolutionary", "magic", "fully autonomous", "replace your staff".
- Conventional-commit messages, end each with the Co-Authored-By trailer:
  ```
  Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>
  ```

**Shared parity check (referenced as "the parity check" below):**

```bash
node -e "const e=require('./messages/en.json'),d=require('./messages/de.json');const ek=(o,p='')=>Object.entries(o).flatMap(([k,v])=>v&&typeof v==='object'?ek(v,p+k+'.'):[p+k]);const a=new Set(ek(e)),b=new Set(ek(d));const miss=[...a].filter(x=>!b.has(x)),extra=[...b].filter(x=>!a.has(x));if(miss.length||extra.length){console.error('KEY MISMATCH\nmissing in de:',miss,'\nextra in de:',extra);process.exit(1);}console.log('OK: '+a.size+' keys match');"
```
Expected output: `OK: <n> keys match`.

---

## Phase 1 — Homepage (who we are / what we do / how we're better)

### Task 1: Rewrite the hero copy

**Files:**
- Modify: `messages/en.json` (`hero.badge`, `hero.title`, `hero.subtitle`)
- Modify: `messages/de.json` (same keys)

- [ ] **Step 1: Edit EN `hero`**

Set these three values (leave all other `hero.*` keys unchanged):

```json
"badge": "The AI booking assistant for restaurants, salons, and service businesses.",
"title": "Never lose a booking to a missed call.",
"subtitle": "Reserve AI answers your phone 24/7 in German and English, books the customer, and keeps your team focused on the people in front of them."
```

- [ ] **Step 2: Edit DE `hero`**

```json
"badge": "Der KI-Buchungsassistent für Restaurants, Salons und Dienstleistungsunternehmen.",
"title": "Verlieren Sie keine Buchung mehr durch einen verpassten Anruf.",
"subtitle": "Reserve AI nimmt Ihre Anrufe rund um die Uhr auf Deutsch und Englisch entgegen, bucht den Kunden und hält Ihrem Team den Rücken frei für die Gäste vor Ort."
```

- [ ] **Step 3: Run the parity check**

Run the shared parity check command above. Expected: `OK: <n> keys match`.

- [ ] **Step 4: Commit**

```bash
git add messages/en.json messages/de.json
git commit -m "copy: rewrite hero to one clear booking promise"
```

---

### Task 2: Demote the Services Hub into an "Add-ons" strip

The carousel and its 5 cards stay where they are (position 3). Only the section header copy changes so the 5 items read as optional extras, not co-equal services. No component code changes — `ServicesHubSection` already reads `services_hub.badge/title/subtitle`.

**Files:**
- Modify: `messages/en.json` (`services_hub.badge`, `services_hub.title`, `services_hub.subtitle`)
- Modify: `messages/de.json` (same keys)

- [ ] **Step 1: Edit EN `services_hub`** (only these three keys; leave card copy and `page_*`/`cta_*` keys unchanged)

```json
"badge": "Optional add-ons",
"title": "Extras that make your assistant work even better",
"subtitle": "Most businesses start with the booking assistant alone. When you need more, these plug right in — websites, booking integrations, chatbots, and dashboards."
```

- [ ] **Step 2: Edit DE `services_hub`**

```json
"badge": "Optionale Add-ons",
"title": "Extras, mit denen Ihr Assistent noch besser arbeitet",
"subtitle": "Die meisten Unternehmen starten allein mit dem Buchungsassistenten. Wenn Sie mehr brauchen, lassen sich diese direkt anbinden – Websites, Buchungsintegrationen, Chatbots und Dashboards."
```

- [ ] **Step 3: Run the parity check** — expected `OK: <n> keys match`.

- [ ] **Step 4: Commit**

```bash
git add messages/en.json messages/de.json
git commit -m "copy: reframe services hub as optional add-ons"
```

---

### Task 3: Add the "Why Reserve AI" section (how we're better)

Adds a new `why` message block (4 pillars) and a `WhyReserveSection` component placed between How-it-works and the Case study.

**Files:**
- Modify: `messages/en.json` (add new top-level `why` block)
- Modify: `messages/de.json` (add matching `why` block)
- Create: `src/components/WhyReserveSection.tsx`
- Modify: `src/app/[locale]/page.tsx` (import + render after `<HowItWorksSection />`)

- [ ] **Step 1: Add EN `why` block**

Add this as a new top-level key (e.g. directly after the `how` block):

```json
"why": {
  "badge": "Why Reserve AI",
  "title": "Why service businesses choose Reserve AI",
  "subtitle": "Not just another chatbot — an assistant built around how your business actually books.",
  "p1_title": "Always on",
  "p1_desc": "Answers every call, even at peak hours, evenings, and weekends. No busy signal, no voicemail, no lost booking.",
  "p2_title": "Speaks your customers' language",
  "p2_desc": "Handles German and English callers by default, so every customer gets a clear answer in the language they expect.",
  "p3_title": "Knows your business",
  "p3_desc": "Works from your real opening hours, services, and availability, so it suggests times you can actually honour instead of guessing.",
  "p4_title": "Live in 24 to 48 hours",
  "p4_desc": "No IT team and no complex rollout. Connect your number, set your rules, and go live in a day or two."
}
```

- [ ] **Step 2: Add DE `why` block**

```json
"why": {
  "badge": "Warum Reserve AI",
  "title": "Warum sich Dienstleister für Reserve AI entscheiden",
  "subtitle": "Kein weiterer Chatbot – ein Assistent, der zu Ihrem echten Buchungsalltag passt.",
  "p1_title": "Immer erreichbar",
  "p1_desc": "Beantwortet jeden Anruf, auch in Stoßzeiten, abends und am Wochenende. Kein Besetztzeichen, keine Mailbox, keine verlorene Buchung.",
  "p2_title": "Spricht die Sprache Ihrer Kunden",
  "p2_desc": "Bearbeitet deutsche und englische Anrufer standardmäßig, damit jeder Kunde eine klare Antwort in der erwarteten Sprache erhält.",
  "p3_title": "Kennt Ihr Geschäft",
  "p3_desc": "Arbeitet mit Ihren echten Öffnungszeiten, Leistungen und Verfügbarkeiten und schlägt nur Zeiten vor, die Sie auch einhalten können.",
  "p4_title": "In 24 bis 48 Stunden startklar",
  "p4_desc": "Kein IT-Team und kein komplizierter Rollout. Nummer verbinden, Regeln festlegen und in ein bis zwei Tagen live gehen."
}
```

- [ ] **Step 3: Create `src/components/WhyReserveSection.tsx`**

Mirrors the existing card styling used by `HowItWorksSection` (4-up grid, icon tiles). It is a client-free server component using `useTranslations` like the other homepage sections.

```tsx
import { useTranslations } from "next-intl";
import Image from "next/image";
import ScrollAnimator from "@/components/ScrollAnimator";

const PILLAR_ICONS = [
  "/icons/icon-phone.png",
  "/icons/icon-instant.png",
  "/icons/icon-configure.png",
  "/icons/icon-launch.png",
];

export default function WhyReserveSection() {
  const t = useTranslations("why");
  const pillars = [1, 2, 3, 4].map((i) => ({
    title: t(`p${i}_title`),
    desc: t(`p${i}_desc`),
  }));

  return (
    <section className="section-flow-light py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel px-6 py-10 md:px-10 md:py-12">
          <ScrollAnimator>
            <div className="text-center mb-14">
              <p className="section-label mb-4">{t("badge")}</p>
              <h2 className="heading-serif text-3xl md:text-5xl text-white mb-4">
                {t("title")}
              </h2>
              <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
                {t("subtitle")}
              </p>
            </div>
          </ScrollAnimator>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, idx) => (
              <ScrollAnimator key={idx} delay={idx * 0.12}>
                <div className="group relative h-full overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.02))] px-6 py-8 shadow-[0_18px_50px_rgba(0,0,0,0.16)]">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-emerald-400/14 to-emerald-400/0 opacity-80" />
                  <div className="relative flex h-full flex-col">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[1.25rem] border border-white/8 bg-emerald-400/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                      <Image src={PILLAR_ICONS[idx]} alt={pillar.title} width={26} height={26} className="brightness-0 invert opacity-90" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-white">{pillar.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Wire it into the homepage**

In `src/app/[locale]/page.tsx`:

Add the import near the other component imports (after line 9):
```tsx
import WhyReserveSection from "@/components/WhyReserveSection";
```

In the `HomePage` return block, insert `<WhyReserveSection />` between `<HowItWorksSection />` and `<CaseStudySection />`:
```tsx
      <HowItWorksSection />
      <WhyReserveSection />
      <CaseStudySection />
```

- [ ] **Step 5: Run the parity check** — expected `OK: <n> keys match`.

- [ ] **Step 6: Build**

Run: `npm run build`
Expected: build completes with no missing-message or type errors.

- [ ] **Step 7: Commit**

```bash
git add messages/en.json messages/de.json src/components/WhyReserveSection.tsx "src/app/[locale]/page.tsx"
git commit -m "feat: add Why Reserve AI section with four differentiators"
```

---

### Task 4: Verify Phase 1 renders in both locales

**Files:** none (manual verification)

- [ ] **Step 1: Start the dev server**

Run: `npm run dev` (background)

- [ ] **Step 2: Check both homepages**

Open `http://localhost:3000/en` and `http://localhost:3000/de`. Confirm:
- Hero shows the new headline "Never lose a booking to a missed call." (DE equivalent).
- The carousel section header now reads "Optional add-ons".
- A "Why Reserve AI" section with 4 pillar cards appears after the 3-step "How it works".
- No untranslated keys (no raw strings like `why.p1_title`).

- [ ] **Step 3: Stop the dev server.** No commit (verification only).

---

## Phase 2 — Service pages reframed as add-ons

Each service page keeps its full body (sub-features, process, demos). Only the **intro `subtitle`** of each page changes so it reads as an add-on to the booking assistant. This is the meaningful reframe; the rest of each page is already accurate.

### Task 5: Reframe the services index page

**Files:**
- Modify: `messages/en.json` (`services_page.subtitle`, `services_hub.page_subtitle`)
- Modify: `messages/de.json` (same keys)

- [ ] **Step 1: Edit EN**

```json
// services_page.subtitle
"subtitle": "Reserve AI starts with one job: answering your booking calls. These services are optional add-ons that make the assistant fit your business even better.",
// services_hub.page_subtitle
"page_subtitle": "Optional add-ons around your Reserve AI booking assistant — websites, booking integrations, chatbots, and dashboards."
```

- [ ] **Step 2: Edit DE**

```json
// services_page.subtitle
"subtitle": "Reserve AI beginnt mit einer Aufgabe: Ihre Buchungsanrufe zu beantworten. Diese Leistungen sind optionale Add-ons, mit denen der Assistent noch besser zu Ihrem Geschäft passt.",
// services_hub.page_subtitle
"page_subtitle": "Optionale Add-ons rund um Ihren Reserve AI Buchungsassistenten – Websites, Buchungsintegrationen, Chatbots und Dashboards."
```

- [ ] **Step 3: Run the parity check** — expected `OK`.

- [ ] **Step 4: Commit**

```bash
git add messages/en.json messages/de.json
git commit -m "copy: frame services index as add-ons to the assistant"
```

---

### Task 6: Reframe the 5 service page intros

**Files:**
- Modify: `messages/en.json` (`svc_websites.subtitle`, `svc_booking.subtitle`, `svc_agents.subtitle`, `svc_bots.subtitle`, `svc_saas.subtitle`)
- Modify: `messages/de.json` (same keys)

- [ ] **Step 1: Edit EN — replace each `subtitle` with its add-on framing**

```json
// svc_websites.subtitle
"subtitle": "An optional add-on to your Reserve AI booking assistant: a fast, modern website that sends more callers and bookings your way.",
// svc_booking.subtitle
"subtitle": "An optional add-on to your Reserve AI booking assistant: connect your calendar and booking tools so confirmed appointments land automatically, with no double work.",
// svc_agents.subtitle
"subtitle": "The core of Reserve AI: a voice agent that answers calls, checks availability, and books customers in German and English, configured around your rules.",
// svc_bots.subtitle
"subtitle": "An optional add-on to your Reserve AI booking assistant: a website chatbot that answers questions and captures bookings from visitors who prefer to type.",
// svc_saas.subtitle
"subtitle": "An optional add-on to your Reserve AI booking assistant: a custom dashboard that shows calls, outcomes, and the bookings you recovered."
```

- [ ] **Step 2: Edit DE — same keys**

```json
// svc_websites.subtitle
"subtitle": "Ein optionales Add-on zu Ihrem Reserve AI Buchungsassistenten: eine schnelle, moderne Website, die Ihnen mehr Anrufer und Buchungen bringt.",
// svc_booking.subtitle
"subtitle": "Ein optionales Add-on zu Ihrem Reserve AI Buchungsassistenten: Verbinden Sie Kalender und Buchungstools, damit bestätigte Termine automatisch und ohne doppelte Arbeit ankommen.",
// svc_agents.subtitle
"subtitle": "Das Herzstück von Reserve AI: ein Sprachagent, der Anrufe beantwortet, Verfügbarkeiten prüft und Kunden auf Deutsch und Englisch bucht – passend zu Ihren Regeln.",
// svc_bots.subtitle
"subtitle": "Ein optionales Add-on zu Ihrem Reserve AI Buchungsassistenten: ein Website-Chatbot, der Fragen beantwortet und Buchungen von Besuchern erfasst, die lieber schreiben.",
// svc_saas.subtitle
"subtitle": "Ein optionales Add-on zu Ihrem Reserve AI Buchungsassistenten: ein individuelles Dashboard, das Anrufe, Ergebnisse und zurückgewonnene Buchungen zeigt."
```

- [ ] **Step 3: Run the parity check** — expected `OK`.

- [ ] **Step 4: Build** — `npm run build`, expected no errors.

- [ ] **Step 5: Commit**

```bash
git add messages/en.json messages/de.json
git commit -m "copy: reframe service page intros as add-ons (agents as core)"
```

---

## Phase 3 — Supporting pages polish

### Task 7: Tighten nav + footer wording

**Files:**
- Modify: `messages/en.json` (`nav.view_all_services_desc`, `footer.tagline`)
- Modify: `messages/de.json` (same keys)

- [ ] **Step 1: Edit EN**

```json
// nav.view_all_services_desc
"view_all_services_desc": "Optional add-ons around your booking assistant",
// footer.tagline
"tagline": "The AI booking assistant that answers your calls 24/7 so you never lose a booking."
```

- [ ] **Step 2: Edit DE**

```json
// nav.view_all_services_desc
"view_all_services_desc": "Optionale Add-ons rund um Ihren Buchungsassistenten",
// footer.tagline
"tagline": "Der KI-Buchungsassistent, der Ihre Anrufe rund um die Uhr beantwortet, damit Sie keine Buchung verlieren."
```

- [ ] **Step 3: Run the parity check** — expected `OK`.

- [ ] **Step 4: Commit**

```bash
git add messages/en.json messages/de.json
git commit -m "copy: align nav and footer wording with booking-assistant focus"
```

---

### Task 8: Tighten pricing + contact intros

**Files:**
- Modify: `messages/en.json` (`pricing.subtitle`, `contact_page.subtitle`)
- Modify: `messages/de.json` (same keys)

- [ ] **Step 1: Edit EN**

```json
// pricing.subtitle
"subtitle": "Plans priced against the bookings you recover. Recover a handful of missed calls a month and the plan pays for itself.",
// contact_page.subtitle
"subtitle": "Book a free demo and see how Reserve AI answers your booking calls. We reply in German or English, usually within one business day."
```

- [ ] **Step 2: Edit DE**

```json
// pricing.subtitle
"subtitle": "Preise, gemessen an den Buchungen, die Sie zurückgewinnen. Schon wenige zurückgewonnene Anrufe pro Monat decken die Kosten.",
// contact_page.subtitle
"subtitle": "Buchen Sie eine kostenlose Demo und sehen Sie, wie Reserve AI Ihre Buchungsanrufe beantwortet. Wir antworten auf Deutsch oder Englisch, meist innerhalb eines Werktags."
```

- [ ] **Step 3: Run the parity check** — expected `OK`.

- [ ] **Step 4: Build** — `npm run build`, expected no errors.

- [ ] **Step 5: Commit**

```bash
git add messages/en.json messages/de.json
git commit -m "copy: sharpen pricing and contact intros around recovered bookings"
```

---

### Task 9: Final whole-site verification

**Files:** none (manual verification)

- [ ] **Step 1: Production build** — `npm run build`. Expected: success, no missing-message warnings.

- [ ] **Step 2: Spot-check pages in dev** (`npm run dev`), both `/en` and `/de`:
  - `/` homepage (hero, add-ons strip, Why Reserve AI)
  - `/services` and one service page (e.g. `/services/ai-bots`) — intros read as add-ons; `/services/ai-agents` reads as core
  - `/pricing`, `/contact` — new intros present
  - Footer tagline updated; nav "all services" description updated
  - No raw translation keys visible anywhere checked.

- [ ] **Step 3: Stop the dev server.** No commit (verification only).

---

## Self-review notes (coverage against spec)

- **Hero / who-we-are / what-we-do** → Task 1.
- **Demote Services Hub to add-ons** → Task 2 (header copy; carousel unchanged by design).
- **Add "Why Reserve AI" (how we're better, 4 pillars)** → Task 3. (Built as a clean new `why` block rather than reusing `features`, for a focused 4-card section; `features` is left untouched and remains unused — acceptable, no route renders it.)
- **Phase 2 service pages as add-ons** → Tasks 5–6. `ai-agents` intentionally framed as the **core**, not an add-on.
- **Phase 3 supporting polish** → Tasks 7–8; final verification Task 9.
- **EN+DE parity** → enforced every task via the parity check.
- **Out of scope** (legal pages, ROI calculator, missed-call audit form, logo/visual redesign) → not touched.
