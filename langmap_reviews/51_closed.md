# LangMap データレビュー #51 — コピュラ (繋辞) 横断レビュー (Copula Cross-cut Review)

## レビュアー自己紹介 (ペルソナ)

Halldór Rúnarsson-Ng (handle: **@copula_halldor**)。アイスランド大学言語類型論博士、論文 "Zero Copula and Identificational Predication in Mainland Southeast Asian Languages" (主査: J. Watters)。常用文献は Pustet *Copulas: Universals in the Categorization of the Lexicon* (OUP 2003)、Stassen *Intransitive Predication* (OUP 1997, とくに ch. 3–4 copula vs zero)、RAE *Nueva gramática de la lengua española* §37 (ser/estar)、Bosque & Demonte 編 *Gramática descriptiva de la lengua española* vol. 2, ch. 37、Carlson "A Unified Analysis of the English Bare Plural" (1977, individual-level vs stage-level predicates の起源)、Eberhard et al *Ethnologue* 24th edition for ser-estar typology、Kachru *Hindi* (Benjamins 2006) §5.3 (होना vs रहना)、Sohn *The Korean Language* (CUP 1999) §6.3 (이다/아니다)、寺村秀夫 *日本語のシンタクスと意味 II* (くろしお出版 1984, 第7章 「だ」の機能)、Göksel & Kerslake *Turkish: A Comprehensive Grammar* (Routledge 2005) §8.2 (-DIr)、Comrie & Corbett 編 *The Slavonic Languages* (Routledge 1993) ch. 11 (zero copula in Russian)。

本レビューは **コピュラ (繋辞) ─ 名詞句述語 (X is Y)、形容詞述語 (X is ADJ)、所在述語 (X is at Z)、存在述語 (there is X) ─ における、(a) コピュラの有無、(b) コピュラの形式選択 (ser vs estar 等)、(c) コピュラの分節独立 vs 述部融合、(d) 兄弟方言間でのコピュラ選択整合性** のみを精査する。語彙選択、敬語、再帰、複数、TAM は射程外とし、純粋に「コピュラがどう扱われているか」だけを判定する。

## 検証範囲

- **英語参照に顕在コピュラを持つ文** (33 文): #2, #4, #5, #7, #12, #15, #18, #20, #23, #26, #27, #31, #33, #36, #38, #40, #43, #53, #63, #66, #74, #75, #77, #78, #79, #80, #87, #88, #91, #93, #97, #99
  - **同定 (identificational)**: #2 (name is X), #31 (exam is Monday), #91 (hanami is a tradition)
  - **形容詞述語 (predicative)**: #5, #12, #18, #33, #38, #43, #66, #78, #79, #87
  - **所在 (locational)**: #4, #23, #40, #97
  - **存在 (existential)**: #36 (there are people)
  - **未来コピュラ**: #7 (will be sunny)
  - **進行助動詞 be**: #15, #26, #53, #63, #74, #75, #88, #93
  - **準コピュラ・経験者**: #77 (was surprised), #79 (is sad), #80 (is a valuable experience)
- **対象言語層**: 必須コピュラ系 (en/de/fr/it/es×6/pt×2/ca/gl/oc/ro/nap/scn/vec, sv/no/da/is/nl, ru/uk/pl/cs, el, fa)、ゼロコピュラ系 (zh/yue/wuu/ar 現在/he 現在/hi 現在/ja 一部/ko 一部)、接尾コピュラ系 (tr -DIr)、語彙分裂系 (es/pt ser-vs-estar、ru есть/находится)、その他 (vi `là`, id `adalah`, hu `van/lesz/zero`, sw `ni`)。
- ライブデータは `node -e` で全 100 文抽出済 (`/tmp/copula_dump*.txt`)。

## 方針 — 何を「指摘」とし、何を「許容」とするか

