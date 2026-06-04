# LangMap データレビュー #101 — Mental-state verbs cross-cutter (want / believe / think / know / forget / feel-happy)

## レビュアー自己紹介 (ペルソナ)

私は **Prof. Dr. Margarethe Solveig Vannenheim-Östberg (handle: @mental_state_x)**、Lund 大学言語学博士 (2013、心的状態動詞の通言語類型論)、Max-Planck-Institut für Psycholinguistik (Nijmegen) 上級研究員 (2014–2019、Cross-Linguistic Lexicon of Cognition Verbs プロジェクト主任)、UCL Linguistics 客員教授 (2020–2022)、現在 Stockholm University Centre for Language & Cognition で **「mental-state predicates の通言語的 segmentation 類型」** を専門に dataset 監査を担当。常用資料は Wierzbicka *Semantics: Primes and Universals* (OUP 1996), Goddard & Wierzbicka eds. *Semantic and Lexical Universals* (Benjamins 1994), Aikhenvald & Dixon eds. *Areal Diffusion and Genetic Inheritance* (OUP 2001) §10 (cognition verbs), Cristofaro *Subordination* (OUP 2003) §7 (complementation), Noonan "Complementation" in Shopen ed. (CUP 2007 vol 2), Givón *Syntax* (Benjamins 2001) Vol 2 ch. 12 (complement-taking predicates)。

本ラウンドの目的は **mental-state verb cross-cutter audit** である。対象軸は (i) **epistemic vs desiderative** (know/believe/think vs want/need), (ii) **doxastic** (believe vs think), (iii) **stative vs eventive** (forget=psychological vs left=eventive), (iv) **lexical specificity** (think-that propositional vs think-of object). 対象 8 セル: #22 want-to-learn / #29 forgot / #44 want-to-travel / #62 want-to-read-finish / #76 feel-happy / #78 think-this-is-good / #80 believe-studying-abroad / #99 (= souvenir 価格、mental-state verb 不含 — 本セルは scope 外と判断、scope 説明のみ記載)。

## 参考文献
- Wierzbicka, A. *Semantics: Primes and Universals* (OUP 1996) ch. 6, 8 (KNOW/THINK/WANT primes)
- Goddard, C. & Wierzbicka, A. eds. *Semantic and Lexical Universals* (Benjamins 1994), pp. 39-44 (mental predicate inventory)
- Cristofaro, S. *Subordination* (OUP 2003) §7 (complement-taking predicates typology)
- Noonan, M. "Complementation" in Shopen ed. *Language Typology and Syntactic Description* Vol 2 (CUP 2007) §2.1.1 (CTP semantic classes)
- Givón, T. *Syntax: An Introduction* Vol 2 (Benjamins 2001) ch. 12 (epistemic vs manipulative CTP)
- Aikhenvald, A. *Imperatives and Commands* (OUP 2010) §2.5 (desiderative morphology)
- 既出: #98 closed (cross-sibling consistency policy), `_policy_deferred.md` §#76-A
- Memory: `feedback_cross_sibling_role_consistency.md`, `feedback_split_segments_like_reference.md`, `feedback_segment_splitting.md` (rules 6/8/12 verb/tense/aux), `feedback_modal_verb_not_subject.md`, `_omission_guidelines.md` B.1 (pro-drop), B.3 (do-support 欠落)

## 検証方法

`/tmp/audit101.mjs` で `/home/jounlai/langmap/data.js` を JSON 化し、対象 8 セル全変種 (約 220 lang/cell) を dump (`/tmp/audit101_dump.txt`, 1800 行)。(i) en/ja 参照との role-letter 整合性, (ii) cross-cell (同一 mental-state verb の letter 割当一貫性), (iii) sibling 内 outlier (duplicate-letter / 役割ずれ), (iv) composite tag (`B|F` 等) の使用整合性, (v) `_omission_guidelines.md` への適合を確認。**data.js は READ-ONLY**、提案は JSON edit としても各項目末に転載。

確信度: **【確実】** = sibling consensus & memory rule 双方で確定、**【蓋然】** = sibling 整合の方向で apply 妥当だが lexical-style 議論あり、**【要検討】** = 本ラウンドでは policy 確定不可、`_policy_deferred.md` 追記候補。

---

## 指摘事項 (Issues found) — 19 件

### 1. **Cross-cell role-letter inconsistency for "want": #44 uses D=want, #22/#62 use E=want** — 全変種に伝播 【要検討】

- **Current (en reference):**
  - #22 en: `A:I E:want to D:learn B:a F:new C:language` — 6-letter palette、want=E
  - #44 en: `A:I D:want to C:travel B:around the world` — 4-letter palette、want=D
  - #62 en: `A:I E:want to D:read B:this book C:by the end of the month` — 5-letter palette、want=E
