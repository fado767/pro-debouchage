Reviewed 2026-09-28 by a stronger reader, fixes applied the same day; verdict before fixes: ready after fixes.

# FR per-problem RSAs, second ad draft (2026-09-28)

*Written by a drafting session, budget 30 minutes, files only, no Chrome, no git. This is a DRAFT only. It touches no live account and no other file. Nothing in it goes live: both ads are ADDED only after the 14-day read of the rollback of 2026-09-28, Mon 2026-10-12, never inside that window, because a new ad would blur the read (DECISIONS 2026-09-28, NOW.md). The live ads are never edited, never paused by this work.*

**Why.** Both groups score Quality Score 3 of 10 (research/49-2026-09-27-week4-read.md section 5). Expected click rate reads Below average on all three keywords, [wc bouché], [canalisation bouchée] and [évier bouché], whichever order the three parts are read in. Read in the one labeled order in the files (research/34 line 106, research/48 line 154: expected click rate, landing page experience, ad relevance), [wc bouché] and [évier bouché] carry ad relevance Above average and landing page experience Below average, and [canalisation bouchée] carries landing page experience Average and ad relevance Below average. A labeled read of the parts for these three keywords together is on the agenda of the next Ads read (NOW.md). This ad is mainly a click-rate play: research/49 section 3 reads click rate at 3.28 percent in FR | WC bouché and 3.16 percent in FR | Canalisation bouchée, against 15.31 percent in FR emergency in the same window, so the fix this ad reaches for is headlines that carry the keywords people typed, word for word.

**Sources read.** assets/prepared/ad-groups-per-problem-2026-09-17.md (the live ads and keywords of both groups), research/40-ad-groups-build-and-promo-read-2026-09-17.md (keywords as built), assets/prepared/fr-rsa-2-draft-2026-09-14.md (an earlier second-ad draft, for the form), design/site-source/copy-fr.js (page copy, the /fr/wc-bouche/ and /fr/canalisation-bouchee/ variants), playbook/ads-program.md section 3 (ad copy rules), research/55-customer-and-conversion-facts-2026-09-28.md sections 2 and 5 (what people search, what they fear), assets/prepared/brussels-campaign-draft-2026-09-28.md section 4 (tone and rule model, reviewed today by a stronger reader).

**Counts verified by script**, not by eye: a Node script held every headline, description and path, counted each with `Array.from(s).length`, checked headlines against 30, descriptions against 90, paths against 15, checked keyword coverage, the call-instruction count, first-word variety, and the overlap with each live ad's 15 headlines. All checks below are the script's own output. Script kept in the session's scratchpad, not in this repo. **Re-verified 2026-09-28 by this review's own script pass, after the fixes below:** the path counts printed in the first draft were off by one in both ads (the leading slash was not counted; corrected in place below), and the fixes to FR | Canalisation bouchée headlines 3, 5 and 9 changed the keyword-coverage count for that ad from 9 to 7 (two headlines no longer carry their keyword word for word, see section 2); the fix to headline 5 also broke the "no two headlines open on the same word" rule for that ad (headlines 4 and 5 both now open on "Débouchage"), flagged in section 4, not fixed here since the instructed replacement text was applied as given.

---

## 1. RSA 2 for FR | WC bouché

Ad group: **FR | WC bouché** (live since 2026-09-17). This ad is ADDED next to the live RSA (Ad strength Average per research/49). The live ad is never edited.

