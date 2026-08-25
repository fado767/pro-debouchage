# Ads build package (2026-08-24, Opus agent, read-only draft)

*Raw agent report, filed by the 2026-08-24 morning session. Not the owner of any fact: the program owner stays `playbook/ads-program.md`, and this package merges into it once Fady answers the OPEN questions in section 7. Sources: `playbook/ads-program.md`, `playbook/launch-plan.md` section 6, `playbook/landing-page.md` sections 2, 7, 8, the live copy in `design/canvas-v2/page-template.js`, and `research/03` sections 2.5, 2.11, 2.12, 2.13.*

**Five things that block a clean paste into the account. Read these first.**

1. **The landing-page variants do not exist.** `site-v2/` has only `/fr/`, `/nl/` and `/en/` (verified: `site-v2/fr/` holds `index.html` and `confidentialite.html`, nothing else; `build-site.js` contains no variant slugs). `ads-program.md` section 2 gives every ad group its own URL (`/fr/wc-bouche`, etc.) and `landing-page.md` section 7 allows the minimum "just `/fr/` and `/nl/` at launch". So at launch every FR ad group points at `/fr/` and every NL group at `/nl/`, and the H1-to-ad-group message match the program asks for is carried by the headline set only, not by the URL.
2. **The tag is not on the page.** The page ships no measurement script at all and the footer says so in three languages ("Ce site ne dépose aucun cookie et n'utilise aucun outil de mesure"). G5 cannot be proven until gtag plus the consent mount are built into `page-template.js`, the CSP in the tech standard allows `googletagmanager.com` and `googleadservices.com`, and that footer credit line changes. This is dev work that must land before the account session, not during it.
3. **The insurance-report claim is stripped out of every RSA below.** `NOW.md` records it as inherited from the old fake printpress site and never confirmed by Roro. `research/03` 2.11 and 2.12 use "Rapport pour l'assurance" and "Verslag voor verzekering" as headlines. Removed here. Rule 1 wins over the research draft.
4. **No prices in any ad**, because the VAT blocker (`DECISIONS.md` 2026-08-23, `NOW.md`) is unresolved and every published price on the page is stated VAT included.
5. **`research/03` 2.5 lists `leuven` as a negative keyword. That contradicts `launch-plan.md` section 6**, which has Leuven (28 km) in the core targeted list. Leuven is out of the negative list below. Same check applied to Mechelen, Aalst, Dendermonde and Ninove, all targeted, all kept out of the negatives. Antwerpen stays a negative because section 6 explicitly holds Antwerp back.

---

## 1. FR campaign, keywords

Campaign: **PD | FR | Search | Ring Bruxelles**. Match types per `ads-program.md` section 2: exact for money terms, phrase for discovery, no broad. Brussels commune keywords dropped and a few "bruxelles" terms kept, exactly as the program's keyword note instructs.

### FR-1 Urgence débouchage (live at launch, URL `/fr/`)
Exact: `[débouchage urgent]` · `[débouchage urgence]` · `[déboucheur urgent]` · `[débouchage urgent bruxelles]` · `[déboucheur bruxelles]` · `[débouchage bruxelles]` · `[débouchage vilvoorde]` · `[déboucheur vilvoorde]` · `[débouchage 24h 24]` · `[entreprise de débouchage]`
Phrase: `"débouchage urgent 24h"` · `"déboucheur professionnel"` · `"société de débouchage"` · `"débouchage weekend"` · `"débouchage nuit"` · `"débouchage brabant flamand"` · `"débouchage brabant wallon"` · `"débouchage wemmel"` · `"débouchage grimbergen"` · `"débouchage zaventem"` · `"débouchage machelen"` · `"débouchage halle"` · `"débouchage waterloo"` · `"débouchage wavre"`
**24 keywords.** Dilbeek, Meise, Merchtem, Asse, Ternat, Nivelles, Braine-l'Alleud and Tubize are the week-2 additions when this group has search-term data.

### FR-2 WC bouché (live at launch, URL `/fr/`)
Exact: `[wc bouché]` · `[wc bouché bruxelles]` · `[déboucher wc]` · `[déboucher wc bruxelles]` · `[débouchage wc]` · `[déboucheur wc bruxelles]` · `[toilette bouchée]` · `[déboucher toilette]` · `[wc bouché vilvoorde]`
Phrase: `"wc bouché que faire prix"` · `"tarif débouchage wc"` · `"prix débouchage wc"` · `"wc bouché urgence"` · `"eau qui remonte wc"` · `"prix pour déboucher un wc"` · `"débouchage wc bruxelles"` · `"déboucher wc professionnel"` · `"wc bouché weekend"`
**18 keywords.** The bare "que faire" variants are deliberately not here: the DIY negatives would fight them.

