# ELORIA Atelier

An editorial interior architecture website built with Next.js App Router, React, TypeScript, Tailwind CSS 4, and GSAP.

## Run locally

```bash
npm install
npm run dev
```

Visit the local URL printed by Next.js.

## Structure

- `app/page.tsx` only composes the independent visual sections.
- `components/` contains each major section, navigation, shared primitives, and the motion controller.
- `app/globals.css` holds global color tokens, the centered Tailwind `container` utility, responsive compositions, and CSS 3D geometry.
- `components/Motion.tsx` owns scroll animation setup and cleanup through GSAP context and matchMedia.
- `public/images/` contains locally optimized WebP images from the supplied design assets.
- `scripts/prepare-images.mjs` fetches the original-resolution sources and optimizes them with Sharp.

## Interaction and accessibility

The desktop project sequence uses ScrollTrigger pinning and horizontal movement. Tablet, phone, short desktop windows, and reduced-motion settings use native horizontal scrolling. Previous/next controls work in both modes.

The material exhibit uses CSS perspective and transformed architectural planes, with keyboard-accessible material buttons. Pointer tilt is limited to mouse input and disabled for reduced motion.

The navigation uses a native modal dialog for focus containment, Escape dismissal, and focus restoration. Content remains visible without animation or JavaScript.

Contact links open the visitor's email or telephone application. No submission service, database, or false delivery confirmation is used. Social links are intentionally omitted until the studio supplies its actual profile URLs.

## Validation

```bash
npm run lint
npm run build
npm run start -- --port 3100
```

With that server running, `node scripts/verify-site.mjs` checks five viewport sizes, navigation, material switching, project controls, anchor targets, image loading, browser errors, and reduced motion using an installed Chrome browser. Screenshots are saved under ignored `.artifacts/`.

Fonts are served through `next/font`. The initial build needs access to Google Fonts; imagery is served locally and does not depend on the original host at runtime.
