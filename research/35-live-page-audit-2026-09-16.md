# Pro Debouchage live page audit, 2026-09-16
Read-only audit. Browser pane tools only (no Chrome extension). No file in the project edited, nothing deployed, no consent button clicked, no Google ad clicked.

## PHASE 1A, FR page on mobile (375x812, DPR 2)

### First screen exactly as it loads
Visible without scrolling: logo, language pills FR / NL / EN, eyebrow "DÉBOUCHAGE 24H/24", and the first two H1 lines "ÇA REMONTE," / "ÇA DÉBORDE,". Everything below y=224 is covered by the consent card.

Measured geometry at scrollY 0:
- H1 block: top 132, height 243 (four lines: "ÇA REMONTE, / ÇA DÉBORDE, / ÇA PUE ? / APPELEZ. ON S'EN OCCUPE.")
- Hero buttons: "Appeler 0480 649 649" top 535 height 64; "Envoyer une photo" top 613 height 64.
- Consent card `.consent`, position fixed, z-index 290, occupies y 224 to 726 (62 percent of the 812 px screen).
- `.c-dim`, fixed, full viewport 375x812, rgba(16,42,74,0.34), z 190, pointer-events none. The whole page is dimmed behind the card.
- Sticky call bar `.callbar`, fixed, z 200, sits at y 826 to 898, i.e. BELOW the fold, opacity 0, pointer-events none.

### The finding that matters most
At scrollY 0 on a phone, THERE IS NO TAPPABLE WAY TO CALL.
- `document.elementFromPoint(187, 560)` (the hero call button) returns `BUTTON.c-more` "Choisir": the consent card is on top of the call button.
- `document.elementFromPoint(187, 645)` returns `P.c-fine` "Responsable : PRO DEBOUCHAGE S...": the WhatsApp button is covered too.
- The call bar is opacity 0 and pointer-events none until the visitor has scrolled.
- The header call button exists in the DOM (`a.btn.btn-call.header-call`, label "Appeler") but `offsetParent === null` at phone width: it is hidden. The mobile header carries only the logo and FR/NL/EN.

Call bar fade measured by scroll position (opacity, pointer-events):
0: 0/none | 100: 0/none | 200: 0/none | 300: 0/none | 400: 0/none | 500: 0/none | 600: 0/none | 700: 0.6/auto | 800: 0.95/auto | 900: 1/auto.
Nothing callable is tappable for the first ~650 px of scroll, which is 80 percent of a screen.

Taps to a call from the ad click, mobile:
- Fastest honest path: tap "Tout refuser" or "Tout accepter" (1), tap "Appeler 0480 649 649" (2), confirm in the dialer (3). THREE taps.
- Or ignore the card, scroll ~700 px, tap the sticky bar (2 taps plus a scroll gesture).
- A visitor who neither scrolls nor answers the card cannot call at all.

### Cookie banner
Buttons in this order: "Tout refuser" (left), "Tout accepter" (right), then full-width "Choisir", then fine print "Responsable : PRO DEBOUCHAGE SRL. Vous pouvez changer d'avis quand vous voulez, via le lien « Cookies et mesure » en bas de page." plus link "Tout savoir sur les cookies".
Title "Mesurer les appels, avec votre accord". Body "On utilise la mesure de Google (Google Ireland Ltd) pour savoir si nos annonces amènent des appels, et quelles pages sont lues. Rien n'est chargé avant votre choix, et refuser ne change rien à votre visite."
Legally exemplary (refuse as prominent as accept, granular Choisir, nothing loads first). Commercially it is a wall in front of the call button on the smallest screens: it covers the H1's last two lines, the whole sub paragraph and both hero CTAs.
I clicked none of the three buttons. Consent left untouched.

