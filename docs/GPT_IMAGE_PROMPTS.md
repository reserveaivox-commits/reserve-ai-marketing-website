# GPT Image Generator Prompts - Re.Serve AI

## JSON Format Prompts for Better Results

> **Instructions:** Copy the JSON object for each image into GPT Image Generator's API or advanced prompt interface. JSON format provides structured, consistent results. For the web UI, you can extract the "prompt" field.

---

## GLOBAL STYLE REFERENCE

```json
{
  "style": "Re.Serve AI",
  "aesthetic": "Clean SaaS product illustration, flat/semi-flat with subtle depth",
  "brand_colors": {
    "primary": "#1a1a2e",
    "accent": "#d4a843",
    "light_bg": "#f8f9fa"
  },
  "lighting": "Soft diffused studio, minimal shadows",
  "mood": "Professional, trustworthy, modern, approachable",
  "quality": "High-resolution digital illustration",
  "restrictions": ["no text", "no watermarks", "no logos", "no photographs of real people"]
}
```

---

## 1. SERVICE ILLUSTRATIONS

### 1.1 AI Call Answering
**Filename:** `service-calls.webp`
**Folder:** `public/images/`

```json
{
  "prompt": "Clean modern flat illustration of an AI phone assistant concept for a SaaS business",
  "subject": {
    "type": "AI phone assistant",
    "elements": ["stylized smartphone with sound waves", "friendly AI robot avatar with headset", "floating call notification bubbles"],
    "composition": "centered, balanced, elements floating with slight depth"
  },
  "lighting": {
    "type": "soft diffused",
    "direction": "upper left",
    "shadows": "minimal, subtle drop shadows for depth"
  },
  "background": {
    "type": "soft gradient",
    "colors": ["light orange", "peach"],
    "direction": "top-left to bottom-right"
  },
  "style": {
    "reference": "Notion, Linear, or Stripe marketing illustrations",
    "quality": "high-resolution digital illustration",
    "aesthetic": "flat with subtle shadows and depth, modern SaaS"
  },
  "color_palette": {
    "primary_elements": "#1a1a2e",
    "accent": "#d4a843",
    "background": "warm orange to peach gradient"
  },
  "restrictions": ["no text", "no watermarks", "no real photography"],
  "dimensions": "640x480"
}
```

### 1.2 Booking & Appointment Management
**Filename:** `service-booking.webp`
**Folder:** `public/images/`

```json
{
  "prompt": "Clean modern flat illustration of an online booking and appointment management system",
  "subject": {
    "type": "booking calendar system",
    "elements": ["stylized calendar interface with checkmarks on dates", "clock icon", "small human silhouettes organized into time slots", "confirmation badge"],
    "composition": "centered calendar as main element, supporting elements floating around it"
  },
  "lighting": {
    "type": "soft diffused",
    "direction": "upper left",
    "shadows": "minimal drop shadows"
  },
  "background": {
    "type": "soft gradient",
    "colors": ["light blue", "indigo"],
    "direction": "top-left to bottom-right"
  },
  "style": {
    "reference": "Calendly or Cal.com marketing illustrations",
    "quality": "high-resolution digital illustration",
    "aesthetic": "flat with subtle depth, modern SaaS"
  },
  "color_palette": {
    "primary_elements": "#1a1a2e",
    "accent": "#d4a843",
    "background": "blue to indigo gradient"
  },
  "restrictions": ["no text", "no watermarks"],
  "dimensions": "640x480"
}
```

### 1.3 Website Design & Digital Presence
**Filename:** `service-website.webp`
**Folder:** `public/images/`

```json
{
  "prompt": "Clean modern flat illustration of website design and digital presence creation",
  "subject": {
    "type": "website design concept",
    "elements": ["stylized laptop showing beautiful website layout", "floating UI components (color swatches, buttons, cards)", "responsive device frames", "sparkle/magic wand effect suggesting AI"],
    "composition": "laptop centered, floating UI elements orbiting around it"
  },
  "lighting": {
    "type": "soft diffused",
    "direction": "upper left",
    "shadows": "subtle"
  },
  "background": {
    "type": "soft gradient",
    "colors": ["light purple", "violet"],
    "direction": "top-left to bottom-right"
  },
  "style": {
    "reference": "Webflow or Framer marketing illustrations",
    "quality": "high-resolution digital illustration",
    "aesthetic": "flat with subtle shadows, modern SaaS"
  },
  "color_palette": {
    "primary_elements": "#1a1a2e",
    "accent": "#d4a843",
    "background": "purple to violet gradient"
  },
  "restrictions": ["no text", "no watermarks", "no real screenshots"],
  "dimensions": "640x480"
}
```

