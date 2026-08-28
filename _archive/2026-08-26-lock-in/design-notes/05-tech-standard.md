# Tech standard and definition of done for the v2 page (2026-08-23)

*The output contract for whoever builds the page (Claude Design, then Claude Code). Distilled from `research/13` (read it for the reasoning and the full snippets). Every line in section C is a yes, or the page is not done.*

## A. The eleven decisions

1. Fonts: self-hosted, two WOFF2 files (Archivo 400 and 800, latin + latin-ext), `font-display: swap`, a `size-adjust` local fallback. No Google Fonts request. Reason: no IP sent to a US host before consent, no third-party origin in the CSP, 300 to 600 ms saved on cold 4G.
2. CSP on day one: `default-src 'self'` (exact line below). The Google tag line is kept commented in `_headers` for the day the tag lands.
3. `script-src 'self' 'unsafe-inline'`: no nonce (meaningless on a static host), no hashes (break on every copy edit).
4. Footer year: `<span id="y">2026</span>` plus one inline line before `</body>`: `<script>document.getElementById('y').textContent=new Date().getFullYear();</script>`. The build year stays as the visible fallback; update it at every rebuild.
5. Images: AVIF, then WebP, then JPEG, in one `<picture>`, `srcset` with the exported widths, `sizes` per slot, `width` and `height` on every `<img>`, `loading="lazy"` and `decoding="async"` below the fold.
6. Hero: preloaded with two `<link rel="preload" as="image">` lines (avif and webp, each with `type`), `fetchpriority="high"`, never lazy. It is the LCP element, budget it first: under 120 KB AVIF at 1540 wide.
7. JS before consent: the year line only. Plus, optionally, the delegated click-listener stub (section B.4), which sends nothing.
8. Keep `FAQPage` JSON-LD (Google dropped the rich result in May 2026; keep it for the assistants).
9. Sticky bar 64 px plus `env(safe-area-inset-bottom)`, `body` padding-bottom so the footer is never covered; hidden at 1000 px and above.
10. Tag mount: one HTML comment `<!-- consent + tags mount here -->` just before `</body>` and the commented CSP line. Nothing else now.
11. No build step. A small node script only when the eight ad variants land.

## B. Snippets that must be exact

### B.1 `_headers` (Cloudflare Pages)
```
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self'; font-src 'self'; connect-src 'self'; frame-src 'none'; media-src 'self'; manifest-src 'self'; object-src 'none'; base-uri 'self'; form-action 'none'; frame-ancestors 'none'; upgrade-insecure-requests

# Preview hosts only: never index *.pages.dev.
https://drain-prodebouchage.pages.dev/*
  X-Robots-Tag: noindex
https://:version.drain-prodebouchage.pages.dev/*
  X-Robots-Tag: noindex
https://drain-prodebouchage-v2.pages.dev/*
  X-Robots-Tag: noindex
https://:version.drain-prodebouchage-v2.pages.dev/*
  X-Robots-Tag: noindex

# One rule per file type. Overlapping rules append, they never override.
/assets/fonts/*
  Cache-Control: public, max-age=31536000, immutable
/assets/css/style.css
  Cache-Control: public, max-age=86400
/assets/img/*
  Cache-Control: public, max-age=86400
/assets/video/*
  Cache-Control: public, max-age=86400
```
The CSP for the day the Google tag lands is in `research/13` section 2.3 (note `*.doubleclick.net`, not `*.g.doubleclick.net`). `wa.me`, `tel:` and `mailto:` need no CSP entry: links are navigation, not fetches.

### B.2 Phone and WhatsApp
- Display `0480 649 649`, href `tel:+32480649649`, schema `+32 480 64 96 49`.
- FR WhatsApp: `https://wa.me/32480649649?text=Bonjour%2C%20j%27ai%20un%20probl%C3%A8me%20de%20canalisation%20bouch%C3%A9e.%20Voici%20une%20photo%20et%20ma%20commune%20%3A%20`
- NL WhatsApp: `https://wa.me/32480649649?text=Hallo%2C%20ik%20heb%20een%20verstopping.%20Hier%20is%20een%20foto%20en%20mijn%20gemeente%3A%20`
- Both `rel="noopener"`, both end in a trailing space so the cursor lands after the colon.

### B.3 data-cta attributes (one unique value per link)
`hero-call`, `hero-whatsapp`, `header-call`, `sticky-call`, `sticky-whatsapp`, `price-wc-call`, `price-evier-call`, `price-egout-call`, `price-other-call`, `service-1-call` to `service-6-call`, `scam-call`, `zone-call`, `final-call`, `final-whatsapp`, `footer-call`.

### B.4 The delegated listener stub (optional now, needed later)
```html
<script>
document.addEventListener('click',function(e){var a=e.target.closest('a[data-cta]');if(!a)return;/* later: gtag('event', a.dataset.cta.indexOf('whatsapp')>-1?'whatsapp_click':'call_click', {cta:a.dataset.cta}) */});
</script>
```

