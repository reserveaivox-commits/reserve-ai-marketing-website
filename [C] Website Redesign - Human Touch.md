# Reserve AI website - making it feel like people built it

**Date:** 2026-09-03
**Repo:** `~/Desktop/NEW-RESERVE-WEBSITE-main` (Next 16, Tailwind 4, next-intl, Netlify)
**Live:** https://re-serveai.com
**Reference site:** https://tbimauritius.com
**Status:** proposal. Nothing changed yet.

---

## 1. The problem, in one sentence

The site sells *"keeps your team focused on the people in front of them"* and
contains no people.

No founder. No team. No photo. No name. No address. No phone number. The only
human contact route on the entire site is a form, and the only email address
anywhere is `reserveaivox@gmail.com` (`src/app/[locale]/contact/page.tsx:63`) -
a Gmail address, on a site selling point-of-sale systems to businesses.

That is the whole gap. It is not really a design problem.

---

## 2. What TBI does that we don't

TBI Mauritius sells immigration and relocation consultancy. Higher price point,
longer commitment, more trust required than ours - and the site feels warm
anyway. Here is what it actually does, concretely.

| | TBI | Reserve AI |
|---|---|---|
| Phone number | In the top utility bar, on every page | Nowhere on the site |
| Email | `contact@tbimauritius.com` | `reserveaivox@gmail.com` |
| Who runs it | "run by British lawyers", offices in Mauritius and London | Not stated |
| Named humans | Philip, Nastasia - named by clients, doing specific things | None |
| Proof | 5.0 from 80 Google reviews, five quoted, link to verify | Invented charts |
| Headline type | Serif | Heavy geometric sans |
| Palette | Navy and gold | Near-black and neon green |
| Video | The actual team | An animated orb |
| Process ends with | "We continue to support you" | "Let Reserve AI handle the rush" |

The detail that does the most work is in TBI's testimonials. One client writes:

> "Nastasia took us to our meetings at the EDB - she has an excellent
> relationship with them and getting our permits was a great experience."

A named employee, a specific place, a specific favour. You cannot fake that,
and you cannot generate it. It is the single most human thing on their page.

---

## 3. The fixes, in priority order

### Fix 1 - Put real people on the site

Highest impact by a distance, and it is content, not code.

- Founder photo and name in an About or "Who we are" block on the homepage.
- One honest paragraph on why you built this. Not a mission statement.
- A real phone number in the header, where TBI has theirs.
- A business email on the `re-serveai.com` domain. Retire the Gmail address
  before anything else on this list - it costs nothing and it is the loudest
  credibility signal on the page.
- A real address. There is an `imprint` route already
  (`src/app/[locale]/imprint/`), so the details exist somewhere - surface them.

Restaurant owners buy from people, especially for a system they will depend on
every service.

### Fix 2 - Delete the invented numbers

The "Real-world example" section is the weakest thing on the site. From
`messages/en.json`:

```
case.subtitle   = "A concrete example shows the value immediately."
case.before_v1  = "20+"          <- missed calls per week
case.after_v2   = "+30"          <- estimated added bookings / month
```

It is labelled "a concrete example" and it is a hypothetical. The W1-W6 chart
plots nothing. Elsewhere: *"integrates with over 95% of common booking and POS
systems"* - unfalsifiable, and reads as invented because it is.

A restaurant owner clocks one fake statistic and discounts the entire page.

**What to do instead.** If you have one real customer, one honest sentence from
them beats every chart here. If you have none yet, say so plainly - "we are
early, here is who we are, here is what we have built, come and try it" is more
credible than manufactured data, and it is a position no competitor can copy.

Either way: if a number cannot be sourced, it comes off.

### Fix 3 - Typography and palette

**Good news found while reading the code: half of this is already done.**
`src/app/globals.css` already loads Playfair Display as `--font-serif` and
already defines `--color-accent-gold: #D4A843`.

```css
--font-sans:  "Montserrat", sans-serif;
--font-serif: "Playfair Display", serif;
--color-accent-gold: #D4A843;
```

`font-serif` is currently used in **3 places across the whole codebase**. The
homepage hero uses the heavy sans, and emerald is hardcoded throughout
`src/app/[locale]/page.tsx` (lines 48, 56, 206, 213, 308, 310, 314 and more).

