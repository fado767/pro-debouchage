# 25-ads-account-build-sheet-2026-08-27.md

*Paste-ready Google Ads account build sheet, drafted 2026-08-27 (Opus agent, overnight) to the decided spec in playbook/ads-program.md (rewritten 2026-08-26). One Search campaign, two ad groups. Every ad line verified against the LIVE page at https://prodebouchage24.be. This file is the input to the account session; ads-program.md stays the owner of the rules. Raw agent report, filed verbatim apart from em-dash removal per AGENTS.md section 6.*

# PRO DEBOUCHAGE, GOOGLE ADS ACCOUNT BUILD SHEET
**Paste-ready. One Search campaign, two ad groups. Built 2026-08-27 to playbook/ads-program.md (rewritten 2026-08-26).**
Every ad line below is backed by the live page at https://prodebouchage24.be (verified against design/site-source/copy-fr.js and copy-nl.js, and against the live /fr/ and /nl/ HTML).

## 1. CAMPAIGN SETTINGS BLOCK

Campaign name: PD | Search | Ring Bruxelles | FR+NL

| Setting | Exact value | Where it lives in the 2026 UI |
|---|---|---|
| Objective | Leads | New campaign, step 1 |
| Conversion goals | Account default, call_click only. Remove every other goal from this campaign. | New campaign, step 1, "Use account-level goals", then Edit goals |
| Campaign type | Search | New campaign, step 2 |
| Ways to reach goal | Website visits only. Do NOT tick "Phone calls" at creation. | New campaign, step 2 |
| Final URL at campaign level | Leave blank. URLs live at ad level. | New campaign, step 2 |
| Search Network | ON | Settings, Networks |
| Search partners | OFF | Settings, Networks, untick "Include Google search partners" |
| Display Network | OFF | Settings, Networks, untick "Include Google Display Network" |
| AI Max, search term matching | OFF | Settings, AI Max (or "AI Max for Search campaigns") |
| AI Max, text customization | OFF | Settings, AI Max |
| AI Max, final URL expansion | OFF | Settings, AI Max |
| Automatically created assets (ACA) | OFF | Settings, Asset automation / "Automatically created assets" |
| Bidding strategy | Maximize conversions | Settings, Bidding, "Conversions" |
| Target CPA | Not set (leave the box unticked) | Settings, Bidding |
| Daily budget | 20,00 EUR | Settings, Budget |
| Budget delivery | Standard (default) | Settings, Budget |
| Customer acquisition | OFF | Settings, additional settings |
| Ad schedule | All days, all hours. 24/7. Zero bid adjustments. | Settings, additional settings, Ad schedule. Leave at default |
| Device bid adjustments | None. Do not set any. | Settings, Devices (leave empty) |
| Ad rotation | Optimize (default) | Settings, additional settings |
| Languages | All languages | Settings, Languages |
| Location targeting | The 109 municipalities below, entered as Cities | Settings, Locations, "Enter another location" |
| Location exclusion | Brussels (Brussels-Capital Region), excluded | Settings, Locations, Exclude tab |
| Location options, target | "Presence: People in or regularly in your targeted locations" | Settings, Locations, Location options |
| Location options, exclude | "Presence: People in your excluded locations" | Settings, Locations, Location options |
| Dynamic Search Ads | Not enabled | Settings, additional settings |
| URL options / tracking template | Empty | Settings, additional settings |
| Auto-apply recommendations | ALL OFF, account level, before anything else exists | Recommendations page, "Auto apply" tab. Then Tools, History, to check nothing was already applied |
| EU political advertising declaration | Declared: NO political ads | Admin, Account settings, EU political advertising |
| Account-level automatically created assets | OFF | Admin, Account settings, Asset automation |

### Geo picker, paste list (109 municipalities, all Cities, Belgium)

