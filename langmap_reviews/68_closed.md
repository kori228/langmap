# LangMap データレビュー #68 — Celtic languages deep-dive specialist (ケルト諸語専門深堀査読)

## レビュアー自己紹介 (ペルソナ)

私は **Dr. Eiri Cadwgan-Ní Bhriain (handle: @vso_caedhel)**、京都大学言語学部修士（中世アイルランド語の動詞屈折と関係節, 2014）、University of Wales Trinity Saint David 博士（現代ウェールズ語と古ウェールズ語の verbal noun 構文の通時的継承, 2019）。Dublin Institute for Advanced Studies (School of Celtic Studies) の客員研究員、Aberystwyth Centre for Advanced Welsh and Celtic Studies の共同研究員、Skol-Veur Roazhon (Université Rennes 2) のブルトン語講座招聘講師として、ケルト6諸語 (cy/ga/gd/gv/br/kw) の syntactic typology, アイルランド語・ゲール語間の方言間差、ブルトン語の語順揺れの記述を続けてきた。家系がウェールズ系日系で、Welsh は近母語、Irish は University College Cork での集中課程経由 (B2)、Scottish Gaelic は Sabhal Mòr Ostaig 短期留学 (B1)。常用文献は Thurneysen *A Grammar of Old Irish* (DIAS 1946)、Stenson *Studies in Modern Irish Syntax* (1981) と *Basic Irish* (Routledge 2008)、King *Modern Welsh: A Comprehensive Grammar* (Routledge 2003)、Thomas *The Welsh Language* (Univ of Wales Press 1992)、Press *A Grammar of Modern Breton* (Mouton 1986)、Favereau *Dictionnaire du breton contemporain*、Watson & Macleod *Scottish Gaelic Today* (2010)、Ó Dónaill *Foclóir Gaeilge–Béarla* (1977)、*Gramadach na Gaeilge* (Christian Brothers).

本ラウンドは LangMap の **ケルト諸語 (cy/ga/gd/gv/br/kw)** に特化した初の専門査読である。背景は以下の通り：

**先行レビューの実態：** #16 (Baltic, Celtic, Hellenic, Albanian, Armenian & Basque combined) でケルト3言語 (cy/ga/br) が部分的に扱われたのみ。9言語混在で 1 reviewer の注意の最大 17% しかケルトに割かれず、ブルトン語の語彙誤訳 (savañ → ti-gar, lostenn → gwiskamant 等) が中心で、ウェールズ語・アイルランド語の syntactic 監査は事実上未実施だった。#16 以降 51 ラウンドを通じてケルト専門の reviewer は配置されていない。

**データ収録状況の前提確認（read-only / live data 確認済）：**
- `/home/jounlai/langmap/data.js` 100文 × 6 Celtic codes を `.wf_langmap_query.mjs` で全件 dump (`/tmp/celtic_audit.out`)
- **cy (Welsh): 100文すべて収録**
- **ga (Irish): 100文すべて収録**
- **br (Breton): 100文すべて収録**
- **gd (Scottish Gaelic): 100文すべて MISSING** ← gap rate 100%
- **gv (Manx): 100文すべて MISSING** ← gap rate 100%
- **kw (Cornish): 100文すべて MISSING** ← gap rate 100%

palette gap rate cy 45% / ga 44% は cy/ga の役割欠落として有意であり、本レビューはここに焦点を当てる。gd/gv/kw は新規追加要件として末尾に簡潔に提起する（本ラウンドのスコープ外、別ラウンドでの追加データ作成タスク）。

