// v3 page template: ONE markup builder for the three languages. Copy lives in copy-fr/nl/en.js,
// design in styles.css, assembly in build.js. Output is generated into site-v3/, never edited there.
const TEL = 'tel:+32480649649';
const LANGS = [['fr', 'FR', 'Français'], ['nl', 'NL', 'Nederlands'], ['en', 'EN', 'English']];

const PHONE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8z"></path></svg>';
const WA = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 12 12 0 0 0 4.6 4c1.7.7 2.3.8 3.2.7a2.7 2.7 0 0 0 1.8-1.3c.2-.6.2-1.1.2-1.2s-.3-.3-.5-.4z"></path></svg>';
const STAR = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z"></path></svg>';
const ARROWS = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.6 7.4 4 12l4.6 4.6 1.4-1.4L6.8 12l3.2-3.2zM15.4 7.4 14 8.8l3.2 3.2-3.2 3.2 1.4 1.4L20 12z"></path></svg>';
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
  const tickItem = (t, eager) => `<div class="tick-item">${IMG(t[0], t[1], t[2], t[3], eager ? 'decoding="async"' : 'loading="lazy" decoding="async"')}</div>`;
  const tickSet = c.ticker.map((t, i) => tickItem(t, i < 3)).join('');
  const tickSetLazy = c.ticker.map(t => tickItem(t, false)).join('');
  const tick = `<div class="ticker"><div class="tick-row"><div class="tick-set">${tickSet}</div><div class="tick-set" aria-hidden="true">${tickSetLazy}</div></div></div>`;
  const car = `<div class="hero-car" role="group" aria-label="${c.carAria}"><div class="car-track">${c.carousel.map((t, i) => `<div class="car-slide">${IMG(t[0], t[1], t[2], t[3], i === 0 ? 'decoding="async"' : 'loading="lazy" decoding="async"')}</div>`).join('')}</div><div class="car-dotwrap"><div class="car-dots" aria-hidden="true">${c.carousel.map((_, i) => `<span class="car-dot${i === 0 ? ' on' : ''}"></span>`).join('')}</div></div></div>`;
  const hero = `<section class="hero"><div class="wrap"><p class="eyebrow">${c.eyebrow}</p><div class="hero-grid"><div>${h1}</div><div><p class="sub">${c.sub}</p></div></div><div class="actions">${callBtn(c.callMain, 'hero-call')}${waBtn(c.waBtn, 'hero-whatsapp')}</div><p class="under-btn">${c.under}</p></div>${tick}${car}</section>`;

  // Trust: CSS marquee on desktop (clone aria-hidden, reverse direction), static list on mobile.
  const trustUl = `<ul>${c.trust.map(t => `<li>${t}</li>`).join('')}</ul>`;
  const trust = `<section class="trust trust-t" aria-label="Engagements"><div class="tick-row"><div class="tick-set">${trustUl}</div><div class="tick-set" aria-hidden="true">${trustUl}</div></div></section><section class="trust trust-s" aria-label="Engagements"><div class="wrap">${trustUl}</div></section>`;

  const services = sec('s-card', c.servK, c.servH, `<ol class="servlist">${c.services.map((s, i) => `<li><h3>${s[0]}</h3><p>${s[1]}</p><a class="link-call" href="${TEL}" data-cta="service-${i + 1}-call">${c.servLink}</a></li>`).join('')}</ol>`);

  const steps = sec('s-paper', c.stepK, c.stepH, `<div class="steps">${c.steps.map(s => `<div class="step"><div class="n" aria-hidden="true"></div><div><h3>${s[0]}</h3><p>${s[1]}</p></div></div>`).join('')}</div>`);

  // Guarantee seal (spinning word ring + centered "1").
  const ringTxt = `${c.guarRing.trim()} · ${c.guarRing.trim()} · ${c.guarRing.trim()} ·&#160;`;
  const seal = (id) => `<span class="guar-spin" aria-hidden="true"><svg viewBox="0 0 100 100" focusable="false"><defs><path id="${id}" d="M50,50 m0,-38 a38,38 0 1,1 -0.02,0 z"/></defs><text class="guar-ring-t"><textPath href="#${id}" textLength="238.7" lengthAdjust="spacing">${ringTxt}</textPath></text></svg></span><svg class="guar-core" viewBox="0 0 100 100" aria-hidden="true" focusable="false"><text class="guar-one" x="50" y="63">1</text></svg>`;

  const prices = sec('s-card', c.priceK, c.priceH, `<p class="lead">${c.priceIntro}</p><ul class="chips-inc">${c.included.map(t => `<li>${t}</li>`).join('')}</ul><ol class="pricelist">${c.prices.map((p, i) => `<li class="rv"><a class="p-row" href="${TEL}" data-cta="price-${i + 1}-call" aria-label="${p[0]}, ${p[1]}, ${c.priceBtn}"><span class="p-name">${p[0]}</span><span class="p-amt tnum">${p[1]}</span></a></li>`).join('')}</ol><p class="p-terms">${c.terms}</p><div class="p-other rv"><div><h3>${c.p4t}</h3><p>${c.p4}</p></div>${callBtn(c.p4b, 'price-other-call')}</div><aside class="guar rv"><span class="guar-badge" aria-hidden="true">${seal('guar-ring-b')}</span><div><h3>${c.guarH}</h3><p>${c.guarP}</p></div></aside><p class="promise"><span class="hl">${c.promise}</span></p>`, ' id="prix"');

  // Before / after slider: real range input under the pointer, clip-path on the top image.
  const ba = sec('s-paper', c.baK, c.baH, `<div class="ba-grid"><div><p class="lead">${c.baIntro}</p><p class="ba-cap">${c.baCaption}</p></div><figure class="ba rv" data-ba><div class="ba-stage">${IMG('ba-after.webp', c.baAlt.after, 800, 1000, 'loading="lazy" decoding="async"')}<div class="ba-top">${IMG('ba-before.webp', c.baAlt.before, 800, 1000, 'loading="lazy" decoding="async"')}</div><span class="ba-label ba-label-l">${c.baBefore}</span><span class="ba-label ba-label-r">${c.baAfter}</span><span class="ba-handle" aria-hidden="true">${ARROWS}</span><input class="ba-range" type="range" min="0" max="100" value="50" step="1" aria-label="${c.baAria}"></div></figure></div>`);

  const scam = `<section class="s-ink"><div class="wrap"><p class="kicker">${c.scamK}</p><h2>${c.scamH}</h2><hr class="rule"><div class="scam-cols"><div><p class="lead">${c.scamI}</p><ul class="scam-list">${c.scam.map(s => `<li>${s}</li>`).join('')}</ul></div><div><h3 class="scam-h3">${c.usH}</h3><ul class="us-list">${c.us.map(s => `<li>${s}</li>`).join('')}</ul></div></div>${callBtn(c.scamB, 'scam-call')}</div></section>`;

  const who = sec('s-card', c.whoK, c.whoH, `<p class="lead">${c.whoT}</p><div class="split"><figure class="rv">${IMG('van-street.webp', c.vanAlt, 1600, 1067, 'loading="lazy" decoding="async"')}<figcaption>${c.vanCap}</figcaption></figure><div class="blocks">${c.whoBlocks.map(b => `<h3>${b[0]}</h3><p>${b[1]}</p>`).join('')}</div></div>`);

  const mat = sec('s-paper', c.matK, c.matH, `<p class="lead">${c.matT}</p><div class="tiles tiles-3">${c.mat.map((m, i) => `<figure class="tile rv">${IMG(m[0], m[1], 480, 600, 'loading="lazy" decoding="async"')}<span class="tile-t">${m[2]}</span><figcaption>${m[3]}</figcaption></figure>`).join('')}</div>`);

  const socialProof = c.reviews.length
    ? `<div class="reviews">${c.reviews.map(r => `<article class="review-card rv" data-placeholder="true"><div class="who"><div class="ini" aria-hidden="true">${r[0][0]}</div><div class="name">${r[0]}</div></div>${stars(r[1])}<p>${r[2]}</p></article>`).join('')}</div><p class="ask">${c.askLine}</p>`
    : `<article class="honest-card rv"><h3>${c.honestT}</h3><p>${c.honestP}</p><ul>${c.honestL.map(t => `<li>${t}</li>`).join('')}</ul><p class="ask">${c.askLine}</p></article>`;
  const proof = sec('s-card', c.proofK, c.proofH, `<p class="lead">${c.honest}</p><div class="tiles tiles-3">${c.tiles.map(t => `<figure class="tile rv">${IMG(t[0], t[1], 480, 600, 'loading="lazy" decoding="async"')}<figcaption>${t[2]}</figcaption></figure>`).join('')}</div><div style="height:34px"></div>${socialProof}`);

  const segs = sec('s-paper', c.segK, c.segH, `<div class="segs">${c.segs.map(s => `<div class="seg"><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join('')}</div>`);

  const zone = sec('s-card', c.zoneK, c.zoneH, `<p class="lead">${c.zoneT}</p><ul class="towns">${c.towns.map(t => `<li>${t}</li>`).join('')}</ul><p><strong>${c.zoneC}</strong></p><p><a class="link-call" href="${TEL}" data-cta="zone-call">${c.zoneL}</a></p>`, ' id="zone"');

  // Exclusive behavior and the fluid open/close live in PAGE_JS (WAAPI); without JS these are
  // plain independent details, fully functional.
  const faq = sec('s-paper', c.faqK, c.faqH, `<div class="faq">${c.faq.map((q, i) => `<details${i === 0 ? ' open' : ''}><summary>${q[0]}</summary><div class="answer"><p>${q[1]}</p></div></details>`).join('')}</div>`);

  const finalcall = `<section class="s-ink finalcall"><div class="wrap"><h2>${c.finalH}</h2><a class="bignum tnum" href="${TEL}" data-cta="final-call">0480 649 649</a><div class="actions">${callBtn(c.finalB, 'final-call-btn')}${waBtn(c.finalWa, 'final-whatsapp')}</div><p class="hours">${c.finalL}</p></div></section>`;

  const footer = `<footer class="site-footer"><div class="wrap"><div class="cols"><div><span class="logo-plate">${IMG('logo-icon.svg', 'Pro Débouchage', 320, 200, 'loading="lazy"')}</span><p>${c.footD}</p><p><a class="foot-tel" href="${TEL}" data-cta="footer-call">0480 649 649</a><br><a href="mailto:info@prodebouchage24.be">info@prodebouchage24.be</a></p></div><div class="legal"><h2>${c.legalT}</h2><p>${c.legal.join('<br>')}</p><p>${c.vat}</p><div class="foot-links"><a href="${opts.privacyHref || '#'}">${c.privacy}</a><a href="${opts.cgvHref || '#'}">${c.cgvLabel}</a>${others.map(([d, , full]) => `<a href="/${d}/" lang="${d}" hreflang="${d}-BE">${full}</a>`).join('')}${opts.adsTag ? `<button type="button" class="linklike" data-consent-open>${c.consentLink}</button>` : ''}</div></div></div><p class="credit">&copy; <span id="y">2026</span> ${opts.adsTag ? c.creditTag : c.credit}</p></div></footer>`;

  const bar = `<div class="callbar" role="region" aria-label="${c.callHeader}"><a class="cb-call" href="${TEL}" data-cta="sticky-call">${PHONE}${c.callBar}</a><a class="cb-wa" href="${c.wa}" rel="noopener" data-cta="sticky-whatsapp" aria-label="${c.waBar}">${WA}</a></div>`;

  // Floating guarantee badge (v2's, ported on Fady's ask 2026-08-26): click opens the popover, any
  // close fades it away for the visit, it hides while the band above is on screen (JS in PAGE_JS).
  const popP = c.guarP.split('. ')[0] + '.'; // the popover keeps only the promise sentence (v2 hierarchy)
  const fab = `<div class="guar-float"><button type="button" class="guar-fab" data-guar-toggle aria-expanded="false" aria-controls="guar-pop">${seal('guar-ring')}<span class="sr-only">${c.guarH}</span></button><div class="guar-pop" id="guar-pop" hidden><h3>${c.guarH}</h3><p>${popP}</p></div></div>`;

  const body = `<a class="skip" href="#contenu">${c.skip}</a>
