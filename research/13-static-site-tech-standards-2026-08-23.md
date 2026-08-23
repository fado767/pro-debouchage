# research/13, the technical standard the final page must meet

*2026-08-23, Opus, research agent. Read-only survey of `site/` v1, of `../taxi-business/taxi-site-template/` (mechanics only, never its copy or design) and of current 2026 sources. A CHECKLIST for the builder, not a decision: decisions move to `playbook/landing-page.md` or `DECISIONS.md` when Fady says yes. Lines that go against the current v1 build say so.*

## 0. The eleven decisions in one screen

| # | Decision | Recommendation | Where |
|---|---|---|---|
| 1 | Fonts | **Self-host two weights, drop Google Fonts** (changes v1) | 3.3 |
| 2 | CSP today | `default-src 'self'`, no Google hosts yet, tag line kept commented | 2.2 |
| 3 | script-src | `'self' 'unsafe-inline'`, no nonce, no hashes | 2.3 |
| 4 | Year | Inline one-liner, build year as the visible fallback | 4 |
| 5 | Images | AVIF, then WebP, then JPEG, in one `<picture>` | 3.2 |
| 6 | Hero | Two preload lines (avif + webp), `fetchpriority="high"`, never lazy | 3.2 |
| 7 | JS before consent | Exactly one inline line (the year). Nothing else. | 3.4 |
| 8 | FAQ markup | Keep `FAQPage`, expect no rich result | 7.4 |
| 9 | Sticky bar | 64 px, `env(safe-area-inset-bottom)`, body padding | 6.3 |
| 10 | Tag mount | One HTML comment plus the commented CSP line, nothing else | 8.3 |
| 11 | Build step | None. A small node script only when the 8 ad variants land | 9.4 |

## 1. File and folder layout

```
site/
  index.html            FR/NL chooser, noindex
  404.html              bilingual (FR block, then NL block), noindex, self-contained
  robots.txt   sitemap.xml   site.webmanifest   _headers
  _redirects            only if the .com or a www variant must be folded in
  favicon.ico           32x32, legacy only
  favicon.svg           the real one, scales to any size
  apple-touch-icon.png  180x180, opaque (iOS ignores transparency)
  icon-192.png   icon-512.png   icon-512-maskable.png (logo inside the 80 percent safe circle)
  og-banner.jpg         1200x630, under 300 KB
  fr/  index.html, confidentialite.html, later the 4 ad variants
  nl/  index.html, privacy.html, later the 4 ad variants
  assets/css/style.css  one file, the only stylesheet
  assets/fonts/*.woff2  two files, latin subset
  assets/img/           hero, logo, equipment, job photos
```

Missing in v1 today: `404.html`, `site.webmanifest`, `favicon.svg`, the maskable icon, `og-banner.jpg` (OG currently points at a WebP, which several scrapers refuse) and `_redirects`.

One H1 per page. `/fr/` and `/nl/` are real files, never a JS switch. The root chooser stays `noindex, follow` (v1 does this, keep it). No language auto-detection anywhere: a Brussels visitor is as likely to want FR as NL, and a wrong guess costs the call.

**404.** Cloudflare Pages serves `404.html` with a real 404 status only if the file exists at the root; without it Pages answers 200 with the homepage, which hides broken ad links and mistyped legal-page URLs. Keep it self-contained (inline CSS, no font file, no consent script), with a link to `/fr/`, a link to `/nl/` and the phone number as a `tel:` link. `noindex, follow`, and never in the sitemap.

**Trailing slashes.** Pages serves `/fr/index.html` at both `/fr/` and `/fr`. Pick `/fr/` everywhere (canonical, hreflang, sitemap, internal links) and never mix the two.

## 2. Security: the `_headers` file

### 2.1 Syntax rules that actually bite (Cloudflare Pages, checked 2026-08-23)

- A URL pattern on its own line, then two spaces and `Name: Value` per header. One `*` splat per pattern, referenced as `:splat`; named placeholders as `:name`. Absolute URLs allowed if they start with `https`, no port. Remove an inherited header with `! Header-Name`.
- Limits: 100 rules, 2000 characters per line, so the CSP must be one unwrapped line.
- **Overlapping rules APPEND, they do not override.** Two rules matching one path give one header with both values joined by a comma. The taxi build measured this on a font: `/assets/*` plus `/assets/fonts/*` produced `public, max-age=86400, public, max-age=31536000, immutable`, and a cache takes the first (RFC 9111 5.2), so the specific rule was dead. **Never write overlapping Cache-Control rules:** one rule per file type, no broad `/assets/*` line.
- `_redirects`, if ever needed: `[source] [destination] [code]`, default 302, codes 301/302/303/307/308, 2000 static plus 100 dynamic, 1000 characters per line, static lines before dynamic, redirects win over static assets. Country and trailing-slash redirects are not supported.

