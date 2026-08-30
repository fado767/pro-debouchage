# playbook/separation.md, how fady.be keeps clients and lines of business apart

*The one owner of the agency-wide account structure as it applies to this project, and (since 2026-08-30) of the CONTROL MODEL below. Rewritten in place. Distilled 2026-08-22 from `research/05` (Google, Cloudflare and agency practice, plus the current taxi inventory read read-only). The taxi setup is NOT changed from here; where it differs from the ideal, the difference is only recorded so Pro Débouchage does not inherit it.*

## 0. THE CONTROL MODEL (settled 2026-08-30, this file is its one owner, every other file points here)

Fady settled it on 2026-08-30 (DECISIONS.md, the 2SV close-out block): **the AGENCY manages everything end-to-end, and RORO is the owner ON RECORD.** Roro asked for it that way. He does not want to hold keys and he does not want to be the person a login prompt has to wait for.

- **What is ours: custody, not ownership.** The second factors for the shared Google identity `info@prodebouchage24.be` live on the AGENCY side, and Fady signs into that account himself: the passkey (Fady's Windows), the authenticator app (Fady's iPhone), the Google prompt devices and the 10 backup codes (Fady's Bitwarden). A passkey on Roro's phone and a copy of the recovery codes on his side were considered and are deliberately NOT wanted; they are dropped, not pending.
- **What is his: everything that matters and everything that transfers.** The domain holder, the Business Profile Primary Owner, the Ads login and its billing payer, the GA4 account, his reviews and his customers. None of that is agency property at any moment.
- **This does NOT weaken gate G2, and a future reader must not read it that way.** G2 says Roro owns every account, and ownership is exactly the part that is unchanged: holder, Primary Owner, payer and login all stay in his name. Only CUSTODY of the second factors sits with the agency. Ownership and custody are two different things; finding the agency holding the codes is not evidence that the gate was quietly broken.
- **Handover is one pass.** If the relationship ever ends, all of it moves to him at once: 2SV re-enrolled on his own devices, fresh backup codes issued to him, the agency removed as manager or admin everywhere, and the Cloudflare zone and Pages project remove-and-re-added on his side (the known exit cost, section 5).
- **Why it is written here and nowhere else.** The same paragraph had been restated in full in several files by 2026-08-30 and had started to drift. Other files now carry a one-line pointer to this section and no second copy of the reasoning.

## 0b. How the work runs (Fady, 2026-08-30, standing instruction)

Claude operates this business end-to-end. Fady supervises and makes the decisions that are genuinely his: money, credentials, account-level agreements, and anything that touches a live client surface. The goal is a business that eventually runs itself, with Claude catching and correcting the mistakes of other sessions, and with Roro's own setup kept dead simple.

## 1. The shape

```
fady.be (the agency)
├─ AGENCY-OWNED, shared across lines of business
│   ├─ Google Workspace hi@fady.be: the one agency identity (access only, never billing)
│   ├─ backup4fady@gmail.com: the second pair of hands, used for nothing else
│   ├─ Google Ads manager "Fady Agency" 724-595-2027 (NOT 785-568-0133, the empty same-name one)
│   │     └─ labels per line: TAXI · DRAIN · FASHION (sub-managers only when a line gets its own person)
│   ├─ Business Profile: agency is MANAGER on each client profile, grouped per line if an organisation account is made
│   ├─ Infomaniak agency account: one Organisation per client, WHOIS holder = the client
│   ├─ Cloudflare agency account: one zone + one Pages project per client (decided for this client: section 5)
│   ├─ Tally, the build tooling, the folders on disk (one top folder per line)
├─ CLIENT-OWNED, one set per client, agency added as manager or admin
│   ├─ his Google identity (Workspace on his own domain), never inside the fady.be tenant
│   ├─ his Business Profile (PRIMARY OWNER), his Ads account (linked to 724-595-2027, HIS card, HIS payments profile)
│   ├─ his GA4 account (his legal entity), agency = Administrator
│   ├─ his domain (WHOIS holder from day one), his WhatsApp number, his Mollie if ever
└─ ON FADY'S MACHINE: one Chrome profile per client identity, created by hand, distinct colour per line
```

## 2. Naming, so a screenshot is never ambiguous
Ads client account `fady.be | Drain | Pro Debouchage`, label `DRAIN` · Cloudflare Pages project `prodebouchage24` (one working Pages project per client, decided 2026-08-27; `pd-review` and the dead `pro-debouchage-v3` deleted 2026-08-28) · Infomaniak Organisation `Pro Débouchage` · GA4 account = the client's legal entity name · Chrome profile `Pro Debouchage` · folder `pro-debouchage/`. (Taxi keeps its own existing names; the pattern applies from this client on.)

## 3. What must NEVER be shared between clients
1. A payment method (one card across unrelated Ads accounts is a relatedness signal and a related-accounts suspension is close to unappealable). Roro pays his Ads, his Workspace and his domain renewal himself, from day one; the agency card is at most a build instrument with a removal date, and for Ads not even that.
2. A phone number used for verification. 3. Conversion tags and actions (per account, per `AW-` tag). 4. A GA4 account (one per legal entity). 5. A Google login (no client identity in the fady.be tenant, no alias pretending to be one). 6. DNS write access to the agency Cloudflare (refuse Entri one-click flows). 7. A WhatsApp inbox (the agency never links a device). 8. A Mollie organisation.

## 4. The deltas from the taxi setup (recorded, not proposed for change)
Fady's personal card on Henok's Ads account (flagged temporary there) · GA4 properties in the agency account for Mulu, in Henok's own for Henok · everything under the single identity hi@fady.be (the backup-Gmail decision of 2026-08-18 addresses it) · two managers named "Fady Agency". Only the card matters urgently, and Pro Débouchage simply does not repeat it.

## 5. The Cloudflare shape (DECIDED 2026-08-23: the agency account)
(a) Agency account, as taxi does: fast, one login, apex works because zone and project share the account; cost: correlated blast radius and a remove-and-re-add with certificate reissue at exit. (b) Client-owned account with Fady as member: nothing to migrate ever, handover is "remove Fady"; cost: one more account and Roro must receive its verification mail. DECIDED 2026-08-23 by Fady: (a), the agency account. Recorded in `DECISIONS.md` and `accounts.md`.

## 6. The grant pattern
Every access grant (manager invites, admin adds, account-creating submits, payments) is Fady's or Roro's own click: an agent inventories read-only first, the human clicks, an agent verifies read-only and files the line in `accounts.md`. Never planned as an agent action.
