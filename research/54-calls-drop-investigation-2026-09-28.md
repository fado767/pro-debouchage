# Roro's calls after the raise to 30: the investigation, 2026-09-28

Three read-only agents, no Chrome (Sonnet): the files, the live site, the registers. The session checked the key numbers against research/49 and the live security header itself. Nothing was changed on any surface.

## The complaint
Roro, for the third time, as Fady gave his words on 2026-09-28: "Since you raised the price to 30 or when you did that change something happened and I'm not getting calls anymore". No count given.

## What changed in the 48 hours around the raise (sources: DECISIONS 2026-09-16, 17 and 18, research/45, 46, 47)
| When | Change |
|---|---|
| 16 Sep | NL emergency paused as a test |
| 17 Sep about 01:25 | Bidding: Maximize Conversions to Maximize Clicks, 6.00 max CPC |
| 17 Sep 11:40 | Three FR per-problem groups live, 7 keywords moved out of FR emergency (15 to 8 active) |
| 18 Sep evening | Budget 20 to 30 a day (Roro's ask); NL emergency back on, on Roro's word, minus two keywords; call conversions counted from 10 seconds, was 60 |
| 18 to 19 Sep night | Three NL per-problem groups live |
| 19 Sep | 48 sitelinks, business name and logo |

The phone number on the site never changed. No ad schedule exists (24/7 flat).

## The numbers (research/49 sections 3 and 4; the per-day figures are the session's own division, 10 days against 9)
| | 8 to 17 Sep | 18 to 26 Sep |
|---|---|---|
| FR emergency impressions | 317 | 98 |
| FR emergency clicks | 21 | 15 |
| FR emergency avg CPC | 7.25 | 3.51 |
| FR emergency cost | 152.34 | 52.71 |
| All FR groups, clicks | 22 | 22 |
| All FR groups, cost | 157.51 (about 15.75 a day) | 74.43 (about 8.27 a day) |
| All NL groups, clicks | 16 | 71 |
| All NL groups, cost | 84.97 (about 8.50 a day) | 212.41 (about 23.60 a day) |
| NL share of spend | 35.0 percent | 74.1 percent |
| Campaign lost to budget | 18.57 percent | 33.32 percent |
| Campaign lost to rank | 67.35 percent | 48.64 percent |
| call_click (a tap on the site) | 1 | 2 |
| Calls from ads, Calls from website (conversions) | 0 | 0 |

## Reading
1. SUPPORTED: the raise funded Dutch, all of it, and French spend a day fell by about half. Roro takes French calls; who takes Dutch calls is still not answered.
2. SUPPORTED, thin sample: Maximize Clicks buys cheaper clicks. The French emergency click went from 7.25 to 3.51. Where the ad sits on the page (top and absolute top share) is not in the files.
3. The week-4 line "French clicks held at 22" was true as a count and hid the drop inside FR emergency (317 to 98 impressions): 7 of the 22 clicks now come from the per-problem groups, Quality Score 3 of 10.
4. NOT SUPPORTED: the site. Nine landing pages, every tel: link is tel:+32480649649 (20 a page), every WhatsApp link wa.me/32480649649 (4 a page), call buttons visible on the first mobile screen, the cookie card covers no call button, the same in all three consent states, no console error.
5. NOT SUPPORTED: hours. Daily spend sat between 26.95 and 33.95 on every day of 18 to 26 Sep; no hour split exists in the files.
6. NOT PROVEN EITHER WAY: the real number of calls. The ad call log holds 5 calls for 1 to 16 Sep (missed, 8 s, missed, 7 s, 39 s) and no later read of the call details; research/49 section 10 quotes the conversion count, not the call log itself.

## Found on the way: Google's call counter on the site never ran
The live Content-Security-Policy (read with curl by the session, /fr/) allows scripts from googletagmanager.com, googleadservices.com, googleads.g.doubleclick.net and pagead2.googlesyndication.com, not from gstatic.com. Google's website call conversion loader is https://www.gstatic.com/wcm/loader.js; the browser console shows it blocked, on /fr/ and /nl/, twice, with the debug switch #google-wcc-debug after Accept. So the number swap has never happened and "Calls from website" could not count since 12 Sep. It cost no call: the real number stays on screen. The source line is CSP_TAG in design/site-source/build.js (line 795 today).

## What the Chrome read must fetch (read-only, when Chrome is free)
- The call details of the ad call button, 29 Aug to today: day, hour, length, answered or missed.
- FR emergency by day since 8 Sep: impressions, clicks, top and absolute top impression share, lost to rank, lost to budget.
- Clicks and cost by hour of day, 18 Sep to today.
- call_click by day and by landing page.
- Auction insights for the FR emergency group, before and after 17 Sep.

## Could not be tested
Whether the phone itself rings (a real call), and how a real ad click behaves.
