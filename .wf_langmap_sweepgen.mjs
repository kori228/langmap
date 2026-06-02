import fs from 'fs';
eval(fs.readFileSync('data.js', 'utf8').replace('const SENTENCES', 'globalThis.SENTENCES'));
const manifest = JSON.parse(fs.readFileSync('/tmp/langmap_slices/manifest.json', 'utf8'));
const S = globalThis.SENTENCES;
const fmt = (a) => a.map((p) => `${p[0]}:「${p[1]}」`).join(' ');
fs.mkdirSync('/tmp/langmap_sweep', { recursive: true });
const out = [];
for (const g of manifest) {
  const codes = g.codes;
  const L = [];
  L.push(`# 群${g.nn} 複合セル一括スイープ資料 — ${g.theme}`);
  L.push(`languages: ${codes.join(', ')}`);
  L.push('各文について、複合(|を含む)セルを持つ変種と、参照(en/ja)・兄弟全変種の整列を併記。兄弟が分割している役割を、ある変種が融合しているなら fix-all-variants + 分割優先方針で分割対象。判定の注意: 限定詞+所有+名詞の語順(例 it「Il mio gatto」=det+poss+noun)は連続するので E:「Il mio」 A:「gatto」と分割可能。限定詞+名詞+所有の語順(例 nap「O gatto mio」)は所有が名詞をまたぐので非連続=KEEP。接尾所有・周置詞・格接尾辞・統合動詞・単一トークン概念・縮約不可は KEEP。');
  let comp = 0;
  for (const s of S) {
    const has = codes.filter((c) => s.langs[c] && s.langs[c].some((p) => p[0].includes('|')));
    if (!has.length) continue;
    comp += has.length;
    L.push(`\n## #${s.id} ${s.title}`);
    L.push(`  ref[en] ${s.langs.en ? fmt(s.langs.en) : '-'}`);
    L.push(`  ref[ja] ${s.langs.ja ? fmt(s.langs.ja) : '-'}`);
    for (const c of codes) { if (!s.langs[c]) continue; const m = s.langs[c].some((p) => p[0].includes('|')) ? ' ⟵複合' : ''; L.push(`  [${c}]${m} ${fmt(s.langs[c])}`); }
  }
  fs.writeFileSync(`/tmp/langmap_sweep/${g.nn}.md`, L.join('\n'));
  out.push({ nn: g.nn, comp });
}
out.sort((a, b) => b.comp - a.comp);
console.log('group compound-cell counts (desc):');
out.forEach((r) => { if (r.comp) console.log(`  ${r.nn}: ${r.comp}`); });
console.log('groups with compounds:', out.filter((r) => r.comp).length, '| total compound cells:', out.reduce((a, b) => a + b.comp, 0));
