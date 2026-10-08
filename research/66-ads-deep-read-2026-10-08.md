# Ads deep read, 2026-10-08 (read-only, final)

## Header

- Account: Pro Débouchage, customer ID 166-502-9105 (ocid 8499099575). The account chooser also lists "Fady Agency" (manager, 724-595-2027).
- Signed in (read from the page header): hi@fady.be, Chrome profile fady.be, extension device "Browser 1".
- Started 12:03, reading finished about 12:37, file written 12:38 (local clock, Thu 2026-10-08). Ads account time zone GMT+02:00. Reporting is not real-time, so 8 Oct is a partial day.
- What changed in the account: NOTHING. Only view settings were touched (date ranges, segments, rows per page 100 on the keywords table, "Group by type" switch on Billing activity turned off, tip popups closed). One misclick opened the "Consult your Ads expert" side panel (closed). One unsaved report view (date range on Call details) was discarded with "Leave". No save, apply, dismiss, pause, edit; no recommendation applied; no notification clicked or marked.
- Mistake to report: the tool's default browser ("Browser 2") was the TAXI account (Google Ads "Taxi Yosief"). One tab was opened there, one overview screenshot taken, the tab closed at once. Nothing from that account is recorded here. I then selected "Browser 1" (hi@fady.be) and read everything there.
- Method: tables render only the rows in view, so I scrolled and read the table text by script (exact page text, read-only). Sums are checked against page totals.

## Step 1, Brussels spend against its stop rule

**Brussels spend since 28 Sep 2026 (28 Sep to 8 Oct): EUR 149.84, 18 clicks, 465 impressions, 0.00 conversions.** The stop rule is 150 EUR: EUR 0.16 below it, and 8 Oct is a partial day (2 clicks, EUR 12.47 so far), so the line is most likely crossed today. Not acted on.

Campaigns table, 28 Sep to 8 Oct 2026:

| Campaign | Budget | Status | Impr | Clicks | CTR | Cost | Avg CPC | Conv | Conv value | Cost/conv | Bid strategy |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Brussels (24297024674) | 16.00/day | Eligible (Limited), Limited by budget | 465 | 18 | 3.87% | 149.84 | 8.32 | 0.00 | 0.00 | 0.00 | Maximize conversions |
| Ring (24185896982) | 30.00/day | Eligible (Limited), Limited by budget | 400 | 32 | 8.00% | 263.17 | 8.22 | 3.00 | 2.50 | 87.72 | Maximize conversions |
| Account | 46.00/day | | 865 | 50 | 5.78% | 413.00 | 8.26 | 3.00 | | 137.67 | |

Optimization score: Brussels 68.2%, Ring 70.1%. By day (impr/clicks/cost EUR; Ring also conversions); both columns sum to the campaign rows:

```
day;Brussels impr/clicks/cost;Ring impr/clicks/cost/conv
Mon 28 Sep;0/0/0.00;56/6/12.76/0
Tue 29 Sep;39/2/9.56;6/1/1.00/0
Wed 30 Sep;40/2/10.65;20/1/2.25/0
Thu 1 Oct;55/0/0.00;28/4/26.39/0
Fri 2 Oct;37/2/30.22;43/3/47.87/0
Sat 3 Oct;38/2/21.91;10/2/43.14/0
Sun 4 Oct;41/1/15.80;114/4/29.64/0
Mon 5 Oct;79/1/4.43;30/3/25.78/0
Tue 6 Oct;63/3/24.17;55/3/13.95/0
Wed 7 Oct;62/3/20.63;33/4/35.67/2.00
Thu 8 Oct (partial);11/2/12.47;5/1/24.72/1.00
```

5 to 8 Oct: Brussels 61.70 EUR, Ring 100.12 EUR.

Billing > Summary: Balance EUR 371.52 (equals October net cost). Next automatic payment 1 Nov, or when the balance reaches EUR 400.00. Method: Mastercard ending 2616. Last payment 1 Oct, EUR 63.15 ("Monthly charge"). October net cost 371.52, payments 63.15. September net cost 713.15, payments 679.03. August net cost 39.03, payments 10.00.

Billing activity (EUR; date, campaign, clicks, cost, credit, running balance), same figures as the table above:

Running balance after each row (EUR): 8 Oct Ring 371.52, Brussels 346.80; 7 Oct Ring 334.33, Brussels 298.66; 6 Oct Brussels 278.03, Ring 253.86; 5 Oct Ring 239.91 (credit -0.01), Brussels 214.14; 4 Oct "Adjustments: Invalid clicks: Sep, 2026, 1 campaign" credit -5.25, balance 209.71; 4 Oct Ring 214.96, Brussels 185.32. The costs and clicks in those rows are the daily figures above.

## Step 2, the call log

Call details report (Reports > Ads and assets > Call details), range All time (27 Aug to 8 Oct). Columns: Start time, Duration (seconds), Caller country code, Caller area code, Caller phone number, Recording, Status, Call source, Call type, Campaign. **5 rows. No call since 16 Sep.** The same report for 28 Sep to 8 Oct says "No statistics match your filters". No device column; call type is mobile click-to-call for all. Caller numbers are not written here, only the area code.

| # | Start | Sec | Country | Area | Status | Source | Type | Campaign |
|---|---|---|---|---|---|---|---|---|
| 1 | 1 Sep 2026 1:00 PM | 0 | 32 | none shown | Missed | Ad | Mobile click-to-call | Ring |
| 2 | 4 Sep 2026 10:00 AM | 8 | 32 | none | Received | Ad | same | Ring |
| 3 | 9 Sep 2026 10:00 AM | 0 | 32 | none | Missed | Ad | same | Ring |
| 4 | 15 Sep 2026 5:00 PM | 7 | 32 | none | Received | Ad | same | Ring |
| 5 | 16 Sep 2026 11:00 AM | 39 | 32 | 0485 | Received | Ad | same | Ring |

Assets > Associations, type Call: one call asset, account level, the business number 0480 64 96 49, status Eligible, added by Advertiser, last updated 27 Aug 2026 11:48 AM.

| Range | Row | Clicks | Impr | CTR | Avg CPC | Cost | Phone calls | Phone impr | PTR |
|---|---|---|---|---|---|---|---|---|---|
| All time (27 Aug to 8 Oct) | Total: Calls | 36 | 782 | 4.60% | 5.97 | 215.07 | 5 | 781 | 0.01 |
| 28 Sep to 8 Oct | Total: Calls | 9 | 295 | 3.05% | 4.75 | 42.73 | 0 | 295 | 0.00 |

