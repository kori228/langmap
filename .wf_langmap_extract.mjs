import fs from 'fs';

eval(fs.readFileSync('data.js', 'utf8').replace('const SENTENCES', 'globalThis.SENTENCES'));
eval(fs.readFileSync('lang_names.js', 'utf8').replace('const LANG_NAMES', 'globalThis.LANG_NAMES'));
const S = globalThis.SENTENCES;
const L = globalThis.LANG_NAMES || {};
const NAMES = Object.assign({}, L.ja || {}, L.en || {});

// 30 expert groups. Each entry: [theme, [codes...]]
const GROUPS = [
  ['Japonic — modern standard & mainland dialects', ['ja','ja_edo','ja_kyo','ja_osa','ja_aom','ja_hir','ja_mvi']],
  ['Japonic — historical stages, Ryukyuan & Ainu', ['ja_heian','ja_hak','ja_oki','ja_rys','ain']],
  ['Koreanic — Standard, regional & historical', ['ko','ko_bus','ko_em','ko_jeju','ko_kp','ko_mid','ko_yb']],
  ['Sinitic — Mandarin & historical Chinese stages', ['zh','zh_db','zh_sc','zh_han','zh_tang','zh_song','wuu']],
  ['Sinitic — Southern varieties & SW-China minorities', ['yue','nan','hak_cn','cdo','ii','za','hmn']],
  ['Gallo-Romance — French varieties, Occitan, Catalan, Romansh', ['fr','fr_be','fr_ch','fr_qc','fr_af','oc','ca','rm']],
  ['Ibero-Romance — Spanish varieties', ['es_mx','es_ar','es_cl','es_co','es_pe','es_cu','es_an','es_eu']],
  ['West-Iberian Romance & Romance-based creoles', ['pt_br','pt_eu','gl','lad','ht','pap']],
  ['Italo-Romance & Romanian', ['it','nap','scn','vec','sc','ro']],
  ['Classical & ancient Indo-European', ['la','ine','hit','got','el_grc','cu','non']],
  ['English — national/regional varieties', ['en','en_au','en_ie','en_sco','en_in','en_sg','en_yk','en_ck']],
  ['English — social/historical varieties & English creoles', ['en_aave','en_app','en_south','enm','en_ang','sco','jam','pcm']],
  ['West-Germanic — continental', ['de','de_at','de_by','de_gsw','nds','nl','af','fy']],
  ['North-Germanic & Yiddish', ['sv','da','no','nn','is','fo','yi']],
  ['Slavic — East, West & South', ['ru','uk','be','bg','sr','sl','pl','cs','sk']],
  ['Baltic, Celtic, Hellenic, Albanian, Armenian & Basque', ['lt','lv','ga','cy','br','el','sq','hy','eu']],
  ['Indo-Aryan — Northern (Hindustani belt)', ['hi','ur','bn','pa','bho']],
  ['Indo-Aryan — Eastern & Western', ['as','or','ne','mr','gu']],
  ['Indic classical & Dravidian', ['sa','pi','si','sd','rom','ta','te','kn','ml']],
  ['Iranian & Georgian', ['fa','ps','ku','ckb','tg','ka']],
  ['Turkic', ['tr','az','kk','ky','uz','tk','ug']],
  ['Mongolic, Tungusic & Uralic', ['mn','mn_cn','mnc','fi','et','hu']],
  ['Arabic — MSA & spoken varieties', ['ar','ar_eg','ar_gulf','ar_iq','ar_lev','ar_ma','ar_sd','ar_tn']],
  ['Other Semitic & Ancient Near East', ['he','am','ti','mt','arc','akk','sux','egy','cop']],
  ['Austronesian — Insular Southeast Asia', ['id','ms','jv','su','tl','ceb','ilo']],
  ['Austronesian — Pacific & Madagascar', ['mi','haw','sm','fj','pau','mg']],
  ['Mainland Southeast Asia (Tai-Kadai, Austroasiatic, Tibeto-Burman)', ['th','th_isan','th_n','th_s','lo','km','my','bo']],
  ['Vietnamese & Pacific creoles', ['vi','vi_c','vi_s','vi_nom','hwc','tpi']],
  ['African — Niger-Congo, Nilotic & Cushitic', ['sw','yo','ig','ha','zu','xh','sn','ny','rw','ln','wo','so','om']],
  ['Constructed languages & Indigenous Americas', ['eo','tok','tlh','jbo','qu','gn','nv','chr','myn','nci','iu']],
];

