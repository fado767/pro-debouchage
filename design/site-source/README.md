# design/site-source, THE page source and how to ship it

*This is the one design, locked in on 2026-08-26 (Fady's call after five review rounds). Everything
older (the first page, the v2 design and its packs) is retired to `_archive/` or deleted. If a file
or a note elsewhere still speaks of "v2" or "v3" as something current, this README wins.*

Files: `template.js` (markup, all three languages), `copy-fr.js` / `copy-nl.js` / `copy-en.js`
(the copy, native per language, never literal translations), `styles.css` (the design system,
inlined into every page), `cgv.js` (general terms pages), `legal.js` (privacy pages),
`build.js` (assembly), two `archivo-var-*.woff2` fonts. Images come from
`assets/prepared/web/img/` (the build fails loudly if one is missing).

**Never let `styles.css` start with a byte order mark.** It is inlined into `<style>`, where a
leading BOM swallows the first rule, which is the main Archivo `@font-face`; the site then falls
back to Arial and every weight above 600 looks the same. `build.js` strips it and asserts, but do
not rely on that: save the file without BOM.

## The round, in order

1. Edit the sources here, never in `site-v1/` (generated, wiped on every build).
2. Rebuild (from the project root):

```bash
node design/site-source/build.js
```

   The placeholder-review tripwire was cleared 2026-08-27 (Paolo's real review ships as the
   featured card; the invented cards are deleted). The remaining build warning is the Afrem
   avatar monogram, cleared when his photo lands at the depot visit.

   One flag on the same command, for the Ads session once the account exists:
   - `ADS_TAG_ID=AW-XXXXXXXXXX` builds the consent + Google-tag layer: Consent Mode v2
     default-denied stub, the trilingual banner (equal Refuse/Accept, localStorage, 182 days),
     `assets/js/consent.js`, the tag-day footer credit and privacy section, the reopen link and the
     Google CSP in `_headers`. Optional on the same build: `ADS_CALL_LABEL` and `ADS_WA_LABEL`, the
     two conversion labels from the Ads account; with them every `data-cta` call or WhatsApp click
     also fires a `send_to` conversion. WITHOUT `ADS_TAG_ID` none of this exists in the output and
     every "no cookies" line stays true. Prove the tag on the wire before any spend
     (research/13 section 8.3, ads-program.md).

3. Deploy. Two rules from the taxi lessons: `unset CLOUDFLARE_API_TOKEN` first (else wrangler hits
   the wrong account, error code 10000), and run from a folder OUTSIDE the project with
   `WRANGLER_CACHE_DIR` set, so no `.wrangler/` with personal data lands in the site folder:

```bash
cd "$TMPDIR" && unset CLOUDFLARE_API_TOKEN && export WRANGLER_CACHE_DIR="$PWD/.wrangler-cache" && npx wrangler pages deploy "C:\Users\fadya\Desktop\pro-debouchage\site-v1" --project-name prodebouchage24 --branch main --commit-dirty=true
```

   (THE project is `prodebouchage24` since 2026-08-27, Fady's go-live pick: it carries the live
   domain prodebouchage24.be AND the review surface, its pages.dev host stays noindexed by the
   `_headers` placeholders. `pd-review` and the frozen `pro-debouchage-v3` are retired, deletion
   is a NOW line.)

4. Verify on the deployed preview, the ONLY review surface:
   https://pd-review.pages.dev/fr/ (and /nl/, /en/). Check the changed strings are live and
   the layout holds. A round is done only when deployed AND verified there (AGENTS.md section 10).
   The preview pane cannot see motion (hidden documents freeze animations and starve
   IntersectionObserver), so verify geometry by DOM measurement and leave motion to Fady's eyes.
   For visual widgets, assert on what is VISIBLE (hit-test the pixels), not on whether a control
   fires: the before/after slider shipped dead for a day because only the control was checked.

## Verification notes

- Headline fit: each language carries a measured cap (`--h1-cap` in `styles.css`); re-measure all
  three caps if the H1's copy, weight, width or tracking changes.
- noindex: the HTML meta says `index, follow` ON PURPOSE (that is what the real domain ships);
  `_headers` scopes `X-Robots-Tag: noindex` to the `*.pages.dev` preview hosts only.
- The EN terms page is a deliberate courtesy summary that names FR/NL as the binding versions;
  it is much shorter than the FR and NL pages by design.
- **The two marquees have two failure modes, both invisible in a quick look.** (1) Each animated
  set slides by its own width, so a set NARROWER than the screen leaves an empty stretch at the end
  of every cycle: keep every set above 3840px (`TRUST_REPEAT` / `TICK_REPEAT` in `template.js`) and
  keep `--tick-dur` scaled by the same number of copies or the speed changes. (2) A `loading="lazy"`
  image moved into view BY A TRANSFORM never loads, because the compositor does not recompute
  intersections: the photo strip sat half blank until a mouse move. The page script watches the
  static `.ticker` container and promotes its images once. Never fix that by making them eager in
  the markup, which would download the whole strip on phones that never display it.
- **After swapping an IMAGE, hard-refresh before judging it.** Images ship with
  `cache-control: public, max-age=86400`, so a browser that already saw the old file keeps showing
  it for up to 24 hours: Ctrl+F5 (or a private window). Verify the swap against the ORIGIN, not the
  browser cache: `fetch(path, {cache:'reload'})` and compare the byte count to the new file.
  (Learned 2026-08-26 on the before-photo swap: the tab served a stale AVIF while the deploy was
  correct.)
