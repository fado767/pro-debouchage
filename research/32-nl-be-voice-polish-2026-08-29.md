# 32 NL-BE voice polish research (2026-08-29, Opus, pre-launch copy round)

*Raw agent report, filed by the orchestrator. Brief: read copy-nl.js and the live NL page, then read how Flemings actually talk (bouwinfo.be, real reviews of ontstoppingsdiensten, Flemish competitor sites), and flag lines that read as translated FR or as Hollands. Prices, fees, promise line and legal text out of scope.*

## A. How real Flemish sounds in this niche

1. The verb for emptying a septic tank is "ruimen", not "ledigen". Bouwinfo: "dan liet hij telkens de septische put ruimen"; Vilvoorde competitor VDD sells a "Ruimdienst". "Ledigen" reads as a calque of vidange. (bouwinfo.be thread 387073, vdd-ontstoppingsdienstvilvoorde.be)
2. The inspection pit is a "controleput" in Flemish mouths: "geen of nauwelijks water bij de controleput", "Ontstoppen vanaf de controleput met rioolrat". "Toezichtsput" is a literal chambre de visite and appears mostly on FR-origin sites. (bouwinfo.be threads 384543, 387073)
3. Customers describe the outcome, not the process, in very short verbs: "rap opgelost", "snel geholpen", "alles op voorhand besproken", "correct op tijd", "vriendelijke gast". Nobody says "interventie". (nl-be.trustpilot.com/review/ontstoppingsservice.be)
4. Flemish trade talk is concrete and slightly blunt: "koteren", "rioolrat", "een stijve darm", "de miserie blijft duren", "proper". Abstract nouns instantly read as translated. (bouwinfo.be threads 237348, 387073)
5. "Malafide" and "24/24 en 7/7" are genuinely native Belgian-Dutch industry words, not Hollandisms; a Flemish competitor's own scam page is headed "Pas op voor malafide ontstoppingsdiensten". (lazeroms.be)

Register note: the copy uses sentence-initial "Wij" about 25 times. Real Flemish commercial writing prefers "we", saving "Wij" for contrast ("Wij doen het omgekeerde"). Switching roughly half is the cheapest casualness gain; it is a sweep, not a line item.

## B. Suggestions

