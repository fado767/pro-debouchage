# Chrome ad-groups build, 2026-09-17

## Setup
- Browser lock acquired 08:57 by Pro Débouchage.
- Chrome profile "fady.be" (Profile 6, hi@fady.be) opened at https://ads.google.com/aw/campaigns.
- Connected: Browser 1 (deviceId 90aa4bb7-a7f1-4501-91ae-ef0394aef2a6), single device.
- Confirmed account: hi@fady.be signed in, selected "Pro Débouchage" 166-502-9105 (ocid=8499099575).
- Campaign confirmed: "PD | Search | Ring Bruxelles | FR+NL", €20.00/day, Search type, 1 campaign in account.
- On-page banner already visible on Campaigns dashboard: "Get €400 ad credit! View" (top right area near notifications). Noted for Job A, not clicked.

## JOB A: Promotions / Billing (read-only), in progress

### Billing summary (Billing > Summary), read verbatim
- Balance: EUR 196.01 ("See how this is calculated")
- Next automatic payment: Oct 1, or when balance reaches EUR 200.00. Method: Mastercard ...2616.
- Last payment: Sep 9, EUR 100.00, "Threshold charge". Method: Mastercard ...2616.
- September (current month): Net cost EUR 346.01, Payments EUR 179.03.
- August: Net cost EUR 39.03, Payments EUR 10.00.
- Payment threshold appears to be EUR 200.00 (from "or when your balance reaches EUR200.00").

### Promotions page (Billing > Promotions), read verbatim
One row, table "Promotional offers":
- Promotion name (link, not clicked): "Get €400.00 credit for spending €400.00 on Google Ads"
- Promo code: 6EUGR-WFWAV-JJDK
- Credits granted: -- (dash, none yet)
- Status: "Redeemed: Complete further requirements" (dotted underline, likely a tooltip)
- Date redeemed: Aug 27, 2026
- Complete requirements by: Oct 26, 2026
- Credit expiration: "Once earned, use your credit within 60 days"
- Credits spent: "Data not yet available"
- No Claim/Apply/Redeem button visible on this row or page; the promotion name itself is a clickable link.
- Clicked the promotion name link to view detail (read-only dialog, only button is "Close", no claim/accept action taken). Dialog content verbatim:
  - Title: "Get €400.00 credit for spending €400.00 on Google Ads", code 6EUGR-WFWAV-JJDK
  - "Amount you've spent so far (offer expires on Oct 26, 2026):" EUR 385.04 (updated 0 minutes ago) out of EUR 400.00. Progress bar near full (385.04/400).
  - "You're almost there! Spend €400.00 on Google Ads and we'll give you €400.00 credit for future ad spend." plus a "Learn more about credit coupons" link (not clicked).
  - "Your ads will keep running after your promotional credit is used up. To stop accruing costs, pause your campaigns."
  - Only action button: "Close" (clicked to close, no accept/claim button existed).
- "Promotional offers" panel at top of Promotions page, filtered to Status: OFFERED, shows "No offers available" (this one offer is Redeemed, not currently "Offered").

### Notifications bell (6 notifications), read verbatim
1. "Finish your Campaign setup" (Informational) - "You're only a few clicks away from reaching your first customers. Complete your campaign setup now t[runcated in DOM, banner also shows: Get started]" Button: "Get started" (not clicked). Dismiss X present (not clicked).
2. "Get €400 ad credit!" (Informational) - "Spend €400 before October 26, 2026 to get a €400 Google Ads credit towards future spend. Check your [progress...]" Buttons: "View", "Learn more" (neither clicked). Dismiss X present (not clicked). Matches the promo above: currently at EUR 385.04 of EUR 400.00.
3. "Payment threshold updated" (Warning) - "Your payment threshold has been automatically updated. The frequency of your charges may change, but[truncated]" Button: "View" (not clicked). Dismiss X present.
4. "Remove 1 redundant keyword" (Prompt/recommendation) - "Make your account easier to manage by removing redundant keywords." Buttons: "Apply" and "View" (NEITHER CLICKED, per instruction: never click Apply on any recommendation).
5. "Your promo code is active" (Informational) - "Spend €400.00 on Google Ads to get €400.00 for future ad spend." Buttons: "View", "Learn more" (neither clicked).
6. "Thanks for verifying!" (Informational) - "The verified advertiser name and location for each of these accounts will now appear in your ad disc[losures, truncated]" Link/button: "Learn more" (external, not clicked).
- No credit-ready / claim-now banner exists anywhere; the €400 promo is still "in progress" (385.04/400), not yet earned.

