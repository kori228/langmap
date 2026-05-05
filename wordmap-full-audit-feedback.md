# Word Map Full Audit — Feedback Log

`wordmap-full-audit.md` (2771行・30+項目) を複数セッションに分けて対応した記録。

---

## Session 1 (2026-05-05)

確定度の高い discrete な data fix と data-layer schema 更新を一括対応。

### コミット
- `<TBD - filled at commit time>`

### 対応した audit 項目

**§6.8 `dng.tree` が `hand` と同形 (`шу/ʂu`) になっていた問題:**
- `tree:['шу','ʂu']` → `tree:['фу','fu']`（`hand` は `шў/ʂəu` に分離済）
- 出典: Wiktionary `шу` (Dungan = "hand"), Wiktionary `tree` translation list (Dungan = `фу`)

**§6.9 `dng.thanks` が Mandarin 谢谢 の機械的音写だった問題:**
- `thanks:['ще ще','ɕie ɕie']` → `thanks:['дуәще','duəɕe']`
- 出典: Wiktionary `thank you` translation list (Dungan = `дуәще` / `рахмат`)

**§6.15 `xhu.heart` が `hand` と同形 (`𒋗𒉌/ʃuni`) になっていた問題:**
- `heart:['𒋗𒉌','ʃuni']` → `heart:['𒋾𒊭','tiʃa']`
- 出典: Palaeolexicon Hurrian `tiša / tižni` = "heart", `šuni / šummi` = "hand"; Wiktionary Hurro-Urartian word list (Kassian 2010)

**§6.18 Caucasian 系 41セルの palochka (`ӏ`) が Latin `l`/`I` になっていた問題:**
- 41 cells across `ce / inh / av / lez / dar / lbe / tab / ady / kbd`
- 例: `av.fire:['цlа']` → `['цӏа']`, `ady.hand:['lэ']` → `['ӏэ']`
- 出典: Avar / Adyghe / Kabardian の各正書法資料、Cyrillic palochka U+04CF
- 全件 Python ヘルパー (`/tmp/fix_caucasian_palochka.py`) で一括置換

**§6.19 `ewo.hand` の Greek `ό` が混入していた問題:**
- `hand:['woό','woʔo']` → `hand:['woó','woʔo']`（Greek omicron-with-tonos → Latin o-acute）
- 出典: CLDR Ewondo exemplar characters

**§6.21 Meroitic / Khitan / Pyu の dataStatus が強すぎた問題:**
- `xmr / zkt / pyx`: `undeciphered` → `partly-understood`（`elx` Elamite と並ぶ）
- 出典: Britannica の Meroitic 説明（"language largely undeciphered" だが script は読める）、Khitan / Pyu も部分解読が進行
- バッジ表示も `partly understood / 部分解読` に

**§6.23 `chy.hello` が `thanks` と同形 (`néá'eše`) だった問題:**
- `hello:['néá\'eše','néáʔeʃe']` → `hello:['Haaahe','haːhe']`
- 出典: Cheyenne Language 公式系資料（男性間 greeting `Haaahe`）。`néá'eše` は thank you として確認

**§6.24 Evenki / Even の `thanks` が `good` と同形 (`ая`) だった問題:**
- `evn.thanks:['ая','aja']` → `['пасиба','pasiba']`
- `eve.thanks:['ая','aja']` → `['пасиба','pasiba']`
- `eve.good:['ая','aja']` → `['ай','aj']`（Even は Proto-Tungusic `*aya` の子孫として `ай` 形）
- 出典: Kaikki/Wiktionary-derived Evenki dictionary, Evengus phrasebook, Kaikki Even wordlist

**§6.29 `czh.sun` / `czh.eye` の IPA末尾に `/` 混入:**
- `sun:['日头','ʐɨ˨˦tʰəu/']` → `['日头','ʐɨ˨˦tʰəu']`
- `eye:['眼睛','ŋæ˦˦tɕin/']` → `['眼睛','ŋæ˦˦tɕin']`

**§6.46 Tulu (`tcy`) の `mother`/`father` 逆転と `sun` 語義ずれ:**
- `mother:['ಅಮ್ಮೆ','ammeː']` ↔ `father:['ಅಪ್ಪೆ','appeː']` を入れ替え
- `sun:['ಪೊರಿ','poɾi']` (= spark系) → `['ಸೂರ್ಯ','suːrja']`
- 出典: Wiktionary Tulu, Wiktionary Appendix:Tulu Swadesh, EasyTulu family relationships

**§6.50 `vi_nom.eat` の Chữ Nôm + Latin romanization 混在:**
- `eat:['𫗒 ăn','an']` → `eat:['𫗒','an']`
- 出典: Wiktionary `𫗒` (chữ Nôm form of ăn)

**§6.51 古代 Semitic `cat` の `*` 付き再構を `—` に:**
- `uga.cat:['*𐎌𐎐𐎗','ʃunaːru']` → `['—','—']`
- `xpu.cat:['*𐤔𐤍𐤓','ʃunaːr']` → `['—','—']`
- `xsa.cat:['*𐩪𐩬𐩬𐩥𐩧','sannawːar']` → `['—','—']`
- `hbo.cat:['*שונרא','ʃunraː']` → `['—','—']`
- 理由: 言語自体は `attested` だがセル単位では再構/proxy。cell-level evidence status なしの現状では `—` が安全

**§6.54 古代語 Tocharian / Hittite の `hello`/`thanks` を `good` 形で埋めていた問題:**
- `xto.thanks:['𑀓𑀸𑀲𑀼','kaːsu']` → `['—','—']`（"good" 形を流用していた）
- `txb.hello:['𑀓𑀭𑁆𑀢𑁆𑀲𑁂','kartse']` → `['—','—']`
- `hit.hello:['𒀸𒋗','asːu']` → `['—','—']`（"good" 形）
- 出典: Wiktionary / Palaeolexicon (kartse = "good", aššu = "good, dear, favourable")

**§6.55 `zh_jh.moon` の母音欠落:**
- `moon:['月亮','yʔ liaŋ']` → `['月亮','yeʔ liaŋ']`
- 出典: Wiktionary `月` Nanjing IPA `/yeʔ⁵/`

**§6.56 `haz.thanks` が Pashto 借用語になっていた問題:**
- `thanks:['مننه','manana']` (Pashto) → `['تشکر','taʃakkur']` (Persian/Hazaragi)
- 出典: Wiktionary `تشکر` Persian + Hazaragi pronunciation; `مننه` は Pashto entry

**§6.57 `brh.love` が `izzat`（=honour/respect）になっていた問題:**
- `love:['عزّت','izzat']` → `love:['عشق','eʃq']`
- 理由: izzat は honour/dignity であり、love の代表語としては誤解を招く。`عشق`（Persian/Urdu借用、love/passion）に置換
- 出典: Wiktionary `izzat`, Merriam-Webster `izzat`

**§6.58 `bnn.love` が `good` と同形 (`masial`) だった問題:**
- `love:['masial','masial']` → `love:['madaidaz','madaidaz']`
- `good` 側は `masial` のまま
- 出典: GOODTV Bunun translation, Radio Taiwan International (`Madaidaz` = amor), Bunun Bible Translation reports

**§6.59 `tji.love` / `tji.thanks` がともに `ka` だった問題:**
- `love:['ka','kʰa˨˩']` → `['a2ci1','atsi']`
- `thanks:['ka','kʰa˨˩']` → `['ang2zai1','aŋtsai']`
- 出典: Freelang Tujia-English-Tujia online dictionary

**§7.13 `sukh.hello` の anachronism (`สวัสดี` は20世紀の挨拶):**
- `hello:['สวัสดี','sawatdiː']` → `['—','—']`
- 理由: 13世紀 Old Thai (Sukhothai) 項目に20世紀導入の挨拶を入れるのは時代錯誤

### Validator 結果

実行: `node validate_wordmap_data.js`

```
Languages: 579 (modern: 499, historical: 80)
Data status breakdown:
  modern               559
  attested             10
  reconstructed        1
  partly-understood    4   (was: 1)
  pedagogical          5

ERRORS:   0
WARNINGS: 0
PASS
```

`undeciphered` カウントが 3 → 0 に（`xmr/zkt/pyx` を `partly-understood` 側へ）。

### 持ち越し（Session 2 以降に対応予定）

**Schema-level（UI/コードを伴うもの）:**
- §6.20 歴史語の IPA 欄ラベル問題（zh_tang の Baxter 表記、ojp の甲乙類、och の再構）— UI ラベルを `IPA / transcription` または `発音/転写` に変える必要
- §6.22 surface 欄ラベル `原文` が古代語の Latin 転写には不適切 — `Form` / `表記` への改名
- §6.31 Burmese / Rakhine / Japanese / Ningbo の IPA 欄に ASCII `N` — 正規化方針要決定
- §7.6 duplicate-coordinate UI clustering / spiderfy
- §7.7 Cell-level evidence status のスキーマ化（現状は `—` で代用）

**追加リサーチ要 (review状態):**
- §6.16 Iranian 系 `glk / lrc / bqi` の `eat == drink` — 個別辞書ベースで方針決定
- §6.42 Paiwan / Bunun / Truku の hello/thanks の `review` 残り（Bunun.hello = uninang, Truku.malu = good重複）
- §6.43 Sanskrit visarga の IPA 不整合（`अग्निः → aː` 系）— visarga 表記方針
- Tujia の方言基準（Northern / Southern）と出典統一（Freelang / Brassett / Starostin のどれを採るか）

**Schema 4 完了済み:**
- §7.5 LANG_DATA 重複 key — 既に Phase 17 dedup で完了

### 参照

`wordmap-full-audit.md` 参照資料セクション（§9）に列挙された外部資料（Wiktionary, Wikipedia, Britannica, Palaeolexicon, Glosbe, tekinged.com, Webonary 等）を活用。

---

## Session 2 (2026-05-05)

残った大型項目（Armenian の表記破損、Sanskrit visarga、Burmese/Rakhine の `N` 正規化）と Formosan の review 残りを対応。

### コミット
- `<TBD - filled at commit time>`

### 対応した audit 項目

**§6.1 / §7.4 Armenian (`hy`) の surface 欄破損 — 17セル一括修正:**

旧データには3種の破損が混在していた：
1. `delays` という英語フラグメントの混入: `sun:['արdelays','aɾev']`, `eat:['ուdelays','utel']`, `love:['սdelays','seɾ']`
2. アルメニア文字 + Latin 文字混在: `moon:['լուսin']`, `drink:['խմel']`, `heart:['սirt']`, `tree:['ծar']`, `dog:['շun']`
3. 完全ローマ字転写: `house:['tun']`, `cat:['katou']`, `hand:['dzerrk']`, `eye:['atchk']`, `hello:['barev']`, `thanks:['shnorhakalutyun']`, `one:['meg']`, `good:['lav']`
4. Cyrillic 混入: `father:['հայр']`（末尾 `р` が Cyrillic）

修正は audit §6.1 の推奨案（Wiktionary 出典）通りに 17セルを一括書き換え：

| 概念 | 旧 | 新 |
|---|---|---|
| sun | `արdelays` | `արև` (`ɑˈɾev`) |
| moon | `լուսin` | `լուսին` |
| father | `հայр` | `հայր` (Cyrillic→Armenian) |
| eat | `ուdelays` | `ուտել` (`uˈtel`) |
| drink | `խմel` | `խմել` (`χəˈmel`) |
| love | `սdelays` | `սեր` |
| heart | `սirt` | `սիրտ` |
| tree | `ծar` | `ծառ` |
| house | `tun` | `տուն` |
| dog | `շun` | `շուն` |
| cat | `katou` | `կատու` |
| hand | `dzerrk` | `ձեռք` |
| eye | `atchk` | `աչք` |
| hello | `barev` | `բարև` |
| thanks | `shnorhakalutyun` | `շնորհակալություն` |
| one | `meg` | `մեկ` (`mek`) — IPA も `meɡ`→`mek` に（東アルメニア標準寄せ） |
| good | `lav` | `լավ` |

出典: Wiktionary（17セル分）+ Wikibooks Armenian/Common Phrases (`thanks`)

**§6.43 / §7.14 Sanskrit (`sa`) visarga `ः` の IPA 不整合 — 7セル:**

surface 末尾の visarga `ः`（=`ḥ`）を `aː` のような長母音にしていた問題を `aɦ` へ修正：

| 概念 | surface | 旧IPA | 新IPA |
|---|---|---|---|
| fire | अग्निः | `aɡniː` | `aɡniɦ` |
| sun | सूर्यः | `suːɾjaː` | `suːɾjaɦ` |
| moon | चन्द्रः | `tɕandɾaː` | `tɕandɾaɦ` |
| tree | वृक्षः | `vɾɨkʂaː` | `vɾɨkʂaɦ` |
| cat | मार्जारः | `maːɾdʒaːɾaː` | `maːɾdʒaːɾaɦ` |
| hand | हस्तः | `hastaː` | `hastaɦ` |
| thanks | धन्यवादः | `dʰanjaʋaːdaː` | `dʰanjaʋaːdaɦ` |

出典: Wiktionary Sanskrit declension 各語、`vsa` Vedic Sanskrit が既に visarga を `ɦ` で扱っている前例

(`mother`/`father`/`heart` 等は元から `-ā` 系 surface なので別問題、保留)

**§6.31 / §7.12 Burmese (`my`) と Rakhine (`rki`) の ASCII `N` を IPA `ɴ` に正規化 — 14セル:**

Wiktionary Burmese phonology は語末 nasal を `/ɴ/`（U+0274 LATIN LETTER SMALL CAPITAL N）として記述。データ内の便宜的 ASCII `N` を厳密 IPA に統一：

- `my`: heart, tree, house, cat, hello, thanks, good (7セル) — `káuN` → `káuɴ` 等
- `rki`: heart, tree, house, cat, hello, thanks, good (7セル) — 同様

(audit §6.31 では他 `wuu_nb` Ningbo Wu や Japanese 方言にも `N` 用法があると指摘されているが、それらは話者音韻の便宜表記として確立しており、Burmese/Rakhine と性格が異なるため今回は触らない)

### Validator 結果

実行: `node validate_wordmap_data.js`

```
Languages: 579 (modern: 499, historical: 80)
Word entries with "—": 66 (= 58 + Session1で追加した8件)
ERRORS:   0
WARNINGS: 0
PASS
```

**§6.42 (Formosan hello/thanks) は今回保留:**
- `bnn.hello`: `uninang` のまま（thanks と重複だが audit `likely-issue` 止まり、`mihumisang` 候補は方言基準確認が必要）
- `trv.hello`: `malu` のまま（good 重複だが、modern 言語のため `—` を validator が ERROR 扱い、適切な置換語が確定するまで保留）
- `pwn.hello/thanks`: `masalu` のまま（welcome/thanks gloss として許容）

### 持ち越し（Session 3 以降に対応予定）

**Schema-level:**
- §6.20 IPA 欄ラベル問題（zh_tang Baxter, ojp 甲乙類, och 再構記法）
- §6.22 surface 欄ラベル `原文` の改名
- §7.6 duplicate-coordinate UI clustering
- §7.7 Cell-level evidence status のスキーマ化

**追加リサーチ要:**
- §6.16 Iranian glk/lrc/bqi `eat == drink`（個別辞書ベース要）
- §6.42 Formosan hello/thanks の Bunun/Truku（適切な置換語の方言確認要）
- Tujia の方言基準と出典統一
- §6.31 別アプローチ — Japanese/Ningbo の `N` を許容するなら IPA 欄ラベルを「発音/転写」に緩める

---

## Session 3 (2026-05-04): UI ラベル改名 §6.20 + §6.22

**スコープ:** WM_UI ラベルを audit 推奨形に改名（21 UI言語すべて）。
歴史語の Latin 転写・学術転写・再構記法を「IPA」「原文」と呼ぶのは misleading という §6.20 / §6.22 の指摘に対応。

### 設計判断

audit は短期対応として `IPA / transcription` / `発音/転写` 形・`表記` / `Form` 形を推奨。
ただし右パネル toggle ボタンは max-width 56px に制約されるため、長い表記は溢れる。

→ WM_UI に**新キーを追加**し、**用途別に短形/長形を分ける**：

- `word` / `ipa`: toggle ボタン用（短形、56px に収まる）
- `wordCol` / `ipaCol`: モーダル単語表ヘッダ用（長形、audit 推奨どおり）

モーダルの単語表に **thead を新設**し、`wordCol` / `ipaCol` で列ヘッダを表示（従来は無ヘッダ）。
これで audit の指摘を honor しつつ、toggle ボタンの UX を壊さない。

### 変更内容

**`wordmap_data.js`** - WM_UI 全 21 言語に対し:
- `word`: 旧値 `原文` / `Word` / `Wort` 等 → 新値 `表記` / `Form` / `Forme` 等
- `ipa`: 旧値そのまま（短形、toggle ボタン用ラベル）
- `wordCol` (新規): `表記` / `Form / Transliteration` / `Forme / Translittération` 等 — 長形
- `ipaCol` (新規): `発音/転写` / `IPA / Transcription` / `API / Transcription` / `МФА / Транскрипция` 等 — 長形

| Lang | word (toggle) | ipa (toggle) | wordCol (header) | ipaCol (header) |
|---|---|---|---|---|
| ja | 表記 | 発音 | 表記 | 発音/転写 |
| ko | 표기 | 발음 | 표기 | 발음/전사 |
| zh | 写法 | 发音 | 写法 | 发音/转写 |
| en | Form | IPA | Form / Transliteration | IPA / Transcription |
| de | Form | IPA | Form / Transliteration | IPA / Transkription |
| fr | Forme | API | Forme / Translittération | API / Transcription |
| ru | Форма | МФА | Форма / Транслитерация | МФА / Транскрипция |
| ar | كتابة | صوتي | كتابة / حرفنة | صوتي / نسخ |
| (他14言語も同様) | | | | |

**`wordmap.html`:**
- `<button id="toggle-word">` の static label を `Word` → `Form` に変更（JS が言語切替時に上書きするが初期描画用）
- `aria-label` を `Toggle word display` → `Toggle form display`、`Toggle IPA display` → `Toggle IPA / transcription display` に変更
- モーダルの単語表に `<thead><tr>...</tr></thead>` を追加。Concept 列は空、`wt('wordCol')` / `wt('ipaCol')` でヘッダラベルを描画
- フォールバック: `wt('wordCol') || wt('word')` とすることで、欠落時は短形にフォールバック
- Cache buster: `wordmap_data.js?v=23` → `?v=24`

### Validator 結果

```
ERRORS:   0
WARNINGS: 0
INFOS:    66 (—) + 32 (dup-coord)
PASS
```

### Session 3 中に気付いた追加問題（未対応・記録のみ）

1. **モーダル単語表の concept 列ヘッダが空欄** — Session 3 で thead を追加したが Concept 列は空にした。`概念` / `Concept` / `의미` 等のラベルキー（例: `concept`）を WM_UI に追加し、Session 4 以降で thead 第1セルに描画するのが望ましい。

