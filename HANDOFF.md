# HANDOFF.md
*Written by the last session for the next one. Overwritten at every close. Max 40 lines.*

**Written 2026-08-27 in the night, after THE GO-LIVE PUSH. The morning session starts with
`/pro-orch-mid` and continues the design pass ON THE LIVE SITE.**

## The site is LIVE
**https://prodebouchage24.be** (apex + www, SSL Full strict, indexable, all 12 pages verified 200).
Pages project is now **`prodebouchage24`**, THE project; its pages.dev host keeps noindex and is
the throwaway check surface. `pd-review` and `pro-debouchage-v3` are retired, deletion is a NOW
line. Deploy command in `design/site-source/README.md` was repointed, use it as written.
Live is NOT launched: no ads, profile invisible, Roro walkthrough moved to before ads enable.

## What changed on the page tonight
The reviews block is a ONE-real-review featured card: Paolo's actual words (FR original, NL/EN
faithful translations marked "Vertaald uit het Frans" / "Translated from French"), no stars on
purpose (he gave words, not a rating). The invented placeholder cards are DELETED; the 3-card
grid is PARKED in template.js and returns only when Fady says so with 2+ more real reviews.
The old placeholder build-warning is retired; the only remaining warning is the Afrem avatar.
Verified live: desktop reveal works (a blank-card scare was reveal-animation timing, disproved
by DOM: class `in`, opacity 1), 375 px clean, no overflow.

## The round routine (unchanged except the project name)
Edit `design/site-source/` ONLY, `node design/site-source/build.js`, deploy per README
(`--project-name prodebouchage24`), verify ON https://prodebouchage24.be by DOM measurement.
Changes now go live to the public in ~seconds; that is accepted (Fady's go-live call).

## Next design sections (from the evening session)
Equipment (Fady parked comments on it), then proof, situations, zone, FAQ, final call, footer,
privacy/CGV pages, chooser. Steps section stays AS IS on his call.

## Done later the same night (Fady stayed up and authorized, LOG has the detail)
GA4 CREATED (G-S3SQ25WZMK, property 551825707, enhanced measurement off, hi@fady.be admin) and
Search Console verified, sitemap Success: both by an agent in the business Chrome. Legal audit
ran: e-mail obfuscation OFF (was the one defect, proven fixed), NL privacy SRL→BV fixed live.
Daily "clients du jour" Tally form live (tally.so/r/PdJkkB). research/25 = the paste-ready Ads
build sheet, research/26 = invoice legal musts. Invoice pack built and delivered
(assets/prepared/invoice/, README is the hand-over).

## Morning, Fady's short list
SAVE-TO-CLOUD double-click. Eyeball the invoice .docx once in Word. The old pro-debouchage.com
fake content is now the one live rule-1 violation, blocked on unknown logins: ask Roro or
printpress (NOW clock line). Accountant: the four VAT-rate questions in the invoice README.

## Ads state (decided AND build-ready)
Strategy decided 2026-08-26 (`ads-program.md`), the account session is now pure paste-work from
research/25. Needs only: Roro's login, Fady's card temporarily (DECISIONS), and G4 is already met.

## Waiting: **Roro** Afrem's face photo (parked).
