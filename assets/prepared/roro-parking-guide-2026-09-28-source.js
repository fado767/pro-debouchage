// Pro Debouchage - Roro's parking guide, phone-size PDF.
// Rebuild: `npm install pdfkit` (once, anywhere), then `node roro-parking-guide-2026-09-28-source.js`.
// Self-contained: fetches the 5 static Archivo weights it needs from Google Fonts into the OS
// temp folder (cached there, never written into the project), reads the logo from site-v1/, and
// writes the PDF next to this script. Colours and font from design/site-source/styles.css
// (the locked site design). No fact in the text below was invented; it is Roro's parking brief.
// Box 3 was corrected 2026-09-28: an earlier per-visit price example and a jobs-per-month count
// were removed, sourced from a zone where the professional card does not apply.
// Text corrected 2026-10-01 (review): the meter sentence, the count line out (no job count is asked of Roro), "diesel" out, lez.brussels named.
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');
const os = require('os');
const https = require('https');

const PROJECT_ROOT = path.resolve(__dirname, '..', '..');
const OUT = path.join(__dirname, 'roro-parking-guide-2026-09-28.pdf');
const LOGO_PATH = path.join(PROJECT_ROOT, 'site-v1', 'assets', 'img', 'icon-512.png');
const FONT_CACHE = path.join(os.tmpdir(), 'pro-debouchage-archivo-static-fonts');

// ---------- fetch static Archivo weights from Google Fonts (cached in the OS temp folder) ----------
// Archivo ships as a variable font only; pdfkit's font engine (fontkit) does not reliably render
// its glyph outlines (proven empty renders in this build's own test pass), so we pull the actual
// per-weight static instances instead. The legacy Google Fonts CSS endpoint serves plain .woff
// when asked with an old browser user-agent, which is what this does.
function fetchUrl(url, headers) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        fetchUrl(res.headers.location, headers).then(resolve, reject);
        return;
      }
      if (res.statusCode !== 200) { reject(new Error('HTTP ' + res.statusCode + ' for ' + url)); return; }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}
const OLD_UA = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/1.0.0.0 Safari/537.36';
async function ensureFonts(weights) {
  fs.mkdirSync(FONT_CACHE, { recursive: true });
  const paths = {};
  const missing = weights.filter((w) => !fs.existsSync(path.join(FONT_CACHE, `Archivo-${w}.woff`)));
  if (missing.length) {
    const css = (await fetchUrl(
      'https://fonts.googleapis.com/css?family=Archivo:' + missing.join(','),
      { 'User-Agent': OLD_UA }
    )).toString('utf8');
    for (const w of missing) {
      const re = new RegExp(`font-weight:\\s*${w};[\\s\\S]*?url\\(([^)]+)\\)\\s*format\\('woff'\\)`);
      const m = css.match(re);
      if (!m) throw new Error('Could not find a woff URL for Archivo weight ' + w);
      const buf = await fetchUrl(m[1], { 'User-Agent': OLD_UA });
      fs.writeFileSync(path.join(FONT_CACHE, `Archivo-${w}.woff`), buf);
    }
  }
  weights.forEach((w) => { paths[w] = path.join(FONT_CACHE, `Archivo-${w}.woff`); });
  return paths;
}

// ---------- palette (design/site-source/styles.css) ----------
const INK = '#102A4A';
const CTA = '#D63A17';
const PAPER = '#F6F3EE';
const CARD = '#FFFCF7';
const LINE = '#E2DCD3';
const TEXT = '#1B2733';
const MUTED = '#5A6672';
const TEAL = '#0B7A70';
const MARK = '#FFD635';

// ---------- page ----------
const PW = 360, PH = 640;
const MARGIN = 18;
const CW = PW - MARGIN * 2; // content width
const BOX_PAD = 8;
const TW = CW - BOX_PAD * 2; // text width inside a box

