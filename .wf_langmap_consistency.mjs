import fs from 'fs';
eval(fs.readFileSync('data.js', 'utf8').replace('const SENTENCES', 'globalThis.SENTENCES'));
const manifest = JSON.parse(fs.readFileSync('/tmp/langmap_slices/manifest.json', 'utf8'));
const S = globalThis.SENTENCES; const byId = new Map(); S.forEach((s) => byId.set(s.id, s));
const fmt = (a) => a.map((p) => `${p[0]}:「${p[1]}」`).join(' ');
fs.mkdirSync('/tmp/langmap_consistency', { recursive: true });
const counts = [];
for (const g of manifest) {
  const codes = g.codes; const flags = [];
  for (const s of S) {
    for (const c of codes) {
      const a = s.langs[c]; if (!a) continue;
      const seen = {}; a.forEach((p) => p[0].split('|').forEach((r) => { seen[r] = (seen[r] || 0) + 1; }));
      const dups = Object.keys(seen).filter((r) => seen[r] > 1);
      if (!dups.length) continue;
      const sibs = codes.filter((x) => x !== c && s.langs[x]);
      if (sibs.length < 3) continue;
      const sibDup = sibs.filter((x) => { const s2 = {}; s.langs[x].forEach((p) => p[0].split('|').forEach((r) => { s2[r] = (s2[r] || 0) + 1; })); return dups.some((d) => (s2[d] || 0) > 1); }).length;
      if (sibDup === 0) flags.push({ s, c, dups });
    }
  }
  if (!flags.length) { counts.push({ nn: g.nn, n: 0 }); continue; }
  const L = [];
  L.push(`# 群${g.nn} 兄弟間役割文字 整合性監査 — ${g.theme}`);
  L.push(`languages: ${codes.join(', ')}`);
  L.push('下記の各セルは、ある言語だけが役割文字を「重複」させており（兄弟言語はいずれも重複しない＝外れ値）、役割文字の誤割当の疑いがあります。各文の全兄弟整列と en/ja 参照を併記。判定: (1) その重複文字の一方が別の役割（例 コピュラ=D, 補文標識=H 等）であるべきなら、兄弟・参照に合わせて正しい文字へ retag。(2) その言語の構造上、本当に同一役割が2回現れるなら KEEP（理由明記）。surface は変更せず役割文字のみ修正すること。');
  for (const f of flags) {
    L.push(`\n## #${f.s.id} ${f.s.title}  ⟵ [${f.c}] が役割 ${f.dups.join(',')} を重複`);
    L.push(`  ref[en] ${f.s.langs.en ? fmt(f.s.langs.en) : '-'}`);
    L.push(`  ref[ja] ${f.s.langs.ja ? fmt(f.s.langs.ja) : '-'}`);
    for (const c of codes) { if (!f.s.langs[c]) continue; const m = c === f.c ? ' ⟵外れ値' : ''; L.push(`  [${c}]${m} ${fmt(f.s.langs[c])}`); }
  }
  fs.writeFileSync(`/tmp/langmap_consistency/${g.nn}.md`, L.join('\n'));
  counts.push({ nn: g.nn, n: flags.length });
}
const withFlags = counts.filter((c) => c.n);
console.log('groups with consistency flags:', withFlags.length, '| total flagged cells:', withFlags.reduce((a, b) => a + b.n, 0));
console.log(withFlags.map((c) => `${c.nn}:${c.n}`).join(' '));
console.log('TARGET_GROUPS=' + withFlags.map((c) => parseInt(c.nn, 10)).join(','));
