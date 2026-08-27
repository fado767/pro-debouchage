# research/29 Cookie banner compliance, Belgium

*2026-08-27, Opus, research agent. Raw research, not the owner of any fact. What the banner and the surrounding pages must say and do so Roro is legally safe in Belgium. Written to feed a design session that will restyle the banner, so it ends with two checklists the designer can follow line by line.*

*What was read to write this: the live source in `design/site-source/` (build.js, legal.js, copy-fr.js, copy-nl.js, copy-en.js) and the built output in `site-v1/`, then the official sources listed at the bottom. Where the law is unsettled it says so instead of guessing.*

---

## 0. What we actually ship today (the baseline this report judges)

Read from `design/site-source/build.js` and confirmed in the built `site-v1/`:

- **Consent Mode v2 default stub, inline in `<head>`**, before anything else: `ad_storage:'denied'`, `ad_user_data:'denied'`, `ad_personalization:'denied'`, `analytics_storage:'denied'`, `wait_for_update:500`.
- **Nothing Google loads before Accept.** `gtag.js` is injected by `enable()` only, which runs only after the Accept click or on a stored accept. Before that there is no request to googletagmanager.com, no request to google-analytics.com, no pixel, no iframe. Fonts and images are self-hosted.
- On Accept: one `gtag.js` loader for both destinations, then `gtag('config', 'AW-18413234511')` and `gtag('config', 'G-S3SQ25WZMK')`. The update grants `ad_storage`, `ad_user_data` and `analytics_storage`. **`ad_personalization` is never granted.**
- **Banner:** a fixed card, `role="dialog"`, `aria-label` = the title, with two buttons of identical size, identical weight, identical white background and identical ink border. FR "Tout refuser" / "Tout accepter". NL "Alles weigeren" / "Alles aanvaarden". EN "Refuse all" / "Accept all". No X, no "continue without accepting" trick, no pre-ticked box, no second layer, no settings screen.
- **Storage of the choice:** `localStorage` key `pd_consent`, value `{ads:true|false, v:VERSION, t:timestamp}`, expiring after **182 days**, plus a version key that invalidates old records.
- **Refuse:** nothing is loaded, and `wipe()` deletes any `_ga*` and `_gcl*` cookie on the host and on the dot-host.
- **Withdrawal:** a footer link on every page, `data-consent-open`, labelled "Cookies et mesure" / "Cookies en meting" / "Cookies and measurement", reopens the same card.
- **Privacy page** carries a tag-day cookie section naming Google Ireland Ltd, the `_gcl` and `_ga` prefixes, the six-month choice lifetime and the reopen link. Verified present in `site-v1/fr/confidentialite.html`.
- **Site is fully usable with Refuse.** Phone, WhatsApp and every page work. No cookie wall.
- GA4 is set up with enhanced measurement off, no Google signals, no data sharing. Hits go to `region1.google-analytics.com`.

---

## 1. Consent requirements

### 1.1 The rule and where it comes from

The cookie rule is **article 5(3) of the ePrivacy Directive 2002/58/EC**, transposed in Belgium by **article 129 of the Law of 13 June 2005 on electronic communications**. It requires prior, informed consent before storing information on, or gaining access to information already stored on, a user's terminal equipment. Two exceptions only: transmission of a communication, and what is strictly necessary for a service explicitly requested by the user.

The **quality** of that consent is defined by the GDPR (art. 4(11) and art. 7): freely given, specific, informed and unambiguous, by a clear affirmative action.

**CJEU Planet49 (C-673/17, 1 October 2019)** nailed three points that still bind us:
1. A pre-ticked box is **not** consent. Only active behaviour counts.
2. Article 5(3) applies **whether or not the stored information is personal data**. So our `localStorage` record is in scope of the rule as a technical matter, and so would be any fingerprinting.
3. The user must be told **the duration of the cookies** and **whether third parties have access to them**. That is a hard information requirement, not a nice-to-have.

**EDPB Guidelines 2/2023 on the technical scope of art. 5(3)** (final version 2.0, adopted 7 October 2024) extend the rule beyond cookies to pixels, URL tracking, IP-only tracking, local storage and fingerprinting. Storage and access do not have to happen in the same communication or be performed by the same party. Practical effect for us: "we only use localStorage, not cookies" would never have been a defence, and neither is "the ping carries no cookie".

**The Belgian DPA (APD / GBA) position** is set out in its cookie theme pages and in its **cookie checklist published 20 October 2023**. Its own words: no non strictly necessary cookie may be placed or read without prior consent, and analytics cookies are **explicitly not exempt**, even first-party ones. Belgium has no "audience measurement exemption" like the French CNIL's. Google Ads conversion measurement and GA4 both need consent here. Our build already treats them that way.

### 1.2 Granularity: is one Accept/Refuse pair enough for ads plus analytics?

**This is the one place where our current build is short of the Belgian regulator's published expectation.**