Other asset totals (clicks/impr/cost/phone calls). All time: Sitelinks 203/2,284/978.47/3; Callouts 12/426/60.25/0; Structured snippets 1/57/2.11/0; Business name 16/237/131.61/0; Business logo 15/226/127.07/0. 28 Sep to 8 Oct: Sitelinks 40/442/345.84/0; Callouts 2/180/10.37/0; Structured snippets 0/28/0.00/0; Business name and logo the same as all time.

**What the 12 Ring "conversions" are** (Goals > Summary > View all conversion actions, All time 27 Aug to 8 Oct): `call_click` (Website, Active, Primary) 11.00, value 11.00; `whatsapp_click` (Website, Active, Primary) 1.00, value 0.50; "Calls from ads" (Call from Ads, "No recent conversions") 0.00; "Calls from website" (Website, "No recent conversions") 0.00. Total 12.00, value 11.50. All four are Primary, count One, 30-day click window, included in account-level goals. Last 7 days (1 to 7 Oct): call_click 1.00, whatsapp_click 1.00. So the conversions are TAPS on the page's call and WhatsApp buttons, not calls. Goals grouping on the summary page: Contacts and Phone call leads (group 1), Submit lead forms (group 2). Campaign goal text: "Account-default: Contacts, Phone call leads, and 1 more".

## Step 3, phones against desktop, and top of page

Campaigns table, segmented. Fields: conversions / impressions / clicks / cost EUR / avg CPC EUR. Brussels did not exist before 28 Sep (all zero in the first two ranges). Display network and search partners: 0 impressions in all ranges.

```
RANGE 27 Aug to 16 Sep 2026 (Ring only)
Ring Computers 0.00/101/2/4.11/2.06
Ring Mobile phones 6.00/903/66/367.14/5.56
Ring Tablets 0.00/7/3/7.88/2.63
Ring Total 6.00/1,011/71/379.13/5.34
Ring Google search Top 5.50/604/70/375.36/5.36
Ring Google search Other 0.50/407/1/3.77/3.77

RANGE 17 to 27 Sep 2026 (Ring only; Brussels zero)
Ring Computers 1.00/221/14/47.57/3.40
Ring Mobile phones 0.00/1,175/83/255.89/3.08
Ring Tablets 2.00/67/11/33.42/3.04
Ring Total 3.00/1,463/108/336.88/3.12
Ring Google search Top 3.00/971/105/325.29/3.10
Ring Google search Other 0.00/492/3/11.59/3.86

RANGE 28 Sep to 8 Oct 2026
Brussels Computers 0.00/100/3/25.29/8.43
Brussels Mobile phones 0.00/364/15/124.55/8.30
Brussels Tablets 0.00/1/0/0.00/none
Brussels Google search Top 0.00/259/17/145.53/8.56
Brussels Google search Other 0.00/206/1/4.31/4.31
Ring Computers 0.00/47/5/17.60/3.52
Ring Mobile phones 3.00/345/26/243.25/9.36
Ring Tablets 0.00/8/1/2.32/2.32
Ring Google search Top 3.00/237/32/263.17/8.22
Ring Google search Other 0.00/163/0/0.00/none
```

Search impression share columns, campaign level:

| Range | Campaign | Search impr share | Top IS | Abs top IS | Lost IS (rank) | Lost IS (budget) |
|---|---|---|---|---|---|---|
| 27 Aug to 16 Sep | Ring | 11.24% | < 10% | < 10% | 69.77% | 18.99% |
| 17 to 27 Sep | Ring | 19.53% | 15.35% | < 10% | 49.52% | 30.95% |
| 28 Sep to 8 Oct | Brussels | 13.03% | < 10% | < 10% | 78.19% | 8.77% |
| 28 Sep to 8 Oct | Ring | 12.97% | < 10% | < 10% | 73.01% | 14.02% |

In numbers: avg CPC on Ring went from 3.12 (17 to 27 Sep) to 8.22 (28 Sep to 8 Oct), on Ring mobile from 3.08 to 9.36. Nearly all spend sits on "Google search: Top". Ring conversions by device: 6 on mobile (first range); 1 computer and 2 tablet, 0 mobile (second range); 3 mobile (third range).

## Step 4, keywords with a labeled Quality Score read

Keywords > Search keywords, filter "Keyword status: Enabled, Paused" (all but removed), both campaigns, 100 rows per page, footer "1 - 80 of 80". Column header order on screen: Keyword | Match type | Campaign | Ad group | Status | Final URL | Clicks | Impr. | CTR | Avg. CPC | Cost | Quality Score | Exp. CTR | Landing page exp. | Ad relevance | Conv. rate | Conversions | Cost / conv. (the columns were already set; I added none). Totals 28 Sep to 8 Oct: 50 clicks, 865 impr, EUR 413.00, 3.00 conv; "AI Max expanded matches" 0 clicks 0 impr; "AI Max landing page matches" 0; "URL inclusions" 0.

Legend. Match: P phrase, E exact. Campaign: B Brussels, R Ring. Status: E Eligible; ELR Eligible (Limited) + Rarely shown (low Quality Score); NAP Not eligible, Ad group paused; NAPR NAP + Rarely shown (low QS); P Paused; PR Paused + Rarely shown (low QS); NLSV Not eligible, Low search volume. QS out of 10, then Exp. CTR, Landing page exp., Ad relevance (B Below average, A Average, + Above average); "-" no QS shown. Ad groups: g0 B "FR Bruxelles | Général"; g1 R "FR | Canalisation bouchée"; g2 R "FR emergency"; g3 R "NL emergency"; g4 B "FR Bruxelles | WC bouché"; g5 R "NL | Afvoer verstopt"; g6 B "FR Bruxelles | Canalisation bouchée"; g7 R "FR | WC bouché"; g8 R "NL | Kelder leegpompen"; g9 R "FR | Cave inondée"; g10 B "FR Bruxelles | Cave inondée"; g11 R "NL | Wc verstopt".

### Part 1, range 28 Sep to 8 Oct 2026

Fields: #;keyword;match;campaign;ad group;status;clicks;impr;cost EUR;conversions;QS+parts (zero cost shown as 0).