### 2.2 The file to ship on day one

```
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self'; font-src 'self'; connect-src 'self'; frame-src 'none'; media-src 'self'; manifest-src 'self'; object-src 'none'; base-uri 'self'; form-action 'none'; frame-ancestors 'none'; upgrade-insecure-requests

# Preview host only: never index *.pages.dev. This block already works, keep it.
https://drain-prodebouchage.pages.dev/*
  X-Robots-Tag: noindex
https://:version.drain-prodebouchage.pages.dev/*
  X-Robots-Tag: noindex

# One rule per file type. Overlapping rules append, they never override.
/assets/fonts/*
  Cache-Control: public, max-age=31536000, immutable
/assets/css/style.css
  Cache-Control: public, max-age=86400
/assets/img/*
  Cache-Control: public, max-age=86400
```

The HTML pages and the root files (favicons, manifest, robots, sitemap, og-banner) deliberately get **no** Cache-Control rule, so they keep Cloudflare's `max-age=0, must-revalidate` and a copy fix reaches a returning visitor at once. Nothing in `assets/img/` is content addressed (a rebuild replaces `van-1200.webp` under the same name), so one day is the ceiling there; the fonts never change under their own names, so they get a year plus `immutable`.

### 2.3 The CSP for the day the Google tag lands (paste it, do not invent it)

Keep this commented at the bottom of `_headers`, so the swap is one uncomment and one delete:

```
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://*.googletagmanager.com https://*.googleadservices.com https://googleads.g.doubleclick.net https://pagead2.googlesyndication.com; style-src 'self' 'unsafe-inline'; img-src 'self' https://*.googletagmanager.com https://*.google-analytics.com https://*.googleadservices.com https://*.doubleclick.net https://*.google.com https://*.google.be https://*.google.nl https://*.google.fr; font-src 'self'; connect-src 'self' https://*.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://*.googleadservices.com https://*.doubleclick.net https://pagead2.googlesyndication.com https://*.google.com https://*.google.be https://*.google.nl https://*.google.fr; frame-src https://td.doubleclick.net https://www.googletagmanager.com; media-src 'self'; manifest-src 'self'; object-src 'none'; base-uri 'self'; form-action 'none'; frame-ancestors 'none'; upgrade-insecure-requests
```

Three load-bearing details:

1. **`*.doubleclick.net`, not `*.g.doubleclick.net`.** The taxi build shipped the narrow form and it silently blocked `https://ad.doubleclick.net/ccm/s/collect`, Google's consent-mode collector: `ad.doubleclick.net` is a sibling of `g.doubleclick.net`, and CSP wildcards only walk down. The page renders perfectly while measurement degrades. Google's own CSP guide lists `ad.doubleclick.net` under `connect-src`, which confirms it.
2. **Google's guide names `script-src-elem`.** `script-src` covers it, and one directive is one thing to keep right. Google prefers a nonce; a nonce is meaningless on a static host (the same value in every response), so `'unsafe-inline'` is the accepted trade-off, and it is needed anyway by the inline Consent Mode stub, the inline JSON-LD and the year one-liner.
3. **`wa.me` needs nothing.** A `https://wa.me/...` link is navigation, not a fetched resource, and CSP does not restrict navigation except through `form-action` and `frame-src`. Same for `tel:` and `mailto:`. Never add wa.me to a CSP directive: it does nothing, and it makes the policy look copied.

`form-action 'none'` is right while the page has no form; the moment a form appears it becomes `form-action 'self'`.

### 2.4 What NOT to do

No `onclick=` or any inline event handler (delegated listeners only, 6.5). No `eval`, `new Function` or `setTimeout('string')`. No remote script, stylesheet, font, image or iframe before consent, Google Fonts and map, review and chat widgets included. No `target="_blank"` without `rel="noopener"`. No third-party origin added to the CSP "just in case": an unused origin is a hole with no benefit. No permanent `Content-Security-Policy-Report-Only` beside the enforced line, because it is a second policy to keep in sync and nobody watches the console.