Block A, Vlaams-Brabant west and north (30):
Wemmel, Meise, Grimbergen, Merchtem, Dilbeek, Asse, Vilvoorde, Machelen, Opwijk, Ternat, Londerzeel, Zaventem, Kapelle-op-den-Bos, Affligem, Zemst, Steenokkerzeel, Sint-Pieters-Leeuw, Lennik, Roosdaal, Beersel, Liedekerke, Kortenberg, Kampenhout, Gooik, Halle, Boortmeerbeek, Pepingen, Haacht, Herne, Galmaarden

Block B, Vlaams-Brabant east and south (16):
Tervuren, Hoeilaart, Overijse, Bertem, Huldenberg, Keerbergen, Herent, Oud-Heverlee, Leuven, Rotselaar, Tremelo, Holsbeek, Bierbeek, Lubbeek, Aarschot, Boutersem

Block C, facility communes (5):
Kraainem, Drogenbos, Wezembeek-Oppem, Linkebeek, Sint-Genesius-Rode

Block D, Brabant wallon and the Hainaut edge (23):
Waterloo, La Hulpe, Tubize, Braine-l'Alleud, Braine-le-Château, Rixensart, Lasne, Ittre, Rebecq, Wavre, Enghien, Ottignies-Louvain-la-Neuve, Grez-Doiceau, Nivelles, Genappe, Braine-le-Comte, Court-Saint-Etienne, Beauvechain, Chaumont-Gistoux, Mont-Saint-Guibert, Silly, Villers-la-Ville, Ecaussinnes

Block E, Dender valley and Rupel strip (35):
Buggenhout, Lebbeke, Denderleeuw, Willebroek, Mechelen, Puurs-Sint-Amands, Aalst, Dendermonde, Bonheiden, Rumst, Boom, Haaltert, Bornem, Ninove, Niel, Lede, Sint-Katelijne-Waver, Hamme, Schelle, Erpe-Mere, Temse, Duffel, Zele, Wichelen, Aartselaar, Waasmunster, Hemiksem, Berlare, Kontich, Putte, Edegem, Kruibeke, Herzele, Hove, Lint

Picker notes (from launch-plan.md section 6):
- Every municipality is a City target in Google Ads Belgium. Enter in blocks of about 20, read the count back after each block.
- Verify Puurs-Sint-Amands. It may still show as two entries, Puurs and Sint-Amands. Add both if so.
- Postal code covers any entry the picker misses: Drogenbos 1620, Linkebeek 1630, Pepingen 1670, Herne 1540, Galmaarden 1570.
- Check by name and confirm the picker resolved the right one: Niel, Schelle, Hemiksem, Lint, Hove, Beauvechain, Mont-Saint-Guibert.
- HELD BACK, do not add: Antwerpen and its southern ring, Sint-Niklaas, Beveren, Sint-Gillis-Waas, Stekene, the Ghent fringe.
- OUT: Tienen, Soignies, Schoten, Chastre, Walhain, Jodoigne. Strombeek-Bever is part of Grimbergen, not a separate target.
- The 19 Brussels communes are covered by the single Brussels exclusion. Do not exclude them one by one.
- Final read-back: target count 109 (or 110 if Puurs-Sint-Amands splits), exclusions 1, Location options showing Presence on both sides.

## 2. AD GROUP: FR emergency

Default max CPC: leave blank (Maximize Conversions).
Final URL for the ad: https://prodebouchage24.be/fr/

    [débouchage urgent]
    [débouchage bruxelles]
    [déboucheur bruxelles]
    [débouchage 24h 24]
    [wc bouché]
    [évier bouché]
    [canalisation bouchée]
    [égout bouché]
    "société de débouchage"
    "débouchage vilvorde"
    "débouchage hal"
    "débouchage waterloo"
    "cave inondée"
    "refoulement égout"
    "eau qui remonte"

15 keywords. 8 exact, 7 phrase.

## 3. AD GROUP: NL emergency

