# The rollback of 2026-09-28: the edit and its independent read-back

Two browser agents, Chrome profile fady.be, signed in as hi@fady.be, account 166-502-9105 "Pro Débouchage" under "Fady Agency", campaign "PD | Search | Ring Bruxelles | FR+NL" (24185896982). The decision and Fady's typed go: DECISIONS.md, the two entries of 2026-09-28. The evidence behind it: research/54 and research/55.

## 1. The edit (Sonnet agent, lock held 10:12 to about 10:50)
State before, read from the page: Enabled, "Eligible (Limited), Limited by bid strategy", 30.00 a day, Maximize clicks with a max CPC limit of 6.00, all 8 ad groups on. Change history held 5 rows, all of 27 Sep between 12:19 and 12:31 (the week-4 asset and ad work), nothing after.
- Edit 1, first because it stops spend: "NL | Wc verstopt", "NL | Afvoer verstopt" and "NL | Kelder leegpompen" paused.
- Edit 2: bid strategy changed to Maximize conversions, no target CPA. The budget field was not touched.
- The agent reported one misclick of its own: "Target CPA" was selected for a few seconds with an auto-filled 86.00, corrected to "Maximize conversions" before anything was saved.
- No identity check appeared. A recommendation banner ("Maximize conversions using a target CPA", Apply) was on screen and was not touched.
- Read back by the same agent after full reloads: three groups Paused, five Eligible, Maximize conversions with no target CPA, 30.00 a day, status "Eligible (Learning)", optimization score 84.2 percent (77.5 before).

## 2. The independent read-back (Opus agent, read-only, 10:51 to 11:06)
VERDICT: ROLLBACK CONFIRMED on the current state.
- Bidding: "Maximize conversions", no target CPA field or checkbox, no max CPC limit; the ad groups table shows "Target CPA" as a dash for all 8 groups.
- Budget 30.00 a day. Status Enabled, "Eligible (Learning)".
- Ad groups: NL | Kelder leegpompen, NL | Afvoer verstopt, NL | Wc verstopt Paused; FR emergency, FR | WC bouché, FR | Cave inondée, FR | Canalisation bouchée, NL emergency Eligible.
- Auto-apply: "Maintain your ads: 0 of 7 selected", "Grow your business: 0 of 14 selected".
- NOT READ: the Change history rows of 28 Sep. The presets stopped at 27 Sep and the safety check refused two ways of widening the range (a date in the URL, typing in the date box). The agent stopped there. So the misclick is proven absent now, not proven never saved. The next Ads read covers 28 Sep with a preset.

## 3. The call log of the ad's call button (Report editor, Call details)
- All time (27 Aug to 28 Sep): exactly 5 rows, all before 17 Sep: 1 Sep 13:00 missed, 4 Sep 10:00 8 s, 9 Sep 10:00 missed, 15 Sep 17:00 7 s, 16 Sep 11:00 received (duration not read this time, 39 s in research/41).
- 21 to 27 Sep: "No statistics match your filters".
- So: ZERO calls from the ad's call button from 17 Sep to 28 Sep, twelve days, against 5 in the sixteen days before.

## 4. Days read, campaign level (impressions, clicks, cost, conversions; share, lost to rank, lost to budget)
| Day | Impr | Clicks | Cost | Conv | Share | Lost rank | Lost budget |
|---|---|---|---|---|---|---|---|
| 21 Sep | 121 | 10 | 32.82 | 0 | 13.22 | 39.89 | 46.90 |
| 22 Sep | 133 | 11 | 33.95 | 0 | 16.39 | 67.37 | 16.25 |
| 23 Sep | 148 | 10 | 32.67 | 0 | 17.39 | 73.76 | 8.85 |
| 24 Sep | 88 | 11 | 33.21 | 0 | 15.80 | 58.38 | 25.82 |
| 25 Sep | 73 | 11 | 26.95 | 0 | 13.72 | 60.34 | 25.94 |
| 26 Sep | 152 | 12 | 30.42 | 0 | 19.81 | 61.16 | 19.03 |
| 27 Sep | 178 | 11 | 28.05 | 1 | derived by the agent from the total, not read | | |

Total 21 to 27 Sep: 893 impressions, 76 clicks, 218.07 EUR, 1 conversion, average CPC 2.87. The one conversion sits in NL | Afvoer verstopt (cost per conversion 110.27), a group that is paused since today. The French groups counted no tap in that week.

Not read: 18 to 20 Sep and 28 Sep by day, and the count per conversion action for the window.

## 5. Left behind
The Chrome window that chrome.cjs opened in the fady.be profile sits outside the agent's tab group and may still be open. Both agents closed their own tabs and released the lock (last release 11:06).