### Every tel: and WhatsApp link (23 total)
All 20 tel: links are `tel:+32480649649`, digits correct for 0480 649 649.
Labels: "Appeler" (header, hidden on mobile), "Appeler 0480 649 649" (hero), 6x "Appeler" (service cards), 5x price rows with aria such as "WC bouché, À partir de 129 €, Appeler", "Appeler 0480 649 649" after the grid, "Appeler 0480 649 649" (scam section), "Appeler 0480 649 649" (zone), "0480 649 649" (final block, class bignum), "Appeler maintenant" (final), "0480 649 649" (footer), "Appeler 0480 649 649" (sticky bar).
3 WhatsApp links, all `https://wa.me/32480649649`:
- hero, final block and sticky-bar icon, prefilled: "Bonjour, j'ai un problème de canalisation bouchée. Voici une photo et ma commune : "
- review block, prefilled: "Bonjour, voici mon avis sur votre intervention : "

### Console and network before consent
Console: no messages at all.
Network before any consent choice: ZERO third-party requests. Every request is same-origin (html, archivo-var-latin.woff2, caveat-note.woff2, logo-icon.svg, the AVIF photos, consent.js). Exactly right.

### Page length
Document height 19,175 px at 375 px wide = 23.6 phone screens. Section tops:
header 0, hero 65 (h 1042), trust strip 1141, services 1348 (h 1427), before/after 2776, how it works 3320, prices 4317 (h 1976), scam warning 6293, Afrim 7429, our way of working 8385, equipment 9484 (h 2053), proof 11536 (h 2884), review author 14003, tenant/owner 14421, zone 15200, FAQ 16363, final call 17649, footer 18154.

### FAQ, all collapsed except the first
Open: "Combien ça coûte ?" (y 16527). Collapsed: "Y a-t-il un supplément le soir, la nuit ou le week-end ?", "Le déplacement est-il payant ?", "Combien coûte l'inspection caméra seule ?", "Quel taux de TVA s'applique chez moi ?", "Je suis locataire : qui paie ?", "En combien de temps êtes-vous là ?" (y 17,276), "Faut-il casser quelque chose ?", "Faites-vous un rapport pour l'assurance ?", "Quelles communes couvrez-vous ?", "Comment puis-je payer ?".

### Floating guarantee badge
`div.guar-float`, position fixed, z 95, 78x78 px at x 283-361, y 648-726, permanently pinned just above the sticky call bar on the right. Contains "GARANTIE · GARANTIE · GARANTIE · 1" and wraps `button.guar-fab`. On a 375 px screen it sits on top of body text and hides words on every screen. Observed covering: "Le prix est dit au téléphone et c[onfirmé] à votre porte, avant de commencer" in the scam section, and "le prix étai[t] très raisonnable pour la qualité du..." in the customer review.

### Tap targets and attention ratio
Zero forms on the page. Only outbound links are the 4 wa.me ones. The "Voir la source" citation is an in-page popup (`.cite-pop`), not an outbound link.
Tap targets under the 44/48 px guidance, measured on mobile:
- the six service-card "Appeler" links: 273 to 275 px wide by 25 px TALL
- the footer "Appeler 0480 649 649": 175x17
- language pills FR / NL / EN: 44x36 each
- footer legal links: 24 to 26 px tall

### Head tags (curl)
- `<title>Débouchage 24h/24 autour de Bruxelles | Prix dit au téléphone</title>`
- meta description: "Canalisation, WC ou égout bouché ? Déboucheur autour de Bruxelles, d'Alost à Louvain et de Malines à Nivelles, 24h/24. Prix dit au téléphone, confirmé à votre porte. Garantie 30 jours. 0480 649 649."
- `<meta name="robots" content="index, follow">`, NO noindex. Correct.
- canonical `https://prodebouchage24.be/fr/`
- hreflang fr-BE, nl-BE, en-BE and x-default pointing to /fr/
- og:image `og-banner-van-2.jpg`, 1200 wide
- HTML weight 143,011 bytes raw, 28,720 bytes transferred (gzip). One external JS.
- JSON-LD @graph: `["Plumber","EmergencyService"]` with telephone +32480649649, identifier 1027.454.187, address Guldenschaapstraat 6, 1800 Vilvoorde, openingHoursSpecification, areaServed, makesOffer, plus a FAQPage. MISSING: aggregateRating, review, sameAs, geo, hasMap.