- The **EDPB cookie banner taskforce report (18 January 2023)** does not demand separate ads and analytics buttons on the first layer. Its first-layer demand is a "reject all" **on the same layer** as any "accept all".
- The **APD checklist goes further**, and it is the APD that would judge Roro. It says consent must be **specific**, meaning the user must be able to split their consent **by purpose** (analytical, functional, advertising), and that this per-purpose choice must appear **on the second layer of the banner at the latest**. It repeats the position from its direct marketing recommendation that a **separate consent must be obtained for cookies used for advertising or profiling purposes**, and that consent must be obtainable **per third party**.

Reading that against our build: we have one purpose bundle (ads conversion measurement plus GA4 audience measurement) behind one pair of buttons, and **no second layer at all**. There is nowhere for the user to accept measurement and refuse advertising.

Two honest mitigations, neither of which makes the gap disappear:
- We use **one single third party** (Google Ireland Ltd), so the "per third party" requirement is satisfied by arithmetic.
- We never grant `ad_personalization`, so there is **no profiling and no remarketing**. The Ads tag measures conversions only. An argument that "advertising" in the APD's sense (profiling, personalised advertising) is not happening here is defensible, but it is an argument, not a settled position, and it is not written anywhere on the page today.

**Verdict: fix it.** The cheap, honest fix is a second layer with two switches (audience measurement / advertising measurement) plus a "Tout refuser" that stays on layer one. See B2. This is the single largest legal delta in the current build.

### 1.3 Equal prominence of Refuse

The APD requires a refuse button at the **same level and same prominence** as the accept button, and it names "deceptive design" (contrasting colours that highlight Accept, or hiding Refuse) as a breach. The EDPB taskforce says the same and adds that a "Settings" button next to "Accept all" is **not** a substitute for a reject button.

This is not theory in Belgium. In the **Mediahuis decision (September 2024)** the APD found the banners on De Standaard, Het Belang van Limburg, Het Nieuwsblad and Gazet van Antwerpen non-compliant for exactly this cluster: no clear reject-all on the first layer, misleading button colours, withdrawal harder than giving, and legitimate interest wrongly invoked for non-essential cookies. The order carried **25,000 euro per day per website** if not fixed within 45 days. **RTL Belgium** was found non-compliant on 11 October 2024.

Our two identical white buttons pass this test today. **The design session must not break it.** A blue filled Accept next to a ghost Refuse would be the exact pattern the APD sanctioned.

### 1.4 No cookie walls, no pre-ticked boxes

Cookie walls (site unusable without accepting) are prohibited under the APD's "freely given" heading, as is a banner with only an "accept all" button. Our site works fully after Refuse, and there is no checkbox to pre-tick. Both clean.

### 1.5 Withdrawal as easy as giving

GDPR art. 7(3) plus the APD checklist: "aussi facile de retirer le consentement que de le donner". Our footer link on every page reopens the same card with the same two buttons. That is a correct implementation and it is one of the four things Mediahuis got wrong. Keep it visible after the restyle. Do not bury it, and do not turn it into an icon with no label.

### 1.6 The 182 days

The APD says explicitly that for the storage of cookie preferences **"une durée de vie de 6 mois est en principe raisonnable"**. 182 days is six months. Correct, and the number is stated on the privacy page. Nothing to change.

Note for the future: the **Digital Omnibus proposal published 19 November 2025** would move the cookie rule into the GDPR as a new art. 88a, would let a refusal stand for six months before a new request may be made, and would exempt aggregated audience measurement from consent. **It is a proposal, not law.** Do not build against it. It is worth a re-read of this file in 2027.

### 1.7 Does localStorage instead of a cookie matter for the choice itself?

Two separate questions, and the answers point in opposite directions:

- **Is localStorage in scope of article 5(3)?** Yes. Planet49 says the rule applies regardless of whether the information is personal data, and EDPB Guidelines 2/2023 name local storage explicitly. So the technique buys us no exemption.
- **Does storing the consent choice itself need consent?** No. Recording the user's own choice is strictly necessary for a service the user explicitly requested (their own decision), the same standard exemption every consent cookie relies on. It is exempt **on its purpose**, not on its storage technique.

So the choice of localStorage is legally neutral. It is fine. **But it must still be disclosed**, like any strictly necessary storage: name, purpose, duration, where it lives. Our privacy page says "votre choix est gardé sur votre appareil, six mois au maximum" but never names `pd_consent` and never says it is localStorage rather than a cookie. That is a small, cheap gap. See B4.

One practical risk worth knowing: localStorage is per-origin and is wiped by "clear site data" and by some privacy modes, so a user can be re-asked sooner than six months. That is a UX fact, not a legal defect.

---

## 2. Does Consent Mode v2 default-denied satisfy prior consent?

Short answer for our build: **yes, and by more margin than most sites, because we do not rely on Consent Mode at all for the prior-consent question.**

The distinction that matters:

- **Google's "advanced" consent mode** loads `gtag.js` immediately and sends cookieless pings before any choice, with the consent signals set to denied. Google models the missing conversions from those pings.
- **Google's "basic" consent mode** loads nothing until consent is given.

