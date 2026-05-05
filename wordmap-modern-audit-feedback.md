# Wordmap Modern Audit Feedback

Date: 2026-05-05

Source: `wordmap-modern-audit.md` (modern languages 499 entries audit)

## Summary

| Section | Status | Cells |
|---|---|---|
| §1 Surface/IPA mismatch (high priority) | ✅ Fixed | 6 |
| §2 Capital N in IPA (high priority) | ✅ Fixed | 12 |
| §3 ja_oki Okinawan classification (medium) | ⏸️ Deferred (decision required) | — |
| §4 Same-form duplicates (medium) | ⏸️ Deferred (audit recommends "do not blindly change") | — |
| Systemic concept definitions | ⏸️ Schema work — Phase 4 候補 | — |

**Total fixed:** 18 cells / 6 modern languages.

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

## §3 ja_oki classification — Deferred (decision required)

Audit が指摘: `ja_oki` (`Japanese (Okinawa)`) entry は Okinawan Japanese と Okinawan/Ryukyuan 言語項目が混在:

```
sun:    てぃだ / tida          (Ryukyuan)
hello:  はいさい / haisai       (Okinawan greeting)
thanks: にふぇーでーびる / niɸeːdeːbiɾu  (Okinawan thanks)
cat:    まやー / majaː         (Ryukyuan)
heart:  心 / kukuɾu            (Okinawan reading)
```

**判断要件:** 2 options:

- **Option A:** `ja_oki` を `Okinawan` / `Central Okinawan` (family `Japonic (Ryukyuan)`) に reclassify、Ryukyuan として再整理。`ja_mvi` (Miyako) / `ja_rys` (Yaeyama) と同列 Ryukyuan family に。
- **Option B:** `Japanese (Okinawa)` のまま維持、Ryukyuan lexical forms を Okinawan Japanese (= Standard Japanese 沖縄方言) form に置換。文化的 attested な greetings のみ keep。

**推奨:** Option A の方が言語学的に正確 (`ja_mvi`/`ja_rys` と整合)、また `ja_oki` 現状値の大半が Ryukyuan であり、option B は大規模な data 入れ替え必要。

ただし Option A は code rename (`ja_oki` → `ryu` or similar)、HIST_DESCENDANT 確認、URL hash 互換性、UI lang switching 影響など波及大。**user による方針決定後に実施**。Session 43+ で対応候補。

---

## §4 Same-form/same-IPA duplicates — Deferred per audit recommendation

Audit が "Do not blindly change duplicates. Some are real lexical overlap." と明記。Review candidates 13 件:

```
lus.drink/house: in
glk.eat/drink: خوردن / xoɾdæn
lrc.eat/drink: خواردن / xwɒːɾdæn
bqi.eat/drink: خواردن / xwoɾdan
myp.heart/good: aoʔaago
enq.fire/tree: ita
mpt.sun/good: kep / mother/love: na
kwk.hello/thanks: gilakas'la
ygr.love/hello: amige
pwn.hello/thanks: masalu
bnn.hello/thanks: uninang
trv.hello/good: malu
```

これらは過去 Sessions 11/12 で audit 経由で個別に検討済み (Session 12 で okz/xqa/osu/otl/onw/cqu などをレビューした際に類似議論)。

**戦略:** 大半は legitimate lexical/cultural overlap (例: `pjt` Pitjantjatjara `palya` は hello/thanks/good で正当に同形)。個別の change は外部 source 必須なので、Phase 2 wordEvidence schema の expansion で対処するのが筋:
- `wordEvidence.<concept> = { evidence: 'attested', source: '...', note: 'lexical overlap with X' }` で source 明記

Session 43+ で必要に応じて対応 (現状は audit recommendation の通り keep)。

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
  · wordEvidence overlay: 9 languages, 137 cells annotated
PASS
```

Cache buster `v=45 → v=46`。

---

## Next Steps (推奨優先順)

1. **§3 ja_oki 方針決定** — Option A (Ryukyuan reclassify) vs Option B (Okinawan Japanese 化) を user に確認、決まり次第対応
2. **Phase 4 (concept definitions) schema 設計** — WORD_LIST に definition 追加、modal で hover/tooltip 表示
3. **Phase 2 拡張** — modern languages の同形 duplicates に wordEvidence + lexical-overlap note 追加 (`bnn.hello/thanks: uninang` 等)
4. Codex 8 残 / mnp Min Bei fire 等の既存 deferred items
