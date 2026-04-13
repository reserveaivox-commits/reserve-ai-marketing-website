# Nano Banana Prompts - Re.Serve AI

## Current Brand Direction

- Prefer dark premium SaaS imagery over bright template-like visuals
- Match the live site: navy surfaces, subtle green accents, light atmospheric glow
- Keep outputs clean and intentional for service-business buyers in Germany
- Avoid noisy "AI generated" compositions, especially in dashboard or hero concepts
- Use green accent guidance before gold unless the asset is intentionally matching older brand art

## Session Update - April 13, 2026

- The website was moved to a more cohesive dark design system across homepage, services, industries, and contact
- Legal pages and contact conversion paths are now active, so supporting visuals should feel more production-ready
- Homepage sections now favor motion, dashboard cues, and operational outcomes over generic illustrations
- Future asset prompts should emphasize clarity, trust, and reservation/revenue outcomes

## JSON Format Prompts for Nano Banana Image Generator

> **Instructions:** Copy the JSON object for each image into Nano Banana. For the simple prompt input, extract the `prompt` field. JSON format provides structured, consistent results.

---

## GLOBAL STYLE REFERENCE

```json
{
  "style": "Re.Serve AI",
  "aesthetic": "clean flat SaaS illustration, modern, semi-flat with subtle depth",
  "brand_colors": {
    "primary": "#1a1a2e",
    "accent": "#d4a843",
    "light_bg": "#f8f9fa"
  },
  "mood": "professional, trustworthy, modern, approachable",
  "negative_prompt": "text, watermarks, logos, photorealistic faces, blurry, low quality, distorted"
}
```

---

## 1. SERVICE ILLUSTRATIONS

### 1.1 AI Call Answering
**Filename:** `service-calls.webp`
**Folder:** `public/images/`

```json
{
  "prompt": "flat illustration, AI phone assistant, stylized smartphone with sound waves, friendly robot avatar with headset, floating call notification bubbles, warm orange peach gradient background, minimalist, clean, professional SaaS style, soft shadows, modern design, high resolution",
  "negative_prompt": "text, watermarks, logos, photorealistic, blurry, low quality, dark, gritty",
  "aspect_ratio": "4:3",
  "dimensions": "640x480",
  "style_preset": "illustration",
  "color_hints": ["#FFA500", "#FFDAB9", "#1a1a2e", "#d4a843"]
}
```

### 1.2 Booking & Appointment Management
**Filename:** `service-booking.webp`
**Folder:** `public/images/`

```json
{
  "prompt": "flat illustration, online booking system, stylized calendar interface with checkmarks on dates, clock icon, small human silhouettes organized into time slots, confirmation badge, blue indigo gradient background, minimalist, clean, professional SaaS style, subtle depth, modern design, high resolution",
  "negative_prompt": "text, watermarks, logos, photorealistic, blurry, low quality",
  "aspect_ratio": "4:3",
  "dimensions": "640x480",
  "style_preset": "illustration",
  "color_hints": ["#4169E1", "#4B0082", "#1a1a2e", "#d4a843"]
}
```

### 1.3 Website Design & Digital Presence
**Filename:** `service-website.webp`
**Folder:** `public/images/`

```json
{
  "prompt": "flat illustration, website design concept, stylized laptop showing beautiful website layout, floating UI elements color swatches buttons cards, responsive device frames, sparkle magic wand effect suggesting AI, purple violet gradient background, minimalist, clean, professional SaaS style, modern design, high resolution",
  "negative_prompt": "text, watermarks, logos, real screenshots, photorealistic, blurry, low quality",
  "aspect_ratio": "4:3",
  "dimensions": "640x480",
  "style_preset": "illustration",
  "color_hints": ["#9370DB", "#8A2BE2", "#1a1a2e", "#d4a843"]
}
```

---

## 2. INDUSTRY HERO BANNERS

### 2.1 Restaurants
**Filename:** `industry-restaurants.webp`
**Folder:** `public/images/`

```json
{
  "prompt": "flat illustration, modern restaurant interior, warm inviting atmosphere, tables with plates of food, holographic AI assistant overlay managing reservations, floating reservation cards, phone with sound waves, warm orange red tones, clean minimalist style, professional, inviting atmosphere, wide panoramic format, high resolution",
  "negative_prompt": "text, watermarks, logos, photorealistic people, blurry, dark, gritty",
  "aspect_ratio": "2:1",
  "dimensions": "1200x600",
  "style_preset": "illustration",
  "color_hints": ["#FF6B35", "#E8451E", "#FFA07A", "#d4a843"]
}
```

