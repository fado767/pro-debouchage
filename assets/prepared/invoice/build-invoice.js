// Builds the PRO DEBOUCHAGE invoice pack (.docx) from this one file.
// Run: node assets/prepared/invoice/build-invoice.js            builds every output of the current round
//      node assets/prepared/invoice/build-invoice.js A fr        builds one file only
//
// Each document has three parts: page 1 FACTURE, page 2 BON D'INTERVENTION, pages 3+ CONDITIONS GENERALES.
// Two layouts, same legal content, different look:
//   A  stacked letterhead, the first draft's face
//   B  small logo left, big title right, one grey identity line, the 2026-08-27 redesign
// Two languages: fr (shipping) and nl (code path ready, strings in place, NOT emitted this round).
//
// EVERY piece of text is a named constant below. The legally verbatim strings (VAT_6_DECLARATION,
// REVERSE_CHARGE, the three work-order declarations) are copied byte for byte from
// research/26-belgian-invoice-legal-musts-2026-08-27.md and research/22-belgian-legal-cgv-2026-08-26.md.
// NEVER paraphrase, shorten or reflow them. build-check asserts they survive the build unchanged.
//
// Fill mechanics: every writing spot is a plain-text content control (w:sdt with <w:text/>), locked
// with sdtLocked so the value is editable and the control cannot be deleted, with its placeholder
// resolved through a real glossary docPart. There is NO <w:documentProtection> anywhere, on purpose:
// Word for the web opens a protected document read-only and Fady reviews these in the browser.
// Mirror of design/site-source/build.js in spirit: constants at the top, output generated, never
// edited by hand.

const fs = require('fs'), path = require('path'), zlib = require('zlib'), crypto = require('crypto');

// ---------------------------------------------------------------------------
// 1. THE IDENTITY LINE (one constant, never scattered)
// ---------------------------------------------------------------------------
// CSA art. 2:20 identity block. Layout B prints it as one line, layout A stacks it; the stacked
// version is DERIVED from this same string (see stackedIdentity), so a change here changes both.
// The VAT-registration check was still running when this was written: if the register says the
// company is not VAT registered, this line is the only place to fix.
const IDENTITY_FR = 'PRO DEBOUCHAGE SRL · Guldenschaapstraat 6, 1800 Vilvoorde · TVA BE 1027.454.187 · RPM Bruxelles · 0480 649 649 · info@prodebouchage24.be · www.prodebouchage24.be';
const IDENTITY_NL = 'PRO DEBOUCHAGE BV · Guldenschaapstraat 6, 1800 Vilvoorde · Btw-nummer BE 1027.454.187 · RPR Brussel · 0480 649 649 · info@prodebouchage24.be · www.prodebouchage24.be';

const COMPANY_FR = 'PRO DEBOUCHAGE SRL';
const COMPANY_NL = 'PRO DEBOUCHAGE BV';

// ---------------------------------------------------------------------------
// 2. THE LEGALLY VERBATIM STRINGS. Do not touch a character.
// ---------------------------------------------------------------------------
// research/26 section 3, FR official. 812 characters, ONE run, no line break, no tab.
const VAT_6_DECLARATION_FR = "Taux de T.V.A.: En l'absence de contestation par écrit, dans un délai d'un mois à compter de la réception de la facture, le client est présumé reconnaître que (1) les travaux sont effectués à un bâtiment d'habitation dont la première occupation a eu lieu au cours d'une année civile qui précède d'au moins dix ans la date de la première facture relative à ces travaux, (2) qu'après l'exécution de ces travaux, l'habitation est utilisée, soit exclusivement soit à titre principal comme logement privé et (3) que ces travaux sont fournis et facturés à un consommateur final. Si au moins une de ces conditions n'est pas remplie, le taux normal de T.V.A. de 21 p.c. sera applicable et le client endossera, par rapport à ces conditions, la responsabilité quant au paiement de la taxe, des intérêts et des amendes dus.";

// research/26 section 3, NL official.
const VAT_6_DECLARATION_NL = "Btw-tarief: Bij gebrek aan schriftelijke betwisting binnen een termijn van één maand vanaf de ontvangst van de factuur, wordt de klant geacht te erkennen dat (1) de werken worden verricht aan een woning waarvan de eerste ingebruikneming heeft plaatsgevonden in een kalenderjaar dat ten minste tien jaar voorafgaat aan de datum van de eerste factuur met betrekking tot die werken, (2) de woning, na uitvoering van die werken, uitsluitend of hoofdzakelijk als privéwoning wordt gebruikt en (3) de werken worden verstrekt en gefactureerd aan een eindverbruiker. Wanneer minstens één van die voorwaarden niet is voldaan, zal het normale btw-tarief van 21% van toepassing zijn en is de afnemer ten aanzien van die voorwaarden aansprakelijk voor de betaling van de verschuldigde belasting, interesten en geldboeten.";

// research/26 section 4, FR official (AR no 1 art. 20 par. 3, wording since 01.01.2023).
const REVERSE_CHARGE_FR = "Autoliquidation : En l'absence de contestation par écrit, dans un délai d'un mois à compter de la réception de la facture, le client est présumé reconnaître qu'il est un assujetti tenu au dépôt de déclarations périodiques. Si cette condition n'est pas remplie, le client endossera, par rapport à cette condition, la responsabilité quant au paiement de la taxe, des intérêts et des amendes dus.";

// NL official, from the enacting text of the Koninklijk besluit van 26 oktober 2022 (B.S. 10.11.2022,
// NUMAC 2022042522, artikel 13, 2 gr.), which replaces art. 20 par. 3 of KB nr. 1. Supplied 2026-08-30,
// cross-checked against the French version of the same instrument, which matches research/26 section 4
// character for character. NOTE the lead-in is "Verlegging van heffing." with a FULL STOP, where the FR
// is "Autoliquidation :" with a spaced colon. They are deliberately not symmetrical. Do not "fix" it.
const REVERSE_CHARGE_NL = "Verlegging van heffing. Bij gebrek aan schriftelijke betwisting binnen een termijn van één maand na de ontvangst van de factuur, wordt de afnemer geacht te erkennen dat hij een belastingplichtige is gehouden tot de indiening van periodieke aangiften. Als die voorwaarde niet vervuld is, is de afnemer ten aanzien van die voorwaarde aansprakelijk voor de betaling van de verschuldigde belasting, interesten en geldboeten.";

// research/22 section 2, the work-order waiver wordings. FR verbatim, NL verbatim.
const DECL_URGENT_FR = "Je demande expressément à PRO DEBOUCHAGE SRL de se déplacer chez moi pour effectuer des travaux urgents d'entretien ou de réparation. Je reconnais avoir été informé que, pour ces travaux urgents et pour les pièces de rechange indispensables, je ne dispose pas du droit de rétractation de quatorze jours (article VI.53, 8° du Code de droit économique).";
const DECL_URGENT_NL = "Ik verzoek PRO DEBOUCHAGE BV uitdrukkelijk om bij mij langs te komen voor dringende herstellings- of onderhoudswerken. Ik erken dat mij werd meegedeeld dat ik voor die dringende werken en voor de onmisbare vervangingsonderdelen niet beschik over het herroepingsrecht van veertien dagen (artikel VI.53, 8° van het Wetboek van economisch recht).";

// The immediate-execution waiver and the CGV acceptance (art. VI.53 1° / VI.73 1°), as shipped.
const DECL_IMMEDIATE_FR = "Je demande expressément l'exécution immédiate des travaux et je reconnais que, dès que le service est entièrement exécuté, je perds mon droit de rétractation (articles VI.53, 1° et VI.73, 1° du Code de droit économique).";
const DECL_IMMEDIATE_NL = "Ik vraag uitdrukkelijk om de werken onmiddellijk uit te voeren en ik erken dat ik mijn herroepingsrecht verlies zodra de dienst volledig is uitgevoerd (artikelen VI.53, 1° en VI.73, 1° van het Wetboek van economisch recht).";

const DECL_CGV_FR = "J'ai reçu et j'accepte les conditions générales de PRO DEBOUCHAGE SRL, jointes à ce bon et publiées sur prodebouchage24.be/fr/conditions-generales, y compris la garantie retour de 30 jours et ses exclusions (lingettes, graisses, racines, canalisation cassée : article 12).";
const DECL_CGV_NL = "Ik heb de algemene voorwaarden van PRO DEBOUCHAGE BV ontvangen en ik aanvaard ze, bij deze werkbon gevoegd en gepubliceerd op prodebouchage24.be/nl/algemene-voorwaarden, met inbegrip van de terugkomgarantie van 30 dagen en haar uitsluitingen (vochtige doekjes, vetten, wortels, gebroken leiding: artikel 12).";

// ---------------------------------------------------------------------------
// 3. THE PAYMENT AND LATE-PAYMENT LINES
// ---------------------------------------------------------------------------
// No structured communication (+++xxx/xxxx/xxxxx+++): its mod-97 check digit cannot be computed by
// hand and it is not legally required. No BIC either: not required for a domestic SEPA transfer and
// the company's BIC is not confirmed in the files. Decided 2026-08-30.
const PAYMENT_FR = "Virement au compte IBAN BE19 3632 6396 3312, communication : le numéro de facture. Bancontact ou espèces possibles à l'intervention. Paiement en espèces limité à 3.000 € par opération (art. 67, loi du 18.09.2017).";
const PAYMENT_NL = "Overschrijving op rekening IBAN BE19 3632 6396 3312, mededeling: het factuurnummer. Bancontact of contant kan ook bij de interventie. Contante betaling beperkt tot 3.000 € per verrichting (art. 67, wet van 18.09.2017).";

