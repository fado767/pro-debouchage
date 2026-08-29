// Page template (design v1, locked 2026-08-26): ONE markup builder for the three languages. Copy lives in copy-fr/nl/en.js,
// design in styles.css, assembly in build.js. Output is generated into site-v1/, never edited there.
const TEL = 'tel:+32480649649';
const LANGS = [['fr', 'FR', 'Français'], ['nl', 'NL', 'Nederlands'], ['en', 'EN', 'English']];

const PHONE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8z"></path></svg>';
const WA = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 12 12 0 0 0 4.6 4c1.7.7 2.3.8 3.2.7a2.7 2.7 0 0 0 1.8-1.3c.2-.6.2-1.1.2-1.2s-.3-.3-.5-.4z"></path></svg>';
const STAR = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z"></path></svg>';
const stars = n => '<div class="stars" aria-label="' + n + '/5">' + STAR.repeat(n) + '</div>';

function pageHtml(c, opts = {}) {
  const IMG = opts.img || ((name, alt, w, h, extra) => `<img src="${name}" width="${w}" height="${h}" alt="${alt}"${extra ? ' ' + extra : ''}>`);
  const others = LANGS.filter(l => l[0] !== c.dir);
  const langswitch = `<nav class="langswitch" aria-label="${c.langNav}">${LANGS.map(([d, short, full]) =>
    `<a href="/${d}/" lang="${d}" hreflang="${d}-BE"${c.dir === d ? ' aria-current="page"' : ''}><span aria-hidden="true">${short}</span><span class="visually-hidden">${full}</span></a>`).join('')}</nav>`;
  const callBtn = (label, cta, cls = '') => `<a class="btn btn-call${cls}" href="${TEL}" data-cta="${cta}">${PHONE}${label}</a>`;
  const waBtn = (label, cta) => `<a class="btn btn-wa" href="${c.wa}" rel="noopener" data-cta="${cta}" aria-label="${c.waAria}">${WA}${label}</a>`;
  const sec = (cls, k, h, body, extraAttr = '') => `<section class="${cls}"${extraAttr}><div class="wrap"><p class="kicker">${k}</p><h2>${h}</h2><hr class="rule">${body}</div></section>`;

  const header = `<header class="site-header"><div class="wrap"><a class="logo" href="/${c.dir}/" aria-label="Pro Débouchage">${IMG('logo-icon.svg', 'Pro Débouchage', 320, 200, '')}</a>${langswitch}<a class="btn btn-call header-call" href="${TEL}" data-cta="header-call">${PHONE}${c.callHeader}</a></div></header>`;

  // Hero: stacked pain lines, the answer on a marker stroke, sub with the price promise.
  const h1 = `<h1>${c.h1.map(l => `${l}<br>`).join('')}<span class="h1b">${c.h1b}</span></h1>`;
  // CSS marquee: two identical sets, the clone aria-hidden, keyframes translate the sets -100%.
  // No JS, no measurement, cannot end up blank (the 2026-08-26 desktop bug of the rAF version).
  // Same gap rule as the trust strip: a set narrower than the screen leaves an empty stretch at the
  // end of every cycle. One copy of the photo strip is ~2795px, so it carries TICK_REPEAT copies to
  // clear 4K. The copies reuse the SAME image URLs, so they cost DOM, never extra bytes. Keep
  // --tick-dur in styles.css equal to 80s PER COPY or the speed changes. (Fady 2026-08-26 evening.)
  const TICK_REPEAT = 2;
  // fetchpriority=low on the whole strip: once the observer promotes them these 11 photos all fetch
  // at once, and none of them is the LCP element, so they must queue behind the hero.
  const tickItem = (t, eager, hidden) => `<div class="tick-item"${hidden ? ' aria-hidden="true"' : ''}>${IMG(t[0], t[1], t[2], t[3], (eager ? 'decoding="async"' : 'loading="lazy" decoding="async"') + ' fetchpriority="low"')}</div>`;
  const tickCopy = (hidden, eagerFirst) => c.ticker.map((t, i) => tickItem(t, eagerFirst && i < 3, hidden)).join('');
  const tickSet = tickCopy(false, true) + tickCopy(true, false).repeat(TICK_REPEAT - 1);
  const tickSetLazy = tickCopy(false, false).repeat(TICK_REPEAT);
  const tick = `<div class="ticker"><div class="tick-row"><div class="tick-set">${tickSet}</div><div class="tick-set" aria-hidden="true">${tickSetLazy}</div></div></div>`;
  // THE SWIPE HINT, fourth version (Fady 2026-08-27): the hand alone, no container, sitting inside
  // the first photo at its bottom left with a generous inset, TRAILING DOTS behind the finger as it
  // moves. It went dots, then an arrow chip reading "Glissez pour voir", then a hand in a navy pill,
  // then this. A gesture is read the same by a French and a Dutch customer, and the strip already
  // carries a labelled role=group for anyone who cannot see it, so the words were doing nothing.
  // Drawn here rather than fetched, so it costs no request. Decorative for AT.
  // WITHOUT THE PILL IT HAS TO SURVIVE THE PHOTO UNDER IT: white ink and a drop-shadow, since every
  // slide is a different job photo and some are pale. The dots are real circles, not a dashed
  // stroke, because each has to appear on its own beat as the finger clears it; a dash pattern can
  // only slide, it cannot arrive. All of it stops under prefers-reduced-motion, where the hand
  // simply rests at the end of its travel with the trail behind it.
  const HAND = '<svg class="car-hand" viewBox="0 0 72 40" aria-hidden="true" focusable="false">'
    + '<circle class="car-dot car-dot-1" cx="62" cy="26" r="2.1"/>'
    + '<circle class="car-dot car-dot-2" cx="54" cy="26" r="2.1"/>'
    + '<circle class="car-dot car-dot-3" cx="46" cy="26" r="2.1"/>'
    + '<g class="car-hand-g" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">'
    + '<path d="M22.6 19.3V9.6a2.3 2.3 0 0 1 4.6 0v8.8"/>'
    + '<path d="M27.2 18.6v-2.9a2.25 2.25 0 0 1 4.5 0v3.2"/>'
    + '<path d="M31.7 19.3v-2a2.25 2.25 0 0 1 4.5 0v9a8.4 8.4 0 0 1-8.4 8.4h-2.3a7.8 7.8 0 0 1-6-2.9l-4.1-5a2.3 2.3 0 0 1 3.3-3.2l2.9 2.5"/>'
    + '</g></svg>';
  const car = `<div class="hero-car" role="group" aria-label="${c.carAria}"><div class="car-track">${c.carousel.map((t, i) => `<div class="car-slide">${IMG(t[0], t[1], t[2], t[3], i === 0 ? 'decoding="async"' : 'loading="lazy" decoding="async"')}</div>`).join('')}</div><p class="car-hint" aria-hidden="true">${HAND}</p></div>`;
  // THE LABEL IS PLAIN TEXT for v1 (Fady 2026-08-27, after five rounds on it). It was a pill with a
  // moving brand-coloured stroke, and before that a text version with the colour inside the letters;
  // the agreement was that if the last attempt at the pill still did not read right, v1 ships the
  // label with no effect at all, and it did not. The copy he picked in the widget stays.
  const hero = `<section class="hero"><div class="wrap"><p class="eyebrow">${c.eyebrow}</p><div class="hero-grid"><div>${h1}</div><div><p class="sub">${c.sub}</p></div></div><div class="actions">${callBtn(c.callMain, 'hero-call')}${waBtn(c.waBtn, 'hero-whatsapp')}</div><p class="under-btn">${c.under}</p></div>${tick}${car}</section>`;

  // Trust: CSS marquee on desktop (clone aria-hidden, reverse direction), static list on mobile.
  // Each animated set translates -100% of ITSELF, so a set narrower than the viewport leaves an
  // empty gap at the end of every cycle. One list is only ~1500px, so each set carries TRUST_REPEAT
  // copies: keep the widest set above the widest screen we care about (4K = 3840px), and keep
  // --tick-dur in styles.css equal to 46s PER COPY or the speed changes. (Fady 2026-08-26 evening.)
  const TRUST_REPEAT = 3;
  const trustLi = c.trust.map(t => `<li>${t}</li>`).join('');
  const trustUl = `<ul>${trustLi}</ul>`;
  const trustUlH = `<ul aria-hidden="true">${trustLi}</ul>`;
  const trustSetA = trustUl + trustUlH.repeat(TRUST_REPEAT - 1);
  const trustSetB = trustUlH.repeat(TRUST_REPEAT);
  const trust = `<section class="trust trust-t" aria-label="Engagements"><div class="tick-row"><div class="tick-set">${trustSetA}</div><div class="tick-set" aria-hidden="true">${trustSetB}</div></div></section><section class="trust trust-s" aria-label="Engagements"><div class="wrap">${trustUl}</div></section>`;

  const services = sec('s-card', c.servK, c.servH, `<ol class="servlist">${c.services.map((s, i) => `<li><h3><span class="serv-t">${s[0]}</span></h3><p>${s[1]}</p><a class="link-call" href="${TEL}" data-cta="service-${i + 1}-call">${c.servLink}</a></li>`).join('')}</ol>`);

  const steps = sec('s-paper', c.stepK, c.stepH, `<div class="steps">${c.steps.map(s => `<div class="step"><div class="n" aria-hidden="true"></div><div><h3>${s[0]}</h3><p>${s[1]}</p></div></div>`).join('')}</div>`);

  // Guarantee seal (spinning word ring + centered "1").
  const ringTxt = `${c.guarRing.trim()} · ${c.guarRing.trim()} · ${c.guarRing.trim()} ·&#160;`;
  // y=64.7 is v2's baseline for the bigger 46px numeral: it optically centres inside the ring.
  const seal = (id) => `<span class="guar-spin" aria-hidden="true"><svg viewBox="0 0 100 100" focusable="false"><defs><path id="${id}" d="M50,50 m0,-38 a38,38 0 1,1 -0.02,0 z"/></defs><text class="guar-ring-t"><textPath href="#${id}" textLength="238.7" lengthAdjust="spacing">${ringTxt}</textPath></text></svg></span><svg class="guar-core" viewBox="0 0 100 100" aria-hidden="true" focusable="false"><text class="guar-one" x="50" y="64.7">1</text></svg>`;

  const prices = sec('s-card', c.priceK, c.priceH, `<p class="lead">${c.priceIntro}</p><ul class="chips-inc">${c.included.map(t => `<li>${t}</li>`).join('')}</ul><ol class="pricelist">${c.prices.map((p, i) => `<li><a class="p-row" href="${TEL}" data-cta="price-${i + 1}-call" aria-label="${p[0]}, ${c.priceFrom} ${p[1]}, ${c.priceBtn}"><span class="p-name">${p[0]}</span><span class="p-price"><span class="p-from">${c.priceFrom}</span><span class="p-amt tnum">${p[1]}</span></span></a></li>`).join('')}</ol><p class="p-terms">${c.terms}</p><div class="p-other rv"><div><h3>${c.p4t}</h3><p>${c.p4}</p></div>${callBtn(c.p4b, 'price-other-call')}</div><aside class="guar rv"><span class="guar-badge" aria-hidden="true">${seal('guar-ring-b')}</span><div><h3>${c.guarH}</h3><p>${c.guarP}</p><p class="guar-fine">${c.guarLegal}</p></div></aside><p class="promise"><span class="hl">${c.promise}</span></p>`, ' id="prix"');

  // Before / after slider: real range input under the pointer, clip-path on the top image.
  // The heading lives INSIDE the left column here, not above the grid (Fady 2026-08-26): with only
  // a lead and a caption beside it, the text column was 133px tall against a 575px slider and the
  // section read as a big hole. Heading + lead + caption balances the picture.
  // Before / during / after: one real job in three photos (Fady 2026-08-26 evening, replacing the
  // drag slider), laid out to FADY'S OWN Figma composition: tilted stickers in brand colours, at
  // different sizes, overlapping, joined by HIS brush arrows (drawn in Figma, exported as PNG,
  // converted to avif/webp with a PNG fallback because a JPEG has no transparency). Everything is
  // positioned in PERCENT inside one aspect-ratio box, so the collage scales as a whole and cannot
  // come apart at an odd width. The photos keep their DOM order: before, during, after.
  const BA_PICS = ['ba-before.webp', 'job-wc.webp', 'ba-after.webp'];
  // The coloured edge is DRAWN, not a CSS border (Fady 2026-08-26): a rounded rect roughened by a
  // turbulence filter, so it wobbles like the brush arrows instead of tracing the photo exactly,
  // and sits slightly askew to the photo underneath. One filter per photo, each with its own seed,
  // so the three do not wobble identically. The viewBox is 400x500 and every photo is 4/5, so the
  // stroke lands on the photo edge at any width. There is NO white gap between photo and stroke:
  // that gap made each sticker bigger and, on a phone, the last photo swallowed the blocked bowl.
  const BA_DEFS = `<svg class="ba-defs" width="0" height="0" aria-hidden="true" focusable="false"><defs>${[1, 2, 3].map(n => `<filter id="baRough${n}" x="-18%" y="-14%" width="136%" height="128%"><feTurbulence type="fractalNoise" baseFrequency="0.013" numOctaves="2" seed="${n * 9}" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="8" xChannelSelector="R" yChannelSelector="G"/></filter>`).join('')}</defs></svg>`;
  // The rect is drawn OUTSIDE the photo box (Fady 2026-08-26): -9 to 409 across a 0..400 viewBox,
  // so the stroke frames the picture instead of sitting on it. The SVG keeps overflow:visible and
  // the filter region is widened to match, or the wobble would be clipped at the photo edge.
  const BA_EDGE = n => `<svg class="ba-edge" viewBox="0 0 400 500" aria-hidden="true" focusable="false"><path d="M14-9H386A23 23 0 0 1 409 14V486A23 23 0 0 1 386 509H14A23 23 0 0 1-9 486V14A23 23 0 0 1 14-9Z" fill="none" stroke="var(--st-${n})" stroke-width="6" stroke-linecap="round" filter="url(#baRough${n})"/></svg>`;
  const baItems = c.baSteps.map((s, i) =>
    `<li class="ba-pic ba-pic-${i + 1}">${IMG(BA_PICS[i], s[2], 800, 1000, 'loading="lazy" decoding="async"')}${BA_EDGE(i + 1)}</li>`).join('');
  // Wide screens get the curve then the zigzag; a phone swaps the zigzag for the tall hook, which
  // is the one that reads going downwards. The unused one is display:none, so it is never fetched.
  const baArrow = (n, cls, file, w, h) => `<span class="ba-ar ba-ar-${n}${cls}" aria-hidden="true">${IMG(file, '', w, h, 'loading="lazy" decoding="async"')}</span>`;
  const baArrows = baArrow(1, '', 'arrow-curve.png', 273, 185) + baArrow(2, ' only-wide', 'arrow-zig.png', 267, 138) + baArrow(3, ' only-narrow', 'arrow-hook.png', 157, 271);
  // The handwritten note. It started as two lines with a yellow swoosh ("Fait en / 20 min"), became
  // the customer's reaction, and on 2026-08-27 Fady cut it to ONE WORD with no underline at all:
  // "Parfait !" in French, "Perfect!" in Dutch and English. The Caveat subset was re-cut to the ten
  // glyphs those two strings need, so anything else falls back to a system script face in silence
  // and the guard in build.js exists to stop exactly that.
  const baNote = `<p class="ba-note"><span>${c.baNote}</span></p>`;
  const ba = `<section class="s-card s-ba"><div class="wrap"><p class="kicker">${c.baK}</p><h2>${c.baH}</h2><hr class="rule"><div class="ba-collage rv">${BA_DEFS}<ol class="ba-pics">${baItems}</ol>${baArrows}${baNote}</div></div></section>`;

  const scam = `<section class="s-ink"><div class="wrap"><p class="kicker">${c.scamK}</p><h2>${c.scamH}</h2><hr class="rule"><div class="scam-cols"><div><p class="lead">${c.scamI1}<span class="cite" role="button" tabindex="0" data-cite aria-expanded="false" aria-controls="cite-pop"><span class="cite-t">${c.scamICite}</span><span class="cite-i" aria-hidden="true">i</span><span class="sr-only">, ${c.citeHint}</span></span>${c.scamI2}</p><ul class="scam-list">${c.scam.map(s => `<li>${s}</li>`).join('')}</ul></div><div><h3 class="scam-h3">${c.usH}</h3><ul class="us-list">${c.us.map(s => `<li>${s}</li>`).join('')}</ul></div></div>${callBtn(c.scamB, 'scam-call')}</div></section>`;

  // WHO COMES, rebuilt 2026-08-26 on Fady's call: the old two-column split (van beside three
  // unlabelled text blocks) did not say what the section WAS on a wide screen. It now reads as one
  // introduction: the paragraph, then Afrim speaking to the visitor, then the van under him. The
  // three rules that used to sit in that column became their own section, `inc`, as cards.
  // THE AVATAR IS AFRIM'S OWN FACE since 2026-08-28: the branded portrait prepared from his own
  // photo, with his yes. It replaced the monogram placeholder that stood here while there was no
  // face photo, and with it the build warning. Never put an invented face on a real, named person
  // (rule 5): if this ever has to come out, the monogram comes back, not a stock head.
  const bubble = `<div class="bub-row rv"><div class="bub-av">${IMG('afrim-avatar-3.webp', c.bubbleAlt, 384, 384, 'loading="lazy" decoding="async"')}</div><div class="bub"><p class="bub-txt">${c.bubble}</p><p class="bub-who">${c.bubbleWho}</p></div></div>`;
  // TWO COLUMNS ON A WIDE SCREEN (Fady 2026-08-27): the van photo is 1600px of picture and it was
  // sitting under the paragraph and the bubble, which left the words stranded above a slab. Words
  // left, van right. The DOM order is unchanged, so a phone still reads paragraph, Afrim, van.
  const who = sec('s-card', c.whoK, c.whoH, `<div class="who-grid"><div class="who-words"><p class="lead">${c.whoT}</p>${bubble}</div><figure class="van rv"><div class="van-ph">${IMG('van-sunrise-tall.webp', c.vanAlt, 1200, 1500, 'loading="lazy" decoding="async"')}</div><figcaption>${c.vanCap}</figcaption></figure></div>`);

  // The three rules as their own band of cards, one colour each, drawn icons rather than photos.
  const INC_ICONS = [
    '<path d="M4 8.6A2.5 2.5 0 0 1 6.5 6.1h2.2l1.2-2h6.2l1.2 2h2.2a2.5 2.5 0 0 1 2.5 2.5v8.9a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 4 17.5Z"/><circle cx="13" cy="13" r="3.6"/>',
    '<path d="M6 3h8l5 5v12.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M14 3v5h5"/><path d="M8.5 13h7M8.5 16.5h4.5"/>',
    '<path d="M5 3.6 7 5.1l2-1.5 2 1.5 2-1.5 2 1.5 2-1.5v15.8a2.6 2.6 0 0 0 2.6 2.6H7.6A2.6 2.6 0 0 1 5 19.4Z"/><path d="M8.5 9h6M8.5 12.5h6M8.5 16h3.5"/>'];
  const incCards = c.whoBlocks.map((b, i) => `<li class="inc-card inc-${i + 1} rv"><span class="inc-ic" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${INC_ICONS[i]}</svg></span><h3>${b[0]}</h3><p>${b[1]}</p></li>`).join('');
  const inc = sec('s-paper', c.incK, c.incH, `<ul class="inc-cards">${incCards}</ul>`);

  const mat = sec('s-paper', c.matK, c.matH, `<p class="lead">${c.matT}</p><div class="tiles tiles-3">${c.mat.map((m, i) => `<figure class="tile rv">${IMG(m[0], m[1], 480, 600, 'loading="lazy" decoding="async"')}<span class="tile-t">${m[2]}</span><figcaption>${m[3]}</figcaption></figure>`).join('')}</div>`);

  // One real review, featured (Fady 2026-08-27). No stars: Paolo wrote words, not a rating, and we
  // never invent one. The 3-card grid below it is PARKED: refill `reviews` and it returns by itself
  // (data-placeholder dropped: whatever refills it must be real). Order of precedence: featured,
  // then grid, then the honest card.
  // Under the featured card: ONE object instead of the two loose muted sentences that sat there with
  // a gap reading as a mistake on a wide screen (Fady 2026-08-27). It says why there is a single
  // review and it hands over the way to send the next one.
  // NO data-cta on that link, on purpose: the taxonomy is binary (anything containing "whatsapp" is
  // a lead, everything else is a call), so on tag day a review click would be counted and paid for
  // as a conversion. A review is not a lead. If it ever needs measuring, it needs its own event.
  const revAsk = `<div class="rev-ask rv"><div><p class="rev-t">${c.revT}</p><p class="rev-p">${c.revP}</p></div><a class="btn btn-wa btn-sm" href="${c.waReview}" rel="noopener">${WA}${c.revB}</a></div>`;
  const socialProof = c.featured
    ? `<article class="feat-card rv"><div class="feat-mark" aria-hidden="true">&#8220;</div><blockquote class="feat-q">${c.featured.text.map(p => `<p>${p}</p>`).join('')}</blockquote><footer class="feat-who"><div class="ini" aria-hidden="true">${c.featured.name[0]}</div><div><div class="name">${c.featured.name}</div><div class="feat-meta">${c.featured.meta}${c.featured.note ? ` <span class="feat-note">${c.featured.note}</span>` : ''}</div></div></footer></article>${revAsk}`
    : c.reviews.length
      ? `<div class="reviews">${c.reviews.map(r => `<article class="review-card rv"><div class="who"><div class="ini" aria-hidden="true">${r[0][0]}</div><div class="name">${r[0]}</div></div>${stars(r[1])}<p>${r[2]}</p></article>`).join('')}</div><p class="ask">${c.askLine}</p>`
      : `<article class="honest-card rv"><h3>${c.honestT}</h3><p>${c.honestP}</p><ul>${c.honestL.map(t => `<li>${t}</li>`).join('')}</ul><p class="ask">${c.askLine}</p></article>`;
  const proof = sec('s-card', c.proofK, c.proofH, `<p class="lead">${c.honest}</p><div class="tiles tiles-3">${c.tiles.map(t => `<figure class="tile rv">${IMG(t[0], t[1], 480, 600, 'loading="lazy" decoding="async"')}<figcaption>${t[2]}</figcaption></figure>`).join('')}</div><div style="height:34px"></div>${socialProof}`);

  const segs = sec('s-paper', c.segK, c.segH, `<div class="segs">${c.segs.map(s => `<div class="seg"><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join('')}</div>`);

  const zone = sec('s-card', c.zoneK, c.zoneH, `<p class="lead">${c.zoneT}</p><ul class="towns">${c.towns.map(t => `<li>${t}</li>`).join('')}</ul><p><strong>${c.zoneC}</strong></p><p><a class="link-call" href="${TEL}" data-cta="zone-call">${c.zoneL}</a></p>`, ' id="zone"');

  // Exclusive behavior and the fluid open/close live in PAGE_JS (WAAPI); without JS these are
  // plain independent details, fully functional.
  const faq = sec('s-paper', c.faqK, c.faqH, `<div class="faq">${c.faq.map((q, i) => `<details${i === 0 ? ' open' : ''}><summary>${q[0]}</summary><div class="answer"><p>${q[1]}</p></div></details>`).join('')}</div>`);

  // NO kicker and NO rule here, and that is deliberate, not an omission: this band is the one place
  // on the page that opens on a bare H2. A kicker and a yellow rule were added on 2026-08-27 for
  // consistency with the other bands and removed the same day on Fady's call, because the closing
  // section already carries a headline, a huge number with a marker under it, two buttons and the
  // hours, and they were all competing. Consistency loses to hierarchy here.
  const finalcall = `<section class="s-ink finalcall"><div class="wrap"><h2>${c.finalH}</h2><a class="bignum tnum" href="${TEL}" data-cta="final-call">0480 649 649</a><div class="actions">${callBtn(c.finalB, 'final-call-btn')}${waBtn(c.finalWa, 'final-whatsapp')}</div><p class="hours">${c.finalL}</p></div></section>`;

  const footer = `<footer class="site-footer"><div class="wrap"><div class="cols"><div><span class="foot-logo">${IMG('logo-icon.svg', 'Pro Débouchage', 320, 200, 'loading="lazy"')}</span><p>${c.footD}</p><p><a class="foot-tel" href="${TEL}" data-cta="footer-call">0480 649 649</a><br><a href="mailto:info@prodebouchage24.be">info@prodebouchage24.be</a></p></div><div class="legal"><h2>${c.legalT}</h2><p>${c.legal.join('<br>')}</p><p>${c.vat}</p><p class="foot-note">${c.photoNote}</p><div class="foot-links"><a href="${opts.privacyHref || '#'}">${c.privacy}</a><a href="${opts.cgvHref || '#'}">${c.cgvLabel}</a>${others.map(([d, , full]) => `<a href="/${d}/" lang="${d}" hreflang="${d}-BE">${full}</a>`).join('')}${opts.adsTag ? `<button type="button" class="linklike" data-consent-open>${c.consentLink}</button>` : ''}</div></div></div><p class="credit">&copy; <span id="y">2026</span> ${opts.adsTag ? c.creditTag : c.credit}</p></div></footer>`;

  const bar = `<div class="callbar" role="region" aria-label="${c.callHeader}"><a class="cb-call" href="${TEL}" data-cta="sticky-call">${PHONE}${c.callBar}</a><a class="cb-wa" href="${c.wa}" rel="noopener" data-cta="sticky-whatsapp" aria-label="${c.waBar}">${WA}</a></div>`;

  // Floating guarantee badge. It EXPANDS now instead of popping a card above itself (Fady
  // 2026-08-27): the seal is pinned to the left edge of a yellow box whose right edge never moves,
  // so growing the box slides the seal left and the badge becomes the card. Same promise inside,
  // plus an X. Any close still fades it away for the visit; it hides while the guarantee band is on
  // screen. All of that lives in PAGE_JS, which also measures the open height.
  const X_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 6 18 18M18 6 6 18"/></svg>';
  const fab = `<div class="guar-float"><div class="guar-card"><button type="button" class="guar-fab" data-guar-toggle aria-expanded="false" aria-controls="guar-pop">${seal('guar-ring')}<span class="sr-only">${c.guarH}</span></button><div class="guar-pop" id="guar-pop"><h3>${c.guarH}</h3><p>${c.guarP}</p></div><button type="button" class="guar-x" data-guar-close>${X_ICON}<span class="sr-only">${c.citeClose}</span></button></div></div>`;

  // The cited fact's panel: a real dialog, so the claim can be checked without leaving the page.
  const citePop = `<div class="cite-back" data-cite-back hidden></div><div class="cite-pop" id="cite-pop" role="dialog" aria-modal="true" aria-labelledby="cite-h" hidden><h3 id="cite-h">${c.citeH}</h3><p>${c.citeBody}</p><p class="cite-src">${c.citeSrc}</p><p class="cite-why">${c.citeWhy}</p><button type="button" class="cite-x" data-cite-close>${c.citeClose}</button></div>`;

  const body = `<a class="skip" href="#contenu">${c.skip}</a>
${header}
<main id="contenu">
${hero}
${trust}
${services}
${ba}
${steps}
${prices}
${scam}
${who}
${inc}
${mat}
${proof}
${segs}
${zone}
${faq}
${finalcall}
</main>
${footer}
${bar}
${fab}
${citePop}`;
  return { body };
}

// The page script, inlined at the end of <body>. Vanilla, no dependencies, IO only (no scroll listeners).
const PAGE_JS = `(function(){
var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
document.getElementById('y').textContent=new Date().getFullYear();
/* reveals */
if('IntersectionObserver' in window&&!reduce){
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px 18% 0px',threshold:0.01});
var rv=document.querySelectorAll('.rv');for(var i=0;i<rv.length;i++){rv[i].style.setProperty('--i',i%3);io.observe(rv[i])}
}else{document.querySelectorAll('.rv').forEach&&document.querySelectorAll('.rv').forEach(function(el){el.classList.add('in')})}
/* ticker images: a lazy image moved into view BY A CSS TRANSFORM never loads, because the
   compositor does not recompute intersections, so the strip sat half blank until any mouse move
   or scroll forced a recompute (Fady, 2026-08-26). The .ticker CONTAINER does not move, so watch
   THAT and switch its images to eager once. Mobile keeps the saving: the ticker is display:none
   under 820px and a hidden element never intersects, so those 11 photos are still never fetched
   on a phone. Do NOT "fix" this by making the images eager in the markup: that would download the
   whole strip on phones that never see it. */
(function(){var t=document.querySelector('.ticker');if(!t)return;
var go=function(){var im=t.querySelectorAll('img[loading="lazy"]');for(var i=0;i<im.length;i++){im[i].removeAttribute('loading')}};
if(!('IntersectionObserver' in window)){go();return}
new IntersectionObserver(function(es,o){for(var i=0;i<es.length;i++){if(es[i].isIntersecting){go();o.disconnect();return}}},{rootMargin:'300px'}).observe(t)})();
/* floating guarantee badge: the disc EXPANDS into the card (Fady 2026-08-27). The open height
   depends on how the title wraps, so it cannot be a CSS value: measure it once at the FINAL width
   with transitions off, animate to that pixel value, then release to auto so a rotation reflows
   cleanly. Behaviour is otherwise v2's: any close fades the badge for the rest of the visit, and it
   hides while the guarantee band itself is on screen. */
(function(){var w=document.querySelector('.guar-float');if(!w)return;
var card=w.querySelector('.guar-card'),btn=w.querySelector('[data-guar-toggle]'),open=false;
function measure(){card.classList.add('no-anim');var was=card.classList.contains('is-open');
card.classList.add('is-open');card.style.height='auto';var h=card.offsetHeight;
card.style.height='';if(!was)card.classList.remove('is-open');
void card.offsetHeight;card.classList.remove('no-anim');return h}
function set(v){if(v===open)return;open=v;btn.setAttribute('aria-expanded',v?'true':'false');
if(v){var h=measure();card.classList.add('is-open');card.style.height=h+'px'}
else{card.style.height=card.offsetHeight+'px';void card.offsetHeight;card.classList.remove('is-open');card.style.height=''}}
card.addEventListener('transitionend',function(e){if(e.target===card&&e.propertyName==='height'&&open)card.style.height='auto'});
function bye(){set(false);w.classList.add('guar-bye')}
document.addEventListener('click',function(e){
if(e.target.closest('[data-guar-close]')){bye();return}
if(e.target.closest('[data-guar-toggle]')){if(open){bye()}else{set(true)}return}
if(open&&!e.target.closest('.guar-float'))bye()});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&open)bye()});
var band=document.querySelector('aside.guar');
if(band&&'IntersectionObserver' in window){new IntersectionObserver(function(es){es.forEach(function(en){
if(en.isIntersecting&&open)return;w.classList.toggle('guar-away',en.isIntersecting)})},{threshold:0.2}).observe(band)}
})();
/* the before/after drag slider was replaced on 2026-08-26 by the three-photo story, which needs no
   script at all: no handler here on purpose. */