### 2.2 Hair Salons
**Filename:** `industry-salons.webp`
**Folder:** `public/images/`

```json
{
  "prompt": "flat illustration, modern upscale hair salon interior, chic styling chairs mirrors, hair tools scissors dryers, floating digital booking interface, subtle appointment notifications, soft pink purple gradient tones, clean minimalist style, elegant, professional, wide panoramic format, high resolution",
  "negative_prompt": "text, watermarks, logos, photorealistic, blurry, low quality",
  "aspect_ratio": "2:1",
  "dimensions": "1200x600",
  "style_preset": "illustration",
  "color_hints": ["#FFB6C1", "#DDA0DD", "#E6E6FA", "#d4a843"]
}
```

### 2.3 Barbershops
**Filename:** `industry-barbershops.webp`
**Folder:** `public/images/`

```json
{
  "prompt": "flat illustration, classic barbershop interior, barber chairs scissors razors combs, barber pole, warm industrial lighting pendant lamps, floating digital scheduling screen, steel blue indigo tones, clean minimalist style, masculine professional vintage meets modern, wide panoramic format, high resolution",
  "negative_prompt": "text, watermarks, logos, photorealistic, blurry, low quality",
  "aspect_ratio": "2:1",
  "dimensions": "1200x600",
  "style_preset": "illustration",
  "color_hints": ["#4682B4", "#3F51B5", "#2C3E50", "#d4a843"]
}
```

### 2.4 Tattoo Studios
**Filename:** `industry-tattoo.webp`
**Folder:** `public/images/`

```json
{
  "prompt": "flat illustration, modern tattoo studio workspace, tattoo machine ink bottles various colors, design sketches pinned to wall, artist work lamp, floating digital appointment cards, gray slate tones with red blue green artistic paint splashes, creative edgy moody, wide panoramic format, high resolution",
  "negative_prompt": "text, watermarks, logos, photorealistic, offensive imagery, blurry, low quality",
  "aspect_ratio": "2:1",
  "dimensions": "1200x600",
  "style_preset": "illustration",
  "color_hints": ["#708090", "#2F4F4F", "#FF4444", "#4444FF", "#d4a843"]
}
```

### 2.5 Nail Studios
**Filename:** `industry-nails.webp`
**Folder:** `public/images/`

```json
{
  "prompt": "flat illustration, elegant nail studio interior, manicure station with hand rest, nail polish bottles in rainbow colors arranged decoratively, UV lamp glow, floating digital booking confirmations, rose pink soft tones, feminine luxurious clean, wide panoramic format, high resolution",
  "negative_prompt": "text, watermarks, logos, photorealistic, blurry, low quality",
  "aspect_ratio": "2:1",
  "dimensions": "1200x600",
  "style_preset": "illustration",
  "color_hints": ["#FFB6C1", "#FF69B4", "#FFC0CB", "#d4a843"]
}
```

### 2.6 Wellness Centers
**Filename:** `industry-wellness.webp`
**Folder:** `public/images/`

```json
{
  "prompt": "flat illustration, peaceful wellness center, yoga mats on wooden floor, meditation cushions, indoor tropical plants, warm natural soft daylight from windows, floating digital wellness dashboard, sage green emerald soft tones, calming zen serene, wide panoramic format, high resolution",
  "negative_prompt": "text, watermarks, logos, photorealistic, blurry, dark, gritty",
  "aspect_ratio": "2:1",
  "dimensions": "1200x600",
  "style_preset": "illustration",
  "color_hints": ["#8FBC8F", "#3CB371", "#2E8B57", "#d4a843"]
}
```

### 2.7 Spas
**Filename:** `industry-spas.webp`
**Folder:** `public/images/`

```json
{
  "prompt": "flat illustration, luxury spa interior, massage table with white towels, hot stones stacked, candles with soft warm glow, bamboo water feature, floating digital reservation cards, cyan teal soft tones, luxurious tranquil peaceful premium, wide panoramic format, high resolution",
  "negative_prompt": "text, watermarks, logos, photorealistic, blurry, low quality",
  "aspect_ratio": "2:1",
  "dimensions": "1200x600",
  "style_preset": "illustration",
  "color_hints": ["#008B8B", "#20B2AA", "#5F9EA0", "#d4a843"]
}
```