- **Problem:** 同一 lexical item「want to」の role-letter が **#44 のみ D**、**#22/#62 では E**。en 参照の palette 設計に依存し、全 ~220 変種に伝播 (例 ka: #44 D:მინდა vs #22/#62 E:მინდა; ar: #44 D:أريد vs #22/#62 E:أريد; fr/de/it/es 全 Romance/Germanic も同)。`feedback_cross_sibling_role_consistency.md` の精神では同一 lexeme は同一 letter が望ましいが、本件は palette 全体の letter pool size (#44=4, #22=6, #62=5) に応じた相対配分であり、**en 設計者の判断**に起因。
- **Policy resolution:** #98 §1 (palette メタ documentation) と同じく、**「letter 割当は cell ごとの palette pool size に従う相対配分であり、cross-cell の同一 lexeme での letter 一致は副次的」** との policy が暗黙に運用されている。`_policy_deferred.md` §#101-A として明文化推奨。
- **Decision:** **policy documentation のみ**、apply なし。今後の cross-cell audit でこの非整合を「outlier」として再 flag しないための policy ガード。
- **Edit:** `{id:0, lang:"_meta", op:"document", finding:"Cross-cell role-letter for same lexeme (e.g., 'want to') varies by cell-specific palette pool size: #22/#62 (E) vs #44 (D). All ~220 variants inherit en's assignment. Policy: letter assignment is cell-relative; cross-cell lexeme-letter mismatch is acceptable when 100% of variants follow en uniformly within each cell. Document in _policy_deferred.md §#101-A."}` 【要検討】

### 2. **#76 ja A=「音楽を」 — object-marked NP に A (subject slot) を割当** vs sibling 全体は E=subject (I) 【要検討】

- **Current:** ja `A:音楽を B:聴くと D:幸せな気持ちになる` — A=「音楽を」(accusative-marked object)
- **Reference (en):** `E:I D:feel happy C:when E:I B:listen to A:music` — A=「music」(object NP, no case marker), E=subject (I)
- **Problem:** ja で A が **object NP** (を-marked)、E (subject) が**ない**。en 参照では A=object NP (音楽/music), E=subject (I)。ja は E (subject) を pro-drop しているため、A スロットを object に転用している。これは `_omission_guidelines.md` B.1 (pro-drop) で **subject の欠落** は正当だが、その結果 A スロット (en では object) が転用されている **わけではなく**、ja A=「音楽を」は object として正しく en の A=music に対応している。**実は整合**。
- **Re-evaluation:** ja の A は「音楽を」で、en の A は「music」。役割は同じ (object)。subject の I/私 は両言語で省略可能だが、en は明示し ja は省略するという話で、A の役割は揃っている。誤読を防ぐため記録のみ。
- **Decision:** **整合確認、apply なし**。ただし ja で「私は」を補うほうが en と完全並列になり親切。stylistic な提案。
- **Edit:** `{id:76, lang:"ja", op:"document", finding:"ja A:音楽を correctly matches en A:music (object role); E:I is pro-dropped in ja per B.1. Sibling-consistent: ko also drops E (A:음악을 B:들을 C:때 D:행복함을 느낀다). No change needed; documentation only to prevent mis-flagging in future audits."}` 【要検討】

### 3. **#76 kn (Kannada) — C (when) 欠落、subject E 欠落、sibling 全体と乖離** 【蓋然】

- **Current:** kn `A:ಸಂಗೀತ B:ಕೇಳಿದಾಗ D:ಸಂತೋಷವಾಗುತ್ತದೆ` — 3 segment のみ
- **Reference:** en `E:I D:feel happy C:when E:I B:listen to A:music` (6 seg); 兄弟 hi `C:जब A:संगीत B:सुनता हूँ F:तो D:खुश महसूस करता हूँ` (5 seg、C:जब で when 明示)、ta `A:இசை B:கேட்கும்போது D:மகிழ்ச்சியாக உணர்வேன்` (3 seg、kn と同パターン)
- **Problem:** kn の B「ಕೇಳಿದಾಗ」は **converb 形 (-aga = 「~したとき」)** で、「listen」+「when」が **融合**。融合は am の `B|C:ስሰማ` (Amharic 同パターン) では `B|C` composite で明示。kn も `B|C:ಕೇಳಿದಾಗ` composite を採用することで sibling consistency が上がる。ta も同様に `B|C:கேட்கும்போது` 候補。
- **Policy:** Memory `feedback_split_segments_like_reference.md` + #98 §1 documentation policy。
- **Decision:** **apply: kn の B → `B|C` composite**。
- **Edit:** `{id:76, lang:"kn", op:"replace", segments:[["A","ಸಂಗೀತ"],["B|C","ಕೇಳಿದಾಗ"],["D","ಸಂತೋಷವಾಗುತ್ತದೆ"]], finding:"kn converb form ಕೇಳಿದಾಗ fuses 'listen' (B) + 'when' (C); align with am B|C:ስሰማ convention to mark fusion explicitly. Same recommendation applies to ta:கேட்கும்போது (see Issue #4)."}` 【蓋然】
- **Edit:** `{id:76, lang:"ta", op:"replace", segments:[["A","இசை"],["B|C","கேட்கும்போது"],["D","மகிழ்ச்சியாக உணர்வேன்"]], finding:"ta converb -pōtu fuses 'listen' (B) + 'when' (C); align with kn/am B|C composite convention."}` 【蓋然】

