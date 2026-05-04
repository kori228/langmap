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
 *   4. surface or ipa equal to "—" → warning (likely unattested)
 *   5. lat/lng are finite numbers in valid ranges
 *   6. Duplicate exact (lat,lng) pairs → info (often expected for parent/dialect)
 *   7. Every LANG_DATA code has a meta entry in wordmap_meta.js
 *   8. No code has duplicate meta assignments (silent overwrites)
 *   9. EXCLUDED_CODES ⊇ HIST_DESCENDANT keys (historical langs are excluded)
 *  10. Every meta.speakers is parseable into a tier (or known annotation)
 *  11. meta.family / meta.script top-level tokens are in an allow-list
 *  12. README/HTML lang count matches actual LANG_DATA count
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
vm.runInContext(dataSrc + '\n;this.LANG_DATA=LANG_DATA;this.EXCLUDED_CODES=EXCLUDED_CODES;this.WORD_LIST=WORD_LIST;this.WM_UI_LABELS=WM_UI_LABELS;this.WM_UI=WM_UI;', ctx);
vm.runInContext(metaSrcStripped, ctx);

// HIST_DESCENDANT is in wordmap.html; pull it out by regex
const histMatch = htmlSrc.match(/const HIST_DESCENDANT\s*=\s*\{([\s\S]*?)\n\s*\};/);
if (!histMatch) { console.error('FATAL: could not locate HIST_DESCENDANT'); process.exit(2); }
// Match real keys (lowercase letters/underscores/digits, must be quoted-style key)
// and skip comment lines
const HIST_BODY = histMatch[1].split('\n').filter(l => !l.trim().startsWith('//')).join('\n');
const HIST_KEYS = [...HIST_BODY.matchAll(/(?:^|[\s,{])([a-z][a-z_0-9]*)\s*:/g)].map(m => m[1]);
const HIST_SET = new Set(HIST_KEYS);

const errors = [];
const warns  = [];
const infos  = [];
const E = m => errors.push(m);
const W = m => warns.push(m);
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
if (dashCount > 0) W(`${dashCount} word entries contain "—" (unattested) — see review §3`);

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

// ---- 7. Every code has meta + 8. no duplicate meta assignments ----------
const codesWithMeta = codes.filter(c => ctx.LANG_DATA[c].meta);
const missingMeta = codes.filter(c => !ctx.LANG_DATA[c].meta);
for (const c of missingMeta) E(`${c}: no meta entry`);

// Count assignments by parsing the meta.js source for "LANG_DATA['code'].meta = "
// or "LANG_DATA['code'] && (LANG_DATA['code'].meta = ".
const metaAssignCount = {};
const assignRe = /LANG_DATA\['([\w-]+)'\](?:\s*&&\s*\(LANG_DATA\['\1'\])?\.meta\s*=/g;
// Skip lines starting with '//' (comments)
for (const line of metaSrcStripped.split('\n')) {
    if (line.trimStart().startsWith('//')) continue;
    let m;
    const re = /LANG_DATA\['([\w-]+)'\](?:\s*&&\s*\(LANG_DATA\['\1'\])?\.meta\s*=/g;
    while ((m = re.exec(line)) !== null) {
        metaAssignCount[m[1]] = (metaAssignCount[m[1]] || 0) + 1;
    }
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
console.log(`INFOS (${infos.length}):`);
for (const m of infos) console.log('  · ' + m);
console.log('');
console.log(errors.length ? 'FAIL' : 'PASS');
process.exit(errors.length ? 1 : 0);
