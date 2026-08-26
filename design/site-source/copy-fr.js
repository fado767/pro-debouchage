// v3 FRENCH copy. The master language. Every string is written to convert, in the page's voice
// (spoken Belgian French, "on", short sentences, no em dashes, narrow no-break space before ? ! : and €).
// Facts only: everything here traces to playbook/business-brief.md, DECISIONS.md or a photo we own.
const nb = ' ';

module.exports = {
  lang: 'fr-BE', dir: 'fr',
  wa: 'https://wa.me/32480649649?text=' + encodeURIComponent("Bonjour, j'ai un problème de canalisation bouchée. Voici une photo et ma commune : "),
  skip: 'Aller au contenu', langNav: 'Choisir la langue',
  callHeader: 'Appeler', callBar: 'Appeler 0480 649 649', waBar: 'WhatsApp',
  waAria: 'Envoyer une photo par WhatsApp',
  carAria: 'Photos de nos interventions, faites défiler',

  meta: {
    title: 'Débouchage 24h/24 autour de Bruxelles | Prix dit au téléphone',
    desc: 'Canalisation, WC ou égout bouché ? Déboucheur autour de Bruxelles, en Brabant flamand et wallon, 24h/24. Prix dit au téléphone, confirmé à votre porte. Garantie 30 jours. 0480 649 649.',
    ogt: 'Ça remonte, ça déborde, ça pue ? Appelez, on s’en occupe.',
    ogd: 'Déboucheur autour de Bruxelles, 24h/24. Le prix annoncé au téléphone est le prix sur la facture.',
    locale: 'fr_BE',
    ogAlt: 'Camionnette Pro Débouchage avec le numéro 0480 649 649',
  },

  // Hero. The pain in the customer's words, stacked huge, then the answer.
  eyebrow: `Débouchage pro et honnête · 24h/24`,
  h1: ['Ça remonte,', 'ça déborde,', `ça pue${nb}?`],
  h1b: `Appelez. On s'en occupe.`,
  sub: `Vous décrivez le problème, <strong>on vous dit le prix au téléphone, et c'est ce prix-là que vous payez.</strong> Confirmé à votre porte, avant la première minute de travail.`,
  callMain: 'Appeler 0480 649 649',
  waBtn: 'Envoyer une photo',
  // A tip, not a second promise: one marked word, one short line (Fady 2026-08-26).
  under: `<b>Astuce</b> une photo, et on voit déjà le problème.`,
  waNote: `Avec une photo, on vous aide plus vite.`,

  // Image ticker (desktop) and swipe carousel (mobile): our own photos, one per distinct scene.
  ticker: [
    ['tick-van.webp', 'La camionnette Pro Débouchage au lever du jour, le numéro 0480 649 649 sur le flanc.', 1200, 892],
    ['job-wc.webp', 'Technicien qui débouche un WC avec un furet Rioned, veste Pro Débouchage.', 1200, 1500],
    ['camera.webp', `Écran de la caméra d'inspection au-dessus d'un regard ouvert, l'intérieur du tuyau à l'écran.`, 1200, 1500],
    ['allee.webp', 'Allée pavée en cours de nettoyage haute pression, la bande claire est la partie nettoyée.', 1200, 1200],
    ['collage-job1.webp', `Technicien en tenue de protection devant la machine haute pression, à l'arrière de la camionnette.`, 800, 1000],
    ['siphon.webp', `Inspection d'un siphon de sol avec une caméra d'égout.`, 800, 1000],
    ['chambre.webp', `Ouverture d'une chambre de visite enterrée dans un jardin.`, 800, 1000],
    ['tick-drain.webp', 'Technicien qui passe le furet électrique dans un siphon de douche.', 800, 1066],
    ['collage-van.webp', 'La camionnette dans un jardin, le logo Pro Débouchage sur le flanc.', 1600, 900],
    ['collage-job2.webp', 'Technicien penché dans une chambre de visite devant une maison, la camionnette est garée dans la rue.', 770, 962],
    ['moniteur.webp', `Moniteur de la caméra d'inspection et technicien en tenue Pro Débouchage.`, 800, 1000]],
  carousel: [
    ['car-van.webp', `La camionnette Pro Débouchage, portes arrière ouvertes, prête pour l'intervention.`, 800, 1000],
    ['machine.webp', `Machine de curage haute pression Rioned installée à l'arrière de la camionnette.`, 1200, 1500],
    ['collage-job2.webp', 'Technicien penché dans une chambre de visite devant une maison, la camionnette est garée dans la rue.', 770, 962],
    ['siphon.webp', `Inspection d'un siphon de sol avec une caméra d'égout.`, 800, 1000],
    ['camera.webp', `Écran de la caméra d'inspection au-dessus d'un regard ouvert, l'intérieur du tuyau à l'écran.`, 1200, 1500],
    ['tick-drain.webp', 'Technicien qui passe le furet électrique dans un siphon de douche.', 800, 1066],
    ['moniteur.webp', `Moniteur de la caméra d'inspection et technicien en tenue Pro Débouchage.`, 800, 1000],
    ['job-wc.webp', 'Technicien qui débouche un WC avec un furet Rioned, veste Pro Débouchage.', 1200, 1500],
    ['chambre.webp', `Ouverture d'une chambre de visite enterrée dans un jardin.`, 800, 1000],
    ['allee.webp', 'Allée pavée en cours de nettoyage haute pression, la bande claire est la partie nettoyée.', 1200, 1200]],

  // Trust marquee. Short punchy facts, all checkable, none may wrap on a phone (Fady 2026-08-26).
  trust: [
    '24h/24, 7j/7, même les fériés',
    'Prix dit au téléphone',
    'Inspection caméra comprise',
    `N° d'entreprise 1027.454.187`,
    'Assurée chez AG Insurance',
    'Débouchage garanti 30 jours'],

  // Services: six numbered editorial rows, one call link each. No random photos in cards.
  servK: `Ce qu'on fait`, servH: `Votre problème est dans cette liste.`,
  services: [
    ['Débouchage urgent', 'WC, évier, douche, canalisation. On vient avec la haute pression et la caméra.'],
    ['Égout et sterput', `Le sterput qui déborde après la pluie, l'égout qui refoule dans la cave. Haute pression.`],
    ['Curage haute pression', 'On nettoie toute la canalisation, pas seulement le bouchon.'],
    ['Inspection caméra', `On filme l'intérieur du tuyau et vous regardez l'écran avec nous. Comprise avec l'intervention.`],
    ['Vidange de fosse septique', 'Vidange et contrôle. Sur rendez-vous.'],
    ['Pompage de cave inondée', 'Pompage, nettoyage, et un rapport pour votre assurance si vous le demandez.']],
  servLink: 'Appeler',

  // Steps.
  stepK: 'Comment ça se passe', stepH: 'Quatre étapes, pas de surprise',
  steps: [
    ['Vous appelez et vous décrivez le problème.', 'On pose deux ou trois questions. Une photo par WhatsApp aide.'],
    ['On vous dit le prix.', `Au téléphone, avant de bouger. Le soir et le week-end, la majoration est déjà dans le prix qu'on vous annonce.`],
    ['On vient avec la caméra et la haute pression.', `Vous recevez une heure d'arrivée, et on vous prévient si elle bouge.`],
    ['On confirme le prix à votre porte, puis on débouche.', `Si la situation est différente de ce que vous avez décrit, vous le savez avant, pas sur la facture.`]],

  // Prices: editorial rows, the surcharge grid published in full.
  priceK: 'Les prix', priceH: `Combien ça coûte vraiment${nb}?`,
  priceIntro: `Les interventions les plus fréquentes sont dans cette liste. Pour le reste, vous avez le prix au téléphone, avant qu'on prenne la route.`,
  prices: [
    ['WC bouché', `129${nb}€`],
    ['Évier, lavabo ou douche', `119${nb}€`],
    ['Égout ou sterput, haute pression', `199${nb}€`],
    [`Curage haute pression, jusqu'à 25${nb}m`, `249${nb}€`],
    ['Pompage de cave inondée, première heure', `229${nb}€`]],
  included: ['TVA comprise', 'Déplacement compris', 'Première heure comprise'],
  terms: `Ces prix valent en semaine, de 7h à 18h. Soir (18h à 22h) et samedi${nb}: +50${nb}%. Nuit, dimanche et jours fériés${nb}: +75${nb}%. Le supplément vous est dit au téléphone, avec le prix, avant qu'on prenne la route.`,
  p4t: `Votre cas n'est pas dans la liste${nb}?`,
  p4: `Fosse septique, canalisation enterrée, gros chantiers${nb}: dites-nous le problème, vous avez le prix tout de suite, au téléphone.`,
  p4b: 'Appeler 0480 649 649',
  priceBtn: 'Appeler',
  // The title must say what the "1" in the seal means (Fady 2026-08-26); v2's wording did, v3's did not.
  guarH: 'Garantie 1 mois sur le débouchage',
  guarP: `Si la même canalisation se rebouche dans les 30 jours, on revient gratuitement.`,
  guarLegal: `Cette garantie s'ajoute à vos droits légaux, elle ne les remplace pas.`,
  guarRing: 'GARANTIE',
  promise: 'Le prix annoncé au téléphone est le prix sur la facture.',

  // Before / during / after: one real job in three photos.
  baK: 'Avant, pendant, après', baH: `Le bouchon part. La preuve reste.`,
  baSteps: [
    ['Avant', `La cuvette pleine. L'eau ne descend plus.`,
      'WC bouché, la cuvette pleine d’eau sale, avant l’intervention.'],
    ['Pendant', `Notre technicien, la machine Rioned dans la cuvette.`,
      'Notre technicien en veste Pro Débouchage débouche le WC avec une machine Rioned.'],
    ['Après', `Le même WC. L'eau repart.`,
      'Le même WC, propre et débouché, après l’intervention.']],

  // Scam band + our checklist, point by point.
  scamK: 'Bon à savoir', scamH: `Comment reconnaître une arnaque au débouchage`,
  // The victim figure is a CITED fact, not a slogan: the phrase between scamI1 and scamI2 becomes a
  // button that opens the source panel, so the claim can be checked without leaving the page.
  scamI1: `La région de Hal-Vilvorde est tristement connue pour ça${nb}: `,
  scamICite: `plus de 265 victimes entre 2020 et 2025, et un procès en 2025`,
  scamI2: `. Quatre signes qui doivent vous faire raccrocher${nb}:`,
  citeHint: `Voir la source`,
  citeH: `D'où vient ce chiffre`,
  citeBody: `Le 29 septembre 2025, le parquet a cité 17 prévenus devant le tribunal dans l'arrondissement judiciaire de Hal-Vilvorde. Le dossier porte sur environ 265 victimes entre 2020 et 2025, avec des factures allant jusqu'à 10.000${nb}€ pour un WC débouché.`,
  citeSrc: `Sources${nb}: communiqué du ministère public (om-mp.be), VRT NWS et RTBF, 29 septembre 2025, et l'enquête de Moustique du 17 octobre 2025.`,
  citeWhy: `On le dit parce que c'est notre région. C'est aussi pour ça que nos prix, notre adresse et notre numéro d'entreprise sont écrits noir sur blanc sur cette page.`,
  citeClose: `Fermer`,
  scam: [
    'Un prix qui change une fois la camionnette garée.',
    `Une facture comptée au mètre ET à l'heure.`,
    `Pas d'adresse, pas de numéro d'entreprise, pas de nom.`,
    'Liquide uniquement, sans facture.'],
  usH: `On fait l'inverse, point par point${nb}:`,
  us: [
    `Le prix est dit au téléphone et confirmé à votre porte, avant de commencer.`,
    `Pas de prix au mètre, pas de compteur à l'heure, pas de supplément inventé à la porte.`,
    `Une facture, chaque fois. Virement, lien de paiement, ou liquide avec un reçu.`,
    `Notre adresse et notre numéro d'entreprise sont en bas de cette page, vérifiables au registre public.`],
  scamB: 'Appeler 0480 649 649',

  // Who comes.
  whoK: 'Qui vient chez vous', whoH: 'Afrem, la camionnette et le matériel. Pas un numéro anonyme.',
  bubble: `Bonjour, je suis Afrem. C'est moi qui viens chez vous, et c'est moi qui débouche.`,
  bubbleWho: `Afrem, technicien`,
  bubbleAlt: `Afrem, le technicien de Pro Débouchage.`,
  whoT: `Vous appelez, vous parlez à la personne qui organise l'intervention. C'est Afrem qui vient, dans la camionnette que vous voyez ici, avec la caméra d'inspection, la machine haute pression et la pompe. Une équipe de deux, 30 ans de métier à eux deux${nb}: immobilier, rénovation et plomberie. L'entreprise est assurée en RC professionnelle chez AG Insurance.`,
  vanAlt: 'La camionnette Pro Débouchage, une Mercedes Vito grise, garée dans une rue résidentielle belge.',
  vanCap: `La camionnette, telle qu'elle arrive chez vous. Le numéro est dessus. (Image recréée à partir de nos propres photos.)`,
  whoBlocks: [
    ['La caméra passe avant le marteau.', `On regarde d'abord avec la caméra. Casser est le dernier recours, et jamais sans votre accord. C'est pour cela qu'elle est comprise.`],
    [`Un rapport pour l'assurance, sur demande.`, `Demandez-le, et après l'inspection caméra on rédige un rapport que vous pouvez remettre à votre assurance, par exemple après un dégât des eaux.`],
    ['Une facture, chaque fois.', 'Virement, lien de paiement, ou liquide avec un reçu remis sur place. Jamais de montant inventé à la porte.']],

  // The three rules, as cards.
  incK: `Notre façon de travailler`, incH: `Trois choses sur lesquelles on ne bouge pas.`,

  // Equipment.
  matK: 'Le matériel', matH: 'On est fiers de nos machines.',
  matT: `Pas de furet de grande surface. La camionnette est équipée d'une machine haute pression Rioned, le fabricant néerlandais qui équipe le métier depuis 1956, et de caméras d'inspection professionnelles. Vous les voyez ici, sur nos propres chantiers.`,
  mat: [
    ['machine.webp', `Machine de curage haute pression Rioned UrbanJet installée à l'arrière de la camionnette.`, 'La haute pression', `Une Rioned UrbanJet montée dans la camionnette. C'est elle qui pousse le bouchon dehors et nettoie la canalisation.`],
    ['camera.webp', `Tablette de la caméra d'inspection au-dessus d'un regard ouvert, l'intérieur du tuyau à l'écran.`, `La caméra d'égout`, `Vous voyez l'intérieur de votre canalisation sur la tablette, avec le compteur de mètres. Comprise avec l'intervention.`],
    ['moniteur.webp', `Moniteur de la caméra d'inspection Rausch et technicien en tenue Pro Débouchage.`, 'La caméra des petits tuyaux', `Pour les siphons et les petits diamètres, la caméra Rausch passe là où la grande ne passe pas.`]],

  // Proof.
  proofK: 'La preuve', proofH: `Ce qu'on peut vous montrer aujourd'hui`,
  honest: `Notre page Google arrive bientôt. Après chaque intervention, on vous demande un avis honnête, bon ou mauvais, et il sera publié tel quel. En attendant, voici notre travail.`,
  tiles: [
    ['chambre.webp', `Ouverture d'une chambre de visite enterrée dans un jardin.`, 'Sterput bouché, chambre de visite ouverte. Intervention réelle, 2026.'],
    ['job-wc.webp', 'Technicien qui débouche un WC avec un furet Rioned, veste Pro Débouchage.', `WC bouché, débouché au furet Rioned. Intervention réelle, 2026. C'est la photo d'origine de l'avant/après plus haut.`],
    ['allee.webp', 'Allée pavée en cours de nettoyage haute pression, la bande claire est la partie nettoyée.', 'Allée pavée, nettoyage haute pression en cours. La bande claire est la partie déjà nettoyée.']],
  // PLACEHOLDERS written by us (DECISIONS.md 2026-08-24): swapped for real customers' words before
  // go-live. Same three people as NL and EN. The build warns while any are here.
  reviews: [
    ['Paolo', 5, `J'ai appelé un dimanche soir de juin, le WC du haut refoulait dans la douche. On m'a posé deux questions et donné un prix au téléphone. C'est ce prix-là qui était sur la facture, au centime près. Il est reparti vers minuit et tout remarchait. Je garde le numéro sur le frigo.`],
    ['Daniel', 4, `Le sterput de la cour débordait après les pluies de mai. Rendez-vous le mardi en fin d'après-midi, il est arrivé une demi-heure plus tard que prévu, mais il avait téléphoné pour me prévenir. Il a passé la caméra avant de toucher à quoi que ce soit et m'a montré les racines à l'écran. Le prix était bien celui annoncé au téléphone.`],
    ['Élodie', 5, `Évier de cuisine bouché depuis le week-end, j'avais tout essayé, la ventouse et les produits. Appel le lundi matin, rendez-vous le mardi à 8h. Il a démonté le siphon, nettoyé la conduite et tout remis en place proprement. Le montant annoncé au téléphone n'a pas bougé, facture reçue le jour même.`]],
  askLine: `Vous avez fait appel à nous${nb}? Un avis honnête nous aide plus qu'un compliment.`,
  honestT: `Pas encore d'avis en ligne, et on n'en inventera pas.`,
  honestP: `Pro Débouchage est une jeune entreprise, enregistrée depuis septembre 2025. Nos premiers clients sont venus par le bouche à oreille. Notre page Google arrive, et les premiers avis seront les leurs.`,
  honestL: [
    `Notre numéro d'entreprise, 1027.454.187, vérifiable au registre public.`,
    `Le prix, dit au téléphone avant qu'on prenne la route, et confirmé à votre porte.`,
    `Les photos ci-dessus${nb}: nos propres interventions, pas des images achetées.`],

  // Situations.
  segK: 'Selon votre situation', segH: 'Locataire, propriétaire, syndic ou commerçant',
  segs: [
    ['Locataire', `Vous pouvez nous faire venir maintenant. Vous recevez la facture et, sur demande, un rapport d'intervention${nb}: de quoi vous faire rembourser par le propriétaire si la cause lui revient.`],
    ['Propriétaire ou syndic', `On vous dit si le problème vient du privé ou du commun, caméra à l'appui, et la facture est établie au nom de la bonne partie.`],
    ['Commerce et horeca', `Une cuisine à l'arrêt coûte plus cher qu'un débouchage. On vient vite, et on vous propose un entretien pour que ça ne revienne pas.`]],

  // Zone.
  zoneK: 'La zone', zoneH: 'Où on travaille',
  zoneT: `On travaille autour de Bruxelles, en Brabant flamand et en Brabant wallon, à environ 40${nb}km autour de Wemmel. Bruxelles-ville n'est pas dans notre zone.`,
  towns: `Vilvorde · Machelen · Wemmel · Meise · Grimbergen · Merchtem · Asse · Dilbeek · Ternat · Zaventem · Zemst · Leeuw-Saint-Pierre · Hal · Beersel · Tervuren · Overijse · Rhode-Saint-Genèse · Kraainem · Wezembeek-Oppem · Waterloo · La Hulpe · Braine-l'Alleud · Braine-le-Château · Tubize · Wavre · Nivelles`.split(' · '),
  zoneC: `Votre commune n'est pas dans la liste${nb}? Appelez, on vous dit oui ou non tout de suite.`,
  zoneL: 'Appeler 0480 649 649',

  // FAQ.
  faqK: 'Vos questions', faqH: 'Questions fréquentes',
  faq: [
    [`Combien ça coûte${nb}?`, `Un WC bouché coûte 129${nb}€, un évier, un lavabo ou une douche 119${nb}€, un égout ou un sterput à la haute pression 199${nb}€, un curage haute pression 249${nb}€ jusqu'à 25${nb}m, le pompage d'une cave inondée 229${nb}€ pour la première heure. TVA comprise, déplacement et première heure compris, en semaine de 7h à 18h. Pour tout le reste, le prix vous est dit au téléphone avant qu'on prenne la route.`],
    [`Y a-t-il un supplément le soir, la nuit ou le week-end${nb}?`, `Oui, et il est écrit ici. Soir (18h à 22h) et samedi${nb}: +50${nb}%. Nuit, dimanche et jours fériés${nb}: +75${nb}%. Vous l'entendez au téléphone, avant l'intervention.`],
    [`Le déplacement est-il payant${nb}?`, `Non, le déplacement et la première heure sont compris dans les prix ci-dessus. Si on vient et que rien ne peut être débouché, vous payez seulement le déplacement, 60${nb}€.`],
    [`Combien coûte l'inspection caméra seule${nb}?`, `Quand on fait l'intervention, elle est comprise, vous ne payez rien en plus. Seule, avec un rapport écrit que vous pouvez remettre à votre assurance ou à votre syndic, elle coûte 149${nb}€, TVA comprise.`],
    [`Quel taux de TVA s'applique chez moi${nb}?`, `6${nb}% si votre habitation a plus de 10 ans, le cas le plus courant. Sinon 21${nb}%, comme pour les entreprises. Les prix de cette page sont TVA 6${nb}% comprise${nb}; si le taux de 21${nb}% s'applique chez vous, on vous le dit au téléphone, avant qu'on prenne la route.`],
    [`Je suis locataire${nb}: qui paie${nb}?`, `Vous pouvez nous faire venir sans attendre l'accord du propriétaire, et c'est vous qui recevez la facture. Si la cause revient au propriétaire, par exemple une canalisation vétuste ou cassée, notre facture et le rapport d'intervention vous servent à demander le remboursement. On vous dit honnêtement ce qu'on a trouvé.`],
    [`En combien de temps êtes-vous là${nb}?`, `On vous donne une heure d'arrivée au téléphone, et on vous prévient si elle bouge. On préfère annoncer une heure qu'on tient plutôt qu'un chiffre qui fait plaisir.`],
    [`Faut-il casser quelque chose${nb}?`, `On regarde d'abord avec la caméra. Casser est le dernier recours, et jamais sans votre accord. C'est pour cela que la caméra est comprise avec l'intervention.`],
    [`Faites-vous un rapport pour l'assurance${nb}?`, `Oui, si vous le demandez. Après l'inspection caméra, on rédige alors un rapport que vous pouvez remettre à votre assurance, par exemple après un dégât des eaux ou une cave inondée. Le plus simple est de le dire au téléphone.`],
    [`Quelles communes couvrez-vous${nb}?`, `Le ring autour de Bruxelles, en Brabant flamand et en Brabant wallon${nb}: Vilvorde, Wemmel, Grimbergen, Dilbeek, Hal, Zaventem, Waterloo, Braine-l'Alleud, Wavre, Nivelles et les autres communes à environ 40${nb}km autour de Wemmel. Bruxelles-ville n'est pas dans notre zone. Votre commune n'est pas citée${nb}? Appelez, la réponse est immédiate.`],
    [`Comment puis-je payer${nb}?`, `Par virement, par lien de paiement, ou en liquide avec un reçu remis sur place. Vous recevez toujours une facture.`]],

  // Final call.
  finalH: `Un bouchon n'attend pas.`, finalB: 'Appeler maintenant', finalWa: 'Envoyer une photo',
  finalL: 'Joignable 24h/24 et 7j/7, week-end et jours fériés compris. Numéro normal, pas de surtaxe.',

  // Footer.
  footD: `Débouchage, curage, inspection caméra, fosse septique et pompage de cave. Autour de Bruxelles, en Brabant flamand et en Brabant wallon, 24h/24.`,
  photoNote: `Toutes les photos viennent de nos propres interventions. La photo « avant » de la section preuve a été reconstituée d'après notre photo d'origine.`,
  legalT: 'Mentions légales',
  legal: ['PRO DEBOUCHAGE SRL', 'Guldenschaapstraat 6, 1800 Vilvoorde, Belgique', `Numéro d'entreprise 1027.454.187`, `E-mail${nb}: info@prodebouchage24.be`, `Téléphone${nb}: 0480 649 649`],
  vat: `Les prix affichés sont TVA 6${nb}% comprise (habitation privée de plus de 10 ans).`,
  privacy: 'Politique de vie privée', cgvLabel: 'Conditions générales',
  credit: `PRO DEBOUCHAGE SRL. Ce site ne dépose aucun cookie et n'utilise aucun outil de mesure.`,

  // Tag-day strings (used only when the build gets ADS_TAG_ID).
  creditTag: `PRO DEBOUCHAGE SRL. Ce site n'utilise qu'un outil de mesure des appels, et seulement si vous l'acceptez.`,
  consentT: `Mesurer les appels, avec votre accord`,
  consentP: `On utilise l'outil de Google pour savoir si nos annonces amènent des appels. Rien n'est chargé avant votre choix, et refuser ne change rien à votre visite.`,
  consentRefuse: `Tout refuser`, consentAccept: `Tout accepter`, consentLink: `Cookies et mesure`,
};