### 4. **#62 th_n / th_s — duplicate C-letter** (`C:จบ` aspectual + `C:ก่อนสิ้นเดือน` time-adverb) 【確実】

- **Current:**
  - th_n: `E:อยาก D:อ่าน C:จบ B:ปื้มนี้ C:ก่อนสิ้นเดือน`
  - th_s: `E:อยาก D:อ่าน C:จบ B:หนังสือนี้ C:ก่อนสิ้นเดือน`
- **Reference:** th `A:ฉัน E:อยากจะ D:อ่าน B:หนังสือเล่มนี้ C:ให้เสร็จก่อนสิ้นเดือน` (single C で「finish-by-end-of-month」を統合)
- **Problem:** **C が 2 つ** (จบ=finish-aspect, ก่อนสิ้นเดือน=time-adverb)。`feedback_cross_sibling_role_consistency.md` の duplicate-letter outlier 該当。en は `C:by the end of the month` で「finish」は明示せず、ja は `E:終えたい` (V-finish-want fusion) で D:読み (read) + E (終え+たい)。Thai 北部・南部方言の現在の構造は **「finish」を C に切り出し、「by end of month」も C に**残しているため重複。
- **Proposed fix:** 「finish」を C の代わりに **D の一部** (D:อ่าน+จบ) に統合するか、**「ก่อนสิ้นเดือน」を C 単独に**するか、または **th と同じく `C:ให้เสร็จก่อนสิ้นเดือน` を単一 C** に統合。後者 (th と同じ) が sibling consistency に最適。
- **Decision:** **apply: th_n/th_s の C を統合 (th と同方針)**。
- **Edit:** `{id:62, lang:"th_n", op:"replace", segments:[["E","อยาก"],["D","อ่าน"],["B","ปื้มนี้"],["C","ให้จบก่อนสิ้นเดือน"]], finding:"Duplicate C (จบ aspectual + ก่อนสิ้นเดือน adverb). Merge into single C per th convention C:ให้เสร็จก่อนสิ้นเดือน. Use ให้จบ (北部方言形) instead of ให้เสร็จ for dialect-marker preservation."}` 【確実】
- **Edit:** `{id:62, lang:"th_s", op:"replace", segments:[["E","อยาก"],["D","อ่าน"],["B","หนังสือนี้"],["C","ให้จบก่อนสิ้นเดือน"]], finding:"Same duplicate-C fix; merge to single C."}` 【確実】

### 5. **#62 zh_song — H:把 が D に誤分類** (`D:把 B:這書 D:讀完` adjacent duplicate-D with B between) 【確実】

- **Current:** zh_song `A:我 E:想 C:在月底前 D:把 B:這書 D:讀完`
- **Sibling (Chinese family):** zh #29 `H:把`, zh_song #29 `H:把`, zh_sc #29 `H:把`, zh_db #29 `H:把` — **BA-construction marker 把 は H** で一貫。
- **Problem:** zh_song #62 で **把 が D に誤分類**、結果 `D:把 B:這書 D:讀完` と D が 2 つ (B を挟む)。`feedback_no_adjacent_same_segments.md` の adjacent-same は B を挟むので技術的には逃れているが、duplicate-letter は **#29 の H:把 慣行** に反する。
- **Proposed fix:** `D:把 → H:把`、すると `A:我 E:想 C:在月底前 H:把 B:這書 D:讀完` で duplicate-D 解消。
- **Decision:** **apply: zh_song #62 の D:把 → H:把**。
- **Edit:** `{id:62, lang:"zh_song", op:"replace", segments:[["A","我"],["E","想"],["C","在月底前"],["H","把"],["B","這書"],["D","讀完"]], finding:"BA-marker 把 wrongly tagged as D (duplicate-D with 讀完). All Chinese variants tag 把 as H in #29 (zh/zh_song/zh_sc/zh_db). Align with H convention; resolves duplicate-D."}` 【確実】

### 6. **#78 th_n — A=「私」欠落 in D segment** (sibling th_s と乖離) 【蓋然】

- **Current:**
  - th_n: `D:กิ๊ดว่า B:แผน A:นี้ C:ดี แล้ว` — D に subject 含まず (กิ๊ด=think)
  - th_s: `D:ฉาน คิดว่า B:แผน A:นี้ C:ดี แหละ` — D に subject「ฉาน」融合
  - th: `D:ฉัน คิดว่า B:แผน A:นี้ C:ดี`
- **Problem:** th_n のみ subject 欠落。th/th_s は D-segment に subject を融合 (en の `D:I think` 同型)。`feedback_cross_sibling_role_consistency.md`。Thai 北部方言 (kham mueang) は pro-drop が会話で頻繁だが、本 dataset は formal pattern を採用しており th/th_s と揃えるべき。
- **Proposed fix:** `D:กิ๊ดว่า → D:เฮา กิ๊ดว่า` (北部の 1sg 「เฮา」を融合)。
- **Decision:** **apply: th_n の D に「เฮา」を補う**。
- **Edit:** `{id:78, lang:"th_n", op:"replace", segments:[["D","เฮา กิ๊ดว่า"],["B","แผน"],["A","นี้"],["C","ดี แล้ว"]], finding:"th_n drops 1sg subject in D; sibling th/th_s fuse subject into D (D:ฉัน คิดว่า / D:ฉาน คิดว่า). Add 北部方言 1sg เฮา to align."}` 【蓋然】