// Livre XIX CDE. The 14 days NEVER run from the invoice: they run from the reminder. The old line
// said otherwise and was wrong.
const LATE_PAYMENT_FR = "Retard de paiement : le premier rappel est gratuit. Aucun intérêt ni indemnité n'est dû avant l'expiration d'un délai de 14 jours calendrier qui commence le troisième jour ouvrable suivant l'envoi du rappel par la poste, ou le jour suivant son envoi par voie électronique (article 11 de nos conditions générales, Livre XIX du Code de droit économique).";
const LATE_PAYMENT_NL = "Laattijdige betaling: de eerste herinnering is gratis. Er is geen interest en geen vergoeding verschuldigd voor het verstrijken van een termijn van 14 kalenderdagen, die begint te lopen op de derde werkdag na de verzending van de herinnering per post, of op de dag na de verzending langs elektronische weg (artikel 11 van onze algemene voorwaarden, Boek XIX van het Wetboek van economisch recht).";

// ---------------------------------------------------------------------------
// 4. THE FILL PLACEHOLDERS
// ---------------------------------------------------------------------------
// A placeholder PRINTS, greyed, when the spot is left empty. So a readable hint is used ONLY where
// a leftover is self-evidently not data and reads as a forgotten box. Every money cell, total,
// quantity, unit price, VAT amount and unused service line gets a SINGLE SPACE: a printed 0,00 on
// an invoice is a plausible-looking wrong value, a blank is not.
const PH_BLANK = ' ';
// THE INVOICE NUMBER. The company keeps its own running series and we do not know the last number,
// so the file preloads NOTHING: no year prefix, no example digits. The placeholder is the word
// "Numéro" on purpose. If the field is forgotten, the page prints a word, which is visibly a missing
// field, instead of a plausible-looking wrong invoice number. The LABEL beside it is "N° de facture"
// and must never say "devis": the invoice they send today is titled FACTURE but labels its number
// "N° DE DEVIS", and that is exactly the defect this pack removes.
const INVOICE_NUMBER_PLACEHOLDER = { fr: 'Numéro', nl: 'Nummer' };

const PH_FR = {
  invoiceNumber: INVOICE_NUMBER_PLACEHOLDER.fr,
  date: 'JJ/MM/AAAA',
  hour: 'HH:MM',
  acompte: 'Facture n° ______ du __/__/____, ______ €',
  name: 'Nom du client',
  street: 'Rue et numéro',
  postCity: 'Code postal et commune',
  phone: '0000 00 00 00',
  vat: 'BE 0000.000.000',
  upperName: 'NOM EN MAJUSCULES',
  payMode: 'Virement / Bancontact / Espèces',
  works: 'Décrire le problème et le travail demandé',
  basis: 'Ex. : tarif horaire, forfait, ou prix après constat',
};
const PH_NL = {
  invoiceNumber: INVOICE_NUMBER_PLACEHOLDER.nl,
  date: 'DD/MM/JJJJ',
  hour: 'UU:MM',
  acompte: 'Factuur nr. ______ van __/__/____, ______ €',
  name: 'Naam van de klant',
  street: 'Straat en nummer',
  postCity: 'Postcode en gemeente',
  phone: '0000 00 00 00',
  vat: 'BE 0000.000.000',
  upperName: 'NAAM IN HOOFDLETTERS',
  payMode: 'Overschrijving / Bancontact / Contant',
  works: 'Beschrijf het probleem en het gevraagde werk',
  basis: 'Bv.: uurtarief, forfait, of prijs na vaststelling',
};

// ---------------------------------------------------------------------------
// 4b. STEPHANIE'S FILL GUIDE (one A4 page, French, printed and kept next to the PC)
// ---------------------------------------------------------------------------
// Written for Stephanie, who fills the invoice and prints it. She is not a bookkeeper, so this is
// help, never a warning notice. Every fact is traceable to research/26 or to the invoice itself.
// The only contact detail is the agency address that already exists in AGENTS.md. Nothing invented.
const GUIDE_TITLE_FR = 'GUIDE DE LA FACTURE';
const GUIDE_SUBTITLE_FR = "Comment remplir la facture Pro Débouchage. À garder près de l'ordinateur.";
const GUIDE_CLOSING_FR = "Une question sur un point ? Écrivez à Fady : hi@fady.be.";

const GUIDE_FR = [
  ['h', '1. Comment remplir'],
  // First, because it is what breaks on the very first attempt: a file that arrives by WhatsApp or
  // e-mail opens in Protected View, and until she enables editing the fields refuse text and the
  // checkboxes do not tick. She would think the document is broken.
  ['p', "Le fichier arrive par WhatsApp ou par e-mail, donc Word l'ouvre en mode protégé, avec une bande jaune en haut. Cliquez sur Activer la modification. Tant que ce n'est pas fait, les cases refusent le texte et les carrés ne se cochent pas. C'est normal, et c'est à faire une seule fois par fichier."],
  ['p', "La facture vide est le modèle : elle ne se remplit jamais. Pour chaque facture, faites d'abord Fichier > Enregistrer sous, puis remplissez la copie. Nommez-la avec le numéro et le nom du client, par exemple 1784 Dupont.docx. Ce dossier devient votre archive, celle que vous devez de toute façon garder dix ans."],
  ['p', 'Cliquez dans une case grise et tapez. Le texte gris disparaît dès que vous tapez.'],
  ['p', 'Appuyez sur la touche Tab pour passer à la case suivante.'],
  ['p', 'Les petits carrés se cochent quand vous cliquez dessus.'],
  ['p', "Les paragraphes de loi, en bas de la facture, ne se modifient pas. C'est voulu : ils protègent l'entreprise."],

  ['h', '2. Le numéro de facture'],
  ['p', "Vous continuez votre numérotation, celle que vous utilisez déjà."],
  ['p', "Dans l'ordre, sans trou. Jamais deux fois le même numéro. Un numéro par facture."],
  ['p', "Une erreur sur une facture déjà envoyée ? On ne la supprime pas et on ne la corrige pas. On fait une note de crédit, avec sa propre numérotation, qui reprend le numéro de la facture concernée."],

  ['h', '3. Le taux de TVA : 6 % ou 21 %'],
  ['p', "Trois questions. Trois fois oui, c'est 6 %."],
  ['li', 'Le bâtiment a plus de dix ans ?'],
  ['li', 'Il sert surtout de logement privé ?'],
  ['li', 'La facture va à la personne qui y habite ?'],
  ['p', "Un seul non, c'est 21 %. Un chantier avec les deux taux : vous utilisez les deux lignes du tableau, jamais une moyenne. Dans le doute, 21 % et vous demandez."],
  ['p', "Vidange de fosse septique seule, inspection caméra seule, pompage de cave seul : le taux n'est pas encore tranché. Demandez avant de facturer."],

  ['h', "4. Le mot à ne jamais écrire"],
  ['p', "Pour le travail à haute pression, écrivez curage ou débouchage. Le mot nettoyage peut faire passer le chantier à 21 %."],

  ['h', '5. Décrire le travail'],
  ['p', "Des vrais mots, une ligne par opération. Par exemple : Débouchage WC, furet électrique."],
  ['p', "L'adresse du bâtiment va dans le bloc Lieu d'intervention : c'est elle qui justifie le taux de TVA."],
  ['p', "Une seule ligne qui dit travaux ne suffit pas."],

  ['h', '6. Clients professionnels'],
  ['p', "Client belge avec un numéro de TVA : depuis janvier 2026, cette facture Word ne suffit plus. Elle passe par Peppol, comme vous le faites déjà."],
  ['p', 'Particuliers et syndics : cette facture Word, sur papier ou en PDF.'],

  ['h', '7. Quand facturer'],
  ['p', "Chaque chantier a sa facture, même un petit paiement en espèces la nuit. Pas d'exception, pas de montant minimum."],
  ['p', "Au plus tard le 15 du mois qui suit le mois du travail. Le plus simple : la même semaine."],

  ['h', '8. À garder'],
  ['p', "Les paiements en espèces sont plafonnés à 3.000 euros par chantier. Pour le reste, votre dossier de factures est déjà l'archive des dix ans."],
];

