# Luxe Horizons Africa — React Redesign

A Vite + React rebuild of the premium homepage concept, split into proper
components instead of one long HTML file.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

Other scripts:

```bash
npm run build     # production build into /dist
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  main.jsx                 # React DOM entry point
  App.jsx                  # composes all sections, owns menu-open state
  data/
    content.js              # all site copy/data — edit this, not the components
  components/
    Reveal.jsx               # scroll-reveal wrapper (IntersectionObserver)
    Nav.jsx / Nav.css        # minimal top bar, scroll color-shift
    MenuOverlay.jsx / .css   # fullscreen nav menu
    Hero.jsx / Hero.css      # gradient hero + diagonal wipe slider
    AboutSection.jsx / .css  # "A journey, considered" — the #about anchor
    AdventureSection.jsx/.css# "Choose Your Journey" card carousel
    DestinationsSection.*    # destination tile grid
    QuoteBand.*              # testimonial band
    PartnersSection.*        # affiliations logo strip
    CtaBand.*                # closing call-to-action band
    Footer.*                 # footer + contact info
  styles/
    index.css                # design tokens, reset, shared utilities
```

## Editing content

Nearly everything text/data-related lives in `src/data/content.js`:
nav links, hero section labels, adventure cards, destinations, partner
logos, and contact details. Change data there rather than hunting through
JSX.

## About the hero's images

The hero background is intentionally built from **pure CSS gradients**
(`heroSections` / `heroBaseGradient` in `content.js`) plus an inline SVG
horizon, not photography. This was a deliberate fix: hotlinking images
from the client's existing WordPress media library (`luxehorizonsafrica.com`)
was failing to load in preview environments — likely hotlink protection on
their hosting. Once this app is deployed to its own domain, real photography
can be dropped in safely:

1. Add image files to `public/images/`.
2. Reference them as `/images/your-file.jpg` in `content.js` or directly in
   the relevant component.
3. Same-origin images never hit hotlink protection, since that only blocks
   *other* domains from embedding a site's media.

## Other sections still reference the client's WordPress images

`AdventureSection`, `DestinationsSection`, and `PartnersSection` currently
point at `https://luxehorizonsafrica.com/wp-content/uploads/...` URLs.
These may have the same loading risk described above. Before shipping,
download the real images, place them in `public/images/`, and update the
paths in `src/data/content.js`.

## Notes

- No CSS framework or component library — plain CSS per component, scoped
  by class-name convention (e.g. everything hero-related is prefixed
  `hero-`), so there are no naming collisions despite not using CSS Modules.
- Fonts (Fraunces, Manrope, Bebas Neue) are loaded from Google Fonts in
  `index.html`.
- Built and tested against React 18 + Vite 5.
