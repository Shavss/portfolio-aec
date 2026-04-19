# Kacper Ryske — Portfolio

## Project
Portfolio site for Kacper Ryske, general software developer portfolio.

## Stack
- **Framework:** Next.js 14.2.5 (static export via `output: 'export'`)
- **UI:** React 18, Tailwind CSS 3.3.x (NOT v4 — do not use `@theme`, do not use CSS-first config)
- **Animation:** Framer Motion 11

## Deployment
GitHub Pages via GitHub Actions. Static output to `/out` directory.

## Fonts
Loaded via `next/font/google` in `app/layout.js`. Add new fonts here only.
- **Display / Mono:** Space Mono (400, 700) — headings, nav, metadata, tags
- **Body:** Work Sans (variable) — prose, descriptions, body text

## Styling Rules
- All utility classes must exist in Tailwind v3 base stylesheet (no JIT-only classes that won't purge correctly)
- Custom CSS goes in `globals.css` using `@layer` or plain class definitions
- All colours defined as CSS custom properties in `globals.css`; Tailwind theme tokens in `tailwind.config.js` reference those variables
- Tailwind colour opacity modifiers (`text-ink/60`) do not work with CSS variable colours — use explicit utility classes instead

## Component Conventions
- All interactive components are `'use client'`; static components can be server components
- No default exports from `/data` files — use named exports only

## Image Handling
- `next/image` is disabled (`unoptimized: true`)
- Use standard `<img>` tags with CDN URLs for icons

## Do Not Modify
- `next.config.js`
- `.github/workflows/deploy.yml`
- `package.json` (unless adding a new Google Font that needs no install)

## Design System — Swiss Grid / Brutalist Typography

### Colour Palettes (2 themes via `data-theme` attribute)

**Theme A — Dark Bauhaus (default):**
- Canvas: `#0A0A0A` / Surface: `#111111` / Ink: `#E8E4DC`
- Muted: `#8A8480` (WCAG AA compliant, 5.4:1) / Accent: `#D4580A`
- Rule: `#2A2A2A` / Stroke: `#1E1E1E`

**Theme B — Light Swiss Editorial:**
- Canvas: `#F5F2EC` / Surface: `#EDEAE3` / Ink: `#0A0A0A`
- Muted: `#5A5652` / Accent: `#D4580A`
- Rule: `#D0CDC6` / Stroke: `#E0DDD6`

### Key Accent Colour
`#D4580A` (burnt orange) — Bauhaus-inspired editorial accent.

### Design Decisions
- CursorGrid: canvas-based registration-mark grid with radial pulse waves on cursor move
- GridPulse: terminal-style data readout in Hero (x/y coords, frame counter, timestamp, resolution)
- ThemeSwitcher: fixed bottom-right, cycles two palettes, persists to localStorage
- Featured projects: reduced to 3 
