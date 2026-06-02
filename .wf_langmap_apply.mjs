// Deterministic applier for LangMap data.js structured edits.
// Usage: node .wf_langmap_apply.mjs <edits.json>
// edits.json = [ {id, lang, op, ...}, ... ]
//   op 'replace' : { segments: [[seg,text],...] }          -> replace whole alignment for (id,lang)
//   op 'retag'   : { find:"surface", newSeg:"X", nth?:1 }   -> change the role-letter of a segment
//   op 'settext' : { find:"surface", newText:"...", nth?:1 }-> change the surface text of a segment
//   op 'remove'  : { find:"surface", nth?:1 }               -> delete a segment
// Each edit also carries an optional `finding` string (echoed in the report).
import fs from 'fs';

const editsPath = process.argv[2];
if (!editsPath) { console.error('usage: node .wf_langmap_apply.mjs <edits.json>'); process.exit(2); }
const edits = JSON.parse(fs.readFileSync(editsPath, 'utf8'));

const orig = fs.readFileSync('data.js', 'utf8');
eval(orig.replace('const SENTENCES', 'globalThis.SENTENCES'));
const S = globalThis.SENTENCES;
const byId = new Map();
S.forEach((s, i) => byId.set(s.id, i));

const applied = [];
const failed = [];

function findIdx(arr, text, nth) {
  const hits = [];
  arr.forEach((p, i) => { if (p[1] === text) hits.push(i); });
  if (hits.length === 0) return { err: `text not found: ${JSON.stringify(text)}` };
  if (hits.length > 1 && !nth) return { err: `text not unique (${hits.length}x); supply nth: ${JSON.stringify(text)}` };
  return { i: nth ? hits[nth - 1] : hits[0] };
}

// --- display-preservation guard (mirrors app.js buildFullText) ---
const NO_SPACE = new Set(['ja','ja_kyo','ja_osa','ja_hir','ja_hak','ja_aom','ja_oki','ja_mvi','ja_rys','ja_edo','ja_heian','zh','zh_db','zh_sc','yue','nan','wuu','hak_cn','cdo','zh_song','zh_tang','zh_han','th','th_isan','th_n','th_s','lo','my','km','vi_nom','ii','egy']);
const GLUE = '‌';
function buildFullText(arr, code) {
  const ns = NO_SPACE.has(code); let r = '';
  for (const [, raw] of arr) { const t = raw.includes('|') ? raw.split('|')[0] : raw; if (t.startsWith(GLUE)) r += t.slice(1); else if (r && !ns) r += ' ' + t; else r += t; }
  return r;
}
// Re-segmentation must not change rendered text. Given a proposed new cell, set GLUE
// prefixes so buildFullText(new)==target display. Returns adjusted segments or null if
// the surfaces can't reconstruct the target (real corruption: char change / reorder / dup).
function reconcileDisplay(newSeg, code, targetDisplay) {
  const ns = NO_SPACE.has(code);
  const out = []; let result = '';
  for (let i = 0; i < newSeg.length; i++) {
    const role = newSeg[i][0];
    let t = newSeg[i][1]; if (t.startsWith(GLUE)) t = t.slice(1); // normalize, we re-decide glue
    const display = t.includes('|') ? t.split('|')[0] : t;
    if (i === 0) { out.push([role, t]); result = display; continue; }
    // option A: space-join (only if not no-space)
    if (!ns && targetDisplay.slice(result.length, result.length + 1 + display.length) === ' ' + display) {
      out.push([role, t]); result += ' ' + display;
    } else if (targetDisplay.slice(result.length, result.length + display.length) === display) {
      // glue-join (no space)
      out.push([role, GLUE + t]); result += display;
    } else {
      return null; // cannot reconstruct -> corruption
    }
  }
  return result === targetDisplay ? out : null;
}

for (const e of edits) {
  const tag = `#${e.id}/${e.lang}: ${e.finding || e.op}`;
  const si = byId.get(e.id);
  if (si === undefined) { failed.push({ tag, reason: `unknown sentence id ${e.id}` }); continue; }
  const sent = S[si];
  if (!sent.langs[e.lang]) { failed.push({ tag, reason: `lang ${e.lang} absent in #${e.id}` }); continue; }
  const arr = sent.langs[e.lang];
  const before = JSON.parse(JSON.stringify(arr));
  let postValue;
  try {
    if (e.op === 'replace') {
      if (!Array.isArray(e.segments) || !e.segments.length) throw new Error('replace needs non-empty segments[]');
      let seg = e.segments.map(p => { if (!Array.isArray(p) || p.length !== 2) throw new Error('each segment must be [seg,text]'); return [String(p[0]), String(p[1])]; });
      // display-preservation: unless caller opts out (allowTextChange), the rendered text must be unchanged
      if (!e.allowTextChange) {
        const target = buildFullText(arr, e.lang);
        if (buildFullText(seg, e.lang) !== target) {
          const fixed = reconcileDisplay(seg, e.lang, target);
          if (!fixed) throw new Error(`replace would change rendered text (corruption/reorder); rejected. target="${target}" got="${buildFullText(seg, e.lang)}"`);
          seg = fixed; // glue prefixes auto-applied to preserve display
        }
      }
      sent.langs[e.lang] = seg;
      postValue = seg.map(p => `${p[0]}:${p[1]}`).join(' ');
    } else if (e.op === 'retag') {
      const r = findIdx(arr, e.find, e.nth); if (r.err) throw new Error(r.err);
      if (!e.newSeg) throw new Error('retag needs newSeg');
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
    // reject any edit that introduces a role-letter NOT defined in this sentence's segment palette
    {
      const defined = new Set(Object.keys(sent.segments || {}));
      const cell0 = sent.langs[e.lang];
      for (const p of cell0) for (const r of String(p[0]).split('|')) {
        if (!defined.has(r)) { sent.langs[e.lang] = before; throw new Error(`edit introduces undefined segment-letter "${r}" (not in #${e.id} palette ${[...defined].join('')}); rejected`); }
      }
    }
    // reject any edit that RESULTS in adjacent same role-letter (project hard rule)
    const cell = sent.langs[e.lang];
    for (let i = 1; i < cell.length; i++) {
      if (cell[i][0] === cell[i - 1][0]) {
        sent.langs[e.lang] = before; // roll back this edit
        throw new Error(`edit would create adjacent same role-letter ${cell[i][0]} (${cell[i-1][1]}+${cell[i][1]}); rejected — merge instead`);
      }
    }
    applied.push({ tag, post: postValue });
  } catch (err) { failed.push({ tag, reason: err.message }); }
}

// integrity warnings: adjacent identical role-letters (project rule: merge instead)
const warns = [];
S.forEach(s => {
  Object.entries(s.langs).forEach(([code, arr]) => {
    for (let i = 1; i < arr.length; i++) if (arr[i][0] === arr[i - 1][0]) warns.push(`#${s.id}/${code}: adjacent same role ${arr[i][0]}`);
  });
});

const out = 'const SENTENCES = ' + JSON.stringify(S, null, 2) + ';\n';
fs.writeFileSync('data.js', out);

console.log(JSON.stringify({ appliedCount: applied.length, failedCount: failed.length, applied, failed, adjacentWarnings: warns.slice(0, 40) }, null, 2));