// ---------------------------------------------------------------------------
// 5. THE LABELS
// ---------------------------------------------------------------------------
const LABELS_FR = {
  lang: 'fr-BE',
  titleInvoice: 'FACTURE',
  titleOrder: "BON D'INTERVENTION",
  titleCgv: 'CONDITIONS GÉNÉRALES',

  invoiceNo: 'N° de facture',
  invoiceDate: 'Date de la facture',
  workDate: "Date de l'intervention",
  dueLabel: 'Échéance',
  dueValue: 'Payable à réception',
  acompteLabel: 'Acompte(s) déjà facturé(s)',
  acompteHint: "laisser vide s'il n'y a pas eu d'acompte",

  billedTo: 'FACTURÉ À',
  client: 'CLIENT',
  fName: 'Nom',
  fAddress: 'Adresse',
  fPostCity: 'Code postal et commune',
  fPhone: 'Téléphone',
  fVat: "N° de TVA (si le client est une entreprise)",
  place: "LIEU D'INTERVENTION",
  sameAddress: 'Même adresse que la facturation',
  otherAddress: 'Autre adresse',
  placeNote: "L'adresse du bâtiment justifie le taux de TVA appliqué.",

  colDesc: 'Description du travail (précise : Débouchage WC, furet électrique)',
  colQty: 'Qté',
  colUnit: 'PU HTVA',
  colVat: 'TVA',
  colLine: 'Total HTVA',

  base: 'Base imposable',
  rate: 'Taux',
  vatAmount: 'Montant TVA',
  totalNet: 'Total HTVA',
  totalVat: 'Total TVA',
  totalDue: 'TOTAL À PAYER (TVAC)',

  paymentHead: 'PAIEMENT',
  payMode: 'Mode de paiement',
  payLine: PAYMENT_FR,
  lateLine: LATE_PAYMENT_FR,

  legalHead: 'MENTION LÉGALE OBLIGATOIRE',
  vat6: VAT_6_DECLARATION_FR,
  reverseNote: "Paragraphe pour les clients professionnels assujettis. À supprimer quand le client est un particulier.",
  reverse: REVERSE_CHARGE_FR,
  cgvRef: 'Conditions générales : jointes à ce document (pages 3 et suivantes) et publiées sur prodebouchage24.be/fr/conditions-generales.',

  // The work order is used when it is useful, not on every job. When it is used it is signed first.
  orderNote: "Ce bon est utilisé quand c'est utile. Dans ce cas il est signé AVANT le début des travaux et le client en reçoit une copie.",
  dateLabel: 'Date',
  hourLabel: 'Heure',
  quoteRef: 'N° de devis ou de facture lié',
  urgentHead: 'TRAVAUX URGENTS DEMANDÉS',
  priceHead: 'PRIX ET SUPPLÉMENTS',
  priceAnnounced: 'Prix annoncé au téléphone et confirmé sur place',
  priceBasis: 'Ou base de calcul si le prix exact dépend du constat sur place',
  priceUnit: ' € TVAC',
  surchargeHead: "Suppléments applicables (cocher si d'application)",
  surchargeEvening: 'Soir ou samedi : + 50 %',
  surchargeNight: 'Nuit, dimanche ou jour férié : + 75 %',
  noFix: 'Si rien ne peut être débouché, seul le déplacement de 60 € TVAC est dû.',
  declHead: 'DÉCLARATIONS DU CLIENT',
  decl1: DECL_URGENT_FR,
  decl2: DECL_IMMEDIATE_FR,
  decl3: DECL_CGV_FR,
  sigClient: 'LE CLIENT',
  sigCompany: 'POUR ' + COMPANY_FR,
  sigName: 'Nom en majuscules',
  sigDate: 'Date',
  sigLine: '« Bon pour accord », date et signature',

  guideTitle: GUIDE_TITLE_FR,
  guideSubtitle: GUIDE_SUBTITLE_FR,
  guideClosing: GUIDE_CLOSING_FR,
  guide: GUIDE_FR,

  cgvIntro: COMPANY_FR + " · Version du 26 août 2026. Elles s'appliquent à toute intervention commandée à partir de cette date.",
};

const LABELS_NL = {
  lang: 'nl-BE',
  titleInvoice: 'FACTUUR',
  titleOrder: 'WERKBON',
  titleCgv: 'ALGEMENE VOORWAARDEN',

  invoiceNo: 'Factuurnummer',
  invoiceDate: 'Factuurdatum',
  workDate: 'Datum van de interventie',
  dueLabel: 'Vervaldag',
  dueValue: 'Betaalbaar bij ontvangst',
  acompteLabel: 'Reeds gefactureerd voorschot',
  acompteHint: 'laat leeg als er geen voorschot was',

  billedTo: 'GEFACTUREERD AAN',
  client: 'KLANT',
  fName: 'Naam',
  fAddress: 'Adres',
  fPostCity: 'Postcode en gemeente',
  fPhone: 'Telefoon',
  fVat: 'Btw-nummer (als de klant een onderneming is)',
  place: 'PLAATS VAN DE INTERVENTIE',
  sameAddress: 'Zelfde adres als de facturatie',
  otherAddress: 'Ander adres',
  placeNote: 'Het adres van het gebouw verantwoordt het toegepaste btw-tarief.',

  colDesc: 'Omschrijving van het werk (precies: Ontstoppen wc, elektrische veer)',
  colQty: 'Aantal',
  colUnit: 'Prijs excl. btw',
  colVat: 'Btw',
  colLine: 'Totaal excl. btw',

  base: 'Maatstaf van heffing',
  rate: 'Tarief',
  vatAmount: 'Btw-bedrag',
  totalNet: 'Totaal excl. btw',
  totalVat: 'Totaal btw',
  totalDue: 'TE BETALEN (incl. btw)',

  paymentHead: 'BETALING',
  payMode: 'Wijze van betaling',
  payLine: PAYMENT_NL,
  lateLine: LATE_PAYMENT_NL,

  legalHead: 'VERPLICHTE WETTELIJKE VERMELDING',
  vat6: VAT_6_DECLARATION_NL,
  reverseNote: 'Alinea voor btw-plichtige zakelijke klanten. Schrap ze als de klant een particulier is.',
  reverse: REVERSE_CHARGE_NL,
  cgvRef: 'Algemene voorwaarden: bij dit document gevoegd (pagina 3 en volgende) en gepubliceerd op prodebouchage24.be/nl/algemene-voorwaarden.',

  orderNote: 'Deze bon wordt gebruikt wanneer dat nuttig is. Dan wordt hij ondertekend VOOR de werken beginnen en krijgt de klant een kopie.',
  dateLabel: 'Datum',
  hourLabel: 'Uur',
  quoteRef: 'Nummer van de offerte of factuur',
  urgentHead: 'GEVRAAGDE DRINGENDE WERKEN',
  priceHead: 'PRIJS EN TOESLAGEN',
  priceAnnounced: 'Prijs aan de telefoon meegedeeld en ter plaatse bevestigd',
  priceBasis: 'Of berekeningsbasis als de juiste prijs afhangt van de vaststelling ter plaatse',
  priceUnit: ' € incl. btw',
  surchargeHead: 'Toepasselijke toeslagen (aankruisen indien van toepassing)',
  surchargeEvening: 'Avond of zaterdag: + 50 %',
  surchargeNight: 'Nacht, zondag of feestdag: + 75 %',
  noFix: 'Kan er niets ontstopt worden, dan is enkel de verplaatsing van 60 € incl. btw verschuldigd.',
  declHead: 'VERKLARINGEN VAN DE KLANT',
  decl1: DECL_URGENT_NL,
  decl2: DECL_IMMEDIATE_NL,
  decl3: DECL_CGV_NL,
  sigClient: 'DE KLANT',
  sigCompany: 'VOOR ' + COMPANY_NL,
  sigName: 'Naam in hoofdletters',
  sigDate: 'Datum',
  sigLine: '"Gelezen en goedgekeurd", datum en handtekening',

  cgvIntro: COMPANY_NL + ' · Versie van 26 augustus 2026. Zij gelden voor elke opdracht die vanaf die datum wordt gegeven.',
};

// ---------------------------------------------------------------------------
// 6. THE CONDITIONS GENERALES (pages 3+), the same text as the website's CGV pages
// ---------------------------------------------------------------------------
const CGV_FR = require('./cgv-invoice-fr.js');
const CGV_NL = require('./cgv-invoice-nl.js');

// ---------------------------------------------------------------------------
// 7. DESIGN TOKENS
// ---------------------------------------------------------------------------
const INK = '1B2733';        // headings and filled values
const BODY = '2C3A47';       // conditions body text
const MUTED = '6B7B8A';      // labels and the identity strip
const MUTED_A = '5A6B7A';    // layout A stacked letterhead
const TEAL = '27B5A4';       // the brand rule and the small block titles
const TEAL_SOFT = 'E4F4F1';  // the TOTAL row
const GREY_FILL = 'F2F6F5';  // every fill area
const RULE = 'D8DEE4';       // table borders
const WRITE_RULE = 'B9C4CD'; // the line you write on
const FONT = 'Arial';
const CHECK_FONT = 'MS Gothic';

const PAGE_W = 11906, PAGE_H = 16838, MARGIN = 907;
const CONTENT_W = 10080;
const SERVICE_ROWS = 6;

// ---------------------------------------------------------------------------
// 8. XML PRIMITIVES
// ---------------------------------------------------------------------------
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// w:rPr children must come in schema order: rStyle, rFonts, b, bCs, i, iCs, color, spacing, sz, szCs.
function rPr(o = {}) {
  const f = o.font || FONT;
  return '<w:rPr>'
    + (o.rStyle ? `<w:rStyle w:val="${o.rStyle}"/>` : '')
    + `<w:rFonts w:ascii="${f}" w:hAnsi="${f}" w:eastAsia="${f}" w:cs="${f}"/>`
    + (o.bold ? '<w:b/><w:bCs/>' : '<w:b w:val="false"/><w:bCs w:val="false"/>')
    + (o.italic ? '<w:i/><w:iCs/>' : '<w:i w:val="false"/><w:iCs w:val="false"/>')
    + (o.color ? `<w:color w:val="${o.color}"/>` : '')
    + (o.track ? `<w:spacing w:val="${o.track}"/>` : '')
    + `<w:sz w:val="${o.size || 19}"/><w:szCs w:val="${o.size || 19}"/>`
    + '</w:rPr>';
}
const run = (text, o) => `<w:r>${rPr(o)}<w:t xml:space="preserve">${esc(text)}</w:t></w:r>`;

