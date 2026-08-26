# Copy EN, page `/en/`, version 2 (2026-08-23, refreshed 2026-08-24 to match the shipped page)

*The English page, translated from the FR and NL objects in `design/canvas-v2/page-template.js` (the shipping copy), not from the older annotated documents. Section ids (S0 to S12) follow `02-copy-fr.md` so a human can proofread this without reading JavaScript. The machine-readable version is `design/canvas-v2/copy-en.js` (78 keys, the same keys and the same array shapes as the FR and NL objects). Meta is `design/canvas-v2/meta-en.js`. The privacy page text is separate, in `design/canvas-v2/legal.js`.*

*No placeholder review is left anywhere. The review array is empty and stays empty until real Google reviews exist (AGENTS.md rule 1). While it is empty the page shows the honest card in S7 instead of a review strip.*

## Who this page is for

People living in and around Brussels who do not speak French or Dutch well enough to handle an emergency phone call: expats, international staff, students, embassy and EU-institution people, English-speaking landlords and property managers. They are often the ones who cannot deal with a Belgian tradesman by phone. So: plain, calm, confident international English, short sentences, no marketing fog, no idiom that needs a native ear. Same tone as the French: honest, direct, price-certainty first, mildly reassuring, never hyped.

## Conventions chosen for this page

