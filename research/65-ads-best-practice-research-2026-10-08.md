# Ads best practice research, 2026-10-08

Read-only research for Pro Débouchage (Google Ads, two Search campaigns, 30 and 16 EUR a day). Official Google pages were read in the in-app Browser pane on 2026-10-08. None shows a page date (only "©2026 Google"), so the read date is the date given. "Practitioner" = blog, agency or vendor, not Google. "Not confirmed" = no official page says it.

---

## 1. Bidding with no trusted conversion data

**Google (official).**
- Maximize conversions "uses Google's AI to set bids to help get the most conversions" and "will try to fully spend your average daily budget." "You must set up conversion tracking to use this strategy." No minimum number of conversions is named. (answer/7381968)
- What it does at zero conversions: Google does not say. Not confirmed. Nearest lines (answer/7065882): "some Smart Bidding strategies rely on a minimum volume of historical conversion data"; Google "recommends measuring performance over ... at least 30 conversions, such as a month or longer"; Smart Bidding "can optimize based on data from all of your campaigns, so even new campaigns without data of their own may notice increased performance."
- Learning (answer/13020501): "a few conversion cycles (1-2 typically)". "The learning period isn't applicable to Manual CPC."
- Warning sign (answer/1722131): "Eligible (Misconfigured)" "often means your campaign hasn't recorded any biddable conversions in the last 28 days."