### 2.5 Cloudflare zone settings, once, at go-live (Fady's clicks)

SSL/TLS, Edge Certificates: **Always Use HTTPS = ON**, **Minimum TLS Version = 1.2**. Leave the dashboard HSTS panel alone, HSTS comes from `_headers`. Trap: `http://domain` redirecting to https does **not** prove Always Use HTTPS is on, because a Pages custom domain redirects anyway. Read the toggle itself.

## 3. Performance budget

### 3.1 The numbers

| Metric | Google "good" (2026, 75th percentile) | Our target |
|---|---|---|
| LCP | under 2.5 s | **under 2.0 s on 4G**, under 1.2 s on cable |
| INP | under 200 ms | under 100 ms (there is almost no JS) |
| CLS | under 0.1 | **0.000** |
| First load `/fr/` | no official figure | **under 250 KB** total |

INP replaced FID in March 2024, so any guide still naming FID is stale. CLS 0 is arithmetic, not ambition: every image carries `width` and `height`, the font has a metric-matched fallback, and nothing is injected above the fold.

### 3.2 Images

- Three formats in one `<picture>`: AVIF first, WebP second, JPEG in the `<img>`. AVIF saves roughly 30 percent over WebP at equal quality, WebP covers older browsers, JPEG covers the rest.
- Every `<img>` carries `width`, `height` (intrinsic pixels, CSS resizes), `alt` and `decoding="async"`. Below the fold: `loading="lazy"`. Hero: `fetchpriority="high"` and **no** `loading="lazy"`, because lazy on the LCP element is the most common LCP mistake there is.
- Preload the hero with two lines. A browser ignores a preload whose `type` it cannot decode, so declaring both is safe and only one is fetched:

```html
<link rel="preload" as="image" type="image/avif" fetchpriority="high"
      href="/assets/img/van-1200.avif"
      imagesrcset="/assets/img/van-700.avif 700w, /assets/img/van-1200.avif 1200w"
      imagesizes="(min-width: 1000px) 46vw, 100vw">
<link rel="preload" as="image" type="image/webp" fetchpriority="high"
      href="/assets/img/van-1200.webp"
      imagesrcset="/assets/img/van-700.webp 700w, /assets/img/van-1200.webp 1200w"
      imagesizes="(min-width: 1000px) 46vw, 100vw">
```

- `srcset` widths: 700 and 1200 for the hero, 480 and 960 for cards. A 3x phone at 390 CSS px asks for about 1170 device pixels, so 1200 is the right top width and nothing here needs 2000.
- The logo is the exception: SVG if the source allows, otherwise WebP plus PNG. v1's `logo-pro-debouchage-360.png` is 58 KB, about 50 KB too much for a logo.
- Real photos only, the real van, the real equipment, real jobs (`landing-page.md` 3b). **No text baked into an image:** it cannot be translated, read aloud or selected, and it blurs on a 3x screen.

### 3.3 Fonts: self-host. This changes v1.

v1 loads Archivo 800 and Inter 400/600/700 from `fonts.googleapis.com`. Replace with two self-hosted woff2 files. Four reasons, heaviest first. **Legal:** a Google Fonts request sends the visitor's IP to a US host before any consent, for something that is not strictly necessary, which is the shape the APD checklist and German case law object to, and a page that ships a cookie banner and a font call to Google in the same breath argues against itself. **CSP:** self-hosting keeps `default-src 'self'` and `font-src 'self'`, where Google Fonts forces `style-src https://fonts.googleapis.com` and `font-src https://fonts.gstatic.com` into the policy on day one. **Speed:** the Google stylesheet is render blocking and costs two extra DNS lookups plus two TLS handshakes on a cold 4G connection, 300 to 600 ms before the first glyph, on the exact device our customer is holding. **Reliability:** one less host that has to be up while a man watches his cellar fill.

```css
@font-face {
  font-family: "Archivo";
  src: url("/assets/fonts/archivo-800.woff2") format("woff2");
  font-weight: 800; font-style: normal; font-display: swap;
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+2000-206F, U+20AC, U+2122;
}
/* Metric-matched fallback so the swap moves nothing. Tune the numbers with the
   Chrome DevTools font overlay against the real face. */
@font-face {
  font-family: "Archivo Fallback";
  src: local("Arial Narrow"), local("Helvetica Neue Condensed"), local("Arial");
  size-adjust: 94%; ascent-override: 92%; descent-override: 24%; line-gap-override: 0%;
}
```