Default max CPC: leave blank (Maximize Conversions).
Final URL for the ad: https://prodebouchage24.be/nl/

    [ontstoppingsdienst]
    [ontstopping brussel]
    [dringende ontstopping]
    [spoedontstopping]
    [wc verstopt]
    [gootsteen verstopt]
    [afvoer verstopt]
    [riool verstopt]
    "ontstoppingsbedrijf"
    "ontstopping vilvoorde"
    "ontstopping halle"
    "ontstopping zaventem"
    "kelder leegpompen"
    "riool verstopt wie bellen"
    "water komt omhoog"

15 keywords. 8 exact, 7 phrase.

## 4. RSA COPY

**Pinning: NOTHING is pinned. All 15 headlines and all 4 descriptions in both ads are unpinned, position "None".** Character counts in brackets, limit 30 for headlines and 90 for descriptions.

### 4.1 RSA for FR emergency
Final URL: https://prodebouchage24.be/fr/
Display path: /debouchage /urgent

Headlines (15):

    Débouchage urgent 24h/24        [24]
    Bouché ? Appelez, on vient      [26]
    WC ou évier bouché ?            [20]
    Canalisation bouchée ?          [22]
    Ça remonte ? Appelez            [20]
    Cave inondée ? On pompe         [23]
    Le prix avant de commencer      [26]
    Le prix, dit au téléphone       [25]
    Déboucheur 24h/24, 7j/7         [23]
    Nuit, week-end, jours fériés    [28]
    Autour de Bruxelles, 24h/24     [27]
    Brabant flamand et wallon       [25]
    Inspection caméra comprise      [26]
    Débouchage garanti 30 jours     [27]
    Déplacement compris             [19]

Descriptions (4):

    Le prix vous est dit au téléphone et confirmé à votre porte, avant de commencer.   [80]
    WC, évier, douche ou égout bouché ? On vient avec la caméra et la haute pression.  [81]
    24h/24, 7j/7, week-end et jours fériés. On regarde à la caméra avant de casser.    [79]
    Autour de Bruxelles, en Brabant flamand et wallon. Débouchage garanti 30 jours.    [79]

### 4.2 RSA for NL emergency
Final URL: https://prodebouchage24.be/nl/
Display path: /ontstopping /dringend

Headlines (15):

    Ontstoppingsdienst 24/7         [23]
    Dringende ontstopping           [21]
    Verstopt? Bel, wij komen        [24]
    Wc of gootsteen verstopt?       [25]
    Riool verstopt? Bel nu          [22]
    Loopt het water terug?          [22]
    Kelder onder water? Bel         [23]
    Prijs aan de telefoon           [21]
    Die prijs staat op de factuur   [29]
    24/7, ook op feestdagen         [23]
    's Nachts en in het weekend     [27]
    Rond Brussel, dag en nacht      [26]
    Vlaams- en Waals-Brabant        [24]
    Camera-inspectie inbegrepen     [27]
    30 dagen garantie               [17]

Descriptions (4):

    U hoort de prijs aan de telefoon en wij bevestigen die aan de deur. Geen verrassing.   [84]
    Wc, gootsteen, douche of riool verstopt? Wij komen met camera en hogedruk.             [74]
    24/7, ook 's nachts, in het weekend en op feestdagen. Verplaatsing inbegrepen.         [78]
    Rond Brussel, in Vlaams-Brabant en Waals-Brabant. 30 dagen garantie op de ontstopping. [86]

## 5. SHARED NEGATIVE KEYWORD LIST

List name: PD | Negatives | shared. Created at Tools, Shared library, Negative keyword lists. Applied to the campaign at creation. One list, FR and NL merged, deduplicated.
Match type rule: single words go in as negative broad, multi-word patterns as negative phrase (shown in quotes).

DIY, free and how-to:

    comment
    "que faire"
    "comment déboucher"
    "comment faire"
    soi-même
    "soi meme"
    astuce
    truc
    tuto
    tutoriel
    gratuit
    naturel
    "remède maison"
    "wat doen"
    "wat te doen"
    zelf
    "zelf ontstoppen"
    "doe het zelf"
    diy
    tips
    huismiddel
    gratis
    youtube
    forum
    wikihow

