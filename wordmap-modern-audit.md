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
