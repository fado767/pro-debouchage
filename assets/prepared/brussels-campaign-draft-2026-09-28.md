Reviewed 2026-09-28 by a stronger reader, 15 fixes applied the same day; verdict before fixes: ready after fixes.

# Brussels campaign, full draft, 2026-09-28

*Written 2026-09-28 by a drafting session, budget 30 minutes. This is a DRAFT only. It touches no live account and no other file. Nothing in it goes live: Roro said yes by phone to a Brussels campaign of about 500 EUR a month (told by Fady, 2026-09-28), but the van question (is it Euro 6, for the Low Emission Zone) is still open, and switching anything on needs both that answer and Fady's own typed go naming the campaign and the budget (AGENTS.md section 15). Sources used: research/53-brussels-google-numbers-2026-09-27.md, research/52-brussels-public-facts-2026-09-27.md, playbook/ads-program.md sections 2 to 4, assets/prepared/ad-groups-per-problem-2026-09-17.md, assets/prepared/fr-rsa-2-draft-2026-09-14.md, assets/prepared/ads-assets-2026-09-18.md, research/25-ads-account-build-sheet-2026-08-27.md, design/site-source/copy-fr.js, playbook/business-brief.md, playbook/launch-plan.md, research/54-calls-drop-investigation-2026-09-28.md, assets/prepared/roro-brussels-questions-2026-09-27.md. Where a file did not say something, this draft writes "not in the files" instead of guessing.*

**Fixed by the session, not reopened here:** French only, own campaign, own budget 16 EUR a day. Bidding Maximize Conversions from day one, never Maximize Clicks (research/54 is the reason). Location: Brussels, Presence only. Negative list "PD | Negatives | shared" attached, no Brussels-commune negatives. Landing pages: https://prodebouchage24.be/fr/, /fr/wc-bouche/, /fr/canalisation-bouchee/, /fr/cave-inondee/ only.

Proposed campaign name (this session's own pick, matching the account's naming pattern, not confirmed by any file): **PD | Search | Bruxelles | FR**

---

## 1. Campaign settings, in the order of Google's wizard

Order and field names copied from how the live campaign was built (research/25-ads-account-build-sheet-2026-08-27.md section 1), so the builder sees the same shape twice.

| Setting | Value | Note |
|---|---|---|
| Objective | Leads | matches the live campaign |
| Conversion goals | Account default (call_click, whatsapp_click, Calls from ads, Calls from website: all four are account-level actions, ads-program.md section 4) | needed because bidding is Maximize Conversions from the start. "Calls from website" cannot count while the site's security header blocks gstatic.com (research/54, CSP_TAG in build.js); call_click counts cookie accepters only; Calls from ads counts from the call asset. The header fix is decided for later (DECISIONS 2026-09-28) and is not a gate for this campaign: the setup of 27 Aug to 16 Sep worked without it. |
| Campaign type | Search | |
| Ways to reach goal | Website visits only. Do not tick "Phone calls" at creation. | matches the live campaign |
| Final URL at campaign level | Leave blank | URLs live at ad level |
| Search Network | ON | |
| Search partners | OFF | fixed switch-off checklist |
| Display Network | OFF | |
| AI Max, search term matching | OFF | fixed switch-off checklist |
| AI Max, text customization | OFF | fixed switch-off checklist |
| AI Max, final URL expansion | OFF | fixed switch-off checklist |
| Automatically created assets (ACA) | OFF | fixed switch-off checklist |
| Bidding strategy | Maximize conversions | fixed by the session; never Maximize Clicks (research/54) |
| Target CPA | Not set | no conversion history yet for this campaign; ads-program.md's own rule is to wait for about 30 conversions in 30 days before a target |
| Daily budget | 16,00 EUR | fixed by the session |
| Budget delivery | Standard | |
| Customer acquisition | OFF | matches the live campaign |
| Ad schedule | All days, all hours, 24/7, zero bid adjustments | matches the live campaign; 24/7 answering is confirmed, business-brief.md section 1 |
| Device bid adjustments | None | |
| Ad rotation | Optimize (default) | |
| Languages | All languages | matches the account's own reasoning (ads-program.md section 2): Belgians mix interface and query language, the keyword itself is French, so it self-selects the searcher; this is not a new decision |
| Location targeting | Brussels (the single region-level location), Presence only | see section 2 below for the full reasoning |
| Location exclusion | None | this is a different, new campaign; nothing to exclude here |
| Negative keyword list | "PD | Negatives | shared" attached, campaign level | fixed by the session |
| Campaign-level negatives at creation | None beyond the shared list | fixed by the session: no Brussels-commune negatives |
| Dynamic Search Ads | Not enabled | matches the live campaign |
| URL options / tracking template | Empty | |
| Auto-apply recommendations | Already OFF at account level (standing rule) | verify it still reads OFF, do not re-toggle |
| EU political advertising declaration | Already declared NO at account level | verify it applies to this campaign too |
| Status at creation | **Paused.** Never Enabled by this draft or its build. | see section 7, Open points, and section 8, Build checklist |