### Prices as shown (the "à partir de" grid)
Badges above the grid: "TVA COMPRISE", "DÉPLACEMENT COMPRIS", "PREMIÈRE HEURE COMPRISE".
- WC bouché, à partir de 129 €
- Évier, lavabo ou douche, à partir de 119 €
- Égout ou sterput, haute pression, à partir de 199 €
- Curage haute pression, jusqu'à 25 m, à partir de 249 €
- Pompage de cave inondée, première heure, à partir de 229 €
Surcharge line: "Ces prix de départ valent en semaine, de 7h à 18h. Soir (18h à 22h) et samedi : +50 %. Nuit, dimanche et jours fériés : +75 %. On vous annonce le supplément au téléphone, avec le prix, avant de prendre la route."

### Explicit promises on the page
- "24h/24, 7j/7, même les fériés"
- "Prix dit au téléphone" and "Le prix annoncé au téléphone est le prix sur la facture."
- "Inspection caméra comprise"
- "Débouchage garanti 30 jours" / "Garantie 1 mois sur le débouchage ... Si la même canalisation se rebouche dans les 30 jours, on repasse, et c'est gratuit." plus "Cette garantie s'ajoute à vos droits légaux, elle ne les remplace pas."
- "N° d'entreprise 1027.454.187", "Assurée chez AG Insurance"
- Zone: "d'Alost à Louvain et de Malines à Nivelles, jusqu'à environ 40 km de Wemmel. Bruxelles-ville n'est pas dans notre zone."
- NO arrival-time promise anywhere in the visible copy. The only place it could live is the collapsed FAQ "En combien de temps êtes-vous là ?" at y 17,276 of 19,175.

### consent.js (curl, inspection only)
Before consent: an inline head script sets Consent Mode v2 defaults denied for ad_storage, ad_user_data, ad_personalization, analytics_storage with wait_for_update 500. Nothing else. No third-party script inserted. Confirmed by the network log.
After "Tout accepter": loads `https://www.googletagmanager.com/gtag/js?id=AW-18413234511`, then `gtag('config','AW-18413234511')` and `gtag('config','G-S3SQ25WZMK')`.
PHONE NUMBER SWAP: it exists.
`gtag('config', "AW-18413234511"+'/'+"u0RxCNu5nPUcEM_SjsxE", {'phone_conversion_number':"0480 649 649"})`
Gate: it runs whenever ADS CONSENT is granted. There is NO gclid condition. Every visitor who accepts cookies, paid or organic, gets the displayed number replaced by a Google forwarding number.
CONVERSION GATE: the click handler starts `var a=e.target.closest('a[data-cta]'); if(!a||!loaded) return;`. `loaded` is only true after consent. A visitor who presses "Tout refuser", or who never answers the card and simply scrolls and calls, fires NO `call_click` event and NO Ads conversion.
Consent stored in localStorage key `pd_consent`, version "2026-08-27-purposes", 182 days.

## PHASE 1B, NL, root, EN, desktop, performance

### /nl/ on mobile, same structure, slightly worse first screen
Title "Ontstopping 24/7 rond Brussel | Prijs aan de telefoon", lang nl-BE, docHeight 18,767.
H1 "LOOPT HET TERUG, / LOOPT HET OVER, / STINKT HET? / BEL. WIJ LOSSEN HET OP."
Consent card top is y 189 here, not 224, because the Dutch body text is longer. Result: the card's top edge SLICES THE SECOND H1 LINE HORIZONTALLY THROUGH THE MIDDLE OF THE LETTERS. The screenshot shows "LOOPT HET OVER," cut in half.
Hero buttons "Bel 0480 649 649" (top 492) and "Stuur een foto" (top 570), both under the card. `elementFromPoint(187,560)` returns `BUTTON.c-more` "Zelf kiezen". Call bar opacity 0, pointer-events none. Header call button hidden. Identical to FR.
Consent card NL: "Oproepen meten, met uw akkoord", buttons "Alles weigeren" / "Alles aanvaarden" / "Zelf kiezen", controller "PRO DEBOUCHAGE BV".
The Dutch copy is native persuasive Flemish, not a translation: "sterfput", "ondernemingsnummer", "bestelwagen", "hogedruk", "Bel even, u krijgt meteen ja of nee." The one review carries "Vertaald uit het Frans."

