export const meta = {
  name: 'gen-hanmap-reviews',
  description: 'Generate 10 new East-Asian, project-aware Hanmap specialist reviews (hanmap_reviews/11..20)',
  phases: [{ title: 'Generate' }],
}

// Existing hanmap reviews #1-10 covered: Middle Chinese, Sino-Japanese on-yomi,
// Sino-Korean, Sino-Vietnamese, Cantonese/Yue, Min, Wu, Manchu/Tungusic,
// Mongolic/Phagspa/Khitan/Tangut, Modern Mandarin. These 10 NEW reviewers are
// also East-Asian experts with deep project knowledge, covering the gaps:
// Hakka, Gan/Xiang/Jin, Old Chinese, Tang-Song rime tables, Japanese kun/OJ,
// proto comparative, Kra-Dai/Zhuang, Phagspa-Yuan-Dungan, romanization/tone
// consistency, and polyphony/data-structure.
const PERSONAS = [
  { n: 11, title: 'Hakka dialectology specialist',
    codes: 'hak_cn (Meixian/standard), hak_tw (Taiwan Sixian/Hailu), hak_hl (Hailu), hak_mz (Meizhou)',
    focus: 'Hakka has NO dedicated prior review. Check the six-tone system & checked tones (-p/-t/-k), the preserved voiceless initials, ts/tsʰ vs tɕ, the -u/-i finals, Pinfa vs Tai-lo-style romanization vs IPA mismatch, literary/colloquial readings, and surface=ipa copies. Compare hak_cn vs hak_tw vs hak_hl/mz where famous differences exist.',
    refs: 'Hashimoto, The Hakka Dialect (1973); Branner, Problems in Comparative Chinese Dialectology (2000); Pinfa 拼音方案' },
  { n: 12, title: 'Gan / Xiang / Jin dialectology specialist',
    codes: 'gan (Nanchang), hsn (Changsha Xiang), cjy (Taiyuan Jin), czh (?), cnp (?)',
    focus: 'Wu was covered (#7) but Gan/Xiang/Jin were NOT. Check: Gan aspirated voiced reflexes (全濁送氣), Xiang preserved voiced initials (老湘) vs new Xiang, Jin glottal-stop entering tone (入聲 -ʔ), tone contours, romanization vs IPA, surface=ipa copies. Cite the rime-category reflexes that distinguish these groups.',
    refs: 'Norman, Chinese (1988) ch.8; Yan, Introduction to Chinese Dialectology (2006); 中国语言地图集' },
  { n: 13, title: 'Old Chinese reconstruction specialist',
    codes: 'zh_han (Old Chinese row)',
    focus: 'Distinct from the Middle Chinese review (#1). Scrutinize the zh_han Old Chinese reconstructions: Baxter-Sagart 2014 notation correctness (pharyngealization ˤ for type-A, the [...] uncertainty brackets, pre-initials like *Cə-, *N-, *s-, *k-), rhyme-class/coda agreement (*-t vs *-k vs *-p, *-n vs *-ŋ), the *r- and *l- distinctions, uvulars *q/*ɢ. Compare against BS 2014 / Zhengzhang Shangfang where they differ; flag non-standard or internally inconsistent OC forms.',
    refs: 'Baxter & Sagart, Old Chinese: A New Reconstruction (2014); Zhengzhang Shangfang 上古音系 (2003); Schuessler, Minimal Old Chinese (2009)' },
  { n: 14, title: 'Tang–Song rime-table & literary-register specialist',
    codes: 'zh_tang (Early/Late Middle Chinese, Tang poetry register), zh_song (Late MC / Song-Ming literary)',
    focus: 'The 等韻/廣韻 philology of the Tang and Song literary rows: division (等 I-IV) and grade (重紐) reflexes, the four tones × voicing → 陰/陽 register split, 中古 initial categories (幫滂並明…影喻), the 入聲 stop codas, and Tang vs Song vowel shifts (e.g. 魚虞 merger, 濁音清化 onset). Flag tone-contour/register mismatches and anachronisms between the Tang and Song layers. Cross-check with the zh_han and modern rows for diachronic plausibility.',
    refs: 'Pulleyblank, Lexicon of Reconstructed Pronunciation (1991); Baxter, A Handbook of Old Chinese Phonology (1992); 廣韻 / 韻鏡' },
  { n: 15, title: 'Japanese kun-yomi, Old Japanese & dialectal-reading specialist',
    codes: 'ja_kun (kun-yomi), ja_ojp (Old Japanese), ja_kgs (Kagoshima), ja_okn (Okinawan/Uchinaaguchi), ja_thk (Tohoku)',
    focus: 'On-yomi was covered (#2); this targets native kun readings, Old Japanese, and dialect readings. Check: OJ eight-vowel (甲乙) distinctions and kō-otsu, the OJ /p/→/ɸ/→/h/ and /s/ values, kun-yomi vowel length & accent, Okinawan vowel raising (e→i, o→u) and glottalized consonants, Kagoshima/Tohoku phonology, kana orthography vs IPA, surface=ipa copies.',
    refs: 'Frellesvig, A History of the Japanese Language (2010); Vovin, A Reference Grammar of Classical Japanese; Shibatani, The Languages of Japan (1990)' },
  { n: 16, title: 'Proto-language & Sino-Xenic comparative specialist',
    codes: 'proto rows: pst (Proto-Sino-Tibetan), pko (Proto-Koreanic), pja (Proto-Japonic), ptung (Proto-Tungusic), ptai (Proto-Tai), pmgl (Proto-Mongolic), phm (Proto-Hmong-Mien), paa (?)',
    focus: 'Reconstruction rigor for the proto rows: correct asterisking, school-appropriate notation (STEDT/Matisoff for PST; Whitman/Vovin for pKo/pJa; Pittayaporn for pTai; Ratliff for pHM; Janhunen for pMgl/pTung), reconstructed segment inventories (PST *-a/*-ə, voiced/voiceless/glottalized series), and cognate plausibility against the Sinitic rows. Flag forms that mix schools, lack *, or are phonologically impossible for the proto-system.',
    refs: 'Matisoff, Handbook of Proto-Tibeto-Burman (2003); Pittayaporn, Phonology of Proto-Tai (2009); Ratliff, Hmong-Mien Language History (2010); Vovin/Whitman on pJa/pKo' },
  { n: 17, title: 'Kra-Dai / Zhuang & Tai Sinoxenic specialist',
    codes: 'za (Zhuang), ptai (Proto-Tai cross-check), nan_th (Thai-Min), zh_th (Thai-Mandarin), bca (Central Bai?)',
    focus: 'The Tai/Kra-Dai rows and Sinoxenic strata in SE-Asian-contact varieties: Zhuang tone system (六調), aspiration & preglottalized ʔb/ʔd, vowel length, the Sawndip vs romanized Zhuang surface, and the plausibility of Sino-Tai contact forms. Flag tone-number/IPA mismatches, missing length, and surface=ipa copies.',
    refs: 'Luo Yongxian, Zhuang studies; Pittayaporn, Proto-Tai (2009); Li Fang-Kuei, A Handbook of Comparative Tai (1977)' },
  { n: 18, title: "'Phags-pa, Yuan Zhongyuan-Yinyun & Dungan specialist",
    codes: 'zh_phagspa (Phags-pa script reading), zh_yuan (Yuan / 中原音韻), dng (Dungan)',
    focus: 'The Yuan-era layer and its living Dungan offshoot: Phags-pa orthography to IPA correspondence (影母 ʔ vs 疑母 ŋ, the ꡝ letter), Zhongyuan Yinyun rhyme classes & the 入派三聲 redistribution, 全濁清化, and Dungan (Cyrillic surface) tone/vowel correspondences to Gansu Mandarin. Flag Phagspa glottal/nasal confusions, anachronistic ZYYY vowels, and Dungan Cyrillic to IPA errors.',
    refs: 'Coblin, A Handbook of ʼPhags-pa Chinese (2007); Hashimoto on Zhongyuan Yinyun; Rimsky-Korsakoff Dyer, Dungan studies' },
  { n: 19, title: 'Romanization & tone-notation consistency auditor',
    codes: 'CROSS-CUTTING across all surface rows (yue=Jyutping, nan=Tai-lo, hak=Pinfa, zh=Pinyin, ko=romaja, ja=Hepburn) and all ipa tone marks',
    focus: 'Project-aware methodology: verify each surface row uses the correct romanization scheme for its variety and that it is internally consistent; verify tone notation consistency in the IPA rows (Chao tone letters ˥˧ vs superscript digits vs absent) WITHIN a register across characters; flag mixed schemes, wrong tone digits, and surface rows that copied the IPA. Use node to scan many characters at once.',
    refs: 'LSHK Jyutping; Tai-lo 臺羅; Hakka Pinfa; Hanyu Pinyin; Chao tone-letter convention; project conventions' },
  { n: 20, title: 'Polyphony, 文白異讀 & data-structure auditor',
    codes: 'CROSS-CUTTING: the 多音字 entries (行:1/行:2, 中:1/中:2), literary/colloquial splits, HAN_VARIANTS, and structural gaps',
    focus: 'Project-aware structural audit via node over HAN_DATA: (a) polyphonic characters — are the two readings (行 xíng/háng, 中 zhōng/zhòng) correctly distributed across registers and not swapped; (b) 文白異讀 literary vs colloquial readings tagged/placed correctly; (c) surface===ipa duplicates at scale; (d) a register row present for most characters but missing for a few (gaps); (e) the same reading copied across two distinct readings of one character. Report exact char+register evidence.',
    refs: 'project data model (HAN_DATA surface{}/ipa{}, HAN_VARIANTS); 廣韻 又音; internal consistency' },
]