### FR-3 Évier, canalisation et égout (live at launch, URL `/fr/`)
Exact: `[canalisation bouchée]` · `[canalisation bouchée bruxelles]` · `[débouchage canalisation]` · `[débouchage canalisation bruxelles]` · `[évier bouché]` · `[évier bouché bruxelles]` · `[déboucher évier]` · `[lavabo bouché]` · `[douche bouchée]` · `[baignoire bouchée]` · `[débouchage égout]` · `[débouchage égout bruxelles]` · `[débouchage sterput]` · `[sterput bouché]`
Phrase: `"débouchage canalisation prix"` · `"canalisation bouchée urgence"` · `"débouchage haute pression"` · `"débouchage égout urgence"` · `"refoulement égout"` · `"colonne bouchée immeuble"` · `"inspection caméra canalisation"` · `"caméra inspection égout"` · `"eau stagnante évier"` · `"débouchage douche bruxelles"`
**24 keywords.** The two camera terms are parked here for launch, see OPEN 3.

### FR-6 Pompage cave inondée (live at launch, URL `/fr/`)
Exact: `[pompage cave inondée]` · `[pompage cave]` · `[pompage cave bruxelles]` · `[cave inondée]` · `[pomper une cave]` · `[pompage eau cave]` · `[pompage garage inondé]` · `[vidange cave inondée]`
Phrase: `"cave inondée que faire"` · `"pompage cave prix"` · `"entreprise pompage cave"` · `"cave sous eau"` · `"pompage après inondation"` · `"cave inondée urgence"` · `"pompage eau sous-sol"` · `"nettoyage cave inondée"`
**16 keywords.**

### FR-4 Curage (paused at launch, switch on in week three per `ads-program.md` section 2, URL `/fr/`)
Exact: `[curage canalisation]` · `[curage canalisation bruxelles]` · `[curage égout]` · `[curage égout bruxelles]` · `[hydrocurage]` · `[hydrocurage bruxelles]` · `[nettoyage canalisation haute pression]` · `[curage sterput]`
Phrase: `"curage de canalisation"` · `"hydrocurage prix"` · `"curage canalisation prix"` · `"nettoyage égout haute pression"` · `"entretien canalisation"` · `"camion hydrocureur"` · `"curage canalisation brabant"` · `"débouchage haute pression prix"`
**16 keywords.**

### FR-5 Fosse septique (paused at launch, week three, URL `/fr/`)
Exact: `[vidange fosse septique]` · `[vidange fosse septique bruxelles]` · `[vidange fosse septique brabant flamand]` · `[fosse septique pleine]` · `[vidange sterput]` · `[nettoyage fosse septique]` · `[vidangeur fosse septique]`
Phrase: `"vidange fosse septique prix"` · `"prix vidange fosse septique"` · `"entreprise vidange fosse septique"` · `"vidange fosse septique brabant wallon"` · `"vider fosse septique"` · `"curage fosse septique"` · `"vidange puits perdu"`
**14 keywords.** Note: "installation fosse septique" is a negative, we empty, we do not install.

FR totals at launch: 41 exact plus 41 phrase across the four live groups. That is above the program's "about 25 exact plus 30 phrase per language"; if Fady wants it trimmed to the letter, cut the town phrase terms in FR-1 to six and the FR-3 phrase block to six.

---

## 2. NL campaign, keywords

Campaign: **PD | NL | Search | Ring Brussel**. Same match-type rule.

### NL-1 Dringende ontstopping (live at launch, URL `/nl/`)
Exact: `[dringende ontstopping]` · `[ontstoppingsdienst]` · `[ontstoppingsdienst brussel]` · `[ontstopping brussel]` · `[ontstopping vilvoorde]` · `[ontstoppingsdienst vilvoorde]` · `[ontstoppingsdienst vlaams-brabant]` · `[ontstopping 24 op 24]` · `[ontstopper bellen]` · `[ontstoppingsbedrijf]`
Phrase: `"ontstopping weekend"` · `"ontstopping nacht"` · `"ontstopping zaventem"` · `"ontstopping grimbergen"` · `"ontstopping machelen"` · `"ontstopping meise"` · `"ontstopping wemmel"` · `"ontstopping zemst"` · `"ontstopping halle"` · `"ontstopping dilbeek"` · `"ontstopping asse"` · `"ontstopping kampenhout"` · `"ontstopping steenokkerzeel"` · `"ontstopping vlaams-brabant"`
**24 keywords.**

### NL-2 Verstopte wc (live at launch, URL `/nl/`)
Exact: `[verstopte wc]` · `[wc verstopt]` · `[wc ontstoppen]` · `[verstopte wc ontstoppen]` · `[wc verstopt hulp]` · `[toilet verstopt]` · `[toilet ontstoppen]` · `[wc ontstoppen vilvoorde]`
Phrase: `"wc loopt niet door"` · `"prijs wc ontstoppen"` · `"wc ontstoppen prijs"` · `"verstopte wc dringend"` · `"water komt terug uit wc"` · `"wc verstopt weekend"` · `"toilet verstopt hulp"` · `"wc ontstoppen brussel"`
**16 keywords.**