// ---- validate coverage ----
const all = new Set();
S.forEach(s => Object.keys(s.langs || {}).forEach(l => all.add(l)));
const placed = new Map();
let dup = [];
GROUPS.forEach(([t, codes], gi) => codes.forEach(c => {
  if (placed.has(c)) dup.push(c);
  placed.set(c, gi);
}));
const missing = [...all].filter(c => !placed.has(c)).sort();
const extra = [...placed.keys()].filter(c => !all.has(c)).sort();
console.log('groups:', GROUPS.length, 'total codes in data:', all.size, 'placed:', placed.size);
if (dup.length) console.log('DUPLICATE codes:', dup.join(' '));
if (missing.length) console.log('MISSING (in data, not in any group):', missing.join(' '));
if (extra.length) console.log('EXTRA (in group, not in data):', extra.join(' '));
if (dup.length || missing.length || extra.length) { console.log('FIX GROUPS BEFORE EXTRACTING'); process.exit(1); }

// ---- write slices ----
fs.mkdirSync('/tmp/langmap_slices', { recursive: true });
const pad2 = n => (n < 10 ? '0' + n : '' + n);
const fmtSegs = (arr) => (arr || []).map(([seg, txt]) => `${seg}:「${txt}」`).join(' ');

GROUPS.forEach(([theme, codes], gi) => {
  const nn = pad2(gi + 1);
  const lines = [];
  lines.push(`# LangMap data slice — Group ${nn}: ${theme}`);
  lines.push('');
  lines.push(`Languages in this group (code → name): ${codes.map(c => `${c} (${NAMES[c] || '?'})`).join(', ')}`);
  lines.push('');
  lines.push('Each sentence below shows: the English title, the **en** and **ja** reference segmentations (for alignment comparison), then each of YOUR group languages. Segments are tagged by role-letter A,B,C,… (same letter = same syntactic role / same color across languages). Format: `LETTER:「surface text」` in the order the language actually writes them.');
  lines.push('');
  S.forEach(s => {
    lines.push(`## #${s.id} — ${s.title}`);
    if (s.langs.en) lines.push(`- [en] ${fmtSegs(s.langs.en)}`);
    if (s.langs.ja) lines.push(`- [ja] ${fmtSegs(s.langs.ja)}`);
    lines.push('');
    codes.forEach(c => {
      const segs = s.langs[c];
      if (segs) lines.push(`- **[${c}]** (${NAMES[c] || '?'}) ${fmtSegs(segs)}`);
      else lines.push(`- **[${c}]** (${NAMES[c] || '?'}) ⚠️ MISSING DATA`);
    });
    lines.push('');
  });
  fs.writeFileSync(`/tmp/langmap_slices/${nn}.md`, lines.join('\n'));
});

// write the group manifest for the workflow
const manifest = GROUPS.map(([theme, codes], gi) => ({ n: gi + 1, nn: pad2(gi + 1), theme, codes }));
fs.writeFileSync('/tmp/langmap_slices/manifest.json', JSON.stringify(manifest, null, 2));
console.log('wrote', GROUPS.length, 'slices to /tmp/langmap_slices/');
const sizes = GROUPS.map((g, i) => `${pad2(i+1)}:${fs.statSync(`/tmp/langmap_slices/${pad2(i+1)}.md`).size}`);
console.log('slice byte sizes:', sizes.join(' '));
