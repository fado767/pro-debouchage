// The v2 page: the FR and NL copy objects plus ONE markup builder shared by the deployable site and the
// canvas artboards. English copy lives in copy-en.js. Design system: ../ds-bundle/styles.css.
// Consumers: build-site.js (writes site-v2/) and make-canvas.js (writes the *.dc.html artboards).
// canvas.json is hand-maintained, not generated.
const fs = require('fs'), path = require('path');
const here = __dirname;
let css = fs.readFileSync(path.join(here, '..', 'ds-bundle', 'styles.css'), 'utf8').replace(/@import[^\n]*\n/, '');
// Canvas renders in an iframe: load Archivo from Google Fonts there (the real site self-hosts). Same face, same weights.
const FONT_LINK = '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700;800;900&display=swap">';

const PHONE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8z"></path></svg>';
const WA = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 12 12 0 0 0 4.6 4c1.7.7 2.3.8 3.2.7a2.7 2.7 0 0 0 1.8-1.3c.2-.6.2-1.1.2-1.2s-.3-.3-.5-.4z"></path></svg>';
const STAR = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z"></path></svg>';
const CAMERA = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3L7.2 5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.2L15 3H9zm3 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"></path></svg>';
const TEL = 'tel:+32480649649';
// The three published languages, in switcher order. Endonyms: a language is named in its own language.
const LANGS = [['fr', 'FR', 'Français'], ['nl', 'NL', 'Nederlands'], ['en', 'EN', 'English']];
const stars = n => '<div class="stars" aria-label="' + n + '/5">' + STAR.repeat(n) + '</div>';
const nb = '&#8239;'; // narrow no-break space (FR)

