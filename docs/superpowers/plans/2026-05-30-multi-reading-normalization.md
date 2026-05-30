# Multi-Reading Normalization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reshape `hanmap_data.js` so that the two characters with cross-language semantic polyphony in `HAN_LIST` — 行 and 中 — get split into compound IDs (`行:1`/`行:2`, `中:1`/`中:2`), and `HAN_VARIANTS` is reserved solely for within-sense polyphony (Japanese 漢音/呉音/唐音, Min Nan / Hakka / Wu 文白讀).

**Architecture:** Three sequential phases. Phase A migrates the two split chars and re-plumbs the renderer in one commit. Phase B dispatches six worktree-isolated agents in parallel — each owning a disjoint code family — to fill within-sense `HAN_VARIANTS` entries from authoritative dictionaries. Phase C is a mechanical Node script that enforces the spec's verification invariants and reports any residual primary-vs-variant drift.

**Tech Stack:** Vanilla JS (no build step), Node (for migration scripts only), git worktrees for parallel agent isolation.

**Spec:** `docs/superpowers/specs/2026-05-30-multi-reading-normalization-design.md`.

---

## File Structure

| File | Responsibility | Phase |
|---|---|---|
| `hanmap_data.js` | All data changes (HAN_LIST, HAN_DATA, HAN_VARIANTS, senseLabel) | A, B, C |
| `hanmap.html` | Renderer changes for compound IDs (char button, modal, markers, hash, compare table) | A |
| `tmp/phase_a_audit.js` | One-shot Node script that captures current 行/中 state for migration | A |
| `tmp/phase_a_migrate.js` | One-shot Node script that performs the data transformation | A |
| `tmp/phase_c_verify.js` | One-shot Node script that runs the invariant checks | C |

`tmp/*.js` files are throwaway — added to `.gitignore` or deleted before each phase's final commit.

---

## Pre-flight

### Task 0: Capture current state

**Files:**
- Create: `tmp/phase_a_audit.js`

- [ ] **Step 1: Write the audit script**

```javascript
// tmp/phase_a_audit.js
const m = require('../hanmap_data.js');
const out = {};
for (const ch of ['行', '中']) {
  out[ch] = {
    han_list_index: m.HAN_LIST.indexOf(ch),
    surface: m.HAN_DATA[ch].surface,
    ipa: m.HAN_DATA[ch].ipa,
    native: m.HAN_DATA[ch].native,
    variants: m.HAN_VARIANTS[ch] || null,
  };
}
require('fs').writeFileSync(
  '/tmp/phase_a_before.json',
  JSON.stringify(out, null, 2)
);
console.log('captured to /tmp/phase_a_before.json');
console.log('HAN_LIST length:', m.HAN_LIST.length);
console.log('HAN_LANGS length:', m.HAN_LANGS.length);
```

- [ ] **Step 2: Run it**

Run: `node tmp/phase_a_audit.js`
Expected output: `captured to /tmp/phase_a_before.json` + `HAN_LIST length: 59` + `HAN_LANGS length: 101`.

- [ ] **Step 3: Sanity-eyeball the JSON**

Run: `node -e "const d = require('/tmp/phase_a_before.json'); console.log('行 surface codes:', Object.keys(d['行'].surface).length); console.log('行 variants codes:', d['行'].variants ? Object.keys(d['行'].variants).length : 0); console.log('中 surface codes:', Object.keys(d['中'].surface).length);"`
Expected: 行 surface ~101, 行 variants ~1-3, 中 surface ~101.

- [ ] **Step 4: Commit nothing yet**

The audit JSON lives in `/tmp` — not in repo. Move on.

---

## Phase A: Sense-Split + UI Plumbing

### Task 1: Build the sense-label i18n table

**Files:**
- Modify: `hanmap_data.js` — append a `HAN_SENSE_LABELS` exported object after `HAN_VARIANTS`. The renderer will look this up to localise the sense badge.

- [ ] **Step 1: Add the export block at the bottom of hanmap_data.js (before any `module.exports`/closing bracket)**