### B.5 Head, per page
`<html lang="fr-BE">` or `nl-BE`; title and description from the copy files; canonical; hreflang `fr-BE`, `nl-BE`, `x-default` (pointing at `/fr/`); `theme-color #102A4A`; OG type, locale, url, site_name, title, description, `og:image` `https://prodebouchage24.be/assets/img/og-banner.jpg` with `og:image:width 1200`, `og:image:height 630`, `og:image:alt`; twitter card summary_large_image; icons: `favicon.svg`, `apple-touch-icon.png` (180), `site.webmanifest` with the 512 and the maskable 512; the two hero preloads; the stylesheet; the fonts are referenced only from the CSS.

### B.6 Files
`/index.html` (chooser, noindex), `/fr/index.html`, `/nl/index.html`, `/fr/confidentialite.html`, `/nl/privacy.html`, `/404.html` (bilingual), `/robots.txt`, `/sitemap.xml` (fr, nl, the two privacy pages), `/site.webmanifest`, `/favicon.svg`, `/favicon.ico` (optional), `/apple-touch-icon.png`, `/assets/css/style.css`, `/assets/fonts/*.woff2`, `/assets/img/*`, `/assets/video/*` (optional), `/_headers`.

## C. Definition of done (phone and desktop, on the preview URL)

1. Every `tel:` link opens the dialer with +32 480 64 96 49 and no other number.
2. The number appears as selectable text in the hero, the final block and the footer.
3. Tapping the sticky call button dials on the first tap, no zoom, no double tap.
4. The WhatsApp link opens WhatsApp with the FR text on `/fr/` and the NL text on `/nl/`, cursor after the colon.
5. Every `tel:` and `wa.me` link carries a unique `data-cta`.
6. The sticky bar is visible at the top, mid page and at the very bottom; at the bottom it covers no footer text.
7. No horizontal scroll at 320 px, checked by dragging.
8. Nothing overlaps at 200 percent zoom. CLS reads 0.000. The layout holds at 320, 390, 768, 1024 and 1440 px.
9. `/fr/` and `/nl/` both answer 200; the switch lands on the same content; `<html lang>` is `fr-BE` / `nl-BE`; the hreflang trio is present and self-referencing on both.
10. No French word on the NL page and no Dutch word on the FR page, outside the switch and the Dutch postal address.
11. Fonts load from our own domain (no `fonts.g*` request); text is never invisible while fonts load.
12. The hero is crisp on a 3x screen; every image has `width`, `height` and a real `alt`; no text baked into any image.
13. Favicon, apple touch icon and maskable icon render; the OG image renders in a WhatsApp preview of the URL.
14. Lighthouse mobile 95 or more on all four; LCP under 2.0 s on simulated 4G; first load under 250 KB; CSS under 25 KB.
15. Zero console errors and warnings; in incognito, before any click, zero requests to any host but ours; zero CSP violations on all pages.
16. `curl -sI` returns HSTS, nosniff, X-Frame-Options, Referrer-Policy, Permissions-Policy and the CSP; `*.pages.dev` answers `X-Robots-Tag: noindex`.
17. `/nope-abc-123` returns a real 404 and the bilingual 404 page.
18. The footer shows legal name, seat address (in Dutch on both pages), e-mail, enterprise number; every consumer price says TVA comprise / btw inbegrepen and the FR and NL numbers match; the surcharge, déplacement and VAT lines are the ones Roro confirmed.
19. The privacy pages exist in both languages and are linked from every page.
20. The footer year shows the current year with JS on and the build year with JS off.
21. No em dash anywhere, FR or NL. No lorem ipsum, no `[RORO CONFIRMS]`, no `TODO`, no "Photo à venir".
22. No review, rating, counter or years-in-business claim that Roro has not confirmed; placeholder reviews are marked `data-placeholder="true"` in the design file and are REMOVED before Roro or the public sees the page.
23. Never "toute la Belgique", never Brussels city as served. Every claim points at a line in `playbook/business-brief.md`.
24. Tab reaches the skip link first and it becomes visible; every focused element shows a visible ring on light and on dark; every FAQ item opens and closes with Enter and Space.
25. Every string matches the copy files character for character (run a diff).

## D. Cleaning a Claude Design export into this standard (if the build comes from claude.ai/design)
Strip the framework (React or Tailwind to plain HTML and one stylesheet); kill every CDN (Tailwind, unpkg, Google Fonts, icon sets) and inline the SVGs and the two fonts; translate utility classes into tokens; delete inline `style=""`; remove every `onclick` and every accordion or scroll-reveal script (`<details>` and CSS replace them); fix the heading order (one H1, H2 per section); add `width`, `height`, `alt`, `loading`, `fetchpriority`, `lang`, `hreflang`, the skip link, `aria-labelledby`; replace every placeholder picture, name, rating or count; recheck contrast; rebuild responsive on our breakpoints (700, 1000); then run section C from the top.