### / (root chooser)
Title "Pro Débouchage | Français · Nederlands · English", docHeight 884 (one screen).
NO cookie card at all. Shows within the first screen: logo, "Choisissez votre langue. Kies uw taal. Choose your language.", three buttons "Français → Débouchage 24h/24", "Nederlands → Ontstopping 24/7", "English → Drain unblocking 24/7", then a BIG RED CALL BUTTON "0480 649 649" (tel:+32480649649), then the legal identity line and the six legal links.
Taps to a call from the root: 2 (button + dialer). The root converts better on the first screen than either landing page does.

### /en/ first screen
Title "Drain unblocking 24/7 around Brussels | Price quoted on the phone", docHeight 18,582.
H1 "BACKING UP, / OVERFLOWING, / SMELLS AWFUL? / CALL. WE'LL SORT IT."
Consent card identical position (y 224 to 726), buttons "Refuse all" / "Accept all" / "Choose". Call bar opacity 0, pointer-events none. Same problem.

### Desktop, 1280x800
The header carries a visible red "Appeler" button at top right (x 1051, y 8, 137x48 px). That is the only call affordance above the fold: the hero buttons "Appeler 0480 649 649" and "Envoyer une photo" sit at y 878, BELOW an 800 px fold (and below a 720 px fold).
The consent card on desktop is a bottom-right panel (x 801-1241, y 235-696). It does NOT cover the header call button. It does cover the last two H1 lines.
The sticky call bar does not exist on desktop (rect 0x0). The floating guarantee badge is at x 1141-1241, y 596-696, inside the consent card's footprint.
Document height 14,126 px at 1280 wide.

### Performance
PageSpeed Insights COULD NOT BE READ. Two attempts (FR and NL, both at pagespeed.web.dev with form_factor mobile) sat on "Running analysis" for over four minutes each and never produced a score. The public PageSpeed API returned HTTP 429 from this machine. Same root cause as Phase 3 below: Google is rate-limiting this IP. No scores, no LCP/CLS/TBT/INP, no field data line. This needs re-running from Fady's own Chrome.
What I could measure directly in the pane, mobile 375x812 DPR 2, on this connection:
- TTFB 111 ms, domInteractive 146 ms, DOMContentLoaded 151 ms, load event 359 ms
- CLS 0 (layout-shift observer, buffered) and 0 long tasks
- FCP and LCP entries were not recorded by this pane's renderer, so I have no paint timing
- 8 resources, 392,759 bytes encoded, plus 28,720 bytes of gzipped HTML = about 421 KB for the first view
- Eagerly loaded before anything below the hero is needed: `archivo-var-latin.woff2` 90,104 B, `van-garden-45-800.avif` 90,074 B, `camera-ecran-800.avif` 80,661 B, `van-sunrise-1200.avif` 73,482 B, `job-wc-800.avif` 44,458 B, `caveat-note.woff2` 6,400 B, `logo-icon.svg` 4,049 B, `consent.js` 3,531 B
- At 375 CSS px with DPR 2 the hero pulls the 1200-wide AVIF and the 800-wide variants, not the 480s

## PHASE 2, the conversion judgment

Benchmarks from `research/19-landing-page-masters-2026-08-26.md`: dedicated contractor landing pages convert 5 to 15 percent, target 12 percent call rate, "under 6% means the page is broken, not the ads". Fears ranked in `research/18-customer-psychology-2026-08-26.md`: 1 phone price != invoice price, 2 cash pressure, 3 not actually fixed, 4 call centre not local, 5 invented extra work, 6 nobody comes tonight, 7 night rate invented afterwards, 8 wrong VAT, 9 tenant paralysis.