---

## 3. INDUSTRY GRID THUMBNAILS

```json
[
  {
    "id": "industry-thumb-restaurants",
    "file": "public/images/industry-thumb-restaurants.webp",
    "prompt": "simple flat icon illustration, restaurant, plate with cutlery fork and knife, small AI sparkle star above, warm orange solid background, minimal, clean, bold, recognizable at small size, crisp vector style, high resolution",
    "negative_prompt": "text, watermarks, fine details, photorealistic, blurry",
    "dimensions": "480x360",
    "color_hints": ["#FFA500", "#FF8C00"]
  },
  {
    "id": "industry-thumb-salons",
    "file": "public/images/industry-thumb-salons.webp",
    "prompt": "simple flat icon illustration, hair salon, scissors and comb crossed, small AI sparkle star above, soft pink solid background, minimal, clean, bold, recognizable at small size, crisp vector style, high resolution",
    "negative_prompt": "text, watermarks, fine details, photorealistic, blurry",
    "dimensions": "480x360",
    "color_hints": ["#FFB6C1", "#FF69B4"]
  },
  {
    "id": "industry-thumb-barbershops",
    "file": "public/images/industry-thumb-barbershops.webp",
    "prompt": "simple flat icon illustration, barbershop, barber pole and straight razor, small AI sparkle star above, steel blue solid background, minimal, clean, bold, masculine, crisp vector style, high resolution",
    "negative_prompt": "text, watermarks, fine details, photorealistic, blurry",
    "dimensions": "480x360",
    "color_hints": ["#4682B4", "#3F51B5"]
  },
  {
    "id": "industry-thumb-tattoo",
    "file": "public/images/industry-thumb-tattoo.webp",
    "prompt": "simple flat icon illustration, tattoo studio, tattoo machine and ink drop, small AI sparkle star above, gray slate solid background, minimal, clean, bold, edgy, crisp vector style, high resolution",
    "negative_prompt": "text, watermarks, fine details, photorealistic, blurry",
    "dimensions": "480x360",
    "color_hints": ["#708090", "#2F4F4F"]
  },
  {
    "id": "industry-thumb-nails",
    "file": "public/images/industry-thumb-nails.webp",
    "prompt": "simple flat icon illustration, nail studio, nail polish bottle with color drip, small AI sparkle star above, rose pink solid background, minimal, clean, bold, feminine, crisp vector style, high resolution",
    "negative_prompt": "text, watermarks, fine details, photorealistic, blurry",
    "dimensions": "480x360",
    "color_hints": ["#FF69B4", "#DB7093"]
  },
  {
    "id": "industry-thumb-wellness",
    "file": "public/images/industry-thumb-wellness.webp",
    "prompt": "simple flat icon illustration, wellness center, lotus flower with meditation silhouette, small AI sparkle star above, sage green solid background, minimal, clean, serene, calming, crisp vector style, high resolution",
    "negative_prompt": "text, watermarks, fine details, photorealistic, blurry",
    "dimensions": "480x360",
    "color_hints": ["#8FBC8F", "#3CB371"]
  },
  {
    "id": "industry-thumb-spas",
    "file": "public/images/industry-thumb-spas.webp",
    "prompt": "simple flat icon illustration, spa, three hot stones stacked with small candle, small AI sparkle star above, cyan teal solid background, minimal, clean, tranquil, premium, crisp vector style, high resolution",
    "negative_prompt": "text, watermarks, fine details, photorealistic, blurry",
    "dimensions": "480x360",
    "color_hints": ["#008B8B", "#20B2AA"]
  }
]
```

---

## 4. ICON SETS

### 4.1 Problem Icons (3)

