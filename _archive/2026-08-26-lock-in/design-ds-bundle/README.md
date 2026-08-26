# DESIGN.md, Pro Débouchage landing page (v2 design system, 2026-08-23)

*Read this before drawing anything and again before every section. It is the one source for colours, type, spacing and components. It refines the v1 tokens from `research/06` so v2 builds on v1 instead of starting over. Real business: Pro Débouchage, a one-van drain-unblocking company in Vilvoorde, Belgium. Customers: stressed homeowners on a phone, water rising, comparing three numbers. The page has one job: the phone call.*

## 1. Visual theme and atmosphere

**Named direction: "the honest trade sign".** Think of the hand-painted price board at a Belgian garage and of Belgian public-service signage (bpost, De Lijn, the commune notice board): big condensed capitals, flat strong colour, black-on-paper numbers, nothing decorative, everything legible from across the street. Layered on a Swiss-grid discipline: one column on mobile, a firm asymmetric two-column grid on desktop, generous margins, photos that bleed off the edge. The feeling when you land: "a real company, a real van, a real price, someone will come". Not a tech product, not a showroom, not an agency portfolio.

Tone in three words: **plain, local, certain.**

What makes it look unlike a generated page: a real photo in the first screen (the van and the technician), a price in the first scroll, the enterprise number in the trust bar, condensed display type in warm ink on warm paper, no gradients, no icon grid, no centred hero, one single accent colour used only on the call button, real captions that name what is in the picture.

## 2. Colour palette and roles

All derived from the printed logo (blue to teal, yellow to orange-red). The logo carries six colours; the page carries three plus neutrals. No new hues, only tints and shades of these.

| Token | Hex | Role | Contrast |
|---|---|---|---|
| `--ink` | `#102A4A` | Dominant. Headlines, dark bands (S8 scam block, S11 final call, footer), sticky bar background, the step numerals. | white on ink 14.5:1 |
| `--ink-2` | `#1B3D66` | Hover or lighter ink surfaces inside a dark band. | white 9.6:1 |
| `--cta` | `#D63A17` | THE accent. Call buttons and call links only. Nothing else on the page is this colour. | white on cta 4.69:1 AA |
| `--cta-press` | `#B72F11` | Pressed and hover state of call buttons. | white 6.4:1 |
| `--teal` | `#0B7A70` | Secondary: the WhatsApp button outline and its text, the "Comprise" badge, ticks in the trust bar, the focus ring. | white on teal 5.2:1 |
| `--teal-soft` | `#E6F2F0` | Tint behind teal chips and the eyebrow pill. | |
| `--mark` | `#FFD635` | The logo yellow, used only as a 4 px underline or a text highlight (marker stroke behind the price promise). Never a background for white text, never a button. | ink on mark 10.3:1 |
| `--paper` | `#F6F3EE` | Page background. Warm, not grey, not pure white. | |
| `--card` | `#FFFCF7` | Cards and the table. Warm white, never `#FFFFFF`. | ink on card 15.5:1 |
| `--line` | `#E2DCD3` | Hairlines, only where space and background shift are not enough. | |
| `--text` | `#1B2733` | Body text. | 13.8:1 on paper |
| `--muted` | `#5A6672` | Captions, terms, legal lines. | 5.6:1 on paper |
| `--on-ink-muted` | `#C8D6E6` | Secondary text on ink bands. | 9.9:1 on ink |

Rules: the call button is the only red object on the page. The yellow never touches white text. Dark bands are `--ink`, never black, never a gradient. No colour is used "to decorate": each colour above has one job.

## 3. Typography

Self-hosted, two files only (WOFF2, latin + latin-ext for é è ê ë à â ç î ï ô û ù ü œ ij), `font-display: swap`, with a `size-adjust` fallback so the text never jumps.