### Viewpoint (a): homeowner, water rising, 21:00, on a phone
Makes her call: the H1 is her own sentence, not marketing ("ÇA REMONTE, ÇA DÉBORDE, ÇA PUE ? APPELEZ. ON S'EN OCCUPE."); the sub carries the whole promise in one line, "on vous dit le prix au téléphone, et c'est ce prix-là que vous payez"; once she is past the consent card the button is 64 px tall and reads the number out loud.
Makes her hesitate: the first thing her thumb meets is a Google-measurement dialog over a dimmed page, seconds after RTBF told her to distrust the paid results. At 21:00 she has to work out her own surcharge from a line five screens down (+50 percent between 18h and 22h); nothing near the CTA says "ce soir, ça fait environ X".
Cannot find: how long until someone is at her door. Nowhere on the page, in any language, except a collapsed FAQ at screen 21 of 24. Fear 6 is unanswered. Also nothing that says a human is awake RIGHT NOW as opposed to "24h/24" as a slogan.

### Viewpoint (b): tenant, blocked WC, Sunday
Makes him call: "Locataire. Vous pouvez nous faire venir maintenant. Vous recevez la facture et, sur demande, un rapport d'intervention : de quoi vous faire rembourser par le propriétaire si c'est à lui de payer." That is fear 9 answered exactly as the research asks.
Makes him hesitate: that paragraph is at y 14,421, screen 18 of 24. Sunday is +75 percent and the only place that says so is the small print under the price grid at screen 6, so the number he will hear on the phone is roughly double the 129 € he read. The page never pre-empts that near a CTA.
Cannot find: the tenant answer without scrolling 18 screens; confirmation that a human actually picks up on a Sunday (the FAQ that would say it is collapsed at screen 21).

### Viewpoint (c): Dutch-speaking caller from Mechelen
Makes her call: Mechelen is listed by name; the Dutch is real Flemish ("Bel even, u krijgt meteen ja of nee"), not translated French; "Bel 0480 649 649" is unambiguous.
Makes her hesitate: her first screen is a consent card whose top edge cuts the headline through the middle of the letters. The zone list is at y 15,200, screen 19, so "komen jullie tot in Mechelen?" is answered nineteen screens after the doubt appears. The single review is labelled "Vertaald uit het Frans", which quietly tells a Flemish reader this is a French-speaking company.
Cannot find: the zone anywhere near the CTA, an arrival window, any Dutch-language proof.

### RANKED CONVERSION GAPS

1. HIGH. On a phone the first screen has no tappable way to call. Evidence: `.consent` fixed z290 covering y 224 to 726 while the hero call button sits at y 535 to 599, and `elementFromPoint(187,560)` returns `BUTTON.c-more` "Choisir"; `.callbar` is opacity 0 with pointer-events none until ~650 px of scroll; `a.header-call` has `offsetParent === null` at phone width. Why it costs calls: research law 15 says the first screen gets 57 percent of viewing time and must carry H1 plus promise plus CTA, and law 14 says the click-to-call IS the conversion. Both are broken on the only device the ads target. The visitor pays a tap on a cookie dialog before she can pay a tap on the phone. Who fixes: page source.

2. HIGH. The page never says how fast anyone arrives. Evidence: no arrival window in any visible copy; the question exists only as the collapsed FAQ "En combien de temps êtes-vous là ?" at y 17,276 of 19,175 (screen 21 of 24). Why it costs calls: fear 6 in the psychology file, and the winning review vocabulary there is "fast callback, on time". A caller with water on the floor is choosing between two or three numbers on speed, and we are the one that does not say. Who fixes: page source, but it needs Roro to commit a window he can actually keep (research law 17: print only the promise he can keep).

