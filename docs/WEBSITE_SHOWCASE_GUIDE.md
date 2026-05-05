# Website Showcase Guide

The website showcase lives at:

- `/services/websites/showcase`

It is designed to show that Reserve AI can build many kinds of websites without turning the main product positioning into a generic agency homepage.

## Files

- `src/lib/websiteShowcase.ts` - the catalog of website examples.
- `src/app/[locale]/services/websites/showcase/page.tsx` - the showcase page.
- `src/app/[locale]/services/websites/page.tsx` - the service page preview that links to the showcase.
- `public/images/website-showcase/` - optimized screenshot assets.
- `messages/en.json` and `messages/de.json` - page and preview copy.

## Current Categories

Use one of these category IDs when adding an item:

- `landing-pages`
- `business-corporate`
- `ecommerce`
- `blogs-news`
- `portfolio`
- `web-apps`
- `3d-experiences`

## Add A New Website Example

1. Create or export a screenshot of the website.
2. Save an optimized image under `public/images/website-showcase/<source-folder>/`.
3. Keep the image around 1400px wide if possible. JPEG or WebP is preferred for screenshots.
4. Add a new object to `websiteShowcaseItems` in `src/lib/websiteShowcase.ts`.
5. Use a unique `slug`, a public-facing `name`, a valid `category`, the image path, a short `description`, and 2-3 `tags`.
6. Add `featured: true` only if the item should appear in the websites service page preview.
7. Add `liveUrl` only after the site is deployed and safe to open publicly.

Example:

```ts
{
  slug: "studio-nova",
  name: "Studio Nova",
  category: "business-corporate",
  image: "/images/website-showcase/business_corporate/studio-nova.jpg",
  description: "Service business website with strong positioning and conversion sections.",
  tags: ["Studio", "Services", "Business"],
  featured: true,
}
```

## Content Rules

- Present these as examples or website directions unless the project is a real approved client case study.
- Do not claim live client results unless they are verified.
- Avoid using protected brand names as public example names unless the work is official and approved.
- Keep Reserve AI as the public product name.

## Verification

After changing the showcase, run:

```bash
node -e "JSON.parse(require('fs').readFileSync('messages/en.json','utf8')); JSON.parse(require('fs').readFileSync('messages/de.json','utf8')); console.log('messages ok')"
npm run lint
npm run build
```
