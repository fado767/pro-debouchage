Draft of Sunday 4 October 2026, to apply at the read of Monday 5 October after the Ad strength panel is read.

# Brussels campaign: replacement copy for the two Poor RSAs

*Campaign "PD | Search | Bruxelles | FR" (24297024674), ad groups "FR Bruxelles | WC bouché" and "FR Bruxelles | Canalisation bouchée". Written by a drafting agent, files only, no browser. Claude's call on ad copy since 2026-09-23 (DECISIONS, "ADS DECISIONS ARE CLAUDE'S"); the plan to apply it at the Mon 5 Oct read, Brussels campaign only, is NOW.md and HANDOFF.md. The ring campaign is never touched by this.*

## 0. What the files say, and what they do not

- **The current text of both ads** is taken from the build draft, `assets/prepared/brussels-campaign-draft-2026-09-28.md` lines 173 to 194 (WC bouché) and 205 to 226 (Canalisation bouchée). `research/62` line 19 confirms both ads went in with 15 headlines and 4 descriptions, "no text changed", but only the Général ad is stated "as in the draft" word for word (line 11). **The browser agent reads the live 15 headlines back before changing anything**, and stops if they differ from the lists below.
- **Why Google rates them Poor is not in the files.** The panel was never read (research/62 line 19). My own reading, not a file fact: in both ads 8 of 15 headlines are the same generic lines as the other Brussels ads, several repeat the same "Appelez, on vient" shape, and the main keywords sit in only one headline each. This draft fixes those three things. Tomorrow's panel reading wins over this guess.
- **No price numbers in the 15.** `playbook/ads-program.md` line 20 keeps price numbers out of ads until the VAT question is settled, and NOW.md line 29 reads VIES INVALID at the last poll (2026-10-01). The page does state "From" prices, so three price headlines wait in section 3 for the day VIES reads VALID. They are not part of the 15.
- **Page source.** Every claim below is backed by `design/site-source/copy-fr.js` (written `copy-fr.js:NN`). The two landing pages /fr/wc-bouche/ and /fr/canalisation-bouchee/ are the main page with only the hero, title and description changed (`copy-fr.js:44-47`, built by `design/site-source/build.js:605-608`), so the zone, prices, guarantee, Afrim and FAQ lines are on both landing pages.
- **Rules checked by script** (Node, `Array.from(s).length`): every headline 30 or under, every description 90 or under, no em or en dash, no phone number, no two headlines in one ad opening on the same word, no line in either ad identical to any line of the ring campaign's second-ad draft (`assets/prepared/fr-per-problem-rsa-2-draft-2026-09-28.md`), nothing pinned. Customer fit (`playbook/business-brief.md` line 37: 65+ is the largest group of clickers, women tap Call more): plain words, the fears named (price, breaking, who comes, a premium number).

---

## 1. FR Bruxelles | WC bouché (final URL /fr/wc-bouche/, keywords [wc bouché], [débouchage wc])

### Current 15 headlines (from the build draft) and what happens to each

| # | Current headline | Count | Action |
|---|---|---|---|
| 1 | WC bouché ? Appelez, on vient | 29 | REMOVE (same shape as 13 and 14; replaced by new 1 and 3) |
| 2 | Bruxelles, on débouche le WC | 28 | KEEP |
| 3 | Toilette bouchée ? Appelez | 26 | KEEP |
| 4 | Ça remonte, ça déborde ? | 24 | KEEP |
| 5 | Débouchage WC 24h/24, 7j/7 | 26 | KEEP |
| 6 | Le prix, dit au téléphone | 25 | REMOVE (also a callout, and word for word in the ring draft) |
| 7 | Prix confirmé à votre porte | 27 | REMOVE (word for word in the ring draft; the idea stays in description 1) |
| 8 | On regarde avant de casser | 26 | KEEP |
| 9 | Nuit, week-end, jours fériés | 28 | REMOVE (repeats headline 5 and the callout) |
| 10 | Déplacement compris | 19 | REMOVE (already a callout, word for word in the ring draft; stays in description 3) |
| 11 | Inspection caméra comprise | 26 | KEEP |
| 12 | Garantie 30 jours, on repasse | 29 | KEEP |
| 13 | Appelez, on vient à Bruxelles | 29 | REMOVE |
| 14 | Votre WC déborde ? On vient | 27 | REMOVE (repeats headline 4) |
| 15 | Joignable 24h/24 à Bruxelles | 28 | REMOVE (repeats headline 5) |

