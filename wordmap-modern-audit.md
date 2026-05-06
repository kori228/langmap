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