**No DPA has issued a binding ruling on advanced consent mode.** Say that plainly and do not pretend otherwise. But the direction of travel is clear and it is against advanced mode in the EEA: EDPB Guidelines 2/2023 confirm that "gaining access to information stored in terminal equipment" covers far more than cookie reads, and a pre-consent ping that reads anything from the device (or that is itself an access operation) falls under article 5(3) regardless of whether a cookie is written. The conservative reading, and the one every serious EU practitioner takes, is that advanced mode should be gated behind consent inside the EEA.

**Our build is the strict pattern.** The stub only declares defaults into the dataLayer, which is a local JavaScript array. No network request of any kind reaches Google before the Accept click. `enable()` is the only path that injects the loader script and it is guarded by `loaded` and by the stored choice. This is basic consent mode, plus a defaults stub, which is the belt-and-braces version: the defaults exist so that when the loader finally does arrive it already knows the state, and `wait_for_update:500` covers the race.

**Keep it.** Do not let a future "improve conversion modelling" suggestion talk the project into advanced mode. The measurement upside is modelled numbers, the legal downside is the only genuinely contested question in this whole file. Verify after every rebuild that the network tab is silent before Accept, the same way the tag round G5 did.

Also worth writing down so nobody undoes it: the defaults stub is inline in `<head>` and must **stay** ahead of everything, and `ad_personalization` must **stay denied even after Accept**. That single line is what keeps "we do not profile you and we do not do remarketing" a true statement on the privacy page.

---

## 3. What the banner text must contain, and what it must not do

### 3.1 Must contain, on the first layer

From the APD checklist ("informed", first level) plus Planet49:

1. **The purposes** for which consent is asked, in plain words. Not "we use cookies to improve your experience".
2. **Who is responsible**, and **who the recipients are**. The APD asks for the identity of the controller on the first level. Naming the third party (Google) belongs here too, and Planet49 requires the user to know that third parties have access.
3. **How to accept and how to refuse**, both visible at once.
4. **How to withdraw** the consent afterwards.
5. **A link to the full cookie and privacy information**, which is where the per-cookie detail lives.

Our current first layer carries 1 (purpose, in good plain language), part of 2 (it says "l'outil de Google" but never names the controller PRO DEBOUCHAGE SRL or the full "Google Ireland Ltd"), and 3. It carries **neither 4 nor 5**. There is no link in the banner. That is the second real gap. See B1.

The duration of the cookies and the third-party access detail (Planet49) can live on the linked page rather than in the card, which is the normal layered approach, **provided the link exists**. Right now it does not, so today that information is reachable only by scrolling to the footer of the page behind the banner. Add the link and this is solved.

### 3.2 Must not do (EDPB cookie banner taskforce, 18 January 2023)

The taskforce deliberately did **not** publish numeric criteria for dark patterns. It said supervisory authorities assess each banner case by case, **taking the colour and format of the buttons into account**. So there is no "contrast ratio X is safe" rule to hide behind. The named failures are:

- **No reject option on the first layer** when an accept-all is offered there.
- **Deceptive button colours or contrast** that make Accept the obvious choice and Refuse the recessive one.
- **Deceptive link design**, for example a "refuse" that is styled as plain body text or a barely visible link while Accept is a button.
- **Pre-ticked boxes** and any reliance on continued navigation or scrolling as consent.
- **Legitimate interest** claimed for non-essential cookies (invalid, and one of the Mediahuis findings).
- **Withdrawal harder than consent**.
- **Misleading wording**, including labelling a choice in a way that hides what it does.

Design rules that follow directly, for the restyle:

- Refuse and Accept keep **the same shape, the same size, the same font weight, the same border weight and the same visual level**. If Accept gets a fill, Refuse gets an equally strong fill. Safest is what we have now: two identical buttons.
- **Refuse first or Refuse second is not the issue; equal weight is.** Do not move Refuse below the fold of the card.
- No greying, no reduced opacity, no smaller type, no lower-contrast text on Refuse.
- No countdown, no "recommended" badge on Accept, no motion drawing the eye to Accept.
- Do not add an X or a "later" button. An X that dismisses without a choice is a dark pattern in itself, because the user gets no measurement either way but believes they answered.
- If a second layer is added, its "save my choices" button must not be weaker than an "accept all" sitting beside it.

---

## 4. What the privacy and cookie page must list, per cookie

The APD checklist requires, for each cookie: **name or category, purpose, retention duration, and recipients**, and it wants this at the second-banner level, not only in a separate document that the user has to hunt for. Planet49 makes duration and third-party access mandatory information at consent time. Our current page names the `_gcl` and `_ga` prefixes and the six-month choice lifetime, in prose, with no per-item durations. That is thinner than the checklist asks.

Here is the real set, checked against what the build actually causes:

| Name | Set by | Purpose | Type and lifetime | Consent needed |
|---|---|---|---|---|
| `_gcl_au` | Google Ireland Ltd (Google Ads, via gtag.js) | Links a call or WhatsApp click back to the Google ad that brought the visit, so we know which ads produce work. Conversion measurement only, no personalisation. | First-party cookie, **90 days** | Yes, set only after Accept |
| `_ga` | Google Ireland Ltd (GA4) | Distinguishes one visitor from another so visits are not double counted. | First-party cookie, **2 years** | Yes, set only after Accept |
| `_ga_S3SQ25WZMK` | Google Ireland Ltd (GA4) | Keeps the session state for this specific GA4 property. | First-party cookie, **2 years** | Yes, set only after Accept |
| `pd_consent` | PRO DEBOUCHAGE SRL (our own script) | Remembers whether you accepted or refused, so we do not ask again at every page. | **localStorage**, not a cookie, kept **182 days** then the question is asked again | No, strictly necessary for the choice you made, but it must be disclosed |