// w:pPr children in schema order: pBdr, shd, spacing, ind, jc.
function pPr(o = {}) {
  let s = '<w:pPr>';
  if (o.border) {
    s += '<w:pBdr>'
      + '<w:top w:val="none" w:color="FFFFFF" w:sz="0"/>'
      + '<w:left w:val="none" w:color="FFFFFF" w:sz="0"/>'
      + `<w:bottom w:val="single" w:color="${o.border}" w:sz="${o.borderSz || 4}"/>`
      + '<w:right w:val="none" w:color="FFFFFF" w:sz="0"/>'
      + '</w:pBdr>';
  }
  s += `<w:spacing w:before="${o.before || 0}" w:after="${o.after === undefined ? 0 : o.after}" w:line="${o.line || 240}" w:lineRule="auto"/>`;
  if (o.indent) s += `<w:ind w:left="${o.indent}" w:hanging="${o.hanging || 0}"/>`;
  if (o.align) s += `<w:jc w:val="${o.align}"/>`;
  s += '</w:pPr>';
  return s;
}
const para = (content, o = {}) => `<w:p>${pPr(o)}${content || ''}</w:p>`;
const textPara = (text, rop = {}, pop = {}) => para(run(text, rop), pop);
const pageBreak = () => `<w:p>${pPr({ after: 0 })}<w:r>${rPr({ size: 2 })}<w:br w:type="page"/></w:r></w:p>`;

const noBorders = () => '<w:tblBorders>'
  + ['top', 'left', 'bottom', 'right', 'insideH', 'insideV'].map(k => `<w:${k} w:val="none" w:color="FFFFFF" w:sz="0"/>`).join('')
  + '</w:tblBorders>';
const ruleBorders = () => '<w:tblBorders>'
  + ['top', 'left', 'bottom', 'right', 'insideH', 'insideV'].map(k => `<w:${k} w:val="single" w:color="${RULE}" w:sz="4"/>`).join('')
  + '</w:tblBorders>';

function tbl(cols, rows, o = {}) {
  return '<w:tbl><w:tblPr>'
    + `<w:tblW w:w="${cols.reduce((a, b) => a + b, 0)}" w:type="dxa"/>`
    + (o.bordered ? ruleBorders() : noBorders())
    + '<w:tblLayout w:type="fixed"/>'
    + '</w:tblPr>'
    + '<w:tblGrid>' + cols.map(w => `<w:gridCol w:w="${w}"/>`).join('') + '</w:tblGrid>'
    + rows.join('')
    + '</w:tbl>';
}
const tr = (cells, o = {}) => `<w:tr>${o.height ? `<w:trPr><w:trHeight w:val="${o.height}" w:hRule="atLeast"/></w:trPr>` : ''}${cells.join('')}</w:tr>`;

// A table cell MUST end with a paragraph. A cell whose last block is a nested table or a
// block-level content control is exactly what Word reports as "The file appears to be corrupted".
// This 1pt closing paragraph is invisible on the page and costs nothing.
const HAIRLINE_P = '<w:p><w:pPr><w:spacing w:before="0" w:after="0" w:line="20" w:lineRule="auto"/><w:rPr><w:sz w:val="2"/><w:szCs w:val="2"/></w:rPr></w:pPr></w:p>';
function cellBody(content) {
  const inner = content || para('', { after: 0 });
  return inner.endsWith('</w:p>') ? inner : inner + HAIRLINE_P;
}

// w:tcPr children in schema order: tcW, gridSpan, tcBorders, shd, tcMar, vAlign.
function tc(width, content, o = {}) {
  const m = o.pad || [70, 110, 70, 110]; // top, left, bottom, right
  return '<w:tc><w:tcPr>'
    + `<w:tcW w:w="${width}" w:type="dxa"/>`
    + (o.span ? `<w:gridSpan w:val="${o.span}"/>` : '')
    + (o.bordered ? '<w:tcBorders>' + ['top', 'left', 'bottom', 'right'].map(k => `<w:${k} w:val="single" w:color="${RULE}" w:sz="4"/>`).join('') + '</w:tcBorders>' : '')
    + (o.fill ? `<w:shd w:val="clear" w:color="auto" w:fill="${o.fill}"/>` : '')
    + `<w:tcMar><w:top w:w="${m[0]}" w:type="dxa"/><w:left w:w="${m[1]}" w:type="dxa"/><w:bottom w:w="${m[2]}" w:type="dxa"/><w:right w:w="${m[3]}" w:type="dxa"/></w:tcMar>`
    + `<w:vAlign w:val="${o.vAlign || 'top'}"/>`
    + '</w:tcPr>'
    + cellBody(content)
    + '</w:tc>';
}

// ---------------------------------------------------------------------------
// 9. CONTENT CONTROLS
// ---------------------------------------------------------------------------
// Every w:id must be unique across the whole document: a duplicate makes Word declare the file
// corrupt and "repair" it. Ids are handed out by one counter and asserted unique before writing.
// NEVER emit <w:temporary/>: it deletes the control on the first keystroke and destroys tab order.
function newDoc() {
  return { nextId: 90000001, ids: [], placeholders: new Map(), controls: 0, checkboxes: 0 };
}
const slug = s => 'PDPH_' + crypto.createHash('sha1').update(s, 'utf8').digest('hex').slice(0, 12).toUpperCase();

function docPartFor(doc, text) {
  const name = slug(text);
  if (!doc.placeholders.has(name)) doc.placeholders.set(name, text);
  return name;
}

// A plain-text fill field. <w:text/> is what makes it PLAIN text: without it Word treats the control
// as rich text and Tab stops moving between fields. sdtLocked keeps the value editable and the
// control undeletable.
function field(doc, { alias, tag, placeholder, size = 19, bold = true, color = INK, align, suffix }) {
  const id = doc.nextId++; doc.ids.push(id); doc.controls++;
  const part = docPartFor(doc, placeholder);
  const inner = `<w:r>${rPr({ bold, size, rStyle: 'PlaceholderText' })}<w:t xml:space="preserve">${esc(placeholder)}</w:t></w:r>`;
  const sdt = '<w:sdt><w:sdtPr>'
    + rPr({ bold, size, color })
    + `<w:alias w:val="${esc(alias)}"/><w:tag w:val="${esc(tag)}"/><w:id w:val="${id}"/>`
    + '<w:lock w:val="sdtLocked"/>'
    + `<w:placeholder><w:docPart w:val="${part}"/></w:placeholder>`
    + '<w:showingPlcHdr/>'
    + '<w:text/>'
    + '</w:sdtPr>'
    + `<w:sdtContent>${inner}</w:sdtContent></w:sdt>`;
  return sdt + (suffix ? run(suffix, { bold, size, color }) : '');
}

// A real checkbox content control. The run inside sdtContent MUST carry MS Gothic or the glyph
// renders as an empty box.
function checkbox(doc, { alias, tag, size = 19 }) {
  const id = doc.nextId++; doc.ids.push(id); doc.checkboxes++;
  return '<w:sdt><w:sdtPr>'
    + rPr({ font: CHECK_FONT, size, color: INK })
    + `<w:alias w:val="${esc(alias)}"/><w:tag w:val="${esc(tag)}"/><w:id w:val="${id}"/>`
    + '<w:lock w:val="sdtLocked"/>'
    + '<w14:checkbox><w14:checked w14:val="0"/>'
    + '<w14:checkedState w14:val="2612" w14:font="MS Gothic"/>'
    + '<w14:uncheckedState w14:val="2610" w14:font="MS Gothic"/></w14:checkbox>'
    + '</w:sdtPr>'
    + `<w:sdtContent><w:r>${rPr({ font: CHECK_FONT, size, color: INK })}<w:t>☐</w:t></w:r></w:sdtContent></w:sdt>`;
}

// A block-level lock around law text: the content cannot be edited, so a stray keystroke cannot
// silently break it. contentLocked still lets the whole block be DELETED, which is what makes the
// reverse-charge paragraph removable for a private customer.
function lockedBlock(doc, alias, body) {
  const id = doc.nextId++; doc.ids.push(id);
  return '<w:sdt><w:sdtPr>'
    + `<w:alias w:val="${esc(alias)}"/><w:tag w:val="${esc(alias)}"/><w:id w:val="${id}"/>`
    + '<w:lock w:val="contentLocked"/>'
    + '</w:sdtPr>'
    + `<w:sdtContent>${body}</w:sdtContent></w:sdt>`;
}

// ---------------------------------------------------------------------------
// 10. THE BUILDING BLOCKS OF THE PAGE
// ---------------------------------------------------------------------------
const LABEL = { size: 14, color: MUTED };
const BLOCK_TITLE = { size: 15, bold: true, color: TEAL, track: 24 };
const SMALL = { size: 14, color: BODY };
const TINY = { size: 13, color: MUTED };

// label + the line you write on, with the control sitting on that line
function fillRow(doc, label, opts) {
  return textPara(label, LABEL, { after: 20 })
    + para(field(doc, opts), { border: WRITE_RULE, before: 110, after: 30 });
}

