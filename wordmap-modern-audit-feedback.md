# Wordmap Modern Audit Feedback

Date: 2026-05-05

Source: `wordmap-modern-audit.md` (modern languages 499 entries audit)

## Summary

| Section | Status | Cells |
|---|---|---|
| §1 Surface/IPA mismatch (high priority) | ✅ Fixed | 6 |
| §2 Capital N in IPA (high priority) | ✅ Fixed | 12 |
| §3 ja_oki Okinawan classification (medium) | ✅ Fixed (Option A applied) | 1 lang reclass |
| §4 Same-form duplicates — wordEvidence overlap notes | ✅ 10 langs annotated | 23 cells |
| §6 English (en) row: align IPA to non-rhotic London | ✅ Fixed | 6 |
| §7 Hebrew eat/drink: present participle → infinitive | ✅ Fixed | 2 |
| §8 Russian/Ukrainian good: adverb → adjective | ✅ Fixed | 2 |
| §15 French length marks removed | ✅ Fixed | 6 |
| §16 Portuguese água stress added | ✅ Fixed | 2 |
| §28 Mandarin 妈妈/爸爸 tone added | ✅ Fixed | 4 (zh+zh_db) |
| §32 ko_jeju Jeju reclassification (Option A) | ✅ Fixed | 1 lang reclass |
| §46/§47 Naxi nxq: contamination + tone restoration | ✅ Fixed | 20 |
| §48 Bouyei pcc tone letters → IPA Chao tones | ✅ Fixed | 20 |
| §56/B Tujia tji love/thanks tone restoration | ✅ Fixed | 2 |
| §50 Iu Mien iuu tone letters → IPA Chao tones | ✅ Fixed | 20 |
| Phase 4 schema: WORD_LIST `definition` field added (multilingual {en,ja,ko,zh}) | ✅ Schema + validator check | 20 concepts |
| Task 76: `pronunciationType` schema + first-pass labeling | ✅ Schema + 162/579 langs labeled | 162 langs |
| Task 76 UI: modal pronunciation label rendering | ✅ Localized en/ja/ko/zh | UI |
| Task 79: `coverage` flag for regional variant rows + UI | ✅ Schema + 39 langs + UI | 39 langs |
| User-discovered duplicate: mon/mnw resolved (mon removed; mnw canonical) | ✅ Fixed | -1 lang (579→578) |
| Task 100: Localize unattested `—` cell label | ✅ 21 UI langs | UI |
| Task 102: Rename "IPA" toggle → "Pron." (en) / "発音" (ja) etc. | ✅ Fixed | UI |
| Task 132: Localize evidence markers (ja/ko/zh/de/fr/es + Source/Note prefix) | ✅ Localized | UI |
| Task 134: Centralize cache-buster versions (`WM_ASSET_VERSION` + validator drift check) | ✅ Implemented | infra |
| Task 99: `locationBasis` schema + UI rendering + first-pass labeling | ✅ 152/578 langs labeled | 152 langs |
| Task 121: Description fallback visible labeling + validator threshold | ✅ Implemented | UI + 14 WARN |
| Task 84: `surfaceType` schema + first-pass labeling | ✅ 471/578 langs labeled (81%) | 471 langs |
| Task 105: SEO/OpenGraph text — remove "IPA pronunciations" overclaim | ✅ Fixed | meta + README |
| Task 118: `languageKind` schema + UI badge + first-pass labeling | ✅ 94 langs labeled + UI | 94 langs |
| Task 109: `codeType` + `canonicalCode` schema + 100% coverage + validator | ✅ 578/578 codeType + 82 canonicalCode | all langs |
| Task 95+128: Concept definition visible UI (under word-select) + CONTRIBUTING.md | ✅ Always-visible, not hover-only | UI + docs |
| Task 91: `meta.sources` rendered in bibliography footer + drift validator + CONTRIBUTING | ✅ Fixed | UI + validator + docs |
| §9 Russian/Ukrainian cat: masculine → generic | ✅ Fixed | 2 (uk кіт→кішка, ru already 一般形) |
| §31 Arabic: name → 'Arabic (MSA)' clarification | ✅ Fixed | 1 lang label |
| Italian/Spanish/Polish stress marks added | ✅ Fixed | ~50 cells |
| §60 Thai: over-marked ˥ → ˧ for inherent-mid words | ✅ Fixed | 11 |
| §61 Lao: taːwēn romanization → IPA (full row tone deferred) | ✅ Fixed (1 cell) | 1 |
| §64 Cantonese yue: simplified → traditional script (HK) | ✅ Fixed | 6 |
| §65 Taiwanese nan: 媽媽/爸爸 tone added | ✅ Fixed | 2 |
| §67 Arabic ar: eat/drink wordEvidence note (perfective lemma) | ✅ Annotated | 3 |
| Systemic concept definitions | ⏸️ Schema work — Phase 4 候補 | — |
| Pass 2-6 family-wide IPA cleanup (Slavic ts, Turkic, Polynesian, etc.) | ⏸️ Deferred (要 family-wide review + source) | — |
| Pass 7 deferred: §62 Burmese tone, §63 Khmer transliteration, §66 id/ms/tl IPA, §68 ta/te register, §69 Tibetan tone | ⏸️ Deferred (要 source + policy) | — |

**Total fixed:** 178 cells + 2 language reclassifications + 1 schema addition (Phase 4 definitions) across 27 modern languages.

---

## §1 Surface/IPA mismatch — 6 cells fixed

監査が "surface is truncated while IPA contains full phrase" と特定した行を全て修正。surface と IPA 表記の長さが一致するように。

| Code | Lang | Concept | 旧 surface | 旧 IPA | 新 surface | 新 IPA | Source 確認 |
|---|---|---|---|---|---|---|---|
| `yo` | Yoruba | `hello` | `ẹ` | `ɛ kú` | **`ẹ kú`** | `ɛ kú` | Yoruba `ẹ kú` greeting |
| `yo` | Yoruba | `thanks` | `ẹ` | `ɛ ʃé` | **`ẹ ṣé`** | `ɛ ʃé` | Yoruba `ẹ ṣé` thank-you |
| `mi` | Māori | `thanks` | `ngā` | `ŋaː mihi` | **`ngā mihi`** | `ŋaː mihi` | Māori `ngā mihi` greeting/thanks |
| `to` | Tongan | `hello` | `mālō` | `maːloː e lelei` | **`mālō e lelei`** | `maːloː e lelei` | Tongan common hello |
| `de_by` | Bavarian | `hello` | `Griaß` | `ɡʁiɐs ɡɔd` | **`Griaß God`** | `ɡʁiɐs ɡɔd` | Bavarian `Griaß God` greeting |
| `rom` | Romani | `hello` | `lačho` | `latʃʰo divɛs` | **`lačho dives`** | `latʃʰo divɛs` | Romani `lačho dives` (good day) |

これで surface 表記と IPA 発音が同じ phrase を指し、user trust 問題 (見えてる単語と発音が違う) が解消。

---

## §2 Capital `N` → IPA `ɴ` (uvular nasal) — 12 cells fixed

Japanese moraic nasal の placeholder `N` を実際の IPA `ɴ` (LATIN LETTER SMALL CAPITAL N, U+0274 — Japanese 撥音の utterance-final realization に近い uvular nasal) に正規化。Ningbo Wu の `N` も同様。

| Code | Lang | Concept | 旧 IPA | 新 IPA |
|---|---|---|---|---|
| `ja_osa` | Japanese (Osaka) | `mother`/`father` | `okaN`/`otoN` | `okaɴ`/`otoɴ` |
| `ja_hak` | Japanese (Hakata) | `mother`/`father` | `okaN`/`otoN` | `okaɴ`/`otoɴ` |
| `ja_kyo` | Japanese (Kyoto) | `mother`/`father` | `okaːsaN`/`otoːsaN` | `okaːsaɴ`/`otoːsaɴ` |
| `ja_kg` | Japanese (Kagoshima) | `sun`/`dog` | `ohisaN`/`iN` | `ohisaɴ`/`iɴ` |
| `ja_sd` | Japanese (Sendai) | `mother`/`father` | `okːasaN`/`otːosaN` | `okːasaɴ`/`otːosaɴ` |
| `wuu_nb` | Ningbo Wu | `heart`/`eye` | `siN˦˦`/`ŋɛ˨˧tɕiN˦˦` | `siɴ˦˦`/`ŋɛ˨˧tɕiɴ˦˦` |

Audit reference: Cambridge JIPA は Japanese final moraic nasal の utterance-final realization を主に [ɴ] と記述。本プロジェクトの transcription policy として `ɴ` を採用 (universally strict IPA ではなく、project-specific convention)。

これは Session 2 に行った Burmese (my, modern) / Rakhine (rki, modern) と同種の placeholder N の正規化を modern Japanese/Wu 言語にも適用したもの。Word Map 全体で N → ɴ が一貫。

---

## §3 ja_oki classification — ✅ Option A applied

User 判断: **Option A** (Ryukyuan reclassify)。`ja_oki` の現状値は大半が Ryukyuan (`tida`/`majaː`/`niɸeːdeːbiɾu` 等) であり、`Japanese (Okinawa)` の表示は誤分類だった。`ja_mvi` (Miyako) / `ja_rys` (Yaeyama) と同列 Ryukyuan family に整合化。

**変更内容:**

| File | 変更 |
|---|---|
| `wordmap_data.js:69` | `name: 'Japanese (Okinawa)'` → `name: 'Okinawan'`、`native: '日本語(沖縄)'` → `native: 'うちなーぐち'` |
| `wordmap_meta.js:16` | `family:'Japonic'` → `family:'Japonic (Ryukyuan)'`、`speakers:'~1M'` → `'~100,000 (UNESCO: definitely endangered)'`、`script:'Kanji + Hiragana + Katakana'` → `'Hiragana + Katakana (also Kanji historically)'`、`official:'No (regional)'` → `'No'`、description rewrite (Ryukyuan independent language として)、`parentCode:'ja'` 削除 |
| `wordmap_meta.js:586` | 21 UI lang descriptions all rewrite as Ryukyuan independent language (Uchinaaguchi)、Standard Japanese との non-mutual-intelligibility を明記 |
| `lang_names.js` (21 sections) | `ja_oki` 翻訳を全て Okinawan equivalent に: 沖縄語 / Okinawan / 오키나와어 / 冲绳语 / Okinawaïen / Okinawanisch / Okinawense / Окинавский / الأوكيناوية / 沖繩語 / Tiếng Okinawa / ภาษาโอกินาวา / Bahasa Okinawa / ओकिनावान / Okinawano / etc. (he/sw/uk は既に正しかった) |
| `app.js:51` | LANG dropdown name `'日本語(沖縄弁)'` → `'沖縄語'` |

**Code key:** `ja_oki` のまま維持 (URL hash backwards compatibility、HIST_DESCENDANT 影響 nil)。

**Words data:** 既に Ryukyuan/Okinawan forms が中心だったため変更なし。`heart:['心','kukuɾu']` 等の Sino-Japanese kanji + Okinawan reading は Okinawan の正規表記として keep。

---

## §4 Same-form/same-IPA duplicates — wordEvidence overlap notes (✅ 7 langs / 14 cells)

Audit が "Do not blindly change duplicates. Some are real lexical overlap." と明記。Words の data 自体は legitimate なため keep、Phase 2 wordEvidence schema で `lexical-overlap` note を追加して教育的透明性を確保。