**The arithmetic, said plainly, nothing promised:** 16 EUR a day, at the 30.4-day month Google itself uses, is 16 x 30.4 = **486.40 EUR a month at the ceiling**, close to the "about 500" Roro was told. A single day can run up to 2x the daily budget under Google's normal overdelivery rule, so **up to 32 EUR on any one day**, with the month still capped at 486.40. No forecast of clicks or jobs is made here; research/53's own Keyword Planner forecast (Block 1) was run at 30 EUR a day for the whole Brussels location, not at 16, so it does not transfer directly to this smaller budget.

**Spend ceiling: 486.40 a month for this campaign, 1,398.40 for the whole account with the Ring's 912.** Maximize Conversions has no click-price cap. Brussels top-of-page bids reach 34.76 EUR. This account paid 11.09 and 14.91 average CPC on 15 and 16 Sep, and one click of 22.90 (research/48). Arithmetic only: 486.40 buys about 91 clicks at the account's 5.34 average, about 32 at 15.

---

## 2. Geo: the 19 communes against a first ring near the depot

**The depot is in Laeken, which is a district of the City of Brussels (Ville de Bruxelles), not a separate commune of its own** (business-brief.md section 2: "Rue Théophile de Baisieux 225, 1020 Bruxelles (Laeken)"; launch-plan.md section 1, same address). Google Ads targets by commune, not by district, so "Laeken" is never itself a pickable location: the depot sits inside the commune of Ville de Bruxelles.

**List A, all 19 communes of the Brussels-Capital Region.** This is a fixed, unchanged administrative list; it is general public knowledge, not a figure pulled from research/52 or research/53, so it is named here as such rather than claimed as a research finding:
Anderlecht, Auderghem, Berchem-Sainte-Agathe, Ville de Bruxelles (contains Laeken, Neder-Over-Heembeek, Haren and the city centre), Etterbeek, Evere, Forest, Ganshoren, Ixelles, Jette, Koekelberg, Molenbeek-Saint-Jean, Saint-Gilles, Saint-Josse-ten-Noode, Schaerbeek, Uccle, Watermael-Boitsfort, Woluwe-Saint-Lambert, Woluwe-Saint-Pierre.

