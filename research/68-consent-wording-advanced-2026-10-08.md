# Consent wording and the advanced variant, narrowed to the Ads tag, live: 2026-10-08

One agent (Claude Code), no Chrome, Browser pane only. 12:41 to about 13:10 (this machine's clock), two rounds. Edits only in `design/site-source/` (build.js, copy-fr/nl/en.js, legal.js, README.md; lastmod.json by the build). Decision: DECISIONS.md 2026-10-08, the expert decisions entry, COOKIES line; the session's review asked for the Ads-only narrowing and the live deploy.

## Where things stand
- **Live** (prodebouchage24.be): the ADVANCED build, Ads tag only, new wording. Deployment https://48e7f8e8.prodebouchage24.pages.dev, `--branch main`, 13:03.
- **Preview**: the same build (https://9d88ad65.prodebouchage24.pages.dev).
- **site-v1 on disk: the ADVANCED build that is live** (`diff -r` against the copy taken after the build: identical); `lastmod.json` as that build wrote it. A plain build ships BASIC: every live build needs `CONSENT_MODE=advanced`.

## 1. The narrowing (build.js)
- **build.js 74 to 78**: comment, and `CONSENT_MODE=advanced` without an Ads id now fails the build.
- **build.js 81** (`HEAD_ADV`): the head now ends `gtag('js',new Date());gtag('config',"AW-18413234511");`. The GA4 config is gone from the head. The rest is unchanged (all four denied first, redaction on, passthrough off, stored answer applied).
- **build.js 82** (`HEAD_ADV_LOADER`): the loader is `gtag/js?id=AW-18413234511` only.
- **build.js 400 to 402** (consent.js, advanced Accept branch): after the consent update, the number-swap config (on the ads Accept) and `if(GA&&addAn)gtag('config',GA);` (on the analytics Accept). The same GA4 line as basic, so GA4 waits for the analytics Accept as in basic; a stored yes is replayed by `enable(r)` on load.
- Comments at 62 to 68 and 374 to 378 and the log line at 884 updated to match.
- **Basic is byte for byte unchanged**: built after the narrowing, after the wording and after the title fix; each time `diff -r` against site-v1 as it was at 12:42 (before any change today) gave no output, `lastmod.json` identical.

## 2. What actually leaves before any answer (preview, /fr/, storage and cookies cleared)
`read_network_requests` lists same-origin requests only (no Google host), so Google requests were read from Resource Timing (full URLs). The tel: navigation was blocked by a test listener; no call placed.

**Page load, no answer (12:57 and 13:01): exactly two Google requests.**
1. `www.googletagmanager.com/gtag/js?id=AW-18413234511` (the Ads script).
2. `pagead2.googlesyndication.com/ccm/collect`, `en=page_view`. Parameter names and meaning:
   - `dl`: page address. `dr`: the page you came from (when there is one).
   - `tft`: time the tag fired. `tfd`: milliseconds since the page started.
   - `rnd`: random number, the same within one page load, new on the next.
   - `gcs` (G100 = everything denied), `gcd`: consent state. `npa=1`: no personalised ads. `dma`, `dma_cps`: EU Digital Markets Act flags.
   - `gclid` and `lps`: only when the address carries an ad-click code. Tested with a fake `?gclid=`: `gclid=0`, `dl` ends `?gclid=0`; the value itself is in no request.
   - `en`, `navt`, `tid`, `tids`, `gtm`, `tag_exp`, `scrsrc`, `_tu`, `apvc`, `rcb`, `frm`, `fmt`: event name, navigation type, our tag id and technical settings of the tag.
   - NOT in it: screen size, language, device model, page title.
   - No GA4 request (`g/collect`, `google-analytics.com`, `analytics.google.com`): none. `document.cookie` empty, localStorage and sessionStorage empty.

**A tap on the hero call button, no answer: two more Google requests, still no GA4.**
3. `pagead2.googlesyndication.com/pagead/conversion/18413234511/`, `en=conversion`, `label=_diMCKD12OgcEM_SjsxE` (the call label). Parameter names and meaning:
   - `url`: page address. `ref`: referrer. `tiba`: page title.
   - `u_w`, `u_h`: screen width and height (375 x 812 in phone emulation, 0 x 0 in the desktop pane).
   - `uam`, `uamb`, `uap`, `uapv`, `uafvl`, `uaa`, `uab`, `uaw`: device model ("Pixel 8"), mobile flag, system and version (Android 14), browser brands and versions, processor details.
   - `fst`, `random`: time, random number. `gcs` G100, `gcd`, `npa=1`, `pscdl=denied`, `dma`, `dma_cps`: consent and privacy flags. `gclaw=0`, `gclaw_src`: the redacted ad-click marker.
   - `cv`, `fmt`, `bg`, `guid`, `async`, `gtm`, `gtm_ee`, `tag_exp`, `rcb`, `frm`, `hn`, `category`, `data`, `ept`, `_tu`: technical settings of the tag.
4. `ccm/collect` with `en=call_click` and `ep.cta=hero-call`, the same fields as the page_view ping (same `rnd`).

Every request also carries, as any web request does, the IP address and the browser's user-agent header; Resource Timing cannot show headers.

**After "Accept all" (preview /en/, 13:02):** only now `gtag/js?id=G-S3SQ25WZMK`, GA4 `g/collect en=page_view gcs=G111`, the number-swap loader (`wcm/loader.js`, `call-tracking_9.js`, `wcm`), `consent_update`, and the cookies `_gcl_au`, `_ga`, `_ga_S3SQ25WZMK`. Cleared afterwards.

## 3. Every changed sentence (advanced build only; basic unchanged)
Source lines are the current ones. In the copy files each string is `ADV ? new : old`. In legal.js the old text stays in COOKIES_TAG (FR 179, 180, 196, 197; NL 201, 202, 218, 219; EN 223, 224, 240, 241), and the advanced text is in ADV_SWAP 265 to 292, RECIP_ADV 298 and BASIS_ADV 303. Each swap must match exactly once or the build stops.

### The card and the footer
| Where | Old | New |
|---|---|---|
| FR title, copy-fr.js 330 | Mesurer les appels, avec votre accord | Cookies de mesure, avec votre accord |
| NL title, copy-nl.js 298 | Oproepen meten, met uw akkoord | Meetcookies, met uw akkoord |
| EN title, copy-en.js 251 | Measuring calls, with your consent | Measurement cookies, with your consent |
| FR layer one, copy-fr.js 331 | Rien n'est chargé avant votre choix. | Le script de Google se charge tout de suite, sans cookie avant votre accord. |
| NL layer one, copy-nl.js 299 | Er wordt niets geladen voor uw keuze. | Het script van Google laadt meteen, maar zonder cookies zolang u niet aanvaardt. |
| EN layer one, copy-en.js 252 | Nothing loads before you choose. | Google's script loads right away, with no cookies until you accept. |
| FR layer two, copy-fr.js 339 | Rien n'est chargé tant que vous n'avez pas enregistré. | Sans votre accord, Google ne dépose et ne lit aucun cookie. |
| NL layer two, copy-nl.js 307 | Er wordt niets geladen zolang u niet bewaard hebt. | Zonder uw akkoord plaatst of leest Google geen cookies. |
| EN layer two, copy-en.js 260 | Nothing loads until you've saved. | Unless you say yes, Google won't set or read any cookies. |
| FR ads switch, copy-fr.js 344 | Nous dit si un appel vient d'une annonce Google. | Un cookie relie votre appel à l'annonce Google qui vous a amené. |
| NL ads switch, copy-nl.js 312 | Vertelt ons of een telefoontje van een Google-advertentie komt. | Een cookie koppelt uw telefoontje aan de Google-advertentie die u bracht. |
| EN ads switch, copy-en.js 265 | Tells us whether a call came from a Google ad. | A cookie links your call to the Google ad that brought you. |
| FR footer, copy-fr.js 318 | ...et seulement si vous l'acceptez. | ...sans cookie tant que vous ne l'acceptez pas. |
| NL footer, copy-nl.js 291 | ...en alleen als u die aanvaardt. | ...zonder cookies zolang u die niet aanvaardt. |
| EN footer, copy-en.js 244 | ...and only if you accept it. | ...with no cookies until you accept it. |

The FR title has no "Les": "Les cookies de mesure, avec votre accord" wrapped to two lines at 375 px (measured 33 px against 17 px) and made the card 193 px tall. Without the article it fits one line and the FR card stays at 177 px. The EN title as given also wraps to two lines (card 193 px), which still leaves the call button clear. I kept it as asked. The analytics switch line is unchanged; with GA4 waiting for consent it is now fully true.

### The privacy pages
| Where | Old | New |
|---|---|---|
| FR, new paragraph (replaces "Rien n'est chargé avant votre choix.") | Rien n'est chargé avant votre choix. | Seul le script de Google Ads se charge dès l'ouverture de la page, avant votre choix. Tant que vous n'avez pas accepté, et aussi si vous refusez, il ne dépose aucun cookie et n'en lit aucun. À l'ouverture de la page, il envoie à Google, sans cookie : l'heure, l'adresse de la page et celle d'où vous venez, si cette adresse contenait un code de clic d'annonce (le code lui-même est remplacé par un 0), si vous avez accepté ou non, un nombre tiré au hasard pour ce chargement de page, et quelques réglages techniques de la balise. Si vous appuyez sur un bouton d'appel ou WhatsApp, il envoie aussi, sans cookie, pour compter l'appel : le titre de la page, la taille de l'écran, le modèle d'appareil, son système, le navigateur et leurs versions. Comme pour toute connexion, Google voit aussi votre adresse IP et le type de navigateur. Aucun identifiant n'est gardé d'une page à l'autre. La mesure d'audience (Google Analytics) ne se charge que si vous l'acceptez. Si vous acceptez, Google peut déposer des cookies pour la mesure des annonces et pour la mesure d'audience, pour les durées du tableau plus bas. |
| FR basis paragraph | La base légale est votre consentement. ... Refuser efface les cookies concernés. | Pour les cookies, la base légale est votre consentement. ... Refuser efface les cookies concernés. La mesure des annonces sans cookie repose sur notre intérêt légitime : savoir si nos annonces Google amènent des appels. |
| FR outside the EU | Si vous acceptez la mesure, Google peut traiter ces données en dehors... | Google peut traiter les données de mesure en dehors... |
| FR last paragraph | Tant que vous n'avez pas accepté, votre navigateur ne demande aucun fichier à une autre société en ouvrant cette page. | En ouvrant cette page, votre navigateur ne contacte qu'une seule autre société : Google, pour la mesure décrite plus haut. |
| FR recipients | Google Ireland Ltd, uniquement si vous avez accepté la mesure, et uniquement pour cette mesure. | Google Ireland Ltd, pour la mesure décrite plus haut (Google Ads, sans cookie tant que vous n'avez pas accepté, et Google Analytics, seulement si vous l'acceptez), et uniquement pour cette mesure. |
| FR legal-basis list | Savoir si nos annonces amènent des appels : votre consentement, ... | Savoir si nos annonces amènent des appels, avec les cookies de Google : votre consentement, ... AND: La mesure des annonces sans cookie, avant votre choix ou si vous refusez : notre intérêt légitime à savoir si nos annonces amènent des appels. |
| NL, new paragraph | Er wordt niets geladen voor u kiest. | Alleen het script van Google Ads laadt zodra u de pagina opent, nog voor u kiest. Zolang u niet aanvaardt, en ook als u weigert, plaatst het geen cookies en leest het er geen. Bij het openen van de pagina stuurt het zonder cookie naar Google : het tijdstip, het adres van de pagina en dat van de pagina waar u vandaan komt, of dat adres een code van een advertentieklik bevatte (de code zelf wordt vervangen door een 0), of u aanvaard hebt of niet, een willekeurig getal voor die paginalading, en enkele technische instellingen van het script. Tikt u op een bel- of WhatsApp-knop, dan stuurt het ook, zonder cookie, om de oproep te tellen : de titel van de pagina, de schermgrootte, het model van uw toestel, het systeem, de browser en hun versies. Zoals bij elke verbinding ziet Google ook uw IP-adres en het type browser. Er wordt geen herkenningsnummer bewaard tussen twee pagina's. De bezoekersmeting (Google Analytics) laadt alleen als u die aanvaardt. Aanvaardt u, dan kan Google cookies plaatsen voor de advertentiemeting en de bezoekersmeting, voor de termijnen in de tabel hieronder. |
| NL basis paragraph | De rechtsgrond is uw toestemming. ... Weigeren wist de betrokken cookies. | Voor de cookies is de rechtsgrond uw toestemming. ... Weigeren wist de betrokken cookies. De advertentiemeting zonder cookies steunt op ons gerechtvaardigd belang : weten of onze Google-advertenties telefoontjes opleveren. |
| NL outside the EU | Aanvaardt u de meting, dan kan Google die gegevens ook buiten de Europese Unie verwerken... | Google kan de meetgegevens ook buiten de Europese Unie verwerken... |
| NL last paragraph | Zolang u niet aanvaardt, vraagt uw browser bij het openen van deze pagina geen enkel bestand op bij een ander bedrijf. | Bij het openen van deze pagina contacteert uw browser maar één ander bedrijf : Google, voor de meting die hierboven staat beschreven. |
| NL recipients | Google Ireland Ltd, alleen als u de meting hebt aanvaard, en alleen voor die meting. | Google Ireland Ltd, voor de meting die hierboven staat beschreven (Google Ads, zonder cookies zolang u niet aanvaardt, en Google Analytics, alleen als u die aanvaardt), en alleen voor die meting. |
| NL legal-basis list | Weten of onze advertenties telefoontjes opleveren : uw toestemming, ... | Weten of onze advertenties telefoontjes opleveren, met de cookies van Google : uw toestemming, ... AND: De advertentiemeting zonder cookies, voor u kiest of als u weigert : ons gerechtvaardigd belang om te weten of onze advertenties telefoontjes opleveren. |
| EN, new paragraph | Nothing loads before you choose. | Only the Google Ads script loads as soon as you open the page, before you choose. Until you accept, and also if you refuse, it doesn't set or read any cookie. When the page opens, it sends Google, without a cookie: the time, the page address and the one you came from, whether that address carried an ad-click code (the code itself is replaced by a 0), whether you accepted or not, a random number for that page load, and a few technical settings of the tag. If you tap a call or WhatsApp button, it also sends, without a cookie, to count the call: the page title, the screen size, your device model, its system, the browser and their versions. As with any connection, Google also sees your IP address and browser type. No identifier is kept from one page to the next. Audience measurement (Google Analytics) only loads if you accept it. If you accept, Google may set cookies for ad measurement and for audience measurement, for the lifetimes in the table below. |
| EN basis paragraph | The legal basis is your consent. ... Refusing deletes the cookies concerned. | For the cookies, the legal basis is your consent. ... Refusing deletes the cookies concerned. The ad measurement without cookies rests on our legitimate interest: knowing whether our Google ads bring in calls. |
| EN outside the EU | If you accept the measurement, Google may process that data outside... | Google may process the measurement data outside... |
| EN last paragraph | Until you accept, your browser doesn't request a single file from another company when opening this page. | When you open this page, your browser contacts only one other company: Google, for the measurement described above. |
| EN recipients | Google Ireland Ltd, only if you accepted the measurement, and only for that measurement. | Google Ireland Ltd, for the measurement described above (Google Ads, with no cookies until you accept, and Google Analytics, only if you accept it), and only for that measurement. |
| EN legal-basis list | Knowing whether our ads bring in calls: your consent, ... | Knowing whether our ads bring in calls, with Google's cookies: your consent, ... AND: The ad measurement without cookies, before you choose or if you refuse: our legitimate interest in knowing whether our ads bring in calls. |
| Update date, three pages | 27 août / 27 augustus / 27 August 2026 | 8 octobre / 8 oktober / 8 October 2026 |

(FR and NL carry `&nbsp;` before each colon.) Versus round one: "la langue" and "quelles pages sont lues" dropped; the redacted click code, the tap-only fields, IP and browser type, and "Google Analytics only if you accept" added. Unchanged and still true: the cookie table, the durations, "Refuser efface les cookies concernés", switches off by default, no personalisation, the reopen link.

README.md 85 to 97: the CONSENT_MODE bullet now describes this final behaviour (CRLF kept).

## 4. Builds, guards, preview
- Every build: "site-v1 built"; build.js's three asserts (BOM, CSS integrity, Caveat glyphs) and the ADV_SWAP check never threw; advanced also printed "consent mode: ADVANCED (the Ads tag loads before consent, ...; GA4 waits for the analytics Accept)". Advanced differs from basic in 16 files (consent.js, 9 landing pages, 6 privacy and terms pages).
- Em dashes: 0 in the six source files and in the built privacy pages and consent.js.
- G-S3SQ25WZMK is in no advanced HTML page, only in consent.js.
- Preview deploys: ea7ff02a (narrowing), 38200454 (wording), 9d88ad65 (FR title). The alias lagged a few seconds once (old consent.js hash), fine by 13:02.
- **Preview at 375x812, no answer:**

| Page | Card height | Card top | Hero call bottom | Google requests | GA4 requests | Cookie, storage |
|---|---|---|---|---|---|---|
| /fr/ | 177 px | 623 | 599 | gtag AW, ccm page_view | 0 | none |
| /nl/ | 177 px | 623 | 555 | gtag AW, ccm page_view | 0 | none |
| /en/ | 193 px | 607 | 584 | gtag AW, ccm page_view | 0 | none |

  All three: new title, layer one, layer two, switches and footer verbatim; old title and credit absent.
- **Preview privacy pages** (/fr/confidentialite, /nl/privacy, /en/privacy, no-store fetch): 200, all new markers present, all old ones (round one included) absent, 0 em dashes, no GA4 config.

## 5. Live deploy
- **Command:** README's exact live command, `--branch main`, at 13:03, from the verified build (`diff -r` against the advanced copy: identical).
- **Output:** "Uploaded 0 files (140 already uploaded)", "Uploading _headers", "Deployment complete! Take a peek over at https://48e7f8e8.prodebouchage24.pages.dev".

## 6. Live checks (13:04 to 13:08, Browser pane and curl; no answer, no tap, no Accept)
- **Headers, /fr/, /nl/, /fr/confidentialite**: HTTP 200; Content-Security-Policy contains `https://www.gstatic.com`; no `x-robots-tag` (meta robots `index, follow`; the noindex in `_headers` is scoped to the pages.dev hosts); `cf-cache-status: DYNAMIC`. The live HTML references `consent.js?v=3fab7ba40b`, the verified preview's hash: nothing read stale, no wait needed.
- **/fr/ (375x812)**: Google requests `gtag/js?id=AW-18413234511` and `ccm/collect en=page_view gcs=G100`; GA4 requests 0; cookie and storage empty. Title "Cookies de mesure, avec votre accord", the new card sentence and footer credit; card 177 px, top 623, hero call bottom 599.
- **/nl/**: the same two requests, no GA4, no cookie; title "Meetcookies, met uw akkoord", the new NL sentence.
- **/fr/confidentialite**: the same two requests, no GA4, no cookie; "Dernière mise à jour : 8 octobre 2026."; the new paragraph verbatim as in section 3; old sentences absent.
- **Test traffic to the real accounts**: live, 3 cookieless page_views; preview host, page_views, 2 cookieless call conversions (label _diMCKD12OgcEM_SjsxE, 12:58 and 13:01, the second with a fake `gclid` that left only as `gclid=0`) and one Accept on /en/ (13:02).

## What I am unsure of
1. **The legal basis.** "Intérêt légitime" for the cookieless Ads measurement is a legal choice made in words. Separately, as I understand EDPB Guidelines 2/2023 on article 5(3) ePrivacy (my knowledge, not checked today), a script that reads device information (the conversion ping carries device model, system, screen size) may need consent even without a cookie. If the Belgian authority reads it so, the variant itself is the risk; no sentence fixes that.
2. **"Votre adresse IP n'est pas conservée par Google"** (unchanged) was written for GA4; whether it holds for the Ads pings is not visible from the page.
3. **"Aucun identifiant n'est gardé d'une page à l'autre"** rests on what the page sends (no cookie, no storage, a random number per load), not on Google's servers.
4. **The number swap** (call counter after Accept) is still not described on the privacy page, in either variant (older gap).
5. **The FR title** drops "Les" so it fits one line; put it back at copy-fr.js 330 if a two-line card is fine.
6. **Not my files:** research/INDEX.md has no line for this report; STATE.md and the playbook may still describe basic.
