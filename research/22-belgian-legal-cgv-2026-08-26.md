# 22. Belgian legal checklist and CGV research

*Date 2026-08-26, overnight v3 session. Agent: Claude, model Opus 5, web research. Raw reference. The CGV
text itself SHIPPED in `design/canvas-v3/cgv.js` (pages /fr/conditions-generales, /nl/algemene-voorwaarden,
/en/terms on the v3 build); this file keeps the legal grounds, the risk flags and the work-order wording
the invoice session still needs. Owner of decisions: DECISIONS.md and the playbook files.*

## 1. Website mandatory mentions (verified)

Art. XII.6 §1 CDE: name, geographic address, e-mail, enterprise number, VAT number IF subject to VAT,
supervisory authority if any, regulated-profession data if any. Art. XII.6 §2: consumer prices clearly
VAT-inclusive. Art. III.74-75 CDE: same identification set. Phone number mandatory since 28 May 2022
(Omnibus Directive transposition). No law requires a page called "Mentions légales": a footer block plus
a linked legal page satisfies "easy, direct, permanent access". SPF Economie says incomplete
identification is the most frequent violation it finds.

Distance-contract duties (booked by phone): art. VI.45 §1 pre-contractual info at the call (identity,
address, price all-in incl. every surcharge or how calculated, payment, complaint handling, withdrawal
info); art. VI.46 §7: written confirmation on a durable medium (SMS/WhatsApp qualifies, a web link does
not) at the latest BEFORE the service starts. No royal decree makes phone orders non-binding for this
sector (art. VI.46 §6 catches energy, not drains).

## 2. Withdrawal right and the urgent-repair exception

- Distance: 14 days, art. VI.47; exceptions art. VI.53. Off-premises: art. VI.67; exceptions art. VI.73.
- **Art. VI.53, 8° verified verbatim**: "les contrats dans lesquels le consommateur a expressément demandé
  à l'entreprise de lui rendre visite afin d'effectuer des travaux urgents d'entretien ou de réparation.
  Si, à l'occasion de cette visite, l'entreprise fournit des services venant s'ajouter à ceux
  spécifiquement requis par le consommateur ou des biens autres que les pièces de rechange indispensables
  aux travaux d'entretien ou de réparation, le droit de rétractation s'applique à ces services ou biens
  supplémentaires". (The VI.73 point number was NOT verified point-by-point; the CGV cites "et sa
  disposition équivalente", which cannot be wrong.)
- Consequences: (a) the customer must EXPRESSLY have asked for the urgent visit, so the work order needs
  a signed line; (b) upsells and non-indispensable parts keep the 14 days; (c) non-urgent planned work
  keeps the full right, and starting early needs the customer's express request on a durable medium,
  with pro-rata payment on withdrawal (art. VI.46 §8).

**Work-order signed line, FR (for the invoice/work-order session):**
> "Je demande expressément à PRO DEBOUCHAGE SRL de se déplacer chez moi pour effectuer des travaux
> urgents d'entretien ou de réparation. Je reconnais avoir été informé que, pour ces travaux urgents et
> pour les pièces de rechange indispensables, je ne dispose pas du droit de rétractation de quatorze
> jours (article VI.53, 8° du Code de droit économique)."

**NL:**
> "Ik verzoek PRO DEBOUCHAGE BV uitdrukkelijk om bij mij langs te komen voor dringende herstellings- of
> onderhoudswerken. Ik erken dat mij werd meegedeeld dat ik voor die dringende werken en voor de
> onmisbare vervangingsonderdelen niet beschik over het herroepingsrecht van veertien dagen (artikel
> VI.53, 8° van het Wetboek van economisch recht)."

## 3. Unfair-terms blacklist points that shaped the CGV (art. VI.83 CDE)

2°/3° no unilateral price change (hence: new price proposed, customer free to refuse, 60 € max);
13° no liability exclusion for dol/faute lourde/main obligation; 14° guarantee must ADD to legal
rights; 17° late-payment indemnity must be mirrored in the consumer's favour; 22°/23° no forum clause
other than art. 624 Code judiciaire; 25° never touch bodily-injury liability; 27° reciprocal
cancellation indemnities. Art. 5.89 Civil Code (2023): only light-fault/secondary-obligation material
damage may be capped (the CGV caps it at what AG Insurance pays).

## 4. Consumer debts, Livre XIX CDE (law of 4 May 2023)

Art. XIX.2: first reminder FREE, then wait 14 calendar days (start: 3rd working day after postal
sending, next day if electronic). Reminder must state amount due, indemnity to come, creditor name and
enterprise number, service description, due date. Art. XIX.4 caps: ≤150 € → 20 €; 150,01-500 € → 30 € +
10% of the part above 150; >500 € → 65 € + 5% of the part above 500, max 2 000 €; interest capped at the
art. 5 al. 2 law-of-2-August-2002 reference rate + 8 points (print the article, not a percentage).
Wrong reminder = consumer released from the indemnity by law. B2B: law of 2 Aug 2002, 10% min 75 €.

## 5. Dispute resolution 2026

EU ODR platform REPEALED (Reg. 2024/3228): closed 20 July 2025, links to it must be removed (still
misleading in 2026). Replacement mention: Service de Médiation pour le Consommateur / Consumenten-
ombudsdienst, Boulevard du Roi Albert II 8 boîte 1 / Koning Albert II-laan 8 bus 1, 1000 Brussels,
FR 02 702 52 20 contact@mediationconsommateur.be, NL 02 702 52 00 contact@consumentenombudsdienst.be.
Belmed status unverified, left out.

## 6. VAT

Rubrique XXXI, RD n° 20: 6% needs dwelling ≥10 years, >50% private use, invoiced to the end user; since
1 July 2022 the attestation sentence goes ON THE INVOICE (one-month contest window). **"à l'exclusion du
nettoyage"**: pure cleaning is excluded from 6%, so a pure curage/nettoyage may be 21% even at a
10-year-old home. Flagged to the accountant (NOW).

## 7. Risk flags raised (state at 2026-08-26, overnight)

1. VIES still INVALID for BE 1027454187 and KBO shows no VAT quality; the register lag is known
   (accountant call 2026-08-25). Consequence held on v3: no "TVA BE..." anywhere; enterprise number
   printed WITHOUT the BE prefix ("Numéro d'entreprise 1027.454.187"), because BE belongs to the VAT
   number format. When VIES flips VALID: print the VAT number (art. XII.6 §1 7° then requires it).
2. Curage-as-nettoyage 21% question → accountant (NOW).
3. Surcharge grid must be published, not only in the CGV → v3 publishes it in the price section.
4. No signed work order today: without the art. VI.53 8° line a night customer can legally reclaim the
   money for 14 days. Highest-value fix for Roro; rides the invoice session.
5. No CGV meant the late-payment indemnity was unenforceable; publishing them (v3) fixes it.
6. Ambulant-trade authorisation: inbound urgent calls fit the prior-express-request exemption; verify
   once via a guichet d'entreprises, nothing on the page changes.
7. Never drop the guarantee's "adds to your legal rights" line (art. VI.83 14°).
8. When the Ads tag lands, never add an ODR link.

Sources: etaamb (Livre XII), SPF Economie newsroom, Retis (rétractation, phone obligation), Actualités
du droit belge (VI.46, VI.53), Credit2Consumer + e2.law (VI.83), UCLouvain (art. 5.89), Leodium +
Resolved.law + etaamb (Livre XIX), Bird&Bird + EC (ODR repeal), mediationconsommateur.be,
consumentenombudsdienst.be, SPF Finances (TVA rénovation), KBO public search, VIES REST.