**List B, a first ring near the depot (this session's own geographic judgment, not sourced from a file, offered because the task named it: "Jette, Ganshoren, Laeken and their neighbours").** The communes that actually touch the Laeken district: Ville de Bruxelles itself, Jette, Ganshoren, Koekelberg, Molenbeek-Saint-Jean, Schaerbeek, Evere. That is 7 of the 19.

**What the files do and do not say about splitting by commune.** research/53 Block 1 (Keyword Planner) pulled all its numbers at the single "Brussels, Belgium" province-type location, reach 3,760,000, the whole region at once; it was never run per commune. research/53 Block 2 ran one combined filter across 12 commune names together (schaerbeek, ixelles, anderlecht, molenbeek, uccle, jette, laeken, evere, etterbeek, woluwe, forest, saint-gilles) and got 13 search terms, 0 clicks, 25 impressions, as one lump sum, not broken out commune by commune. **So: search volume split by individual commune is not in the files.** There is no data anywhere in the research to say Jette outperforms Uccle, or that the first ring converts better than the rest of the region.

**Recommendation: target the whole Brussels-Capital Region as ONE location (List A, all 19 communes, picked as the single "Brussels, Belgium" location), not the first ring alone, and not 19 separate commune picks.** Three reasons. First, there is no commune-level data to justify excluding 12 of the 19 communes, and the entire point of this campaign is to open a region that today is 100 percent excluded; narrowing it on no evidence undercuts the reason for building it. Second, this exact single location ("Brussels, Belgium", province type, reach 3,760,000) is already the one atomic entity EXCLUDED from the Ring campaign (research/53 Block 3); picking the identical entity here, as an INCLUDE, is what makes the fixed rule "the two never compete" true by construction, rather than by 19 separate near-matches that could leave a gap or an overlap. Third, research/25's own account-build sheet made exactly this call for the Ring campaign: "The 19 Brussels communes are covered by the single Brussels exclusion. Do not exclude them one by one." The same logic runs the other way for an include. If the first two weeks of real data show the first ring (List B) earning most of the clicks or conversions and the rest of the region earning little, narrowing to List B on that evidence is a normal week-2-style check, not a new decision.

**One caution that is not a geo question.** research/52 section 4: the Brussels Low Emission Zone applies to the WHOLE region since 1 January 2026, not just the centre, so a first ring near the depot is no safer for the van question than the full 19 communes; the Euro 6 answer gates the whole campaign equally, whichever geo list is picked.

---

## 3. Ad groups and keywords

**Campaign is French only, so every Dutch keyword in research/53's 25 is left out as a group, not picked one by one.** The 11 Dutch-only keywords (ontstopping, ontstoppingsdienst, ontstoppingsbedrijf, spoedontstopping, afvoer verstopt, wc verstopt, toilet verstopt, riool verstopt, gootsteen verstopt, kelder leegpompen, ontstopping brussel) are out for that reason alone.

Of the 14 French-language keywords left, 12 go in, grouped into 4 ad groups that mirror the 4 fixed landing pages, kept as small as the numbers justify (most Brussels volumes in research/53 are under 100 searches a month; only 4 keywords clear 300). Match types are exact and phrase only, never broad, per the fixed rule. Bid ranges below are research/53's own "Top of page bid low / high" column for the Brussels location, quoted for planning only: bidding itself is Maximize Conversions, so no manual per-keyword bid is set at creation.

### FR Bruxelles | Général -> https://prodebouchage24.be/fr/

| Keyword | Match | Brussels searches/month | Top-of-page bid |
|---|---|---|---|
| débouchage | Exact | 90 | 5,82 to 18,37 EUR |
| débouchage urgent | Exact | 20 | 10,12 to 30,74 EUR |
| société de débouchage | Phrase | 20 | 17,12 to 30,44 EUR |
| débouchage bruxelles | Exact | 720 | 4,98 to 25,82 EUR |
| déboucheur bruxelles | Exact | 720 | 4,98 to 25,82 EUR |

5 keywords. This is the tier-1 emergency and brand-search set, same logic as FR emergency in the live campaign (ads-program.md section 2). The bare [déboucheur] is left out, see below.

### FR Bruxelles | WC bouché -> https://prodebouchage24.be/fr/wc-bouche/

| Keyword | Match | Brussels searches/month | Top-of-page bid |
|---|---|---|---|
| wc bouché | Exact | 30 | 7,62 to 30,67 EUR |
| débouchage wc | Exact | 320 | 5,28 to 34,76 EUR |

2 keywords. Small group, but "débouchage wc" alone is the fourth-biggest French Brussels term in the whole list (behind "débouchage canalisation" at 1 000, and "débouchage bruxelles" / "déboucheur bruxelles" at 720 each, the same search pool shown twice by Google, not 1 440 combined).

### FR Bruxelles | Canalisation bouchée -> https://prodebouchage24.be/fr/canalisation-bouchee/

| Keyword | Match | Brussels searches/month | Top-of-page bid |
|---|---|---|---|
| débouchage canalisation | Exact | 1 000 | 6,08 to 30,35 EUR |
| canalisation bouchée | Exact | 30 | 7,11 to 30,68 EUR |
| évier bouché | Exact | 50 | 5,12 to 17,94 EUR |
| égout bouché | Exact | not shown, no measurable Brussels volume | not shown |

4 keywords. "débouchage canalisation" is the single biggest term of the 25 in Brussels. "égout bouché" carries no visible search volume in the Brussels pull (Google's table showed no numbers at all for it, in any of the three locations research/53 tested); it is included anyway as a low-bid, call-ready problem term, matching how the account already treats near-zero-volume terms elsewhere (ads-program.md section 2), and should be one of the first things reviewed once real search-terms data exists.

### FR Bruxelles | Cave inondée -> https://prodebouchage24.be/fr/cave-inondee/

| Keyword | Match | Brussels searches/month | Top-of-page bid |
|---|---|---|---|
| cave inondée | Phrase | 10 | not shown |

1 keyword. This is the thinnest group by far: 10 searches a month for the whole Brussels region, no bid data at all. It is built anyway because the task's fixed landing-page list names /fr/cave-inondee/ and the account already treats cellar pumping as a storm-driven, call-ready service worth a place even at low volume. Flagged in Open points as a candidate to fold into the Canalisation group if it earns no impressions in the first read.

**Left out of the 25, with reasons:**
- All 11 Dutch keywords: campaign is French only.
- "débouchage égout": not shown, no measurable Brussels volume in any of the three location pulls research/53 ran, and it duplicates the intent of "égout bouché", which is kept.
- [déboucheur] (the bare word, not "déboucheur bruxelles"): in French it also names the chemical product, not just the trade, so it is a weak signal on its own; its own top-of-page bid also reaches 23,04 EUR. "déboucheur bruxelles" (paired with the town) stays.

12 French keywords used, 2 French keywords left out, 11 Dutch keywords left out. 12 + 2 + 11 = 25.

---

## 4. The ads: one responsive search ad per group

All headlines and descriptions were counted by script (Node, `Array.from(s).length`, the same method the account's own paste sheets use), matching French, spoken, "on", no em dash, a space before "?", the page's own voice. No price number in any line. The phone number never appears in a headline (the call asset carries it, per the fixed rule). No unproven claim ("20 ans", "numéro 1" or similar): every claim below (price at the phone, confirmed at the door, camera included, 30-day guarantee, night/weekend/holiday surcharge already in the quoted price, déplacement compris) is on the live page, design/site-source/copy-fr.js (promise, guarH/guarP, services, terms, faq). Nothing is pinned. Check line for the builder: **Record Ad strength. Aim: Good. If it reads Poor, the agent records it and stops: the session writes the replacement headline, the agent never writes live copy by itself. Never pin.**

### RSA for FR Bruxelles | Général

Final URL: https://prodebouchage24.be/fr/
Display paths: /debouchage [10] /bruxelles [9]

Headlines (15, limit 30):

    Canalisation bouchée ? Appelez   [30]
    Débouchage urgent à Bruxelles    [29]
    Déboucheur à Bruxelles, 24h/24   [30]
    Ça déborde ? Appelez, on vient   [30]
    WC ou évier bouché, on vient     [28]
    Urgence 24h/24 à Bruxelles       [26]
    Le prix, dit au téléphone        [25]
    Prix confirmé à votre porte      [27]
    On regarde avant de casser       [26]
    Nuit, week-end, jours fériés     [28]
    Déplacement compris              [19]
    Inspection caméra comprise       [26]
    Garantie 30 jours, on repasse    [29]
    Égout bouché ? Haute pression    [29]
    Appelez, on vient à Bruxelles    [29]

Descriptions (4, limit 90):

    Le prix vous est dit au téléphone et confirmé à votre porte, avant qu'on commence.       [82]
    Canalisation, WC ou égout bouché ? On vient à Bruxelles, caméra et haute pression.        [82]
    24h/24, 7j/7, nuit, week-end et jours fériés. Déplacement et caméra compris.               [76]
    On vient à Bruxelles. Ça se rebouche dans les 30 jours ? On repasse, et c'est gratuit.   [86]

Checks: 15 headlines, each opening on a different word, all counted, all 30 or under. 4 descriptions, all 90 or under. Both paths 15 or under. Brussels named in 4 headlines (2, 3, 6, 15) plus all 4 descriptions. An explicit "Appelez" (call instruction) in 3 headlines (1, 4, 15). No price, no phone number, no unproven claim.

### RSA for FR Bruxelles | WC bouché

Final URL: https://prodebouchage24.be/fr/wc-bouche/
Display paths: /wc-bouche [9] /bruxelles [9]

Headlines (15, limit 30):

    WC bouché ? Appelez, on vient    [29]
    Bruxelles, on débouche le WC     [28]
    Toilette bouchée ? Appelez       [26]
    Ça remonte, ça déborde ?         [24]
    Débouchage WC 24h/24, 7j/7       [26]
    Le prix, dit au téléphone        [25]
    Prix confirmé à votre porte      [27]
    On regarde avant de casser       [26]
    Nuit, week-end, jours fériés     [28]
    Déplacement compris              [19]
    Inspection caméra comprise       [26]
    Garantie 30 jours, on repasse    [29]
    Appelez, on vient à Bruxelles    [29]
    Votre WC déborde ? On vient      [27]
    Joignable 24h/24 à Bruxelles     [28]

Descriptions (4, limit 90):

    Le prix vous est dit au téléphone et confirmé à votre porte, avant qu'on commence.       [82]
    WC bouché, qui déborde ou qui remonte ? On vient à Bruxelles, caméra et haute pression.   [87]
    24h/24, 7j/7, nuit, week-end et jours fériés. Déplacement et caméra compris.               [76]
    On vient à Bruxelles. Ça se rebouche dans les 30 jours ? On repasse, et c'est gratuit.   [86]

Checks: 15 headlines, each opening on a different word, all counted, all 30 or under. 4 descriptions, all 90 or under. Both paths 15 or under. Brussels named in 3 headlines (2, 13, 15) plus all 4 descriptions. An explicit "Appelez" (call instruction) in 3 headlines (1, 3, 13). No price, no phone number, no unproven claim.

### RSA for FR Bruxelles | Canalisation bouchée

Final URL: https://prodebouchage24.be/fr/canalisation-bouchee/
Display paths: /debouchage [10] /canalisation [12]

Headlines (15, limit 30):

    Canalisation bouchée ? Appelez   [30]
    Bruxelles ? On vient déboucher   [30]
    Évier bouché ? On vient          [23]
    Ça refoule ? Appelez, on vient   [30]
    Débouchage canalisation 24h/24   [30]
    Égout bouché ? Haute pression    [29]
    Le prix, dit au téléphone        [25]
    Prix confirmé à votre porte      [27]
    On regarde avant de casser       [26]
    Nuit, week-end, jours fériés     [28]
    Déplacement compris              [19]
    Inspection caméra comprise       [26]
    Garantie 30 jours, on repasse    [29]
    Appelez, on vient à Bruxelles    [29]
    Lavabo bouché ? Appelez          [23]

Descriptions (4, limit 90):

    Le prix vous est dit au téléphone et confirmé à votre porte, avant qu'on commence.       [82]
    Évier, lavabo ou canalisation qui refoule ? On vient à Bruxelles, caméra comprise.       [82]
    24h/24, 7j/7, nuit, week-end et jours fériés. Déplacement et caméra compris.               [76]
    On vient à Bruxelles. Ça se rebouche dans les 30 jours ? On repasse, et c'est gratuit.   [86]

Checks: 15 headlines, each opening on a different word, all counted, all 30 or under. 4 descriptions, all 90 or under. Both paths 15 or under. Brussels named in 2 headlines (2, 14) plus all 4 descriptions; this group leans more on the problem words (canalisation, évier, égout, lavabo) than on the town name, which matches how the live per-problem groups are already written. An explicit "Appelez" (call instruction) in 4 headlines (1, 4, 14, 15). No price, no phone number, no unproven claim.

### RSA for FR Bruxelles | Cave inondée

Final URL: https://prodebouchage24.be/fr/cave-inondee/
Display paths: /pompage [7] /cave-inondee [12]

Headlines (15, limit 30):

    Cave inondée ? Appelez           [22]
    Bruxelles, on vient pomper       [26]
    Ça monte dans la cave ?          [23]
    Votre cave sous eau ? On vient   [30]
    Pompage de cave 24h/24           [22]
    Inondation ? On vient pomper     [28]
    Le prix, dit au téléphone        [25]
    Prix confirmé à votre porte      [27]
    On pompe et on nettoie           [22]
    Nuit, week-end, jours fériés     [28]
    Déplacement compris              [19]
    Même la nuit, on vient pomper    [29]
    Appelez, on vient à Bruxelles    [29]
    Eau dans la cave ? Appelez       [26]
    Joignable 24h/24 à Bruxelles     [28]

Descriptions (4, limit 90):

    Le prix vous est dit au téléphone, avant qu'on prenne la route, et confirmé à votre porte.   [90]
    Cave inondée, l'eau qui monte ? On vient pomper à Bruxelles, et on nettoie derrière.         [84]
    24h/24, 7j/7, nuit, week-end et jours fériés. Déplacement compris.                            [66]
    Bruxelles ? Appelez, on vous dit le prix et on vient pomper votre cave.                     [71]

Checks: 15 headlines, each opening on a different word, all counted, all 30 or under. 4 descriptions, all 90 or under. Both paths 15 or under. Brussels named in 3 headlines (2, 13, 15) plus all 4 descriptions. An explicit "Appelez" (call instruction) in 3 headlines (1, 13, 14). No price, no phone number, no unproven claim.

**One naming choice made on purpose: no specific commune (Laeken, Jette, Ganshoren or any other) is named in any headline.** Only "Bruxelles" is used. Reason: naming the depot's own district could point at an operational location that is not meant to be advertised (the Business Profile keeps the depot address hidden, launch-plan.md section 1), and no file confirms Roro wants specific-commune claims in ad copy yet. This is this session's own caution, not a rule from a file; flagged again in Open points.

---

## 5. Sitelinks (Général 6, WC bouché 5, Canalisation bouchée 5, Cave inondée 4; 20 total) and callouts

**All of these are the LIVE ones already running on the Ring campaign, reused word for word, because they point at the exact same pages this new campaign will use.** Nothing new was written for this section; every character count below was already verified by script in the files they come from (research/25 section 6, ad-groups-per-problem-2026-09-17.md section 3, ads-assets-2026-09-18.md section 2). **"Où on travaille" is dropped from every group**: it sends a Brussels searcher to the zone section, and the zone section is exactly where a Brussels reader is told the region does not include Brussels-ville (section 6). Général gets "Qui vient chez vous" in its place; the other three groups simply drop to 5.

### FR Bruxelles | Général (reused from FR emergency)

1. **Les prix, tout compris** [22] -> /fr/#prix | "Prix TVA comprise, déplacement" [30] / "et première heure compris." [26]
2. **Qui vient chez vous** [19] -> /fr/ | "Afrim vient avec la caméra" [26] / "et la camionnette. Pas un inconnu." [34]
3. **Comment ça se passe** [19] -> /fr/#contenu | "Vous appelez, on dit le prix," [29] / "on vient, on confirme, on débouche." [35]
4. **Nos conditions** [14] -> /fr/conditions-generales.html | "Nos conditions, écrites en clair." [33] / "Garantie, paiement, facture." [28]
5. **WC bouché ? Le prix ici** [23] -> /fr/wc-bouche/#prix | "Ce que coûte un WC bouché" [25] / "et comment on le débouche." [26]
6. **Cave inondée ? On pompe** [23] -> /fr/cave-inondee/ | "On vient pomper la cave" [23] / "et on nettoie derrière." [23]

### FR Bruxelles | WC bouché, FR Bruxelles | Canalisation bouchée, FR Bruxelles | Cave inondée (reused from their live counterparts)

Each of these three groups gets its own 3 "problem" sitelinks now (price of this problem, how it goes, our conditions; "where we work" is dropped, above) plus the same 2 shared extras, 5 total. The 3 problem sitelinks per group and their exact text and character counts are in assets/prepared/ad-groups-per-problem-2026-09-17.md section 3 (they are identical for this campaign, since the destination pages are the same pages). The 2 shared extras, added on all three:

4. **Qui vient chez vous** [19] -> /fr/ | "Afrim vient avec la caméra" [26] / "et la camionnette. Pas un inconnu." [34]
5. **Garantie 30 jours** [17] -> /fr/#prix | "Ça se rebouche dans le mois ?" [29] / "On repasse, et c'est gratuit." [29] (WC bouché and Canalisation bouchée ONLY. NOT on Cave inondée: the guarantee covers the unblocking, no guarantee exists for pumping. Session, 2026-09-28.)

**Note on "Le prix d'un débouchage" (the FR | Canalisation bouchée group's price sitelink):** it carries a Tobacco false-positive history on the live Ring campaign (disapproved 17 Sep, appeal failed 22 Sep, still Eligible and serving today, research/41 and research/48). If it is disapproved here too, drop it, never appeal again.

**Total: Général 6 + WC bouché 5 + Canalisation bouchée 5 + Cave inondée 4 = 20 sitelinks**, all reused, none written fresh.

### Callouts (4, ad group level, reused from FR emergency, add to all 4 groups)

    24h/24, 7j/7 et fériés    [22]
    Prix dit au téléphone     [21]
    Caméra comprise           [15]
    Déplacement compris       [19]

### Structured snippet (reused from FR emergency, add to all 4 groups)

Header: "Catalogue de services"

    Débouchage urgent         [17]
    Égout et sterput          [16]
    Curage haute pression     [21]
    Inspection caméra         [17]
    Vidange fosse septique    [22]
    Pompage de cave           [15]

### Business name and logo

Both are ACCOUNT-level assets already live ("Pro Débouchage", the dp mark logo, ads-assets-2026-09-18.md section 3). They should serve automatically on this new campaign's ads with no extra step; the builder should confirm this at the Step 9 read-back (section 8) rather than re-create either asset.

### Call asset

**The call asset (0480 649 649, call reporting ON, 24/7 schedule) sits at ACCOUNT level, not campaign level:** research/38 step 4 reads it directly ("One call asset, account level... Status: Eligible/Enabled"), and research/40 shows it appearing on a freshly built ad group as "1 account-level Call asset (phone number, inherited, not something this build added)". No fresh copy is needed for this campaign; it should show as eligible on this campaign's ad groups automatically. Confirmed at the Step 9 read-back (section 8), not created there.

---

## 6. Page check: what a person in Brussels reads on copy-fr.js

Read as a person in Brussels would, on /fr/ and on all three per-problem variant pages (the build.js comment confirms the FAQ, the zone section, the scam band and the consent card are byte-identical across all variant pages, only the hero, title and description change). This is a LIST only, no page change proposed here; a page change is a separate decision.

**Sentences that tell a Brussels reader, or let them think, "they do not come to me":**

1. **Key `zoneT`:** "On travaille tout autour de Bruxelles, côté flamand comme côté wallon : d'Alost à Louvain et de Malines à Nivelles, jusqu'à environ 40 km de Wemmel. **Bruxelles-ville n'est pas dans notre zone.**" This line is the clearest possible "not you" statement, and it sits in the Zone section that every one of the four landing pages this campaign will use also carries, since the zone section is not one of the strings the per-problem variants override.

2. **Key `faq`, entry 10 ("Quelles communes couvrez-vous ?"):** "Tout autour de Bruxelles, côté flamand comme côté wallon, à environ 40 km autour de Wemmel. Au nord jusqu'à Malines, Boom et Kontich, à l'ouest jusqu'à Alost, Termonde et Ninove, à l'est jusqu'à Louvain et Aarschot, au sud jusqu'à Enghien, Nivelles et Louvain-la-Neuve. Et bien sûr toute la périphérie proche : Vilvorde, Dilbeek, Zaventem, Hal, Tervuren, Waterloo, Wavre et les autres. **Bruxelles-ville n'est pas dans notre zone.** Votre commune n'est pas citée ? Appelez, on vous dit oui ou non tout de suite." Same exclusion, repeated, inside the FAQ that every landing page also carries; every named example town is outside the region, none of the 19 communes is ever named as covered.

3. **Key `towns`:** the town-name list rendered as chips on the page (Vilvorde, Machelen, Wemmel, Meise, Grimbergen ... 36 towns in total) contains **zero of the 19 Brussels communes**. A Brussels reader scanning the chips for their own commune's name, the way the page invites them to, will not find it.

**A softer, ambiguous signal, quoted for completeness, not itself a "not me" statement:**

4. **Key `meta.desc`** (and the matching line in each variant's own `desc`): "Déboucheur autour de Bruxelles, d'Alost à Louvain et de Malines à Nivelles, 24h/24." "Autour de Bruxelles" (around Brussels) reads, before the reader reaches the zone section or the FAQ, as ambiguous: it could mean "including Brussels" or "around it but not in it". The zone section and the FAQ resolve the ambiguity the wrong way for this campaign a few lines later.

5. **Key `footD`** (the footer, on every one of the four pages): "Débouchage, curage, inspection caméra, fosse septique et pompage de cave. **Tout autour de Bruxelles**, côté flamand comme côté wallon, 24h/24." Same "around, not in" ambiguity as `meta.desc`, and it sits in the footer, so it repeats on every scroll to the bottom of the page.

6. **Keys `meta.title`, `ogTitle`, `ogd`, and the three variant `title` strings** (WC bouché, Canalisation bouchée, Cave inondée): all say "autour de Bruxelles" ("Débouchage 24h/24 autour de Bruxelles", "Pro Débouchage · Débouchage 24h/24 autour de Bruxelles", and the matching og-description). Same ambiguity as item 4, and these are the very first words a Brussels searcher reads: the browser tab, the search snippet, the social preview.

7. **Key `scamI1` with `citeWhy`:** "Dans la région de Hal-Vilvorde, on connaît le problème : ... On le dit parce que c'est notre région." A softer signal again, not a Brussels exclusion by name, but it names a specific region that is not Brussels as "our region", on the page a Brussels searcher lands on.

8. **Outside copy-fr.js, the same pattern repeats.** `copy-nl.js` lines 250 (`zoneT`) and 266 (the FAQ commune answer) carry the same sentence in Dutch ("rond Brussel... Brussel-stad zit niet in onze regio"); `copy-en.js` lines 210 and 226 carry it in English ("around Brussels... Brussels city itself isn't in our area"). And `build.js` line 535 (`areaServed: towns`) feeds the same 36-town, zero-Brussels-commune list into the page's own schema.org markup, so a search engine reading the structured data sees the same area as a human reader.

**One line that offers an opening, quoted for balance:** key `zoneC`: "La liste s'arrête ici, pas notre zone. Votre commune n'y est pas ? Appelez, on vous dit oui ou non tout de suite." This invites a call even for an unlisted commune, but it sits directly after the explicit exclusion in both `zoneT` and the FAQ, so a reader who has just read "Bruxelles-ville n'est pas dans notre zone" is unlikely to test that opening.

**This is the single biggest open question this draft surfaces.** Every one of the four proposed landing pages tells a Brussels reader, twice, in plain language, that Brussels is excluded. Running paid clicks from Brussels searches to a page that says "we do not come to you" is not a small mismatch; it is the opposite of the campaign's purpose. No page change is proposed here (that is explicitly out of scope for this draft), but this cannot be quietly skipped either: see Open points.

---

## 7. Open points for the session

1. **The page contradiction (section 6) is now gate (c) in the build checklist (section 8):** the four landing pages must no longer say Brussels is out, the site rebuilt and deployed, and every ad claim re-read against the live page (ads-program section 5), before this campaign can safely go live. This is separate from and in addition to the van question. Options this draft does not choose between: update `zoneT`, the FAQ answer and the `towns` chips for the four pages this campaign uses (a site change, its own review round per AGENTS.md section 10); build Brussels-specific landing variants; or something else. Not decided here.
2. **The van question (Euro 6) is still open**, per the task's own framing; this gates the whole campaign, all 19 communes and the first ring alike, since the Low Emission Zone covers the entire region (research/52 section 4).
3. **The parking question (roro-brussels-questions-2026-09-27.md) is also still open**: whether Roro and Afrim would take Brussels jobs at all, and whether the 75 EUR/year "carte de dérogation intervention" is worth getting. Not answered in the files read for this draft.
4. Campaign and ad-group names ("PD | Search | Bruxelles | FR", "FR Bruxelles | ...") are this session's own proposal, not confirmed by any file or decision.
5. **FR Bruxelles | Cave inondée is a very thin group** (10 searches/month region-wide, no bid data at all). Built because the fixed landing-page list includes it, but flagged as a candidate to fold into Canalisation bouchée at the first real read if it earns no impressions.
6. **"égout bouché" carries no visible Brussels search volume** in research/53's pull; kept as a low-bid, call-ready term on the same logic the account already uses elsewhere, but it is the first candidate for review once real search-terms data exists.
7. No specific Brussels commune (Laeken, Jette, Ganshoren or any other) was named in the ad copy, only "Bruxelles" itself; this session's own caution (section 4), not a rule from a file. If the session wants to name communes once the page question is settled, that is a small, separate copy edit.
8. **Spend ceiling: 486.40 a month for this campaign, 1,398.40 for the whole account with the Ring's 912.** Maximize Conversions has no click-price cap. Brussels top-of-page bids reach 34.76 EUR. This account paid 11.09 and 14.91 average CPC on 15 and 16 Sep, and one click of 22.90 (research/48). Arithmetic only: 486.40 buys about 91 clicks at the account's 5.34 average, about 32 at 15.
9. **Stop rule, proposed by the session for Fady's go:** read daily for 14 days. If 150 EUR are spent with no call in the ad's call log and no tap on the call button, pause and ask Fady. A dear click that calls is a good click (the price of a click alone is never the alarm, research/54).
10. Whether Google's 2026 campaign-creation wizard still asks for "Ways to reach goal" and the other fields exactly as research/25 recorded them on 2026-08-27 is not verified here; the builder should read the live wizard and note any field that has moved or been renamed.

---

## 8. Build checklist for the browser agent

**Do not start this build until all three of these are true: (a) Roro has answered the Euro 6 question, and ideally the parking-card question, from assets/prepared/roro-brussels-questions-2026-09-27.md; (b) Fady has given his own typed go naming this campaign and the 16 EUR/day budget (AGENTS.md section 15); and (c) the four landing pages no longer say Brussels is out, the site is rebuilt and deployed, and every ad claim in section 4 has been re-read against the live page (ads-program section 5). If any of the three is missing, stop here and tell the session, do not build even paused.**

One browser agent, one job at a time, tabs closed at the end, machine-wide browser lock taken and released, re-acquired every 10 minutes as a heartbeat (AGENTS.md section 14). Sign in on Chrome Profile 6 (hi@fady.be, Ads admin) and confirm the account from the page, never the URL: Pro Debouchage, customer ID 166-502-9105. **Verify the result, never the submission**: after every step, reload and read the value back before moving on. Because the campaign stays Paused throughout this build, its own keywords and ads will themselves read status "Campaign paused"; that is expected, not a fault, and is separate from each keyword's own Eligible/Limited state or each ad's own Ad strength.

**Step 0. Read the before-state.** Ring campaign's current settings (budget, bidding, location exclusion, reach figure for "Brussels, Belgium") and its all-time totals, so there is a clean before-half for the before-and-after read, and a fixed point this same sitting's after-state read (Step 9) compares against later.

**Step 1.** In the wizard, before Publish, set: every setting in section 1; the location Brussels, Belgium at Presence; budget and bidding; the Général ad group with its keywords and its RSA. If the wizard offers a start date, set it 7 days ahead. Publish, pause within seconds, reload, read Paused. Publishing is a live moment and needs Fady's typed go first (gate (b) above). Add the other three groups on the paused campaign, in the steps below.
   Read back: every setting in section 1's table; the location reads "Brussels, Belgium" by name and by type, the same single region the Ring campaign excludes at Step 0, checked by name and type, never only by the reach figure (that number can drift between reads); the Général group's keywords present with the correct match types; the Général RSA's final URL, all headlines and descriptions, both paths, and its Ad strength. Status reads Paused.

**Step 2. Attach the negative keyword list** "PD | Negatives | shared" at campaign level. Add no other negative keyword at this step.
   Read back: the list is attached, entry count matches what the Ring campaign's copy shows.

**Step 2b. Add this campaign's own negatives, at campaign level, never to the shared list** (the shared list also serves the live Ring campaign). As phrase negatives: the campaign-level negatives read on the Ring campaign at Step 0 (18 today: dhm service, dhm, maigret, maxi cleaning, vidange nette, lazeroms, bob service, de vleminck, brutout, curnet, moens, de wever, schmetz, hemerijckx, ldl cleaning, jerry debouchage, gailly, vleminck), plus "louis le deboucheur" (research/53 Block 2, a competitor name already surfacing in search terms). As broad negatives: miracle, pastille (research/48: two how-to searches, "solution miracle pour déboucher les wc" and "pastille lave vaisselle pour deboucher canalisation", came in through the phrase keywords this draft keeps).
   Read back: all negatives present at campaign level, correct match type each, none of them added to "PD | Negatives | shared".

**Step 3. Create the other three ad groups**, one at a time, Enabled, with the default final URLs from section 3 (WC bouché -> /fr/wc-bouche/, Canalisation bouchée -> /fr/canalisation-bouchee/, Cave inondée -> /fr/cave-inondee/). No ad-group CPC bid needed under Maximize Conversions.
   Read back: each ad group exists, status Enabled, default final URL exactly matches, trailing slash included.

**Step 4. Add the keywords to each of the other three groups** from section 3, exact match types as marked (square brackets = exact, quotation marks = phrase, never broad). **Known trap (ads-program.md section 2, ad-groups-per-problem-2026-09-17.md section 4): the ad group wizard can save the group and its ad while silently dropping the typed keywords. Always reload and read the Keywords tab back before trusting a save.** A keyword that reads Broad, or is missing, is wrong and must be fixed on the spot before moving to the next group.
   Read back: every keyword present, correct match type, each Eligible or at worst Eligible (Limited).

**Step 5. Create one RSA per remaining group** from section 4. Nothing pinned, all 15 headlines and 4 descriptions at position "None". Set both display paths. Save.
   Read back: final URL correct, all 15 headlines and 4 descriptions present, both paths set, Ad strength as Google reports it. **Record Ad strength. Aim: Good. If it reads Poor, the agent records it and stops: the session writes the replacement headline, the agent never writes live copy by itself. Never pin.**

**Step 6. Add the sitelinks per group** from section 5 (6 for Général, 5 each for the other three), at ad group level.
   Read back: correct count per group (Général 6, WC bouché 5, Canalisation bouchée 5, Cave inondée 4, 20 total; "Garantie 30 jours" never on Cave inondée), no two sharing a URL inside the same group, each one opens the right anchor on the right page. If "Le prix d'un débouchage" (Canalisation bouchée) is disapproved here (Tobacco false positive), drop it, never appeal again.

**Step 7. Add the callouts and the structured snippet** from section 5 to all four groups.
   Read back: 4 callouts and 1 structured snippet ("Catalogue de services", 6 values) on each group.

**Step 8. Confirm the account-level Business name and Business logo assets, and the account-level call asset, show as eligible for this campaign's ads**, without re-creating any of them. If any is missing at this campaign's scope, write that down as a finding, do not create a duplicate asset.

**Step 9. The after-state read, after a full page reload.** Campaign status Paused, budget 16,00 EUR/day, bidding Maximize Conversions with no target CPA, location Brussels only at Presence (checked by name and type, not the reach figure), negative list attached plus the Step 2b campaign-level negatives, the account-level call asset showing eligible, all four ad groups with their keyword counts and match types, one RSA per group with its Ad strength, sitelink counts per group (Général 6, the other three 5 each), 4 callouts and 1 structured snippet on each group. **Also re-read the Ring campaign and compare it against the Step 0 read from this same sitting** (budget, bidding, the Brussels exclusion, the shared negative list's entry count): it must match Step 0 exactly, never some fixed value written here, because the Ring campaign's own settings can change before or during this build; if it does not match, report the difference, never assume it. Report this table back in full; it is the record of what was built.

**Step 10. Stop.** The campaign stays Paused. Do not click Enable. Enabling is Fady's own typed go, given after the van and parking answers, and it is a separate step from this build.

**Google's "Confirm it's you" identity check:** creating ad groups or ads on this account can fire this dialog at Save (AGENTS.md section 14). The agent touches NOTHING inside that dialog: it is the owner's own click. Send the orchestrator one line through SendMessage to "main" ("IDENTITY CHECK IS ON SCREEN NOW", never the number), then only re-read the page every 20 seconds for up to 10 minutes. Fady clicks Confirm himself; it clears in 20 to 30 seconds when nothing else touches it. Get Fady's "ready" before this build session starts, the same way the account rule already asks for identity-check builds.

**If a step fails or the agent stalls: stop.** Two consecutive browser-agent failures means the surface is unavailable for now (AGENTS.md section 14): say what is half-built and leave it, never guess, never retry a third time in a row.
