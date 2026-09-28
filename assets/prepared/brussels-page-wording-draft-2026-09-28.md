APPLIED 2026-09-28: option A is live on prodebouchage24.be since 13:31 (41 pairs, 40 strings). This file is the record of the change. Its open points are closed: all 19 communes and no extra price are Fady's picks (DECISIONS 2026-09-28); the parking card is research/61 (no 75 EUR card exists for the trade).

# Brussels wording for the page, draft, 2026-09-28

*Written 2026-09-28 (clock read 12:57) by a copy session. A DRAFT for Fady's pick. It edits no source file: a build worker applies it after the pick. Read for it: AGENTS.md sections 5 and 6, playbook/landing-page.md, design/site-source/copy-fr.js, copy-nl.js and copy-en.js (whole), build.js (variants, meta, schema, chooser, 404), template.js (the zone section), cgv.js and legal.js, research/31, 32 and 33 (the voice per language), playbook/business-brief.md section 4, assets/prepared/brussels-campaign-draft-2026-09-28.md section 6, playbook/ads-program.md section 2, the project memory "copy converts, never translates". Every find-and-replace pair in section 3b was dry-run on scratch copies of the four source files the same day: each FIND occurs exactly once, the three copy files still load, each language ends with 37 town chips, and no "Bruxelles-ville", "Brussel-stad" or "Brussels city" is left, for option A and for option B.*

