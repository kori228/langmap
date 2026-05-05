# Wordmap Modern Audit Feedback

Date: 2026-05-05

Source: `wordmap-modern-audit.md` (modern languages 499 entries audit)

## Summary

| Section | Status | Cells |
|---|---|---|
| §1 Surface/IPA mismatch (high priority) | ✅ Fixed | 6 |
| §2 Capital N in IPA (high priority) | ✅ Fixed | 12 |
| §3 ja_oki Okinawan classification (medium) | ✅ Fixed (Option A applied) | 1 lang reclass |
| §4 Same-form duplicates — wordEvidence overlap notes | ✅ 7 langs annotated | 14 cells |
| Systemic concept definitions | ⏸️ Schema work — Phase 4 候補 | — |

**Total fixed:** 18 cells + 1 language reclassification across 6 modern languages.

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

各 lang に `wordEvidence: { hello: { evidence: 'direct', note: 'lexical overlap with X: ...' }, thanks: {...} }` 等を追加。modal cell hover tooltip で表示される (Phase 2 overlay 既実装)。

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

## Validator 結果

```
ERRORS:   0
WARNINGS: 0
ALLOWLISTED: 1  (mon/mnw)
INFOS:    3
  · 101 word entries contain "—"
  · 26 duplicate-coordinate groups
  · wordEvidence overlay: 16 languages, 151 cells annotated
PASS
```

Cache buster `v=46 → v=48` (data, +Option A meta + §4 wordEvidence) / `v=16 → v=17` (meta)。

---

## Next Steps (推奨優先順)

1. **Phase 2 拡張** — modern languages の同形 duplicates に wordEvidence + lexical-overlap note 追加 (`bnn.hello/thanks: uninang` 等)
2. **Phase 4 (concept definitions) schema 設計** — WORD_LIST に definition 追加、modal で hover/tooltip 表示
3. Codex 8 残 / mnp Min Bei fire 等の既存 deferred items
