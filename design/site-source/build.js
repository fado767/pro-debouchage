// Builds THE site (design v1, locked 2026-08-26) into ../../site-v1/ from template.js (markup), copy-fr/nl/en.js (copy),
// styles.css (design, INLINED into every <head>), cgv.js (general terms), the local legal.js
// (privacy pages, reused with the enterprise-number prefix fix) and assets/prepared/web/ (images).
// Run: node design/site-source/build.js     Output is generated: never edit site-v1/ by hand.
// ADS_TAG_ID=AW-... and/or GA4_ID=G-... build the consent + Google-tag layer (commands in ./README.md).
const fs = require('fs'), path = require('path');
const T = require('./template.js');
const COPY = { fr: require('./copy-fr.js'), nl: require('./copy-nl.js'), en: require('./copy-en.js') };
const CGV = require('./cgv.js');
// Privacy text is the v2 one (facts unchanged); the only edit: the enterprise number loses its
// wrong "BE " prefix (BE belongs to the VAT number, overnight legal research 2026-08-26).
const LEGAL_V2 = require('./legal.js'); // local since the 2026-08-26 lock-in; formerly ../canvas-v2/legal.js
const fixBce = s => s
  .replace(/Numéro d'entreprise BE 1027\.454\.187/g, `Numéro d'entreprise 1027.454.187`)
  .replace(/Ondernemingsnummer BE 1027\.454\.187/g, 'Ondernemingsnummer 1027.454.187')
  .replace(/(Company|Enterprise) number BE 1027\.454\.187/g, '$1 number 1027.454.187');
const LEGAL_TEXT = { fr: fixBce(LEGAL_V2.fr), nl: fixBce(LEGAL_V2.nl), en: fixBce(LEGAL_V2.en), COOKIES_TAG: LEGAL_V2.COOKIES_TAG };

const ROOT = path.resolve(__dirname, '..', '..');
const OUT = path.join(ROOT, 'site-v1');
const WEB = path.join(ROOT, 'assets', 'prepared', 'web');
const HOST = 'https://prodebouchage24.be';
const BUILD_YEAR = '2026';
// Since G5 (2026-08-27) the tag ids are baked in as DEFAULTS so a plain `node build.js` ships
// the live tagged site; a bare build can no longer silently drop the tags. The ids are public
// (visible in the page source), never secrets. TAGS_OFF=1 builds the clean zero-Google output.
const TAGS_OFF = process.env.TAGS_OFF === '1';
const ADS_TAG_ID = TAGS_OFF ? '' : (process.env.ADS_TAG_ID || 'AW-18413234511');
const ADS_CALL_LABEL = TAGS_OFF ? '' : (process.env.ADS_CALL_LABEL || '_diMCKD12OgcEM_SjsxE');
const ADS_WA_LABEL = TAGS_OFF ? '' : (process.env.ADS_WA_LABEL || 'XldOCKP12OgcEM_SjsxE');
// GA4_ID rides the SAME consent gate as ADS_TAG_ID (added 2026-08-27, tag round G5).
const GA4_ID = TAGS_OFF ? '' : (process.env.GA4_ID || 'G-S3SQ25WZMK');
// One switch for the whole tag layer: consent stub, banner, consent.js, footer credit, privacy
// cookie section, reopen link, Google CSP. TAGS_OFF=1 = none of it exists in the output.
const TAG_ON = !!(ADS_TAG_ID || GA4_ID);
const CONSENT_VER = '2026-08-26';

const rm = p => fs.rmSync(p, { recursive: true, force: true });
const mk = p => fs.mkdirSync(p, { recursive: true });
const cp = (a, b) => { mk(path.dirname(b)); fs.copyFileSync(a, b); };
const w = (rel, s) => { const p = path.join(OUT, rel); mk(path.dirname(p)); fs.writeFileSync(p, s, 'utf8'); };

mk(OUT); for (const e of fs.readdirSync(OUT)) rm(path.join(OUT, e));

// ---------- assets ----------
for (const f of ['archivo-var-latin.woff2', 'archivo-var-latin-ext.woff2', 'caveat-note.woff2']) cp(path.join(__dirname, f), path.join(OUT, 'assets', 'fonts', f));
// caveat-note.woff2 is Caveat (SIL Open Font License) SUBSET to the 15 glyphs the handwritten note
// on the photo story needs, 8KB instead of 75 for one decorative line. A letter outside that set
// renders in a system script face, silently, and only in the language nobody re-checked. So the
// build refuses it: change `baNote` and this throws with the character it cannot draw. To widen the
// set, re-subset (fonts.googleapis.com/css2?family=Caveat:wght@600&text=...) and update BOTH lists,
// here and the @font-face unicode-range in styles.css.
const NOTE_GLYPHS = ' 02DFKaeilmnort';
for (const [l] of T.LANGS) {
  const note = (COPY[l].baNote || []).join('');
  if (note.length < 2) throw new Error(`copy-${l}.js: baNote must be the two lines of the handwritten note.`);
  for (const ch of note) if (!NOTE_GLYPHS.includes(ch)) throw new Error(`copy-${l}.js baNote uses "${ch}", which is not in the subsetted Caveat (${NOTE_GLYPHS.trim()} and space). Re-subset the font or change the wording.`);
}
// The BOM strip is not cosmetic. This CSS is INLINED into <style>, where a leading U+FEFF is a
// stray token: the parser opens a bogus rule on it and swallows the FIRST real rule, which is the
// main Archivo @font-face. The page then falls back to Arial, which has no weight axis, so every
// weight from 600 up renders as the same faux bold. That is what made v3 look thin next to v2 for
// four review rounds (2026-08-26). A Windows editor can re-add the BOM at any save, so it is
// stripped here as well as in the file. Guarded by the assert below.
let css = fs.readFileSync(path.join(__dirname, 'styles.css'), 'utf8').replace(/^﻿/, '');
if (!/^\s*\/\*|^\s*@|^\s*[.#:a-zA-Z]/.test(css)) throw new Error('styles.css starts with an unexpected character; the first CSS rule would be swallowed.');
if (TAG_ON) css += `
/* consent card + reopen link (built only with the tag layer on) */
.linklike{background:none;border:0;padding:0;font:inherit;color:inherit;text-decoration:underline;cursor:pointer}
.consent{position:fixed;left:16px;right:16px;bottom:calc(var(--bar-h) + env(safe-area-inset-bottom) + 14px);z-index:290;background:#fff;color:var(--ink);border:1px solid rgba(16,42,74,.15);box-shadow:0 8px 30px rgba(16,42,74,.18);padding:16px;max-width:420px;margin-inline:auto}
@media (min-width:1000px){.consent{left:auto;right:24px;bottom:24px;margin:0}}
.consent h2{font-size:1.0625rem;margin:0 0 8px;text-transform:none;font-stretch:100%;letter-spacing:0}
.consent p{font-size:.9375rem;margin:0 0 12px}
.consent .c-btns{display:flex;gap:8px}
.consent .c-btns button{flex:1;font:inherit;font-weight:800;font-size:.9375rem;padding:10px 12px;cursor:pointer;border:2px solid var(--ink);background:#fff;color:var(--ink)}
`;

// THE CSS INTEGRITY CHECK. A stray "*/" or one unbalanced brace does not break the build and does
// not look wrong in the file: the browser's parser gives up at that point and silently drops EVERY
// RULE AFTER IT. On 2026-08-27 a rewritten comment left one line of prose outside its /* */ and the
// FAQ, the sticky call bar, the guarantee badge, the final call and the footer all shipped unstyled
// to the live site. A DOM measurement caught it; the build had said "site-v1 built". Now it cannot.
{
  let bare = "", i = 0, unclosed = false;
  while (i < css.length) {
    const a = css.indexOf("/*", i);
    if (a < 0) { bare += css.slice(i); break; }
    bare += css.slice(i, a);
    const b = css.indexOf("*/", a + 2);
    if (b < 0) { unclosed = true; break; }
    i = b + 2;
  }
  if (unclosed) throw new Error("styles.css: a /* comment that is never closed.");
  if (bare.includes("*/")) throw new Error("styles.css: a */ that closes nothing. Every rule after it is dropped by the browser.");
  let open = 0, close = 0;
  for (const ch of bare) { if (ch === "{") open++; else if (ch === "}") close++; }
  if (open !== close) throw new Error(`styles.css: ${open} opening braces against ${close} closing. Everything after the mismatch is dropped by the browser.`);
}

// consent.js: written only with a tag id (same proven machinery as v2, research/13). One gtag.js
// loader serves both destinations: the Ads tag (conversions) and the GA4 property (traffic).
if (TAG_ON) {
  const STR = {};
  for (const [l] of T.LANGS) STR[l] = { t: COPY[l].consentT, p: COPY[l].consentP, refuse: COPY[l].consentRefuse, accept: COPY[l].consentAccept };
  w('assets/js/consent.js', `// Generated by design/site-source/build.js. Do not edit here.
(function(){
var ID=${JSON.stringify(ADS_TAG_ID)},GA=${JSON.stringify(GA4_ID)},CALL=${JSON.stringify(ADS_CALL_LABEL)},WA=${JSON.stringify(ADS_WA_LABEL)};
var LOADER=ID||GA;
var KEY='pd_consent',VER=${JSON.stringify(CONSENT_VER)},DAYS=182;
var STR=${JSON.stringify(STR)};
var s=STR[(document.documentElement.lang||'fr').slice(0,2)]||STR.fr;
function read(){try{var r=JSON.parse(localStorage.getItem(KEY));if(!r||r.v!==VER)return null;if(Date.now()-r.t>DAYS*864e5){localStorage.removeItem(KEY);return null}return r}catch(e){return null}}
function save(ok){try{localStorage.setItem(KEY,JSON.stringify({ads:ok,v:VER,t:Date.now()}))}catch(e){}}
var loaded=false;
function enable(){if(loaded)return;loaded=true;
gtag('consent','update',{ad_storage:'granted',ad_user_data:'granted',analytics_storage:'granted'});
var sc=document.createElement('script');sc.async=true;sc.src='https://www.googletagmanager.com/gtag/js?id='+LOADER;document.head.appendChild(sc);
gtag('js',new Date());if(ID)gtag('config',ID);if(GA)gtag('config',GA);}
function wipe(){document.cookie.split(';').forEach(function(c){var n=c.split('=')[0].trim();if(!/^(_ga|_gcl)/.test(n))return;
['','domain='+location.hostname+';','domain=.'+location.hostname+';'].forEach(function(d){document.cookie=n+'=;path=/;'+d+'expires=Thu, 01 Jan 1970 00:00:00 GMT';});});}
var card=null;
function close(){if(card){card.remove();card=null}}
function show(){if(card)return;
card=document.createElement('div');card.className='consent';card.setAttribute('role','dialog');card.setAttribute('aria-label',s.t);
card.innerHTML='<h2>'+s.t+'</h2><p>'+s.p+'</p><div class="c-btns"><button type="button" data-c="0">'+s.refuse+'</button><button type="button" data-c="1">'+s.accept+'</button></div>';
card.addEventListener('click',function(e){var b=e.target.closest('button[data-c]');if(!b)return;var ok=b.dataset.c==='1';save(ok);close();if(ok)enable();else wipe();});
document.body.appendChild(card);}
document.addEventListener('click',function(e){
if(e.target.closest('[data-consent-open]')){show();return}
var a=e.target.closest('a[data-cta]');if(!a||!loaded)return;
var isWa=a.dataset.cta.indexOf('whatsapp')>-1;
gtag('event',isWa?'whatsapp_click':'call_click',{cta:a.dataset.cta});
var lb=isWa?WA:CALL;if(ID&&lb)gtag('event','conversion',{send_to:ID+'/'+lb});
});
var r=read();if(!r)show();else if(r.ads)enable();
})();
`);
}

// images: manifest key -> exported sizes in assets/prepared/web/img/
const IMGS = {
  'collage-van.webp':   { base: 'hero-van-wide', widths: [800, 1200, 1600], w: 1600, h: 900, sizes: '(min-width: 820px) 440px, 100vw' },
  'collage-job1.webp':  { base: 'hero-job-1', widths: [480, 800], w: 800, h: 1000, sizes: '(min-width: 820px) 200px, 78vw' },
  'collage-job2.webp':  { base: 'hero-job-2', widths: [480, 770], w: 770, h: 962, sizes: '(min-width: 820px) 200px, 78vw' },
  'job-wc.webp':     { base: 'job-wc', widths: [480, 800, 1200], w: 1200, h: 1500, sizes: '(min-width: 1000px) 360px, (min-width: 700px) 33vw, 78vw' },
  'machine.webp':    { base: 'machine-haute-pression', widths: [480, 800, 1200], w: 1200, h: 1500, sizes: '(min-width: 1000px) 360px, (min-width: 700px) 33vw, 78vw' },
  'camera.webp':     { base: 'camera-ecran', widths: [480, 800, 1200], w: 1200, h: 1500, sizes: '(min-width: 1000px) 360px, (min-width: 700px) 33vw, 78vw' },
  'chambre.webp':    { base: 'chambre-visite-jardin', widths: [480, 800], w: 800, h: 1000, sizes: '(min-width: 1000px) 360px, (min-width: 700px) 33vw, 78vw' },
  'siphon.webp':     { base: 'camera-siphon', widths: [480, 800], w: 800, h: 1000, sizes: '(min-width: 820px) 200px, 78vw' },
  'allee.webp':      { base: 'allee-haute-pression', widths: [480, 800, 1200], w: 1200, h: 1200, sizes: '(min-width: 1000px) 360px, (min-width: 700px) 33vw, 78vw' },
  'moniteur.webp':   { base: 'camera-moniteur-tenue', widths: [480, 800], w: 800, h: 1000, sizes: '(min-width: 1000px) 360px, (min-width: 700px) 33vw, 78vw' },
  'tick-drain.webp': { base: 'hero-job-drain', widths: [480, 800], w: 800, h: 1066, sizes: '190px' },
  'tick-van.webp':   { base: 'van-photo', widths: [800, 1200], w: 1200, h: 892, sizes: '340px' },
  'car-van.webp':    { base: 'van-garden-45', widths: [480, 800], w: 800, h: 1000, sizes: '78vw' },
  // v3 additions (generated 2026-08-26 from our own reference photos, plates blurred):
  'van-street.webp': { base: 'van-street', widths: [480, 800, 1200, 1600], w: 1600, h: 1067, sizes: '(min-width: 1000px) 620px, 100vw' },
  'ba-before.webp':  { base: 'ba-before', widths: [480, 800], w: 800, h: 1000, sizes: '(min-width: 56rem) 340px, 92vw' },
  'ba-after.webp':   { base: 'ba-after', widths: [480, 800], w: 800, h: 1000, sizes: '(min-width: 56rem) 340px, 92vw' },
  // Fady's brush arrows, drawn in Figma and exported 2026-08-26. alpha:true swaps the JPEG
  // fallback for a PNG, because a JPEG has no transparency and would ship a white box.
  'arrow-curve.png': { base: 'arrow-curve', widths: [273], w: 273, h: 185, sizes: '(min-width: 56rem) 10vw, 24vw', alpha: true },
  'arrow-zig.png':   { base: 'arrow-zig', widths: [267], w: 267, h: 138, sizes: '(min-width: 56rem) 10vw, 24vw', alpha: true },
  'arrow-hook.png':  { base: 'arrow-hook', widths: [157], w: 157, h: 271, sizes: '(min-width: 56rem) 6vw, 15vw', alpha: true },
};
for (const k in IMGS) {
  const m = IMGS[k];
  for (const wd of m.widths) for (const ext of ['avif', 'webp']) cp(path.join(WEB, 'img', `${m.base}-${wd}.${ext}`), path.join(OUT, 'assets', 'img', `${m.base}-${wd}.${ext}`));
  const last = m.widths[m.widths.length - 1];
  const fb = m.alpha ? 'png' : 'jpg';
  cp(path.join(WEB, 'img', `${m.base}-${last}.${fb}`), path.join(OUT, 'assets', 'img', `${m.base}-${last}.${fb}`));
}
for (const f of ['logo-icon.svg', 'og-banner.jpg', 'icon-512.png', 'icon-512-maskable.png']) cp(path.join(WEB, 'img', f), path.join(OUT, 'assets', 'img', f));
cp(path.join(WEB, 'img', 'favicon.svg'), path.join(OUT, 'favicon.svg'));
cp(path.join(WEB, 'img', 'apple-touch-icon-180.png'), path.join(OUT, 'apple-touch-icon.png'));

function IMG(name, alt, w0, h0, extra) {
  if (name === 'logo-icon.svg') return `<img src="/assets/img/logo-icon.svg" width="816" height="499" alt="${alt}"${extra ? ' ' + extra : ''}>`;
  const m = IMGS[name]; if (!m) throw new Error('unknown image ' + name);
  const set = ext => m.widths.map(wd => `/assets/img/${m.base}-${wd}.${ext} ${wd}w`).join(', ');
  const last = m.widths[m.widths.length - 1];
  return `<picture><source type="image/avif" srcset="${set('avif')}" sizes="${m.sizes}"><source type="image/webp" srcset="${set('webp')}" sizes="${m.sizes}"><img src="/assets/img/${m.base}-${last}.${m.alpha ? 'png' : 'jpg'}" width="${m.w}" height="${m.h}" alt="${alt}"${extra ? ' ' + extra : ''}></picture>`;
}

// ---------- head ----------
function head(lang, paths, m, opts = {}) {
  const self = paths[lang];
  const alts = Object.entries(paths).map(([l, p]) => `<link rel="alternate" hreflang="${l}-BE" href="${HOST}${p}">`).join('\n');
  return `<!DOCTYPE html>
<!-- Generated by design/site-source/build.js. Do not edit by hand: edit the sources in design/site-source/ and rebuild. -->
<html lang="${lang}-BE" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="format-detection" content="telephone=no">
<script>document.documentElement.classList.remove('no-js');document.documentElement.classList.add('js');${TAG_ON ? `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});` : ''}</script>
<title>${m.title}</title>
<meta name="description" content="${m.desc}">
<link rel="canonical" href="${HOST}${self}">
${alts}
<link rel="alternate" hreflang="x-default" href="${HOST}${paths.fr}">
<meta name="robots" content="${opts.noindex ? 'noindex, follow' : 'index, follow'}">
<meta name="theme-color" content="#102A4A">
<meta property="og:type" content="website">
<meta property="og:locale" content="${m.locale}">
<meta property="og:url" content="${HOST}${self}">
<meta property="og:site_name" content="Pro Débouchage">
<meta property="og:title" content="${m.ogt}">
<meta property="og:description" content="${m.ogd}">
<meta property="og:image" content="${HOST}/assets/img/og-banner.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${m.ogAlt}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="preload" as="font" type="font/woff2" href="/assets/fonts/archivo-var-latin.woff2" crossorigin>
<style>${css}</style>
</head>
<body>
`;
}

const TAIL = (extra = '') => `
<script>${T.PAGE_JS}</script>${TAG_ON ? `
<script src="/assets/js/consent.js" defer></script>` : ''}${extra}
</body>
</html>
`;

// ---------- JSON-LD ----------
const strip = s => s.replace(/ /g, ' ').replace(/&#8239;/g, ' ').replace(/<[^>]+>/g, '');
function jsonld(c, lang) {
  const towns = c.towns.map(t => ({ '@type': 'City', name: t }));
  const faq = c.faq.map(q => ({ '@type': 'Question', name: strip(q[0]), acceptedAnswer: { '@type': 'Answer', text: strip(q[1]) } }));
  const data = { '@context': 'https://schema.org', '@graph': [
    { '@type': ['Plumber', 'EmergencyService'], '@id': HOST + '/#business', name: 'Pro Débouchage', legalName: 'PRO DEBOUCHAGE SRL', url: HOST + '/' + lang + '/', telephone: '+32480649649', email: 'info@prodebouchage24.be',
      image: HOST + '/assets/img/og-banner.jpg', identifier: '1027.454.187', priceRange: '€€', currenciesAccepted: 'EUR',
      address: { '@type': 'PostalAddress', streetAddress: 'Guldenschaapstraat 6', postalCode: '1800', addressLocality: 'Vilvoorde', addressCountry: 'BE' },
      openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '00:00', closes: '23:59' }],
      areaServed: towns,
      availableLanguage: [{ '@type': 'Language', name: 'French', alternateName: 'fr' }, { '@type': 'Language', name: 'Dutch', alternateName: 'nl' }, { '@type': 'Language', name: 'English', alternateName: 'en' }] },
    { '@type': 'FAQPage', '@id': HOST + '/' + lang + '/#faq', inLanguage: lang + '-BE', mainEntity: faq },
  ] };
  return `<script type="application/ld+json">\n${JSON.stringify(data, null, 1)}\n</script>`;
}

// ---------- pages ----------
const LANDING = {}; for (const [l] of T.LANGS) LANDING[l] = '/' + l + '/';
const LEGAL_PATH = { fr: '/fr/confidentialite', nl: '/nl/privacy', en: '/en/privacy' };
const CGV_PATH = { fr: '/fr/conditions-generales', nl: '/nl/algemene-voorwaarden', en: '/en/terms' };
const shell = (c, lang) => T.pageHtml(c, { img: IMG, privacyHref: LEGAL_PATH[lang], cgvHref: CGV_PATH[lang], adsTag: TAG_ON });
function landing(c, lang) {
  const { body } = shell(c, lang);
  return head(lang, LANDING, c.meta) + body + '\n' + jsonld(c, lang) + TAIL();
}
for (const [l] of T.LANGS) w(l + '/index.html', landing(COPY[l], l));

// legal + cgv pages: the document <main> under the v3 shell (header, footer, call bar).
function docShell(lang, paths, main, title, desc) {
  const c = COPY[lang];
  const { body } = shell(c, lang);
  // ANCHOR EVERY ONE OF THESE ON ITS OWN CLASS, AND CHECK WHAT CAME BACK. Taking the FIRST footer
  // element in the page gives Paolo's review-card footer, not the site one, because the featured
  // review card ships a <footer class="feat-who"> above it. The six legal and CGV pages went live
  // on 2026-08-27 carrying a stray review credit where the legal mentions, the enterprise number,
  // the privacy and terms links and the credit line belong; and because the credit line is what
  // carries <span id="y">, the page script threw on its very first statement, so NOTHING ran on
  // those pages and the sticky call bar stayed off screen for good. Found by reading the console
  // on the CGV page. The asserts are the real fix: slicing markup out is fine, slicing it out
  // without checking what you got is what shipped this.
  const grab = (openTag, closeTag, must, what) => {
    const from = body.indexOf(openTag);
    if (from < 0) throw new Error(`docShell: no ${what} (${openTag}) in the landing body.`);
    const to = body.indexOf(closeTag, from);
    if (to < 0) throw new Error(`docShell: the ${what} is never closed by ${closeTag}.`);
    const out = body.slice(from, to + closeTag.length);
    for (const needle of must) if (!out.includes(needle)) throw new Error(`docShell: the ${what} it took has no "${needle}" in it, so it matched the wrong element or was cut short.`);
    return out;
  };
  let header = grab('<header class="site-header"', '</header>', ['langswitch', 'header-call'], 'site header');
  for (const [l, p] of Object.entries(paths)) header = header.replace(`href="/${l}/" lang="${l}"`, `href="${p}" lang="${l}"`);
  const footer = grab('<footer class="site-footer"', '</footer>', ['class="credit"', 'id="y"', 'foot-links'], 'site footer');
  const bar = grab('<div class="callbar"', '</div>', ['cb-call', 'cb-wa'], 'sticky call bar');
  const m = { title, desc, ogt: title, ogd: desc, locale: c.meta.locale, ogAlt: c.meta.ogAlt };
  return head(lang, paths, m) + `<a class="skip" href="#contenu">${c.skip}</a>\n` + header + '\n' + main + '\n' + footer + '\n' + bar + TAIL();
}
// privacy (v2 text under the v3 shell; give its <main> the skip-link id)
const LEGAL_FILE = { fr: 'fr/confidentialite.html', nl: 'nl/privacy.html', en: 'en/privacy.html' };
const LEGAL_META = {
  fr: ['Politique de vie privée | Pro Débouchage', 'Politique de vie privée de PRO DEBOUCHAGE SRL. Quelles données nous traitons, pourquoi, combien de temps, et vos droits.'],
  nl: ['Privacybeleid | Pro Débouchage', 'Privacybeleid van PRO DEBOUCHAGE BV. Welke gegevens wij verwerken, waarom, hoelang, en uw rechten.'],
  en: ['Privacy policy | Pro Débouchage', 'Privacy policy of PRO DEBOUCHAGE SRL. What data we handle, why, for how long, and your rights.'],
};
for (const [l] of T.LANGS) {
  const main = (TAG_ON
    ? LEGAL_TEXT[l].replace(/<!--cookies-->[\s\S]*?<!--\/cookies-->/, LEGAL_TEXT.COOKIES_TAG[l])
    : LEGAL_TEXT[l].replace('<!--cookies-->\n', '').replace('\n<!--/cookies-->', ''))
    .replace('<main>', '<main id="contenu">');
  w(LEGAL_FILE[l], docShell(l, LEGAL_PATH, main, LEGAL_META[l][0], LEGAL_META[l][1]));
}
// CGV
const CGV_FILE = { fr: 'fr/conditions-generales.html', nl: 'nl/algemene-voorwaarden.html', en: 'en/terms.html' };
const CGV_META = {
  fr: ['Conditions générales | Pro Débouchage', 'Les conditions générales de PRO DEBOUCHAGE SRL : prix confirmé avant de commencer, suppléments annoncés, garantie 30 jours, vos droits.'],
  nl: ['Algemene voorwaarden | Pro Débouchage', 'De algemene voorwaarden van PRO DEBOUCHAGE BV: prijs bevestigd voor wij beginnen, aangekondigde toeslagen, 30 dagen garantie, uw rechten.'],
  en: ['Terms and conditions | Pro Débouchage', 'Terms and conditions of PRO DEBOUCHAGE SRL: price confirmed before we start, published surcharges, 30-day guarantee, your rights.'],
};
for (const [l] of T.LANGS) w(CGV_FILE[l], docShell(l, CGV_PATH, CGV[l], CGV_META[l][0], CGV_META[l][1]));

// root chooser
const CHOOSE = { fr: ['Français', 'Débouchage 24h/24'], nl: ['Nederlands', 'Ontstopping 24/7'], en: ['English', 'Drain unblocking 24/7'] };
const chooserBtns = T.LANGS.map(([l]) => `<a class="btn btn-ghost" href="/${l}/" lang="${l}" hreflang="${l}-BE">${CHOOSE[l][0]} &rarr; ${CHOOSE[l][1]}</a>`).join('\n');
const chooserTitle = T.LANGS.map(([l]) => CHOOSE[l][0]).join(' &middot; ');
w('index.html', head('fr', LANDING, { title: 'Pro Débouchage | ' + chooserTitle.replace(/&middot;/g, '·'), desc: 'Débouchage 24h/24 autour de Bruxelles. Choisissez votre langue. Ontstopping 24/7 rond Brussel. Kies uw taal. Drain unblocking around Brussels, 24/7. 0480 649 649.', ogt: 'Pro Débouchage', ogd: 'Débouchage 24h/24 autour de Bruxelles. Ontstopping 24/7 rond Brussel. Drain unblocking around Brussels, 24/7.', locale: 'fr_BE', ogAlt: COPY.fr.meta.ogAlt }, { noindex: true }) + `
<main class="chooser"><div class="box">
${IMG('logo-icon.svg', 'Pro Débouchage', 320, 200, '')}
<h1 style="font-size:1.5rem">${chooserTitle}</h1>
<p class="lead" style="font-size:1rem">Choisissez votre langue. Kies uw taal. Choose your language.</p>
${chooserBtns}
<p><a class="btn btn-call" href="tel:+32480649649" data-cta="chooser-call">${T.PHONE}0480 649 649</a></p>
<p style="font-size:0.875rem;color:var(--muted);margin-bottom:0">PRO DEBOUCHAGE SRL, Guldenschaapstraat 6, 1800 Vilvoorde. 1027.454.187.</p>
</div></main>
<span id="y" hidden>${BUILD_YEAR}</span>
<script>document.getElementById('y').textContent=new Date().getFullYear();</script>
</body>
</html>
`);

// 404, trilingual
const NOTFOUND = {
  fr: [`Cette page n'existe pas.`, 'Mais nous, oui.', 'Appeler 0480 649 649', `Retour à la page d'accueil`],
  nl: ['Deze pagina bestaat niet.', 'Wij wel.', 'Bel 0480 649 649', 'Terug naar de startpagina'],
  en: ['This page does not exist.', 'We do.', 'Call 0480 649 649', 'Back to the home page'],
};
const nf = T.LANGS.map(([l], i) => `${i ? '<hr class="rule" style="margin:24px auto">\n' : ''}<h${i ? 2 : 1} style="font-size:${i ? '1.4rem' : '1.6rem'}" lang="${l}">${NOTFOUND[l][0]}</h${i ? 2 : 1}>
<p class="lead" lang="${l}">${NOTFOUND[l][1]}</p>
<p><a class="btn btn-call" href="tel:+32480649649" data-cta="404-call-${l}" lang="${l}">${T.PHONE}${NOTFOUND[l][2]}</a></p>
<p><a href="/${l}/" lang="${l}">${NOTFOUND[l][3]}</a></p>`).join('\n');
w('404.html', head('fr', LANDING, { title: 'Page introuvable | Pro Débouchage', desc: `Cette page n'existe pas. Appelez le 0480 649 649.`, ogt: 'Pro Débouchage', ogd: 'Débouchage 24h/24 autour de Bruxelles.', locale: 'fr_BE', ogAlt: COPY.fr.meta.ogAlt }, { noindex: true }) + `
<main class="chooser"><div class="box">
${IMG('logo-icon.svg', 'Pro Débouchage', 320, 200, '')}
${nf}
</div></main>
<span id="y" hidden>${BUILD_YEAR}</span>
<script>document.getElementById('y').textContent=new Date().getFullYear();</script>
</body>
</html>
`);

// static files
w('robots.txt', `# Pro Débouchage, prodebouchage24.be\nUser-agent: *\nAllow: /\n\nSitemap: ${HOST}/sitemap.xml\n`);
const today = '2026-08-26';
const url = (loc, paths) => `  <url>\n    <loc>${HOST}${loc}</loc>\n    <lastmod>${today}</lastmod>\n` +
  Object.entries(paths).map(([l, p]) => `    <xhtml:link rel="alternate" hreflang="${l}-BE" href="${HOST}${p}"/>\n`).join('') +
  `    <xhtml:link rel="alternate" hreflang="x-default" href="${HOST}${paths.fr}"/>\n  </url>\n`;
const urls = Object.values(LANDING).map(p => url(p, LANDING)).join('')
  + Object.values(LEGAL_PATH).map(p => url(p, LEGAL_PATH)).join('')
  + Object.values(CGV_PATH).map(p => url(p, CGV_PATH)).join('');
w('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}</urlset>\n`);
w('site.webmanifest', JSON.stringify({ name: 'Pro Débouchage', short_name: 'Pro Débouchage', start_url: '/fr/', display: 'browser', background_color: '#F6F3EE', theme_color: '#102A4A', icons: [{ src: '/assets/img/icon-512.png', sizes: '512x512', type: 'image/png' }, { src: '/assets/img/icon-512-maskable.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }] }, null, 2));

const CSP_DAY1 = `Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self'; font-src 'self'; connect-src 'self'; frame-src 'none'; media-src 'self'; manifest-src 'self'; object-src 'none'; base-uri 'self'; form-action 'none'; frame-ancestors 'none'; upgrade-insecure-requests`;
const CSP_TAG = `Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://*.googletagmanager.com https://*.googleadservices.com https://googleads.g.doubleclick.net https://pagead2.googlesyndication.com; style-src 'self' 'unsafe-inline'; img-src 'self' https://*.googletagmanager.com https://*.google-analytics.com https://*.googleadservices.com https://*.doubleclick.net https://*.google.com https://*.google.be https://*.google.nl https://*.google.fr; font-src 'self'; connect-src 'self' https://*.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://*.googleadservices.com https://*.doubleclick.net https://pagead2.googlesyndication.com https://*.google.com https://*.google.be https://*.google.nl https://*.google.fr; frame-src https://td.doubleclick.net https://www.googletagmanager.com; media-src 'self'; manifest-src 'self'; object-src 'none'; base-uri 'self'; form-action 'none'; frame-ancestors 'none'; upgrade-insecure-requests`;
w('_headers', `/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()
  ${TAG_ON ? CSP_TAG : CSP_DAY1}

# Preview hosts only: never index ANY *.pages.dev host. Written with placeholders, not with the
# project name, so moving the preview to another Pages project cannot silently make it indexable
# (2026-08-26: the old alias broke and the project had to be swapped).
https://:project.pages.dev/*
  X-Robots-Tag: noindex
https://:version.:project.pages.dev/*
  X-Robots-Tag: noindex

/assets/fonts/*
  Cache-Control: public, max-age=31536000, immutable
/assets/img/*
  Cache-Control: public, max-age=86400
/favicon.svg
  Cache-Control: public, max-age=604800
/apple-touch-icon.png
  Cache-Control: public, max-age=604800
/site.webmanifest
  Cache-Control: public, max-age=604800
${TAG_ON ? `/assets/js/consent.js
  Cache-Control: public, max-age=3600
` : ''}`);

// The placeholder-review tripwire retired 2026-08-27: the invented cards are deleted from the copy
// files and Paolo's real review ships as `featured` (DECISIONS). `reviews` is the parked grid and
// may only ever be refilled with real customers' words, so a non-empty array is no longer a fault.
const avatarPh = Object.keys(COPY).filter(l => fs.readFileSync(path.join(OUT, l, 'index.html'), 'utf8').includes('data-placeholder'));
if (avatarPh.length) console.warn('WARNING: the Afrem avatar is still the monogram placeholder in /' + avatarPh.join('/, /') + '/. Roro was asked for a face photo (Fady, 2026-08-26); until it lands the bubble must NOT carry an invented face for a real person (rule 5). Swap the span for IMG() in template.js and drop data-placeholder.');
console.log('site-v1 built');