3. HIGH. Call conversions are only counted for visitors who accept cookies. Evidence in consent.js: `if(!a||!loaded) return;` guards the whole CTA click handler, `loaded` only becomes true after a consent choice, and the Ads conversion additionally requires `state.ads`. Why it costs calls: it does not cost calls, it HIDES them, which is the reported symptom. Everyone who taps "Tout refuser", and everyone who scrolls past the card and taps the sticky bar without answering, calls invisibly. Smart Bidding is then trained on the accepting minority only. Before concluding the page does not convert, this has to be ruled out. Who fixes: ads (verify Consent Mode v2 modelling in the Ads account, and add a consent-independent count such as the call asset or a call-only campaign) plus page source.

4. MEDIUM-HIGH. The first thing an emergency visitor reads is about Google measurement. Evidence: "Mesurer les appels, avec votre accord" and 502 px of consent card over a page dimmed by `.c-dim` rgba(16,42,74,0.34) across the full viewport. Why it costs calls: the psychology file gives this caller 8 to 20 seconds; a third of it goes to a topic she did not come for. The research also records that Belgian consumer press told people the top Google results are paid and untrustworthy, so the very first impression must be the drain offer, not a data dialog. Who fixes: page source (bottom sheet that never covers the CTA, or show it after the first scroll or the first tap).

5. MEDIUM-HIGH. The phone number swap is not gated on a Google click. Evidence: `gtag('config', "AW-18413234511/u0RxCNu5nPUcEM_SjsxE", {'phone_conversion_number':"0480 649 649"})` runs on any granted ads consent, with no gclid, gbraid or wbraid condition. Why it costs calls: an organic, direct or returning visitor who accepted cookies is shown a Google forwarding number rather than 0480 649 649. Forwarding numbers expire and are recycled, so a saved number can stop working, and a number that does not match the van and the invoice is exactly fear 4 ("call centre, not local"). Who fixes: page source.

6. MEDIUM. No price figure and no town name on the first screen. Evidence: the hero sub promises a future price ("on vous dit le prix au téléphone") but shows no number; the trust strip with "Prix dit au téléphone" and "N° d'entreprise 1027.454.187" is at y 1,141, below the fold; the figures 129 € / 119 € / 199 € are at y 4,317. Why it costs calls: law 12 says answer the rip-off objection above the fold with a written price, and law 3 says the top of the page must confirm the search. Someone who typed "wc bouché urgence" gets a headline about smells and no number. Who fixes: page source.

7. MEDIUM. Six of the in-page CTAs are 25 px tall text links. Evidence: each service card's "Appeler" measures 273 to 275 px wide by 25 px tall; the footer "Appeler 0480 649 649" is 175x17. Google's own guidance is 48 px, Apple's 44. Why it costs calls: mis-taps on a phone held by someone standing in water, on the six cards that exist precisely to catch the visitor at the moment she recognises her problem. Who fixes: page source.

8. MEDIUM. The floating guarantee badge covers the page's own trust sentences. Evidence: `div.guar-float` fixed, z 95, 78x78 px at x 283-361, y 648-726 on every mobile screen. Observed hiding the end of "Le prix est dit au téléphone et c[onfirmé] à votre porte, avant de commencer" and "le prix étai[t] très raisonnable pour la qualité du service". Why it costs calls: the covered lines are the honesty lines, and a page that hides its own words looks careless to someone who was told to look for carelessness. Who fixes: page source.

9. MEDIUM. The page is 23.6 phone screens and the deciding facts are spread across them. Evidence: prices at screen 6, the scam answer at screen 8, the named human at screen 9, the tenant answer at screen 18, the zone at screen 19, the FAQ at screen 20. Why it costs calls: the persona gives the page 8 to 20 seconds and will call two or three numbers. Everything after screen 9 is written for a reader who no longer exists at 21:00. The zone in particular is a yes/no question that decides whether to call at all, and it is nineteen screens down. Who fixes: page source.

