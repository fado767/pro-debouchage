# 18. The customer at the moment of the click

*Date 2026-08-26, overnight v3 session. Agent: Claude, model Opus 5, web research (Belgian court and
prosecution records, VRT, RTBF, Moustique, FOD/SPF Economie, Test-Achats, BouwInfo and Radar forums,
Google/Trustpilot review text, competitor pages). Raw reference; what became copy lives in
design/canvas-v3/copy-*.js.*

## The one finding that frames everything

Halle-Vilvoorde, our exact service area, is the geography of Belgium's biggest drain-and-plumbing fraud
prosecution: on 29 September 2025 the prosecutor brought 17 defendants to court over ~265 victims
(2020-2025). VRT headline: "10.000 euro om toilet te ontstoppen" (vrt.be/vrtnws/nl/2025/09/29/, om-mp.be
press release, RTBF). Worse: RTBF's consumer guidance tells people to AVOID the top Google results
because they are paid placements, and Dutch consumer press says scammers "kopen advertentieruimte op
Google". Our only traffic source is the thing people were told to distrust. The page must therefore
read as the COMPLETED version of the checklist consumers were taught to run, in the first screen.

## The persona (the caller at 22:40 with water on the floor)

Nathalie, 41, Vilvoorde/Zaventem/Grimbergen, two kids asleep. Flushed twice, water rose, smell arrived.
Spent 20-40 minutes with plunger and caustic product before searching, so she is angrier than at 22:00.
Fears in order: damage to floor/ceiling below, tomorrow 07:00 (one bathroom), then THE INVOICE
(internal number for "should cost": 100-200; for "they will charge": 1000). Phone in one hand, gives a
page 8-20 seconds, will call 2-3 numbers, reads a price, a time and a name, never a paragraph. On the
call she wants 3-4 questions then a committed price and time. "We cannot say before we see it" = the
scam's opening move = she hangs up. Success = 20 minutes later she tells her partner "hij komt om elf
uur, het is honderd vijftig euro" and it is true.

## Ranked fears and the reassurance each needs

1. Phone price != invoice price (teaser then 150→900/1200; per-metre trick documented: advertised
   €7/m, silent €40/m spiral = €520 extra, Radar forum). Needs: all-in price plus NEGATIVE promises
   (no per-metre, no per-hour meter, no surcharge at the door).
2. Cash pressure on the spot (Halle-Vilvoorde file: "vrijwel alle slachtoffers dienden ... onmiddellijk
   te betalen", ATM walks, blank work orders). Needs: invoice, card/transfer accepted, nothing signed blank.
3. Not actually fixed ("afvoer blijkt na vertrek nog steeds verstopt", €750 silicone "repair"). Needs:
   named guarantee with duration and revisit rule.
4. Call centre, not local (085 numbers reselling jobs to unmarked vans). Needs: real address, enterprise
   number, marked van photo, technician's first name.
5. Invented extra work ("de diagnose is altijd erger dan de werkelijkheid"). Needs: work stops, shown on
   camera, written price, customer decides; camera framed as proof FOR the customer.
6. Nobody comes tonight. Needs: "a human answers", honest arrival window.
7. Night rate invented afterwards (expected +50-100%). Needs: published surcharge grid; volunteering the
   most expensive number is the strongest honesty signal.
8. Wrong VAT (21% charged instead of 6%, Test-Achats-documented abuse). Needs: the 6%/21% rule stated.
9. Tenant paralysis ("am I allowed to call, who pays"). Needs: one line: call now, invoice + report let
   you claim from the landlord.

## Real quotes worth keeping (sources in the agent run)

- "Le montant prélevé dépassait dix fois celui annoncé au départ." (Moustique)
- "Vraag op voorhand een offerte, laat je niet onder druk zetten..." (FOD Economie)
- "Une intervention en urgence pour 10 euros, ça n'existe pas." (SPF Economie)
- "Nog geen twee uur bezig, de rekening: 377,50 euro." / "Zonder bestelbon kan hij je niets vragen." (BouwInfo)
- Winner vocabulary in real 5-star reviews: fast callback, on time, clean, explained it, honest price,
  no upselling, polite. Nobody praises equipment or years in business.
- "Non seulement la plus rapide à rappeler, mais aussi la plus transparente avec ses prix." (choice rule)

## Copy implications applied to v3 (the rest are in the run)

All-in prices in figures above the scroll; negative promises named; surcharges published (+50/+75);
no teaser price; enterprise number digit-groups, no BE prefix; real address; real photos of Afrem/van;
named technician; "on décroche 24h/24"; price confirmed before the van leaves; invoice always; card
accepted; 6% VAT rule stated; named 30-day guarantee with revisit rule; stop-and-quote rule for bigger
problems; camera as customer's evidence; tenant line; real town names; no countdown/urgency theatrics
(pressure to decide fast is itself a fraud marker); what-to-do-before-we-arrive tips are a candidate
(not shipped, page length).

## Segments and timing

Homeowner = core (surprise-sensitive, guarantee matters). Tenant = legal paralysis, art. 1756 C.civ
puts cesspit emptying on the landlord; tenant orders in emergency and reclaims WITH invoice + report.
Syndic/landlord = liability + common-vs-private diagnosis, values the camera; can commit emergency
spending without an AG vote. Horeca = downtime frame, grease, maintenance follow-up. Timing: roughly
two thirds of calls outside office hours (US-centric vendor figures, directional); Friday/Saturday
nights heaviest, Monday-morning surge from weekend waiters.

## FR vs NL persuasion notes

NL (Flemish): businesslike but softer than Netherlands Dutch, "u" for a stranger in distress, price
stated flatly, correct terms (ontstopping, sterfput, bestelbon, ondernemingsnummer); the scam story is
their own local news, can be explicit. FR (Belgian): courteous first then the number, the RULE attached
to the price ("prix annoncé avant qu'on parte, pas de supplément à l'arrivée"), Belgian terms
(sterput, chambre de visite, numéro d'entreprise), a bit more warmth. Common: no fog, everything
checkable.

## Flags for Fady

- The single strongest asset money cannot rush: a few genuine, dated, named local Google reviews.
- Night/weekend prices: publishing beats hiding (v3 publishes the decided +50/+75 grid).