// Every drawing in the document needs its OWN wp:docPr id. Three identical logos with id="1" is
// one of the things Word calls a corrupt file.
let logoSeq = 0;
function logoCell(width, emuW, emuH) {
  const gid = ++logoSeq;
  const drawing = '<w:r><w:drawing>'
    + '<wp:inline distT="0" distB="0" distL="0" distR="0">'
    + `<wp:extent cx="${emuW}" cy="${emuH}"/><wp:effectExtent l="0" t="0" r="0" b="0"/>`
    + `<wp:docPr id="${gid}" name="Logo ${gid}" descr="Pro Debouchage"/>`
    + '<wp:cNvGraphicFramePr><a:graphicFrameLocks xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" noChangeAspect="1"/></wp:cNvGraphicFramePr>'
    + '<a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">'
    + '<a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture">'
    + '<pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture">'
    + `<pic:nvPicPr><pic:cNvPr id="${gid}" name="logo${gid}"/><pic:cNvPicPr><a:picLocks noChangeAspect="1" noChangeArrowheads="1"/></pic:cNvPicPr></pic:nvPicPr>`
    + '<pic:blipFill><a:blip r:embed="rIdLogo" cstate="none"/><a:srcRect/><a:stretch><a:fillRect/></a:stretch></pic:blipFill>'
    + `<pic:spPr bwMode="auto"><a:xfrm><a:off x="0" y="0"/><a:ext cx="${emuW}" cy="${emuH}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr>`
    + '</pic:pic></a:graphicData></a:graphic></wp:inline></w:drawing></w:r>';
  return tc(width, para(drawing, { after: 0 }), { pad: [0, 0, 0, 110], vAlign: 'bottom' });
}

// Layout A stacks the identity over five lines. The lines are DERIVED from the one identity
// constant, so the two layouts can never drift apart.
function stackedIdentity(identity) {
  const p = identity.split(' · ');
  return [p[0], p[1], p[2] + ' · ' + p[3], p[4] + ' · ' + p[5], p[6]];
}

function header(layout, title, identity) {
  if (layout === 'B') {
    return tbl([3400, 6680], [tr([
      logoCell(3400, 940000, 587500),
      tc(6680, textPara(title, { bold: true, size: 54, color: INK, track: 10 }, { align: 'right', after: 0 }), { pad: [70, 110, 0, 0], vAlign: 'bottom' }),
    ])])
      + para('', { border: TEAL, borderSz: 12, after: 70 })
      + textPara(identity, { size: 14, color: MUTED }, { after: 40 })
      + para('', { border: RULE, after: 140 });
  }
  // Layout A: logo left, the identity stacked and right-aligned, then the big title over the rule.
  const lines = stackedIdentity(identity);
  const letterhead = textPara(lines[0], { bold: true, size: 20, color: INK }, { align: 'right', after: 20 })
    + lines.slice(1).map((l, i) => textPara(l, { size: 16, color: MUTED_A }, { align: 'right', after: i === lines.length - 2 ? 60 : 20 })).join('');
  return tbl([4200, 5880], [tr([
    logoCell(4200, 1080000, 642800),
    tc(5880, letterhead, { pad: [60, 100, 60, 100] }),
  ], { height: 1150 })])
    + textPara(title, { bold: true, size: 44, color: INK }, { border: TEAL, borderSz: 12, before: 100, after: 120 });
}

// ---------------------------------------------------------------------------
// 11. PAGE 1, THE INVOICE
// ---------------------------------------------------------------------------
function pageInvoice(doc, layout, L, PH, identity) {
  const meta = tbl([2520, 2520, 2520, 2520], [
    tr([
      tc(2520, textPara(L.invoiceNo, LABEL, { after: 25 })
        + para(field(doc, { alias: L.invoiceNo, tag: 'invoice_number', placeholder: PH.invoiceNumber }), { after: 0 }),
        { fill: GREY_FILL, bordered: true }),
      tc(2520, textPara(L.invoiceDate, LABEL, { after: 25 })
        + para(field(doc, { alias: L.invoiceDate, tag: 'invoice_date', placeholder: PH.date }), { after: 0 }),
        { fill: GREY_FILL, bordered: true }),
      tc(2520, textPara(L.workDate, LABEL, { after: 25 })
        + para(field(doc, { alias: L.workDate, tag: 'work_date', placeholder: PH.date }), { after: 0 }),
        { fill: GREY_FILL, bordered: true }),
      tc(2520, textPara(L.dueLabel, LABEL, { after: 25 })
        + textPara(L.dueValue, { bold: true, size: 19, color: INK }, { after: 0 }),
        { fill: GREY_FILL, bordered: true }),
    ], { height: 500 }),
    // research/26 section 2: a later invoice must reference the acompte invoice.
    tr([
      tc(CONTENT_W, para(run(L.acompteLabel, LABEL) + run('   (' + L.acompteHint + ')', TINY), { after: 20 })
        + para(field(doc, { alias: L.acompteLabel, tag: 'acompte_reference', placeholder: PH.acompte, bold: false }), { border: WRITE_RULE, before: 90, after: 20 }),
        { fill: GREY_FILL, bordered: true, span: 4 }),
    ]),
  ], { bordered: true });

  const left = textPara(L.billedTo, BLOCK_TITLE, { after: 50 })
    + fillRow(doc, L.fName, { alias: L.fName, tag: 'client_name', placeholder: PH.name })
    + fillRow(doc, L.fAddress, { alias: L.fAddress, tag: 'client_address', placeholder: PH.street })
    + fillRow(doc, L.fPostCity, { alias: L.fPostCity, tag: 'client_postcity', placeholder: PH.postCity })
    + fillRow(doc, L.fPhone, { alias: L.fPhone, tag: 'client_phone', placeholder: PH.phone })
    + fillRow(doc, L.fVat, { alias: L.fVat, tag: 'client_vat', placeholder: PH.vat });

  const right = textPara(L.place, BLOCK_TITLE, { after: 50 })
    + para(checkbox(doc, { alias: L.sameAddress, tag: 'place_same' }) + run('  ' + L.sameAddress + '     ', SMALL)
      + checkbox(doc, { alias: L.otherAddress, tag: 'place_other' }) + run('  ' + L.otherAddress, SMALL), { after: 60 })
    + fillRow(doc, L.fAddress, { alias: L.place + ' / ' + L.fAddress, tag: 'place_address', placeholder: PH.street })
    + fillRow(doc, L.fPostCity, { alias: L.place + ' / ' + L.fPostCity, tag: 'place_postcity', placeholder: PH.postCity })
    + textPara(L.placeNote, TINY, { before: 40, after: 0 });

  const parties = tbl([4980, 120, 4980], [tr([
    tc(4980, left, { fill: GREY_FILL, bordered: true, pad: [80, 150, 80, 150] }),
    tc(120, null),
    tc(4980, right, { bordered: true, pad: [80, 150, 80, 150] }),
  ])]);

  // The service table. Six blank rows, one control per cell, in reading order so Word's Tab moves
  // left to right then down. No VAT rate is ever hard-coded on a line: the TVA cell is fillable.
  const head = tr([
    tc(5140, textPara(L.colDesc, { size: 14, bold: true, color: INK }, { after: 0 }), { fill: GREY_FILL, bordered: true }),
    tc(900, textPara(L.colQty, { size: 14, bold: true, color: INK }, { align: 'center', after: 0 }), { fill: GREY_FILL, bordered: true }),
    tc(1560, textPara(L.colUnit, { size: 14, bold: true, color: INK }, { align: 'right', after: 0 }), { fill: GREY_FILL, bordered: true }),
    tc(900, textPara(L.colVat, { size: 14, bold: true, color: INK }, { align: 'center', after: 0 }), { fill: GREY_FILL, bordered: true }),
    tc(1580, textPara(L.colLine, { size: 14, bold: true, color: INK }, { align: 'right', after: 0 }), { fill: GREY_FILL, bordered: true }),
  ]);
  const lines = [];
  for (let i = 1; i <= SERVICE_ROWS; i++) {
    lines.push(tr([
      tc(5140, para(field(doc, { alias: L.colDesc + ' ' + i, tag: 'line' + i + '_desc', placeholder: PH_BLANK, bold: false }), { after: 0 }), { bordered: true }),
      tc(900, para(field(doc, { alias: L.colQty + ' ' + i, tag: 'line' + i + '_qty', placeholder: PH_BLANK, bold: false, align: 'center' }), { align: 'center', after: 0 }), { bordered: true }),
      tc(1560, para(field(doc, { alias: L.colUnit + ' ' + i, tag: 'line' + i + '_unit', placeholder: PH_BLANK, bold: false }), { align: 'right', after: 0 }), { bordered: true }),
      tc(900, para(field(doc, { alias: L.colVat + ' ' + i, tag: 'line' + i + '_vat', placeholder: PH_BLANK, bold: false }), { align: 'center', after: 0 }), { bordered: true }),
      tc(1580, para(field(doc, { alias: L.colLine + ' ' + i, tag: 'line' + i + '_total', placeholder: PH_BLANK, bold: false }), { align: 'right', after: 0 }), { bordered: true }),
    ], { height: 255 }));
  }
  const services = tbl([5140, 900, 1560, 900, 1580], [head, ...lines], { bordered: true });

  // Totals. Hand-typed controls, never a { =SUM(ABOVE) } field: formula fields do not work at all in
  // Word for the web and print a stale value in desktop Word unless F9 is pressed.
  const money = (alias, tag) => para(field(doc, { alias, tag, placeholder: PH_BLANK, bold: false }) + run(' €', { size: 19, color: INK }), { align: 'right', after: 0 });
  const totals = tbl([2600, 1000, 1740], [
    tr([
      tc(2600, textPara(L.base, { size: 14, bold: true, color: INK }, { after: 0 }), { fill: GREY_FILL, bordered: true }),
      tc(1000, textPara(L.rate, { size: 14, bold: true, color: INK }, { align: 'center', after: 0 }), { fill: GREY_FILL, bordered: true }),
      tc(1740, textPara(L.vatAmount, { size: 14, bold: true, color: INK }, { align: 'right', after: 0 }), { fill: GREY_FILL, bordered: true }),
    ]),
    tr([
      tc(2600, money(L.base + ' 6 %', 'base_6'), { bordered: true }),
      tc(1000, textPara('6 %', { size: 19, color: INK }, { align: 'center', after: 0 }), { bordered: true }),
      tc(1740, money(L.vatAmount + ' 6 %', 'vat_6'), { bordered: true }),
    ], { height: 265 }),
    tr([
      tc(2600, money(L.base + ' 21 %', 'base_21'), { bordered: true }),
      tc(1000, textPara('21 %', { size: 19, color: INK }, { align: 'center', after: 0 }), { bordered: true }),
      tc(1740, money(L.vatAmount + ' 21 %', 'vat_21'), { bordered: true }),
    ], { height: 265 }),
    tr([
      tc(3600, textPara(L.totalNet, { size: 15, color: INK }, { align: 'right', after: 0 }), { bordered: true, span: 2 }),
      tc(1740, money(L.totalNet, 'total_net'), { bordered: true }),
    ], { height: 265 }),
    tr([
      tc(3600, textPara(L.totalVat, { size: 15, color: INK }, { align: 'right', after: 0 }), { bordered: true, span: 2 }),
      tc(1740, money(L.totalVat, 'total_vat'), { bordered: true }),
    ], { height: 265 }),
    tr([
      tc(3600, textPara(L.totalDue, { size: 17, bold: true, color: INK }, { align: 'right', after: 0 }), { bordered: true, span: 2, fill: TEAL_SOFT }),
      tc(1740, para(field(doc, { alias: L.totalDue, tag: 'total_due', placeholder: PH_BLANK }) + run(' €', { bold: true, size: 19, color: INK }), { align: 'right', after: 0 }), { bordered: true, fill: TEAL_SOFT }),
    ], { height: 300 }),
  ], { bordered: true });

  const payModeBox = tbl([4740], [tr([
    tc(4740, textPara(L.payMode, LABEL, { after: 20 })
      + para(field(doc, { alias: L.payMode, tag: 'payment_mode', placeholder: PH.payMode, bold: false }), { border: WRITE_RULE, before: 150, after: 40 }),
      { fill: GREY_FILL, bordered: true, pad: [90, 140, 90, 140] }),
  ])]);

  // The payment block rides in the empty column beside the totals. Full width under them it pushed
  // the mandatory legal mentions onto page 2, and the invoice must be one page.
  const payBlock = payModeBox
    + textPara(L.paymentHead, BLOCK_TITLE, { before: 140, after: 40 })
    + textPara(L.payLine, { size: 13, color: BODY }, { after: 40, line: 195 })
    + textPara(L.lateLine, { size: 13, color: BODY }, { after: 0, line: 195 });

  const bottom = tbl([4740, 5340], [tr([
    tc(4740, payBlock, { pad: [0, 0, 0, 160], vAlign: 'top' }),
    tc(5340, totals, { pad: [0, 0, 0, 0] }),
  ])]);

  // The mandatory legal mentions. Both blocks are contentLocked: the text cannot be edited, but the
  // reverse-charge block as a whole can still be deleted for a private customer, which is what the
  // grey instruction line above it tells the user to do.
  const legal = textPara(L.legalHead, BLOCK_TITLE, { before: 120, after: 50 })
    + lockedBlock(doc, 'Declaration TVA 6 %', textPara(L.vat6, { size: 13, color: BODY }, { align: 'both', after: 70, line: 190 }))
    + lockedBlock(doc, 'Autoliquidation B2B',
      textPara(L.reverseNote, { size: 12, italic: true, color: MUTED }, { after: 30, line: 200 })
      + textPara(L.reverse, { size: 13, color: BODY }, { align: 'both', after: 70, line: 190 }));

  return header(layout, L.titleInvoice, identity)
    + meta
    + para('', { after: 110 })
    + parties
    + para('', { after: 90 })
    + services
    + para('', { after: 90 })
    + bottom
    + legal
    + textPara(L.cgvRef, TINY, { after: 0, line: 200 });
}