```
1;"société de débouchage";P;B;g0;E;11;264;69.89;0;3BAB
2;"débouchage canalisation";P;R;g1;ELR;11;94;98.42;2;1BBB
3;"société de débouchage";P;R;g2;E;8;142;38.02;0;-
4;[spoedontstopping];E;R;g3;E;3;69;27.36;0;-
5;[débouchage bruxelles];E;R;g2;ELR;2;8;43.14;0;1BBB
6;[débouchage wc];E;B;g4;ELR;2;39;34.55;0;2BBA
7;[lavabo bouché];E;R;g1;E;2;2;38.91;1;-
8;[afvoer verstopt];E;R;g5;NAPR;2;3;5.46;0;1BBB
9;"afvoer ontstoppen";P;R;g5;NAPR;2;15;4.76;0;1BBB
10;[égout bouché];E;B;g6;E;1;3;5.25;0;-
11;[débouchage canalisation];E;B;g6;ELR;1;28;9.72;0;1BBB
12;"débouchage wc";P;R;g7;ELR;1;27;4.78;0;1BBB
13;[débouchage];E;B;g0;ELR;1;9;4.31;0;1BBB
14;[déboucheur bruxelles];E;B;g0;E;1;59;15.80;0;3BB+
15;[débouchage bruxelles];E;B;g0;E;1;50;10.32;0;3BB+
16;"débouchage évier";P;R;g1;E;1;1;2.32;0;-
17;[canalisation bouchée];E;R;g2;P;0;0;0;0;3BAB
18;[déboucheur bruxelles];E;R;g2;E;0;1;0;0;6AAA
19;[wc bouché];E;R;g2;P;0;0;0;0;-
20;[égout bouché];E;R;g2;P;0;0;0;0;-
21;[débouchage 24h 24];E;R;g2;E;0;0;0;0;-
22;"cave inondée";P;R;g2;P;0;0;0;0;3BB+
23;"débouchage waterloo";P;R;g2;ELR;0;1;0;0;1BBB
24;"refoulement égout";P;R;g2;P;0;0;0;0;-
25;[évier bouché];E;R;g2;P;0;0;0;0;3BB+
26;"débouchage hal";P;R;g2;NLSV;0;0;0;0;-
27;"débouchage vilvorde";P;R;g2;NLSV;0;0;0;0;-
28;[débouchage urgent];E;R;g2;E;0;1;0;0;-
29;"eau qui remonte";P;R;g2;P;0;0;0;0;-
30;[canalisation bouchée];E;B;g6;E;0;0;0;0;-
31;[évier bouché];E;B;g6;E;0;0;0;0;-
32;[toilette bouchée];E;R;g7;E;0;0;0;0;-
33;[wc bouché];E;R;g7;E;0;1;0;0;3BB+
34;"wc bouché urgent";P;R;g7;E;0;7;0;0;-
35;[wc qui déborde];E;R;g7;E;0;0;0;0;-
36;"water in de kelder";P;R;g8;NAP;0;0;0;0;-
37;[kelder onder water];E;R;g8;NAP;0;0;0;0;-
38;"wateroverlast kelder";P;R;g8;NAP;0;0;0;0;-
39;"kelder leegpompen";P;R;g8;NAP;0;0;0;0;-
40;[ondergelopen kelder];E;R;g8;NAP;0;0;0;0;-
41;"cave inondée";P;R;g9;E;0;0;0;0;-
42;[eau dans la cave];E;R;g9;E;0;0;0;0;-
43;[pompage cave];E;R;g9;E;0;1;0;0;-
44;"pompage de cave";P;R;g9;E;0;1;0;0;-
45;"cave sous eau";P;R;g9;NLSV;0;0;0;0;-
46;[débouchage urgent];E;B;g0;ELR;0;2;0;0;1BBB
47;[wc bouché];E;B;g4;E;0;5;0;0;3BB+
48;[canalisation bouchée];E;R;g1;E;0;4;0;0;3BAB
49;[douche bouchée];E;R;g1;E;0;2;0;0;5AB+
50;[égout bouché];E;R;g1;E;0;0;0;0;-
51;"refoulement égout";P;R;g1;E;0;0;0;0;-
52;[évier bouché];E;R;g1;E;0;2;0;0;-
53;"eau qui remonte";P;R;g1;E;0;0;0;0;-
54;"cave inondée";P;B;g10;E;0;6;0;0;5BA+
55;[riool verstopt];E;R;g5;NAP;0;0;0;0;-
56;"gootsteen ontstoppen";P;R;g5;NAPR;0;1;0;0;1BBB
57;[douche verstopt];E;R;g5;NAP;0;1;0;0;-
58;[gootsteen verstopt];E;R;g5;NAP;0;1;0;0;-
59;[lavabo verstopt];E;R;g5;NAPR;0;1;0;0;1BBB
60;"water komt omhoog";P;R;g5;NAP;0;0;0;0;-
61;"riool verstopt wie bellen..";P;R;g5;NAP;0;0;0;0;-
62;[afvoer verstopt];E;R;g3;P;0;0;0;0;-
63;[riool verstopt];E;R;g3;P;0;0;0;0;-
64;[wc verstopt];E;R;g3;P;0;0;0;0;3BB+
65;"ontstoppingsbedrijf";P;R;g3;P;0;0;0;0;-
66;[ontstoppingsdienst];E;R;g3;PR;0;0;0;0;2BBA
67;[gootsteen verstopt];E;R;g3;P;0;0;0;0;-
68;"kelder leegpompen";P;R;g3;PR;0;0;0;0;1BBB
69;[ontstopping brussel];E;R;g3;E;0;2;0;0;5AB+
70;"ontstopping vilvoorde";P;R;g3;ELR;0;2;0;0;1BBB
71;"ontstopping halle";P;R;g3;E;0;3;0;0;3BB+
72;[dringende ontstopping];E;R;g3;E;0;0;0;0;-
73;"water komt omhoog";P;R;g3;P;0;0;0;0;-
74;"ontstopping zaventem";P;R;g3;E;0;0;0;0;-
75;"riool verstopt wie bellen..";P;R;g3;P;0;0;0;0;-
76;[verstopte wc];E;R;g11;NAP;0;0;0;0;4ABA
77;[wc verstopt];E;R;g11;NAPR;0;0;0;0;1BBB
78;[toilet verstopt];E;R;g11;NAPR;0;1;0;0;2BBA
79;"wc ontstoppen";P;R;g11;NAPR;0;5;0;0;1BBB
80;"wc loopt over";P;R;g11;NAP;0;1;0;0;-
```

(Two keyword texts, rows 61 and 75, were cut by my read at 26 characters.) The 3 conversions of this range sit on row 2 ("débouchage canalisation", Ring, 2.00) and row 7 ([lavabo bouché], Ring, 1.00). Brussels spend by keyword: row 1 69.89, row 6 34.55, row 14 15.80, row 15 10.32, row 11 9.72, row 10 5.25, row 13 4.31 (sum 149.84). Highest QS on any row is 6 (row 18); 5 on rows 49, 54, 69. Every keyword that took a click and shows a QS is at 1 to 3.