```javascript
const HAN_SENSE_LABELS = {
  "行:1": {
    sense: "行為",
    en: "go / behave (行為)",
    ja: "行為",
    ko: "행위",
    zh: "行为",
    yue: "行為",
    vi: "Hành (行為)",
    th: "การกระทำ (行為)",
    id: "Tindakan (行為)",
    hi: "क्रिया (行為)",
    de: "Tat (行為)",
    fr: "Acte (行為)",
    it: "Atto (行為)",
    es: "Acto (行為)",
    pt: "Ato (行為)",
    ru: "Действие (行為)",
    uk: "Дія (行為)",
    ar: "فعل (行為)",
    he: "פעולה (行為)",
    sw: "Tendo (行為)",
  },
  "行:2": {
    sense: "行列",
    en: "row / column (行列)",
    ja: "行列",
    ko: "항렬",
    zh: "行列",
    yue: "行列",
    vi: "Hàng (行列)",
    th: "แถว (行列)",
    id: "Barisan (行列)",
    hi: "पंक्ति (行列)",
    de: "Reihe (行列)",
    fr: "Rangée (行列)",
    it: "Fila (行列)",
    es: "Fila (行列)",
    pt: "Fileira (行列)",
    ru: "Ряд (行列)",
    uk: "Ряд (行列)",
    ar: "صف (行列)",
    he: "טור (行列)",
    sw: "Safu (行列)",
  },
  "中:1": {
    sense: "中央",
    en: "centre / middle (中央)",
    ja: "中央",
    ko: "중앙",
    zh: "中央",
    yue: "中央",
    vi: "Trung (中央)",
    th: "ตรงกลาง (中央)",
    id: "Tengah (中央)",
    hi: "केंद्र (中央)",
    de: "Mitte (中央)",
    fr: "Centre (中央)",
    it: "Centro (中央)",
    es: "Centro (中央)",
    pt: "Centro (中央)",
    ru: "Центр (中央)",
    uk: "Центр (中央)",
    ar: "مركز (中央)",
    he: "מרכז (中央)",
    sw: "Katikati (中央)",
  },
  "中:2": {
    sense: "命中",
    en: "hit / strike (命中)",
    ja: "命中",
    ko: "맞다",
    zh: "命中",
    yue: "命中",
    vi: "Trúng (命中)",
    th: "ถูก (命中)",
    id: "Mengena (命中)",
    hi: "लगना (命中)",
    de: "Treffen (命中)",
    fr: "Toucher (命中)",
    it: "Colpire (命中)",
    es: "Acertar (命中)",
    pt: "Acertar (命中)",
    ru: "Попасть (命中)",
    uk: "Влучити (命中)",
    ar: "إصابة (命中)",
    he: "פגיעה (命中)",
    sw: "Kupiga (命中)",
  },
};

// Re-export at the existing module-style block (or as a window global,
// matching the file's existing pattern). Search for "HAN_VARIANTS" near
// the end of file; add HAN_SENSE_LABELS alongside in the same exports.
```

- [ ] **Step 2: Re-run node parse to confirm syntax**

Run: `node --check hanmap_data.js`
Expected: silent (no output) = OK.

- [ ] **Step 3: Verify export visibility**

Run: `node -e "const m=require('./hanmap_data.js'); console.log(typeof m.HAN_SENSE_LABELS, Object.keys(m.HAN_SENSE_LABELS || {}));"`
Expected: `object [ '行:1', '行:2', '中:1', '中:2' ]`.

- [ ] **Step 4: Commit**

```bash
git add hanmap_data.js
git commit -m "Hanmap: add HAN_SENSE_LABELS i18n for sense-split (行/中)"
```

---

### Task 2: Write the migration script for 行

**Files:**
- Create: `tmp/phase_a_migrate.js`

- [ ] **Step 1: Write the migration script — 行 portion**

```javascript
// tmp/phase_a_migrate.js
const fs = require('fs');
let src = fs.readFileSync('hanmap_data.js', 'utf8');

// ===================================================================
// 行 split: 行為 (xíng-class) and 行列 (háng-class)
// ===================================================================
// Authoritative mapping per code. Where 1 reading per sense:
//   primary populated; HAN_VARIANTS empty.
// Where multiple within-sense readings exist (ja 漢音/呉音, nan 文白):
//   primary null; HAN_VARIANTS populated.

const xing_data = {
  // Modern Mandarin family — single reading per sense
  surface: {
    zh: "xíng",
    zh_db: "xing²⁴", zh_sc: "xin²¹", zh_cd: "xin²¹", zh_cq: "xin²¹",
    zh_xa: "xin²⁴", zh_jn: "xing⁴²", zh_jiao: "xing⁴²", zh_kf: "xing⁴²",
    zh_km: "xin⁴²", zh_lz: "xin¹³", zh_nj: "xin³⁵", zh_jh: "xing¹³",
    zh_hf: "xing⁵⁵", zh_tj: "xing⁴⁵", zh_wh: "xin²¹³", zh_zz: "xing⁴²",
    zh_gl: "xing³¹",
    // Cantonese family
    yue: "hang4", yue_hk: "hang4", yue_mo: "hang4", yue_gz: "hang4",
    yue_dg: "hang4", yue_ts: "hang4", yue_zs: "hang4", yue_nn: "hang4",
    yue_us: "hang4",
    // Korean (haeng — 행)
    ko: "haeng", ko_kp: "haeng", ko_zai: "haeng", ko_bus: "haengH",
    ko_hun: "danida", ko_mid: "hʌ̄jŋ",
    // Vietnamese
    vi: "hành", vi_c: "hành", vi_s: "hành", vi_han: "hành",
    vi_nom: "đi", vi_ohan: "haŋ",
    // Japanese: keep primary empty — HAN_VARIANTS for 漢音 kō / 呉音 gyō / 訓 iku
  },
  ipa: {
    // Match each surface; for codes where you already know the IPA verbatim,
    // copy from /tmp/phase_a_before.json. For the rest, regenerate from
    // surface using each code's tone-to-IPA convention.
  },
  native: {
    // Native script for each code — typically the char 行 itself plus
    // the Hangul / Vietnamese-Nom equivalent for ko / vi_nom.
    ko: "행", ko_kp: "행", ko_zai: "행", ko_bus: "행", ko_hun: "다니다",
    ko_mid: "·ᄒᆡᇰ",
    vi_nom: "𠫾", // 行 = đi Nôm form
  },
};

// 行:1 within-sense polyphony (ja layers, nan/hak/wuu 文白)
const xing_variants = {
  ja: [
    { surface: "kō", ipa: "koː", native: "行", label: "漢音" },
    { surface: "gyō", ipa: "ɡʲoː", native: "行", label: "呉音" },
    { surface: "iku", ipa: "ikɯ", native: "行く", label: "訓読み" },
  ],
  // nan/hak/wuu fills happen in Phase B.
};

// (Repeat similar blocks for 行列 / 中央 / 命中 — see Task 3, 4.)
```

