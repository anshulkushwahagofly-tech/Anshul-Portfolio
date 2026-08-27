# Anshul Kushwaha — Portfolio

React + Vite + Tailwind v4 + Three.js (react-three-fiber) + Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Output goes to `dist/` — deploy that folder to Vercel, Netlify, or any static host.

## Before you ship this, update:

1. **WhatsApp number** — `src/components/WhatsAppFloat.jsx`, replace `91XXXXXXXXXX` with your real number.
2. **Email** — `src/components/Contact.jsx`, replace `hello@example.com`.
3. **Formspree endpoint** — currently set to your existing form ID (`xzdolqzw`) in `Contact.jsx`. Confirm it's still active in your Formspree dashboard.
4. **Project links** — `src/components/Projects.jsx`, add live URLs for DuoChat, the 3D creator portfolio, AERIE, and ArcadeGhar where you have them (AChat link is already filled in).
5. **Pricing** — `src/components/Pricing.jsx` currently lists features without fixed prices (custom-quote model). Add numbers if you'd rather show fixed rates.
6. **Favicon** — add a `favicon.svg` to the `public/` folder (currently referenced in `index.html` but not included).

## Structure

```
src/
  components/
    Nav.jsx          - fixed nav with terminal-style ~/section labels
    Hero.jsx         - hero copy + CTA
    HeroScene.jsx    - 3D floating workspace panels (react-three-fiber)
    About.jsx
    Services.jsx
    Projects.jsx
    Pricing.jsx
    Contact.jsx      - Formspree-powered contact form
    WhatsAppFloat.jsx
    Footer.jsx
  index.css          - Tailwind v4 theme tokens (colors, fonts)
```
