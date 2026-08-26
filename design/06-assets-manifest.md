# Assets manifest for the v2 page (2026-08-23)

*Everything the page may show. Files live in `assets/prepared/web/` (ready sizes) and `assets/prepared/magnific/` (masters). Sources in `assets/raw/` are never edited. Every picture below is either Roro's own photo, or a transformation of Roro's own file (upscale, cutout, vectorisation), or a studio render of the real van from its real photo. Nothing shows a job that did not happen. Catalogue and reasoning: `research/12`. Alt texts: `02-copy-fr.md` and `03-copy-nl.md` (last section). Sizes: `name-480/800/1200/1540|1600` in `.avif` and `.webp`, plus one `.jpg` at the largest width as fallback.*

## Brand

| File | What | Where on the page | Notes |
|---|---|---|---|
| `img/logo-mark.svg` | the dP mark, vector (13 KB), gradients kept | favicon (with the PNGs below), small mark next to the phone number in the sticky bar if wanted, the 40 px initial badge style | traced from `assets/raw/icon.png` with Magnific; compare at 100 percent before shipping |
| `img/logo-lockup-480.webp`, `img/logo-lockup-591.png` | the full lockup, transparent | header (120 px wide mobile, 148 px desktop), footer on a warm white plate | from the 591 px JPEG, so never larger than 160 px on screen |
| `img/icon-512.png`, `img/icon-512-maskable.png`, `img/apple-touch-icon-180.png` | icon set | `site.webmanifest`, apple touch icon | maskable has a white field |
| `img/og-banner.jpg` | 1200 by 630, the studio van on white | `og:image` on every page | under 80 KB |

## Photos (real)

| Base name | Source | Crop | Proves | Use | Consent flag |
|---|---|---|---|---|---|
| `hero-technicien-van` (800, 1200, 1540) | `lifestyle-12-Cropped.jpeg` upscaled 2x, faithful mode, lettering and plate checked | 4:5 | a real van at a real house, technician in the open chamber | S1 hero image (mobile and desktop), the LCP element, preload it | customer's house identifiable to a neighbour: ask Roro to confirm it may be shown |
| `van-studio` (800, 1200, 1600) | studio render of the real van from `pro-debouchage-car-1.jpeg` (Nano Banana Pro, reference-guided; orientation and lettering verified against the photo) | 16:9 on white | the real van, livery and number | S6 "who comes to your door", wide on white; `og-banner.jpg` | none; caption it as the van, never as a job |
| `van-photo` (800, 1200) | `pro-debouchage-car-1.jpeg` as shot | 4:3 | same, as a photograph | alternative hero on desktop if Fady prefers a photo to a render | none (no plate readable) |
| `job-wc` (480, 800, 1200) | `lifestyle-10.jpeg` | 4:5 | a real toilet job, the hoodie with the number | S5 service card "WC et évier", S7 proof tile | face not visible; QR code on the hoodie readable: check where it points |
| `machine-haute-pression` (480, 800, 1200) | `lifestyle-3.jpeg` (the no-face frame) | 4:5 | the Rioned jetting unit built into the van | S5 "Curage haute pression", S6 equipment | none (lifestyle-1 is the sharper variant but shows a masked face: use it only with Afrem's consent) |
| `camera-ecran` (480, 800, 1200) | `lifestyle-11.jpeg` | 4:5 | camera inspection with a distance counter | S5 "Inspection caméra", S6 "la caméra", S7 proof tile | none |
| `camera-siphon` (480, 800) | `lifestyle-7.jpeg` | 4:5 | camera going into a floor drain, monitor on | S5 alternative for the camera card | face hidden |
| `camera-moniteur-tenue` (480, 800) | `lifestyle-8.jpeg` | 4:5 | the monitor and the branded hoodie | S6 "who comes" | QR code readable: same check |
| `chambre-visite-jardin` (480, 800) | `lifestyle-4.jpeg` | 4:5 | digging out a buried chamber | S7 proof tile or the "canalisation enterrée" line | none |
| `allee-haute-pression` (480, 800, 1200) | `temporary-low-quality-images/6.jpeg` upscaled 4x | 1:1 | a driveway half cleaned, the only honest in-frame before and after we own | S7 proof tile with the caption that says it is in progress | masked face partly visible; neighbour's hedge |

Not exported on purpose: `lifestyle-9` (face fully visible, consent needed first), `lifestyle-1`, `-2`, `-5`, `-6` (faces or identifiable house; use after consent), `pro-debouchage-car-2` (500 px, weak).

## Video (optional, never above the fold, never autoplay with sound)

| File | What | Use | Verdict |
|---|---|---|---|
| `video/van-pushin-1280.mp4` + `.webm` + `van-pushin-poster.jpg` | 5 s, muted, very slow push-in on the parked van, generated from the real photo (Kling 2.5), lettering checked frame by frame | S6, replacing the static studio van on desktop only, `autoplay muted loop playsinline` with the poster, `prefers-reduced-motion` shows the poster only | nice to have; drop it if LCP or weight suffers |
| `video/haute-pression-720.mp4` + poster | 5 s, muted, the hose reel turning in the open van, generated from `lifestyle-1` | S6 equipment, same rules | optional; the man's masked face is visible, same consent as lifestyle-1 |

## What the page must NOT use

No stock photo, no AI illustration of a flooded cellar or a septic tank (the plan rejected them: they read as stock and invite the "is this real" question), no generated before and after pair (a fabricated job result), no image reused across sections, no smiling model, no Unsplash URL. If a section has no real photo, it uses type and space.

## Still missing, to shoot at the next visit (one hour with a phone)

The van in daylight at the depot with the plate readable, Afrem beside the open rear doors (with his written yes), the pump, the camera reel alone, a real before and after pair of a sterput or a WC (same spot, same height), a wide shot of the van in a residential street. Shot list: `research/06` section 4. Ask Roro: is the man in the photos Afrem, may we publish the frames where his face shows, may we show the house in the hero photo, where does the hoodie QR code point.