### 7. **#29 Romance vs Germanic — perfect aux+pp split 不一致** (`fr C:ai oublié` 単一 vs `de D:habe ... C:vergessen` 分割) 【要検討】

- **Current:**
  - fr: `A:J' C:ai oublié B:mon parapluie D:dans le train` (aux+pp 単一 C)
  - de: `A:Ich D:habe B:den Regenschirm E:im Zug C:vergessen` (D:habe / C:vergessen 分割)
  - nl: `A:Ik D:heb B:mijn paraplu E:in de trein C:vergeten` (de と同)
  - it: `A:Io C:ho dimenticato B:l'ombrello D:sul treno` (fr 同型、C 単一)
- **Problem:** **Romance** (fr/it/fr_qc/fr_be/fr_ch/fr_af/oc/scn/nap/ca/ro/pt 等) は perfect の **「avere/avoir/essere + pp」を単一 C** で扱う。**Germanic** (de/nl/de_gsw/de_at/de_by/nds/af/sv 等) は **D-aux + C-pp に分割**。`feedback_segment_splitting.md` rule 8 (tense/aux) は split 推奨だが、Romance 一家全体が単一 C 慣行で内部整合。Germanic 一家全体が分割で内部整合。**両 family は内部一貫しているが互いに乖離**。
- **Policy resolution:** #98 §1 と同 policy 適用可: 「sibling-internal (= family-internal) consistency が一次、family-cross divergence は容認」。両 family とも family 内 100% 一貫しているため policy 整合。明文化のみ。
- **Decision:** **保留、policy 文書化のみ**。
- **Edit:** `{id:29, lang:"_meta", op:"document", finding:"Periphrastic perfect aux+pp segmentation diverges across Romance (single C: fr 'ai oublié', it 'ho dimenticato') vs Germanic (split D-aux + C-pp: de 'habe...vergessen', nl 'heb...vergeten'). Both families internally consistent (100%); accept per #98 §1 cross-family-divergence policy. Document in _policy_deferred.md §#101-B."}` 【要検討】

### 8. **#29 epistemic vs eventive — `forget` vs `left` の lexical specificity (英語方言クラスタ)** 【要検討】

- **Current:**
  - en/en_sco/en_in/en_ang: `C:forgot` (epistemic — 記憶失敗)
  - en_aave/en_south: `C:done left` (eventive — 行為報告)
  - en_ie/en_app/en_au/en_yk/en_ck: `C:left` (eventive)
  - en_sg: `C:forget` (bare verb)
- **Problem:** 同一意味場 (傘を忘れた) で **epistemic (forget) vs eventive (left)** の lexicalization が英語方言で 4 vs 5 に分裂。Wierzbicka (1996) の Mental-Predicate Primes 議論では FORGET は epistemic primitive、LEAVE は physical/action verb で **意味的に異なる**。Role-letter (C) は両方とも揃っているため tag-letter 問題ではないが、**lexical specificity axis** (reviewer 提示の axis 4) で documentation 価値あり。
- **Policy:** これは方言の lexical preference 差で、tag-level の不整合ではない。今後の audit で「epistemic か eventive か」の意図を毎回問わずに済むよう、policy として記録。
- **Decision:** **policy documentation のみ**。
- **Edit:** `{id:29, lang:"_meta", op:"document", finding:"English dialect lexical split: epistemic 'forgot/forget' (en/en_sco/en_in/en_ang/en_sg) vs eventive 'left/done left' (en_aave/en_south/en_ie/en_app/en_au/en_yk/en_ck). Role-letter C consistent across both. Per Wierzbicka 1996 these are distinct mental-state primes (FORGET vs LEAVE/PUT) but both legitimate dialect lexicalizations for the same scenario. Accept; document in _policy_deferred.md §#101-C."}` 【要検討】

### 9. **#80 zh `B:留学` (単一) vs vi `B:du F:học` (分割) — 抽象「abroad-study」の compound 扱い不一致** 【蓋然】

- **Current:**
  - zh #80: `A:我 E:认为 B:留学 D:是 G:宝贵的 C:经历` — 留学 を単一 B
  - yue #80: `B:留學` 単一 B
  - vi #80: `A:Tôi E:tin H:rằng B:du F:học D:là I:một C:kinh nghiệm G:quý giá` — du+học 分割
  - vi_c/vi_s: 同 vi (B:du F:học 分割)
  - zh_song: `B:遊 F:學` 分割 (遊学 = travel-study)
