// The privacy page text, one <main> per language, for the v2 site. build-site.js wraps it in the v2
// header, footer and call bar. Ported from the v1 pages in ../../site/ and kept here from 2026-08-24, so
// the v2 text can say what the v2 site actually does (self-hosted fonts, no third-party request) and so
// English has a page of its own instead of borrowing the French one.
// Facts only: what is written here must match what the built site really does (AGENTS.md rule 1).
const UPDATED = { fr: '24 août 2026', nl: '24 augustus 2026', en: '24 August 2026' };

const fr = `<main>
<section class="s-card">
  <div class="wrap doc">
    <p class="kicker">Informations légales</p>
    <h1 style="font-size:clamp(2rem,5vw,2.75rem)">Politique de vie privée</h1>
    <hr class="rule">
    <p class="lead">Dernière mise à jour&nbsp;: ${UPDATED.fr}.</p>

    <h2>Qui traite vos données</h2>
    <p>PRO DEBOUCHAGE SRL, Guldenschaapstraat 6, 1800 Vilvoorde, Belgique. Numéro d'entreprise BE 1027.454.187.<br>
    Téléphone&nbsp;: <a href="tel:+32480649649">0480 649 649</a>. E-mail&nbsp;: <a href="mailto:info@prodebouchage24.be">info@prodebouchage24.be</a>.</p>

<!--cookies-->
    <h2>Ce site ne dépose aucun cookie</h2>
    <p>Ce site est un site statique. Il ne dépose aucun cookie, n'utilise aucun outil de mesure d'audience, aucun pixel publicitaire et aucun bouton de réseau social. Il n'y a donc rien à accepter ni à refuser. Le jour où nous ajouterons un outil de mesure, une bannière de consentement apparaîtra avant tout dépôt, avec un bouton "Refuser tout" aussi visible et aussi simple que "Accepter tout", et cette page sera mise à jour.</p>
    <p>Les polices de caractères et les images sont hébergées sur notre propre serveur. En ouvrant cette page, votre navigateur ne demande donc aucun fichier à une autre société.</p>
<!--/cookies-->
    <p>Une seule exception, et elle ne vient pas de nous&nbsp;: notre hébergeur, Cloudflare Pages, ajoute lui-même deux en-têtes techniques à chaque page (NEL et Report-To), et nous ne pouvons pas les retirer. Ils servent uniquement à signaler une erreur technique si une page n'arrive pas à se charger. Dans ce cas, le navigateur envoie un rapport technique à Cloudflare. Lors de nos tests, aucun rapport de ce genre n'a été envoyé.</p>
    <p>Notre hébergeur enregistre des journaux techniques (adresse IP, date, page demandée, type de navigateur) pour la sécurité et le bon fonctionnement du site. Ces journaux sont conservés brièvement et ne servent pas à vous profiler.</p>

    <h2>Les données que vous nous donnez vous-même</h2>
    <p>Il n'y a pas de formulaire sur ce site. Vous nous contactez par téléphone, par WhatsApp ou par e-mail. Dans ce cas nous traitons&nbsp;:</p>
    <ul>
      <li>votre nom, votre numéro de téléphone et, si vous le donnez, votre e-mail&nbsp;;</li>
      <li>l'adresse de l'intervention&nbsp;;</li>
      <li>la description du problème, et les photos ou vidéos que vous nous envoyez&nbsp;;</li>
      <li>les données nécessaires à la facture et au paiement.</li>
    </ul>

    <h2>Pourquoi, et sur quelle base</h2>
    <ul>
      <li><strong>Vous donner un prix et venir chez vous</strong>&nbsp;: exécution du contrat ou mesures précontractuelles.</li>
      <li><strong>Facturation et comptabilité</strong>&nbsp;: obligation légale.</li>
      <li><strong>Rapport pour votre assurance</strong>, si vous le demandez&nbsp;: exécution du contrat.</li>
      <li><strong>Photos d'un chantier publiées sur ce site</strong>&nbsp;: uniquement avec votre accord, sans votre nom et sans votre adresse. Nous n'indiquons au maximum que la commune et le mois. Vous pouvez retirer votre accord à tout moment.</li>
    </ul>

    <h2>Qui reçoit vos données</h2>
    <p>Notre technicien, pour venir chez vous. Notre comptable et l'administration fiscale, pour les factures. Notre hébergeur, pour faire fonctionner le site. Le fournisseur de messagerie de notre boîte e-mail. WhatsApp (Meta) si c'est vous qui choisissez ce canal. Nous ne vendons aucune donnée et nous n'envoyons pas de publicité.</p>

    <h2>Combien de temps</h2>
    <p>Les factures et pièces comptables&nbsp;: sept ans, comme la loi belge l'impose. Les messages et photos liés à une intervention&nbsp;: deux ans après l'intervention, sauf litige en cours. Les demandes sans suite&nbsp;: six mois.</p>

    <h2>Vos droits</h2>
    <p>Vous pouvez demander l'accès à vos données, leur correction, leur effacement, la limitation du traitement, la portabilité, et vous opposer à un traitement. Écrivez à <a href="mailto:info@prodebouchage24.be">info@prodebouchage24.be</a> ou appelez le <a href="tel:+32480649649">0480 649 649</a>. Nous répondons dans le mois.</p>
    <p>Si notre réponse ne vous convient pas, vous pouvez introduire une réclamation auprès de l'Autorité de protection des données, rue de la Presse 35, 1000 Bruxelles, <a href="https://www.autoriteprotectiondonnees.be" rel="noopener">www.autoriteprotectiondonnees.be</a>.</p>

    <p style="margin-top:48px"><a class="btn btn-ghost" href="/fr/">Retour à la page d'accueil</a></p>
  </div>
</section>
</main>`;

