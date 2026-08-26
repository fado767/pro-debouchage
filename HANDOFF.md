# HANDOFF.md

*Written by the last session for the next one. Overwritten at every close. Max 40 lines.*

**Written 2026-08-26, closing the overnight-build-plus-four-review-rounds session. The day is NOT
closed: the next session starts with `/pro-orch-mid` and continues Fady's v3 review, section by
section.**

## The surface
**https://pro-debouchage-v3.pages.dev** (FR /fr/, NL /nl/, EN /en/, privacy + CGV in the footer).
Pages project pro-debouchage-v3, noindex. v2 at prodebouchage24.pages.dev untouched, still fallback.

## The round routine (unchanged discipline)
1. Edit sources in `design/canvas-v3/` (copy-fr/nl/en.js, template.js, styles.css, cgv.js, build.js).
2. `node design/canvas-v3/build.js` (placeholder-review warning is the go-live tripwire).
3. Deploy from a folder OUTSIDE the project, `unset CLOUDFLARE_API_TOKEN`, WRANGLER_CACHE_DIR set:
   `npx wrangler pages deploy site-v3 --project-name pro-debouchage-v3 --branch main --commit-dirty=true`
4. Verify on the deployed URL. Browser pane hidden = no screenshots; verify geometry by DOM
   measurement; MOTION needs Fady's eyes (tickers, reveals, steps animation, seal, FAQ easing).

## Settled through review rounds 1 to 4 (LOG 2026-08-26), do not re-litigate
- Headline: pain lines + "Appelez./Bel./Call." on the yellow marker; per-language size caps (cqw,
  container on .hero .wrap) keep the longest line ~90% of the column at any width; re-measure caps if
  copy, weight, stretch or tracking of the H1 changes.
- BOLD type system (round 4): body 470, leads 520, h3s 900, display 900 at 80% width, tracking -0.03em.
- CSS marquees (never pause), steps line+numbers animation (IO .go), quiet lift on service numbers,
  logo-gradient review cards, nowrap towns, WAAPI fluid FAQ (exclusive), v2-style floating badge +
  popover, static header (only the bottom call bar is fixed), filled teal sticky WhatsApp,
  left-aligned final call with yellow number underline, service-first chip, photo line under CTAs.
- ZONE-FIRST copy rule: never "based in Vilvoorde" (seat is a mailbox, the base is a van); rule in
  landing-page.md section 4, DECISIONS 2026-08-26.

## Next session mode (Fady's ask)
Section-by-section review: Fady goes one section at a time and gives notes; apply, rebuild, deploy,
he refreshes. Keep rounds small. Sections top to bottom: header/hero, ticker+trust, services, steps,
prices+guarantee, before/after, scam, who+van, equipment, proof+reviews, situations, zone, FAQ,
final, footer, plus privacy/CGV pages and the chooser.

## Waiting on whom
- **Fady:** the section notes; backup double-click (changed today: LOG, NOW, STATE, DECISIONS,
  HANDOFF, research/18-23 + INDEX, playbook/landing-page.md, design/canvas-v3/*, site-v3/, new images
  in assets/prepared/web/img, .claude/launch.json); old v2 open calls now answered inside v3.
- **Roro:** nothing (reviews parked DO NOT CHASE).
- **A clock:** VIES still INVALID at the overnight poll; depot visit; invoice session owes the signed
  work-order line (research/22 section 2) and CGV as invoice page 2.