Products and home remedies:

    bicarbonate
    vinaigre
    "cristaux de soude"
    coca
    cola
    "eau bouillante"
    destop
    "déboucheur liquide"
    "produit déboucheur"
    "déboucheur chimique"
    "soude caustique"
    ventouse
    furet
    acide
    soda
    "baking soda"
    bakpoeder
    azijn
    "kokend water"
    hg
    "hg ontstopper"
    gootsteenontstopper
    "ontstopper kopen"
    ontstoppingsveer
    plopper

Retail, rental and buying:

    acheter
    vente
    kopen
    huren
    verhuur
    louer
    location
    tweedehands
    occasion
    "hydrocureuse occasion"
    machine
    "pompe vide-cave"
    dompelpomp
    kelderpomp
    waterpomp
    "leroy merlin"
    brico
    hubo
    "mr bricolage"
    gamma
    karwei
    praxis
    action
    kruidvat
    colruyt
    "bol.com"
    amazon
    karcher

Jobs and training:

    emploi
    job
    jobs
    "offre d'emploi"
    recrutement
    formation
    salaire
    ouvrier
    interim
    stage
    vacature
    vacatures
    "werken bij"
    sollicitatie
    opleiding
    cursus
    loon
    "wat verdient"

Wrong meaning of the word:

    nez
    "nez bouché"
    oreille
    "oreille bouchée"
    sinus
    pore
    artère
    bouteille
    vin
    neus
    "neus verstopt"
    "verstopte neus"
    oor
    oorsmeer
    baby
    débouchés
    "débouché professionnel"
    "pompes funèbres"
    "pompe à chaleur"
    warmtepomp

Wrong service:

    "wc chimique"
    camping
    caravane
    camper
    "chemisch toilet"
    assurance
    expertise
    verzekering
    chauffe-eau
    chaudière
    chauffage
    verwarming
    "cv ketel"
    boiler
    "badkamer renovatie"
    "salle de bain rénovation"
    "installation fosse septique"
    "septische put plaatsen"
    "septische put kopen"
    "riolering aanleggen"
    "nieuwe riolering"
    "regenput plaatsen"
    "drainage aanleggen"
    "raccordement égout"
    "aansluiting riolering"
    ramonage
    schoorsteen
    toiture
    dakwerken
    dératisation
    ongedierte
    ratten
    adoucisseur
    waterontharder
    "waterput boren"

Utilities and public services:

    vivaqua
    hydrobru
    aquafin
    farys
    "de watergroep"
    pompiers
    brandweer
    "service communal"
    ibge
    "leefmilieu brussel"

Research and reputation:

    avis
    reviews
    klachten
    plainte
    arnaque
    oplichting
    comparatif
    vergelijken
    wikipedia
    définition
    betekenis

Geo collisions:

    napoleon
    bataille
    memorial
    1815
    abba
    bier
    abdij
    brouwerij
    saale

Cities and regions outside the zone (targeted towns are deliberately absent from this block):

    gent
    gand
    antwerpen
    anvers
    brugge
    bruges
    liège
    luik
    charleroi
    namur
    namen
    mons
    bergen
    hasselt
    kortrijk
    oostende
    ostende
    tournai
    doornik
    verviers
    arlon
    tienen
    tirlemont
    sint-niklaas
    roeselare
    genk
    seraing
    "la louvière"
    mouscron
    turnhout
    geel
    mol
    herentals
    lier
    mortsel
    wilrijk
    deurne
    berchem
    borgerhout
    merksem
    hoboken
    ekeren
    soignies
    jodoigne

Countries outside Belgium:

    france
    paris
    lille
    nederland
    holland
    amsterdam
    rotterdam
    "den haag"
    utrecht
    breda
    eindhoven
    maastricht
    luxembourg
    allemagne
    duitsland
    aachen
    köln