- **Price format.** English convention, symbol first, no space: `€129`, `€119`, `€199`, `€149`, `€120 to €180`, `€60`. The French narrow no-break space (the `nb` constant) is not used anywhere in English.
- **Percentages and times.** `+50%`, `+75%`, `6%`, `21%` with no space. Clock times in the 12-hour form English readers expect: `7am to 6pm` for "7h à 18h", `6pm to 10pm` for "18h à 22h".
- **VAT.** "TVA comprise" is rendered "VAT included" (and "include VAT" in the footer line). Not "incl. VAT", not "VAT inclusive".
- **Town names.** Dutch spelling for Flemish Brabant (Vilvoorde, Halle, Zaventem, Grimbergen, Sint-Pieters-Leeuw, Tervuren, Overijse, Sint-Genesius-Rode, Wezembeek-Oppem, ...), French spelling for Walloon Brabant (Waterloo, Wavre, Nivelles, Braine-l'Alleud, Braine-le-Château, Tubize, La Hulpe). This is what a road sign, a GPS and a Belgian postal address will show them. Same 26 towns, same order as FR and NL.
- **Deliberately not translated.** `Pro Débouchage` (the brand, accent kept), `PRO DEBOUCHAGE SRL` (the legal name as registered, SRL not "Ltd"), the postal address `Guldenschaapstraat 6, 1800 Vilvoorde` (only the country becomes `Belgium`), the enterprise number `BE 1027.454.187`, the phone `0480 649 649`, `Rioned` (the machine brand), `WhatsApp`, `Français` and `Nederlands` in the language links, and the file names of the images.
- **No name but Afrem.** The technician is named. The owner is never named anywhere on the page. "Une équipe de deux, 30 ans de métier à eux deux" becomes "A team of two, 30 years in the trade between them", with no second name.
- **Nothing added.** No claim, number, guarantee or service that is not already in the French and Dutch copy.

---

## S0. Header and sticky bar

- Logo: the Pro Débouchage monogram alone (the SVG mark, no wordmark), small. Alt: `Pro Débouchage`
- Skip link: `Skip to content`
- Language switch: `FR` `NL` `EN` (current), a three-segment pill. The two-letter code is visible, the endonym (`Français`, `Nederlands`, `English`) is the visually hidden name. The segments themselves are built by the template, not by this copy.
- Language switch aria-label: `Choose language`
- Desktop header button: `Call 0480 649 649`
- Mobile sticky bar, main button: `Call 0480 649 649`
- Mobile sticky bar, second button: `WhatsApp`

## S1. Hero

- Chips (three, above the H1, in this order): `24/7` · `Price upfront` · `30 years' experience, combined`
  (the third chip replaced the earlier one on 2026-08-24. It says what S6 already says, in four words: two men, thirty years of trade between them. It is a fact Roro gave, not a claim about the company's age. Note the apostrophe: `years'`, plural possessive.)
- H1: `Backing up, overflowing, smelling bad? Call us, we will take care of it.`
- Sub: `You describe the problem, we tell you the price on the phone, and that is the price you pay. Confirmed at your door, before the first minute of work.`
- Main button: `Call 0480 649 649`
- Second button: `Send a photo` (aria-label `Send a photo on WhatsApp`; the WhatsApp glyph is in the button)
- Line under the buttons: `With a photo, it goes faster.`
- WhatsApp prefilled message: `Hello, I have a blocked drain. Here is a photo and my town: ` (trailing space kept, so the cursor lands where the customer types)
- No eyebrow pill on the page: the chips do that job.

Hero collage, alt texts:
1. `Pro Débouchage van, the logo and the phone number on the side.`
2. `Technician in protective clothing in front of the high-pressure machine, at the back of the van.`
3. `Technician leaning into an inspection chamber in front of a house, the van is parked in the street.`

## S2. Trust bar (four items, in this order)

1. `24 hours a day, 7 days a week, weekends and public holidays`
2. `Price given on the phone, confirmed at your door`
3. `Camera inspection included`
4. `Registered company, BE 1027.454.187`

## S3. Prices

- Kicker: `The prices`
- H2: `What does it really cost?`
- Intro: `The most common jobs are in this list. For everything else, you get the price on the phone, before we leave.`

Card 1
- Title: `Blocked toilet`
- Price: `€129`
- Terms: `VAT included. Call-out and first hour included. On weekdays, from 7am to 6pm.`
- Button: `Call`

Card 2
- Title: `Blocked sink, washbasin or shower`
- Price: `€119`
- Terms: same terms line
- Button: `Call`

Card 3
- Title: `Blocked sewer or gully, high pressure`
- Price: `€199`
- Terms: same terms line
- Button: `Call`

Card 4 (the call card, dark)
- Title: `Your case is not in the list?`
- Text: `Drain cleaning, septic tank, flooded cellar, buried pipe: tell us the problem, you get an honest price straight away.`
- Button: `Call 0480 649 649`

Under the cards, four short lines (the "no surprise" block, the bold part is the `<strong>` part):
- **`Evening (6pm to 10pm) and Saturday: +50%. Night, Sunday and public holidays: +75%.`** ` You hear the surcharge on the phone, before we leave.`
- **`Camera inspection:`** ` elsewhere €120 to €180, with us included with the job. Inspection on its own, with a report: €149.`
- **`If nothing can be unblocked`**`, you pay the call-out, €60, and nothing else.`
- **`VAT:`** ` 6% for private customers, 21% for companies. The prices above include VAT.`

Closing line (large, highlighted): `The price given on the phone is the price on the invoice.`

## S4. How it works

- Kicker: `How it works`
- H2: `Four steps, no surprise`

1. Title `You call and you describe the problem.` Text `We ask two or three questions. A photo on WhatsApp helps.`
2. Title `We tell you the price.` Text `On the phone, before we move. Surcharge included if it is evening or weekend.`
3. Title `We come with the camera and the high-pressure jet.` Text `You get an arrival time, and we let you know if it moves.`
4. Title `We confirm the price at your door, then we unblock.` Text `If the situation is different from what you described, you hear it beforehand, not on the invoice.`

## S5. Services (six cards, each with its own call link)

- Kicker: `What we do`
- H2: `Our services`

1. `Emergency unblocking` / `Toilet, sink, shower, drain. We come with the high-pressure jet and the camera.` (no photo)
2. `Blocked toilets and sinks` / `The most common case. Often solved in a single visit.` (photo, alt `Technician unblocking a toilet with a drain snake, in a Pro Débouchage jacket.`)
3. `High-pressure cleaning` / `We clean the whole pipe, not just the blockage.` (photo, alt `Rioned high-pressure cleaning machine built into the back of the van.`)
4. `Camera inspection` (badge `Included`) / `We film the inside of the pipe and you watch the screen with us. Included with the job.` (photo, alt `Screen of the inspection camera showing the inside of a pipe, with the distance counter.`)
5. `Septic tank emptying` / `Emptying and check. By appointment.` (no photo)
6. `Flooded cellar pumping` / `Pumping, cleaning, and a report for your insurance if you need one.` (no photo)

Link on every card: `Call 0480 649 649`

Three of the six cards carry a real photo, three do not. That is on purpose: we only have real pictures for those three, and we never fill a card with a bought image.

## S6. Who comes to your door

- Kicker: `Who comes to your door`
- H2: `Afrem, the van and the equipment. Not an anonymous number.`
- Text: `You call, you speak to the person who organises the job. Afrem is the one who comes, in the van you see here, with the inspection camera, the high-pressure machine and the pump. A team of two, 30 years in the trade between them: property, renovation and plumbing.`

Three short blocks:
1. Title `The camera comes before the hammer.` Text `We look with the camera first. Breaking is the last resort, and never without your agreement. That is why it is included.`
2. Title `A report for the insurance.` Text `After the camera inspection, we write a report you can give to your insurance company, for example after water damage.`
3. Title `An invoice, every time.` Text `Bank transfer, payment link, or cash with a VAT receipt handed to you on the spot. Never an invented amount at the door.`

Photo captions (real photos only, and only these two ship in S6):
- Studio van: `The van, exactly as it arrives at your door. The number is on it.` (alt `Pro Débouchage van, grey Mercedes Vito, with the number 0480 649 649 on the side.`)
- Camera monitor: `The camera screen: you see the inside of your pipe together with us.` (alt `Monitor of the inspection camera and technician in Pro Débouchage clothing.`)

The jetting unit and the technician at the toilet are on the page, but as service card photos in S5, without a caption.

## S7. Proof

- Kicker: `The proof`
- H2: `What we can show you today`
- Honest line: `We are starting our Google page. After every job we ask you for an honest review, good or bad, and it will be published here as it is. In the meantime, here is our work.`

Photo tiles (three), captions (facts only, no adjectives):
- `Blocked gully, inspection chamber opened. Real job, 2026.`
- `Camera inspection in a floor drain. Real job, 2026.`
- `Paved driveway, high-pressure cleaning in progress. The light strip is the part already cleaned.`

**No review cards.** The twelve placeholder reviews (four per language) were deleted on 2026-08-24. The review array is empty and the template renders the honest card below instead. A review card appears again only when a real Google review exists, copied word for word.

The honest card:
- Title: `No reviews online yet, and we are not going to invent any.`
- Text: `Pro Débouchage is a young company, registered since September 2025. Our first customers came by word of mouth. Our Google page is on its way, and the first reviews will be theirs.`
- Three things a customer can check today:
  1. `Our company number, BE 1027.454.187, which you can check in the public register.`
  2. `The price, given on the phone before we leave, and confirmed at your door.`
  3. `The photos above: our own jobs, not bought images.`
- Closing line of the card: `Have you had us out? An honest review helps us more than a compliment.`

The same line closes the review strip on the day real reviews replace the card. The small label on a real review card is `Google review`.

## S8. How to spot a scam (the honesty block, dark band)

- Kicker: `Good to know`
- H2: `How to spot a drain-unblocking scam`
- Intro: `The Halle-Vilvoorde area is known for it. Four signs that should make you hang up:`
1. `A price that changes once the van is parked.`
2. `An invoice charged by the metre AND by the hour.`
3. `No address, no company number, no name.`
4. `Cash only, with no invoice.`
- Closing: `We do the opposite. The price is given on the phone and confirmed at your door, the address and the company number are at the bottom of this page, and you always get an invoice.`
- Button: `Call 0480 649 649`

## S9. Zone

- Kicker: `The area`
- H2: `Where we work`
- Text: `We are based in Vilvoorde and we work around Brussels, in Flemish Brabant and Walloon Brabant, about 40 km around Wemmel. Brussels city is not in our area.`
- Towns (26, in this order): `Vilvoorde · Machelen · Wemmel · Meise · Grimbergen · Merchtem · Asse · Dilbeek · Ternat · Zaventem · Zemst · Sint-Pieters-Leeuw · Halle · Beersel · Tervuren · Overijse · Sint-Genesius-Rode · Kraainem · Wezembeek-Oppem · Waterloo · La Hulpe · Braine-l'Alleud · Braine-le-Château · Tubize · Wavre · Nivelles`
- Catch-all: `Your town is not in the list? Call, you get a yes or a no straight away.`
- Link: `Call 0480 649 649`

## S10. FAQ (eight questions, same order, FAQPage JSON-LD)

1. Q `How much does it cost?` A `A blocked toilet costs €129, a sink, washbasin or shower €119, a sewer or gully with high pressure €199. VAT included, call-out and first hour included, on weekdays from 7am to 6pm. For everything else, the price is given to you on the phone before we leave.`
2. Q `Is there a surcharge in the evening, at night or at the weekend?` A `Yes, and it is written here. Evening (6pm to 10pm) and Saturday: +50%. Night, Sunday and public holidays: +75%. You hear it on the phone, before the job.`
3. Q `Do I pay for the call-out?` A `No, the call-out and the first hour are included in the prices above. If we come and nothing can be unblocked, you only pay the call-out, €60.`
4. Q `How fast are you there?` A `We give you an arrival time on the phone, and we let you know if it moves. We prefer a time we keep to a number that sounds good.`
5. Q `Does anything have to be broken?` A `We look with the camera first. Breaking is the last resort, and never without your agreement. That is why the camera is included with the job.`
6. Q `Do you make a report for the insurance?` A `Yes. After the camera inspection, we write a report you can give to your insurance company, for example after water damage or a flooded cellar.`
7. Q `Which towns do you cover?` A `The ring around Brussels, in Flemish Brabant and Walloon Brabant: Vilvoorde, Wemmel, Grimbergen, Dilbeek, Halle, Zaventem, Waterloo, Braine-l'Alleud, Wavre, Nivelles and about 80 other towns. Brussels city is not in our area. Your town is not listed? Call, the answer is immediate.`
8. Q `How can I pay?` A `By bank transfer, by payment link, or in cash with a VAT receipt handed to you on the spot. You always get an invoice.`

## S11. Final call block

- H2: `A blockage does not wait.`
- Big number (linked): `0480 649 649`
- Button: `Call now`
- Second button: `Send a photo` (aria-label `Send a photo on WhatsApp`)
- Line: `Reachable 24 hours a day and 7 days a week, weekends and public holidays included. Normal number, no premium rate.`

## S12. Footer

- Short description: `Unblocking, drain cleaning, camera inspection, septic tanks and cellar pumping. Around Brussels, in Flemish Brabant and Walloon Brabant, 24/7.`
- Legal title: `Legal information`
- Legal block: `PRO DEBOUCHAGE SRL` / `Guldenschaapstraat 6, 1800 Vilvoorde, Belgium` / `Company number BE 1027.454.187` / `E-mail: info@prodebouchage24.be` / `Phone: 0480 649 649`
- VAT line: `The prices shown for private customers include VAT.`
- Links: `Privacy policy` (to `/en/privacy`, the English page, since 2026-08-24; before that date the English footer borrowed the French privacy page) · then `Français` and `Nederlands`, which the template builds itself from its language list
- Bottom line: `© [current year, updated automatically] PRO DEBOUCHAGE SRL. This site sets no cookies and uses no measurement tools.` (the second sentence is removed the day the consent banner and the tags are added)

## Privacy page (`/en/privacy`)

Its text is not in this document. It lives in `design/canvas-v2/legal.js` (one `<main>` per language) and the build wraps it in the same header, footer and call bar. It is a faithful translation of the French page, with the Belgian Data Protection Authority named in English and linked to its English domain. Since 2026-08-24 all three languages say three true things about the built site: the page sets no cookie, the fonts and images come from our own server so nothing is requested from another company, and our host Cloudflare Pages adds two error-reporting headers (NEL and Report-To) that we cannot remove.

Page title: `Privacy policy | Pro Débouchage`. Description: `Privacy policy of PRO DEBOUCHAGE SRL. What data we handle, why, for how long, and your rights.`

## Meta (`design/canvas-v2/meta-en.js`)

- Title (54 characters): `Drain unblocking 24/7 around Brussels | Pro Débouchage`
- Description (153 characters): `Blocked drain, toilet or sewer? Based in Vilvoorde, around Brussels, 24/7. Price on the phone, confirmed at the door. Camera included. Call 0480 649 649.`
- OG title: `Backing up, overflowing, smelling bad? Call us, we will take care of it.`
- OG description: `Drain unblocking in Vilvoorde, around Brussels, 24/7. The price given on the phone is the price on the invoice.`
- OG locale: `en_BE`
- OG image alt: `Pro Débouchage van with the number 0480 649 649`

## Alt texts for the real photos (EN), the eleven that ship

- van studio (cutout on white, S6): `Pro Débouchage van, grey Mercedes Vito, with the number 0480 649 649 on the side.`
- collage, van: `Pro Débouchage van, the logo and the phone number on the side.`
- collage, jetting unit: `Technician in protective clothing in front of the high-pressure machine, at the back of the van.`
- collage, inspection chamber: `Technician leaning into an inspection chamber in front of a house, the van is parked in the street.`
- job-wc: `Technician unblocking a toilet with a drain snake, in a Pro Débouchage jacket.`
- machine: `Rioned high-pressure cleaning machine built into the back of the van.`
- camera: `Screen of the inspection camera showing the inside of a pipe, with the distance counter.`
- monitor: `Monitor of the inspection camera and technician in Pro Débouchage clothing.`
- chambre: `Opening a buried inspection chamber in a garden.`
- siphon: `Inspection of a floor drain with a sewer camera.`
- allee: `Paved driveway being cleaned with high pressure, the light strip is the part that is done.`
- header and footer logo: `Pro Débouchage`

## Open choices for the proofreader

- **H1.** One alternative, if the three-part rhythm reads better without the question: `It comes back up, it overflows, it smells. Call us, we will take care of it.`
- **"sterput".** Rendered `gully` everywhere (price card, tile caption, FAQ 1 and FAQ 7 context). Alternatives a Belgian English speaker would also recognise: `drain sump` or `yard gully`. One word must be picked and used everywhere.
- **The third chip.** `30 years' experience, combined` is the shipped wording. The plainer `Two of us, 30 years in the trade` says the same thing and reads more like the rest of the page, but it is longer than a chip should be.