| Code | Lang | Concept overlap | Annotation |
|---|---|---|---|
| `glk` | Gilaki | eat/drink: `خوردن` (xoɾdæn) | West Iranian *xwar- "consume" covers both |
| `lrc` | Lurish | eat/drink: `خواردن` (xwɒːɾdæn) | 同上 |
| `bqi` | Bakhtiari | eat/drink: `خواردن` (xwoɾdan) | 同上 |
| `kwk` | Kwak'wala | hello/thanks: `gilakas'la` | canonical multipurpose greeting/thanks formula |
| `pwn` | Paiwan | hello/thanks: `masalu` | Formosan polysemy pattern |
| `bnn` | Bunun | hello/thanks: `uninang` | Formosan polysemy pattern |
| `trv` | Truku | hello/good: `malu` | Formosan greeting-as-affirmation pattern |
| `nv` | Navajo | hello/good: `yáʼátʼééh` | literal "it is good" used as canonical greeting |
| `haw` | Hawaiian | love/hello: `aloha` | encompasses love, affection, greeting, farewell (Hawaiian cultural concept) |
| `pjt` | Pitjantjatjara | hello/thanks/good: `palya` | "good/well/OK" as multi-purpose affirmation/greeting |

各 lang に `wordEvidence: { hello: { evidence: 'direct', note: 'lexical overlap with X: ...' }, thanks: {...} }` 等を追加。modal cell hover tooltip で表示される (Phase 2 overlay 既実装)。Audit §44 が "likely acceptable but worth documenting" と挙げた haw/nv/pjt も Source-gate として annotation 化。

**Deferred (要 source confirmation):**
- `lus.drink/house: in` (Mizo) — house意味は確実 (`in` = house) だが drink = `in` は要確認、citation form vs imperative の可能性
- `myp.heart/good: aoʔaago` (Pirahã) — Everett 研究で言及があるが安全 source 必要
- `enq.fire/tree: ita` (Enga) — Papuan polysemy 要確認
- `mpt` (Mian) sun/good `kep` + mother/love `na` — Mian grammar 要確認
- `ygr.love/hello: amige` (Yagaria) — Highlands greeting 要確認

これら 5 langs は Session 43+ で source verification 後に対応候補。

---

## Systemic Issue: Concept definitions

Audit が指摘した 20 concepts の ambiguity:

- `heart` — anatomical vs mind/soul
- `love` — noun/verb, romantic/compassion
- `hello` — general/time-of-day/formal
- `thanks` — interjection/noun
- `good` — adjective/moral/well-being
- `eat`/`drink` — infinitive/imperative/citation/finite

**現状:** Word Map UI はこれらを単一 concept で扱う。多義性は user に伝わらない。

**Schema Revolution Phase 4 候補:** `WORD_LIST` entries に `definition` field 追加、modal 単語表 thead でホバー時に表示。Sessions 31-37 で実装した Phase 1-3 (dataStatus visualization, wordEvidence overlay, bibliography footer, ancestor chain) と同列の改善。

---

## §6 English (en) row — non-rhotic London IPA (✅ 6 cells fixed)

Audit が "row mixes London metadata with rhotic/US-style IPA" と指摘。RP/London non-rhotic に統一、stress mark 追加。

| Concept | 旧 IPA | 新 IPA | 変更 |
|---|---|---|---|
| water | `wɔːtər` | `ˈwɔːtə` | 非ロチック化 + stress |
| fire | `faɪər` | `faɪə` | 非ロチック化 |
| mother | `mʌðər` | `ˈmʌðə` | 非ロチック化 + stress |
| father | `fɑːðər` | `ˈfɑːðə` | 非ロチック化 + stress |
| heart | `hɑːrt` | `hɑːt` | 非ロチック化 |
| hello | `hɛloʊ` | `həˈləʊ` | UK GOAT vowel + stress |

---

## §7 Hebrew eat/drink — infinitive 化 (✅ 2 cells fixed)

Audit: `אוכל`/`oχel` (present participle "eats") → `לאכול`/`leeχol` (infinitive); `שותה`/`ʃote` → `לשתות`/`liʃtot`。Pealim source 通り。

---

## §8 Russian/Ukrainian good — adverb → adjective (✅ 2 cells fixed)

| Code | 旧 | 新 |
|---|---|---|
| `ru` | `хорошо`/`xɐrɐʂo` (adverb "well") | `хороший`/`xɐˈroʂɨj` (adjective "good") |
| `uk` | `добре`/`dɔbrɛ` (adverb/neuter) | `добрий`/`ˈdɔbrɪj` (masculine adjective) |

---

## §15 French — unnecessary length marks 削除 (✅ 6 cells fixed)

Wiktionary の dictionary IPA に整合。`ː` を removal:

| Concept | 旧 | 新 |
|---|---|---|
| mother | `mɛːʁ` | `mɛʁ` |
| father | `pɛːʁ` | `pɛʁ` |
| drink | `bwaːʁ` | `bwaʁ` |
| love | `amuːʁ` | `amuʁ` |
| heart | `kœːʁ` | `kœʁ` |
| hello | `bɔ̃ʒuːʁ` | `bɔ̃ʒuʁ` |

---

## §16 Portuguese água — stress mark 追加 (✅ 2 cells fixed)

| Code | 旧 | 新 | Note |
|---|---|---|---|
| `pt_eu` | `aɡwɐ` | `ˈaɣwɐ` | EP lenition + stress |
| `pt_br` | `aɡwɐ` | `ˈaɡwɐ` | BP stop + stress |

---

## §28 Mandarin 妈妈/爸爸 — tone 追加 (✅ 4 cells fixed: zh + zh_db)

`mama` → `ma˥ma` (1st tone + neutral); `papa` → `pa˥˩pa` (4th tone + neutral)。`zh_db` も同期 (audit §38 が指摘した zh = zh_db duplicate を反映)。

---

## §32 ko_jeju Jeju language reclassification (Option A applied)

Audit §32: "Jeju row has the same classification problem as Okinawa"。User 既に ja_oki を Option A で reclassify したので、ko_jeju も同様に Jeju 独立言語として整理。

**変更内容:**

| File | 変更 |
|---|---|
| `wordmap_data.js:87` | `name: 'Korean (Jeju)'` → `name: 'Jeju'` (native `제주어` keep) |
| `wordmap_meta.js:25` | `family:'Koreanic'` → `family:'Koreanic (Jeju)'`、`speakers:'~5,000–10,000'` → `+UNESCO endangered`、description rewrite (Jejueo 独立言語として、UNESCO + 多くの linguist が separate language 扱い)、`parentCode:'ko'` 削除 |
| `wordmap_meta.js:595` | description block は既に "Jeju language" として書かれていた、変更不要 |
| `lang_names.js` (21 sections) | `Korean (Jeju)` → `Jeju` (en/de/fr/it/es/pt) / `济州语` (zh) / `濟州語` (yue) / `제주어` (ko) / `Tiếng Jeju` (vi) / `ภาษาเชจู` (th) / `Bahasa Jeju` (id) / `Чеджуский` (ru) / `Чеджуська` (uk) / `الجيجوية` (ar) / `Kijeju` (sw) / `ג׳ג׳ואית` (he, 既存維持) / `जेजू` (hi, 既存維持) |
| `app.js:63` | LANG dropdown name `'韓国語(済州)'` → `'済州語'` |

Code key `ko_jeju` のまま維持 (URL hash compat)。Words data は既に Jeju-specific (`어멍`/`아방`/`낭`/`괭이`/`혼저옵서예`/`고맙수다`) を含むため変更不要。

---

## §48 Bouyei pcc — tone letters → IPA Chao tones (✅ 20 cells fixed)

Audit §48: Bouyei pinyin tone letters (`-x`/`-z`/`-h`/`-l`/`-q`/`-s`) が IPA から strip されており tonal info が欠落。Standard Bouyei tone mapping を IPA Chao letters で復元。Wangmo ABVD source 参照。

| Tone letter | Chao value | Examples |
|---|---|---|
| `-x` | ˧˩ (tone 4) | raamx → raːm˧˩, feih → fei˧˩, faix → fai˧˩, saamh → saːm˧˩ |
| `-z` | ˩˩ (tone 2) | ngonz → ŋon˩˩, ranz → raŋ˩˩, faengz → faŋ˩˩ |
| `-h` | ˧˩ (tone 6) | ronh → roːn˧˩, meeh → meː˧˩, poh → poː˧˩, hainh → haiŋ˧˩ |
| `-l` | ˧˥ (tone 7, checked) | gianl → ɡian˧˥, gunl → ɡuŋ˧˥, ndeeul → ndeːu˧˥, ndil → ndi˧˥ |
| `-q` | ˧˧ (tone 8, checked) | meeuq → meːu˧˧ |
| `-s` | ˥˧ (tone 5) | gaais → ɡaːi˥˧ |
| (none) | ˨˦ (tone 1) | ma → ma˨˦, daa → daː˨˦ |

`good: ndil/ndil` の bug fix も同時に: 元 IPA は `l` を子音として残していたが正しくは `ndi˧˥` (tone 7)。Two-syllable phrases (hello, sun, thanks) も各音節 tone 復元。

wordEvidence に water + one を direct/Wangmo source として記録。

---

## §46/§47 Naxi nxq — surface contamination 修正 + 全 20 セル声調復元 (✅ 20 cells fixed)

Audit §46: `thanks: gbie-ɣ` の surface に IPA `ɣ` 混入、`one: ʈʂʰu-i` の surface に IPA `ʈʂʰ` 混入。Audit §47: 既存 18 セルも声調情報欠落 (Bouyei §48 と同種問題)。両方を一括修正。

**Naxi pinyin tone-letter mapping (Wikipedia + Pinson SIL):**

| Pinyin marker | Tone | Chao value | Examples in row |
|---|---|---|---|
| `-l` | High level | ˥ (55) | chil, lel, nyel |
| (none) | Mid level | ˧ (33) | gee, mee, mei, zo, si, etc. |
| `-q` | Low level/falling | ˨˩ (21) | bbeq, jjuq |

**Surface 置換 (汚染除去):**
- `thanks`: `gbie-ɣ` → **`jjuq jjuq`** (reduplicated form, cf. attested `jjuq cee`)
- `one`: `ʈʂʰu-i` → **`ddee`** (Omniglot Naxi numerals: Lijiang Old Town/Dayan dialect)

**全 20 セル IPA 更新 (vowel `ee` → `/ɯ/` Lijiang phonology + tone marks):**

| Concept | Surface | 旧 IPA | 新 IPA |
|---|---|---|---|
| water | gee | `ɡe` | `ɡɯ˧` |
| fire | mee | `me` | `mɯ˧` |
| sun | ny-mei | `nỹmei` | `nĩ˧mi˧` |
| moon | he-mei | `hemei` | `hɯ˧mi˧` |
| mother | mei | `mei` | `mi˧` |
| father | av | `a` | `a˧` |
| eat | zo | `zo` | `dzo˧` |
| drink | chil | `tʃʰi` | `tʂʰi˥` (高声 retroflex) |
| love | lai | `lai` | `lɑ˧` |
| heart | see-zai | `sezai` | `sɯ˧dzɑ˧` |
| tree | si | `si` | `si˧` |
| house | pee-mei | `pemei` | `pɯ˧mi˧` |
| dog | kee | `ke` | `kʰɯ˧` (送気) |
| cat | lai-mei | `laimei` | `lɑ˧mi˧` |
| hand | lel | `le` | `lɯ˥` |
| eye | nyi | `ɲi` | `ɲi˧` |
| hello | nyel-bbeq | `ɲeɓe` | `ɲɯ˥bɯ˨˩` |
| thanks | jjuq jjuq | `ɡbieɣ` | `dʑɯ˨˩dʑɯ˨˩` |
| one | ddee | `ʈʂʰui` | `dɯ˧` |
| good | ai | `ai` | `ɑ˧` |

wordEvidence に thanks/one/drink/hand/hello を `direct` source 注記として記録。

**Sources:**
- [Naxi language — Wikipedia](https://en.wikipedia.org/wiki/Naxi_language) — tone-letter system `-l/(none)/-q/-f`、4-tone inventory
- [Numbers in Naxi — Omniglot](https://www.omniglot.com/language/numbers/naxi.htm) — `ddee` for "1"
- [Naxi alphabet — Webonary (SIL/Pinson)](https://www.webonary.org/naxi/overview/alphabet/?lang=en)
- Michaud, A. (Lijiang A-sher Naxi phonology) — `ee` digraph = /ɯ/、retroflex `chil` series

---

## Pass 2-6 deferred items

Audit pass 2-6 の以下 categories は family-wide review + source 必須なため deferred:

- §5 IPA vs orthography column policy decision (要 user 方針確認)
- §11/§12 tone/stress/verb-form conventions (要 schema policy)
- §14 ASCII affricate notation (Slavic `ts` → `t͡s`) — family-wide
- §17 Indonesian/Malay `air` IPA (policy 依存)
- §19/§20/§21 Lakota/Dakota/Navajo/Inuit-Yupik orthographic IPA (family-wide)
- §22 Turkic `w/y/q/x` conventions (family-wide)
- §23 Georgian transliteration vs IPA (family review)
- §25/§37 `heart` anatomical vs emotional polysemy (semantic policy)
- §27 Mandarin 你好 sandhi (defensible as citation)
- §29 Quebec French 全面 review (要 Quebec source)
- §31 Arabic MSA vs dialect labeling (要 user 方針)
- §33/§34 Turkish/European stress omission (policy)
- §35 `one` gender choice (policy)
- §36 mother/father formal vs informal (policy)
- §38-§42 regional variant rows (要 coverage flag schema or family review)
- §43 coverage/confidence flag (要 schema 拡張)
- §51-§58 Asian minority lang tone omission (Tai Lue/Shan/Lahu/Mlabri/Khmu/Wa/Hmong/Zhuang/Jingpo/Akha) — 要 tone source per family (Naxi/Bouyei/Tujia/**Iu Mien** は本セッションで完了)

これらは概ね Session 43+ または schema phase 4-5 で対処候補。

---

## Pass 7 fixes (✅ 6 categories applied)

Audit Pass 7 (major Asian languages) のうち、source-confident な concrete 修正を適用:

### §60 Thai — over-marked ˥ → ˧ (✅ 11 cells)

Audit confirmed via Wiktionary: 多くの Thai 単語が inherent mid tone なのに ˥ (high) と marked。Bangkok Thai の正しい tone に修正。

| Concept | 旧 IPA | 新 IPA | Wiktionary 根拠 |
|---|---|---|---|
| fire ไฟ | `faj˥` | `faj˧` | mid (compounds confirm) |
| eat กิน | `kin˥` | `kin˧` | /kin˧/ |
| heart ใจ | `tɕaj˥` | `tɕaj˧` | mid |
| eye ตา | `taː˥` | `taː˧` | /taː˧/ |
| good ดี | `diː˥` | `diː˧` | /diː˧/ |
| cat แมว | `mɛːw˥` | `mɛːw˧` | mid |
| hand มือ | `mɯː˥` | `mɯː˧` | mid |
| sun (1+2 syllable) | `duaŋ˥ʔaː˥...` | `duaŋ˧ʔaː˧...` | both inherent mid |
| moon | `duaŋ˥tɕan˥` | `duaŋ˧tɕan˧` | both inherent mid |
| hello (last syl) | `...diː˥` | `...diː˧` | ดี mid |
| thanks (last syl) | `...kʰun˥` | `...kʰun˧` | คุณ mid |
| house บ้าน | `baːn˧˥` | `baːn˥˩` | /bâːn˥˩/ falling (corrected) |

`น้ำ` (high), `แม่`/`พ่อ` (falling), `รัก` (high), `หนึ่ง` (low), `ดื่ม` (falling) は audit 通り keep。

### §61 Lao — taːwēn romanization → IPA (✅ 1 cell)

`sun ຕາເວັນ`: `taːwēn` → `taːwen` (`ē` non-IPA macron 削除)。Lao 全行の声調復元は per-cell source が必要のため deferred。

### §64 Cantonese yue — simplified → traditional script (✅ 6 cells)

HK Cantonese 行で simplified 字 を traditional に統一:
- 日**头** → 日**頭** (sun)
- **妈妈** → **媽媽** (mother)
- **饮** → **飲** (drink)
- **爱** → **愛** (love)
- **树** → **樹** (tree)
- **猫** → **貓** (cat)
- 多**谢** → 多**謝** (thanks)

### §65 Taiwanese nan — 媽媽/爸爸 tone added (✅ 2 cells)

Mandarin loan kinship terms in Taiwanese pronounced high level (˥˥):
- mother 媽媽: `mama` → `ma˥ma`
- father 爸爸: `papa` → `pa˥pa`

### §67 Arabic ar — eat/drink/one wordEvidence note (✅ 3 cells)

Audit 指摘: Arabic `أكل/ʔakala`, `شرب/ʃariba` は perfective 3ms ("he ate"/"he drank") であり、displayed as infinitive-like concept では misleading。Arabic に直接の infinitive equivalent は無いため、wordEvidence note で明示 (form は keep)。`one واحد` も masculine form note 追加。

### §50 Iu Mien iuu — tone letters → IPA Chao tones (✅ 20 cells)

Audit §50 / §72 carry-forward: Iu Mien United Script (IMUS) tone letters (`-z`/`-v`/`-c`/`-x`/none) が IPA から strip され tonal info 喪失。Bouyei §48 と同種パターン。Wikipedia + HandWiki + Bruhn (UC Berkeley) reference に基づき復元:

| IMUS letter | Tone | Chao value | Examples in row |
|---|---|---|---|
| (none) | Mid level | ˧ (33) | wuom, hnoi, maa, mbao, m'zing, jiem |
| `-v` | High | ˦ (44) | hopv, hnamv, biauv, juv |
| `-h` | Mid-falling | ˧˩ (31) | (none in this row) |
| `-c` | Low | ˨˩ (21) | nyanc, yietc |
| `-x` | Low-rising | ˨˧ (13) | hlaax, diex, ndiangx, mbaaux, longx |
| `-z` | Low-rising (longer) | ˨˧ (13) | douz, buoz, laengz |

全 20 セル IPA 更新。Vowel digraph normalization 同時 (`ndian` → `ndiaŋ` final ŋ; `dʒuv` → `dʒu` 余分 v 削除; `mziŋ` → `m̩ziŋ` syllabic m̩ 表記)。

wordEvidence に fire/eat/drink/good を `direct` source 注記。Iu Mien は Naxi/Bouyei/Tujia と並ぶ tone-restoration 完了組に。

**Sources:**
- [Iu Mien language — Wikipedia](https://en.wikipedia.org/wiki/Iu_Mien_language)
- [Iu Mien — Omniglot](https://www.omniglot.com/writing/iumien.htm)
- [Social:Iu Mien language — HandWiki](https://handwiki.org/wiki/Social:Iu_Mien_language)
- Bruhn, D. (UC Berkeley) — *The Phonetic Inventory of Iu-Mien*

---

### §56/B Tujia tji — love/thanks tone restoration (✅ 2 cells)

Audit follow-up B: surface に tone digit (`a2ci1`, `ang2zai1`) が残り IPA に tone なし。他の tji 行と一致するよう surface clean + IPA tones 追加:
- love: `a2ci1` / `atsi` → `aci` / `a˧˥tsi˥`
- thanks: `ang2zai1` / `aŋtsai` → `angzai` / `aŋ˧˥tsai˥`

Tone numerals 1=˥ (55), 2=˧˥ (35) per Northern Tujia standard scheme (matches existing row's ˥˧/˧˥/˨˩/˧ inventory).

### Pass 7 deferred items

| § | Lang | 理由 |
|---|---|---|
| §62 | `my` Burmese | tone/phonation 全行整合化に grave/acute/creaky 適用が necessary、per-syllable source 必要 |
| §63 | `km` Khmer | 全行 IPA rebuild 必要、per-cell source verification |
| §66 | `id`/`ms`/`tl` | 第二列が IPA か broad transcription か policy 決定が先 |
| §68 | `ta`/`te` | concept-level register policy が先 |
| §69 | `bo` Tibetan | Lhasa/Central source per-cell verification 必要 |

これらは concrete column-policy + family source pass を経て対応。

---

## Low-cost batch fixes (Phase 4 schema + 教科書品質 cleanup)

「100点教材化」ロードマップから低コスト項目を一括対応:

### Phase 4 schema: WORD_LIST に `definition` field 追加 (20 concepts)

各 concept の意味 scope を 1〜2 行で明文化、wordmap_data.js:6-26 の WORD_LIST 各 entry に `definition` field を追加。UI hover 表示は次フェーズ、まず schema layer を整備。

主要記述:
- `heart` — anatomical OR mind/soul、東/東南アジア言語 (心/마음/ใจ/hati) は通常 mind/feeling sense
- `eat`/`drink` — citation/dictionary form preferred (infinitive / Semitic perfective 3ms / SE Asian bare stem)
- `mother`/`father` — neutral citation form
- `cat` — generic/sex-neutral preferred
- `one` — masculine/default citation
- `good` — adjective citation form (avoid adverb "well")
- 全 20 concepts 同様

これで「どんな form を期待するか」が data layer に lock され、validator で整合性検査可能。

### §9 Russian/Ukrainian `cat` masculine → generic

| Code | 旧 | 新 |
|---|---|---|
| `ru` | 既に `кошка / ˈkoʂkə` (生成済み) | (変更なし) |
| `uk` | `кіт / kit` (masculine) | `кішка / ˈkiʃkɑ` (generic) |

WORD_LIST `cat` label の `uk` も `Кіт` → `Кішка` で同期。

### §31 Arabic — name 'Arabic' → 'Arabic (MSA)'

Audit: row uses MSA-style citation forms (ʔakala/ʃariba/dʒajːid) が、name は generic 'Arabic'、coordinates Riyadh で誤解を招く。

| File | 変更 |
|---|---|
| `wordmap_data.js:143` | `name: 'Arabic'` → `name: 'Arabic (MSA)'`、`native: 'العربية'` → `'العربية الفصحى'` (Modern Standard Arabic 明示) |

地域方言 (`ar_eg`/`ar_lev`/`ar_gulf`/`ar_iq`/`ar_ma`/`ar_sd`/`ar_tn`) との区別が明確化。

### Italian/Spanish/Polish stress marks added

Audit §34 (European stress omission) のうち、予測可能ルールで mechanical に追加できる 3 言語を一括対応:

- **Italian (`it`)** 18 cells: 全 multisyll 単語に penultimate (ˈ) 追加。`albero → ˈalbero` (antepenultimate 例外)、`mangiare → manˈdʒaːre`、`amore → aˈmoːre` 等。
- **Spanish (`es_eu`)** 17 cells: 既定ルール (vowel/n/s 終わり → penult、それ以外 → final、accent 付き → 表記通り)。`comer → koˈmeɾ` (final r)、`corazón → koɾaˈθon` (written ó)、`árbol → ˈaɾβol` (written á)、その他 penult。
- **Polish (`pl`)** 14 multisyll cells: ほぼ完全 penultimate-stress 言語。`dziękuję → d͡ʑɛŋˈkujɛ` 含む。Monosyllabic は stress mark 不要 (jeść/pić/dom/pies/kot/cześć)。

Stress 付き IPA は narrow IPA convention に整合、教材として「どこを強く読むか」が明示される。

### 残: stress 未対応の European 言語

`es_mx` Mexican Spanish + 他 Spanish 地域 variants (es_co/es_cl/es_ar/es_cu/es_pe/es_an) は同じルールが適用可能だが next session。Czech/Slovak (initial-stress) も追加候補。German は predictable でないため要 source。

---

## Audit Task 76: pronunciationType schema (✅ schema + validator)

「100点教材化」の最大のブロッカーだった「第二列が IPA か broad か orthography か未定義」問題に対応。Audit Task 76/87 通り、`pronunciationType` field を `wordmap_meta.js` に追加 (per Task 87: meta は wordmap_meta.js に置く)。

**Enum:** `'ipa' | 'broad' | 'romanization' | 'orthography' | 'mixed' | 'unknown'`

**第一段階 labeling — 162/579 言語 (28%)**:

| Type | Count | 例 |
|---|---|---|
| `ipa` | 93 | en/fr/it/es_eu/pl/de/ru/uk/he/ja/ko/zh/yue/nan/ar/vi/th/hi/pcc/nxq/tji/iuu (audit complete + tone-restored 言語) |
| `broad` | 34 | sw/yo/zu/lo/my/bo/sm-of-Spanish-regional/eo/sukh-tone-still-tba |
| `orthography` | 22 | id/ms/tl/jv/su/ceb/haw/mi/to/sm/tkl/niu/tvl/pwn/bnn/trv/ami/tay/tsu/tao/eo |
| `mixed` | 8 | km (transliteration) / lhu/mra/xkk/wbm (surface contamination) / lkt/dak/nv (orthographic accents in IPA) |
| `romanization` | 5 | iu/ipk/kl/esu (Inuit-Yupik) + tlh (Klingon) |

残 417 言語は将来 session で incremental に label。Validator が new INFO で coverage を表示。

### Validator change (Task 76)

[validate_wordmap_data.js:556-559](validate_wordmap_data.js#L556-L559) に check #13d 追加:
- `pronunciationType` enum 検査 (6 値以外なら ERROR)
- 全体カウントを INFO 出力 (どの値がいくつあるか可視化)

### Audit が指摘した sample rows での適用結果

| Code | Audit 指定 | 適用 |
|---|---|---|
| `id` | `broad` or `orthography` | `orthography` |
| `ms` | `broad` or `orthography` | `orthography` |
| `tl` | `broad` or `orthography` | `orthography` |
| `km` | `mixed` until rebuilt | `mixed` |
| `bo` | `broad` unless tone-aware rebuild | `broad` |
| `lo` | `broad` (tones omitted) | `broad` |

Audit 指定通り。

### UI display (✅ implemented)

Modal の語表 thead 直前に pronunciation type label を追加 ([wordmap.html:1693-1700](wordmap.html#L1693-L1700))。`PRONUNCIATION_LABEL` 定数で en/ja/ko/zh ローカライズ、`mixed`/`unknown` は警告色 (#a04020)、それ以外は #888。例:
- `id` modal → "Pronunciation: spelling-based" (orthography)
- `zh` modal → "Pronunciation: IPA"
- `km` modal → "Pronunciation: mixed / needs review" (warning tone)

---

## Audit Tasks 95 + 128 — Concept definition visible UI + CONTRIBUTING.md (✅)

Task 82 で WORD_LIST に多言語 `definition: { en, ja, ko, zh }` field を追加したが、UI にはまだ表示されていなかった。Audit Task 95 が "concept-definition UI not depend on hover only" と要求、Task 128 が "Update contributor docs and validator for the new WORD_LIST.definition shape" と要求。両方に対応:

### UI: 単語選択 dropdown 下に常時表示 ([wordmap.html:361-362, 697-733](wordmap.html#L361-L362))

```html
<!-- 旧 -->
<select id="word-select" aria-label="Select word"></select>

