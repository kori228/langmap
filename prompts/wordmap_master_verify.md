# Word Map Master Verification Prompt

## Role

You are a linguistic data verifier with broad knowledge of world languages, multiple writing systems, and IPA transcription. You have access to authoritative sources: Wiktionary, language-specific reference grammars, Glossika, Ethnologue, Glottolog, and academic publications.

## Task

Verify or correct the 20-word vocabulary, IPA, native script spelling, native autonym, geographic coordinates, and English meta information for a single language entry from `wordmap_data.js` and `wordmap_meta.js`.

## Word list (Swadesh-derived universal core)

```
water, fire, sun, moon, mother, father, eat, drink, love, heart,
tree, house, dog, cat, hand, eye, hello, thanks, one, good
```

Citation forms:
- Nouns: nominative singular (or absolute form)
- Verbs: infinitive or 3sg present (whichever is the dictionary citation)
- "Hello": neutral greeting, not strictly time-of-day specific unless that is the only natural option
- "Thanks": expression of gratitude (loanwords from Russian/English/Arabic acceptable for endangered languages with no native form)
- "One": numeral 1 (use the relevant cardinal counting form, not numeral classifier compounds)
- "Cat": prefer native term; loanwords from Russian/English are acceptable for endangered/contact languages where cats are a recent introduction

## Per-entry checklist

For each language `<code>`, verify:

### 1. Identity fields
- [ ] **`name`**: English name matches the most common reference (Ethnologue or Wikipedia)
- [ ] **`native`**: Autonym in the standard script(s) is correct
- [ ] **`lat`/`lng`**: Coordinates point to a representative city/region for the speaker community

### 2. Word entries (20 × 2)
For each word `[<native>, <ipa>]`:
- [ ] Native script spelling matches a citation form in a published dictionary
- [ ] IPA transcription is broad-phonemic, internally consistent
- [ ] For tonal languages: tone marking is consistent (Chao numbers, accent letters, or diacritics — do not mix)
- [ ] For polysynthetic languages: the form chosen represents the closest equivalent (verb stem vs full word, with note if needed)

### 3. Meta fields
- [ ] **`family`**: Matches Glottolog/Ethnologue classification at appropriate granularity
- [ ] **`speakers`**: Census or recent estimate (cite year)
- [ ] **`countries`**: Primary speaker territories
- [ ] **`official`**: Current legal status accurate (check 2020s recognition)
- [ ] **`script`**: All scripts in active use listed (with year of adoption if recent)
- [ ] **`description`**: Factually accurate, no over-statement of vitality

## Output format

```
=== <code> ===
NAME: OK | corrected → "<new value>"
NATIVE: OK | corrected → "<new value>"
COORDS: OK | corrected → [lat, lng] (reason: <new city>)
WORDS:
  water: OK | corrected → ["<native>", "<ipa>"] (source: <citation>)
  fire: OK | corrected → ["<native>", "<ipa>"]
  ... (all 20)
META:
  family: OK | corrected → "<value>"
  speakers: OK | corrected → "<value>"
  countries: OK | corrected → "<value>"
  official: OK | corrected → "<value>"
  script: OK | corrected → "<value>"
  description: OK | corrected → "<rewritten value>"
```

If everything is correct, output:
```
=== <code> ===
ALL OK
```

## Cross-validation strategy (5-run pipeline)

Run this prompt 5× per language with different LLM seeds/models. Treat as canonical correction any change that appears in ≥3 of 5 runs. Flag for manual review any change that appears in 1-2 runs only.

## Phase summary (203 new entries since 2026-05-02)

The following 17 phases were added by an LLM-assisted bulk addition. Confidence varies by phase:

### Higher-confidence phases (6: well-documented, established orthographies)
- **Phase 2** (high-population): cjy hsn gan mai awa skr sat mad hil bal ak mk
- **Phase 3A** (Bantu+Mande+Berber): lg ki tn st ts ve bem lua kg ff bm kab
- **Phase 3C** (Mayan/Andean/Algonquian): quc yua kek tzo mix zap ay arn cr oj lkt kl
- **Phase 3F** (TB+Indonesian): mni new brx lus dz min ban ace bug war bik tum
- **Phase 3H** (Sinitic): mnp cpx nan_te yue_ts wuu_wz wuu_sz czh cnp zh_jh zh_tj zh_lz dng
- **Phase 3I** (Euro/Uralic minor): hsb csb fur ast an rup wa kv udm mhr myv krl
- **Phase 3O** (Indonesian/Phil/Pahari): bbc bjn sas kha mns mrw tsg yap chk gbm kfy xnr
- **Phase 3P** (BCS/Borneo/Berber/Angola/Mongolic): hr bs iba ljp tzm ng umb kmb her xal sg toi

### Medium-confidence phases (limited public IPA references)
- **Phase 1** (Russian Far East): sah tyv kjh alt bxr evn eve yrk kca **ckt niv ket** (last 3 paleosiberian, low confidence)
- **Phase 3D** (Caucasus): ce inh av lez dar lbe tab ady kbd ab xmf os
- **Phase 3E** (Pacific/Aus): ty niu tvl rap rar mh gil ch tet bi pjt wbp
- **Phase 3G** (Nilotic/Cushitic/Berber/SA): din nus luo mas sid aa shi rif mwr bgc ks kok
- **Phase 3J** (Iranian/Turkic/TB): mzn glk lrc crh tt ba krc ksw lhu lis nxq shn
- **Phase 3K** (W African/Khoisan): ee nyn luy ssw nbl nso fan naq hts kr men dyu
- **Phase 3L** (NA Indigenous/SA/SE): syl mag doi mon xkk moh cho esu ipk apw dak chy
- **Phase 3M** (Italian regional/SA/Pac): lmo pms eml mwl pnt hno bhb cja hmo pon syr vmw

### Lower-confidence phase (rare/iconic, limited documentation)
- **Phase 3N** (rare/iconic): dsb gv kw zza brh mrq tiw guc **myp** emp kpe loz
  - **myp Pirahã**: notes — has no exact numerals (uses "small"/"larger"); "one" rendered as "hói" is approximate

## Specific concerns flagged across phases

- **Sinitic tone notation**: All Sinitic phases use Chao numbers per dialect. Verify each dialect's tone inventory and that numbers reflect actual phonetic values.
- **Saraiki implosives** (skr): ٻ ݙ ݨ ݪ are retroflex/implosive letters. Confirm IPA `ɓ ɗ ʄ ɠ` corresponds correctly.
- **Ol Chiki** (sat Santali): each glyph must match the intended phoneme; high typing-error risk.
- **Click consonants** (naq Nama): ǀ ǁ ǂ ǃ are 4 phonemic types — verify each word uses the correct type.
- **Cyrillic with extended letters**: many Russian minority languages have unique characters (ӓ ӧ ӱ ҥ ҷ ҙ ӡ ӡ̌ ћ ӝ ӟ ӥ ӵ etc.). Verify all are in their intended Unicode positions.
- **Mongol bichig and Manchu script**: vertical scripts. Verify with reference fonts.
- **Cree syllabics**: each syllabic block should match the consonant+vowel intended.
- **Mon and Burmese-derived scripts**: stacking diacritics often render incorrectly.
- **Hello/Thanks for endangered languages**: Russian "spasibo" or English "thank you" loans are acceptable when no native form exists.

## Coverage statement

Total Word Map languages: 430 (226 baseline + 204 added across phases 1-3P).
Verification batch should produce 430 reports.

## See also

- `prompts/wordmap_siberia_verify.md` — original Phase 1 specific concerns
- `prompts/wordmap_phase2_verify.md` — original Phase 2 specific concerns
