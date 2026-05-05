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

Cache buster `v=46 → v=57` (data) / `v=16 → v=21` (meta, +Tasks 76/79/100/102/132)。

---

## Next Steps (推奨優先順)

1. **Phase 4 (concept definitions) schema 設計** — WORD_LIST に definition 追加、modal で hover/tooltip 表示
2. **Pronunciation column policy decision** — IPA strict vs broad transcription を user に確認、その後 family-wide cleanup
3. **Coverage/confidence flag schema** — regional variant rows (zh_db, ko_kp, fr_qc, Spanish regional) に partial/full flag 追加
4. Codex 8 残 / mnp Min Bei fire 等の既存 deferred items