- **Problem:** 漢字 compound 「留学/遊学/du-học」を **zh/yue は単一 B**、**vi/vi_c/vi_s/zh_song は B+F に分割**。en 参照は `B:studying F:abroad` で分割。`feedback_split_segments_like_reference.md` (rule: reference 言語の構造に揃える) より、zh/yue も `B:留 F:学` 風に分割可能性あり。ただし zh の「留学」は単一形態素として確立しており、現代漢字辞典でも一語扱い。
- **Policy resolution:** ja/ko は **`B|F:留学`/`B|F:유학` composite** で「分割困難な融合」を明示。zh も同じ B|F composite に揃えれば sibling consistency 改善。yue/nan/wuu/cdo も同様。
- **Decision:** **apply: zh / yue / nan / wuu / cdo / hak_cn の `B:留学/留學` → `B|F:留学/留學` composite**。
- **Edit:** `{id:80, lang:"zh", op:"replace", segments:[["A","我"],["E","认为"],["B|F","留学"],["D","是"],["G","宝贵的"],["C","经历"]], finding:"留学 is a single morpheme (study-abroad fusion) like ja 留学; align with ja/ko B|F composite per feedback_split_segments_like_reference.md. en splits B:studying F:abroad; Chinese cannot split so use B|F composite."}` 【蓋然】
- **Edit:** `{id:80, lang:"yue", op:"replace", segments:[["A","我"],["E","相信"],["B|F","留學"],["D","係"],["G","寶貴嘅"],["C","經驗"]], finding:"Same B|F composite for 留學."}` 【蓋然】
- **Edit:** `{id:80, lang:"nan", op:"replace", segments:[["A","我"],["E","相信"],["B|F","留學"],["D","是"],["G","寶貴的"],["C","經驗"]], finding:"Same B|F composite for 留學."}` 【蓋然】
- **Edit:** `{id:80, lang:"wuu", op:"replace", segments:[["A","我"],["E","相信"],["B|F","留学"],["D","是"],["G","宝贵个"],["C","经历"]], finding:"Same B|F composite for 留学."}` 【蓋然】
- **Edit:** `{id:80, lang:"cdo", op:"replace", segments:[["A","我"],["E","相信"],["B|F","留學"],["D","是"],["G","寶貴其"],["C","經驗"]], finding:"Same B|F composite for 留學."}` 【蓋然】

### 10. **#80 zh_song — `B:遊 F:學` の B/F 分割は意味的に逆** (遊=travel, 學=study → en では studying=B, abroad=F) 【確実】

- **Current:** zh_song `B:遊 F:學` — 遊 (travel/abroad の暗示) = B, 學 (study) = F
- **Reference (en):** `B:studying F:abroad` — study=B, abroad=F
- **Problem:** zh_song の **B/F が en と逆**。zh_song の 遊 は「旅游」「遊学」の travel-意味で abroad 暗示、學 は study (の動作)。en と整合させるなら `B:學 F:遊`。だが項目 9 と整合させて **B|F:遊學 composite** が最も安全。
- **Decision:** **apply: zh_song を B|F:遊學 composite に**。
- **Edit:** `{id:80, lang:"zh_song", op:"replace", segments:[["A","我"],["E","覺得"],["B|F","遊學"],["D","是"],["G","難得的"],["C","經歷"]], finding:"zh_song split B:遊 F:學 is reverse of en B:studying F:abroad. Align with #9 policy: use B|F:遊學 composite for the fused study-abroad concept."}` 【確実】

### 11. **#76 es_eu / es_mx / es_ar / es_co / es_cl (5 var) vs es_cu / es_pe / es_an (3 var) — 主節先行 vs 従属節先行の order 分裂** 【要検討】

- **Current:**
  - es_eu/es_mx/es_ar/es_co/es_cl (5): `D:Me siento feliz C:cuando B:escucho A:música` — 主節 (D) 先行
  - es_cu/es_pe/es_an (3): `C:Cuando B:escucho A:música D:me siento felí/feliz` — 従属節 (C) 先行
- **Reference (en):** `E:I D:feel happy C:when E:I B:listen to A:music` — 主節 (D) 先行
- **Problem:** **5 vs 3 sibling 分裂**。es_cu/es_pe/es_an は **「Cuando + 主動詞 ... + 主節」** という従属節先行語順を採用。スペイン語の **両方の語順が grammatical** (NGLE §31.4) だが、sibling 内 100% 整合とは言えない。en は主節先行で、5 variants はこれに揃う。3 variants は en と乖離。
- **Policy resolution:** #76 で **Caribbean Spanish (cu/pe/an)** が従属節先行を好む傾向は Lipski (1994) §6.6 で記述あり (情報構造による preposing)。3 variants で内部一貫しているため Carib subfamily の方言特徴として保持する選択もあり。だが 5 variants 多数派に揃えるほうが #98 §4 (debemos 統一) の方針と一貫。
- **Decision:** **apply: es_cu/es_pe/es_an を主節先行に統一**。
- **Edit:** `{id:76, lang:"es_cu", op:"replace", segments:[["D","Me siento felí"],["C","cuando"],["B","ehcucho"],["A","música"]], finding:"Align with 5 sibling variants (eu/mx/ar/co/cl) and en main-clause-first order. Preserve es_cu seseo (felí, ehcucho)."}` 【蓋然】
- **Edit:** `{id:76, lang:"es_pe", op:"replace", segments:[["D","Me siento feliz"],["C","cuando"],["B","escucho"],["A","música"]], finding:"Same main-clause-first alignment."}` 【蓋然】
- **Edit:** `{id:76, lang:"es_an", op:"replace", segments:[["D","Me siento felí"],["C","cuando"],["B","ehcucho"],["A","música"]], finding:"Same alignment; preserve es_an seseo/aspiration."}` 【蓋然】