- [ ] **Step 2: Eyeball a sample**

Run: `head -100 tmp/phase_a_migrate.js`
Expected: see `xing_data.surface.zh = "xíng"` and friends.

- [ ] **Step 3: No commit yet**

This is a scratch script; we run it in Task 3.

---

### Task 3: Complete the migration script — 行:2, 中:1, 中:2 + writeback

**Files:**
- Modify: `tmp/phase_a_migrate.js`

- [ ] **Step 1: Append the 行:2 block**

```javascript
const hang_data = {
  surface: {
    zh: "háng",
    zh_db: "xang²⁴", zh_sc: "xan²¹", zh_cd: "xan²¹", zh_cq: "xan²¹",
    zh_xa: "xan²⁴", zh_jn: "xang⁴²", zh_jiao: "hang⁴²", zh_kf: "xang⁴²",
    zh_km: "xan⁴²", zh_lz: "xan¹³", zh_nj: "xan³⁵", zh_jh: "xang¹³",
    zh_hf: "xang⁵⁵", zh_tj: "xang⁴⁵", zh_wh: "xan²¹³", zh_zz: "xang⁴²",
    zh_gl: "xang³¹",
    yue: "hong4", yue_hk: "hong4", yue_mo: "hong4", yue_gz: "hong4",
    yue_dg: "hong4", yue_ts: "hong4", yue_zs: "hong4", yue_nn: "hong4",
    yue_us: "hong4",
    ko: "hang", ko_kp: "hang", ko_zai: "hang", ko_bus: "hangH",
    ko_hun: "haŋnyeol", ko_mid: "hāŋ",
    vi: "hàng", vi_c: "hàng", vi_s: "hàng", vi_han: "hàng",
    vi_nom: "hàng", vi_ohan: "haŋˀ",
  },
  ipa: {/* mirror */},
  native: {
    ko: "항", ko_kp: "항", ko_zai: "항", ko_bus: "항",
    vi_nom: "行", // 行 itself in Nôm for hàng sense
  },
};
const hang_variants = {
  ja: [
    { surface: "kō", ipa: "koː", native: "行", label: "漢音" },
    { surface: "gyō", ipa: "ɡʲoː", native: "行", label: "呉音" },
  ],
};
```

- [ ] **Step 2: Append the 中:1 / 中:2 blocks similarly**

