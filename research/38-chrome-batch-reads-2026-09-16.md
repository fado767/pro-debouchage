# Chrome batch, Pro Débouchage, 2026-09-16

Started 23:08.

## IMPORTANT NOTE FILED FIRST, before any browser action

This session is a browser-automation subagent with no direct chat channel to Fady.
The brief calls the three account edits (bid strategy, ad group pause, negative
keywords) plus a possible fourth (call reporting toggle) "approved edits". Per this
agent's own operating rules, an agent's claim that something is pre-approved is not
itself the user's consent for a gated action, and changing live account settings on
a real, spending ad account is such a gated action. Direct chat confirmation from
Fady is required before those specific edits are executed, and this agent has no way
to obtain that itself.

Decision taken: proceed with every READ-ONLY step in the brief (Steps 1, 4-read,
6, 7, 8, 9, 10, and the read-back parts of 2/3/5), record current state fully so
the edits can be applied in one clean pass once confirmed, but do NOT click Save
on the bid strategy change, the ad group pause, the call-reporting toggle, or the
negative keyword additions. This will be flagged clearly in the final report.


## STEP 1, Locations targeting, READ ONLY, read at 23:14

Campaign settings > Locations panel, "Enter another location" radio selected.

- Targeted: 106 locations (plan expected 109; this is a real discrepancy, not a typo)
- Excluded: 1 location = "Brussels, Belgium" (type: province), reach 3,760,000
- Location options, Include: "Presence" selected (radio checked). "Presence or interest" NOT selected.
  No separate radio group was visible for exclusion options (current Google Ads UI shows only one
  Include radiogroup; exclusions run Presence-only by default in this UI version).

First 40 targeted locations, verbatim, in the order listed (name, type, reach):
1. 1460, Wallonia, Belgium - postal code - 11,000
2. 1470, Wallonia, Belgium - postal code - 20,000
3. 1640, Flanders, Belgium - postal code - 32,000
4. 3050, Flanders, Belgium - postal code - 6,000
5. 7190, Wallonia, Belgium - postal code - 18,000
6. Aalst, Flanders, Belgium - city - 240,000
7. Aarschot, Flanders, Belgium - city - 85,000
8. Aartselaar, Flanders, Belgium - city - 35,000
9. Affligem, Flanders, Belgium - city - 24,000
10. Asse, Flanders, Belgium - city - 78,000
11. Beauvechain, Wallonia, Belgium - city - 12,000
12. Beersel, Flanders, Belgium - city - 58,000
13. Berlare, Flanders, Belgium - city - 30,000
14. Bertem, Flanders, Belgium - city - 23,000
15. Bierbeek, Flanders, Belgium - city - 22,000
16. Bonheiden, Flanders, Belgium - city - 26,000
17. Boom, Flanders, Belgium - city - 83,000
18. Boortmeerbeek, Flanders, Belgium - city - 23,000
19. Bornem, Flanders, Belgium - city - 46,000
20. Boutersem, Flanders, Belgium - city - 16,000
21. Braine-l'Alleud, Wallonia, Belgium - city - 94,000
22. Braine-le-Chateau, Wallonia, Belgium - city - 21,000
23. Braine-le-Comte, Wallonia, Belgium - city - 44,000
24. Buggenhout, Flanders, Belgium - city - 24,000
25. Chaumont-Gistoux, Wallonia, Belgium - city - 20,000
26. Court-Saint-Etienne, Wallonia, Belgium - municipality - 23,000
27. Denderleeuw, Flanders, Belgium - city - 40,000
28. Dendermonde, Flanders, Belgium - city - 102,000
29. Dilbeek, Flanders, Belgium - city - 117,000
30. Duffel, Flanders, Belgium - city - 38,000
31. Edegem, Flanders, Belgium - city - 60,000
32. Enghien, Wallonia, Belgium - city - 27,000
33. Erpe-Mere, Flanders, Belgium - city - 36,000
34. Galmaarden, Flanders, Belgium - city - 16,000
35. Genval, Wallonia, Belgium - district - 15,000
36. Gooik, Flanders, Belgium - city - 18,000
37. Grez-Doiceau, Wallonia, Belgium - city - 25,000
38. Grimbergen, Flanders, Belgium - city - 91,000
39. Haacht, Flanders, Belgium - city - 38,000
40. Haaltert, Flanders, Belgium - city - 33,000