// ---------------------------------------------------------------------------
// 12. PAGE 2, THE WORK ORDER
// ---------------------------------------------------------------------------
function pageWorkOrder(doc, layout, L, PH, identity) {
  // The block on the left of the work order is the CLIENT, not "billed to": nothing is billed here.
  const left = textPara(L.client, BLOCK_TITLE, { after: 50 })
    + fillRow(doc, L.fName, { alias: 'Bon / ' + L.fName, tag: 'wo_client_name', placeholder: PH.name })
    + fillRow(doc, L.fAddress, { alias: 'Bon / ' + L.fAddress, tag: 'wo_client_address', placeholder: PH.street })
    + fillRow(doc, L.fPostCity, { alias: 'Bon / ' + L.fPostCity, tag: 'wo_client_postcity', placeholder: PH.postCity })
    + fillRow(doc, L.fPhone, { alias: 'Bon / ' + L.fPhone, tag: 'wo_client_phone', placeholder: PH.phone });

  const right = textPara(L.place, BLOCK_TITLE, { after: 50 })
    + fillRow(doc, L.dateLabel, { alias: 'Bon / ' + L.dateLabel, tag: 'wo_date', placeholder: PH.date })
    + fillRow(doc, L.hourLabel, { alias: 'Bon / ' + L.hourLabel, tag: 'wo_hour', placeholder: PH.hour })
    + fillRow(doc, L.fAddress, { alias: 'Bon / ' + L.place, tag: 'wo_place_address', placeholder: PH.street })
    + fillRow(doc, L.quoteRef, { alias: L.quoteRef, tag: 'wo_reference', placeholder: PH_BLANK });

  const parties = tbl([4980, 120, 4980], [tr([
    tc(4980, left, { fill: GREY_FILL, bordered: true, pad: [80, 150, 80, 150] }),
    tc(120, null),
    tc(4980, right, { bordered: true, pad: [80, 150, 80, 150] }),
  ])]);

  const works = tbl([CONTENT_W], [tr([
    tc(CONTENT_W, para(field(doc, { alias: L.urgentHead, tag: 'wo_works', placeholder: PH.works, bold: false }), { after: 0 }), { bordered: true, pad: [80, 150, 80, 150] }),
  ], { height: 900 })], { bordered: true });

  const price = tbl([4980, 120, 4980], [tr([
    tc(4980, textPara(L.priceAnnounced, LABEL, { after: 20 })
      + para(field(doc, { alias: L.priceAnnounced, tag: 'wo_price', placeholder: PH_BLANK, suffix: L.priceUnit }), { border: WRITE_RULE, before: 150, after: 40 }),
      { fill: GREY_FILL, bordered: true, pad: [90, 140, 90, 140] }),
    tc(120, null),
    tc(4980, textPara(L.priceBasis, LABEL, { after: 20 })
      + para(field(doc, { alias: L.priceBasis, tag: 'wo_price_basis', placeholder: PH.basis, bold: false }), { border: WRITE_RULE, before: 150, after: 40 }),
      { bordered: true, pad: [90, 140, 90, 140] }),
  ])]);

  const surcharges = textPara(L.surchargeHead, LABEL, { before: 140, after: 40 })
    + para(checkbox(doc, { alias: L.surchargeEvening, tag: 'wo_surcharge_evening' }) + run('   ' + L.surchargeEvening, SMALL), { after: 30 })
    + para(checkbox(doc, { alias: L.surchargeNight, tag: 'wo_surcharge_night' }) + run('   ' + L.surchargeNight, SMALL), { after: 40 })
    + textPara(L.noFix, TINY, { after: 0 });

  const decl = (text, tag, alias) => tbl([420, 9660], [tr([
    tc(420, para(checkbox(doc, { alias, tag }), { after: 0 }), { pad: [40, 0, 40, 0] }),
    tc(9660, lockedBlock(doc, alias, textPara(text, { size: 13, color: BODY }, { align: 'both', after: 0, line: 200 })), { pad: [40, 60, 40, 0] }),
  ])]);

  const sigCell = (title, who) => textPara(title, BLOCK_TITLE, { after: 50 })
    + fillRow(doc, L.sigName, { alias: title + ' / ' + L.sigName, tag: who + '_name', placeholder: PH.upperName })
    + fillRow(doc, L.sigDate, { alias: title + ' / ' + L.sigDate, tag: who + '_date', placeholder: PH.date })
    + textPara(L.sigLine, LABEL, { before: 60, after: 20 })
    // Signed by pen: this stays an empty bordered paragraph, never a content control.
    + para('', { border: WRITE_RULE, before: 420, after: 40 });

  const signatures = tbl([4980, 120, 4980], [tr([
    tc(4980, sigCell(L.sigClient, 'sign_client'), { fill: GREY_FILL, bordered: true, pad: [80, 150, 80, 150] }),
    tc(120, null),
    tc(4980, sigCell(L.sigCompany, 'sign_company'), { bordered: true, pad: [80, 150, 80, 150] }),
  ])]);

  return pageBreak()
    + header(layout, L.titleOrder, identity)
    + textPara(L.orderNote, TINY, { after: 160, line: 200 })
    + parties
    + textPara(L.urgentHead, BLOCK_TITLE, { before: 160, after: 60 })
    + works
    + textPara(L.priceHead, BLOCK_TITLE, { before: 160, after: 60 })
    + price
    + surcharges
    + textPara(L.declHead, BLOCK_TITLE, { before: 160, after: 60 })
    + decl(L.decl1, 'wo_decl_urgent', 'Declaration travaux urgents')
    + decl(L.decl2, 'wo_decl_immediate', 'Declaration execution immediate')
    + decl(L.decl3, 'wo_decl_cgv', 'Declaration acceptation des conditions')
    + para('', { after: 120 })
    + signatures;
}