Reconciliation applied: Leuven, Mechelen, Aalst, Dendermonde and Ninove are TARGETED towns and appear nowhere in this list. Antwerpen stays a negative while the Antwerp ring is held back. No Brussels commune is a negative: the Presence-only exclusion does that work, and commune negatives would clip the "débouchage bruxelles" phrase term we deliberately buy.

## 6. ASSETS BLOCK

### 6.1 Callouts (limit 25 characters, ad group level so each language gets its own)

FR, on FR emergency:

    24h/24, 7j/7 et fériés    [22]
    Prix dit au téléphone     [21]
    Caméra comprise           [15]
    Déplacement compris       [19]

NL, on NL emergency:

    24/7, ook op feestdagen   [23]
    Prijs aan de telefoon     [21]
    Camera inbegrepen         [17]
    Verplaatsing inbegrepen   [23]

### 6.2 Structured snippet (header per language, limit 25 characters per value, ad group level)

FR, on FR emergency, header "Catalogue de services":

    Débouchage urgent         [17]
    Égout et sterput          [16]
    Curage haute pression     [21]
    Inspection caméra         [17]
    Vidange fosse septique    [22]
    Pompage de cave           [15]

NL, on NL emergency, header "Servicecatalogus":

    Dringende ontstopping     [21]
    Riool en sterfput         [17]
    Hogedrukreiniging         [17]
    Camera-inspectie          [16]
    Septische put ledigen     [21]
    Kelder leegpompen         [17]

### 6.3 Sitelinks (link text limit 25, description lines limit 35, ad group level)

FR, on FR emergency:

    1. Les prix, tout compris        [22]  https://prodebouchage24.be/fr/#prix
       Prix TVA comprise, déplacement      [30]
       et première heure compris.          [25]

    2. Où on travaille               [15]  https://prodebouchage24.be/fr/#zone
       Autour de Bruxelles, Brabant        [28]
       flamand et Brabant wallon.          [26]

    3. Comment ça se passe           [19]  https://prodebouchage24.be/fr/#contenu
       Vous appelez, on dit le prix,       [29]
       on vient, on confirme, on débouche. [34]

    4. Nos conditions                [14]  https://prodebouchage24.be/fr/conditions-generales.html
       Nos conditions, écrites en clair.   [33]
       Garantie, paiement, facture.        [28]

NL, on NL emergency:

    1. De prijzen, alles in          [20]  https://prodebouchage24.be/nl/#prix
       Btw, verplaatsing en het eerste     [31]
       uur zitten in de prijs.             [23]

    2. Waar wij werken               [15]  https://prodebouchage24.be/nl/#zone
       Rond Brussel, in Vlaams-Brabant     [31]
       en Waals-Brabant.                   [17]

    3. Zo werkt het                  [12]  https://prodebouchage24.be/nl/#contenu
       U belt, u hoort de prijs, wij       [29]
       komen en bevestigen die prijs.      [30]

    4. Algemene voorwaarden          [20]  https://prodebouchage24.be/nl/algemene-voorwaarden.html
       Garantie, betaling, factuur.        [28]
       Alles zwart op wit.                 [19]

### 6.4 Call asset (ONE asset, campaign level, both ad groups)

    Country:                 Belgium
    Phone number:            0480 649 649
    Call reporting:          ON (Google forwarding number)
    Conversion action:       calls from ads (created in section 7)
    Asset schedule:          None. The asset runs all days, all hours.
    Level:                   Campaign

Answering-hours note: 24/7 answering is confirmed (business-brief.md section 1, and the page states it in all three languages). The asset schedule is left empty, meaning always on. If that ever stops being true the asset schedule is the first thing to change, before the copy.
Forwarding-number rule: the Google forwarding number is Google's property and routes for about 60 days only. It never goes on the van, the cards, the Business Profile, the invoices or the website.