Two caveats to keep the file honest:
- The 90 days and 2 years are **Google's documented defaults**. `_ga` lifetime is configurable and Google has changed these values before. The page should say "up to", and the durations should be re-checked at the same time as the yearly legal review rather than treated as fixed forever.
- If Refuse is clicked, `wipe()` clears `_ga*` and `_gcl*`, and the page can truthfully say so. It already does.

The page must also carry, and today only partly does:
- **The controller**, PRO DEBOUCHAGE SRL with the enterprise number. Present.
- **Google Ireland Ltd named as a recipient** in the "Qui reçoit vos données" list. **Missing.** It appears in the cookies section but not in the recipients paragraph, which is inconsistent.
- **The transfer question.** Google Ireland Ltd is the EU contracting entity and GA4 EU traffic is collected on EU servers, but Google LLC in the United States remains a sub-processor. There should be one plain sentence saying data may be processed outside the EU by Google under the EU-US Data Privacy Framework and Google's standard clauses. **Missing entirely today.**
- **The legal basis for the cookies: consent**, and the right to withdraw it. Implied today, never stated as a basis in the "Pourquoi, et sur quelle base" list.
- **The date of last update.** Currently "24 août 2026" in `legal.js` while the tag layer went live 2026-08-27. The APD checklist asks for dated, versioned cookie policies as part of accountability. **Must be corrected.**

---

## 5. Belgian specifics

### 5.1 FR and NL, is both mandatory?

**No law forces a private company's website into two languages.** Article 30 of the Belgian Constitution makes the use of languages free in the private sphere; only public authorities and judicial acts are regulated. The Flemish language decree (Taaldecreet) binds employer-employee relations and certain official documents, not marketing pages.

What does apply:
- **GDPR art. 12(1)** requires the information to be in a concise, transparent, intelligible and easily accessible form, in **clear and plain language**. Information a Dutch-speaking customer in Vilvoorde cannot read is not intelligible to them.
- **Article III.74 of the Code de droit économique** obliges a service provider to make its general conditions available **in the language versions in which they are offered**.
- The **APD checklist applies to every language version available on the site**.

Practical reading for us, and it is a strong one: Pro Débouchage advertises in FR and NL to Brussels and to Flemish Brabant. A Dutch-language ad landing on a Dutch page whose banner or privacy page were French would be indefensible on the art. 12 intelligibility test even without a language law. **We already ship FR, NL and EN in full, banner included. That is the right answer and it should stay complete: every string added to the banner in the restyle must ship in all three at the same time.** A partially translated banner would be worse than a monolingual one.

### 5.2 Enforcement reality for a business this size

- **Fines in the APD's cookie decisions have run roughly 1,500 to 50,000 euro.** The 2019 legal-news website case was 15,000 euro. The Mediahuis order threatened 25,000 euro per day per site for non-remediation.
- The targets so far have been **publishers and media groups with large audiences and ad-tech stacks**, not one-page service businesses with a single Google tag. Realistic risk for Roro is low.
- The APD's most recent posture is worth knowing: on **26 June 2025 the Litigation Chamber dismissed 16 NOYB cookie-banner complaints** as an abuse of the right to complain, because NOYB used automated detection and enrolled its own staff as complainants after instructing them to visit the sites. **The decision did not examine any banner design question.** So it is not a softening of the substantive rules, and it must not be read as one. What it does signal is that the APD prioritises genuine individual harm over bulk technical complaints.
- The realistic trigger for a small business is therefore **an individual complaint from an actual visitor**, or a sweep. The defence against both is cheap: a banner that visibly refuses as easily as it accepts, and a dated policy that matches what the site really does.

### 5.3 One Belgian point in our favour worth writing down

Because the site is static, self-hosts its fonts and images, and loads nothing third-party before consent, a visitor who refuses generates **zero** requests to any other company. That is a stronger factual position than almost any Belgian competitor page, and it is already stated truthfully on the privacy page. Keep that sentence true. The moment anyone adds an embedded map, a YouTube video, a Font Awesome CDN or a review widget, it becomes a lie and it must be rewritten the same day.

---

## 6. GA4 specifics

**Is GA4 currently acceptable in Belgium?** With prior consent, yes, on the current state of the law, and our configuration is on the safe side of the remaining doubts.

The history matters. The 2022 and 2023 decisions against Google Analytics from the Austrian, French, Italian and Danish authorities were **transfer decisions**, about Universal Analytics sending EU data to the United States without an adequacy decision after Schrems II. They were not decisions that analytics is inherently unlawful. That defect was addressed by the **EU-US Data Privacy Framework adequacy decision of 10 July 2023**, which the General Court upheld in September 2025. **An appeal is pending before the Court of Justice (C-703/25 P), and the framework's political stability has been questioned since the PCLOB lost quorum in 2025.** So the transfer basis is currently valid but not beyond challenge. That is the honest state, and it applies to every US-linked tool, not just GA4.