**The four options (Google's bid adjustment table, answer/2732132, and answer/2616012).**

| Option | Behaviour | Device adjustment | Call, location, time adjustments |
|---|---|---|---|
| Maximize conversions | AI bids, spends the full budget | "-100% only" | not used |
| Target impression share | Bids for a share at "Top", "Absolute top" or "Anywhere" | "-100% only" | not used |
| Maximize clicks | Most clicks in budget | fully supported | supported: "ignored by most automated bidding strategies, with the exception of Maximize clicks" |
| Manual CPC | You set the bid | fully supported (combined cap +900 percent) | all supported, incl. "Interactions (call adjustments)" |

Target impression share (answer/9121108): "The Max CPC bid limit is a cap on bids set by this bid strategy. It's important not to set this limit too low." "Target impression share can be useful for campaigns with brand terms." "Impression share only includes the Google Search Network (excluding Search Partners)." Pitfalls are my reading, not Google's: it buys position, not calls; Maximize clicks and Manual CPC buy clicks, not calls.

**Watch out, the call button (answer/2453991).** "In some cases, your call asset may serve in a button format, similar to a call ad. This can occur when your campaign: Uses responsive search ads ... Optimizes bids towards a call conversion ... Uses Smart Bidding strategies like Target CPA or Maximize conversions. You can disable this functionality by changing any of the above criteria." So leaving Smart Bidding may remove the button FORMAT. Not confirmed whether the plain call line under the ad stays.

**Practitioners.** ClicksGeek (plumbing agency, 2026): new account, use Maximize clicks with a max CPC cap or Manual CPC, automate at about 30 to 50 conversions. StackMatix: same. Opposite: Jyll Saskin Gales, Inside Google Ads podcast: start on Maximize conversions. Nothing found specific to emergency trades with under 30 conversions a month in 2025 to 2026. Not confirmed.

**What this means for Pro Débouchage.** Google does not say what Maximize conversions does with no counted conversions, and it ignores every bid adjustment except -100%, so it cannot be pushed toward phones. Manual CPC and Maximize clicks (with a max CPC cap) accept a mobile adjustment, and Manual CPC also a call adjustment; Target impression share buys position but ignores the mobile adjustment. Leaving Smart Bidding may drop the call button format, so try it on one campaign first.

---

## 2. The call button on the ad (call assets)

**When it shows (answer/2453991, read in full).**
- "If their device can make calls, a clickable call button will be shown under your responsive search ad." Desktop gets a "Call us" button and a QR code.
- Position: the page says "under your responsive search ad". It has NO "top of the page" wording. Not confirmed that the button needs a top position. Ad Rank (answer/1752122) weighs "the expected impact of assets", so a rarely shown or low ad gives the button little chance.
- "Call assets don't appear with every ad impression ... an algorithm determines whether to show the call assets ... based on historical performance and other factors." "You can do bid adjustments to show your call interaction ads more often."
- Cost: taps "cost the same as headline clicks (a standard CPC)."

**How "Calls from ads" are counted (answers 2454052, 6100664).**
- "make sure call reporting is enabled in your account settings (this utilizes Google forwarding numbers). Verify the 'Calls from ads' conversion action is active and set as a primary goal." Turning call reporting off "prevents Google Ads from tracking calls." Belgium is in the forwarding-number country list.
- The page names no website tag for this type, and no Google page ties it to cookie consent. Not confirmed either way, but the evidence says the count does not need the site.
- Without a forwarding number, a click on the asset "counts as a conversion based on Google's estimation of whether a meaningful phone call occurred". An estimate, not a counted call.
- The "Phone calls" column: no definition found. Real call counts need the forwarding number (from the pages above). Not confirmed as a column rule.
- Needs the site: "Calls to a phone number on your website" needs "the Google tag and a specific event snippet". That is the type our consent setup and CSP block.

**Call ads (call-only ads) in October 2026.** Create: no. Serve: yes, until February 2027. Google, dated October 3, 2025 (answer/16598240): "February 2026 : All options to create a new call-only ad will be removed. February 2027 : All existing call-only ads will stop receiving impressions." Replacement: RSAs with call assets (answer/16619010). No Belgium exception is stated; not confirmed for Belgium. So "retired in February 2026" is half right. Google's checklist (answer/16619278): call reporting on; call conversion "primary"; "remove all other goals" if you want only calls; "Add at least 2 images to your responsive search ad"; link the Business Profile.

**What this means for Pro Débouchage.** Per Google's pages, "Calls from ads" run through the forwarding number and do not need the site tag or the visitor's cookie answer. So if call-button calls fell to zero on 17 Sep while clicks went on, site consent is not the documented cause: check that call reporting is on, that "Calls from ads" is still primary, and how often the call asset showed (by device). A call tap is billed like a click, and a new call-only ad can no longer be made.

---

## 3. Consent Mode v2, basic against advanced

**Official (answer/10000067, read in full).**
- Basic: "you prevent Google tags from loading until a user interacts with a consent banner ... transmits no data to Google prior to user interaction." "when the user doesn't consent, no data is transferred to Google at all, not even the consent status." Modelling "is then based on a general model."
- Advanced: "Google tags load when a user opens the website or app." "While consent is denied, the Google tags send cookieless pings." Gives "an advertiser-specific model as opposed to a general model."
- A ping holds: timestamp, user agent, referrer, whether the URL carried ad-click info (GCLID), a consent-state boolean, a random number per page load.

**Modelling thresholds (two official pages that disagree).**
- answer/10548233: "a daily ad click threshold of 700 ad clicks over a 7 day period, per country and domain grouping", then "our models enter training periods." No minimum for consented conversions.
- answer/12445060: "an ad click threshold of 100 clicks per day, per country and domain grouping. This eligibility condition is required for basic consent mode implementation but not for advanced implementation." Advanced "can recover 2 times more on average."
- We have about 120 clicks in 3 weeks, about 6 a day. Under basic, modelling does NOT run. Under advanced one page says no threshold, the other implies one. Which is current: not confirmed.
- Without pings, "our systems will be unable to generate advertiser-specific calibration factors, which may impact modeling accuracy."
- Smart Bidding when most visitors deny consent and modelling is off: no Google text. Not confirmed. Google admits "some conversions that in reality occurred may not be accounted for".
- Developer page (fetch summary only): Google Ads "support for Phone Call Conversions is pending". Not confirmed.

**Which call counts need the site (answer/6100664).** "Calls from ads": no site tag named. "Calls to a phone number on your website": needs the Google tag. "Clicks on a number on your mobile website": needs the tag, and "we can only track these clicks, not the phone calls themselves."

**Belgian authority (APD/GBA) and EDPB.**
- No APD or EDPB text found that names Consent Mode, advanced mode or cookieless pings (2024 to 2026). I searched the APD checklist and the EDPB guidelines text for "Google", "consent mode", "cookieless": zero hits. Not confirmed that any position exists.
- APD cookie checklist (Dutch, file dated 17 Oct 2023): "Ik plaats geen niet strikt noodzakelijke cookies (of verschaf mij er geen toegang toe) voorafgaand aan het verkrijgen van de geldige toestemming" (no non-necessary cookies, or access to them, before valid consent). "Ik leid geen toestemming af uit het verder surfen op de website of het sluiten van een banner, noch enige andere vorm van inactiviteit" (no consent inferred from browsing, closing a banner or any inactivity). Its note 1 covers "het gebruik van een pixel, device fingerprinting, local storage". It says its items are "niet exhaustief" and "niet ... nieuwe verplichtingen". So a tap on "call" with no banner answer is no consent, and basic mode correctly loads nothing.
- EDPB Guidelines 2/2023 v2.0, adopted 7 Oct 2024. Para 33: "JavaScript code, where the accessing entity instructs the browser of the user to send asynchronous requests ... Such access clearly falls within the scope of Article 5(3) ePD". Para 56: applicability "does not systematically mean that consent needs to be collected." My reading: a script that makes the browser send a ping is in scope; nothing says a cookieless ping is exempt, nothing says it is not.
- Enforcement: APD decision 113/2024 (Mediahuis banner) reported annulled 19 Mar 2025; decisions 107 and 108/2025 dismissed cookie complaints on procedure (practitioner reports). EDPB Binding Decision 1/2026 (press release 14 Jul 2026) told the APD to rule on the merits of the noyb complaint about VRT's banner. None names Consent Mode.
- Practitioners split on advanced mode: Google says pings hold no identifiers; Brian Clifton, Piwik PRO and DataGuard say they should wait for consent.

**What this means for Pro Débouchage.** Under basic mode nothing is counted for visitors who do not answer the banner, and at about 6 clicks a day Google will not model the gap. Advanced mode would allow modelling but sends pings before consent, and no Belgian authority has said whether that is allowed, so that is a question for a Belgian lawyer. The forwarding-number count is the one that appears not to need the site, which is why Question 2 matters.

---

## 4. Quality Score recovery

**Status (answer/2453978, read in full).** Under "Eligible (limited)": "Rarely shown due to low Quality Score: Keyword isn't showing ads often due to a low Quality Score." Next step: "Improve your Quality Score by enhancing ad relevance, landing page experience, and expected click-through rate. Consider removing this keyword and adding a more relevant one."

**Tension in Google's pages (answer/6167118, read in full).** "Quality Score is not an input in the ad auction. It's a diagnostic tool". The auction uses Ad Rank (answer/1752122): bid, "the quality of your ads and landing page", thresholds, context, assets. Each component is rated against "other advertisers whose ads showed for the exact same search over the last 90 days", so changes show slowly. QS "is based on historical impressions for exact searches of your keyword".

**Pause and re-add.** Google: no current page says it resets QS. Not confirmed. Practitioner, old: PPC Hero (10 Feb 2010) quotes a Google rep: "The historical performance of paused or deleted ads and keywords will continue to affect your account history" and "no difference between deleting and pausing in terms of Quality Score." Karooya agrees; a 2005 forum comment disagrees. My reading: with the score tied to exact-search history over 90 days, a re-added keyword probably does not start clean. Official side effect: in Smart Bidding, adding or removing keywords is a "Composition change" and triggers "Learning" (answer/13020501).

**Fastest component.** Google gives no ranking. Practitioner reading (vendor guides, no measurement): ad relevance is quickest to change (copy and ad group theme), expected CTR slowest, landing page between. A keyword in headline 1, tight ad groups and a page whose title and first screen match the query are the standard fixes; none of the sources measures the effect. Google's definitions fit them: ad relevance is "How closely your ad matches the intent behind a user's search"; landing page experience is "How relevant and useful your landing page is to people who click your ad."

**Drag.** Google says QS is keyword-level and "should not be optimized or aggregated." Account-level and ad-group scores are not shown by Google. Not confirmed that one low keyword harms the others.

**What this means for Pro Débouchage.** "Rarely shown" is a real brake on serving, and Google's own advice is to fix ad, page and click rate, or swap the keyword. No Google page says a pause and re-add wipes the score, and the one Google quote (2010) says history stays, so re-adding is no shortcut. The lever Google backs is a tight match between query, headline and first screen, and it needs weeks of data to show.

---

## 5. "Limited by search volume" and "Budget is set too low to get conversions"

**Limited by search volume (official).** Campaign status (answer/1722131): "Eligible (limited): Your campaign is active, but showing ads only occasionally due to budget constraints or a limited bid strategy." The reason sits in the bid strategy status "Limited" (answer/6263057), four factors: "Inventory", "Bid limits", "Budget constrained", "Bidding strategy". The hover text "search volume" matches "Inventory". The fix wording (add keywords, Dynamic Search Ads, broad match or other targeting) comes from a search snippet of that page, not seen in full: not confirmed. So Google reads it as too few matchable searches, not as a low budget. Also (answer/7381968): Maximize conversions "are designed to spend the full daily budget, and are 'limited by budget' by design", and the "Lost IS (budget)" column is "incompatible" with it.

**"Budget is set too low to get conversions".** No Google Help page with this sentence found. It looks like a Recommendations-tab message generated in the account. Not confirmed. Closest official text (answer/2616012): "'Limited by budget' ... average daily budget is lower than the recommended amount to capture all available impressions and clicks", and "A campaign that's 'limited by budget' can still be successful."

**Sales nudge? (practitioner only).** Rawnet and other agencies say the budget increase is the most frequent suggestion, often unfit for small budgets, and warn against auto-apply; they have commercial interests. Google cites a median 14 percent more conversions for +10 optimization-score points (via search summary, self-reported). Search Engine Land reports "missed growth" estimates in Recommendations, modelled and not guaranteed. No source confirms intent.

**What this means for Pro Débouchage.** "Limited by search volume" says the keyword set is thin, which fits exact and phrase only, 72 to 76 percent impression share lost to rank, and low Quality Scores; more money would not move it. "Budget is set too low" has no Google definition found, so it is no reason to raise 30 EUR. Google's fix for the volume label is wider targeting, which clashes with the tight match that Quality Score needs, so that is a choice to make with the cost per click in view.

---

## 6. Structure for a small budget

**Google (official).** No page gives a number of ad groups or keywords for a budget. Not confirmed. Smart Bidding (answer/7065882): it "can optimize based on data from all of your campaigns"; evaluate over "at least 30 conversions"; "Relevant keywords can be added to low volume campaigns to expand targeting"; and "There's no need to segment by match type". Adding or removing keywords restarts "Learning" (answer/13020501); Manual CPC has no learning. Portfolio strategies can span campaigns (answer/9121108).

**Practitioners (search summaries).** 3 to 10 ad groups per campaign, 5 to 15 same-intent keywords each; test: would one ad copy fit every keyword (ClicksGeek, Techwyse). ClosedLoop: conversion bidding works at 15 or more conversions in 30 days (Oyova says 30+); "Three campaigns with 15 conversions each don't give the same signal as one campaign with 45"; use a portfolio strategy. Go Fish Digital: over-segmenting hurts. Geography: Techwyse splits by service and place, ClosedLoop prefers broad. They conflict.

**My arithmetic (not a source).** 30 EUR at 5 to 10 EUR a click is about 3 to 6 clicks a day, 90 to 180 a month. Reaching 15 conversions needs a 10 to 15 percent rate, 30 needs 20 to 30 percent. Two non-overlapping geo campaigns do not bid against each other, and two budgets give control, but they split what little data exists. With no counted conversions there is no data to split yet.

**What this means for Pro Débouchage.** At 3 to 6 clicks a day no structure reaches the 15 to 30 conversions that Google and practitioners quote for Smart Bidding, so fewer, tighter ad groups matter more than any split. Two geo campaigns are sensible for budget control but weaker for learning; if automation comes later, one portfolio strategy over both would pool the data. Adding or removing keywords restarts "Learning" under Smart Bidding but not under Manual CPC.

---

## 7. Benchmarks (all practitioner, US or global, search summaries; no official source)

- Plumbing search ads: conversion rate about 7.6 percent, click-through about 4.97 percent, cost per click about 10.49 USD (LocaliQ report, 3,200+ campaigns, Apr 2024 to Mar 2025, via secondary write-ups; US). Cost per lead conflicts: 129, 76 or about 52 USD. A "conversion" mixes calls and forms.
- Emergency queries: one vendor says 8.2 percent; another table says 18 to 22 percent with no source. Weak.
- Share of plumbing conversions that are calls: 75 to 85 percent; 85 to 90 percent for emergency trades (vendor figures). Invoca 2026: 52 percent of calls answered by a person, 45 percent of those convert. Missed calls: 14 percent or 20 to 30 percent.
- Mobile share of clicks and calls: NOT FOUND. Only page speed: 53 percent of mobile users leave after 3 seconds (Google-attributed); plumbing sites load in 8.6 seconds on mobile against a 2.0 target (webtonic.io).
- Top-of-page impression share target for emergency categories: NOT FOUND. Only advice: run emergency campaigns around the clock, raise bids at peaks (about 6 to 9 am, 5 to 8 pm, ClicksGeek).
- European call rate per click: NOT FOUND.
- Own data from the brief: 5 calls on 71 clicks (27 Aug to 16 Sep) is 7.0 percent.

**What this means for Pro Débouchage.** Only US plumbing averages were found, near 7 to 8 percent, and the 5 calls in 71 clicks match them, so before 17 Sep the clicks were not the problem. Mobile share and the top-of-page target must come from the account itself (device segment, top and absolute top impression share columns).

---

## Sources

Official Google (read in the Browser pane on 2026-10-08 unless noted), all at https://support.google.com/google-ads/answer/ followed by: 7381968 Maximize conversions; 7065882 Smart Bidding; 13020501 learning period; 1722131 campaign statuses; 6263057 bid strategy statuses; 2732132 bid adjustment table; 2616012 limited by budget; 9121108 Target impression share; 2453991 call assets; 2454052 call reporting (fetch summary); 6100664 phone call conversion tracking; 6095883 website call tracking; 16598240 call ads deprecation (3 Oct 2025); 16619010 move to call assets; 16619278 call asset checklist; 10000067 About consent mode; 10548233 consent mode modeling; 12445060 How to improve your modeling; 2453978 keyword status; 6167118 Quality Score; 1752122 Ad Rank; 9061546 optimization score (search result only). Also https://developers.google.com/tag-platform/security/concepts/consent-mode (fetch summary only).

Belgian authority and EDPB:
- https://dataprotectionauthority.be/publications/cookie-checklist.pdf (APD checklist, Dutch, dated 17 Oct 2023)
- https://edpb.europa.eu/system/files/2024-10/edpb_guidelines_202302_technical_scope_art_53_eprivacydirective_v2_en_0.pdf (Guidelines 2/2023 v2.0, 7 Oct 2024)
- https://www.edpb.europa.eu/news/edpb-requires-belgian-dpa-to-handle-the-merits-of-noyb-cookie-banner-complaint_en (14 Jul 2026)

Practitioner (search summaries unless noted):
- https://clicksgeek.com/google-ads-bidding-strategy-for-plumbing/
- https://www.stackmatix.com/blog/google-ads-no-conversion-history-startups
- https://iga.buzzsprout.com/2295853/episodes/19253273-should-you-start-on-maximize-conversions-yes-here-s-the-truth
- https://ppchero.com/?p=1681 (read, 10 Feb 2010)
- https://karooya.com/blog/debunking-common-quality-score-misconceptions-in-ppc
- https://brianclifton.com/blog/2022/03/14/google-consent-mode-breaks-privacy-laws/
- https://ppc.land/edpb-forces-belgian-regulator-to-reconsider-dismissed-noyb-cookie-case/
- https://www.rawnet.com/knowledge-hub/google-ads-representative-suggestions-you-should-ignore
- https://searchengineland.com/google-ads-adds-missed-growth-estimates-to-the-recommendations-tab-482917
- https://www.closedloop.com/pov-smart-campaign-consolidation-is-the-future/
- https://gofishdigital.com/blog/oversegmenting-paid-search-campaigns-hurts-performance/
- https://www.techwyse.com/blog/pay-per-click-marketing/the-starter-guide-for-google-search-ads-for-services
- https://localiq.com/resources/home-services-search-ads-benchmarks/
- https://www.webtonic.io/blog/plumbing-landing-page-statistics
- https://clicksgeek.com/google-ads-performance-benchmarks-plumbing/

## Could not confirm

- What Maximize conversions does with zero conversions.
- Whether the call button needs a top position, and whether leaving Smart Bidding removes it.
- Whether site consent affects "Calls from ads" (pages say it uses the forwarding number).
- Which consent page is current on the click threshold (700 in 7 days against 100 a day, "not for advanced").
- Any APD or EDPB statement naming Consent Mode, advanced mode or cookieless pings.
- Whether a pause and re-add resets Quality Score.
- The source of "Budget is set too low to get conversions".
- Mobile share, top-of-page targets and a European call rate per click for emergency drain ads.