## JOB B, STEP 0: before-state (All time, Aug 27 - Sep 17, 2026), read at approx 09:20

### Ad groups tab, All time
- FR emergency: Status Eligible/Enabled (green dot), Standard, Impr. 515, CTR 7.96%, Clicks 41, Conv. rate 12.20%, Conversions 5.00, Avg. CPC EUR 5.58, Cost EUR 228.95, Cost/conv. EUR 45.79
- NL emergency: Status Paused, Standard, Impr. 503, CTR 6.16%, Clicks 31, Conv. rate 3.23%, Conversions 1.00, Avg. CPC EUR 5.04, Cost EUR 156.14, Cost/conv. EUR 156.14
- Total (account, 2 ad groups): Impr. 1,018, CTR 7.07%, Clicks 72, Conversions 6.00, Cost EUR 385.09 (matches Billing summary current-month net cost trend)
- Campaign: PD | Search | Ring Bruxelles | FR+NL, both ad groups belong to it.

### Keywords tab, before-state (All time), read at approx 09:35: all 30 keywords, verified 1-30 of 30
Format: Keyword | Match type | Ad group | Status

1. "société de débouchage" | Phrase | FR emergency | Eligible
2. "ontstoppingsbedrijf" | Phrase | NL emergency | Not eligible, Ad group paused
3. [wc verstopt] | Exact | NL emergency | Not eligible, Ad group paused
4. [déboucheur bruxelles] | Exact | FR emergency | Eligible
5. [débouchage 24h 24] | Exact | FR emergency | Eligible
6. "cave inondée" | Phrase | FR emergency | Eligible (MOVES to FR Cave inondee)
7. [ontstoppingsdienst] | Exact | NL emergency | Not eligible, Ad group paused, Rarely shown (low QS)
8. "ontstopping zaventem" | Phrase | NL emergency | Not eligible, Ad group paused
9. [canalisation bouchée] | Exact | FR emergency | Eligible (MOVES to FR Canalisation bouchee)
10. "débouchage waterloo" | Phrase | FR emergency | Eligible (Limited), Rarely shown (low QS)
11. "kelder leegpompen" | Phrase | NL emergency | Not eligible, Ad group paused, Rarely shown (low QS) (MOVES to NL Kelder leegpompen)
12. [spoedontstopping] | Exact | NL emergency | Not eligible, Ad group paused
13. [débouchage bruxelles] | Exact | FR emergency | Eligible (Limited), Rarely shown (low QS)
14. [wc bouché] | Exact | FR emergency | Eligible (MOVES to FR WC bouche)
15. [égout bouché] | Exact | FR emergency | Eligible (MOVES to FR Canalisation bouchee)
16. "refoulement égout" | Phrase | FR emergency | Eligible (MOVES to FR Canalisation bouchee)
17. [évier bouché] | Exact | FR emergency | Eligible (MOVES to FR Canalisation bouchee)
18. "débouchage hal" | Phrase | FR emergency | Not eligible, Low search volume
19. "débouchage vilvorde" | Phrase | FR emergency | Not eligible, Low search volume
20. [débouchage urgent] | Exact | FR emergency | Eligible
21. "eau qui remonte" | Phrase | FR emergency | Eligible (MOVES to FR Canalisation bouchee)
22. [afvoer verstopt] | Exact | NL emergency | Not eligible, Ad group paused (MOVES to NL Afvoer verstopt)
23. [riool verstopt] | Exact | NL emergency | Not eligible, Ad group paused (MOVES to NL Afvoer verstopt)
24. [gootsteen verstopt] | Exact | NL emergency | Not eligible, Ad group paused (MOVES to NL Afvoer verstopt)
25. [ontstopping brussel] | Exact | NL emergency | Not eligible, Ad group paused
26. "ontstopping vilvoorde" | Phrase | NL emergency | Not eligible, Ad group paused
27. "ontstopping halle" | Phrase | NL emergency | Not eligible, Ad group paused
28. [dringende ontstopping] | Exact | NL emergency | Not eligible, Ad group paused
29. "water komt omhoog" | Phrase | NL emergency | Not eligible, Ad group paused (MOVES to NL Afvoer verstopt)
30. "riool verstopt wie bellen" | Phrase | NL emergency | Not eligible, Ad group paused (MOVES to NL Afvoer verstopt)

