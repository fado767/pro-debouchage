# Is a tap on a phone counted? The live test of 2026-09-28

One Sonnet agent, in-app Browser pane (no Chrome), https://prodebouchage24.be/fr/, 12:14 to 12:21. Consent was given for ANALYTICS ONLY, ads stayed off (read back from localStorage: ads false, analytics true), so no Google Ads conversion fired. The dialer never opened: the tel: navigation was stopped and a real bubbling click was dispatched on each button. The pane emulates a Chrome and Android phone (375 by 812), not an iPhone.

## Answer
COUNTING WORKS ON PHONES. No code fault and no layout fault was found.

## What was tested
| Test | Result |
|---|---|
| Phone, no consent yet, tap on the header call button | Nothing sent to Google. By design |
| Phone, analytics accepted, header call button | Counted: call_click, cta header-call, request to google-analytics.com seen |
| Phone, analytics accepted, hero call button | Counted, cta hero-call |
| Phone, analytics accepted, sticky bar call button | Counted, cta sticky-call |
| Computer, same consent, hero call button, twice | Counted, the request showed 5 to 7 seconds later |
| Is any call button covered by another layer on a phone | No, with the cookie strip open and with it closed (elementFromPoint at the centre of each button) |

## How a tap is counted (build.js, the consent script, about lines 348 to 413)
One click listener on the document looks for a[data-cta]. It sends call_click only when the flag "loaded" is true, and that flag turns true the first time the visitor accepts ads or analytics. The Ads conversion is sent only when ads is accepted. Consent lives in localStorage (pd_consent, 182 days).

## The cookie strip on a phone since 2026-09-16
A small strip fixed at the bottom. The page behind it scrolls and every button can be tapped while it is open. It has no close button and no timeout. So a visitor CAN call without answering it: the phone dials, the tap is not counted. Before 16 Sep the large card covered the hero call button, so a phone visitor had to answer it first.

## What this means (the session's reading)
- The counted taps are a partial view, and more so on phones since 16 Sep. GA4 shows about 44 in 100 ad clicks before and about 24 in 100 after (research/58).
- The fall from 8 to 2 counted taps in 100 clicks (research/54) mixes two things that the numbers cannot separate: fewer calls, and fewer COUNTED calls. The two facts that do not depend on cookies stand: the ad's own call log (5 calls before 17 Sep, none after, research/56) and Roro's word.
- Maximize Conversions learns from counted taps and from "Calls from ads". The second needs no cookie.
- Not testable here: a real iPhone with Safari (tracking prevention, content blockers), a real finger, and how many phone visitors accept.

## Found on the way
- template.js lines 380 to 384 hold a second click listener, a "click taxonomy shim": it pushes a look-alike object (event call_click, cta, lang, ts) into window.dataLayer on every tap, with no consent check, and sends nothing. It is dead code and a trap for anyone who reads dataLayer by eye: the real push has the gtag shape with numbered keys.
- One WhatsApp button (class "btn btn-wa btn-sm", the scam section) carries no data-cta, so its taps are never counted (the session's own curl read of /fr/, 24 links).

## The test taps, to be read as tests in GA4 (28 Sep, this machine's clock)
12:14:41 header-call, phone, no consent (not counted). 12:16:36 header-call, 12:16:46 hero-call, 12:17:10 sticky-call, phone (counted). 12:19:04 and 12:20:17 hero-call, computer (counted). Five call_click events in GA4 on 28 Sep are the session's own. None reached Google Ads.
