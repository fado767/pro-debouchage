# The customer read, Google Ads, 2026-09-28: who clicks, what they searched, where they landed

One Sonnet browser agent, read-only, about 30 minutes (about 11:08 to 11:39), Chrome profile fady.be, hi@fady.be, account 166-502-9105, campaign "PD | Search | Ring Bruxelles | FR+NL". Ranges: the presets "All time" (27 Aug to 28 Sep) and "Last 14 days" (14 to 27 Sep). Nothing was changed. Several click cells did not render as text; the agent rebuilt them from cost and average CPC and cross-checked them with impressions and click rate. A conversion here is a counted tap on a call button (call_click), counted only for a visitor who accepted cookies.

## 1. Is any age or gender excluded? NO
Audiences, Demographics, Exclusions, both ranges: "You don't have any audience segment exclusions yet." The bid adjustment column reads a dash for every age, gender and device row, at campaign and ad group level. Roro's thought that an age setting was chosen is answered: none exists.

## 2. Age
| Age | All time: clicks | impr | cost | taps | Last 14 days: clicks | impr | cost | taps |
|---|---|---|---|---|---|---|---|---|
| 18 to 24 | 2 | 18 | 9.97 | 0 | 1 | 14 | 5.96 | 0 |
| 25 to 34 | 17 | 226 | 98.56 | 2 | 5 | 124 | 17.72 | 0 |
| 35 to 44 | 12 | 196 | 91.44 | 2 | 6 | 113 | 46.08 | 0 |
| 45 to 54 | 18 | 235 | 75.21 | 1 | 14 | 135 | 50.39 | 0 |
| 55 to 64 | 32 | 296 | 120.27 | 0 | 21 | 212 | 74.98 | 0 |
| 65+ | 43 | 425 | 136.51 | 3 | 32 | 313 | 96.69 | 3 |
| Unknown | 59 | 1,127 | 194.27 | 1 | 37 | 687 | 119.67 | 0 |
| Total | 183 | 2,523 | 726.23 | 9 | 116 | 1,598 | 411.49 | 3 |

The session's own sums: Google knows the age of 124 of the 183 clicks. Of those 124, 43 are 65+ (35 percent) and 75 are 55 or older (60 percent). In the last 14 days: 32 of 79 known are 65+ (41 percent), 53 are 55 or older (67 percent). Fady's impression holds for the clicks; Roro's "40 to 60" covers 50 of the 124 (45 to 64). The age of a third of the clicks is unknown, and 9 taps are too few to rank age groups by taps.

## 3. Gender, all time
| Gender | Clicks | Impr | Cost | Taps |
|---|---|---|---|---|
| Female | 72 | 663 | 267.10 | 7 |
| Male | 51 | 728 | 261.70 | 1 |
| Unknown | 60 | 1,132 | 197.42 | 1 |

## 4. Devices
All time: 183 clicks, phones 153, computers 16, tablets 14. Last 14 days: phones 90 clicks, 326.66 EUR, 0 taps; computers 14 clicks, 1 tap; tablets 12 clicks, 2 taps. Before 17 Sep every tap came from a phone (research/34 section 7: 66 phone clicks, 6 taps).

THE SESSION'S READING, NOT PROVEN: 0 taps on 90 phone clicks against 6 on 66 is too large a fall to be chance. Every call link on the live page carries its tracking attribute, the phone header button included (checked by the session with curl on /fr/, 24 links, only one WhatsApp button in the scam section has none). The cookie card was shrunk on 2026-09-16 so that it no longer covers the call button on a phone. A tap is counted only after the visitor accepted cookies. So a phone visitor can now tap Call without answering the card, and that tap is not counted. If that is right, part of the fall from 8 in 100 to 2 in 100 (research/54) is a fall in COUNTING, not in calling. What does not depend on cookies and still fell: the ad's own call log (5 calls before 17 Sep, none after, research/56) and Roro's own word. The GA4 read of the same day tests this (research/58).

## 5. What they searched, last 14 days
Named terms 61 clicks, 227.06 EUR, 1 tap. "Other search terms", which Google does not show, 54 clicks, 180.59 EUR, 2 taps. The 50 named rows, sorted by the session:
| Class | Examples | About |
|---|---|---|
| How-to and products (fix it alone) | hoe wc ontstoppen, hoe ontstop ik mijn gootsteen, wc ontstoppen met plastic zak, met dreft, natuurlijke wc ontstopper, wc ontstopper product, dasty ontstopper, drain king ontstopper, ontstopper voor vaatwasser, oma weet raad, solution miracle, pastille lave vaisselle, produit pour deboucher | 26 clicks, about 73 EUR (the session's own sum; "ontstopper afvoer", 3 clicks, left out as unclear) |
| Price questions | ontstoppingsdienst prijzen, wat kost een ontstoppingsdienst, riool ontstoppen prijs, prix curage, prix débouchage canalisation, prix debouchage evier | 7 clicks, about 20 EUR |
| Competitor names | vleminck (15.64, before the negative took hold), gailly | 2 clicks, about 22 EUR |
| A problem or a service, may need someone | cave inondée quand il pleut (22.90), service debouchage canalisation, debouchage bruxelles, wc verstopt water tot boven, mijn afvoer is verstopt, riool ontstoppen, leidingen ontstoppen and the like | the rest |

Almost all the how-to clicks sit in NL | Wc verstopt and NL | Afvoer verstopt, the two groups paused today. The one tap among the named terms came from "wc ontstoppen met dreft". The word "ontstopper" names the product as often as the tradesman.

## 6. Where they landed
Last 14 days (114 clicks that reached a page, 3 taps): /nl/afvoer-verstopt/ with its anchors 50 clicks and 2 taps; /fr/ with its anchors 30 clicks and 1 tap; /nl/wc-verstopt/ 25 clicks, 0; /nl/kelder-leegpompen/ 4, 0; /nl/ 3, 0; /fr/wc-bouche/ 1, 0; /fr/canalisation-bouchee/ 1, 0.
All time (178 clicks, 9 taps): /fr/ 49 clicks and 6 taps; /nl/ 24 and 1; the afvoer-verstopt page 54 and 2; /fr/#prix 12 and 0; the wc-verstopt page 25 and 0. The French per-problem pages have had 2 clicks in all: no judgment is possible on them.

## 7. When
Last 14 days, by hour: clicks in every hour but one, the most at 18 to 19 (9), then 10 to 12 and 21 to 22 (8 each); 13 clicks between midnight and 06:00. By day: Sunday 26, Saturday 18, Friday 18, Thursday 15, Monday 14, Tuesday 13, Wednesday 12; cost per day of the week between 55 and 62 EUR. The budget does not run out before the evening.

## 8. Not read
The clicks of 2 of the 61 named search-term clicks and about 6 of the 178 all-time landing clicks could not be tied to rows. GA4 and Search Console were not in this brief (research/58).