### NL-3 Verstopte afvoer en riool (live at launch, URL `/nl/`)
Exact: `[afvoer verstopt]` · `[afvoer verstopt brussel]` · `[verstopte afvoer]` · `[riool verstopt]` · `[riool ontstoppen]` · `[riool ontstoppen brussel]` · `[gootsteen verstopt]` · `[gootsteen ontstoppen]` · `[douche verstopt]` · `[lavabo verstopt]` · `[sterfput verstopt]` · `[sterfput ontstoppen]`
Phrase: `"prijs riool ontstoppen"` · `"kostprijs ontstopping"` · `"hogedrukreiniging riool"` · `"camera inspectie riool"` · `"rioolcamera inspectie"` · `"bad verstopt"` · `"standleiding verstopt"` · `"riool verstopt dringend"` · `"afvoer verstopt weekend"`
**21 keywords.**

### NL-6 Kelder leegpompen (live at launch, URL `/nl/`)
Exact: `[kelder leegpompen]` · `[kelder onder water pompen]` · `[kelder onder water]` · `[kelder leegpompen prijs]` · `[garage leegpompen]` · `[water uit kelder pompen]` · `[kelder leegzuigen]`
Phrase: `"wateroverlast kelder"` · `"kelder pompen na regen"` · `"kelder onder water wat doen"` · `"ondergelopen kelder"` · `"kelder leegpompen firma"` · `"pompen na overstroming"` · `"water in kelder pompen"` · `"kelder droogpompen"`
**15 keywords.**

### NL-4 Riool ruimen (paused at launch, week three, URL `/nl/`)
Exact: `[riool ruimen]` · `[riolering ruimen]` · `[hogedrukreiniging riool]` · `[riool reinigen]` · `[rioolreiniging]` · `[riool ruimen prijs]` · `[riolering reinigen]`
Phrase: `"hogedrukreiniging afvoer"` · `"onderhoud riolering"` · `"riool laten reinigen"` · `"rioolreiniging brussel"` · `"riool ruimen vlaams-brabant"` · `"kolkenzuiger"`
**13 keywords.**

### NL-5 Septische put (paused at launch, week three, URL `/nl/`)
Exact: `[septische put ledigen]` · `[septische put leegmaken]` · `[septische put leegmaken prijs]` · `[septische put ruimen]` · `[beerput ledigen]` · `[sterfput ledigen]` · `[put leegzuigen]`
Phrase: `"septische put ledigen prijs"` · `"prijs septische put ledigen"` · `"septische put laten ledigen"` · `"sterfput ledigen prijs"` · `"septische put leegzuigen"` · `"put ruimen"` · `"septische put vlaams-brabant"`
**14 keywords.** "regenput ledigen" deliberately left out, nothing on the page proves we do rainwater cisterns.

---

## 3. Shared negative keyword list

One account-level shared list named **PD | Negatives | shared**, applied to both campaigns from day one (`ads-program.md` section 2). Base is `research/03` 2.5, corrected and extended. Adding a negative is routine, removing one is a change.

**Jobs and training:** emploi, job, jobs, vacature, vacatures, werk, werken bij, recrutement, sollicitatie, interim, stage, formation, opleiding, cursus, school, salaire, loon, wat verdient

**Free and do it yourself:** gratuit, gratis, comment déboucher, comment faire, soi-même, soi meme, zelf, zelf ontstoppen, doe het zelf, diy, astuce, truc, trucje, tuto, tutoriel, tips, youtube, video, forum, wikihow, recette, huisremedie

**Products, machines and rental:** destop, déboucheur chimique, soude caustique, bicarbonate, vinaigre, furet manuel, acheter, kopen, prix destop, gootsteenontstopper, ontstopper product, hema, brico, gamma, hubo, action, colruyt, bol.com, amazon, location matériel, louer, huren, verhuur, hogedrukreiniger kopen, karcher, pompe kopen

**Wrong meaning of the word:** nez bouché, débouchage nez, oreille bouchée, verstopte neus, oor, oorsmeer, débouchés, débouché professionnel, pompe funèbre, pompes funèbres, pompe à chaleur, warmtepomp

**Research and reputation:** avis, reviews, klachten, plainte, arnaque, oplichting, comparatif, vergelijken, test, wikipedia, définition, betekenis