### Part 2, same table, range All time (27 Aug to 8 Oct 2026)

Totals row: 229 clicks, avg CPC 4.93, CTR 5.24%, cost EUR 1,129.01. 80 rows, 65 with impressions. Fields: rank;keyword;match;campaign;clicks;impr;cost;conv;QS. Ad group not captured in this part ([wc verstopt] appears twice on Ring, in two ad groups).

```
1;"société de débouchage";P;R;57;694;242.76;4;-
2;"afvoer ontstoppen";P;R;45;525;135.15;2;1
3;"ontstoppingsbedrijf";P;R;19;369;104.95;0;-
4;"débouchage canalisation";P;R;15;272;108.21;2;1
5;"wc ontstoppen";P;R;12;159;33.84;0;1
6;"société de débouchage";P;B;11;264;69.89;0;3
7;[wc verstopt];E;R;7;42;21.12;0;3
8;[toilet verstopt];E;R;6;43;18.28;0;2
9;[spoedontstopping];E;R;5;87;37.12;0;-
10;[gootsteen verstopt];E;R;4;26;9.99;0;-
11;[wc verstopt];E;R;4;26;13.11;0;1
12;[débouchage 24h 24];E;R;3;11;18.91;0;-
13;"débouchage wc";P;R;3;98;12.14;0;1
14;"gootsteen ontstoppen";P;R;3;67;5.68;0;1
15;[déboucheur bruxelles];E;R;2;32;15.95;0;6
16;[débouchage bruxelles];E;R;2;38;43.14;0;1
17;"cave inondée";P;R;2;10;31.18;1;3
18;"wateroverlast kelder";P;R;2;15;6.05;0;-
19;[débouchage wc];E;B;2;39;34.55;0;2
20;"débouchage évier";P;R;2;26;5.75;0;-
21;[lavabo bouché];E;R;2;4;38.91;1;-
22;[afvoer verstopt];E;R;2;3;5.46;0;1
23;[ontstoppingsdienst];E;R;2;60;12.73;0;2
24;"ontstopping zaventem";P;R;2;4;13.72;1;-
25;[canalisation bouchée];E;R;1;30;18.84;1;3
26;"débouchage waterloo";P;R;1;8;2.90;0;1
27;[égout bouché];E;B;1;3;5.25;0;-
28;[débouchage canalisation];E;B;1;28;9.72;0;1
29;[toilette bouchée];E;R;1;18;5.17;0;-
30;"wc bouché urgent";P;R;1;16;3.85;0;-
31;"water in de kelder";P;R;1;10;3.91;0;-
32;"kelder leegpompen";P;R;1;13;2.51;0;-
33;[débouchage];E;B;1;9;4.31;0;1
34;[déboucheur bruxelles];E;B;1;59;15.80;0;3
35;[débouchage bruxelles];E;B;1;50;10.32;0;3
36;[douche verstopt];E;R;1;38;1.94;0;-
37;"kelder leegpompen";P;R;1;7;1.69;0;1
38;[verstopte wc];E;R;1;6;2.66;0;4
39;"wc loopt over";P;R;1;16;1.56;0;-
```

Rows 40 to 65 (all with 0 clicks, 0 cost, 0 conversions), impressions only: [wc bouché] R 3; [égout bouché] R 1; "refoulement égout" R 2; [évier bouché] R 1; [débouchage urgent] R 2; "eau qui remonte" R 6; [wc bouché] R 3; "cave inondée" R 2; [pompage cave] R 2; "pompage de cave" R 1; [débouchage urgent] B 2; [wc bouché] B 5; [canalisation bouchée] R 10; [douche bouchée] R 8; [égout bouché] R 1; "refoulement égout" R 1; [évier bouché] R 11; "eau qui remonte" R 1; "cave inondée" B 6; [riool verstopt] R 1; [lavabo verstopt] R 15; "water komt omhoog" R 6; [ontstopping brussel] R 7; "ontstopping vilvoorde" R 6; "ontstopping halle" R 6; "water komt omhoog" R 5. 15 more rows have zero impressions all time (for example "débouchage hal", "débouchage vilvorde", [wc qui déborde], [kelder onder water], "cave sous eau", [dringende ontstopping]).

All-time conversions by keyword (sum 12.00, all Ring): "société de débouchage" 4; "afvoer ontstoppen" 2; "débouchage canalisation" 2; "cave inondée" 1; [lavabo bouché] 1; "ontstopping zaventem" 1; [canalisation bouchée] 1. Brussels keywords: 0. "société de débouchage" (phrase, Brussels): 11 clicks, 69.89 EUR, all of it since 28 Sep.

## Step 5, search terms

Keywords > Search terms, columns Search term | Match type | Added/Excluded | Campaign | Ad group | Clicks | Impr. | CTR | Avg. CPC | Cost | Campaign type | Keyword | Conv. rate | Conversions | Cost / conv. Sorted by cost, highest first. Only the rows with a cost were read (the rest have 0 clicks).

### Range 28 Sep to 8 Oct 2026 (225 rows in total)

Footer lines: Total Search terms 34 clicks, 569 impr, CTR 5.98%, avg CPC 8.83, EUR 300.21, conv rate 8.82%, 3.00 conv, cost/conv 100.07. **Other search terms: 16 clicks, 296 impressions, CTR 5.41%, avg CPC 7.05, EUR 112.80, 0.00 conv** (hidden by Google; by subtraction Brussels about 68.69 EUR / 8 clicks, Ring about 44.11 EUR / 8 clicks). Total Account 50 clicks, 865 impr, EUR 413.00.

28 rows with a cost (sum 34 clicks, EUR 300.21, equals the footer). Fields: #;term;match;campaign;ad group;clicks;impr;cost;conv. Terms 2, 3, 5 and 14 are already keywords ("Added"); the rest are not.

