# Changelog

All notable changes to this project will be documented in this file.

> ***v2.6.45 — Tost motion issue Fix***

### Added
- Mobile swipe-to-dismiss support (position-aware)

### Improved
- Toast enter/exit animations
- Stack expand/collapse motion
- Reduced-motion accessibility

### Optimized
- Animation performance and GPU usage
- Mobile rendering and blur effects


> ***v2.5.44 — Tost order issue Fix***

### Changed

- Updated toast ordering so that newly created toasts appear at the top of the list.
- Adjusted toast state logic to keep a maximum of 10 toasts while correctly removing the oldest ones.

> ***v2.5.43 — Animation & Docusaurus Production Fix***

### Improvements
- Fixed toast enter animations not playing in production builds (Docusaurus / SSR).
- Animation lifecycle is now state-driven (`enter` → `exit`) instead of timing hacks.
- CSS animations are now reliable across dev and production.
- Improve transition effects.

### Internal
- Removed `requestAnimationFrame` animation workaround.
- Exit logic is now idempotent, preventing multiple remove calls.
- Pointer events are disabled during exit animation.

### Removed
- Removed animation side-effects previously required to force reflow.

### Accessibility
- Respects `prefers-reduced-motion`.
