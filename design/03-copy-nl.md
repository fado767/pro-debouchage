# Copy NL, page `/nl/`, version 2 (2026-08-23, refreshed 2026-08-24 to match the shipped page)

*Rule for the designer or the AI that builds the page: use every string below character for character. Do not translate, do not shorten, do not "improve", do not add a claim. If a string does not fit, tell Fady which one and why. Section ids mirror `02-copy-fr.md` exactly, same order, same number of elements. Dutch of Belgium: "u" everywhere (never "je"), Vilvoorde, no space before ? ! : ; , prices written "€ 129", decimal comma, "wc" lowercase, "verplaatsingskosten" (never "voorrijkosten"), "sterfput" (never "putje"). No em dashes.*

*Where the shipping strings live: the `NL` object in `design/canvas-v2/page-template.js` (78 keys, the same 78 as FR and EN). This document is the human-readable mirror of that object. When the two disagree, the object is what the customer sees and this file is the one to correct. The privacy page text is separate, in `design/canvas-v2/legal.js`.*

*No placeholder review is left anywhere. The review array is empty and stays empty until real Google reviews exist (AGENTS.md rule 1). While it is empty the page shows the honest card in S7 instead of a review strip.*

Phone everywhere: display `0480 649 649`, link `tel:+32480649649`. WhatsApp link: `https://wa.me/32480649649?text=Hallo%2C%20ik%20heb%20een%20verstopping.%20Hier%20is%20een%20foto%20en%20mijn%20gemeente%3A%20` (prefilled "Hallo, ik heb een verstopping. Hier is een foto en mijn gemeente: " with a trailing space).

---

## S0. Header and sticky bar

- Logo: the Pro Débouchage monogram alone (the SVG mark, no wordmark), small. Alt: `Pro Débouchage`
- Language switch: `FR` `NL` (current) `EN`, a three-segment pill. The two-letter code is visible, the endonym (`Français`, `Nederlands`, `English`) is the visually hidden name.
- Language switch aria-label: `Taal kiezen`
- Desktop header button: `Bel 0480 649 649`
- Mobile sticky bar, main button: `Bel 0480 649 649`
- Mobile sticky bar, second button: `WhatsApp`
- Skip link: `Naar de inhoud`

## S1. Hero