```json
[
  {
    "id": "icon-missed-calls",
    "file": "public/icons/icon-missed-calls.png",
    "prompt": "flat minimal icon, phone handset with red X missed call badge, navy (#1a1a2e) and red (#EF4444) colors, transparent background, clean geometric minimal style, crisp edges, 128x128",
    "negative_prompt": "text, gradients, shadows, photorealistic, blurry, complex details",
    "dimensions": "128x128"
  },
  {
    "id": "icon-wasted-time",
    "file": "public/icons/icon-wasted-time.png",
    "prompt": "flat minimal icon, hourglass with sand running out and small warning triangle, navy (#1a1a2e) and amber (#F59E0B) colors, transparent background, clean geometric minimal style, crisp edges, 128x128",
    "negative_prompt": "text, gradients, shadows, photorealistic, blurry, complex details",
    "dimensions": "128x128"
  },
  {
    "id": "icon-lost-revenue",
    "file": "public/icons/icon-lost-revenue.png",
    "prompt": "flat minimal icon, euro coin with downward pointing arrow, navy (#1a1a2e) and red (#EF4444) colors, transparent background, clean geometric minimal style, crisp edges, 128x128",
    "negative_prompt": "text, gradients, shadows, photorealistic, blurry, complex details",
    "dimensions": "128x128"
  }
]
```

### 4.2 Feature Icons (6)

```json
[
  {
    "id": "icon-ai-phone",
    "file": "public/icons/icon-ai-phone.png",
    "prompt": "flat minimal icon, phone handset with AI circuit pattern lines and small sound waves, gold (#d4a843) and navy (#1a1a2e), transparent background, clean geometric, crisp, 128x128",
    "negative_prompt": "text, gradients, photorealistic, blurry",
    "dimensions": "128x128"
  },
  {
    "id": "icon-analytics",
    "file": "public/icons/icon-analytics.png",
    "prompt": "flat minimal icon, line chart with upward trend and data point dots, gold (#d4a843) and navy (#1a1a2e), transparent background, clean geometric, crisp, 128x128",
    "negative_prompt": "text, gradients, photorealistic, blurry",
    "dimensions": "128x128"
  },
  {
    "id": "icon-customer-care",
    "file": "public/icons/icon-customer-care.png",
    "prompt": "flat minimal icon, two hands shaking handshake with small heart above, gold (#d4a843) and navy (#1a1a2e), transparent background, clean geometric, crisp, 128x128",
    "negative_prompt": "text, gradients, photorealistic, blurry",
    "dimensions": "128x128"
  },
  {
    "id": "icon-scheduling",
    "file": "public/icons/icon-scheduling.png",
    "prompt": "flat minimal icon, calendar page with checkmark on a date, gold (#d4a843) and navy (#1a1a2e), transparent background, clean geometric, crisp, 128x128",
    "negative_prompt": "text, gradients, photorealistic, blurry",
    "dimensions": "128x128"
  },
  {
    "id": "icon-dashboard",
    "file": "public/icons/icon-dashboard.png",
    "prompt": "flat minimal icon, dashboard frame with bar chart and small KPI indicators inside, gold (#d4a843) and navy (#1a1a2e), transparent background, clean geometric, crisp, 128x128",
    "negative_prompt": "text, gradients, photorealistic, blurry",
    "dimensions": "128x128"
  },
  {
    "id": "icon-instant",
    "file": "public/icons/icon-instant.png",
    "prompt": "flat minimal icon, bold lightning bolt with small speed lines, gold (#d4a843) and navy (#1a1a2e), transparent background, clean geometric, crisp, energetic, 128x128",
    "negative_prompt": "text, gradients, photorealistic, blurry",
    "dimensions": "128x128"
  }
]
```

### 4.3 How It Works Icons (3)

```json
[
  {
    "id": "icon-connect",
    "file": "public/icons/icon-connect.png",
    "prompt": "flat minimal icon, plug connecting into socket or interlocking chain links, integration concept, gold (#d4a843) and navy (#1a1a2e), transparent background, clean geometric, crisp, 128x128",
    "negative_prompt": "text, gradients, photorealistic, blurry",
    "dimensions": "128x128"
  },
  {
    "id": "icon-configure",
    "file": "public/icons/icon-configure.png",
    "prompt": "flat minimal icon, central gear cog with adjustment slider bars, customization concept, gold (#d4a843) and navy (#1a1a2e), transparent background, clean geometric, crisp, 128x128",
    "negative_prompt": "text, gradients, photorealistic, blurry",
    "dimensions": "128x128"
  },
  {
    "id": "icon-launch",
    "file": "public/icons/icon-launch.png",
    "prompt": "flat minimal icon, simple rocket shape launching upward with small exhaust trail, go-live concept, gold (#d4a843) and navy (#1a1a2e), transparent background, clean geometric, crisp, dynamic, 128x128",
    "negative_prompt": "text, gradients, photorealistic, blurry",
    "dimensions": "128x128"
  }
]
```