const nl = `<main>
<section class="s-card">
  <div class="wrap doc">
    <p class="kicker">Wettelijke informatie</p>
    <h1 style="font-size:clamp(2rem,5vw,2.75rem)">Privacybeleid</h1>
    <hr class="rule">
    <p class="lead">Laatst bijgewerkt&nbsp;: ${UPDATED.nl}.</p>

    <h2>Wie uw gegevens verwerkt</h2>
    <p>PRO DEBOUCHAGE BV, Guldenschaapstraat 6, 1800 Vilvoorde, België. Ondernemingsnummer BE 1027.454.187.<br>
    Telefoon&nbsp;: <a href="tel:+32480649649">0480 649 649</a>. E-mail&nbsp;: <a href="mailto:info@prodebouchage24.be">info@prodebouchage24.be</a>.</p>

<!--cookies-->
    <h2>Deze site plaatst geen cookies</h2>
    <p>Dit is een statische site. Er wordt geen enkele cookie geplaatst, er is geen meetinstrument, geen advertentiepixel en geen socialemediaknop. Er valt dus niets te aanvaarden of te weigeren. De dag dat wij een meetinstrument toevoegen, verschijnt eerst een toestemmingsbanner met een knop "Alles weigeren" die even zichtbaar en even eenvoudig is als "Alles aanvaarden", en wordt deze pagina bijgewerkt.</p>
    <p>De lettertypes en de foto's staan op onze eigen server. Als u deze pagina opent, vraagt uw browser dus geen enkel bestand op bij een ander bedrijf.</p>
<!--/cookies-->
    <p>Eén uitzondering, en die komt niet van ons&nbsp;: onze hostingpartij, Cloudflare Pages, voegt zelf twee technische headers toe aan elke pagina (NEL en Report-To), en die kunnen wij niet verwijderen. Ze dienen alleen om een technische fout te melden als een pagina niet geladen raakt. In dat geval stuurt de browser een technisch verslag naar Cloudflare. Bij onze tests werd zo'n verslag nooit verstuurd.</p>
    <p>Onze hostingpartij houdt technische logs bij (IP-adres, datum, opgevraagde pagina, browsertype) voor de veiligheid en de goede werking van de site. Die logs worden kort bewaard en dienen niet om u te profileren.</p>

    <h2>De gegevens die u zelf geeft</h2>
    <p>Er staat geen formulier op deze site. U contacteert ons per telefoon, via WhatsApp of per e-mail. In dat geval verwerken wij&nbsp;:</p>
    <ul>
      <li>uw naam, uw telefoonnummer en, als u dat geeft, uw e-mailadres&nbsp;;</li>
      <li>het adres van de interventie&nbsp;;</li>
      <li>de beschrijving van het probleem, en de foto's of video's die u ons stuurt&nbsp;;</li>
      <li>de gegevens die nodig zijn voor de factuur en de betaling.</li>
    </ul>

    <h2>Waarom, en op welke grond</h2>
    <ul>
      <li><strong>U een prijs geven en bij u langskomen</strong>&nbsp;: uitvoering van de overeenkomst of stappen daarvoor.</li>
      <li><strong>Facturatie en boekhouding</strong>&nbsp;: wettelijke verplichting.</li>
      <li><strong>Verslag voor uw verzekering</strong>, als u dat vraagt&nbsp;: uitvoering van de overeenkomst.</li>
      <li><strong>Werffoto's op deze site</strong>&nbsp;: alleen met uw akkoord, zonder uw naam en zonder uw adres. Wij vermelden hoogstens de gemeente en de maand. U kan uw akkoord altijd intrekken.</li>
    </ul>

    <h2>Wie uw gegevens krijgt</h2>
    <p>Onze technieker, om bij u langs te komen. Onze boekhouder en de belastingadministratie, voor de facturen. Onze hostingpartij, om de site te laten werken. De leverancier van onze e-mailbox. WhatsApp (Meta) als u dat kanaal zelf kiest. Wij verkopen geen gegevens en wij sturen geen reclame.</p>

    <h2>Hoe lang</h2>
    <p>Facturen en boekhoudkundige stukken&nbsp;: zeven jaar, zoals de Belgische wet vraagt. Berichten en foto's bij een interventie&nbsp;: twee jaar na de interventie, behalve bij een lopend geschil. Vragen zonder gevolg&nbsp;: zes maanden.</p>

    <h2>Uw rechten</h2>
    <p>U kan inzage vragen in uw gegevens, verbetering, wissing, beperking van de verwerking, overdraagbaarheid, en u kan zich verzetten tegen een verwerking. Schrijf naar <a href="mailto:info@prodebouchage24.be">info@prodebouchage24.be</a> of bel <a href="tel:+32480649649">0480 649 649</a>. Wij antwoorden binnen de maand.</p>
    <p>Bent u niet tevreden met ons antwoord, dan kan u klacht indienen bij de Gegevensbeschermingsautoriteit, Drukpersstraat 35, 1000 Brussel, <a href="https://www.gegevensbeschermingsautoriteit.be" rel="noopener">www.gegevensbeschermingsautoriteit.be</a>.</p>

    <p style="margin-top:48px"><a class="btn btn-ghost" href="/nl/">Terug naar de startpagina</a></p>
  </div>
</section>
</main>`;