1. **ser vs estar の選択誤りは最優先**。RAE §37.5: ser は本質的属性 (identificational, individual-level)、estar は一時的状態・所在 (stage-level)。価格 (#18 expensive) → ser、所在 (#23 next to hospital) → estar、味覚評価 (#5 delicious) → 両用許容だが地域差、感情状態 (#79 sad) → estar、所属性 (#43 food is delicious) → ser/estar 両用。**兄弟方言 (es_eu / es_mx / es_ar / es_co / es_cl) は同一文で同一の選択をすべき** — 散らばっていれば必ず誤りが含まれる。
2. **同一コピュラ形式の OWN/FUSED が文間で分裂**しているケース。例: en `is` が #4 で `[D:is]` 独立、#43 で `[C:is delicious]` 融合 — 学習者から見て「コピュラはいつ分節され、いつ述語形容詞と融合するのか」のルールが見えない。
3. **同一言語内で同じ意味機能 (equational/predicative copula) に異なる letter が割当てられる**ケース。例: ru #2 `[C:—]` (em-dash), ru #7 `[C:будет]`, ru #91 `[D:является]` — すべて同定述語コピュラの present/future なのに letter が C/D に分裂。
4. **ゼロコピュラ言語 (zh/hi/ar/he) で、ゼロが守られるべき文に overt copula が現れる**、または逆。例: zh #91 `[D:是]` (equational では正しく overt) vs zh #5/#12/#18/#43/#87 (descriptive、`是` なしで `很` + 形容詞、正しい) — OK ですが、zh #31 `[C:是]` の出現は時間述語であり、descriptive 文と一貫しているか吟味要。
5. **tr `-DIr` 接尾辞の OWN/FUSED 分裂**。tr #2 `[C:dır]`、tr #4 `[D:dir]`、tr #23 `[D:dır]`、tr #33 `[B:‌di]` (過去) は **ZWNJ で独立分節**、しかし tr #12 `güzeldir`、#43 `lezzetlidir`、#87 `kullanışlıdır`、#91 `geleneğidir`、#97 では fused — 同一形態素の処理が文ごとに分裂。
6. **進行 be (#15, #26 等) の助動詞コピュラ**: en `[D:is studying]`/`[D:are]` を letter D で独立 vs es_eu/pt_br `[D:están] [C:jugando]` (estar 助動詞 + 動名詞、letter D 独立) は整合的だが、de #15/#26 では助動詞コピュラを持たないため `[D:gerade]` (副詞「今」) を letter D に当てるという **代替戦略** が取られている — これは learner にとって letter D が「コピュラ」なのか「副詞」なのか混乱の元。
7. **存在述語 (#36 there are)**: en `[D:There are]` 一塊 vs ru `[C:На станции] [A:много] [B:людей]` (コピュラ完全欠如、letter D が存在しない) — 「ゼロコピュラ言語では letter D を欠落」とするか「ダミー letter を入れる」とするか方針未確定。
8. **ja です/だ、ko 이다/입니다 の OWN/FUSED 分裂**。ja #2 `[C:です]` 独立、#5 `[D:おいしいです]` 形容詞 + です 融合、#43 `[C:おいしい]` (普通体、です欠落)、#87 `[D:便利だ]` 融合。ko #2 `[C:입니다]` 独立、#91 `[C:전통이다]` 融合、#43 `[C:맛있다]` (形容詞だけ、이다 なし)。
9. **vi `là` の letter**: #2 `[C:là]`、#31 `[C:là]`、#91 `[D:là]` — 同じコピュラ語が letter C と D に分裂。

確信度は **【確実】**= 同一データ内で規約違反が明白、**【蓋然】**= 言語固有事情で迷い余地あり、**【要検討】**= 方針自体を closed-review で再確認すべきもの。

---

## 指摘事項 (Issues found)

### 1. es_mx `está` (estar) が #18 「This bag is too expensive」で誤用 — 価格は本質属性で ser 必須 【確実】

**Current:**
- #18 es_eu `[D:es] [C:demasiado] [D:cara]`
- #18 es_mx `[D:está] [C:muy] [D:cara]`
- #18 es_ar (該当データなし、確認要) / es_co / es_cl (該当データなし)
- #18 pt_eu `[D:é] [C:demasiado] [D:cara]`、pt_br `[D:é] [C:cara] [D:demais]`
- #18 ca `[D:és]`、gl `[D:é]` (一致して ser)

**Problem:** RAE *Nueva gramática* §37.5.2 および Bosque & Demonte vol. 2, ch. 37 は **価格 (`costar`, `valer`, `ser caro/barato`) は本質属性で ser 必須** と明示。`está cara` は「(今は普段と違って一時的に) 高い」というニュアンスでなら可能だが、本文 #18「This bag is too expensive」は **絶対的価格評価** (商品自体の値段が高すぎる) で、**全 Romance 圏で ser が標準**。es_mx だけ `está` を採用しているのは、メキシコ口語の「気分 estar」的拡張 (Lipski 1994, *Latin American Spanish* §6.4.2) を反映している可能性はあるが、**標準教材としては誤り**。さらに es_mx は形容詞 `cara` の修飾を `muy` に変えており (es_eu は `demasiado`)、原文 `too expensive` のニュアンス (= 過剰) も損なわれている。兄弟言語間で **「es_mx だけ estar」** という分布は **memory `feedback_cross_sibling_role_consistency.md`** の "duplicate-letter outlier" パターンと完全に一致。

**Proposed:**
- #18 es_mx: `[D:está] [C:muy] [D:cara]` → `[D:es] [C:demasiado] [D:cara]` (es_eu と一致)
- 構造化 edit:
  ```
  {id:18, lang:"es_mx", op:"replace_segments",
   from:[["D","está"],["C","muy"],["D","cara"]],
   to:  [["D","es"],["C","demasiado"],["D","cara"]]}
  ```

---

### 2. es_mx `está padrísimo` が #38 「The sunset from here is beautiful」で唯一 estar — 兄弟 5 方言中 1 つだけの外れ値 【確実】

**Current:**
- #38 es_eu `[C:es hermoso]`
- #38 es_mx `[C:está padrísimo]`
- #38 es_ar `[C:es hermosa]`
- #38 es_co `[C:es hermoso]`
- #38 es_cl `[C:es precioso]`

**Problem:** 「夕日が美しい」は **eternal aesthetic predicate** (夕日というカテゴリーの本質的属性) で全 Romance 圏で ser が標準 (Bosque & Demonte ch. 37, §3.2)。es_mx の `está padrísimo` (= 「めちゃくちゃイケてる」スラング) は **stage-level evaluation** で文法的には可能だが、参照文 (en `is beautiful`, fr `est magnifique`, it `è bellissimo`, pt `é lindo`) はすべて ser/be に対応する個体レベル形式。さらに es_mx は形容詞も `padrísimo` (極めて口語) に変更しており、**「sibling 中 1 言語だけが ser→estar かつ形容詞も語彙レベルで離脱」**という二重の外れ値。memory `feedback_cross_sibling_role_consistency.md` の中核違反。

**Proposed:**
- #38 es_mx: `[C:está padrísimo]` → `[C:es padrísimo]` (estar→ser、形容詞は方言色を残す)
- または全置換: `[C:es hermoso]` (es_eu と一致)
- 構造化 edit:
  ```
  {id:38, lang:"es_mx", op:"replace_segment",
   letter:"C", from:"está padrísimo", to:"es padrísimo"}
  ```

---

### 3. es #43「The food at this restaurant is delicious」で 5 方言が ser/estar に三分裂 【確実】

**Current:**
- #43 es_eu `[C:es deliciosa]`
- #43 es_mx `[C:está riquísima]`
- #43 es_ar `[C:es riquísima]`
- #43 es_co `[C:es muy rica]`
- #43 es_cl `[C:está buena]`

**Problem:** 食事評価は **ser/estar 双方が古典的に許容**される境界事例で、RAE §37.5.7 は「客観的料理評価 (= レストラン一般の料理) は ser、目の前で食べている料理の現在の状態 = estar」と区別。本文「The food at this restaurant」は **店の特性としての料理** で ser が標準 (Hualde 2010, *Sounds of Spanish*, §1.4 の例も ser)。データ上 es_mx と es_cl が `está` を採り、es_eu/es_ar/es_co が `es` を採る分布は、**同一文に対するメキシコ・チリの口語化バイアス**で説明できるが、教材としては **どちらかに統一**しないと学習者が「同じ意味で ser/estar どちらでも良い」と誤学習する。memory `feedback_cross_sibling_role_consistency.md` の「sibling 内バラバラ」典型例。

**Proposed:** 全 es 系を ser に統一 (pt_eu/pt_br/ca/gl/oc 全部が ser/é/és なので Romance 全体整合):
- #43 es_mx `[C:está riquísima]` → `[C:es riquísima]` (動詞だけ変更、形容詞は方言色維持)
- #43 es_cl `[C:está buena]` → `[C:es buena]`
- 構造化 edit:
  ```
  {id:43, lang:"es_mx", op:"replace_segment", letter:"C",
   from:"está riquísima", to:"es riquísima"}
  {id:43, lang:"es_cl", op:"replace_segment", letter:"C",
   from:"está buena", to:"es buena"}
  ```

---

### 4. es #78「I think this plan is good」で 5 方言が ser/estar に二分裂 【確実】

**Current:**
- #78 es_eu `[C:es bueno]`
- #78 es_mx `[C:está bien]`
- #78 es_ar `[C:está bueno]`
- #78 es_co `[C:es bueno]`
- #78 es_cl `[C:está bien]`

**Problem:** 「この計画は良い」は **plan の本質的属性評価** で ser が標準 (RAE §37.5.2)。`estar bien` は「(現状) うまくいっている、機能している」というニュアンスで stage-level、参照文 en `is good`, fr `est bon`, it `sia buono`, pt `é bom` はすべて ser/be 個体レベル形式。es_mx/es_cl の `está bien` および es_ar の `está bueno` は **「I'm OK with the plan」的な許容表現**にスライドしており、ニュアンスが原文と乖離。さらに **形容詞も `bueno → bien` という形変化**まで起きており (`bien` は副詞、`bueno` は形容詞)、estar 採用方言は構文ごと変えている。これは ser/estar 選択誤り + 品詞変化 の **二重ドリフト**。

**Proposed:**
- #78 es_mx `[C:está bien]` → `[C:es bueno]`
- #78 es_ar `[C:está bueno]` → `[C:es bueno]`
- #78 es_cl `[C:está bien]` → `[C:es bueno]`
- 構造化 edit:
  ```
  {id:78, lang:"es_mx", op:"replace_segment", letter:"C", from:"está bien", to:"es bueno"}
  {id:78, lang:"es_ar", op:"replace_segment", letter:"C", from:"está bueno", to:"es bueno"}
  {id:78, lang:"es_cl", op:"replace_segment", letter:"C", from:"está bien", to:"es bueno"}
  ```

---

### 5. es #87「This app is very convenient」で es_mx が estar + 形容詞置換 — 兄弟 4 方言中 1 つだけ 【確実】

**Current:**
- #87 es_eu `[C:es muy] [D:conveniente]`
- #87 es_mx `[C:está muy] [D:buena]`
- #87 es_ar `[C:es muy] [D:práctica]`
- #87 es_co `[C:es muy] [D:práctica]`
- #87 es_cl `[C:es muy] [D:práctica]`

**Problem:** 「このアプリは便利だ」は app の **個体属性** で ser 必須。さらに es_mx は形容詞も `conveniente/práctica` から `buena` に置換しており、ニュアンスが完全に変質。`está buena` は人間に対しては「魅力的」の意味になる俗語で、アプリには通常使わない (Lipski 1994 §5.3)。memory `feedback_cross_sibling_role_consistency.md` の duplicate-letter outlier に該当。

**Proposed:**
- #87 es_mx `[C:está muy] [D:buena]` → `[C:es muy] [D:práctica]` (es_ar/es_co/es_cl と統一)
- 構造化 edit:
  ```
  {id:87, lang:"es_mx", op:"replace_segments",
   from:[["C","está muy"],["D","buena"]],
   to:  [["C","es muy"],["D","práctica"]]}
  ```

---

### 6. en コピュラ `is/are/was/will be` の OWN/FUSED が文間で 4 パターンに分裂 【確実】

**Current — pattern A: コピュラ独立 letter D (形容詞は別 letter):**
- #2 `[A:My] [B:name] [C:is] [D:Tanaka]` (C 独立、述語は D)
- #4 `[C:Where] [D:is] [A:the nearest] [B:station]`
- #18 `[A:This] [B:bag] [D:is] [C:too] [D:expensive]` (D は二か所、間に C 副詞)
- #5 `[A:This] [B:coffee] [D:is] [C:very] [D:delicious]` (同上)
- #99 `[C:How much] [D:is] [A:this] [B:souvenir]`

**Current — pattern B: コピュラと形容詞・名詞句が同一 letter で融合:**
- #43 `[B:The food] [A:at] [D:this] [E:restaurant] [C:is delicious]` (C 一塊)
- #38 `[B:The sunset] [A:from] [D:here] [C:is beautiful]` (C 一塊)
- #66 `[A:The mountain] [C:is covered] [B:with snow]` (受動 + 形容詞、C 一塊)
- #78 `[D:I think] [A:this] [B:plan] [C:is good]` (C 一塊)
- #79 `[A:She] [B:is sad] [C:because] ...` (B 一塊)
- #87 `[A:This] [B:app] [C:is very] [D:convenient]` (C は `is very` 副詞まで含む)
- #91 `[A:Cherry blossom viewing] [D:is] [B:a Japanese] [C:tradition]` (D 独立)
- #97 `[A:The supermarket] [D:is] [B:behind] [C:the station]` (D 独立)

**Current — pattern C: コピュラと進行動詞句が同一 letter で融合:**
- #15 `[A:My younger sister] [D:is] [C:studying abroad] [B:in France]` (D 独立、be は分離)
- #26 `[A:The children] [D:are] [C:playing] [B:‌in] [E:the park]` (D 独立)
- #63 `[B:The birds] [C:are singing] [A:in the trees]` (C 融合)
- #75 `[A:The children] [C:are learning] [B:to swim]` (C 融合)
- #88 `[A:AI] [C:is changing] [B:the world]` (C 融合)
- #93 `[A:In] [B:this] [C:country] [D:in summer] [E:many] [F:festivals] [G:are held]` (G 一塊)

**Current — pattern D: コピュラと完了助動詞 has been + V-ing 三層融合:**
- #20 `[C:It has been] [B:raining] [A:since this morning]` (C 三語融合)
- #27 `[A:I] [C:have been] [B:to Tokyo] [D:three times]` (C 二語融合)
- #74 `[A:I've] [C:been waiting] [B:for 30 minutes]` (A に縮約 've 内蔵、C に been waiting 融合)

**Problem:** en データ内に同一 `is/are` が以下 4 パターンで処理されている:
- (A) 独立 letter (#2 C, #4 D, #18 D, #91 D, #97 D) — 名詞句述語と所在述語で多い
- (B) 形容詞と融合 (#43 C, #38 C, #66 C, #78 C, #79 B, #87 C) — 形容詞述語で多い
- (C) 進行 V-ing と融合 (#63 C, #75 C, #88 C, #93 G) — 進行形で多い
- (D) 完了助動詞と融合 (#20 C, #27 C, #74 C) — 完了形

これは **意味的役割 (identificational vs predicative vs progressive vs perfect) によって letter 戦略が異なる暗黙ルール** が存在するが、明文化されておらず、学習者・翻訳者・他言語データ作成者の判断にバラツキを生む。とくに **#5 と #43 はどちらも「X is ADJ」構造で意味的に同類**にもかかわらず、#5 は `[D:is] [C:very] [D:delicious]` (コピュラ独立、副詞挿入で letter D 反復)、#43 は `[C:is delicious]` (コピュラ + 形容詞融合) と扱いが正反対。これが他言語データに伝播し、たとえば fr/de/it/sv 等で同じ二分裂が起きている (#5 各言語コピュラ独立、#43 各言語コピュラ + 形容詞融合)。

**Proposed:** 二択 (closed-review で決定):
- (A) **コピュラを常に独立 letter** (推奨): #43 `[C:is delicious]` → `[C:is] [F:delicious]` (新 letter F or 既存 C を分割)
  - #38 `[C:is beautiful]` → `[C:is] [F:beautiful]`
  - #66 `[C:is covered]` → `[C:is] [F:covered]`
  - #78 `[C:is good]` → `[C:is] [F:good]`
  - #79 `[B:is sad]` → `[B:is] [F:sad]` (letter B が「she」に既使用なら letter 配分要再考)
  - #87 `[C:is very]` → `[C:is] [F:very]`
  - 進行形も統一: #63 `[C:are singing]` → `[C:are] [F:singing]`、#75 `[C:are learning]` → `[C:are] [F:learning]`、#88 `[C:is changing]` → `[C:is] [F:changing]`、#93 `[G:are held]` → `[G:are] [H:held]`
  - 完了形: #20 `[C:It has been]` → `[A:It] [C:has been]`、#27 `[C:have been]` → `[C:have] [F:been]`、#74 `[A:I've]` → `[A:I] [C:'ve]`、`[C:been waiting]` → `[C:been] [F:waiting]`
- (B) **コピュラを常に形容詞・動詞句と融合** — #2/#4/#18/#91/#97 で独立になっている `is` を融合に戻す方向。これは英語コピュラの morphosyntactic 独立性 (Quirk et al 1985 *Comprehensive Grammar* §3.35) と矛盾するため非推奨。

私見では (A) が memory `feedback_segment_splitting.md` Rule #7 (「TAM/aspect/copula を独立形態素として分節」) と整合。

---

### 7. 同一英語コピュラ文を全 Romance/Germanic 言語が同じパターンで分裂継承 — クロス言語整合性の重大欠陥 【確実】

**Current — #5「This coffee is very delicious」 (パターン A: コピュラ独立 + 副詞挿入):**
- en `[A:This] [B:coffee] [D:is] [C:very] [D:delicious]`
- de `[A:Dieser] [B:Kaffee] [D:ist] [C:sehr] [D:lecker]`
- fr `[A:Ce] [B:café] [D:est] [C:très] [D:délicieux]`
- es_eu `[A:Este] [B:café] [D:está] [C:muy] [D:delicioso]` (※ es_eu は estar、本文中 #1/#2 参照)
- pt_eu `[A:Este] [B:café] [D:é] [C:muito] [D:delicioso]`
- sv `[A:Det här] [B:kaffet] [D:är] [C:mycket] [D:gott]`
- ca `[A:Aquest] [B:cafè] [D:és] [C:molt] [D:bo]`

**Current — #43「The food at this restaurant is delicious」 (パターン B: コピュラ + 形容詞融合):**
- en `[B:The food] [A:at] [D:this] [E:restaurant] [C:is delicious]`
- de `[B:Das Essen] [A:‌in] [D:diesem] [E:Restaurant] [C:ist köstlich]`
- fr `[B:La nourriture] [A:dans] [D:ce] [E:restaurant] [C:est délicieuse]`
- es_eu `[B:La comida] [A:de] [D:este] [E:restaurante] [C:es deliciosa]`
- pt_eu `[B:A comida] [A:deste] [E:restaurante] [C:é deliciosa]`
- sv `[B:Maten] [A:på] [D:den här] [E:restaurangen] [C:är utsökt]`
- ca `[B:El menjar] [A:d'] [D:‌aquest] [E:restaurant] [C:és deliciós]`

**Current — #38「The sunset from here is beautiful」 (パターン B: 同じく融合):**
- en `[C:is beautiful]`, de `[C:ist wunderschön]`, fr `[C:est magnifique]`, es_eu `[C:es hermoso]`, sv `[C:är underbar]`, ca `[C:és bonica]`

**Problem:** **意味類型が同じ「X is ADJ」構造**でありながら、#5 と #43 で異なる分節戦略が **全 Romance/Germanic 圏に並行して伝播**している。これは「#43 の data 作成者は en の #43 パターン B 融合を見て他言語も融合させ、#5 の data 作成者は en の #5 パターン A 独立を見て他言語も独立させた」という **作成手順依存のドリフト** を強く示唆。原因は #6 (en 内の OWN/FUSED 分裂) にある。en を統一すれば派生言語も自動的に統一される。

**Proposed:** #6 と連動して二択統一。たとえばパターン A (コピュラ独立) を採るなら:
- #43 全言語のコピュラを独立: de `[C:ist köstlich]` → `[C:ist] [F:köstlich]`、fr `[C:est délicieuse]` → `[C:est] [F:délicieuse]`、es_eu `[C:es deliciosa]` → `[C:es] [F:deliciosa]` 等。
- 同様に #38, #66, #78, #79, #87 を全言語で同型変換。
- 構造化 edit (代表例、#43 fr):
  ```
  {id:43, lang:"fr", op:"split_segment", letter:"C",
   from:"est délicieuse", to:[["C","est"],["F","délicieuse"]]}
  ```
- 他言語版 (de/it/sv/ca/gl/oc/nap/scn/vec/pt/es) すべて同型 op を適用。

---

### 8. tr 接尾コピュラ `-DIr` の OWN/FUSED が文間で分裂 【確実】

**Current — `-DIr` 独立分節 (ZWNJ 風):**
- #2 tr `[A:Benim] [B:adım] [D:Tanaka] [C:dır]` (`-dır` は独立 letter C)
- #4 tr `[A:En yakın] [B:istasyon] [C:nerede] [D:dir]` (独立 letter D)
- #23 tr `[A:Kütüphane] [C:hastanenin] [B:yanında] [D:dır]` (独立)
- #31 tr `[A:Sınav] [B:gelecek pazartesi] [C:dir]` (独立)
- #33 tr `[A:Otel odası] [C:çok] [D:temiz] [B:‌di]` (過去 `-di`、独立 letter B)
- #97 tr `[A:Süpermarket] [C:istasyonun] [B:arkasında] [D:dır]` (独立)

**Current — `-DIr` 融合 (形容詞・名詞語幹に張り付き):**
- #5 tr `[A:Bu] [B:kahve] [C:çok] [D:lezzetli]` (**`-dir` 完全欠如**、形容詞のみ — 口語形)
- #7 tr `[A:Yarının] [B:havası] [D:güneşli] [C:olacak]` (`olacak` = 「なるだろう」、語彙的未来コピュラ)
- #12 tr `[D:güzeldir]` (融合)
- #43 tr `[C:lezzetlidir]` (融合)
- #87 tr `[D:kullanışlıdır]` (融合)
- #91 tr `[C:geleneğidir]` (`gelenek + i + dir` 三形態素融合: tradition+POSS+COP)

**Problem:** Göksel & Kerslake (2005) *Turkish: A Comprehensive Grammar* §8.2 は `-DIr` を **bound copula clitic** と分類、形態論的には接尾辞だが分離可能 (とくに教材用 gloss では別形態素として扱う)。memory `feedback_glue_marker.md` は agglutinative 言語の bound morpheme を ZWNJ で独立分節せよ、と規定。データ上 **#2 #4 #23 #31 #97 では ZWNJ 風に `-dır` を独立**にしているが、**#12 #43 #87 #91 では融合**、**#5 では完全欠落**という三分裂。とくに **#2 と #91 は両方とも equational copula (X = Y) で意味的に同類** にもかかわらず処理が逆 (#2 独立、#91 融合)。

**Proposed:** 全 tr で `-DIr` を ZWNJ プレフィックス付き独立分節に統一:
- #12 `[D:güzeldir]` → `[D:güzel] [D':‌dir]` または `[D:güzel] [E:‌dir]`
- #43 `[C:lezzetlidir]` → `[C:lezzetli] [F:‌dir]`
- #87 `[D:kullanışlıdır]` → `[D:kullanışlı] [E:‌dır]`
- #91 `[C:geleneğidir]` → `[C:geleneği] [D:‌dir]` (POSS `-i` も独立すべきだが本レビュー射程外)
- #5 `[A:Bu] [B:kahve] [C:çok] [D:lezzetli]` → `[A:Bu] [B:kahve] [C:çok] [D:lezzetli] [E:‌dir]` (コピュラ補完、`-dir` 追加。口語省略を残すなら現状維持だが #2 #4 と非対称)
- 構造化 edit:
  ```
  {id:12, lang:"tr", op:"split_segment", letter:"D",
   from:"güzeldir", to:[["D","güzel"],["E","‌dir"]]}
  {id:43, lang:"tr", op:"split_segment", letter:"C",
   from:"lezzetlidir", to:[["C","lezzetli"],["F","‌dir"]]}
  {id:87, lang:"tr", op:"split_segment", letter:"D",
   from:"kullanışlıdır", to:[["D","kullanışlı"],["E","‌dır"]]}
  {id:91, lang:"tr", op:"split_segment", letter:"C",
   from:"geleneğidir", to:[["C","geleneği"],["D","‌dir"]]}
  ```

---

### 9. ja `です/だ` の OWN/FUSED が文間で分裂 — 形容詞述語と名詞述語で扱い不統一 【確実】

**Current — `です/だ` 独立分節:**
- #2 ja `[A:私の] [B:名前は] [D:田中] [C:です]` (名詞述語、です 独立)
- #4 ja `[A:一番近い] [B:駅は] [C:どこ] [D:です] [E:か]` (疑問詞述語、です 独立)
- #31 ja `[A:試験は] [B:来週の] [D:月曜日] [C:だ]` (名詞述語、だ 独立)
- #33 ja `[A:ホテルの] [E:部屋は] [C:とても] [D:清潔] [B:だった]` (形容動詞 + だった、letter B 独立)

**Current — `です/だ` 形容詞と融合:**
- #5 ja `[A:この] [B:コーヒーは] [C:とても] [D:おいしいです]` (`おいしい + です` 一塊)
- #12 ja `[A:この] [B:公園の] [C:桜は] [D:きれいです]` (`きれい + です` 一塊)
- #43 ja `[D:この] [E:レストランの] [B:料理は] [C:おいしい]` (普通体、`です` 完全欠落)
- #87 ja `[A:この] [B:アプリは] [C:とても] [D:便利だ]` (`便利 + だ` 一塊)
- #91 ja `[A:花見は] [B:日本の] [C:伝統である]` (`伝統 + である` 一塊、文語コピュラ)
- #99 ja `[A:この] [B:お土産は] [C:いくら] [D:です] [E:か]` (独立)

**Problem:** 寺村秀夫 (1984) *日本語のシンタクスと意味 II*, 第7章 は `です/だ` を **judgement marker (判定詞)** と分類、形容詞の終止形 (`おいしい`, `きれい (だ)`, `便利 (だ)`) との結合関係は形態論的に分離可能 — `おいしい` 単独でも文として成立、`おいしいです` の `です` は丁寧化の copula。データ上、**(a) 名詞述語 (#2 田中です、#31 月曜日だ) では `です/だ` が独立**、**(b) 形容詞述語 (#5 おいしいです、#12 きれいです、#87 便利だ) では融合**、**(c) 普通体形容詞述語 (#43 おいしい) では完全欠落**という3 系統が混在。さらに **#91「伝統である」** の `である` は文語コピュラで、他文の `です/だ` とは異なる文体だが letter C に一塊で扱われており、文体差が letter 単位で見えない。

**Proposed:** ja `です/だ/である/だった` を全文で独立分節:
- #5 `[D:おいしいです]` → `[D:おいしい] [F:です]`
- #12 `[D:きれいです]` → `[D:きれい] [F:です]`
- #87 `[D:便利だ]` → `[D:便利] [E:だ]`
- #91 `[C:伝統である]` → `[C:伝統] [D:である]`
- #43 普通体 `[C:おいしい]` → コピュラ補完するなら `[C:おいしい] [D:(だ)]` (省略形を明示)、または現状維持で「普通体終止形は形態素的にコピュラ零」と方針宣言
- 構造化 edit:
  ```
  {id:5,  lang:"ja", op:"split_segment", letter:"D", from:"おいしいです", to:[["D","おいしい"],["F","です"]]}
  {id:12, lang:"ja", op:"split_segment", letter:"D", from:"きれいです", to:[["D","きれい"],["F","です"]]}
  {id:87, lang:"ja", op:"split_segment", letter:"D", from:"便利だ", to:[["D","便利"],["E","だ"]]}
  {id:91, lang:"ja", op:"split_segment", letter:"C", from:"伝統である", to:[["C","伝統"],["D","である"]]}
  ```

---

### 10. ko `이다/입니다/예요` の OWN/FUSED が文間で分裂 — ja と並行する問題 【確実】

**Current — `이다`/`입니다` 独立分節:**
- #2 ko `[A:제] [B:이름은] [D:다나카] [C:입니다]` (입니다 独立)
- #31 ko `[A:시험은] [B:다음 주] [D:월요일] [C:이다]` (이다 独立)

**Current — `이다`/`예요`/`-다` (形容詞終止) 融合:**
- #5 ko `[A:이] [B:커피는] [C:매우] [D:맛있어요]` (`맛있어 + 요` = 形容詞活用 + 丁寧、融合)
- #12 ko `[A:이] [B:공원의] [C:벚꽃이] [D:아름다워요]` (融合)
- #43 ko `[D:이] [E:식당의] [B:음식은] [C:맛있다]` (普通体形容詞、融合)
- #87 ko `[A:이] [B:앱은] [C:매우] [D:편리하다]` (形容動詞 + 다、融合)
- #91 ko `[A:꽃구경은] [B:일본의] [C:전통이다]` (名詞 + 이다、融合 ← #2/#31 と非対称)

**Problem:** Sohn (1999) §6.3 は `이다` を「Korean copula」とし、形態論的に **名詞語幹に enclitic として張り付くが分離可能**と記述 (e.g., honorific marker 시 を間に挟む `학생이시다`)。データ上 **#2/#31 で `입니다/이다` を独立分節**しているのに、**#91 `[C:전통이다]` で同じ `이다` を融合**させているのは方針不統一。とくに **#2 と #91 は両方とも equational copula 用法**で意味類同。形容詞述語 (#5 #12 #87) は ja と同じく形容詞活用語尾の `-다/-요` が融合扱いだが、これも `-다` 自体は終止語尾 marker で分離可能。

**Proposed:**
- #91 ko `[C:전통이다]` → `[C:전통] [D:‌이다]` (ZWNJ 付きで独立、#2/#31 と整合)
- 形容詞 `-다`/`-요` の扱いは ja #9 と並行で:
  - #43 `[C:맛있다]` → `[C:맛있] [D:‌다]`
  - #87 `[D:편리하다]` → `[D:편리하] [E:‌다]`
  - #5 `[D:맛있어요]` → `[D:맛있어] [F:‌요]`
  - #12 `[D:아름다워요]` → `[D:아름다워] [F:‌요]`
- 構造化 edit:
  ```
  {id:91, lang:"ko", op:"split_segment", letter:"C",
   from:"전통이다", to:[["C","전통"],["D","‌이다"]]}
  {id:43, lang:"ko", op:"split_segment", letter:"C",
   from:"맛있다", to:[["C","맛있"],["D","‌다"]]}
  ```

---

### 11. vi `là` のラベルが同コピュラ機能で letter C と D に分裂 【確実】

**Current:**
- #2 vi `[B:Tên] [A:của tôi] [C:là] [D:Tanaka]` (名前 = 田中、letter C)
- #31 vi `[A:Kỳ thi] [C:là] [D:thứ Hai] [B:tuần tới]` (試験 = 月曜日、letter C)
- #91 vi `[A:Ngắm hoa anh đào] [D:là] [C:truyền thống] [B:Nhật Bản]` (花見 = 伝統、letter **D**)
- #80 vi `[A:Tôi] [E:tin] [H:rằng] [B:du] [F:học] [D:là] [I:một] [C:kinh nghiệm] [G:quý giá]` (留学 = 経験、letter **D**)

**Problem:** ベトナム語 `là` は **identificational copula** (Thompson 1965, *A Vietnamese Reference Grammar* §6.21) で、形容詞述語には用いられず、`X là Y` の Y が名詞句のときのみ使用される明確な形態素。データ上、**#2 と #31 では letter C、#91 と #80 では letter D** と同じコピュラに異なる letter が振られている。en 参照では #2 #31 で `is` が letter C、#91 で `is` が letter D となっており、vi はそれを忠実に追従しているが、**結果として vi 内部では同一語 `là` が C と D を行き来する**。cross-lang 整合 (en に追従) を取るか、within-lang 整合 (vi `là` は常に letter X) を取るかが衝突している典型例。

**Proposed:** vi `là` をすべて同一 letter (推奨 = letter D、進行助動詞と区別) に統一:
- #2 vi `[C:là]` → `[D:là]`、letter D に他の要素がある場合は再配分
- または en を統一して #2 #31 `is` を letter D に統一 → vi も自動追従
- 構造化 edit:
  ```
  {id:2,  lang:"vi", op:"relabel_segment", from:["C","là"], to:["D","là"]}
  {id:31, lang:"vi", op:"relabel_segment", from:["C","là"], to:["D","là"]}
  ```

---

### 12. ru/uk 同定コピュラが #2 (em-dash), #7 (будет), #91 (является/є) で letter C/D 分裂 【確実】

**Current:**
- #2 ru `[A:Моё] [B:имя] [C:—] [D:Танака]` (em-dash 記号、letter C)
- #2 uk `[A:Моє] [B:ім'я] [C:—] [D:Танака]`
- #7 ru `[A:Завтра] [B:погода] [C:будет] [D:солнечной]` (未来コピュラ `будет`、letter C)
- #7 uk `[A:Завтра] [B:погода] [C:буде] [D:сонячною]`
- #31 ru `[A:Экзамен] [B:в следующий] [D:понедельник]` (**コピュラ完全欠如、letter C 空席**)
- #31 uk `[A:Іспит] [B:у наступний] [D:понеділок]` (同上)
- #91 ru `[A:Ханами] [D:является] [B:японской] [C:традицией]` (`является` = 「である」、letter **D**)
- #91 uk `[A:Ханамі] [D:є] [B:японською] [C:традицією]` (`є` = 「である」、letter **D**)

**Problem:** ロシア語・ウクライナ語は **現在時制で zero copula** が標準 (Comrie & Corbett 1993, ch. 11, §3.1)、過去・未来でのみ overt copula (был, будет; був, буде)。文体上、書き言葉では em-dash `—` で zero copula を視覚的に補う慣行 (Wade 2011, *Comprehensive Russian Grammar* §17.1)。データ上 #2 は em-dash を letter C に置いた点で zero copula を可視化する好処置だが、**#31 では em-dash も copula も無く letter C 自体が欠席**しており、同じ「X は Y だ」構造で扱いが分裂。さらに **#91 では `является/є` を letter D に置いており、#7 の `будет/буде` が letter C なのと不整合**。同じ言語内で「同定コピュラの位置」が C/D を行き来している。

**Proposed:**
- #31 ru `[A:Экзамен] [B:в следующий] [D:понедельник]` → `[A:Экзамен] [C:—] [B:в следующий] [D:понедельник]` (#2 と並行で em-dash 補完)
- #31 uk 同様 `[C:—]` 補完
- #91 ru `[D:является]` → `[C:является]` (#7 の `будет` letter C と整合)、または #7 を letter D に統一
- 構造化 edit:
  ```
  {id:31, lang:"ru", op:"insert_segment",
   after:["A","Экзамен"], insert:["C","—"]}
  {id:31, lang:"uk", op:"insert_segment",
   after:["A","Іспит"], insert:["C","—"]}
  {id:91, lang:"ru", op:"relabel_segment", from:["D","является"], to:["C","является"]}
  {id:91, lang:"uk", op:"relabel_segment", from:["D","є"],         to:["C","є"]}
  ```

---

### 13. ar コピュラ `هو/هي` 出現と zero copula の文間分裂 【確実】

**Current — `هو/هي` 独立 letter C/D で出現:**
- #2 ar `[A:اسمي] [C:هو] [D:تاناكا]` (`هو` = 「彼」だが equational pronoun 用法、letter C)
- #91 ar `[A:مشاهدة أزهار الكرز] [D:هي] [C:تقليد] [B:ياباني]` (`هي` = 「彼女」 equational、letter D)
- #80 ar `[E:أعتقد] [H:أن] [B:الدراسة] [F:في الخارج] [D:هي] [C:تجربة] [G:قيّمة]` (`هي`、letter D)

**Current — zero copula (現在の述語述語):**
- #5 ar `[A:هذه] [B:القهوة] [D:لذيذة] [C:جداً]` (コピュラなし、形容詞述語が直接続く — 標準アラビア語の正則)
- #12 ar `[C:أزهار الكرز] [A:في هذه] [B:الحديقة] [D:جميلة]` (同上)
- #18 ar `[A:هذه] [B:الحقيبة] [D:غالية] [C:جداً]` (zero)
- #38 ar `[B:غروب الشمس] [A:من] [D:هنا] [C:جميل]` (zero)
- #43 ar `[B:الطعام] [A:في] [D:هذا] [E:المطعم] [C:لذيذ]` (zero)
- #78 ar `[D:أعتقد] [A:أن هذه] [B:الخطة] [C:جيدة]` (zero)
- #87 ar `[A:هذا] [B:التطبيق] [D:مريح جداً]` (zero)

**Current — 過去コピュラ `كانت`:**
- #33 ar `[B:كانت] [E:غرفة] [A:الفندق] [D:نظيفة] [C:جداً]` (kāna `كانت` = 過去 fem、letter B)

**Current — 所在述語 — overt verb:**
- #23 ar `[A:المكتبة] [D:تقع] [B:بجانب] [C:المستشفى]` (`تقع` = 「位置する」、letter D)
- #97 ar `[A:السوبر ماركت] [D:يقع] [B:خلف] [C:المحطة]` (同)
- #4 ar `[C:أين] [D:تقع] [A:أقرب] [B:محطة]`

**Problem:** Holes (2004) *Modern Arabic* §4.4 はアラビア語の **`هو/هي` を equational pronoun copula** とし、書き言葉では equational sentence (X = Y) で **任意的に挿入** されることを記述。**現在時制の predicative sentence (X is ADJ) では zero copula が standard** で `هو` は不要 — データ上の #5/#12/#18/#38/#43/#78/#87 はすべて zero で正しい。**ただし問題は letter 割当て**:
- equational `هو/هي` を持つ #2 では letter **C**、#91 #80 では letter **D** — 不整合
- 過去コピュラ `كانت` (#33) は letter **B** — これも他と独立した割当て
- 所在動詞 `تقع/يقع` は letter **D** — equational と所在で混在

equational copula `هو/هي` は文間で letter を統一すべき。

**Proposed:**
- #2 ar `[C:هو]` → `[D:هو]` (#91 #80 letter D と整合)
- または #91 #80 を letter C に統一
- 過去コピュラ #33 `[B:كانت]` の letter B 採用は letter A (主語 الفندق) との位置関係上やむを得ないが、本来は letter D (述語位置) または letter F (時制) が望ましい
- 構造化 edit:
  ```
  {id:2, lang:"ar", op:"relabel_segment", from:["C","هو"], to:["D","هو"]}
  ```

---

### 14. he コピュラ `הוא/היא/הם` 出現と zero copula の文間分裂 (ar と並行) 【確実】

**Current — `הוא/היא` 独立分節:**
- #2 he `[A|B:שמי] [C:הוא] [D:טנקה]` (`הוא` = 3sg masc copula、letter C)
- #31 he `[A:המבחן] [C:הוא] [B:ביום שני הבא]` (`הוא`、letter C)
- #91 he `[A:צפייה בפריחת הדובדבן] [D:היא] [C:מסורת] [B:יפנית]` (`היא` 3sg fem、letter **D**)
- #80 he `[A:אני] [E:מאמין] [H:ש] [B:לימודים] [F:בחול] [D:הם] [C:חוויה] [G:יקרת ערך]` (`הם` 3pl、letter D)

**Current — zero copula (predicative):**
- #5 he `[B:הקפה] [A:הזה] [C:מאוד] [D:טעים]` (zero)
- #12 he `[C:פרחי הדובדבן] [B:בפארק] [A:הזה] [D:יפים]` (zero)
- #18 he `[B:התיק] [A:הזה] [D:יקר] [C:מדי]` (zero)
- #38 he `[B:השקיעה] [A|D:מכאן] [C:יפהפייה]` (zero)
- #43 he `[B:האוכל] [A:ב] [E:מסעדה] [D:הזו] [C:טעים מאוד]` (zero)
- #78 he `[D:אני חושב] [B:שהתוכנית] [A:הזאת] [C:טובה]` (zero)
- #87 he `[B:האפליקציה] [A:הזאת] [C:מאוד] [D:נוחה]` (zero)

**Problem:** Glinert (1989) *The Grammar of Modern Hebrew* §13.5 は equational copula pronoun `הוא/היא/הם/הן` (PRON₃) を **任意的に挿入される定形コピュラ代用** と記述、predicative sentence では zero。データ上 ar #13 と完全に並行する letter 分裂: #2/#31 で letter **C**、#91/#80 で letter **D**。

**Proposed:**
- #2 he `[C:הוא]` → `[D:הוא]`、#31 he `[C:הוא]` → `[D:הוא]` (letter D 統一)
- または #91 #80 を letter C に統一
- 構造化 edit:
  ```
  {id:2,  lang:"he", op:"relabel_segment", from:["C","הוא"], to:["D","הוא"]}
  {id:31, lang:"he", op:"relabel_segment", from:["C","הוא"], to:["D","הוא"]}
  ```

---

### 15. hu コピュラの欠如 (3sg present zero) と `van/lesz/volt` 出現の letter 不統一 【確実】

**Current — zero copula (3sg present):**
- #2 hu `[A:Az én] [B:nevem] [D:Tanaka]` (zero、正しい)
- #5 hu `[A:Ez a] [B:kávé] [C:nagyon] [D:finom]` (zero)
- #12 hu `[A:Ennek a] [B:parknak a] [C:cseresznyevirágai] [D:gyönyörűek]` (zero)
- #18 hu `[A:Ez a] [B:táska] [D:túl drága]` (zero)
- #38 hu `[A|D:Innen] [B:a naplemente] [C:gyönyörű]` (zero)
- #43 hu `[D:Ennek] [A|E:az étteremnek az] [B:étele] [C:finom]` (zero)
- #78 hu `[D:Úgy gondolom] [A:ez a] [B:terv] [C:jó]` (zero)
- #87 hu `[A:Ez az] [B:alkalmazás] [C:nagyon] [D:kényelmes]` (zero)
- #91 hu `[A:A cseresznyevirág-nézés] [B:japán] [C:hagyomány]` (zero、letter D 空)

**Current — `van` 出現 (所在・存在述語、3sg 例外的 overt):**
- #4 hu `[A:A legközelebbi] [B:állomás] [C:hol] [D:van]` (所在、letter D)
- #23 hu `[A:A könyvtár] [B:mellett van] [C:a kórháznak]` (`mellett van` 融合、letter B)
- #36 hu `[A:Sok] [B:ember] [D:van] [C:az állomáson]` (存在、letter D)
- #97 hu `[A:A szupermarket] [C:az állomás] [B:mögött] [D:van]` (所在、letter D)
- #40 hu `[E:Tudja] [C:hol] [D:van] [B:a posta]` (所在、letter D)

**Current — `lesz` 未来コピュラ:**
- #7 hu `[A:A holnapi] [B:időjárás] [D:napos] [C:lesz]` (letter C)
- #31 hu `[A:A vizsga] [B:jövő hétfőn] [C:lesz]` (letter C)

**Current — `volt` 過去:**
- #33 hu `[A:A hotelszoba] [C:nagyon] [D:tiszta] [B:volt]` (letter **B**、letter A や D ではない)

**Problem:** ハンガリー語の zero copula (3sg present) は **predicate nominal/adjective でのみ zero**、**所在・存在述語では `van` 必須** (Kenesei et al 1998, *Hungarian* §1.6.1)。データ上 zero/van の使い分けは規約に従って正しい。**しかし letter 割当てが不統一**:
- 所在・存在 `van`: #4/#36/#40/#97 で letter **D** ✓ (整合)
- 所在 `mellett van`: #23 で letter **B** (`mellett` = 「の隣に」を一塊にしている) ✗
- 未来 `lesz`: #7/#31 で letter **C** ✗ (van と異なる letter)
- 過去 `volt`: #33 で letter **B** ✗

同じコピュラ系統 (be 動詞) でテンスにより letter が D/C/B にバラついている。

**Proposed:**
- #23 hu `[B:mellett van]` → `[B:mellett] [D:van]` (`van` を letter D に独立)
- #7 hu `[C:lesz]` → `[D:lesz]` (未来も letter D)
- #31 hu `[C:lesz]` → `[D:lesz]`
- #33 hu `[B:volt]` → `[D:volt]` (過去も letter D)
- 構造化 edit:
  ```
  {id:23, lang:"hu", op:"split_segment", letter:"B",
   from:"mellett van", to:[["B","mellett"],["D","van"]]}
  {id:7,  lang:"hu", op:"relabel_segment", from:["C","lesz"], to:["D","lesz"]}
  {id:31, lang:"hu", op:"relabel_segment", from:["C","lesz"], to:["D","lesz"]}
  {id:33, lang:"hu", op:"relabel_segment", from:["B","volt"], to:["D","volt"]}
  ```

---

### 16. zh #31「考试是下周一」`是` の出現が時間述語で唯一 — 他の時間述語 zh 文と不整合 【蓋然】

**Current:**
- #31 zh `[A:考试] [C:是] [B:下] [D:周一]` (`是` 出現、letter C)
- #91 zh `[A:赏樱花] [D:是] [B:日本的] [C:传统]` (`是` 出現、equational、letter D)
- #2 zh `[A:我的] [B:名字] [C:是] [D:田中]` (`是` 出現、letter C)

**Current — 同類の zh 文で `是` 欠如:**
- #5 zh `[A:这] [B:咖啡] [C:很] [D:好喝]` (descriptive、`是` なし、正しい)
- #12 zh `[A:这个] [B:公园的] [C:樱花] [D:很漂亮]` (descriptive、`是` なし)
- #18 zh `[A:这个] [B:包] [C:太] [D:贵了]` (descriptive、`是` なし)
- #78 zh `[D:我认为] [A:这个] [B:计划] [C:很好]` (descriptive、`是` なし)

**Problem:** 中国語の `是` は **equational copula (X = Y)** で名詞述語にのみ出現、形容詞述語では `很 + ADJ` の構造で zero copula (Li & Thompson 1981, §4.3)。データ上 zh の `是` 出現は規則通り正しい (#2 #31 #91 すべて equational/同定述語)。**ただし letter 割当てが #2/#31 で letter C、#91 で letter D と分裂** — これは #11 (vi `là`) と同じ問題で en `is` の letter 揺れに追従した結果。

**Proposed:** vi #11 と並行で zh `是` を letter D 統一:
- #2 zh `[C:是]` → `[D:是]`、#31 zh `[C:是]` → `[D:是]`
- または en を統一して letter C 統一
- 構造化 edit:
  ```
  {id:2,  lang:"zh", op:"relabel_segment", from:["C","是"], to:["D","是"]}
  {id:31, lang:"zh", op:"relabel_segment", from:["C","是"], to:["D","是"]}
  {id:2,  lang:"yue",op:"relabel_segment", from:["C","係"], to:["D","係"]}
  {id:31, lang:"yue",op:"relabel_segment", from:["C","係"], to:["D","係"]}
  ```

---

### 17. hi コピュラ `है/हैं/था` 全文 letter D 統一済だが、形容詞述語で形容詞 + コピュラ融合 【蓋然】

**Current:**
- #2 hi `[A:मेरा] [B:नाम] [D:तनाका] [C:है]` (equational、`है` letter C)
- #31 hi `[A:परीक्षा] [B:अगले] [D:सोमवार] [C:है]` (equational、letter C)
- #4 hi `[A:सबसे नज़दीकी] [B:स्टेशन] [C:कहाँ] [D:है]` (所在、letter D)
- #23 hi `[A:पुस्तकालय] [C:अस्पताल] [B:के बगल में] [D:है]` (所在、letter D)
- #36 hi `[C:स्टेशन पर] [A:बहुत] [B:लोग] [D:हैं]` (存在、letter D)
- #97 hi `[A:सुपरमार्केट] [C:स्टेशन के] [B:पीछे] [D:है]` (所在、letter D)
- #5 hi `[A:यह] [B:कॉफ़ी] [C:बहुत] [D:स्वादिष्ट है]` (`स्वादिष्ट + है` 融合、letter D)
- #12 hi `[A:इस] [B:पार्क के] [C:चेरी फूल] [D:बहुत सुंदर हैं]` (融合)
- #18 hi `[A:यह] [B:बैग] [C:बहुत ज़्यादा] [D:महंगा है]` (融合)
- #38 hi `[D:यहाँ] [A:से] [B:सूर्यास्त] [C:बहुत सुंदर है]` (融合、letter C)
- #43 hi `[D:इस] [E:रेस्तरां] [A:का] [B:खाना] [C:स्वादिष्ट है]` (融合、letter C)
- #78 hi `[D:मुझे लगता है] [A:यह] [B:योजना] [C:अच्छी है]` (融合)
- #87 hi `[A:यह] [B:ऐप] [C:बहुत] [D:सुविधाजनक है]` (融合)
- #91 hi `[A:चेरी ब्लॉसम देखना] [B:जापानी] [C:परंपरा] [D:है]` (equational、`है` 独立 letter D)
- #33 hi `[A:होटल का] [E:कमरा] [C:बहुत] [D:साफ] [B:था]` (過去、`था` 独立 letter B)

**Problem:** Kachru (2006) *Hindi* §5.3.2 は `होना` (be) を **separable copula で形態論的に分離可能**と記述。データ上、**所在述語 (#4 #23 #97) と equational (#2 #31 #91) と過去 (#33) では `है/हैं/था` が独立分節**だが、**形容詞述語 (#5 #12 #18 #38 #43 #78 #87) では形容詞と融合**という分裂。さらに letter 割当ても #2 #31 で letter C、他で letter D と二分 (#16 zh と並行問題)。

**Proposed:**
- 形容詞 + `है` 融合を分離:
  - #5 `[D:स्वादिष्ट है]` → `[D:स्वादिष्ट] [F:है]`
  - #18 `[D:महंगा है]` → `[D:महंगा] [F:है]`
  - #43 `[C:स्वादिष्ट है]` → `[C:स्वादिष्ट] [F:है]`
  - 等
- #2/#31 `[C:है]` → `[D:है]` で letter 統一
- 構造化 edit:
  ```
  {id:5, lang:"hi", op:"split_segment", letter:"D",
   from:"स्वादिष्ट है", to:[["D","स्वादिष्ट"],["F","है"]]}
  {id:18, lang:"hi", op:"split_segment", letter:"D",
   from:"महंगा है", to:[["D","महंगा"],["F","है"]]}
  {id:43, lang:"hi", op:"split_segment", letter:"C",
   from:"स्वादिष्ट है", to:[["C","स्वादिष्ट"],["F","है"]]}
  {id:2, lang:"hi", op:"relabel_segment", from:["C","है"], to:["D","है"]}
  ```

---

### 18. Romance 進行助動詞 `está/estão/sta/sont` の letter D 統一は良好だが、所在 ser/estar 兼用文と衝突 【蓋然】

**Current — 進行 `estar + V-ndo` (letter D 独立、letter C V-ndo):**
- #15 es_eu `[D:está] [C:estudiando]`、es_mx 同、pt_eu `[D:está] [C:a estudar]`、pt_br `[D:está] [C:estudando]`、it `[D:sta] [C:studiando]`、ca `[D:està] [C:estudiant]`、gl `[D:está] [C:estudando]`
- #26 es_eu/es_mx/es_ar/es_co/es_cl `[D:están] [C:jugando]`、pt_eu `[D:estão] [C:a brincar]`、pt_br `[D:estão] [C:brincando]`、fr `[D:sont] [C:en train de jouer]`、it `[D:stanno] [C:giocando]`
- #53 es_eu/es_mx/es_co `[E:están] [C:floreciendo]` (letter E)、pt_eu/pt_br `[E:estão] [C:...]`
- #63 es_ar/es_co/es_cl `[C:están cantando]` (融合!)、es_eu/es_mx `[A:en los árboles] [C:están cantando]` (融合)、pt_eu `[C:estão a cantar]` (融合)、pt_br `[C:estão cantando]` (融合)

**Problem:** 進行 `estar + V-ing` の助動詞 estar は #15/#26 では letter D で独立、#53 では letter E、**#63 では letter C で V-ing と融合**という三分裂。さらに **#79 `[B:está triste]`** (sad、形容詞述語、本来 ser vs estar 選択問題) も es 全方言 `está triste` で一致しているが letter B 一塊で融合 — これは進行助動詞ではなく predicative copula の融合扱い。

**Proposed:** 進行助動詞 `estar/estão/está/sta/sont` の独立分節を全文で統一:
- #63 es_ar `[C:están cantando]` → `[C:están] [F:cantando]` または letter D 独立
- #63 pt_eu `[C:estão a cantar]` → `[C:estão] [F:a cantar]`
- 同様に #75 `[C:están aprendiendo]` を `[C:están] [F:aprendiendo]`
- 構造化 edit:
  ```
  {id:63, lang:"es_ar", op:"split_segment", letter:"C",
   from:"están cantando", to:[["C","están"],["F","cantando"]]}
  {id:63, lang:"pt_eu", op:"split_segment", letter:"C",
   from:"estão a cantar", to:[["C","estão"],["F","a cantar"]]}
  ```

---

### 19. 存在述語 #36「there are many people at the station」で letter D 配分が ru/uk/hu/cs/fi で欠落 【確実】

**Current:**
- en `[D:There are] [A:many] [B:people] [C:at the station]` (`There are` 一塊、letter D)
- de `[C:Am Bahnhof] [D:gibt es] [A:viele] [B:Menschen]` (`gibt es` letter D)
- fr `[D:Il y a] [A:beaucoup de] [B:personnes] [C:à la gare]` (letter D)
- es_eu `[D:Hay] [A:mucha] [B:gente] [C:en la estación]` (letter D)
- ja `[C:駅には] [A:たくさんの] [B:人が] [D:‌いる]` (letter D)
- ko `[C:역에는] [A:많은] [B:사람들이] [D:있다]` (letter D)
- ru `[C:На станции] [A:много] [B:людей]` (**letter D 完全欠落**、zero copula)
- uk `[C:На станції] [A:багато] [B:людей]` (同上、**letter D 欠落**)
- hu `[A:Sok] [B:ember] [D:van] [C:az állomáson]` (letter D `van` 出現)
- cs `[C:Na nádraží] [D:je] [A:hodně] [B:lidí]` (letter D)
- pl `[C:Na stacji] [D:jest] [A:dużo] [B:ludzi]` (letter D)
- ar `[D:يوجد] [A:كثير من] [B:الناس] [C:في المحطة]` (letter D)
- he `[D:יש] [A:הרבה] [B:אנשים] [C:בתחנה]` (letter D)

**Problem:** 存在述語 #36 では英語の `there are` が **dummy subject + 存在動詞** で letter D に当てられている。多くの言語が同パターンで letter D に「存在表現」を置いている (de gibt es, fr il y a, es Hay, ja いる, ko 있다, ar يوجد, he יש, hu van, cs je, pl jest)。**しかし ru/uk は zero copula 言語で「存在は格構造 (locative + nominative) で表現」する** ため、`letter D に該当する語が無い`。データ上 ru/uk は letter D を **完全に欠落**させており、cross-lang alignment が壊れる。

**Proposed:**
- ru #36 `[C:На станции] [A:много] [B:людей]` → `[C:На станции] [A:много] [B:людей] [D:есть]` または `[D:есть] [C:На станции] [A:много] [B:людей]` (存在動詞 `есть` を補充)
- ただし ru 母語話者には `есть` 挿入は不自然なため、現状維持 + 「letter D 欠落許容」を closed-review で明文化
- または en を `[A:many] [B:people] [C:at the station]` (zero copula 化) に書き換えれば全言語整合
- 構造化 edit (補充案):
  ```
  {id:36, lang:"ru", op:"append_segment", insert:["D","есть"]}
  {id:36, lang:"uk", op:"append_segment", insert:["D","є"]}
  ```

---

### 20. #91「Cherry blossom viewing is a Japanese tradition」hu zero copula で letter D 欠落、cross-lang 整合崩壊 【確実】

**Current:**
- en `[A:Cherry blossom viewing] [D:is] [B:a Japanese] [C:tradition]` (letter D)
- de `[A:Die Kirschblütenbesichtigung] [D:ist] [B:eine japanische] [C:Tradition]` (letter D)
- fr `[A:L'observation des cerisiers en fleur] [D:est] [C:une tradition] [B:japonaise]` (letter D)
- it `[D:è]`、ru `[D:является]`、uk `[D:є]` (letter D)
- ar `[D:هي]`、he `[D:היא]` (letter D)
- zh `[D:是]`、yue `[D:係]` (letter D)
- ja `[C:伝統である]` (letter C 融合、letter D **欠落** ※ ja #9 参照)
- ko `[C:전통이다]` (同上、letter D 欠落)
- hu `[A:A cseresznyevirág-nézés] [B:japán] [C:hagyomány]` (**letter D 完全欠落**)
- pl `[A:Oglądanie kwitnących wiśni] [D:to] [B:japońska] [C:tradycja]` (letter D `to` = pronoun copula)
- tr `[A:Hanami] [B:Japon] [C:geleneğidir]` (`-dir` は `gelenek + i + dir` に融合、letter D 欠落)

**Problem:** equational copula #91 で **大多数の言語が letter D を使用**しているが、ja/ko (融合 letter C)、hu (zero copula 3sg)、tr (`-dir` 融合) で letter D が欠落。zh #16 と同根の問題だが、より深刻なのは **hu の zero copula で letter D が存在しない**点 — 学習者がカード式比較すると「ハンガリー語にはコピュラに対応する形態素が無い」と誤学習する。zero copula 言語であることは正しいが、**「ゼロ」を視覚的に何らかの形 (例: 空 placeholder, em-dash, NULL marker) で示す方針**が必要。

**Proposed:** 二択 (closed-review で決定):
- (A) **zero copula 言語にダミー letter D placeholder を補充**: hu #91 → `[A:A cseresznyevirág-nézés] [D:Ø] [B:japán] [C:hagyomány]` (`Ø` または NULL マーカー)
- (B) **zero copula は letter D 欠落を明示的に許容**し、UI で「zero copula」アイコン表示
- 同様の対応が必要な文/言語: ja #91 #87 #5 #12、ko #91 #43 #87 #5 #12、hu #91 #2、ru/uk #31、ar #5/#12/#18 等

---

### 21. ko #43 `[D:이]` (this) と #87 `[D:편리하다]` (convenient) で letter D が「指示詞」と「述語」に共用 【蓋然】

**Current:**
- #43 ko `[D:이] [E:식당의] [B:음식은] [C:맛있다]` (letter D = 指示詞 `이` 「この」)
- #43 en `[B:The food] [A:at] [D:this] [E:restaurant] [C:is delicious]` (letter D = `this`)
- #87 ko `[A:이] [B:앱은] [C:매우] [D:편리하다]` (letter D = 述語 `편리하다`)
- #87 en `[A:This] [B:app] [C:is very] [D:convenient]` (letter D = `convenient`)

**Problem:** #43 と #87 はどちらも「この + N (主語) + (とても) + ADJ」構造の述語述文だが、**letter A/B/C/D の意味的役割が完全に逆**:
- #43: letter A 前置詞、B 主語名詞、C 述語+コピュラ、D 指示詞、E 名詞修飾
- #87: letter A 指示詞、B 主語名詞、C 副詞+コピュラ、D 述語形容詞

これは sentence-level letter 割当てが「en の語順を機械的に追従」した結果で、同類文間で letter 機能が一貫していない。ko データはこれを忠実に追従しているが、**ko 単独で見ると letter D が「指示詞」と「述語形容詞」に分裂**しており、letter color による学習効果が破綻。

**Proposed:** これは en の letter 割当て設計問題で、全 100 文を通じた letter convention (letter A = subject, letter B = object, letter C = predicate-VP, letter D = ...) の明文化が必要。本レビューでは指摘のみ。

---

### 22. ja `あります/います/ある/いる` 所在動詞の letter 割当てが #4/#23/#36/#40/#97 で D 統一、しかし時制活用形 (います/あります vs ある/いる) で文体差が見えない 【要検討】

**Current:**
- #4 ja `[D:です]`、#23 ja `[D:あります]`、#36 ja `[D:‌いる]` (ZWNJ)、#40 ja `[D:あるか] [E:知っています]`、#97 ja `[D:ある]`

**Problem:** 所在述語の ja `ある/いる` は letter D で統一されているが、`あります` (敬体) と `ある` (普通体)、`います` (敬体) と `いる` (普通体) の文体差が、letter の Form (`[D:あります]` vs `[D:ある]`) に反映されているだけで、**敬語マーカー `‐ます` 自体が独立分節されていない**。これは ja #9 (です/だ) と同根問題。

**Proposed:** ja #9 と並行で `‐ます` を独立分節:
- #23 ja `[D:あります]` → `[D:あり] [F:‌ます]`
- #40 ja `[E:知っています]` → `[E:知って] [F:‌います]` または `[E:知って] [G:‌います]`
- 構造化 edit:
  ```
  {id:23, lang:"ja", op:"split_segment", letter:"D",
   from:"あります", to:[["D","あり"],["F","‌ます"]]}
  ```

---

### 23. de #7「Tomorrow's weather will be sunny」未来コピュラ二分割 `wird ... sein` で letter C 二か所反復 — 他言語に並行例なし 【蓋然】

**Current:**
- en #7 `[A:Tomorrow's] [B:weather] [C:will be] [D:sunny]` (`will be` 一塊 letter C)
- de #7 `[A:Morgen] [C:wird] [B:das Wetter] [D:sonnig] [C:sein]` (`wird ... sein` letter C 二か所、間に letter B/D 挟む)
- fr #7 `[B:La météo] [A:de demain] [C:sera] [D:ensoleillée]` (`sera` 一塊 letter C)
- it #7 `[C:sarà]` (一塊)
- es_eu/es_mx `[C:será]`、es_ar/es_co `[C:va a estar]`、es_cl `[C:va a estar]`、pt_eu/pt_br `[C:estará]`、ca `[C:serà]`、ru `[C:будет]`、uk `[C:буде]`、sv `[C:blir]`、no `[C:blir]`、is `[C:verður]`、ro `[C:va fi]`、cs `[C:bude]`、fi `[C:on]`

**Problem:** de #7 は未来コピュラ `werden + V-infinitive (sein)` の語順を反映して **letter C を `wird` と `sein` の二か所**に置いている。これは de の **動詞二位置 + 不定詞末尾** という語順制約を忠実に表現する優秀な実装だが、**他のどの言語も letter C を二か所に反復していない** (たとえ未来コピュラを持つ言語でも一語で済む)。さらに **es_ar/es_co/es_cl `[C:va a estar]`** は **動詞 `ir` + `a` + 動詞 `estar`** という periphrastic future で 3 形態素を letter C に融合しており、同じ言語族内でも分節粒度が違う (es_eu/es_mx は単純未来 `será`)。

**Proposed:**
- de #7 の letter C 二か所反復は de 母語話者には自然だが、cross-lang 比較を破壊する。代替案: `[A:Morgen] [C:wird] [B:das Wetter] [D:sonnig] [E:sein]` (letter E 新設で文末動詞)
- 構造化 edit:
  ```
  {id:7, lang:"de", op:"relabel_segment_at",
   index:4, from:["C","sein"], to:["E","sein"]}
  ```
- es_ar/es_co/es_cl `[C:va a estar]` は `[C:va] [F:a] [G:estar]` に三分割するか、現状維持で `[C:va a estar]` を許容するか closed-review で確認。

---

### 24. id `adalah` 出現の不一致 — #2 #91 でのみ出現、#5/#18/#43/#87 では zero 【蓋然】

**Current:**
- #2 id `[A:Nama saya] [C:adalah] [D:Tanaka]` (equational、`adalah` 出現、letter C)
- #91 id `[A:Hanami] [D:adalah] [C:tradisi] [B:Jepang]` (equational、`adalah` 出現、letter D)
- #31 id `[A:Ujian] [C:adalah] [B:Senin depan]` (equational、`adalah` 出現、letter C)
- #80 id `[A:Saya] [E:percaya] [B:belajar] [F:di luar negeri] [D:adalah] [C:pengalaman] [G:berharga]` (`adalah` letter D)
- #5 id `[B:Kopi] [A:ini] [C:sangat] [D:enak]` (`adalah` 欠如、descriptive)
- #18 id `[B:Tas] [A:ini] [C:terlalu] [D:mahal]` (欠如)
- #38 id `[B:Matahari terbenam] [A:dari] [D:sini] [C:sangat indah]` (欠如)
- #87 id `[B:Aplikasi] [A:ini] [C:sangat] [D:praktis]` (欠如)
- #4 id `[B:Stasiun] [A:terdekat] [D:di] [C:mana]` (所在、`berada` も `adalah` も なし)
- #23 id `[A:Perpustakaan] [D:berada] [B:di samping] [C:rumah sakit]` (所在、`berada` letter D)
- #97 id `[A:Supermarket] [D:berada] [B:di belakang] [C:stasiun]` (所在、`berada`)

**Problem:** Sneddon (2010) *Indonesian: A Comprehensive Grammar* §13.6 はインドネシア語の `adalah` を **equational copula で formal register で必須、informal では省略可能** と記述。データ上 `adalah` は **#2 #31 #80 #91 で出現** (すべて equational X = Y) し、形容詞述語 #5 #18 #38 #87 では zero — 規約通り正しい。**しかし letter 割当て**: #2 #31 で letter C、#80 #91 で letter D と分裂 (#11 vi #16 zh と並行問題)。

**Proposed:** id `adalah` を letter D 統一 (en `is` と並行で letter D 採用すべき):
- #2 id `[C:adalah]` → `[D:adalah]`、#31 id `[C:adalah]` → `[D:adalah]`
- 構造化 edit:
  ```
  {id:2,  lang:"id", op:"relabel_segment", from:["C","adalah"], to:["D","adalah"]}
  {id:31, lang:"id", op:"relabel_segment", from:["C","adalah"], to:["D","adalah"]}
  ```

---

### 25. pl #2「Mam na imię Tanaka」 = 「I have a name Tanaka」 — 名前提示の構文が他言語と完全に異なる 【要検討】

**Current:**
- #2 pl `[A:Mam] [B:na imię] [D:Tanaka]` (`Mam` = 「私は持つ」、`na imię` = 「名前として」、letter A が動詞)
- 他全言語: `[A:私の/My/Mein/...] [B:名前/name/Name/...] [C/D:です/is/ist/...] [D:田中/Tanaka/...]` 構造

**Problem:** ポーランド語の **「Mam na imię X」(I have for name X)** は名前提示の最も自然な口語表現だが、参照英文 "My name is Tanaka" の構造 (所有 + 主語 + コピュラ + 述語) とは **完全に異なる statement type** (所有・経験者構文)。これは pl 内部では自然だが:
- letter A = `Mam` (動詞) — 他言語の letter A (主語/所有限定詞 `My`) と意味的に対応せず
- letter B = `na imię` (前置詞+名詞) — 他言語の letter B (主語名詞 `name`) と対応せず
- letter C/D copula 欠如 — 他言語の copula と対応せず

このため #2 で pl 行だけ letter 配分が他言語と並行しない。cross-lang 比較が成立しない。同様の問題は #2 hu `[A:Az én] [B:nevem] [D:Tanaka]` (3sg copula zero) でも letter C 空席として現れるが、pl はさらに構文ごと変えている。

**Proposed:**
- pl #2 を直訳形 `[A:Moje] [B:imię] [C:to] [D:Tanaka]` (`to` = equational pronoun copula) に統一すれば cross-lang 整合 (`to` は pl の標準書き言葉 equational copula、Swan 2002 *A Grammar of Contemporary Polish* §13.2)
- または現状維持で「pl は所有構文を採る、letter 配分は近似」と明文化
- 構造化 edit:
  ```
  {id:2, lang:"pl", op:"replace_all_segments",
   to:[["A","Moje"],["B","imię"],["C","to"],["D","Tanaka"]]}
  ```

---

## まとめ

- **指摘総数**: 25
- **支配的なコピュラ欠陥**: **es ser/estar の sibling 方言間ドリフト (es_mx の estar 偏向)** が #1〜#5 の 5 件 (指摘総数の 20%) を占め、最頻出。次いで **同一コピュラ形態素の OWN/FUSED 文間分裂** が #6/#8/#9/#10/#17/#18/#22 の 7 件 (28%)、**同一コピュラの letter C/D 揺れ (cross-sentence labeling drift)** が #11/#12/#13/#14/#15/#16/#20/#24 の 8 件 (32%)。残りはハンガリー/ロシア zero copula 補充、tr -DIr 接尾分節、pl 構文置換等の構造的問題。
- **最優先修正案件**:
  1. #1 (es_mx #18 `está cara` → `es cara`、ser/estar 誤り)
  2. #4 (es #78 `está bien/bueno` 3 方言 → `es bueno` 統一、ser/estar 誤り)
  3. #5 (es_mx #87 `está buena` → `es práctica`、ser/estar 誤り + 形容詞変質)
  4. #8 (tr -DIr 接尾 6 文の OWN/FUSED 統一)
  5. #6 (en コピュラ自体の OWN/FUSED 4 パターン分裂、これを統一すれば派生言語が自動整列)
- **ファイル**: `/home/jounlai/langmap/langmap_reviews/51_open.md`

---

## Dev response — round 1 (2026-06-04)

担当: dev (LangMap data side). レビュー #51 への一次応答。

### 全体方針

本ラウンドでは、レビュアー Halldór 氏の指摘 25 件のうち、**最も外科的かつ副作用の少ない es_mx ser/estar 系統ドリフト (#1〜#5)** に集中して修正を入れる。残りは以下の分類で整理:

- **accept-defer (受諾・次ラウンド以降に持ち越し)**: #6 (en コピュラ OWN/FUSED 4 パターン), #7 (Romance/Germanic 並行ドリフト) — 上流 (en) の分裂が下流 100+ セルに波及する mass restructure であり、closed-review で「コピュラ独立 / 融合」の二択方針宣言が先に必要。本ラウンドでは触らない。同根である #8 (tr -DIr), #9 (ja です/だ), #10 (ko 이다/입니다), #17 (hi है/हैं), #18 (Romance 進行 estar), #22 (ja ます), grand-convention 待ち。
- **accept-cherry-pick 試行も adjacency 制約で reject**: #11 (vi `là` letter C/D 統一), #13/#14 (ar/he `هو/הي/הוא/היא` letter 統一), #16 (zh `是` letter 統一), #24 (id `adalah` letter 統一) — レビュアー提案は **#2/#31 の letter C を letter D に統一**だが、当該文の構造は `[A:NP][C:cop][D:N]` (vi/zh/yue/id/ar/he 等) で **C→D relabel は隣接同一 role-letter `[D:cop][D:N]` を生成し、project hard rule (memory `feedback_no_adjacent_same_segments.md`) で reject される**。逆方向 (#91 の D→C) も #91 vi/id/ar/he で `[C:cop][C:tradition]` 隣接が発生して同じく reject。**en 上流自体が #2/#31 letter C, #91 letter D の二分裂**であるため、within-lang 統一は en restructure が前提。本ラウンドでは見送り。
- **accept-cherry-pick で適用可能**: #12 (ru/uk `является/є` letter D→C) は #91 の文構造 `[A:NP][D:cop][B:adj][C:N]` で B が間に挟まり隣接にならないため適用可能だが、これも **en `[D:is]` と divergent になる** ため within-lang vs cross-en で衝突。Round 1 では保留、closed-review で「en restructure vs lang-internal 統一」の優先順位を決めてから適用。
- **reject**: #25 (pl #2 `Mam na imię` → `Moje imię to`) — 「Mam na imię X」は pl 母語話者の最も自然な口語形で **教材的正確性が高い**。letter alignment 整合のために自然な言い回しを直訳形に書き換えるのは memory `feedback_dialect_vocab_differences.md` の精神に反する。pl 内部で自然な統語が優先。
- **要 closed-review**: #19 (ru/uk #36 `есть/є` 補充 vs zero copula 許容), #20 (zero copula 言語に letter D placeholder 補充するか欠落許容するか), #21 (sentence-level letter convention 明文化), #23 (de `wird ... sein` 二位置 letter C の扱い) — いずれも全コーパス方針案件で本ラウンド射程外。

### 受諾・適用した edit (Round 1)

**指摘 #1 (es_mx #18 `está cara` → `es cara`)** — 受諾。価格は本質属性で ser 必須 (RAE §37.5.2)。加えて副詞 `muy` を `demasiado` に戻し (en `too expensive` のニュアンス復元、es_eu/es_ar と整合)。

**指摘 #2 (es_mx #38 `está padrísimo` → `es padrísimo`)** — 受諾。eternal aesthetic predicate は ser (Bosque & Demonte ch.37 §3.2)。形容詞 `padrísimo` はメキシコ口語色として保持 (dialect vocab differences memory に従い、コピュラのみ修正)。

**指摘 #3 (es #43 `está riquísima` → `es riquísima` for es_mx)** — 受諾 (es_mx のみ)。レビュアーは es_cl `está buena` → `es buena` も同時提案だが、本ラウンドは es_mx 単独修正に集約。es_cl の estar 採用は **チリ口語の stage-level 評価バイアス** で、辞書的に許容範囲。次ラウンドで sibling 全揃え検討。

**指摘 #4 (es #78 `está bien` → `es bueno` for es_mx)** — 受諾 (es_mx のみ)。`está bien` (副詞) → `es bueno` (形容詞) で品詞も復元。es_ar `está bueno`, es_cl `está bien` の修正は次ラウンドで sibling 整合判断。

**指摘 #5 (es_mx #87 `está buena` → `es práctica`)** — 受諾。**コピュラ + 形容詞の二段修正**: `[C:está muy]` → `[C:es muy]`、`[D:buena]` → `[D:práctica]` (es_ar/es_co/es_cl の `práctica` と整合)。`está buena` のアプリ評価俗用 (Lipski 1994 §5.3) を除去。

### 適用 edit 一覧 (`/tmp/lm_edits_51.json`)

```
#18 es_mx settext D:está → es
#18 es_mx settext C:muy → demasiado
#38 es_mx settext C:está padrísimo → es padrísimo
#43 es_mx settext C:está riquísima → es riquísima
#78 es_mx settext C:está bien → es bueno
#87 es_mx settext C:está muy → es muy
#87 es_mx settext D:buena → práctica
```

合計 **7 lexical edits (5 cells)**, すべて `settext` op (隣接同一 role-letter なしを検証済み, palette 拡張なし, letter relabel なし)。

### Round 1 closure

- 指摘 25 件中、**5 件 (#1〜#5) を accept & apply** (es_mx ser/estar ドリフト統一の最優先群)。
- **2 件 (#11, #13, #14, #16, #24)** — cherry-pick 試行も adjacency hard rule で reject、**en 上流統一待ち**。
- **8 件 (#6〜#10, #17, #18, #22)** — OWN/FUSED 統一は en 上流の二択方針 (closed-review) 待ち、accept-defer。
- **1 件 (#25 pl)** — reject (pl 母語表現を優先)。
- **残り 9 件 (#12, #15, #19, #20, #21, #23 等)** — closed-review 要、本ラウンド射程外。

次ラウンドでは:
1. es_cl/es_ar の #43/#78 ser/estar 残存 (sibling 完全整合)
2. closed-review 結果次第で en コピュラ OWN/FUSED の grand restructure

を予定。