### 4.4 Benefit Icons (4)

```json
[
  {
    "id": "icon-verified",
    "file": "public/icons/icon-verified.png",
    "prompt": "flat minimal icon, shield shape with checkmark inside, trust reliability, green (#22C55E) and navy (#1a1a2e), transparent background, clean geometric, solid, 128x128",
    "negative_prompt": "text, gradients, photorealistic, blurry",
    "dimensions": "128x128"
  },
  {
    "id": "icon-growth",
    "file": "public/icons/icon-growth.png",
    "prompt": "flat minimal icon, coin base with small plant leaves sprouting upward, revenue growth metaphor, green (#22C55E) and gold (#d4a843), transparent background, clean geometric, 128x128",
    "negative_prompt": "text, gradients, photorealistic, blurry",
    "dimensions": "128x128"
  },
  {
    "id": "icon-partnership",
    "file": "public/icons/icon-partnership.png",
    "prompt": "flat minimal icon, two hands clasped in professional handshake, navy (#1a1a2e) and gold (#d4a843), transparent background, clean geometric, 128x128",
    "negative_prompt": "text, gradients, photorealistic, blurry",
    "dimensions": "128x128"
  },
  {
    "id": "icon-efficiency",
    "file": "public/icons/icon-efficiency.png",
    "prompt": "flat minimal icon, speedometer gauge at maximum with small lightning bolt, performance concept, navy (#1a1a2e) and gold (#d4a843), transparent background, clean geometric, 128x128",
    "negative_prompt": "text, gradients, photorealistic, blurry",
    "dimensions": "128x128"
  }
]
```

### 4.5 Contact Info Icons (3)

```json
[
  {
    "id": "icon-phone",
    "file": "public/icons/icon-phone.png",
    "prompt": "flat minimal icon, classic telephone handset shape, solid gold (#d4a843) fill, transparent background, clean geometric, recognizable, 128x128",
    "negative_prompt": "text, gradients, photorealistic, blurry, complex",
    "dimensions": "128x128"
  },
  {
    "id": "icon-email",
    "file": "public/icons/icon-email.png",
    "prompt": "flat minimal icon, closed envelope with flap, solid gold (#d4a843) fill, transparent background, clean geometric, recognizable, 128x128",
    "negative_prompt": "text, gradients, photorealistic, blurry, complex",
    "dimensions": "128x128"
  },
  {
    "id": "icon-location",
    "file": "public/icons/icon-location.png",
    "prompt": "flat minimal icon, teardrop shaped map pin location marker with circle center, solid gold (#d4a843) fill, transparent background, clean geometric, recognizable, 128x128",
    "negative_prompt": "text, gradients, photorealistic, blurry, complex",
    "dimensions": "128x128"
  }
]
```

---

## 5. OG / SOCIAL META IMAGES

### 5.1 OpenGraph Image
**Filename:** `og-image.png`
**Folder:** `public/images/`

```json
{
  "prompt": "professional social media share card, Re.Serve text in elegant serif font left aligned, gold dot accent between Re and Serve, stylized phone with sound waves on right side, AI circuit pattern accents, deep navy (#1a1a2e) solid background, white text, gold (#d4a843) accents, corporate trustworthy premium clean design, wide format, high resolution",
  "negative_prompt": "watermarks, blurry, low quality, busy, cluttered",
  "dimensions": "1200x630",
  "color_hints": ["#1a1a2e", "#ffffff", "#d4a843"]
}
```

### 5.2 Twitter Card
**Filename:** `twitter-card.png`
**Folder:** `public/images/`

> Same as OG image, resize to 1200×628.

---

## 6. FAVICON

**Filename:** `icon-512.png`
**Folder:** `public/`
**Derived:** `favicon.ico` (16+32), `apple-touch-icon.png` (180), `icon-192.png` (192)

```json
{
  "prompt": "minimal app icon, stylized letter R centered in circle, gold (#d4a843) dot accent, white letter on deep navy (#1a1a2e) circular background, ultra clean, flat design, no gradients, recognizable at very small sizes like 16px, pixel perfect, 512x512",
  "negative_prompt": "text other than R, gradients, shadows, complex details, photorealistic, fine details",
  "dimensions": "512x512",
  "color_hints": ["#1a1a2e", "#ffffff", "#d4a843"]
}
```

---

## 7. MISC ILLUSTRATIONS