- **Display: Archivo, weight 800**, uppercase is NOT the default (sentence case headlines), letter-spacing `-0.02em`. Continuity with the printed brand and v1. H1 `clamp(2.25rem, 7vw, 4.25rem)`, line-height 1.02. H2 `clamp(1.75rem, 4.6vw, 2.6rem)`, line-height 1.08. H3 `1.2rem`, line-height 1.25. Prices `clamp(2.5rem, 6vw, 3.25rem)`, tabular numerals. The big phone number in S11: `clamp(2.25rem, 8vw, 3.75rem)`.
- **Body: Archivo, weight 400** (the same family, so one voice, two weights), `1.0625rem` on mobile and `1.125rem` on desktop, line-height 1.6, measure 60 to 66 characters, left aligned. Emphasis uses weight 600 sparingly, obtained from the variable font or a third file only if the variable font is unavailable (then the body stays 400 and "strong" is rendered at 400 with `--ink` colour instead of a bolder weight).
- Why Archivo: a grotesque born for signage, wide enough to stay legible in condensed capitals on the van and in a 4 rem headline on a phone, with complete French and Dutch diacritics, and it is what the brand already uses. Not Inter, not Roboto, not a serif-on-cream.
- Numbers (phone, prices, hours): `font-variant-numeric: tabular-nums`. The phone number is always real text, never an image.
- Type scale: 0.8125 / 0.875 / 1 / 1.0625 / 1.125 / 1.2 / 1.5 / 1.75 / 2.25 / 2.6 / 3.25 / 4.25 rem. Big jumps between levels; hierarchy by size and colour, not by adding families.
- French typography: narrow no-break space (U+202F, or `&#8239;`) before `? ! : ;` and before `€`. Dutch: none. Decimal comma in both.

## 4. Component styling and states

**Primary call button (`.btn-call`).** `--cta` background, white text 700 (or 800 Archivo at 1.0625rem), radius 12 px, min height 64 px on mobile and 56 px on desktop, full width on mobile up to 460 px, padding 0 24 px, a phone glyph (inline SVG, 20 px, currentColor) left of the label, `box-shadow: 0 2px 0 var(--cta-press)` so it reads as a physical key. Hover and focus: `--cta-press` background, shadow `0 2px 0 #8E2409`. Active: `translateY(1px)` and no shadow. Focus-visible: 3 px `--teal` ring at 2 px offset, on light and on dark bands. Disabled: not used (a phone link is never disabled).

**Secondary WhatsApp button (`.btn-wa`).** Transparent background, 2 px `--teal` border, `--teal` text, 48 px tall, at most 60 percent of the primary's width on mobile (never the same size as the call button), WhatsApp glyph inline SVG 20 px. Hover: `--teal-soft` background. On an ink band: white text, `#6FBFB6` border, hover `rgba(255,255,255,.08)`.

**Text call link (`.link-call`).** `--cta` text, weight 600, underline offset 3 px. Used at the bottom of every service card and the zone block. Hover: `--cta-press`.

**Sticky call bar (mobile, `.callbar`).** Fixed bottom, `z-index: 100`, `--ink` background, 64 px plus `env(safe-area-inset-bottom)`, two cells: the call cell 75 percent wide `--cta` with "Appeler 0480 649 649", the WhatsApp cell 25 percent `--teal`. `body { padding-bottom: calc(64px + env(safe-area-inset-bottom) + 16px) }` so the footer legal lines are never covered. Hidden at 1000 px and above, where the header holds the call button and becomes sticky. Nothing may ever overlap the bar (the consent banner, when it comes, sits above it).

**Header (`.site-header`).** Card background, 1 px `--line` bottom border, 12 px vertical padding. Logo lockup at 120 px wide on mobile (height auto, about 75 px) and 148 px on desktop, never bigger. Right side: `FR | NL` switch (current language in `--ink` with a 3 px `--mark` underline, the other in `--muted`), then on desktop the call button at 48 px. Sticky on desktop only.

**Eyebrow (`.eyebrow`).** Inline pill, `--teal-soft` background, `--teal` text 600 at 0.875rem, radius 999 px, padding 6 px 14 px. One per page, in the hero.

**Trust bar (`.trust`).** `--ink` band, 24 px vertical padding, four items white 600 at 0.9375rem, each preceded by a 10 px `--mark` square (not an icon). One column on mobile, two at 700 px, four at 1000 px.