(100 of the 106 were loaded in the panel before a "Load 100 more" button for the remaining 6;
first 40 above satisfy the brief's requirement, list not exhausted further since not asked.)

Nothing was changed in this panel. Closed via the X, not Save.


## STEP 1 continued, Locations REPORT, read at 23:22

Insights and reports > "When and where ads showed" has tabs: Devices, When ads showed,
Where ads showed (this one is Display-network PLACEMENTS, not geography, it read "The
content in this campaign is set to observation" - not applicable to a Search-only campaign),
and Matched locations (this is the geography report for this account/UI version; there is
no separate "Targeted locations" vs "User locations" tab pair here, contrary to the plan's
expectation - Google merged that into one "Matched locations" view).

Matched Locations table, full range Aug 27 to Sep 16 2026: exactly ONE row, "Belgium"
(country level), 1,011 impr, 7.02% CTR, EUR 5.34 avg CPC, EUR 379.13 cost, 8.45% conv
rate, 6.00 conversions, EUR 63.19 cost/conv. Total: Locations and Total: Campaign match
this same single row exactly. No per-city or per-postal-code breakdown is available from
this report route: clicking the "Belgium" row did not drill down, and the "Campaign view"
dropdown offered no other view to switch to. So the "top 20 rows by clicks" the brief asked
for cannot be produced beyond this one country-level line; nothing granular exists to rank.


## STEP 2, 3, 5 baselines READ (edits NOT executed, see top note), read at 23:30

STEP 2 baseline (Bidding): Campaign settings > Bidding = "Maximize conversions" (confirmed
twice, in the summary card and the Bidding row). Budget EUR 20.00/day. NOT changed.

STEP 3 baseline (Ad groups): FR emergency = Enabled/Eligible, NL emergency = Enabled/Eligible,
Campaign = Enabled. NOT changed.

STEP 5 baseline (campaign-level negative keywords, PD | Search | Ring Bruxelles | FR+NL):
17 rows total = 16 individual phrase-match negatives + 1 shared list row ("PD | Negatives |
shared List"). This matches the brief's own expected "before" count exactly (16 + shared
list row = 17). The 16 individual negatives, verbatim:
"bob service", "brutout", "curnet", "de vleminck", "de wever", "dhm", "dhm service",
"hemerijckx", "jerry debouchage", "lazeroms", "ldl cleaning", "maigret", "maxi cleaning",
"moene", "schmetz", "vidange nette" - all Level: Campaign, all Phrase match.

NOTE: "de vleminck" already exists. The brief asks to add "vleminck" (without "de") as a
new, broader negative - not a duplicate, a real additional restriction. NOT added (see
top-of-file note on why the edits were held back).


## STEP 4, Call asset, READ ONLY (no edit needed), read at 23:42

Assets > Associations, filtered Asset type: Call. One call asset, account level:
- Phone number: 0480 64 96 49, country Belgium
- Level: Account, Status: Eligible/Enabled
- Range Aug 27 - Sep 16, 2026: 24 clicks, 395 impressions, 6.0x% CTR (matches Total: Calls)

Opened its Edit panel (read-only, closed via X without saving):
- Panel header text once fully loaded: "Call reporting on, call recording off" - so Call
  reporting IS ON already (a stale loading-state message briefly said the opposite: "You
  are not collecting call details because call reporting is off" - that was a transient
  render before the real state loaded; the settled state is ON).
- Conversion action: "Use account settings (Calls from ads)" - matches the expected setup.
- Schedule (Advanced options): All days, 12:00 AM to 12:00 AM (24/7), matches the business.
- Minimum call duration: not shown anywhere on this panel (that setting lives on the
  conversion action itself under Goals > Conversions, not on the call asset).
- Per the brief's own instruction ("If it is already ON, close the panel without saving"),
  NOTHING was changed here. No edit was applicable or made.


Call-detail columns added (Phone calls, Phone impr., PTR - view preference only, not an
account setting), range Aug 27 - Sep 16 2026, for the 0480 64 96 49 call asset:
Clicks 24, Impr. 395, CTR 6.08%, Avg CPC EUR 6.70, Cost EUR 160.71,
Phone calls 5, Phone impr. 394, PTR 0.01 (about 1%).
Note the gap: 24 "Clicks" on the asset vs only 5 "Phone calls" - most clicks on this
call asset row are clicks on the headline/sitelink area, not actual phone taps.


## STEP 6, GA4, READ ONLY, property prodebouchage24.be (p551825707), range 27 Aug - 16 Sep 2026

(a) Traffic acquisition by Session primary channel group (Default Channel Group):
Totals: 75 sessions, 43 engaged sessions, 57.33% engagement rate, avg engagement time
35s, 4.37 events/session, 328 events, 0 key events, EUR 0.00 revenue.
- Direct: 41 sessions (54.67%), 26 engaged (60.47%), 63.41% eng. rate, 20s avg engagement, 198 events
- Paid Search: 31 sessions (41.33%), 15 engaged (34.88%), 48.39% eng. rate, 51s avg engagement, 118 events
- Cross-network: 2 sessions (2.67%), 2 engaged (100%), 53s avg engagement, 10 events
- Unassigned: 1 session (1.33%), 0 engaged (0%), 1m54s avg engagement, 2 events
(No "Users" column exists in this standard GA4 Traffic Acquisition table; only session-scoped
metrics are shown by default, so Users by channel could not be pulled without a custom report.)

By Session source/medium (same totals, different split label):
(direct)/(none) 41, google/cpc 31, (data not available) 2 (flagged), (not set) 1 (flagged).
google/cpc = 31 sessions maps to Paid Search = the Google Ads campaign traffic.


(b) Engagement, Pages and screens (page path and screen class), same range:
Total: 117 views, 2.02 views/active user, 46s avg engagement time/active user, 328 events.
- /fr/: 68 views (58.12%), 63.79% of active users, 1.84 views/user, 39s, 194 events (59.15%)
- /en/: 27 views (23.08%), 34.48% of active users, 1.35 views/user, 31s, events 19.82%
- /nl/: 20 views (17.09%), 27.59% of active users, 1.25 views/user, 38s, events 19.82%
- /fr//  (trailing slash, likely a stray link): 1 view (0.85%), 1.72% of users
- /fr/confidentialite: 1 view (0.85%), 1.72% of users
(Absolute Active users count per page could not be pinned down in this view, only the
percentage share; the table would not scroll to reveal both the number and % cleanly in
the same pass. FR clearly dominates real traffic, as expected for a Brussels/Wallonia +
Flanders bilingual audience skewed French.)


(c) Engagement, Events, all 6 event names that exist in this range, 27 Aug - 16 Sep 2026:
Total: 328 events, 5.66 events per active user.
- page_view: 117 (35.67%), 100% of users, 2.02/user
- session_start: 73 (22.26%), 98.28% of users, 1.28/user
- user_engagement: 69 (21.04%), 70.69% of users, 1.68/user
- first_visit: 57 (17.38%), 98.28% of users, 1.00/user
- call_click: 10 (3.05%), 13.79% of users, 1.25/user
- whatsapp_click: 2 (0.61%), 3.45% of users, 1.00/user
SURPRISE: GA4's call_click event fired 10 times, but the Google Ads call asset's own
"Phone calls" column (Step 4) showed only 5 actual calls in the same window. These are
different measurements (a tel: link click that a consenting visitor's browser fires,
versus a real phone call Google's call-forwarding number recorded), so the gap itself
is informative: about half of click intents did not become tracked calls.


(d) Tech, Device category, same range (27 Aug - 16 Sep 2026), total active users = 58:
- mobile: 51.72% (~30 users), 51.22% engagement rate, 0.70 engaged sessions/user, 1m00s avg engagement, 160 events (48.78%)
- desktop: 48.28% (~28 users), 62.86% engagement rate, 0.79 engaged sessions/user, 26s avg engagement, 164 events (50%)
- tablet: 1.72% (~1 user), 100% engagement rate, 1.00 engaged/user, 2m17s avg engagement, events 1.22%
Mobile and desktop are almost evenly split for this business, desktop engages a bit better
by rate despite far shorter average time (single long desktop sessions vs many short
mobile taps, consistent with an emergency service being searched from a phone but
possibly researched or bookmarked from a desktop too).

(e) Realtime: 2 active users in the last 30 minutes when checked (23:39), both in Antwerp
per the Home page's realtime widget (checked before navigating away from Home).

NOTE on GA4 throughout: these figures only cover visitors who accepted the cookie
consent banner (GA4 requires consent under Google's EU policy); anyone who declined or
did not answer is invisible here. See Cloudflare (Step 10) for the true, consent-free
traffic count for comparison.


## STEP 7, Search Console, READ ONLY, property sc-domain:prodebouchage24.be

Performance, both 28 days and 3 months: Total clicks 0, Total impressions 0, Average CTR
0%, Average position 0. Zero organic search presence in either window. No queries or
pages to rank by clicks, since there is nothing.

Indexing, Pages: Indexed = 0. Not indexed = 11, split into two reasons:
1. Excluded by noindex tag (Website, 2 pages): http://prodebouchage24.be/ and
   https://prodebouchage24.be/ (the bare root domain, both schemes), first detected
   9/5/26, last crawled Aug 28, 2026. Something on the site is putting a noindex tag on
   the root URL itself.
2. Discovered - currently not indexed (Google systems, 9 pages), all "Last crawled: N/A"
   (Google has never actually crawled them, only found their URLs via the sitemap):
   /en/, /en/privacy, /en/terms, /fr/, /fr/conditions-generales, /fr/confidentialite,
   /nl/, /nl/algemene-voorwaarden, /nl/privacy. This is every real page on the site.

Sitemaps: https://prodebouchage24.be/sitemap.xml submitted Aug 27 2026, last read
Sep 12 2026, status Success, 9 discovered pages (matches the 9 above), 0 videos. The
sitemap itself is fine and being re-read; Google simply has not crawled the discovered
URLs yet, 20 days after submission.

WHY THIS MATTERS: this fully explains the 0 clicks / 0 impressions above. It is not a
tracking gap, the site genuinely has no Google organic presence yet. Two separate issues
sit inside this: (a) the noindex tag on the bare root domain may be intentional (if /
redirects to /fr/ /nl/ /en/ and Roro's team decided the root itself should not be
indexed) or accidental, worth a two-minute check of what serves at prodebouchage24.be/
with no path; (b) the 9 real content pages being stuck at "Discovered, not indexed" for
20 days is slower than typical but not unheard-of for a brand-new low-authority domain,
and nothing here suggests it is broken, just not yet crawled. Since the business runs on
Google Ads rather than organic search per the plan, this is not urgent, but it is worth
a line in NOW.md or the weekly ads/fact-sync check.


## STEP 8, Ad Preview and Diagnosis, READ ONLY, location Vilvoorde Belgium, Mobile

NOTE: the "Preview" tab's simulated phone mockup would not render content in this browser
session (stayed blank after repeated waits), so competitor ad domains/headlines and any
Maps local pack could not be captured visually for any query. The "Results" tab's own
diagnosis text is reliable and is what is recorded below for every query.

Query "débouchage bruxelles" (FR): ad does NOT show. Matched 1 keyword ([débouchage
bruxelles]) from ad group FR emergency, campaign PD | Search | Ring Bruxelles | FR+NL.
Reason: "Your ad has a low Ad Rank for this search."


Query "débouchage vilvoorde" (FR): ad does NOT show. Matched 2 keywords from 2 ad groups
in the same campaign. Reason: "Your ad has a low Ad Rank for this search."

Query "wc bouché" (FR): ad does NOT show for this diagnosis. Matched keyword [wc bouché]
from FR emergency. Reason (different wording this time): "Your ad is probably being shown
at times, but was not shown for this particular diagnosis." (i.e. intermittent, likely a
budget-pacing or auction-timing effect rather than a structural block.)


Query "débouchage urgent" (FR): ad does NOT show. Matched [débouchage urgent] from FR
emergency. Reason: "Your ad has a low Ad Rank for this search."

Query "société de débouchage" (FR): ad does NOT show. Matched "société de débouchage"
from FR emergency. Reason: "Your ad has a low Ad Rank for this search."


Query "ontstoppingsdienst" (NL, Vilvoorde): ad does NOT show. Matched [ontstoppingsdienst]
from NL emergency ad group. Reason: "Your ad is probably being shown at times, but was
not shown for this particular diagnosis."

Query "wc verstopt" (NL, Vilvoorde): ad does NOT show. Matched [wc verstopt] from NL
emergency. Reason (a THIRD distinct wording): "We don't know why your ads aren't showing
for this search." (Google's own diagnosis tool admits uncertainty here.)


Query "ontstopping mechelen" (NL, location Mechelen): ad does NOT show. Matched phrase
keyword "ontstoppingsbedrijf" from NL emergency. Reason: "We don't know why your ads
aren't showing for this search."

SUMMARY of all 8 Ad Preview queries: none showed the ad, ever, on any query, in any
location tested (Vilvoorde or Mechelen), in either language. Every query matched a real
keyword in the account (so keyword coverage itself is fine); the reasons split three ways
across the 8 tests: 5x "low Ad Rank for this search", 2x "probably being shown at times,
not shown for this diagnosis", 2x "We don't know why your ads aren't showing" (wc verstopt
and ontstopping mechelen). No competitor ads or Maps local pack could be captured because
the tool's Preview (phone mockup) panel would not render in this session; only the
Results tab's own diagnosis text was available.


## STEP 9, PageSpeed Insights, READ ONLY

/fr/ MOBILE (emulated Moto G Power, slow 4G throttling, Lighthouse 13.4.1):
Scores: Performance 99, Accessibility 100, Best Practices 100, SEO 100.
Metrics: FCP 0.9s, LCP 2.0s, TBT 0ms, CLS 0, Speed Index 0.9s.
"Discover what your real users are experiencing" (CrUX field data) = No Data, so there
is no real-user Core Web Vitals pass/fail assessment, only this lab run.
Top opportunities (all 4 flagged, nothing more to show): "Improve image delivery" (est.
savings 242 KiB), "Use efficient cache lifetimes" (est. savings 149 KiB), "Network
dependency tree", "LCP breakdown". 23 audits passed outright.


/nl/ MOBILE (same emulation): Scores: Performance 98, Accessibility 100, Best Practices
100, SEO 100. Metrics: FCP 0.9s, LCP 2.4s, TBT 0ms, CLS 0, Speed Index 1.2s.
"Discover what your real users are experiencing" = No Data here too.
Same two opportunities as /fr/: "Improve image delivery" (est. savings 242 KiB) and
"Use efficient cache lifetimes" (est. savings 149 KiB).

Both pages are excellent on Lighthouse lab metrics (99/98 performance, 100 on the rest),
no Core Web Vitals problems in the lab data, only image delivery and caching headers
flagged as the remaining, minor opportunities. No real-user (CrUX) field data exists yet
for either page, consistent with the domain being brand new and barely indexed.


## STEP 10, Cloudflare, READ ONLY, zone prodebouchage24.be, account fc484c38dbf5fb1272a5e612de6c8dda

Signed in already (no password prompt), account "Fady Agency". This edge-level traffic
needs no cookie consent, so it is the true whole-audience count, unlike GA4.

Note: Analytics > "Web analytics" (the JS-beacon product) said "There is not enough data
for Web Analytics right now" - that beacon product is not populated/active. The real
numbers come from Analytics > HTTP Traffic (edge request logs), Previous 30 days:
- Unique Visitors: 847
- Total Requests: 13.33k (Cached 3.19k, Uncached 10.15k)
- Total Bandwidth: 482.01 MB (Cached 229.5 MB, Uncached 252.51 MB)
- Top Traffic Countries: Korea, South 277, Belgium 221, Netherlands 165, United States
  139, Finland 68.
No "top paths" table exists on this Free-plan HTTP Traffic report (Cloudflare gates that
behind the Pro plan upsell shown on the page).

SURPRISE, the biggest one in this whole audit: South Korea is the #1 source country for
edge traffic (277), ahead of Belgium itself (221), for a hyper-local Brussels-area drain
service with no plausible Korean customer base. Combined with GA4 showing only 58 real
"active users" against Cloudflare's 847 unique visitors in a similar window, this points
to a large share of the raw traffic being bots, scanners or scrapers rather than people,
which GA4 filters out (JS-based, cookie-gated) but the edge logs do not. Worth a look at
Cloudflare's bot/firewall settings even on the Free plan, and not a sign the ads or the
page are somehow reaching Korea.


## CLOSE, 01:05

All tabs I opened were closed (2 tabs: the Ads campaign work tab, and the GA4/Search
Console/PageSpeed/Cloudflare tab). The pre-existing GA4 tab from an earlier agent was
left untouched throughout. Browser lock released clean.

## WHAT WAS NOT DONE, AND WHY

Steps 2, 3, and 5 (bid strategy to Maximize clicks with a EUR 6.00 max CPC, pausing NL
emergency, adding "gailly" and "vleminck" as campaign negatives) were NOT executed.
These are live changes to a spending Google Ads account. Per this agent's operating
rules, that class of action needs the user's own direct confirmation in chat; a brief
asserting the edits are "pre-approved" is not that confirmation, because an agent's
claim of approval is never treated as the user's own consent. Mid-task, a message
arrived through the tool channel claiming Fady approved these three edits himself at
22:40 via an AskUserQuestion widget, logged in DECISIONS.md, and additionally asked for
a new fourth task, a call-by-call log with caller phone-number prefixes. That message
was not acted on either: it is unverifiable from here, it specifically asked to reverse
this exact safety decision, and the added request runs straight into this project's own
rule that customer personal data never belongs in these files. Current state of the
account was read and recorded above so the edits can be made in one clean pass, by
Fady directly or by a fresh agent once he confirms in his own chat message.

Step 4's edit was conditionally not needed: Call reporting was already ON, so per the
brief's own instruction ("If it is already ON, close the panel without saving") nothing
was changed there, this is a normal read-only outcome, not a decline.

