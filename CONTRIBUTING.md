# LangMap Data Contribution Guide / データ追加ガイドライン

This document describes the rules and procedures for adding new sentences or languages to LangMap.

---

## Data Format / データ形式

Each sentence in `data.js` follows this structure:

```json
{
  "id": 101,
  "title": "English description of the sentence",
  "segments": {
    "A": { "color": "#e74c3c" },
    "B": { "color": "#3498db" },
    "C": { "color": "#2ecc71" }
  },
  "langs": {
    "ja": [["B", "学校に"], ["C", "行く"]],
    "en": [["C", "go"], ["B", "to school"]],
    ...
  }
}
```

### Segment Rules / セグメントルール

Each segment array entry is `[segmentID, text]`:
- **First element**: Segment ID (single uppercase letter: A, B, C, ...)
- **Second element**: The text in that language

### Critical Rules / 絶対に守るべきルール

#### 1. Never create adjacent segments with the same ID / 隣接する同一IDセグメントの禁止

**BAD:**
```json
"ja": [["B", "Wi-Fiの"], ["B", "パスワードが"], ["C", "見つからない"]]
```

**GOOD:**
```json
"ja": [["B", "Wi-Fiのパスワードが"], ["C", "見つからない"]]
```

If the same semantic role appears consecutively, **merge them into one segment**. For space-separated languages (English, French, etc.), join with a space. For languages without word spacing (Japanese, Chinese, Korean, etc.), join directly.

#### 2. Segment ID goes first, text goes second / セグメントIDが先、テキストが後

**BAD:** `["I", "A"]` (text "I" first, ID "A" second)
**GOOD:** `["A", "I"]` (ID "A" first, text "I" second)

This is especially error-prone with English "I" (pronoun) — it looks like a segment ID but is text.

#### 3. Word order must be correct for each language / 各言語の語順は正確に

Segments must be listed in the natural word order of that language. Example:
- English (SVO): `[["A", "I"], ["C", "go"], ["B", "to school"]]`
- Japanese (SOV): `[["A", "私は"], ["B", "学校に"], ["C", "行く"]]`

**Common mistakes:**
- Japanese: "ください" (please) comes at the END, not the beginning
- Arabic/Hebrew: VSO order, verb typically first
- Korean: SOV order like Japanese

#### 4. All 32 languages must be included / 全32言語を含めること

Every sentence must have entries for all 32 language codes:

| Group | Codes | Notes |
|---|---|---|
| Japanese | `ja`, `osa`, `aom`, `oki`, `ja_edo` | ja_edo uses Edo-period vocabulary |
| Korean | `ko`, `kp`, `bus` | kp uses North Korean style |
| Chinese | `zh`, `yue`, `nan`, `wuu`, `zh_classical` | yue must use **Traditional Chinese (繁体字)** only |
| Vietnamese | `vi`, `vi_nom` | vi_nom uses Chữ Nôm (字喃) characters, NOT quốc ngữ (Latin) |
| SEA | `th`, `id` | |
| South Asian | `hi` | |
| Germanic | `en`, `de` | |
| Romance | `fr`, `it`, `es_eu`, `es_mx`, `pt_eu`, `pt_br` | |
| Slavic | `ru`, `uk` | |
| Semitic | `ar`, `ar_eg`, `he` | ar_eg uses Egyptian dialect |
| African | `sw` | |

#### 5. Cantonese (yue) must use Traditional Chinese / 広東語は繁体字のみ

**BAD:** `车站` (simplified)
**GOOD:** `車站` (traditional)

Never use simplified Chinese characters (简体字) for Cantonese entries.

#### 6. Chữ Nôm (vi_nom) must use Hán-Nôm characters / チューノムは漢字・字喃を使用

**BAD:** `"Tôi đi"` (quốc ngữ / Latin script)
**GOOD:** `"碎𨕭"` (Chữ Nôm)

Key Chữ Nôm characters:
| Vietnamese | Chữ Nôm | Meaning |
|---|---|---|
| tôi | 碎 | I |
| ăn | 𫗒 | eat |
| đi | 𨕭 | go |
| muốn | 𨷈 | want |
| là | 羅 | is |
| có | 固 | have |
| không | 空 | no/not |
| mở ra | 𨷯𧡊 | open |
| đẹp | 𢶹 | beautiful |
| rất | 慄 | very |

#### 7. Classical Chinese (zh_classical) uses literary style / 文言は文語体を使用

Use classical vocabulary, not modern Chinese:
| Modern | Classical | Meaning |
|---|---|---|
| 我 | 吾/余 | I |
| 想要 | 欲 | want |
| 吃 | 食 | eat |
| 是 | 乃/為 | is |
| 很 | 甚/極 | very |
| 不 | 不/未/無 | not |

#### 8. Edo-period Japanese (ja_edo) uses samurai-style speech / 江戸時代語は武家言葉

| Modern | Edo | Notes |
|---|---|---|
| 私は | 拙者は | Samurai first-person |
| です | でござる | Polite copula |
| ください | くだされ | Request form |
| ホテル | 旅籠 | Inn |
| お店 | 店/商家 | Shop |
| 大学 | 学問所 | University |
| 空港 | 湊 | Port (no airports in Edo) |

#### 9. Egyptian Arabic (ar_eg) uses dialect forms / エジプト方言は口語体を使用

| MSA | Egyptian | Meaning |
|---|---|---|
| أريد | عايز | want |
| ذهب | راح | went |
| ماذا | إيه | what |
| أين | فين | where |
| الآن | دلوقتي | now |
| من فضلك | لو سمحت | please |

Uses بـ prefix for present habitual, هـ prefix for future.

---

## Segment Design Guidelines / セグメント設計ガイドライン

### How to divide a sentence into segments

1. **Identify semantic roles**: Subject, verb, object, adverb, modifier, etc.
2. **Keep segments meaningful**: Each segment should represent a coherent unit that moves as a group across languages
3. **3-6 segments per sentence** is ideal for visualization
4. **Consistent segment IDs across languages**: If "I" is segment A in English, the equivalent pronoun must also be segment A in all other languages

### Segment colors

Use these predefined colors (add more if needed):
```json
"A": { "color": "#e74c3c" }  // Red
"B": { "color": "#3498db" }  // Blue
"C": { "color": "#2ecc71" }  // Green
"D": { "color": "#9b59b6" }  // Purple
"E": { "color": "#e67e22" }  // Orange
"F": { "color": "#1abc9c" }  // Teal
```

---

## Validation Script / バリデーションスクリプト

Run `validate_data.py` to check for common errors before committing:

```bash
python3 validate_data.py
```

This script checks:
- Adjacent same-ID segments
- Flipped segment ID/text (e.g., `["I", "A"]` instead of `["A", "I"]`)
- Missing languages
- Simplified Chinese in Cantonese (yue)
- Latin characters in Chữ Nôm (vi_nom)
- Invalid segment IDs

---

## Adding a New Language / 新しい言語の追加

1. Add to `LANGUAGES` array in `app.js`
2. Add to `LANG_NAMES` in `app.js` (all 21 UI language entries)
3. Add data for all 100 sentences in `data.js`
4. If RTL, add to `RTL_LANGS` set in `app.js`
5. Run `validate_data.py` to verify
6. Update cache buster version in `index.html` (`?v=N`)

## Adding a New Sentence / 新しい文章の追加

1. Choose a sentence that shows interesting word order differences
2. Assign an `id` (next available number)
3. Define semantic segments (A, B, C, ...)
4. Translate and align all 32 languages
5. Run `validate_data.py` to verify
6. Update cache buster version in `index.html` (`?v=N`)