**Section kicker and rule.** Kicker: `--teal` 600 uppercase 0.8125rem, letter-spacing 0.09em (on ink bands: `--mark`). Under the H2 a 56 px by 4 px `--mark` rule, radius 2 px. Every section starts kicker, H2, rule.

**Card (`.card`).** `--card` background, radius 16 px, 24 px padding, no shadow, no border by default; a 1 px `--line` border only on the paper background where the warm white alone does not separate. Never a card inside a card. Never a coloured left strip (the v1 price note had one: replace it with a plain `--card` block and a 4 px `--mark` top rule).

**Price card (`.price-card`).** Card plus: title H3, the amount in Archivo 800 at the price size in `--ink`, the terms at 0.875rem `--muted`, the call button pinned to the bottom with `margin-top: auto`. The fourth card (`.price-cta`) is the same shape on `--ink` with white text and `--on-ink-muted` body. Four across at 1000 px, two at 700 px, one on mobile.

**Service card.** Card plus H3, one or two lines at 1rem, optional `Comprise` / `Inbegrepen` badge (teal pill, 0.75rem uppercase), and the `.link-call` at the bottom. Three across on desktop, two on tablet, one on mobile. Where a real photo exists for the service (WC, camera, haute pression, sterput) the card carries it at the top in 3:2, radius 12 px, with a caption.

**Steps (`.step`).** 44 px `--ink` circle with the numeral in white Archivo 800, then H3 and one line. Four in a row on desktop, two by two on tablet, stacked on mobile.

**Review card (`.review-card`).** Card, 24 px padding. Top row: 40 px round initial in `--teal-soft` with the initial in `--teal` (never a face), name and commune in `--ink` 600, month in `--muted`. Five stars in `--mark` at 18 px as inline SVG (a 4-star review shows four). Text at 1rem. Bottom row: a small grey "G" mark and `Avis Google` / `Google-beoordeling` at 0.8125rem `--muted`. Cards scroll horizontally with snap points on mobile (one card 85 percent wide, the next peeking), three across on desktop. Every placeholder card carries `data-placeholder="true"` and a visible small `PLACEHOLDER` tag in the design file so it can never ship unnoticed.

**Photo tile (`.tile`).** Image at 4:5 or 1:1, radius 16 px, `object-fit: cover`, caption below at 0.875rem `--muted`, two columns on mobile, four on desktop. The caption always states what the photo shows and that it is a real intervention.

**Before and after (`.ba`).** Not on v2 (no real pair exists yet). The component is specified so it can be added: two images same crop side by side on desktop, stacked on mobile with a `--mark` 4 px divider, labels `AVANT` / `APRÈS` (`VOOR` / `NA`) in 0.75rem uppercase, one factual caption under both. No slider.

**FAQ (`details` / `summary`).** Hairline `--line` between items, summary in Archivo 800 at 1.0625rem with a `+` that turns into a minus, answer at 1rem. Native `details`, keyboard operable, no JS.

**Dark band (`.s-ink`).** `--ink` background, white headings, `--on-ink-muted` body, `--mark` kicker, call button unchanged (red on navy passes 4.7:1 for white text inside the button). Used for S8 (scam block) and S11 (final call). Never two dark bands in a row.

**Footer.** `--ink`, two columns on desktop (logo on a `--card` rounded plate 160 px wide, short description, phone and mail; then the legal block), one column on mobile, legal links underlined, the credit line with the auto-updating year `<span id="y">2026</span>`.

**Language chooser (root `/`).** One centred card: logo, "Français ou Nederlands ?", two ghost buttons, the call button, the legal line. Noindex.

**404.** H1, one line, call button, link home, both languages on one page.

## 5. Layout principles and spacing

