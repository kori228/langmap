// Enhanced LangMap edits applier with palette-extension support.
//   Same JSON edit format as .wf_langmap_apply.mjs.
//   NEW: when an edit introduces a role-letter NOT yet in sent.segments,
//   auto-extend the palette (assign a default color) instead of rejecting.
//   Default colors follow the project palette style (10 reserved colors
//   for letters A–J; further letters cycle).
import fs from 'fs';

const editsPath = process.argv[2];
if (!editsPath) { console.error('usage: node .wf_langmap_apply2.mjs <edits.json>'); process.exit(2); }
const edits = JSON.parse(fs.readFileSync(editsPath, 'utf8'));

const orig = fs.readFileSync('data.js', 'utf8');
eval(orig.replace('const SENTENCES', 'globalThis.SENTENCES'));
const S = globalThis.SENTENCES;
const byId = new Map();
S.forEach((s, i) => byId.set(s.id, i));

const applied = [];
const failed = [];
const paletteAdditions = [];

const DEFAULT_PALETTE_COLORS = [
  '#e8384f','#4178bc','#0d9f6e','#8338ec','#d4790e',   // A B C D E
  '#b32d6a','#00838f','#5d4037','#827717','#455a64',   // F G H I J
  '#ad1457','#6d4c41','#9c27b0','#f57c00','#0277bd',   // K L M N O
];

function colorForLetter(letter) {
  const code = letter.charCodeAt(0) - 65; // A=0
  return DEFAULT_PALETTE_COLORS[code % DEFAULT_PALETTE_COLORS.length];
}

function findIdx(arr, text, nth) {
  const hits = [];
  arr.forEach((p, i) => { if (p[1] === text) hits.push(i); });
  if (hits.length === 0) return { err: `text not found: ${JSON.stringify(text)}` };
  if (hits.length > 1 && !nth) return { err: `text not unique (${hits.length}x); supply nth: ${JSON.stringify(text)}` };
  return { i: nth ? hits[nth - 1] : hits[0] };
}

const NO_SPACE = new Set(['ja','ja_kyo','ja_osa','ja_hir','ja_hak','ja_aom','ja_oki','ja_mvi','ja_rys','ja_edo','ja_heian','zh','zh_db','zh_sc','yue','nan','wuu','hak_cn','cdo','zh_song','zh_tang','zh_han','th','th_isan','th_n','th_s','lo','my','km','vi_nom','ii','egy']);
const GLUE = '‌';
function buildFullText(arr, code) {
  const ns = NO_SPACE.has(code); let r = '';
  for (const [, raw] of arr) { const t = raw.includes('|') ? raw.split('|')[0] : raw; if (t.startsWith(GLUE)) r += t.slice(1); else if (r && !ns) r += ' ' + t; else r += t; }
  return r;
}
function reconcileDisplay(newSeg, code, targetDisplay) {
  const ns = NO_SPACE.has(code);
  const out = []; let result = '';
  for (let i = 0; i < newSeg.length; i++) {
    const role = newSeg[i][0];
    let t = newSeg[i][1]; if (t.startsWith(GLUE)) t = t.slice(1);
    const display = t.includes('|') ? t.split('|')[0] : t;
    if (i === 0) { out.push([role, t]); result = display; continue; }
    if (!ns && targetDisplay.slice(result.length, result.length + 1 + display.length) === ' ' + display) {
      out.push([role, t]); result += ' ' + display;
    } else if (targetDisplay.slice(result.length, result.length + display.length) === display) {
      out.push([role, GLUE + t]); result += display;
    } else {
      return null;
    }
  }
  return result === targetDisplay ? out : null;
}

function ensurePaletteLetters(sent, letters) {
  // Add any missing role-letters to sent.segments with a default color.
  if (!sent.segments) sent.segments = {};
  for (const r of letters) {
    if (!sent.segments[r]) {
      sent.segments[r] = { color: colorForLetter(r) };
      paletteAdditions.push(`#${sent.id}: +${r}`);
    }
  }
}