**Wrong service:** chauffe-eau, chaudière, chauffage, verwarming, boiler, badkamer renovatie, salle de bain rénovation, installation fosse septique, septische put plaatsen, septische put kopen, drainage aanleggen, raccordement égout, aansluiting riolering, ramonage, schoorsteen, toiture, dakwerken, dératisation, ongedierte, ratten, adoucisseur, waterontharder, waterput boren

**Utilities and public services people are actually looking for:** vivaqua, hydrobru, aquafin, de watergroep, farys, pompiers, brandweer, service communal, ibge, leefmilieu brussel

**Cities and regions outside the zone** (checked against `launch-plan.md` section 6, so Leuven, Mechelen, Aalst, Dendermonde and Ninove are NOT here because we target them): gent, gand, antwerpen, anvers, brugge, bruges, liège, luik, charleroi, namur, namen, mons, bergen, hasselt, kortrijk, oostende, ostende, tournai, doornik, verviers, arlon, tienen, tirlemont, sint-niklaas, roeselare, genk, seraing, la louvière, mouscron, turnhout, geel, mol, herentals, lier, mortsel, wilrijk, deurne, berchem, borgerhout, merksem, hoboken, ekeren, soignies, jodoigne

**Countries outside Belgium:** france, paris, lille, nederland, holland, amsterdam, rotterdam, den haag, utrecht, breda, eindhoven, maastricht, luxembourg, allemagne, duitsland, aachen, köln

**Brussels city communes (the agent's proposal, not a decision in the files, OPEN 6).** The program says only to DROP the Brussels commune keywords, not to negate them. Negating them protects the geo exclusion (`ads-program.md` section 2, Roro's parking decision) without touching the "débouchage bruxelles" terms we deliberately keep: schaerbeek, schaarbeek, ixelles, elsene, anderlecht, molenbeek, saint-gilles, sint-gillis, etterbeek, evere, jette, uccle, ukkel, forest, vorst, woluwe, auderghem, oudergem, watermael, watermaal, berchem-sainte-agathe, koekelberg, ganshoren, laeken, laken, neder-over-heembeek, haren, saint-josse, sint-joost, bruxelles centre, brussel centrum, 1000 bruxelles

---

## 4. RSA sets

One unpinned RSA per ad group, per `ads-program.md` section 2 ("pinning forced Poor on the taxi accounts"). 15 headlines and 4 descriptions each, which is Google's maximum and gives the best chance of Ad strength Good with no pins. Character counts are in brackets, limit 30 for headlines and 90 for descriptions. **No phone number in any headline** (disapproved on the taxi account, `ads-program.md` section 3); the number lives in the call asset, and it is kept out of the descriptions too so one asset carries it.

Every line is backed by the live page: 24/7 (`trust[0]`, `finalL`), price said on the phone and confirmed at the door (`sub`, `promise`, `steps`), camera inspection included (`trust[2]`, `services[3]`), the zone (`zoneT`), the van and the equipment (`whoT`), an invoice every time (`blocks[2]`).

### FR-1 Urgence débouchage
Headlines: Débouchage urgent 24h/24 [24] · Déboucheur 24h/24, 7j/7 [23] · Bouchon ? On vient de suite [27] · Le prix avant de commencer [26] · Prix dit au téléphone [21] · Nuit, week-end, fériés [21] · Déboucheur autour de Bruxelles [30] · Basé à Vilvorde, on arrive [26] · Caméra comprise [15] · Caméra et haute pression [24] · Le prix ne change pas [21] · Débouchage 7j/7, week-end [25] · On confirme le prix sur place [29] · Intervention jour et nuit [25] · Brabant flamand et wallon [25]
D1: Débouchage, curage, caméra, pompage. 24h/24, 7j/7, autour de Bruxelles. [71]
D2: Le prix vous est dit au téléphone et confirmé à la porte, avant de commencer. [77]
D3: Inspection caméra comprise avec l'intervention. On regarde avant de casser. [75]
D4: Basés à Vilvorde. Nous intervenons autour de Bruxelles, jour, nuit et week-end. [79]

### FR-2 WC bouché
Headlines: WC bouché ? On débouche [23] · Déboucheur WC 24h/24 [20] · WC bouché, on vient [19] · Le prix avant de commencer [26] · Prix dit au téléphone [21] · On regarde avant de casser [26] · Caméra comprise [15] · WC, évier, douche bouchés [25] · Déboucheur à Vilvorde [21] · Sur place aujourd'hui [21] · Nuit et week-end aussi [22] · Ça remonte dans la douche ? [27] · Une facture, chaque fois [24] · Haute pression et caméra [24] · Autour de Bruxelles, 24h/24 [27]
D1: WC, évier ou douche bouché ? On vient avec la caméra et la haute pression. [74]
D2: Vous avez le prix au téléphone, et nous le confirmons à la porte avant de commencer. [84]
D3: L'inspection caméra est comprise avec l'intervention. 24h/24, week-end inclus. [78]
D4: Déboucheur basé à Vilvorde, autour de Bruxelles, en Brabant flamand et wallon. [78]