1. services[4] title | FROM "Septische put ledigen" | TO "Septische put ruimen" | ruimen is the Flemish word. (SEO note: "septische put ledigen" is also searched; check the ads keyword side before flipping.)
2. services[4] desc | FROM "Ledigen en nazicht. Op afspraak." | TO "Ruimen en nazicht. Op afspraak." | consistency.
3. tiles[0] | FROM "Verstopte sterfput, toezichtsput open. Eigen werk, 2026." | TO "... controleput open. ..." | controleput is the forum word.
4. alt texts (3x chambre.webp) | FROM "Het openleggen van een ingegraven toezichtsput in een tuin." | TO "... controleput ..." | consistency.
5. alt texts (2x collage-job2.webp) | FROM "Technieker gebogen over een toezichtsput voor een woning, ..." | TO "... controleput ..." | consistency.
6. usH | FROM "Wij doen het omgekeerde, punt per punt:" | TO "Wij doen het omgekeerde, punt voor punt:" | punt per punt is point par point.
7. us[0] | FROM "De prijs wordt aan de telefoon gezegd en aan de deur bevestigd, voor wij beginnen." | TO "We zeggen de prijs aan de telefoon en bevestigen hem aan de deur, voor we beginnen." | the passive is a French construction.
8. scam[0] | FROM "Een prijs die verandert zodra de bestelwagen geparkeerd staat." | TO "... zodra de bestelwagen voor de deur staat." | more visual, how it is said.
9. scamI1 | FROM "De regio Halle-Vilvoorde staat er triest genoeg om bekend: " | TO "De streek Halle-Vilvoorde staat er jammer genoeg om bekend: " | jammer genoeg is the everyday adverb; streek matches citeWhy.
10. us[3] | FROM "Ons adres en ons ondernemingsnummer staan onderaan deze pagina, na te kijken in het openbaar register." | TO "... deze pagina. U kunt ze zelf nakijken in het openbaar register." | the bare infinitive tail is a French participle.
11. honestL[0] | FROM "Ons ondernemingsnummer, 1027.454.187, na te kijken in het openbaar register." | TO "Ons ondernemingsnummer, 1027.454.187. U kunt het zelf nakijken in het openbaar register." | same fix.
12. p4t | FROM "Staat uw geval er niet bij?" | TO "Staat uw probleem er niet bij?" | uw geval is votre cas.
13. priceIntro | FROM "De werken die wij het meest doen, staan in deze lijst, met hun vanafprijs." | TO "De klussen die we het meest doen, staan hieronder, met de prijs waar ze starten." | met hun vanafprijs reads translated. Binding phone-price tail unchanged.
14. whoBlocks[0] desc | FROM "Wij kijken eerst met de camera. Breken is het laatste middel, en nooit zonder uw akkoord. Daarom zit ze inbegrepen." | TO "We kijken eerst met de camera. Breken doen we pas als het echt niet anders kan, en nooit zonder uw akkoord. Daarom zit ze inbegrepen." | het laatste middel is le dernier recours.
15. faq "Moet er iets stuk?" | same phrase as 14, same fix, kept consistent.
16. faq "Hoe snel bent u er?" | FROM "Wij zeggen liever een uur dat wij halen dan een cijfer dat goed klinkt." | TO "We zeggen liever een uur dat we halen dan een uur dat mooi klinkt." | repeating "uur" makes the contrast land in Dutch.
17. faq btw | FROM "6% als uw woning ouder is dan 10 jaar, het meest voorkomende geval." | TO "6% als uw woning ouder is dan 10 jaar, en dat is bij de meeste mensen zo." | administrative French; percentages untouched.
18. segs[0] Huurder | FROM "daarmee vraagt u de terugbetaling aan de eigenaar als de oorzaak bij hem ligt." | TO "daarmee kunt u het geld terugvragen aan de eigenaar als de oorzaak bij hem ligt." | terugvragen is the Flemish verb.
19. segs[1] | FROM "Wij zeggen u of het probleem privé is of gemeenschappelijk, ..." | TO "We zeggen u of het probleem bij u alleen zit of bij de gemeenschappelijke leiding, ..." | privatif/commun pair; a syndicus reads the concrete version faster.
20. incH | FROM "Drie dingen waar wij niet van afwijken." | TO "Drie dingen die bij ons vastliggen." | vastliggen is everyday Flemish and just as firm.
21. matT | FROM "van de Nederlandse fabrikant die het vak al sinds 1956 uitrust" | TO "van de Nederlandse fabrikant die al sinds 1956 machines maakt voor dit vak" | translated abstraction; fact unchanged.
22. trust[5] | FROM "Ontstopping 30 dagen gewaarborgd" | TO "30 dagen garantie op de ontstopping" | gewaarborgd is legalese from garanti; matches guarH.
23. sub tail (promise untouched) | FROM "Bevestigd aan de deur, voor de eerste minuut werk." | TO "Aan de deur bevestigd, nog voor we eraan beginnen." | avant la premiere minute de travail calque.
24. honestP | FROM "Onze eerste klanten kwamen via mond-tot-mondreclame." | TO "Onze eerste klanten kwamen via via." | via via is exactly how a Fleming says this.

## C. Deliberately left alone

1. h1/h1b: "Loopt het terug, loopt het over, stinkt het?" + "Bel. Wij lossen het op." Three spoken Flemish verbs; "opgelost" is the most common word in real reviews of this trade.
2. scamH "malafide ontstoppingsdienst" (native industry vocabulary), zoneC "Bel even, u krijgt meteen ja of nee", askLine "Hebt u ons al laten komen?" (Hebt u, not Heeft u): already textbook Flemish.
3. featured.text (the review, a marked quote, must not be voiced); matT "op onze eigen werven" / "veertje uit de doe-het-zelfzaak": already the Flemish words a Hollander would not pick.
