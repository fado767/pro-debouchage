// v3 DUTCH copy. Native everyday Flemish, written to convert, never a translation.
// Same promise as FR, its own voice. Facts identical (business-brief.md, DECISIONS.md).
module.exports = {
  lang: 'nl-BE', dir: 'nl',
  wa: 'https://wa.me/32480649649?text=' + encodeURIComponent('Hallo, ik heb een verstopping. Hier is een foto en mijn gemeente: '),
  // Eigen aanhef: een beoordeling in de klusdraad leest als een klacht.
  waReview: 'https://wa.me/32480649649?text=' + encodeURIComponent('Hallo, hier is mijn beoordeling van jullie werk: '),
  skip: 'Naar de inhoud', langNav: 'Taal kiezen',
  callHeader: 'Bellen', callBar: 'Bel 0480 649 649', waBar: 'WhatsApp',
  waAria: 'Stuur een foto via WhatsApp',
  carAria: `Foto's van onze interventies, veeg om te bladeren`,

  meta: {
    title: 'Ontstopping 24/7 rond Brussel | Prijs aan de telefoon',
    desc: 'Verstopte afvoer, wc of riool? Ontstoppingsdienst rond Brussel, in Vlaams-Brabant en Waals-Brabant, 24/7. Prijs aan de telefoon, bevestigd aan de deur. 30 dagen garantie. Bel 0480 649 649.',
    ogt: 'Loopt het terug, loopt het over, stinkt het? Bel, wij lossen het op.',
    ogd: 'Ontstoppingsdienst rond Brussel, 24/7. De prijs die u aan de telefoon hoort, staat op de factuur.',
    locale: 'nl_BE',
    ogTitle: 'Pro Débouchage · Ontstopping 24/7 rond Brussel',
    ogAlt: 'De bestelwagen van Pro Débouchage en het logo van het bedrijf.',
  },

  eyebrow: 'Ontstopping 24/7',
  h1: ['Loopt het terug,', 'loopt het over,', 'stinkt het?'],
  h1b: 'Bel. Wij lossen het op.',
  sub: 'U legt het probleem uit, <strong>wij zeggen de prijs aan de telefoon, en die prijs betaalt u.</strong> Bevestigd aan de deur, voor de eerste minuut werk.',
  callMain: 'Bel 0480 649 649',
  waBtn: 'Stuur een foto',
  // Een tip, geen tweede belofte: één gemarkeerd woord, één korte regel (Fady 2026-08-26).
  under: '<b>Tip</b> stuur een foto, dan zien we het al.',
  waNote: 'Met een foto helpen we u sneller.',

  ticker: [
    ['tick-van.webp', 'De bestelwagen van Pro Débouchage bij zonsopgang, klaar om te vertrekken.', 1200, 675],
    ['job-wc.webp', 'Technieker die een wc ontstopt met een Rioned veer, in Pro Débouchage kledij.', 1200, 1500],
    ['camera.webp', 'Tablet van de inspectiecamera boven een open put, de binnenkant van de buis op het scherm.', 1200, 1500],
    ['allee.webp', 'Oprit in klinkers tijdens de hogedrukreiniging, de lichte strook is al gereinigd.', 1200, 1200],
    ['collage-job1.webp', 'Technieker in beschermkledij bij de hogedrukmachine, achteraan in de bestelwagen.', 800, 1000],
    ['siphon.webp', 'Inspectie van een vloerput met een rioolcamera.', 800, 1000],
    ['chambre.webp', 'Het openleggen van een ingegraven toezichtsput in een tuin.', 800, 1000],
    ['tick-drain.webp', 'Technieker die met de elektrische veer een doucheputje ontstopt.', 800, 1066],
    ['collage-van.webp', 'De bestelwagen in een tuin, met het Pro Débouchage logo op de zijkant.', 1600, 900],
    ['collage-job2.webp', 'Technieker gebogen over een toezichtsput voor een woning, de bestelwagen staat op straat.', 770, 962],
    ['moniteur.webp', 'Scherm van de inspectiecamera en technieker in Pro Débouchage kledij.', 800, 1000]],
  carousel: [
    ['car-van.webp', 'De bestelwagen van Pro Débouchage, achterdeuren open, klaar voor de interventie.', 800, 1000],
    ['machine.webp', 'Rioned hogedrukreiniger ingebouwd achteraan in de bestelwagen.', 1200, 1500],
    ['collage-job2.webp', 'Technieker gebogen over een toezichtsput voor een woning, de bestelwagen staat op straat.', 770, 962],
    ['siphon.webp', 'Inspectie van een vloerput met een rioolcamera.', 800, 1000],
    ['camera.webp', 'Tablet van de inspectiecamera boven een open put, de binnenkant van de buis op het scherm.', 1200, 1500],
    ['tick-drain.webp', 'Technieker die met de elektrische veer een doucheputje ontstopt.', 800, 1066],
    ['moniteur.webp', 'Scherm van de inspectiecamera en technieker in Pro Débouchage kledij.', 800, 1000],
    ['job-wc.webp', 'Technieker die een wc ontstopt met een Rioned veer, in Pro Débouchage kledij.', 1200, 1500],
    ['chambre.webp', 'Het openleggen van een ingegraven toezichtsput in een tuin.', 800, 1000],
    ['allee.webp', 'Oprit in klinkers tijdens de hogedrukreiniging, de lichte strook is al gereinigd.', 1200, 1200]],

  trust: [
    '24/7, ook op feestdagen',
    'Prijs aan de telefoon',
    'Camera-inspectie inbegrepen',
    'Ondernemingsnr. 1027.454.187',
    'Verzekerd bij AG Insurance',
    'Ontstopping 30 dagen gewaarborgd'],

  servK: 'Wat wij doen', servH: 'Uw probleem staat in deze lijst.',
  services: [
    ['Dringende ontstopping', 'Wc, gootsteen, douche, afvoer. Wij komen met hogedruk en camera.'],
    ['Riool en sterfput', 'De sterfput die overloopt na de regen, het riool dat terugslaat in de kelder. Hogedruk.'],
    ['Hogedruk­reiniging', 'Wij maken de hele leiding proper, niet alleen de verstopping.'],
    ['Camera-inspectie', 'Wij filmen de binnenkant van de buis en u kijkt mee op het scherm. Inbegrepen bij de interventie.'],
    ['Septische put ledigen', 'Ledigen en nazicht. Op afspraak.'],
    ['Kelder leegpompen', 'Leegpompen, schoonmaken, en een verslag voor uw verzekering als u daarom vraagt.']],
  servLink: 'Bellen',

  stepK: 'Zo werkt het', stepH: 'Vier stappen, geen verrassing',
  steps: [
    ['U belt en u legt het probleem uit.', 'Wij stellen twee of drie vragen. Een foto via WhatsApp helpt.'],
    ['Wij zeggen de prijs.', `Aan de telefoon, voor wij naar u vertrekken. 's Avonds en in het weekend zit de toeslag al in de prijs die u hoort.`],
    ['Wij komen met de camera en de hogedruk.', 'U krijgt een uur waarop wij er zijn, en wij verwittigen u als het later wordt.'],
    ['Wij bevestigen de prijs aan de deur, dan ontstoppen wij.', 'Is de situatie anders dan u beschreef, dan hoort u dat vooraf, niet op de factuur.']],

  priceK: 'De prijzen', priceH: 'Wat kost het echt?',
  // "Vanaf" sinds de rondgang met Roro (2026-08-27): vanafprijzen tot zijn eigen prijslijst er is.
  // De prijs aan de telefoon blijft wel exact en bindend, zie `promise`.
  priceFrom: 'Vanaf',
  priceIntro: 'De werken die wij het meest doen, staan in deze lijst, met hun vanafprijs. Uw exacte prijs hoort u aan de telefoon, voor wij naar u vertrekken, en die prijs betaalt u.',
  prices: [
    ['Verstopte wc', '€ 129'],
    ['Verstopte gootsteen, lavabo of douche', '€ 119'],
    ['Riool of sterfput, hogedruk', '€ 199'],
    ['Hogedrukreiniging, tot 25 m', '€ 249'],
    ['Kelder leegpompen, eerste uur', '€ 229']],
  included: ['Btw inbegrepen', 'Verplaatsing inbegrepen', 'Eerste uur inbegrepen'],
  terms: `Deze vanafprijzen gelden op weekdagen van 7 tot 18 uur. Avond (18 tot 22 uur) en zaterdag: +50%. Nacht, zondag en feestdagen: +75%. De toeslag hoort u aan de telefoon, samen met de prijs, voor wij vertrekken.`,
  p4t: 'Staat uw geval er niet bij?',
  p4: 'Septische put, ingegraven leiding, grote werken: leg het probleem uit, u krijgt meteen een eerlijke prijs.',
  p4b: 'Bel 0480 649 649',
  priceBtn: 'Bellen',
  // De titel moet zeggen wat de "1" in het zegel betekent (Fady 2026-08-26).
  guarH: '1 maand garantie op de ontstopping',
  guarP: 'Raakt dezelfde leiding binnen 30 dagen opnieuw verstopt, dan komen wij gratis terug.',
  guarLegal: 'Deze garantie komt bovenop uw wettelijke rechten, ze vervangt ze niet.',
  guarRing: 'GARANTIE',
  promise: 'De prijs die u aan de telefoon hoort, staat op de factuur.',

  baK: 'Voor, tijdens, na', baH: 'De verstopping verdwijnt. Het bewijs blijft.',
  baSteps: [
    ['Voor', 'De pot vol. Het water zakt niet meer.',
      'Verstopte wc, de pot vol vuil water, voor de interventie.'],
    ['Tijdens', 'Onze technieker, de Rioned-machine in de pot.',
      'Onze technieker in Pro Débouchage-vest ontstopt de wc met een Rioned-machine.'],
    ['Na', 'Dezelfde wc. Het water loopt weer.',
      'Dezelfde wc, proper en ontstopt, na de interventie.']],
  // Het handgeschreven briefje op de collage. TWEE REGELS, en elke letter moet in de versmalde
  // Caveat zitten: build.js weigert de build als dat niet klopt.
  baNote: 'Perfect!',

  scamK: 'Goed om weten', scamH: 'Hoe herkent u een malafide ontstoppings­dienst?',
  scamI1: 'De regio Halle-Vilvoorde staat er triest genoeg om bekend: ',
  scamICite: 'meer dan 265 slachtoffers tussen 2020 en 2025, en een proces in 2025',
  scamI2: '. Vier signalen waarbij u beter ophangt:',
  citeHint: 'Bekijk de bron',
  citeH: 'Waar dat cijfer vandaan komt',
  citeBody: 'Op 29 september 2025 dagvaardde het parket 17 beklaagden voor de rechtbank in het gerechtelijk arrondissement Halle-Vilvoorde. Het dossier gaat over ongeveer 265 slachtoffers tussen 2020 en 2025, met facturen tot 10.000 euro om één toilet te ontstoppen.',
  citeSrc: 'Bronnen: persbericht van het openbaar ministerie (om-mp.be), VRT NWS en RTBF, 29 september 2025, en het onderzoek van Moustique van 17 oktober 2025.',
  citeWhy: 'Wij zeggen het omdat het onze streek is. Daarom staan onze prijzen, ons adres en ons ondernemingsnummer ook gewoon zwart op wit op deze pagina.',
  citeClose: 'Sluiten',
  scam: [
    'Een prijs die verandert zodra de bestelwagen geparkeerd staat.',
    'Een factuur per meter ÉN per uur.',
    'Geen adres, geen ondernemingsnummer, geen naam.',
    'Alleen cash, zonder factuur.'],
  usH: 'Wij doen het omgekeerde, punt per punt:',
  us: [
    'De prijs wordt aan de telefoon gezegd en aan de deur bevestigd, voor wij beginnen.',
    'Geen prijs per meter, geen teller per uur, geen verzonnen toeslag aan de deur.',
    'Een factuur, elke keer. Overschrijving, betaallink, of cash met een ontvangstbewijs.',
    'Ons adres en ons ondernemingsnummer staan onderaan deze pagina, na te kijken in het openbaar register.'],
  scamB: 'Bel 0480 649 649',

  whoK: 'Wie komt er bij u langs', whoH: 'Afrim, de bestelwagen en het materiaal. Geen anoniem nummer.',
  bubble: 'Dag, ik ben Afrim. Ik kom bij u langs, en ik krijg het weer open.',
  bubbleWho: 'Afrim, technieker',
  bubbleAlt: 'Afrim, de technieker van Pro Débouchage.',
  incK: 'Zo werken wij', incH: 'Drie dingen waar wij niet van afwijken.',
  whoT: 'U belt, u spreekt met de persoon die het werk inplant. Afrim komt langs, in de bestelwagen die u hier ziet, met de inspectiecamera, de hogedrukmachine en de pomp. Een team van twee, samen 30 jaar in het vak: vastgoed, renovatie en sanitair. Het bedrijf is verzekerd voor beroepsaansprakelijkheid bij AG Insurance.',
  vanAlt: 'De bestelwagen van Pro Débouchage, een grijze Mercedes Vito, vroeg in de ochtend voor de eerste opdracht.',
  vanCap: 'De bestelwagen, zoals hij bij u aankomt.',
  whoBlocks: [
    ['De camera gaat voor de hamer.', 'Wij kijken eerst met de camera. Breken is het laatste middel, en nooit zonder uw akkoord. Daarom zit ze inbegrepen.'],
    ['Een verslag voor de verzekering, op vraag.', 'Vraag het ons, en na de camera-inspectie maken wij een verslag dat u aan uw verzekering kunt bezorgen, bijvoorbeeld na waterschade.'],
    ['Een factuur, elke keer.', 'Overschrijving, betaallink, of cash met een ontvangstbewijs ter plaatse. Nooit een verzonnen bedrag aan de deur.']],

  matK: 'Het materiaal', matH: 'Wij zijn fier op onze machines.',
  matT: 'Geen veertje uit de doe-het-zelfzaak. De bestelwagen is uitgerust met een Rioned hogedrukmachine, van de Nederlandse fabrikant die het vak al sinds 1956 uitrust, en met professionele inspectiecamera\'s. U ziet ze hier, op onze eigen werven.',
  mat: [
    ['machine.webp', 'Rioned UrbanJet hogedrukmachine ingebouwd achteraan in de bestelwagen.', 'De hogedruk', 'Een Rioned UrbanJet, ingebouwd in de bestelwagen. Die duwt de verstopping eruit en maakt de leiding weer proper.'],
    ['camera.webp', 'Tablet van de inspectiecamera boven een open put, de binnenkant van de buis op het scherm.', 'De rioolcamera', 'U ziet de binnenkant van uw leiding op de tablet, met de meterteller. Inbegrepen bij de interventie.'],
    ['moniteur.webp', 'Monitor van de Rausch inspectiecamera en technieker in Pro Débouchage kledij.', 'De camera voor kleine buizen', 'Voor sifons en kleine diameters gaat de Rausch camera waar de grote niet door kan.']],

  proofK: 'Het bewijs', proofH: 'Wat wij u vandaag kunnen tonen',
  honest: 'Onze Google-pagina komt eraan. Na elke klus vragen wij u een eerlijke beoordeling, goed of slecht, en die komt er ongewijzigd te staan. Intussen tonen wij ons werk.',
  tiles: [
    ['chambre.webp', 'Het openleggen van een ingegraven toezichtsput in een tuin.', 'Verstopte sterfput, toezichtsput open. Eigen werk, 2026.'],
    ['job-wc.webp', 'Technieker die een wc ontstopt met een Rioned veer, in Pro Débouchage kledij.', 'Verstopte wc, ontstopt met de Rioned veer. Eigen werk, 2026. Dit is de originele foto van de voor/na hierboven.'],
    ['allee.webp', 'Oprit in klinkers tijdens de hogedrukreiniging, de lichte strook is al gereinigd.', 'Oprit in klinkers, hogedrukreiniging bezig. De lichte strook is al gereinigd.']],
  // ONE REAL review (Paolo, 2026-08-27, original in French). A review is a QUOTE: faithfully
  // translated and MARKED as such (note key), never rewritten; the convert-not-translate rule is
  // for our copy, not for a customer's words. `reviews` = the parked grid, refilled when more land.
  reviews: [],
  featured: {
    name: 'Paolo',
    text: [
      'Zeer tevreden over de interventie van Pro Débouchage. Ik dacht eerst dat mijn gootsteen gewoon verstopt was. Ze kwamen nog dezelfde dag en zagen met een camera-inspectie snel dat het probleem eigenlijk van de rioolleidingen kwam.',
      'Het werk werd snel, proper en heel professioneel uitgevoerd. Alles werd mij duidelijk uitgelegd en de prijs was heel redelijk voor de kwaliteit van de service.',
      'Een serieus, efficiënt en eerlijk team dat ik zonder aarzelen aanbeveel.'],
    meta: 'Eerste klantenbeoordeling, ontvangen in augustus 2026.',
    note: 'Vertaald uit het Frans.'},
  // Onder de kaart: waarom er één staat, en hoe de volgende hier raakt. Kort gehouden.
  revT: 'Eén beoordeling, want wij plaatsen alleen de echte.',
  revP: 'Onze Google-pagina komt eraan, de volgende staan daar publiek. Zijn wij bij u langs geweest? Stuur twee regels, wij zetten ze hier, ongewijzigd.',
  revB: 'Mijn beoordeling sturen',
  askLine: 'Hebt u ons al laten komen? Een eerlijke beoordeling helpt ons meer dan een compliment.',
  honestT: 'Nog geen beoordelingen online, en wij gaan er geen verzinnen.',
  honestP: 'Pro Débouchage is een jong bedrijf, geregistreerd sinds september 2025. Onze eerste klanten kwamen via mond-tot-mondreclame. Onze Google-pagina komt eraan, en de eerste beoordelingen zullen van hen zijn.',
  honestL: [
    'Ons ondernemingsnummer, 1027.454.187, na te kijken in het openbaar register.',
    'De prijs, aan de telefoon gezegd voor wij naar u vertrekken, en aan de deur bevestigd.',
    `De foto's hierboven: ons eigen werk, geen gekochte beelden.`],

  segK: 'Volgens uw situatie', segH: 'Huurder, eigenaar, syndicus of zaakvoerder',
  segs: [
    ['Huurder', 'U mag ons nu laten komen. U krijgt de factuur en, op vraag, een interventieverslag: daarmee vraagt u de terugbetaling aan de eigenaar als de oorzaak bij hem ligt.'],
    ['Eigenaar of syndicus', 'Wij zeggen u of het probleem privé is of gemeenschappelijk, met de camerabeelden erbij, en de factuur staat op naam van de juiste partij.'],
    ['Handel en horeca', 'Een keuken die stilligt, kost meer dan een ontstopping. Wij komen snel, en wij stellen een onderhoud voor zodat het niet terugkomt.']],

  zoneK: 'Onze regio', zoneH: 'Waar wij werken',
  zoneT: 'Wij werken rond Brussel, in Vlaams-Brabant en Waals-Brabant, ongeveer 40 km rond Wemmel. Brussel-stad zit niet in onze regio.',
  towns: 'Vilvoorde · Machelen · Wemmel · Meise · Grimbergen · Merchtem · Asse · Dilbeek · Ternat · Zaventem · Zemst · Sint-Pieters-Leeuw · Halle · Beersel · Tervuren · Overijse · Sint-Genesius-Rode · Kraainem · Wezembeek-Oppem · Waterloo · Terhulpen · Eigenbrakel · Kasteelbrakel · Tubeke · Waver · Nijvel'.split(' · '),
  zoneC: 'Staat uw gemeente er niet bij? Bel even, u krijgt meteen ja of nee.',
  zoneL: 'Bel 0480 649 649',

  faqK: 'Uw vragen', faqH: 'Veelgestelde vragen',
  faq: [
    ['Wat kost het?', 'Een verstopte wc start vanaf € 129, een gootsteen, lavabo of douche vanaf € 119, een riool of sterfput met hogedruk vanaf € 199, een hogedrukreiniging vanaf € 249 tot 25 m, een kelder leegpompen vanaf € 229 voor het eerste uur. Btw inbegrepen, verplaatsing en eerste uur inbegrepen, op weekdagen van 7 tot 18 uur. Het zijn vanafprijzen: uw exacte prijs hoort u aan de telefoon voor wij vertrekken, en die prijs staat op de factuur.'],
    [`Is er een toeslag 's avonds, 's nachts of in het weekend?`, 'Ja, en die staat hier. Avond (18 tot 22 uur) en zaterdag: +50%. Nacht, zondag en feestdagen: +75%. U hoort het aan de telefoon, voor wij beginnen.'],
    ['Betaal ik verplaatsingskosten?', 'Nee, de verplaatsing en het eerste uur zitten in de prijzen hierboven. Komen wij langs en lukt de ontstopping niet, dan betaalt u alleen de verplaatsingskosten, € 60.'],
    ['Wat kost de camera-inspectie alleen?', 'Doen wij de interventie, dan is ze inbegrepen en betaalt u niets extra. Alleen, met een schriftelijk verslag voor uw verzekering of uw syndicus, kost ze vanaf € 149, btw inbegrepen.'],
    ['Welk btw-tarief geldt bij mij?', '6% als uw woning ouder is dan 10 jaar, het meest voorkomende geval. Anders 21%, zoals voor bedrijven. De prijzen op deze pagina zijn inclusief 6% btw. Geldt bij u het tarief van 21%, dan hoort u dat aan de telefoon, voor wij naar u vertrekken.'],
    ['Ik huur: wie betaalt?', 'U mag ons laten komen zonder eerst het akkoord van de eigenaar, en u krijgt de factuur. Ligt de oorzaak bij de eigenaar, bijvoorbeeld een oude of gebroken leiding, dan dienen onze factuur en het interventieverslag om de terugbetaling te vragen. Wij zeggen u eerlijk wat wij gevonden hebben.'],
    ['Hoe snel bent u er?', 'U krijgt aan de telefoon een uur waarop wij er zijn, en wij verwittigen u als het later wordt. Wij zeggen liever een uur dat wij halen dan een cijfer dat goed klinkt.'],
    ['Moet er iets stuk?', 'Wij kijken eerst met de camera. Breken is het laatste middel, en nooit zonder uw akkoord. Daarom zit de camera in de prijs.'],
    ['Maakt u een verslag voor de verzekering?', 'Ja, als u het vraagt. Na de camera-inspectie maken wij dan een verslag dat u aan uw verzekering kunt bezorgen, bijvoorbeeld na waterschade of een ondergelopen kelder. Zeg het gewoon aan de telefoon.'],
    ['In welke gemeenten komt u?', 'De ring rond Brussel, in Vlaams-Brabant en Waals-Brabant: Vilvoorde, Wemmel, Grimbergen, Dilbeek, Halle, Zaventem, Waterloo, Eigenbrakel, Waver, Nijvel en de andere gemeenten binnen ongeveer 40 km rond Wemmel. Brussel-stad zit niet in onze regio. Staat uw gemeente er niet bij? Bel even, u hoort het meteen.'],
    ['Hoe kan ik betalen?', 'Met overschrijving, met een betaallink, of cash met een ontvangstbewijs ter plaatse. U krijgt altijd een factuur.']],

  finalH: 'Een verstopping wacht niet.', finalB: 'Bel nu', finalWa: 'Stuur een foto',
  finalL: 'Bereikbaar 24 uur op 24 en 7 dagen op 7, ook in het weekend en op feestdagen. Gewoon nummer, geen betaalnummer.',

  footD: 'Ontstoppen, rioolreiniging, camera-inspectie, septische put en kelder leegpompen. Rond Brussel, in Vlaams-Brabant en Waals-Brabant, 24/7.',
  photoNote: `Alle foto's komen van onze eigen interventies, de bestelwagen inbegrepen. Alleen de 'voor'-foto in de bewijssectie is nagemaakt naar onze eigen foto, en het portret van Afrim is gemaakt op basis van zijn eigen foto.`,
  legalT: 'Wettelijke vermeldingen',
  legal: ['PRO DEBOUCHAGE BV', 'Guldenschaapstraat 6, 1800 Vilvoorde, België', 'Ondernemingsnummer 1027.454.187', 'E-mail: info@prodebouchage24.be', 'Telefoon: 0480 649 649'],
  vat: 'De getoonde prijzen zijn inclusief 6% btw (privéwoning ouder dan 10 jaar).',
  privacy: 'Privacybeleid', cgvLabel: 'Algemene voorwaarden',
  credit: 'PRO DEBOUCHAGE BV. Deze site plaatst geen cookies en gebruikt geen meettools.',

  creditTag: 'PRO DEBOUCHAGE BV. Deze site gebruikt één meettool voor oproepen, en alleen als u die aanvaardt.',

  // De toestemmingskaart, twee lagen (research/29 B1 en B2, 2026-08-27).
  consentT: 'Oproepen meten, met uw akkoord',
  consentP: 'We gebruiken de meting van Google (Google Ireland Ltd) om te weten of onze advertenties telefoontjes opleveren, en welke pagina\'s gelezen worden. Er wordt niets geladen voor u kiest, en weigeren verandert niets aan uw bezoek.',
  consentRefuse: 'Alles weigeren', consentAccept: 'Alles aanvaarden', consentLink: 'Cookies en meting',
  consentChoose: 'Zelf kiezen',
  consentFine: 'Verantwoordelijke&nbsp;: PRO DEBOUCHAGE BV. U kunt altijd van gedachten veranderen via de link "Cookies en meting" onderaan de pagina.',
  consentMore: 'Alles over onze cookies',
  consentT2: 'Kies wat u aanvaardt',
  consentP2: 'U beslist lijn per lijn. Er wordt niets geladen zolang u niet bewaard hebt.',
  consentSw: [
    ['Bezoekersmeting', 'Vertelt ons hoeveel mensen de pagina lezen, en welke. Tool&nbsp;: Google Analytics (Google Ireland Ltd).'],
    ['Advertentiemeting', 'Vertelt ons of een telefoontje van een Google-advertentie komt. Geen gepersonaliseerde reclame, geen retargeting. Tool&nbsp;: Google Ads (Google Ireland Ltd).'],
  ],
  consentSave: 'Mijn keuze bewaren', consentBack: 'Terug',
};
