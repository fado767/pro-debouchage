# research/27, the pro-debouchage.com takedown prep

*2026-08-27, Opus, read-only investigation plus two ready-to-send drafts. Nobody was contacted, no DNS was touched. Everything below was checked live on 2026-08-27 from the registry, the registrar RDAP, the DNS and the two websites themselves. Facts move to `playbook/accounts.md` when Fady acts on them.*

## 1. Whois facts (verified 2026-08-27)

| Field | Value | Source |
|---|---|---|
| Domain | pro-debouchage.com | |
| Registry handle | 3026684374_DOMAIN_COM-VRSN | Verisign RDAP |
| **Registrar** | **GoDaddy.com, LLC** (IANA 146), abuse@godaddy.com, +1 480 624 2505 | Verisign RDAP |
| **Registered** | **7 October 2025**, 13:13 UTC | Verisign RDAP |
| **Expires** | **7 October 2026**, 13:13 UTC (41 days from today) | Verisign RDAP |
| Last changed | 10 October 2025 | Verisign RDAP |
| Registrant | **Hidden. "Registration Private, Domains By Proxy, LLC"**, Tempe, Arizona, +1 480 624 2599. Privacy record last changed 7 October 2025 | GoDaddy RDAP |
| Registry nameservers | NS.HEARTINTERNET.CO.UK, NS2.HEARTINTERNET.CO.UK | Verisign RDAP |
| Zone nameservers (live) | ns.mainnameserver.com, ns2.mainnameserver.com, SOA primary ns.mainnameserver.com, hostmaster.mainnameserver.com | dig via 8.8.8.8 |
| Same machine? | YES. ns.heartinternet.co.uk and ns.mainnameserver.com both resolve to 79.170.40.2. One operator, two brand names (Heart Internet / Key-Systems, Team Internet group) | DNS |
| Status locks | clientDeleteProhibited, clientRenewProhibited, clientTransferProhibited, clientUpdateProhibited (GoDaddy's default locks, removable only inside the GoDaddy account) | Verisign RDAP |
| DNSSEC | not signed | Verisign RDAP |

**Reading.** The domain was bought 7 October 2025, four weeks after the company was incorporated (10 September 2025). Ownership is behind GoDaddy's privacy proxy, so the register cannot tell us whether the GoDaddy account is Roro's or printpress's. The DNS and the hosting are NOT at GoDaddy: they are on printpress's own infrastructure (section 2). That split is the normal shape of "the print shop registered the domain on their own GoDaddy account and pointed it at their own server".

**Correction to `playbook/accounts.md` line 13**, which says "UK registrar (mainnameserver.com)": the registrar is GoDaddy. mainnameserver.com / Heart Internet is only the DNS and the hosting.

## 2. Hosting facts (verified 2026-08-27)

- **A record** pro-debouchage.com to **79.170.40.132**. Reverse DNS: `cpan-web3-leeds.extendcp.co.uk`, a Heart Internet shared hosting box in Leeds, UK (extendcp = the Heart Internet control panel).
- **printpress.be resolves to the SAME IP, 79.170.40.132.** The print shop's own site and the client's old site sit on one shared hosting account. This is the strongest single piece of evidence that printpress controls the site and the DNS.
- Server headers: `Apache`, `X-Powered-By: PHP/8.1.34`, WordPress (wp-json exposed, Pagelayer page builder, "Plumbify" theme per `research/02`).
- **MX**: mail.pro-debouchage.com to 79.170.40.141, again Heart Internet. So `info@pro-debouchage.com` is a mailbox inside printpress's hosting account, not a Google or Microsoft mailbox.
- **SPF**: `v=spf1 include:soverin.net include:secureserver.net exists:%{i}.mta.spf.extendcp.co.uk exists:%{i}.web.spf.extendcp.co.uk -all`. The `secureserver.net` include is GoDaddy's, another sign the domain was set up from a GoDaddy account before the DNS was moved to Heart Internet.
- **printpress.be's own domain**: registrar Key-Systems GmbH, registered 2 September 2011, nameservers ns.mainnameserver.com / ns2.mainnameserver.com. Same nameservers as our .com. Registrant not shown by the DNS Belgium whois.
- **Pages still live** (from `page-sitemap1.xml`): `/`, `/contact/`, `/gallerie/`, `/services/`, `/about/`, `/blog/`, `/sample-page/`. The fake About page and the raw WordPress sample page are both still online today.
- `wp-json/wp/v2/users` returns an empty list, so no admin username leaks from the site.
- Site title metadata: name "Pro Debouchage", description "24/7".

## 3. Who the old site names (checked on the page itself)

- **Footer credit, verbatim: "© 2025 Pro Debouchage | Créé par : printpress.be".** That is the only party named as the maker.
- Contact on the page: phone 0480 649 649, e-mail **info@pro-debouchage.com**, address Guldenschaapstraat 6 1800 Vilvoorde, hours "lundi au dimanche: 24/7".
- Menu: Accueil, Nos services, Galerie, Contactez-nous. **French only.**
- No enterprise number, no VAT number, no mentions légales, no privacy page (still illegal in Belgium, as `research/02` found).
- Cookie banner served by cookieadmin.net.
- No other agency, developer or hosting party is named anywhere on the page.

## 4. Printpress facts (verified 2026-08-27)

- **Trading name**: PrintPress, printpress.be. A Brussels print shop: digital printing, construction plans, posters, business cards, stickers, t-shirts, packaging, promotional items. Says it started in 1989 as MEGA-COPY and rebranded in 2012.
- **Legal entity, from their own site, verbatim**: "Bel Pixel BV/SRL, BTW/TVA: BE0848.449.694, 131, Leopold I-Straat, 1020 Brussel".
- **KBO check on 0848.449.694** (fetched 2026-08-27): **BEL PIXEL**, SRL since 27 November 2023, active, seat **Rue Léopold I 131, 1020 Bruxelles** (Laeken), incorporated 5 September 2012, VAT active since 1 September 2012, ONSS employer since 1 October 2013, one establishment unit. **Manager: Nader Simbakhsh** (administrateur since 27 November 2023). NACE 18.120 other printing, 82.100 office support.
- **Contact**: info@printpress.be, phone +32 2 425 59 26 (plus three two, two, four two five, five nine, two six), mobile +32 486 646 818 (plus three two, four eight six, six four six, eight one eight). Contact page https://printpress.be/contact-us/.
- **Hours**: Monday to Friday 9:00 to 12:50 and 13:50 to 17:30, Saturday 10:00 to 12:30 by appointment, closed Sunday and holidays.
- **Language, the honest answer: neither FR nor NL is proven dominant.** Their own website is **English only** (`<html lang="en-US">`, title "Printing Services Brussels | PrintPress", no FR/NL/EN switcher anywhere). Their address is printed in Dutch form ("Leopold I-Straat, 1020 Brussel") and the legal form is written BV first, which leans Dutch. But the site they built for this client is **French only** and its credit line is French ("Créé par"). 1020 Bruxelles is officially bilingual.
- **Decision for the mail: French is the primary draft** (section 6), because the work they delivered for this client is French, because the owner we name (Robert Chamhi) is French speaking, and because French is never wrong at a 1020 Bruxelles address. A **Dutch version is in section 7** and is the one to send if they ever answer in Dutch.
- Note for context, not for the mail: printpress is at **1020 Bruxelles (Laeken)**, the same postcode as Roro's depot (Rue Théophile de Baisieux 225, 1020 Bruxelles). Coincidence of postcode, nothing more.

## 5. Draft A, WhatsApp from Fady to Roro (simple English, send as is)

Hi Roro, one thing to sort out: the old website.

pro-debouchage.com is still online. It still has the pages we cannot keep (staff names that are not real people, review numbers that are not real). Google sees two sites for you, and that costs us.

Your new site is live here: https://prodebouchage24.be

I checked the domain today. It is registered at GoDaddy. It expires on 7 October 2026, so about six weeks. The website and the info@ mailbox sit on printpress's own server.

Questions, one line each:

1. Do you have a GoDaddy account or login for pro-debouchage.com?
2. Did you pay for that domain yourself, or did printpress pay it?
3. Does your wife or your accountant have any e-mail or invoice from GoDaddy?
4. Do you have any invoice or contract from printpress for the website? A photo is enough.
5. Who can read the info@pro-debouchage.com mailbox today?

And one thing I need you to approve:

6. Can I write to printpress myself, from hi@fady.be, and ask them to hand the domain over to you or point it to the new site? I will not promise them any money.

If you say yes I send it today.

## 6. Draft B, e-mail from hi@fady.be to info@printpress.be (French, primary)

**Objet :** Domaine pro-debouchage.com, PRO DEBOUCHAGE SRL (BE 1027.454.187)

Bonjour,

Je me permets de vous écrire au sujet du site pro-debouchage.com, que vous avez réalisé pour PRO DEBOUCHAGE SRL, numéro d'entreprise BE 1027.454.187, dont le gérant est Monsieur Robert Chamhi.

Notre agence (fady.be) gère désormais la présence en ligne de cette société. Le nouveau site du client est en ligne depuis peu : https://prodebouchage24.be

Aujourd'hui, les deux sites coexistent. Cela nuit au référencement des deux et crée de la confusion pour les clients qui cherchent l'entreprise. Nous souhaitons régler cela proprement, avec l'accord du gérant, et sans rien casser de votre côté.

Deux solutions nous conviennent, par ordre de préférence :

1. Le transfert du nom de domaine pro-debouchage.com vers le compte registrar du client. Le domaine est enregistré chez GoDaddy et arrive à échéance le 7 octobre 2026. Il faudrait pour cela le code d'autorisation (code EPP) et la levée du verrou de transfert.

2. À défaut, une redirection 301 de l'intégralité du site pro-debouchage.com, toutes pages comprises, vers https://prodebouchage24.be, et la mise hors ligne des pages actuelles.

Pouvez-vous nous indiquer ce dont vous avez besoin de la part de Monsieur Chamhi pour autoriser l'une ou l'autre de ces démarches ? Une confirmation écrite de sa part, un mandat signé, une copie de sa pièce d'identité : dites-nous simplement la procédure et nous la suivrons.

Une précision utile également : la boîte info@pro-debouchage.com figure encore sur les documents de la société. Pouvez-vous nous dire ce qu'il advient de cette adresse dans chacun des deux scénarios ?

Merci d'avance pour votre retour. Je reste à votre disposition par e-mail ou par téléphone.

Bien à vous,

Fady
fady.be
hi@fady.be

## 7. Draft B bis, the same e-mail in Dutch (fallback, send only if they answer in Dutch)

**Onderwerp:** Domeinnaam pro-debouchage.com, PRO DEBOUCHAGE SRL (BE 1027.454.187)

Geachte,

Ik schrijf u over de website pro-debouchage.com, die u hebt gemaakt voor PRO DEBOUCHAGE SRL, ondernemingsnummer BE 1027.454.187, met de heer Robert Chamhi als zaakvoerder.

Ons bureau (fady.be) beheert vanaf nu de online aanwezigheid van dit bedrijf. De nieuwe website van de klant staat sinds kort online: https://prodebouchage24.be

Op dit moment staan de twee sites naast elkaar. Dat schaadt de vindbaarheid van allebei en zorgt voor verwarring bij klanten die het bedrijf zoeken. Wij willen dit netjes regelen, met akkoord van de zaakvoerder, en zonder iets bij u stuk te maken.

Twee oplossingen zijn voor ons goed, in volgorde van voorkeur:

1. De overdracht van de domeinnaam pro-debouchage.com naar de registraraccount van de klant. De domeinnaam staat bij GoDaddy en vervalt op 7 oktober 2026. Daarvoor hebben wij de autorisatiecode (EPP-code) nodig en de opheffing van het transferslot.

2. Als dat niet kan, een 301-redirect van de volledige site pro-debouchage.com, alle pagina's inbegrepen, naar https://prodebouchage24.be, en het offline halen van de huidige pagina's.

Kunt u ons laten weten wat u van de heer Chamhi nodig hebt om een van beide stappen goed te keuren? Een schriftelijke bevestiging, een ondertekende volmacht, een kopie van zijn identiteitskaart: zeg ons gewoon welke procedure u volgt en wij zorgen ervoor.

Nog dit: het adres info@pro-debouchage.com staat nog op de documenten van het bedrijf. Kunt u ons zeggen wat er met dat adres gebeurt in elk van beide scenario's?

Alvast bedankt voor uw antwoord. U mag mij altijd per e-mail of telefonisch bereiken.

Met vriendelijke groeten,

Fady
fady.be
hi@fady.be

## 8. Recommended next step

1. **Send Draft A to Roro today.** Everything else waits on his answer to question 6, and on whether a GoDaddy invoice exists in his or his accountant's mailbox. A GoDaddy invoice in Roro's name would mean the account is HIS and the whole printpress conversation is unnecessary.
2. **Only after Roro's yes, send Draft B to info@printpress.be.** Copy Roro on it so printpress can see the owner is in the loop; that alone often unlocks the answer.
3. **The clock: 7 October 2026.** If nobody renews the domain it lapses, then sits in redemption at GoDaddy's high redemption fee, then drops and can be caught by anyone including a competitor. Decide before then whether we want it at all. A .com with a year of history pointing 301 at the new site is worth having; letting it drop in a market with a documented scam network is a risk.
4. **If printpress does not answer within a week**, phone them: +32 2 425 59 26 or +32 486 646 818, and ask for the person who handled the Pro Débouchage site. A print shop answers a phone faster than an inbox.
5. **If printpress refuses or stalls and Roro has no login**, the fallback is GoDaddy's "contact domain owner" form on the whois page, and, since the site publishes a Belgian company's details without mentions légales and with invented staff, a formal request from Roro as the named business. Not a first move.
6. **Never** point ads or links at the .com, and never let the .com be entered in the Business Profile or Search Console.
7. **File the correction**: `playbook/accounts.md` line 13 should read GoDaddy (registrar, expires 7 October 2026, privacy proxy) with Heart Internet as DNS and host, and line 25 should say the info@ mailbox is on printpress's Heart Internet hosting.
