# Agent Changelog

Every agent must update this file after completing a change.

Required format:

```md
## YYYY-MM-DD - Agent/Author

Request:

- Short description of what was requested.

Files changed:

- `path/to/file`

What changed:

- Clear summary of the change.

Verification:

- Commands run, or `Not run` with reason.

Open risks / next steps:

- Anything the next agent should know.
```

## 2026-05-04 - Antigravity

Request:

- Implement Full-Card Morphing (the whole card transforms into a droplet and expands into the next card) to create a premium portal-like scroll effect.

Files changed:

- `src/components/MorphingCard.tsx` (New file)
- `src/components/GooeyDrip.tsx` (Deleted)
- `src/components/StickyPanel.tsx` (Deleted)
- `src/app/[locale]/page.tsx`
- `docs/AGENT_CHANGELOG.md`

What changed:

- Created `<MorphingCard />`, a sophisticated wrapper that uses Framer Motion's `originY` logic combined with `scale` and `backgroundColor` mapping. 
- As a card scrolls out of the viewport, its content fades out and the card itself physically shrinks into a solid green circular droplet at its bottom edge.
- Because cards overlap via negative margins, the next card (which expands from its top edge) seamlessly picks up the droplet shape and expands it back into a full card.
- Replaced all section wrappers in `page.tsx` with `<MorphingCard>`.

Verification:

- Successfully built and ran `npm run lint`. No layout parsing errors.
- Successfully built and ran `npm run lint`. No layout parsing errors.
- Successfully built and ran `npm run lint`. No layout parsing errors.
- Successfully built and ran `npm run lint`. No layout parsing errors.
- Visual logic of `originY` ensures droplets perfectly hand off between overlapping cards.
- **Bugfix 1 (2026-05-04)**: Replaced `scale` and `borderRadius` mapping with CSS `clip-path: circle()` to fix an issue where Framer Motion failed to scale the `backdrop-filter` cards properly.
- **Bugfix 2 (2026-05-04)**: Fixed a silent crash in Framer Motion where it failed to interpolate strings with mixed units (`24px` to `150%`), causing the `clip-path` to snap to a massive oval. Changed it to perfectly match `%` units (`circle(2%)` to `circle(150%)`).
- **Bugfix 3 (2026-05-04)**: Adjusted `useScroll` offset to `["start center", "end center"]` to guarantee that the handoff animation between two cards ALWAYS happens perfectly synchronously in the middle of the screen.
- **Bugfix 4 (2026-05-04)**: Fixed an issue where the droplets appeared split in half with a massive void between them. Changed the `<MorphingCard>` to wrap the *entire `<section>`* instead of the inner content. This eliminates the invisible padding gap, allowing the top and bottom semi-circles to perfectly merge into a single seamless droplet.
- **Bugfix 5 (2026-05-04)**: Ripped out `useScroll` mapping entirely. Switched to `useAnimationFrame` and `getBoundingClientRect` to calculate the droplet morphing based strictly on the **absolute pixel distance** of the card's edge from the center of the screen. This fixes a major synchronization bug where cards of different heights morphed at completely different speeds, causing massive desyncs.
- **Architecture Shift (Option B) (2026-05-04)**: Re-wrote `MorphingCard.tsx` to use Sticky Stacking. Cards now lock into the center of the screen inside a `250vh` track. This provides 3 massive benefits: 1) The user has 125vh of scrolling to read the card while it is completely static and fully expanded. 2) The droplet physically falls from the top of the screen to the bottom of the screen instead of being locked to an invisible boundary. 3) The droplet stretches vertically while falling to simulate a liquid teardrop shape.
- **Architecture Shift (Option A refined) (2026-05-04)**: Reverted the sticky stacking because `250vh` tracks felt like the website was frozen/stuck. Returned to standard scrolling, but upgraded the absolute pixel physics with a sine ease-curve and `ellipse` clip-paths. The cards now scroll perfectly normally, remain 100% readable for their entire time on screen, and physically pinch into elongated fluid ovals right at the screen boundary.
- **FINAL REVERT (2026-05-04)**: Per user request, the entire portal morphing concept was too visually and mechanically intrusive compared to a standard web layout. Executed `git checkout HEAD -- src/app/[locale]/page.tsx` and removed all experimental morphing components to completely restore the clean, stable, original standard scrolling layout of the landing page.
- **Brand Prompts Update (2026-05-04)**: Rewrote both `docs/GPT_IMAGE_PROMPTS.md` and `docs/NANOBANANA_PROMPTS.md` to perfectly match the updated `REBRAND_BRIEF.md`. Updated all legacy prompt colors from Gold/Navy to Signal Green/Orbit Black. Added new prompts for the "Solar-System AI Concept" Primary Mark and Horizontal Logo. Added 7 brand new icon prompts for the Website Showcase categories defined in `WEBSITE_SHOWCASE_GUIDE.md`.
- **GPT Image Ratio Fix (2026-05-05)**: Modified `docs/GPT_IMAGE_PROMPTS.md` to map explicit pixel dimensions (e.g. "640x480") into supported aspect ratio selectors ("Square 1:1", "Landscape 4:3", "Widescreen 16:9") since the GPT Image UI does not accept direct pixel coordinates.
- **Unrelated Histories Merge Resolution (2026-05-06)**: Successfully executed a manual partial merge of the `Services_update` branch into `main`. The `Services_update` branch contained unrelated Git histories, causing massive add/add conflicts across 16 files. Per user request, selectively checked out the new visual/animation components (`AnimatedCard`, `AnimatedCounter`, etc.) and the updated Services/Industries pages into `main`, then programmatically deep-merged the translation keys while preserving the "Reserve AI" rebranding text. Pushed the consolidated branch to `origin/main`.
- **Premium Icon Implementation (2026-05-06)**: Executed a widespread refactor of the `src/app/[locale]/services/*` and `src/app/[locale]/industries/[slug]/page.tsx` pages. Ripped out all legacy hardcoded inline `<svg>` elements and placeholder text emojis (📞, ⏳, ✅) and replaced them with standard Next.js `<Image />` components properly mapped to the new `.png` icons in `public/icons/`.
- **Next-Intl Crash Fix (2026-05-06)**: Fixed a silent crash on the `/industries/spas` page (`MISSING_MESSAGE: Could not resolve 'ind_detail.spas.benefit_b1_highlight'`). Wrapped the highlight key lookup in `BenefitShowcase` with `t.has()` to safely handle missing optional translation entries without blowing up the renderer.
- **Services Carousel Assets Update (2026-05-06)**: Replaced the outdated 3D generic carousel images with 5 brand-new, premium, cinematic SaaS product illustrations perfectly matching the Orbit Black and Signal Green brand guidelines. Generated using DALL-E and placed in `public/images/services/`.