const en = `<main>
<section class="s-card">
  <div class="wrap doc">
    <p class="kicker">Legal information</p>
    <h1 style="font-size:clamp(2rem,5vw,2.75rem)">Privacy policy</h1>
    <hr class="rule">
    <p class="lead">Last updated: ${UPDATED.en}.</p>

    <h2>Who handles your data</h2>
    <p>PRO DEBOUCHAGE SRL, Guldenschaapstraat 6, 1800 Vilvoorde, Belgium. Company number BE 1027.454.187.<br>
    Phone: <a href="tel:+32480649649">0480 649 649</a>. E-mail: <a href="mailto:info@prodebouchage24.be">info@prodebouchage24.be</a>.</p>

<!--cookies-->
    <h2>This site sets no cookies</h2>
    <p>This is a static site. It sets no cookie, it uses no audience measurement tool, no advertising pixel and no social media button. So there is nothing to accept and nothing to refuse. The day we add a measurement tool, a consent banner will appear before anything is placed, with a "Refuse all" button as visible and as simple as "Accept all", and this page will be updated.</p>
    <p>The fonts and the photos are hosted on our own server. When you open this page, your browser therefore requests no file from another company.</p>
<!--/cookies-->
    <p>There is one exception, and it does not come from us: our host, Cloudflare Pages, adds two technical headers of its own to every page (NEL and Report-To), and we cannot remove them. They only serve to report a technical error if a page fails to load. In that case the browser sends a technical report to Cloudflare. In our testing, no such report was ever sent.</p>
    <p>Our host keeps technical logs (IP address, date, page requested, browser type) for the security and the proper working of the site. These logs are kept briefly and are not used to profile you.</p>

    <h2>The data you give us yourself</h2>
    <p>There is no form on this site. You contact us by phone, by WhatsApp or by e-mail. In that case we handle:</p>
    <ul>
      <li>your name, your phone number and, if you give it, your e-mail;</li>
      <li>the address of the job;</li>
      <li>the description of the problem, and the photos or videos you send us;</li>
      <li>the data needed for the invoice and the payment.</li>
    </ul>

    <h2>Why, and on what basis</h2>
    <ul>
      <li><strong>Giving you a price and coming to your door</strong>: performance of the contract, or steps taken before it.</li>
      <li><strong>Invoicing and accounting</strong>: legal obligation.</li>
      <li><strong>A report for your insurance</strong>, if you ask for one: performance of the contract.</li>
      <li><strong>Job photos published on this site</strong>: only with your agreement, without your name and without your address. At most we name the town and the month. You can withdraw your agreement at any time.</li>
    </ul>

    <h2>Who receives your data</h2>
    <p>Our technician, to come to your door. Our accountant and the tax administration, for the invoices. Our host, to keep the site running. The provider of our e-mail box. WhatsApp (Meta) if you choose that channel yourself. We sell no data and we send no advertising.</p>

    <h2>How long</h2>
    <p>Invoices and accounting documents: seven years, as Belgian law requires. Messages and photos linked to a job: two years after the job, unless a dispute is running. Enquiries with no follow-up: six months.</p>

    <h2>Your rights</h2>
    <p>You can ask for access to your data, for it to be corrected or erased, for the processing to be limited, for portability, and you can object to a processing. Write to <a href="mailto:info@prodebouchage24.be">info@prodebouchage24.be</a> or call <a href="tel:+32480649649">0480 649 649</a>. We answer within the month.</p>
    <p>If our answer does not satisfy you, you can lodge a complaint with the Data Protection Authority, rue de la Presse 35, 1000 Brussels, <a href="https://www.dataprotectionauthority.be" rel="noopener">www.dataprotectionauthority.be</a>.</p>

    <p style="margin-top:48px"><a class="btn btn-ghost" href="/en/">Back to the home page</a></p>
  </div>
</section>
</main>`;

