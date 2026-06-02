export const meta = {
  name: 'gen-wordmap-reviews',
  description: 'Generate 20 new Wordmap specialist review files (review_51..70) from real data inspection',
  phases: [{ title: 'Generate' }],
}

// 20 NEW personas, distinct from existing review_01..50 (which covered the
// language-family sweep + several deep dives). These add cross-cutting
// methodology reviewers + under-covered regional/isolate deep dives.
const PERSONAS = [
  { n: 51, title: 'Phonetic transcription & IPA-consistency specialist', codes: 'CROSS-CUTTING: sample widely across families', focus: 'IPA field that merely copies the orthography (surface===ipa), missing stress marks, ASCII-in-IPA (e.g. Baxter-style g/j), wrong/length diacritics, [g] vs [ɡ], affricate vs sequence, broad vs narrow inconsistency vs neighbouring entries', refs: 'Handbook of the IPA (1999); Ladefoged & Maddieson, The Sounds of the World\'s Languages (1996)' },
  { n: 52, title: 'Tone & suprasegmentals specialist', codes: 'zh, zh_tw, yue, yue_ts, nan, cdo, hak_cn, wuu, hmn, hni, th, th_n, th_s, th_isan, lo, vi, vi_c, vi_s, my, shn, ig, yo, pwo, ksw', focus: 'tone-mark consistency (Chao tone letters vs digits vs absent), missing tones on tonal-language entries, wrong tone category, contour vs register confusion across like entries', refs: 'Yip, Tone (2002); Chao tone-letter convention' },
  { n: 53, title: 'Sinitic topolects (Wu / Jin / Xiang / Gan) specialist', codes: 'wuu, wuu_nb, wuu_sz, wuu_wz, wuu_hz, wuu_jx, wuu_jh, cjy, hsn, gan, czh, zh_jh, zh_zz', focus: 'wrong/inconsistent IPA for Wu voiced obstruents & checked tones, Jin glottal-stop entering tone, romanization scheme mismatch, surface=ipa copies', refs: 'Norman, Chinese (1988); Qian Nairong, Wu dialect studies' },
  { n: 54, title: 'Min (Hokkien / Teochew / Fuzhou / Puxian) specialist', codes: 'nan, nan_xm, nan_zz, nan_te, nan_pn, nan_qz, nan_hai, cdo, cpx, mnp', focus: 'POJ/Tai-lo romanization vs IPA mismatch, nasal vowels, entering tones, literary vs colloquial readings, surface=ipa copies', refs: 'Douglas-Barclay Amoy dictionary; Bodman, Spoken Amoy Hokkien' },
  { n: 55, title: 'Yue (Cantonese) & Pinghua specialist', codes: 'yue, yue_ts, yue_zs, yue_nn, yue_gz, yue_dg', focus: 'Jyutping vs IPA consistency, six/nine tone marking, long/short vowel (aː vs ɐ), final stops -p/-t/-k, surface=ipa copies', refs: 'LSHK Jyutping; Bauer & Benedict, Modern Cantonese Phonology' },
  { n: 56, title: 'Mandarin / Pinyin standard-phonology specialist', codes: 'zh, zh_tw, zh_sc, zh_cd, zh_cq, zh_xa, zh_km, zh_wh, zh_jn, zh_kf, zh_hf, zh_nj, zh_tj, zh_lz, zh_db, dng', focus: 'pinyin correctness for the standard zh surface, IPA realisation (retroflex, erhua, neutral tone), tone-sandhi citation form, regional Mandarin tone-digit consistency, surface=ipa', refs: 'Duanmu, The Phonology of Standard Chinese (2007); Hanyu Pinyin standard' },
  { n: 57, title: 'Korean phonology & romanization specialist', codes: 'ko, ko_kp, ko_bus, ko_jeju, ko_yb, ko_mid, ko_em, oko, okg', focus: 'Revised Romanization vs Yale vs IPA mismatch, tense/aspirated stop transcription, vowel ㅓ/ㅗ, final consonant neutralisation, surface=ipa copies', refs: 'Sohn, The Korean Language (1999); NIKL Revised Romanization' },
  { n: 58, title: 'Japonic pitch-accent, kana & romanization specialist', codes: 'ja, ja_osa, ja_aom, ja_oki, ja_hak, ja_kyo, ja_hir, ja_mvi, ja_rys, ja_edo, ja_heian, ja_chu', focus: 'Hepburn romanization, long-vowel marking, moraic n/geminate, pitch-accent indication consistency, dialect vowel/consonant differences, surface=ipa copies', refs: 'Vance, The Sounds of Japanese (2008); NHK Accent Dictionary' },
  { n: 59, title: 'Thai / Lao / SW-Tai orthography & tone specialist', codes: 'th, th_n, th_s, th_isan, lo, soa, khb, blt, tyz, kxm', focus: 'RTGS vs IPA, tone class & marking, vowel length, final stop unrelease, aspiration, surface=ipa copies', refs: 'Iwasaki & Ingkaphirom, A Reference Grammar of Thai (2005); RTGS' },
  { n: 60, title: 'Continental West Germanic (Dutch/Frisian/Low German/Afrikaans) specialist', codes: 'nl, fy, frr, stq, li, nds, ksh, pdc, pdt, af, gsw, gsw_w, bar, swg, wae, vmf', focus: 'word-initial /v/ vs [f], final devoicing, ui/ij diphthongs, Afrikaans vowels, Low German long vowels, surface=ipa copies, missing stress', refs: 'Van Dale; Collins & Mees, The Phonetics of English and Dutch (2003)' },
  { n: 61, title: 'North Germanic / Scandinavian specialist', codes: 'sv, no, nn, da, is, fo, non', focus: 'Swedish/Norwegian pitch accent, Danish stød, Icelandic preaspiration & initial /g/→[k], Faroese, vowel length, surface=ipa copies, register (pappa/mamma vs far/mor)', refs: 'Árnason, The Phonology of Icelandic and Faroese (2011); SAOL' },
  { n: 62, title: 'Finnic & Saami (Uralic) specialist', codes: 'fi, et, vro, vot, liv, krl, olo, vep, se, sma, smj, smn, sms, sjd', focus: 'vowel harmony, gemination/length, Saami consonant gradation, õ vowel, surface=ipa copies, missing length/stress', refs: 'Laanest, Einführung in die ostseefinnischen Sprachen; Sammallahti, The Saami Languages' },
  { n: 63, title: 'Hungarian & Ob-Ugric specialist', codes: 'hu, ohu, mns, kca', focus: 'Hungarian long vowels (á=[aː], e/é), gy/ty/ny palatals, vowel harmony, Mansi/Khanty transcription, surface=ipa copies', refs: 'Kenesei et al., Hungarian (1998); Honti, Ob-Ugric studies' },
  { n: 64, title: 'Basque & language-isolates specialist', codes: 'eu, ain, ket, niv, bsk, sum', focus: 'Basque /h/, sibilant three-way (z/s/x), Ainu vowels & accent, Ket tone, Nivkh, Burushaski retroflexes, surface=ipa copies', refs: 'Hualde & Ortiz de Urbina, A Grammar of Basque (2003); Refsing, The Ainu Language' },
  { n: 65, title: 'Mesoamerican (Nahuatl / Mayan / Oto-Manguean) specialist', codes: 'nci, nhx, nch, nhw, nhe, ngu, ppl, yua, itz, usp, tzo, tzh, quc, cak, kek, kjb, ctu, toj, mam, ixl, mix, zap, zts, maz, xtm, mxv, toc, huv, ote, otq', focus: 'saltillo/glottal stop [ʔ], tl [t͡ɬ] lateral affricate, ejectives in Mayan, Oto-Manguean tone, vowel length, surface=ipa copies', refs: 'Campbell, American Indian Languages (1997); Launey, An Introduction to Classical Nahuatl' },
  { n: 66, title: 'Eskimo-Aleut & Paleosiberian (Arctic) specialist', codes: 'kl, iu, ipk, ess, esu, ale, ckt, kpy, itl, ykg, yux', focus: 'uvular vs velar, schwa, gemination, Greenlandic double consonants, Chukchi vowel harmony, surface=ipa copies, missing length', refs: 'Fortescue, Comparative Eskimo Dictionary; Fortescue, Language Relations across Bering Strait' },
  { n: 67, title: 'Australian Aboriginal languages specialist', codes: 'pjt, wbp, piu, aer, nha, nys, wbt, adt, olg', focus: 'retroflex vs alveolar (rt/rn/rl), velar nasal initial [ŋ], lack of voicing contrast, long vowels in Arrernte, surface=ipa copies', refs: 'Dixon, Australian Languages (2002); Butcher on Australian phonetics' },
  { n: 68, title: 'Papuan / Trans-New-Guinea & Oceanic-contact specialist', codes: 'hui, mpt, ygr, meu, ho, aau, ani, pry, pjk', focus: 'prenasalised stops, [ɾ]/[l], central vowel ɨ/ə, Motu/Oceanic phonotactics, surface=ipa copies, missing stress', refs: 'Foley, The Papuan Languages of New Guinea (1986); Pawley on TNG' },
  { n: 69, title: 'Lexical semantics & word-sense / glossing specialist', codes: 'CROSS-CUTTING: any language where the chosen lexeme may not match the concept', focus: 'wrong sense for the concept (e.g. a "mother" slot holding the word for "one"; "love" as verb where noun expected; "good" wrong sense; greeting that is a loanword not native), duplicated identical forms across two distinct concepts in the same language, false friends', refs: 'lexical typology; Swadesh list conventions; Buck, Dictionary of Selected Synonyms' },
  { n: 70, title: 'Data-structure & cross-field consistency auditor', codes: 'CROSS-CUTTING: programmatic scan of all words/*.js', focus: 'use node to find: a code present in some word files but missing in others (gaps), surface===ipa duplicate (orthography in IPA slot) at scale, identical [surface,ipa] reused across two different concepts for the same code, empty/placeholder ("—", "?") entries in modern languages, malformed arrays', refs: 'data QA / internal consistency (no external source needed — evidence is the file contents)' },
]