Cross-check against assets/prepared/ad-groups-per-problem-2026-09-17.md section 1 "what stays": FR emergency 8 keeps (1,4,5,10,13,18,19,20) all present; NL emergency 8 keeps (2,7,8,12,25,26,27,28) all present. FR emergency total 15 (8 keep + 7 move-out: 6,9,14,15,16,17,21). NL emergency total 15 (8 keep + 7 move-out: 3,11,22,23,24,29,30). 15+15=30. Confirmed complete and consistent with the build file.

## JOB B, STEPS 1-8: BUILD, starting now

### FR | WC bouché - build in progress (~09:50)
- Ad group created via wizard: name "FR | WC bouché", type Standard, campaign PD | Search | Ring Bruxelles | FR+NL.
- Keywords entered: [wc bouché] [toilette bouchée] [wc qui déborde] "débouchage wc" "wc bouché urgent" (5, matches file). Final URL set to https://prodebouchage24.be/fr/wc-bouche/
- RSA: cleared Google's auto-prefill, entered all 15 headlines and 4 descriptions verbatim from file section 2 (character counts cross-checked against page counters: all matched the file's bracketed counts exactly). Nothing pinned (pin icons visible but not clicked). Display paths set to debouchage-wc (13/15) and urgent-24h-24 (13/15), matching file.
- About to click "Save and continue" on the wizard (this creates ad group + keywords + RSA together). Bid: none set (campaign-level Maximize Clicks with 6.00 cap, per instructions no ad-group bid needed).
- Sitelinks: NOT available in this wizard (only Promotions/Prices/Messages/Callouts/Apps asset types shown, no Sitelinks option). Will add via Ads & assets > Assets after save, at ad-group level, per step 5.

### FR | WC bouché - IDENTITY CHECK, ~09:55
- Clicked Save and continue -> "Confirm it's you" dialog appeared exactly as briefed.
- Clicked Confirm once. Sent SendMessage to main: "IDENTITY CHECK IS ON SCREEN NOW, waiting for Fady".
- Dialog briefly showed "Try again" then cleared within ~20 seconds with toast "Thanks for verifying that it's you... You can now continue to take actions."
- Clicked "Save and continue" again to complete the pending save. SUCCEEDED: redirected to Ad groups list, "FR | WC bouché" now listed, 1-3 of 3 ad groups.

### FR | WC bouché - READ BACK (~09:58)
- Ad group: FR | WC bouché, Status Enabled/Eligible, Type Standard.
- Keywords tab: 5 of 5 keywords present: "débouchage wc" (Phrase, Pending/Under review), [toilette bouchée] (Exact, Pending/Under review), [wc bouché] (Exact, Pending/Under review), "wc bouché urgent" (Phrase, Not eligible - Low search volume, Under review), [wc qui déborde] (Exact, Pending/Under review). None Broad. "Not eligible - low search volume" is normal for a fresh long-tail keyword, not a match-type problem.
- Ads tab: 1 RSA, Status Eligible, Ad type Responsive search ad, Final URL confirmed prodebouchage24.be/debouchage-wc/urgent-24h-24 (matches display paths). Ad strength shown as "Pending" on the Ads list, but "Poor" on the ad's own Assets detail page (suggestion panel said "Try including more keywords in your headlines" and "Include popular keywords" unchecked) - noting the discrepancy, not chasing it (pinning forbidden).
- Asset detail page: 1-20 of 20 assets = 15 headlines + 4 descriptions (all Eligible, Position pinning: None for every one) + 1 account-level Call asset (phone number, inherited, not something this build added).