---

## 2. INDUSTRY HERO BANNERS

### 2.1 Restaurants
**Filename:** `industry-restaurants.webp`
**Folder:** `public/images/`

```json
{
  "prompt": "Modern stylized illustration of a busy restaurant scene with subtle AI technology integration",
  "subject": {
    "type": "restaurant interior with AI overlay",
    "elements": ["warm inviting restaurant interior", "tables with plates of food", "holographic AI assistant overlay", "floating reservation cards", "phone with sound waves"],
    "composition": "wide panoramic scene, restaurant fills frame, AI elements subtly overlaid"
  },
  "lighting": {
    "type": "warm ambient restaurant lighting",
    "key_light": "golden warm overhead",
    "fill": "soft warm ambient",
    "mood": "inviting, warm"
  },
  "background": {
    "type": "soft gradient",
    "colors": ["warm orange", "soft red"],
    "direction": "left to right"
  },
  "style": {
    "reference": "Notion or Linear editorial illustrations",
    "quality": "high-resolution digital illustration",
    "aesthetic": "flat with atmosphere, storytelling illustration"
  },
  "color_palette": {
    "dominant": ["#FF6B35", "#E8451E", "#FFA07A"],
    "accent": "#d4a843",
    "mood": "warm, appetizing"
  },
  "restrictions": ["no text", "no watermarks", "no real photos"],
  "dimensions": "1200x600"
}
```

### 2.2 Hair Salons
**Filename:** `industry-salons.webp`
**Folder:** `public/images/`

```json
{
  "prompt": "Modern stylized illustration of an upscale hair salon interior with subtle AI booking technology",
  "subject": {
    "type": "hair salon interior with digital overlay",
    "elements": ["chic salon with styling chairs and mirrors", "hair tools (scissors, dryers)", "floating digital booking interface", "subtle appointment notifications"],
    "composition": "wide scene, salon chairs in foreground, digital UI floating mid-scene"
  },
  "lighting": {
    "type": "bright salon lighting",
    "key_light": "overhead soft white",
    "accent": "mirror reflections",
    "mood": "elegant, airy"
  },
  "background": {
    "type": "soft gradient",
    "colors": ["soft pink", "light purple"],
    "direction": "top to bottom"
  },
  "style": {
    "reference": "modern editorial illustration",
    "quality": "high-resolution",
    "aesthetic": "elegant, feminine, clean"
  },
  "color_palette": {
    "dominant": ["#FFB6C1", "#DDA0DD", "#E6E6FA"],
    "accent": "#d4a843"
  },
  "restrictions": ["no text", "no watermarks"],
  "dimensions": "1200x600"
}
```

### 2.3 Barbershops
**Filename:** `industry-barbershops.webp`
**Folder:** `public/images/`

```json
{
  "prompt": "Modern stylized illustration of a classic barbershop interior with subtle AI scheduling technology",
  "subject": {
    "type": "barbershop interior with digital overlay",
    "elements": ["classic barber chairs", "scissors, razors, combs", "barber pole", "floating digital scheduling screen", "hot towel steamer"],
    "composition": "wide scene, barber chair centered, tools arranged, digital UI floating"
  },
  "lighting": {
    "type": "warm industrial lighting",
    "key_light": "warm overhead pendants",
    "mood": "masculine, professional"
  },
  "background": {
    "type": "soft gradient",
    "colors": ["steel blue", "indigo"],
    "direction": "top to bottom"
  },
  "style": {
    "reference": "vintage meets modern illustration",
    "quality": "high-resolution",
    "aesthetic": "masculine, classic, confident"
  },
  "color_palette": {
    "dominant": ["#4682B4", "#3F51B5", "#2C3E50"],
    "accent": "#d4a843"
  },
  "restrictions": ["no text", "no watermarks"],
  "dimensions": "1200x600"
}
```

### 2.4 Tattoo Studios
**Filename:** `industry-tattoo.webp`
**Folder:** `public/images/`

```json
{
  "prompt": "Modern stylized illustration of a tattoo studio workspace with subtle AI appointment technology",
  "subject": {
    "type": "tattoo studio with digital overlay",
    "elements": ["tattoo machine", "ink bottles in various colors", "design sketches pinned to wall", "artist work lamp", "floating digital appointment cards"],
    "composition": "wide scene, artist workspace centered, creative elements around edges"
  },
  "lighting": {
    "type": "dramatic studio lighting",
    "key_light": "adjustable work lamp spotlight",
    "ambient": "moody, slightly dark",
    "mood": "creative, edgy"
  },
  "background": {
    "type": "soft gradient",
    "colors": ["dark gray", "slate"],
    "accent_splashes": ["red", "blue", "green artistic paint splashes"]
  },
  "style": {
    "reference": "urban art meets tech illustration",
    "quality": "high-resolution",
    "aesthetic": "creative, edgy, artistic"
  },
  "color_palette": {
    "dominant": ["#708090", "#2F4F4F", "#1C1C1C"],
    "accent_splashes": ["#FF4444", "#4444FF", "#44FF44"],
    "accent": "#d4a843"
  },
  "restrictions": ["no text", "no watermarks", "no offensive imagery"],
  "dimensions": "1200x600"
}
```

