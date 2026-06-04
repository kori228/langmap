# LangMap データレビュー #97 — Spatial relation (前置詞/後置詞・空間関係) cross-cutter audit

## レビュアー自己紹介 (ペルソナ)

**Lior Tsamir-Wagenaar (`@spatial_adposition`)**, Tel Aviv University 言語学系 博士 (論文:「The Semantics of Locative Adpositions: A Typological Study of IN / ON / AT across 60 Languages」)、 Max Planck Institute for Psycholinguistics (Nijmegen) *Categories Across Languages* 客員研究員、National Institute for Japanese Language and Linguistics (国立国語研究所) 外来研究員として ja に / で / から、ko 에 / 에서 / 한테 の locative/dative cline を実証研究。常用典拠は **Levinson & Wilkins *Grammars of Space* (Cambridge 2006)**、**Svorou *The Grammar of Space* (Benjamins 1994)**、**Talmy *Toward a Cognitive Semantics: Vol. I Concept Structuring Systems* (MIT 2000) ch.3 (Path & Place)**、**Cinque & Rizzi *Mapping Spatial PPs: The Cartography of Syntactic Structures* (OUP 2010)**、**Kuno *The Structure of the Japanese Language* (MIT 1973) §5.5 (locative ni vs de)**、**Sohn *The Korean Language* (Cambridge 1999) §6.4 (case particles)**、**Li & Thompson *Mandarin Chinese: A Functional Reference Grammar* (UC Press 1981) ch.11 (locative phrases)**、**Comrie *The World's Major Languages* (Routledge 2nd ed. 2009) 各章 locative system 節**、**Hagège *Adpositions* (OUP 2010)**。最も確信を持って判定できるのは **(a) ja 「に」(static location with stative verb / goal of motion / dative) vs 「で」(activity location / instrument)、(b) ko 「에」(static / goal / time) vs 「에서」(activity / source)、(c) Sinitic 把-coverb / 在-coverb / 到-coverb の H-role 一貫性、(d) Celtic VSO で発生する `Tá` (copula) と意味動詞の非隣接同一 role の policy 制約、(e) Germanic 完了助動詞 + ptcp 分割の role 割り当て、(f) Turkic 3sg copula `dır/dyr/دۇر` の cross-sibling 一貫性** の 6 領域。

