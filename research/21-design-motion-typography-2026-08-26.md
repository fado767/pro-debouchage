# 21. Award-level design, typography and motion research

*Date 2026-08-26, overnight v3 session. Agent: Claude, model Opus 5. Condensed; decisions baked into
design/canvas-v3/styles.css. Keep for the reasoning behind the v3 look.*

## The strategic finding

FR/NL trade vocabulary is long (DÉBOUCHAGE, ONTSTOPPING, RIOOLREINIGING). At 390px, a normal grotesque
caps out around 48px per 12-char word; a condensed cut reaches ~60px. Resolution: **a variable width
axis**: narrow on mobile, wide on desktop, one file. Hence Archivo Variable (wght 100-900, wdth 62-125,
OFL) as both display and body: v3 sets display at wdth ~76% mobile → ~104% desktop, wght 850-875,
uppercase, lh ~0.95. Check the real longest words per language, not the clamp.

## Reference sites and what was taken

By-Kin (restraint: typographic hierarchy carries everything, transitions never the story; skip its
smooth scroll), Uncommon Studio (hold a strict grid, break it once where it matters), Mat Voyce
(animation must never delay reading: H1 and phone number NEVER animate), Momento Legal (trust-first
service + luxury-minimal bold type are compatible), Van Acker (detail-crop strategy for phone photos),
Made Thought's The Red (single-accent discipline), Leve Hytter (caption system: place + fact makes
amateur photos documentary), Bakstad/Barr Build (oversized type + deliberately unglamorous words:
"ON EN A VU D'AUTRES" at 96px works; "EXCELLENCE." is slop). Common thread: nothing centred; asymmetry
is the signature of authorship.

## Type scale (WCAG-safe: every clamp max <= 2.5x min, rem in min/max)

Display 46→108px, H2 30→66, with text-wrap balance on headings, pretty on paragraphs, hyphens manual
with &shy; for Dutch compounds, lh 0.9 needs padding-top .08em against accent clipping.

## Motion system (budget: five behaviours)

1. Section reveals: IntersectionObserver + .in class, no-js safe (hidden state only exists under .js),
   stagger capped at 3, never above the fold. Scroll-driven `animation-timeline: view()` as progressive
   enhancement only (~84% support mid-2026; Safari 26+, Firefox partial).
2. Sticky bar: transform-based, reserved space from first paint.
3. Marquee: transform-only, duplicate set aria-hidden, reduced-motion → static wrapped list (WCAG 2.2.2).
4. Steps progress rule: the ONE scroll-scrubbed animation that earns its keep (motion = progress).
5. CTA press: scale .975, focus-visible ring. No pulsing, no shimmer.
Dated and banned: AOS fade-everything, hero parallax, scroll hijacking, cursor followers, split-text
body copy, section snap, loading screens.

## Components

Before/after: real `input type=range` overlaying the figure (keyboard/AT for free), `clip-path: inset()`
(composites, no reflow), `touch-action: pan-y` so vertical swipes still scroll (the #1 mobile bug),
same crop both frames, honest caption, max 1-3 per page. Carousel: scroll-snap + JS dots via IO (no
scroll listeners), 78vw slides so the next peeks; CSS ::scroll-marker still Chromium-only.
FAQ: details[name] exclusive (Chrome 120+/Safari 17.2+/FF 130+, degrades to independent), summary 56px,
::details-content transition Chromium-only and cosmetic. Prices: editorial table, not three cards with
a ribbon. Footer: the phone number is the biggest element.

## Photography treatment

Fewer photos, one treatment, all captioned, two crop ratios (4:5 detail, 3:2 wide). Normalise before
stylising. Duotone only on atmosphere, NEVER on evidence (proof photos stay unedited). Grain optional
via a tiled 120px noise asset (not shipped in v3: photos kept clean). Strip EXIF (GPS!).

## Performance budget (applied)

Inline critical CSS; one preloaded font file (crossorigin), metric-matched fallback via size-adjust/
ascent/descent overrides; hero LCP = the H1 TEXT node (no full-bleed hero image); JS < 8KB inline,
IO only; AVIF-first pictures with width/height everywhere; total critical path target ≤ 90KB.

## Anti-slop build rules enforced

Hard-left hero, no three-icon cards (numbered editorial rows), one accent (red = call only), square
edges (trade brand), hairlines not shadows, no emoji, no stock, no gradients except the marker stroke,
sections with different layouts, phone number as the design.
