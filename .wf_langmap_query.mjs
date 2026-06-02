// Read live alignment cells from data.js without loading the whole file into an LLM.
// Usage:
//   node .wf_langmap_query.mjs <id> <lang> [<lang> ...]      -> show those langs for sentence id
//   node .wf_langmap_query.mjs <id>                          -> show ALL langs for sentence id (+title)
//   node .wf_langmap_query.mjs title <id>                    -> show just the title
import fs from 'fs';
eval(fs.readFileSync(new URL('./data.js', import.meta.url), 'utf8').replace('const SENTENCES', 'globalThis.SENTENCES'));
const S = globalThis.SENTENCES;
const byId = new Map(); S.forEach(s => byId.set(String(s.id), s));
const a = process.argv.slice(2);
if (a[0] === 'title') { const s = byId.get(a[1]); console.log(s ? `#${s.id} ${s.title}` : 'not found'); process.exit(0); }
const id = a[0]; const s = byId.get(id);
if (!s) { console.log('sentence not found:', id); process.exit(1); }
console.log(`#${s.id} ${s.title}`);
const langs = a.length > 1 ? a.slice(1) : Object.keys(s.langs);
for (const L of langs) {
  const arr = s.langs[L];
  if (!arr) { console.log(`  [${L}] MISSING`); continue; }
  console.log(`  [${L}] ` + arr.map(p => `${p[0]}:「${p[1]}」`).join(' '));
}