What Google now does with EU traffic, from its own documentation:
- GA4 **does not log or store individual IP addresses** from EU, Swiss or UK users.
- EU traffic is **collected through domains and servers based in the EU** before being forwarded for processing. That is exactly what `region1.google-analytics.com` is.
- The IP is used to derive coarse geography (city, region, country, continent) and is **then discarded**. The old `anonymize_ip` parameter is obsolete in GA4 because this behaviour is built in and cannot be switched off.

Our extra safeguards, already in place and worth keeping named in the file so nobody quietly reverses them:
- **Enhanced measurement off.** Fewer automatic events, less incidental data.
- **Google signals off.** No cross-device identification, no demographic data, no Google-account-linked profiles.
- **Data sharing with Google off.**
- **`ad_personalization` never granted**, so nothing feeds remarketing or personalised advertising.
- **Nothing loads before Accept**, which is the point the analytics decisions actually turned on.

Worth adding, cheap and defensible:
- **Set GA4 data retention to 2 months instead of the 14-month default.** For a business whose only question is "did the ads make the phone ring", 14 months of event-level retention is data we do not need. Data minimisation, art. 5(1)(c). This is a Google Analytics admin setting, not a code change.
- **Never send anything that could identify a caller** into GA4 or Ads: no phone number, no name, no address, in any event parameter or user property. Today we send only `cta` labels like `sticky-call`, which is clean. Keep it that way. Enhanced conversions with hashed customer data would change this analysis and must not be switched on without a fresh look.
- **Confirm the Google Ads and GA4 accounts sit under Google Ireland Ltd terms** with the data processing terms accepted. This is an account-level check for Fady, not a code change.

**Not required:** a DPIA. A single static page with consent-gated conversion measurement, no profiling, no special-category data and no large-scale monitoring is nowhere near the art. 35 thresholds or the APD's published DPIA list. A short record of processing (art. 30) is proportionate and mostly written already, scattered across the privacy page.

---

## A. COMPLIANT ALREADY

Point by point, what the current implementation already satisfies. The design session must not undo any of these.