Final URL: **https://prodebouchage24.be/fr/wc-bouche/**
Display paths (same as the live ad's paths, 15 max each): **/debouchage-wc** [14] **/urgent-24h-24** [14]

Group keywords (from ad-groups-per-problem-2026-09-17.md section 1): [wc bouché], [toilette bouchée], [wc qui déborde], "débouchage wc", "wc bouché urgent".

### Headlines (15, limit 30)

    1.  Toilette bouchée ? On vient      [27]
    2.  Appelez, on débouche votre WC    [29]
    3.  WC qui déborde ? Appelez         [24]
    4.  Débouchage WC, jour et nuit      [27]
    5.  Urgence WC bouché ? Appelez      [27]
    6.  Le prix, dit au téléphone        [25]
    7.  Prix confirmé à votre porte      [27]
    8.  La caméra avant le marteau       [26]
    9.  Nuit, week-end et jours fériés   [30]
    10. Autour de Bruxelles, on vient    [29]
    11. Déplacement compris              [19]
    12. Caméra d'inspection comprise     [28]
    13. Pas de supplément à la porte     [28]
    14. Peu importe l'heure, appelez     [28]
    15. Wemmel, Kraainem, Tervuren       [26]

All 15 counted, all 30 characters or under. Each headline opens on a different word (script-checked, zero duplicates).

### Descriptions (4, limit 90)

    1. WC bouché, ça remonte, ça déborde ? Appelez, vous avez le prix tout de suite.          [77]
    2. Le prix annoncé au téléphone est le prix sur la facture. Confirmé à votre porte.        [80]
    3. Joignable 24h/24, 7j/7. La nuit et le week-end, le supplément est dit avec le prix.      [83]
    4. Autour de Bruxelles, côté flamand comme côté wallon. Débouchage garanti 30 jours.        [81]

All 4 counted, all 90 characters or under.

### Which headlines carry a group keyword (rule: at least 4, got 4)

| Headline | Keyword carried, word for word |
|---|---|
| 1. Toilette bouchée ? On vient | toilette bouchée |
| 3. WC qui déborde ? Appelez | wc qui déborde |
| 4. Débouchage WC, jour et nuit | débouchage wc |
| 5. Urgence WC bouché ? Appelez | wc bouché |

Headline 2 ("Appelez, on débouche votre WC", this review's fix) no longer carries a group keyword word for word: "débouche votre WC" is not "débouchage wc" or "wc bouché". The count fell from 5 to 4, still meeting the rule.

### Call-to-call headlines (rule: at least 3, got 4)

Headlines 2, 3, 5, 14 ("Appelez"). Headline 5 is new this review and adds a fourth call headline. The phone number appears in none of the 15 headlines or 4 descriptions (script-checked, 0 occurrences of "0480" or "649").

### Shared with the live ad's 15 headlines (rule: at most 3, got 3)

The live ad's headlines are in assets/prepared/ad-groups-per-problem-2026-09-17.md section 2. Exact-text matches (case-insensitive) between this draft and the live ad:

- "Le prix, dit au téléphone"
- "Prix confirmé à votre porte"
- "Déplacement compris"

That is 3 of 15, at the limit, not over it. Unchanged by this review's fixes (none of the six edited headlines were on this list before or after). No other headline repeats a live headline word for word (reordered town lists and reworded lines count as different text and are not on this list).

### Claims and where they sit on the page (design/site-source/copy-fr.js)

| Claim in the ad | Page key | Page text it comes from |
|---|---|---|
| Price at the phone, confirmed at the door (Description 2) | `promise` + `steps[3]` | "Le prix annoncé au téléphone est le prix sur la facture." / "On confirme le prix à votre porte, puis on débouche." |
| Camera before the hammer (Headline 8) | `whoBlocks[0]` (line 215) | "La caméra passe avant le marteau. On regarde d'abord avec la caméra. Casser est le dernier recours, et jamais sans votre accord." |
| Camera inspection included (Headline 12) | `services[3]` | "Inspection caméra ... Comprise avec l'intervention." |
| Joignable 24h/24, 7j/7; the night/weekend surcharge is told with the price (Description 3) | `finalL` + `terms` | "Joignable 24h/24 et 7j/7, week-end et jours fériés compris. Numéro normal, pas de surtaxe." / "...On vous annonce le supplément au téléphone, avec le prix, avant de prendre la route." |
| Déplacement compris (Headline 11) | `included` | `['TVA comprise', 'Déplacement compris', 'Première heure comprise']` |
| Autour de Bruxelles, côté flamand comme côté wallon, never Bruxelles-ville (Description 4) | `zoneT` | "On travaille tout autour de Bruxelles, côté flamand comme côté wallon... Bruxelles-ville n'est pas dans notre zone." |
| Débouchage garanti 30 jours (Description 4) | `trust[5]` | "Débouchage garanti 30 jours" |
| Pas de supplément à la porte (Headline 13) | `us[1]` | "Pas de prix au mètre, pas de compteur à l'heure, pas de supplément inventé à la porte." |
| Wemmel, Kraainem, Tervuren (Headline 15) | `towns` (line 273) | all three are in the town list |
| Toilette bouchée / WC qui déborde / WC bouché (Headlines 1, 3, 4, 5) | variant `wc` hero and sub | h1 "WC bouché, ça remonte, ça déborde ?", sub "Un WC bouché..." |

---

## 2. RSA 2 for FR | Canalisation bouchée

Ad group: **FR | Canalisation bouchée** (live since 2026-09-17). This ad is ADDED next to the live RSA. The live ad is never edited.

Final URL: **https://prodebouchage24.be/fr/canalisation-bouchee/**
Display paths (same as the live ad's paths, 15 max each): **/debouchage** [11] **/canalisation** [13]

Group keywords (from ad-groups-per-problem-2026-09-17.md section 1): [canalisation bouchée], [évier bouché], [égout bouché], "refoulement égout", "eau qui remonte", [douche bouchée], [lavabo bouché], "débouchage canalisation", "débouchage évier".

### Headlines (15, limit 30)

    1.  Égout bouché ? Appelez           [22]
    2.  Eau qui remonte ? Appelez        [25]
    3.  Refoulement d'égout ? On vient   [30]
    4.  Débouchage canalisation 24h/24   [30]
    5.  Votre évier déborde ? Appelez    [29]
    6.  Douche bouchée ? Appelez         [24]
    7.  Lavabo bouché ? On vient         [24]
    8.  Canalisation bouchée, on vient   [30]
    9.  Évier bouché ? On s'en occupe    [29]
    10. Le prix, dit au téléphone        [25]
    11. Prix confirmé à votre porte      [27]
    12. La caméra avant le marteau       [26]
    13. Nuit, week-end et jours fériés   [30]
    14. Pas de supplément à la porte     [28]
    15. Braine-l'Alleud, La Hulpe        [25]

All 15 counted, all 30 characters or under. Every headline opens on a different word: headline 5 was reworded by the session on 2026-09-28 ("Votre évier déborde ? Appelez", 29, counted by script) after the review's own fix had made it open on "Débouchage" like headline 4.

### Descriptions (4, limit 90)

    1. Évier, lavabo, douche ou canalisation bouchée ? On regarde d'abord avec la caméra.     [82]
    2. Le prix annoncé au téléphone est le prix sur la facture. Confirmé à votre porte.        [80]
    3. Joignable 24h/24, 7j/7. La nuit et le week-end, le supplément est dit avec le prix.      [83]
    4. Autour de Bruxelles, côté flamand comme côté wallon. Débouchage garanti 30 jours.        [81]

All 4 counted, all 90 characters or under.

### Which headlines carry a group keyword (rule: at least 4, got 7)

| Headline | Keyword carried, word for word |
|---|---|
| 1. Égout bouché ? Appelez | égout bouché |
| 2. Eau qui remonte ? Appelez | eau qui remonte |
| 4. Débouchage canalisation 24h/24 | débouchage canalisation |
| 6. Douche bouchée ? Appelez | douche bouchée |
| 7. Lavabo bouché ? On vient | lavabo bouché |
| 8. Canalisation bouchée, on vient | canalisation bouchée |
| 9. Évier bouché ? On s'en occupe | évier bouché |

Headlines 3 and 5 carry no keyword word for word: "Refoulement d'égout" is not "refoulement égout" (the review's fix inserted "d'", the French a person would say), and headline 5 now names the problem ("Votre évier déborde") in place of the keyword "débouchage évier", which reads as no French anyone says. The count fell from 9 to 7, still meeting the rule (at least 4).

### Call-to-call headlines (rule: at least 3, got 4)

Headlines 1, 2, 5, 6 ("Appelez"). Unchanged by this review's fixes. The phone number appears in none of the 15 headlines or 4 descriptions (script-checked, 0 occurrences of "0480" or "649").

### Shared with the live ad's 15 headlines (rule: at most 3, got 2)

The live ad's headlines are in assets/prepared/ad-groups-per-problem-2026-09-17.md section 2. Exact-text matches (case-insensitive) between this draft and the live ad:

- "Le prix, dit au téléphone"
- "Prix confirmé à votre porte"

That is 2 of 15, under the limit of 3. Unchanged by this review's fixes (none of the five edited headlines were on this list before or after). No other headline repeats a live headline word for word: "Braine-l'Alleud, La Hulpe" (this review's fix) names different towns than the live ad's "Waterloo, Wavre, Nivelles", so it is not a match either.

### Claims and where they sit on the page (design/site-source/copy-fr.js)

| Claim in the ad | Page key | Page text it comes from |
|---|---|---|
| Price at the phone, confirmed at the door (Description 2) | `promise` + `steps[3]` | "Le prix annoncé au téléphone est le prix sur la facture." / "On confirme le prix à votre porte, puis on débouche." |
| Camera before the hammer (Headline 12) | `whoBlocks[0]` (line 215) | "La caméra passe avant le marteau. On regarde d'abord avec la caméra. Casser est le dernier recours, et jamais sans votre accord." |
| Évier bouché ? On s'en occupe (Headline 9) | `h1b` | "Appelez. On s'en occupe." (the `drain` variant does not override `h1b`, so the default string applies) |
| Joignable 24h/24, 7j/7; the night/weekend surcharge is told with the price (Description 3) | `finalL` + `terms` | "Joignable 24h/24 et 7j/7, week-end et jours fériés compris. Numéro normal, pas de surtaxe." / "...On vous annonce le supplément au téléphone, avec le prix, avant de prendre la route." |
| Autour de Bruxelles, côté flamand comme côté wallon (Description 4) | `zoneT` | "On travaille tout autour de Bruxelles, côté flamand comme côté wallon... Bruxelles-ville n'est pas dans notre zone." |
| Débouchage garanti 30 jours (Description 4) | `trust[5]` | "Débouchage garanti 30 jours" |
| Pas de supplément à la porte (Headline 14) | `us[1]` | "Pas de prix au mètre, pas de compteur à l'heure, pas de supplément inventé à la porte." |
| Braine-l'Alleud, La Hulpe (Headline 15) | `towns` (line 273) | both towns are in the town list |
| Évier, lavabo, douche, canalisation, égout as the problem words | variant `drain` hero, sub, and `prices` | h1 "Canalisation bouchée, ça remonte ?", sub "Évier, lavabo, douche ou canalisation qui refoule...", `prices` rows "Évier, lavabo ou douche: 119€", "Égout ou sterput, haute pression: 199€" |

---

## 3. Build note for the browser agent (not before Mon 2026-10-12)

- **Before anything, confirm from the page: Chrome profile fady.be (Profile 6), signed in as hi@fady.be, account 166-502-9105, campaign "PD | Search | Ring Bruxelles | FR+NL".** Never from a `/u/N` URL or a device name.
- **The decision this build carries:** DECISIONS.md 2026-09-27 ("Next: second ads for FR | WC bouché and FR | Canalisation bouchée") under Claude's authority over ad copy, structure, keywords, sitelinks and negatives (DECISIONS.md 2026-09-23, "ADS DECISIONS ARE CLAUDE'S"). Fady is at the screen only for the identity check, per AGENTS.md section 14.
- **Read the live ad in each group before building, and never edit it.** The ad is ADDED. The live ad in the same group is never edited, never paused, never touched. Editing it would start a new ad under the old ad's stats; this draft is built as a second, separate RSA.
- **Read bidding and budget back as found at the start of the sitting, never against a fixed number written here.** Both can move between this draft and the build (NOW.md carries the current figures); read the live campaign settings fresh and report them as read, not as assumed.
- Nothing pinned: all 15 headlines and 4 descriptions go in at position "None", matching rule 10.
- **Record Ad strength as Google reports it. Aim: Good. If it reads Poor, the agent records it and STOPS: the session writes the replacement headline, the agent never writes live copy by itself.** Never pin a headline to chase the meter.
- After Save: reload, then read the Keywords tab and the Ads tab back. Confirm the new ad's final URL, both display paths, all 15 headlines and 4 descriptions, and that the group's existing keywords and the live ad are unchanged.
- **Google's "Confirm it's you" identity check at Save is the owner's own click.** If it appears, the agent touches nothing inside that dialog: it sends one line to the orchestrator ("IDENTITY CHECK IS ON SCREEN NOW"), waits, and only re-reads the page every 20 seconds for up to 10 minutes, per AGENTS.md section 14. Fady's typed "ready" is needed before the build starts, the same way every other identity-check build on this account has worked.
- One browser agent, one job at a time, browser lock taken and released, tabs closed at the end (AGENTS.md section 14).

## 4. Open points

- CLOSED 2026-09-28 by the session: the first-word collision of the Canalisation headlines 4 and 5 is gone, headline 5 reads "Votre évier déborde ? Appelez" (29). The build rule stands: no two headlines in one ad open on the same word (ad-groups-per-problem-2026-09-17.md line 7, research/40).
- **No A/B read exists yet for either group's live ad**, so this draft cannot say by how much ad relevance or click rate should move; that is a question for after the Mon 2026-10-12 rollback read, not answered here.
- **Ad strength cannot be checked from files.** It is read live in the account only once the ad is built (build note above); not in the files today.
- Everything else asked for by the brief (keyword wording, page claims, town names, the guarantee's exact scope) was settled from the files read; nothing else was left unresolved.