/* The hero carousel has NO SCRIPT (Fady 2026-08-27): the dots went with the swipe hint, and the
   gentle autoplay went with them, because the strip moving on its own contradicted the arrow asking
   the visitor to move it. It is a scroll-snap strip and nothing else. Do not put the timer back
   without putting the hint's fade back too. */
/* sticky call bar: hidden while the hero's CTA pair is on screen, slides in once it leaves */
(function(){var de=document.documentElement,act=document.querySelector('.hero .actions');
if(!document.querySelector('.callbar'))return;
if(!act||!('IntersectionObserver' in window)){de.classList.add('cb-on');return}
new IntersectionObserver(function(es){es.forEach(function(e){de.classList.toggle('cb-on',!e.isIntersecting)})},{threshold:0}).observe(act)})();
/* the cited fact: opens the source in place, so checking the claim never costs us the visitor */
(function(){var b=document.querySelector('[data-cite]'),p=document.getElementById('cite-pop'),bk=document.querySelector('[data-cite-back]');if(!b||!p||!bk)return;
var x=p.querySelector('[data-cite-close]');
function open(){p.hidden=false;bk.hidden=false;b.setAttribute('aria-expanded','true');document.documentElement.style.overflow='hidden';if(x)x.focus()}
function close(){p.hidden=true;bk.hidden=true;b.setAttribute('aria-expanded','false');document.documentElement.style.overflow='';b.focus()}
b.addEventListener('click',open);b.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '||e.key==='Spacebar'){e.preventDefault();open()}});bk.addEventListener('click',close);if(x)x.addEventListener('click',close);
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!p.hidden)close()});
p.addEventListener('keydown',function(e){if(e.key!=='Tab')return;var f=p.querySelectorAll('button,[href],[tabindex]:not([tabindex="-1"])');if(!f.length)return;var a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}});
})();
/* The swipe hint bows out once the visitor reaches the third photo (Fady 2026-08-27): by then the
   gesture has been understood and a permanent hint is just furniture. One passive scroll listener,
   removed the moment it fires, and the whole thing is a no-op on a desktop where .hero-car is
   display:none and never scrolls. */