### 2.5 Nail Studios
**Filename:** `industry-nails.webp`
**Folder:** `public/images/`

```json
{
  "prompt": "Modern stylized illustration of an elegant nail studio with subtle AI booking technology",
  "subject": {
    "type": "nail salon interior with digital overlay",
    "elements": ["manicure station with hand rest", "nail polish bottles in rainbow colors", "hands being pampered", "UV lamp", "floating digital booking confirmations"],
    "composition": "wide scene, manicure station centered, polish bottles arranged decoratively"
  },
  "lighting": {
    "type": "bright, clean salon lighting",
    "key_light": "soft overhead white",
    "accent": "UV lamp glow",
    "mood": "feminine, luxurious"
  },
  "background": {
    "type": "soft gradient",
    "colors": ["rose", "soft pink"],
    "direction": "top to bottom"
  },
  "style": {
    "reference": "beauty magazine editorial illustration",
    "quality": "high-resolution",
    "aesthetic": "feminine, luxurious, clean"
  },
  "color_palette": {
    "dominant": ["#FFB6C1", "#FF69B4", "#FFC0CB"],
    "accent": "#d4a843"
  },
  "restrictions": ["no text", "no watermarks"],
  "dimensions": "1200x600"
}
```

### 2.6 Wellness Centers
**Filename:** `industry-wellness.webp`
**Folder:** `public/images/`

```json
{
  "prompt": "Modern stylized illustration of a peaceful wellness center with subtle AI management technology",
  "subject": {
    "type": "wellness center with digital overlay",
    "elements": ["yoga mats on wooden floor", "meditation cushions", "indoor tropical plants", "soft ambient lighting", "floating digital wellness dashboard"],
    "composition": "wide serene scene, yoga area centered, plants framing edges, digital UI floating gently"
  },
  "lighting": {
    "type": "natural soft daylight",
    "key_light": "warm natural light from windows",
    "fill": "soft ambient green from plants",
    "mood": "calming, zen"
  },
  "background": {
    "type": "soft gradient",
    "colors": ["sage green", "soft emerald"],
    "direction": "top to bottom"
  },
  "style": {
    "reference": "wellness brand editorial illustration (Headspace, Calm style)",
    "quality": "high-resolution",
    "aesthetic": "calming, natural, serene"
  },
  "color_palette": {
    "dominant": ["#8FBC8F", "#3CB371", "#2E8B57"],
    "accent": "#d4a843"
  },
  "restrictions": ["no text", "no watermarks"],
  "dimensions": "1200x600"
}
```

### 2.7 Spas
**Filename:** `industry-spas.webp`
**Folder:** `public/images/`

```json
{
  "prompt": "Modern stylized illustration of a luxury spa environment with subtle AI reservation technology",
  "subject": {
    "type": "spa interior with digital overlay",
    "elements": ["massage table with white towels", "hot stones stacked", "candles with soft glow", "bamboo water feature", "floating digital reservation cards"],
    "composition": "wide tranquil scene, massage table centered, water and candle elements around edges"
  },
  "lighting": {
    "type": "warm candlelight ambient",
    "key_light": "soft warm from candles",
    "fill": "cool water reflections",
    "mood": "luxurious, tranquil"
  },
  "background": {
    "type": "soft gradient",
    "colors": ["cyan", "teal"],
    "direction": "top to bottom"
  },
  "style": {
    "reference": "luxury wellness brand illustration",
    "quality": "high-resolution",
    "aesthetic": "luxurious, peaceful, premium"
  },
  "color_palette": {
    "dominant": ["#008B8B", "#20B2AA", "#5F9EA0"],
    "accent": "#d4a843"
  },
  "restrictions": ["no text", "no watermarks"],
  "dimensions": "1200x600"
}
```

---

## 3. INDUSTRY GRID THUMBNAILS

### 3.1 Restaurants Thumbnail
**Filename:** `industry-thumb-restaurants.webp`
**Folder:** `public/images/`

