# Dentist Template

A Next.js dental clinic landing page featuring an interactive 3D teeth model with service-based material effects (whitening, veneers, braces, implants, cleaning).

## Tech Stack

- **Next.js 15** (App Router)
- **React Three Fiber + Drei** — 3D rendering
- **Three.js** — WebGL/GLB model
- **Framer Motion** — animations
- **Tailwind CSS** — styling
- **TypeScript**

## Prerequisites

- Node.js 18+
- npm 9+

## Getting Started

```bash
# 1. Clone the repo
git clone <repo-url>
cd dentist-template-1

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The 3D teeth model (`public/models/mouth.glb`) is committed to the repo — no extra download needed.

## Project Structure

```
app/
  layout.tsx          # Root layout + providers
  page.tsx            # Entry point → MedicalHealthCare screen
  globals.css

src/
  screens/
    MedicalHealthCare/
      MedicalHealthCare.tsx          # Main page composition
      sections/
        HeroBannerSection/           # Hero with headline + CTA
        QuickSupportActionsSection/  # Quick action cards
        InteractiveTeethSection/     # 3D model + service pills
          components/
            ServicePill.tsx          # Clickable service selector
            InfoCard.tsx             # Floating info card
            DentalCTAButton.tsx
            LoadingSpinner.tsx
            ModelLoader.tsx

  components/
    3d/
      TeethModel.tsx       # Canvas + WebGL context recovery
      SparkleParticles.tsx # Particle effect for whitening
      BracesOverlay.tsx    # Braces mesh overlay

  hooks/
    useMousePosition.ts

  lib/
    serviceData.ts   # Service definitions (label, color, description)

  types/
    three-fiber.d.ts

public/
  models/
    mouth.glb        # 3D teeth model (6.6 MB, committed to git)
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server at localhost:3000 |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 3D Model & Services

The interactive section lets users cycle through dental services. Each one applies a different material effect to the teeth model:

| Service | Effect |
|---|---|
| Whitening | Bright white + blue emissive glow + sparkle particles |
| Veneers | Warm ivory + metallic sheen |
| Cleaning | Mint green + fresh teal emissive |
| Braces | Original tooth color + wire overlay mesh |
| Implants | Cool blue + titanium metalness |

WebGL context loss is handled automatically — the canvas silently remounts up to 3 times before showing a manual recovery button.

## Deployment

Deploy to Vercel in one click:

```bash
npx vercel
```

Or push to a GitHub repo connected to Vercel for automatic deploys on every push to `main`.