<!-- 新 -->
<select id="word-select" aria-label="Select word" aria-describedby="word-definition"></select>
<div id="word-definition" style="font-size:10px;color:#888;font-style:italic"></div>
```

`updateWordDefinition()` 関数:
- 現在選択中の concept の `definition[uiLang]` を取得
- ja/ko/zh 揃っていればローカライズ表示
- 無ければ `definition.en` + Task 121 と同じ `(English fallback)` italic 注記
- UI lang 切り替え (`langmap:uichange` event) でも自動更新

**現在の表示例 (default selection = water):**
- en UI: "Drinkable water (H₂O); the basic substance, not a body of water."
- ja UI: "飲用・生活用の水 (H₂O)。川・湖・海などの水域そのものではない。"
- ko UI: "마시거나 일상에 쓰는 물 (H₂O). 강·호수·바다 같은 수역 자체가 아니다."

User が `heart` を選択すると "Default: the basic emotional/cognitive heart/mind term..." と表示され、「なぜ ja=心 / ko=마음 / hi=दिल / fr=cœur のように身体器官と精神を兼ねる単語があるのか」という concept-scope ambiguity が即座に解決。

これは **always-visible**、hover/click 不要 — audit Task 95 の核心要件を満たす。

### CONTRIBUTING.md update ([CONTRIBUTING.md:813-855](CONTRIBUTING.md#L813-L855))

旧:
> Each `WORD_LIST` entry is now `{ id: 'water', label: { en, ja, ... } }`

新: 完全な多言語 definition shape の例 + difficult concepts 表 + validator 規則を documentation 化:

| Concept | Why it needs explicit definition |
|---|---|
| `heart` | Anatomical organ vs mind/soul (E/SE Asian langs use 心/마음/ใจ for the latter) |
| `love` | Noun vs verb citation form depending on language |
| `good` | Adjective form; not the adverb "well" or a greeting response |
| `hello` | Neutral everyday greeting, not time-of-day forms unless the language only has those |
| `eat` / `drink` | Citation form policy (infinitive / Semitic perfective 3ms / SE Asian bare stem) |

Future contributor が新 concept を追加する時、これらの policy が明文化されているため drift を防止。

---

## Audit Task 109 — codeType + canonicalCode schema (✅ 578/578 + 82 canonical)

Audit が "There are 86 non-simple custom-looking codes containing underscores" の taxonomy を要求。Project が ISO 639-1/3 と project regional codes を mix しているが分類されていないため、validator も documentation もそれを区別できなかった。

**Schema 追加:**
- `meta.codeType`: `'iso' | 'regional-variant' | 'historical-stage' | 'pedagogical-stage' | 'script-variant' | 'constructed' | 'custom'`
- `meta.canonicalCode`: project code が ISO 639-3 と異なる場合の真の ISO 639-3 (例: `ja_oki` → `ryu` Central Okinawan)

**完全 coverage 達成 — 578/578 (100%):**

| codeType | Count | 例 |
|---|---|---|
| `iso` | 493 | en, fr, de, ja, ko, zh, ar, ... (アンダーバー無しの全 ISO 639 codes) |
| `regional-variant` | 75 | ja_osa, ja_kyo, ko_bus, zh_db, en_aave, fr_qc, ar_eg, vi_c, etc. |
| `historical-stage` | 5 | en_ang, enm, el_grc, zh_song, zh_tang, zh_han (chronological earlier stages of living langs) |
| `pedagogical-stage` | 5 | ja_edo, ja_heian, ko_mid, ko_em, vi_nom (rebuilt stages for teaching) |

**`canonicalCode` set on 82 languages:**

| Project code | canonicalCode | 説明 |
|---|---|---|
| `ja_oki` | `ryu` | Central Okinawan (Option A reclassify per Session 50) |
| `ko_jeju` | `jje` | Jeju (Option A) |
| `de_by` | `bar` | Bavarian |
| `de_gsw` | `gsw` | Swiss German Alemannic |
| `ar_eg` | `arz` | Egyptian Arabic |
| `ar_lev` | `apc` | Levantine Arabic |
| `ar_gulf` | `afb` | Gulf Arabic |
| `ar_iq` | `acm` | Mesopotamian Arabic |
| `ar_ma` | `ary` | Moroccan Arabic |
| `ar_sd` | `apd` | Sudanese Arabic |
| `ar_tn` | `aeb` | Tunisian Arabic |
| `th_n` | `nod` | Northern Thai (Lanna) |
| `th_s` | `sou` | Southern Thai |
| `th_isan` | `tts` | Northeastern Thai (Isan) |
| `mn_cn` | `mvf` | Peripheral Mongolian (Inner Mongolia) |
| `en_ang`/`enm`/`el_grc` | `ang`/`enm`/`grc` | 直 ISO 639-3 |
| `zh_song`/`zh_tang`/`zh_han` | `lzh` | Literary Chinese (all 3 are stages of) |
| `ja_edo`/`ja_heian` | `ojp` | (pedagogical reconstructions of OJP-stage Japanese) |
| `ko_mid`/`ko_em` | `okm` | Middle/Early Modern Korean (closest 639-3) |

**Validator changes:**

[validate_wordmap_data.js:578-595](validate_wordmap_data.js#L578-L595) check #13i 追加:
- `codeType` enum 検査
- アンダーバー code は `codeType` 必須 (欠落で WARN)
- アンダーバー code に `codeType='iso'` 不可 (WARN)
- `canonicalCode` と `iso6393` の disagree で WARN
- INFO line で coverage tally

これで:
- Future contributor が `xx_yy` 形式の独自 code を追加した時、validator が即座に「codeType 設定して」「canonicalCode を設定して」と warn
- Educational use 時に "ISO 639 code か / project code か / どの ISO に対応するか" が data layer に明示される
- 例えば `ar_eg` の modal で future UI が canonicalCode='arz' を表示することで、user が ISO 639-3 'arz' を直接調べられる

UI 表示は今回は schema layer のみ (modal で codeType / canonicalCode を専用表示しなくても、現在の `[code]` 表示 + family/parentCode で機能的には十分)。

---

## Audit Task 105 — SEO/OG/README "IPA pronunciations" overclaim 修正 (✅)

Audit が "Avoid public metadata claiming the map provides IPA pronunciations for all entries" と指摘。Tasks 76/94 で「第二列は IPA だけでなく broad/orthography/romanization も含む」と明示した以上、SEO 文言も整合化必須。

| File / Tag | 旧 | 新 |
|---|---|---|
| `wordmap.html` `<meta name="description">` | "in 578 languages with **IPA pronunciations**" | "in 578 languages with **pronunciation guides — IPA, broad transcription, and romanization where available**" |
| `wordmap.html` `<meta property="og:description">` | "with **IPA pronunciations** and 3D globe" | "with **pronunciation guides (IPA / broad / romanization)** and 3D globe" |
| `wordmap.html` `<meta name="twitter:description">` | 同上 | 同上 |
| `README.md:27` | "with **IPA (Chao tone letters throughout)**" | "with **pronunciation guides (IPA / broad transcription / romanization, Chao tone letters where applicable)**" |

これで Twitter share / Google snippet / GitHub README が dataset の実態と一致。

---

## Audit Task 118 — languageKind schema + UI badge + 94 langs labeled (✅)

Audit が "Make constructed languages and pedagogical rows visibly distinct from natural-language rows" と指摘。`dataStatus` (modern/attested/fragmentary/...) は **データ状態**を表すが、**言語の種類** (人工言語/ピジン/教材用) は別軸の概念。

**Schema:** `meta.languageKind: 'natural' | 'constructed' | 'pidgin-creole' | 'pedagogical-stage' | 'reconstructed-proto' | 'historical-attested'`

**第一段階 labeling — 94/578 言語:**

| Kind | Count | 例 |
|---|---|---|
| `historical-attested` | 72 | la, grc, sa, akk, hit, hbo, syc, en_ang, fro, sga, mga, sukh, omx, omc, chb, ja_edo (no — that's pedagogical-stage), och, ojp, vsa, etc. |
| `pidgin-creole` | 12 | tpi, hwc, pcm, en_sg (Singlish), ht, mfe, srn, pap, jam, cab, kri, lad |
| `pedagogical-stage` | 5 | ja_edo, ja_heian, ko_mid, ko_em, vi_nom |
| `constructed` | 4 | eo, tok, jbo, tlh |
| `reconstructed-proto` | 1 | ine (PIE) |

**`natural` (default)** は明示せず、modern natural langs はラベル無し。

### UI badge ([wordmap.html:1554-1564 + 1682-1696](wordmap.html#L1554-L1564))

`LANGUAGE_KIND_BADGE` 定数で en/ja/ko/zh ローカライズ + 色分け:

| Kind | 色 | en label | ja label |
|---|---|---|---|
| `constructed` | 紫 #7a3a8c | "constructed" | "人工言語" |
| `pidgin-creole` | 緑 #0d6e6b | "pidgin / creole" | "ピジン・クレオール" |
| `pedagogical-stage` | 茶 #995500 | "pedagogical stage" | "教材用前段階" |
| `reconstructed-proto` | 紫紺 #404060 | "reconstructed proto" | "再構祖語" |

`historical-attested` は dataStatus badge ("attested") で既に表示されるため、langKind badge は出さない (audit 通り重複回避)。

**現在の表示例:**
- `eo` modal: pronunciation type "broad" + langKind "人工言語" 紫 badge
- `tpi` modal: dataStatus "modern" + langKind "ピジン・クレオール" 緑 badge
- `ja_edo` modal: dataStatus "pedagogical" + langKind "教材用前段階" 茶 badge
- `ine` modal: dataStatus "reconstructed" + langKind "再構祖語" 紫紺 badge

### Validator change

[validate_wordmap_data.js:574-577](validate_wordmap_data.js#L574-L577) check #13h 追加 + INFO line で coverage tally。

---

## Audit Task 84 — surfaceType schema + first-pass labeling (✅ 471/578 langs)

Audit が懸念した「IPA-like 文字 (ɔ/ɛ/ŋ/click) を含む surface を blanket regex で誤検出して valid orthography を破壊するリスク」に対応。`surfaceType` field で surface 列の意味を明示。

**Schema:** `meta.surfaceType: 'native-script' | 'standard-orthography' | 'romanization' | 'phonetic' | 'mixed' | 'unknown'`

**第一段階 labeling — 471/578 言語 (81%):**

| Type | Count | 例 |
|---|---|---|
| `standard-orthography` | 255 | en/fr/de/es/it/pt/nl/sv/pl/cs/ro/sw/ha/yo/ee/ak (ɔ/ɛ orthographic)/lkt/dak (diacritics)/nv/haw/mi/sm/to/vi/id/ms/tl/jv/su/qu/quc/eo/tok/etc. |
| `native-script` | 209 | zh/yue/ja/ko/ar/he/th/lo/my/km/bo/hi/bn/ta/te/ru/uk/el/ka/hy + 全 historical 言語 (cop/syr/sux/akk/hit/orv/onw/...) + 中国少数民族 pinyin 列 (nxq/pcc/iuu/tji) |
| `romanization` | 5 | iu (Inuktitut Latin)/ipk/kl/esu (Inuit-Yupik) + tlh (Klingon)/jbo (Lojban) |
| `phonetic` | 2 | mra (Mlabri)、xkk (Khmu) — 標準 orthography が無いため surface=transcription |

**残 107 言語**は次 session で incremental labeling。Surface contamination 個別 cleanup (lhu/wbm) は別 task。

### Validator change

[validate_wordmap_data.js:570-573](validate_wordmap_data.js#L570-L573) check #13g 追加 + INFO line で coverage tally:
- `surfaceType` enum 検査 (6 値以外で ERROR)
- 全体 471/578 (81%) coverage を可視化

### Audit が指摘した false-positive 防止

Audit §84 が例示した:
- `ee` Ewe `ɣe`/`ɖu`/`lɔ̃lɔ̃` → `standard-orthography` ✓
- `ak` Akan `ɔsrane`/`ɛna`/`ɔdɔ` → `standard-orthography` ✓
- `naq` Nama `ǁgam-i`/`ǀae-b`/`ǂû` → `standard-orthography` ✓ (click chars are orthographic)
- `lkt` Lakota `čhaŋté`/`šúŋka`/`waŋží` → `standard-orthography` ✓
- `mra` Mlabri/`xkk` Khmu → `phonetic` (audit 通り)

これで future Claude session が「`ɔ` を見つけたから IPA だ」と誤判断する事故が schema layer で防げる。

UI 表示は今回追加しない (pronunciationType の隣に並べると情報過多)。Validator で coverage が見える状態が schema cleanliness の十分条件。

---

## Audit Task 121 — Description fallback visible labeling (✅)

Audit が "If a translated description is missing and English is shown as fallback, the UI should not silently pretend it is localized" と指摘。Localized description が無くて英語が表示される場合、それを user に明示。

### UI change

[wordmap.html:1715-1740](wordmap.html#L1715-L1740) `renderLangInfo()` の description rendering を改修:

```js
// 旧
const desc = typeof m.description === 'object' ? (m.description[uiLang] || m.description.en || '') : m.description;
html += `<div class="desc">${escapeHtml(desc)}</div>`;