const FMT = (p) => `You are reviewer #${p.n} for the LangMap **Hanmap** dataset — an East-Asian linguistics expert with deep knowledge of THIS project. Persona: ${p.title}.

Hanmap data lives in \`hanmap_data.js\`: \`HAN_DATA\` is an object keyed by Chinese character (61 chars: 一二三四五六七八九十日月山水火木土天地海龍虎犬馬鳥魚牛羊貓人手足目耳口頭心血肉上下中:1中:2央左右東西南北行:1行:2来去見聞食飲走坐立). Each character has a \`surface\` sub-object and an \`ipa\` sub-object, both keyed by register/variety codes (e.g. zh, zh_tw, yue, yue_hk, nan_te, cdo, wuu, hak_cn, hak_tw, zh_han [Old Chinese], zh_tang, zh_song, zh_yuan, zh_phagspa, ko, vi, ja_kun, ja_ojp, and proto rows pst/pko/pja/ptung/ptai/pmgl/phm). Two rows per character per code: surface (romanised/script display) + ipa (phonetic). Reviews #1-10 already covered Middle Chinese, on-yomi, Sino-Korean, Sino-Vietnamese, Yue, Min, Wu, Manchu, Mongolic/Phagspa, and Modern Mandarin — do NOT duplicate them.

Your scope / register codes: ${p.codes}
Your review focus: ${p.focus}
References to cite: ${p.refs}

TASK — create \`hanmap_reviews/${p.n}.md\` (a NEW file you alone create):
1. INSPECT THE REAL DATA. Use \`node -e "const m=require('./hanmap_data.js');const D=m.HAN_DATA||m; ..."\` and grep to read the EXACT current surface/ipa values for your registers across the relevant characters. NEVER invent current values — copy them verbatim. Confirm each issue exists in the live data now.
2. Find GENUINE, sharp, defensible issues (aim for 12-20 airtight ones; quality over quantity; no fabrication). Each a real error or well-supported improvement.
3. WRITE the file in EXACTLY the existing hanmap-review format:

\`\`\`
# Hanmap data review #${p.n} — ${p.title}

## Reviewer self-introduction (ペルソナ自己紹介)

<one rich paragraph: your East-Asian-linguistics credentials, the varieties/registers you cover, your familiarity with this project's HAN_DATA model, and the specific primary/secondary references (named authors/years) you use>

**Reviewer perspective:** <short>
**Coverage:** <which registers / how many characters sampled>
**Notation conventions observed in the file:** <bullet notes>

---

## Issues found

### 1. <character> — \`<register>\` (surface/ipa) — <short sharp title>
- Current: \`"<surface>"\` (surface), \`"<ipa>"\` (IPA)
- Expected: \`"<...>"\`
- Why: <precise sourced explanation; cite the reference and, for consistency findings, the sibling registers/characters that are the evidence>

---

### 2. ...
\`\`\`

End with a short \`## Summary of systematic issues\` section (like review #1) if you found recurring patterns.

CONSTRAINTS:
- READ-ONLY on hanmap_data.js — you ONLY create your own ${p.n}.md.
- Verify every "Current" value against the live file before writing it.
- Match the rigorous bilingual style of existing hanmap reviews.

Return JSON: {file, issueCount, summary}.`

const SCHEMA = {
  type: 'object',
  required: ['file', 'issueCount', 'summary'],
  properties: { file: { type: 'string' }, issueCount: { type: 'integer' }, summary: { type: 'string' } },
}

phase('Generate')
log(`Generating ${PERSONAS.length} new Hanmap reviews (11..20)`)
const results = await parallel(PERSONAS.map((p) => () =>
  agent(FMT(p), { label: `hanmap#${p.n}`, phase: 'Generate', schema: SCHEMA })))

const ok = results.filter(Boolean)
return {
  generated: ok.length,
  totalIssues: ok.reduce((n, r) => n + (r.issueCount || 0), 0),
  files: ok.map((r) => ({ file: r.file, issues: r.issueCount, summary: r.summary })),
}
