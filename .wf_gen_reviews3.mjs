export const meta = {
  name: 'gen-wordmap-reviews-wave12',
  description: 'Generate 30 specialist Wordmap reviews (review_121..150) — wave 12 of the review rally',
  phases: [{ title: 'Generate' }],
}

// Wave 12: 30 reviewers, review_121..150. Reviews #01-120 are all closed.
// Coverage so far: family round-1 (#01-50), methodology (#51-70), project-aware
// sharp audits (#71-80), round-2 family audits (#81-99), Ancient IE (#100),
// wave-11 round-2/cross-cutting (#101-120). Wave 12 = deeper round-2/3 on
// under-audited families, finer cross-cutting lenses, and per-word deep dives.
const PERSONAS = [
  { n: 121, title: "Mandarin & Pinyin standard-phonology round-3 auditor",
    focus: "zh (Standard Mandarin) and any zh_* regional Mandarin (grep first). Round-1/2: #56, #88, #93. Check the RESIDUE: tone sandhi NOT applied where it must be (third-tone sandhi 3+3→2+3, yi/bu sandhi), erhua final, the apical vowels ɿ/ʅ (or ɹ̩/ɻ̩) after sibilants vs the dataset convention, ⟨j q x⟩ as tɕ tɕʰ ɕ, neutral tone on the second syllable of disyllables, retroflex vs alveolo-palatal consistency. Cite the exact entry and the sibling that proves the convention.",
    refs: "Duanmu (2007) The Phonology of Standard Chinese; Lee & Zee (2003) Standard Chinese IPA Illustration; reviews #56/#88/#93 closed" },
  { n: 122, title: "Cantonese & Yue round-3 auditor",
    focus: "yue and any yue_* (grep first). Round-1/2: #55. Check: the six (or nine) Jyutping tones rendered as consistent tone letters/numbers across all 20 entries, entering (checked) tones on -p/-t/-k codas, the syllabic ŋ̩ and m̩, initial ng-/zero correspondence, the merger patterns (n/l, ng/zero) — is the dataset's choice consistent? Cite sibling entries.",
    refs: "Bauer & Benedict (1997) Modern Cantonese Phonology; Matthews & Yip (2011) Cantonese; review #55 closed" },
  { n: 123, title: "Min & Hokkien-Teochew-Fuzhou round-3 auditor",
    focus: "Min codes: nan, nan_xm, nan_zz, hak (no—Hakka separate), cdo (Fuzhou), and any other Min (grep first). Round-1/2: #54. Check: POJ/Tâi-lô romanization stripped from surface (the project removed POJ annotations — verify none crept back), tone sandhi domain, the Min entering tones, the colloquial vs literary reading choice consistency, nasalized vowels marked, the ɔ vs o distinction. Cite entries.",
    refs: "Klöter (2005) Written Taiwanese; Chappell (2000) Sinitic Grammar; reviews #54 closed; the POJ-stripping commits (nan_xm/nan_zz)" },
  { n: 124, title: "Wu / Jin / Xiang / Gan Sinitic topolect round-2 auditor",
    focus: "wuu (Shanghainese), and any Jin/Xiang/Gan codes (grep: cjy, hsn, gan). Round-1: #53. Check: Wu voiced obstruents (the b/d/g vs p/t/k three-way), Wu tone (the register split, checked tones), Shanghainese vowel inventory, whether the surface uses the correct characters, IPA voicing consistency across the language's 20 entries. Cite siblings.",
    refs: "Chen (2008) on Wu tone; Qian (2003) Shanghainese; review #53 closed" },
  { n: 125, title: "Polynesian & Oceanic round-2 auditor",
    focus: "haw, mi (Māori), sm (Samoan), to (Tongan), ty (Tahitian), fj (Fijian), and other Oceanic (grep first). Round-1: #18, #90. Check: the ʻokina (U+02BB) glottal stop in surface AND its IPA ʔ, macron long vowels (ā ē ī ō ū) present where required, the limited consonant inventories (Hawaiian has only 8 consonants — no spurious segments), Samoan/Tongan no aspiration, Fijian prenasalized stops (b=ᵐb, d=ⁿd, q=ᵑɡ, g=ŋ), Māori wh=/ɸ/ or /f/. Cite the orthography source.",
    refs: "Elbert & Pukui (1979) Hawaiian Grammar; Harlow (2007) Māori; Mosel & Hovdhaugen (1992) Samoan; reviews #18/#90 closed" },
  { n: 126, title: "Philippine languages round-2 auditor",
    focus: "tl/fil (Tagalog), ceb (Cebuano), ilo (Ilocano), hil (Hiligaynon), pam, war, bik, pag, and others (grep first). Round-1: #48. Check: the glottal stop ʔ in coda and intervocalic (often unwritten in surface but phonemic in IPA), ng digraph = ŋ, the schwa in some languages (Ilocano, Pangasinan), stress/length (the penultimate vs final), the e/i and o/u allophony, no spurious Spanish phonology. Cite siblings.",
    refs: "Schachter & Otanes (1972) Tagalog Reference Grammar; Rubino (2000) Ilocano; review #48 closed" },
  { n: 127, title: "Indonesian / Malay / western Austronesian round-2 auditor",
    focus: "id, ms, jv (Javanese), su (Sundanese), min (Minangkabau), bug, ban (Balinese), ace, mad, and others (grep first). Round-1: #17. Check: Indonesian/Malay schwa ⟨e⟩=ə vs ⟨e⟩=e ambiguity resolved correctly per word, the final /k/ as glottal stop ʔ in some positions, Javanese the dental/retroflex t/ṭ distinction and the a/ɔ realization, Javanese speech levels (ngoko vs krama — which register?), Sundanese eu=ɤ. Cite siblings.",
    refs: "Sneddon (2010) Indonesian Reference Grammar; Robson & Wibisono (2002) Javanese; review #17 closed" },
  { n: 128, title: "Dravidian round-3 auditor (Tamil/Telugu/Kannada/Malayalam)",
    focus: "ta, te, kn, ml, and minor Dravidian (tcy Tulu, kok no, gon, brh Brahui — grep first). Round-1/2: #31, #5, #83. Check: the Tamil voiced allophones (k→g, t→d, p→b intervocalically — is the IPA showing the allophone or the phoneme, consistently?), the retroflex series ʈ ɳ ɭ ɻ/ழ, Malayalam the extra ṟ and the chillu letters, Telugu/Kannada vowel length, the Tamil ழ ( zh) = ɻ, gemination. Cite siblings.",
    refs: "Krishnamurti (2003) The Dravidian Languages; Asher & Kumari (1997) Malayalam; reviews #31/#83 closed" },
  { n: 129, title: "Indo-Aryan round-3 auditor (Hindi-Urdu, Punjabi, Gujarati, Marathi, etc.)",
    focus: "hi, ur, pa (Punjabi), gu, mr, ne, sd, or, as, mai, bho, and others (grep first). Round-1/2: #5, #32, #33, #83. Check: the aspirated/breathy-voiced series (bʰ dʰ gʰ ɖʰ) consistency, Hindi schwa deletion (final ə dropped — is it?), Punjabi TONE (the famous tonal Indo-Aryan — are tones marked?), nasalization (candrabindu → ̃), the ɛ/æ for ai, Marathi the ts/tʃ split, retroflex ɽ. Cite siblings.",
    refs: "Masica (1991) The Indo-Aryan Languages; Shapiro (2003) Hindi; Bhatia (1993) Punjabi; reviews #32/#33/#83 closed" },
  { n: 130, title: "Standard-average-European deep phonetics auditor (de/fr/es/it/en/pt)",
    focus: "The six highest-traffic European languages: de, fr, es, it, en, pt (and pt_br, es_mx if relevant). These are the most-viewed entries, so errors are most embarrassing. Check the SUBTLE residue after 120 reviews: German final devoicing + the ç/x allophony of ⟨ch⟩, French nasal vowel quality (ɛ̃ ɑ̃ ɔ̃ œ̃) and the uvular ʁ, Spanish the β ð ɣ approximant allophones intervocalically, Italian the open/close e/o and geminates, English the diphthong transcription and rhoticity choice, Portuguese nasal diphthongs ( ɐ̃w̃) and the EP vs BP vowel reduction. Only airtight, sibling-proven findings.",
    refs: "Hall (2003) German; Tranel (1987) French; Hualde (2005) Spanish; Krämer (2009) Italian; Cruttenden (2014) English; reviews #01/#02/#21 closed" },
  { n: 131, title: "Uralic round-2 auditor (Finnish, Estonian, Hungarian, Sami, Mordvin, etc.)",
    focus: "fi, et, hu, se (N. Sami) + other Sami, myv/mdf (Mordvin), udm, kv, mhr (Mari), and others (grep first). Round-1/2: #15, #62, #63, #94. Check: Finnish/Estonian vowel & consonant LENGTH (geminates, long vowels — double letters → ː), Estonian the THREE quantity degrees, Hungarian vowel harmony plausibility and the long-vowel acutes (á é í ó ő ú ű → ː), Finnish front rounded y ö, the consonant gradation, Sami the special letters (đ ŋ ž č ʼ). Cite siblings.",
    refs: "Suomi et al (2008) Finnish Sound Structure; Sammallahti (1998) The Saami Languages; reviews #62/#63 closed" },
  { n: 132, title: "Baltic & Balto-Slavic round-2 auditor",
    focus: "lt (Lithuanian), lv (Latvian), and any Old Prussian/Baltic (grep: prg, sgs). Round-1: #04. Check: Lithuanian PITCH ACCENT (acute vs circumflex — marked?), the nasal vowels ą ę į ų (now long, not nasal in modern — IPA correct?), Latvian the broken tone and the long vowels (ā ē ī ū → ː), the palatalization, Latvian ⟨o⟩=uo, Lithuanian ė=eː vs e=ɛ. Cite siblings.",
    refs: "Ambrazas (1997) Lithuanian Grammar; Nau (1998) Latvian; review #04 closed" },
  { n: 133, title: "Albanian, Armenian, isolates round-2 auditor",
    focus: "sq (Albanian) + sq_* (Gheg/Tosk?), hy/hyw (Armenian E/W), eu (Basque), and any other isolates (grep first). Round-1: #04, #64, #95. Check: Albanian ⟨ë⟩=ə, the rr=r vs r=ɾ, q/gj = c/ɟ, Armenian the three-way stop system (voiced/voiceless/aspirated) and E vs W Armenian voicing swap (b↔p), Armenian ⟨ը⟩=ə epenthesis, Basque the affricates ts̺/ts̻ (tz/ts) and the palatals. Cite siblings.",
    refs: "Newmark et al (1982) Albanian; Dum-Tragut (2009) Armenian; Hualde & Ortiz de Urbina (2003) Basque; reviews #64/#95 closed" },
  { n: 134, title: "Mesoamerican round-2 auditor (Nahuatl, Maya, Oto-Manguean, Mixe-Zoque)",
    focus: "nci/nah (Nahuatl), yua/quc/cak (Mayan), zap/mix (Oto-Manguean), and others (grep first). Round-1: #65. Check: Nahuatl tl=tɬ (lateral affricate), the saltillo ʔ (h or ʼ in orthography), Mayan ejectives (tʼ kʼ tsʼ chʼ) in surface and IPA, Mayan vowel length and the glottal stop, Oto-Manguean TONE (these are tonal — marked?) and nasalization, Nahuatl no voiced stops. Cite siblings.",
    refs: "Launey (2011) Nahuatl; England (1983) Mam/Mayan; reviews #65 closed" },
  { n: 135, title: "Amazonian & lowland South American auditor",
    focus: "Grep for: gn (Guaraní), quz/qu (Quechua—Andean, maybe skip), ay (Aymara), tup, arn (Mapudungun), and any Amazonian. Round-1: #19, #49, #84. Check: Guaraní the nasal harmony and ⟨y⟩=ɨ, the glottal stop (puso) ʼ, Aymara/Quechua the ejective and aspirated stop series (in surface orthography too), the three-vowel system (a i u) with allophonic e/o near uvulars, Mapudungun ⟨ü⟩=ɨ and the interdental series. Cite siblings.",
    refs: "Adelaar & Muysken (2004) The Languages of the Andes; Estigarribia (2020) Guaraní; reviews #49/#84 closed" },
  { n: 136, title: "Per-word deep dive: WATER, FIRE, SUN, MOON (the elements)",
    focus: "Read all four files (water, fire, sun, moon) END TO END. For each, sweep EVERY language entry for the single most likely error class given the concept: cognate consistency within families (PIE *wódr̥ reflexes, *péh₂wr̥ reflexes), the surface-IPA match, obvious wrong-word substitutions (a language giving 'river' for water, 'flame' vs 'fire', 'day/sun-god' vs 'sun'), and transcription outliers. You have the whole-file view that per-family reviewers lacked. Flag only airtight issues with the sibling/source evidence.",
    refs: "Buck (1949); per-language dictionaries; the four word files as their own evidence base" },
  { n: 137, title: "Per-word deep dive: MOTHER, FATHER, the kinship & baby-talk problem",
    focus: "Read mother.js and father.js END TO END. The classic error class: baby-talk/nursery forms (mama/papa/dada/nana) used where a neutral citation noun is the sibling norm, OR vice versa; the wrong register; a possessed form ('my mother') where the bare noun is wanted; mother/father SWAPPED; a language using the same form for both. Also IPA outliers. Whole-file view. Flag airtight issues only, with sourced correct forms.",
    refs: "Jakobson (1960) Why Mama and Papa; Buck (1949); per-language kinship terminology" },
  { n: 138, title: "Per-word deep dive: HELLO & THANKS (the speech-act problem)",
    focus: "Read hello.js and thanks.js END TO END. Highest error density historically (loanword greetings, register mismatch, phrase vs word). Sweep every entry for: a borrowed greeting where a native one exists and is the sibling norm; formality mismatch within a family; an entry that is actually 'goodbye' or 'good morning' not 'hello'; thanks that is a full phrase where siblings give a word (or vice versa); the cultural-absence cases (mark '—' correctly). Cross-check the closed reviews so as not to re-litigate adjudicated holds. Airtight only.",
    refs: "per-language phrasebooks and pragmatics literature; closed reviews #69/#77/#119 for prior adjudications" },
  { n: 139, title: "Per-word deep dive: EAT, DRINK, LOVE (the verb problem)",
    focus: "Read eat.js, drink.js, love.js END TO END. The citation-form problem at scale: is each language's verb in its conventional dictionary form (infinitive / stem / verbal noun / 3sg per language norm)? Flag intra-family inconsistency (one Romance language with a conjugated form among infinitives), love as noun-vs-verb mismatched with the definition block, eat/drink given as a finished participle. Whole-file view reveals the outliers. Airtight, sourced.",
    refs: "Buck (1949); per-language lexicographic citation conventions; closed reviews #100/#116" },
  { n: 140, title: "Per-word deep dive: TREE, HOUSE, DOG, CAT, HAND, EYE, HEART, ONE, GOOD",
    focus: "Read these nine concrete-noun/adjective files. Sweep for wrong-sense substitutions (tree vs wood/forest, house vs home/building, dog breed vs generic, hand vs arm, eye vs face, heart organ vs the emotional 'heart', 'one' cardinal vs ordinal/pronoun, 'good' the right adjectival sense), surface-IPA mismatches, and transcription outliers. Spread attention across all nine; aim for at least one airtight finding per file where the data warrants.",
    refs: "Buck (1949); Swadesh-list lexicography; per-language dictionaries" },
  { n: 141, title: "Tone-language cross-family consistency auditor",
    focus: "Across ALL tonal languages in the dataset (Sinitic, Vietnamese, Thai/Lao, Hmong-Mien, Yoruba/Igbo, Bantu with tone, Oto-Manguean, Punjabi, etc.), audit the TONE NOTATION SYSTEM for cross-consistency and within-language consistency: tone letters (˥˦˧˨˩) vs Chao digits vs superscript numbers vs diacritics — is each language internally consistent across its 20 entries? Are contour tones drawn correctly? Is a language missing tone marks on some entries but not others? This is a notation-hygiene pass orthogonal to whether any single tone value is right. Run grep counts as evidence.",
    refs: "Chao (1930) tone letters; Yip (2002) Tone; the dataset's own per-language tone convention" },
  { n: 142, title: "Vowel-length & gemination cross-family consistency auditor",
    focus: "Across ALL languages that contrast length (Finnish, Estonian, Japanese, Latin, Arabic, Tamil, Italian geminates, Hungarian, Czech/Slovak, Latvian, Ancient Greek, etc.), verify length marking is COMPLETE and CONSISTENT: every long vowel gets ː (or the double-letter convention), every geminate is doubled or marked, no entry silently drops length its siblings carry. Grep per language for ː counts and double letters as evidence; cite the sibling entries that prove the convention. Orthogonal residue pass after #52/#78/#117.",
    refs: "per-language phonology; reviews #52/#78/#117 closed (extend, do not repeat)" },
  { n: 143, title: "Script-correctness round-2: abjads & abugidas (Arabic, Hebrew, Indic, Ethiopic, Thai, Khmer)",
    focus: "Focus on the SURFACE field in non-Latin abjad/abugida scripts: are diacritics/vowel-points/viramas correct and complete? Arabic: shadda/sukun where needed for the citation form, hamza seat correct; Hebrew: niqqud presence policy consistent; Devanagari & other Indic: the virama/halant on final consonants, correct conjuncts, no missing nukta; Ethiopic: correct fidel order; Thai/Khmer: vowel-sign placement and the inherent vowel. Flag mojibake, wrong-block lookalikes, missing combining marks. Codepoint-exact.",
    refs: "Unicode script charts; per-script orthography standards; reviews #73/#75/#113 closed" },
  { n: 144, title: "Romanization & transliteration consistency auditor",
    focus: "For languages where the SURFACE is a romanization (not native script) — or where a romanization appears in the IPA slot — verify the scheme is the project-standard one per LANG_CODES.md and applied consistently: Hepburn for Japanese, Revised Romanization or McCune for Korean (which?), Pinyin for Mandarin, Hanyu vs Wade, BGN/PCGN vs scholarly for Cyrillic/Arabic. Flag mixed schemes within one language or a deviation from the family's declared standard. Read LANG_CODES.md first.",
    refs: "docs/words/LANG_CODES.md declared standards; ISO 233/259/3602; reviews #57/#58/#71 closed" },
  { n: 145, title: "Endangered & under-documented isolates spot auditor",
    focus: "Hunt the entries NO specialist reviewer owned because the language is an isolate or tiny family: grep LANG_CODES.md for families like 'isolate', 'unclassified', and small families, then audit those word entries against whatever primary documentation exists (WebSearch allowed). Targets: Ainu, Burushaski, Nivkh, Ket, Kusunda, Zuni, Seri, Hadza, Sandawe, Yukaghir, etc. Flag clearly wrong forms or transcriptions; where the form cannot be sourced, NOTE it as needing a human linguist rather than guessing.",
    refs: "per-isolate reference grammars; Glottolog; WebSearch for primary sources" },
  { n: 146, title: "Definition-block factual accuracy auditor",
    focus: "The definition:{} blocks inside each words/<word>.js give a short gloss/definition of the concept in multiple UI languages. Audit for FACTUAL and TRANSLATION accuracy: does the en definition correctly bound the concept (e.g. 'water' the substance, not 'to water')? Are the ja/ko/zh/etc. translations faithful and idiomatic? Any factual slips, mistranslations, or inconsistencies between the language versions? Cross-check all 20 files for a consistent definitional style. (Complements #114 which audited the label blocks.)",
    refs: "native-speaker usage; internal consistency across the 20 definition blocks; review #114 closed" },
  { n: 147, title: "Cross-file per-language style-drift auditor",
    focus: "Pick ~20 languages that appear in all 20 word files and check CROSS-FILE consistency of transcription STYLE (not any single value): does language X use the same rhotic symbol, the same stress-marking policy, the same broad-vs-narrow level, the same affricate tie-bar policy across all 20 of its entries? A language transcribed narrowly in water.js but broadly in dog.js is the bug class. Grep each language across all files; report the outlier file+entry with the majority as evidence.",
    refs: "internal cross-file consistency (the language's own 20 entries); reviews #74/#79/#115 closed" },
  { n: 148, title: "Stress-placement correctness auditor (lexical-stress languages)",
    focus: "For languages with contrastive or rule-governed lexical stress (Russian, Spanish, Italian, Greek, English, Portuguese, Polish, Dutch, German, etc.), verify the PRIMARY STRESS is on the correct syllable per the word, not just present: Russian unpredictable stress (and the vowel reduction it triggers — akanye o→ɐ/ə), Spanish/Italian penult-vs-antepenult, Greek the written accent position, Polish fixed penult, Hungarian/Finnish fixed initial. A misplaced ˈ that triggers wrong vowel reduction is the high-value catch. Cite the dictionary stress.",
    refs: "per-language dictionaries with stress marking; reviews #51/#52/#117 closed" },
  { n: 149, title: "Loanword & anachronism auditor for ancient/historical lects",
    focus: "Re-audit the historical/ancient codes (la, grc/el_grc, sa, pi, ang, enm, non, got, goh, gmh, egy, akk, sux, hit, peo, ave, cu, and the historical Sinitic/Japonic/Korean stages). Check: anachronistic modern IPA on an ancient form, a modern reflex standing in for the ancient word, attestation (an 'ancient' cell filled with a form not actually attested — should be '—'), the reconstruction-asterisk policy, and wrong period (Classical vs Vulgar Latin, Attic vs Koine Greek, Vedic vs Classical Sanskrit). Complements #100 and #76; do not re-report their fixes.",
    refs: "Weiss (Latin); Sihler (Greek/Latin); Ringe (Germanic); reviews #76/#100 closed" },
  { n: 150, title: "Senior holistic red-team — wave-12 closer & regression sweep",
    focus: "Final pass. (a) Regression spot-check: sample ~30 fixes applied in waves 11 (#101-120) from the closed-review worker sections and confirm they hold in live data and did not over-correct. (b) Hunt the single most embarrassing remaining error in each of the 20 word files, prioritizing the highest-traffic languages and any systematic region-block error. (c) Run node --check on all 20 files and validate_wordmap_data.js and report. Ruthless, verified, no padding — only airtight findings with sources.",
    refs: "whole-dataset perspective; all 120 closed reviews; validate_wordmap_data.js; primary sources per finding" },
]