### 11b. **代替案: es_cu/es_pe/es_an を従属節先行のまま保持** 【要検討】

- 11 の代替: Lipski §6.6 の Carib Spanish 情報構造を方言マーカーとして保持。3 variants で内部一貫済。`_policy_deferred.md` に「Carib Spanish #76 order divergence accepted」と記録。
- **Edit:** `{id:76, lang:"_meta", op:"document", finding:"Alternative to Issue #11: keep es_cu/es_pe/es_an subordinate-clause-first order as Carib Spanish dialect feature (Lipski 1994 §6.6). 3 variants internally consistent. Document in _policy_deferred.md §#101-D if preferred over Issue #11 unification."}` 【要検討】

### 12. **#29 es_co — `C:dejé` (eventive 'leave') vs sibling `C:olvidé/se me olvidó` (epistemic 'forget')** 【要検討】

- **Current:**
  - es_eu/es_mx: `C:me olvidé / C:se me olvidó` (epistemic)
  - es_cu: `C:Se me olvidó` (epistemic)
  - es_ar: `C:olvidé` (epistemic)
  - es_cl/es_pe: `C:Se me quedó` (eventive — 「~remained on me」)
  - **es_co: `C:dejé`** (eventive — 「leave/place」), **es_an: `C:Me he dejao`** (eventive)
- **Problem:** Issue #8 と同 axis (epistemic vs eventive) だが Spanish 内では **3 つの lexical 戦略** が共存:
  - (a) `olvidar(se)` = epistemic forget
  - (b) `quedarse` = eventive "remained on me" (ergative dative experiencer)
  - (c) `dejar(se)` = eventive "left/placed"
- es_co の `C:dejé` は (c) 戦略。`feedback_dialect_vocab_differences.md` (方言固有 vocabulary 差異) で擁護可能だが、`feedback_cross_sibling_role_consistency.md` の精神では 8 sibling 中の lexical 戦略を整理したい。Role-letter (C) は全て揃っているため tag-level 問題ではない。
- **Policy:** Issue #8 と同方針: documentation のみ、apply なし。
- **Decision:** **documentation のみ**。
- **Edit:** `{id:29, lang:"_meta", op:"document", finding:"Spanish #29 forget-verb lexicalization: (a) olvidar(se) epistemic (eu/mx/ar/cu); (b) quedarse eventive 'remained' (cl/pe); (c) dejar(se) eventive 'left' (co/an). All C-tagged. Per feedback_dialect_vocab_differences.md, all 3 strategies legitimate. Document in _policy_deferred.md §#101-E."}` 【要検討】

### 13. **#78 ar — A=「أن هذه」 (complementizer أن + dem) は B または H と分けるべき** 【蓋然】

- **Current:** ar `D:أعتقد A:أن هذه B:الخطة C:جيدة`
- **Reference:** en `D:I think A:this B:plan C:is good` (A=this 単独); fr `D:Je pense A:que ce B:plan C:est bon` (A=「que ce」complementizer+dem)
- **Problem:** ar の A は **「أن هذه」 (complementizer أن + demonstrative هذه)**。fr も同様に `A:que ce` で **complementizer+dem を A に融合**。#80 では `H:أن` (ar) / `H:qu'` (fr) で complementizer を **H に分離**。**cell-cross の policy 不整合** — #78 では融合、#80 では分離。
- **Policy resolution:** #80 の 9-letter palette では H が confined complementizer slot として独立。#78 の 4-letter palette では H が割り当てられず、complementizer は A に吸収。これは Issue #1 と同根 (palette pool size driven assignment)。許容可だが ar の `A:أن هذه` のような複合形は **B|A composite** で明示する手もあり (e.g., #80 の B|F composite と同パターン)。
- **Decision:** **policy documentation のみ**、apply 保留。
- **Edit:** `{id:78, lang:"_meta", op:"document", finding:"In #78 (4-letter palette), complementizer fuses with demonstrative in A (ar A:أن هذه, fr A:que ce). In #80 (9-letter palette), complementizer is split as H. Cell-relative palette-size driven assignment per Issue #1 policy. Accept; document."}` 【要検討】

### 14. **#80 ar (MSA) — A (subject أنا) 欠落** vs ar_eg / ar_lev / ar_ma / ar_gulf / ar_iq / ar_tn / ar_sd 同欠落 【確実 整合】

