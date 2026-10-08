# research/64, then against now: why the calls stopped, and the best setup from here (2026-10-08)

*Opus agent, files only, read-only, no browser, written Thu 2026-10-08 from about 12:05. Every number carries its source as (file:line) or (file, section). "My sum" or "my reading" marks this agent's own arithmetic or judgment. Where no file has a number, the cell says "not read". Windows: A = 27 Aug to 16 Sep (ads served from 29 Aug about 08:00), B = 17 to 27 Sep, C = 28 Sep to 4 Oct.*

## 0. The answer, short
- The 5 calls from the ad's call button (1 to 16 Sep) stopped the day bidding moved to Maximize Clicks with a 6.00 EUR cap (17 Sep 01:25). The cap cut off the dear clicks, and the dear clicks were the calls.
- The rollback of 28 Sep restored the bidding only. Almost everything else of 16 Sep stayed changed, and a second campaign started the same day.
- Since 28 Sep, Maximize Conversions bids with almost no signal (phone taps not counted since 16 Sep, Google's site call counter always blocked). It put 69 percent of the ring's week on two keywords at Quality Score 1. Zero calls.
- Window C is 7 days and 30 clicks: at window A's rate, zero calls happens about 1 time in 8 by chance. B (108 clicks, zero calls) is a real break.
- Recommendation (section 5): rebuild the shape that called, take bidding off the broken signal (Manual CPC), pause Brussels under its stop rule, add the negatives, fix the counting, then 14 days hands off.

## 1. Timeline, 12 Sep to 5 Oct (A = account, S = site)
| When | Change | Who decided | Record |
|---|---|---|---|
| 12 Sep | A: bidding kept on Maximize Conversions (CPC 5.58, under the 6 EUR trigger), budget kept 20; shared negatives 240 to 243 (fosse septique, septische put, machine à déboucher, machine de débouchage in, bare machine out); "Calls from website" created at 60 s; second NL RSA (Good) | Claude on Fady's "decide and do" | LOG.md:310, DECISIONS.md:208-212 |
| 12 Sep | S: website call snippet live in consent.js; its Google loader was blocked by the CSP from day one (found 28 Sep) | same | LOG.md:310, research/54:46 |
| 16 Sep, evening to past midnight | S: first-screen fix live: 160 px cookie strip, red header call button, 44 px targets. From now a phone visitor can call without answering the strip, and that tap is not counted | Fady by widget | LOG.md:332, DECISIONS.md:215, research/59:22 |
| 17 Sep about 01:00 | S: six per-problem pages live | Fady by widget | LOG.md:339, DECISIONS.md:222 |
| 17 Sep 01:25 to 01:50 | A: Maximize Clicks with 6.00 max CPC; NL emergency paused; campaign negatives gailly, vleminck (18 in all) | Fady by widget, 16 Sep | LOG.md:339, DECISIONS.md:216-217 |
| 17 Sep morning | S: root page indexable | Fady by widget | LOG.md:346 |
| 17 Sep 09:47 to 12:40 | A: sitelink "Le prix d'un débouchage" disapproved (Tobacco), appealed | Fady ("Fix that") | LOG.md:364 |
| 17 Sep 11:40 | A: FR / WC bouché (5 kw), FR / Canalisation bouchée (9), FR / Cave inondée (5) live; 7 keywords paused in FR emergency (15 to 8). The ads' own Final URL stayed /fr/ | Claude, Fady's delegation | LOG.md:351, DECISIONS.md:218, DECISIONS.md:337 |
| 18 Sep, 19:00 to 22:00 | A: budget 20 to 30; NL emergency on again minus "ontstoppingsbedrijf" and [ontstoppingsdienst]; both call actions 60 to 10 s. S: footer links to the per-problem pages, real sitemap dates | Fady by widget, on Roro's ask | LOG.md:381, DECISIONS.md:229-231 |
| 19 Sep 00:00 to 01:00 | A: NL / Wc verstopt (5), NL / Afvoer verstopt (9), NL / Kelder leegpompen (5) live; 7 keywords paused in NL emergency (6 active left) | Fady's "Ready now", identity checks his | LOG.md:393 |
| 19 Sep 01:00 to 02:15 | A: 6 sitelinks per group (48), business name and logo at account level | Claude | LOG.md:393 |
| 22 Sep | S: guarantee seal fades near the footer | Fady by widget | LOG.md:415 |
| 23 Sep | Ad decisions handed to Claude, money excepted | Fady | LOG.md:429, DECISIONS.md:247 |
| 27 Sep 12:19 | A: second FR RSA in FR emergency; zone sitelinks swapped on both emergency groups; logo also linked at campaign level. Budget 30 and the cap kept | Fady's pick on budget and cap, Claude on the rest | LOG.md:448, DECISIONS.md:263-266 |
| 28 Sep 10:12 to 10:50 | A: Maximize Conversions, no target, no cap; three NL per-problem groups paused. Called "back to the 16 Sep setup" | Fady's typed go, about 10:10 | DECISIONS.md:275, 280; research/56:7-11 |
| 28 Sep 13:31 | S: Brussels wording live (40 strings, Brussels first in the zone) | Fady by widget | LOG.md:468, DECISIONS.md:296 |
| 28 Sep 15:13 | A: Brussels campaign on (16 EUR a day, Maximize Conversions); 4 groups, 12 keywords by 16:44 | Fady's typed go, 13:09 | DECISIONS.md:303, 311; LOG.md:468 |
| 5 Oct about 21:10 | A: new text on both Poor Brussels ads; the WC ad disapproved, headline 14 swapped; "Garantie 30 jours" off the ring's FR / Cave inondée | Claude | LOG.md:490, DECISIONS.md:341-345 |
| 5 Oct about 22:15 | A: Brussels per-problem ads' Final URLs set to /fr/wc-bouche/, /fr/canalisation-bouchee/, /fr/cave-inondee/. The ring's three FR ads keep /fr/ until after 12 Oct | Claude, Fady at the screen | LOG.md:497, DECISIONS.md:339 |

## 2. The three windows side by side
| | A: 27 Aug to 16 Sep | B: 17 to 27 Sep | C: 28 Sep to 4 Oct |
|---|---|---|---|
| Days serving | 19 (LOG.md:333 "Day 19"; ads-program.md:34) | 11 | 7 |
| Daily budget, EUR | 20 (research/34:29) | 20 on 17 Sep, 30 from 18 Sep evening (DECISIONS.md:229) | ring 30 + Brussels 16 = 46 (research/63:21, 37) |
| Bidding | Maximize Conversions, no target (research/34:30) | Maximize Clicks, 6.00 cap (LOG.md:339; research/49:8) | Maximize Conversions, no target, no cap, both campaigns (research/56:15; research/63:22) |
| Active groups (keywords) | 2 (30: FR 15, NL 15) (research/34:100; research/25:93, 117) | 4 FR on 17 Sep (27 kw); 8 groups and 52 kw from 19 Sep (ads-program.md:10) | 9: ring 5 (33 kw), Brussels 4 (12 kw) (ads-program.md:9, 13; my sum) |
| Impressions | 1,011 (research/34:32) | 1,463 (my sum: 164 + 1,121 + 178; research/49:37, 49:8, 56:35) | 527: ring 277, Brussels 250 (research/63:25) |
| Clicks | 71 (research/34:34) | 108 (my sum: 4 + 93 + 11) | 30: ring 21, Brussels 9 (research/63:26) |
| Cost, EUR | 379.13 (research/34:36) | 336.88 (my sum: 21.99 + 286.84 + 28.05) | 251.19: ring 163.05, Brussels 88.14 (research/63:24, 37) |
| Avg CPC, EUR | 5.34 (research/34:35) | 3.12 (my sum); 18 to 26 Sep 3.08 (research/49:8) | 8.37: ring 7.76, Brussels 9.79 (research/63:28, 37) |
| Calls from the ad's call button | 5 (research/41:100-104) | 0, 17 to 28 Sep (research/56:24) | 0: call asset row "Phone calls 0" (research/63:93); the per-call list not read (63:92) |
| Counted taps (call_click in Ads) | 6 (research/34:38) | 3: 0 on 17 Sep, 2 on 18 to 26 Sep, 1 on 27 Sep (research/41:19; 49:95; 56:35) | 0 (research/63:29, 79) |
| GA4 call_click events | 12 by 9 users (research/58:23) | 5 by 4 users, 17 to 28 Sep (research/58:23) | not read |
| Search impression share | 11.59 (research/34:40) | 19.32 on 18 to 21 Sep (research/48:64); 13.22 to 19.81 by day, 21 to 26 Sep (research/56:29-34) | ring 14.54, Brussels 12.12 (research/63:31) |
| Top IS / abs top IS | <10 / <10 (research/34:43-44) | 15.07 / <10 on 18 to 21 Sep (research/48:64); 29.04 / 10.14 on 17 to 18 Sep, FR only (research/41:32); full window not read | <10 / <10 in both (research/63:32-33) |
| Our top-of-page rate / abs top rate (auction insights) | 72.29 / 16.99 (research/34:331) | 76.56 / 26.04 for 29 Aug to 26 Sep, a mix of A and B (research/53:96) | not read |
| Lost to rank | 71.55 (research/34:42) | 48.64 on 18 to 26 Sep (research/49:44) | ring 71.99, Brussels 76.05 (research/63:34) |
| Lost to budget | 16.86 (research/34:41) | 33.32 on 18 to 26 Sep (research/49:44) | ring 13.47, Brussels 11.83 (research/63:35) |
| FR against NL, share of spend | FR 58.8, NL 41.2 (my sum from research/34:90-91; DECISIONS.md:274 says French 59) | FR 25.9, NL 74.1 on 18 to 26 Sep (research/49:77) | ring FR 87.6, NL 12.4 (my sum: NL 20.29 of 163.05, research/63:62, 65); NL 8.1 of the account |
| Phone against computer | phones 66 of 71 clicks and all 6 taps (research/34:273-277); GA4 phones 8 of 12 events (research/58:26) | 14 to 27 Sep: phones 90 clicks and 0 taps, computers 14 and 1, tablets 12 and 2 (research/57:30); GA4 17 to 28 Sep phones 0 of 5 (research/58:26) | not read |
| Quality Score | 1 to 6, most scored keywords 1 to 3; [déboucheur bruxelles] 6, [débouchage bruxelles] 2 (research/34:108-133) | 3 on [wc bouché], [canalisation bouchée], [évier bouché] (research/49:86-88); 8 keywords "Rarely shown" at 1 or 2 on 22 Sep (research/48:161) | 1 to 3, one 6; five rows "Rarely shown" (research/63:102-116) |
| Status label | "Limited by budget" (research/34:28) | "Eligible (Limited), Limited by bid strategy" (research/48:52; 49:8) | ring "Limited by search volume"; Brussels "Budget is set too low to get conversions" (research/63:11, 20) |

## 3. Where the 5 calls came from
All five: "Mobile click-to-call", source Ad, country 32 (research/41:100-104). The report has no ad group column (research/41:96). All on weekdays, between 10:00 and 17:00 (1 Sep was a Tuesday; 28 Sep was a Monday, LOG.md:461).
| Call | What the files say about that day |
|---|---|
| Tue 1 Sep 13:00, missed, 0 s | No day row in the files. The 1 Sep glance: since launch 150 impressions, 14 clicks, 43.08 EUR (LOG.md:195). Both groups on. Roro's first job was reported that day (WC, about 60 km out, 129 EUR), source unknown (jobs-ledger.md:12) |
| Fri 4 Sep 10:00, received 8 s | No day row. "4 Sep 22.53 by mid-morning" (LOG.md:236): most of the day's money went by about the call hour (my reading) |
| Wed 9 Sep 10:00, missed | 90 impressions, 7 clicks, 37.31 EUR, avg CPC 5.33, 0 taps (research/34:73) |
| Tue 15 Sep 17:00, received 7 s | 68 impressions, 2 clicks, 22.18 EUR, avg CPC 11.09 (research/34:79) |
| Wed 16 Sep 11:00, received 39 s, area code 0485 | 22 impressions, 2 clicks, 29.82 EUR, avg CPC 14.91 (research/34:80; research/41:104) |

Around them: 10 to 16 Sep, FR emergency took 17 clicks at 7.28 and NL emergency 6 at 5.89 (research/34:96-97). Over A, 10-11 and 11-12 were the dearest hours, about 8.40 and 9.13 a click (my division of research/34:293, 295). The landing-pages report misses 5 clicks and 73.50 EUR against the account (research/34:426); the session read those as the 5 calls, about 14.70 each (research/55:24). All 6 counted taps of A came from Google's hidden "Other search terms" (research/34:145), and 3 of them on the phrase "société de débouchage" (research/34:108).

Can be concluded: the calls came from phones, through the ad's own call button, on weekdays in working hours, under Maximize Conversions with no cap, on days when single clicks cost 11 to 15 EUR. Cannot be concluded: which group, keyword, search term or language; the ad position; whether any call became a job (no ledger row is tied to a call, jobs-ledger.md:12-13).

## 4. The ranked diagnosis
**1. (b) The 6.00 EUR cap of 17 to 28 Sep bought cheap clicks that never call. Confidence HIGH, the main cause in window B.**
- FOR: calls went from 5 to 0 the day it started (research/41:98; research/56:24). The two days before held a call each at avg CPC 11.09 and 14.91 (research/34:79-80; ads-program.md:15). The 5 ad-button clicks cost about 14.70 each, a session reading of the 73.50 EUR missing from the landing-pages report (research/34:426; research/55:24), more than twice the cap. Under the cap the money went to cheap Dutch how-to clicks: NL share 35.0 to 74.1 percent (research/49:77, 79), FR emergency impressions 317 to 98 (research/54:23), 26 how-to clicks in 14 days (research/57:38). Maximize Clicks buys the cheapest clicks it can find (my note). The session read it the same way on 28 Sep (DECISIONS.md:275).
- AGAINST: five other changes landed in the same 72 hours (research/54:9-16), so the cap's share cannot be isolated. Top IS did not fall (17 to 18 Sep 29.04, abs top 10.14, research/41:32; 18 to 21 Sep 15.07, research/48:64; A under 10, research/34:43). Lifting it on 28 Sep has not brought a call back yet (research/63:93), though 7 days is short.

**2. (a) The bidding went blind after 16 Sep. Confidence MEDIUM for window C, and it stays true until the counting is fixed.**
- FOR: Maximize Conversions learns from counted taps and from "Calls from ads" (research/59:27). In A its signal was 6 taps, all from phones (research/34:277). Since the strip of 16 Sep, phones gave no counted tap: Ads 0 of 90 phone clicks (research/57:30), GA4 0 of 5 events (research/58:26). The last taps it saw came from a computer and two tablets (research/57:30), and two of B's three sat in NL / Afvoer verstopt (research/48:91; research/56:37), paused on 28 Sep. "Calls from website" never counted (research/54:46; ads-program.md:26). "Calls from ads" at 10 s would have counted only 1 of A's 5 calls (0, 8, 0, 7, 39 s, research/41:100-104). With no signal the ring spent 112.22 of 163.05 EUR (69 percent, my sum) on two Quality Score 1 keywords: "débouchage canalisation" 69.08 for 6 clicks and [débouchage bruxelles] 43.14 for 2 (research/63:102, 105). A's best keyword, "société de débouchage" (33 of 71 clicks, 3 of 6 taps, research/34:108), got 5 clicks for 14.03 (research/63:103). The ring spent 1.00 on Tue 29 Sep and 2.25 on Wed 30 Sep (research/63:44-45), the kind of weekday on which all 5 calls came.
- AGAINST: in A the signal was thin too (6 taps) and calls came anyway. The device split of C was never read, so "it bids on computers" is not shown. The ring was "Eligible (Learning)" after the switch (research/56:11). Seven days only.

**3. (c) Too many moving parts, learning restarted again and again. Confidence MEDIUM for window C.**
- FOR: the ring went from 2 groups and 30 keywords (research/34:100) to 8 groups and 52 (ads-program.md:10), then 5 groups, plus a new 4-group campaign at 16 EUR with no history (ads-program.md:13). Bidding type changed twice (17 and 28 Sep), budget rose 50 percent (18 Sep), groups were added on 17 and 19 Sep: each restarts learning (ads-program.md:15, 37). Brussels reads "Budget is set too low to get conversions" (research/63:11). 46 EUR a day bought 30 clicks in a week across 9 groups (research/63:26).
- AGAINST: smart bidding learns per campaign, not per ad group (my note), so more groups alone do not split learning. Grouping by problem is standard for message match, and the NL groups did draw clicks (research/49:57-59).

**4. (d) The Quality Score. Confidence LOW as the cause of the drop, HIGH as a standing limit on reach and price.**
- QS was already 1 to 3 in A, when the calls came: [débouchage bruxelles] 2, "débouchage waterloo" 1, [canalisation bouchée] 3, "cave inondée" 3, "kelder leegpompen" 1 (research/34:112-120). Lost to rank was 71.55 in A (research/34:42) and 71.99 in C (research/63:34): the same. Components: Expected CTR and Landing page experience Below average on almost every scored keyword, ad relevance mixed (research/34 section 3; research/63:102-116). What changed: [débouchage bruxelles] 2 to 1 (research/34:120; research/63:105); new keywords and the new campaign start with no history (Brussels [déboucheur bruxelles] 3 against 6 in the ring, research/63:111, 116). Since when: since launch. Not a collapse.

**5. (f) The Brussels campaign and the ring splitting the Brussels keywords. Confidence LOW.**
- The two rarely meet in one auction: the ring excludes Brussels with Presence (research/53:88-89) and Brussels targets only Brussels (ads-program.md:13). [débouchage bruxelles] IS in the ring's FR emergency (6 impressions, 2 clicks, 43.14 EUR, QS 1, rarely shown, research/63:105, 128) and in Brussels Général (ads-program.md:13). STATE.md:32 says it is bought only in Brussels, never in the ring: that is wrong (section 7). The harm is a price, not a split: about 21.57 a click on a QS 1 keyword (my division). Brussels' own week: 88.14 EUR, 9 clicks, 0 calls, 0 taps (research/63:24-29, 54).

**6. (g) Competition and season. Confidence LOW to MEDIUM.**
- Competition did not get worse: in A, spoed-ontstoppingsdienst.com 20.65 IS and us 11.56 (research/34:330-331); over 29 Aug to 26 Sep, 15.38 and 14.73, our top rate 76.56, abs top 26.04 (research/53:95-96). Keyword Planner three-month change is negative on most FR terms in Flemish Brabant, for example débouchage canalisation -46, débouchage wc -47, débouchage bruxelles -47 (research/53:24-35), and the ring reads "Limited by search volume" (research/63:11). Weather: not in the files; autumn is expected to be the peak (ads-program.md:41). Demand can explain fewer clicks, not 5 calls going to 0.

**7. (e) The per-problem ads landing on the general page. Confidence LOW.**
- The three ring FR per-problem ads (and the Brussels ones until 5 Oct) point at /fr/ (DECISIONS.md:337). But A's calls came with every ad on /fr/ or /nl/ (research/34:414-423). The FR per-problem groups show 0 counted taps since 17 Sep (research/49:53-55; research/63:67-69) and 2 clicks ever on their own pages, via sitelinks (research/57:47; DECISIONS.md:337). The cost is landing-page relevance in the QS of those keywords, and an experiment that never ran.

**8. (h) The site. Confidence LOW for calls, HIGH for counting.**
- The call path is clean on nine pages, 20 tel: links a page, the real number always shown (research/54:41; research/59:6). The strip lets a phone visitor call without answering it, so the tap is not counted (research/59:22). Ad visitors seen in GA4 fell from about 44 to about 24 in 100 (research/58:14). The Dutch WC page holds people 7 seconds on average (research/58:35). Nothing found stops a call.

**9. (i) Other findings.**
- Chance (my arithmetic, Poisson): at A's rate (5 calls in 71 clicks), 30 clicks give about 2.1 calls, and zero happens about 12 times in 100. B's 108 clicks give about 7.6, and zero happens about 5 times in 10,000. B is a real break; C alone is not yet a verdict.
- The rollback was partial: "back to the 16 Sep setup" changed the bidding only (section 5, option 1; DECISIONS.md:275).
- Dutch went nearly dark in C: NL emergency 61 impressions, 10.07 EUR (research/63:62). [ontstoppingsdienst], the biggest Dutch term in Keyword Planner (1,600 a month in Flemish Brabant, research/53:37), is paused since 18 Sep (DECISIONS.md:230).
- 2 of the 5 calls were missed and Roro phones back (research/41:100, 102; jobs-ledger.md:24); calls on the site's own number are invisible to Google.
- The old .com stayed online until 7 Oct (playbook/landing-page.md:35), so it changed nothing in A, B or C. Whether it ever brought calls: not in the files.

## 5. The best setup from here: options and the recommendation
Standing rules kept in every option: exact plus phrase only, no broad, no AI Max, no search partners, no Performance Max, never the "plombier" head terms, no price numbers in ads, no fake claims, no ROI promise (ads-program.md:10-11, 17, 20, 127; playbook/launch-plan.md:59).

**Option 1. Back to the real 16 Sep setup.** Exactly:
- One campaign (the ring), 20 EUR a day, Maximize Conversions with no target and no cap, Search only, 106 towns, Brussels excluded, Presence (research/34:28-30; research/53:87-89).
- FR emergency with the 15 keywords of research/25:77-91: [débouchage urgent], [débouchage bruxelles], [déboucheur bruxelles], [débouchage 24h 24], [wc bouché], [évier bouché], [canalisation bouchée], [égout bouché], "société de débouchage", "débouchage vilvorde", "débouchage hal", "débouchage waterloo", "cave inondée", "refoulement égout", "eau qui remonte"; one RSA; Final URL /fr/.
- NL emergency with the 15 keywords of research/25:100-114 ("ontstoppingsbedrijf" and [ontstoppingsdienst] included); two RSAs (the Poor original and the Good one of 12 Sep, LOG.md:310); Final URL /nl/.
- 4 sitelinks a group, callouts, snippet, call asset 24/7 with reporting on (research/44:19); the shared list at 243 and 16 campaign phrase negatives (ads-program.md:91).
- Conversion actions: call_click primary; "Calls from ads" and "Calls from website" at 60 s (research/41:114).
- Site: the large cookie card that covered the hero call button on phones, so a phone visitor answered it before calling and the tap was counted for accepters (research/59:22; LOG.md:332). No per-problem pages, no Brussels wording, no Brussels campaign.
- What the 28 Sep rollback restored: the bidding only. Still different today: 30 not 20; FR emergency 8 of 15 keywords plus three FR groups; NL emergency 6 of 15; 6 sitelinks a group, business name and logo; a second FR RSA; 10 s call thresholds; the small strip; the per-problem pages; Brussels on the page and its own campaign (ads-program.md:9-14; DECISIONS.md:275).
- What cannot come back: the large card. It was a fault, fixed on purpose; restoring it to restore counting would block calls. So the phone-tap signal of A does not come back either.
- Cost: up to about 608 EUR a month at 20 (my sum, 30.4 times 20). Risk: it also brings back "ontstoppingsbedrijf", which spent 104.95 of NL's 156.14 on competitor names (research/34:109; DECISIONS.md:230). Needs: Fady's typed go (budget and Brussels are money); pauses and enables only, so no identity check is expected (AGENTS.md section 14: plain edits did not fire it).

**Option 2. Bidding.**
- **2a. Manual CPC, keyword bids, computers lowered.** Does not depend on the broken count. Device adjustments work again (they are ignored under smart bidding, ads-program.md:16), and all 5 calls and all 6 A taps were phones (research/41:100-104; research/34:277). Starting bids, my proposal: 9 EUR on the FR call-ready terms and "société de débouchage", 6 on NL emergency, 4 on the rest, computers minus 50 percent; grounds: FR emergency 5.57 in A (research/34:90), the call clicks about 14.70 (research/55:24), Planner top-of-page ranges 3 to 23 in Flemish Brabant (research/53:22-42). Risk: weekly hand-tuning, overpaying if set high. Needs Fady's typed go naming the action and the bids.
- **2b. Target impression share, top of page, cap about 12 EUR.** One setting, no signal needed. Risk: pays for position on junk queries too; with QS 1 to 3 the cap binds; A's calls came at an abs top rate of 16.99 only (research/34:331), so position is not proven as the lever. Typed go.
- **2c. Maximize Clicks with a high cap (12 to 15).** Not advised: it buys the cheapest clicks, cap or not, which is window B (research/49:77; research/57:38).
- **2d. Stay on Maximize Conversions, fix the counting first.** What ran in A. Risk: even fixed, the signal stays thin (6 taps in three weeks in A; "Calls from ads" at 10 s would have counted 1 of 5 A calls, research/41:100-104); the site fix waits by decision until after 12 Oct (DECISIONS.md:285); target CPA only at about 30 conversions in 30 days (ads-program.md:15).
- Recommended: 2a now; back to 2d when "Calls from ads" plus "Calls from website" count about 15 a month (research/43:22).

**Option 3. Consolidation.**
- **3a.** Pause FR / WC bouché, FR / Canalisation bouchée and FR / Cave inondée; re-enable the 7 paused keywords in FR emergency (back to 15). Grounds: 0 counted taps since 17 Sep (research/49:53-55; research/63:67-69), never ran on their own pages (DECISIONS.md:337), and Canalisation bouchée holds the QS 1 "débouchage canalisation", 69.08 EUR for 6 clicks in C (research/63:102). Removing beats adding. The per-problem PAGES stay live as sitelink targets.
- **3b.** Keep them and fix the URLs: the first build after 12 Oct, an identity check at Save (DECISIONS.md:339; ads-program.md:14). A Quality Score bet with no call evidence behind it.
- NL: the three NL groups stay paused; NL emergency back to its 15 minus "ontstoppingsbedrijf" (14), [ontstoppingsdienst] on at a modest bid.
- Recommended: 3a plus the NL step. Plain edits.

**Option 4. The Brussels campaign.** Its rule: 150 EUR spent with no call in the ad's call log and no tap, then pause and ask Fady (DECISIONS.md:305). At 88.14 on 4 Oct (research/63:54) and 16 a day it reaches about 150 around 8 Oct (my arithmetic); research/66 reads the real figure. Recommended: apply the rule as written, restart only after the ring calls again, then on its own 14-day read. Fady's word.

**Option 5. Keywords at Quality Score 1.** Pause, do not rebuild now: the ring's "débouchage canalisation" (goes with 3a), the ring's [débouchage bruxelles] (keep [déboucheur bruxelles] at 6, research/63:116), "ontstopping vilvoorde" (QS 1, rarely shown, research/48:158). A tight new group for them gets too few clicks to learn at this volume (my judgment). Claude's call (DECISIONS.md:247).

**Option 6. Negatives from research/63 section G** (Claude's call, ads-program.md:12). Phrase: "vidange expert", "vidange efficace", "vidange thomas", "mms debouchage", "euro debouchage", "hoe werkt", "ontstopper slang", "pompe deboucheur". Single words: outil, produit, produits. Outside-the-zone towns on the Brussels campaign: fleurus, silly. Competitor names seen with impressions: hanssens, beljet, papadebouche, djengo, "louis le deboucheur" (research/63:140). The shared list has "produit déboucheur" and "pompe vide-cave" but not bare produit or outil (research/25, section 5); check for duplicates at the build.

**Option 7. Measurement.** The CSP allows www.gstatic.com (research/54:46), preview first, one test call by Fady, live on his word. Consent mode basic or advanced is Fady's pick (research/65). The call details list 17 Sep to today (research/66).

**Recommendation.** One sitting, then 14 days hands off: 3a with the NL step, 2a, Brussels under its stop rule, 5, 6, and 7 (the counting fix has no visible change). Keep 30 a day, Roro's own choice (DECISIONS.md:229). Judge it on the ad's call log and Roro's word over 14 days, never on the click price (ads-program.md:15). Why: it is the shape that called in A, minus the one thing that cannot come back (the phone-tap signal), with bidding taken off that signal. One bundled moment gives one clean before and after, where changes spread over days do not (ads-program.md:127). Needs: Fady's typed go for the bidding and the bids; his word for pausing Brussels and for the live deploy; no identity check is expected for pauses, enables, bids and negatives.

## 6. The numbers that may be told to Roro
Filter: only calls that really happened, spend and clicks; no taps (DECISIONS.md:159; ads-program.md:42). No ROI, no forecast (G6, playbook/launch-plan.md:59).
| | 29 Aug to 16 Sep | 17 to 27 Sep | 28 Sep to 4 Oct |
|---|---|---|---|
| Spent | 379.13 EUR (research/34:36) | 336.88 EUR (my sum, section 2) | 251.19 EUR: around Brussels 163.05, in Brussels 88.14 (research/63:24, 37) |
| Clicks on the ads | 71 (research/34:34) | 108 (my sum) | 30 (research/63:26) |
| Calls through the ad's call button | 5, of which 2 missed that he called back (research/41:100-104) | 0 (research/56:24) | 0 (research/63:93) |
Keep out: counted taps, GA4, a cost per call (zero calls in B and C makes it meaningless), and the 1,300 to 1,400 EUR as an ads result (research/43:28).

## 7. Contradictions between the files
1. **[débouchage bruxelles] in the ring.** STATE.md:32 says it is bought only in the Brussels campaign, never in the ring; LOG.md:419 (22 Sep) and research/48:154 say it is not a keyword at all. Against: research/25:79 (the build sheet), research/34:120 (live, QS 2, 27 Aug to 16 Sep), research/53:72 ("an added keyword"), research/63:105, 128 (ring FR emergency, 2 clicks, 43.14 EUR, QS 1). The 22 Sep read was wrong. HANDOFF.md:32 already flags it.
2. **The FR per-problem Final URLs.** LOG.md:351 and research/40:97, 127, 137 say set to the per-problem pages; DECISIONS.md:337 and ads-program.md:14 say the ads carry /fr/. research/46:27 explains it: the wizard has two URL fields and the ad's own defaulted to /fr/. research/40:111 read a display path as the Final URL; research/41:73-74 did the same for the NL ads, against DECISIONS.md:217.
3. **"Back to the 16 Sep setup"** (DECISIONS.md:273, 275; LOG.md:461) restored the bidding only (section 5, option 1).
4. **When NL emergency was paused.** research/54:11 says 16 Sep; LOG.md:339 and DECISIONS.md:217 say decided 16 Sep, applied 17 Sep 01:25 to 01:50.
5. **GA4 taps, 27 Aug to 16 Sep.** research/58:23 says 12 events by 9 users; research/55:26 quotes research/38 as 10. Ads counted 6 (research/34:38).
6. **"Rarely shown" in window C.** research/63:284 says four keywords; its table shows five rows (research/63:102, 105, 106, 107, 112).
7. **The limiter in window B.** research/48:66 (18 to 21 Sep: budget) against research/49:47 (18 to 26 Sep: rank). The wider window holds (ads-program.md:134).

## The three facts this memo is least sure of
1. The 43.14 EUR on the ring's [débouchage bruxelles] (research/63:105, 128): the same figure appears four times in research/63 (also the ring's Sat 3 Oct cost and a second search term), and the agent warned about column order (research/63:119). The sums reconcile, so it is likely, not certain.
2. That the 5 calls were the 5 clicks missing from the landing-pages report, about 14.70 each (research/34:426; research/55:24): a session reading, never a Google statement.
3. Zero calls in window C rests on the call asset's total row only (research/63:93); the per-call list was not opened (research/63:92).