Preload only the face used above the fold (the display face for the H1). `font-display: swap` plus the metric-matched fallback is what makes CLS 0 instead of 0.05. Two weights maximum: v1 asks for four, so drop Inter 600 and render semibold at 700.

### 3.4 CSS and JS

- **One** stylesheet, `/assets/css/style.css`, **under 25 KB uncompressed**. v1 is 15,014 bytes over 335 lines, comfortably inside. Do not add a second file and do not inline it into the HTML, which would kill the one-day cache and grow every page.
- Move v1's inline `style=""` attributes (`style="margin:0"`, `style="border-radius:20px"`) into classes. Not a CSP problem, a maintenance one.
- **Zero JavaScript before consent, except the year one-liner** (section 4). No framework, no jQuery, no polyfill, no smooth-scroll library, no scroll reveal, no lightbox, no slider, no counter. The FAQ is `<details>`, the language switch is two links, the sticky bar is `position: fixed`: none of the three needs a line of JS.

## 4. The auto-updating copyright year

A build-time replace needs a build step we do not have, and a Pages Function needs a runtime for one integer, which is absurd. **Use the inline one-liner with the build year printed as the fallback.** In the footer:

```html
<p class="credit">&copy; <span id="y">2026</span> PRO DEBOUCHAGE SRL.</p>
```

and as the last element before `</body>`:

```html
<script>document.getElementById('y').textContent=new Date().getFullYear();</script>
```

The visible `2026` is real HTML, so a visitor with JS off, a crawler, a screen reader and a printed copy all see a correct year and the script only refreshes it. Nothing shifts (the span already holds four digits, so CLS stays 0), it runs after the element exists so no `DOMContentLoaded` wrapper is needed, and it is one statement of 63 bytes. The fallback year is a build fact: at every rebuild, set it to the build year (line 38 of the definition of done, so nobody ships 2026 in 2028). NL page identical, with the Dutch sentence around it.

## 5. Accessibility