Neon green on near-black is the AI-startup house style. It is the strongest
"this was made by an AI company" signal on the page, and it lands before anyone
reads a word.

Proposed:

- Serif for headlines. The font is already loaded - this is largely a
  class-swap on the hero and section titles.
- Retire emerald as the primary accent. Gold is already in the tokens.
- Warm the background. TBI's navy reads as considered; our near-black reads as
  a template. `--color-surface: #FAFAF8` already exists and is unused on the
  homepage.

This is the cheapest large visual change available and could land in an
afternoon.

### Fix 4 - Rewrite the copy

The current copy has generated-text fingerprints throughout. Examples with
suggested replacements:

| Where | Now | Instead |
|---|---|---|
| `problem.solution` | "Reserve AI answers those calls automatically - so no appointment is ever lost." | Drop "ever". Absolute claims read as marketing. "So the call gets answered even when nobody can pick up." |
| Why-us subtitle | "Not just another chatbot" | Cut. The "not just another X" construction is the tell. Say what it is. |
| `addons.title` | "Extras that make your assistant work even better" | "What else we build" |
| FAQ answers | "Absolutely." / "Yes!" | Answer the question. The exclamation mark is doing no work. |
| `problem.point1-3` | Phone rings -> callers hang up -> revenue is lost | The three-beat escalation is textbook generated structure. Two beats, in a real owner's words, lands harder. |

Compare TBI's closing block:

> "Tell us where you are and where you want to be. We'll set out the cleanest
> route - honestly, and with realistic timelines."

That is a person talking, and it admits limits. Our copy never admits a limit
anywhere, which is itself the tell.

Copy lives in `messages/en.json` and `messages/de.json` (1,027 keys). Both need
the pass, and the German should be written by a German speaker rather than
translated - German business copy has its own register and a translated
version will read as foreign to exactly the market we are selling to.

### Fix 5 - Extend the process section past go-live

Ours is "Activate Reserve AI in 3 steps": contact us, we connect your number,
let Reserve AI handle the rush. It ends the moment the software works.

TBI's is *"One team. One plan. From first call to settled in."* Five steps, and
step five is "We continue to support you", with an explicit promise:

> "We don't hand you between departments. A single, senior point of contact
> owns your case and coordinates everything."

For a POS system - which people depend on daily and panic about when it breaks
mid-service - what happens **after** setup is the actual purchase decision. Add
a fourth and fifth step. Say who picks up the phone when it breaks on a Friday
night. Name them.

### Fix 6 - Smaller: replace the orb

The "Tap the core to launch the demo" animation with the floating RESPONSE /
BOOKING / RELIEF pills (`HeroDemoGate.tsx`) is decoration that announces "we are
an AI company". TBI puts a video of the actual people in that slot.

A 60-second founder video would do more. There are video assets in the
workspace already (`~/Desktop/Marketing Vids`, and the 20 ad scripts doc).

---

## 3b. The people block - draft

Added 2026-09-03, once names, roles and the first two portraits arrived.

### The team

Internal titles from the CODE Notion, and what I would put on the public site
instead. Internal titles are for the team; public titles are for buyers.

| Name | Internal title | Suggested public title |
|---|---|---|
| Seetaram Sarvesh | Project Lead - Product | Founder |
| Shail Sujeebun | Tech Lead - senior full-stack | Tech Lead |
| Daanish Patel | Junior developer + sales support | Developer & Customer Success |
| Dylen Rungasamy | Product Operations | Operations |

"Junior developer" is accurate internally and undersells the person publicly.
Nobody buying a POS is reading org charts - they want to know who picks up the
phone.

### Draft copy

> **Who is building this**
>
> We are four people at CODE University in Berlin. Sarvesh runs product, Suji
> builds the system, Daanish works on the app and talks to restaurants, Dylen
> keeps operations moving.
>
> [ONE PARAGRAPH ONLY ROHAN CAN WRITE - why you started this. What you saw in a
> restaurant, or what went wrong somewhere you worked. Two or three sentences,
> plain, no mission-statement language.]
>
> Right now we are working toward one thing: a single restaurant running
> Reserve as their real till and their real phone line, for a full month, and
> proving it holds up. When that works, we do the next one.
>
> Questions before then? Call [PHONE] or email [EMAIL] - one of us picks up.