- Chips (three, above the H1, in this order): `24/7` · `Prijs vooraf` · `Samen 30 jaar ervaring`
  (the third chip replaced the earlier one on 2026-08-24. It says what S6 already says, in three words: two men, thirty years of trade between them. It is a fact Roro gave, not a claim about the company's age.)
- H1: `Loopt het terug, loopt het over, stinkt het? Bel, wij lossen het op.`
- Sub: `U legt het probleem uit, wij zeggen de prijs aan de telefoon, en die prijs betaalt u. Bevestigd aan de deur, voor de eerste minuut werk.`
- Main button: `Bel 0480 649 649`
- Second button: `Stuur een foto` (aria-label `Stuur een foto via WhatsApp`; the WhatsApp glyph is in the button)
- Line under the buttons: `Met een foto gaat het sneller.`
- No eyebrow pill on the page: the chips do that job.

Hero collage (three photos, no captions), alt texts:
1. `Bestelwagen van Pro Débouchage, het logo en het nummer op de zijkant.`
2. `Technieker in beschermkledij bij de hogedrukmachine, achteraan in de bestelwagen.`
3. `Technieker gebogen over een toezichtsput voor een woning, de bestelwagen staat op straat.`

## S2. Trust bar (four items, in this order)

1. `24 uur op 24, 7 dagen op 7, ook weekend en feestdagen`
2. `Prijs aan de telefoon, bevestigd aan de deur`
3. `Camera-inspectie inbegrepen`
4. `Geregistreerde onderneming, BE 1027.454.187`

## S3. Prices

- Kicker: `De prijzen`
- H2: `Wat kost het echt?`
- Intro: `De meest voorkomende interventies staan in deze lijst. Voor de rest krijgt u de prijs aan de telefoon, voor we vertrekken.`

Card 1
- Title: `Verstopte wc`
- Price: `€ 129`
- Terms: `Btw inbegrepen. Verplaatsing en eerste uur inbegrepen. Op weekdagen, van 7 tot 18 uur.`
- Button: `Bellen`

Card 2
- Title: `Verstopte gootsteen, lavabo of douche`
- Price: `€ 119`
- Terms: `Btw inbegrepen. Verplaatsing en eerste uur inbegrepen. Op weekdagen, van 7 tot 18 uur.`
- Button: `Bellen`

Card 3
- Title: `Verstopt riool of sterfput, hogedruk`
- Price: `€ 199`
- Terms: `Btw inbegrepen. Verplaatsing en eerste uur inbegrepen. Op weekdagen, van 7 tot 18 uur.`
- Button: `Bellen`

Card 4 (the call card, dark)
- Title: `Staat uw geval er niet bij?`
- Text: `Ruimen, septische put, ondergelopen kelder, ingegraven leiding: leg het probleem uit, u krijgt meteen een eerlijke prijs.`
- Button: `Bel 0480 649 649`

Under the cards, four short lines:
- `Avond (18 tot 22 uur) en zaterdag: +50 %. Nacht, zondag en feestdagen: +75 %. De toeslag hoort u aan de telefoon, voor we vertrekken.`
- `Camera-inspectie: elders € 120 tot € 180, bij ons inbegrepen bij de interventie. Inspectie alleen, met verslag: € 149.`
- `Lukt de ontstopping niet, dan betaalt u de verplaatsingskosten, € 60, en niets anders.`
- `Btw: 6 % voor particulieren, 21 % voor bedrijven. De prijzen hierboven zijn btw inbegrepen.`

Closing line (large, highlighted): `De prijs die u aan de telefoon hoort, staat op de factuur.`

## S4. How it works

- Kicker: `Hoe het gaat`
- H2: `Vier stappen, geen verrassing`

1. Title `U belt en u legt het probleem uit.` Text `Wij stellen twee of drie vragen. Een foto via WhatsApp helpt.`
2. Title `Wij zeggen de prijs.` Text `Aan de telefoon, voor we vertrekken. Toeslag inbegrepen als het avond of weekend is.`
3. Title `Wij komen met de camera en de hogedruk.` Text `U krijgt een uur van aankomst, en wij verwittigen u als dat schuift.`
4. Title `Wij bevestigen de prijs aan de deur, dan ontstoppen wij.` Text `Is de situatie anders dan u beschreef, dan hoort u dat vooraf, niet op de factuur.`

## S5. Services (six cards)

- Kicker: `Wat wij doen`
- H2: `Onze interventies`

1. `Dringende ontstopping` / `Wc, gootsteen, douche, afvoer. Wij komen met hogedruk en camera.` (no photo)
2. `Verstopte wc en gootsteen` / `Het meest voorkomende geval. Vaak opgelost in één interventie.` (photo, alt `Technieker die een wc ontstopt met een veer, in Pro Débouchage kledij.`)
3. `Hogedrukreiniging` / `Wij maken de hele leiding proper, niet alleen de verstopping.` (photo, alt `Rioned hogedrukreiniger ingebouwd achteraan in de bestelwagen.`)
4. `Camera-inspectie` (badge `Inbegrepen`) / `Wij filmen de binnenkant van de buis en u kijkt mee op het scherm. Inbegrepen bij de interventie.` (photo, alt `Scherm van de inspectiecamera met het beeld binnen in een leiding en de afstandsteller.`)
5. `Septische put ledigen` / `Ledigen en nazicht. Op afspraak.` (no photo)
6. `Kelder leegpompen` / `Leegpompen, schoonmaken, en een verslag voor uw verzekering als u dat nodig hebt.` (no photo)

Link on every card: `Bel 0480 649 649`

Three of the six cards carry a real photo, three do not. That is on purpose: we only have real pictures for those three, and we never fill a card with a bought image.

## S6. Who comes to your door

- Kicker: `Wie komt er bij u`
- H2: `Afrem, de bestelwagen en het materiaal. Geen anoniem nummer.`
- Text: `U belt, u spreekt met de persoon die de interventie regelt. Afrem komt langs, in de bestelwagen die u hier ziet, met de inspectiecamera, de hogedrukmachine en de pomp. Een team van twee, samen 30 jaar vak: vastgoed, renovatie en sanitair.`

Three short blocks:
1. Title `De camera gaat voor de hamer.` Text `Wij kijken eerst met de camera. Breken is het laatste middel, en nooit zonder uw akkoord. Daarom zit ze inbegrepen.`
2. Title `Een verslag voor de verzekering.` Text `Na de camera-inspectie maken wij een verslag dat u aan uw verzekering kunt bezorgen, bijvoorbeeld na waterschade.`
3. Title `Een factuur, elke keer.` Text `Overschrijving, betaallink, of cash met een btw-bonnetje ter plaatse. Nooit een verzonnen bedrag aan de deur.`

Photo captions (real photos only, and only these two ship in S6):
- Studio van: `De bestelwagen, zoals hij bij u aankomt. Het nummer staat erop.` (alt `Bestelwagen van Pro Débouchage, grijze Mercedes Vito, met het nummer 0480 649 649 op de zijkant.`)
- Camera monitor: `Het scherm van de camera: u ziet de binnenkant van uw leiding samen met ons.` (alt `Monitor van de inspectiecamera en technieker in Pro Débouchage kledij.`)

The jetting unit and the technician at the toilet are on the page, but as service card photos in S5, without a caption.

## S7. Proof

- Kicker: `Het bewijs`
- H2: `Wat wij u vandaag kunnen tonen`
- Honest line: `Wij starten onze Google-pagina op. Na elke interventie vragen wij u een eerlijke beoordeling, goed of slecht, en die komt hier ongewijzigd te staan. Intussen tonen wij ons werk.`

Photo tiles (three), captions:
- `Verstopte sterfput, toezichtsput open. Echte interventie, 2026.`
- `Camera-inspectie in een vloerput. Echte interventie, 2026.`
- `Oprit in klinkers, hogedrukreiniging bezig. De lichte strook is al gereinigd.`

**No review cards.** The twelve placeholder reviews (four per language) were deleted on 2026-08-24. The review array is empty and the template renders the honest card below instead. A review card appears again only when a real Google review exists, copied word for word.

The honest card:
- Title: `Nog geen beoordelingen online, en wij gaan er geen verzinnen.`
- Text: `Pro Débouchage is een jong bedrijf, geregistreerd sinds september 2025. Onze eerste klanten kwamen via mond-tot-mondreclame. Onze Google-pagina komt eraan, en de eerste beoordelingen zullen van hen zijn.`
- Three things a customer can check today:
  1. `Ons ondernemingsnummer, BE 1027.454.187, na te kijken in het openbaar register.`
  2. `De prijs, aan de telefoon gezegd voor we vertrekken, en aan de deur bevestigd.`
  3. `De foto's hierboven: onze eigen interventies, geen gekochte beelden.`
- Closing line of the card: `Hebt u ons al laten komen? Een eerlijke beoordeling helpt ons meer dan een compliment.`

The same line closes the review strip on the day real reviews replace the card. The small label on a real review card is `Google-beoordeling`.

## S8. How to spot a scam (dark band)

- Kicker: `Goed om weten`
- H2: `Hoe herkent u een malafide ontstopper?`
- Intro: `De regio Halle-Vilvoorde staat erom bekend. Vier signalen waarbij u beter ophangt:`
1. `Een prijs die verandert zodra de bestelwagen geparkeerd staat.`
2. `Een factuur per meter ÉN per uur.`
3. `Geen adres, geen ondernemingsnummer, geen naam.`
4. `Alleen cash, zonder factuur.`
- Closing: `Wij doen het omgekeerde. De prijs wordt aan de telefoon gezegd en aan de deur bevestigd, het adres en het ondernemingsnummer staan onderaan deze pagina, en u krijgt altijd een factuur.`
- Button: `Bel 0480 649 649`

## S9. Zone

- Kicker: `De zone`
- H2: `Waar wij komen`
- Text: `Wij zitten in Vilvoorde en werken rond Brussel, in Vlaams-Brabant en Waals-Brabant, ongeveer 40 km rond Wemmel. Brussel-stad zit niet in onze zone.`
- Towns (in this order): `Vilvoorde · Machelen · Wemmel · Meise · Grimbergen · Merchtem · Asse · Dilbeek · Ternat · Zaventem · Zemst · Sint-Pieters-Leeuw · Halle · Beersel · Tervuren · Overijse · Sint-Genesius-Rode · Kraainem · Wezembeek-Oppem · Waterloo · Terhulpen · Eigenbrakel · Kasteelbrakel · Tubeke · Waver · Nijvel`
- Catch-all: `Staat uw gemeente er niet bij? Bel even, u krijgt meteen ja of nee.`
- Link: `Bel 0480 649 649`

## S10. FAQ (eight questions, FAQPage JSON-LD)

1. Q `Wat kost het?` A `Een verstopte wc kost € 129, een gootsteen, lavabo of douche € 119, een riool of sterfput met hogedruk € 199. Btw inbegrepen, verplaatsing en eerste uur inbegrepen, op weekdagen van 7 tot 18 uur. Voor al de rest hoort u de prijs aan de telefoon voor we vertrekken.`
2. Q `Is er een toeslag 's avonds, 's nachts of in het weekend?` A `Ja, en die staat hier. Avond (18 tot 22 uur) en zaterdag: +50 %. Nacht, zondag en feestdagen: +75 %. U hoort het aan de telefoon, voor de interventie.`
3. Q `Betaal ik verplaatsingskosten?` A `Nee, de verplaatsing en het eerste uur zitten in de prijzen hierboven. Komen wij langs en lukt de ontstopping niet, dan betaalt u alleen de verplaatsing, € 60.`
4. Q `Hoe snel bent u er?` A `U krijgt een uur van aankomst aan de telefoon, en wij verwittigen u als dat schuift. Wij zeggen liever een uur dat wij halen dan een cijfer dat goed klinkt.`
5. Q `Moet er iets stuk?` A `Wij kijken eerst met de camera. Breken is het laatste middel, en nooit zonder uw akkoord. Daarom zit de camera inbegrepen bij de interventie.`
6. Q `Maakt u een verslag voor de verzekering?` A `Ja. Na de camera-inspectie maken wij een verslag dat u aan uw verzekering kunt bezorgen, bijvoorbeeld na waterschade of een ondergelopen kelder.`
7. Q `Welke gemeenten doet u?` A `De ring rond Brussel, in Vlaams-Brabant en Waals-Brabant: Vilvoorde, Wemmel, Grimbergen, Dilbeek, Halle, Zaventem, Waterloo, Eigenbrakel, Waver, Nijvel en ongeveer 80 andere gemeenten. Brussel-stad zit niet in onze zone. Staat uw gemeente er niet bij? Bel even, u hoort het meteen.`
8. Q `Hoe kan ik betalen?` A `Met overschrijving, met een betaallink, of cash met een btw-bonnetje ter plaatse. U krijgt altijd een factuur.`

## S11. Final call block

- H2: `Een verstopping wacht niet.`
- Big number (linked): `0480 649 649`
- Button: `Bel nu`
- Second button: `Stuur een foto` (aria-label `Stuur een foto via WhatsApp`; the WhatsApp glyph is in the button)
- Line: `Bereikbaar 24 uur op 24 en 7 dagen op 7, ook in het weekend en op feestdagen. Gewoon nummer, geen toeslag.`

## S12. Footer

- Short description: `Ontstoppen, ruimen, camera-inspectie, septische put en kelder leegpompen. Rond Brussel, in Vlaams-Brabant en Waals-Brabant, 24/7.`
- Legal title: `Wettelijke vermeldingen`
- Legal block: `PRO DEBOUCHAGE SRL` / `Guldenschaapstraat 6, 1800 Vilvoorde, België` / `Ondernemingsnummer BE 1027.454.187` / `E-mail: info@prodebouchage24.be` / `Telefoon: 0480 649 649`
- VAT line: `De getoonde prijzen voor particulieren zijn btw inbegrepen.`
- Links: `Privacybeleid` (to `/nl/privacy`) · `Français` · `English`. The other-language links are built by the template from its language list; only the privacy label is copy.
- Bottom line: `© [huidig jaar, automatisch] PRO DEBOUCHAGE SRL. Deze site plaatst geen cookies en gebruikt geen meettools.` (second sentence goes the day the consent banner and the tags are added)

## Privacy page (`/nl/privacy`)

Its text is not in this document. It lives in `design/canvas-v2/legal.js` (one `<main>` per language) and the build wraps it in the same header, footer and call bar. Since 2026-08-24 it says three true things about the built site: the page sets no cookie, the fonts and images come from our own server so nothing is requested from another company, and our host Cloudflare Pages adds two error-reporting headers (NEL and Report-To) that we cannot remove.

## Meta

- Title: `Ontstopping 24/7 rond Brussel, prijs aan de telefoon | Pro Débouchage, Vilvoorde`
- Description: `Verstopte afvoer, wc of riool? Ontstoppingsdienst uit Vilvoorde, rond Brussel. 24/7. Prijs aan de telefoon, bevestigd aan de deur. Camera inbegrepen. Bel 0480 649 649.`
- OG title: `Loopt het terug, loopt het over, stinkt het? Bel, wij lossen het op.`
- OG description: `Ontstoppingsdienst in Vilvoorde, rond Brussel, 24/7. De prijs die u aan de telefoon hoort, staat op de factuur.`
- 404 page: H1 `Deze pagina bestaat niet.` Text `Wij wel.` Button `Bel 0480 649 649` Link `Terug naar de startpagina`

## Alt texts (NL), the eleven that ship

- hero collage, van: `Bestelwagen van Pro Débouchage, het logo en het nummer op de zijkant.`
- hero collage, jetting unit: `Technieker in beschermkledij bij de hogedrukmachine, achteraan in de bestelwagen.`
- hero collage, inspection chamber: `Technieker gebogen over een toezichtsput voor een woning, de bestelwagen staat op straat.`
- service card, wc: `Technieker die een wc ontstopt met een veer, in Pro Débouchage kledij.`
- service card, jetting machine: `Rioned hogedrukreiniger ingebouwd achteraan in de bestelwagen.`
- service card, camera screen: `Scherm van de inspectiecamera met het beeld binnen in een leiding en de afstandsteller.`
- S6 van studio: `Bestelwagen van Pro Débouchage, grijze Mercedes Vito, met het nummer 0480 649 649 op de zijkant.`
- S6 camera monitor: `Monitor van de inspectiecamera en technieker in Pro Débouchage kledij.`
- S7 tile, inspection chamber: `Het openleggen van een ingegraven toezichtsput in een tuin.`
- S7 tile, floor drain: `Inspectie van een vloerput met een rioolcamera.`
- S7 tile, driveway: `Oprit in klinkers tijdens de hogedrukreiniging, de lichte strook is al gereinigd.`
- header and footer logo: `Pro Débouchage`