### FR-3 Évier, canalisation et égout
Headlines: Canalisation bouchée ? [22] · Évier bouché ? On débouche [26] · Débouchage haute pression [25] · Égout ou sterput bouché [23] · Caméra avant de casser [22] · Inspection caméra comprise [26] · Le prix avant de commencer [26] · Prix dit au téléphone [21] · Service 24h/24, 7j/7 [20] · Déboucheur à Vilvorde [21] · Évier, lavabo, baignoire [24] · L'eau ne descend plus ? [23] · Autour de Bruxelles 24h/24 [26] · On vient avec la caméra [23] · Nuit, week-end, fériés [21]
D1: Évier, lavabo, baignoire, colonne, égout. Débouchage mécanique ou haute pression. [81]
D2: Nous regardons à la caméra avant de toucher au moindre carrelage. Elle est comprise. [84]
D3: Le prix vous est dit au téléphone, puis confirmé à la porte. 24h/24, 7j/7. [74]
D4: Basés à Vilvorde, autour de Bruxelles, Brabant flamand et Brabant wallon. [73]

### FR-6 Pompage cave inondée
Headlines: Cave inondée ? On pompe [23] · Pompage cave et garage [22] · Cave sous eau ? Appelez [23] · Pompage jour et nuit [20] · On pompe et on nettoie [22] · Le prix avant de commencer [26] · Prix dit au téléphone [21] · Intervention 24h/24, 7j/7 [25] · Nuit et week-end aussi [22] · Déboucheur à Vilvorde [21] · Après l'orage, on pompe [23] · Garage sous eau ? On vient [26] · Autour de Bruxelles 24h/24 [26] · Pompe, caméra, haute pression [29] · Une équipe, une facture [23]
D1: Cave ou garage sous eau ? Nous pompons et nettoyons, jour et nuit, week-end inclus. [83]
D2: Appelez, vous avez le prix au téléphone. Il est confirmé à la porte avant le travail. [85]
D3: Pompe, caméra d'inspection et machine haute pression dans la camionnette. [73]
D4: Basés à Vilvorde, autour de Bruxelles, Brabant flamand et Brabant wallon. [73]

### FR-4 Curage (built now, paused until week three)
Headlines: Curage de canalisations [23] · Hydrocurage haute pression [26] · Curage d'égout et sterput [25] · Nettoyage haute pression [24] · Caméra après le curage [22] · Inspection caméra comprise [26] · Le prix avant de commencer [26] · Prix dit au téléphone [21] · Entretien et urgence [20] · Déboucheur à Vilvorde [21] · Toute la canalisation [21] · Camionnette équipée [19] · Autour de Bruxelles 24h/24 [26] · Sur rendez-vous ou urgence [26] · Brabant flamand et wallon [25]
D1: Curage complet de vos canalisations et égouts, avec contrôle caméra après passage. [82]
D2: On nettoie toute la canalisation, pas seulement le bouchon. Caméra comprise. [76]
D3: Le prix vous est dit au téléphone et confirmé à la porte, avant de commencer. [77]
D4: Basés à Vilvorde. Camionnette équipée, caméra et haute pression. 24h/24, 7j/7. [78]

### FR-5 Fosse septique (built now, paused until week three)
Headlines: Vidange fosse septique [22] · Fosse septique pleine ? [23] · Vidange rapide et propre [24] · Sterput et fosse vidangés [25] · Le prix avant de commencer [26] · Prix dit au téléphone [21] · Vidange sur rendez-vous [23] · Contrôle caméra si besoin [25] · Déboucheur à Vilvorde [21] · Curage et vidange [17] · Autour de Bruxelles [19] · Brabant flamand et wallon [25] · Une facture, chaque fois [24] · Vidange de sterput [18] · Camionnette équipée [19]
D1: Vidange de fosse septique et de sterput, curage et inspection caméra si nécessaire. [83]
D2: Le prix vous est dit au téléphone et confirmé à la porte, avant de commencer. [77]
D3: Sur rendez-vous. Travail propre, et une facture à chaque intervention. [70]
D4: Basés à Vilvorde, autour de Bruxelles, Brabant flamand et Brabant wallon. [73]

