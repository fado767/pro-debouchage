# 33 EN voice polish research (2026-08-29, Opus, pre-launch copy round)

*Raw agent report, filed by the orchestrator. Brief: read copy-en.js and the live EN page, decide the register for Brussels expats, calibrate on native UK/Irish drain-trade copy, flag French calques. Reddit was blocked; calibration used UK/Irish trade sites plus Belgian competitors' English pages (the failure mode to avoid). Prices, fees, promise line and legal text out of scope.*

## A. Register decision

International plain English, mildly British-leaning. Keep the spellings the file already uses (metre, organises), keep Belgian conventions (24/7, euro amounts). Short verb-first sentences, contractions, everyday words a non-native reader parses on first pass. Avoid both edges: no Latinate abstraction ("intervention", "at a standstill", "checkable") and no regional idiom a non-native would trip on. "Sort it", "come out", "call-out" are safe and already in the file. Avoid Americanisms ("hit the road").

Observations:
1. The Belgian-competitor failure mode is real: sos247.be "Possibility of intervention in 30min", plumbers.be "We intervene across the 19 Brussels communes". Our page never says "intervention" but carries structural cousins ("before we move", "an unblocking", "invented at the door").
2. Native emergency-drain copy is verb-first and short: drainunblocking247.co.uk "Blocked drain? Call now."; ukdrainageservices.co.uk "A real person answers, no call centre, no hold music". Our meta.ogt and bubble already sit in that register.
3. The native word for the visit is "call-out" / "come out" / "turn up", never "displacement" or "move" (Metro Rod, Drain Medic Dublin).
4. The file is inconsistent with itself where it drifts: "before we set off" appears four times but steps say "before we move" and priceIntro "before we hit the road"; "You get an arrival time" vs the FAQ's better "We give you an arrival time". Fixing drift to the page's own best line is the safest polish.

## B. Suggestions

1. steps[1] | FROM "On the phone, before we move. ..." | TO "On the phone, before we set off. ..." | deplacement calque; page says "set off" elsewhere.
2. priceIntro | FROM "... before we hit the road, and that's the one you pay." | TO "... before we set off, and that's the one you pay." | American idiom, the odd one out.
3. steps[3] title | FROM "We confirm the price at your door, then we unblock." | TO "We confirm the price at your door, then we clear it." | intransitive "we unblock" is not English.
4. steps[3] body | FROM "If things differ from what you described, you'll know before we start, not on the invoice." | TO "If it's not what you described, you'll hear it before we start, not on the invoice." | abstraction.
5. steps[2] body | FROM "You get an arrival time, and we call if it slips." | TO "We give you an arrival time, and we call if it slips." | align to the FAQ's active version.
6. steps[2] title | FROM "We arrive with the camera and the jetting machine." | TO "We turn up with the camera and the jetting machine." | native trade verb.
7. services[0] | FROM "We come with the jetting machine and the camera." | TO "We come out with the jetting machine and the camera." | standard call-out verb.
8. services[4] | FROM "Emptying and check-up. By appointment." | TO "We empty it and check it over. By appointment." | noun-stacking is a French habit.
9. sub | FROM "Confirmed at your door, before the first minute of work." | TO "Confirmed at your door, before any work starts." | French flourish; equally binding.
10. scamI1 | FROM "The Halle-Vilvoorde area is sadly known for this: " | TO "The Halle-Vilvoorde area has a bad name for this: " | tristement connu calque.
11. us[1] | FROM "... no surcharge invented at the door." | TO "... no extra made up at the door." | "invented" is the French verb.
12. whoBlocks[2] body | FROM "Never a number invented at the door." | TO "Never a figure made up at the door." | same calque; "figure" is money.
13. honestT | FROM "No reviews online yet, and we won't invent any." | TO "No reviews online yet, and we won't make any up." | third "invent".
14. honestP | FROM "registered since September 2025." | TO "registered in September 2025." | depuis calque.
15. honestL[0] | FROM "Our company number, 1027.454.187, checkable in the public register." | TO "Our company number, 1027.454.187. You can check it in the public register." | "checkable" is not native. Same fix in us[3].
16. p4t/p4 | FROM "Your case isn't on the list?" / "... bigger works: tell us the problem and you'll have an honest price ..." | TO "Your job's not on the list?" / "... a bigger job: tell us the problem and you'll get an honest price ..." | votre cas / gros travaux / vous aurez calques.
17. askLine | FROM "Used our services? An honest review helps us more than a compliment." | TO "Had us out? An honest review helps us more than a compliment." | corporate; matches revP's "Had us round?".
18. finalL | FROM "Reachable 24/7, weekends and holidays included. ..." | TO "Someone answers 24/7, weekends and holidays included. ..." | the exact proof point native competitors lead with.

Optional extras: trust[6] "You can call in English" TO "We answer in English"; trust[0] "24/7, even on holidays" TO "24/7, public holidays included" (matches finalL/terms); segs[2] "A kitchen at a standstill costs more than an unblocking." TO "A closed kitchen costs you more than the job does." (a l'arret calque plus the countable "an unblocking", the clearest non-native tell); guarH "1 month guarantee on every unblocking" TO "... every unblocking job". Lower confidence: "No supermarket drain snake" TO "No DIY drain snake"; whoT "organises the job" TO "books the job in"; zoneT "roughly 40 km around Wemmel" TO "within roughly 40 km of Wemmel"; FAQ close "Call, the answer is immediate" TO zoneC's native "you'll get a yes or no straight away".

## C. Deliberately left alone

1. under ("Tip: a photo, and we already see the problem."): a hard one-line width measurement rules; any improvement wraps.
2. promise, terms, included, prices, guarLegal, the 60 euro call-out FAQ line: out of scope, and already plain and native.
3. featured (the review): a real customer's words marked "Translated from French"; polishing it would voice a real person. bubble ("Hi, I'm Afrim. I'm the one who comes round, and I'm the one who clears it.") stays: the most native sentence on the page and the calibration target.