2. **`title` 属性が toggle ボタンで `wt(key)` を直接使用** ([wordmap.html:613](wordmap.html#L613)) — 現状 toggle ボタン hover 時の tooltip も短形（IPA/発音）になっている。`title` を `wt(key+'Col')` に切り替えれば、hover で長形（IPA / Transcription）が表示でき、audit の意図がより伝わる。Session 4 で対応候補。

3. **WM_UI の `english` キーが全言語で `'English'` リテラル** — UI 言語切替プルダウンの「English」表示用と思われるが、`WM_UI_LABELS.en` でも同じ `'English'` を保持しており重複。schema 整理候補だが UX 影響なしのため後回し。

4. **`word.label` (WORD_LIST) と `WM_UI.*.word` の命名衝突注意** — `word` という名前が「単語の概念ラベル（apple, dog 等）」と「列ヘッダのラベル（Form 等）」で異なる文脈に使われている。次回 schema 拡張時に `WM_UI.word` を `WM_UI.formCol` 等に rename する余地あり（今回は破壊的変更を避けて温存）。

### 持ち越し（Session 4 以降）

- §7.6 duplicate-coordinate UI clustering
- §7.7 Cell-level evidence status のスキーマ化
- §6.16 Iranian glk/lrc/bqi `eat == drink`（個別辞書ベース）
- §6.42 Formosan hello/thanks の方言基準確認
- Tujia の方言基準と出典統一
- 上記 Session 3 中に気付いた4項目（モーダル concept 列ヘッダ、toggle title 長形化、WM_UI schema 整理）

---

## Session 4 (2026-05-05): §6.28 重複キー除去 + 検証強化 + Session 3 followup

**スコープ:** Session 3 の未対応 followup 2件 と、audit §6.28（`LANG_DATA` 内の重複キーによる静かな上書きバグ）に対応。

### §6.28 — `LANG_DATA` 重複定義の除去

audit が指摘した 6 コードについて、`LANG_DATA` object literal 内で同名キーが二度定義され、JS は黙って後者で上書きしていた。validator は runtime view しか見ないため、これまで `PASS` していた。

| Code | 旧 (dead) | 新 (effective) | 動作 |
|---|---|---|---|
| `quc` | L1048 K'iche' (careful glottalization) | L2806 (Qatzijob'al) | dead 削除 |
| `kek` | L1052 Q'eqchi' | L2808 (Qʼeqchiʼ) | dead 削除 |
| `sid` | L1174 Sidamo | L2814 (Sidamo) | dead 削除 |
| `cpx` | L1195 Pu-Xian Min | L2759 Pu-Xian Min (Hinghwa) | dead 削除 |
| `wuu_wz` | L1203 Wenzhounese | L2747 Wu (Wenzhou) | dead 削除 |
| `wuu_sz` | L1205 Suzhou Wu | L2745 Wu (Suzhou) | dead 削除 |

**判断方針:** runtime behavior 不変を優先（=後者を残す）。dead code を削除しても表示・filter・count に変化なし（`Languages: 579` 維持）。コメント `// (xxx moved to later block — see end of LANG_DATA, audit §6.28 dedup Session 4)` を残してナビ性を担保。

**注意:** `quc` の dead L1048 はグロッタル化記号 (`q'aq'`, `me's`, `b'aq'wach`, `loq'oj`, `tz'i'`, `anima'`, `q'ab'`) が effective L2806 (`q'aq'`, `mes`, `q'ab'` 母音欠落, `loɡoʃik`, `mes`, `qʼɓ`) より丁寧。本来 effective 側を品質寄せすべきだが、Session 4 では破壊的変更を避けて温存。**Session 5+ で `quc` セル単位品質レビュー対象として記録**。

### Validator check #13: 同一キーの源コード上の重複検出

`validate_wordmap_data.js` に新規チェックを追加。`LANG_DATA` の object literal 内で同じコードが二度書かれていれば ERROR を発火。

```js
const dataLineKeyRe = /^  ([\w-]+):\s*\{\s*name:/gm;
const seen = {};
let mm;
while ((mm = dataLineKeyRe.exec(dataSrc)) !== null) {
    seen[mm[1]] = (seen[mm[1]] || 0) + 1;
}
const dupKeys = Object.entries(seen).filter(([, n]) => n > 1);
for (const [c, n] of dupKeys) E(`LANG_DATA: code "${c}" defined ${n} times in source...`);
```

これで「将来また誰かが同名キーを書いてしまった」場合に自動検出される。

### Session 3 followup #1: モーダル単語表の concept 列ヘッダ

WM_UI 全 21 言語に新キー `concept` を追加：

| Lang | concept |
|---|---|
| ja | 概念 |
| ko | 개념 |
| zh / yue | 概念 |
| vi | Khái niệm |
| th | ความหมาย |
| id | Konsep |
| hi | अवधारणा |
| en | Concept |
| de | Konzept |
| fr | Concept |
| it | Concetto |
| es_eu / es_mx | Concepto |
| pt_eu / pt_br | Conceito |
| ru | Понятие |
| uk | Поняття |
| ar | مفهوم |
| he | מושג |
| sw | Dhana |

[wordmap.html:1487](wordmap.html#L1487) の thead 第1セルを `wt('concept') || 'Concept'` で描画するよう修正。これで Concept / Form / IPA の3列ヘッダが揃った。

### Session 3 followup #2: toggle ボタン hover で長形を表示

[wordmap.html:613](wordmap.html#L613) の `el.title = text;` を `el.title = wt(key + 'Col') || text;` に変更。toggle ボタン (`Form` / `IPA`) を hover すると `Form / Transliteration` / `IPA / Transcription` が tooltip として出る。Toggle 短形 + tooltip 長形 で audit の意図（厳密 IPA でないことを明示）がより伝わる。

### Session 3 followup 残（Session 5+ 対応）

- **#3 `english` キー重複**: `WM_UI.*.english = 'English'` と `WM_UI_LABELS.en = 'English'` が重複。UX 影響なし、schema 整理で削除候補。
- **#4 `word` 命名衝突**: `WM_UI.word` と `WORD_LIST.label` が `word` 名で別文脈使用。schema 拡張時の rename 候補。

### Validator 結果

```
Languages: 579 (modern: 499, historical: 80)
ERRORS:   0
WARNINGS: 0
INFOS:    66 (—) + 32 (dup-coord)
PASS
```

新 check #13 も pass（重複キー除去後）。

### Session 4 中に気付いた追加問題（未対応・記録のみ）

1. **`quc` (K'iche') effective 側のグロッタル化品質低下** — dead L1048 では `q'aq'` `me's` `b'aq'wach` `loq'oj` `tz'i'` `anima'` `q'ab'` のように apostrophe で ejective を明示。effective L2806 では `mes` `qʼɓ` (母音欠落) `loɡoʃik` のように一部欠落。Session 5+ で K'iche' 標準正書法（PLFM 等）に揃えてセル単位で更新候補。

2. **`cpx` (Pu-Xian Min) 二版の語彙差** — dead L1195 と effective L2759 で `eat`, `drink`, `mother`, `father`, `tree`, `house`, `hand`, `eye`, `love`, `hello`, `thanks` の発音表記が異なる。effective 側 (Hinghwa label) は `lau˥˥bo˦˩` (老母) など複合語で詳細。dead 側はより簡素。Pu-Xian Min は Putian / Xianyou で sub-dialect 差があり、出典・方言基準を meta に明記する余地あり。

3. **`wuu_wz` / `wuu_sz` 二版の音調表記差** — Wu 系の声調記法（˥˧ vs ˥˨ 等）と母音 (ɛ vs e) で揺れあり。effective 側がより詳細だが、dead 側のローマ字化は別方針 (Y.R. Chao 系？)。出典・転写方針の整合化候補。

4. **`mnp` Min Bei の fire `xui˧˧` は通常 `xy˧˧` または `hui˧˧`** — Session 4 で Sinitic ブロックを確認中、Min Bei の fire IPA `xui` が辞書資料（Wiktionary 建瓯話 phonology）で見る `xy` / `xui` ⇄ 揺れあり。dead 側削除と無関係に元から存在する点。Session 5+ で要再確認。

5. **`ChMap`/`HIST_DESCENDANT` の確認**: Session 4 中に LANG_DATA 構造を直接いじったが、`HIST_DESCENDANT` や `EXCLUDED_CODES` への影響はなし（重複キーは元から filter に1回だけ登場）。validator も影響なし。

### 持ち越し（Session 5 以降）

**Schema-level:**
- §7.6 duplicate-coordinate UI clustering
- §7.7 Cell-level evidence status のスキーマ化

**追加リサーチ要:**
- §6.16 Iranian glk/lrc/bqi `eat == drink`（個別辞書ベース）
- §6.42 Formosan hello/thanks の方言基準確認
- Tujia の方言基準と出典統一
- Session 3 followup #3 / #4 (`english` 重複, `word` 命名衝突)
- Session 4 中に気付いた5項目（K'iche' / Pu-Xian Min / Wenzhou / Suzhou Wu の品質再確認、Min Bei fire の IPA 確認）

---

## Session 5 (2026-05-05): quc データ品質回復 + WM_UI schema cleanup

**スコープ:** Session 4 で記録した「dead L1048 quc が effective L2806 より丁寧だった」問題を解消し、WM_UI の使われていない `english` キーを除去。

### §6.28 followup: quc K'iche' データ品質回復

Session 4 では runtime behavior 不変を優先して effective L2806 を残した。ただし dead L1048 が複数セルでより標準的・正確な K'iche' 表記だったため、Session 5 でそれらを effective 側に移植。

修正対象（10セル、effective → restored）:

| Cell | 旧 (effective L2806) | 新 (restored from L1048) | 根拠 |
|------|----------------------|-------------------------|------|
| water | `ja'` / `haʔ` | `ja'` / `xaʔ` | K'iche' 中部方言で /x/ 軟口蓋摩擦音が標準（Wiktionary `ja'` K'iche'） |
| drink | `uk'ow` / `ukʼow` | `uk'aaj` / `ukʼaːh` | `uk'aaj` は動詞名詞「飲み物/飲むこと」標準形 |
| love | `logoxik` / `loɡoʃik` | `loq'oj` / `loqʼoh` | `loq'oj` 語頭は ejective q' が正しい（K'iche' "to love" 動詞名詞） |
| heart | `anima` / `anima` | `anima'` / `animaʔ` | スペイン語借用 `ánima`、K'iche' で末尾声門閉鎖 |
| house | `ja` / `ha` | `ja` / `xa` | K'iche' "house" /xa(:)/ — 軟口蓋 fricative |
| cat | `mes` / `mes` | `me's` / `meʔs` | K'iche' "cat" は声門閉鎖を伴う `me's` |
| hand | `q'ab'` / `qʼɓ` | `q'ab'` / `qʼaɓ` | **typo 修正** — 母音 `a` 欠落していた |
| eye | `waqaj` / `waqah` | `b'aq'wach` / `ɓaqʼwatʃ` | K'iche' "eye" は複合語 `b'aq' wach`（骨+顔） |
| hello | `saqarik` / `saqarik` | `saqarik` / `saqaɾik` | K'iche' /r/ は通常 tap /ɾ/ |
| one | `jun` / `hun` | `jun` / `xun` | K'iche' "one" /xun/ — 軟口蓋 fricative |

不変セル (両方同じ): fire, sun, moon, mother, father, eat, tree, dog, thanks, good

**特筆 typo 修正:** `hand: q'ab' / qʼɓ` の IPA から母音 `a` が欠落していた箇所が、Session 5 で `qʼaɓ` に修復。これは effective 側の純粋な誤記。

### Session 3 followup #3: WM_UI から `english:'English'` キーを除去

[wordmap_data.js:2873](wordmap_data.js#L2873) の WM_UI 全 21 言語に `english:'English'` リテラルが含まれていたが、`grep` で wordmap.html / wordmap_data.js / lang_names.js / app.js すべて確認しても参照されていなかった（`WM_UI_LABELS.en = 'English'` で UI 言語切替プルダウンに使われており、`english` キーは dead）。

21 行すべての ` english:'English',` を削除。WM_UI 各エントリの key 数: 18 → 17。

実行: `Edit replace_all=true`。Validator pass 維持。

### mnp Min Bei fire IPA — Session 5 では未対応

Session 4 で「`mnp.fire:['火','xui˧˧']` の IPA は Wiktionary `xy` / `hue` 系と揺れ」と note したが、これは audit が confirm した問題ではなく、私の感想ベース。出典確認なしで書き換えるのは保留。Session 6+ で Wiktionary Jian'ou phonology を確認して個別判断する。

### Validator 結果

```
Languages: 579 (modern: 499, historical: 80)
ERRORS:   0
WARNINGS: 0
INFOS:    66 (—) + 32 (dup-coord)
PASS  (check #13 重複キー検出も pass)
```

### Session 5 中に気付いた追加問題（未対応・記録のみ）

1. **`quc.thanks: maltyox / maltjoʃ`** — Wiktionary K'iche' "thank you" は `maltiox` または `maltyox`、IPA `/maltjoʃ/`。`y` (/j/) の存在は方言差。今回は両側 (dead/effective) 一致のため touch せず。Spanish loanword 起源 (`maltiox` ← Mam `chjonte`?) は別議論。

2. **K'iche' 正書法の `ʼ` (U+02BC) vs `'` (U+0027)** — 現状 surface 欄で両者混在 (`q'aq'` ASCII apostrophe vs `Qʼeqchiʼ` modifier letter apostrophe)。PLFM (Proyecto Lingüístico Francisco Marroquín) 標準は U+02BC `ʼ`。長期的には全 Mayan を U+02BC に統一すべきだが、今回は scope 外。

3. **`heart: anima' / animaʔ`** はスペイン語借用 `ánima`、本来 K'iche' は `k'u'x` (/kʼuʔʃ/) — 「心臓」というより「魂・生命」。WORD_LIST `heart` の意味定義が「心臓」(anatomical) か「心・愛情」(metaphorical) か曖昧。Session 6+ で WORD_LIST 各 concept の定義精度を上げる必要あり (audit §6.23 重複「挨拶・感謝・評価語の多義性」と同根)。

4. **WM_UI の `WM_UI_LABELS` 配列 (21 lang)** — 現在 `en:'English'`, `ja:'日本語'` 等で UI 言語切替に使われている。Session 5 で `WM_UI.*.english` を削除したことで、WM_UI 内の lang 名 (native English) 表記は `WM_UI_LABELS` に一本化された。ただし `WM_UI_LABELS` は wordmap_data.js のグローバル const として定義されているが、URL persistence (`?ui=`) や localStorage との対応キーは独自 (`es_eu`, `pt_eu` 等)。schema 統一の余地あり。

### 持ち越し（Session 6 以降）

**Schema-level:**
- §7.6 duplicate-coordinate UI clustering
- §7.7 Cell-level evidence status のスキーマ化
- Session 3 followup #4 (`word` 命名衝突 — `WM_UI.word` vs `WORD_LIST.label.word` の意味曖昧)
- Session 5 #4 (`WM_UI_LABELS` schema 統一)

**追加リサーチ要:**
- §6.16 Iranian glk/lrc/bqi `eat == drink`（個別辞書ベース）
- §6.42 Formosan hello/thanks の方言基準確認
- Tujia の方言基準と出典統一
- mnp Min Bei `fire:xui˧˧` の Wiktionary 確認
- cpx / wuu_wz / wuu_sz の Putian/Hinghwa, Wenzhou, Suzhou 方言基準明記
- Session 5 #1 quc.thanks `maltyox/maltiox` 方言差
- Session 5 #2 Mayan 系の `ʼ` (U+02BC) 統一
- Session 5 #3 WORD_LIST `heart` の意味定義（解剖学的 vs 比喩的）

---

## Session 6 (2026-05-05): §6.37/§7.6 座標クラスタ整理 + validator #14

**スコープ:** 同一座標に 3 言語以上集まる「クラスタ」を解消し、validator が今後の同種問題を自動検出するようにする。

### §6.37/§7.6 — yo/ig/pcm Lagos クラスタの解消

audit §6.37 で `(6.45, 3.40)` Lagos に 3 言語が重なっている問題を指摘していた:
- `yo` Yoruba
- `ig` Igbo
- `pcm` Nigerian Pidgin

これは「親言語 + 方言の自然な重複」ではなく、別系統の 3 言語が一点に集中するため、地図 UI 上で互いに完全に隠してしまう。民族誌的中心地で再配置:

| Code | Lang | 旧座標 (Lagos) | 新座標 | 根拠 |
|---|---|---|---|---|
| `yo` | Yoruba | 6.45, 3.40 | **7.39, 3.93** (Ibadan) | Yoruba 文化・歴史的中心 |
| `ig` | Igbo | 6.45, 3.40 | **6.17, 6.79** (Onitsha) | Igbo 商業・歴史的中心 |
| `pcm` | Nigerian Pidgin | 6.45, 3.40 (維持) | 6.45, 3.40 (Lagos) | 商業・メディア中心、Pidgin 使用最頻地 |

**判断方針:** 民族誌的代表点を優先。Lagos には pcm のみを残し、yo/ig は語族の歴史的中心へ。これで地図上の互いの重なりが解消され、3 言語とも個別にクリック可能。

**Lagos の Yoruba/Igbo 話者についての注記:** Lagos は Yoruba 都市であり、Igbo 移民人口も多いが、これは話者集中地ではなく経済中心地。Ibadan / Onitsha は語族・文化の核として機能するため、地図の代表点としてはこちらが適切。

### Validator check #14: 3+ コードの座標クラスタ検出

`validate_wordmap_data.js` に新規チェック追加。同一 `(lat,lng)` に 3 コード以上が集まる場合に WARNING を発火。歴史進行クラスタ（同一都市の親言語+祖先語）は allowlist で除外:

- `en/en_ang/en_ck/enm` (London — 現代英語 + Old English + Cockney + Middle English)
- `ko/ko_em/ko_mid` (Seoul — 現代韓国語 + Early Modern + Middle)

これらは「同一地理的継承」として正当。それ以外の 3+ クラスタが将来発生したら WARNING で目立つようになる。

```js
const HIST_PROGRESSION_OK = new Set(['en/en_ang/en_ck/enm', 'ko/ko_em/ko_mid']);
for (const g of dupGroups) {
    if (g.length < 3) continue;
    const key = g.slice().sort().join('/');
    if (HIST_PROGRESSION_OK.has(key)) continue;
    W(`coord cluster: ${g.length} codes at one (lat,lng): ${g.join(', ')} — consider distinct representative points`);
}
```

### Validator 結果

```
Languages: 579 (modern: 499, historical: 80)
ERRORS:   0
WARNINGS: 0  (Lagos クラスタ解消後)
INFOS:    66 (—) + 31 (dup-coord, 32 から 1 減 = Lagos 群消失)
PASS  (check #13, #14 ともに pass)
```

### Session 6 中に気付いた追加問題（未対応・記録のみ）

1. **2 コードの dup-coord グループ 31 件は audit `info` 維持** — 親言語+方言、近隣都市の正当な重複が大半。`audit §7.6` の「2. データ側で代表点をずらすなら」「3. validator 3言語以上 review list」のうち、3言語+ は今回対応済、2言語ペアの個別判断は scope 外。

2. **Lagos クラスタ解消の副作用観察候補** — 現状 `yo` lat=7.39, lng=3.93 で表示するが、Lagos に住む Yoruba 話者にとって「Lagos がない」のは違和感の可能性。長期的には「主要話者集中地」と「文化中心地」を別 metadata で持てると良い (`primaryCenter` / `culturalCenter`)。今は `comment: '// Ibadan'` で記録のみ。

3. **同様にチェック必要な他クラスタ** — Cape Town `xh / af`、Addis Ababa `am / om`、Lankaran `tly / azb` 等は 2 言語クラスタ。validator info 止まりだが、地図 UI で代表点ずらしの余地あり。

4. **§7.6 の長期的解決策**: validator は「3+ で WARN」だが、UI 側の spiderfy / cluster offset の仕組み追加は未着手。Leaflet クラスタ plugin or label-collision avoidance などの実装が筋。Session 7+ で UI 側も検討候補。

### 持ち越し（Session 7 以降）

**Schema-level:**
- §7.7 Cell-level evidence status のスキーマ化
- Session 3 followup #4 (`word` 命名衝突)
- Session 5 #4 (`WM_UI_LABELS` schema 統一)
- Session 6 #4 UI 側 spiderfy / cluster offset 実装

**追加リサーチ要:**
- §6.16 Iranian glk/lrc/bqi `eat == drink`
- §6.42 Formosan hello/thanks の方言基準確認
- Tujia の方言基準と出典統一
- mnp Min Bei `fire:xui˧˧` の Wiktionary 確認
- cpx / wuu_wz / wuu_sz の方言基準明記
- Session 5 #1-3 (quc.thanks 方言差 / Mayan ʼ 統一 / heart 意味定義)
- Session 6 #2-3 (Lagos 文化 vs 主要話者地、他 2 コードクラスタ個別判断)

---

## Session 7 (2026-05-05): Mayan ʼ (U+02BC) 統一

**スコープ:** Session 5 #2 で記録した「Mayan 系の `ʼ` (U+02BC) 統一」を実施。PLFM (Proyecto Lingüístico Francisco Marroquín) 標準に従い、Mayan 諸語の surface 欄および name/native 欄、さらに lang_names.js 内の言語名翻訳を ASCII `'` (U+0027) → MODIFIER LETTER APOSTROPHE `ʼ` (U+02BC) に正規化。

### 対象言語 (Mayan family)

`wordmap_data.js` の 6 言語:

| Code | Lang | name 変更 | native 変更 | words 変更 |
|---|---|---|---|---|
| `quc` | Kʼicheʼ | `K'iche'` → `Kʼicheʼ` | `Qatzijob'al` → `Qatzijobʼal` | 5 ASCII → ʼ (water/drink/love/heart/cat/eye 等) |
| `yua` | Yucatec Maya | (`Yucatec Maya` 不変) | `Maya t'aan` → `Maya tʼaan` | 16 ASCII → ʼ |
| `kek` | Qʼeqchiʼ | `Q'eqchi'` → `Qʼeqchiʼ` | (既に `Qʼeqchiʼ`) | 2 ASCII → ʼ |
| `tzo` | Tzotzil | (`Tzotzil` 不変) | `Bats'i k'op` → `Batsʼi kʼop` | 15 ASCII → ʼ |
| `mam` | Mam | (`Mam` 不変、apostrophe 無し) | (`Qyool Mam` 不変) | 8 ASCII → ʼ |
| `myn` | Classical Maya | (不変) | (不変) | 11 ASCII → ʼ |

合計: 7 line edits in wordmap_data.js（decl 4本 + words 6本のうち変更ありは 7）。

ASCII `'` 残存数: 全 6 言語で 0 (前: 68 → 後: 0)。
modifier ʼ 数: 25, 23, 21, 24, 15, 18 = 126 (IPA の既存 ʼ 含む)。

**実装方法:** `/tmp/mayan_apostrophe.js` 一回限りスクリプト。JS 文字列リテラルを正しくパースして surface フィールドのみを置換、IPA 欄は不変、エスケープを正しく re-emit。実行後はバックアップから復元 → 修正版で再実行 → 検証。

### `lang_names.js` の言語名翻訳

各 UI 言語別の言語名翻訳でも Mayan 名 `K'iche'` / `Q'eqchi'` の ASCII `'` を normalize:

| パターン | 件数 | 処理 |
|---|---|---|
| `K'iche'` → `Kʼicheʼ` | 4 | 全変換 (en, vi, etc.) |
| `Q'eqchi'` → `Qʼeqchiʼ` | 4 | 全変換 |
| `k'iche'` → `kʼicheʼ` | 6 | 全変換 (es, pt 等) |
| `q'eqchi'` → `qʼeqchiʼ` | 6 | 全変換 |
| Cyrillic `к'иче'` / `к'екчи'` → `кʼичеʼ` / `кʼекчиʼ` | 各 2 | ru, uk で変換 |
| Arabic `كيتشي'` / `كيكتشي'` → `كيتشيʼ` / `كيكتشيʼ` | 各 1 | ar |

**故意に touch しない:**
- Hebrew (he UI): `קיצ'ה` `קקצ'י` の `'` は Hebrew geresh-like 用法（ヘブライ文字の特殊音を示す Hebrew 慣例）。U+02BC ではなく ASCII `'` または U+05F3 がヘブライ語タイポグラフィー上適切。
- Swahili (sw UI): `Kʼiche` `Qʼeqchi` (末尾 ʼ なし、stylistic 短縮形)。Swahili では ejective 子音概念がないため末尾 ʼ を付けない選択は理にかなっている。

### Validator 結果

```
Languages: 579 (modern: 499, historical: 80)
ERRORS:   0
WARNINGS: 0
INFOS:    66 (—) + 31 (dup-coord)
PASS  (check #13 重複キー、#14 3+ クラスタ ともに pass)
```

### Session 7 中に気付いた追加問題（未対応・記録のみ）

1. **`tji.eye: mie / mie˨˩`** — Tujia の eye が `mie` (Latin) になっているが、Tujia は通常 `Lao Pinyin` 系統転写（数字声調付き）。Session 4 で `tji.love: a2ci1` `tji.thanks: ang2zai1` に修正済みだが、他セルとの転写整合性は別問題。Session 8+ で確認候補。

2. **`yua.cat: miis`** — Yucatec Maya の cat は `miis` /miːs/ で OK だが、Wiktionary で確認すると `mis` (短母音) も併記されている。方言・地域差の可能性。Mérida 標準として `miis` は妥当。

3. **`mam.cat: wiix`** — Mam の cat `wiix` /wiːʃ/ は Wiktionary で確認できる。問題なし。

4. **PLFM ʼ 統一の他 Mayan 派生言語** — `cak` (Kaqchikel), `jak` (Jakaltek), `poc` (Poqomam), `ixl` (Ixil), `ttc` (Tektitek), `kjb` (Q'anjob'al), `qub` (Quechua-related, not Mayan) などのコードがあれば同様の normalize 候補。今回 LANG_DATA 内のそれら言語不在のため対象外。Session 8+ で Mayan family の他言語追加時には PLFM 標準を最初から守る運用にすべき。

5. **`anima'` borrowing 注記** — Session 5 で記載した「`heart: anima' / animaʔ` はスペイン借用、本来の K'iche' は `k'u'x` /kʼuʔʃ/」問題は Session 7 時点でも未解決。`heart` の意味定義（解剖学的 vs 比喩的）と合わせて Session 8+ で再検討。

### 持ち越し（Session 8 以降）

**Schema-level:**
- §7.7 Cell-level evidence status のスキーマ化
- Session 3 followup #4 (`word` 命名衝突)
- Session 5 #4 (`WM_UI_LABELS` schema 統一)
- Session 6 #4 UI 側 spiderfy / cluster offset 実装

**追加リサーチ要:**
- §6.16 Iranian glk/lrc/bqi `eat == drink`
- §6.42 Formosan hello/thanks の方言基準確認
- Tujia の方言基準と出典統一
- mnp Min Bei `fire:xui˧˧` の Wiktionary 確認
- cpx / wuu_wz / wuu_sz の方言基準明記
- Session 5 #1, #3 (quc.thanks 方言差 / heart 意味定義)
- Session 6 #2-3 (Lagos 文化 vs 主要話者地、他 2 コードクラスタ個別判断)
- Session 7 #1-2, #5 (Tujia 転写整合, Mayan 派生言語追加時の PLFM 統一, heart `anima'` borrowing)

---

## Session 8 (2026-05-05): 民族誌的代表点で 3 言語ペアを分離 + mon/mnw 重大問題発見

**スコープ:** Session 6 で Lagos クラスタを解消したのと同様、distinct languages が同一座標に重なっている 2 コードペアのうち、明確な民族誌的代表点を持つ 3 件を分離。さらに、Mon language の code conflict (`mon` vs `mnw`) を新発見し記録。

### 民族誌的分離 3 件

| Code | Lang | 旧座標 | 新座標 | 根拠 |
|---|---|---|---|---|
| `om` | Oromo | 9.02, 38.75 (Addis Ababa) | **8.55, 39.27** (Adama) | Adama は Oromia 州の地域中心都市。Addis Ababa は Amhara/政治中心、Oromo の核ではない |
| `xh` | Xhosa | -33.93, 18.42 (Cape Town) | **-33.02, 27.91** (East London) | East London は Eastern Cape の Xhosa 中心都市。Cape Town は Afrikaans 圏 |
| `bug` | Buginese | -5.13, 119.41 (Makassar) | **-4.13, 120.00** (Sengkang) | Sengkang は Wajo regency の Bugis 中心地。Makassar は Makassarese (mak) の中心 |

各ペアで一方が「都市の文化中心」、他方が「移住先・行政中心」と重なっていた問題を解消。

**残存させた重複ペア (parent+dialect, parent+historical, etc.):**
- ja+ja_edo (Tokyo), ja_kyo+ja_heian (Kyoto), vi+vi_nom (Hanoi), fr+fro (Paris), it+la (Rome), bo+xct (Lhasa), zh_han+zh_tang (Xi'an), haw+hwc (Honolulu), quz+cqu (Cusco), uk+orv (Kyiv), no+non (Oslo), bg+cu (Sofia), tl+otl (Manila), kca+mns (Khanty-Mansi), sco+en_sco (Glasgow), tr+lad (Istanbul), es_mx+nci (Mexico City), hu+rom (Budapest), ga+en_ie (Dublin), za+cnp (Nanning), mr+en_in (Mumbai), bal+brh (Quetta), ts+nso (Polokwane), ff+bm (Bamako), xng+otk (Karakorum), ja_kg+? (Kagoshima)

これらはほとんど自然な重複（親+方言、親+歴史言語、co-located distinct families）。地図 UI の spiderfy / cluster offset で対処すべき。

### Validator 結果

```
Languages: 579 (modern: 499, historical: 80)
ERRORS:   0
WARNINGS: 0
INFOS:    66 (—) + 28 (dup-coord, 31→28 = 3 件解消)
PASS
```

### 🚨 Session 8 中に発見した重大問題（未対応・記録のみ）

**`mon` vs `mnw` 言語コード衝突 + データ重複:**

`wordmap_data.js` 内で:
- L1314: `mon: { name: 'Mon', native: 'ဘာသာမန်', lat: 16.49, lng: 97.62 }` (Mawlamyine)
- L2794: `mnw: { name: 'Mon', native: 'ဘာသာ မန်', lat: 16.49, lng: 97.62 }` (Mawlamyine)

**問題点:**

1. **ISO 639-2 では `mon` = Mongolian、`mnw` = Mon (Austroasiatic)。** `mon` を Mon language に使うのは ISO 違反。本データセットの Mongolian は `mn` (ISO 639-1) に正しく割り当てられている。
2. **両エントリが同一の Mon 言語を指している** が、surface/IPA データが大きく異なる:
   - 同じセル: water/drink/mother/tree(surface)/hand(surface)/eye(surface)/one(surface)
   - 異なる surface: father (`မ` vs `အပါ`), eat (`ၜုၚ်` vs `ဂစုက်`), love (`ဍၚ်` vs `ဍေံ`), heart (`ဍုၚ်` vs `ဗ္ၜေံ`), house (`ၐိၚ်` vs `သ္ၚိ`), dog (`ကၠဵု` vs `ပ္ၟိၚ်`), cat (`ဟိၚ်` vs `ဗ္ဍိုၚ်`), hello (`အရ` vs `ပ္ဍဲဂေါဝ်`), thanks (`ဂုဏ်` vs `တၚ်ဂုဏ်`), good (`ၐုၚ်` vs `ခိုဟ်`)
   - 同じ surface だが異なる IPA: sun (tŋai vs tŋoa), moon (ɡitɔ vs kətoa), tree (tʃəneˀ vs sɔ), hand (tɔˀ vs toa), eye (mat vs mɔʔ), one (muə vs mwoa)
3. **§6.28 validator check #13 では検出不可** — 同一キー名ではないため。別の検査ロジックが必要 (例: 同一 name + 同一 coord で別コードの組合わせを検出)。

**対応保留理由:**

- どちらの転写・語彙が正典か判断には Mon language の専門資料が必要
- 単純削除は両側のデータを失う可能性
- Mon は実は方言バリアントが多数 (Pegu, Martaban, Ye, Tavoy, Inland) — `mon` と `mnw` が異なる方言を指している可能性も

**Session 9+ 推奨対応:**

a. **短期:** 一方を rename して座標を分離 (例: `mon` → `mnw_pegu` で Bago 16.79,96.46 へ移動、`mnw` は Martaban 16.49,97.62 維持)
b. **長期:** Mon dialect 専門資料 (Bauer 1982, Diffloth) で方言基準を確定し、適切なコード割当 + meta.dialectBasis 記載
c. **validator 強化:** check #15 として「同一 (name, lat, lng) を別コードで持つ場合 WARN」を追加

### Session 8 中に気付いたその他の問題（未対応・記録のみ）

1. **Tibetan `bo` vs Classical Tibetan `xct` (Lhasa)** — 親+古典で正当な重複だが、`xct` は本来 ISO 639-3 で Classical Tibetan、Lhasa は現代政治中心で歴史中心は Yarlung Valley (Tsetang)。歴史言語の代表点を「現代都市」に置くポリシー全般の見直し余地あり (Session 9+)。

2. **`ts` Tsonga vs `nso` Northern Sotho (Polokwane)** — Tsonga heartland は Giyani (-23.30, 30.71)、Northern Sotho は Polokwane で正当。Session 9+ で `ts` を Giyani に移動候補。

3. **`ff` Fula vs `bm` Bambara (Bamako)** — Bambara は Bamako で正当、Fula は Sahel 全域で広域分散。代表点を Mopti (14.49, -4.20) などに分離する余地。Session 9+ 候補。

4. **`za` Zhuang vs `cnp` Pinghua (Nanning)** — Pinghua は Nanning で正当 (Sinitic)、Zhuang heartland は Wuming (23.16, 108.27) など西部 Guangxi。Session 9+ 候補。

5. **`tr` Turkish vs `lad` Ladino (Istanbul)** — Ladino は歴史的に Istanbul で正当 (Ottoman Sephardic)、Turkish も同。両方 Istanbul で歴史的・現代的に存在感あり。残存させて問題なし。

6. **`bal` Balochi vs `brh` Brahui (Quetta)** — 両者とも Balochistan に分布、共存している民族言語ペア。物理的に分離困難だが、Brahui 中心地は Mastung (29.79, 66.84) など。Session 9+ 候補だが微妙。

### 持ち越し（Session 9 以降）

**Schema-level:**
- §7.7 Cell-level evidence status のスキーマ化
- Session 3 followup #4 (`word` 命名衝突)
- Session 5 #4 (`WM_UI_LABELS` schema 統一)
- Session 6 #4 UI 側 spiderfy / cluster offset 実装
- **Session 8 #mon/mnw: validator check #15 (同一 name + coord で別コード)**

**追加リサーチ要:**
- §6.16 Iranian glk/lrc/bqi `eat == drink`
- §6.42 Formosan hello/thanks の方言基準確認
- Tujia の方言基準と出典統一
- mnp Min Bei `fire:xui˧˧` の Wiktionary 確認
- cpx / wuu_wz / wuu_sz の方言基準明記
- Session 5 #1, #3 (quc.thanks 方言差 / heart 意味定義)
- Session 6 #2-3 (他 2 コードクラスタ個別判断)
- Session 7 #1-2, #5
- **Session 8 mon/mnw 言語コード衝突 + Mon dialect 整理 (重大)**
- Session 8 その他 dup-coord 候補 (ts/Giyani, ff/Mopti, za/Wuming, bal/Mastung 等)

---

## Session 9 (2026-05-05): validator check #15 + 続 dup-coord 分離 2 件

**スコープ:** Session 8 で発見した mon/mnw 重大問題が再発しないよう validator に専用 check を追加。さらに Session 8 で記録した dup-coord 候補から ts と za を分離。

### Validator check #15: 同一 (name, lat, lng) 別コード検出

`validate_wordmap_data.js` に新規チェック #15 を追加。Session 8 で発見した mon/mnw のような「2 つの LANG_DATA エントリが完全に同じ name と coord で別コード」というケースを WARNING で発火。

```js
const nameCoordGroups = new Map();
for (const code of codes) {
    const lang = ctx.LANG_DATA[code];
    const k = `${lang.name}@${lang.lat},${lang.lng}`;
    if (!nameCoordGroups.has(k)) nameCoordGroups.set(k, []);
    nameCoordGroups.get(k).push(code);
}
for (const [k, group] of nameCoordGroups) {
    if (group.length < 2) continue;
    W(`same (name, lat, lng) under different codes: [${group.join(', ')}] all map to "${k}" — likely ISO code conflict or accidental duplicate`);
}
```

**現在の検出結果:**

```
! same (name, lat, lng) under different codes: [mon, mnw] all map to "Mon@16.49,97.62"
```

mon/mnw のみが該当。これは意図的に WARNING として残し、Mon dialect 専門資料が揃うまで Session 9 では touch しない。validator 出力で常に visible なので忘れることはない。

### 続 dup-coord 分離 2 件

Session 8 で記録した候補のうち、民族誌的中心地が明確な 2 件を実施:

| Code | Lang | 旧座標 | 新座標 | 根拠 |
|---|---|---|---|---|
| `ts` | Tsonga | -23.90, 29.45 (Polokwane area) | **-23.30, 30.71** (Giyani) | Giyani は Limpopo 州の Tsonga 民族中心都市。Polokwane は Northern Sotho 圏 |
| `za` | Zhuang | 22.82, 108.32 (Nanning) | **23.16, 108.27** (Wuming) | Wuming は西部広西の Zhuang 民族中心。Nanning は Pinghua (cnp) も同居する都市中心 |

**残存させた候補:**

- `ff` Fula (Bamako) — Sahel 全域分散で代表点判断が難しいため Session 10+ で再検討
- `bal/brh` (Quetta) — Balochi/Brahui は同地域で共存、物理的分離は実情に合わない
- 他、ja_kg / nan_pn / wuu_nb の小規模 2-code ペアは parent+dialect で正当

### Validator 結果

```
Languages: 579 (modern: 499, historical: 80)
ERRORS:   0
WARNINGS: 1  (mon/mnw — 意図的に visible)
INFOS:    66 (—) + 26 (dup-coord, 28→26 = 2 件解消)
PASS  (check #13, #14, #15 ともに動作確認済み)
```

### Session 9 中に気付いた追加問題（未対応・記録のみ）

1. **`xng` Middle Mongolian / `otk` Old Turkic (Karakorum)** — 両者とも歴史言語で、Karakorum (47.2, 102.83) は両言語の歴史的中心地として正当。historical-progression クラスタに準じるが、validator check #14 の allowlist には未追加（3+ ではないため触れていない）。Session 10+ で他の歴史言語ペア (zh_han/zh_tang など) も含めて allowlist 拡張検討。

2. **`zh_han` Han / `zh_tang` Tang (Xi'an, 34.26, 108.94)** — 同上。両方歴史言語で Xi'an は両朝の都。allowlist 候補。

3. **`hu` Hungarian / `rom` Romani (Budapest, 47.5, 19.04)** — distinct languages だが Hungary は Romani 人口が多く Budapest は両方の中心地として一定の正当性あり。微妙。

4. **検出された validator WARN を「許容済み」とマーク可能にする仕組み** — 現状 mon/mnw が WARN として常に出続ける。`validator-allowlist.json` のような外部ファイルで「了解済み既知問題」を抑制する仕組みがあると、CI で「new warnings」が出たときだけ目立つようになる。Session 10+ schema/UI 検討候補。

5. **`za` Zhuang を Wuming へ移したが、`za` の話者数の大半は実際には武鳴+横県+上林の三角地帯** — 単一点で「Zhuang 中心」と言うのは粗い。長期的には複数代表点 (`representativePoints[]`) を meta に持たせる schema が望ましい (Session 10+)。

### 持ち越し（Session 10 以降）

**Schema-level:**
- §7.7 Cell-level evidence status のスキーマ化
- Session 3 followup #4 (`word` 命名衝突)
- Session 5 #4 (`WM_UI_LABELS` schema 統一)
- Session 6 #4 UI 側 spiderfy / cluster offset 実装
- **Session 9 #4 validator allowlist 機構 (既知問題の抑制)**
- **Session 9 #5 representativePoints[] meta schema (複数代表点)**

**追加リサーチ要:**
- §6.16 Iranian glk/lrc/bqi `eat == drink`
- §6.42 Formosan hello/thanks の方言基準確認
- Tujia の方言基準と出典統一
- mnp Min Bei `fire:xui˧˧` の Wiktionary 確認
- cpx / wuu_wz / wuu_sz の方言基準明記
- Session 5 #1, #3 (quc.thanks 方言差 / heart 意味定義)
- Session 7 #1-2, #5
- **Session 8 mon/mnw 言語コード衝突 + Mon dialect 整理 (重大、validator #15 で常時 visible)**
- Session 8 残 dup-coord 候補 (ff/Mopti, bal/Mastung)
- Session 9 #1-3 (xng/otk, zh_han/zh_tang, hu/rom 等の正当性判断)

---

## Session 10 (2026-05-05): §6.54 古代語会話句ポリシー final cleanup

**スコープ:** audit §6.54 (Tocharian / Hittite の `good` 代用) の final cleanup。Session 1-9 の作業で hit / xto.thanks / txb.hello はすでに `—` 化済みだったが、`txb.thanks` の `kartsene` のみ残存していた。audit が「kartse 派生っぽく見えるが thanks として確定できない」と再確認対象に挙げていたため、ancient lang ポリシーに従って `—` 化。

### `txb.thanks` を `—/—` 化

| Code | Field | 旧 | 新 | 根拠 |
|---|---|---|---|---|
| `txb` | `thanks` | `𑀓𑀭𑁆𑀢𑁆𑀲𑁂𑀦𑁂` / `kartsene` | `—` / `—` | `kartsene` は `kartse` (good) の派生形 (副詞「うまく/良く」)。audit §6.54 の re-verification target、Tocharian B 文献で thanks 専用語として確定不可。ancient lang ポリシー (hit/xto/txb は hello/thanks を `—` で揃える) に従う |

これで Tocharian B の hello/thanks がともに `—` となり、Tocharian A、Hittite と方針が一致。ancient lang 全体の "hello/thanks に good 系を機械転用" 問題の最終整理が完了。

### Hit/Xto/Txb 古代語会話句ポリシー — Session 10 終了時状態

| Code | Lang | hello | thanks | good |
|---|---|---|---|---|
| `hit` | Hittite | `—/—` | `—/—` | `𒀸𒋗/asːu` ✓ |
| `xto` | Tocharian A | `𑀜𑁄𑀫𑁆/ɲom` ⚠️ (=「name」の語、要確認) | `—/—` | `𑀓𑀸𑀲𑀼/kaːsu` ✓ |
| `txb` | Tocharian B | `—/—` | **`—/—` (Session 10 fixed)** | `𑀓𑀭𑁆𑀢𑁆𑀲𑁂/kartse` ✓ |

### Validator 結果

```
Languages: 579 (modern: 499, historical: 80)
ERRORS:   0
WARNINGS: 1  (mon/mnw — 意図的に visible)
INFOS:    67 (—)  ← 66 → 67 (txb.thanks 増)
INFOS:    26 (dup-coord)
PASS
```

### 🚨 Session 10 中に気付いた追加問題（未対応・記録のみ）

1. **`xto.hello: 𑀜𑁄𑀫𑁆 / ɲom`** — Tocharian A `ñom` は通常「name (名前)」を意味する語。Wiktionary Tocharian A は `ñom` を "name" として記述する。`hello` 欄に「名前」の語を入れているのはデータ入力ミスの可能性が高い。

   **対応保留理由:** audit §6.54 では `xto.hello` を直接的に flag していない（`xto.thanks == good` のみ）。私の指摘は audit 範囲外の new finding。Session 11+ で Tocharian A の `ñom` 用法を専門資料 (Adams Tocharian Dictionary, CEToM corpus) で確認後、`—` 化または別の値に修正候補。

2. **`xto.hello: ñom` (=name) が残存している非対称な状態** — Session 10 で `xto.thanks` を `—` 化したが `xto.hello` はそのまま。Session 11+ で同じ ancient lang ポリシーで `—` 化検討。

3. **古代語他 (xpr Parthian, peo Old Persian, vsa Vedic Sanskrit, sga Old Irish, akk Akkadian, sux Sumerian 等)** — `hello/thanks` 欄が同様に問題ある可能性。Session 11+ で全古代語を audit §6.54 ポリシーで再確認候補。

4. **削除した値 `kartsene` の意味** — Adams Tocharian B Dictionary では "well, in a good manner" (副詞) として記録されている可能性が高い。`thanks` の代用としては不適だが、削除前の値の意味を `wordmap_meta.js` の `notes` フィールドや `removedValueLog` のような形で記録できると linguist にとって有用 (Session 11+ schema 検討)。

5. **「`—` だらけになる古代語の見栄え問題」** — txb のように hello + thanks 両方 `—` になると、地図モーダルの単語表でセル数が多く見える。UI 側で「`—` 連続セルは折りたたむ」オプション追加の余地あり (Session 11+ UI 検討)。

### 持ち越し（Session 11 以降）

**Schema-level:**
- §7.7 Cell-level evidence status のスキーマ化
- Session 3 followup #4 (`word` 命名衝突)
- Session 5 #4 (`WM_UI_LABELS` schema 統一)
- Session 6 #4 UI 側 spiderfy / cluster offset 実装
- Session 9 #4 validator allowlist 機構
- Session 9 #5 representativePoints[] meta schema
- Session 10 #4 削除値の `wordmap_meta.js` notes 化
- Session 10 #5 古代語 `—` 連続セルの UI 折りたたみ

**追加リサーチ要:**
- §6.16 Iranian glk/lrc/bqi `eat == drink`
- §6.42 Formosan hello/thanks の方言基準確認
- Tujia の方言基準と出典統一
- mnp Min Bei `fire:xui˧˧` の Wiktionary 確認
- cpx / wuu_wz / wuu_sz の方言基準明記
- Session 5 #1, #3 (quc.thanks 方言差 / heart 意味定義)
- Session 7 #1-2, #5
- **Session 8 mon/mnw 言語コード衝突 (重大、validator #15 で常時 visible)**
- Session 8 残 dup-coord 候補 (ff/Mopti, bal/Mastung)
- Session 9 #1-3 (xng/otk, zh_han/zh_tang, hu/rom)
- **Session 10 #1-3 xto.hello: ñom (=name) のデータ入力ミス疑い + 古代語 hello/thanks 全体再確認**

---

## Session 11 (2026-05-05): 古代語 hello/thanks 一斉点検 + 5 セル修正

**スコープ:** Session 10 で deferred した「xto.hello: ñom が name の語」と「他古代語の hello/thanks 全体再確認」を実施。複数古代語で hello/thanks 欄に **religion/ritual 専門語** や **意味的に無関係な語** が機械的に入っていた。audit §6.54 ancient-lang policy に従い `—` 化。

### 修正 5 セル

| Code | Lang | Field | 旧 | 新 | 根拠 |
|---|---|---|---|---|---|
| `xto` | Tocharian A | `hello` | `𑀜𑁄𑀫𑁆`/`ɲom` | `—`/`—` | `ñom` は Tocharian A で「name (名前)」の語。greeting ではない。Wiktionary 確認可能。Session 10 で flag 済 |
| `peo` | Old Persian | `thanks` | `𐎺𐏃𐎶𐎡𐎹`/`wahmaij` | `—`/`—` | `wahmaij` は宗教的・儀礼的な語形で Old Persian の thanks 専用形ではない。碑文には conversational thanks 定型なし |
| `ave` | Avestan | `thanks` | `𐬫𐬀𐬯𐬥𐬀`/`jasna` | `—`/`—` | `jasna` (yasna) は Zoroastrian worship ritual の名称。conversational thanks ではない |
| `vsa` | Vedic Sanskrit | `thanks` | `सुप्रियम्`/`supriːjam` | `—`/`—` | `supriyam` は「very dear/beloved」の意味。「thanks」ではない。Vedic Sanskrit に固定 thanks 定型なし |
| `sux` | Sumerian | `thanks` | `𒋗𒇲`/`ʃulaː` | `—`/`—` | `ʃulaː` は Sumerian thanks 定型として確認できない。`silim` (peace/health) が greeting で thanks 兼用された可能性はあるが固定化なし |

### Session 11 古代語 survey (今回 touch しなかった部分)

調査した範囲で **plausible (= 残存)** と判定した古代語 hello/thanks:

| Code | Lang | hello | thanks | 評価 |
|---|---|---|---|---|
| `non` | Old Norse | `heill/hɛilː` (= hale, healthy) | `þǫkk/θɔkː` | 両方 attested |
| `got` | Gothic | `𐌷𐌰𐌹𐌻𐍃/hɛːls` (= whole, hale) | `𐌸𐌰𐌲𐌺𐍃/θɑŋks` | 両方 attested |
| `cu` | OCS | `радоуисѧ/rɑdujisẽ` (= rejoice!) | `благодарьствоую` (= I give thanks) | 両方 liturgical attested |
| `cop` | Coptic | `ⲛⲟⲩϥⲣⲓ/nufri` | `ϣⲉⲡϩⲙⲟⲧ/ʃephmot` (= receive favor) | 両方 plausible |
| `arc` | Aramaic | `ܫܠܡܐ/ʃlaːmaː` (= peace) | `ܬܘܕܝ/tawdiː` | 両方 attested |
| `akk` | Akkadian | `𒁲/ʃulmu` (= peace) | `𒁲𒌅/taʃlimtu` | hello 形 attested、thanks 形は派生だが許容範囲 |
| `vsa` | Vedic Sanskrit | `स्वस्ति/swasti` (= well-being, blessing) | (Session 11 で `—` 化) | hello は attested |
| `sux` | Sumerian | `𒁲/silim` (= peace/health) | (Session 11 で `—` 化) | hello attested、thanks は不明 |
| `peo` | Old Persian | `𐎭𐎢𐎼𐎢𐎺/duruwa` (= "well/firm") | (Session 11 で `—` 化) | hello は debatable (`duruwa` は形容詞「健康な」、greeting としての確証なし) |
| `ave` | Avestan | `𐬵𐬎𐬱/huʃ` (= good prefix) | (Session 11 で `—` 化) | hello は debatable (`huʃ-` は接頭辞「良い」、greeting 単独形ではない) |

### Validator 結果

```
Languages: 579 (modern: 499, historical: 80)
ERRORS:   0
WARNINGS: 1  (mon/mnw — 意図的に visible)
INFOS:    72 (—)  ← 67 → 72 (Session 11 で 5 セル増)
INFOS:    26 (dup-coord)
PASS
```

### 🚨 Session 11 中に気付いた追加問題（未対応・記録のみ）

1. **`peo.hello: duruwa` と `ave.hello: huʃ` も debatable** — 両者とも「形容詞の good/health 系」を greeting に流用した可能性。Old Persian / Avestan の碑文・宗教文献で実際の greeting 定型は確認しにくい。Session 12+ で `—` 化候補（ただし「歴史言語の hello は全部 `—`」は過剰なので慎重に判断）。

2. **`sux.good: 𒊩𒌆/saŋ`** — Sumerian で「good」の語は通常 `du10` (DUG) や `silim`。`saŋ` (𒊩𒌆) は「head」「principal」「first」を表すことが多く、「good」として直接的には使われない。Session 12+ で Sumerian 専門資料 (PSD = Pennsylvania Sumerian Dictionary) で再確認候補。

3. **古代語の `eat`/`drink` 動詞形の不統一** — hit/xto/txb 等で `eat`/`drink` が「不定形 (infinitive)」「1sg現在 (admi)」「3sg現在 (pibati)」など活用形が混在している (vsa.eat: `admi` = 1sg、vsa.drink: `pibati` = 3sg、txb.eat: `ɕuwa` = ?)。Word Map のセル基準として「lexical lemma を基本形で」採用するか「最頻活用形で」採用するか方針未定。Session 12+ schema 議論候補。

4. **`pi` Pali (line 599+) の hello/thanks** — survey 未実施。Pali は Buddhist liturgical language で、hello/thanks 定型は限定的。Session 12+ 確認候補。

5. **`xpr` Parthian (line 2443) の hello/thanks** — survey 未実施。Session 12+ 確認候補。

6. **削除した値の意味** — Session 10 の `kartsene` と同様、Session 11 で削除した `wahmaij` `jasna` `supriːjam` `ʃulaː` `ñom` の各意味を `wordmap_meta.js` の語注として残せると linguist にとって有用。Session 12+ schema 検討。

### 持ち越し（Session 12 以降）

**Schema-level:**
- §7.7 Cell-level evidence status のスキーマ化
- Session 3 followup #4 (`word` 命名衝突)
- Session 5 #4 (`WM_UI_LABELS` schema 統一)
- Session 6 #4 UI 側 spiderfy / cluster offset 実装
- Session 9 #4 validator allowlist 機構
- Session 9 #5 representativePoints[] meta schema
- Session 10 #4-5 削除値 notes 化 / `—` 連続セル UI 折りたたみ
- Session 11 #3 古代語 eat/drink 活用形ポリシー
- Session 11 #6 削除値の `wordmap_meta.js` 語注 schema

**追加リサーチ要:**
- §6.16 Iranian glk/lrc/bqi `eat == drink`
- §6.42 Formosan hello/thanks の方言基準確認
- Tujia の方言基準と出典統一
- mnp Min Bei `fire:xui˧˧` の Wiktionary 確認
- cpx / wuu_wz / wuu_sz の方言基準明記
- Session 5 #1, #3 (quc.thanks 方言差 / heart 意味定義)
- Session 7 #1-2, #5
- **Session 8 mon/mnw 言語コード衝突 (重大、validator #15 で常時 visible)**
- Session 8 残 dup-coord 候補 (ff/Mopti, bal/Mastung)
- Session 9 #1-3 (xng/otk, zh_han/zh_tang, hu/rom)
- Session 11 #1 peo.hello / ave.hello 再確認
- Session 11 #2 sux.good `saŋ` の確認
- Session 11 #4-5 pi Pali / xpr Parthian の hello/thanks survey

---

## Session 12 (2026-05-05): 古代語 hello/thanks 第 2 弾 + アナクロニズム除去

**スコープ:** Session 11 で残した古代語の hello/thanks survey を継続。pi Pali / xpr Parthian / pal Middle Persian / phn Phoenician / uga Ugaritic / syc Classical Syriac / gez Ge'ez / xpu Punic / hbo Biblical Hebrew / xct Classical Tibetan / xsa Sabaean / nci Classical Nahuatl / fro Old French / goh Old High German / gmh Middle High German / osp Old Spanish / okz Old Khmer / osx Old Saxon / orv Old East Slavic / sukh Old Thai / cqu Classical Quechua / oma Old Malay / osu Old Sundanese / otl Old Tagalog / xqa Karakhanid / och Old Chinese / ojp Old Japanese / chb Chibcha / omc Mochica / xmr Meroitic / onw Old Nubian を点検。

明確に **時代的に anachronistic な値** (modern Indonesian/Thai phrases in 7-13c. 古代語) を 3 セル `—` 化。

### 修正 3 セル

| Code | Lang | Field | 旧 | 新 | 根拠 |
|---|---|---|---|---|---|
| `oma` | Old Malay | `hello` | `salam`/`salam` | `—`/`—` | 7c. Srivijaya 期 Old Malay は pre-Islamic (Hindu-Buddhist) で、Arabic 借用 `salām` は時代的に存在しない。Islamization は 13c.+ |
| `oma` | Old Malay | `thanks` | `tarima kasih`/`tarima kasih` | `—`/`—` | 現代 Malay/Indonesian の `terima kasih` (=「受け取る愛情」) は 19-20c. 表現で、7c. Old Malay には存在しない |
| `sukh` | Old Thai | `thanks` | `ขอบใจ`/`kʰɔːp tɕaj` | `—`/`—` | 13c. Sukhothai 期の thanks 定型ではない。`ขอบใจ` は現代 Thai (19-20c.) の casual thanks。audit §6.13 に従い `—` 化 (hello は既に `—`) |

### Session 12 古代語 survey 全結果

調査した範囲で **plausible (= 残存)** と判定した古代語 hello/thanks (前回 Session 11 で plausible とした 10 件 + 今回 16 件):

| Code | Lang | hello | thanks | 評価 |
|---|---|---|---|---|
| `pi` | Pali | `नमो/namo` (=I bow) | `अनुमोदामि/anumodaːmi` (=I rejoice with) | 両方 Buddhist liturgical、attested |
| `pal` | Middle Persian | `𐭣𐭫𐭥𐭲/droːd` | `𐭮𐭯𐭠𐭮/spaːs` (=thanks 直系) | 両方 attested |
| `xpr` | Parthian | `drōd` | `spās` | pal と同じ Iranian thanks 系 |
| `phn` | Phoenician | `𐤔𐤋𐤌/ʃalom` (=peace) | `𐤁𐤓𐤊/barak` (=blessing) | Semitic 系挨拶、attested |
| `uga` | Ugaritic | `𐎌𐎍𐎎/ʃalaːmu` | `𐎁𐎗𐎋/baːriku` | Semitic 系、attested |
| `syc` | Classical Syriac | `ܫܠܡܐ/ʃlaːmaː` | `ܫܘܒܚܐ/ʃubħaː` (=glory/praise) | 両方 liturgical attested |
| `gez` | Ge'ez | `ሰላም/salaːm` | `ምስጋና/məsgaːnaː` | Ethiopic 系、attested |
| `xpu` | Punic | `𐤔𐤋𐤌/ʃalom` | `𐤁𐤓𐤊/barak` | phn と同じ |
| `hbo` | Biblical Hebrew | `שלום/ʃaːloːm` | `תודה/toːðaː` | 両方 attested (todah は modern Hebrew でも使用) |
| `xct` | Classical Tibetan | `བཀྲ་ཤིས་བདེ་ལེགས/tʂaʃi deleks` | `ཐུགས་རྗེ་ཆེ/tʰukdʒe tɕʰe` | Tibetan 仏教 attested |
| `xsa` | Sabaean | `𐩪𐩡𐩣/salaːm` | `𐩦𐩫𐩧/ʃakar` | Semitic 系、attested |
| `nci` | Classical Nahuatl | `niltze` | `tlazōhcāmati` | Nahuatl attested |
| `fro` | Old French | `salut` | `merci` | attested |
| `goh` | Old High German | `heil` | `dank` | attested |
| `gmh` | Middle High German | `gegrüezet` | `danc` | attested |
| `osp` | Old Spanish | `salud` | `mercedes` (gracias 前身) | attested |
| `okz` | Old Khmer | `សួស្តី/suəsdəj` (modern Khmer 流れ) | `អនុមោទនា/ʔanumoːtəna` (Pali anumodanā) | debatable だが Sanskrit/Pali 影響圏なので残存 |
| `osx` | Old Saxon | `heil` | `thank` | attested |
| `orv` | Old East Slavic | `здравъ/zdravŭ` | `благодарю/blagodarju` | attested |
| `cqu` | Classical Quechua | `rimajkuʎajki` | `aɲay` | attested |
| `osu` | Old Sundanese | `wilujeng` | `nuhun` | 現代 Sundanese 流れだが Sunda Kingdom (14-16c.) では用法不明、debatable |
| `otl` | Old Tagalog | `ᜋᜊᜓᜑᜌ᜔/mabuhaj` | `ᜐᜎᜋᜆ᜔/salamat` (Arabic loan via Spanish) | salamat 直接借用は debatable だが 16c.+ pre-Spanish 時期の動機不明 |
| `xqa` | Karakhanid | `salām` | `tabug/tabuɡ` (=service/worship) | hello attested、thanks debatable |
| `och` | Old Chinese | `拜/*pˤret-s` (=bow) | `謝/*s.ɢAk-s` (=thank) | 両方 attested |
| `ojp` | Old Japanese | `安し/yasusi` | `忝し/katadʑike₁nasi` | attested |
| `chb` | Chibcha | `chibu` | `chibchachoa` | uncertain だが Lugo 1619 由来か |
| `omc` | Mochica | `—` (multi-cell unattested) | `—` | 既に conservative |
| `xmr` | Meroitic | `—` | `—` | 既に conservative |
| `onw` | Old Nubian | `ⲉⲓⲗⲗⲉ/ille` | `ⲡⲓⲥⲧⲁ/pista` | uncertain |

### Validator 結果

```
Languages: 579 (modern: 499, historical: 80)
ERRORS:   0
WARNINGS: 1  (mon/mnw — 意図的に visible)
INFOS:    75 (—)  ← 72 → 75 (Session 12 で 3 セル増)
INFOS:    26 (dup-coord)
PASS
```

### 🚨 Session 12 中に気付いた追加問題（未対応・記録のみ）

1. **`okz` Old Khmer の `សួស្តី/suəsdəj` (svasti < Sanskrit)** — Angkor 期 (9-15c.) は Sanskrit/Pali 影響強いため Sanskrit 借用は時代的にあり得るが、conversational hello として実際にどう使われたかは碑文に直接根拠なし。Session 13+ で再確認候補。

2. **`okz` Old Khmer の `អនុមោទនា/ʔanumoːtəna` (Pali anumodanā)** — Pali 仏教用語の thanks 流用。pi Pali の同じパターン。Buddhist 文化圏の thanks 表現として一貫しているが、conversational thanks としては debatable。Session 13+ 候補。

3. **`xqa` Karakhanid の `tabug/tabuɡ`** — Old Turkic で「service/worship」の語。thanks としての用法は確認しにくい。Session 13+ で `Dīwān Lughāt al-Turk` (Mahmud al-Kashgari, 11c.) 等で確認候補。

4. **`osu` Old Sundanese / `otl` Old Tagalog の値** — 現代語形をそのまま使っている可能性。Old Sundanese は 14-16c.、Old Tagalog は pre-Spanish (16c. 以前) で、現代形との対応は要確認。Session 13+ 候補。

5. **`onw` Old Nubian の `pista` thanks** — Old Nubian は完全解読されておらず、thanks 専用形は確認しにくい。Session 13+ 候補。

6. **`cqu` Classical Quechua の `rimajkuʎajki` hello** — modern Quechua の `Rimaykullayki` を Classical Quechua に転用。Classical (16c.) Quechua の greeting 定型は限定的だが、`rimaykullayki` は早期から使われた可能性あり。Session 13+ で再確認。

### 持ち越し（Session 13 以降）

**Schema-level (前回から持ち越し):**
- §7.7 Cell-level evidence status のスキーマ化
- Session 3 followup #4 (`word` 命名衝突)
- Session 5 #4 (`WM_UI_LABELS` schema 統一)
- Session 6 #4 UI 側 spiderfy / cluster offset 実装
- Session 9 #4 validator allowlist 機構
- Session 9 #5 representativePoints[] meta schema
- Session 10 #4-5 削除値 notes 化 / `—` 連続セル UI 折りたたみ
- Session 11 #3 古代語 eat/drink 活用形ポリシー
- Session 11 #6 削除値の `wordmap_meta.js` 語注 schema

**追加リサーチ要 (前回から持ち越し):**
- §6.16 Iranian glk/lrc/bqi `eat == drink`
- §6.42 Formosan hello/thanks の方言基準確認
- Tujia の方言基準と出典統一
- mnp Min Bei `fire:xui˧˧` の Wiktionary 確認
- cpx / wuu_wz / wuu_sz の方言基準明記
- Session 5 #1, #3 (quc.thanks 方言差 / heart 意味定義)
- Session 7 #1-2, #5
- **Session 8 mon/mnw 言語コード衝突 (重大、validator #15 で常時 visible)**
- Session 8 残 dup-coord 候補 (ff/Mopti, bal/Mastung)
- Session 9 #1-3 (xng/otk, zh_han/zh_tang, hu/rom)
- Session 11 #1 peo.hello / ave.hello 再確認
- Session 11 #2 sux.good `saŋ` の確認
- Session 12 #1-6 (okz / xqa / osu / otl / onw / cqu の hello/thanks 再確認)

---

## Session 13 (2026-05-05): §6.32 Wakhi 正書法統一 + 残 audit 項目巡回確認

**スコープ:** audit §6.32 で記録された wbl Wakhi の正書法不統一 (18セルが Cyrillic、2セルだけ Latin) を解消。並行して §6.34 (pau Palauan) / §6.39 (tiw Tiwi の `pussycat` borderline) を確認。

### §6.32 — wbl Wakhi cat/one を Cyrillic 表記に統一

audit が指摘した「同一言語内で表示 script が混在」の典型例。Wakhi は Perso-Arabic, Cyrillic, Latin の複数正書法を持つが、本データセットは大半が Cyrillic 表記なので、不整合を解消する方向で Latin → Cyrillic に転写:

| Code | Field | 旧 (Latin) | 新 (Cyrillic) | 根拠 |
|---|---|---|---|---|
| `wbl` | `cat` | `mušuk`/`muʃuk` | **`мушук`/`muʃuk`** | Wakhi Cyrillic 標準 (Tajik Pamir orthography): š→ш |
| `wbl` | `one` | `yiu`/`jiu` | **`йиу`/`jiu`** | Wakhi Cyrillic: y/j→й |

IPA は不変。これで wbl 全 20 セルが一貫して Cyrillic surface + IPA pronunciation の同形式になった。

### §6.34 / §6.39 — 既に解消済 / borderline 判断

- **§6.34 `pau.dog == pau.cat = katuu`** — 既に Session 1-2 で解消。現状: `dog: bilis/biˈlis`, `cat: katuu/katuː` ✓
- **§6.39 `tiw.cat: pussycat`** — Tiwi (Australian Aboriginal) で cat の borrowed term。`pussycat` は英語 colloquial 形で、Tiwi 側で `pussikat` として実際に使用されている (loanword 許容方針)。audit も「借用語を許容する方針なら問題ではない」と判断。**現状維持**。

### §6.40 / §6.16 Iranian eat==drink — 確認結果

audit §6.40 で再評価された結果、`glk` Gilaki / `lrc` Lurish / `bqi` Bakhtiari の `eat == drink` は Iranian `xwardan/xordan` 系の広義 consume 動詞として使われる可能性が高く、**個別の方言辞書なしでは即エラーにできない**と確認。Session 13 では touch せず、Session 14+ 個別辞書ベースで再判定の deferred 状態を維持。

### Validator 結果

```
Languages: 579 (modern: 499, historical: 80)
ERRORS:   0
WARNINGS: 1  (mon/mnw — 意図的に visible)
INFOS:    75 (—)  ← 不変 (Session 13 は `—` 化なし)
INFOS:    26 (dup-coord)
PASS
```

### Session 13 中に気付いた追加問題（未対応・記録のみ）

1. **`wbl.eat: 'йав-'` `wbl.drink: 'пав-'` の trailing `-`** — verbal stem 形式 (動詞語幹を `-` 付きで示す Iranian 動詞辞書の慣例)。同じパターン: `xpr Parthian` で `eat: 'xward-'` `drink: 'pī-'`、`xqa Karakhanid` で `eat: 'yi-'` `drink: 'ič-'`。これは linguistic convention だが UI 上「中途半端な単語」に見える可能性。Session 14+ で各セルに `notation: 'verbal-stem'` のような meta を追加する schema 検討。

2. **Wakhi 表記体系のドキュメント化** — wbl が Perso-Arabic / Cyrillic / Latin を持つことは meta.script に明記すべき。現状 meta.script は単一値想定。`script: { primary: 'Cyrillic (Tajik Pamir)', alternative: ['Perso-Arabic', 'Latin'] }` のような複合値 schema 候補。Session 14+。

3. **`tiw.cat: pussycat` borderline 件** — 現状維持にしたが、Tiwi 専門辞書 (Osborne 1974, Lee 1987) で土着の cat 語が attested かどうか再確認の余地あり。Session 14+ optional research 候補。

4. **Wakhi の他 cells は全て Cyrillic だが、`native: 'x̌ikwor zik'` (decl line) は Latin** — これは linguistic name (autoname) として Latin が許容される慣例。一方で他 Cyrillic 表記言語 (`ru: 'Русский'`) は Cyrillic で書かれており、不統一感あり。Session 14+ で statemeta.scripts schema と一緒に検討。

### 持ち越し（Session 14 以降）

**Schema-level:**
- §7.7 Cell-level evidence status のスキーマ化
- Session 3 followup #4 (`word` 命名衝突)
- Session 5 #4 (`WM_UI_LABELS` schema 統一)
- Session 6 #4 UI 側 spiderfy / cluster offset 実装
- Session 9 #4 validator allowlist 機構
- Session 9 #5 representativePoints[] meta schema
- Session 10 #4-5 削除値 notes 化 / `—` 連続セル UI 折りたたみ
- Session 11 #3 古代語 eat/drink 活用形ポリシー
- Session 11 #6 削除値の `wordmap_meta.js` 語注 schema
- **Session 13 #1 verbal-stem `-` 表記の meta 化**
- **Session 13 #2 複合 script 言語の `meta.script` schema 拡張**

**追加リサーチ要:**
- §6.16 Iranian glk/lrc/bqi `eat == drink`
- §6.42 Formosan hello/thanks の方言基準確認
- Tujia の方言基準と出典統一
- mnp Min Bei `fire:xui˧˧` の Wiktionary 確認
- cpx / wuu_wz / wuu_sz の方言基準明記
- Session 5 #1, #3 (quc.thanks 方言差 / heart 意味定義)
- Session 7 #1-2, #5
- **Session 8 mon/mnw 言語コード衝突 (重大、validator #15 で常時 visible)**
- Session 8 残 dup-coord 候補 (ff/Mopti, bal/Mastung)
- Session 9 #1-3 (xng/otk, zh_han/zh_tang, hu/rom)
- Session 11 #1 peo.hello / ave.hello 再確認
- Session 11 #2 sux.good `saŋ` の確認
- Session 12 #1-6 (okz / xqa / osu / otl / onw / cqu の hello/thanks 再確認)
- Session 13 #3 tiw.cat の Tiwi 土着語確認

---

## Codex 追加レビュー引き継ぎ (2026-05-05): 口頭レビューの未記録分

**目的:** Codex 側でユーザーへ口頭回答した追加レビューのうち、Claude Code が後続作業で参照できるように、未記録または記録が薄かった点をまとめて残す。ここでは即修正済みとはせず、Session 14+ の review queue とする。

### 高優先度: `sux.good` は strong error 候補

- 対象: `wordmap_data.js` の `sux.good: ['𒊩𒌆','saŋ']`
- 評価: **かなり危険。validator では捕まらないが、意味・読みの両方で `good` と合っていない可能性が高い。**
- 根拠:
  - `𒊩𒌆` は Sumerian `nin` として「女主人・女王・女神への称号」系で確認される。
  - `𒊩` 単体も `munus/sal` 系で、「good」の直接根拠にはならない。
  - 「good」は通常 `dug3/du10`、`silim` などを候補に再確認すべき。
- 参照候補:
  - https://de.wiktionary.org/wiki/%F0%92%8A%A9%F0%92%8C%86
  - https://en.wiktionary.org/wiki/%F0%92%8A%A9
  - ePSD / Pennsylvania Sumerian Dictionary で最終確認。

### 古代語 hello/thanks: 追加で要確認の強いもの

1. **`otl.hello: ᜋᜊᜓᜑᜌ᜔/mabuhaj`**
   - `mabuhay` は modern/formal welcome としては自然だが、Wiktionary では interjection が Spanish `¡Viva!` の calque とされる。
   - pre-Hispanic Old Tagalog の greeting としては弱い。`—` 化候補、または Early Modern/Spanish-contact Tagalog として注記が必要。
   - 一方 `otl.thanks: ᜐᜎᜋᜆ᜔/salamat` は San Buenaventura 1613 で `Agradecer/Graçias` 系の記載が確認できるため、`thanks` は相対的に強い。
   - 参照:
     - https://en.wiktionary.org/wiki/mabuhay
     - https://en.wiktionary.org/wiki/salamat

2. **`okz.hello: សួស្តី/suəsdəj`, `okz.thanks: អនុមោទនា/ʔanumoːtəna`**
   - `svasti` 系は Angkor 期の Sanskrit/Old Khmer 碑文で formula としてあり得るが、日常 greeting とは別物。
   - DHARMA の Old Khmer 碑文でも `śrī siddhi svasti jaya` のような祝福・開端 formula として出る例があり、conversational hello への転用は未確認。
   - `anumodanā` も Buddhist/Pali liturgical term としては plausibile だが、`thanks` の会話句としては弱い。
   - 参照:
     - https://dharmalekha.info/texts/DHARMA_INSCIK00270-4
     - https://dharmalekha.info/texts/INSCIK00270-2

3. **`xqa.thanks: tabug/tabuɡ`**
   - Old Turkic/Karakhanid で「service/worship」寄りの語と見られる。
   - `thank you` の直接対応としては未確認。`Dīwān Lughāt al-Turk` 等で再確認が必要。
   - 参照:
     - https://en.wikipedia.org/wiki/D%C4%ABw%C4%81n_Lugh%C4%81t_al-Turk

4. **`osu.hello: wilujeng`, `osu.thanks: nuhun`**
   - 現代 Sundanese としては自然だが、Old Sundanese の碑文・写本資料からそのまま確認できていない。
   - `Old Sundanese` として残すなら、Old Sundanese 辞書・写本での attest が必要。確認できない場合は descendant proxy として注記、または `—` 化候補。
   - 参照:
     - https://en.wikipedia.org/wiki/Old_Sundanese_language
     - https://www.kamussunda.net/terjemahan/kata/wilujeng.html

5. **`onw.thanks: ⲡⲓⲥⲧⲁ/pista`**
   - Old Nubian は資料自体はあるが、thanks 専用形としての `pista` は現時点で未確認。
   - Browne, *Old Nubian Dictionary* 等での直接確認が必要。
   - 参照:
     - https://openlibrary.org/books/OL717267M/Old_Nubian_dictionary

### 追加で見つかった古代 Near East 系の注意点

1. **`elx` Elamite の hello/thanks**
   - 対象: `elx.hello: ['𒅆𒅋𒄩','ʃilha']`, `elx.thanks: ['𒇷𒄩𒊑','lihari']`
   - 評価: **`partly-understood` 言語としては会話句が強すぎる可能性。**
   - Elamite は Achaemenid Elamite など一部は十分読めるが、全段階が完全解読ではなく、会話句としての `hello/thanks` は要出典。
   - 直ちに誤り確定ではないが、根拠が出なければ `—` 化または cell-level evidence status 付与候補。
   - 参照:
     - https://www.britannica.com/topic/Elamite-language

2. **`xhu` Hurrian の hello/thanks**
   - 対象: `xhu.hello: ['𒄭𒇻','hilːu']`, `xhu.thanks: ['𒀀𒅆','aʃi']`
   - Hurrian は資料が豊富で Hurrian-Hittite bilingual などもあるが、日常 greeting / thanks としての確認は別問題。
   - `hello/thanks` は出典確認まで provisional。Hittite/Hurrian bilingual や専門辞書で要確認。
   - 参照:
     - https://www.britannica.com/topic/Hurrian-language

### Formosan hello/thanks: 方言基準と gloss の注意

- `pwn.hello == pwn.thanks == masalu`
  - Paiwan `masalu` は thanks / welcome 文脈で確認できるため、即エラーではない。
  - ただし `hello` は「welcome/thanks 寄り」で、単純な `hello` としては gloss 注意。
- `bnn.hello == bnn.thanks == uninang`
  - Bunun `uninang` は gratitude/blessing 寄り。`hello` としては `uninang miqumisang` / `mihumisang` 系の候補があるが、方言基準確認が必要。
- `trv.hello == trv.good == malu`
  - Seediq/Taroko `malu` は `good/easy` 系としては確認しやすいが、`hello` としての直接根拠は弱い。
- 参照候補:
  - Bunun `Uninang`: https://www.erv-nsa.gov.tw/en/travel/uninang
  - Bunun `uninang miqumisang`: https://www.gs-forest.com/en/the-daily-lives-and-constants-of-the-tribe-health-inequalities-from-past-to-present/
  - Paiwan `masalu`: https://shop.statemusic.com.tw/soundtools/blog/60/ABAO-Thank-You.html
  - Seediq `malu` good predicate: https://minpaku.repo.nii.ac.jp/record/2538/files/SES077_005.pdf

### Iranian `eat == drink` はエラー確定ではないが継続確認

- 対象: `glk`, `lrc`, `bqi` の `eat == drink`
- Iranian `xordan/xwardan` 系は広義 consume 動詞として「食べる/飲む」の両方を担う可能性がある。
- ただし個別の Gilaki / Northern Luri / Bakhtiari 方言で basic `drink` として妥当かは、方言辞書なしでは確定不可。
- 結論: duplicate だけで自動修正しない。個別辞書ベースの確認まで deferred。
- 参照候補:
  - https://en.wiktionary.org/wiki/%D8%AE%D9%88%D8%B1%D8%AF%D9%86
  - https://en.wiktionary.org/wiki/%D8%AE%D9%88%D8%A7%D8%B1%D8%AF%D9%86

### その他、既存持ち越しの強弱メモ

- `peo.hello: duruwa` / `ave.hello: huʃ`
  - 既に Session 11 の持ち越しにあるが、Codex review でも debatable と判断。
  - 形容詞・health/good 系を greeting に流用している可能性が高く、碑文・宗教文献で greeting 定型として確認できるかが鍵。
- `xpr.thanks: spās`
  - Middle Persian `spās` 系としては plausible だが、Parthian 固有の出典が必要。
- `pi.thanks: anumodāmi`
  - Buddhist liturgical/ritual context では plausibile。ただし現代的な direct "thank you" ではなく「随喜する/賛同する」寄りなので、注記候補。

### 次回優先順の提案

1. `sux.good` を専門資料で確認し、誤りなら修正。
2. 古代語会話句のうち `otl.hello`, `okz.hello/thanks`, `xqa.thanks`, `osu.hello/thanks`, `onw.thanks` を確認。
3. `elx` / `xhu` の `hello/thanks` を「partly-understood / ancient text language の会話句」として再査定。
4. Formosan hello/thanks の方言基準を整理。
5. `mon/mnw` ISO コード衝突は重大だが、既に validator allowlist 化が検討されているため、allowlist の有無に関係なく最終的にはデータ構造として解決する。

---

## Session 14 (2026-05-05): Validator allowlist 機構実装 + mon/mnw 整理

**スコープ:** Session 9 #4 で deferred していた validator allowlist 機構を実装。Session 8 で発見した mon/mnw warning が validator 出力に常時残り、新しい WARN が出ても埋もれる問題を解消。

### Validator allowlist 実装

`validate_wordmap_data.js` 冒頭に `ALLOWLIST` 配列を追加。各エントリは:
- `match`: WARN/ERROR メッセージの substring
- `reason`: なぜ意図的に保留しているかの説明
- `ref`: audit/session 参照

`E()` / `W()` 関数で allowlist マッチをチェックし、マッチしたメッセージは `allowlisted[]` に格納（errors/warns には積まない）。

```js
const ALLOWLIST = [
    {
        match: '[mon, mnw] all map to "Mon@16.49,97.62"',
        reason: 'ISO mon=Mongolian conflict + Mon dialect data merge needs Mon-language expert (Bauer 1982 / Diffloth)',
        ref: 'audit Session 8 + 9, deferred to Session 14+',
    },
];
```

### Validator 出力フォーマット (新)

```
ERRORS (0):
WARNINGS (0):

ALLOWLISTED (1) — known issues, intentionally suppressed:
  ⊘ same (name, lat, lng) under different codes: [mon, mnw] all map to "Mon@16.49,97.62" — likely ISO code conflict or accidental duplicate (audit Session 8)
      reason: ISO mon=Mongolian conflict + Mon dialect data merge needs Mon-language expert (Bauer 1982 / Diffloth)
      ref:    audit Session 8 + 9, deferred to Session 14+

INFOS (2):
  · 75 word entries contain "—"
  · 26 duplicate-coordinate groups
```

### 効果

- WARNINGS が `0` に戻り、**新しい WARN が出たら明確に visible** になる
- 既知問題は ALLOWLISTED セクションで常時自己ドキュメント化
- exit code は ERROR 数で判定 (allowlisted は exit 0、warn と同等の扱い)
- 将来 mon/mnw を解決したら、ALLOWLIST から削除するだけで自動的に「正常 PASS」になる

### Validator 結果

```
Languages: 579 (modern: 499, historical: 80)
ERRORS:   0
WARNINGS: 0  ← クリーンな状態
ALLOWLISTED: 1  (mon/mnw — 自己ドキュメント化)
INFOS:    75 (—) + 26 (dup-coord)
PASS
```

### Session 14 中に気付いた追加問題（未対応・記録のみ）

1. **ALLOWLIST entry の expiry 機構** — 「いつまでに見直すか」の `expires` フィールドを追加し、過ぎたら WARN として再出題する仕組みがあると忘却防止になる。例: `expires: '2026-12-31'`。Session 15+ schema 拡張候補。

2. **ALLOWLIST のヒット率/未使用エントリ検出** — match パターンが古くなって何にもヒットしない場合、ALLOWLIST 自体が dead code になる。validator 終了時に「未使用 ALLOWLIST entry: N 件」を info で出すと cleanup しやすい。Session 15+ 候補。

3. **ALLOWLIST ファイル分離** — 現状 inline で ALLOWLIST を書いているが、`validator-allowlist.json` のような外部ファイルに分離すると、validator のコード変更なしに既知問題リストを更新できる。Session 15+ 候補。

4. **ALLOWLIST と CI の関係** — CI で validator を実行している場合 (現状は不明)、`exit 0` でも ALLOWLISTED 件数が変動したら警告するなど、CI ポリシーの整合検討。Session 15+ DevOps 検討候補。

### 持ち越し（Session 15 以降）

**Schema-level (前回から持ち越し):**
- §7.7 Cell-level evidence status のスキーマ化
- Session 3 followup #4 (`word` 命名衝突)
- Session 5 #4 (`WM_UI_LABELS` schema 統一)
- Session 6 #4 UI 側 spiderfy / cluster offset 実装
- Session 9 #5 representativePoints[] meta schema
- Session 10 #4-5 削除値 notes 化 / `—` 連続セル UI 折りたたみ
- Session 11 #3 古代語 eat/drink 活用形ポリシー
- Session 11 #6 削除値の `wordmap_meta.js` 語注 schema
- Session 13 #1-2 verbal-stem 表記 / 複合 script schema
- **Session 14 #1-4 ALLOWLIST 拡張 (expiry / unused detect / 外部 file / CI policy)**

**追加リサーチ要 (前回から持ち越し):**
- §6.16 Iranian glk/lrc/bqi `eat == drink`
- §6.42 Formosan hello/thanks の方言基準確認
- Tujia の方言基準と出典統一
- mnp Min Bei `fire:xui˧˧` の Wiktionary 確認
- cpx / wuu_wz / wuu_sz の方言基準明記
- Session 5 #1, #3 (quc.thanks 方言差 / heart 意味定義)
- Session 7 #1-2, #5
- **Session 8 mon/mnw (allowlisted by Session 14)**
- Session 8 残 dup-coord 候補 (ff/Mopti, bal/Mastung)
- Session 9 #1-3 (xng/otk, zh_han/zh_tang, hu/rom)
- Session 11 #1 peo.hello / ave.hello 再確認
- Session 11 #2 sux.good `saŋ` の確認
- Session 12 #1-6 (okz / xqa / osu / otl / onw / cqu の hello/thanks 再確認)
- Session 13 #3 tiw.cat の Tiwi 土着語確認

---

## Session 15 (2026-05-05): ALLOWLIST 拡張 (expires + unused-entry detection)

**スコープ:** Session 14 で実装した validator allowlist 機構を、Session 14 #1 (expires 機構) と #2 (未使用エントリ検出) で拡張。allowlist が dead code 化するのを防ぎ、定期見直しを強制する仕組みを追加。

### `expires` フィールド (Session 14 #1)

各 ALLOWLIST エントリに optional `expires: 'YYYY-MM-DD'` を追加。日付を過ぎると、エントリは「期限切れ」として WARN/ERROR を **再 promote** し、メッセージに `[ALLOWLIST EXPIRED YYYY-MM-DD; re-promoted to WARN]` suffix を付ける。

```js
{
    match: '[mon, mnw] all map to "Mon@16.49,97.62"',
    reason: '...',
    ref: 'audit Session 8 + 9, deferred to Session 14+',
    expires: '2027-01-01',  // ← 追加
},
```

実装:

```js
const TODAY_ISO = new Date().toISOString().slice(0, 10);
function checkAllowlist(msg) {
    for (const a of ALLOWLIST) {
        if (msg.includes(a.match)) {
            allowlistFired.add(a);
            if (a.expires && a.expires < TODAY_ISO) {
                return { ...a, _expired: true };
            }
            return a;
        }
    }
    return null;
}
```

mon/mnw エントリには `expires: '2027-01-01'` を設定 (約 1.5 年の猶予で Mon dialect 専門資料の確保を促す)。

### 未使用エントリ検出 (Session 14 #2)

`allowlistFired: Set<entry>` で各 entry がマッチしたかを追跡。validator 終了時に未使用 entries を新セクション `UNUSED ALLOWLIST ENTRIES` で表示:

```
UNUSED ALLOWLIST ENTRIES (1) — match string never fired, may be safe to remove:
  ? match: "NEVER_MATCHES_ANYTHING_TEST"
      ref: audit Session 8 + 9, deferred to Session 14+
```

これで「過去に対応済の問題で ALLOWLIST entry だけ残ってる」状態を自動検出できる。

### テスト結果

両機構を一時的に発火させて動作確認済:
- 期限切れ (expires=2025-01-01 過去日付) → WARN に再 promote ✓
- 未使用 (match="NEVER_MATCHES_ANYTHING_TEST") → UNUSED セクションに表示 ✓

### Validator 結果 (現在の正常状態)

```
Languages: 579 (modern: 499, historical: 80)
ERRORS:   0
WARNINGS: 0
ALLOWLISTED: 1
  ⊘ same (name, lat, lng) under different codes: [mon, mnw] ...
      reason:  ISO mon=Mongolian conflict + Mon dialect data merge needs Mon-language expert
      ref:     audit Session 8 + 9, deferred to Session 14+
      expires: 2027-01-01
INFOS:    75 (—) + 26 (dup-coord)
PASS
```

### Session 15 中に気付いた追加問題（未対応・記録のみ）

1. **`expires` フィールドの 警告 lead-time** — 現状は「過ぎたら即 WARN」だが、「30日前から `[expires soon]` を info で出す」など lead-time があると forgotten allowlist の急な失効を防げる。Session 16+ enhancement 候補。

2. **ALLOWLIST entry の作成日 `created` フィールド** — いつ追加したかを記録すれば、「`X カ月以上未解決の allowlist entry: N 件」のような stats が validator INFO で出せる。技術負債の age 可視化候補。Session 16+。

3. **複数 match のサポート** — 現状 1 entry = 1 match string。「mon/mnw 系の同じ問題が複数メッセージで出る」場合、複数 match を OR でグループ化したい。`match: ['msg1', 'msg2']` 形式の配列対応候補。Session 16+。

4. **ALLOWLIST 統計の README 反映** — README に validator 出力例を載せている場合、ALLOWLIST 件数の更新を都度反映する手間あり。CI で auto-update する仕組み余地。Session 16+ DevOps 検討。

### 持ち越し（Session 16 以降）

**Schema-level:**
- §7.7 Cell-level evidence status のスキーマ化
- Session 3 followup #4 (`word` 命名衝突)
- Session 5 #4 (`WM_UI_LABELS` schema 統一)
- Session 6 #4 UI 側 spiderfy / cluster offset 実装
- Session 9 #5 representativePoints[] meta schema
- Session 10 #4-5 削除値 notes 化 / `—` 連続セル UI 折りたたみ
- Session 11 #3 古代語 eat/drink 活用形ポリシー
- Session 11 #6 削除値の `wordmap_meta.js` 語注 schema
- Session 13 #1-2 verbal-stem 表記 / 複合 script schema
- Session 14 #3-4 ALLOWLIST 外部ファイル分離 / CI policy
- **Session 15 #1-4 ALLOWLIST expires lead-time / created field / multi-match / README auto-update**

**追加リサーチ要:**
- §6.16 Iranian glk/lrc/bqi `eat == drink`
- §6.42 Formosan hello/thanks の方言基準確認
- Tujia の方言基準と出典統一
- mnp Min Bei `fire:xui˧˧` の Wiktionary 確認
- cpx / wuu_wz / wuu_sz の方言基準明記
- Session 5 #1, #3 (quc.thanks 方言差 / heart 意味定義)
- Session 7 #1-2, #5
- **Session 8 mon/mnw (allowlisted, expires 2027-01-01)**
- Session 8 残 dup-coord 候補 (ff/Mopti, bal/Mastung)
- Session 9 #1-3 (xng/otk, zh_han/zh_tang, hu/rom)
- Session 11 #1 peo.hello / ave.hello 再確認
- Session 11 #2 sux.good `saŋ` の確認
- Session 12 #1-6 (okz / xqa / osu / otl / onw / cqu の hello/thanks 再確認)
- Session 13 #3 tiw.cat の Tiwi 土着語確認

---

## Session 16 (2026-05-05): ALLOWLIST 機構の最終整備 (created / lead-time / multi-match)

**スコープ:** Session 15 で deferred した #1 (lead-time) / #2 (created) / #3 (multi-match) を一括実装。ALLOWLIST 機構を tooling として完成形に近づける。

### 1. `created` フィールド (Session 15 #2)

各 entry に optional `created: 'YYYY-MM-DD'` を追加。技術負債の age を可視化。

mon/mnw entry に `created: '2026-05-05'` 設定。INFO セクションに「N entries are 1+ years old」サマリーを出力（現状 0 件、まだ追加直後のため）。

### 2. expires lead-time (Session 15 #1)

`EXPIRES_LEAD_DAYS = 30` を定数化。expires が今日から 30 日以内なら:
- ALLOWLISTED 表示行に `⚠ N days left` suffix を付ける
- INFO に `N ALLOWLIST entries expire within 30 days — review before they re-promote` を追加

これで「今月末に失効する」allowlist entry を validator が自動でリマインドする。

### 3. multi-match (Session 15 #3)

`match` フィールドが `string` または `string[]` を受け付けるように:

```js
function entryMatches(entry, msg) {
    const patterns = Array.isArray(entry.match) ? entry.match : [entry.match];
    return patterns.some(p => msg.includes(p));
}
```

将来「同じ root cause で異なる文言の WARN が複数出る」ケース (例: mon/mnw が renamed → 別の名前ペアでも WARN が出る等) を 1 entry で集約可能。

### テスト結果

3 機構を一時的に発火させて動作確認済:
- expires=2026-05-30 (25 日後) → `⚠ 25 days left` + INFO `1 ALLOWLIST entries expire within 30 days` ✓
- match=['NEVER_MATCHES_X', '...'] (配列) → 2 番目の文字列でマッチ、entry が allowlisted 化 ✓
- created date 表示 ✓

### Validator 結果 (現在の正常状態)

```
Languages: 579 (modern: 499, historical: 80)
ERRORS:   0
WARNINGS: 0
ALLOWLISTED: 1
  ⊘ same (name, lat, lng) under different codes: [mon, mnw] ...
      reason:  ISO mon=Mongolian conflict + Mon dialect data merge needs Mon-language expert
      ref:     audit Session 8 + 9, deferred to Session 14+
      created: 2026-05-05
      expires: 2027-01-01
INFOS:    75 (—) + 26 (dup-coord)
PASS
```

### Session 16 中に気付いた追加問題（未対応・記録のみ）

1. **ALLOWLIST 全体の health metrics** — 現状は entry 別に表示しているが、「validator 全 check の中で何 % が allowlisted で suppressed されているか」のような集計があると、全体の品質トレンドを見やすい。Session 17+ optional。

2. **ALLOWLIST entry の `severity` (WARN/ERROR を区別)** — 現状 entry が match した時の元 severity (E vs W) を区別しないが、ERROR を allowlist するのは WARN を allowlist するより重い。`severity: 'WARN' | 'ERROR'` を明記して、ERROR allowlist は別セクションで強調表示する余地あり。Session 17+ optional。

3. **ALLOWLIST entry に `owner` フィールド** — 「誰が allowlist に追加し、誰が解決責任を持つか」を記録できると CI/code review で有用。git blame でも分かるが entry 内に明示する余地。Session 17+ optional。

4. **ALLOWLIST 全体の sort 順** — 現状は配列順で表示。`expires` 昇順や `created` 降順で並べると最近追加・近々失効を視覚化しやすい。Session 17+ optional UI enhancement。

### 持ち越し（Session 17 以降）

**Schema-level (前回から持ち越し):**
- §7.7 Cell-level evidence status のスキーマ化
- Session 3 followup #4 (`word` 命名衝突)
- Session 5 #4 (`WM_UI_LABELS` schema 統一)
- Session 6 #4 UI 側 spiderfy / cluster offset 実装
- Session 9 #5 representativePoints[] meta schema
- Session 10 #4-5 削除値 notes 化 / `—` 連続セル UI 折りたたみ
- Session 11 #3 古代語 eat/drink 活用形ポリシー
- Session 11 #6 削除値の `wordmap_meta.js` 語注 schema
- Session 13 #1-2 verbal-stem 表記 / 複合 script schema
- Session 14 #3-4 ALLOWLIST 外部ファイル分離 / CI policy
- Session 15 #4 ALLOWLIST README auto-update
- **Session 16 #1-4 ALLOWLIST health metrics / severity / owner / sort 順**

**追加リサーチ要 (前回から持ち越し):**
- §6.16 Iranian glk/lrc/bqi `eat == drink`
- §6.42 Formosan hello/thanks の方言基準確認
- Tujia の方言基準と出典統一
- mnp Min Bei `fire:xui˧˧` の Wiktionary 確認
- cpx / wuu_wz / wuu_sz の方言基準明記
- Session 5 #1, #3 (quc.thanks 方言差 / heart 意味定義)
- Session 7 #1-2, #5
- **Session 8 mon/mnw (allowlisted, created 2026-05-05, expires 2027-01-01)**
- Session 8 残 dup-coord 候補 (ff/Mopti, bal/Mastung)
- Session 9 #1-3 (xng/otk, zh_han/zh_tang, hu/rom)
- Session 11 #1 peo.hello / ave.hello 再確認
- Session 11 #2 sux.good `saŋ` の確認
- Session 12 #1-6 (okz / xqa / osu / otl / onw / cqu の hello/thanks 再確認)
- Session 13 #3 tiw.cat の Tiwi 土着語確認

---

## Codex 追加レビュー 2 (2026-05-05): 古代語ブロック xlu/kho/kaw/elx/xhu

**スコープ:** 前回の Codex 引き継ぎで「次に見る」とした ancient text language の語彙ブロックを継続確認。今回は `xlu` Luwian、`kho` Khotanese、`kaw` Old Javanese、前回から継続の `elx` Elamite / `xhu` Hurrian を見た。データ修正は未実施。外部資料は一次/専門辞書に近いものを優先し、見つからない場合は「未確認」とした。

### `xlu` Luwian: 複数セルが要再確認、特に `good` と `cat`

- 対象: `wordmap_data.js` `xlu` block。
- 評価: **strong review candidate。Luwian は attested language だが、この block は Hieroglyphic Luwian 風の surface と Cuneiform Luwian / reconstruction が混在している可能性がある。**
- 確認できた背景:
  - Britannica は Luwian が cuneiform と hieroglyphic の 2 系統で記録され、互いに近いが distinct forms と説明している。
  - Oxford/Yakubovich も Luwian は cuneiform と Anatolian hieroglyphs の両方で記録されるとする。
- 個別セル:
  - `good:['𔓷𔓷','walwa']` は要注意。Cuneiform Luwian の `wa-a-šu / wāšu` が「good」として確認できる一方、現データの `walwa` は今回の検索では `good` として確認できなかった。
  - `cat:['𔓯𔗬𔑯','marwaːra']` はさらに危険。検索で見つかった Luwian `marwatar` 系は「blackness」再建語で、cat ではない。`marwaːra` が cat である根拠が必要。
  - `hello:['𔖖𔓯','halzai']` / `thanks:['𔓷𔗬','wala']` は会話句として未確認。碑文言語としては `—` 化候補または evidence status 付与候補。
  - `eye:['𔖖𔗬','hidu']` は Hittite/Luwian 周辺で `eye` が `sakui-` 系として見えるため、`hidu` の根拠確認が必要。
- 参照:
  - https://www.britannica.com/topic/Luwian-language
  - https://academic.oup.com/edited-volume/42051/chapter/355821079
  - https://palaeolexicon.com/Word/Show/26521 (`wa-a-šu` = good)
  - https://en.wiktionary.org/wiki/%F0%92%89%BF%F0%92%80%80%F0%92%8B%97%F0%92%8D%91 (`wa-a-šu-uš` = good)
  - https://en.wiktionary.org/wiki/Reconstruction:Luwian/%F0%92%88%A0%F0%92%85%88%F0%92%89%BF%F0%92%8B%BB (`marwatar` = blackness)

### `kho` Khotanese: 全体は plausible だが、Brahmi surface と語彙出典を Bailey/Khotanese Project で要照合

- 対象: `wordmap_data.js` `kho` block。
- 評価: **Khotanese 自体は richly attested なので、`elx/xhu` より残しやすい。ただし現 block は各語の surface form と意味の出典が未記録で、特に `hello/thanks/good/cat` は要確認。**
- 確認できた背景:
  - Encyclopaedia Iranica は Khotanese を Eastern Middle Iranian とし、Old/Middle/Late stages を区別する。
  - Britannica は Khotanese が 7-10c. Buddhist and other texts で richly attested と説明。
  - Khotanese Project は Digital Khotanese Dictionary を公開し、Bailey 1979 `Dictionary of Khotan Saka` などを基礎資料としている。
- 個別セル:
  - `hello:['𑀤𑁆𑀭𑀽𑀤𑀻','drːuːdiː']` は Iranian `drōd/druud` 系の greeting として plausibile。ただし Khotanese 固有形として要辞書確認。
  - `thanks:['𑀧𑁆𑀬𑀰𑁆𑀢','pjaʃta']` は `thanks` として未確認。Bailey/Khotanese Project で直接確認が必要。
  - `good:['𑀯𑀺𑀭𑀢𑁆𑀢','viratːa']` は今回の検索では `good` として確認できなかった。Khotanese では別の `good/pure/excellent` 系語があり得るため要確認。
  - `cat:['𑀰𑁆𑀰𑁆𑀭𑀅𑀼','ɕːrau']` も要確認。古代語では cat word が未確定になりやすいので、根拠なしなら `—` 候補。
- 参照:
  - https://www.iranicaonline.org/articles/khotan-iv-khotanese/
  - https://www.britannica.com/topic/Saka-language
  - https://khotanese.org/dictionary/
  - https://openlibrary.org/books/OL4408784M/Dictionary_of_Khotan_Saka

### `kaw` Old Javanese: `rahayu` は強め、`nuwun` は thanks として時代差要確認

- 対象: `wordmap_data.js` `kaw` block。
- 評価: **Old Javanese は専門辞書が強く、現 block の多くは plausible。ただし `thanks:nuwun` は modern Javanese politeness phrase の可能性があるため再確認。**
- 確認できた背景:
  - Zoetmulder / Robson `Old Javanese-English Dictionary` が主要基礎資料。
  - Wiktionary `rahayu` は Old Javanese として `good, well; auspicious` を示しており、`hello` の surface として「祝福・安寧」寄りなら plausibile。
- 個別セル:
  - `hello:['ꦫꦲꦪꦸ','rahaju']` は「good/well/auspicious」なので greeting としては semantic extension。即エラーではないが `hello` というより blessing/good-wish。
  - `good:['ꦲꦪꦸ','haju']` は `ayu/hayu` 系で plausible。
  - `thanks:['ꦤꦸꦮꦸꦤ꧀','nuwun']` は現代 Javanese の polite thanks/request marker として自然だが、Old Javanese 文献で `thanks` として attested かは未確認。Zoetmulder で要確認。
  - `cat:['ꦩꦺꦴꦁ','moŋ']` は現代/近世寄りの可能性があり、Old Javanese の animal term として要確認。
- 参照:
  - https://brill.com/display/title/23157
  - https://openlibrary.org/books/OL3004786M/Old_Javanese-English_dictionary
  - https://en.wiktionary.org/wiki/rahayu

### `elx` / `xhu`: 前回指摘を維持、ただし全20語ポリシーとして扱うべき

- `elx` Elamite:
  - 前回は `hello/thanks` を中心に指摘したが、`partly-understood` 言語としては `cat`, `love`, `good` なども confidence が問題になる。
  - 方針候補: `DATA_STATUS_OVERRIDES.elx = partly-understood` に合わせ、各セルに `sources/evidenceStatus` がないものは `—` または `provisional` 表示に寄せる。
- `xhu` Hurrian:
  - Hurrian は資料が豊富なので `attested` 扱い自体はよいが、`hello/thanks` は碑文・文書ジャンル上の問題が残る。
  - `cat:['𒊭𒉿𒍣','ʃawazi']` も古代 Near East 語彙で本当に cat か要確認。
- 参照:
  - https://www.britannica.com/topic/Elamite-language
  - https://www.britannica.com/topic/Hurrian-language

### 今回の結論と次の優先順

1. `sux.good` は引き続き最優先。
2. 次点で `xlu.good`, `xlu.cat`, `xlu.hello/thanks`。Luwian block は script/lexeme 混在の疑いがある。
3. `kho.thanks`, `kho.good`, `kho.cat` を Khotanese Project / Bailey で確認。
4. `kaw.thanks:nuwun`, `kaw.cat:moŋ` を Zoetmulder で確認。
5. `elx` は partly-understood 言語として cell-level evidence status 導入とセットで再設計するのがよい。

---

## Codex 追加レビュー 3 (2026-05-05): Hittite / Mycenaean / Scythian / Khitan 系

**スコープ:** 前回に続き ancient / fragmentary language blocks を確認。今回は `hit` Hittite、`gmy` Mycenaean Greek、`xsc` Scythian、`zkt` Khitan を中心に見た。データ修正は未実施。結果は Session 16+ の review queue とする。

### `hit` Hittite: 大半は妥当だが `sun` と `love` は意味ずれ

- 対象: `wordmap_data.js` `hit` block。
- 評価: **Hittite は比較的強い。`water`, `fire`, `tree`, `eye`, `good` などは外部辞書で確認できる。一方、少なくとも `sun` と `love` は見直し候補。**
- 確認できたセル:
  - `water: watar` は IDS Hittite で確認。
  - `fire: pahhur` は IDS Hittite で確認。
  - `tree: taru` は Hittite Wiktionary で `wood/tree` として確認。
  - `eye: sakuwa` は IDS / Palaeolexicon で確認。
  - `good: assu` は Hittite lexicon で `good`、さらに `assu: hello!` greeting としても確認。
- 要修正候補:
  - `sun:['𒅆𒉿𒀜','ʃiwatː']` は **sun ではなく day** の可能性が高い。Hittite lexicon では `siwatt-` = day、IDS では sun = `istanu-/astanu-`。
  - `love:['𒀸𒅆𒅀𒀭','asːijant']` は `dear/loved; friend` 寄り。`love` セルとしては `assiya-` (to love) または `assiyatar` (love) を検討すべき。
  - `hello` は現在 `—` だが、Hittite lexicon に `assu: hello!` がある。保守方針なら `—` 維持でもよいが、attested greeting として埋める候補はある。
- 参照:
  - https://ids.clld.org/units/208-16 (`watar` = water)
  - https://ids.clld.org/units/208-58 (`pahhur` = fire)
  - https://en.wiktionary.org/wiki/%F0%92%8B%AB%F0%92%80%80%F0%92%8A%92 (`taru` = wood/tree)
  - https://ids.clld.org/valuesets/1-520-208 (`istanu-/astanu-` = sun)
  - https://ids.clld.org/valuesets/14-410-208 (`siwat-` = day)
  - https://www.assyrianlanguages.org/hittite/en_lexique_hittite.htm (`assiya-`, `assiyatar`, `assu`)
  - https://www.palaeolexicon.com/Word/Show/26376 (`sakuwa` = eye)

### `gmy` Mycenaean Greek: strong review candidate、Linear B と後代ギリシャ語の混同疑い

- 対象: `wordmap_data.js` `gmy` block。
- 評価: **かなり危険。Linear B は syllabary で、主に宮殿行政文書の記録用。現 block は後代/古典ギリシャ語の語彙を Linear B 風の記号列にしたものが多く、実際の Linear B attestation と整合しない可能性が高い。**
- 背景:
  - Britannica は Mycenaean Greek を Linear B で書かれた palace records / inventories の chancellery language と説明。
  - Linear B は open syllables を表す syllabary で、閉音節・子音連結・有気/無気などを正確に表せない。
  - したがって `hudɔːr`, `kardia`, `opʰtʰalmos`, `agatʰos` などをそのまま Linear B surface として示すのは危険。
- 強い疑義:
  - `water:['𐀓𐀈','hudɔːr']` は、Linear B の実際の綴り・音価確認が必要。後代 Greek `hydōr` をそのまま復元しただけの可能性。
  - `tree:['𐀈𐀏','dorka']` は Greek `dorkas` 系なら「gazelle/deer」寄りで、tree ではない可能性がある。最優先確認候補。
  - `cat:['𐀀𐀂𐀨𐀫','ailuros']` は `ailouros` が後代 Greek の cat word として知られるが、Mycenaean Linear B attestation は未確認。`cat` は `—` 候補。
  - `hello:['𐀐𐀂𐀩','kʰaire']` / `thanks:['𐀐𐀩','kʰaris']` は後代 Greek greeting/thanks を Mycenaean に投影している疑いが強い。行政文書 corpus で会話句として確認できなければ `—` 化候補。
  - `good:['𐀀𐀏𐀳','agatʰos']` も後代 Greek `agathos` の投影に見える。Linear B attested form を要確認。
- 参照:
  - https://www.britannica.com/topic/Mycenaean-language
  - https://www.britannica.com/topic/Linear-A
  - https://www.worldhistory.org/Linear_B_Script/
  - https://www.palaeolexicon.com/Linear%20B

### `xsc` Scythian: conservative だが、reconstructed proxy であることを UI/meta に出すべき

- 対象: `wordmap_data.js` `xsc` block。
- 評価: **現状は `—` が多く比較的保守的。ただし埋まっている値は大半が Avestan/Old Iranian proxy で、Scythian directly attested ではない。**
- 背景:
  - Encyclopaedia Iranica は Scythian language が authentic continuous texts を持たず、主に名前・Herodotus などの間接資料から fragmentary に知られると説明。
  - `spaka` = dog は Iranica で Scythian name `Išpakaia` の基礎として `*spaka-` dog が確認できるため、かなり強い。
- 個別評価:
  - `dog:['spaka','spaka']` は比較的強い。
  - `water: ap`, `fire: ātar`, `sun: hvar`, `moon: māh`, `mother/father`, `good: vohu` などは Old Iranian proxy として plausible だが、Scythian 固有 attest ではない可能性。
  - `DATA_STATUS_OVERRIDES.xsc` は reconstructed/proxy で明示すべき。各セルに `source: proxy-from-Avestan/Old-Iranian` のような注記があると安全。
- 参照:
  - https://www.iranicaonline.org/articles/scythian-language/
  - https://www.britannica.com/topic/Scythian

### `zkt` Khitan: partially deciphered 言語として、20語を多く埋めすぎている可能性

- 対象: `wordmap_data.js` `zkt` block。
- 評価: **要再査定。Khitan は Unicode small script が使える一方、言語・文字は部分解読で、非自明なテキストはまだ完全には読めない。現 block の 17/20 程度が埋まっているのは confidence 表示なしでは強すぎる。**
- 背景:
  - Wikisource Khitan page は Khitan large/small scripts が partially deciphered で、non-trivial texts は fully understood ではないと説明。
  - Kane 2009 は中心資料だが、一般語彙すべてが確定しているわけではない。
- 個別評価:
  - `water:muri`, `fire:niár`, `sun:nair`, `moon:sair` などは Kane 由来の可能性があるが、出典セルが必要。
  - `love:nasun`, `heart:niyàmen`, `good:sayïn` など抽象語は特に要確認。
  - `hello/thanks/cat` を `—` にしている点は保守的でよい。
  - `DATA_STATUS_OVERRIDES.zkt` は既に `partly-understood` なら、UI 上も `provisional` 表示が必要。
- 参照:
  - https://wikisource.org/wiki/Main_Page/Khitan
  - https://researchers.mq.edu.au/en/publications/the-kitan-language-and-script/
  - https://www.babelstone.co.uk/Khitan/Kane2009List.html
  - https://www.omniglot.com/writing/khitan.htm

### 今回の結論と次の優先順

1. `gmy` Mycenaean Greek は block 全体を Linear B attested forms で再構築する必要がある可能性が高い。
2. `hit.sun` は `siwatt-` = day の可能性が高く、`istanu-/astanu-` へ修正候補。`hit.love` も `assiya-/assiyatar` に要再検討。
3. `xsc` Scythian は proxy 明示が必要。`spaka` 以外は Scythian direct attest と混同しない。
4. `zkt` Khitan は partially deciphered として、セル単位の confidence/source を付けるまで強く表示しすぎない。
5. 前回からの `xlu` / `kho` / `sux.good` は引き続き優先度高。

---

## Codex 追加レビュー 4 (2026-05-05): Jurchen / Old Mon / Pyu / Old Burmese / Old Cham

**スコープ:** `zkt` Khitan の隣接ブロックとして、`juc` Jurchen、`omx` Old Mon、`pyx` Pyu、`obr` Old Burmese、`occ` Old Cham を確認。データ修正は未実施。今回も「確実な誤字」より、attestation / proxy / 後代語投影の強さを評価した。

### `juc` Jurchen: 現 block は Manchu 形の投影が強く、Jurchen direct attest としては危険

- 対象: `wordmap_data.js` `juc` block。
- 評価: **strong review candidate。Jurchen は Manchu の祖先言語だが、現 block の多くは Manchu とほぼ同形で、Kane 1989 の Sino-Jurchen Vocabulary などで direct attestation をセル単位確認するまで Jurchen 語形として強く表示しない方がよい。**
- 背景:
  - Britannica は Jurchen について、現存する written examples が少なく、言語について「almost nothing is known」とする。
  - ScriptSource / Writing Systems Technical Resources も、Jurchen text は碑文・陶器・鏡などの限られた資料がほとんどで、script は Unicode 未収録と説明する。
  - Kane 1989 `The Sino-Jurchen vocabulary of the Bureau of Interpreters` は重要な一次的参照だが、オンラインで各セルを直接照合できる形では確認できなかった。
- 個別疑義:
  - `water:muke`, `fire:tuwa`, `sun:šun`, `moon:biya`, `mother:eme`, `father:ama`, `eat:jefu`, `drink:omi`, `love:gosi`, `heart:niyaman`, `tree:mo`, `house:boo`, `hand:gala`, `eye:yasa`, `good:sain` は Manchu 基本語彙として自然すぎる。Jurchen としては Kane/Jin の entry 番号または対応漢語 gloss が必要。
  - `hello:saiyūn` と `thanks:baniha` は特に現代/後代 Manchu 的な会話句に見える。Jurchen 碑文・Sino-Jurchen vocabulary で greeting / thanks として確認できなければ `—` 候補。
  - `cat:kesike` も direct attestation が必要。古代・中世資料で cat word は後代語から補われがち。
- 方針候補:
  - `DATA_STATUS_OVERRIDES.juc` を現状 `attested` のままにするなら、各セルに `source: Kane 1989` レベルの根拠を持たせる。
  - direct source が揃わない場合は、`juc` を `fragmentary/proxy` 寄りに表示し、会話句 (`hello/thanks`) は `—` 化を検討。
- 参照:
  - https://www.britannica.com/topic/Juchen-language
  - https://scriptsource.org/cms/scripts/page.php?item_id=script_detail&key=Jurc
  - https://writingsystems.info/scrlang/scripts/jurc/
  - https://catalogue.nla.gov.au/catalog/2874292

### `omx` Old Mon: 基礎語は Shorto で確認可能だが、modern Mon script 表示と時代層に注意

- 対象: `wordmap_data.js` `omx` block。
- 評価: **比較的 plausible。ただし surface 欄が現代 Mon/Burmese 系フォントで表示されており、Dvaravati / Pagan-era Old Mon の実際の碑文字形ではない。語形は Shorto 1971 / 2006 でセル単位確認が必要。**
- 背景:
  - Shorto `A dictionary of the Mon inscriptions from the sixth to the sixteenth centuries` と `A Mon-Khmer Comparative Dictionary` が主要資料。
  - ANU の Open Research Repository では Shorto/Sidwell/Cooper/Bauer 2006 が Open Access として公開されている。
  - Mon は 6 世紀頃から書かれたが、Dvaravati 系 Old Mon script と Lower Burma 系 Old Mon script の系統差がある。
- 個別評価:
  - `water:ဍာ်/ɗaːk`, `sun:တ္ၚဲ/tŋai`, `house:သ္ၚိ/sŋiʔ`, `eye:မတ်/mat`, `good:ခိုဟ်/kʰɔh` は Mon 系として plausible。
  - `fire:ပ်ၟ/pmaʔ`, `moon:ဂျိုၚ်/klɔŋ`, `cat:ဂျိ/kluj`, `love:ဖျုန်/pʰyon` は Shorto の entry で直接確認したい。特に `cat` と `love` は意味がずれやすい。
  - `hello/thanks` が `—` なのは保守的でよい。
- 方針候補:
  - Old Mon は `attested` 扱いでよいが、`surface` 欄は「原文」ではなく「標準化表記 / normalized form」と明示する。
  - `mon` / `mnw` の重複 allowlist と合わせ、Modern Mon / Old Mon / ISO `mon` conflict の説明を meta に集約するとよい。
- 参照:
  - https://openresearch-repository.anu.edu.au/items/0d39362c-3ffa-4815-86bf-155af4393de2
  - https://library.khmerstudies.org/bib/1761
  - https://www.omniglot.com/writing/mon.htm

### `pyx` Pyu: partly-understood 方針は妥当、ただし lexical confidence が必要

- 対象: `wordmap_data.js` `pyx` block。
- 評価: **現状の `—` 多め方針はよい。ただし埋まっている 13 セルは、Pyu direct evidence / Miyake reconstruction / Tibeto-Burman comparison のどれなのかを区別しないと強すぎる。**
- 背景:
  - Britannica / UNESCO 系資料では Myazedi inscription が Pyu 解読の鍵になったことが確認できる。
  - Miyake 2024 は Kubyaukgyi/Myazedi inscription の Pyu face を新たに分析し、appendix で glossary / apparatus を提供している。
  - Pyu は完全未解読ではないが、資料は碑文中心で、語彙解釈には tentative な部分がある。
- 個別評価:
  - `water:ʔuy`, `fire:vyaŋ`, `sun:ño`, `moon:hla`, `tree:siŋ`, `house:vaiŋ`, `dog:kwiy`, `hand:lak`, `eye:mik`, `one:te` などは plausible だが、Miyake / Luce / Blagden の対応表で確認が必要。
  - `mother:na`, `father:paʔ`, `eat:cyaʔ` は基本語としてあり得るが、短い形なので gloss drift に注意。
  - `hello/thanks/love/heart/cat/good` を `—` にしている点は適切。
- 方針候補:
  - `pyx` は `partly-understood` 維持。
  - セル単位で `direct-Myazedi`, `reconstructed`, `comparative-proxy`, `unattested` のように分けると、UI 上の誤解が大幅に減る。
- 参照:
  - https://www.britannica.com/topic/Myazedi-inscription
  - https://www.unesco.org/en/memory-world/myazedi-quadrilingual-stone-inscription
  - https://brill.figshare.com/articles/journal_contribution/A_new_study_of_the_Pyu_face_of_the_Kubyaukgyi_Myazedi_inscription_Glossary_and_apparatus_Appendix_to_the_article_by_Marc_Miyake_published_in_CLAO_2024_/26317744

### `obr` Old Burmese: 概ね plausible だが、surface 欄は Pagan-era orthography と modern normalized form の混在に注意

- 対象: `wordmap_data.js` `obr` block。
- 評価: **大きな赤信号は少ない。Old Burmese は Myazedi 以降の碑文でよく確認でき、Modern Burmese と連続している。ただし現 block は現代ビルマ文字で normalized された基本語が多く、Pagan-era inscription form として表示するには注記が必要。**
- 背景:
  - Myazedi inscription は 1113 年の四言語碑文で、Old Burmese / Pali / Old Mon / Pyu を含む。
  - Old Burmese は 12-16 世紀の碑文に確認され、Modern Burmese と語順・基本語彙がかなり連続する。
- 個別評価:
  - `hand:လက်/lak`, `eye:မ္ယက်/mlak`, `one:တ/tac`, `house:အိမ်/ʔim`, `good:ကောင်း/kawŋ` などは plausible。
  - `water:ရိ/riy`, `sun:နိ/niy`, `mother:အဝ/ʔaw`, `drink:ၐုက်/suk`, `dog:ခွၞး/kʰwiː` は Old Burmese specific form として専門資料で確認したい。
  - `love:ချစ်/klyit`, `cat:ကြောင်/klyaŋ`, `heart:နှလုံး/hnaluːŋ` は現代語にも近いため、Old Burmese attestation か normalized modern equivalent かを明示したい。
  - `hello/thanks` が `—` なのは古代語ポリシーとして適切。
- 参照:
  - https://www.britannica.com/topic/Myazedi-inscription
  - https://www.unesco.org/en/memory-world/myazedi-quadrilingual-stone-inscription
  - https://en.wikipedia.org/wiki/Old_Burmese

### `occ` Old Cham: Chamic reconstruction と inscriptional Old Cham の境界を明示したい

- 対象: `wordmap_data.js` `occ` block。
- 評価: **多くは Chamic / Austronesian として plausible。ただし `Old Cham` として inscriptional attestation を示しているのか、Thurgood 1999 などの Proto-/Old Chamic reconstruction を使っているのかが曖昧。**
- 背景:
  - Thurgood 1999 は ancient Cham から modern dialects への変化を扱い、Chamic lexicon / reconstructions を提供する主要資料。
  - ACD も Thurgood 1999 を Chamic source として収録している。
- 個別評価:
  - `fire:apuy`, `moon:bulan`, `father:amaŋ`, `heart:hatai`, `eye:mata`, `one:sa` は Chamic/Austronesian としてかなり plausible。
  - `water:ie`, `sun:aṇdaw`, `eat:bɔh`, `love:klɛn`, `tree:phuəŋ`, `house:sɔŋ`, `cat:mɛw`, `good:siam` は Old Cham inscription / Thurgood reconstruction での直接確認が必要。
  - `hello/thanks` が `—` なのは適切。
- 方針候補:
  - `occ` は `attested` でもよいが、セルごとに `inscriptional Old Cham` と `reconstructed Chamic` を分ける。
  - surface 欄が Latin transliteration であることを UI/meta で明示する。
- 参照:
  - https://books.google.com/books/about/From_Ancient_Cham_to_Modern_Dialects.html?id=MBGYb84A7SAC
  - https://catalogue.nla.gov.au/catalog/1484426
  - https://acd.clld.org/sources/thurgood1999

### 今回の結論と次の優先順

1. `juc` は今回範囲の最優先。Manchu forms を Jurchen として投影している疑いが強く、`hello/thanks` は特に `—` 候補。
2. `pyx` は方針自体は良いが、埋まっている基本語に source/confidence を付けたい。
3. `omx`, `obr`, `occ` は大きな即時エラーより、normalized surface / inscriptional form / reconstruction の区別不足が主問題。
4. この範囲も `surface` 欄ラベル問題と直結する。`原文` ではなく `表記 / 転写 / 再構形` を表せる schema/UI に寄せるのが望ましい。

---

## Session 17 (2026-05-05): Codex 追加レビュー 2/3/4 confirmed fixes — 9 セル `—` 化

**スコープ:** Codex 追加レビュー 2 (xlu Luwian), 3 (gmy Mycenaean Greek, hit Hittite), 4 (juc Jurchen) で **明確に間違いまたは未検証** と特定された 9 セルを ancient lang policy に従い `—/—` 化。

### 修正 9 セル

| Code | Lang | Field | 旧 | 根拠 (Codex review) |
|---|---|---|---|---|
| `xlu` | Luwian | `cat` | `𔓯𔗬𔑯`/`marwaːra` | `marwatar` 系は **「blackness」の再建語**、cat ではない (Codex 2) |
| `xlu` | Luwian | `hello` | `𔖖𔓯`/`halzai` | 会話句として未確認、ancient lang policy |
| `xlu` | Luwian | `thanks` | `𔓷𔗬`/`wala` | 同上、Luwian 文献に thanks 定型なし |
| `gmy` | Mycenaean Greek | `cat` | `𐀀𐀂𐀨𐀫`/`ailuros` | `ailouros` は **後代 Greek の cat word**、Linear B 未 attestation (Codex 3) |
| `gmy` | Mycenaean Greek | `hello` | `𐀐𐀂𐀩`/`kʰaire` | 後代 Greek `χαῖρε` を Mycenaean に投影 |
| `gmy` | Mycenaean Greek | `thanks` | `𐀐𐀩`/`kʰaris` | 後代 Greek `χάρις` の Linear B 投影 |
| `hit` | Hittite | `sun` | `𒅆𒉿𒀜`/`ʃiwatː` | `siwatt-` は IDS で **「day」と確認**、sun は `istanu-/astanu-` (Codex 3) |
| `juc` | Jurchen | `hello` | `saiyūn` | **Manchu 形の Jurchen 投影**、direct attestation なし (Codex 4) |
| `juc` | Jurchen | `thanks` | `baniha` | 同上、Manchu 会話句、Jurchen 碑文/Sino-Jurchen vocabulary に thanks 形なし |

**hit.sun の修正方針:** 正しい Hittite sun は `istanu-` だが cuneiform spelling 確証なく書くと別の誤情報リスクあり。安全策として `—` 化、Hittite cuneiform 専門家による確定を Session 18+ 課題に。

### Codex 2/3/4 で flag されたが今回 touch しなかったセル

- `xlu.good: walwa`, `xlu.eye: hidu` — Cuneiform Luwian 専門資料確認要
- `kho.cat / thanks / good` — Khotanese Project / Bailey Dictionary 確認要
- `kaw.thanks: nuwun`, `cat: moŋ` — Zoetmulder Old Javanese Dictionary 確認要
- `gmy.tree: dorka` — Greek `dorkas` (gazelle) の可能性
- `hit.love: asːijant` — `assiya-` / `assiyatar` 候補だが cuneiform 確認要
- `juc.cat: kesike` — Kane 1989 Sino-Jurchen vocabulary で確認要
- `juc.water/fire/sun/moon/...` — Manchu 形の Jurchen 投影疑い、各セル direct source 確認要

これらは Session 18+ で個別に専門資料判断。

### Validator 結果

```
Languages: 579 (modern: 499, historical: 80)
ERRORS:   0
WARNINGS: 0
ALLOWLISTED: 1
INFOS:    84 (—)  ← 75 → 84 (Session 17 で 9 セル増)
INFOS:    26 (dup-coord)
PASS
```

### Session 17 中に気付いた追加問題（未対応・記録のみ）

1. **`xsc` Scythian の `spaka` 以外 proxy** (Codex 3 指摘) — `DATA_STATUS_OVERRIDES.xsc` 降格候補
2. **`zkt` Khitan のセル単位 confidence** (Codex 3 指摘) — 17/20 埋まっているのは強すぎる、抽象語 `—` 化候補
3. **`gmy` Mycenaean Greek block 全体再構築** (Codex 3 指摘) — Linear B attested forms 必要
4. **`juc` Jurchen block 全体再評価** (Codex 4 指摘) — Manchu 形の Jurchen 投影疑い、`hello/thanks` 以外も広範に再評価候補
5. **削除値のドキュメント化** — Session 10/11 で言及した「削除値を `wordmap_meta.js` notes として保存する仕組み」が今回 9 セル削除でさらに必要性増大

### 持ち越し（Session 18 以降）

**Schema-level:**
- §7.7 Cell-level evidence status のスキーマ化 + `direct-attested / reconstructed / proxy / unattested` のセル単位区分 (Codex 3/4 指摘)
- Session 3 #4, Session 5 #4, Session 6 #4, Session 9 #5
- Session 10 #4-5, Session 11 #3, #6
- Session 13 #1-2, Session 14 #3-4, Session 15 #4, Session 16 #1-4
- Session 17 #1 xsc.dataStatus / #2 zkt confidence / #4 juc 再評価 / #5 削除値 notes schema

**追加リサーチ要:**
- §6.16 Iranian glk/lrc/bqi `eat == drink`
- §6.42 Formosan hello/thanks 方言基準
- Tujia 方言基準 / mnp Min Bei fire IPA / cpx/wuu_wz/wuu_sz 方言基準
- Session 5 #1, #3, Session 7 #1-2, #5
- **Session 8 mon/mnw (allowlisted, expires 2027-01-01)**
- Session 8 残 dup-coord / Session 9 #1-3 / Session 11 #1-2
- Session 12 #1-6 / Session 13 #3
- **Codex 2/3/4 残: xlu.good/eye, kho.*, kaw.*, gmy.tree/water/good, hit.love, juc.cat/その他基本語**
- **Session 17 #3 hit.sun の正しい cuneiform 復活 (現在 `—`、`istanu-` cuneiform 確定後)**

---

## Codex 追加レビュー 5 (2026-05-05): Old Chinese / Old Japanese / Tangut / Sogdian / Old Turkic

**スコープ:** `och` Old Chinese、`ojp` Old Japanese、`txg` Tangut、`sog` Sogdian、`otk` Old Turkic を確認。データ修正は未実施。直近の未コミット差分で `juc.hello/thanks` はすでに `—` 化されていることを確認したため、今回は次の歴史語ブロックに進んだ。

### `otk` Old Turkic: `sun` の runiform surface と `hello` が強い再確認候補

- 対象: `wordmap_data.js` `otk` block。
- 評価: **Old Turkic は資料が強く、多くの基本語は plausible。ただし `sun` の Old Turkic script 表記と `hello` は優先確認が必要。**
- 確認できた背景:
  - Old Turkic corpus は Orkhon/Yenisei inscriptions と manuscripts が中心で、Old Turkic script の代表的語形は辞書で確認可能。
  - Türk Tili の Old Turkic dictionary では `sub` = water, `o:t` = fire が直接確認できる。
  - `Drevnetyurkskiy Slovar` / Clauson / Tekin が基本参照。
- 個別評価:
  - `water:['𐰽𐰆𐰉','sub']` は強い。Türk Tili で `𐰽𐰆𐰉 sub` = water と確認。
  - `fire:['𐰆𐱃','ot']` も強い。ただし Türk Tili は `ot` grass と `o:t` fire を区別するため、IPA/転写側に長母音 `o:t` または注記があるとよい。
  - `moon:['𐰀𐰖','aj']`, `father:['𐰴𐰭','qaŋ']`, `dog:['𐰃𐱃','it']`, `one:['𐰋𐰃𐰼','bir']` は plausible。
  - `sun:['𐰚𐰰𐰣','kyn']` は **強い再確認候補**。Old Turkic `kün` = sun/day は自然だが、surface `𐰚𐰰𐰣` は `kün` の標準的な runiform 綴りに見えず、`qan/khan` 系に読める可能性がある。`kün` として表示するなら Old Turkic script の正しい綴りを辞書で確認すべき。
  - `hello:['𐰰𐰠𐰢','esænmy']` は **現代 Turkic 的な “esenmi?” を古代語に投影している疑い**。Orkhon inscriptions で conversational greeting として attested でなければ `—` 候補。
  - `eat:['𐰘𐰃-','je']`, `drink:['𐰃𐰲-','itʃ']`, `love:['𐰽𐰋-','sæb']` は verbal stem 表示であり、`-` が辞書語幹記号であることを UI/meta に出す必要がある。
- 参照:
  - https://turk-tili.com/dictionary/sub?lang=en
  - https://turk-tili.com/dictionary/%C5%8Dt?lang=en
  - https://zenodo.org/records/12594595
  - https://kaikki.org/dictionary/Old%20Turkic/index.html

### `ojp` Old Japanese: 基本語は概ね良いが `cat` と会話句は時代差が危険

- 対象: `wordmap_data.js` `ojp` block。
- 評価: **Old Japanese として資料は強いが、現 block は漢字表記 + 音韻転写の normalized display であり、Man'yogana の原文ではない。特に `cat`, `hello`, `thanks` は追加確認候補。**
- 背景:
  - ONCOJ は Old Japanese period の全テキストを原文・音韻転写・lemma 付きで扱う主要 corpus。
  - Old Japanese は主に 7-8 世紀、資料は詩歌が中心。日常会話句の attestation は限られる。
  - `₁` などの下付き数字は上代特殊仮名遣の区別で、IPA そのものではない。この点は既存 audit §6.20 と一致。
- 個別評価:
  - `water:水/mintu`, `fire:火/pə`, `sun:日/pi`, `moon:月/tukï`, `tree:木/kə`, `hand:手/ta`, `eye:目/ma`, `good:良し/yo₁si` は概ね plausible。
  - `mother:母/papa`, `father:父/titi` も Old Japanese として plausible だが、現代日本語と意味領域・敬称関係が違うので ONCOJ lemma で確認したい。
  - `cat:['猫','neko']` は **要確認**。猫自体は奈良時代に知られていても、Old Japanese corpus で `neko` が普通名詞として確実に attested かは未確認。未確認なら `—` または `later attested` 注記候補。
  - `hello:['安し','yasusi']` は「安い/平穏である」系の形容詞で、greeting 専用語ではない。古代語会話句ポリシー上は `—` 候補に再浮上させるべき。
  - `thanks:['忝し','katadʑike₁nasi']` は感謝・恐縮の語として later classical Japanese では自然だが、Old Japanese 8 世紀 corpus での attestation と `thanks` 用法を確認したい。
- 方針候補:
  - `ojp` は `surface` を「原文」と呼ばず、`normalized logographic form + OJ transcription` と説明する。
  - `hello/thanks` は「意味として礼・感謝に近い形容詞」なのか「挨拶・感謝表現として attested」なのかを分ける。
- 参照:
  - https://oncoj.ninjal.ac.jp/
  - https://digital.humanities.ox.ac.uk/article/oxford-ninjal-corpus-of-old-japanese
  - https://www.thebritishacademy.ac.uk/projects/academy-research-projects-oxford-corpus-old-japanese/
  - https://academic.oup.com/edited-volume/61882/chapter-abstract/547696493

### `och` Old Chinese: 語形は概ね Baxter-Sagart 方針だが、`hello` と `cat` は注記が必要

- 対象: `wordmap_data.js` `och` block。
- 評価: **Old Chinese reconstruction としては概ね方針が通っている。ただし `hello:拜` は “bow/obeisance” であって modern greeting ではない。`cat:貓` も pre-Han / Old Chinese concept list での扱いを確認したい。**
- 背景:
  - Baxter-Sagart 2014 は Old Chinese reconstruction の主要参照。
  - Sagart & Ma 2020 は 250 concept list を Baxter-Sagart reconstruction で提供し、pre-Han attestation と複数候補の問題を明示している。
  - `*C.`, `*s.`, `*qˤ`, `*ɢA` などは IPA ではなく reconstruction notation。既存 audit §6.20 の UI ラベル問題に該当。
- 個別評価:
  - `water:水/*s.turʔ`, `fire:火/*qʷʰəjʔ`, `sun:日/*C.nik`, `moon:月/*ŋʷat`, `heart:心/*səm`, `hand:手/*n̥uʔ`, `eye:目/*C.muk`, `one:一/*ʔit`, `good:好/*qʰˤuʔ` は概ね plausible。
  - `hello:['拜','*pˤret-s']` は **礼・拝礼の動作**としては attested だが、`hello` としては semantic extension。`bow/greet` 注記なしに modern greeting として見せるのは危険。
  - `thanks:['謝','*s.ɢAk-s']` は thank/apologize 系として plausible だが、礼儀表現としての時代・用法は要注記。
  - `cat:['貓','*mˤraw']` は猫語として plausible だが、pre-Han Old Chinese の基本語扱いとして直接確認したい。時代的に後出なら `later attested` 注記候補。
- 参照:
  - https://openlibrary.org/books/OL26885351M/Old_Chinese_A_New_Reconstruction
  - https://zenodo.org/records/4548984
  - https://brill.com/view/journals/clao/49/1/article-p92_5.xml
  - https://books.google.com/books/about/Old_Chinese.html?id=UKQ-BAAAQBAJ

### `txg` Tangut: 文字と辞書は強いが、readings は再構なので confidence/source 必須

- 対象: `wordmap_data.js` `txg` block。
- 評価: **Tangut script は Unicode にあり、辞書資料も強い。一方、各 reading は Gong/Sofronov 系の再構で、文字ごとの意味確認が不可欠。現 block は大きな即時エラーは見えないが、source なしでは強く表示しすぎる。**
- 背景:
  - Tangut.Info は Li Fanwen dictionary の番号・意味・Gong Hwangcherng reconstruction を検索できる。
  - Arakawa 2023 は Kychanov/Arakawa Tangut Dictionary の重要性と、字形・再構形チェックを述べる。
  - 近年の研究でも Tangut character readings の再構には未解決点がある。
- 個別評価:
  - `hello/thanks` が `—` なのは適切。
  - `water`, `fire`, `sun`, `moon`, `mother/father`, `hand/eye`, `good` などは Tangut dictionary で文字ごとの meaning lookup が必要。
  - `cat:𗦷/mji˧˥` は特に確認したい。Tangut 仏典・辞書に animal name として直接あるか、Chinese/Tibetan equivalent からの解釈かを分けるべき。
- 方針候補:
  - `txg` は `attested` だが、IPA 欄は `Gong reconstruction` と明示する。
  - `sources` に Li Fanwen number / Kychanov-Arakawa entry / Tangut.Info lookup key を持たせると後続検証が現実的。
- 参照:
  - https://tangut.info/
  - https://journals.eco-vector.com/2410-0145/article/view/569308/en_US
  - https://repository.hku.hk/handle/10722/320348
  - https://www.omniglot.com/writing/tangut.htm

### `sog` Sogdian: 語形は概ね Iranian として plausible、ただし script 表示と語幹/派生語の注記が必要

- 対象: `wordmap_data.js` `sog` block。
- 評価: **基礎語は概ね plausible。大きな即時エラーは見えないが、surface 欄が Sogdian script ではなく Latin transliteration である点、`drink:pi-` など語幹表示である点、`love:frytk` の意味領域が注意点。**
- 背景:
  - Iranica / Smithsonian は Sogdian が Eastern Middle Iranian で、Sogdian / Manichaean / Syriac scripts による豊富な資料を持つと説明する。
  - Gharib 1995 `Sogdian Dictionary` が主要辞書。
- 個別評価:
  - `water:ʾāp`, `fire:ʾātar`, `sun:xwr`, `moon:mʾx`, `mother:mʾtr`, `father:ptr`, `heart:dyl`, `tree:drxt`, `hand:dst`, `eye:cšm`, `good:nyk` は Iranian cognates として plausible。
  - `drink:['pi-','pi']` は verbal stem 表示。`eat:xwartan` が infinitive 的なのに対し、品詞形が不統一。
  - `love:['frytk','friːtak']` は “beloved/dear/friend” 系の派生語である可能性があり、abstract noun/verb `love` としては Gharib 等で確認したい。
  - `hello:['drwd','druːd']` は Iranian greeting として plausible。ただし Sogdian corpus で greeting formula としての attestation を確認したい。
- 方針候補:
  - `sog` surface 欄は `Latin transliteration shown; native Sogdian script exists` を UI/meta に出す。
  - 動詞セルは `lemma type` (`infinitive`, `stem`, `finite`) を持たせる。これは `otk`, `xpr`, `wbl` などにも共通する。
- 参照:
  - https://www.iranicaonline.org/articles/sogdian-language-01/
  - https://sogdians.si.edu/sidebars/sogdian-language/
  - https://cir.nii.ac.jp/crid/1971430859798258850
  - https://glottolog.org/resource/reference/id/306690

### 今回の結論と次の優先順

1. `otk.sun` は surface が `kün` と整合しているか最優先で確認。`otk.hello` は ancient-lang policy 上 `—` 候補。
2. `ojp.cat`, `ojp.hello`, `ojp.thanks` は ONCOJ / Frellesvig / OJ dictionary で直接確認。特に `yasusi` を hello として出すのは危険。
3. `och.hello` は「拝礼」注記なしに hello として出すのは過剰。`och.cat` は pre-Han attestation を確認。
4. `txg` は Tangut.Info / Li Fanwen / Kychanov-Arakawa の entry ID を source として持たせる。
5. `sog` は大きな語義エラーより、Latin transliteration 表示と verb stem 表示の schema/UI 問題が主。

---

## Session 18 (2026-05-05): xsc Scythian dataStatus = 'fragmentary'

**スコープ:** Session 17 #1 で deferred した「`xsc` Scythian の dataStatus 降格」を実施。Codex 追加レビュー 3 で「Scythian は `spaka`=dog 以外は Old Iranian/Avestan proxy」と確定指摘済の問題に対応。

### 変更内容

`DATA_STATUS_OVERRIDES` (wordmap_data.js) に `xsc: 'fragmentary'` を追加。validator が認める dataStatus enum (`modern`, `attested`, `fragmentary`, `reconstructed`, `undeciphered`, `partly-understood`, `pedagogical`) のうち `fragmentary` が Scythian の状況を最も正確に表す:

- 連続的な書き言葉なし
- Greek 文献 (Herodotus 等) や Iranian 名前 (Išpakaia 等) 経由の **isolated 単語のみ**
- ほとんどの基本語は **Avestan/Old Iranian proxy**

```js
// Fragmentary (no continuous texts; mostly names + isolated words via
// Greek/other-language sources, basic vocab via Old Iranian/Avestan proxy):
// Per Codex review 3 / Session 17 #1.
xsc:       'fragmentary',       // Scythian — only `spaka`=dog directly attested via
                                // Iranica `Išpakaia`; rest are Old Iranian/Avestan proxy
```

### Validator 結果

```
Languages: 579 (modern: 499, historical: 80)
ERRORS:   0
WARNINGS: 0
ALLOWLISTED: 1
INFOS:    84 (—) + 26 (dup-coord)

Data status breakdown:
  modern               558
  attested             10
  fragmentary          1     ← NEW (xsc)
  reconstructed        1
  partly-understood    4
  pedagogical          5
```

### 効果

UI 側で `meta.dataStatus = 'fragmentary'` を読み取って「断片的に attested」のラベルを出すようになれば、ユーザーが Scythian の cells を見たときに「これは Scythian 自体の attested form ではなく Avestan proxy」という文脈が伝わる。validator も dataStatus enum 確認で fragmentary を認知済。

### Session 18 中に気付いた追加問題（未対応・記録のみ）

1. **同様に `fragmentary` 候補の他言語** — Codex review が同様の状況と指摘した、または可能性があるもの:
   - `juc` Jurchen (Codex 4: 「almost nothing is known」 — Manchu projection が多い)
   - `omc` Mochica (大半 `—`、limited Lugo 1619 由来)
   - `chb` Chibcha (Lugo 1619 由来、限定的)
   - Session 19+ で各 Codex review を読み返して fragmentary 候補を整理

2. **`fragmentary` と `partly-understood` の境界** — 現状の enum の差異を README/audit に明記する余地:
   - `fragmentary`: 直接資料が isolated words のみ (Scythian 型)
   - `partly-understood`: 文字は読めるが lexicon/grammar 未完成 (Khitan/Meroitic/Pyu/Elamite 型)
   - `attested`: 連続テキストあり

3. **UI 側の `dataStatus` 表示** — `wordmap.html` モーダル単語表で `meta.dataStatus = fragmentary` がどう表示されるか UI 確認候補。Session 19+。

4. **Codex 5 の新発見 (此 session スコープ外、記録のみ)** — Codex 追加レビュー 5 (2026-05-05) で `otk` Old Turkic, `ojp` Old Japanese, `och` Old Chinese, `txg` Tangut, `sog` Sogdian が新たに review された。各セルの個別判定は Session 19+ で対応:
   - `otk.sun` surface ↔ `kün` 整合確認
   - `ojp.cat / hello / thanks` ONCOJ / Frellesvig 確認
   - `och.hello` = 拝礼注記必要
   - `txg` Tangut Li Fanwen entry source 持たせる
   - `sog` Latin transliteration / verb stem schema

### 持ち越し（Session 19 以降）

**Schema-level:**
- §7.7 Cell-level evidence status のスキーマ化 + `direct-attested / reconstructed / proxy / unattested` 区分
- Session 3 #4, Session 5 #4, Session 6 #4, Session 9 #5
- Session 10 #4-5, Session 11 #3, #6
- Session 13 #1-2, Session 14 #3-4, Session 15 #4, Session 16 #1-4
- Session 17 #2 zkt セル単位 confidence / #4 juc 再評価 / #5 削除値 notes schema
- **Session 18 #2 fragmentary/partly-understood 境界 docs / #3 UI dataStatus 表示確認**

**追加リサーチ要:**
- §6.16, §6.42, Tujia, mnp, cpx/wuu_wz/wuu_sz
- Session 5 #1, #3, Session 7 #1-2, #5
- **Session 8 mon/mnw (allowlisted)**
- Session 8 残 dup-coord / Session 9 #1-3 / Session 11 #1-2
- Session 12 #1-6 / Session 13 #3
- **Codex 2/3/4 残: xlu.good/eye, kho.*, kaw.*, gmy.tree/water/good, hit.love, juc.cat/基本語**
- **Codex 5: otk.sun, ojp.cat/hello/thanks, och.hello, txg source, sog schema**
- **Session 17 #3 hit.sun 正しい cuneiform 復活**
- **Session 18 #1 omc/chb/juc 等の fragmentary 候補確認**
- **Session 18 #4 Codex 5 各項目**

---

## Session 19 (2026-05-05): Codex 5 confirmed hello fixes — 3 セル `—` 化

**スコープ:** Codex 追加レビュー 5 (Old Chinese / Old Japanese / Old Turkic 等) で「hello として出すのは危険」と確定指摘済の 3 セルを ancient lang policy に従い `—/—` 化。

### 修正 3 セル

| Code | Lang | Field | 旧 | 根拠 (Codex 5) |
|---|---|---|---|---|
| `och` | Old Chinese | `hello` | `拜` / `*pˤret-s` | `拜` は **「礼・拝礼の動作」**であって modern greeting ではない、semantic extension 危険 |
| `ojp` | Old Japanese | `hello` | `安し` / `yasusi` | 「安い・平穏である」系の **形容詞**、greeting 専用語ではない、`yasusi` を hello として出すのは危険 |
| `otk` | Old Turkic | `hello` | `𐰰𐰠𐰢` / `esænmy` | **現代 Turkic `esenmi?` を古代語に投影** している疑い、Orkhon inscription に attested greeting なし |

### Codex 5 で flag されたが今回 touch しなかったセル

- `otk.sun: 𐰚𐰰𐰣 / kyn` — surface が `kün` の標準的 runiform 綴りに見えず、Old Turkic dictionary 確認要 (Codex 5 priority 1)
- `otk.fire: ot` — `ot` (grass) と `o:t` (fire) を IPA で区別する余地、長母音記号 `o:t` 候補
- `otk.eat / drink / love` — verbal stem `-` 表示の schema/UI 化候補
- `ojp.cat: 猫 / neko` — Old Japanese 8c. corpus で attested か未確認
- `ojp.thanks: 忝し / katadʑike₁nasi` — later classical 表現を OJ 8c. corpus に投影している可能性
- `och.cat: 貓 / *mˤraw` — pre-Han Old Chinese 直接 attestation 確認要
- `och.thanks: 謝 / *s.ɢAk-s` — thank/apologize 系として plausible だが時代・用法注記必要
- `txg` Tangut block — Li Fanwen entry source 必要
- `sog` Sogdian block — verb stem schema 必要

これらは Session 20+ で個別に専門資料判断。

### Validator 結果

```
Languages: 579 (modern: 499, historical: 80)
ERRORS:   0
WARNINGS: 0
ALLOWLISTED: 1
INFOS:    87 (—)  ← 84 → 87 (Session 19 で 3 セル増)
INFOS:    26 (dup-coord)
PASS
```

### Session 19 中に気付いた追加問題（未対応・記録のみ）

1. **`och.hello` を `—` 化したことで Old Chinese のセル数が 18/20 (water...good) になり、cells = `—` 化が増えた古代語が目立つ** — 現在 `—` 87 件は全 LANG_DATA × 20 = 11,580 cells のうちの 0.75% だが、特定の古代語ブロックでは表示が「`—` だらけ」に見える可能性。Session 20+ UI 検討候補 (Session 10 #5 と関連)。

2. **Codex 5 の verb stem schema 提案 (otk/sog 等)** — `eat: 食 / *mə.lək`, `eat: 𐰘𐰃- / je`, `drink: pi- / pi` のような形が混在。`lemma type` (`infinitive`, `stem`, `finite`) を schema に入れる提案は Session 13 #1 と一致 (Iranian/Wakhi 系の verbal stem `-`)。Session 20+ で verbal-stem schema 設計候補。

3. **歴史言語の `surface` 欄ラベル** — Codex 5 が Sogdian で「Latin transliteration shown; native Sogdian script exists を UI/meta に出す」と指摘。これも Session 13 #2 (複合 script schema) と一致。Session 20+ schema 設計。

4. **Codex review が継続して新発見を追加している** — Codex 1-5 がそれぞれ別の歴史言語ブロックを review してきた (xlu/kho/kaw/elx/xhu, hit/gmy/xsc/zkt, juc/omx/pyx/obr/occ, och/ojp/txg/sog/otk)。Codex 6 以降が来ると残りの歴史語ブロックも順次 review される見込み。Session 20+ で Codex review の整理 (どの言語が review 済か unreviewed か) の index を作成検討。

### 持ち越し（Session 20 以降）

**Schema-level:**
- §7.7 Cell-level evidence status のスキーマ化
- Session 3 #4, Session 5 #4, Session 6 #4, Session 9 #5
- Session 10 #4-5, Session 11 #3, #6
- Session 13 #1-2, Session 14 #3-4, Session 15 #4, Session 16 #1-4
- Session 17 #2, #4, #5
- Session 18 #2, #3
- **Session 19 #1 古代語 `—` UI 表示 (Session 10 #5 と関連)**
- **Session 19 #2 verb stem schema (Session 13 #1 と関連)**
- **Session 19 #3 surface 欄 transliteration 表示 (Session 13 #2 と関連)**
- **Session 19 #4 Codex review 進捗 index**

**追加リサーチ要:**
- §6.16, §6.42, Tujia, mnp, cpx/wuu_wz/wuu_sz
- Session 5 #1, #3, Session 7 #1-2, #5
- **Session 8 mon/mnw (allowlisted)**
- Session 8 残 dup-coord / Session 9 #1-3 / Session 11 #1-2
- Session 12 #1-6 / Session 13 #3
- **Codex 2-5 残: xlu.good/eye, kho.*, kaw.*, gmy.tree/water/good, hit.love, juc.cat/基本語, otk.sun, ojp.cat/thanks, och.cat/thanks, txg source, sog schema**
- Session 17 #3 hit.sun 正しい cuneiform / Session 18 #1 omc/chb/juc fragmentary

---

## Codex 追加レビュー 6 (2026-05-05): Pali / Old Persian / Avestan / Middle Persian / Parthian

**スコープ:** 前回までの ancient/historical review の続き。今回は `pi`, `peo`, `ave`, `pal`, `xpr` を、現行 `wordmap_data.js` と過去の feedback 記録の食い違いも含めて確認。

### 重要: `peo.hello` / `ave.hello` は現行データにまだ残っている

- 対象:
  - `wordmap_data.js:1540` `peo.hello: ["𐎭𐎢𐎼𐎢𐎺", "duruwa"]`
  - `wordmap_data.js:1628` `ave.hello: ["𐬵𐬎𐬱", "huʃ"]`
- 評価: **未解決。過去 feedback には「Session 11 で `—` 化」と読める記述があるが、現行データ上はまだ残っている。**
- 根拠:
  - University of Texas Old Iranian Online の Old Persian base-form dictionary では `duruva-` は “durable, stable, firm, secure” 系で、greeting ではない。
  - Avestan `hu-/huš-` 系は “good/well” 系の接頭・派生要素で、単独の `hello` として出す根拠は弱い。Avesta.org の辞書でも `ushta` は “hail/prosperity/good fortune/health/happiness” 系として確認できるが、現行の `huʃ` とは別。
- 推奨:
  - `peo.hello` は `["—", "—"]` に戻すのが安全。
  - `ave.hello` も `["—", "—"]` が安全。もし `ushta` を採る場合でも「ritual/liturgical salutation」注記が必須。

### `peo` Old Persian: 直接 attested と proxy/reconstructed が混ざっている

- 対象: `wordmap_data.js:1470-1557`。
- 評価: **`thanks` が `—` なのは良い。一方で `hello`, `cat`, 一部 basic nouns/verbs は Old Persian inscription corpus で直接確認できるか不明で、Avestan/Old Iranian proxy の可能性が高い。**
- 背景:
  - University of Texas Old Iranian Online は Old Persian を Achaemenid royal inscriptions からのみ知られる言語として説明している。
  - Lexilogos も Old Persian resources を “all the words which occur in the Persian cuneiform inscriptions” 型の限定コーパス辞書として整理している。
- 個別リスク:
  - `hello:duruwa` は上記の通り **要修正候補**。
  - `cat:𐎱𐎡𐏁𐎡/piʃiː` は Old Persian corpus 直接語として確認できなかった。Iranian 系の `piši`/`pišag` proxy なら、Old Persian cuneiform で断定表示するのは危険。
  - `dog:spaka`, `hand:dasta`, `eye:tʃaʃman`, `tree:druma`, `house:maːnija`, `eat:xar`, `drink:paː`, `love:frija` は Iranian cognate として plausible だが、Old Persian inscriptions に直接出るかを Kent / Tolman / Schmitt でセル単位確認したい。
  - `good:naiba` は UT base-form dictionary で “beautiful, pious” と出るため、単純な `good` とは少しずれる。UI には “beautiful/pious” 寄りの注記があると安全。
- 推奨:
  - `peo` は language-level `attested` でも、cell-level に `direct-attested` / `Old-Iranian-proxy` を分ける。
  - 直接出典未確認の `cat` は `—` か `proxy` 注記付きにする。

### `ave` Avestan: 基礎語は比較的強いが、`hello` と `cat` が弱い

- 対象: `wordmap_data.js:1558-1645`。
- 評価: **water/fire/sun/dog/hand/eye/good などは Avestan dictionary で確認しやすい。一方 `hello:huʃ` と `cat:piʃiː` は危険。**
- 確認できた強い項目:
  - Avesta.org dictionary で `ap` water, `hvar` sun, `span/spâ` dog, `zasta` hand, `cashman` eye などが確認できる。
  - `wohu` は Avestan `vohu/vahu-` 系 “good” として妥当。
- 個別リスク:
  - `hello:huʃ` は **要修正候補**。`huš-` を `hello` として単独提示するのは根拠不足。
  - `cat:piʃiː` は Avesta.org common dictionary では見当たらず、Avestan direct attestation の確認が必要。Middle/New Iranian proxy の可能性がある。
  - `love:frija` は “dear/beloved” 系か “love” 動詞/名詞かを Kanga / Bartholomae で要確認。
- 推奨:
  - `ave.hello` は `—` 化を最優先。
  - `ave.cat` は direct source がなければ `—` または `proxy` 注記。

### `pal` Middle Persian: 大枠は妥当、ただし Pahlavi 表記と語義幅の出典が必要

- 対象: `wordmap_data.js:1915-1942`。
- 評価: **`drōd` / `spās` は Middle Persian greeting/thanks 系として plausible。基礎語も大きな即時エラーは見えないが、Pahlavi spelling は曖昧なので辞書エントリ単位で確認したい。**
- 背景:
  - MPCD は MacKenzie に沿った標準転写で Middle Persian dictionaries/glossaries を横断検索できるよう整備している。
  - MPDP は実テキストの actual occurrences と用例を重視する辞書プロジェクトで、未 attest の reconstructed forms も区別する方針。
- 個別メモ:
  - `thanks:spās` は現代 Persian `sepās` に続く Iranian 系として自然。
  - `hello:drōd` も greeting として plausible。
  - `cat:gurbag` は Middle Persian/Persian 系として plausible だが、Pahlavi spelling と attestation を MacKenzie/MPCD で確認したい。
  - `love:dōšī` は “love/affection/friendship” 系か、動詞/名詞/形容詞のどれを出しているかが曖昧。`word` キーが `love` なので品詞注記が必要。
- 推奨:
  - `pal` は現状維持でよいが、Pahlavi script surface と transliteration の source ID を持たせる。

### `xpr` Parthian: Middle Persian からの類推が混ざっている可能性

- 対象: `wordmap_data.js:2443-2444`。
- 評価: **全体に Iranian cognate として plausible だが、Parthian 固有資料で確認できていないセルが多い。特に `hello`, `thanks`, `cat`, `house`, `good` は Middle Persian 形の転用ではないか要確認。**
- 個別リスク:
  - `hello:drōd`, `thanks:spās` は Middle Iranian としては自然。ただし Parthian 固有の citation が必要。
  - `eat:xward-`, `drink:pī-` は verbal stem 表示。`pal.eat:xwardan`, `pal.drink:nōšīdan` のような infinitive 表示と混在しているため UI/meta 上は不統一。
  - `cat:pišī` は Parthian direct attestation を要確認。Iranian proxy の可能性あり。
  - `good:nēw` は Parthian としてあり得るが、Middle Persian/New Persian 系との混同に注意。
- 推奨:
  - Durkin-Meisterernst `Dictionary of Manichaean Middle Persian and Parthian` か MPCD/Kosh 系で Parthian entry を確認してから確定。
  - `xpr` は `stem` 表示 (`xward-`, `pī-`) をセル注記する。

### `pi` Pali: 語彙は概ね良いが、`hello/thanks` は register 注記が必要

- 対象: `wordmap_data.js:599-686`。
- 評価: **基礎語は Pali dictionary 上かなり妥当。問題は `hello:namo` と `thanks:anumodāmi` が日常会話の直訳ではなく、仏教的・儀礼的 register の表現である点。**
- 個別メモ:
  - `namo` は “homage/salutation” としては妥当だが、現代的 `hello` ではない。
  - `anumodāmi` は WisdomLib/PTS 系で “rejoice in; appreciate; be thankful for” と確認できる。thanks 的用法はあるが、英語 `thank you` の汎用直訳ではなく「随喜する/感謝し賛同する」寄り。
  - `eat:khādati`, `drink:pivati` は finite 3sg 形を辞書見出し的に出している。Pali 辞書ではこの形で見出しになることも多いが、他言語で infinitive/stem/noun が混在している問題と同じく `formType` 注記が必要。
  - `good:sundara` は “beautiful/good” 寄り。Pali らしい “good/well/excellent” なら `sādhu` も候補。
- 推奨:
  - `pi.hello` は `namo` のままでもよいが `liturgical/homage salutation` 注記。
  - `pi.thanks` は `ritual/appreciative formula` 注記。単純な `thanks` として出すなら tooltip に意味幅を出す。

### 今回の優先修正順

1. **`peo.hello` と `ave.hello` を `—` 化**。過去メモと現行データが食い違っており、かつ語義上も危険。
2. **`peo.cat` と `ave.cat` の direct source 確認**。未確認なら `—` または proxy 注記。
3. **`xpr` Parthian の固有出典確認**。Middle Persian と同形に見える項目は source が必要。
4. **`pi` / `pal` は大枠維持で register・formType 注記**。直ちに `—` 化するほどではない。

### 参照

- Pali Text Society, freely available dictionaries: https://palitextsociety.org/pali-studies/pali-dictionaries/
- PTS Pali-English Dictionary lookup: https://ped.readingfaithfully.org/
- WisdomLib `anumodati`: https://www.wisdomlib.org/definition/anumodati
- University of Texas Old Iranian Online introduction: https://lrc.la.utexas.edu/eieol/aveol/0
- University of Texas Old Persian base-form dictionary: https://lrc.la.utexas.edu/eieol_base_form_dictionary/aveol/22
- Lexilogos Old Persian resources: https://www.lexilogos.com/english/persian_old.htm
- Avesta.org Avestan dictionary: https://www.avesta.org/avdict/
- MPCD Middle Persian glossaries: https://www.mpcorpus.org/glossaries/
- Middle Persian Dictionary Project: https://soudavar.org/middle-persian-dictionary/

---

## Codex 追加レビュー 7 (2026-05-05): Sumerian / Akkadian / Northwest Semitic / Syriac / Ge'ez

**スコープ:** `sux`, `akk`, `phn`, `uga`, `xpu`, `hbo`, `arc`, `syc`, `gez`。過去 Session 12 で hello/thanks は一度 survey 済だが、今回は「thanks に bless/praise/glory を流用していないか」「直接 attested ではない動物名を入れていないか」を中心に再確認。

### `sux` Sumerian: `good: saŋ` は修正優先、`cat` も source 必須

- 対象: `wordmap_data.js:691-778`。
- 評価: **`thanks` が `—` なのは良い。一方 `good: 𒊩𒌆 / saŋ` はかなり危険。過去 Session 11 の懸念どおり、Sumerian の “good” は普通 `du10` / `dug` 系や `silim` 系で確認すべき。**
- 個別リスク:
  - `good:𒊩𒌆/saŋ` は “head / top / first / principal” 系の可能性が高く、単純な `good` ではない。しかも surface `𒊩𒌆` は `nin` 系に見えるため、transliteration と sign が整合しているかも怪しい。
  - `hello:𒁲/silim` は “health, well-being, peace” 系の greeting として plausible。ただし `hello` という modern label には注記が必要。
  - `cat:𒌓𒊬/ʃa.tur` は直接 source 未確認。Sumerian に猫語彙を置くなら ePSD2 entry ID で確認したい。
  - `moon:𒀭𒋀𒆠/nanna` は神名・月神としては plausible だが、`moon` そのものの普通名詞と神名が混ざっている可能性に注記が必要。
- 推奨:
  - `sux.good` は最優先で ePSD2 / PSD 確認。直接 `good` でないなら `𒄭 / du10` 系へ変更候補。
  - `sux.cat` は ePSD2 で direct attestation がなければ `—` または note 付き。

### `akk` Akkadian: 基本語は強いが、`thanks: tašlimtu` は再確認

- 対象: `wordmap_data.js:779-866`。
- 評価: **基礎語は概ね強い。`šurānu(m)` = cat と `šulmu(m)` = well-being/greeting は辞書上も確認しやすい。一方 `thanks:𒁲𒌅/taʃlimtu` は “thank you” としての直接根拠が弱い。**
- 確認できた強い項目:
  - `cat: šurānu(m)` は CAD / Concise Dictionary of Akkadian 系で “cat” として確認される。
  - `hello: šulmu` は “well-being, health, safety, peace, greeting” 系として plausible。
- 個別リスク:
  - `thanks:tašlimtu` は `š-l-m` 系から作った「peace/well-being/reconciliation」寄りの語に見え、conversational thanks としては未確認。過去メモでは「派生だが許容範囲」とされていたが、今回の基準では **direct evidence 要**。
  - `fire:𒉈𒌋/išātu` の surface は logographic/phonetic 混在の可能性がある。Akkadian の cuneiform 表示は単語ごとに logogram か syllabic spelling かを明記したい。
- 推奨:
  - `akk.thanks` は CAD / CDA で `tašlimtu` の意味を確認。単に “peace/reconciliation” なら `—` 化または “formula not attested” 注記。

### `phn` Phoenician / `xpu` Punic: `thanks: barak` は “bless” であって thanks ではない

- 対象:
  - `wordmap_data.js:1822-1823` `phn`
  - `wordmap_data.js:2046-2047` `xpu`
- 評価: **`hello:𐤔𐤋𐤌/šalom` は Semitic greeting として plausible。一方 `thanks:𐤁𐤓𐤊/barak` は “bless” であり、`thanks` としては過剰。**
- 背景:
  - Krahmalkov `Phoenician-Punic Dictionary` は Phoenician/Punic の基本参照だが、現時点で `barak` を “thank you” formula とする直接証拠は未確認。
  - Semitic `brk` は Hebrew / Ugaritic / Phoenician で “bless” 系として自然だが、`thanks` とは意味が違う。
- 個別リスク:
  - `phn.thanks` / `xpu.thanks` は **`—` 化候補**。少なくとも “blessing/praise, not conversational thanks” 注記が必要。
  - `phn.cat:𐤔𐤍𐤓/ʃunār` は Akkadian `šurānu` → Aramaic/Hebrew 系の cognate としては plausible だが、Phoenician direct attestation は要確認。Punic はすでに `—` なので保守的。
  - `phn.water:𐤌𐤌/majim` は spelling が `mm` で、Hebrew 型 `mayim` を Phoenician 表記に単純転写している可能性。Krahmalkov で要確認。
- 推奨:
  - `phn.thanks`, `xpu.thanks` は direct inscriptional formula が見つからなければ `—`。
  - `phn.cat` は direct source がなければ `—` または Semitic-cognate proxy 注記。

### `uga` Ugaritic: `brk` は “bless/knee”、thanks ではない

- 対象: `wordmap_data.js:1824-1825`。
- 評価: **`cat` が `—` なのは良い。一方 `thanks:𐎁𐎗𐎋/baːriku` は “bless” の動詞 `brk` を thanks に流用しており、`thanks` としては危険。**
- 根拠:
  - Ugaritic `𐎁𐎗𐎋/brk` は “knee” と “to bless” の両義が辞書で確認できる。
  - “thank you” の定型として `brk` を出す根拠は未確認。
- 推奨:
  - `uga.thanks` は `—` 化候補。
  - `uga.hello:šalāmu` は Semitic peace/well-being greeting として plausible だが、ritual/formula 注記を付ける。

### `hbo` Biblical Hebrew: `todah` は attested だが modern “thank you” とは違う

- 対象: `wordmap_data.js:2486-2487`。
- 評価: **`cat` が `—` なのは非常に良い。`שלום/shalom` と `תודה/todah` はどちらも attested だが、`todah` は Biblical Hebrew では thanksgiving / praise / thank-offering の名詞で、現代会話の “thanks” と同一視しすぎない方がよい。**
- 根拠:
  - Strong / BDB 系では `todah` は thanksgiving, praise, confession, thank-offering, thanksgiving choir/procession などとして説明される。
  - Bible encyclopedia 系では cat は canonical scriptures には出ないとされるため、`hbo.cat:—` は妥当。
- 推奨:
  - `hbo.thanks` は維持可。ただし tooltip で “thanksgiving/praise/thank-offering; not necessarily conversational thank you” と出したい。

### `arc` / `syc` / `gez`: 後代・典礼 register の注記が必要

- 対象:
  - `wordmap_data.js:689-690` `arc`
  - `wordmap_data.js:1943-1944` `syc`
  - `wordmap_data.js:1951-1952` `gez`
- 評価: **基礎語は概ね Semitic として plausible。ただし `thanks` 欄が modern/Neo-Aramaic・典礼語・praise/glory 系と混ざっている。**
- 個別リスク:
  - `arc.thanks:ܬܘܕܝ/tawdiː` は現代 Aramaic/Neo-Aramaic 系の “thank you” としては自然だが、`arc` が “Aramaic” 全体なのか Imperial/Official Aramaic なのか、時代設定が曖昧。
  - `syc.thanks:ܫܘܒܚܐ/šubḥā` は “glory/praise” 系であり、thanks というより liturgical praise。Classical Syriac の感謝表現として `tawdi/tawdita` 系を確認したい。
  - `gez.thanks:ምስጋና/məsganā` は “praise/thanksgiving” 系で比較的 plausible。ただし liturgical register 注記があると安全。
- 推奨:
  - `arc` は language label / dataStatus / period を分ける。Official Aramaic, Classical Syriac, Neo-Aramaic を混ぜない。
  - `syc.thanks` は “glory/praise” 注記か、Classical Syriac 辞書で `thanks/thanksgiving` の direct form を確認。

### 今回の優先修正順

1. **`sux.good`**: `saŋ` は高リスク。`du10` 系への修正候補。
2. **`phn.thanks`, `xpu.thanks`, `uga.thanks`**: `barak/brk` は “bless” であり、thanks としては `—` 候補。
3. **`akk.thanks`**: `tašlimtu` の direct “thanks” 意味を CAD/CDA で確認。未確認なら `—`。
4. **`syc.thanks`**: `šubḥā` は praise/glory。thanks として使うなら liturgical 注記。
5. **`phn.cat`, `sux.cat`**: direct attestation がなければ proxy 注記または `—`。

### 参照

- Penn Museum ePSD overview: https://www.penn.museum/research/project.php?pid=17
- ePSD2 official site: https://oracc.museum.upenn.edu/epsd2/
- Akkadian `šurānum` / `šulmum` secondary lexical aggregation: https://kaikki.org/dictionary/Akkadian/pos-noun/%C5%A1ulmu--%C5%A1%C4%ABrum.html
- Akkadian `šurānum` with CAD/CDA references: https://en.wiktionary.org/wiki/%C5%A1ur%C4%81num
- Krahmalkov, Phoenician-Punic Dictionary metadata: https://books.google.com/books/about/Phoenician_Punic_dictionary.html?id=bh_jdzIT9GQC
- Ugaritic `brk`: https://en.wiktionary.org/wiki/%F0%90%8E%81%F0%90%8E%97%F0%90%8E%8B
- Strong/BDB `todah`: https://biblehub.com/hebrew/8426.htm
- ISBE `Cat`: https://www.biblestudytools.com/dictionary/cat/

---

## Session 20 (2026-05-05): juc fragmentary + Codex 6 critical hello fixes (peo/ave)

**スコープ:** Codex 4 で deferred した「`juc` Jurchen を fragmentary 化」と、Codex 6 で「現行データに残っている」と特定された `peo.hello` / `ave.hello` を一括対応。

### 1. `juc` Jurchen → `fragmentary`

`DATA_STATUS_OVERRIDES` に追加:

```js
juc:       'fragmentary',       // Jurchen — Britannica: "almost nothing is known".
                                // Limited inscriptions + Sino-Jurchen vocabulary (Kane 1989);
                                // most cells are Manchu projection. Per Codex review 4.
```

Session 17 で juc.hello/thanks を `—` 化したが、block 全体の信頼性を表す dataStatus 降格は別議論として残っていた。Codex 4 推奨に従い fragmentary 化。

### 2. Codex 6 critical: `peo.hello` / `ave.hello` を `—` 化

Codex 6 が「過去 feedback には Session 11 で `—` 化と読める記述があるが、現行データ上はまだ残っている」と特定。Session 11 で fix したのは thanks のみで、hello は touch されていなかった。

| Code | Lang | Field | 旧 | 根拠 (Codex 6) |
|---|---|---|---|---|
| `peo` | Old Persian | `hello` | `𐎭𐎢𐎼𐎢𐎺` / `duruwa` | UT Old Iranian Online: `duruva-` = **「durable, stable, firm, secure」**、greeting ではない |
| `ave` | Avestan | `hello` | `𐬵𐬎𐬱` / `huʃ` | Avesta.org: `hu-/huš-` 系は **「good」接頭/派生要素**、単独 hello ではない |

これで Session 11 で半端だった peo/ave の greeting/thanks が両方とも `—` に揃った。

### Codex 6 で flag されたが今回 touch しなかったセル

- `peo.cat`, `ave.cat`, `pal.cat`, `xpr.cat` — Iranian 系古代語の `cat` direct attestation 確認要
- `peo.good: naiba` — 「beautiful, pious」、`good` 直訳との微妙な差
- `ave.love: frija` — 品詞・意味確認要
- `pal.love: dōšī` — 品詞注記必要
- `pi.hello: namo` / `pi.thanks: anumodāmi` — Pali liturgical/ritual register 注記候補

### Validator 結果

```
Languages: 579 (modern: 499, historical: 80)
ERRORS:   0
WARNINGS: 0
ALLOWLISTED: 1
INFOS:    89 (—)  ← 87 → 89 (Session 20 で 2 セル増)
INFOS:    26 (dup-coord)
PASS

Data status breakdown:
  modern               557
  attested             10
  fragmentary          2     ← +1 (juc 追加、xsc と合わせて 2)
  reconstructed        1
  partly-understood    4
  pedagogical          5
```

### Session 20 中に気付いた追加問題（未対応・記録のみ）

1. **Codex 6 の `pi.hello/thanks` の register 注記** — `namo` / `anumodāmi` は現状値のままだが、UI で「liturgical」「buddhist ritual」 register 表示があると誤解防止。Session 21+ schema 候補。
2. **古代 Iranian の `cat` 一括問題** — Codex 6 が peo/ave/pal/xpr で `cat` を「Iranian proxy」と flag。Session 21+ で一括 review 候補。
3. **`peo.naiba` good 注記** — 「beautiful, pious」のニュアンスが UI で伝わらない、`note` フィールド追加候補。
4. **fragmentary 統計が `2` に成長** — Codex review 進行で omc/chb/onw 等の追加候補で最終 5-10 件規模になる可能性。

### 持ち越し（Session 21 以降）

**Schema-level:** §7.7 cell-level evidence / Session 3 #4, 5 #4, 6 #4, 9 #5, 10 #4-5, 11 #3 #6, 13 #1-2, 14 #3-4, 15 #4, 16 #1-4, 17 #2 #4 #5, 18 #2 #3, 19 #1-4, 20 #1 #3 #4

**追加リサーチ要:** §6.16, §6.42, Tujia, mnp, cpx/wuu_wz/wuu_sz, Session 5 #1 #3, 7 #1-2 #5, 8 mon/mnw (allowlisted), 8 残 dup-coord, 9 #1-3, 11 #1-2, 12 #1-6, 13 #3, **Codex 2-6 残**, 17 #3 hit.sun, 18 #1 omc/chb fragmentary 候補, **20 #2 古代 Iranian cat 一括 review**

---

## Codex 追加レビュー 8 (2026-05-05): Old/Middle Irish・西欧中世語の greeting/thanks と時代差

**スコープ:** `sga`, `mga`, `fro`, `goh`, `gmh`, `osp`, `osx`, `orv`。過去 Session 12 では一括で “attested” とされたが、今回は「現代語・後代語の定型を古い段階へ投影していないか」「thanks が mercy/blessing/health 系の意味拡張ではないか」を中心に再確認。

### `sga` Old Irish / `mga` Middle Irish: `dia duit` は現代 Irish greeting として強いが、Old/Middle Irish セルでは direct attestation 要

- 対象:
  - `wordmap_data.js:2449-2450` `sga`
  - `wordmap_data.js:2483-2484` `mga`
- 評価: **基礎語は概ね plausible。ただし `hello: dia duit` と `thanks: atloirgaim` は、Old/Middle Irish の直接定型として source が必要。特に `dia duit` は現代 Irish phrasebook の evidence が強く、Old Irish 8-9c. の会話 greeting としてそのまま出すのは危険。**
- 背景:
  - eDIL は c.700-c.1700 の Old/Middle/Early Modern Irish を広く含む辞書で、時代幅が広い。
  - Modern Irish `Dia duit` は “hello, literally God to you” として確立しているが、これを Old Irish `sga` のセルへ置く場合、Old Irish glosses / sagas / legal texts の実例が必要。
- 個別リスク:
  - `sga.hello` / `mga.hello`: `Dia` と `duit` 自体は古い語形要素に遡れるが、**phrase としての greeting attestation** が未確認。
  - `sga.thanks` / `mga.thanks`: `atloirgaim` は “I thank/praise” 系として plausible だが、現行では Old Irish と Middle Irish が同じ finite 1sg form。時代差・綴り差・品詞形の確認が必要。
  - `mga.dog: madra` は Middle Irish では plausible だが、`sga.dog:cú` と違う選択基準が不明。`dog` が generic dog か hound かを注記したい。
- 推奨:
  - `dia duit` は `sga/mga` では `liturgical/Christian greeting?` の注記か、direct citation がなければ `—` 候補。
  - `atloirgaim` は eDIL entry ID / lemma / citations を持たせる。

### `fro` Old French: `salut` は greeting として可、`merci` は thanks より “mercy” が主義

- 対象: `wordmap_data.js:1946-1947`。
- 評価: **大枠は妥当。ただし `merci` は Old French ではまず “mercy/clemency” の名詞で、現代 French “merci” と同じ thanks interjection として扱うには時代注記が必要。**
- 根拠:
  - Anglo-Norman Dictionary の `salu/salut` は health, well-being, salvation, safety, salutation/greeting を含む。
  - Old French `merci` は “mercy; clemency” が中心で、French の gratitude interjection としての発展は別途注記が必要。
- 個別リスク:
  - `fro.hello: salut` は greeting として plausible。
  - `fro.thanks: merci` は維持可だが、`mercy/favor/grace > thanks` の意味史を tooltip に出したい。
  - `fro.eye: oeil / œʎ` は表記が modern-ish。Old French では `oil/ueil/uel` など variant があり、period/region の統一が必要。

### `osp` Old Spanish: `mercedes` は historical thanks として有力だが、`salud` は greeting 注記が必要

- 対象: `wordmap_data.js:2407-2408`。
- 評価: **`thanks: mercedes` は RAE が「Merced, muchas mercedes = gracias」として desusado expression を認めており、Old/Medieval Spanish 系の thanks として比較的強い。ただし `hello: salud` は “health/salvation” 系 greeting なので注記が必要。**
- 根拠:
  - RAE `merced` は「merced, muchas mercedes」を desus. の gratitude expression とする。
  - `merced` 自体は reward, grace, favor, mercy, courtesy title などの意味が中心。
- 個別リスク:
  - `osp.thanks: mercedes` は “thanks” として維持可。ただし plural formula であること、modern `gracias` とは別であることを注記。
  - `osp.hello: salud` は `salud` = health を greeting に使う形。direct greeting citation が欲しい。
  - `osp.good: bono` は early Old Spanish / Ibero-Romance としてあり得るが、`bueno` との時代・地域差を注記したい。

### `goh` / `gmh` / `osx`: Germanic greeting は概ね良いが、`thanks` は noun と formula の区別が必要

- 対象:
  - `wordmap_data.js:1948-1949` `goh`
  - `wordmap_data.js:2404-2405` `gmh`
  - `wordmap_data.js:2413-2414` `osx`
- 評価: **`heil` 系 greeting は health/whole/welfare の greeting として plausible。`dank/danc/thank` も gratitude noun として plausible。ただし conversational “thanks” formula としての用法は source/citation を確認したい。**
- 背景:
  - OHG/MHG `heil` は health, happiness, salvation/welfare 系。greeting として自然だが、現代的 `hello` ではない。
  - `dank/danc/thank` は noun “thanks/gratitude” であり、単独 interjection としての用例確認が必要。
- 個別リスク:
  - `gmh.hello: gegrüezet` は participial/finite greeting formula として plausible だが、標準的には `grüezen` / `gegrüezt` 系の綴り差を確認したい。
  - `osx.thanks: thank` は Old Saxon spelling と IPA が English-like に見える。Old Saxon lexical source が必要。
  - `goh.cat:kazza`, `gmh.cat:katze`, `osx.cat:katta` は plausible だが、loanword/cultural dating の注記があるとよい。

### `orv` Old East Slavic: `благодарю` は modern Russian-like なので再確認

- 対象: `wordmap_data.js:2616-2617`。
- 評価: **基礎語は Slavic として plausible。ただし `thanks: благодарю/blagodarju` は現代 Russian/Church Slavonic 的な 1sg finite form に見え、Old East Slavic の固定 thanks formula としては direct source が必要。**
- 背景:
  - `orv` は Kievan Rus' / Old East Slavic 10-15c. として定義されている。
  - Kaikki/Wiktionary 系の Old East Slavic dictionary は存在するが、現行 `благодарю` が OES entry として確認できるかは未確認。
  - Modern Russian `спасибо` の語源は earlier Old East Slavic `съпаси богъ` (“God save [you]”) 系とされるため、thanks formula の選択肢は複数ある。
- 個別リスク:
  - `hello: здравъ/zdravŭ` は “healthy/sound” adjective を greeting に使っている可能性。Slavic `zdrav` greeting 系として plausible だが、OES direct greeting citation が必要。
  - `thanks: благодарю` は `I thank` の finite formとしては意味が通るが、Old East Slavic の綴り・時代形として要確認。
  - `cat: котъка/kotŭka` は East Slavic として plausible だが、OES attestation/source が必要。
- 推奨:
  - `orv.thanks` は `благодарю` の OES source がなければ `—` または `liturgical/Church-Slavonic-influenced` 注記。
  - `orv.hello` は `здравъ` の greeting use を確認。単なる adjective なら注記。

### 今回の優先修正順

1. **`sga/mga.hello: dia duit`** — modern Irish からの投影疑い。Old/Middle Irish citation 必須。
2. **`orv.thanks: благодарю`** — modern Russian-like finite form。OES source 確認。
3. **`fro.thanks: merci` / `osp.thanks: mercedes`** — 維持可だが “mercy/favor > thanks” の意味史注記。
4. **`goh/gmh/osx.thanks`** — gratitude noun と conversational thanks formula の区別。
5. **`fro.eye`, `osp.good`, `gmh.hello`, `osx.thanks`** — period/orthography source 確認。

### 参照

- eDIL overview (Old/Middle Irish materials c.700-c.1700): https://mdr-maa.org/resource/edil/
- Modern Irish `Dia duit`: https://en.wiktionary.org/wiki/Dia_duit
- Old Irish overview: https://en.wikipedia.org/wiki/Old_Irish
- Anglo-Norman Dictionary `salu/salut`: https://www.anglo-norman.net/entry/salute
- Old French `merci`: https://en.wiktionary.org/wiki/merci
- RAE `merced`: https://dle.rae.es/merced
- OHG `heil`: https://kaikki.org/dictionary/Old%20High%20German/meaning/h/he/heil.html
- German `Heil` etymology (OHG/MHG): https://en.wikisource.org/wiki/An_Etymological_Dictionary_of_the_German_Language/Annotated/Heil
- Old East Slavic dictionary index: https://kaikki.org/dictionary/Old%20East%20Slavic/index.html
- Russian `спасибо` etymology from earlier East Slavic formula: https://en.wiktionary.org/wiki/%D1%81%D0%BF%D0%B0%D1%81%D0%B8%D0%B1%D0%BE

---

## Session 21 (2026-05-05): Codex 6 ancient Iranian cat fixes — 3 セル `—` 化

**スコープ:** Codex 追加レビュー 6 で「Iranian proxy / direct attestation 不確定」と flag された古代 Iranian の `cat` セルのうち、明確に Old Persian / Avestan / Parthian の corpus に直接 attestation がないものを `—` 化。`pal` Middle Persian の `gurbag` は Codex 6 で「plausible」と判断されたため touch せず。

### 修正 3 セル

| Code | Lang | Field | 旧 | 根拠 (Codex 6) |
|---|---|---|---|---|
| `peo` | Old Persian | `cat` | `𐎱𐎡𐏁𐎡` / `piʃiː` | Old Persian corpus 直接語として確認できず、Iranian `piši/pišag` proxy。**Old Persian cuneiform で断定表示するのは危険** |
| `ave` | Avestan | `cat` | `𐬞𐬌𐬱𐬌` / `piʃiː` | Avesta.org common dictionary に **見当たらず**、Middle/New Iranian proxy の可能性高 |
| `xpr` | Parthian | `cat` | `pišī` / `piʃiː` | Parthian direct attestation 要確認、**Iranian proxy の可能性あり** |

### 残存 (Codex 6 で plausible 判断)

- `pal.cat: gurbag` — Middle Persian/Persian 系として plausible (Codex 6: "plausible だが Pahlavi spelling と attestation を MacKenzie/MPCD で確認したい") — Session 22+ で再確認候補だが現状維持
- `bal.cat: پشی / piʃiː` — Modern Balochi、ancient lang policy 対象外

### Validator 結果

```
Languages: 579 (modern: 499, historical: 80)
ERRORS:   0
WARNINGS: 0
ALLOWLISTED: 1
INFOS:    92 (—)  ← 89 → 92 (Session 21 で 3 セル増)
INFOS:    26 (dup-coord)
PASS
```

### Session 21 中に気付いた追加問題（未対応・記録のみ）

1. **古代 Iranian の `house/eat/drink` 系** — Codex 6 が peo block で「dog:spaka, hand:dasta, eye:tʃaʃman, tree:druma, house:maːnija, eat:xar, drink:paː, love:frija は Iranian cognate として plausible だが、Old Persian inscriptions に直接出るか Kent / Tolman / Schmitt でセル単位確認したい」と指摘。これらは plausible 維持で OK だが、Session 22+ で sources field schema を導入するときに individual cell sources を持たせるよい機会。

2. **`peo.cat` を `—` 化したことで peo の cells 数** — 現在 peo の `—` cells: hello + thanks + cat = 3 セル (20 中)。同様に ave も 3 セル、xpr は 3 セル (cat + thanks)。古代 Iranian 言語ブロック全体で `—` 表示が増えた。Session 19 #1 (古代語 `—` UI) と同じ懸念。

3. **`spaka` (peo dog)** — Codex 6 が触れなかったが、Codex 3 で `xsc.dog: spaka` を「Scythian で direct attestation 強い」と評価していた。`peo.dog: spaka` も同形だが、これは Old Persian と Scythian の cognate の自然な一致 (両方とも Old Iranian)。問題なし。

4. **fragmentary 統計の応用** — Session 20 で fragmentary 2 件 (xsc + juc) になったが、Codex 6 での peo/ave/pal/xpr の attestation 不安定さを見ると、peo/ave も fragmentary 候補かもしれない (現状 attested = 'attested' default)。Session 22+ で再評価候補。

### 持ち越し（Session 22 以降）

**Schema-level:** §7.7 cell-level evidence / Session 3 #4, 5 #4, 6 #4, 9 #5, 10 #4-5, 11 #3 #6, 13 #1-2, 14 #3-4, 15 #4, 16 #1-4, 17 #2 #4 #5, 18 #2 #3, 19 #1-4, 20 #1 #3 #4, **21 #1 sources field schema, #2 古代語 `—` UI**

**追加リサーチ要:** §6.16, §6.42, Tujia, mnp, cpx/wuu_wz/wuu_sz, Session 5 #1 #3, 7 #1-2 #5, **8 mon/mnw (allowlisted)**, 8 残 dup-coord, 9 #1-3, 11 #1-2, 12 #1-6, 13 #3, **Codex 2-7 残**, 17 #3 hit.sun, 18 #1 omc/chb fragmentary 候補, **20 #2 残: pi register, peo.naiba, ave/pal love**, **21 #4 peo/ave fragmentary 再評価**

---

## Session 22 (2026-05-05): Codex 5 cat fixes — ojp.cat, och.cat → `—`

**スコープ:** Codex 追加レビュー 5 で「pre-modern attestation 不確定」と flag された Old Japanese と Old Chinese の `cat` セルを ancient lang policy に従い `—` 化。

### 修正 2 セル

| Code | Lang | Field | 旧 | 根拠 (Codex 5) |
|---|---|---|---|---|
| `ojp` | Old Japanese | `cat` | `猫` / `neko` | Old Japanese 8c. corpus (Man'yoshu/Kojiki/Nihon Shoki) で `neko` が普通名詞として attested 不確定。`neko` は Heian 期 (10c.) Genji Monogatari 等で attested |
| `och` | Old Chinese | `cat` | `貓` / `*mˤraw` | pre-Han Old Chinese で `貓` が「家猫」として attested 不確定。家猫の中国伝来は Han 代 (silk road) 以降、それ以前 `貓` は wildcat/leopard 一般を指す可能性 |

### Codex 5 で flag された残存項目

- `ojp.thanks: 忝し / katadʑike₁nasi` — Codex 5 「later classical Japanese では自然だが Old Japanese 8 世紀 corpus での attestation 確認したい」 — debatable、ONCOJ で要確認
- `och.thanks: 謝 / *s.ɢAk-s` — Codex 5 「thank/apologize 系として plausible だが時代・用法は要注記」 — 古代漢語で `謝` (decline/thank) は attested、Session 22 では keep

これらは Session 23+ で個別判断。

### Validator 結果

```
Languages: 579 (modern: 499, historical: 80)
ERRORS:   0
WARNINGS: 0
ALLOWLISTED: 1
INFOS:    94 (—)  ← 92 → 94 (Session 22 で 2 セル増)
INFOS:    26 (dup-coord)
PASS
```

### Session 22 中に気付いた追加問題（未対応・記録のみ）

1. **`ojp` Old Japanese の `—` cells が増加** — 現在 ojp の `—` cells: hello + cat = 2 セル (20 中)。Old Japanese は資料が比較的多いので、`—` が並ぶと「データ整備不足」に見える可能性。逆に `attested` 言語で `—` を残すことで「OJ corpus に直接 attestation がない」という情報を伝える設計でもある。Session 23+ UI 検討候補 (Session 19 #1 と関連)。

2. **`och` Old Chinese の `—` cells** — 現在 och の `—` cells: hello + cat = 2 セル。Old Chinese は Baxter-Sagart reconstruction 中心で、`hello/cat` の reconstruction が不確かなのは妥当。

3. **`猫` 文字の Old Chinese 語義変遷** — Codex 5 が指摘した「pre-Han `貓` = wildcat/leopard 一般」は Erya (爾雅) や Shijing (詩經) でも家猫文脈なし、家猫は Han 代以降。これは linguistic interesting fact だが UI には note schema (Session 11 #6 削除値 notes) で記録できると良い。Session 23+ schema 検討。

4. **fragmentary 候補の peo/ave/xpr** — Session 21 #4 で記録した「peo/ave も fragmentary 候補かもしれない」は、Codex 6 が peo/ave/pal/xpr で広範に attestation 不確定を flag したことを反映。Session 23+ で xpr Parthian も含めて再評価候補。

### 持ち越し（Session 23 以降）

**Schema-level:** §7.7 cell-level evidence / Session 3 #4, 5 #4, 6 #4, 9 #5, 10 #4-5, 11 #3 #6, 13 #1-2, 14 #3-4, 15 #4, 16 #1-4, 17 #2 #4 #5, 18 #2 #3, 19 #1-4, 20 #1 #3 #4, 21 #1 #2, **22 #3 語義変遷 note schema**

**追加リサーチ要:** §6.16, §6.42, Tujia, mnp, cpx/wuu_wz/wuu_sz, Session 5 #1 #3, 7 #1-2 #5, **8 mon/mnw (allowlisted)**, 8 残 dup-coord, 9 #1-3, 11 #1-2, 12 #1-6, 13 #3, **Codex 2-7 残**, 17 #3 hit.sun, 18 #1 omc/chb fragmentary 候補, 20 #2 残: pi register / peo.naiba / ave/pal love, **21 #4 + 22 #4 peo/ave/xpr fragmentary 再評価**

---

## Session 23 (2026-05-05): Codex 5 ojp.thanks → `—`

**スコープ:** Codex 追加レビュー 5 で「Old Japanese 8 世紀 corpus での attestation 確認したい」と flag された `ojp.thanks` を ancient lang policy に従い `—` 化。

### 修正 1 セル

| Code | Lang | Field | 旧 | 根拠 (Codex 5) |
|---|---|---|---|---|
| `ojp` | Old Japanese | `thanks` | `忝し` / `katadʑike₁nasi` | `katajikenashi` (忝し) は **Heian 期 (10c.) 以降**の Genji Monogatari 等で attested。Old Japanese 8c. corpus (Man'yoshu/Kojiki/Nihon Shoki) での thanks 専用形 attested 不確定 |

これで ojp の `—` cells: hello + cat + thanks = 3 セル。Old Japanese は名詞・基本動詞は attested だが、conversational hello/thanks 定型は限定的という ancient lang 全体パターンに沿う。

### Validator 結果

```
Languages: 579 (modern: 499, historical: 80)
ERRORS:   0
WARNINGS: 0
ALLOWLISTED: 1
INFOS:    95 (—)  ← 94 → 95 (Session 23 で 1 セル増)
INFOS:    26 (dup-coord)
PASS
```

### Session 23 中に気付いた追加問題（未対応・記録のみ）

1. **`och.thanks: 謝 / *s.ɢAk-s` の polysemy** — Old Chinese `謝` は pre-Han texts で「decline, refuse, fade, apologize, thank」の polysemous。「thank」sense は確かに attested だが、modern English `thank you` の汎用直訳としては misleading。Codex 5 の「時代・用法は要注記」がぴったり。Session 24+ で note schema (Session 11 #6) があれば note 化、ない場合は `—` 候補。

2. **`ojp.love: 愛し / kanasi`** — `kanasi` (悲し/愛し/哀し) は Old Japanese で「愛おしい、可哀想だ、いとしい」のような感情概念で、modern Japanese の「愛 (あい、love)」とは意味領域が異なる。Word Map の `love` (恋愛・愛情) との差異が UI 上伝わらない可能性。Codex 5 では touch されなかった項目だが、note schema 候補。Session 24+。

3. **OJ corpus の小規模性** — Old Japanese 8c. corpus は Man'yoshu (~4500 首) + Kojiki + Nihon Shoki + Bussoku-seki etc. 全体でも数万語規模。20 基本語のうち 3-5 セルが attested 不確定なのは妥当。これは欠陥ではなく古代語データ表現の限界。

4. **歴史言語 cells の累積 `—` 数** — Session 23 で 95 件。`—` cells は意図的 attestation gap として valid なので、95 という数字はむしろ「audit work が進んだ証拠」。Session 1 開始時の 58 から累計 +37 (Session 1 +8, 11 +5, 12 +3, 17 +9, 19 +3, 20 +2, 21 +3, 22 +2, 23 +1 = +36... 実際は +37)。

### 持ち越し（Session 24 以降）

**Schema-level:** §7.7 cell-level evidence / Session 3 #4, 5 #4, 6 #4, 9 #5, 10 #4-5, 11 #3 #6, 13 #1-2, 14 #3-4, 15 #4, 16 #1-4, 17 #2 #4 #5, 18 #2 #3, 19 #1-4, 20 #1 #3 #4, 21 #1 #2, 22 #3, **23 #1-2 polysemy / love 意味領域 → note schema**

**追加リサーチ要:** §6.16, §6.42, Tujia, mnp, cpx/wuu_wz/wuu_sz, Session 5 #1 #3, 7 #1-2 #5, **8 mon/mnw (allowlisted)**, 8 残 dup-coord, 9 #1-3, 11 #1-2, 12 #1-6, 13 #3, **Codex 2-7 残**, 17 #3 hit.sun, 18 #1 omc/chb fragmentary 候補, 20 #2, 21 #4 / 22 #4 peo/ave/xpr fragmentary 再評価

---

## Session 24 (2026-05-05): xpr Parthian → `fragmentary`

**スコープ:** Session 21 #4 / Session 22 #4 で deferred した「peo/ave/xpr fragmentary 候補再評価」のうち、最も attestation 不安定な `xpr` Parthian を fragmentary 化。peo/ave は Achaemenid royal inscriptions / Avesta corpus と限定的だが直接資料があるため `attested` 維持。xpr は Codex 6 で「Middle Persian からの類推が混ざっている可能性」と broad に flag されており、fragmentary が最も適切。

### 変更内容

`DATA_STATUS_OVERRIDES` に `xpr: 'fragmentary'` を追加 (xsc Session 18 / juc Session 20 と同パターン):

```js
xpr:       'fragmentary',       // Parthian — corpus is limited (Manichaean texts, ostraca,
                                // inscriptions); many basic vocabulary cells are Middle Persian
                                // projection rather than Parthian-specific attestation.
                                // Per Codex review 6 / Session 21 #4 / Session 22 #4.
```

Codex 6 の判定: "全体に Iranian cognate として plausible だが、Parthian 固有資料で確認できていないセルが多い。特に hello, thanks, cat, house, good は Middle Persian 形の転用ではないか要確認"

xpr.cat は Session 21 で既に `—` 化済み。block 全体の信頼性表現として fragmentary を割り当てることで「Parthian 固有形として直接 attest されているか不確定」というコンテキストを UI に伝える基盤になる。

### Validator 結果

```
Languages: 579 (modern: 499, historical: 80)
ERRORS:   0
WARNINGS: 0
ALLOWLISTED: 1
INFOS:    95 (—) + 26 (dup-coord)
PASS

Data status breakdown:
  modern               556
  attested             10
  fragmentary          3     ← +1 (xpr 追加: xsc + juc + xpr)
  reconstructed        1
  partly-understood    4
  pedagogical          5
```

### Session 24 中に気付いた追加問題（未対応・記録のみ）

1. **`peo` / `ave` の fragmentary 不採用判断** — Session 24 では peo/ave を `attested` 維持。理由:
   - peo Old Persian: Achaemenid royal inscriptions (Behistun, Persepolis fortification tablets 等) という直接 corpus が存在
   - ave Avestan: Avesta (Yasna, Vendidad, Yashts 等) という extensive religious corpus が存在
   - vocabulary 不足は corpus 範囲の限界で、attestation の不確実さとは異なる
   - Codex 6 が指摘する「peo.cat/ave.cat が proxy」レベルは個別セル `—` 化で対応 (Session 21 完了)

2. **fragmentary 統計が `3` に成長** — xsc + juc + xpr。Codex 7+ で他 ancient lang block (omc Mochica, chb Chibcha, onw Old Nubian 等) も同様に評価される見込み。最終的に 5-10 件規模になれば validator/UI で fragmentary 言語を別表示する schema 検討の motivation が高まる (Session 20 #4)。

3. **fragmentary vs attested の運用ルール** — 暫定案:
   - **attested**: 直接 corpus が存在し、surface form の attestation が確認可能 (大半の cells は OK、一部 `—` でも全体 attested)
   - **fragmentary**: 直接 corpus が isolated/limited で、cells の多くが proxy/projection の可能性 (xsc/juc/xpr)
   - **partly-understood**: 文字は読めるが lexicon/grammar 未完成 (xmr/zkt/pyx/elx)
   - **reconstructed**: 直接資料なし、comparative reconstruction のみ (ine PIE)
   - **pedagogical**: 教育用 reconstruction (ja_edo/ja_heian/ko_mid/ko_em/vi_nom)
   この運用ルールを README/audit に明記する候補 (Session 18 #2 と一致)。

4. **Iranian fragmentary 言語の系統的整理** — xpr Parthian + xsc Scythian は両方 fragmentary。Iranian family 内でほかに ave Avestan/peo Old Persian (attested 維持) / pal Middle Persian / Modern Iranian languages という階層がある。historical depth に沿った dataStatus 階層が見えてきた。

### 持ち越し（Session 25 以降）

**Schema-level:** §7.7 cell-level evidence / Session 3 #4, 5 #4, 6 #4, 9 #5, 10 #4-5, 11 #3 #6, 13 #1-2, 14 #3-4, 15 #4, 16 #1-4, 17 #2 #4 #5, 18 #2 #3, 19 #1-4, 20 #1 #3 #4, 21 #1 #2, 22 #3, 23 #1-2, **24 #3 dataStatus 運用ルール docs**

**追加リサーチ要:** §6.16, §6.42, Tujia, mnp, cpx/wuu_wz/wuu_sz, Session 5 #1 #3, 7 #1-2 #5, **8 mon/mnw (allowlisted)**, 8 残 dup-coord, 9 #1-3, 11 #1-2, 12 #1-6, 13 #3, **Codex 2-7 残**, 17 #3 hit.sun, 18 #1 omc/chb fragmentary 候補, 20 #2

---

## Session 25 (2026-05-05): Codex 8 priority 1-2 fixes — sga/mga.hello + orv.thanks → `—`

**スコープ:** Codex 追加レビュー 8 で優先順位 1-2 として「modern からの投影疑い」と flag された 3 セルを ancient lang policy に従い `—` 化。

### 修正 3 セル

| Code | Lang | Field | 旧 | 根拠 (Codex 8) |
|---|---|---|---|---|
| `sga` | Old Irish | `hello` | `dia duit` / `dia duitʲ` | `Dia duit` は **現代 Irish phrasebook の evidence が強い**。Old Irish 8-9c. の会話 greeting としてそのまま出すのは危険。Old Irish glosses/sagas/legal texts の実例なし |
| `mga` | Middle Irish | `hello` | `dia duit` / `dia duitʲ` | 同上。Middle Irish (10-12c.) でも phrase としての greeting attestation 未確認、modern Irish 投影疑い |
| `orv` | Old East Slavic | `thanks` | `благодарю` / `blagodarju` | **Modern Russian-like 1sg finite form** に見え、Old East Slavic 固定 thanks formula としては direct source 必要。Modern Russian `спасибо` は別語源 (`съпаси богъ` "God save") |

### Codex 8 で flag されたが今回 touch しなかったセル

- `sga.thanks` / `mga.thanks: atloirgaim` — Codex 8: "plausible だが eDIL entry/lemma/citations 確認要"。Old/Middle Irish で thank/praise 系の finite 1sg form として attested の可能性あり、今回 keep。
- `fro.thanks: merci` — Codex 8: "維持可だが mercy/favor > thanks の意味史 tooltip 必要"。意味史 note schema があれば理想だが、現時点では keep。
- `osp.thanks: mercedes` — Codex 8: "RAE が thanks expression として認める"、keep。
- `goh/gmh/osx.thanks` — Germanic gratitude noun として plausible、formula か noun か区別注記候補だが keep。
- `orv.hello: здравъ` — "healthy/sound" adjective の greeting use、Slavic `zdrav` greeting 系として plausible だが OES direct citation 要。Codex 8 priority 5。

これらは Session 26+ で個別判断、もしくは note schema 導入後対応。

### Validator 結果

```
Languages: 579 (modern: 499, historical: 80)
ERRORS:   0
WARNINGS: 0
ALLOWLISTED: 1
INFOS:    98 (—)  ← 95 → 98 (Session 25 で 3 セル増)
INFOS:    26 (dup-coord)
PASS

Data status breakdown:
  modern               556
  attested             10
  fragmentary          3
  reconstructed        1
  partly-understood    4
  pedagogical          5
```

### Session 25 中に気付いた追加問題（未対応・記録のみ）

1. **`sga.hello` / `mga.hello` の代替候補** — Codex 8 が「Old Irish の attested greeting があるなら使うべき」と暗示。eDIL で `slán` (=safe/well, hello/farewell), `bennacht` (=blessing) 系を検索すると候補が見つかる可能性。Session 26+ で eDIL 直接確認候補。

2. **Celtic family 全体の hello/thanks attestation** — `cy` Welsh, `br` Breton, `gd` Scottish Gaelic, `ga` Modern Irish などは現代語で標準形があるが、Old/Middle/Early Modern の各 stage で形が違う可能性。Celtic historical languages (sga/mga + 他) の系統的 hello/thanks audit が今後候補。Session 26+。

3. **Slavic family の hello/thanks 系統** — `orv` Old East Slavic は今回 thanks `—` 化。`cu` Old Church Slavonic, `bg` Bulgarian, `uk` Ukrainian 等の Slavic family 全体で hello/thanks の系統的 audit が候補。Session 26+。

4. **数字 98 への到達** — `—` cells が Session 1 開始時の 58 から +40 = 98。100 件超えが視野に入った。Session 1-25 で audit-driven `—` 化により「直接 attestation のないセルは表示しない」というポリシーが定着。validator stats でこのトレンド可視化候補。

### 持ち越し（Session 26 以降）

**Schema-level:** §7.7 cell-level evidence / Session 3 #4, 5 #4, 6 #4, 9 #5, 10 #4-5, 11 #3 #6, 13 #1-2, 14 #3-4, 15 #4, 16 #1-4, 17 #2 #4 #5, 18 #2 #3, 19 #1-4, 20 #1 #3 #4, 21 #1 #2, 22 #3, 23 #1-2, 24 #3, **25 #1 eDIL 確認 / #2 Celtic 系統 / #3 Slavic 系統**

**追加リサーチ要:** §6.16, §6.42, Tujia, mnp, cpx/wuu_wz/wuu_sz, Session 5 #1 #3, 7 #1-2 #5, **8 mon/mnw (allowlisted)**, 8 残 dup-coord, 9 #1-3, 11 #1-2, 12 #1-6, 13 #3, **Codex 2-8 残**, 17 #3 hit.sun, 18 #1 omc/chb fragmentary 候補, 20 #2

---

## Session 26 (2026-05-05): omc Mochica + chb Chibcha → `fragmentary`

**スコープ:** Session 18 #1 / Codex 4 で fragmentary 候補と記録された Pre-Columbian 言語 2 件を schema 化。

### 変更内容

`DATA_STATUS_OVERRIDES` に追加 (xsc/juc/xpr に続く 4-5 件目):

```js
omc:       'fragmentary',       // Mochica/Yunga — Pre-Columbian Andean. Documentation limited
                                // to Carrera de la Vega's "Arte de la lengua yunga" (1644)
                                // and Lugo's "Arte de la lengua mochica" (1607). 7/20 cells
                                // are `—`. Per Codex review 4 / Session 18 #1.
chb:       'fragmentary',       // Chibcha/Muisca — Pre-Columbian Andean Colombia. Documented
                                // in Lugo (1619) and Anonymous (early 17c.) grammars; 17c.
                                // Spanish missionary corpus only. Per Codex review 4 / Session 18 #1.
```

### 各言語の現状

| Code | Lang | filled cells | source | dataStatus 旧 | 新 |
|---|---|---|---|---|---|
| `omc` | Mochica/Yunga | 13/20 (7×`—`) | Lugo 1607 / Carrera de la Vega 1644 | (default = modern) | **fragmentary** |
| `chb` | Chibcha/Muisca | 19/20 (1×`—` cat) | Lugo 1619 / Anonymous 17c. | (default = modern) | **fragmentary** |

両者とも HIST_DESCENDANT に `null` で登録されているため UI では historical 扱いだったが、`dataStatus` override がなかったため validator stats では「modern」default にカウントされていた。今回の override 追加で:
- Pre-Columbian Andean 言語の **限定的 attestation** が schema レベルで明示
- validator stats の `modern` が 556 → 554 に正規化 (omc/chb 分が fragmentary へ移動)

### Validator 結果

```
Languages: 579 (modern: 499, historical: 80)
ERRORS:   0
WARNINGS: 0
ALLOWLISTED: 1
INFOS:    98 (—) + 26 (dup-coord)
PASS

Data status breakdown:
  modern               554
  attested             10
  fragmentary          5     ← +2 (omc/chb 追加: xsc + juc + xpr + omc + chb)
  reconstructed        1
  partly-understood    4
  pedagogical          5
```

### Session 26 中に気付いた追加問題（未対応・記録のみ）

1. **他 Pre-Columbian 言語の dataStatus 未設定** — `cqu` Classical Quechua, `nci` Classical Nahuatl は HIST_DESCENDANT に登録 (or 別途 historical 扱い) されているが、dataStatus override 状況が不明。Session 27+ で同様の体系的整理候補。

2. **`Data status breakdown` の `modern 554` への正規化進行** — Session 24 (xpr) で 557→556、Session 26 で 556→554。historical 扱いだが override がなかった言語の正規化が継続中。最終的に modern = HIST_DESCENDANT 外の言語数 (498-499) に近づくはず。

3. **fragmentary 5 件の系統内訳:**
   - Iranian: xsc Scythian + xpr Parthian (2)
   - Tungusic: juc Jurchen (1)
   - Andean (Pre-Columbian): omc Mochica + chb Chibcha (2)
   各系統の典型的な「documentation 限定」状況を表す。systematic UI 表示でこの分類が活きる可能性。

4. **`omc.cat` `chb.cat` `omc.tree` 等の `—` の意味** — fragmentary 言語で `—` が並ぶことは「not attested」(意図的) と解釈されるべきだが、UI で「未調査」と区別できる仕組みが必要。Session 11 #6 / Session 17 #5 削除値 notes schema と関連。

### 持ち越し（Session 27 以降）

**Schema-level:** §7.7 cell-level evidence / Session 3 #4, 5 #4, 6 #4, 9 #5, 10 #4-5, 11 #3 #6, 13 #1-2, 14 #3-4, 15 #4, 16 #1-4, 17 #2 #4 #5, 18 #2 #3, 19 #1-4, 20 #1 #3 #4, 21 #1 #2, 22 #3, 23 #1-2, 24 #3, 25 #1-3, **26 #1 cqu/nci dataStatus 整理 / #4 fragmentary cells UI 区別**

**追加リサーチ要:** §6.16, §6.42, Tujia, mnp, cpx/wuu_wz/wuu_sz, Session 5 #1 #3, 7 #1-2 #5, **8 mon/mnw (allowlisted)**, 8 残 dup-coord, 9 #1-3, 11 #1-2, 12 #1-6, 13 #3, **Codex 2-8 残**, 17 #3 hit.sun, 20 #2

---

## Session 27 (2026-05-05): historical 言語 dataStatus 正規化 — 55 件 'attested' 追加

**スコープ:** Session 26 #1-2 で記録した「他 historical 言語の dataStatus 未設定」問題を一括解決。HIST_DESCENDANT に登録されているが `DATA_STATUS_OVERRIDES` に entry がなく、validator stats で「modern」default に流れていた 55 言語に 'attested' を追加。validator stats の `modern` カウントが actual modern lang count (499) に正規化された。

### Schema 整理結果

```
Before Session 27:                After Session 27:
  modern               554          modern               499  ← 正確 (= 579 - 80 historical)
  attested             10           attested             65   ← +55 (la/el_grc/sa 等 + mnc/akk)
  fragmentary          5            fragmentary          5
  reconstructed        1            reconstructed        1
  partly-understood    4            partly-understood    4
  pedagogical          5            pedagogical          5
  -----------          ----         -----------          ----
                       579                               579 ✓ (= 80 historical 全て分類済)
```

### 追加した 55 'attested' 言語の系統別内訳

**Indo-European Old (24件):**
la Latin, el_grc Ancient Greek, en_ang Old English, enm Middle English, non Old Norse, got Gothic, cu Old Church Slavonic, sa Sanskrit, peo Old Persian, ave Avestan, pal Middle Persian, fro Old French, goh Old High German, gmh Middle High German, osp Old Spanish, osx Old Saxon, sga Old Irish, mga Middle Irish, hit Hittite, gmy Mycenaean Greek, hbo Biblical Hebrew, sukh Old Thai (Sukhothai), orv Old East Slavic, xct Classical Tibetan

**Afro-Asiatic / Semitic Old (8件):**
egy Ancient Egyptian, cop Coptic, arc Aramaic, phn Phoenician, uga Ugaritic, syc Classical Syriac, gez Ge'ez, xsa Sabaean

**Indic / Buddhist (1件):**
pi Pali

**Iranian / Turkic (1件):**
xqa Karakhanid

**Mesoamerican / Classical American (3件):**
nci Classical Nahuatl, myn Classical Maya, cqu Classical Quechua

**Mainland SE Asia / Insular SE Asia historical (10件):**
kaw Old Javanese, kho Khotanese, okz Old Khmer, omx Old Mon, obr Old Burmese, occ Old Cham, oma Old Malay, osu Old Sundanese, otl Old Tagalog, onw Old Nubian

**East Asian / Inner Asian historical (6件):**
och Old Chinese, ojp Old Japanese, txg Tangut, sog Sogdian, otk Old Turkic, xng Middle Mongolian

**Tungusic / Akkadian (2件):**
mnc Manchu, akk Akkadian

### 各言語の attested 根拠 (代表例)

各 entry にコメントで attestation の代表的 corpus を記載:
- la: Classical/Medieval Latin corpus 全体
- el_grc: Homer + Classical + Hellenistic
- sa: 大規模 Classical Sanskrit corpus
- got: Wulfila Bible
- gmy: Linear B tablets (palace records)
- xqa: Dīwān Lughāt al-Turk (Mahmud al-Kashgari, 11c.)
- och: pre-Han inscriptions + Shijing/Shujing
- ojp: Man'yōshū + Kojiki + Nihon Shoki
- mnc: Qing-era Veritable Records
- akk: cuneiform from ~2350 BCE
- (他 45 件、全て attestation source 記載)

### Validator 結果

```
Languages: 579 (modern: 499, historical: 80)
ERRORS:   0
WARNINGS: 0
ALLOWLISTED: 1
INFOS:    98 (—) + 26 (dup-coord)
PASS

Data status breakdown:
  modern               499  ← 正規化完了
  attested             65
  fragmentary          5
  reconstructed        1
  partly-understood    4
  pedagogical          5
```

### 効果と意義

1. **schema 完全性**: HIST_DESCENDANT に登録されている 80 historical 言語**全て**が `DATA_STATUS_OVERRIDES` に classify 済みになった。default-modern fallback の歴史言語が消滅。

2. **validator 統計の意味化**: `modern: 499` は実際の modern 言語数と完全一致。`attested: 65` は historical の主流 (continuous primary text corpus を持つもの)、その他 15 件が special status (5 fragmentary + 4 partly-understood + 1 reconstructed + 5 pedagogical)。

3. **UI 側で `meta.dataStatus` に基づく表示** が将来できるようになった基盤整備。例: 「fragmentary」「partly-understood」言語に注記アイコンを付ける、など。

4. **Codex review 4-8 系の deferred fragmentary 検討との整合**: Session 18 (xsc) → 20 (juc) → 24 (xpr) → 26 (omc/chb) で fragmentary を個別に追加してきた流れと、Session 27 の bulk attested 追加で完全な classification table が完成。

### Session 27 中に気付いた追加問題（未対応・記録のみ）

1. **historical lang の中に「subdialectal」「colloquial register」分類が必要なケース** — 例: `ja_edo`/`ja_heian` は pedagogical だが、後の研究で「stage-specific attestation」と表現する余地。Session 28+ で `pedagogical` enum 拡張候補。

2. **`gmy` Mycenaean Greek は attested だが Codex 3 が block 全体の信頼性を強く疑問視** — language-level dataStatus は 'attested' でよいが、cell-level の confidence は別問題。Session 17 #5 / Session 22 #3 削除値 notes schema と関連。

3. **`onw` Old Nubian と `xqa` Karakhanid の `attested` 妥当性** — 両者とも特殊 corpus (Old Nubian Christian texts / Dīwān Lughāt al-Turk) を持つが、Codex 4-5 で hello/thanks の信頼性が flagged されている。dataStatus 'attested' で OK、cell-level で `—` 化は別途対応中。

4. **README/docs に dataStatus 運用ルール明記** — Session 24 #3 の deferred 項目。Session 27 で 80/80 historical lang がカテゴリ化されたタイミングで、`docs/data-status-policy.md` のような文書を作成する motivation が高まった。Session 28+ docs 候補。

### 持ち越し（Session 28 以降）

**Schema-level:** §7.7 cell-level evidence / Session 3 #4, 5 #4, 6 #4, 9 #5, 10 #4-5, 11 #3 #6, 13 #1-2, 14 #3-4, 15 #4, 16 #1-4, 17 #2 #4 #5, 18 #2 #3, 19 #1-4, 20 #1 #3 #4, 21 #1 #2, 22 #3, 23 #1-2, 24 #3, 25 #1-3, 26 #4, **27 #1-4 (pedagogical 拡張 / cell-level confidence / docs 整備)**

**追加リサーチ要:** §6.16, §6.42, Tujia, mnp, cpx/wuu_wz/wuu_sz, Session 5 #1 #3, 7 #1-2 #5, **8 mon/mnw (allowlisted)**, 8 残 dup-coord, 9 #1-3, 11 #1-2, 12 #1-6, 13 #3, **Codex 2-8 残**, 17 #3 hit.sun, 20 #2

---
