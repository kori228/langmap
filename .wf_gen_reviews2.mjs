export const meta = {
  name: 'gen-wordmap-reviews-2',
  description: 'Generate 10 sharp, project-aware Wordmap specialist reviews (review_71..80)',
  phases: [{ title: 'Generate' }],
}

// 10 senior reviewers with broad general-linguistics expertise AND deep
// understanding of THIS project (its conventions, docs, structure). They hunt
// the subtle, sharp issues that the 70 family/methodology reviewers missed —
// convention compliance, cross-entry consistency, Unicode/orthographic hygiene,
// dialect differentiation, reconstructed-form rigor, semantic appropriateness.
const PERSONAS = [
  { n: 71, title: 'Dataset-conventions & contributor-guideline compliance auditor',
    focus: 'Read docs/words/CONTRIBUTING.md and docs/words/LANG_CODES.md FIRST. Then audit words/*.js entries that VIOLATE the project\'s own documented conventions: the declared romanization/standard implied by a code\'s family in LANG_CODES.md; the ZWNJ glue-marker (U+200C) convention for agglutinative suffix segments (tr/ko/fi etc.); the surface=orthography / second-slot=IPA contract; region-grouping; quote/format. Cite the exact doc rule each entry breaks.',
    refs: 'docs/words/CONTRIBUTING.md; docs/words/LANG_CODES.md; project convention memory' },
  { n: 72, title: 'Dialect-differentiation & anti-duplication auditor',
    focus: 'The project requires dialect/variant codes to reflect FAMOUS vocabulary or pronunciation differences from their parent standard, not lazy copies. Compare each variant to its parent across the 20 words (e.g. es vs es_mx/es_ar/es_cl, pt_eu vs pt_br, ja vs ja_osa/ja_kyo, ar vs ar_eg/ar_lev/ar_ma, en vs en_aave/en_au/en_sco, zh regional, yue variants, ko vs ko_jeju/ko_bus). Flag: (a) a variant identical to its parent where a well-known lexical/phonetic difference exists and SHOULD show; (b) the SAME [surface,ipa] reused for two DIFFERENT concepts in one language (a real bug class, cf. the jaq mother=one bug). Name the famous expected difference + source.',
    refs: 'dialectology literature; project dialect-vocab-difference convention; SAOL/Duden/etc. per language' },
  { n: 73, title: 'Diacritic, Unicode & orthographic-hygiene specialist',
    focus: 'Codepoint-level hygiene across surface AND ipa fields: ASCII g U+0067 vs IPA script ɡ U+0261; precomposed vs combining diacritics / NFC consistency; tie-bar (t͡s U+0361) presence/absence consistency for affricates; stress mark ˈ U+02C8 placed at the syllable onset (not mid-syllable) and length ˑ/ː U+02D0 vs ASCII colon; look-alike Cyrillic/Greek letters inside Latin IPA; stray ASCII apostrophe \x27 vs ʼ U+02BC vs ʔ; zero-width or trailing whitespace. Give the exact offending codepoint and the correct one.',
    refs: 'Handbook of the IPA (1999) typographic conventions; Unicode UAX#15 (NFC); the ɡ reference-glyph policy' },
  { n: 74, title: 'Intra-language cross-word consistency specialist',
    focus: 'Pick ~12-15 languages and read ALL of that language\'s 20 entries. Flag a single entry whose transcription is INCONSISTENT with how the SAME phoneme/feature is handled in that language\'s other 19 words: e.g. /r/ as [ɾ] in 19 words but [r] in one; vowel [e] vs [ɛ] for the same phoneme; stress marked in 19 but missing in one; one entry over-narrow vs the rest broad. The other 19 entries are the evidence — cite them.',
    refs: 'internal consistency (the language\'s own other entries are the standard); per-language phonology references' },
  { n: 75, title: 'Surface-form orthography & script-correctness specialist',
    focus: 'Focus on the FIRST array element (the written surface form), not the IPA: is it the correct standard spelling/script — required diacritics present (Vietnamese tone marks, Czech háček, Turkish ı/İ, Polish ł, Yoruba sub-dots, Hausa hooked letters), correct native script (not a bare romanization where the script is expected, and vice-versa per the dataset\'s norm for that code), no typos, no mojibake. Give the correct orthographic form + source.',
    refs: 'standard orthographies / national dictionaries per language; Unicode script blocks; LANG_CODES.md' },
  { n: 76, title: 'Historical & reconstructed-forms rigor specialist',
    focus: 'The excluded historical/classical codes (la, sa, sa_edu, pi, cu, goh, gmh, osx, non, got, ang, enm, en_em, grc/el_grc, egy, akk, sux, hit, fro, nci, and the historical Sinitic/Japonic/Korean codes). Check: reconstruction asterisk policy (attested forms must NOT carry *, reconstructions SHOULD), vowel-length macrons in Latin/Sanskrit/Old English, anachronistic modern IPA on an ancient form, attested spelling vs normalized. Cite the grammar/edition.',
    refs: 'Weiss (Latin); Whitney/Macdonell (Sanskrit); Ringe (PGmc); Wright (Old English); Sihler (PIE→Latin/Greek)' },
  { n: 77, title: 'Lexical-semantics, register & nativeness sharp auditor',
    focus: 'For each entry, the surface must denote THE CONCEPT in the right register. Read each word file\'s definition{} block. Flag: a greeting/thanks that is a borrowed term where a native one is standard; a verb where the concept is a noun (love/heart) or vice-versa; the wrong sense of "good"/"hand"/"eye"; a baby-talk/colloquial form where a neutral citation form is the norm (and inconsistent with sibling languages); an entry that is actually a different concept. Project-aware: only flag where it is genuinely wrong, with a sourced correct lexeme.',
    refs: 'Buck, A Dictionary of Selected Synonyms in the Principal Indo-European Languages; concept definition{} blocks; per-language dictionaries' },
  { n: 78, title: 'Suprasegmental placement & syllabification closer',
    focus: 'Remaining stress/length/tone/syllabicity issues after the earlier passes: primary-stress ˈ missing on polysyllabic entries whose siblings carry it; syllabic-consonant ring (n̩, l̩, r̩) missing or misused; vowel-length ː inconsistent with the orthography; tone on the SECOND syllable dropped; ambisyllabic/onset-maximization errors in the IPA syllable break. Use the entry\'s own siblings + the language\'s phonology as evidence.',
    refs: 'Hayes, Metrical Stress Theory; Hall on syllabic consonants; language-specific phonologies' },
  { n: 79, title: 'Phonemic/phonetic broadness-policy & allophony specialist',
    focus: 'The dataset is broadly phonemic with selective phonetic detail. Flag INCONSISTENT broadness: an entry over-specifying a predictable allophone (aspiration, final-devoicing, nasal-place assimilation, vowel nasalization) while the language\'s sibling entries leave it broad — or the reverse; phantom/predictable segments; a [phonetic] detail in one word but its [phonemic] counterpart in another for the same sound. Recommend the consistent transcription with the sibling evidence.',
    refs: 'Ladefoged & Maddieson (1996); the dataset\'s own per-language broadness norm (sibling entries)' },
  { n: 80, title: 'Senior holistic red-team reviewer',
    focus: 'Sharpest remaining cross-domain errors, especially region-group-wide systematic mistakes that every prior reviewer missed (a whole comment-block sharing one error), and REGRESSION spot-checks: sample ~15 entries that earlier rounds reportedly fixed and confirm they are correct (not over-corrected or newly inconsistent). Hunt for the single most embarrassing remaining error in each word file. Be ruthless and precise; only verified, defensible findings.',
    refs: 'whole-dataset perspective; cross-checks the prior 79 reviews; primary sources as needed per finding' },
]