本ラウンドのスコープは **「前置詞/後置詞/格屈折で表現される空間関係を含む sentence」**。data.js を全 100 文走査し、空間 adposition / 位置動詞 / locative case のいずれかが palette role に直接対応する 23 文 (#1 / #6 / #11 / #14 / #15 / #23 / #25 / #29 / #36 / #38 / #43 / #46 / #49 / #52 / #53 / #63 / #66 / #67 / #72 / #73 / #95 / #96 / #97) を対象。

#49 既存 review (article/definiteness) と spatial が重複する場合は spatial 側の指摘に絞り、definiteness 系は重複しない。#82-C 既知 deferred policy (Celtic VSO `Tá ... ag/yn V-ing` 二重 C/B role) と #83-A (JA/KO 心理動詞 voice) はこれ以上 cell 単位 fix にしないこと宣言済みのため本ラウンド対象外。本ラウンドは **「(α) 非隣接同一 role による palette 違反 (前置詞・coverb・完了助動詞の re-tag)、(β) Sinitic 古典/吴語/方言での 把/將 coverb の H-role 一貫化、(γ) Turkic 3sg 連辞 `D:` の cross-sibling 補填、(δ) palette 内 modifier 融合 (e.g., `B:new bridge` の new 欠落)、(ε) script 内冠詞・指示詞 role 二重貼り (hu az)」** を新規 actionable として摘出する。

## 検証範囲

- **#1 / #11 / #15 / #23 / #25 / #43 / #97** の Romance / Germanic / Slavic / Sinitic / Turkic / Indic で前置詞 role が独立 letter として palette 化されているケース全件
- **#29 / #46 / #52 / #67 / #72 / #73 / #95 / #96** の ja 「に/で」、ko 「에/에서」、zh 「在/把/到」、Sinitic 古典 「於/將」 一貫性
- **#97 (behind station)** Turkic 系 6 言語 (tr/az/uz/ky/kk/tk/ug/mn) の D 連辞 cross-sibling 補完
- **#73 (cat on bed)** ka / ps の possessive 二重 E 重複
- **#11 / #29** Germanic 完了 (have/het/haben) と past participle の C 重複 vs Romance H-aux 分離パターン整合

## 指摘事項 (Issues found)

### 1. #1 ja — `H:で H:た` 非隣接同一 role、`た` は過去テンス標識で動詞へ吸着すべき 【確実】
**Current:** A:私は K:ホテルの J:向かいの I:お店 H:で G:見 H:た D:スーツを C:試着 B:したいです
**Problem:** ja セルの role 配列で **H が 2 回出現** (`H:で` = 場所助詞、`H:た` = 過去 -ta)。`た` は動詞 `見` の bound past suffix で、独立 morpheme ではあるが意味は `G:saw` (見た = saw) と一体。H = 「で (in)」と意味重複する別 role に再貼付すべき。同データ #1 の他言語 (en `G:saw`, tr `G:gördüğüm`, ru `G:я увидел`) では 「過去動詞」を **1 segment** に集約する。`feedback_no_adjacent_same_segments` の非隣接拡張で defect。
**Proposed fix:** `た` を G に吸収して G:見た 1 segment 化。テキストは保持。
```json
{"id":1,"lang":"ja","op":"replace","segments":[["A","私は"],["K","ホテルの"],["J","向かいの"],["I","お店"],["H","で"],["G","見た"],["D","スーツを"],["C","試着"],["B","したいです"]],"finding":"non-adjacent same H; merge た into G:見た"}
```
確信度【確実】(Kuno 1973 §5.5 + 非隣接同一-role policy)。

### 2. #14 en_sg — `C:take ... C:go` 非隣接 C 二重 (serial verb 構造の splittable 化要) 【確実】
**Current:** A:I C:take D:train C:go B:work E:every day
**Problem:** Singapore English (en_sg) は contact-induced **serial-verb 影響** で「take train go work」と動詞 2 個連鎖 (Bao 2005 *The structure of Singapore English* §4 serial verb)。palette の C は単一動詞 role と想定されているため C を 2 回使うと visualization 上の defect。`take train` (means of transport, instrumental coverb) は典型的 H-role (zh `H:把` / `H:在` と同類) で、`go` を C 本動詞に残すのが Sinitic 系と整合する。
**Proposed fix:** `take` を H に再貼付、`go` を C に残す。
```json
{"id":14,"lang":"en_sg","op":"replace","segments":[["A","I"],["H","take"],["D","train"],["C","go"],["B","work"],["E","every day"]],"finding":"serial-verb take retagged H, go stays C"}
```
確信度【確実】(非隣接同一-role + Sinitic-contact serial verb 解釈)。

### 3. #15 zh_tang — `D:正 ... D:焉` 非隣接 D 二重 (progressive 副詞と文末詠嘆助辞の同一 role) 【確実】
**Current:** A:家妹 D:正 B:於法蘭西 C:遊學 D:焉
**Problem:** Tang-era Classical Chinese (zh_tang) の `正` (progressive adverbial "currently") と `焉` (sentence-final 詠嘆/語気) は完全に異なる文法カテゴリーだが同 D に貼付されている。`焉` は Classical Chinese での sentence-final 語気 particle (Pulleyblank *Outline of Classical Chinese Grammar* 1995 §15)、`正` は副詞修飾 (Wang Li 1980 §progressivity)。`feedback_no_adjacent_same_segments` 非隣接拡張で同一 D が 2 度出現するのは defect。
**Proposed fix:** `焉` を新規 letter (E) に分離。
```json
{"id":15,"lang":"zh_tang","op":"replace","segments":[["A","家妹"],["D","正"],["B","於法蘭西"],["C","遊學"],["E","焉"]],"finding":"split sentence-final 焉 into E"}
```
確信度【確実】(古典中国語 grammatical category 区別)。

### 4. #23 zh_tang — `D:在 ... D:焉` 非隣接 D 二重 (#15 と同型) 【確実】
**Current:** A:書閣 D:在 C:醫館之 B:畔 D:焉
**Problem:** 指摘 3 と同型。`在` (location copula) と `焉` (語気 particle) を同 D に貼付。`feedback_cross_sibling_role_consistency` で zh_han `A:書府 D:在 C:醫舍 B:側` は語気辞なしで clean、zh_tang のみ末尾 `焉` が D に融合して非隣接 D 重複。
**Proposed fix:** `焉` を E に分離。
```json
{"id":23,"lang":"zh_tang","op":"replace","segments":[["A","書閣"],["D","在"],["C","醫館之"],["B","畔"],["E","焉"]],"finding":"split sentence-final 焉 into E"}
```
確信度【確実】。

### 5. #29 zh_song — `C:把 ... C:忘在` 非隣接 C 二重 (BA-coverb の H-role 再貼付) 【確実】
**Current:** A:我 C:把 B:傘 C:忘在 D:車上了
**Problem:** Mandarin 把-construction の `把` は **disposal coverb** で本動詞ではない (Li & Thompson 1981 §15 BA-construction)。同データ #29 zh / zh_sc / zh_db では全て `H:把` で本動詞 `C:忘在/忘到/落` と明確に role 分離している。zh_song のみ `把` を C に貼付し本動詞 `忘在` と非隣接同一 role 衝突。`feedback_cross_sibling_role_consistency` で Sinitic family の 把-coverb は H が canonical。
**Proposed fix:** `把` を H に再貼付。テキスト不変。
```json
{"id":29,"lang":"zh_song","op":"replace","segments":[["A","我"],["H","把"],["B","傘"],["C","忘在"],["D","車上了"]],"finding":"BA-coverb 把 should be H not C; align with zh/zh_sc/zh_db"}
```
確信度【確実】(BA-construction 文法 + sibling 一貫性)。

### 6. #29 zh_tang — `C:將 ... C:遺忘於` 非隣接 C 二重 (JIANG-coverb 同型) 【確実】
**Current:** A:余 C:將 B:傘 C:遺忘於 D:車中矣
**Problem:** 指摘 5 と同型。Classical Chinese `將` は disposal coverb で、Mandarin 把 の literary 対応 (Pulleyblank 1995 §11.4)。本動詞 `遺忘於` (forgot-at) と異なる文法カテゴリー。zh_han #29 `A:吾 B:傘 C:遺於 D:車上` は disposal coverb なしの canonical 古典構造を採用、zh_tang のみ JIANG-construction を採用したが coverb role 分離が漏れている。
**Proposed fix:** `將` を H に再貼付。
```json
{"id":29,"lang":"zh_tang","op":"replace","segments":[["A","余"],["H","將"],["B","傘"],["C","遺忘於"],["D","車中矣"]],"finding":"JIANG-coverb 將 should be H not C; parallel to BA-coverb"}
```
確信度【確実】。

### 7. #66 zh_han — `C:為 ... C:所蔽也` 非隣接 C 二重 (被動構文 wei-suo の coverb 分離) 【蓋然】
**Current:** A:山 C:為 B:雪 C:所蔽也
**Problem:** Classical Chinese passive `為 X 所 V` 構文の `為` は **agent-marking coverb** (Pulleyblank 1995 §15.2 passive)、`所蔽也` (covered) は本動詞 + 結句 particle 也。両者は文法カテゴリー異なるが同一 C 貼付で非隣接重複。同データ #66 zh では `C:被 ... D:覆盖` (被-coverb は C、本動詞は D) と分離されており、zh_han も `為` を別 letter に貼付して role 衝突を回避すべき。 同型 zh_tang `C:為 ... C:所覆矣` も同一 issue (指摘 8)。
**Proposed fix:** `為` を H に再貼付して passive coverb を明示。
```json
{"id":66,"lang":"zh_han","op":"replace","segments":[["A","山"],["H","為"],["B","雪"],["C","所蔽也"]],"finding":"wei-suo passive coverb 為 retagged H"}
```
確信度【蓋然】(古典文法解釈、独立 letter 採用が望ましい)。

### 8. #66 zh_tang — `C:為 ... C:所覆矣` 同型 (指摘 7 と同パターン) 【蓋然】
**Current:** A:山嶺 C:為 B:白雪 C:所覆矣
**Problem:** 指摘 7 と同型。
**Proposed fix:**
```json
{"id":66,"lang":"zh_tang","op":"replace","segments":[["A","山嶺"],["H","為"],["B","白雪"],["C","所覆矣"]],"finding":"wei-suo passive coverb 為 retagged H"}
```
確信度【蓋然】。

### 9. #73 ka — `E:ჩემი ... E:ჩემს` 非隣接 E 二重 (所有代名詞の二度貼り) 【確実】
**Current:** E:ჩემი A:კატა G:ყოველ C:ღამე E:ჩემს B|F:საწოლზე D:სძინავս
**Problem:** Georgian (ka) で `ჩემი` (1sg.gen "my") と `ჩემს` (1sg.dat "my") はいずれも 1sg possessive で同 role に貼付。前者は `კატა` (cat) の修飾、後者は `საწოლზე` (bed-on) の修飾だが、palette の E (= "my" 所有形容詞、両 NP の所有を一括) を二度使うのは非隣接同一 role 違反。比較: #73 en `E:my A:cat ... F:on B:my bed` で `my` は 1 回しか E に出ない (NP-2 の "my" は B 内に吸収)、ja/ko/fr/it/de/ru/es/uk 全て E は 1 回。
**Proposed fix:** 二度目の `ჩემს` を B に吸収 (B|F:ჩემს საწოლზე) してテキスト保持。
```json
{"id":73,"lang":"ka","op":"replace","segments":[["E","ჩემი"],["A","კატა"],["G","ყოველ"],["C","ღამე"],["B|F","ჩემს საწოლზე"],["D","სძინავს"]],"finding":"non-adjacent same E; merge 2nd possessive into B|F"}
```
確信度【確実】(`_omission_guidelines.md` 非隣接 role 重複 + cross-sibling 一貫性)。

### 10. #73 ps — `E:زما ... E:زما` 非隣接 E 二重 (Pashto 同型、ka と同パターン) 【確実】
**Current:** E:زما A:پیشو G:هره C:شپه E:زما F:په B:بستره D:ویده کیږي
**Problem:** Pashto (ps) `زما` (1sg.GEN "my") が 2 回出現し E に二度貼付。`my cat` の `my` (1 番目) と `my bed` の `my` (2 番目) の意味だが、ka と同様 palette E は所有形容詞役を 1 回しか想定していない。 同データ #73 ur `E:میری A:بلی ... B:میرے بستر` (ur は E 1 回、B 内に NP-2 possessive 吸収) と inconsistent。
**Proposed fix:** 2 番目の `زما` を B に吸収。
```json
{"id":73,"lang":"ps","op":"replace","segments":[["E","زما"],["A","پیشو"],["G","هره"],["C","شپه"],["F","په"],["B","زما بستره"],["D","ویده کیږي"]],"finding":"non-adjacent same E; merge 2nd زما into B"}
```
確信度【確実】(cross-sibling ur と整合)。

### 11. #43 hu — `A:az ... A:az` 非隣接 A 二重 (定冠詞 az を 2 度 A に貼付) 【確実】
**Current:** D:Ennek A:az E:étteremnek A:az B:étele C:finom
**Problem:** Hungarian で定冠詞 `az` が 2 度出現。1 つ目は `Ennek az étteremnek` (this DEM-DAT the restaurant-DAT) の demonstrative-supporting article、2 つ目は `az étele` (its food, lit. "the food") の定冠詞。両者とも文法的に必須だが、`A` role に二度貼るのは非隣接同一 role 違反。比較: #43 fr `B:La nourriture A:dans D:ce E:restaurant` で定冠詞 La は B 内吸収、ar `B:الطعام A:في D:هذا E:المطعم` で定冠詞 ال は B/E 内吸収。
**Proposed fix:** 1 番目 az を D に吸収 (D:Ennek az — demonstrative+article 一体)、2 番目 az を B に吸収 (B:az étele)。テキスト不変。
```json
{"id":43,"lang":"hu","op":"replace","segments":[["D","Ennek az"],["E","étteremnek"],["B","az étele"],["C","finom"]],"finding":"non-adjacent same A; merge articles into D/B"}
```
確信度【確実】(definite article は文法上 NP 内吸収が canonical、同データ #1/#11 で hu も A 重複なし)。

### 12. #72 ur — `B:ایک نیا D:پل بنایا` の `پل` (橋) が D に融合 【確実】
**Current:** A:انہوں نے C:ندی پر B:ایک نیا D:پل بنایا
**Problem:** EN reference `B:a new bridge D:built` で `bridge` (橋) は B、`built` (建てた) は D。ur では `پل بنایا` (橋-建てた) が D に貼付され、B には冠詞 + 修飾 `ایک نیا` (一つの新しい) のみ残る。EN の B 「a new bridge」の核名詞 `bridge` が落ちている (palette gap)。`_omission_guidelines.md` A.2 (主目的語) で defect。同データ #72 hi `A:उन्होंने C:नदी पर B:एक नया पुल D:बनाया` (核名詞 पुल は B に保持) と inconsistent。
**Proposed fix:** `پل` を B に移動。
```json
{"id":72,"lang":"ur","op":"replace","segments":[["A","انہوں نے"],["C","ندی پر"],["B","ایک نیا پل"],["D","بنایا"]],"finding":"core noun پل moved from D to B"}
```
確信度【確実】(`_omission_guidelines.md` A.2 + cross-sibling hi 整合)。

### 13. #72 km — `B:ស្ពាន C:ថ្មី លើទន្លេ` の `ថ្មី` (new) が C に融合 【確実】
**Current:** A:ពួកគេ D:បានសាងសង់ B:ស្ពាន C:ថ្មី លើទន្លេ
**Problem:** EN reference の `B:a new bridge` で `new` は B 内 modifier。Khmer (km) では `ស្ពាន` (bridge) のみ B に置かれ、`ថ្មី` (new) は C (場所句 `លើទន្លេ` over river) と融合。`new` は core meaning modifier ( `_omission_guidelines.md` A.7 「意味を変える量化詞」 類例) で C 内融合は palette role 違反。同データ #72 hi `B:एक नया पुल`、vi `B:một cây cầu mới`、it `B:un nuovo ponte` 全て B 内に `new` 保持。
**Proposed fix:** `ថ្មី` を B に移動して B:ស្ពានថ្មី、C は `លើទន្លេ` (over river) のみ。
```json
{"id":72,"lang":"km","op":"replace","segments":[["A","ពួកគេ"],["D","បានសាងសង់"],["B","ស្ពានថ្មី"],["C","លើទន្លេ"]],"finding":"modifier ថ្មី merged into B with core noun"}
```
確信度【確実】(cross-sibling 整合 + 修飾語 B 内保持)。

### 14. #97 kk — D 連辞 (3sg copula) palette gap 【確実】
**Current:** A:Супермаркет C:бекеттің B:артында
**Problem:** #97 palette は A,B,C,D を含み、`D = is/locates`。Turkic family の sibling tr `D:dır`、az `D:dır`、uz `D:joylashgan`、ky `D:жайгашкан` は全て D 連辞を埋めるが、kk のみ palette gap。Kazakh 3sg present copula は `-дыр / -дір` で口語/書面で省略可能だが、本データの cross-sibling 整合性原則 (`feedback_cross_sibling_role_consistency`) と「存在文」(behind X) の述語明示性から D 補填が望ましい。
**Proposed fix:** D:дыр (もしくは中立的 `D:тұр` 立つ/位置する)。
```json
{"id":97,"lang":"kk","op":"replace","segments":[["A","Супермаркет"],["C","бекеттің"],["B","артында"],["D","тұр"]],"finding":"missing D copula; cross-Turkic-sibling consistency"}
```
確信度【確実】(Turkic sibling family 一貫性)。

### 15. #97 tk — D 連辞 palette gap (#97 kk と同型) 【確実】
**Current:** A:Supermarket C:stansiýanyň B:arkasynda
**Problem:** Turkmen (tk) も #97 で D 連辞が欠落。同 sibling tr/az/uz/ky/mn いずれも D を持つ。Turkmen 3sg copula は `-dyr` または `dur` (Clark 1998 *Turkmen Reference Grammar* §3.2 copula)。
**Proposed fix:** D:dyr。
```json
{"id":97,"lang":"tk","op":"replace","segments":[["A","Supermarket"],["C","stansiýanyň"],["B","arkasynda"],["D","dyr"]],"finding":"missing D copula; cross-Turkic-sibling consistency"}
```
確信度【確実】。

### 16. #97 ug — D 連辞 palette gap (Uyghur 同型) 【確実】
**Current:** A:سۇپېرماركېت C:بېكەتنىڭ B:ئارقىسىدا
**Problem:** Uyghur (ug) も #97 で D 連辞欠落。Uyghur 3sg copula は `دۇر` (Tömür 2003 *Modern Uyghur Grammar* §4.5 copula) — sibling Turkic と整合。
**Proposed fix:** D:دۇر。
```json
{"id":97,"lang":"ug","op":"replace","segments":[["A","سۇپېرماركېت"],["C","بېكەتنىڭ"],["B","ئارقىسىدا"],["D","دۇر"]],"finding":"missing D copula; cross-Turkic-sibling consistency"}
```
確信度【確実】。

### 17. #25 mt — D `kumpanija` (company) が F に融合、palette gap 【確実】
**Current:** A:Missieri E:jaħdem B:f' F:kumpanija kbira
**Problem:** #25 palette は A,B,C,D,E,F で `D = company` 核名詞、`F = big` 修飾。Maltese (mt) では `kumpanija kbira` (company big) が F に一体貼付され、D 「company」が palette gap。`_omission_guidelines.md` A.2 (主目的語/主題語) で defect。同データ Romance sibling it `D:azienda F:grande` (D core + F modifier 分離)、es_eu `F:gran D:empresa`、sq `D:kompani F:të madhe`、ckb `F:کۆمپانیایەکی D:گەورە`、ig `F:nnukwu D:ụlọ ọrụ` 全て D を独立確保。
**Proposed fix:** D:kumpanija と F:kbira を分離。
```json
{"id":25,"lang":"mt","op":"replace","segments":[["A","Missieri"],["E","jaħdem"],["B","f'"],["D","kumpanija"],["F","kbira"]],"finding":"core noun D split from F modifier"}
```
確信度【確実】(palette role 設計 + cross-sibling Romance/Albanian 整合)。

### 18. #29 zh_song — `C:把 ... C:忘在` 重複 H-role 再貼付 (指摘 5 とは異なる: palette H 拡張なしで C 衝突解消) 【確実】
**Current:** A:我 C:把 B:傘 C:忘在 D:車上了
**Note:** これは指摘 5 と同件で、ここでは別途独立提示しない (指摘 5 で対処済み)。
*(=指摘 5 重複につき省略)*

### 19. #29 de_at / de_by / nds — Bavarian/Austrian/Low-German 完了形 `hab/hob/heff ... vergessen` の C 二重 (典型 Germanic 完了再貼付) 【蓋然】
**Current (de_at):** A:I C:hab B:mein Schirm D:in der Bim C:vergessen
**Current (de_by):** A:I C:hob B:mein Regenschirm D:im Zug C:vergessn
**Current (nds):** A:Ik C:heff B:mien Regenschirm D:in'n Tog C:vergeten
**Problem:** 3 言語とも完了助動詞 (hab/hob/heff) と過去分詞 (vergessen/vergessn/vergeten) を両方 C に貼付し、非隣接同一 C 重複。同データ #29 fr `C:ai oublié`、it `C:ho dimenticato`、pt_eu `C:esqueci-me`、ru `C:забыл` 全て **完了形 1 segment 化** で C 1 回貼付。標準 de `C:habe ... C:vergessen` も同 issue (#29 de 自体も同型: 指摘 20)。本データの Germanic 完了 split policy が未確立で、Romance/Slavic と inconsistent。
**Proposed fix:** 助動詞 hab/hob/heff を C から D に再貼付し本動詞 (vergessen等) を C に残す (Romance H-aux に対応する記述粒度)。または palette 拡張で完了助動詞用 letter を新設。最小修正案として D (modal/aux) 再貼付を推奨。
```json
{"id":29,"lang":"de_at","op":"replace","segments":[["A","I"],["D","hab"],["B","mein Schirm"],["E","in der Bim"],["C","vergessen"]],"finding":"perfect aux hab→D; ptcp stays C; reuse E for location"}
```
**Note:** location segment が D だった (`D:in der Bim`) ため再利用は palette 拡張が必要。**policy_deferred 候補** として記載 — 単一 cell fix では完結しない。
確信度【蓋然】(Germanic 完了 split policy 全体に影響、要 owner 判断)。

### 20. #29 de / nl / de_gsw / af — 同型 Germanic 完了 split (cross-family policy item) 【蓋然】
**Current (de):** A:Ich C:habe B:den Regenschirm D:im Zug C:vergessen
**Current (nl):** A:Ik C:heb B:mijn paraplu D:in de trein C:vergeten
**Current (de_gsw):** A:Ich C:ha B:min Rägeschirm D:im Zug C:vergässe
**Current (af):** A:Ek C:het B:my sambreel D:op die trein C:vergeet
**Problem:** 指摘 19 と同型。de / nl / de_gsw / af / yi 全て完了助動詞 + 過去分詞を非隣接 C 二重に貼付。
**Proposed fix:** 指摘 19 と同方針 (`feedback_no_adjacent_same_segments` 非隣接拡張に基づき助動詞 D 化、本動詞 C 維持)。policy_deferred として bundling を提案。
```json
{"id":29,"lang":"de","op":"replace","segments":[["A","Ich"],["D","habe"],["B","den Regenschirm"],["E","im Zug"],["C","vergessen"]],"finding":"perfect aux habe→D; bundle with #19 policy"}
```
確信度【蓋然】(family-wide policy)。

### 21. #97 mg — `aorianan'` (behind) の locative D が前置詞 prefix と化し B/C 境界曖昧 【蓋然】
**Current:** D:Ao B:aorianan' C:ny gara A:ny fivarotana lehibe
**Problem:** Malagasy (mg) の `aorianan'` (= behind, locative postposition) は `ao` (DEM) + `oriana` (back) + `n'` (linker) で構成され、`Ao aorianan' ny gara` (DEM behind-LINKER the station) で B-role 「behind」と C-role 「station」を結ぶ役割を担う。`Ao` を独立 D に貼り B に `aorianan'` を貼るのは正当だが、`Ao` は実は demonstrative ではなく locative copula (Keenan & Polinsky 1998 *Malagasy* §6 locative) で、本データの他 mg 文 (#23 `D:Eo`、#36 mg 不在、#63 `A:eny amin'ny`) で D の使い方が一貫しない。同データ #23 mg `D:Eo B:akaikin' C:ny hopitaly A:ny tranomboky` で B が locative postposition (akaikin' = near) のみ、D が locative copula (Eo = at-DEM) のみ、と分離されているのと整合する。本セル #97 mg は OK だが、`Ao aorianan'` 全体を D に統合する方が canonical (Polinsky 1998)。**要検討**として記載、現状維持も許容。
**Proposed:** policy 確認のみ、cell 直接 fix なし。
確信度【蓋然】(Malagasy 文法解釈 + cross-sentence 一貫性、cell 単独では verdict 不可)。

### 22. #67 ko_yb — palette 内 D 連辞 `D:이수다` / `D:있슴다` の register drift 検査 (空間 location-existential) 【参考】
**Current (#23):** A:도서관은 C:의원 B:옆에 D:있슴다
**Current (#97):** A:상점은 C:역 B:뒤에 D:있슴다
**Problem:** ko_yb (Yanbian Korean) は connegative 形 `‌슴다` を使う northeastern Korean dialect (Kwon 2014 *연변조선어 연구* §3 formal speech)。 空間 location-existential 動詞 `있다` の `‌슴다` 形は 100 文中ほぼ全例 (cf. #23、#97 とも `있슴다`) で一貫しており **defect ではない** が、ko_jeju の `이수다`、ko_bus の `있다` との対比で **register 系列が安定** していることを確認。actionable なし。
確信度【参考】(検証目的、actionable なし)。

### 23. #11 sq — `F:të ri ... F:dje` 非隣接 F 二重 (形容詞修飾と時間副詞が同 F) 【確実】
**Current:** A:Unë C:bleva D:një E:libër F:të ri B:në librari F:dje
**Problem:** Albanian (sq) で `të ri` (= new, 形容詞 NP-modifier、E:libër の修飾) と `dje` (= yesterday, 時間副詞) が同 F に貼付され非隣接 F 重複。`new` は同データ #11 で全言語 D-role (`D:a new`、`D:新しい`、`D:نئی`) または D-modifier。sq の `të ri` は F ではなく D に貼付すべき (palette 設計上 F = yesterday 時間副詞)。
**Proposed fix:** `të ri` を D に再貼付 (もしくは E:libër と一体化)。テキスト不変。
```json
{"id":11,"lang":"sq","op":"replace","segments":[["A","Unë"],["C","bleva"],["D","një të ri"],["E","libër"],["B","në librari"],["F","dje"]],"finding":"adjective të ri retagged D not F"}
```
確信度【確実】(palette role 設計 + cross-sibling cross 検査)。

### 24. #11 pap — `D:un ... D:nobo` 非隣接 D 二重 (冠詞と形容詞両方を D に貼付) 【確実】
**Current:** A:Mi C:a kumpra D:un E:buki D:nobo B:na e libreria F:ayera
**Problem:** Papiamento (pap) `un` (= a, 不定冠詞) と `nobo` (= new, 形容詞) を両方 D に貼付。EN reference #11 で `D:a new` (冠詞+形容詞 1 segment)、Sinitic 等は `D:一本` (量詞)、ja `D:新しい` のみ。pap の場合 NP は `un buki nobo` で post-N 形容詞だが、palette 設計上 D = 「a new」 1 segment が canonical。
**Proposed fix:** `un` と `nobo` を D 1 segment 統合: D:un ... nobo (連続でないが 1 NP 内 modifier)、または最小修正で `un` を D に残し `nobo` を E に吸収 (E:buki nobo)。後者推奨。
```json
{"id":11,"lang":"pap","op":"replace","segments":[["A","Mi"],["C","a kumpra"],["D","un"],["E","buki nobo"],["B","na e libreria"],["F","ayera"]],"finding":"post-N adjective nobo merged into E with head N"}
```
確信度【確実】(palette role 一貫性、cross-sibling cross 整合)。

### 25. #97 mg — `B:aorianan' C:ny gara A:ny fivarotana lehibe` の word-order 配列で A が cell 末尾 【参考】
**Current:** D:Ao B:aorianan' C:ny gara A:ny fivarotana lehibe
**Problem:** Malagasy は VOS 言語で、主語 (A) が文末に来るのが正常。本セルの配列は VOS の事実を反映しており **defect ではない** が、同データ #23 mg / #38 mg も VOS で同じ末尾 A パターンを取り一貫している。検証結果 actionable なし、参考記録。
確信度【参考】。

## Summary

- **File path**: `/home/jounlai/langmap/langmap_reviews/97_open.md`
- **Issue count**: 25 entries (23 actionable + 2 verify-only)
  - **Confirmed actionable**: 17 (指摘 1, 2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 23, 24)
  - **Probable actionable**: 4 (指摘 7, 8, 19, 20 — Germanic 完了 policy + Classical Chinese wei-suo passive)
  - **要検討 / 参考**: 4 (指摘 18 重複表示, 21 mg, 22 ko_yb, 25 mg VOS)
- **Dominant defect themes**:
  1. **Non-adjacent same role-letter** (12 cases): ja #1 H, zh_song/zh_tang/zh_han C/D (3 cases), Germanic 完了 aux+ptcp split (de/nl/de_gsw/af/de_at/de_by/nds = 7 cases) — particularly Sinitic disposal/passive coverb (`把/將/為`) which should be re-tagged H, plus Germanic perfect auxiliary which should be re-tagged D (or palette-extended).
  2. **Turkic 3sg D-copula cross-sibling gap** (3 cases: kk/tk/ug in #97) — sibling tr/az/uz/ky/mn all have D filled; missing entries are systematic.
  3. **Core noun fused into wrong role** (2 cases: ur #72 پل, mt #25 kumpanija) — `_omission_guidelines.md` A.2 violation.
  4. **NP-internal modifier fused into wrong role** (3 cases: km #72 ថ្មី, sq #11 të ri, pap #11 nobo) — `new` qualifier misplaced.
  5. **Possessive double-marking violation** (2 cases: ka #73, ps #73) — `my` re-attached to a second NP rather than merged into B.
  6. **Definite article double role** (1 case: hu #43 az) — both occurrences tagged A; should be merged into adjacent D/B.
- **Dominant defect (single)**: **Non-adjacent same role-letter** caused by analytic verb constructions (Sinitic coverb 把/將/為, Germanic perfect aux + ptcp) where palette role design has a 1-letter-1-role assumption.

---

## Dev response — round 1 (2026-06-04)

レビュアー @spatial_adposition 様、ありがとうございます。25 件の指摘 (23 actionable + 2 verify-only) を精査し、actionable 全件を採択しました。

**JSON**: `/tmp/lm_edits_97.json` (26 edits, dry-run 26/26 applied, 0 failed)

### 着地した指摘 (landed — 確実 17 + 蓋然 9 = 26 セル)

#### α. 非隣接同一 role の解消 (Sinitic coverb 把/將/為)

1. **#29 zh_song** — `C:把 ... C:忘在` → `H:把 B:傘 C:忘在` (BA-coverb を H 化、sibling zh/zh_sc/zh_db と整合)
2. **#29 zh_tang** — `C:將 ... C:遺忘於` → `H:將 ... C:遺忘於` (JIANG-coverb 同型、Pulleyblank 1995 §11.4)
3. **#66 zh_han** — `C:為 ... C:所蔽也` → `H:為 ... C:所蔽也` (wei-suo passive coverb、確信度 蓋然→採択)
4. **#66 zh_tang** — `C:為 ... C:所覆矣` → `H:為 ... C:所覆矣` (同型)

#### β. 非隣接同一 role の解消 (Classical Chinese 文末語気辞)

5. **#15 zh_tang** — `D:正 ... D:焉` → `D:正 ... E:焉` (`焉` を新 E に分離、Pulleyblank §15)
6. **#23 zh_tang** — `D:在 ... D:焉` → `D:在 ... E:焉` (同型、sibling zh_han 整合)

#### γ. 非隣接同一 role の解消 (ja H、en_sg C)

7. **#1 ja** — `H:で G:見 H:た` → `H:で G:見た` (過去 -ta を G に吸収、`feedback_no_character_level_split.md` 動詞語幹+語尾 = 1 segment 適用)
8. **#14 en_sg** — `C:take ... C:go` → `H:take ... C:go` (serial-verb の道具 coverb を H 化、Bao 2005)

#### δ. Germanic 完了 aux+ptcp split (蓋然 → 採択、family policy 採用)

レビュアー提案通り、完了助動詞を D、本動詞 (過去分詞) を C、場所句を E に再配分。palette 拡張 E が必要だが apply2 が自動拡張する。

9. **#29 de** — `D:habe ... C:vergessen E:im Zug` (Romance H-aux 分離パターンと整合)
10. **#29 nl** — `D:heb ... C:vergeten E:in de trein`
11. **#29 de_gsw** — `D:ha ... C:vergässe E:im Zug`
12. **#29 af** — `D:het ... C:vergeet E:op die trein`
13. **#29 de_at** — `D:hab ... C:vergessen E:in der Bim`
14. **#29 de_by** — `D:hob ... C:vergessn E:im Zug`
15. **#29 nds** — `D:heff ... C:vergeten E:in'n Tog`

#### ε. Turkic 3sg D-copula 補填 (cross-sibling gap)

16. **#97 kk** — `+ D:тұр` (Kazakh locative copula、sibling tr/az/uz/ky/mn と整合)
17. **#97 tk** — `+ D:dyr` (Clark 1998 §3.2)
18. **#97 ug** — `+ D:دۇر` (Tömür 2003 §4.5)

#### ζ. 核名詞/修飾語の role 移動 (palette gap / 修飾語融合)

19. **#72 ur** — `B:ایک نیا D:پل بنایا` → `B:ایک نیا پل D:بنایا` (核名詞 پل を B に、sibling hi 整合)
20. **#72 km** — `B:ស្ពាន C:ថ្មី លើទន្លេ` → `B:ស្ពានថ្មី C:លើទន្លេ` (`new` 修飾語を B に)
21. **#25 mt** — `F:kumpanija kbira` → `D:kumpanija F:kbira` (核名詞 D 独立、Romance sibling 整合)
22. **#11 sq** — `E:libër F:të ri` → `E:libër të ri` (NP-internal `të ri` を E 内吸収、F は時間副詞 dje のみ)
23. **#11 pap** — `E:buki D:nobo` → `E:buki nobo` (post-N 形容詞を E 内吸収)

#### η. 所有/冠詞 二重貼り解消

24. **#73 ka** — `E:ჩემი ... E:ჩემს` → `E:ჩემი ... B|F:ჩემს საწოლზე` (2nd possessive を B|F に吸収)
25. **#73 ps** — `E:زما ... E:زما` → `E:زما ... B:زما بستره` (2nd زما を B に吸収、F:په 維持)
26. **#43 hu** — `A:az ... A:az` → `D:Ennek az ... B:az étele` (定冠詞 2 回を隣接 D/B に吸収、`feedback_priority_not_keep_reason.md` 適用)

### 部分受諾 / 検討のみ (verify-only)

- **指摘 21 (#97 mg)**: Malagasy `Ao aorianan'` を D に統合する案は cross-sentence policy に関わるため本ラウンド deferred。現状維持。
- **指摘 22 (#67 ko_yb register check)**: actionable なし、参考記録 (`있슴다` register 安定確認)。
- **指摘 25 (#97 mg VOS 末尾 A)**: defect ではなく Malagasy VOS の正常表出、参考記録のみ。
- **指摘 18**: 指摘 5 と重複表示、独立 entry なし。

### 適用範囲ノート

- すべての coverb 再貼付 (Sinitic 把/將/為、en_sg take) は `allowTextChange:false` (テキスト不変)。
- ja#1, ka#73, hu#43, sq#11, pap#11, ur#72, mt#25 も `allowTextChange:false` (語順保持、grouping 変更のみ)。
- km#72, ps#73, Turkic#97×3, Germanic#29×7 は `allowTextChange:true` (新セグメント追加 or 語順微調整あり)。
- palette 拡張: #29 (de/nl/de_gsw/af/de_at/de_by/nds) で E 新設、#15/#23 zh_tang で E 新設、#97 (kk/tk/ug) で D 新設 — apply2 の auto-extend が対応。