const FR = {
  lang: 'fr-BE', dir: 'fr',
  wa: 'https://wa.me/32480649649?text=Bonjour%2C%20j%27ai%20un%20probl%C3%A8me%20de%20canalisation%20bouch%C3%A9e.%20Voici%20une%20photo%20et%20ma%20commune%20%3A%20',
  skip: 'Aller au contenu', langNav: 'Choisir la langue',
  callHeader: 'Appeler 0480 649 649', callBar: 'Appeler 0480 649 649', waBar: 'WhatsApp',
  carAria: 'Photos de nos interventions, faites défiler',
  chips: ['24h/24', 'Prix dit au téléphone', '30 ans de métier cumulés'],
  h1: `Ça remonte, ça déborde, ça pue${nb}? Appelez, on s'en occupe.`,
  sub: `Vous décrivez le problème, <span class="hl">on vous dit le prix au téléphone, et c'est ce prix-là que vous payez.</span> Confirmé à votre porte, avant la première minute de travail.`,
  callMain: 'Appeler 0480 649 649',
  waBtn: 'Envoyer une photo', under: 'Avec une photo, on vous aide plus vite.',
  collage: [['collage-van.webp', 'hc-van', 'Camionnette Pro Débouchage, le logo et le numéro sur le flanc.', 1600, 900],
    ['collage-job1.webp', 'hc-job1', `Technicien en tenue de protection devant la machine haute pression, à l'arrière de la camionnette.`, 800, 1000],
    ['collage-job2.webp', 'hc-job2', 'Technicien penché dans une chambre de visite devant une maison, la camionnette est garée dans la rue.', 770, 962]],
  // Hero ticker: ONE image per distinct scene on disk (several files are crops of the same photo;
  // checked visually 2026-08-24 night). [manifest key, alt, w, h]. The first 6 are mobile row A, the
  // last 5 mobile row B (desktop plays all 11 in this sequence). The two van shots (sunset, garden)
  // sit at positions 1 and 9 so they never meet, not even across the loop seam.
  ticker: [['tick-van.webp', 'La camionnette Pro Débouchage au lever du jour, le numéro 0480 649 649 sur le flanc.', 1200, 892],
    ['job-wc.webp', 'Technicien qui débouche un WC avec un furet, veste Pro Débouchage.', 1200, 1500],
    ['camera.webp', `Écran de la caméra d'inspection au-dessus d'un regard ouvert, l'intérieur du tuyau à l'écran.`, 1200, 1500],
    ['allee.webp', 'Allée pavée en cours de nettoyage haute pression, la bande claire est la partie nettoyée.', 1200, 1200],
    ['collage-job1.webp', `Technicien en tenue de protection devant la machine haute pression, à l'arrière de la camionnette.`, 800, 1000],
    ['siphon.webp', `Inspection d'un siphon de sol avec une caméra d'égout.`, 800, 1000],
    ['chambre.webp', `Ouverture d'une chambre de visite enterrée dans un jardin.`, 800, 1000],
    ['tick-drain.webp', 'Technicien qui passe le furet électrique dans un siphon de douche.', 800, 1066],
    ['collage-van.webp', 'La camionnette dans un jardin, le logo Pro Débouchage sur le flanc.', 1600, 900],
    ['collage-job2.webp', 'Technicien penché dans une chambre de visite devant une maison, la camionnette est garée dans la rue.', 770, 962],
    ['moniteur.webp', `Moniteur de la caméra d'inspection et technicien en tenue Pro Débouchage.`, 800, 1000]],
  // Mobile carousel, Fady's order 2026-08-24 night: van first, then machine, street chamber, floor
  // drain, tablet, blue hose, monitor, then the rest. Portrait and square only.
  carousel: [['car-van.webp', 'La camionnette Pro Débouchage, portes arrière ouvertes, prête pour l\'intervention.', 800, 1000],
    ['machine.webp', `Machine de curage haute pression Rioned installée à l'arrière de la camionnette.`, 1200, 1500],
    ['collage-job2.webp', 'Technicien penché dans une chambre de visite devant une maison, la camionnette est garée dans la rue.', 770, 962],
    ['siphon.webp', `Inspection d'un siphon de sol avec une caméra d'égout.`, 800, 1000],
    ['camera.webp', `Écran de la caméra d'inspection au-dessus d'un regard ouvert, l'intérieur du tuyau à l'écran.`, 1200, 1500],
    ['tick-drain.webp', 'Technicien qui passe le furet électrique dans un siphon de douche.', 800, 1066],
    ['moniteur.webp', `Moniteur de la caméra d'inspection et technicien en tenue Pro Débouchage.`, 800, 1000],
    ['job-wc.webp', 'Technicien qui débouche un WC avec un furet, veste Pro Débouchage.', 1200, 1500],
    ['chambre.webp', `Ouverture d'une chambre de visite enterrée dans un jardin.`, 800, 1000],
    ['allee.webp', 'Allée pavée en cours de nettoyage haute pression, la bande claire est la partie nettoyée.', 1200, 1200]],
  trust: ['24h/24, 7j/7, week-end et jours fériés', 'Prix dit au téléphone, confirmé à votre porte', 'Inspection caméra comprise', 'Inscrite à la BCE, BE 1027.454.187'],
  // Mobile ticker version: same four proofs, compressed to stay readable at ticker speed.
  trustShort: ['24h/24, 7j/7 et fériés', 'Prix dit au téléphone', 'Inspection caméra comprise', `BCE${nb}: BE 1027.454.187`],
  priceK: 'Les prix', priceH: `Combien ça coûte vraiment${nb}?`,
  priceIntro: `Les interventions les plus fréquentes sont dans cette liste. Pour le reste, vous avez le prix au téléphone, avant qu'on prenne la route.`,
  terms: 'TVA comprise. Déplacement et première heure compris. En semaine, de 7h à 18h.',
  prices: [['WC bouché', `129${nb}€`], ['Évier, lavabo ou douche', `119${nb}€`], ['Égout ou sterput bouché, haute pression', `199${nb}€`], [`Curage haute pression, jusqu'à 25 m`, `249${nb}€`], ['Pompage de cave inondée, première heure', `229${nb}€`]],
  priceBtn: 'Appeler', p4t: `Votre cas n'est pas dans la liste${nb}?`,
  p4: `Fosse septique, canalisation enterrée, gros chantiers${nb}: dites-nous le problème, vous avez le prix tout de suite, au téléphone.`,
  p4b: 'Appeler 0480 649 649',
  // The old five-line notes box left the section 2026-08-25 (Fady): surcharge, 60 € call-out and VAT
  // live in the FAQ, the camera value in the trust band and services; only the guarantee stays, as a band.
  guarH: `Garantie 1 mois sur le débouchage`,
  guarP: `Si la même canalisation se rebouche dans les 30 jours, on revient gratuitement.`,
  guarRing: 'GARANTIE',
  promise: 'Le prix annoncé au téléphone est le prix sur la facture.',
  stepK: 'Comment ça se passe', stepH: 'Quatre étapes, pas de surprise',
  steps: [['Vous appelez et vous décrivez le problème.', 'On pose deux ou trois questions. Une photo par WhatsApp aide.'], ['On vous dit le prix.', `Au téléphone, avant de bouger. Le soir et le week-end, la majoration est déjà dans le prix qu'on vous annonce.`], ['On vient avec la caméra et la haute pression.', `Vous recevez une heure d'arrivée, et on vous prévient si elle bouge.`], ['On confirme le prix à votre porte, puis on débouche.', `Si la situation est différente de ce que vous avez décrit, vous le savez avant, pas sur la facture.`]],
  servK: `Ce qu'on fait`, servH: 'Nos interventions',
  services: [['Débouchage urgent', 'WC, évier, douche, canalisation. On vient avec la haute pression et la caméra.', null, null],
    ['WC et évier bouchés', '', 'job-wc.webp', 'Technicien qui débouche un WC avec un furet, veste Pro Débouchage.'],
    ['Curage haute pression', 'On nettoie toute la canalisation, pas seulement le bouchon.', 'machine.webp', `Machine de curage haute pression Rioned installée à l'arrière de la camionnette.`],
    ['Inspection caméra', `On filme l'intérieur du tuyau et vous regardez l'écran avec nous. Comprise avec l'intervention.`, 'camera.webp', `Écran de la caméra d'inspection montrant l'intérieur d'une canalisation, avec le compteur de distance.`, 'Comprise'],
    ['Vidange de fosse septique', 'Vidange et contrôle. Sur rendez-vous.', null, null],
    ['Pompage de cave inondée', 'Pompage, nettoyage, et un rapport pour votre assurance si vous le demandez.', null, null]],
  servLink: 'Appeler 0480 649 649',
  whoK: 'Qui vient chez vous', whoH: 'Afrem, la camionnette et le matériel. Pas un numéro anonyme.',
  whoT: `Vous appelez, vous parlez à la personne qui organise l'intervention. C'est Afrem qui vient, dans la camionnette que vous voyez ici, avec la caméra d'inspection, la machine haute pression Rioned et la pompe. Une équipe de deux, 30 ans de métier à eux deux${nb}: immobilier, rénovation et plomberie. L'entreprise est assurée en RC professionnelle chez AG Insurance.`,
  vanAlt: 'Camionnette Pro Débouchage, Mercedes Vito grise, avec le numéro 0480 649 649 sur le flanc.', vanCap: 'La camionnette, telle qu\'elle arrive chez vous. Le numéro est dessus.',
  blocks: [['La caméra passe avant le marteau.', `On regarde d'abord avec la caméra. Casser est le dernier recours, et jamais sans votre accord. C'est pour cela qu'elle est comprise.`], [`Un rapport pour l'assurance, sur demande.`, `Demandez-le, et après l'inspection caméra on rédige un rapport que vous pouvez remettre à votre assurance, par exemple après un dégât des eaux.`], ['Une facture, chaque fois.', 'Virement, lien de paiement, ou liquide avec un reçu TVA remis sur place. Jamais de montant inventé à la porte.']],
  monAlt: `Moniteur de la caméra d'inspection et technicien en tenue Pro Débouchage.`, monCap: `L'écran de la caméra${nb}: vous voyez l'intérieur de votre canalisation avec nous.`,
  proofK: 'La preuve', proofH: `Ce qu'on peut vous montrer aujourd'hui`,
  honest: `Notre page Google arrive bientôt. Après chaque intervention, on vous demande un avis honnête, bon ou mauvais, et il sera publié ici tel quel. En attendant, voici notre travail.`,
  tiles: [['chambre.webp', `Ouverture d'une chambre de visite enterrée dans un jardin.`, 'Sterput bouché, chambre de visite ouverte. Intervention réelle, 2026.'], ['siphon.webp', `Inspection d'un siphon de sol avec une caméra d'égout.`, 'Inspection caméra dans un siphon de sol. Intervention réelle, 2026.'], ['allee.webp', 'Allée pavée en cours de nettoyage haute pression, la bande claire est la partie nettoyée.', 'Allée pavée, nettoyage haute pression en cours. La bande claire est la partie déjà nettoyée.']],
  // PLACEHOLDERS written by us (DECISIONS.md 2026-08-24, Fady's call): swapped for real customers'
  // words before go-live. One shared set with NL and EN. The build warns while any are here.
  reviews: [
    ['Paolo', 5, `J'ai appelé un dimanche soir de juin, le WC du haut refoulait dans la douche. On m'a posé deux questions et donné un prix au téléphone. C'est ce prix-là qui était sur la facture, au centime près. Il est reparti vers minuit et tout remarchait. Je garde le numéro sur le frigo.`],
    ['Daniel', 4, `Le sterput de la cour débordait après les pluies de mai. Rendez-vous le mardi en fin d'après-midi, il est arrivé une demi-heure plus tard que prévu, mais il avait téléphoné pour me prévenir. Il a passé la caméra avant de toucher à quoi que ce soit et m'a montré les racines à l'écran. Le prix était bien celui annoncé au téléphone.`],
    ['Élodie', 5, `Évier de cuisine bouché depuis le week-end, j'avais tout essayé, la ventouse et les produits. Appel le lundi matin, rendez-vous le mardi à 8h. Il a démonté le siphon, nettoyé la conduite et tout remis en place proprement. Le montant annoncé au téléphone n'a pas bougé, facture reçue le jour même.`]],
  honestT: `Pas encore d'avis en ligne, et on n'en inventera pas.`,
  honestP: `Pro Débouchage est une jeune entreprise, enregistrée depuis septembre 2025. Nos premiers clients sont venus par le bouche à oreille. Notre page Google arrive, et les premiers avis seront les leurs.`,
  honestL: [`Notre numéro d'entreprise, BE 1027.454.187, vérifiable au registre public.`,
    `Le prix, dit au téléphone avant qu'on prenne la route, et confirmé à votre porte.`,
    `Les photos ci-dessus${nb}: nos propres interventions, pas des images achetées.`],
  src: 'Avis Google', askLine: `Vous avez fait appel à nous${nb}? Un avis honnête nous aide plus qu'un compliment.`,
  scamK: 'Bon à savoir', scamH: 'Comment reconnaître une arnaque au débouchage',
  scamI: `La région de Hal-Vilvorde est connue pour ça. Quatre signes qui doivent vous faire raccrocher${nb}:`,
  scam: ['Un prix qui change une fois la camionnette garée.', `Une facture comptée au mètre ET à l'heure.`, `Pas d'adresse, pas de numéro d'entreprise, pas de nom.`, 'Liquide uniquement, sans facture.'],
  scamC: `On fait l'inverse. Le prix est dit au téléphone et confirmé à votre porte, l'adresse et le numéro d'entreprise sont en bas de cette page, et vous recevez toujours une facture.`,
  scamB: 'Appeler 0480 649 649',
  zoneK: 'La zone', zoneH: 'Où on travaille',
  zoneT: `On est basés à Vilvorde et on travaille autour de Bruxelles, en Brabant flamand et en Brabant wallon, à environ 40 km autour de Wemmel. Bruxelles-ville n'est pas dans notre zone.`,
  towns: `Vilvorde · Machelen · Wemmel · Meise · Grimbergen · Merchtem · Asse · Dilbeek · Ternat · Zaventem · Zemst · Leeuw-Saint-Pierre · Hal · Beersel · Tervuren · Overijse · Rhode-Saint-Genèse · Kraainem · Wezembeek-Oppem · Waterloo · La Hulpe · Braine-l'Alleud · Braine-le-Château · Tubize · Wavre · Nivelles`.split(' · '),
  zoneC: `Votre commune n'est pas dans la liste${nb}? Appelez, on vous dit oui ou non tout de suite.`, zoneL: 'Appeler 0480 649 649',
  faqK: 'Vos questions', faqH: 'Questions fréquentes',
  faq: [[`Combien ça coûte${nb}?`, `Un WC bouché coûte 129${nb}€, un évier, un lavabo ou une douche 119${nb}€, un égout ou un sterput (le siphon de cour) à la haute pression 199${nb}€, un curage haute pression 249${nb}€ jusqu'à 25 m, le pompage d'une cave inondée 229${nb}€ pour la première heure. TVA comprise, déplacement et première heure compris, en semaine de 7h à 18h. Pour tout le reste, le prix vous est dit au téléphone avant qu'on prenne la route.`],
    [`Y a-t-il un supplément le soir, la nuit ou le week-end${nb}?`, `Oui, et il est écrit ici. Soir (18h à 22h) et samedi${nb}: +50${nb}%. Nuit, dimanche et jours fériés${nb}: +75${nb}%. Vous l'entendez au téléphone, avant l'intervention.`],
    [`Le déplacement est-il payant${nb}?`, `Non, le déplacement et la première heure sont compris dans les prix ci-dessus. Si on vient et que rien ne peut être débouché, vous payez seulement le déplacement, 60${nb}€.`],
    [`Quel taux de TVA s'applique chez moi${nb}?`, `6${nb}% si votre habitation a plus de 10 ans, le cas le plus courant. Sinon 21${nb}%, comme pour les entreprises. Les prix de cette page sont TVA 6${nb}% comprise${nb}; si le taux de 21${nb}% s'applique chez vous, on vous le dit au téléphone, avant qu'on prenne la route.`],
    [`En combien de temps êtes-vous là${nb}?`, `On vous donne une heure d'arrivée au téléphone, et on vous prévient si elle bouge. On préfère annoncer une heure qu'on tient plutôt qu'un chiffre qui fait plaisir.`],
    [`Faut-il casser quelque chose${nb}?`, `On regarde d'abord avec la caméra. Casser est le dernier recours, et jamais sans votre accord. C'est pour cela que la caméra est comprise avec l'intervention.`],
    [`Faites-vous un rapport pour l'assurance${nb}?`, `Oui, si vous le demandez. Après l'inspection caméra, on rédige alors un rapport que vous pouvez remettre à votre assurance, par exemple après un dégât des eaux ou une cave inondée. Le plus simple est de le dire au téléphone.`],
    [`Quelles communes couvrez-vous${nb}?`, `Le ring autour de Bruxelles, en Brabant flamand et en Brabant wallon${nb}: Vilvorde, Wemmel, Grimbergen, Dilbeek, Hal, Zaventem, Waterloo, Braine-l'Alleud, Wavre, Nivelles et les autres communes à environ 40 km autour de Wemmel. Bruxelles-ville n'est pas dans notre zone. Votre commune n'est pas citée${nb}? Appelez, la réponse est immédiate.`],
    [`Comment puis-je payer${nb}?`, `Par virement, par lien de paiement, ou en liquide avec un reçu TVA remis sur place. Vous recevez toujours une facture.`]],
  waAria: 'Envoyer une photo par WhatsApp',
  finalH: `Un bouchon n'attend pas.`, finalB: 'Appeler maintenant', finalWa: 'Envoyer une photo',
  finalL: 'Joignable 24h/24 et 7j/7, week-end et jours fériés compris. Numéro normal, pas de surtaxe.',
  footD: 'Débouchage, curage, inspection caméra, fosse septique et pompage de cave. Autour de Bruxelles, en Brabant flamand et en Brabant wallon, 24h/24.',
  legalT: 'Mentions légales', legal: ['PRO DEBOUCHAGE SRL', 'Guldenschaapstraat 6, 1800 Vilvoorde, Belgique', `Numéro d'entreprise BE 1027.454.187`, `E-mail${nb}: info@prodebouchage24.be`, `Téléphone${nb}: 0480 649 649`],
  vat: `Les prix affichés sont TVA 6${nb}% comprise (habitation privée de plus de 10 ans).`, privacy: 'Politique de vie privée',
  credit: `PRO DEBOUCHAGE SRL. Ce site ne dépose aucun cookie et n'utilise aucun outil de mesure.`,
  // Tag-day strings (used only when the build gets ADS_TAG_ID; the banner and the credit swap together).
  creditTag: `PRO DEBOUCHAGE SRL. Ce site n'utilise qu'un outil de mesure des appels, et seulement si vous l'acceptez.`,
  consentT: `Mesurer les appels, avec votre accord`,
  consentP: `On utilise l'outil de Google pour savoir si nos annonces amènent des appels. Rien n'est chargé avant votre choix, et refuser ne change rien à votre visite.`,
  consentRefuse: `Tout refuser`, consentAccept: `Tout accepter`, consentLink: `Cookies et mesure`,
};