const FMT = (p) => `You are reviewer #${p.n} for the LangMap **Wordmap** dataset. Persona: ${p.title}.

The data lives in per-word files under \`words/\` (20 files: water, fire, sun, moon, mother, father, eat, drink, love, heart, tree, house, dog, cat, hand, eye, hello, thanks, one, good). Each file is \`WORDS.<word> = { label:{...}, data:{ <langcode>: ["surface", "ipa"], ... } }\` (some files use \`entries\` — check). A review entry is the 2-element array [orthographic surface, IPA].

Your assigned scope / language codes: ${p.codes}
Your review focus: ${p.focus}
Reference works to cite: ${p.refs}

TASK — produce \`wordmap_reviews/review_${p.n}.md\` (a NEW file you alone create):
1. INSPECT THE REAL DATA. For your codes, grep the words/*.js files (e.g. \`grep -n '"nan":' words/water.js\` or \`grep -n 'nan:' words/water.js\` — check the actual key style first by reading a file). Read the EXACT current [surface, ipa] arrays and their line numbers. NEVER invent current values — copy them verbatim.
2. Find GENUINE, defensible issues (aim for 12-20 solid ones; quality over quantity — do not pad with fabricated problems). Each must be a real error or a well-supported improvement: wrong IPA, orthography copied into the IPA slot, missing stress/length/tone, wrong vowel/consonant quality, register mismatch, wrong word-sense, etc. If your domain genuinely has few issues, report fewer but make each airtight.
3. WRITE the file in EXACTLY this format (match existing review_01..50):

\`\`\`
# Wordmap review #${p.n} — ${p.title}

## Reviewer self-introduction (ペルソナ自己紹介)

<one rich paragraph: your expertise, the varieties you cover, and the specific primary/secondary reference works (named, with authors/years) you use for this review>

---

## Issues found

### 1. \`<code>\` — <word> — <short title of the problem>
- **File:** \`words/<word>.js\` line <N>
- **Current:** \`["<surface>", "<ipa>"]\`
- **Expected:** \`["<surface>", "<ipa>"]\`
- **Why:** <precise, sourced explanation — cite the reference and the rule>

---

### 2. ...
\`\`\`

End the file with the line:
\`*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*\`

CONSTRAINTS:
- You are READ-ONLY on all words/*.js data — do NOT edit them. You ONLY create your own review_${p.n}.md.
- Verify every "Current" value against the actual file before writing it.
- Write in the same bilingual-friendly, rigorous style as the existing reviews.

Return JSON: {file, issueCount, summary}.`

const SCHEMA = {
  type: 'object',
  required: ['file', 'issueCount', 'summary'],
  properties: {
    file: { type: 'string' },
    issueCount: { type: 'integer' },
    summary: { type: 'string' },
  },
}

phase('Generate')
log(`Generating ${PERSONAS.length} new Wordmap reviews (review_51..70)`)
const results = await parallel(PERSONAS.map((p) => () =>
  agent(FMT(p), { label: `review#${p.n}:${p.title.split(' ')[0]}`, phase: 'Generate', schema: SCHEMA })))

const ok = results.filter(Boolean)
return {
  generated: ok.length,
  totalIssues: ok.reduce((n, r) => n + (r.issueCount || 0), 0),
  files: ok.map((r) => ({ file: r.file, issues: r.issueCount, summary: r.summary })),
}