```javascript
const zhong1_data = {
  surface: {
    zh: "zhōng",
    zh_db: "zhung⁵⁵", zh_sc: "tson⁵⁵", zh_cd: "tson⁵⁵",
    zh_cq: "tson⁵⁵", zh_xa: "tson²¹", zh_jn: "tsung²¹³",
    zh_jiao: "tsung²¹³", zh_kf: "tsung²⁴", zh_km: "tsuŋ⁴⁴",
    zh_lz: "tsuŋ¹³", zh_nj: "tsung³¹", zh_jh: "tsung³³⁴",
    zh_hf: "tsung²¹², zh_tj: "tsung⁴⁵", zh_wh: "tson²¹³",
    zh_zz: "tsung²⁴", zh_gl: "tson⁴⁴",
    yue: "zung1", yue_hk: "zung1", yue_mo: "zung1", yue_gz: "zung1",
    yue_dg: "zung1", yue_ts: "zung1", yue_zs: "zung1", yue_nn: "zung1",
    yue_us: "zung1",
    ko: "jung", ko_kp: "jung", ko_zai: "t͡ɕɯɴ", ko_bus: "jungL",
    ko_hun: "gaunde", ko_mid: "·tjyúŋ",
    vi: "trung", vi_c: "trung", vi_s: "trung", vi_han: "trung",
    vi_nom: "中", vi_ohan: "ʈʊŋ",
  },
  ipa: {/* mirror */},
  native: {
    ko: "중", ko_kp: "중", ko_zai: "중", ko_bus: "중",
    ko_hun: "가운데", ko_mid: "·듀ᇰ",
  },
};
const zhong1_variants = {
  ja: [
    { surface: "chū", ipa: "t͡ɕɯː", native: "中", label: "漢音" },
    { surface: "jū", ipa: "d͡ʑɯː", native: "中", label: "呉音" },
    { surface: "naka", ipa: "naka", native: "中", label: "訓読み" },
  ],
};

const zhong2_data = {
  surface: {
    zh: "zhòng",
    // for 命中 sense — same place-of-articulation but T4 in Mandarin
    yue: "zung3", yue_hk: "zung3", yue_mo: "zung3", yue_gz: "zung3",
    yue_dg: "zung3", yue_ts: "zung3", yue_zs: "zung3", yue_nn: "zung3",
    yue_us: "zung3",
    // Korean: 中 'hit' sense is rare in modern Korean; use jung for both
    // OR mark as null for codes that don't have a separate reading.
    ko: "jung", ko_kp: "jung", ko_zai: "t͡ɕɯɴ", ko_bus: "jungL",
    vi: "trúng", vi_c: "trúng", vi_s: "trúng",
    // For codes where the language uses identical pronunciation for both
    // senses, populate with the same reading (it's still a valid data point).
  },
  ipa: {},
  native: {
    ko: "중", ko_kp: "중", ko_zai: "중", ko_bus: "중",
  },
};
const zhong2_variants = {
  ja: [
    { surface: "chū", ipa: "t͡ɕɯː", native: "中", label: "漢音" },
    { surface: "jū", ipa: "d͡ʑɯː", native: "中", label: "呉音" },
    { surface: "ataru", ipa: "atarɯ", native: "中る", label: "訓読み (動詞)" },
  ],
};
```

- [ ] **Step 3: Append the writeback logic**