### NL-1 Dringende ontstopping
Headlines: Ontstopping 24 op 24 [20] · Dringende ontstopping [21] · Riool ontstoppen, wij komen [27] · Prijs vooraf, geen verrassing [29] · Prijs aan de telefoon [21] · Ook 's nachts en weekend [24] · Ontstopper uit Vilvoorde [24] · Camera-inspectie inbegrepen [27] · Wij komen met de hogedruk [25] · Rond Brussel, dag en nacht [26] · Vlaams- en Waals-Brabant [24] · De prijs verandert niet [23] · Bevestigd aan de deur [21] · Verstopping? Wij komen [22] · 24/7, ook op feestdagen [23]
D1: Ontstopping, camera-inspectie, hogedruk en pompen. 24/7 rond Brussel en Vlaams-Brabant. [87]
D2: U hoort de prijs aan de telefoon en wij bevestigen die aan de deur voor we starten. [83]
D3: De camera-inspectie zit inbegrepen bij de interventie. Wij kijken voor we breken. [81]
D4: Wij zitten in Vilvoorde en werken rond Brussel, in Vlaams- en Waals-Brabant. [76]

### NL-2 Verstopte wc
Headlines: Verstopte wc? Wij komen [23] · Wc ontstoppen Vilvoorde [23] · Wc verstopt? Bel ons [20] · Vandaag nog ter plaatse [23] · Prijs vooraf, geen verrassing [29] · Prijs aan de telefoon [21] · Camera-inspectie inbegrepen [27] · Wij kijken voor we breken [25] · Wc, gootsteen of douche [23] · Elke dag van de week [20] · Ook 's nachts en weekend [24] · Loopt de wc terug? [18] · Ontstopper uit Vilvoorde [24] · Hogedruk en camera [18] · Rond Brussel, 24 op 24 [22]
D1: Wc, gootsteen of douche verstopt? Wij komen met camera en hogedruk, ook in het weekend. [87]
D2: U krijgt de prijs aan de telefoon en wij bevestigen die aan de deur, voor we starten. [85]
D3: Wij kijken eerst met de camera. Breken is het laatste middel, nooit zonder uw akkoord. [86]
D4: Ontstopper uit Vilvoorde. Rond Brussel, in Vlaams-Brabant en Waals-Brabant. [75]

### NL-3 Verstopte afvoer en riool
Headlines: Afvoer verstopt? Bel ons [24] · Gootsteen ontstoppen [20] · Riool of sterfput verstopt [26] · Hogedrukreiniging riool [23] · Camera-inspectie inbegrepen [27] · Wij kijken voor we breken [25] · Prijs vooraf, geen verrassing [29] · Prijs aan de telefoon [21] · Water loopt niet weg? [21] · Gootsteen, lavabo, bad [22] · Ontstopper uit Vilvoorde [24] · 24 op 24, ook weekend [21] · Rond Brussel en Brabant [23] · Mechanisch of hogedruk [22] · Wij komen vandaag nog [21]
D1: Gootsteen, lavabo, bad of standleiding. Mechanisch of met hogedruk ontstopt. [76]
D2: Wij kijken eerst met de camera, pas daarna wordt er iets opengebroken. [70]
D3: U hoort de prijs aan de telefoon. Wij bevestigen die aan de deur, voor we starten. [82]
D4: Ontstopper uit Vilvoorde, actief rond Brussel, Vlaams-Brabant en Waals-Brabant. [79]

### NL-6 Kelder leegpompen
Headlines: Kelder onder water? [19] · Kelder en garage pompen [23] · Vandaag nog leeggepompt [23] · Wij pompen en maken schoon [26] · Ook 's nachts en weekend [24] · Prijs vooraf, geen verrassing [29] · Prijs aan de telefoon [21] · Na het onweer, wij pompen [25] · Ontstoppingsdienst 24/7 [23] · Ontstopper uit Vilvoorde [24] · Garage onder water? Bel [23] · Pomp, camera, hogedruk [22] · Rond Brussel, dag en nacht [26] · Vlaams- en Waals-Brabant [24] · Eén factuur, geen verrassing [28]
D1: Kelder of garage onder water? Wij pompen leeg en maken schoon, ook 's nachts. [77]
D2: Bel, u hoort de prijs aan de telefoon. Wij bevestigen die aan de deur voor we starten. [86]
D3: Pomp, inspectiecamera en hogedrukmachine staan klaar in de bestelwagen. [72]
D4: Wij zitten in Vilvoorde en werken rond Brussel, in Vlaams- en Waals-Brabant. [76]

### NL-4 Riool ruimen (built now, paused until week three)
Headlines: Riool ruimen en reinigen [24] · Hogedrukreiniging riool [23] · Riolering ruimen [16] · Camera na de reiniging [22] · Onderhoud en spoedgeval [23] · Prijs vooraf, geen verrassing [29] · Prijs aan de telefoon [21] · Ontstopper uit Vilvoorde [24] · De hele leiding proper [22] · Camera-inspectie inbegrepen [27] · Op afspraak of dringend [23] · Rond Brussel en Brabant [23] · Bestelwagen met hogedruk [24] · 24 op 24, ook weekend [21] · Vlaams- en Waals-Brabant [24]
D1: Volledige ruiming van riolering en afvoerleidingen, met controle via camera achteraf. [85]
D2: Wij maken de hele leiding proper, niet alleen de verstopping. Camera inbegrepen. [80]
D3: U hoort de prijs aan de telefoon en wij bevestigen die aan de deur voor we starten. [83]
D4: Ontstopper uit Vilvoorde. Bestelwagen met camera en hogedruk staat klaar. [73]

