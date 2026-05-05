#!/usr/bin/env node
/**
 * validate_wordmap_data.js — static checker for the Word Map data layer.
 *
 * Run:
 *   node validate_wordmap_data.js
 * or: bun validate_wordmap_data.js
 *
 * Checks (per wordmap-check.md §2):
 *   1. WORD_LIST has 20 entries
 *   2. Every LANG_DATA[code].words contains every WORD_LIST id
 *   3. Each word entry is a 2-element [surface, ipa] array of strings
 *   4. surface or ipa equal to "—" → INFO if both (explicit unattested in
 *      historical lang); ERROR if modern lang or one-sided dash
 *   5. lat/lng are finite numbers in valid ranges
 *   6. Duplicate exact (lat,lng) pairs → info (often expected for parent/dialect)
 *   7. Every LANG_DATA code has a meta entry in wordmap_meta.js
 *   8. No code has duplicate meta assignments (silent overwrites)
 *   9. EXCLUDED_CODES ⊇ HIST_DESCENDANT keys (historical langs are excluded)
 *  10. Every meta.speakers is parseable into a tier (or known annotation)
 *  11. meta.family / meta.script top-level tokens are in an allow-list
 *  12. README/HTML lang count matches actual LANG_DATA count
 *  13. No code is defined twice in LANG_DATA source (silent JS overwrite — audit §6.28)
 *  14. 3+ codes sharing one (lat,lng) — flag as warning unless historical-progression cluster (audit §7.6)
 *  15. Same (name, lat, lng) under different codes — likely ISO code conflict (Session 8 mon/mnw)
 *  16. HIST_DESCENDANT codes must have DATA_STATUS_OVERRIDES entry (Session 27 invariant)
 *  17. DATA_STATUS_OVERRIDES (non-modern) → must be in HIST_DESCENDANT (Session 29 inverse)
 *
 * Allowlist: ALLOWLIST (top of file) suppresses known WARN/ERROR messages
 * by substring match, downgrading them to INFO with [allowlisted] reason+ref.
 * Use this for issues intentionally deferred (e.g., needs linguist consultation).
 *   - `match` accepts a string or string[] (any matches → fires).
 *   - `created: 'YYYY-MM-DD'` records when the entry was added (age tracking).
 *   - `expires: 'YYYY-MM-DD'` re-promotes the entry to WARN/ERROR after the
 *     date passes; within EXPIRES_LEAD_DAYS adds a ⚠ "N days left" note.
 *   - Unused entries (no match fires) listed under UNUSED ALLOWLIST ENTRIES.
 *   - Entries 1+ year old surfaced in INFOS as long-standing tech debt.
 *
 * Exit code: 0 on no errors (warnings allowed), 1 on errors.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.dirname(__filename);
const read = p => fs.readFileSync(path.join(ROOT, p), 'utf8');

// ---- Load source files into a single sandbox ----------------------------
const dataSrc = read('wordmap_data.js');
const metaSrc = read('wordmap_meta.js');
const htmlSrc = read('wordmap.html');
const readmeSrc = read('README.md');

// Strip the lazy-loader window assignments at end of meta_js so we can eval
const metaSrcStripped = metaSrc
    .replace(/window\._wmMetaLoaded\s*=\s*true\s*;?/g, '')
    .replace(/if\s*\(\s*window\._wmMetaResolve\s*\)[^\n]*/g, '');

// Use vm module so const/let bindings stick on the context object,
// then we can read them as ctx.LANG_DATA etc.
const vm = require('vm');
const ctx = { window: {}, document: { createElement: () => ({}) } };
vm.createContext(ctx);
vm.runInContext(dataSrc + '\n;this.LANG_DATA=LANG_DATA;this.EXCLUDED_CODES=EXCLUDED_CODES;this.WORD_LIST=WORD_LIST;this.WM_UI_LABELS=WM_UI_LABELS;this.WM_UI=WM_UI;this.DATA_STATUS_OVERRIDES=typeof DATA_STATUS_OVERRIDES!==\'undefined\'?DATA_STATUS_OVERRIDES:undefined;', ctx);
vm.runInContext(metaSrcStripped, ctx);
// Load lang_names.js if present
let LANG_NAMES = null;
try {
    const langNamesSrc = read('lang_names.js');
    vm.runInContext(langNamesSrc + ';this.LANG_NAMES=LANG_NAMES;', ctx);
    LANG_NAMES = ctx.LANG_NAMES;
} catch (e) {
    // lang_names.js may not exist in older trees
}

