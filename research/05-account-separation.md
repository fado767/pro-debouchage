# 05 - Account separation across clients and projects

*Research report, 2026-08-22. Raw agent output, read-only reference (`AGENTS.md` section 3). Not the owner of any fact: what Fady decides from this moves into `playbook/separation.md`, `playbook/accounts.md` or `DECISIONS.md`.*

*Question: fady.be now has more than one line of business (taxi drivers, Pro Débouchage, later an AI-fashion project). They share Google Ads, Google Business Profile, Google Workspace, Analytics, Cloudflare, Infomaniak and Chrome. How do we keep them apart so the taxi business is never affected?*

*Method: part 1 is read out of `../taxi-business/` (read-only, nothing was changed there, no git was run). Parts 2 to 4 are web research with source URLs. Anything unverified is marked.*

---

## PART 1 - What exists today (read out of the taxi folder)

### 1.1 The agency's own accounts

| Account | What it is | Source |
|---|---|---|
| Google Workspace `hi@fady.be` | Business Starter, ONE mailbox, deliberately **no aliases**. It is the business address AND the Google login that manages every client GBP and Ads account. 2FA: passkey, authenticator, SMS, backup codes. | `Claude Project md files/master-brief.md` section 3a |
| Google Ads manager `Fady Agency` **724-595-2027** | The live agency MCC, under `hi@fady.be`. | `Claude Project md files/mulu-ads-operating-program.md` line 42 |
| Google Ads manager `Fady Agency` **785-568-0133** | A SECOND manager with the SAME NAME under `fadyapple@hotmail.com`, empty, **permanently dormant by decision**. It has already cost a session. | `Claude Project md files/DECISIONS.md` 2026-08-05; `mulu-ads-operating-program.md` line 43 |
| Google Analytics account `Fady` **402514715** | Agency Analytics account. Holds Mulu's property. Exactly one user row: `hi@fady.be` Administrator. | `drivers/mulu-taxi/STATE.md` (dated note 2026-08-22) |
| Cloudflare (agency) | One account, login `hi@fady.be`, security-key 2FA since 2026-07-06. Holds the Luman demo, `fady.be` DNS, and **one zone plus one Pages project per driver**. | `master-brief.md` section 3a; `Claude Project md files/client-onboarding-SOP.md` line 5 |
| Infomaniak (agency) | ONE agency account holding **one Organisation per driver** (`Mulu Taxi`, `Taxi Henok`). `fady.be` itself registered 2026-07-20 in Fady's own name. | `master-brief.md` section 3a correction of 2026-07-30; `client-onboarding-SOP.md` line 163 |
| Tally | One intake form, `lbgMzW`, agency owned. | `Claude Project md files/tally-taxi-intake-form.md` |
| Backup Gmail | Decided 2026-08-18: a NEW separate Gmail becomes Manager on every client GBP, Ads and Analytics, and a member on the agency Cloudflare. | `DECISIONS.md` 2026-08-18 |
| No Tag Manager | The sites load `gtag.js` directly, there is no GTM container anywhere. | `taxi-site-template/assets/consent.js` line 104 |

### 1.2 What the client owns by rule

`AGENTS.md` section 5 rule 6 and `client-onboarding-SOP.md` lines 23 to 30 and 486: the driver owns his **domain**, his **Google account and Business Profile**, his **Google Ads account**, and his **reviews and customers**, and is never locked in. Hosting stays in the agency Cloudflare while the retainer runs, and the files follow him out if he leaves (SOP Phase 10).

Handover end state (`client-onboarding-SOP.md` lines 379 to 388):
- Workspace: client is super admin, agency admin rights removed.
- Infomaniak: client is administrator of his own Organisation, his card, agency card removed. He was already the WHOIS holder.
- Ads: client's account, linked to the agency **manager**, not to a personal login.
- Hosting and Analytics: stay agency-side while managed.

### 1.3 How the agency gets access today

- **Ads: the manager link is the standard for every driver, no exceptions** (Fady, 2026-08-05). Proof of the link is the manager's sub-account list, nothing else. A user invite of `hi@fady.be` into the driver's account exists only as an emergency bridge and is removed once the link is live. (`client-onboarding-SOP.md` Phase 9 steps 4, 4a, 4c, 6.)
- **Never take a driver's password and never log into his Google account** (SOP step 4d). Every grant is performed BY the driver inside his own account.
- **GBP: the agency is added as Manager**, the driver stays primary owner.
- **Chrome: one profile per driver, created BY HAND**, signed OUT of Google, extension site permissions granted inside that profile, "Use Chrome without an account" at the sign-in prompt. Confirm the ACTIVE Google account before touching anything, because Google Ads strips `authuser` and lands on `/u/0/`. (`client-onboarding-SOP.md` lines 155 to 162.)