**The fact behind it (the session's brief, 2026-09-28):** Roro now takes jobs in all 19 communes of the Brussels-Capital Region (his yes by phone; the van is Euro 6, so it may drive in the low emission zone). The rest of the zone does not change.

**What the copy promises, and what it does not:** he comes to Brussels, in the 19 communes. No arrival time, no parking, no "every street", no new number. Each language is written in the page's own voice (French spoken with "on", everyday Flemish, English with contractions), never translated word for word.

## 0. In one look

- **Places that change: 40 strings in 4 files** (copy-fr.js 14, copy-nl.js 14, copy-en.js 8, build.js 4). The schema follows by itself.
- **Recommended: option A**, Brussels named first.
- **Town chips: ONE chip, first in the list**, "Bruxelles" / "Brussel" / "Brussels" (36 to 37 chips per language).

## 1. The key sentence, `zoneT`

**How A and B differ:** A answers the Brussels reader in the first words and makes the page one zone, Brussels and all around it. B keeps today's ring sentence word for word and adds Brussels at the end: the smallest change, but a Brussels reader first meets "tout autour de Bruxelles", the phrase that meant "not Brussels" until today.

### Option A, recommended: Brussels first

FR (copy-fr.js line 272)
```
On vient à Bruxelles, dans les 19 communes. Et tout autour, côté flamand comme côté wallon${nb}: d'Alost à Louvain et de Malines à Nivelles, jusqu'à environ 40${nb}km de Wemmel.
```
NL (copy-nl.js line 250)
```
We komen naar Brussel, in alle 19 gemeenten. En overal errond, aan beide kanten van de taalgrens: van Aalst tot Leuven en van Mechelen tot Nijvel, in een straal van ongeveer 40 km rond Wemmel.
```
EN (copy-en.js line 210)
```
We come out to Brussels, all 19 communes. And all around it, on both sides of the language border: from Aalst to Leuven and from Mechelen to Nivelles, within roughly 40 km of Wemmel.
```

- FR: "On vient" answers the reader's fear ("will they come to me?"). Everything after "Et tout autour" is today's text, word for word.
- NL: "errond" is the Flemish word (a Hollander says "eromheen"). Everything after "En overal errond" is today's text, word for word.
- EN: "come out" is the native trade verb (research/33); "communes" is the word Brussels expats use for their municipality.

### Option B: the ring first, Brussels added

FR
```
On travaille tout autour de Bruxelles, côté flamand comme côté wallon${nb}: d'Alost à Louvain et de Malines à Nivelles, jusqu'à environ 40${nb}km de Wemmel. Et à Bruxelles aussi, dans les 19 communes.
```
NL
```
We werken overal rond Brussel, aan beide kanten van de taalgrens: van Aalst tot Leuven en van Mechelen tot Nijvel, in een straal van ongeveer 40 km rond Wemmel. En ook in Brussel zelf, in alle 19 gemeenten.
```
EN
```
We work all around Brussels, on both sides of the language border: from Aalst to Leuven and from Mechelen to Nivelles, within roughly 40 km of Wemmel. And in Brussels itself too, all 19 communes.
```

The first sentence is today's, word for word. Only the last sentence changes, from "no" to "yes, too".

**Why A first.** The Brussels campaign sends only Brussels searchers to these pages: often older, water rising, a phone in the hand. A gives them "Bruxelles" in the first four words. The ring reader loses nothing: the ring sentence follows unchanged and the 36 town chips stay. A also matches the new titles and footer ("à Bruxelles et alentours", "À Bruxelles et tout autour").

## 2. The FAQ answer on the towns covered (`faq[9]`)

The question stays ("Quelles communes couvrez-vous ?", "In welke gemeenten komt u?", "Which towns do you cover?"). The answer matches the zone sentence. It names four Brussels communes as a spread, the same way it already names ring towns, so a Brussels reader sees names he knows. "Woluwe" is the everyday name for the two Woluwe communes.

### Option A (the full answer string)

FR (copy-fr.js line 289)
```
À Bruxelles, dans les 19 communes, de Jette à Uccle et d'Anderlecht à Woluwe. Et tout autour, côté flamand comme côté wallon, à environ 40${nb}km autour de Wemmel. Au nord jusqu'à Malines, Boom et Kontich, à l'ouest jusqu'à Alost, Termonde et Ninove, à l'est jusqu'à Louvain et Aarschot, au sud jusqu'à Enghien, Nivelles et Louvain-la-Neuve. Et bien sûr toute la périphérie proche${nb}: Vilvorde, Dilbeek, Zaventem, Hal, Tervuren, Waterloo, Wavre et les autres. Votre commune n'est pas citée${nb}? Appelez, on vous dit oui ou non tout de suite.
```
NL (copy-nl.js line 266)
```
In Brussel, in alle 19 gemeenten, van Jette tot Ukkel en van Anderlecht tot Woluwe. En overal errond, aan beide kanten van de taalgrens, in een straal van ongeveer 40 km rond Wemmel. In het noorden tot Mechelen, Boom en Kontich, in het westen tot Aalst, Dendermonde en Ninove, in het oosten tot Leuven en Aarschot, in het zuiden tot Edingen, Nijvel en Louvain-la-Neuve. En natuurlijk alle gemeenten dichterbij: Vilvoorde, Dilbeek, Zaventem, Halle, Tervuren, Waterloo, Waver en de andere. Staat uw gemeente er niet bij? Bel even, u krijgt meteen ja of nee.
```
EN (copy-en.js line 226)
```
In Brussels, all 19 communes, from Jette to Uccle and Anderlecht to Woluwe. And all around it, on both sides of the language border, within roughly 40 km of Wemmel. North as far as Mechelen, Boom and Kontich, west as far as Aalst, Dendermonde and Ninove, east as far as Leuven and Aarschot, south as far as Enghien, Nivelles and Louvain-la-Neuve. And of course everything closer in: Vilvoorde, Dilbeek, Zaventem, Halle, Tervuren, Waterloo, Wavre and the rest. Town not listed? Call, and you'll get a yes or no straight away.
```

### Option B (only the exclusion sentence changes, the rest stays word for word)

- FR: "Bruxelles-ville n'est pas dans notre zone." becomes "Et à Bruxelles aussi, dans les 19 communes, de Jette à Uccle et d'Anderlecht à Woluwe."
- NL: "Brussel-stad zit niet in onze regio." becomes "En ook in Brussel zelf, in alle 19 gemeenten, van Jette tot Ukkel en van Anderlecht tot Woluwe."
- EN: "Brussels city itself isn't in our area." becomes "And in Brussels itself too, all 19 communes, from Jette to Uccle and Anderlecht to Woluwe."

## 3. Every other place

Line numbers are today's. Character counts by script (a `${nb}` counts as one). Every row is the same for option A and option B; only sections 1 and 2 differ.

| # | Key | Where (file: line) | Today (short) | New | Why | Chars, old to new |
|---|---|---|---|---|---|---|
| 1 | `towns` (the chips) | fr 273, nl 251, en 211 | 36 chips, no Brussels | one chip, first: FR "Bruxelles", NL "Brussel", EN "Brussels" | see 3a | 36 to 37 chips |
| 2 | `zoneC` | fr 274, nl 252, en 212 | "La liste s'arrête ici, pas notre zone. Votre commune n'y est pas ? Appelez..." | NO CHANGE | still true, still sells the call | same |
| 3 | `footD` (footer) | fr 297, nl 272, en 232 | "Tout autour de Bruxelles" / "Overal rond Brussel" / "All around Brussels" | FR "À Bruxelles et tout autour" / NL "In en rond Brussel" / EN "In and around Brussels" | on every page, privacy and terms included; one text fits A and B | FR 139 to 141, NL 143 to 142, EN 158 to 161 |
| 4 | `meta.title` | fr 24, nl 20, en 16 | "... 24h/24 autour de Bruxelles ..." | FR "à Bruxelles et alentours" / NL "in en rond Brussel" / EN "in and around Brussels"; the rest word for word | the tab and the search result, the first words read; "autour de" reads as "not in" | FR 61 to 66, NL 53 to 59, EN 65 to 72 |
| 5 | `meta.desc` | fr 25, nl 21, en 17 | "Déboucheur autour de Bruxelles, d'Alost..." | FR "Déboucheur à Bruxelles et tout autour" / NL "Ontstoppingsdienst in en rond Brussel" / EN "Drain company in and around Brussels" | the search snippet | FR 198 to 205, NL 201 to 207, EN 203 to 210 |
| 6 | `meta.ogd` | fr 27, nl 23, en 19 | "Déboucheur autour de Bruxelles, 24h/24." | FR "Déboucheur à Bruxelles et tout autour, 24h/24." / NL "Ontstoppingsdienst in en rond Brussel, 24/7." / EN "Drain unblocking in and around Brussels, 24/7." | the WhatsApp and social card text | FR 96 to 103, NL 97 to 103, EN 100 to 107 |
| 7 | `meta.ogTitle` | fr 29, nl 25, en 21 | "Pro Débouchage · Débouchage 24h/24 autour de Bruxelles" | same swap as row 4 | the share card title; build.js also uses it on the privacy and terms pages | FR 54 to 59, NL 46 to 52, EN 54 to 61 |
| 8 | WC page `title` | fr 63, nl 59 | "Déboucheur 24h/24 autour de Bruxelles" | same swap as row 4 | the Brussels WC ad group lands on /fr/wc-bouche/; NL twin ships with it | FR 49 to 54, NL 49 to 55 |
| 9 | WC page `desc` | fr 64, nl 60 | "On vient 24h/24, autour de Bruxelles, d'Alost à Louvain." | FR "On vient 24h/24, à Bruxelles et tout autour, d'Alost à Louvain." / NL "Wij komen 24/7, in en rond Brussel, van Aalst tot Leuven." | snippet, and build.js copies it into that page's schema description | FR 143 to 150, NL 147 to 153 |
| 10 | drain page `title` | fr 72, nl 68 | "Débouchage 24h/24 autour de Bruxelles" | same swap as row 4 | the Brussels drain ad group lands on /fr/canalisation-bouchee/ | FR 60 to 65, NL 46 to 52 |
| 11 | drain page `desc` | fr 73, nl 69 | "On vient 24h/24 autour de Bruxelles." | FR "On vient 24h/24 à Bruxelles et tout autour." / NL "Wij komen 24/7 in en rond Brussel," | as row 9 | FR 144 to 151, NL 153 to 159 |
| 12 | cellar page `title` | fr 82, nl 78 | "Pompage 24h/24 autour de Bruxelles" | same swap as row 4 | the Brussels cellar ad group lands on /fr/cave-inondee/ | FR 49 to 54, NL 48 to 54 |
| 13 | cellar page `desc` | fr 83, nl 79 | "24h/24 autour de Bruxelles. À partir de 229..." | FR "24h/24 à Bruxelles et tout autour." / NL "24/7 in en rond Brussel." | as row 9 | FR 143 to 150, NL 141 to 147 |
| 14 | root chooser `desc`, `ogt`, `ogd` | build.js 683 | "Débouchage 24h/24 autour de Bruxelles... Ontstopping 24/7 rond Brussel... Drain unblocking around Brussels" | the same three swaps | the root page is indexed; its visible body names no zone, so only these three change | desc 162 to 180, ogt 54 to 59, ogd 123 to 141 |
| 15 | 404 `ogd` | build.js 712 | "Débouchage 24h/24 autour de Bruxelles." | "Débouchage 24h/24 à Bruxelles et alentours." | noindex page, changed so no page keeps the old phrase | 38 to 43 |
| 16 | schema `areaServed` and the FAQ schema | build.js 535 and 529 | `areaServed: towns`, the FAQ from `faq` | NO CODE CHANGE: both read the copy, so they follow rows 1 and section 2 by themselves | | 36 to 37 City entries |
| 17 | `scamI1`, `citeWhy` | fr 184 and 191, nl 170 and 177, en 131 and 138 | "Dans la région de Hal-Vilvorde, on connaît le problème..." / "On le dit parce que c'est notre région." | NO CHANGE | a sourced court fact about a district inside the zone; "notre région" stays true; it never says Brussels is out, and a change would blur a cited fact | same |
| 18 | English problem pages | none | no English problem page exists (no English ads) | nothing to change | | |

**Why "alentours" in titles and "tout autour" in sentences.** "Bruxelles et alentours" is the short, common way a title says it; "à Bruxelles et tout autour" is how the page talks. NL "in en rond Brussel" and EN "in and around Brussels" are the fixed everyday phrase in each language.

**Title length.** Google shows about 60 characters of a title. The FR main title (66), the FR drain title (65) and the EN main title (72) pass that. "Bruxelles" / "Brussels" stays inside the visible part; only the tail ("Prix dit au téléphone") may be cut on some screens. Today's FR (61) and EN (65) main titles already pass 60.

### 3a. The town chips: one chip, not nineteen

**Proposal: ONE chip, first in the list: FR "Bruxelles", NL "Brussel", EN "Brussels".**

1. People in Brussels search the town name: "débouchage bruxelles" and "déboucheur bruxelles" show 720 searches a month (one shared pool, research/53 through the campaign draft), and the Brussels ads name "Bruxelles" only, no commune. The chip repeats the word that brought them.
2. The 19 communes are named in the sentence right above the chips, so the one chip cannot be read as "the City of Brussels only".
3. Nineteen chips take the list from 36 to 55 on a phone and push the call link further down, for a reader who is often older and in a hurry.
4. Each chip today is one place as people say it ("Louvain" also stands for Heverlee and Kessel-Lo). "Bruxelles" follows the same logic.
5. First place, because the list is scanned, not read: the Brussels reader finds his word at first glance, and the ring reader does not look there.

If Fady prefers nineteen chips (a reader from Schaerbeek finds "Schaerbeek"), the names in each language's own form (general public knowledge, not from a research file):
- FR: Anderlecht · Auderghem · Berchem-Sainte-Agathe · Bruxelles · Etterbeek · Evere · Forest · Ganshoren · Ixelles · Jette · Koekelberg · Molenbeek-Saint-Jean · Saint-Gilles · Saint-Josse-ten-Noode · Schaerbeek · Uccle · Watermael-Boitsfort · Woluwe-Saint-Lambert · Woluwe-Saint-Pierre
- NL: Anderlecht · Oudergem · Sint-Agatha-Berchem · Brussel · Etterbeek · Evere · Vorst · Ganshoren · Elsene · Jette · Koekelberg · Sint-Jans-Molenbeek · Sint-Gillis · Sint-Joost-ten-Node · Schaarbeek · Ukkel · Watermaal-Bosvoorde · Sint-Lambrechts-Woluwe · Sint-Pieters-Woluwe
- EN: the French names, which is what Brussels expats use.
- The pairs in 3b are for the one-chip version only.

### 3b. The exact find-and-replace pairs (tested 2026-09-28)

Apply the four "both options" blocks always, then the three blocks of the option Fady picks. Each FIND occurs exactly once in its file. `${nb}` is written as in the source (French strings only; the Dutch and English zone strings use plain spaces). Option A is 41 pairs in all, option B 38.

**design/site-source/copy-fr.js, both options**

```
1. FIND:    title: 'Débouchage 24h/24 autour de Bruxelles | Prix dit au téléphone',
   REPLACE: title: 'Débouchage 24h/24 à Bruxelles et alentours | Prix dit au téléphone',

2. FIND:    bouché ? Déboucheur autour de Bruxelles, d'Alost
   REPLACE: bouché ? Déboucheur à Bruxelles et tout autour, d'Alost

3. FIND:    ogd: 'Déboucheur autour de Bruxelles, 24h/24.
   REPLACE: ogd: 'Déboucheur à Bruxelles et tout autour, 24h/24.

4. FIND:    ogTitle: 'Pro Débouchage · Débouchage 24h/24 autour de Bruxelles',
   REPLACE: ogTitle: 'Pro Débouchage · Débouchage 24h/24 à Bruxelles et alentours',

5. FIND:    title: `WC bouché${nb}? Déboucheur 24h/24 autour de Bruxelles`,
   REPLACE: title: `WC bouché${nb}? Déboucheur 24h/24 à Bruxelles et alentours`,

6. FIND:    On vient 24h/24, autour de Bruxelles, d'Alost à Louvain.
   REPLACE: On vient 24h/24, à Bruxelles et tout autour, d'Alost à Louvain.

7. FIND:    title: `Canalisation bouchée${nb}? Débouchage 24h/24 autour de Bruxelles`,
   REPLACE: title: `Canalisation bouchée${nb}? Débouchage 24h/24 à Bruxelles et alentours`,

8. FIND:    On vient 24h/24 autour de Bruxelles. Prix dit
   REPLACE: On vient 24h/24 à Bruxelles et tout autour. Prix dit

9. FIND:    title: `Cave inondée${nb}? Pompage 24h/24 autour de Bruxelles`,
   REPLACE: title: `Cave inondée${nb}? Pompage 24h/24 à Bruxelles et alentours`,

10. FIND:    24h/24 autour de Bruxelles. À partir de 229
   REPLACE: 24h/24 à Bruxelles et tout autour. À partir de 229

11. FIND:    towns: `Vilvorde · Machelen
   REPLACE: towns: `Bruxelles · Vilvorde · Machelen

12. FIND:    de cave. Tout autour de Bruxelles, côté flamand
   REPLACE: de cave. À Bruxelles et tout autour, côté flamand
```

**design/site-source/copy-nl.js, both options**

```
1. FIND:    title: 'Ontstopping 24/7 rond Brussel | Prijs aan de telefoon',
   REPLACE: title: 'Ontstopping 24/7 in en rond Brussel | Prijs aan de telefoon',

2. FIND:    riool? Ontstoppingsdienst rond Brussel, van Aalst
   REPLACE: riool? Ontstoppingsdienst in en rond Brussel, van Aalst

3. FIND:    ogd: 'Ontstoppingsdienst rond Brussel, 24/7.
   REPLACE: ogd: 'Ontstoppingsdienst in en rond Brussel, 24/7.

4. FIND:    ogTitle: 'Pro Débouchage · Ontstopping 24/7 rond Brussel',
   REPLACE: ogTitle: 'Pro Débouchage · Ontstopping 24/7 in en rond Brussel',

5. FIND:    title: 'Wc verstopt? Ontstoppingsdienst 24/7 rond Brussel',
   REPLACE: title: 'Wc verstopt? Ontstoppingsdienst 24/7 in en rond Brussel',

6. FIND:    Wij komen 24/7, rond Brussel, van Aalst
   REPLACE: Wij komen 24/7, in en rond Brussel, van Aalst

7. FIND:    title: 'Afvoer verstopt? Ontstopping 24/7 rond Brussel',
   REPLACE: title: 'Afvoer verstopt? Ontstopping 24/7 in en rond Brussel',

8. FIND:    Wij komen 24/7 rond Brussel, van Aalst
   REPLACE: Wij komen 24/7 in en rond Brussel, van Aalst

9. FIND:    title: 'Kelder onder water? Leegpompen 24/7 rond Brussel',
   REPLACE: title: 'Kelder onder water? Leegpompen 24/7 in en rond Brussel',

10. FIND:    verzekering. 24/7 rond Brussel. Vanaf
   REPLACE: verzekering. 24/7 in en rond Brussel. Vanaf

11. FIND:    towns: 'Vilvoorde · Machelen
   REPLACE: towns: 'Brussel · Vilvoorde · Machelen

12. FIND:    leegpompen. Overal rond Brussel, aan beide
   REPLACE: leegpompen. In en rond Brussel, aan beide
```

**design/site-source/copy-en.js, both options**

```
1. FIND:    title: 'Drain unblocking 24/7 around Brussels | Price quoted on the phone',
   REPLACE: title: 'Drain unblocking 24/7 in and around Brussels | Price quoted on the phone',

2. FIND:    Drain company around Brussels, from Aalst
   REPLACE: Drain company in and around Brussels, from Aalst

3. FIND:    ogd: 'Drain unblocking around Brussels, 24/7.
   REPLACE: ogd: 'Drain unblocking in and around Brussels, 24/7.

4. FIND:    ogTitle: 'Pro Débouchage · Drain unblocking 24/7 around Brussels',
   REPLACE: ogTitle: 'Pro Débouchage · Drain unblocking 24/7 in and around Brussels',

5. FIND:    towns: 'Vilvoorde · Machelen
   REPLACE: towns: 'Brussels · Vilvoorde · Machelen

6. FIND:    cellar pumping. All around Brussels, on both
   REPLACE: cellar pumping. In and around Brussels, on both
```

**design/site-source/build.js, both options**

```
1. FIND:    desc: 'Débouchage 24h/24 autour de Bruxelles. Choisissez votre langue. Ontstopping 24/7 rond Brussel. Kies uw taal. Drain unblocking around Brussels, 24/7. 0480 649 649.', ogt: 'Pro Débouchage · Débouchage 24h/24 autour de Bruxelles', ogd: 'Débouchage 24h/24 autour de Bruxelles. Ontstopping 24/7 rond Brussel. Drain unblocking around Brussels, 24/7. 0480 649 649.'
   REPLACE: desc: 'Débouchage 24h/24 à Bruxelles et alentours. Choisissez votre langue. Ontstopping 24/7 in en rond Brussel. Kies uw taal. Drain unblocking in and around Brussels, 24/7. 0480 649 649.', ogt: 'Pro Débouchage · Débouchage 24h/24 à Bruxelles et alentours', ogd: 'Débouchage 24h/24 à Bruxelles et alentours. Ontstopping 24/7 in en rond Brussel. Drain unblocking in and around Brussels, 24/7. 0480 649 649.'

2. FIND:    ogt: 'Pro Débouchage', ogd: 'Débouchage 24h/24 autour de Bruxelles.'
   REPLACE: ogt: 'Pro Débouchage', ogd: 'Débouchage 24h/24 à Bruxelles et alentours.'
```

**design/site-source/copy-fr.js, zone sentence and FAQ, option A ONLY**

```
1. FIND:    zoneT: `On travaille tout autour de Bruxelles, côté flamand comme côté wallon${nb}: d'Alost à Louvain et de Malines à Nivelles, jusqu'à environ 40${nb}km de Wemmel. Bruxelles-ville n'est pas dans notre zone.`,
   REPLACE: zoneT: `On vient à Bruxelles, dans les 19 communes. Et tout autour, côté flamand comme côté wallon${nb}: d'Alost à Louvain et de Malines à Nivelles, jusqu'à environ 40${nb}km de Wemmel.`,

2. FIND:    `Tout autour de Bruxelles, côté flamand comme côté wallon, à environ 40${nb}km autour de Wemmel.
   REPLACE: `À Bruxelles, dans les 19 communes, de Jette à Uccle et d'Anderlecht à Woluwe. Et tout autour, côté flamand comme côté wallon, à environ 40${nb}km autour de Wemmel.

3. FIND:    et les autres. Bruxelles-ville n'est pas dans notre zone. Votre commune
   REPLACE: et les autres. Votre commune
```

**design/site-source/copy-nl.js, zone sentence and FAQ, option A ONLY**

```
1. FIND:    zoneT: 'We werken overal rond Brussel, aan beide kanten van de taalgrens: van Aalst tot Leuven en van Mechelen tot Nijvel, in een straal van ongeveer 40 km rond Wemmel. Brussel-stad zit niet in onze regio.',
   REPLACE: zoneT: 'We komen naar Brussel, in alle 19 gemeenten. En overal errond, aan beide kanten van de taalgrens: van Aalst tot Leuven en van Mechelen tot Nijvel, in een straal van ongeveer 40 km rond Wemmel.',

2. FIND:    'Overal rond Brussel, aan beide kanten van de taalgrens, in een straal
   REPLACE: 'In Brussel, in alle 19 gemeenten, van Jette tot Ukkel en van Anderlecht tot Woluwe. En overal errond, aan beide kanten van de taalgrens, in een straal

3. FIND:    en de andere. Brussel-stad zit niet in onze regio. Staat uw
   REPLACE: en de andere. Staat uw
```

**design/site-source/copy-en.js, zone sentence and FAQ, option A ONLY**

```
1. FIND:    zoneT: "We work all around Brussels, on both sides of the language border: from Aalst to Leuven and from Mechelen to Nivelles, within roughly 40 km of Wemmel. Brussels city itself isn't in our area.",
   REPLACE: zoneT: "We come out to Brussels, all 19 communes. And all around it, on both sides of the language border: from Aalst to Leuven and from Mechelen to Nivelles, within roughly 40 km of Wemmel.",

2. FIND:    "All around Brussels, on both sides of the language border, within roughly 40 km of Wemmel. North
   REPLACE: "In Brussels, all 19 communes, from Jette to Uccle and Anderlecht to Woluwe. And all around it, on both sides of the language border, within roughly 40 km of Wemmel. North

3. FIND:    and the rest. Brussels city itself isn't in our area. Town not listed?
   REPLACE: and the rest. Town not listed?
```

**design/site-source/copy-fr.js, zone sentence and FAQ, option B ONLY**

```
1. FIND:    de Wemmel. Bruxelles-ville n'est pas dans notre zone.`,
   REPLACE: de Wemmel. Et à Bruxelles aussi, dans les 19 communes.`,

2. FIND:    et les autres. Bruxelles-ville n'est pas dans notre zone. Votre commune
   REPLACE: et les autres. Et à Bruxelles aussi, dans les 19 communes, de Jette à Uccle et d'Anderlecht à Woluwe. Votre commune
```

**design/site-source/copy-nl.js, zone sentence and FAQ, option B ONLY**

```
1. FIND:    rond Wemmel. Brussel-stad zit niet in onze regio.',
   REPLACE: rond Wemmel. En ook in Brussel zelf, in alle 19 gemeenten.',

2. FIND:    en de andere. Brussel-stad zit niet in onze regio. Staat uw
   REPLACE: en de andere. En ook in Brussel zelf, in alle 19 gemeenten, van Jette tot Ukkel en van Anderlecht tot Woluwe. Staat uw
```

**design/site-source/copy-en.js, zone sentence and FAQ, option B ONLY**

```
1. FIND:    of Wemmel. Brussels city itself isn't in our area.",
   REPLACE: of Wemmel. And in Brussels itself too, all 19 communes.",

2. FIND:    and the rest. Brussels city itself isn't in our area. Town not listed?
   REPLACE: and the rest. And in Brussels itself too, all 19 communes, from Jette to Uccle and Anderlecht to Woluwe. Town not listed?
```


## 4. What does not change (leave alone)

- `zoneK`, `zoneH` and `zoneC` in all three languages: true as they are.
- `scamI1`, `scamICite`, `citeBody`, `citeSrc`, `citeWhy` in all three: row 17.
- The hero (eyebrow, H1, sub), the trust band, the prices, FAQ entries 1 to 9 and 11, the final call: no place named, nothing to change.
- `legal` in the copy files and the legal line of the chooser and the 404: the Vilvoorde seat, required by law.
- legal.js lines 53, 105 and 157: the data protection authority's address, "1000 Bruxelles" / "Brussel" / "Brussels". An address, not our zone.
- cgv.js lines 123, 247 and 286: the consumer mediation service's address in Brussels. Same. cgv.js lines 61 and 185 ("zone de travail", "werkzone") mean the work spot in the customer's home. Neither the terms nor the privacy pages state a service zone: checked.
- template.js line 193 (renders the zone section) and build.js line 535 (`areaServed: towns`): no code change.
- copy-en.js line 2 is a code comment ("for expats and internationals around Brussels"), never shipped. It may say "in and around Brussels"; optional.

## 5. The ads side (list only)

- **No live sitelink or callout says Brussels is out.**
- Live zone sitelinks: "Où on travaille" / "D'Alost à Louvain, de Malines" / "à Nivelles. Autour de Bruxelles." (FR emergency and the three FR problem groups, to #zone) and "Waar wij langskomen" / "Van Aalst tot Leuven en van" / "Mechelen tot Nijvel. Rond Brussel." (NL emergency, also on the three paused NL groups). They run on the ring campaign only, which excludes Brussels by location. Still true after the change.
- Live callouts: FR "24h/24, 7j/7 et fériés", "Prix dit au téléphone", "Caméra comprise", "Déplacement compris"; NL "24/7, ook op feestdagen", "Prijs aan de telefoon", "Camera inbegrepen", "Verplaatsing inbegrepen". No zone in them. "Déplacement compris" and "Verplaatsing inbegrepen" hold in Brussels only if no Brussels extra is charged (open point 2).
- The Brussels campaign draft (section 5) dropped "Où on travaille" because the zone section said no. That reason goes with this change, but the sitelink's line "Autour de Bruxelles" does not fit a Brussels searcher: a zone sitelink for that campaign needs its own lines (not written here). The draft's ad lines "On vient à Bruxelles" become page-backed once A or B is live.
- Not live: assets/prepared/fr-per-problem-rsa-2-draft-2026-09-28.md lines 87 and 168 quote today's `zoneT` as proof for "Autour de Bruxelles". The claim stays true; the quoted proof must be refreshed before that build.
- Not an ad, but a script in use: assets/prepared/nl-call-script-2026-09-10.md lines 10 and 131 say Brussels city is not served ("Alleen Brussel-stad doen wij niet"). It now contradicts the page.

## 6. Open points

1. **"All 19 communes" is not in the files yet.** It rests on the session's brief (Roro's yes by phone, 2026-09-28). DECISIONS.md of 2026-09-28 records his yes to "a Brussels campaign of about 500 EUR a month" and Fady's "the car is Euro 6", and question 2 of assets/prepared/roro-brussels-questions-2026-09-27.md (the 75 EUR parking card, maybe only the communes near the depot) has no recorded answer. The page will print "19 communes": file it before the build.
2. **Parking and "déplacement compris".** The price grid, the included chips, the FAQ ("Le déplacement est-il payant ? Non") and the callouts promise the call-out is included everywhere. If Roro plans a Brussels extra (parking, the card), the page must say it first. Not in the files. This draft assumes no extra.
3. **The ZONE RULE is Fady's** (landing-page.md section 4, 2026-08-23: never "à Bruxelles" as a served place). This draft overturns it, so his pick of A or B is also the word that retires it, to be filed in DECISIONS.md. The owner files still say Brussels is out and need the same change: playbook/landing-page.md sections 2, 4 and 5 (S13), playbook/business-brief.md section 4 (the zone line), playbook/launch-plan.md section 6 ("The 19 Brussels communes: excluded"), playbook/site-companion.md, STATE.md line 6.
4. **Message match.** The hero of the four pages the Brussels campaign uses names no place: a Brussels reader meets "Bruxelles" in the tab title and in the zone section far down. A Brussels line near the top, or a Brussels page, is a separate decision (the campaign draft's open point 1). Not proposed here, because the brief was to change as little as possible.
5. **Side finding, outside Brussels, not changed:** copy-nl.js line 79 (the NL cellar page description) says "maken een verslag voor uw verzekering" with no "op vraag", while business-brief.md section 1 says the report is on request only and the French twin says "si vous le demandez". Filed here so it is not lost.
6. The schema entry will read `"@type": "City", "name": "Bruxelles"`. An AdministrativeArea for the Region would be more exact but needs a build.js code change. Not proposed.

## 7. For the build worker, after the paste

- Rebuild (`node design/site-source/build.js`), then search site-v1/ for "Bruxelles-ville", "Brussel-stad" and "Brussels city": zero hits expected. "tout autour de Bruxelles", "overal rond Brussel" and "all around Brussels" stay only with option B (zone sentence and FAQ).
- On the preview at 375 px: the new zone sentence, and "Bruxelles" / "Brussel" / "Brussels" as the first chip, on /fr/, /nl/, /en/ and the six problem pages.
- Preview first; live only on Fady's word (DECISIONS 2026-09-28).