// HIST_DESCENDANT is in wordmap.html; pull it out by regex
const histMatch = htmlSrc.match(/const HIST_DESCENDANT\s*=\s*\{([\s\S]*?)\n\s*\};/);
if (!histMatch) { console.error('FATAL: could not locate HIST_DESCENDANT'); process.exit(2); }
// Match real keys (lowercase letters/underscores/digits, must be quoted-style key)
// and skip comment lines
const HIST_BODY = histMatch[1].split('\n').filter(l => !l.trim().startsWith('//')).join('\n');
const HIST_KEYS = [...HIST_BODY.matchAll(/(?:^|[\s,{])([a-z][a-z_0-9]*)\s*:/g)].map(m => m[1]);
const HIST_SET = new Set(HIST_KEYS);

// === Allowlist of known WARN/ERROR messages that are deliberately deferred ===
// Each entry:
//   - match:   substring match against the message. Either a string or an array
//              of strings (any one matches → entry fires; useful for grouping
//              related messages from the same root cause).
//   - reason:  why this is intentionally suppressed
//   - ref:     audit/session reference for context
//   - created: ISO date (YYYY-MM-DD) when the entry was added; used to track
//              age of unresolved tech debt (validator INFO summarises ages).
//   - expires: ISO date (YYYY-MM-DD); past this date, the entry is treated as
//              EXPIRED and the underlying WARN/ERROR is re-promoted (forces
//              periodic review). Entries with no expires field never expire.
//              When within EXPIRES_LEAD_DAYS of expiry, an INFO line is added.
//
// Add an entry when you intentionally accept a known issue that needs research
// before it can be properly fixed (e.g., requires a linguist consultation).
const EXPIRES_LEAD_DAYS = 30;

const ALLOWLIST = [
    {
        match: '[mon, mnw] all map to "Mon@16.49,97.62"',
        reason: 'ISO mon=Mongolian conflict + Mon dialect data merge needs Mon-language expert (Bauer 1982 / Diffloth)',
        ref: 'audit Session 8 + 9, deferred to Session 14+',
        created: '2026-05-05',
        expires: '2027-01-01',
    },
];

const TODAY_ISO = new Date().toISOString().slice(0, 10);
const TODAY_MS = Date.parse(TODAY_ISO);
const allowlistFired = new Set();

// Normalize match field to array
function entryMatches(entry, msg) {
    const patterns = Array.isArray(entry.match) ? entry.match : [entry.match];
    return patterns.some(p => msg.includes(p));
}

function checkAllowlist(msg) {
    for (const a of ALLOWLIST) {
        if (entryMatches(a, msg)) {
            allowlistFired.add(a);
            if (a.expires && a.expires < TODAY_ISO) {
                return { ...a, _expired: true };
            }
            return a;
        }
    }
    return null;
}

function daysBetween(isoFrom, isoTo) {
    return Math.round((Date.parse(isoTo) - Date.parse(isoFrom)) / 86400000);
}

const errors = [];
const warns  = [];
const infos  = [];
const allowlisted = [];
const E = m => {
    const al = checkAllowlist(m);
    if (al && !al._expired) { allowlisted.push({msg: m, ...al}); return; }
    if (al && al._expired) {
        errors.push(m + ` [ALLOWLIST EXPIRED ${al.expires}; re-promoted to ERROR]`);
        return;
    }
    errors.push(m);
};
const W = m => {
    const al = checkAllowlist(m);
    if (al && !al._expired) { allowlisted.push({msg: m, ...al}); return; }
    if (al && al._expired) {
        warns.push(m + ` [ALLOWLIST EXPIRED ${al.expires}; re-promoted to WARN]`);
        return;
    }
    warns.push(m);
};
const I = m => infos.push(m);

// ---- 1. WORD_LIST has 20 entries ----------------------------------------
if (!Array.isArray(ctx.WORD_LIST) || ctx.WORD_LIST.length !== 20) {
    E(`WORD_LIST length ${ctx.WORD_LIST?.length} (expected 20)`);
}
const WORD_IDS = (ctx.WORD_LIST || []).map(w => w.id);

// ---- 2-4. Per-language word-entry checks --------------------------------
let dashCount = 0;
const codes = Object.keys(ctx.LANG_DATA);
for (const code of codes) {
    const lang = ctx.LANG_DATA[code];
    if (!lang.words) { E(`${code}: missing .words`); continue; }
    for (const id of WORD_IDS) {
        const e = lang.words[id];
        if (e === undefined) { E(`${code}.words.${id} missing`); continue; }
        if (!Array.isArray(e) || e.length !== 2) {
            E(`${code}.words.${id} is not [surface, ipa]: ${JSON.stringify(e)}`);
            continue;
        }
        const [surface, ipa] = e;
        if (typeof surface !== 'string' || typeof ipa !== 'string') {
            E(`${code}.words.${id} non-string: ${JSON.stringify(e)}`);
            continue;
        }
        if (surface === '—' || ipa === '—' || !surface || !ipa) dashCount++;
    }
    // 5. lat/lng
    if (!Number.isFinite(lang.lat) || lang.lat < -90 || lang.lat > 90) {
        E(`${code}: lat out of range: ${lang.lat}`);
    }
    if (!Number.isFinite(lang.lng) || lang.lng < -180 || lang.lng > 180) {
        E(`${code}: lng out of range: ${lang.lng}`);
    }
}
if (dashCount > 0) I(`${dashCount} word entries contain "—" (explicitly unattested; hidden from map labels per §3)`);

// ---- 4b. IPA field — detect non-IPA scripts (per wordmap-data-audit-1 §5.1) ----
// IPA uses Latin + Greek-letter conventions (θ β χ φ etc.). Cyrillic, Han,
// Arabic, Devanagari, etc. should NEVER appear in the IPA field. This catches
// cases like vec.house where the surface-form Cyrillic accidentally bled into
// the IPA column.
const NON_IPA_SCRIPT_RE = /[Ѐ-ӿ一-鿿぀-ゟ゠-ヿ֐-׿؀-ۿऀ-ॿঀ-৿฀-๿가-힯]/;
let nonIpaInIpaField = 0;
for (const code of codes) {
    const lang = ctx.LANG_DATA[code];
    if (!lang.words) continue;
    for (const id of WORD_IDS) {
        const e = lang.words[id];
        if (!Array.isArray(e) || e.length !== 2) continue;
        const ipa = e[1];
        if (typeof ipa !== 'string') continue;
        if (NON_IPA_SCRIPT_RE.test(ipa)) {
            E(`${code}.words.${id}: IPA field contains non-IPA script chars: ${JSON.stringify(ipa)}`);
            nonIpaInIpaField++;
        }
    }
}

// ---- 4c. Same-form/same-IPA duplicates within a language (per §4) ----
// A language using the exact same [surface, ipa] for two different concepts
// is often a copy-paste error (Palauan dog/cat both 'katuu'; Navajo eat/drink
// both 'yishą́'). Some collisions are legitimate (greetings doubling as thanks),
// so this is INFO-level — surface them for human review.
const dupForms = [];
for (const code of codes) {
    const lang = ctx.LANG_DATA[code];
    if (!lang.words) continue;
    const seen = new Map();  // "surface||ipa" → [concept]
    for (const id of WORD_IDS) {
        const e = lang.words[id];
        if (!Array.isArray(e) || e.length !== 2) continue;
        if (isUnattestedEntry(e)) continue;
        const k = e[0] + '||' + e[1];
        if (!seen.has(k)) seen.set(k, []);
        seen.get(k).push(id);
    }
    for (const [k, ids] of seen) {
        if (ids.length < 2) continue;
        dupForms.push(`${code}: ${ids.join('/')} share form ${k.split('||').map(x => JSON.stringify(x)).join(' ')}`);
    }
}
function isUnattestedEntry(entry) {
    if (!Array.isArray(entry) || entry.length !== 2) return true;
    const [w, ipa] = entry;
    return (!w || w === '—') && (!ipa || ipa === '—');
}

// ---- 6. Duplicate (lat,lng) groups --------------------------------------
const coordGroups = new Map();
for (const code of codes) {
    const lang = ctx.LANG_DATA[code];
    const k = `${lang.lat},${lang.lng}`;
    if (!coordGroups.has(k)) coordGroups.set(k, []);
    coordGroups.get(k).push(code);
}
const dupGroups = [...coordGroups.values()].filter(g => g.length > 1);
if (dupGroups.length) I(`${dupGroups.length} duplicate-coordinate groups (often expected for parent/dialect pairs)`);
// Audit §7.6: 3+ codes at one coord — usually a UI cluster issue.
// Historical-progression (parent + descendants at same city) is OK; flag the rest.
const HIST_PROGRESSION_OK = new Set(['en/en_ang/en_ck/enm', 'ko/ko_em/ko_mid']);
for (const g of dupGroups) {
    if (g.length < 3) continue;
    const key = g.slice().sort().join('/');
    if (HIST_PROGRESSION_OK.has(key)) continue;
    W(`coord cluster: ${g.length} codes at one (lat,lng): ${g.join(', ')} — consider distinct representative points`);
}

// ---- 15. Same name + same coord, different codes — likely code conflict (Session 8) ----
// Catches the mon/mnw class of bug: two LANG_DATA entries with identical
// `.name` AND identical `(lat,lng)` but distinct codes. Almost always means
// either ISO code confusion or accidental duplicate.
{
    const nameCoordGroups = new Map();
    for (const code of codes) {
        const lang = ctx.LANG_DATA[code];
        const k = `${lang.name}@${lang.lat},${lang.lng}`;
        if (!nameCoordGroups.has(k)) nameCoordGroups.set(k, []);
        nameCoordGroups.get(k).push(code);
    }
    for (const [k, group] of nameCoordGroups) {
        if (group.length < 2) continue;
        W(`same (name, lat, lng) under different codes: [${group.join(', ')}] all map to "${k}" — likely ISO code conflict or accidental duplicate (audit Session 8)`);
    }
}

// ---- 13. Source-level duplicate LANG_DATA keys (audit §6.28) -----------
// JS object literal silently overwrites earlier `code: {...}` with later `code: {...}`,
// so the validator's runtime view (codes[]) can't see the orphaned earlier entries.
// Scan source text directly. Pattern: `^  code: { name:` at column 2 (data style).
{
    const dataLineKeyRe = /^  ([\w-]+):\s*\{\s*name:/gm;
    const seen = {};
    let mm;
    while ((mm = dataLineKeyRe.exec(dataSrc)) !== null) {
        const code = mm[1];
        seen[code] = (seen[code] || 0) + 1;
    }
    const dupKeys = Object.entries(seen).filter(([, n]) => n > 1);
    for (const [c, n] of dupKeys) E(`LANG_DATA: code "${c}" defined ${n} times in source (silent JS overwrite — earlier definition is dead code)`);
}

// ---- 7. Every code has meta + 8. no duplicate meta assignments ----------
const codesWithMeta = codes.filter(c => ctx.LANG_DATA[c].meta);
const missingMeta = codes.filter(c => !ctx.LANG_DATA[c].meta);
for (const c of missingMeta) E(`${c}: no meta entry`);

// Count meta assignments. Strip line comments first (entire `// ...` lines and
// trailing `// ...` portions), then run the regex over the FULL stripped text
// — not line-by-line — so multi-line `LANG_DATA['x'] && (\n  LANG_DATA['x'].meta = {...}\n);`
// patterns are caught (per wordmap-check-2.md §3).
const metaAssignCount = {};
const stripFullLineComments = s => s.split('\n').filter(l => !l.trimStart().startsWith('//')).join('\n');
const stripTrailingLineComments = s => s.replace(/(^|[^:'"])\/\/[^\n]*$/gm, '$1');
const metaSrcForCount = stripTrailingLineComments(stripFullLineComments(metaSrcStripped));
const assignRe = /LANG_DATA\['([\w-]+)'\](?:\s*&&\s*\(\s*LANG_DATA\['\1'\])?\.meta\s*=/g;
let mm;
while ((mm = assignRe.exec(metaSrcForCount)) !== null) {
    metaAssignCount[mm[1]] = (metaAssignCount[mm[1]] || 0) + 1;
}
const dupAssign = Object.entries(metaAssignCount).filter(([, n]) => n > 1);
for (const [c, n] of dupAssign) E(`${c}: ${n} meta assignments (silent overwrite)`);

// ---- 9. EXCLUDED_CODES vs HIST_DESCENDANT -------------------------------
const histInData = HIST_KEYS.filter(c => ctx.LANG_DATA[c]);
const histNotExcl = histInData.filter(c => !ctx.EXCLUDED_CODES.has(c));
for (const c of histNotExcl) E(`${c}: in HIST_DESCENDANT but not EXCLUDED_CODES`);
// HIST entries that don't even exist in LANG_DATA (stale)
const histStale = HIST_KEYS.filter(c => !ctx.LANG_DATA[c]);
for (const c of histStale) W(`${c}: in HIST_DESCENDANT but not in LANG_DATA (stale)`);

// ---- 10. Speaker-tier parseability --------------------------------------
function parseTierLite(s) {
    if (!s) return null;
    const lower = String(s).toLowerCase();
    if (/extinct/.test(lower) && !/[\d]/.test(s)) return 'extinct';
    if (/liturgical/.test(lower) && !/[\d]/.test(s)) return 'liturgical';
    const m = String(s).match(/[\d.]+\s*[KMB]?/);
    return m ? 'numeric' : null;
}
let unparseable = 0;
for (const code of codes) {
    const m = ctx.LANG_DATA[code].meta;
    if (!m || !m.speakers) continue;
    if (!parseTierLite(m.speakers)) unparseable++;
}
if (unparseable) W(`${unparseable} meta.speakers strings cannot be parsed by lightweight tier parser`);

// ---- 11. family / script top-level allow-list ---------------------------
const FAMILY_TOP_ALLOW = new Set([
    'Indo-European','Romance','Germanic','Slavic','Celtic','Baltic','Hellenic','Italic','Anatolian','Indo-Aryan','Iranian',
    'Sino-Tibetan','Sinitic','Japonic','Koreanic','Turkic','Mongolic','Tungusic',
    'Afro-Asiatic','Semitic','Cushitic','Dravidian','Austroasiatic','Austronesian','Hmong-Mien','Kra-Dai',
    'Niger-Congo','Bantu','Nilo-Saharan','Khoisan','Khoe-Kwadi','Atlantic',
    'Uralic','Kartvelian','NE Caucasian','NW Caucasian',
    'Eskimo-Aleut','Algic','Iroquoian','Siouan','Salishan','Wakashan','Na-Dené','Muskogean','Uto-Aztecan','Oto-Manguean','Mayan','Tsimshianic',
    'Quechuan','Aymaran','Tupian','Araucanian','Arawakan','Chibchan','Chocoan','Mura',
    'Pama-Nyungan','Trans-New Guinea','Iwaidjan or unclassified',
    'Yeniseian','Chukotko-Kamchatkan','Hurro-Urartian','Meroitic',
    'Language isolate','Constructed','Creole','English-based creole','French-based creole','Iberian-based creole','Pidgin','Mixed','Proto-language',
    'Tocharian','Anatolian (Indo-European)','Indo-European (Armenian)','Indo-European (isolate branch)','Tocharian (Indo-European)',
    'Germanic (East)','Germanic (creole-influenced)',
    'Hurro-Urartian (separate from IE/Semitic)',
    'Indo-Aryan (NW, Pahari/Punjabi-related)',
    'Mongolic (Western/Oirat)',
    'Sino-Tibetan (Naic/Loloish)',
    'Proto-language (reconstructed)',
    'Austronesian (Pidgin)',
]);
const familyTopHits = {};
let familyOutsideAllow = 0;
for (const code of codes) {
    const m = ctx.LANG_DATA[code].meta;
    if (!m || !m.family) continue;
    const top = String(m.family).split('(')[0].trim();
    familyTopHits[top] = (familyTopHits[top] || 0) + 1;
    if (!FAMILY_TOP_ALLOW.has(top)) familyOutsideAllow++;
}
if (familyOutsideAllow) W(`${familyOutsideAllow} languages have meta.family with a top token outside the allow-list`);

// ---- 12. Doc-vs-data lang count -----------------------------------------
// Only check counts that are plausibly Word-Map related (within 100 of actual)
// to avoid false positives from index.html / Word Order Map mentions.
const N = codes.length;
const reN = /(\d{3,4})\s*(?:languages|言語|languages\/varieties)/g;
function checkCounts(src, where) {
    const seen = new Set();
    let m;
    while ((m = reN.exec(src)) !== null) {
        const n = +m[1];
        if (seen.has(n)) continue;
        seen.add(n);
        if (Math.abs(n - N) > 100) continue; // skip clearly different scope
        if (n !== N) W(`${where} mentions "${n} languages" but actual count is ${N}`);
    }
}
checkCounts(htmlSrc,    'wordmap.html');
checkCounts(readmeSrc,  'README.md');
const headerN = (dataSrc.match(/(\d{3,4})\s*languages/) || [])[1];
if (headerN && +headerN !== N) E(`wordmap_data.js header says ${headerN} languages, actual ${N}`);

// ---- 12b. WORD_LIST.label shape (per wordmap-check-2.md §6) ----------
// Each entry: { id, label: { en, ja, ko, zh, de, fr, ... } }
// label.en is required; label.ja/ko/zh/de/fr strongly recommended.
// 'ind' as a key is forbidden (legacy; should be 'id' Indonesian).
const wlSeenIds = new Set();
const wlMustHave = ['en', 'ja', 'ko', 'zh', 'de', 'fr'];
for (const w of (ctx.WORD_LIST || [])) {
    if (!w.id || typeof w.id !== 'string') E(`WORD_LIST: entry missing string id: ${JSON.stringify(w)}`);
    else if (wlSeenIds.has(w.id)) E(`WORD_LIST: duplicate id "${w.id}"`);
    else wlSeenIds.add(w.id);
    if (!w.label || typeof w.label !== 'object') {
        E(`WORD_LIST entry "${w.id}" missing .label object`);
        continue;
    }
    if ('ind' in w.label) E(`WORD_LIST entry "${w.id}" still uses legacy key 'ind' (use 'id' for Indonesian)`);
    for (const k of wlMustHave) {
        if (!w.label[k]) E(`WORD_LIST entry "${w.id}" missing label.${k}`);
    }
    // es_eu/es_mx fall back to es; pt_eu/pt_br fall back to pt
    if (!w.label.es && (w.label.es_eu || w.label.es_mx)) W(`WORD_LIST entry "${w.id}" has es_eu/es_mx but no base 'es' for fallback`);
    if (!w.label.pt && (w.label.pt_eu || w.label.pt_br)) W(`WORD_LIST entry "${w.id}" has pt_eu/pt_br but no base 'pt' for fallback`);
}

// ---- 12c. LANG_NAMES coverage per UI lang (per wordmap-check-2.md §4) -------
const langNamesCoverage = {};
const langNamesUis = ['en','ja','ko','zh','yue','vi','th','id','hi','de','fr','it','es_eu','es_mx','pt_eu','pt_br','ru','uk','ar','he','sw'];
if (LANG_NAMES) {
    for (const ui of langNamesUis) {
        const dict = LANG_NAMES[ui] || {};
        const present = codes.filter(c => dict[c]).length;
        langNamesCoverage[ui] = present;
        if (present < codes.length) {
            const missing = codes.filter(c => !dict[c]);
            const which = missing.slice(0, 3).join(', ') + (missing.length > 3 ? `, …${missing.length - 3} more` : '');
            W(`lang_names.${ui}: ${present}/${codes.length} (missing: ${which})`);
        }
    }
} else {
    W('lang_names.js not loaded — coverage check skipped');
}

// ---- 12d. Word-entry "—" severity split (per wordmap-check-2.md §7) ----
// modern lang + any "—" entry → ERROR
// historical lang + both "—" → OK (explicitly unattested)
// historical lang + one-sided "—" → ERROR
let modernDashErrors = 0, oneSidedDashErrors = 0;
for (const code of codes) {
    const isHist = HIST_SET.has(code);
    const lang = ctx.LANG_DATA[code];
    for (const id of WORD_IDS) {
        const e = lang.words[id];
        if (!Array.isArray(e) || e.length !== 2) continue;
        const [w, ipa] = e;
        const isDash = v => v === '—' || v === '-' || v === '';
        const wDash = isDash(w);
        const iDash = isDash(ipa);
        if (!wDash && !iDash) continue;
        if (wDash && iDash) {
            if (!isHist) {
                E(`${code}.words.${id}: both '—' but language is modern (unattested-marker only allowed for historical)`);
                modernDashErrors++;
            }
        } else {
            E(`${code}.words.${id}: one-sided dash/empty: ${JSON.stringify(e)}`);
            oneSidedDashErrors++;
        }
    }
}

// ---- 13. Description i18n coverage (per wordmap-check.md §10) ----------
const UI_LANGS = ['en','ja','ko','zh','yue','vi','th','id','hi','de','fr','it','es_eu','es_mx','pt_eu','pt_br','ru','uk','ar','he','sw'];
const i18nCoverage = {};
for (const ui of UI_LANGS) i18nCoverage[ui] = { covered: 0, missing: [] };
for (const code of codes) {
    const m = ctx.LANG_DATA[code].meta;
    if (!m || !m.description) continue;
    if (typeof m.description !== 'object') continue; // legacy single-string desc — counts as `en` only
    for (const ui of UI_LANGS) {
        if (m.description[ui]) i18nCoverage[ui].covered++;
        else i18nCoverage[ui].missing.push(code);
    }
}
const totalDescCodes = codes.filter(c => {
    const m = ctx.LANG_DATA[c].meta;
    return m && typeof m.description === 'object';
}).length;
// Legacy string-desc count
const legacyDescCodes = codes.filter(c => {
    const m = ctx.LANG_DATA[c].meta;
    return m && typeof m.description === 'string';
}).length;
if (legacyDescCodes) W(`${legacyDescCodes} languages still have description as a string (not object) — UI lang fallback to English`);

// ---- 13b. Optional schema fields (per "all A" decision) ----------------
// New optional fields — if present, must have correct shape:
//   meta.speakerBasis : 'L1' | 'total' | 'regional-population' | 'aggregate' | 'liturgical' | 'extinct' | 'uncertain'
//   meta.speakerSource: free string (citation)
//   meta.speakerYear  : number (4-digit year)
//   meta.iso6393      : 3-letter ISO 639-3 code
//   meta.glottocode   : Glottocode (8-char)
//   meta.parentCode   : code in LANG_DATA (for varieties)
//   lang.locationBasis: 'capital' | 'prestige-center' | 'historical-site' | 'largest-city' | 'approx-region'
//   meta.sources      : Array<{ type, title, url?, accessed? }>
const SPEAKER_BASIS = new Set(['L1','total','regional-population','aggregate','liturgical','extinct','uncertain']);
const LOCATION_BASIS = new Set(['capital','prestige-center','historical-site','largest-city','approx-region']);
let withSpeakerBasis = 0, withSources = 0, withIso = 0;
for (const code of codes) {
    const lang = ctx.LANG_DATA[code];
    const m = lang.meta || {};
    if (m.speakerBasis !== undefined) {
        if (!SPEAKER_BASIS.has(m.speakerBasis)) E(`${code}: meta.speakerBasis "${m.speakerBasis}" not in enum`);
        else withSpeakerBasis++;
    }
    if (m.speakerYear !== undefined && (typeof m.speakerYear !== 'number' || m.speakerYear < 1900 || m.speakerYear > 2100)) {
        E(`${code}: meta.speakerYear "${m.speakerYear}" not a 4-digit year`);
    }
    if (m.iso6393 !== undefined) {
        if (typeof m.iso6393 !== 'string' || !/^[a-z]{3}$/.test(m.iso6393)) E(`${code}: meta.iso6393 "${m.iso6393}" not a 3-letter code`);
        else withIso++;
    }
    if (m.glottocode !== undefined && (typeof m.glottocode !== 'string' || !/^[a-z]{4}\d{4}$/.test(m.glottocode))) {
        E(`${code}: meta.glottocode "${m.glottocode}" not a Glottocode`);
    }
    if (m.parentCode !== undefined && !ctx.LANG_DATA[m.parentCode]) {
        E(`${code}: meta.parentCode "${m.parentCode}" not in LANG_DATA`);
    }
    if (m.dataStatus !== undefined) {
        const allowed = new Set(['modern','attested','fragmentary','reconstructed','undeciphered','partly-understood','pedagogical']);
        if (!allowed.has(m.dataStatus)) E(`${code}: meta.dataStatus "${m.dataStatus}" not in enum`);
    }
    if (lang.locationBasis !== undefined && !LOCATION_BASIS.has(lang.locationBasis)) {
        E(`${code}: locationBasis "${lang.locationBasis}" not in enum`);
    }
    if (m.sources !== undefined) {
        if (!Array.isArray(m.sources)) E(`${code}: meta.sources is not an array`);
        else {
            for (const s of m.sources) {
                if (!s || typeof s !== 'object' || !s.type || !s.title) {
                    E(`${code}: meta.sources entry missing type/title: ${JSON.stringify(s)}`);
                }
            }
            withSources++;
        }
    }
}

// ---- 13c. dataStatus breakdown + DATA_STATUS_OVERRIDES sanity ----------
// Per wordmap-check-3.md §11. Tally meta.dataStatus values across all
// languages, and verify every code in DATA_STATUS_OVERRIDES exists in
// LANG_DATA (a typo there silently disables the override).
const dataStatusCounts = {};
for (const code of codes) {
    const m = ctx.LANG_DATA[code].meta || {};
    const s = m.dataStatus || 'modern';  // unset = modern by default
    dataStatusCounts[s] = (dataStatusCounts[s] || 0) + 1;
}
if (typeof ctx.DATA_STATUS_OVERRIDES !== 'undefined') {
    for (const c of Object.keys(ctx.DATA_STATUS_OVERRIDES)) {
        if (!ctx.LANG_DATA[c]) E(`DATA_STATUS_OVERRIDES has code "${c}" not in LANG_DATA`);
    }
    // ---- 16. HIST_DESCENDANT codes must have DATA_STATUS_OVERRIDES entry --
    // Per Session 27: ensures historical languages don't silently default to
    // 'modern' in dataStatus stats (HIST_DESCENDANT membership doesn't auto-
    // promote). Adding a new historical lang requires explicit classification.
    const dsoKeys = new Set(Object.keys(ctx.DATA_STATUS_OVERRIDES));
    const histMissing = HIST_KEYS.filter(c => ctx.LANG_DATA[c] && !dsoKeys.has(c));
    for (const c of histMissing) {
        W(`${c}: in HIST_DESCENDANT but missing DATA_STATUS_OVERRIDES entry — ` +
          `defaults to 'modern' in stats (Session 27 normalization invariant)`);
    }
    // ---- 17. DATA_STATUS_OVERRIDES (non-modern) → must be in HIST_DESCENDANT ----
    // Per Session 28 #4 / Session 29: complementary invariant to check #16.
    // If a code has dataStatus=fragmentary/attested/partly-understood/etc but
    // isn't in HIST_DESCENDANT, the UI's "modern/historical" filter will
    // misclassify it (e.g. show in modern list despite being historical).
    const histSet = new Set(HIST_KEYS);
    for (const [c, status] of Object.entries(ctx.DATA_STATUS_OVERRIDES)) {
        if (status === 'modern') continue;  // 'modern' override is consistent with non-HIST
        if (!ctx.LANG_DATA[c]) continue;    // already caught by check #13c above
        if (!histSet.has(c)) {
            W(`${c}: DATA_STATUS_OVERRIDES = '${status}' but NOT in HIST_DESCENDANT — ` +
              `UI filter will treat as modern (Session 29 inverse invariant)`);
        }
    }
}

// ---- 13d. 100M+ tier requires speakerBasis (per wordmap-check-3.md §7) -
// Languages with first numeric value ≥100M must have speakerBasis declared
// so the tier comparison is honest about what's being counted.
function firstNumericTier(s) {
    if (!s) return 0;
    const str = String(s);
    // Skip historical/extinct/liturgical entries — date ranges like
    // "Extinct (~1500 BCE-3rd c. CE)" would otherwise be parsed as 1500M.
    if (/^(extinct|liturgical|extinct\b)/i.test(str.trim())) return 0;
    // Require an explicit K/M/B unit so "20 (severely endangered)" isn't 20M.
    const m = str.match(/(\d+(?:\.\d+)?)\s*([KMB])\b/);
    if (!m) return 0;
    const n = parseFloat(m[1]);
    const unit = m[2];
    if (unit === 'B') return n * 1e9;
    if (unit === 'M') return n * 1e6;
    if (unit === 'K') return n * 1e3;
    return n;
}
let bigButNoBasis = 0;
for (const code of codes) {
    const m = ctx.LANG_DATA[code].meta || {};
    if (!m.speakers) continue;
    const tier = firstNumericTier(m.speakers);
    if (tier >= 100e6 && !m.speakerBasis) {
        W(`${code}: 100M+ tier (${m.speakers}) without speakerBasis`);
        bigButNoBasis++;
    }
}

// ---- 14. Family top-token allow-list outliers (detail) -----------------
const familyOutsideList = [];
for (const code of codes) {
    const m = ctx.LANG_DATA[code].meta;
    if (!m || !m.family) continue;
    const top = String(m.family).split('(')[0].trim();
    if (!FAMILY_TOP_ALLOW.has(top)) familyOutsideList.push(`${code}: "${m.family}"`);
}
if (familyOutsideList.length && familyOutsideList.length <= 8) {
    for (const f of familyOutsideList) I(`family outside allow-list: ${f}`);
}

// ---- Report -------------------------------------------------------------
console.log('=== Word Map data validation ===');
console.log(`Languages: ${N} (modern: ${N - histInData.length}, historical: ${histInData.length})`);
console.log(`WORD_LIST: ${ctx.WORD_LIST.length} entries`);
console.log(`Word entries with "—": ${dashCount}`);
console.log(`Duplicate-coordinate groups: ${dupGroups.length}`);
console.log(`Codes with meta: ${codesWithMeta.length}/${codes.length}`);
console.log(`Distinct family top-tokens: ${Object.keys(familyTopHits).length}`);
console.log(`Optional schema adoption: speakerBasis ${withSpeakerBasis}, iso6393 ${withIso}, sources ${withSources}`);
console.log('');
console.log('Data status breakdown:');
const statusOrder = ['modern','attested','fragmentary','reconstructed','undeciphered','partly-understood','pedagogical'];
for (const s of statusOrder) {
    if (dataStatusCounts[s]) console.log(`  ${s.padEnd(20)} ${dataStatusCounts[s]}`);
}
for (const s of Object.keys(dataStatusCounts)) {
    if (!statusOrder.includes(s)) console.log(`  ${s.padEnd(20)} ${dataStatusCounts[s]} (unexpected)`);
}
console.log('');
if (dupForms.length) {
    console.log(`Same-form/same-IPA duplicates within a language (${dupForms.length}):`);
    for (const d of dupForms) console.log('  · ' + d);
    console.log('');
}
console.log('Description i18n coverage:');
for (const ui of UI_LANGS) {
    const c = i18nCoverage[ui];
    const pct = totalDescCodes ? Math.round(c.covered/totalDescCodes*100) : 0;
    console.log(`  ${ui.padEnd(6)} ${c.covered}/${totalDescCodes}  (${pct}%)`);
}
console.log('');
console.log(`ERRORS (${errors.length}):`);
for (const m of errors) console.log('  ✗ ' + m);
console.log('');
console.log(`WARNINGS (${warns.length}):`);
for (const m of warns) console.log('  ! ' + m);
console.log('');
if (allowlisted.length) {
    console.log(`ALLOWLISTED (${allowlisted.length}) — known issues, intentionally suppressed:`);
    for (const a of allowlisted) {
        console.log('  ⊘ ' + a.msg);
        console.log('      reason:  ' + a.reason);
        console.log('      ref:     ' + a.ref);
        if (a.created) console.log('      created: ' + a.created);
        if (a.expires) {
            const daysLeft = daysBetween(TODAY_ISO, a.expires);
            const note = daysLeft <= EXPIRES_LEAD_DAYS ? `  ⚠ ${daysLeft} days left` : '';
            console.log('      expires: ' + a.expires + note);
        }
    }
    console.log('');
}
const unusedAllowlist = ALLOWLIST.filter(a => !allowlistFired.has(a));
if (unusedAllowlist.length) {
    console.log(`UNUSED ALLOWLIST ENTRIES (${unusedAllowlist.length}) — match string never fired, may be safe to remove:`);
    for (const a of unusedAllowlist) {
        const matchStr = Array.isArray(a.match) ? a.match.join(' | ') : a.match;
        console.log('  ? match: "' + matchStr + '"');
        console.log('      ref: ' + a.ref);
    }
    console.log('');
}
// Lead-time summary as INFO (Session 16 #1)
{
    const expiringSoon = allowlisted.filter(a => a.expires && daysBetween(TODAY_ISO, a.expires) <= EXPIRES_LEAD_DAYS && daysBetween(TODAY_ISO, a.expires) >= 0);
    if (expiringSoon.length) {
        infos.push(`${expiringSoon.length} ALLOWLIST entries expire within ${EXPIRES_LEAD_DAYS} days — review before they re-promote`);
    }
    // Age summary (Session 16, technical debt visibility)
    const aged = allowlisted.filter(a => a.created).map(a => ({a, days: daysBetween(a.created, TODAY_ISO)}));
    const longstanding = aged.filter(x => x.days >= 365);
    if (longstanding.length) {
        infos.push(`${longstanding.length} ALLOWLIST entries are 1+ years old — consider scheduling resolution`);
    }
}
console.log(`INFOS (${infos.length}):`);
for (const m of infos) console.log('  · ' + m);
console.log('');
console.log(errors.length ? 'FAIL' : 'PASS');
process.exit(errors.length ? 1 : 0);