// 新
let desc, isFallback = false;
if (typeof m.description === 'object') {
    const baseLang = uiLang.split('_')[0];
    desc = m.description[uiLang] || m.description[baseLang] || m.description.en || '';
    isFallback = uiLang !== 'en' && !m.description[uiLang] && !m.description[baseLang] && !!m.description.en;
} else {
    desc = m.description;
    isFallback = uiLang !== 'en';  // string-only desc is implicitly English
}
// + show italicized "(English fallback)" / "(説明は英語で表示中)" label after desc
```

`ENGLISH_FALLBACK_LABEL` 定数 ([wordmap.html:1700-1715](wordmap.html#L1700-L1715)) を 21 UI langs ローカライズ:

| UI lang | Label |
|---|---|
| en | English fallback |
| ja | 説明は英語で表示中 |
| ko | 설명은 영어로 표시 중 |
| zh | 说明暂以英语显示 |
| yue | 說明暫以英文顯示 |
| de | Englischer Ersatztext |
| fr | Texte de repli en anglais |
| es/es_eu/es_mx | Texto en inglés (provisional) |
| pt/pt_eu/pt_br | Texto provisório em inglês |
| ru | Описание временно на английском |
| uk | Опис тимчасово англійською |
| ar | الوصف معروض بالإنجليزية مؤقتًا |
| he | התיאור מוצג כעת באנגלית |
| sw | Maelezo bado kwa Kiingereza |
| (他 vi/th/id/hi/it も追加) | |

これで例えば pwn (Paiwan) の modal を yue UI で開くと、英語説明 + `(說明暫以英文顯示)` の italic 注記が表示される。

### Validator change (Phase 1 threshold)

[validate_wordmap_data.js:565-580](validate_wordmap_data.js#L565-L580) check #13b' 追加:

- UI lang ごとの description coverage を 95% threshold で WARN 化
- 出力例: `[#13b'] description i18n: yue coverage 94% (542/578) below 95% threshold — missing: ami, pwn, tay, bnn, trv, …31 more`

**現状 14 WARN:**
- 94% (yue/vi/th/id/hi/it): 36 missing — 主に Formosan, Sinitic regional, Asian minority recent batch (ami/pwn/tay/bnn/trv/tsu/tao/hak_tw/wuu_*/nan_qz/zh_*/cpx/mfa/mtq/tyz/kjp/kac/wbm/ahk/dtp/hne/mnw/grt/nut/quc/kek/mam/wal/sid/tji/nij/sda)
- 90% (es_eu/es_mx/pt_eu): 59 missing — 上記 + 多数の歴史言語 (orv/xsc/sukh/xmr/onw/cqu/omc/chb/oma/osu/otl/zkt/juc/...)
- 92% (uk/ar/he/sw): similar set

これらは future incremental session で翻訳追加するべき項目として visible に。Phase 2 で 100% に達したら threshold を 100% に上げる。

---

## Audit Task 99 — locationBasis schema + UI + 152 lang first-pass labeling (✅)

Audit が "Make clear that each marker is a representative point, not a speaker-distribution map" と指摘。Modal に「Map point: capital / historical site / approximate region」表示で marker semantics を明示。

**Schema:** `meta.locationBasis: 'capital' | 'prestige-center' | 'historical-site' | 'largest-city' | 'approx-region'` (canonical)。`lang.locationBasis` (legacy) も後方互換のため UI/validator が両方を受け付ける。

**第一段階 labeling — 152/578 言語 (26%):**

| Type | Count | 例 |
|---|---|---|
| `historical-site` | 67 | la, grc, sukh, omx, omc, chb, ja_edo, en_ang, enm, non, sga, fro, osp, sux, akk, hit, etc. |
| `capital` | 65 | en (London), fr (Paris), de (Berlin), ja (Tokyo, legacy), ko (Seoul), zh (Beijing), ru (Moscow), hi (Delhi), th (Bangkok), id (Jakarta), etc. |
| `prestige-center` | 13 | sa (Vedic N India), pi (Pali liturgical), cu (OCS), gez, ave (Avestan), bo (Lhasa), cy (Welsh), eu (Basque), ca (Catalan), ja_heian (Kyoto), ko_mid, ko_em, ar (Riyadh MSA centroid) |
| `largest-city` | 5 | yue (HK), nan (Taipei), he (Tel Aviv), sw (Dar/Nairobi), ta (Chennai) |
| `approx-region` | 2 | xsc (Pontic steppe), ine (Proto-Indo-European) |

歴史言語は audit 指摘通り `historical-site`、現代国語は概ね `capital`、ar=MSA は単一首都ではなく `prestige-center`、he/yue/nan/sw/ta は実際の首都が language-cluster centroid と異なるため `largest-city`、再構言語/遊牧民は `approx-region` に。

### UI display ([wordmap.html:1693-1700](wordmap.html#L1693-L1700))

Modal の pronunciation/coverage 行と並んで `Map point: <label>` を表示:
- 例: en modal → `Map point: capital city`
- 例: ja_edo modal → `Map point: historical site`
- 例: xsc Scythian → `Map point: approximate region`

Localized en/ja/ko/zh、UI lang fallback chain は `uiLang → uiLang.split('_')[0] → en`。

### Validator changes

[validate_wordmap_data.js:617-627](validate_wordmap_data.js#L617-L627):
- check #13f: `meta.locationBasis` enum 検査
- 同一 lang で `lang.locationBasis` と `meta.locationBasis` 両方あり値が違う場合 WARN (canonical は meta)
- INFO line で coverage tally (pronunciationType と同様、historical-site=67/capital=65/...)

### 残: 426 言語の labeling

Asian 諸言語、African 大半、Pacific Austronesian、Latin American minority、Caucasus、Native American は未 label。Incremental に対応予定 — 1 language 1 label なので、family-by-family で進めれば数 session で 100% 達成可能。

---

## Audit Task 134 — Cache-buster centralization (✅)

Audit が "stale data bugs caused by manually updated `?v=` numbers scattered through wordmap.html" を懸念した件。Cache-buster バージョンを 6 つの asset ([styles, data, metaI18n, filter, names, meta]) で散在させていたが、`WM_ASSET_VERSION` 中央レジストリに統一。

**変更内容:**

1. **`wordmap.html`** に `WM_ASSET_VERSION` 定数 + `assetUrl(path, key)` ヘルパー追加 ([wordmap.html:557-570](wordmap.html#L557-L570))。
2. **動的 meta load** を `assetUrl('wordmap_meta.js', 'meta')` に置換 (line 1529) — これで meta バージョンを忘れる risk が消える。
3. **Static `<script>`/`<link>` tags** はビルドステップ無しでは inject 不可なので literal `?v=N` のまま。代わりに **validator check #19** を追加して registry との drift を検出。
4. **Validator [check #19](validate_wordmap_data.js#L405-L443):**
   - `WM_ASSET_VERSION` が無ければ WARN
   - 各 asset の static tag バージョンを registry と照合、ずれていれば WARN
   - `wordmap_meta.js` は dynamic 専用、`assetUrl()` 呼び出しの存在を確認
   - `WM_ASSET_VERSION` から key が抜けていれば WARN

**結果:** future Claude session が data を編集して `WM_ASSET_VERSION.data` を bump し忘れると validator が即警告。`wordmap_meta.js` を編集して動的 load を bump し忘れる事故も `assetUrl('wordmap_meta.js', 'meta')` の自動参照で解消。

CONTRIBUTING.md 更新は次 session — schema は完成。

---

## Audit Tasks 100/102/132 — i18n batch (✅ all)

低コスト i18n cleanup を 3 task まとめて対応:

### Task 100: Localize unattested `—` cells (✅ 21 UI langs)

`wordmap.html` の renderLangInfo() で modern lang セルが `—` のとき、英語固有の "(unattested)" を表示していた問題。`UNATTESTED_LABEL` 定数を追加 ([wordmap.html:1665-1675](wordmap.html#L1665-L1675))、21 UI langs ローカライズ:

| UI lang | Label |
|---|---|
| en | unattested |
| ja | 未確認 |
| ko | 미확인 |
| zh | 未确认 |
| yue | 未確認 |
| vi | không có chứng cứ |
| th | ไม่มีหลักฐาน |
| id | tak terbukti |
| hi | अप्रमाणित |
| de | unbelegt |
| fr | non attesté |
| it | non attestato |
| es | no atestiguado |
| pt | não atestado |
| ru | не засвидетельствовано |
| uk | не засвідчено |
| ar | غير مُثَبَّت |
| he | לא מתועד |
| sw | haijathibitishwa |

UI lang 不明時は en にフォールバック。

### Task 102: Rename "IPA" toggle → "Pron." / "発音" / etc. (✅)

Audit 指摘: 「IPA toggle が strict IPA を全行で promise しているが、実態は orthography/broad mix」。Toggle button label を変更:

| File / Layer | 旧 | 新 |
|---|---|---|
| `wordmap.html:387` button label | `<span class="label">IPA</span>` | `<span class="label">Pron.</span>` |
| `wordmap.html:387` aria-label | "Toggle IPA / transcription display" | "Toggle pronunciation / IPA / transcription display" |
| `wordmap_data.js` WM_UI en `ipa:` | `'IPA'` | `'Pron.'` |
| `wordmap_data.js` WM_UI de `ipa:` | `'IPA'` | `'Aussprache'` |
| `wordmap_data.js` WM_UI id `ipa:` | `'IPA'` | `'Lafal'` |
| ja/ko/zh `ipa:` | 既に `発音`/`발음`/`发音` | (変更なし — 既存ローカライズ) |

Hover tooltip (`title`) はテーブル column header (`ipaCol`) を表示し続けるため "IPA / Transcription" は残るが、これは正しい (column 名としては妥当)。

### Task 132: Localize evidence markers (✅ ja/ko/zh/de/fr/es 追加)

Audit: `EVIDENCE_MARKER` の labels が `label_en` + `label_ja` のみで、`evidenceTooltip()` も Japanese か English の二択。Korean/Chinese/Arabic 等の UI lang ユーザーは英語の trust label を見ていた。

**変更:**

- `EVIDENCE_MARKER` を `labels: { en, ja, ko, zh, de, fr, es }` に再構造化 ([wordmap.html:1645-1675](wordmap.html#L1645-L1675))
- `evidenceTooltip()` が UI lang から正しい label を選ぶよう更新 (`uiLang.split('_')[0]` で variant codes も処理)
- `EVIDENCE_PREFIX = { source, note }` で "Source:" / "Note:" prefix もローカライズ
- 旧 ja の "直接 attested" / "近縁言語からの proxy" の英単語残留も除去 ("直接確認" / "近縁言語からの代用")

**Marker 一覧:**

| Symbol | en | ja | ko | zh |
|---|---|---|---|---|
| ✓ | directly attested | 直接確認 | 직접 확인됨 | 直接证实 |
| ~ | proxy from related lang | 近縁言語からの代用 | 근연 언어에서의 대용 | 近亲语言代理 |
| * | reconstructed | 再構形 | 재구형 | 构拟形式 |
| ? | inferred from context | 文脈から推測 | 문맥에서 추정 | 依文脉推断 |
| ⁉ | disputed reading | 異読あり | 이견 있음 | 存在异读 |
| ◇ | pedagogical approx. | 教育用近似 | 교육용 근사 | 教学用近似 |

これで Korean/Chinese 等の UI でも教材として trust labels が読める。

---

## User-discovered duplicate: mon/mnw resolved (✅ Session 51)

User が "モン語が２つあること" を発見。実態:

- `mon` (ISO 639-1 で実は **モンゴル語**を指す code) と `mnw` (ISO 639-3 — 正しい Mon language code) が同じ Mawlamyine 座標で別データを持つ重複行。
- Validator allowlist で長期 deferred (Bauer 1982 / Diffloth merge needs Mon-language expert) だった。
- Mongolian は別途 `mn` (ISO 639-1) として存在 → `mon` 行は誤分類。

**解決:**
- `mon` LANG_DATA entry を削除 (旧 wordmap_data.js:1347-1348) — 古い IPA `daˀ`/`pəmoit` 形は捨てる
- `mnw` を canonical として保持 (新 IPA `ɗaʔ`/`pəmoʔ` — 正しい glottal stop ʔ + implosive ɗ)
- `mon`.meta 削除 (wordmap_meta.js:408)
- `lang_names.js` 21 UI sections から `mon: '...'` entry を全削除 (`mnw: '...'` は既存維持)
- `wordmap.html:924` HIST_DESCENDANT: `omx: 'mon'` → `omx: 'mnw'` (Old Mon → modern Mon の系譜が修正された code を指す)
- `validate_wordmap_data.js` ALLOWLIST から mon/mnw entry 削除 (audit Session 8+ deferred 状態解消)
- 言語数 `579` → `578` を user-visible strings (wordmap.html title/og/twitter description, README.md) で更新

`mn` (Mongolian) はそのまま — 影響なし。

ISO 639-3 では `mnw` が Mon language の正しいコード。`mon` は ISO 639-1/639-2 で「Mongolian」(macrolanguage code) として意味が衝突する廃止候補。

---

## Audit Task 79: coverage flag for regional variants (✅ schema + 39 langs + UI)

Audit §38-§42 が指摘した「regional variant 行が base 言語をほぼコピー」問題に対応。`coverage` enum + optional `baseLang` field を `wordmap_meta.js` に追加。

**Enum:** `'full' | 'partial' | 'accent-only' | 'base-copy-with-notes'`

**第一段階 labeling — 39 regional 行:**

| Coverage | Count | 例 |
|---|---|---|
| `base-copy-with-notes` | 2 | zh_db (20/20 = zh)、ko_kp (19/20 = ko) |
| `accent-only` | 3 | es_mx/es_co/es_pe (18/20 vs es_eu) |
| `partial` | 34 | es_cl/es_ar/es_cu/es_an + Korean/Japanese 全方言 + English 地域 + French 地域 + Arabic 方言 + 他 |

**Audit §38 specific finding 反映:**
- zh_db Northeastern Mandarin: 20/20 = zh → `coverage: 'base-copy-with-notes', baseLang: 'zh'` (Modal 警告色で「主に zh から継承」と表示)
- ko_kp DPRK Korean: 19/20 = ko → 同上 (greeting のみ違うため audit の指摘通り)

### Validator changes

[validate_wordmap_data.js:560-572](validate_wordmap_data.js#L560-L572) に check #13e 追加:
- `coverage` enum 検査 (4 値以外なら ERROR)
- `coverage='base-copy-with-notes'` で `baseLang` 欠落なら WARN
- `baseLang` が存在しない code を指していたら ERROR

### UI display (✅ implemented)

Modal の pronunciation label の直下に coverage label を追加 ([wordmap.html:1700-1710](wordmap.html#L1700-L1710))。`{base}` placeholder で base lang 名を埋め込み (例: 「主に英語から継承」)。`base-copy-with-notes` は警告色。

これで learner が「en_ck Cockney 行は en の partial coverage」「zh_db は zh コピーで未レビュー」と一目で分かる。

### Task 80 (source references) との連携

`pronunciationType: 'ipa'` の言語のうち、validator が「source 無し」と warn 可能になった (Task 80 の予備工事)。

---

## Audit Tasks 82/85/86 follow-up

監査の最新バッチ (§71-§140) のうち、直前のセッションで作った *partial implementation* に対する正式 follow-up:

### Task 82: WORD_LIST.definition object 化 (✅ Fixed)

直前 commit で `definition: '...'` の plain string を 20 entries に追加したが、Audit Task 77/82 の required shape は `definition: { en, ja, ko, zh }` の多言語 object。Audit が "current working tree already has X but it's wrong shape" と明記。

**変更:** 全 20 concepts の `definition` field を string → `{ en, ja, ko, zh }` object に変換。Audit が Task 82 で示した content corrections も適用:

| Concept | 修正前 | 修正後 |
|---|---|---|
| `love` | "Noun (affection); not the verb" | "Basic word/root for love or affection — noun or verb citation form depending on language" (zh 愛/yue 愛/vi yêu/th รัก が verb-like の現状を反映) |
| `heart` | "anatomical OR mind/soul, depending on language" | "Default: basic emotional/cognitive heart/mind term; use anatomical only where it is the normal basic word" (default 明示) |
| `eat`/`drink` | "perfective 3ms for Semitic" hardcoded | "use the language's normal dictionary/citation convention; document exceptions with wordEvidence.note" (Hebrew は infinitive, Arabic は perfective という現状反映) |
| `cat` | "sex-neutral preferred where the language distinguishes" | "use the normal generic/citation form for that language, and note gender if it matters" |

UI hover 表示は次フェーズ (Audit Task 95 が "concept-definition UI not depend on hover only" と指示) — schema layer のみ整備。

### Task 86: Validator check for definition shape (✅ Added)

[validate_wordmap_data.js:432-446](validate_wordmap_data.js#L432-L446) に check #12b' 追加:
- `definition` が string なら WARN (legacy partial implementation)
- `definition` が non-null object でなければ ERROR
- `definition.en` 必須 (ERROR)
- `definition.ja`/`ko`/`zh` priority UI langs 欠落で WARN

これで future Claude session が plain string definition を accidentally 追加しても warning が出る。

### Task 85: Stress edits 受領確認 (acknowledge & retain)

Audit Task 85 が「Italian/Spanish/Polish の stress 追加は Task 76 (pronunciationType schema) 後に行うべきだった、prematureだ」と指摘。Audit 自身が **"Do not revert already-added stress marks solely because of this note"** と明記。

**現状:** 既存 stress edits は keep。`pronunciationType` schema が追加された段階で再評価予定。Italian/es_eu/Polish は確認後 `pronunciationType: 'ipa'` 候補だが、source citation も必要 (Task 80)。

### Pass 7+ deferred (要 schema decision)

以下は major refactor / policy decision が前提:
- Task 76 `pronunciationType` schema (UI 列ラベルが IPA / broad / orthography のどれか)
- Task 79 `coverage` flag for regional variants (zh_db = base-copy 等)
- Task 84 `surfaceType` schema for non-Latin scripts
- Task 95 concept-definition UI (hover-only でなく click/tap-friendly)
- Task 87 meta fields は wordmap_meta.js に追加 (wordmap_data.js でなく)
- Task 134 cache-buster 中央集約
- Task 109 custom code documentation + validator

これらは 1 commit で解決できないため、追って incremental に対応。

---

## Validator 結果

```
ERRORS:   0
WARNINGS: 0
ALLOWLISTED: 1  (mon/mnw)
INFOS:    3
  · 101 word entries contain "—"
  · 26 duplicate-coordinate groups
  · wordEvidence overlay: 23 languages, 172 cells annotated
PASS
```

Cache buster `v=46 → v=62` (data) / `v=16 → v=25` (meta, +Tasks 84/95/99/105/109/118/121/128)。Centralized via `WM_ASSET_VERSION`.

---

## Next Steps (推奨優先順)

1. **Phase 4 (concept definitions) schema 設計** — WORD_LIST に definition 追加、modal で hover/tooltip 表示
2. **Pronunciation column policy decision** — IPA strict vs broad transcription を user に確認、その後 family-wide cleanup
3. **Coverage/confidence flag schema** — regional variant rows (zh_db, ko_kp, fr_qc, Spanish regional) に partial/full flag 追加
4. Codex 8 残 / mnp Min Bei fire 等の既存 deferred items

---

## Pass 8 Sequential Cleanup (2026-05-06)

監査の Education-Grade Roadmap 中、未対応だったタスクを順次対応。

| Task | 対応内容 | Files |
|---|---|---|
| Task 88 | Exact-duplicate regional rows に `coverageNote` 追加 + UI render: `zh_db`/`es_co`/`es_pe`/`es_cu`/`fr_be`/`fr_af`/`fr_ch` を `base-copy-with-notes` 化、根拠は wordmap_data.js fingerprint 比較 | wordmap_meta.js, wordmap.html |
| Task 120 | Suspicious same-form duplicate cells に `wordEvidence` 注釈: `lus` (drink/house "in"), `myp` (heart/good aoʔaago), `enq` (fire/tree ita), `mpt` (sun/good kep, mother/love na), `ygr` (love/hello amige), `sukh` (eat/drink กิน) | wordmap_data.js |
| Task 122 | `HIST_DESCENDANT` を `wordmap.html` から `wordmap_data.js` へ移動。validator は ctx.HIST_DESCENDANT を直読みし、regex scrape は legacy fallback として保持 | wordmap_data.js, wordmap.html, validate_wordmap_data.js |
| Task 131 | `meta.locationBasis` を canonical に明文化。top-level `lang.locationBasis` は deprecated warning。`LANG_DATA['ja'].locationBasis` を `meta.locationBasis` に移動 | wordmap_meta.js, validate_wordmap_data.js, CONTRIBUTING.md |
| Task 137 | `<h2>` の dialog heading に `id="lang-info-heading"` を追加。dialog の `aria-labelledby` 参照が壊れていた問題を解消 | wordmap.html |
| Task 138 | Legacy sentence-map スクリプト (`add_new_langs.py`/`add_egy.py`/`add_sa_la.py`/`add_languages.py`) に `LEGACY SENTENCE MAP TOOL` ヘッダと `--i-know-this-edits-data-js` 安全フラグを追加 | add_*.py |
| Task 139 | README に Word Map バリデーション節 (`node validate_wordmap_data.js`) を追加。en/ja 双方更新 | README.md |

**Validator status**: PASS (0 errors, 17 pre-existing warnings — all i18n description coverage). wordEvidence overlay は 28→34 langs / 201→215 cells に拡大。

---

## Pass 9 Sequential Cleanup (2026-05-06 part 2)

引き続き Education-Grade Roadmap の未対応タスクに対応。

| Task | 対応内容 | Files |
|---|---|---|
| Task 107 | Public count string drift check 強化: SEO/OG/Twitter description / `<title>` を validator が個別に検査 | validate_wordmap_data.js |
| Task 110 | High-coverage historical rows に `meta.sources` 追加 (12 langs: la, el_grc, en_ang, non, sa, pal, xct, ja_edo, ja_heian, ko_mid, ko_em, vi_nom) | wordmap_meta.js |
| Task 111 | wordEvidence あり source なし modern rows に `meta.sources` 追加 (10 langs: nv, haw, pjt, kwk, pwn, bnn, trv, glk, lrc, bqi) | wordmap_meta.js |
| Task 130 | `meta.scriptTags` schema + 7 misclassified rows ラベル付け (`hak_cn`/`cdo` Han, `ine` None/reconstructed, `sukh` Brahmic, `zkt` Khitan, `juc` Jurchen, `och` Han historical)。lang-filter.js が curated tags 優先、regex も `Khitan`/`Jurchen`/`Sukhothai`/`Oracle bone` 等を追加認識。validator が enum 検証 | wordmap_meta.js, lang-filter.js, validate_wordmap_data.js |
| Task 135 | Map labels (`.lang-label`/`.globe-label`/`.unattested-marker`) を `role="button"` + `tabindex="0"` + `aria-label` で keyboard accessible に。`focus-visible` ring 追加。2D map container と globe container の双方に Enter/Space keydown handler 追加 | wordmap.html |

**Validator status**: PASS (0 errors, 17 pre-existing warnings — same as Pass 8). HTML/data/meta/filter 全て syntax OK。Cache-buster は filter 22→23、meta 31→32 bump 済。

---

## Pass 10 Sequential Cleanup (2026-05-06 part 3)

| Task | 対応内容 | Files |
|---|---|---|
| Task 113 | Modal に parent/variety relation 行を表示: 「Regional variety of: <parent>」「Sibling language」「Continuum member」「Base variety」を localized で render (en/ja/ko/zh) | wordmap.html |
| Task 114 | 既に実装済を確認 (NFD accent normalization + meta.aliases + iso6393 + canonicalCode の検索対応) | (no change) |
| Task 115 | Duplicate display/native name 用 `meta.disambiguator` schema 追加 (string or {en,ja...} object)。`mn_cn`/`xng` (ᠮᠣᠩᠭᠣᠯ) と `omx`/`mnw` (ဘာသာ မန်) に注記。modal と search results の両方に表示。validator が schema 検証 | wordmap_meta.js, wordmap.html, validate_wordmap_data.js |
| Task 126 | 全 underscore variant 行に `parentCode` / `varietyRole` 付与。Sensitive cases (Ryukyuan ja_oki/mvi/rys, ko_jeju=sibling-language, th_isan=continuum-member, hak_cn/es_eu/pt_eu=base) を尊重し、straightforward 10行 (ko_yb/mn_cn/fr_ch/es_co/es_cl/ja_kg/ja_sd/ko_jl/ko_hg/wuu_nb) に parent 紐付け。`ja_chu`/`ko_gor` を `historical-stage` に正分類 | wordmap_meta.js, validate_wordmap_data.js |
| Task 136 | Language search を ARIA combobox + listbox 化: input に `role=combobox`, `aria-autocomplete=list`, `aria-expanded`, `aria-controls`, `aria-activedescendant` 追加。Result item に `role=option`, stable id, `aria-selected`, `aria-disabled` 追加。Arrow Up/Down/Enter/Escape のキーボード操作追加 | wordmap.html |
| Task 137 (part 2) | Dialog focus management: `_lastDialogOpener` で opener を捕捉、close 時に opener へ focus restore (要素が DOM から消えていれば search input にフォールバック)。dialog に `tabindex="-1"` 追加 | wordmap.html |

**Validator status**: PASS (0 errors, 17 pre-existing warnings)。codeType breakdown は regional-variant 77→75, historical-stage 5→7 (`ja_chu`/`ko_gor` 正分類)。HTML/data/meta/filter 全て syntax OK。Cache-buster は meta 32→33 bump 済。Pass 8+9+10 合計 18 タスク対応完了。

---

## Pass 11 Sequential Cleanup + User Fixes (2026-05-06 part 4)

### User-reported fixes

| Issue | 対応内容 | Files |
|---|---|---|
| 「単語が無い言語の存在が見えない」 | Unattested marker (—) を zoom ≥ 4 で言語名のラベル化 (薄いイタリック)、zoom ≤ 3 のみ従来のドット維持。2D/3D 両方に適用 | wordmap.html |
| 「契丹小文字・女真の漢字表記が確認できない」 | `juc` (女真) に『女真譯語』9件を `altWordForms` で追加 (木克・脱瓦・順・厄默・阿馬・引荅渾・噶剌・牙撒・厄木)。`zkt` (契丹) は Kane (2009) 等の一次資料未確認のため `altWordForms: {}` に明示コメント付。Modal table に併記表示 | wordmap_data.js, wordmap.html |
| 「上代日本語にひらがながあるのはおかしい」 | `ojp` (Old Japanese 上代日本語) の 5 cells に混入していたひらがなを万葉仮名に修正: 食ぶ→多夫、飲む→能牟、愛し→加奈志、一つ→比登都、良し→与之 (全て Man'yōshū 等で attested)。`wordEvidence` で出典明記 | wordmap_data.js |

なお、ja_heian (平安京言葉, 794-1185) はひらがな成立期 (古今和歌集 905年, 源氏物語 1008年) の言語なのでひらがな使用は歴史的に正しい。ja_chu/ja_edo も成立後の時代で問題なし。修正は ojp のみ。

### Audit roadmap tasks

| Task | 対応内容 | Files |
|---|---|---|
| Task 96 | 既に safeUrl + escapeHtml + rel=noopener 実装済を確認、validator が `meta.sources URL "..." not http(s) — rejected (Audit Task 96)` で error 投げ済 | (no change) |
| Task 101 | Evidence marker (`*`/`?`/`◇` 等) を `role=button` + `tabindex=0` + `aria-label` 化、click/Enter で詳細を行下にインライン展開 (.ev-detail-row)。focus-visible ring 追加 | wordmap.html |
| Task 112 | Era 切替の隣に `?` ヘルプアイコン追加。Modern/Historical で異なる説明 (en/ja/ko/zh): Modern=「現代言語のみ」/ Historical=「歴史言語＋現代後裔(赤色)も参照表示」。era切替/UI言語変更で再描画 | wordmap.html |
| Task 125 | 起動時に `typeof L === 'undefined'` / `typeof Globe === 'undefined'` を検出。Leaflet 失敗時はマップ領域に localized error カード表示+init halt。Globe.gl のみ失敗時は 3D ボタン disabled+title 説明、2D は通常動作 | wordmap.html |
| Task 129 | RTL/bidi: `.wm-form` (`unicode-bidi: isolate`) と `.wm-ipa` (`unicode-bidi: isolate; direction: ltr`) CSS 追加。Modal の word/native-name と map labels (word/name) に `dir="auto"` 適用、IPA は `dir="ltr"` 強制 | wordmap.html |

**Validator status**: PASS (0 errors, 17 pre-existing warnings — 全て description i18n 関連で今回スコープ外)。HTML inline scripts (3 blocks)・data/meta/filter とも syntax OK。Cache-buster は data 85→86 bump 済 (CDN-fallback IIFE 1 block 追加で計 3 inline scripts)。

Pass 8+9+10+11 合計 **24 タスク + ユーザー要望 3 件** 対応完了。

---

## Pass 12 Sequential Cleanup (2026-05-06 part 5)

| Task | 対応内容 | Files |
|---|---|---|
| Task 103 | `wordEvidence.formType` enum 追加。Hyphen-marked 行 (`iu`/`ine`/`xpr`/`bsk`/`ng`/`kmb`/`her`/`toi`/`smg`/`xqa`/`wbl`/`psi`/`xsc`/`sog`/`otk`/`pry`) の bound-stem / reconstructed-root / agreement-stem を annotate。Modal evidence tooltip に `[bound stem]` 等を表示 (en/ja/ko/zh) | wordmap_meta.js, wordmap.html, validate_wordmap_data.js |
| Task 108 | `meta.reviewStatus` schema (`unreviewed`/`machine-seeded`/`human-reviewed`/`source-checked`/`needs-rebuild`)。25 langs 初期ラベル: 出典確認済 (ja/zh/wuu/nv/haw/pjt/nxq/tji/pcc/iuu/kwk/pwn/bnn/trv/la/el_grc/en_ang/non/sa/pal/xct/glk/lrc/bqi/juc) と 再構築要 (lo/my/km/bo/khb/shn/lhu/mra/xkk/wbm/zkt)。Modal に色付きバッジ (緑/赤/灰) | wordmap_meta.js, wordmap.html, validate_wordmap_data.js |
| Task 110/111 | `nxq`/`pcc`/`iuu`/`juc`/`tji` の lang-level `meta.sources` 追加 (Pass 9 漏れ。reviewStatus=source-checked との整合性) | wordmap_meta.js |
| Task 123 | `popstate` + `hashchange` リスナー追加。`applyHashState()` で URL 状態を再適用、フィードバックループ防止のため `window.__langmap.isApplyingHash()` ガードを `updateHash()` に追加。ブラウザ Back/Forward と manual hash edit が動作するように | wordmap.html |
| Task 124 | Header nav の hardcoded `語順マップ`/`単語マップ` を `Word Order`/`Word Map` (英語デフォルト) に変更。`applyUILang()` が NAV_ORDER/NAV_WORD で UI 言語に切替 (既存仕組み) | wordmap.html |
| Task 140 | GitHub Actions workflow `.github/workflows/wordmap-validate.yml` 追加。PR/push (main/develop) で `node validate_wordmap_data.js` と inline-script syntax check を実行 | .github/workflows/wordmap-validate.yml (new) |

**Validator status**: PASS (0 errors, 17 pre-existing description-i18n warnings — Pass 11 と同じ)。formType / reviewStatus / sources の各 schema 検証が validator に組み込まれた。HTML inline scripts (3 blocks) / data / meta 全て syntax OK。Cache-buster は meta 33→34 bump 済。

Pass 8〜12 で **30 タスク + ユーザー要望 3 件** 対応完了。

---

## Pass 13 Sequential Cleanup (2026-05-06 part 6)

| Task | 対応内容 | Files |
|---|---|---|
| Task 92 | Validator が WM_UI（en）+ I18N_STRINGS（en）の必須キーを検査。Audit Task 106 の ARIA キー (ariaSelectWord/ariaUiLanguage 等 13 個)、`eraHelpModern/Historical`、`searchPlaceholder/noMatch/eraFilterOffHint/sources/modernDescendant/historicalAncestors` を必須化。`REVIEW_STATUS_LABEL/HEADER` も TRUST_LABEL_CONSTS に追加 | validate_wordmap_data.js |
| Task 97 | `wordEvidence` に `formEvidence`/`pronunciationEvidence`/`conceptEvidence` の 3 split 追加 (enum 検証)、`url`/`accessed` フィールドも検証 (http(s) + ISO date)。Modal evidence tooltip が split を `{form: direct; pron: proxy; concept: noted}` 形式で表示、URL も併記 | validate_wordmap_data.js, wordmap.html |
| Task 98 | Priority langs 8 行に `speakerBasis`/`speakerSource`/`speakerYear`/`iso6393`/`glottocode` backfill (it/uk/ko/th/vi/ms/tl/he)。Modal speakers セルに `(L1, Ethnologue 27, 2024)` 形式で表示 | wordmap_meta.js, wordmap.html |
| Task 104 | Multiword 行の lexical concept (water/fire/tree/hand/eye/one/sun/moon/heart/dog/cat/house) 用の validator 警告追加。INFO で multiword by-concept サマリ。`vi/vi_c/vi_s` mặt trời/trăng/trái tim、`kha` article+noun、Polynesian tumu X、Akha 等 24 行に `formType: 'compound'` 注釈で warning 解消 | wordmap_meta.js, validate_wordmap_data.js |
| Task 117 | `lang-filter.js` の `featuresFor()` に `provenance: { wo, tone, morph }` 追加 (`manual-override`/`family-default`/`unknown`)。`window.__langmap.getFeatures()` で expose。Modal に類型 (語順/声調/形態論) を表示し各値に provenance タグ (lang/family/?) を緑/灰/極淡で色付け | lang-filter.js, wordmap.html |
| Task 106 | I18N_STRINGS に 13 個の ARIA キー (ariaSelectWord/ariaUiLanguage/ariaMapZoom/ariaZoomIn/Out/aria2D3D/ariaToggleForm/Pron/Name/ariaNameGroup/ariaFontSize/ariaCloseInfo/ariaEraGroup) 追加 (en/ja/ko/zh)。`applyUILang()` が UI 言語変更時に各 control の aria-label を動的設定 | wordmap.html |

**Validator status**: PASS (0 errors, 17 pre-existing description-i18n warnings — Pass 11/12 と同じ、変動なし)。新 schema (formEvidence/url/accessed/multiword formType) も全て enum/format 検証済。Cache-buster は filter 23→24, meta 34→35 bump。

Pass 8〜13 累計 **36 タスク + ユーザー要望 3 件** 対応完了。

---

## Pass 14 Sequential Cleanup (2026-05-06 part 7)

| Task | 対応内容 | Files |
|---|---|---|
| Task 81 | CONTRIBUTING.md に **C2. Pronunciation / IPA Policy** 節追加。`pronunciationType` の各値 ('ipa'/'broad'/'romanization'/'orthography'/'mixed'/'unknown') ごとに stress/tone 要件を明文化。Stress policy: 'ipa' タグ済 OR 全 20 cell sourced rebuild 時のみ追加可、機械的 spelling 由来追加禁止 | CONTRIBUTING.md |
| Task 90 | Row-fingerprint comparison validator 追加。Exact (20/20) duplicate / surface-only duplicate / parent-child high overlap (18+/20) を検出。既ラベル済の duplicate group は INFO、未ラベルは WARN | validate_wordmap_data.js |
| Task 116 | Unicode/font/script rendering audit 追加。全データから使用 script を検出 (現在: Coptic/Egyptian Hieroglyphs/Meroitic/Mongolian/New Tai Lue/Old Turkic/Sundanese/Tagalog/Tangut/Tibetan の 10 script)、必要 font が wordmap.html font stack に無ければ WARN。検出した抜け (Noto Sans New Tai Lue) を fontStack + Google Fonts URL に追加。NFC normalization も併せて check | validate_wordmap_data.js, wordmap.html |
| Task 127 | LocationBasis priority backfill 12 行追加: diaspora/revived (yi/rom/lad/ain/haw/chr) と regional varieties (wuu/hak_cn/ko_yb/mn_cn/th_isan/fr_af) | wordmap_meta.js |
| Task 133 | `wordEvidence.citation` structured object schema 追加 (`short`/`type`/`title`/`author`/`year`/`url`/`page`/`accessed`)。Type enum: dictionary/grammar/inscription/wordlist/database/article/internal-review/reference。Modal evidence tooltip が citation を `Kane 2009 (dictionary)` 形式で表示、URL も併記 | validate_wordmap_data.js, wordmap.html |

**Validator status**: PASS (0 errors, 17 pre-existing warnings, 29 INFOs)。新 INFOs に scripts in use / row-fingerprint duplicate groups / multiword summary が含まれる。Cache-buster は meta 35→36 bump。

Pass 8〜14 累計 **41 タスク + ユーザー要望 3 件** 対応完了。

---

## Pass 15 Sequential Cleanup (2026-05-06 part 8)

| Task | 対応内容 | Files |
|---|---|---|
| Task 80 | Priority langs 8 行に `meta.sources` backfill (it/uk/ko/th/vi/ms/tl/he)。Ethnologue 27 + 各言語の権威辞書 (Treccani / СУМ / 표준국어대사전 / Royal Society of Thailand / Kamus Dewan / KWF / Pealim 等) | wordmap_meta.js |
| Task 89 | Modal に `surfaceType` バッジ追加 (native-script / standard-orthography / romanization / phonetic / mixed / unknown)。en/ja/ko/zh ローカライズ + validator の TRUST_LABEL_CONSTS にも追加 | wordmap.html, validate_wordmap_data.js |
| Task 94 | Romanization-vs-IPA validator 追加 (`[#94]`)。非ラテン文字 surface + ASCII-only IPA で `pronunciationType` 未指定の行を WARN。検出した 32 行 (sah/kjh/alt/bxr/ain/mnc/ln/ja_edo/ja_chu/lez/tab/kv/myv/krc/syl/xal/xlu/elx/kaw/bqi/yag/wbl/xng/tar/onw/otl/ojp/okg/ko_gor/xmr/pyx/obr) を `broad` または `romanization` でラベル付け。pronunciationType coverage 162→194 (33% → 33%) | wordmap_meta.js, validate_wordmap_data.js |
| Task 119 | Khitan (zkt) に `scriptDisplayPolicy` schema 追加 (primary: 'scholarly-transcription', secondary: 'historical-script' + 4-language note)。Modal の script row 下に italic note 表示。Validator が schema enum + note 検証 | wordmap_data.js, wordmap.html, validate_wordmap_data.js |

**Validator status**: PASS (0 errors, 17 pre-existing description-i18n warnings — Pass 14 と同じ、変動なし)。pronunciationType coverage が 162 → 194 langs に拡大、scripts in use 検出 + script-font 抜け検出も正常動作。Cache-buster は data 86→87, meta 36→37 bump。

Pass 8〜15 累計 **45 タスク + ユーザー要望 3 件** 対応完了。

---

## Pass 16 Sequential Cleanup (2026-05-06 part 9)

新たに監査ファイルに追加された Task 141 (Tier 1 missing languages) に対応。

| Task | 対応内容 | Files |
|---|---|---|
| Task 141 | **既存確認**: `bua` Buryat → `bxr` で既存、`chm` Mari → `mhr` (Meadow Mari) で既存、`tw` Twi → `ak` (Akan (Twi)) で既存。実質追加すべき 8 言語のうち 4 言語を本パスで追加: <br>**`cv` Chuvash** (Oghur Turkic 唯一の現存分岐、~1M 話者、Cheboksary)、<br>**`mdf` Moksha** (Mordvinic 系、`myv` Erzya の姉妹、~250K、Saransk)、<br>**`tzh` Tzeltal** (Mayan、`tzo` Tzotzil の姉妹、~600K、Ocosingo)、<br>**`dv` Dhivehi** (Indo-Aryan、Thaana RTL 文字、Maldives 公用語、Malé)。<br>各言語に 20-word entries (sourced) + meta (family/speakers/Ethnologue 27/iso6393/script/description) + LANG_NAMES (en/ja/ko/zh + 16他言語)。Total 言語数 591 → 595。<br>残り 4 言語 (`kpv` Komi-Zyrian / `koi` Komi-Permyak / `bcl` Central Bikol / `rmy` Vlax Romani) は次パス以降で出典付き追加 | wordmap_data.js, wordmap_meta.js, lang_names.js, wordmap.html, README.md |

**Validator status**: PASS (0 errors, 17 pre-existing warnings — language count update以外 unchanged)。Languages: 595 (modern: 509, historical: 86)。Cache-buster は data 87→88, names 5→6, meta 37→38。

Pass 8〜16 累計 **46 タスク + ユーザー要望 3 件** 対応完了 (+ 4 言語追加 で 591→595 langs)。

---

## Pass 17 Sequential Cleanup (2026-05-06 part 10)

### Task 141 残り完了

| Code | 言語 | 系統 | 話者数 | 既存確認 |
|---|---|---|---|---|
| `kpv` | コミ・ジリエン (Komi-Zyrian) | Permic Uralic | ~140K | 新規（macro `kv` のISO 639-3 標準コード） |
| `koi` | コミ・ペルミャク (Komi-Permyak) | Permic Uralic | ~63K | 新規 (`kpv` の姉妹言語) |
| `rmy` | ヴラフ・ロマ語 (Vlax Romani) | Indo-Aryan (Romani) | ~1.5M | 新規 (macro `rom` の最大方言群) |
| `bcl` | Central Bikol | — | — | **既存 `bik` で対応済** |

### Task 142 部分対応

| Code | 言語 | 系統 | 話者数 |
|---|---|---|---|
| `smj` | ルレ・サーミ | Uralic (Saami) | ~2K |
| `smn` | イナリ・サーミ | Uralic (Saami) | ~400 (危機言語) |
| `sms` | スコルト・サーミ | Uralic (Saami) | ~300 (危機言語) |
| `vep` | ヴェプス | Uralic (Finnic) | ~1.6K (危機言語) |
| `vot` | ヴォート (Votic) | Uralic (Finnic) | ~10 (近絶滅) |

各言語に: 20-word entries (Wiktionary/Ethnologue 27 ベース) + meta (family/speakers/iso6393/script/description/sources/parentCode/varietyRole) + LANG_NAMES (21 UI 言語分)。`kpv` は `kv` と同データで `coverage: 'base-copy-with-notes'` 明示。`pronunciationType: 'broad'` 付与。

### Task 142 残り — Sign languages 等の明示的延期

監査 Task 142 の **Option C (defer)** を採用:

**Sign languages** (`ase`/`bfi`/`jsl`/`fsl`/`gsg`/`gss`/`csl`/`kvk`):
- 手話言語は modality（音声/書字とは異なる伝達様式）が前提的に異なるため、surface/IPA カラムの抽象化を根本から見直す必要がある
- SignWriting (Sutton, Unicode U+1D800–U+1DAAF) または video URL 参照のいずれかを採用するかは設計判断が必要
- 現データモデル (`[surface, ipa]`) では誤った含意を生むので、**modality schema 設計まで延期**
- `meta.modality: 'signed'` + IPA-validation skip ルール + 独自 surface 表示は別 task として将来追加

**残りの Task 141/142 言語** (低優先度):
- `rhg` Rohingya: Hanifi script 対応＋出典確認に追加調査が必要
- `ctg` Chittagonian: Bengali macro `bn` との境界線議論を要する
- `itl` Itelmen, `yux` Yukaghir: 近絶滅言語、出典を要する

これらは次回以降のパスで個別出典付きで対応予定。

**Validator status**: PASS (0 errors, 17 pre-existing warnings — Pass 16 と同じ)。Languages: **603** (modern 517, historical 86)。Cache-buster は data 88→89, names 6→7, meta 38→39 bump。

Pass 8〜17 累計 **46 タスク + Tier 1 言語 4 + Tier 1 残 + Tier 2 partial で計 8 言語追加** (591→603 langs)。

---

## Pass 18 Sequential Cleanup (2026-05-06 part 11)

監査ファイルに新規追加された **Verification Sweep** (Tasks 143-148) に対応。

| Task | 対応内容 | Files |
|---|---|---|
| Task 143 | **完了確認**: Pass 16/17 で cv/dv/tzh/mdf/kpv/koi/rmy/smj/smn/sms/vep/vot は既に全 21 UI 言語の lang_names 入り。bxr/nci も既存。validator の lang_names 警告は既に 0 | (verified) |
| Task 145 (Phase A) | 19 行の string-form `description` を `{ en: '...' }` object 形式に機械的変換 (cv/dv/tzh/mdf/kpv/koi/rmy/smj/smn/sms/vep/vot/azb/gag/arq/mey/sma/vro/tmh)。validator の string-description 警告も full enumeration に拡張。Phase B (ja/ko/zh translations) は次回以降 | wordmap_meta.js, validate_wordmap_data.js |
| Task 148 | `ja_kyo`/`ja_heian`/`ja_chu` の同一 Kyoto 座標 (35.01, 135.77) クラスタを分散: <br>- `ja_kyo` 京都御所 (35.01, 135.77) — 維持<br>- `ja_heian` → 平安京西側 / 平安宮跡 (35.05, 135.74)<br>- `ja_chu` → **鎌倉** (35.32, 139.55) — 平家物語 (鎌倉期成立) を主資料とする本行の地理的整合 | wordmap_data.js |

**Validator status**: PASS (0 errors, **15 warnings** ↓ from 17)。`[#14]` coord cluster 警告 + string-description 警告が解消。残り 15 はすべて pre-existing description-i18n coverage 関連 (Task 144 の対象)。Cache-buster は data 89→90, meta 39→40 bump。

### 残 (新タスク 144/146/147)
- **Task 144**: 15 UI 言語の description-i18n を 95% threshold 以上に。最も影響が大きい batch (ja_chu/pry/oko/okg/ko_gor 等の歴史言語+最近追加分の翻訳)。次回以降の重い翻訳作業
- **Task 146**: Pass 7 deferred (`my`/`km`/`id`/`ms`/`tl`/`ta`/`te`/`bo`) per-language IPA rebuilds — 各言語 source-cited rebuild が必要
- **Task 147**: Pass 2-6 deferred policy items — CONTRIBUTING.md への大幅追加が先行必要

Pass 8〜18 累計 **49 タスク + 12 言語追加** (591→603) + 4 件の verification 完了。

---

## Pass 19 Sequential Cleanup (2026-05-06 part 12)

監査ファイル新規追加 **Tasks 147/149/150** に対応。

### Task 147: CONTRIBUTING.md ポリシー文書追加
新節 **C3. Column conventions and concept policies** を追加。Pass 2-6 で deferred されていた policy 決定を明文化:
- Tone/stress notation (Sinitic Chao tone letters / Spanish-Russian stress required)
- Affricate notation (ASCII tolerated for broad; tie-bar for ipa)
- Verb forms (IE infinitive / Arabic 3ms perfective / Hebrew infinitive — explicit per-family)
- Concept scope (heart 感情中心 default / mother・father neutral / one masculine default)
- Mandarin 第3声 sandhi: citation tone を維持
- Quebec French: regional-variety + partial coverage policy

### Task 149 Batch 1+5: Polynesian/Pacific + Constructed IALs 追加

| Code | 言語 | 系統 | 話者数 | 備考 |
|---|---|---|---|---|
| `tah` | タヒチ | Polynesian (Tahitic) | ~70K | French Polynesia 公用語、Tahitic 系統の語源 |
| `en_nz` | English (New Zealand) | Germanic | ~4M | NZ short-front-vowel shift、Māori 借用語多数 |
| `vo` | ヴォラピュク (Volapük) | Constructed IAL | <30 active | 1879 Schleyer、Esperanto より早い IAL |
| `ia` | インターリングア (Interlingua) | Constructed IAL | ~1.5K active | 1951 IALA、自然主義 IAL |
| `ho` | Hiri Motu | — | — | **既存 `hmo` で対応済** |

### Task 150 Batch G: Horn-of-Africa 追加

| Code | 言語 | 系統 | 話者数 |
|---|---|---|---|
| `byn` | Blin (Bilen) | Cushitic Agaw | ~110K | Eritrea 唯一の Agaw 分岐 |

### Task 150 Batch I (nmn Taa) — 明示的延期

監査自身が「Do not add nmn Taa as a non-IPA row」と明記。Traill (1985) *Phonetic and Phonological Studies of !Xóõ Bushman* および Naumann (2008) の per-cell 出典確認なしに click + phonation 表記をするのは禁則のため、**直接出典が確認できる将来パスまで延期**。Khoisan max-inventory 言語の追加 educational value は高いが、出典なしでは misleading。

### Validator + 言語数

- ERRORS: 0 (修正: speakerBasis enum に `L2` 追加 ←IAL 用)
- WARNINGS: 16 (Pass 18 の 15 → +1 は新言語追加に伴う i18n 関連、ベースラインに復帰見込み)
- Languages: **608** (modern 522, historical 86) — Pass 18 から +5
- Cache-buster: data 90→91, names 7→8, meta 40→41

### 残（次回以降）
- **Task 144**: 15 UI lang description-i18n の 95% 達成（重い翻訳作業）
- **Task 145 Phase B**: ja/ko/zh translations for converted descriptions
- **Task 146**: my/km/id/ms/tl/ta/te/bo per-language IPA rebuild
- **Task 149 残 Batches 2/3/4**: kea/rcf/crs/gcf/pis (creoles 5)、kam/ses/tem (African 3)、oto (Otomi tone+phonation)
- **Task 150 残 Batches F/H/J**: laj/cgg/ttj/nyo (Uganda 4), jrb (Andamanese), CONTRIBUTING.md "Conscious omissions" 節

Pass 8〜19 累計 **52 タスク + Tier 1/2/3/3.5 で 17 言語追加** (591 → 608)。

---

## Pass 20 Sequential Cleanup (2026-05-06 part 13)

### Task 150 Batch J — Conscious omissions doc
CONTRIBUTING.md に **C4. Languages intentionally not represented as rows** 節を追加。Whistled languages (Silbo Gomero, Mazatec whistled 等)、Signed languages (Task 142 cross-link)、Drum languages、Thieves' cant 等を schema 不適合として明記。

### Task 150 Batch F — Uganda Bantu/Nilotic 追加 (4 言語)

| Code | 言語 | 系統 |
|---|---|---|
| `laj` | ランゴ (Lëblaŋo) | Western Nilotic Lwoo |
| `cgg` | チガ (Rukiga) | Bantu JE Runyakitara |
| `ttj` | トーロ (Rutooro) | Bantu JE Runyakitara |
| `nyo` | ニョロ (Runyoro) | Bantu JE Runyakitara |

Runyakitara クラスタ (cgg/ttj/nyo + 既存 nyn) で Uganda Bantu の coverage が完成。`laj` は既存 `ach` Acholi/`luo` Luo の sister。

### Task 149 Batch 3 partial — Kenyan Bantu

| Code | 言語 | 系統 |
|---|---|---|
| `kam` | カンバ (Kĩkamba) | Bantu E70, ~4M, Kenya |

### Task 149 Batch 2 partial — 大型 creole

| Code | 言語 | 系統 |
|---|---|---|
| `kea` | カーボベルデ・クレオール | Portuguese-based creole, ~870K |
| `pis` | ソロモンズ・ピジン (Pijin) | English-based Melanesian Pijin |

### 重複削除
- `tah` Tahitian: 既存 `ty` (ISO 639-1 同言語) と重複していたため**削除**

### Validator
- ERRORS: 0
- WARNINGS: **17** ↑ (description-i18n 17 件、新言語追加分は normalize 済)
- Languages: **614** (modern 528, historical 86) — Pass 19 から +6
- 新 family token (`Atlantic-Congo`, `Portuguese-based creole`) を allow-list 追加
- ttj/nyo Tooro-Nyoro 重複: 両方に coverage 付与で警告解消
- Cache-buster: data 91→92, names 8→9, meta 41→42

### 残（次回以降）
- **Task 144**: 重い翻訳作業 (15 UI lang × ~60 codes)
- **Task 145 Phase B**: ja/ko/zh translations
- **Task 146**: my/km/id/ms/tl/ta/te/bo per-language IPA rebuild
- **Task 149 残**: rcf/crs/gcf (creoles 3)、ses/tem (African 2)、oto (Otomi tone+phonation)
- **Task 150 Batch H**: jrb (Andamanese, ~3 speakers)
- **Task 150 Batch I**: nmn Taa (Khoisan, Traill 1985 出典待ち)

Pass 8〜20 累計 **53 タスク + 23 言語追加 - 1 重複削除** (591 → 614)。

---

## Pass 21 Sequential Cleanup (2026-05-06 part 14)

### Task 149 残 Batch 2/3 — 5 言語追加

| Code | 言語 | 系統 | 話者数 |
|---|---|---|---|
| `rcf` | レユニオン・クレオール | French-based creole | ~600K |
| `crs` | セーシェル・クレオール | French-based creole | ~73K |
| `gcf` | グアドループ・クレオール | French-based creole | ~430K |
| `tem` | テムネ (KʌThemnɛ) | Atlantic-Congo Mel | ~1.5M |
| `ses` | コイラボロ・センニ | Songhai (genealogically isolated) | ~430K |

`mfe` Mauritian + `rcf` Réunion + `crs` Seychellois でインド洋 French-creole 三角構造完成。`gcf` でカリブ海 French-creole 拠点追加。`tem` でシエラレオネ Mende-Themne ペア完成。`ses` で Sahel 交易回廊 Songhai 拠点追加。

各言語に: 20-word entries (Heath 1999 / Ludwig et al. 2002 / Bollée 2009 / Wilson 1961 等), full meta (sources, languageKind=pidgin-creole 該当言語), LANG_NAMES 21 UI 言語分。`Songhai` family token を validator allow-list 追加。

### Task 149 Batch 4 (oto Otomi) — 明示的延期

監査自身が要求する Lastra (1992, 1997) per-cell tone+phonation 出典が現状確認できないため**延期**。Otomi の register tone (high/low) × phonation (modal/breathy/creaky) は 20 セル全てを double-check する必要があり、出典不確認状態での追加は監査ポリシー違反。

### Validator + 数値
- ERRORS: 0
- WARNINGS: **20** (全て pre-existing description-i18n + 新言語の i18n)
- Languages: **619** (modern 533, historical 86)
- 新 family `Songhai` を allow-list 追加
- crs/gcf "tree = pyé bwa / pye dibwa" を `formType: 'compound'` 注釈
- Cache-buster: data 92→93, names 9→10, meta 42→43

### 残（次回以降）
- **Task 144**: 重い翻訳作業
- **Task 145 Phase B**: ja/ko/zh translations
- **Task 146**: per-language IPA rebuilds (8 langs)
- **Task 149 Batch 4**: oto Otomi (Lastra 1992/1997 出典待ち)
- **Task 150 Batch H/I**: jrb (Andamanese, Anvita Abbi 2012 待ち), nmn Taa (Traill 1985 待ち)

Pass 8〜21 累計 **53 タスク + 28 言語追加 - 1 重複** (591 → 619)。

---

## Pass 22 Sequential Cleanup (2026-05-06 part 15)

### Task 145 Phase B 完了

35 言語 (cv/dv/azb/gag/arq/mey/en_nz/kea/rmy/pis/sma/smj/smn/sms/vro/vo/ia/kam/ses/tzh/kpv/koi/mdf/vep/vot/cgg/ttj/nyo/tem/tmh/rcf/crs/gcf/laj/byn) に **ja/ko/zh の description translations** を追加。`DESC_JKZ` block を `wordmap_meta.js` の Phase A 直後に挿入し、欠如分のみ補完(冪等)。

#### 翻訳の方針
- 1-2 文に圧縮、modal 表示に最適化
- 言語学的に意味のある特徴(Oghur Turkic で唯一の現存、ALUPEC 正書法 2009、IALA 1951、ATR vowel system 等)を保持
- 出典・年代・話者数などの数字情報は en と整合
- 危機言語/復興運動状態を明記

### Validator/数値
- ERRORS: 0
- WARNINGS: **17** ↓ (20 → 17、description-i18n の ja/ko/zh threshold 抜けが解消)
- **ja/ko/zh description coverage: 100% (619/619 言語)** ← Pass 22 で達成
- Cache-buster: meta 43→44

### 残（重い作業のみ）
- **Task 144**: 残 13 UI lang (yue/vi/th/id/hi/it/es_eu/es_mx/pt_eu/pt_br/ru/uk/ar/he/sw) の description-i18n threshold 達成
- **Task 146**: my/km/id/ms/tl/ta/te/bo per-language IPA rebuilds
- **Task 149 Batch 4**: oto Otomi (Lastra 1992/1997 待ち)
- **Task 150 Batch H/I**: jrb (Anvita Abbi 2012 待ち), nmn Taa (Traill 1985 待ち)

Pass 8〜22 累計 **54 タスク + 28 言語追加 + ja/ko/zh 100% i18n 達成** (591 → 619)。
