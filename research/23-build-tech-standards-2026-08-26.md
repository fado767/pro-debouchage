# 23. Build tech standards refresh (2026)

*Date 2026-08-26, overnight v3 session. Agent: Claude, model Opus 5. Condensed; supersedes parts of
research/13 where dated. Decisions baked into design/canvas-v3/build.js and template.js.*

## The ten decisions

1. Hero LCP = a TEXT node, not an image (v3: the H1; the photo strip sits below). LCP ≈ FCP ≈ TTFB+parse.
2. Inline the whole stylesheet in <head> (v3 does; CSP kept at 'unsafe-inline' style-src as in v2 for
   robustness with legacy inline attrs; a hash-based CSP is the stricter later option).
3. One or two font preloads max, `crossorigin` MANDATORY even same-origin (else double download);
   metric-matched fallback face (size-adjust + ascent/descent/line-gap overrides) makes CLS 0 with
   font-display: swap. `optional` sacrifices the brand font on 4G first visits.
4. Zero scroll event listeners; IntersectionObserver only; passive listeners; animate transform/opacity
   only; no backdrop-filter on fixed bars (iOS jank).
5. Sticky call bar: space reserved from first paint via body padding + env(safe-area-inset-bottom);
   needs viewport-fit=cover or insets are 0. `svh` for hero heights, never bare 100vh, avoid dvh
   (reflows when the URL bar collapses). 78-88svh leaves a scroll cue.
6. Lazy policy: LCP eager (never decoding=async on it), first viewport eager, below lazy+async;
   width/height on every img.
7. JSON-LD: `Plumber` is a valid Google LocalBusiness subtype (documented); `EmergencyService` array
   works. 24/7 = opens 00:00 closes 23:59 all seven days. **FAQPage rich results are DEAD as of
   May-June 2026** (deprecation notice 2026-05-08, docs removed): keep the HTML FAQ for conversion,
   the markup is harmless but expect nothing. **aggregateRating about yourself on your own site is a
   policy violation → manual action**; never ship it, never star imagery without real reviews.
8. Cloudflare Pages `_redirects` CANNOT branch on Accept-Language (documented unsupported). Root =
   chooser page (kept) or a static 302 to /fr/; x-default points at the root. `/fr` and `/fr/` are
   both served automatically.
9. Inline JSON-LD needs no CSP hash (non-JS MIME). `el.style.setProperty` from JS is not blocked by
   style-src.
10. tel: in E.164 (tel:+32480649649), wa.me without + or leading zero, ?text= via encodeURIComponent,
    `format-detection telephone=no` + explicit anchors, target=_blank rel=noopener on WhatsApp only.
    data-cta taxonomy + dataLayer shim now; the Google tag stays a deliberate single change (ADS_TAG_ID
    build flag, unchanged from v2). Call assets with Google forwarding numbers measure calls with zero
    site tag.

## Support table used (mid-2026)

Ship: sticky, safe-area env(), dvh/svh, clamp, scroll-snap, aspect-ratio, :has (enhancement),
container queries, text-wrap balance/pretty, details[name]. Guard: scroll-driven animations
(@supports (animation-timeline: view()) + prefers-reduced-motion, hidden state only inside the guard),
content-visibility (needs contain-intrinsic-size auto). Avoid as primary: CSS carousel pseudo-elements
(Chromium-only), view transitions (pointless on a one-pager).

## Definition of done (kept as the v3 checklist)

Lighthouse mobile ≥95, LCP ≤1.6s lab, CLS 0, zero third-party requests, zero cookies, JS-disabled page
still callable, contrast AA + non-text 3:1, 48px targets, reduced-motion verified, keyboard: slider
arrows/Home/End, carousel focusable, one h1, landmarks, lang per page, hreflang complete reciprocal
self-referencing + x-default, canonical per language, security headers live, E.164 everywhere identical.
