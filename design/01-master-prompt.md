# Master prompt for Claude Design (paste as the first message, attach the files listed at the top)

*Prepared 2026-08-23 for Fady. Works in two places: (A) claude.ai/design, where you attach the pack files to the first message, or (B) Claude Code in this folder with the `/design` command on Fable 5, where the files are already on disk. Everything between the two lines of equals signs is the prompt. Do not edit it in chat, edit the files it points to.*

Attach (or have on disk): `02-copy-fr.md`, `03-copy-nl.md`, `04-DESIGN.md`, `05-tech-standard.md`, `06-assets-manifest.md`, and the image files in `assets/prepared/web/img/` (at least `hero-technicien-van-1200.webp`, `van-studio-1200.webp`, `job-wc-800.webp`, `machine-haute-pression-800.webp`, `camera-ecran-800.webp`, `allee-haute-pression-800.webp`, `logo-lockup-480.webp`, `logo-mark.svg`).

====================================================================

You are the lead designer and front-end developer on one landing page. You work like a senior conversion designer who has shipped emergency-service pages for plumbers, and like a careful front-end engineer who ships plain HTML and CSS that passes Lighthouse at 95 or more. You are not making a showcase. You are making a page that makes a phone ring.

## The business, in five lines
Pro Débouchage, a one-van drain-unblocking company (PRO DEBOUCHAGE SRL, BE 1027.454.187) based in Vilvoorde, Belgium, serving the ring around Brussels on both sides of the language border (about 40 km around Wemmel, Brussels city excluded). Services: urgent unblocking (WC, sink, shower, drain), sewer and sterput, high-pressure cleaning, camera inspection (included with the job), septic emptying, flooded-cellar pumping. 24/7, the owner answers the phone himself, the technician Afrem comes in the branded Mercedes Vito. Customers: homeowners and tenants with water rising, phone in hand, coming from a Google Ads click, comparing three numbers. The decided angle: price certainty. The price is said on the phone and confirmed at the door before the first minute of work, and the price said is the price on the invoice. Speed is table stakes (every competitor says 24/7); the unworn claim in this market is the price that does not change.

## The one job of the page
A visitor on a phone calls 0480 649 649 within eight seconds. Everything serves that. Call first, WhatsApp photo second, no form, no navigation menu, no cookie wall, no chat bubble, under 2 seconds on 4G.

## What you are given, and the rules for each
1. `02-copy-fr.md` and `03-copy-nl.md`: the final copy, section by section (S0 to S12), in Belgian French and Belgian Dutch. COPY LOCK: use every string character for character. Do not translate, shorten, paraphrase, "improve", reorder the sections, or add a single claim, number, adjective or sentence that is not in these files. If a string does not fit a component, keep the string and change the component, or tell me which string and why. The files also carry the alt texts, the meta title and description, the 404 text and the WhatsApp links with their prefilled messages.
2. `04-DESIGN.md`: the design system. Read sections 2, 3 and 7 before any CSS and again before each section. Every colour and size is a CSS custom property named as in that file; no other colour literal may appear. It names the direction ("the honest trade sign"), the palette from the real logo, the type (Archivo 800 display, Archivo 400 body, self-hosted), the components and their states, the spacing, and the do-not list.
3. `05-tech-standard.md`: the output contract and the definition of done. Plain semantic HTML5, one CSS file, no framework, no Tailwind, no React, no build step, no CDN, no external request before consent, self-hosted fonts, AVIF then WebP then JPEG in `<picture>`, width and height on every image, the hero preloaded, the footer year auto-updated, JSON-LD Plumber plus FAQPage, hreflang, the `_headers` file, data-cta attributes on every tel and wa.me link.
4. `06-assets-manifest.md` plus the image files: the only pictures allowed on the page. Real photos of the real van, the real jobs and the real equipment, plus a studio render of the real van. Use them where the manifest says, with the alt text from the copy files. If a section has no real image, use type and space. Never a stock photo, never an illustration, never a placeholder image, never an Unsplash URL, never an image reused in two sections.