async function main() {

const fontPaths = await ensureFonts([400, 600, 700, 800, 900]);

const doc = new PDFDocument({ size: [PW, PH], margins: { top: 0, left: 0, right: 0, bottom: 0 }, autoFirstPage: false, bufferPages: true });
doc.pipe(fs.createWriteStream(OUT));

// ---------- fonts ----------
const F = {
  400: 'A400', 600: 'A600', 700: 'A700', 800: 'A800', 900: 'A900',
};
doc.registerFont(F[400], fontPaths[400]);
doc.registerFont(F[600], fontPaths[600]);
doc.registerFont(F[700], fontPaths[700]);
doc.registerFont(F[800], fontPaths[800]);
doc.registerFont(F[900], fontPaths[900]);

// ---------- helpers ----------
function newPage() {
  doc.addPage();
  doc.rect(0, 0, PW, PH).fill(PAPER);
}

function wrapHeight(text, weight, size, width, lineGap) {
  doc.font(F[weight]).fontSize(size);
  return doc.heightOfString(text, { width, lineGap });
}

function drawPara(text, x, y, width, weight, size, color, lineGap) {
  doc.font(F[weight]).fontSize(size).fillColor(color);
  doc.text(text, x, y, { width, lineGap });
  return y + doc.heightOfString(text, { width, lineGap });
}

// bullet with a dot marker and hanging indent
function bulletHeight(text, size, width, lineGap) {
  return wrapHeight(text, 400, size, width - 14, lineGap);
}
function drawBullet(text, x, y, width, size, lineGap, dotColor) {
  const textX = x + 14;
  const textW = width - 14;
  doc.save();
  doc.circle(x + 3, y + size * 0.42, 2.1).fill(dotColor || TEAL);
  doc.restore();
  doc.font(F[400]).fontSize(size).fillColor(TEXT);
  doc.text(text, textX, y, { width: textW, lineGap });
  return y + doc.heightOfString(text, { width: textW, lineGap });
}

// numbered item
function numHeight(text, size, width, lineGap) {
  return wrapHeight(text, 400, size, width - 20, lineGap);
}
function drawNum(n, text, x, y, width, size, lineGap) {
  const textX = x + 20;
  const textW = width - 20;
  doc.font(F[800]).fontSize(size).fillColor(INK);
  doc.text(n + '.', x, y, { width: 18, lineGap });
  doc.font(F[400]).fontSize(size).fillColor(TEXT);
  doc.text(text, textX, y, { width: textW, lineGap });
  return y + doc.heightOfString(text, { width: textW, lineGap });
}

// sub-bullet (indented dash, smaller)
function subBulletHeight(text, size, width, lineGap) {
  return wrapHeight(text, 400, size, width - 16, lineGap);
}
function drawSubBullet(text, x, y, width, size, lineGap) {
  const textX = x + 16;
  const textW = width - 16;
  doc.font(F[700]).fontSize(size).fillColor(MUTED);
  doc.text('-', x + 2, y, { width: 10, lineGap });
  doc.font(F[400]).fontSize(size).fillColor(TEXT);
  doc.text(text, textX, y, { width: textW, lineGap });
  return y + doc.heightOfString(text, { width: textW, lineGap });
}

// rich wrapped line: runs = [{t, bold, hl}]
function richHeight(runs, size, width, lineGap, dotColor) {
  if (dotColor) width = width - 14;
  const lh = size * 1.32 + lineGap;
  let cursorX = 0, lines = 1;
  for (const r of runs) {
    const words = r.t.split(' ');
    doc.font(F[r.bold ? 800 : 400]).fontSize(size);
    for (let i = 0; i < words.length; i++) {
      const w = words[i] + (i < words.length - 1 || r !== runs[runs.length - 1] ? ' ' : '');
      const ww = doc.widthOfString(w);
      if (cursorX + ww > width && cursorX > 0) { lines++; cursorX = 0; }
      cursorX += ww;
    }
  }
  return lines * lh;
}
function drawRich(runs, x, y, width, size, lineGap, dotColor) {
  if (dotColor) {
    doc.save();
    doc.circle(x + 3, y + size * 0.42, 2.1).fill(dotColor);
    doc.restore();
    x = x + 14;
    width = width - 14;
  }
  const lh = size * 1.32 + lineGap;
  let cursorX = x, cursorY = y;
  for (const r of runs) {
    const words = r.t.split(' ');
    for (let i = 0; i < words.length; i++) {
      const isLastWordOfRun = i === words.length - 1;
      const w = words[i] + (isLastWordOfRun ? '' : ' ');
      doc.font(F[r.bold ? 800 : 400]).fontSize(size);
      const ww = doc.widthOfString(w);
      if (cursorX + ww > x + width && cursorX > x) { cursorY += lh; cursorX = x; }
      if (r.hl) {
        doc.rect(cursorX - 1, cursorY + size * 0.60, ww + (isLastWordOfRun ? 0 : 2), size * 0.40).fill(MARK);
      }
      doc.fillColor(r.bold ? INK : TEXT);
      doc.text(w, cursorX, cursorY, { lineBreak: false });
      cursorX += ww;
    }
  }
  return cursorY + lh;
}

// ---------- box (card) ----------
const SIZE = 13;
const LGAP = 3.2;
const BULLET_GAP = 2.5;
const HEAD_SIZE = 15;

function measureBox(heading, items) {
  let h = BOX_PAD; // top pad
  h += doc.font(F[900]).fontSize(HEAD_SIZE).heightOfString(heading, { width: TW });
  h += 7; // heading to body gap
  items.forEach((it, idx) => {
    if (it.type === 'bullet') h += bulletHeight(it.text, SIZE, TW, LGAP);
    else if (it.type === 'num') h += numHeight(it.text, SIZE, TW, LGAP);
    else if (it.type === 'sub') h += subBulletHeight(it.text, SIZE, TW, LGAP);
    else if (it.type === 'rich') h += richHeight(it.runs, SIZE, TW, LGAP, it.bullet ? TEAL : null);
    else if (it.type === 'plain') h += wrapHeight(it.text, it.weight || 700, SIZE, TW, LGAP);
    if (idx < items.length - 1) h += BULLET_GAP;
  });
  h += BOX_PAD; // bottom pad
  return h;
}

function drawBox(heading, items, x, y) {
  const h = measureBox(heading, items);
  doc.save();
  doc.roundedRect(x, y, CW, h, 12).lineWidth(1).fillAndStroke(CARD, LINE);
  doc.restore();

  let cy = y + BOX_PAD;
  doc.font(F[900]).fontSize(HEAD_SIZE).fillColor(INK);
  doc.text(heading, x + BOX_PAD, cy, { width: TW });
  cy += doc.heightOfString(heading, { width: TW }) + 7;

  items.forEach((it, idx) => {
    if (it.type === 'bullet') cy = drawBullet(it.text, x + BOX_PAD, cy, TW, SIZE, LGAP, TEAL);
    else if (it.type === 'num') cy = drawNum(it.n, it.text, x + BOX_PAD, cy, TW, SIZE, LGAP);
    else if (it.type === 'sub') cy = drawSubBullet(it.text, x + BOX_PAD, cy, TW, SIZE, LGAP);
    else if (it.type === 'rich') cy = drawRich(it.runs, x + BOX_PAD, cy, TW, SIZE, LGAP, it.bullet ? TEAL : null);
    else if (it.type === 'plain') cy = drawPara(it.text, x + BOX_PAD, cy, TW, it.weight || 700, SIZE, INK, LGAP);
    if (idx < items.length - 1) cy += BULLET_GAP;
  });

  return y + h;
}

// ============================================================
// PAGE 1
// ============================================================
newPage();
let y = MARGIN;

// header: logo + wordmark
if (LOGO_PATH && fs.existsSync(LOGO_PATH)) {
  doc.image(LOGO_PATH, MARGIN, y, { width: 34, height: 34 });
}
doc.font(F[900]).fontSize(17).fillColor(INK);
doc.text('Pro Débouchage', MARGIN + 42, y + 8, { width: CW - 42 });
y += 34 + 9;

// title
doc.font(F[900]).fontSize(21).fillColor(INK);
const titleText = 'Parking in Brussels during a job';
doc.text(titleText, MARGIN, y, { width: CW, lineGap: 2 });
y += doc.heightOfString(titleText, { width: CW, lineGap: 2 }) + 4;

// subtitle
doc.font(F[600]).fontSize(11.5).fillColor(MUTED);
const subText = 'For Roro. Read on parking.brussels on 28 September 2026.';
doc.text(subText, MARGIN, y, { width: CW, lineGap: 1 });
y += doc.heightOfString(subText, { width: CW, lineGap: 1 }) + 9;

// Box 1
const box1Items = [
  { type: 'bullet', text: 'There is no cheap card for your trade. The card at 75 EUR a year is for home medical care only.' },
  { type: 'bullet', text: 'The card for companies is the "Carte régionale de stationnement Professionnel".' },
  { type: 'rich', bullet: true, runs: [
    { t: 'It costs ' },
    { t: '90 EUR a month', bold: true, hl: true },
    { t: ', or ' },
    { t: '1,080 EUR a year', bold: true, hl: true },
    { t: '.' },
  ] },
  { type: 'bullet', text: 'You do not need it to start. You can pay per job, with the app or at the meter.' },
];
y = drawBox('The short answer', box1Items, MARGIN, y) + 7;

// Box 2
const box2Items = [
  { type: 'bullet', text: 'Valid in all 19 communes of Brussels.' },
  { type: 'bullet', text: 'Yes: blue, green, grey and "événement" zones.' },
  { type: 'bullet', text: 'No: red zones, orange zones and reserved places. In red and orange zones you pay the meter, with or without the card.' },
  { type: 'bullet', text: 'The card goes behind the windscreen, easy to read.' },
];
y = drawBox('What the card gives', box2Items, MARGIN, y) + 7;

// Box 3 (corrected 2026-09-28: see the file header note above)
const box3Items = [
  { type: 'bullet', text: 'Paying per job: the price depends on the commune and the zone.' },
  { type: 'bullet', text: 'The card costs 90 EUR a month, jobs or no jobs.' },
  { type: 'bullet', text: 'Start by paying per job. After one month, look at what parking cost you. Then decide.' },
];
y = drawBox('Card, or pay per job?', box3Items, MARGIN, y);

console.log('Page 1 bottom y:', y, '/', PH);

// ============================================================
// PAGE 2
// ============================================================
newPage();
y = MARGIN;

// Box 4
const box4Items = [
  { type: 'num', n: 1, text: 'Go to parking.brussels, then "Carte régionale", then "Professionnel".' },
  { type: 'num', n: 2, text: 'Fill in the online form "Demande de carte régionale de stationnement professionnel".' },
  { type: 'num', n: 3, text: 'The first time, they ask for a "plan de déplacement d\'entreprise" (how the company travels), or something equal.' },
  { type: 'num', n: 4, text: 'Choose the months: 1 month is 90 EUR, 12 months are 1,080 EUR.' },
  { type: 'num', n: 5, text: 'Pay by bank transfer, with the number plate of the van as the message, or by card at one of their offices.' },
  { type: 'num', n: 6, text: 'Renew it yourself before it ends. Nobody reminds you.' },
];
y = drawBox('How to get the card', box4Items, MARGIN, y) + 7;

// Box 5
const box5Items = [
  { type: 'bullet', text: '02 563 39 00, Monday to Friday, 8:30 to 12:30. They do not answer e-mail.' },
  { type: 'plain', text: 'Ask three things:', weight: 800 },
  { type: 'sub', text: 'My company is in Vilvoorde. Can I get the card?' },
  { type: 'sub', text: 'Is there a time limit each time I park?' },
  { type: 'sub', text: 'What do you accept as the travel plan for a company with one van?' },
];
y = drawBox('Call them first', box5Items, MARGIN, y) + 7;

// Box 6
const box6Items = [
  { type: 'bullet', text: 'Euro 6: allowed in the Brussels low emission zone today.' },
];
y = drawBox('The van', box6Items, MARGIN, y) + 9;

console.log('Page 2 before footer y:', y, '/', PH);

// footer
const footerText = 'Made by fady.be for Pro Débouchage. Sources: parking.brussels and lez.brussels, read 28 September 2026. Prices can change: check the site before you pay.';
doc.font(F[600]).fontSize(11).fillColor(MUTED);
const footerH = doc.heightOfString(footerText, { width: CW, lineGap: 2 });
let footerY = y;
if (footerY + footerH > PH - MARGIN) {
  footerY = PH - MARGIN - footerH;
}
doc.text(footerText, MARGIN, footerY, { width: CW, lineGap: 2 });

console.log('Footer y:', footerY, 'footer bottom:', footerY + footerH, '/', PH);

doc.end();
console.log('Wrote', OUT);

}

main().catch((e) => { console.error(e); process.exit(1); });