```
1;debouchage canalisation autour de moi;Exact;R;FR/Canalisation bouchée;2;1;43.14;0
2;débouchage bruxelles;Exact;R;FR emergency;2;8;43.14;0
3;ontstoppingsdienst;Exact;R;NL emergency;3;59;27.36;0
4;deboucheur lavabo;Exact;R;FR/Canalisation bouchée;1;1;24.72;1
5;débouchage wc;Exact;B;FR Bruxelles/WC bouché;1;8;21.73;0
6;debouchage canalisation autour de moi;Exact;R;FR emergency;1;3;15.47;0
7;deboucher wc;Exact;B;FR Bruxelles/WC bouché;1;2;12.82;0
8;sos deboucheur;Phrase;B;FR Bruxelles/Général;1;2;10.59;0
9;débouchage canalisation bruxelles;Exact;B;FR Bruxelles/Général;1;18;10.32;0
10;deboucheur canalisation near me;Phrase;R;FR/Canalisation bouchée;1;1;10.20;2
11;vidange expert;Phrase;R;FR emergency;2;6;10.19;0
12;débouchage fleurus;Phrase;B;FR Bruxelles/Général;1;2;6.44;0
13;mms debouchage;Phrase;R;FR/Canalisation bouchée;1;1;5.91;0
14;afvoer verstopt;Exact;R;NL/Afvoer verstopt;2;3;5.46;0
15;debouchage canalisation;Exact;R;FR/Canalisation bouchée;1;6;5.42;0
16;egout bouché;Exact;B;FR Bruxelles/Canalisation bouchée;1;2;5.25;0
17;debouchage grimbergen;Phrase;R;FR emergency;1;2;4.88;0
18;deboucheur wc;Phrase;R;FR/WC bouché;1;3;4.78;0
19;vidange thomas;Phrase;R;FR/Canalisation bouchée;1;2;4.54;0
20;debouchage canalisation;Exact;B;FR Bruxelles/Général;1;1;4.31;0
21;débouchage prix;Phrase;B;FR Bruxelles/Général;1;1;3.97;0
22;vidange services;Phrase;B;FR Bruxelles/Général;1;2;3.84;0
23;deboucheur professionnel;Phrase;R;FR/Canalisation bouchée;1;1;3.71;0
24;prix débouchage wc;Phrase;R;FR emergency;1;1;3.06;0
25;ontstopper slang;Phrase;R;NL/Afvoer verstopt;1;1;2.69;0
26;debouchage evier cuisine;Exact;R;FR/Canalisation bouchée;1;1;2.32;0
27;hoe werkt een ontstopper;Phrase;R;NL/Afvoer verstopt;1;1;2.07;0
28;debouchage liege;Phrase;B;FR Bruxelles/Général;1;2;1.88;0
```

Brussels terms with a cost (rows 5, 7, 8, 9, 12, 16, 20, 21, 22, 28): 10 clicks, EUR 81.15. Places far from Brussels: "débouchage fleurus" (Brussels campaign, 6.44), "debouchage liege" (Brussels campaign, 1.88). Terms with "vidange" or what look like company names (my reading): "vidange expert" (10.19), "vidange thomas" (4.54), "vidange services" (3.84), "mms debouchage" (5.91). Conversions: "deboucheur lavabo" 1, "deboucheur canalisation near me" 2.

### Range 27 Aug to 16 Sep 2026 (251 rows in total; Ring only)

Footer lines: Total Search terms 35 clicks, 599 impr, CTR 5.84%, avg CPC 5.22, EUR 182.65, 0.00 conv. **Other search terms: 35 clicks, 412 impr, CTR 8.50%, avg CPC 5.50, EUR 192.63, conv rate 17.14%, 6.00 conv, cost/conv 32.11** (all 6 conversions of this range are in the hidden terms). Total Account 71 clicks, 1,011 impr, EUR 379.13, 6.00 conv.

29 rows with a cost (sum 35 clicks, EUR 182.65, equals the footer). Fields: #;term;match;campaign;ad group;clicks;impr;cost;conv (all R, all 0 conv). Terms 5 and 20 are already keywords.

```
1;cave inondée quand il pleut;Exact;FR emergency;1;2;22.90
2;moens ontstoppingsdienst;Phrase;NL emergency;3;17;16.25
3;vleminck ontstoppingsdienst;Phrase;NL emergency;1;2;15.64
4;service debouchage canalisation;Exact;FR emergency;2;1;13.48
5;ontstoppingsdienst;Exact;NL emergency;2;45;12.73
6;dhm service debouchage;Phrase;FR emergency;2;3;12.20
7;maxi cleaning zaventem;Phrase;FR emergency;1;1;8.74
8;gailly vidange fosse;Phrase;FR emergency;1;5;6.54
9;spoed ontstoppingsdienst;Exact;NL emergency;1;5;6.46
10;vidange fosse septique bruxelles;Phrase;FR emergency;1;5;6.45
11;ontstoppingsdienst prijzen;Phrase;NL emergency;1;7;6.27
12;riool ontstoppen prijs;Phrase;NL emergency;1;1;5.97
13;vidange fosse septique waterloo;Phrase;FR emergency;1;3;5.04
14;vidange fosse septique autour de moi;Phrase;FR emergency;1;3;4.53
15;maigret overijse;Phrase;NL emergency;2;2;4.04
16;vidange nette prix;Phrase;FR emergency;1;1;4.02
17;toilet ontstoppen;Exact;NL emergency;1;1;3.91
18;wc verstopt hoe oplossen;Exact;NL emergency;1;1;3.43
19;lazeroms mechelen;Phrase;NL emergency;1;15;3.23
20;wc verstopt;Exact;NL emergency;1;7;2.94
21;bob service waterloo;Phrase;FR emergency;1;2;2.90
22;de vleminck ninove;Phrase;FR emergency;1;4;2.87
23;wc verstropt;Exact;NL emergency;1;1;2.58
24;prix debouchage evier cuisine;Phrase;FR emergency;1;1;2.30
25;lazeroms ruimdienst;Phrase;NL emergency;1;4;2.11
26;brutout prix;Phrase;FR emergency;1;4;1.81
27;vidange fosse septique gembloux;Phrase;FR emergency;1;2;1.50
28;verstopte wc;Exact;NL emergency;1;3;1.29
29;prix débouchage canalisation haute pression;Phrase;FR emergency;1;5;0.52
```