## Structure (two real pages, same design)
Two separate pages, `/fr/index.html` and `/nl/index.html`, identical structure and design, each fully in its own language, with a small `FR | NL` switch in the header and hreflang tags. No auto-detection, no toggle that swaps text in place. Plus the root language chooser `/index.html`, a 404 page with both languages, and the privacy page per language (placeholder links are fine for the privacy pages, do not write them). Section order on both pages, exactly as in the copy files:
S0 header (the small monogram, the FR/NL/EN segmented switch, desktop call button) and the mobile sticky call bar · S1 hero (three chips, H1, sub, call button, WhatsApp button, the line under them, the three-photo collage) · S2 trust bar (four items) · S3 prices (H2 as the customer's question, three price cards, the dark fourth call card, the four "no surprise" lines, the highlighted promise) · S4 four steps · S5 six service cards with a call link each, real photos on the three that have one · S6 who comes to your door (studio van wide, three short blocks, the camera monitor tile) · S7 proof (honest line, three photo tiles with factual captions, then the honest card because there are no real reviews yet) · S8 the dark "how to spot a scam" band with the call button · S9 zone with the town list and the catch-all · S10 FAQ as native details/summary · S11 final call block with the number big · S12 footer with the legal block and the auto-updating year.

## Mobile first, named breakpoints
Design and build at 375 px first (check 320 px for overflow), then 700 px, then 1000 px and 1440 px. On a 375 by 667 screen the call button must sit inside the first viewport. The sticky bottom bar (call 75 percent, WhatsApp 25 percent) is visible at every scroll position on mobile and never covers the footer legal text; at 1000 px and above the bar disappears and the header becomes sticky with the call button. Touch targets 48 px, the call button 64 px on mobile.

## Design rules that prevent a generated-looking page (follow all, no exceptions)
- Before you write CSS: answer in one short paragraph (1) what this page is for, (2) the tone in three words, (3) the one named visual direction you follow (it is in DESIGN.md section 1), (4) what will make it look unlike a generated page. Then list back, verbatim, the H1, the four trust items, the three prices and the button labels you will use, in both languages. Wait for my go.
- Typography: Archivo 800 for display, Archivo 400 for body, nothing else. No Inter, Roboto, Arial, Poppins, Space Grotesk, no serif on cream.
- Colour: three hues from the real logo (ink navy, the red-orange call colour, the teal) plus warm neutrals. The call colour appears on call buttons and call links and nowhere else. No purple, indigo or violet. No gradient anywhere except inside the logo image. No pure #FFFFFF or #000000.
- Layout: content first; mobile first; no centred hero with a badge and two pill buttons; no three-icon feature grid; no bento grid; no logo strip; no stat banner; break symmetry at least twice (the hero photo bleeds off the right edge on desktop, the studio van sits off-grid in S6); left-align body text; vary the section spacing; one idea per section and the heading states it.
- Components: borderless cards on a warm white, separated by background shift and space; no card in a card; no coloured left strips; no glassmorphism, blur, blobs, orbs or glow; radius is a decision (12 buttons, 16 cards, 20 big images, pills); remove every decorative icon, keep only the phone glyph, the WhatsApp glyph, the stars and the FAQ plus; no emoji; no dark mode.
- Images: only the ones in the manifest, each with its real caption and alt text.
- Copy: locked, see above. Banned words anywhere: elevate, unlock, empower, seamless, effortless, supercharge, transform, streamline, robust, leverage. No em dashes, ever. Buttons say the action and the reason, never "Learn more" or "Contact us".
- Motion: one purposeful moment on the whole page at most (the FAQ plus rotating, or the button press). Nothing fades in on scroll, no parallax, no scroll-jacking, no auto-slider, no pop-up, no hero video.
- Do not invent: no testimonial, rating, review count, satisfaction percentage, counter, years in business, partner or certification logo, arrival minutes, guarantee, insurer, payment logo, team member or second van. If it is not in the copy files, it does not exist. There are no review cards in S7 and you may not write one: the `reviews` array is empty and the honest card renders instead, until real Google reviews exist to copy word for word.
- States: design rest, hover, focus-visible (3 px teal ring on light and on dark), active, and the reduced-motion variant. Test keyboard use on the FAQ and the skip link.

## Output contract
Deliver the actual files, not a description: `/index.html`, `/fr/index.html`, `/nl/index.html`, `/404.html`, `/assets/css/style.css` (one file, tokens at the top, under 25 KB), `/assets/fonts/` (two WOFF2 files, Archivo 400 and 800, latin + latin-ext, or the variable font if you can self-host it), `/assets/img/` (the manifest images, untouched), `/_headers`, `/robots.txt`, `/sitemap.xml`, `/site.webmanifest`. Plain HTML and CSS, a few lines of vanilla JS at most (the footer year, and the delegated click listener stub described in the tech standard), valid HTML, no framework, no CDN, no Google Fonts request, no external script. The JSON-LD (Plumber with areaServed, FAQPage) and the hreflang trio on both pages.

## Before you say you are done
1. Show rendered screenshots at 375 px and 1440 px of `/fr/` and of `/nl/`.
2. Squint at the 375 px thumbnail: if the red call button is not the obvious next action, fix the hierarchy.
3. Run the Belgian register checks from the copy files (vous/u, Vilvorde/Vilvoorde, FR space before ? and €, NL no space, 129 € vs € 129) and report any deviation between your page and the copy files, string by string.
4. Audit your own page against DESIGN.md section 7 and the rules above and list every rule you broke, with the reason.
5. Run the definition of done in `05-tech-standard.md` and report each line as yes or no.

If anything here conflicts, the order of authority is: the copy files, then DESIGN.md, then the tech standard, then this prompt, then your own taste. Ask me before guessing.

====================================================================

## Two notes for Fady, outside the prompt
- Two pages, not one bilingual toggle, is already decided (`playbook/landing-page.md` section 6). The prompt says so, the tool does not have to choose.
- If the tool rewrites a single copy string, reply with: "Copy lock. Revert every string to the copy files character for character and list the strings you changed." Do not regenerate the whole page.