7 kept, 8 removed, 8 added: the ad lands at 15.

### Proposed 15 headlines (nothing pinned)

| # | Headline | Count | Status | Page line that backs it |
|---|---|---|---|---|
| 1 | WC bouché à Bruxelles ? | 23 | NEW | problem `copy-fr.js:61`; Brussels `copy-fr.js:272` |
| 2 | Débouchage WC 24h/24, 7j/7 | 26 | kept | `copy-fr.js:60` (eyebrow "Débouchage WC 24h/24"), `copy-fr.js:115` |
| 3 | Appelez pour votre WC bouché | 28 | NEW | problem `copy-fr.js:61`; call `copy-fr.js:36` |
| 4 | Toilette bouchée ? Appelez | 26 | kept | problem words, no claim; call `copy-fr.js:36` |
| 5 | Ça remonte, ça déborde ? | 24 | kept | `copy-fr.js:61` (the page's own H1) |
| 6 | Bruxelles, on débouche le WC | 28 | kept | `copy-fr.js:272` ("On vient à Bruxelles"), `copy-fr.js:125` |
| 7 | Les 19 communes de Bruxelles | 28 | NEW | `copy-fr.js:272` ("dans les 19 communes"), `copy-fr.js:289` |
| 8 | Prix annoncé, prix payé | 23 | NEW | `copy-fr.js:165` ("Le prix annoncé au téléphone est le prix sur la facture."), `copy-fr.js:37` |
| 9 | Ni au mètre, ni à l'heure | 25 | NEW | `copy-fr.js:201` ("Pas de prix au mètre, pas de compteur à l'heure") |
| 10 | On regarde avant de casser | 26 | kept | `copy-fr.js:215`, `copy-fr.js:287` |
| 11 | Inspection caméra comprise | 26 | kept | `copy-fr.js:117`, `copy-fr.js:128` ("Comprise avec l'intervention") |
| 12 | Garantie 30 jours, on repasse | 29 | kept | `copy-fr.js:120`, `copy-fr.js:161-162` (unblocking is covered; a WC is an unblocking) |
| 13 | C'est Afrim qui vient | 21 | NEW | `copy-fr.js:211` ("C'est Afrim qui vient"), `copy-fr.js:208` |
| 14 | Numéro normal, pas de surtaxe | 29 | NEW | `copy-fr.js:294` |
| 15 | La nuit aussi, appelez | 22 | NEW | `copy-fr.js:294` ("Joignable 24h/24 et 7j/7, week-end et jours fériés compris"), `copy-fr.js:115` |

Checks (script): 15 headlines, all 30 or under, 15 different first words. Keyword word for word: "wc bouché" in 1 and 3, "débouchage wc" in 2, close variants in 4 ("toilette bouchée") and 6 ("débouche le WC"). Call instruction in 3, 4, 15. Brussels in 1, 6, 7. Zero lines shared with the ring draft.

### Descriptions (4, nothing pinned)

| # | Description | Count | Status | Page line |
|---|---|---|---|---|
| 1 | Le prix vous est dit au téléphone et confirmé à votre porte, avant qu'on commence. | 82 | kept | `copy-fr.js:37`, `copy-fr.js:200` |
| 2 | WC bouché, qui déborde ou qui remonte ? On vient à Bruxelles, caméra et haute pression. | 87 | kept | `copy-fr.js:61`, `copy-fr.js:272`, `copy-fr.js:125` |
| 3 | Joignable 24h/24, 7j/7, déplacement compris. Une facture, chaque fois, sans surprise. | 85 | NEW, replaces "24h/24, 7j/7, nuit, week-end et jours fériés. Déplacement et caméra compris." [76] | `copy-fr.js:294`, `copy-fr.js:154`, `copy-fr.js:217`, `copy-fr.js:134` ("pas de mauvaise surprise") |
| 4 | On vient à Bruxelles. Ça se rebouche dans les 30 jours ? On repasse, et c'est gratuit. | 86 | kept | `copy-fr.js:272`, `copy-fr.js:162` |

---

## 2. FR Bruxelles | Canalisation bouchée (final URL /fr/canalisation-bouchee/, keywords [débouchage canalisation], [canalisation bouchée], [évier bouché], [égout bouché])

### Current 15 headlines (from the build draft) and what happens to each

| # | Current headline | Count | Action |
|---|---|---|---|
| 1 | Canalisation bouchée ? Appelez | 30 | KEEP |
| 2 | Bruxelles ? On vient déboucher | 30 | KEEP |
| 3 | Évier bouché ? On vient | 23 | KEEP |
| 4 | Ça refoule ? Appelez, on vient | 30 | KEEP |
| 5 | Débouchage canalisation 24h/24 | 30 | REPLACE with "Débouchage canalisation urgent" (the current line is word for word headline 4 of the ring draft; 24/7 moves to new headline 9) |
| 6 | Égout bouché ? Haute pression | 29 | KEEP |
| 7 | Le prix, dit au téléphone | 25 | REMOVE (callout, and in the ring draft) |
| 8 | Prix confirmé à votre porte | 27 | REMOVE (in the ring draft; stays in description 1) |
| 9 | On regarde avant de casser | 26 | KEEP |
| 10 | Nuit, week-end, jours fériés | 28 | REMOVE (repeats the callout) |
| 11 | Déplacement compris | 19 | REMOVE (callout, in the ring draft; moves to description 3) |
| 12 | Inspection caméra comprise | 26 | KEEP |
| 13 | Garantie 30 jours, on repasse | 29 | KEEP |
| 14 | Appelez, on vient à Bruxelles | 29 | REMOVE |
| 15 | Lavabo bouché ? Appelez | 23 | KEEP |

9 kept, 1 reworded, 5 removed, 5 added: the ad lands at 15.

### Proposed 15 headlines (nothing pinned)

| # | Headline | Count | Status | Page line that backs it |
|---|---|---|---|---|
| 1 | Canalisation bouchée ? Appelez | 30 | kept | `copy-fr.js:70`; call `copy-fr.js:36` |
| 2 | Débouchage canalisation urgent | 30 | NEW (reworded 5) | `copy-fr.js:125` (service "Débouchage urgent": "WC, évier, douche, canalisation") |
| 3 | Évier bouché ? On vient | 23 | kept | `copy-fr.js:71`, `copy-fr.js:125` |
| 4 | Égout bouché ? Haute pression | 29 | kept | `copy-fr.js:126` ("l'égout qui refoule ... Haute pression") |
| 5 | Ça refoule ? Appelez, on vient | 30 | kept | `copy-fr.js:71` ("canalisation qui refoule"), `copy-fr.js:126` |
| 6 | Lavabo bouché ? Appelez | 23 | kept | `copy-fr.js:71` |
| 7 | Bruxelles ? On vient déboucher | 30 | kept | `copy-fr.js:272` |
| 8 | Les 19 communes de Bruxelles | 28 | NEW | `copy-fr.js:272`, `copy-fr.js:289` |
| 9 | Joignable 24h/24, 7j/7 | 22 | NEW | `copy-fr.js:294` |
| 10 | Prix annoncé, prix payé | 23 | NEW | `copy-fr.js:165`, `copy-fr.js:71` |
| 11 | Ni au mètre, ni à l'heure | 25 | NEW | `copy-fr.js:201` |
| 12 | On regarde avant de casser | 26 | kept | `copy-fr.js:215`, `copy-fr.js:287` |
| 13 | Inspection caméra comprise | 26 | kept | `copy-fr.js:117`, `copy-fr.js:128` |
| 14 | Garantie 30 jours, on repasse | 29 | kept | `copy-fr.js:120`, `copy-fr.js:161-162` |
| 15 | C'est Afrim qui vient | 21 | NEW | `copy-fr.js:211` |

Checks (script): 15 headlines, all 30 or under, 15 different first words. All four keywords word for word: "canalisation bouchée" (1), "débouchage canalisation" (2), "évier bouché" (3), "égout bouché" (4). Call instruction in 1, 5, 6. Brussels in 7, 8. Zero lines shared with the ring draft.

### Descriptions (4, nothing pinned)

| # | Description | Count | Status | Page line |
|---|---|---|---|---|
| 1 | Le prix vous est dit au téléphone et confirmé à votre porte, avant qu'on commence. | 82 | kept | `copy-fr.js:37`, `copy-fr.js:200` |
| 2 | Évier, lavabo ou canalisation qui refoule ? On vient à Bruxelles, caméra comprise. | 82 | kept | `copy-fr.js:71`, `copy-fr.js:272`, `copy-fr.js:128` |
| 3 | Égout ou sterput qui refoule ? On vient avec la haute pression, déplacement compris. | 84 | NEW, replaces "24h/24, 7j/7, nuit, week-end et jours fériés. Déplacement et caméra compris." [76] | `copy-fr.js:126`, `copy-fr.js:154` |
| 4 | On vient à Bruxelles. Ça se rebouche dans les 30 jours ? On repasse, et c'est gratuit. | 86 | kept | `copy-fr.js:272`, `copy-fr.js:162` |

---

## 3. Reserve, NOT applied: price headlines for the day VIES reads VALID

Only when `playbook/ads-program.md` line 20 lifts the price-number gate. Each swaps out one headline of the same ad (suggested: "Ni au mètre, ni à l'heure").

| Ad | Headline | Count | Page line |
|---|---|---|---|
| WC bouché | Dès 129 €, TVA 6 % comprise | 27 | `copy-fr.js:62`, `copy-fr.js:149`, `copy-fr.js:301` |
| Canalisation bouchée | Évier dès 119 €, TVA comprise | 29 | `copy-fr.js:71`, `copy-fr.js:150` |
| Canalisation bouchée | Égout dès 199 €, TVA comprise | 29 | `copy-fr.js:151` |

"TVA comprise" in the two shorter lines means the page's 6 % for homes over 10 years (`copy-fr.js:301`); the longer form does not fit 30.

---

## 4. Claims dropped

- "Assurée chez AG Insurance" (`copy-fr.js:119`): page-backed, left out because it puts a third party's brand name in an ad.
- Any speed promise ("en 30 minutes", "on vient vite"): the page refuses a number (`copy-fr.js:286`); only "une heure d'arrivée" is promised. Not used.
- "Le jour même": only in the customer review (`copy-fr.js:246`), not a page claim. Not used.
- Named communes (Anderlecht, Woluwe, Uccle are on the page at `copy-fr.js:289`): left out, the build draft's caution about naming communes (`brussels-campaign-draft-2026-09-28.md` line 262) still stands; "Les 19 communes de Bruxelles" says the same thing.
- "Gratuit" appears only inside the guarantee line ("on repasse, et c'est gratuit", `copy-fr.js:162`), never on its own and never for the camera.

## 5. For the browser agent on Mon 5 Oct

1. Read the Ad strength panel of both ads first and write down Google's own hints. If they ask for something this draft does not do, report it; the session decides, the agent writes no copy.
2. Read the live 15 headlines and 4 descriptions back; if they differ from the "current" tables above, stop and report.
3. Remove, add and reword exactly as the tables say. Nothing pinned. Final URLs and display paths unchanged.
4. Save, reload, read back all 15 and 4 and the new Ad strength. Note: editing an RSA starts a new ad under the old one's stats (`fr-per-problem-rsa-2-draft-2026-09-28.md` line 181). For these two ads, one week old and Poor, editing in place is proposed here rather than adding a second ad; the session confirms before the agent starts.
5. Identity check, browser lock, one job, tabs closed: AGENTS.md section 14.
