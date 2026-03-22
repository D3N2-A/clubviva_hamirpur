# Club Viva Luxury Gym & Cafe — Landing Page

## About Club Viva
- **Tagline:** Himachal Pradesh's Largest & Most Advanced Fitness & Wellness Destination
- **Area:** 7,000 sq. ft. premium facility
- **Location:** Gandhi Chowk, Gurukul Mall, Galore, Hamirpur, Himachal Pradesh 177001
- **Phone:** +91 82192 58833
- **Instagram:** @_clubviva_
- **Facebook:** Club Viva Hamirpur
- **WhatsApp:** https://wa.me/918219258833

## Reference Files
- `PROTO.html` — Source-of-truth prototype from Google Stitch. All layout, structure, and component behavior should match this file.
- `DESIGN.md` — Neo-Brutalist / Bauhaus design system tokens and principles.

## Tech Stack
- React 18+ (Vite)
- Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- Framer Motion for scroll/entrance animations
- Swiper for gallery carousel
- Google Material Symbols Outlined for icons (NOT react-icons)
- Google Fonts: Epilogue, Inter, Manrope

## Project Structure
```
assets/                  # Original raw gym photos & videos (NOT for web)
public/assets/           # Web-optimized images & videos (processed output)
src/
├── components/
│   ├── Navbar.jsx       # Glass nav, sticky, gold CTA
│   ├── HeroCarousel.jsx # Video+image carousel with indicators
│   ├── StatsBar.jsx     # 4-column stats strip
│   ├── Facilities.jsx   # Asymmetric bento grid (12-col)
│   ├── Gallery.jsx      # Masonry columns, grayscale→color hover
│   ├── Pricing.jsx      # 3-tier cards in INR
│   ├── Recovery.jsx     # 2-col staggered images + text
│   ├── CTABanner.jsx    # Gold gradient, WhatsApp + Call
│   └── Footer.jsx       # Multi-column footer
├── constants/
│   └── index.js         # Data arrays (facilities, pricing tiers, gallery items)
├── App.jsx
├── main.jsx
└── index.css            # Tailwind directives, font imports, custom utilities
```

## Design System (Neo-Brutalist / Bauhaus)

### Color Palette
- **Background/Surface:** `#131313`
- **Surface Container Low:** `#1C1B1B`
- **Surface Container:** `#201F1F`
- **Surface Container High:** `#2A2A2A`
- **Surface Container Highest:** `#353534`
- **Primary/Accent:** `#F2CA50` (Gold)
- **Primary Container:** `#D4AF37` (Deep Gold)
- **Gold Gradient:** `linear-gradient(135deg, #F2CA50 0%, #D4AF37 100%)`
- **On Background/Text:** `#E5E2E1`
- **On Surface Variant:** `#D0C5AF` (muted body text)
- **Border/Outline:** `#99907C`, thin borders `#333333`
- **Tertiary (Recovery accents):** `#BFCDFF`

### Typography
- **Headlines:** `Epilogue` — bold/black weight, uppercase, italic, tight tracking
- **Body:** `Inter` — light/regular weight, relaxed leading
- **Labels:** `Manrope` — uppercase, wide tracking, tiny size (10-12px)
- **Scale:** Extreme shifts (80px headlines next to 12px labels)

### Shape & Elevation
- **Border radius:** `2px` default, `4px` large, `8px` xl — hard edges
- **Shadows:** Hard pop shadows (`4px 4px 0px #000`) — no soft blurs
- **Hover states:** Mechanical (color swaps, scale shifts, position offsets)

### Special Utilities (from PROTO.html)
- `.glass-nav` — `rgba(19,19,19,0.8)` + `backdrop-filter: blur(20px)`
- `.gold-gradient` — `linear-gradient(135deg, #f2ca50 0%, #d4af37 100%)`
- `.text-glow` — `text-shadow: 0 0 20px rgba(242,202,80,0.3)`

## Landing Page Sections

### 1. Navbar
- Fixed, glass morphism background (`.glass-nav`)
- "CLUB VIVA" text logo left in gold, uppercase, `font-headline`
- Desktop: Facilities / Recovery / Pricing / Cafe links (uppercase, sm, bold)
- Gold gradient "JOIN NOW" button
- Mobile: hamburger menu icon (Material Symbols `menu`)

### 2. Hero Carousel
- Full-viewport (`h-screen`), auto-cycling every 5 seconds
- Mix of 3 video slides + image slides with crossfade transitions
- Dark overlay (`bg-black/50`) over media
- Content overlay: label line ("Hamirpur's Premier Sanctuary"), headline ("HIMACHAL'S LARGEST FITNESS DESTINATION" with gold glow), description, two CTAs (JOIN NOW gold + EXPLORE TOUR outline)
- Bottom progress indicator bars

### 3. Stats Bar
- `bg-surface-container-low`, 4-column grid
- Each stat: left gold border, large gold headline text + tiny uppercase label
- Values: `7,000+` Sq Ft / `PREMIUM` Equipment / `EXPERT` Trainers / `RECOVERY` Zone

### 4. Facilities Bento Grid
- Section title: "The Ecosystem" with gold accent
- Asymmetric 12-column CSS Grid, ~900px height on desktop:
  - Gym Floor: `col-span-8 row-span-2` (large hero card)
  - Women's Section: `col-span-4`
  - Recovery Zone: `col-span-4`
  - Viva Cafe: `col-span-6`
  - Salon & Spa: `col-span-6`
- Each card: image with hover scale (1.1x), gradient overlay bottom→top, title + description