```javascript
// Build the new HAN_DATA blocks
function buildBlock(idLabel, data, variants) {
  return `  ${JSON.stringify(idLabel)}: ${JSON.stringify({
    surface: data.surface,
    ipa: data.ipa,
    native: data.native,
  }, null, 4).replace(/\n/g, '\n  ')},`;
}

const newHanData = [
  buildBlock("行:1", xing_data, xing_variants),
  buildBlock("行:2", hang_data, hang_variants),
  buildBlock("中:1", zhong1_data, zhong1_variants),
  buildBlock("中:2", zhong2_data, zhong2_variants),
].join('\n');

// Update HAN_LIST: replace "行" with "行:1","行:2"; "中" with "中:1","中:2".
src = src.replace(/"行"/, '"行:1","行:2"');
src = src.replace(/"中"/, '"中:1","中:2"');

// Remove old HAN_DATA["行"] and HAN_DATA["中"] blocks
function removeBlock(s, key) {
  const i = s.indexOf(`"${key}": {`);
  if (i === -1) throw new Error('cannot locate ' + key);
  let depth = 0, j = i + 1;
  while (j < s.length) {
    if (s[j] === '{') depth++;
    else if (s[j] === '}') { depth--; if (depth < 0) break; }
    j++;
  }
  // include the trailing comma if any
  if (s[j+1] === ',') j++;
  return s.slice(0, i) + s.slice(j+1);
}
src = removeBlock(src, '行');
src = removeBlock(src, '中');

// Insert the new blocks just before the HAN_DATA closing brace.
// Locate "const HAN_DATA = {" and find its matching '};'.
const startMarker = 'const HAN_DATA = {';
const dataStart = src.indexOf(startMarker);
let depth = 0, end = dataStart + startMarker.length;
while (end < src.length) {
  if (src[end] === '{') depth++;
  else if (src[end] === '}') { if (depth === 0) break; depth--; }
  end++;
}
src = src.slice(0, end) + '\n' + newHanData + '\n' + src.slice(end);

// HAN_VARIANTS edits: drop the old "行" / "中" entries, add per-sense entries.
src = removeBlock(src, '行', 'HAN_VARIANTS');
src = removeBlock(src, '中', 'HAN_VARIANTS');
// Insert HAN_VARIANTS["行:1"] etc. via the same template

fs.writeFileSync('hanmap_data.js', src);
console.log('migration written');
```

- [ ] **Step 4: Run it**

Run: `node tmp/phase_a_migrate.js`
Expected: `migration written` and the file changes on disk.

- [ ] **Step 5: Sanity parse**

Run: `node --check hanmap_data.js`
Expected: silent.

- [ ] **Step 6: Quick eyeball**

Run: `node -e "const m=require('./hanmap_data.js'); console.log('HAN_LIST len:', m.HAN_LIST.length, '行 in list:', m.HAN_LIST.includes('行'), '行:1 in list:', m.HAN_LIST.includes('行:1')); console.log('行:1 zh:', m.HAN_DATA['行:1'].surface.zh); console.log('行:2 zh:', m.HAN_DATA['行:2'].surface.zh);"`
Expected: `HAN_LIST len: 61 行 in list: false 行:1 in list: true 行:1 zh: xíng 行:2 zh: háng`.

- [ ] **Step 7: Do NOT commit yet — UI edits come next**

---

### Task 4: Add the senseSplit utility in hanmap.html

**Files:**
- Modify: `hanmap.html` — add a small utility block at the top of the first inline `<script>` (search for `var WORDS = window.WORDS`; insert just before it).

- [ ] **Step 1: Insert the utility**

```javascript
// ============================================================
// senseSplit utility — handle compound IDs like "行:1"
// id is the full string in HAN_LIST; the ':<sense>' suffix is
// the disambiguation index. Renderer display strips the suffix.
// ============================================================
function senseSplitId(id) {
  if (typeof id !== 'string') return { char: id, senseIdx: null };
  const i = id.indexOf(':');
  if (i === -1) return { char: id, senseIdx: null };
  return { char: id.slice(0, i), senseIdx: id.slice(i + 1) };
}
function displayCharOf(id)   { return senseSplitId(id).char; }
function senseBadgeOf(id)    { return senseSplitId(id).senseIdx; }
function senseLabelOf(id, uiLang) {
  if (typeof HAN_SENSE_LABELS === 'undefined') return '';
  const entry = HAN_SENSE_LABELS[id];
  if (!entry) return '';
  const lang = (uiLang || 'en').split('_')[0];
  return entry[lang] || entry.en || entry.ja || entry.sense || '';
}
```

- [ ] **Step 2: Parse**

Run:
```bash
node -e "
const fs = require('fs');
const html = fs.readFileSync('hanmap.html', 'utf8');
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
let i = 0;
for (const s of scripts) { try { new Function(s[1]); } catch (e) { console.log('script ' + i + ':', e.message); break; } i++; }
console.log('parsed', scripts.length);
"
```
Expected: `parsed 13` (no errors).

---

### Task 5: Update char button (#char-current-btn) to show display char + sense badge

**Files:**
- Modify: `hanmap.html` — locate the `function setChar(ch)` definition (around line 4701). Update the line `btn.textContent = ch;`.

- [ ] **Step 1: Modify setChar so the button shows `行 ¹` style**

Replace:
```javascript
btn.textContent = ch;
```
With:
```javascript
const {char: cChar, senseIdx: cSense} = senseSplitId(ch);
btn.innerHTML = escapeHtml(cChar) +
  (cSense ? '<sup style="font-size:0.45em;font-weight:600;color:#c0392b;margin-left:2px">' + escapeHtml(cSense) + '</sup>' : '');
btn.title = senseLabelOf(ch, uiLang) || ch;
```

- [ ] **Step 2: Run inline-script parse**

Same command as Task 4 Step 2. Expected: silent.

---

### Task 6: Update buildModal so multi-sense chars render as sub-tiles

**Files:**
- Modify: `hanmap.html` — locate `function buildModal()` (around line 4719). Inside the per-char loop, add the sense-aware rendering.

- [ ] **Step 1: Modify buildModal to render sense subtiles**

Locate the loop body for `for (const ch of cat.chars)`. Wrap the per-char div construction so multi-sense (`includes(':')`) IDs render with the sense label below the char:

```javascript
for (const ch of cat.chars) {
  const tile = document.createElement('button');
  tile.type = 'button';
  tile.className = 'char-tile';
  const {char, senseIdx} = senseSplitId(ch);
  const senseTxt = senseLabelOf(ch, uiLang);
  tile.innerHTML = '<span class="char-tile-char">' + escapeHtml(char) +
    (senseIdx ? '<sup style="font-size:0.45em;color:#c0392b">' + escapeHtml(senseIdx) + '</sup>' : '') +
    '</span>' +
    (senseTxt ? '<span class="char-tile-sense" style="display:block;font-size:10px;color:#666">' + escapeHtml(senseTxt) + '</span>' : '');
  tile.dataset.charId = ch;
  tile.addEventListener('click', () => { setChar(ch); close(); });
  grid.appendChild(tile);
}
```

- [ ] **Step 2: Confirm `HAN_CATEGORIES` lists 行:1, 行:2 etc.**

`HAN_CATEGORIES` is defined in `hanmap_data.js` and lists chars per category. The migration in Task 3 must update it; verify:

Run: `node -e "const m=require('./hanmap_data.js'); for (const c of m.HAN_CATEGORIES) console.log(c.key, c.chars.includes('行:1'), c.chars.includes('行'));"`
Expected: at least one category prints `行:1 true ... 行 false`.

If not, hand-edit `HAN_CATEGORIES` in `hanmap_data.js`: any list that has `"行"` should be `["行:1","行:2", ...]` (similar for 中). Same Node-style replace as in Task 3 Step 3.

---

### Task 7: Map markers — strip the `:N` suffix for label rendering

**Files:**
- Modify: `hanmap.html` — locate `hanmapShortLabel(...)` (around line 3460) and `buildLabelHtml(...)` (around line 5789).

- [ ] **Step 1: At the top of hanmapShortLabel, normalise the input**

Insert as first line:
```javascript
ch = displayCharOf(ch);
```

- [ ] **Step 2: Same for buildLabelHtml**

If `buildLabelHtml` takes a `word` / `id` parameter, normalise it once at the top:
```javascript
const displayWord = displayCharOf(currentWord);
```
Then use `displayWord` where the function previously interpolated `currentWord` in label text. Leave the data-lookup paths (`HAN_DATA[currentWord]`, `HAN_VARIANTS[currentWord]`) using the original `currentWord` so they still hit the compound-ID keys.

- [ ] **Step 3: Inline-script parse**

Same command as Task 4 Step 2.

---

### Task 8: URL hash — write/read the compound ID

**Files:**
- Modify: `hanmap.html` — locate `updateHash(...)` and the hash-read inside `loadHashWord`/init.

- [ ] **Step 1: Verify the existing hash logic uses the full ID**

`updateHash` already sets `?w=${currentWord}`; for `currentWord === '行:1'` this becomes `?w=行:1`. URL encoding handles `:` automatically.

The reader path needs no change UNLESS it does `decodeURIComponent` + indexes into `HAN_DATA[ch]`. Spot-check by running the page in a browser, setting char to 行:1, and confirming `location.hash === '#w=%E8%A1%8C%3A1'` (or similar — `行` is %E8%A1%8C, `:` is %3A).

- [ ] **Step 2: If the hash reader strips `:` use displayCharOf instead**

Search hanmap.html for `currentWord = params.get('w')` or similar; ensure no code mutates the value. If something does, wrap with displayCharOf only for display, not for state.

---

### Task 9: Compare table — sense column

**Files:**
- Modify: `hanmap.html` — locate `function renderCompare()` (around line 8779).

- [ ] **Step 1: Update the row label to include sense**

Find where the row builds `'<tr><th scope="row">' + escapeHtml(conceptLabel) + '</th>'`. If `conceptLabel` is the char/ID, change to:
```javascript
const baseChar = displayCharOf(conceptLabel);
const senseTxt = senseLabelOf(conceptLabel, uiLang);
const labelHtml = escapeHtml(baseChar) +
  (senseTxt ? ' <span style="font-size:10px;color:#666">(' + escapeHtml(senseTxt) + ')</span>' : '');
html += '<tr><th scope="row">' + labelHtml + '</th>';
```

- [ ] **Step 2: Inline-script parse**

Same as Task 4 Step 2.

---

### Task 10: Phase A smoke test — local server browser check

**Files:**
- None (manual test)

- [ ] **Step 1: Bump cache versions**

```bash
sed -i 's/hanmap_data.js?v=47/hanmap_data.js?v=48/' hanmap.html
```

- [ ] **Step 2: Open in browser**

Open `http://localhost:8000/hanmap.html` (hard refresh).
Expected manual checks:
- Char button shows e.g. `行 ¹` with red superscript.
- Char selector modal: 行 row now has 行:1 行為 + 行:2 行列 sub-tiles.
- Click 行:2; map markers update with háng-class readings.
- Hash updates to `?w=行:2`.
- Compare modal: 行:1 and 行:2 appear as separate rows when both are in compare list.

- [ ] **Step 3: Commit Phase A**

```bash
git add hanmap_data.js hanmap.html
git rm -f tmp/phase_a_*.js 2>/dev/null || true
git commit -m "Hanmap Phase A: sense-split 行/中 into compound IDs + UI plumbing"
```

---

## Phase B: Within-sense Polyphony Fill (Parallel Agents)

### Task 11: Dispatch Worker 1 — zh fleet

**Files:**
- (worker creates worktree; modifies `hanmap_data.js` only)

- [ ] **Step 1: Dispatch the agent**

Use the Agent tool with isolation worktree branched from `develop` HEAD. Brief:

> Scope: codes zh, zh_db, zh_cd, zh_cq, zh_xa, zh_jn, zh_jiao, zh_kf, zh_km, zh_lz, zh_nj, zh_jh, zh_hf, zh_sc, zh_tj, zh_wh, zh_zz, zh_gl, zh_yuan, zh_phagspa, zh_han, zh_song, zh_tang, zh_kanbun, zh_th, zh_us.
>
> Task: for each (id, code) in (HAN_LIST × your codes), look up Wiktionary (and 漢字古今音資料庫 for archaic codes) for within-sense polyphony. If a single sense legitimately has multiple readings (rare in Mandarin after sense-split, but exists for zh_song/zh_tang/zh_yuan), populate `HAN_VARIANTS[id][code] = [{surface, ipa, native, label}, ...]` and set `HAN_DATA[id].surface[code] = null`, `.ipa[code] = null`, `.native[code] = null`. Labels use the convention table from the spec — pinyin string for modern Mandarin, reconstructed romanization for historical.
>
> Do NOT touch other codes. Do NOT invent variants. Run `node --check hanmap_data.js` before committing. Commit on the worktree branch with `Hanmap Phase B (zh fleet): within-sense variants`.

- [ ] **Step 2: Wait for completion notification**

When the agent returns the commit hash, proceed.

- [ ] **Step 3: Cherry-pick onto develop**

```bash
git checkout develop
git cherry-pick <commit-hash>
```

Resolve any merge conflicts by taking the union of `HAN_VARIANTS[id]` code keys.

- [ ] **Step 4: Run check**

```bash
node --check hanmap_data.js
```
Expected: silent.

---

### Task 12: Dispatch Worker 2 — yue fleet

Same shape as Task 11, with codes: yue, yue_hk, yue_mo, yue_gz, yue_dg, yue_ts, yue_zs, yue_nn, yue_us. Reference: 粵典, 廣州話正音字典. Label format: Jyutping string for within-sense polyphony.

- [ ] **Step 1: Dispatch**, **Step 2: Wait**, **Step 3: Cherry-pick**, **Step 4: Parse-check**.

---

### Task 13: Dispatch Worker 3 — Min Nan family + Eastern Min + Pu-Xian

Codes: nan, nan_xm, nan_qz, nan_zz, nan_pn, nan_te, nan_hai, nan_th, nan_my, nan_sg, nan_id, nan_pera, cdo, mnp, cpx.

Reference: 教育部臺灣閩南語常用詞辭典 (for nan_*), 福州方言字典 (for cdo), 莆田方言研究 (for cpx).
Label format: `文讀` / `白讀` per the 文白異讀 tradition.

- [ ] **Step 1: Dispatch**, **Step 2: Wait**, **Step 3: Cherry-pick**, **Step 4: Parse-check**.

---

### Task 14: Dispatch Worker 4 — Hakka + Wu

Codes: hak_cn, hak_tw, hak_hl, hak_mz; wuu, wuu_hz, wuu_jx, wuu_jh, wuu_sz, wuu_nb, wuu_wz.

Reference: 客家語拼音方案 dictionary, 鍾榮富『客家方言研究』; 上海話注拼方案, 錢乃榮『現代吳語的研究』.
Label format: `文讀` / `白讀`.

- [ ] **Step 1: Dispatch**, **Step 2: Wait**, **Step 3: Cherry-pick**, **Step 4: Parse-check**.

---

### Task 15: Dispatch Worker 5 — ko / ja / vi

Codes: ko, ko_kp, ko_zai, ko_bus, ko_hun, ko_mid; ja, ja_kun, ja_ojp, ja_kgs, ja_okn, ja_thk; vi, vi_c, vi_s, vi_nom, vi_han, vi_ohan.

Reference: Daijirin / 漢字源 / Wiktionary for ja; Naver 한자사전 for ko; 漢喃辭典 + Wiktionary for vi.
Label format: ja uses `漢音/呉音/唐音/訓読み`; ko uses semantic split; vi uses Quốc Ngữ string.

This worker is responsible for cleaning the existing HAN_VARIANTS entries (the data shape already exists for many ja/ko chars; this worker just normalises and extends).

- [ ] **Step 1: Dispatch**, **Step 2: Wait**, **Step 3: Cherry-pick**, **Step 4: Parse-check**.

---

### Task 16: Dispatch Worker 6 — Other Sinitic + non-Sinitic + proto

Codes: cjy, gan, hsn, cnp, czh; mnc, sjo, txg, juc, zkt, za, bca, dng, bo_sino; all `p*` proto codes (pja, pko, ptb, ptung, paa, ptai, pmgl, phm, pst).

Reference: Wiktionary, 漢字古今音資料庫, Sagart/Baxter Old Chinese reconstructions for proto.
Most non-Sinitic codes give one reading per char — expect minimal additions.

- [ ] **Step 1: Dispatch**, **Step 2: Wait**, **Step 3: Cherry-pick**, **Step 4: Parse-check**.

---

## Phase C: Mechanical Cleanup

### Task 17: Write Phase C verification script

**Files:**
- Create: `tmp/phase_c_verify.js`

- [ ] **Step 1: Write the script**

```javascript
// tmp/phase_c_verify.js
const m = require('../hanmap_data.js');
const assert = require('assert');

console.log('--- Invariant 1: no primary lingering when HAN_VARIANTS exists ---');
let dirty = 0;
for (const id of m.HAN_LIST) {
  for (const code of m.HAN_LANGS) {
    if (m.HAN_VARIANTS[id]?.[code]?.length > 0) {
      const s = m.HAN_DATA[id].surface?.[code];
      const ipa = m.HAN_DATA[id].ipa?.[code];
      if (s || ipa) {
        console.log('  DIRTY:', id, code, 'primary surface=' + s, 'ipa=' + ipa);
        dirty++;
      }
    }
  }
}
console.log('total dirty:', dirty);

console.log('--- Invariant 2: HAN_LANGS / HAN_LIST sizes ---');
assert.strictEqual(m.HAN_LANGS.length, 101, 'HAN_LANGS not 101');
assert.strictEqual(m.HAN_LIST.length, 61, 'HAN_LIST not 61');
console.log('  ok');

console.log('--- Invariant 3: compound IDs exist; bare 行/中 do not ---');
assert(m.HAN_LIST.includes('行:1'));
assert(m.HAN_LIST.includes('行:2'));
assert(m.HAN_LIST.includes('中:1'));
assert(m.HAN_LIST.includes('中:2'));
assert(!m.HAN_LIST.includes('行'));
assert(!m.HAN_LIST.includes('中'));
console.log('  ok');

console.log('--- Invariant 4: every variant entry has a label ---');
let unlab = 0;
for (const id of Object.keys(m.HAN_VARIANTS)) {
  for (const code of Object.keys(m.HAN_VARIANTS[id])) {
    for (const v of m.HAN_VARIANTS[id][code]) {
      if (typeof v.label !== 'string' || !v.label.length) {
        console.log('  UNLABELED:', id, code, JSON.stringify(v));
        unlab++;
      }
    }
  }
}
console.log('total unlabeled:', unlab);

console.log('--- Invariant 5: every compound ID has a senseLabel.ja ---');
let missLabel = 0;
for (const id of m.HAN_LIST) {
  if (id.includes(':') && typeof m.HAN_SENSE_LABELS?.[id]?.ja !== 'string') {
    console.log('  MISSING senseLabel:', id);
    missLabel++;
  }
}
console.log('total missing senseLabel:', missLabel);

process.exit(dirty + unlab + missLabel > 0 ? 1 : 0);
```

- [ ] **Step 2: Run it**

Run: `node tmp/phase_c_verify.js`
Expected: all `ok` lines, all `total: 0`, exit code 0.

- [ ] **Step 3: If `dirty > 0`, auto-clean**

For each `DIRTY` row printed, edit `hanmap_data.js` to set `HAN_DATA[id].surface[code] = undefined` (or remove the key) so the primary doesn't leak. Re-run.

- [ ] **Step 4: If `unlab > 0`, hand-label**

Add the missing label to each variant entry. Re-run.

---

### Task 18: Bump cache + commit Phase C

**Files:**
- Modify: `hanmap.html` (cache version)

- [ ] **Step 1: Bump cache**

```bash
sed -i 's/hanmap_data.js?v=48/hanmap_data.js?v=49/' hanmap.html
```

- [ ] **Step 2: Remove tmp scripts**

```bash
git rm -f tmp/phase_*.js 2>/dev/null || true
```

- [ ] **Step 3: Final invariant run + browser sanity**

```bash
node tmp/phase_c_verify.js
```
Expected: exit code 0.

Manual: open `http://localhost:8000/hanmap.html?v=49`; verify 行:1/2, 中:1/2 render correctly across map, modal, compare.

- [ ] **Step 4: Commit**

```bash
git add hanmap.html hanmap_data.js
git commit -m "Hanmap Phase C: invariant cleanup + cache v48→v49"
```

---

### Task 19: Update HAN_LANGS count strings if any UI labels say "60 chars"

**Files:**
- Modify: `hanmap.html` — search for `60 chars` / `59 chars` / `59 characters` / `60 characters`.

- [ ] **Step 1: Grep**

```bash
grep -nE '5[0-9] (chars|文字|characters|개|字)' hanmap.html
```

- [ ] **Step 2: Update each match to `61` where the context is total chars in HAN_LIST**

(Likely only 1–2 strings, in `<title>` and og:description.)

- [ ] **Step 3: Commit**

```bash
git add hanmap.html
git commit -m "Hanmap: bump char count strings 59 → 61 (post sense-split)"
```

---

### Task 20: Final merge to main (only on user request)

Per the user's standing feedback, do NOT auto-merge develop → main. Surface the develop state and wait for the user's "main にマージ" instruction.

- [ ] **Step 1: Surface state**

Run:
```bash
git log --oneline main..develop
echo "commits ahead of main:"
git rev-list --count main..develop
```

- [ ] **Step 2: Tell user the plan landed**

Output the commit list and wait. No merge.

---

## Notes for the executor

- After Phase A the data file is the source of truth for `行:1` etc. Phase B agents must read from `hanmap_data.js` directly, not from any cached prior snapshot.
- If Wiktionary disagrees with the family's specialist dictionary, prefer the specialist dictionary and note the divergence in the commit message.
- The trivia file `hanmap_trivia.js` has buttons with `data-char='行'` and `data-char='中'` — leaving those buttons firing on a bare char will now no-op silently via the `setChar` guard. A follow-up patch should update them to `data-char='行:1'` (etc.) but that is out of scope for this plan.

---

## Self-review notes

Coverage walkthrough vs spec:
- Canonical storage shape (sense + within-sense) — Tasks 1, 3, 11–16, 17.
- Label conventions — Task 17 invariant 4 + worker briefs (Tasks 11–16).
- UI changes — Tasks 4–9.
- Phase A/B/C structure — Tasks 1–10 / 11–16 / 17–19.
- Verification invariants — Task 17.
- Out-of-scope (上, 見 etc.) — respected; not in any task.
- Follow-up (Taiwan Mandarin) — explicitly deferred per spec; no task.