### 7.1 Booking Calendar
**Filename:** `booking-calendar.webp`
**Folder:** `public/images/`

```json
{
  "prompt": "flat illustration, online booking calendar, large calendar with highlighted available time slots, cursor clicking to book, confirmation checkmark animation, small clock, light blue to soft purple gradient background, minimal SaaS style, clean friendly, high resolution",
  "negative_prompt": "text, watermarks, real screenshots, photorealistic, blurry",
  "dimensions": "480x360",
  "color_hints": ["#4169E1", "#9370DB"]
}
```

### 7.2 Case Study / Results
**Filename:** `case-study.webp`
**Folder:** `public/images/`

```json
{
  "prompt": "flat illustration, business success metrics dashboard, upward trending graph, 40 percent increase arrow indicator, happy customer satisfaction icons, revenue bar chart, navy (#1a1a2e) gold (#d4a843) green (#22C55E) color scheme, very light gray background, professional data-driven optimistic SaaS style, clean, high resolution",
  "negative_prompt": "text, watermarks, real data, photorealistic, blurry",
  "dimensions": "640x400",
  "color_hints": ["#1a1a2e", "#d4a843", "#22C55E", "#f8f9fa"]
}
```

---

## QUICK REFERENCE CHECKLIST

### Service Illustrations (3)
- [ ] `public/images/service-calls.webp`
- [ ] `public/images/service-booking.webp`
- [ ] `public/images/service-website.webp`

### Industry Hero Banners (7)
- [ ] `public/images/industry-restaurants.webp`
- [ ] `public/images/industry-salons.webp`
- [ ] `public/images/industry-barbershops.webp`
- [ ] `public/images/industry-tattoo.webp`
- [ ] `public/images/industry-nails.webp`
- [ ] `public/images/industry-wellness.webp`
- [ ] `public/images/industry-spas.webp`

### Industry Grid Thumbnails (7)
- [ ] `public/images/industry-thumb-restaurants.webp`
- [ ] `public/images/industry-thumb-salons.webp`
- [ ] `public/images/industry-thumb-barbershops.webp`
- [ ] `public/images/industry-thumb-tattoo.webp`
- [ ] `public/images/industry-thumb-nails.webp`
- [ ] `public/images/industry-thumb-wellness.webp`
- [ ] `public/images/industry-thumb-spas.webp`

### Icons (19)
- [ ] `public/icons/icon-missed-calls.png`
- [ ] `public/icons/icon-wasted-time.png`
- [ ] `public/icons/icon-lost-revenue.png`
- [ ] `public/icons/icon-ai-phone.png`
- [ ] `public/icons/icon-analytics.png`
- [ ] `public/icons/icon-customer-care.png`
- [ ] `public/icons/icon-scheduling.png`
- [ ] `public/icons/icon-dashboard.png`
- [ ] `public/icons/icon-instant.png`
- [ ] `public/icons/icon-connect.png`
- [ ] `public/icons/icon-configure.png`
- [ ] `public/icons/icon-launch.png`
- [ ] `public/icons/icon-verified.png`
- [ ] `public/icons/icon-growth.png`
- [ ] `public/icons/icon-partnership.png`
- [ ] `public/icons/icon-efficiency.png`
- [ ] `public/icons/icon-phone.png`
- [ ] `public/icons/icon-email.png`
- [ ] `public/icons/icon-location.png`

### Meta / Social (2)
- [ ] `public/images/og-image.png`
- [ ] `public/images/twitter-card.png`

### Favicon (4)
- [ ] `public/icon-512.png` (source)
- [ ] `public/favicon.ico`
- [ ] `public/apple-touch-icon.png`
- [ ] `public/icon-192.png`

### Misc (2)
- [ ] `public/images/booking-calendar.webp`
- [ ] `public/images/case-study.webp`

---

**Total Images Needed: 42**

---

## HOW TO USE

### For Nano Banana Simple Input:
Copy the `prompt` field directly into the prompt box.

### For Nano Banana with Negative Prompt:
Use both `prompt` and `negative_prompt` fields if the interface supports it.

### Tips:
1. Nano Banana works best with comma-separated keyword style prompts
2. Include `negative_prompt` to avoid unwanted elements
3. `color_hints` help guide the palette — mention hex codes in the prompt
4. Generate thumbnails last — use hero banners as style reference for consistency
5. For icons, request transparent/white background and remove background in post-processing