- **Contrast 4.5:1** for body text, 3:1 for large text (24 px, or 18.66 px bold) and for the border of any control. Check white on `--cta` (#D63A17), `--muted` grey on `--paper`, and the sticky bar against whatever scrolls under it.
- **Focus:** `:focus-visible { outline: 3px solid; outline-offset: 2px; }`, never `outline: none` without a replacement. v1 has this, but check the ring on the dark `s-ink` sections, where the current teal on navy is weak.
- **Touch targets** 48x48 px minimum, **64 px for any call CTA**, 8 px of clear space between adjacent targets. v1's `FR | NL` switch is bare small text: pad each link to 48 px.
- **Skip link** first in the body and visible on focus: `<a class="skip" href="#contenu">Aller au contenu</a>`. v1 uses `class="visually-hidden"`, which stays hidden even when focused; add a `.skip:focus` rule that brings it on screen.
- **Heading order:** one `<h1>`, `<h2>` per section, `<h3>` inside, never skipping a level and never picking a level for its size. v1's footer `<h2>Mentions légales</h2>` is correct.
- **`lang`:** `fr-BE` on FR pages, `nl-BE` on NL pages, `lang` plus `hreflang` on every anchor pointing at the other language (v1 does this), and `<span lang="nl">` around a Dutch word inside French copy.
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` kills animation, transition and `scroll-behavior: smooth`. v1 has it.
- **FAQ:** plain `<details><summary>`. Do not force one open, do not add `open` to the first, do not script an accordion. A `<summary>` is a button to a screen reader for free; give it `cursor: pointer` and a visible marker.
- **The sticky bar** is `<div class="callbar" role="region" aria-label="Appeler Pro Débouchage">` with two real links inside. Not a `<nav>`, no `aria-live`, no `role="banner"`.
- **Alt text** describes what matters to this visitor ("La camionnette Pro Débouchage, nom et numéro 0480 649 649 sur le flanc"), decorative images get `alt=""`, and never "image", "photo de" or a file name. The alt is written in the page's own language. An icon that carries meaning needs a text label, not a `title`.
- Zoom to 200 percent must not break the layout or hide the phone number.

## 6. Call-first mechanics

### 6.1 The phone number

Link: `href="tel:+32480649649"`, always E.164, always the plus, never a space, dot or slash, because a roaming phone and a desktop dialer both need the country code. Visible text: `0480 649 649`, the way a Belgian reads it, never `+32480649649`. The number appears as selectable text at least twice (hero or header, and the final call block), with `font-variant-numeric: tabular-nums` on it (v1's `.tnum`, keep it). Read-aloud contexts spell it digit by digit: zero four eight zero, six four nine, six four nine.

### 6.2 WhatsApp

Format is `https://wa.me/<number>?text=<url-encoded>`, the number in international form with **no plus, no leading zero, no space, no dash**: `32480649649`. The text is pre-filled only, the customer still presses send. `%20` is a space, `%0A` a line break, `%27` an apostrophe, `%C3%A9` an é.

```html
<!-- FR: Bonjour, j'ai un problème de canalisation bouchée. Voici une photo et ma commune : -->
<a class="btn btn-wa" rel="noopener" data-cta="hero-whatsapp"
   href="https://wa.me/32480649649?text=Bonjour%2C%20j%27ai%20un%20probl%C3%A8me%20de%20canalisation%20bouch%C3%A9e.%20Voici%20une%20photo%20et%20ma%20commune%20%3A%20">
   Envoyer une photo par WhatsApp</a>

<!-- NL: Hallo, ik heb een verstopping. Hier is een foto en mijn gemeente: -->
<a class="btn btn-wa" rel="noopener" data-cta="hero-whatsapp"
   href="https://wa.me/32480649649?text=Hallo%2C%20ik%20heb%20een%20verstopping.%20Hier%20is%20een%20foto%20en%20mijn%20gemeente%3A%20">
   Stuur een foto via WhatsApp</a>
```

The trailing space is deliberate: the cursor lands after the colon and the customer types the commune. v1's links carry no `?text=` at all, so today the customer stares at an empty box. `target="_blank"` is not needed, since on mobile the OS hands the link to the app anyway and an abandoned tab is litter; if a desktop new tab is wanted, `rel="noopener"` is mandatory.

### 6.3 The sticky bar and the desktop CTA

Mobile only, up to 999 px; above 1000 px it hides and the header CTA takes over (v1 does exactly this, keep it).

```css
.callbar { position: fixed; inset: auto 0 0 0; z-index: 200; display: flex;
           padding-bottom: env(safe-area-inset-bottom); }
body { padding-bottom: calc(var(--bar-h) + env(safe-area-inset-bottom) + 16px); }
@media (min-width: 1000px) { body { padding-bottom: 0; } .callbar { display: none; } }
@media print { .callbar { display: none; } }
```

That `body` padding is what stops the bar covering the last line of the footer, which on this page is the legal block, which is a legal requirement rather than a nicety: test at the very bottom of the scroll on a 320 px viewport. Split the bar 75/25, call three quarters and WhatsApp one quarter, because the call is the conversion. It never animates in or out, never hides on scroll down and never carries a close button. On desktop the header is sticky above 1000 px with the call button always visible in it, minimum 48 px tall, the number written out, and the logo linking to that language's root.

### 6.4 Instrumenting clicks later, without a tag today

Put the attribute in the HTML **now**, so adding the tag later is a script drop and not a redesign. Naming is `section-action`, lowercase, hyphens, unique per link, on every `tel:` and every `wa.me`:

```html
<a href="tel:+32480649649" data-cta="hero-call">Appeler maintenant 0480 649 649</a>
<a href="tel:+32480649649" data-cta="sticky-call">Appeler 0480 649 649</a>
<a href="tel:+32480649649" data-cta="price-wc-call">Appeler</a>
<a href="https://wa.me/32480649649?text=..." data-cta="hero-whatsapp">...</a>
```

The listener a later session adds, in one place, inside the consent-gated file (do not add it today):

```js
document.addEventListener('click', function (e) {
  var a = e.target.closest('a[data-cta]');
  if (!a) return;
  var kind = a.getAttribute('href').indexOf('tel:') === 0 ? 'call_click' : 'whatsapp_click';
  gtag('event', kind, { cta: a.dataset.cta });
}, { passive: true });
```

One delegated listener, no per-link handler, no `onclick`. It survives any copy change because it keys on the attribute, and it never calls `preventDefault`, so the call still happens when the tag is broken.

## 7. SEO basics

We do not chase rankings, Ads brings the traffic. These are the items that cost nothing and hurt when wrong.

### 7.1 Head, per page

`<title>` under 60 characters, service and place first, brand last. `<meta name="description">` 140 to 160 characters with the phone number in it. `<link rel="canonical">` absolute, self referencing, with the trailing slash. `index, follow` on the FR and NL pages, `noindex, follow` on the chooser and the 404. One `<h1>` per page, carrying the words of the ad group that sent the visitor. The hreflang trio on **every** page, each pointing at that page's own translation, self included, and the privacy pages pointing at each other rather than at the home pages (v1's sitemap gets this right):