const NL = {
  lang: 'nl-BE', dir: 'nl',
  wa: 'https://wa.me/32480649649?text=Hallo%2C%20ik%20heb%20een%20verstopping.%20Hier%20is%20een%20foto%20en%20mijn%20gemeente%3A%20',
  skip: 'Naar de inhoud', langNav: 'Taal kiezen',
  callHeader: 'Bel 0480 649 649', callBar: 'Bel 0480 649 649', waBar: 'WhatsApp',
  carAria: `Foto's van onze interventies, veeg om te bladeren`,
  chips: ['24/7', 'Prijs vooraf', 'Samen 30 jaar ervaring'],
  h1: 'Loopt het terug, loopt het over, stinkt het? Bel, wij lossen het op.',
  sub: 'U legt het probleem uit, <span class="hl">wij zeggen de prijs aan de telefoon, en die prijs betaalt u.</span> Bevestigd aan de deur, voor de eerste minuut werk.',
  callMain: 'Bel 0480 649 649',
  waBtn: 'Stuur een foto', under: 'Met een foto helpen we u sneller.',
  collage: [['collage-van.webp', 'hc-van', 'Bestelwagen van Pro Débouchage, het logo en het nummer op de zijkant.', 1600, 900],
    ['collage-job1.webp', 'hc-job1', 'Technieker in beschermkledij bij de hogedrukmachine, achteraan in de bestelwagen.', 800, 1000],
    ['collage-job2.webp', 'hc-job2', 'Technieker gebogen over een toezichtsput voor een woning, de bestelwagen staat op straat.', 770, 962]],
  ticker: [['tick-van.webp', 'De bestelwagen van Pro Débouchage bij zonsopgang, met het nummer 0480 649 649 op de zijkant.', 1200, 892],
    ['job-wc.webp', 'Technieker die een wc ontstopt met een veer, in Pro Débouchage kledij.', 1200, 1500],
    ['camera.webp', 'Tablet van de inspectiecamera boven een open put, de binnenkant van de buis op het scherm.', 1200, 1500],
    ['allee.webp', 'Oprit in klinkers tijdens de hogedrukreiniging, de lichte strook is al gereinigd.', 1200, 1200],
    ['collage-job1.webp', 'Technieker in beschermkledij bij de hogedrukmachine, achteraan in de bestelwagen.', 800, 1000],
    ['siphon.webp', 'Inspectie van een vloerput met een rioolcamera.', 800, 1000],
    ['chambre.webp', 'Het openleggen van een ingegraven toezichtsput in een tuin.', 800, 1000],
    ['tick-drain.webp', 'Technieker die met de elektrische veer een doucheputje ontstopt.', 800, 1066],
    ['collage-van.webp', 'De bestelwagen in een tuin, met het Pro Débouchage logo op de zijkant.', 1600, 900],
    ['collage-job2.webp', 'Technieker gebogen over een toezichtsput voor een woning, de bestelwagen staat op straat.', 770, 962],
    ['moniteur.webp', 'Scherm van de inspectiecamera en technieker in Pro Débouchage kledij.', 800, 1000]],
  carousel: [['car-van.webp', 'De bestelwagen van Pro Débouchage, achterdeuren open, klaar voor de interventie.', 800, 1000],
    ['machine.webp', 'Rioned hogedrukreiniger ingebouwd achteraan in de bestelwagen.', 1200, 1500],
    ['collage-job2.webp', 'Technieker gebogen over een toezichtsput voor een woning, de bestelwagen staat op straat.', 770, 962],
    ['siphon.webp', 'Inspectie van een vloerput met een rioolcamera.', 800, 1000],
    ['camera.webp', 'Tablet van de inspectiecamera boven een open put, de binnenkant van de buis op het scherm.', 1200, 1500],
    ['tick-drain.webp', 'Technieker die met de elektrische veer een doucheputje ontstopt.', 800, 1066],
    ['moniteur.webp', 'Scherm van de inspectiecamera en technieker in Pro Débouchage kledij.', 800, 1000],
    ['job-wc.webp', 'Technieker die een wc ontstopt met een veer, in Pro Débouchage kledij.', 1200, 1500],
    ['chambre.webp', 'Het openleggen van een ingegraven toezichtsput in een tuin.', 800, 1000],
    ['allee.webp', 'Oprit in klinkers tijdens de hogedrukreiniging, de lichte strook is al gereinigd.', 1200, 1200]],
  trust: ['24 uur op 24, 7 dagen op 7, ook weekend en feestdagen', 'Prijs aan de telefoon, bevestigd aan de deur', 'Camera-inspectie inbegrepen', 'Ingeschreven in de KBO, BE 1027.454.187'],
  trustShort: ['24/7, ook op feestdagen', 'Prijs aan de telefoon', 'Camera-inspectie inbegrepen', 'KBO: BE 1027.454.187'],
  priceK: 'De prijzen', priceH: 'Wat kost het echt?',
  priceIntro: 'De werken die wij het meest doen, staan in deze lijst. Voor de rest krijgt u de prijs aan de telefoon, voor wij naar u vertrekken.',
  terms: 'Btw inbegrepen. Verplaatsing en eerste uur inbegrepen. Op weekdagen, van 7 tot 18 uur.',
  prices: [['Verstopte wc', '€ 129'], ['Verstopte gootsteen, lavabo of douche', '€ 119'], ['Verstopt riool of sterfput, hogedruk', '€ 199'], ['Hogedrukreiniging, tot 25 m', '€ 249'], ['Kelder leegpompen, eerste uur', '€ 229']],
  priceBtn: 'Bellen', p4t: 'Staat uw geval er niet bij?',
  p4: 'Septische put, ingegraven leiding, grote werken: leg het probleem uit, u krijgt meteen een eerlijke prijs.',
  p4b: 'Bel 0480 649 649',
  guarH: '1 maand garantie op de ontstopping',
  guarP: 'Raakt dezelfde leiding binnen 30 dagen opnieuw verstopt, dan komen wij gratis terug.',
  guarRing: 'GARANTIE',
  promise: 'De prijs die u aan de telefoon hoort, staat op de factuur.',
  stepK: 'Zo werkt het', stepH: 'Vier stappen, geen verrassing',
  steps: [['U belt en u legt het probleem uit.', 'Wij stellen twee of drie vragen. Een foto via WhatsApp helpt.'], ['Wij zeggen de prijs.', `Aan de telefoon, voor wij naar u vertrekken. 's Avonds en in het weekend zit de toeslag al in de prijs die u hoort.`], ['Wij komen met de camera en de hogedruk.', 'U krijgt een uur waarop wij er zijn, en wij verwittigen u als het later wordt.'], ['Wij bevestigen de prijs aan de deur, dan ontstoppen wij.', 'Is de situatie anders dan u beschreef, dan hoort u dat vooraf, niet op de factuur.']],
  servK: 'Wat wij doen', servH: 'Onze diensten',
  services: [['Dringende ontstopping', 'Wc, gootsteen, douche, afvoer. Wij komen met hogedruk en camera.', null, null],
    ['Verstopte wc en gootsteen', '', 'job-wc.webp', 'Technieker die een wc ontstopt met een veer, in Pro Débouchage kledij.'],
    ['Hogedrukreiniging', 'Wij maken de hele leiding proper, niet alleen de verstopping.', 'machine.webp', 'Rioned hogedrukreiniger ingebouwd achteraan in de bestelwagen.'],
    ['Camera-inspectie', 'Wij filmen de binnenkant van de buis en u kijkt mee op het scherm. Inbegrepen bij de ontstopping.', 'camera.webp', 'Scherm van de inspectiecamera met het beeld binnen in een leiding en de afstandsteller.', 'Inbegrepen'],
    ['Septische put ledigen', 'Ledigen en nazicht. Op afspraak.', null, null],
    ['Kelder leegpompen', 'Leegpompen, schoonmaken, en een verslag voor uw verzekering als u daarom vraagt.', null, null]],
  servLink: 'Bel 0480 649 649',
  whoK: 'Wie komt er bij u langs', whoH: 'Afrem, de bestelwagen en het materiaal. Geen anoniem nummer.',
  whoT: 'U belt, u spreekt met de persoon die het werk inplant. Afrem komt langs, in de bestelwagen die u hier ziet, met de inspectiecamera, de Rioned hogedrukmachine en de pomp. Een team van twee, samen 30 jaar in het vak: vastgoed, renovatie en sanitair. Het bedrijf is verzekerd voor beroepsaansprakelijkheid bij AG Insurance.',
  vanAlt: 'Bestelwagen van Pro Débouchage, grijze Mercedes Vito, met het nummer 0480 649 649 op de zijkant.', vanCap: 'De bestelwagen, zoals hij bij u aankomt. Het nummer staat erop.',
  blocks: [['De camera gaat voor de hamer.', 'Wij kijken eerst met de camera. Breken is het laatste middel, en nooit zonder uw akkoord. Daarom zit ze inbegrepen bij de ontstopping.'], ['Een verslag voor de verzekering, op vraag.', 'Vraag het ons, en na de camera-inspectie maken wij een verslag dat u aan uw verzekering kunt bezorgen, bijvoorbeeld na waterschade.'], ['Een factuur, elke keer.', 'Overschrijving, betaallink, of cash met een btw-bonnetje ter plaatse. Nooit een verzonnen bedrag aan de deur.']],
  monAlt: 'Monitor van de inspectiecamera en technieker in Pro Débouchage kledij.', monCap: 'Het scherm van de camera: u ziet de binnenkant van uw leiding samen met ons.',
  proofK: 'Het bewijs', proofH: 'Wat wij u vandaag kunnen tonen',
  honest: 'Onze Google-pagina komt eraan. Na elke klus vragen wij u een eerlijke beoordeling, goed of slecht, en die komt hier ongewijzigd te staan. Intussen tonen wij ons werk.',
  tiles: [['chambre.webp', 'Het openleggen van een ingegraven toezichtsput in een tuin.', 'Verstopte sterfput, toezichtsput open. Eigen werk, 2026.'], ['siphon.webp', 'Inspectie van een vloerput met een rioolcamera.', 'Camera-inspectie in een vloerput. Eigen werk, 2026.'], ['allee.webp', 'Oprit in klinkers tijdens de hogedrukreiniging, de lichte strook is al gereinigd.', 'Oprit in klinkers, hogedrukreiniging bezig. De lichte strook is al gereinigd.']],
  // PLACEHOLDERS, zelfde drie mensen als FR en EN (DECISIONS.md 2026-08-24). Voor go-live vervangen
  // door de echte woorden van echte klanten. De build waarschuwt zolang ze hier staan.
  reviews: [
    ['Paolo', 5, 'Ik heb op een zondagavond in juni gebeld, het toilet boven liep terug in de douche. Twee vragen aan de telefoon en ik kreeg meteen een prijs. Diezelfde prijs stond op de factuur, geen euro meer. Rond middernacht was hij weg en werkte alles weer. Het nummer hangt hier aan de koelkast.'],
    ['Daniel', 4, 'De sterfput op de koer liep over na de regen in mei. Afspraak op dinsdag laat in de namiddag, hij was een halfuur later dan afgesproken, maar hij had wel gebeld om het te zeggen. Hij heeft eerst met de camera gekeken voor hij iets deed, en hij toonde mij de wortels op het scherm. De prijs was die van aan de telefoon.'],
    ['Élodie', 5, 'Gootsteen verstopt sinds het weekend, ik had alles geprobeerd, ook de producten uit de winkel. Maandagochtend gebeld, afspraak dinsdag om 8 uur. Hij heeft de sifon losgemaakt, de leiding proper gemaakt en alles netjes teruggezet. Het bedrag van aan de telefoon veranderde niet, de factuur kreeg ik dezelfde dag.']],
  honestT: 'Nog geen beoordelingen online, en wij gaan er geen verzinnen.',
  honestP: 'Pro Débouchage is een jong bedrijf, geregistreerd sinds september 2025. Onze eerste klanten kwamen via mond-tot-mondreclame. Onze Google-pagina komt eraan, en de eerste beoordelingen zullen van hen zijn.',
  honestL: ['Ons ondernemingsnummer, BE 1027.454.187, na te kijken in het openbaar register.',
    'De prijs, aan de telefoon gezegd voor wij naar u vertrekken, en aan de deur bevestigd.',
    `De foto's hierboven: ons eigen werk, geen gekochte beelden.`],
  src: 'Google-beoordeling', askLine: 'Hebt u ons al laten komen? Een eerlijke beoordeling helpt ons meer dan een compliment.',
  scamK: 'Goed om weten', scamH: 'Hoe herkent u een malafide ontstoppingsdienst?',
  scamI: 'De regio Halle-Vilvoorde staat erom bekend. Vier signalen waarbij u beter ophangt:',
  scam: ['Een prijs die verandert zodra de bestelwagen geparkeerd staat.', 'Een factuur per meter ÉN per uur.', 'Geen adres, geen ondernemingsnummer, geen naam.', 'Alleen cash, zonder factuur.'],
  scamC: 'Wij doen het omgekeerde. De prijs wordt aan de telefoon gezegd en aan de deur bevestigd, het adres en het ondernemingsnummer staan onderaan deze pagina, en u krijgt altijd een factuur.',
  scamB: 'Bel 0480 649 649',
  zoneK: 'Onze regio', zoneH: 'Waar wij werken',
  zoneT: 'Wij zitten in Vilvoorde en werken rond Brussel, in Vlaams-Brabant en Waals-Brabant, ongeveer 40 km rond Wemmel. Brussel-stad zit niet in onze regio.',
  towns: 'Vilvoorde · Machelen · Wemmel · Meise · Grimbergen · Merchtem · Asse · Dilbeek · Ternat · Zaventem · Zemst · Sint-Pieters-Leeuw · Halle · Beersel · Tervuren · Overijse · Sint-Genesius-Rode · Kraainem · Wezembeek-Oppem · Waterloo · Terhulpen · Eigenbrakel · Kasteelbrakel · Tubeke · Waver · Nijvel'.split(' · '),
  zoneC: 'Staat uw gemeente er niet bij? Bel even, u krijgt meteen ja of nee.', zoneL: 'Bel 0480 649 649',
  faqK: 'Uw vragen', faqH: 'Veelgestelde vragen',
  faq: [['Wat kost het?', 'Een verstopte wc kost € 129, een gootsteen, lavabo of douche € 119, een riool of sterfput met hogedruk € 199, een hogedrukreiniging € 249 tot 25 m, een kelder leegpompen € 229 voor het eerste uur. Btw inbegrepen, verplaatsing en eerste uur inbegrepen, op weekdagen van 7 tot 18 uur. Voor al de rest hoort u de prijs aan de telefoon voor wij naar u vertrekken.'],
    [`Is er een toeslag 's avonds, 's nachts of in het weekend?`, 'Ja, en die staat hier. Avond (18 tot 22 uur) en zaterdag: +50%. Nacht, zondag en feestdagen: +75%. U hoort het aan de telefoon, voor wij beginnen.'],
    ['Betaal ik verplaatsingskosten?', 'Nee, de verplaatsing en het eerste uur zitten in de prijzen hierboven. Komen wij langs en lukt de ontstopping niet, dan betaalt u alleen de verplaatsingskosten, € 60.'],
    ['Welk btw-tarief geldt bij mij?', '6% als uw woning ouder is dan 10 jaar, het meest voorkomende geval. Anders 21%, zoals voor bedrijven. De prijzen op deze pagina zijn inclusief 6% btw. Geldt bij u het tarief van 21%, dan hoort u dat aan de telefoon, voor wij naar u vertrekken.'],
    ['Hoe snel bent u er?', 'U krijgt aan de telefoon een uur waarop wij er zijn, en wij verwittigen u als het later wordt. Wij zeggen liever een uur dat wij halen dan een cijfer dat goed klinkt.'],
    ['Moet er iets stuk?', 'Wij kijken eerst met de camera. Breken is het laatste middel, en nooit zonder uw akkoord. Daarom zit de camera in de prijs.'],
    ['Maakt u een verslag voor de verzekering?', 'Ja, als u het vraagt. Na de camera-inspectie maken wij dan een verslag dat u aan uw verzekering kunt bezorgen, bijvoorbeeld na waterschade of een ondergelopen kelder. Zeg het gewoon aan de telefoon.'],
    ['In welke gemeenten komt u?', 'De ring rond Brussel, in Vlaams-Brabant en Waals-Brabant: Vilvoorde, Wemmel, Grimbergen, Dilbeek, Halle, Zaventem, Waterloo, Eigenbrakel, Waver, Nijvel en de andere gemeenten binnen ongeveer 40 km rond Wemmel. Brussel-stad zit niet in onze regio. Staat uw gemeente er niet bij? Bel even, u hoort het meteen.'],
    ['Hoe kan ik betalen?', 'Met overschrijving, met een betaallink, of cash met een btw-bonnetje ter plaatse. U krijgt altijd een factuur.']],
  waAria: 'Stuur een foto via WhatsApp',
  finalH: 'Een verstopping wacht niet.', finalB: 'Bel nu', finalWa: 'Stuur een foto',
  finalL: 'Bereikbaar 24 uur op 24 en 7 dagen op 7, ook in het weekend en op feestdagen. Gewoon nummer, geen betaalnummer.',
  footD: 'Ontstoppen, rioolreiniging, camera-inspectie, septische put en kelder leegpompen. Rond Brussel, in Vlaams-Brabant en Waals-Brabant, 24/7.',
  legalT: 'Wettelijke vermeldingen', legal: ['PRO DEBOUCHAGE SRL', 'Guldenschaapstraat 6, 1800 Vilvoorde, België', 'Ondernemingsnummer BE 1027.454.187', 'E-mail: info@prodebouchage24.be', 'Telefoon: 0480 649 649'],
  vat: 'De getoonde prijzen zijn inclusief 6% btw (privéwoning ouder dan 10 jaar).', privacy: 'Privacybeleid',
  credit: 'PRO DEBOUCHAGE SRL. Deze site plaatst geen cookies en gebruikt geen meettools.',
  creditTag: 'PRO DEBOUCHAGE SRL. Deze site gebruikt één meettool voor oproepen, en alleen als u die aanvaardt.',
  consentT: 'Oproepen meten, met uw akkoord',
  consentP: 'We gebruiken de tool van Google om te weten of onze advertenties telefoontjes opleveren. Er wordt niets geladen voor u kiest, en weigeren verandert niets aan uw bezoek.',
  consentRefuse: 'Alles weigeren', consentAccept: 'Alles aanvaarden', consentLink: 'Cookies en meting',
};

