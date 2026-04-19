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

#### 4. All languages must be included / 全言語を含めること

Every sentence must have entries for all language codes listed in `validate_data.py` `REQUIRED_LANGS`.
Run `python3 validate_data.py` to check for missing languages.

#### 5. Cantonese (yue) must use Traditional Chinese / 広東語は繁体字のみ

**BAD:** `车站` (simplified)
**GOOD:** `車站` (traditional)

Never use simplified Chinese characters (简体字) for Cantonese entries.

#### 6. Chữ Nôm (vi_nom) must use standardized Hán-Nôm characters / チューノムは標準化された漢字・字喃を使用

**BAD:** `"Tôi đi"` (quốc ngữ / Latin script)
**GOOD:** `"碎𠫾"` (Chữ Nôm)

Character selection must follow the standardization references:
- **Primary:** [ChuNomStandardization](https://github.com/valestanov/ChuNomStandardization) (`NomStandardization.csv`)
- **Secondary:** [chunom.org Standard 750](https://chunom.org/pages/standard/)

Key standardized Chữ Nôm characters:
| Vietnamese | Chữ Nôm | Unicode | Meaning |
|---|---|---|---|
| tôi | 碎 | U+788E | I |
| ăn | 咹 | U+54B9 | eat |
| đi | 𠫾 | U+20AFE | go |
| muốn | 㦖 | U+3996 | want |
| là | 羅 | U+7F85 | is |
| có | 固 | U+56FA | have |
| không | 空 | U+7A7A | no/not |
| thấy | 𧡊 | U+2784A | see |
| đẹp | 𢢲 | U+228B2 | beautiful |
| rất | 慄 | U+6144 | very |
| mới | 𪦲 | U+2A9B2 | new |
| bữa | 𩛷 | U+296F7 | meal |
| sáng | 𤏬 | U+243EC | morning |
| giờ | 𣇞 | U+231DE | hour |
| lúc | 𣅶 | U+23176 | moment |
| bảy | 𦉱 | U+26271 | seven |
| chín | 𠃩 | U+200E9 | nine |
| nấu | 𤍇 | U+24347 | cook |
| nắng | 𣌝 | U+2331D | sunny |
| mưa | 𩄎 | U+2910E | rain |
| mua | 𧷸 | U+27DF8 | buy |
| đang | 當 | U+7576 | -ing |
| mỗi | 每 | U+6BCF | each |

**Important:** When adding new vi_nom entries, always look up characters in the standardization references above. Do NOT use non-standard variant characters even if they look similar.

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

Each segment ID has a fixed color. Do not change these — they are designed for maximum contrast, readability, and visual harmony:
```json
"A": { "color": "#e8384f" }  // Rose Red
"B": { "color": "#4178bc" }  // Steel Blue
"C": { "color": "#0d9f6e" }  // Jade Green
"D": { "color": "#8338ec" }  // Electric Violet
"E": { "color": "#d4790e" }  // Dark Amber
"F": { "color": "#1098ad" }  // Ocean Teal
"G": { "color": "#c2255c" }  // Ruby
```

### Segment Mapping Rules / セグメントマッピングルール

以下のルールは、過去の修正事例から得られた教訓をまとめたものです。

#### Rule 1: セグメントIDは意味単位に紐づく（語順ではなく意味で決まる）

各セグメントIDは、全言語で同じ意味概念を表す必要があります。語順は言語ごとに異なって構いませんが、IDの割り当ては全言語で統一してください。

```
✅ 正しい例（S6: "I study Japanese at university"）:
  en: [A]I [D]study [C]Japanese [B]at university
  ja: [A]私は [B]大学で [C]日本語を [D]勉強しています
  la: [A]Ego [C]linguam Iaponicam [B]in universitate [D]studeo
  → A=主語, B=場所, C=目的語, D=動詞 が全言語で一致

❌ 間違い例:
  la: [A]Ego [C]linguam Iaponicam [D]in universitate [B]studeo
  → BとDが逆。B=場所なのにstudeo(動詞)が入っている
```

#### Rule 2: Pro-drop言語でも主語代名詞を明示する

イタリア語・スペイン語など主語代名詞を省略する言語でも、セグメント対応のために明示的に代名詞を含めてください。

```
❌ BAD:  it: [A]Studio [C]giapponese [B]all'università
  → AにI+studyが結合。Dが欠落。

✅ GOOD: it: [A]Io [D]studio [C]giapponese [B]all'università
  → A=Io(主語), D=studio(動詞) が分離されている
```

同様に、ウェールズ語・アイルランド語（VSO語順）でも主語代名詞を含めてください：
```
✅ GOOD: cy: [D]Rwy'n astudio [A]fi [C]Japanëeg [B]yn y brifysgol
  → VSO語順だが、A=fi(主語) が明示されている
```

#### Rule 3: クリティック代名詞は独立セグメントにする

イタリア語・スペイン語の目的格代名詞（mi, me）が動詞に付着する場合、分離してください。

```
❌ BAD:  it: [D]mi porti [C]un bicchiere d'acqua
  → B(me)がDの動詞に吸収されている

✅ GOOD: it: [B]mi [D]porti [C]un bicchiere d'acqua
  → B=mi が独立セグメント

❌ BAD:  es: [D]deme [C]un vaso de agua
✅ GOOD: es: [D]dé [B]me [C]un vaso de agua
```

#### Rule 4: 全言語で同じ文構造を使う（意訳による構造変更禁止）

方言や関連言語で「自然な表現」を追求するあまり、文の構造自体を変えてはいけません。セグメントの意味対応が崩れます。

```
❌ BAD（S76: "音楽を聴くと幸せな気持ちになる"）:
  fr:    [D]Je me sens heureux [C]quand [B]j'écoute [A]de la musique
  fr_qc: [A]Écouter [B]de la musique [C]ça me rend [D]heureux
  → fr_qcは「Écouter...ça me rend」構文を使い、A=聴く, B=音楽 になっている
  → frではA=音楽, B=聴く で、意味が逆転している

✅ GOOD:
  fr_qc: [D]Je me sens heureux [C]quand [B]j'écoute [A]d'la musique
  → frと同じ「when I listen」構文で、語彙だけケベック風にする
```

#### Rule 5: 定義されたセグメントIDのみ使用する

各文の `segments` オブジェクトで定義されたID（A, B, C, ...）のみ使用してください。定義にないIDを使うとバリデーションエラーになります。

```
❌ BAD（segmentsにA,B,Cのみ定義）:
  nap: [A]L'esame [B]è [C]lunnerì [D]ca vene
  → Dは未定義

✅ GOOD:
  nap: [A]L'esame [B]è [C]lunnerì ca vene
  → 「lunnerì ca vene」をCに統合
```

#### Rule 6: 空テキストのセグメントを作らない

テキストが空のセグメントは禁止です。参照言語にあるセグメントが訳語で不要な場合は、そのセグメントを省略してください。

```
❌ BAD:  sv: [A]Morgen [B]" [C]blir [D]soligt
  → Bが空文字

✅ GOOD: sv: [A]I morgon [C]blir det [D]soligt
  → 不要なBは省略
```

#### Rule 7: 方言は親言語ベースで生成する

方言データを追加する際は、親言語のセグメント構造をコピーし、テキストのみ方言表現に変換してください。これにより、セグメントIDと順序が自動的に一致します。

| 方言 | 親言語 | 手順 |
|---|---|---|
| nap, scn | it | itのセグメント構造をコピー → テキストをナポリ語/シチリア語に変換 |
| fr_qc | fr | frのセグメント構造をコピー → テキストをケベック表現に変換 |
| de_gsw | de | deのセグメント構造をコピー → テキストをスイスドイツ語に変換 |
| sv, no | de | deのセグメント構造をコピー → テキストをスウェーデン語/ノルウェー語に変換 |
| nl | de | deのセグメント構造をコピー → テキストをオランダ語に変換 |
| en_ang | en | enのセグメント構造をコピー → テキストを古英語に変換 |
| sco | en | enのセグメント構造をコピー → テキストをスコットランド語に変換 |
| si | hi | hiのセグメント構造をコピー → テキストをシンハラ語に変換 |

#### Rule 8: 中国語方言は方言らしい表現を使う

普通話（zh）の文をそのままコピーしないでください。各方言の特徴的な語彙・文法を使ってください。

| 方言 | 使うべき特徴的表現 |
|---|---|
| wuu（上海語） | 阿拉(we), 侬(you), 勿(not), 交关(very), 辰光(time), 伊(he/she) |
| zh_sc（四川話） | 啥子(what), 要得(OK), 莫(don't), 巴适(good), 嘞/哈(particle) |
| zh_db（東北話） | 贼(very), 整(do), 寻思(think), 啥(what), 咋(how), 儿化音 |

```
❌ BAD:  zh_sc: [B]听 [A]音乐 [C]的时候 [D]我感到很开心
  → 普通話そのまま（100%一致）

✅ GOOD: zh_sc: [B]听 [A]音乐 [C]的时候 [D]我硬是高兴得很
  → 四川話の特徴（硬是, 得很）が入っている
```

#### Rule 9: 各言語の正しい文字体系を使う

| 言語 | 正しい文字 | よくある間違い |
|---|---|---|
| ur（ウルドゥー語）| ナスタアリーク体 `موسیقی` | デーヴァナーガリー `संगीत` |
| yue（広東語）| 繁体字 `車站` | 簡体字 `车站` |
| vi_nom（チューノム）| 漢字・字喃 `碎𠫾` | ラテン文字 `Tôi đi` |
| si（シンハラ語）| シンハラ文字 `මම` | ラテン文字 `mama` |

#### Rule 10: 言語コードは `親言語_方言` 形式を使う

新しい方言を追加する際は、親言語のコードをプレフィックスとして使ってください。

```
✅ GOOD: ja_osa, ko_bus, en_aave, ar_eg, zh_sc, de_gsw, fr_qc, el_grc
❌ BAD:  osa, bus, aave, gsw, grc
```

独立した言語（ISO 639コードを持つもの）はプレフィックス不要です：
```
sco（スコットランド語）, nap（ナポリ語）, ain（アイヌ語）, yue（広東語）
```

#### Rule 11: 句読点はデータに含めず、レンダリングで処理する

疑問符`?`、逆疑問符`¿`、感嘆符`!`等の句読点はセグメントデータに入れないでください。代わりに、文オブジェクトに `"type": "question"` 等を追加し、レンダリング側で自動付与します。

```json
❌ BAD:
  "es_eu": [["C", "¿Dónde"], ["D", "está"], ...]

✅ GOOD:
  sentence: { "type": "question", ... }
  "es_eu": [["C", "Dónde"], ["D", "está"], ...]
```

#### Rule 12: フランス語のJ'結合を分離する

フランス語の `J'` (je の省略形) が動詞と結合している場合、`J'` をAセグメント（主語）として分離し、残りを動詞セグメントに入れてください。

```
❌ BAD:  [A]J'ai [C]perdu [B]mon portefeuille
  → "J'ai" にI+have(助動詞)が結合

✅ GOOD: [A]J' [C]ai perdu [B]mon portefeuille
  → A=J'(主語), C=ai perdu(動詞)

❌ BAD:  [D]J'apprends [C]à cuisiner
✅ GOOD: [A]J' [D]apprends [C]à cuisiner
```

フランス語の倒置疑問文も分離してください:
```
❌ BAD:  [D]Pourriez-vous [C]me recommander
✅ GOOD: [D]Pourriez [A]-vous [C]me recommander
```

#### Rule 13: 大文字は文頭セグメントのみ

主語代名詞を追加した結果、動詞が2番目のセグメントになった場合、動詞の先頭を小文字にしてください。

```
❌ BAD:  [A]Yo [D]Tengo que [C]levantarme
✅ GOOD: [A]Yo [D]tengo que [C]levantarme
```

#### Rule 14: 関係代名詞は独立セグメントにする

関係節を含む文では、関係代名詞（which/that/den/que/yang/mà/ที่等）を独立したセグメント（通常G）にしてください。ただし英語で省略されている場合（ゼロ関係代名詞）は追加不要です。

```
en:     [E]a suit [D]I saw          ← "which" 省略、Gなし
de:     [E]einen Anzug [G]den [D]gesehen habe  ← den=関係代名詞
fr:     [E]un costume [G]que [D]j'ai vu        ← que=関係代名詞
id:     [E]jas [G]yang [D]saya lihat           ← yang=関係化辞
th:     [E]สูท [G]ที่ [D]เห็น                    ← ที่=関係化辞
vi:     [E]bộ vest [G]mà [D]tôi đã thấy        ← mà=関係代名詞（使用時のみ）
km:     [E]ឈុតខោអាវ [G]ដែល [D]ខ្ញុំបានឃើញ       ← ដែល=関係代名詞
lo:     [E]ສູທ [G]ທີ່ [D]ເຫ໌ນ                    ← ທີ່=関係化辞
ja:     [D]見た [E]スーツ                         ← 前置修飾、Gなし
ko:     [D]본 [E]양복                             ← 前置修飾、Gなし
```

関係代名詞を持たない言語（日本語・韓国語・中国語等は前置修飾を使用）ではGセグメントは不要です。

**注意**: ベトナム語の`mà`は関係代名詞として使われる場合のみGセグメントにします。`mà`は接続詞（but/and）としても使われるため、文脈で判断してください。同様に、インドネシア語/マレー語の`yang`は形容詞マーカーとしても使われますが、名詞を修飾する関係節を導く場合のみGとします。

#### Rule 15: 構造が異なる概念は別セグメントで表現する

同じ意味でも言語によって構造が異なる場合、構造ごとに異なるセグメントを割り当ててください。

```
S81 "今日は頭が痛い":
  Segments: A=主語, B=頭, C=今日, D=痛い, E=頭痛, F=ある

  「頭が痛い」構文 → B + D を使用:
    ja: [A]私は [C]今日 [B]頭が [D]痛い
    zh: [A]我 [C]今天 [B]头 [D]很痛
    ru: [A]У меня [D]болит [B]голова [C]сегодня

  「頭痛がある」構文 → E + F を使用:
    en: [A]I [F]have [E]a headache [C]today
    de: [A]Ich [F]habe [C]heute [E]Kopfschmerzen
    ko: [C]오늘 [E]두통이 [F]있다
```

#### Rule 16: 複合セグメント（B|D形式）

1つのテキストが複数のセグメント概念に対応する場合、`B|D` のようにパイプで区切ったIDを使用できます。レンダリングでは両色のグラデーションが表示され、線は両方のセグメント位置に接続されます。

```json
["B|D", "headache"]  // BとDの両方に対応
```

ただし、Rule 15のように構造ごとに別セグメントを割り当てる方が明確な場合は、そちらを優先してください。

---

## よくあるセグメントミスと修正事例

以下は、実際のデータで発見・修正されたセグメントの問題パターンです。新しいデータを追加する際は、同じミスを繰り返さないよう注意してください。

### パターン1: 複合フレーズの未分割

異なる意味単位が1つのセグメントにまとめられている場合、分割が必要です。

```
❌ BAD（S1: "ホテルの向かいのお店で"）:
  zh: [C]在酒店对面的商店里
  → B(ホテルの向かいの) と C(お店で) が1セグメントに結合

✅ GOOD:
  zh: [B]酒店对面的 [C]商店里
  → 場所の修飾(B)と場所(C)が分離
```

**判断基準**: 英語や日本語で2つの別セグメントになっている概念が、他言語で1つにまとまっていたら分割を検討する。

### パターン2:「ください」等の丁寧表現が動詞に結合

丁寧マーカー（please, ください, 주세요 等）は、動詞とは別のセグメント（通常A）にすべきです。

```
❌ BAD（S96: "次の交差点を右に曲がってください"）:
  ja: [D]曲がってください
  → D(曲がる) と A(ください) が結合

✅ GOOD:
  ja: [D]曲がって [A]ください
  ko: [D]돌아 [A]주세요

方言も同様:
  osa: [D]曲がって [A]おくれやす
  aom: [D]曲がって [A]けれじゃ
  oki: [D]曲がって [A]くぃみそーれー
  ja_edo: [D]曲がり [A]くだされ
```

### パターン3: セグメントIDの意味的不一致

同じ概念に対して、言語間で異なるセグメントIDが割り当てられている。

```
❌ BAD（S13: "水を一杯ください"）:
  en:  [A]Please   [C]give me  [B]a glass of water
  aom: [A]みずを    [B]いっぺ   [C]けれじゃ
  → A=水(enではplease), B=一杯(enではwater), C=ください(enではgive)

✅ GOOD:
  aom: [C]みずを [A]いっぺ [B]けれじゃ
  → C=水, A=一杯/please, B=ください/give — enと意味が対応
```

**チェック方法**: 各セグメントIDの意味を英語（en）と日本語（ja）で確認し、他言語でも同じ意味に同じIDが付いているか検証する。

### パターン4: 動詞と目的語の未分割

「旅したい」「向右转」のように、動詞と目的語（または動詞と助動詞）が結合されている。

```
❌ BAD（S44: "世界中を旅したい"）:
  ja: [D]旅したい
  → C(旅) と D(したい) が結合

✅ GOOD:
  ja: [C]旅 [D]したい
  ko: [C]여행 [D]하고 싶다
  th: [D]อยาก [C]เดินทาง

❌ BAD（S96: "右に曲がって"）:
  zh: [D]向右转
  → C(右) と D(转) が結合

✅ GOOD:
  zh: [C]向右 [D]转
  vi: [D]rẽ [C]phải
```

### パターン5: 方言のセグメントIDが親言語と不一致

方言データを生成する際、テキストだけでなくセグメントIDの意味対応も親言語と一致させる必要があります。

```
❌ BAD（S3: "私は毎朝7時に朝ごはんを食べます"）:
  ja:  [A]私は [D]毎朝 [E]7時に [B]朝ごはんを [C]食べます
  aom: [A]わ   [B]めあさ [C]すつずに [D]あさまま [E]くうだばって
  → B=毎朝(jaではD), C=7時に(jaではE) — IDがずれている

✅ GOOD:
  aom: [A]わ [D]めあさ [E]すつずに [B]あさまま [C]くうだばって
  → ja と同じ意味に同じID
```

**防止策**: 方言データを生成したら、必ず親言語とセグメントIDの集合を比較する。以下のスクリプトで確認可能:

```bash
node -e "
const fs = require('fs');
const src = fs.readFileSync('data.js','utf8');
const S = new Function(src + '; return SENTENCES;')();
const parent = 'ja', child = 'aom';
for (let i = 0; i < S.length; i++) {
  const p = new Set((S[i].langs[parent]||[]).map(s=>s[0]));
  const c = new Set((S[i].langs[child]||[]).map(s=>s[0]));
  const pOnly = [...p].filter(x=>!c.has(x));
  const cOnly = [...c].filter(x=>!p.has(x));
  if (pOnly.length || cOnly.length)
    console.log('S'+(i+1)+': '+parent+'='+[...p].join('')+' '+child+'='+[...c].join(''));
}
"
```

### パターン6: 意味的に「もう少し分けるべき」かの判断

セグメント分割の粒度に迷った場合の指針:

1. **英語の対応セグメントを見る** — 英語で2つのセグメントに分かれている概念は、他言語でも分けるべき
2. **語順マップとして価値があるか** — 分割することで言語間の語順の違いが可視化されるなら分割する
3. **3〜6セグメントを目安に** — 細かすぎると見づらく、粗すぎると語順の違いが見えない
4. **文法的に分離可能か** — 「曲がってください」は「曲がって」+「ください」に分離可能だが、「食べた」を「食べ」+「た」に分けるのはやりすぎ

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
4. **方言の場合**: 親言語のセグメント構造をコピーし、テキストのみ変換（Rule 7参照）
5. If RTL, add to `RTL_LANGS` set in `app.js`
6. Add to `REQUIRED_LANGS` in `validate_data.py`
7. Run `validate_data.py` to verify
8. Update cache buster version in `index.html` (`?v=N`)

## Adding a New Sentence / 新しい文章の追加

1. Choose a sentence that shows interesting word order differences
2. Assign an `id` (next available number)
3. Define semantic segments (A, B, C, ...)
4. Translate and align all languages (see `REQUIRED_LANGS` in `validate_data.py`)
5. Run `validate_data.py` to verify
6. Update cache buster version in `index.html` (`?v=N`)

---

## i18n Naming Conventions / 多言語名称のルール

When adding or updating language names across UI languages, follow these conventions to maintain consistency.

### 1. Parenthetical format / 括弧形式

All dialect/variant/period qualifiers MUST use parenthetical format:

```
✅ Language (Qualifier)     — Japanese (Osaka), Korean (Medieval)
✗  Qualifier + Language     — Middle Korean, 大阪話, Dialek Osaka
✗  Language + Qualifier     — Tiếng Đức Thụy Sĩ, Norte-coreano
```

### 2. Self-designation for politically sensitive names / 政治的配慮

Use the self-designation where the generic language name is politically loaded:

| Code | CJK UIs | Other UIs |
|------|---------|-----------|
| ko_kp | 朝鮮語(文化語) / 조선말(문화어) | Korean (DPRK) |

Rationale: "韓国語(北朝鮮)" is contradictory — 韓国語 literally means "language of South Korea".

### 3. No English leakage / 英語の混入禁止

Every non-English UI language must have a native translation. Never leave English words like "Vietnamese", "English", "Middle" in non-English UIs. Run the following check before committing:

```bash
node -e "
const fs=require('fs'), src=fs.readFileSync('app.js','utf8');
const m=src.match(/const LANG_NAMES = (\{[\s\S]*?\n\});/);
const LN=new Function('return '+m[1])();
const words=['Vietnamese','English','French','German','Spanish','Chinese','Korean','Japanese','Middle','Old','Ancient','Classical'];
for(const ui of Object.keys(LN)){if(ui==='en')continue;for(const[c,n]of Object.entries(LN[ui])){const w=n.split(/[\s(]/)[0];if(words.includes(w))console.log(ui,c,n)}}
"
```

### 4. Consistent prefixes per UI language / 言語ごとの接頭辞統一

| UI | Rule | Example |
|----|------|---------|
| vi | Always use `Tiếng` prefix | `Tiếng Nhật (Osaka)` not `Phương ngữ Osaka` |
| th | Use short form (no `ภาษา`) for variants | `ญี่ปุ่น (โอซากะ)` not `สำเนียงโอซากะ` |
| id | Use short form (no `Bahasa`/`Dialek`) for variants | `Jepang (Osaka)` not `Dialek Osaka` |
| yue | Use `語` consistently for all entries | `韓語(標準)` not `韓文(標準)` |
| ko | No space before parenthesis | `영어(호주)` not `영어 (호주)` |
| ar | Use definite article `ال` consistently | `العربية (المصرية)` not `عربية (مصرية)` |

### 5. Compound segments / 複合セグメント

When a single word fuses two segment roles, use `X|Y` notation:

```
✅ B|D for fused give+me: ください, 주세요, deme, أعطني
✅ B|C for fused eat+breakfast: frühstücke, desayuno, завтракаю
✗  Hyphenated clitics should be SPLIT: donnez / -moi (not B|D)
```

Rule of thumb: if it's **one orthographic word** → compound. If separated by space or hyphen → split.

### 6. Crediting contributors / 貢献者のクレジット

When applying a fix based on external feedback:
1. Include the contributor's name in the git commit message
2. Add a dated entry in `changelog.html` with `<span class="contributor">— reported by Name</span>`
3. Add the contributor's name to the Contributors list at the bottom of `changelog.html`