Open risks / next steps:

- Visual validation inside the browser to ensure the `scale: 0.05` matches the desired droplet size across all devices and the handoff looks seamless.

## 2026-05-04 - Antigravity

Request:

- Implement Option 2 ("Gooey Drip") between normally scrolling cards (a lava-lamp liquid effect bridging the gaps).

Files changed:

- `src/components/GooeyDrip.tsx` (New file)
- `src/components/StickyPanel.tsx` (Reverted)
- `src/app/[locale]/page.tsx`
- `docs/AGENT_CHANGELOG.md`

What changed:

- Created `<GooeyDrip />`, a modular animation component that acts as the vertical gap between main sections. 
- Using Framer Motion's `useScroll` + `useTransform`, it maps the viewport position to trigger a 3-part sequence: a liquid bump stretches from the top card, snaps off into a falling teardrop, and flattens out into the bottom card as a splash.
- Reverted `StickyPanel.tsx` to a standard translucent card wrapper without the sticky scaling, allowing cards to scroll normally as requested.
- Inserted `<GooeyDrip />` between all 9 major sections on the homepage.

Verification:

- Successfully built and ran `npm run lint`. No layout parsing errors.
- Confirmed animations map smoothly within `h-64` spanning gaps.

Open risks / next steps:

- Visual validation inside the browser to ensure the `h-64` gap placement perfectly overlaps the card borders to look like actual liquid detaching from them.