The last line is the whole point of the block. TBI's warmth comes from the
promise that a named person answers, not from photography.

### Photo direction - decided

All four portraits are in (Sarvesh, Suji, Dylen, Daanish): warm beige backdrop,
even light, full length, white shirt under a dark suit. A consistent set.

- **Match the crops, not just the styling.** The four frames sit at slightly
  different camera distances - Dylen's and Daanish's are wider than Sarvesh's
  and Suji's. Crop to the same head-and-shoulders ratio *and* the same head
  size within the frame, or the grid looks uneven even though the shoot was
  consistent. Align on eye line: eyes at roughly one third from the top of
  each crop is the usual rule and it does most of the work.
- Suggested output: 1:1 or 4:5, exported at 2x the display size. Save into
  `public/team/` as `sarvesh.jpg`, `suji.jpg`, `dylen.jpg`, `daanish.jpg`.
- Two of the four are mid-smile and two are neutral. Not a problem, but if
  reshoots are ever cheap, a consistent expression tightens the grid further.
- **Crop to head and shoulders** for the team grid, roughly 1:1 or 4:5. The
  supplied files are full-length, so the face is a small part of the frame -
  use the highest-resolution originals available or the crops will go soft.
- **The beige backdrop supports Fix 3.** It sits well against a warm ground
  with gold accents and badly against the current near-black and neon green.
  Another reason to do the palette pass before the photos go live.
- Formal styling is not a conflict with the early-stage story. TBI's photos are
  formal too; their warmth is entirely in the language. Polished portraits plus
  plain, honest copy is the combination that works.

---

## 4. What this needs from Rohan

Cannot be drafted, has to be supplied:

1. ~~Photo of you, and the team if they are willing.~~ **Complete.** All four
   received (Sarvesh, Suji, Dylen, Daanish), all from the same session.
   Cropping spec in section 3b.
2. Real phone number for the header.
3. ~~Business email on the `re-serveai.com` domain.~~ **Done.** Cloudflare Email
   Routing is live; `contact@re-serveai.com` forwards to the team inbox. The
   six hardcoded Gmail references in the site have been swapped (terms,
   privacy, contact, imprint, and the contact API). Three follow-ups remain -
   see section 4b.
4. Business address (may already be in the imprint page).
5. Any genuine customer quote, first name and business name. Even one.
6. ~~A decision on Fix 2.~~ **Decided:** we say we are early. See section 3b.
7. The "why we started this" paragraph in section 3b. Nobody else can write it.
8. Confirmation that the supplied portraits are photographs. An earlier team
   image turned out to be generated and was dropped for the reasons in section
   2 - a fabricated face attached to a real named person is worse than no photo
   at all.

Everything else - typography, palette, copy rewrite, restructuring the process
section - can be drafted against the repo without waiting.

---

## 3c. Product and lifestyle image library

Roughly fourteen images arrived on 2026-09-03: restaurant service, host stands,
bar POS, kitchen pass, nail salon, hair salon, barbershop (Kreuzberg), tattoo
studio, spa reception, and two onboarding scenes with a Reserve staff member
sitting beside an owner.

### These are generated, and that is fine here

Different case entirely from the team photo. A team photo asserts "these are
the people who work here" - a claim a generated image cannot honestly make.
Product and lifestyle imagery asserts nothing about identity; every software
company on earth uses staged or rendered scenes for it. No one reads a lifestyle
shot as documentary.

So: use them.

### They settle the palette question

The set is navy, brass and gold, on warm cream plaster. That is the direction
Fix 3 proposed, arrived at independently. These images would look actively wrong
on the current near-black and neon-green site.

The wordmark in them is also a **serif**, lowercase - not the heavy geometric
sans the live site uses. The brand imagery and the brand website currently
disagree with each other, and the imagery is the better of the two.

**Conclusion: build the site to match these images.** They are the design
system now. That converts Fix 3 from a proposal into a requirement.

### Three problems to fix before they go live

**1. The wordmark is inconsistent across the set.** It appears in at least three
treatments - white serif, gold serif, and a light sans - sometimes on adjacent
images. Pick one and regenerate or retouch the rest. A logo that changes shape
between scroll positions undoes the credibility the images are there to build.