for (const e of edits) {
  const tag = `#${e.id}/${e.lang}: ${e.finding || e.op}`;
  const si = byId.get(e.id);
  if (si === undefined) { failed.push({ tag, reason: `unknown sentence id ${e.id}` }); continue; }
  const sent = S[si];
  if (!sent.langs[e.lang]) { failed.push({ tag, reason: `lang ${e.lang} absent in #${e.id}` }); continue; }
  const arr = sent.langs[e.lang];
  const before = JSON.parse(JSON.stringify(arr));
  const beforePal = JSON.parse(JSON.stringify(sent.segments || {}));
  let postValue;
  try {
    if (e.op === 'replace') {
      if (!Array.isArray(e.segments) || !e.segments.length) throw new Error('replace needs non-empty segments[]');
      let seg = e.segments.map(p => { if (!Array.isArray(p) || p.length !== 2) throw new Error('each segment must be [seg,text]'); return [String(p[0]), String(p[1])]; });
      // Auto-extend palette for any new role-letters introduced
      const newLetters = new Set();
      for (const p of seg) for (const r of String(p[0]).split('|')) {
        if (!sent.segments?.[r]) newLetters.add(r);
      }
      ensurePaletteLetters(sent, newLetters);
      // Display preservation guard (unless caller opts out)
      if (!e.allowTextChange) {
        const target = buildFullText(arr, e.lang);
        if (buildFullText(seg, e.lang) !== target) {
          const fixed = reconcileDisplay(seg, e.lang, target);
          if (!fixed) throw new Error(`replace would change rendered text (corruption/reorder); rejected. target="${target}" got="${buildFullText(seg, e.lang)}"`);
          seg = fixed;
        }
      }
      sent.langs[e.lang] = seg;
      postValue = seg.map(p => `${p[0]}:${p[1]}`).join(' ');
    } else if (e.op === 'retag') {
      const r = findIdx(arr, e.find, e.nth); if (r.err) throw new Error(r.err);
      if (!e.newSeg) throw new Error('retag needs newSeg');
      // Auto-extend palette
      const newLetters = new Set();
      for (const r2 of String(e.newSeg).split('|')) if (!sent.segments?.[r2]) newLetters.add(r2);
      ensurePaletteLetters(sent, newLetters);
      arr[r.i][0] = String(e.newSeg);
      postValue = `${arr[r.i][0]}:${arr[r.i][1]}`;
    } else if (e.op === 'settext') {
      const r = findIdx(arr, e.find, e.nth); if (r.err) throw new Error(r.err);
      if (e.newText === undefined) throw new Error('settext needs newText');
      arr[r.i][1] = String(e.newText);
      postValue = `${arr[r.i][0]}:${arr[r.i][1]}`;
    } else if (e.op === 'remove') {
      const r = findIdx(arr, e.find, e.nth); if (r.err) throw new Error(r.err);
      const removed = arr.splice(r.i, 1)[0];
      postValue = `removed ${removed[0]}:${removed[1]}`;
    } else {
      throw new Error(`unknown op ${e.op}`);
    }
    // Reject adjacent same role-letters
    const cell = sent.langs[e.lang];
    for (let i = 1; i < cell.length; i++) {
      if (cell[i][0] === cell[i - 1][0]) {
        sent.langs[e.lang] = before;
        sent.segments = beforePal;
        throw new Error(`edit would create adjacent same role-letter ${cell[i][0]} (${cell[i-1][1]}+${cell[i][1]}); rejected — merge instead`);
      }
    }
    applied.push({ tag, post: postValue });
  } catch (err) {
    sent.segments = beforePal; // roll back palette addition if edit failed
    failed.push({ tag, reason: err.message });
  }
}

const warns = [];
S.forEach(s => {
  Object.entries(s.langs).forEach(([code, arr]) => {
    for (let i = 1; i < arr.length; i++) if (arr[i][0] === arr[i - 1][0]) warns.push(`#${s.id}/${code}: adjacent same role ${arr[i][0]}`);
  });
});

const out = 'const SENTENCES = ' + JSON.stringify(S, null, 2) + ';\n';
fs.writeFileSync('data.js', out);

console.log(JSON.stringify({
  appliedCount: applied.length,
  failedCount: failed.length,
  paletteAdditions: paletteAdditions.length,
  paletteAdditionsDetail: paletteAdditions.slice(0, 30),
  applied: applied.slice(0, 5),
  failed,
  adjacentWarnings: warns.slice(0, 20)
}, null, 2));