### NL-5 Septische put (built now, paused until week three)
Headlines: Septische put leegmaken [23] · Septische put vol? [18] · Snel en netjes geledigd [23] · Sterfput ook geledigd [21] · Prijs vooraf gezegd [19] · Prijs aan de telefoon [21] · Ledigen en nazicht [18] · Op afspraak [11] · Ontstopper uit Vilvoorde [24] · Camera-inspectie indien nodig [29] · Rond Brussel en Brabant [23] · Altijd een factuur [18] · Ruimen en ledigen [17] · Vlaams- en Waals-Brabant [24] · Bestelwagen met pomp [20]
D1: Septische put en sterfput ledigen, riolering ruimen en camera-inspectie indien nodig. [84]
D2: U hoort de prijs aan de telefoon. Die prijs staat ook op de factuur. [68]
D3: Op afspraak. Netjes gewerkt, en een factuur bij elke interventie. [64]
D4: Ontstopper uit Vilvoorde. Rond Brussel, in Vlaams-Brabant en Waals-Brabant. [75]

### Assets (unchanged from `research/03` 2.13, minus the insurance callout)
Callouts FR: 24h/24 et 7j/7 · Week-end et jours fériés · Prix annoncé avant · Inspection caméra comprise · Haute pression · Basé à Vilvorde. Callouts NL: 24 uur op 24 · Weekend en feestdagen · Prijs vooraf · Camera-inspectie inbegrepen · Hogedrukreiniging · Uit Vilvoorde. Sitelinks and the Services structured snippet as in 2.13, with the "Rapport pour l'assurance" and "Verslag voor verzekering" callouts held back until Roro confirms. Sitelink URLs all resolve to `/fr/` or `/nl/` until the variants exist.

---

## 5. Conversion actions plan

All three live in Roro's OWN Ads account with its own `AW-` id, never cross-account (`ads-program.md` section 4). Create them while the account still has 0 campaigns.

| Action | Type | Role | Settings | How it is measured |
|---|---|---|---|---|
| `call_click` | Website, "Clicks to your phone number on your website" | **Primary** | Count: One. Value: 1 euro flat. Click window 30 days. Enhanced conversions OFF. | A direct `gtag` event on click of any `tel:+32480649649` link. The page carries 9 such links, all the same number, so one delegated listener on `a[href^="tel:"]` covers them all. No Tag Manager (`landing-page.md` section 8 overrides the GTM method in `research/03` 2.6). |
| `calls from ads` | Calls from ads (Google forwarding number) | **Secondary** | Duration threshold 45 seconds. Forwarding number in the call asset, call reporting ON, asset scheduled to the real answering hours. | Google's own forwarding number, nothing on the page. Belgium is supported. |
| `whatsapp_click` | Website | **Secondary** | Lower value than a call (it proves a click, never a sent message). Count: One. | Same pattern, a `gtag` event on click of `a[href*="wa.me"]`. |

Mechanics that are easy to get wrong: **Secondary cannot be chosen in the creation wizard.** Create each action, then Settings, Action optimization, set Secondary. Then delete any junk action the wizard auto-created (`ads-program.md` section 4). Consent Mode v2 with `ad_storage` denied until consent, so a refusing visitor fires nothing.

Diagnostics only, in GA4, never as Ads conversions: `scroll_75` and `time_30s` (`landing-page.md` section 8).

### What G5 requires before the campaign is enabled

G5 is "tag proven on the wire before the campaign is enabled". A pre-launch test conversion can never appear in the Ads interface, so the proof is the network, in this order:

1. The page must be **on the real domain** (G4), not on `*.pages.dev`, with the gtag snippet and the consent banner shipped from `page-template.js` and the CSP in `design/05-tech-standard.md` widened to allow `googletagmanager.com` and `googleadservices.com`.
2. **Refuse cookies first.** Click a `tel:` link. `performance.getEntriesByType('resource')` must show no `googleads`, `doubleclick` or `googletagmanager` entry at all. That is the Consent Mode v2 half of the proof.
3. **Accept cookies.** Reload. Confirm the `gtag/js` load appears.
4. **Stub the tel: click** (prevent the dialler) and **stub the WhatsApp click** so nothing reaches Roro's phone, then fire each one. The resource list must show `googleadservices.com/pagead/conversion/<AW id>/...label=...` with the right label per action.
5. Screenshot the resource list, note the AW id and the two labels, and write the result into `LOG.md`.
6. **The first real post-launch conversion is the second proof.** Match it against what Roro's phone actually did that day.