**2. Some on-screen UI text is garbled.** The host-stand image with the
"Booking confirmed" panel has unreadable sub-text; others (the "Anna Muller, 2
guests" tablet, the bar floor-plan) are clean and legible. Use the garbled ones
small or cropped, never full-bleed - at size the synthetic origin is obvious.

**3. The product shots show a product that does not exist in that form.** The
bar tablet renders a floor plan (t01-t11) beside a live order pad. The real POS
has a floor map at `/tables` and a product grid at `/sales`, but not that
screen. This is the same trap as the invented statistics: if the site promises
an interface the demo cannot show, the demo becomes the letdown. Either bring
the real UI closer to these renders, or use the images where the screen is
incidental rather than the subject.

### What they unlock

- **The two onboarding images** (Reserve staff beside an owner at a laptop) are
  exactly the "who helps you after go-live" story missing from the process
  section, per Fix 5. Use them there.
- **The kitchen-pass image** ("Table 8 - Order received") illustrates bon
  routing, a real shipped POS feature.
- **The industry spread** - salon, barbershop, tattoo, spa, restaurant - covers
  the "we support service businesses across Germany" section with real scenes
  instead of text tiles.
- The Kreuzberg signage and the +49 30 phone number reinforce the German focus.
  Keep those.

One implied promise to check: two images show staff in branded Reserve jackets
sitting with an owner. That reads as on-site onboarding. Only use them if
someone actually turns up.

---

## 4b. Email follow-ups

Found while swapping the addresses. None of these block the site, but the first
one undoes most of the credibility win if it is left alone.

**1. Replies still go out from the Gmail address.** Cloudflare Email Routing is
receive-only. Inbound to `contact@re-serveai.com` works; sending as it does not.
So a restaurant owner emails `contact@re-serveai.com`, and the reply arrives
from `reserveaivox@gmail.com` - at first contact, which is the worst possible
moment for it.

The contact form has the same problem: `route.ts` still sets
`from: "Reserve AI Contact Form" <gmail address>`.

Options, cheapest first:
- Gmail "Send mail as" with an SMTP relay, so replies leave as the domain.
- A transactional sender (Resend, Postmark) for the form, and Gmail send-as for
  human replies.
- Google Workspace on the domain, which solves both and costs the most.

Whichever route, set `GMAIL_USER` in the Netlify environment afterwards - the
code already reads it and falls back to the Gmail account only when unset.

**2. The catch-all rule is set to Drop.** Mail to `info@`, `hello@` or
`support@re-serveai.com` disappears silently. Those are the addresses people
guess, and a silent drop is worse than a bounce because the sender believes it
arrived. Either add routes for `info@` and `hello@`, or point the catch-all at
the team inbox.

**3. Only two personal addresses exist** (`shail@`, `sarvesh@`). The team block
names four people. Add `daanish@` and `dylen@` for consistency, or keep
personal addresses off the site entirely and route everything through
`contact@`.

**4. The imprint page.** It now carries the domain address, which is an
improvement, but a German Impressum under section 5 DDG also needs a postal
address and a named responsible person. Worth checking what is currently on
that page against the requirement - I am not qualified to sign that off.

---

## 5. Suggested order

1. **Swap the Gmail address for a domain email.** Minutes. Biggest
   credibility-per-effort ratio on the list.
2. **Strip the invented numbers.** Also fast, and it stops active harm.
3. **Typography and palette pass.** Serif headlines, gold over emerald, warmer
   ground. Tokens already exist. One afternoon.
4. **Copy rewrite**, English first, then German written fresh.
5. **The people block** - lands when the photo and details arrive.
6. **Process section** extended past go-live.
7. **Founder video** replacing the orb, last.

Items 1 through 4 need nothing from anyone else and would already close most of
the gap.

---

## 6. One thing worth saying plainly

TBI sells a service where the human relationship *is* the product, and the site
proves that on every scroll - names, a phone number, clients describing being
personally looked after.

We sell software whose entire pitch is that it protects human attention. The
site should prove the same thing about us, and right now it proves the
opposite: a page with no people on it, selling a product about people, reachable
only through a form.

Fixing that is mostly not a design job. It is deciding to put ourselves on it.