Rows 30 to 40 have 0 clicks (Dutch exact terms, 1 to 5 impressions). My reading (not Google's): 11 of the 29 costed rows (2, 3, 6, 7, 8, 15, 19, 21, 22, 25, 26) look like other companies' names and 4 (10, 13, 14, 27) are septic tank emptying. The triggering keyword column was not read for this range.

## Step 6, campaign settings, both campaigns

Read from three places: the campaigns page "Settings" tab (table), the campaign "Campaign settings" side panel (its section "Other settings" stayed on grey loading bars for 20 seconds in both campaigns and never loaded), and the Locations, Ad schedule, Devices pages. The old direct settings address answers 404. Nothing edited.

| Setting | Brussels (24297024674) | Ring (24185896982) |
|---|---|---|
| Status | Enabled; Eligible (Limited), Limited by budget | same |
| Start date / end date | 28 Sep 2026 / none | 27 Aug 2026 / none |
| Budget | EUR 16.00/day | EUR 30.00/day |
| Bidding | Maximize conversions; Target CPA column "-" (no target, no max CPC limit shown) | same |
| Conversion goals | Account-default: Contacts, Phone call leads, and 1 more | same |
| Customer acquisition / value rules | Bid equally for new and existing / no rule | same |
| Networks | Google search (side panel: "Google Search Network"; no partners, no display) | same |
| Ad rotation | Optimize: Prefer best performing ads | same |
| Languages | **All languages** | **All languages** |
| Location column | Brussels | "Bertem; Hoeilaart; (104 more)", (1 excluded) |
| Ad schedule | All day ("eligible to show all the time") | All day |
| Bid adjustments | Active bid adj.: None; Devices: All; no device bid adjustment (Devices page); Calls interaction: no adjustment | same (Calls: not read) |
| AI Max for Search campaigns | toggle OFF | toggle OFF |
| Location option (Presence vs Presence or interest), text customization, final URL expansion, automatically created assets | not read | not read |

Locations:
- **Brussels campaign**: targeted "Brussels, Belgium" only. Excluded: none ("You haven't excluded any locations"). Row for 1 to 7 Oct: 12 clicks, 375 impr, EUR 117.16.
- **Ring campaign**: 106 targeted locations (no bid adjustments) and **1 excluded location: "Brussels, Belgium"**. "Brussels" is not in the targeted list. Targeted (F Flanders, W Wallonia, plain number = postcode): Bonheiden F, Zaventem F, Aalst F, Machelen F, Dilbeek F, Halle F, Asse F, Mechelen F, Grimbergen F, Beersel F, Liedekerke F, Ninove F, Braine-le-Comte W, 1470 W, Leuven F, Sint-Pieters-Leeuw F, Ternat F, Vilvoorde F, Wavre W, Haaltert F, Overijse F, Lede F, Zemst F, Hoeilaart F, Kraainem F, Steenokkerzeel F, Lasne W, Braine-le-Chateau W, Silly W, Puurs-Sint-Amands F, Beauvechain W, Bierbeek F, Kortenberg F, Meise F, Tervuren F, Wemmel F, Zele F, Braine-l'Alleud W, Nivelles W, Waterloo W, Herne F, Denderleeuw F, Huldenberg F, Merchtem F, Lint F, Waasmunster F, 1640 F, Rebecq W, Bertem F, Aarschot F, Lubbeek F, Dendermonde F, Grez-Doiceau W, Ottignies-Louvain-la-Neuve W, Galmaarden F, Gooik F, Chaumont-Gistoux W, Erpe-Mere F, Wezembeek-Oppem F, Boom F, Bornem F, Duffel F, Edegem F, Hemiksem F, Kontich F, Rumst F, Schelle F, Sint-Katelijne-Waver F, Willebroek F, Boutersem F, Haacht F, Herent F, Holsbeek F, Keerbergen F, Lennik F, Londerzeel F, Opwijk F, Roosdaal F, Rotselaar F, Tremelo F, Buggenhout F, Hamme F, Kruibeke F, Lebbeke F, Temse F, Aartselaar F, Boortmeerbeek F, Court-Saint-Etienne W, Genval W, Kampenhout F, La Hulpe W, Tubize W, Enghien W, Mont-Saint-Guibert W, Wichelen F, Berlare F, Herzele F, Affligem F, Putte F, Kapelle-op-den-Bos F, Hove F, Villers-la-Ville W, Niel F, 1460 W, 7190 W, 3050 F.
- Ring location with the most spend, 1 to 7 Oct: Dilbeek EUR 49.05 (3 clicks, 16 impr) of 222.44 in total.

## Step 7, ads and policy (28 Sep to 8 Oct 2026)

Ads, both campaigns, footer "1 - 14 of 14", all responsive search ads. Columns: Ad | Campaign | Ad group | Status | Ad strength | Ad type | Clicks | Impr. | CTR | Avg. CPC | Cost | Final URL | Conv. rate | Conversions | Cost / conv. No status cell carries policy text; none says Disapproved or Approved (limited). Totals: 50 clicks, 865 impr, EUR 413.00.

```
#;campaign;ad group;status;ad strength;clicks;impr;cost;conv
1;Ring;FR/Canalisation bouchée;Eligible;Excellent;14;105;139.65;3.00
2;Brussels;FR Bruxelles/Général;Eligible;Average;14;384;100.32;0
3;Ring;FR emergency;Eligible;Average;8;95;64.52;0
4;Ring;NL/Afvoer verstopt;Not eligible (Ad group paused);Average;4;22;10.22;0
5;Ring;FR emergency (2nd ad);Eligible;Average;2;58;16.64;0
6;Ring;NL emergency;Eligible;Good;2;23;22.70;0
7;Brussels;FR Bruxelles/Canalisation bouchée;Eligible;Good;2;31;14.97;0
8;Brussels;FR Bruxelles/WC bouché;Eligible;Good;2;44;34.55;0
9;Ring;NL emergency (2nd ad);Eligible;Poor;1;53;4.66;0
10;Ring;FR/WC bouché;Eligible;Average;1;35;4.78;0
11;Ring;FR/Cave inondée;Eligible;Poor;0;2;0;0
12;Ring;NL/Kelder leegpompen;Not eligible (Ad group paused);Good;0;0;0;0
13;Ring;NL/Wc verstopt;Not eligible (Ad group paused);Excellent;0;7;0;0
14;Brussels;FR Bruxelles/Cave inondée;Eligible;Good;0;6;0;0
```

Ad 1 headlines as shown: "Canalisation bouchée ? Appelez | Évier bouché ? On vient | Douche bouchée, ça remonte ? +12 more", display URL prodebouchage24.be/debouchage/canalisation, description starts "Le prix vous est dit au téléphone et confirmé à votre porte, avant qu'on commence." All 3 conversions of the range come from ad 1.

The Brussels "FR Bruxelles | WC bouché" ad (ID 826354415165): the table has no Ad ID column, so I matched by ad group. It is row 8: Status **Eligible** (no policy text), strength Good, 2 clicks, 44 impr, EUR 34.55, 0 conversions. Ad ID itself not read.

Policy manager (reached through Admin > Policy > Summary, not through Tools > Troubleshooting): "You don't have any account issues" and "You don't have any ad issues". The Account and Ads sub-pages were not opened.

## Step 8, auction insights and notifications

Insights and reports > Auction insights: one combined table ("All campaigns, 2 campaigns", network "Search"). I did not split it by campaign: the per-campaign split is NOT read. The "You" row says 13.03% for 28 Sep to 8 Oct, the same figure as the Brussels campaign alone (Ring alone 12.97%), and 11.19% for 27 Aug to 16 Sep (Ring alone 11.24%). Fields: domain;impression share;overlap rate;position above rate;top of page rate;abs top of page rate;outranking share.

```
RANGE 28 Sep to 8 Oct 2026 (17 rows)
services-metens.be;15.82%;13.57%;81.00%;74.86%;35.98%;11.59%
leaderservices.be;15.27%;13.16%;86.60%;80.44%;53.36%;11.54%
jerrydebouchage.be;13.64%;9.09%;80.60%;62.18%;15.54%;12.07%
kldebouchage.com;13.50%;5.56%;80.49%;78.01%;48.69%;12.44%
YOU;13.03%;-;-;67.30%;18.18%;-
plomberie-martin.be;12.97%;3.93%;75.86%;74.66%;38.15%;12.64%
itrplomberie.be;12.18%;11.94%;57.95%;69.81%;16.98%;12.12%
plomberie-expert.be;11.24%;14.25%;76.19%;75.16%;27.99%;11.61%
sanitair-expert.com;11.01%;7.46%;70.91%;74.16%;26.48%;12.34%
franklindebouchage.be;10.46%;13.43%;52.53%;73.99%;37.50%;12.11%
debouchagedegouts.be;<10%;12.75%;70.21%;73.04%;32.24%;11.86%
hendydebouchage.be;<10%;4.21%;70.97%;65.42%;20.93%;12.64%
btp-debouchage.be;<10%;10.85%;63.75%;73.79%;23.79%;12.12%
debouchtout.be;<10%;8.41%;46.77%;68.67%;21.08%;12.51%
plombier-benoit.be;<10%;1.76%;53.85%;61.82%;10.81%;12.90%
debouchage-degroote.be;<10%;3.66%;81.48%;76.76%;35.00%;12.64%
christopheberiot.be;<10%;6.92%;37.25%;64.26%;12.46%;12.69%

RANGE 27 Aug to 16 Sep 2026 (19 rows)
spoed-ontstoppingsdienst.com;21.18%;9.92%;87.95%;86.93%;52.21%;10.22%
YOU;11.19%;-;-;72.40%;16.97%;-
jerrydebouchage.be;10.53%;11.47%;85.42%;72.81%;24.40%;10.10%
toro24.be;<10%;6.93%;60.34%;80.89%;38.82%;10.73%
kldebouchage.com;<10%;4.30%;86.11%;85.53%;55.51%;10.78%
franklindebouchage.be;<10%;14.93%;64.00%;69.74%;18.76%;10.12%
ontstoppingsservice.be;<10%;3.82%;46.88%;65.45%;21.82%;10.99%
devleminckjan.be;<10%;3.58%;56.67%;73.75%;14.42%;10.97%
derioolkrak.be;<10%;6.57%;60.00%;72.30%;16.22%;10.75%
debouchagedegouts.be;<10%;10.27%;69.77%;84.84%;36.41%;10.39%
ontstoppingdirect.be;<10%;6.81%;66.67%;65.66%;10.10%;10.69%
ontstoppingsdienst-vlaanderen.com;<10%;4.66%;92.31%;79.70%;39.77%;10.71%
riooldetective.be;<10%;5.73%;66.67%;78.34%;23.53%;10.77%
dvi-ontstoppingen.be;<10%;4.54%;68.42%;69.90%;22.77%;10.85%
hendydebouchage.be;<10%;2.75%;60.87%;76.23%;32.30%;11.01%
vidange-services.be;<10%;1.91%;62.50%;80.60%;23.93%;11.06%
spoedservices.be;<10%;16.85%;64.54%;76.76%;20.66%;9.98%
onstoppingdienst-garant.com;<10%;3.94%;81.82%;86.53%;56.73%;10.83%
longinservice.be;<10%;4.42%;62.16%;67.01%;16.39%;10.89%
```

Plain reading: every competitor shown is above us in 37% to 92% of the auctions we share, and our abs. top of page rate is 18.18% (28 Sep to 8 Oct) and 16.97% (27 Aug to 16 Sep).

Notifications: the bell showed 8. I opened the list, read it, pressed Escape; nothing clicked, marked or dismissed. The 8 texts, in order:
1. "Make it easier for customers to click": "Add sitelinks to your ads so shoppers can go straight to the pages they're most interested in" (Get started). Sitelinks already exist (step 9), so this is Google's generic prompt.
2. "Get EUR 400 ad credit!": "Spend EUR 400 before October 26, 2026 to get a EUR 400 Google Ads credit towards future spend. Check your progress! Terms apply." (View, Learn more)
3. "Generate more leads with Click To Whatsapp Ads": "Your account is eligible to use Message Ads ... via Click-to-Whatsapp ads. Click Get Started to set this up." (Get Started, Learn more)
4. "Payment threshold updated": "Your payment threshold has been automatically updated. The frequency of your charges may change, but you'll only be charged for your spend." (View)
5. "Add Dynamic Image Assets": use landing page images in text ads to improve CTR (View)
6. "Add image assets to your ads": "Your ads aren't as prominent as they could be if you used image assets." (View)
7. "Turn on AI Max": "Get more conversions at a similar cost by allowing Google AI to find better performing traffic and serve more relevant ads" (Apply, View)
8. "Thanks for verifying!": "The verified advertiser name and location for each of these accounts will now appear in your ad disclosures. We'll let you know if we need more information in future." (Learn more)

## Step 9, assets and the promo

Assets > Associations, filter "Asset status: Enabled, Paused", default range Last 7 days (1 to 7 Oct) for the statistics; status does not depend on the range.
- **Business name**: one asset "Pro Débouchage", Account level, **Eligible**, added by Advertiser, last updated 19 Sep 2026 1:46 AM; 13 clicks, 221 impr, CTR 5.88%, avg CPC 7.26, EUR 94.42.
- **Business logo**: three rows, all **Eligible**, added by Advertiser: Account level (updated 19 Sep 1:51 AM; 12 clicks, 211 impr, EUR 89.88); Campaign level (updated 27 Sep 12:19 PM; 6 clicks, 83 impr, EUR 45.08); Campaign level (updated 28 Sep 3:51 PM; 6 clicks, 128 impr, EUR 44.80). Which campaign each campaign-level row belongs to: not read.
- **Sitelinks**: 67 association rows in 12 ad groups (4 Brussels, 8 Ring), all level Ad group, **all status Eligible, no policy text on any row**.
  - Brussels "FR Bruxelles | Canalisation bouchée": Qui vient chez vous; Nos conditions; Comment ça se passe; **Le prix d'un débouchage** ("Évier, lav..."), Eligible, updated 28 Sep 4:31 PM; Garantie 30 jours. 5 rows.
  - Brussels "FR Bruxelles | Général": Qui vient chez vous; Les prix, tout compris; Comment ça se passe; WC bouché ? Le prix ici; Nos conditions; Cave inondée ? On pompe. 6 rows.
  - Brussels "FR Bruxelles | WC bouché": Qui vient chez vous; Nos conditions; Garantie 30 jours; Comment ça se passe; Le prix d'un WC bouché. 5 rows.
  - Brussels "FR Bruxelles | Cave inondée": Qui vient chez vous; Nos conditions; Comment ça se passe; Le prix d'un pompage. 4 rows. All Brussels sitelinks updated 28 Sep 2026 between 4:19 and 4:33 PM.
  - Ring: 8 ad groups (FR emergency, FR | WC bouché, NL | Kelder leegpompen, FR | Cave inondée, FR | Canalisation bouchée, NL | Afvoer verstopt, NL emergency, NL | Wc verstopt), French and Dutch sitelinks, last updated between 27 Aug and 27 Sep 2026.

Billing > Promotions: "Get EUR 400.00 credit for spending EUR 400.00 on Google Ads". Credits granted: none ("--"). Status **Processing**. Date redeemed 27 Aug 2026. Complete requirements by **26 Oct 2026**. Credit expiration "Once earned, use your credit within 60 days". Credits spent "Data not yet available". Billed net cost since 27 Aug is about 1,123.70 EUR (39.03 + 713.15 + 371.52), already over 400, and the status is still Processing; the page does not say why.

## Not read (every gap, with the reason)

- Per-campaign split of Auction insights (the page was read as one combined table).
- Campaign settings fields that stayed on loading bars or have no column: location option (Presence vs Presence or interest), text customization, final URL expansion, automatically created assets, the "Limited" reason beyond "Limited by budget"; Calls bid adjustment for Ring.
- Ad ID 826354415165 itself (no ID column); the Account and Ads sub-pages of Policy manager.
- Which campaign each campaign-level business logo row belongs to.
- Keyword columns CTR, avg CPC, conv rate, cost/conv and Final URL (derivable, not copied). Search terms rows without a cost (only the costed rows were read; 225 and 251 rows exist).
- Keyword ad group in the All-time part; the triggering keyword for the 27 Aug to 16 Sep search terms.
- Device on the call log (the report has no device column).
- The exact conversion split for 8 Oct (1.00 on Ring, action not shown).

## Anything red or odd

1. Brussels is at EUR 149.84 against the 150 stop rule with 0 conversions and 0 calls, and 8 Oct is not over.
2. Zero calls since 16 Sep; the longest call ever was 39 seconds. The call asset got 9 clicks and 295 impressions since 28 Sep and 0 phone calls. The "conversions" are 11 call_click taps and 1 whatsapp_click tap; "Calls from ads" and "Calls from website" show 0.00 and "No recent conversions".
3. Average CPC jumped from about 3.1 EUR (17 to 27 Sep) to about 8.2 EUR (28 Sep to 8 Oct); single days of 15 to 25 EUR per click on both campaigns (2 Oct, 3 Oct, 4 Oct, 8 Oct).
4. Nearly all paid clicks are on "Google search: Top", and 73 to 78 percent of lost impression share is lost to RANK (not budget), while both campaigns carry "Limited by budget".
5. Search terms in the paid list that look like other companies' names or septic emptying; Brussels campaign clicks on "débouchage fleurus" and "debouchage liege". Every keyword with clicks and a Quality Score shows 1 to 3 (below average expected CTR).
6. Both campaigns are set to "All languages" (Ring is named FR+NL). Ring has 106 targeted places and excludes Brussels; Brussels targets Brussels only.
7. The 400 EUR promo still says Processing with no credit although spend is far above 400 EUR. Google changed the payment threshold on its own (notification 4); the balance is 371.52 against an automatic payment at 400.00, so a card charge of about 400 EUR is probably due within a day.
8. An invalid-clicks credit of EUR 5.25 on 4 Oct for September.
9. Banner "Secure access to important actions by October 15": passkeys will be required to manage users, link accounts and other sensitive actions. Not acted on. The bell showed 8 notifications (7 on 5 Oct).
10. Offers on screen, none touched: "Add broad match keywords" (+0.1%), "Turn on AI Max" (+11.9%, Apply all), Click-to-WhatsApp ads, image assets. AI Max is OFF on both campaigns and the AI Max rows in the keyword report show 0.
11. Three Ring Dutch ad groups (NL | Afvoer verstopt, NL | Kelder leegpompen, NL | Wc verstopt) are "Ad group paused" (their keywords and ads read "Not eligible"), while their sitelinks still read Eligible. The Dutch ad group "NL emergency" is the one serving Dutch searches.
12. The chrome.cjs helper window never appeared in the extension list; the tool's first browser was the Taxi account (see header). The URL given in the brief returns "Error 400 Bad Request".

## Connected browsers and lock

list_connected_browsers at 12:04: Browser 1, deviceId 26a7626c-9ea8-47fd-a4e4-8397bbd16799, Windows, isLocal true, onThisComputer true, connectedAt 11:42 (epoch 1791452520842), this is the hi@fady.be profile I used. Browser 2, deviceId 8f30fda6-1f51-411a-abca-e3f57d7a9f29, Windows, isLocal true, connectedAt 10:47 (epoch 1791449264174), the default "in use" one, which opened the TAXI Ads account. The window that chrome.cjs opened at 12:03 for profile fady.be did not show up as a third browser. Working Ads URL form: `https://ads.google.com/aw/overview?__e=1665029105`, then pick the account in the chooser (the brief's `ocid=&__e=` form gives Error 400).

Lock: acquire at 12:03 ("LOCK TAKEN by Pro Débouchage at 12:03") and refreshed before every step (12:04, 12:06, 12:07, 12:08, 12:11, 12:14, 12:16, 12:19, 12:20, 12:22, 12:23, 12:26, 12:27, 12:28, 12:30, 12:32, 12:34). Release at 12:40 after my tab and its window closed: "RELEASED (was Pro Débouchage since 12:34)".
