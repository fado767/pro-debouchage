# Chrome edits session, 2026-09-17

Browser agent working on the five actions from DECISIONS.md 2026-09-16 conversion audit.

## Setup
- browser-lock acquired 01:14
- chrome.cjs opened fady.be profile (Profile 6, hi@fady.be) at ads.google.com/aw/campaigns

## Progress log
(appended as work proceeds)

## Action 1: Bidding to Maximize clicks, max CPC 6.00
Time: about 01:25 CEST 2026-09-17
Done: switched campaign "PD | Search | Ring Bruxelles | FR+NL" bid strategy from Maximize conversions to Maximize clicks, checked "Set a maximum cost per click bid limit", entered 6.00, Save.
Verified after full page reload (F5): Bidding row reads "Maximize clicks". Expanded row shows "Set a maximum cost per click bid limit" checked, Maximum CPC bid limit = 6.00 EUR. Campaign status after change: Eligible (Learning), as expected for a bid strategy change.

## Action 2: Pause NL emergency ad group
Time: about 01:28 CEST 2026-09-17
Done: clicked status dot on "NL emergency" ad group row, chose Pause. Toast: "Your change has been saved."
Verified after reload: NL emergency = Paused. FR emergency = Eligible (Enabled, green dot). Campaign = Enabled.

## Action 3: Campaign-level negative keywords gailly and vleminck
Time: about 01:33 CEST 2026-09-17
Done: Keywords > Negative keywords > + Add negative keywords, Add to: Campaign (PD | Search | Ring Bruxelles | FR+NL), entered "gailly" and "vleminck" in quotes (phrase match), did not check "Save to new or existing list", Save. Toast: "Your negative keywords were created."
Verified after full reload: total rows now 19 (18 campaign-level negative keyword rows plus the "PD | Negatives | shared List" row), matching the expected "18 rows plus the shared-list row". Confirmed both "gailly" and "vleminck" present, Level: Campaign, Match type: Phrase match.

## Action 4: Call details report (READ ONLY), 27 Aug 2026 to 16 Sep 2026
Source: Insights and reports > Report editor > Call details template, date range set to custom Aug 27 - Sep 16, 2026.
No phone numbers or area codes recorded below (report showed one row with a phone number and area code, both excluded here per instruction).
Five calls found (matches "five calls expected"):
1. Date/time: Sep 1, 2026, 1:00:00 PM. Duration: 0 seconds. Status: Missed. Call type: Mobile click-to-call.
2. Date/time: Sep 4, 2026, 10:00:00 AM. Duration: 8 seconds. Status: Received. Call type: Mobile click-to-call.
3. Date/time: Sep 9, 2026, 10:00:00 AM. Duration: 0 seconds. Status: Missed. Call type: Mobile click-to-call.
4. Date/time: Sep 15, 2026, 5:00:00 PM. Duration: 7 seconds. Status: Received. Call type: Mobile click-to-call.
5. Date/time: Sep 16, 2026, 11:00:00 AM. Duration: 39 seconds. Status: Received. Call type: Mobile click-to-call.

## Action 5: Search Console URL inspection and request indexing
Signed in as hi@fady.be, property prodebouchage24.be managed by fady.be.

1. https://prodebouchage24.be/fr/
Verdict: URL is not on Google (not indexed, URL is unknown to Google). Crawl allowed: N/A. Indexing allowed: N/A. Last crawl: N/A.
Request indexing: clicked. Response: "Indexing requested. URL was added to a priority crawl queue."

2. https://prodebouchage24.be/nl/
Verdict: URL is not on Google (Discovered - currently not indexed). Referring sitemap: https://prodebouchage24.be/sitemap.xml. Crawl allowed: N/A. Indexing allowed: N/A. Last crawl: N/A.
Request indexing: clicked. Response: "Indexing requested. URL was added to a priority crawl queue."

3. https://prodebouchage24.be/en/
Verdict: URL is not on Google (Discovered - currently not indexed). Referring sitemap: https://prodebouchage24.be/sitemap.xml. Crawl allowed / Indexing allowed: not shown (never crawled).
Request indexing: clicked. Response: "Indexing requested."

4. https://prodebouchage24.be/fr/wc-bouche/
Verdict: URL is not on Google (URL is unknown to Google). No referring sitemaps detected, no referring page.
Request indexing: clicked. Response: "Indexing requested."

5. https://prodebouchage24.be/fr/canalisation-bouchee/
Verdict: URL is not on Google (URL is unknown to Google). No referring sitemaps detected, no referring page.
Request indexing: clicked. Response: "Indexing requested."

6. https://prodebouchage24.be/fr/cave-inondee/
Verdict: URL is not on Google (URL is unknown to Google). No referring sitemaps detected, no referring page.
Request indexing: clicked. Response: "Indexing requested. URL was added to a priority crawl queue."

7. https://prodebouchage24.be/nl/wc-verstopt/
Verdict: URL is not on Google (URL is unknown to Google). No referring sitemaps detected, no referring page.
Request indexing: clicked (first click missed, retried). Response: "Indexing requested."

8. https://prodebouchage24.be/nl/afvoer-verstopt/
Verdict: URL is not on Google (URL is unknown to Google). No referring sitemaps detected, no referring page.
Request indexing: clicked. Response: "Indexing requested. URL was added to a priority crawl queue."

9. https://prodebouchage24.be/nl/kelder-leegpompen/
Verdict: URL is not on Google (URL is unknown to Google). No referring sitemaps detected, no referring page.
Request indexing: clicked. Response: "Indexing requested."

All 9 URLs done, no daily quota message encountered.