function pageHtml(c, opts = {}) {
  const IMG = opts.img || ((name, alt, w, h, extra) => `<img src="${name}" width="${w}" height="${h}" alt="${alt}"${extra ? " " + extra : ""}>`);
  const others = LANGS.filter(l => l[0] !== c.dir);
  const langswitch = `<nav class="langswitch" aria-label="${c.langNav}">${LANGS.map(([d, short, full]) =>
    `<a href="/${d}/" lang="${d}" hreflang="${d}-BE"${c.dir === d ? ' aria-current="page"' : ''}><span aria-hidden="true">${short}</span><span class="visually-hidden">${full}</span></a>`).join('')}</nav>`;
  const callBtn = (label, cta, extra = '') => `<a class="btn btn-call${extra}" href="${TEL}" data-cta="${cta}">${PHONE}${label}</a>`;
  const waBtn = (label, cta) => `<a class="btn btn-wa" href="${c.wa}" rel="noopener" data-cta="${cta}" aria-label="${c.waAria}">${WA}${label}</a>`;
  const sec = (cls, k, h, body, extraAttr = '') => `<section class="${cls}"${extraAttr}><div class="wrap"><p class="kicker">${k}</p><h2>${h}</h2><hr class="rule">${body}</div></section>`;

  // Ticker-variant header (Fady 2026-08-24 night test): language switch next to the logo on desktop,
  // icon-only WhatsApp button beside the call button (like the mobile call bar's). Mobile keeps the
  // classic look: the switch pushes right with an auto margin while the desktop-only buttons are hidden.
  const header = opts.ticker
    ? `<header class="site-header header-t"><div class="wrap"><a class="logo" href="/${c.dir}/" aria-label="Pro Débouchage">${IMG("logo-icon.svg","Pro Débouchage",320,200,"")}</a>${langswitch}<div class="header-right">${callBtn(c.callHeader, 'header-call', ' header-phone')}<a class="header-wa" href="${c.wa}" rel="noopener" data-cta="header-whatsapp" aria-label="${c.waAria}">${WA}WhatsApp</a></div></div></header>`
    : `<header class="site-header"><div class="wrap"><a class="logo" href="/${c.dir}/" aria-label="Pro Débouchage">${IMG("logo-icon.svg","Pro Débouchage",320,200,"")}</a><div class="header-right">${langswitch}${callBtn(c.callHeader, 'header-call', ' header-phone')}</div></div></header>`;

  const collage = `<div class="hero-collage">${c.collage.map((t, i) => `<figure class="${t[1]}">${IMG(t[0], t[2], t[3], t[4], i === 0 ? 'fetchpriority="high" decoding="async"' : 'decoding="async"')}</figure>`).join('')}</div>`;
  const chips = `<ul class="chips">${c.chips.map(t => `<li>${t}</li>`).join('')}</ul>`;
  let hero = `<section class="hero"><div class="wrap hero-grid"><div class="hero-head">${chips}<h1>${c.h1}</h1></div><div class="hero-rest"><p class="sub">${c.sub}</p><div class="actions">${callBtn(c.callMain, 'hero-call')}${waBtn(c.waBtn, 'hero-whatsapp')}</div><p class="under-btn">${c.under}</p></div>${collage}</div></section>`;
  if (opts.ticker) {
    // Hero variant (night test 2026-08-24): text left, sub right, and below a full-bleed image ticker.
    // Constant slow drift; on mobile two rows tick in opposite directions. Row A carries all 12 images
    // (the desktop strip); on mobile CSS hides its second half and row B shows exactly those 6, so the
    // phone never repeats a photo. Row B is real content there, so no aria-hidden on the row itself.
    const tickItem = (t, eager) => `<div class="tick-item">${IMG(t[0], t[1], t[2], t[3], eager ? 'decoding="async"' : 'loading="lazy" decoding="async"')}</div>`;
    const setA = c.ticker.map((t, i) => tickItem(t, i < 3)).join('');
    const setB = c.ticker.slice(6).map(t => tickItem(t, false)).join('');
    const tick = `<div class="ticker" data-ticker><div class="tick-row tick-a" data-dir="1"><div class="tick-set">${setA}</div></div><div class="tick-row tick-b" data-dir="-1"><div class="tick-set">${setB}</div></div></div>`;
    // Mobile (<820px): a swipeable full-width carousel with a dot chip, replacing the ticker.
    // Its own list and order (c.carousel, Fady's call): portrait and square photos only.
    const slides = c.carousel;
    const car = `<div class="hero-car" role="group" aria-label="${c.carAria}"><div class="car-track">${slides.map((t, i) => `<div class="car-slide">${IMG(t[0], t[1], t[2], t[3], i === 0 ? 'decoding="async"' : 'loading="lazy" decoding="async"')}</div>`).join('')}</div><div class="car-dotwrap"><div class="car-dots" aria-hidden="true">${slides.map((_, i) => `<span class="car-dot${i === 0 ? ' on' : ''}"></span>`).join('')}</div></div></div>`;
    // Carousel: dots sync on swipe for everyone; autoplay (3s per slide, only while in view) is skipped
    // for prefers-reduced-motion and stops for good at the first user gesture.
    const tickJs = `<script>(function(){
function init(){
var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
var car=document.querySelector('.hero-car');
if(car){
var tr=car.querySelector('.car-track'),dots=[].slice.call(car.querySelectorAll('.car-dot')),ct;
function stp(){var sl=tr.firstElementChild;return sl?sl.getBoundingClientRect().width+12:0}
function cur(){var s=stp();if(!s)return 0;var i=Math.round(tr.scrollLeft/s);return Math.max(0,Math.min(dots.length-1,i))}
tr.addEventListener('scroll',function(){if(ct)return;ct=1;requestAnimationFrame(function(){ct=0;
var i=cur();for(var j=0;j<dots.length;j++)dots[j].className='car-dot'+(j===i?' on':'')})},{passive:true});
if(!reduce&&'IntersectionObserver' in window){
var auto=true,timer=null;
var stop=function(){if(timer){clearInterval(timer);timer=null}};
var start=function(){if(!auto||timer)return;timer=setInterval(function(){
var i=cur()+1;if(i>dots.length-1)i=0;
tr.scrollTo({left:i*stp(),behavior:'smooth'})},2500)};
var kill=function(){auto=false;stop()};
tr.addEventListener('touchstart',kill,{passive:true});
tr.addEventListener('pointerdown',kill,{passive:true});
tr.addEventListener('wheel',kill,{passive:true});
new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){start()}else{stop()}})},{threshold:0.4}).observe(car);
}
}
var boxes=[].slice.call(document.querySelectorAll('[data-ticker]'));if(!boxes.length)return;
if(reduce){boxes.forEach(function(b){b.classList.add('tick-static')});return}
var mob=window.matchMedia?matchMedia('(max-width: 819.98px)'):null;
var rows=[];boxes.forEach(function(b){[].slice.call(b.querySelectorAll('.tick-row')).forEach(function(r){rows.push({el:r,set:r.firstElementChild,dir:+r.getAttribute('data-dir')||1,sm:+r.getAttribute('data-speed-m')||0,off:0,w:0,box:b})})});
function size(){rows.forEach(function(r){
[].slice.call(r.el.children).slice(1).forEach(function(n){r.el.removeChild(n)});
r.w=0;if(!r.el.offsetParent)return;
var w=r.set.getBoundingClientRect().width;if(!w)return;r.w=w;
var need=Math.max(1,Math.ceil(r.box.clientWidth*2/w));
for(var i=0;i<need;i++){var cl=r.set.cloneNode(true);cl.setAttribute('aria-hidden','true');r.el.appendChild(cl)}})}
var rt;
function frame(){
rows.forEach(function(r){if(!r.w)return;
r.off+=r.dir*((r.sm&&mob&&mob.matches)?r.sm:0.35);
var x=r.off%r.w;if(x<0)x+=r.w;
r.el.style.transform='translate3d('+(-x)+'px,0,0)'});
requestAnimationFrame(frame)}
window.addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(size,150)});
window.addEventListener('load',size);
size();requestAnimationFrame(frame);
}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init)}else{init()}
})();</script>`;
    // .htx-left is display:contents on mobile (stack order: chips, h1, sub, buttons) and a real flex
    // column on desktop, so the sub column centers against the whole left block and never pushes the CTAs.
    hero = `<section class="hero hero-t"><div class="wrap hero-tx"><div class="htx-left"><div class="htx-head">${chips}<h1>${c.h1}</h1></div><div class="htx-act"><div class="actions">${callBtn(c.callMain, 'hero-call')}${waBtn(c.waBtn, 'hero-whatsapp')}</div><p class="hero-tip"><span class="tip-pill">${CAMERA}${c.under}</span></p></div></div><div class="htx-side"><p class="sub">${c.sub}</p></div></div>${tick}${car}${tickJs}</section>`;
  }

  // Trust band (Fady 2026-08-25): desktop plays the counter-ticker (opposite direction, same speed as
  // the image strip); below 820px the original static band shows instead. Only one is ever displayed,
  // so screen readers hear the four proofs once. The mobile short-copy ticker stayed parked (trustShort).
  const trustStatic = `<section class="trust${opts.ticker ? ' trust-s' : ''}" aria-label="Engagements"><div class="wrap"><ul>${c.trust.map(t => `<li>${t}</li>`).join('')}</ul></div></section>`;
  const trust = opts.ticker
    ? `<section class="trust trust-t" aria-label="Engagements" data-ticker><div class="tick-row" data-dir="-1"><div class="tick-set"><ul>${c.trust.map(t => `<li>${t}</li>`).join('')}</ul></div></div></section>` + trustStatic
    : trustStatic;

  // The guarantee seal (spinning word ring + centered "1") appears twice: inside the band under the
  // prices and as the floating badge. Each copy gets its own SVG path id so the textPaths don't collide.
  const ringTxt = `${c.guarRing.trim()} · ${c.guarRing.trim()} · ${c.guarRing.trim()} ·&#160;`;
  const seal = (id) => `<span class="guar-spin" aria-hidden="true"><svg viewBox="0 0 100 100" focusable="false"><defs><path id="${id}" d="M50,50 m0,-38 a38,38 0 1,1 -0.02,0 z"/></defs><text class="guar-ring-t"><textPath href="#${id}" textLength="238.7" lengthAdjust="spacing">${ringTxt}</textPath></text></svg></span><svg class="guar-core" viewBox="0 0 100 100" aria-hidden="true" focusable="false"><text class="guar-one" x="50" y="64.7">1</text></svg>`;

  const prices = sec('s-paper', c.priceK, c.priceH, `<p class="lead" style="margin-bottom:24px">${c.priceIntro}</p><div class="grid grid-4">${c.prices.map((p, i) => `<article class="card price-card"><h3>${p[0]}</h3><p class="amount tnum">${p[1]}</p><p class="terms">${c.terms}</p>${callBtn(c.priceBtn, 'price-' + (i+1) + '-call')}</article>`).join('')}<article class="card price-card price-cta"><h3>${c.p4t}</h3><p>${c.p4}</p>${callBtn(c.p4b, 'price-other-call')}</article></div><aside class="guar"><span class="guar-badge" aria-hidden="true">${seal('guar-ring-b')}</span><div><h3>${c.guarH}</h3><p>${c.guarP}</p></div></aside><p class="promise"><span class="hl">${c.promise}</span></p>`, ' id="prix"');

  const steps = sec('s-card', c.stepK, c.stepH, `<div class="steps">${c.steps.map(s => `<div class="step"><div class="n" aria-hidden="true"></div><div><h3>${s[0]}</h3><p>${s[1]}</p></div></div>`).join('')}</div>`);

  const services = sec('s-paper', c.servK, c.servH, `<div class="grid grid-3">${c.services.map((s, i) => `<article class="card">${s[2] ? `<div class="card-photo">${IMG(s[2],s[3],480,600,"loading=\"lazy\" decoding=\"async\"")}</div>` : ''}${s[4] ? `<span class="badge">${s[4]}</span>` : ''}<h3>${s[0]}</h3>${s[1] ? `<p>${s[1]}</p>` : ''}<p><a class="link-call" href="${TEL}" data-cta="service-${i+1}-call">${c.servLink}</a></p></article>`).join('')}</div>`);

  const who = sec('s-card', c.whoK, c.whoH, `<p class="lead" style="margin-bottom:32px">${c.whoT}</p><div class="split"><figure style="margin:0">${IMG("van-studio.webp",c.vanAlt,1000,558,"loading=\"lazy\" decoding=\"async\"")}<figcaption style="font-size:.875rem;color:var(--muted);margin-top:8px">${c.vanCap}</figcaption></figure><div>${c.blocks.map(b => `<h3>${b[0]}</h3><p>${b[1]}</p>`).join('')}</div></div><div style="margin-top:32px;max-width:380px"><figure class="tile">${IMG("moniteur.webp",c.monAlt,480,600,"loading=\"lazy\" decoding=\"async\"")}<figcaption>${c.monCap}</figcaption></figure></div>`);

  // Review cards, [name, stars, text]. The current three are WRITTEN BY US as placeholders (DECISIONS.md
  // 2026-08-24): first names only, no date, no source badge, because they are not Google reviews and the
  // card must not claim a source it does not have. Before go-live they are swapped for the real words of
  // real customers (Roro asks people he worked for); the build warns for as long as any placeholder is in.
  // If the arrays are ever emptied again, the honest card below takes over.
  const socialProof = c.reviews.length
    ? `<div class="reviews" style="margin-top:32px">${c.reviews.map(r => `<article class="review-card" data-placeholder="true"><div class="who"><div class="ini" aria-hidden="true">${r[0][0]}</div><div class="name">${r[0]}</div></div>${stars(r[1])}<p>${r[2]}</p></article>`).join('')}</div><p style="margin-top:16px">${c.askLine}</p>`
    : `<article class="honest-card"><h3>${c.honestT}</h3><p>${c.honestP}</p><ul>${c.honestL.map(t => `<li>${t}</li>`).join('')}</ul><p class="ask">${c.askLine}</p></article>`;
  const proof = sec('s-paper', c.proofK, c.proofH, `<p class="lead" style="margin-bottom:24px">${c.honest}</p><div class="tiles tiles-3">${c.tiles.map(t => `<figure class="tile">${IMG(t[0],t[1],480,600,"loading=\"lazy\" decoding=\"async\"")}<figcaption>${t[2]}</figcaption></figure>`).join('')}</div>${socialProof}`);

  const scam = `<section class="s-ink"><div class="wrap"><p class="kicker">${c.scamK}</p><h2>${c.scamH}</h2><hr class="rule"><p class="lead">${c.scamI}</p><ul class="scam-list">${c.scam.map(s => `<li>${s}</li>`).join('')}</ul><p class="lead">${c.scamC}</p>${callBtn(c.scamB, 'scam-call')}</div></section>`;

  const zone = sec('s-card', c.zoneK, c.zoneH, `<p>${c.zoneT}</p><ul class="towns">${c.towns.map(t => `<li>${t}</li>`).join('')}</ul><p><strong>${c.zoneC}</strong></p><p><a class="link-call" href="${TEL}" data-cta="zone-call">${c.zoneL}</a></p>`, ' id="zone"');

  const faq = sec('s-paper', c.faqK, c.faqH, `<div class="faq">${c.faq.map((q, i) => `<details${i===1?' open':''}><summary>${q[0]}</summary><div class="answer"><p>${q[1]}</p></div></details>`).join('')}</div>`);

  const finalcall = `<section class="s-ink finalcall"><div class="wrap"><h2>${c.finalH}</h2><a class="bignum tnum" href="${TEL}" data-cta="final-call">0480 649 649</a><div class="actions">${callBtn(c.finalB, 'final-call-btn')}${waBtn(c.finalWa, 'final-whatsapp')}</div><p class="hours" style="margin-top:24px">${c.finalL}</p></div></section>`;

  const footer = `<footer class="site-footer"><div class="wrap"><div class="cols"><div><span class="logo-plate">${IMG("logo-icon.svg","Pro Débouchage",320,200,"loading=\"lazy\"")}</span><p style="margin-top:16px">${c.footD}</p><p><a href="${TEL}" data-cta="footer-call">0480 649 649</a><br><a href="mailto:info@prodebouchage24.be">info@prodebouchage24.be</a></p></div><div class="legal"><h2>${c.legalT}</h2><p>${c.legal.join('<br>')}</p><p>${c.vat}</p><div class="foot-links"><a href="${opts.privacyHref || '#'}"${opts.privacyLang ? ` lang="${opts.privacyLang}" hreflang="${opts.privacyLang}-BE"` : ''}>${c.privacy}</a>${others.map(([d, , full]) => `<a href="/${d}/" lang="${d}" hreflang="${d}-BE">${full}</a>`).join('')}${opts.adsTag ? `<button type="button" class="linklike" data-consent-open>${c.consentLink}</button>` : ''}</div></div></div><p class="credit">&copy; <span id="y">2026</span> ${opts.adsTag ? c.creditTag : c.credit}</p></div></footer>`;

  const bar = `<div class="callbar" role="region" aria-label="Appeler"><a class="cb-call" href="${TEL}" data-cta="sticky-call">${PHONE}${c.callBar}</a><a class="cb-wa" href="${c.wa}" rel="noopener" data-cta="sticky-whatsapp" aria-label="${c.waBar}">${WA}</a></div>`;

  // Floating guarantee badge (Fady's test, 2026-08-25 design session): a round stamp bottom right,
  // click opens a small box with the same words as the band. Toggle script lives in build-site's TAIL.
  // The floating badge reuses the same seal (Fady's pick, 2026-08-25). It hides while the band above
  // is on screen and returns on scroll-away, unless it was clicked shut (observer in build-site TAIL).
  const fab = `<div class="guar-float"><button type="button" class="guar-fab" data-guar-toggle aria-expanded="false" aria-controls="guar-pop">${seal('guar-ring')}<span class="sr-only">${c.guarH}</span></button><div class="guar-pop" id="guar-pop" hidden><h3>${c.guarH}</h3><p>${c.guarP}</p></div></div>`;

  const extraCss = `
.guar{display:flex;align-items:center;gap:32px;background:var(--mark);border-radius:var(--r-card);padding:36px 40px;margin-top:var(--sp-6)}
.guar-badge{position:relative;flex:0 0 96px;width:96px;height:96px;border-radius:50%;background:var(--mark);box-shadow:0 4px 14px rgba(16,42,74,.22)}
.guar h3{margin:0 0 4px;font-size:clamp(1.25rem,2.6vw,1.625rem);color:var(--ink)}
.guar p{margin:0;color:var(--ink);font-weight:600;font-size:1.0625rem}
@media (max-width:640px){.guar{gap:20px;padding:26px 22px}.guar-badge{flex-basis:76px;width:76px;height:76px}}
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}
.guar-float{position:fixed;right:14px;bottom:calc(var(--bar-h) + env(safe-area-inset-bottom) + 14px);z-index:95;transition:opacity .35s ease,transform .35s ease}
.guar-float.guar-bye,.guar-float.guar-away{opacity:0;transform:translateY(10px);pointer-events:none}
@media (min-width:1000px){.guar-float{right:24px;bottom:24px}}
.guar-fab{position:relative;display:block;width:78px;height:78px;border-radius:50%;background:var(--mark);border:0;padding:0;cursor:pointer;box-shadow:0 4px 18px rgba(16,42,74,.3);transition:transform .15s ease}
.guar-fab:hover,.guar-fab:focus-visible{transform:scale(1.06)}
@media (min-width:1000px){.guar-fab{width:100px;height:100px}}
.guar-spin{position:absolute;inset:0;display:block;animation:guar-spin 22s linear infinite;will-change:transform}
.guar-spin svg,.guar-core{position:absolute;inset:0;display:block;width:100%;height:100%}
.guar-core{pointer-events:none}
.guar-ring-t{font-family:var(--font);font-weight:700;font-size:8.4px;letter-spacing:.12em;fill:var(--ink)}
.guar-one{font-family:var(--font);font-weight:900;font-size:46px;fill:var(--ink);text-anchor:middle}
@keyframes guar-spin{to{transform:rotate(360deg)}}
@media (prefers-reduced-motion: reduce){.guar-spin{animation:none}}
.guar-pop{position:absolute;right:0;bottom:calc(100% + 12px);width:min(340px,calc(100vw - 28px));background:var(--mark);color:var(--ink);border-radius:var(--r-card);padding:20px 22px;box-shadow:0 10px 30px rgba(16,42,74,.35)}
.guar-pop h3{margin:0 0 6px;font-size:1.125rem;color:var(--ink)}
.guar-pop p{margin:0;font-weight:600;color:var(--ink)}
.scam-list{list-style:none;padding:0;margin:0 0 24px;display:grid;gap:12px;max-width:640px}
.scam-list li{color:#fff;font-weight:600;display:flex;gap:12px;align-items:flex-start;font-size:1.0625rem}
.scam-list li::before{content:"";flex:0 0 10px;width:10px;height:10px;margin-top:8px;background:var(--mark);border-radius:2px}
${opts.noBar ? '.callbar{display:none} body{padding-bottom:0}' : ''}`;

  const body = `<a class="skip" href="#contenu">${c.skip}</a>
${header}
<main id="contenu">
${hero}
${trust}
${prices}
${steps}
${services}
${who}
${proof}
${scam}
${zone}
${faq}
${finalcall}
</main>
${footer}
${bar}
${fab}`;
  if (opts.mode === "site") return { body, extraCss };
  return `<!doctype html>
<html lang="${c.lang}">
<head>
  <meta charset="utf-8">
  <script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
  ${FONT_LINK}
  <style>
${css}
${extraCss}
  </style>
</helmet>
<div class="page">
<a class="skip" href="#contenu">${c.skip}</a>
${header}
<main id="contenu">
${hero}
${trust}
${prices}
${steps}
${services}
${who}
${proof}
${scam}
${zone}
${faq}
${finalcall}
</main>
${footer}
${bar}
</div>
</x-dc>
<script data-dc-script data-props='{}'>
class Component extends DCLogic {
  renderVals() { return {}; }
}
</script>
</body>
</html>`;
}

module.exports = { FR, NL, pageHtml, PHONE, LANGS };