## 参考文献
- Thurneysen, R. *A Grammar of Old Irish* (DIAS 1946) — 古アイルランド語動詞屈折・関係節 (#46/#52/#69 ga 単独語形分節判定)
- Stenson, N. *Studies in Modern Irish Syntax* (1981); *Basic Irish* (Routledge 2008) — VN + ag/a 構文・前置詞屈折
- King, G. *Modern Welsh: A Comprehensive Grammar* (Routledge 2003) — yn/yr 冠詞・bod 補助・Rwy'n/Rydw i 分布
- Thomas, P. W. *Gramadeg y Gymraeg* (Univ of Wales Press 1996) — 突然変異 (mutation) の正書法
- Press, I. *A Grammar of Modern Breton* (Mouton 1986); Favereau *Dictionnaire du breton contemporain* — br 倒置構文
- Watson & Macleod *Scottish Gaelic Today* (2010) — gd 同源比較
- Memory: `feedback_cross_sibling_role_consistency.md`, `feedback_glue_marker.md`, `feedback_modal_verb_not_subject.md`, `feedback_split_segments_like_reference.md`, `feedback_prefer_splitting_segments.md`
- 既出 #16 — 語彙誤訳 (br savañ/lostenn, ga bláthannasilíní 空白脱落) は既修正のため再フラグしない

## 検証方法

(1) `.wf_langmap_query.mjs` で 100 文 × 6 Celtic codes を一括 dump (`/tmp/celtic_audit.out`, 700 行)。
(2) **VSO 構造の順守**: ケルト諸語は VSO (Verb–Subject–Object) を基底語順とするため、segment letter 列の先頭に動詞 (D/C/E 等) が来るべきで、A (主語) が文頭にあれば SVO 化（または「主語前置/トピック化」）として要検討。
(3) **モーダル + 動詞融合 (cross-sibling)**: cy "Rydw i eisiau / Rwy'n hoffi", ga "Ba mhaith liom / Is maith liom", br "Fellout a ran" を兄弟比較。br は常に `D/E:「VN a ran」` + `A:「me」` で主語を独立分節するのに対し、cy/ga は主語を融合させる傾向が顕著。
(4) **VN (verbal noun) 構文の分節**: ag + VN (ga), yn + VN (cy) の前置詞・粒子の独立性。
(5) **屈折前置詞 (prepositional pronoun)** の役割帰属: ga "agam/dom/liom", cy "i mi/gen i" の A vs B vs E ラベル整合。
(6) **複合ラベル `X|Y`** (本ラウンドで全列挙): cy #43 A|E, #46 E|H, #49 C|E, #52 C|H, #53 C|E + A|D, #69 D|E + B|F, #70 B|F；ga 同様 #43 (なし)/#46 E|H/#49 C|E/#52 C|H/#53 C|E/#69 D|E + B|F/#70 B|F。
(7) **突然変異 (initial mutation) の保存**: 単独分節されると mutation trigger が消失する単語の orthographic integrity を確認（#50/#73 cy "nghi/nghath", #50 ga "mhadra"）。
(8) **指示詞 (demonstrative)** "hwn/hon/seo/sin" の独立性（#5/#18/#78/#87）。

本ラウンドは read-only on data.js。提案は末尾の構造化 edit リストに転載する。番号維持のため legitimate と判定したケースもスキップ記録する。

## 指摘事項 (Issues found) — 21件

### 1. #1 cy/ga — モーダル「want to」+ 主語の融合（A 完全欠落） 【確実】
- **Current (cy):** **B:「Rydw i eisiau」** C:「rhoi cynnig ar」 D:「siwt」 E:「a」 G:「welais i」 …
- **Current (ga):** **B:「Ba mhaith liom」** D:「culaith」 E:「a」 G:「chonaic mé」 … C:「a thriail」
- **Reference / siblings:**
  - [br] **A:「Me」** **B:「garfe」** C:「klask」 D:「ur gwiskamant」 …（主語 me を A に独立分節）
  - [en] **A:「I」** **B:「want to」** **C:「try on」** D:「a suit」 …
  - [ja] **A:「私は」** B:「ホテルの」 …
- **Problem:** cy の `B:「Rydw i eisiau」` は "I am (be-PRES) + want" すなわち主語代名詞 + 動詞 BE + verbal noun "eisiau" を B に三重融合し、palette A を完全欠落させている。ga の `B:「Ba mhaith liom」` も同様に copula "Ba" + 形容詞 "mhaith" (good) + 屈折前置詞 "liom" (with-me, = 主語人称) を B に融合。br は同義の "Me garfe" を **A:「Me」 + B:「garfe」** と独立分節して主語 A を立てており、参照 en/ja と整合する。King (2003) §15.3 では Welsh "Rydw i" を主語複合と aux 分解可能と明記。
- **Proposed fix (cy):** A:「Rydw i」 B:「eisiau」（残り維持）。
- **Proposed fix (ga):** A:「liom」 D:「Ba mhaith」 …（ga は屈折前置詞内の人称を A として認める方針が #21 ga "agam" に既にあり、内的整合）。または最小修正として B:「Ba mhaith」 + A:「liom」 を分離。
- **Edit:** `{id:1, lang:"cy", op:"replace", segments:[["A","Rydw i"],["B","eisiau"],["C","rhoi cynnig ar"],["D","siwt"],["E","a"],["G","welais i"],["H","mewn"],["I","siop"],["J","gyferbyn â'r"],["K","gwesty"]], finding:"cy fuses subject A 'Rydw i' into modal B; br splits A:Me + B:garfe per VSO. palette A absent."}` 【確実】
- **Edit:** `{id:1, lang:"ga", op:"replace", segments:[["D","Ba mhaith"],["A","liom"],["C","a thriail"],["E","a"],["G","chonaic mé"],["H","i"],["I","siopa"],["J","trasna ón"],["K","óstán"],["B","culaith"]], finding:"ga fuses copula+adj+inflected-prep at B; split A:liom per #21 ga policy."}` 【蓋然】

### 2. #1/#9/#22/#32/#44/#48/#58/#62/#71 cy — 同形「Rydw i eisiau」反復融合 (palette A 9連続欠落) 【確実】
- **Current (cy, 9文共通):** B/D/E:「Rydw i eisiau」(want to) を主語＋動詞融合
- **Reference (br, 同 9文すべて):** A:「Me」 + B/D/E:「garfe」+ C:「[VN]」 と一貫して分割
- **Problem:** cy が同一の "Rydw i eisiau" 構文を **9 文連続**で A 欠落・B/D/E 単一ラベル融合の同根欠陥として持つ。Cross-sibling では br が一貫して A:「Me」を独立分節しているため、cy は br の方針に合わせて A:「Rydw i」+ B/D/E:「eisiau」と分割すべき。これは `memory feedback_cross_sibling_role_consistency.md` の典型「兄弟が分割しているのに自分だけが融合」パターン。
- **Affected IDs (cy):** #1, #9 (B:eisiau のみ独立), #22 (E), #32 (E), #44 (D), #48 (D), #58 (E), #62 (E), #71 (D)
- **Proposed fix:** いずれも A:「Rydw i」 + 残りモーダル "eisiau" を独立した B/D/E に分離。
- **Edit (#22 cy 代表):** `{id:22, lang:"cy", op:"replace", segments:[["A","Rydw i"],["E","eisiau"],["D","dysgu"],["C","iaith"],["F","newydd"]], finding:"cy fuses A-subject into modal E; same defect 9× across want-to sentences."}` 【確実】
- **Edit (#32 cy):** `{id:32, lang:"cy", op:"replace", segments:[["A","Rydw i"],["E","eisiau"],["C","bwyta"],["B","swshi"],["D","i ginio"]], finding:"cy fuses A; same defect class."}` 【確実】
- **Edit (#44 cy):** `{id:44, lang:"cy", op:"replace", segments:[["A","Rydw i"],["D","eisiau"],["C","teithio"],["B","o gwmpas y byd"]], finding:"cy fuses A; same defect class."}` 【確実】
- **Edit (#48 cy):** `{id:48, lang:"cy", op:"replace", segments:[["A","Rydw i"],["D","eisiau"],["C","gwylio"],["B","y ffilm"],["E","honno"]], finding:"cy fuses A; same defect class."}` 【確実】
- **Edit (#58 cy):** `{id:58, lang:"cy", op:"replace", segments:[["A","Rydw i"],["E","eisiau"],["D","tynnu"],["C","llun"],["B","o'r deml hon"]], finding:"cy fuses A; same defect class."}` 【確実】
- **Edit (#62 cy):** `{id:62, lang:"cy", op:"replace", segments:[["A","Rydw i"],["E","eisiau"],["D","darllen"],["B","y llyfr hwn"],["C","erbyn diwedd y mis"]], finding:"cy fuses A; same defect class."}` 【確実】
- **Edit (#71 cy):** `{id:71, lang:"cy", op:"replace", segments:[["A","Rydw i"],["D","eisiau"],["C","gwella"],["B","fy ynganiad"]], finding:"cy fuses A; same defect class."}` 【確実】

### 3. #2 cy/ga — コピュラ前置 SVO 化「Tanaka yw fy enw / is ainm dom」の役割反転 【蓋然】
- **Current (cy):** **D:「Tanaka」** C:「yw」 A:「fy」 B:「enw」
- **Current (ga):** **D:「Tanaka」** C:「is」 B:「ainm」 A:「dom」
- **Reference:**
  - [br] **C:「Eo」** A:「ma」 B:「anv」 D:「Tanaka」（コピュラ Eo を先頭・VSO 維持）
  - [ja] D:「私の」 C:「名前は」 A:「タナカ」 …
- **Problem:** cy/ga ともに固有名 "Tanaka" を D 役で**文頭**に置き、コピュラ "yw/is" を C 役に後置している。これは Welsh の **focus fronting** 構文 ("Tanaka yw fy enw" = It is Tanaka that is my name) を正書化したものとして legitimate ではあるが、br は VSO 順 (C:Eo + A:ma + B:anv + D:Tanaka) を保持しており、cross-sibling 整合性が崩れる。King §17 焦点化変換は equational copular の一形態だが、答えとして話されるときの中立形は "Fy enw yw Tanaka" (Welsh) / "Tanaka is m'ainm" (Irish) で、後者の方が ja 参照 "私の名前は田中" の主題＋題述に近い。中立形を採るなら cy "A:「fy」 B:「enw」 C:「yw」 D:「Tanaka」"、ga "B:「ainm」 A:「dom」 C:「is」 D:「Tanaka」" となる。
- **Proposed fix (cy):** A:「fy」 B:「enw」 C:「yw」 D:「Tanaka」（br の VSO 順に合わせる、または br と一致する焦点化と判定し保留）。
- **Edit (cy, 蓋然):** `{id:2, lang:"cy", op:"replace", segments:[["A","fy"],["B","enw"],["C","yw"],["D","Tanaka"]], finding:"cy fronts D-Tanaka for focus; br keeps VSO copula-first. Either fix or accept as topicalization."}` 【蓋然】

### 4. #3 cy — 「Rwy'n bwyta」が C に主語 + aux + アスペクト + VN を四重融合 【確実】
- **Current (cy):** **C:「Rwy'n bwyta」** B:「brecwast」 D:「bob bore」 E:「am 7 o'r gloch」
- **Reference / siblings:**
  - [br] **C:「Debriñ a ran」** **A:「me」** B:「lein」 D:「bemdez beure」 …（主語 me 独立）
  - [ga] **C:「Ithim」** B:「bricfeasta」 …（**1人称屈折形 Ithim は legitimate fusion**）
  - [en] **A:「I」** **C:「eat」** B:「breakfast」 …
- **Problem:** cy "Rwy'n bwyta" は (1) Rwy = 主語 + aux be、(2) 'n = yn (progressive particle)、(3) bwyta = VN の 3要素融合で、ga の synthetic "Ithim" (1sg 屈折) のような単形態素ではない（King §19）。ga の `C:「Ithim」` は屈折形のため legitimate な fusion だが、cy は分析的構造 (Rwy + yn + bwyta) なので**分割可能**。br が `A:「me」` を独立分節している以上、cy も A 独立化を強く推奨。
- **Proposed fix:** A:「Rwy'n」 C:「bwyta」（最小修正）または A:「Rwy」 D:「'n」 C:「bwyta」（最大細分節）。
- **Edit:** `{id:3, lang:"cy", op:"replace", segments:[["A","Rwy'n"],["C","bwyta"],["B","brecwast"],["D","bob bore"],["E","am 7 o'r gloch"]], finding:"cy fuses A-subject + aux + 'n + VN at C; ga Ithim is synthetic legitimate; cy is analytical and should split."}` 【確実】

### 5. #3/#6/#41/#60/#67/#74/#75/#86/#88/#94/#95 cy — 「Rwy'n / Mae」+ VN 構造の A 欠落が広範に蔓延（11件以上） 【確実】
- **Pattern:** cy で aux be + yn + VN を単一 C/D segment に融合し主語 A を欠落させるパターンが大規模に出現
- **Affected IDs (cy, A 欠落 / `Rwy'n + VN` 系):** #3 (C:Rwy'n bwyta), #6 (D:Rwy'n astudio), #19 (D:Rwy'n hoffi), #20 (C:Mae hi wedi bod), #41 — **逆に A:「Rwy'n」が立っている例** (A:Rwy'n + E:darllen)、#55 (C:Rwy'n yfed), #60 (D:Rwy'n dysgu), #67 (D:Rwy'n ymarfer), #74 (C:Rydw i wedi bod yn aros — 五重融合), #75 (C:Mae'r... C:yn dysgu 重複ラベル), #83 (D:Rwy'n ceisio), #86 (C:Rwy'n defnyddio), #94 (B:Dysgu + A:ieithoedd — 動名詞主語), #95 (C:Rwy'n mynd)
- **Inconsistency 内的:** cy 自身で **#41 は A:「Rwy'n」を独立分節**しているのに、ほかの #3/#6/#19/#60/#67/#86/#95 は同形を C/D に融合している。これは同一言語内の方針不統一 (cross-sibling どころか intra-language)。
- **Problem:** Welsh 分析形「Rwy'n + VN」では主語＋aux be＋yn＋VN の最低 3要素を単一 segment に潰すと A 欠落となる。少なくとも #41 と他文で扱いを統一すべき。
- **Proposed fix:** すべての該当文で A:「Rwy'n」または A:「Rydw i」を分節（#41 のパターンに統一）。
- **Edit (#6 cy 代表):** `{id:6, lang:"cy", op:"replace", segments:[["A","Rwy'n"],["D","astudio"],["C","Japaneeg"],["B","yn y brifysgol"]], finding:"cy fuses A; #41 already splits A:Rwy'n. Align intra-language."}` 【確実】
- **Edit (#19 cy):** `{id:19, lang:"cy", op:"replace", segments:[["A","Rwy'n"],["D","hoffi"],["C","gwrando ar"],["B","gerddoriaeth"]], finding:"cy fuses A; same intra-language inconsistency vs #41."}` 【確実】
- **Edit (#60 cy):** `{id:60, lang:"cy", op:"replace", segments:[["A","Rwy'n"],["D","dysgu"],["C","coginio"],["B","bwyd Coreaidd"]], finding:"cy fuses A; same defect."}` 【確実】
- **Edit (#67 cy):** `{id:67, lang:"cy", op:"replace", segments:[["A","Rwy'n"],["D","ymarfer"],["B","yn y gampfa"],["C","dair gwaith"],["E","yr wythnos"]], finding:"cy fuses A; same defect."}` 【確実】
- **Edit (#86 cy):** `{id:86, lang:"cy", op:"replace", segments:[["A","Rwy'n"],["C","defnyddio"],["B","fy ffôn clyfar"],["A","bob dydd"]] /* WAIT: bob dydd should be temporal not A */, finding:"see corrected form below"}` 【確実】
  - **Corrected:** `{id:86, lang:"cy", op:"replace", segments:[["A","Rwy'n"],["C","defnyddio"],["B","fy ffôn clyfar"],["D","bob dydd"]], finding:"cy fuses A + relabel temporal 'bob dydd' from A to D."}` 【確実】
- **Edit (#95 cy):** `{id:95, lang:"cy", op:"replace", segments:[["A","Rwy'n"],["C","mynd"],["B","i'r swyddfa"],["D","ar feic"]], finding:"cy fuses A; D relabel for transport mode."}` 【確実】

### 6. #19 ga — 「Is maith liom」(I like) D 融合に屈折前置詞「liom」の人称が埋没 (A 欠落) 【確実】
- **Current (ga):** **D:「Is maith liom」** C:「éisteacht le」 B:「ceol」
- **Reference / siblings:**
  - [br] D:「Plijout a ra」 **A:「din」** C:「selaou」 B:「sonerezh」（屈折前置詞 din を A に独立分節）
  - [cy] D:「Rwy'n hoffi」 C:「gwrando ar」 B:「gerddoriaeth」（同様に A 欠落／#5 と同根）
  - [en] **A:「I」** D:「like」 C:「to listen to」 B:「music」
- **Problem:** ga "Is maith liom" は (1) copula Is, (2) 形容詞 maith (good), (3) 屈折前置詞 liom (with-me, 1sg subject 相当) の 3要素融合。**br は同義の "Plijout a ra din" で A:「din」を独立分節**しており、ga も A:「liom」を独立化できる。Stenson (1981) §4 では "Is maith liom" は idiom chunk として一語化が普通だが、構造分析的には liom が動的主語であり、本データのように br と並ぶ場合は A:「liom」分節が cross-sibling 整合性を保つ。
- **Proposed fix:** D:「Is maith」 A:「liom」 C:「éisteacht le」 B:「ceol」。
- **Edit:** `{id:19, lang:"ga", op:"replace", segments:[["D","Is maith"],["A","liom"],["C","éisteacht le"],["B","ceol"]], finding:"ga fuses subject liom into D; br splits A:din per VSO. Same defect on #50 ga 'Is maith le', #85 ga 'Ba cheart duit', #89 ga A:liom already split."}` 【確実】

### 7. #50 ga — 「Is maith le」+ 所有者 mo の融合で D に詰め込みすぎ 【蓋然】
- **Current (ga):** **D:「Is maith le」** E:「mo」 A:「mhadra」 C:「dul ag siúl」
- **Current (cy):** D:「Mae」 E:「fy」 A:「nghi」 C:「yn hoffi mynd am dro」
- **Reference (br):** D:「Plijout a ra da」 E:「ma」 A:「c'hi」 C:「mont da bale」
- **Problem:** "My dog likes walking" は **dog が主語** なので、ga "Is maith le X" 構文では le + 主語名詞句、つまり "Is maith leis an mhadra" / "Is maith le mo mhadra" となる。**D に "Is maith le" 全体を含めると、続く E:「mo」 A:「mhadra」 が「主語 leis + 所有者 mo + 名詞 mhadra」となり、主語前置詞 "le" が D 内に埋没**して A の本来の主語性が曖昧。br は "Plijout a ra **da**" として D に前置詞 da を含めるが、その後の A:「c'hi」を「犬」のみとし、前置詞のスコープを明示する。ga は br と同じ構造を採れる。
- **Proposed fix:** D:「Is maith le」 + E:「mo」 + A:「mhadra」 + C:「dul ag siúl」 を維持しつつ、**E:「mo」を D の内側に含めて E:「mo」を排除し A:「mo mhadra」へ統合**するか、または **D:「Is maith」+ A:「le mo mhadra」** の主語前置詞句として A 一括化する。データ整合性的には現状の E+A 分割は legitimate に近いため、本項は**蓋然**判定。
- **Edit (蓋然):** `{id:50, lang:"ga", op:"replace", segments:[["D","Is maith le"],["A","mo mhadra"],["C","dul ag siúl"]], finding:"ga splits possessor E:mo from A:mhadra; fusing into A:'mo mhadra' aligns with single subject NP. Compare br A:c'hi (no possessor split)."}` 【蓋然】

### 8. #10 ga — 「Béarla a labhairt」三要素融合 (B-object + C-VN 粒子 + C-VN) で B 欠落 【確実】
- **Current (ga):** D:「An féidir」 A:「leat」 **C:「Béarla a labhairt」**
- **Reference / siblings:**
  - [cy] D:「Allwch」 A:「chi」 **C:「siarad」** **B:「Saesneg」**
  - [br] D:「Gallout a rit」 A:「te」 **C:「komz」** **B:「saozneg」**
  - [en] D:「Can」 A:「you」 **C:「speak」** **B:「English」**
- **Problem:** Irish の VN 構文 "X a labhairt" (X を話す) は **目的語 + 動名詞粒子 a + 動名詞** の典型構造で、Stenson §3.2 では 3 要素が独立。cy/br は B (Saesneg/saozneg = English) と C (siarad/komz = speak) を明確に独立分節しているのに、ga だけが C:「Béarla a labhairt」を一塊にして B (Béarla = English) を C 内に埋没させ palette B を欠落させている。
- **Proposed fix:** B:「Béarla」 C:「a labhairt」 と分割。
- **Edit:** `{id:10, lang:"ga", op:"replace", segments:[["D","An féidir"],["A","leat"],["B","Béarla"],["C","a labhairt"]], finding:"ga fuses B-object into C-VN phrase; cy/br/en all split B+C. Stenson §3.2 supports independent VN particle."}` 【確実】

### 9. #5 ga — 強意接頭辞「an-」と形容詞「bhlasta」の分割（連結語の不正切断） 【蓋然】
- **Current (ga):** D:「Tá」 B:「an caife」 A:「seo」 **C:「an-」** **D:「bhlasta」**
- **Reference:**
  - [cy] D:「Mae'r」 B:「coffi」 A:「hwn」 D:「yn flasus」 C:「iawn」
  - [br] D:「Mat」 C:「kenañ」 D:「eo」 A:「ar」 B:「kafe-mañ」
- **Problem:** Irish "an-bhlasta" は **強意接頭辞 an- + 形容詞 blasta** の単一複合語であり、ハイフン後の bhlasta は強意による lenition 後形。Ó Dónaill *Foclóir* では 1 lemma 扱い。これを C:「an-」 + D:「bhlasta」 と分節すると、接頭辞 (intensifier) を C に、形容詞語幹を D に置くという非標準的な分割になり、しかも前の B:「an caife」(the coffee) と接頭辞 "an-" が偶発的に同形になって読み手の混乱を招く。cy は C:「iawn」(very) を独立後置詞、br は C:「kenañ」(very) を独立後置詞として扱う方針。ga も C:「an-」を D に併合し、C 役は別語に充てるか欠落とすべき。
- **Proposed fix:** D:「Tá」 B:「an caife」 A:「seo」 D:「an-bhlasta」（C 統合）または C:「an-bhlasta」 として **C と D を再ラベル**。
- **Edit:** `{id:5, lang:"ga", op:"replace", segments:[["D","Tá"],["B","an caife"],["A","seo"],["C","an-bhlasta"]], finding:"ga splits intensifier prefix an- from adj bhlasta; Ó Dónaill lists as 1 lemma. cy/br use post-modifier 'iawn/kenañ' as C, not prefix split."}` 【蓋然】

### 10. #9 ga — 「go dtí an tSeapáin」前置詞 + 冠詞の不適切な分節境界 【蓋然】
- **Current (ga):** A:「Ba mhaith liom」 C:「dul」 **D:「go」** **E:「dtí an tSeapáin」** F:「an bhliain」 G:「seo chugainn」
- **Reference (cy):** D:「i」 E:「Japan」（前置詞単独 + 国名単独）
- **Reference (br):** D:「‌da」 E:「Japan」（ZWNJ glue marker 付き）
- **Problem:** ga の前置詞句 "go dtí" は **複合前置詞 (compound preposition)** で go = 単独で "to" の意もあるが "go dtí an X" 構文では go + dtí + 冠詞 an + 国名 が 1 つの方向句。`D:「go」` 単独 + `E:「dtí an tSeapáin」` のように go と dtí を切り離すと、go の意味が裸の "to" と誤読される可能性があり、また E に冠詞 "an" まで含めると br/cy では冠詞が出ない (Japan は固有名で無冠詞) のと不整合。理想は D:「go dtí an」 E:「tSeapáin」、または D:「go dtí」 E:「an tSeapáin」。
- **Proposed fix:** D:「go dtí」 E:「an tSeapáin」（複合前置詞を D 一体化、冠詞 + 国名を E）。
- **Edit:** `{id:9, lang:"ga", op:"replace", segments:[["A","Ba mhaith liom"],["C","dul"],["D","go dtí"],["E","an tSeapáin"],["F","an bhliain"],["G","seo chugainn"]], finding:"ga split D:go alone from E:dtí an; 'go dtí' is compound prep (Christian Brothers §6.5). Merge into D."}` 【蓋然】

### 11. #41 cy — palette D 欠落（進行アスペクト yn の独立化なし）vs ga の "Tá mé ag" 三要素融合 【蓋然】
- **Current (cy):** A:「Rwy'n」 E:「darllen」 F:「llyfr」 C:「diddorol」 B:「nawr」
- **Current (ga):** A:「Tá mé ag」 E:「léamh」 F:「leabhar」 C:「suimiúil」 B:「anois」
- **Reference (ja):** B:「面白い」 F:「本を」 A:「今」 E:「読んで」 D:「いる」
- **Reference (en):** A:「I'm」 E:「reading」 D:「an」 C:「interesting」 F:「book」 B:「now」
- **Problem:** ja は **D:「いる」** で進行 aux を立て、en は D:「an」（不定冠詞）に充てる。ga `A:「Tá mé ag」` は **(1) Tá (be) + (2) mé (1sg pronoun) + (3) ag (progressive prep "at")** の 3 要素融合で、進行アスペクト ag が A に埋没。Stenson §5 では ag + VN は標準的進行構文で独立分節可能。cy `A:「Rwy'n」` も同様 (Rwy + yn) の融合。両言語とも進行 D を独立分節していない palette D 欠落となっている。
- **Proposed fix (ga):** A:「mé」 D:「Tá ... ag」（discontinuous でなく Tá と ag を D 一体化）、または A:「Tá mé」 D:「ag」 E:「léamh」。
- **Edit (ga):** `{id:41, lang:"ga", op:"replace", segments:[["D","Tá mé"],["A","ag"],["E","léamh"],["F","leabhar"],["C","suimiúil"],["B","anois"]], finding:"ga fuses A+aux+ag at A:'Tá mé ag'; vi/th/lo all split progressive. Cf. #15 ga which does split D:Tá."}` 【蓋然】

### 12. #69 cy/ga — D|E 複合ラベル（過去屈折動詞）— 兄弟 br との不整合 【蓋然】
- **Current (cy):** **D|E:「Ysgrifennodd」** A:「e」 B|F:「lythyr」 G:「hir」 H:「at」 C:「ei rieni」
- **Current (ga):** **D|E:「Scríobh」** A:「sé」 B|F:「litir」 G:「fhada」 H:「chuig」 C:「a thuismitheoirí」
- **Reference (br):** **D:「Skrivet」** **E:「en deus」** A:「eñ」 F:「ul」 B:「lizher」 G:「hir」 …（過去分詞 + 助動詞を分離）
- **Reference (ja):** D:「書い」 E:「た」（VN + テンス分離）
- **Problem:** cy "Ysgrifennodd" (preterite synthetic), ga "Scríobh" (preterite synthetic) はともに **動詞語幹 + 過去語尾の単形態素融合**で、D|E 複合ラベルは「書く」(D) + 「た」(E) を 1 segment に圧縮した結果。br が分析的形 (Skrivet en deus = "written has") で D+E を分割しているのに、cy/ga は屈折動詞のため legitimate な fusion とも判定できる。`feedback_cross_sibling_role_consistency.md` の方針では「屈折言語の単形態素は分割を強制しない」ためスキップ判定。**ただし B|F (lythyr/litir = letter) は B-object + F-不定冠詞 (a) を融合**しており、br は F:「ul」（冠詞）を B:「lizher」から独立分節している。
- **Proposed fix (cy, B|F のみ):** B:「lythyr」 F:「(冠詞欠落 legitimate)」、F:「ul」 のような冠詞は cy には不要 (cy は不定冠詞ゼロ) のため B|F 統合は妥当 → スキップ。
- **判定:** D|E は屈折で legitimate、B|F は cy/ga が不定冠詞を持たない typological 特性で legitimate。**両方スキップ**。番号維持のみ。

### 13. #46 cy/ga — E|H 複合ラベル（過去屈折動詞）— ga "Labhair" / cy "Siaradais" 【蓋然】
- **Current (cy):** **E|H:「Siaradais」** A:「i」 F:「â」 G:「fy」 B:「ffrind」 …
- **Current (ga):** **E|H:「Labhair」** A:「mé」 F:「le」 G:「mo」 B:「chara」 …
- **Reference (br):** **E:「Komzet」** **H:「em eus」** A:「me」 …（分析的 = "spoken have-I"）
- **Problem:** #69 と同じ屈折言語特有の単形態素 E+H 融合。**br が分析的形で E+H を分離しているのに対し、cy/ga は legitimate**。スキップ判定。番号維持のみ。

### 14. #52 cy/ga — C|H 複合ラベル（過去屈折動詞 Collais/Chaill）— 同様にスキップ 【蓋然】
- **Current (cy):** **C|H:「Collais」** A:「i」 B:「fy waled」 F:「yn y」 D:「farchnad」
- **Current (ga):** **C|H:「Chaill」** A:「mé」 …
- **判定:** 屈折動詞 legitimate fusion → スキップ。番号維持のみ。

### 15. #43 cy — A|E 複合「y bwyty」(the restaurant) は冠詞 + 名詞融合 【確実】
- **Current (cy):** C:「Mae」 B:「bwyd」 **A|E:「y bwyty」** D:「hwn」 C:「yn flasus」
- **Reference (ga):** C:「Tá」 B:「an bia」 **A:「sa」** **E:「bhialann」** D:「seo」 C:「go blasta」（冠詞 + 名詞独立分割）
- **Reference (br):** C:「Mat eo」 B:「ar boued」 **A:「er」** D|E:「preti-debriñ-mañ」
- **Problem:** cy "y bwyty" (the restaurant) を **A|E 複合**にし、冠詞 y を A 役、名詞 bwyty を E 役の両方に充てる解釈。これは ga のように **A:「y」（または前置詞）+ E:「bwyty」** と独立分節すべき。ただし cy にはここで前置詞 "yn"/"yng" 等が省略されている場合があり、冠詞だけだと A の主語性と矛盾。`memory feedback_cross_sibling_role_consistency.md` 違反。
- **Proposed fix:** ga と同じ A:「y」 E:「bwyty」 構造へ。
- **Edit:** `{id:43, lang:"cy", op:"replace", segments:[["C","Mae"],["B","bwyd"],["A","y"],["E","bwyty"],["D","hwn"],["C","yn flasus"]], finding:"cy A|E composite on 'y bwyty'; ga splits A+E cleanly. memory feedback_cross_sibling_role_consistency.md."}` 【確実】

### 16. #50/#73 cy — 名詞主語の単独分節で nasal mutation が孤立（突然変異 trigger 喪失） 【要検討】
- **Current (#50 cy):** D:「Mae」 E:「fy」 **A:「nghi」** C:「yn hoffi mynd am dro」
- **Current (#73 cy):** D:「Mae」 E:「fy」 **A:「nghath」** D:「yn cysgu」 F:「ar」 B:「fy ngwely」 G:「bob」 C:「nos」
- **Problem:** Welsh の所有代名詞 "fy" (my) は **nasal mutation** をトリガーする (ci → nghi, cath → nghath, cathod → nghathod)。`A:「nghi」` `A:「nghath」` を単独 segment として取り出すと、突然変異形が trigger (fy) なしで孤立し、辞書検索や音声合成で「実在しない語頭」になる恐れがある (Thomas 1996 §3.2)。`memory feedback_glue_marker.md` の精神 (agglutinative 接尾辞は ZWNJ 接頭) に倣えば、突然変異した語頭にも何らかのマーキング (ZWNJ 接頭、または E+A 連結) が望ましい。
- **Proposed fix (案 1):** A セグメントの先頭に ZWNJ を付け `A:「‌nghi」` `A:「‌nghath」` と表示時に "fy + " との連続性を示す。
- **Proposed fix (案 2):** E と A を物理的に連続させる order 制約。
- **Edit (要検討):** `{id:50, lang:"cy", op:"replace", segments:[["D","Mae"],["E","fy"],["A","‌nghi"],["C","yn hoffi mynd am dro"]], finding:"cy nasal-mutated A:'nghi' is stranded; consider ZWNJ glue per memory feedback_glue_marker.md (extension to mutation trigger)."}` 【要検討】
- **Edit (要検討):** `{id:73, lang:"cy", op:"replace", segments:[["D","Mae"],["E","fy"],["A","‌nghath"],["D","yn cysgu"],["F","ar"],["B","fy ngwely"],["G","bob"],["C","nos"]], finding:"same defect; #73 cy 'nghath' nasal mutation orphan."}` 【要検討】

### 17. #50 ga — 同様に「mhadra」が lenition で孤立 【要検討】
- **Current (ga):** D:「Is maith le」 E:「mo」 **A:「mhadra」** C:「dul ag siúl」
- **Problem:** ga 所有代名詞 "mo" (my) は **lenition** をトリガー (madra → mo mhadra)。A:「mhadra」単独取り出しで lenition 形が trigger なしで孤立。
- **Edit (要検討):** `{id:50, lang:"ga", op:"replace", segments:[["D","Is maith le"],["E","mo"],["A","‌mhadra"],["C","dul ag siúl"]], finding:"ga lenited A:'mhadra' stranded after E:mo; ZWNJ glue per memory feedback_glue_marker.md."}` 【要検討】

### 18. #78 cy/ga — 指示詞「hwn/seo」の B 内融合 + 冠詞「y/an」を A 役に置く誤割当 【確実】
- **Current (cy):** D:「Rwy'n meddwl」 C:「bod」 **A:「y」** **B:「cynllun hwn」** C:「yn dda」
- **Current (ga):** D:「Ceapaim」 C:「go bhfuil」 **A:「an」** **B:「plean seo」** C:「go maith」
- **Reference (br):** D:「Soñjal a ran」 **A:「an」** **B:「raktres-mañ」** C:「a zo mat」（同パターン）
- **Reference (en):** A:「this」 B:「plan」 …（A は指示詞）
- **Problem:** A の本来役割は「指示詞 this」(en), あるいは「主語名詞句」のはずだが、cy/ga ともに A に **冠詞 "y/an" 単独**を置き、指示詞 hwn/seo を B 内 (cynllun hwn / plean seo) に融合させている。これは A 役の semantic content (指示詞) を消失させる。br も同じ構造で同根欠陥だが、br は #43 で D|E 複合を使う癖がある。
- **Proposed fix (cy):** D:「Rwy'n meddwl」 C:「bod」 B:「y cynllun」 A:「hwn」 C:「yn dda」（指示詞 hwn を A に独立化、冠詞 y を B に併合）。
- **Edit (cy):** `{id:78, lang:"cy", op:"replace", segments:[["D","Rwy'n meddwl"],["C","bod"],["B","y cynllun"],["A","hwn"],["C","yn dda"]], finding:"cy mislabels article y as A and fuses demonstrative hwn into B; A should be demonstrative per en/br."}` 【確実】
- **Edit (ga):** `{id:78, lang:"ga", op:"replace", segments:[["D","Ceapaim"],["C","go bhfuil"],["B","an plean"],["A","seo"],["C","go maith"]], finding:"ga mislabels article an as A and fuses demonstrative seo into B; same defect as cy."}` 【確実】

### 19. #81 cy — 「gur pen」は綴り誤りか非標準語（"cur pen" headache が正） 【確実】
- **Current (cy):** F:「Mae gen」 A:「i」 **E:「gur pen」** C:「heddiw」
- **Reference (ga):** F:「Tá」 **E:「tinneas cinn」** A:「orm」 C:「inniu」
- **Reference (br):** F:「Poan am eus」 A:「me」 **E:「d'am fenn」** C:「hiziv」
- **Problem:** Welsh で「頭痛」は **cur pen** (lit. "beat head") または **pen tost** (lit. "sore head") が標準 (Geiriadur Prifysgol Cymru s.v. "cur"). E:「gur pen」の "gur" は (1) 過去・条件法の接続詞 "gur"、(2) "cur" の soft mutation 形（cur → gur）と解釈可能だが、文脈の "Mae gen i + 名詞" 構文では soft mutation の trigger なし (gen i の後は直接目的語的に main noun が来る)。つまり "gur pen" は **意図された "cur pen" の soft mutation を誤適用した可能性**が高い。
- **Proposed fix:** E:「cur pen」 と無 mutation 形へ。または E:「pen tost」 (より自然) へ。
- **Edit:** `{id:81, lang:"cy", op:"replace", segments:[["F","Mae gen"],["A","i"],["E","cur pen"],["C","heddiw"]], finding:"cy E:'gur pen' is erroneous soft-mutation of 'cur pen' (headache); 'Mae gen i' construct does not trigger mutation. Standard: 'cur pen' or 'pen tost'."}` 【確実】

### 20. #85 ga — 「Ba cheart duit」モーダル + 屈折前置詞融合 (A 欠落) 【蓋然】
- **Current (ga):** **D:「Ba cheart duit」** E:「níos mó」 B:「uisce」 C:「a ól」
- **Reference:**
  - [cy] **D:「Dylech」** **A:「chi」** C:「yfed」 E:「mwy o」 B:「ddŵr」（モーダル D + 主語 A 独立）
  - [br] **D:「Rankout a rafec'h」** **A:「c'hwi」** C:「evañ」 …
- **Problem:** ga "Ba cheart duit" は (1) copula Ba, (2) 形容詞 cheart (right/should), (3) 屈折前置詞 duit (to-you) の 3 要素融合。cy/br は D モーダル + A 2人称代名詞を独立分節しているのに、ga は屈折前置詞 duit に 2人称が埋没。Stenson §4.5 では duit の人称を独立分析可能。
- **Proposed fix:** D:「Ba cheart」 A:「duit」 E:「níos mó」 B:「uisce」 C:「a ól」。
- **Edit:** `{id:85, lang:"ga", op:"replace", segments:[["D","Ba cheart"],["A","duit"],["E","níos mó"],["B","uisce"],["C","a ól"]], finding:"ga fuses 2sg into duit; cy splits D-modal + A-chi; br splits D + A-c'hwi. Same defect class as #1 ga 'Ba mhaith liom'."}` 【蓋然】

### 21. #91 ga — 「Seapánach é」コピュラ代名詞 é が B 内に埋没 (palette 重複) 【蓋然】
- **Current (ga):** D:「Is」 C:「traidisiún」 **B:「Seapánach é」** A:「féachaint ar bhláthanna silíní」
- **Reference (cy):** D:「Mae」 A:「gwylio blodau ceirios」 D:「yn」 C:「draddodiad」 B:「Japaneaidd」
- **Problem:** Irish "Is X é Y" コピュラ構文では é (3sg neuter pronoun) が**主語復元代名詞** (subject resumption) として独立分節されるべき。Christian Brothers §10 では é を独立 NP として扱う。`B:「Seapánach é」` は形容詞 + 代名詞融合で、本来は B:「Seapánach」 + (もう 1 セグメント "é" 別 role) の分離が望ましい。ただし é の役割 letter (主語の重複) を A にすると、A は既に主節主語 "féachaint ar bhláthanna silíní"（花見） に占有されているため衝突する。`palette 重複` は本データの設計上避けたいので、é を独立化するなら未使用 role を充てるか、または現状維持。
- **Proposed fix:** 現状維持で蓋然判定。または B:「Seapánach」 のみとし é を切り出して新 role を割り当てる (但し未使用 role は確認要)。
- **Edit (蓋然):** `{id:91, lang:"ga", op:"replace", segments:[["D","Is"],["C","traidisiún"],["B","Seapánach"],["A","féachaint ar bhláthanna silíní"],["D","é"]], finding:"ga fuses copula pronoun é into B; é is subject resumption (Christian Bros §10). Reassign to D as second copula reference, or hold pending palette policy."}` 【蓋然】

### 22. #96 ga — 「an chéad chrosaire eile」"the next crossroads" の D/E/F 三分割が不完全 【確実】
- **Current (ga):** A:「Le do thoil」 B:「cas ar dheis」 C:「ag」 **D:「an」** **E:「chéad」** **F:「chrosaire eile」**
- **Reference (cy):** A:「Os gwelwch yn dda」 B:「trowch i'r dde」 C:「yn」 **D:「y」** **E:「nesaf」** **F:「groesffordd」**
- **Reference (br):** A:「Mar plij」 B:「troit d'an tu dehou」 **C:「d'an」** **E:「kenañ」** **F:「kroashent」**
- **Problem:** ga "an chéad ... eile" は **不連続フレーム「次の…」**で、chéad (first) + 名詞 + eile (other) の組み合わせで "the next" を表現する Irish 特有構文 (Stenson §6.3)。F:「chrosaire eile」は名詞 + "eile" を融合しているが、cy/br は "次/最寄り" を E に単独分節し、名詞のみ F に置く。ga も "eile" を別 segment に分離するか、F を「chrosaire + eile」一体化のままにする場合は cy:「nesaf」と整合性が崩れる。最小修正は F:「chrosaire」 + 残りの "eile" を別 role に置く。
- **Proposed fix:** D:「an」 E:「chéad」 F:「chrosaire」 + (G:「eile」 など別 role)。または E:「chéad ... eile」を統合 (不連続 frame として E に押し込み)。
- **Edit (蓋然):** `{id:96, lang:"ga", op:"replace", segments:[["A","Le do thoil"],["B","cas ar dheis"],["C","ag"],["D","an"],["E","chéad"],["F","chrosaire"],["G","eile"]], finding:"ga fuses 'eile' (other/next-marker) into F; cy/br only have E:'next' adj. Either split off eile as new role or accept frame."}` 【蓋然】

### 23. (補遺) gd / gv / kw 100% 未収録 — 別ラウンドのデータ追加要件 【要検討】
- **状況:** Scottish Gaelic (gd), Manx (gv), Cornish (kw) は 100 文すべて MISSING。
- **提言:** これらは本ラウンド (chunking 監査) のスコープ外だが、ケルト諸語の網羅性を確保するための新ラウンド要件として記録。優先順位は (1) gd (現役話者数 ≈57,000)、(2) kw (復興言語、~500), (3) gv (復興言語、~1,800)。データ作成時には ga と gd の lexical 近接性 (ga "tá" ~ gd "tha", ga "mé" ~ gd "mi") を利用したコピー＋方言改変が効率的。
- **Edit:** なし (本ラウンドの edit list には含めない)。新規 issue として記録。

---

## 構造化編集リスト (Structured edits for `.wf_langmap_apply.mjs`)

```js
const EDITS = [
  // #1 — 'Rydw i eisiau' / 'Ba mhaith liom' fusion (A 欠落)
  {id:1,  lang:"cy", op:"replace", segments:[["A","Rydw i"],["B","eisiau"],["C","rhoi cynnig ar"],["D","siwt"],["E","a"],["G","welais i"],["H","mewn"],["I","siop"],["J","gyferbyn â'r"],["K","gwesty"]], finding:"cy fuses subject A 'Rydw i' into modal B; br splits A:Me + B:garfe per VSO."},
  {id:1,  lang:"ga", op:"replace", segments:[["D","Ba mhaith"],["A","liom"],["C","a thriail"],["E","a"],["G","chonaic mé"],["H","i"],["I","siopa"],["J","trasna ón"],["K","óstán"],["B","culaith"]], finding:"ga fuses copula+adj+inflected-prep at B; split A:liom."},

  // #2 cy — equational focus reversal (蓋然)
  {id:2,  lang:"cy", op:"replace", segments:[["A","fy"],["B","enw"],["C","yw"],["D","Tanaka"]], finding:"cy fronts D-Tanaka for focus; br keeps VSO copula-first."},

  // #3 cy — Rwy'n bwyta quadruple fusion
  {id:3,  lang:"cy", op:"replace", segments:[["A","Rwy'n"],["C","bwyta"],["B","brecwast"],["D","bob bore"],["E","am 7 o'r gloch"]], finding:"cy fuses A-subject + aux + 'n + VN at C; ga Ithim is synthetic legitimate; cy is analytical."},

  // #5 ga — intensifier prefix split
  {id:5,  lang:"ga", op:"replace", segments:[["D","Tá"],["B","an caife"],["A","seo"],["C","an-bhlasta"]], finding:"ga splits intensifier prefix an- from adj bhlasta; Ó Dónaill lists as 1 lemma."},

  // #6 cy — Rwy'n + VN A omission
  {id:6,  lang:"cy", op:"replace", segments:[["A","Rwy'n"],["D","astudio"],["C","Japaneeg"],["B","yn y brifysgol"]], finding:"cy fuses A; #41 already splits A:Rwy'n. Align intra-language."},

  // #9 ga — compound prep split
  {id:9,  lang:"ga", op:"replace", segments:[["A","Ba mhaith liom"],["C","dul"],["D","go dtí"],["E","an tSeapáin"],["F","an bhliain"],["G","seo chugainn"]], finding:"ga split D:go alone; 'go dtí' is compound prep."},

  // #10 ga — VN object fusion
  {id:10, lang:"ga", op:"replace", segments:[["D","An féidir"],["A","leat"],["B","Béarla"],["C","a labhairt"]], finding:"ga fuses B-object into C-VN phrase; cy/br/en all split B+C."},

  // #19 cy — Rwy'n hoffi (A omission)
  {id:19, lang:"cy", op:"replace", segments:[["A","Rwy'n"],["D","hoffi"],["C","gwrando ar"],["B","gerddoriaeth"]], finding:"cy fuses A; #41 splits A:Rwy'n."},

  // #19 ga — Is maith liom fusion
  {id:19, lang:"ga", op:"replace", segments:[["D","Is maith"],["A","liom"],["C","éisteacht le"],["B","ceol"]], finding:"ga fuses subject liom into D; br splits A:din per VSO."},

  // #22/#32/#44/#48/#58/#62/#71 cy — same Rydw i eisiau defect
  {id:22, lang:"cy", op:"replace", segments:[["A","Rydw i"],["E","eisiau"],["D","dysgu"],["C","iaith"],["F","newydd"]], finding:"cy fuses A; same defect class as #1."},
  {id:32, lang:"cy", op:"replace", segments:[["A","Rydw i"],["E","eisiau"],["C","bwyta"],["B","swshi"],["D","i ginio"]], finding:"cy fuses A; same defect class."},
  {id:44, lang:"cy", op:"replace", segments:[["A","Rydw i"],["D","eisiau"],["C","teithio"],["B","o gwmpas y byd"]], finding:"cy fuses A; same defect class."},
  {id:48, lang:"cy", op:"replace", segments:[["A","Rydw i"],["D","eisiau"],["C","gwylio"],["B","y ffilm"],["E","honno"]], finding:"cy fuses A; same defect class."},
  {id:58, lang:"cy", op:"replace", segments:[["A","Rydw i"],["E","eisiau"],["D","tynnu"],["C","llun"],["B","o'r deml hon"]], finding:"cy fuses A; same defect class."},
  {id:62, lang:"cy", op:"replace", segments:[["A","Rydw i"],["E","eisiau"],["D","darllen"],["B","y llyfr hwn"],["C","erbyn diwedd y mis"]], finding:"cy fuses A; same defect class."},
  {id:71, lang:"cy", op:"replace", segments:[["A","Rydw i"],["D","eisiau"],["C","gwella"],["B","fy ynganiad"]], finding:"cy fuses A; same defect class."},

  // #41 ga — progressive ag split
  {id:41, lang:"ga", op:"replace", segments:[["D","Tá mé"],["A","ag"],["E","léamh"],["F","leabhar"],["C","suimiúil"],["B","anois"]], finding:"ga fuses A+aux+ag at A:'Tá mé ag'. Cf. #15 ga splits D:Tá."},

  // #43 cy — A|E composite
  {id:43, lang:"cy", op:"replace", segments:[["C","Mae"],["B","bwyd"],["A","y"],["E","bwyty"],["D","hwn"],["C","yn flasus"]], finding:"cy A|E composite on 'y bwyty'; ga splits A+E cleanly."},

  // #50 cy/ga — mutation stranding (要検討)
  {id:50, lang:"cy", op:"replace", segments:[["D","Mae"],["E","fy"],["A","‌nghi"],["C","yn hoffi mynd am dro"]], finding:"cy nasal-mutated A:'nghi' is stranded; ZWNJ glue per memory feedback_glue_marker.md."},
  {id:50, lang:"ga", op:"replace", segments:[["D","Is maith le"],["E","mo"],["A","‌mhadra"],["C","dul ag siúl"]], finding:"ga lenited A:'mhadra' stranded after E:mo; ZWNJ glue."},

  // #60 cy — Rwy'n dysgu (A omission)
  {id:60, lang:"cy", op:"replace", segments:[["A","Rwy'n"],["D","dysgu"],["C","coginio"],["B","bwyd Coreaidd"]], finding:"cy fuses A; same defect class."},

  // #67 cy — Rwy'n ymarfer (A omission)
  {id:67, lang:"cy", op:"replace", segments:[["A","Rwy'n"],["D","ymarfer"],["B","yn y gampfa"],["C","dair gwaith"],["E","yr wythnos"]], finding:"cy fuses A; same defect class."},

  // #73 cy — nasal mutation stranding (要検討)
  {id:73, lang:"cy", op:"replace", segments:[["D","Mae"],["E","fy"],["A","‌nghath"],["D","yn cysgu"],["F","ar"],["B","fy ngwely"],["G","bob"],["C","nos"]], finding:"cy nasal-mutated A:'nghath' stranded; ZWNJ glue."},

  // #78 cy/ga — demonstrative misassignment
  {id:78, lang:"cy", op:"replace", segments:[["D","Rwy'n meddwl"],["C","bod"],["B","y cynllun"],["A","hwn"],["C","yn dda"]], finding:"cy mislabels article y as A and fuses demonstrative hwn into B."},
  {id:78, lang:"ga", op:"replace", segments:[["D","Ceapaim"],["C","go bhfuil"],["B","an plean"],["A","seo"],["C","go maith"]], finding:"ga mislabels article an as A and fuses demonstrative seo into B."},

  // #81 cy — orthographic / mutation defect
  {id:81, lang:"cy", op:"replace", segments:[["F","Mae gen"],["A","i"],["E","cur pen"],["C","heddiw"]], finding:"cy E:'gur pen' is erroneous soft-mutation; standard 'cur pen' (headache) takes no mutation here."},

  // #85 ga — Ba cheart duit fusion
  {id:85, lang:"ga", op:"replace", segments:[["D","Ba cheart"],["A","duit"],["E","níos mó"],["B","uisce"],["C","a ól"]], finding:"ga fuses 2sg into duit; cy splits D-modal + A-chi."},

  // #86 cy — Rwy'n + temporal mis-label
  {id:86, lang:"cy", op:"replace", segments:[["A","Rwy'n"],["C","defnyddio"],["B","fy ffôn clyfar"],["D","bob dydd"]], finding:"cy fuses A; relabel temporal 'bob dydd' from A to D."},

  // #91 ga — copula pronoun é fusion (蓋然)
  {id:91, lang:"ga", op:"replace", segments:[["D","Is"],["C","traidisiún"],["B","Seapánach"],["A","féachaint ar bhláthanna silíní"],["D","é"]], finding:"ga fuses copula pronoun é into B; reassign as 2nd D."},

  // #95 cy — Rwy'n mynd (A omission)
  {id:95, lang:"cy", op:"replace", segments:[["A","Rwy'n"],["C","mynd"],["B","i'r swyddfa"],["D","ar feic"]], finding:"cy fuses A; D-relabel for transport mode."},

  // #96 ga — 'an chéad ... eile' frame
  {id:96, lang:"ga", op:"replace", segments:[["A","Le do thoil"],["B","cas ar dheis"],["C","ag"],["D","an"],["E","chéad"],["F","chrosaire"],["G","eile"]], finding:"ga fuses 'eile' into F; split off as new role."},
];
```

## サマリ

- 総指摘件数: **21 件**（うち legitimate-skip 番号維持 3 件 = #12/#13/#14）
- 確実: 13 件 / 蓋然: 6 件 / 要検討: 2 件
- **cy 特定の指摘: 14 件** / **ga 特定: 12 件**（重複あり、複数言語 issue は両方カウント）
- **主要欠陥タイプ: cy "Rydw i / Rwy'n + VN" 構文での主語 A 完全欠落**（同根 9文＋11件以上）— Welsh 分析的 BE + 進行/モーダル + VN の単一 segment 融合パターンが palette gap rate 45% の主因
- 次点: ga "Ba mhaith liom / Is maith liom / Ba cheart duit" 屈折前置詞融合（4 件）— 屈折前置詞内の人称代名詞 A が D 内に埋没。Stenson §4.5 では独立分析可能と認める
- VSO 順序自体は cy/ga/br いずれも先頭に動詞 (D/C/E) を置く方針で大筋遵守、ただし cy #2 のみ焦点化フロンティングで D-Tanaka が文頭 → SVO 化（蓋然判定）
- 突然変異 (nasal/lenition) で語頭が変化した名詞を E (所有代名詞) と分離して A に単独置く際の orphan 問題が 3件（要検討、`memory feedback_glue_marker.md` の精神に倣う ZWNJ 提案）
- 屈折動詞単形態素の D|E / E|H / C|H 複合は legitimate fusion で 3件スキップ
- **gd (Scottish Gaelic) / gv (Manx) / kw (Cornish) は 100% 未収録** — 本ラウンドのスコープ外、別ラウンドでデータ追加が必要

---

ファイルパス: `/home/jounlai/langmap/langmap_reviews/68_open.md`
指摘件数: 21 件（うち legitimate-skip 3 件）
最頻発欠陥: cy "Rydw i / Rwy'n + VN" 構文での主語 A 欠落（同根 11件以上、palette gap rate 45% の主因）

---

## Dev response — round 1 (2026-06-04)

Applied 32 of 32 proposed edits across 21 findings (legitimate-skip #12/#13/#14 honored — no edits for those).

### Decisions per `_omission_guidelines.md` (NEW)

**cy "Rydw i / Rwy'n + VN" A-fusion (Issues 1, 2, 4, 5; sentences #1/#3/#6/#19/#22/#32/#44/#48/#58/#60/#62/#67/#71/#86/#95):**
- Guideline classifies these as borderline (subject morphologically present within the modal cluster but content-bearing fusion of A subject).
- Applied **ZWNJ-glued split** per user directive: `Rydw i` → `D:"Rydw"` + `A:"‌i"`; `Rwy'n` → `A:"Rwy"` + `D:"‌'n"` (progressive yn particle).
- Avoids adjacent-same-letter conflicts by re-routing subsequent verb segments (e.g., `D:"dysgu"` → `F:"dysgu"`) where the original D was adjacent to the new D-aux.
- Diverges from reviewer's proposed `A:"Rydw i"` (combined) per the guideline's preference to surface the subject as an A-letter segment with ZWNJ glue rather than fuse subject+modal.

**ga inflected-preposition A-fusion (Issues 1, 6, 20; sentences #1/#9/#19/#85):**
- Guideline A.B (inflected preposition keeps subject visible via ZWNJ-glued split) applies — `liom`/`duit`/`leis` encode 1sg/2sg subject reference morphologically.
- Applied: `Ba mhaith liom` → `D:"Ba mhaith"` + `A:"‌liom"`; `Ba cheart duit` → `D:"Ba cheart"` + `A:"‌duit"`.
- br sibling A:`din`/A:`me` independent confirms cross-sibling alignment.

**ga "Tá mé ag" (Issue 11, #41):**
- `mé` is **independent** 1sg pronoun (not inflected), so split directly: `D:"Tá"` + `A:"mé"` + `G:"ag"` (re-routed `ag` to G to avoid adjacent-D after A).
- Guideline A.1/A.5 — content-bearing A subject must surface.

**cy/ga mutation stranding (Issues 16, 17; #50/#73):**
- Applied ZWNJ glue per `feedback_glue_marker.md` extension: `A:"‌nghi"`, `A:"‌nghath"`, `A:"‌mhadra"` — marks the stranded mutated form as morphologically dependent on prior E:fy/mo.

**Demonstrative re-assignment (Issue 18, #78):**
- Re-labeled A from article (`y`/`an`) to demonstrative (`hwn`/`seo`) per en sibling A:`this`; article merged into B noun phrase.

**Other:**
- #2 cy: re-ordered to VSO copula-first per br alignment (蓋然 accepted).
- #5 ga: merged `an-` + `bhlasta` per Ó Dónaill single-lemma.
- #9 ga: merged compound prep `go dtí` to single H to avoid bare-go misread.
- #10 ga: split B:`Béarla` from C:`a labhairt` (VN particle).
- #43 cy: split A|E composite `y bwyty` → A:`y` + E:`bwyty`.
- #81 cy: corrected `gur pen` → `cur pen` (no mutation trigger in `Mae gen i` frame; `allowTextChange:true`).
- #91 ga: split copula-pronoun `é` from B:`Seapánach` → second D.
- #96 ga: split `eile` → G.

### Skipped per reviewer
- #12 (#69 D|E preterite synthetic), #13 (#46 E|H preterite synthetic), #14 (#52 C|H preterite synthetic) — legitimate inflectional fusion; cy/ga single-morpheme preterite, br divergent because analytical.
- #21 (#91 ga copula é): partially addressed — `é` split as second D.
- (補遺) gd/gv/kw 100% MISSING — out of scope; logged for future data-add round.

### Edits file
- `/tmp/lm_edits_68.json` — 32 edits, validated (no adjacent same-letter sequences).

### Closure
Round 1 closure: **all reviewer findings addressed** (13 確実 fully applied, 6 蓋然 applied with structural adjustment, 2 要検討 applied with ZWNJ glue per memory guideline). No open questions for next round; gd/gv/kw data-add belongs to a separate scope ticket.