```json
{
  "prompt": "Simple flat icon-style illustration of a restaurant concept with AI sparkle",
  "subject": {
    "type": "centered icon composition",
    "elements": ["plate with cutlery (fork and knife)", "small AI sparkle/star above"],
    "composition": "single centered icon, generous padding"
  },
  "background": {
    "type": "solid with subtle gradient",
    "color": "warm orange (#FFA500 to #FF8C00)"
  },
  "style": {
    "reference": "app icon or category card illustration",
    "quality": "crisp vector-like illustration",
    "aesthetic": "simple, bold, recognizable at small size"
  },
  "restrictions": ["no text", "no fine details", "must read clearly at 120px"],
  "dimensions": "480x360"
}
```

### 3.2 Hair Salons Thumbnail
**Filename:** `industry-thumb-salons.webp`
**Folder:** `public/images/`

```json
{
  "prompt": "Simple flat icon-style illustration of a hair salon concept with AI sparkle",
  "subject": {
    "type": "centered icon composition",
    "elements": ["scissors and comb crossed", "small AI sparkle/star above"],
    "composition": "single centered icon, generous padding"
  },
  "background": {
    "type": "solid with subtle gradient",
    "color": "soft pink (#FFB6C1 to #FF69B4)"
  },
  "style": {
    "reference": "app icon style",
    "quality": "crisp vector-like",
    "aesthetic": "simple, bold, recognizable"
  },
  "restrictions": ["no text", "no fine details"],
  "dimensions": "480x360"
}
```

### 3.3 Barbershops Thumbnail
**Filename:** `industry-thumb-barbershops.webp`
**Folder:** `public/images/`

```json
{
  "prompt": "Simple flat icon-style illustration of a barbershop concept with AI sparkle",
  "subject": {
    "type": "centered icon composition",
    "elements": ["barber pole and straight razor", "small AI sparkle/star above"],
    "composition": "single centered icon, generous padding"
  },
  "background": {
    "type": "solid with subtle gradient",
    "color": "steel blue (#4682B4 to #3F51B5)"
  },
  "style": {
    "reference": "app icon style",
    "quality": "crisp vector-like",
    "aesthetic": "simple, bold, masculine"
  },
  "restrictions": ["no text", "no fine details"],
  "dimensions": "480x360"
}
```

### 3.4 Tattoo Studios Thumbnail
**Filename:** `industry-thumb-tattoo.webp`
**Folder:** `public/images/`

```json
{
  "prompt": "Simple flat icon-style illustration of a tattoo studio concept with AI sparkle",
  "subject": {
    "type": "centered icon composition",
    "elements": ["tattoo machine and ink drop", "small AI sparkle/star above"],
    "composition": "single centered icon, generous padding"
  },
  "background": {
    "type": "solid with subtle gradient",
    "color": "gray slate (#708090 to #2F4F4F)"
  },
  "style": {
    "reference": "app icon style",
    "quality": "crisp vector-like",
    "aesthetic": "simple, bold, edgy"
  },
  "restrictions": ["no text", "no fine details"],
  "dimensions": "480x360"
}
```

### 3.5 Nail Studios Thumbnail
**Filename:** `industry-thumb-nails.webp`
**Folder:** `public/images/`

```json
{
  "prompt": "Simple flat icon-style illustration of a nail studio concept with AI sparkle",
  "subject": {
    "type": "centered icon composition",
    "elements": ["nail polish bottle with color drip", "small AI sparkle/star above"],
    "composition": "single centered icon, generous padding"
  },
  "background": {
    "type": "solid with subtle gradient",
    "color": "rose pink (#FF69B4 to #DB7093)"
  },
  "style": {
    "reference": "app icon style",
    "quality": "crisp vector-like",
    "aesthetic": "simple, bold, feminine"
  },
  "restrictions": ["no text", "no fine details"],
  "dimensions": "480x360"
}
```

### 3.6 Wellness Centers Thumbnail
**Filename:** `industry-thumb-wellness.webp`
**Folder:** `public/images/`

```json
{
  "prompt": "Simple flat icon-style illustration of a wellness center concept with AI sparkle",
  "subject": {
    "type": "centered icon composition",
    "elements": ["lotus flower with meditation silhouette", "small AI sparkle/star above"],
    "composition": "single centered icon, generous padding"
  },
  "background": {
    "type": "solid with subtle gradient",
    "color": "sage green (#8FBC8F to #3CB371)"
  },
  "style": {
    "reference": "app icon style",
    "quality": "crisp vector-like",
    "aesthetic": "simple, serene, calming"
  },
  "restrictions": ["no text", "no fine details"],
  "dimensions": "480x360"
}
```