## Sitelinks (step 5) for FR | WC bouché
- Added via Ads & assets > Assets > Sitelink > + (Add to: Ad group FR | WC bouché, confirmed on screen).
- All 4 sitelinks entered verbatim, character counts cross-checked against file section 3 (all matched exactly):
  1. "Le prix d'un WC bouché" (22/25) | #prix | "TVA, déplacement et première" (28/35) | "heure compris. Le prix dit avant." (33/35)
  2. "Comment ça se passe" (19/25) | #contenu | "Vous appelez, on dit le prix," (29/35) | "on vient et on débouche le WC." (30/35)
  3. "Où on travaille" (15/25) | #zone | "D'Alost à Louvain, de Malines" (29/35) | "à Nivelles. Autour de Bruxelles." (32/35)
  4. "Nos conditions" (14/25) | conditions-generales.html | "Garantie, paiement, facture." (28/35) | "Écrit noir sur blanc." (21/35)
- Sitelinks 5 and 6 left empty (only 4 needed per file).
- Save succeeded, no identity check this time. READ BACK confirmed on Assets > Associations (filtered to Sitelink): all 4 present, Level "Ad group", Added to "FR | WC bouché", Status Pending/Under review (normal for fresh asset), text/description lines match exactly what was entered.

### FR | WC bouché - COMPLETE (ad group + keywords + RSA + sitelinks). Moving to FR | Canalisation bouchée next.

### FR | Canalisation bouchée - build (~10:15)
- Ad group created, name "FR | Canalisation bouchée", Final URL https://prodebouchage24.be/fr/canalisation-bouchee/
- Keywords: all 9 entered ([canalisation bouchée] [évier bouché] [égout bouché] "refoulement égout" "eau qui remonte" [douche bouchée] [lavabo bouché] "débouchage canalisation" "débouchage évier") - confirmed via summary line "canalisation bouchée, évier bouché, égout bouché, refoulement égout, eau qui remonte, douche bouchée, lavabo bouché + 2 more" = 9.
- Display path: debouchage (10/15) / canalisation (12/15), matches file.
- RSA: cleared prefill, re-typed all 9 keywords after clear wiped them, entered 15 headlines + 4 descriptions verbatim, all char counts cross-checked and matched file exactly. Ad strength Good. Nothing pinned.
- Save succeeded, no identity check. Ad group "FR | Canalisation bouchée" now Eligible/Enabled, 4 ad groups total in campaign.
- Sitelinks added at ad-group level: "Le prix d'un débouchage" (23/25), "Comment ça se passe" (19/25), "Où on travaille" (15/25), "Nos conditions" (14/25). All 4 confirmed present, Level Ad group, Added to FR | Canalisation bouchée, Status Pending/Under review, description lines match file exactly.

### FR | Canalisation bouchée - COMPLETE. Moving to FR | Cave inondée next (~10:35).

### FR | Cave inondée - build (~10:50)
- Ad group created, name "FR | Cave inondée", Final URL https://prodebouchage24.be/fr/cave-inondee/
- Keywords: all 5 entered ("cave inondée" [pompage cave] [eau dans la cave] "pompage de cave" "cave sous eau") - confirmed via summary line.
- Display path: pompage (7/15) / cave-inondee (12/15), matches file.
- RSA: cleared prefill, re-typed keywords after clear wiped them, entered 15 headlines + 4 descriptions verbatim, all char counts cross-checked and matched file exactly. Nothing pinned.
- Save succeeded (ad group + keywords + RSA), no identity check.
- Sitelinks added: "Le prix d'un pompage" (20/25), "Comment ça se passe" (19/25), "Où on travaille" (15/25), "Nos conditions" (14/25). All 4 confirmed present (1-4 of 4), Level Ad group, Added to FR | Cave inondée, Pending/Under review, descriptions match file exactly.

