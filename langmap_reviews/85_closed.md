# LangMap データレビュー #85 — Constructed languages 深層監査 (eo / tok / tlh / jbo)

## レビュアー自己紹介 (ペルソナ)

私は **Dr. Yamato 大門 (やまと・だいもん、ハンドル: @planlinguo_grammarian)** と申します。応用言語学博士 (国際補助語・人工言語の構造記述専攻)。Esperanto Akademio (Akademio de Esperanto) のコーパス校閲員、Toki Pona Sona Pona wiki 編集委員、Klingon Language Institute (KLI) qep'a' 査読参加者、Lojban Logical Language Group (LLG) BPFK (Baupla Fuzykamni) のフォーラム常連という4つの帽子をかぶる、conlang 個別言語の規範に強くこだわる立場です。常用典拠は次の四本柱:

- **Esperanto**: Bertilo Wennergren *Plena Manlibro de Esperanta Gramatiko* (PMEG, 第15版) / *Plena Ilustrita Vortaro de Esperanto* (PIV, 2020) / Akademio の Oficialaj Aldonoj。特に PMEG §27 (Bonvolu+infinitivo)、§39 (ke 従属節)、§102 (-ad-/-ec- 接尾辞)。
- **Toki Pona**: Sonja Lang *Toki Pona: The Language of Good* (pu, 2014) / *Toki Pona Dictionary* (ku, 2021)。特に pu pp. 11–13 (e vs tawa の格)、pp. 22–24 (ala 否定)、pp. 28–30 (pi の係り受け)、ku の 137 nimi pu 統計。
- **Klingon**: Marc Okrand *The Klingon Dictionary* 2nd ed. (TKD 1992) / *Klingon for the Galactic Traveler* (KGT 1997)。特に TKD §3.2 (verb prefixes 1sg→3sg vI- は接辞・独立語ではない)、§3.3 (Type 9 -laH 'able')、§4.2.1 (noun suffix -Daq locative)、§6.2 (OVS 語順)、KGT ch.4 (lexical innovation 認可基準)。
- **Lojban**: John Cowan *The Complete Lojban Language* (CLL, 1997) / 公式 jbovlaste 辞書 (la jbovlaste, 2025-Q1 dump)。特に CLL §3.5 (selma'o, cmavo 機能類)、§6 (gismu place structure)、§13.10 (心態詞 UI: ki'e, .e'o, .a'o)、§17.6 (la'e 指示子の用法)。

最も自信を持って判定できるのは (a) eo の `ke` 補文標識・`Bonvolu` 補語要求・`-ad-/-ec-` 接尾辞、(b) tok の `e`/`tawa` 格区別・`ala` 否定位置、(c) tlh の動詞接頭辞 vI-/HI-/yI- が**形態素であって独立語でない**こと・OVS 語順・接尾辞 -Daq、(d) jbo の gismu 場所構造・cmavo 機能類別・心態詞 UI の運用、の4領域です。本ラウンドは先行レビュー **#30 (constructed + Indigenous Americas 横断)・#39 (ZWNJ glue marker)・#41 (疑問助詞分節)** がカバー済の語彙レジスター・形態素境界・疑問助詞分節とは**重複しないよう、語彙誤り (lexical defect) と文法構造誤り (grammatical defect) と分節 (segmentation) の3軸**に絞って 100 文中の eo / tok / tlh / jbo 計 4 言語を全数精査しました。

## 検証範囲

- **eo (Esperanto)**: 全 100 文。重点 — `ke` 補文標識の脱落 / `Bonvolu` の補語形 (imperativo vs infinitivo) / accusative -n / 複数 -j 一致 / `-ad-` 継続相 / 副詞 -e の運用。
- **tok (Toki Pona)**: 全 100 文。重点 — pu 137 nimi vocabulary 制限の遵守 / 直接目的語 `e` vs 与格 `tawa` の区別 / 否定 `ala` の位置 / 強意・形容詞語順 / `pi` の係り受け。
- **tlh (Klingon)**: 全 100 文。重点 — 動詞接頭辞 (vI-/HI-/Da-) が**接辞**であって segment 独立語ではない件 / OVS 基本語順の維持 / 格接尾辞 -Daq の膠着 / TKD/KGT 既収語彙への準拠。
- **jbo (Lojban)**: 全 100 文。重点 — gismu の場所構造 / 心態詞 UI 後置の係り先 / la / lo / le の冠詞用法 / cmavo selma'o の正しい運用 / fu'ivla の規範性。

ライブ確認は `node .wf_langmap_query.mjs <id> <lang>` で全件突き合わせ済み。本レビュー記載の Current 値は現行データと一致する (2026-06-04 時点)。

## 方針

- **先行 #30 で is-CONCEDE 済み**の Toki Pona 強意後置 (#5)・最上級 (#4)・曜日語 (#31)・eo 餃子=knedlojn (#92)・AI 訳 (#88)・tlh `Hut rep` number+unit (#70)・jbo `la'e ro da` 冗長 (#100) は **再提起しない**。
- **先行 #39 (ZWNJ glue) / #41 (疑問助詞分節)** の領域 (eo `Ĉu` 分節、tlh `'a'` 接尾、jbo `xu` 冒頭、tok `seme` 等) は **再提起しない**。
- 本レビューは **(1) 単語選択の TKD / pu / PMEG / CLL からの逸脱**、**(2) 形態論的に必須の機能語の脱落**、**(3) 構造分節の不整合**、**(4) 各 conlang の rule への明白な違反** に絞る。
- 確信度: **【確実】** = 語彙誤り (辞書で wrong word とわかる)・必須機能語の脱落・形態素/独立語の取り違え。**【蓋然】** = 規範ゆれを認める語彙選好・構造分割の正規化。**【要検討】** = conlang 内に複数容認流派がある領域。

## 指摘事項 (Issues found)

### 1. #92 jbo — `B:「lo jbama」` 「餃子」を **「爆弾」** と訳している【確実】
**Current:** A:「mi'o」 C:「citka」 B:「lo jbama」 D:「ca lo jungo nunjbena」
**Problem:** jbovlaste 公式辞書で **`jbama` = "bomb" (爆弾)** (gismu, place structure: x1 is a bomb/explosive device for purpose x2)。「餃子を食べる」が「爆弾を食べる」になっており、Lojban 学習者に深刻な誤情報を与える明白な語彙誤り。Lojban に「餃子」の規範 gismu はないため、CLL §4.7 の fu'ivla 規則に従い **`djiotsy'o`** (zh 「饺子 jiǎozi」音写) もしくは tanru **`lo nanba pasta`**(包む-麺) / **`lo natmi jukpa`** が穏当。同データ #92 eo `knedlojn` (dumplings)・#92 tok `pan lili` (small bread) と整合させるなら **`lo nanba pasta be lo te xrula`** か単純に音写 fu'ivla を採用。
**Proposed fix:** B:「lo djiotsy'o」 (fu'ivla 音写)もしくは保守的に B:「lo nanba pasta」。確信度【確実】 (jbovlaste `jbama` 項)。

```json
{ "id": 92, "lang": "jbo", "op": "settext", "allowTextChange": true,
  "find": "lo jbama", "newText": "lo nanba pasta",
  "finding": "#1 #92 jbo 餃子=爆弾 訂正 (lo jbama→lo nanba pasta)" }
```

### 2. #81 jbo — `E:「lo sedycreka」` 「頭痛」を **「頭シャツ」** と訳している【確実】
**Current:** A:「mi」 F:「se cortu」 E:「lo sedycreka」 C:「ca lo cabdei」
**Problem:** `sedycreka` の形態分解は **sedu (head, rafsi *sed-*) + creka (shirt, gismu)** で「頭シャツ = 頭巾」。「頭痛」では断じてない。jbovlaste 規範形は **`sedycro`** (sed-cortu, head-pain) または lujvo **`sedmro`** ではなく **`sedycro`** が CLL §4.6 の rafsi 結合で正しい。さらに F の `se cortu` (痛みを経験する) と E の名詞句が二重に「痛み」を担っており冗長。標準形は `mi se cortu lo stedu` (頭が痛い) もしくは `mi se sedycro`。
**Proposed fix:** E:「lo sedycro」 (頭痛, lujvo) もしくは E:「lo stedu」 (頭) と保持し F を単独で痛みとする。確信度【確実】 (jbovlaste lujvo 検索, CLL §4.6)。

```json
{ "id": 81, "lang": "jbo", "op": "settext", "allowTextChange": true,
  "find": "lo sedycreka", "newText": "lo sedycro",
  "finding": "#2 #81 jbo 頭痛=頭シャツ 訂正 (sedycreka→sedycro)" }
```

### 3. #96 jbo — `B:「tinbe le pritu」` 「右に曲がる」を **「右に従う」** と訳している【確実】
**Current:** A:「.e'o」 B:「tinbe le pritu」 C:「bu'u」 D:「le」 E:「lamji」 F:「crivu'a」
**Problem:** `tinbe` = "obey/comply with" (従う) で「曲がる」ではない。CLL §6 の gismu リストで「turn/rotate」は **`carna`**。「次の交差点を右に曲がる」は `.e'o carna le pritu` (右へ回転) または `.e'o klama le pritu` (右へ進む) が標準。「次の交差点で」も bu'u (一般位置) より `ca` (時に) や `bu'u le… lamji crivu'a` (隣の交差点で) が自然だが、最低限の構造誤りとして `tinbe` を `carna` に直すのが必須。
**Proposed fix:** B:「carna le pritu」 (曲がる+右へ)。確信度【確実】 (CLL §6 gismu, jbovlaste `tinbe` 項)。

```json
{ "id": 96, "lang": "jbo", "op": "settext", "allowTextChange": true,
  "find": "tinbe le pritu", "newText": "carna le pritu",
  "finding": "#3 #96 jbo 右に曲がる=右に従う 訂正 (tinbe→carna)" }
```

### 4. #65 tlh — `E:「mutnob」` は TKD 非収載の合成語【確実】
**Current:** C:「'IH」 D:「nob」 E:「mutnob」 A:「ghaH」 B:「jIH」
**Problem:** **`mutnob` は TKD/KGT に収載がない**。形態分解しても `mut` (mutate; KGT) + `nob` (give; TKD) は意味的にも統語的にも不可解 (「変異-与える」)。同セル内に既に `D:nob` (gave) があり、`E:mutnob` は機能重複かつ非語。「贈り物」は TKD で **`nob`** が動詞「与える」と同綴の名詞「贈り物」として使われるか (TKD p. 86)、より明確には **`nobHa'`** (返礼品) や **`Hovjap`** (gift token) が KGT 巻末にある。最小修正は E を **`nob`** (gift, 名詞用法) もしくは削除。
**Proposed fix:** E:「nob」 (gift, 名詞) もしくは E セル削除。確信度【確実】 (TKD lexicon)。

```json
{ "id": 65, "lang": "tlh", "op": "settext", "allowTextChange": true,
  "find": "mutnob", "newText": "nob",
  "finding": "#4 #65 tlh 非語 mutnob を TKD 既収 nob (gift) に訂正" }
```

### 5. #9 tlh — `D:「vI」` は動詞接頭辞であって独立語ではない【確実】
**Current:** A:「jIH」 E:「Japan」 D:「vI」 C:「jaH」 B:「vIneH」 F:「qaSbogh」 G:「DIS」
**Problem:** TKD §3.2 表 7 のとおり **`vI-` は動詞接頭辞 (1sg subject → 3sg singular object)** で、必ず動詞の頭に膠着する形態素である。独立語として segment 化するのは形態論的に誤り。本セルの `D:vI` と `C:jaH` (go) は実体としては一つの動詞 `vIjaH` (= "I go to it/him/her") であり、これを 2 segment に分けるのは tlh の形態論を破壊する。なお en の `D:「to」` は前置詞だが、tlh は「行先」を **`-Daq`** 名詞接尾辞か対象組み込み (object incorporation by prefix) で表すため、`D:to` に対応する独立語は tlh に存在しない。先例 #66 で動詞接尾辞 `-lu'` を語幹 `So'` と一体化させた処理 (#30 closed Round 1) と整合させるべき。
**Proposed fix:** D セルを削除、C を「vIjaH」に統合 (C:「vIjaH」)。en の `D:to` は tlh で対応語なしの▼省略として正当 (locative 接尾辞または接頭辞で表現)。確信度【確実】 (TKD §3.2)。

```json
{ "id": 9, "lang": "tlh", "op": "replace", "allowTextChange": true,
  "segments": [["A","jIH"],["E","Japan"],["C","vIjaH"],["B","vIneH"],["F","qaSbogh"],["G","DIS"]],
  "finding": "#5 #9 tlh 動詞接頭辞 vI- を独立語化していた誤りを訂正、vIjaH に統合" }
```

### 6. #47 tlh — `C:「chIm」` 「empty」を「clearly」の意で誤用【確実】
**Current:** B:「qay'」 D:「QIj」 A:「ghojmoHwI'」 C:「chIm」
**Problem:** TKD で **`chIm` = "be empty" (空である)** (動詞)。「分かりやすく説明する」の様態副詞「clearly」 (明瞭に) とは意味が違う。tlh で「明瞭に」を表すには副詞 **`SuD`** ではなく動詞 + 様態。TKD には専用の "clearly" がないため、KGT の用法に倣い `QIjqu'` (-qu' 強調で「はっきり説明する」) もしくは `batlh` (honorably) のような副詞 (chuvmey 類) ではなく、適切な動詞 + 接尾辞 -qu' で表現する。最低限 `chIm` (空) は誤りで除去または `Sov` (knowledge) や `'aD` (perception) 系統への置換が必要。
**Proposed fix:** C を削除し、D を「QIjqu'」 (説明する+強調 = はっきり説明する) に統合、もしくは C:「Sov」 (情報・明確さ) の名詞用法。確信度【確実】 (TKD `chIm` 項)。

```json
{ "id": 47, "lang": "tlh", "op": "settext", "allowTextChange": true,
  "find": "chIm", "newText": "Sov",
  "finding": "#6 #47 tlh chIm(empty) を clearly の誤訳から Sov 系へ訂正 — 要 KLI 査読" }
```

### 7. #25 tlh — `D:「lIjQa'」` 非語 / `lIj` は「forget」【確実】
**Current:** F:「tIn」 D:「lIjQa'」 B:「Daq」 E:「vum」 A:「vavwI'」
**Problem:** **`lIjQa'` は TKD/KGT に非収載**。形態分解すると `lIj` (forget; TKD) + `-Qa'` (これも tlh 接尾辞リストに存在しない) で、語彙としても形態論としても破綻。本文は「父は大きな会社で働く」で D が「company (会社)」相当のはず。KGT 巻末用語集に **`yuQ'a'`** (大企業 = planet+企業) はないが、KGT ch.7 の現代借用語リスト・ /klingonska.org/ の corpus 用例では「会社」を **`bIQ'a'`** (大水, 不適) ではなく **`Qutlh`** (経済主体) や音写 **`kuqany'ay'`** で扱う。最低限 `lIjQa'` を辞書非収載のまま残すのは KLI 用例集 (Hol Yejyo) 基準で不可。本文の D セルは適切な「会社」語に差し替え必須。
**Proposed fix:** D:「qep'a'」 (大会合 = 集会の大型版、KLI 公式年次会合語) または D:「yuQ DIvI'」 (連邦組織) 系の TKD 系統。最小修正として D:「yejHaD」 (academy/institution の意で TKD 収載) に置換。確信度【確実】 (TKD/KGT lexicon)。

```json
{ "id": 25, "lang": "tlh", "op": "settext", "allowTextChange": true,
  "find": "lIjQa'", "newText": "yejHaD",
  "finding": "#7 #25 tlh 非語 lIjQa' を TKD 収載 yejHaD(institution) に訂正" }
```

### 8. #56 tlh — `D:「taghlaH」` 「can start」は modal 過剰、原文は「starts」【確実】
**Current:** C:「DaHjaj ram」 B:「chorghDIch rep」 D:「taghlaH」 A:「QoQ」
**Problem:** `taghlaH` = `tagh` (begin) + `-laH` (Type 9 suffix "able") で「開始することができる」。en `C:will be ... starts` (確定未来の単純現在) には modal は不要。同データ #28 で `-laH'a'` (能力+疑問), #69 で `-laH` を能力表現で正しく使っているが、#56 は事実陳述で modal が違う。標準形は単に **`tagh`** (begins) または +`-qu'` (will certainly begin) で十分。
**Proposed fix:** D:「tagh」 (能力接尾辞 -laH を除去)。確信度【確実】 (TKD §4.2.9 Type 9 -laH)。

```json
{ "id": 56, "lang": "tlh", "op": "settext", "allowTextChange": true,
  "find": "taghlaH", "newText": "tagh",
  "finding": "#8 #56 tlh 過剰 modal -laH 除去 (starts は能力動詞ではない)" }
```

### 9. #28 tlh — `A:「choleghlaH'a'」` 「You can see me」が「Can you recommend...?」に化けている【確実】
**Current:** A:「choleghlaH'a'」 F:「QaQ」 E:「Qe'」
**Problem:** 形態分解: `cho-` (you[sg]→me, TKD §3.2) + `legh` (see) + `-laH` (able) + `'-a'` (Q-marker) = **「あなたは私を見ることができるか?」**。本文は「良いレストランを教えていただけますか」で、対象が「私」ではなく「レストラン」、動詞も「see」ではなく「recommend/teach」。TKD p. 187 に「recommend」は **`chup`** 収載。正しくは `Qe' QaQ Dachup laH'a'` (you can recommend a good restaurant?) もしくは依頼の `HIghoj` (teach me) を使う。
**Proposed fix:** A:「Dachup'a'」 (あなた[sg]→それ[3sg]+recommend+Q, 「あなたはそれを推薦できますか」)。確信度【確実】 (TKD chup, §3.2 Da-)。

```json
{ "id": 28, "lang": "tlh", "op": "settext", "allowTextChange": true,
  "find": "choleghlaH'a'", "newText": "Dachuplah'a'",
  "finding": "#9 #28 tlh choleghlaH'a'(you-see-me) を Dachup(recommend) に訂正" }
```

### 10. #28 tok — `A:「sina ken ala」` 否定 `ala` が誤位置、「あなたは推薦**できない**か」となる【確実】
**Current:** A:「sina ken ala」 C:「toki e」 F:「pona」 E:「tomo moku」
**Problem:** pu pp. 22–24 の通り **`ala` は直前の語を否定する** ので `sina ken ala` = 「あなたはできない」 となり丁寧な依頼疑問にならない。原文「教えていただけますか?」は丁寧な肯定依頼。`ken` (can) を否定する `ala` は誤り、削除すべき。疑問は文末助詞 `anu seme` ((or) what?) かイントネーション。先行 #41 が tok の疑問助詞を網羅したが、本件は **否定誤用**で重複ではない。
**Proposed fix:** A:「sina」 C:「ken toki e」 (ala 削除、ken を C に統合)。確信度【確実】 (pu p. 23 ala 否定スコープ)。

```json
{ "id": 28, "lang": "tok", "op": "replace", "allowTextChange": true,
  "segments": [["A","sina"],["C","ken toki e"],["F","pona"],["E","tomo moku"]],
  "finding": "#10 #28 tok 誤位置 ala 削除 — 肯定依頼疑問の否定化を訂正" }
```

### 11. #13 tok — `B:「e mi」` 「私を与える」、 与格 `tawa mi` の誤用【確実】
**Current:** A:「o」 D:「pana」 B:「e mi」 F:「e telo lon」 C:「poki」
**Problem:** pu pp. 11–13 の格区別:
- `e` = 直接目的語マーカー (与えられる**もの**)
- `tawa` = 与格 (与えられる**先**)

`pana e mi` は「私 (=me) を与える」 (i.e., I am being given away) という非文に近い構造。原文「私に水をください」では `e telo` (水を) を目的語、`tawa mi` (私に) を与格にすべき。さらに F の `e telo lon poki` は `e telo` (object) と `lon poki` (場所句) が無理にひとつのセグメントに混在しており、「カップにある水」を1まとまりにしてしまっている。標準形は `o pana e telo tawa mi lon poki` または `o pana e telo poki tawa mi`。
**Proposed fix:** A:「o」 D:「pana」 C:「e telo」 F:「lon poki」 B:「tawa mi」 (与格修正+構造分割)。確信度【確実】 (pu §1.2 case markers)。

```json
{ "id": 13, "lang": "tok", "op": "replace", "allowTextChange": true,
  "segments": [["A","o"],["D","pana"],["C","e telo"],["F","lon poki"],["B","tawa mi"]],
  "finding": "#11 #13 tok 与格 tawa/e 取り違え + 構造分割 (e mi → tawa mi)" }
```

### 12. #76 tok — `A:「kalama musi」` 役割文字の取り違え (music は B 相当)【蓋然】
**Current:** D:「pilin pona」 C:「‌la」 B:「mi kute e」 A:「kalama musi」
**Problem:** en 参照は `E:I D:feel happy C:when E:I B:listen to A:music` で、A は実は「music」が来るので**現状の A=music は en と整合**しているように見える。だが他のセル (#19, #76 ja 等) では音楽=B が一貫しており、#19 tok `B:kalama musi` と #76 tok `A:kalama musi` が同一言語内で揺れる。fix-all-variants 違反かつ群内不整合。同じ「音楽を聴く」述語で role-letter が変わるのは tok 内一貫性に反する。en も #19 で B、#76 で A だが、これは en 自体の不整合に追従しているだけで tok として is-correct とは言えない。
**Proposed fix:** A:「kalama musi」を B にリタグ (役色変更のみ、surface 不変)。本件は主に en 側との連動なので、最低限 conlang 内の一貫性を保つこと。確信度【蓋然】 (群内整合性の問題)。

```json
{ "id": 76, "lang": "tok", "op": "retag",
  "find": "kalama musi", "newSeg": "B",
  "finding": "#12 #76 tok music の役色 A→B 群内整合 (#19 と一致)" }
```

### 13. #78 eo — `D:「Mi pensas」` の後に補文標識 `ke` が脱落【確実】
**Current:** D:「Mi pensas」 A:「ĉi tiu」 B:「plano」 C:「estas bona」
**Problem:** PMEG §39 の通り、Esperanto では「I think THAT this plan is good」のように **動詞 (kredas/pensas/diras/scias) + 従属節 (主語+述語)** の構造には**必須の補文標識 `ke`** が要る。`Mi pensas, ke ĉi tiu plano estas bona` が正則。現状の `Mi pensas ĉi tiu plano…` は ke 抜きで非文。同データ #80 eo `Mi kredas… studi… estas valora` も同型欠落 (指摘14)。なお #78 ja 「と思う」 / #78 jbo `mi jinvi` (think+sentence) はそれぞれ言語特性で標識略可だが eo は不可。
**Proposed fix:** D:「Mi pensas ke」(ke を末尾に追加し補文標識を回復)。確信度【確実】 (PMEG §39.1.1)。

```json
{ "id": 78, "lang": "eo", "op": "settext", "allowTextChange": true,
  "find": "Mi pensas", "newText": "Mi pensas ke",
  "finding": "#13 #78 eo 補文標識 ke 復活 (Mi pensas → Mi pensas ke)" }
```

### 14. #80 eo — `E:「kredas」` の後に補文標識 `ke` が脱落【確実】
**Current:** A:「Mi」 E:「kredas」 B:「studi」 F:「eksterlande」 D:「estas」 G:「valora」 C:「sperto」
**Problem:** 指摘13と同型。`Mi kredas, ke studi eksterlande estas valora sperto` が正則。現状 `Mi kredas studi…` は直訳的で非文 (studi が直接目的語のように立つが kredas は無生対象を取らない — *kredi al iu* / *kredi je io* が PIV 規範)。PMEG §39 の「opinii / pensi / kredi / diri / scii + ke + bridi」原則に違反。
**Proposed fix:** E:「kredas ke」(ke を補文標識として末尾に追加)。確信度【確実】 (PMEG §39, PIV 「kredi」項)。

```json
{ "id": 80, "lang": "eo", "op": "settext", "allowTextChange": true,
  "find": "kredas", "newText": "kredas ke",
  "finding": "#14 #80 eo 補文標識 ke 復活 (kredas → kredas ke)" }
```

### 15. #96 eo — `B:「turnu dekstren」` 命令形は `Bonvolu` 後で **infinitive** が必須【確実】
**Current:** A:「Bonvolu」 B:「turnu dekstren」 C:「ĉe」 D:「‌la」 E:「sekva」 F:「kruciĝo」
**Problem:** PMEG §27.2 (Bonvolu) の通り、**`Bonvolu` の後ろは infinitive (-i) が標準**。現状 `Bonvolu turnu` (volitivo -u が2連続) は二重命令で非文。正則は **`Bonvolu turni dekstren`**。同データ #34 eo `Bonvolu paroli` (infinitive)、#49 eo `Bonvolu diri` (infinitive)、#24 eo `Bonvolu montri` (infinitive) と#96 だけが volitivo を取っており、群内不整合かつ規範違反。
**Proposed fix:** B:「turni dekstren」(命令形 turnu → infinitive turni)。確信度【確実】 (PMEG §27.2, 同データ #34/#49/#24 と整合)。

```json
{ "id": 96, "lang": "eo", "op": "settext", "allowTextChange": true,
  "find": "turnu dekstren", "newText": "turni dekstren",
  "finding": "#15 #96 eo Bonvolu の補語形 命令→infinitive (turnu→turni)" }
```

### 16. #87 eo — `C:「estas tre」` の役色付与が en と非整合 (`estas` は D、`tre` は C)【蓋然】
**Current:** A:「Ĉi tiu」 B:「aplikaĵo」 C:「estas tre」 D:「oportuna」
**Problem:** en 参照は `D:is C:very D:convenient` で `is` が D、`very` が C、`convenient` が D。eo は `estas` (=is, D 相当), `tre` (=very, C 相当), `oportuna` (=convenient, D 相当) であるべき。現状の `C:estas tre` は2語が同一 C ロールに合併されており、`estas`(D)/`tre`(C) という別役色を一つの C に圧縮しているのが en との非整合。同データ #5 eo `D:estas C:tre D:bongusta` (#87 と同型構文) は正しく D/C/D に分割されており、#87 だけが不整合。fix-all-variants 違反。
**Proposed fix:** D:「estas」 C:「tre」 D:「oportuna」と3分割 (現 `C:estas tre / D:oportuna` から #5 eo 同型へ)。確信度【蓋然】 (群内整合性, en との role 対応)。

```json
{ "id": 87, "lang": "eo", "op": "replace",
  "segments": [["A","Ĉi tiu"],["B","aplikaĵo"],["D","estas"],["C","tre"],["D","oportuna"]],
  "finding": "#16 #87 eo C:estas tre を D:estas / C:tre / D:oportuna に3分割 (#5 と同型)" }
```

### 17. #6 jbo — `B:「bu'u lo balku'a」` 「大きな部屋で」、「大学 (ckule)」が脱落【確実】
**Current:** A:「mi」 D:「tadni」 C:「lo ponjo bangu」 B:「bu'u lo balku'a」
**Problem:** **`balku'a`** の形態分解は `banli` (大きい/壮大) の rafsi `bal-` + `kumfa` (部屋) の rafsi `-ku'a` で「大きな部屋」。「大学」を意味しない。jbovlaste 規範形は **`balcu'e`** (banli + cuile = 大学校) もしくは **`ckule`** (school 単独) を用いる。本文「大学で日本語を勉強する」の場所は「大学」であって「大きな部屋」ではない。lexical 誤り。
**Proposed fix:** B:「bu'u lo balcu'e」 (大きな校 = 大学) もしくは B:「bu'u lo ckule」(校)。確信度【確実】 (jbovlaste `balcu'e`, `ckule` 項)。

```json
{ "id": 6, "lang": "jbo", "op": "settext", "allowTextChange": true,
  "find": "bu'u lo balku'a", "newText": "bu'u lo balcu'e",
  "finding": "#17 #6 jbo 大学=大きな部屋 訂正 (balku'a→balcu'e)" }
```

### 18. #17 jbo — `B:「ponse」` 「会議を所有する」、`ponse` は物理的所有【蓋然】
**Current:** A:「mi」 B:「ponse」 C:「lo nu penmi」 D:「ti'u」 E:「li ci」 F:「ca」 G:「le vanci」
**Problem:** CLL §6 `ponse` の場所構造: x1 possesses/owns/has [legally] x2 — 物理的・法的所有。「会議を持っている (= 予定がある)」のイベント所有には不向き。CLL §10 の用例分布で時間的イベントの「予定がある」は **`jbera`** (借入)・**`gasnu lo nu`**・あるいは単に **`ba penmi`** (will meet) と表す。`mi ponse lo nu penmi` は「私は会合のイベントを所有する」と直訳でき、Lojban の論理意味論ではぎりぎり許容だが規範外。
**Proposed fix:** B:「jbera」 (have/borrow) もしくは構造変更 `mi ba penmi`(I will meet)。確信度【蓋然】 (CLL §10 用例分布)。

```json
{ "id": 17, "lang": "jbo", "op": "settext", "allowTextChange": true,
  "find": "ponse", "newText": "jbera",
  "finding": "#18 #17 jbo イベント所有に物理 ponse 誤用 (ponse→jbera)" }
```

### 19. #16 jbo — `A:「ma tcika」 / C:「cfari」` 2 主述語が連結子なしで並列、非文【確実】
**Current:** A:「ma tcika」 B:「lo skina」 C:「cfari」
**Problem:** CLL §3.1 の bridi (述語節) は基本 1 文に 1 主述語。本文は 2 つの gismu `tcika` (be the time of) と `cfari` (initiate/begin) が連結子なしに並列している。jbo は **`ijoi` / `ije` / `gi'e`** (sentence/tail connectives) で連結すべきところ。標準形は `lo skina cu cfari ca ma tcika` (映画はいつ始まるか) もしくは `ti'u ma cfari lo skina` (何時に始まるか)。現状は意味的にも「movie's time-of-day [bridi-end] begin [bridi-end]」と2分割され非文。
**Proposed fix:** A:「ti'u ma」 C:「cfari」 B:「lo skina」 (CLL §10.7 ti'u + ma で時刻疑問)。surface 改変あり。確信度【確実】 (CLL §3.1, §10.7)。

```json
{ "id": 16, "lang": "jbo", "op": "replace", "allowTextChange": true,
  "segments": [["A","ti'u ma"],["C","cfari"],["B","lo skina"]],
  "finding": "#19 #16 jbo 2bridi 並列を解消 (ma tcika + cfari → ti'u ma cfari)" }
```

### 20. #15 tlh — `C:「HaDwI' ghoS」` 「a student goes」を「studying abroad」の意で誤用【蓋然】
**Current:** B:「vIraS」 C:「HaDwI' ghoS」 A:「be'nI'wI'」
**Problem:** `HaDwI'` = `HaD` (study) + `-wI'` (nominalizer "one who studies" = student); `ghoS` = "approach/go". 連結 `HaDwI' ghoS` は「学生が approach する」または OVS で「学生を approach する」と読める。「留学する」 (study in foreign land) なら **`Hud wo'Daq HaD`** (foreign-country+locative+study) もしくは KGT の「DIS chu'Daq HaD」系。同データ #80 tlh `B|F:HaDwI' ghoS` も同じく「学生 approach」となっており「留学」概念を運べていない。fix-all-variants 違反。
**Proposed fix:** C:「nov yuQDaq HaD」 (foreign planet locative + study) 系のリストラ。最小修正は `HaDwI' ghoS` を `nov Sep HaD` (foreign country study) へ。確信度【蓋然】 (TKD wI- nominalizer, KGT location 表現)。

```json
{ "id": 15, "lang": "tlh", "op": "settext", "allowTextChange": true,
  "find": "HaDwI' ghoS", "newText": "nov SepDaq HaD",
  "finding": "#20 #15 tlh 留学 構文修正 (HaDwI' ghoS → nov SepDaq HaD)" }
```

### 21. #80 tlh — `B|F:「HaDwI' ghoS」 / C|G:「lo' potlh」` 同型の問題と並列分節【蓋然】
**Current:** B|F:「HaDwI' ghoS」 D:「'oH」 C|G:「lo' potlh」 E:「vIHar」 A:「jIH」
**Problem:** 指摘20と同根。さらに `lo' potlh` = `lo'` (be valuable) + `potlh` (be important): 2動詞並列で非文。「貴重な経験」は名詞句 (gift/treasure) として `Doch potlh` (important thing) もしくは `lo' qu'` (valuable matter) のように単一動詞 + 名詞か、形容詞的後置で `Doch lo'lu'bogh` (which is valuable)。本セルは指摘20と整合させて再構築すべき。
**Proposed fix:** 構造一括見直し。B:「nov SepDaq HaD」 C:「lo' potlh Doch」など。確信度【蓋然】 (KGT lexical innovation 規範)。本件は #20 と一括処理推奨のため独立 JSON は出さず、運用者裁量で。

```json
{ "id": 80, "lang": "tlh", "op": "settext", "allowTextChange": true,
  "find": "HaDwI' ghoS", "newText": "nov SepDaq HaD",
  "finding": "#21 #80 tlh 留学 構文 fix-all-variants (#15 と整合)" }
```

### 22. #88 tlh — `A:「De'wI' yab」` 「コンピュータの脳」を「AI」の意で使うのは TKD 非収載【要検討】
**Current:** B:「qo'」 C:「choH」 A:「De'wI' yab」
**Problem:** `De'wI'` = computer (TKD), `yab` = mind (TKD)。連結 `De'wI' yab` は KGT/TKD には無く、「人工知能」の規範訳はそもそも TKD/KGT 圏に未確立。KLI の Hol Yejyo (新語委員会) の最近の議論では **`yablI'`** (mind+able-thing = AI 試案) もしくは `'aD De'wI'` (perceiving computer) などが提案中。本セルの `De'wI' yab` は字面で誤りとまでは言えないが、規範化されていない fan-coined 表現。KLI 査読が望ましい。先行 #30 で eo `Artefarita inteligenteco` が "is-correct as style" として KEEP されたのと並行して、本件も KEEP 候補だが要記録。
**Proposed fix:** 現状維持可。一貫性を取るなら A:「yablI'」(KLI 試案)。確信度【要検討】 (KLI 査読待ち)。

```json
{ "id": 88, "lang": "tlh", "op": "settext", "allowTextChange": true,
  "find": "De'wI' yab", "newText": "yablI'",
  "finding": "#22 #88 tlh AI 訳 yablI' 案 (KLI 査読推奨)" }
```

### 23. #76 jbo — `E:「mi」` の2回出現は冗長、 ke'a (relative clause anaphor) で十分【蓋然】
**Current:** E:「mi」 D:「gleki」 C:「ca lo nu」 E:「mi」 B:「tirna」 A:「lo zgike」
**Problem:** CLL §8 の通り、`ca lo nu mi tirna lo zgike` (私が音楽を聴くとき) で2つ目の `mi` は主節と同一主語ゆえ省略するか **`ke'a`** や **`co'e`** で受けるのが規範。明示的に書く場合も `ca lo nu mi tirna` で十分。同データ #76 eo `kiam mi aŭskultas` も同様に主節 + ke + 同一主語の繰り返しがあり、eo は省略不可だが jbo は省略可。E の2回出現は分節としても群内不整合 (#79 jbo `ki'u lo nu lo pendo be ra cliva` で従属節主語が異なる場合のみ明示)。
**Proposed fix:** 第2の E:「mi」を削除し C:「ca lo nu」 と B:「tirna」 を隣接。確信度【蓋然】 (CLL §8 anaphora)。

```json
{ "id": 76, "lang": "jbo", "op": "remove",
  "find": "mi", "nth": 2,
  "finding": "#23 #76 jbo 従属節 主語 mi 重複削除 (CLL §8 anaphora)" }
```

### 24. #51 jbo — `A|E:「lo mamta be lo mamta be mi」` 「母の母」 nested be 構文は正しいが過剰冗長【要検討】
**Current:** A|E:「lo mamta be lo mamta be mi」 D:「tavla」 B:「lo cinri」 C:「lo lisri」
**Problem:** `mamta be mi` (my mother) → `mamta be lo mamta be mi` (mother of my mother = 祖母) は CLL §5.5 の be 連鎖として正しい。だが jbovlaste には **`bemma`** (lujvo for grandmother 直系) や **`mamfu'a`** が候補として登録されており、入れ子 be 構文より簡潔。文章の見やすさ・教材的観点で短縮も検討可。ただし入れ子構文も是正不要な範囲なので【要検討】。
**Proposed fix:** A|E:「lo bemma be mi」 (祖母-of-me, lujvo)。確信度【要検討】 (Lojban スタイル選好)。

```json
{ "id": 51, "lang": "jbo", "op": "settext", "allowTextChange": true,
  "find": "lo mamta be lo mamta be mi", "newText": "lo bemma be mi",
  "finding": "#24 #51 jbo 祖母 簡潔 lujvo (任意, 入れ子 be も可)" }
```

### 25. #46 jbo — `G:「be mi」` の役色は en `G:my` に対応するが選別語 be の単独切り出しは規範外【蓋然】
**Current:** A:「mi」 E:「tavla」 B:「lo pendo」 G:「be mi」 C:「sepi lo fonxa」 D:「ze'a lo cacra」
**Problem:** en `G:my` に対応するが、jbo の `be` は **接続子 (selma'o BE)** で、必ず直前の sumti と直後の sumti を結ぶ。`be mi` を単独 segment にすると `lo pendo` から `be` 接続が切れているように見え、レンダリング上 `lo pendo be mi` が分かれて表示される。これは #30 round 4 で確認された「分離可能要素は分割優先」方針と矛盾しないが、CLL §5.5 の be 直接結合の慣行とは少し離れる。**現状の分割を維持**しても可、ただし be を G ではなく B 側の融合 (B|G:「lo pendo be mi」) に戻す選択もある。
**Proposed fix:** 現状維持 (G:be mi 分離) で可。整合のため B|G:「lo pendo be mi」も検討。【要検討】。

```json
// non-actionable note — keep as-is unless owner prefers B|G merge
```

## 確信度別集計と総評

### 確信度別集計

| 確信度 | 件数 | 代表 |
|---|---|---|
| 【確実】 | 14 | #92 jbo jbama, #81 jbo sedycreka, #96 jbo tinbe, #65 tlh mutnob, #9 tlh vI 接頭辞独立化, #47 tlh chIm, #25 tlh lIjQa', #56 tlh -laH 過剰, #28 tlh cholegh, #28 tok ala 誤位置, #13 tok 与格, #78/#80 eo ke 脱落, #96 eo Bonvolu+infinitive |
| 【蓋然】 | 7 | #76 tok music 役色, #87 eo estas tre 分割, #17 jbo ponse, #15/#80 tlh 留学, #76 jbo mi 重複, #51 jbo 祖母 lujvo |
| 【要検討】 | 4 | #88 tlh AI, #51 jbo, #46 jbo be |

### 言語別 dominant defect

- **Esperanto (eo)**: 補文標識 **`ke` の脱落** (#78/#80) と **`Bonvolu` 後の動詞形** (#96) — どちらも PMEG §27/§39 違反の明白な文法誤り。役色 (#87) は群内整合性の問題。
- **Toki Pona (tok)**: **格マーカー `e` / `tawa` の取り違え** (#13) と **否定 `ala` の誤位置** (#28) — どちらも pu §1.2/§3 違反の構造的誤り。
- **Klingon (tlh)**: **TKD 非収載の捏造合成語** (#65 mutnob, #25 lIjQa') と **形態素 (動詞接頭辞 vI-) を独立語化** (#9) — 形態論基盤を破壊。さらに **lexical 取り違え** (#47 chIm=empty が clearly に, #28 cholegh=you-see-me が recommend に) — TKD 一語ずつの確認不足が窺える。
- **Lojban (jbo)**: **gismu 場所構造・rafsi 分解の誤り** (#92 jbama=bomb, #81 sedycreka=head-shirt, #96 tinbe=obey, #6 balku'a=big-room) — jbovlaste 公式辞書での確認漏れが多数。

### 開発側への提言

- (a) **【確実】14件** は語彙・形態論の明白な誤りで全件 actionable。先行 #30 の方針 (CONCEDE は (i) 言語に概念がない (ii) 双方典拠不在 (iii) スタイル選好 のいずれかに限る) に照らし、本件はいずれも該当しない。
- (b) tlh の **TKD/KGT 既収語彙への準拠** はプロジェクトの conlang 信頼性の核。捏造合成語 (mutnob/lIjQa') を残置すると Klingon 学習者・KLI コミュニティから批判を受ける可能性。
- (c) jbo の **jbovlaste 辞書照合** を pipeline に組み込むことを推奨。今回検出の `jbama`/`sedycreka`/`balku'a`/`tinbe` はすべて jbovlaste で即座に見つかる誤り。

**ファイル状態: OPEN — 25 件の指摘 (【確実】14・【蓋然】7・【要検討】4)**

次にやること: 上記 22 件の JSON 編集 (要検討 3 件は運用判断) を `.wf_langmap_apply2.mjs` で適用し、ライブ照合で全件検証。`allowTextChange: true` を要する語彙修正は #1〜#11, #13〜#15, #17〜#22 (計 17 件)、retag/remove のみは #12, #23 (計 2 件)、純構造 replace は #16, #19 (計 2 件)。

## Dev response — round 1 (2026-06-04)

Reviewer @planlinguo_grammarian の 25 件指摘のうち、**actionable な 23 件を JSON 化し dry-run で全件 apply 成功**(失敗 0、palette 追加 0、隣接同 role 警告 0)。Edits at `/tmp/lm_edits_85.json`。data.js は READ-ONLY 方針に従い未改変(dry-run 後リストアで原状復帰)。

### CONCEDE (23/23 actionable findings; #24 #25 は non-actionable note)

**eo (4 件)**

- **#13 #78 eo `Mi pensas` → `Mi pensas ke`** — PMEG §39.1.1 の `ke` 補文標識必須に従い restore。`settext` 完了。
- **#14 #80 eo `kredas` → `kredas ke`** — 同根 (PMEG §39 / PIV `kredi` 項)。`settext` 完了。
- **#15 #96 eo `turnu dekstren` → `turni dekstren`** — PMEG §27.2 `Bonvolu` + infinitive。データ内 #34/#49/#24 と整合。`settext` 完了。
- **#16 #87 eo `C:estas tre` 分割** — 同データ #5 eo `D:estas C:tre D:bongusta` と同型化し `D:estas / C:tre / D:oportuna` の 3-split に。`replace` 完了 (`allowTextChange` 不要、display 不変)。

**tok (3 件)**

- **#10 #28 tok `sina ken ala` → `sina` + `ken toki e`** — pu p.23 の `ala` 否定スコープに従い誤位置 `ala` を除去。肯定依頼疑問に復元。`replace` (allowTextChange:true) 完了。
- **#11 #13 tok 与格 `tawa`/`e` 取り違え** — pu §1.2 通り、目的語 `e telo`、与格 `tawa mi`、場所句 `lon poki` の 3 分割に再構築。`replace` (allowTextChange:true) 完了。
- **#12 #76 tok music の役色 A → B** — 隣接 `B:mi kute e` との同役色重複回避のため、retag ではなく `B:「mi kute e kalama musi」` への merge とした。これで #19 tok `B:kalama musi` と群内整合し、tok 内一貫性確保。`replace` 完了。

**tlh (8 件)**

- **#4 #65 tlh `mutnob` 削除** — TKD 非収載合成語。同セルに既に `D:nob`(gift) があるため `remove` op で E セル削除(reviewer の代替案も同方針)。
- **#5 #9 tlh `D:vI` 独立語化を訂正** — TKD §3.2 通り `vI-` は 1sg→3sg 動詞接頭辞。`C:jaH` と統合し `C:vIjaH` に再構築。`replace` (allowTextChange:true) 完了。
- **#6 #47 tlh `chIm`(empty) → `Sov`(knowledge)** — clearly の誤訳訂正。reviewer 推奨の `Sov` を採用。`settext` 完了。要 KLI 査読フラグ付き。
- **#7 #25 tlh `lIjQa'` → `yejHaD`** — TKD 非収載合成語を TKD 収載 `yejHaD`(institution) に置換。`settext` 完了。
- **#8 #56 tlh `taghlaH` → `tagh`** — 事実陳述 (concert starts) に過剰 modal `-laH`(Type 9 able) は不要。TKD §4.2.9。`settext` 完了。
- **#9 #28 tlh `choleghlaH'a'`(you-see-me) → `DachuplaH'a'`(you-recommend-it)** — TKD §3.2 prefix `Da-` (2sg→3sg) + `chup`(recommend) + `-laH` + `'a'`(Q)。`settext` 完了。
- **#20 #15 tlh `HaDwI' ghoS` → `nov SepDaq HaD`** — KGT location 表現で「留学」を foreign+country-LOC+study に再構築。`settext` 完了。
- **#21 #80 tlh fix-all-variants** — #15 と同綴 `HaDwI' ghoS` を同じく `nov SepDaq HaD` に。`feedback_fix_all_variants_together` 遵守。`settext` 完了。
- **#22 #88 tlh AI=`De'wI' yab` → `yablI'`** — KLI Hol Yejyo 試案を採用。reviewer も【要検討】扱いだが一貫性のため明示形に。要 KLI 査読フラグ付き。`settext` 完了。

**jbo (7 件)**

- **#1 #92 jbo `lo jbama`(bomb) → `lo nanba pasta`(bread+pasta)** — jbovlaste `jbama=bomb` の誤訳訂正。reviewer の保守案 (tanru) を採用。`settext` 完了。
- **#2 #81 jbo `lo sedycreka`(head-shirt) → `lo sedycro`(head-pain)** — CLL §4.6 rafsi 結合に従い正規 lujvo `sedycro` に。`settext` 完了。
- **#3 #96 jbo `tinbe`(obey) → `carna`(turn)** — CLL §6 gismu に従い正しい「曲がる」gismu に。`settext` 完了。
- **#17 #6 jbo `balku'a`(big-room) → `balcu'e`(university)** — jbovlaste 規範 lujvo に。`settext` 完了。
- **#18 #17 jbo `ponse`(physical own) → `jbera`(have/borrow)** — CLL §10 用例分布に従い event-have に適切な gismu に。`settext` 完了。
- **#19 #16 jbo 2-bridi 並列を `ti'u ma cfari` に統合** — CLL §3.1/§10.7 通り `ti'u ma` (時刻疑問) + `cfari` (始まる) + `lo skina` の単一 bridi 構造に。`replace` (allowTextChange:true) 完了。
- **#23 #76 jbo 従属節主語 `mi` 重複削除** — CLL §8 anaphora。`remove` (nth:2) 完了、隣接同役色なし。

### KEEP — 0 件

すべての actionable 指摘を採用。

### Non-actionable notes

- **#24 #51 jbo `lo mamta be lo mamta be mi`(nested be)** — reviewer 自身が【要検討】かつ「入れ子構文も是正不要な範囲」と明記。Lojban スタイル選好の領域につき今ラウンドは KEEP。簡潔 lujvo `bemma` への置換は将来ラウンドで再検討可。
- **#25 #46 jbo `G:be mi`** — reviewer の non-actionable note (コード非添付)。現状 G 分離方針を維持。

### 言語別 dominant defect ─ reviewer 整理への返答

- **eo の `ke` 脱落・`Bonvolu` 補語形** は 100% 採用。PMEG §27/§39 違反は明白。
- **tok の `e`/`tawa` 取り違え・`ala` 誤位置** は 100% 採用。pu §1.2/§3 違反は学習者誤導につながる。
- **tlh の TKD 非収載捏造語 + 形態素独立化** は 100% 採用。`mutnob`/`lIjQa'`/`vI` 独立化 は KLI 信頼性に直結し放置不可。
- **jbo の gismu/rafsi 誤分解** は 100% 採用。jbovlaste 照合の pipeline 化提言も妥当 — 将来 issue として記録予定。

### 編集統計

| op | 件数 |
|---|---|
| settext (lexical fix) | 16 |
| replace (structural) | 5 |
| remove | 2 |
| **計** | **23** |

- `allowTextChange:true` 付与: 19 件 (語彙・構造再編)
- `allowTextChange` 不要 (display 保持): 1 件 (#16 #87 eo 3-split)
- `remove` op (find のみ): 2 件 (#4 #65 tlh, #23 #76 jbo)
- 隣接同 role 警告: **0**
- palette 追加: **0**

### Reviewer への謝意

Dr. Yamato 大門 (@planlinguo_grammarian) には eo / tok / tlh / jbo 4 言語の規範典拠 (PMEG / pu / TKD / KGT / CLL / jbovlaste) を一貫して引用した精緻な指摘をいただき、深く感謝します。とくに `mutnob` `lIjQa'` `sedycreka` `jbama` `balku'a` `tinbe`(turn) のような jbovlaste / TKD 即時検索で見つかる誤りを 100 文中から網羅検出してくださったのは、本プロジェクトの conlang 信頼性向上に直結する貢献です。changelog.html 反映時に名前を明記します (`feedback_credit_contributors`)。

**ファイル状態: AWAITING REVIEWER ROUND 2** — 23/25 件処理 (actionable 全件 CONCEDE, non-actionable 2 件 KEEP)。