### 1.4 Problems already on the record (these are the reasons this report exists)

1. **Two identically named managers.** `785-568-0133` (Hotmail, empty) versus `724-595-2027` (the real one). Read the customer ID, never the account name. Already cost a session. (`client-onboarding-SOP.md` line 418.)
2. **Access grants are blocked for agents.** 2026-08-22: "the permission classifier refused every access-grant attempt, so the clicks are FADY'S and PENDING". (`Claude Project md files/LOG.md` line 46; `drivers/taxi-henok/STATE.md` line 49.) Plan every grant as Fady's own click, with an agent doing the inventory before and the read-only verify after.
3. **Analytics is inconsistent between the two drivers.** Mulu's property `547339524` sits in the AGENCY account `Fady` 402514715 and **Mulu has no access to his own Analytics**. Henok's account `405477291` is **his own** and **the agency cannot open it at all** ("Missing permissions"). The 2026-07-28 "one agency Analytics account" decision is only half implemented. (`drivers/mulu-taxi/STATE.md`, `drivers/taxi-henok/STATE.md` line 49.)
4. **A personal card is on a client Ads account.** Henok's account `813-108-1350` runs on "Fady's personal card ••••8554 as the TEMPORARY instrument". (`drivers/taxi-henok/STATE.md` line 53.) See 2.1 on why a shared payment method is the strongest cross-account suspension signal.
5. **A GBP Manager invite that never arrived.** `hi@fady.be` pending on Henok's profile since 2026-08-17, do not re-send. (`drivers/taxi-henok/OPEN.md` line 8.)
6. **The DNS blast radius is already understood in the SOP.** Workspace domain verification offers a one-click Cloudflare (Entri) integration, and the SOP refuses it because it "would sign the AGENCY Cloudflare into the CLIENT profile and grant a third party write access to a DNS account holding EVERY client's zone". (`client-onboarding-SOP.md` Phase 3 step 7.) That sentence is the whole separation problem in one line.

---

## PART 2 - What Google, Cloudflare and the others actually recommend

### 2.1 Google Ads

**Manager (MCC) mechanics**
- A manager can hold up to 85,000 client accounts, but the ACTIVE cap depends on spend: under 10,000 USD total monthly spend in the last 12 months the limit is **50 active accounts**. https://support.google.com/google-ads/answer/7526520
- An account can be managed by at most **5 managers**; a manager can sit under **only 1** other manager; the tree is at most 6 levels deep. https://support.google.com/google-ads/answer/7456530
- **The limit that bites first: 20 Google Ads accounts per email address, managers included.** https://support.google.com/google-ads/answer/7459399
- Linking is initiated by the manager and **accepted inside the client account**. Linking an existing account does not transfer ownership; a manager that CREATES an account becomes its owner. The client can always unlink. https://support.google.com/google-ads/answer/7456532

**Sub-managers per line of business.** Technically fine (one manager may sit under one manager). But each sub-manager consumes one of the 20 accounts on `hi@fady.be`, and it adds a level to every link. The recommendation below is labels first, sub-managers only when a line of business gets its own person or its own login.

**Billing.** Consolidated billing needs monthly invoicing, which needs a company registered 1 year plus **5,000 USD/month spend in 3 of the last 12 months**. https://support.google.com/google-ads/answer/2375377 . Out of reach and not wanted: per-client card on the client's own account is the correct model. Note the offboarding trap too: an account on the manager's monthly invoicing **stops serving the moment it is unlinked**. https://support.google.com/google-ads/answer/7458428