Blocker stated plainly: steps 1 to 4 cannot happen today. The domain is not active and the page has no tag. Both are upstream of the account session.

---

## 6. Account-session click checklist, in order

Prereqs, all outside the session: page live on the domain (G4), gtag and consent shipped, Roro present with his own card, the `Pro Debouchage` Chrome profile signed out of every other Google account, the answering-hours answer from Roro.

1. **Ads account created inside Roro's login**, Fady beside him. Roro clicks. (`launch-plan.md` section 5.)
2. **Auto-apply recommendations OFF**, all of them, before anything else exists.
3. **Billing: payer Roro, his card.** Never the agency card (G2, `separation.md`).
4. **Claim the 400-for-400 Google credit here, not earlier.** Read the offer's own terms on screen: spend window and deadline. At 15 to 20 euro a day, spending the qualifying 400 euro takes 20 to 27 days. Arithmetic only, no promise.
5. **Manager link:** accept the invite from `Fady Agency`, verify by **customer ID 724-595-2027** in the sub-account list, never by name (a same-named empty manager exists).
6. **Conversion actions**, all three, while the account has 0 campaigns. Secondaries set afterwards in Action optimization. Delete the wizard's junk action. Enhanced conversions OFF.
7. **Prove the tag on the wire (G5).** Stop here if it does not prove.
8. **Campaign 1, PD | FR | Search | Ring Bruxelles.** Search only. Search partners OFF, Display OFF, AI Max OFF, search-term matching OFF, final-URL expansion OFF, automatically created assets OFF. Budget: half the daily total. Bidding **Maximize Clicks with a max CPC cap of 6 euro**. Locations: the listed towns from `launch-plan.md` section 6 by name (postal codes for the ones the picker misses: Bever 1547, Drogenbos 1620, Linkebeek 1630, Herne 1540, Galmaarden 1570, Pepingen 1670), **Presence**, the **19 Brussels communes excluded**, the held-back group left out. Language: French. Ad schedule: the real answering hours; 22:00 to 06:00 plus 15 to 25 percent only if Roro truly answers at night. Devices: mobile baseline, desktop minus 30 percent, tablet minus 50 percent.
9. **FR ad groups:** FR-1, FR-2, FR-3, FR-6 enabled; FR-4 and FR-5 created and **paused** for week three. One unpinned RSA per group. Ad strength Good.
10. **Assets:** business name, logo, callouts, Services structured snippet, sitelinks, and the **call asset** with call reporting ON, forwarding number, scheduled to answering hours. The **location asset waits** for the Business Profile manager link.
11. **Campaign 2, PD | NL | Search | Ring Brussel.** Same settings, **CPC cap 5 euro**, language Dutch, same towns, same exclusion. NL-1, NL-2, NL-3, NL-6 enabled; NL-4 and NL-5 paused. **Budget 50/50 with FR at launch**, corrected at week 2 on where the calls came from (`ads-program.md` section 2 overrides the 60/40 in `research/03` 2.2).
12. **Attach the shared negative list** to both campaigns.
13. **Publish, then pause within seconds.** Full reload. Read every setting back on screen: match types, geo count and Presence, exclusions, bid strategy and cap, device adjustments, schedule, no Display, no partners, auto-apply still off, call asset serving, no disapprovals.
14. **Enable on Fady's explicit word only.** Then write the launch date into `ads-program.md` section 5 and `LOG.md`.

---

## 7. OPEN, one question each for Fady

1. **English.** The site ships in three languages but `ads-program.md` decides two campaigns. Launch an EN campaign or ad group at all, or hold English for after week 8?
2. **The insurance-report claim.** Unconfirmed in NOW.md, yet a headline and callout in research/03. Confirm it stays out of every ad until Roro says yes in the Tally form?
3. **A camera-inspection ad group.** The camera keywords are parked in FR-3 and NL-3. Add FR-7 and NL-7 for camera inspection in week three, or leave the terms where they are?
4. **Prices in the ad copy.** Keep ads price-free at launch, or add a price headline once the VAT question is settled?
5. **The 24/7 ad schedule.** Launch 24/7, or 07:00 to 23:00 until Roro answers Tally question 9 (who answers at night and on Sunday)?
6. **Brussels communes as negatives.** The agent's proposal in section 3. Yes or no?
7. **Landing URLs.** With no intent variants built, every FR ad points at `/fr/` and every NL ad at `/nl/`. Ship like that and build the eight variants in week two, or hold the launch until the variants exist? The generator makes them cheap (`landing-page.md` section 7).

Two notes. `call_click` counting: the program's Count One wins over research/03 2.6. And the NOW.md "Prepare the Ads build" line is what this package closes.
