# Hero1 Design QA

## Evidence

- Source visual truth: `public/images/hero_intro-desktop.png`, `public/images/hero-outro-desktop.png`, `public/images/hero_intro-mobile.png`, and `public/images/hero-outro-mobile.png`.
- Desktop source pixels: intro 1672 × 941 and outro 1671 × 941, 72 dpi.
- Mobile source pixels: intro 941 × 1672 and outro 940 × 1672, 72 dpi.
- Browser-rendered implementation: `.artifacts/hero1-start-1440.png` at a 1440 × 1000 CSS viewport and `.artifacts/hero1-start-390.png` at a 390 × 844 CSS viewport, device scale factor 1.
- Full-view normalized comparisons: `.artifacts/hero1-qa-desktop.png` and `.artifacts/hero1-qa-mobile.png`. Each places the source artwork composite on the left and the browser render on the right at equal CSS pixel size.
- Motion evidence: `.artifacts/hero1-reveal-final-desktop.png`, `.artifacts/hero1-reveal-final-mobile.png`, `.artifacts/hero1-middle-1440.png`, and `.artifacts/hero1-middle-390.png`.
- State: page-entry strip reveal, settled Hero1 at scroll position 0, mid-scroll zoom transition, and post-Hero1 header reveal.

## Findings

- No actionable P0, P1, or P2 visual mismatches remain.
- Fonts and typography: the existing ELORIA wordmark, atelier label, scroll prompt, and counter retain the established serif/sans hierarchy and remain legible over both crops.
- Spacing and layout rhythm: the supplied imagery fills the viewport without gaps or horizontal overflow. The desktop and mobile arch remain centered and the overlay chrome stays clear of the focal opening.
- Colors and visual tokens: no new palette was introduced. The reveal field uses the same near-black brown already established by Hero1, and the supplied warm artwork remains unaltered.
- Image quality and asset fidelity: desktop and mobile use their dedicated source files through responsive art direction. Crops are sharp, proportional, and free of broken images or visible strip seams once assembled.
- Copy and content: the existing Hero1 copy and existing downstream hero are unchanged.
- Focused-region comparison was not needed because the requested change is a full-viewport image transition; the full-view comparisons show the focal crop, artwork alignment, and overlay text at readable scale.

## Comparison History

1. Initial motion capture showed the `expo.inOut` easing kept most strips outside the viewport for too long, making the opening feel closer to a blank loader state.
2. Changed the strip motion to `power3.out`, shortened the travel to 1.25 seconds, and retained the alternating top/bottom stagger.
3. Post-fix evidence in `.artifacts/hero1-reveal-final-desktop.png` and `.artifacts/hero1-reveal-final-mobile.png` shows recognizable image bars entering early and assembling into the complete artwork.

## Interaction and Browser Checks

- Tested at 1440 × 1000, 1024 × 768, 768 × 1024, 390 × 844, and 320 × 720.
- Verified header remains hidden during Hero1 and appears after the section completes.
- Verified scroll zoom, menu open/close and focus return, anchor navigation, material controls, project navigation, reduced-motion behavior, image loading, link targets, and absence of page overflow.
- Browser console and page errors: none.
- Lint and production build: passed.

## Implementation Checklist

- [x] Use dedicated mobile intro and outro artwork below 768px.
- [x] Assemble the intro artwork with ten alternating top/bottom image strips.
- [x] Remove the reveal layer after entry so it cannot interfere with scrolling.
- [x] Preserve the existing Hero1 scroll zoom and delayed header behavior.
- [x] Respect reduced-motion preferences by skipping the entry reveal and long scroll sequence.

## Follow-up Polish

- No blocking polish remains. Strip count, stagger, and duration can be tuned later as a purely stylistic preference.

final result: passed
