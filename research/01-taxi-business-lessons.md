# What the taxi business already learned, for pro-debouchage

*Written 2026-08-22 by a research session reading `C:\Users\fadya\Desktop\taxi-business\` read only. Nothing there was changed. Every fact below cites the file it came from. Where the files do not answer, this file says "not in the files". Opinions are marked as such and are the researcher's, not the taxi files'.*

*One structural difference to keep in mind while reading: the taxi business runs ONE template for many drivers. Pro-debouchage is one client, no template. So every rule below that exists to protect the template (template first, demo approval, one design for all) does not apply, and a few rules that exist because of scale (the driver folder standard, CLIENTS.md, the upload set) can be simplified. Everything about ACCOUNTS, GOOGLE and ADS applies unchanged, because Google does not care how many clients you have.*

---

## A. THE ACCOUNT SETUP SEQUENCE, in the order it must happen

Source for the whole sequence: `Claude Project md files/client-onboarding-SOP.md`, Phases 0 to 9. The freshest full run from zero is Henok, 2026-08-07 to 2026-08-21, recorded in `_incoming/taxi-henok/henok-plan.md` and distilled back into the SOP on 2026-08-21.

**The standard stack, identical for every client** (SOP line 5): Infomaniak for the domain in the client's name, Google Workspace for his professional mail AND his single Google login, Google Business Profile, Cloudflare Pages for hosting in the ONE agency Cloudflare account, Google Ads.

**The critical chain, in one line** (`_incoming/taxi-henok/henok-plan.md` section 1): clash check APPROVED, then domain plus Workspace, then Google Business Profile created and VERIFIED, then reviews, then go live, then ads.

### A0. Before anything: the clash check gate

- The brand and domain clash check runs FIRST on a new client and must return APPROVED before any domain purchase or any Google profile (SOP "Three gates that never bend", gate 3, and `Claude Project md files/brand-clash-check.md`).
- Eight checks: business name on Google and Maps, the person's own name, the domain plus variants, existing `info@` mail ownership, existing Google profile, the KBO public register, the Benelux trademark register (BOIP / TMview), and a light look at Facebook and Instagram (`brand-clash-check.md`, "The checks").
- While in the KBO, write down what is actually there: registered name, whether a commerciele benaming exists at all, the vestigingseenheidsnummer, whether he is btw-plichtig, and his activity codes. Mulu's lookup was never really done and `Mulu Taxi` sat on a live legal page as data controller for months although no such name existed in the register (`brand-clash-check.md`, check 6).
- A clash verdict governs the BUSINESS name and the domain only, never the person's own name (`brand-clash-check.md`, standing rule 2026-08-03).
- The trade name for the site is read off the register at this moment, never off the client's word (SOP Phase 2, added 2026-08-21). For an eenmanszaak the trade name sits on the VESTIGINGSEENHEID, not on the onderneming (SOP Phase 3, "The handelsnaam route").

### A1. The Chrome profile (two human steps, neither can be automated)

Source: SOP Phase 3, "Before anything else in this Phase: the browser the driver's accounts live in", written 2026-08-21 from Henok's run.

1. A dedicated Chrome profile per client, created BY HAND. Computer use grants browsers read only access and Chrome's own profile UI is out of reach of the extension, so Claude cannot create it.
2. That new profile must then be signed OUT of Google. A fresh Windows Chrome profile can arrive carrying a live Google web session. The profile card and the web page disagree, and only `myaccount.google.com` tells you which account Google will actually use. On Henok's night this caught the wrong account twice before anything was typed.
3. Grant the Claude extension its site permissions IN THE NEW PROFILE: `myaccount.google.com`, `admin.google.com`, `google.com`, `business.google.com`. Separate from installing the extension and separate from signing in to Claude.
4. At Chrome's "Sign in to Chrome?" prompt always choose to use Chrome without an account. Accepting creates a work profile that syncs the client's data through the agency machine and pulls his Workspace policies into the browser, which is a loose end at handover.
5. The avatar account switch rule (Fady, 2026-08-21, in SOP Phase 3 and `mulu-ads-operating-program.md` section 7): a session that touches both an agency login and a client login switches accounts itself from the avatar and confirms the active account before reading anything. A dashboard that looks empty usually means the wrong account.

### A2. Infomaniak domain (about 10 to 13 euro, one evening, plus a client click)

Source: SOP Phase 3, the domain bullets and the seven-screen fresh-registration recipe.

- Model, DECIDED 2026-07-30 and final: ONE agency Infomaniak account, one Organisation per client, and a separate account per client is not to be re-proposed (`DECISIONS.md` section C, 2026-07-30).
- Organisation carries the clean trade name WITHOUT the city. Pick type Company, not Personal: a Personal Organisation is auto-named from the creator's own name. It hides at avatar, Settings, Organization, Add an organisation, not in the left sidebar (SOP Phase 3).
- Fill the Organisation's contact details with the CLIENT's address and phone BEFORE ordering: Infomaniak's Organisation seeds the WHOIS holder. Set the phone country to Belgium first, it defaults to Switzerland. Leave the VAT number BLANK, because a Belgian VAT number switches Infomaniak to reverse charge and a client under art. 56bis then owes a bijzondere btw-aangifte on a 12 euro domain (SOP Phase 3).
- The seven traps on a fresh registration, from Henok 2026-08-07 (SOP Phase 3):
  1. The shop asks which Organisation to bill and tracks that SEPARATELY from the manager's active Organisation.
  2. Three upsells are PRE-SELECTED and cost about 95 euro a year: DNS Fast Anycast (untick), the free kSuite mailbox (refuse, it would fight Google Workspace with Infomaniak MX records), Web Hosting at about 7 euro a month (refuse). The basket had already reached 91,84 euro.
  3. Renewal Warranty (about 2 euro a year) is the opposite, it is OPT IN and the default button continues without it.
  4. The owner step DEFAULTS TO YOU. Accepting registers the client's domain to Fady. Use Specify another owner, create the client as an Individual with HIS personal e-mail (never `info@` on his own domain, that mailbox does not exist yet), and set Language for contact to Dutch.
  5. Infomaniak e-mails a 6-digit code TO THE CLIENT to verify that address and the order cannot proceed without it. He must be reachable in real time and warned before you start. Codes expire (one issued at 20:05 was rejected at 20:45).
  6. Each Organisation has its own billing, so the agency card is not saved and must be entered at first purchase. Bank transfer takes 10 working days and is not an option.
  7. A Cloudflare zone CANNOT be created before the domain exists. Order is buy, create zone, read the nameserver pair live, set the nameservers.
- **The step where a fresh `.be` actually stalls**: DNS Belgium sends its own SEPARATE mail to the holder's personal address with a holder-validation link. Until he clicks it the domain is paid for and registered but returns NXDOMAIN, so nothing downstream can move. Henok clicked about 90 minutes after the session closed and the whole chain unblocked at once. Warn the client about BOTH mails up front (SOP Phase 3).
- **Standing rule, unconditional and permanent**: verify the registry delegation after every transfer or purchase, on the day AND again a day or two later, via DNS Belgium WHOIS or `dig NS <domain> @a.nsset.be`. On 2026-08-04, five days after Mulu's transfer, `mulutaxi.be` had NO nameservers at the registry and his site and mail were fully down while Infomaniak's dashboard still showed it active. Infomaniak admitted the fault on ticket `INK-CFB-91956-567` (SOP Phase 3).
- Who pays: Fady fronts the domain and Workspace during the build and the card moves to the client at handover. This is FRONTING, not a freebie, and the domain and Workspace are NOT included in the retainer (`_incoming/taxi-henok/henok-plan.md`, cost rule 2026-07-30).

### A3. Google Workspace (Business Starter, 14-day trial, about 9,80 euro a month incl. VAT)

Source: SOP Phase 3, "THE FROM-ZERO WORKSPACE RECIPE", 12 steps, written 2026-08-21 from Henok's run of 2026-08-11 (took roughly 20:30 to 22:00 including the GBP).

- Prices verified 2026-08-11, unchanged since 2026-07-24: Starter 8,10, Standard 16,20, Plus 25,30 euro per user per month excl. btw. Standard is FLEXIBLE MONTHLY, because never being locked in is our own promise and the yearly contract saves only about 19 euro a year (SOP Phase 3).
- Tell the client what the mailbox costs BEFORE you set it up, so the first invoice is never a surprise (SOP Phase 3).
- **Checkout is the expensive trap**: it opens pre-loaded on Plus at 25,30 with one big Start a trial button, and Business Starter is not shown at all. It hides behind "Compare plans". The Annual toggle at the bottom must stay OFF (SOP Phase 3, recipe step 4).
- Tax information stays BLANK, same art. 56bis reason as Infomaniak. The card's billing address must match what the bank holds for that card, so untick "same as" while the fronting card is the agency's (recipe step 5).
- **Domain verification: REFUSE the one-click Cloudflare integration** (an Entri flow). It would sign the AGENCY Cloudflare into the CLIENT profile and grant a third party write access to a DNS account holding EVERY client's zone. Take Other verification options and add the TXT by hand (recipe step 7). This is the single most important line in the whole recipe.
- Add the MX record BEFORE clicking Confirm, then Google verifies the domain and activates Gmail in one step. Current Google MX is ONE record: name `@`, priority 1, value `smtp.google.com` (recipe step 8).
- The Confirm button is greyed out until you tick the acknowledgement checkbox beside it, and clicking it without ticking reads exactly like a failure (recipe step 9).
- Add SPF in the same Cloudflare visit as the MX: `v=spf1 include:_spf.google.com ~all`, softfail not hardfail. DKIM (2048-bit, selector `google`, via Admin, Apps, Gmail, Authenticate email) and DMARC follow before go-live: `p=none` at day 0, `p=quarantine` at about day 14, optional `p=reject` at month 2. Order matters, SPF and DKIM verified FIRST, then DMARC, because a premature quarantine eats the client's own booking replies (SOP Phase 3, "E-mailbeveiliging").
- Verify per domain with `nslookup -type=TXT`, then send a mail to a Gmail and read Show original: SPF PASS, DKIM PASS, DMARC PASS before handover (SOP Phase 3).
- **Trial timing, amended 2026-08-21**: the original rule (start the trial only once GBP verification is underway) is unrunnable from zero, because the profile is created signed in as `info@domein.be` and that mailbox does not exist until the trial starts. The amended rule: start the trial in the SAME sitting as the GBP creation, provided the verdict is expected inside the 14 days. Run the subtraction every time: trial start plus 14 days, minus the shoot day, minus five working days for the verdict. If the shoot day is not yet fixed, the trial does not start (SOP Phase 3).
- What only a human could do on Henok's night: create the Chrome profile, sign it out, install the extension and grant permissions, type the account password, enter the card, and click the account-creating submit. Everything else was Claude's (recipe step 12).

### A4. Google Business Profile and the VIDEO verification

Source: SOP Phase 4. The owner of the full detail is `reference/gbp-guide.md` (read only reference, not read in this session beyond the SOP's distillation).

- **The brand-asset gate, asked HERE and not the week of the shoot** (SOP Phase 4, added 2026-08-21): does the client have (a) a branded asset carrying the EXACT profile name, (b) business cards arriving in time, or (c) a permit carrying the name? If none of the three, the cards get designed and ordered NOW and the profile waits. On Henok the car was an unbranded grey Skoda and his printed card said the FAILED name, which would have hit the single most common rejection reason.
- Create the profile signed in as `info@domein.be`, so the client is Primary Owner from minute one and there is no ownership transfer and no 7-day lock (SOP Phase 4).
- Clean business name, no city or keyword stuffing. Primary category, only true secondaries. Service-area business: choose delivering to customers, set the service area, HIDE THE ADDRESS. Website blank for now (SOP Phase 4).
- **The hidden address is a Google rule for service-area businesses, not a decision of ours**, and the client's full business address is shown on his own website by default (SOP Phase 4 dated note 2026-08-22, and SOP Phase 2.5).
- Phone: the GBP phone field does NOT normalise. Enter the NATIONAL format with the country selector on Belgium, not `+32...` (SOP Phase 4, corrected 2026-08-21).
- Six creation traps (SOP Phase 4, distilled 2026-08-21): search Maps for the name and any old trading name first and rule out lookalikes BY PHONE NUMBER not by name; the service-area picker offers the wrong country (always type `<Town>, Belgium`); the name field steals focus and once briefly read the category text; after "Verify Later" Google runs a Customize profile gauntlet and every one of it is SKIPPED because of our freeze rule; a Google Ads credit is offered at the very end and claiming it early burns its spend window; the verification mailing address stays hidden from the public for a service-area business.
- **The verification video spec** (SOP Phase 4, from `_incoming/taxi-henok/henok-video-shoot-plan.md` section 2):
  - Google is testing three claims in ONE unbroken take: this location is real, this business really operates, you control it.
  - Shot order, about 75 seconds total: (1) the street, 15s, wide pan across a street name sign, house number, landmark, and this is the shot most first-timers skip and the most common single reason for rejection; (2) the vehicle as the business, 20s, plate, roof sign, permit plate, branded signage, second angle; (3) proof of control, 10s, take the keys out and UNLOCK it on camera, open the door, get in; (4) tools of the trade, 15s, interior equipment; (5) the paperwork, 15s, held flat and readable; (6) close on the person with the vehicle.
  - **The rule that decides shot 5**: if the documents carry a business name that is not the profile name, SKIP shot 5 entirely rather than film a mismatch.
  - Hard rules: one continuous shot, no cuts, restart if interrupted, filmed LIVE inside the verification flow on a phone signed in as the owning account (pre-recorded footage does not count, which is why the profile must exist before the visit), 60 to 90 seconds, daylight, hold 3 to 4 seconds on anything with text, no customer faces, voice better left out, everything on camera matches the profile name exactly.
  - Pre-flight: vehicle clean, everything with an OLD name out of shot, documents in hand, vehicle LOCKED before the take, parked where a street sign is readable, phone above 50 percent, Do Not Disturb ON (an incoming call ends the take), one dry run watched back, then the real one.
- **Do the recording on shoot day and then submit and walk away** (SOP Phase 4, added 2026-08-12). It costs 15 to 20 minutes on top of a photo or video shoot instead of a whole separate visit. Google's own end-of-flow text says up to five days. The moment it is submitted, STOP: Google pushes you to add photos, a logo and more details, and every bit of that is skipped, because filling the profile is its own session AFTER the verdict.
- **How long it actually took on Henok**: video filmed and submitted 2026-08-12, verdict in and profile filled 2026-08-17, so five days (`_incoming/taxi-henok/henok-plan.md` Step 5). No rejection happened on either driver, but the SOP says verification can take a few days and sometimes needs a second attempt, and a rejection arrives as a "Review issues" notice inside the profile with a specific reason, and you never resubmit the same footage (SOP Phase 4).
- **Add the agency account as Manager AFTER the verdict, never at creation** (SOP Phase 4, made explicit 2026-08-21). A second account attached to a brand-new unverified listing is a suspension shape.
- **The Manager invite can go quiet**: on Henok it was sent 2026-08-17 and Google's notification e-mail never arrived. Do NOT re-send on a missing e-mail. A pending invitation surfaces at `business.google.com` from the invited account's own side (SOP Phase 4). On 2026-08-22 that same invite was found not to exist at all and had to be re-sent (`Claude Project md files/LOG.md`, 2026-08-22 entry).
- **What an unaccepted invite blocks, and it is not cosmetic: the Ads LOCATION asset.** It can only be pulled from a Business Profile Manager account holding the location. That cost a week on Mulu's launch (SOP Phase 4, and `mulu-ads-operating-program.md` section 2 finding (c)). Standing rule: collect Business Profile manager access at onboarding, in the same sitting as the Ads manager link.
- Assemble the suspension evidence pack (KBO extract, permit, branded-vehicle photos, address proof) NOW, not at a suspension, because the appeal upload window is about 60 minutes (SOP Phase 4).
- A citations sweep, once, after the profile is verified and filled: search the business name, the person's full name and the phone number on Pagesdor / Goldenpages, Infobel, Trendstop / Companyweb, Yelp, Facebook pages he did not make, and a plain Google search on the number. Both taxi drivers were already published by scrapers with their home address. Record the finding and leave it alone unless the client raises it (SOP Phase 4, "THE CITATIONS SWEEP", plus the dated note of 2026-08-22).
- Photos over 5 MB are refused by Google, so a GBP-sized JPEG is prepared beside each PNG master as `gbp-<master>.jpg` (SOP Phase 2.5, added 2026-08-21; Henok's `car-1.png` is 5,0 MB and its `gbp-car-1.jpg` is 0,5 MB).

### A5. Google Ads

Source: SOP Phase 9 and 9a, plus `Claude Project md files/mulu-ads-operating-program.md` section 2.

- **Ordering prerequisite, learned the hard way**: the client's SITE MUST BE LIVE ON HIS OWN DOMAIN before an Ads-account session is scheduled. Google's signup validates the destination URL by fetching it and refuses a domain that resolves nowhere, with no skip and no expert-mode escape. Henok's account was created on 2026-08-20 while the domain served nothing, and the customer ID is handed out at the very first click before any immutable setting is shown, so a session can create a real account and then reach no setting on it (SOP Phase 9a and ads program section 2).
- The account that exists is REUSED and never re-created. A second one is how Mulu ended up with junk accounts. The goal step carries an escape, "Not ready for a campaign? Set up an account only" (SOP Phase 9a).
- Who owns it: the CLIENT's account, in his own login, linked to the agency MANAGER account, not to a login (SOP Phase 8, "Roles and ownership").
- **From-zero best practice**: the agency creates the Ads account INSIDE the client's own login during the onboarding session and accepts the manager link in the same sitting. One screen share, no e-mail, no customer ID collected second-hand, no chance of a wrong ID or admin address (SOP Phase 9a, item 4a-bis).
- The manager link is the standard for every client, no exceptions, so there is one dashboard, shared negative lists and consolidated reporting (SOP Phase 9a, item 4).
- Verify the customer ID with Preview BEFORE sending anything. Never judge request state from the "Sent link requests" tab, which can render EMPTY while a request is live, and never re-send on the strength of an empty tab (SOP Phase 9a, items 3, 6, 7).
- The accept link is broken on phones: tapping Accept in Google's mail hands off to the app and the manager-invite screen fails to render silently. Use a computer at `ads.google.com`, Beheer, Toegang en beveiliging, Managers, Accepteren (SOP Phase 9a, item 4b).
- **NEVER take a client's password and never log into his Google account.** Every access path is performed BY him, inside his own account, in about a minute (SOP Phase 9a, item 4d).
- First thing after access lands, the sweep (SOP Phase 9a, item 8): verify any old campaign is really paused by LOOKING; check AUTO-APPLY RECOMMENDATIONS and switch it fully off (Mulu's was on for all 21 types, which silently voids any controlled test); and read BILLING, PAYER DETAILS, not just the card. On Mulu the payments profile was in a third party's name, so every invoice since 2025-05 was issued to someone else, and Google refused to let Mulu fix it because he was Admin on the Ads account but not a user on the payments profile. Fady's answer was to abandon that account and build a clean one in Mulu's own name (ads program section 2, finding (b)).
- **Conversion tracking**: ONE combined website lead ("Lead, boeking geklikt"), goal Contact, manual event snippet, PRIMARY, count One, value 1 euro flat, 30-day click-through window, enhanced conversions OFF for GDPR. Plus "Calls from ads" as SECONDARY (ads program section 1 decision 3 and section 2).
- **Secondary-at-creation is impossible in the current wizard**, on two drivers in a row: create it (Primary, unavoidable), then open the action, Settings, Action optimization, Secondary, Save. Do it while the account still has 0 campaigns (ads program section 2).
- Check for junk: a stray "Aankoop" (Purchase, Primary, count Every) auto-created by Google's onboarding wizard was removed on Mulu's account (ads program section 2).
- **THE TAG PROOF IS ON THE WIRE.** A pre-launch test conversion can NEVER appear in the Ads UI, because Google Ads only reports conversions it can attribute to an ad click and the account has zero clicks before launch. Its absence is not a fault and nobody may build a gate on it. Prove the tag with `performance.getEntriesByType('resource')` on the LIVE domain plus the actual `googleadservices.com/pagead/conversion/<id>/?...&label=...&en=conversion` request, with WhatsApp stubbed so no message reaches the client. Then treat the first post-launch conversion as the second proof. Confirmed on Mulu 2026-08-06 and reproduced on Henok 2026-08-21 (ads program section 2, the correction of 2026-08-06 and the standing lesson beside it).
- Consent evidence to capture in the same test: zero Google requests and zero cookies before any banner choice and after refusal, including across a reload and a booking click as a refused visitor; after acceptance, gtag loads for both the GA4 id and the AW id (ads program section 2, both drivers).
- **The first campaign shape** (ads program section 1 and section 2): Search only, Search Partners OFF, Display OFF, AI Max and search-term matching and final-URL expansion all OFF, automatically created assets OFF, broad match OFF. Dutch only. 24/7, no end date. 15,00 euro a day continuous. Maximize Clicks with a max CPC cap of 2,00 euro. Geo by TOWN NAME, never a radius, Location options = Presence. Two ad groups, phrase and exact keywords only (Mulu 23, Henok 26). About 20 campaign-level broad negatives from day one. One UNPINNED responsive search ad per ad group at Ad strength Good (pinning forced it to Poor and the gate wins over the permission to pin). Assets: call asset with call reporting ON, business name, logo, four callouts, the LOCATION asset, and NO sitelinks on a one-page site.
- The publish sequence so nothing spends half built: publish, pause within seconds, finish the build, verify every setting on screen after full reloads, read it back to Fady in plain language, then enable on his explicit word (ads program section 2, both drivers).
- Day-one lesson from Henok: the client's phone number in an ad HEADLINE is disapproved, the same number in the CALL ASSET is fine, and the campaign row reads "Eligible (Limited)" rather than Disapproved, so only the asset table shows it (ads program section 2).
- A fresh tight phrase/exact build shows "Eligible (Limited)" with a "Missing enough relevant keywords" advisory. That is expected, not a fault, and adding keywords to please it is exactly the blind widening the test exists to avoid (ads program section 2).
- The 400 euro Google Ads credit ("Spend EUR 400 get EUR 400", new advertisers only) was claimed at the Ads phase, not at the GBP phase, with a spend-by date about two months out (ads program section 2, Henok).

### A6. Cloudflare Pages hosting and DNS

Source: `taxi-site-template/SCAFFOLD.md` Gotchas and Launch flow, plus SOP Phase 3 "The domain migration and go-live run".

- ONE agency Cloudflare account holds every client zone and every Pages project. A `CLOUDFLARE_API_TOKEN` env var points at the WRONG account, so `unset CLOUDFLARE_API_TOKEN` before deploying and let wrangler use the OAuth login. Symptom if you forget: `Authentication error [code: 10000]` (SCAFFOLD Gotchas).
- **Deploy FROM a cache folder with the site's ABSOLUTE path**, exporting `WRANGLER_CACHE_DIR`, or wrangler drops a `.wrangler/` folder into the site folder containing `wrangler-account.json`, which carries the account ID and a personal e-mail address, and the site folder is the thing that gets zipped and handed to the client. That file already travelled into Mulu's deliverables once. Both habits together were tested on a real deploy on 2026-08-07 (SCAFFOLD Gotchas; the same rule is one of the four never-dos in `AGENTS.md`).
- Preview first on the `*.pages.dev` URL with the real domain NOT attached, so the real domain never serves a half-built site (SOP Phase 6).
- Attach the custom domains FROM THE DASHBOARD, not the Pages API. Over the API the hostnames register and then wait on an http validation that can never pass, so both sit at `pending` with nothing resolving and nothing visibly failing, and the standard wrangler OAuth credential cannot create the DNS records to rescue it. If it happened over the API, add `CNAME @` and `CNAME www` to `<project>.pages.dev` by hand, both Proxied (SOP Phase 3, corrected 2026-08-21 from Henok's go-live).
- A Pages custom APEX domain requires the domain's DNS zone to live on the SAME Cloudflare account as the Pages project (SCAFFOLD Gotchas, learned on Mulu's zone move).
- Mail and verification records stay DNS ONLY (grey cloud). Proxying a mail record takes the mailbox down. On Mulu's move 11 records came across and every one stayed DNS only (SOP Phase 3, must-have 2).
- SSL set to Full (strict) (SOP Phase 3, must-have 3).
- **Disable Cloudflare's managed AI-crawler robots.txt block on every new zone** (standing rule, Fady 2026-08-11). Cloudflare injects it by default the moment the zone starts serving, so read the live robots.txt AFTER go-live. Path: zone, Security, Settings, filter Bot traffic, Manage your robots.txt, Configurations, pencil, Disable robots.txt configuration, Save (SOP Phase 3).
- Assets: favicons, og-banner and manifest live at the SITE ROOT referenced root-relative. An icon in `assets/` referenced at root makes Cloudflare serve the index HTML instead of the image and the favicon silently breaks (SCAFFOLD Gotchas).
- Search Console in the same sitting: a Domain property, and it needs the FULL sitemap address `https://<domain>/sitemap.xml`, because a Domain property refuses the short path (SOP Phase 3, must-have 4).
- GA4 must be live and working BEFORE the site is public. The creation recipe is a fixed list of switches, because every conservative choice is a default that must be actively turned off (SOP Phase 3, added 2026-08-21): turn off three of the four Account Data Sharing boxes; Enhanced measurement OFF at creation; verify Google signals off; all four e-mail boxes unchecked; no Google Ads link (the site fires the Ads conversion directly); **the agreement country defaults to United States and must be switched to BELGIUM BEFORE accepting, because that is what makes the GDPR Data Processing Terms checkbox appear at all**; reporting time zone Belgium, currency EUR.
- Go-live order that worked, in one sitting with the client reachable by phone (SOP Phase 3): GA4 pre-check on the preview, release custom domains from any OLD Pages project FIRST, switch nameservers (read the pair LIVE from Cloudflare, never from a note), wait for the zone to go ACTIVE (budget 2 to 3 hours, Mulu's took about 30 minutes), attach apex and www, SSL Full (strict), verify apex and www load, verify mail in BOTH directions, confirm GA4 Realtime on the LIVE domain, delete the old zone, run the full phone test, delete the old Pages project LAST.

### A7. Reviews

Source: SOP Phase 5.

- Target 5 real reviews (4 shown in the grid plus 1 highlighted) and no site goes live with a rating below 4,5, because every site carries a 4,5+ chip (SOP Phase 5, decided 2026-07-28).
- Reviews must reflect a real ride. No fake reviews, no incentives, no review gating, no asking customers to name you (SOP Phase 5).
- Ask permission IN the review-ask message, before the review is written, with one Dutch sentence offering to put it on the website (SOP Phase 5, added 2026-07-29). After publishing, the client posts a short public reply under that review saying it is also on his website and offering to remove it, which is what satisfies the art. 14 AVG information duty (SOP Phase 5).
- Reviews go onto the site VERBATIM, nothing changed, not even typos. A non-Dutch review is translated faithfully and labelled as translated (SOP Phase 5).
- Tell the client, IN the same launch message, that Google fills his profile in slowly: photo and video uploads take 24 to 48 hours to appear, the hours row lags, and edits carry Google's own review window. On Henok a second correcting message had to go out the same evening because the first one let him assume the profile had to look complete first (SOP Phase 5, standing rule from 2026-08-17).
- Write a dated verification line the moment the reviews are wired in: date, who checked, profile URL, review count that day, the chosen reviews with reviewer and date, translated yes/no, content unchanged yes/no, initials (SOP Phase 5). Being right is not the same as being able to show it.
- The reviews gate WAS lifted once, for Henok only, as a dated one-time exception, and it explicitly sets no precedent (`DECISIONS.md` section C, 2026-08-20).

### A8. Tally forms used

- The client intake is one Tally form, 8 pages, about 10 minutes on a phone, currently `lbgMzW`, sent with the first name in the link so it greets him (SOP Phase 2). The structure is documented in `Claude Project md files/tally-taxi-intake-form.md`.
- The runbook never hardcodes a form ID: Claude lists forms, walks submissions of every non-empty form, matches the driver BY NAME, uses the most recent, and reads answers by MEANING not by field ID, because labels differ between forms (`brand-clash-check.md`, Inputs).
- A short mini-form was built for a client who already existed, to replace a long WhatsApp (`_incoming/taxi-henok/henok-plan.md` Step 2).
- Two DAILY BOOKINGS forms exist, one per driver, built 2026-08-22 (`686gDk` and `44lMBk`): one page, Dutch, phone first, filled the NEXT day, counting calls, WhatsApp and e-mails as THREE separate ads-driven counts plus airport, cross-border and missed calls (`LOG.md`, 2026-08-22). They exist because the dashboard number and the real ride count are different things.
- **Delete the Tally submission once the intake file is built and verified.** Keeping it is a second copy of personal data for no reason (SOP Phase 2.5).

---

## B. THE AGENCY ACCOUNT INVENTORY, exactly as the files describe it

| Account | What the files say | Source |
|---|---|---|
| `hi@fady.be` (Google Workspace) | The main agency Google account. 2FA done 2026-07-20. It is the Manager on every client GBP and Ads, the owner of the agency Analytics account, and the Search Console owner | SOP Phase 0, Phase 4, Phase 8 |
| `fady.be` domain | Named as needing the same SPF, DKIM and DMARC records the day it is set up on Workspace. The full `fady.be` build with the offer, form, policies and campaigns is deferred work | SOP Phase 3; `DECISIONS.md` payment-terms line |
| Agency Cloudflare account | ONE account under `hi@fady.be` holding every client zone and every Pages project. 2FA with a security key done 2026-07-06 | SCAFFOLD Gotchas; SOP Phase 0 |
| Google Ads manager | `Fady Agency` **724-595-2027**, under `hi@fady.be`. Both drivers link to it (Mulu 163-461-4442, Henok 813-108-1350) | SOP Phase 9a item 3 |
| A SECOND manager with the SAME NAME | `Fady Agency` **785-568-0133** under `fadyapple@hotmail.com`, sub-account list EMPTY, indistinguishable by name. Never the right one. On Fady's machine `/u/0/` is that login | SOP Phase 9a item 3 |
| Backup agency Google account | `backup4fady@gmail.com`, created fresh, used for nothing else, becoming Manager on every client GBP, Ads and Analytics and a member on the agency Cloudflare | `DECISIONS.md` section C 2026-08-18; SOP Phase 4 and 9a item 7c; `LOG.md` 2026-08-22 |
| Agency Google Analytics | Account `Fady` **402514715**, one property per driver, under `hi@fady.be`. Not handed over while the retainer runs | SOP Phase 8; `LOG.md` 2026-08-22 |
| Agency Infomaniak | ONE account (`hi@fady.be` as the user), one Organisation per client. Fady's own plus one per driver | `DECISIONS.md` section C 2026-07-30; SOP Phase 3 |
| Tally | The intake form and the daily bookings forms. Live intake form `lbgMzW` | SOP Phase 2; `LOG.md` 2026-08-22 |
| Mollie | Only as a CLIENT-side tool for the voorschot system, not as an agency account. Mulu's own Mollie exists, is unverified and cannot take a payment | `drivers/mulu-taxi/OPEN.md` |
| Peppol / invoicing tool | Required before any paid invoice, mandatory for B2B since 1 January 2026. Tool not yet chosen, leaning Accountable (free) | SOP Phase 0 |
| GitHub | A private off-machine backup repo, done 2026-07-02. Sandboxed tools never run git and never store GitHub keys | SOP Phase 0; `AGENTS.md` section 7 |

**CLIENT-OWNED BY RULE** (SOP "Ownership rule", Phase 8 and `AGENTS.md` section 5 rule 6): his domain (holder in his own name, his personal e-mail, his own Infomaniak Organisation with him as administrator from handover, his own card, agency card removed), his Google Workspace account (he becomes super admin, resets the password, agency admin rights removed), his Google Business Profile (he stays Primary Owner, agency is Manager), his Google Ads account (his account, linked to the agency manager, not to a login), and his reviews and customers.

**AGENCY-HELD WHILE THE RETAINER RUNS**: the website hosting in the agency Cloudflare, and the Analytics property. The website SOURCE FILES are not handed over mid-subscription, only if the client leaves (SOP Phase 10). One nuance found on 2026-08-22: because the property sits in the agency Analytics account, Mulu has no access to his own Analytics, and adding him is now an item for his handover (`drivers/mulu-taxi/OPEN.md`).

**A one-off, no-retainer client is the exception**: he gets his own Cloudflare account and a full handover of everything including source files at go-live (`the-offer.md` section 3a and 3b).

**Never in any project file**: passwords, 2FA secrets, recovery codes. E-mail ADDRESSES are fine, narrowed on 2026-08-19 (`DECISIONS.md` section C, 2026-08-19; `AGENTS.md` section 8).

---

## C. GOTCHAS AND RULES LEARNED THE HARD WAY

1. **Refuse Google's one-click Cloudflare (Entri) domain verification.** It would grant a third party write access to the DNS account holding every client's zone. `client-onboarding-SOP.md` Phase 3, recipe step 7.
2. **The domain is paid for and still dead until the client clicks the DNS Belgium holder-validation mail.** NXDOMAIN blocks everything downstream. Warn him about both mails. SOP Phase 3.
3. **Verify the registry delegation after every purchase or transfer, on the day and again days later.** A live site and mailbox went fully down five days after a transfer with the dashboard still showing green. SOP Phase 3, from the 2026-08-04 outage.
4. **Google Workspace checkout opens on Plus at 25,30 euro and hides Business Starter behind "Compare plans".** SOP Phase 3, recipe step 4.
5. **Infomaniak pre-selects about 95 euro a year of upsells and defaults the domain OWNER to you.** SOP Phase 3, fresh-registration recipe steps 2 and 4.
6. **Leave the VAT field blank on Infomaniak and Google.** A Belgian VAT number switches them to reverse charge and an art. 56bis client then owes a bijzondere btw-aangifte on a 10 euro purchase. SOP Phase 3.
7. **The site must be LIVE on its own domain before the Ads account can be finished.** Google fetches the destination URL and there is no skip. SOP Phase 9a.
8. **A pre-launch test conversion can never appear in the Ads UI.** Prove the tag on the wire instead. `mulu-ads-operating-program.md` section 2, correction of 2026-08-06.
9. **Read BILLING, PAYER DETAILS, not just the card.** A third party owned Mulu's payments profile and every invoice since 2025-05 was issued to him. Ads program section 2, finding (b).
10. **Auto-apply recommendations was ON for all 21 types.** Left on, Google edits the campaign between checkpoints and no controlled test is possible. Ads program section 2, finding (a).
11. **Two manager accounts share the name "Fady Agency" and one is empty.** Anything that links or checks reads the CUSTOMER ID, never the name. SOP Phase 9a item 3.
12. **The Ads manager accept link is broken on phones.** Use a computer, live, on a screen share. SOP Phase 9a item 4b.
13. **The "Sent link requests" tab can render empty while a request is live.** Preview is the only authoritative check, and never re-send on an empty tab. SOP Phase 9a items 6 and 7.
14. **A GBP Manager invite can go quiet with no notification e-mail.** Check `business.google.com` from the invited account's own side before re-sending. SOP Phase 4.
15. **An unaccepted GBP Manager invite blocks the Ads LOCATION asset.** It cost a week on the first launch. SOP Phase 4 and ads program section 2 finding (c).
16. **Add the agency as Manager AFTER the verification verdict, never at creation.** SOP Phase 4.
17. **The GBP name field steals focus** and a mis-clicked category lands inside the business name. Re-read it before every Next. Name-versus-material mismatch is the top rejection reason. SOP Phase 4.
18. **The GBP service-area picker offers the wrong country.** Always type `<Town>, Belgium`. SOP Phase 4.
19. **The GBP phone field does not normalise**, unlike every other phone field. Enter the national format. SOP Phase 4.
20. **The verification video's street shot is the one most people skip and the most common rejection reason.** SOP Phase 4.
21. **Skip the document shot rather than film a name mismatch.** SOP Phase 4.
22. **Have a correct-name physical asset BEFORE the profile exists**, or order the cards now and let the profile wait. SOP Phase 4.
23. **A KBO handelsnaam change does NOT authorise a Google profile rename.** A rename triggers re-verification and suspension risk on a profile that may be carrying live ads. SOP Phase 2 and Phase 3.
24. **A trade name for an eenmanszaak sits on the vestigingseenheid, not the onderneming**, and an empty enterprise field is normal. Two clients in a row had a project file claiming a KBO name that did not exist. SOP Phase 3, handelsnaam route.
25. **Ondernemingsloket: e-mail first, give one full working day, then CALL.** One loket needed two e-mails over six days and then one call settled it the same afternoon; another answered by mail in about 27 hours. SOP Phase 3.
26. **Do not change the domain owner at the losing registrar before transferring.** It commonly starts a fresh 60-day lock. SOP Phase 3.
27. **A `.be` transfer code comes from DNS Belgium, not the losing registrar**, and is 5 groups of 3 digits, with 4 requests then a 7-day cooldown. SOP Phase 3.
28. **Deploy from a wrangler cache folder with the site's absolute path**, or a file carrying a personal e-mail address ends up in the zip handed to the client. SCAFFOLD Gotchas.
29. **Attach Pages custom domains from the DASHBOARD, not the API**, or both hostnames sit at `pending` forever. SOP Phase 3, corrected 2026-08-21.
30. **Cloudflare injects an AI-crawler robots.txt block into every new zone.** Disable it and read the live robots.txt after go-live. SOP Phase 3.
31. **Mail and verification DNS records stay grey-clouded.** Proxying one takes the mailbox down. SOP Phase 3.
32. **A Search Console Domain property refuses the short sitemap path.** Give the full URL. SOP Phase 3.
33. **GA4's agreement country defaults to the United States**, and switching it to Belgium is what makes the GDPR terms checkbox appear at all. SOP Phase 3.
34. **A client's phone number in an ad HEADLINE is disapproved; the same number in the CALL ASSET is fine**, and only the asset table shows it. Ads program section 2.
35. **Never take a client's password, never log into his Google account.** It trips Google's security checks, puts your actions under his name, and destroys the ownership promise. SOP Phase 9a item 4d.
36. **Never click "Hervatten" in the Google merchant panel.** One click restarts an old campaign that then bids against the live test. Ads program section 3.
37. **Never close a paid external account before downloading its invoices.** Closing deletes the billing history with it. `AGENTS.md` section 14, added 2026-08-15.
38. **This environment's permission classifier refuses access-grant browser actions** (typing an address into an Ads, GBP or Analytics access form, accepting a manager invitation) for agents and the main session alike, and it must never be routed around. Plan those as the owner's own clicks with a read-only verify afterwards. `orchestrator-playbook.md` section 9, 2026-08-22.

---

## D. HOW THE ORCH SYSTEM WORKS MECHANICALLY

Owner file: `Claude Project md files/orchestrator-playbook.md`. It never carries facts, only the routine, and it reads current facts fresh from the owner files every day (its own header).

**Kickoff.** One line from Fady: "You are Orch. Read the playbook and run today, [date]." Three skills wrap it: `/orch` (full routine), `/orch-mid` (continuation, skips the sweep, the Gmail glance and the overview), `/eof` (day close). They live in `.claude/skills/` and are THIN WRAPPERS that hold no facts and lose to the playbook on any difference (playbook section 9, 2026-08-18).

**Read first, every day** (section 2): the project instructions, `NOW.md` (open work plus the three gates), `DECISIONS.md`, the most recent day's `LOG.md` entries, `CLIENTS.md` and then every `drivers/*/OPEN.md`, the playbooks that own open work, and anything else touching an open item. `STATE.md` is opened only when the day's work is actually about that driver. The files always win over memory and over any summary pasted into the kickoff.

**The morning routine, in order** (section 3): (1) a light sweep cross-checking key facts across owner files, reporting ONE line if clean and stopping everything if not; (2) a read-only Gmail glance for mail the open items say we are waiting on; (3) the overview, one continuous numbered list under three bolded headers, MINE / A DRIVER'S / A CLOCK'S, one or two plain sentences each, answerable by number; (4) retired; (5) Orch's own PROPOSED PLAN with reasons, never a menu, then wait for the go.

**Writes.** Orch itself makes NO file edits unless explicitly asked (section 1). Writing is done by the sessions or agents it fans out to. The owner map decides where anything goes: prices to `the-offer.md`, open work to `NOW.md`, decisions to `DECISIONS.md`, agency change and spend to `LOG.md` (max 5 lines per entry), a driver's state to `drivers/<slug>/STATE.md`, what is open about him to `OPEN.md`, what happened to him to `log/YYYY.md` (`AGENTS.md` sections 4 and 8).

**Same-session logging** (`AGENTS.md` section 8): the moment something loggable happens it is logged in the same session, changes not activity, never credentials, and every session ends with one line saying what was logged and where, or "Nothing to log this session." Nothing may be deferred to a quiet moment: it is done now, or it becomes a dated line in its owner file (`AGENTS.md` section 9).

**Every fan-out prompt carries** (section 5): PLAN FIRST for file edits, the SYNC RULE (any changed fact is searched project-wide and corrected with dated notes, owner files win), same-session logging, the closing block with the re-upload reminder, and the hard gates that apply that day read from the files.

**The FLAGGED line** (section 9, 2026-08-15): every plan ends with exactly one line, either "Nothing flagged, ready on your go." or "FLAGGED:" plus one plain sentence per flag. When nothing is flagged, the go is Fady's alone. PLAN FIRST was later narrowed (2026-08-21): the full discipline is for Orch-level plans, and a fired agent presents a COMPACT plan of about ten lines, because long plans were being pasted unread. The FLAGGED line stays mandatory everywhere, because it is the part that earns its cost.

**After a session closes** (section 6): Orch checks the paste for reasoning mistakes, then VERIFIES ON DISK against copies it staged BEFORE the session ran. Staging was upgraded from file copies to recursive hash inventories when generated output is involved (section 9, 2026-08-21).

**Day close, `/eof`** (section 7, plus the 2026-08-21 addition): a plain-English day summary FIRST, then the end-of-day sync prompt scoped to what changed, then the day's playbook improvements proposed as ONE dated edit, then a one-line handoff. The handoff is a real file, for example `local/orch-handoff-2026-08-23.md`, and it is SPENT the moment it is picked up.

**Fan-out mode** (section 9, 2026-08-21 and 2026-08-22, now the standard after a passed pilot): Orch runs inside ONE Claude Code session and fans work to SUBAGENTS itself. Agents default to Opus 5. They report to Orch directly, Orch answers their flags itself, and anything that is Fady's call comes as an AskUserQuestion widget with 3 or 4 choices. Before agents fire, Orch explains each agent's job in plain English, so the yes is informed and corrections land before tokens are spent. Do-the-work-by-default: a task needing no payment, no credentials and no decision that is truly Fady's is DONE, not handed to him as a click. The proven day shape: read agents (browser, read only) and file agents alternate, browser agents run in parallel with the one file agent because they touch no file, two browser agents never share the same Chrome, and the ONE-EDITOR-AT-A-TIME rule holds absolutely. A thirteen-agent day ran this way on 2026-08-22.

**Widgets** (section 9, 2026-08-22 evening): Fady sees only the widget, not the prose above it, so the essentials of any decision go INSIDE the question and the option descriptions.

**Continuity**: when the session grows long, Orch says so unprompted and writes the fresh-session handoff itself (section 9, 2026-08-21).

### THE KNOWN PROBLEMS, as the files themselves record them

- **File growth.** `NOW.md` went from 50.276 bytes on 2026-08-15 to 110.084 on the morning of 2026-08-22, 122.965 at midday and 127.973 at that evening's close (playbook section 9, and `LOG.md` 2026-08-22). Orch now reports its size at every eof, and a weekly cleanup design session is an open item.
- **Hard caps are being hit.** Mulu's `OPEN.md` reached its 25-line hard limit on 2026-08-22 with 13 open and 12 closed lines, and has no headroom left (playbook section 9, and `drivers/mulu-taxi/OPEN.md`).
- **91 stale pointers.** Counted on 2026-08-15, the two retired file names `master-todo.md` and `client-tracker.md` were still live 91 times across 25 files, plus 58 more in read-only research. Clearing them is its own mechanical sweep that no workstream owes (`AGENTS.md` section 4).
- **Files too big to read whole.** `master-todo.md` reached 313 KB and 462 lines and no session could read it; it was carved into `NOW.md` and `DECISIONS.md`. `client-tracker.md` was 41.877 bytes in 26 lines and ONE driver's row was about 34.000 characters in three table cells that nothing could safely edit, because a cell has no line boundaries to anchor an edit to (`AGENTS.md` section 4).
- **The claude.ai upload set** shrank from 21 files and about 451 KB to 8 files and about 164 KB, because 451 KB still tripped claude.ai into Search mode at 7 percent, meaning a chat was reading fragments instead of whole files (`operating-guide.md` section 1a).
- **The em-dash debate.** The rule binds NEW AND EDITED TEXT ONLY. About 1.764 em dashes in existing dated history are left exactly as they stand, are never rewritten, and are explicitly NOT a finding for any audit or health check. There is no cleanup pass, ever, and it must not be re-proposed (`AGENTS.md` section 6, narrowed 2026-08-12).
- **Dated notes accumulate.** Because nothing dated may ever be rewritten (`AGENTS.md` section 14), a corrected fact grows a stack of notes beside it. Several passages in the SOP now carry three or four layers of dated correction. That is the mechanism working as designed and it is also the main driver of file growth.

### What pro-debouchage should copy, and what it should do differently (MY OPINION, flagged)

**Copy without changing anything:**
- The owner map plus "trust the file, never memory". It is the single highest-value idea in the whole system.
- Same-session logging and "close it or file it, never leave it in chat".
- Dated corrections beside the original, never rewriting history.
- The PLAN FIRST / FLAGGED line pair on any file-editing agent.
- One editor at a time, and staged copies plus a diff after any file agent.
- The `STATE.md` / `OPEN.md` / `log/YYYY.md` triple with hard line caps. Even for ONE client it is the right shape, because it separates what is true, what is open and what happened, and the caps force the decision about what to move.
- The AskUserQuestion widget habit, with the essentials inside the widget.

**Do differently, because one client is not thirty:**
- **Do not build a template layer.** No `_demo`, no Luman, no rollout gate, no "one design for all", no batch re-deploy spec. Edit the site directly. This deletes maybe a third of the taxi system's rules.
- **Start with FEWER files, and set a size budget on day one.** The taxi project's biggest ongoing cost is file growth, and it started with the same good intentions. My suggestion: 5 or 6 root files maximum for pro-debouchage (a rules file, a state file, an open-work file, a decisions file, a log, and a Google/accounts runbook), each with a stated size cap, and a rule that a file crossing its cap gets carved in the SAME session rather than "later".
- **Do not maintain an index file.** `CLIENTS.md` exists only because there are many drivers. With one client, the client's state file IS the index.
- **Skip the claude.ai upload set entirely.** Work in Claude Code with folder access from the start and never split knowledge across a surface that cannot read the disk. Half of the taxi project's pointer churn comes from that split.
- **Write the accounts runbook as a CHECKLIST from day one**, copying section A above, rather than discovering it a second time. The taxi project spent two full client runs learning what is now a 40-item list, and pro-debouchage can start with the list.
- **Consider capping dated notes.** My suggestion: allow at most two live dated corrections on a passage, and on the third, rewrite the passage cleanly and move the whole history to an archive file in the same session. This keeps the "never rewrite history" guarantee (history is preserved, just moved) while stopping the unbounded growth the taxi files now carry.

---

## E. THE ADS OPERATING ROUTINE

Owner: `Claude Project md files/mulu-ads-operating-program.md`. It is written for EVERY driver, with per-driver facts tagged, and after the test it folds into the SOP as the ads phase.

- **Shape**: a 6 to 8 week test at 15 euro a day (about 450 euro a month), with a raise path to 18 and a ceiling around 20 during the test, because beyond that extra euros buy the same lessons more expensively and the proof number should reflect a budget a normal client would actually run (section 1, decision 2).
- **Pre-flight launch gates, nothing spends until ALL tick** (section 2): manager link live and proven in the sub-account list, old campaigns VERIFIED paused by looking, the read-only sweep done, the conversion actions created, the tag live and proven on the site, the rating re-verified the same day, the campaign built to spec, enabled, and the LAUNCH DATE written down because every week number counts from it. A gate that cannot pass slips the launch: slipping is cheap, spending blind is not.
- **Hands off for about two weeks after launch.** The only edits allowed before the week-2 checkpoint are fixing a disapproval and pausing a claim that stopped being true (section 2, standing rule from Fady).
- **The weekly Monday check, about 20 minutes**, driven by a claude.ai scheduled task at about 09:00 Brussels (section 3): (1) pacing, total spend divided by days live; (2) the search terms report, the most valuable 10 minutes, every query sorted good / junk / outside the area, where adding a negative is ALWAYS allowed and an outside-area term is noted but never acted on; (3) conversions sanity, real traffic and zero conversions for 2 or more weeks means suspect the TAG first and the market second; (4) a 7-day snapshot of impressions, clicks, CTR, avg CPC, conversions, cost per conversion, and search impression share as THREE columns (share, lost to budget, lost to rank), which are not in the default column set; (5) fix disapprovals; (6) re-verify any claim in the ad copy; (7) log one line.
- **Never in the weekly routine**: bid, budget, copy, keyword, geo or bidding-strategy changes. Those live in checkpoints only (section 3). Google's own recommendations stay UNAPPLIED inside a hands-off window (section 3, standing rule).
- **Adding a negative is routine, not a change; REMOVING one is a change** and waits for the owner's word (`DECISIONS.md` section C, 2026-08-20).
- **What each number triggers** (section 4): roughly zero impressions after week 1 means a mechanical fault and is never "fixed" with budget; CTR below 2 percent is weak; conversions at zero with 50 to 100 clicks means tag, then landing page, then keywords, in that order; impression share lost to BUDGET points at the budget raise, lost to RANK points at relevance and copy, and never both at once.
- **Checkpoints are the ONLY moments settings change**, at weeks 2, 4, 6 and 8 counted from launch (section 5). Week 2: negatives batch, first honest read, geo check 1, default hold on widening. Week 4: one RSA edit per ad group from CTR evidence, one bid-cap notch with written reasoning, geo check 2 by adding proven neighbouring towns by NAME never a radius, and a possible bidding-strategy switch. Week 6 is light, and becomes READ ONLY if a switch happened at week 4, because a bid strategy takes about three weeks to recalibrate. Week 8 is JUDGMENT and produces the proof number.
- **The verdict names its own distortions**: clicks are not rides, consent-refusers are uncounted, and any sub-group below its declared minimum sample gets "no verdict", never a judgement on a thin number. The program never declares its own success, it is put to the owner (section 5).
- **The cross-check** at weeks 2, 4 and 8: one WhatsApp asking the client roughly how many new customers called or messaged, and whether any were high-value jobs. If the dashboard glows while the client felt nothing, believe the client and investigate (section 6). The daily Tally bookings form of 2026-08-22 is the more precise version of the same idea.
- **THE NO-ROI-PROMISE RULE** (`AGENTS.md` section 5 rule 2, SOP gate 2, `NOW.md` gate 2): no promised ad results before real proof numbers exist. Until then you still sell the retainer, honestly: month 1 is data, month 3 is stable. After the test you sell a proven cost per booking. **This gate is still SHUT in the taxi business**, because the week-8 judgment is not until 2026-10-01, so pro-debouchage inherits the rule and not a number.

---

## F. WRITING RULES FADY APPLIES EVERYWHERE

Source: `AGENTS.md` section 6, and the pasted instruction block in `operating-guide.md` section 1.

1. **No em dashes.** Never, in English or Dutch, in any medium: chat replies, drafts, e-mails, phone scripts, file text. Use a comma, a full stop or brackets. Binds new and edited text only; existing dated history is never rewritten and is never an audit finding.
2. **Client-facing content is Dutch, simple, no em dashes.**
3. **Anything Fady speaks or sends himself is SIMPLE Dutch**: short sentences, everyday words, no formal or legal vocabulary, so it sounds like him talking. His Dutch is good but not fluent and his accent is good, so plain wording is what makes him sound natural, not simplified grammar.
4. **Long numbers digit by digit** in anything spoken or sent by him: enterprise numbers, phone numbers, establishment numbers. On the phone, read every number twice and spell names letter by letter (SOP Phase 3, handelsnaam route).
5. **Client-facing e-mails written on his behalf may stay formal in tone**, and they stay em-dash free too.
6. **Never fake anything**: no fake reviews, no fake counters, no unproven claims (`AGENTS.md` section 5 rule 4).
7. **The client owns what matters and is never locked in**: his domain, Google account, Ads account and reviews (`AGENTS.md` section 5 rule 6). The honest one-line promise is in the SOP's Ownership rule.
8. **Say "not in the files" instead of guessing.** Never invent a fact, a number or a client detail. Say plainly when an idea is your own. Ask one clear question rather than choosing for him on anything that spends money, touches a live client site, or changes a rule (`AGENTS.md` section 13).
9. **Never write "my client" or "our client" to a loket** before the business is registered, because it is not true. Use "namens", with the client in CC (SOP Phase 3).
10. **Never put a rijksregisternummer in a project file** (SOP Phase 3). Never put passwords, 2FA secrets or recovery codes anywhere (`DECISIONS.md` section C, 2026-08-19).
11. **Normalise client answers into correct Dutch** before anything reaches a site: place names, cities, airports. Correcting spelling is not the same as changing an answer, and a price or a fact is never "corrected", only queried (SOP Phase 2.5, standing rule 2026-07-30).
12. **Registration before any paid invoice** (`AGENTS.md` section 5 rule 1). Peppol e-invoicing has been mandatory for B2B since 1 January 2026 and must be ready before the first paid invoice (SOP Phase 0).