### FR | Cave inondée - COMPLETE. All 3 FR ad groups now built (WC bouché, Canalisation bouchée, Cave inondée).

## STEP 3: Pause moved keywords in FR emergency (~11:05)
Keywords to pause (never remove): [wc bouché], [canalisation bouchée], [évier bouché], [égout bouché], "refoulement égout", "eau qui remonte", "cave inondée" (7 keywords).
FR emergency must keep its 8 generic/town keywords Enabled: "société de débouchage", [débouchage bruxelles], [déboucheur bruxelles], [débouchage urgent], [débouchage 24h 24], "débouchage waterloo", "débouchage hal", "débouchage vilvorde".

Progress (via filter-chip edit on Keywords grid, search each keyword, select FR emergency row, status-dropdown > Pause, confirm Status column read-back):
1. [wc bouché] - PAUSED, confirmed via Status column showing "Paused" in FR emergency row.
2. [canalisation bouchée] - PAUSED, confirmed.
3. [évier bouché] - PAUSED, confirmed.
4. [égout bouché] - PAUSED, confirmed (re-verified again at ~11:20 after a stray click sent the page to Overview; reloaded Keywords grid and confirmed [égout bouché] still reads Paused in FR emergency and Eligible in FR | Canalisation bouchée - the pause held).
5. "refoulement égout" - PAUSED, confirmed at ~11:22: filter chip edited to "refoulement égout", 2 rows shown (FR emergency + FR | Canalisation bouchée, both were Eligible), selected FR emergency row checkbox, status-dot dropdown > Pause, read-back after closing selection toolbar: FR emergency row now shows Status "Paused", FR | Canalisation bouchée row still "Eligible". Note: two earlier attempts to edit this filter chip mis-fired (typed text leaked as page keyboard shortcuts and navigated to Overview, because the Value field lost focus / popup closed) - fixed by re-opening the "+2 more" filter tooltip, clicking the "Keyword text contains X" line precisely, then screenshotting to confirm the Value field shows a focused blue border before ctrl+a + type + Apply.
6. "eau qui remonte" - PAUSED, confirmed at ~11:28: same filter-edit pattern, both rows were Eligible before, FR emergency row paused via status-dot dropdown, read-back after closing selection toolbar and reloading page: FR emergency shows "Paused", FR | Canalisation bouchée still "Eligible".
7. "cave inondée" - PAUSED, confirmed at ~11:32: filter edited to "cave inondée", 2 rows shown (FR emergency Eligible with historic 2 clicks/10 impr/20% CTR, FR | Cave inondée Eligible with 0/0), selected FR emergency row, status-dot dropdown > Pause, read-back: FR emergency now "Paused", FR | Cave inondée still "Eligible".

ALL 7 OF 7 TARGET KEYWORDS NOW PAUSED IN FR EMERGENCY: [wc bouché], [canalisation bouchée], [évier bouché], [égout bouché], "refoulement égout", "eau qui remonte", "cave inondée". STEP 3 COMPLETE.

### STEP 3 FULL READ-BACK (~11:40): all 15 of 15 FR emergency keywords, filtered to Ad group FR emergency (adGroupId=196587791261), status filter Enabled+Paused, "1-15 of 15" confirmed on screen
1. "société de débouchage" | Phrase | Enabled/Eligible
2. [déboucheur bruxelles] | Exact | Enabled/Eligible
3. [débouchage 24h 24] | Exact | Enabled/Eligible
4. "cave inondée" | Phrase | PAUSED
5. [canalisation bouchée] | Exact | PAUSED
6. "débouchage waterloo" | Phrase | Enabled/Eligible (Limited, rarely shown low QS)
7. [débouchage bruxelles] | Exact | Enabled/Eligible (Limited, rarely shown low QS)
8. [wc bouché] | Exact | PAUSED
9. [égout bouché] | Exact | PAUSED
10. "refoulement égout" | Phrase | PAUSED
11. [évier bouché] | Exact | PAUSED
12. "débouchage hal" | Phrase | Enabled/Not eligible (Low search volume)
13. "débouchage vilvorde" | Phrase | Enabled/Not eligible (Low search volume)
14. [débouchage urgent] | Exact | Enabled/Eligible
15. "eau qui remonte" | Phrase | PAUSED