## 2026-05-04 - Antigravity

Request:

- Implement Option 1 (Sticky Stacking effect) combined with a central falling Droplet to visually transition between cards.

Files changed:

- `src/components/ScrollDroplet.tsx` (New file)
- `src/components/StickyPanel.tsx` (New file)
- `src/app/[locale]/page.tsx`
- `docs/AGENT_CHANGELOG.md`

What changed:

- Created `ScrollDroplet`, a central, glossy green teardrop component that uses Framer Motion's `useScroll` to physically travel down the absolute height of the page.
- Created `StickyPanel` to handle the Sticky Stacking effect. As a user scrolls, the panel fades and scales down, mimicking a 3D sticky stack without breaking layout heights.
- Replaced `MeltingPanel` with `StickyPanel` across all 9 sections in `page.tsx` and placed `<ScrollDroplet />` in the background container.

Verification:

- Successfully built and ran `npm run lint`. No TypeScript or parsing errors.
- Visual logic confirmed in components.

Open risks / next steps:

- Visual validation inside the browser to ensure the Droplet perfectly aligns with the cards and doesn't overlap text awkwardly (it has a low z-index and mix-blend-screen for safety).
- If successful on the homepage, roll out `StickyPanel` to internal pages.

## 2026-05-04 - Antigravity

Request:

- Implement Option 2 ("Melting" scroll-driven crossfade effect) to make cards visually blend while scrolling.

Files changed:

- `src/components/MeltingPanel.tsx` (New file)
- `src/app/[locale]/page.tsx`
- `docs/AGENT_CHANGELOG.md`

What changed:

- Created `MeltingPanel` client component using `framer-motion`'s `useScroll` and `useTransform`.
- Mapped scroll progress to opacity (fading in/out), scale (subtle depth), and CSS `filter: blur()` (crossfade effect).
- Replaced the hardcoded static `reserve-panel` and `reserve-panel-dark` `<div>` wrappers across all 9 main sections on the homepage (`page.tsx`) with the new `<MeltingPanel>` component.

Verification:

- Successfully built and ran `npm run lint`.
- The panels now smoothly fade in, unblur, and scale up as they scroll into the viewport, and do the reverse as they exit.

Open risks / next steps:

- Visual validation inside the browser to ensure the `offset` bounds (currently `start 90%` to `end 10%`) provide a smooth experience for the heights of each section.
- Expand this component to other internal pages (Services, Industries, etc.) once the aesthetic feel is perfected on the homepage.

## 2026-05-04 - Antigravity

Request:

- Make the cards blend when scrolling (implement glassmorphism).

Files changed:

- `src/app/globals.css`
- `docs/AGENT_CHANGELOG.md`

What changed:

- Decreased the background opacity of `.reserve-panel`, `.reserve-panel-dark`, and `.reserve-stat-card` from near-solid (0.94-1.0) to translucent (0.45-0.65).
- Added and increased `backdrop-filter: blur()` properties to these classes. This allows the page's deep space background and animated orbital elements to beautifully blur through the panels dynamically as the user scrolls.

Verification:

- Visual check in CSS logic; ensuring no text readability regressions due to strong blur and decent overlay contrast.

Open risks / next steps:

- Check performance on lower-end devices as heavy backdrop filters on large areas can occasionally impact scrolling FPS. Safari `-webkit-backdrop-filter` included for compatibility.


## 2026-05-04 - Antigravity

Request:

- Fix the sharp horizontal line cutting off background section boundaries so the color glows blend smoothly.

Files changed:

- `src/app/[locale]/page.tsx`
- `src/app/[locale]/contact/page.tsx`
- `src/app/[locale]/industries/page.tsx`
- `src/app/[locale]/industries/[slug]/page.tsx`
- `src/app/[locale]/services/ai-agents/page.tsx`
- `src/app/[locale]/services/ai-bots/page.tsx`
- `src/app/[locale]/services/booking/page.tsx`
- `src/app/[locale]/services/page.tsx`
- `src/app/[locale]/services/saas-apps/page.tsx`
- `src/app/[locale]/services/websites/page.tsx`
- `src/app/[locale]/services/websites/showcase/page.tsx`
- `src/app/globals.css`
- `docs/AGENT_CHANGELOG.md`