- 8 px base. Scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96. Section padding 48 px on mobile, 64 px at 700 px, 96 px at 1000 px, but NOT the same everywhere: the trust bar is 24 px, the hero is 32 px top and 48 px bottom, the final call block is 96 px on every screen so the number has air.
- Container `max-width: 1120px`, gutters 16 px mobile, 24 px desktop.
- Mobile first at 375 px (check at 320 px too). Breakpoints: 700 px (two columns start) and 1000 px (desktop: sticky header with call button, bar hidden, hero two columns).
- Hero: on mobile, eyebrow, H1, sub, call button, line under the button, WhatsApp button, then the photo (4:5, full width, radius 20 px) with its caption. The call button must be inside the first viewport on a 375 by 667 screen. On desktop a two-column grid `1.05fr 1fr`, text left, photo right, the photo bleeding to the right edge of the viewport (negative margin) so the layout is visibly asymmetric.
- Break symmetry at least twice: the hero photo bleed, and the S6 block where the studio van sits on white across 60 percent and the three short blocks stack on the right.
- Alternate `--paper` and `--card` section backgrounds so the scroll reads as chapters; exactly two `--ink` bands (S8, S11) plus the footer.
- Left-align body text. Centre only the language chooser and the final call block.
- Headings state the idea of the section in the customer's words; never "Features", "Services", "About".
- One idea per section; if two consecutive sections share a layout, change one.

## 6. Depth and elevation

Flat. Separation by background shift first, by space second, by a hairline last. Exactly two elevated things on the page: the sticky call bar (`0 -2px 12px rgba(16,42,74,.22)`) and the call button's 2 px "key" shadow. No card shadows, no glass, no blur, no glow, no gradient anywhere except inside the logo image itself. Radii: 12 px buttons, 16 px cards, 20 px large images, 999 px pills; nothing else is rounded.

## 7. Do and do not

Do: real photos with honest captions; the phone number as text in the hero, the bar, S11 and the footer; big numerals; the enterprise number visible; one red object (the call button); condensed display type; warm paper; asymmetric hero; native `details` FAQ; `tel:` and `wa.me` links with `data-cta` attributes; French and Dutch typography rules; alt text on every image; `width` and `height` on every image.

Do not: no gradient (hero, text, buttons, numbers); no Inter, Roboto, Poppins, Space Grotesk, no serif-on-cream; no purple, indigo or violet; no centred hero with two pill buttons; no three-icon feature grid; no decorative icons (an icon stays only where it replaces a word: the phone glyph in the button, the WhatsApp glyph, the stars, the plus in the FAQ); no emoji; no glassmorphism, blobs, orbs or neon; no dark mode; no stock photo, no AI illustration, no image reused across sections; no counters, ratings, review counts, years in business, logos of partners; no hero video or autoplay slider; no parallax, no scroll-jacking, nothing fading in on scroll; no pop-up, no chat bubble, no cookie wall; no form; no navigation menu; no "Learn more" or "Contact us" buttons; no em dashes; no lorem ipsum; no text baked into images; no `#FFFFFF` or `#000000`.

## 8. Responsive behaviour

- 320 to 699 px: one column, sticky bottom bar, call button full width up to 460 px, price cards stacked, towns in two columns, reviews as a horizontal snap scroller, photo tiles two across.
- 700 to 999 px: two-column grids, trust bar two by two, steps two by two, towns three columns, bar still visible.
- 1000 px and up: sticky header with the call button, bar hidden, hero two columns with the photo bleeding right, price cards four across, services three across, trust bar four across, towns four columns, reviews three across, footer two columns.
- Touch targets 48 px minimum, the call button 64 px on mobile.
- `prefers-reduced-motion: reduce` disables the only motion on the page (the `+` rotating in the FAQ and the button press translate).
- Print: hide the bar, keep the number.

## 9. Agent prompt guide (how an AI should use this file)

1. Read sections 2, 3 and 7 before writing any CSS. Declare every colour and size as a CSS custom property named exactly as in section 2. No other colour literal may appear in the stylesheet.
2. Take every string from `02-copy-fr.md` and `03-copy-nl.md` character for character. If a string does not fit a component, say so, do not shorten it.
3. Build mobile first at 375 px, then 700, then 1000. Check 320 px for horizontal overflow.
4. Use the real images from `06-assets-manifest.md` with the alt text given there. Where no real image exists, use type and space, never a placeholder picture.
5. Before you say you are done: render 375 px and 1440 px, squint at the thumbnail (is the red button the obvious next action?), then audit your own output against section 7 and list every rule you broke and why.
