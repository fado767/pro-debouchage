# Second FR RSA, paste-ready draft (2026-09-14)

Campaign **PD | Search | Ring Bruxelles | FR+NL**, ad group **FR emergency**.
Final URL: **https://prodebouchage24.be/fr/**
This ad is **ADDED** next to the existing FR RSA (Ad strength Average). The live FR ad is **never edited and never paused here**: an edit is a new ad and its stats go.

Built on the NL ad of 2026-09-12: 15 headlines each opening on a different first word, 5 towns, 4 descriptions, nothing pinned. Every claim is on the live FR page (copy-fr.js). Counts in brackets, spaces and punctuation included.

## Headlines (15, limit 30)

    Débouchage urgent, on vient     [27]
    Canalisation bouchée 24h/24     [27]
    WC ou évier bouché, on vient    [28]
    Égout bouché ? Haute pression   [29]
    Urgence 24h/24, 7j/7            [20]
    Nuit, week-end et fériés        [24]
    Tout autour de Bruxelles        [24]
    Côté flamand comme côté wallon  [30]
    Louvain, Malines, Alost         [23]
    Nivelles, Wavre, 24h/24         [23]
    Prix dit avant de commencer     [27]
    Le prix dit au téléphone        [24]
    Garanti 30 jours, on repasse    [28]
    Caméra d'inspection comprise    [28]
    Pompage de cave inondée         [23]

## Descriptions (4, limit 90)

    Le prix est dit au téléphone et confirmé à votre porte. Garanti 30 jours.    [73]
    Tout autour de Bruxelles, côté flamand comme côté wallon. Alost, Louvain, Nivelles.     [83]
    WC, évier, douche ou égout bouché ? On vient 24h/24 avec la caméra et la haute pression. [88]
    Nuit, week-end et jours fériés. Caméra d'abord, on ne casse pas sans votre accord.      [82]

## Display paths (limit 15, lowercase, no accents)

    debouchage      [10]
    urgence-24-7    [12]

Same logic as the NL ad (ontstopping / spoed-24-7).

**Self-check:** longest headline 30 (Côté flamand comme côté wallon), longest description 88, so no headline over 30 and no description over 90. No phone number anywhere, no exclamation mark, no all-caps word (WC is the page's own abbreviation and already runs in the live FR ad).

## When VAT settles: the price pair

The gate holds today: `ads-program.md` line 20 (no price numbers in ads at launch) and line 40 (price-in-ads reconsidered only if VAT is settled). The poll of 2026-09-14 is still VIES INVALID, so the lines above carry no number. The day VIES reads VALID, swap in:

    Dès 119 €, prix dit avant       [25]
    Dès 119 €, le prix est dit au téléphone et confirmé à votre porte. Garanti 30 jours.    [84]

119 € is page-backed (évier, lavabo ou douche, TVA 6 percent comprise).

Vilvorde is deliberately absent from the towns (Vilvoorde rule, landing-page.md section 4): it stays a keyword, never ad copy.

## What to check on paste

- Ad strength **Good** or better before saving; if it is not, add a headline Google's panel asks for, never a pin.
- **Nothing pinned:** all 15 headlines and 4 descriptions at position "None".
- Clear any prefill from the existing ad before typing (it bit the NL build).
- The old FR ad **untouched**: still enabled, same stats, not edited.
- After saving: reload and re-read the ad (final URL /fr/, 15 headlines, 4 descriptions, both paths), then log it.