(function(){var t=document.querySelector('.car-track'),h=document.querySelector('.car-hint');if(!t||!h)return;
var ss=t.querySelectorAll('.car-slide');if(ss.length<3)return;
function chk(){var step=ss[1].offsetLeft-ss[0].offsetLeft;if(step<=0)return;
if(t.scrollLeft>=step*1.5){h.classList.add('car-hint-off');t.removeEventListener('scroll',chk)}}
t.addEventListener('scroll',chk,{passive:true})})();
/* steps: the line fills and the numbers light up in sequence when the section arrives */
(function(){var st=document.querySelector('.steps');if(!st)return;
if(reduce||!('IntersectionObserver' in window)){st.classList.add('go');return}
new IntersectionObserver(function(es,ob){es.forEach(function(e){if(e.isIntersecting){st.classList.add('go');ob.disconnect()}})},{threshold:0.25}).observe(st)})();
/* FAQ, rebuilt 2026-08-27 (Fady: "jittery, not smooth at all"). One open at a time; a plain,
   fully working <details> list without JS.
   The rules that make it smooth, all learned from what was wrong before:
   - measure the target height AFTER cancelling whatever is running, never from scrollHeight while
     an animation is mid-flight (that is what made a fast second click stutter);
   - take the CURRENT rendered height as the start, so a reversal continues from where the panel
     actually is instead of snapping to 0 or to full height first;
   - the element stays [open] for the whole close and only unmounts on finish, while .is-open comes
     off immediately, so the chevron turns with the panel and not 300ms after it;
   - no input lock. Every click lands, and a running animation is simply replaced. */