### 6.5 Other assets

    Business name asset:     Pro Débouchage
    Logo asset:              square 1:1 and 4:1 landscape from assets/prepared/
    Location asset:          WAITS. Only after the Business Profile manager link exists.
    Image assets:            not at launch.
    Lead form asset:         never. The call is the conversion.
    Price asset:             never at launch. No price numbers in ads.
    Promotion asset:         never.

## 7. CONVERSION ACTIONS BLOCK

Created in Roro's OWN Ads account, its own AW- id, never cross-account. **All three are created while the account still has 0 campaigns.** Goals, Conversions, Summary, New conversion action.

| # | Name | Type | Category | Role | Value | Count | Window | Enhanced conv. |
|---|---|---|---|---|---|---|---|---|
| 1 | call_click | Website | Contact / Phone call lead | **PRIMARY** | 1,00 EUR flat | One | 30 days click, 1 day view | OFF |
| 2 | calls from ads | Calls from ads (forwarding number on the call asset) | Phone call lead | **SECONDARY** | default | One | default | n/a |
| 3 | whatsapp_click | Website | Contact / Submit lead form | **SECONDARY** | lower than a call | One | 30 days click | OFF |

Creation-order notes, the part that is easy to get wrong:
1. **Secondary cannot be chosen in the creation wizard.** Create all three (they land as primary), then Goals, Settings, Action optimization: set calls from ads and whatsapp_click to Secondary. Only call_click stays Primary.
2. **Delete any junk action the wizard auto-created.** The Conversions list is exactly these three plus nothing.
3. Duration threshold on calls from ads: **60 seconds** (raised from 45 per research/24).
4. Enhanced conversions OFF on both website actions.
5. Tag method: direct gtag on the page, no Tag Manager. call_click fires on click of any tel: link, whatsapp_click on any wa.me link.
6. Consent Mode v2, ad_storage denied until consent. A refusing visitor fires nothing and is uncounted.
7. Campaign conversion goals: call_click only, so Maximize Conversions optimises on it and the other two report without steering bidding.
8. Diagnostics scroll_75 and time_30s stay in GA4 only, never as Ads conversions.

## 8. THE ACCOUNT-SESSION CHECKLIST, 14 STEPS IN ORDER

