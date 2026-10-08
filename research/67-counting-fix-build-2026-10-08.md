# The counting fix, built: 2026-10-08

One build agent (Claude Code), no Chrome, in-app Browser pane only for the preview. 12:04 to 12:20 (this machine's clock). Source edits only under `design/site-source/`. Deployed to the PREVIEW branch only, never to main. STATUS: A to H done.

Note for the reader: NOW.md line 17 says this fix waits for "the read of 12 Oct, never before". The orchestrator's brief says Fady asked today. Nothing live changed: preview only.

## Where things stand
- **Preview** (https://preview.prodebouchage24.pages.dev, deploy https://67973da6.prodebouchage24.pages.dev): the ADVANCED variant, with A to F.
- **site-v1 on disk**: the BASIC variant, with A to F (step H). A plain `node design/site-source/build.js` ships basic. Proof: `diff -r` of site-v1 against the first basic build after A to F gives no output ("site-v1 still the basic build", last run 12:19). consent.js on disk has `var loaded=false`; fr/index.html has 0 loader tags in the head. `lastmod.json` is in its basic state (built from the original file).
- **Live** (prodebouchage24.be): untouched. Still without the CSP fix.

## The three build guards
No separate guard script exists in the folder. I read "three build guards" (STATE.md line 18) as the three asserts inside `build.js` that throw: the BOM and first-rule check on styles.css, the CSS integrity check (unclosed comment, stray `*/`, unbalanced braces), and the Caveat glyph-subset check on `baNote`. They run on every build. All passed in every build ("site-v1 built", no warning): basic, `CONSENT_MODE=basic`, `CONSENT_MODE=advanced`, `TAGS_OFF=1`, `TAGS_OFF=1 CONSENT_MODE=advanced`.

## A. The CSP (build.js 829 to 833)
- `CSP_TAG` script-src gains ONE host: `https://www.gstatic.com` (no wildcard). It serves Google's call-tracking loader `https://www.gstatic.com/wcm/loader.js` and, as the preview showed, `https://www.gstatic.com/call-tracking/call-tracking_9.js`. No `'unsafe-eval'`, `CSP_DAY1` untouched, dated comment at 829 to 832.
- connect-src and img-src: NOTHING added, because nothing needed it. After Accept the loader made one XHR to `https://www.googleadservices.com/pagead/conversion/18413234511/wcm?...`, already allowed by connect-src `https://*.googleadservices.com`, and it completed (it has a Resource Timing entry). A `securitypolicyviolation` listener stayed empty on every page (section G).
- Built `_headers` diff (basic before vs after): line 7 only, the one host.

## B. The dead dataLayer shim (template.js 268 to 272)
- The "click taxonomy shim" (old template.js 380 to 384) is gone; a dated source comment sits ABOVE `const PAGE_JS` so it does not ship. Built diff: the shim leaves every page that carries PAGE_JS, nothing else in PAGE_JS moved. Preview: `html.includes('click taxonomy shim')` is false on /fr/wc-bouche/.

## C. The WhatsApp button without data-cta (template.js 185 to 191, build.js 437)
- It is NOT in the scam section as research/59 says. It is the review button under the featured review (`rev-ask`, `btn btn-wa btn-sm`, text "Bonjour, voici mon avis..."). It was the only wa.me link without data-cta, 1 per page on all 9 landing pages.
- The source said why it had none: whatsapp_click is a PRIMARY Ads conversion (playbook/ads-program.md line 25) and a review is not a lead.
- Built: `data-cta="review-whatsapp"`. Its tap now fires the GA4 event `whatsapp_click` with cta `review-whatsapp`, like the others. consent.js skips the Ads conversion label for any cta starting with `review` (build.js 437, both variants), so a review never counts as a paid lead. One-line change if the owner wants it counted in Ads after all. Preview: the button carries `data-cta="review-whatsapp"`.

## D. CONSENT_MODE=advanced (build.js 57 to 76, 368 to 375, 384, 395, 437, 502 to 515, 717, 746, 877)
- Unset or `basic`: today's behaviour. Any other value throws (tested: `CONSENT_MODE=advance` stops the build).
- `advanced`, in the head of every page that carries the consent card (landing pages, the six variants, privacy, terms), in this order: consent default denied for ad_storage, analytics_storage, ad_user_data, ad_personalization with wait_for_update 500 (the existing line, unchanged); `ads_data_redaction` true; `url_passthrough` false; a stored answer from `pd_consent` applied as a consent update (same version and 182-day rules as consent.js); `gtag('js')`; config AW-18413234511; config G-S3SQ25WZMK; then `<script async src="https://www.googletagmanager.com/gtag/js?id=AW-18413234511">`.
- The root language chooser and the 404 get none of it (`opts.bare`, build.js 502 to 505, 717, 746): they have no card and no consent.js, so a visitor there could never answer or withdraw. My call; one line to change.
- consent.js in advanced: `loaded` starts true; Accept sends only the consent update per purpose (ads: ad_storage and ad_user_data; analytics: analytics_storage; ad_personalization never) plus the number-swap config (label u0RxCNu5nPUcEM_SjsxE, "0480 649 649"), which therefore still waits for ads consent. It never loads gtag.js again and never re-sends the two configs (a second GA4 config would count a second page_view). The Ads conversion on a call or WhatsApp tap drops the `state.ads` condition: sent in every consent state, cookieless while denied.
- **Byte-for-byte proof of the default.** Built basic after A, B, C, E, F (before D), then basic after D with the same lastmod.json: `diff -r` gives no output over all 141 files. `CONSENT_MODE=basic`: identical too. `TAGS_OFF=1` with and without `CONSENT_MODE=advanced`: identical; 0 files mention googletagmanager, gtag( or gstatic; no assets/js folder.
- Advanced vs basic: 16 files differ (consent.js, the 9 landing pages, the 6 privacy and terms pages). index.html, 404.html, _headers and sitemap.xml are identical.

## E. The ticker pictures (template.js 57 to 62)
- The first three photos of the strip (van-sunrise, job-wc, camera-ecran) were eager, and the ticker is `display:none` under 820px (styles.css 267 and 274), so phones downloaded them for nothing. All are `loading="lazy"` now, `decoding="async" fetchpriority="low"` kept, no image or filename changed. On desktop the PAGE_JS observer still promotes the whole strip.
- Preview, served HTML of /fr/wc-bouche/: 44 of 44 ticker `<img>` carry `loading="lazy"`, the first three included. Phone viewport (375x812) on /fr/: `.ticker` computed display `none`, and Resource Timing lists only logo-icon.svg, van-garden-45-800.avif and machine-haute-pression-800.avif (the carousel): no van-sunrise-480/800/1200 fetched.

## F. One WhatsApp text per per-problem page (copy-fr.js 66 to 69, 79, 90; copy-nl.js 62 to 65, 75, 86; build.js 615)
Each variant has its own `wa`; `variantCopy` uses `v.wa || c.wa`. The hero button, the final button and the call bar of that page carry it; the review button keeps its own text; the three main pages keep theirs. For review before any live deploy:

| Page | Text sent |
|---|---|
| /fr/wc-bouche/ | Bonjour, j'ai un WC bouché. Vous pouvez venir ? |
| /fr/canalisation-bouchee/ | Bonjour, j'ai une canalisation bouchée. Vous pouvez venir ? |
| /fr/cave-inondee/ | Bonjour, ma cave est inondée. Vous pouvez venir pomper ? |
| /nl/wc-verstopt/ | Hallo, mijn wc is verstopt. Kunnen jullie langskomen? |
| /nl/afvoer-verstopt/ | Hallo, mijn afvoer is verstopt. Kunnen jullie langskomen? |
| /nl/kelder-leegpompen/ | Hallo, mijn kelder staat onder water. Kunnen jullie hem komen leegpompen? |

Plain space before "?" in French, as the existing `wa` does. No em dash in any added line (0 by grep). The button label still says "send a photo"; the text does not ask for one, as the brief asked.

## Wording the owner must judge before advanced goes live (not edited)
Under advanced, Google's tag loads and sends cookieless pings before any answer. These sentences say otherwise or come close:
- Card, layer one: copy-fr.js 324 "Rien n'est chargé avant votre choix."; copy-nl.js 293 "Er wordt niets geladen voor uw keuze."; copy-en.js 246 "Nothing loads before you choose."
- Card, layer two: copy-fr.js 330 "Rien n'est chargé tant que vous n'avez pas enregistré."; copy-nl.js 299; copy-en.js 252.
- Card, the ads switch: copy-fr.js 333, copy-nl.js 302, copy-en.js 255: in advanced a cookieless call conversion is sent even with this switch off.
- Footer credit: copy-fr.js 313 "...seulement si vous l'acceptez."; copy-nl.js 287; copy-en.js 240.
- Privacy, cookies section: legal.js 173 (FR) "Rien n'est chargé avant votre choix.", 195 (NL), 217 (EN).
- Privacy: legal.js 191 (FR) "Tant que vous n'avez pas accepté, votre navigateur ne demande aucun fichier à une autre société", 213 (NL), 235 (EN).
- Privacy, recipients: legal.js 242 to 244 "Google Ireland Ltd, uniquement si vous avez accepté la mesure".
- Privacy, legal basis: legal.js 247 to 249 (consent as the basis for "knowing whether our ads bring in calls"); cookieless pings before consent need a basis of their own, or a sentence.
- Still true in advanced: the cookie table rows "only after you accept" (legal.js 181 to 183, 203 to 205, 225 to 227): no cookie was set before Accept on the preview (`document.cookie` empty).

## G. Preview deploy and the wire proof
Deploy: built `CONSENT_MODE=advanced`, guards passed, README's exact command from `$TMPDIR` (`unset CLOUDFLARE_API_TOKEN`, `WRANGLER_CACHE_DIR` set, `--branch preview`): "Uploaded 17 files (123 already uploaded)", "Deployment complete", alias https://preview.prodebouchage24.pages.dev.

Method: Browser pane, localStorage and cookies cleared on the preview origin first. The pane's network reader lists same-origin requests only, so cross-origin hits were caught by wrapping `fetch`, `sendBeacon` and XHR in the page and by Resource Timing; a `securitypolicyviolation` listener caught CSP blocks. The tel: navigation was stopped by a test listener; no call was placed.

1. **Before any answer, the loader runs and consent is denied.** /fr/: Resource Timing lists `https://www.googletagmanager.com/gtag/js?id=AW-18413234511` and `...gtag/js?id=G-S3SQ25WZMK`; dataLayer in order: consent default (all four denied), set ads_data_redaction true, set url_passthrough false, js, config AW, config G. /nl/ (12:17:53, first hits caught live): `https://pagead2.googlesyndication.com/ccm/collect?...tid=AW-18413234511&en=page_view...&gcs=G100...&npa=1` and `https://region1.google-analytics.com/g/collect?...tid=G-S3SQ25WZMK&gcs=G100...&_s=1...`, both resolved (opaque, delivered). /fr/wc-bouche/ (12:18:21): `ccm/collect?...en=page_view...&gcs=G100`. No CSP violation on any of the three pages; console empty; `document.cookie` empty.
2. **A call tap before any answer is counted.** /fr/, real click on the hero "Appeler 0480 649 649" (12:16:38): `https://pagead2.googlesyndication.com/pagead/conversion/18413234511/?...en=conversion...&gcs=G100...&label=_diMCKD12OgcEM_SjsxE...&hn=www.googleadservices.com&npa=1` (the call label, cookieless; Google routed it through pagead2.googlesyndication.com with hn=www.googleadservices.com), plus `ccm/collect?...en=call_click&ep.cta=hero-call&gcs=G100` and GA4 `g/collect?...en=call_click&ep.cta=hero-call&gcs=G100&_s=2`.
3. **After "Tout accepter", the number-swap loader is no longer blocked.** /fr/ (12:17:16): `https://www.gstatic.com/wcm/loader.js` and `https://www.gstatic.com/call-tracking/call-tracking_9.js` load (script tags and Resource Timing), then XHR `https://www.googleadservices.com/pagead/conversion/18413234511/wcm?cc=ZZ&dn=0480649649&cl=u0RxCNu5nPUcEM_SjsxE...` completes; zero CSP violations. Consent updated (`google_tag_data.ics`: ad_storage, analytics_storage, ad_user_data update true; ad_personalization not granted), hits now `gcs=G111`, cookies `_ga`, `_ga_S3SQ25WZMK`, `_gcl_au` set only now. The displayed number did not change: `cc=ZZ`, no ad click in this visit, as expected.
4. **WhatsApp text on /fr/wc-bouche/**: hero, final and sticky buttons decode to "Bonjour, j'ai un WC bouché. Vous pouvez venir ?"; the review button keeps "Bonjour, voici mon avis sur votre intervention : " with `data-cta="review-whatsapp"`.
5. **Ticker lazy**: see E (44 of 44 lazy in the served HTML; none fetched on a phone viewport).

Screenshots for the owner (not in the project folder): desktop /fr/ `C:\Users\fadya\.claude\projects\C--Users-fadya-Desktop-pro-debouchage\f0bd2e9d-453a-46e3-922d-098036c75b26\tool-results\mcp-Claude_Browser-blob-1791454730944-px4n64.jpg`; phone /fr/ `...\tool-results\mcp-Claude_Browser-blob-1791454720471-a6ogss.jpg`. The page looks as before: header, H1, the small consent card.

What the preview did NOT prove: a real number swap (needs a visitor from a real ad click; Fady's one test call after a live deploy, DECISIONS 2026-09-28); an iPhone with Safari; that Google Ads actually records the cookieless conversion (only that the ping left the page and was accepted at the network level).

Test traffic sent to the REAL accounts from the preview host, to be read as tests: one cookieless call conversion (label _diMCKD12OgcEM_SjsxE) at 12:16:38, re-sent by Google with gcs=G111 at 12:17:16 after Accept; GA4 call_click (cta hero-call) at 12:16:38 and page_views on /fr/, /nl/ and /fr/wc-bouche/ between 12:14 and 12:19, all from https://preview.prodebouchage24.pages.dev. No gclid, so no ad click can be credited. Storage on the preview origin was cleared at the end; the pane tab was closed.

## H. Basic again on disk
Rebuilt without the flag from the original lastmod.json: guards passed, `diff -r` against the pre-D basic build: identical. The next plain build and the next live deploy ship BASIC unless the owner picks advanced.

## Also changed
- design/site-source/README.md lines 68 to 75 (the gstatic sentence: fixed in the source, proven on the preview, not live) and 85 to 93 (a `CONSENT_MODE` bullet). CRLF endings kept, no em dash.
- design/site-source/lastmod.json: rewritten by the build; the 15 sitemap URLs now carry lastmod 2026-10-08 (every page changed: shim out, lazy ticker).