const FMT = (p) => `You are reviewer #${p.n} for the LangMap **Wordmap** dataset — a senior linguist with deep knowledge of THIS project. Persona: ${p.title}.

This is WAVE 12 of the review rally: reviews #01-120 are ALL closed; well over 1700 issues have been found and fixed, so the data is now quite clean. Your value is finding the SUBTLE, SHARP issues that survived. Be fine-grained and exacting. Do NOT re-report anything already fixed or already adjudicated as wont-fix in a closed review (when in doubt, grep wordmap_reviews/*_closed.md for the word+code before reporting).

Project structure: word data lives in words/<concept>.js (20 files: water, fire, sun, moon, mother, father, eat, drink, love, heart, tree, house, dog, cat, hand, eye, hello, thanks, one, good). Each file is: WORDS.<concept> = { label:{...}, definition:{...}, data:{ <langcode>: ["surface", "ipa"], ... } }. Project docs: docs/words/CONTRIBUTING.md, docs/words/LANG_CODES.md. Language metadata lives in wordmap_data.js / wordmap_meta.js (do not audit those unless your persona says so).

Your review lens / focus: ${p.focus}
Reference works / sources to cite: ${p.refs}

TASK — create wordmap_reviews/review_${p.n}.md (a NEW file you alone create):
1. GROUND YOURSELF: grep the live data FIRST to discover which language codes in your remit actually exist (never assume). Read the relevant docs. Verify every Current value verbatim against the live file with line numbers — NEVER invent values. Confirm each issue still exists right now.
2. Find GENUINE, sharp, defensible issues (aim for 8-15 airtight ones; fewer is fine if your area is clean — absolutely no padding or fabrication). Each must be a real error or a well-supported, sourced improvement. WebSearch/WebFetch are allowed for sourcing correct forms.
3. WRITE the file in EXACTLY this format (match the existing closed reviews — use markdown code spans around values):

# Wordmap review #${p.n} — ${p.title}

## Reviewer self-introduction (ペルソナ自己紹介)

<one rich paragraph: credentials, familiarity with this project data model and conventions, and the named reference works and project docs you use>

---

## Issues found

### 1. <code> — <word> — <short, sharp title>
- **File:** words/<word>.js line <N>
- **Current:** ["<surface>", "<ipa>"]
- **Expected:** ["<surface>", "<ipa>"]
- **Why:** <precise, sourced explanation — name the rule/source and cite sibling-entry evidence for consistency findings>

---

### 2. ...

End the file with: *All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

CONSTRAINTS:
- READ-ONLY on all words/*.js and docs — you ONLY create your own review_${p.n}.md.
- Verify every Current value against the live file before writing it.
- Match the rigorous bilingual-friendly style of the existing reviews.

Return JSON: {file, issueCount, summary}.`

const SCHEMA = {
  type: 'object',
  required: ['file', 'issueCount', 'summary'],
  properties: { file: { type: 'string' }, issueCount: { type: 'integer' }, summary: { type: 'string' } },
}

phase('Generate')
log(`Wave 12: generating ${PERSONAS.length} Wordmap reviews (review_121..150)`)
const results = await parallel(PERSONAS.map((p) => () =>
  agent(FMT(p), { label: `review#${p.n}`, phase: 'Generate', schema: SCHEMA })))

const ok = results.filter(Boolean)
return {
  generated: ok.length,
  totalIssues: ok.reduce((n, r) => n + (r.issueCount || 0), 0),
  files: ok.map((r) => ({ file: r.file, issues: r.issueCount, summary: r.summary })),
}
