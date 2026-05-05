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
| §46 Naxi nxq surface contamination | ✅ Annotated as `disputed` | 2 |
| §48 Bouyei pcc tone letters → IPA Chao tones | ✅ Fixed | 20 |
| Systemic concept definitions | ⏸️ Schema work — Phase 4 候補 | — |
| Pass 2-6 family-wide IPA cleanup (Slavic ts, Turkic, Polynesian, etc.) | ⏸️ Deferred (要 family-wide review + source) | — |

**Total fixed:** 63 cells + 2 language reclassifications across 17 modern languages.

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

Audit reference: Cambridge JIPA は Japanese final moraic nasal の utterance-final realization を主に [ɴ] と記述。`ɴ` を採用。

これは historical lang (my Burmese, rki Rakhine) で Session 2 に既に行った同種正規化の modern 言語版。Word Map 全体で N → ɴ が一貫。

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

## §46 Naxi nxq — surface contamination annotated as `disputed` (✅ 2 cells)

Audit: `thanks: gbie-ɣ` の surface に IPA `ɣ` 混入、`one: ʈʂʰu-i` の surface に IPA `ʈʂʰ` 混入。Naxi pinyin の正しい source 不明のため、surface 値は keep + wordEvidence に `evidence: 'disputed'` + note 追加。Modal hover で user に "needs Naxi-pinyin source verification" と表示される。

将来の Session で Naxi 辞書 source を確認後に対応。

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
- §47-§58 Asian minority lang tone omission (Naxi/Bouyei/Iu Mien/Tai Lue/Shan/Lahu/Mlabri/Khmu/Wa/Tujia/Hmong/Zhuang/Jingpo/Akha) — 要 tone source per family

これらは概ね Session 43+ または schema phase 4-5 で対処候補。

---

## Validator 結果

```
ERRORS:   0
WARNINGS: 0
ALLOWLISTED: 1  (mon/mnw)
INFOS:    3
  · 101 word entries contain "—"
  · 26 duplicate-coordinate groups
  · wordEvidence overlay: 21 languages, 162 cells annotated
PASS
```

Cache buster `v=46 → v=50` (data) / `v=16 → v=18` (meta, ko_jeju Option A)。

---

## Next Steps (推奨優先順)

1. **Phase 4 (concept definitions) schema 設計** — WORD_LIST に definition 追加、modal で hover/tooltip 表示
2. **Pronunciation column policy decision** — IPA strict vs broad transcription を user に確認、その後 family-wide cleanup
3. **Coverage/confidence flag schema** — regional variant rows (zh_db, ko_kp, fr_qc, Spanish regional) に partial/full flag 追加
4. Codex 8 残 / mnp Min Bei fire 等の既存 deferred items