```html
<link rel="alternate" hreflang="fr-BE" href="https://prodebouchage24.be/fr/">
<link rel="alternate" hreflang="nl-BE" href="https://prodebouchage24.be/nl/">
<link rel="alternate" hreflang="x-default" href="https://prodebouchage24.be/fr/">
```

### 7.2 Open Graph and Twitter

```html
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_BE">
<meta property="og:url" content="https://prodebouchage24.be/fr/">
<meta property="og:site_name" content="Pro Débouchage">
<meta property="og:title" content="..."><meta property="og:description" content="...">
<meta property="og:image" content="https://prodebouchage24.be/og-banner.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="La camionnette Pro Débouchage">
<meta name="twitter:card" content="summary_large_image">
```

1200x630 (1.91:1), JPEG or PNG, **under 300 KB** (WhatsApp drops big previews), absolute URL, no transparency. v1 points `og:image` at a WebP with no width, height or alt, so several scrapers, WhatsApp included, will show nothing: ship a real `og-banner.jpg`.

### 7.3 JSON-LD, `Plumber`

Keep v1's `@graph` shape, it is correct: `Plumber` with `@id`, `name`, `legalName`, `url`, `telephone` in E.164, `email`, `image`, `identifier` (the enterprise number), `address` as `PostalAddress`, `openingHoursSpecification` covering all seven days, `areaServed` as a list of `City`. Worth adding: `priceRange` (for example `"€€"`), `vatID`, `sameAs` (the Business Profile URL once it exists), `inLanguage`, and a `hasOfferCatalog` listing the six services. **No `aggregateRating` and no `review`, ever, until real reviews exist**, and then only if they are genuinely on the page (rule 1, never fake anything). The `areaServed` list must match the towns the page names and must not include Brussels city.

### 7.4 FAQPage, robots and sitemap

Keep the FAQ markup, expect nothing from it: Google dropped the FAQ rich result on 2026-05-07 and is removing the report and testing support during 2026. `FAQPage` remains a valid schema.org type, unused structured data does no harm, and it is still what an AI answer engine parses, so mirror the visible questions word for word and spend no more time on it. v1's `robots.txt` and `sitemap.xml` are correct: keep `Sitemap:` absolute, put the 404 in neither, add each ad variant with its own hreflang trio when it ships, and leave the pages.dev noindex to `_headers` (a `Disallow` would block the crawl and leave the URL indexable, the opposite of what we want).

## 8. Consent and tags

### 8.1 The taxi pattern, mechanics only

Read for shape, never for copy or design: `../taxi-business/taxi-site-template/assets/consent.js`.

- **Defaults denied, inline in `<head>`, before anything else:** `dataLayer`, a `gtag()` shim, then `gtag('consent','default',{ad_storage:'denied', ad_user_data:'denied', ad_personalization:'denied', analytics_storage:'denied', wait_for_update:500})`.
- **Storage:** `localStorage`, one key (`cc_consent` there), a JSON record holding the two booleans, a version string and a timestamp, versioned so a legal-text change can re-ask, expiring at **6 months** (182 days), after which the record is deleted and the banner returns. No cookie is set for consent itself, which is why the page can honestly say it sets none until consent.
- **On accept:** `gtag('consent','update',{...granted...})` first, **then** inject `https://www.googletagmanager.com/gtag/js`. Order matters, the update must be in the dataLayer before the library reads it.
- **While the Ads ID is empty, nothing from Google is ever requested**, but accept still records the choice, so the tag switches on the day an ID exists without asking anyone twice.
- **The banner is non-blocking:** a floating card, the page behind it scrolls and stays clickable, only a real click closes it. No overlay, no scroll lock, no cookie wall (the APD forbids the wall, and here a wall between a panicking customer and the phone number would be commercial suicide).
- **Accept and Refuse are equal:** same size, weight and colour family, side by side, both visible without scrolling the card. A "Preferences" link may be quieter. No pre-ticked boxes. Scrolling is never consent.
- **Withdrawal** is a permanent footer link on every page that reopens the panel, and refusing after accepting deletes the `_ga*` and `_gcl*` cookies.

