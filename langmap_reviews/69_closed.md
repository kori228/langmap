# LangMap データレビュー #69 — Philippine non-Tagalog (ilo / ceb) chunking & role-letter auditor (フィリピン非タガログ語横断分節監査)

## レビュアー自己紹介 (ペルソナ)

私は **Dr. Marisol Bukidnon-Yamaguchi (handle: @ph_west_visayan)**、Ateneo de Manila University 修士（Ilokano focus-system & 述語頭文法, 2014）、University of San Carlos (Cebu) Linguistics 博士（Cebuano demonstrative ternary & 場所焦点動詞接辞, 2019）。Komisyon sa Wikang Filipino のフィールド調査員として ilo/ceb/hil/war/bcl/pam/pag のサンプル収集に従事し、Center for Philippine Studies (UHM) 招聘研究員。常用資料は Rubino *Ilocano Dictionary and Grammar* (U Hawai'i 2000)、Wolff *Beginning Cebuano I-II* (Cornell SEAP 1972)、Trosdal *Formal-Functional Cebuano-English Dictionary* (1990)、Schachter & Otanes *Tagalog Reference Grammar* (UC Press 1972)、Bersales et al *Modern Tagalog vs Old Tagalog comparative*。

本ラウンドは #25 (Austronesian Insular SE Asia) で既出の **tl (Tagalog)** とは別軸の、**ilo (Ilokano) / ceb (Cebuano) 二変種横断構造監査**である。ペルソナ範囲には hil/war/bcl/pam/pag も含まれるが、`grep -c '"hil":' data.js` 他で**確認した結果 data.js に hil/war/bcl/pam/pag は1件も収録されていない**。よって本ラウンドは事実上 ilo + ceb の二変種に集中し、hil/war/bcl/pam/pag は語族補完候補としてサマリ末尾でフラグ付けする。

**背景の動機：** 先行 #25 が tl を中心に Austronesian Insular の chunking 規約を確立したが、ilo / ceb は個別審査が薄く、特に ilo は palette 役割欠落率が 50% に達し（C/D/E のいずれかが欠ける文が 100 中 50超）、Philippine 圏で最悪。要因として (i) ilo の動詞接尾辞 `-ak/-ko/-mo/-na` (人称クリティック) の独立分節揺れ、(ii) モーダル動詞 **Kayatko**（want-my）の **A (subject) 誤標** vs **D/E (modal) 正標** の不一致、(iii) 義務モーダル **Masapul** の同様の A/D/E 揺れ、(iv) ilo 述語連結子 **ket** の独立分節欠如、(v) ceb の **Gusto nako** の同じ A vs D/E 揺れ、が挙げられる。memory `feedback_modal_verb_not_subject.md` / `feedback_impersonal_modal_as_D.md` / `feedback_cross_sibling_role_consistency.md` / `feedback_glue_marker.md` が直接適用される。

## 参考文献
- Rubino, C. *Ilocano Dictionary and Grammar* (U of Hawai'i Press 2000) — ilo クリティック `-ak/-ko/-mo` 分節と `ket` 述語マーカー
- Wolff, J. *Beginning Cebuano* I & II (Cornell SEAP 1972) — ceb 三項指示詞 kini/kana/kadto と focus 動詞接辞
- Trosdal, M. *Formal-Functional Cebuano-English Dictionary* (1990) — ceb 語彙比較
- Schachter, P. & Otanes, F. *Tagalog Reference Grammar* (UC Press 1972) — focus-system 横断
- Bersales et al *Modern Tagalog vs Old Tagalog comparative* — ph 系横断
- Memory: `feedback_modal_verb_not_subject.md`, `feedback_impersonal_modal_as_D.md`, `feedback_cross_sibling_role_consistency.md`, `feedback_glue_marker.md`, `feedback_split_segments_like_reference.md`, `feedback_prefer_splitting_segments.md`, `feedback_priority_not_keep_reason.md`
- 既出 #25 (tl 含む Austronesian Insular)・#26 — 再フラグ回避

## 検証方法

`.wf_langmap_query.mjs` で全 100 文 × {en, tl, ilo, ceb, hil, war, bcl, pam, pag} を `/tmp/ph_audit.out` に dump (1000 行)。**hil/war/bcl/pam/pag は全 100 文で MISSING を確認**。続いて (a) ilo の `Kayatko` モーダル（want-my）が A/B/D/E のどこに付くかの cross-sentence 整合性、(b) ilo `Masapul` (must/need to) の A/D/E 揺れ、(c) クリティック `-ak/-ko/-mo/-na` の独立分節 vs 動詞融合の不揃い、(d) ilo の述語マーカー `ket` の独立分節揺れ、(e) ceb `Gusto nako` の A vs D/E 揺れ、(f) en palette と完全に役割文字が逆転している重大ケース、(g) 形容詞・指示詞の独立化と語順、を横断集計。本ラウンドは read-only on data.js。提案は末尾の構造化 edit リストにも転載する。

語彙誤り（例: ilo #1 `sangbay ti`=「across from」、ilo #85 `Nasaysayaat`=「should」、ilo #87 `makatulong`=「convenient」、ilo #95 `kanayon` 余剰）も発見したが、本ラウンドは chunking + role-letter に集中し、語彙論は次ラウンドに譲る。

## 指摘事項 (Issues found) — 21件

### 1. #9 ilo — モーダル「Kayatko」(want-1sg) が A 標示、en パレット B「want to」と不一致 【確実】
- **Current (ilo):** **A:「Kayatko」** C:「mapan」 D:「idiay」 E:「Hapon」 F:「inton sumaruno a」 G:「tawen」
- **Reference / siblings:**
  - [en] A:「I」 **B:「want to」** C:「go」 D:「to」 E:「Japan」 …
  - [tl] **A:「Gusto ko」** … ← tl も A 誤標（#25 で既出系列だが ilo は独立修正対象）
  - [ceb] **A:「Gusto nako」** C:「moadto」 D:「sa」 E:「Japan」 …
- **Problem:** en では palette A=「I」（主語）、B=「want to」（モーダル）を分けている。ilo `Kayatko` は `Kayat`(want) + `-ko`(1sg.GEN クリティック) の融合で、モーダル＋主語クリティックを内蔵。`feedback_modal_verb_not_subject.md` に従えば、モーダルは A ではなく en の palette ラベルに合わせる必要がある（ここでは B）。**ZWNJ 接頭でクリティック分割**すれば B:「Kayat」 A:「‌ko」 と二分節化できる（`feedback_glue_marker.md`）。
- **Proposed fix:** B:「Kayat」 A:「‌ko」 C:「mapan」 D:「idiay」 E:「Hapon」 F:「inton sumaruno a」 G:「tawen」。
- **Edit:** `{id:9, lang:"ilo", op:"replace", segments:[["B","Kayat"],["A","‌ko"],["C","mapan"],["D","idiay"],["E","Hapon"],["F","inton sumaruno a"],["G","tawen"]], finding:"ilo Kayatko mislabeled A (subject); en palette has B=want-to modal. Split with ZWNJ per glue marker memory; matches feedback_modal_verb_not_subject.md."}` 【確実】

### 2. #19 ilo — 同モーダル「Kayatko」 は D 標示（#9 と矛盾）→ #9 修正で整合化 【確実】
- **Current (ilo):** **D:「Kayatko」** A:「ti」 C:「dumengngeg iti」 B:「musika」
- **Reference:** [en] A:「I」 **D:「like」** C:「to listen to」 B:「music」 / [ceb] **D:「Ganahan」** A:「ko」 C:「mamati og」 B:「musika」
- **Problem:** #19 では ilo が `Kayatko` を D に標示し en/ceb と整合。`A:「ti」` は付随定冠詞で正当だが、**ilo の Kayatko 内部 `-ko` 主語クリティックは A 標示が抜けている**（cf. ceb は A:「ko」 を独立に立てる）。`feedback_cross_sibling_role_consistency.md` の duplicate-letter outlier 視点では、ilo の `-ko` を ZWNJ 分節化して A を独立化すべき。
- **Proposed fix:** D:「Kayat」 A:「‌ko ti」 C:「dumengngeg iti」 B:「musika」（A は ‌ko + ti 連結子で）。
- **Edit:** `{id:19, lang:"ilo", op:"replace", segments:[["D","Kayat"],["A","‌ko ti"],["C","dumengngeg iti"],["B","musika"]], finding:"ilo Kayatko D-labeled here but #9 used A; split -ko clitic as A per glue marker. Ensures cross-sentence Kayat=D consistency."}` 【確実】

### 3. #22 ilo — 同モーダル「Kayatko」 は E 標示（#9 と矛盾、#19 と語数違い） 【確実】
- **Current (ilo):** **E:「Kayatko」** A:「ti」 D:「agsursuro iti」 F:「baro a」 C:「pagsasao」
- **Reference:** [en] A:「I」 **E:「want to」** D:「learn」 …; [ceb] **E:「Gusto」** A:「nakong」 D:「mokat-on og」 …
- **Problem:** ここでは en は E ラベルを「want to」に使用。ilo は E 標示で en と整合だが、`-ko` クリティックは依然融合。
- **Proposed fix:** E:「Kayat」 A:「‌ko ti」 D:「agsursuro iti」 F:「baro a」 C:「pagsasao」。
- **Edit:** `{id:22, lang:"ilo", op:"replace", segments:[["E","Kayat"],["A","‌ko ti"],["D","agsursuro iti"],["F","baro a"],["C","pagsasao"]], finding:"ilo Kayatko E-labeled per en; split -ko clitic with ZWNJ to surface palette A."}` 【確実】

### 4. #32 ilo — 同モーダル「Kayatko a」 が A 標示、en/ceb は E「want to」 【確実】
- **Current (ilo):** **A:「Kayatko a」** C:「mangan iti」 B:「sushi」 D:「iti pangaldaw」
- **Reference:** [en] A:「I」 **E:「want to」** C:「eat」 B:「sushi」 D:「for lunch」 / [ceb] **E:「Gusto」** A:「nakong」 C:「mokaon og」 …
- **Problem:** #9/#44/#48/#58/#62/#71/#98 と同パターン：`Kayatko` モーダルが A 主語ラベルに誤標。en は E。
- **Proposed fix:** E:「Kayat」 A:「‌ko a」 C:「mangan iti」 B:「sushi」 D:「iti pangaldaw」。
- **Edit:** `{id:32, lang:"ilo", op:"replace", segments:[["E","Kayat"],["A","‌ko a"],["C","mangan iti"],["B","sushi"],["D","iti pangaldaw"]], finding:"ilo Kayatko mislabeled A; en E=want-to. Split clitic with ZWNJ."}` 【確実】

### 5. #44 ilo — 「Kayatko a」 A 誤標 ＋ D ラベルが「lubong」(world) に**完全誤付け** 【確実】
- **Current (ilo):** **A:「Kayatko a」** C:「agbiahe」 B:「iti amin a」 **D:「lubong」**
- **Reference:** [en] A:「I」 **D:「want to」** C:「travel」 B:「around the world」 / [ceb] **D:「Gusto」** A:「nakong」 C:「mobiyahe」 B:「sa tibuok kalibutan」
- **Problem:** 二重欠陥：(i) `Kayatko` が A、(ii) `lubong`(world) が D 標示されているが、en palette D = 「want to」モーダルであり、「世界」は B 内の「around the world」名詞句。`feedback_cross_sibling_role_consistency.md` 重大違反。D ラベルが意味役割と完全に乖離。
- **Proposed fix:** D:「Kayat」 A:「‌ko a」 C:「agbiahe」 B:「iti amin a lubong」（B を融合復元）。
- **Edit:** `{id:44, lang:"ilo", op:"replace", segments:[["D","Kayat"],["A","‌ko a"],["C","agbiahe"],["B","iti amin a lubong"]], finding:"ilo (i) mislabels Kayatko as A vs en D=want-to, (ii) D-letter wrongly assigned to lubong (world); should be B. Cross-sibling role-letter violation."}` 【確実】

### 6. #48 ilo — 「Kayatko a」 A 誤標、en/ceb の D「want to」と不一致 【確実】
- **Current (ilo):** **A:「Kayatko a」** C:「buya」 E:「dayta a」 B:「pelikula」
- **Reference:** [en] A:「I」 **D:「want to」** C:「watch」 E:「that」 B:「movie」 / [ceb] **D:「Gusto」** A:「nakong」 C:「motan-aw sa」 …
- **Problem:** 同 Kayatko 誤標パターン。
- **Proposed fix:** D:「Kayat」 A:「‌ko a」 C:「buya」 E:「dayta a」 B:「pelikula」。
- **Edit:** `{id:48, lang:"ilo", op:"replace", segments:[["D","Kayat"],["A","‌ko a"],["C","buya"],["E","dayta a"],["B","pelikula"]], finding:"ilo Kayatko mislabeled A; en/ceb both D=want-to."}` 【確実】

### 7. #58 ilo — 「Kayatko a」 A 誤標、ilo「D:templo」も en の D=take と乖離 【確実】
- **Current (ilo):** **A:「Kayatko a」** C:「mangala iti retrato」 B:「daytoy a」 **D:「templo」**
- **Reference:** [en] A:「I」 **E:「want to」** **D:「take」** C:「a photo」 B:「of this temple」 / [ceb] **E:「Gusto」** A:「nakong」 **D:「mokuha og」** C:「hulagway」 B:「niining templo」
- **Problem:** 三重欠陥：(i) Kayatko A 誤標、(ii) `D:templo` の D ラベルが en の動詞「take」と完全に乖離（en D=take, ilo D=temple は対象名詞、本来 B 領域）、(iii) palette E 欠落。`feedback_cross_sibling_role_consistency.md` 重大違反。
- **Proposed fix:** E:「Kayat」 A:「‌ko a」 D:「mangala iti」 C:「retrato」 B:「daytoy a templo」。
- **Edit:** `{id:58, lang:"ilo", op:"replace", segments:[["E","Kayat"],["A","‌ko a"],["D","mangala iti"],["C","retrato"],["B","daytoy a templo"]], finding:"ilo (i) Kayatko A-mislabeled, (ii) D wrongly assigned to templo (noun) vs en D=take (verb). Restructure to match en E+D+C+B."}` 【確実】

### 8. #62 ilo — 「Kayatko a」 A 誤標、en/ceb は E「want to」 【確実】
- **Current (ilo):** **A:「Kayatko a」** D:「malpas」 B:「daytoy a libro」 C:「sakbay ti panagngudo ti bulan」
- **Reference:** [en] A:「I」 **E:「want to」** D:「read」 B:「this book」 C:「by the end of the month」 / [ceb] **E:「Gusto」** A:「nakong」 D:「mabasa」 B:「kining libro」 …
- **Problem:** 同パターン。palette E 欠落。
- **Proposed fix:** E:「Kayat」 A:「‌ko a」 D:「malpas」 B:「daytoy a libro」 C:「sakbay ti panagngudo ti bulan」。
- **Edit:** `{id:62, lang:"ilo", op:"replace", segments:[["E","Kayat"],["A","‌ko a"],["D","malpas"],["B","daytoy a libro"],["C","sakbay ti panagngudo ti bulan"]], finding:"ilo Kayatko mislabeled A; en/ceb E=want-to. Palette E missing."}` 【確実】

### 9. #71 ilo — 「Kayatko a」 A 誤標、加えて B 欠落 ＋ D 誤付け 【確実】
- **Current (ilo):** **A:「Kayatko a」** C:「pasayaaten」 **D:「ti panagsaok」**
- **Reference:** [en] A:「I」 **D:「want to」** C:「improve」 **B:「my pronunciation」** / [ceb] **D:「Gusto」** A:「nakong」 C:「pag-unon ang」 **B:「akong pagbungat」**
- **Problem:** Kayatko 誤標 + 「ti panagsaok」(my pronunciation, 目的語) が D 標示されているが en では D=want-to。ceb は正しく B「akong pagbungat」。`feedback_cross_sibling_role_consistency.md` 違反。
- **Proposed fix:** D:「Kayat」 A:「‌ko a」 C:「pasayaaten」 B:「ti panagsaok」。
- **Edit:** `{id:71, lang:"ilo", op:"replace", segments:[["D","Kayat"],["A","‌ko a"],["C","pasayaaten"],["B","ti panagsaok"]], finding:"ilo (i) Kayatko A-mislabeled, (ii) D wrongly on panagsaok (object noun) vs en D=want-to. ceb correctly splits."}` 【確実】

### 10. #98 ilo — 「Kayatko a」 A 誤標、en は B「want to」 【確実】
- **Current (ilo):** **A:「Kayatko a」** C:「i-order」 D:「daytoy a」 E:「taraon」
- **Reference:** [en] A:「I」 **B:「want to」** C:「order」 D:「this」 E:「dish」 / [ceb] **A:「Gusto nako」** C:「i-order」 …（ceb も A 誤標、要 #25 後続）
- **Problem:** 同パターン。但し ceb も同様に A 誤標しており、ceb #98 にも修正適用必要だが #25 で tl 系列が扱われた以降の派生問題のため、本件は ilo のみ B 標示化。
- **Proposed fix:** B:「Kayat」 A:「‌ko a」 C:「i-order」 D:「daytoy a」 E:「taraon」。
- **Edit:** `{id:98, lang:"ilo", op:"replace", segments:[["B","Kayat"],["A","‌ko a"],["C","i-order"],["D","daytoy a"],["E","taraon"]], finding:"ilo Kayatko mislabeled A; en B=want-to. (ceb has same defect; flag separately)."}` 【確実】

### 11. #54 ilo — 義務モーダル「Masapul」(must) が A 標示、en/ceb は D 【確実】
- **Current (ilo):** **A:「Masapul a」** C:「salakniban」 B:「ti aglawlaw」
- **Reference:** [en] A:「We」 **D:「must」** C:「protect」 B:「the environment」 / [ceb] **D:「Kinahanglan」** A:「natong」 C:「panalipdan ang」 B:「kinaiyahan」
- **Problem:** `Masapul`（必要）は ilo 文献（Rubino 2000）で前動詞の非人称義務モーダル。`feedback_impersonal_modal_as_D.md` の規約「Il faut, Hay que, Bisogna → D」と同型。ceb は D で正しく対応。ilo は A（主語）に誤標。
- **Proposed fix:** D:「Masapul a」 C:「salakniban」 B:「ti aglawlaw」（palette A は省略可、または明示的に主語クリティックを追加する場合は `tayo` 等）。
- **Edit:** `{id:54, lang:"ilo", op:"replace", segments:[["D","Masapul a"],["C","salakniban"],["B","ti aglawlaw"]], finding:"ilo Masapul impersonal modal mislabeled A; should be D per feedback_impersonal_modal_as_D.md. ceb correctly uses D=Kinahanglan."}` 【確実】

### 12. #64 ilo — 義務モーダル「Masapul」 A 誤標、en/ceb は D 【確実】
- **Current (ilo):** **A:「Masapul a」** C:「ikarga」 B:「ti selponko」
- **Reference:** [en] A:「I」 **D:「need to」** C:「charge」 B:「my phone」 / [ceb] **D:「Kinahanglan」** A:「nakong」 C:「i-charge ang」 B:「telepono ko」
- **Problem:** 同パターン。
- **Proposed fix:** D:「Masapul a」 C:「ikarga」 B:「ti selponko」。
- **Edit:** `{id:64, lang:"ilo", op:"replace", segments:[["D","Masapul a"],["C","ikarga"],["B","ti selponko"]], finding:"ilo Masapul mislabeled A; en/ceb both D. Impersonal modal."}` 【確実】

### 13. #83 ilo — 「Padasek」(try-1sg) が A 標示、en/ceb は D「try to」 【確実】
- **Current (ilo):** **A:「Padasek」** C:「ti ag-ehersisyo」 B:「tunggal bigat」
- **Reference:** [en] A:「I」 **D:「try to」** C:「exercise」 B:「every morning」 / [ceb] **D:「Gisulayan」** A:「nako」 C:「mag-ehersisyo」 B:「matag buntag」
- **Problem:** `Padasek` = `Padas`(try) + `-ek`(1sg.GEN クリティック)。モーダル「try to」は D、主語クリティック `-ek` は A であるべき。現状 A 単一に融合して palette D 欠落。
- **Proposed fix:** D:「Padas」 A:「‌ek」 C:「ti ag-ehersisyo」 B:「tunggal bigat」。
- **Edit:** `{id:83, lang:"ilo", op:"replace", segments:[["D","Padas"],["A","‌ek"],["C","ti ag-ehersisyo"],["B","tunggal bigat"]], finding:"ilo Padasek fuses try+1sg into A; en/ceb D=try. Split with ZWNJ for clitic A."}` 【確実】

### 14. #95 ilo — 役割文字の**大規模スクランブル**：A↔C 交換 ＋ 余剰 D 「kanayon」 【確実】
- **Current (ilo):** **A:「Mapan」** **C:「ak iti opisina」** B:「sakay iti bisikleta」 **D:「kanayon」**
- **Reference:** [en] **D:「I」** **C:「go」** **B:「to the office」** **A:「by bicycle」** / [ceb] **D:「Ako」** **C:「moadto」** **B:「sa opisina」** **A:「sakay sa bisikleta」**
- **Problem:** 全 4 ラベルが en/ceb と不整合：
  - ilo A:「Mapan」 = "go" → en/ceb は **C**
  - ilo C:「ak iti opisina」 = "I to-office" → en は **D+B**
  - ilo B:「sakay iti bisikleta」 = "by bicycle" → en は **A**
  - ilo D:「kanayon」 = "always" → en に対応単語なし（**余剰** or 翻訳語彙誤り）
- **Proposed fix:** C:「Mapan」 D:「ak」 B:「iti opisina」 A:「sakay iti bisikleta」（kanayon 削除）。
- **Edit:** `{id:95, lang:"ilo", op:"replace", segments:[["C","Mapan"],["D","ak"],["B","iti opisina"],["A","sakay iti bisikleta"]], finding:"ilo scrambles A/B/C/D vs en/ceb; A=go, C=I-to-office, B=by-bicycle, plus extra D=always not in en. Relabel to match en palette and drop kanayon."}` 【確実】

### 15. #38 ilo — A/B/D 役割文字スクランブル、en の構造と不整合 【確実】
- **Current (ilo):** **A:「Ti linek ti」** **D:「init」** **B:「ditoy」** C:「ket napintas」
- **Reference:** [en] **B:「The sunset」** **A:「from」** **D:「here」** C:「is beautiful」 / [ceb] **B:「Ang pagsalop sa adlaw」** **A:「gikan」** **D:「diri」** C:「matahom」
- **Problem:** ilo は "Ti linek ti init" = "The setting of the sun" = 「The sunset」全体に当たるが、en/ceb は B 一括（"the sunset"）。ilo はこれを A:「Ti linek ti」 + D:「init」 と二分節し、しかも A/D の役割文字を en と完全に乖離。en A=「from」（前置詞）に対し ilo に「from」相当語なし（場所詞 ditoy 内蔵）。`feedback_cross_sibling_role_consistency.md` 違反。
- **Proposed fix:** B:「Ti linek ti init」 D:「ditoy」 C:「ket napintas」（A 欠落は「from」相当なしで legitimate）。
- **Edit:** `{id:38, lang:"ilo", op:"replace", segments:[["B","Ti linek ti init"],["D","ditoy"],["C","ket napintas"]], finding:"ilo scrambles labels; en/ceb have B=sunset, D=here. ilo's A=Ti linek ti + D=init is mislabeled split of 'sunset'. Merge to B; drop A since no 'from' word."}` 【確実】

### 16. #81 ilo — A/C 役割文字逆転：「today」(C in en) が A 標示 【確実】
- **Current (ilo):** **A:「Ita nga aldaw」** B:「ti ulok」 **C:「ket agsakit」**
- **Reference:** [en] A:「I」 F:「have」 E:「a headache」 **C:「today」** / [ceb] F:「Naa」 A:「koy」 E:「sakit sa ulo」 **C:「karon」**
- **Problem:** ilo `Ita nga aldaw` = "today" → en では **C**。ilo `ket agsakit` = "(is) hurting" → 動詞・述語、en に対応役割は **F:have または E:headache** 系統。ilo は A↔C を逆転し、palette E/F 欠落。ceb は C:karon で正しく "today" を C 標示。
- **Proposed fix:** **C:「Ita nga aldaw」** **E:「ti ulok」** **F:「ket agsakit」**（A は主語クリティックゼロのため省略可。語順は ilo の topic-初に合わせる）。
- **Edit:** `{id:81, lang:"ilo", op:"replace", segments:[["C","Ita nga aldaw"],["E","ti ulok"],["F","ket agsakit"]], finding:"ilo A=today should be C (en/ceb both C). B=ulok (head) belongs to E (headache). C=ket agsakit belongs to F (have). Three-way relabel."}` 【確実】

### 17. #28 ilo — palette B「you」完全欠落（クリティック `-mo` 内蔵融合） 【確実】
- **Current (ilo):** A:「Mabalinmo kadi」 C:「a irekomenda」 F:「ti nasayaat a」 E:「restaurant」
- **Reference:** [en] A:「Could」 **B:「you」** C:「recommend」 D:「a」 F:「good」 E:「restaurant」 / [ceb] A:「Makahimo ba」 **B:「ka」** C:「morekomendar og」 …
- **Problem:** ilo `Mabalinmo` = `Mabalin`(can) + `-mo`(2sg.GEN クリティック)。ceb は B を独立に立てる（"ka"）。ilo は B 欠落。`feedback_glue_marker.md` に従い ZWNJ で `-mo` を分割。
- **Proposed fix:** A:「Mabalin」 B:「‌mo」 「 kadi」 C:「a irekomenda」 F:「ti nasayaat a」 E:「restaurant」（kadi は疑問詞、A に併合可）。
- **Edit:** `{id:28, lang:"ilo", op:"replace", segments:[["A","Mabalin"],["B","‌mo"],["A","kadi"],["C","a irekomenda"],["F","ti nasayaat a"],["E","restaurant"]], finding:"ilo Mabalinmo fuses 2sg.GEN clitic; ceb splits B=ka. Add ZWNJ split per glue marker (adjacent-same-ID A merges with kadi by display rule)."}` 【蓋然】

### 18. #40 ilo — palette A「you」完全欠落（`-mo` 内蔵融合） 【確実】
- **Current (ilo):** E:「Ammom kadi」 C:「no sadino」 D:「ti」 B:「opisina ti koreo」
- **Reference:** [en] E:「Do」 **A:「you」** E:「know」 C:「where」 B:「the post office」 D:「is」 / [ceb] E:「Nahibaw-an」 **A:「ba nimo」** C:「asa」 D:「ang」 B:「post office」
- **Problem:** ilo `Ammom` = `Amm-`(know) + `-om`(2sg.GEN クリティック). ceb は A=「ba nimo」 を独立。ilo は palette A 欠落。
- **Proposed fix:** E:「Amm」 A:「‌om kadi」 C:「no sadino」 D:「ti」 B:「opisina ti koreo」。
- **Edit:** `{id:40, lang:"ilo", op:"replace", segments:[["E","Amm"],["A","‌om kadi"],["C","no sadino"],["D","ti"],["B","opisina ti koreo"]], finding:"ilo Ammom fuses 2sg.GEN -om; ceb splits A=ba nimo. Surface palette A via ZWNJ split."}` 【確実】

### 19. #73 ilo — A|E 複合「Ti pusakko」（cat+1sg.GEN 融合）、ceb は分割 【確実】
- **Current (ilo):** **A|E:「Ti pusakko」** D:「ket agtuturog」 F:「iti」 B:「kamako」 G:「tunggal」 C:「rabii」
- **Reference:** [en] **E:「My」** **A:「cat」** D:「sleeps」 … / [ceb] **E:「Ang akong」** **A:「iring」** D:「Matulog」 …
- **Problem:** `pusakko` = `pusak`(cat-2sg/possessed) + `-ko`(1sg.GEN) と分析できるが、現実には `pusa`(cat) + `-k`(=`-ko` 短縮 1sg.GEN) であり ZWNJ で分割可能。ceb は A/E を独立。memory `feedback_glue_marker.md` 適用。
- **Proposed fix:** A:「Ti pusa」 E:「‌k」 D:「ket agtuturog」 F:「iti」 B:「kamako」 G:「tunggal」 C:「rabii」。
- **Edit:** `{id:73, lang:"ilo", op:"replace", segments:[["A","Ti pusa"],["E","‌k"],["D","ket agtuturog"],["F","iti"],["B","kamako"],["G","tunggal"],["C","rabii"]], finding:"ilo A|E fuses cat+1sg.GEN; ceb splits. Use ZWNJ on possessor clitic -k per glue marker."}` 【確実】

### 20. #99 ilo — palette A「this」完全欠落（指示詞 `daytoy a` を B に融合） 【確実】
- **Current (ilo):** C:「Mano」 **B:「daytoy a souvenir」**
- **Reference:** [en] C:「How much」 D:「is」 **A:「this」** B:「souvenir」 / [ceb] C:「Pila」 **A:「kining」** B:「souvenir」
- **Problem:** ceb は指示詞 `kining` を A に独立分節するのに、ilo は `daytoy a` を B に融合し palette A 欠落。`feedback_cross_sibling_role_consistency.md` 適用。
- **Proposed fix:** C:「Mano」 A:「daytoy a」 B:「souvenir」。
- **Edit:** `{id:99, lang:"ilo", op:"replace", segments:[["C","Mano"],["A","daytoy a"],["B","souvenir"]], finding:"ilo lacks palette A for demonstrative; ceb correctly splits A=kining + B=souvenir."}` 【確実】

### 21. #100 ilo — palette B↔A 役割文字逆転：「thank you」が A 標示 【確実】
- **Current (ilo):** **A:「Agyamanak」** **B:「iti amin」**
- **Reference:** [en] **B:「Thank you」** C:「for」 **A:「everything」** / [ceb] **B:「Salamat」** **A:「sa tanan」** / [tl] **B:「Salamat」** **A:「sa lahat」**
- **Problem:** ilo `Agyamanak` = `Agyaman`(thank) + `-ak`(1sg.NOM クリティック)。「thank you」全体は en/ceb/tl で B、`everything` は A。ilo は A/B を逆転し、加えて `-ak` 主語クリティックを融合。memory `feedback_cross_sibling_role_consistency.md` 違反。
- **Proposed fix:** B:「Agyaman」 ?:「‌ak」 A:「iti amin」（palette ‌ak は主語の意味だが en にラベル対応なし、削除または D 等への割当はあえて不要）。最小限の修正として B↔A 入れ替え：B:「Agyamanak」 A:「iti amin」。
- **Edit:** `{id:100, lang:"ilo", op:"replace", segments:[["B","Agyamanak"],["A","iti amin"]], finding:"ilo A↔B reversed vs en/ceb/tl; thank-you should be B, everything should be A. Minimal fix swaps labels."}` 【確実】

---

## hil/war/bcl/pam/pag の不在について（補助フラグ）

`grep -c '"<code>":' data.js` を全 5 コードで実行した結果、いずれも 0 件。現データセットには Philippine 圏の Tagalog (tl)・Ilokano (ilo)・Cebuano (ceb) のみ収録され、Hiligaynon (hil) / Waray (war) / Bikol (bcl) / Kapampangan (pam) / Pangasinan (pag) の主要 5 言語は完全に未収録。`feedback_new_lang_checklist.md` の手順に基づき新規言語追加で対応するのが本筋だが、これは構造監査の枠を超えるため、本ラウンドではフラグのみ。

---

## 構造化 edit リスト（再掲・適用順）

```js
[
  // ilo Kayatko モーダル＋クリティック分割（#9/#19/#22/#32/#48/#62/#98）
  {id:9,  lang:"ilo", op:"replace", segments:[["B","Kayat"],["A","‌ko"],["C","mapan"],["D","idiay"],["E","Hapon"],["F","inton sumaruno a"],["G","tawen"]], finding:"ilo Kayatko A-mislabeled; en B=want-to. Split clitic via ZWNJ."},
  {id:19, lang:"ilo", op:"replace", segments:[["D","Kayat"],["A","‌ko ti"],["C","dumengngeg iti"],["B","musika"]], finding:"ilo Kayatko D-correct here; split -ko as A for consistency."},
  {id:22, lang:"ilo", op:"replace", segments:[["E","Kayat"],["A","‌ko ti"],["D","agsursuro iti"],["F","baro a"],["C","pagsasao"]], finding:"ilo Kayatko E-correct here; split -ko as A."},
  {id:32, lang:"ilo", op:"replace", segments:[["E","Kayat"],["A","‌ko a"],["C","mangan iti"],["B","sushi"],["D","iti pangaldaw"]], finding:"ilo Kayatko A-mislabeled; en E=want-to."},
  {id:48, lang:"ilo", op:"replace", segments:[["D","Kayat"],["A","‌ko a"],["C","buya"],["E","dayta a"],["B","pelikula"]], finding:"ilo Kayatko A-mislabeled; en D=want-to."},
  {id:62, lang:"ilo", op:"replace", segments:[["E","Kayat"],["A","‌ko a"],["D","malpas"],["B","daytoy a libro"],["C","sakbay ti panagngudo ti bulan"]], finding:"ilo Kayatko A-mislabeled; en E=want-to."},
  {id:98, lang:"ilo", op:"replace", segments:[["B","Kayat"],["A","‌ko a"],["C","i-order"],["D","daytoy a"],["E","taraon"]], finding:"ilo Kayatko A-mislabeled; en B=want-to."},

  // ilo Kayatko + D-letter 誤付け（#44/#58/#71）
  {id:44, lang:"ilo", op:"replace", segments:[["D","Kayat"],["A","‌ko a"],["C","agbiahe"],["B","iti amin a lubong"]], finding:"ilo (i) Kayatko A-mislabel, (ii) D wrongly on lubong (world). Merge B."},
  {id:58, lang:"ilo", op:"replace", segments:[["E","Kayat"],["A","‌ko a"],["D","mangala iti"],["C","retrato"],["B","daytoy a templo"]], finding:"ilo (i) Kayatko A-mislabel, (ii) D wrongly on templo."},
  {id:71, lang:"ilo", op:"replace", segments:[["D","Kayat"],["A","‌ko a"],["C","pasayaaten"],["B","ti panagsaok"]], finding:"ilo (i) Kayatko A-mislabel, (ii) D wrongly on panagsaok."},

  // ilo Masapul 義務モーダル A→D（#54/#64）
  {id:54, lang:"ilo", op:"replace", segments:[["D","Masapul a"],["C","salakniban"],["B","ti aglawlaw"]], finding:"ilo Masapul mislabeled A; impersonal modal → D."},
  {id:64, lang:"ilo", op:"replace", segments:[["D","Masapul a"],["C","ikarga"],["B","ti selponko"]], finding:"ilo Masapul mislabeled A; en/ceb D."},

  // ilo Padasek try-1sg 分割（#83）
  {id:83, lang:"ilo", op:"replace", segments:[["D","Padas"],["A","‌ek"],["C","ti ag-ehersisyo"],["B","tunggal bigat"]], finding:"ilo Padasek fuses try+1sg; D=try."},

  // ilo 役割文字スクランブル（#95/#38/#81）
  {id:95, lang:"ilo", op:"replace", segments:[["C","Mapan"],["D","ak"],["B","iti opisina"],["A","sakay iti bisikleta"]], finding:"ilo full A/B/C/D scramble; relabel and drop余剰 kanayon."},
  {id:38, lang:"ilo", op:"replace", segments:[["B","Ti linek ti init"],["D","ditoy"],["C","ket napintas"]], finding:"ilo A=Ti linek ti + D=init = mislabeled split of B=sunset."},
  {id:81, lang:"ilo", op:"replace", segments:[["C","Ita nga aldaw"],["E","ti ulok"],["F","ket agsakit"]], finding:"ilo A=today (should be C); B=head (E); C=hurt (F)."},

  // ilo クリティック分割：B/A 欠落の救済（#28/#40）
  {id:28, lang:"ilo", op:"replace", segments:[["A","Mabalin"],["B","‌mo"],["A","kadi"],["C","a irekomenda"],["F","ti nasayaat a"],["E","restaurant"]], finding:"ilo Mabalinmo fuses 2sg.GEN; ceb splits B=ka."},
  {id:40, lang:"ilo", op:"replace", segments:[["E","Amm"],["A","‌om kadi"],["C","no sadino"],["D","ti"],["B","opisina ti koreo"]], finding:"ilo Ammom fuses 2sg.GEN."},

  // ilo A|E 融合 cat+1sg.GEN（#73）
  {id:73, lang:"ilo", op:"replace", segments:[["A","Ti pusa"],["E","‌k"],["D","ket agtuturog"],["F","iti"],["B","kamako"],["G","tunggal"],["C","rabii"]], finding:"ilo A|E fuses cat+1sg.GEN; split with ZWNJ."},

  // ilo 指示詞 A 欠落（#99）
  {id:99, lang:"ilo", op:"replace", segments:[["C","Mano"],["A","daytoy a"],["B","souvenir"]], finding:"ilo demonstrative A missing; ceb splits."},

  // ilo A↔B 逆転 thank you（#100）
  {id:100, lang:"ilo", op:"replace", segments:[["B","Agyamanak"],["A","iti amin"]], finding:"ilo A↔B reversed; en/ceb/tl all B=thank-you A=everything."},
]
```

---

## サマリ

- **対象ファイル:** `/home/jounlai/langmap/langmap_reviews/69_open.md`
- **発見件数:** 21 件（全 ilo、確実 20 + 蓋然 1）
- **支配的欠陥タイプ:** **ilo モーダル動詞＋人称クリティック融合に起因する palette 役割文字の不整合**。具体的には (i) `Kayatko`（want+1sg.GEN）が A/B/D/E のいずれにも標示されうる cross-sentence 非一貫性、(ii) `Masapul`（must）が A 主語に誤標、(iii) 役割文字 D/B が動詞 vs 目的語名詞の意味と乖離して付与、(iv) クリティック `-ak/-ko/-mo/-na/-om/-ek` の独立分節欠如（ZWNJ glue 未適用）。`feedback_modal_verb_not_subject.md`・`feedback_impersonal_modal_as_D.md`・`feedback_glue_marker.md`・`feedback_cross_sibling_role_consistency.md` の累積適用で大半が機械的に解決可能。ceb は #25 以降の Austronesian 規約に概ね準拠し独立指摘は 0（hil/war/bcl/pam/pag は 100/100 未収録のため対象外、新規言語追加候補としてフラグ）。

---

## Dev response — round 1 (2026-06-04)

レビュアー (@ph_west_visayan) 21 件 / 全 ilo の指摘を受領。data.js を読み取り専用で参照し、全 21 件について「Current」セグメントを `node` で逐一照合した結果、レビュアー記載と完全一致を確認（#9/#19/#22/#32/#44/#48/#58/#62/#71/#98/#54/#64/#83/#95/#38/#81/#28/#40/#73/#99/#100 — A|E 複合 #73 含む）。

**採否:** 21 件すべて受諾し edit 化。Closure: **applier-ready / 21 of 21 accepted**。

### 採用理由（class 別サマリ）

1. **`Kayatko` モーダル＋1sg.GEN クリティック分割（#9/#19/#22/#32/#44/#48/#58/#62/#71/#98）**: memory `feedback_modal_verb_not_subject.md` の規約「モーダル動詞は subject A ではなく en palette ラベルに整合」を厳格適用。各文の en palette が B/D/E のいずれを「want to」に割り当てているかに従って ilo ラベルを揃え、`-ko` クリティックは ZWNJ (`‌ko`) で独立 A 化（`feedback_glue_marker.md`）。これにより cross-sentence で `Kayat` が常にモーダル位置を占める一貫性が成立する。

2. **D ラベル誤付け（#44 lubong=世界, #58 templo=寺, #71 panagsaok=発音）**: いずれも対象名詞が D に誤付与され、本来 D に立つべきモーダル「want to」が A に誤標。`feedback_cross_sibling_role_consistency.md` の duplicate-letter outlier 違反。D を `Kayat` に移し、対象名詞は B に集約。#58 は en 構造「E:want to + D:take + C:photo + B:of this temple」を完全反映するため `mangala iti` を D（take）、`retrato` を C、`daytoy a templo` を B に再構成。

3. **`Masapul` 非人称モーダル A→D（#54/#64）**: `feedback_impersonal_modal_as_D.md`（Il faut, Hay que, Bisogna → D）と同型。ceb は両件で `Kinahanglan` を正しく D 標示しており、ilo のみが A 誤標していたためレビュアー判定通り D 化。#54 では A（we）が ilo で省略されているが、en でも主語が明示的にはタガログ系で省略可能であり pro-drop と同様 legitimate。

4. **`Padasek` (try+1sg.GEN) → D+A 分割（#83）**: Kayatko と同構造。`-ek` を ZWNJ で独立 A 化、`Padas` を D（try）に。

5. **役割文字スクランブル系（#95/#38/#81）**:
   - **#95**: 4 ラベル全部が en/ceb と乖離。レビュアー提案通り `Mapan=C` (go), `ak=D` (I), `iti opisina=B`, `sakay iti bisikleta=A` に再配置し、余剰 `kanayon`（always; en に対応語なし）を削除。これは語彙誤りも同時に解消する。
   - **#38**: `Ti linek ti` + `init` の二分節は本来 en B=「The sunset」一括に対応するため B に統合。`ditoy`=here=D、`ket napintas`=is beautiful=C。A は ilo に「from」相当語が無い legitimate omission。
   - **#81**: 完全な三項相互入替。`Ita nga aldaw`=today=C、`ti ulok`=head=E（headache）、`ket agsakit`=hurt=F（have）。A は主語クリティックが内包されている pro-drop case として省略。

6. **クリティック融合解消（#28 Mabalinmo, #40 Ammom, #73 pusakko）**: いずれも 2sg.GEN/1sg.GEN クリティックが動詞・名詞に融合し palette A/B/E のいずれかが欠落。ZWNJ で独立分節化。#28 では A が `Mabalin` と `kadi` の 2 箇所に分かれるが、間に B（`‌mo`）が挟まるため adjacent-same-ID guard には抵触しない（applier の display 側で同一 ID 並びは merge されるが、ここでは ID シーケンスが A→B→A→C で離隔）。

7. **指示詞 A 欠落（#99）**: `daytoy a souvenir` 一括を `daytoy a` + `souvenir` に分割し A=指示詞、B=名詞。ceb のサイブリング構造に整合。

8. **A↔B 逆転（#100）**: `Agyamanak`=thank-you は en/ceb/tl 全てで B、`iti amin`=everything は A。最小修正としてラベルのみ入替（`-ak` の 1sg.NOM クリティックは en に対応役割が無いため独立分節化せず B 内部に残す）。

### 制約遵守の確認

- **adjacent-same-ID guard**: 21 件すべてで隣接同 ID なし（JSON 出力後 `node` で検証済）。
- **data.js read-only**: 一切編集していない。
- **id フィールド**: 全エディットに正しい数値 ID を含む。

### Edits JSON

`/tmp/lm_edits_69.json` (21 edits, 全 `lang:"ilo"`, op:`replace`)

### Status

- Issues addressed: **21 / 21**
- Edits emitted: **21**
- Closure: **applier-ready**
- JSON path: `/tmp/lm_edits_69.json`

