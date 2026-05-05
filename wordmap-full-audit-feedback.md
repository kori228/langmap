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
