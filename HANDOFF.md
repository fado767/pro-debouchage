# HANDOFF.md

*Written by the last session for the next one. Overwritten at every close. Max 40 lines.*

**Written 2026-08-23 late evening, at the end of the v2 design session (Claude Code, Fable 5 then Opus 5). Everything is filed: STATE, NOW, DECISIONS, LOG. Fady closed the session deliberately and will open the next one when he is ready. 2026-08-24 is a new day and the depot visit day, so the next session starts with `/pro-orch`.**

## What this session did
- **Ten rounds of design feedback on v2, each one deployed and republished to the canvas.** Fixed borderless header, Fady's monogram as the logo (no wordmark), three-photo hero collage from his enhanced van shot plus lifestyle-1 and lifestyle-12, equal-width CTA pairs that fill their container, 2x2 price cards, teal chips, a segmented FR/NL/EN language switch, titles at weight 900, icon-only WhatsApp in the sticky bar.
- **English added as a third language.** `/en/` is live. Copy written by an Opus 5 agent into `design/canvas-v2/copy-en.js` and `meta-en.js`, 75 keys, key-for-key with FR and NL. The language list is declared once in `LANGS` in `page-template.js`; header, footer, chooser, 404, hreflang and sitemap all read from it, so a fourth language is one line.
- **Three read-only Opus 5 audits at the close** (build health, copy and rules, live site). Everything mechanical they found was fixed the same session; everything that is a judgement call was filed, not silently changed.

## Where things stand
- **Live:** https://drain-prodebouchage-v2.pages.dev in `/fr/`, `/nl/`, `/en/` (noindex). v1 untouched at https://drain-prodebouchage.pages.dev. Canvas: https://claude.ai/code/artifact/1f9a2cc8-0f37-4880-b300-9303f6a4e56f
- **Sources of truth:** `design/canvas-v2/page-template.js` (FR and NL copy plus markup), `design/canvas-v2/copy-en.js` and `meta-en.js` (English), `design/ds-bundle/styles.css` (design system). `site-v2/` is generated, never edited by hand. Rebuild `node design/canvas-v2/build-site.js`, artboards `node design/canvas-v2/make-canvas.js`. Deploy from the scratchpad: `unset CLOUDFLARE_API_TOKEN` then `npx wrangler@latest pages deploy "C:/Users/fadya/Desktop/pro-debouchage/site-v2" --project-name drain-prodebouchage-v2 --branch main --commit-dirty=true`.
- **The build now warns on every run** naming how many placeholder reviews are still in each language. That warning is the go-live tripwire; do not silence it, clear it.

## The blockers, in order, all in NOW.md
1. **VAT.** The page promises VAT-included prices, 6 and 21 percent rates and a VAT receipt, in three languages, while the register shows no VAT quality for PRO DEBOUCHAGE SRL. Either Roro produces the number or all of it comes out. Biggest thing found tonight.
2. **Twelve invented reviews**, four per language, and the Dutch set is different people from the French and English sets. The honest replacement must be ONE shared set, not three translated ones.
3. **Two unconfirmed claims:** the insurance-report promise (inherited from the old fake .com site, never confirmed by Roro) and "the most common case, often solved in one visit" on a history of three jobs.
4. **v1 still shows the owner's name** ("Roro et Afram") on the live v1 preview, against the naming decision. Rebuild v1 or take it down.
5. The three earlier honesty checks (flat 6 percent VAT, "about 80 other towns", the "elsewhere 120 to 180 euro" comparison) are unchanged and still waiting on Fady's wording.

## Two things not to re-litigate
- **The fixed header works, now confirmed twice.** Measured by this session on the deployed page and independently by the live-site audit across all nine combinations of three languages and three widths: the computed position is `fixed` and the top is exactly 0 at scroll 500, 2000 and 6000. What moves is the canvas, because a full-height artboard has nothing to scroll inside it. Judge it on the live URL, never on the canvas. Four artboards are now real device viewports so they scroll internally.
- **No "20 years experience" chip.** AGENTS.md rule 1 names that exact claim as forbidden and the company exists since 2025-09-10. Options are in NOW.md.

## Rule improvements proposed today, applied only on Fady's yes
- Add `design/` to AGENTS.md section 3: the design pack and the v2 page source; `site-v2/` is generated output.
- Add to section 7: after any round of design edits, rebuild and check the generated CSS, because the page-extras block is appended last and has silently overridden the design system three times now.
- Add to section 10: a design round is not done until it is deployed AND the canvas is re-seeded, so what Fady looks at is never one round behind.
