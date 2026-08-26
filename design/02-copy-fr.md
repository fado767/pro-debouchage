# Copy FR, page `/fr/`, version 2 (2026-08-23, refreshed 2026-08-24 to match the shipped page)

*Rule for the designer or the AI that builds the page: use every string below character for character. Do not translate, do not shorten, do not "improve", do not add a claim. If a string does not fit, tell Fady which one and why. Section ids (S0 to S12) are the page order. French of Belgium: "vous" everywhere, Vilvorde (not Vilvoorde) in body text, the postal address stays in Dutch, a no-break space before ? ! : ; and before €, prices written "129 €", decimal comma. No em dashes. Everything here is either confirmed by Roro (DECISIONS.md 2026-08-23) or honestly phrased.*

*Where the shipping strings live: the `FR` object in `design/canvas-v2/page-template.js` (78 keys, the same 78 as NL and EN). This document is the human-readable mirror of that object, so a proofreader never has to open JavaScript. When the two disagree, the object is what the customer sees and this file is the one to correct. The privacy page text is separate, in `design/canvas-v2/legal.js`.*

*No placeholder review is left anywhere. The review array is empty and stays empty until real Google reviews exist (AGENTS.md rule 1, DECISIONS.md 2026-08-23). While it is empty the page shows the honest card in S7 instead of a review strip.*

Phone everywhere: display `0480 649 649`, link `tel:+32480649649`. WhatsApp link: `https://wa.me/32480649649?text=Bonjour%2C%20j%27ai%20un%20probl%C3%A8me%20de%20canalisation%20bouch%C3%A9e.%20Voici%20une%20photo%20et%20ma%20commune%20%3A%20` (prefilled "Bonjour, j'ai un problème de canalisation bouchée. Voici une photo et ma commune : " with a trailing space so the cursor lands where the customer types).

---

## S0. Header and sticky bar

- Logo: the Pro Débouchage monogram alone (the SVG mark, no wordmark), small. Alt: `Pro Débouchage`
- Language switch: `FR` (current) `NL` `EN`, a three-segment pill. The two-letter code is visible, the endonym (`Français`, `Nederlands`, `English`) is the visually hidden name.
- Language switch aria-label: `Choisir la langue`
- Desktop header button: `Appeler 0480 649 649`
- Mobile sticky bar, main button: `Appeler 0480 649 649`
- Mobile sticky bar, second button: `WhatsApp`
- Skip link: `Aller au contenu`

## S1. Hero

