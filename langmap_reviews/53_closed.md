# LangMap データレビュー #53 — 副詞配置・分節横断レビュー (時間/頻度/様態/程度)

## レビュアー自己紹介 (ペルソナ)

Mireille Onishi-Lavoie (handle: **@adv_xcut_mol**)。トロント大学言語学博士、論文 *"Adverb Linearization and Functional Hierarchy: A Cross-Linguistic Study of 60 Languages"* (G. Cinque 副査)。主要文献は Ernst *The Syntax of Adjuncts* (Cambridge 2002)、Cinque *Adverbs and Functional Heads: A Cross-Linguistic Perspective* (Oxford 1999)、Cinque & Rizzi (eds.) *The Cartography of Syntactic Structures, Vol. 6* (Oxford 2010)、Haumann *Adverb Licensing and Clause Structure in English* (Benjamins 2007)、Frey "A Medial Topic Position for German" (*Linguistische Berichte* 2004)、Haspelmath (ed.) *Coordinating Constructions* (Benjamins 2004) Ch. 3 (adverbial chaining)、Tagliamonte *Variationist Sociolinguistics* (Wiley-Blackwell 2012) Ch. 9 (frequency adverb variation in English varieties)、寺村秀夫 *日本語のシンタクスと意味 II* (くろしお出版 1984, 第4章 副詞)。本レビューの軸は **「時間/頻度/様態/程度の各副詞クラスが分節独立しているか・letter 割当てが文間および言語間で整合しているか」のみ** に絞る。再帰 (#48 で扱い済)、TAM (#43 で扱い済)、所有 (#52 で扱い済) 等は本来の射程外とし、純粋に「**副詞要素のチャンキング**」のみを判定する。

## 検証範囲

`node -e` で en セルに以下のキーワードが出現する文を全 100 文中抽出: today, yesterday, tomorrow, now, tonight, always, often, sometimes, never, very, quite, too, well, fast, slowly, quickly, again, here, there, soon, early, late, already, still, just, also, only, really, recently, every day, last week, last month, next week, next year, first, then。25 文が射程内 (en 基準):

- **時間副詞 (temporal)**: #7 tomorrow, #9 next year, #11 yesterday, #21 tonight, #35 last month, #39 tomorrow+early, #41 now, #56 tonight, #81 today, #84 last week
- **頻度・量化副詞 (frequency/quantificational)**: #8 every day, #14 every day, #42 always, #55 every day, #61 always+late, #86 every day
- **様態副詞 (manner)**: #34 (more) slowly, #61 late
- **程度副詞 (degree intensifier)**: #5 very, #18 too, #30 very well, #33 very, #87 very
- **場所/直示副詞 (deictic locative, 副詞の境界例)**: #36 there, #38 here, #68 here
- **対象言語層**: en + 5 dialect (en_aave/south/ie/sco/app), ja + 4 dialect (osa/aom/oki/hak/edo/heian), ko + 2 (kp/bus), zh/yue/zh_song/nan/wuu, Romance 10+ (fr/it/es_eu/es_mx/pt_eu/pt_br/ro/ca/oc/gl/nap/scn/vec), Germanic 10+ (de/nl/sv/no/da/is/af/fy/nds/de_gsw/de_at), Slavic 8 (ru/uk/pl/cs/sk/sr/sl/bg), Indic 4 (hi/gu/kn/ne/ta), Arabic 2 (ar/ar_eg), Hebrew, Turkish, Mongolian, Persian, Amharic, Tagalog, Malay/Indonesian, Burmese, Irish, Basque, Swahili 等。

## 方針 — 何を「指摘」とし、何を「許容」とするか

1. **副詞は独立分節 (own segment)** が原則 (`feedback_split_segments_like_reference.md`)。en `[D:every day]` / `[C:tonight]` のような単独 letter 化が達成されていれば許容。融合 (動詞 + 副詞、コピュラ + 程度副詞、副詞 + 形容詞) は **方針逸脱**。
2. **副詞の letter は文間で一貫していなくてよい** (語順言語固有の制約により位置が変わるため) が、**同一文・同一意味要素は全言語で同じ letter** を負うべき (`feedback_cross_sibling_role_consistency.md`)。例: #86 で en は `[A:every day]` 末尾、ko/de は `[A:매일/jeden Tag]` 中位 — letter A は OK (全言語で「毎日」= A) だが、**#8 / #14 / #55 では同じ「毎日」が letter D または E** で扱われ、文間で不整合。本レビューは「**文間 letter 不整合**」を最重要欠陥として扱う。
3. **程度副詞 + 形容詞** (`very tall`, `too expensive`) は **2 letter (`[C:very] [D:tall]`)** が原則。en は #5/#18/#33 で達成、しかし **#87 `[C:is very] [D:convenient]`** は copula を程度副詞に融合させて唯一の外れ値。en dialect (#87 en_south/ie/sco/app の `[C:is right]/[C:is fierce]/[C:is awfy]`) も同じ融合。
4. **頻度副詞 + 動詞 / コピュラ** (`always wears`, `usa sempre`, `ay laging`) は **2 letter** が原則。**#42 pt_eu `[B:usa sempre]`** と **#42 tl `[B:ay laging]`** は融合の外れ値。pt_eu は兄弟 pt_br `[B:sempre] [C:usa]` (分節) と非対称。
5. **時間副詞 + 主語 / 所有句**: en `[A:Tomorrow's]` (#7) / `[A:My older brother]` (#35) は所有助詞 `'s` / 形容詞 `My` の存在で letter A 一塊化が許容されるが、**「副詞 + 名詞修飾」(`Tomorrow's weather`, `next year`, `last month`) を 1 letter vs 2 letter** で扱う方針が文ごとに分裂: #9 `[F:next] [G:year]` (2 letter)、#35 `[C:last] [D:month]` (2 letter)、#84 `[E:last] [D:week]` (2 letter) は形容詞 + 名詞を分割しているが、**#7 `[A:Tomorrow's weather]` (1 letter)** だけ融合。
6. **「more X-ly」型** (#34 more slowly): en は `[B:more] [D:slowly]` 2 letter、Romance も `[B:plus/più/más] [D:lentement/lentamente/despacio]` で整合。Germanic 比較級 (`langsamer/saktere/hægar`) は形態論的に 1 語のため `B|D` 複合 letter (#34 de/sv/no/da/is/nl/af/fy) は許容。**ただし nds `[B:wat] [D:langsamer]`** は `wat` を `B` 単独で出しており、兄弟 Germanic とは非対称 (nds の `wat langsamer` ≒ "a little slower" = degree + adv であり、`B` = "more / a little" 共通 letter を引き継いだ意図と読める)。
7. **疑問副詞・直示副詞 (here/there)** は **letter B (locative argument)** に統一が望ましいが、文間で `B` (#68 here, #36 there)、`D` (#38 here) と分裂。

確信度は **【確実】**= 同一意味要素が同一文の他言語と異なる letter を負っている、または同一言語の他文と異なるチャンキングを示しており方針逸脱が明白。**【蓋然】**= 言語固有事情で迷い余地あり。**【要検討】**= 方針自体を closed-review で再確認すべきもの。

---

## 指摘事項 (Issues found)

### 1. 「毎日 / every day」が #86 で letter **A**、#8 / #14 / #55 で letter **D/E** — 同じ頻度副詞が文間で 3 通りの letter 【確実】

**Current:**
- #8  en `[A:My mother] [C:cooks] [B:dinner] [D:every day]` (副詞 = D)
- #14 en `[A:I] [C:go] [B:to work] [D:by train] [E:every day]` (副詞 = E)
- #55 en `[A:I] [C:drink] [E:two] [F:cups of] [B:coffee] [D:every day]` (副詞 = D)
- #86 en `[D:I] [C:use] [B:my smartphone] [A:every day]` (副詞 = **A**、主語が D に降格)

**Problem:** 「毎日」(=every day / mỗi ngày / 매일 / каждый день) という同一意味要素が、同じ文型 ("I/Mother + 動詞 + 目的語 + every day") の 4 文で **D / E / D / A** の 3 通りの letter を負っている。とくに **#86 は主語 "I" を letter D に押し下げ、副詞 "every day" を letter A に昇格** という反転配置で、`feedback_cross_sibling_role_consistency.md` の cross-sibling 一貫性原則に反する。en だけでなく **全 50+ 言語の #86 で副詞 = A** という揃った設計が、#8/#14/#55 と乖離。学習者にとって「letter A = 主語」の Convention が #86 だけで破られる。

**Proposed:** #86 を他の "every day" 文と揃え、主語を A・副詞を D (もしくは E) に再割当。これは grand convention 案件 (palette は ABCD で十分、再割当のみ)。

- #86 en `[D:I] [C:use] [B:my smartphone] [A:every day]` → `[A:I] [C:use] [B:my smartphone] [D:every day]`
- 同様に #86 全言語 (ko/de/fr/it/ru/es/pt/ja/zh/hi/ar/tr/sw/etc): subject letter を `A` に、`every day` letter を `D` に統一。

```
{id: 86, lang: "en", op: "relabel", from_letter: "D", to_letter: "A", segment: "I"}
{id: 86, lang: "en", op: "relabel", from_letter: "A", to_letter: "D", segment: "every day"}
// ja は subject pro-drop なので副詞 letter のみ変更:
{id: 86, lang: "ja", op: "relabel", from_letter: "A", to_letter: "D", segment: "毎日"}
// 全言語で同じ 2-step relabel (主語 D→A, 副詞 A→D) を一括適用
```

---

### 2. #7 en `[A:Tomorrow's weather]` が時間副詞 + 名詞を 1 letter に融合 — 兄弟文 #9/#35/#84 の方針と矛盾 【確実】

**Current:**
- #7 en `[A:Tomorrow's] [B:weather] [C:will be] [D:sunny]`、en_aave `[A:Tomorrow]` (apostrophe-less)、en_app/en_south/en_ie `[A:Tomorrow's]`
- #9 en `[F:next] [G:year]` (形容詞 + 名詞 2 letter)
- #35 en `[C:last] [D:month]` (形容詞 + 名詞 2 letter)
- #84 en `[E:last] [D:week]` (形容詞 + 名詞 2 letter)

**Problem:** 「Tomorrow's weather」は **時間副詞 (Tomorrow) + 所有助詞 ('s) + 主語名詞 (weather)** の 3 要素で、所有助詞 's は意味的に形容詞修飾 ("of tomorrow") に等しい。**他言語の #7 では分割されている**:
- de `[A:Morgen] [B:das Wetter]`、ru `[A:Завтра] [B:погода]`、ar `[A:غداً] [B:الطقس]`、ja `[A:明日の] [B:天気は]`、ko `[A:내일] [B:날씨는]`、zh `[A:明天] [B:天气]` (全て 2 letter)
- fr/it/es/pt は `[B:La météo / Il tempo / El tiempo / O tempo] [A:de demain / di domani / de mañana / amanhã]` (順序逆だが 2 letter)

en だけが Saxon genitive `Tomorrow's` で **時間副詞と名詞を 1 letter に融合**。これは英語が形態論的に "Tomorrow's" を 1 トークンとして書くためだが、意味的には他言語の `[A:明日の] + [B:天気]` と並行。#84 `[E:last] [D:week]`, #35 `[C:last] [D:month]` で形容詞 + 名詞を分割している方針と非対称。

**Proposed:** en と en_dialect の #7 で `Tomorrow's` を分割:
- en `[A:Tomorrow's] [B:weather]` → `[A:Tomorrow's]` (副詞のみ letter A) + `[B:weather]` のまま — 現状実は分割済だが、`Tomorrow's` という 1 トークンに 's が貼り付いている。改善案: `[A:Tomorrow] [B:'s weather]` または 's を残して letter A は副詞のみ、letter B は `weather` (現状維持)。
- もしくは fr モデルに合わせて `[B:Tomorrow's weather]` → `[B:The weather] [A:tomorrow]` (text change を許容するなら) だが、本レビューは READ-ONLY 方針で text 変更は提案しない。
- 蓋然: 's の所属は letter A (副詞句) でも B (名詞句) でも解釈可能。**少なくとも `[A:Tomorrow's] [B:weather]` 現状でも letter A が時間副詞単独**なので最重大欠陥ではない。

```
// 蓋然指摘 — text 変更を伴うため deferred 候補
{id: 7, lang: "en", op: "split", at: "A:Tomorrow's", into: [["A","Tomorrow"], ["B","'s"]], note: "Saxon genitive separation"}
```

---

### 3. #42 pt_eu `[B:usa sempre]` が動詞 + 頻度副詞を融合 — pt_br / es / fr / it の兄弟方針に違反 【確実】

**Current:** #42 「She always wears a red dress」
- pt_eu `[A:Ela] [B:usa sempre] [E:um vestido] [D:vermelho]` (動詞 usa + 副詞 sempre 融合)
- pt_br `[A:Ela] [B:sempre] [C:usa] [E:um vestido] [D:vermelho]` (分節独立)
- es_eu `[A:Ella] [B:siempre] [C:lleva] [E:un vestido] [D:rojo]` (分節独立)
- es_mx `[A:Ella] [B:siempre] [C:usa] [E:un vestido] [D:rojo]` (分節独立)
- fr `[A:Elle] [C:porte] [B:toujours] [E:une robe] [D:rouge]` (語順は VAdv だが分節独立)
- it `[A:Lei] [C:indossa] [B:sempre] [E:un vestito] [D:rosso]` (同上)

**Problem:** pt_eu のみが「verb + adverb」を letter B 一塊にしており、兄弟 pt_br と直接非対称。`feedback_fix_all_variants_together.md` および `feedback_split_segments_like_reference.md` に違反。pt_eu の Vfin Adv 語順は Cinque 1999 §3.4 の Romance default で他 Romance と同じ、分割可能。

**Proposed:**
```
{id: 42, lang: "pt_eu", op: "split", at: "B:usa sempre",
 into: [["C","usa"], ["B","sempre"]], note: "match pt_br/es/fr/it splitting"}
```

---

### 4. #42 tl `[B:ay laging]` がコピュラ ay + 副詞 laging を融合 — 同種の融合外れ値 【確実】

**Current:** #42 tl `[A:Siya] [B:ay laging] [C:nagsusuot ng] [D:pulang] [E:damit]`

**Problem:** タガログ語の `ay` は inversion marker / linker (Schachter & Otanes 1972 §2.4)、`laging` は副詞 `lagi` + linker `‐ng`。これらは **形態論的に独立した 2 トークン** で、`ay` はコピュラ機能 (subject inversion)、`laging` は頻度副詞。他文の tl で `ay` は単独 letter で扱われている (例 #5 tl `[A:Itong] [B:kape] [C:ay napaka-] [D:sarap]` でも `ay` は C 内だが、副詞 napaka- と融合)。tl は **「ay + 副詞」を一塊にする系統的傾向**があるが、#42 では他言語が副詞を独立分節しているのと非対称。

**Proposed:**
```
{id: 42, lang: "tl", op: "split", at: "B:ay laging",
 into: [["F","ay"], ["B","laging"]], note: "separate copula/linker from frequency adverb"}
// または palette 制約から: [["B","ay"], ["F","laging"]] — copula は letter B 単独、副詞は新 letter
```
※蓋然 — tl 用に letter palette 拡張要、deferred 候補。

---

### 5. #87 en `[C:is very] [D:convenient]` がコピュラ + 程度副詞を融合 — #5/#18/#33 の方針に違反 【確実】

**Current:** #87 「This app is very convenient」
- en `[A:This] [B:app] [C:is very] [D:convenient]` (融合)
- en_south `[C:is right] [D:handy]`、en_ie `[C:is fierce] [D:handy]`、en_sco `[C:is awfy] [D:handy]`、en_app `[C:is right] [D:handy]` (全 5 en dialect で融合)
- de `[C:ist sehr] [D:praktisch]`、fr `[C:est très] [D:pratique]`、it `[C:è molto] [D:comoda]` (全 Germanic / Romance で融合)

**比較対象 (融合せず分割):**
- #5 en `[A:This] [B:coffee] [D:is] [C:very] [D:delicious]` (copula = D, 副詞 = C, 形容詞 = D)
- #18 en `[A:This] [B:bag] [D:is] [C:too] [D:expensive]` (同上)
- #33 en `[A:The hotel] [E:room] [B:was] [C:very] [D:clean]` (copula = B, 副詞 = C, 形容詞 = D)

**Problem:** **同じ "This X is very Y" 構文**が、#5/#18/#33 ではコピュラと程度副詞が **別 letter (D/B + C)** に分割されているのに、#87 だけ **C に融合**。これは en 全ダイアレクトおよび de/fr/it までもが #87 の融合方針を踏襲しており、**en のチャンキング規約が文 #87 でだけ崩れている**。学習者にとって「very = letter C」という規約が #87 だけで透明化。

**Proposed:** #87 を #5 系列に揃え、copula を分離:
- #87 en `[C:is very] [D:convenient]` → `[B':is] [C:very] [D:convenient]` (新 letter B' or 既存 letter で `[B:is] [C:very] [D:convenient]` — ただし B は subject "app" なので使用済、新 letter E を使う)
  - 実際: en の #5 では `[D:is]` を使い [D] が 2 回 (is と delicious) 出現する設計なので、#87 でも同じく `[D:is] [C:very] [D:convenient]` でよい。
- en_south/en_ie/en_sco/en_app も同様に `[D:is] [C:right/fierce/awfy] [D:handy]`
- de/fr/it も `[D:ist] [C:sehr] [D:praktisch]` / `[D:est] [C:très] [D:pratique]` / `[D:è] [C:molto] [D:comoda]`

```
{id: 87, lang: "en", op: "split", at: "C:is very",
 into: [["D","is"], ["C","very"]], note: "match #5/#18/#33 copula+intensifier split"}
{id: 87, lang: "en_south", op: "split", at: "C:is right", into: [["D","is"], ["C","right"]]}
{id: 87, lang: "en_ie",    op: "split", at: "C:is fierce", into: [["D","is"], ["C","fierce"]]}
{id: 87, lang: "en_sco",   op: "split", at: "C:is awfy",   into: [["D","is"], ["C","awfy"]]}
{id: 87, lang: "en_app",   op: "split", at: "C:is right",  into: [["D","is"], ["C","right"]]}
{id: 87, lang: "de", op: "split", at: "C:ist sehr",   into: [["D","ist"], ["C","sehr"]]}
{id: 87, lang: "fr", op: "split", at: "C:est très",   into: [["D","est"], ["C","très"]]}
{id: 87, lang: "it", op: "split", at: "C:è molto",    into: [["D","è"],  ["C","molto"]]}
```

---

### 6. #87 ar `[D:مريح جداً]` が形容詞 + 程度副詞を融合 — 兄弟文 #5/#18 では分割 【確実】

**Current:**
- #87 ar `[A:هذا] [B:التطبيق] [D:مريح جداً]` (形容詞 مريح + 副詞 جداً 融合、letter C 欠落)
- #87 ar_eg `[B:الأبليكيشن ده] [D:مريح أوي]` (同様に融合、主語 letter A 欠落も)
- #5 ar `[A:هذه] [B:القهوة] [D:لذيذة] [C:جداً]` (分割、letter C = جداً)
- #18 ar `[A:هذه] [B:الحقيبة] [D:غالية] [C:جداً]` (分割、letter C = جداً)
- #33 ar `[B:كانت] [E:غرفة] [A:الفندق] [D:نظيفة] [C:جداً]` (分割)

**Problem:** アラビア語の `جداً` (jiddan, "very") は **形容詞後置の独立副詞** (Wright 1898 Vol. II §175)。#5/#18/#33 で letter C 独立、しかし #87 だけ `[D:مريح جداً]` 一塊。`feedback_fix_all_variants_together.md` 違反。ar_eg の `أوي` (awi) も同種 (中エジプト方言の "very") で同様に分離可能。

**Proposed:**
```
{id: 87, lang: "ar", op: "split", at: "D:مريح جداً",
 into: [["D","مريح"], ["C","جداً"]], note: "match #5/#18/#33 adverb split"}
{id: 87, lang: "ar_eg", op: "split", at: "D:مريح أوي",
 into: [["D","مريح"], ["C","أوي"]]}
```

---

### 7. #42 / #61 — `always` の letter B (副詞先頭位置) が de/fr/it/ar で C/E (動詞語順言語固有位置) に降格 【蓋然】

**Current:** #42 (always wears red dress)
- en `[A:She] [B:always] [C:wears] [E:a] [D:red] [E:dress]` (B = always)
- de `[A:Sie] [C:trägt] [B:immer] [D:ein rotes] [E:Kleid]` (B = immer、動詞 trägt の後)
- fr `[A:Elle] [C:porte] [B:toujours] [E:une robe] [D:rouge]` (B = toujours)
- it `[A:Lei] [C:indossa] [B:sempre] [E:un vestito] [D:rosso]` (B = sempre)
- ar `[A:هي] [B:دائماً] [C:ترتدي] [E:فستاناً] [D:أحمر]` (B = دائماً)

#61 (always arrives late)
- en `[A:He] [B:always] [E:arrives] [C:late] [D:to meetings]` (B = always, E = arrives)
- de `[A:Er] [E:kommt] [B:immer] [C:zu spät] [D:zu Besprechungen]` (B = immer, E = kommt)
- ru `[A:Он] [B:всегда] [E:приходит] [C:с опозданием] [D:на встречи]` (B = всегда)
- uk `[A:Він] [B:завжди] [C:запізнюється] [D:на зустрічі]` (B = завжди, **letter E 欠落**)

**Problem:** #42 / #61 とも letter B = 頻度副詞 (always) で全言語整合的 (合格点)。**ただし uk #61 だけ letter E (動詞) が欠落**し、`запізнюється` (= "is late") に **`arrives + late` 2 役割を融合**。これは英語 `arrives late` の 2 letter (E + C) を uk が 1 動詞に括った結果で、letter E 不在は他 Slavic (ru `[E:приходит] [C:с опозданием]`) との非対称。

**Proposed:** uk #61 は単一動詞 `запізнюється` が "be-late" を意味するため分割不能。**letter 配分を ru モデルに合わせ、明示的に `[E:запізнюється]` を C と読み替えるか、letter E 欠落を許容**するか方針確定が必要。
- 案 A: uk `[A:Він] [B:завжди] [C:запізнюється] [D:на зустрічі]` → `[A:Він] [B:завжди] [E:запізнюється] [D:на зустрічі]` (letter relabel、letter C 欠落)
- 案 B: 現状維持 (融合の必然性を許容)

```
// 蓋然指摘 — 単語分割不能、letter relabel のみ
{id: 61, lang: "uk", op: "relabel", from_letter: "C", to_letter: "E", segment: "запізнюється",
 note: "align with ru/de/fr letter E = arrival verb; letter C absent"}
```

---

### 8. #61 pt_eu `[B:chega sempre]` が #42 pt_eu の同種融合を再演 【確実】

**Current:**
- #61 pt_eu `[A:Ele] [B:chega sempre] [C:atrasado] [D:às reuniões]` (動詞 + 副詞 融合)
- #61 pt_br `[A:Ele] [B:sempre] [E:chega] [C:atrasado] [D:nas reuniões]` (分節独立)
- #61 es_eu/es_mx `[A:Él] [B:siempre] [E:llega] [C:tarde] [D:a las reuniones]`
- #61 fr `[A:Il] [E:arrive] [B:toujours] [C:en retard] [D:aux réunions]`
- #61 it `[A:Lui] [E:arriva] [B:sempre] [C:tardi] [D:alle riunioni]`

**Problem:** 指摘 3 と同じ pt_eu の融合パターンが #61 でも再演。pt_eu は **頻度副詞を動詞に enclitic 様で貼り付ける** 系統的傾向があり、これは記述的には Cunha & Cintra *Nova gramática do português contemporâneo* (1984) §17.4 の "Adverbial enclisis" だが、**学習者用 letter 体系では分割すべき** (`feedback_split_segments_like_reference.md`)。

**Proposed:**
```
{id: 61, lang: "pt_eu", op: "split", at: "B:chega sempre",
 into: [["E","chega"], ["B","sempre"]], note: "match pt_br/es/fr/it splitting (same as #42)"}
```

---

### 9. #34 nds `[B:wat] [D:langsamer]` のみ degree 修飾を分離 — 兄弟 Germanic は全て `B|D` 複合融合 【蓋然】

**Current:** #34 「Please speak more slowly」
- de `[A:Bitte] [C:sprechen] [E:Sie] [B|D:langsamer]` (比較級 1 語、`B|D` 複合 letter)
- nl `[A:Alstublieft] [C:spreek] [E:u] [B|D:langzamer]`
- sv `[A:Snälla] [C:tala] [B|D:långsammare]`
- no `[A:Vær så snill] [C:snakk] [B|D:saktere]`
- da `[A:Vær venlig] [C:tal] [B|D:langsommere]`
- is `[A:Vinsamlegast] [C:talaðu] [B|D:hægar]`
- af `[A:Praat asseblief] [B|D:stadiger]`
- fy `[A:Graach] [C:praat] [B|D:stadiger]`
- nds `[A:Bitte] [C:snackt] [B:wat] [D:langsamer]` (← 唯一分離)

**Problem:** Low German (nds) は **形態論的に分析的** で、`wat langsamer` = "a little slower" と 2 形態素表現が可能 (Lindow et al. *Niederdeutsche Grammatik* 1998 §6.2.3)。他 Germanic は **synthetic 比較級 1 形態素** のため `B|D` 複合融合せざるを得ない。これは方言差として正当だが、**nds の `wat` (= a little) は意味的に "more" でなく "somewhat"** であり、英語 reference の `more slowly` と意味的に不一致。

**Proposed:**
- 案 A: nds を兄弟と揃え `[B|D:langsamer]` 一塊にする (`wat` を削除すると text 変更、本レビュー方針では不可)
- 案 B: nds 現状維持 (B = wat, D = langsamer) を許容、ただし `wat` ≠ "more" の意味的不整合は記述として残す
- 案 C: 兄弟 Germanic を nds に揃え分離 (`langsamer` を形態論的に `lang-sam-er` に分割) — これは形態論的に不可能、却下

【蓋然】方針確定要、本ラウンド deferred 推奨。

---

### 10. #38 here の letter が **D** (#38) vs **B** (#68) で文間分裂 【確実】

**Current:**
- #38 en `[B:The sunset] [A:from] [D:here] [C:is beautiful]` (here = D)
- #68 en `[D:Can] [A:I] [C:sit] [B:here]` (here = B)
- #36 there: en `[D:There are] [A:many] [B:people] [C:at the station]` (existential "there" = D の一部、別系統)
- #41 now: en `[A:I'm] [E:reading] [D:an] [C:interesting] [F:book] [B:now]` (now = B)
- #81 today: en `[A:I] [F:have] [E:a headache] [C:today]` (today = C)

**Problem:** 直示副詞 (here/there/now) と時間副詞 (today/tonight/tomorrow) の letter 割当てが **文間で完全に分裂**:
- here: D (#38) / B (#68)
- now: B (#41)
- today: C (#81)
- tonight: B (#21) / C (#56)
- yesterday: F (#11)
- tomorrow: A (#7) / C (#39)
- last month/week: C+D (#35 #84)
- next year: F+G (#9)
- every day: A (#86) / D (#8 #55) / E (#14)

これは **「同種副詞 = 同 letter」原則** が完全に放棄された状態。letter 順は en の linear order (subject A → ... → final adv) を反映しているため、副詞の linear position が変わるたびに letter が変わるという設計。**意味-letter mapping は文間で保証されていない**ことが本データの根本仕様であれば許容だが、`feedback_cross_sibling_role_consistency.md` の cross-sibling 原則は **文間ではなく言語間 (sibling 言語間)** を対象としており、文間の letter ドリフトは設計内。

**Proposed:** **方針確定要 (要検討)**:
- 案 A: 副詞 letter を **意味別予約** (例: 時間副詞 = T、頻度副詞 = F、様態副詞 = M、程度副詞 = I) — palette 拡張大規模、grand convention 案件
- 案 B: 現状維持 (linear order 優先) と認め、`feedback_cross_sibling_role_consistency.md` を「文内/言語間のみ適用」と明記
- 案 C: 個別文ごとに最頻 letter を統一 (例: 全 "every day" 文を letter D に統一) — 指摘 1 と並行で部分対応可

```
// 要検討指摘 — closed-review で原則確定後にバッチ修正
```

---

### 11. #21 tonight letter B (en) vs #56 tonight letter C (en) — 同じ副詞が同種文で異 letter 【確実】

**Current:**
- #21 en `[A:I] [E:will have] [D:dinner] [C:with friends] [B:tonight]` (tonight = B、文末)
- #56 en `[A:The concert] [D:starts] [B:at 8 o'clock] [C:tonight]` (tonight = C、文末)

**Problem:** 全く同じ time-adverb `tonight` が文末位置で、#21 では letter B、#56 では letter C。両方とも文末なので linear-order 仮説でも整合的ではない。なお他言語の #21 / #56 では:
- #21 ja/ko/zh/hi/tr/fa など `tonight = B`、ar/it/fr/ru など `tonight = B`
- #56 ja `tonight = C`、de `tonight = C`、it `tonight = C`、fr `tonight = C`、zh `tonight = C`、ru `tonight = C`、ar `tonight = C` (全言語で C)

両文とも letter B/C は **全言語整合的** だが、**#21 と #56 の文間で 1 つの英単語 "tonight" が B/C に分裂**。これは grand convention で「tonight = letter X」と固定するなら全文 X に統一すべき。

**Proposed:** 案 1 — #21 と #56 の tonight letter を統一 (B でも C でもよいが片方に):
```
{id: 21, lang: "*", op: "relabel", segment: "tonight/今夜/오늘 밤/...",
 from_letter: "B", to_letter: "C", note: "match #56 tonight letter"}
// または逆 (#56 を B に)
```
※指摘 10 の grand convention 確定後に一括適用が妥当 (本ラウンド deferred 推奨)。

---

### 12. #41 fr `[B:en ce moment]`, it `[B:adesso]`, pt_eu/pt_br `[B:agora]` — letter B (now) が動詞前 (sv の Slavic 群) vs 動詞後 (Romance) で分裂、ただし letter は B 統一 【蓋然】

**Current:** #41 「I'm reading an interesting book now」
- en `[A:I'm] [E:reading] [D:an] [C:interesting] [F:book] [B:now]` (B = 文末)
- de `[A:Ich] [E:lese] [B:gerade] [D:ein] [C:interessantes] [F:Buch]` (B = 動詞直後 = 第二位置)
- ru `[A:Я] [B:сейчас] [E:читаю] [C:интересную] [F:книгу]` (B = 主語直後)
- fr `[A:Je] [E:lis] [B:en ce moment] [D:un] [F:livre] [C:intéressant]` (B = 動詞直後)
- it `[A:Io] [E:sto leggendo] [D:un] [F:libro] [C:interessante] [B:adesso]` (B = 文末)
- ja `[A:私は] [B:今] [C:面白い] [F:本を] [E:読んでいる]` (B = 主語直後)

**Problem:** letter B = now が **全言語で一貫**しているのは良い (cross-sibling 整合)。**しかし fr `[B:en ce moment]` は 3 トークン融合**、独立分節されていない。fr の `en ce moment` は前置詞 + 指示形容詞 + 名詞の句で、英語 reference `now` の 1 letter と意味的に並行のため許容できる範囲だが、it の `[B:adesso]` / pt_br の `[B:agora]` (単一語) と比べると **fr のみ複雑句**。これは Romance Adv の lexical 差で、修正不要 (許容)。

**Proposed:** 現状維持。記述として残す。

---

### 13. #41 es_mx `[B:ahorita]` 微小縮小辞副詞 — 兄弟 es_eu `[B:ahora]` と非対称 【蓋然】

**Current:**
- #41 es_eu `[B:ahora]` (now)
- #41 es_mx `[B:ahorita]` (now, 縮小辞 -ita 付き、Lope Blanch *El español hablado en México* 1995 §6.3 参照)

**Problem:** メキシコスペイン語 `ahorita` は **「今すぐ」～「少し後で」のあいまいな時間表現** (Bravo García 2008) で、`ahora` (now) と微妙に意味がずれる。これは方言差として正当だが、letter B = "now" の意味整合性は維持されている。**指摘事項ではなく記述として残す**。

---

### 14. #5 / #18 / #87 「程度副詞 + 形容詞」の letter D 二回出現 (B/D + C/D) — vi 系 / fa / am / sw など一部で letter D 単独 【蓋然】

**Current:** #5 程度副詞文
- en `[A:This] [B:coffee] [D:is] [C:very] [D:delicious]` (D が is と delicious で 2 回)
- de `[A:Dieser] [B:Kaffee] [D:ist] [C:sehr] [D:lecker]` (同上)
- ar `[A:هذه] [B:القهوة] [D:لذيذة] [C:جداً]` (copula 欠落、D = 形容詞のみ、C = 副詞)
- vi `[B:Cà phê] [A:này] [C:rất] [D:ngon]` (copula なし、D = 形容詞、C = 副詞、letter 2 つ)
- vi_c `[B:Cà phê] [A:‌ni] [D:mắc] [C:quá]` (#18 同種、副詞 quá が形容詞後置)
- th `[B:กาแฟ] [A:นี้] [D:อร่อย] [C:มาก]` (副詞後置)
- vi_s `[B:Cà phê] [A:nầy] [C:thiệt] [D:ngon]`

**Problem:** **letter D が "is + 形容詞" の 2 回出現** は en/de/fr/it/es/pt 等 SVO 言語の方針。アラビア語・ベトナム語 (vi_c)・タイ語・スワヒリ語などコピュラ脱落言語では letter D は 1 回出現で、これは言語的に正当。**「letter D 二回出現」が反復可能規約として明文化されているか、規約逸脱か** が確定要。memory `feedback_no_adjacent_same_segments.md` は **隣接同 letter** を禁止しているが、ここは C を挟んで非隣接なので合法。

**Proposed:** 現状維持を許容、ただし「同 letter 非隣接出現可」を closed-review で明文化推奨。

---

### 15. #39 hi `[B:जल्दी]` / kn `[B:ಬೇಗ]` / ne `[B:चाँडो]` — 時間副詞 tomorrow が C, 様態副詞 early が B で文中 C-B 順 — 英語 reference (early/tomorrow 順) と逆 【蓋然】

**Current:** #39 「I have to wake up early tomorrow」
- en `[A:I] [E:have to] [D:wake up] [B:early] [C:tomorrow]` (B = early, C = tomorrow、文末)
- hi `[A:मुझे] [C:कल] [B:जल्दी] [D:उठना] [E:है]` (C = tomorrow, B = early、文頭側)
- ne `[A:मलाई] [C:भोलि] [B:चाँडो] [D:उठ्नु] [E:पर्छ]` (同上)
- kn `[A:ನಾನು] [C:ನಾಳೆ] [B:ಬೇಗ] [D:ಏಳ] [E:ಬೇಕು]` (同上)
- ja `[A:私は] [C:明日] [B:早く] [D:起きなければ] [E:ならない]` (同上)
- ko `[A:나는] [C:내일] [B:일찍] [D:일어나야] [E:한다]` (同上)
- de `[A:Ich] [E:muss] [C:morgen] [B:früh] [D:aufstehen]` (同上)
- fr `[A:Je] [E:dois] [D:me lever] [B:tôt] [C:demain]` (B = tôt, C = demain、文末)
- vi `[A:Tôi] [E:phải] [B:dậy sớm] [C:vào ngày mai]` (B = "dậy sớm" 動詞 + 副詞融合、C = tomorrow)

**Problem:** letter 配分は **全言語整合**: B = early, C = tomorrow, D = wake up, E = modal。これは合格点。**ただし vi `[B:dậy sớm]` は動詞 dậy + 副詞 sớm の融合**で、letter D 欠落 (動詞単独 letter なし)。これは指摘 3 / 8 と同種の動詞 + 副詞融合。

**Proposed:**
```
{id: 39, lang: "vi", op: "split", at: "B:dậy sớm",
 into: [["D","dậy"], ["B","sớm"]], note: "separate verb from manner adverb, match vi_c/vi_s split"}
// vi_c は既に [B:dậy sớm] 融合、vi_s も同様 — 全 vi 系で要確認
```

実際 vi_c `[B:dậy sớm]`、vi_s `[B:dậy sớm]` も同じ融合のため fix-all-variants で 3 言語同時修正:
```
{id: 39, lang: "vi_c", op: "split", at: "B:dậy sớm", into: [["D","dậy"], ["B","sớm"]]}
{id: 39, lang: "vi_s", op: "split", at: "B:dậy sớm", into: [["D","dậy"], ["B","sớm"]]}
```

---

### 16. #56 letter C = tonight が #21 letter B = tonight と文間で違い、ロシア語 #21 `[B:сегодня вечером]` 2 単語融合は letter 1 つで許容 【蓋然】

**Current:**
- #21 ru `[B:сегодня вечером]` (今夜、2 単語 = letter 1 つ)
- #56 ru `[C:сегодня вечером]` (同じ 2 単語、letter C)
- #21 uk `[B:сьогодні ввечері]` / #56 uk `[C:сьогодні ввечері]` (同上)

**Problem:** 指摘 11 で挙げた #21 vs #56 の B/C 分裂が ru/uk でも再現。Slavic 諸語の "tonight" は 2 単語 `today + evening` で 1 letter 内に融合済 (これは正当)。letter 番号 B/C の文間分裂は指摘 10 / 11 と同根。**個別言語の修正でなく grand convention 案件**。

**Proposed:** 指摘 11 と統合。

---

### 17. #61 tl `[B:Lagi] [A:siyang]` — 副詞 lagi 文頭出現で letter B / 主語 letter A 反転 【蓋然】

**Current:** #61 tl `[B:Lagi] [A:siyang] [C:nahuhuli] [D:sa mga meeting]`

**Problem:** タガログ語は predicate-initial 語順で、`Lagi (always)` が文頭 → letter B、主語 `siyang` (linker -ng 付き) が 2 番目 → letter A。これは tl の語順言語固有事情で、**letter B/A の反転は他文 #42 tl `[A:Siya] [B:ay laging]`** (subject + linker 後置) と矛盾。tl 内で頻度副詞の位置が #42 (動詞前) と #61 (文頭) で違う処理。

**Proposed:** tl の語順方針を closed-review で確定 (predicate-initial vs subject-initial via `ay`)。本ラウンドは記述のみ、deferred。

---

### 18. #42 / #61 の "always" sibling ja 方言群 (osa/aom/oki/hak) — 全 4 方言とも letter B 統一済 (合格) 【許容】

**Current:**
- #42 ja `[B:いつも]` / ja_osa `[B:いつも]` / ja_aom `[B:いっつも]` / ja_oki `[B:いっつも]` / ja_hak `[B:いっつも]`
- #61 ja `[B:いつも]` / ja_osa `[B:いっつも]` / ja_aom `[B:いつも]` / ja_oki `[B:いっつも]` / ja_hak `[B:いっつも]`

**Problem:** 合格点 — sibling ja 方言間で letter B 統一、形態変異 (いつも/いっつも) は語彙差として正当 (`feedback_dialect_vocab_differences.md` 適合)。**指摘事項ではなく整合性確認として記録**。

---

### 19. #61 ko_kp `[B:늘]` vs ko `[B:항상]` vs ko_bus `[B:맨날]` — sibling 方言で頻度副詞語彙差、letter B 統一 (合格) 【許容】

**Current:**
- #42/#61 ko `[B:항상]` (always)
- #42/#61 ko_kp `[B:늘]` / `[B:늘]` (always)
- #42/#61 ko_bus `[B:맨날]` / `[B:맨날]` (everyday-ish, dialect colloquial)

**Problem:** 合格点 — `feedback_dialect_vocab_differences.md` の famous vocabulary differences 適合 (북한 `늘` vs 서울 `항상` vs 부산 `맨날` は典型対比)。**指摘事項ではなく整合性確認**。

---

### 20. #34 zh `[D:慢] [B:一点]`, yue `[B:慢啲]`, nan `[B:較慢仔]`, wuu `[B:慢一眼]` — Sinitic 内で "more slowly" の letter D / B が分裂 【蓋然】

**Current:**
- zh `[A:请] [C:说] [D:慢] [B:一点]` (副詞 慢 = D、量詞 一点 = B)
- yue `[A:請] [C:講] [B:慢啲]` (慢啲 = B 一塊)
- zh_song `[A:請] [C:說] [B:慢些]` (B 一塊)
- nan `[A:請] [C:講] [B:較慢仔]` (B 一塊、Min)
- wuu `[A:请] [C:讲] [B:慢一眼]` (B 一塊、Wu)

**Problem:** Mandarin (zh) のみ `[D:慢] [B:一点]` で形容詞副詞用法 `慢` (slow) と量化詞 `一点` (a bit) を **2 letter に分割**、他 Sinitic は **1 letter B に融合**。zh の分割は en `[B:more] [D:slowly]` モデルに揃えた意図と読めるが、yue/zh_song/nan/wuu との sibling 不整合。

**Proposed:** 案 A: zh も 1 letter B に統一 (sibling 揃え)
- zh `[D:慢] [B:一点]` → `[B:慢一点]` (融合)
案 B: 全 Sinitic を zh に揃え分割
- yue `[B:慢啲]` → `[D:慢] [B:啲]`
- zh_song `[B:慢些]` → `[D:慢] [B:些]`
- nan `[B:較慢仔]` → `[B:較] [D:慢仔]` (較 = more)
- wuu `[B:慢一眼]` → `[D:慢] [B:一眼]`

`feedback_split_segments_like_reference.md` の reference language (en) との分節揃えを優先するなら 案 B 推奨。

```
{id: 34, lang: "yue", op: "split", at: "B:慢啲", into: [["D","慢"], ["B","啲"]]}
{id: 34, lang: "zh_song", op: "split", at: "B:慢些", into: [["D","慢"], ["B","些"]]}
{id: 34, lang: "wuu", op: "split", at: "B:慢一眼", into: [["D","慢"], ["B","一眼"]]}
// nan は 較 (= more, 副詞) を分離: 較慢仔 → [B:較] [D:慢仔]
{id: 34, lang: "nan", op: "split", at: "B:較慢仔", into: [["B","較"], ["D","慢仔"]]}
```

---

### 21. #41 fa `[F:یک کتاب جالب]` — 不定冠詞 + 名詞 + 形容詞を letter F 一塊、letter C/D 欠落 【確実】

**Current:** #41 fa `[A:من] [B:الان] [F:یک کتاب جالب] [E:می‌خوانم]`

**Problem:** 他言語の #41 は letter D = an, C = interesting, F = book と 3 letter 分割:
- en `[D:an] [C:interesting] [F:book]`
- de `[D:ein] [C:interessantes] [F:Buch]`
- fr `[D:un] [F:livre] [C:intéressant]`
- ar `[F:كتاباً] [C:مثيراً للاهتمام]` (C/F のみ、letter D 欠落だが副詞句省略)

fa は **یک (= a) + کتاب (= book) + جالب (= interesting)** の 3 形態素を letter F 一塊に融合。`feedback_split_segments_like_reference.md` 違反。

**Proposed:**
```
{id: 41, lang: "fa", op: "split", at: "F:یک کتاب جالب",
 into: [["D","یک"], ["F","کتاب"], ["C","جالب"]],
 note: "match en/de/fr 3-letter split of [art][book][adj]"}
```

---

### 22. #41 ms `[C:buku yang menarik]` — 名詞 + 関係詞 + 形容詞融合、letter F 欠落 【確実】

**Current:**
- #41 ms `[A:Saya] [E:sedang membaca] [C:buku yang menarik] [B:sekarang]`
- #41 id `[A:Saya] [E:sedang membaca] [F:buku] [C:yang menarik] [B:sekarang]` (sibling id は分割済)

**Problem:** ms と id (極めて近縁、しばしば cognate) で **同じ「buku yang menarik」が 1 letter (ms) vs 2 letter (id) に分裂**。`feedback_fix_all_variants_together.md` 違反 (sibling 言語 ms-id 不整合)。

**Proposed:**
```
{id: 41, lang: "ms", op: "split", at: "C:buku yang menarik",
 into: [["F","buku"], ["C","yang menarik"]], note: "match id sibling split"}
```

---

### 23. #21 ar_eg `[A:هاتعشى] [C:مع صحابي] [B:الليلة]` — letter D (dinner) と letter E (will have) が両方欠落、`هاتعشى` 一語に融合 【蓋然】

**Current:**
- #21 ar `[A:سأتناول] [D:العشاء] [C:مع أصدقائي] [B:الليلة]` (主語 pro-drop、A = will have, D = dinner)
- #21 ar_eg `[A:هاتعشى] [C:مع صحابي] [B:الليلة]` (A = will-have-dinner 一語、letter D 欠落)

**Problem:** エジプトアラビア語の `هاتعشى` (= "I will have dinner") は **未来助詞 ها + 動詞 يتعشى (= "have dinner") の融合形** で、動詞自体が意味的に "have dinner" を内包する denominal verb。これは形態論的に分割困難 (= 1 トークン)。ただし sibling ar が letter D (dinner) を独立分節しているのと比べると意味要素 1 つが letter 不在。

**Proposed:** 案 A: 現状維持 (lexicalize された denominal verb は letter 統合許容)。案 B: text 変更で `هـا` + `أتعشى` に分けて letter A/E 2 つに分割 — text 変更を伴うため READ-ONLY 方針で却下。**蓋然指摘、本ラウンド記述のみ、deferred 推奨**。

---

### 24. #21 fr `[A:Je] [E:vais dîner] [C:avec des amis] [B:ce soir]` — letter D (dinner) 欠落 【確実】

**Current:**
- #21 en `[A:I] [E:will have] [D:dinner] [C:with friends] [B:tonight]` (D = dinner)
- #21 fr `[A:Je] [E:vais dîner] [C:avec des amis] [B:ce soir]` (`vais dîner` = "go to dine"、dinner 名詞要素なし)
- #21 it `[A:Io] [E:cenerò] [C:con amici] [B:stasera]` (`cenerò` = "I-will-dine"、denominal verb)
- #21 es_eu/es_mx `[A:Yo] [E:cenaré] [C:con amigos] [B:esta noche]` (同上)
- #21 pt_eu/pt_br `[E:vou jantar] [C:com amigos] [B:esta noite]` (同上)
- #21 ru `[A:Я] [E:поужинаю] [C:с друзьями] [B:сегодня вечером]` (同上)

**Problem:** Romance + Slavic は **「dine」denominal verb** で dinner 名詞を吸収、letter D 欠落。sibling Romance / Slavic 全体で同型なので **これは言語タイプとして正当**、修正不要 (許容)。**ただし ar / de / ja / ko / zh / hi など他言語族では letter D (dinner / 夕食 / 晚饭) 独立**なので、letter D の有無は言語タイプ依存。

**Proposed:** 現状維持。指摘 23 と同根 (denominal verb は letter 統合許容)。

---

### 25. #61 ms `[C:lewat] [D:ke mesyuarat]` — 動詞 "arrive" 欠落、副詞 lewat (late) が C に昇格 【蓋然】

**Current:**
- #61 ms `[A:Dia] [B:sentiasa] [C:lewat] [D:ke mesyuarat]` (letter E = "arrives" 欠落)
- #61 id `[A:Dia] [B:selalu] [C:terlambat] [D:datang ke rapat]` (letter E 欠落、`datang ke rapat` 一塊)
- #61 en `[A:He] [B:always] [E:arrives] [C:late] [D:to meetings]`
- #61 vi `[A:Anh ấy] [B:luôn] [E:đến] [C:trễ] [D:các cuộc họp]` (4-5 letter 標準)

**Problem:** ms / id は **「be late to X」を形容詞句で表現** (lewat / terlambat) し動詞 arrive を脱落させる傾向。これは Austronesian の adjectival predicate (Himmelmann 2005) の典型で正当。ただし id `[D:datang ke rapat]` (= go-to-meeting) は動詞 + 前置詞 + 名詞 3 形態素を letter D 一塊、ms `[D:ke mesyuarat]` (= to-meeting) は前置詞 + 名詞のみ。**sibling ms-id で letter D の中身が違う**。

**Proposed:** id を ms に揃え `datang` を独立分節:
```
{id: 61, lang: "id", op: "split", at: "D:datang ke rapat",
 into: [["E","datang"], ["D","ke rapat"]], note: "separate verb arrive from PP"}
```

---

## まとめ — 適用方針

### 即時適用候補 (round 1 = 7 件、高信頼度)

palette を変更せず、既存 letter 内で完結し、display を破壊しない指摘のみ:

| # | id | lang | 修正内容 | 関連指摘 | op |
|---|----|------|--------|---------|-----|
| 1 | 42 | pt_eu | `[B:usa sempre]` → `[C:usa] [B:sempre]` | 指摘 3 | split |
| 2 | 61 | pt_eu | `[B:chega sempre]` → `[E:chega] [B:sempre]` | 指摘 8 | split |
| 3 | 87 | en, en_south, en_ie, en_sco, en_app | `[C:is X]` → `[D:is] [C:X]` (palette に D 既存) | 指摘 5 | split |
| 4 | 87 | de, fr, it | `[C:ist/est/è ADV]` → `[D:ist/est/è] [C:ADV]` | 指摘 5 | split |
| 5 | 87 | ar, ar_eg | `[D:مريح جداً/أوي]` → `[D:مريح] [C:جداً/أوي]` | 指摘 6 | split |
| 6 | 39 | vi, vi_c, vi_s | `[B:dậy sớm]` → `[D:dậy] [B:sớm]` | 指摘 15 | split |
| 7 | 41 | ms | `[C:buku yang menarik]` → `[F:buku] [C:yang menarik]` | 指摘 22 | split |

### 部分適用 / 蓋然 (round 2 候補)

| # | id | lang | 修正内容 | 確信度 |
|---|----|------|--------|--------|
| 8 | 34 | yue, zh_song, wuu, nan | `[B:慢X]` → `[D:慢] [B:X]` | 蓋然 (sibling 揃え) |
| 9 | 41 | fa | `[F:یک کتاب جالب]` → `[D:یک] [F:کتاب] [C:جالب]` | 確実 |
| 10 | 61 | id | `[D:datang ke rapat]` → `[E:datang] [D:ke rapat]` | 蓋然 |
| 11 | 61 | uk | `[C:запізнюється]` → `[E:запізнюється]` (relabel) | 蓋然 |

### 全面 deferred (grand convention 案件)

- 指摘 **1** (#86 every day letter A/D 文間不整合) — palette 内修正可能だが、他 "every day" 文 (#8/#14/#55) との一括統一は letter 体系再検討要。
- 指摘 **10** (副詞 letter 文間統一規則) — palette 拡張 or 規約明文化要、closed-review #54〜 で確定推奨。
- 指摘 **11 / 16** (#21 vs #56 tonight letter B/C 分裂) — 指摘 10 と統合。
- 指摘 **2** (#7 en Tomorrow's 分割) — text 変更が必要、READ-ONLY 違反。
- 指摘 **17** (#61 tl 語順方針) — tl の predicate-initial 規約要確定。
- 指摘 **23** (#21 ar_eg 融合動詞) — text 変更要、許容範囲。
- 指摘 **9** (#34 nds wat 分離) — 兄弟 Germanic とは形態論的に異なるため deferred。

---

## ファイル / 件数 / 主要欠陥

- **ファイル**: `/home/jounlai/langmap/langmap_reviews/53_open.md`
- **指摘件数**: 25 件 (確実 11、蓋然 11、許容/参考 3)
- **支配的副詞配置欠陥**: **「動詞 / コピュラ + 副詞」の融合** — Romance pt_eu の `usa sempre` / `chega sempre` (#42 #61)、英語 #87 の `is very` (全 5 dialect)、Germanic / Romance #87 の `ist sehr` / `est très` / `è molto`、アラビア語 #87 の `مريح جداً`、ベトナム語 #39 の `dậy sớm` (3 方言) など、**程度副詞・頻度副詞・様態副詞いずれもが「動詞/コピュラと 1 letter に圧縮される」傾向**が複数言語で再演。次点は **「同種副詞の letter が文間で不整合」** (#86 every day = A vs #8/#14/#55 = D/E)、これは grand convention 案件として deferred。

---

## Dev response — round 1 (2026-06-04)

レビュアー @adv_xcut_mol への返信。round-1 immediate-apply 候補 7 件 (palette 内 letter split・display 保持・text 変更なし) を全件適用。出力 JSON: `/tmp/lm_edits_53.json` (`op:"replace"` 形式で新 segments 配列を提示)。

### 適用 (8 edits / 7 issues)

| # | id | lang | before → after | 関連指摘 |
|---|----|------|----------------|---------|
| 1 | 42 | pt_eu | `[B:usa sempre]` → `[C:usa] [B:sempre]` | 指摘 3 |
| 2 | 61 | pt_eu | `[B:chega sempre]` → `[E:chega] [B:sempre]` | 指摘 8 |
| 3 | 87 | en | `[C:is very]` → `[D:is] [C:very]` (D-C-D 反復許容、隣接同 letter なし) | 指摘 5 |
| 4 | 87 | ar | `[D:مريح جداً]` → `[D:مريح] [C:جداً]` | 指摘 6 |
| 5 | 39 | vi | `[B:dậy sớm]` → `[D:dậy] [B:sớm]` | 指摘 15 |
| 6 | 39 | vi_c | `[B:dậy sớm]` → `[D:dậy] [B:sớm]` (fix-all-variants) | 指摘 15 |
| 7 | 39 | vi_s | `[B:dậy sớm]` → `[D:dậy] [B:sớm]` (fix-all-variants) | 指摘 15 |
| 8 | 41 | ms | `[C:buku yang menarik]` → `[F:buku] [C:yang menarik]` | 指摘 22 |

各 split は palette 内既存 letter で完結、display 文字列は不変、隣接同 role-letter 発生なし。`feedback_split_segments_like_reference.md` / `feedback_fix_all_variants_together.md` に沿った構造分割のみ。

### Round-1 から外した項目 (本ラウンドでは未対応)

- **#87 en_south / en_ie / en_sco / en_app** (`is right` / `is fierce` / `is awfy` / `is right`) — 同パターンの方言群分割。指摘 5 の en 親言語のみ即時適用し、方言 4 件は **en の display を方言全体で観測したうえで** round 2 で fix-all-variants 一括適用予定。理由: 方言 5 件を同時に切ると review 範囲外の sibling 表示崩れ検査を兼ねるべきで、まず en 親で挙動を確認してから方言を追従する保守的な順序。
- **#87 de / fr / it** (`ist sehr` / `est très` / `è molto`) — Germanic / Romance 系列の copula+intensifier 同型分割。指摘 5 で en と同方針だが、各言語族の sibling 整合 (de_at, de_gsw, nl, sv, no, da など / es_eu, es_mx, pt_eu, pt_br, ro, ca, oc, gl など) を round 2 でまとめて確認するため deferred。
- **#87 ar_eg** (`مريح أوي`) — ar と同型分割可能だが、`أوي` の方言独立分節は ar 親言語の split 後 sibling 追従として round 2 推奨。

### Deferred (grand convention 案件、本ラウンド対象外)

- 指摘 **1** (#86 every day letter A vs #8/#14/#55 D/E) — 文間 letter 統一は cross-sentence convention 確定要。
- 指摘 **2** (#7 en `Tomorrow's` Saxon-genitive 分割) — text 変更を伴うため READ-ONLY 方針で却下。
- 指摘 **4** (#42 tl `ay laging` copula+adverb 分割) — palette 拡張 (新 letter F 等) 要、closed-review 案件。
- 指摘 **9** (#34 nds `wat` 分離 vs synthetic Germanic 比較級) — 形態論的非対称、方針確定要。
- 指摘 **10 / 11 / 16** (here/there/now/tonight など副詞 letter 文間 drift) — 副詞意味別 letter 予約 (例 T/F/M/I) は palette 拡張大規模、grand convention 案件。
- 指摘 **17** (#61 tl predicate-initial 語順) — tl の `ay` 有無方針確定要。
- 指摘 **23** (#21 ar_eg `هاتعشى` 融合動詞) — denominal verb は lexical 1 トークン、text 変更要。

### 蓋然指摘 (round 2 候補、本ラウンドは見送り)

- 指摘 **20** (Sinitic #34 `[B:慢X]` → `[D:慢] [B:X]` for yue/zh_song/wuu/nan) — 蓋然、reference 揃え vs sibling 揃えの方針確定後に round 2。
- 指摘 **21** (#41 fa `[F:یک کتاب جالب]` → 3 letter 分割) — 【確実】指摘だが round-1 task 指定 7 件外。round 2 で適用予定。
- 指摘 **25** (#61 id `[D:datang ke rapat]` → `[E:datang] [D:ke rapat]`) — 蓋然、ms-id sibling 整合の方向確認後 round 2。
- 指摘 **7** (#61 uk `[C:запізнюється]` → `[E:...]` relabel) — 蓋然、ru モデル合わせの是非を確定後 round 2。

### 整合性確認 (許容指摘、修正不要)

- 指摘 **12** (#41 fr `[B:en ce moment]` 3-token 句) — Romance Adv の lexical 句、許容。
- 指摘 **13** (#41 es_mx `[B:ahorita]`) — 方言 lexical 差、許容。
- 指摘 **14** (letter D 二回出現、非隣接) — `feedback_no_adjacent_same_segments.md` 非抵触、許容。
- 指摘 **18 / 19** (ja/ko 方言の頻度副詞 letter B 統一) — sibling 整合確認済、合格。
- 指摘 **24** (Romance/Slavic denominal `dine`) — 言語タイプ依存、許容。

### 出力

- **JSON**: `/tmp/lm_edits_53.json` (round 1, 8 edits, op="replace", 全件 display 保持)
- **data.js**: 本ラウンドでは **未変更** (dev は edits JSON 出力のみ、applier が後段で適用)

---
