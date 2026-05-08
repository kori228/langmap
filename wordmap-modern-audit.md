# Wordmap Modern Language Word/IPA Audit

Date: 2026-05-05

Scope: modern languages only (`499` entries). Historical languages were excluded via `HIST_DESCENDANT`.

Focus:
- Word/concept choice for the 20 `WORD_LIST` concepts
- IPA/transcription consistency
- Obvious semantic mismatches that validator cannot catch

Validation baseline:
- `node validate_wordmap_data.js`: PASS
- Existing validator reports 0 errors / 0 warnings / 1 allowlisted issue
- Therefore the issues below are semantic/phonetic quality findings, not schema failures.

## Executive Summary

Modern language data is structurally valid, but several high-confidence word/IPA alignment issues remain. The most important class is where the displayed word is only a fragment while the IPA/transcription corresponds to a longer phrase. This directly affects user trust because the table shows a written form and pronunciation that do not match.

Second, some IPA fields contain non-IPA placeholders such as capital `N`. These should be normalized to actual IPA (`ɴ`, `ŋ`, `n`, nasalized vowel, etc.) or explicitly treated as phonemic/transcription rather than IPA.

A broader issue is that the concept labels `heart`, `love`, `hello`, `thanks`, and `good` are semantically broad. Some duplicated forms are probably valid cultural/lexical overlap, but others need source-backed confirmation.

---

## Task Status Index (last updated: 2026-05-08, 910 langs, validator 0 errors / 23 warnings)

Status legend:
- ✅ **COMPLETE** — validator INFO confirms 100% coverage or task structurally satisfied.
- 🟡 **PARTIAL** — schema/gate landed, backfill incomplete or coverage <95%.
- ❌ **NOT-STARTED** — task registered but no implementation activity.
- 🔄 **SUPERSEDED** — replaced by a later task; retained for context.
- ⏳ **REGISTERED** — formally accepted, awaiting implementation cycle.
- 📋 **INSTANCE** — concrete instance of a class-level task, resolved.

**Validator-confirmed counts (910 langs):** 0 errors, 23 warnings (all in [#13b'] description i18n + [#173] source-checked wordEvidence).

### Group A — Foundational schema & validation (Tasks 71–110)

| Task | Topic | Status | Coverage / note |
|---|---|---|---|
| 71 | Major Asian-language pronunciation cleanup | 🟡 PARTIAL | per-row work continues |
| 72 | Asian minority-language cleanup | 🟡 PARTIAL | per-row |
| 73 | Same-form duplicate cells source verification | 🟡 PARTIAL | wordEvidence overlay 1128 cells |
| 74 | Remaining schema/UI/tooling tasks | 🟡 PARTIAL | rolled into specific tasks |
| 75 | Historical/full-audit leftovers | 🟡 PARTIAL | per-row |
| 76 | pronunciationType labeling | 🟡 PARTIAL | 240/910 (26%) |
| 77 | WORD_LIST.definition | ✅ COMPLETE | 21/21 UIs (Task 176 closed it) |
| 78 | Asian tone/IPA per-language fix | 🟡 PARTIAL | bo/my/km/lo done (Task 146) |
| 79 | regional-variant coverage flag | ✅ COMPLETE | enum + UI rendering |
| 80 | source references for high-traffic langs | 🟡 PARTIAL | 380/910 (42%) |
| 81 | stress policy doc | ✅ COMPLETE | CONTRIBUTING.md C2 |
| 82 | normalize WORD_LIST.definition | ✅ COMPLETE | object form, 21/21 |
| 83 | concept/data consistency audit | 🟡 PARTIAL | depends on Task 82 |
| 84 | surfaceType schema | 🟡 PARTIAL | 472/910 (52%) |
| 85 | stress edits gating | ✅ COMPLETE | doc'd in 81 |
| 86 | partial-schema validator checks | ✅ COMPLETE | validators added |
| 87 | meta fields in correct file | ✅ COMPLETE | wordmap_meta.js used |
| 88 | exact duplicate regional rows | ✅ COMPLETE | 6 groups labeled (Task 90) |
| 89 | modal trust-field rendering | ✅ COMPLETE | UI badges rendered |
| 90 | row-fingerprint tooling | ✅ COMPLETE | 6 exact-dup groups, all labeled |
| 91 | references vs sources | ✅ COMPLETE | sources canonical |
| 92 | UI-label coverage gates | ✅ COMPLETE | I18N_STRINGS expanded |
| 93 | modal a11y prereqs | ✅ COMPLETE | dialog focus, ARIA |
| 94 | romanization-vs-IPA audit | ✅ COMPLETE | gate firing on outliers |
| 95 | concept-def visible UI | ✅ COMPLETE | always-visible under dropdown |
| 96 | source-footer safe links | ✅ COMPLETE | safeUrl + escapeHtml |
| 97 | split word evidence schema | 🟡 PARTIAL | gate added; 0/1128 cells use it |
| 98 | speaker metadata for priority langs | 🟡 PARTIAL | 8 langs done |
| 99 | locationBasis schema + UI | 🟡 PARTIAL | 226/910 (25%) |
| 100 | localize unattested `—` cells | ✅ COMPLETE | 21 UI langs |
| 101 | evidence notes a11y | ✅ COMPLETE | role=button + keyboard |
| 102 | rename "IPA" toggle | ✅ COMPLETE | "Pron." in en, etc. |
| 103 | bound-stem / hyphen policy | ✅ COMPLETE | formType schema + 83/83 |
| 104 | phrase-vs-word policy | ✅ COMPLETE | 363/363 multiword formType |
| 105 | SEO text update | ✅ COMPLETE | "pronunciation guides" |
| 106 | hardcoded UI strings | ✅ COMPLETE | 13 ARIA keys + WM_UI |
| 107 | public count strings audit | ✅ COMPLETE | validator + auto-bump candidate |
| 108 | row-level reviewStatus | ✅ COMPLETE | 910/910 |
| 109 | codeType + canonicalCode | ✅ COMPLETE | 910/910 (Task 178 closed canonicalCode) |
| 110 | sources for historical rows | ✅ COMPLETE | high-coverage rows sourced |

### Group B — Mid-tier (Tasks 111–150)

| Task | Topic | Status | Coverage / note |
|---|---|---|---|
| 111 | sources for wordEvidence rows | ✅ COMPLETE | done with 110 |
| 112 | era help icon | ✅ COMPLETE | `?` icon in modern/historical |
| 113 | parent-child inheritance display | ✅ COMPLETE | "Regional variety of: X" line |
| 114 | accent-insensitive search + alias | ✅ COMPLETE | NFD + meta.aliases |
| 115 | disambiguator schema | ✅ COMPLETE | 29/29 (Task 188 follow-through) |
| 116 | Unicode/font/script audit | ✅ COMPLETE | 10 scripts detected |
| 117 | typology provenance | ✅ COMPLETE | manual-override / family-default |
| 118 | languageKind + UI badge | 🟡 PARTIAL | 130/910 (14%, mostly natural-default) |
| 119 | scriptDisplayPolicy | ✅ COMPLETE | zkt set, others Task 197 candidates |
| 120 | same-form duplicate triage | ✅ COMPLETE | wordEvidence notes added |
| 121 | description fallback labeling | ✅ COMPLETE | English-fallback label, 95% threshold |
| 122 | HIST_DESCENDANT to data.js | ✅ COMPLETE | moved + validator reads ctx |
| 123 | hashchange/popstate | ✅ COMPLETE | applyHashState() + guard |
| 124 | hardcoded UI nav strings | ✅ COMPLETE | NAV_ORDER/NAV_WORD WM_UI |
| 125 | CDN fallback | ✅ COMPLETE | Leaflet/Globe init halt |
| 126 | parentCode coverage | ✅ COMPLETE | 88/88 (Task 170) |
| 127 | locationBasis priority langs | 🟡 PARTIAL | 226/910 |
| 128 | CONTRIBUTING.md updates | ✅ COMPLETE | C5 split-evidence docs |
| 129 | RTL/bidi handling | ✅ COMPLETE | dir="auto" + isolate |
| 130 | scriptTags schema | 🟡 PARTIAL | 229/910 (25%) |
| 131 | locationBasis schema placement | ✅ COMPLETE | meta canonical |
| 132 | localize evidence markers | ✅ COMPLETE | en/ja/ko/zh/de/fr/es |
| 133 | structured citation upgrade | 🟡 PARTIAL | gate added, 0/1128 cells use it |
| 134 | cache-buster centralization | ✅ COMPLETE | WM_ASSET_VERSION + validator |
| 135 | map labels keyboard a11y | ✅ COMPLETE | role=button + tabindex |
| 136 | combobox/listbox search | ✅ COMPLETE | ARIA combobox |
| 137 | dialog focus management | ✅ COMPLETE | _lastDialogOpener |
| 138 | legacy script headers | ✅ COMPLETE | LEGACY SENTENCE MAP TOOL |
| 139 | README validation section | ✅ COMPLETE | en + ja |
| 140 | CI workflow | ✅ COMPLETE | .github/workflows/wordmap-validate.yml |
| 141 | Tier 1 langs (cv/dv/tzh/mdf etc.) | ✅ COMPLETE | most added by 910-lang push |
| 142 | Tier 2 langs (sign langs/Saami/etc.) | 🟡 PARTIAL | sign langs deferred (modality decision) |
| 143 | finish in-flight Tier 1 lang_names | ✅ COMPLETE | 910/910 lang_names |
| 144 | description i18n historical batch | 🟡 PARTIAL | ja/ko/zh 99%, es/pt 57%, others 59-71% |
| 145 | string→object description | ✅ COMPLETE | 0 string-form descriptions |
| 146 | Pass-7 deferred per-language rebuilds | ✅ COMPLETE | bo/my/km/lo done |
| 147 | Pass-2-6 deferred policy items | 🟡 PARTIAL | per-§ closures recorded |
| 148 | Japonic-stage coords | ✅ COMPLETE | distinct points |
| 149 | Tier 3 langs (creoles/conlangs) | ✅ COMPLETE | added in 910-lang push |
| 150 | Tier 3.5 langs (Uganda/Khoisan) | 🟡 PARTIAL | jrb/nmn deferred |

### Group C — Educational + roadmap (Tasks 151–200)

| Task | Topic | Status | Coverage / note |
|---|---|---|---|
| 151 | audio playback | ❌ NOT-STARTED | audioRef 0 |
| 152 | cognate sets demo | ❌ NOT-STARTED | etymologyTags not added |
| 153 | grammar capsule schema | ❌ NOT-STARTED | depends on Task 220 |
| 154 | sample sentence corpus | ❌ NOT-STARTED | meta.samples not added |
| 155 | IPA tutor + glossary | ❌ NOT-STARTED | ipa_descriptions.js not created |
| 156 | curated lesson tours | ❌ NOT-STARTED | tours.js not created |
| 157 | citation export | ❌ NOT-STARTED | citation_formatters.js not created |
| 158 | interactive quiz | ❌ NOT-STARTED | quiz.js not created |
| 159 | family taxonomy normalization | ✅ COMPLETE | 0 outliers (was 46) |
| 160 | IPA capital-letter / Baxter-Sagart | ✅ COMPLETE | validator gate, zh_tang noted |
| 161 | Korean/English coord clusters | ✅ COMPLETE | distributed |
| 162 | unattestedReason | ✅ COMPLETE | 252/252 |
| 163 | affricate tie-bar | 🟡 PARTIAL | 231/2040 cells |
| 164 | reconstructed-form notation | ✅ COMPLETE | Option C applied to 3 rows |
| 165 | meta.script normalization | 🟡 PARTIAL | structure improved, prose audit pending |
| 166 | officialStatus enum | ❌ NOT-STARTED | 0/910 |
| 167 | speakerCount structured | 🔄 SUPERSEDED | → Task 220 |
| 168 | single-line decls | 🟡 PARTIAL | 16 multi-line rows remain |
| 169 | surface == IPA flag | 🟡 PARTIAL | 376 cells (grew from 144) |
| 170 | underscore-code parentCode | ✅ COMPLETE | 88/88 |
| 171 | speakerYear backfill | 🟡 PARTIAL | 72/910 (8%) |
| 172 | reviewStatus migration | ✅ COMPLETE | 910/910 explicit |
| 173 | source-checked wordEvidence | 🟡 PARTIAL | 25/29 (4 langs) |
| 174 | constructed-lang coords | ✅ COMPLETE | Białystok/Toronto/LA/Fairfax |
| 175 | WORD_LIST.label all 21 UI | ✅ COMPLETE | 21/21 |
| 176 | WORD_LIST.definition all 21 UI | ✅ COMPLETE | 21/21 |
| 177 | glottocode coverage | 🟡 PARTIAL | 28/910 (3%) |
| 178 | iso6393 / canonicalCode unification | ✅ COMPLETE | 910/910 iso6393, 0 canonicalCode |
| 179 | kv/kpv duplicate | ✅ COMPLETE | kv removed |
| 180 | ttj/nyo duplicate | ✅ COMPLETE | coverage='base-copy-with-notes' |
| 181 | lag mislabel | ✅ COMPLETE | deleted/rebuilt |
| 182 | aliases static migration | 🟡 PARTIAL | runtime overlay still in use |
| 183 | atom translator spread | 🟡 PARTIAL | new tokens lag |
| 184 | 9 UI lang blocks coverage | 🟡 PARTIAL | de/fr/it/id/sw addition partial |
| 185 | orphan meta strings | 🟡 PARTIAL | per-string evolves |
| 186 | es/pt runtime aliasing | 🟡 PARTIAL | static migration pending |
| 187 | tone single/doubled | ✅ COMPLETE | 0 langs mixing |
| 188 | disambiguator | ✅ COMPLETE | 29/29 shared-native pairs |
| 189 | accessed ISO 8601 | 🟡 PARTIAL | gate added, 0 URLs yet |
| 190 | vitality | ✅ COMPLETE | 910/910 |
| 191 | formType hyphen | ✅ COMPLETE | 83/83 |
| 192 | runtime overlay → static | 🟡 PARTIAL | 4/17 maps migrated |
| 193 | textDirection rtl | ✅ COMPLETE | 44/44 |
| 194 | multi-word formType | ✅ COMPLETE | 363/363 |
| 195 | split evidence pilot | 🟡 PARTIAL | gate added, 0/1128 adoption |
| 196 | Tier 4 langs | ✅ COMPLETE | absorbed into 910-lang push |
| 197 | roadmap to 1000 | 🟡 PARTIAL | 910/1000 (91%) |
| 198 | cache-buster CI gate | ✅ COMPLETE | strict mode enforces |
| 199 | yuc/kgg HIST_DESCENDANT | ✅ COMPLETE | added |
| 200 | source-checked wordEvidence backfill | 🟡 PARTIAL | 25/29 |

### Group D — Recent regressions & follow-ups (Tasks 201–223)

| Task | Topic | Status | Coverage / note |
|---|---|---|---|
| 201 | cross-cutting gate Phase 1 | ✅ COMPLETE | [#201a-f] WARN |
| 201 Phase 2 | escalate to ERROR | ❌ NOT-STARTED | regression-prevention pending |
| 202 | cache-buster instance | ✅ COMPLETE | resolved with 198 |
| 203 | itl/ykg HIST_DESCENDANT | ✅ COMPLETE | added |
| 204 | suk/smg disambiguator | ✅ COMPLETE | done |
| 205 | ykg/ale/kj formType | ✅ COMPLETE | in 83/83 |
| 206 | gld/kum pronunciationType | ✅ COMPLETE | done |
| 207 | lue/cmg formType | ✅ COMPLETE | in 83/83 |
| 208 | jmc/vai pronunciationType | ✅ COMPLETE | resolved |
| 209 | description i18n Phase B | 🟡 PARTIAL | ja/ko/zh 99%, others incomplete |
| 210 | scriptTags backfill (9 langs) | ✅ COMPLETE | done |
| 211 | count-string drift instance | ✅ COMPLETE | resolved |
| 212 | rkt/jpr/umu meta entry | ✅ COMPLETE | added |
| 213 | script-tag enum mapping docs | ❌ NOT-STARTED | CONTRIBUTING.md not updated |
| 214 | auto-bump count strings | ❌ NOT-STARTED | scripts/bump_count.js not created |
| 215 | Tibetan filter taxonomy | ❌ NOT-STARTED | scriptTags['Tibetan'] enum + family normalize |
| 216 | Compare button repositioning | 🟡 PARTIAL | DOM-move done, CSS regression remains (Task 223) |
| 217 | jvn description ja/ko/zh | ✅ COMPLETE | 4 UIs, 270-char ja |
| 218 | meta richness Phase A | ❌ NOT-STARTED | en source still thin (tpi=91, am=20, yo=44 chars) |
| 219 | range notation standardize | 🔄 SUPERSEDED | → Task 220 |
| 220 | speakerCount structured (Option C) | ⏳ REGISTERED | awaiting impl, ~7-10h |
| 221 | cache-buster drift (Task 198 instance) | ✅ COMPLETE | resolved |
| 222 | Node.js 24 actions migration | ❌ NOT-STARTED | 9 @v4 still, 1 @v5; deadline 2026-06-02 |
| 223 | modal layout regressions (Task 216 followup) | ❌ NOT-STARTED | h2 padding 130px, .compare-add-btn margin asymmetric |

### Summary tally

- ✅ **COMPLETE:** ~98 tasks
- 🟡 **PARTIAL:** ~37 tasks
- ❌ **NOT-STARTED:** ~15 tasks (Tasks 151-158 educational + 213/214/215/218/222/223 + 166 + 201 Phase 2)
- 🔄 **SUPERSEDED:** 2 (167, 219)
- ⏳ **REGISTERED:** 1 (220)

**Top remaining urgent items (validator-visible):**
1. Task 144/209 description i18n: ja/ko/zh 99% (13 langs left), es/pt 57% (393 langs).
2. Task 173/200 source-checked wordEvidence: 25/29 (4 langs).
3. Task 222 Node.js 24 migration: deadline 2026-06-02.
4. Task 223 modal CSS regression: visible UI bug.
5. Task 218 meta richness: 50+ priority langs still thin.
6. Task 220 speakerCount: REGISTERED awaiting impl cycle.

**Educational tier (151-158)** all NOT-STARTED — separate roadmap, not blocking validator.

---

## High Priority Findings

### 1. Surface form is truncated while IPA/transcription contains a full phrase

These rows show a written form that is shorter than the pronunciation/transcription. They should be corrected so surface and IPA represent the same unit.

| Code | Language | Concept | Current surface | Current IPA/transcription | Issue | Suggested direction |
|---|---|---:|---|---|---|---|
| `yo` | Yoruba | `hello` | `ẹ` | `ɛ kú` | Surface is only the polite prefix; transcription corresponds to `ẹ kú`. | Use a complete greeting such as `ẹ kú`, or choose a context-neutral greeting and align IPA. |
| `yo` | Yoruba | `thanks` | `ẹ` | `ɛ ʃé` | Surface is only the polite prefix; transcription corresponds to `ẹ ṣé`. | Use `ẹ ṣé` / `ɛ ʃé`, or `o ṣé` / `o ʃé` depending on register. |
| `mi` | Māori | `thanks` | `ngā` | `ŋaː mihi` | Surface lacks `mihi`; transcription is for `ngā mihi`. | Use `ngā mihi` / `ŋaː mihi`, or use `kia ora` consistently if informal thanks is intended. |
| `to` | Tongan | `hello` | `mālō` | `maːloː e lelei` | Surface is `mālō`, transcription is `mālō e lelei`. | Use `mālō e lelei` / `maːloː e lelei`. |
| `de_by` | Bavarian | `hello` | `Griaß` | `ɡʁiɐs ɡɔd` | Surface is missing `God/Gott`; transcription is for `Griaß God`. | Use `Griaß God` / `ɡʁiɐs ɡɔd`, or use `Servus` with matching pronunciation. |
| `rom` | Romani | `hello` | `lačho` | `latʃʰo divɛs` | Surface is `good`; transcription is `lačho dives` / `good day`. | Use `lačho dives` / `latʃʰo divɛs`, or use `sastipe` if choosing a shorter hello. |

Evidence notes:
- Yoruba: `ẹ ṣé` / `o ṣé` are attested thank-you forms; `ẹ` alone is not the full expression.
- Māori: `ngā mihi` is a greeting/thanks expression; `ngā` alone is just a plural article.
- Tongan: `mālō e lelei` is the common hello; `mālō` alone is used for thanks.
- Bavarian: `Griaß God/Gott` is a greeting phrase; `Griaß` alone is incomplete in the current IPA pairing.
- Romani: `lačho dǐves` / `lačho dives` is “good day”; `lačho` alone is “good”.

## High Priority IPA/Transcription Findings

### 2. Capital `N` appears in IPA fields

Capital `N` is not IPA in these fields. It appears to be used as a moraic nasal or placeholder. If the column is intended to be IPA/transcription, either use real IPA or document this as phonemic notation.

| Code | Language | Concept(s) | Current values | Issue |
|---|---|---:|---|---|
| `ja_osa` | Japanese (Osaka) | `mother`, `father` | `okaN`, `otoN` | Japanese moraic nasal written as `N`, not IPA. |
| `ja_hak` | Japanese (Hakata) | `mother`, `father` | `okaN`, `otoN` | Same as above. |
| `ja_kyo` | Japanese (Kyoto) | `mother`, `father` | `okaːsaN`, `otoːsaN` | Same as above. |
| `ja_kg` | Japanese (Kagoshima) | `sun`, `dog` | `ohisaN`, `iN` | Same as above. |
| `ja_sd` | Japanese (Sendai) | `mother`, `father` | `okːasaN`, `otːosaN` | Same as above. |
| `wuu_nb` | Ningbo Wu | `heart`, `eye` | `siN˦˦`, `ŋɛ˨˧tɕiN˦˦` | Capital `N` also appears as a nasal placeholder. |

Suggested direction:
- For Japanese final moraic nasal in isolation, `ɴ` is a common IPA-like broad choice, though realization varies by environment and speaker.
- For non-final or language-specific nasal codas, choose `n`, `ŋ`, `ɴ`, nasalization, or a documented phonemic transcription convention.
- Consider changing the UI label from pure `IPA` to `IPA / Transcription` consistently where broad phonemic notation is allowed. The UI already has `ipaCol` labels that acknowledge this distinction.

Reference note:
- Japanese /N/ is a moraic nasal; literature often treats it phonemically as `/N/`, but actual IPA realization varies. Utterance-final realization is often discussed as uvular [ɴ], while other contexts assimilate.

## Medium Priority Findings

### 3. `ja_oki` mixes Okinawan Japanese and Okinawan/Ryukyuan language data

Location: `ja_oki` (`Japanese (Okinawa)`)

Current metadata describes Okinawan Japanese, but many word choices are Okinawan/Ryukyuan lexical items:

| Concept | Current value | Note |
|---|---|---|
| `sun` | `てぃだ` / `tida` | Okinawan/Ryukyuan lexical item, not ordinary Okinawan Japanese. |
| `hello` | `はいさい` / `haisai` | Okinawan greeting; can appear in Okinawan Japanese cultural usage, but belongs to Okinawan lexicon. |
| `thanks` | `にふぇーでーびる` / `niɸeːdeːbiɾu` | Okinawan thank-you phrase. |
| `cat` | `まやー` / `majaː` | Okinawan/Ryukyuan item. |
| `heart` | `心` / `kukuɾu` | Okinawan reading/lexeme rather than Standard Japanese. |

Recommended decision:
- Option A: Rename/reclassify the entry as `Okinawan` / `Central Okinawan`, family `Japonic (Ryukyuan)`, and review the whole row as a Ryukyuan language.
- Option B: Keep it as `Japanese (Okinawa)` and replace the Ryukyuan lexical forms with Okinawan Japanese forms, perhaps keeping culturally common greetings only if clearly labeled.

This is conceptually important because Miyako and Yaeyama are already separate Ryukyuan entries, and `ja_oki` currently blurs the category boundary.

### 4. Same-form/same-IPA duplicates in modern languages need semantic review

The validator reports same-form/same-IPA duplicates. Many are legitimate polysemy or culturally natural formula overlap, but some need source-backed confirmation.

Likely acceptable or at least plausible:
- `nv` Navajo `hello/good`: `yáʼátʼééh`
- `haw` Hawaiian `love/hello`: `aloha`
- `fj` Fijian `thanks/good`: `vinaka`
- `tok` Toki Pona `eat/drink`, `dog/cat`, `thanks/good`: expected due to Toki Pona semantic compression
- `bm` Bambara `hello/thanks`: `i ni ce`
- `rar` Cook Islands Māori `thanks/good`: `meitaki`
- `mh` Marshallese `love/hello`: `yokwe`
- `pjt` Pitjantjatjara `hello/thanks/good`: `palya`

Review candidates:
- `lus` Mizo `drink/house`: `in`
- `glk` Gilaki `eat/drink`: `خوردن` / `xoɾdæn`
- `lrc` Lurish `eat/drink`: `خواردن` / `xwɒːɾdæn`
- `bqi` Bakhtiari `eat/drink`: `خواردن` / `xwoɾdan`
- `myp` Pirahã `heart/good`: `aoʔaago`
- `enq` Enga `fire/tree`: `ita`
- `mpt` Mian `sun/good`: `kep`; `mother/love`: `na`
- `kwk` Kwak'wala `hello/thanks`: `gilakas'la`
- `ygr` Yagaria `love/hello`: `amige`
- `pwn` Paiwan `hello/thanks`: `masalu`
- `bnn` Bunun `hello/thanks`: `uninang`
- `trv` Truku (Seediq) `hello/good`: `malu`

Recommended handling:
- Do not blindly change duplicates. Some are real lexical overlap.
- Add source/evidence notes for each duplicate or introduce an allowlist with reason.
- If no source is found, choose a more concept-specific word or mark as uncertain in evidence.

## Systemic Issue: Concept Definitions

The 20 concepts are useful for display, but several are underdefined:

| Concept | Ambiguity |
|---|---|
| `heart` | Anatomical heart vs. mind/soul/emotion. Many languages use different words. |
| `love` | Noun “love”, verb “to love”, affection, romantic love, compassion, etc. |
| `hello` | General greeting, time-of-day greeting, welcome, good day, formal/informal address. |
| `thanks` | Interjection, noun gratitude, formal/informal thanks. |
| `good` | Adjective “good”, moral good, pleasant, fine/OK, health/well-being. |
| `eat` / `drink` | Infinitive, imperative, citation form, finite verb, noun/action form. |

Recommendation:
- Add concept definitions to `WORD_LIST`, e.g. `heart = anatomical heart unless language normally uses a mind/heart term in basic vocabulary`.
- Add a `formType` or `wordEvidence` note where values are phrases, finite verbs, normalized spellings, or broad transcriptions.

## Mechanical Review Methods Used

Commands/queries used locally:
- `node validate_wordmap_data.js`
- Modern-only duplicate scan excluding `HIST_DESCENDANT`
- IPA-field scans for uppercase Latin placeholders, digit/colon/underscore contamination, and phrase-length mismatches
- Targeted review of candidate rows in `wordmap_data.js`

The uppercase scan found 12 likely non-IPA `N` values in modern entries:
- Japanese dialect entries: `okaN`, `otoN`, `okaːsaN`, `otoːsaN`, `ohisaN`, `iN`, `okːasaN`, `otːosaN`
- Ningbo Wu: `siN˦˦`, `tɕiN˦˦`

The surface/IPA phrase-length scan found the high-priority rows listed above plus additional possible phrase-style rows that may be acceptable because the surface is in a script without spaces while the transcription uses spaces.

## External References Consulted

- Japanese moraic nasal /N/ and IPA realization:
  - Cambridge/JIPA: https://www.cambridge.org/core/journals/journal-of-the-international-phonetic-association/article/production-of-the-utterancefinal-moraic-nasal-in-japanese-a-realtime-mRI-study/560B70DE7334F30F54E18D0486785E66
  - CiNii/NINJAL mirror: https://cir.nii.ac.jp/crid/1390009224768528000?lang=ja
- Okinawan language classification/background:
  - https://en.wikipedia.org/wiki/Okinawan_language
- Yoruba greeting/thanks:
  - https://kaikki.org/dictionary/Yoruba/meaning/o/o%20/o%20%E1%B9%A3e.html
  - https://glosbe.com/en/yo/Thank%20You
- Māori greetings/thanks:
  - https://www.waikato.ac.nz/students/maori/pronunciation/
  - https://www.newzealand.com/ca/feature/maori-language/
- Tongan greeting/thanks:
  - https://tongapocketguide.com/the-guide-to-the-tongan-language/
  - https://www.waterfrontlodge-tonga.com/en/language-in-tonga
- Bavarian greeting:
  - https://bavarian.de-academic.com/1808/gria%C3%9F_Gott
- Romani greeting:
  - https://en.wiktionary.org/wiki/la%C4%87ho_d%C7%90ves
  - https://www.omniglot.com/language/phrases/romani.htm

## Suggested Next Steps

1. Fix the six high-priority surface/IPA mismatch rows.
2. Normalize or document capital `N` in IPA/transcription fields.
3. Decide whether `ja_oki` is Okinawan Japanese or Okinawan/Ryukyuan, then align metadata and word list.
4. Add evidence notes or allowlist reasons for modern same-form duplicates.
5. Add concept definitions to `WORD_LIST` before doing a deeper language-by-language semantic review.

## Additional Review Pass

Date: 2026-05-05

Important correction to scope: the first pass above is not the full set of possible problems. It is the first high-confidence extraction. A broader pass over modern-language word choice and IPA/transcription consistency found additional systemic issues and several more high-priority candidates.

### 5. IPA field is often orthography/transliteration, not IPA

This is the largest remaining quality issue. A modern-only scan found many languages where 10 or more Latin-script surface forms are exactly identical to the IPA/transcription field. Some languages have phonemic orthographies, so exact matches are not automatically wrong, but at this scale it means the `ipa` column is being used inconsistently.

Top affected modern entries:

| Code | Language | Exact Latin surface = IPA count | Latin-script entries checked | Risk |
|---|---|---:|---:|---|
| `tok` | Toki Pona | 20 | 20 | Could be acceptable as broad transcription, but not IPA with stress/phonetic detail. |
| `hmo` | Hiri Motu | 20 | 20 | Likely orthography copied into IPA. |
| `tkl` | Tokelauan | 20 | 20 | Likely orthography copied into IPA. |
| `eo` | Esperanto | 19 | 19 | Broad pronunciation may be close, but IPA still lacks stress and phonetic conventions. |
| `mpt` | Mian | 19 | 20 | Very likely transcription/orthography rather than IPA. |
| `pap` | Papiamento | 17 | 20 | Needs IPA review. |
| `niu` | Niuean | 17 | 19 | Needs IPA review. |
| `hui` | Huli | 17 | 20 | Needs IPA review. |
| `nij` | Ngaju | 17 | 20 | Needs IPA review. |
| `tet` | Tetum | 16 | 20 | Needs IPA review. |
| `bi` | Bislama | 16 | 20 | Needs IPA review. |
| `bnn` | Bunun | 16 | 20 | Needs IPA review. |
| `dtp` | Kadazan-Dusun | 16 | 20 | Needs IPA review. |
| `id` | Indonesian | 14 | 20 | Several entries are plain spelling, e.g. `air` -> `air`, not phonetic IPA. |
| `ms` | Malay | 14 | 20 | Same pattern as Indonesian/Malay orthography copied to IPA. |
| `tl` | Tagalog | 14 | 20 | Many entries use spelling as IPA. |
| `sw` | Swahili | 13 | 20 | Some are plausible, but many are orthographic-level. |
| `ceb` | Cebuano | 13 | 20 | Many entries use spelling as IPA. |

Recommendation:
- Decide whether the second field is really `IPA` or `IPA / broad transcription`.
- If the UI keeps saying IPA, prioritize replacing exact orthographic copies for high-visibility languages first.
- If broad transcription is accepted, add a per-language/source note or status so users do not read every field as narrow IPA.

### 6. English entry mixes London metadata with rhotic/US-style IPA

Location: `en` (`English`, London)

The row appears to mix British lexical choices/phonemes with rhotic or US-like IPA:

| Concept | Current | Concern | Suggested direction |
|---|---|---|---|
| `water` | `wɔːtər` | London/RP-style English would not normally keep final rhotic `r` in isolation; Cambridge gives UK `wɔː.tə` and US `wɑː.t̬ɚ`. | Use UK/London-compatible `wɔːtə`/`ˈwɔːtə`, or move metadata to US/general English and align the whole row. |
| `fire` | `faɪər` | Rhotic final vowel sequence; UK usually `faɪə`. | Align to selected accent. |
| `mother` | `mʌðər` | Rhotic final `r`; London/RP would be `mʌðə`. | Align to selected accent. |
| `father` | `fɑːðər` | Same issue. | Align to selected accent. |
| `heart` | `hɑːrt` | Rhotic `r`; UK/London non-rhotic would be `hɑːt`. | Align to selected accent. |
| `hello` | `hɛloʊ` | US-style GOAT vowel; UK often `həˈləʊ`/`hɛˈləʊ`. | Align to selected accent. |
| `dog` | `dɒɡ` | This is UK-like, which makes the row internally mixed with rhotic forms. | Keep if UK, otherwise change to a US-compatible value. |

Evidence:
- Cambridge Dictionary distinguishes UK `water` from US `water`: https://dictionary.cambridge.org/pronunciation/english/water

### 7. Hebrew verb concepts use finite/participle forms while the UI concept is infinitive-like

Location: `he` (`Hebrew`)

Current values:

| Concept | Current surface | Current IPA/transcription | Issue | Suggested direction |
|---|---|---|---|---|
| `eat` | `אוכל` | `oχel` | This can be a noun “food” or present/participle “eats/eating”; the UI concept label is infinitive-like (`לאכול`). | Use `לאכול` / `leʔeχol` or document that verb entries use masculine present forms. |
| `drink` | `שותה` | `ʃote` | Present/participle “drinks/drinking”; the UI label is `לשתות`. | Use `לשתות` / `liʃtot`, or document the present-form convention. |

Evidence:
- Pealim lists `לאכול` as “to eat” and `אוכל` as present/participle; `אוכל` is also listed as the noun “food”: https://www.pealim.com/dict/30-leechol/ and https://www.pealim.com/dict/3416-ochel/
- Pealim lists `לשתות` as “to drink” and `שותה` as present/participle: https://www.pealim.com/dict/31-lishtot/

### 8. Russian and Ukrainian `good` are adverb/neuter forms, not the adjective selected in labels

Locations: `ru`, `uk`

| Code | Language | Concept | Current surface | Current IPA/transcription | Issue | Suggested direction |
|---|---|---|---|---|---|---|
| `ru` | Russian | `good` | `хорошо` | `xɐrɐʂo` | Means “well”/adverbial “good”; the concept label in Russian UI is adjective `Хороший`. | Use adjective `хороший` with matching IPA, or redefine concept as “good/well”. |
| `uk` | Ukrainian | `good` | `добре` | `dɔbrɛ` | Commonly “well” or neuter short/adverbial; UI label is adjective `Добрий`. | Use `добрий` or another adjective matching the intended sense. |

This same issue may exist in other Slavic rows where the stored value is a predicative/adverbial form rather than the adjective.

### 9. Russian and Ukrainian `cat` use male-cat forms; check whether generic “cat” is intended

Locations: `ru`, `uk`

| Code | Language | Current surface | Issue | Suggested direction |
|---|---|---|---|---|
| `ru` | Russian | `кот` | Specifically male cat in many contexts; generic “cat” is often `кошка`, though `кот` can be used broadly in some contexts. | If the concept is generic domestic cat, consider `кошка` / `ˈkoʂkə`; otherwise document the gender choice. |
| `uk` | Ukrainian | `кіт` | Masculine cat/male cat; generic/female `кішка` may be more expected for a basic-vocabulary “cat” item. | Review with a Ukrainian source and decide whether to standardize on generic or masculine citation forms. |

Evidence:
- Wiktionary marks Russian `кот` as masculine with female equivalent `кошка`: https://en.wiktionary.org/wiki/%D0%BA%D0%BE%D1%82

### 10. Russian loans as `cat` in Siberian/North Asian minority rows need evidence notes

Several minority-language entries use Russian `кошка`/`koʂka` or close loans for `cat`:

| Code | Language | Current cat value |
|---|---|---|
| `evn` | Evenki | `кошка` / `koʂka` |
| `eve` | Even | `кошка` / `koʂka` |
| `yrk` | Nenets | `кошка` / `koʂka` |
| `kca` | Khanty | `кошка` / `koʂka` |
| `niv` | Nivkh | `кошка` / `koʂka` |
| `ket` | Ket | `кошка` / `koʂka` |
| `mns` | Mansi | `кошка` / `koʂka` |

This may be valid if the ordinary modern word is a Russian borrowing, but it should be source-backed. Otherwise users may interpret these rows as copied Russian placeholders.

Recommendation:
- Add an evidence note or source for each loanword.
- If a native or older common term exists and is more appropriate for a basic vocabulary map, consider replacing.

### 11. Tone and stress conventions are inconsistent

The data mixes:
- IPA with tone marks (`zh`, `yue`, `vi`, many Sinitic entries)
- IPA without tone marks for tone languages (`id`/`ms` not relevant, but many African/Austronesian/Trans-New Guinea rows likely omit contrastive tone or stress)
- Orthographic tone marks copied into the IPA field, e.g. Yoruba and some Native American rows
- No primary stress marks in most European entries, even when stress is lexically relevant

This is not always an error, but it makes cross-language comparison uneven. For example:
- Yoruba entries often preserve acute/grave tone marks inside the IPA-like field (`iná`, `bàbá`, `ilé`) rather than using a consistent IPA tone convention.
- Esperanto, Toki Pona, Hiri Motu, Tokelauan, and many Austronesian rows omit stress entirely even where a predictable stress mark would make the IPA more explicit.

Recommendation:
- Define a minimum pronunciation standard: phonemic IPA, narrow IPA, or practical transcription.
- For tone languages, choose one tone notation convention per family/language and document it.
- For stress languages, decide whether stress marks are required. If not, avoid implying narrow IPA.

### 12. Verb-form convention is not consistent across languages

The `eat` and `drink` concepts mix infinitives, bare stems, imperatives, verbal nouns, and finite forms. This is especially visible across languages with different citation-form traditions:

| Pattern | Examples | Risk |
|---|---|---|
| Infinitive-like | English `eat`, German `essen`, Hindi `खाना`, Hebrew UI label `לאכול` | Clear enough if concept means citation form. |
| Finite/citation 3rd masculine style | Arabic `أكل` / `ʔakala`, `شرب` / `ʃariba` | May be valid as Arabic dictionary citation, but not literally “to eat/to drink”. |
| Present participle/finite | Hebrew current `אוכל`, `שותה` | Does not match infinitive-like concept label. |
| Bare action/noun overlap | Many languages where `eat/drink` equals a noun or stem | Needs language-specific convention. |

Recommendation:
- Add a `formPolicy` for verbs: e.g. “use the dictionary citation form normally used by that language; if multiple forms are possible, prefer infinitive-like citation and document exceptions.”
- Audit all `eat`/`drink` entries after the policy is fixed.

### 13. Additional candidate rows to review manually

These are not all confirmed errors, but they are high enough risk to deserve targeted source checks:

| Code | Language | Concept | Current value | Why review |
|---|---|---|---|---|
| `id` | Indonesian | `water` | `air` / `air` | IPA is likely orthography; Indonesian `air` is not simply IPA `/air/` in normal pronunciation. |
| `ms` | Malay | `water` | `air` / `air` | Same issue as Indonesian/Malay pronunciation vs spelling. |
| `it` | Italian | `tree` | `albero` / `albero` | IPA should normally mark stress and vowel quality, e.g. not a plain spelling copy. |
| `es_eu`, `es_mx` | Spanish | `dog` | `perro` / `pero` | Check whether the trill is intended as IPA `r`; if so it is acceptable, but it needs stress/clarity. |
| `sw` | Swahili | many | spelling copied | Swahili spelling is transparent, but entries such as `moyo` / `mojo` and `jua` / `dʒua` show that the row sometimes uses phonetics and sometimes spelling. |
| `tl` | Tagalog | many | spelling copied | Likely broad orthographic transcription rather than IPA. |
| `jv` | Javanese | many | spelling copied | Needs IPA review, especially vowel quality and stress. |
| `lo` | Lao | `sun` | `taːwēn` | `ē` is orthographic/romanization-like, not IPA. |
| `my`, `rki` | Burmese/Rakhine | many | acute/grave marks inside IPA | This may be a practical tone transcription, but not pure IPA. Document convention or normalize. |

## Revised Priority List

1. Fix surface/IPA mismatches from section 1.
2. Decide and document whether the second field is IPA or broad transcription.
3. Fix the English row accent mismatch (`en`) because it is high-visibility.
4. Fix Hebrew `eat`/`drink` form mismatch (`he`).
5. Fix Russian/Ukrainian `good`, and review `cat` gender choices.
6. Normalize/document capital `N` and non-IPA diacritics in the pronunciation field.
7. Add source/evidence notes for loanword-looking entries such as Russian `кошка` in Siberian languages.
8. After policy decisions, run language-family passes rather than isolated row fixes.

## Additional Review Pass 2

Date: 2026-05-05

This pass specifically searched for pronunciation fields that look like practical romanization rather than IPA. It also checked several high-visibility Indo-European rows against external references.

Note: this section is based on the current worktree at review time. Some high-priority rows from the first pass, such as Yoruba `hello/thanks`, may already have been changed in `wordmap_data.js` by another session.

### 14. ASCII affricate/digraph notation appears where IPA should use IPA symbols or tie bars

The modern-only scan found many pronunciation fields using `ts`, `dz`, `tsh`, `ch`, `sh`, `kh`, etc. Some are acceptable as loose phonemic transcription, but they are not consistently IPA. For IPA, affricates are commonly written with IPA symbols and/or tie bars, e.g. `t͡s`, `d͡z`, `t͡ʃ`, `ʃ`, `x`, `ɣ`.

High-visibility examples:

| Code | Language | Concept | Current pronunciation | Concern | Suggested direction |
|---|---|---|---|---|---|
| `ru` | Russian | `sun` | `sontsɨ` | Uses `ts`; also vowel/stress differs from common IPA for `солнце`. | Review as `[ˈso(ɫ)nt͡sə]` or selected standard. |
| `ru` | Russian | `father` | `ɐtʲets` | Uses `ts`; source IPA uses `t͡s`. | Use `[ɐˈtʲet͡s]` or broad equivalent. |
| `ru` | Russian | `heart` | `sʲertsɨ` | Uses `ts`; likely vowel/stress issue too. | Review against `сердце`/inflected references. |
| `uk` | Ukrainian | `sun` | `sɔntsɛ` | Uses `ts` rather than `t͡s`. | Use a consistent Ukrainian IPA convention. |
| `uk` | Ukrainian | `moon` | `misʲɑtsʲ` | Uses `ts`; likely should use affricate notation. | Review. |
| `uk` | Ukrainian | `heart` | `sɛrtsɛ` | Uses `ts`; likely should use affricate notation. | Review. |
| `be` | Belarusian | several | `sontsa`, `mʲesʲats`, `matsi`, etc. | Broad romanization-like `ts`. | Review whole row. |
| `cs`, `sk`, `sl`, `sr`, `bg` | Slavic rows | several | `sluntsɛ`, `otɛts`, `srtsɛ`, etc. | ASCII `ts` convention differs from IPA style used elsewhere. | Decide whether loose transcription is allowed or normalize. |

Evidence:
- Russian `солнце` Wiktionary IPA includes `t͡s`: https://en.wiktionary.org/wiki/%D1%81%D0%BE%D0%BB%D0%BD%D1%86%D0%B5
- Russian `отец` Wiktionary IPA includes `t͡s`: https://en.wiktionary.org/wiki/%D0%BE%D1%82%D0%B5%D1%86

### 15. French IPA has overused length marks

Location: `fr` (`French`)

Current French entries often add `ː` where common dictionary IPA does not:

| Concept | Current | Concern | Suggested direction |
|---|---|---|---|
| `mother` | `mɛːʁ` | Standard dictionary IPA is commonly /mɛʁ/; length mark may be dialectal or unnecessary. | Use `/mɛʁ/` unless a dialectal length convention is intended. |
| `father` | `pɛːʁ` | Same issue. | Use `/pɛʁ/`. |
| `drink` | `bwaːʁ` | Common dictionary form is /bwaʁ/. | Use `/bwaʁ/`. |
| `love` | `amuːʁ` | Common dictionary form is /amuʁ/. | Use `/amuʁ/`. |
| `heart` | `kœːʁ` | Wiktionary gives /kœʁ/ for `coeur/cœur`. | Use `/kœʁ/`. |
| `hello` | `bɔ̃ʒuːʁ` | Wiktionary gives /bɔ̃.ʒuʁ/ for `bonjour`. | Use `/bɔ̃ʒuʁ/` or syllabified `/bɔ̃.ʒuʁ/`. |

Evidence:
- French `bonjour`: https://en.wiktionary.org/wiki/bonjour
- French `coeur`: https://en.wiktionary.org/wiki/coeur

### 16. Portuguese `água` is missing stress and regional detail

Locations: `pt_eu`, `pt_br`

Current:
- `pt_eu` water: `água` / `aɡwɐ`
- `pt_br` water: `água` / `aɡwɐ`

Issues:
- Stress is omitted, but `água` is stressed on the first syllable.
- European Portuguese commonly has phonetic lenition in careful IPA sources (`[ˈa.ɣwɐ]`), while the current value is a broad spelling-like `/aɡwɐ/`.
- The same broad value for Europe and Brazil hides a regional contrast the app otherwise tries to represent.

Suggested direction:
- If broad phonemic IPA is intended, at least use `/ˈaɡwɐ/` for both.
- If dialectal phonetic IPA is intended, distinguish Portugal and Brazil.

Evidence:
- Portuguese `água` Wiktionary: https://en.wiktionary.org/wiki/%C3%A1gua

### 17. Indonesian and Malay `air` is a clear example of spelling copied into IPA

Locations: `id`, `ms`

Current:
- `id` water: `air` / `air`
- `ms` water: `air` / `air`

Issue:
- The pronunciation field is exactly the spelling. In IPA, `ai` would mean a vowel sequence /a i/ unless deliberately transcribed that way, but Indonesian/Malay `air` is not normally just a literal English-style `air` spelling-as-sound.
- This is one of the clearest user-visible examples that the second field is not consistently IPA.

Suggested direction:
- Verify preferred Indonesian/Malay standard pronunciations and replace with IPA or mark as broad transliteration.
- Use this row as a test case for the overall `IPA / Transcription` policy.

### 18. Lahu row uses tone diacritics and romanization marks inside the pronunciation field

Location: `lhu` (`Lahu`)

The row contains many pronunciation values with acute/grave/circumflex marks copied into the field:

| Concept | Current pronunciation |
|---|---|
| `fire` | `amí` |
| `sun` | `mvuʔ ɲí` |
| `eat` | `tsâ` |
| `drink` | `dàʔ` |
| `love` | `hâ` |
| `heart` | `ɲíma` |
| `house` | `jâʔ` |
| `cat` | `mâníʔ` |
| `hello` | `óbohâʔ` |
| `thanks` | `abôʃâʔ` |
| `good` | `dâʔ` |

These may be useful tonal transcription, but they are not normalized IPA tone notation. Decide whether Lahu uses practical orthography/transcription or convert tone marks to a documented IPA/phonemic convention.

### 19. Lakota and Dakota rows use orthographic accent marks in IPA fields

Locations: `lkt`, `dak`

Both rows have 20/20 entries flagged by the accent/romanization scan. Examples:

| Code | Concept | Current pronunciation |
|---|---|---|
| `lkt` | `water` | `mní` |
| `lkt` | `sun` | `wí` |
| `lkt` | `heart` | `tʃʰaŋté` |
| `lkt` | `good` | `waʃté` |
| `dak` | `sun` | `aŋpétuwí` |
| `dak` | `heart` | `tʃʰaŋté` |
| `dak` | `thanks` | `pidámajaje` |

This appears to mix IPA consonants with orthographic stress/accent marks. It may be a reasonable practical transcription, but it should not be presented as pure IPA without a convention note.

### 20. Navajo row mixes IPA with orthographic tone/accent marks

Location: `nv` (`Navajo`)

Examples:

| Concept | Current pronunciation | Concern |
|---|---|---|
| `water` | `tʰóː` | Acute tone mark on vowel rather than a normalized IPA tone convention. |
| `sun` | `dʒóhonɑːʔéːí` | Mixed IPA consonants with orthographic tone marks. |
| `hello/good` | `jɑ́ːʔɑ́tʰéːh` | Combining acute marks in IPA field. |
| `one` | `tʼɑ́ːɬɑ́ːʔí` | Same mixed convention. |

Suggested direction:
- Either document this as a practical phonemic transcription or convert tones to a consistent IPA tone notation.

### 21. Inuktitut/Inupiaq/Greenlandic/Q-family rows likely use romanization rather than IPA

Candidate rows from scan:

| Code | Language | Sample values | Risk |
|---|---|---|---|
| `ipk` | Inupiaq | `imiq`, `siqiɲiq`, `tatqiq` | `q` is valid in some orthographies but not an IPA uvular stop symbol. IPA would normally use `q` only if intentionally representing uvular stop; verify convention. |
| `iu` | Inuktitut | `imaq`, `siqiniq`, `taqqiq` | Same issue; may be orthographic transliteration. |
| `kl` | Greenlandic | `imeq`, `seqineq`, `qitsuk` | Same issue. |
| `esu` | Central Alaskan Yupik | `meq`, `keneq`, `iraluq` | Same issue. |

This is not automatically wrong because IPA `q` exists, but the high frequency of exact orthography-like strings suggests these rows should get a dedicated Inuit-Yupik pass.

### 22. Turkic rows use `w`, `y`, `q`, `x` conventions that look romanization-like

Candidate rows:

| Code | Language | Sample values | Risk |
|---|---|---|---|
| `kk` | Kazakh | `sw`, `kyn`, `ʒew`, `ɪʃw` | `w/y` values may reflect transliteration rather than IPA. |
| `ba` | Bashkir | `hɯw`, `qojaʃ`, `aʃaw` | `q`, `w`, `j` conventions need source check. |
| `krc` | Karachay-Balkar | `suw`, `kyn`, `syjmeklik` | Likely broad romanization. |
| `kaa` | Karakalpak | `suw`, `kyn`, `ʒew`, `iʃiw` | Likely broad romanization. |

Recommendation:
- Review Turkic rows as a family. Do not fix one-off symbols until deciding whether the project accepts Turkic practical transcription in the pronunciation field.

### 23. Georgian row may mix transliteration and IPA

Location: `ka` (`Georgian`)

Examples:

| Concept | Current pronunciation | Concern |
|---|---|---|
| `water` | `t͡sʼqali` | Uses `q`; if IPA, Georgian ejective uvular/velar should be reviewed carefully. |
| `fire` | `t͡set͡sxli` | `x` may be valid IPA, but the whole form looks transliteration-like. |
| `love` | `siqvaruli` | `qv` sequence likely practical romanization rather than IPA. |
| `cat` | `kʼatʼa` | More IPA-like. |

Recommendation:
- Review the Georgian row as a unit, not symbol-by-symbol. It likely needs a consistent IPA policy for ejectives and uvular/velar consonants.

### 24. Hawaiian and Polynesian rows often use plain spelling for IPA

Examples from exact-match scan:

| Code | Language | Issue |
|---|---|---|
| `haw` | Hawaiian | 11 exact Latin spelling=pronunciation matches. |
| `mi` | Māori | 8 exact matches; `thanks` was already flagged earlier. |
| `to` | Tongan | 12 exact matches among Latin entries. |
| `sm` | Samoan | 13 exact matches among Latin entries. |
| `tkl` | Tokelauan | 20 exact matches. |
| `tvl` | Tuvaluan | 15 exact matches. |
| `niu` | Niuean | 17 exact matches. |

These languages have comparatively transparent orthographies, but IPA should still represent vowel length, glottal stops, stress where relevant, and language-specific consonants consistently.

### 25. Several “heart” entries may mean mind/soul/inner feeling rather than anatomical heart

This was noted systemically, but the additional pass shows it is not minor. Examples:

| Code | Language | Current heart value | Concern |
|---|---|---|---|
| `id` | Indonesian | `hati` | Usually liver/heart-as-feeling; anatomical heart is often `jantung`. |
| `ms` | Malay | `hati` | Same semantic issue; anatomical heart is commonly `jantung`. |
| `th` | Thai | `ใจ` | “heart/mind/spirit”; anatomical heart is `หัวใจ`. |
| `ko` | Korean | `마음` | “mind/heart/feeling”; anatomical heart is `심장`. |
| `ja` | Japanese | `心` | “heart/mind/spirit”; anatomical organ is `心臓`. |
| `jv` | Javanese | `ati` | Often liver/inner feeling; anatomical heart needs review. |

Decision needed:
- If concept means “heart/mind/inner feeling”, current choices may be culturally appropriate.
- If concept means anatomical heart, these should be changed or the concept label should be renamed to “heart/mind”.

### 26. Additional source-backed corrections/candidates

| Code | Language | Current | Source-backed concern |
|---|---|---|---|
| `fr` | French `hello` | `bɔ̃ʒuːʁ` | Source gives /bɔ̃.ʒuʁ/ without `ː`. |
| `fr` | French `heart` | `kœːʁ` | Source gives /kœʁ/ without `ː`. |
| `pt_eu`/`pt_br` | Portuguese `water` | `aɡwɐ` | Source gives stressed `/ˈaɡwɐ/` variants; current omits stress. |
| `ru` | Russian `sun` | `sontsɨ` | Source gives `[ˈso(ɫ)nt͡sə]` or close variants. |
| `ru` | Russian `father` | `ɐtʲets` | Source gives `[ɐˈtʲet͡s]`. |
| `uk` | Ukrainian `good` | `добре` | Source identifies `добре` as an adverb; `добрий` is the adjective “good”. |

Evidence:
- French `bonjour`: https://en.wiktionary.org/wiki/bonjour
- French `coeur`: https://en.wiktionary.org/wiki/coeur
- Portuguese `água`: https://en.wiktionary.org/wiki/%C3%A1gua
- Russian `солнце`: https://en.wiktionary.org/wiki/%D1%81%D0%BE%D0%BB%D0%BD%D1%86%D0%B5
- Russian `отец`: https://en.wiktionary.org/wiki/%D0%BE%D1%82%D0%B5%D1%86
- Ukrainian `добре`: https://en.wiktionary.org/wiki/%D0%B4%D0%BE%D0%B1%D1%80%D0%B5
- Ukrainian `добрий`: https://en.wiktionary.org/wiki/%D0%B4%D0%BE%D0%B1%D1%80%D0%B8%D0%B9

## Revised Priority List After Pass 2

1. Treat the pronunciation column policy as a blocker. The current data is not consistently IPA.
2. Add a validation/audit script that reports exact spelling=IPA counts, ASCII digraphs, and non-IPA romanization marks per language.
3. Fix high-visibility rows first: `en`, `fr`, `ru`, `uk`, `he`, `pt_eu`, `pt_br`, `id`, `ms`.
4. Then review by family: Slavic, Turkic, Polynesian, Inuit-Yupik, Burmese/Rakhine, Lahu, Lakota/Dakota, Navajo, Georgian/Caucasus.
5. Decide whether `heart` means anatomical heart or heart/mind; this affects many “correct-looking” rows.

## Additional Review Pass 3

Date: 2026-05-05

This pass focused on high-visibility modern entries and on whether regional labels match the words/IPA in the row.

### 27. Mandarin `你好` does not reflect third-tone sandhi

Location: `zh` (`Chinese (Mandarin)`)

Current:
- `hello`: `你好` / `ni˧˩˧xaʊ̯˧˩˧`

Issue:
- The entry writes both syllables with full third-tone contours. In natural Standard Mandarin, two adjacent third tones normally trigger sandhi, so `nǐ hǎo` is pronounced closer to `ní hǎo`.
- If the project wants citation tones, the current value is defensible; if it wants actual pronounced forms, this should be changed or noted.

Suggested direction:
- Use a sandhi-aware form such as `ni˧˥ xaʊ̯˨˩˦` or document that Mandarin entries use underlying citation tones.

Evidence:
- Wiktionary lists Mandarin `你好` as `nǐ hǎo`: https://en.wiktionary.org/wiki/%E4%BD%A0%E5%A5%BD
- Mandarin third-tone sandhi references explain that `你好` is pronounced `ní hǎo`: https://thelanguages.com/learn/mandarin/foundations/pinyin-tones/3

### 28. Mandarin kinship entries omit tone notation while other Mandarin entries include tones

Location: `zh` (`Chinese (Mandarin)`)

Current:
- `mother`: `妈妈` / `mama`
- `father`: `爸爸` / `papa`

Issue:
- The Mandarin row otherwise uses tone marks heavily (`水`, `火`, `太阳`, etc.), but `妈妈` and `爸爸` omit tone values.
- These words have tone patterns (`māma`, `bàba`, etc.) including neutral-tone second syllables in standard forms. The current `mama`/`papa` looks like plain romanization, not IPA with tone.

Suggested direction:
- Add tone values consistently, e.g. based on the chosen Standard Mandarin tone convention.

Evidence:
- `妈妈` Wiktionary lists Standard Mandarin `māma` and Sinological IPA `/mä⁵⁵ mä²/`: https://en.wiktionary.org/wiki/%E5%AA%BD%E5%AA%BD
- `爸爸` Wiktionary lists Standard Mandarin `bàba`: https://en.wiktionary.org/wiki/%E7%88%B8%E7%88%B8

### 29. Quebec French row is mostly not Quebec-specific

Location: `fr_qc` (`Quebec French`)

Current row is almost identical to `fr` except `hello`, `thanks`, `one`, and a few vowel details:

| Concept | `fr` | `fr_qc` | Concern |
|---|---|---|---|
| `water` | `eau` / `o` | `eau` / `o` | Same value despite regional row. |
| `mother` | `mɛːʁ` | `mɛːʁ` | Same value and same length-mark issue. |
| `father` | `pɛːʁ` | `pɛːʁ` | Same value. |
| `heart` | `kœːʁ` | `kœːʁ` | Same value. |
| `hello` | `bonjour` | `allô` | This part is regionalized. |

Issue:
- If `fr_qc` is intended as Quebec French, the whole row needs Quebec-specific pronunciation review; otherwise it is mostly a duplicate of France French with a different greeting.

Suggested direction:
- Either reduce it to a clearly “French (Quebec)” broad row with source notes, or review the full row against a Quebec French source.

### 30. English regional rows mix dialect phonetics with non-basic lexical choices

Locations: `en_aave`, `en_sg`, and related English regional rows

High-risk examples:

| Code | Language | Concept | Current value | Concern |
|---|---|---|---|---|
| `en_aave` | English (AAVE) | `mother` | `mama` / `mɑːmə` | Register/kinship term differs from base `mother`; not necessarily wrong, but not equivalent to the concept if other rows use formal citation words. |
| `en_aave` | English (AAVE) | `father` | `daddy` / `dæɾi` | Same issue; `daddy` is child/familiar register, not neutral “father”. |
| `en_aave` | English (AAVE) | `hello` | `what's up` / `wʌts ʌp` | A greeting phrase, but not equivalent to neutral `hello`; may be stylistically narrow. |
| `en_sg` | Singlish | `hello` | `hello lah` / `hɛlo lɑː` | `lah` is a discourse particle, not part of the basic greeting in all contexts. |

Recommendation:
- Decide whether dialect rows are supposed to show neutral basic vocabulary or culturally salient colloquial alternatives.
- If colloquial alternatives are allowed, add a note/status so they are not treated as direct equivalents of the base concepts.

### 31. Arabic row is labeled generic Arabic but anchored to Riyadh while using mostly MSA-style forms

Location: `ar` (`Arabic`, coordinates Riyadh)

Current values are mostly Modern Standard Arabic-style citation forms:
- `eat`: `أكل` / `ʔakala`
- `drink`: `شرب` / `ʃariba`
- `good`: `جيد` / `dʒajːid`
- `hello`: `مرحبا` / `marħaba`

Issue:
- This is fine if the entry represents Modern Standard Arabic, but the geographic anchor is Riyadh and the label is simply `Arabic`.
- If users interpret it as Najdi/Saudi Arabic, many forms and pronunciations would differ.

Suggested direction:
- Rename/clarify as `Arabic (MSA)` if the row is MSA.
- Or create/rename a separate `Arabic (Saudi/Najdi)` row and review all forms locally.

Evidence:
- Arabic `شرب` is listed as Classical/Standard-style `šariba` “to drink”: https://en.wiktionary.org/wiki/%D8%B4%D8%B1%D8%A8
- Arabic/Hijazi entries show that dialectal forms can differ from Standard Arabic: https://en.wiktionary.org/wiki/%D8%A3%D9%83%D9%84

### 32. Jeju row has the same classification problem as Okinawa

Location: `ko_jeju` (`Korean (Jeju)`, native `제주어`)

Issue:
- The native name says `제주어` (Jeju language), while the English name says `Korean (Jeju)`.
- The row mixes Jeju-specific items (`어멍`, `아방`, `낭`, `괭이`, `혼저옵서예`, `고맙수다`) with many Standard Korean forms (`물`, `불`, `해`, `달`, `먹다`, `마시다`, `사랑`, `마음`, `집`, `개`, `손`, `눈`, `하나`, `좋다`).
- As with `ja_oki`, this blurs whether the row is a regional variety of Korean or the Jeju language.

Suggested direction:
- Option A: treat it as Jeju language and review/replace the whole row as Jeju.
- Option B: treat it as Korean spoken in Jeju and reduce Jeju-language lexical insertions.

### 33. Turkish row omits stress and has at least one IPA-detail mismatch

Location: `tr` (`Turkish`)

Current:
- `dog`: `köpek` / `cøpek`
- `cat`: `kedi` / `cedi`
- `thanks`: `teşekkürler` / `teʃecːyɾleɾ`

Issues:
- Turkish stress is omitted throughout the row.
- For `köpek`, Wiktionary gives IPA `/cøˈpec/`, so the current final `k` is not aligned with that source's IPA convention; it also lacks stress.
- `kedi` is closer but still lacks stress/syllabification if IPA is intended.

Suggested direction:
- Review Turkish as a full row, with a consistent broad/narrow choice.

Evidence:
- Turkish `köpek`: https://en.wiktionary.org/wiki/k%C3%B6pek
- Turkish `kedi`: https://tr.wiktionary.org/wiki/kedi

### 34. Stress omission is a systematic problem in European rows

Stress is missing in many languages where it is normally part of dictionary IPA and sometimes contrastive or at least important:

| Code | Language | Examples |
|---|---|---|
| `it` | Italian | `akkwa`, `fwɔːko`, `albero`, `mandʒaːre` |
| `es_eu`, `es_mx` and other Spanish rows | Spanish | `aɣwa`, `komeɾ`, `koɾason`, `ɡɾasjas` |
| `pt_eu`, `pt_br` | Portuguese | `aɡwɐ`, `obɾiɡadu`, `koɾasãw` |
| `ru`, `uk`, `pl` | Slavic | many values lack stress, while stress affects reduction and citation pronunciation. |
| `tr` | Turkish | stress omitted throughout. |

This is not a single-row bug, but if the column is IPA, a no-stress convention should be documented. Otherwise many values should be upgraded.

### 35. `one` uses gendered masculine forms in some languages without a policy note

Examples:

| Code | Language | Current `one` | Issue |
|---|---|---|---|
| `ar` | Arabic | `واحد` / `waːħid` | Masculine form; feminine `واحدة` exists. |
| `he` | Hebrew | `אחד` / `eχad` | Masculine form; feminine `אחת` exists. |
| `es_eu`, `es_mx` | Spanish | `uno` | Masculine/standalone form; acceptable but should be policy. |
| `fr` | French | `un` | Masculine form; `une` feminine. |
| `it` | Italian | `uno` | Masculine/standalone form. |

Recommendation:
- Add a concept note: `one` uses the masculine/default citation form where languages distinguish gender, unless the language has a gender-neutral numeral citation form.

### 36. `mother/father` are inconsistently formal, informal, or child-register across rows

Examples:

| Code | Language | Mother/Father values | Concern |
|---|---|---|---|
| `zh` | Mandarin | `妈妈`, `爸爸` | Informal/family terms rather than formal `母亲`, `父亲`, though very natural. |
| `ko` | Korean | `어머니`, `아버지` | Formal/neutral adult terms. |
| `ja` | Japanese | `母`, `父` | Written/formal citation forms, not spoken `お母さん`/`お父さん`. |
| `en_aave` | English (AAVE) | `mama`, `daddy` | Familiar/child register. |
| `ru` | Russian | `мать`, `отец` | Formal/basic citation forms. |

This is a semantic consistency issue rather than a simple error. The map currently mixes “mother/father as formal kinship lexemes” and “mom/dad as common address/family terms”.

Recommendation:
- Decide whether the concept should be `mother/father` or `mom/dad`.
- If the goal is the most culturally natural everyday basic word, several major rows should be reviewed together instead of changing individual entries ad hoc.

### 37. More rows likely affected by `heart` as anatomical vs emotional center

Pass 2 listed major examples. Additional likely candidates:

| Code | Language | Current heart value | Concern |
|---|---|---|---|
| `he` | Hebrew | `לב` | Can mean heart both anatomically and emotionally; likely acceptable but concept should be defined. |
| `ar` | Arabic | `قلب` | Similar; likely acceptable. |
| `vi` | Vietnamese | `trái tim` | Anatomical/heart term; contrasts with languages using mind/feeling terms. |
| `sw` | Swahili | `moyo` | Heart/spirit/life; likely acceptable but broader than anatomical heart. |
| `yo` | Yoruba | `ọkàn` | Heart/mind/soul; may not be anatomical-only. |

Recommendation:
- Do not change these blindly. First decide the intended concept. The current data is probably a mix of anatomical terms and culturally central “heart/mind” terms.

## Revised Priority List After Pass 3

1. Decide pronunciation-column policy: strict IPA, phonemic IPA, or practical transcription.
2. Decide semantic policy for `heart`, `mother/father`, `one`, and `eat/drink`.
3. Fix high-visibility confirmed IPA/source issues: `en`, `fr`, `zh`, `ru`, `uk`, `pt_*`, `tr`, `he`.
4. Resolve classification issues: `ja_oki`, `ko_jeju`, `ar`.
5. Then perform family-level passes with sources rather than isolated row corrections.

## Additional Review Pass 4

Date: 2026-05-05

This pass compared regional/variant rows against their base language rows and looked for entries that are present as separate varieties but mostly duplicate the base language.

### 38. Northeastern Mandarin row is an exact duplicate of Standard Mandarin

Location: `zh_db` (`Chinese (Dongbei)`)

Issue:
- `zh_db` is 20/20 identical to `zh` for all words and pronunciations.
- If it is meant to represent Northeastern Mandarin, the row currently does not add any regional lexical or phonetic information.

Risk:
- Users may interpret the map as showing a real Dongbei Mandarin sample, but it is only a copy of Standard Mandarin.

Suggested direction:
- Either remove/merge the row, mark it as “same as Standard Mandarin pending review”, or replace the full row with sourced Dongbei forms/pronunciations.

### 39. Spanish regional rows are mostly Castilian-base copies with a few sound changes

Locations: `es_mx`, `es_co`, `es_cl`, `es_ar`, `es_cu`, `es_pe`, `es_an`

Comparison against `es_eu`:

| Code | Language | Entries identical to `es_eu` | Concern |
|---|---|---:|---|
| `es_mx` | Spanish (Mexico) | 18/20 | Only `corazón` and `gracias` differ for seseo; otherwise the row is essentially Spain Spanish. |
| `es_co` | Colombian Spanish | 18/20 | Same issue. |
| `es_pe` | Peruvian Spanish | 18/20 | Same issue. |
| `es_cl` | Chilean Spanish | 17/20 | Some /x/ or coda-/s/ differences, but mostly copied. |
| `es_ar` | Argentine Spanish | 17/20 | Some `ll/y` treatment in `ojo`, but most values copied. |
| `es_cu` | Cuban Spanish | 17/20 | Some aspiration-like changes, but most values copied. |
| `es_an` | Andalusian Spanish | 11/20 | More regionalized than the others, but still partly mixed. |

Issue:
- These may be acceptable if the goal is “same lexical item with representative accent differences,” but then the IPA should be carefully region-specific across all applicable entries.
- If the goal is lexical variation, most rows are not doing that.

Suggested direction:
- Add a policy: regional Spanish rows represent accent variation only, not lexical replacement.
- Then audit all regional Spanish IPA systematically. If not, collapse rows or add more regional lexical choices where appropriate.

### 40. Korean regional rows are mostly Standard Korean with a few local insertions

Locations: `ko_kp`, `ko_bus`, `ko_jeju`, `ko_yb`

Comparison against `ko`:

| Code | Language | Entries identical to `ko` | Concern |
|---|---|---:|---|
| `ko_kp` | Korean (DPRK) | 19/20 | Only greeting differs. This is not enough to represent DPRK Korean pronunciation/lexicon. |
| `ko_bus` | Korean (Busan) | 15/20 | Some local words, but many standard pronunciations remain. |
| `ko_jeju` | Korean (Jeju) | 14/20 | Classification issue already noted; mixed Jeju-specific and Standard Korean. |
| `ko_yb` | Yanbian Korean | 17/20 | Mostly Standard Korean with a few kinship/greeting changes. |

Issue:
- These rows may create an impression of full dialect coverage while only a handful of tokens differ.

Suggested direction:
- Either mark them as “partial regional sample” or expand/review each row with regional sources.
- `ko_kp` needs a specific decision: if only `hello` differs, it may not justify a separate row unless metadata/position is the point.

### 41. Japanese dialect rows are mostly Standard Japanese plus a few dialectal tokens

Locations: `ja_osa`, `ja_aom`, `ja_hak`, `ja_kyo`, `ja_hir`, `ja_kg`, `ja_sd`

Comparison against `ja`:

| Code | Language | Entries identical to `ja` | Concern |
|---|---|---:|---|
| `ja_osa` | Japanese (Osaka) | 15/20 | Mostly Standard Japanese; only kinship/greeting/thanks/good differ. |
| `ja_aom` | Japanese (Aomori) | 14/20 | Mostly Standard Japanese. |
| `ja_hak` | Japanese (Hakata) | 16/20 | Mostly Standard Japanese. |
| `ja_kyo` | Japanese (Kyoto) | 15/20 | Mostly Standard Japanese. |
| `ja_hir` | Japanese (Hiroshima) | 16/20 | Mostly Standard Japanese. |
| `ja_kg` | Japanese (Kagoshima) | 7/20 | More regionalized, but still mixed. |
| `ja_sd` | Japanese (Sendai) | 10/20 | More regionalized than most, still mixed. |

Issue:
- The rows are useful as light dialect flavor, but not as complete dialect word lists.
- Some entries use standard written forms (`水`, `火`, `月`, etc.) with standard-like pronunciations even where regional phonetics may differ.

Suggested direction:
- Decide whether Japanese regional rows are intended as “regional Japanese flavor” or full dialect samples.
- If flavor rows, add a status/note. If full samples, they need a full regional phonology and lexicon pass.

### 42. English regional rows contain many identical base-English values plus highly local greetings

Locations: English regional rows (`en_au`, `en_sco`, `en_ie`, `en_aave`, `en_south`, `en_app`, `en_in`, `en_yk`, `en_ck`, `en_sg`)

Issue:
- Rows often keep many base words unchanged but insert highly local greetings (`g'day`, `howdy`, `ey up`, `oi`, `hello lah`, etc.).
- This mixes two principles: accent transcription for common words and lexical/register substitution for greetings.

Examples:

| Code | Language | Identical to base `en` | Notable register/local substitutions |
|---|---|---:|---|
| `en_aave` | English (AAVE) | 8/20 | `mama`, `daddy`, `what's up` |
| `en_app` | English (Appalachian) | 8/20 | `howdy` |
| `en_sco` | English (Scottish) | 7/20 | mostly accent forms; `thanks` remains generic |
| `en_yk` | English (Yorkshire) | 5/20 | `ey up`, `ta` |
| `en_ck` | English (Cockney) | 3/20 | `oi`, `fanks` spelling/pronunciation mix |
| `en_sg` | Singlish | 4/20 | `hello lah` |

Suggested direction:
- Separate accent rows from lexical/register rows, or add a note that regional rows may use salient colloquial equivalents.

### 43. Regional rows need a `coverage` or `confidence` flag

The variant comparison suggests a data model issue. Some rows are full language samples; others are partial flavor samples. The UI currently treats them equally.

Suggested metadata additions:
- `coverage: "full" | "partial" | "accent-only" | "placeholder"`
- `sourceStatus: "sourced" | "mixed" | "needs-review"`
- `variantPolicy: "lexical" | "phonetic" | "mixed"`

Rows that should likely be marked partial/mixed until reviewed:
- `zh_db`
- most Spanish regional rows
- `ko_kp`, `ko_bus`, `ko_jeju`, `ko_yb`
- most Japanese regional rows
- several English regional rows
- `fr_qc`

### 44. Duplicate same-form/same-IPA rows remain and should be source-gated

The duplicate scan still finds 23 modern duplicate concept pairs/triples. Some are culturally valid, but several are high-risk:

High-risk or needs evidence:

| Code | Language | Duplicate concepts | Value | Why review |
|---|---|---|---|---|
| `lus` | Mizo | `drink/house` | `in` / `in` | Could be real homonymy, but surprising enough to require source. |
| `glk` | Gilaki | `eat/drink` | `خوردن` / `xoɾdæn` | Persian-like verb may cover both “eat/drink” in some contexts, but needs source. |
| `lrc` | Lurish | `eat/drink` | `خواردن` / `xwɒːɾdæn` | Same issue. |
| `bqi` | Bakhtiari | `eat/drink` | `خواردن` / `xwoɾdan` | Same issue. |
| `enq` | Enga | `fire/tree` | `ita` / `ita` | Surprising semantic duplicate; source needed. |
| `mpt` | Mian | `sun/good`, `mother/love` | `kep`, `na` | Very high risk because two unrelated duplicate pairs occur in one row. |
| `myp` | Pirahã | `heart/good` | `aoʔaago` | Needs source; semantic concepts are unrelated unless culturally polysemous. |

Likely acceptable but still worth documenting:
- `haw` `love/hello` = `aloha`
- `nv` `hello/good` = `yáʼátʼééh`
- `tok` Toki Pona duplicates
- `pjt` `hello/thanks/good` = `palya`

Suggested direction:
- Add an allowlist with a reason and source for accepted duplicates.
- Treat all non-allowlisted duplicates as audit failures or warnings.

### 45. Some variant rows are better handled as “same language, different marker” rather than separate word data

Rows like `zh_db`, `ko_kp`, and many Spanish regional rows may be useful geographically, but duplicating the full 20-word set creates maintenance risk and misleading precision.

Alternative design:
- Store one canonical word list for the base language.
- For regional markers, override only the entries that genuinely differ.
- UI can display inherited values as inherited, rather than pretending each row has independently verified data.

This would reduce copy-paste drift and make review much easier.

## Revised Priority List After Pass 4

1. Add a data status/coverage flag for variant rows.
2. Convert regional rows to base-plus-overrides or mark inherited values explicitly.
3. Source-gate duplicate same-form/same-IPA concept pairs.
4. Prioritize full review for exact/near-exact duplicate variants: `zh_db`, `ko_kp`, `fr_qc`, Spanish regional rows.
5. Continue language-family IPA cleanup after the data model distinguishes full samples from partial variants.

## Additional Review Pass 5

Date: 2026-05-05

This pass incorporates a user-reported issue: Naxi has suspicious word choices for `thanks` and `one`, and both Bouyei and Naxi omit tone from the IPA/transcription field.

### 46. Naxi row has high-risk word/form problems in `thanks` and `one`

Location: `nxq` (`Naxi`, native `Naqxi`)

Current values:

| Concept | Current surface | Current IPA/transcription | Issue |
|---|---|---|---|
| `thanks` | `gbie-ɣ` | `ɡbieɣ` | The surface form contains Greek/IPA-like `ɣ` rather than a normal Naxi romanization letter sequence. This strongly suggests the surface field is contaminated by phonetic notation or an unverified transcription. |
| `one` | `ʈʂʰu-i` | `ʈʂʰui` | The surface form starts with IPA symbols (`ʈʂʰ`), not ordinary Naxi orthography. This is very likely wrong for the displayed word field. |

Additional concern:
- Several other Naxi surface forms also look like a mixture of Naxi pinyin, ad hoc hyphenation, and phonetic symbols: `nyel-bbeq`, `see-zai`, `pee-mei`, `lai-mei`.
- This row should be reviewed from a Naxi dictionary/wordlist rather than patched one word at a time.

Suggested direction:
- Treat `nxq.thanks` and `nxq.one` as high-priority data errors.
- Replace the surface forms with verified Naxi orthography and set the pronunciation field separately.
- Add a source note for the row because the current mixture makes it hard to tell which dialect/orthography is intended.

### 47. Naxi IPA/transcription omits lexical tones

Location: `nxq`

Current examples:

| Concept | Surface | Current IPA/transcription |
|---|---|---|
| `water` | `gee` | `ɡe` |
| `fire` | `mee` | `me` |
| `hello` | `nyel-bbeq` | `ɲeɓe` |
| `thanks` | `gbie-ɣ` | `ɡbieɣ` |
| `one` | `ʈʂʰu-i` | `ʈʂʰui` |

Issue:
- Naxi is tonal. Sources describe four lexical tones in the Western/Lijiang dialect: High, Mid, Low/Falling, and rare Rising; Naxi romanization can mark tones with suffixes such as `-l`, zero, `-q`, and `-f`.
- The current pronunciation values strip all tone information. For a tonal language, this is not a minor IPA-detail issue; it can make otherwise distinct words look identical.

Suggested direction:
- Decide whether to encode tones as IPA tone letters/numbers or preserve Naxi pinyin tone suffixes in a documented transcription field.
- Do not call the field pure IPA for Naxi until tones are represented.

Evidence:
- Naxi has four tones and tone suffixes are described in the Naxi language overview: https://en.wikipedia.org/wiki/Naxi_language
- Michaud & He describe Western Naxi as having High, Mid, Low, and Rising lexical tones: https://www.cambridge.org/core/journals/journal-of-the-international-phonetic-association/article/reassociated-tones-and-coalescent-syllables-in-naxi-tibetoburman/2953611ECF15BB4DFB3B581BFC48B94D
- Naxi dictionary resource for source checking: https://dokumen.pub/naqxi-habaq-yiyu-ceeqdiai-a-naxi-chinese-english-dictionary-9787536754713.html

### 48. Bouyei row strips orthographic tone letters from IPA/transcription

Location: `pcc` (`Bouyei`, native `Haausqyaix`)

Current examples:

| Concept | Current surface | Current IPA/transcription | Issue |
|---|---|---|---|
| `water` | `raamx` | `raːm` | Final `x` is a tone letter in Bouyei orthography; IPA omits tone. |
| `fire` | `feih` | `fei` | Final `h` tone letter omitted. |
| `sun` | `ngonzbyaaiz` | `ŋonpjaːi` | Final tone letters omitted; also complex orthography simplified without tone. |
| `moon` | `ronh` | `roːn` | Final `h` tone letter omitted. |
| `mother` | `meeh` | `meː` | Tone omitted. |
| `eat` | `gianl` | `ɡian` | Final `l` tone letter omitted. |
| `drink` | `gunl` | `ɡuŋ` | Final `l` tone letter omitted. |
| `thanks` | `gangzhainh` | `ɡaŋhaiŋ` | Tone omitted; segmental conversion also needs source review. |
| `one` | `ndeeul` | `ndeːu` | Tone omitted. |
| `good` | `ndil` | `ndil` | Tone omitted. |

Issue:
- Bouyei is tonal and its Latin orthography marks tones with final letters.
- The current IPA/transcription removes those tone letters but does not replace them with IPA tone values or tone numbers. This loses phonemic information.

Suggested direction:
- Convert Bouyei tone letters to tone numbers/contours in the pronunciation field, or keep Bouyei orthography in a documented transcription field.
- Because the ABVD Wangmo Bouyei source gives tonal IPA-like values such as `ʔdɛu24` for “one”, use a sourced Wangmo/standard Bouyei wordlist rather than manually guessing from orthography.

Evidence:
- Bouyei has six/eight tone categories and uses final letters as tone markers: https://en.wikipedia.org/wiki/Bouyei_language
- Omniglot also describes Bouyei tone letters added to word endings: https://www.omniglot.com/writing/bouyei.htm
- ABVD Bouyei (Wangmo) gives tonal values and notes shorthand tones; it lists “one” as `ʔdɛu24` in the Wangmo data: https://abvd.eva.mpg.de/austronesian/language.php?id=731

### 49. Naxi and Bouyei should be escalated from “general tone convention” to concrete data defects

Previous sections discussed tone/stress policy in broad terms. The Naxi/Bouyei case is more severe:

- The surface forms already contain tone-bearing orthographic information.
- The pronunciation field removes that tone information.
- In Naxi, the surface field itself appears contaminated with IPA symbols for at least `thanks` and `one`.

Recommended priority:
1. Audit `nxq` and `pcc` before continuing lower-confidence tone cleanup elsewhere.
2. For each row, choose one dialect/source and stick to it.
3. Add a test that flags tonal orthographies where final tone letters are stripped without replacement in IPA/transcription.

## Additional Review Pass 6

Date: 2026-05-05

Scope: Asian minority languages, with focus on the same problem class as Naxi/Bouyei:
- Tone letters/marks present in the surface form but missing from IPA/transcription
- Surface field contaminated by IPA symbols
- Practical romanization copied into the IPA/transcription field

### 50. Iu Mien strips tone-marker letters from nearly every relevant entry

Location: `iuu` (`Iu Mien`, native `Iu Mienh`)

Current examples:

| Concept | Current surface | Current IPA/transcription | Issue |
|---|---|---|---|
| `fire` | `douz` | `dou` | Final `z` is a tone marker in Iu Mien United Script; IPA omits tone. |
| `moon` | `hlaax` | `hlaː` | Final `x` tone marker omitted. |
| `father` | `diex` | `die` | Final `x` tone marker omitted. |
| `eat` | `nyanc` | `ɲan` | Final `c` tone marker omitted. |
| `drink` | `hopv` | `hop` | Final `v` tone marker omitted. |
| `love` | `hnamv` | `hnam` | Final `v` tone marker omitted. |
| `house` | `biauv` | `biau` | Final `v` tone marker omitted. |
| `hello` | `yiem-longx` | `jiem lon` | Tone marker omitted in second syllable. |
| `thanks` | `laengz` | `laŋ` | Final `z` tone marker omitted. |
| `good` | `longx` | `lon` | Final `x` tone marker omitted. |

Issue:
- This is the same defect pattern as Bouyei: orthography contains tone markers, IPA removes them without replacement.
- Iu Mien is tonal and uses final marker letters for tone.

Evidence:
- Iu Mien tone markers are final letters such as `v`, `h`, `c`, `x`, `z`; absence marks mid tone: https://en-academic.com/dic.nsf/enwiki/1580262
- A parallel summary lists six observed tonemes and maps IMUS tone letters to IPA-like tone values: https://handwiki.org/wiki/Social%3AIu_Mien_language

Recommended action:
- Treat `iuu` as high priority together with `pcc` and `nxq`.
- Convert final tone letters to tone values or change the column policy to documented practical transcription.

### 51. Tai Lue script tone marks are omitted from IPA/transcription

Location: `khb` (`Tai Lue`, native New Tai Lue script)

Current examples:

| Concept | Current surface | Current IPA/transcription | Issue |
|---|---|---|---|
| `water` | `ᦓᧄᧉ` | `nam` | Surface contains final tone mark `ᧉ`; IPA has no tone. |
| `sun` | `ᦋᧁᧉ` | `tsau` | Tone mark omitted. |
| `mother` | `ᦡᦲᧈ` | `meː` | Tone mark omitted; segmental value also needs source review. |
| `father` | `ᦗᦸᧈ` | `pɔː` | Tone mark omitted. |
| `house` | `ᦠᦴᧃᧉ` | `huːn` | Tone mark omitted. |

Issue:
- New Tai Lue uses tone marks at the end of syllables; the current pronunciation field removes them.

Evidence:
- New Tai Lue has two tone marks `ᧈ` and `ᧉ`, which combine with consonant register to represent six tones: https://en.wikipedia.org/wiki/New_Tai_Lue_alphabet
- Tai Lue has six tones in unchecked syllables: https://en.wikipedia.org/wiki/Tai_Lue_language

Recommended action:
- Add tone values to every Tai Lue IPA/transcription entry or preserve script/romanization with a clear note.

### 52. Shan likely omits tone throughout

Location: `shn` (`Shan`)

Current examples:

| Concept | Current surface | Current IPA/transcription |
|---|---|---|
| `water` | `ၼမ်ႉ` | `nam` |
| `fire` | `ၾႆး` | `faj` |
| `moon` | `လိူၼ်` | `lyn` |
| `mother` | `မႄႈ` | `me` |
| `father` | `ပေႃႈ` | `pə` |
| `thanks` | `ၶွပ်ႈၸႂ်` | `kɔp tsai` |

Issue:
- Shan is a Tai language with contrastive tone, and the script encodes tonal information. Current values are segmental only.
- This is likely the same tone-loss class as Bouyei/Tai Lue, though it needs a Shan-specific source check before individual correction.

Recommended action:
- Mark `shn` as high-priority tone audit.

### 53. Lahu surface field contains IPA/phonetic symbols and tone marks

Location: `lhu` (`Lahu`)

Current examples:

| Concept | Current surface | Current IPA/transcription | Issue |
|---|---|---|---|
| `water` | `ɨ̂` | `ɯ̂` | Surface field is phonetic/IPA-like, not ordinary user-facing orthography. |
| `eat` | `caˆ` | `tsâ` | Surface uses tone mark notation; IPA uses accented vowel rather than IPA tone letters. |
| `drink` | `dawˇ` | `dàʔ` | Practical tone mark converted to accent, not standardized IPA tone. |
| `hand` | `lɔˆ` | `lɔ̂` | Surface field has IPA character `ɔ`. |
| `eye` | `mɛhˇ` | `mɛ̂ʔ` | Surface field has IPA character `ɛ`. |

Issue:
- This is slightly different from Bouyei: the problem is not only tone stripping, but mixing phonetic notation into the display word column.

Recommended action:
- Review the entire Lahu row from a source. Separate display orthography from pronunciation.

### 54. Mlabri and Khmu have IPA symbols in the surface word field

Locations: `mra` (`Mlabri`), `xkk` (`Khmu`)

Examples found by scan:

| Code | Language | Examples | Issue |
|---|---|---|---|
| `mra` | Mlabri | `ʔus`, `ŋay`, `mɛʔ` | Surface forms contain IPA symbols (`ʔ`, `ŋ`, `ɛ`). |
| `xkk` | Khmu | `ɔm`, `ʔus`, `maŋ`, `mɔɔʔ` | Surface forms contain IPA symbols (`ɔ`, `ʔ`, `ŋ`). |

Issue:
- If no standard orthography is intended, the word column is functioning as transcription. That is acceptable only if labeled as such.
- If a practical orthography exists, these surface entries should be replaced and IPA kept in the pronunciation field.

Recommended action:
- Mark both rows as “transcription-as-surface; needs source/orthography decision.”

### 55. Wa row contains phonetic symbols in surface forms

Location: `wbm` (`Wa`, native `Vāx`)

Current examples:

| Concept | Surface | IPA/transcription | Issue |
|---|---|---|---|
| `sun` | `cangaiʔ` | `tʃaŋaiʔ` | Surface contains `ʔ`. |
| `moon` | `khaiʔ` | `kʰaiʔ` | Surface contains `ʔ`. |
| `mother` | `yaʔ` | `jaʔ` | Surface contains `ʔ`. |
| `drink` | `ɔk` | `ɔk` | Surface contains IPA `ɔ`. |
| `thanks` | `ban prix` | `ban priʔ` | Segmental mismatch and possible practical transcription issue. |

Recommended action:
- Review Wa row as display transcription vs orthography; do not treat current surface values as clean orthography.

### 56. Tujia has tone-number contamination in surface forms and missing tone in IPA for those entries

Location: `tji` (`Tujia`, native `Bizisa`)

Current examples:

| Concept | Current surface | Current IPA/transcription | Issue |
|---|---|---|---|
| `love` | `a2ci1` | `atsi` | Surface contains tone numbers; IPA strips tone. |
| `thanks` | `ang2zai1` | `aŋtsai` | Surface contains tone numbers; IPA strips tone. |

Issue:
- Tone-bearing practical transcription is in the surface field, but the IPA field drops tone.
- Other Tujia entries do include tone marks in IPA (`tsɨ˥˧`, `mi˥˧`, etc.), so these two are inconsistent within the row.

Recommended action:
- Convert `love` and `thanks` to the same tone notation used elsewhere in `tji`, or replace with sourced forms.

### 57. Hmong and Zhuang mostly encode tone in IPA, but still need consistency checks

Locations: `hmn` (`Hmong`), `za` (`Zhuang`)

Current status:
- Unlike Bouyei and Iu Mien, `hmn` and `za` generally map final tone letters to tone marks in the IPA/transcription field.
- Examples:
  - Hmong `dej` -> `te˧`, `taws` -> `tɑ˧˩`, `hnub` -> `nu˧˥`
  - Zhuang `raemx` -> `ɣam˦`, `feiz` -> `fei˧˥`, `meh` -> `me˨`

Remaining concerns:
- Some entries may still need segmental review.
- `za` `water` `raemx` -> `ɣam˦` is not a simple letter-by-letter conversion; source is needed to confirm dialect and phonology.
- `hmn` `one` `ib` -> `i˧˥` maps tone, but final tone-letter treatment should be documented.

Recommended action:
- Do not group these with the severe “tone stripped entirely” rows. Mark them as “tone represented, segmental/source review still needed.”

### 58. Jingpo and Akha appear more consistent on tone, but source verification is still needed

Locations: `kac` (`Jingpo/Kachin`), `ahk` (`Akha`)

Current status:
- `kac` frequently includes `˧` tone marks in IPA/transcription.
- `ahk` consistently uses tone marks such as `˧` in IPA/transcription.

Issues:
- Some surface forms are practical romanization and may not be intended as user-facing orthography.
- `kac` `sun` surface `jan` but IPA `tsan˧` is a segmental mismatch that deserves source review.

Recommended action:
- Lower priority than `pcc`, `iuu`, `khb`, `shn`, `nxq`, but include in Asian minority source audit.

### 59. Asian minority-language priority list

High priority concrete defects:
1. `nxq` Naxi: bad surface forms for `thanks`/`one`; tones omitted.
2. `pcc` Bouyei: final tone letters stripped without replacement.
3. `iuu` Iu Mien: final tone letters stripped without replacement.
4. `khb` Tai Lue: script tone marks stripped without replacement.
5. `tji` Tujia: tone-number surface forms in `love`/`thanks`; IPA drops those tones.

High priority likely defects needing source confirmation:
1. `shn` Shan: likely tone omitted throughout.
2. `lhu` Lahu: surface field contaminated by IPA/tone notation.
3. `mra` Mlabri and `xkk` Khmu: IPA/transcription used as surface forms.
4. `wbm` Wa: IPA symbols in surface forms.

Lower priority / different issue:
1. `hmn` Hmong and `za` Zhuang: tones mostly represented, but source/segmental consistency needed.
2. `kac` Jingpo and `ahk` Akha: tones mostly represented, but source verification needed.
3. Austronesian entries with spelling=IPA (e.g. Formosan and Philippine languages) are a separate “orthography copied as broad transcription” issue, not the same tone-loss class.

## Additional Review Pass 7

Scope: major Asian modern languages. This pass is stricter than the earlier broad scan: it treats tone, register/part-of-speech choice, script appropriateness, and "IPA field is just a spelling copy" as defects when they would mislead users.

### 60. Thai tone values are systematically over-marked as high tone

Location: `th` (`Thai`)

Current examples:

| Concept | Current surface | Current IPA/transcription | Issue |
|---|---|---|---|
| `fire` | `ไฟ` | `faj˥` | Standard Thai `ไฟ` is mid tone, not high. |
| `eat` | `กิน` | `kin˥` | Standard Thai `กิน` is mid tone. |
| `heart` | `ใจ` | `tɕaj˥` | Standard Thai `ใจ` is mid tone. |
| `eye` | `ตา` | `taː˥` | Standard Thai `ตา` is mid tone. |
| `good` | `ดี` | `diː˥` | Standard Thai `ดี` is mid tone. |
| `water` | `น้ำ` | `naːm˧˥` | This one may be high tone and is not the same class as the others. |

Evidence checked:
- Wiktionary `กิน`: standard IPA `/kin˧/` — https://en.wiktionary.org/wiki/%E0%B8%81%E0%B8%B4%E0%B8%99
- Wiktionary `ดี`: standard IPA `/diː˧/` — https://en.wiktionary.org/wiki/%E0%B8%94%E0%B8%B5
- Wiktionary `ตา`: standard IPA `/taː˧/` — https://en.wiktionary.org/wiki/%E0%B8%95%E0%B8%B2
- Wiktionary examples for `ไฟ`: compounds show `ไฟ` as `/faj˧/`, e.g. `ไฟฉาย` and `ไฟเย็น` — https://en.wiktionary.org/wiki/%E0%B9%84%E0%B8%9F%E0%B8%89%E0%B8%B2%E0%B8%A2

Recommended action:
- Re-audit every Thai and Thai-dialect tone mark against a consistent standard, preferably Bangkok Thai for `th`.
- Do not bulk-convert all entries; `น้ำ`, `แม่`, `พ่อ`, `รัก`, etc. may legitimately carry non-mid tones.

### 61. Lao omits tone almost entirely, and one IPA field contains a romanization diacritic

Location: `lo` (`Lao`)

Current examples:

| Concept | Current surface | Current IPA/transcription | Issue |
|---|---|---|---|
| `water` | `ນ້ຳ` | `nam` | Tone omitted. |
| `fire` | `ໄຟ` | `faj` | Tone omitted. |
| `eat` | `ກິນ` | `kin` | Tone omitted; Vientiane IPA is tone-bearing. |
| `good` | `ດີ` | `diː` | Tone omitted. |
| `sun` | `ຕາເວັນ` | `taːwēn` | `ē` is not IPA; looks like romanization leakage. |

Evidence checked:
- Wiktionary `ກິນ`: Vientiane `[kin˩(˧)]` — https://en.wiktionary.org/wiki/%E0%BA%81%E0%BA%B4%E0%BA%99
- Wiktionary `ດີ`: Vientiane `[diː˩(˧)]` — https://en.wiktionary.org/wiki/%E0%BA%94%E0%BA%B5
- Wiktionary Lao entry guidelines describe dialectal tone handling and tone notation — https://en.wiktionary.org/wiki/Wiktionary:Lao_entry_guidelines

Recommended action:
- Treat `lo` as a high-priority tone audit, similar in severity to `khb`/`shn`/`pcc`, because the whole IPA column is under-specified.
- Replace `taːwēn` with IPA-only notation after sourcing the exact Lao form for "sun".

### 62. Burmese mixes IPA tone diacritics with tone-free broad forms

Location: `my` (`Burmese`)

Current examples:

| Concept | Current surface | Current IPA/transcription | Issue |
|---|---|---|---|
| `water` | `ရေ` | `je` | Tone omitted; source examples give `/jè/`. |
| `fire` | `မီး` | `mi` | Tone omitted. |
| `sun` | `နေ` | `ne` | Tone omitted. |
| `heart` | `နှလုံး` | `n̥əlóuɴ` | Tone marked with acute accent. |
| `tree` | `သစ်ပင်` | `θiʔpìɴ` | Tone marked with grave accent. |
| `thanks` | `ကျေးဇူးတင်ပါတယ်` | `tɕézú tìɴ pà dɛ̀` | Mixed accent-style tone marks across the phrase. |

Evidence checked:
- Wiktionary `ရေ`: IPA `/jè/` — https://en.wiktionary.org/wiki/%E1%80%9B%E1%80%B1
- Wiktionary Burmese pronunciation appendix: Burmese IPA tone/phonation is represented with diacritics such as grave, acute, and creaky marks — https://en.wiktionary.org/wiki/Appendix:Burmese_pronunciation

Recommended action:
- Decide whether the IPA column accepts tone accents for Burmese. If yes, add them consistently to entries like `ရေ`, `မီး`, `နေ`, `စား`, `တစ်`.
- If the project wants Chao tone letters everywhere, convert Burmese consistently instead of mixing plain broad forms and accent-marked forms.

### 63. Khmer IPA/transcription column is often transliteration, not IPA

Location: `km` (`Khmer`)

Current examples:

| Concept | Current surface | Current IPA/transcription | Issue |
|---|---|---|---|
| `sun` | `ព្រះអាទិត្យ` | `preah ʔaːtɨt` | `preah` is transliteration-like, not IPA. |
| `mother` | `ម៉ែ` | `mae` | `ae` is not an IPA vowel sequence for the expected Khmer vowel. |
| `love` | `ស្នេហា` | `snaehaː` | Transliteration-like `sn ae h`; not clean IPA. |
| `heart` | `បេះដូង` | `beh doːŋ` | `eh` is transliteration-like. |
| `house` | `ផ្ទះ` | `pteah` | Transliteration-like `ea`; not IPA. |

Issue:
- This row is not just broad IPA; many fields are romanization/transliteration. It should be labelled as transcription if kept, or converted to IPA.

Recommended action:
- Rebuild `km` IPA from a consistent Khmer pronunciation source.
- Avoid mixing romanized spellings (`preah`, `pteah`) with IPA symbols (`ʔ`, `ŋ`) in the same column.

### 64. Cantonese uses simplified characters in a Hong Kong/Cantonese row and misses checked-stop detail

Location: `yue` (`Cantonese`, native `廣東話`, coordinates Hong Kong)

Current examples:

| Concept | Current surface | Current IPA/transcription | Issue |
|---|---|---|---|
| `mother` | `妈妈` | `maː˥maː˥` | Simplified form; HK/Cantonese row should normally use `媽媽`. |
| `father` | `爸爸` | `paː˨˩paː˥` | Script is acceptable in simplified contexts, but inconsistent with `廣東話`. |
| `drink` | `饮` | `jɐm˧˥` | Simplified; Cantonese traditional would be `飲`. |
| `love` | `爱` | `ɔːi˧` | Simplified; traditional `愛`. |
| `tree` | `树` | `syː˨` | Simplified; traditional `樹`. |
| `one` | `一` | `jɐt˥` | Checked final stop is under-specified; expected IPA should show unreleased/checked final. |

Recommended action:
- For `yue`, use traditional characters consistently unless the row is explicitly Mainland Cantonese.
- Review checked syllables such as `食`, `屋`, `一` so the IPA marks final stops consistently.

### 65. Taiwanese/Hokkien leaves tones off kinship terms

Location: `nan` (`Taiwanese`)

Current examples:

| Concept | Current surface | Current IPA/transcription | Issue |
|---|---|---|---|
| `mother` | `媽媽` | `mama` | No tone marks, unlike most other `nan` entries. |
| `father` | `爸爸` | `papa` | No tone marks. |
| `one` | `一` | `it˦` | Tone exists, but checked-final detail is broad; compare `食`/`目`. |

Issue:
- The row mostly contains tone marks, so `mother`/`father` are inconsistent rather than merely broad transcription.

Recommended action:
- Add sourced tone values for `媽媽` and `爸爸`, or replace with common Taiwanese forms if these are Mandarin-influenced placeholders.

### 66. Indonesian, Malay, and Tagalog use orthography copies as IPA for many entries

Locations: `id` (`Indonesian`), `ms` (`Malay`), `tl` (`Tagalog`)

Current examples:

| Language | Concept | Current surface | Current IPA/transcription | Issue |
|---|---|---|---|---|
| `id` | `water` | `air` | `air` | Spelling copy; not IPA. |
| `id` | `moon` | `bulan` | `bulan` | Spelling copy. |
| `id` | `heart` | `hati` | `hati` | Spelling copy. |
| `ms` | `water` | `air` | `air` | Spelling copy; Malay pronunciation differs by standard/dialect. |
| `ms` | `heart` | `hati` | `hati` | Spelling copy. |
| `tl` | `eat` | `kumain` | `kumain` | Spelling copy. |
| `tl` | `drink` | `uminom` | `uminom` | Spelling copy. |
| `tl` | `thanks` | `salamat` | `salamat` | Spelling copy. |

Issue:
- These are major languages, so users are likely to notice that the IPA column is not actually IPA.
- This also affects related major/regional Austronesian rows such as Javanese, Sundanese, Cebuano, and Ilocano, but `id`/`ms`/`tl` are the highest-visibility cases.

Recommended action:
- Either rename the column behavior for these rows as "transcription" or add true IPA, at least for the 20 core words.

### 67. Modern Standard Arabic uses perfective verb forms for `eat` and `drink`

Location: `ar` (`Arabic`)

Current examples:

| Concept | Current surface | Current IPA/transcription | Issue |
|---|---|---|---|
| `eat` | `أكل` | `ʔakala` | This is "he ate" / perfective 3rd person masculine singular, not a neutral lemma like "to eat". |
| `drink` | `شرب` | `ʃariba` | This is "he drank" / perfective 3rd person masculine singular. |

Issue:
- Other languages often use infinitives or bare stems. Arabic has no direct infinitive equivalent, but displaying perfective 3ms forms without a note is misleading.

Recommended action:
- Either use verbal nouns/masdars where appropriate, or add `wordEvidence` notes that Arabic verb display forms are dictionary perfective lemmas.
- Apply the same policy to Arabic dialect rows if they also use finite verb forms.

### 68. Tamil and Telugu have part-of-speech/register mismatches

Locations: `ta` (`Tamil`), `te` (`Telugu`)

Current examples:

| Language | Concept | Current surface | Current IPA/transcription | Issue |
|---|---|---|---|---|
| `ta` | `water` | `நீர்` | `niːɾ` | Literary/formal; everyday "water" is usually `தண்ணீர்`. |
| `ta` | `eat` | `சாப்பிடு` | `saːpːiɖu` | Imperative/stem-like form; not a neutral infinitive/noun. |
| `ta` | `drink` | `குடி` | `kuɖi` | Imperative/stem-like form. |
| `ta` | `good` | `நல்ல` | `nalla` | Attributive "good"; not a standalone predicate form. |
| `te` | `eat` | `తినడం` | `tɪnəɖəm` | Verbal noun "eating"; inconsistent with languages using verbs/infinitives. |
| `te` | `drink` | `తాగడం` | `taːɡəɖəm` | Verbal noun "drinking". |

Recommended action:
- Define a per-concept policy: noun, adjective, infinitive, dictionary verb stem, imperative, or common citation form.
- Then normalize South Asian rows against that policy instead of mixing registers and parts of speech.

### 69. Tibetan row omits tone and has Lhasa/Wylie-like mismatches

Location: `bo` (`Tibetan`)

Current examples:

| Concept | Current surface | Current IPA/transcription | Issue |
|---|---|---|---|
| `water` | `ཆུ` | `tɕʰu` | Tone omitted for Central/Lhasa Tibetan. |
| `fire` | `མེ` | `me` | Tone omitted. |
| `moon` | `ཟླ་བ` | `tawa` | Likely mismatch for a Central Tibetan pronunciation; looks closer to mechanical spelling conversion than sourced IPA. |
| `one` | `གཅིག` | `tɕik` | Tone omitted; final should be reviewed for checked/stop realization. |

Issue:
- The row is labelled broadly `Tibetan` but the transcription seems to mix Central Tibetan approximations with orthographic conversion. This is high-visibility and should be source-normalized.

Recommended action:
- Decide whether `bo` means Lhasa/Central Tibetan. If yes, rebuild IPA including tone from a Lhasa source.
- If the row is meant as Classical/orthographic Tibetan, relabel it and avoid presenting the second column as modern IPA.

### 70. Major Asian-language priority list

Highest priority concrete defects:
1. `th` Thai: multiple common unmarked-mid-tone words are marked high tone.
2. `lo` Lao: tone is almost entirely missing; `taːwēn` contains non-IPA romanization.
3. `my` Burmese: tone/phonation notation is inconsistent across the row.
4. `km` Khmer: IPA/transcription field is often transliteration, not IPA.
5. `yue` Cantonese: script mismatch for a Hong Kong row and checked-final IPA under-specification.

Medium priority:
1. `nan` Taiwanese: kinship terms lack tones despite the rest of the row using tones.
2. `id`, `ms`, `tl`: many IPA fields are simply orthography copied into the IPA column.
3. `ar`: verb concepts use perfective 3ms dictionary forms without explanation.
4. `ta`, `te`: register/part-of-speech choices are inconsistent with other rows.
5. `bo`: Tibetan needs a dialect decision and tone-aware IPA rebuild.

Lower priority / mostly acceptable after this pass:
1. `ja`, `ko`, `zh`, `vi`, `hi`, `bn`, `ur`, `fa`, `tr`, `he`, `mn`, and major Turkic rows did not show the same level of systematic defect in this pass, though they still need source-level IPA cleanup later.

## Archived Markdown Consolidation

Date: 2026-05-05

I re-read the previously created audit/check/feedback markdown files before archiving them. The items below are the remaining actionable issues that should continue to be tracked here. Items that were already fixed in the current data are not carried forward.

Checked files:
- `wordmap-check.md`
- `wordmap-check-2.md`
- `wordmap-check-3.md`
- `wordmap-check-4.md`
- `wordmap-data-audit-1.md`
- `wordmap-full-audit.md`
- `wordmap-full-audit-feedback.md`
- `wordmap-modern-audit-feedback.md`
- `lang-filter-check.md`
- `lang-filter-check-2.md`

### Already Fixed, Not Re-registered

These appeared as open issues in older md files, but current `wordmap_data.js` or validator output shows them resolved:

| Area | Current status |
|---|---|
| `wordmap_meta.js` / `LANG_DATA` duplicate keys | Current source scan shows no duplicate keys. |
| Dungan `tree`/`hand` and `thanks` | Current `dng` has `tree: фу/fu`, `hand: шў/ʂəu`, `thanks: дуәще/duəɕe`. |
| Navajo `eat`/`drink` duplicate | Current `nv` has distinct `eat: yishą́` and `drink: yishdlą́`. |
| Palauan `dog`/`cat` duplicate | Current `pau` has distinct `dog: bilis` and `cat: katuu`. |
| Naxi `thanks`/`one` surface contamination | Current `nxq` has `thanks: jjuq jjuq / dʑɯ˨˩dʑɯ˨˩`, `one: ddee / dɯ˧`. |
| Tujia `love`/`thanks` tone-number contamination | Current `tji` has `love: aci / a˧˥tsi˥`, `thanks: angzai / aŋ˧˥tsai˥`. |
| Lang-data validator | Current `node validate_wordmap_data.js` passes with 0 errors and 0 warnings. |
| Script filter false positives for `Han`, `Traditional Mongolian`, `Shan`, `Saraiki`, `Yi` | Current `lang-filter.js` has multi-tag detection and specific guards for these cases. |

### New Task 71. Major Asian-language pronunciation/data cleanup remains open

Carry forward from Pass 7. These are still visible in current data and should be prioritized:

| Code | Issue |
|---|---|
| `th` | Thai common mid-tone words such as `ไฟ`, `กิน`, `ใจ`, `ตา`, `ดี` are still marked high tone. |
| `lo` | Lao tone is still mostly omitted, and `sun` still has non-IPA `taːwēn`. |
| `my` | Burmese still mixes plain tone-free forms (`ရေ/je`, `မီး/mi`, `နေ/ne`) with accent-marked forms. |
| `km` | Khmer pronunciation column still contains transliteration-like forms (`preah`, `mae`, `snaehaː`, `pteah`). |
| `yue` | Hong Kong/Cantonese row still uses simplified characters in several cells and underspecifies checked finals. |
| `nan` | Taiwanese `媽媽/mama` and `爸爸/papa` still lack tones while most other cells have tone marks. |
| `id`, `ms`, `tl` | Many pronunciation fields are still orthography copies rather than IPA. |
| `ar` | `eat`/`drink` still use perfective 3ms dictionary forms without a note. |
| `ta`, `te` | Register and part-of-speech choices remain inconsistent. |
| `bo` | Tibetan still needs a dialect decision and tone-aware IPA/transcription rebuild. |

### New Task 72. Asian minority-language cleanup still open after recent fixes

The following remain unresolved after excluding already fixed `pcc`, `nxq`, and `tji`:

| Code | Issue |
|---|---|
| `iuu` | Iu Mien final tone letters are still stripped in IPA/transcription. |
| `khb` | Tai Lue script tone marks are still omitted from pronunciation. |
| `shn` | Shan likely omits tone throughout. |
| `lhu` | Lahu surface field still contains IPA/phonetic tone notation. |
| `mra` | Mlabri still uses IPA-like forms as surface forms in multiple cells. |
| `xkk` | Khmu still uses IPA-like forms as surface forms in multiple cells. |
| `wbm` | Wa still has phonetic symbols in surface forms. |
| `hmn`, `za`, `kac`, `ahk` | Lower priority: tones are more represented, but segment/source consistency still needs verification. |

### New Task 73. Same-form duplicate cells still need source verification

Validator still reports same-form/same-IPA duplicates. Some are true lexical overlap and already annotated, but the following should remain on the source-verification list rather than being silently accepted:

| Code | Duplicate | Current concern |
|---|---|---|
| `lus` | `drink` / `house`: `in` | Mizo `in` as house is clear; `drink` needs citation-form confirmation. |
| `myp` | `heart` / `good`: `aoʔaago` | Pirahã semantic overlap needs source confirmation. |
| `enq` | `fire` / `tree`: `ita` | Enga polysemy or copy error needs source confirmation. |
| `mpt` | `sun` / `good`: `kep`; `mother` / `love`: `na` | Mian grammar/source confirmation needed. |
| `ygr` | `love` / `hello`: `amige` | Yagaria greeting/love overlap needs source confirmation. |
| `glk`, `lrc`, `bqi` | `eat` / `drink` | Iranian `xwar-/xord-` broad "consume" may be legitimate, but dialect dictionaries should be checked. |
| `sukh` | `eat` / `drink`: `กิน` | Old Thai broad use needs historical source confirmation. |

Do not bulk-change these. Add or refine `wordEvidence` only after source confirmation.

### New Task 74. Remaining schema/UI/tooling tasks from archived checks

These are not word-cell corrections, but they affect data trust and should remain visible:

1. Add per-concept definitions for `heart`, `love`, `hello`, `thanks`, `good`, `eat`, and `drink`, because many disputes are actually concept-scope ambiguity.
2. Add or finish per-cell `note` rendering for register, dialect, source strength, and meaning-history notes.
3. Add a silent/preview mode for search live preview so typing does not keep changing the URL hash.
4. Keep the `mon`/`mnw` duplicate-coordinate/code conflict on the allowlist until Mon-language expert review.
5. Improve documentation for `dataStatus`, `wordEvidence`, `speakerBasis`, `script` multi-tags, and the difference between strict IPA and broad transcription.
6. Keep description i18n coverage on the backlog: several UI languages remain below 100% in validator output.

### New Task 75. Historical/full-audit leftovers that still affect modern audit policy

The full-audit files contained many historical-language issues. Most belong outside the modern-language pass, but the following policy tasks should not be lost:

1. Ancient/historical `hello` and `thanks` need a consistent policy distinguishing conversational formula, noun of gratitude, liturgical formula, and unattested value.
2. `wordEvidence` should record when a cell is a direct attestation, proxy, later form, reconstructed form, or pedagogical approximation.
3. `fro.merci`, `osp.mercedes/salud`, `non.þǫkk`, `gez.ምስጋና`, and `syc.ܫܘܒܚܐ` should be reviewed under that policy rather than treated as ordinary modern "thanks".
4. Historical language status is now better structured, but documentation should explain `attested`, `fragmentary`, `partly-understood`, `reconstructed`, and `pedagogical` clearly.

## Claude Response Verification

Date: 2026-05-05

I checked Claude's latest commits against the current `wordmap_data.js`, `wordmap.html`, `wordmap-modern-audit-feedback.md`, and validator output.

Validation:
- `node validate_wordmap_data.js`: PASS, 0 errors, 0 warnings, 1 allowlisted duplicate-coordinate group (`mon`/`mnw`).
- Inline scripts in `wordmap.html`: 8 script blocks syntax-check passed.

Confirmed fixed:

| Area | Current status |
|---|---|
| `th` Thai tones | The previously flagged common words now use mid tone where expected, e.g. `ไฟ/faj˧`, `กิน/kin˧`, `ใจ/tɕaj˧`, `ตา/taː˧`, `ดี/diː˧`. |
| `lo` non-IPA macron | `sun` is now `taːwen`, so the old `taːwēn` artifact is fixed. |
| `yue` script mismatch | The checked cells now use traditional characters, e.g. `媽媽`, `爸爸`, `飲`, `愛`, `樹`. |
| `nan` missing kinship tones | `媽媽/ma˥ma` and `爸爸/pa˥pa` now include tones. |
| `ar` dictionary-form note | `eat`, `drink`, and `one` now have `wordEvidence` notes explaining the 3ms perfective / masculine singular choices. |
| `nxq`, `tji`, `pcc`, `iuu` recent minority-language fixes | Naxi, Tujia, Bouyei, and Iu Mien no longer show the originally reported tone-number/tone-letter contamination or tone stripping pattern. |

Still open or only partially handled:

| Code | Remaining issue |
|---|---|
| `lo` | Lao still lacks tone notation row-wide (`ນ້ຳ/nam`, `ໄຟ/faj`, `ກິນ/kin`, `ດີ/diː`, etc.). Claude correctly marked the full-row tone rebuild as deferred. |
| `my` | Burmese still mixes tone-free forms (`ရေ/je`, `မီး/mi`, `နေ/ne`) with accent-marked forms (`ခွေး/kʰwé`, `ကောင်း/káuɴ`, etc.). |
| `km` | Khmer pronunciation cells still include transliteration-like values such as `preah ʔaːtɨt`, `mae`, `snaehaː`, `pteah`, rather than consistent IPA. |
| `yue` | Script is fixed, but checked-final IPA remains under-specified (`一/jɐt˥`, `食/sɪk˨`, `屋/ʊk˥`). |
| `id`, `ms`, `tl` | Many IPA fields are still orthography copied or near-copied (`air/air`, `bulan/bulan`, `kumain/kumain`, `salamat/salamat`, etc.). |
| `ta`, `te` | Register / part-of-speech consistency remains unresolved (`சாப்பிடு`, `குடி`, `நல்ல`; `తినడం`, `తాగడం`). |
| `bo` | Tibetan still needs a dialect decision and tone-aware rebuild; current forms remain broad/untagged (`ཆུ/tɕʰu`, `མེ/me`, `གཅིག/tɕik`). |
| `khb`, `shn` | Tai Lue and Shan still omit tone information throughout. |
| `lhu`, `mra`, `xkk`, `wbm` | Surface fields still contain IPA-like or phonetic notation in several cells. |
| `lus`, `myp`, `enq`, `mpt`, `ygr`, `sukh` | Same-form duplicate cells still lack source-confirming `wordEvidence`. |

UI / tooling follow-up:
- Per-cell `wordEvidence.note` rendering exists in `wordmap.html`.
- The search live-preview still calls `showLangInfo(topEnabled.code)`, and `showLangInfo()` still calls `updateHash()`. The requested silent preview mode is therefore not implemented yet.
- `WORD_LIST` is refactored with localized labels, but per-concept definitions for ambiguous concepts are not yet present.
- Validator still reports incomplete description i18n coverage for several UI languages; this remains backlog work.

## Education-Grade Roadmap

Date: 2026-05-05

This section is intentionally written as implementation instructions. Do not treat it as a loose brainstorming list.

Current honest score if "usable as a linguistics teaching resource" is 100: **about 80/100**.

Main reason:
- The app and schema are strong enough for exploratory learning.
- The remaining weakness is not the UI; it is data honesty: pronunciation type, concept scope, sourcing, regional coverage, and tone/stress completeness.

Do these tasks in order. Do not mass-edit word forms unless a task explicitly says to do so.

### New Task 76. Add pronunciation-type labeling before further IPA cleanup

Goal:
Make the app honest about what the second value in each word cell means. It is currently displayed like IPA, but the actual data mixes IPA, broad pronunciation, romanization, and orthography-like values.

Files to change:
- `wordmap_data.js`
- `wordmap.html`
- `validate_wordmap_data.js`
- `CONTRIBUTING.md`

Exact schema to add:

```js
meta: {
  pronunciationType: 'ipa' | 'broad' | 'romanization' | 'orthography' | 'mixed' | 'unknown'
}
```

Use this as the first-pass assignment rule:

| Value | Use when |
|---|---|
| `ipa` | The row is intended as IPA, including stress/tone where relevant. |
| `broad` | The row is a broad phonemic/pronunciation guide and may omit predictable allophones, stress, or fine phonetics. |
| `romanization` | The second value is primarily a romanization system, not IPA. |
| `orthography` | The second value mostly copies spelling because spelling itself is being used as the pronunciation guide. |
| `mixed` | The row visibly mixes systems and needs later cleanup. |
| `unknown` | The row has not been reviewed. Use only as a temporary fallback. |

Rows I directly checked that should not be silently called strict IPA:

| Code | Current examples | First-pass `pronunciationType` |
|---|---|---|
| `id` | `air/air`, `bulan/bulan`, `makan/makan`, `hati/hati` | `broad` or `orthography`; choose one and document it. |
| `ms` | `air/air`, `bulan/bulan`, `pokok/pokok`, `baik/baik` | `broad` or `orthography`; same policy as `id`. |
| `tl` | `kumain/kumain`, `uminom/uminom`, `salamat/salamat` | `broad` or `orthography`; not strict IPA. |
| `km` | `preah ʔaːtɨt`, `mae`, `snaehaː`, `pteah` | `mixed` until rebuilt. |
| `bo` | `ཆུ/tɕʰu`, `མེ/me`, `གཅིག/tɕik` | `broad` unless a dialect/tone-aware rebuild is done. |
| `lo` | `ນ້ຳ/nam`, `ໄຟ/faj`, `ກິນ/kin`, `ດີ/diː` | `broad`; tones are omitted. |

UI change:
- In `renderLangInfo(code)`, show a small pronunciation label near the word table or meta block.
- Suggested English labels:
  - `ipa`: `Pronunciation: IPA`
  - `broad`: `Pronunciation: broad`
  - `romanization`: `Pronunciation: romanization`
  - `orthography`: `Pronunciation: spelling-based`
  - `mixed`: `Pronunciation: mixed / needs review`
  - `unknown`: `Pronunciation: not reviewed`
- Localize at least `en`, `ja`, `ko`, `zh`; fallback to English is acceptable for other UI languages.

Validator change:
- Warn if a language lacks `meta.pronunciationType`.
- Warn if `pronunciationType: 'ipa'` and the row contains obvious romanization-like values for many cells, but keep this heuristic conservative.
- Do not fail validation on existing rows during the first pass; warnings are enough.

Do not:
- Do not convert `id/ms/tl` values to IPA in this task.
- Do not add stress or tones in this task.
- Do not mark every row `ipa` just to silence warnings.

Done when:
- Every language has a `meta.pronunciationType` or validator emits a clear warning listing missing rows.
- The language modal visibly tells users what kind of pronunciation notation they are seeing.
- `CONTRIBUTING.md` explains the six allowed values.

### New Task 77. Add concept definitions to `WORD_LIST`

Goal:
Remove ambiguity around what each concept means. This prevents later reviewers from "fixing" valid cells to a different sense.

Files to change:
- `wordmap_data.js`
- `wordmap.html`
- `CONTRIBUTING.md`

Exact shape to add to each `WORD_LIST` item:

```js
{
  id: 'heart',
  label: { ... },
  definition: {
    en: '...',
    ja: '...',
    ko: '...',
    zh: '...'
  }
}
```

Add definitions for these concepts first:

| Concept | Definition to encode |
|---|---|
| `heart` | Prefer the common everyday word for the heart as emotional center. If a language clearly separates anatomical heart and mind/soul, note the chosen sense with `wordEvidence.note`. |
| `love` | Prefer the common noun/verb root for love or affection, not a greeting, unless the language conventionally uses the same form. |
| `hello` | Prefer a neutral everyday greeting. Blessings such as "peace" are acceptable only where they are the normal greeting. |
| `thanks` | Prefer a spoken thank-you formula for modern languages. For historical languages, do not invent a conversational formula; use `—` or a clearly noted liturgical/gratitude noun. |
| `good` | Prefer the basic adjective meaning "good". Avoid replacing it with "well" or a greeting response unless documented. |
| `eat` | Prefer the dictionary/citation form convention used by that language. If the language lacks an infinitive, note the convention. |
| `drink` | Same policy as `eat`. |

UI change:
- Show the current word's definition in a tooltip or small help text near the word selector.
- Do not make the UI visually heavy; a compact `?` or title tooltip is enough.

Validator change:
- Warn if any `WORD_LIST` item lacks `definition.en`.
- Warn if the priority concepts above lack `ja`, `ko`, or `zh`.

Do not:
- Do not rewrite all word cells while adding definitions.
- Do not use definitions to force every language into English grammar categories. Use notes for language-specific citation conventions.

Done when:
- The seven priority concepts have definitions in `en`, `ja`, `ko`, `zh`.
- The UI exposes definitions to users.
- `CONTRIBUTING.md` tells future editors to check concept definitions before changing a word.

### New Task 78. Fix Asian tone/IPA rows one language at a time

Goal:
Bring the most problematic Asian rows to a teaching-safe state. Teaching-safe means either tones/IPA are consistently represented or the row is clearly labeled as broad/toneless.

Files to change:
- `wordmap_data.js`
- `wordmap-modern-audit-feedback.md`
- optionally `CONTRIBUTING.md` if a new policy is created

Do these rows first, in this order:

| Priority | Code | Current issue I checked | Expected action |
|---:|---|---|---|
| 1 | `lo` | `ນ້ຳ/nam`, `ໄຟ/faj`, `ກິນ/kin`, `ດີ/diː` omit tones. | Either rebuild all 20 IPA cells with tones from a source, or mark `pronunciationType: 'broad'` and add a note that tones are omitted. |
| 2 | `my` | Mixed notation: `ရေ/je`, `မီး/mi`, `နေ/ne` vs `ခွေး/kʰwé`, `ကောင်း/káuɴ`. | Make tone/phonation notation consistent across all 20 cells, or mark row as broad with a clear note. |
| 3 | `km` | `preah ʔaːtɨt`, `mae`, `snaehaː`, `pteah` mix romanization and IPA. | Rebuild pronunciation column consistently, or mark `mixed` and add source notes. |
| 4 | `bo` | `ཟླ་བ/tawa`, `གཅིག/tɕik`, `ཐུགས་རྗེ་ཆེ/tʰuːtɕi tɕʰe` lack dialect/tone policy. | Choose dialect, likely Lhasa/standard spoken Tibetan if available, or label as broad transliteration-like pronunciation. |
| 5 | `khb` | Tai Lue values such as `ᦓᧄᧉ/nam`, `ᦂᦲᧃ/kin`, `ᦡᦲ/diː` omit tones. | Restore tones or label as broad/toneless. |
| 6 | `shn` | Shan values such as `ၼမ်ႉ/nam`, `ၾႆး/faj`, `မႄႈ/me`, `လီ/li` omit tones. | Restore tones or label as broad/toneless. |
| 7 | `lhu` | Surface field has phonetic tone notation: `ɨ̂`, `caˆ`, `dawˇ`, `yâˇ`. | Separate real orthographic/romanized surface from pronunciation. |
| 8 | `mra`, `xkk`, `wbm` | Surface slots contain IPA-like forms such as `ʔus`, `mɔɔʔ`, `cangaiʔ`, `yaʔ`. | Move phonetic forms to pronunciation if needed; put orthography/accepted romanization in surface. |

For each language:
- Inspect all 20 cells.
- Add or update `meta.references`.
- Add `wordEvidence` only for cells that are non-obvious, uncertain, broad, reconstructed, or dialect-specific.
- Record what was changed in `wordmap-modern-audit-feedback.md`.

Do not:
- Do not infer tones from Unicode tone marks without a source.
- Do not fix only the examples above and leave the rest of the row inconsistent.
- Do not mix romanization and IPA in the same row unless `pronunciationType: 'mixed'` is intentional and noted.

Done when:
- Each handled language has a consistent `pronunciationType`.
- The row no longer has unlabelled tone omission or unlabelled mixed notation.
- Validator passes.

### New Task 79. Add regional-variant coverage flags

Goal:
Make copied or near-copied regional rows honest. A learner should know whether a row is a fully reviewed variety, an accent-only row, or mostly inherited from a base language.

Files to change:
- `wordmap_data.js`
- `wordmap.html`
- `validate_wordmap_data.js`
- `CONTRIBUTING.md`

Exact schema to add:

```js
meta: {
  coverage: 'full' | 'partial' | 'accent-only' | 'base-copy-with-notes',
  baseLang: 'zh' // optional; use only when coverage depends on another row
}
```

Rows to inspect first:

| Row | Action |
|---|---|
| `zh_db` | Compare all 20 cells against `zh`. If identical or nearly identical, set `coverage: 'base-copy-with-notes'`, `baseLang: 'zh'`, and explain that Dongbei-specific coverage is incomplete. |
| Spanish regional rows | Compare against `es_eu`. If mostly identical, set `coverage: 'partial'` or `accent-only` depending on what is actually different. |
| `ko_kp` | Compare against `ko`. If 19/20 identical, set `coverage: 'base-copy-with-notes'` or `partial`; do not imply full North Korean lexical/pronunciation coverage. |

UI change:
- In the language modal, show a compact coverage badge:
  - `full`: no warning needed or `Coverage: full`
  - `partial`: `Coverage: partial`
  - `accent-only`: `Coverage: accent/pronunciation only`
  - `base-copy-with-notes`: `Coverage: mostly inherited from <base>`

Validator change:
- Warn when two modern rows share 18+ of 20 identical word cells and neither row has `coverage` / `baseLang`.

Do not:
- Do not delete regional rows just because they are duplicated.
- Do not invent regional forms to make rows look different.

Done when:
- The three row groups above have been compared and labeled.
- The modal displays coverage information.
- Validator warns about future unlabeled near-duplicates.

### New Task 80. Add source references for high-traffic languages

Goal:
Use the existing bibliography/`wordEvidence` UI for major modern languages too. Source transparency should not be limited to rare or historical rows.

Files to change:
- `wordmap_data.js`
- optionally `CONTRIBUTING.md`

Current measured baseline:
- Validator currently reports `wordEvidence overlay: 23 languages, 172 cells annotated`.
- This is far from full coverage for 579 languages.

First-pass target:
- Add `meta.references` for the high-traffic rows below.
- Do not add noisy per-cell notes to every obvious word.
- Add per-cell `wordEvidence` only for dialect-specific, controversial, broad, reconstructed, or non-literal cells.

Priority rows:
- European/global: `en`, `fr`, `de`, `it`, `es_eu`, `es_mx`, `pt_eu`, `pt_br`, `ru`, `uk`.
- Asian/Middle Eastern: `zh`, `yue`, `ja`, `ko`, `th`, `vi`, `id`, `ms`, `tl`, `hi`, `bn`, `ur`, `fa`, `ar`, `he`, `tr`.

Minimum reference format:

```js
meta: {
  references: [
    'Dictionary or pronunciation source name',
    'Grammar/source name if used'
  ]
}
```

Do not:
- Do not cite vague sources such as "internet" or "common knowledge".
- Do not add a source unless it plausibly supports the row.
- Do not change word forms merely to match one source unless you are intentionally auditing that row.

Done when:
- Each priority row has at least one useful language-level reference.
- Any controversial major-language cells have `wordEvidence.note`.
- Validator still passes.

### New Task 81. Add stress policy before adding European stress marks

Goal:
Avoid misleading "IPA-looking but stressless" European rows.

Files to change:
- Depends on Task 76. Do not start this before `pronunciationType` exists.

Inspect first:
- `it`, `es_eu`, `es_mx`, `pt_eu`, `pt_br`, `pl`, `ru`, `uk`, `el`, `de`, `fr`.

Exact rule:
- If a row is marked `pronunciationType: 'ipa'`, lexical stress should be included where standard IPA dictionary transcription normally includes it.
- If a row intentionally omits stress, mark it `pronunciationType: 'broad'` and document that stress is omitted.

Do not:
- Do not add stress marks mechanically from spelling.
- Do not add stress before deciding whether the row is `ipa` or `broad`.
- Do not mark stressless rows as strict `ipa` just because the symbols are IPA symbols.

Done when:
- European priority rows are either stress-marked and sourced, or explicitly labeled as broad.
- Validator can warn about `pronunciationType: 'ipa'` rows that likely need stress review.

### New Task 82. Normalize existing `WORD_LIST.definition` implementation

Goal:
Fix the current partial implementation of concept definitions. The current working tree already has `definition` fields in `WORD_LIST`, but they are plain English strings. That does not match Task 77's required multilingual object shape and will not support localized UI.

Current issue I checked:

```js
{ id: 'water', definition: 'Drinkable water (H₂O); ...', label: { ... } }
```

Required shape:

```js
{
  id: 'water',
  label: { ... },
  definition: {
    en: 'Drinkable water (H2O); the basic substance, not a body of water.',
    ja: '飲用・生活用の水。川・湖・海などの水域そのものではない。',
    ko: '마시거나 생활에 쓰는 물. 강·호수·바다 같은 수역 자체가 아니다.',
    zh: '可饮用或日常使用的水；不是河流、湖泊、海洋等水域本身。'
  }
}
```

Files to change:
- `wordmap_data.js`
- `wordmap.html`
- `validate_wordmap_data.js`
- `CONTRIBUTING.md`

Exact action:
- Convert every current `definition: '...'` string into `definition: { en, ja, ko, zh }`.
- Keep the existing English text as `definition.en`, but simplify wording if it is too long for UI.
- Add `definition.ja`, `definition.ko`, `definition.zh` for all 20 concepts.
- Update UI code to read `word.definition[uiLang] || word.definition.en`.
- Update validator to warn if `definition` is a string instead of an object.

Important content corrections before converting:

| Concept | Current problem | Required correction |
|---|---|---|
| `love` | Current definition says noun only, but many current rows use verb-like forms (`zh 愛`, `yue 愛`, `vi yêu`, `th รัก`). | Define it as "basic word/root for love or affection; noun or verb citation form depending on language." |
| `heart` | Current definition mixes anatomical and emotional senses but does not give a clear default. | Define default as "basic emotional/cognitive heart/mind term when that is the common basic word; use anatomical heart only where that is the normal basic equivalent or note the choice." |
| `eat` / `drink` | Current definition hardcodes "perfective 3ms for Semitic"; that is too broad because Hebrew currently uses infinitives (`לאכול`, `לשתות`) while Arabic uses 3ms perfective. | Say "use the normal dictionary/citation convention; document exceptions with `wordEvidence.note`." |
| `cat` | Current definition talks about sex-neutral terms, but some languages naturally use feminine or masculine citation forms. | Say "generic domestic cat; use the normal generic/citation form for that language, and note gender if it matters." |

Do not:
- Do not leave a mixed state where some concepts use string definitions and some use object definitions.
- Do not add only English definitions.
- Do not make the definitions long paragraphs; they should be short enough for a tooltip.

Done when:
- All 20 `WORD_LIST` entries have `definition.en`, `definition.ja`, `definition.ko`, `definition.zh`.
- No `definition` field is a plain string.
- The UI shows the localized definition with English fallback.
- Validator warns on future string-only definitions.

### New Task 83. Add a concept/data consistency audit after definitions exist

Goal:
After Task 82, check whether the actual cells follow the newly defined concept scope. This must be done after definitions are normalized, otherwise reviewers will keep arguing from different assumptions.

Files to change:
- `wordmap_data.js`
- `wordmap-modern-audit-feedback.md`
- optionally `validate_wordmap_data.js` for future warnings

Cells I checked that need policy-aware review:

| Code | Cell | Current value | Why to review |
|---|---|---|---|
| `vi` | `heart` | `trái tim / tɕaj˧˥ tim˥` | This is anatomical "heart"; if the concept default is emotional/cognitive heart, Vietnamese may need `lòng` or a note explaining anatomical choice. |
| `th` | `heart` | `ใจ / tɕaj˧` | Emotional/cognitive heart, not anatomical `หัวใจ`; likely valid if definition allows emotional basic term. |
| `id` / `ms` | `heart` | `hati / hati` | Literally liver but common emotional/mind term; should be explicitly allowed by definition or `wordEvidence.note`. |
| `zh` / `yue` / `ja` / `ko` | `love` | `爱/愛/愛/사랑` | Some are noun-like, some verb/root-like. Definition must not demand noun-only. |
| `ar` | `eat` / `drink` | `أكل/ʔakala`, `شرب/ʃariba` | Already noted as 3ms perfective; keep note. |
| `he` | `eat` / `drink` | `לאכול/leeχol`, `לשתות/liʃtot` | Uses infinitive; do not apply Arabic/Semitic 3ms rule blindly. |
| `ru` / `uk` | `good` | `хороший`, `добрий` | Adjective forms are now aligned with the intended concept; keep this policy visible. |

Exact action:
- For each priority concept (`heart`, `love`, `eat`, `drink`, `good`, `hello`, `thanks`, `cat`), sample at least the major languages listed in Task 80.
- Do not automatically replace values. First decide whether the current value is valid under the definition.
- If a value is valid but non-obvious, add `wordEvidence.note`.
- If a value conflicts with the definition, change the cell and record the reason in `wordmap-modern-audit-feedback.md`.

Validator suggestion:
- Add an optional concept-audit allowlist for known non-literal equivalents such as `id/ms hati`, `th ใจ`, and `zh/ja/ko 心/心/마음`.
- The validator should not fail these; it should help future reviewers know they were intentionally chosen.

Do not:
- Do not force all languages to anatomical heart.
- Do not force all languages to noun-only love.
- Do not apply Arabic's citation-form convention to Hebrew or other Semitic languages automatically.

Done when:
- The priority concepts have a short audit note in `wordmap-modern-audit-feedback.md`.
- Non-literal but intentional cells have `wordEvidence.note`.
- No concept definition directly contradicts common current values without a note.

### New Task 84. Add a global surface-field orthography policy

Goal:
Prevent over-correction of valid orthographies that use IPA-like or Latin-extended characters. Some surface forms contain symbols such as `ɔ`, `ɛ`, `ɣ`, `ŋ`, or click letters because those are part of the practical orthography, not because the surface field is wrong.

Why this matters:
The earlier Asian-minority audit correctly flagged rows like `mra`, `xkk`, `wbm`, and `lhu`, where surface forms appear phonetic or IPA-like. However, a global regex for IPA characters would also falsely flag many legitimate African and other orthographies.

Examples I checked:

| Code | Current surface examples | Likely status |
|---|---|---|
| `ee` Ewe | `ɣe`, `ɖu`, `lɔ̃lɔ̃`, `ŋku` | These characters can be normal orthography; do not strip automatically. |
| `ak` Akan | `ɔsrane`, `ɛna`, `ɔdɔ` | Latin-extended orthography; likely valid surface. |
| `naq` Nama | `ǁgam-i`, `ǀae-b`, `ǂû` | Click symbols can be orthographic/practical transcription; needs source, not blind cleanup. |
| `lkt` Lakota | `čhaŋté`, `šúŋka`, `waŋží` | Practical orthography uses diacritics; valid surface. |
| `mra` Mlabri | `ʔus`, `mɛʔ`, `ʔiʔ` | Looks phonetic in surface slot; still needs cleanup or romanization policy. |
| `xkk` Khmu | `ɔm`, `ʔus`, `mɔɔʔ` | Looks phonetic in surface slot; still needs cleanup or romanization policy. |
| `lhu` Lahu | `ɨ̂`, `caˆ`, `dawˇ` | Surface field mixes phonetic/tone notation; needs cleanup. |

Files to change:
- `wordmap_data.js`
- `validate_wordmap_data.js`
- `CONTRIBUTING.md`

Exact schema to add if needed:

```js
meta: {
  surfaceType: 'native-script' | 'standard-orthography' | 'romanization' | 'phonetic' | 'mixed' | 'unknown'
}
```

First-pass rule:
- Use `standard-orthography` for Latin-based orthographies that legitimately include extended letters.
- Use `romanization` where the surface is a conventional romanization of a non-Latin script.
- Use `phonetic` only if the surface field is intentionally phonetic because no practical orthography is available.
- Use `mixed` where some cells are orthography and others are phonetic.

Validator change:
- Do not warn merely because a surface form contains IPA-like characters.
- Warn only when `surfaceType` is missing and a row has many surface forms with symbols such as `ʔ`, `ː`, Chao tone letters, combining tone marks, or obvious IPA-only symbols.
- Add an allowlist or documentation examples for Ewe, Akan, Lakota, Nama, and similar practical orthographies.

Do not:
- Do not replace all Latin-extended orthographies with ASCII.
- Do not strip tone marks or diacritics from valid surface orthography.
- Do not assume `ɔ` or `ɛ` means the surface field is IPA.

Done when:
- Asian rows already flagged in Task 78 remain targeted.
- Valid extended Latin orthographies are protected from false-positive cleanup.
- `CONTRIBUTING.md` explains the difference between surface orthography and pronunciation notation.

### New Task 85. Stop stress-mark edits until Task 76 is merged

Goal:
Prevent the current European stress work from outrunning the pronunciation-policy schema.

Current issue I checked:
The working tree already contains uncommitted stress edits in `wordmap_data.js`, for example:
- Italian: `acqua/ˈakkwa`, `mangiare/manˈdʒaːre`
- European Spanish: `agua/ˈaɣwa`, `comer/koˈmeɾ`
- Polish: `woda/ˈvɔda`, `dziękuję/d͡ʑɛŋˈkujɛ`

These may be linguistically useful, but Task 81 explicitly says stress should come after `pronunciationType` exists. Otherwise the data will continue mixing strict IPA and broad transcription without a visible policy.

Files to change:
- `wordmap_data.js`
- `wordmap-modern-audit-feedback.md`

Exact action:
- Pause further stress additions until Task 76 is implemented.
- Do not revert already-added stress marks solely because of this note.
- Review the already-added stress edits after `pronunciationType` exists.
- For any row with stress marks and otherwise IPA-like transcription, set `pronunciationType: 'ipa'` only if the whole row meets the IPA policy.
- If only some cells were stress-updated, either finish the row with sources or mark it `broad` / `mixed`.

Do not:
- Do not continue adding stress row-by-row without source references.
- Do not mark a row `ipa` merely because stress marks were added to some cells.
- Do not leave a row half strict-IPA and half broad without `pronunciationType: 'mixed'`.

Done when:
- `pronunciationType` exists.
- Existing stress edits have been reviewed under that schema.
- `wordmap-modern-audit-feedback.md` states whether the stress edits were accepted, adjusted, or deferred.

### New Task 86. Add validator checks for partial schema implementations

Goal:
Catch the exact kind of partial implementation now visible in the working tree: fields are added, but not in the final agreed shape.

Files to change:
- `validate_wordmap_data.js`

Checks to add:
- `WORD_LIST[*].definition` must be an object, not a string.
- `WORD_LIST[*].definition.en` must exist for every concept.
- Priority UI languages `ja`, `ko`, `zh` must exist for every concept definition.
- `meta.pronunciationType`, once introduced, must be one of the allowed enum values.
- `meta.coverage`, once introduced, must be one of the allowed enum values.
- `meta.baseLang`, if present, must point to an existing `LANG_DATA` code.
- If `coverage: 'base-copy-with-notes'`, `baseLang` must be present.
- If `pronunciationType: 'ipa'`, optionally warn when no source/reference exists for a high-traffic language.

Do not:
- Do not make all of these hard errors immediately if the current data would fail massively.
- Start as warnings where migration is incomplete.
- Convert warnings to errors only after the migration is complete.

Done when:
- Validator reports partial schema implementations clearly.
- Future Claude sessions cannot accidentally add string-only definitions or invalid enum values without a warning.

### New Task 87. Put new meta schema fields in the correct file

Goal:
Avoid adding `pronunciationType`, `surfaceType`, `coverage`, `baseLang`, or new source metadata to the wrong data layer.

Current issue I checked:
- `wordmap_data.js` defines `LANG_DATA` base rows and word cells.
- `wordmap_meta.js` lazy-loads metadata by assigning `LANG_DATA[code].meta = ...`.
- A script that loads only `wordmap_data.js` shows no `meta` fields at all, because the metadata lives in `wordmap_meta.js`.
- `validate_wordmap_data.js` explicitly loads both `wordmap_data.js` and `wordmap_meta.js`.

Implication:
Tasks 76, 79, 80, and 84 say "add `meta.*`". In this codebase, those fields should usually be added in `wordmap_meta.js`, not directly inside `wordmap_data.js`, unless there is a deliberate migration plan.

Files to change:
- `wordmap_meta.js`
- `wordmap.html`
- `validate_wordmap_data.js`
- `CONTRIBUTING.md`
- only touch `wordmap_data.js` when changing `WORD_LIST` or word cells

Exact action:
- Add `pronunciationType`, `surfaceType`, `coverage`, `baseLang`, `references`, and similar metadata fields inside each `LANG_DATA[code].meta` object in `wordmap_meta.js`.
- Keep word-cell changes in `wordmap_data.js`.
- Update `validate_wordmap_data.js` using the same combined-load approach it already uses for metadata checks.
- In `wordmap.html`, assume metadata may be unavailable until `loadMeta()` completes. Any UI depending on `meta.pronunciationType` or `meta.coverage` must render after meta is loaded or show a temporary loading/unknown state.

Do not:
- Do not duplicate the same meta object in both `wordmap_data.js` and `wordmap_meta.js`.
- Do not add `meta` to only a handful of `wordmap_data.js` rows while the rest of the project uses `wordmap_meta.js`.
- Do not make validator checks that read only `wordmap_data.js` and then conclude all meta is missing.

Done when:
- New meta schema fields are stored consistently in `wordmap_meta.js`.
- Validator checks them after loading both data and meta.
- The modal does not permanently show `unknown` just because metadata is lazy-loaded.

### New Task 88. Audit exact duplicate regional word rows

Goal:
Handle rows whose 20 word cells are exactly identical to another row. These rows are more serious than "mostly similar" regional variants because they look like independent coverage but currently contain no independent lexical/pronunciation data.

Exact duplicate rows I checked in current working tree:

| Duplicate group | Current problem |
|---|---|
| `zh`, `zh_db` | `zh_db` is 20/20 identical to Standard Mandarin `zh`. |
| `es_mx`, `es_co`, `es_pe` | Colombian and Peruvian Spanish are 20/20 identical to Mexican Spanish. |
| `fr_af`, `fr_be`, `fr_ch` | African, Belgian, and Swiss French rows are 20/20 identical. |
| `es_cl`, `es_cu` | Chilean and Cuban Spanish rows are 20/20 identical. |

Files to change:
- `wordmap_meta.js`
- optionally `wordmap_data.js` only if real sourced differences are added
- `validate_wordmap_data.js`
- `wordmap-modern-audit-feedback.md`

Exact action:
- For each duplicate group, decide one of two paths:
  - Path A: keep word cells identical, but mark metadata honestly with `coverage: 'base-copy-with-notes'` and `baseLang`.
  - Path B: replace cells with sourced regional forms/pronunciations, and mark `coverage: 'full'` or `partial` as appropriate.
- For `zh_db`, use Path A unless actual Dongbei Mandarin word/pronunciation differences are sourced.
- For `es_co`, `es_pe`, `es_cl`, `es_cu`, do not invent differences. If only standard Spanish vocabulary is shown, use `coverage: 'base-copy-with-notes'` or `accent-only`.
- For `fr_af`, `fr_be`, `fr_ch`, determine whether they are intended as regional French, accent rows, or placeholder coverage; label accordingly.

Suggested metadata examples:

```js
LANG_DATA['zh_db'].meta.coverage = 'base-copy-with-notes';
LANG_DATA['zh_db'].meta.baseLang = 'zh';
LANG_DATA['zh_db'].meta.coverageNote = 'Word cells currently inherit Standard Mandarin; Dongbei-specific lexical/pronunciation coverage is incomplete.';
```

```js
LANG_DATA['es_co'].meta.coverage = 'base-copy-with-notes';
LANG_DATA['es_co'].meta.baseLang = 'es_mx';
LANG_DATA['es_co'].meta.coverageNote = 'Current cells use a shared Latin American Spanish baseline, not a fully audited Colombian Spanish row.';
```

UI change:
- Display `coverageNote` in the language modal when present.
- Do not hide the row; just make the coverage honest.

Validator change:
- Detect exact 20/20 duplicate word fingerprints.
- Warn unless every non-primary row in the duplicate group has `coverage` and `baseLang`.
- Keep the warning separate from duplicate coordinates; this is about word-row duplication, not map location.

Do not:
- Do not delete duplicate rows.
- Do not create fake lexical differences.
- Do not mark exact duplicate rows as `coverage: 'full'` without real independent review.

Done when:
- The four duplicate groups above are either labeled or independently rebuilt.
- Validator warns on future exact duplicate word rows without coverage metadata.
- `wordmap-modern-audit-feedback.md` records which path was chosen per group.

### New Task 89. Add modal rendering for new meta trust fields

Goal:
Make the new schema fields visible to users. Adding `pronunciationType`, `surfaceType`, `coverage`, and `coverageNote` only to data files is not enough for a teaching resource.

Files to change:
- `wordmap.html`
- `wordmap_meta.js` for labels/notes if needed
- optionally `meta_i18n_ext.js` if translation helper is extended

Fields to render:
- `meta.pronunciationType`
- `meta.surfaceType`
- `meta.coverage`
- `meta.baseLang`
- `meta.coverageNote`
- `meta.references`

Current UI behavior I checked:
- `renderLangInfo(code)` already renders metadata, word table, `wordEvidence` markers, and source footers.
- It already supports a bibliography footer by collecting `wordEvidence.source` and `meta.references`.
- It does not yet render the planned `pronunciationType`, `surfaceType`, `coverage`, or `coverageNote` fields.

Exact UI placement:
- Put trust badges near the existing data-status badge area, before the word table.
- Use compact text; do not add large cards.
- Suggested English labels:
  - `Pronunciation: IPA`
  - `Pronunciation: broad`
  - `Surface: native script`
  - `Surface: romanization`
  - `Coverage: partial`
  - `Coverage: mostly inherited from <base display name>`
- If `coverageNote` exists, show it as a small muted sentence under the coverage badge.

Localization:
- Add labels for at least `en`, `ja`, `ko`, `zh`.
- If a UI language lacks a translation, fall back to English.

Do not:
- Do not make these fields visible only in console/validator output.
- Do not show raw enum values like `base-copy-with-notes` without a readable label.
- Do not block modal rendering if meta is not loaded yet; show the existing loading state and re-render after `loadMeta()`.

Done when:
- Opening a language with `pronunciationType` or `coverage` visibly shows the trust information.
- `coverageNote` appears when present.
- No layout overlap occurs in the modal word table.

### New Task 90. Add row-fingerprint comparison tooling

Goal:
Give reviewers a repeatable way to find duplicate and near-duplicate rows instead of relying on ad hoc scripts.

Files to change:
- `validate_wordmap_data.js`
- optionally add a small npm/script entry if the project has package scripts

Checks to add:
- Exact duplicate fingerprint: all 20 `[surface, pronunciation]` pairs identical.
- Surface-only duplicate: all 20 surface values identical but pronunciation differs.
- High-overlap duplicate: 18+ of 20 cells identical.
- Parent/child high overlap: if `meta.parentCode` exists, compare child against parent and report overlap count.

Output format:

```text
Word-row duplicate groups:
  exact: zh, zh_db (20/20)
  exact: es_mx, es_co, es_pe (20/20)
  high-overlap: ko_kp vs ko (19/20; parentCode=ko)
```

Warning rule:
- Exact duplicates should warn unless all non-primary rows have `coverage` and `baseLang`.
- Parent/child high overlap should be info if `coverage` exists, warning otherwise.
- Do not fail validation at first; start as warnings/infos.

Do not:
- Do not compare only surfaces and ignore pronunciation.
- Do not treat historical progression clusters as regional duplicates.
- Do not make exact duplicate rows an error until current known groups are labeled.

Done when:
- Running `node validate_wordmap_data.js` reports exact and high-overlap word-row groups.
- Known duplicate groups can be suppressed by adding honest coverage metadata, not by allowlisting the warning text.

### New Task 91. Clarify `references` vs `sources` in metadata

Goal:
Avoid two parallel source systems drifting apart. The current code already uses `meta.sources` in some rows and `meta.references` in the modal footer logic. New tasks mention `references`, but existing richer-schema examples use `sources`.

Current issue I checked:
- `wordmap_meta.js` includes rows such as `ja` and `zh` with `sources: [{ type, title, url }]`.
- `renderLangInfo(code)` bibliography footer checks `m.references`, not `m.sources`.
- Therefore a row can have `meta.sources` but not show those sources in the modal bibliography footer.

Files to change:
- `wordmap.html`
- `wordmap_meta.js`
- `validate_wordmap_data.js`
- `CONTRIBUTING.md`

Exact action:
- Choose one canonical field:
  - Preferred: keep structured `meta.sources` as canonical and make the modal render it.
  - Alternative: keep `meta.references` as display-only strings and derive them from `sources`.
- Do not add a third source field.
- Update `renderLangInfo` bibliography footer to include both current `meta.references` and structured `meta.sources` during migration.
- Update `CONTRIBUTING.md` to say which field future editors should use.

Suggested migration-safe rendering:

```js
if (Array.isArray(m.references)) {
  for (const r of m.references) sourceSet.add(typeof r === 'string' ? r : (r.title || ''));
}
if (Array.isArray(m.sources)) {
  for (const s of m.sources) sourceSet.add(s.title || s.url || String(s));
}
```

Validator change:
- Warn if a row has both `sources` and `references` with conflicting content.
- Warn if a high-traffic row has neither `sources` nor `references`.

Do not:
- Do not drop existing `sources` objects.
- Do not convert structured source URLs into vague strings only.
- Do not add `references` to many rows while leaving existing `sources` invisible in the UI.

Done when:
- Existing `meta.sources` appear in the modal source footer.
- Documentation clearly names the canonical source field.
- Validator catches source-field drift.

### New Task 92. Expand UI-label coverage before adding new trust badges

Goal:
Prevent new UI labels from appearing only in English or falling back inconsistently. The project already supports many UI languages, but the internal UI-label dictionary is uneven.

Current issue I checked:
- `WORD_LIST.label` coverage is complete for the checked UI languages.
- `LANG_NAMES` coverage is complete for current `LANG_DATA` codes.
- `WM_UI_LABELS` is uneven: some UI languages have only 2-3 keys while others have 10+.
- New fields from Tasks 76, 79, 84, 89, and 91 will need labels for pronunciation, surface type, coverage, base language, and sources.

Files to change:
- `wordmap_data.js` or wherever `WM_UI_LABELS` is defined
- `wordmap.html`
- optionally `meta_i18n_ext.js` if the project wants meta-label translations there
- `validate_wordmap_data.js`

Exact action:
- Define a required UI-label key set for new trust metadata:
  - `pronunciation`
  - `pronunciation_ipa`
  - `pronunciation_broad`
  - `pronunciation_romanization`
  - `pronunciation_orthography`
  - `pronunciation_mixed`
  - `pronunciation_unknown`
  - `surface`
  - `surface_native_script`
  - `surface_standard_orthography`
  - `surface_romanization`
  - `surface_phonetic`
  - `coverage`
  - `coverage_full`
  - `coverage_partial`
  - `coverage_accent_only`
  - `coverage_base_copy`
  - `sources`
- Add translations at least for `en`, `ja`, `ko`, `zh`.
- For other UI languages, English fallback is acceptable, but the fallback function must be explicit and tested.

Validator change:
- Warn if required keys are missing from `WM_UI_LABELS.en`.
- Warn if `ja`, `ko`, or `zh` lacks any required trust-label key.
- Info-only for other UI languages until translations are added.

Do not:
- Do not hardcode English trust labels directly inside `renderLangInfo`.
- Do not add raw enum labels to the modal.
- Do not block the whole task on translating all 21 UI languages.

Done when:
- New trust badges can render in `en`, `ja`, `ko`, `zh`.
- Missing optional translations fall back to English cleanly.
- Validator reports missing required UI keys.

### New Task 93. Fix modal accessibility before adding more modal content

Goal:
Make the language-info modal structurally correct before adding more badges, notes, and glossary text.

Current issue I checked:
- The modal container has `aria-labelledby="lang-info-heading"`.
- `renderLangInfo(code)` currently creates `<h2>...</h2>` without `id="lang-info-heading"`.
- That means the ARIA label reference is broken.
- The close button exists and Escape closes the panel, but the dialog is not a fully robust accessible dialog yet.

Files to change:
- `wordmap.html`

Exact action:
- Change the modal heading render from:

```js
let html = `<h2>${escapeHtml(displayName)}</h2>`;
```

to:

```js
let html = `<h2 id="lang-info-heading">${escapeHtml(displayName)}</h2>`;
```

- Ensure the close button has a localized accessible label if UI language changes.
- When opening the modal, consider moving focus to the close button or the dialog container.
- When closing the modal, return focus to the selected map label or the language search input if the modal was opened from search.
- Keep `aria-modal="false"` if the map remains interactable; otherwise implement proper modal focus trapping before setting it to true.

Do not:
- Do not set `aria-modal="true"` without focus trapping.
- Do not add more visually hidden text before fixing the broken heading reference.
- Do not rely only on mouse hover tooltips for important notes.

Done when:
- `aria-labelledby` points to an actual element.
- Keyboard users can close the panel and do not lose focus unexpectedly.
- New trust badges and concept definitions are available through text, not only color or hover.

### New Task 94. Add a romanization-vs-IPA audit for non-Latin script rows

Goal:
Separate a common but distinct issue from Task 76: many non-Latin-script rows have ASCII romanization in the pronunciation slot. This may be valid romanization, but it is not IPA and should be labeled.

Current issue I checked:
Rows with non-Latin surface forms and ASCII-only pronunciation examples include:

| Code | Current examples | Likely first-pass label |
|---|---|---|
| `ja` | `火/hi`, `木/ki`, `猫/neko`, `手/te` | `pronunciationType: 'romanization'` or `broad`, not strict IPA. |
| `ko` | `물/mul`, `불/pul`, `달/tal`, `나무/namu` | `romanization` or `broad`; current row also has IPA-like cells elsewhere. |
| `ar` | `قمر/qamar`, `قلب/qalb`, `بيت/bajt` | Mixed: some are IPA-like, some romanization-like. |
| `he` | `מים/majim`, `לב/lev`, `בית/bajit` | Romanization-like, not strict IPA. |
| `mn` | `ус/os`, `нар/nar`, `идэх/idex` | Romanization/transcription-like. |
| `ain` | `ワッカ/wakka`, `アペ/ape` | Katakana surface plus romanization pronunciation. |
| `bo` | `མེ/me`, `ཟླ་བ/tawa`, `ལག་པ/lakpa` | Broad romanized pronunciation, not dialect-complete IPA. |
| `shn` | `ၼမ်ႉ/nam`, `ၾႆး/faj`, `ၵိၼ်/kin` | Romanization/broad and tone-omitting. |

Files to change:
- `wordmap_meta.js`
- `wordmap_data.js` only if cells are intentionally rebuilt
- `validate_wordmap_data.js`
- `wordmap-modern-audit-feedback.md`

Exact action:
- Do not automatically convert these rows to IPA.
- Assign `pronunciationType` honestly after Task 76:
  - `romanization` if the second field is a transliteration/romanization.
  - `broad` if it is a broad pronunciation guide.
  - `mixed` if some cells are IPA and others are romanization.
- For high-traffic rows (`ja`, `ko`, `ar`, `he`, `bo`), add `coverageNote` or `pronunciationNote` explaining the convention.
- Later IPA rebuilds should be separate row-specific tasks with sources.

Validator change:
- Add a heuristic info/warning for rows where many surface cells are non-Latin and many pronunciation cells are plain ASCII.
- The warning should say "check pronunciationType", not "wrong IPA".

Do not:
- Do not treat ASCII pronunciation as automatically wrong.
- Do not replace established romanization with unsourced IPA.
- Do not mix romanization and IPA invisibly in one row.

Done when:
- Non-Latin-script rows with romanization-like pronunciation are labeled.
- Validator helps find unlabeled romanization rows.
- High-traffic rows no longer imply strict IPA when they are romanized/broad.

### New Task 95. Make concept-definition UI not depend on hover only

Goal:
Concept definitions are crucial educational content. They should not be available only through desktop hover, because mobile users and keyboard users may not see them.

Files to change:
- `wordmap.html`
- `wordmap_data.js` after Task 82

Exact action:
- Add a compact definition display near the word selector for the currently selected concept.
- Suggested behavior:
  - Desktop: show a small `?` button or info icon next to the word selector; clicking toggles a short definition line.
  - Mobile: show the definition line collapsed by default; tapping the icon expands it.
  - The selected concept definition should also be available in the language modal table header or as an accessible title/description.
- Use `WORD_LIST.find(w => w.id === currentWord).definition[uiLang] || definition.en`.
- Update the definition when `currentWord` or `uiLang` changes.

Do not:
- Do not rely only on `<option title="...">`; option titles are poorly supported and inaccessible on many browsers.
- Do not put long paragraphs in the top control area.
- Do not make every row in the word table repeat the full definition.

Done when:
- A keyboard/mobile user can read the selected concept definition.
- The definition changes correctly when switching word or UI language.
- The map controls remain compact and do not overlap.

### New Task 96. Add source-footer rendering for structured links safely

Goal:
When `meta.sources` starts appearing in the modal footer, URLs should be useful but safe. Current footer text-joins sources; future structured source rendering should not create unsafe or cluttered HTML.

Files to change:
- `wordmap.html`
- `validate_wordmap_data.js`

Exact action:
- When rendering `meta.sources`, support objects like:

```js
{ type: 'reference', title: 'Ethnologue 27: Mandarin Chinese', url: 'https://www.ethnologue.com/language/cmn/' }
```

- Render the title as text or a link if `url` is present.
- If rendered as a link, use:

```html
target="_blank" rel="noopener noreferrer"
```

- Escape all titles and URLs.
- Reject or ignore non-http(s) URLs in validator.
- Deduplicate by title + URL, not title alone.

Do not:
- Do not inject raw `source.title` into HTML.
- Do not render `javascript:` or other unsafe URLs.
- Do not make the footer huge; cap visible sources or use compact separators.

Done when:
- Existing structured `meta.sources` show in the modal.
- Links are safe and escaped.
- Validator warns on malformed source objects or unsafe URL schemes.

### New Task 97. Split word evidence from pronunciation evidence

Goal:
Avoid pretending that one `wordEvidence` object proves both the written form and the pronunciation. A source may support the word form but not the IPA/transcription, or vice versa.

Current issue I checked:
- Validator reports `wordEvidence overlay: 23 languages, 172 cells annotated`.
- 148 of those evidence entries have `source`.
- 0 evidence entries have a URL field.
- Some entries have `evidence: 'direct'` but no source, for example Arabic notes for `eat`, `drink`, and `one`.
- Current schema is:

```js
wordEvidence: {
  eat: { evidence: 'direct', source?: '...', note?: '...' }
}
```

Problem:
This is too coarse. It does not say whether the evidence supports:
- surface form
- pronunciation / IPA
- concept choice
- dialect/register choice
- historical reconstruction

Files to change:
- `wordmap_data.js`
- `wordmap.html`
- `validate_wordmap_data.js`
- `CONTRIBUTING.md`

Migration-safe schema to support:

```js
wordEvidence: {
  eat: {
    evidence: 'direct',
    source: 'short display source',
    note: 'short human note',
    formEvidence: 'direct' | 'proxy' | 'reconstructed' | 'inferred' | 'disputed' | 'pedagogical',
    pronunciationEvidence: 'direct' | 'proxy' | 'reconstructed' | 'inferred' | 'disputed' | 'pedagogical',
    conceptEvidence: 'direct' | 'proxy' | 'reconstructed' | 'inferred' | 'disputed' | 'pedagogical',
    url: 'https://...',
    accessed: 'YYYY-MM-DD'
  }
}
```

First-pass rule:
- Keep existing `evidence` as a backward-compatible summary.
- Add `formEvidence` / `pronunciationEvidence` only where the distinction matters.
- Add `conceptEvidence` for non-literal concept choices such as `id/ms hati`, `th ใจ`, `haw aloha`, or Arabic 3ms perfective citation forms.
- Add `url` only when a stable useful URL exists.

UI change:
- If only summary `evidence` exists, render as today.
- If detailed fields exist, tooltip/click detail should say what is supported:
  - `form: direct`
  - `pronunciation: broad/proxy/inferred`
  - `concept: noted`

Validator change:
- Validate enum values for `formEvidence`, `pronunciationEvidence`, and `conceptEvidence`.
- Warn if `evidence: 'direct'` has neither `source` nor `note`.
- Warn if `url` exists but is not `http` or `https`.

Do not:
- Do not require detailed evidence for all 11,580 cells.
- Do not delete existing `wordEvidence.evidence`.
- Do not mark pronunciation as direct merely because the word form is sourced.

Done when:
- Existing evidence remains compatible.
- New detailed evidence can be added without breaking the UI.
- Validator catches unsupported direct-evidence claims.

### New Task 98. Expand and display speaker metadata for priority languages

Goal:
Make speaker counts teachable. A raw number like `~320M` or `~1.5B` is not meaningful unless users know whether it is L1, total, aggregate, regional population, or liturgical/heritage use.

Current issue I checked:
- Optional schema adoption is still limited:
  - `speakerBasis`: 26 / 579 languages
  - `speakerSource`: 20 / 579 languages
  - `speakerYear`: 20 / 579 languages
  - `iso6393`: 20 / 579 languages
  - `glottocode`: 20 / 579 languages
  - `sources`: 20 / 579 languages
- Several high-traffic languages still lack this richer metadata:
  - `it`, `uk`, `ko`, `th`, `vi`, `ms`, `tl`, `he`

Files to change:
- `wordmap_meta.js`
- `wordmap.html`
- `validate_wordmap_data.js`
- `CONTRIBUTING.md`

Exact action:
- For the priority languages in Task 80, add where available:

```js
speakerBasis: 'L1' | 'total' | 'regional-population' | 'aggregate' | 'liturgical' | 'extinct' | 'uncertain',
speakerSource: 'Ethnologue 27',
speakerYear: 2024,
iso6393: '...',
glottocode: '....0000',
sources: [{ type: 'reference', title: '...', url: 'https://...' }]
```

- In `renderLangInfo`, display speaker basis/source/year compactly near the speaker count:
  - `Speakers: ~320M (total, Ethnologue 27, 2024)`
  - `Speakers: extinct (liturgical)`
- Keep display compact; full sources belong in the source footer.

Validator change:
- Warn if a priority high-traffic language lacks `speakerBasis`.
- Warn if `speakerBasis` exists but `speakerSource` or `speakerYear` is missing.
- Warn if a 100M+ language lacks `speakerBasis` as it already partially does; extend this to the Task 80 priority list.

Do not:
- Do not compare L1 and total counts as if they are the same.
- Do not add exact-looking speaker counts without source/year.
- Do not bury `speakerBasis` only in raw metadata; show it to users.

Done when:
- Task 80 priority languages have at least `speakerBasis` and source/year where possible.
- The modal displays basis/source/year in human-readable form.
- Validator reports remaining missing speaker metadata.

### New Task 99. Render map-point basis so coordinates are not misread

Goal:
Make clear that each marker is a representative point, not a speaker-distribution map.

Current issue I checked:
- `CONTRIBUTING.md` explains `locationBasis`.
- Validator accepts `locationBasis` if present.
- UI does not visibly explain the basis of each coordinate.
- Some clusters are intentionally representative, e.g. multiple English/historical rows around London and multiple Korean historical rows around Seoul.

Files to change:
- `wordmap_meta.js`
- `wordmap.html`
- `validate_wordmap_data.js`
- `CONTRIBUTING.md`

Exact action:
- Add or expand:

```js
locationBasis: 'capital' | 'prestige-center' | 'historical-site' | 'largest-city' | 'approx-region'
```

- Prefer storing it consistently. Current validator treats `locationBasis` as a language-level field (`LANG_DATA[code].locationBasis`), but most new metadata lives under `meta`. Choose one canonical location:
  - Preferred: `meta.locationBasis`
  - Migration: validator may accept both but should document the canonical one.
- Render a compact modal line:
  - `Map point: capital`
  - `Map point: historical site`
  - `Map point: approximate region`

Validator change:
- Warn if both `lang.locationBasis` and `meta.locationBasis` exist but differ.
- Warn for high-traffic or historical rows with missing location basis after migration.

Do not:
- Do not imply the marker is the geographic center of all speakers.
- Do not move coordinates merely to avoid overlaps.
- Do not treat duplicate coordinates as errors when they represent real historical/prestige centers.

Done when:
- Location basis is visible in the modal.
- Validator enforces the canonical location-basis field.
- Documentation says the map is representative, not a distribution map.

### New Task 100. Localize and explain unattested `—` cells

Goal:
Make unattested cells clear to learners in all UI languages. The current display uses English text inside the word table.

Current issue I checked:
- `renderLangInfo` displays:

```html
— (unattested)
```

- This string is English-only.
- Dash counts are concentrated in concepts like `hello` and `thanks`, especially for historical languages.
- For teaching, `—` must mean "explicitly unattested/not provided under current policy", not "missing data by accident".

Files to change:
- `wordmap.html`
- `WM_UI_LABELS` source
- `validate_wordmap_data.js`
- `CONTRIBUTING.md`

Exact action:
- Add UI labels:
  - `unattested`
  - `unattested_detail`
- Suggested English:
  - `unattested`: `unattested`
  - `unattested_detail`: `No reliable form is shown under the current evidence policy.`
- Translate at least `ja`, `ko`, `zh`.
- Replace hardcoded `— (unattested)` with localized text.
- For historical languages, consider showing a small note once per modal explaining that unattested values are intentionally hidden from map labels.

Validator change:
- Keep current rule: modern languages should not use both `—` unless explicitly allowed by future policy.
- Add an info summary by concept, so reviewers can see that `hello` and `thanks` are the main unattested concepts.

Do not:
- Do not replace `—` with invented greetings or thanks formulas.
- Do not use `—` for "not reviewed yet" in modern rows.
- Do not leave the user-facing explanation English-only.

Done when:
- `—` cells are localized.
- Historical-language users understand why cells are blank.
- Validator reports unattested counts by concept.

### New Task 101. Make evidence notes accessible beyond hover

Goal:
Per-cell evidence is important educational content and should not be available only as a hover `title` tooltip.

Current issue I checked:
- `wordEvidence` markers render as a small symbol with `title="${escapeHtml(evidenceTooltip(ev))}"`.
- Hover/title tooltips are unreliable on mobile and weak for keyboard/screen-reader access.
- Evidence marker meaning is color + symbol + tooltip; the text is not otherwise visible.

Files to change:
- `wordmap.html`
- optionally CSS inside `wordmap.html`

Exact action:
- Make each evidence marker keyboard-focusable:

```html
<button class="evidence-marker" ...>
```

or:

```html
<span tabindex="0" role="button" class="evidence-marker" ...>
```

- Add `aria-label` containing the evidence tooltip text.
- On click/tap/focus, show a small inline popover or expand a compact note under the row.
- Keep the existing title as a fallback, but do not rely on it as the only access path.

Do not:
- Do not use color alone to indicate evidence type.
- Do not make the table jump wildly when notes expand.
- Do not require mouse hover to read source/evidence notes.

Done when:
- Evidence notes are readable on mobile and keyboard.
- Screen readers get a useful `aria-label`.
- Existing visual compactness is preserved.

### New Task 102. Rename the global IPA toggle to avoid false precision

Goal:
The UI currently has a global `IPA` toggle, but Tasks 76 and 94 establish that many rows are not strict IPA. The label should not promise strict IPA globally.

Current issue I checked:
- The toggle button has visible label `IPA`.
- Its ARIA label says `Toggle IPA / transcription display`, which is better but still not reflected visually.
- The table header uses `ipaCol` / `IPA / transcription`, but the map control still says `IPA`.

Files to change:
- `wordmap.html`
- `WM_UI_LABELS` source
- `CONTRIBUTING.md` if UI terminology is documented

Exact action:
- Rename the visible toggle from `IPA` to a broader term such as:
  - English: `Pron.`
  - Japanese: `発音`
  - Korean: `발음`
  - Chinese: `发音`
- Keep a tooltip/ARIA label explaining: `Show pronunciation / IPA / romanization`.
- Update `WM_UI_LABELS` so the label is localized.
- In the modal, show the exact `pronunciationType` badge from Task 89 so users know whether a row is IPA, broad, romanization, or mixed.

Do not:
- Do not keep the visual label `IPA` after adding `pronunciationType`.
- Do not rename the data field `ipa` everywhere in one risky sweep unless the codebase has tests for it.
- Do not imply all pronunciation strings are strict IPA.

Done when:
- The map control no longer visually promises strict IPA.
- The modal gives exact notation type per language.
- Existing hash/toggle behavior still works.

### New Task 103. Add policy for bound stems, prefixes, and hyphen-marked forms

Goal:
Make it clear when a cell is a free word, bound stem, affixal form, or reconstructed root. Right now the data mixes normal words with forms marked by leading/trailing hyphens.

Current issue I checked:
Examples with visible stem/affix markers:

| Code | Cell | Current value | Why it matters |
|---|---|---|---|
| `iu` | `eat`, `drink`, `love` | `ᓂᕆ-`, `ᐃᒥᖅ-`, `ᓇᒡᓕᒍᓱᒃ-` | Trailing hyphen indicates a bound stem/root, not a standalone word. |
| `ine` | multiple | `*h₁ed-`, `*peh₃-`, `*lewbʰ-` | Reconstructed roots are intentionally not ordinary words. |
| `xpr` | `eat`, `drink` | `xward-`, `pī-` | Historical stem notation needs evidence/status note. |
| `bsk` | `heart`, `hand`, `eye` | `-us`, `-rin`, `-lčin` | Leading hyphen suggests bound or possessive-dependent form. |
| `ng`, `kmb`, `her`, `smg` | `one`, `good` etc. | `-mwe`, `-moxi`, `-wa`, `-tare` | Likely noun-class/adjectival agreement stems, not free citation forms. |

Files to change:
- `wordmap_data.js`
- `wordmap.html`
- `validate_wordmap_data.js`
- `CONTRIBUTING.md`

Exact schema to add:

```js
wordEvidence: {
  eat: {
    evidence: 'direct',
    formType: 'free-word' | 'bound-stem' | 'root' | 'inflected-form' | 'phrase' | 'reconstructed-root',
    note: 'Trailing hyphen marks a bound stem.'
  }
}
```

First-pass rule:
- Do not remove hyphens if they are meaningful.
- Add `formType` and `note` where a leading/trailing hyphen or asterisk is part of scholarly notation.
- For reconstructed proto-language roots, use `formType: 'reconstructed-root'`.
- For modern bound stems, use `formType: 'bound-stem'` or `inflected-form`.

UI change:
- If `formType` exists, include it in the evidence marker detail/popover.
- Do not clutter the table; show details only on evidence click/focus.

Validator change:
- Warn when a modern language has a surface form beginning or ending with `-` and no `wordEvidence[concept].formType`.
- Allow proto/historical reconstructed roots with `*...-` only when data status/evidence explains reconstruction.

Do not:
- Do not "fix" bound forms by deleting hyphens.
- Do not replace reconstructed roots with invented full words.
- Do not treat all hyphenated compounds as bound stems; ordinary compounds like `pag-ibig` may be free words.

Done when:
- Hyphen-marked bound/stem forms have explicit `formType`.
- Validator flags unexplained leading/trailing hyphens.
- Users can tell when a displayed form is not a standalone word.

### New Task 104. Add phrase-vs-word policy for multiword cells

Goal:
Clarify when a cell may contain a phrase instead of a single word. Some concepts naturally use phrases (`hello`, `thanks`), while others should usually prefer a lexical word if available.

Current issue I checked:
Multiword cells are common in:
- `hello`: 95 rows
- `thanks`: 68 rows
- `sun`: 18 rows
- `drink`: 19 rows
- `eat`: 15 rows
- `heart`: 14 rows
- `love`: 13 rows

Examples:

| Concept | Example | Likely status |
|---|---|---|
| `hello` | `vi xin chào`, `ga dia duit`, `mi kia ora` | Phrase is normal and acceptable. |
| `thanks` | `id terima kasih`, `en thank you`, `ga go raibh maith agat` | Phrase is normal and acceptable. |
| `sun` | `vi mặt trời`, `bbc mata ni ari`, `gor mata lo dulahu` | Multiword lexical compound may be normal; needs no automatic fix. |
| `drink` | `bn পান করা`, `as পান কৰা` | Verb phrase/light-verb construction; may be valid citation convention. |
| `heart` | `vi trái tim` | Anatomical phrase; concept choice needs review under Task 83. |
| `love` | `pau klou el reng`, `ady шӏу шӏэгъу` | May be phrase/periphrasis; should be noted if not a simple lexical item. |

Files to change:
- `wordmap_data.js`
- `validate_wordmap_data.js`
- `CONTRIBUTING.md`
- optionally `wordmap.html` if `formType` is displayed

Exact schema:
- Reuse Task 103 `formType`.
- Allowed values for phrase-like entries:
  - `phrase`
  - `compound`
  - `light-verb-construction`
  - `greeting-formula`
  - `thanks-formula`

Validator change:
- Info summary by concept for multiword cells.
- Warn only when a normally lexical concept (`water`, `fire`, `tree`, `hand`, `eye`, `one`) has a multiword value without `formType` or note.
- Do not warn for `hello` and `thanks` phrases.

Do not:
- Do not force every concept into one orthographic word.
- Do not split established compounds.
- Do not treat spaces as errors in scripts/languages where spacing conventions differ.

Done when:
- Multiword formulas are documented rather than silently suspicious.
- Validator highlights only high-risk multiword cells.
- Concept definitions and `formType` agree.

### New Task 105. Update SEO/OpenGraph text after pronunciation-policy change

Goal:
Avoid public metadata claiming the map provides IPA pronunciations for all entries after Tasks 76/94 establish that the column may contain broad transcription or romanization.

Current issue I checked:
`wordmap.html` has hardcoded metadata:

```html
<meta name="description" content="... with IPA pronunciations ...">
<meta property="og:description" content="... with IPA pronunciations ...">
<meta name="twitter:description" content="... with IPA pronunciations ...">
```

Problem:
This is externally visible and overclaims strict IPA coverage.

Files to change:
- `wordmap.html`
- optionally README if it makes the same claim

Exact action:
- Replace public copy with broader wording:
  - `with pronunciation guides`
  - `with IPA, broad transcription, and romanization where available`
- Keep it short for SEO/OpenGraph.

Suggested replacement:

```html
content="An interactive world map showing 20 key words in 579 languages with pronunciation guides, sources, and 2D/3D views."
```

Do not:
- Do not keep "IPA pronunciations" as the only public claim.
- Do not mention schema internals in SEO text.
- Do not update the count manually unless validator/readme count conventions are also checked.

Done when:
- HTML meta, OpenGraph, and Twitter descriptions no longer overclaim strict IPA.
- Any README tagline is consistent with the UI wording.

### New Task 106. Localize hardcoded search/status strings

Goal:
Remove remaining English-only UI strings before adding more education-facing labels.

Current issue I checked:
`wordmap.html` still has hardcoded English strings in interactive UI:
- `No match`
- `Toggle off the <era> filter to select`
- `modern lang` / `historical lang` only partially localized
- `Font Size`
- several ARIA labels are English-only

Files to change:
- `wordmap.html`
- `WM_UI_LABELS` source
- `validate_wordmap_data.js`

Exact action:
- Add UI label keys:
  - `noMatch`
  - `toggleOffEraToSelect`
  - `modernLang`
  - `historicalLang`
  - `fontSize`
  - `closeLanguageInfo`
  - `toggleView`
  - `zoomIn`
  - `zoomOut`
- Translate at least `en`, `ja`, `ko`, `zh`.
- Replace hardcoded strings with `wt(key)` fallback.

Validator change:
- Add these to the required UI-label key list from Task 92.

Do not:
- Do not leave ARIA-only labels English if visible labels are localized.
- Do not concatenate translated grammar awkwardly where a full phrase key is needed; use a phrase template for `toggleOffEraToSelect`.

Done when:
- Search empty state and disabled-result tooltip are localized.
- Core ARIA labels have localized text or explicit English fallback.
- Validator reports missing required UI labels.

### New Task 107. Add audit for public count strings

Goal:
Prevent public text from drifting when the language count changes.

Current issue I checked:
- `wordmap_data.js` header says `579 languages/varieties`.
- `wordmap.html` meta description says `579 languages`.
- Validator reports `Languages: 579`.
- If languages are added/removed, hardcoded public counts can silently become stale.

Files to change:
- `validate_wordmap_data.js`
- `wordmap.html`
- README if present count claims exist

Exact action:
- Extend validator to scan public files for hardcoded language-count strings.
- Existing count checks mention README/HTML count, but ensure they cover:
  - HTML meta description
  - OpenGraph description
  - Twitter description
  - `wordmap_data.js` header comment
  - README if it mentions the wordmap count
- Prefer wording that avoids exact counts in SEO text unless the validator enforces it.

Do not:
- Do not update one count manually and leave other public counts stale.
- Do not fail validation for historical comments unless they are public-facing claims.

Done when:
- Count strings are either removed from public copy or validated.
- Validator output points to the exact stale file/string.

### New Task 108. Add row-level review status separate from data status

Goal:
Distinguish "this is a modern language" from "this row has been linguistically reviewed". `dataStatus` currently describes historical/evidentiary status, not modern-row review quality.

Problem:
A modern row can be `dataStatus: modern` while still having:
- broad/romanized pronunciation
- incomplete sources
- regional base-copy coverage
- concept ambiguity
- tone omissions

Files to change:
- `wordmap_meta.js`
- `wordmap.html`
- `validate_wordmap_data.js`
- `CONTRIBUTING.md`

Exact schema:

```js
meta: {
  reviewStatus: 'unreviewed' | 'machine-seeded' | 'human-reviewed' | 'source-checked' | 'needs-rebuild',
  reviewNotes: 'short note',
  reviewedAt: 'YYYY-MM-DD'
}
```

First-pass assignment:
- `needs-rebuild`: rows explicitly flagged in Tasks 78, 94, or duplicate coverage tasks.
- `human-reviewed`: rows recently checked manually but without full source coverage.
- `source-checked`: rows with meaningful sources and no major open issues.
- `machine-seeded` or `unreviewed`: rows not yet audited.

UI change:
- Show a compact review badge in the modal:
  - `Review: needs rebuild`
  - `Review: source checked`
- Keep separate from `dataStatus`.

Validator change:
- Warn if a row has `coverage: 'full'` but `reviewStatus` is missing.
- Warn if `reviewStatus: 'source-checked'` but no `sources` / `references` exist.

Do not:
- Do not overload `dataStatus` for modern review quality.
- Do not call a row `source-checked` without sources.
- Do not hide low review status; it is useful honesty for learners.

Done when:
- Review quality is visible separately from historical data status.
- Known problematic rows can be marked `needs-rebuild` without reclassifying them as historical/fragmentary.

### New Task 109. Add code-system documentation and validator checks for custom codes

Goal:
Make language codes teachable and maintainable. The dataset mixes ISO-like codes (`ja`, `eng`-style custom choices are not always ISO), ISO 639-3 codes, and project-specific variant codes such as `zh_db`, `ko_kp`, `en_aave`, and historical codes.

Current issue I checked:
- There are 86 non-simple custom-looking codes containing underscores or custom labels.
- Large parent groups include:
  - `en` → 10 children
  - `zh` → 7 children
  - `ar` → 7 children
  - `ja` → 5 children
  - `es_eu` → 5 children
  - `nan` → 4 children
  - `de`, `fr` → 3 children each
- Existing optional `iso6393` / `glottocode` coverage is only 20 rows.

Files to change:
- `CONTRIBUTING.md`
- `validate_wordmap_data.js`
- `wordmap_meta.js`

Exact action:
- Add a documented code taxonomy:
  - ISO 639-1/3 direct code
  - project regional variant code
  - historical-stage code
  - constructed/pedagogical code
  - dialect/accent row
- Add metadata fields:

```js
meta: {
  codeType: 'iso' | 'regional-variant' | 'historical-stage' | 'dialect' | 'constructed' | 'custom',
  canonicalCode: 'jpn',     // ISO 639-3 if available
  parentCode: 'ja'          // where applicable
}
```

- For custom codes with underscores, require either `parentCode` or `codeType` explaining why no parent exists.
- For ISO-like rows, add `canonicalCode` where it differs from the project code.

Validator change:
- Warn when a code contains `_` and lacks `meta.codeType`.
- Warn when a code contains `_` and lacks `parentCode` unless `codeType` is `historical-stage` or a documented exception.
- Warn when `iso6393` exists and disagrees with `canonicalCode`.

Do not:
- Do not rename codes in this task; that would break URLs/hashes.
- Do not assume every underscore code is a child dialect; some are historical stages.
- Do not use ISO codes as display names.

Done when:
- Custom code policy is documented.
- Validator can distinguish regional, historical, and custom codes.
- Future rows cannot add opaque project codes without metadata.

### New Task 110. Add source coverage for fully filled historical rows

Goal:
Historical rows with 18-20 filled cells look authoritative. If they have no `wordEvidence`, a learner cannot tell whether the forms are attested, reconstructed, normalized, or pedagogical.

Current issue I checked:
Many historical rows have nearly full word coverage but zero `wordEvidence`, for example:

| Code | Name | Status | Filled cells | wordEvidence cells |
|---|---|---|---:|---:|
| `la` | Latin | attested | 20 | 0 |
| `el_grc` | Ancient Greek | attested | 20 | 0 |
| `en_ang` | Old English | attested | 20 | 0 |
| `non` | Old Norse | attested | 20 | 0 |
| `sa` | Sanskrit | attested | 20 | 0 |
| `pal` | Middle Persian | attested | 20 | 0 |
| `xct` | Classical Tibetan | attested | 20 | 0 |
| `ja_edo`, `ja_heian`, `ko_mid`, `ko_em`, `vi_nom` | pedagogical historical rows | 20 | 0 |

Files to change:
- `wordmap_data.js`
- `wordmap_meta.js`
- `validate_wordmap_data.js`
- `wordmap-modern-audit-feedback.md`

Exact action:
- Do not add 20 per-cell sources immediately for every historical row.
- Add language-level `meta.sources` first for fully filled historical rows.
- Add per-cell `wordEvidence` for:
  - cells that are reconstructed
  - cells that are pedagogical approximations
  - cells that are conceptually non-literal (`hello`, `thanks`, `good`, `love`)
  - cells likely normalized from dictionaries rather than directly attested phrases
- For pedagogical rows (`ja_edo`, `ja_heian`, `ko_mid`, `ko_em`, `vi_nom`), add a clear `reviewStatus` / `dataStatus` note explaining they are teaching approximations.

Validator change:
- Warn when a historical row has 18+ filled cells and neither `meta.sources` nor at least 5 `wordEvidence` entries.
- Warn more strongly for `dataStatus: 'pedagogical'` rows with no evidence notes.

Do not:
- Do not mark all historical cells `direct` without checking sources.
- Do not invent ancient `hello`/`thanks` formulas to fill concepts.
- Do not downgrade a well-attested language to fragmentary just because per-cell evidence is not yet complete.

Done when:
- High-coverage historical rows have at least language-level sources.
- Pedagogical rows visibly explain approximation status.
- Validator reports remaining unsourced high-coverage historical rows.

### New Task 111. Add source coverage for modern rows that already have `wordEvidence`

Goal:
Rows with per-cell notes but no language-level source are halfway documented. The notes help, but the row still lacks an overall citation trail.

Current issue I checked:
Modern rows with `wordEvidence` but no `meta.sources` / `meta.references` include:
- `nv`
- `haw`
- `pjt`
- `glk`
- `lrc`
- `nxq`
- `bqi`
- `kwk`
- `pcc`
- `iuu`
- `pwn`
- `bnn`
- `trv`

Files to change:
- `wordmap_meta.js`
- optionally `wordmap_data.js` if individual `wordEvidence.source` needs normalization
- `validate_wordmap_data.js`

Exact action:
- For each listed row, add at least one language-level `meta.sources` entry.
- Keep existing `wordEvidence.note` values.
- If an existing `wordEvidence.source` is a useful source, consider also adding it to `meta.sources`.
- For rows where evidence came from a specific orthography or dictionary source (`nxq`, `pcc`, `iuu`), make the source explicit at language level.

Validator change:
- Warn when a modern language has `wordEvidence` but no `meta.sources` / `meta.references`.
- Do not fail validation until the listed rows are migrated.

Do not:
- Do not remove useful per-cell notes after adding language-level sources.
- Do not use vague source strings.
- Do not add the same source 20 times if a language-level source is enough.

Done when:
- Each listed modern row has at least one language-level source.
- Validator catches future evidence-without-source rows.

### New Task 112. Add historical-mode explanation for descendant overlay

Goal:
Prevent users from misunderstanding historical mode. In historical mode, the map includes historical languages and also shows modern descendant markers. This is useful but not self-explanatory.

Current issue I checked:
- `getVisibleLangs()` adds `descendantCodes` when `showHistorical` is true.
- Descendant labels are visually marked with an "isDescendant" style, but the UI does not clearly explain the rule.
- The modal has ancestor/descendant links, but there is no top-level legend explaining why modern languages appear in historical mode.

Files to change:
- `wordmap.html`
- `WM_UI_LABELS` source
- optionally `CONTRIBUTING.md`

Exact action:
- Add a compact legend or tooltip near the era switch:
  - Modern mode: `Modern languages and varieties`
  - Historical mode: `Historical rows plus modern descendant reference points`
- Add localized labels at least for `en`, `ja`, `ko`, `zh`.
- Ensure descendant labels have an accessible text cue, not only color/style.

UI details:
- Keep it compact; do not add a large explanatory card over the map.
- A small `?` or title/help text beside the era switch is enough.
- In the modal, keep ancestor/descendant links but align labels with this wording.

Do not:
- Do not remove descendant overlay; it is useful.
- Do not rely only on color to distinguish descendant markers.
- Do not call descendants "historical languages".

Done when:
- Users can understand why modern descendant markers appear in historical mode.
- Screen-reader/keyboard users get the same explanation.

### New Task 113. Add parent-child inheritance display for regional rows

Goal:
Show users when a regional/dialect row is related to a parent row, especially when many values are inherited or near-identical.

Current issue I checked:
- Many rows already have `meta.parentCode`, e.g. English, Chinese, Arabic, Japanese, Spanish, Portuguese, German, French regional rows.
- The modal currently shows historical ancestors/descendants, but not modern parent/variant relationships.
- This overlaps with coverage tasks: users should know whether `ko_kp` is a Korean standard variant, whether `zh_db` is a Mandarin regional row, etc.

Files to change:
- `wordmap.html`
- `wordmap_meta.js`
- `validate_wordmap_data.js`

Exact action:
- In `renderLangInfo`, if `m.parentCode` exists:
  - show `Parent variety: <name> (<code>)`
  - make it clickable like ancestor/descendant links
- Build reverse child list:
  - for a parent row, show `Regional/related rows: ...` if children exist
- If `coverage` exists, show it next to the parent relationship.

Validator change:
- Warn if a row has `coverage: 'base-copy-with-notes'` but lacks `parentCode` or `baseLang`.
- Warn if `parentCode` points to a historical row for a modern variant unless explicitly documented.

Do not:
- Do not mix modern parent/child relationships with historical ancestry labels.
- Do not imply dialect hierarchy is genetic descent.
- Do not show huge child lists without truncation if a parent has many variants.

Done when:
- Opening a regional row shows its parent/base relation.
- Opening a parent row shows related variants compactly.
- Coverage notes and parent links agree.

### New Task 114. Make language search accent-insensitive and alias-aware

Goal:
Help users find languages even if they type without diacritics, alternate spellings, or common aliases. This matters for a teaching tool because users often do not know the exact display name.

Current issue I checked:
- Search currently uses simple `.toLowerCase().includes(ql)`.
- It matches display name, English name, native name, and code.
- It does not normalize diacritics or handle aliases.
- Examples likely affected:
  - `Yorùbá` vs `Yoruba`
  - `Māori` vs `Maori`
  - `K'iche'` vs `Quiche`
  - `Navajo` vs `Diné`
  - `Akan (Twi)` vs `Twi`
  - `Cantonese` vs `Yue`
  - `Mandarin` vs `Chinese`

Files to change:
- `wordmap.html`
- `wordmap_meta.js` or `lang_names.js`
- `validate_wordmap_data.js`

Exact schema to add:

```js
meta: {
  aliases: ['Yoruba', 'Yorùbá', '...']
}
```

Search normalization function:

```js
function normalizeSearchText(s) {
  return String(s || '')
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase();
}
```

Exact action:
- Use `normalizeSearchText` on query and searchable fields.
- Search fields should include:
  - localized display name
  - English name
  - native name
  - code
  - `meta.aliases`
  - `iso6393` / `canonicalCode` where present
- Keep exact/prefix matches ranked above fuzzy/alias matches.

Validator change:
- Validate `meta.aliases` is an array of strings if present.
- Warn if two aliases collide across unrelated languages unless names are intentionally shared.

Do not:
- Do not remove diacritics from displayed names; only normalize for matching.
- Do not replace `LANG_NAMES` with aliases.
- Do not make search so fuzzy that unrelated languages appear first.

Done when:
- Searching without diacritics finds diacritic names.
- Major aliases work.
- Search result display still shows the correct official/display name.

### New Task 115. Disambiguate duplicate display and native names in search and modal

Goal:
Prevent same-name rows from looking like accidental duplicates or indistinguishable search results.

Current issue I checked:
- Duplicate display names exist:
  - `mon`, `mnw` both display as `Mon` / `モン語` / `몬어` / `孟语`.
- Duplicate native names exist:
  - `mn_cn`, `xng` both have native `ᠮᠣᠩᠭᠣᠯ`.
  - `omx`, `mnw` both show Mon-script native names that are very similar / same.
- Validator already allowlists the `mon` / `mnw` coordinate/name issue, but UI search still needs disambiguation.

Files to change:
- `wordmap.html`
- `wordmap_meta.js`
- `lang_names.js`
- `validate_wordmap_data.js`

Exact action:
- Add optional metadata:

```js
meta: {
  disambiguator: 'ISO mon conflict / Mon language expert review pending'
}
```

- In search results, show code plus disambiguator when names collide:
  - `Mon [mon] — Mongolian-code conflict / hidden?`
  - `Mon [mnw] — Modern Mon`
- In the modal, show code prominently as it already does, and also show `disambiguator` if present.
- Keep `mon` / `mnw` allowlist until expert review, but make the UI honest.

Validator change:
- Detect duplicate localized display names and duplicate native names.
- Warn unless every duplicate row has a code shown in UI and either:
  - `disambiguator`, or
  - existing allowlist entry with explanation.

Do not:
- Do not silently rename languages to avoid the duplicate.
- Do not remove one of the rows.
- Do not hide code in search results; code is necessary for disambiguation.

Done when:
- Duplicate-name search results are distinguishable.
- Validator reports duplicate display/native names with actionable metadata guidance.

### New Task 116. Add Unicode/font/script rendering audit

Goal:
Avoid tofu boxes, broken shaping, and wrong font fallback for historical and minority scripts.

Current issue I checked:
- `wordmap.html` loads many Noto fonts for historical scripts, but there is no validator tying actual script usage to font support.
- The data includes many scripts that are easy to render incorrectly: Tangut, Khitan Small Script, Manichaean, Egyptian Hieroglyphs, Meroitic, Coptic, Old Turkic, Mongolian, Sogdian, Phags-pa, Tagalog, Sundanese, and others.
- Unicode normalization is currently clean in word cells (`NFC` check found 0 issues), but rendering coverage is not validated.

Files to change:
- `wordmap.html`
- `validate_wordmap_data.js`
- optionally `CONTRIBUTING.md`

Exact action:
- Add a script/font coverage registry:

```js
const SCRIPT_FONT_REQUIREMENTS = {
  Tangut: 'Noto Serif Tangut',
  'Khitan Small Script': 'Noto Sans Khitan Small Script',
  Manichaean: 'Noto Sans Manichaean',
  Coptic: 'Noto Sans Coptic'
};
```

- Validator should scan word surface values for Unicode blocks and report scripts used.
- Validator should warn if a script is detected but no matching font family is loaded or documented.
- Keep NFC normalization check in validator.

UI / manual test:
- Add a small rendering smoke-test checklist to `wordmap-modern-audit-feedback.md` when fonts are changed.
- Test at least:
  - desktop 2D modal
  - mobile modal
  - map labels
  - 3D globe labels if supported

Do not:
- Do not force all scripts into one font.
- Do not replace historical script forms with Latin transliteration solely to avoid font work.
- Do not assume Google Fonts supports every historical script equally across browsers.

Done when:
- Validator reports scripts used and known font coverage.
- Newly added script blocks require font/documentation review.
- No obvious tofu appears in the main modal for high-risk scripts.

### New Task 117. Add provenance and confidence for grammar/filter metadata

Goal:
Make the language filter educationally honest. `lang-filter.js` assigns word order, tone, and morphology values from family-level heuristics and overrides, but users may interpret them as precise language facts.

Current issue I checked:
- `lang-filter.js` contains large family-level defaults such as:
  - word order
  - tone
  - morphology
- Some comments explicitly note corrections and broad assumptions.
- There is no visible confidence/source indicator in the filter UI for whether a value is language-specific, family-default, inferred, or unknown.

Files to change:
- `lang-filter.js`
- `wordmap_meta.js`
- `wordmap.html` if modal/filter integration is needed
- `validate_wordmap_data.js`
- `CONTRIBUTING.md`

Exact schema:

```js
meta: {
  typology: {
    wordOrder: { value: 'SOV', evidence: 'language-specific' | 'family-default' | 'inferred' | 'unknown', source: '...' },
    tone: { value: true, evidence: 'language-specific' | 'family-default' | 'inferred' | 'unknown', source: '...' },
    morphology: { value: 'agglutinative', evidence: 'language-specific' | 'family-default' | 'inferred' | 'unknown', source: '...' }
  }
}
```

First-pass action:
- Do not move all filter data immediately.
- Add provenance flags inside the filter derivation result:
  - `language-specific`
  - `family-default`
  - `manual-override`
  - `unknown`
- Show a compact tooltip or note in filter details: `family default`, `manual override`, etc.

Validator change:
- Warn if a language-specific override lacks a source or comment.
- Warn if a broad family default covers many languages without documentation.

Do not:
- Do not present family-default typology as guaranteed for every child language.
- Do not remove the filter; add confidence/provenance.
- Do not make the filter UI noisy for casual users.

Done when:
- Filter values have provenance.
- Users can tell when a typological value is inferred rather than source-checked.
- Future reviewers can audit filter assumptions.

### New Task 118. Add constructed-language and pedagogical-row labeling

Goal:
Make constructed languages and pedagogical rows visibly distinct from natural-language rows. They can be useful, but the teaching interpretation is different.

Current issue I checked:
- The dataset includes constructed languages such as `eo`, `tok`, `jbo`, and `tlh`.
- Historical/pedagogical rows also exist (`ja_edo`, `ja_heian`, `ko_mid`, `ko_em`, `vi_nom`).
- `dataStatus: pedagogical` exists for some historical rows, but constructed modern rows need their own row type / review explanation.

Files to change:
- `wordmap_meta.js`
- `wordmap.html`
- `validate_wordmap_data.js`
- `CONTRIBUTING.md`

Exact schema:

```js
meta: {
  languageKind: 'natural' | 'constructed' | 'pidgin-creole' | 'pedagogical-stage' | 'reconstructed-proto' | 'historical-attested'
}
```

First-pass assignment:
- `eo`, `tok`, `jbo`, `tlh`: `constructed`
- `ine`: `reconstructed-proto`
- `ja_edo`, `ja_heian`, `ko_mid`, `ko_em`, `vi_nom`: `pedagogical-stage`
- well-attested ancient rows: `historical-attested`

UI change:
- Show a compact badge:
  - `constructed language`
  - `pedagogical stage`
  - `reconstructed proto-language`
- Keep separate from `dataStatus`, because a constructed modern language is not historical/fragmentary.

Validator change:
- Warn if `family` includes `Constructed` but `languageKind` is missing.
- Warn if `dataStatus: 'pedagogical'` but `languageKind` is missing.

Do not:
- Do not hide constructed languages.
- Do not imply constructed languages are mistakes.
- Do not use `dataStatus` alone for language kind.

Done when:
- Constructed/pedagogical/proto rows are visibly labeled.
- Validator catches missing language-kind metadata.

### New Task 119. Add optional traditional/historical script display without replacing the practical main forms

Goal:
Keep the main word cells useful for learners, but add a secondary script layer for languages where the historically interesting written form is not the everyday learner-friendly form.

Why this matters:
- Zhuang (`za`) and Bouyei (`pcc`) are currently best served by modern romanized forms as the main display, because that is the practical modern standard.
- However, both are culturally and visually connected to Chinese-derived scripts:
  - Zhuang: Sawndip / Old Zhuang characters.
  - Bouyei: traditional Chinese-derived Bouyei writing traditions are relevant, though less standardized for modern learner use.
- Khitan (`zkt`) currently appears in romanized reconstructed/transcribed forms such as `muri`, `niár`, `nair`, etc. This is understandable, but the language is historically famous for Khitan Large Script and Khitan Small Script.
- The same issue may apply to Jurchen (`juc`), Tangut (`txg`), Old Vietnamese/Chữ Nôm (`vi_nom`), Tày/Nôm Tày (`tyz`), and other rows where the interesting script and the safest teaching form are not the same.

Current problem:
- If we replace the main cells with ancient/rare script forms, many users will not be able to read or compare them.
- If we leave only romanization, the map loses an important visual/cultural teaching opportunity.
- There is no schema for saying: "main form is practical/transliterated; alternate historical form is available."

Files to change:
- `wordmap_data.js`
- `wordmap_meta.js`
- `wordmap.html`
- `validate_wordmap_data.js`
- `CONTRIBUTING.md`

Exact schema to add:

```js
LANG_DATA[code].meta = {
  scriptDisplayPolicy: {
    primary: 'modern-standard' | 'romanization' | 'scholarly-transcription' | 'reconstructed-transcription',
    secondary: 'traditional-script' | 'historical-script' | 'none',
    note: {
      en: 'Main cells use romanization; historical script is shown as an alternate form where attested.',
      ja: 'メインの単語欄はローマ字転写を用い、確認できる場合のみ歴史的文字を補助表示する。'
    }
  }
}

LANG_DATA[code].altWordForms = {
  water: [
    {
      form: '...',
      script: 'Sawndip' | 'Khitan Large Script' | 'Khitan Small Script' | 'Jurchen script' | 'Tangut script' | 'Chữ Nôm' | 'Nôm Tày',
      type: 'traditional' | 'historical' | 'attested' | 'scholarly-normalized',
      source: '...',
      note: '...'
    }
  ]
}
```

First-pass language scope:
- `za` Zhuang:
  - Keep romanized Zhuang as the main cell.
  - Add Sawndip / Old Zhuang forms only when a reliable source gives the exact word form.
  - Do not invent character spellings by meaning.
- `pcc` Bouyei:
  - Keep romanized Bouyei as the main cell.
  - Add traditional/Chinese-derived forms only when the specific Bouyei word spelling is source-confirmed.
  - If only generic script history is known, put it in `scriptDisplayPolicy.note`, not in `altWordForms`.
- `zkt` Khitan:
  - Keep scholarly romanized/transcribed forms as the main cell.
  - Add Khitan Large/Small Script forms only for cells where the exact word is attested and source-confirmed.
  - Mark unattested or uncertain cells clearly; do not back-convert romanization into Khitan script.
- `juc` Jurchen and `txg` Tangut:
  - Same policy as Khitan: main cell remains practical transcription; historical script is secondary and only source-confirmed.
- `vi_nom` and `tyz`:
  - Main cells may remain learner-friendly transcription/modern orthography.
  - Add Chữ Nôm / Nôm Tày as secondary forms only when the exact written form is known.

UI behavior:
- In the word detail/modal, show:
  - main form
  - pronunciation/transcription
  - optional alternate historical/traditional script forms
- Use a compact label such as:
  - `Historical script`
  - `Traditional script`
  - `Scholarly transcription`
- Do not show alternate forms directly in the map label by default. The map should remain readable.
- If a language has `scriptDisplayPolicy.secondary !== 'none'`, show a small script badge in the language modal.

Validator rules:
- `altWordForms` keys must match existing `WORD_LIST` keys.
- Every `altWordForms[concept][]` entry must have:
  - `form`
  - `script`
  - `type`
  - `source`
- Warn if `form` is identical to the main surface form and `type` is not explained.
- Warn if a rare historical script form is added without `source`.
- Warn if `scriptDisplayPolicy.secondary` is set but no explanatory `note.en` exists.
- Do not require every word to have an alternate form. Partial coverage is expected and should be honest.

Do not:
- Do not replace modern Zhuang/Bouyei romanization with Sawndip/old characters as the only visible form.
- Do not auto-generate Sawndip, Khitan, Jurchen, or Tangut spellings from meaning or romanization.
- Do not use Chinese characters just because the meaning is similar. The alternate form must represent the language's own written tradition.
- Do not mark uncertain historical-script guesses as confirmed data.
- Do not make the map visually crowded with multiple scripts in every label.

Done when:
- `za`, `pcc`, and `zkt` have an explicit `scriptDisplayPolicy`.
- At least one language with reliable exact forms has `altWordForms` displayed in the modal.
- The validator catches unsourced alternate-script entries.
- The UI makes clear why the main form and the historical/traditional form differ.

### New Task 120. Triage same-form duplicates instead of leaving them as validator info only

Goal:
Turn the validator's "same-form/same-IPA duplicates" list into an explicit review workflow. Some duplicates are valid lexical overlap, but some are likely copy/paste or concept-selection errors.

Current issue I checked:
- `node validate_wordmap_data.js` currently passes with 0 warnings, but prints 24 same-form/same-IPA duplicate groups as informational output.
- Because they are only informational, they can be ignored even when they are suspicious.

Current duplicate groups to triage:

```text
nv: hello/good = yáʼátʼééh / jɑ́ːʔɑ́tʰéːh
haw: love/hello = aloha / aloha
fj: thanks/good = vinaka / vinaka
tok: eat/drink = moku / moku
tok: dog/cat = soweli / soweli
tok: thanks/good = pona / pona
bm: hello/thanks = i ni ce / i ni tʃe
rar: thanks/good = meitaki / meitaki
mh: love/hello = yokwe / jokwe
pjt: hello/thanks/good = palya / palja
lus: drink/house = in / in
glk: eat/drink = خوردن / xoɾdæn
lrc: eat/drink = خواردن / xwɒːɾdæn
myp: heart/good = aoʔaago / aoʔaaɡo
bqi: eat/drink = خواردن / xwoɾdan
enq: fire/tree = ita / ita
kwk: hello/thanks = gilakas'la / ɡilakasla
mpt: sun/good = kep / kep
mpt: mother/love = na / na
ygr: love/hello = amige / amiɡe
sukh: eat/drink = กิน / kin
pwn: hello/thanks = masalu / masalu
bnn: hello/thanks = uninang / uninaŋ
trv: hello/good = malu / malu
```

Files to change:
- `wordmap_data.js`
- `wordmap_meta.js`
- `validate_wordmap_data.js`
- `CONTRIBUTING.md`

Exact schema:

```js
LANG_DATA[code].sameFormNotes = {
  hello_good: {
    concepts: ['hello', 'good'],
    status: 'confirmed-overlap' | 'needs-fix' | 'needs-source' | 'intentional-pedagogical',
    reason: '...',
    source: '...'
  }
}
```

Review instructions:
- For each duplicate group, decide one of:
  - `confirmed-overlap`: the same form genuinely covers both concepts.
  - `needs-fix`: one of the cells was copied or selected incorrectly.
  - `needs-source`: plausible, but source confirmation is missing.
  - `intentional-pedagogical`: simplified because the language has a very small controlled lexicon, e.g. Toki Pona.
- Add `sameFormNotes` for every remaining duplicate group.
- If a duplicate is corrected, remove it from the duplicate list naturally by changing the cell.

High-priority suspicious cases:
- `lus: drink/house = in` looks especially suspicious because "drink" and "house" are unrelated concepts.
- `enq: fire/tree = ita` looks suspicious unless a reliable source confirms polysemy/homophony.
- `mpt: sun/good = kep` and `mpt: mother/love = na` need source confirmation.
- `myp: heart/good = aoʔaago` needs source confirmation.

Likely valid or explainable cases, but still document:
- `haw: aloha` can cover greeting/love/affection depending on scope.
- `tok: moku`, `soweli`, `pona` may be intentional because Toki Pona has broad semantic categories.
- Iranian `glk`, `lrc`, `bqi` eat/drink overlap may be a known "eat/drink/take" verb issue, but still needs a note.
- `sukh: กิน` for eat/drink may be a broad verb issue; add evidence note.

Validator change:
- If a duplicate group exists and no matching `sameFormNotes` entry exists, emit a warning.
- If `sameFormNotes.status === 'confirmed-overlap'`, require `source`.
- If `sameFormNotes.status === 'intentional-pedagogical'`, require `reason`.
- Keep a short summary count in the validator output:
  - duplicates fixed
  - duplicates documented
  - duplicates still unreviewed

Do not:
- Do not blindly change all duplicates. Some are real.
- Do not suppress the validator output without adding explicit notes.
- Do not use `wordEvidence` alone for this, because the issue is cross-concept relation, not just single-cell evidence.

Done when:
- Every current duplicate group is either fixed or documented in `sameFormNotes`.
- The validator warns on new undocumented duplicates.
- Suspicious duplicates such as `lus`, `enq`, `mpt`, and `myp` are no longer silently treated as harmless.

### New Task 121. Finish or visibly label description translation fallbacks for recent language batches

Goal:
Make language descriptions trustworthy in every UI language. If a translated description is missing and English is shown as fallback, the UI should not silently pretend it is localized.

Current issue I checked:
- `validate_wordmap_data.js` reports description i18n coverage below 100% for several UI languages.
- The missing descriptions are concentrated in recent language batches.
- `renderLangInfo` currently does:

```js
const desc = typeof m.description === 'object' ? (m.description[uiLang] || m.description.en || '') : m.description;
```

This silently falls back to English without a visible note.

Missing-description groups:
- Missing in `yue`, `vi`, `th`, `id`, `hi`, `it`, `uk`, `ar`, `he`, `sw`:
  - `ami`, `pwn`, `tay`, `bnn`, `trv`, `tsu`, `tao`, `hak_tw`, `wuu_sz`, `wuu_wz`, `nan_qz`, `nan_hai`, `zh_wh`, `zh_zz`, `hak_hl`, `cpx`, `mfa`, `mtq`, `tyz`, `kjp`, `kac`, `wbm`, `ahk`, `dtp`, `hne`, `mnw`, `grt`, `nut`, `quc`, `kek`, `mam`, `wal`, `sid`, `tji`, `nij`, `sda`
- Also missing in `es_eu` and `pt_eu`:
  - `orv`, `xsc`, `sukh`, `xmr`, `onw`, `cqu`, `omc`, `chb`, `oma`, `osu`, `otl`, `zkt`, `juc`, `omx`, `pyx`, `obr`, `occ`, `och`, `ojp`, `vsa`, `txg`, `sog`, `otk`
  - plus the 36-code recent batch above
- Missing in `ru`:
  - `wuu_sz`, `wuu_wz`, `nan_qz`, `nan_hai`, `zh_wh`, `zh_zz`, `hak_hl`, `cpx`, `mfa`, `mtq`, `tyz`, `kjp`, `kac`, `wbm`, `ahk`, `dtp`, `hne`, `mnw`, `grt`, `nut`, `quc`, `kek`, `mam`, `wal`, `sid`, `tji`, `nij`, `sda`

Files to change:
- `wordmap_meta.js`
- `wordmap.html`
- `validate_wordmap_data.js`
- `CONTRIBUTING.md`

Implementation instructions:
- Add missing translated descriptions for the listed languages, at least for all UI languages currently supported by `WM_UI`.
- Until coverage is complete, make fallback visible in the modal:

```js
const descObj = typeof m.description === 'object' ? m.description : { en: m.description };
const descLang = descObj[uiLang] ? uiLang : 'en';
const desc = descObj[descLang] || '';
```

- If `descLang !== uiLang`, show a small localized note:
  - English fallback
  - 日本語 UI: `説明は英語で表示中`
  - Korean UI: `설명은 영어로 표시 중`
  - Chinese UI: `说明暂以英语显示`
- Put the fallback label in `WM_UI_LABELS`, not as inline nested ternaries.

Validator change:
- Keep reporting coverage counts.
- Add a warning if any UI language falls below a chosen threshold.
- Suggested threshold:
  - Phase 1: warn below 95%.
  - Phase 2: warn below 100% after the recent batches are translated.
- Add an allowlist only for languages intentionally not localized yet, with expiration.

Do not:
- Do not count English fallback as translated coverage.
- Do not paste machine translation without reviewing language names, scripts, country names, and family names.
- Do not leave `es_eu` and `pt_eu` missing historical descriptions while `de/fr/ja/ko/zh` have them.

Done when:
- The listed missing batches are translated or visibly marked as English fallback.
- Validator output makes missing description translations hard to miss.
- Users are not misled into thinking all modal descriptions are localized.

### New Task 122. Move historical descendant mapping out of `wordmap.html`

Goal:
Make historical language relationships data, not UI code. The validator should not need to scrape JavaScript source from `wordmap.html` to understand the historical/modern mapping.

Current issue I checked:
- `HIST_DESCENDANT` is currently defined inside `wordmap.html`.
- `validate_wordmap_data.js` extracts it with a regex:

```js
const histMatch = htmlSrc.match(/const HIST_DESCENDANT\s*=\s*\{([\s\S]*?)\n\s*\};/);
```

- This means a data relationship can break if the UI file is reformatted.
- It also makes it harder for future tools or Claude sessions to know where to add historical relationships.

Files to change:
- `wordmap_data.js` or `wordmap_meta.js`
- `wordmap.html`
- `validate_wordmap_data.js`
- `CONTRIBUTING.md`

Preferred implementation:
- Define the mapping in `wordmap_data.js`:

```js
const HIST_DESCENDANT = {
  en_ang: 'en',
  // ...
};
```

- Expose it to the browser the same way as `LANG_DATA`, `WORD_LIST`, `EXCLUDED_CODES`, and `DATA_STATUS_OVERRIDES`.
- Remove the `const HIST_DESCENDANT = {...}` block from `wordmap.html`.
- Update `validate_wordmap_data.js` so it reads `HIST_DESCENDANT` from the evaluated data context, not from `wordmap.html`.

Alternative implementation:
- Put per-language relationship in metadata:

```js
LANG_DATA['en_ang'].meta = {
  descendantCode: 'en'
}
```

- Then derive `HIST_DESCENDANT` at runtime and in validator.
- If this path is chosen, make sure duplicate descendants and missing reverse links are still validated.

Validator rules:
- Historical codes in `HIST_DESCENDANT` must exist in `LANG_DATA`.
- Descendant codes must exist in `LANG_DATA`.
- Historical codes in `HIST_DESCENDANT` must be in `EXCLUDED_CODES`.
- Historical codes in `HIST_DESCENDANT` must have non-modern `DATA_STATUS_OVERRIDES`.
- Non-modern `DATA_STATUS_OVERRIDES` rows should either:
  - have a descendant mapping, or
  - explicitly set `meta.noModernDescendantReason`.

Do not:
- Do not keep two independent `HIST_DESCENDANT` definitions.
- Do not keep regex scraping as the primary validator path.
- Do not move this mapping into a generated Markdown file; it must be machine-readable data.

Done when:
- `wordmap.html` consumes `HIST_DESCENDANT` but does not define it.
- `validate_wordmap_data.js` no longer regex-scrapes `wordmap.html` for data.
- Contributor instructions point to the single source of truth for adding a historical descendant relation.

### New Task 123. Add back-button and hash-change handling for URL state

Goal:
Make copied URLs, browser back/forward, and manual hash edits behave predictably. The current URL hash is useful, but it is mostly write-only after initial load.

Current issue I checked:
- `loadHash()` is called once during startup.
- `updateHash()` uses `history.replaceState()` for map movement and `history.pushState()` only when explicitly requested.
- I did not find a `popstate` or `hashchange` listener in `wordmap.html`.
- Result: if a user changes controls, follows a shared state, or uses browser back/forward, the UI may not fully re-read the hash after page load.

Files to change:
- `wordmap.html`
- optional: `CONTRIBUTING.md`

Implementation instructions:
- Add a single URL-state apply function that can be used both at startup and after navigation:

```js
function applyHashState({ fromNavigation = false } = {}) {
  // parse URLSearchParams(location.hash.slice(1))
  // apply word, lat/lng/z, nat, hist, fs, ui, g3d, alt, lang
  // update controls and map/globe without immediately writing a new hash again
}
```

- Replace the current `loadHash()` call with `applyHashState()`.
- Add listeners:

```js
window.addEventListener('popstate', () => applyHashState({ fromNavigation: true }));
window.addEventListener('hashchange', () => applyHashState({ fromNavigation: true }));
```

- Prevent feedback loops:
  - When `applyHashState()` is running because of navigation, do not call `updateHash()` until the state has been applied.
  - Use a small guard such as `let applyingHashState = false;`.
- After applying `hist`, call the same marker/filter refresh path used by the era toggle.
- After applying `ui`, call `applyUILang()` and dispatch `langmap:uichange`.
- After applying `lang`, open the modal only if the code is valid and visible in the selected era, or explicitly switch era if the URL says `hist=1`.

3D-specific checks:
- If `g3d=1`, initialize the globe before calling `globe.pointOfView()`.
- If `g3d=0` or missing, make sure the 2D map is visible and the 3D globe is hidden.
- If `alt` is invalid, derive altitude from `z`.

Test cases:
- Open a URL with `#w=water&hist=1&lang=zkt&ui=ja&g3d=0`; it should show historical mode and open Khitan.
- Open a URL with `#w=fire&hist=0&lang=ja&ui=ko`; it should show modern mode, Korean UI, and Japanese modal.
- Change word, open another modal, then use browser Back; the previous state should return.
- Switch 2D/3D, copy the URL, reload; the view should restore.

Do not:
- Do not add multiple competing hash parsers.
- Do not write to the hash while reading it, except after the full state is applied and user interaction resumes.
- Do not silently ignore invalid params without clamping or falling back.

Done when:
- Startup, reload, manual hash navigation, and browser back/forward all use the same state parser.
- URL state can restore word, era, UI language, map/globe view, font scale, and open modal reliably.
- No infinite hash/update loop occurs during map movement.

### New Task 124. Move remaining hardcoded UI strings into `WM_UI`

Goal:
Make all visible UI text localizable through the same dictionary. The main modal labels are localized, but several active UI strings are still hardcoded in `wordmap.html`.

Current issue I checked:
- `WM_UI` has complete key coverage across all 21 UI languages, but `wordmap.html` still contains hardcoded strings.
- Examples:
  - Search placeholder: `🔍 Search language…`
  - Search empty state: `No match`
  - Disabled search tooltip: `Toggle off the ... filter to select`
  - Era labels inside search result: `modern lang`, `historical lang`
  - Unattested cell label: `— (unattested)`
  - Source label nested ternary only covers a subset of languages.
  - Ancestor/descendant labels are nested ternaries and miss many UI languages.
  - Header nav still has Japanese literal `語順マップ`.
- This will become harder to maintain as new trust labels, script badges, fallback labels, and source labels are added.

Files to change:
- `wordmap_data.js`
- `wordmap.html`
- `validate_wordmap_data.js`
- optional: `lang-filter.js` if shared labels are reused there

Exact `WM_UI` keys to add:

```js
searchPlaceholder
searchNoMatch
searchToggleEraHint
modernLangShort
historicalLangShort
unattested
sources
modernDescendant
historicalAncestors
englishFallbackDescription
navOrderMap
toggle2d3d
togglePronunciation
```

Implementation instructions:
- Replace inline ternaries in `renderLangInfo()` with `wt(...)` calls.
- Replace the search placeholder after `applyUILang()` runs:

```js
document.getElementById('lang-search').placeholder = wt('searchPlaceholder');
```

- Replace `No match` with `wt('searchNoMatch')`.
- Replace the disabled search tooltip with a template helper:

```js
function wtFormat(key, vars) { ... }
```

Example value:

```js
searchToggleEraHint: 'Toggle off the {era} filter to select'
```

- Localize `— (unattested)` as:
  - ja: `—（未確認）`
  - ko: `— (미확인)`
  - zh: `—（未证实）`
  - en: `— (unattested)`
- Keep `—` itself unchanged as the data symbol.

Validator change:
- Add a list of required `WM_UI` keys.
- Error if any UI language lacks a required key.
- Add a simple scan warning for known hardcoded phrases in `wordmap.html`:
  - `No match`
  - `Search language`
  - `Toggle off`
  - `(unattested)`
  - `Modern descendant`
  - `Historical ancestors`

Do not:
- Do not add more nested language ternaries in `wordmap.html`.
- Do not use `LANG_NAMES` for UI labels; keep language names and UI strings separate.
- Do not translate the data symbol `—`; only translate the explanatory text.

Done when:
- Search, modal evidence/source labels, ancestor/descendant labels, and unattested labels are all served through `WM_UI`.
- Validator catches missing UI keys before runtime.
- Switching UI language updates search placeholder and currently open modal text.

### New Task 125. Add graceful fallback for external CDN assets

Goal:
Prevent the app from becoming blank or misleading when external assets fail to load. This matters for classrooms, offline demos, restrictive networks, and long-term archival use.

Current issue I checked:
- `wordmap.html` depends on external CDN assets:
  - Leaflet CSS/JS from `unpkg.com`
  - Globe.gl from `unpkg.com`
  - Google Fonts / Noto fonts
  - 3D globe images from `unpkg.com/three-globe`
- If any of these fail, the user may see broken styling, missing map controls, missing historical scripts, or a non-working 3D globe.
- There is no visible "asset failed to load" message or local fallback path.

Files to change:
- `wordmap.html`
- `styles.css`
- optional: `vendor/` or `assets/` if local copies are added
- `CONTRIBUTING.md`

Implementation instructions:
- Add a runtime dependency check after scripts load:

```js
const missingDeps = [];
if (typeof L === 'undefined') missingDeps.push('Leaflet');
if (typeof Globe === 'undefined') missingDeps.push('Globe.gl');
```

- If Leaflet is missing:
  - Show a clear localized error panel.
  - Do not leave a blank map.
- If Globe.gl is missing:
  - Disable the 3D toggle.
  - Keep the 2D map usable.
  - Show a tooltip/note that 3D assets are unavailable.
- If web fonts fail:
  - Ensure CSS font stacks include local fallbacks for historical scripts where possible.
  - Do not rely on a Google font being present for basic readability.

Recommended local fallback strategy:
- Phase 1:
  - Keep CDN primary.
  - Add visible failure handling.
- Phase 2:
  - Add local vendored copies for Leaflet CSS/JS and the minimal 3D assets if licensing allows.
  - Document how to update vendored files.

Validator / check script:
- Add a small static check that warns when a new external asset is added without a fallback note.
- Do not require network access in the validator.
- Check only the presence of known URLs and the fallback documentation.

Do not:
- Do not make 3D mandatory for using the word map.
- Do not let a missing globe texture break the 2D map.
- Do not silently hide historical scripts if fonts fail; show transliteration/main form and keep the modal usable.

Done when:
- With Globe.gl blocked, 2D still works and the 3D button is disabled.
- With Leaflet blocked, the page shows a readable localized failure message.
- The app has documented behavior for offline/restricted-network use.

### New Task 126. Complete `parentCode` coverage for dialect, regional, and variety rows

Goal:
Make language-variety relationships consistent. Some dialect/regional rows already have `meta.parentCode`, but other similar rows do not, so the UI and validator cannot reliably explain inheritance, duplication, or regional variation.

Current issue I checked:
- 57 rows currently have `meta.parentCode`.
- Several variant-looking rows use custom codes or regional labels but do not have `parentCode`.
- This makes coverage flags, duplicate-row explanations, and regional inheritance display incomplete.

Rows needing explicit decision:

```text
ja_oki  Okinawan                  candidate parent: none or ja?   Note: Ryukyuan, not merely Japanese dialect.
ja_mvi  Miyako                    candidate parent: ja_oki? none? Note: Ryukyuan branch, do not force under Standard Japanese.
ja_rys  Yaeyama                   candidate parent: ja_oki? none? Note: Ryukyuan branch, do not force under Standard Japanese.
ko_jeju  Jeju                     candidate parent: none or ko?   Note: Koreanic, often separate language.
ko_yb   Yanbian Korean            candidate parent: ko
hak_cn  Hakka                     candidate parent: zh? or none?  Note: Sinitic top-level variety, maybe parent for Hakka subrows.
es_eu   Spanish (Europe)          canonical parent/base for Spanish regional rows; should mark as base variety.
pt_eu   Portuguese (Europe)       canonical parent/base for Portuguese regional rows; should mark as base variety.
th_isan Thai (Isan)               candidate parent: th or lo?     Note: Lao/Thai continuum; do not oversimplify.
mn_cn   Inner Mongolian           candidate parent: mn
fr_ch   Swiss French              candidate parent: fr
es_co   Colombian Spanish         candidate parent: es_eu
es_cl   Chilean Spanish           candidate parent: es_eu
ja_kg   Japanese (Kagoshima)      candidate parent: ja
ja_sd   Japanese (Sendai)         candidate parent: ja
ko_hg   Korean (Hamgyong)         candidate parent: ko or ko_kp
ko_jl   Korean (Jeolla)           candidate parent: ko
wuu_nb  Ningbo Wu                 candidate parent: wuu
```

Files to change:
- `wordmap_meta.js`
- `validate_wordmap_data.js`
- `wordmap.html`
- `CONTRIBUTING.md`

Exact schema addition:

```js
meta: {
  parentCode: 'ja',
  varietyRole: 'base' | 'regional-variety' | 'dialect' | 'sibling-language' | 'continuum-member',
  parentRelationNote: {
    en: '...',
    ja: '...'
  }
}
```

Implementation instructions:
- For clear regional variants, add `parentCode`:
  - `ko_yb -> ko`
  - `mn_cn -> mn`
  - `fr_ch -> fr`
  - `es_co -> es_eu`
  - `es_cl -> es_eu`
  - `ja_kg -> ja`
  - `ja_sd -> ja`
  - `ko_jl -> ko`
  - `wuu_nb -> wuu`
- For sensitive sibling/continuum cases, do not force a simple parent without explanation:
  - `ja_oki`, `ja_mvi`, `ja_rys`: use `varietyRole: 'sibling-language'` or a Ryukyuan subgroup relation note.
  - `ko_jeju`: use `varietyRole: 'sibling-language'` or a careful Koreanic relation note.
  - `th_isan`: use `varietyRole: 'continuum-member'` and explain Lao/Thai relationship.
  - `hak_cn`: likely `varietyRole: 'base'` for Hakka subrows rather than child of Mandarin.
- For base rows such as `es_eu`, `pt_eu`, `hak_cn`, mark `varietyRole: 'base'` when they serve as parent rows.

UI behavior:
- In the modal, show a compact relation line when `parentCode` or `varietyRole` exists:
  - `Base variety: Spanish (Europe)`
  - `Regional variety of: Korean`
  - `Related branch: Ryukyuan`
- Do not imply that all `parentCode` relationships are genetic descent. For regional rows it often means "comparison base".

Validator rules:
- Warn when a code contains `_` and has no `parentCode`, no non-modern `dataStatus`, and no explicit `varietyRole`.
- Warn if `parentCode` points to a missing code.
- Warn if `varietyRole` is `regional-variety` or `dialect` but `parentCode` is missing.
- Warn if `varietyRole` is `base` but no other row points to it.

Do not:
- Do not classify Ryukyuan languages as simple Japanese dialects without note.
- Do not classify Jeju as merely `ko` without note.
- Do not use `parentCode` to hide real language status controversies.
- Do not add parent relationships only because the code prefix matches.

Done when:
- Every underscore/custom regional code has either `parentCode`, `dataStatus`, or an explicit `varietyRole`.
- The UI can explain why a row is a regional variety, base variety, sibling language, or continuum member.
- Validator prevents future unclassified variant rows.

### New Task 127. Add `locationBasis` first for high-risk representative points

Goal:
Prevent users from interpreting a single map point as the full speaker distribution. The map uses one representative coordinate per language, but the meaning of that point varies.

Current issue I checked:
- `locationBasis` is documented in `CONTRIBUTING.md`, but no current rows have `meta.locationBasis`.
- All 579 rows are missing it.
- Some coordinates represent a capital city, some a prestige center, some a historical site, some an approximate region, and some a modern political/cultural center.
- This is especially risky for wide-area languages, diasporic languages, endangered languages, and historical languages.

Files to change:
- `wordmap_meta.js`
- `wordmap.html`
- `validate_wordmap_data.js`
- `CONTRIBUTING.md`

Exact schema:

```js
meta: {
  locationBasis: {
    type: 'capital' | 'prestige-center' | 'largest-city' | 'regional-center' | 'historical-site' | 'approximate-region' | 'diaspora-center' | 'liturgical-center' | 'constructed-community',
    label: {
      en: 'Representative point: Tokyo, used as the modern standard-language center.',
      ja: '代表点: 東京。現代標準語の中心として使用。'
    },
    source: '...'
  }
}
```

First-pass priority rows:
- Wide-area / lingua franca rows:
  - `en`, `fr`, `ar`, `sw`, `ms`, `hi`, `es_eu`, `pt_eu`, `ru`
- Diaspora or revived rows:
  - `he`, `yi`, `rom`, `lad`, `ain`, `haw`, `chr`
- Historical / reconstructed rows:
  - `ine`, `la`, `sa`, `el_grc`, `sux`, `akk`, `egy`, `zkt`, `juc`, `txg`, `xmr`
- Regional variants where point could be confused with whole distribution:
  - `zh`, `yue`, `nan`, `wuu`, `hak_cn`, `ko_yb`, `mn_cn`, `th_isan`, `fr_af`

UI behavior:
- In the language modal, show a small line under countries or script:
  - `Map point: prestige center`
  - `Map point: historical site`
  - `Map point: approximate region`
- The label should be localized through `WM_UI`.
- Do not show this on map labels; modal is enough.

Validator rules:
- Phase 1:
  - Warn if high-priority rows above lack `locationBasis`.
- Phase 2:
  - Warn if any language lacks `locationBasis`.
- Validate enum values.
- Require `label.en`.
- Require `source` for historical-site and approximate-region values.

Do not:
- Do not move coordinates unless the current point is actually wrong.
- Do not pretend the point is a centroid of all speakers unless it really is.
- Do not use `countries` as a substitute for `locationBasis`.
- Do not require perfect GIS precision; the goal is honesty about what the point means.

Done when:
- High-priority rows have `locationBasis`.
- The modal explains representative-point meaning.
- Validator prevents new rows from adding unexplained coordinates.

### New Task 128. Update contributor docs and validator for the new `WORD_LIST.definition` shape

Goal:
Avoid future concept-definition drift. `WORD_LIST` now contains `definition` strings, but the docs and future roadmap still imply different shapes in places.

Current issue I checked:
- `wordmap_data.js` now has entries like:

```js
{ id: 'water', definition: 'Drinkable water (H₂O); ...', label: { ... } }
```

- `CONTRIBUTING.md` section "K. WORD_LIST shape" still says each entry is `{ id, label }`.
- Earlier audit tasks asked for multilingual definition objects such as `{ en, ja, ko, zh }`.
- If this remains ambiguous, Claude or future contributors may add some concepts with string definitions and others with object definitions.

Files to change:
- `wordmap_data.js`
- `wordmap.html`
- `validate_wordmap_data.js`
- `CONTRIBUTING.md`
- `wordmap-modern-audit.md` if needed to mark older roadmap language as superseded

Choose one canonical definition shape:

Option A, recommended:

```js
{
  id: 'heart',
  definition: {
    en: 'Heart — anatomical OR mind/soul, depending on language...',
    ja: '心。言語によって身体器官または心・感情を表す...',
    ko: '...',
    zh: '...'
  },
  label: { ... }
}
```

Option B:

```js
{
  id: 'heart',
  definition: 'English-only definition...',
  definitionI18n: {
    ja: '...',
    ko: '...',
    zh: '...'
  },
  label: { ... }
}
```

Implementation instructions:
- Pick Option A unless there is a strong reason not to.
- Convert all 20 existing `definition` strings into `definition.en`.
- Add at least `ja`, `ko`, and `zh` for all 20 concepts.
- Update modal/selector UI to display the definition in the current UI language with English fallback.
- If fallback occurs, reuse the fallback-label pattern from Task 121.

Validator rules:
- Every `WORD_LIST` entry must have:
  - `id`
  - `label.en`
  - `definition.en`
- Required initial definition translations:
  - `ja`
  - `ko`
  - `zh`
- Warn if a concept has a string `definition` after migration.
- Warn if a concept label exists for a UI language but the definition does not, once full rollout begins.

Documentation update:
- Replace the old `{ id, label }` example in `CONTRIBUTING.md`.
- Document that definitions define the intended concept, not just UI help text.
- Explicitly mention difficult concepts:
  - `heart`
  - `love`
  - `good`
  - `hello`
  - `eat`
  - `drink`

Do not:
- Do not leave mixed `definition: string` and `definition: object` shapes.
- Do not add UI hover-only definitions; they must be accessible on touch/mobile.
- Do not treat definitions as optional for new concepts.

Done when:
- All 20 `WORD_LIST` definitions use one canonical schema.
- Contributor docs match the actual schema.
- Validator catches old-shape definitions.

### New Task 129. Add explicit RTL / bidi handling for Arabic, Hebrew, Syriac, and Perso-Arabic rows

Goal:
Prevent right-to-left word forms from rendering in confusing order when mixed with IPA, slashes, parentheses, evidence markers, and Latin UI text.

Current issue I checked:
- I found 33 rows whose native name or word forms contain RTL scripts.
- `wordmap.html` does not currently use `dir="auto"`, `dir="rtl"`, `unicode-bidi`, or an equivalent wrapper around word cells.
- RTL data is displayed inside LTR table rows and map labels next to IPA/transcription, which can reorder punctuation visually.

RTL rows found:

```text
ur, ar, he, fa, sd, ckb, ps, ug,
ar_eg, ar_lev, ar_gulf, ar_iq, ar_ma, ar_tn, ar_sd,
yi, arc, skr, bal, ks, mzn, glk, lrc, hno, syr, brh,
syc, bqi, xqa, bsk, hbo, psi, haz
```

Files to change:
- `wordmap.html`
- `styles.css`
- `validate_wordmap_data.js`
- optional: `wordmap_meta.js` if explicit script direction metadata is added

Exact schema, if using metadata:

```js
meta: {
  textDirection: 'ltr' | 'rtl' | 'mixed' | 'auto'
}
```

Recommended implementation:
- Add a small helper:

```js
function textDirFor(value, langCode) {
  if ((LANG_DATA[langCode]?.meta || {}).textDirection) return LANG_DATA[langCode].meta.textDirection;
  return /[\u0590-\u05ff\u0600-\u06ff\u0700-\u074f\u0750-\u077f\u08a0-\u08ff]/.test(value) ? 'rtl' : 'ltr';
}
```

- Wrap word forms and native names:

```html
<span class="wm-form" dir="auto">...</span>
```

- For IPA/transcription cells, force LTR:

```html
<span class="wm-ipa" dir="ltr">/ ... /</span>
```

- Add CSS:

```css
.wm-form {
  unicode-bidi: isolate;
}
.wm-ipa {
  unicode-bidi: isolate;
}
```

- Use the same wrappers in:
  - map labels
  - 3D globe labels
  - language modal word table
  - search result native-name snippets

Validator rules:
- Detect rows containing RTL script characters.
- Warn if `meta.textDirection` is missing for rows with RTL forms after the schema is introduced.
- Warn if a row marked `textDirection: 'rtl'` has no RTL characters in native name or forms, unless `mixed`.

Do not:
- Do not set the entire page or modal to RTL for Arabic/Hebrew UI only; this task is about data cells, not full UI layout.
- Do not force IPA/transcription into RTL order.
- Do not strip punctuation or slashes to solve bidi issues.
- Do not assume all Arabic-script languages have identical typography; Syriac/Nastaliq still need isolation.

Done when:
- RTL word forms display in stable order next to IPA and evidence markers.
- IPA remains LTR.
- Search results and modal rows do not visually scramble punctuation for Arabic/Hebrew/Perso-Arabic data.

### New Task 130. Replace regex-only script detection with normalized script tags

Goal:
Make the script filter reliable. `meta.script` is free text, and `lang-filter.js` currently infers categories with regexes. This misses some important scripts and makes filters fragile.

Current issue I checked:
- `detectScript()` currently classifies scripts by matching text in `meta.script`.
- Running the same logic showed 7 rows falling into `Other`:

```text
hak_cn  Hakka                  script: Chinese
cdo     Min Dong               script: Chinese
ine     Proto-Indo-European    script: None (reconstructed)
sukh    Old Thai               script: Sukhothai script (1283 CE, devised by King Ramkhamhaeng)
zkt     Khitan                 script: Khitan Large Script / Khitan Small Script
juc     Jurchen                script: Jurchen script
och     Old Chinese            script: Oracle bone script / Bronze inscriptions / Seal script
```

- Several of these should not be generic `Other`:
  - `hak_cn`, `cdo`: should be Han.
  - `ine`: should be `None / reconstructed`, not a script category.
  - `sukh`: should be Brahmic or historical Thai/Sukhothai.
  - `zkt`: should be Khitan / Other historical.
  - `juc`: should be Jurchen / Other historical.
  - `och`: should be Oracle-bone / Bronze / Seal, i.e. Han-related historical script.

Files to change:
- `wordmap_meta.js`
- `lang-filter.js`
- `validate_wordmap_data.js`
- `CONTRIBUTING.md`

Exact schema:

```js
meta: {
  script: 'Khitan Large Script (920 CE) / Khitan Small Script (925 CE)',
  scriptTags: ['Khitan', 'Other historical'],
  scriptTagNote: {
    en: 'Khitan scripts are encoded/known historically but not generally readable as learner text.',
    ja: '契丹文字は歴史的文字として扱い、学習用本文では転写を併用する。'
  }
}
```

Allowed `scriptTags` initial enum:

```text
Latin
Han
Kana
Hangul
Cyrillic
Arabic-derived
Hebrew
Syriac
Brahmic
Greek
Armenian
Georgian
Ethiopic
Coptic
Cherokee
Tifinagh
Yi
Canadian Aboriginal Syllabics
Mongolian-derived
Cuneiform
Hieroglyphs
Aegean syllabary
Mayan
Old Turkic
Tangut
Khitan
Jurchen
Aramaic-derived
Other historical
None / reconstructed
Other
```

Implementation instructions:
- Add `meta.scriptTags` first for the 7 currently misclassified rows.
- Update `lang-filter.js`:
  - If `meta.scriptTags` exists, use it directly.
  - Else fall back to `detectScript(meta.script)`.
- Update `detectScript()` only as fallback, adding obvious misses:
  - `Chinese` → Han when used as a script label.
  - `Khitan` → `Khitan`, `Other historical`.
  - `Jurchen` → `Jurchen`, `Other historical`.
  - `Sukhothai script` → `Brahmic`, `Other historical`.
  - `Oracle bone`, `Bronze inscriptions`, `Seal script` → `Han`, `Other historical`.
  - `None (reconstructed)` → `None / reconstructed`.

Validator rules:
- If `meta.scriptTags` exists, all tags must be in the allowed enum.
- Warn if `detectScript(meta.script)` returns only `Other` and no `meta.scriptTags` exists.
- Warn if `scriptTags` includes `Other` without `scriptTagNote.en`.
- Warn if `scriptTags` includes `None / reconstructed` but dataStatus is not `reconstructed` or similar.

Do not:
- Do not keep adding fragile one-off regexes forever as the main model.
- Do not remove the human-readable `meta.script`; users still need readable script descriptions.
- Do not classify historical scripts as Latin just because the main word cells use transliteration.

Done when:
- The 7 current `Other` rows have intentional script tags.
- Script filter uses `scriptTags` when available.
- Validator catches future unclassified script strings.

### New Task 131. Align `locationBasis` schema placement between docs, validator, and future metadata

Goal:
Prevent Task 127 from being implemented in the wrong place. The current docs and validator disagree about where `locationBasis` belongs.

Current issue I checked:
- `CONTRIBUTING.md` describes `locationBasis` as part of the optional metadata schema near `speakerBasis`, `iso6393`, `parentCode`, and `sources`.
- Task 127 also proposes `meta.locationBasis`.
- But `validate_wordmap_data.js` currently checks:

```js
if (lang.locationBasis !== undefined && !LOCATION_BASIS.has(lang.locationBasis)) {
  E(`${code}: locationBasis "${lang.locationBasis}" not in enum`);
}
```

- That means a future implementation using `meta.locationBasis` could pass without validation, while a top-level `lang.locationBasis` would follow the old/simple enum.
- The validator enum also differs from Task 127:
  - current validator: `capital`, `prestige-center`, `historical-site`, `largest-city`, `approx-region`
  - Task 127 proposed: `capital`, `prestige-center`, `largest-city`, `regional-center`, `historical-site`, `approximate-region`, `diaspora-center`, `liturgical-center`, `constructed-community`

Files to change:
- `validate_wordmap_data.js`
- `CONTRIBUTING.md`
- `wordmap_meta.js`
- `wordmap-modern-audit.md` if marking the older shape as superseded

Decision:
- Use `meta.locationBasis` as the canonical location metadata location.
- Do not use top-level `LANG_DATA[code].locationBasis` for new data.

Canonical schema:

```js
meta: {
  locationBasis: {
    type: 'capital' | 'prestige-center' | 'largest-city' | 'regional-center' | 'historical-site' | 'approximate-region' | 'diaspora-center' | 'liturgical-center' | 'constructed-community',
    label: {
      en: 'Representative point: ...',
      ja: '代表点: ...'
    },
    source: '...'
  }
}
```

Migration instructions:
- Update validator to check `m.locationBasis`, not `lang.locationBasis`.
- If any future/top-level `lang.locationBasis` exists, warn:

```text
Use meta.locationBasis instead of top-level locationBasis.
```

- Rename old enum value `approx-region` to `approximate-region`.
- Require object shape:
  - `type`
  - `label.en`
  - optional localized labels
  - `source` for historical/approximate/diaspora/liturgical points

Validator rules:
- Error if `meta.locationBasis.type` is outside enum.
- Error if `meta.locationBasis.label.en` is missing.
- Warn if high-priority rows from Task 127 lack `meta.locationBasis`.
- Warn if both top-level `locationBasis` and `meta.locationBasis` exist.

Do not:
- Do not implement both top-level and meta-level location basis.
- Do not leave the validator checking only the old top-level field.
- Do not keep both `approx-region` and `approximate-region` as active values.

Done when:
- Docs, validator, and data all agree on `meta.locationBasis`.
- Task 127 can be implemented without schema ambiguity.
- Validator catches both wrong placement and wrong enum values.

### New Task 132. Localize evidence markers and remove English-only trust labels

Goal:
Make per-cell evidence markers understandable in every UI language. At the moment the symbols are useful, but their tooltip labels are effectively English-only except for Japanese.

Current issue I checked:
- `EVIDENCE_MARKER` in `wordmap.html` has only `label_en` and `label_ja`.
- `evidenceTooltip()` uses Japanese if `uiLang === 'ja'`, otherwise English.
- Therefore Korean, Chinese, Arabic, Hebrew, Thai, etc. users see English trust labels even though the rest of the modal is localized.
- Some Japanese data-status descriptions also contain English terms such as `attested`, `proxy`, `lexicon/grammar`, and `text record`.

Current marker labels:

```js
direct        -> directly attested
proxy         -> proxy from related lang
reconstructed -> reconstructed
inferred      -> inferred from context
disputed      -> disputed reading
pedagogical   -> pedagogical approx.
```

Files to change:
- `wordmap.html`
- `wordmap_data.js` if `WM_UI` is used
- `validate_wordmap_data.js`
- optional: `CONTRIBUTING.md`

Recommended implementation:
- Move evidence labels into `WM_UI` or a parallel `WM_EVIDENCE_LABELS` object.
- Required keys:

```js
evidenceDirect
evidenceProxy
evidenceReconstructed
evidenceInferred
evidenceDisputed
evidencePedagogical
evidenceSource
evidenceNote
```

- Update `evidenceTooltip(ev)` to use the current UI language:

```js
function evidenceLabel(kind) {
  return wt(`evidence${capitalize(kind)}`) || WM_UI.en[`evidence${capitalize(kind)}`];
}
```

- If `ev.source` exists, prefix it with localized `Source`.
- If `ev.note` exists, prefix it with localized `Note`.
- Keep the symbols (`✓`, `~`, `*`, `?`, `⁉`, `◇`) unchanged.

Data-status description cleanup:
- Remove English words from localized descriptions where possible:
  - Japanese `直接 attested` → `直接確認`
  - Japanese `proxy` → `代用形`
  - Japanese `lexicon/grammar` → `語彙・文法`
  - Japanese `text record` → `文字資料`
  - Korean `proxy`, `attested` → Korean equivalents
- Add all 21 UI-language descriptions if practical, or visibly show fallback using the Task 121 fallback pattern.

Validator rules:
- Error if any evidence enum lacks a label in `WM_UI.en`.
- Warn if any current UI language lacks evidence labels.
- Add a scan warning for `label_en` / `label_ja` evidence marker objects after migration.
- Add a scan warning for known English trust terms inside non-English `DATA_STATUS_BADGE.descs`:
  - `attested`
  - `proxy`
  - `lexicon`
  - `grammar`
  - `text record`

Do not:
- Do not translate evidence symbols themselves.
- Do not remove the evidence marker just because labels are incomplete.
- Do not leave new trust labels as nested ternaries in `wordmap.html`.

Done when:
- Evidence tooltips are localized through the same UI-label system as the rest of the app.
- Non-English status descriptions no longer contain unexplained English trust terminology.
- Validator prevents future English-only trust labels.

### New Task 133. Upgrade `wordEvidence` source strings to structured citations

Goal:
Make per-cell evidence auditable. The current evidence overlay tells users that a form is direct/proxy/inferred, but sources are mostly free-text strings with no URL, bibliographic type, or stable citation shape.

Current issue I checked:
- Current `wordEvidence` adoption:
  - 172 annotated cells
  - 148 cells have `source`
  - 24 cells have `note`
  - 0 cells have both `source` and `note`
  - 0 cells have structured URL fields
- This means the UI can show short text, but cannot reliably build a bibliography, link to a source, or distinguish "dictionary", "grammar", "inscription", and "internal note".

Files to change:
- `wordmap_data.js`
- `wordmap.html`
- `validate_wordmap_data.js`
- `CONTRIBUTING.md`

Exact schema:

```js
wordEvidence: {
  water: {
    evidence: 'direct' | 'proxy' | 'reconstructed' | 'inferred' | 'disputed' | 'pedagogical',
    citation: {
      short: 'Kane 2009',
      type: 'dictionary' | 'grammar' | 'inscription' | 'wordlist' | 'database' | 'article' | 'internal-review',
      title: 'The Kitan Language and Script',
      author: 'Daniel Kane',
      year: 2009,
      url: '...',
      page: '...',
      accessed: 'YYYY-MM-DD'
    },
    note: {
      en: '...',
      ja: '...'
    }
  }
}
```

Migration strategy:
- Phase 1:
  - Keep existing `source` string supported.
  - Add `citation.short` for new or edited evidence entries.
  - UI prefers `citation.short`, falls back to `source`.
- Phase 2:
  - Convert high-risk historical rows first:
    - `zkt`, `juc`, `xmr`, `pyx`, `elx`, `xsc`, `xpr`, `omc`, `chb`
  - Convert modern minority rows with recently fixed IPA/tone data:
    - `nxq`, `pcc`, `iuu`, `tji`, `wbm`, `khb`, `shn`, `lhu`
- Phase 3:
  - Warn on legacy `source` without `citation`.

UI behavior:
- Evidence tooltip should show:
  - evidence label
  - citation short label
  - note if present
- Modal source footer should dedupe structured citations by `citation.short` or stable key.
- If `citation.url` exists, render a safe clickable link in the source footer.
- Do not put long bibliography text inside the word table cell.

Validator rules:
- If `citation` exists, require:
  - `short`
  - `type`
- Validate `type` enum.
- Validate `year` if present.
- Validate `url` if present:
  - must start with `https://` or a safe relative path.
  - no `javascript:` URLs.
- Warn if `evidence` is `direct`, `proxy`, `reconstructed`, or `disputed` and neither `source` nor `citation.short` exists.
- Warn if `note` is a plain string after note i18n migration begins.

Do not:
- Do not remove existing evidence notes during migration.
- Do not require every one of 11,580 cells to have citations immediately.
- Do not use URLs as the only citation; keep short readable labels for offline display.
- Do not make evidence tooltip huge.

Done when:
- New evidence entries can carry structured citations.
- High-risk historical rows have structured citations.
- Source footer can render deduped citation labels and safe links.

### New Task 134. Centralize cache-buster versions for wordmap assets

Goal:
Avoid stale data bugs caused by manually updated `?v=` numbers scattered through `wordmap.html`.

Current issue I checked:
- Current asset versions in `wordmap.html`:

```text
styles.css?v=54
wordmap_data.js?v=53
meta_i18n_ext.js?v=8
lang-filter.js?v=22
lang_names.js?v=2
dynamic wordmap_meta.js?v=18
```

- `CONTRIBUTING.md` says to bump cache busters, but this is easy to miss.
- `wordmap_meta.js` is loaded dynamically inside `loadMeta()`, so its version is far away from the main script tags.
- If Claude edits `wordmap_meta.js` but forgets `s.src = 'wordmap_meta.js?v=18'`, users may keep seeing old metadata.

Files to change:
- `wordmap.html`
- `validate_wordmap_data.js`
- `CONTRIBUTING.md`
- optional: a small generated manifest file

Recommended implementation:
- Add one central version object near the top of the inline script:

```js
const WM_ASSET_VERSION = {
  styles: 54,
  data: 53,
  metaI18n: 8,
  filter: 22,
  names: 2,
  meta: 18
};
```

- Use helper functions for dynamic URLs:

```js
function assetUrl(path, key) {
  return `${path}?v=${WM_ASSET_VERSION[key]}`;
}
```

- For static tags, either:
  - keep current explicit URLs but add validator checks, or
  - generate/inject them from the version object if the codebase supports it.
- For `loadMeta()`, replace the hardcoded string:

```js
s.src = assetUrl('wordmap_meta.js', 'meta');
```

Validator rules:
- Static check that all expected wordmap assets have a cache-buster:
  - `styles.css`
  - `wordmap_data.js`
  - `meta_i18n_ext.js`
  - `lang-filter.js`
  - `lang_names.js`
  - `wordmap_meta.js`
- Warn if the dynamic `wordmap_meta.js` version is hardcoded outside the central version object.
- Optional but useful:
  - compare file modification time or git diff names against changed version keys and warn if a changed asset did not have its version bumped.

Do not:
- Do not remove cache busters entirely.
- Do not rely on browser cache behavior during development as proof production is safe.
- Do not put the meta version in a separate hidden location from other versions.

Done when:
- All wordmap asset versions are visible in one place.
- Dynamic metadata loading uses the same cache-buster mechanism.
- Validator warns when a wordmap asset URL is missing or bypasses the central version rule.

### New Task 135. Make map and globe labels keyboard-accessible

Goal:
Allow users to open language details without a mouse or touch pointer. The map labels are the primary data entry point, but they are currently effectively pointer-only.

Current issue I checked:
- 2D labels are generated by `buildLabelHtml()` as plain `<div class="lang-label" data-code="...">`.
- Leaflet markers listen for `marker.on('click', ...)`.
- 3D globe labels listen for pointer/click events on `.globe-label`.
- The generated label elements have no `tabindex`, no `role="button"`, and no keyboard activation handler.
- This means keyboard-only users cannot tab through or open map labels reliably.

Files to change:
- `wordmap.html`
- `styles.css`
- `validate_wordmap_data.js` if adding static checks

Implementation instructions:
- Update `buildLabelHtml()` so generated labels include:

```html
<div
  class="lang-label ..."
  data-code="..."
  role="button"
  tabindex="0"
  aria-label="..."
>
```

- The `aria-label` should include:
  - localized language name
  - current concept label
  - current form
  - pronunciation/transcription if visible or available
- Add a shared keyboard handler for both 2D and 3D labels:

```js
function handleLabelKeydown(e) {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const label = e.target.closest('.lang-label, .globe-label');
  if (!label) return;
  e.preventDefault();
  const code = label.dataset.code;
  if (code && LANG_DATA[code]) showLangInfo(code);
}
```

- Attach it with event delegation:
  - map container or document for `.lang-label`
  - `globeEl` for `.globe-label`
- Add visible focus styling:

```css
.lang-label:focus-visible,
.globe-label:focus-visible {
  outline: 2px solid #1a73e8;
  outline-offset: 2px;
}
```

- When labels are dimmed by filters, either:
  - keep them focusable but explain filtered state in `aria-label`, or
  - remove them from tab order with `tabindex="-1"`.
  Pick one policy and document it.

Validator / static check:
- Warn if `buildLabelHtml()` does not include `role="button"` and `tabindex`.
- Warn if `.lang-label:focus-visible` styling is missing.

Do not:
- Do not make every hidden/unattested marker focusable.
- Do not rely on browser `title` attributes for accessibility.
- Do not add keyboard handlers only for 2D and forget 3D.
- Do not make labels focusable without a visible focus indicator.

Done when:
- Users can tab to visible labels and press Enter/Space to open the language modal.
- Focus state is visible.
- 2D and 3D labels follow the same keyboard behavior.

### New Task 136. Convert language search dropdown into a real combobox/listbox

Goal:
Make language search usable and predictable with keyboard and screen readers. The current search works visually, but the dropdown is plain `<div>` markup with no active-descendant model.

Current issue I checked:
- `#lang-search` is a plain text input.
- `#lang-search-results` is a plain div.
- Search result items are plain `<div class="lang-search-item">`.
- There is no `role="combobox"`, `role="listbox"`, `role="option"`, `aria-expanded`, `aria-controls`, or `aria-activedescendant`.
- Arrow keys, Enter selection, and Escape close behavior are not implemented for search results.
- The live preview currently opens a modal for the top enabled match while typing, which can be surprising for keyboard/screen-reader users.

Files to change:
- `wordmap.html`
- `styles.css`
- `validate_wordmap_data.js` if adding static checks
- `wordmap_data.js` if new localized labels are needed

Implementation instructions:
- Add combobox attributes to the input:

```html
<input
  id="lang-search"
  role="combobox"
  aria-autocomplete="list"
  aria-expanded="false"
  aria-controls="lang-search-results"
  aria-activedescendant=""
>
```

- Add listbox role:

```html
<div id="lang-search-results" role="listbox"></div>
```

- Render each enabled result as:

```html
<div
  id="lang-search-option-0"
  role="option"
  class="lang-search-item"
  data-code="..."
  aria-selected="false"
>
```

- Disabled off-era results should either:
  - use `aria-disabled="true"`, or
  - be excluded from the listbox and shown in a separate non-interactive note.
- Implement keyboard behavior:
  - ArrowDown / ArrowUp moves active option.
  - Enter selects active enabled option.
  - Escape closes the dropdown without opening a modal.
  - Tab leaves the input normally.
- Update `aria-expanded` when results open/close.
- Update `aria-activedescendant` as the active option changes.

Live preview policy:
- Stop automatically opening the modal while typing by default.
- Instead:
  - highlight the top result visually,
  - open the modal only on Enter/click, or
  - add an explicit setting if live preview is desired.
- This avoids search typing changing the main content unexpectedly.

Localization:
- Use Task 124 `WM_UI` keys for:
  - no match
  - disabled/off-era hint
  - result count if added

Validator / static check:
- Warn if `#lang-search` lacks `role="combobox"`.
- Warn if `#lang-search-results` lacks `role="listbox"`.
- Warn if search result rendering lacks `role="option"`.

Do not:
- Do not keep mouse-only result selection.
- Do not use hover state as the only active state.
- Do not open/close the language modal as a side effect of merely typing unless the user explicitly enables preview.

Done when:
- Search can be used fully with keyboard.
- Screen readers receive combobox/listbox semantics.
- Typing in search no longer unexpectedly changes the open modal.

### New Task 137. Complete dialog focus management for the language info panel

Goal:
Make the language info panel behave like a real dialog. It has `role="dialog"`, but focus and modal semantics are incomplete.

Current issue I checked:
- `#lang-info` has `role="dialog"` and `aria-labelledby="lang-info-heading"`.
- Earlier review already noted the heading id issue.
- The panel uses `aria-modal="false"`, but it visually behaves like an overlay/panel that can cover content.
- Opening the panel does not move focus into it.
- Closing the panel does not restore focus to the label/search result/control that opened it.
- Escape closes the panel, but focus restoration is not handled.

Files to change:
- `wordmap.html`
- `styles.css`
- `validate_wordmap_data.js`

Implementation instructions:
- Track the opener before opening:

```js
let lastDialogOpener = null;

function showLangInfo(code, opener = document.activeElement) {
  lastDialogOpener = opener;
  ...
}
```

- Pass opener from:
  - map label click/keydown
  - 3D label click/keydown
  - search result click/Enter
  - ancestor/descendant links
- Give the dialog a stable heading id:

```html
<h2 id="lang-info-heading">...</h2>
```

- Make the panel focusable:

```html
<div id="lang-info" tabindex="-1" ...>
```

- After opening, move focus to:
  - the close button, or
  - the dialog container, depending on the better UX after testing.
- On close:

```js
if (lastDialogOpener && document.contains(lastDialogOpener)) {
  lastDialogOpener.focus();
}
```

- Decide modal semantics:
  - If users can still interact with map controls behind it, keep `aria-modal="false"` and call it a non-modal panel.
  - If it should behave as a blocking dialog, set `aria-modal="true"` and add a focus trap.
- Document the chosen behavior in comments.

Focus trap only if modal:
- Trap Tab/Shift+Tab within the panel.
- Do not trap focus if `aria-modal="false"`.

Validator / static check:
- Warn if `aria-labelledby="lang-info-heading"` exists but no `id="lang-info-heading"` is rendered.
- Warn if a `role="dialog"` element lacks `tabindex="-1"` or a documented focus target.
- Warn if `closeInfoPanel()` does not attempt focus restoration after this task is implemented.

Do not:
- Do not set `aria-modal="true"` without a focus trap.
- Do not move focus on every modal re-render; move it only when opening a new panel.
- Do not restore focus to a removed Leaflet marker without checking `document.contains()`.

Done when:
- Opening the language panel moves focus predictably.
- Closing it restores focus to the opener when possible.
- Dialog semantics match actual behavior.

### New Task 138. Quarantine or update obsolete helper scripts that edit the wrong data layer

Goal:
Prevent old one-off scripts from being accidentally reused against the wrong dataset. The repository now has a Word Map data layer, but several helper scripts still target the older sentence-map `data.js`.

Current issue I checked:
- The following scripts are still present at repository root:
  - `add_new_langs.py`
  - `add_egy.py`
  - `add_sa_la.py`
  - `fix_wuu.py`
- They directly read and rewrite `data.js`.
- They use regex/JSON rewriting of `const SENTENCES = ...`.
- They are not Word Map scripts, but their names are broad enough to be mistaken for current language-data maintenance tools.
- Some import paths reference helper modules such as `data_mg_fi`, `data_ain`, `data_sa`, etc.; these are not obvious in the current root listing and may be stale.

Files to change:
- `add_new_langs.py`
- `add_egy.py`
- `add_sa_la.py`
- `fix_wuu.py`
- `README.md`
- `CONTRIBUTING.md`
- optional: move files into `legacy/`

Implementation instructions:
- Choose one policy:
  - **Option A, preferred:** Move these scripts to `legacy/sentence-map-tools/`.
  - **Option B:** Keep them in root but rename with a clear prefix, e.g. `legacy_add_new_sentence_langs.py`.
- Add a header comment to each script:

```py
"""
LEGACY SENTENCE MAP TOOL.
This edits data.js (sentence/order map), not wordmap_data.js.
Do not use for Word Map language data.
"""
```

- Add a runtime safety confirmation before writing:

```py
if '--i-know-this-edits-data-js' not in sys.argv:
    raise SystemExit('Refusing to edit data.js without explicit legacy flag.')
```

- Replace absolute paths like `/home/jounlai/langmap/data.js` with repo-relative paths based on `__file__`.
- If the imported `data_*` modules are no longer present, either:
  - restore/document them, or
  - mark the script as archived and non-runnable.

Validator / static check:
- Add a check in `validate_wordmap_data.js` or a separate maintenance check:
  - warn if root-level `add_*.py` scripts exist and are not marked `LEGACY SENTENCE MAP TOOL`.
  - warn if a script writes `data.js` without an explicit safety flag.

Do not:
- Do not delete historical scripts silently if they may still document past work.
- Do not let scripts named `add_new_langs.py` remain ambiguous at root.
- Do not adapt these sentence-map scripts to Word Map by quick regex hacks.

Done when:
- Legacy scripts cannot be confused with Word Map maintenance tools.
- Running a legacy script requires explicit acknowledgement.
- README/CONTRIBUTING point Word Map contributors to `wordmap_data.js`, `wordmap_meta.js`, and `validate_wordmap_data.js`, not these scripts.

### New Task 139. Update README validation instructions so Word Map contributors do not run the wrong checker

Goal:
Make the project documentation match the current split between the sentence/order map and the Word Map. Right now README still emphasizes `validate_data.py`, which does not validate `wordmap_data.js`.

Current issue I checked:
- `README.md` still says:
  - `validate_data.py — Data validation script`
  - `Run python3 validate_data.py before committing`
- `CONTRIBUTING.md` has newer Word Map sections that mention `node validate_wordmap_data.js`, but README is the more visible entry point.
- A contributor editing `wordmap_data.js` could follow README and run only `validate_data.py`, missing Word Map-specific errors.

Files to change:
- `README.md`
- `CONTRIBUTING.md`
- optional: `changelog.html`

Implementation instructions:
- Split validation docs into two sections:

```md
### Sentence / Word Order Map validation

Run:
python3 validate_data.py

This checks `data.js` and the sentence segmentation/order map.

### Word Map validation

Run:
node validate_wordmap_data.js

This checks `wordmap_data.js`, `wordmap_meta.js`, `lang_names.js`,
historical-language status, word-entry shape, metadata, i18n coverage,
and Word Map-specific invariants.
```

- In any generic "before committing" section, say:

```md
If you changed Word Map files, run `node validate_wordmap_data.js`.
If you changed sentence/order-map files, run `python3 validate_data.py`.
If you changed both, run both.
```

- List common Word Map files:
  - `wordmap.html`
  - `wordmap_data.js`
  - `wordmap_meta.js`
  - `meta_i18n_ext.js`
  - `lang_names.js`
  - `lang-filter.js`
  - `validate_wordmap_data.js`

Validator/static check:
- Add a docs consistency check if practical:
  - warn if README mentions `validate_data.py` but not `validate_wordmap_data.js`.
  - warn if Word Map file names are listed without the Word Map validator.

Do not:
- Do not remove `validate_data.py`; it is still relevant for the sentence/order map.
- Do not imply `validate_data.py` validates Word Map data.
- Do not bury `validate_wordmap_data.js` only in CONTRIBUTING.

Done when:
- README clearly tells Word Map contributors to run `node validate_wordmap_data.js`.
- The two validators' scopes are described separately.
- A new contributor can tell which validator applies to which files.

### New Task 140. Add minimal CI or pre-commit validation for Word Map data

Goal:
Stop relying on humans and Claude sessions to remember validation commands. The Word Map now has many schema rules, but there is no visible automated CI/pre-commit hook in the repo.

Current issue I checked:
- I did not find a `.github/workflows` directory.
- There is no `package.json` test script.
- `node validate_wordmap_data.js` currently passes, but it must be run manually.
- With frequent edits from multiple tools/sessions, manual validation is easy to skip.

Files to change:
- `.github/workflows/wordmap-validate.yml` or equivalent CI config
- optional: `package.json`
- optional: `.pre-commit-config.yaml`
- `README.md`
- `CONTRIBUTING.md`

Recommended GitHub Actions workflow:

```yaml
name: Word Map validation

on:
  pull_request:
  push:
    branches: [ main ]

jobs:
  validate-wordmap:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: node validate_wordmap_data.js
```

Optional second job:

```yaml
  validate-sentence-map:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.11'
      - run: python3 validate_data.py
```

If GitHub Actions is not desired:
- Add a local script:

```json
{
  "scripts": {
    "validate:wordmap": "node validate_wordmap_data.js",
    "validate:sentences": "python3 validate_data.py"
  }
}
```

- Document it in README/CONTRIBUTING.

Do not:
- Do not add a CI job that requires network access for normal validation.
- Do not make CI depend on external map/font/CDN availability.
- Do not run browser screenshot tests in the first minimal validation job unless dependencies are added intentionally.

Done when:
- Every PR/push can automatically run `node validate_wordmap_data.js`.
- The validation command is documented and discoverable.
- Future schema regressions are caught without relying on manual memory.

### New Task 141. Add Tier 1 missing high-speaker / linguistically anchoring languages

Goal:
Close family-coverage gaps where a notable speaker base or a unique typological/historical role makes the absence visible to linguists. Each entry below either anchors a major sub-branch that the map currently leaves dangling or pairs with a sibling row that is already present.

Current issue I checked (codes verified absent at top level of `wordmap_data.js` on 2026-05-06):
- `cv` Chuvash — ~1M speakers; sole surviving Oghur Turkic branch. Preserves Proto-Turkic features (rhotacism r↔z, lambdacism l↔š). Without it, the Turkic axis on the map collapses the deepest split.
- `bua` Buryat — Mongolic, ~440K. Russia / Mongolia / China cross-border. Conservative Mongolic, complements `mn`, `xal`.
- `chm` Mari — Volga-Finnic Uralic, ~470K. Major Uralic branch currently unrepresented.
- `mdf` Moksha — Mordvinic, ~250K. Sister to `myv` Erzya, which is already present; the Mordvinic pair is incomplete without it.
- `kpv` Komi-Zyrian + `koi` Komi-Permyak — Permic Uralic, combined ~160K. Permic branch otherwise absent.
- `dv` Dhivehi / Maldivian — Indo-Aryan, ~340K. Official language of the Maldives. Distinct island-state development from Sinhala (`si`).
- `bcl` Central Bikol — Philippine Austronesian, ~2.5M. Visible gap next to `tl`, `ceb`, `hil`, `war`, `pam`, `ilo`, `bik`, `pag`.
- `tzh` Tzeltal — Mayan, ~600K. Direct sister to `tzo` Tzotzil, which is already present.
- `rmy` Vlax Romani — most-spoken Romani variety, ~1.5M. The macrolanguage `rom` is present but does not represent Vlax phonology/lexicon.
- `tw` Twi (Asante / Akuapem) — ~9M. `ak` Akan macro is present, but Twi is commonly cited as a separate label and is the most visible Akan variety to non-specialists.

Files to change:
- `wordmap_data.js` — add 20-word entries for each new code (with IPA + romanization where applicable).
- `wordmap_meta.js` — add per-language metadata: family, region, scriptHints, sources, parentCode where appropriate, locationBasis.
- `lang_names.js` — add display names (English + native) for each.
- `meta_i18n_coverage.js` / `meta_i18n_ext.js` — add translations for the new language descriptions where the existing coverage matrix expects them.
- `lang-filter.js` — confirm new family/region tags are recognized; extend filter taxonomies if a new family bucket is needed (e.g. Permic).
- `changelog.html` — credit the suggestion + list the additions.

Implementation instructions:
- Source data only from named, citeable references (Glottolog, Ethnologue, peer-reviewed grammars, UNESCO Atlas). Record the source in `wordmap_meta.js` `sources` per language. Avoid uncited web aggregators.
- Set `parentCode` only when there is an actual immediate parent on the map (e.g. `mdf` → no parent; `bcl` → no parent unless a Philippine macro is added).
- Use the same per-concept structure as existing entries: `{ word, ipa, romanization?, evidence?, wordEvidence? }`.
- For IPA, follow the project's conventions: real IPA only, no capital `N` placeholders (see Task 2).
- For RTL or non-Latin scripts: confirm `scriptHints` and that the row passes Task 129 (RTL/bidi) and Task 130 (script tags) expectations.
- Coordinates: choose a representative city, not a country centroid. Add `locationBasis` per Task 127 if the choice is non-obvious (e.g. Buryat → Ulan-Ude; Mari → Yoshkar-Ola; Tzeltal → Ocosingo or San Cristóbal; Dhivehi → Malé; Vlax Romani → diaspora-aware note rather than a single coordinate).
- For Vlax Romani specifically: document why it is added next to the existing `rom` macro row and what dialect base (e.g. Kalderash, Lovari) the surface forms reflect.
- Run `node validate_wordmap_data.js` after each language is added; do not batch-merge before validation passes.
- Bump the cache-buster in `wordmap.html` per Task 134 once added.

Validator / static check:
- Extend `validate_wordmap_data.js` (or a follow-up check) to warn when `myv` is present but `mdf` is absent (and similar paired-sibling expectations: `tzo`/`tzh`, `kpv`/`koi`, `sma`/`smj`/`smn`/`sms`).
- Continue to require the schema fields already enforced for existing rows.

Do not:
- Do not invent IPA. If a reliable transcription cannot be cited, mark the field unattested and leave evidence notes rather than guessing.
- Do not collapse `mdf` and `myv` into one row; they are mutually unintelligible enough that linguists treat them separately.
- Do not add `tw` Twi as a duplicate of `ak` Akan — choose the Asante or Akuapem standard explicitly and note it in `wordmap_meta.js`.
- Do not pick a coordinate inside Russia for `bua` without acknowledging the cross-border distribution in metadata.

Done when:
- All 10 codes (`cv`, `bua`, `chm`, `mdf`, `kpv`, `koi`, `dv`, `bcl`, `tzh`, `rmy`, `tw`) have full word + meta + name entries.
- `node validate_wordmap_data.js` passes with no new warnings introduced.
- Family-coverage gaps for Oghur Turkic, Mongolic (Buryat), Volga-Finnic, Permic, Mordvinic pair completion, island Indo-Aryan, Mayan pair completion, and Vlax Romani are visibly closed in the language filter UI.
- Changelog credits the gap analysis (2026-05-06).

### New Task 142. Add Tier 2 linguistically significant but smaller-corpus languages

Goal:
Improve typological / endangerment / modality coverage with languages that, while smaller in speaker count than Tier 1, are repeatedly cited in linguistic literature, are critically endangered, or represent a modality (signed) entirely absent from the map.

Current issue I checked (codes verified absent or partially absent on 2026-05-06):
- Sign languages — completely absent. No `ase` (American Sign Language), `bfi` (British Sign Language), `jsl` (Japanese Sign Language), `fsl` (French Sign Language), `gsg` / `gss` (German / Greek), `csl` (Chinese), `kvk` (Korean). The map currently has zero signed-modality rows.
- Saami varieties — `sma` Southern and `se` Northern are present; `smj` Lule, `smn` Inari, `sms` Skolt are missing. The Saami sub-branch coverage is uneven.
- `vep` Veps and `vot` Votic — endangered Finnic. Both are heavily studied for Balto-Finnic typology and language-death cases.
- `rhg` Rohingya — Indo-Aryan, ~1.8M, sociolinguistically and politically prominent; often cited in script-choice and refugee-language discussions.
- `ctg` Chittagonian — ~13M speakers, frequently raised in debates about Bengali macrolanguage boundaries.
- Optional add-ons (lower priority but recurring in linguistic typology): `itl` Itelmen (Chukotko-Kamchatkan, near-extinct), `yux` Yukaghir (isolate / small family).

Files to change:
- `wordmap_data.js`, `wordmap_meta.js`, `lang_names.js`, `meta_i18n_coverage.js`, `meta_i18n_ext.js`, `lang-filter.js`, `changelog.html` (same set as Task 141).
- `wordmap.html` — add modality handling for sign languages if added (see Implementation instructions).
- `styles.css` — sign-language rows likely need a different presentation style (image/video placeholder, or explicit modality badge).

Implementation instructions:
- Decide modality policy for sign languages before adding rows:
  - **Option A:** Add sign languages with a `modality: "signed"` field in `wordmap_meta.js`, render a clear badge in the row, and use SignWriting (`Sutton SignWriting` Unicode block) or a citable gloss + free-form notation for the surface field. Treat the IPA field as a structured handshape/movement notation, not phonetic IPA, and document that in CONTRIBUTING.
  - **Option B:** Add sign languages with the surface field linking to a curated video URL (Wikimedia Commons / SignBank) and leave IPA empty, with metadata flagging modality.
  - **Option C (defer):** Document the gap, do not add rows yet, but reserve the codes in metadata so they are not forgotten.
  - Pick one option in this task; do not mix policies across rows.
- For Saami varieties, follow the same source/IPA standards as Tier 1.
- For Rohingya, prefer the Hanifi Rohingya script for the surface where attested; provide Latin and Arabic alternates per Task 119.
- For Veps and Votic, mark as critically endangered in `wordmap_meta.js` (`vitality: "endangered"` if the schema supports it, otherwise free-form note + source).
- For Chittagonian, document the macrolanguage relationship to Bengali (`bn`) explicitly in `wordmap_meta.js` notes rather than guessing.

Validator / static check:
- If sign languages are added, extend the validator to require `modality` to be set when a row is signed, and to skip phonetic-IPA checks for those rows.
- Warn if `sma` or `se` exists but no other Saami varieties — current state.

Do not:
- Do not silently treat sign-language IPA as phonetic IPA; the existing IPA validation rules will produce false positives.
- Do not add Rohingya in only Latin script when Hanifi attestations exist for the same lexical items.
- Do not mark Veps or Votic as "regional dialects" of Finnish or Estonian; they are distinct languages.
- Do not let optional add-ons (Itelmen, Yukaghir) block merging the rest of Tier 2.

Done when:
- Saami sub-branch is balanced: `smj`, `smn`, `sms` added next to existing `sma`, `se`.
- Endangered Finnic pair `vep`, `vot` is present with explicit endangerment metadata.
- Rohingya and Chittagonian are present with script and macrolanguage notes.
- Sign-language modality decision is documented in CONTRIBUTING and at least the chosen option is implemented for `ase` and `bfi` as the first two pilots — or, if Option C is chosen, the deferral and reasoning are recorded in this audit file.
- `node validate_wordmap_data.js` passes; modality-aware rules (if added) cover the new rows.
- Changelog credits the gap analysis (2026-05-06) and lists the additions.

---

## Verification Sweep (2026-05-06 part 9)

This block records what is *still open* after a source-vs-feedback verification of `wordmap-modern-audit-feedback.md`. The feedback file claims many tasks complete; verification confirmed almost all schema/UI claims (codeType 595/595, languageKind, surfaceType, locationBasis, scriptDisplayPolicy, formType/citation, WM_ASSET_VERSION, hash/popstate, combobox ARIA, dialog focus, CDN fallback, RTL bidi, era help icon, multiword formType, GitHub Actions CI, legacy script headers, Pronunciation/IPA Policy section). Issues below are gaps the verification surfaced.

### New Task 143. Finish in-flight Tier 1 language additions before merging

Goal:
Close the partial state introduced by adding `cv`, `dv`, `tzh`, `mdf` (Task 141 first wave) to `wordmap_data.js` and `wordmap_meta.js` without parallel updates in `lang_names.js` and the historical/recent description-i18n bucket. Right now the validator reports 21 fresh `lang_names.<UI>: 591/595 (missing: cv, dv, tzh, mdf)` warnings — one per UI language. The languages currently render with raw codes in dropdowns and search.

Current issue I checked (2026-05-06):
- `wordmap_data.js`: `cv` (line 179), `dv` (318), `tzh` (1171), `mdf` (1374) all have full 20-word entries.
- `wordmap_meta.js`: all four have full meta blocks (family, speakers, sources, parentCode/varietyRole, RTL flag for `dv`).
- `lang_names.js`: all four are missing from every one of the 21 UI sections.
- `bxr` Buryat and `nci` Classical Nahuatl are present in data + meta but only in **3** of 21 UI sections of `lang_names.js`. They predate this batch and do not show up in the new validator warnings (the validator seems to only flag the most recent diff), but they are equally incomplete and should be filled in alongside.
- Validator delta: 17 pre-existing warnings → 38 warnings (21 new lang_names rows). 0 errors.

Files to change:
- `lang_names.js` — add `cv`, `dv`, `tzh`, `mdf`, `bxr`, `nci` to all 21 UI sections.
- `meta_i18n_coverage.js` / `meta_i18n_ext.js` — add description translations for these six codes for the UI langs that already have other-lang descriptions.
- `wordmap-modern-audit-feedback.md` — record the completion in a follow-up Pass entry.
- `changelog.html` — list the new languages with credit.

Implementation instructions:
- Use citeable native-speaker / scholarly references for native and translated names. No machine translation for native forms. Acceptable for translated names is the standard endonym/exonym table from each UI language's Wikipedia or major dictionary.
- For `dv` Dhivehi, ensure RTL handling: Thaana script renders RTL. Re-confirm `textDirection: 'rtl'` in meta and that the search results / modal honor it (per Task 129).
- For `tzh` Tzeltal, retain `parentCode: 'tzo'` only because the meta entry uses it — do not propagate that into `lang_names.js` UI sections; UI display should be the standalone language name, not "Tzotzil (Tzeltal)".
- Run `node validate_wordmap_data.js` and confirm the 21 lang_names warnings drop to 0 (or to the same count as before this batch started).
- Bump `WM_ASSET_VERSION.names` per Task 134.

Validator / static check:
- The validator already enforces `lang_names.<UI>` coverage. No new check needed; just close the warning gap.

Do not:
- Do not invent translated names. If a UI language has no documented exonym for the language, use the endonym (from `wordmap_data.js` `native`) and mark it in a comment.
- Do not commit the partial state to `main` — finish `lang_names.js` before merging the data/meta entries forward.

Done when:
- 0 lang_names warnings for `cv`, `dv`, `tzh`, `mdf`, `bxr`, `nci`.
- Each of the six languages renders correctly in the search dropdown for all 21 UI langs.
- Validator total warnings return to ≤ 17 (the pre-existing baseline) once Tasks 144 and 145 also land.

### New Task 144. Close description-i18n coverage gap on historical and recent-batch rows

Goal:
Bring the validator's `[#13b'] description i18n` coverage to ≥ 95% for the 15 UI languages currently below threshold. The same ~30–60 codes are missing across all UI languages — a single batch translation pass can close most warnings at once.

Current issue I checked:
- Validator output (2026-05-06) shows the same code prefix `ja_chu, pry, oko, okg, ko_gor, …` reported as missing across 15 UI langs.
- Worst offenders: `es_eu`/`es_mx`/`pt_eu`/`pt_br` at 89% (~60 missing each).
- Mid-tier: `yue`/`vi`/`th`/`id`/`hi`/`it`/`uk`/`ar`/`he`/`sw` at 93%.
- `ru` at 94%.
- The bulk of missing codes are historical or recent-batch: `ja_chu`, `ja_heian`, `ja_edo`, `pry`, `oko`, `okg`, `ko_gor`, plus the proto-language batch (`ine`, `pjk`) and the most recent additions (`bxr`, `nci`, and likely `cv`/`dv`/`tzh`/`mdf` once Task 143 lands).
- Same 60 codes appear in every "missing" list — translating once unblocks all 15 UI lang warnings.

Files to change:
- `meta_i18n_coverage.js` — primary. This holds the per-UI translations for descriptions.
- `meta_i18n_ext.js` — fallback chain.
- `wordmap_meta.js` — only if a code's English `description` is missing entirely (then add English first; translations follow).

Implementation instructions:
- Prepare the English source descriptions first; translation quality follows source quality.
- For historical reconstructions (`ine`, `pjk`, `pry`, `oko`, `okg`, `ko_gor`, `ja_chu`), include explicit attestation status in the description (when first attested, what corpus, how reconstructed) — this is information already present in the audit but not in the per-language descriptions.
- Group translations by UI lang, not by source code, to avoid 21× context-switching cost.
- Treat the `es_*` / `pt_*` Spanish/Portuguese variants as the same translation unless there is a documented regional difference — they share the same ~60 missing codes.
- Run validator after each UI lang's batch and confirm the corresponding `[#13b']` warning disappears.

Validator / static check:
- Existing `[#13b']` 95% threshold check covers this. Once at 100%, raise the threshold to 100% as already noted in feedback.

Do not:
- Do not machine-translate without review. Historical-language descriptions contain technical terms (cuneiform, oracle bone script, Hyangchal, etc.) where MT routinely produces wrong cognates.
- Do not omit the `<UI>` translation just because the language is endangered/historical — the *description* still benefits non-English readers.

Done when:
- All 15 UI langs return to ≥ 95% description coverage.
- Validator `[#13b']` warnings drop from 15 → 0.
- `node validate_wordmap_data.js` reports total warnings ≤ baseline (17).

### New Task 145. Migrate string-only descriptions on priority languages to multilingual object form

Goal:
Resolve the validator warning `11 languages still have description as a string (not object) — UI lang fallback to English`. Spot-check shows several Tier-A languages (e.g. `ja`, `ko`, `zh`, `ja_osa`, `ja_aom`, `ja_oki`, `ja_hak`, `ja_kyo`, `ja_hir`, `ja_mvi`, `ja_rys`, `ko_kp`, `ko_bus`, `ko_jeju`, `ko_yb`) have `description: '...'` as a plain string in `wordmap_meta.js`. The validator only flags 11 in the warning summary, but the source contains many more — the warning logic appears to undercount.

Current issue I checked:
- `wordmap_meta.js:12` `LANG_DATA['ja'].meta` uses `description: 'Japanese is the national language ...'` — string.
- Same pattern in lines 14–26 (the entire opening Japanese/Korean block) and many others.
- `[#13b']` validator only counts coverage on object-shaped descriptions. String descriptions are silently treated as English-only and never flagged in per-UI-lang coverage stats.

Files to change:
- `wordmap_meta.js` — convert each string `description` to `{ en: '...' }` shape.
- `meta_i18n_coverage.js` — add `ja`/`ko`/`zh` translations alongside English (these are the priority UI langs).
- `validate_wordmap_data.js` — strengthen the string-description warning to print *all* offenders, not just the first 11. Today it elides the rest, hiding scope.

Implementation instructions:
- Phase A: convert string descriptions to `{ en: '...' }` shape mechanically. This alone resolves the schema warning, even if translations are not added yet.
- Phase B: backfill `ja`/`ko`/`zh` for the resulting bare `{ en }` blocks. Use existing translations in `meta_i18n_coverage.js` if present; otherwise translate.
- Phase C: re-run `[#13b']` coverage — the priority UI langs (`ja`/`ko`/`zh`) should now reach 100% on these languages.

Validator / static check:
- Update the warning to enumerate all string-description codes:
  ```
  ! N languages still have description as a string (not object): ja, ja_osa, ja_aom, ... (full list)
  ```

Do not:
- Do not delete the existing string descriptions before adding the object form — convert in place.
- Do not introduce a `description` shape that mixes string and object across different rows; pick the object form everywhere.

Done when:
- 0 languages have string-form `description` in `wordmap_meta.js`.
- The string-description warning disappears from validator output.
- `ja`/`ko`/`zh` description i18n coverage reaches 100% (already at 100% per current report — verify it stays after migration).

### New Task 146. Resolve Pass-7 deferred per-language IPA rebuilds

Goal:
Close the five language-level "deferred Pass 7" items still listed in `wordmap-modern-audit-feedback.md` (line 422–428). Each needs a per-language source pass plus a column-policy decision; they have been deferred since 2026-04-21+ and are blocking the "100点教材化" milestone.

Current issue I checked:
- §62 `my` Burmese — feedback says "tone/phonation 全行整合化 + per-syllable source 必要". `wordmap_data.js:200` confirms Burmese has IPA but tone marks (acute/grave/creaky) are inconsistent across rows.
- §63 `km` Khmer — feedback: "全行 IPA rebuild 必要". Modern Khmer transliteration ≠ IPA but the column is still labeled IPA in some renders.
- §66 `id`/`ms`/`tl` — feedback: "第二列が IPA か broad transcription か policy 決定が先". `pronunciationType` is now set to `orthography` (per Task 76) but the data layer still mixes orthography copies into the IPA column for `air`/`api`/etc. Decision still needs to be made about whether to add genuine broad transcription or commit to orthography only.
- §68 `ta`/`te` — feedback: "concept-level register policy が先". Tamil has a literary/colloquial split that `pronunciationType` does not capture.
- §69 `bo` Tibetan — feedback: "Lhasa/Central source per-cell verification 必要". Wylie vs IPA mixing remains.

Files to change:
- `wordmap_data.js` — per-cell rebuilds for the 5 languages (~100 cells total at 20 cells each).
- `wordmap_meta.js` — add `meta.sources` per Task 80 once rebuilt; consider extending `pronunciationType` to a per-concept override field if a single language uses different conventions across concepts.
- `validate_wordmap_data.js` — if a per-concept `pronunciationType` override is added, extend the schema validator.

Implementation instructions:
- Treat each language as its own session — do not bundle all five.
- Required source per cell: a citation in `wordEvidence.citation` (Task 133) plus a `pronunciationEvidence` split (Task 97) when the form, the pronunciation, and the concept come from different sources.
- For Burmese: Cambridge JIPA Burmese article (2014) is the most-cited modern reference. Use it consistently.
- For Khmer: Royal Phnom Penh standard, not Battambang or Northern. Cite Headley 1977 or modern equivalent.
- For Tibetan: stick to Lhasa Central Tibetan; do not mix Amdo or Khams.
- Document the column-policy decision for `id`/`ms`/`tl` in CONTRIBUTING.md before editing data — the decision affects ~60 cells across 3 languages and must not be made cell-by-cell.

Validator / static check:
- Once each language is rebuilt, set `meta.reviewStatus: 'source-checked'` and ensure validator's existing reviewStatus enum check catches drift.

Do not:
- Do not partially rebuild a language (e.g., only update tones for some Burmese cells). Either rebuild all 20 or none, to preserve internal consistency.
- Do not change `pronunciationType` from `orthography` to `ipa` for `id`/`ms`/`tl` until the column-policy decision is made and CONTRIBUTING.md updated.

Done when:
- All five languages have `reviewStatus: 'source-checked'` and full `meta.sources`.
- Each rebuilt cell has `wordEvidence` with structured citation per Task 133.
- Audit Pass 7 deferred list is empty in the next feedback file revision.

### New Task 147. Resolve Pass-2-through-6 deferred semantic/policy items

Goal:
Close the open list at `wordmap-modern-audit-feedback.md` lines 311–333. Each item is a policy decision blocking family-wide cleanup. None require source-pass work alone — they need a documented policy first, then mechanical edits.

Current issue I checked (each is still mentioned as deferred in the feedback):
- §5 IPA-vs-orthography column policy — partially addressed by `pronunciationType` (Task 76) but a global *column-policy* decision (separate IPA column? rename? collapse?) has not been recorded.
- §11/§12 tone/stress/verb-form conventions — no project-level policy document; per-language decisions drift.
- §14 ASCII affricate notation (Slavic `ts` → `t͡s`) — family-wide; no decision recorded on whether to keep ASCII or migrate to tie-bar.
- §22 Turkic `w/y/q/x` conventions — no decision.
- §23 Georgian transliteration vs IPA — no decision.
- §25/§37 `heart` anatomical vs emotional — `WORD_LIST.heart.definition` (Task 82) records "default: basic emotional/cognitive" but the per-cell audit has not been re-run with that policy.
- §27 Mandarin 你好 sandhi — feedback says "defensible as citation"; not formally closed.
- §29 Quebec French — full-row review still required.
- §35 `one` gender choice — `WORD_LIST.one.definition` records "masculine/default" but several rows still use feminine forms.
- §36 mother/father formal vs informal — no policy recorded.

Files to change:
- `CONTRIBUTING.md` — add a "Column conventions and concept policies" section. This is the single highest-leverage edit; it locks in answers that currently drift.
- `wordmap_data.js` — per-cell mechanical edits *after* CONTRIBUTING is updated.
- `validate_wordmap_data.js` — add validators that flag policy violations once policy is documented (e.g., warn if `one` is feminine without `wordEvidence.note`).

Implementation instructions:
- Resolve as a *policy commit first*, *data commit second*. Mixing the two means future readers cannot tell which decisions are official vs accidental.
- For each deferred § item, record one paragraph in CONTRIBUTING with: policy rule, rationale, exception clause.
- Then run the data edits in commits scoped to one § item each.
- Mark each closed item with the commit SHA in feedback file's "Pass 2-6 deferred items" section, so the deferral list shrinks visibly.

Do not:
- Do not bundle policy decisions and data edits in the same commit. Reviewers cannot follow them together.
- Do not let "we'll decide later" stay in the feedback file; if the team cannot decide a policy, document the open question explicitly with a stake-in-the-ground default (e.g., "default: keep ASCII affricates; revisit Q3").

Done when:
- CONTRIBUTING.md has a "Column conventions and concept policies" section covering all bullets above.
- The deferred list in `wordmap-modern-audit-feedback.md` lines 311–333 has every entry either closed (commit SHA) or explicitly marked open-with-default.

### New Task 148. Distribute Japonic-stage coordinates so they do not stack at Kyoto

Goal:
Resolve the validator warning `[#14] coord cluster: 3 codes at one (lat,lng): ja_kyo, ja_heian, ja_chu — consider distinct representative points`. Three languages currently share the same Kyoto coordinate, which makes the marker overlap and harms the "marker-as-representative-point" message reinforced by Task 99.

Current issue I checked:
- `wordmap_data.js`: `ja_kyo` (modern Kyoto dialect), `ja_heian` (pedagogical-stage Heian Japanese 794–1185), and `ja_chu` (historical Middle Japanese 鎌倉～室町) all sit on the same lat/lng pair near Kyoto.
- All three have `meta.locationBasis: 'historical-site'` or `'capital'` — the warning is the right call: each should pin to a stage-appropriate coordinate.

Files to change:
- `wordmap_data.js` — adjust lat/lng for at least two of the three.
- `wordmap_meta.js` — record reasoning in `locationBasis` notes if the schema supports it; otherwise add a comment.

Implementation instructions:
- Suggested anchors:
  - `ja_kyo` modern Kyoto dialect: keep at Kyoto Gosho (current setting).
  - `ja_heian` Heian Japanese: shift slightly to Heian-kyō historical center (~ Heian-jingū area, not Gosho) to acknowledge it is not the modern city.
  - `ja_chu` Middle Japanese / Chusei: shift to Kamakura or Muromachi-era political centers, depending on which sub-period the data targets. The label `ja_chu` is broad — pick whichever sub-period best matches the lexical sources used.
- Coordinate offsets must be > ~0.05° lat or lng to clear the validator threshold; small jitter is not enough.
- Update `meta.locationBasis` notes (or `description`) to explain the choice so it does not look arbitrary.

Validator / static check:
- Existing `[#14]` cluster check covers this; once split, the warning disappears.

Do not:
- Do not jitter randomly. Each new coordinate must correspond to a documented historical site for the stage represented.
- Do not change `ja_kyo` itself unless the rest of `ja_*` coordinate scheme changes — it is the modern reference.

Done when:
- `[#14]` warning for this cluster disappears.
- Each of the three languages renders at a visibly distinct map marker at zoom ≥ 5.

---

## Cumulative status after Verification Sweep

- **Confirmed implemented (no further work needed):** All 30 spot-checked schema/UI claims from the feedback file (codeType, languageKind, surfaceType, locationBasis, scriptDisplayPolicy, formType/citation, WM_ASSET_VERSION, hash/popstate, combobox ARIA, dialog focus, CDN fallback, RTL bidi, era help icon, multiword formType, GitHub Actions CI, legacy script headers, Pronunciation/IPA Policy section).
- **Open / partial (new tasks 143–148):** Tier-1 lang_names completion; description-i18n historical batch; string→object description migration; Pass-7 per-language rebuilds; Pass-2-6 policy locks; Japonic-stage coordinate cluster.
- **Validator delta:** 17 → 38 warnings. 21 are temporary (Task 143 closes them). The remaining 17 are the pre-existing description-i18n + string-description + coord-cluster warnings tracked above.

### New Task 149. Add Tier 3 missing languages — Polynesian, creole-family, mid-size African, Mesoamerican register-tone, classical conlangs

Goal:
Close the next-tier coverage gaps surfaced by the 2026-05-06 Tier 1/2 gap analysis. Each language below either fills a *family-coverage hole* (Polynesian without Tahitian, French-based creole without Réunion/Seychelles/Guadeloupe, Portuguese-based creole without Cape Verdean), corresponds to a recognized national/official language not yet on the map, or anchors a typological feature (Otomi register tone, Volapük as the first widely adopted constructed language). Tier 3 is broader than Tier 1/2 and is best done as 4–5 incremental sub-batches rather than one sweep.

Current issue I checked (codes verified absent on 2026-05-06):

**Group A — Pacific / Polynesian gaps:**
- `tah` Tahitian — French Polynesia official language, ~70K speakers, sister to `mi`/`haw`/`sm`/`to` already present. Conservative Eastern Polynesian phonology with glottal stop ʼ and macron-marked long vowels. Without it the project has every other major Eastern Polynesian language but skips the one that is the namesake of "Tahitic" subgroup.
- `ho` Hiri Motu — one of three official languages of Papua New Guinea (with `tpi` Tok Pisin already present and English). Simplified trade form of Motu, distinct from full Motu. ~120K. Pairs with `tpi` to show PNG's two contact languages side by side.
- `en_nz` New Zealand English — `en_au` Australian English is present, but NZ English is missing despite a ~4M speaker base, distinctive vowel system (NZ short-front-vowel shift), and significant Māori-loanword integration. Typologically interesting because of front-vowel raising that diverges from Australian.

**Group B — Creole-family gaps (currently underrepresented in the map's contact-language coverage):**
- `kea` Kabuverdianu (Cape Verdean Creole) — national language of Cape Verde, ~870K. Largest Portuguese-based creole. Two main variants (Sotavento/Barlavento); pick the Sotavento (Santiago) standard for the map row. The map already has `pap` Papiamento (Iberian-based creole of the ABC islands) but is missing the much larger Cape Verdean.
- `rcf` Réunion Creole (Kreol Réyoné) — French-based, ~600K, Réunion island. Pairs with `mfe` Mauritian Creole already present.
- `crs` Seychellois Creole (Kreol Seselwa) — French-based, ~73K, official language of Seychelles. Completes the Indian Ocean French-creole triad with `mfe` Mauritian and `rcf` Réunion.
- `gcf` Guadeloupean Creole — French-based, ~430K, French overseas region. Caribbean French-creole anchor.
- `pis` Pijin (Solomon Islands Pijin) — ~370K, English-based. Sister to `tpi` and `bi` Bislama (both present). The three together form the canonical Melanesian Pijin continuum and the project already has two of three.

**Group C — Mid-size African languages:**
- `kam` Kamba (Kĩkamba) — Kenyan Bantu E system, ~4M. One of the five largest ethnic-language groups in Kenya alongside Kikuyu (`ki` present), Luhya, Kalenjin (`kln` present), and Luo (`luo` present).
- `ses` Koyraboro Senni (Eastern Songhai) — ~430K, Mali/Niger. Songhai is genealogically isolated within Africa (sometimes Nilo-Saharan, sometimes ungrouped); the Saharan trade-corridor language of Gao and Timbuktu. Worth representing one Songhai variety even if just one.
- `tem` Themne — ~1.5M, Sierra Leone. One of two largest Sierra Leonean languages alongside Mende (`men` present). Atlantic-Congo branch with grammatical-gender noun-class system.

**Group D — Mesoamerican register-tone language:**
- `oto` Otomi (Hñähñu / Hñähño) — Mexican Otomanguean, ~300K, scheduled language of Mexico. Critically interesting because it has *register* tones (high/low) plus contrastive *phonation types* (modal/breathy/creaky vowels) — typologically distinct from East Asian contour-tone systems. Without it, the map has no Mexican non-Mayan indigenous language demonstrating phonation-type contrasts.

**Group E — Classical / historic constructed languages:**
- `vo` Volapük — published 1879 by Schleyer, predates Esperanto by ~8 years and was briefly more popular before Esperanto eclipsed it. Significant in linguistic history as the first widely adopted international auxiliary language (IAL). Speaker count is now negligible but the historical/linguistic-history value is large; the project already has `eo` Esperanto, `tok` Toki Pona, `jbo` Lojban, `tlh` Klingon as constructed languages.
- `ia` Interlingua — naturalistic IAL designed by IALA (1951), readable by anyone literate in a Romance language without prior study. Distinct philosophy from Esperanto (no schematic regularization) — pairing the two is pedagogically valuable for explaining IAL design space.

Files to change (all groups):
- `wordmap_data.js` — add 20-word entries with IPA + romanization where applicable. Each language is one new top-level row.
- `wordmap_meta.js` — full meta block: `family`, `speakers`, `speakerBasis`, `speakerSource`, `speakerYear`, `iso6393`, `glottocode`, `countries`, `official`, `script`, `description` (multilingual object per Task 145), `sources` (per Task 80), `pronunciationType` (per Task 76), `surfaceType` (per Task 84), `locationBasis` (per Task 99/127), `codeType: 'iso'`, `languageKind` where non-default, `parentCode`/`varietyRole` where applicable.
- `lang_names.js` — add to all 21 UI sections (per Task 143's lessons).
- `meta_i18n_coverage.js` — add `description` translations for the 4 priority UI langs (`ja`/`ko`/`zh`/`yue`) at minimum.
- `lang-filter.js` — confirm `Atlantic-Congo`, `Otomanguean`, `Songhai`, `Polynesian`, `French-based creole`, `Portuguese-based creole`, `Constructed (auxiliary)` are all recognized family/category buckets; extend the curated tag set if not.
- `changelog.html` — credit the gap analysis (2026-05-06) and list each addition in the next changelog entry.
- `CONTRIBUTING.md` — if a creole-handling policy is not yet documented, add one paragraph in the language-typology conventions section explaining how creoles are tagged (`languageKind: 'pidgin-creole'`, lexifier in `description`).

Implementation instructions:

**Sub-batch ordering (recommended):**
1. **Batch 1 (Polynesian + Pacific):** `tah`, `ho`, `en_nz`. Smallest data-source effort because Wiktionary + Académie Tahitienne + PNG language atlas + standard NZ-English references are well-curated. ~3 langs × 20 cells = 60 cells.
2. **Batch 2 (creole family):** `kea`, `rcf`, `crs`, `gcf`, `pis`. Group together because they share methodology — pick one orthography per language (most have multiple competing standards), document the choice in `wordmap_meta.js` `description`, and keep substrate/superstrate notes in `wordEvidence.note`. ~5 langs × 20 = 100 cells.
3. **Batch 3 (African mid-size):** `kam`, `ses`, `tem`. These need careful Bantu-noun-class / Atlantic-noun-class handling for `mother`/`father`/`tree`/`house`/`heart` — many pair with class prefixes that should not be stripped. ~3 langs × 20 = 60 cells.
4. **Batch 4 (Mesoamerican):** `oto`. Single language, but high-cost cell-by-cell because of the tone × phonation grid. Cite Lastra (1992, 1997) or similar and include `wordEvidence.pronunciationEvidence` per Task 97 so future readers can verify each tone+phonation choice. ~1 lang × 20 cells but each cell is double-checked.
5. **Batch 5 (constructed):** `vo`, `ia`. Smallest cost because both have fixed standardized lexicons; surface comes directly from the official dictionary. Mark `languageKind: 'constructed'`, `pronunciationType: 'broad'` (Volapük's IPA is rule-based; Interlingua phonology is loose). ~2 langs × 20 = 40 cells.

**Per-language source policy:**
- Each language must arrive with at least one citeable reference in `meta.sources`. No row goes in without a source.
- For Tahitian: Académie Tahitienne (Fare Vana'a) Tahitian-French dictionary; Wiktionary cross-checks.
- For Hiri Motu: Dutton & Voorhoeve (1974) *Beginning Hiri Motu*; PNG official Hiri Motu publications.
- For NZ English: pronunciation transcriptions from the Cambridge English Pronouncing Dictionary (NZ supplements) + audio from OZdic / NZ Herald style guide; cite at row level.
- For Cape Verdean: ALUPEC orthography (official 2009); Veiga (2002) *Le créole du Cap-Vert*; choose Santiago variant.
- For Réunion: Cellier *Comparons nos langues*; SudEL orthographic standard.
- For Seychellois: Bollée & D'Offay (2009) *Le créole seychellois*; Lenstiti Kreol (Creole Institute Seychelles).
- For Guadeloupean: Ludwig et al. (2002) *Dictionnaire créole français*.
- For Solomons Pijin: Crowley & Lynch (eds.) for Melanesian languages; Solomon Islands Pijin Wordlist (SIL).
- For Kamba: Lindblom (1926) and modern updates; *Kĩkamba Bible* lexical baseline.
- For Songhai (Koyraboro Senni): Heath (1999) *A Grammar of Koyraboro Senni*.
- For Themne: Wilson (1961) *An outline of the Temne language*; Bai-Sharka (2018).
- For Otomi: Lastra (1997) *El otomí de Toluca*; Bartholomew & Schoenhals (1983); pick *Mezquital Otomi* (`ote` ISO 639-3) as the variant unless a different one is justified.
- For Volapük: Schleyer's *Wörterbuch der Universalsprache* (1888) and the Cifal Volapüka modern update; Volapük Wikipedia's modern lexicon.
- For Interlingua: IALA *Interlingua-English Dictionary* (1951); Union Mundial pro Interlingua.

**Per-language metadata pitfalls to avoid:**
- For Tahitian: do *not* set `parentCode: 'mi'` or `'haw'` — Tahitian is a sister, not a child, of those.
- For Hiri Motu: distinguish from Motu (`meu`); these are different rows. Hiri Motu is simplified, lexically Motu but grammatically reduced.
- For NZ English: set `parentCode: 'en'`, `varietyRole: 'regional-variety'`, `coverage: 'partial'` per Task 79.
- For each French-based creole: do *not* set `parentCode: 'fr'`. Creoles are not regional varieties of French; they are distinct languages with French lexifier. Use `languageKind: 'pidgin-creole'`, document lexifier in `description`.
- For Cape Verdean: same — *not* a parent of `pt`. Use `languageKind: 'pidgin-creole'`.
- For Solomons Pijin: do *not* set `parentCode: 'tpi'`. Tok Pisin and Pijin are sister Melanesian Pijins, not parent-child.
- For Kamba/Themne/Songhai: set `pronunciationType: 'broad'` not `'ipa'` unless a tone-sourced full rebuild is done.
- For Otomi: must set `pronunciationType: 'ipa'` (because tone+phonation cannot be represented in standard orthography), and `wordEvidence.pronunciationEvidence` for every cell.
- For Volapük/Interlingua: set `languageKind: 'constructed'`, `dataStatus: 'modern'` (they are still in active community use, however small), `pronunciationType: 'broad'`.

**Coordinate selection (per Task 99/127):**
- `tah` → Pape'ete, Tahiti (`-17.54, -149.57`).
- `ho` → Port Moresby (`-9.44, 147.18`).
- `en_nz` → Auckland or Wellington (~`-36.85, 174.76` for Auckland, the larger speaker pool).
- `kea` → Praia, Cape Verde (`14.92, -23.51`).
- `rcf` → Saint-Denis, Réunion (`-20.88, 55.45`).
- `crs` → Victoria, Mahé (`-4.62, 55.45`).
- `gcf` → Pointe-à-Pitre or Basse-Terre (`16.24, -61.53`).
- `pis` → Honiara (`-9.43, 159.95`).
- `kam` → Machakos, Kenya (`-1.52, 37.27`).
- `ses` → Gao, Mali (`16.27, -0.05`) for the Eastern Songhai variant.
- `tem` → Makeni or Freetown approach (`8.88, -12.05` Makeni for Themne center).
- `oto` → Tula de Allende or Ixmiquilpan, Hidalgo (`20.48, -99.22` Ixmiquilpan as Mezquital center).
- `vo` → Litzelstetten near Konstanz (`47.71, 9.20`) — Schleyer's home; or Cifal Volapüka HQ if more current.
- `ia` → New York (`40.71, -74.01`) — IALA's HQ, or any IALA-defining city.

**Per-language `locationBasis`:**
- Pacific / Polynesian / mid-size African modern languages → `capital` or `largest-city`.
- Creoles → `capital` (creole anchored to its territory's center).
- `vo`, `ia` → `prestige-center` (no native-speaker community to ground a `capital`).
- `oto` → `largest-city` (Ixmiquilpan as the cultural/linguistic center, not Mexico City).

**Per-language `pronunciationType` defaults:**
- `tah`, `ho`, `en_nz`, `kea`, `rcf`, `crs`, `gcf`, `pis`, `kam`, `ses`, `tem` → `'broad'` until a sourced full-IPA rebuild.
- `oto` → `'ipa'` (must be IPA because tone+phonation is required).
- `vo`, `ia` → `'broad'` (well-defined but not phonemic-ipa-strict).

**Per-batch validation:**
- After each sub-batch, run `node validate_wordmap_data.js`.
- Each new lang must pass: `codeType` set; `lang_names.<UI>` filled for all 21 UI sections; `pronunciationType` and `surfaceType` set; `meta.sources` non-empty; `wordEvidence` populated for at least 5 cells per language.
- Bump `WM_ASSET_VERSION.data` and `.meta` per Task 134; `lang_names` cache-buster per Task 143's lesson.

Validator / static check:
- Extend `validate_wordmap_data.js` to recognize the new `family` strings if they are new tokens (e.g., `'Atlantic-Congo (Mel)'` for Themne if not previously seen).
- Add a check that flags any creole row without `languageKind: 'pidgin-creole'`. Today the validator counts `pidgin-creole` but does not enforce it on rows that look creole-y in `description`. A simple substring match on creole-related description keywords (`creole`, `pidgin`, `créole`, `crioulo`, `kreol`, `kreyòl`) could WARN if `languageKind` is missing.

Do not:
- Do not mass-add all 14 in one commit. Reviewing 14 languages × 20 cells in one diff is impractical and hides errors. Use the 5 sub-batches above as commit boundaries.
- Do not pick the most-popular spelling variant of a creole without documenting which standard it is. ALUPEC (Cape Verde), GEREC-2 (French Caribbean), and various uncodified standards exist; pick one and say so.
- Do not borrow an Esperanto-style approach for Volapük's pronunciation. Volapük has rule-based stress on the final vowel; do not simulate Esperanto's penultimate stress just because Esperanto is the closest sibling row.
- Do not omit `wordEvidence.note` for Otomi cells — the tone+phonation choices are non-obvious and must be sourceable.
- Do not introduce these languages without first finishing Task 143 (cv/dv/tzh/mdf lang_names cleanup). Adding more languages while a lang_names backlog exists multiplies the warning count.

Done when:
- All 14 codes (`tah`, `ho`, `en_nz`, `kea`, `rcf`, `crs`, `gcf`, `pis`, `kam`, `ses`, `tem`, `oto`, `vo`, `ia`) have full word + meta + name entries across all 21 UI langs.
- `node validate_wordmap_data.js` passes with no new warnings introduced beyond the deferred-i18n list.
- The map at zoom 5 visibly shows: Pape'ete, Port Moresby, Praia, Saint-Denis, Mahé, Pointe-à-Pitre, Honiara, Machakos, Gao, Makeni, Ixmiquilpan, and the conlang anchors.
- Family-coverage gaps for Tahitic Polynesian, English-based PNG/Solomons creole pair, Portuguese-based and French-based creole branches, Kenyan Bantu E mid-size, Songhai isolate, Atlantic-Congo Mel branch, Mexican Otomanguean register-tone, and pre-Esperanto IAL history are all visibly closed.
- Changelog credits the gap analysis (2026-05-06) and lists each addition.

### New Task 150. Add Tier 3.5 — coverage rounding-out languages and typological rarities

Goal:
After Task 149 is finished, fill the remaining "would be nice" gaps that close out regional clusters or add typologically extreme rarities. Lower-priority than 141/142/149 because each is either small in speaker count or specialized, but each adds visible educational value at reasonable per-row cost.

Current issue I checked (codes verified absent on 2026-05-06):

**Group F — Uganda Bantu/Nilotic cluster completion:**
- `laj` Lango — Western Nilotic, ~2.1M, Northern Uganda. Pairs with `luo` Luo, `ach` Acholi (both present) within the Luo cluster.
- `cgg` Chiga (Rukiga) — Bantu JE, ~2.3M, southwestern Uganda.
- `ttj` Tooro — Bantu JE, ~660K, western Uganda. Sister to Nyoro.
- `nyo` Nyoro (Runyoro) — Bantu JE, ~970K, western Uganda. Forms the Runyakitara cluster with Tooro/Chiga/Nkore.
- These four together with already-present `lg` Luganda, `nyn` Nkore, `teo` Teso, `ach` Acholi, `luo` Luo make Uganda's language map nearly complete.

**Group G — Horn of Africa rounding:**
- `byn` Blin (Bilen) — Cushitic Agaw, ~110K, Eritrea. Eritrea's only Agaw branch language. Pairs with `tig` Tigre (present), `ti` Tigrinya (present), `aa` Afar (present), `so` Somali (present) to give Horn-of-Africa Cushitic+Semitic+Agaw representation.

**Group H — Andamanese (typological / endangered isolates):**
- `jrb` Great Andamanese (modern revitalized form) — critically endangered, ~3 fluent speakers (per UNESCO). The Great Andamanese family is one of the most ancient language groupings in South Asia and is treated as an isolate by most classifications. The small surviving variety is the result of language merger of multiple originally distinct Andamanese languages. **Note:** scope must explicitly say "modern attested rump form" not "the Andamanese family" — the latter is mostly extinct.
- Optional: a separate row for an extinct named Andamanese variety (e.g., Aka-Bea) marked `dataStatus: 'fragmentary'` with whatever Reverend Portman 1899 or modern revitalization-corpus material exists. Skip if the corpus is too thin.

**Group I — Khoisan typological extreme:**
- `nmn` Taa (also called !Xóõ or ǃXóõ) — Tuu (Khoisan), ~2,500, Botswana/Namibia. Famously has *the largest consonant inventory of any documented language* (~128–164 phonemes depending on analysis, with multiple click series + plain consonants + complex vowel modifications). Adding even a 20-cell row teaches more about phonological rarity than 10 European languages combined. Compare to `naq` Nama (present, click language but smaller inventory).

**Group J — Whistled / non-spoken language note:**
- Silbo Gomero (Spain, La Gomera) and other whistled registers (Mazatec whistled, etc.) — cannot be represented in the current 20-word × IPA schema because the medium is whistled, not phoneme-based. The audit should record this as a known data-model limitation rather than a missing-language row. Recommendation: add a paragraph to `CONTRIBUTING.md` explaining why whistled and signed languages need special schema treatment (see Task 142 for sign languages), and list `silbo-gomero` and similar in a "Conscious omissions" table.

Files to change:
- `wordmap_data.js` — 6 new top-level rows (`laj`, `cgg`, `ttj`, `nyo`, `byn`, `nmn`) plus optionally `jrb`.
- `wordmap_meta.js` — full meta blocks for each.
- `lang_names.js` — entries in all 21 UI sections.
- `meta_i18n_coverage.js` — descriptions in priority UI langs.
- `lang-filter.js` — confirm `Cushitic (Agaw)`, `Khoisan (Tuu)`, `Andamanese` are recognized family tokens.
- `CONTRIBUTING.md` — add a "Conscious data-model omissions" subsection covering whistled and signed languages.
- `wordmap-modern-audit-feedback.md` — record completion in a new Pass entry.
- `changelog.html` — credit additions.

Implementation instructions:

**Sub-batch ordering:**
1. **Batch F1 (Uganda Bantu/Nilotic 4 langs):** `laj`, `cgg`, `ttj`, `nyo`. Group together because they share regional metadata (countries: Uganda, official: Uganda, parent context: Runyakitara cluster) and similar source bases (Uganda Christian University Press dictionaries, SIL Bantu surveys). ~4 × 20 = 80 cells.
2. **Batch G (Horn of Africa rounding):** `byn`. Single language. ~20 cells.
3. **Batch I (Khoisan typological rarity):** `nmn` Taa. ~20 cells but each cell must be sourced because the click+phonation choices are non-obvious. This is the most-cited Khoisan language in linguistic typology, so source quality matters.
4. **Batch H (Andamanese, optional):** `jrb` Great Andamanese modern. Defer if no current source can be cited; do not invent forms. ~20 cells, with `dataStatus` set explicitly to `fragmentary` or `modern` depending on what is recorded.
5. **Batch J (data-model documentation, no row addition):** `CONTRIBUTING.md` paragraph + audit feedback follow-up.

**Per-language source policy:**
- For Lango: Driberg (1923) *The Lango: A Nilotic Tribe of Uganda*, modern Lango-English dictionary by Noonan or Okolo.
- For Chiga (Rukiga): SIL Uganda's *Runyakitara cluster* materials; Ruhakana Rugunda's published works; Uganda Christian University Press Rukiga dictionary.
- For Tooro: Kamoga (1968); Davis & Schadeberg in the Bantu surveys.
- For Nyoro: Ruzindana (1996) *Runyoro-Rutooro–English Dictionary*.
- For Blin: Sandgren (1991) *A Grammar of Bilin*; Eritrean Ministry of Education materials.
- For Taa (`nmn`): Traill (1985) *Phonetic and Phonological Studies of !Xóõ Bushman*; Naumann (2008) *The Tuu Languages*. Source per cell.
- For Andamanese (`jrb`): Anvita Abbi *Dictionary of the Great Andamanese Language* (2012); or skip if insufficient.

**Per-language metadata (group-specific pitfalls):**
- For all four Uganda Runyakitara-cluster languages (`cgg`, `ttj`, `nyo`, plus already-present `nyn`): set a `parentCode` only if the project decides to introduce a Runyakitara macrolanguage row. If not, leave `parentCode` unset and use `description` to explain the cluster relationship.
- For `laj` Lango vs `luo` Luo: these are sister languages within Western Nilotic (Lwoo). Do not set `parentCode` between them.
- For `nmn` Taa: must use IPA with click letters (ǀ, ǁ, ǂ, ǃ) and tone marks. Do not romanize as ASCII. Set `pronunciationType: 'ipa'`. Set `surfaceType: 'standard-orthography'` (the click letters are part of standard Khoisan orthography, not phonetic notation).
- For `jrb` Great Andamanese: set `dataStatus: 'fragmentary'` or `'modern'` depending on the form chosen, and document in `description` which sub-variant (Pucikwar, Kede, etc., merged into the modern rump) the row reflects.
- For all of Group F + G: set `pronunciationType: 'broad'` initially; full-IPA rebuild is a separate later task.

**Coordinate selection:**
- `laj` Lango → Lira, Northern Uganda (`2.24, 32.90`).
- `cgg` Chiga → Kabale, southwestern Uganda (`-1.25, 29.98`).
- `ttj` Tooro → Fort Portal (`0.66, 30.27`).
- `nyo` Nyoro → Hoima or Masindi (`1.43, 31.34` Hoima).
- `byn` Blin → Keren, Eritrea (`15.78, 38.46`).
- `nmn` Taa → near Tsabong, Botswana, or Aminuis-area Namibia (`-26.05, 22.42` Tsabong is a workable representative point).
- `jrb` Great Andamanese → Strait Island or Port Blair, Andaman Islands (`11.66, 92.74` Port Blair as the administrative center where speakers now live).

**Conscious data-model omissions documentation (Batch J):**
- Add a new subsection in `CONTRIBUTING.md` titled "Languages intentionally not represented as rows" with the following content:
  - **Whistled languages** (Silbo Gomero, Mazatec whistled, Kuşköy whistled Turkish, Pirahã whistled register, etc.) — they are *registers* of their host languages, not separate phoneme inventories. The 20-word × IPA schema cannot represent them.
  - **Signed languages** — see Task 142. Modality-dependent representation is required.
  - **Drum languages, click sub-systems used as games, secret-society registers** — same issue.
- This documentation is the deliverable, not a row.

Validator / static check:
- Add an enum check for any new `family` token introduced (Uganda Bantu JE, Tuu Khoisan, Great Andamanese isolate, Cushitic Agaw).
- Optionally extend the family/region filter UI to expose "Khoisan (click languages)" as a filterable category if not already present.

Do not:
- Do not add `jrb` Great Andamanese unless a citeable source can ground each cell — fewer than 5 fluent speakers means almost any unsourced form is functionally invented.
- Do not add `nmn` Taa as a non-IPA row. The whole reason for adding it is to demonstrate the click+phonation inventory; using a romanization defeats the purpose.
- Do not add Silbo Gomero as a row even if requested — record it in the "Conscious omissions" subsection instead. Adding a fake-orthography row would mislead users about the data model.
- Do not bundle the four Uganda languages with the Khoisan/Andamanese ones in a single commit — different review needs.

Done when:
- All Group F (`laj`, `cgg`, `ttj`, `nyo`) and Group G (`byn`) and Group I (`nmn`) have full word + meta + name + i18n entries.
- Group H (`jrb`) is either added with a clearly-sourced 20-cell row or explicitly deferred with a one-line note in this audit referencing the deferral reason.
- Group J's CONTRIBUTING.md "Conscious omissions" subsection exists and lists whistled languages, signed languages (cross-link Task 142), and any other data-model-incompatible varieties.
- `node validate_wordmap_data.js` passes; new family tokens are recognized.
- Map at zoom 5 visibly shows Lira, Kabale, Fort Portal, Hoima, Keren, Tsabong, and (if added) Port Blair.
- Khoisan typological rarity is now demonstrable: `naq` Nama + `nmn` Taa together cover the click-language spectrum from medium-inventory to maximum-inventory.
- Changelog credits the gap analysis (2026-05-06) and lists each addition.

---

## Linguistics-Education Use-Case Audit (2026-05-06 part 10)

The map ships rich data and a polished UI, but none of the existing tasks treat *learning use* as a first-class requirement. This block adds the gaps that surface only when the project is evaluated as a linguistics teaching tool — i.e. for university courses, self-study, classroom worksheets, or independent learners trying to build IPA / typology / historical-linguistics intuition.

The principle for new Tasks 151–158: each closes a gap where the *data* is already excellent but the *learning experience* falls short. None of these are blocking the dataset's correctness; all of them are what would let a teacher say "use this in class" rather than "use this as a reference."

### New Task 151. Add native-speaker audio playback for priority languages

Goal:
Make every IPA symbol on the map auditable. IPA without sound is half a teaching tool — students can read the symbols but cannot match them to actual pronunciation. Adding a play button per cell that streams a recorded native-speaker realization (or, where unavailable, a synthesized fallback) is the single highest-leverage pedagogical improvement available.

Current issue I checked:
- `wordmap_data.js` has IPA strings (e.g., `water:['water','ˈwɔːtə']`) but no audio asset reference.
- `wordmap.html` modal renders IPA as text only.
- No schema field links a row's surface form to an audio source.
- Wikimedia Commons hosts ≥ 50,000 native-speaker recordings of common words, indexed by language and concept; many of LangMap's 595 languages already have ≥ 5 of the 20 concepts available.
- No audio CDN is referenced in `wordmap.html` `<link>` tags.
- For learners with no IPA training, the symbols are functionally illegible without audio.

Files to change:
- `wordmap_data.js` — extend per-cell shape from `[surface, ipa]` to `[surface, ipa, audioRef?]` where `audioRef` is an opt-in object `{ url, source, attribution, license, rec? }`. Backwards compatibility: when the third element is absent, the cell renders as today.
- `wordmap_meta.js` — add `meta.audioCoverage: 0..20` indicating how many of the 20 concepts have audio. Used by lang-filter to surface "languages with audio" as a filter.
- `wordmap.html` — render a small `<button class="wm-audio">▶</button>` next to each IPA cell when `audioRef` is present; hidden otherwise. Use HTMLAudioElement, lazy-loaded on click. Add `aria-label="Play pronunciation of <surface> (<lang>)"`. ARIA live region announces "now playing" / "audio failed".
- `lang-filter.js` — add a "has audio" filter chip and a numeric badge on each language showing audioCoverage / 20.
- `validate_wordmap_data.js` — enforce `audioRef.url` is `https://`, has a known license tag, and is reachable at validate time only when run with `--check-audio` flag (network-dependent so off by default).
- `CONTRIBUTING.md` — add an "Audio sourcing" section with the attribution policy.
- `styles.css` — minimal `.wm-audio` button style; audio-unavailable rows render no button (don't show a disabled button — visual noise).

Implementation instructions:

**Audio sourcing policy:**
- Primary source: Wikimedia Commons. Files are typically `commons.wikimedia.org/wiki/File:LL-Q*-Word.ogg` or `.wav`. Use the `<audio>` element with the direct file URL on `upload.wikimedia.org`.
- Each cell with audio must record the contributor (Wiktionary username or research-corpus identifier), the upload date, and the license (typically CC-BY-SA 4.0 or CC0).
- If a cell uses a non-Wikimedia source (Forvo paid API, Glosbe, language-specific archives), put the license terms in `audioRef.license` and confirm the use is non-commercial-acceptable. The map is open-source and may be embedded in classroom contexts; do not pull from a source that prohibits that.

**Lazy load + cache strategy:**
- Do not preload audio. The map already loads ~600 KB of meta data; preloading audio for 595 languages × up to 20 cells would push the page to gigabytes.
- On click, fetch the audio URL once, cache the HTMLAudioElement keyed by URL in a single in-memory `Map`. Maximum cache size: 50 entries, LRU eviction.
- Show a 1-second loading spinner if the audio takes more than 200 ms to start.
- On failure (404, network error), display a small inline `(audio unavailable)` text in the same UI lang, log to the console, and grey out the button for that cell only.

**Coverage roadmap (recommended sub-batches):**
1. **Pilot (10 langs):** `en`, `fr`, `de`, `es_eu`, `it`, `ja`, `ko`, `zh`, `ar`, `ru`. Each with all 20 cells. ≈ 200 audio refs.
2. **Tier 1 expansion (20 langs):** add the rest of the top-30 by speaker count (`hi`, `pt_br`, `bn`, `id`, `vi`, `tr`, `pl`, `nl`, `th`, `el`, `cs`, `sv`, `no`, `da`, `fi`, `he`, `uk`, `fa`, `ur`, `sw`).
3. **Family anchors (15 langs):** add one anchor per language family for typological diversity even if not high-speaker (`la`, `sa`, `eo`, `nv`, `haw`, `mi`, `qu`, `bo`, `my`, `am`, `tlh` (synthesized acceptable for a conlang), `eu`, `ka`, `tah`, `mt`).
4. **Long tail:** filling in is opportunistic — Wikimedia Commons coverage is uneven.

**Synthesized fallback policy:**
- For languages with no native-speaker audio in the open-license pool, a TTS fallback (e.g., browser's `SpeechSynthesisUtterance` with the closest-matching `lang` code) is acceptable *but must be marked as synthesized* in `audioRef.source: 'tts'`. The play button shows a different icon (e.g., a small robot glyph) and the tooltip explains "synthesized (no native recording available)".
- Do not use TTS for tonal languages unless the engine reliably reproduces tone (browser TTS rarely does for Vietnamese / Thai / Yoruba). For tonal languages, prefer "no audio" over "wrong tone."

**Validator policy (Task 151-specific):**
- Add validator check: if `audioRef.source: 'tts'` is used for a language whose family is in a tonal-language list (`Sinitic`, `Tai-Kadai`, `Hmong-Mien`, `Yoruba`, `Igbo`, etc.), WARN. Tonal-language synthesized audio is misleading for learners.
- Validator must report total audio coverage: `audio coverage: N cells across M languages (priority langs: 10/30 fully covered)`.

Do not:
- Do not preload audio. The bandwidth and memory cost makes the entire map unusable on slow connections.
- Do not auto-play on page load. Auto-play violates browser policy and is hostile UX. The user must opt in by clicking.
- Do not add audio for a tonal language using non-tonal TTS. Better to leave the cell silent.
- Do not bypass attribution. CC-BY-SA requires "attribution by contributor name in the same context." Modal must show the attribution when audio is played, not bury it elsewhere.
- Do not add a play button on cells with `—` (unattested) or with empty IPA. There is nothing to play.

Done when:
- The 10 pilot languages have 100% audio coverage (200 cells).
- A learner can click any IPA cell on a pilot row and hear a native-speaker realization within 500 ms on a typical broadband connection.
- The "has audio" filter chip works and shows accurate counts.
- Validator reports `audio coverage` line.
- Attribution / license appears in modal when audio is played.
- `node validate_wordmap_data.js` passes including the new audioRef schema check.

### New Task 152. Add cognate-set / sound-correspondence demonstration mode

Goal:
Surface the historical-linguistics value already latent in the data. The dataset includes Latin/Sanskrit/Old English/Proto-Indo-European/Proto-Japonic-Koreanic and ~80 historical languages — but a learner navigating a modern row has no way to *see* the cognates. Selecting "father" should let a learner instantly see Latin *pater* / Sanskrit *pitár-* / Old English *fæder* / Modern English *father* / German *Vater* and read off Grimm's law in action.

Current issue I checked:
- `HIST_DESCENDANT` mapping is in `wordmap_data.js` and is used to draw a red descendant overlay (per Task 122).
- But cognate visualization across *non-ancestral* sister languages (e.g., father in pater, padre, père, padre, vater, faðir) requires a separate "shared etymology" relation that is not encoded.
- `wordEvidence` annotates per-cell sources, but does not link cognates.
- A learner can only see one row's cells in modal; they cannot pivot to "show me this concept across Indo-European" or "show me sound changes from PIE to modern."
- The map's family filter shows membership but does not animate the cognate relations.

Files to change:
- `wordmap_meta.js` — add `meta.etymologyTags: { water: 'IE-*udōr', father: 'IE-*pəter-', ... }` opt-in. Each tag is a Glottolog/Wiktionary cognate-set identifier OR a free-form project-defined tag like `IE-pater` for which the project documents the sound-correspondence chart.
- `wordmap_data.js` — same shape as etymologyTags but at row level (per-cell when the cognate relation differs from the language-default).
- `wordmap.html` — add a "show cognates" button in the concept-selection area. When clicked: highlight all rows on the map whose row has `etymologyTags[<currentConcept>]` matching the currently-selected row's tag. Open a side panel listing them in tree form rooted at the proto-form.
- `meta_i18n_coverage.js` — add UI strings for "show cognates" / "sound correspondence" / "shared etymology" / "Grimm's law" / "Verner's law" / "Indo-European" etc., in the priority UI langs.
- `lang-filter.js` — extend with an `etymologyTag` filter for searching by cognate set.
- `wordmap-modern-audit-feedback.md` — document the etymology-tag taxonomy chosen.

Implementation instructions:

**Phase 1: Schema + curated data.**
- Pick 10 well-known cognate sets to start: PIE roots for *water (`*wod-`), *father (`*peh₂tér-`), *mother (`*méh₂tēr-`), *one (`*óynos`), *fire (`*péh₂wr̥`), *heart (`*ḱḗr`), *eye (`*h₃ókʷs`), *moon (`*méh₁n̥s`), *dog (`*ḱwṓ`), *house (`*dṓm-`)`. Tag every IE language row whose cell for that concept descends from the PIE root.
- Use a comparable approach for Sino-Tibetan (`*water`, `*fire`, `*one`), Austronesian (`*water`/`*fire`/`*eye`), Bantu (`*-cua` water, `*-bele` two/etc.), Afro-Asiatic.
- Each tag is a string like `IE-*ph2ter`. Document the tag → modern reflexes mapping in a new `etymology_tags.md` reference file.

**Phase 2: UI.**
- "Show cognates" button next to the concept dropdown. State: off (default) / on.
- When on: each language row whose currently-selected concept has the same `etymologyTags` value gets a halo on the map. Other rows fade.
- Side panel renders the cognate list as a tree:
  - Proto-form at root (italics).
  - Each modern reflex below as `<lang> : <surface> /<ipa>/`.
  - Optional: small annotations on each node for known sound changes (e.g., "p > f via Grimm").
- Clicking a tree node centers the map on that language.

**Phase 3: Educational annotations (later).**
- For known sound-change phenomena (Grimm's law, Verner's law, Bartholomae's law, the Sanskrit cerebralization rule, Sino-Tibetan's tonogenesis, etc.), add a `?` icon next to relevant cognates that opens a popup explaining the sound change in 2–3 sentences in the priority UI langs.

**Per-language tagging effort estimate:**
- Phase 1's 10 sets × ~50 IE languages = 500 cell tags. Most can be auto-generated by walking the existing `HIST_DESCENDANT` chain and copying the parent's tag down — a one-time script.
- Sino-Tibetan is harder (less consensus). Start with the 5 best-attested sets only.

**Validator policy:**
- Tag must be a string of pattern `<family-prefix>-<asterisked-form>`, e.g., `IE-*ph₂tḗr`.
- If two rows in the same family have the same tag, they should typically be in the same `HIST_DESCENDANT` chain or be sibling languages — flag if a tag is shared between unrelated families (e.g., IE tag appearing on a Bantu row).
- Coverage line: `etymologyTags: N tags across M sets, F families`.

Do not:
- Do not invent cognate relations the literature does not support. If a controversial reconstruction (e.g., Altaic) is desired, mark it `etymologyTagsControversial:` and gate behind a "show controversial reconstructions" UI toggle.
- Do not assume that a shared tag means "looks similar phonologically." Cognacy is a historical relation, not a similarity relation. Loanwords, taboo replacements, and chance similarities can all break the surface match.
- Do not surface controversial tags (Nostratic, Eurasiatic, Borean) as the same color/halo as well-attested ones (PIE, Proto-Bantu). Mark them visually distinct.

Done when:
- 10 PIE cognate sets are tagged across the IE rows in `wordmap_data.js`.
- "Show cognates" button works, side panel opens with the tree view.
- Clicking a tree node re-centers the map.
- Sino-Tibetan / Austronesian / Bantu each have at least 3 cognate sets tagged.
- Documentation file `etymology_tags.md` lists every tag and its reflexes.
- Validator coverage line is positive (≥ 100 tagged cells).

### New Task 153. Expand per-language description into a structured grammar capsule

Goal:
Replace the free-form 1–3-sentence `description` with a structured "grammar capsule" that a learner can scan in 30 seconds. A capsule answers: word order? morphological type? script(s)? notable phonemes? how does it inflect verbs? what register(s) of speaker does it have? Today the description tells some of this in prose but is unsearchable, untranslatable systematically, and inconsistent across rows.

Current issue I checked:
- `wordmap_meta.js` rows have `description: '...'` (string or `{ en, ja, ko, zh }` per Task 145).
- A typical description is "Korean is spoken on the Korean Peninsula. Hangul, its unique alphabetic script invented in 1443, is celebrated for its scientific design. Korean is agglutinative with SOV word order and a complex honorific system."
- Useful but not consistently present across all 595 languages, not localizable as structured data, and not searchable / filterable.
- Learners cannot ask "show me all polysynthetic languages" or "show me all SVO + tonal + non-Latin-script" without reading every description.

Files to change:
- `wordmap_meta.js` — add `meta.grammarCapsule` schema:
  ```
  grammarCapsule: {
    wordOrder: 'SOV' | 'SVO' | 'VSO' | 'VOS' | 'OSV' | 'OVS' | 'free' | 'mixed',
    morphology: 'isolating' | 'agglutinative' | 'fusional' | 'polysynthetic' | 'introflexive' | 'mixed',
    alignment: 'nominative-accusative' | 'ergative-absolutive' | 'split-S' | 'tripartite' | 'mixed',
    case: { count: 0..30, exemplars: ['nom', 'gen', 'dat', ...] },
    gender: { count: 0..30, system: 'masculine-feminine' | 'animate-inanimate' | 'noun-class' | 'none' },
    tense: { count: 0..15, exemplars: [...] },
    aspect: { count: 0..10, exemplars: [...] },
    tonal: { kind: 'register' | 'contour' | 'pitch-accent' | 'none', count: 0..N },
    register: { honorific: boolean, formality: ['plain', 'polite', 'humble', 'royal'] },
    inventory: { consonants: 0..N, vowels: 0..N, distinctive: ['clicks', 'ejectives', 'implosives', 'pharyngeals', ...] },
    notes: 'free-form 1–2 sentence highlight'
  }
  ```
  All fields are optional. Fields default to `null` rather than guessing.
- `wordmap.html` — add a "Grammar at a glance" collapsible section in the modal, populated from the capsule. Render as a 2-column grid of label:value.
- `meta_i18n_coverage.js` — add localizations for every label and every enum value (in the priority UI langs).
- `lang-filter.js` — extend filter UI to accept capsule-based queries: e.g., "alignment: ergative-absolutive" or "tonal: yes" or "polysynthetic: yes".
- `validate_wordmap_data.js` — enforce enum values; INFO line for capsule coverage.
- `CONTRIBUTING.md` — document the schema with examples.

Implementation instructions:

**Coverage roadmap:**
1. **Phase 1 (priority 30 langs):** add capsules for the same 30 priority languages identified in Task 80. For each, the capsule comes from the standard reference grammar, not free-form judgment.
2. **Phase 2 (family anchors):** ensure at least one language per family has a capsule. The validator can warn if a family has > 5 languages but no capsule on any of them.
3. **Phase 3 (long tail):** opportunistic.

**Per-field policy:**
- `wordOrder`: pick the basic, unmarked clausal order. Languages with topic-prominent or free order (Russian, Latin) → `'mixed'` with a `notes` clarification.
- `morphology`: pick the dominant type. Note that almost no language is purely one type — "Japanese is agglutinative" hides fusion in some auxiliary verbs. Capsule reflects the dominant pattern.
- `alignment`: this is the one most often missed in casual descriptions. Worth filling in for at least the Caucasian, Polynesian, Eskimo-Aleut, Australian, and Mayan languages where ergative alignment is salient.
- `case.exemplars`: list the cases. For Latin: `['nom', 'gen', 'dat', 'acc', 'abl', 'voc']`. For Estonian: 14 cases — give the count and 4–5 most common exemplars rather than all 14.
- `gender.system`: distinguish "noun class" (Swahili 18-class system) from "masculine-feminine" (Spanish) — both are gender systems but pedagogically very different.
- `tonal.kind`: pitch-accent (Japanese, Norwegian) is a specific category that should not be conflated with full tonal (Mandarin, Yoruba).
- `inventory.distinctive`: only flag rare features. Standard plosives/nasals are not "distinctive" in this sense. Only flag clicks, ejectives, implosives, pharyngeals, retroflex consonants, lateral fricatives, and unusually large or small inventories.

**Display conventions:**
- Modal collapsible section "Grammar at a glance" / 「文法のあらまし」 / 「문법 한눈에」 / 「文法概览」.
- Sticky inside the modal so it does not scroll out of view when reading other sections.
- "Distinctive features" inventory items render with small ⚠ or ★ icons when they are typologically rare.
- Expand-on-click for "tense" and "aspect" lists if exemplars > 3.

Validator / static check:
- Enum validation per field.
- Capsule coverage tally per family (`grammar capsules: N/M priority langs; family coverage: 32/69 families have ≥ 1 capsule`).
- Warn if `inventory.distinctive` includes 'clicks' but family is not Khoisan or Bantu (likely error).
- Warn if `tonal.kind: 'register'` but family is not in a known register-tone family list (Otomanguean, Khoisan, etc.).

Do not:
- Do not write a capsule from a prose description without checking a reference grammar — the description was likely casual and may be wrong.
- Do not conflate pitch-accent with tone. Mark Japanese and Norwegian as `pitch-accent`, not `tone`.
- Do not add a capsule field that is not in the schema. Free-form data goes in `notes`.
- Do not let `notes` exceed 2 sentences. If more is needed, the existing prose `description` is the place.

Done when:
- All 30 priority languages have capsules.
- Modal renders the "Grammar at a glance" section.
- Filters work for at least `alignment`, `morphology`, `tonal.kind`.
- Validator coverage tally is reported.
- A learner can answer "show me all ergative-absolutive languages" with one filter click.

### New Task 154. Add per-language sample sentence corpus with morpheme glossing

Goal:
A 20-word vocabulary tells a learner *nothing* about how the language assembles those words into sentences. Adding 1–3 sample sentences per language with interlinear morpheme glossing (Leipzig Glossing Rules) bridges from "I can read 20 isolated words" to "I can see the syntax."

Current issue I checked:
- The map is strictly word-level: every cell is a citation form.
- No syntax, agreement, word-order in context, or morpheme-internal structure is visible.
- A learner studying Turkish can see `ev` "house" but cannot see how Turkish builds *evlerimde* "in my houses" without external resources.
- This gap is the single biggest reason the map is currently a *reference* tool rather than a *learning* tool.

Files to change:
- `wordmap_meta.js` — add `meta.samples` array:
  ```
  samples: [
    {
      surface: 'Evlerimde kitaplar var.',
      gloss:   'ev-ler-im-de kitap-lar var',
      morph:   'house-PL-1SG.POSS-LOC book-PL exist',
      translation: { en: 'There are books in my houses.', ja: '私の家々に本がある。' },
      audioRef?: { url, source, attribution },
      source: { citation, url, page }
    }
  ]
  ```
- `wordmap.html` — add a "Sample sentences" collapsible section in the modal. Render each sample as 4 lines (surface / morpheme split / morpheme gloss / translation). Use monospace alignment so glosses stack visually.
- `meta_i18n_coverage.js` — translation field is multi-lingual.
- `validate_wordmap_data.js` — enforce schema: surface and gloss must have the same number of morpheme spaces (Leipzig rule); morph gloss tokens are validated against an allowlist of standard glossing abbreviations (`PL`, `SG`, `1SG`, `LOC`, `ACC`, `NOM`, `ERG`, `ABS`, `PERF`, `IMPF`, etc.).
- `CONTRIBUTING.md` — document Leipzig Glossing Rules link, allowed abbreviations, and citation policy.

Implementation instructions:

**Per-language choice of sample:**
- Sample 1: a simple SVO/SOV/VSO clause demonstrating basic word order.
- Sample 2 (if added): a clause with notable morphology — relevant agreement, case, or tense marker.
- Sample 3 (optional): an idiom or proverb that gives cultural flavor.
- Avoid biblical or political quotations (cross-cultural sensitivity).
- Source must be cited. UDHR, Wikipedia, Wiktionary entries, or published grammars are all acceptable.

**Glossing standard:**
- Use Leipzig Glossing Rules strictly. Do not invent abbreviations.
- Allowed: `PL`, `SG`, `DU`, `1`, `2`, `3`, `M`, `F`, `N`, `NOM`, `ACC`, `GEN`, `DAT`, `ABL`, `LOC`, `INST`, `VOC`, `ERG`, `ABS`, `PRS`, `PST`, `FUT`, `PERF`, `IMPF`, `PROG`, `HABIT`, `SBJV`, `IMP`, `COND`, `NEG`, `Q`, `TOP`, `FOC`, `POSS`, `REFL`, `RECP`, `CAUS`, `PASS`, `ANTIPASS`, `APPL`, `NMLZ`, `CL` (classifier), and standard noun-class numbers.
- For unusual categories (evidentiality, switch-reference, Algonquian obviation), document in `CONTRIBUTING.md` and allowlist.

**Display in modal:**
- Monospace block with 4 aligned lines:
  ```
  Evlerimde      kitaplar    var.
  ev-ler-im-de   kitap-lar   var
  house-PL-1SG.POSS-LOC  book-PL   exist
  → "There are books in my houses."
  ```
- "→" and the translation line in the user's UI lang.
- Small "?" next to each gloss abbreviation that opens the glossary popup defining it (cross-link Task 155).

**Coverage roadmap:**
- Phase 1 (priority 30 langs): one sample each. ~30 entries.
- Phase 2 (family anchors): one per family that lacks coverage.
- Phase 3 (long tail): opportunistic. Validator INFO line tracks coverage.

Validator / static check:
- Surface/gloss alignment: morpheme count must match exactly. If `ev-ler-im-de` (4 morphemes) and gloss is `house-PL-LOC` (3), error.
- Glossing-abbreviation allowlist check.
- Translation must be multi-lingual object with at least `en`.
- Source citation required.

Do not:
- Do not skip glossing. A surface + translation only is the same as a Wiktionary phrase entry — not pedagogically useful for syntax/morphology teaching.
- Do not paste from copyrighted grammars without checking permissions. Use UDHR Article 1, public-domain corpora, or grammar examples cited under fair-use educational excerpting (with attribution).
- Do not invent glossing abbreviations.
- Do not let surface contain embedded quotations or markup. Plain Unicode only.

Done when:
- 30 priority languages have at least one sample.
- Modal renders the section with Leipzig-aligned glosses.
- Validator enforces alignment and abbreviation allowlist.
- A learner can read a Turkish sample and visually identify which morpheme is the locative.

### New Task 155. Add IPA tutor: clickable IPA symbols + glossary of linguistic terms

Goal:
The map uses ~120 IPA symbols across all rows. Many learners do not know which symbol denotes which sound. A clickable IPA symbol that opens a small popup with "voiced bilabial plosive — found in 95% of world languages" and a play-IPA-sound button (cross-link Task 151) turns the map from "reference for those who already know IPA" into "tool that *teaches* IPA in context."

Same idea applies to grammatical jargon: when a description says "agglutinative" or "ergative-absolutive," a learner unfamiliar with the term sees gibberish unless a glossary tooltip explains it.

Current issue I checked:
- IPA symbols in `<td class="wm-ipa">` cells render as plain text. No interaction.
- No `IPA_SYMBOL_DESCRIPTION` table exists.
- No `LINGUISTIC_TERM_GLOSSARY` exists.
- Modal text uses jargon ("ergative", "polysynthetic", "tonal", "register tone") without inline explanation.

Files to change:
- New file `ipa_descriptions.js` — table mapping each IPA symbol to:
  ```
  {
    description: { en, ja, ko, zh },           // "voiced bilabial plosive"
    place: 'bilabial' | 'alveolar' | ...,
    manner: 'plosive' | 'fricative' | ...,
    voicing: 'voiced' | 'voiceless',
    rarity: 'common' | 'rare' | 'very-rare',  // for educational highlighting
    chartUrl?: 'https://en.wikipedia.org/wiki/...'
  }
  ```
  Cover all 120 symbols actually used in the data.
- New file `linguistic_glossary.js` — table for terms used in descriptions/grammar capsules: `agglutinative`, `polysynthetic`, `ergative`, `absolutive`, `tonal`, `register-tone`, `pitch-accent`, `noun class`, etc. Each entry has multilingual definition and optional reference URL.
- `wordmap.html` — wrap IPA symbols in `<span class="wm-ipa-symbol" data-sym="X">`. On hover/click: open small popup with description and (if Task 151 done) play button.
- `wordmap.html` — wrap glossary terms in `<span class="wm-term" data-term="ergative">`. Render the term with a faint dotted underline so users see it's interactive.
- `meta_i18n_coverage.js` — UI strings for the glossary popup.
- `lang-filter.js` — when a feature filter is selected (e.g., "ergative"), show the glossary entry inline as a hint.

Implementation instructions:

**IPA-symbol coverage:**
- Generate the symbol list from a one-time script that walks `wordmap_data.js` and extracts every Unicode character classified as IPA.
- Cross-reference with the IPA chart on Wikipedia. Every symbol gets `place`, `manner`, `voicing` from the chart.
- For diacritics (`ʰ`, `ʷ`, `ʲ`, `ˤ`, `ˀ`, `ˡ`, `ː`, `˞`, `̃`, `̥`, `̩`): treat each as a separate entry with description "X-ization" / "X-modified".
- For tone letters (`˥`, `˩`, `˧˩`, etc.): describe each as "high tone", "low tone", "mid-falling", etc.
- Cover all symbols found in data; flag any symbol the script finds but the table does not have.

**Glossary terms (initial set, ~50):**
- Word order: SOV, SVO, VSO, VOS, OSV, OVS, free word order, topic-prominent.
- Morphology: isolating, agglutinative, fusional, polysynthetic, introflexive (Semitic), mixed.
- Alignment: nominative-accusative, ergative-absolutive, split-S, tripartite, active-stative.
- Phonology: tone, register tone, contour tone, pitch accent, click, ejective, implosive, pharyngeal, retroflex, vowel harmony, length, gemination, breathy, creaky, modal voicing.
- Misc: classifier, evidentiality, switch-reference, animacy, honorific, register.

**Popup UX:**
- Hover delay: 300 ms before popup opens (avoid flicker on rapid mouse motion).
- Popup is a small floating card, not a modal. Closes on mouse-out or click-elsewhere.
- Popup contains: term in user's UI lang + 2-sentence definition + (optional) "see also" links to related terms + (optional) Wikipedia external link.
- Keyboard accessible: focus a wrapped span with Tab, Enter opens, Escape closes.

**Validator:**
- For every IPA symbol present in `wordmap_data.js`, the description table must have an entry. Missing entries WARN.
- For glossary terms used in descriptions or grammar capsules, the glossary table must define them. Missing terms WARN.

Do not:
- Do not pop the IPA description on hover for every cell. The data has tens of thousands of symbol occurrences. Let the user opt in by clicking the cell or pressing a hotkey.
- Do not invent IPA symbol descriptions. Use the official IPA chart consonant/vowel categorizations.
- Do not let the glossary become a substitute for the language description. It is for term-level support, not full explanations.
- Do not localize the IPA symbol itself. Symbols are universal; only the *description* is localized.

Done when:
- Every IPA symbol used in `wordmap_data.js` has an `ipa_descriptions.js` entry.
- Hover/click on an IPA symbol shows a description in the user's UI lang.
- 50 linguistic terms are in the glossary, dotted-underlined wherever they appear in modal text.
- A learner clicking on `ɲ` in any row sees "voiced palatal nasal".

### New Task 156. Add curated lesson tours / learning paths through the data

Goal:
The map is brilliant for exploration but gives no narrative. A teacher should be able to point a class to a "tour" that walks through 10 languages with a teaching question, e.g., "How does Indo-European *pater* drift across 4,000 years?" or "What does a tone system actually look like?" Each tour highlights a curated subset of languages, walks linearly with prev/next, and includes 1–2 paragraphs of pedagogical commentary per stop.

Current issue I checked:
- The map is purely user-driven exploration. No guided sequence exists.
- A first-time visitor has no entry-narrative explaining why the map is interesting.
- Teachers wanting to use the map in class must build the lesson plan from scratch.

Files to change:
- New file `tours.js` — declarative tour definitions:
  ```
  TOURS = [
    {
      id: 'ie-pater',
      title: { en: 'How "father" drifted across Indo-European', ja: '... ', ... },
      audience: 'introductory' | 'intermediate' | 'advanced',
      stops: [
        { lang: 'ine', concept: 'father', commentary: { en: 'PIE *ph₂tḗr is the reconstructed form...', ja: '...' } },
        { lang: 'sa', concept: 'father', commentary: { en: 'In Sanskrit the form is pitár-...', ja: '...' } },
        ...
      ]
    },
    ...
  ]
  ```
- `wordmap.html` — add a "Tours" entry in the navigation. Tour list shows each tour's title and audience level.
- Tour player UI: bottom drawer with prev/next, current stop number, commentary text, and "exit tour" button. The map auto-pans to each stop's language and auto-selects the stop's concept.
- `meta_i18n_coverage.js` — UI strings for tour player.

Implementation instructions:

**Initial tour set (8–10 tours):**
1. **"How 'father' drifted across Indo-European"** — Demonstrates Grimm's law via 8 stops: PIE → Latin → Old English → Modern English → German → Sanskrit → Greek → Persian.
2. **"Tone systems compared"** — 7 stops: Mandarin (4 contour tones) → Cantonese (6 tones) → Vietnamese (6 tones) → Thai (5 tones) → Yoruba (3 register tones) → Otomi (register + phonation) → Punjabi (register-tone Indic).
3. **"Click consonants and how they work"** — 4 stops across Khoisan: Nama → Taa → Khoekhoe → Sandawe.
4. **"Three writing systems for one language"** — Japanese (kanji+kana), Korean (hangul), then Vietnamese (Latin chữ Quốc Ngữ + chữ Nôm), Mongolian (Cyrillic vs traditional script).
5. **"Polysynthesis"** — 4 stops: Inuktitut → Mohawk → Nahuatl → Yupik. Show how a single word can be a sentence.
6. **"Ergative-absolutive vs nominative-accusative"** — 6 stops: English (nom-acc reference) → Basque (erg-abs) → Tibetan → Hindi (split-ergative) → Inuktitut → Dyirbal.
7. **"Five language families on one trade route"** — Silk Road languages: Persian / Sogdian / Chinese / Mongolian / Turkic.
8. **"Endangered languages of one country"** — pick a country and walk through its threatened minority languages.
9. **"Loanword chains"** — `algebra` from Arabic to European → `tea` from Min Nan to many → `kimono` from Japanese.
10. **"How creoles are born"** — 5 stops: lexifier (Portuguese / French / English) → contact-era pidgin → modern creole (Cape Verdean / Mauritian / Tok Pisin).

**Tour-player behavior:**
- Map auto-pans to current stop with smooth zoom.
- Concept dropdown auto-selects.
- Current stop's language modal opens automatically? — *no*. Modal opening is intrusive. Highlight the language with a halo on the map, but let the user open the modal explicitly.
- "Next" and "Prev" buttons. Progress dots show position.
- Linear; no branching tours in v1.
- Tour state lives in URL hash (`#tour=ie-pater&stop=3`) so a teacher can link directly to a stop.

**Authoring workflow:**
- Tours are markdown-friendly and live in `tours.js` so they can be reviewed in PRs.
- Commentary text supports inline links to glossary terms (Task 155).
- Each tour has a `audience` level and a recommended duration (`~10 min`).

Validator / static check:
- Each `stops[i].lang` must exist in `wordmap_data.js`.
- Each `stops[i].concept` must be in `WORD_LIST`.
- Tour metadata (title, commentary) must be localized to at least the priority UI langs.

Do not:
- Do not auto-start a tour on page load. The default landing must remain the exploratory map.
- Do not write tours as marketing. Tours are for learning, not promotion.
- Do not skip commentary in non-English UI langs. A Japanese-speaking learner who follows a tour should not get only English text.
- Do not let tours exceed 12 stops. Beyond that, attention drops; split into "Part 1" / "Part 2".

Done when:
- 8 tours exist in `tours.js` with full localization in priority UI langs.
- Tour player UI works with prev/next and URL state.
- A teacher can link a class directly to `?#tour=tone-systems&stop=1`.
- Each tour has been reviewed by at least one person whose specialty is the tour's topic (e.g., the tone-systems tour is reviewed by someone who has taught a phonology course).

### New Task 157. Add "cite this language" / academic export functionality

Goal:
For students writing papers and teachers building handouts, the project should make citation friction-free. Right now a learner has to manually copy the language name, scroll for sources, copy URLs, and assemble a citation by hand. Adding a "Cite" button per language that generates BibTeX / APA / MLA / Chicago entries closes the loop from "I learned this from LangMap" to "I can put it in my paper."

Plus: a "compare these languages" CSV export for students doing comparative analyses (lining up 5 languages × 20 concepts in a spreadsheet for a phonetics homework).

Current issue I checked:
- `meta.sources` exists for ~59 languages and renders in the modal footer as clickable URLs.
- No machine-readable citation output.
- No way to export a subset of languages for offline analysis.

Files to change:
- `wordmap.html` — add "Cite" button in modal. Opens a small dialog with three tabs: BibTeX, APA, MLA, Chicago. "Copy to clipboard" button per format.
- `wordmap.html` — add "Export" button in the language search results. Opens dialog: select format (CSV, TSV, JSON), select fields, select languages, "Download".
- New file `citation_formatters.js` — pure JS functions:
  ```
  toBibtex(lang, meta) -> string
  toAPA(lang, meta) -> string
  toMLA(lang, meta) -> string
  toChicago(lang, meta) -> string
  toCSV(langs, fields) -> string
  ```
- `meta_i18n_coverage.js` — UI strings for citation dialog.

Implementation instructions:

**Citation content per format:**
- BibTeX entry type: `@misc` for the LangMap row itself, plus separate `@reference` entries for each `meta.sources` entry.
- APA: "Language name (n.d.). In LangMap: Word Map of N languages. Retrieved [date] from [URL]." Plus formatted refs from `meta.sources`.
- MLA: similar but MLA 9 conventions.
- Chicago: footnote-style and bibliography-style.
- The page URL must include the hash `#lang=<code>` so the citation links back to the exact row.

**CSV export fields:**
- Default columns: `code, name, family, region, surface_water, ipa_water, surface_fire, ipa_fire, ...` (40 columns for 20 concepts × 2). Plus `description` (single UI lang chosen by user).
- User can deselect columns.
- Selected languages: by default current filter set; user can change.
- Encoding: UTF-8 with BOM (Excel compatibility).
- File name: `langmap-export-<date>.csv`.

**JSON export:**
- Mirror the underlying data structure but flatten relevant subsets.
- Include `meta.sources` for full citation in offline use.

**Dialog UX:**
- Modal-style, not a side panel. Citation is a transactional action.
- Live preview of the citation text as the user switches tabs.
- Single-click "Copy to clipboard" with toast confirmation.
- Big "Download" button for CSV with browser file-save dialog.

Validator / static check:
- For every language with a "Cite" button, `meta.sources` should have at least one entry. WARN if missing on a row that is exposed in the UI.

Do not:
- Do not generate a citation that omits the per-language sources buried in `meta.sources`. The citation must transitively credit the underlying scholarship, not just LangMap itself.
- Do not export the entire dataset by default — let users select. A 600-row dump is rarely what they want.
- Do not gate this feature behind a login. The map is public; export should be too.

Done when:
- "Cite" button works in modal; produces BibTeX/APA/MLA/Chicago.
- "Export" generates CSV with selected fields and languages.
- A student can copy a BibTeX entry, paste into Overleaf, and have it format correctly.
- A teacher can export 10 languages × 20 concepts to a CSV in under 30 seconds.

### New Task 158. Add interactive self-test / quiz mode for IPA, family identification, and cognate matching

Goal:
Active learning beats passive reading. A quiz mode that drills IPA symbols, asks learners to identify language families from a word, or matches cognates across an Indo-European set, converts the map from a reference into a learning-by-doing tool. With spaced-repetition for IPA (reusing stuff already in the data), a learner who returns daily for 5 minutes will become IPA-literate within weeks.

Current issue I checked:
- No quiz/self-test functionality.
- No spaced repetition. No score tracking. No feedback loop.
- The data is rich enough to power exercises with no extra content authoring.

Files to change:
- New file `quiz.js` — quiz engine:
  - Question types: `ipa-to-place-manner`, `ipa-to-language`, `language-to-family`, `concept-to-language`, `cognate-match`.
  - Question generators consume `wordmap_data.js` + `wordmap_meta.js` + `ipa_descriptions.js` (Task 155).
  - Spaced-repetition state in `localStorage` (no server-side; respects privacy).
- `wordmap.html` — add "Quiz" entry in navigation. Quiz UI is a modal overlay.
- `meta_i18n_coverage.js` — UI strings for quiz.

Implementation instructions:

**Question types:**
1. **IPA → place/manner.** "Which of these is the voiced bilabial plosive? `[b], [p], [d], [t]`." Difficulty scales: voiceless/voiced pairs → fricative/plosive distinctions → diacritics.
2. **IPA → language.** "This sound `[ǂ]` appears in which language?" Multiple-choice from data.
3. **Language → family.** "Hungarian belongs to which family?" Multiple-choice. Difficulty scales by family size (Indo-European is easy; Khoisan, Niger-Congo subbranches are harder).
4. **Concept → language.** "Which language uses `mizu` for water?" (Japanese.)
5. **Cognate matching.** "Which of these words is the cognate of Latin `pater` in Sanskrit?" Uses Task 152's etymology tags.

**Quiz UX:**
- Single question on screen. Multiple-choice (4 options) by default; easy mode 2 options; hard mode free-text.
- Immediate feedback: green check / red X with the correct answer and a 1-sentence explanation.
- "Next question" button, no auto-advance (let the learner read the explanation).
- Score and streak counter at the top.
- Settings: question types to include, difficulty, language pool (e.g., "only Indo-European").

**Spaced repetition:**
- Keep score per IPA symbol / language / family in `localStorage`.
- Items the learner gets wrong come back sooner; items consistently right are pushed further out.
- Use a simple SM-2-like schedule, not a full Anki port — overengineering risk.

**Privacy:**
- No quiz data leaves the browser. No telemetry. `localStorage` only.
- "Reset progress" button in settings.

Validator / static check:
- Quiz cannot reference an IPA symbol or language not in the data.
- Each question type must have unit tests for question generation.

Do not:
- Do not gamify with leaderboards or social features. The audience is learners, not players.
- Do not run analytics on quiz performance. Privacy first.
- Do not let one question type dominate. Mix evenly unless the user has set a preference.
- Do not require an internet connection to take the quiz. All assets should be cached for offline use.

Done when:
- 5 question types are implemented and each generates valid questions.
- Spaced-repetition schedule works.
- A learner can take a 10-minute quiz without internet and have their progress saved across sessions.
- IPA symbol pool grows to ~120 questions, language pool to all 595 (filterable).

---

## Education-readiness rollup (after Tasks 151–158)

Once 151–158 are complete, the map graduates from *good reference* to *teaching-grade resource*. The progression by phase:
- **Phase A — minimum viable teaching tool:** Tasks 151 (audio for 30 priority langs) + 153 (grammar capsules for 30) + 154 (samples for 30). Without these three, students cannot use the map for an introductory phonology, syntax, or morphology class.
- **Phase B — historical-linguistics support:** Task 152 (cognate sets) + the existing HIST_DESCENDANT chain. Enables Indo-European / Sino-Tibetan / Austronesian sound-change exercises.
- **Phase C — guided learning:** Tasks 156 (tours) + 158 (quizzes). Converts the map into something a learner can engage with on their own initiative without a teacher present.
- **Phase D — academic adoption:** Tasks 155 (IPA tutor / glossary) + 157 (citation export). Removes the friction that prevents the map from being cited in coursework and assignments.

---

## Data-Scrutiny Sweep (2026-05-06 part 11)

A direct scan of `wordmap_data.js` (12,022 cells) and `wordmap_meta.js` surfaced concrete data problems not yet captured by the validator or by Tasks 1–158. Each finding below is a real, currently-on-disk discrepancy — not a policy question — and has a small, scoped fix.

Scan tooling used:
- Regex-based cell extraction with surface/IPA pair iteration (12,022 cells).
- Per-row script-script consistency check (no cross-script bleed found).
- Per-language family-string clustering (307 distinct family strings).
- Coordinate de-duplication at 0.01° precision.
- Surface/IPA structural pattern detection (parens, slashes, hyphens, embedded English glosses).

### New Task 159. Normalize family-classification taxonomy strings across `wordmap_meta.js`

Goal:
Resolve **307 distinct `family:` string values** that contain at least 12 inconsistencies where the same lineage is labeled differently across rows. The filter UI groups by `family` token, so this drift directly degrades the user-facing language-family browser: a learner who picks "Sino-Tibetan" sees a different language list than a learner who picks "Sinitic," even though they overlap.

Current issue I checked (counts via 2026-05-06 scan):

**Sinitic / Sino-Tibetan inconsistency (13 rows misaligned):**
- 21 rows use `Sinitic (...)` as the top label (e.g., `Sinitic (Mandarin, Ji-Lu)`).
- 8 rows use `Sino-Tibetan (...)` for *Sinitic* sub-branches (e.g., `Sino-Tibetan (Yue)`, `Sino-Tibetan (Min Nan)`, `Sino-Tibetan (Wu)`).
- Both are technically correct (Sinitic is a branch of Sino-Tibetan) but the project should pick one and apply it. Recommend `Sinitic (...)` for the Sinitic sub-branches and reserve `Sino-Tibetan (...)` for non-Sinitic Tibeto-Burman.

**Bantu under Atlantic-Congo vs Niger-Congo (33 Bantu rows split):**
- 28 Bantu rows use `Niger-Congo (Bantu, ...)`.
- 4 use `Atlantic-Congo (Bantu, ...)` (recent additions).
- 1 uses `Bantu (Nguni)` directly with no parent.
- Modern Glottolog/Hammarström classification places Bantu under Atlantic-Congo; the project should pick one taxonomy convention.

**Iranian / Indo-European (Iranian) split (14 rows):**
- 11 rows use `Iranian (...)` directly (e.g., `Iranian (Northwestern, Caspian)`).
- 9 rows use `Indo-European (Iranian, ...)` (e.g., `Indo-European (Iranian, Old)`).
- Same lineage, two prefix conventions. Pick one.

**Romance / Indo-European (Romance) split (28 rows):**
- 26 rows use `Romance (...)` (e.g., `Romance (Iberian, Astur-Leonese)`).
- 1 uses `Indo-European (Romance, Gallo-Romance)`.
- 1 uses `Indo-European (Romance, Iberian)`.

**Saami / Sámi spelling (5 rows):**
- 3 rows: `Uralic (Saami)`.
- 1 row: `Uralic (Sámi)`.
- 1 row: `Uralic (Sámi, Western)`.
- Pick one spelling and apply.

**Atlantic / Atlantic-Congo (2 rows ambiguous):**
- 1: `Atlantic (Niger-Congo)`.
- 1: `Atlantic-Congo (Mel)`.
- Different ways of saying the Mel sub-branch.

**Indo-Aryan / Indo-European (Indo-Aryan) (none mixed today, but the asymmetric pattern with Iranian is fragile)** — Indo-Aryan rows are all `Indo-Aryan (...)` while Iranian rows are sometimes `Indo-European (Iranian, ...)`. The two should follow the same pattern.

**Mongolic slash style (1 row):**
- `Mongolic (Western/Oirat)` uses a slash inside parens.
- All other multi-part labels use comma: `(Western, Oirat)`. Normalize.

Files to change:
- `wordmap_meta.js` — every `family: '...'` occurrence, mechanical search-and-replace.
- `lang-filter.js` — confirm the family taxonomy in the filter UI matches the new normalized strings.
- `validate_wordmap_data.js` — add a check that warns on family strings with inconsistent prefix conventions (e.g., `Niger-Congo (Bantu, ...)` and `Atlantic-Congo (Bantu, ...)` cannot both exist in the same dataset).
- `wordmap-modern-audit-feedback.md` — record the policy choice in a new follow-up Pass entry.

Implementation instructions:

**Step 1 — pick a policy.** Document in CONTRIBUTING.md a single rule: "Family strings use the *most specific commonly-used genealogical label* with sub-branches in parentheses, comma-separated. Top-level prefix is the lineage's accepted modern name (e.g., `Atlantic-Congo`, not legacy `Niger-Congo`; `Sinitic`, not the macro `Sino-Tibetan`, when the row is Sinitic)."

**Step 2 — apply the rule:**
- All Sinitic rows: `Sinitic (...)`. Move the 8 `Sino-Tibetan (Yue|Min Nan|Wu|...)` rows to `Sinitic (...)`.
- All Bantu rows: `Atlantic-Congo (Bantu, ...)`. Move the 28 `Niger-Congo (Bantu, ...)` rows. The 1 `Bantu (Nguni)` row gets the full prefix.
- All Iranian rows: `Indo-European (Iranian, ...)`. Move the 11 short-form rows. (Or, alternatively, all become `Iranian (...)` — pick whichever the project policy prefers, but apply uniformly.)
- All Romance rows: `Indo-European (Romance, ...)` *or* `Romance (...)` — uniform.
- All Saami rows: `Uralic (Saami)` (English convention) *or* `Uralic (Sámi)` (endonym convention). Document choice.
- `Atlantic (Niger-Congo)` → `Atlantic-Congo (Mel)` (or the row's actual Mel sub-branch).
- `Mongolic (Western/Oirat)` → `Mongolic (Western, Oirat)`.

**Step 3 — re-validate filter behavior.** After normalization, verify the lang-filter UI shows the expected language counts under each family chip. Some chips may merge (e.g., `Atlantic-Congo (Bantu, ...)` count grows from 4 to 33).

Validator / static check:
- Warn if any family string occurs only once (likely a typo or one-off label inconsistency).
- Warn if both `Niger-Congo (Bantu, X)` and `Atlantic-Congo (Bantu, X)` exist in the same dataset.
- Warn if both `Saami` and `Sámi` exist in the same dataset.
- Warn if both `Sinitic (X)` and `Sino-Tibetan (Sinitic, X)` patterns exist for the same X.

Do not:
- Do not change the family string for a single row without checking what the filter UI does. The lang-filter chip count is user-visible and changes when family strings change.
- Do not introduce a *third* convention while normalizing. If the project uses `Niger-Congo`, do not also start using `Volta-Congo` for some rows.
- Do not strip sub-branch detail. The current sub-branch labels (`R10`, `S10 Shona`, `JE Runyakitara`) carry information that historical/typological filters depend on.
- Do not bundle this with Task 130 (`scriptTags` schema) — those are independent.

Done when:
- All 307 distinct family strings are reviewed and any duplicates collapsed.
- The CONTRIBUTING.md "family string convention" paragraph exists.
- `node validate_wordmap_data.js` passes including the new family-consistency warnings.
- `lang-filter.js` chip counts visibly reflect the normalized taxonomy.

### New Task 160. Fix residual capital `N` and Baxter-Sagart non-IPA notation in IPA fields

Goal:
Close the IPA-strictness gap on cells that still contain non-IPA characters in the IPA column. Two specific patterns slipped past the Pass-2 cleanup:
1. **One residual capital `N`** in `ja_edo` (mother): `okkasaN` while the same row's father uses `otottsaɴ`. Within-row inconsistency.
2. **73 Baxter-Sagart Old/Middle Chinese cells** in `zh_tang` (and 3 in `och`) using `X` (rising tone) and `H` (departing tone) finals plus `*C.` syllabicism prefixes. These are reconstructional conventions, not IPA.

Current issue I checked:
- `wordmap_data.js:1040` — `ja_edo` row has `mother:['おっかさん','okkasaN']` while `father:['おとっつぁん','otottsaɴ']` and `hello:['御機嫌よう','ɡokiɡeɴjoː']` use the correct `ɴ`. The `N` is a Pass-2 oversight.
- `zh_tang` row has IPA cells like `ɕyɪX`, `xuɑX`, `bɨoX`, `ʔɑiH`, `ʔimX`, `kʰiuɛnX`, `ɕɨuX`, `mʉɐnH piuk`, `ziɛH`, `dʑiɛnX`. The X/H letters are Baxter-Sagart Middle Chinese tone notation: 上聲 (X) and 去聲 (H). Real IPA uses tone bars (˩˨˧˦˥) or numerical tone values, not Latin letters.
- `och` Old Chinese has IPA like `*C.nik`, `*C.mˤok`, `*C.muk` — Baxter-Sagart syllabicism prefix `C.` indicates an unidentified prefix consonant. Asterisk indicates reconstruction (which is correct for `dataStatus: 'reconstructed'`) but the `C.` prefix is convention-specific.

Files to change:
- `wordmap_data.js` — `ja_edo` mother cell + `zh_tang` 73 cells + `och` 3 cells.
- `wordmap_meta.js` — for `zh_tang` and `och`: set or confirm `pronunciationType: 'mixed'` (Baxter-Sagart is a transcription convention with IPA borrowings, not pure IPA), and add a `transcriptionConvention: 'Baxter-Sagart 2014'` field if the schema allows.
- `validate_wordmap_data.js` — add a check that flags ASCII uppercase A–Z in the IPA column (excluding the project-allowed IPA small-cap symbols `ɴ ɪ ʏ ʊ ʟ` etc.). Currently the validator catches some patterns but not Baxter-Sagart X/H finals.

Implementation instructions:

**For `ja_edo` mother:**
- Change `okkasaN` → `okkasaɴ` (LATIN LETTER SMALL CAPITAL N, U+0274) to match the rest of the row.

**For `zh_tang` (73 cells):**
- **Option A (recommended):** Convert X → tone bar `˨˦` (rising; specific Chao value depends on the reconstructed Middle Chinese tone class, but `˨˦` is the conventional substitute) and H → `˥˩` (departing). Document in `wordmap_meta.js` `description` that the row uses Middle Chinese reconstructed values.
- **Option B (preserve scholarly notation):** Keep X/H, but move them out of the IPA column into a new `transcriptionScholarly` field. The IPA column then stays empty or holds a phonetic approximation in real IPA. Set `pronunciationType: 'mixed'` and document.
- **Option C (mark as transcription):** Keep X/H in the IPA column but set `pronunciationType: 'romanization'` or a new `'reconstruction-notation'` value. Update the validator to allow.
- Pick one option in this task; do not mix.

**For `och` Old Chinese:**
- Same options as zh_tang but with Baxter-Sagart's `*C.` prefix syllabicism marker. Most accessible solution: keep the `*C.` form but treat the IPA column as `pronunciationType: 'mixed'` and add CONTRIBUTING.md documentation.

**For `tlh` Klingon `*` strings:**
- The scan flagged 3 Klingon cells but they appear to use `*` for project-internal reasons (possibly marker for "not yet sourced"); audit these separately.

Validator / static check:
- New check `[#160]`: any IPA cell containing ASCII A–Z (uppercase Latin) outside the allowlist of IPA small caps WARN. The current validator misses X/H endings.
- `transcriptionScholarly` (if added per Option B) must be a string with optional `convention` sub-field naming the system (e.g., `'Baxter-Sagart 2014'`).

Do not:
- Do not delete Baxter-Sagart X/H without preserving the scholarly value somewhere. Researchers consulting the row for Middle Chinese reconstruction need the original notation; do not strip information.
- Do not auto-convert X → ˨˦ for individual cells without confirming each cell's specific Middle Chinese tone class. Some X-final cells may correspond to different historical tone classes than others.
- Do not silently rewrite `okkasaN` to `okkasaɴ` without checking the rest of the `ja_edo` row for any other capital-letter survivors.
- Do not extend this task to "all non-IPA in IPA column" — there are too many edge cases (romanizations of unwritten languages, tone-letter conventions for tonal langs). This task scopes to ASCII A–Z (single-character residue) only.

Done when:
- 0 cells in `wordmap_data.js` contain ASCII A–Z uppercase characters in the IPA column except documented IPA small caps.
- `zh_tang` and `och` have a documented transcription convention (one of Options A/B/C applied).
- Validator's new `[#160]` check passes with 0 warnings.
- `wordmap-modern-audit-feedback.md` records which option was chosen and why.

### New Task 161. Distribute Korean and English historical-stage coordinates so they do not stack at modern capitals

Goal:
Extend Task 148's "Japonic stages clustering at Kyoto" fix to the two remaining historical-stage coordinate clusters: **Korean stages stacked at Seoul (37.57, 126.98)** and **English stages stacked at London (51.51, -0.13)**. Same problem as Task 148 — the marker overlap obscures that each row represents a distinct historical stage with its own representative geography.

Current issue I checked:
- `ko` (modern Korean), `ko_mid` (Middle Korean ~13th–16th c.), `ko_em` (Early Modern Korean ~17th–19th c.) all sit at Seoul (`37.57, 126.98`).
- `en` (modern Standard English / RP), `en_ck` (Cockney), `en_ang` (Old English ~7th–11th c.), `enm` (Middle English ~11th–15th c.) all sit at London (`51.51, -0.13`).
- Both clusters fail Task 14's coordinate-cluster check (`coord cluster: N codes at one (lat,lng)`); the validator currently flags only the Japanese cluster but the same logic applies here.

Files to change:
- `wordmap_data.js` — adjust lat/lng for at least 2 of 3 Korean stages and 2 of 4 English stages.
- `wordmap_meta.js` — record reasoning in `meta.locationBasis` (per Task 99) and free-form notes.

Implementation instructions:

**Korean stages:**
- `ko` (modern): keep at Seoul (37.57, 126.98). `locationBasis: 'capital'`.
- `ko_mid` Middle Korean: shift to **Gaegyeong (Kaesong)** at `37.97, 126.55` — the Goryeo dynasty capital where Middle Korean was the prestige variety. `locationBasis: 'historical-site'`.
- `ko_em` Early Modern Korean: keep at Hanyang/Seoul-area but shift slightly to **Hanyang** city-historical center, e.g., Gyeongbokgung Palace area (`37.58, 126.97`). `locationBasis: 'historical-site'` (acknowledging it is the precursor to modern Seoul, not modern Seoul itself). Alternatively, distribute to a regional Joseon-era prestige center like Suwon (37.27, 127.01).
- `ko_gor` (Goryeo Korean if present) → Gaegyeong (37.97, 126.55) — already aligned with `ko_mid` if that exists.

**English stages:**
- `en` (modern Standard / London): keep at London (51.51, -0.13). `locationBasis: 'capital'`.
- `en_ck` Cockney: shift slightly to **Bow / East End** (`51.53, -0.02`) — the working-class East London where Cockney is anchored. `locationBasis: 'prestige-center'` (in the dialectological sense of Cockney's own distinct prestige area).
- `en_ang` Old English: shift to **Winchester** (`51.06, -1.31`) — the Wessex capital and primary Old English prestige center. `locationBasis: 'historical-site'`.
- `enm` Middle English: shift to **Canterbury** (`51.28, 1.08`) for the Chaucer-era southern dialect tradition, OR to **London** at a Middle-English-era spot like Westminster (`51.50, -0.13`) if the row's lexical sources are London-Midland. Document the choice.

**Coordinate offsets:**
- Each new coordinate must differ from the cluster's center by at least 0.05° in lat or lng to clear the validator's cluster threshold.
- Document each shift in the row's `description` (or a new `historicalGeography` field) so future readers see why the modern/historical capitals diverge.

Validator / static check:
- Existing `[#14]` check covers this. After the shifts, the Korean and English clusters should no longer trigger.
- Optional: extend the cluster check to flag any case where ≥ 2 historical-stage rows share coordinates with the modern row of the same family (e.g., `ja` and `ja_heian` should not be at the same point).

Do not:
- Do not jitter coordinates randomly to clear the warning. Each new coordinate must correspond to a documented historical site.
- Do not shift modern `ko` or `en` rows; modernity stays at the modern capital.
- Do not push Old English to Wessex without acknowledging that Old English is a dialect continuum across many West-Saxon and Anglian centers; pick one representative point but document the choice.
- Do not pick coordinates outside the language's actual historical range. Old English at, say, York would push the row into Anglian rather than West Saxon territory; pick consciously.

Done when:
- The Korean stages cluster (3 rows) is split into ≥ 2 distinct coordinates separated by ≥ 0.05°.
- The English stages cluster (4 rows) is split into ≥ 3 distinct coordinates.
- Validator `[#14]` check no longer flags these clusters.
- Each new coordinate has a `locationBasis` value and a brief explanation in the row's `description`.

### New Task 162. Audit and document the 133 unattested `—` cells across 36 languages

Goal:
The validator currently reports `154 word entries contain "—"` (per latest run). Of these, ~133 are in modern/active languages and concentrate in specific concepts: `thanks` (26), `hello` (23), `cat` (21), `love` (8), `drink` (7). The dataset does not distinguish between (a) "this language genuinely lacks a basic word for this concept" (legitimate cultural absence), (b) "the form exists but is unsourced/unattested in available materials," and (c) "the form was simply never filled in." A learner cannot tell which of the three applies, and the validator cannot tell either.

Current issue I checked (2026-05-06 scan):

**Concept-distribution of `—` cells in modern languages:**
- thanks: 26 langs (suggests many languages did not historically have a single-word "thanks" — it's a culturally European/East-Asian formula).
- hello: 23 langs (similar — many languages use time-of-day greetings or no general "hello").
- cat: 21 langs (interesting — likely indigenous languages with no native word because cats arrived with European contact).
- love: 8 langs.
- drink: 7 langs (some languages only have specific drink-X verbs; no general "drink").
- eat: 5 langs.
- heart: 5, tree: 5, house: 4, good: 4, fire: 3, moon: 3, dog: 3, hand: 3, eye: 3, one: 3, sun: 2, mother: 2, father: 2, water: 1.

**Total: 133 unattested cells across 36 modern languages** (plus ~21 in historical languages, which are expected and not in scope here).

Files to change:
- `wordmap_data.js` — for cells where the absence is semantic/cultural, no change to the `—` itself. For cells where the absence is *unfilled*, fill them.
- `wordmap_meta.js` — add a new `meta.unattestedReason: { <concept>: 'cultural-absence' | 'unsourced' | 'recent-loanword' | 'has-only-derived-form' | 'unknown' }` schema to document why each `—` is there.
- `validate_wordmap_data.js` — new check `[#162]`: if a cell is `—`, the language's meta should have `unattestedReason[concept]` set; otherwise WARN.
- `CONTRIBUTING.md` — document the policy: when to use `—` vs when to fill in a form.
- `wordmap.html` — modal already shows the localized "unattested" label (Task 100); extend it to show the reason when `unattestedReason` is set: e.g., "—  (no native word; introduced via Spanish contact)".

Implementation instructions:

**Step 1 — categorize each of the 133 cells.** A one-time spreadsheet pass (or an annotated PR) mapping each (language, concept) → reason category:

- `cultural-absence`: the language genuinely lacks a basic word. Example: many Polynesian languages do not have a non-formula thanks; some Pirahã / Amazonian languages reportedly lack "love" as a basic concept.
- `unsourced`: a form likely exists but is not yet documented in available references. Action: ask community contributors or check a specialist.
- `recent-loanword`: a loanword exists (e.g., English `cat` borrowed into many indigenous American languages) and the project policy is to mark it `—` rather than show the loanword as the basic word. Action: either fill in with the loanword + `wordEvidence.note: 'recent loanword from X'`, or keep `—` with documented reason.
- `has-only-derived-form`: the language has a derived/compound form for the concept but no monomorphemic basic word. E.g., a language might say "love" only as "have-strong-feeling" without a single-word equivalent.
- `unknown`: simply not yet researched.

**Step 2 — backfill where possible.** For `unsourced` and `recent-loanword` categories, fill the cell after sourcing. Move from `—` to the actual form with `wordEvidence`.

**Step 3 — document `cultural-absence`.** For genuine absences, keep `—` but record the reason in `meta.unattestedReason`. The UI can then show "—  (no native single-word form)" instead of just "—".

**Step 4 — validator coverage.** New check ensures every `—` cell has documentation.

**Heuristic targets for backfill (likely "unsourced" rather than cultural absence):**
- `cat` in Australian / Native American / Pacific languages — almost always there is a name, often an English loanword. Fill these.
- `thanks`/`hello` in tribal languages — usually a multi-word formula exists and is fillable; mark formType per Task 103.
- `drink` in some Bantu / Nilotic — many have a native verb root; fill where citeable.
- `love` in some Pacific / Pirahã — careful; some are genuinely missing.

Validator / static check:
- `[#162]` `—` cell without `meta.unattestedReason[concept]` → WARN.
- INFO line: `unattested cells: N total, M with reason documented`.
- Validator should not require *every* `—` to be filled — that would break the cultural-absence cases. It only requires *documentation*.

Do not:
- Do not auto-fill cultural-absence cells with placeholder forms. If a language genuinely lacks a basic word, do not invent one to silence the warning.
- Do not assume a `—` is wrong. Some are correct cultural-absences and the project's pedagogical value increases by *showing* them with explanation.
- Do not move the `—` to an empty string. Empty strings hide the data, while `—` makes the absence visible.
- Do not document reasons in the `description` free-form. Use the structured `unattestedReason` field so the validator can verify.

Done when:
- All 133 modern-row `—` cells have `meta.unattestedReason[concept]` set.
- Validator `[#162]` check passes (0 undocumented `—` cells).
- Modal shows reason when `unattestedReason` is set.
- A learner browsing a Polynesian language with `thanks: —` sees "—  (uses formulaic phrase, not single-word)" or similar.
- Backfill of recoverable cells (`unsourced`, `recent-loanword`) completes; the total `—` count shrinks from 133 toward the truly-cultural-absence baseline (likely 60–80).

### New Task 163. Normalize ASCII affricate notation `ts/dʐ/...` to IPA tie-bar across the corpus

Goal:
Concrete execution of Audit §14 (deferred since 2026-04-21). The scan identified **92 cells** using bare ASCII `ts` (no tie bar) where strict IPA expects `t͡s` (U+0361 COMBINING DOUBLE INVERTED BREVE) or the precomposed `ʦ`. Cells affected include Japanese kun forms (`月 tsɯki`, `tsɯkɨ`), Sinitic dialects (`房子 fɑŋ˧˥tsɨ`, `樹 tsʰiu˧`), Germanic affricates (`Herz hɛʁts`), and similar.

Current issue I checked:
- 92 cells contain bare `ts` or `tsʰ` adjacent to a vowel or consonant context where the affricate reading is intended.
- The same cells in some sister languages already use `t͡s` (e.g., Polish `c [t͡s]` in some rows) — within-corpus inconsistency.
- `pronunciationType` is `'broad'` or `'orthography'` for many of these rows, which technically licenses broad notation, but it is not consistently applied (some `'ipa'`-tagged Polish/Japanese rows still use bare `ts`).

Files to change:
- `wordmap_data.js` — 92 cells across roughly 20 languages.
- `CONTRIBUTING.md` — add the affricate notation policy to the IPA Policy section (Task 81).
- `validate_wordmap_data.js` — new check that warns when an `'ipa'`-tagged row has bare ASCII `ts`/`dz`/`tʃ`/`dʒ` (tie-bar required for strict IPA) but allows them in `'broad'`/`'romanization'`/`'orthography'` rows.

Implementation instructions:

**Step 1 — pick the convention.**
- **Option A (strict IPA):** Migrate to `t͡s` (with tie bar U+0361) everywhere strict IPA is intended. Applies to all `pronunciationType: 'ipa'` rows.
- **Option B (precomposed ligature):** Use `ʦ` (U+02A6 LATIN SMALL LETTER TS DIGRAPH) — visually compact but deprecated in current IPA recommendations.
- **Option C (broad transcription stays bare):** Allow bare `ts` only when `pronunciationType` is `'broad'` or `'romanization'`. Strict IPA rows must use tie-bar. This requires per-row review of `pronunciationType`.
- Recommend Option C (most semantically honest).

**Step 2 — apply mechanically.**
- For each of the 92 cells, look up the row's `pronunciationType`:
  - If `'ipa'`: change `ts` → `t͡s`, `tsʰ` → `t͡sʰ`, `dz` → `d͡z`, `tʃ` → `t͡ʃ`, `dʒ` → `d͡ʒ`.
  - If `'broad'`/`'romanization'`/`'orthography'`: leave as `ts`. No change.
  - If unset: pick the type first (per Task 76), then apply.

**Step 3 — apply to other affricate digraphs.**
- Same logic for `tʃ`, `dʒ`, `tɕ`, `dʑ`, `ʈʂ`, `ɖʐ`, `pf`, `bv`, `kx`. Scan and normalize.

**Step 4 — validator enforcement.**
- New check `[#163]` finds bare ASCII `ts` (etc.) in `'ipa'`-tagged rows and WARNs.

Validator / static check:
- The check must not fire on `'broad'` or `'romanization'` rows. Pre-filter by row's `pronunciationType`.
- Coverage line: `affricate tie-bar coverage: N/M cells in 'ipa' rows`.

Do not:
- Do not tie-bar an affricate that is actually a stop+fricative cluster (e.g., English "outset" has /ts/ across morpheme boundary, not /t͡s/). For surface-level cells of basic words this is rarely an issue but be careful with morphologically-complex surface fields.
- Do not bulk-replace without first deciding the row's `pronunciationType`. A row with `pronunciationType: 'broad'` should keep `ts`; bulk-replacing all 92 cells without per-row check would over-correct.
- Do not introduce `t͡s` in surface forms (only in IPA columns). Surface uses orthography of the language.
- Do not migrate Old/Middle Chinese cells in the same task — those are scoped under Task 160 (Baxter-Sagart).

Done when:
- 0 bare-ASCII affricate digraphs in `'ipa'`-tagged rows.
- `'broad'`/`'romanization'`/`'orthography'` rows continue to use bare digraphs (intentional).
- Validator `[#163]` reports 0 errors and provides coverage line.
- CONTRIBUTING.md IPA Policy section documents the rule.

### New Task 164. Audit reconstructed-form notation consistency between surface and IPA columns

Goal:
Reconstructed/proto languages (`ine` PIE, `pry` Proto-Ryukyuan, `oko` Old Korean, `okg` Old Goguryeo, `ko_gor` Goguryeo Korean, `och` Old Chinese) use different conventions in surface vs. IPA. Surface keeps the asterisk and bound-stem hyphen (`*h₁ed-`); IPA strips them (`h₁ed`). Whether to do this is a real policy choice, but currently it is inconsistent within the project.

Current issue I checked:
- `ine` PIE row: surface `*h₁ed-`, IPA `h₁ed`. Asterisk and trailing hyphen present in surface only.
- `och` Old Chinese: both surface and IPA carry `*` (`*C.nik`).
- `pry`/`oko`/`okg`/`ko_gor`: pattern varies row to row; some rows have `*` in both columns, others only in surface.
- `wordEvidence.formType` schema (Task 103) supports `bound-stem` and `reconstructed-root` annotations, but the asterisk/hyphen presence is not consistent with the formType tag.

Files to change:
- `wordmap_data.js` — reconstructed-language rows.
- `CONTRIBUTING.md` — document the convention.
- `validate_wordmap_data.js` — new check that enforces consistency.

Implementation instructions:

**Step 1 — pick a convention.**
- **Option A:** Reconstructed forms carry `*` in **both** surface and IPA. Bound stems carry trailing `-` in **both**. This is unambiguous but visually noisy.
- **Option B:** Reconstructed status is signaled only by `dataStatus: 'reconstructed'` (already in meta) plus `wordEvidence.formType: 'reconstructed-root'` (Task 103). Asterisk is removed from surface and IPA. Bound-stem hyphen is also removed; instead, `wordEvidence.formType: 'bound-stem'` flags it.
- **Option C (recommended):** Asterisk in surface; remove from IPA (current default for `ine`). The asterisk visibly signals "this is a reconstruction" to a reader scanning the surface column, while the IPA column gives a phonological form ready to be read aloud. Bound-stem hyphen: same — keep in surface, strip in IPA.

**Step 2 — apply consistently.**
- For each of the 6 reconstructed-language rows × 20 cells = 120 cells, audit and apply the chosen convention.
- Cross-check with `wordEvidence.formType` per Task 103. Every `*`-prefixed surface should have `formType: 'reconstructed-root'`. Every `-`-suffix surface should have `formType: 'bound-stem'`.

**Step 3 — validator.**
- `[#164]`: if surface starts with `*`, IPA should not (Option C); if surface starts with `*`, formType must be `'reconstructed-root'`; if surface ends with `-`, formType must be `'bound-stem'`.

Validator / static check:
- New check enforces the chosen convention.
- Cross-references `dataStatus: 'reconstructed'` with formType tags.

Do not:
- Do not selectively apply the convention to some reconstructed rows but not others. Either all reconstructed rows follow Option A/B/C, or the convention is broken.
- Do not strip `*` from `och` Old Chinese surface unless the policy is Option B. Old Chinese reconstructions are *all* asterisked by scholarly convention; stripping is a strong claim.
- Do not put `*` inside the IPA cell when reading aloud. The asterisk is meta-annotation, not a phoneme.

Done when:
- All 6 reconstructed-language rows follow the chosen convention uniformly.
- `wordEvidence.formType` matches surface presence/absence of `*` and `-`.
- Validator `[#164]` passes.
- CONTRIBUTING.md documents the rule.

---

## Data-Scrutiny Sweep (2026-05-06 part 12)

A second-pass scan of `wordmap_data.js` and `wordmap_meta.js` surfaced five additional structural data problems not addressed by Tasks 1–164. Each was found by scanning the actual file contents (not by reading docs), and each is reproducible.

Tools used in this pass:
- Per-field clustering of `meta.script`, `meta.official`, `meta.speakers`, `meta.countries` strings.
- Format-pattern detection on `LANG_DATA` row declarations.
- Codepoint-equality test between surface and IPA columns.
- Cross-reference between `LANG_DATA` keys and `meta` keys.

### New Task 165. Structurally normalize `meta.script` field — 277 free-form strings degrade filter/search

Goal:
Reduce the 277 distinct values currently in `meta.script` to a structured, filterable form. Right now the script field mixes a primary script name with parenthetical prose, with at least four different separator conventions for dual-script languages, plus historical/orthographic notes embedded in the same string. Task 130 added `meta.scriptTags` (a typed array) — but the prose `script` field still drives the modal display, and the prose drift is visible to users.

Current issue I checked (counts via 2026-05-06 scan):
- 277 distinct values for `meta.script`.
- 141 of those start with "Latin" but with all of the following parenthetical/separator variants:
  - `"Latin"` (209 langs).
  - `"Latin (CIP romanization)"` (7).
  - `"Latin / Jawi (historical)"` (5).
  - `"Latin / Arabic"`, `"Latin/Arabic"` — same content, different separator.
  - `"Cyrillic/Latin"` vs `"Cyrillic / Latin"` vs `"Latin / Cyrillic"` vs `"Latin/Cyrillic"` — same dual-script in 4 different orderings/spacings.
  - `"Latin (with Á Ŋ Ŧ Đ)"`, `"Latin (with ɛ ɔ)"`, `"Latin (with ƒ ɔ ɖ ɛ ɔ ɣ ŋ ʋ)"` — diacritic enumeration in free-form prose.
  - Embedded notes: `"Latin (since 19th c. missionaries); also Bengali script"`, `"Latin (post-1989); previously Cyrillic"`, `"No native script (the Inca used khipu cord-records); Latin script after Spanish contact"`.
  - At least 3 cases with truncated/escape-broken strings: `"Latin (with \\"`, `"Latin / N\\"` — the trailing `\\` suggests a quote-escape bug or a deliberately incomplete entry that needs cleanup.
- Same patterns repeat for `Cyrillic` (23 variants), `Arabic` (≥ 8 variants), `Devanagari` (≥ 4 variants).

Files to change:
- `wordmap_meta.js` — every `script: '...'` value.
- `validate_wordmap_data.js` — add a check that warns on multi-script `script:` strings whose ordering or separator differs from the canonical form.
- `wordmap.html` — modal already renders `script`; ensure it falls back to `scriptTags` (Task 130) when present and uses `script` only as prose-readable supplement.
- `CONTRIBUTING.md` — document the canonical formatting rule.

Implementation instructions:

**Step 1 — pick a canonical formatting rule.** Recommended:
- Single primary script: `"Latin"` / `"Cyrillic"` / `"Arabic"` / etc.
- Multi-script (current usage): primary first, then ` / ` (space-slash-space), then secondary, e.g., `"Latin / Cyrillic"`. Never `"Latin/Cyrillic"` (no space) or `"Cyrillic/Latin"` (wrong ordering — primary should be the one most-used today).
- Parenthetical detail: only the *script variant* fits in parens. Free-form prose (history, missionary dates, diacritics enumerations) moves to `meta.description` or a new `meta.scriptHistory` field. Examples:
  - Allowed: `"Latin"` ✓, `"Latin / Jawi"` ✓, `"Cyrillic (with Ӑ Ӗ Ҫ Ӳ)"` ✓ (parens describe the variant).
  - Not allowed: `"Latin (since 19th c. missionaries); also Bengali script"` — the date and "also" prose belong elsewhere; the structured value is `"Latin / Bengali"` and the date goes to `description`.
- Separator order: list scripts in dominant-first order. Document criterion (most-used today; if unclear, document the choice in a comment).

**Step 2 — apply mechanically.** Audit each of the 277 strings:
- Direct rename: `"Latin/Arabic"` → `"Latin / Arabic"`.
- Reorder: `"Cyrillic/Latin"` for languages where Latin is primary today → `"Latin / Cyrillic"`.
- Move prose to `description`: e.g., `"Latin (since 19th c. missionaries)"` → `script: "Latin"`, append "Latin script adopted in the 19th c. by missionaries" to the row's `description`.
- Fix escape-broken strings: every `"... \\"` or `"... \\\\"` is a string-escape bug. Read the original `wordmap_meta.js` and repair.

**Step 3 — extend `scriptTags` (Task 130) coverage.** Wherever `script` is rewritten, also ensure `scriptTags` is set. The `scriptTags` array is the structured data for filter/search; `script` becomes the prose-display fallback.

**Step 4 — UI.** Modal renders `scriptTags` (typed) when present, otherwise prose `script`.

Validator / static check:
- Warn on `script:` strings containing `/` without surrounding spaces.
- Warn on `script:` strings containing `;` (free-form prose marker) — should be split into structured fields.
- Warn on `script:` strings containing trailing backslash (`\\`) — escape bug.
- Warn on `script:` strings whose normalized form (lowercased, trimmed, collapsed-whitespace, sorted-multi-script) differs from another row's normalized form by only minor formatting — likely the same script with different writing.
- INFO line: count of distinct normalized scripts vs distinct raw scripts.

Do not:
- Do not delete the diacritic-enumerations (`"Latin (with ɛ ɔ)"`) without preserving the information. Move it to `description` or a new `meta.scriptDiacritics` field.
- Do not auto-collapse `"Latin"` and `"Latin (CIP romanization)"` — they are different orthographic conventions for different rows. The variant detail in parens is preserved when it identifies a distinct convention.
- Do not break the 209-row `"Latin"` flat case. Most rows are simple Latin; the canonicalization is for the 68 dual-script and prose-laden cases.
- Do not change `script` without checking that `scriptTags` (Task 130) accurately reflects the same information.

Done when:
- Distinct `meta.script` strings reduce from 277 to under 120 (expected: ~80 unique scripts after canonicalization).
- All escape-broken `script` strings are repaired.
- All multi-script values use ` / ` (space-slash-space) ordering with primary first.
- `validate_wordmap_data.js` warnings on script formatting drop to 0.
- A learner filtering by "Latin / Arabic" sees the same languages whether the original row said "Latin/Arabic" or "Latin / Arabic" or "Arabic / Latin".
- CONTRIBUTING.md documents the formatting rule.

### New Task 166. Replace `meta.official` free-form prose with a structured official-status enum

Goal:
The `meta.official` field has **382 distinct values** for ~595 languages (i.e., almost every row has a unique value). The semantic categories actually represented are far fewer (probably ~6: official-national, official-co, official-regional, recognized-minority, no-official-status, etc.) but the prose drift hides them. A user cannot filter "show me all officially-co-recognized languages" because there are ≥ 7 ways to spell the absence of national status alone.

Current issue I checked:
- "No" (34 rows), "None" (26), "No (regional)" (62), "No (recognized regional)" (31), "No (recognized minority)" (23), "No (recognized)" (5), "No (tribal recognition)" (5), "No (recognized aboriginal)" (5), "No (recognized scheduled)" (4), "No (recognized indigenous)" (3) — at least **10 string values, all expressing "not officially national but X-level recognition exists"**.
- Country-level entries also drift: `"South Africa"` (7), `"India (8th Schedule)"` (5), `"Mexico (national)"` (5), `"Republic of Daghestan"` (5), `"Taiwan (recognized indigenous language)"` (5), `"Uganda (regional)"` (4), `"Nigeria (regional)"` (3).
- Same recognition can be in different rows as `"Spain (co-official)"` vs `"Catalonia (co-official)"` vs just `"Spain"`.
- Some rows mix national and sub-national (`"China (regional)"`, `"Iraq (regional)"`).

Files to change:
- `wordmap_meta.js` — convert `meta.official` from a string to a structured enum + optional list:
  ```
  meta.officialStatus: 'national' | 'co-official' | 'regional' | 'recognized-minority' | 'recognized-indigenous' | 'recognized-historical' | 'none'
  meta.officialIn: ['Country', 'Region', ...]   // jurisdictions where official
  meta.recognizedIn: ['Country', 'Region', ...] // jurisdictions where recognized but not official
  ```
  Keep `meta.official` as a derived display string (auto-generated from the structured fields) for backwards compatibility with existing UI rendering.
- `validate_wordmap_data.js` — enforce enum + check that derived display string matches structured fields.
- `wordmap.html` — modal renders `officialStatus` + `officialIn` as a structured row instead of the prose blob.
- `lang-filter.js` — add a filter chip for `officialStatus` that lets users filter by "national" / "co-official" / etc.
- `CONTRIBUTING.md` — document the enum.

Implementation instructions:

**Step 1 — define the enum.** Six values cover the cases observed:
- `'national'`: language is the (or a) sole official national language. Example: French in France.
- `'co-official'`: language shares official status with one or more other languages at the national level. Example: Catalan in Spain (alongside Spanish).
- `'regional'`: language has official status at a sub-national level (state, region, province, autonomous republic) but not nationally. Example: Welsh in Wales.
- `'recognized-minority'`: explicitly recognized minority language under EU/UN/national law but no co-officiality. Example: Sorbian in Germany.
- `'recognized-indigenous'`: recognized indigenous language with constitutional/scheduled status but not co-official at national level. Example: many Native American languages with US state recognition.
- `'recognized-historical'`: recognized as historical/heritage but not living official. Example: Latin in the Vatican.
- `'none'`: no official or recognized status anywhere.

**Step 2 — apply to all 595 rows.** Map each existing prose value to one of the enums + the `officialIn` / `recognizedIn` lists.

**Step 3 — validator coverage.** Every row must have `officialStatus`. Drift between structured and derived `official` strings flags WARN.

**Step 4 — UI display.** Render structured: `Status: regional · Spain · Catalonia · Balearic Islands · Valencia` instead of the freeform `"Spain (co-official)"`.

Validator / static check:
- Enum check on `officialStatus`.
- If `officialStatus !== 'none'`, then `officialIn` or `recognizedIn` must be non-empty.
- If `officialStatus === 'national'`, `officialIn` must have exactly one entry (the country).
- INFO line: distribution `national: N, co-official: M, regional: K, ...`.

Do not:
- Do not collapse `'co-official'` and `'regional'` — they answer different filter questions ("is this a national language?" vs "is this regional?").
- Do not auto-derive without checking each row. Some rows' prose entries hide nuance (e.g., `"Republic of Daghestan"` could be `'regional'` or `'co-official'` depending on Daghestan-specific law).
- Do not delete the prose `official` field; keep it as the derived display string. Some external tooling reads it.

Done when:
- All 595 rows have `meta.officialStatus`.
- Distinct values for the structured enum are exactly the 7 above.
- A user can filter by "co-official" and see exactly the languages with co-official status.
- Validator coverage info shows distribution.
- CONTRIBUTING.md documents the schema.

### New Task 167. Structurally normalize `meta.speakers` field with a parsed numeric range + qualifier

Goal:
The `speakers` field uses **at least 5 incompatible format conventions in 619 rows**, mixing structured counts, ranges, prose footnotes, and qualifier sentences. The current schema cannot answer numeric questions like "show me all languages with 1M–10M speakers" because the field is unparseable. A structured parse + qualifier separation enables filtering, sorting, and accurate map labels.

Current issue I checked (2026-05-06 scan, 619 rows):
- `"~125M"` form: 451 rows (most common, structured count).
- Range / qualifier prose: 145 rows. Examples:
  - `"~80M (Wu Chinese family total; Shanghainese alone ~15-20M)"`
  - `"~120M (Mandarin variety; overlaps with Chinese zh)"`
  - `"~200M (total; L1 ≈ 25-40M, mostly L2/national)"`
  - `"~25K (fluent)"`
- Bare number, no unit: 17 rows (e.g., `"~2,000"`, `"~45,000"`) — could be speakers in thousands or units.
- Qualifier-only: 6 rows (e.g., `"~100,000 (UNESCO: definitely endangered)"`).
- Other free-form: rest.

Files to change:
- `wordmap_meta.js` — extend with structured numeric:
  ```
  meta.speakerCount: { l1: number | null, l2: number | null, total: number | null,
                      range: 'point' | 'range', rangeMin: number, rangeMax: number,
                      year: number, source: string, vitality: 'safe' | 'vulnerable' | 'definitely-endangered' | 'severely-endangered' | 'critically-endangered' | 'extinct' }
  ```
  Keep `meta.speakers` as a derived display string for backwards compatibility.
- `validate_wordmap_data.js` — enforce numeric type + cross-check against the prose string.
- `wordmap.html` — modal renders structured count with formatting (e.g., "125 million L1 speakers (Ethnologue 26, 2023)").
- `lang-filter.js` — add a numeric-range filter slider for `speakerCount.l1` or `speakerCount.total`.
- `CONTRIBUTING.md` — document the schema.

Implementation instructions:

**Step 1 — parse existing prose to structured.**
- For each row, write a one-time parser that extracts:
  - Primary count → `speakerCount.l1` (default; speakers normally means L1)
  - Range if present → `rangeMin` / `rangeMax`
  - Year → `year`
  - Vitality → enum
  - Source attribution → `source`
- Examples:
  - `"~125M"` → `{ l1: 125000000, range: 'point', year: null, source: null }` (year/source filled from `speakerSource` / `speakerYear` if present).
  - `"~5,000–10,000 (UNESCO: critically endangered)"` → `{ l1: null, range: 'range', rangeMin: 5000, rangeMax: 10000, vitality: 'critically-endangered', source: 'UNESCO' }`.
  - `"~80M (Wu Chinese family total; Shanghainese alone ~15-20M)"` → `{ total: 80000000, range: 'point', notes: 'Wu Chinese family total; Shanghainese alone ~15-20M' }`.

**Step 2 — `speakerCount` becomes the source of truth.**
- The legacy `meta.speakers` string is auto-derived for display.
- The legacy `speakerSource`, `speakerYear`, `speakerBasis` fields (already partially present per Task 98) are merged into `speakerCount`.

**Step 3 — UI display.**
- Modal: structured presentation. `Speakers: 125,000,000 (L1) · Ethnologue 26 (2023)`.
- Map label: short form `~125M` (unchanged from today's display).

**Step 4 — vitality vs speakerCount.**
- Cross-validate: a language with `speakerCount.l1 < 1000` should typically have `vitality: 'severely-endangered'` or `'critically-endangered'`.

Validator / static check:
- `speakerCount.l1` must be `>= 0` if set; same for `l2`, `total`.
- `range: 'range'` must have `rangeMin <= rangeMax` and both set.
- If `vitality === 'extinct'`, count must be 0 and `dataStatus` must be one of `'attested'`, `'reconstructed'`, `'fragmentary'`.
- Coverage line: number of rows with `speakerCount` parsed vs raw `speakers` only.

Do not:
- Do not silently drop the prose footnote when parsing. The `notes` sub-field preserves it.
- Do not estimate speaker counts where the row's prose says "unknown" — leave structured nulls.
- Do not pick a single number when the prose says "L1 ≈ 25-40M". Use the range form.
- Do not collapse "Wu Chinese family total" with "Shanghainese alone" without naming what the row actually represents — the row's `name` already says (e.g., "Shanghainese"), so the `total` number must match the row's scope.

Done when:
- All 619 rows have `meta.speakerCount` structured.
- Distinct vitality enum values match the 6 standard UNESCO categories.
- A user can numeric-range-filter languages by speaker count.
- Validator coverage line is non-zero (≥ 80% of rows have parsed counts).
- CONTRIBUTING.md documents the schema.

### New Task 168. Unify the two declaration formats in `wordmap_data.js` (single-line vs multi-line)

Goal:
Resolve a structural inconsistency in `wordmap_data.js`: **603 rows use the single-line JS format** (`abc: { name: '...', native: '...', ... words: { ... } }`) while **16 rows use a multi-line JSON-style format** with double-quoted keys and one field per line. Both produce the same in-memory object, but they break tooling: regexes targeting the single-line form (used by validators, audit scripts, and the cell-extraction approach in this audit) silently miss the multi-line rows.

Current issue I checked:
- Single-line: 603 rows (e.g., `ja`, `en`, `fr`, `de`, every row added through the conventional pattern).
- Multi-line: 16 rows, all historical/ancient: `egy`, `pi`, `sux`, `akk`, `hit`, `peo`, `ave`, `xto`, `txb`, `xlu`, `pal`, `gmy`, `xhu`, `elx`, `kaw`, `kho`. Each is formatted like:
  ```
    egy: {
      "name": "Ancient Egyptian",
      "native": "𓂋 𓈖 𓆎𓅓𓏏",
      "lat": 25.69,
      "lng": 32.64,
      "words": {
        "water": [
          "𓈗",
          ...
        ]
      }
    }
  ```
- The validator handles both because it parses the file as JS, but every grep/sed/regex audit tool we've used silently undercounts. The Task 159 family scan, the Task 160 capital-letter scan, and several earlier scans missed these 16 rows.

Files to change:
- `wordmap_data.js` — convert the 16 multi-line rows to single-line format.
- `validate_wordmap_data.js` — add a check that flags rows declared in the multi-line format.
- `CONTRIBUTING.md` — document the canonical format.

Implementation instructions:

**Step 1 — convert the 16 rows.**
- For each: read the multi-line block, flatten to single-line format matching the conventional pattern.
- Preserve all data exactly. Verify by running validator before and after; the validator's totals should not change.
- The multi-line entries use double-quoted keys (`"name"` instead of `name`), which is also a JSON convention. Convert to unquoted keys to match the rest of the file.

**Step 2 — write a validator check.**
- Detect any row declared as `code: {\n` (newline immediately after the opening brace) without `name:` on the same line. Such rows are in multi-line format.
- WARN with the specific row codes.

**Step 3 — update CONTRIBUTING.md.**
- Document: "All rows in `wordmap_data.js` use the single-line JS format with unquoted keys: `abc: { name: '...', native: '...', lat: N, lng: N, words: { ... } }`. Multi-line JSON-style declarations (`abc: {\n  \"name\": ...,\n}`) are not allowed."

**Step 4 — confirm no auditing scripts have silently missed the 16 historical rows.** Re-run earlier audit scans after the conversion to verify they now report different (higher) counts.

Validator / static check:
- New check `[#168]`: any row declaration with newline immediately after `{` and double-quoted keys WARN.
- Coverage line: format consistency: 603/603 single-line.

Do not:
- Do not change any data values when reformatting. The conversion is whitespace and quote-style only.
- Do not move the historical rows out of `wordmap_data.js` — they are language data, not separate from the rest.
- Do not break Egyptian hieroglyph encoding when reformatting. The hieroglyphs use surrogate pairs and may be misread by some tools; verify NFC after reformat.
- Do not bundle this with Task 165 (`script` formatting) or Task 167 (`speakers` schema) — they are structurally independent.

Done when:
- All 619 rows in `wordmap_data.js` use the single-line format.
- Validator `[#168]` reports 0 warnings.
- The grep-extracted code count from `wordmap_data.js` matches `meta`-extracted count (619 == 619).
- Earlier audit scripts re-run and produce updated, complete results.

### New Task 169. Document and resolve the 144 cells where surface == IPA (orthography-as-IPA)

Goal:
The scan found **144 cells where the surface form and the IPA form are character-for-character identical**, and the surface contains non-Latin or extended-Latin characters (so it is not a trivial cognate-with-English case). For these cells, the IPA column carries zero additional information beyond what the surface column already shows. The cell is structurally redundant.

This is *not* a bug per se — many languages use phonemic Latin orthography that uses IPA-compatible characters (Yoruba `ɛ ɔ`, Akan `ɔ ɛ`, Bambara `ɲ ɔ`, etc.). For these languages, the surface IS the IPA. But the project does not surface this fact: a learner sees an "IPA" column and assumes it adds detail, when in reality it does not.

Current issue I checked (2026-05-06 scan):
- 144 cells where surface == IPA character-for-character (not just visually similar).
- Distribution by language:
  - `yo` Yoruba: ~12 cells (orthography uses ɛ ɔ + tone marks).
  - `ak` Akan: ~10 cells.
  - `bm` Bambara: ~6 cells.
  - `ee` Ewe: ~10 cells.
  - `nv` Navajo: ~5 cells (orthography uses á é í ó ą ę į).
  - `gn` Guarani: several cells.
  - `en_ang` Old English: ~8 cells.
  - `myn` Mayan: ~6 cells (kʼ for ejective k).
  - Plus 20+ more languages with ≥ 1 cell.

Files to change:
- `wordmap_meta.js` — for languages where surface matches IPA in the majority of cells, add `meta.surfaceIsPhonemicIPA: true`. UI rendering can then either:
  - **Option A:** Hide the IPA column for these languages (single-column view).
  - **Option B:** Show both columns but render the IPA column in a faded color with a tooltip "Same as surface — orthography is phonemic IPA".
  - **Option C:** Replace the IPA column for these languages with a *narrower phonetic transcription* (when sourced) that adds tonal/allophonic detail beyond the orthography. Flag affected cells with `pronunciationType: 'broad'` until upgraded to `'ipa'` with sourced narrow transcription.
- `wordmap.html` — implement the chosen rendering.
- `validate_wordmap_data.js` — flag cells where surface == IPA AND `pronunciationType` is `'ipa'` (those should be `'orthography'` or `'broad'` instead).
- `CONTRIBUTING.md` — document the policy.

Implementation instructions:

**Step 1 — pick the rendering option.**
- **Option B (recommended):** Show both columns, fade IPA when identical, tooltip explains. Preserves the current schema and the visual scan, but signals the redundancy. No data loss.
- **Option C (long-term recommended):** Source narrower transcriptions for these languages. For Yoruba, `ɛ̀` (low tone) on the orthographic `ɛ` adds tonal detail beyond the surface. For Old English, broad IPA for the dialectal pronunciation differs from orthography in subtle ways (e.g., `wæter` in OE orthography → `[ˈwæter]` in narrow IPA with stress).

**Step 2 — apply `surfaceIsPhonemicIPA` flag.**
- Audit each of ~40 candidate languages.
- Set `meta.surfaceIsPhonemicIPA: true` if all 20 cells (or > 90%) have surface == IPA.
- Set `meta.pronunciationType` to `'orthography'` for those languages (per Task 76).

**Step 3 — UI fade rendering (Option B).**
- For languages with `surfaceIsPhonemicIPA: true`, show the IPA column in a faded color with hover tooltip "Same as surface (phonemic orthography)" / 「文字表記と同じ (音素正書法)」.

**Step 4 — Long-term Option C plan.**
- For each language, identify a citeable narrow-transcription source.
- Replace the IPA column with sourced narrow transcription one language at a time.
- This is a multi-pass project; not blocking the rendering fix in step 3.

Validator / static check:
- New check `[#169]`: any cell with surface == IPA in a row where `pronunciationType === 'ipa'` WARN. The combination is contradictory (the IPA column adds no narrow detail).
- INFO line: count of cells where surface == IPA per language.

Do not:
- Do not delete the IPA column for these languages. Rendering hides redundancy; data deletion loses information about which languages use phonemic Latin (which is itself a typological fact).
- Do not auto-replace surface-IPA-equal cells with narrow IPA without a citeable source. The current state is a *correct* representation of phonemic orthography; replacing it with synthesized narrow transcription would degrade quality.
- Do not flag this as an error. It is a presentation/policy issue, not a data error.

Done when:
- ~40 candidate languages have `meta.surfaceIsPhonemicIPA: true`.
- All such rows have `pronunciationType: 'orthography'` (or `'broad'` if intentional).
- UI Option B (fade rendering) is implemented.
- Validator `[#169]` warns on `pronunciationType: 'ipa'` rows where surface == IPA.
- CONTRIBUTING.md documents the policy.

---

## Data-Scrutiny Sweep (2026-05-06 part 13)

A third-pass scan focused on relational integrity (cross-references between codes, fields, and metadata) and *coverage* metrics (what fraction of rows have which optional fields populated) surfaced four more data-quality problems not addressed by Tasks 1–169. Each is a real on-disk gap, reproducible by inspection.

Tools used:
- Cross-reference scan: every `parentCode` / `canonicalCode` / `iso6393` / `glottocode` / `baseLang` value verified against the `LANG_DATA` code set.
- Coverage counts on every optional schema field (`speakerYear`, `reviewStatus`, `wordEvidence`, `meta.sources`, `audioCoverage`, etc.).
- Cross-validation between fields (e.g., languages with `meta.sources` populated should typically have `reviewStatus !== 'unreviewed'`).

### New Task 170. Backfill missing `parentCode` on 30+ underscore-code rows where parent is unambiguous

Goal:
Close the parent-pointer gap surfaced by the cross-reference scan. **39 of 88 underscore codes have no `parentCode` set.** Some are intentional (Ryukyuan languages and Jeju were reclassified as sibling languages per Task 32, not children of Japanese/Korean), but the majority are real gaps where a clear parent exists. Without `parentCode`, the modal cannot show "Regional variety of: X", the duplicate-detection in Task 90 cannot link variants to their base, and the ancestor-chain navigation breaks.

Current issue I checked (2026-05-06 cross-reference scan):

**Intentionally without `parentCode` (do not change):**
- `ja_oki`, `ja_mvi`, `ja_rys` — Ryukyuan languages, sibling-language to Japonic per Task 32.
- `ko_jeju` — Jeju, sibling-language to Korean per Task 32.
- `th_isan` — Northern Thai continuum.
- `hak_cn`, `es_eu`, `pt_eu` — base varieties (other dialects point to these).
- Historical-stage codes that have no living parent (`el_grc`, `en_ang`, `enm`, `zh_song`, `zh_tang`, `zh_han`, `ja_edo`, `ja_heian`, `ja_chu`, `ko_mid`, `ko_gor`, `ko_em`, `vi_nom`).

**Gaps that should have `parentCode` set (likely 25–30 rows):**
- `ja_kg` (Kagoshima), `ja_sd` (Sendai) — should have `parentCode: 'ja'`.
- `ko_hg`, `ko_jl` — should have `parentCode: 'ko'`.
- `wuu_nb`, `wuu_sz`, `wuu_wz` — should have `parentCode: 'wuu'`.
- `hak_tw`, `hak_hl` — should have `parentCode: 'hak_cn'` (or `'hak'` if a non-regional Hakka exists).
- `nan_qz`, `nan_hai` — should have `parentCode: 'nan'`.
- `zh_wh`, `zh_zz` — should have `parentCode: 'zh'`.
- `es_co`, `es_cl` — should have `parentCode: 'es_eu'`.
- `fr_ch` — should have `parentCode: 'fr'`.
- `mn_cn` — should have `parentCode: 'mn'`.
- `en_nz` — recently added; should have `parentCode: 'en'`.
- `ko_yb` — Yanbian Korean; should have `parentCode: 'ko'`.

Files to change:
- `wordmap_meta.js` — add `parentCode` and `varietyRole` per Task 126 to the 25–30 rows above.
- `validate_wordmap_data.js` — strengthen check #126 (`underscore code without parentCode`) to enumerate all gaps and require either a `parentCode` or an explicit `varietyRole: 'sibling-language' | 'continuum-member' | 'base-variety' | 'historical-stage'`. Today the check probably exists but does not error on missing parent.
- `CONTRIBUTING.md` — document the variety-role taxonomy explicitly.

Implementation instructions:

**Step 1 — categorize the 39 rows.**
- Apply one of: `parentCode: 'X'` (regional variant of X), `varietyRole: 'sibling-language'` (e.g., Ryukyuan), `varietyRole: 'continuum-member'` (Isan/Northern Thai), `varietyRole: 'base-variety'` (es_eu), `varietyRole: 'historical-stage'` (Old English).

**Step 2 — modal display.** When `parentCode` is set: show "Regional variety of: <parent name>". When `varietyRole: 'sibling-language'` is set: show "Sibling language of: <related name>" (with explicit link). Today some of these are silently empty.

**Step 3 — validator escalation.** Underscore codes without either `parentCode` or `varietyRole` should ERROR (not just WARN) once Task 170 lands.

Validator / static check:
- `[#170]` Underscore code with no `parentCode` and no `varietyRole` → ERROR.
- `parentCode` value must exist as a top-level code in `LANG_DATA`.
- `varietyRole` must be one of the enum values.
- INFO line: parentCode coverage `N/M` underscore codes.

Do not:
- Do not assign `parentCode: 'ja'` to `ja_oki`/`ja_mvi`/`ja_rys`/`ko_jeju`. Those were deliberately reclassified per Task 32 and Task 126.
- Do not assume that all underscore codes have a parent. Continuum members and historical stages should use `varietyRole`, not a forced parent.
- Do not change `parentCode` of rows that already have it set without auditing the existing assignment first — there may be project-specific reasons (e.g., `fr_be` parentCode might intentionally not be `fr`).

Done when:
- 0 underscore codes lack both `parentCode` and `varietyRole`.
- Validator `[#170]` reports 0 errors.
- CONTRIBUTING.md documents the four `varietyRole` values.
- Modal displays the appropriate "Regional variety of: X" / "Sibling language of: X" line for every underscore-code row.

### New Task 171. Backfill `speakerYear` and `speakerSource` on the 552 rows that lack temporal anchoring

Goal:
**67 of 619 rows have `speakerYear` set; 552 do not.** This means 89% of speaker counts displayed on the map have no documented vintage. A user reading "~125M" cannot tell whether the figure is from Ethnologue 27 (2024) or a 1995 estimate that has drifted. For pedagogical/academic use the temporal anchor is required.

Current issue I checked:
- `speakerYear` set: 67 rows (66 are 2024, 1 is 2023).
- `speakerSource` set: also ~67 rows (correlated with `speakerYear`).
- The other 552 rows have prose `speakers: '~125M'` with no anchor.
- The Task 80 / Task 98 priority-language batches (it/uk/ko/th/vi/ms/tl/he/ja/zh/...) added these fields, but the rollout never extended beyond the priority set.

Files to change:
- `wordmap_meta.js` — add `speakerYear`, `speakerSource`, `speakerBasis` to the 552 rows.
- `validate_wordmap_data.js` — extend the existing speaker-coverage check to track `speakerYear` coverage and warn when it is below 80%.
- `wordmap.html` — modal already shows the structured form when fields are set (per Task 98). No new UI work needed; just data backfill.

Implementation instructions:

**Step 1 — sub-batch by source authority.**
- Most rows can use Ethnologue 27 (2024) as the canonical authority for speaker counts.
- For endangered/historical/recently-revived languages (Saami varieties, Hawaiian, Welsh, Cornish, Basque), prefer the most recent census or UNESCO atlas figure.
- For dialect rows (`ja_osa`, `en_ck`, `es_co`), the speaker count is often a local-government estimate or census; cite that explicitly.

**Step 2 — staged backfill.**
- Phase 1 (high-traffic 50 rows): manually source each.
- Phase 2 (next 200 rows): bulk import from Ethnologue 27 with cross-check.
- Phase 3 (remaining ~300 rows): opportunistic.

**Step 3 — validator-enforced minimum.**
- After Phase 1: validator warning threshold at 50% coverage.
- After Phase 2: 80%.
- After Phase 3: target 95% (some genuinely-impossible cases, like extinct languages with no census, remain).

Validator / static check:
- Coverage line: `speakerYear coverage: N/M (X%) — Y rows with speakers but no year`.
- Cross-check: if `speakerYear < 2010` AND `dataStatus === 'modern'`, WARN — speaker counts older than 15 years for living languages are likely outdated.

Do not:
- Do not invent dates. If a speaker count's source is unknown, leave the field unset rather than guessing.
- Do not bulk-set `speakerYear: 2024` for rows where the underlying prose is older. The `speakers` and `speakerYear` must agree.
- Do not skip the `speakerSource` field. Year alone without source is half-information.

Done when:
- 95% of `dataStatus: 'modern'` rows have `speakerYear` set.
- Validator coverage line reports the new state.
- No `dataStatus: 'modern'` row has `speakerYear < 2010`.
- For each `dataStatus: 'attested'` historical row, either `speakerYear: 0` (extinct) or an explanation in `description`.

### New Task 172. Migrate the implicit `reviewStatus: 'unreviewed'` default to explicit values

Goal:
**591 of 619 rows have no explicit `reviewStatus`** — they default to `'unreviewed'` in code, but the static data does not record this fact. The 28 explicitly-marked rows (per Task 108) are mostly `'source-checked'` or `'needs-rebuild'`. The hidden-default state means:
1. Contributors cannot tell which rows have been reviewed at any level vs which are simply untouched.
2. The validator cannot warn when a row has rich data (sources, wordEvidence) but reviewStatus is still 'unreviewed' — they look the same as bare rows.
3. The "review status badge" in the modal (per Task 108) shows nothing for 95% of rows, even though many have partial review.

Current issue I checked:
- 28 rows with explicit `reviewStatus`: 24 `'source-checked'`, 4 `'needs-rebuild'`, none `'human-reviewed'`, none `'machine-seeded'`, none `'unreviewed'`.
- ~70 rows have `meta.sources` populated but no explicit `reviewStatus` → suggests human review was done but not recorded.
- ~73 rows have `wordEvidence` populated but no explicit `reviewStatus` → same.
- The `REVIEW_STATUS` map at `wordmap_meta.js:2255` is the canonical setter, and it covers only the 28 explicit rows.

Files to change:
- `wordmap_meta.js` — extend `REVIEW_STATUS` map. Add an explicit value for every row, even if that value is `'unreviewed'`.
- `validate_wordmap_data.js` — new check that flags inconsistency: row with `meta.sources.length > 0` AND `reviewStatus === 'unreviewed'` → WARN (sources imply review).
- Same for rows with `wordEvidence`.
- `CONTRIBUTING.md` — document that every new row must include an explicit `reviewStatus`, even for new placeholder rows (which start as `'unreviewed'`).

Implementation instructions:

**Step 1 — assign `'machine-seeded'` to rows with no human review.**
- Rows imported from external sources (Wiktionary, Glottolog) without per-cell verification → `'machine-seeded'`.

**Step 2 — assign `'human-reviewed'` to rows with sources but no per-cell verification.**
- Rows where someone added a description and `meta.sources` but did not verify each of the 20 word entries against a source → `'human-reviewed'`.

**Step 3 — keep `'source-checked'` for rows where every cell has a citation.**
- Today's 24 such rows.

**Step 4 — keep `'needs-rebuild'` for rows flagged as low-quality.**
- Today's 4 such rows.

**Step 5 — validator escalation.**
- Once every row has explicit `reviewStatus`, the validator can WARN if a contributor adds a row without setting it.

Validator / static check:
- `[#172]` row missing `meta.reviewStatus` → WARN.
- Cross-check: `meta.sources.length > 0` AND `reviewStatus === 'unreviewed'` → WARN.
- Cross-check: `wordEvidence` populated AND `reviewStatus === 'unreviewed'` → WARN.
- INFO line: distribution of review states across all 619 rows.

Do not:
- Do not bulk-set every row to `'human-reviewed'`. The default is `'unreviewed'`; promote only with evidence.
- Do not set `'source-checked'` for rows that have sources at row-level but no per-cell citations. `'source-checked'` is a strong claim.
- Do not delete the existing `REVIEW_STATUS` map; extend it.

Done when:
- All 619 rows have explicit `reviewStatus` in the static data (not just the runtime default).
- Validator `[#172]` reports 0 missing.
- Validator coverage INFO shows distribution.
- Modal shows a review-status badge on every row, not just the 28 currently-flagged ones.

### New Task 173. Expand `wordEvidence` per-cell sourcing from 12% to ≥ 50% coverage

Goal:
**73 of 619 languages have any `wordEvidence` data; 546 have none.** Most rows show 20 surface/IPA pairs with no per-cell sourcing; a learner cannot tell which cells are well-attested vs. which are reconstructed approximations. Tasks 91/110/111/133 added the schema and started filling it in; this task is the broad coverage push.

Current issue I checked (validator INFO line + scan):
- `wordEvidence overlay: 73 languages, 300 cells annotated` (validator INFO).
- 0 languages have full 20-cell `wordEvidence` coverage.
- 9 languages have 10–19 cells.
- 4 languages have 5–9 cells.
- 21 languages have 1–4 cells.
- 39 languages have at least *something*; the rest (~580) have nothing.
- The 300-cell total is also less than 0.025 × (619 langs × 20 cells) = 12,380 cells. Coverage is 2.4% by cell, 12% by language.

Files to change:
- `wordmap_data.js` — add `wordEvidence` blocks for the priority languages.
- `wordmap_meta.js` — add corresponding `meta.sources` (Task 80) for the same languages.
- `validate_wordmap_data.js` — track `wordEvidence` coverage per language and warn when a `'source-checked'` row has < 20 cells annotated.
- `CONTRIBUTING.md` — document the policy that `'source-checked'` rows must have full 20-cell `wordEvidence`.

Implementation instructions:

**Step 1 — pick a coverage tier policy.**
- `'source-checked'` rows must have all 20 cells annotated. Currently 24 rows are flagged source-checked but most do not have 20 cells of evidence — this is an internal inconsistency and should be the first phase.
- `'human-reviewed'` rows should have at least 5 cells annotated (the most-uncertain ones).
- `'machine-seeded'` rows can have 0 cells but the row-level `meta.sources` must exist.
- `'unreviewed'` and `'needs-rebuild'` have no requirement.

**Step 2 — backfill the 24 currently-`source-checked` rows to 20-cell coverage.**
- These are explicitly claiming to be source-checked. The claim should be backed.
- Estimate: 24 × 20 = 480 new wordEvidence entries. ~1 day per language for a careful annotator.

**Step 3 — extend to top-50 priority languages.**
- The Task 80 / 98 priority list (`it`, `uk`, `ko`, `th`, `vi`, `ms`, `tl`, `he`, `ja`, `zh`, `en`, `fr`, `de`, `es_eu`, `pt_br`, `ru`, `ar`, `hi`, `bn`, etc.) should reach `'source-checked'` next.
- 50 × 20 = 1,000 cells.

**Step 4 — opportunistic for the rest.**
- No mandate; let coverage grow as contributors add languages.

Validator / static check:
- `[#173]` `'source-checked'` row with < 20 cells of `wordEvidence` → WARN.
- INFO line: coverage by tier (`source-checked rows: N/M with full coverage`).

Do not:
- Do not annotate cells without a real source. `wordEvidence: { evidence: 'direct' }` without a `source` field defeats the purpose.
- Do not duplicate `meta.sources` into per-cell `wordEvidence.source` if the row-level source covers all cells. Per-cell entries are for cells whose source differs from the row default or whose evidence type differs.
- Do not let this task block Task 172 (reviewStatus migration). Both can proceed in parallel; the dependency is one-way (Task 172 categorizes; Task 173 backfills evidence in the categorized rows).

Done when:
- All 24 `'source-checked'` rows have 20-cell `wordEvidence`.
- Coverage is ≥ 50% by language and ≥ 20% by cell.
- Validator `[#173]` warning is below 5 (down from current implicit 24).
- A learner clicking any modal cell on a `'source-checked'` row sees per-cell evidence; clicking on a `'human-reviewed'` row sees row-level sources at minimum.

---

## Data-Scrutiny Sweep (2026-05-06 part 14)

A fourth-pass scan focused on i18n coverage, metadata-field cross-references, and specific coordinate-vs-content cases surfaced five more concrete data problems. The findings shrink as the easy targets are exhausted; remaining issues are subtler architectural overlaps and specific row placements.

### New Task 174. Relocate constructed-language coordinates from the fake mid-Atlantic column

Goal:
The four constructed languages `eo` Esperanto, `tok` Toki Pona, `tlh` Klingon, and `jbo` Lojban are anchored at deliberate decoy coordinates in the **mid-Atlantic Ocean**, vertically stacked at lng=-38: `eo (32, -38)`, `tok (28, -38)`, `tlh (24, -38)`, `jbo (20, -38)`. This appears to be a UI hack to give them visible markers without overlapping any real-world location, but the result is geographically misleading: a learner reasonably expects each language's marker to point at a meaningful place. By contrast, `vo` Volapük is correctly placed at Litzelstetten near Konstanz (Schleyer's home) per Task 149's proposal — so the convention is inconsistent within the constructed-language group.

Current issue I checked (2026-05-06 scan):
- `eo`: lat=32, lng=-38 (mid-Atlantic).
- `tok`: lat=28, lng=-38 (mid-Atlantic, 4° south of `eo`).
- `tlh`: lat=24, lng=-38.
- `jbo`: lat=20, lng=-38.
- `vo`: lat=47.71, lng=9.20 (Litzelstetten — correct).

Files to change:
- `wordmap_data.js` — relocate 4 rows.
- `wordmap_meta.js` — set `meta.locationBasis: 'prestige-center'` for each (none of these have a native-speaker community to anchor a `'capital'` or `'largest-city'`).

Implementation instructions:

**Recommended relocations:**
- `eo` Esperanto → **Białystok**, Poland (53.13, 23.16) — birthplace of L. L. Zamenhof who created Esperanto. *Or* Rotterdam (51.92, 4.48) where the Universala Esperanto-Asocio is headquartered. Either is geographically and historically defensible.
- `tok` Toki Pona → **Toronto**, Canada (43.65, -79.38) — where the language's creator Sonja Lang lives.
- `tlh` Klingon → **Mountain View, California** (37.39, -122.08) — Paramount Pictures' historical Klingon Language Institute and the Star Trek franchise headquarters. Or, alternatively, set `dataStatus: 'constructed'` and use a clearly fictional but flagged coordinate (the surface of Kronos is not on Earth).
- `jbo` Lojban → **Fairfax, Virginia** (38.85, -77.31) — The Logical Language Group (LLG) headquarters, or simply Washington DC area as the closest-with-real-meeting-spaces approximation.

**Why each choice rather than mid-Atlantic:**
- The mid-Atlantic was likely chosen to avoid covering an existing language's marker. But the project already has `meta.locationBasis: 'prestige-center'` (Task 99) which signals exactly that the marker is symbolic. With `'prestige-center'` set, the user understands the marker is not "speakers live here" — it is a *historical/cultural anchor*, which is meaningful for constructed languages.

**Step 1 — relocate `eo` to Białystok or Rotterdam.** Document choice in `description`.
**Step 2 — relocate `tok` to Toronto.**
**Step 3 — relocate `tlh` to Mountain View** (or to Hollywood, depending on Klingon-history preference).
**Step 4 — relocate `jbo` to Fairfax** or LLG's current address.
**Step 5 — set `locationBasis: 'prestige-center'` on all four.** Document each choice in CONTRIBUTING.md.

Validator / static check:
- Cross-check: any constructed language with `locationBasis !== 'prestige-center'` and lat/lng in the mid-Atlantic deep-water (10°–50° N, -50° to -10° W) — WARN.
- The relocations should immediately satisfy the existing `[#14]` cluster check (currently all four cluster at lng=-38).

Do not:
- Do not invent a "headquarters" for a constructed language without a citeable real-world address. Do not place Klingon at "Romulus" or some made-up location.
- Do not retain the mid-Atlantic stack as a stylistic preference. The visual quirk obscures the project's pedagogical mission.
- Do not apply the same fix to `pjk` Proto-Japonic-Koreanic or other reconstructed-proto languages that already use `'approx-region'` — those have a defensible reason for non-pinpoint coordinates.

Done when:
- All 4 constructed-language rows have plausible real-world coordinates with `locationBasis: 'prestige-center'`.
- The coordinate-cluster validator no longer reports a cluster at lng=-38.
- A learner viewing the Esperanto modal sees "Białystok" or "Rotterdam" as the map point with prestige-center context.

### New Task 175. Add `es_eu`/`es_mx`/`pt_eu`/`pt_br` to `WORD_LIST.label` so regional Spanish/Portuguese UI users see localized concept labels

Goal:
Resolve a real i18n bug surfaced by cross-checking `WORD_LIST.label` UI lang coverage with `lang_names.js` UI lang coverage. **`WORD_LIST.label` has 19 UI langs (`es`/`pt` umbrella codes); `lang_names.js` has 21 UI sections (split into `es_eu`/`es_mx`/`pt_eu`/`pt_br`).** A user who selects `es_mx` (Mexican Spanish) UI gets concept labels via a fallback chain: `es_mx` → `es` (does not exist in WORD_LIST.label) → `en`. The result: **Mexican Spanish users see English concept labels** in the word selector and modal column headers. Same problem for `pt_br` users.

Current issue I checked:
- `WORD_LIST.label` (in `wordmap_data.js:6-26`) has UI lang keys: `en, ja, ko, zh, yue, vi, th, id, hi, de, fr, it, es, pt, ru, uk, ar, he, sw` (19 langs).
- `lang_names.js` has UI lang keys: `en, ja, ko, zh, yue, vi, th, id, hi, de, fr, it, es_eu, es_mx, pt_eu, pt_br, ru, uk, ar, he, sw` (21 sections; `es` split into `es_eu`/`es_mx`, `pt` split into `pt_eu`/`pt_br`).
- The application's UI lang dropdown (in `app.js`) likely offers 21 options, matching `lang_names.js`.
- When user selects `es_mx`, the concept-label lookup is `WORD_LIST[i].label.es_mx` (does not exist) → fallback to `WORD_LIST[i].label.es` (does not exist) → fallback to `WORD_LIST[i].label.en` (exists, English). User sees "Water" instead of "Agua."
- Validator does not catch this because `label.en` exists.

Files to change:
- `wordmap_data.js` — extend each of the 20 `WORD_LIST` entries' `label` to include `es_eu`, `es_mx`, `pt_eu`, `pt_br`.
- Optionally: extend `definition` similarly (related Task 176).
- `validate_wordmap_data.js` — new check that ensures `WORD_LIST.label` has every UI lang in `lang_names.js`.

Implementation instructions:

**Step 1 — define the regional differences.**
- For most concepts, `es_eu` and `es_mx` are spelled identically (Spanish orthographic standardization). But there are concept-level differences worth representing:
  - "computer": Spain `ordenador` vs Mexico `computadora`. Not in WORD_LIST but illustrative.
  - "you (singular informal)": `tú` everywhere; "you all": Spain `vosotros` vs LatAm `ustedes`. Not in WORD_LIST.
  - For the 20 actual concepts (water, fire, sun, ...), the Spanish forms are identical: `Agua`, `Fuego`, `Sol`, etc. So the labels would just duplicate `es: 'Agua'` into both `es_eu: 'Agua'` and `es_mx: 'Agua'`.
- For Portuguese: same — most concept words are identical, but for "house" `pt_eu: 'Casa'` and `pt_br: 'Casa'` are identical.

**Step 2 — pragmatic resolution.**
- **Option A (preferred):** Add `es_eu`, `es_mx`, `pt_eu`, `pt_br` to every `WORD_LIST.label` block, copying from `es` and `pt`. The duplication is fine because the concept labels are genuinely the same word.
- **Option B:** Add a fallback layer in the UI rendering: when `label[uiLang]` is missing, try `label[uiLang.split('_')[0]]` (so `es_mx` → `es`). This is a one-line UI fix without data changes.
- **Option C (combination):** Both — use Option B as the safety net AND add Option A's explicit values for the 5 cases (if any) where the regional split actually matters lexically.

**Step 3 — validator coverage check.**
- Add `[#175]`: every UI lang in `lang_names.js` must have a label entry in every `WORD_LIST` entry.

Validator / static check:
- INFO line: `WORD_LIST.label coverage: N/M UI langs covered across all 20 concepts`.
- WARN if any UI lang in `lang_names.js` has < 20 entries in `WORD_LIST.label`.

Do not:
- Do not invent a regional difference where none exists. `Agua` and `Agua` is fine.
- Do not skip Option B (UI fallback). Even with explicit values, the fallback is a safety net for any future UI lang added without `WORD_LIST.label` updates.
- Do not delete the umbrella `es` or `pt` keys. They remain valid for any `es_*` or `pt_*` UI lang that might be added later.

Done when:
- `WORD_LIST.label` has entries for all 21 UI langs in `lang_names.js`.
- A user selecting `es_mx` UI sees `Agua, Fuego, Sol, ...` instead of `Water, Fire, Sun, ...`.
- A user selecting `pt_br` UI sees `Água, Fogo, Sol, ...`.
- Validator `[#175]` passes.

### New Task 176. Expand `WORD_LIST.definition` from 4 UI langs to all 21

Goal:
**`WORD_LIST.definition` is set in 4 UI langs (en, ja, ko, zh) per Task 82.** The other 17 UI langs in `lang_names.js` (yue, vi, th, id, hi, de, fr, it, es_eu, es_mx, pt_eu, pt_br, ru, uk, ar, he, sw) see English fallback for concept definitions despite being supported elsewhere in the UI. A French-speaking learner who picks `fr` UI gets localized labels but English definitions, breaking the pedagogical experience that Task 95 (always-visible definitions) was built for.

Current issue I checked:
- `WORD_LIST[0].definition`: `{ en: '...', ja: '...', ko: '...', zh: '...' }`. 4 UI langs.
- All 20 entries follow the same 4-lang pattern.
- 17 UI langs in `lang_names.js` are not represented.
- The UI rendering's fallback chain hits English for these 17.

Files to change:
- `wordmap_data.js` — extend `WORD_LIST[i].definition` for every entry to include all 21 UI langs.
- `validate_wordmap_data.js` — strengthen Task 82's validator check to require all UI langs (not just `en/ja/ko/zh`).
- `meta_i18n_coverage.js` — if the project prefers a centralized translation layer rather than embedded translations in `wordmap_data.js`, host the additional 17 UI langs there.

Implementation instructions:

**Step 1 — translation source quality.**
- Translations of concept definitions are not casual labels. The "heart" definition explicitly says "default: basic emotional/cognitive heart/mind term" — a learner needs that nuance in their UI lang or the pedagogical value is lost.
- Use a competent translator per UI lang, not machine translation alone. Validate with a native speaker if possible.
- Length: keep each translation roughly the same character count as English to fit the modal display.

**Step 2 — phased rollout.**
- Phase 1 (priority European): de, fr, it, es_eu, es_mx, pt_eu, pt_br, ru, uk. ~9 langs × 20 = 180 strings.
- Phase 2 (priority Asian): yue, vi, th, id, hi, ar, he. ~7 langs × 20 = 140 strings.
- Phase 3 (remaining): sw. 20 strings.

**Step 3 — fallback chain resilience.**
- The UI rendering should still fall back gracefully if a UI lang's definitions are partial. Today's fallback is `uiLang → en`; consider extending to `uiLang → uiLang.split('_')[0] → en` for regional variants.

Validator / static check:
- `[#176]` `WORD_LIST[i].definition` missing UI lang `X` → WARN once `X` reaches Phase 1/2/3 readiness.
- Coverage tally: `definitions UI lang coverage: en 20/20, ja 20/20, ko 20/20, zh 20/20, fr X/20, ...`.

Do not:
- Do not machine-translate without review. The "heart" definition's nuance about anatomical-vs-emotional must transfer correctly.
- Do not skip the regional Spanish/Portuguese splits. A user who picks `pt_br` deserves a definition in their UI.
- Do not add UI langs to `WORD_LIST.definition` without also adding them to `WORD_LIST.label` (Task 175).

Done when:
- All 21 UI langs have full 20-entry coverage in `WORD_LIST.definition`.
- A learner with `fr` UI sees French definitions of all 20 concepts.
- Validator coverage line shows ≥ 95% per UI lang.

### New Task 177. Backfill `glottocode` (4% → ≥ 80%) and `iso6393` (11% → ≥ 95%) coverage

Goal:
**Glottocode coverage is 26/619 = 4%; iso6393 coverage is 65/619 = 11%.** Both are critical metadata fields for cross-database linking with Glottolog (the comprehensive linguistic database) and ISO 639-3. Without them, the project cannot link to canonical references for individual languages, and academic citations (Task 157) cannot include the standard identifiers.

Current issue I checked:
- 26 rows have `glottocode` set (e.g., `glottocode: 'stan1293'` for English).
- 65 rows have `iso6393` set (e.g., `iso6393: 'eng'`).
- Most non-historical languages have well-known Glottocodes: every modern living language is in Glottolog with a 4-letter-4-digit code.
- The `CANONICAL_CODE` map at `wordmap_meta.js:1996` has 82 entries for ISO 639-3 mapping but only sets them at runtime when neither `iso6393` nor `canonicalCode` is already set.

Files to change:
- `wordmap_meta.js` — backfill `glottocode` and `iso6393` for all rows.
- `validate_wordmap_data.js` — extend coverage check to enforce thresholds.
- `CONTRIBUTING.md` — document that all new rows must include both fields when available.

Implementation instructions:

**Step 1 — scrape from Glottolog.**
- Glottolog publishes a complete CSV at `https://glottolog.org/meta/downloads`. Cross-reference each project code with Glottolog's `iso639P3code` column to populate `iso6393`, and the `id` column to populate `glottocode`.
- For project-internal codes that don't map to a single Glottolog entry (regional dialects like `ja_osa`), use the parent's Glottocode and document via `parentCode`.

**Step 2 — verify each value.**
- Glottocodes follow strict pattern `^[a-z]{4}\\d{4}$`.
- Validator already (per scan) catches malformed values; extend to require non-null for `dataStatus: 'modern'` rows.

**Step 3 — handle ISO-less languages.**
- Some languages don't have ISO 639-3 codes (very recently described, project-internal pedagogical reconstructions). Document these explicitly with `iso6393: null` and an explanation in `description`.

Validator / static check:
- `[#177]`: `dataStatus: 'modern'` row without `glottocode` → WARN.
- `dataStatus: 'modern'` row without `iso6393` AND without `canonicalCode` → WARN.
- `glottocode` format check: `^[a-z]{4}\\d{4}$`.
- `iso6393` format check: `^[a-z]{3}$`.
- Coverage line: `glottocode N/M (X%); iso6393 N/M (X%)`.

Do not:
- Do not invent Glottocodes. If a row truly has none, leave the field unset and flag it.
- Do not duplicate the project code as ISO. `ja_osa: 'jpn'` is correct (Osaka is a variety of Japanese); `ja_osa: 'ja_osa'` would be wrong.
- Do not remove `canonicalCode` when adding `iso6393` — the two coexist (Task 178).

Done when:
- Glottocode coverage reaches ≥ 80% (495+/619).
- ISO 6393 coverage reaches ≥ 95% (588+/619).
- Validator `[#177]` reports below 50 missing.
- Citation export (Task 157) can include both identifiers per row.

### New Task 178. Resolve `iso6393` vs `canonicalCode` schema overlap — pick a single canonical concept

Goal:
The project has two fields for "the ISO 639-3 code this row corresponds to": **`meta.iso6393`** (set on 65 rows directly) and **`meta.canonicalCode`** (set at runtime from the `CANONICAL_CODE` map for ~82 codes when `iso6393` is not set). They express the same concept but live in two places. Validator and UI logic must check both. Tooling reading the data sees the same row sometimes via one path, sometimes via the other.

Current issue I checked:
- The runtime initializer at `wordmap_meta.js:2051`:
  ```
  if (CANONICAL_CODE[code] && !m.canonicalCode && !m.iso6393) {
      m.canonicalCode = CANONICAL_CODE[code];
  }
  ```
  This sets `canonicalCode` *only if* `iso6393` is unset. So a row never has both — but the choice depends on which got there first.
- Result: 65 rows use `iso6393`, ~82 use `canonicalCode`, 472 have neither.
- Both fields hold the same kind of value (an ISO 639-3 code).
- Per Task 109's commentary, the conceptual difference was: `iso6393` for direct ISO-code mapping, `canonicalCode` for "the canonical code where the project code differs." But in practice, every project code that has an ISO 639-3 fits both definitions — so the distinction collapses.

Files to change:
- `wordmap_meta.js` — pick one field, migrate the other.
- `validate_wordmap_data.js` — update checks.
- `CONTRIBUTING.md` — document the chosen single field.
- `wordmap.html` — modal rendering must read from the single field.

Implementation instructions:

**Step 1 — pick the canonical name.**
- **Option A:** Keep `iso6393`, deprecate `canonicalCode`. Migrate the runtime-set `canonicalCode` values into static `iso6393` values.
- **Option B:** Keep `canonicalCode` (more semantically descriptive — it includes pedagogical-stage codes, regional-variant mappings, etc.), deprecate `iso6393`.
- **Recommended Option A:** ISO 6393 is an external standard recognized by every linguistic database; `canonicalCode` is project-internal and carries no advantage over the standard name.

**Step 2 — apply migration.**
- For each of the 82 codes in `CANONICAL_CODE`, write the value into `iso6393` directly in the static meta block (instead of the runtime initializer).
- Delete the runtime block at `wordmap_meta.js:2035-2054`.
- Delete `canonicalCode` references in `validate_wordmap_data.js`, `wordmap.html`, and any tools.

**Step 3 — update validator.**
- Single-field check: `iso6393` must be valid ISO 639-3 format.
- Cross-check: `meta.codeType: 'historical-stage'` rows must have `iso6393` set to the closest 639-3 (`ang` for Old English, etc.).

Validator / static check:
- `[#178]`: any row with `canonicalCode` set after migration → ERROR (field deprecated).
- Coverage line: now single-source `iso6393 coverage: N/M`.

Do not:
- Do not remove `canonicalCode` without first migrating its values into `iso6393`. Data loss.
- Do not leave the runtime `CANONICAL_CODE` initializer in place after migration — it would re-set `canonicalCode` on every page load, undoing the migration.
- Do not bundle this with Task 177 (coverage backfill). Do migration first, *then* backfill — otherwise some rows get values written via the wrong field.

Done when:
- `canonicalCode` no longer appears in `wordmap_meta.js` static data.
- Runtime initializer at `wordmap_meta.js:2035-2054` is removed.
- Validator references only `iso6393`.
- UI modal references only `iso6393`.
- CONTRIBUTING.md documents the single canonical field.

---

## Cumulative status after data-scrutiny (Tasks 159–178)

After 4 rounds of data scrutiny:

**Confirmed clean (no issues found):**
- ASCII colon vs ː, ASCII apostrophe vs ʔ/ʼ, NBSP/Tab characters, NFC normalization, IPA stress mark misplacement, ZWJ/ZWNJ/LRM/RLM, surface IPA-bracket wrapping, code duplicates, wrong-script-in-IPA bleed, parentCode pointing to non-existent rows, numerical tones, IPA trailing digits, URL `https://` validity, source type values.

**Open data tasks (Tasks 143–178):** 35 tasks covering structural normalization, coverage backfills, schema overlaps, classification consistency, coordinate placements, and field-by-field semantic cleanup.

**Known sub-thresholds remaining to probe:**
- IPA vowel-quality consistency (ɨ vs ɯ, ʌ vs ɐ) across closely-related languages.
- `description` field's prose style consistency (some use prose, others use a structured opening-sentence formula).
- `meta.aliases` runtime-set vs static (similar overlap to Task 178).
- `meta_i18n_coverage.js` atom-translator pattern coverage.

These remaining areas are likely subtler than the 35 found so far and may yield 5–10 more tasks if probed with the same depth.

---

## Data-Scrutiny Sweep (2026-05-06 part 15)

A fifth-pass scan focused on cross-row identity (whole-row duplicate detection beyond Task 90's surface-fingerprint check), native-name disambiguation, and architectural overlaps surfaced four more concrete issues. The first three are *real data errors* (mislabeled or duplicate row entries), not just style/coverage gaps; they constitute on-disk bugs.

Tools used:
- 20-cell row fingerprint hashing (concatenated `surface|ipa` for every concept in row order).
- Native-name multimap detection.
- IPA vowel-symbol per-row distribution (ɨ vs ɯ, ʌ vs ɐ).

**No issue found in:** Japanese mainland uses ɯ uniformly while Ryukyuan uses ɨ — correct (different phonemes). Mandarin retroflex apical /ɨ/ in `tʂʰɨ` is correct. Description prose style "no final period" cases were regex artifacts on escaped apostrophes, not real data issues. ASCII straight quotes inside descriptions (36 cases) are intentional inline-quote uses (e.g., "Italian of the East") and acceptable typography.

### New Task 179. Resolve the `kv` / `kpv` duplicate row pair (Komi macrolanguage vs. Komi-Zyrian)

Goal:
The 20-cell whole-row fingerprint scan identified `kv` and `kpv` as **100% identical** rows: same surface, same IPA, same coordinates (61.67, 50.84 Syktyvkar), same native name (`Коми кыв`). The comment block at `wordmap_data.js:1432-1434` already acknowledges this overlap: "Komi-Zyrian (kpv) is the more standard ISO 639-3 code that the macro `kv` actually represents." This is the same pattern that was resolved for `mon`/`mnw` in Pass 7 (mn ISO 639-1 reserved for Mongolian, mnw is the actual Mon language code; `mon` row was deleted, `mnw` kept canonical).

Current issue I checked (2026-05-06 scan):
- `wordmap_data.js:1430` — `kv` row.
- `wordmap_data.js:1435` — `kpv` row, 100% identical content.
- ISO 639-1 `kv` is reserved for the Komi macrolanguage (covers both Komi-Zyrian and Komi-Permyak); ISO 639-3 distinguishes `kpv` (Komi-Zyrian) from `koi` (Komi-Permyak).
- Project also has `koi` Komi-Permyak as a separate row at `wordmap_data.js:1437` with distinct word data — that one is correct.
- Whole-row fingerprint validator (per Task 90) does flag `kv = kpv` as a duplicate group, but does not auto-resolve.

Files to change:
- `wordmap_data.js` — delete the `kv` row.
- `wordmap_meta.js` — delete the `kv` meta block.
- `lang_names.js` — delete `kv: '...'` entries from all 21 UI sections.
- `validate_wordmap_data.js` — remove `kv` from the duplicate-allowlist if listed; add a check that flags any new macrolanguage code (`kv`, `mn`-as-Mon, etc.) when the 639-3 code is also present.
- `wordmap.html` — check `HIST_DESCENDANT` for any `kv` references; replace with `kpv`.
- `changelog.html` — record the resolution.
- `wordmap-modern-audit-feedback.md` — record under Task 168 / Task 179 follow-up.

Implementation instructions:

**Step 1 — confirm `kpv` is canonical.**
- ISO 639-3 `kpv` is the explicit Komi-Zyrian. `kv` is the macro covering both Zyrian and Permyak.
- Keep `kpv` (specific) and `koi` (Permyak); delete `kv` (macro).

**Step 2 — remove `kv` and update references.**
- Delete the entry at `wordmap_data.js:1430`.
- Delete `kv` meta block (`LANG_DATA['kv'].meta = ...`).
- Update `lang_names.js` 21 UI sections.
- Search the codebase for `'kv'` string references and verify each is updated or removed (don't blindly delete — `kv` could appear in test code, examples, etc.).

**Step 3 — bump count strings.**
- Public count goes from 619 → 618.
- Update `wordmap.html` `<title>`, OG/Twitter descriptions, README, validator's expected count.

**Step 4 — validator.**
- Strengthen the whole-row fingerprint check to ERROR (not just INFO) on 20/20 cell duplicates that are not in an explicit allowlist.
- Add a per-language-family check: if both an ISO 639-1 macro code and its 639-3 specific code exist for the same language family, WARN.

Validator / static check:
- `[#179]` row pair with identical 20-cell fingerprint AND not in allowlist → ERROR.
- Coverage update: language total 619 → 618 after `kv` removal.

Do not:
- Do not delete `kpv`. Despite being 100% identical to `kv` today, `kpv` is the more specific canonical 639-3 code and should be kept as the single representative.
- Do not delete `koi` Komi-Permyak. It is a *different* language with distinct data; only `kv` is the duplicate.
- Do not silently delete without updating the 21 lang_names sections — that recreates the lang_names mismatch from Task 143.
- Do not bundle this with Task 180 (`ttj`/`nyo`); they are independent issues with different resolutions.

Done when:
- `kv` is removed from `wordmap_data.js`, `wordmap_meta.js`, `lang_names.js`.
- Total language count strings updated to 618.
- Whole-row fingerprint validator no longer flags `kv = kpv`.
- A user searching for "Komi" finds only `kpv` and `koi`, not three rows.

### New Task 180. Resolve the `ttj` / `nyo` whole-row duplicate (Tooro / Nyoro)

Goal:
The whole-row fingerprint scan flagged **`ttj` Tooro and `nyo` Nyoro** as 100% identical 20-cell content. Both are Runyakitara-cluster Bantu languages of Uganda added in Task 150's Group F. They are *closely related* (mutually intelligible to a high degree) but **not identical** — Glottolog lists them as distinct languages with documented lexical and phonological differences. The 100% match is almost certainly a copy-paste error during Task 150's batch addition, not a true linguistic identity.

Current issue I checked:
- `wordmap_data.js`: `ttj` (Tooro) and `nyo` (Nyoro) have identical 20-cell `words` blocks.
- Both placed at distinct coordinates per Task 150 (`ttj` Fort Portal at 0.66, 30.27; `nyo` Hoima at 1.43, 31.34) — coordinate distinction is correct.
- Language descriptions in `wordmap_meta.js` correctly distinguish them.
- Word data: identical, including the same IPA romanizations. Suspicious.
- Reference materials (Ruzindana 1996 *Runyoro-Rutooro Dictionary*, Davis & Schadeberg, Uganda Christian University Press) document differences in vocabulary and tone, even between very closely related Runyakitara languages.

Files to change:
- `wordmap_data.js` — replace one row's word data with sourced distinct values.
- `wordmap_meta.js` — add `meta.sources` per Task 80 to document the new word source.
- `wordEvidence` — add per-cell sourcing per Task 173.
- `wordmap-modern-audit-feedback.md` — record the fix.

Implementation instructions:

**Step 1 — pick the row to keep canonical.**
- `nyo` Nyoro has more L1 speakers (~970K vs ~660K for Tooro). Either could be canonical, but Nyoro is the better-documented anchor.
- Keep `nyo` as currently structured. Rebuild `ttj` Tooro with sourced Tooro-specific forms.

**Step 2 — source Tooro-specific data.**
- Primary source: Ruzindana M., *Runyoro-Rutooro–English Dictionary* (1996, Uganda Christian University Press).
- Cross-check: Kahaiya O., *A Dictionary of the Runyoro/Rutooro Language* (newer revision).
- The two languages share roots but differ in:
  - Some kinship terms.
  - Vocabulary for specific cultural items.
  - Phonological reductions in Tooro (e.g., elision of certain vowels in unstressed positions).

**Step 3 — rebuild `ttj` Tooro 20 cells.**
- Each cell must cite the source.
- Where a cell genuinely has the same form in both languages, document with `wordEvidence: { note: 'shared with Nyoro (nyo) within Runyakitara cluster' }`.

**Step 4 — extend the validator.**
- Whole-row fingerprint check (per Task 179) should ERROR on this pair until distinct data lands.

**Step 5 — document the cluster.**
- Add a `meta.disambiguator` field (per Task 115) to both rows: `ttj` says "(Tooro / Rutooro, Fort Portal)", `nyo` says "(Nyoro / Runyoro, Hoima)". This is for search-result clarity, complementing the distinct word data.

Validator / static check:
- After rebuild: `ttj = nyo` no longer in fingerprint duplicate group.
- `meta.disambiguator` set on both rows.

Do not:
- Do not delete `ttj`. Tooro is a real distinct language even if closely related; the project's pedagogical mission is to surface the diversity, not collapse it.
- Do not invent differences. If a cell genuinely has the same form, keep the form and add the `note` documenting the share.
- Do not bundle this with Task 179 (`kv`/`kpv`) — that is a true macro/specific duplicate; this is an authoring error in genuinely distinct data.

Done when:
- `ttj` row has 20 cells of sourced Tooro-specific data.
- The `ttj = nyo` whole-row fingerprint duplicate is resolved.
- Both rows have `meta.disambiguator`.
- `meta.sources` cites the Tooro grammar/dictionary used.

### New Task 181. Fix the `lag` row mislabel — should be Langi (Tanzania, Bantu), not Lango (Uganda, Nilotic)

Goal:
The native-name multimap scan flagged `laj` (Lango of Uganda, Western Nilotic) and `lag` as both having `name: 'Lango'`, `native: 'Lëblaŋo'`, and Uganda coordinates (~2.24, 32.90 Lira). But **ISO 639-3 `lag` is Langi (Rangi)**, a Bantu language of central Tanzania (~370,000 speakers, around the Kondoa region at lat -4.9, lng 35.8) — totally different from Lango.

Either:
- The row was authored as a duplicate of `laj` Lango by mistake (possibly during Task 150's Uganda batch when both `laj` and `lag` appear in the same sub-batch order), OR
- The author meant to add Langi but accidentally copied Lango data.

Either way, the current state is wrong: a user clicking the `lag` marker on the Uganda map sees "Lango" labels with Nilotic Lwoo data, but the underlying ISO code says they should be looking at a Tanzanian Bantu language with completely different vocabulary.

Current issue I checked:
- `wordmap_data.js:2860` — `lag: { name: 'Lango', native: 'Lëblaŋo', lat: 2.25, lng: 32.90 ... }` with Lwoo Nilotic words (matʃ for fire, tʃamo for eat, etc.).
- ISO 639-3 standard: `lag` is Langi (Rangi), Bantu of Tanzania, with completely different vocabulary (Bantu noun classes, different roots).
- The `laj` row immediately above (`wordmap_data.js:2856`) is correctly Lango of Uganda with proper Nilotic Lwoo data.
- The `ach` Acholi row between them is also Nilotic — so the mistake is plausibly a copy-of-laj into lag.

Files to change:
- `wordmap_data.js` — either delete the `lag` row entirely (it is a duplicate of `laj`) OR rebuild it as Langi with Tanzanian coordinates and Bantu vocabulary.
- `wordmap_meta.js` — meta block for `lag`.
- `lang_names.js` — `lag` entries in 21 UI sections.
- `wordmap-modern-audit-feedback.md` — record decision.

Implementation instructions:

**Decision needed: Option A or Option B.**

- **Option A — delete the `lag` row.** It is a copy-paste duplicate of `laj` Lango. Removing it brings the count to 617 and eliminates the wrong claim that "Langi = Lango".
- **Option B — rebuild `lag` as Langi (Rangi) of Tanzania.** This is the linguistically correct version. Source: Stegen O., *A grammatical sketch of Rangi* (2002), or other Bantu Tanzania grammars. New coordinates: Kondoa, Tanzania (-4.91, 35.78). New vocabulary: Bantu E10/E20 typical (ma- noun-class prefix on water/etc.).

Recommend **Option B** because:
- The project's mission is to represent linguistic diversity; deleting `lag` removes a legitimate Bantu language from the map.
- The data error is about *what `lag` is*, not whether `lag` should exist.
- Tanzania currently has limited representation in the map; adding Langi closes a regional coverage gap.

**Step 1 — confirm decision.**
**Step 2 — if Option A:** delete row, update count strings, lang_names.
**Step 3 — if Option B:**
- Rebuild row with `name: 'Langi'`, `native: 'kɨlaaŋi'` (Rangi endonym), coordinates (-4.91, 35.78) for Kondoa.
- Rebuild 20 cells from Stegen 2002 or Bantu Online lexicon.
- Set `meta.family: 'Atlantic-Congo (Bantu, F33 Rangi)'` per Task 159's normalization.
- `meta.iso6393: 'lag'`.
- `meta.parentCode: null`, `meta.varietyRole: null`.
- `meta.officialStatus: 'recognized-minority'`, `meta.officialIn: ['Tanzania']`.
- Source: cite Stegen 2002.

**Step 4 — verify `laj` Lango still works.**
- Rerun whole-row fingerprint validator. The `laj`/`lag` pair should no longer match (whether Option A removed `lag` or Option B rebuilt it with distinct data).

Validator / static check:
- After fix: `laj = lag` fingerprint duplicate resolved.
- If Option B: `lag.iso6393` matches ISO 639-3 standard (`lag`).
- If Option A: count strings updated (619 → 617 since `kv` and `lag` both removed).

Do not:
- Do not silently leave the rows as-is. The `lag` row is currently a *factual error* — the row claims to be a language it isn't.
- Do not rename `lag` to `laj_dup` or similar workaround. ISO codes are not project-extensible; `lag` either is Langi (real) or it shouldn't exist (Option A).
- Do not bundle this with Task 179 or 180. Different errors, different fixes.

Done when:
- `laj` Lango row is canonical and correctly Nilotic.
- `lag` row is either removed (Option A) or rebuilt as Langi/Tanzania with distinct Bantu data + sources (Option B).
- Validator no longer flags `laj`/`lag` as duplicates.
- A user searching ISO 639-3 `lag` finds the correct language (Langi) on the map, not a Uganda Nilotic mislabel.

### New Task 182. Migrate `meta.aliases` runtime initializer to static field (mirrors Task 178)

Goal:
**0 of 619 rows have static `meta.aliases`; the runtime `ALIASES` map at `wordmap_meta.js:2098` populates 82 rows at module load time.** Same architectural pattern as the `iso6393` / `canonicalCode` overlap fixed by Task 178: a structured field is initialized from a separate runtime map rather than living statically in the meta block. Tooling that walks meta blocks (validators, audit scripts, this audit file's grep-based checks) misses the alias data entirely.

Current issue I checked:
- Static count of `aliases:` entries: 0.
- Runtime `ALIASES` map entries: 82.
- The runtime initializer at `wordmap_meta.js:2146-2152`:
  ```
  for (const code of Object.keys(ALIASES)) {
      if (LANG_DATA[code] && LANG_DATA[code].meta) {
          if (!LANG_DATA[code].meta.aliases) {
              LANG_DATA[code].meta.aliases = ALIASES[code];
          }
      }
  }
  ```
- Tasks 114 (search alias support) and 115 (disambiguator) rely on `meta.aliases`. The search code reads `meta.aliases` at runtime — so functionally, search works. But the data is hidden from static inspection.

Files to change:
- `wordmap_meta.js` — migrate the 82 `ALIASES` entries into static `meta.aliases: [...]` arrays inside the corresponding meta blocks.
- Delete the `ALIASES` constant + the for-loop initializer.
- `validate_wordmap_data.js` — extend coverage check to enforce static-only.
- `CONTRIBUTING.md` — document `meta.aliases` as a static field.

Implementation instructions:

**Step 1 — migrate.**
- For each entry in `ALIASES` (`eo: ['Esperanto'], tlh: ['Klingon', 'tlhIngan Hol'], ...`), find the corresponding meta block and add `aliases: [...]` to it.

**Step 2 — delete the runtime initializer.**
- After all 82 entries are migrated, remove the `ALIASES` constant and the for-loop.
- Verify the search functionality (Task 114 alias search) still works post-migration.

**Step 3 — extend validator.**
- Static-only validation: warn if a `meta.aliases` value is set via runtime initializer rather than statically.
- Coverage line: `meta.aliases: N/M rows have aliases set`.

**Step 4 — backfill alias coverage.**
- The current 82 rows are an incomplete set (the priority languages from Task 114). After migration, identify additional rows where common alternate names exist and were not yet captured — e.g., Faroese / Føroyskt, Romansh / Rumantsch, etc.
- Goal: 200+ rows with at least one alias.

Validator / static check:
- `[#182]` row with runtime-only aliases (post-migration check) → ERROR.
- INFO line: alias coverage.

Do not:
- Do not migrate without verifying search continues to work. The migration must preserve search behavior bit-for-bit.
- Do not auto-translate or auto-generate aliases. Each one must be a citeable alternate name from a dictionary or community usage.
- Do not put endonyms (the `native` field's content) in `aliases` — that duplicates information already on the row.

Done when:
- `wordmap_meta.js` `ALIASES` constant is deleted.
- The for-loop at `:2146-2152` is removed.
- 82 rows now have static `meta.aliases` arrays.
- Validator `[#182]` reports 0 errors.
- Search (Task 114) continues to work for all previously-aliased languages.
- CONTRIBUTING.md documents the static convention.

---

## Data-Scrutiny Sweep (2026-05-06 part 16)

A sixth-pass scan focused on the meta-translation layer (`meta_i18n_coverage.js`, `meta_i18n_ext.js`, and the `META_I18N` block inside `wordmap_meta.js`) surfaced four substantive coverage and architecture issues. The atom-translator infrastructure is sound but the per-UI-language coverage is wildly uneven — leaving large UI-language audiences with degraded modal translations even though the structural support is in place.

Tools used:
- Per-UI-lang atom-entry counting in `META_I18N_COVERAGE_ATOMS` (16,015 lines) and `META_I18N_ATOMS` (4,388 lines).
- Per-UI-lang full-string entry counting in `META_I18N` (`wordmap_meta.js:1212`).
- Cross-set diff: meta-data strings (`family`/`script`/`countries`/`official`) vs covered atoms.

### New Task 183. Resolve the 8–13× spread in atom-translation coverage across UI languages

Goal:
The atom-translator layer (used by `translateMetaSmart()` to recursively decompose meta strings) has wildly uneven per-UI-lang coverage, ranging from **2,189 atoms (Ukrainian)** to **161 atoms (Swahili)** — a 13× spread. Users picking a UI lang on the low-coverage end see modal descriptions, family labels, and country lists with significant English fragments showing through. The full-string layer (`META_I18N`) is balanced at 434 entries × 22 langs, but full-string only covers ~30% of real meta strings; the rest depend on atoms.

Current issue I checked (2026-05-06, combining `meta_i18n_coverage.js` + `meta_i18n_ext.js`):

| UI lang | ext.js | coverage.js | Total | Spread vs lowest |
|---|---:|---:|---:|---:|
| uk | 184 | 2005 | 2189 | 13.6× |
| ar | 174 | 1760 | 1934 | 12.0× |
| yue | 184 | 1736 | 1920 | 11.9× |
| zh | 311 | 1575 | 1886 | 11.7× |
| ja | 1192 | 638 | 1830 | 11.4× |
| th | 139 | 1461 | 1600 | 9.9× |
| hi | 147 | 1456 | 1603 | 10.0× |
| he | 145 | 1420 | 1565 | 9.7× |
| ru | 252 | 1351 | 1603 | 10.0× |
| ko | 312 | 998 | 1310 | 8.1× |
| **de** | **285** | **0** | **285** | **1.8×** |
| **fr** | **284** | **0** | **284** | **1.8×** |
| **es** | **277** | **0** | **277** | **1.7×** |
| **pt** | **268** | **0** | **268** | **1.7×** |
| **vi** | **156** | **115** | **271** | **1.7×** |
| **it** | **257** | **0** | **257** | **1.6×** |
| **id** | **163** | **0** | **163** | **1.0×** |
| **sw** | **161** | **0** | **161** | **1.0×** |

The bottom 8 UI langs (de/fr/it/es/pt/vi/id/sw) all rely on `meta_i18n_ext.js` exclusively; the larger `meta_i18n_coverage.js` extension was applied to 11 langs but skipped these 8.

Files to change:
- `meta_i18n_coverage.js` — extend the `META_I18N_COVERAGE_ATOMS` block to cover the bottom 8 UI langs at parity with the existing top 11.
- `validate_wordmap_data.js` — add a coverage-spread check that warns when any UI lang's atom coverage is < 50% of the median.

Implementation instructions:

**Step 1 — calibrate the target.**
- Median coverage across covered langs: ~1500 atoms.
- Set goal: every UI lang should reach ≥ 1000 atoms (≥ 70% of median).

**Step 2 — extend the bottom 8 UI langs.**
- Each needs ~700–900 additional atoms.
- Source: same atom set used for the top 11 (family/branch sub-tags, region names, script descriptors, official-language formulations, dynastic/era names).
- For Romance langs (de, fr, it, es, pt), some atoms are cognate with English and need minimal effort (`Iranian` → `Iranian` in fr, with article `(l')Iranien`); others need careful translation (`Volga` → `Volga`).
- For Vietnamese (271), Indonesian (163), Swahili (161): start with the most-frequent meta-string substrings.

**Step 3 — staged rollout.**
- Phase 1: bring vi/id/sw to 800+ atoms.
- Phase 2: bring de/fr/it/es/pt to 1500+ atoms.
- Phase 3: top off remaining UI langs to ≥ 1500.

**Step 4 — validator coverage check.**
- INFO line: `atom coverage by UI lang: <table>`.
- WARN if any UI lang has < 50% of median coverage.

Validator / static check:
- New check `[#183]`: per-UI-lang atom count from combined coverage + ext layers.
- WARN at < 50% of median, ERROR at < 25%.

Do not:
- Do not machine-translate meta atoms in bulk. Each atom is a noun phrase whose translation may need community-specific decisions (e.g., "Cushitic" in Swahili: `Kikushiti` vs `Kushitiki` — use whichever the reference grammars prefer).
- Do not skip the `id`/`sw` bottom even though they have lower native-speaker map-user populations. Pedagogical use of the map for learners *of* Indonesian or Swahili (rather than learners *from* Indonesia / Swahili-speaking regions) needs the same coverage.
- Do not let Vietnamese stay at 271. It is a major UI lang and the atom layer should match other Asian UI langs.

Done when:
- All 18 distinct UI langs reach ≥ 1000 atoms.
- Validator coverage spread shrinks from 13× to ≤ 2×.
- A user picking `de` UI sees German labels for "Sinitic", "Cushitic", "Loloish", etc., not English.
- INFO line shows balanced coverage.

### New Task 184. Add coverage for the 9 UI langs absent from `META_I18N_COVERAGE_ATOMS` entirely

Goal:
**`META_I18N_COVERAGE_ATOMS` has entries for 11 UI langs (uk, ar, yue, zh, th, hi, he, ru, ko, ja, vi); the other 9 UI langs (de, fr, it, es_eu, es_mx, pt_eu, pt_br, id, sw) have ZERO entries in this file.** They survive only on the smaller `META_I18N_ATOMS` block in `meta_i18n_ext.js`. This is closely related to Task 183 but is more specific: the *file structure* indicates intent to extend coverage but the extension never happened for these langs. Fixing this cleanly resolves Task 183's bottom of the table.

Current issue I checked:
- `META_I18N_COVERAGE_ATOMS` block in `meta_i18n_coverage.js`: 11 UI lang keys.
- The header comment says: "Adds per-UI-language atom and full-string translations to push translateMetaSmart() coverage of LANG_DATA[*].meta toward 100%." — clear intent is coverage parity.
- Yet 9 UI langs are missing entirely from this file.

Files to change:
- `meta_i18n_coverage.js` — add `de`, `fr`, `it`, `id`, `sw` UI lang blocks to `META_I18N_COVERAGE_ATOMS` (and to `META_I18N_COVERAGE_FULLS` if it exists).
- The 4 regional-Spanish/Portuguese codes (`es_eu`, `es_mx`, `pt_eu`, `pt_br`) inherit via the runtime aliasing at `meta_i18n_ext.js:3217-3220`. Either leave those as runtime aliases or migrate to static blocks (Task 186).

Implementation instructions:

**Step 1 — add `de` UI lang block.**
- Mirror the structure of `ja`/`ko`/`zh` blocks.
- Translate the same set of family/region/script/official-status atom keys to German.

**Step 2 — add `fr`, `it` UI lang blocks.** Same approach.

**Step 3 — add `id`, `sw` UI lang blocks.**
- These need more careful sourcing because Indonesian and Swahili linguistic terminology has both calques (`Bahasa-` prefixes for languages) and English borrowings (`Cushitic`).

**Step 4 — verify behavior post-extension.**
- Run the map in a browser with `de` UI selected. Modal for Mandarin should show German family labels for "Sinitic (Mandarin)", "Bantu", etc.
- Same for fr, it, id, sw.

Validator / static check:
- `[#184]` `META_I18N_COVERAGE_ATOMS` must have a key for every UI lang in `lang_names.js` (excluding the 4 regional-aliases that legitimately re-use parent).
- INFO line: list missing UI langs.

Do not:
- Do not skip Indonesian / Swahili because their atom counts in `meta_i18n_ext.js` are also low. Both files need extension.
- Do not auto-translate without a reference. Indonesian linguistic terminology often differs from popular usage (e.g., "Indo-Aryan" might be `Indo-Arya` or `Indo-Arya (Hindia)` depending on convention).
- Do not migrate the 4 regional-Spanish/Portuguese aliases to static blocks within this task — that is Task 186's scope.

Done when:
- 5 new UI lang blocks (de, fr, it, id, sw) exist in `META_I18N_COVERAGE_ATOMS`.
- Each new block has ≥ 800 entries (target per Task 183).
- Validator `[#184]` passes.
- A user picking `de` UI sees German family labels in modal for languages whose family was not in `META_I18N` (full-string) full-coverage.

### New Task 185. Cover the 712 meta-string "orphans" with no atom translation in any UI lang

Goal:
The meta-data fields (`family`, `script`, `countries`, `official`) contain **1,478 distinct strings**, and **712 of them (48%) have no atom-level translation in any UI lang**. These are mostly composite forms like `"Sinitic (Mandarin, Ji-Lu)"` where the *whole* string is unknown to the atom map even though `Sinitic`, `Mandarin`, and `Ji-Lu` may individually be atoms. The recursive translator (`translateMetaSmart()`) handles decomposition, but only if the constituent atoms exist for the chosen UI lang.

Current issue I checked:
- 1,478 distinct meta-data strings extracted from `wordmap_meta.js`.
- 2,903 unique atom keys across both translation files (any UI lang).
- 712 meta strings are not present as atoms in any UI lang's coverage block.
- Examples of orphan composites: `"Sinitic (Yue)"`, `"Sinitic (Min Nan)"`, `"Sinitic (Wu)"`, `"Sinitic (Mandarin, Northeastern)"`, `"Sinitic (Mandarin, Southwestern)"`, `"Sino-Tibetan (Tibeto-Burman, Bodish)"`, `"Bantu (Nguni)"`, `"Afro-Asiatic (Chadic)"`, `"Atlantic (Niger-Congo)"`.
- Most orphans should be fine via recursion: `Sinitic (Mandarin, Ji-Lu)` decomposes to `Sinitic` + `(Mandarin, Ji-Lu)` which decomposes further. But the project relies on this without verifying — and the recursion is brittle when atoms are missing in a particular UI lang.

Files to change:
- `meta_i18n_coverage.js` — for orphan composites that are not cleanly decomposable, add the full string as an atom in each UI lang.
- `wordmap_meta.js` (`META_I18N` full-string block) — for the most-frequent ~50 composite strings, add full-string entries in all 22 UI langs.
- `validate_wordmap_data.js` — add a "translation reachability" check: simulate `translateMetaSmart()` for every meta string in every UI lang and report the fraction that produces an English fragment.

Implementation instructions:

**Step 1 — categorize orphans.**
- Decomposable: `Sinitic (Mandarin, Ji-Lu)` → `Sinitic` + `(Mandarin, Ji-Lu)` → `Mandarin` + `Ji-Lu`. Each component is or can be an atom. Verify the recursion succeeds in each UI lang.
- Non-decomposable: `Carthage and the Punic Mediterranean (Tunisia, Sardinia, Sicily, Malta, etc.)` — prose with proper noun "Tunisia" that is unlikely to be an atom in most UI langs. These need full-string entries.

**Step 2 — atom backfill.**
- For decomposable orphans, ensure all constituent atoms exist. If `Ji-Lu` is missing in `vi`, add it.
- Run the simulator in Step 4 of validator; iterate until all orphans translate cleanly.

**Step 3 — full-string backfill for non-decomposable.**
- Identify the ~50 most-frequent non-decomposable strings (those used in multiple rows).
- Translate each in all 22 UI langs.
- Add to `META_I18N`.

**Step 4 — translation reachability validator.**
- Implement `translateMetaSmart()` simulator in the validator.
- For each (string, lang) pair, check if the result contains any English fragment.
- INFO line: `translation reachability by UI lang: en N/M (X%)`.

Validator / static check:
- `[#185]` translation-reachability < 95% per UI lang → WARN.
- Per-UI-lang reachability table in INFO.

Do not:
- Do not bulk-add full-string translations for orphans that recursion handles. The atom approach is more maintainable.
- Do not break `translateMetaSmart()` by removing atoms used by other meta strings. Verify reachability after each change.
- Do not let the 712-orphan number grow as new languages are added. Add orphan-prevention to CONTRIBUTING.md (require any new family/script string to either decompose or have a full-string entry).

Done when:
- Orphan count drops below 50 (those genuinely needing full-string entries).
- Validator translation-reachability per UI lang ≥ 95%.
- A user picking any UI lang sees fully-translated family/script/countries/official labels for ≥ 95% of rows.

### New Task 186. Migrate the runtime `es`/`pt` atom aliasing to static field names

Goal:
At `meta_i18n_ext.js:3217-3220`, the regional Spanish/Portuguese atom blocks are aliased to umbrella `es`/`pt` blocks at module load time:
```
META_I18N_ATOMS.es_eu = META_I18N_ATOMS.es;
META_I18N_ATOMS.es_mx = META_I18N_ATOMS.es;
META_I18N_ATOMS.pt_eu = META_I18N_ATOMS.pt;
META_I18N_ATOMS.pt_br = META_I18N_ATOMS.pt;
```

Same architectural pattern as Tasks 178 (`canonicalCode`/`iso6393`) and 182 (`meta.aliases`): a runtime side-effect creates a structure that static inspection cannot see. Plus, the aliasing forces `es_mx` and `es_eu` to share identical atom blocks, foreclosing any genuine regional-Spanish-specific translation difference even if one would be appropriate (e.g., Mexican Spanish uses `idioma` for "language" while Spain Spanish often uses `lengua` — atomic difference).

Current issue I checked:
- 4 lines of runtime aliasing in `meta_i18n_ext.js:3217-3220`.
- `meta_i18n_coverage.js` does not have parallel aliasing — its 11 UI langs are static.
- The aliasing prevents a hypothetical future `es_mx`-specific atom block.
- Same antipattern as Tasks 178 and 182.

Files to change:
- `meta_i18n_ext.js` — replace runtime aliases with explicit static keys for `es_eu`/`es_mx`/`pt_eu`/`pt_br`.
- Choose between:
  - **Option A:** copy the `es` and `pt` atom blocks into 4 separate static blocks. Identical content but explicit.
  - **Option B:** keep `es` / `pt` umbrella blocks for now; add new specific blocks (`es_eu`, `es_mx`, `pt_eu`, `pt_br`) only when a regional difference is found.
- `wordmap.html` — modal lookup for `es_mx` UI must check the regional block first, then fall back to `es`.

Implementation instructions:

**Recommended: Option B (static fallback chain in lookup, no copy).**
- Keep `META_I18N_ATOMS.es` and `META_I18N_ATOMS.pt` as canonical umbrella blocks.
- Remove the runtime aliasing.
- In the lookup function (`translateMetaSmart()` or its dependencies), implement a fallback chain: try `META_I18N_ATOMS[lang]` first, then `META_I18N_ATOMS[lang.split('_')[0]]`, then English.
- This way:
  - `es_mx` UI gets `es` atoms by lookup (same as today's runtime aliasing result).
  - But the lookup is explicit and visible in the code.
  - A future regional-specific atom block can be added without removing the umbrella.

**Step 1 — remove runtime aliasing.**
- Delete lines 3217-3220 from `meta_i18n_ext.js`.

**Step 2 — extend the lookup function.**
- In whichever module reads `META_I18N_ATOMS` (likely `wordmap.html` or `meta_i18n_ext.js` itself), add the fallback chain.

**Step 3 — verify.**
- Run the map with `es_mx` UI selected. Modal translations should be identical to before (because `es_mx` falls back to `es`).
- Same for `pt_br`.

**Step 4 — extend `META_I18N_COVERAGE_ATOMS` similarly** — the coverage file has no regional aliasing today; add the fallback chain there too if applicable.

Validator / static check:
- `[#186]` if `META_I18N_ATOMS.es_eu` (etc.) is set, it must be set statically not via runtime aliasing.
- INFO line: regional Spanish/Portuguese fallback chain configuration.

Do not:
- Do not delete the runtime aliasing without implementing the fallback chain. Doing so silently breaks regional Spanish/Portuguese atom translation.
- Do not duplicate the entire `es` block into `es_eu`/`es_mx` (Option A) without justification — that's 540+ lines of duplicate maintenance burden.
- Do not bundle this with Task 184 (which adds new UI lang blocks) or Task 185 (orphan strings). Each is independent.

Done when:
- Runtime aliasing at `meta_i18n_ext.js:3217-3220` is removed.
- Lookup function implements `lang → lang.split('_')[0] → en` fallback chain.
- Regional Spanish/Portuguese UIs continue to see translated atoms (verified manually).
- Validator `[#186]` passes.
- The runtime/static-overlap antipattern (Tasks 178, 182, 186) is fully resolved across the codebase.

---

## Data-Scrutiny Sweep (2026-05-06 part 17)

A seventh-pass scan focused on schema-followthrough — fields whose schema was added by an earlier audit task but whose data backfill was either incomplete or never started. Five distinct findings; each is a "schema added but coverage = 0 or near-zero" gap.

Tools used:
- Per-row tone-letter sequence extraction with single-vs-doubled detection.
- Coverage counts on `disambiguator`, `accessed`, `vitality`, `formType` fields.
- Surface == IPA cell-count distribution per language.

### New Task 187. Normalize tone-bar notation within single rows (single letter `˥` vs doubled `˥˥`)

Goal:
**11 tonal-language rows mix single-letter and doubled-letter Chao tone notation within the same row.** In Chao notation, level tones can be written either as one letter (`˥`) or doubled (`˥˥`). Both refer to the same phonetic value (high level), but mixing both within a single 20-cell row is internally inconsistent — readers cannot tell whether `˥` and `˥˥` are meant to be the same tone or different.

Current issue I checked (2026-05-06 scan):

| Lang | Mixed pairs | All tones in row |
|---|---|---|
| `cdo` Min Dong | `˧/˧˧` | ˧˧ ˧ ˨˦ ˥ |
| `ii` Yi | `˧/˧˧` | ˧˧ ˧ |
| `nan_te` | `˥/˥˥` | ˥˧ ˥ ˥˥ ˧˧ ˨˩˧ ˩˩ ˨ |
| `yue_ts` | `˧/˧˧, ˨/˨˨` | ˧˧ ˨ ˧ ˨˨ ˧˨ ˥ |
| `zh_jh` | `˦/˦˦` | ˨˩˦ ˦ ˨˦ ˧˧ ˥˥ ˦˦ |
| `nan_pn` | `˥/˥˥` | ˥˧ ˥ ˨˨ ˧˧ ˥˥ ˨˩˧ ˩˩ |
| `yue_gz` | `˥/˥˥` | ˧˥ ˥ ˧˧ ˥˥ ˨˩ ˨˨ |
| `wuu_sz` | `˧/˧˧, ˦/˦˦` | ˥˨ ˧˧ ˨˧ ˧ ˥ ˦˦ ˨˧˩ ˦ |
| `nan_qz` | `˨/˨˨` | ˨˨ ˧˥ ˨ ˨˦ ˦ ˦˩ ˧˧ |
| `hak_hl` | `˥/˥˥, ˨/˨˨` | ˨˦ ˨ ˥ ˥˥ ˨˨ |
| `cpx` Pu-Xian | `˥/˥˥` | ˦˩ ˥˥ ˧˧ ˥˧ ˥ ˨˩ |

Files to change:
- `wordmap_data.js` — normalize 11 rows.
- `validate_wordmap_data.js` — new check that flags within-row single/doubled tone mixing.
- `CONTRIBUTING.md` — document the tone-bar convention.

Implementation instructions:

**Step 1 — pick the convention.**
- **Option A (recommended): always use doubled.** `˥˥` for high level, `˧˧` for mid level. This is the standard Chao convention used in *most* modern transcription practice. Single-letter forms are usually shorthand for level tones in published works that adopt the convention "single letter = level tone".
- **Option B (alternative): always single for level, multi-character for contour.** `˥` for high level, `˥˩` for high-falling. This is a simpler notation system but less common in published linguistic literature.

**Step 2 — apply per-language.**
- For each of the 11 rows, decide which convention the row predominantly uses (i.e., which is the *intended* normalization), then convert all cells to that convention.
- For ambiguous cases (e.g., `cdo` has `˧˧ ˧ ˨˦ ˥` — both single and doubled level tones), pick Option A and convert all single-letter level tones to doubled.

**Step 3 — bump cache buster.**

Validator / static check:
- `[#187]` row containing both `<X>` and `<XX>` (where X is any tone letter) → WARN.
- Across-rows consistency: warn if some rows use Option A and others Option B (within the same Sinitic family, for example).

Do not:
- Do not normalize a row's contour tones to doubled. `˨˩˧` should stay `˨˩˧`, not `˨˨˩˩˧˧`.
- Do not change tone *values*. Normalize notation only; do not, for example, write `˥˧` as `˥` if the source says `˥˧`.
- Do not bundle this with Task 163 (ASCII affricate normalization) — different convention, different scope.

Done when:
- 0 rows mix single and doubled level tones.
- All level tones use the same convention (Option A or B) project-wide.
- Validator `[#187]` reports 0 warnings.
- CONTRIBUTING.md documents the rule.

### New Task 188. Backfill `meta.disambiguator` for the 4+ identified language pairs

Goal:
**0 of 619 rows have `meta.disambiguator` set**, despite Task 115 adding the schema specifically for the cases identified by the native-name scan (Round 5 finding). The four identified pairs (`mn_cn`/`xng`, `omx`/`mnw`, `kv`/`kpv`, `laj`/`lag`) all share native names and are functionally indistinguishable in search results without disambiguation. This is pure schema-followthrough — the schema is in place, the candidates are known, and only the data backfill is missing.

Current issue I checked:
- `meta.disambiguator` count: 0 rows.
- Task 115 schema is implemented: `meta.disambiguator` accepts `string` or `{en, ja, ko, zh, ...}` object.
- Task 115's "Done when" criteria included setting disambiguator on the 2 known pairs (`mn_cn`/`xng`, `omx`/`mnw`) and adding it to validator. Validator check exists, but no row has the field set.
- Round 5 added two more pairs (`kv`/`kpv` is a duplicate, scoped to Task 179; `laj`/`lag` is a mislabel, scoped to Task 181). After Tasks 179 and 181 land, the remaining disambiguator candidates are `mn_cn`/`xng` and `omx`/`mnw`.

Files to change:
- `wordmap_meta.js` — add `disambiguator` to the 4 (or 2 post-179/181) identified rows.
- `validate_wordmap_data.js` — extend coverage check to enumerate which rows have shared native names but no disambiguator.

Implementation instructions:

**Step 1 — identify all rows needing disambiguator.**
- Run the native-name multimap scan: any native name shared by ≥ 2 rows is a candidate.
- After Task 179 (kv/kpv merge) and Task 181 (lag fix): remaining shared-native rows are `mn_cn`/`xng` (Mongolian script) and `omx`/`mnw` (Mon script).
- Plus: any future-added rows where native names collide.

**Step 2 — add disambiguator strings.**
- `mn_cn` (Inner Mongolian, modern): `disambiguator: { en: '(Modern Inner Mongolia)', ja: '（現代内モンゴル）', ko: '(현대 내몽골)', zh: '（现代内蒙古）' }`.
- `xng` (Middle Mongolian, historical 13th-15th c.): `disambiguator: { en: '(Middle Mongolian, 13th-15th c.)', ja: '（中世モンゴル語、13-15世紀）', ko: '(중세 몽골어, 13-15세기)', zh: '（中世纪蒙古语，13-15世纪）' }`.
- `omx` (Old Mon, historical): similar pattern.
- `mnw` (modern Mon): `disambiguator: { en: '(Modern Mon, Myanmar/Thailand)', ... }`.

**Step 3 — UI integration.**
- Modal renders disambiguator after the language name when the field is set.
- Search results show disambiguator as a small italic suffix.

**Step 4 — validator.**
- For every native name shared by ≥ 2 rows, both rows must have `disambiguator`. Otherwise WARN.

Validator / static check:
- `[#188]`: shared-native rows missing `disambiguator` → WARN.
- INFO: disambiguator coverage `N/M`.

Do not:
- Do not set `disambiguator` on rows where the native name is unique. Field is redundant.
- Do not put disambiguating info in the `name` or `native` fields. The schema separation matters: name and native should be canonical; disambiguator handles UI presentation when collisions occur.
- Do not skip the localized object form. A Japanese user searching for `モンゴル` deserves a Japanese disambiguator, not English.

Done when:
- All 2-4 identified pairs have `disambiguator` set in 4+ UI langs (en, ja, ko, zh at minimum).
- Validator `[#188]` reports 0 warnings.
- A user searching `Mongol` sees both `mn_cn` and `xng` rows with their respective era disambiguators.

### New Task 189. Backfill `wordEvidence.accessed` ISO 8601 dates for all sourced citations

Goal:
**0 of all `wordEvidence.url` references have an `accessed` date populated**, despite Task 97 explicitly adding the field for citation reproducibility. URLs decay (link rot, content changes); without an accessed-on date, future readers cannot tell whether the cited content was the same when authoring as it is when re-reading.

Current issue I checked:
- `wordEvidence.url` count: 0 cells (the `url` field exists in schema per Task 97 but has 0 occurrences).
- `wordEvidence.accessed` count: 0 cells.
- Task 97's "Done when" required URL + accessed enforcement; the validator check exists but never fires because no cell has either field set.
- The structured-citation schema (Task 133's `wordEvidence.citation`) is also unused at scale — only a handful of cells have it.

Files to change:
- `wordmap_data.js` — backfill `url` + `accessed` (or `wordEvidence.citation.url` + `.accessed`) for the ~300 cells that have any wordEvidence.
- `validate_wordmap_data.js` — extend the `accessed` check to require ISO 8601 (`YYYY-MM-DD`).
- `CONTRIBUTING.md` — document that all URL citations must include an `accessed` date.

Implementation instructions:

**Step 1 — for each wordEvidence cell with a source.**
- Today, ~300 cells have wordEvidence. Most cite a paper or source title but no URL.
- For sources that have a stable URL (Wiktionary entries, Glottolog pages, online dictionaries), add `url:` and `accessed: 'YYYY-MM-DD'`.
- For book sources, no URL is needed; instead, ensure `citation` (Task 133) has `author`, `year`, `title`, `page`.

**Step 2 — backfill in stages.**
- Phase 1: the 24 `'source-checked'` rows (per Task 173). Each cell with a URL gets `accessed`.
- Phase 2: the next 50 priority rows.
- Phase 3: opportunistic.

**Step 3 — link-rot mitigation.**
- For URLs that already 404, replace with archive.org snapshots and document.

**Step 4 — validator.**
- Every `wordEvidence.url` must have an `accessed` ISO 8601 date.
- WARN if `accessed` is older than 365 days (likely needs re-verification).

Validator / static check:
- `[#189]` `wordEvidence.url` without `accessed` → ERROR.
- `accessed` not matching `YYYY-MM-DD` → ERROR.
- `accessed > today` (future-dated) → ERROR.
- `accessed > 1 year ago` → INFO (consider re-verification).

Do not:
- Do not invent accessed dates. If the cell was added without recording when, leave the field unset and add it during the next verification pass.
- Do not delete a URL because it 404s. Replace with archive.org first; if archive.org also fails, mark `url: null` with a note.

Done when:
- All `wordEvidence.url` entries have `accessed` set.
- All `accessed` values match ISO 8601 format.
- Validator `[#189]` reports 0 errors.
- A reader of any sourced cell can verify the citation was retrieved on a known date.

### New Task 190. Backfill `meta.vitality` for endangered languages — schema in place, 0 coverage

Goal:
**0 of 619 rows have `meta.vitality` set**, despite Task 167 introducing the structured `vitality` enum (`'safe' | 'vulnerable' | 'definitely-endangered' | 'severely-endangered' | 'critically-endangered' | 'extinct'`) within the `speakerCount` block. UNESCO endangered-language data is well-known and the enum was created specifically to encode it. The schema work was done; the data backfill was not started.

Current issue I checked:
- `meta.vitality` count (or `meta.speakerCount.vitality`): 0 rows.
- Multiple rows have *prose* qualifier strings that include endangerment ("UNESCO: definitely endangered", "critically endangered", "severely endangered", "fluent") in the `speakers` field — but no structured form.
- Task 167's plan was to parse these into structured `vitality` values; that parse was never run.

Files to change:
- `wordmap_meta.js` — add `vitality` to all 619 rows.
- `validate_wordmap_data.js` — extend coverage check to track vitality coverage and cross-validate with speaker count.
- UNESCO atlas of endangered languages is the primary source.

Implementation instructions:

**Step 1 — assign default vitality based on speaker count + Ethnologue scale.**
- L1 > 1M: `'safe'`.
- L1 100K–1M: usually `'safe'` unless context flags otherwise.
- L1 10K–100K: `'vulnerable'` if community is shrinking, else `'safe'`.
- L1 1K–10K: typically `'definitely-endangered'`.
- L1 100–1K: `'severely-endangered'`.
- L1 < 100: `'critically-endangered'`.
- L1 = 0 (extinct): `'extinct'`.
- Historical languages with `dataStatus: 'attested'`: `'extinct'` is appropriate.

**Step 2 — override based on UNESCO Atlas.**
- Don't rely solely on the count rule. UNESCO has reviewed each endangered language case-by-case; use their categorization.
- Examples:
  - Welsh (`cy`): UNESCO `'vulnerable'` despite > 500K L1.
  - Hawaiian (`haw`): `'critically-endangered'` despite revitalization (most L1 are elderly).
  - Cornish (`kw` if added): `'critically-endangered'`.
  - Manx (`gv` if added): `'critically-endangered'`.

**Step 3 — historical languages.**
- Set `vitality: 'extinct'` for all `dataStatus: 'attested'` and `'fragmentary'` rows.
- For `'reconstructed'` rows (PIE, PJK), `vitality: 'extinct'` is appropriate too (the proto never was a living language for the tagged form).
- For `'pedagogical'` rows (`ja_edo`/`ja_heian`), `vitality: 'extinct'` (historical-stage pedagogical reconstructions).

**Step 4 — validator.**
- Cross-check: `dataStatus: 'modern'` AND `vitality: 'extinct'` → ERROR (contradiction).
- Cross-check: `vitality: 'extinct'` AND any non-zero speaker count → WARN.

Validator / static check:
- `[#190]` row missing `meta.vitality` → WARN.
- Coverage line: `vitality: N/M`.
- INFO: distribution `safe: X, vulnerable: Y, ..., extinct: Z`.

Do not:
- Do not assume "safe" by default for under-researched languages. Many small languages are in slow decline; check UNESCO before assuming.
- Do not encode endangerment in prose `description` AND structured `vitality`. The structured field is canonical.
- Do not bulk-set `vitality: 'safe'` to silence the warning. Empty is better than wrong.

Done when:
- All 619 rows have `meta.vitality` set.
- Distribution INFO shows realistic spread.
- Validator `[#190]` reports 0 missing.
- A user filtering by "show me critically-endangered languages" gets accurate results.

### New Task 191. Complete `wordEvidence.formType` for the 17 hyphen/star surface cells in `pjk` and `ine`

Goal:
**Task 103 added `formType` ('bound-stem' / 'reconstructed-root' / 'agreement-stem' / 'compound') for hyphen-marked or star-prefixed surface forms, but coverage is incomplete.** The `pjk` Proto-Japonic-Koreanic row has 2 hyphen surface cells with no formType, and `ine` PIE has 17 hyphen surface cells but only 5 are covered by the `FORM_TYPE_OVERLAY` map.

Current issue I checked:
- `pjk` cells with `^*|*-` surface: 2 cells, formType not in overlay. Likely needs `'reconstructed-root'`.
- `ine` cells with `^*|*-` surface: 17 cells. Overlay covers eat/drink/love/eye/good (5). Missing: water/fire/sun/moon/mother/father/heart/tree/house/dog/cat/hand/hello/thanks/one (12 cells).
- Validator's `[#103]` schema check accepts unset formType silently — should warn when surface has hyphen/star marker.

Files to change:
- `wordmap_meta.js` — extend `FORM_TYPE_OVERLAY` with the missing cells.
- `validate_wordmap_data.js` — enforce: surface starting/ending with hyphen or starting with `*` REQUIRES formType in overlay.

Implementation instructions:

**Step 1 — extend FORM_TYPE_OVERLAY.**
```
ine: {
    water: 'reconstructed-root', fire: 'reconstructed-root', sun: 'reconstructed-root',
    moon: 'reconstructed-root', mother: 'reconstructed-root', father: 'reconstructed-root',
    eat: 'reconstructed-root', drink: 'reconstructed-root', love: 'reconstructed-root',
    heart: 'reconstructed-root', tree: 'reconstructed-root', house: 'reconstructed-root',
    dog: 'reconstructed-root', cat: 'reconstructed-root', hand: 'reconstructed-root',
    eye: 'reconstructed-root', hello: 'reconstructed-root', thanks: 'reconstructed-root',
    one: 'reconstructed-root', good: 'reconstructed-root'
}
```
Or simpler: a wildcard mark indicating "all 20 cells are reconstructed-root" since `ine` is entirely reconstructed.

**Step 2 — same for pjk.** All cells where surface is asterisked.

**Step 3 — extend the validator.**
- Surface matching `/^\\*|^-|-$/` AND `formType` not set → WARN.

**Step 4 — modal display.**
- Modal already renders formType per Task 103. After backfill, every PIE / PJK cell shows `[reconstructed root]` or `[bound stem]` as a tag.

Validator / static check:
- `[#191]` hyphen/star surface without formType → WARN.
- Coverage line: `formType coverage: N/M relevant cells`.

Do not:
- Do not over-tag. Cells whose surface is a normal word (not hyphen/star) should not have formType set.
- Do not assume all `ine` cells are bound stems — most PIE forms ARE roots, but some are full citation forms. Check each cell.
- Do not bundle this with Task 164 (asterisk consistency between surface/IPA) — the formType backfill is independent of the surface/IPA notation choice.

Done when:
- All `pjk` and `ine` hyphen/star cells have `formType` in overlay.
- Validator `[#191]` reports 0 warnings.
- Modal shows `[reconstructed root]` or similar tag on every PIE/PJK cell.

---

## Data-Scrutiny Sweep (2026-05-06 part 18)

An eighth-pass scan focused on the *architectural* discovery underlying many earlier coverage findings: **the project has 17 runtime overlay maps** that set meta fields at module load time rather than statically. Previous coverage findings (Task 188 disambiguator "0", Task 190 vitality "0", Task 191 formType partial) need to be reinterpreted in light of this architecture — the data IS often there, just hidden from static inspection.

### Important correction to earlier findings

Tasks 188 and several others reported "0 of 619 rows have field X set" based on static grep. Round 8 verification reveals that many of these fields are populated via runtime overlay maps:

| Field | Static count | Runtime map | Map entries | Reconciled coverage |
|---|---:|---|---:|---:|
| `pronunciationType` | 16 | PRONUNCIATION_TYPE | 72 | ~88+ |
| `surfaceType` | 0 | SURFACE_TYPE | 231 | 231 |
| `locationBasis` | 0 | LOCATION_BASIS_OVERRIDES | 144 | 144 |
| `languageKind` | 7 | LANGUAGE_KIND | 51 | ~58 |
| `reviewStatus` | 0 | REVIEW_STATUS | 20 | 20 (rest default 'unreviewed') |
| `varietyRole` | 41 | VARIETY_REL | 18 | up to 59 |
| `disambiguator` | 0 | **DISAMBIGUATORS** | **4** | **4 (Task 188 was wrong)** |
| `dataStatus` | 0 | DATA_STATUS_OVERRIDES (data.js) | 86 | 86 |
| `aliases` | 0 | ALIASES | 82 | 82 |
| `formType` | 0 | FORM_TYPE_OVERLAY | 43 | 43 |
| `sources` | 52 | SOURCE_BACKFILL | 35 | up to 87 |
| `scriptTags` | 0 | SCRIPT_TAGS | 7 | 7 |
| `coverage` | (varies) | COVERAGE | 55 | matches |
| `speakerSource` etc. | (varies) | SPEAKER_BACKFILL | 8 | matches |
| `unattestedReason` | 0 | UNATTESTED_REASON_DEFAULTS | 13 | 13 |
| `description.{ja,ko,zh}` | (varies) | DESC_JKZ | 35 | matches |
| `canonicalCode` | 0 | CANONICAL_CODE | 39 | 39 |

**Fields with genuine zero coverage (no static, no runtime map):**
- `vitality` — 0 (Task 190 finding stands).
- `textDirection` — 1 (Task 193 below — 60 RTL rows, 1 set).
- `officialStatus` — 0 (Task 166 still pending).
- `accessed` ISO 8601 dates — 0 (Task 189 stands).
- `audioRef` — 0 (Task 151 not yet executed).
- `glottocode` / `iso6393` — partial static, no runtime map (Task 177 stands).
- `formEvidence` / `pronunciationEvidence` / `conceptEvidence` / structured `citation` — 0 (Task 195 below).

### New Task 192. Migrate the remaining 14 runtime overlay maps to static meta fields (extends Tasks 178, 182, 186)

Goal:
**Tasks 178, 182, 186 each addressed *one* runtime overlay map** (`CANONICAL_CODE`, `ALIASES`, the regional Spanish/Portuguese atom aliases). The Round 8 scan reveals **14 more runtime overlay maps** following the same antipattern, each setting a meta field at module load time. Static analysis tools, audit scripts, regex extractors, and contributor inspections all silently miss the data. Tasks 188 ("0 disambiguators"), 191 (formType partial), and several others miscounted because they checked only static occurrences.

Current issue I checked (2026-05-06 scan):

**17 total runtime overlay maps in the project:**

In `wordmap_meta.js`:
1. `PRONUNCIATION_TYPE` (line 1269, 72 entries) — `pronunciationType`.
2. `COVERAGE` (line 1389, 55 entries) — `coverage`/`baseLang`.
3. `LOCATION_BASIS_OVERRIDES` (line 1481, 144 entries) — `locationBasis`.
4. `SURFACE_TYPE` (line 1652, 231 entries) — `surfaceType`.
5. `LANGUAGE_KIND` (line 1910, 51 entries) — `languageKind`.
6. `CANONICAL_CODE` (line 2034, 39 entries) — `canonicalCode` (already covered by Task 178).
7. `ALIASES` (line 2114, 82 entries) — `aliases` (already covered by Task 182).
8. `FORM_TYPE_OVERLAY` (line 2214, 43 entries) — `wordEvidence.formType`.
9. `SPEAKER_BACKFILL` (line 2278, 8 entries) — `speakerSource`/`speakerYear`/`speakerBasis`.
10. `UNATTESTED_REASON_DEFAULTS` (line 2318, 13 entries) — `unattestedReason`.
11. `REVIEW_STATUS` (line 2336, 20 entries) — `reviewStatus`.
12. `VARIETY_REL` (line 2386, 18 entries) — `varietyRole`/`parentCode`.
13. `DISAMBIGUATORS` (line 2425, 4 entries) — `disambiguator`.
14. `SOURCE_BACKFILL` (line 2522, 35 entries) — `sources`.
15. `SCRIPT_TAGS` (line 2622, 7 entries) — `scriptTags`.
16. `DESC_JKZ` (line 2650, 35 entries) — `description.{ja,ko,zh}` translations.

In `wordmap_data.js`:
17. `DATA_STATUS_OVERRIDES` (line 3400, 86 entries) — `dataStatus`. The setter loop is in `wordmap_meta.js:2702` but the data lives in `wordmap_data.js` — *cross-file* runtime overlay, even more opaque.

**Why the antipattern matters:**
- Static grep tools (audit, validator pre-pass, contributor IDE jump-to-definition) miss 17 fields' worth of data.
- Field renames or schema changes require touching the runtime initializer + the meta blocks — two places.
- New contributors unfamiliar with the pattern add the same field both statically AND in the overlay map, causing silent shadow-overrides.
- Audit findings (this file's own Tasks 188, 190, 191) become unreliable because static checks don't reflect actual coverage.

Files to change:
- `wordmap_meta.js` — migrate all 14 remaining runtime overlay maps.
- `wordmap_data.js` — migrate `DATA_STATUS_OVERRIDES` (cross-file).
- `validate_wordmap_data.js` — strengthen checks to detect and forbid runtime-only fields.
- `CONTRIBUTING.md` — add an "All meta fields go in static blocks" policy section.

Implementation instructions:

**Phase 1 — pick the migration approach.**
- Each runtime overlay map has a `for (const code of Object.keys(MAP))` loop that copies values into `LANG_DATA[code].meta.<field>`.
- The migration replaces both the map *and* the loop: each map entry becomes a static field in the corresponding meta block.

**Phase 2 — migrate one map at a time.**
- Start with the smallest (`DISAMBIGUATORS` 4 entries, `SCRIPT_TAGS` 7 entries) to validate the migration script.
- Move to medium (`SPEAKER_BACKFILL` 8, `UNATTESTED_REASON_DEFAULTS` 13, `REVIEW_STATUS` 20).
- End with the largest (`SURFACE_TYPE` 231, `LOCATION_BASIS_OVERRIDES` 144, `DATA_STATUS_OVERRIDES` 86).

**Phase 3 — handle COVERAGE (special case).**
- `COVERAGE` map sets *both* `coverage` and `baseLang` per row. Migration must preserve this paired write.

**Phase 4 — handle DATA_STATUS_OVERRIDES (cross-file special case).**
- The map lives in `wordmap_data.js`; the setter is in `wordmap_meta.js`. Migration moves the data into static `meta.dataStatus` fields in `wordmap_meta.js` and deletes the cross-file dependency.

**Phase 5 — strengthen validator.**
- After migration, add a check that scans for any remaining `for (const code of Object.keys(MAP))` pattern in `wordmap_meta.js` that writes to `LANG_DATA[code].meta.X`. WARN.

Validator / static check:
- `[#192]` runtime overlay-map setter pattern detected → ERROR.
- INFO line: `static field coverage: <table>` listing each field's count from static grep alone.

Do not:
- Do not migrate without testing. Each migration must be verified by running the validator before and after; coverage tallies should remain unchanged.
- Do not delete the runtime overlay maps before migration is complete. Removing the maps breaks the runtime initializer until each entry is moved.
- Do not bundle migrations across phases. Migrate one map per commit so any regressions are bisectable.
- Do not use this task as cover to redesign the schema. Migration preserves data; schema redesign is separate.

Done when:
- All 17 runtime overlay maps are migrated to static fields.
- 0 runtime initializer loops remain in `wordmap_meta.js`.
- Validator coverage tallies match pre-migration counts (no data lost).
- Static grep over `wordmap_meta.js` returns the full coverage for every field.
- CONTRIBUTING.md documents the static-only policy.

### New Task 193. Backfill `meta.textDirection: 'rtl'` for the 60 right-to-left script rows

Goal:
**60 of 619 rows use right-to-left scripts (Arabic, Hebrew, Syriac, Thaana, Adlam, Mandaic), but only 1 row has `meta.textDirection: 'rtl'` set** (Dhivehi `dv`, recently added in Task 141). The other 59 rely on the project's CSS `dir="auto"` and Unicode Bidi Algorithm to render correctly. Task 129 added the schema for explicit RTL marking; the backfill never ran.

Current issue I checked:
- 60 rows with RTL or partially-RTL script as primary or secondary writing system.
- 1 row (`dv`) has `meta.textDirection: 'rtl'` set explicitly.
- Other RTL rows: ar (+7 dialects), arq, mey, he, fa, az, azb, ug, ku, ckb, ps, yi, arc, skr, bal, ff (Adlam), and ~30 more whose script field includes Arabic / Tifinagh / Adlam.

Files to change:
- `wordmap_meta.js` — add `textDirection: 'rtl'` to all 60 RTL-script rows.
- `validate_wordmap_data.js` — cross-check: `script` contains RTL-script name → `textDirection: 'rtl'` required.
- `wordmap.html` — modal already handles bidi per Task 129. Confirm rendering is correct on all 60 rows.

Implementation instructions:

**Step 1 — categorize.**
- **Pure RTL:** Arabic, Hebrew, Syriac, Thaana, Mandaic, N'Ko. ~30 rows.
- **Mixed (RTL secondary):** Languages with both Latin and Arabic scripts (e.g., Hausa, Tamasheq, Berber). ~25 rows. For these, decide whether `textDirection` is rtl, ltr, or 'auto' based on the *primary* script.
- **Special:** Adlam (Fula), N'Ko (Bambara) — RTL but recently codified.

**Step 2 — for pure-RTL rows, set `textDirection: 'rtl'`.**

**Step 3 — for mixed-script rows, set `textDirection` based on the primary script in modern usage.**
- Hausa today uses Latin primarily → `textDirection: 'ltr'`.
- Persian uses Perso-Arabic → `textDirection: 'rtl'`.
- Document the decision per row.

**Step 4 — extend validator.**
- If `script` matches RTL-script keywords without `textDirection` set → WARN.

Validator / static check:
- `[#193]` RTL script without explicit `textDirection` → WARN.
- INFO: textDirection coverage `N/M`.

Do not:
- Do not assume `textDirection: 'rtl'` for every script that includes "Arabic". Some languages list Arabic as a *secondary* script (e.g., Latin/Arabic for Hausa); the primary script determines direction.
- Do not silently override existing direction handling. Existing CSS `dir="auto"` works for most cases; the explicit field is for accessibility tools and screen readers that benefit from explicit direction.

Done when:
- All 60 RTL-script rows have `textDirection` set explicitly.
- Validator `[#193]` reports 0 warnings.
- Screen-reader testing confirms RTL rows announce direction correctly.

### New Task 194. Backfill `wordEvidence.formType: 'compound'` for the 190 missing multi-word cells

Goal:
**241 cells have multi-word surface forms; only 51 have `formType: 'compound'` set (21%).** Task 104 added the schema and started annotation but coverage stalled at the priority languages. The remaining 190 cells across ~150 languages render in the modal as ambiguous "is this one word or two?" without the structured tag.

Current issue I checked:
- Multi-word cells distribution (top 15):
  - `ahk` Akha: 11 cells, `kha` Khasi: 9 (covered)
  - `vi`/`vi_c`/`vi_s`: 5 each (covered for sun/moon/heart only — 3/5)
  - `gor`: 5, `mtq`: 4, `hmn`: 3, `st`: 3, `ve`: 3, `bm`: 3, `nso`: 3, `kac`: 3, `nut`: 3, `yo`: 2
- 159 languages have at least 1 multi-word cell.

Files to change:
- `wordmap_meta.js` `FORM_TYPE_OVERLAY` (or static fields per Task 192).
- `validate_wordmap_data.js` — extend the existing multiword check to enumerate all uncovered.

Implementation instructions:

**Step 1 — auto-flag every multi-word surface cell.**
- Run a one-time script that finds every `surface` containing whitespace.
- Output per-language list.

**Step 2 — categorize.**
- **Lexical compound** (single concept, multi-word surface): `mặt trời` (sun = "face of sky" in Vietnamese), `qhov muag` (eye = "hole eye" in Hmong). Tag `formType: 'compound'`.
- **Phrase**: `xin chào` (hello), `cảm ơn` (thanks). The phrase IS the citation form, not a compound noun. Tag `formType: 'phrase'` (new value if not in enum).
- **Article + noun**: Khasi `u jingstad` (the wisdom), where `u` is article. Tag `formType: 'article-noun'` (new value).

**Step 3 — extend `formType` enum if needed.**
- Currently allowed: `'bound-stem'`, `'reconstructed-root'`, `'agreement-stem'`, `'compound'`.
- Consider adding: `'phrase'`, `'article-noun'`.
- Document in CONTRIBUTING.md.

**Step 4 — backfill in batches.**
- Phase 1: Vietnamese cells (`vi`/`vi_c`/`vi_s` × remaining 2 cells) — small.
- Phase 2: Akha (11), Khasi remaining, Hmong, top-10 languages.
- Phase 3: opportunistic.

Validator / static check:
- `[#194]` multi-word surface without `formType` → WARN.
- INFO: compound coverage `N/M` of multi-word cells.

Do not:
- Do not annotate cells whose multi-word surface is incidental (e.g., a translation gloss in parens). Surface should be the lemma; if a cell shows two forms separated by whitespace, decide which is canonical.
- Do not set `formType: 'compound'` on phrases. The semantic distinction matters for educational use (showing how a word is built).

Done when:
- All 241 multi-word cells have `formType` in the overlay or static field.
- Coverage line shows ≥ 95%.
- Modal renders the appropriate tag for every multi-word cell.

### New Task 195. Adopt the split evidence schemas (`formEvidence` / `pronunciationEvidence` / `conceptEvidence` / `citation`) — 0 cells use them

Goal:
**Tasks 97 and 133 added structured evidence schemas (`formEvidence`, `pronunciationEvidence`, `conceptEvidence`, structured `citation`) but ZERO cells use them.** Authors continue to use the legacy unified `wordEvidence: { evidence, source }` format. The richer schemas exist but are dead schema — no row demonstrates them, validator's structural checks don't fire, and educational use cases (Task 152's cognate sets, Task 157's citation export) cannot leverage the structured form.

Current issue I checked:
- `formEvidence:` field count: 0 cells (in both data and meta).
- `pronunciationEvidence:` field count: 0.
- `conceptEvidence:` field count: 0.
- Structured `citation:` field count: 0.
- Legacy `wordEvidence: { evidence: '...', source: '...' }` is used in ~300 cells.

Files to change:
- `wordmap_data.js` — migrate the most-recently-edited cells (Pass 12 onwards) to use split schemas.
- `validate_wordmap_data.js` — make split schema validation actually fire by populating example cells.
- `CONTRIBUTING.md` — make split schema the documented preferred form for new entries.

Implementation instructions:

**Step 1 — pick a pilot.**
- Choose ~50 cells across 5 languages where the form, pronunciation, and concept come from clearly distinct sources. Old Korean (`oko`) is a great pilot because forms come from Hyangchal corpus, pronunciations are reconstructed phonology, and concept-meanings come from semantic interpretation — three different evidence streams.

**Step 2 — migrate the pilot cells.**
- Replace `wordEvidence: { evidence: 'direct', source: 'Lee 2003' }` with:
  ```
  wordEvidence: {
      formEvidence: { evidence: 'direct', citation: { short: 'Lee 2003', type: 'grammar', author: 'Lee, K-M.', year: 2003, title: 'A History of the Korean Language', page: 'p. 47' } },
      pronunciationEvidence: { evidence: 'reconstructed', citation: { short: 'Lee 2003', type: 'grammar' } },
      conceptEvidence: { evidence: 'direct', citation: { short: 'Lee 2003', type: 'grammar' } },
  }
  ```

**Step 3 — extend modal display.**
- Modal already supports the split per Task 97. After migration, the pilot cells render `[form: direct; pron: reconstructed; concept: direct]` instead of a single evidence marker.

**Step 4 — update CONTRIBUTING.md.**
- Document the split schema as preferred for new authoring.
- Mark the legacy `evidence: + source:` form as deprecated.

**Step 5 — validator escalation.**
- After ~50 cells use the split, run the validator. The structural checks for split schemas should fire and pass.
- Add a deprecation warning for new cells using the legacy unified form.

Validator / static check:
- `[#195]` cell using legacy `wordEvidence: { evidence, source }` only → INFO (deprecated).
- Coverage line: split-schema adoption `N/M of wordEvidence cells use the split form`.

Do not:
- Do not migrate every cell at once. The split is more verbose; only adopt where the three streams are genuinely distinct.
- Do not delete the legacy unified form support from the validator. Many cells still use it; the migration is gradual.
- Do not create false detail. If form, pronunciation, and concept all come from the same source, the unified form is fine and the split is redundant.

Done when:
- ≥ 50 cells use the split evidence schema.
- Validator structural checks for split fields fire and pass on those cells.
- CONTRIBUTING.md marks split as preferred.
- Modal correctly renders the split tags on pilot cells.

---

## Coverage Roadmap to 1,000 (2026-05-06 part 19)

A unified plan to grow coverage from the current ~620 languages to 1,000. Each tier below is a focused batch with concrete language candidates. **The cross-cutting i18n and tree-update requirements are non-negotiable for every batch** — they are the most common reason previous additions (`cv`/`dv`/`tzh`/`mdf` in Task 141 first wave) generated downstream warnings and lang_names mismatches.

### New Task 197. Master roadmap — Tiers 5 through 13 to reach 1,000 languages

Goal:
Coordinate the 9-tier expansion plan (~318 additional languages on top of the ~63 already proposed in Tier 1–4) under one task to ensure every added language meets the same i18n, tree-update, and validator gates. Without a single coordinator, batches drift on conventions, lang_names backlogs accumulate (cf. Task 143's cleanup of 21 fresh warnings from 4 incomplete additions), and the family taxonomy fragments further.

Current issue I checked (2026-05-06):
- Coverage: 619 (modern 509, historical 86, +4 uncommitted Tier 1).
- Already proposed: Tier 1 (Task 141, 10 langs) + Tier 2 (Task 142, 12 langs) + Tier 3 (Task 149, 14 langs) + Tier 3.5 (Task 150, 6 langs) + Tier 4 (Task 196, 21 langs) = 63 langs → 682.
- Gap to 1,000: 318 languages.
- Per-language cost (sourced data + meta + i18n): ~70 minutes; total ~370 hours.
- Recurring failure mode in past batches: data + meta added without `lang_names` 21-UI backfill, generating per-UI-lang validator warnings (cf. Tasks 143, 175).

Files to change (per tier, every time):
- `wordmap_data.js` — add row.
- `wordmap_meta.js` — add meta block.
- **`lang_names.js` — add to ALL 21 UI sections** (mandatory; Task 143's lesson).
- **`meta_i18n_coverage.js` + `meta_i18n_ext.js` — add atom translations for new family/script/region tokens** (mandatory; Tasks 183/184 lesson).
- **`WORD_LIST.label` and `WORD_LIST.definition` — verify all 21 UI langs covered for new atoms** (Task 175/176).
- **`lang-filter.js` — add new family/script tokens to the curated taxonomy if not already** (Task 159).
- **HIST_DESCENDANT mapping in `wordmap_data.js` — update parent/child links for any new historical-stage row** (Task 122).
- **`scriptTags` — set per Task 130 for any new script encountered**.
- **`disambiguator` — set per Task 115 if the native name collides with an existing row** (Task 188).
- `changelog.html` — credit the addition.
- `CONTRIBUTING.md` — extend the conscious-omissions section if any candidate is intentionally deferred.

### Cross-cutting requirements (non-negotiable for every language added under any tier)

**A. Multilingualization (i18n) — every added language MUST satisfy:**

1. **`lang_names.js` — all 21 UI sections.** Not just `en`; not just `en/ja/ko/zh`. The 21 UI lang sections (`en`, `ja`, `ko`, `zh`, `yue`, `vi`, `th`, `id`, `hi`, `de`, `fr`, `it`, `es_eu`, `es_mx`, `pt_eu`, `pt_br`, `ru`, `uk`, `ar`, `he`, `sw`) all need an entry for the new code. Validator's `lang_names.<UI>: N/M` warning explicitly catches this.

2. **`meta.description` — multilingual object form.** Use the `{ en, ja, ko, zh, ... }` object shape per Task 145. Plain string descriptions are deprecated; the object form supports per-UI-lang fallback. At minimum, fill `en/ja/ko/zh`. For Tier 9 (Bantu) and Tier 12 (Niger-Congo), also fill `sw` Swahili.

3. **`meta_i18n_coverage.js` and `meta_i18n_ext.js` atom additions.** When a new family token is introduced (e.g., "Pama-Nyungan (Wati)" for Tier 6, "Trans-New Guinea (West Papuan Highlands)" for Tier 7), add an atom translation in **all UI langs covered by `META_I18N_COVERAGE_ATOMS` (currently 11 UI langs)**, NOT just `en/ja/ko/zh`. Per Task 183, the bottom-tier UI langs (de/fr/it/es/pt/id/sw) are already at 161-285 atoms — adding a new family atom only in 4 UI langs widens the spread. Either add to all 11 UI langs OR add a `META_I18N` full-string entry that covers all 22 UI langs (per `META_I18N` block in `wordmap_meta.js:1212`).

4. **`WORD_LIST.label` — all 21 UI langs covered.** Already balanced (Task 175 added the `es_eu/es_mx/pt_eu/pt_br` regional splits). When a tier introduces a new word concept (none planned in Tiers 5–13, but if revising existing word concepts), the label must be added in all 21 UI langs.

5. **`WORD_LIST.definition` — same 21 UI langs (Task 176).** If a tier requires re-explaining a concept's scope for a previously-uncovered domain (e.g., Tier 5 sign languages need a definition that covers the modality), update all 21 UI langs.

**B. Tree updates (genealogical and historical) — every added language MUST satisfy:**

1. **`meta.parentCode` or `meta.varietyRole`.** Per Task 170: every underscore code needs either `parentCode` (regional variant of an existing row) or `varietyRole: 'sibling-language' | 'continuum-member' | 'base-variety' | 'historical-stage'`. Non-underscore codes can leave both unset if they have no map-anchored parent.

2. **`HIST_DESCENDANT` updates for historical-stage rows.** Per Task 122: if a tier adds a historical-stage row (e.g., Old Aramaic → modern Aramaic, Old Tibetan → modern Tibetan dialects), update the `HIST_DESCENDANT` mapping in `wordmap_data.js` so the historical-mode overlay correctly draws the descendant chain. Forgetting this means the new historical row appears as an isolated marker without its modern reflexes.

3. **`meta.family` — normalized per Task 159.** New family strings must follow the convention chosen in Task 159 (Sinitic vs Sino-Tibetan, Atlantic-Congo vs Niger-Congo, Saami vs Sámi, etc.). Do not introduce a third spelling. If the new language belongs to a sub-branch not yet represented, document the new sub-branch label in the family-string normalization rule.

4. **`meta.scriptTags` — typed array per Task 130.** Every new row must have `scriptTags` (e.g., `['Latin']`, `['Han']`, `['Brahmic', 'Latin']`). The prose `script` field is for display; `scriptTags` drives the filter UI. Never add a row with only the prose script field.

5. **`meta.disambiguator` if native-name collision.** Per Task 115/188: run the native-name multimap check after every batch. If a new row's native name matches any existing row, both rows need `disambiguator` populated in 4 UI langs (en/ja/ko/zh) at minimum.

6. **Family-tree visualization data (Task 161 anchor).** When adding sub-branches (e.g., new Pama-Nyungan languages introduce "Wati", "Yapa", "Ngumpin" sub-branches), the family-tree filter UI's hierarchy must reflect them. Update `lang-filter.js`'s curated taxonomy.

**C. Validator gates per tier — no batch merges until:**

- `node validate_wordmap_data.js` shows 0 ERRORs and no NEW WARNs vs the pre-batch baseline.
- `lang_names.<UI>: N/M` warning count is exactly the same as before the batch (i.e., new languages are fully covered in all 21 UI sections).
- `[#13b']` description i18n coverage threshold (95%) is not breached for any UI lang.
- Family-string consistency check (Task 159) shows no new variants of already-existing taxonomies.

### Tier 5 — Sign language batch (~30 languages)

Languages: `ase` ASL, `bfi` BSL, `jsl` JSL (Tier 2), `asf` Auslan (Tier 4 NZ-pair) + new: `nzs` NZSL, `lsf` LSF, `gsg` German Sign Language, `kvk` Korean SL, `csl` Chinese SL, `bzs` Brazilian SL, `ins` Indo-Pakistani SL, `psl` Polish SL, `lsc` Catalan SL, `lse` Spanish SL, `tsq` Thai SL, `gss` Greek SL, `dse` Dutch SL, `ils` International Sign, `kvk` Korean, `slf` Swiss-French SL, `pks` Pakistan SL, `ssp` Spanish SL, `cse` Czech SL.

Tier 5-specific gates: requires Tier 2 modality decision (Option A/B/C in Task 142) before any sign language is added. Sign language atom translations must explicitly tag `modality: 'signed'` so `META_I18N_ATOMS` does not silently treat sign lang families like spoken.

### Tier 6 — Australian Aboriginal batch (~25 languages)

Languages: Pama-Nyungan major (`pjt` Pitjantjatjara already present, add `wbp` Warlpiri, `kld` Gamilaraay/Yuwaalaraay, `pjt` already, `xrr` Yorta Yorta revitalization, `gbb` Kayardild, `mwf` Murrinhpatha, `gay` Gayardilt, `wbp` already if), Yolŋu cluster (`dhg` Dhuwal, `djr` Djinba, `gnn` Gunnai/Kurnai), Western Desert sub-branches, non-Pama-Nyungan (`gun` Bininj Gunwok, `ahw` Ngandi, `tcs` Torres Strait Creole), Tasmanian languages (extinct, attested), Tiwi, etc.

Tier 6-specific gates: cite Glottolog and AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies) for every row. Ngumpin-Yapa, Wati, Arandic sub-branches must be explicit in `meta.family`. Many languages have ICIP (Indigenous Cultural Intellectual Property) considerations — confirm sources are open or community-approved.

### Tier 7 — Papuan languages batch (~30 languages)

Languages: Trans-New Guinea — Engan (Enga `enq` already, Huli `hui` already, Ipili `ipi`), Mountain Ok (Mian `mpt` already), Madang, Eastern Highlands (Foe, Kewa, Mendi, Wahgi `wgi`), Asmat-Kamoro (Asmat `asy`), West Papuan (Ekari `ekg`, Yali `nlk`, Korowai `khe`), Sepik languages (Iatmul `ian`), Lakes Plain (Awera). Plus non-Trans-New-Guinea: Skou family, Kwomtari.

Tier 7-specific gates: very limited published lexical sources for many. Use SIL PNG/Indonesia language databases. `dataStatus: 'modern'` but `reviewStatus: 'machine-seeded'` initially — Tier 7 has the most uncertain wordlists.

### Tier 8 — Native American extension (~50 languages)

Languages: California (Pomo `pej`, Maidu `nmu`/`mjd`, Yokuts `yok`, Wintu `wnw`, Hupa `hup`), Mesoamerican (Mixe `mxq`, Mazatec `mau`, Totonac `tot`, Chinantec `cnl`, Huave `huv`), Salishan (`hur` Halkomelem, `oka` Okanagan, `lil` Lillooet), Iroquoian (`onn` Onondaga, `cay` Cayuga, `tus` Tuscarora), Algic extension (`crk` Plains Cree, `mic` Mi'kmaq, `umu` Munsee Lenape), Plains languages (`com` Comanche, `kio` Kiowa).

Tier 8-specific gates: every row cite the relevant tribal language program where it exists (e.g., Mi'kmaq Education Authority, Wukchumni Yokuts revival). For revitalization-stage languages (Mohegan-Pequot, Wampanoag), document the L1/L2/heritage distinction explicitly in meta.

### Tier 9 — Bantu extension (~50 languages)

Languages: Bantu E40-50 (Kamba `kam` already from Tier 3, Embu `ebu`, Meru `mer`, Daiso `dav`), F (Sukuma `suk`, Nyamwezi `nym`), J (Buganda `lg` already, Soga `xog`, Lugbara `lgg` already), L (Luba `lub`, Hemba `hem`, Yaka `iyx`), M (Tumbuka `tum`, Mambwe `mgr`), N (Sotho `st` already, Pedi `nso` already, Tswana `tn` already, but split into varieties), R (Ndonga `ng` already, Kwanyama `kj`, Herero `her` already, Kuanyama).

Tier 9-specific gates: Bantu noun-class system (1-23) varies dramatically. `meta.grammarCapsule.gender.system: 'noun-class'` (Task 153 schema) must be set per row with the count.

### Tier 10 — Pacific & Austronesian completion (~40 languages)

Languages: Philippine (`mrw` Maranao, `mdh` Maguindanao, `tsg` Tausug, `ifb` Batak, `xsb` Sambal, `agt` Central Cagayan Agta — many present), Indonesian regional (`bbc` Toba Batak already, `btx` Karo Batak, `bjn` Banjar already, `mad` Madurese already), Polynesian completion (`wls` Wallisian, `fud` Futunan, `pim` Powhatan), Micronesian (`yap` Yapese already, `cal` Carolinian, `gil` Gilbertese already, `kos` Kosraean from Task 149), Melanesian (`mwc` Are, Solomons regional varieties).

Tier 10-specific gates: Many of these are already present; the Tier 10 work focuses on completing regional sub-batches rather than starting from zero.

### Tier 11 — Sino-Tibetan minor + Karenic (~40 languages)

Languages: Naga (`nbt` Tangkhul Naga, `aii` Ao Naga, `nbe` Konyak, `kne` Mao Naga, `lhm` Lhota Naga), Karen (`ksw` Sgaw Karen already, `pwo` Western Pwo, `kjp` Eastern Pwo already, `pdu` Kayan, `kyu` Western Kayah), Lolo-Burmese (`ahk` Akha already, `lhu` Lahu already, `lis` Lisu, `mwq` Mün Chin), Tibetan dialects (`adx` Amdo, `khg` Khams, `dre` Dolpo, `loy` Loke), Bodish minor (`tdg` Western Panjabi-related, `bft` Balti, `lbj` Ladakhi).

Tier 11-specific gates: tone systems vary per language; do not copy tone notation from one Karen language to another. Each row needs sourced tone documentation.

### Tier 12 — Niger-Congo extension (~30 languages)

Languages: Atlantic (`wo` Wolof already, `srr` Serer-Sine, `bsc` Bassari, `pap` Pulaar dialects), Mande (`mlq` Western Maninkakan, `ses` Koyraboro Senni Tier 3, `snk` Soninke, `sus` Susu, `mey` Hassaniya Arabic — wait Mey is Arabic), Volta-Niger (`idu` Idoma, `iji` Igala, `niy` Ngiyambaa — wait that's Australian, `hag` Hanga), Adamawa-Ubangi (`fan` Fang already, `nya` Nyanja already, `dyo` Jola-Fonyi, `umb` Umbundu already).

Tier 12-specific gates: Atlantic group has long-standing classification disputes (Niger-Congo vs Atlantic-Congo vs simply "Atlantic"). Use the Atlantic-Congo convention per Task 159.

### Tier 13 — Mesoamerican / Andes / isolates completion (~25 languages)

Languages: Maya completion (`mam` already, `kek` Q'eqchi', `cak` Kaqchikel, `poc` Pocomam, `usp` Uspantek), Otomanguean completion (`mim` Mixtec varieties, `trs` Triqui, `top` Totonac), Andes (`qul` Bolivian Quechua, `quz` Cusco Quechua, `quy` Ayacucho Quechua, `aym` already, `quc` already), South American (`gug` Paraguayan Guarani, `gun` Mbya Guarani, `tpw` Old Tupi, `mai` Aymara already), isolate completion (`hai` Haida, `tar` Tarahumara, `way` Wayuu/Wayuunaiki).

Tier 13-specific gates: Many Quechua varieties differ at the IPA level. Each Quechua variant must be sourced individually, not copied from `qu` macro.

---

### Per-tier rollout schedule

| Tier | Languages | Est. effort | Cumulative count |
|---|---:|---:|---:|
| Current | 619 | — | 619 |
| 1 (Task 141) | +10 | done in flight | 629 |
| 2 (Task 142) | +12 | requires modality decision | 641 |
| 3 (Task 149) | +14 | 5 sub-batches | 655 |
| 3.5 (Task 150) | +6 | small batch | 661 |
| 4 (Task 196 candidate) | +21 | 9 sub-batches | 682 |
| **5** | **+30** | **modality dependent** | **712** |
| **6** | **+25** | **AIATSIS / community sourcing** | **737** |
| **7** | **+30** | **SIL PNG/Indonesia** | **767** |
| **8** | **+50** | **per-row tribal program** | **817** |
| **9** | **+50** | **Bantu noun-class detail** | **867** |
| **10** | **+40** | **mostly regional completion** | **907** |
| **11** | **+40** | **per-row tone sourcing** | **947** |
| **12** | **+30** | **Atlantic-Congo classification** | **977** |
| **13** | **+25** | **mesoamerican + andean + isolates** | **1,002** |

### Validator-driven progress checkpoints

- **At 700 langs** (Tier 5 complete): re-run Tasks 143–146 for any new lang_names backlog.
- **At 800 langs** (Tier 7 complete): re-run Tasks 159 (family normalization) — Pama-Nyungan and Trans-New Guinea sub-branches multiply taxonomies.
- **At 900 langs** (Tier 9 complete): re-run Tasks 165 (script normalization) — Bantu adds many script combinations.
- **At 1000 langs**: full re-validation including Tasks 167 (speakers), 171 (speakerYear), 173 (wordEvidence), 177 (glottocode/iso6393), 188 (disambiguator after every native-name collision), 190 (vitality), 193 (textDirection), 194 (formType compound).

### Quality safeguards (Tier 5–13 specific)

- **`reviewStatus: 'machine-seeded'`** is the default for new Tier 5–13 additions; promote only after per-cell verification.
- **`pronunciationType: 'broad'` or `'orthography'`** is the default; `'ipa'` requires sourced narrow-IPA per cell (Task 76 rule).
- **`audioRef: null`** initially; Task 151 audio backfill is a separate pass.
- **`vitality`** must be set per Task 190 — many Tier 5–13 candidates are endangered.
- **`textDirection: 'rtl'`** must be set for any RTL-script row (Task 193).
- **`disambiguator`** must be checked after every batch via the native-name multimap scan.

Implementation instructions:

**Per-tier execution checklist:**

1. **Pre-batch:** Run `node validate_wordmap_data.js` and record the baseline (errors, warnings, INFOs).
2. **Add wordmap_data row** with full 20-cell `words` block, sourced.
3. **Add wordmap_meta meta block** with all required fields:
   - `family`, `speakers`, `speakerBasis`, `speakerSource`, `speakerYear`.
   - `iso6393`, `glottocode`.
   - `countries`, `officialStatus` (Task 166), `officialIn`.
   - `script`, **`scriptTags`** (Task 130, mandatory).
   - `description: { en, ja, ko, zh }` minimum.
   - `pronunciationType`, `surfaceType`.
   - `locationBasis`, lat/lng.
   - **`parentCode` or `varietyRole`** (Task 170, mandatory if underscore code).
   - **`vitality`** (Task 190, mandatory).
   - **`textDirection`** if RTL (Task 193, mandatory if applicable).
   - `reviewStatus: 'machine-seeded'`.
   - `sources: [{type:'reference', title:..., url:..., accessed:'YYYY-MM-DD'}]`.
   - `aliases` if applicable.
   - `disambiguator` if native name collides.
4. **Add `lang_names.js` entry in ALL 21 UI sections** (mandatory; no exceptions).
5. **Add `meta_i18n_coverage.js` atom translations** for any new family/script/region tokens, in all 11 covered UI langs (Task 184) or via `META_I18N` full-string in 22 langs.
6. **Update `lang-filter.js`** if a new family/script/region category appears.
7. **Update `HIST_DESCENDANT`** if the new row is a historical stage with modern descendants.
8. **Bump `WM_ASSET_VERSION`** for `data`, `meta`, `names`.
9. **Run validator** and confirm: 0 ERRORs, 0 new WARNs, no `lang_names.<UI>: N/M` regression.
10. **Update `changelog.html`** with credit and language list.

Validator / static check:
- `[#197]` after each batch, the validator must show no regression in `lang_names` coverage, no new family-string variants, no `disambiguator` missing on shared-native-name pairs.
- Coverage line: `Tier roadmap progress: <current>/1000 (X%)`.

Do not:
- Do not add a tier in one giant commit. Split each tier into its sub-batches per language family/region (typically 5–10 langs per commit).
- Do not skip the i18n step "for now". Lang_names backlog accumulates exponentially — Tier 5 alone adds 30 langs × 21 UI sections = 630 entries that must land at the same time.
- Do not introduce family taxonomy variants ("Pama-Nyungan, Wati subgroup" vs "Pama-Nyungan (Wati)" vs "Pama-Nyungan Wati") within a tier. Pick one and apply.
- Do not skip `scriptTags` even for languages with familiar scripts. The filter UI relies on it.
- Do not rush to 1,000 by lowering quality. `'machine-seeded'` rows are acceptable; **fabricated rows are not**.
- Do not skip the post-batch validator run. Catching issues per-batch avoids cascade.
- Do not let any tier introduce more than 10 new family-string tokens. If a tier needs more, the family taxonomy needs revision in a separate task before the tier proceeds.

Done when:
- All 9 tiers (5 through 13) are complete.
- Total language count reaches 1,000+.
- Validator total WARNs do not exceed pre-Tier-5 baseline + 5%.
- Family taxonomy normalization (Task 159) has been re-run after every tier.
- `lang_names.js` has 1000+ entries in every one of the 21 UI sections.
- `meta_i18n_coverage.js` atom coverage spread (Task 183) has not widened.
- HIST_DESCENDANT mapping covers every new historical-stage row.
- `scriptTags` is set on all 1000+ rows.
- Cumulative status documented in this audit file under a "Coverage 1000 reached" section with date.

---

## Status Sweep (2026-05-07)

A 24-hour-after-baseline status check confirmed substantial completion across the audit roadmap (Tasks 145, 146, 148, 159, 161, 162, 163, 164, 170, 172, 174, 175, 178, 179, 180, 181, 187, 188, 190, 193, 194 all closed; 619→630 languages with 11 added across Tiers 1–3). The validator reports 0 errors and 29 warnings, all of which are tracked. This block records three newly-surfaced issues plus the explicit list of still-open sub-tasks that the validator's own warnings now flag concretely.

### New Task 198. Resolve `WM_ASSET_VERSION` drift between cache-buster registry and HTML (Task 134 regression)

Goal:
The Task 134 cache-buster centralization is regressing. The validator warning `[#19]` now flags two drift cases:
- `styles.css?v=59` in `wordmap.html` ≠ `WM_ASSET_VERSION.styles=54`.
- `wordmap_data.js?v=104` in `wordmap.html` ≠ `WM_ASSET_VERSION.data=103`.

Each represents a contributor manually bumping the static `<link>`/`<script>` tag without updating the `WM_ASSET_VERSION` registry, OR vice versa. The drift is small (1 in data, 5 in styles) but the validator was added precisely to prevent this drift category, and it is now firing.

Current issue I checked (2026-05-07 validator output):
- `wordmap.html` static tag uses `?v=59` for styles.css and `?v=104` for wordmap_data.js.
- `WM_ASSET_VERSION` has `styles: 54` and `data: 103`.
- Validator `[#19]` fires twice.

Files to change:
- `wordmap.html` — confirm the actual current asset version intent (likely 59 for styles and 104 for data — they're newer).
- Update `WM_ASSET_VERSION` block in `wordmap.html` to match: `styles: 59`, `data: 104`.
- OR, conversely, lower the static tags to `?v=54` and `?v=103` if the registry is the authority.

Implementation instructions:
- Verify which value is correct by checking when the underlying file last changed.
- `git log -1 --format='%ai %h' styles.css wordmap_data.js` shows recent commits.
- The newer value (59 / 104) is almost certainly the intent — bump the registry to match.
- Add a pre-commit script (or strengthen Task 134's check) that rejects any PR introducing this drift.

Validator / static check:
- `[#19]` already exists; ensure it ERRORs (not WARNs) once the drift is acknowledged as the antipattern.

Do not:
- Do not silently accept the drift. The point of `WM_ASSET_VERSION` is single-source-of-truth.
- Do not bump only the static tags or only the registry. They must move in lockstep.

Done when:
- `[#19]` validator warning reports 0 drift cases.
- A pre-commit or CI guard prevents future drift.

### New Task 199. Add `yuc` and `kgg` to `HIST_DESCENDANT` so they classify correctly under the historical filter

Goal:
The validator warning `[#17]` flags two languages — `yuc` (Yuchi) and `kgg` (Kusunda) — that are tagged `dataStatus: 'fragmentary'` but absent from `HIST_DESCENDANT`. The UI's era-toggle filter relies on `HIST_DESCENDANT` to route fragmentary/extinct languages to the historical view. Without the mapping, these two rows appear in the modern view despite their fragmentary status.

Current issue I checked:
- `yuc` Yuchi (North American isolate, near-extinct, 2 fluent speakers): `dataStatus = 'fragmentary'`, no `HIST_DESCENDANT` entry.
- `kgg` Kusunda (Nepal isolate, ~1 fluent speaker): `dataStatus = 'fragmentary'`, no `HIST_DESCENDANT` entry.
- The validator's "Session 29 inverse invariant" check correctly identifies the routing gap.

Files to change:
- `wordmap_data.js` — extend `HIST_DESCENDANT` to include `yuc` and `kgg`.

Implementation instructions:
- For `yuc` Yuchi: the language has no direct modern descendant (it IS the language; "fragmentary" reflects its near-extinction). Map it to itself or to an empty descendant set, depending on schema convention.
- For `kgg` Kusunda: same situation — isolate, no descendants.
- The existing `HIST_DESCENDANT` schema may need a self-referential or `null`-descendant convention for "extinct/fragmentary, no descendants" cases. Check schema docs.

Validator / static check:
- After fix, `[#17]` warning disappears for both rows.

Do not:
- Do not change `dataStatus` to `'modern'` to silence the warning. The fragmentary status is correct.
- Do not invent a fictional descendant. Yuchi has no descendants; misrouting to Cherokee or another nearby language would be a fact error.

Done when:
- `[#17]` warnings for `yuc` and `kgg` are gone.
- Both rows correctly appear under the historical filter view.

### New Task 200. Backfill `wordEvidence` for the 29 `'source-checked'` rows (Task 173 explicit follow-up)

Goal:
The validator now actively warns `[#173]` on 29 specific rows that claim `reviewStatus: 'source-checked'` but have 0/20 cells of per-cell `wordEvidence`. This was previously only an INFO line under Task 173; with `reviewStatus` now at 100% coverage (Task 172), the inconsistency has crystallized into 29 named warnings.

Current issue I checked:
- 29 rows tagged `'source-checked'` in the runtime overlay (`REVIEW_STATUS` map per Task 172 migration to runtime — note: this is a Task 192 candidate for static migration too).
- Of those, 0 rows have all 20 cells annotated with `wordEvidence`.
- Validator output shows the first 5 explicitly and "(24 more 'source-checked' rows with < 20-cell wordEvidence — backfill needed)".

Named rows from validator (top 5 listed):
- `ja` Japanese
- `zh` Mandarin
- `wuu` Wu
- `sa` Sanskrit
- `my` Burmese
+ 24 more (likely: nv, haw, pjt, nxq, tji, pcc, iuu, kwk, pwn, bnn, trv, la, el_grc, en_ang, non, pal, xct, glk, lrc, bqi, juc, bo, lo, km).

Files to change:
- `wordmap_data.js` — add `wordEvidence` blocks per row, with per-cell evidence + source citation for all 20 concepts.
- `wordmap_meta.js` — extend `meta.sources` per Task 80 if not already.
- `validate_wordmap_data.js` — already warning; no change needed.

Implementation instructions:

**Phase 1 — pilot 5 rows.** Take `nv` Navajo, `haw` Hawaiian, `la` Latin, `el_grc` Ancient Greek, `en_ang` Old English. These are well-documented and have stable reference sources.

**Phase 2 — extend to remaining 24 rows.** Each requires 20 cells × `wordEvidence: { evidence, source }` minimum. Total: 24 × 20 = 480 cells of new evidence.

**Phase 3 — split-evidence migration (Task 195).** For the rows newly with 20-cell coverage, optionally upgrade legacy `wordEvidence: {evidence, source}` to split form `{formEvidence, pronunciationEvidence, conceptEvidence}` per Task 97/195.

**Verification:**
- Each cell's source must be citeable (book, paper, online dictionary with stable URL).
- Validator coverage line should report `source-checked wordEvidence coverage: 29/29` after backfill.

Validator / static check:
- `[#173]` warning count drops from 29 to 0.
- `wordEvidence overlay: N languages, M cells` count grows from 543 to 543 + (29 × 20 - already_present) ≈ 1100+.

Do not:
- Do not demote `'source-checked'` to `'human-reviewed'` to silence the warning. The status promotion was a deliberate claim; backing the claim with evidence is the correct response.
- Do not bulk-fill with placeholder sources. Each cell needs a real citeable source.
- Do not use the same source for all 20 cells of a row unless that source genuinely covers all 20. For Latin, a single dictionary (Lewis & Short) reasonably covers all; for Navajo, multiple sources are likely needed.

Done when:
- All 29 `'source-checked'` rows have 20-cell `wordEvidence`.
- Validator `[#173]` reports 0.
- Coverage line shows `29/29` source-checked rows fully evidenced.

---

### Comprehensive open-task summary (post-2026-05-07 status)

After the 2026-05-06 audit and 2026-05-07 status check, the following are the still-open tasks ranked by validator-warning visibility:

**Validator-visible warnings (concrete, immediately actionable):**
- Task 144: description i18n 86–91% in 15 UI langs (cv, dv, azb, gag, arq + 49–108 historical/recent codes). Highest-impact i18n gap.
- Task 173 (now Task 200): 29 source-checked rows with 0/20 wordEvidence.
- Task 191: cmg.eat, cmg.drink hyphen surface without formType (2 cells).
- Task 198: WM_ASSET_VERSION drift (styles 59 vs 54, data 104 vs 103).
- Task 199: yuc, kgg fragmentary not in HIST_DESCENDANT.

**Coverage-tally gaps (visible in INFOs, not warnings):**
- Task 76 follow-through: pronunciationType 223/630 (35%).
- Task 84 follow-through: surfaceType 470/630 (75%).
- Task 99 follow-through: locationBasis 170/630 (27%).
- Task 118 follow-through: languageKind 102/630 (16%).
- Task 151: audioRef 0 (not started).
- Task 166: officialStatus 0/630.
- Task 167: speakers numeric structure 0/630.
- Task 171: speakerYear 72/630 (11%).
- Task 177: glottocode 28/630 (4%).
- Task 189: accessed dates 0.
- Task 195: split evidence schemas 0 cells.

**Schema-only follow-ups (architecture, not user-visible):**
- Task 165: meta.script 277 distinct strings (still).
- Task 168: 16 multi-line declarations (still).
- Task 169: 147 cells with surface == IPA (still).
- Task 182: aliases runtime → static migration.
- Task 183: atom coverage 8–13× spread.
- Task 184: 9 UI langs absent from META_I18N_COVERAGE_ATOMS.
- Task 185: 712 orphan meta strings without atom translation.
- Task 186: es/pt regional aliasing runtime → static.
- Task 192: 14 remaining runtime overlay maps to migrate.

**Language-addition gaps:**
- Tier 1 remaining: chm Mari, tw Twi (2 of 10).
- Tier 2 remaining: ase/bfi/jsl sign langs, nmn Taa, jrb Andamanese (5 of 12+; sign langs require modality decision).
- Tier 3 remaining: tah, ho, en_nz, oto (4 of 14).
- Tier 4 (Task 196 — proposed but not started): 21 langs.
- Tier 5–13 (Task 197 roadmap to 1000): 318 langs.

**Educational tasks (not started):**
- Task 151 (audio playback).
- Task 152 (cognate sets / sound-correspondence).
- Task 153 (grammar capsules).
- Task 154 (sample sentences with Leipzig glossing).
- Task 155 (IPA tutor + glossary).
- Task 156 (curated lesson tours).
- Task 157 (citation export BibTeX/APA/MLA).
- Task 158 (interactive quiz mode).

---

## Progress notes — Tasks 144 / 145 / 146 (2026-05-07)

### Task 145 — string→object description migration ✓ Phase A & C

- Phase A: 559 string descriptions in `wordmap_meta.js` mechanically converted to `{ en: '...' }` shape. Validator-detected zero string-form descriptions remain.
- Phase C: validator's `string-description` warning now enumerates the full offender list (no `…N more` truncation). Migration is mechanical; a contributor running the validator now sees every code that needs conversion.
- Phase B (ja/ko/zh fill on the converted blocks) overlaps with Task 144; partially addressed there.

### Task 144 — description i18n gap ⚠ partial

8 codes that previously had only `{ en }` (no translations in any of the 20 non-en UI langs) now have `{ en, ja, ko, zh }`: `itl`, `ykg`, `pdc`, `mrj`, `liv`, `rhg`, `ctg`, `ale`. This pushes `ja`/`ko`/`zh` toward 100%.

Still open: `de` / `fr` (91%) need ~28 more codes each; `es_*` / `pt_*` (82%) need ~86 more. The full list of missing codes for each UI lang is now visible in the validator output (no truncation per Phase C). Realistically a dedicated translation pass: focus on `de` + `fr` first (smallest gap, 59 shared codes), then `ru`, then bottom-tier. Recommend grouping per UI lang (not per code) to minimize context-switching cost.

### Task 146 — Pass-7 deferred IPA rebuilds ⚠ deferred (multi-session, expert)

Each of `my` / `km` / `id-ms-tl` / `ta-te` / `bo` requires:

1. A primary IPA reference (e.g. *Cambridge JIPA Burmese* 2014 for `my`; Headley 1977 for `km`; Lhasa Central source for `bo`).
2. Per-cell verification — all 20 Swadesh-style cells reread against the reference; tone/phonation marks normalized.
3. A column-policy decision for the multi-language `id`/`ms`/`tl` group (orthography-only vs. add genuine broad transcription) recorded in `CONTRIBUTING.md` *before* data edits.
4. After rebuild: `meta.reviewStatus: 'source-checked'` + full `meta.sources` + per-cell `wordEvidence.citation` (Audit Task 133).

Rebuilding all five in one session is unrealistic without dedicated source access. Recommended order: `km` (most contained, single standard) → `my` (well-documented Cambridge JIPA reference) → `bo` → `ta`/`te` → `id`/`ms`/`tl` (column policy first). Each is its own commit / session.

---

## Progress notes — Tasks 151-158, 160-163 (2026-05-07)

### Tasks 151-158 — education-readiness features ⚠ multi-session, deferred

These are major feature additions (audio playback, cognate tagging, grammar capsules, sample sentences with Leipzig glossing, IPA tutor, lesson tours, citation export, quiz mode). Each requires substantial:
- Content authoring (audio sourcing, sample-sentence corpus, IPA descriptions, tour commentary in priority UI langs).
- Schema design + validator extensions.
- UI work (modal sections, dialog overlays, side panels).

A single session cannot complete any to "Done when" criteria. Recommended order (per audit's Phase A-D rollup):
- **Phase A (minimum viable teaching):** 151 (audio for 30 priority langs) + 153 (grammar capsules for 30) + 154 (samples for 30).
- **Phase B (historical-linguistics):** 152 (cognate sets).
- **Phase C (guided learning):** 156 (tours) + 158 (quizzes).
- **Phase D (academic adoption):** 155 (IPA tutor) + 157 (citation export).

Each task needs its own dedicated session(s) with content-sourcing time. The audit-doc sections (lines 6066-6612) are already detailed implementation specs.

### Task 160 — IPA-column ASCII A-Z residue ✓ validator added

- Verified `ja_edo.mother` is correct: `okkasaɴ` (small-cap ɴ, U+0274) — not the `okkasaN` ASCII residue the audit reported.
- `zh_tang` (Baxter-Sagart Middle Chinese tone letters X/H) and `och` (Old Chinese Baxter-Sagart `*C.` syllabicism) already have `pronunciationType: 'mixed'` set, which is the audit's recommended Option C.
- New validator check `[#160]`: flags ASCII uppercase A-Z in IPA cells of `'ipa'`-tagged rows. Initial run: zero offenders. The check covers regression risk for future Pass-N cleanups.

### Task 161 — Korean / English historical-stage coordinates ✓ already done

- Verified all stages are at distinct coordinates: `ko_mid` at Kaesong (37.97/126.55), `ko_em` at Suwon area (37.27/127.01), `en_ang` at Winchester (51.06/-1.31), `enm` at Canterbury (51.28/1.08), `en_ck` at Bow (51.53/-0.02). Validator `[#14]` cluster check fires zero warnings on these rows.

### Task 162 — unattested `—` cell documentation ✓ already done

- Validator INFO line confirms: `unattestedReason coverage: 231/231 '—' cells documented`. All `—` cells have a categorized reason.

### Task 163 — affricate tie-bar normalization ✓ validator already in place

- Existing validator check `[#163]` (lines 1121-1151 of validate_wordmap_data.js) flags bare ASCII affricates (`ts`/`dz`/`tʃ`/`dʒ`/`tɕ`/`dʑ`/`tʂ`/`dʐ`) in `'ipa'`-tagged rows. Coverage line: `affricate tie-bar coverage: 214/1920 cells in 'ipa' rows contain U+0361`. Per-cell rebuilds remain opportunistic — not blocking.

---

## Implementation Audit (2026-05-07 part 5) — recently-added language batches

After the 700-language milestone (commit c44ec37) plus 3 uncommitted additions (wae Walser / snk Soninke / dnj Dan), the validator went from 29 → 41 warnings. The increase is *not* a new task category — it is recurring instances of pre-existing tasks (107, 130/201c, 191, 94) firing on each batch. This block names the specific implementation gaps so they can be fixed in the next contributor pass.

### New Task 210. Backfill `scriptTags` on the 9 recently-added languages (Task 130 / 201c instance)

Goal:
The Task 201 [#201c] gate is currently firing on **9 languages** that have no `scriptTags`. Since Phase 1 of Task 201 is WARN (not ERROR), these batches merged anyway — but the warnings will keep firing until each is backfilled. Two of the 9 languages list multiple scripts in their prose `script` field, so simple `['Latin']` is insufficient.

Current issue I checked (2026-05-07 evening validator):

| Lang | Prose `script` | Required `scriptTags` |
|---|---|---|
| `sbp` Sangu | `Latin` | `['Latin']` |
| `vmf` East Franconian | `Latin` | `['Latin']` |
| `myx` Masaaba | `Latin (Lumasaaba orthography...)` | `['Latin']` |
| `tll` Tetela | `Latin (Hagendorens 1956 standard)` | `['Latin']` |
| `mdr` Mandar | `Latin / Lontara (historical)` | `['Latin', 'Lontara']` |
| `meu` Motu | `Latin` | `['Latin']` |
| `wae` Walser (uncommitted) | `Latin` | `['Latin']` |
| `snk` Soninke (uncommitted) | `Latin / N'Ko / Arabic (Ajami)` | `['Latin', 'NKo', 'Arabic']` |
| `dnj` Dan (uncommitted) | `Latin (extensive tone diacritics)` | `['Latin']` |

Files to change:
- `wordmap_meta.js` — add `scriptTags: [...]` to each of the 9 meta blocks.

Implementation instructions:
- Use the canonical script tag tokens that match `lang-filter.js` (e.g., `'Latin'`, `'NKo'`, `'Arabic'`, `'Lontara'`, `'Han'`, `'Hangul'`, `'Devanagari'`, `'Cyrillic'`, etc. — the existing tags).
- For multi-script rows (`mdr` Latin/Lontara, `snk` Latin/N'Ko/Arabic): include all scripts in the array.
- Keep the prose `script` field as is — it's the human-readable display.

Validator / static check:
- After fix: `[#201c]` warnings drop from 9 to 0.

Done when:
- All 9 rows have `scriptTags` populated.

### New Task 211. Resolve count-string drift between header and public metadata (Task 107 regression)

Goal:
The header in `wordmap_data.js` was updated to "703 languages" but 7 public-facing strings still say "700". Same antipattern as Task 134 (cache-buster drift) and Task 198 (`WM_ASSET_VERSION` bump) — the source of truth (header comment) was updated but the public-visible strings were not propagated.

Current issue I checked (2026-05-07 evening):
- `wordmap.html` body text mentions "700 languages".
- `README.md` mentions "700 languages".
- `wordmap.html` `<title>` tag mentions 700.
- `wordmap.html` `<meta name="description">` mentions 700.
- `wordmap.html` `<meta og:description>` mentions 700.
- `wordmap.html` `<meta twitter:description>` mentions 700.
- (1 more occurrence in same file).

Files to change:
- `wordmap.html` — bump 4 strings from 700 to 703.
- `README.md` — bump count.

Implementation instructions:
- Before merging this fix, decide whether to round to a milestone (700) or track exact count (703). The validator's `Audit Task 107` check flags any mismatch, so either approach works as long as the header and public strings agree.
- A reasonable convention: round to the nearest 50 (700, 750, 800, ...) for marketing strings; track exact in the validator. Document in CONTRIBUTING.md.
- Either set the validator to allow rounded milestones (700, 750) or always sync to the exact count.

Validator / static check:
- After fix: 7 count-mismatch warnings drop to 0.

Done when:
- Public count strings agree with the validator's actual language count.
- CONTRIBUTING.md documents the round-to-milestone or track-exactly convention.

### Implementation gaps still open (no new task ID needed)

These are previously-tracked tasks where the user mentioned working on them but the implementation has not landed:

- **Task 207** (lue/cmg formType): 4 warnings still active. Adding `lue: { one: 'agreement-stem', good: 'agreement-stem' }` and `cmg: { eat: 'bound-stem', drink: 'bound-stem' }` to `FORM_TYPE_OVERLAY` closes them.
- **Task 208** (jmc/vai pronunciationType): 2 warnings still active. Setting `jmc.pronunciationType = 'broad'` and `vai.pronunciationType = 'romanization'` closes them.
- **Task 159** (jiv Jivaroan): 1 warning. Add `'Jivaroan'` to the family allow-list in `validate_wordmap_data.js`.
- **Task 200** (source-checked wordEvidence): still 3/29. No progress in this batch.
- **Task 144 / 209** (description i18n): degrading. New langs ship en/ja/ko/zh per Task 201 [#201b] but no other UI langs.

### Data-quality concerns to spot-check

- **`dnj` Dan moon entry**: surface `siŋŋŋ` paired with IPA `siŋːː` uses two consecutive length marks (`ːː`) which is non-standard. Verify whether intent is `siŋː` (long) or `siŋːːː` (extra-long, three length marks) per Erman 2005.
- **Multi-script rows where `scriptTags` doesn't match prose**: when fixing Task 210, ensure the array enumerates every script the prose claims, not just Latin.

### Cumulative validator state (2026-05-07 part 5)

- 703 languages.
- 0 errors.
- 41 warnings (29 baseline + 9 from new langs without scriptTags + 7 count-string drift, with offsetting -2 from elsewhere).
- 52 INFOs.

**Recommended priority for next 30 minutes (~7 minutes total drops warnings 41 → 18):**
1. **Task 210** — add `scriptTags` to 9 langs (~3 min).
2. **Task 211** — bump 7 count strings 700→703 (~2 min).
3. **Task 159** — add `Jivaroan` to allow-list (~30 sec).
4. **Task 207** — add 4 formType entries (~1 min).
5. **Task 208** — set 2 pronunciationType (~30 sec).

---

## Status Sweep follow-up (2026-05-07 part 2)

After Tasks 195 / 189 / 192 landed (validator gates only), 63 new languages were added in parallel, dropping description-i18n coverage and re-opening Tasks 144 / 188 / 191 / 198 / 199 with new instances. The pattern is exactly what Task 197's cross-cutting rules were designed to prevent: language additions outpacing the i18n + tree-update follow-through. The regressions need explicit task entries so the validator gate can be enforced going forward.

### New Task 201. Promote Task 197's cross-cutting rules into validator gates (i18n + tree-update ratio enforcement)

Goal:
The 63-language addition that landed in 2026-05-07 caused description-i18n coverage to drop from 86–91% to 76–91% across 17 UI languages, plus knock-on regressions to disambiguator / formType / pronunciationType coverage. Task 197 explicitly listed these cross-cutting requirements as non-negotiable per language addition, but they remained advisory text. This task converts the rules into validator gates that fire before a batch can be merged.

Current issue I checked (2026-05-07):
- 63 new languages added since 2026-05-06 baseline.
- Description i18n threshold (95%) breached for 17 UI langs; lowest is es_eu/es_mx/pt_eu/pt_br at 76%.
- Each new language added without:
  - description translations in 17 of 21 UI langs
  - disambiguator when sharing native name (suk/smg pair)
  - formType for hyphen-surface cells (ykg/ale/kj cells)
  - pronunciationType when ASCII-only IPA in non-Latin script (gld/kum)
- Result: 38 warnings vs 29 baseline; the warning count grows at ~0.15 per added language.

Files to change:
- `validate_wordmap_data.js` — strengthen existing checks from WARN to ERROR for the cross-cutting rules.
- `CONTRIBUTING.md` — add a "Pre-merge checklist for new languages" section that mirrors the validator gates.
- `.github/workflows/wordmap-validate.yml` (Task 140) — ensure the workflow blocks merges on the new ERRORs.

Implementation instructions:

**Phase 1 — soft gates (this task).**
- Convert the existing per-row warnings into a *batch-level* warning that counts new-language regressions:
  - `[#201a]` if a language is added (compared to `git diff HEAD`'s previous version of `wordmap_data.js`) with `description` not covering all UI langs in `lang_names.js`.
  - `[#201b]` if a new underscore code lacks `parentCode` or `varietyRole`.
  - `[#201c]` if a new row has `script` containing RTL-script keywords without `textDirection: 'rtl'`.
  - `[#201d]` if a new row's `family` token is not in the family allow-list.
  - `[#201e]` if a new row has hyphen-surface cells without `formType`.
  - `[#201f]` if a new row's native name collides with an existing row and `disambiguator` is unset.
- Each per-language regression generates one `[#201x]` warning that lists the offending code.

**Phase 2 — hard gates (post-Task 201 deployment).**
- After Phase 1 stabilizes, promote the gates to ERRORs.
- CI workflow rejects PRs that introduce new-language regressions until i18n + tree-update is complete.

**Step 3 — pre-merge checklist (CONTRIBUTING.md).**
- Document the 11 items from Task 197 as a checkbox list contributors run before submitting a language addition.
- Make the checklist enforceable by reproducing it in the validator's exit message.

Validator / static check:
- `[#201]` regression count line: `Cross-cutting regressions on N new languages this batch`.
- Per-rule sub-warnings: `[#201a]` description i18n, `[#201b]` parentCode, `[#201c]` textDirection, `[#201d]` family allow-list, `[#201e]` formType, `[#201f]` disambiguator.
- Coverage trend INFO line: `i18n coverage delta vs main: yue +N -M, vi +N -M, ...` (positive net = covered; negative = lost ground).

Do not:
- Do not promote to ERROR until contributors have time to use the soft gates. Sudden ERRORs would block all PRs.
- Do not let the gates apply to in-progress branches that pre-date this task. Apply only to commits after deployment date.
- Do not require all 21 UI langs immediately. Use a tiered enforcement: priority UI langs (en/ja/ko/zh) ERROR; secondary UI langs WARN. Rationale: a contributor adding `kru` Kurukh shouldn't need to translate description into Swahili in the same PR.

Done when:
- Validator emits `[#201a–f]` regressions per added language.
- CONTRIBUTING.md "Pre-merge checklist" section exists.
- Phase 1 (soft gates) deployed; Phase 2 (hard gates) scheduled with deadline.
- Description-i18n warning count stops growing per added language.

### New Task 202. Cache-buster drift widened (Task 198 instance)

Goal:
The Task 198 drift between `styles.css?v=N` and `WM_ASSET_VERSION.styles` has widened from `59 vs 54` to `60 vs 54`. The static tag was bumped again without bumping the registry — exactly the regression Task 134 was supposed to prevent.

Current issue I checked:
- `[#19] styles.css?v=60 in wordmap.html doesn't match WM_ASSET_VERSION.styles=54`.
- Drift interval: 6 (was 5 yesterday).

Files to change:
- `wordmap.html` — bump `WM_ASSET_VERSION.styles` to 60.
- Same for any other asset whose static tag exceeds the registry value.

Implementation instructions:
- Run `git diff HEAD~5 -- wordmap.html` to see all `?v=` changes.
- Mirror each into `WM_ASSET_VERSION` keys.
- Add a pre-commit hook that scans for `?v=N` changes without a corresponding registry update.

Validator / static check:
- `[#19]` warning drops to 0 after bump.

Do not:
- Do not lower the static tag to match the registry — that would force browsers to re-cache stale assets.

Done when:
- `[#19]` reports 0 cache-buster drift cases.
- Pre-commit hook prevents future drift.

### New Task 203. Add `itl` Itelmen and `ykg` Northern Yukaghir to `HIST_DESCENDANT` (Task 199 instance)

Goal:
Task 199 named `yuc` and `kgg` as fragmentary languages outside `HIST_DESCENDANT`. The 2026-05-07 status check shows 2 more in the same state: `itl` Itelmen (Chukotko-Kamchatkan, Russia, ~80 fluent) and `ykg` Northern Yukaghir (Yukaghir family, ~50 fluent). Both are recently-added rows tagged `dataStatus: 'fragmentary'` without the era-routing.

Current issue I checked:
- `[#17] itl: DATA_STATUS_OVERRIDES = 'fragmentary' but NOT in HIST_DESCENDANT`.
- `[#17] ykg: DATA_STATUS_OVERRIDES = 'fragmentary' but NOT in HIST_DESCENDANT`.
- Plus the still-open `yuc` and `kgg` from Task 199.

Files to change:
- `wordmap_data.js` `HIST_DESCENDANT` — add 4 rows (itl, ykg, yuc, kgg).

Implementation instructions:
- Both `itl` and `ykg` are language isolates within their families with no living descendants. Use the same self-or-null convention as Task 199's `yuc`/`kgg` resolution.
- Document the convention in `wordmap_data.js` so future additions follow it.

Validator / static check:
- `[#17]` warnings drop to 0 after addition.

Done when:
- All 4 fragmentary-but-unrouted rows added to `HIST_DESCENDANT`.
- `[#17]` reports 0.

### New Task 204. Add `meta.disambiguator` for `suk`/`smg` Kisukuma pair (Task 188 instance)

Goal:
Two newly-added Bantu rows — `suk` Sukuma and `smg` Sumbwa-Kimbu — share the native name `Kisukuma`. Task 188's validator catches this and warns. Need to add `disambiguator` to both.

Current issue I checked:
- `[#188] suk: shares native name "Kisukuma" with smg`.
- `[#188] smg: shares native name "Kisukuma" with suk`.

Files to change:
- `wordmap_meta.js` — add `disambiguator` to both rows (in 4 priority UI langs minimum: en/ja/ko/zh).

Implementation instructions:
- `suk` Sukuma: `disambiguator: { en: '(Sukuma proper, NW Tanzania)', ja: '（スクマ語、タンザニア北西部）', ko: '(수쿠마어, 탄자니아 북서부)', zh: '（苏库马语，坦桑尼亚西北部）' }`.
- `smg` Sumbwa-Kimbu: `disambiguator: { en: '(Sumbwa-Kimbu, west of Lake Victoria)', ja: '（スンブワ・キンブ語、ヴィクトリア湖西岸）', ko: '(숨브와-킴부어, 빅토리아호 서안)', zh: '（松布瓦-金布语，维多利亚湖西岸）' }`.
- Verify the two rows actually share the same Bantu cluster — if they do, document the close relation in `description`.

Validator / static check:
- `[#188]` reports 0 unresolved shared-native pairs after fix.

Done when:
- Both rows have `disambiguator` set.
- Disambiguator coverage tally moves from 6/8 to 8/8.

### New Task 205. Backfill `formType` for `ykg`/`ale`/`kj` hyphen-surface cells (Task 191 instance)

Goal:
Task 191 reported 63/65 formType coverage. After 63 new language additions, the count is 63/73 — 10 new hyphen/star surface cells without `formType`. Specifically: `ykg.eat`, `ykg.drink`, `ale.drink`, `ale.love`, `kj.one`, plus 5 more not enumerated in the validator's truncated list.

Current issue I checked:
- `[#191] ykg.eat: hyphen/star surface "ленди-" without formType`.
- `[#191] ykg.drink: hyphen/star surface "ӧйрэ-" without formType`.
- `[#191] ale.drink: hyphen/star surface "таӈах̆-" without formType`.
- `[#191] ale.love: hyphen/star surface "кидук-" without formType`.
- `[#191] kj.one: hyphen/star surface "-mwe" without formType`.
- `[#191] (5 more)`.

Files to change:
- `wordmap_meta.js` `FORM_TYPE_OVERLAY` (or post-migration static fields) — add the 10 missing cells.

Implementation instructions:
- For Yukaghir `ykg` and Aleut `ale` hyphen-suffix cells: `formType: 'bound-stem'` (verbal stems requiring suffix).
- For Kuanyama `kj` hyphen-prefix `-mwe`: `formType: 'agreement-stem'` (Bantu noun-class agreement marker).
- Consult `FORM_TYPE_OVERLAY` for similar entries (Iranian/Turkic bound stems, Bantu agreement stems) to match conventions.
- For the 5 truncated cells, run validator with verbose mode to enumerate them, then categorize.

Validator / static check:
- `[#191]` count drops from 10 to 0; coverage 73/73.

Done when:
- All 10 cells annotated.
- Coverage tally `formType coverage on hyphen/star cells: 73/73`.

### New Task 206. Set `pronunciationType` for `gld` Nanai and `kum` Kumyk (Task 94 instance)

Goal:
Task 94's romanization-vs-IPA validator caught 2 new rows with non-Latin surface but ASCII-only IPA: `gld` Nanai (Tungusic, Russia) and `kum` Kumyk (Turkic, Russia). Both lack `pronunciationType`, which means the validator can't distinguish "this is intentionally broad transcription" from "the IPA wasn't filled in properly".

Current issue I checked:
- `[#94] 2 unlabeled non-Latin-script rows have ASCII-only IPA — likely romanization. Set meta.pronunciationType. Codes: gld, kum`.

Files to change:
- `wordmap_meta.js` — add `pronunciationType` to both rows.

Implementation instructions:
- Inspect the IPA cells in each row.
- If they use academic romanization conventions (Tungusic/Cyrillic-derived for `gld`, Turkic/Latin-or-Cyrillic-derived for `kum`), set `pronunciationType: 'romanization'`.
- If they're broad phonemic transcriptions, set `'broad'`.
- Pick based on actual content; do not default.

Validator / static check:
- `[#94]` reports 0 unlabeled rows after fix.
- pronunciationType coverage moves from 223/682 to 225/682.

Done when:
- `gld` and `kum` have `pronunciationType` set.
- `[#94]` reports 0.

---

## Cumulative status post-Tasks 195/189/192 deployment (2026-05-07)

**38 warnings (was 29 yesterday):** the increase is mostly Task 144 / 188 / 191 / 94 instances on newly-added languages, not regressions in already-correct rows. Tasks 195/189/192 themselves added 0 warnings — their gates fire only when adoption begins.

**Coverage progress:**
- 619 → 682 languages (+63).
- vitality 619/619 → 682/682.
- reviewStatus 619/619 → 682/682.
- textDirection 36/36 (held; new RTL-script langs picked up correctly).
- multi-word formType 253/253 → 271/271 (held).
- WORD_LIST.label 21/21, definition 21/21 (held).

**Validator gates added by 2026-05-07 commit:**
- `[#195]` legacy/pilot stream-name mixing — currently 0 cells use either, so 0 warnings.
- `[#189]` accessed date enforcement (URL → required, malformed → ERROR, future-dated → ERROR) — currently 0 cells have URLs, so 0 warnings.
- `[#192]` runtime overlay tracker (4/17 migrated; 13 remaining).

**Open task summary updated for 2026-05-07:**
- Validator-warning visible: 144, 173 (now Task 200), 188 (Task 204 instance), 191 (Task 205 instance), 198 (Task 202 instance), 199 (Task 203 instance), 94 (Task 206 instance).
- New batch-level gate task: Task 201 (cross-cutting i18n/tree enforcement).
- Coverage-tally still open: 76/84/99/118/151/166/167/171/177/189/195 follow-throughs.
- Schema follow-up: 165/168/169/182/183/184/185/186/192 continued migration.
- Language additions: Tier 1–3 remaining (chm/tw/tah/ho/en_nz/oto + sign langs/jrb/nmn).
- Educational: 151–158 untouched.
- Roadmap to 1000: Task 197 master plan; Tier 5–13 unstarted (current 682 → goal 1000 = +318).

---

## Status Sweep follow-up (2026-05-07 part 3)

After Tasks 198 / 199 / 203 / 204 / 205 closed and Task 200 partially landed (3/29 source-checked rows now have full wordEvidence), the validator is at 0 errors / 29 warnings / 52 INFOs. Language count rose to 691 (+72 since the 2026-05-06 baseline). Two new instance-class regressions have surfaced from continued language additions: `lue` Luvale formType cells and `jmc`/`vai` pronunciationType. Plus the description-i18n gap (Task 144) is now the largest single warning class and is degrading rather than improving.

### Closed since 2026-05-07 morning sweep

- ✅ Task 198 — cache-buster drift CI gate landed: `WM_VERSION_FLOOR` rollback guard + `WM_VALIDATE_STRICT=1` env + `.githooks/pre-commit` hook + GitHub workflow annotation.
- ✅ Task 199 — `yuc` Yuchi + `kgg` Kusunda added to `HIST_DESCENDANT` (parallel-thread `d9b1aa6` batch).
- ✅ Task 203 — `itl` Itelmen + `ykg` Northern Yukaghir HIST_DESCENDANT entries (resolved together with Task 199).
- ✅ Task 204 — `suk`/`smg` Kisukuma disambiguator: 8/8 shared-native pairs covered (was 6/8).
- ✅ Task 205 — partial: 5/10 hyphen/star formType cells closed; 4 remain (lue×2, cmg×2 — see Task 207).
- ⚠️ Task 200 — 3/29 source-checked wordEvidence rows now full (was 0/29). nv plus 2 others.

### New Task 207. Backfill `formType` for `lue` Luvale and `cmg` Khalkha-Mongolian (Task 191/205 follow-up)

Goal:
After Task 205 closed 6 of 10 hyphen-surface formType gaps, 4 remain. Two are previously-known `cmg` Khalkha-Mongolian cells; two are newly-introduced `lue` Luvale Bantu agreement-stem cells. Both languages are in the recently-added Tier-4-style batch.

Current issue I checked (2026-05-07 evening validator output):
- `[#191] lue.one: hyphen/star surface "-mwe" without formType`.
- `[#191] lue.good: hyphen/star surface "-mwaza" without formType`.
- `[#191] cmg.eat: hyphen/star surface "ᠢᠳᠡ-" without formType`.
- `[#191] cmg.drink: hyphen/star surface "ᠤᠭᠤ-" without formType`.

Files to change:
- `wordmap_meta.js` `FORM_TYPE_OVERLAY` (or post-Task-192 static fields).

Implementation instructions:
- `lue.one` (-mwe), `lue.good` (-mwaza): Bantu noun-class agreement prefix → `formType: 'agreement-stem'`. Same convention as `kj.one` resolved in Task 205. The leading hyphen marks where the noun-class concord prefix attaches.
- `cmg.eat` (ᠢᠳᠡ-), `cmg.drink` (ᠤᠭᠤ-): Mongolian verbal stems requiring suffix → `formType: 'bound-stem'`. Same convention as Iranian/Turkic bound stems already in the overlay.

Validator / static check:
- After fix: `formType coverage on hyphen/star cells: 73/73`.
- `[#191]` warnings drop to 0.

Done when:
- All 4 cells annotated.
- Coverage tally complete.

### New Task 208. Set `pronunciationType` for `jmc` Machame and `vai` Vai (Task 94/206 follow-up)

Goal:
After Task 206 closed `gld` Nanai and `kum` Kumyk, two new entrants — `jmc` Machame (Chaga Bantu, Tanzania) and `vai` Vai (Mande, Liberia, with indigenous syllabary) — trip the same `[#94]` validator. Each has non-Latin or extended-Latin surface but ASCII-only IPA, and the validator can't tell whether the IPA is intentionally broad / romanization or unfilled.

Current issue I checked:
- `[#94] 2 unlabeled non-Latin-script rows have ASCII-only IPA — likely romanization. Codes: jmc, vai`.

Files to change:
- `wordmap_meta.js` — add `pronunciationType` to both rows.

Implementation instructions:
- `vai` Vai: surface uses Vai syllabary (e.g., ꕢ ꕞ ꔉ ...) but IPA cells are ASCII Latin. Set `pronunciationType: 'romanization'`.
- `jmc` Machame: Bantu Latin orthography may include extended characters (ɛ, ɔ); IPA cells need inspection. If broad transcription, `'broad'`; if a phonemic-orthography copy, `'orthography'`.
- Pick based on actual cell content; do not default.

Validator / static check:
- `[#94]` reports 0 unlabeled rows.
- pronunciationType coverage moves from 223/691 to 225/691.

Done when:
- Both rows have `pronunciationType` set.

### Cumulative status after 2026-05-07 part 3

**Validator state:**
- 691 languages (+72 since 2026-05-06 baseline; +9 since this morning's status check).
- 0 errors, 29 warnings, 52 INFOs.

**Tasks closed in 24 hours:** 198, 199, 203, 204, plus Task 205 (5/10 cells), Task 200 (3/29 rows). Net: 4 tasks fully closed, 2 partially.

**Still-blocking warnings (29 total):**
- 17 description-i18n threshold breaches (Task 144) — *this category alone is now 59% of all warnings and degrading*.
- 4 formType cells (Task 207 above).
- 5 source-checked rows enumerated + 21 elided (Task 200).
- 2 pronunciationType (Task 208 above).
- 1 family allow-list token (`jiv` Jivaroan; needs `lang-filter.js` curated taxonomy update per Task 159).

**Coverage trends:**
- Description i18n 86%→78% in core UI langs, 76%→75% in es/pt regional. Trend is *negative* — language additions are outpacing translation backfill.
- wordEvidence cell coverage: 543 → 629 cells annotated (+86 / +16%).
- pronunciationType coverage: 223/691 (32%; absolute count flat, ratio dropping due to denominator growth).
- locationBasis: 170/691 (25%; same flat-count problem).
- surfaceType: 472/691 (68%; same).
- languageKind: 102/691 (15%; same).

**Critical observation: Task 201 must land soon.**
- The "Tier 4-style language additions without i18n/tree-update follow-through" pattern that Task 201 was created to gate is now actively degrading coverage ratios. Without the soft-gate validator check, every new batch widens the description-i18n gap.
- Recommendation: deploy Task 201 Phase 1 (soft gates / WARN level) before the next language batch lands. The gate doesn't block additions — it lights up the regressions inline so the contributor can fix them in the same PR.

**Open task table (Tasks 200–208 + ongoing):**

| Task | Status | Notes |
|---|---|---|
| 144 | open, *worsening* | 17 UI langs × 110–169 missing codes/UI |
| 151–158 | not started | educational tasks (audio, cognate, grammar capsule, samples, IPA tutor, tours, citation, quiz) |
| 165 | open | `meta.script` 277 distinct strings |
| 166 | open | `officialStatus` 0/691 |
| 167 | open | `speakers` numeric structure 0/691 |
| 168 | open | 16 multi-line declarations |
| 169 | open | 147 surface=IPA cells (slightly grown with new langs) |
| 171 | open | speakerYear 72/691 (10%) |
| 173/200 | partial | 3/29 source-checked rows full |
| 177 | open | glottocode 28/691 (4%) |
| 182 | open | aliases runtime → static |
| 183/184/185/186 | open | atom translator coverage |
| 189 | gate landed | 0 cells with URLs yet |
| 192 | partial | 4/17 runtime overlays migrated |
| 195 | gate landed | 0 cells use split or pilot |
| 196 (Tier 4) | not formally started | 21 langs proposed |
| 197 (Tier 5–13 to 1000) | not started | 318 langs |
| 201 | not started, *urgent* | cross-cutting gate validator |
| 207, 208 | new this part | small instance backfills |

**Recommended next actions in priority order:**
1. **Task 201 Phase 1** — deploy soft gates ASAP to stop description-i18n degradation per added batch.
2. **Task 144 backfill in tandem with Task 201** — translate the ~169 missing description entries for es/pt/it (where the gap is widest); this single action recovers the largest warning class.
3. **Task 207, 208** — small mechanical backfills, ~10 minutes each.
4. **Task 200** — continue source-checked wordEvidence backfill from 3/29 toward 29/29.
5. **Task 159** — add Jivaroan to the family allow-list.

---

## Status Sweep follow-up (2026-05-07 part 4)

After Tasks 201–206 cleanup commit landed and 3 more languages were added (691 → 694), the validator state is stable at 0 errors / 29 warnings / 52 INFOs — the same numbers as the part-3 sweep. **Task 201's per-batch gate is now in place and operational, but the description-i18n gap (Task 144) continues to widen** because Task 201's `[#201b]` rule only enforces priority 4 UI langs (en/ja/ko/zh), not the full 21. New languages pass the gate while still failing the 95% threshold for the other 17 UI langs.

### Closed since 2026-05-07 part 3

- ✅ Task 201 — per-batch gate validator deployed: `[#201a–f]` sub-checks, `WM_BASE_REF`/`WM_BATCH_GATE` env knobs, CI workflow with `fetch-depth=0`, CONTRIBUTING.md M section.
- ✅ Task 202 — cache-buster drift cleared (already done in this morning's user batch but re-confirmed).
- ✅ Task 203 — itl/ykg HIST_DESCENDANT entries (already in tree, re-confirmed).
- ✅ Task 204 — suk/smg disambiguator (already done, re-confirmed).
- ✅ Task 206 — gld/kum pronunciationType (already done, re-confirmed).
- ⚠️ Task 205 — partial: 6 of 10 cells closed; 4 remaining cells now scoped under Task 207.
- ⚠️ Task 200 — stalled at 3/29 source-checked rows. No additional rows added wordEvidence in this commit cycle.

### New Task 209. Description-i18n Phase B — backfill the 17 secondary UI langs for the existing 694 rows (Task 144 / 201 follow-through)

Goal:
Task 201's per-batch gate enforces description-multilingual-object (`[#201b]`) for priority 4 UI langs (en/ja/ko/zh) when a new language is added. It does NOT enforce coverage in the other 17 UI langs (`yue, vi, th, id, hi, de, fr, it, es_eu, es_mx, pt_eu, pt_br, ru, uk, ar, he, sw`). Because of this asymmetry, every new-language batch passes Task 201's gate but breaches Task 144's 95% threshold for the secondary 17 UI langs. Net result: description-i18n warnings widen monotonically with each language batch.

This task closes the gap by extending the gate AND backfilling the existing data.

Current issue I checked (2026-05-07 evening):
- Per-UI description coverage:
  - es_eu/es_mx/pt_eu/pt_br: 74% (517/694) — **172 codes missing per UI**.
  - ru: 79% (548/694) — 141 missing.
  - de/fr: 83% (576/694) — 113 missing.
  - yue/vi/th/id/hi/it/uk/ar/he/sw: 78% (540/694) — 149 missing.
- Trend over 24 hours:
  - es/pt: 89% → 82% → 76% → **74%** (degrading -15 points).
  - de/fr: 91% → 91% → 84% → **83%** (degrading -8 points).
  - yue/vi/th/id/hi: 93% → 86% → 79% → **78%** (degrading -15 points).
- Each new-language batch adds 3-6 codes that are missing in 17 UI langs simultaneously; the cumulative gap is now **172 × 4 + 149 × 10 + 141 + 113 × 2 = 2,937 missing description translations** across the 17 UI langs.
- The Task 201 gate's `[#201b]` would catch this if extended, but currently it does not.

Files to change:
- `meta_i18n_coverage.js` and/or `wordmap_meta.js` — add description translations for the 172 most-missing codes in es_eu/es_mx/pt_eu/pt_br first (one translation lands in 4 UI langs simultaneously since es_eu==es_mx and pt_eu==pt_br at the description level).
- `validate_wordmap_data.js` — extend `[#201b]` to a tiered enforcement:
  - `[#201b1]` priority 4 UI langs (en/ja/ko/zh) ERROR (already in place).
  - `[#201b2]` widely-used 7 UI langs (de/fr/es_eu/pt_br/ru/zh/it) WARN (extend).
  - `[#201b3]` remaining 14 UI langs (yue/vi/th/id/hi/uk/ar/he/sw/es_mx/pt_eu) INFO only.
- `CONTRIBUTING.md` M — document the tiered enforcement.

Implementation instructions:

**Phase B1 — Spanish/Portuguese batch (largest gap, lowest cost).**
- 172 codes missing × 1 translation each (Spanish), shared across es_eu/es_mx → covers 4 UI lang slots.
- Same for Portuguese: 172 codes × 1 translation, shared across pt_eu/pt_br.
- Effort: ~250 codes × 30 seconds each = ~2 hours total per language family.
- Net warning reduction: 4 warnings (es_eu, es_mx, pt_eu, pt_br) cleared.

**Phase B2 — German/French batch.**
- 113 codes missing each.
- Effort: ~2 hours.
- Net warning reduction: 2 warnings cleared.

**Phase B3 — Russian batch.**
- 141 codes missing.
- Effort: ~1.5 hours.
- Net warning reduction: 1 warning cleared.

**Phase B4 — Italian batch.**
- 149 codes missing.
- Effort: ~1.5 hours.
- Net warning reduction: 1 warning cleared (it).

**Phase B5 — Asian batch (yue/vi/th/id/hi/uk).**
- 6 UI langs × 149 codes each = 894 translation units. The widest gap.
- Effort: ~10-15 hours total.
- Net warning reduction: 6 warnings cleared.

**Phase B6 — Remaining (ar/he/sw).**
- 3 UI langs × 149 codes = 447 translation units.
- Effort: ~5 hours.
- Net warning reduction: 3 warnings cleared.

**Phase B7 — Validator extension.**
- Promote `[#201b2]` to WARN-on-each-UI-lang-coverage so future PRs cannot land without at least de/fr/es/pt translations.
- Add INFO `[#201b3]` showing per-UI-lang coverage breakdown so the gap is visible per PR.

**Total effort estimate:** 18-23 hours across 7 phases. Phase B1 alone clears 4 warnings (out of 17 description-i18n warnings).

Validator / static check:
- `[#13b']` warning count drops from 17 toward 0 as each phase lands.
- New `[#201b2]`/`[#201b3]` checks fire on PR but do not block merges (Phase 1 = WARN/INFO).

Do not:
- Do not bulk-machine-translate without review. Description text contains technical terminology (`agglutinative`, `ergative`, script names) that MT routinely mistranslates.
- Do not skip the regional Spanish/Portuguese splits. `es_eu` ≠ `es_mx` for translation overhead but the same source material covers both.
- Do not gate Phase B1 (the lowest-cost / highest-impact phase) behind Phase B7 (validator extension). Run them in parallel.
- Do not let new-language batches outpace the backfill. Coordinate with the contributor adding new languages so the description translation lands in the same PR.

Done when:
- All 17 description-i18n warnings are at 95% or higher.
- Per-UI coverage tally shows <= 35 missing codes per UI lang (the rough threshold for a stable 95% on a 700-row dataset).
- Validator `[#201b2]`/`[#201b3]` extensions deployed and CONTRIBUTING.md M updated.
- Description i18n trend reverses: previously degrading -15 points/24h, target +15 points/24h.

### Cumulative status after part 4 (2026-05-07 evening)

**Open warning categories (29 total):**
- Task 144/209 description-i18n: **17 warnings** (59% of all warnings, **degrading**).
- Task 200 source-checked wordEvidence: **5 enumerated + 21 elided** (stalled at 3/29 done).
- Task 207 hyphen-surface formType: **4 warnings** (lue×2, cmg×2).
- Task 208 pronunciationType: **2 warnings** (jmc, vai).
- Task 159 family allow-list: **1 warning** (jiv Jivaroan).

**Coverage trends (last 24-48 hours):**
- Languages: 619 → 682 → 691 → 694 (+75 since 2026-05-06 baseline).
- wordEvidence cells: 543 → 629 (+86, mostly from the user's nv-batch backfill in Task 200).
- pronunciationType: 223/619 (36%) → 223/694 (32%) — **flat absolute count, ratio dropping**.
- locationBasis: 170/619 (27%) → 170/694 (24%) — same.
- surfaceType: 472/619 (76%) → 472/694 (68%) — same.
- languageKind: 102/619 (16%) → 102/694 (15%) — same.

**Critical observation: backfill bottleneck on Tier 4-style additions.**
- 75 language additions in 48 hours have outpaced every single coverage backfill except wordEvidence (which got a one-off batch).
- `pronunciationType`/`locationBasis`/`surfaceType`/`languageKind` ratios are dropping not because old data is being lost, but because new languages arrive without these fields set.
- Task 201's gate addresses *priority* fields (description, scriptTags, parentCode, family, disambiguator). Task 209 above extends to description i18n. **Similar tasks may be needed for pronunciationType/locationBasis/surfaceType/languageKind** if the goal is to maintain >50% coverage on those.

**Recommended priority order for next 24 hours:**
1. **Task 207** — 4 cells × 30 seconds = 2 minutes work. Fastest single warning reduction.
2. **Task 208** — 2 langs × 30 seconds = 1 minute. Same.
3. **Task 159** — 1 family token added to allow-list. ~30 seconds.
4. **Task 209 Phase B1** — Spanish/Portuguese description translations. Highest-impact (4 warnings cleared, ~2-4 hours).
5. **Task 200 batch** — backfill 5 more source-checked rows. Cumulative: 8/29 → 13/29 progress.
6. (Then) **Task 209 Phase B2-B7** — full description-i18n catch-up across remaining 13 UI langs.

If steps 1-3 are completed first (~5 minutes total), the warning count drops from 29 → 22 immediately. Step 4 drops it to 18.

---

## Status Sweep (2026-05-07 part 6) — first ERRORs since the audit started

After Tasks 198/199/200/201/202/203/204/206/210 cleanup landed, the language count grew 706→712 (+6 in two more batches). For the first time since this audit began, the validator emits **3 ERRORs** instead of warnings only — three new languages were added to `wordmap_data.js` without corresponding meta blocks in `wordmap_meta.js`. Plus Task 211's count-drift problem reappears at a wider gap (709 → 712, drift = 3). And a new Task 130 enum-violation pattern emerged: contributors used non-allow-list script tag names ("Tamil", "Devanagari") that should map to "Brahmic" per the schema.

### New Task 212. Resolve the 3 newly-added languages with no meta entry (rkt / jpr / umu)

Goal:
The validator now emits **`✗ ERROR`** for three rows added to `wordmap_data.js` without a corresponding `LANG_DATA['xxx'].meta = {…}` block in `wordmap_meta.js`. This is the most severe data integrity issue surfaced by the audit so far — without meta, the row has no family, speakers, script, description, or any of the structured fields. The era-toggle filter, modal display, and all i18n machinery break for these rows.

Current issue I checked (2026-05-07 evening, post-712-langs commit):
- `✗ rkt: no meta entry` (Rangpuri / Kamta — Indo-Aryan, Bangladesh / India NW frontier)
- `✗ jpr: no meta entry` (Judeo-Persian — Iranian, Jewish diaspora)
- `✗ umu: no meta entry` (Munsee — Eastern Algonquian, Eastern Canada / NE USA)

This is the first ERROR-level finding since the audit began. Task 201's per-batch gate has sub-checks `[#201a–f]` for description i18n, scriptTags, varietyRole, family, formType, disambiguator — but **does not have a `[#201g]` or `[#201h]` for "meta block exists at all"**. The 3 rows passed the gate because the existing checks short-circuit when `m` (the meta object) is undefined.

Files to change:
- `wordmap_meta.js` — add `LANG_DATA['rkt'].meta = { … }`, `LANG_DATA['jpr'].meta = { … }`, `LANG_DATA['umu'].meta = { … }` blocks with full required fields per Task 197 cross-cutting rules.
- `validate_wordmap_data.js` — add a new `[#201g]` check in the per-batch gate that flags new LANG_DATA entries without corresponding meta blocks. Promote to ERROR (not just WARN) immediately; this is too severe to gate softly.
- `lang_names.js` — add 21-UI-section entries for each of the 3 codes.

Implementation instructions (per language):

**`rkt` Rangpuri / Kamta:**
- Family: `'Indo-Aryan (Eastern, Bengali-Assamese)'` or `'Indo-Aryan (Eastern, Kamta)'`.
- Speakers: ~15M.
- Countries: Bangladesh (Rangpur Division), India (West Bengal — Cooch Behar, Jalpaiguri).
- Script: `'Bengali'` (Eastern Brahmic). scriptTags: `['Brahmic']`.
- Sources: Glottolog, Ethnologue, Toulmin (2009) "From linguistic to sociolinguistic reconstruction: the Kamta historical subgroup of Indo-Aryan".

**`jpr` Judeo-Persian:**
- Family: `'Indo-European (Iranian, Persian)'`.
- Speakers: ~10K (mostly Israel; Iran communities largely emigrated).
- Countries: Israel, Iran (residual), USA (diaspora).
- Script: `'Hebrew'` (historically), `'Persian (Perso-Arabic)'`. scriptTags: `['Hebrew', 'Arabic-derived']`.
- Sources: Glottolog, Ethnologue, Lazard (1968) "La dialectologie du judéo-persan", Borjian.

**`umu` Munsee:**
- Family: `'Algic (Algonquian, Eastern, Lenape)'`.
- Speakers: ~7 fluent (revitalization underway).
- Countries: Canada (Ontario — Munsee-Delaware Nation), USA (historical; effectively extinct in NE).
- Script: `'Latin'` (Sandbox-style Algonquian orthography). scriptTags: `['Latin']`.
- vitality: `'critically-endangered'`.
- Sources: Glottolog, Ethnologue, Goddard (1979) "Delaware Verbal Morphology", Munsee Language Project.

Validator / static check:
- New `[#201g]`: row in `LANG_DATA` without `meta` block → ERROR (not WARN). Promote to ERROR immediately because the gap is too severe.
- After fix: ERRORS drops from 3 → 0.

Done when:
- All 3 codes have full meta blocks with description (en/ja/ko/zh), scriptTags, sources.
- All 3 codes have entries in all 21 UI sections of `lang_names.js`.
- `[#201g]` validator check is in place and ERRORs on future omissions.
- `node validate_wordmap_data.js` PASSes (0 errors).

### New Task 213. Document the script-tag enum mapping for non-Latin Indic scripts (Task 130 / 210 follow-up)

Goal:
Two recently-added languages used `scriptTags` values that aren't in the schema enum: `iru` Irula has `'Tamil'` and `tdh` Thulung has `'Devanagari'`. The intended canonical token for any Brahmi-derived Indic script in this project's taxonomy is `'Brahmic'` (per the enum at `validate_wordmap_data.js:376`). Contributors don't know this — there's no docs explaining that Tamil / Devanagari / Bengali / Kannada / Malayalam / Gujarati / Telugu / Oriya all map to `'Brahmic'`.

Current issue I checked:
- `[#13l] iru: meta.scriptTags entry "Tamil" not in enum (Audit Task 130)`.
- `[#13l] tdh: meta.scriptTags entry "Devanagari" not in enum (Audit Task 130)`.
- The enum has `'Brahmic'` covering all Indic / SE Asian Brahmi-derived scripts, but no contributor-facing documentation says so.

Files to change:
- `wordmap_meta.js` — fix the 2 violations: `iru` `'Tamil'` → `'Brahmic'`, `tdh` `'Devanagari'` → `'Brahmic'`.
- `CONTRIBUTING.md` — add a "Script tag enum mapping" subsection under Task 130 docs:
  - `'Brahmic'` covers: Devanagari, Bengali, Tamil, Telugu, Kannada, Malayalam, Gujarati, Oriya, Sinhala, Tibetan, Burmese, Thai, Lao, Khmer, Lontara, Tai Viet, etc. (all Brahmi-derived).
  - `'Han'` covers: Simplified, Traditional Chinese; Japanese kanji.
  - `'Kana'` covers: Hiragana, Katakana.
  - `'Arabic-derived'` covers: Arabic, Perso-Arabic, Urdu, Pashto, Sindhi, Sindhi (Naskh), Saraiki, Hindko, Pegon (historical Indonesian), Jawi (historical Malay).
  - Note that the prose `script` field can be more specific (`'Tamil / Latin'` for human display); `scriptTags` is the structured filter array.
- Optional: extend the `[#13l]` validator error message to suggest the canonical mapping (e.g., `"Tamil" → did you mean "Brahmic"?`).

Implementation instructions:
- Phase 1: fix the 2 violations.
- Phase 2: add CONTRIBUTING.md subsection.
- Phase 3: extend validator error message with mapping suggestion.

Validator / static check:
- After fix: `[#13l]` warnings drop to 0.
- INFO line `Script tag adoption: N langs use Brahmic, M use Latin, ...` already in INFOs but could be bolstered.

Do not:
- Do not add `'Tamil'` / `'Devanagari'` / etc. to the enum. The whole point of `'Brahmic'` is to provide a single filter chip for "Brahmi-derived scripts" — splitting into per-script chips would multiply the filter UI without adding value.
- Do not lose the prose `script` info. `script: 'Tamil / Latin'` stays for display; only `scriptTags` is constrained to the enum.

Done when:
- iru and tdh `scriptTags` use `['Brahmic', 'Latin']` and `['Brahmic']` respectively.
- CONTRIBUTING.md "Script tag enum mapping" subsection exists.
- Validator `[#13l]` reports 0 violations.

### New Task 214. Auto-bump count strings to prevent Task 211 recurrence

Goal:
Task 107 (count-string drift) keeps recurring. Within 24 hours we've seen drift at 700→703, 700→706, 709→712. Each time, only the `wordmap_data.js` header is updated; the 4 strings in `wordmap.html` and the README count are missed. The recurrence pattern means the manual-update approach isn't sustainable.

Current issue I checked:
- Each language batch adds 3 langs but only the contributor's `wordmap_data.js` header is updated.
- Validator's `[#107]` flags the drift but does not block, so the discrepancy ships.
- 7 warnings every batch (4 wordmap.html + 1 README + 2 OG/Twitter) until someone manually bumps.

Files to change:
- New file: `scripts/bump_count.js` — reads the current language count from `wordmap_data.js` and updates the 7 known count-string locations.
- `.githooks/pre-commit` — run `scripts/bump_count.js --check` and abort the commit if the count strings are stale; suggest running `scripts/bump_count.js --fix` to auto-bump.
- `.github/workflows/wordmap-validate.yml` — add a `count-string-sync` job that runs `--check` and surfaces drift as a CI annotation.
- `validate_wordmap_data.js` — `[#107]` check stays as-is, but reference the auto-bump script in the warning message.
- `CONTRIBUTING.md` — document the bump script.

Implementation instructions:
- The script enumerates known count-string locations:
  - `wordmap.html` body text.
  - `wordmap.html` `<title>`.
  - `wordmap.html` `<meta name="description">`.
  - `wordmap.html` `<meta og:description>`.
  - `wordmap.html` `<meta twitter:description>`.
  - `README.md`.
- Source of truth: the actual count from `validate_wordmap_data.js`'s row enumeration (or `wordmap_data.js` header comment, with the script verifying they match).
- `--check` mode: exit 1 if any drift detected, print which file/line.
- `--fix` mode: rewrite all 7 locations to match the source of truth.

Validator / static check:
- New CI job rejects PRs that introduce count-string drift unless `--fix` is run.

Do not:
- Do not auto-fix in `validate_wordmap_data.js` itself. Validators read; they don't write. The fix script is a separate tool.
- Do not skip the README. It's the most-visible public artifact.

Done when:
- `scripts/bump_count.js` exists and works in `--check` and `--fix` modes.
- Pre-commit hook runs `--check` and blocks with a helpful suggestion.
- CI `count-string-sync` job surfaces drift as annotation.
- `[#107]` warnings drop to 0 and stay at 0 across subsequent batches.
- CONTRIBUTING.md documents the script.

### Cumulative validator state after part 6

- 712 languages.
- **3 ERRORs** (rkt, jpr, umu missing meta) — first ERROR-level findings since audit began.
- 54 WARNINGS (16 description-i18n + 7 count drift + 10 formType + 2 scriptTags-enum + 5+21 source-checked + 2 pronunciationType + 1 family allow-list).
- FAIL status (because of the 3 ERRORs).

**Recommended priority for next 30 minutes:**
1. **Task 212** — add 3 meta blocks for rkt/jpr/umu + 21 UI sections each. Most severe; FAIL → PASS.
2. **Task 213 Phase 1** — fix iru/tdh scriptTags. ~30 sec.
3. **Task 211 Phase 1** — bump 7 count strings 709→712. ~2 min. Or skip if Task 214 is implemented immediately.
4. **Task 207 / 208 / 159** — formType + pronunciationType + family allow-list backfills. ~3 min total.
5. **Task 214** — auto-bump infrastructure. ~30 min, prevents future recurrence.

---

## Filter Bug Audit (2026-05-07 part 7) — Tibetan-script languages split across filter chips

User reported: "Tibetan script で書かれた言語が 2 言語以上あるのに、フィルターには 1 つしか出てこない" (2+ languages use Tibetan script, but the filter shows only 1).

Investigation confirmed three concurrent issues that make Tibetan-script languages appear under-represented in the filter UI:

### New Task 215. Resolve filter taxonomy fragmentation that hides Tibetan-script (and similarly-grouped) languages

Goal:
Three languages — `bo` Tibetan, `khg` Khams Tibetan, `dz` Dzongkha — all use Tibetan script and all share the Bodish sub-branch of Sino-Tibetan. Yet the filter UI splits them across chips so a user looking for "Tibetan script" or "Tibetan-language family" sees inconsistent counts (1 in some chips, 2 in others, never all 3 in a single coherent grouping). The same antipattern likely affects other language clusters with mixed-specificity family strings.

Current issue I checked (2026-05-07 evening):

**1. `'Tibetan'` is not a script-tag enum value.**
- `validate_wordmap_data.js:376` `SCRIPT_TAG_ENUM`: 32 values including `'Brahmic'` but NO `'Tibetan'`.
- `lang-filter.js:436` `detectScript()`: collapses `'Tibetan'` into `'Brahmic'` along with Devanagari, Bengali, Tamil, Telugu, Kannada, Malayalam, Burmese, Khmer, Thai, Lao, etc. — ~100+ languages all under one chip.
- Result: a user searching the Script filter for Tibetan-script langs has no specific chip; the Brahmic chip is too broad to be useful.

**2. Family-string fragmentation splits the Bodish cluster.**
- `bo` family: `'Sino-Tibetan (Tibeto-Burman, Bodish)'`.
- `dz` family: `'Sino-Tibetan (Tibeto-Burman, Bodish)'`.
- `khg` family: `'Sino-Tibetan (Tibeto-Burman, Bodish, Tibetic, Eastern)'` — over-specific string.
- The family filter generates one chip per exact-match family string, so the user sees `'Sino-Tibetan (Tibeto-Burman, Bodish)'` chip with 2 langs (bo+dz) and `'Sino-Tibetan (Tibeto-Burman, Bodish, Tibetic, Eastern)'` chip with 1 lang (khg) — instead of one Bodish bucket with 3.

**3. `'Tibetic'` is missing from `SUBBRANCH_TOKENS`.**
- `lang-filter.js:629-647` `SUBBRANCH_TOKENS` has `'Bodish'` but not `'Tibetic'` (despite the latter being a real Tibeto-Burman sub-branch label widely used in Glottolog).
- Even if `expandFamilies()` is called, `'Tibetic'` from khg's family is dropped during sub-branch extraction.

Files to change:
- `validate_wordmap_data.js` — extend `SCRIPT_TAG_ENUM` to include `'Tibetan'` as a separate tag (NOT replacement for `'Brahmic'`; both can coexist — Tibetan-script langs would have `scriptTags: ['Tibetan']` AND optionally `'Brahmic'` if the project decides Tibetan-is-a-Brahmi descendant logically belongs to both).
- `lang-filter.js:436` `detectScript()` — split the regex so `Tibetan` matches **before** the catch-all Brahmic regex, with its own `tags.add('Tibetan')`.
- `wordmap_meta.js` — set `scriptTags: ['Tibetan']` on `bo`, `khg`, `dz`.
- `wordmap_meta.js` — normalize `khg.family` from `'Sino-Tibetan (Tibeto-Burman, Bodish, Tibetic, Eastern)'` to `'Sino-Tibetan (Tibeto-Burman, Bodish)'` to match `bo`/`dz`. The "Tibetic, Eastern" detail is preserved in the prose `description` already.
- `lang-filter.js:629` `SUBBRANCH_TOKENS` — add `'Tibetic'` for forward compatibility.
- `CONTRIBUTING.md` — document the script-tag enum extension and the family-string normalization rule.

Implementation instructions:

**Decision needed first: split-by-script vs. split-by-language-cluster.**

The user's reasonable expectation is that "Tibetan" appears as a discrete filter dimension. Two ways to deliver:

- **Option A — script-tag split (recommended):** Add `'Tibetan'` to `SCRIPT_TAG_ENUM`. Clicking "Tibetan" script chip shows all 3 languages. Brahmic still exists as the broader umbrella. This matches user mental model: "show me languages that use the Tibetan writing system."
- **Option B — family-string normalization only:** Keep the script taxonomy as-is, but normalize `khg.family` so all 3 Bodish langs share the same family chip. Then user filters by family "Bodish" and sees 3 langs.
- **Option C — both:** Apply Option A and Option B together. Best UX, slightly more work.

Recommend **Option C**.

**Phase 1: script-tag split.**
- Add `'Tibetan'` to `SCRIPT_TAG_ENUM` in `validate_wordmap_data.js`.
- In `lang-filter.js:detectScript()`: add a new specific branch BEFORE the Brahmic catch-all:
  ```js
  if (/\bTibetan\b/.test(s)) tags.add('Tibetan');
  ```
  And keep the Brahmic regex as fallback (so Tibetan-script langs end up tagged with both `'Tibetan'` AND `'Brahmic'` if the project policy is overlap; or remove "Tibetan" from the Brahmic regex if mutual exclusion is preferred). Recommend overlap.
- Set `meta.scriptTags = ['Tibetan']` on bo/khg/dz to make the static value authoritative.

**Phase 2: family-string normalization.**
- Change `khg.family` to `'Sino-Tibetan (Tibeto-Burman, Bodish)'` so it matches bo and dz.
- Move the "Tibetic, Eastern" sub-branch detail to `description` if not already there.
- Re-run validator to confirm all 3 Bodish langs share the same family chip.

**Phase 3: SUBBRANCH_TOKENS extension.**
- Add `'Tibetic'` to `SUBBRANCH_TOKENS` so future rows that legitimately need the more-specific label still expand correctly.

**Phase 4: documentation.**
- CONTRIBUTING.md: document the script-tag enum (with `'Tibetan'` now distinct from `'Brahmic'`) and the family-string convention (sub-branch detail goes in description, not in family string, to avoid chip fragmentation).

Validator / static check:
- After fix: `bo`, `khg`, `dz` all surface under the same family chip (Bodish or `'Sino-Tibetan (Tibeto-Burman, Bodish)'`).
- After fix: all 3 surface under a new `'Tibetan'` script chip.
- New validator check `[#215]`: warn if a language's family string contains `Bodish` or `Tibetic` but the row is missing the standard Bodish-cluster expansion. (Optional — pattern-specific check.)

Do not:
- Do not delete `'Brahmic'` as a script chip. It serves the umbrella-Brahmi role for users searching for Brahmi-derived scripts collectively. Add `'Tibetan'` as an additional fine-grained chip.
- Do not flatten `khg`'s family by deleting "Tibetic, Eastern" — preserve the linguistic detail in `description`.
- Do not bundle this with other script-tag additions (e.g., adding 'Devanagari', 'Tamil', 'Bengali' as separate chips). The 'Brahmic' umbrella is intentional for the Indic continental cluster; Tibetan is geographically and culturally distinct enough to deserve its own chip while still being a Brahmi descendant.

Done when:
- `meta.scriptTags = ['Tibetan']` set on bo/khg/dz (plus optionally `'Brahmic'` if project policy is overlap).
- Filter UI shows a `'Tibetan'` script chip with count = 3.
- Family chip for Bodish/Tibetan-cluster shows count = 3 (no fragmentation).
- `'Tibetic'` added to `SUBBRANCH_TOKENS` for forward compatibility.
- CONTRIBUTING.md documents the script-tag policy and family-string normalization rule.

### Why this matters beyond the 3 Tibetan languages

The same antipattern (over-specific family strings creating singleton chips) likely affects:
- **Tibetic varieties** (bo / khg / dz / `adx` Amdo if present / `dre` Dolpo / `loy` Loke if added in future Tier 11) — could split into 4+ singleton chips if each gets a unique family string.
- **Mongolic varieties** (`mn` Khalkha, `mvf` Mongghul, `xal` Kalmyk, `bxr` Buryat, `xng` Middle Mongol, `cmg` Classical) — each might have its own family string.
- **Bantu sub-branches** (E40, E50, F, G, J, L, M, N, R) — Task 159 partially normalized this but family-string fragmentation may still occur on new Tier 9 additions.
- **Romance regional varieties** (`es_*`, `pt_*`, `fr_*`) — already handled via parentCode but family-string cohesion should be re-checked.

The fix is the same family-string-normalization rule across all clusters: **the family string should be the lowest-level cluster shared by all languages with that string; sub-branch nuance lives in `description`, not in the family chip ID**.

Future task candidates (not yet started):
- Audit all family strings for "singleton chip" cases (1 language per family chip) — likely 50+ such chips.
- Either normalize each to the next-broader cluster, OR explicitly tag them as intentional singletons (e.g., language isolates) so the validator knows they are not bugs.

---

## UX Audit (2026-05-07 part 8) — Compare button placement

User requested two changes:
- Move the "Add to compare" button from its current top-right position (next to the × close button on the language info modal) to **below the native-name line**.
- Delete the duplicate "Add to compare" button currently rendered at the bottom of the language info modal (above the sources/footer area).

### New Task 216. Reposition the modal Compare button to under the native name and remove the duplicate at the bottom

Goal:
The language info modal currently shows the same "Add to compare" button at TWO locations: top-right (absolutely positioned next to the × close button) and at the very bottom (before the sources area). The duplicate is confusing UX, and the top-right placement competes visually with the close button. User wants a single button placed directly under the native-name line, where it's visible without scrolling and visually attached to the language identity area.

Current issue I checked (2026-05-07):

**Three compare-related buttons in the language info area:**

| # | Selector | Location | Render code line | CSS line | Action |
|---|---|---|---|---|---|
| ① | `#compare-fab` | viewport bottom-right (fixed) — opens the comparison panel | wordmap.html:735-737 | wordmap.html:465-472 | **Keep as-is** (this is the FAB for opening the panel, not a per-language add button) |
| ② | `.compare-add-btn.header` | **modal top-right** (absolute, `top:6px; right:36px`, next to × close) | wordmap.html:2654-2668 | wordmap.html:543-546 | **Move** to under native-name |
| ③ | `.compare-add-btn` (no `.header`) | **modal bottom**, before sources/footer area | wordmap.html:3054-3061 | wordmap.html:535-541 | **Delete** entirely |

Note: the comment at wordmap.html:2655 says "Pass 32 (header position): Add-to-compare button right under the title" — but the CSS at line 543 (`position:absolute; top:6px; right:36px`) overrides DOM order and renders the button at the modal's top-right corner, NOT under the title. The intent was apparently to put it below the title, but the absolute positioning broke that.

Files to change:
- `wordmap.html` — three sub-changes:
  - **CSS** [wordmap.html:542-546](wordmap.html#L542-L546): remove `.compare-add-btn.header { position: absolute; top: 6px; right: 36px; ... }` block, OR rewrite as `position: static; margin: 4px 0 10px;` for inline flow.
  - **Render order** [wordmap.html:2654-2669](wordmap.html#L2654-L2669): swap the button render to come AFTER the native-name div, not before.
  - **Delete duplicate** [wordmap.html:3054-3061](wordmap.html#L3054-L3061): remove the entire bottom-rendering block.

Implementation instructions:

**Step 1 — modal render order** (`wordmap.html` near line 2654):

Current order (snippet, simplified):
```js
let html = `<h2 id="lang-info-heading">${escapeHtml(displayName)}</h2>`;
(() => { /* compare button render */ html += `<button class="compare-add-btn header" ...`; })();
html += `<div class="native-name"><span class="wm-form" dir="auto">${escapeHtml(lang.native)}</span> [${escapeHtml(code)}]</div>`;
```

Target order:
```js
let html = `<h2 id="lang-info-heading">${escapeHtml(displayName)}</h2>`;
html += `<div class="native-name"><span class="wm-form" dir="auto">${escapeHtml(lang.native)}</span> [${escapeHtml(code)}]</div>`;
(() => { /* compare button render (drop the 'header' class) */
    const inCmp = (window.__compareList || []).indexOf(code) !== -1;
    const cmpI18n = { /* ... unchanged ... */ };
    const lObj = cmpI18n[uiLang] || cmpI18n[uiLang.split('_')[0]] || cmpI18n.en;
    const lbl = inCmp ? lObj.remove : lObj.add;
    const cls = inCmp ? 'compare-add-btn added' : 'compare-add-btn';
    html += `<button type="button" class="${cls}" data-code="${escapeHtml(code)}">${escapeHtml(lbl)}</button>`;
})();
```

The key changes: (a) move the IIFE block down, after the native-name div; (b) drop `header` from the class list so it falls back to the default `.compare-add-btn` styling (block-flow, with `margin-top:10px`).

**Step 2 — CSS cleanup** (lines 542-546):

Remove this block entirely (or repurpose if needed for some other use):
```css
.compare-add-btn.header {
    position: absolute; top: 6px; right: 36px; z-index: 1;
    margin: 0; padding: 2px 8px; font-size: 11px;
}
```

The default `.compare-add-btn` rule (line 535-541) already provides reasonable inline styling:
```css
.compare-add-btn {
    display: inline-block; margin-top: 10px; padding: 4px 10px;
    font-size: 12px; border: 1px solid #1a73e8; background: #fff; color: #1a73e8;
    border-radius: 4px; cursor: pointer;
}
```

If the user wants smaller inline styling (matching the previous 11px font), update the default rule or add a new modifier class like `.compare-add-btn.compact`.

**Step 3 — delete the duplicate render block** (lines 3054-3061):

Remove:
```js
// Pass 32: Add-to-compare button (renders before sources/footer area)
// (Reuses the global COMPARE_I18N table for full UI-lang coverage.)
(() => {
    const inCmp = (window.__compareList || []).indexOf(code) !== -1;
    const lbl = inCmp ? compareT('remove') : compareT('add');
    const cls = inCmp ? 'compare-add-btn added' : 'compare-add-btn';
    html += `<button type="button" class="${cls}" data-code="${escapeHtml(code)}">${escapeHtml(lbl)}</button>`;
})();
```

This is redundant with Step 1's relocated button.

**Step 4 — verify event-handler integrity**.

The compare button click is handled via delegation or direct query. Spot-check at [wordmap.html:3634](wordmap.html#L3634):
```js
const btn = infoContent && infoContent.querySelector('.compare-add-btn[data-code="' + (window.CSS ? CSS.escape(code) : code) + '"]');
```

This is `querySelector` (single result), so reducing from 2 buttons to 1 button per modal is fine — the query still finds the (now single) button.

Also verify [wordmap.html:3486](wordmap.html#L3486) area where the button label gets refreshed when the comparison list changes — same `querySelector` pattern; still works.

**Step 5 — visual check post-change**.

- Click any language on the map → modal opens.
- Confirm: title `<h2>` at top, native-name immediately below, then "+ Add to compare" button in standard inline style.
- Confirm: NO button in the top-right corner next to the × close button.
- Confirm: NO button at the bottom of the modal above the sources/footer.
- Confirm: clicking the button still adds the language to the comparison list and the `#compare-fab` badge counter increments.

Validator / static check:
- No new validator gate needed; this is a UI-only change.
- Optionally add a `[#216]` HTML structural check that flags multiple `.compare-add-btn` data-code matches per modal render — defensive against future regression.

Do not:
- Do not remove the `#compare-fab` floating button — that one opens the comparison panel and is needed.
- Do not remove the `.compare-add-btn` default CSS rule (lines 535-541) — Step 1's relocated button uses that styling.
- Do not change the `data-code` attribute or click handler — only the position/duplicate count.
- Do not move the button to a position that overlaps with the disambiguator italic text (line 2678) or the badge row (line 2687) — keep it on its own line below native-name.

Done when:
- Single "+ Add to compare" button rendered directly below the native-name line in every language info modal.
- No button in the top-right corner of the modal.
- No button at the bottom of the modal.
- Click behavior unchanged: adds/removes language from comparison list, FAB badge updates correctly.
- CSS cleanup: `.compare-add-btn.header` block removed.
- Pass 32 comment at wordmap.html:2655 updated to reflect the new position (or removed since the position is now the documented default).

### Why Pass 32 ended up with this UX

The audit comment at line 2655 reads "Pass 32 (header position): Add-to-compare button right under the title" — the intent was the new placement the user is now requesting, but the absolute-positioning CSS overrode the DOM-order placement. The render code expected the button to flow naturally between `<h2>` and `<div class="native-name">`, but the CSS pulled it out of flow and pinned it to the top-right corner. Step 1 + Step 2 fix the original Pass-32 intent.

The bottom-of-modal duplicate (Step 3) appears to be a leftover from before the Pass-32 header-position addition; the original button position was the bottom, then Pass 32 added the new "header" version, and the original bottom render was never removed. Cleanup brings the modal back to a single Compare button.

---

## i18n Audit (2026-05-07 part 9) — `jvn` Caribbean Javanese description not translated

User reported: 「カリブ・ジャワ語ではまだ日本語翻訳がされていない」(Caribbean Javanese has no Japanese translation yet).

Investigation: the **language name** is correctly translated in `lang_names.js` (ja: `カリブ・ジャワ語`, ko: `카리브 자바어`, zh: `加勒比爪哇语`, plus 18 other UI langs). However, the **modal description body** at `wordmap_meta.js:52` has only `description: { en: '...' }` — no `ja`/`ko`/`zh`/etc. translations. So Japanese-UI users see the language name in Japanese ("カリブ・ジャワ語") but the description paragraph in English fallback.

This is a concrete instance of the broader Task 144 / Task 209 description-i18n gap: Task 201's [#201b] gate fires as WARN when a new language is added with `description` missing baseline UI langs (`en/ja/ko/zh`), but Phase 1 = WARN means contributors merge anyway. `jvn` was added in a recent batch with English-only description; the warning was emitted but ignored.

### New Task 217. Translate `jvn` Caribbean Javanese description into `ja`/`ko`/`zh` (and ideally the other 17 UI langs)

Goal:
Close the immediate user-reported gap by adding Japanese, Korean, and Chinese translations to `LANG_DATA['jvn'].meta.description`. The current state shows English fallback in non-English UIs.

Current issue I checked (2026-05-07 evening):
- `wordmap_meta.js:52` `LANG_DATA['jvn'].meta.description = { en: '...' }` — only English.
- `lang_names.js:975` `jvn: { en, ja, ko, zh, yue, vi, th, id, hi, de, fr, it, es_eu, es_mx, pt_eu, pt_br, ru, uk, ar, he, sw }` — all 21 UI langs covered for the language NAME.
- The Task 201 [#201b] gate would have fired with WARN level when the row was added, listing missing `ja, ko, zh` in baseline UI langs.

Files to change:
- `wordmap_meta.js:52` — extend the `description` object with `ja`, `ko`, `zh` (minimum). Optionally extend to all 21 UI langs to also resolve Task 209's Phase B.

Implementation instructions:

**Phase 1 — priority 4 UI langs (en + ja + ko + zh):**

Add Japanese, Korean, Chinese description translations preserving the same scholarly tone and key facts:
- Indentured-worker history (1890-1939, ~33,000 contracted from Dutch East Indies to Suriname).
- Linguistic divergence from standard Javanese (jv) through 130+ years of isolation.
- Sranan Tongo + Dutch loanwords, simplified krama-ngoko system, Suriname-specific vocabulary.
- Heritage-language status in Suriname.

Sample translation outline (refine for natural prose):

```
ja: 'カリブ・ジャワ語（Bahasa Jawa Suriname）は、1890年から1939年にかけて蘭領東インド（現インドネシア）からスリナムへ年季契約労働者として連れてこられた人々（約33,000人が契約、その多くが永住）の子孫であるジャワ系スリナム人共同体によって話されるジャワ語の変種。130年以上の隔離により標準ジャワ・ジャワ島のジャワ語（jv）から分岐し、スラナン・トンゴ語およびオランダ語からの広範な借用、簡略化された敬語階層（クラマ・ンゴコ）体系、スリナム固有の語彙を持つ。スリナムの主要な文化遺産言語の一つとして認められている。',
ko: '카리브 자바어(Bahasa Jawa Suriname)는 1890년부터 1939년까지 네덜란드령 동인도(현 인도네시아)에서 수리남으로 데려온 연한계약 노동자(약 33,000명 계약, 대부분 영주 정착)의 후손인 자바계 수리남인 공동체가 사용하는 자바어 변종이다. 130여 년의 고립을 통해 표준 자바섬 자바어(jv)에서 갈라졌으며, 스라난 통고어와 네덜란드어로부터의 광범위한 차용어, 단순화된 화법 단계(크라마-응고코) 체계, 수리남 특유의 어휘를 가진다. 수리남의 주요 유산 언어 중 하나로 인정받고 있다.',
zh: '加勒比爪哇语（Bahasa Jawa Suriname）是爪哇-苏里南社区使用的爪哇语变体，他们的祖先是 1890 年至 1939 年间从荷属东印度（今印度尼西亚）以契约劳工身份被带到苏里南的人们（约 33,000 人签约，大多数永久定居）。经过 130 多年的隔离，已从标准爪哇岛爪哇语（jv）分化：广泛借用斯拉南通哥语和荷兰语词汇、简化的语言层级（krama-ngoko）系统、以及若干苏里南特有词汇。被认定为苏里南主要的文化遗产语言之一。',
```

**Phase 2 — extend to all 21 UI langs (optional, ties into Task 209):**
- yue/vi/th/id/hi/de/fr/it/es_eu/es_mx/pt_eu/pt_br/ru/uk/ar/he/sw — 17 more translations.
- Same source content, same scholarly register.
- Same phase-rollout policy as Task 209 (priority European → Asian → remaining).

**Phase 3 — verify the validator's Phase 1 → 2 promotion of [#201b] is realistic.**
- After this fix, run `WM_VALIDATE_STRICT=1 WM_BATCH_GATE=1 node validate_wordmap_data.js` to confirm `[#201b]` no longer fires for `jvn`.
- Consider escalating [#201b] from WARN to ERROR for new-language batches so the next "English-only description merged anyway" recurrence is prevented.

Validator / static check:
- `[#13b']` description i18n coverage rises 1 row across 17 UI langs after Phase 2.
- `[#201b]` no longer flags `jvn` after Phase 1.

Do not:
- Do not machine-translate without review. The historical detail (indentured labour, Dutch East Indies, krama-ngoko speech levels) needs natural translation in each language.
- Do not delete the prose-readable `description.en` — it remains the source of truth for translation.
- Do not bundle this with Task 209 Phase B execution unless willing to translate all ~180 missing rows simultaneously. Task 217 is the single-row fix for the user's specific complaint.

Done when:
- `LANG_DATA['jvn'].meta.description` has at least `en/ja/ko/zh` populated.
- A user with Japanese UI sees the description in Japanese (not English fallback).
- Validator coverage tally for ja description rises by 1 row.
- Optional: `LANG_DATA['jvn'].meta.description` has all 21 UI langs populated (Phase 2).

### Why this matters for the broader audit

`jvn` is a single-row report from a user observing a Japanese-UI session. The same gap likely exists on every recent language addition that didn't go through Task 209 Phase B translation. Per the validator INFO line earlier today:

```
description i18n: ja coverage 627/694 (~90%) — missing 67 rows
                  ko coverage 627/694 (~90%) — missing 67 rows
                  zh coverage 627/694 (~90%) — missing 67 rows
```

So **roughly 67 languages** in priority UI langs (ja/ko/zh) currently show English fallback. `jvn` is one of those 67. The user's report is the visible tip of the iceberg — Task 144 / Task 209 is the systemic fix.

Recommended action sequence:
1. **Task 217 immediate** — translate `jvn` description (Phase 1 ~5 min).
2. **Task 209 Phase B follow-through** — batch-translate the other ~66 ja/ko/zh-missing rows. Highest impact: shrinks `[#13b']` warnings ja/ko/zh from 90% to 100%.
3. **Task 201 [#201b] Phase 2 promotion** — escalate WARN → ERROR for new-language batches so recurrence is prevented. Phase 2 plan already in Task 201.

---

## Metadata-Density Audit (2026-05-07 part 10) — older language entries are far thinner than newer additions

User reported: 「マポス・ブアン語とトク・ピシンを比較すると、前者の方の説明とメタ情報が詳しく情報量が圧倒的に多い。たぶん、後から生成されたものと思われるが、既存の情報にも同じような情報量で書き直すことはできないだろうか？」

Investigation confirmed a stark systemic gap. A 20-language sample (`tpi`, `ht`, `sw`, `vi`, `tl`, `id`, `ms`, `am`, `zu`, `xh`, `yo`, `ig`, `ha`, `my`, `km`, `lo`, `bo`, `jam`, `pcm`, `hwc`) **all 20 are missing**:
- `description.ja`, `description.ko`, `description.zh` (only `en`).
- `meta.sources` (no scholarly citations).
- `meta.scriptTags` (relies on regex inference).

Every one of these 20 is a major world / regional language with rich available scholarship — Swahili (~80M speakers), Vietnamese (~85M), Indonesian, Tagalog, Burmese, Khmer, Tibetan, Yoruba, Hausa, Igbo, Zulu, Xhosa, Amharic, Tok Pisin, Haitian Creole, etc. They were added before the Task 145 / 80 / 130 / 197 cross-cutting standards existed and have not been backfilled.

Meanwhile, recent Tier 4-13 additions like `bzh` Mapos Buang (~10K speakers, much smaller community) follow the new standards and have detailed family/countries/script prose, multilingual descriptions, structured sources, and scriptTags.

### New Task 218. Backfill rich metadata on the ~50–600 older language entries with thin descriptions

Goal:
Bring the older entries up to the same quality bar as the new Tier 4-13 entries: multilingual descriptions (`en/ja/ko/zh` minimum), scholarly `sources`, structured `scriptTags`, and detailed family/countries prose. The user-visible asymmetry is unfair: a small Oceanic language (`bzh`) has more thoroughly translated meta than a national lingua franca (`tpi`).

Current issue I checked (2026-05-07 evening, 20-lang sample):

| Code | Language | ja desc | sources | scriptTags |
|---|---|---|---|---|
| `tpi` | Tok Pisin | ✗ | ✗ | ✗ |
| `ht` | Haitian Creole | ✗ | ✗ | ✗ |
| `sw` | Swahili | ✗ | ✗ | ✗ |
| `vi` | Vietnamese | ✗ | ✗ | ✗ |
| `tl` | Tagalog | ✗ | ✗ | ✗ |
| `id` | Indonesian | ✗ | ✗ | ✗ |
| `ms` | Malay | ✗ | ✗ | ✗ |
| `am` | Amharic | ✗ | ✗ | ✗ |
| `zu` | Zulu | ✗ | ✗ | ✗ |
| `xh` | Xhosa | ✗ | ✗ | ✗ |
| `yo` | Yoruba | ✗ | ✗ | ✗ |
| `ig` | Igbo | ✗ | ✗ | ✗ |
| `ha` | Hausa | ✗ | ✗ | ✗ |
| `my` | Burmese | ✗ | ✗ | ✗ |
| `km` | Khmer | ✗ | ✗ | ✗ |
| `lo` | Lao | ✗ | ✗ | ✗ |
| `bo` | Tibetan | ✗ | ✗ | ✗ |
| `jam` | Jamaican Patois | ✗ | ✗ | ✗ |
| `pcm` | Nigerian Pidgin | ✗ | ✗ | ✗ |
| `hwc` | Hawaiian Creole | ✗ | ✗ | ✗ |

**`tpi` Tok Pisin specifically (user's example):**
- Current description: 1 sentence — `'Tok Pisin serves as the main lingua franca in a country with over 800 indigenous languages.'`
- 4M speakers (~150K L1, rest L2 national lingua franca).
- One of three official languages of PNG.
- Substantial scholarly literature: Mihalic 1971, Mühlhäusler 1979, Verhaar 1995.
- Should have rich multilingual description matching `bzh` Mapos Buang's depth.

Files to change:
- `wordmap_meta.js` — backfill `description: { en, ja, ko, zh }`, `sources: [...]`, `scriptTags: [...]`, and richer `family`/`countries`/`official`/`script` prose for each affected row.

Implementation instructions:

**Phase A — Top-50 high-traffic / high-population (1M+ speakers or major creoles):**

Languages: `sw, vi, id, tl, ms, am, zu, xh, yo, ig, ha, my, km, lo, bo, ne, mr, gu, kn, ml, pa, ur, ta, te, bn, hi, fa, ur, tr, ku, az, hu, fi, et, lv, lt, ka, hy, sq, mt, gl, ca, eu, bg, sr, hr, sk, cs, ro, sl, mk, da, sv, nb, nn, is, fo, ga, gd, cy, br, fr_qc, en_aave, en_in, ...`

About 50 of these need full backfill. For each:
- Write a 4-5 sentence English description covering: speaker count + geographic distribution, official status, key linguistic features (typology, script, notable phonology/morphology), 1-2 cultural/historical anchor points.
- Translate to ja/ko/zh (priority 4) at minimum.
- Add 2-4 sources (Ethnologue, Glottolog, plus 1-2 scholarly references).
- Add scriptTags array.
- Verify family string follows Task 159 normalization.

**Pilot rewrite for `tpi` Tok Pisin** (drafted in audit conversation 2026-05-07):

```js
LANG_DATA['tpi'].meta = {
    family: 'English-based creole (Melanesian Pidgin)',
    speakers: '~4M (~150K L1, rest L2/national lingua franca)',
    speakerBasis: 'L1+L2',
    speakerSource: 'Ethnologue 27',
    speakerYear: 2024,
    iso6393: 'tpi',
    glottocode: 'tokp1240',
    countries: 'Papua New Guinea (national lingua franca; concentrated on coast and in urban centers)',
    official: 'Papua New Guinea (one of three official languages alongside English and Hiri Motu)',
    script: 'Latin (Lutheran-Catholic ecumenical orthography standardized 1955; Mihalic dictionary 1971)',
    scriptTags: ['Latin'],
    description: {
        en: 'Tok Pisin (literally "talk pidgin", from English) is one of three official languages of Papua New Guinea (with English and Hiri Motu) and the country\'s primary national lingua franca, spoken by ~4M people across over 800 indigenous-language communities. Originated in 19th-century Bismarck Archipelago plantation labour migration and crystallised in German New Guinea (1884-1914), absorbing substantial Tolai (Kuanua) Austronesian vocabulary plus German loanwords (balus "airplane" ← Bauklotz, raus "out" ← raus). One of the world\'s best-studied creoles thanks to Mihalic\'s 1971 Jacaranda Dictionary, Mühlhäusler\'s 1979 grammar, and Verhaar\'s 1995 reference grammar. Has L1 speakers (~150K) particularly in urban areas and a rich literary tradition including the weekly Wantok newspaper since 1970.',
        ja: 'トク・ピシン（英語の "talk" + "pidgin" に由来。「ピジン語の話し言葉」の意）はパプアニューギニア（PNG）の3つの公用語の一つ（英語、ヒリ・モトゥ語と並ぶ）であり、800を超える先住民言語コミュニティを横断する国民共通語として約400万人に話される。19世紀のビスマルク諸島プランテーション労働者移住に起源を持ち、ドイツ領ニューギニア時代（1884-1914年）に確立し、トライ（クアヌア）語のオーストロネシア系語彙とドイツ語借用語（例: balus「飛行機」← Bauklotz、raus「外へ」← raus）を大幅に吸収した。Mihalic の 1971年 Jacaranda 辞書、Mühlhäusler の 1979年文法、Verhaar の 1995年参照文法の存在から、世界で最も研究されたクレオール言語の一つ。都市部を中心に約 15万人の母語話者を持ち、1970年創刊の週刊紙 Wantok など豊かな書き言葉の伝統を有する。',
        ko: '톡 피신(영어 "talk" + "pidgin"에서, "피진어 말씨"의 뜻)은 파푸아뉴기니의 3개 공식어 중 하나이며(영어, 히리 모투어와 함께), 800개 이상의 토착어 공동체를 가로지르는 국가적 공통어로서 약 400만 명이 사용한다. 19세기 비스마르크 제도 농장 노동자 이주에서 기원하여 독일령 뉴기니 시대(1884-1914)에 결정화되었고, 톨라이(쿠아누아)어의 오스트로네시아 어휘와 독일어 차용어(예: balus "비행기" ← Bauklotz, raus "밖으로" ← raus)를 상당히 흡수했다. Mihalic의 1971년 Jacaranda 사전, Mühlhäusler의 1979년 문법, Verhaar의 1995년 참조 문법 덕분에 세계에서 가장 잘 연구된 크리올 언어 중 하나이다. 도시 지역 중심으로 약 15만 명의 모어 화자를 가지며, 1970년 창간된 주간지 Wantok 등 풍부한 문자 전통을 보유한다.',
        zh: '托克皮辛语（英语 "talk" + "pidgin"，意为"洋泾浜语的话语"）是巴布亚新几内亚三种官方语言之一（与英语和希里莫图语并列），是该国跨越 800 多个土著语言社区的国民通用语，约 400 万人使用。起源于 19 世纪俾斯麦群岛的种植园劳动力迁移，在德属新几内亚时代（1884-1914）定型，吸收了大量托莱（库阿努阿）语的南岛词汇和德语借词（如 balus "飞机" ← Bauklotz, raus "出去" ← raus）。由于 Mihalic 1971 年《Jacaranda 词典》、Mühlhäusler 1979 年语法、Verhaar 1995 年参考语法的存在，是世界上研究最深入的克里奥尔语之一。在城市地区拥有约 15 万母语使用者，并有 1970 年创刊的周报 Wantok 等丰富的书面传统。'
    },
    sources: [
        { type: 'reference', title: 'Mihalic (1971) The Jacaranda Dictionary and Grammar of Melanesian Pidgin' },
        { type: 'reference', title: 'Mühlhäusler (1979) Growth and Structure of the Lexicon of New Guinea Pidgin' },
        { type: 'reference', title: 'Verhaar (1995) Toward a Reference Grammar of Tok Pisin' },
        { type: 'reference', title: 'Ethnologue 27: Tok Pisin', url: 'https://www.ethnologue.com/language/tpi/' },
        { type: 'reference', title: 'Glottolog: Tok Pisin', url: 'https://glottolog.org/resource/languoid/id/tokp1240' }
    ]
};
```

**Phase B — Mid-tier (100K–1M speakers, ~150 langs):** same approach, lower priority.

**Phase C — Long tail (~400 langs, mostly endangered or recently described):** opportunistic.

**Effort estimate:** ~30-60 minutes per language for a careful rewrite (en draft + ja/ko/zh translations + 2-3 source citations). Phase A (50 langs) ~25-50 hours.

Validator / static check:
- After fix: `[#13b']` description i18n coverage rises across ja/ko/zh.
- INFO line: `meta.sources adoption: N/M langs have ≥ 1 source`.
- INFO line: `description average length: N words` per UI lang (would expose thin/rich asymmetry visually).

Do not:
- Do not machine-translate at scale. Translation requires native-speaker review for technical terminology (creole / pidgin / agglutinative / tonal / etc.).
- Do not delete the existing English descriptions when expanding — extend them, don't replace blindly.
- Do not bundle this with Task 217 single-row jvn fix; Task 218 is the systemic backfill, Task 217 is the immediate user complaint.
- Do not skip `sources` when writing the description. Every claim should be sourceable.

Done when:
- Phase A 50 langs reach the Mapos-Buang quality bar (multilingual description, sources, scriptTags, detailed family/countries/script prose).
- Top-20 sample (validation reference) all pass:
  - 4-5 sentence en description with citation-grade content.
  - ja/ko/zh translations of comparable depth.
  - ≥ 2 sources cited.
  - scriptTags populated.
- Validator INFO line `description average length` shows narrowed gap between Phase A langs and bzh Mapos Buang.
- Cross-link Task 209 Phase B (description-only translation) and Task 80 (sources backfill) since Task 218 covers both in one effort.

### Why this matters for educational use

The user's primary use case is using the Word Map as a linguistics teaching tool (per Tasks 151–158 educational roadmap). A teacher pulling up Tok Pisin on the map sees a one-sentence description that says nothing about Tok Pisin's role in PNG, its origins, or its scholarly heritage. Meanwhile a student pulling up the same teacher's randomly-selected obscure language (bzh) sees a paragraph of detail. The asymmetry undermines the map's pedagogical credibility — the well-known languages should be the *richest* descriptions, not the thinnest.

Task 218 is large but high-leverage: completing Phase A alone delivers a uniform-quality experience across the 50 most-likely-to-be-clicked languages.

---

## Notation Audit (2026-05-07 part 11) — speaker count range notation ambiguity

User reported: 「済州語の話者数が「~5,000–10,000」のようになっている。「5,000~10,000」が正しい」.

The user's specific complaint: `ko_jeju.speakers = '~5,000–10,000 (UNESCO: critically endangered)'` is ambiguous (tilde-prefixed approximate followed by en-dash range — what does the tilde modify?). They prefer `5,000~10,000` (Japanese tilde-as-range convention).

Investigation reveals this is one of ~35 rows with similar ambiguous range notation. The root cause is a project-wide convention mix.

### New Task 219. Standardize the speaker-count range notation across all rows

Goal:
The `meta.speakers` prose field uses three incompatible conventions interchangeably for ranges:
- `~N–M` (5 rows): tilde + en-dash. Example: `ko_jeju` `'~5,000–10,000'`.
- `~N-M` (~30 rows): tilde + ASCII hyphen. Example: `prs` `'~12-15M'`, `udi` `'~6,000-8,000'`.
- `~N` only (no range), with parenthetical sub-detail: `'~80M (Wu Chinese family total; Shanghainese alone ~15-20M)'` (`wuu`).

Per Western convention, `~N` means "approximately N" (a point estimate); ranges are written `N–M` (with en-dash) or `N-M` (with hyphen). Combining `~` with a range separator is interpretively ambiguous: `~5,000–10,000` could mean "approximately 5,000–10,000" (the whole range is approximate) or "approximately 5,000 to 10,000" (only the lower bound is approximate). Per Japanese convention, the tilde `〜` (or `~`) IS the range separator: `5,000~10,000` reads naturally as "5,000 から 10,000".

The user's report is specific to `ko_jeju` but the same ambiguity applies to ~35 rows.

Current issue I checked (2026-05-07):

**Tilde + en-dash pattern (5 rows):**
- `ko_jeju`: `'~5,000–10,000 (UNESCO: critically endangered)'`
- `azb`: `'~13–15M'`
- `sma`: `'~500–600'`
- `ket`: `'~20–200'`
- `mai`: `'~30–50M'`

**Tilde + ASCII hyphen pattern (~30 rows):**
- `prs`: `'~12-15M (lingua franca; ~50% of Afghanistan population uses Dari)'`
- `udi`, `sva`, `kmh`, `rmf`, `sel`, `ess`, `atj`, `abq`, `yux`, `saq`, `dsh`, `kao`, `pqm`, `kio`, `xtm`, `bbo`, plus inline `~15-20M`-style sub-ranges in `wuu`/`id`/`sw` parenthetical detail.

Files to change:
- `wordmap_meta.js` — every `meta.speakers` value with the ambiguous pattern.
- `validate_wordmap_data.js` — add a check that warns on the ambiguous form.
- `CONTRIBUTING.md` — document the chosen convention.

Implementation instructions:

**Step 1 — pick a convention.** Three options:

- **Option A (Japanese tilde-as-range, user's recommendation):** Range = `N~M`. Approximate point = `~N`. Examples: `'5,000~10,000'`, `'13~15M'`, `'~125M'`. Pros: matches user's natural reading; unambiguous. Cons: non-standard in Western linguistic prose; en/de/fr UI users may find tilde-as-range unfamiliar.
- **Option B (Western en-dash range):** Range = `N–M` (en-dash) or `N-M` (hyphen). Approximate point = `~N`. Drop the leading `~` when the value is already a range. Examples: `'5,000–10,000'`, `'13–15M'`, `'~125M'`. Pros: matches international convention; Wikipedia/Ethnologue style. Cons: doesn't match Japanese reader's expectation; user's complaint stands for ja UI.
- **Option C (structured speakerCount, Task 167):** Replace prose with `speakerCount: { l1, range, rangeMin, rangeMax }` per Task 167. Prose `speakers` becomes a derived display, formatted per UI lang (ja UI → `5,000~10,000`, en UI → `5,000–10,000`). Best long-term solution. Largest effort.
- **Option D (ad-hoc, fix ko_jeju only):** Apply user's preferred form to `ko_jeju` only; defer the systematic fix. Pros: 30-second fix. Cons: leaves 34 other rows ambiguous; new contributors continue introducing the same pattern.

**Recommendation: Option B for prose + Option C as long-term.**
- Phase 1 (immediate, ~1 hour): apply Option B to all 35 rows. Eliminates ambiguity. Drop the leading `~` when the value is already a range; replace tilde-as-range with en-dash.
- Phase 2 (weeks): implement Option C structurally, with `speakers` prose auto-generated from `speakerCount` per UI lang. UI lang ja can output `~` as range separator; UI lang en outputs en-dash.

**Step 2 — apply the convention (Option B):**
- `ko_jeju`: `'~5,000–10,000 (UNESCO: critically endangered)'` → `'5,000–10,000 (UNESCO: critically endangered)'` (drop leading `~`; the en-dash already signals range).
- `azb`: `'~13–15M'` → `'13–15M'`.
- `sma`: `'~500–600'` → `'500–600'`.
- `ket`: `'~20–200'` → `'20–200'`.
- `mai`: `'~30–50M'` → `'30–50M'`.
- `prs`, `udi`, `sva`, etc.: replace ASCII hyphen with en-dash AND drop leading `~`. `'~12-15M (...)'` → `'12–15M (...)'`.

**Step 3 — validator check.** Add `[#219]` that warns on:
- `speakers` containing both `~` and `–`/`-` in close proximity (likely the ambiguous combo).
- ASCII `-` used as range separator instead of en-dash `–` (only when the surrounding context makes it a range, not a hyphen-in-a-name).

**Step 4 — CONTRIBUTING.md.** Add a "Speaker count notation" section:
- Use `~N` (tilde-prefix) only for point estimates with significant uncertainty.
- Use `N–M` (en-dash) for ranges. Do NOT prefix the range with `~`.
- For exact counts use the bare number: `125M`, `4M`, `5,000`.
- Optional vitality / source qualifiers go in parens: `(UNESCO: critically endangered)`.

Validator / static check:
- After fix: `[#219]` warns on 0 rows.
- INFO line: `speakers notation: N rows with point estimate, M rows with range, K rows with parenthetical detail`.

Do not:
- Do not use `~` as range separator in `speakers` prose if Option B is chosen, or as approximate-point if Option A is chosen — pick one and apply.
- Do not lose the parenthetical detail when normalizing. `(UNESCO: critically endangered)`, `(L2 lingua franca, L1 ≈ 15-20M)`, etc., stay intact.
- Do not bundle this with Task 167 structured-speakerCount migration unless willing to do the full Task 167 work simultaneously. Task 219 is the prose-only normalization.

Done when:
- All ~35 rows with the ambiguous pattern are normalized to the chosen convention.
- CONTRIBUTING.md "Speaker count notation" section exists.
- Validator `[#219]` reports 0 violations.
- For the user's specific complaint: `ko_jeju.speakers` no longer reads as ambiguous; either `5,000–10,000` (Option B) or `5,000~10,000` (Option A) is consistent with all peer rows.

### Why this matters for user trust

A reader looking at `~5,000–10,000` cannot parse it confidently:
- Does `~` apply to `5,000` only? → "approximately 5,000, up to 10,000"
- Does `~` apply to the whole range? → "approximately the range 5,000 to 10,000"
- Or does `~` mean "range" and `–` is a typo for the same? → "5,000 to 10,000"

The user is correct that the current notation is non-self-documenting. Even Option D (single-row fix) is better than leaving it as-is — but Phase 1 of Option B/A delivers the same clarity to all 35 rows in one pass.

---

## Decision recorded: Option C (Task 167 + Task 219 unified) — 2026-05-07

User chose **Option C**: implement Task 167's structured `speakerCount` schema with UI-lang-dependent prose generation. The unified plan is below.

### New Task 220. Implement structured `speakerCount` + UI-lang-dependent prose (Task 167 + Task 219 unified, Option C)

Goal:
Replace the prose `meta.speakers` field as the source of truth with a structured `meta.speakerCount` object (per Task 167's existing schema). The prose `speakers` becomes a derived display string, formatted per the user's UI language: Japanese UI shows `5,000~10,000`, English UI shows `5,000–10,000`, and other UIs follow their respective conventions. This single change resolves both Task 167 (numeric speaker structure) and Task 219 (range-notation ambiguity) and unlocks numeric range filtering (Task 153 grammar capsule alignment).

The user's specific complaint about `ko_jeju.speakers = '~5,000–10,000'` becomes a non-issue automatically: the prose is generated from `speakerCount: { range: 'range', rangeMin: 5000, rangeMax: 10000, vitality: 'critically-endangered' }` and rendered as `5,000~10,000` in Japanese UI without manual per-row editing.

Current issue I checked (2026-05-07):
- 706 rows have `meta.speakers` as free-form prose.
- 35 rows have ambiguous `~N–M` or `~N-M` patterns (Task 219 finding).
- 67 rows have `meta.speakerYear` set (Task 171 — 9.5% coverage).
- 71 rows have `meta.speakerBasis` set.
- 38 rows have `meta.speakerSource` set.
- The prose field is the only path to the numeric value; numeric filtering (Task 153 plan) is impossible.

Files to change (per the unified plan):

**Schema layer:**
- `wordmap_meta.js` — add `speakerCount` object to every row's meta, parsed from existing prose.
- `validate_wordmap_data.js` — extend Task 167 schema check; warn if both `speakers` prose and `speakerCount` structured disagree.
- `CONTRIBUTING.md` — document `speakerCount` as the source of truth.

**Display layer:**
- `wordmap.html` — modal renderer reads `speakerCount`, formats per UI lang, falls back to prose `speakers` if `speakerCount` is unset.
- `meta_i18n_coverage.js` — add per-UI-lang formatter helpers (range separator, "approximate" prefix, vitality qualifier translation).
- `lang-filter.js` — add numeric range filter (`speakers: 1M+`, `speakers: 100K–1M`, etc.) that reads `speakerCount` directly.

Implementation phases:

**Phase 1 — Schema + bulk-parse from prose (~3-5 hours).**

Add `speakerCount` to every row by parsing the existing `speakers` prose. The parser handles all observed patterns:

```js
// Pattern A: simple "~N{K|M|B}" → point estimate
'~125M' → { l1: 125_000_000, range: 'point', source: 'unknown' }

// Pattern B: simple "N{K|M|B}" → exact
'25K (fluent)' → { l1: 25_000, range: 'point', vitality: 'critically-endangered', notes: 'fluent' }

// Pattern C: "~N–M" or "~N-M" → range (resolves Task 219)
'~5,000–10,000 (UNESCO: critically endangered)' → { range: 'range', rangeMin: 5000, rangeMax: 10000, vitality: 'critically-endangered', source: 'UNESCO' }

// Pattern D: prose with parenthetical detail
'~80M (Wu Chinese family total; Shanghainese alone ~15-20M)' → { total: 80_000_000, range: 'point', notes: 'Wu Chinese family total; Shanghainese alone ~15-20M' }

// Pattern E: explicit L1/L2
'~200M (total; L1 ≈ 25-40M, mostly L2/national)' → { total: 200_000_000, l1RangeMin: 25_000_000, l1RangeMax: 40_000_000, notes: 'mostly L2/national' }

// Pattern F: extinct
'Extinct as living register (~17-20c. literary)' → { l1: 0, vitality: 'extinct', notes: '~17-20c. literary' }
```

The parser ships as a one-time migration script (`scripts/migrate_speakers.js`), runs once across all 706 rows, and writes the structured form back. Each parse result is reviewed manually (~30 sec/row) to catch edge cases.

**Phase 2 — Display layer with UI-lang formatters (~2-3 hours).**

The modal speaker renderer becomes:

```js
function formatSpeakers(speakerCount, uiLang) {
    if (!speakerCount) return '—';
    const ranges = uiLang === 'ja' || uiLang === 'ko' || uiLang === 'zh' || uiLang === 'yue';
    const sep = ranges ? '~' : '–';  // Task 219: ja-CJK uses ~, en/eu uses en-dash
    const apx = ranges ? '約' : '~';  // Approximate-point prefix
    
    if (speakerCount.range === 'range') {
        const lo = formatNum(speakerCount.rangeMin);
        const hi = formatNum(speakerCount.rangeMax);
        return `${lo}${sep}${hi}` + qualifierSuffix(speakerCount, uiLang);
    }
    if (speakerCount.l1 != null) {
        const n = formatNum(speakerCount.l1);
        return (speakerCount.exact ? n : `${apx}${n}`) + qualifierSuffix(speakerCount, uiLang);
    }
    // ... other shapes ...
}
```

Where `formatNum` adds locale-aware separators (`125,000,000` in en; `1.25亿` or `1.25 亿` in zh; `1.25億` in ja with optional Han numerals).

**Phase 3 — Filter integration (~1 hour).**

`lang-filter.js`'s speaker-tier filter reads `speakerCount.l1 ?? speakerCount.total ?? speakerCount.rangeMax` and bins into `100M+`, `10M+`, `1M+`, `100K+`, `10K+`, `1K+`, `<1K`. Replaces the current prose-regex parsing.

**Phase 4 — CONTRIBUTING.md documentation (~30 min).**

Section "Speaker count: structured field":
- `speakerCount` is the source of truth for numeric speaker data.
- The prose `speakers` field is auto-generated and should NOT be hand-edited; treat it as derived display.
- Schema:
  ```
  speakerCount: {
      l1?: number,                  // L1 (native) speaker count
      l2?: number,                  // L2 speaker count (when distinct)
      total?: number,               // Total speakers (when L1+L2 distinction is unclear)
      range: 'point' | 'range',     // 'point' for single estimate, 'range' for documented uncertainty
      rangeMin?: number,            // when range === 'range'
      rangeMax?: number,
      exact?: boolean,              // true if value is exact (no leading "~"/"approximately")
      year: number,                 // ISO year of the cited count
      source: string,               // 'Ethnologue 27', 'UNESCO', 'census', etc.
      vitality?: 'safe' | 'vulnerable' | 'definitely-endangered' | 'severely-endangered' | 'critically-endangered' | 'extinct',
      notes?: string,               // free-form qualifier text (translated per UI lang via meta_i18n_coverage)
  }
  ```

**Phase 5 — Migration validation (~1 hour).**

Validator gate `[#220]`:
- `speakerCount` required when `speakers` prose contains a numeric value.
- `speakerCount.year` required.
- `speakerCount.source` required.
- INFO line: `speakerCount adoption: N/M rows have structured form` — should reach 100% after Phase 1.

Validator / static check:
- `[#220a]`: row with prose `speakers` containing digits but no `speakerCount` → ERROR after migration deadline.
- `[#220b]`: `speakerCount.range === 'range'` requires `rangeMin` and `rangeMax` and `rangeMin <= rangeMax`.
- `[#220c]`: `speakerCount.year > 2024` → ERROR (future-dated).
- `[#220d]`: `speakerCount.year < 1990` for `dataStatus: 'modern'` → INFO (count is 30+ years old; flag for refresh).
- Display-layer test: render `ko_jeju` modal in ja UI → expect `5,000~10,000`; in en UI → expect `5,000–10,000`.

Do not:
- Do not hand-edit the prose `speakers` field after migration. It will be regenerated and your edit will be lost.
- Do not skip the migration script's manual review step. Patterns like `'~80M (Wu Chinese family total; Shanghainese alone ~15-20M)'` need careful interpretation — what's the "true" speaker count? The 80M (family total) or the 15-20M (Shanghainese specifically)?
- Do not gate Phase 2 (display) on Phase 1 (full migration) being complete. Phase 1 can backfill in batches; Phase 2's display reads `speakerCount` if present, falls back to prose otherwise.
- Do not introduce a new range separator beyond what's already used: stick to en-dash `–` for non-CJK UIs and tilde `~` for ja/ko/zh/yue. Avoid hyphen `-` (ambiguous) and em-dash `—` (different semantics).

Done when:
- All 706 rows have `speakerCount` populated.
- Display renders Japanese `5,000~10,000` and English `5,000–10,000` from the same underlying data.
- Speaker-tier filter (`1M+`, etc.) reads from `speakerCount` not prose.
- Validator `[#220a–d]` checks pass.
- Tasks 167 and 219 close (this task supersedes both).
- User's `ko_jeju` complaint is resolved without per-row hand-editing.
- CONTRIBUTING.md documents `speakerCount` as the source of truth.

### Effort summary

| Phase | Effort | Output |
|---|---|---|
| 1 — Bulk parse + write `speakerCount` | 3-5 hours | 706 rows structured |
| 2 — Display layer per UI lang | 2-3 hours | Modal renders correctly per UI |
| 3 — Filter integration | 1 hour | Numeric range filter works |
| 4 — CONTRIBUTING.md | 30 min | Future contributors see schema |
| 5 — Validator + tests | 1 hour | Regression prevention |
| **Total** | **~7-10 hours** | Single-source-of-truth + unblocks Tasks 153/167/219 |

### Tasks closed by Task 220

- Task 167 (structurally normalize speakers) — superseded.
- Task 219 (range notation ambiguity) — resolved automatically by per-UI-lang display.
- Task 171 (speakerYear backfill) — required as part of `speakerCount.year`.
- Partial: Task 153 (grammar capsule) speaker-count integration — unblocked.

### Migration risk

The risk is mainly Phase 1's manual review: parsing 706 free-form prose entries can introduce off-by-magnitude errors (`'~10K'` parsed as 10 instead of 10,000) or lose nuance (`'~12-15M (lingua franca; ~50% of Afghanistan population uses Dari)'` collapsing to a single number). Mitigation: Phase 1 produces a side-by-side diff of (original prose) → (regenerated prose from speakerCount). Reviewer signs off when diffs are semantically equivalent.