10. MEDIUM. The proof is one review, and the page volunteers that twice. Evidence: "Un seul avis, parce qu'on ne publie que les vrais.", "Notre page Google arrive bientôt.", and no aggregateRating or review in the JSON-LD. Why it costs calls: a competitor row in the Maps pack showing a star rating and a review count outranks one testimonial in a two-second comparison. The page handles the weakness as honestly as research law 18 asks, so this is not a page bug. Who fixes: the client. Roro getting the Business Profile live and asking every customer is the single highest-value item on this list that is not code.

11. LOW. On NL the consent card slices the headline. Evidence: card top y 189 on /nl/ against 224 on /fr/, because the Dutch body text is longer, so the second H1 line "LOOPT HET OVER," is cut horizontally through the letters. Why it costs calls: first impression of brokenness for the Dutch-speaking half of the zone. Who fixes: page source.

12. LOW. The hero downloads about 285 KB of photos and a 90 KB variable font before anything below the hero is needed, and serves a 1200 px hero image to a 375 px screen. Evidence: `van-sunrise-1200.avif` 73,482 B, `van-garden-45-800.avif` 90,074 B, `camera-ecran-800.avif` 80,661 B, `job-wc-800.avif` 44,458 B, `archivo-var-latin.woff2` 90,104 B, all starting at 134 ms. Why it costs calls: research law 16 prices speed at roughly 7 percent per second. On this connection it is invisible (load event 359 ms), but the caller is on a phone in a cellar. Not proven to be a problem without the PageSpeed field data I could not get. Who fixes: page source.

### What the page does WELL (do not "fix" these)
- Zero third-party requests before consent, with Consent Mode v2 defaults set to denied in the head. Legally clean and genuinely rare; the banner also puts "Tout refuser" first.
- Price transparency done properly: five all-in starting figures with "TVA COMPRISE / DÉPLACEMENT COMPRIS / PREMIÈRE HEURE COMPRISE", and the surcharge grid (+50 percent evening and Saturday, +75 percent night, Sunday and holidays) published rather than hidden. The research calls volunteering the most expensive number the strongest honesty signal there is.
- The scam section answers the region's real court case point by point with negative promises: "Pas de prix au mètre, pas de compteur à l'heure, pas de supplément inventé à la porte." That is fear 1 met head on, and no competitor can paste it.
- A named human with a face, a photographed marked van, the enterprise number, the real address and the insurer. Fear 4 is fully answered.
- FR and NL are both native persuasive copy in the page's voice, not translations, and the NL review is honestly labelled as translated. No fake reviews, no fake counters, no unproven claims anywhere.
- Zero forms, 20 correct tel: links, and WhatsApp kept clearly secondary with a genuinely useful prefilled message ("Voici une photo et ma commune : ").

### Honest overall verdict
The copy, the offer and the trust-building are strong: on the evidence of the two research files this page says almost everything it should say, and says it better than the category. The problem is not what the page says, it is that on a phone the visitor cannot act on the first screen, cannot learn when help arrives, and may be calling without the call ever being counted. Gaps 1, 2 and 3 are worth more than the other nine put together.

## PHASE 3, the search results
NOT DONE. Blocked at the first query.
`https://www.google.be/search?q=d%C3%A9bouchage+bruxelles&hl=fr` redirected to a Google verification page: "Nos systèmes ont détecté un trafic exceptionnel sur votre réseau informatique. Cette page permet de vérifier que c'est bien vous qui envoyez des requêtes, et non un robot." with IP 2a02:a020:54b:dc02:7d73:758f:c081:9da9 and timestamp 2026-09-16T18:46:49Z.
Per the brief I stopped the phase and did not attempt the CAPTCHA. None of the eight queries were run, so there is no data on our ad's presence, competitor ad text, the local pack or the organic results.
The same block is almost certainly why PageSpeed Insights never returned and why the PageSpeed API answered HTTP 429: the in-app Browser pane's IP is rate-limited by Google.
To get Phase 3, it has to run from Fady's own Chrome (Profile 4 or Profile 6), and the same session can re-run PageSpeed there.