**Suspension bleed. This is the important one.**
- Google: "Accounts related to the suspended account **may be suspended**", and new accounts the advertiser creates may be suspended too. https://support.google.com/google-ads/answer/9841640
- The circumventing-systems policy suspends multiple-account abuse **without prior warning** and is close to unappealable. https://support.google.com/adspolicy/answer/15938075
- **Not found:** an official Google page naming the signals that make accounts "related". Practitioner sources name payment method, domain, IP, business details and manager link (https://ppchero.com/how-to-navigate-your-google-ads-suspension/).
- Practical conclusion: **the one relatedness signal Fady fully controls is the payment method.** One card across unrelated clients is the thing to remove.

**Conversion tracking.** Cross-account conversions live at the manager and are shared down, and "A Google Ads account can use account-specific conversions or cross-account conversions. It can't use both." https://support.google.com/google-ads/answer/3030657 . Cross-account is designed for one advertiser with many accounts, not for unrelated businesses. **Per-account conversion actions** keep each client independent and make unlinking clean. That is already what the taxi sites do (a per-driver `AW-` tag).

**Naming.** No official Google convention (**not found**). URLs are no longer allowed in new account names, and **account labels** exist in manager accounts for organising. https://support.google.com/google-ads/answer/7519527

### 2.2 Google Business Profile

- An **organization account** is how an agency manages profiles for owners, and it "cannot directly own an individual profile". **One organization per company.** https://support.google.com/business/answer/9199701 and https://support.google.com/business/answer/7663063
- **Business groups** (formerly location groups) collect profiles under an organization; one primary owner per group; transfers only work between groups primary-owned by the same organization. https://support.google.com/business/answer/7655842 , https://support.google.com/business/answer/6085320
- Roles: **primary owner** (one), owner, **manager** (formerly "site manager"). A manager cannot add or remove users, cannot delete the profile, cannot edit all URLs. Newly added owners and managers wait **7 days** before they may delete the profile or transfer ownership. https://support.google.com/business/answer/3403100
- **This is policy, not preference:** "All end customers must retain ownership or co-ownership of their Business Profile at all times", and representatives must encourage the owner to own the profile and add the agency as manager. Holding a profile hostage for payment, or failing to remove access when the relationship ends, is prohibited. https://support.google.com/business/answer/7353941
- Bulk verification needs 10 or more brick-and-mortar locations and **service-area businesses do not qualify**. Taxi drivers and a mobile drain service are both SABs, so it never applies. https://support.google.com/business/answer/4490296
- **Not found:** any official numeric limit on profiles per group or groups per organization.

### 2.3 Google Workspace and Gmail

- If a client identity lives inside the agency tenant, the agency admin "can access and process your data, including the contents of your communications" and can delete the account. https://support.google.com/accounts/answer/181692 . So an account created inside the fady.be tenant is an AGENCY asset, and offboarding it is a migration, not a permission change.
- **Aliases are not a substitute for an identity.** Up to 30 aliases per user, but "email aliases don't support delegates because an alias isn't a Google Account". https://support.google.com/a/answer/33327 . An alias cannot own an Ads account, a GA4 account or a Business Profile. Aliases are only useful for agency-side inbound routing.
- Recovery: the recovery address must be one the user can sign into and different from the account address, and the phone must belong only to the user. https://support.google.com/a/answer/3033063 . Making `hi@fady.be` the recovery address on a client account recreates lock-in in a different place.
- Workspace **reseller** transfers use a token that expires in 14 days, are **nonreversible**, and are capped at 2 reseller moves per calendar year. https://support.google.com/a/answer/7643791 . Not worth it for a one-mailbox client.

### 2.4 GA4 and Tag Manager

- Google states the agency answer for GTM outright: "**If an agency manages tags on behalf of your company, then your company should create the Tag Manager account and add the agency's Google account as a user**", one account per organization, one container per web domain. https://support.google.com/tagmanager/answer/6103576
- GA4 hierarchy: up to 100 accounts per user, 2,000 properties per account, 50 data streams per property. https://support.google.com/analytics/answer/9303323
- The rule that settles it: an Analytics **account** is "a collection of properties whose data is **owned by a single legal entity**". https://support.google.com/analytics/answer/9679158 . Unrelated clients must therefore not share one GA4 account.
- Account-level roles inherit down to every property, so account-level access to a shared account exposes every client in it. https://support.google.com/analytics/answer/9305587
- **Not found:** an official containers-per-GTM-account limit.

### 2.5 Cloudflare

- **Pages projects are ACCOUNT-scoped, not zone-scoped.** https://developers.cloudflare.com/fundamentals/concepts/accounts-and-zones/ . A user can belong to many accounts.
- Roles are account-scoped, domain-scoped, or resource-scoped (beta). https://developers.cloudflare.com/fundamentals/manage-members/roles/ . **There is no per-Pages-project role**: anyone given Pages access sees every Pages project in the account.
- **Organizations** (a container for many accounts) require the creating account to be **Enterprise**. https://developers.cloudflare.com/fundamentals/organizations/for-enterprise/ . Not available here.
- The **Tenant platform** is the official multi-client provisioning route but it is partner-programme only, behind a signed agreement, "not enabled by default". https://developers.cloudflare.com/tenant/get-started/ . Over-scale for one person with three clients.
- Limits: **100 Pages projects per account** (not routinely increased), 100 custom domains per project on Free, 500 builds a month, 1 concurrent build. https://developers.cloudflare.com/pages/platform/limits/
- **The constraint that decides the shape:** an **apex** custom domain "must be a zone on the Cloudflare account you have created your Pages project on". A **subdomain** does not need to be. https://developers.cloudflare.com/pages/configuration/custom-domains/ . So zone and Pages project must be co-located for `client.be` to serve; `www.client.be` alone could be CNAME'd from anywhere.
- **Moving a zone between accounts has no in-place path**: remove and re-add, export the DNS records first (they do not travel), remove DNSSEC, and **certificates are not transferred** (Universal SSL reissues). The old account shows Pending, then Moved Away, then deletion after 7 days. https://developers.cloudflare.com/fundamentals/manage-domains/move-domain/
- Moving a **Pages project** between accounts: **not found**, no official procedure. The community answer is to re-create the project in the target account. For a generated static site that is cheap: redeploy the same build.
- **Blast radius of a suspension: not found as documentation.** Cloudflare publishes nothing saying an account suspension takes every zone down. Suspension is an account-level state and nameservers are assigned per zone inside the account, so the correlated risk is a structural inference plus community reports (for example https://community.cloudflare.com/t/account-suspended-unable-to-manage-or-transfer-my-active-domains/834859), not documented behaviour. Say it that way to Fady.
- Cloudflare's own best-practice page is worth quoting to a client: decentralize access, list **the organization, not an individual**, as registrant, use a role-based shared address, keep billing current, document succession. https://developers.cloudflare.com/fundamentals/reference/best-practices/

### 2.6 Registrar and Infomaniak

- ICANN guidance: put the organization's legal name in Registrant Organization and a role-based name in Registrant Name. https://www.icann.org/en/blogs/details/good-practices-for-the-registration-and-administration-of-domain-name-portfolios-part-i-30-5-2017-en
- **Infomaniak decouples the WHOIS holder from the managing account:** the WHOIS details are "independent of the Infomaniak account". Owner changes need both parties' agreement and an e-mail confirmation valid for **two days**, and some TLDs charge for it. https://www.infomaniak.com/en/support/faq/1853/changing-the-whois-details-for-a-domain-name
- Infomaniak supports a real **inter-account product transfer** with **no service interruption**: the sender must be Administrator or Legal Representative, the receiver needs admin rights, and the link can be sent by e-mail. What is lost: current users' access, group-managed rights, and invoice history. https://www.infomaniak.com/en/support/faq/2024/manager-transferring-a-product-from-one-infomaniak-account-to-another
- Per-product user access exists, so a client can be given access to **one domain only**. https://www.infomaniak.com/en/support/faq/1610/manage-a-users-product-access-in-an-organization . There is also a partner-authorisation flow for the reverse case (client owns the account, agency is the partner). https://www.infomaniak.com/en/support/faq/2669/authorize-a-partner-to-access-your-products
- **The current taxi setup is already close to best practice here:** driver as WHOIS holder from day one, one Organisation per client, and a documented downtime-free exit. Keep it.

### 2.7 Chrome profiles

- Profiles keep bookmarks, history, passwords and settings separate. https://support.google.com/chrome/answer/2364824 . The same page warns that anyone at the keyboard can switch profiles, so a profile is an organizational boundary, not a security one.
- Cookies live in a file inside the profile directory, and extensions are per profile. https://chromium.googlesource.com/chromium/src/+/HEAD/docs/user_data_dir.md . So **Google sessions and the Claude extension are scoped to one profile**, and a browser agent can only ever act in the profile Chrome was launched with. (**Not found:** an official Google sentence saying profiles do not share cookies; this is inference from the Chromium storage layout.)
- Verify which profile a running Chrome uses at `chrome://version` (Profile Path).
- Profile separation fixes wrong-account accidents. It does **not** fix the permission-classifier refusal on access grants (part 1.4 item 2). Those are two different problems.

### 2.8 Tally, Mollie, WhatsApp

**Tally.** Workspaces are a "top-level container" and are **Pro only** (20 euro a month). https://tally.so/help/workspaces , https://tally.so/pricing . There are **no roles and no per-folder permissions**: "All users within an organization have the same rights to create, edit, view, and delete forms and workspaces", and there is **no per-form transfer to another account**. https://tally.so/help/team-collaboration . So a workspace is tidiness, not isolation, and a client's form can never be handed over as such. The client asset is the submission data in the handoff folder, not the form.

**Mollie.** One login can hold several **organisations**, and the deciding rule is the **business registration number**: a different registration number requires a new organisation. https://help.mollie.com/hc/en-us/articles/360014268520-Can-I-add-another-company-to-my-account- . Mollie's User Agreement restricts the service to legal entities acting in a business capacity (https://www.mollie.com/legal/user-agreement) and KYC verifies the legal representative and the UBO. **So every client must have his own Mollie organisation in his own name; running client payments through the agency organisation would make fady.be the merchant of record.** Ownership can be transferred inside an organisation when both users have a verified e-mail and MFA. https://help.mollie.com/hc/en-us/articles/26174966106642-Transfer-organization-ownership . (help.mollie.com returns 403 to automated fetch, so these are search extractions of the exact URLs, **unverified by direct fetch**.)

**WhatsApp Business app.** One phone number equals one WhatsApp account, and a number cannot be on Messenger and Business at once. https://developers.facebook.com/docs/whatsapp/phone-numbers . Up to 4 linked companion devices share ONE inbox with no per-agent identity and no record of who replied. The clean rule: the number stays the client's, the agency never links a device.

**WhatsApp Cloud API** (only if automation ever happens). The hierarchy is business portfolio, then WABA, then numbers. **A WABA cannot move between business portfolios once a line of credit is attached**, so creating client WABAs inside the agency portfolio is an undoable lock-in. A WABA can be shared with up to 2 partners, which is exactly the agency case. https://developers.facebook.com/docs/whatsapp/overview/business-accounts

---

## PART 3 - The proposal: one structure for fady.be with three lines of business

### 3.1 The tree

```
fady.be (the agency, Fady Youssef)
│
├─ AGENCY-OWNED, shared across all lines of business
│   ├─ Google Workspace hi@fady.be ............ the one agency identity
│   ├─ Backup Gmail (separate, used for nothing else) ... the second pair of hands
│   ├─ Google Ads manager "Fady Agency" 724-595-2027 ... ACCESS ONLY, never billing
│   │     └─ labels: TAXI · DRAIN · FASHION     (labels, not sub-managers, until a line
│   │                                            gets its own person or its own login)
│   ├─ GBP organization account (one per company, Google's rule)
│   │     └─ one business group per line: Taxi · Pro Débouchage · Fashion
│   ├─ Infomaniak agency account
│   │     └─ one Organisation per client, WHOIS holder = the client
│   ├─ Cloudflare agency account
│   │     └─ one zone + one Pages project per client
│   ├─ Tally (one workspace per line if Pro; no isolation either way)
│   └─ The template, the build tooling, the folders on disk
│
├─ CLIENT-OWNED, one set per client, agency added as manager or admin
│   ├─ His Google account (Workspace on his own domain, or a consumer account)
│   ├─ His Google Business Profile ......... he is PRIMARY OWNER, agency is MANAGER
│   ├─ His Google Ads account .............. linked to 724-595-2027, HIS card
│   ├─ His GA4 account (his legal entity), one property, agency = Administrator
│   ├─ His domain ......................... WHOIS holder from day one
│   ├─ His Mollie organisation (his registration number)
│   └─ His WhatsApp number
│
└─ PER-CLIENT ON FADY'S MACHINE
    └─ one Chrome profile per client identity, created by hand
```

### 3.2 Naming conventions

One pattern everywhere, so a screenshot is never ambiguous. The two-manager incident of part 1.4 is what this prevents.

| Surface | Pattern | Example |
|---|---|---|
| Google Ads client account | `fady.be \| <LINE> \| <Client>` | `fady.be \| Taxi \| Mulu` , `fady.be \| Drain \| Pro Debouchage` |
| Ads manager account | put the ID IN the name: `fady.be AGENCY MCC 724-595-2027` | so the dormant Hotmail one can never be confused again |
| Ads label | the line of business only | `TAXI` , `DRAIN` , `FASHION` |
| GA4 account | the client's legal entity name | `Pro Débouchage` |
| Cloudflare Pages project | `<line>-<slug>` | `taxi-mulu` , `drain-prodebouchage` |
| Infomaniak Organisation | the clean trade name, no city | `Pro Débouchage` |
| Chrome profile | `<LINE> - <Client>`, plus a distinct profile colour per line | `DRAIN - Pro Debouchage` |
| Folder on disk | one top folder per line of business | `taxi-business/` , `pro-debouchage/` |

### 3.3 What must NEVER be shared between clients or lines of business

1. **A payment method.** One card across unrelated Ads accounts is the strongest relatedness signal Fady controls, and a "related accounts" suspension is close to unappealable (2.1). Each client pays for his own Ads, his own Workspace and his own domain renewal. An agency card is a temporary build instrument only, named as such, with a removal date.
2. **A phone number used for verification.** Verification numbers tie profiles and accounts together at Google. Use the client's own number for his own verification, every time.
3. **Conversion tags and conversion actions.** Per-account actions, per-client `AW-` tag. Never cross-account conversions (2.1).
4. **A GA4 account.** One account per legal entity, which is Google's own definition (2.4).
5. **A Google login.** No client identity inside the fady.be Workspace tenant (2.3), and no alias pretending to be one.
6. **DNS write access.** Never grant a third party (for example the Entri one-click in the Workspace verification flow) write access to the agency Cloudflare, because it holds every client's zone. Already the rule in the SOP.
7. **A WhatsApp inbox.** Never link an agency device to a client's WhatsApp (2.8).
8. **A Mollie organisation.** One per registration number, as a legal matter (2.8).

### 3.4 Where the taxi setup differs from the ideal (marked, NOT proposed for change today)

`../taxi-business/` is read-only from here and none of this is a proposal to change it. The deltas are recorded only so Pro Débouchage does not inherit them.

| # | Ideal | Taxi today | Cost of the difference |
|---|---|---|---|
| 1 | Client's card on the client's Ads account | Fady's personal card ••••8554 on Henok's `813-108-1350` | The relatedness signal of 2.1. Already flagged as temporary in `drivers/taxi-henok/STATE.md` |
| 2 | GA4 account owned by the client's legal entity | Mulu's property sits in the agency account `Fady` 402514715 and Mulu has no access; Henok's is his own and the agency has none | Two opposite shapes, neither matching the 2026-07-28 decision. Both already carry an ask on the handover line |
| 3 | Cloudflare zone and Pages project in the client's own account | One agency account holds every zone and every Pages project | One suspension or one billing failure is correlated across all drivers. Exit costs a remove-and-re-add with certificate reissue (2.5) |
| 4 | Agency identity used only for access | `hi@fady.be` is the login for everything: mailbox, MCC, Analytics, Cloudflare, Infomaniak | Single point of failure. Exactly what the 2026-08-18 backup-Gmail decision addresses, and its Google half is still pending Fady's clicks |
| 5 | Unambiguous account names | Two managers both named `Fady Agency` | Already cost a session; the dormant one is permanently parked by decision |

Only item 1 is genuinely urgent, and only because of the suspension policy. The rest are handover hygiene.

### 3.5 The one open judgement call for Fady

**Cloudflare: one agency account, or one account per client?** The research does not settle it, and Cloudflare publishes no agency guidance (2.5).
- **Agency account** (what taxi does): fast, well inside the limits, one login. Cost: correlated blast radius, no per-project permissions, and a remove-and-re-add at exit.
- **Client-owned account, Fady added as a member**: nothing to migrate ever, the apex works because zone and project are co-located, and handover is "remove Fady from the members list". Cost: one more account creation per client, and the client must be able to receive the verification e-mail.

For Pro Débouchage the client is Fady's nephew with a real company, so the client-owned account is realistic in a way it is not for every solo driver. Worth deciding deliberately before the zone is created, because moving it afterwards costs a certificate reissue and a 7-day tail.

---

## PART 4 - For Pro Débouchage specifically: the order to create things

Owner column: **F** = Fady's own click (payment, password, account-creating submit, any access grant, because the permission classifier refuses those for agents and for the main session alike, `AGENTS.md` section 10). **C** = Claude or an agent can do it. **R** = Roro.

| # | Step | Owner | Note |
|---|---|---|---|
| 1 | Create Chrome profile `DRAIN - Pro Debouchage`, sign it OUT of Google, confirm on `myaccount.google.com`, grant the extension its site permissions inside that profile | F | Do this FIRST. Every later screen happens inside it |
| 2 | Brand and domain clash check, APPROVED before anything is bought | C | The taxi gate, worth keeping |
| 3 | Decide the Cloudflare shape (3.5) before any zone exists | F | Cheap now, expensive later |
| 4 | Register the domain at Infomaniak: new Organisation `Pro Débouchage`, **WHOIS Owner = Roro's company, his own e-mail** | F pays, C drives | The holder is independent of the managing account (2.6), so set it right on day one and avoid the two-day-validated owner change later |
| 5 | Roro's Google identity: **his own** Workspace tenant on his domain, or his own consumer Google account. **Never inside the fady.be tenant** | F may type the password, R owns it | 2.3. This account is the login for his GBP, his Ads and his GA4 |
| 6 | Business Profile: **Roro is primary owner**, `hi@fady.be` added as **Manager**, plus the backup Gmail as Manager | R clicks the grant | Google policy, not preference (2.2). Gated on the address question in `playbook/launch-plan.md` |
| 7 | Google Ads: account created under **Roro's** Google login, named `fady.be \| Drain \| Pro Debouchage`, label `DRAIN`, linked to `Fady Agency` **724-595-2027**, accepted live on a computer inside his own account | R accepts, C verifies read-only | Verify by the customer ID, never by the manager name (part 1.4 item 1) |
| 8 | Ads billing: **Roro's own card and his own payments profile**. The agency card is not used, not even temporarily | R | 3.3 item 1. This is the one line where Pro Débouchage should NOT copy what happened with Henok |
| 9 | Conversion actions: **per-account**, in his own Ads account, his own `AW-` tag on the page. No cross-account conversions | C | 2.1 |
| 10 | GA4: a **new account in Roro's name** (his legal entity), one property, one web stream, `hi@fady.be` and the backup Gmail as Administrators. Do NOT put it in the agency account `Fady` 402514715 | R creates or grants, C configures | 2.4, and it avoids taxi delta 2 |
| 11 | Tag Manager: skip it. The taxi sites load `gtag.js` directly and there is no container to maintain | C | Only revisit if the page needs more than two tags |
| 12 | Cloudflare zone plus Pages project per the step-3 decision. Remember: the apex needs zone and project in the SAME account | F creates the account if client-owned, C does the rest | 2.5 |
| 13 | Mollie: only if Roro takes deposits. **His own organisation, his registration number, his bank account** | R | 2.8. Not the agency's organisation, ever |
| 14 | WhatsApp: his number, his Business app. The agency never links a device | R | 2.8 |
| 15 | Write the result into `playbook/accounts.md` (which account, who owns it, how access was granted, never a password) and the shape into `playbook/separation.md` | C | `AGENTS.md` sections 4 and 8 |

**The pattern to plan every grant with, because the classifier refuses them:** an agent takes the read-only inventory first, Fady or Roro makes the click, an agent verifies read-only afterwards and files the line. Never plan a grant as an agent action.

---

## PART 5 - What could not be verified

1. Google's official definition of "related accounts" for suspension purposes. Only the word "related" is published.
2. Any official Google naming convention for Ads accounts.
3. Official numeric limits for Business Profile profiles per business group, or groups per organization.
4. Official Tag Manager containers-per-account limit.
5. Cloudflare zones-per-account limit on the Free plan, in either direction.
6. Any official Cloudflare statement that an account suspension takes down every zone in that account. Structural inference plus community reports only.
7. Any official Cloudflare procedure for moving a Pages project between accounts.
8. Whether Cloudflare member invites are available on the Free plan, and any per-plan member cap.
9. An official Google sentence saying Chrome profiles do not share cookies. Inferred from the Chromium user-data-directory layout.
10. Mollie help-centre pages could not be fetched directly (403). The Mollie facts are search extractions of the exact URLs cited.
11. Whether Tally offers any external guest access to a single form. Apparently not, but stated as an absence rather than a documented no.