(function(){var ds=[].slice.call(document.querySelectorAll('.faq details'));if(!ds.length)return;
var DUR=300,EASE='cubic-bezier(.22,1,.36,1)';
function run(d,want){var b=d.querySelector('.answer');
var from=d.open?b.getBoundingClientRect().height:0;
if(d._a){d._a.cancel();d._a=null}
d.open=true;d.classList.toggle('is-open',want);
var to=want?b.getBoundingClientRect().height:0;
if(reduce||!b.animate||from===to){d.open=want;return}
var a=b.animate([{height:from+'px',opacity:from?1:0},{height:to+'px',opacity:want?1:0}],{duration:DUR,easing:EASE});
d._a=a;
a.onfinish=function(){if(d._a===a)d._a=null;d.open=want};
a.oncancel=function(){if(d._a===a)d._a=null}}
ds.forEach(function(d){if(d.open)d.classList.add('is-open');
d.querySelector('summary').addEventListener('click',function(e){e.preventDefault();
if(d.open&&d.classList.contains('is-open')){run(d,false)}
else{ds.forEach(function(o){if(o!==d&&o.classList.contains('is-open'))run(o,false)});run(d,true)}})});
})();
/* click taxonomy shim: ready for the Ads tag day, zero requests today */
window.dataLayer=window.dataLayer||[];
document.addEventListener('click',function(e){var a=e.target.closest('a[data-cta]');if(!a)return;
window.dataLayer.push({event:a.dataset.cta.indexOf('whatsapp')>-1?'whatsapp_click':'call_click',cta:a.dataset.cta,lang:document.documentElement.lang.slice(0,2),ts:Date.now()});
},{passive:true});
})();`;

module.exports = { pageHtml, PAGE_JS, PHONE, WA, LANGS, TEL };
