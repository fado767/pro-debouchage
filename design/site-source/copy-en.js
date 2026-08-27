// v3 ENGLISH copy. Native persuasive English with contractions, for expats and internationals
// around Brussels. Same promise, its own voice. Never a literal translation.
module.exports = {
  lang: 'en-BE', dir: 'en',
  wa: 'https://wa.me/32480649649?text=' + encodeURIComponent("Hello, I have a blocked drain. Here's a photo and my town: "),
  // Its own opener: a review dropped into the job thread reads like a complaint.
  waReview: 'https://wa.me/32480649649?text=' + encodeURIComponent("Hello, here's my review of your job: "),
  skip: 'Skip to content', langNav: 'Choose language',
  callHeader: 'Call us', callBar: 'Call 0480 649 649', waBar: 'WhatsApp',
  waAria: 'Send a photo on WhatsApp',
  carAria: 'Photos of our jobs, swipe to browse',

  meta: {
    title: 'Drain unblocking 24/7 around Brussels | Price quoted on the phone',
    desc: "Blocked drain, toilet or sewer? Drain company serving the towns around Brussels, in Flemish and Walloon Brabant, 24/7. Price quoted on the phone, confirmed at your door. 30-day guarantee. Call 0480 649 649.",
    ogt: "Backing up, overflowing, smells awful? Call us, we'll sort it.",
    ogd: 'Drain unblocking around Brussels, 24/7. The price you hear on the phone is the price on the invoice.',
    locale: 'en_BE',
    ogTitle: 'Pro Débouchage · Drain unblocking 24/7 around Brussels',
    ogAlt: 'Pro Débouchage logo',
  },

  eyebrow: 'Drain unblocking 24/7',
  h1: ['Backing up,', 'overflowing,', 'smells awful?'],
  h1b: "Call. We'll sort it.",
  sub: "You describe the problem, <strong>we quote the price on the phone, and that's the price you pay.</strong> Confirmed at your door, before the first minute of work.",
  callMain: 'Call 0480 649 649',
  waBtn: 'Send a photo',
  // A tip, not a second promise (Fady 2026-08-26). The "call in English" line was living here and
  // nowhere else; it moved into the trust band below so the page does not lose it.
  // "we'll see it right away" read as a promise about how fast we LOOK, which is not the point
  // (Fady 2026-08-27). The point, and what the French and Dutch lines both say, is that one photo
  // is enough for us to understand the job before we even speak.
  // IT HAS TO BE ONE LINE. Measured on the live page at the hero's own font: the column is the
  // viewport minus 40, and this line is 303px, so it stays on one line down to a 343px screen,
  // which is narrower than the French line manages (353px). "one photo and we already know what
  // we're dealing with" was 395px and wrapped, and Fady's shorter "one photo and we know what we're
  // dealing with" was still 348px and wrapped by 13px. Re-measure if this copy changes.
  under: "<b>Tip</b> a photo, and we already see the problem.",
  waNote: 'A photo helps us help you faster.',

  ticker: [
    ['tick-van.webp', 'The Pro Débouchage van at sunrise, the number 0480 649 649 on the side.', 1200, 892],
    ['job-wc.webp', 'Technician unblocking a toilet with a Rioned drain rod, Pro Débouchage jacket.', 1200, 1500],
    ['camera.webp', 'Inspection camera tablet above an open access pit, the inside of the pipe on screen.', 1200, 1500],
    ['allee.webp', 'Paved driveway during high-pressure cleaning, the light strip is the part already cleaned.', 1200, 1200],
    ['collage-job1.webp', 'Technician in protective gear at the high-pressure machine in the back of the van.', 800, 1000],
    ['siphon.webp', 'Inspecting a floor drain with a sewer camera.', 800, 1000],
    ['chambre.webp', 'Opening a buried inspection chamber in a garden.', 800, 1000],
    ['tick-drain.webp', 'Technician feeding the electric drain rod into a shower drain.', 800, 1066],
    ['collage-van.webp', 'The van in a garden, the Pro Débouchage logo on the side.', 1600, 900],
    ['collage-job2.webp', 'Technician leaning into an inspection chamber outside a house, the van parked on the street.', 770, 962],
    ['moniteur.webp', 'Inspection camera monitor and technician in Pro Débouchage gear.', 800, 1000]],
  carousel: [
    ['car-van.webp', 'The Pro Débouchage van, rear doors open, ready for the job.', 800, 1000],
    ['machine.webp', 'Rioned high-pressure jetting machine built into the back of the van.', 1200, 1500],
    ['collage-job2.webp', 'Technician leaning into an inspection chamber outside a house, the van parked on the street.', 770, 962],
    ['siphon.webp', 'Inspecting a floor drain with a sewer camera.', 800, 1000],
    ['camera.webp', 'Inspection camera tablet above an open access pit, the inside of the pipe on screen.', 1200, 1500],
    ['tick-drain.webp', 'Technician feeding the electric drain rod into a shower drain.', 800, 1066],
    ['moniteur.webp', 'Inspection camera monitor and technician in Pro Débouchage gear.', 800, 1000],
    ['job-wc.webp', 'Technician unblocking a toilet with a Rioned drain rod, Pro Débouchage jacket.', 1200, 1500],
    ['chambre.webp', 'Opening a buried inspection chamber in a garden.', 800, 1000],
    ['allee.webp', 'Paved driveway during high-pressure cleaning, the light strip is the part already cleaned.', 1200, 1200]],

  trust: [
    '24/7, even on holidays',
    'Price quoted on the phone',
    'Camera inspection included',
    'Registered company 1027.454.187',
    'Insured with AG Insurance',
    '30-day guarantee on unblocking',
    'You can call in English'],

  servK: 'What we do', servH: "Your problem's on this list.",
  services: [
    ['Emergency unblocking', "Toilet, sink, shower, drain. We come with the jetting machine and the camera."],
    ['Sewer and street trap', 'The courtyard trap overflowing after rain, the sewer backing up into the cellar. High pressure.'],
    ['High-pressure cleaning', "We clean the whole pipe, not just the blockage."],
    ['Camera inspection', "We film the inside of the pipe and you watch the screen with us. Included with the job."],
    ['Septic tank emptying', 'Emptying and check-up. By appointment.'],
    ['Flooded cellar pumping', "Pumping, cleaning, and a report for your insurer if you ask for one."]],
  servLink: 'Call us',

  stepK: 'How it works', stepH: 'Four steps, no surprises',
  steps: [
    ['You call and describe the problem.', 'We ask two or three questions. A WhatsApp photo helps.'],
    ['We quote the price.', "On the phone, before we move. Evenings and weekends, the surcharge is already in the price you hear."],
    ['We arrive with the camera and the jetting machine.', "You get an arrival time, and we call if it slips."],
    ['We confirm the price at your door, then we unblock.', "If things differ from what you described, you'll know before we start, not on the invoice."]],

  priceK: 'Prices', priceH: 'What does it really cost?',
  // "From" since Roro's walkthrough (2026-08-27): starting prices until his own price list lands.
  // The phone quote stays exact and binding, which is what `promise` says.
  priceFrom: 'From',
  priceIntro: "The most common jobs are on this list, with their starting price. Your exact price comes on the phone, before we hit the road, and that's the one you pay.",
  prices: [
    ['Blocked toilet', '€ 129'],
    ['Sink, basin or shower', '€ 119'],
    ['Sewer or street trap, high pressure', '€ 199'],
    ['High-pressure cleaning, up to 25 m', '€ 249'],
    ['Flooded cellar, first hour', '€ 229']],
  included: ['VAT included', 'Call-out included', 'First hour included'],
  terms: 'These starting prices apply on weekdays, 7 am to 6 pm. Evenings (6 pm to 10 pm) and Saturdays: +50%. Nights, Sundays and public holidays: +75%. You hear the surcharge on the phone, with the price, before we set off.',
  p4t: "Your case isn't on the list?",
  p4: "Septic tank, buried pipe, bigger works: tell us the problem and you'll have an honest price right away, on the phone.",
  p4b: 'Call 0480 649 649',
  priceBtn: 'Call',
  // The title must say what the "1" in the seal means (Fady 2026-08-26).
  guarH: '1 month guarantee on every unblocking',
  guarP: 'If the same pipe blocks again within 30 days, we come back for free.',
  guarLegal: "This guarantee is on top of your legal rights, it doesn't replace them.",
  guarRing: 'GUARANTEE',
  promise: 'The price you hear on the phone is the price on the invoice.',

  baK: 'Before, during, after', baH: 'The blockage goes. The proof stays.',
  baSteps: [
    ['Before', "The bowl full. The water stopped going down.",
      'Blocked toilet, the bowl full of dirty water, before the job.'],
    ['During', 'Our technician, the Rioned machine down the bowl.',
      'Our technician in a Pro Débouchage top unblocking the toilet with a Rioned machine.'],
    ['After', 'The same toilet. The water runs again.',
      'The same toilet, clean and unblocked, after the job.']],
  // The handwritten note on the collage. TWO LINES, and every letter has to exist in the subsetted
  // Caveat: build.js refuses the build otherwise.
  baNote: 'Perfect!',

  scamK: 'Worth knowing', scamH: 'How to spot a drain-unblocking scam',
  scamI1: 'The Halle-Vilvoorde area is sadly known for this: ',
  scamICite: 'over 265 victims between 2020 and 2025, and a court case in 2025',
  scamI2: '. Four signs that should make you hang up:',
  citeHint: 'See the source',
  citeH: 'Where that number comes from',
  citeBody: "On 29 September 2025 the public prosecutor brought 17 defendants to court in the Halle-Vilvoorde judicial district. The file covers around 265 victims between 2020 and 2025, with invoices running up to 10,000 euro to unblock a single toilet.",
  citeSrc: 'Sources: public prosecutor press release (om-mp.be), VRT NWS and RTBF, 29 September 2025, and the Moustique investigation of 17 October 2025.',
  citeWhy: "We say it because this is our own area. It's also why our prices, our address and our company number are written plainly on this page.",
  citeClose: 'Close',
  scam: [
    'A price that changes once the van is parked.',
    'An invoice charged by the metre AND by the hour.',
    'No address, no company number, no name.',
    'Cash only, no invoice.'],
  usH: 'We do the exact opposite, point by point:',
  us: [
    'The price is quoted on the phone and confirmed at your door, before we start.',
    'No per-metre pricing, no hourly meter, no surcharge invented at the door.',
    'An invoice, every time. Bank transfer, payment link, or cash with a receipt.',
    'Our address and company number are at the bottom of this page, checkable in the public register.'],
  scamB: 'Call 0480 649 649',

  whoK: 'Who comes to your door', whoH: 'Afrim, the van and the gear. Not an anonymous number.',
  bubble: "Hi, I'm Afrim. I'm the one who comes round, and I'm the one who clears it.",
  bubbleWho: 'Afrim, technician',
  bubbleAlt: 'Afrim, the Pro Débouchage technician.',
  incK: 'How we work', incH: "Three things we don't bend on.",
  whoT: "You call, you talk to the person who organises the job. Afrim comes out, in the van you see here, with the inspection camera, the high-pressure machine and the pump. A team of two with 30 years in the trade between them: property, renovation and plumbing. The company carries professional liability insurance with AG Insurance.",
  vanAlt: 'The Pro Débouchage van, a grey Mercedes Vito, parked on a Belgian residential street.',
  vanCap: "The van, exactly as it arrives at your place.",
  whoBlocks: [
    ['The camera comes before the hammer.', "We look with the camera first. Breaking anything is the last resort, and never without your say-so. That's why the camera is included."],
    ['An insurance report, on request.', "Ask for it, and after the camera inspection we'll write a report you can hand to your insurer, for example after water damage."],
    ['An invoice, every time.', 'Bank transfer, payment link, or cash with a receipt on the spot. Never a number invented at the door.']],

  matK: 'The gear', matH: "We're proud of our machines.",
  matT: "No supermarket drain snake. The van is fitted with a Rioned high-pressure unit, from the Dutch manufacturer that's equipped the trade since 1956, and professional inspection cameras. You can see them here, on our own jobs.",
  mat: [
    ['machine.webp', 'Rioned UrbanJet high-pressure machine built into the back of the van.', 'The jetting machine', "A Rioned UrbanJet built into the van. It's what pushes the blockage out and cleans the pipe."],
    ['camera.webp', 'Inspection camera tablet above an open pit, the inside of the pipe on screen.', 'The sewer camera', 'You see the inside of your pipe on the tablet, with the distance counter. Included with the job.'],
    ['moniteur.webp', 'Rausch inspection camera monitor and technician in Pro Débouchage gear.', 'The small-pipe camera', "For traps and small diameters, the Rausch camera goes where the big one can't."]],

  proofK: 'The proof', proofH: 'What we can show you today',
  honest: "Our Google page is on its way. After every job we ask for an honest review, good or bad, and it'll be published as written. Meanwhile, here's our work.",
  tiles: [
    ['chambre.webp', 'Opening a buried inspection chamber in a garden.', 'Blocked street trap, inspection chamber open. Real job, 2026.'],
    ['job-wc.webp', 'Technician unblocking a toilet with a Rioned drain rod, Pro Débouchage jacket.', "Blocked toilet, cleared with the Rioned rod. Real job, 2026. This is the original photo behind the before/after above."],
    ['allee.webp', 'Paved driveway during high-pressure cleaning, the light strip is the part already cleaned.', 'Paved driveway, high-pressure cleaning in progress. The light strip is the part already done.']],
  // ONE REAL review (Paolo, 2026-08-27, original in French), faithfully translated and marked as
  // such. `reviews` = the parked grid, refilled when more real reviews land.
  reviews: [],
  featured: {
    name: 'Paolo',
    text: [
      'Very happy with Pro Débouchage. At first I thought my sink was simply blocked. They came out the same day and, with a camera inspection, quickly found the problem actually came from the sewer pipes.',
      'The work was done quickly, cleanly and very professionally. Everything was clearly explained, and the price was very reasonable for the quality of the service.',
      'A serious, efficient and honest team I recommend without hesitation.'],
    meta: 'Our first customer review, received in August 2026.',
    note: 'Translated from French.'},
  // Under the card: why there is one, and how the next one gets here. Kept short.
  revT: 'One review, because we only publish the real ones.',
  revP: "Our Google page is on its way, and the next ones will be public there. Had us round? Send two lines and we'll put them here, exactly as you wrote them.",
  revB: 'Send my review',
  askLine: 'Used our services? An honest review helps us more than a compliment.',
  honestT: "No reviews online yet, and we won't invent any.",
  honestP: "Pro Débouchage is a young company, registered since September 2025. Our first customers came by word of mouth. Our Google page is coming, and the first reviews will be theirs.",
  honestL: [
    'Our company number, 1027.454.187, checkable in the public register.',
    'The price, quoted on the phone before we set off, and confirmed at your door.',
    'The photos above: our own jobs, not bought images.'],

  segK: 'Whatever your situation', segH: 'Tenant, owner, syndic or business',
  segs: [
    ['Tenant', "You can call us out right now. You get the invoice and, on request, a job report: what you need to claim the cost back from your landlord if the cause is theirs."],
    ['Owner or syndic', "We tell you whether the problem is private or communal, with the camera footage to back it up, and the invoice goes to the right party."],
    ['Shops and horeca', "A kitchen at a standstill costs more than an unblocking. We come fast, and we'll suggest maintenance so it doesn't come back."]],

  zoneK: 'The area', zoneH: 'Where we work',
  zoneT: "We work around Brussels, in Flemish and Walloon Brabant, roughly 40 km around Wemmel. Brussels city itself isn't in our area.",
  towns: 'Vilvoorde · Machelen · Wemmel · Meise · Grimbergen · Merchtem · Asse · Dilbeek · Ternat · Zaventem · Zemst · Sint-Pieters-Leeuw · Halle · Beersel · Tervuren · Overijse · Sint-Genesius-Rode · Kraainem · Wezembeek-Oppem · Waterloo · La Hulpe · Braine-l\'Alleud · Braine-le-Château · Tubize · Wavre · Nivelles'.split(' · '),
  zoneC: "Your town's not on the list? Call, and you'll get a yes or no straight away.",
  zoneL: 'Call 0480 649 649',

  faqK: 'Your questions', faqH: 'Frequently asked questions',
  faq: [
    ['How much does it cost?', "A blocked toilet starts at € 129, a sink, basin or shower at € 119, a sewer or street trap with high pressure at € 199, high-pressure cleaning at € 249 up to 25 m, pumping a flooded cellar at € 229 for the first hour. VAT included, call-out and first hour included, on weekdays from 7 am to 6 pm. These are starting prices: your exact price comes on the phone before we set off, and that's the one on the invoice."],
    ['Is there a surcharge in the evening, at night or on weekends?', "Yes, and it's written right here. Evenings (6 pm to 10 pm) and Saturdays: +50%. Nights, Sundays and public holidays: +75%. You hear it on the phone, before the job."],
    ['Do I pay a call-out fee?', "No, the call-out and the first hour are included in the prices above. If we come and nothing can be unblocked, you only pay the call-out, € 60."],
    ['How much is a camera inspection on its own?', "When we do the job, it's included and you pay nothing extra. On its own, with a written report you can pass to your insurer or syndic, it starts at € 149, VAT included."],
    ['Which VAT rate applies at my place?', "6% if your home is over 10 years old, which is the most common case. Otherwise 21%, same as for businesses. The prices on this page include 6% VAT; if the 21% rate applies to you, we tell you on the phone, before we set off."],
    ["I'm a tenant: who pays?", "You can call us out without waiting for your landlord's okay, and the invoice goes to you. If the cause is the landlord's, say an old or broken pipe, our invoice and the job report are what you need to claim it back. We'll tell you honestly what we found."],
    ['How fast can you be here?', "We give you an arrival time on the phone, and we call if it slips. We'd rather name a time we can keep than a number that just sounds good."],
    ['Will you need to break anything?', "We look with the camera first. Breaking anything is the last resort, and never without your agreement. That's why the camera is included with the job."],
    ['Do you write reports for insurance?', "Yes, if you ask. After the camera inspection we write a report you can hand to your insurer, for example after water damage or a flooded cellar. Easiest is to mention it on the phone."],
    ['Which towns do you cover?', "The ring around Brussels, in Flemish and Walloon Brabant: Vilvoorde, Wemmel, Grimbergen, Dilbeek, Halle, Zaventem, Waterloo, Braine-l'Alleud, Wavre, Nivelles and the other towns within roughly 40 km of Wemmel. Brussels city isn't in our area. Town not listed? Call, the answer is immediate."],
    ['How can I pay?', 'Bank transfer, payment link, or cash with a receipt on the spot. You always get an invoice.']],

  finalH: "A blockage doesn't wait.", finalB: 'Call now', finalWa: 'Send a photo',
  finalL: 'Reachable 24/7, weekends and holidays included. A normal number, no premium rate.',

  footD: 'Drain unblocking, high-pressure cleaning, camera inspection, septic tanks and cellar pumping. Around Brussels, in Flemish and Walloon Brabant, 24/7.',
  photoNote: "All photos come from our own jobs. The 'before' photo in the proof section and the image of the van were recreated from our own photos.",
  legalT: 'Legal information',
  legal: ['PRO DEBOUCHAGE SRL', 'Guldenschaapstraat 6, 1800 Vilvoorde, Belgium', 'Company number 1027.454.187', 'E-mail: info@prodebouchage24.be', 'Phone: 0480 649 649'],
  vat: 'Displayed prices include 6% VAT (private homes over 10 years old).',
  privacy: 'Privacy policy', cgvLabel: 'Terms and conditions',
  credit: 'PRO DEBOUCHAGE SRL. This site sets no cookies and uses no analytics.',

  creditTag: 'PRO DEBOUCHAGE SRL. This site uses one call-measurement tool, and only if you accept it.',

  // The consent card, two layers (research/29 B1 and B2, 2026-08-27).
  consentT: 'Measuring calls, with your consent',
  consentP: "We use Google's measurement (Google Ireland Ltd) to know whether our ads bring in calls, and which pages get read. Nothing loads before you choose, and refusing changes nothing about your visit.",
  consentRefuse: 'Refuse all', consentAccept: 'Accept all', consentLink: 'Cookies and measurement',
  consentChoose: 'Choose',
  consentFine: 'Controller: PRO DEBOUCHAGE SRL. You can change your mind whenever you want, with the "Cookies and measurement" link at the bottom of the page.',
  consentMore: 'All about our cookies',
  consentT2: 'Choose what you accept',
  consentP2: "You decide line by line. Nothing loads until you've saved.",
  consentSw: [
    ['Audience measurement', 'Tells us how many people read the page, and which one. Tool: Google Analytics (Google Ireland Ltd).'],
    ['Ad measurement', 'Tells us whether a call came from a Google ad. No personalised advertising, no retargeting. Tool: Google Ads (Google Ireland Ltd).'],
  ],
  consentSave: 'Save my choices', consentBack: 'Back',
};
