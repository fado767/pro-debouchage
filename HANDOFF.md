# HANDOFF.md

*Written by the last session for the next one. Overwritten at every close. Max 40 lines.*

**Written 2026-08-23 about 16:00 at `/pro-eof`. Everything is filed (STATE, NOW, DECISIONS, LOG, accounts). The next session is the DESIGN SESSION (brief below); it starts with `/pro-orch-mid` if still on 2026-08-23, `/pro-orch` from 2026-08-24 on.**

## Where the day left things
- Domain `prodebouchage24.be`: bought, holder Roro (individual, itsme phone), NOT active. DNS Belgium refused itsme three times with identical data, eID app dead, front of Roro's ID uploaded 2026-08-23 for the manual check (up to 5 working days), support mail sent. Fallback decided: if not active by Tuesday 2026-08-25 evening, trade the holder to Fady (Infomaniak "Change ownership", about 15 euro, Fady's click) and he verifies with his itsme. Every session: `nslookup -type=NS prodebouchage24.be a.nsset.be` (expect hera/olof.ns.cloudflare.com).
- When it resolves: Workspace Confirm (Pro Debouchage Chrome profile), Gmail step, Business Profile as info@ with the depot address, then the video at a visit. Monday 2026-08-24 Fady is in Brussels: photos at the depot in any case (van with plate, street sign, door number, keys), video only if the domain is live.
- Page v1 on https://drain-prodebouchage.pages.dev/fr/ and /nl/ (pages.dev noindex via `site/_headers`). Deploy: `unset CLOUDFLARE_API_TOKEN` then `npx wrangler@latest pages deploy "C:/Users/fadya/Desktop/pro-debouchage/site" --project-name drain-prodebouchage --branch main --commit-dirty=true` run from the scratchpad folder (wrangler writes a cache folder next to where it runs).
- Roro is sending better photos (van, logo source, jobs). File them in `assets/raw/`, keep the evidence README in step.

## BRIEF for the design session (Fady works on this himself, Claude executes)
Goal: turn site v1 into the page Fady is proud of, on the preview, in rounds of Fady's reactions. Spec and rules: `playbook/landing-page.md` (sections 3b, 5, 6, 9), `AGENTS.md` section 5 and 6 (never fake, FR then NL, no em dashes), logo colours from `assets/raw/pro-debouchage-logo.jpeg` (fewer colours on the page than on the logo).
1. Fady scrolls the preview on his phone and gives raw reactions; decides cut or keep on the eleven agent-written copy lines listed in `landing-page.md` section 9.
2. Claude turns the reactions into ONE change list, shows it, then edits `site/` (one editor at a time; an Opus agent may do the edits, never in parallel with another editor), redeploys, Fady looks again. Two or three rounds.
3. Claude's own suggestions from 2026-08-23, for Fady to accept or drop: enterprise number visible right under the hero (trust strip), one dark "price promise" band mid-page, a designed review-card shell ready for the first three real reviews, tighter hero crop until the new van photo lands, a real plate-visible daylight van photo after Monday.
4. Out of scope for that session: GA4, Search Console, consent banner, variants generator (separate Claude line in NOW), anything on the live domain (not live yet), Ads.
5. Close that session with `/pro-eof` too: what changed in `site/`, which lines were cut or kept, logged in `landing-page.md` section 9 and `LOG.md`.

## Rules learned today (proposed at eof 2026-08-23, applied only on Fady's yes)
- .be holder = the person who does the itsme check, at their ID address, with the phone that is in their itsme; never the company at a mailbox seat. If itsme fails twice with identical data, go straight to the document upload, do not burn the third try.
- Google Workspace created in a Chrome profile signed into Fady's Google pre-fills Fady as admin; overwrite with the client every time.
- A Gmail draft beats a mail pasted in chat: Fady sends from his own box, nothing is lost.