const FMT = (p) => `You are reviewer #${p.n} for the LangMap **Wordmap** dataset — a senior linguist with broad general-linguistics expertise AND deep knowledge of THIS project. Persona: ${p.title}.

This is the 8th wave of review: reviews #01-70 already found and fixed ~1050 issues, so the data is much cleaner now. Your value is finding the SUBTLE, SHARP issues that survived — be fine-grained and exacting, and do NOT re-report things already fixed (verify current live values first).

Project structure: word data lives in \`words/<concept>.js\` (20 files: water, fire, sun, moon, mother, father, eat, drink, love, heart, tree, house, dog, cat, hand, eye, hello, thanks, one, good). Each file = \`WORDS.<concept> = { label:{...}, definition:{...}, data:{ <langcode>: ["surface", "ipa"], ... } }\`. Language metadata (lat/lng, native name) lives in \`wordmap_data.js\` (you generally do NOT touch that). Project docs: \`docs/words/CONTRIBUTING.md\`, \`docs/words/LANG_CODES.md\` (code → English/Japanese name, family, speakers).

Your review lens / focus: ${p.focus}
Reference works / sources to cite: ${p.refs}

TASK — create \`wordmap_reviews/review_${p.n}.md\` (a NEW file you alone create):
1. GROUND YOURSELF in the project: skim the relevant project docs above and the conventions, then INSPECT THE REAL DATA with grep/Read (verify the actual current key style and the exact [surface, ipa] arrays + line numbers; NEVER invent current values — copy verbatim). Confirm each issue still exists in the live data right now.
2. Find GENUINE, sharp, defensible issues (aim for 10-18 airtight ones; quality over quantity — fewer is fine if the data is clean in your area; absolutely no padding/fabrication). Each must be a real error or a well-supported, sourced improvement.
3. WRITE the file in EXACTLY this format (match existing reviews #01-70):

\`\`\`
# Wordmap review #${p.n} — ${p.title}

## Reviewer self-introduction (ペルソナ自己紹介)

<one rich paragraph: your general-linguistics credentials, your familiarity with this project's data model and conventions, and the specific reference works (named authors/years) and project docs you use>

---

## Issues found

### 1. \`<code>\` — <word> — <short, sharp title>
- **File:** \`words/<word>.js\` line <N>
- **Current:** \`["<surface>", "<ipa>"]\`
- **Expected:** \`["<surface>", "<ipa>"]\`
- **Why:** <precise, sourced explanation — name the rule/source and, for consistency findings, cite the sibling entries that are the evidence>

---

### 2. ...
\`\`\`

End with: \`*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*\`

CONSTRAINTS:
- READ-ONLY on all words/*.js and docs — you ONLY create your own review_${p.n}.md.
- Verify every "Current" value against the live file before writing it; confirm the issue is not already fixed.
- Match the rigorous bilingual-friendly style of the existing reviews.

Return JSON: {file, issueCount, summary}.`

const SCHEMA = {
  type: 'object',
  required: ['file', 'issueCount', 'summary'],
  properties: { file: { type: 'string' }, issueCount: { type: 'integer' }, summary: { type: 'string' } },
}

phase('Generate')
log(`Generating ${PERSONAS.length} sharp project-aware Wordmap reviews (review_71..80)`)
const results = await parallel(PERSONAS.map((p) => () =>
  agent(FMT(p), { label: `review#${p.n}`, phase: 'Generate', schema: SCHEMA })))

const ok = results.filter(Boolean)
return {
  generated: ok.length,
  totalIssues: ok.reduce((n, r) => n + (r.issueCount || 0), 0),
  files: ok.map((r) => ({ file: r.file, issues: r.issueCount, summary: r.summary })),
}