### 5. Gallery ("Viva in Motion")
- Masonry layout: `columns-1 md:columns-3 lg:columns-4`
- Images start grayscale, transition to color on hover (`grayscale hover:grayscale-0`)
- Mix of images and inline autoplay videos
- Large watermark "GALLERY" text at 10% opacity behind section title

### 6. Pricing
- 3 tiers side by side:
  - **Monthly:** ₹3,500/month — 24/7 access, basic recovery, WiFi
  - **Yearly Elite:** ₹31,500/year — highlighted with `scale-105`, `border-2 border-primary`, "25% OFF" badge, all access + sauna/ice + cafe discount + personal training
  - **Quarterly:** ₹9,500/3 months — 24/7 access, steam sessions, nutrition consultation
- Cards use `border border-outline-variant/10`, Material Symbols `check_circle` for features
- CTA buttons: Elite gets gold gradient, others get outline style

### 7. Recovery Zone
- 2-column layout: staggered image pair (left) + text content (right)
- Images offset with `mt-12` on second image for visual tension
- Headline: "RECOVERY IS PERFORMANCE" with tertiary color accent
- Icon list: Steam (thermostat icon) + Ice Bath (ac_unit icon) with descriptions

### 8. CTA Banner
- Full gold gradient background
- Large headline: "READY TO START YOUR JOURNEY?"
- Two buttons: WhatsApp (dark bg) + Call Now (outline), both link to +918219258833
- Contact info text below

### 9. Footer
- Dark bg `#1C1B1B`
- Left: CLUB VIVA brand + description
- Right: 4-column grid — Follow Us (Instagram/Facebook), Explore (Facilities/Pricing), Legal (Privacy/Terms)
- Bottom: copyright with address and phone

## Assets

### Raw Assets (in `/assets/` — originals, NOT for web use)
Originals kept for reference. Do not import these into the React app.

### Processed Assets (in `public/assets/` — web-ready)

**Images (resized to max 1920px, compressed JPEG):**
| File | Description | Size |
|------|-------------|------|
| `gym-floor-cardio.jpg` | Gym floor with cardio area, LED ceiling, "IMPOSSIBLE" sign | 501KB |
| `gym-floor-strength.jpg` | Strength zone with squat racks, "FEEL YOUR POWER" wall art | 566KB |
| `gym-equipment-wide.jpg` | Wide shot of Tunturi equipment, neon LED ceiling | 510KB |
| `gym-floor-overview.jpg` | Full gym floor overview, moody lighting | 416KB |
| `gym-weights-rack.jpg` | Tunturi weight plates rack closeup | 424KB |
| `equipment-bench-press.jpg` | Bench press machine, "NO LIMITS" wall text (portrait) | 600KB |
| `entrance-lobby.jpg` | Building entrance/lobby with LED wall art, staircase | 792KB |
| `cardio-zone.jpg` | Cardio machines with neon lighting, glass windows | 666KB |
| `reception-office.jpg` | Reception/office area, marble desk, modern interior | 709KB |
| `gym-floor-wide.jpg` | Wide gym floor shot, marble walls, LED ceiling | 799KB |
| `gym-floor-weights.jpg` | Gym floor with free weights area, marble accent wall | 810KB |

**Videos (720p, H.264, CRF 28, no audio, faststart):**
| File | Size |
|------|------|
| `hero-video-1.mp4` | 3.1MB |
| `hero-video-2.mp4` | 2.6MB |
| `hero-video-3.mp4` | 705KB |

### Suggested Asset Mapping to Sections
- **Hero Carousel:** `hero-video-1.mp4`, `gym-floor-strength.jpg`, `hero-video-2.mp4`, `gym-equipment-wide.jpg`, `hero-video-3.mp4`, `entrance-lobby.jpg`, `gym-floor-cardio.jpg`
- **Facilities Bento Grid:**
  - Gym Floor (large): `gym-floor-wide.jpg`
  - Women's Section: `cardio-zone.jpg`
  - Recovery Zone: use placeholder or future photo
  - Viva Cafe: `reception-office.jpg` (or future cafe photo)
  - Salon & Spa: use placeholder or future photo
- **Gallery:** All images + inline videos
- **Recovery Zone:** `gym-floor-weights.jpg` + `gym-floor-cardio.jpg` (staggered pair)
- **Equipment closeup:** `equipment-bench-press.jpg`, `gym-weights-rack.jpg`

## Commands
```bash
npm create vite@latest . -- --template react   # Init (if fresh)
npm install                                      # Install deps
npm run dev                                      # Dev server
npm run build                                    # Production build
```

## Key Dependencies
```bash
npm install tailwindcss @tailwindcss/vite framer-motion react-router-dom swiper
```

## Conventions
- Functional components only, no class components
- Keep data (facilities, pricing, gallery) in `src/constants/index.js` as exported arrays
- Each section is its own component in `src/components/`
- Use Tailwind utility classes; avoid custom CSS unless necessary (glass-nav, gold-gradient, text-glow are exceptions)
- Mobile-first responsive design (sm, md, lg breakpoints)
- Use semantic HTML (`<section>`, `<nav>`, `<footer>`, `<article>`)
- Use processed assets from `public/assets/` only — never raw files
- Use Framer Motion `whileInView` for scroll-triggered animations
- Lazy-load images below the fold
- Videos: autoplay, muted, loop, playsinline (no controls)
- All CTA "Join" buttons link to WhatsApp: `https://wa.me/918219258833`
