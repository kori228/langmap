import fs from 'fs';
eval(fs.readFileSync('data.js', 'utf8').replace('const SENTENCES', 'globalThis.SENTENCES'));
const manifest = JSON.parse(fs.readFileSync('/tmp/langmap_slices/manifest.json', 'utf8'));
const S = globalThis.SENTENCES;
const byId = new Map(); S.forEach((s) => byId.set(s.id, s));
const roles = (a) => { const s = new Set(); a.forEach((p) => String(p[0]).split('|').forEach((r) => s.add(r))); return s; };
const fmt = (a) => a.map((p) => `${p[0]}:「${p[1]}」`).join(' ');

fs.mkdirSync('/tmp/langmap_suspect', { recursive: true });
const summary = [];
for (const g of manifest) {
  const lines = [];
  lines.push(`# ラウンド4 監査ターゲット — Group ${g.nn}: ${g.theme}`);
  lines.push('');
  lines.push('下記は **あなたの経験則** に機械抽出で合致した「疑うべき」セルです。各セルについて LIVE データを `.wf_langmap_query.mjs <id> <code>` で確認のうえ、(1) より細かく分割すべきか（分割形を示す）／(2) 言語的に正当な融合・省略で直すべきでないか（理由）を判定してください。複合は3-way以上を最優先。');
  lines.push('');
  lines.push('凡例: ⛔=3-way以上の複合(濃厚) / ⚠️=2-way複合(疑) / ▼N=en比N個セグメント不足');
  lines.push('');
  let n3 = 0, n2 = 0, nShort = 0;
  for (const code of g.codes) {
    const rows = [];
    for (const s of S) {
      const a = s.langs[code]; if (!a) continue;
      let pipes = 0, maxway = 1;
      a.forEach((p) => { const w = String(p[0]).split('|').length; pipes += w - 1; if (w > maxway) maxway = w; });
      const enN = s.langs.en ? roles(s.langs.en).size : null;
      const short = enN != null ? Math.max(0, enN - a.length) : 0;
      const flags = [];
      if (maxway >= 3) { flags.push('⛔3+way'); n3++; }
      else if (maxway === 2) { flags.push('⚠️2way'); n2++; }
      if (short >= 2) { flags.push(`▼${short}`); nShort++; }
      if (!flags.length) continue;
      rows.push(`  - #${s.id} ${flags.join(' ')}  [${code}] ${fmt(a)}`);
      if (s.langs.en) rows.push(`        ref[en] ${fmt(s.langs.en)}`);
      if (s.langs.ja && code !== 'ja') rows.push(`        ref[ja] ${fmt(s.langs.ja)}`);
    }
    if (rows.length) { lines.push(`## [${code}]`); lines.push(...rows); lines.push(''); }
  }
  lines.push('');
  lines.push(`（自動集計: ⛔3+way=${n3}, ⚠️2way=${n2}, ▼2+不足=${nShort}）`);
  fs.writeFileSync(`/tmp/langmap_suspect/${g.nn}.md`, lines.join('\n'));
  summary.push({ nn: g.nn, n3, n2, nShort, bytes: fs.statSync(`/tmp/langmap_suspect/${g.nn}.md`).size });
}
console.log('group | 3+way | 2way | 2+short | bytes');
summary.forEach((r) => console.log(`${r.nn}: ${r.n3} ${r.n2} ${r.nShort} (${r.bytes}b)`));
console.log('TOTALS 3+way:', summary.reduce((a, b) => a + b.n3, 0), '2way:', summary.reduce((a, b) => a + b.n2, 0), '2+short:', summary.reduce((a, b) => a + b.nShort, 0));
