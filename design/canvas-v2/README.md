# design/canvas-v2, the page source and how to ship it

*Created 2026-08-24 on Fady's yes so no session re-derives the commands. The copy lives in `page-template.js` (FR and NL) and `copy-en.js` (EN); `legal.js` holds the privacy pages; `build-site.js` generates `site-v2/`, which is never edited by hand.*

## The round, in order

1. Edit the source: `page-template.js`, `copy-en.js`, `legal.js`, or `../ds-bundle/styles.css`.
2. Rebuild (from the project root):

```bash
node design/canvas-v2/build-site.js
```

   The build WARNS about placeholder reviews. That warning is the go-live tripwire: clear it with real reviews, never silence it.

   Since 2026-08-25 (Fady's merge call) the hero-ticker design IS the site: no design flag, one build, one
   output `site-v2/`. The old `HERO_TICKER` flag and `site-v2-hero/` are gone; parked design options are
   listed at the bottom of this file.

   One flag remains on the same command:
   - `ADS_TAG_ID=AW-XXXXXXXXXX` (the Ads session, once the account exists) builds the consent + Google-tag
     layer: Consent Mode v2 default-denied stub, the trilingual banner (equal Refuse/Accept, localStorage,
     182 days), `assets/js/consent.js`, the tag-day footer credit, the tag-day privacy section, the
     "Cookies et mesure" reopen link and the Google CSP in `_headers`. Optional on the same build:
     `ADS_CALL_LABEL` and `ADS_WA_LABEL`, the two conversion labels from the Ads account; with them every
     `data-cta` call or WhatsApp click also fires a `send_to` conversion. WITHOUT `ADS_TAG_ID` none of
     this exists in the output (research/13 section 8.3) and every "no cookies" line stays true. Prove the
     tag on the wire before any spend (research/13 section 8.3, ads-program.md).

3. Deploy. Two rules from the taxi lessons: `unset CLOUDFLARE_API_TOKEN` first (else wrangler hits the wrong account, error code 10000), and run from a folder OUTSIDE the project with `WRANGLER_CACHE_DIR` set, so no `.wrangler/` with personal data lands in the site folder:

```bash
cd "$TMPDIR" && unset CLOUDFLARE_API_TOKEN && export WRANGLER_CACHE_DIR="$PWD/.wrangler-cache" && npx wrangler pages deploy "C:\Users\fadya\Desktop\pro-debouchage\site-v2" --project-name prodebouchage24 --branch main --commit-dirty=true
```

4. Verify on the deployed preview, the ONLY review surface: https://prodebouchage24.pages.dev/fr/ (and /nl/, /en/). Check the changed strings are live and the layout holds. A round is done only when deployed AND verified there (AGENTS.md section 10).

## Retired preview hosts (2026-08-25 consolidation)

`drain-prodebouchage-v2.pages.dev` (classic build) and its `hero.` branch alias were the split-test
surfaces; both are retired, the ONE working surface is https://prodebouchage24.pages.dev. The v1 backup
preview (drain-prodebouchage.pages.dev) is untouched and comes down at go-live (NOW.md).

## Parked options (exist in source, off by default, never delete)

- **Classic collage hero and header**: `page-template.js`, the non-ticker branches (`opts.ticker` false).
  The build always passes `ticker: true` since 2026-08-25; flip it in `build-site.js` to resurrect.
- **Hero chips (24/7, price, experience)**: markup ships, hidden by one commented CSS rule,
  `.hero-t .chips { display: none; }` in `../ds-bundle/styles.css`. Delete that rule to bring them back.
- **Desktop image ticker on mobile**: mobile shows the swipe carousel instead via CSS; the two-row
  mobile ticker code stays in `page-template.js` (rows A/B, opposite directions).
- **Mobile short-copy trust ticker**: copy parked as `trustShort` in `page-template.js` and `copy-en.js`;
  the desktop counter-scrolling trust band ships, the mobile band is static.

## Retired: the canvas

The canvas artifact (https://claude.ai/code/artifact/1f9a2cc8-0f37-4880-b300-9303f6a4e56f) was retired from the workflow on 2026-08-24: Fady reviews the real preview, not the canvas. The artifact stays frozen; `make-canvas.js`, the `*.dc.html` artboards, `canvas.json` and `pro-debouchage-v2-landing.html` remain in this folder as history only. Do not re-seed or republish unless Fady asks.