### 3.7 Spas Thumbnail
**Filename:** `industry-thumb-spas.webp`
**Folder:** `public/images/`

```json
{
  "prompt": "Simple flat icon-style illustration of a spa concept with AI sparkle",
  "subject": {
    "type": "centered icon composition",
    "elements": ["three hot stones stacked with candle", "small AI sparkle/star above"],
    "composition": "single centered icon, generous padding"
  },
  "background": {
    "type": "solid with subtle gradient",
    "color": "cyan teal (#008B8B to #20B2AA)"
  },
  "style": {
    "reference": "app icon style",
    "quality": "crisp vector-like",
    "aesthetic": "simple, tranquil, premium"
  },
  "restrictions": ["no text", "no fine details"],
  "dimensions": "480x360"
}
```

---

## 4. ICON SETS

### 4.1 Problem Icons (3)

#### Missed Calls
**Filename:** `icon-missed-calls.png`
**Folder:** `public/icons/`

```json
{
  "prompt": "Flat minimal icon of a phone with a missed call indicator",
  "subject": {
    "type": "phone handset icon",
    "elements": ["phone handset", "red X mark or missed call badge"],
    "composition": "centered, symmetrical"
  },
  "color_scheme": {
    "primary": "#1a1a2e",
    "alert": "#EF4444"
  },
  "background": {
    "type": "transparent",
    "fallback": "white"
  },
  "style": {
    "reference": "Lucide icons or Heroicons style",
    "weight": "medium stroke weight",
    "aesthetic": "clean, minimal, geometric"
  },
  "restrictions": ["no text", "no gradients", "flat colors only"],
  "dimensions": "128x128"
}
```

#### Wasted Time
**Filename:** `icon-wasted-time.png`
**Folder:** `public/icons/`

```json
{
  "prompt": "Flat minimal icon of an hourglass with warning indicator",
  "subject": {
    "type": "hourglass icon",
    "elements": ["hourglass with sand running out", "small warning triangle"],
    "composition": "centered, symmetrical"
  },
  "color_scheme": {
    "primary": "#1a1a2e",
    "alert": "#F59E0B"
  },
  "background": {
    "type": "transparent"
  },
  "style": {
    "reference": "Lucide icons style",
    "weight": "medium stroke",
    "aesthetic": "clean, minimal"
  },
  "restrictions": ["no text", "flat colors only"],
  "dimensions": "128x128"
}
```

#### Lost Revenue
**Filename:** `icon-lost-revenue.png`
**Folder:** `public/icons/`

```json
{
  "prompt": "Flat minimal icon of a euro coin with downward arrow",
  "subject": {
    "type": "currency icon",
    "elements": ["euro coin or money symbol", "downward-pointing arrow"],
    "composition": "centered"
  },
  "color_scheme": {
    "primary": "#1a1a2e",
    "alert": "#EF4444"
  },
  "background": {
    "type": "transparent"
  },
  "style": {
    "reference": "Lucide icons style",
    "weight": "medium stroke",
    "aesthetic": "clean, minimal"
  },
  "restrictions": ["no text", "flat colors only"],
  "dimensions": "128x128"
}
```

---

### 4.2 Feature Icons (6)

#### AI Phone
**Filename:** `icon-ai-phone.png`
**Folder:** `public/icons/`

```json
{
  "prompt": "Flat minimal icon of a phone handset with AI circuit pattern",
  "subject": {
    "type": "phone with AI motif",
    "elements": ["phone handset", "circuit board pattern lines", "small sound waves"],
    "composition": "centered"
  },
  "color_scheme": {
    "primary": "#1a1a2e",
    "accent": "#d4a843"
  },
  "background": { "type": "transparent" },
  "style": {
    "reference": "Heroicons outline style",
    "aesthetic": "clean, tech-forward"
  },
  "restrictions": ["no text", "flat colors only"],
  "dimensions": "128x128"
}
```

#### Analytics
**Filename:** `icon-analytics.png`
**Folder:** `public/icons/`

```json
{
  "prompt": "Flat minimal icon of an upward trending chart",
  "subject": {
    "type": "growth chart",
    "elements": ["line chart with upward trend", "data points as dots"],
    "composition": "centered"
  },
  "color_scheme": {
    "primary": "#1a1a2e",
    "accent": "#d4a843"
  },
  "background": { "type": "transparent" },
  "style": {
    "reference": "Heroicons outline style",
    "aesthetic": "clean, data-oriented"
  },
  "restrictions": ["no text", "flat colors only"],
  "dimensions": "128x128"
}
```

#### Customer Care
**Filename:** `icon-customer-care.png`
**Folder:** `public/icons/`

