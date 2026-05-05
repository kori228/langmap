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