PERFECT MATCH: exactly 7 Paused (the 7 moved keywords) + exactly 8 Enabled (the 8 generic/town keeps: société de débouchage, déboucheur bruxelles, débouchage 24h 24, débouchage waterloo, débouchage bruxelles, débouchage hal, débouchage vilvorde, débouchage urgent) = 15 total. Nothing removed, only paused. STEP 3 FULLY VERIFIED.

## STEP 8: after-state read-back (~11:50-12:00)

### Campaign settings, unchanged (read via Campaign settings panel, opened and closed with Cancel, no edits saved)
- Campaign name: PD | Search | Ring Bruxelles | FR+NL, unchanged
- Campaign status: Enabled, Status Eligible (Learning)
- Networks: Google Search Network only (no Search partners, no Display Network listed) - confirms Search partners off, Display expansion off
- Bidding: focus = Clicks (Maximize clicks), "Set a maximum cost per click bid limit" checked, Maximum CPC bid limit = €6.00 - UNCHANGED, exactly as required
- Budget: €20.00/day - unchanged
- AI Max for Search campaigns: toggle OFF (grey, not enabled) - confirmed off
- Broad match keywords: Off (Use keyword match types) - confirmed off at campaign level too
- Locations: Targeted 106 locations, Excluded 1 location (Ring Bruxelles + towns setup, untouched)
- Start date Aug 27, 2026, End date not set - unchanged

### Negative keywords, unchanged (never touched this session)
- Negative keywords tab: 1-19 of 19 rows total. Individually confirmed rows include: "bob service", "brutout", "curnet", "de vleminck", "de wever", "dhm", "dhm service", "gailly", "hemerijckx", "jerry debouchage", "lazeroms", "ldl cleaning", "maigret", "maxi cleaning", "schmetz", "vidange nette", "vleminck" (16 phrase-match, Level Campaign) plus a shared "List" entry - matches expected "16 phrase negatives + shared list row", untouched.

### Ad groups tab, All time, final state (Ad groups: 1-5 of 5, via aw/adgroups page)
Only 5 ad groups exist in the campaign (NOT 8 - the file's Step 8 assumed NL groups would also be built, but NL build was explicitly OUT OF SCOPE for this task, so only FR emergency + NL emergency (pre-existing) + the 3 new FR groups exist):
1. FR emergency | Enabled/Eligible | Standard | Impr. 521 | CTR 7.87% | Cost €228.95 | 15 keywords (7 Paused + 8 Enabled, see Step 3 above) | 1 ad (RSA)
2. NL emergency | Paused | Standard | Impr. 503 | CTR 6.16% | Cost €156.14 | 15 keywords (untouched, pre-existing) | 2 ads (RSA, both "Not eligible - Ad group paused")
3. FR | WC bouché | Enabled/Eligible | Standard | Impr. 2 | CTR 0.00% | Cost €0.00 | 5 keywords | 1 ad (RSA, Ad strength Average) | 4 sitelinks
4. FR | Cave inondée | Enabled/Eligible | Standard | Impr. 0 | Cost €0.00 | 5 keywords | 1 ad (RSA, Ad strength Poor) | 4 sitelinks
5. FR | Canalisation bouchée | Enabled/Eligible | Standard | Impr. 5 | CTR 0.00% | Cost €0.00 | 9 keywords | 1 ad (RSA) | 4 sitelinks
Total (All but removed ad groups): Impr. 1,031 | CTR 6.98% | Cost €385.09
Ads tab total: 1-6 of 6 ads in campaign (1 FR emergency + 2 NL emergency + 3 new FR groups x 1 each = 6). Matches.

STEP 8 COMPLETE. All settings, negatives, and campaign-level bid config confirmed unchanged. Ad group count discrepancy vs file (5 actual vs 8 file assumed) is explained and expected: NL groups explicitly out of scope for this task.