```json
{
  "prompt": "Flat minimal icon of a handshake representing customer care",
  "subject": {
    "type": "handshake",
    "elements": ["two hands shaking", "subtle heart or care symbol above"],
    "composition": "centered"
  },
  "color_scheme": {
    "primary": "#1a1a2e",
    "accent": "#d4a843"
  },
  "background": { "type": "transparent" },
  "style": {
    "reference": "Heroicons outline style",
    "aesthetic": "warm, approachable"
  },
  "restrictions": ["no text", "flat colors only"],
  "dimensions": "128x128"
}
```

#### Scheduling
**Filename:** `icon-scheduling.png`
**Folder:** `public/icons/`

```json
{
  "prompt": "Flat minimal icon of a calendar with checkmark",
  "subject": {
    "type": "calendar",
    "elements": ["calendar page", "checkmark on a date"],
    "composition": "centered"
  },
  "color_scheme": {
    "primary": "#1a1a2e",
    "accent": "#d4a843"
  },
  "background": { "type": "transparent" },
  "style": {
    "reference": "Heroicons outline style",
    "aesthetic": "organized, clean"
  },
  "restrictions": ["no text", "flat colors only"],
  "dimensions": "128x128"
}
```

#### Dashboard
**Filename:** `icon-dashboard.png`
**Folder:** `public/icons/`

```json
{
  "prompt": "Flat minimal icon of a dashboard with metrics",
  "subject": {
    "type": "dashboard layout",
    "elements": ["rectangular dashboard frame", "bar chart inside", "small KPI indicators"],
    "composition": "centered"
  },
  "color_scheme": {
    "primary": "#1a1a2e",
    "accent": "#d4a843"
  },
  "background": { "type": "transparent" },
  "style": {
    "reference": "Heroicons outline style",
    "aesthetic": "analytical, clean"
  },
  "restrictions": ["no text", "flat colors only"],
  "dimensions": "128x128"
}
```

#### Speed / Instant
**Filename:** `icon-instant.png`
**Folder:** `public/icons/`

```json
{
  "prompt": "Flat minimal icon of a lightning bolt for speed and instant response",
  "subject": {
    "type": "lightning bolt",
    "elements": ["bold lightning bolt", "small speed lines"],
    "composition": "centered, dynamic angle"
  },
  "color_scheme": {
    "primary": "#1a1a2e",
    "accent": "#d4a843"
  },
  "background": { "type": "transparent" },
  "style": {
    "reference": "Heroicons solid style",
    "aesthetic": "energetic, powerful"
  },
  "restrictions": ["no text", "flat colors only"],
  "dimensions": "128x128"
}
```

---

### 4.3 How It Works Icons (3)

#### Connect
**Filename:** `icon-connect.png`
**Folder:** `public/icons/`

```json
{
  "prompt": "Flat minimal icon of a plug connecting or chain link for integration",
  "subject": {
    "type": "connection symbol",
    "elements": ["plug connecting into socket OR interlocking chain links"],
    "composition": "centered"
  },
  "color_scheme": {
    "primary": "#1a1a2e",
    "accent": "#d4a843"
  },
  "background": { "type": "transparent" },
  "style": {
    "reference": "Heroicons outline",
    "aesthetic": "technical, connecting"
  },
  "restrictions": ["no text"],
  "dimensions": "128x128"
}
```

#### Configure
**Filename:** `icon-configure.png`
**Folder:** `public/icons/`

```json
{
  "prompt": "Flat minimal icon of a gear with adjustment sliders for configuration",
  "subject": {
    "type": "settings/config symbol",
    "elements": ["central gear cog", "adjustment slider bars"],
    "composition": "centered"
  },
  "color_scheme": {
    "primary": "#1a1a2e",
    "accent": "#d4a843"
  },
  "background": { "type": "transparent" },
  "style": {
    "reference": "Heroicons outline",
    "aesthetic": "technical, customizable"
  },
  "restrictions": ["no text"],
  "dimensions": "128x128"
}
```

#### Launch
**Filename:** `icon-launch.png`
**Folder:** `public/icons/`

```json
{
  "prompt": "Flat minimal icon of a rocket launching upward",
  "subject": {
    "type": "rocket launch",
    "elements": ["simple rocket shape", "small exhaust trail", "upward trajectory"],
    "composition": "centered, pointing up-right"
  },
  "color_scheme": {
    "primary": "#1a1a2e",
    "accent": "#d4a843"
  },
  "background": { "type": "transparent" },
  "style": {
    "reference": "Heroicons solid",
    "aesthetic": "dynamic, exciting"
  },
  "restrictions": ["no text"],
  "dimensions": "128x128"
}
```

---