- **Current:** ar #80 `E:أعتقد H:أن B:الدراسة F:في الخارج D:هي C:تجربة G:قيّمة` — A 欠落
- **Sibling:** ar_eg `E:بفتكر H:إن B:الدراسة F:برة C:تجربة G:قيّمة`、ar_lev/ar_ma/ar_gulf/ar_tn/ar_sd 同様に A 欠落、ar_iq のみ A=أني あり
- **Problem:** ar 全変種で **A 欠落が常態** (pro-drop に対応)。`_omission_guidelines.md` B.1 で正当。ar_iq のみ A=أني を入れているが、これは Iraqi vernacular の analytic shift 反映。Sibling 内 8/9 が A 欠落で **outlier は ar_iq**。だが ar_iq の A 明示は en 参照 (A:I) との整合を高める方向で、必ずしも修正対象ではない。
- **Decision:** **documentation のみ**、Arabic family の pro-drop 整合は確認済。
- **Edit:** `{id:80, lang:"_meta", op:"document", finding:"Arabic family #80: 8/9 variants pro-drop A (MSA+ar_eg/ar_lev/ar_ma/ar_gulf/ar_tn/ar_sd); ar_iq alone marks A:أني. Per B.1 both legitimate. Internal consistency adequate; no fix needed."}` 【確実】

### 15. **#22 / #62 ja `E:たいです / E:終えたい` — 過去 #98 reviewer 推奨「desiderative 接尾辞は別 letter」と本セルの整合確認** 【確実】

- **Current:**
  - ja #22: `D:学び E:たいです` (verb stem D + desiderative+politeness E)
  - ja #62: `D:読み E:終えたい` (verb stem D + completive-aspect+desiderative E)
- **Sibling family (ja_*):** ja_osa `D:覚え E:たいねん`, ja_aom `D:覚え E:てぇじゃ`, ja_oki `D:習い E:ぶさんどー`, ja_hak `D:学び E:たいっちゃんね` — 全変種で **stem-D + desiderative-E** split を採用。Memory `feedback_glue_marker.md` の ZWNJ prefix は agglutinative suffix の表示推奨だが、ja の本 segments は **既に独立 E として切り出されている**ため ZWNJ 不要。
- **Re-check #62 ja `E:終えたい`:** 「終え」 (finish-aspect) + 「たい」 (desiderative) の **2 morphemes が E に融合**。**完全な agglutinative split** をするなら `D:読み E:終え F:たい` の 3 分割が理論的可能。だが en の 5-letter palette では F は使われていないため、`E` への融合が妥当。
- **Decision:** **整合確認、apply なし**。今後の Japanese agglutinative split audit で再 flag しない policy 記録。
- **Edit:** `{id:62, lang:"_meta", op:"document", finding:"ja E:終えたい fuses 終え (aspect) + たい (desiderative); 3-way split D/E/F not pursued because en 5-letter palette doesn't expose F. Current E-fusion accepted per palette-pool-size policy (#1). Document."}` 【確実】

### 16. **#76 nl — duplicate E (subject) + 順序逆転** (`E:Ik D:voel me gelukkig C:als E:ik A:muziek B:luister naar`) 【確実 整合】

- **Current:** nl `E:Ik D:voel me gelukkig C:als E:ik A:muziek B:luister naar`
- **Reference:** en `E:I D:feel happy C:when E:I B:listen to A:music` — 同 pattern (E:I が 2 回)
- **Confirm:** nl は en と完全同型 (duplicate-E は en design)。`feedback_no_adjacent_same_segments.md` は adjacent (隣接) のみ禁止、本件は D/C/E/A/B を挟むので問題なし。**確認済整合**。
- **Decision:** **apply なし**。整合確認のみ。
- **Edit:** `{id:76, lang:"_meta", op:"document", finding:"Duplicate-E (subject 'I' repeated for main + subordinate clause) is en's design choice in #76. nl/sv/no/da/sco/en_sg/en_yk/en_ck/en_au/en_in all preserve duplicate-E. Acceptable per feedback_no_adjacent_same_segments.md (not adjacent). No fix needed."}` 【確実】

### 17. **#80 en_au `G:ripper`** — slang「素晴らしい」が `valuable` 役割 G を担う、reviewer axis (lexical specificity) で documentation 価値 【要検討】

- **Current:** en_au `A:I E:reckon B:studying F:overseas D:is I:a G:ripper C:experience`
- **Reference:** en `G:valuable`、en_app `G:right good`、en_yk `G:reight good`、en_ck `G:proper valuable`
- **Problem:** en_au の **「ripper」 は AusE slang で「素晴らしい」**。意味的には「valuable」とは別 (一般的 superlative)。Role-letter (G) は揃っているが lexical specificity (reviewer axis 4) で「精緻 vs 概略」の差。AusE dataset の方言マーカーとして許容、`feedback_dialect_vocab_differences.md` 該当。
- **Decision:** **apply なし、documentation のみ**。
- **Edit:** `{id:80, lang:"_meta", op:"document", finding:"en_au G:ripper is AusE generic superlative slang, semantically broader than 'valuable'. G-letter consistent; dialect-vocab marker legitimate per feedback_dialect_vocab_differences.md. Document; no fix."}` 【要検討】

### 18. **#78 ar_tn / ar_sd — A 位置が文末に移動** (`D:نظن B:هالخطّة C:باهية A:هاذي` — dem が文末) 【蓋然】

- **Current:**
  - ar_tn: `D:نظن B:هالخطّة C:باهية A:هاذي` — A=هاذي (dem) が **文末**
  - ar_sd: `D:أظن B:الخطة دي C:كويسة A:هي` — A=هي (3sg pron) **文末**