// ---------------------------------------------------------------------------
// 13. PAGES 3+, THE CONDITIONS
// ---------------------------------------------------------------------------
function pageConditions(doc, L, cgv) {
  const band = tbl([CONTENT_W], [tr([
    tc(CONTENT_W, textPara(L.titleCgv, { bold: true, size: 30, color: INK, track: 10 }, { after: 40 })
      + textPara(L.cgvIntro, TINY, { after: 0 }),
      { fill: GREY_FILL, bordered: true, pad: [140, 160, 140, 160] }),
  ])], { bordered: true });

  // One lock per article: heading plus its paragraphs, so a stray keystroke cannot rewrite a clause.
  const out = [];
  let buf = [];
  const flush = () => { if (buf.length) { out.push(lockedBlock(doc, 'Conditions ' + (out.length + 1), buf.join(''))); buf = []; } };
  for (const [kind, text] of cgv) {
    if (kind === 'h') { flush(); buf.push(textPara(text, { bold: true, size: 17, color: INK }, { before: 200, after: 60, line: 210 })); }
    else if (kind === 'li') buf.push(para(run('·', { size: 14, color: BODY }) + run('   ' + text, { size: 14, color: BODY }), { align: 'both', after: 40, line: 200, indent: 280, hanging: 180 }));
    else buf.push(textPara(text, { size: 14, color: BODY }, { align: 'both', after: 60, line: 200 }));
  }
  flush();
  return pageBreak() + band + out.join('');
}

// ---------------------------------------------------------------------------
// 13b. THE FILL GUIDE, one page
// ---------------------------------------------------------------------------
// Same visual family as the invoice: the logo, the teal rule, Arial on the same colour ladder,
// the teal section titles. It is a helper sheet, so it carries no fill fields and no law text.
function pageGuide(doc, L) {
  const out = [];
  for (const [kind, text] of L.guide) {
    if (kind === 'h') out.push(textPara(text, { size: 17, bold: true, color: TEAL, track: 24 }, { before: 190, after: 55 }));
    else if (kind === 'li') out.push(para(run('·', { size: 18, color: BODY }) + run('   ' + text, { size: 18, color: BODY }), { after: 35, line: 215, indent: 320, hanging: 200 }));
    else out.push(textPara(text, { size: 18, color: BODY }, { after: 60, line: 215 }));
  }
  return tbl([3400, 6680], [tr([
    logoCell(3400, 940000, 587500),
    tc(6680, textPara(L.guideTitle, { bold: true, size: 36, color: INK, track: 10 }, { align: 'right', after: 0 }), { pad: [70, 110, 0, 0], vAlign: 'bottom' }),
  ])])
    + para('', { border: TEAL, borderSz: 12, after: 70 })
    + textPara(L.guideSubtitle, { size: 16, color: MUTED }, { after: 40 })
    + para('', { border: RULE, after: 120 })
    + out.join('')
    + textPara(L.guideClosing, { size: 17, bold: true, color: TEAL }, { before: 240, after: 0 });
}

// ---------------------------------------------------------------------------
// 14. THE PACKAGE
// ---------------------------------------------------------------------------
const NS = [
  'xmlns:wpc="http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas"',
  'xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"',
  'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"',
  'xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math"',
  'xmlns:wp14="http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing"',
  'xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing"',
  'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"',
  'xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml"',
  'xmlns:w15="http://schemas.microsoft.com/office/word/2012/wordml"',
  'xmlns:wpg="http://schemas.microsoft.com/office/word/2010/wordprocessingGroup"',
  'xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape"',
  'xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"',
  'xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"',
  'mc:Ignorable="w14 w15 wp14"',
].join(' ');

const sectPr = () => '<w:sectPr>'
  + `<w:pgSz w:w="${PAGE_W}" w:h="${PAGE_H}" w:orient="portrait"/>`
  + `<w:pgMar w:top="${MARGIN}" w:right="${MARGIN}" w:bottom="${MARGIN}" w:left="${MARGIN}" w:header="708" w:footer="708" w:gutter="0"/>`
  + '<w:cols w:num="1"/><w:docGrid w:linePitch="360"/></w:sectPr>';

function stylesXml(lang) {
  return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
    + `<w:styles ${NS}>`
    + '<w:docDefaults><w:rPrDefault><w:rPr>'
    + `<w:rFonts w:ascii="${FONT}" w:hAnsi="${FONT}" w:eastAsia="${FONT}" w:cs="${FONT}"/>`
    + `<w:color w:val="${INK}"/><w:sz w:val="19"/><w:szCs w:val="19"/>`
    // Language tagging. The source files carried none at all, so Word spell-checked French as English.
    + `<w:lang w:val="${lang}" w:eastAsia="${lang}" w:bidi="ar-SA"/>`
    + '</w:rPr></w:rPrDefault><w:pPrDefault/></w:docDefaults>'
    + '<w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/></w:style>'
    + '<w:style w:type="character" w:default="1" w:styleId="DefaultParagraphFont"><w:name w:val="Default Paragraph Font"/><w:uiPriority w:val="1"/><w:semiHidden/><w:unhideWhenUsed/></w:style>'
    + '<w:style w:type="table" w:default="1" w:styleId="TableNormal"><w:name w:val="Normal Table"/><w:uiPriority w:val="99"/><w:semiHidden/><w:unhideWhenUsed/></w:style>'
    // Placeholder text renders grey and stops being grey the moment the user types over it.
    + '<w:style w:type="character" w:styleId="PlaceholderText"><w:name w:val="Placeholder Text"/><w:basedOn w:val="DefaultParagraphFont"/><w:uiPriority w:val="99"/><w:semiHidden/><w:rPr><w:color w:val="808080"/></w:rPr></w:style>'
    + '</w:styles>';
}

// The glossary document. Without it Word silently falls back to "Click or tap here to enter text."
// and THAT string prints on the invoice. Every placeholder in the document has a docPart here.
function glossaryXml(placeholders) {
  const parts = [...placeholders.entries()].map(([name, text]) => {
    const g = crypto.createHash('md5').update(name).digest('hex').toUpperCase();
    const guid = `{${g.slice(0, 8)}-${g.slice(8, 12)}-${g.slice(12, 16)}-${g.slice(16, 20)}-${g.slice(20, 32)}}`;
    return '<w:docPart><w:docPartPr>'
      + `<w:name w:val="${name}"/>`
      + '<w:category><w:name w:val="General"/><w:gallery w:val="placeholder"/></w:category>'
      + '<w:types><w:type w:val="bbPlcHdr"/></w:types>'
      + '<w:behaviors><w:behavior w:val="content"/></w:behaviors>'
      + `<w:guid w:val="${guid}"/>`
      + '</w:docPartPr>'
      + `<w:docPartBody><w:p><w:r><w:t xml:space="preserve">${esc(text)}</w:t></w:r></w:p></w:docPartBody>`
      + '</w:docPart>';
  });
  return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
    + `<w:glossaryDocument ${NS}><w:docParts>${parts.join('')}</w:docParts></w:glossaryDocument>`;
}

const CONTENT_TYPES = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
  + '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">'
  + '<Default Extension="png" ContentType="image/png"/>'
  + '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>'
  + '<Default Extension="xml" ContentType="application/xml"/>'
  + '<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>'
  + '<Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>'
  + '<Override PartName="/word/settings.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml"/>'
  + '<Override PartName="/word/fontTable.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.fontTable+xml"/>'
  + '<Override PartName="/word/glossary/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml"/>'
  + '<Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>'
  + '<Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>'
  + '</Types>';

const ROOT_RELS = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
  + '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
  + '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>'
  + '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>'
  + '<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>'
  + '</Relationships>';

const DOC_RELS = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
  + '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
  + '<Relationship Id="rIdStyles" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>'
  + '<Relationship Id="rIdSettings" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings" Target="settings.xml"/>'
  + '<Relationship Id="rIdFonts" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/fontTable" Target="fontTable.xml"/>'
  + '<Relationship Id="rIdGlossary" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/glossaryDocument" Target="glossary/document.xml"/>'
  + '<Relationship Id="rIdLogo" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/logo.png"/>'
  + '</Relationships>';

// NO <w:documentProtection>. Word for the web opens a protected document READ-ONLY, and Fady
// reviews these files in the browser. Accident-prevention comes from per-control locking only.
const SETTINGS = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
  + `<w:settings ${NS}>`
  + '<w:defaultTabStop w:val="720"/>'
  + '<w:compat><w:compatSetting w:name="compatibilityMode" w:uri="http://schemas.microsoft.com/office/word" w:val="15"/></w:compat>'
  + '</w:settings>';

const FONT_TABLE = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
  + `<w:fonts ${NS}>`
  + `<w:font w:name="${FONT}"><w:family w:val="swiss"/><w:pitch w:val="variable"/></w:font>`
  + `<w:font w:name="${CHECK_FONT}"><w:family w:val="modern"/><w:pitch w:val="fixed"/></w:font>`
  + '</w:fonts>';

const coreXml = title => '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
  + '<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">'
  + `<dc:title>${esc(title)}</dc:title><dc:creator>PRO DEBOUCHAGE</dc:creator><cp:lastModifiedBy>PRO DEBOUCHAGE</cp:lastModifiedBy>`
  + '<dcterms:created xsi:type="dcterms:W3CDTF">2026-08-30T00:00:00Z</dcterms:created>'
  + '<dcterms:modified xsi:type="dcterms:W3CDTF">2026-08-30T00:00:00Z</dcterms:modified>'
  + '</cp:coreProperties>';