${header}
<main id="contenu">
${hero}
${trust}
${services}
${steps}
${prices}
${ba}
${scam}
${who}
${mat}
${proof}
${segs}
${zone}
${faq}
${finalcall}
</main>
${footer}
${bar}
${fab}`;
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
/* floating guarantee badge: v2 behavior (open on click; any close fades it for the visit; hidden
   while the guarantee band is on screen, back on scroll-away) */
function guarBye(){var w=document.querySelector('.guar-float');if(!w)return;var pop=document.getElementById('guar-pop');pop.setAttribute('hidden','');w.querySelector('[data-guar-toggle]').setAttribute('aria-expanded','false');w.classList.add('guar-bye')}
document.addEventListener('click',function(e){var pop=document.getElementById('guar-pop');if(!pop)return;var btn=document.querySelector('[data-guar-toggle]');if(e.target.closest('[data-guar-toggle]')){if(pop.hasAttribute('hidden')){pop.removeAttribute('hidden');btn.setAttribute('aria-expanded','true')}else{guarBye()}}else if(!pop.hasAttribute('hidden')&&!e.target.closest('.guar-float')){guarBye()}});
document.addEventListener('keydown',function(e){var pop=document.getElementById('guar-pop');if(e.key==='Escape'&&pop&&!pop.hasAttribute('hidden')){guarBye()}});
(function(){var band=document.querySelector('aside.guar');var w=document.querySelector('.guar-float');if(!band||!w||!('IntersectionObserver' in window))return;new IntersectionObserver(function(es){es.forEach(function(en){var pop=document.getElementById('guar-pop');if(en.isIntersecting&&pop&&!pop.hasAttribute('hidden'))return;w.classList.toggle('guar-away',en.isIntersecting)})},{threshold:0.2}).observe(band)})();
/* before-after slider: write-only handler */
document.querySelectorAll('[data-ba]').forEach(function(fig){
var r=fig.querySelector('.ba-range'),st=fig.querySelector('.ba-stage');
function set(){var v=Math.min(100,Math.max(0,+r.value));st.style.setProperty('--pos',v+'%');var h=fig.querySelector('.ba-handle');h.style.left=v+'%';var t=fig.querySelector('.ba-top');t.style.clipPath='inset(0 '+(100-v)+'% 0 0)';r.setAttribute('aria-valuetext',v+'%')}
r.addEventListener('input',set);set();
});
/* carousel dots + gentle autoplay until first touch */
var car=document.querySelector('.hero-car');
if(car){
var tr=car.querySelector('.car-track'),dots=[].slice.call(car.querySelectorAll('.car-dot')),ct;
function stp(){var sl=tr.firstElementChild;return sl?sl.getBoundingClientRect().width+10:0}
function cur(){var s=stp();if(!s)return 0;var i=Math.round(tr.scrollLeft/s);return Math.max(0,Math.min(dots.length-1,i))}
tr.addEventListener('scroll',function(){if(ct)return;ct=1;requestAnimationFrame(function(){ct=0;
var i=cur();for(var j=0;j<dots.length;j++)dots[j].className='car-dot'+(j===i?' on':'')})},{passive:true});
if(!reduce&&'IntersectionObserver' in window){
var auto=true,timer=null;
var stop=function(){if(timer){clearInterval(timer);timer=null}};
var start=function(){if(!auto||timer)return;timer=setInterval(function(){
var i=cur()+1;if(i>dots.length-1)i=0;
tr.scrollTo({left:i*stp(),behavior:'smooth'})},2500)};
var kill=function(){auto=false;stop()};
tr.addEventListener('touchstart',kill,{passive:true});
tr.addEventListener('pointerdown',kill,{passive:true});
tr.addEventListener('wheel',kill,{passive:true});
new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){start()}else{stop()}})},{threshold:0.4}).observe(car);
}
}
/* steps: the line fills and the numbers light up in sequence when the section arrives */
(function(){var st=document.querySelector('.steps');if(!st)return;
if(reduce||!('IntersectionObserver' in window)){st.classList.add('go');return}
new IntersectionObserver(function(es,ob){es.forEach(function(e){if(e.isIntersecting){st.classList.add('go');ob.disconnect()}})},{threshold:0.25}).observe(st)})();
/* FAQ: fluid open and close (WAAPI), one open at a time; plain details without JS */
(function(){var ds=[].slice.call(document.querySelectorAll('.faq details'));if(!ds.length)return;
var busy=false;
function closeD(d,animate){var b=d.querySelector('.answer');d.classList.remove('is-open');
if(!animate||reduce||!b.animate){d.open=false;return}
var a=b.animate([{blockSize:b.scrollHeight+'px',opacity:1},{blockSize:'0px',opacity:0}],{duration:260,easing:'cubic-bezier(.4,0,.2,1)'});
a.onfinish=function(){d.open=false};}
function openD(d){d.open=true;d.classList.add('is-open');var b=d.querySelector('.answer');
if(reduce||!b.animate)return;
b.animate([{blockSize:'0px',opacity:0},{blockSize:b.scrollHeight+'px',opacity:1}],{duration:300,easing:'cubic-bezier(.22,1,.36,1)'});}
ds.forEach(function(d){if(d.open)d.classList.add('is-open');
d.querySelector('summary').addEventListener('click',function(e){e.preventDefault();
if(busy)return;busy=true;setTimeout(function(){busy=false},320);
if(d.open){closeD(d,true)}else{ds.forEach(function(o){if(o!==d&&o.open)closeD(o,true)});openD(d)}})});
})();
/* click taxonomy shim: ready for the Ads tag day, zero requests today */
window.dataLayer=window.dataLayer||[];
document.addEventListener('click',function(e){var a=e.target.closest('a[data-cta]');if(!a)return;
window.dataLayer.push({event:a.dataset.cta.indexOf('whatsapp')>-1?'whatsapp_click':'call_click',cta:a.dataset.cta,lang:document.documentElement.lang.slice(0,2),ts:Date.now()});
},{passive:true});
})();`;

module.exports = { pageHtml, PAGE_JS, PHONE, WA, LANGS, TEL };