// Tag-day cookie sections (native copy per language, never translated). build-site.js swaps them in for
// the <!--cookies--> block above only when ADS_TAG_ID is set, so the published page always says the truth.
const COOKIES_TAG = {
  fr: `    <h2>Cookies et mesure</h2>
    <p>Ce site utilise un seul outil tiers&nbsp;: la mesure publicitaire de Google (Google Ireland Ltd), qui nous dit si nos annonces Google amènent des appels. Rien n'est chargé avant votre choix&nbsp;: une bannière propose "Tout refuser" et "Tout accepter", aussi visibles et aussi simples l'un que l'autre. Si vous acceptez, Google peut déposer des cookies (préfixes _gcl et _ga) sur votre appareil. Votre choix est gardé sur votre appareil, six mois au maximum, puis la question vous est reposée. Vous pouvez changer d'avis à tout moment via le lien "Cookies et mesure" en bas de chaque page&nbsp;; refuser efface ces cookies.</p>
    <p>Les polices de caractères et les images restent hébergées sur notre propre serveur. Tant que vous n'avez pas accepté, votre navigateur ne demande aucun fichier à une autre société en ouvrant cette page.</p>`,
  nl: `    <h2>Cookies en meting</h2>
    <p>Deze site gebruikt één extern instrument&nbsp;: de advertentiemeting van Google (Google Ireland Ltd), die ons vertelt of onze Google-advertenties telefoontjes opleveren. Er wordt niets geladen voor u kiest&nbsp;: een banner toont "Alles weigeren" en "Alles aanvaarden", even zichtbaar en even eenvoudig. Aanvaardt u, dan kan Google cookies plaatsen (voorvoegsels _gcl en _ga) op uw toestel. Uw keuze wordt op uw toestel bewaard, hoogstens zes maanden, daarna stellen we de vraag opnieuw. U kunt altijd van gedachten veranderen via de link "Cookies en meting" onderaan elke pagina&nbsp;; weigeren wist die cookies.</p>
    <p>De lettertypes en de foto's blijven op onze eigen server staan. Zolang u niet aanvaardt, vraagt uw browser bij het openen van deze pagina geen enkel bestand op bij een ander bedrijf.</p>`,
  en: `    <h2>Cookies and measurement</h2>
    <p>This site uses one third-party tool: Google's ad measurement (Google Ireland Ltd), which tells us whether our Google ads bring in calls. Nothing loads before you choose: a banner offers "Refuse all" and "Accept all", equally visible and equally simple. If you accept, Google may set cookies (prefixes _gcl and _ga) on your device. Your choice stays on your device for six months at most, then we ask again. You can change your mind at any time via the "Cookies and measurement" link at the bottom of every page; refusing deletes those cookies.</p>
    <p>The fonts and the photos stay on our own server. Until you accept, your browser doesn't request a single file from another company when opening this page.</p>`,
};

module.exports = { fr, nl, en, COOKIES_TAG };