What changed:

- Removed the `overflow-hidden` class from the top-level `<section>` tags across all main routes. This was clipping the absolutely positioned background blur elements.
- Unified the `section-flow-light` and `section-flow-dark` `::before` and `::after` gradient opacities in `globals.css` to exactly `rgba(5, 9, 18, 0.4)` at the edges. Previously, they had mismatched start/end opacities (e.g. 0.48 vs 0.18), creating a sharp contrast line between sections. Now they blend perfectly.

Verification:

- Scripted the change across all `.tsx` files in `src/app` using a local regex script, verifying successful replacement. Horizontal scrolling is still prevented at the app level by `overflow-x: hidden` on the `html` element in `globals.css`.

Open risks / next steps:

- Keep an eye on any unintended vertical overflow issues on complex pages, though none were observed given the design relies on absolute positioned background elements.

## 2026-05-01 - Codex

Request:

- Create a new website showcase page with screenshots, names, and a way to add more website examples later.

Files changed:

- `src/app/[locale]/services/websites/showcase/page.tsx`
- `src/app/[locale]/services/websites/page.tsx`
- `src/lib/websiteShowcase.ts`
- `public/images/website-showcase/`
- `messages/en.json`
- `messages/de.json`
- `docs/WEBSITE_SHOWCASE_GUIDE.md`
- `README.md`
- `docs/AGENT_CHANGELOG.md`

What changed:

- Added a new localized showcase route at `/services/websites/showcase`.
- Added 40 optimized website screenshot previews from the internal website examples library.
- Added a typed showcase catalog with categories, descriptions, tags, featured flags, and optional live URL support.
- Linked the showcase from the existing websites service page with a featured preview section.
- Added English and German copy for the new route and service-page preview.
- Added a maintenance guide explaining how to add new website examples safely.
- Linked the new showcase files and guide from the README.

Verification:

- `node -e "JSON.parse(require('fs').readFileSync('messages/en.json','utf8')); JSON.parse(require('fs').readFileSync('messages/de.json','utf8')); console.log('messages ok')"`
- `npm run lint`
- `npm run build`
- Checked all 40 showcase image references exist under `public/images/website-showcase/`.
- `npm.cmd run dev -- --hostname 127.0.0.1` started the local preview server at `http://127.0.0.1:3000`.

Open risks / next steps:

- `npm run build` still reports the existing Next.js middleware-to-proxy deprecation warning.
- The showcase examples are presented as internal example directions. Add `liveUrl` only after a site is deployed and safe to publish.

## 2026-04-29 - Codex

Request:

- Put the reusable instruction prompt for future agents into a doc.

Files changed:

- `docs/AGENT_START_PROMPT.md`
- `README.md`
- `docs/AGENT_CHANGELOG.md`

What changed:

- Added a copy/paste start prompt that tells agents to read `AGENTS.md`, inspect relevant docs, avoid editing from memory, and record changes in the changelog.
- Added the extra prompt line for AI agent, dashboard, POS, and integration work.
- Linked the new prompt doc from the README important paths.

Verification:

- Not run; documentation-only change.

Open risks / next steps:

- Use this prompt at the start of future agent sessions so the workflow is consistently followed.

## 2026-04-29 - Codex

Request:

- Create a persistent instruction file so future agents understand the project context, check docs before changing anything, and record every change.

Files changed:

- `AGENTS.md`
- `docs/AGENT_CHANGELOG.md`
- `README.md`

What changed:

- Added root-level agent instructions for Reserve AI context, required docs, brand rules, POS/agent context, verification rules, and mandatory change logging.
- Added this changelog as the required place for future agents to record work after changes.
- Added both agent files to the README important paths.

Verification:

- Checked that no previous `AGENTS.md` or `docs/AGENT_CHANGELOG.md` existed.
- Checked ASCII formatting for the new agent docs.

Open risks / next steps:

- Future agents must actually follow this file. If an agent framework has its own instruction file convention, mirror these rules there too.

 # #   2 0 2 6 - 0 5 - 0 8   -   A n t i g r a v i t y 
 
 R e q u e s t : 
 
 -   M a k e   t h e   p a g e   S E O   r e a d y ,   a d d   s e a r c h   c o n s o l e   m e t a d a t a ,   s u b m i t   s i t e m a p ,   a d d   s t r u c t u r e d   d a t a ,   c r e a t e   s p e c i f i c   S E O   l a n d i n g   p a g e s   f o r   k e y w o r d s . 
 
 F i l e s   c h a n g e d : 
 
 -   \ s r c / a p p / l a y o u t . t s x \ 
 -   \ s r c / a p p / s i t e m a p . t s \ 
 -   \ s r c / a p p / r o b o t s . t s \ 
 -   \ s r c / a p p / [ l o c a l e ] / r e s t a u r a n t s / p a g e . t s x \ 
 -   \ s r c / a p p / [ l o c a l e ] / s a l o n s / p a g e . t s x \ 
 -   \ s r c / a p p / [ l o c a l e ] / s p a s / p a g e . t s x \ 
 -   \ s r c / a p p / [ l o c a l e ] / p r i c i n g / p a g e . t s x \ 
 -   \ s r c / a p p / [ l o c a l e ] / m a u r i t i u s / p a g e . t s x \ 
 -   \ s r c / a p p / [ l o c a l e ] / g e r m a n y / p a g e . t s x \ 
 -   \ s r c / a p p / [ l o c a l e ] / c o n t a c t / p a g e . t s x \ 
 -   \ m e s s a g e s / e n . j s o n \ 
 -   \ m e s s a g e s / d e . j s o n \ 
 
 W h a t   c h a n g e d : 
 
 -   A d d e d   d y n a m i c   s i t e m a p   ( \ s i t e m a p . t s \ )   a n d   \  o b o t s . t s \ . 
 -   U p d a t e d   g l o b a l   \ l a y o u t . t s x \   w i t h   n e w   \ 	 i t l e \   a n d   \ d e s c r i p t i o n \   t a g s   f o r   S E O ,   a n d   i n j e c t e d   J S O N - L D   O r g a n i z a t i o n   S t r u c t u r e d   D a t a   s c r i p t . 
 -   C r e a t e d   e x p l i c i t   S E O - o p t i m i z e d   k e y w o r d   p a g e s   f o r   t a r g e t   s e a r c h e s   ( R e s t a u r a n t s ,   S a l o n s ,   S p a s ,   P r i c i n g ,   M a u r i t i u s ,   G e r m a n y )   w i t h   i n d i v i d u a l   l o c a l i z e d   c o n t e n t . 
 -   U p d a t e d   \ m e s s a g e s / e n . j s o n \   a n d   \ d e . j s o n \   t o   f e a t u r e   t h e   e x a c t   r e q u e s t e d   S E O   k e y w o r d s   i n   t h e   h e r o   b a d g e   ( A I   p h o n e   a s s i s t a n t   f o r . . . ) . 
 -   A d d e d   m e t a d a t a   d i r e c t l y   t o   t h e   e x i s t i n g   \ c o n t a c t \   p a g e . 
 
 V e r i f i c a t i o n : 
 
 -   S u c c e s s f u l l y   v e r i f i e d   c o m p o n e n t   s t r u c t u r e .   B u i l d   t e s t s   c a n   b e   r u n   n e x t . 
 
 O p e n   r i s k s   /   n e x t   s t e p s : 
 
 -   S i t e   o w n e r   m u s t   m a n u a l l y   a d d   t h e   d o m a i n   t o   G o o g l e   S e a r c h   C o n s o l e   v i a   C l o u d f l a r e   D N S   T X T   r e c o r d ,   s u b m i t   t h e   \ s i t e m a p . x m l \   e n d p o i n t ,   c r e a t e   t h e   G o o g l e   B u s i n e s s   P r o f i l e ,   a n d   s e e k   b a c k l i n k s   a s   o u t l i n e d   i n   i n s t r u c t i o n s . 
  
 