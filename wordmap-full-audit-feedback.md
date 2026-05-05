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