const APP_XML = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
  + '<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">'
  + '<Application>build-invoice.js</Application></Properties>';

// ---------------------------------------------------------------------------
// 15. A DETERMINISTIC ZIP WRITER (same input, byte-identical output, every run)
// ---------------------------------------------------------------------------
const CRC_TABLE = (() => {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c; }
  return t;
})();
function crc32(buf) {
  let c = -1;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xFF] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
}
const DOS_TIME = 0, DOS_DATE = 0x21; // 1980-01-01 00:00, fixed so re-runs are byte-identical

function zip(files) {
  const locals = [], central = [];
  let offset = 0;
  for (const [name, data] of files) {
    const nameBuf = Buffer.from(name, 'utf8');
    const raw = Buffer.isBuffer(data) ? data : Buffer.from(data, 'utf8');
    const comp = zlib.deflateRawSync(raw, { level: 9 });
    const crc = crc32(raw);
    const lh = Buffer.alloc(30);
    lh.writeUInt32LE(0x04034b50, 0); lh.writeUInt16LE(20, 4); lh.writeUInt16LE(0, 6); lh.writeUInt16LE(8, 8);
    lh.writeUInt16LE(DOS_TIME, 10); lh.writeUInt16LE(DOS_DATE, 12);
    lh.writeUInt32LE(crc, 14); lh.writeUInt32LE(comp.length, 18); lh.writeUInt32LE(raw.length, 22);
    lh.writeUInt16LE(nameBuf.length, 26); lh.writeUInt16LE(0, 28);
    locals.push(lh, nameBuf, comp);
    const cd = Buffer.alloc(46);
    cd.writeUInt32LE(0x02014b50, 0); cd.writeUInt16LE(20, 4); cd.writeUInt16LE(20, 6); cd.writeUInt16LE(0, 8); cd.writeUInt16LE(8, 10);
    cd.writeUInt16LE(DOS_TIME, 12); cd.writeUInt16LE(DOS_DATE, 14);
    cd.writeUInt32LE(crc, 16); cd.writeUInt32LE(comp.length, 20); cd.writeUInt32LE(raw.length, 24);
    cd.writeUInt16LE(nameBuf.length, 28); cd.writeUInt32LE(offset, 42);
    central.push(cd, nameBuf);
    offset += 30 + nameBuf.length + comp.length;
  }
  const cdBuf = Buffer.concat(central);
  const eocd = Buffer.alloc(22);
  eocd.writeUInt32LE(0x06054b50, 0);
  eocd.writeUInt16LE(files.length, 8); eocd.writeUInt16LE(files.length, 10);
  eocd.writeUInt32LE(cdBuf.length, 12); eocd.writeUInt32LE(offset, 16);
  return Buffer.concat([Buffer.concat(locals), cdBuf, eocd]);
}

// ---------------------------------------------------------------------------
// 16. BUILD
// ---------------------------------------------------------------------------
const HERE = __dirname;
// logo-pro-debouchage-2.png is the SAME 530x330 pixels as the first logo, recompressed on
// 2026-08-30: the RGB hidden under the 116653 fully transparent pixels was noise, so it is refilled
// from the pixel above and the scanline filters are chosen adaptively. 164703 bytes to 90082, and
// every rendered pixel decodes byte-identical (alpha diff 0, RGB diff 0, composite-on-white diff 0).
// The name is bumped per the changed-image rule in AGENTS.md section 7.
const LOGO = path.join(HERE, 'logo-pro-debouchage-2.png');

const CONFIG = {
  fr: { labels: LABELS_FR, ph: PH_FR, identity: IDENTITY_FR, cgv: CGV_FR },
  nl: { labels: LABELS_NL, ph: PH_NL, identity: IDENTITY_NL, cgv: CGV_NL },
};

function build(layout, lang) {
  if (!['A', 'B', 'GUIDE'].includes(layout)) throw new Error(`layout must be A, B or GUIDE, got ${layout}`);
  const c = CONFIG[lang];
  if (!c) throw new Error(`lang must be fr or nl, got ${lang}`);
  const isGuide = layout === 'GUIDE';
  if (isGuide && !c.labels.guide) throw new Error(`no fill guide is written for ${lang}`);
  if (!isGuide && !c.labels.reverse) throw new Error(`the ${lang.toUpperCase()} reverse-charge sentence is missing. It is a legally verbatim string: get the official wording, do not translate it. Refusing to emit ${lang}.`);

  const doc = newDoc();
  // logoSeq is module level, so it must be reset per document. Left running, a file's bytes would
  // depend on how many documents were built before it in the same process: rebuilding one target
  // alone would produce different bytes than rebuilding all of them. Found 2026-08-30.
  logoSeq = 0;
  const body = (isGuide
    ? pageGuide(doc, c.labels)
    : pageInvoice(doc, layout, c.labels, c.ph, c.identity)
      + pageWorkOrder(doc, layout, c.labels, c.ph, c.identity)
      + pageConditions(doc, c.labels, c.cgv))
    + sectPr();
  const documentXml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
    + `<w:document ${NS}><w:body>${body}</w:body></w:document>`;

  // Guards. These are the failures that ship silently.
  const seen = new Set();
  for (const id of doc.ids) { if (seen.has(id)) throw new Error(`duplicate w:id ${id}: Word would call the file corrupt`); seen.add(id); }
  const used = [...documentXml.matchAll(/<w:docPart w:val="([^"]+)"\/>/g)].map(m => m[1]);
  for (const name of used) if (!doc.placeholders.has(name)) throw new Error(`placeholder docPart ${name} has no entry in the glossary`);
  if (documentXml.includes('<w:temporary/>')) throw new Error('<w:temporary/> would delete the control on the first keystroke');
  if (documentXml.includes('documentProtection')) throw new Error('document protection would make the file read-only in Word for the web');
  if (!isGuide && !documentXml.includes(esc(c.labels.vat6))) throw new Error('the VAT 6 % declaration did not survive the build');
  // No em dashes, ever, in anything this project writes.
  // U+2014 is the em dash. It is written here as a unicode ESCAPE, never as the literal character:
  // the repo hook rejects the literal even inside the rule that forbids it. Behaviour is identical.
  if (documentXml.includes(String.fromCharCode(0x2014))) throw new Error('an em dash reached the output');

  const files = [
    ['[Content_Types].xml', CONTENT_TYPES],
    ['_rels/.rels', ROOT_RELS],
    ['docProps/core.xml', coreXml(isGuide ? `PRO DEBOUCHAGE ${c.labels.guideTitle}` : `PRO DEBOUCHAGE ${c.labels.titleInvoice} ${layout}`)],
    ['docProps/app.xml', APP_XML],
    ['word/document.xml', documentXml],
    ['word/_rels/document.xml.rels', DOC_RELS],
    ['word/styles.xml', stylesXml(c.labels.lang)],
    ['word/settings.xml', SETTINGS],
    ['word/fontTable.xml', FONT_TABLE],
    ['word/glossary/document.xml', glossaryXml(doc.placeholders)],
    ['word/media/logo.png', fs.readFileSync(LOGO)],
  ];
  return { buffer: zip(files), doc, documentXml };
}

// Fady chose LAYOUT B on 2026-08-30 (FACTURE on the right, beside the small logo), so B is simply
// "the invoice" and drops the letter from its name. Layout A, the tall centred letterhead, was the
// rejected candidate: its CODE PATH STAYS so the choice can be revisited, it is just not emitted by
// default. Build it on purpose with: node build-invoice.js A-fr
const TARGETS = {
  'facture-fr': ['B', 'fr', 'PRO-DEBOUCHAGE-facture-FR.docx'],
  'factuur-nl': ['B', 'nl', 'PRO-DEBOUCHAGE-factuur-NL.docx'],
  'guide-fr': ['GUIDE', 'fr', 'PRO-DEBOUCHAGE-guide-facture-FR.docx'],
  'A-fr': ['A', 'fr', 'PRO-DEBOUCHAGE-facture-A-FR.docx'],
};
const DEFAULT_TARGETS = ['facture-fr', 'factuur-nl', 'guide-fr'];
const OUTPUTS = DEFAULT_TARGETS.map(k => TARGETS[k]);

function main() {
  const keys = process.argv.slice(2);
  for (const k of keys) if (!TARGETS[k]) throw new Error(`unknown target ${k}. Known targets: ${Object.keys(TARGETS).join(', ')}`);
  const wanted = keys.length ? keys.map(k => TARGETS[k]) : OUTPUTS;
  for (const [layout, lang, name] of wanted) {
    const { buffer, doc } = build(layout, lang);
    const out = path.join(HERE, name);
    fs.writeFileSync(out, buffer);
    console.log(`wrote ${name}  ${buffer.length} bytes  layout ${layout} ${lang.toUpperCase()}  ${doc.controls} text fields + ${doc.checkboxes} checkboxes  ${doc.placeholders.size} placeholder docParts`);
  }

}

if (require.main === module) main();
module.exports = { build, IDENTITY_FR, IDENTITY_NL, VAT_6_DECLARATION_FR, VAT_6_DECLARATION_NL, REVERSE_CHARGE_FR, DECL_URGENT_FR, DECL_IMMEDIATE_FR, DECL_CGV_FR, INVOICE_NUMBER_PLACEHOLDER };
