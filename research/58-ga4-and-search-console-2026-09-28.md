# GA4 and Search Console, read 2026-09-28

One Sonnet browser agent, read-only, Chrome profile fady.be, hi@fady.be, lock about 11:40 to 12:05. GA4 property "prodebouchage24.be" (a406206091p551825707), Search Console property sc-domain:prodebouchage24.be. Ranges set by clicks in the calendar; the safety check refused one URL with a date in it, the agent then used the calendar only. Nothing was changed, nothing was requested. GA4 sees only visitors who accepted cookies.

## 1. How many ad visitors show up in GA4
| | 27 Aug to 16 Sep | 17 Sep to 28 Sep |
|---|---|---|
| All sessions | 77 (45 engaged) | 47 (19 engaged) |
| Paid Search sessions | 31 (15 engaged, 51 s) | 28 (13 engaged, 45 s) |
| Direct | 43 | 10 |
| Organic Search | 0 | 7 |
| Events | 343 | 174 |

Against the ad clicks Google Ads reports (71 for 27 Aug to 16 Sep; 116 for 14 to 27 Sep, a window that is a little offset): about 44 in 100 ad clicks appeared in GA4 before, about 24 in 100 after (the agent's division). Organic search appears for the first time.

## 2. The events
| Event | 27 Aug to 16 Sep | 17 Sep to 28 Sep |
|---|---|---|
| page_view | 123 | 56 |
| session_start | 75 | 47 |
| first_visit | 58 | 37 |
| user_engagement | 73 | 29 |
| call_click | 12 (9 users) | 5 (4 users) |
| whatsapp_click | 2 (2 users) | 0 |

call_click by device. Before: Safari mobile 5 events (4 users), Chrome mobile 3 (2 users), Chrome desktop 4 (3 users): phones gave 8 of 12 events. After: Chrome desktop 3 (2 users), Safari tablet 2 (2 users): phones gave NONE. Active users by device for 17 to 28 Sep were read once and not reconciled: about 23 on phones, about 11 on computers, a few on tablets.

THE SESSION'S READING: the fall of the counted taps sits on phones alone and starts with the phone layout change of the night of 16 Sep. Two causes remain, and they are not the same problem: phone visitors who accept cookies no longer tap (other people, the how-to searchers of research/57), or the tap is not counted on a phone. About 23 phone users accepted cookies in the window and none of them produced a call_click, so consent alone does not explain it. A live test of the counting followed the same day (research/59).

## 3. Pages, 17 to 28 Sep
| Page | Views | Users | Average time |
|---|---|---|---|
| /fr/ | 24 | 13 | 1 min 21 s |
| /nl/afvoer-verstopt/ | 15 | 13 | 42 s |
| /nl/wc-verstopt/ | 7 | 7 | 7 s |
| /nl/ | 6 | 2 | 5 s |
| /fr/canalisation-bouchee/ | 3 | 3 | 12 s |
| /nl/privacy | 1 | 1 | 8 s |

The French main page holds people for over a minute. The Dutch WC page loses them in seven seconds.

## 4. Search Console
- Indexing: 10 indexed, 7 not. Not indexed: 1 "Page with redirect" (URL not opened), 6 "Discovered, currently not indexed", never crawled: /en/privacy, /en/terms, /fr/conditions-generales, /fr/confidentialite, /nl/algemene-voorwaarden, /nl/privacy. All six are legal pages: no customer page waits. "Excluded by noindex": 0.
- Performance, last 7 days: 0 clicks, 12 impressions, average position 48.9. Last 28 days: 0 clicks, 15 impressions, position 45.1. Queries: kelder leegpompen 3, pro debouchage 2, kelderpomp 2, garage leegpompen 2, debouchage halle 1. Pages: /nl/kelder-leegpompen/ 7, the root 4, /fr/ 3, and one impression each for /fr/cave-inondee/, /nl/afvoer-verstopt/, /nl/, /fr/canalisation-bouchee/.
- Sitemap: submitted and last read 18 Sep, Success, 15 pages.
- Against the read of 22 Sep (research/48 E): the counts are unchanged (10 and 7), impressions went from 6 to 15 in all, still no click.