### 8.2 Belgian law on the page regardless

Art. III.74 CDE: legal name, seat address, e-mail, enterprise number and VAT number visible on the page. Consumer prices VAT included, and said so. Privacy and cookie policy in both languages. v1's footer already carries the identification block, keep it exactly.

### 8.3 What the page carries TODAY

Exactly this, once, immediately before `</body>` and after the year one-liner, plus the commented Google CSP line in `_headers` (2.3). Nothing else: no empty `consent.js`, no disabled banner markup, no `dataLayer` stub.

```html
<!-- consent + tags mount here. Nothing loads before an explicit accept.
     When the tag ships: (1) the Consent Mode v2 default-denied stub goes in <head>,
     first script on the page; (2) assets/consent.js and consent.css load here;
     (3) swap the CSP line in _headers for the commented Google line;
     (4) prove the tag on the wire before any spend (ads-program.md section 4). -->
```

The footer line "Ce site ne dépose aucun cookie et n'utilise aucun outil de mesure" is true today and must be deleted in the same commit that adds the tag. **Prove the tag on the wire before any spend,** not with a browser recorder but with `performance.getEntriesByType('resource')` in an incognito window, on a preview branch, with the real IDs: before any click zero non-self requests, refuse still zero, accept loads gtag and a `tel:` click fires the conversion with zero CSP violations. The taxi build found a real, silent CSP block exactly this way and would not have found it any other way.

## 9. Code quality

**HTML.** Semantic HTML5: `header`, one `main` carrying the skip-link target id, `section` with `aria-labelledby` pointing at its own heading, `article` for a card, `figure` plus `figcaption`, `details`/`summary`, `footer`. No `<div>` where an element exists, no `<br>` for spacing, and every section has a heading, even a visually hidden one.

**CSS.** Custom properties for every token (colour, spacing, radius, font, bar height) in one `:root` block at the top, as v1 does. Class names describe the thing, not the look: `.price-card`, `.callbar`, `.trust`, never `.mt-4` or `.text-red`; no utility framework, no Tailwind, and no BEM ceremony either (`.card__title--big` is over-engineering for a 335-line sheet). Sections numbered in comments as v1 does. Comments explain **why**, never what: "64 px so the thumb cannot miss it while the cellar floods" beats "sets height". No `!important` outside the reduced-motion block, no `z-index` above 200, no `position: absolute` for anything that must not move. A print stylesheet is optional and cheap: hide the sticky bar, show the phone number and the legal block. A CHANGELOG line lives in the CSS header, one line per change, newest last:

```css
/* Pro Débouchage, landing page. One file, no framework.
   CHANGELOG
   2026-08-23 v1  first build from the design canvas.
   2026-08-2X v2  self-hosted fonts, AVIF sources, skip link visible on focus. */
```

**Validation.** HTML passes the W3C validator with zero errors on all six pages. Lighthouse mobile, throttled, incognito: **95 or more on Performance, Accessibility, Best Practices and SEO**, where below 95 on any one is a bug and not a preference. Zero console errors, zero warnings, zero CSP violations, zero 404s in the network panel.

**No build step.** The page ships as written. The only tool that may appear is a small node script (about 60 lines, no dependencies) when the eight ad variants land: it reads one template plus a small data file per variant and writes the HTML, and its output is never edited by hand (AGENTS.md section 3). Until then there is nothing to run, which is the point.

## 10. Definition of done

Run on a real phone and a desktop browser, on the preview URL, before the domain is pointed. Every line is a yes, or the page is not done.