### 4.4 Benefit Icons (4)

#### Verified
**Filename:** `icon-verified.png`
**Folder:** `public/icons/`

```json
{
  "prompt": "Flat minimal icon of a shield with checkmark for trust and reliability",
  "subject": {
    "type": "trust shield",
    "elements": ["shield shape", "checkmark inside"],
    "composition": "centered, symmetrical"
  },
  "color_scheme": {
    "primary": "#1a1a2e",
    "accent": "#22C55E"
  },
  "background": { "type": "transparent" },
  "style": { "reference": "Heroicons solid", "aesthetic": "trustworthy, solid" },
  "restrictions": ["no text"],
  "dimensions": "128x128"
}
```

#### Growth
**Filename:** `icon-growth.png`
**Folder:** `public/icons/`

```json
{
  "prompt": "Flat minimal icon of a plant sprouting from a coin for revenue growth",
  "subject": {
    "type": "growth metaphor",
    "elements": ["coin base", "small plant with leaves sprouting upward"],
    "composition": "centered"
  },
  "color_scheme": {
    "primary": "#22C55E",
    "accent": "#d4a843"
  },
  "background": { "type": "transparent" },
  "style": { "reference": "Heroicons outline", "aesthetic": "optimistic, growing" },
  "restrictions": ["no text"],
  "dimensions": "128x128"
}
```

#### Partnership
**Filename:** `icon-partnership.png`
**Folder:** `public/icons/`

```json
{
  "prompt": "Flat minimal icon of two hands shaking in professional partnership",
  "subject": {
    "type": "handshake",
    "elements": ["two hands clasped in handshake"],
    "composition": "centered, horizontal"
  },
  "color_scheme": {
    "primary": "#1a1a2e",
    "accent": "#d4a843"
  },
  "background": { "type": "transparent" },
  "style": { "reference": "Heroicons outline", "aesthetic": "professional, collaborative" },
  "restrictions": ["no text"],
  "dimensions": "128x128"
}
```

#### Efficiency
**Filename:** `icon-efficiency.png`
**Folder:** `public/icons/`

```json
{
  "prompt": "Flat minimal icon of a speedometer at maximum with lightning bolt for performance",
  "subject": {
    "type": "performance meter",
    "elements": ["speedometer gauge at max", "small lightning bolt"],
    "composition": "centered"
  },
  "color_scheme": {
    "primary": "#1a1a2e",
    "accent": "#d4a843"
  },
  "background": { "type": "transparent" },
  "style": { "reference": "Heroicons solid", "aesthetic": "fast, powerful" },
  "restrictions": ["no text"],
  "dimensions": "128x128"
}
```

---

### 4.5 Contact Info Icons (3)

#### Phone
**Filename:** `icon-phone.png`
**Folder:** `public/icons/`

```json
{
  "prompt": "Flat minimal icon of a telephone handset",
  "subject": {
    "type": "phone handset",
    "elements": ["classic telephone handset shape"],
    "composition": "centered, slight tilt"
  },
  "color_scheme": {
    "fill": "#d4a843"
  },
  "background": { "type": "transparent" },
  "style": { "reference": "Heroicons solid", "aesthetic": "clean, recognizable" },
  "restrictions": ["no text"],
  "dimensions": "128x128"
}
```

#### Email
**Filename:** `icon-email.png`
**Folder:** `public/icons/`

```json
{
  "prompt": "Flat minimal icon of an envelope for email",
  "subject": {
    "type": "envelope",
    "elements": ["closed envelope with flap"],
    "composition": "centered"
  },
  "color_scheme": {
    "fill": "#d4a843"
  },
  "background": { "type": "transparent" },
  "style": { "reference": "Heroicons solid", "aesthetic": "clean, recognizable" },
  "restrictions": ["no text"],
  "dimensions": "128x128"
}
```

#### Location
**Filename:** `icon-location.png`
**Folder:** `public/icons/`

```json
{
  "prompt": "Flat minimal icon of a map pin location marker",
  "subject": {
    "type": "map pin",
    "elements": ["teardrop-shaped pin with circle center"],
    "composition": "centered"
  },
  "color_scheme": {
    "fill": "#d4a843"
  },
  "background": { "type": "transparent" },
  "style": { "reference": "Heroicons solid", "aesthetic": "clean, recognizable" },
  "restrictions": ["no text"],
  "dimensions": "128x128"
}
```

---

## 5. OG / SOCIAL META IMAGES

### 5.1 OpenGraph Image
**Filename:** `og-image.png`
**Folder:** `public/images/`