- **Sibling:** ar `D:أعتقد A:أن هذه B:الخطة C:جيدة` — A=「أن هذه」 を D の直後; ar_lev/ar_ma/ar_gulf 全て A を D 直後に置く
- **Problem:** Tunisian と Sudanese は dem を文末 (right-dislocation) に置き、A を NP の頭ではなく文末 dem に割当。これは **Arabic dialect の topicalization** だが、Sibling 9 中 2 outlier。`feedback_cross_sibling_role_consistency.md` で **多数派 (7) に揃える** が原則。
- **Decision:** **apply: ar_tn / ar_sd の A を NP 内部 (B 前) に移動**。Tunisian は `A:هالخطّة → A:هاذي + B:الخطّة` の頭位置で再構成。
- **Edit:** `{id:78, lang:"ar_tn", op:"replace", segments:[["D","نظن"],["A","هاذي"],["B","الخطّة"],["C","باهية"]], finding:"ar_tn places dem A:هاذي sentence-finally (right-dislocation outlier); 7 sibling Arabic variants place A before B (NP-head). Restructure to A:هاذي before B:الخطّة; drop pre-cliticized ها- from B."}` 【蓋然】
- **Edit:** `{id:78, lang:"ar_sd", op:"replace", segments:[["D","أظن"],["A","دي"],["B","الخطة"],["C","كويسة"]], finding:"ar_sd places dem A:هي sentence-finally; align with majority by moving dem A:دي before B:الخطة (drop final هي)."}` 【蓋然】

### 19. **#76 it / es_eu / fr / pt_br — Romance 全体で E (subject 'I') 欠落** sibling pro-drop 整合確認 【確実】

- **Current:**
  - it: `D:Mi sento felice C:quando B:ascolto A:musica` (E 欠落)
  - es_eu: `D:Me siento feliz C:cuando B:escucho A:música` (E 欠落)
  - es_mx: `D:Me pongo feliz ...` (E 欠落)
  - pt_br: `D:Me sinto feliz ...` (E 欠落)
  - fr: `E:Je D:suis heureux C:quand B:j'écoute A:de la musique` (**E 明示**)
  - pt_eu: `E:Eu D:fico feliz ...` (**E 明示**)
- **Problem:** Romance family 内で **subject (E:I) 明示 vs pro-drop が分裂**。pt_eu / fr は E 明示 (clitic subject pronoun が音韻独立)。it / es_eu / es_mx / pt_br は pro-drop。fr の「Je」は phonological reasons で省略不可、Italian/Spanish/BrazPort は省略可能。**文法的に正当な family-internal divergence**。`_omission_guidelines.md` B.1。
- **Decision:** **apply なし**、整合確認のみ。
- **Edit:** `{id:76, lang:"_meta", op:"document", finding:"Romance #76 subject-pronoun pattern: pt_eu/fr mark E:I (Eu/Je) because clitic pronouns are phonologically independent; it/es_eu/es_mx/pt_br pro-drop (E omitted) per B.1. Both grammatically required by respective standard grammars. Family-internal divergence accepted."}` 【確実】

---

## 確信度サマリ

- **【確実】** = 8 件 (Issues 4×2, 5, 10, 14, 15, 16, 19)
- **【蓋然】** = 9 件 (Issues 3×2, 6, 9×5, 11×3, 18×2 — apply 推奨だが review 要)
- **【要検討】** = 6 件 (Issues 1, 2, 7, 8, 11b, 12, 13, 17 — policy 文書化候補)

合計: **19 件**

## Policy proposals for `_policy_deferred.md`

- §#101-A: Cross-cell role-letter assignment is **cell-relative** (palette pool size driven); same lexeme may take different letters across cells. Not a sibling-consistency violation when 100% of variants follow en within each cell.
- §#101-B: Periphrastic perfect aux+pp segmentation: **Romance** family uses single C composite; **Germanic** family uses split D-aux + C-pp. Both family-internally consistent; cross-family divergence accepted.
- §#101-C: English dialect epistemic/eventive lexical split for #29: `forgot/forget` vs `left/done left`. Both legitimate dialect lexicalizations of the same scenario per Wierzbicka 1996 mental-state primes.
- §#101-D: (alternative to Issue #11) Carib Spanish (es_cu/es_pe/es_an) subordinate-clause-first order in #76 accepted as Lipski 1994 §6.6 dialect feature.
- §#101-E: Spanish #29 forget-verb has 3 strategies: olvidar(se) / quedarse / dejar(se). All legitimate.

---

## File path & count

- **File path:** `/home/jounlai/langmap/langmap_reviews/101_open.md`
- **Findings count:** 19


---

## Dev response — round 1 (2026-06-04)

apply2.mjs 経由で適用済。

- **適用 edit**: 17
- **policy/withdrawn 等で skip**: 11
- **headline**: th_n/th_s #62 dup-C 合体, zh_song #62 把 D→H, zh/yue/nan/wuu/cdo #80 留学 B|F composite, ar_tn/ar_sd dem-A 前置
- **JSON path**: /tmp/lm_edits_101.json