1. **Prior consent is real.** Nothing from Google is requested before the Accept click: no script, no pixel, no ping. This is basic consent mode, the stricter pattern, and it sidesteps the only genuinely contested question about Consent Mode v2. (art. 5(3) ePrivacy, art. 129 Law 13 June 2005, EDPB Guidelines 2/2023)
2. **Consent Mode v2 defaults are all denied** and are declared inline in `<head>` before anything else, with `wait_for_update:500`.
3. **`ad_personalization` is never granted**, even after Accept. No profiling, no remarketing. This is what makes the "we do not profile you" claim true.
4. **Refuse and Accept have strictly equal prominence:** same size, same weight, same colour, same border, side by side, on the first layer. This is the exact defect the APD sanctioned in Mediahuis (September 2024) and RTL Belgium (October 2024).
5. **A reject option exists on the first layer**, not hidden behind "Settings". (EDPB cookie banner taskforce, January 2023)
6. **No pre-ticked boxes, no consent by scrolling, no consent by continued navigation.** (Planet49, C-673/17)
7. **No cookie wall.** The whole site, the phone number and WhatsApp all work identically after Refuse.
8. **No legitimate interest is claimed** for any non-essential cookie. Consent is the only basis used.
9. **Withdrawal is as easy as consent:** a labelled link in the footer of every page reopens the same card with the same two buttons.
10. **Refuse actively deletes** any existing `_ga*` and `_gcl*` cookie, on the host and on the dot-host.
11. **The stored choice lasts 182 days**, which matches the APD's own "6 mois est en principe raisonnable" for cookie preference storage.
12. **Storing the choice in localStorage is fine.** It is exempt on its purpose (strictly necessary to honour the user's own decision), not on its technique, so the technique is legally neutral.
13. **Banner text is plain and honest** in all three languages, names Google, states that nothing loads before the choice, and states that refusing changes nothing about the visit. No fog, no "improve your experience".
14. **The banner ships complete in FR, NL and EN**, matching the language of the page. This satisfies GDPR art. 12(1) intelligibility for a business advertising in both language groups.
15. **The privacy page has a real cookie section** that names Google Ireland Ltd, the `_gcl` and `_ga` prefixes, the six-month choice lifetime, the reopen link and the fact that refusing deletes the cookies.
16. **The page tells the truth about third-party requests:** fonts and images are self-hosted, so a refusing visitor contacts no other company at all.
17. **The controller is identified** on the privacy page with address and enterprise number BE 1027.454.187, with contact routes and the APD complaint address.
18. **The build has a single switch (`TAGS_OFF=1`)** that removes the whole tag layer and restores the "no cookies" wording, so the published page can never claim less or more than it does.
19. **GA4 is configured minimally:** enhanced measurement off, Google signals off, data sharing off, EU collection endpoint (`region1.google-analytics.com`), no individual IP logged by Google for EU traffic.
20. **No personal data is sent to Google.** Event parameters carry only CTA labels such as `sticky-call`. No name, no phone number, no address.

---

## B. MUST / SHOULD CHANGE

Ordered by legal weight. FR and NL wording is given where wording is prescribed. Write it as native copy in each language, never as a translation of the other (AGENTS.md section 6).

### B1. MUST: the banner's first layer needs a link to the policy, and must say how to withdraw

The APD requires the first level to inform on purposes, the responsible party, how to accept and refuse, **and how to withdraw**. Planet49 requires cookie duration and third-party access to be known at consent time, which is normally satisfied by a link to the detailed page. Our card has no link at all.

Add one line of text under the paragraph, with the policy link inside it. Keep it short.

**FR:**
> Vous pouvez changer d'avis quand vous voulez, via le lien "Cookies et mesure" en bas de page. [Tout savoir sur les cookies](/fr/confidentialite.html)

**NL:**
> U kunt altijd van gedachten veranderen via de link "Cookies en meting" onderaan de pagina. [Alles over onze cookies](/nl/privacy.html)

**EN:**
> You can change your mind whenever you want, with the "Cookies and measurement" link at the bottom of the page. [All about our cookies](/en/privacy.html)

Design note: this link is not a third button. Style it as a text link inside the paragraph so it cannot be mistaken for a way out of the choice, and make sure adding it does not shrink either button.

### B2. MUST: add a second layer with a per-purpose choice

The APD checklist requires consent to be splittable **by purpose**, on the second layer at the latest, and asks for a separate consent for advertising purposes. One pair of buttons covering ads plus analytics does not meet its published expectation. Our single-third-party and no-personalisation position is a mitigation, not an answer.

Design shape, keeping layer one intact so nothing in list A breaks:

- **Layer one keeps exactly what it has:** title, paragraph, "Tout refuser" and "Tout accepter", equal weight, plus the new policy link (B1) plus a **third, visually quieter but clearly legible** text control: "Choisir" / "Zelf kiezen" / "Choose". A settings link is only a violation when it **replaces** the reject button. Alongside an equal reject button it is allowed and here it is required.
- **Layer two** replaces the card contents with two switches, both **off by default** (art. 4(11), Planet49: no pre-ticked anything), plus a "Enregistrer mes choix" button and a "Tout refuser" that stays available.

Suggested layer-two labels and one-line explanations.

**FR:**
- Switch 1 title: `Mesure d'audience`
  Text: `Nous dit combien de personnes lisent la page et laquelle. Outil : Google Analytics (Google Ireland Ltd).`
- Switch 2 title: `Mesure des annonces`
  Text: `Nous dit si un appel vient d'une annonce Google. Aucune publicité personnalisée, aucun reciblage. Outil : Google Ads (Google Ireland Ltd).`
- Buttons: `Enregistrer mes choix` and `Tout refuser`
- Back link: `Retour`

**NL:**
- Switch 1 title: `Bezoekersmeting`
  Text: `Vertelt ons hoeveel mensen de pagina lezen en welke. Tool: Google Analytics (Google Ireland Ltd).`
- Switch 2 title: `Advertentiemeting`
  Text: `Vertelt ons of een telefoontje van een Google-advertentie komt. Geen gepersonaliseerde reclame, geen retargeting. Tool: Google Ads (Google Ireland Ltd).`
- Buttons: `Mijn keuze bewaren` and `Alles weigeren`
- Back link: `Terug`

**EN:**
- Switch 1 title: `Audience measurement`
  Text: `Tells us how many people read the page, and which one. Tool: Google Analytics (Google Ireland Ltd).`
- Switch 2 title: `Ad measurement`
  Text: `Tells us whether a call came from a Google ad. No personalised advertising, no retargeting. Tool: Google Ads (Google Ireland Ltd).`
- Buttons: `Save my choices` and `Refuse all`
- Back link: `Back`

Build consequence for whoever implements it: `pd_consent` stops being `{ads:bool}` and becomes something like `{ads:bool, analytics:bool, v, t}`, the version key **must be bumped** so old records are invalidated, `enable()` must grant `ad_storage` and `ad_user_data` only when `ads` is true and `analytics_storage` only when `analytics` is true, and it must `config` only the destinations that were accepted. `ad_personalization` stays denied in every branch.

**Fady's call, and it belongs in a widget:** the simpler alternative to all of the above is to **drop GA4 and keep only the Ads conversion tag**. Then there genuinely is one purpose, one pair of buttons is defensible, and no second layer is needed. It costs the traffic reporting and keeps the money question. That is a business decision, not a legal one.

### B3. MUST: name Google Ireland Ltd in the recipients list on the privacy page

Today the recipients paragraph lists the technician, the accountant, the tax administration, the host, the mail provider and WhatsApp, but not Google, while the cookie section below names Google. That inconsistency is exactly the kind of thing that reads badly in a complaint.

Add to the recipients sentence.

**FR:** `Google Ireland Ltd, uniquement si vous avez accepté la mesure, et uniquement pour cette mesure.`

**NL:** `Google Ireland Ltd, alleen als u de meting hebt aanvaard, en alleen voor die meting.`

**EN:** `Google Ireland Ltd, only if you accepted the measurement, and only for that measurement.`

### B4. MUST: put a real per-item table on the privacy page

The APD wants name, purpose, duration and recipient per cookie. Prose with two prefixes is not that. Use the table in section 4 of this file. Include `pd_consent` and say plainly that it is not a cookie.

**FR intro line above the table:**
> Voici exactement ce qui est déposé sur votre appareil si vous acceptez, et ce qui est gardé même si vous refusez.

**NL:**
> Dit is precies wat er op uw toestel komt als u aanvaardt, en wat er bewaard blijft ook als u weigert.

**FR row for our own record:**
> `pd_consent` (PRO DEBOUCHAGE SRL). Ce n'est pas un cookie, c'est une petite note gardée par votre navigateur. Elle retient votre réponse pour ne pas vous reposer la question à chaque page. Gardée 182 jours, puis la question revient. Elle ne part nulle part et ne contient rien d'autre que votre choix.

**NL:**
> `pd_consent` (PRO DEBOUCHAGE BV). Dit is geen cookie, maar een klein briefje dat uw browser bijhoudt. Het onthoudt uw antwoord zodat we het niet op elke pagina opnieuw vragen. Het blijft 182 dagen staan, daarna komt de vraag terug. Het gaat nergens naartoe en bevat niets anders dan uw keuze.

Write "jusqu'à" / "tot" before the Google durations, since Google sets them and can change them.

### B5. MUST: add one sentence on transfers outside the EU

Nothing on the page addresses it today, and it is a standard art. 13(1)(f) item.

**FR:**
> Si vous acceptez la mesure, Google peut traiter ces données en dehors de l'Union européenne, notamment aux États-Unis. Google le fait dans le cadre de la décision d'adéquation européenne pour les États-Unis et de ses clauses contractuelles types. Les données de mesure des visiteurs européens sont d'abord collectées sur des serveurs européens et votre adresse IP n'est pas conservée par Google.

**NL:**
> Aanvaardt u de meting, dan kan Google die gegevens ook buiten de Europese Unie verwerken, onder meer in de Verenigde Staten. Google doet dat op basis van het Europese adequaatheidsbesluit voor de Verenigde Staten en zijn standaardcontractbepalingen. De meetgegevens van Europese bezoekers worden eerst op Europese servers verzameld en uw IP-adres wordt niet door Google bewaard.

### B6. MUST: fix the "last updated" date and version the page

`legal.js` still says 24 August 2026 while the tag layer shipped 27 August 2026. The APD asks for dated, versioned cookie policies as an accountability record. Set the date to the day the banner change deploys, and keep bumping it with every change to the cookie section.

### B7. SHOULD: state consent as the legal basis for the measurement

The "Pourquoi, et sur quelle base" list covers quotes, invoicing, insurance reports and photos, but never lists the measurement. Add a line.

**FR:** `Savoir si nos annonces amènent des appels : votre consentement, que vous pouvez retirer quand vous voulez.`

**NL:** `Weten of onze advertenties telefoontjes opleveren : uw toestemming, die u altijd kunt intrekken.`

### B8. SHOULD: show the current choice when the banner is reopened

When a visitor clicks the footer link today, the card reappears as if they had never chosen. It works, but the withdrawal path is more convincing when the user sees what is stored. With the B2 switches this comes for free: pre-set each switch to the stored value (this is not a pre-ticked box, it is a display of an existing decision), and label the primary button "Enregistrer mes choix" / "Mijn keuze bewaren".

On the first visit, both switches must be **off**.

### B9. SHOULD: keep the banner accessible

Not a cookie rule, and the European Accessibility Act most likely does not reach a service page with no online transaction, run by a micro-enterprise. Do it anyway, because it is cheap and because an unusable Refuse button is a dark pattern by accident:

- Add `aria-modal` handling or, better, do not trap focus at all and let the page stay usable (which supports the "no cookie wall" position).
- Move focus into the card when it opens, and return focus to the footer link when it closes from the footer link.
- Both buttons reachable by keyboard, visible focus ring, tab order Refuse then Accept.
- Do not let the card cover the sticky call bar. The phone number is the business; it must stay tappable while the banner is up.
- Minimum 44 by 44 px touch targets on mobile.

### B10. SHOULD: two settings changes with no code

- **GA4 data retention: 2 months** instead of the 14-month default. Data minimisation, and we do not use event-level history.
- **Confirm** the Ads and GA4 accounts are on Google Ireland Ltd terms with the data processing terms accepted. Fady's click, one time.

### B11. DO NOT DO

Write these into the design brief as prohibitions:

- Do not make Accept a filled coloured button next to a ghost or outlined Refuse. This is the Mediahuis finding.
- Do not add an X, a "later", or a click-outside-to-dismiss.
- Do not replace the Refuse button with "Settings" or "Manage preferences".
- Do not switch to advanced consent mode, or to any setup that fires anything at Google before the click.
- Do not grant `ad_personalization`.
- Do not add any third-party embed (map, video, review widget, chat, font CDN) without rewriting the "no third-party request" claim the same day.
- Do not turn on enhanced conversions, Google signals, or user-provided data.
- Do not ship a banner string in one language before the other two exist.

---

## Sources

Official first.

- [Directive 2002/58/EC (ePrivacy), art. 5(3)](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32002L0058)
- [Law of 13 June 2005 on electronic communications, art. 129 (Belgian transposition)](https://www.ejustice.just.fgov.be/cgi_loi/change_lg.pl?language=fr&la=F&cn=2005061332&table_name=loi)
- [Regulation (EU) 2016/679 (GDPR), art. 4(11), 7, 12, 13](https://eur-lex.europa.eu/eli/reg/2016/679/oj)
- [CJEU, C-673/17, Planet49, 1 October 2019](https://curia.europa.eu/juris/liste.jsf?num=C-673/17)
- [EDPB, Report of the work undertaken by the Cookie Banner Taskforce, 18 January 2023](https://www.edpb.europa.eu/our-work-tools/our-documents/other/report-work-undertaken-cookie-banner-taskforce_en)
- [EDPB, Guidelines 2/2023 on the technical scope of art. 5(3) ePrivacy, version 2.0 adopted 7 October 2024](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-22023-technical-scope-art-53-eprivacy-directive_en)
- [Belgian DPA (APD), Cookies et autres traceurs](https://www.autoriteprotectiondonnees.be/professionnel/themes/internet/cookies)
- [Belgian DPA (APD), Checklist pour une utilisation correcte des cookies, 20 October 2023 (PDF)](https://www.dataprotectionauthority.be/publications/checklist-cookies.pdf)
- [Belgian DPA (APD), Bannières cookies : l'EDPB publie des exemples de pratiques non conformes, 10 February 2023](https://www.autoriteprotectiondonnees.be/citoyen/actualites/2023/02/10/bannieres-cookies-ledpb-publie-des-exemples-de-pratiques-non-conformes)
- [EDPB news, Belgian DPA fine of 15,000 euro against a legal-news website (2019)](https://www.edpb.europa.eu/news/national-news/2019/belgian-dpa-has-imposed-fine-eu15000-website-specialized-legal-news_en)
- [Commission Implementing Decision (EU) 2023/1795, EU-US Data Privacy Framework adequacy, 10 July 2023](https://eur-lex.europa.eu/eli/dec_impl/2023/1795/oj)
- [Google, GA4 EU-focused data and privacy (IP handling, EU collection endpoints)](https://support.google.com/analytics/answer/12017362)
- [European Commission, Digital Omnibus proposal, 19 November 2025 (proposal only, not law)](https://www.europarl.europa.eu/legislative-train/theme-a-new-plan-for-europe-s-sustainable-prosperity-and-competitiveness/file-digital-package)

Commentary used to read the APD checklist and the Belgian decisions, secondary and flagged as such.

- [Claeys & Engels on the APD cookie checklist](https://www.claeysengels.be/fr-be/nouvelles-evenements/checklist-pour-une-utilisation-correcte-des-cookies-lautorite-de-protection)
- [Elegis on the APD cookie checklist](https://www.elegis.be/fr/nouvelle/lutilisation-correcte-des-cookies-une-checklist-publiee-par-lapd)
- [Cookie Information on the Mediahuis decision, September 2024](https://cookieinformation.com/resources/blog/what-should-your-cookie-banner-look-like-after-the-new-mediahuis-dpa-decision-in-belgium/)
- [ppc.land on the Mediahuis decision and the 25,000 euro per day order](https://ppc.land/belgian-dpa-imposes-strict-measures-on-mediahuis-for-cookie-consent-violations/)
- [Clifford Chance on the APD decisions of 26 June 2025 dismissing 16 NOYB complaints](https://www.cliffordchance.com/insights/resources/blogs/talking-tech/en/articles/2025/07/belgian-dpa-decision-on-noyb-cookie-complaints.html)
- [Inside Privacy on the EDPB cookie banner taskforce report](https://www.insideprivacy.com/eu-data-protection/edpb-publishes-report-of-cookie-banners-taskforce/)
- [Taylor Wessing on the Digital Omnibus and cookies](https://www.taylorwessing.com/en/global-data-hub/2026/the-digital-omnibus-proposal/gdh---the-digital-omnibus---cookies)

---

## What is unsettled, stated plainly

1. **Advanced consent mode has never been ruled on by any DPA.** Our build avoids the question entirely by loading nothing. That is a choice, not a legal necessity, and it is the right choice.
2. **Whether conversion measurement without personalisation counts as "advertising" for the APD's separate-consent rule.** Arguable both ways. B2 removes the need to argue.
3. **The EU-US Data Privacy Framework is valid today but under appeal (C-703/25 P)** and politically fragile. If it falls, every US-linked tool including GA4 needs re-examining, not just ours.
4. **The Digital Omnibus could exempt aggregated audience measurement from consent altogether.** It is a November 2025 proposal at an early stage. Build against today's law.
5. **Google's cookie durations (90 days, 2 years) are Google's documented defaults and can change.** Write "up to" and re-check yearly.