Prereqs, all outside the session: page live on the domain (done, https://prodebouchage24.be, 2026-08-27), gtag and consent mount shipped in the build, Roro present and signed in, the DRAIN Chrome profile signed out of every other Google account.

1. **Ads account created inside Roro's login**, Fady beside him, Roro clicks. Currency EUR, time zone Brussels, both permanent. Read the customer ID back and write it down.
2. **Auto-apply recommendations OFF**, every one, before anything else exists. Then Tools, History: check nothing was already auto-applied.
3. **EU political advertising declaration filed as NO.** Admin, Account settings.
4. **Billing: payments profile name PRO DEBOUCHAGE SRL from the first click**, enterprise number BE 1027.454.187, seat address as on the page. Payer: **temporarily Fady's card**, the one dated exception (DECISIONS 2026-08-26), swapped to Roro's card at the GBP meeting. Warn the cardholder: new accounts charge at a low threshold, about 50 euro, so frequent small charges at first.
5. **Verification pack on the table before anything is published:** KBO extract, enterprise number BE 1027.454.187, Roro's ID. Google can demand documents on a 48-hour deadline and false information means suspension.
6. **Manager link:** accept the invite from Fady Agency and verify it in the sub-account list by **customer ID 724-595-2027**, never by name. A same-named empty manager exists.
7. **Keyword Planner CPC pull on the section 2 and 3 launch lists** (Tools, Planning, Keyword Planner, Get search volume and forecasts, location = the 109 towns, language All). Record the top-of-page bid range per keyword. **Gate: if FR exact terms come back above 7 to 8 euro, stop and reopen the budget conversation with Fady before building anything.**
8. **Claim the 400-for-400 Google credit here, not earlier.** Read the offer's own terms on screen: spend window and deadline. At 20 euro a day the qualifying 400 euro takes about 20 days. Write the window down. Arithmetic only, no promise.
9. **Conversion actions, all three**, exactly as section 7, while the account still has 0 campaigns.
10. **Prove the tag on the wire (G5).** On the live domain: refuse cookies, click a stubbed tel: link, confirm performance.getEntriesByType('resource') shows no googleads, doubleclick or googletagmanager entry at all. Then accept, reload, confirm the gtag load, fire the stubbed tel: and WhatsApp clicks, and confirm the googleadservices.com/pagead/conversion beacon with the right label per action. Screenshot the resource list, note the AW id and the labels. **Stop here if it does not prove.**
11. **Build the campaign** PD | Search | Ring Bruxelles | FR+NL to section 1, exactly. Two ad groups with the keywords of sections 2 and 3, one unpinned RSA each from section 4, the assets of section 6 at the level stated. (Budget written as 20, the top of the decided 15 to 20 range: Fady's yes at this step.)
12. **Attach the shared negative list** (section 5) to the campaign.
13. **Publish, then pause within seconds.** Full reload, then read every setting back on screen: Search only, no partners, no Display, AI Max all three off, ACA off, Maximize Conversions with no target, budget 20, 109 locations and 1 exclusion with Presence on both sides, language All, schedule all days all hours, no bid adjustments anywhere, match types intact, negative list attached, both RSAs at Ad strength Good with zero pins, call asset serving with call reporting on, no disapprovals, auto-apply still off.
14. **Enable on Fady's explicit word only.** Then write the launch date into playbook/ads-program.md section 5 and a line into LOG.md.

## NOTES (not for pasting)

1. **The Vilvoorde rule bit the old drafts.** research/14's RSAs lean on "Basé à Vilvorde" and "Ontstopper uit Vilvoorde" in almost every ad group. The VILVOORDE RULE (landing-page.md section 4, Fady 2026-08-26) forbids that: copy is zone-first. Every such headline is gone here; Vilvorde and Vilvoorde survive only as served-town keywords.
2. **The camera claim needed care.** The page says the camera is included WITH the intervention, and 149 euro on its own with a report. "Inspection caméra comprise" and "Camera-inspectie inbegrepen" match the page's own wording exactly. Nothing says "free camera".
3. **The insurance report is deliberately absent** from every headline, description, callout and snippet.
4. **The 30-day guarantee is page-backed** and used in both ads.
5. **"Déplacement compris" / "Verplaatsing inbegrepen" is page-backed**; the page also states the 60 euro call-out if nothing can be unblocked, so the FAQ backs the nuance. No price number appears in any ad.
6. **Two research/24 negatives deliberately NOT in the list: bare "commune" and bare "gemeente"** (they would block real queries like "ontstopping gemeente Halle"); their intent is covered by "service communal", vivaqua, aquafin, farys, de watergroep. Same for bare "ontstopper" (occasionally means the tradesman): only gootsteenontstopper, "ontstopper kopen" and "hg ontstopper" are in.
7. **Bever (1547)** is in launch-plan's picker notes but not its core list, so it is not in the 109. One line for Fady if he wants it added.
8. **Sitelink anchors verified on the live site**: #prix, #zone and #contenu exist on /fr/ and /nl/. No FAQ anchor exists, which is why sitelink 4 goes to the terms page.
9. **Ad strength:** both RSAs fully unpinned with 15 headlines and 4 descriptions. If Google reports Average with "add more headlines" on a full set, do not pin to chase the meter.
10. **Google's UI moves.** Every path in section 1 is where the setting lived when this sheet was written; verify on screen. AI Max defaults, the language-setting removal and the intro-credit terms are the three moving targets (research/24 section 5).
11. **NOT in this sheet by decision:** no English ads, no camera or septic or curage keywords, no price numbers, no phone number in any headline or description, no bid adjustments, no PMax, no location asset yet, no per-intent landing URLs (week two, on evidence).