```json
{
  "prompt": "Professional social media share card for Re.Serve AI, an AI phone assistant for service businesses",
  "subject": {
    "type": "branded social card",
    "elements": ["text 'Re.Serve' in elegant serif font", "gold dot accent between Re and Serve", "stylized phone with sound waves on right side", "AI circuit pattern accents"],
    "composition": "text left-aligned, phone motif right, balanced"
  },
  "lighting": {
    "type": "subtle studio",
    "effect": "soft glow behind text"
  },
  "background": {
    "color": "#1a1a2e",
    "type": "deep navy, solid"
  },
  "style": {
    "reference": "Stripe or Linear OG images",
    "quality": "crisp, professional",
    "aesthetic": "corporate, trustworthy, premium"
  },
  "color_palette": {
    "background": "#1a1a2e",
    "text": "#ffffff",
    "accent": "#d4a843"
  },
  "restrictions": ["no watermarks", "text 'Re.Serve' is intentional"],
  "dimensions": "1200x630"
}
```

### 5.2 Twitter Card
**Filename:** `twitter-card.png`
**Folder:** `public/images/`

> Same as OG image, use identical or slightly cropped to 1200×628.

---

## 6. FAVICON

### 6.1 Favicon Source (512px — resize to all needed sizes)
**Filename:** `icon-512.png`
**Folder:** `public/`
**Derived files:** `favicon.ico` (16+32), `apple-touch-icon.png` (180), `icon-192.png` (192)

```json
{
  "prompt": "Minimal app icon for Re.Serve AI brand",
  "subject": {
    "type": "app icon / favicon",
    "elements": ["stylized letter R", "gold dot accent"],
    "composition": "R centered in circular shape"
  },
  "background": {
    "shape": "circle",
    "color": "#1a1a2e"
  },
  "style": {
    "reference": "Apple app icon guidelines",
    "quality": "pixel-perfect at all sizes",
    "aesthetic": "ultra clean, recognizable at 16px"
  },
  "color_palette": {
    "background": "#1a1a2e",
    "letter": "#ffffff",
    "dot": "#d4a843"
  },
  "restrictions": ["no gradients", "no fine details", "must be legible at 16x16"],
  "dimensions": "512x512"
}
```

---

## 7. MISC ILLUSTRATIONS

### 7.1 Booking Calendar (Contact Page)
**Filename:** `booking-calendar.webp`
**Folder:** `public/images/`

```json
{
  "prompt": "Clean flat illustration of an online booking calendar for a contact page",
  "subject": {
    "type": "booking calendar UI",
    "elements": ["large calendar with highlighted available time slots", "cursor clicking to book", "confirmation checkmark animation", "small clock"],
    "composition": "calendar centered, interaction elements around it"
  },
  "lighting": {
    "type": "flat, even",
    "shadows": "minimal drop shadows"
  },
  "background": {
    "type": "soft gradient",
    "colors": ["light blue", "soft purple"]
  },
  "style": {
    "reference": "Calendly marketing illustration",
    "quality": "high-resolution",
    "aesthetic": "friendly, action-oriented, SaaS"
  },
  "restrictions": ["no text", "no real UI screenshots"],
  "dimensions": "480x360"
}
```

### 7.2 Case Study / Results (Homepage)
**Filename:** `case-study.webp`
**Folder:** `public/images/`

```json
{
  "prompt": "Clean flat illustration showing business success metrics and growth for a case study section",
  "subject": {
    "type": "success dashboard",
    "elements": ["upward trending graph", "40% increase arrow indicator", "happy customer satisfaction icons", "revenue bar chart"],
    "composition": "dashboard centered, metrics floating around"
  },
  "lighting": {
    "type": "flat, even"
  },
  "background": {
    "type": "subtle",
    "color": "very light gray (#f8f9fa)"
  },
  "style": {
    "reference": "SaaS case study illustration",
    "quality": "high-resolution",
    "aesthetic": "professional, data-driven, optimistic"
  },
  "color_palette": {
    "primary": "#1a1a2e",
    "accent": "#d4a843",
    "success": "#22C55E"
  },
  "restrictions": ["no text in the image", "no real data"],
  "dimensions": "640x400"
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

## HOW TO USE JSON PROMPTS

### For GPT Image Generator Web UI:
Extract the `prompt` field and combine with key details:
```
[prompt] + [subject.elements] + [lighting] + [style.reference] + [restrictions]
```

### For GPT Image Generator API:
Use the full JSON structure for maximum control and consistency.

### Tips:
1. JSON structure helps maintain consistency across multiple images
2. Specific color hex codes ensure accurate brand colors
3. Restrictions array prevents unwanted elements
4. Style references guide the overall aesthetic
5. Generate the 512px favicon source first, then resize programmatically