1. Every `tel:` link opens the dialer with +32 480 64 96 49 and no other number.
2. The number appears as selectable text in the hero, the final block and the footer.
3. Tapping the sticky call button dials on the first tap, no zoom, no double tap.
4. The WhatsApp link opens WhatsApp with the FR text pre-filled on `/fr/` and the NL text on `/nl/`.
5. The pre-filled text ends with a space and the cursor sits after the colon.
6. Every `tel:` and `wa.me` link carries a unique `data-cta` value.
7. The sticky bar is visible at the top, mid page and at the very bottom of the scroll.
8. At the very bottom, the bar covers no footer text, legal block included.
9. No horizontal scroll at 320 px wide, checked by dragging rather than by eye.
10. Nothing overlaps at 200 percent zoom.
11. Nothing shifts while the page loads (CLS reads 0.000 in Lighthouse).
12. The layout holds at 320, 390, 768, 1024 and 1440 px.
13. `/fr/` and `/nl/` both exist and both answer 200.
14. The FR to NL switch lands on the same content, not on a homepage.
15. `<html lang>` is `fr-BE` on FR pages and `nl-BE` on NL pages.
16. Every hreflang trio (fr-BE, nl-BE, x-default) is present and self-referencing.
17. No French word on the NL page and no Dutch word on the FR page, outside the switch.
18. Fonts load from our own domain: the network panel shows no `fonts.g*` request.
19. Text is never invisible while the font loads.
20. The hero is crisp on a 3x screen and shows no visible compression.
21. Every image has `width`, `height` and a real `alt`, and no text is baked into any image.
22. The favicon, the apple-touch-icon and the maskable icon all render.
23. The OG image renders in a WhatsApp preview of the URL.
24. Lighthouse mobile: 95 or more on all four categories.
25. LCP under 2.0 s on the simulated 4G run.
26. First load under 250 KB total.
27. Zero console errors and zero console warnings.
28. In incognito, before any click, the network panel shows zero requests to any host but ours.
29. `curl -sI https://<host>/fr/` returns HSTS, nosniff, X-Frame-Options, Referrer-Policy, Permissions-Policy and the CSP.
30. Zero CSP violations in the console on all six pages.
31. `*.pages.dev` answers with `X-Robots-Tag: noindex`, the real domain does not.
32. `/nope-abc-123` returns a real 404 status and the bilingual 404 page.
33. The footer shows legal name, seat address, e-mail, enterprise number and VAT number.
34. Every consumer price says TVA comprise, and the FR and NL numbers match.
35. The surcharge rule, the déplacement rule and the VAT rates are the ones Roro confirmed.
36. The privacy and cookie pages exist in both languages and are linked from every page.
37. The footer year shows the current year with JS on, and the build year with JS off.
38. No em dash anywhere in any copy, FR or NL.
39. No lorem ipsum, no `[RORO CONFIRMS]`, no `[...]`, no `TODO`, and no "Photo à venir" left where a real photo was promised.
40. No review, rating, counter or years-in-business claim that Roro has not confirmed.
41. The page never says "toute la Belgique" and never lists Brussels city as served.
42. Every claim on the page can be pointed at a line in `playbook/business-brief.md`.
43. Tab reaches the skip link first, and the skip link becomes visible.
44. Every focused element shows a visible ring, on light and on dark sections.
45. Every FAQ item opens and closes with Enter and with Space.

## 11. Cleaning a Claude Design export into this standard

The export is a starting point for structure and look, never for code. Expect this list, in this order.

1. **Strip the framework.** Exports arrive as React, or as HTML dressed in Tailwind classes. Rewrite as plain semantic HTML plus the one stylesheet, and do not ship a build step to keep a component model that has one instance.
2. **Kill every CDN:** `cdn.tailwindcss.com`, unpkg, Google Fonts, a font-awesome sheet, an icon script. Any one of them fails the CSP and the privacy line. Icons become inline SVG, fonts become the two local woff2 files.
3. **Translate utility classes into tokens.** `class="bg-blue-900 px-4 py-8 rounded-2xl"` becomes a named class built on the `:root` custom properties. This is most of the work, and where the page becomes maintainable.
4. **Delete inline `style=""`** and move it into the sheet.
5. **Remove every `onclick` and inline handler**, plus whatever script the export added for an accordion, a scroll reveal or a mobile menu. `<details>` and CSS replace all of it.
6. **Fix the heading order.** Designers pick heading levels for size: re-derive them from the outline, one H1, H2 per section, H3 inside.
7. **Add what a design tool cannot know:** `width` and `height` on every image, real `alt` text, `loading="lazy"`, `fetchpriority` on the hero, `lang` and `hreflang` on the language links, the skip link, `aria-labelledby` on sections.
8. **Replace placeholder content.** Stock photos, lorem ipsum, invented names, fake ratings and "5,0 (127 avis)" star blocks all come out. Every one of them breaks rule 1.
9. **Re-check contrast after the palette lands**, since exports often use a lighter grey than the token file says, and **rebuild the responsive layout on our breakpoints** (700 and 1000 px) rather than keeping the export's arbitrary ones.
10. **Re-run section 10 from the top.** A cleaned export passes nothing until it is measured.
