# HANDOFF.md

*Written by the last session for the next one. Overwritten at every close. Max 40 lines.*

**Written 2026-08-25 at the close of the NIGHT DESIGN SESSION, merged with the domain-rescue close that landed while it ran (both /pro-eof, no agents). Next session: `/pro-orch` (new day).**

## What the two sessions did
- **THE DOMAIN IS UNBLOCKED** (domain-rescue session, Fady's Chrome, his "do it"): Infomaniak had silently dropped the nameserver save while validation was pending; hera and olof .ns.cloudflare.com re-entered, whois.dns.be now lists both. Resolver caches clear overnight. Jordy call and holder trade DEAD, not needed.
- **THE HERO VARIANT WON the design night** (DECISIONS 2026-08-25) and is the working design: new hero (marker sub, tip pill, no chips), 11-photo desktop ticker plus counter-scrolling trust band (original full copy), mobile swipe carousel in Fady's image order (van-garden-45 lead, glass dot bar, 2.5s autoplay killed by first touch), static trust on phones, trimmed desktop prices gap. About thirty reaction rounds, each deployed and verified. Close sweep clean end to end.
- **Two URLs live from ONE source:** https://hero.drain-prodebouchage-v2.pages.dev (variant: `HERO_TICKER=1 node design/canvas-v2/build-site.js` builds site-v2-hero/, deploy to branch hero) and https://drain-prodebouchage-v2.pages.dev (classic fallback, untouched except round 0's Q6 removal).
- **Images audited by eye:** several prepared files were crops of the same photo; ticker and carousel now use one image per real scene; new asset van-garden-45 (4:5 enhanced van, sharp). Deletable duplicates listed in NOW.
- **Parked, not dead** (documented toggles in page-template.js and styles.css): chips, mobile trust ticker, short trust copy.

## Morning checklist (first session of the day)
1. Verify the domain resolves: `nslookup -type=NS prodebouchage24.be` returns hera and olof .ns.cloudflare.com; Cloudflare zone Active (TXT, MX, SPF go live with it).
2. Then the domain-gated chain in NOW line 13 unblocks: Workspace Confirm (Pro Debouchage Chrome profile), Gmail, Business Profile, depot trip.
3. Poll VIES and the KBO (VAT blocker stands); Fady asks Roro for the accountant's VAT-office outcome.

## Next design session
- Continue from the hero URL, sections from prices down. Hero and trust are settled, do not re-litigate. Merge-to-main timing is Fady's open call (probably after the remaining sections).

## Waiting on whom
- **A clock:** resolver caches overnight. **Fady:** morning domain check, merge call, orphan-images yes, GitHub repo + first-time-setup.cmd, design-system publish, WhatsApp sends. **Roro:** example invoice, friend reviews, selfie-video, accountant's VAT answer.

## Rule improvements, both PENDING FADY'S YES
- 2026-08-25 (domain session): sharpen the Infomaniak line in playbook/accounts.md to "verify delegation at the registry whois, never the registrar dashboard, and re-save the nameservers after any validation completes."
- 2026-08-25 (design session): add to AGENTS section 7: image picks are made from VIEWED images, never from filenames; two crop-duplicates shipped tonight because files were judged by name.

## Do not re-litigate
- The hero variant layout, trust band (original copy, ticker desktop, static mobile), carousel order, fixed header, prices, guarantee, VAT lines, placeholder review cards, legal footer, no bare company-age claim, v1 stays up until go-live week, deployed preview is the only review surface.