- Chips (three, above the H1, in this order): `24h/24` · `Prix à l'avance` · `30 ans de métier à deux`
  (the third chip replaced the earlier one on 2026-08-24. It says what S6 already says, in three words: two men, thirty years of trade between them. It is a fact Roro gave, not a claim about the company's age.)
- H1: `Ça remonte, ça déborde, ça pue ? Appelez, on s'en occupe.`
- Sub: `Vous décrivez le problème, on vous dit le prix au téléphone, et c'est ce prix-là que vous payez. Confirmé à la porte, avant la première minute de travail.`
- Main button: `Appeler 0480 649 649`
- Second button: `Envoyer une photo` (aria-label `Envoyer une photo par WhatsApp`; the WhatsApp glyph is in the button)
- Line under the buttons: `Avec une photo, ça va plus vite.`
- No eyebrow pill on the page: the chips do that job.

Hero collage (three photos, no captions), alt texts:
1. `Camionnette Pro Débouchage, le logo et le numéro sur le flanc.`
2. `Technicien en tenue de protection devant la machine haute pression, à l'arrière de la camionnette.`
3. `Technicien penché dans une chambre de visite devant une maison, la camionnette est garée dans la rue.`

## S2. Trust bar (four items, in this order)

1. `24h/24, 7j/7, week-end et jours fériés`
2. `Prix dit au téléphone, confirmé à la porte`
3. `Inspection caméra comprise`
4. `Entreprise enregistrée, BE 1027.454.187`

## S3. Prices

- Kicker: `Les prix`
- H2: `Combien ça coûte vraiment ?`
- Intro: `Les interventions les plus fréquentes sont dans cette liste. Pour le reste, vous avez le prix au téléphone, avant que nous partions.`

Card 1
- Title: `WC bouché`
- Price: `129 €`
- Terms: `TVA comprise. Déplacement et première heure compris. En semaine, de 7h à 18h.`
- Button: `Appeler`

Card 2
- Title: `Évier, lavabo ou douche bouché`
- Price: `119 €`
- Terms: `TVA comprise. Déplacement et première heure compris. En semaine, de 7h à 18h.`
- Button: `Appeler`

Card 3
- Title: `Égout ou sterput bouché, haute pression`
- Price: `199 €`
- Terms: `TVA comprise. Déplacement et première heure compris. En semaine, de 7h à 18h.`
- Button: `Appeler`

Card 4 (the call card, dark)
- Title: `Votre cas n'est pas dans la liste ?`
- Text: `Curage, fosse septique, cave inondée, canalisation enterrée : dites-nous le problème, vous avez le prix honnête tout de suite.`
- Button: `Appeler 0480 649 649`

Under the cards, four short lines (the "no surprise" block):
- `Soir (18h à 22h) et samedi : +50 %. Nuit, dimanche et jours fériés : +75 %. La majoration vous est dite au téléphone, avant que nous partions.`
- `Inspection caméra : ailleurs 120 à 180 €, chez nous comprise avec l'intervention. Inspection seule, avec rapport : 149 €.`
- `Si rien ne peut être débouché, vous payez le déplacement, 60 €, et rien d'autre.`
- `TVA : 6 % pour les particuliers, 21 % pour les entreprises. Les prix ci-dessus sont TVA comprise.`

Closing line (large, highlighted): `Le prix annoncé au téléphone est le prix sur la facture.`

## S4. How it works

- Kicker: `Comment ça se passe`
- H2: `Quatre étapes, pas de surprise`

1. Title `Vous appelez et vous décrivez le problème.` Text `On pose deux ou trois questions. Une photo par WhatsApp aide.`
2. Title `On vous dit le prix.` Text `Au téléphone, avant de bouger. Majoration comprise si c'est le soir ou le week-end.`
3. Title `On vient avec la caméra et la haute pression.` Text `Vous recevez une heure d'arrivée, et on vous prévient si elle bouge.`
4. Title `On confirme le prix à la porte, puis on débouche.` Text `Si la situation est différente de ce que vous avez décrit, vous le savez avant, pas sur la facture.`

## S5. Services (six cards, each with its own call link)

- Kicker: `Ce que nous faisons`
- H2: `Nos interventions`

1. `Débouchage urgent` / `WC, évier, douche, canalisation. On vient avec la haute pression et la caméra.` (no photo)
2. `WC et évier bouchés` / `Le cas le plus fréquent. Souvent résolu en une seule intervention.` (photo, alt `Technicien qui débouche un WC avec un furet, veste Pro Débouchage.`)
3. `Curage haute pression` / `On nettoie toute la canalisation, pas seulement le bouchon.` (photo, alt `Machine de curage haute pression Rioned installée à l'arrière de la camionnette.`)
4. `Inspection caméra` (badge `Comprise`) / `On filme l'intérieur du tuyau et vous regardez l'écran avec nous. Comprise avec l'intervention.` (photo, alt `Écran de la caméra d'inspection montrant l'intérieur d'une canalisation, avec le compteur de distance.`)
5. `Vidange de fosse septique` / `Vidange et contrôle. Sur rendez-vous.` (no photo)
6. `Pompage de cave inondée` / `Pompage, nettoyage, et un rapport pour votre assurance si vous en avez besoin.` (no photo)

Link on every card: `Appeler 0480 649 649`

Three of the six cards carry a real photo, three do not. That is on purpose: we only have real pictures for those three, and we never fill a card with a bought image.

## S6. Who comes to your door

- Kicker: `Qui vient chez vous`
- H2: `Afrem, la camionnette et le matériel. Pas un numéro anonyme.`
- Text: `Vous appelez, vous parlez à la personne qui organise l'intervention. C'est Afrem qui vient, dans la camionnette que vous voyez ici, avec la caméra d'inspection, la machine haute pression et la pompe. Une équipe de deux, 30 ans de métier à eux deux : immobilier, rénovation et plomberie.`

Three short blocks:
1. Title `La caméra passe avant le marteau.` Text `On regarde d'abord à la caméra. Casser est le dernier recours, et jamais sans votre accord. C'est pour cela qu'elle est comprise.`
2. Title `Un rapport pour l'assurance.` Text `Après l'inspection caméra, nous rédigeons un rapport que vous pouvez remettre à votre assurance, par exemple après un dégât des eaux.`
3. Title `Une facture, chaque fois.` Text `Virement, lien de paiement, ou liquide avec un reçu TVA remis sur place. Jamais de montant inventé à la porte.`

Photo captions (real photos only, and only these two ship in S6):
- Studio van: `La camionnette, telle qu'elle arrive chez vous. Le numéro est dessus.` (alt `Camionnette Pro Débouchage, Mercedes Vito grise, avec le numéro 0480 649 649 sur le flanc.`)
- Camera monitor: `L'écran de la caméra : vous voyez l'intérieur de votre canalisation avec nous.` (alt `Moniteur de la caméra d'inspection et technicien en tenue Pro Débouchage.`)

The jetting unit and the technician at the toilet are on the page, but as service card photos in S5, without a caption.

## S7. Proof

- Kicker: `La preuve`
- H2: `Ce que nous pouvons vous montrer aujourd'hui`
- Honest line: `Nous démarrons notre page Google. Après chaque intervention, nous vous demandons un avis honnête, bon ou mauvais, et il sera publié ici tel quel. En attendant, voici notre travail.`

Photo tiles (three), captions (facts only, no adjectives):
- `Sterput bouché, chambre de visite ouverte. Intervention réelle, 2026.`
- `Inspection caméra dans un siphon de sol. Intervention réelle, 2026.`
- `Allée pavée, nettoyage haute pression en cours. La bande claire est la partie déjà nettoyée.`

**No review cards.** The twelve placeholder reviews (four per language) were deleted on 2026-08-24. The review array is empty and the template renders the honest card below instead. A review card appears again only when a real Google review exists, copied word for word.

The honest card:
- Title: `Pas encore d'avis en ligne, et nous n'en inventerons pas.`
- Text: `Pro Débouchage est une jeune entreprise, enregistrée depuis septembre 2025. Nos premiers clients sont venus par le bouche à oreille. Notre page Google arrive, et les premiers avis seront les leurs.`
- Three things a customer can check today:
  1. `Notre numéro d'entreprise, BE 1027.454.187, vérifiable au registre public.`
  2. `Le prix, dit au téléphone avant que nous partions, et confirmé à la porte.`
  3. `Les photos ci-dessus : nos propres interventions, pas des images achetées.`
- Closing line of the card: `Vous avez fait appel à nous ? Un avis honnête nous aide plus qu'un compliment.`

The same line closes the review strip on the day real reviews replace the card. The small label on a real review card is `Avis Google`.

## S8. How to spot a scam (the honesty block, dark band)

- Kicker: `Bon à savoir`
- H2: `Comment reconnaître une arnaque au débouchage`
- Intro: `La région de Hal-Vilvorde est connue pour ça. Quatre signes qui doivent vous faire raccrocher :`
1. `Un prix qui change une fois la camionnette garée.`
2. `Une facture comptée au mètre ET à l'heure.`
3. `Pas d'adresse, pas de numéro d'entreprise, pas de nom.`
4. `Liquide uniquement, sans facture.`
- Closing: `Nous faisons l'inverse. Le prix est dit au téléphone et confirmé à la porte, l'adresse et le numéro d'entreprise sont en bas de cette page, et vous recevez toujours une facture.`
- Button: `Appeler 0480 649 649`

## S9. Zone

- Kicker: `La zone`
- H2: `Où nous intervenons`
- Text: `Nous sommes basés à Vilvorde et nous intervenons autour de Bruxelles, en Brabant flamand et en Brabant wallon, à environ 40 km autour de Wemmel. Bruxelles-ville n'est pas dans notre zone.`
- Towns (in this order): `Vilvorde · Machelen · Wemmel · Meise · Grimbergen · Merchtem · Asse · Dilbeek · Ternat · Zaventem · Zemst · Leeuw-Saint-Pierre · Hal · Beersel · Tervuren · Overijse · Rhode-Saint-Genèse · Kraainem · Wezembeek-Oppem · Waterloo · La Hulpe · Braine-l'Alleud · Braine-le-Château · Tubize · Wavre · Nivelles`
- Catch-all: `Votre commune n'est pas dans la liste ? Appelez, on vous dit oui ou non tout de suite.`
- Link: `Appeler 0480 649 649`

## S10. FAQ (eight questions, FAQPage JSON-LD)

1. Q `Combien ça coûte ?` A `Un WC bouché coûte 129 €, un évier, un lavabo ou une douche 119 €, un égout ou un sterput à la haute pression 199 €. TVA comprise, déplacement et première heure compris, en semaine de 7h à 18h. Pour tout le reste, le prix vous est dit au téléphone avant que nous partions.`
2. Q `Y a-t-il un supplément le soir, la nuit ou le week-end ?` A `Oui, et il est écrit ici. Soir (18h à 22h) et samedi : +50 %. Nuit, dimanche et jours fériés : +75 %. Vous l'entendez au téléphone, avant l'intervention.`
3. Q `Le déplacement est-il payant ?` A `Non, le déplacement et la première heure sont compris dans les prix ci-dessus. Si nous venons et que rien ne peut être débouché, vous payez seulement le déplacement, 60 €.`
4. Q `En combien de temps êtes-vous là ?` A `Nous vous donnons une heure d'arrivée au téléphone, et nous vous prévenons si elle bouge. Nous préférons une heure que nous tenons à un chiffre qui fait plaisir.`
5. Q `Faut-il casser quelque chose ?` A `Nous regardons d'abord à la caméra. Casser est le dernier recours, et jamais sans votre accord. C'est pour cela que la caméra est comprise avec l'intervention.`
6. Q `Faites-vous un rapport pour l'assurance ?` A `Oui. Après l'inspection caméra, nous rédigeons un rapport que vous pouvez remettre à votre assurance, par exemple après un dégât des eaux ou une cave inondée.`
7. Q `Quelles communes couvrez-vous ?` A `Le ring autour de Bruxelles, en Brabant flamand et en Brabant wallon : Vilvorde, Wemmel, Grimbergen, Dilbeek, Hal, Zaventem, Waterloo, Braine-l'Alleud, Wavre, Nivelles et environ 80 autres communes. Bruxelles-ville n'est pas dans notre zone. Votre commune n'est pas citée ? Appelez, la réponse est immédiate.`
8. Q `Comment puis-je payer ?` A `Par virement, par lien de paiement, ou en liquide avec un reçu TVA remis sur place. Vous recevez toujours une facture.`

## S11. Final call block

- H2: `Un bouchon n'attend pas.`
- Big number (linked): `0480 649 649`
- Button: `Appeler maintenant`
- Second button: `Envoyer une photo` (aria-label `Envoyer une photo par WhatsApp`; the WhatsApp glyph is in the button)
- Line: `Joignable 24h/24 et 7j/7, week-end et jours fériés compris. Numéro normal, pas de surtaxe.`

## S12. Footer

- Short description: `Débouchage, curage, inspection caméra, fosse septique et pompage de cave. Autour de Bruxelles, en Brabant flamand et en Brabant wallon, 24h/24.`
- Legal title: `Mentions légales`
- Legal block: `PRO DEBOUCHAGE SRL` / `Guldenschaapstraat 6, 1800 Vilvoorde, Belgique` / `Numéro d'entreprise BE 1027.454.187` / `E-mail : info@prodebouchage24.be` / `Téléphone : 0480 649 649`
- VAT line: `Les prix affichés pour les particuliers sont TVA comprise.`
- Links: `Politique de vie privée` (to `/fr/confidentialite`) · `Nederlands` · `English`. The other-language links are built by the template from its language list; only the privacy label is copy.
- Bottom line: `© [année courante, mise à jour automatiquement] PRO DEBOUCHAGE SRL. Ce site ne dépose aucun cookie et n'utilise aucun outil de mesure.` (the second sentence is removed the day the consent banner and the tags are added)

## Privacy page (`/fr/confidentialite`)

Its text is not in this document. It lives in `design/canvas-v2/legal.js` (one `<main>` per language) and the build wraps it in the same header, footer and call bar. Since 2026-08-24 it says three true things about the built site: the page sets no cookie, the fonts and images come from our own server so nothing is requested from another company, and our host Cloudflare Pages adds two error-reporting headers (NEL and Report-To) that we cannot remove.

## Meta

- Title: `Débouchage 24h/24 autour de Bruxelles, prix dit au téléphone | Pro Débouchage, Vilvorde`
- Description: `Canalisation, WC ou égout bouché ? Déboucheur basé à Vilvorde, autour de Bruxelles. 24h/24. Prix dit au téléphone, confirmé à la porte. Caméra comprise. Appelez le 0480 649 649.`
- OG title: `Ça remonte, ça déborde, ça pue ? Appelez, on s'en occupe.`
- OG description: `Déboucheur à Vilvorde, autour de Bruxelles, 24h/24. Le prix annoncé au téléphone est le prix sur la facture.`
- 404 page: H1 `Cette page n'existe pas.` Text `Mais nous, oui.` Button `Appeler 0480 649 649` Link `Retour à la page d'accueil`

## Alt texts for the real photos (FR), the eleven that ship

- hero collage, van: `Camionnette Pro Débouchage, le logo et le numéro sur le flanc.`
- hero collage, jetting unit: `Technicien en tenue de protection devant la machine haute pression, à l'arrière de la camionnette.`
- hero collage, inspection chamber: `Technicien penché dans une chambre de visite devant une maison, la camionnette est garée dans la rue.`
- service card, WC: `Technicien qui débouche un WC avec un furet, veste Pro Débouchage.`
- service card, jetting machine: `Machine de curage haute pression Rioned installée à l'arrière de la camionnette.`
- service card, camera screen: `Écran de la caméra d'inspection montrant l'intérieur d'une canalisation, avec le compteur de distance.`
- S6 van studio (cutout on white): `Camionnette Pro Débouchage, Mercedes Vito grise, avec le numéro 0480 649 649 sur le flanc.`
- S6 camera monitor: `Moniteur de la caméra d'inspection et technicien en tenue Pro Débouchage.`
- S7 tile, inspection chamber: `Ouverture d'une chambre de visite enterrée dans un jardin.`
- S7 tile, floor drain: `Inspection d'un siphon de sol avec une caméra d'égout.`
- S7 tile, driveway: `Allée pavée en cours de nettoyage haute pression, la bande claire est la partie nettoyée.`
- header and footer logo: `Pro Débouchage`
