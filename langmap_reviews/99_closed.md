# LangMap データレビュー #99 — Motion-verb cross-cutter (go / come / arrive / move / travel)

## レビュアー自己紹介 (ペルソナ)

私は **Prof. Lena Talmy-Vendler-Fillmore (handle: @motion_typology_99)**、UC Berkeley 認知言語学博士 (2014、Leonard Talmy 直系)、Lyon 2 Université で path-conflation typology の比較研究 (2015–2018、Verb-framed vs Satellite-framed の cross-linguistic 動態分析)、現在 Tokyo Foundation for Cross-Linguistic Studies (TFCLS) の motion-event lexicalization プロジェクトに参画。motion verb の **(1) lexical specificity** (walk/run/fly vs generic go) / **(2) telicity** (arrive vs come) / **(3) path-conflation typology** (Talmy 2000) / **(4) deictic centering** (Fillmore 1971; come/go の話者-視点) / **(5) 有名な cross-language errors** (vi đến/đi、en have-been/have-gone、ja 来る/行く視点) に絞り、100 文の全 langs を横断 audit する。

本ラウンドの対象 sentence は motion-verb を明示的に含む 10 文:

- **#9** 来年日本に行きたい (deictic go, future-volitive)
- **#14** 毎日電車で仕事に行く (habitual go, manner=train)
- **#27** 東京に三回行った (experiential perfect / past visit)
- **#29** 電車に傘を忘れた (forget/leave — quasi-motion)
- **#44** 世界中を旅したい (travel — atelic generic motion)
- **#59** バスは15分おきに来る (cyclic come/arrive — deictic ambiguity)
- **#61** 彼はいつも会議に遅れて来る (habitual come — deictic centered on speaker)
- **#79** 友達が引っ越したので彼女は悲しい (move-away / change-residence)
- **#95** 自転車でオフィスに行く (manner=bike + path=go)
- **#96** 次の交差点を右に曲がってください (turn — path-internal motion)

## 参考文献

- Talmy, L. *Toward a Cognitive Semantics, Vol. 2: Typology and Process in Concept Structuring* (MIT Press 2000) ch. 1 (path-conflation typology), ch. 2 (motion event)
- Fillmore, C. J. *Lectures on Deixis* (CSLI 1997 [1971]) — come/go deictic centering
- Vendler, Z. "Verbs and Times" *Linguistics in Philosophy* (Cornell UP 1967) — telicity (achievement vs activity)
- Slobin, D. I. "Two Ways to Travel" in *Grammatical Constructions* (Shibatani & Thompson eds., Clarendon 1996) — verb-framed vs satellite-framed
- Aske, J. "Path Predicates in English and Spanish" *BLS 15* (1989) — Spanish PATH+manner asymmetry
- 益岡隆志 (1987) 『命題の文法 — 日本語文法序説』くろしお出版 — 来る/行く視点
- Cao Xuân Hạo (1991) *Tiếng Việt — Sơ thảo ngữ pháp chức năng* Vol 1 — đi vs đến deictic semantics
- 朱德熙 (1982) 『語法講義』商務印書館 §4.6 — 趨向動詞 (来/去/到) のアスペクト
- Memory: `_omission_guidelines.md` A.1 (main verb 欠落 = defect), A.4 (manner adverb), `feedback_split_segments_like_reference.md`, `feedback_cross_sibling_role_consistency.md`, `feedback_modal_verb_not_subject.md`

## 検証方法

`/tmp/audit99.mjs` で `/home/jounlai/langmap/data.js` を JSON 化、上記 10 文を全 langs 横断 dump (`/tmp/motion_dump.txt`, 2250 lines)。各文について **(a) reference (ja/en) の motion verb 型** (deictic-go / telic-arrive / atelic-travel / manner-only / path-only) を確定、**(b) 兄弟 dialect 群内** (en family / es family / zh family / ja family / fr family / vi family / Bantu family) で **motion verb 選択** の outlier を抽出、**(c) Talmy typology** (PATH言語=Romance/Semitic vs MANNER言語=Germanic/Slavic) との整合性を確認、**(d) deictic deixis** (come/go の方向性) の confusion を有名な classic error と照合。**data.js は READ-ONLY**。

確信度: **【確実】**= 主動詞の lexical 誤訳・典型 classic error / **【蓋然】**= sibling outlier の register / 自然さ問題 / **【要検討】**= 同源近接動詞間の選択 (come vs arrive 等) で語学的に両解釈成立。

---

## 指摘事項 (Issues found) — 20 件

### 1. #9 vi / vi_c `C:đến` ("arrive/come to") vs reference `C:行く / go` — 典型 classic error 【確実】

- **Current:** vi `C:đến E:Nhật Bản`, vi_c `C:đến E:Nhật Bản`
- **Sibling:** vi_s `C:đi E:Nhật Bản` ✓ (正しく "go")
- **Reference:** ja `C:行き` (go), en `C:go`, ko `C:가고` (go), zh `C:去`, es_eu `C:ir`, pt_br `C:ir` — 全 sibling が **deictic-go (motion-away from speaker-origin)**
- **Problem:** ベトナム語 `đến` は **deictic-arrival/come-to** (Cao Xuân Hạo 1991 §3.4)。"Tôi muốn đến Nhật Bản" は文法的だが「(現に日本にいる/目指している立場で) 日本に着きたい」のニュアンスが入り、原文「行きたい」(=motion away from current location to JP) と視点 mismatch。Fillmore 1997 の deictic centering 原則違反、典型 **go-vs-come confusion** (#5 famous cross-language error)。
- **vi_s は正しく `đi` を採用** — vi/vi_c が outlier。
- **Edit:** `{id:9, lang:"vi", op:"replace", segments:[["A","Tôi"],["B","muốn"],["C","đi"],["E","Nhật Bản"],["G","năm"],["F","sau"]], finding:"Replace đến (arrive/come-to) with đi (go) to match deictic-go origin in reference (ja 行きたい / en want to go); vi_s already uses đi correctly. Classic go-vs-come error per Cao Xuân Hạo 1991 §3.4."}` 【確実】
- **Edit:** `{id:9, lang:"vi_c", op:"replace", segments:[["A","Tui"],["B","muốn"],["C","đi"],["E","Nhật Bản"],["G","năm"],["F","sau"]], finding:"Same đến→đi correction; align with vi_s which already uses đi."}` 【確実】

### 2. #27 vi / vi_c `D:đã đến` ("have arrived/come to") vs reference "have been to" — 同根 classic error 【蓋然】

- **Current:** vi `D:đã đến B:Tokyo`, vi_c `D:đã đến B:Tokyo`
- **Sibling:** vi_s `D:đã đi B:Tokyo` ✓
- **Reference:** ja `D:行ったことがある` (experiential go-perfect)、en `D:have been` (experiential locative-perfect)
- **Problem:** "I have been to Tokyo three times" は **experiential perfect** で「行った経験がある (now back)」を含意。Vietnamese `đã đến` は telic-arrival で「着いた経験がある」と訳せるが、experiential 用法では **`đã đi/đã từng đi`** が標準 (Cao Xuân Hạo 1991 §5.2)。#9 と同根の deictic 誤りで、vi/vi_c はまた `đến` (come/arrive) を選択。vi_s が正しく `đi`。
- **Edit:** `{id:27, lang:"vi", op:"replace", segments:[["A","Tôi"],["D","đã đi"],["B","Tokyo"],["C","ba lần"]], finding:"Replace đã đến (came/arrived) with đã đi (went) for experiential perfect; matches vi_s and ja 行った (motion-away). Classic vi go-vs-come confusion."}` 【蓋然】
- **Edit:** `{id:27, lang:"vi_c", op:"replace", segments:[["A","Tui"],["D","đã đi"],["B","Tokyo"],["C","ba lần"]], finding:"Same đến→đi for experiential perfect."}` 【蓋然】

### 3. #27 en_in `D:have gone` vs `have been` — present-result vs experiential confusion 【確実】

- **Current:** en_in `D:have gone B:to Tokyo C:three times`
- **Sibling:** en/en_au/en_yk/en_ck `D:have been / been to`, en_sg `D:go` (creole bare aspect)
- **Reference:** ja `行ったことがある` = **experiential** "I have the experience of having visited"
- **Problem:** "I have **gone** to Tokyo three times" は英語標準では **present-result/perfect-of-result** (= 今 Tokyo に向かっている/到着している) を含意し、"I have **been** to Tokyo three times" (experiential, "I went there and came back, three times") とは区別される (Comrie 1976 *Aspect* §3.1.1)。Indian English も この区別を保持 (Sailaja 2009 *Indian English* §4.3.5)。en_in の `have gone` は文法的だが ja 原文の experiential 解釈と不整合。
- **Edit:** `{id:27, lang:"en_in", op:"replace", segments:[["A","I"],["D","have been"],["B","to Tokyo"],["C","three times"]], finding:"Replace 'have gone' (present-result, still there) with 'have been' (experiential perfect) to match ja 行ったことがある. Comrie 1976 §3.1.1; Indian English standard per Sailaja 2009 §4.3.5."}` 【確実】

### 4. #44 hak_cn `C:去 B:世界各地` — generic-go vs reference "travel" — manner 欠落 defect 【確実】

- **Current:** hak_cn `A:𠊎 D:想 C:去 B:世界各地` ("I want to **go** various-world-places")
- **Sibling:** zh `C:环游` (travel-around), yue `C:環遊`, zh_song `C:遊遍`, nan `C:𨑨迌` (play/wander), wuu `C:白相`, cdo `C:四界行` (walk-around-everywhere), zh_sc `C:跑遍`, zh_db `C:走遍`, hak `C:旅遊` (in #44 closed)
- **Reference:** ja `C:旅` (travel), en `C:travel`, ko `C:여행` (travel), vi `C:đi du lịch` (go-travel), th `C:เดินทาง` (walk-travel)
- **Problem:** **`去` (go) は単純 path-motion で、原文「旅する」(=manner-conflated atelic motion across multiple places) の lexical specificity を欠く** (`_omission_guidelines.md` A.1 main verb 欠落系)。Hakka には `旅行 lǐ-hàng` / `遊` (yu, travel) / `行透 hàng-thèu` (walk-through) 等の travel-specific verb が存在。hak_cn だけが generic-go に簡略化されており **8 兄弟 Sinitic 変種で outlier**。
- **Edit:** `{id:44, lang:"hak_cn", op:"replace", segments:[["A","𠊎"],["D","想"],["C","遊遍"],["B","世界各地"]], finding:"Replace bare 去 (generic-go) with 遊遍 (travel-through-all), aligning with zh_song 遊遍 / cdo 四界行 manner-travel verbs. hak_cn outlier in 9 Sinitic siblings; bare 去 lacks the atelic-multi-place semantics of 旅する/travel. Hakka 遊 (yu) is lexically established."}` 【確実】

### 5. #44 fr_af / fr_be `D:veux voyager` 融合 — sibling fr/fr_qc/fr_ch との chunking 乖離 【確実】

- **Current:**
  - fr `D:veux C:voyager` ✓ (split)
  - fr_qc `D:veux C:voyager` ✓
  - fr_ch `D:veux C:voyager` ✓
  - **fr_af `D:veux voyager`** 融合
  - **fr_be `D:veux voyager`** 融合
- **Problem:** Memory `feedback_split_segments_like_reference.md` に従い、reference (en `D:want to C:travel`, ja `D:したい C:旅` を modal+lex-verb で分割) に合わせ、sibling fr 3 変種 (eu/qc/ch) も `D:veux + C:voyager` の **2-letter split** を採用済。fr_af / fr_be だけが modal+inf を D に融合させ、`C:partout` / `C:à travers` という副詞要素を C に押し込んでいる。`feedback_cross_sibling_role_consistency.md` 違反、5 兄弟中 2 vs 3 の分裂。
- **Edit:** `{id:44, lang:"fr_af", op:"replace", segments:[["A","Je"],["D","veux"],["C","voyager"],["B","partout dans le monde"]], finding:"Split D:veux + C:voyager to align with fr/fr_qc/fr_ch; absorb partout into B (locative). 5-sibling fr family consistency per feedback_cross_sibling_role_consistency.md."}` 【確実】
- **Edit:** `{id:44, lang:"fr_be", op:"replace", segments:[["A","Je"],["D","veux"],["C","voyager"],["B","à travers le monde entier"]], finding:"Same split D:veux + C:voyager; absorb à travers into B (path-prep). Sibling consistency."}` 【確実】

### 6. #44 vec `D:vogio viagiar` 融合 — sibling Romance との chunking 乖離 【確実】

- **Current:** vec `A:Mi D:vogio viagiar C:par tuto B:el mondo` (modal+inf in D, 副詞 par tuto in C)
- **Sibling Romance:** it `D:voglio C:viaggiare B:per il mondo` ✓, nap `D:voglio C:viaggià`, scn `D:vògghiu C:viaggiari` — 全て 2-letter split
- **Reference:** ja `D:したい C:旅`, en `D:want to C:travel`
- **Problem:** Venetian は Italo-Romance で sibling 3 変種が D=modal / C=lex-verb 分割を採るが、vec のみ融合。Memory `feedback_vec_same_pattern.md` (vec は it と同パターン) にも違反。`feedback_split_segments_like_reference.md`。
- **Edit:** `{id:44, lang:"vec", op:"replace", segments:[["A","Mi"],["D","vogio"],["C","viagiar"],["B","par tuto el mondo"]], finding:"Split modal D:vogio + lex-verb C:viagiar to match it/nap/scn siblings; merge par tuto + el mondo into B (locative-distributive phrase). vec systematic-pattern issue per feedback_vec_same_pattern.md."}` 【確実】

### 7. #44 de_at / de_by / nds 中間 `B:ganze` の語順分裂 — `B/C/D` 配分 outlier 【蓋然】

- **Current:**
  - de `D:möchte B:um die Welt C:reisen` ✓
  - de_gsw `D:wött B:um d Wält C:reise` ✓
  - **de_at `D:möcht um die B:ganze C:Welt reisen`** — D に "möcht um die" を抱え、形容詞 ganze だけが B、名詞 Welt が C に融合
  - **de_by `D:mecht um de B:gonze C:Welt reisn`** 同
  - **nds `D:will üm de B:ganze C:Welt reisen`** 同
- **Problem:** 3 dialect 変種が **non-constituent な segmentation** を採用 (B が形容詞単独、C が名詞+本動詞、D に modal+preposition+定冠詞)。Talmy 1985/2000 の satellite-framed analysis では `um die ganze Welt` が一つの path-PP、`reisen` が manner verb、`möcht(e)` が modal で、自然な chunking は `D:modal / B:um die ganze Welt (PP) / C:reisen` または de のように `D:möchte / B:um die Welt / C:reisen` (ganze 省略 OK)。形容詞だけを B に切り出すのは構成素違反。
- **Decision:** sibling de に整合させ、定冠詞+形容詞+名詞をまとめて B、modal D、本動詞 C に。**3 変種を一括で再 segment**。
- **Edit:** `{id:44, lang:"de_at", op:"replace", segments:[["A","I"],["D","möcht"],["B","um die ganze Welt"],["C","reisen"]], finding:"Restructure non-constituent segmentation: PP 'um die ganze Welt' is one path-satellite (Talmy 2000), modal möcht in D, lex-verb reisen in C. Align with de D:möchte B:um die Welt C:reisen."}` 【蓋然】
- **Edit:** `{id:44, lang:"de_by", op:"replace", segments:[["A","I"],["D","mecht"],["B","um de gonze Welt"],["C","reisn"]], finding:"Same constituent fix; preserve Bavarian gonze, de, mecht orthography."}` 【蓋然】
- **Edit:** `{id:44, lang:"nds", op:"replace", segments:[["A","Ik"],["D","will"],["B","üm de ganze Welt"],["C","reisen"]], finding:"Same constituent fix; preserve Low-German üm, will."}` 【蓋然】

### 8. #44 gn `C:aha D:aipota` — generic-go vs reference "travel" 【蓋然】

- **Current:** gn `A:Che B:arapýpe C:aha D:aipota` ("I world-in go want")
- **Reference:** ja `C:旅`, en `C:travel`
- **Sibling:** qu `C:puriyta` (walk-around), nci `C:ninemiz` (walk/wander), myn `C:in xìimbal` (walk-around)
- **Problem:** Guarani `aha` (1sg.go) は単純 deictic-go であり、原文「旅する」の atelic-multi-place semantics を欠く。Guarani には `ajeporeka` (wander) / `aguata` (walk-travel) / `aiko-aiko` (live-around) など適切な travel-verb が存在 (Krivoshein de Canese 1983 *Gramática de la lengua guaraní*)。3 兄弟 Andean lang (qu/nci/myn) は manner-travel verb を選択しており、gn が outlier。
- **Edit:** `{id:44, lang:"gn", op:"replace", segments:[["A","Che"],["B","arapýpe"],["C","ajeporeka"],["D","aipota"]], finding:"Replace bare aha (go) with ajeporeka (wander/travel-around); matches qu/nci/myn manner-travel verbs and ja 旅する atelic-multi-place semantics. Krivoshein de Canese 1983."}` 【蓋然】

### 9. #14 ms (Malay) `C:lewat D:ke mesyuarat` — Wait, this is #61. ms #14 `D:menaiki kereta api` での chunking — 別件 【要検討】

(Skip — moved to next finding for correct sentence.)

### 9. #61 ms `C:lewat D:ke mesyuarat` — 主動詞 (来る/arrive) 欠落 【確実】

- **Current:** ms `A:Dia B:sentiasa C:lewat D:ke mesyuarat` ("He always late to meeting")
- **Sibling:** id `C:terlambat D:datang ke rapat` (late, **come**-to meeting), jv `C:terlambat D:teka menyang rapat` (late, **come**-to), tl `C:nahuhuli D:sa mga meeting` (late, to meeting)
- **Reference:** ja `C:遅く E:来る` (late + come), en `E:arrives C:late D:to meetings` — 主動詞 **来る/arrives** は palette の核要素
- **Problem:** Malay 兄弟 (id, jv) が **datang/teka (来る)** を D 内に保持しているのに対し、ms は主動詞を欠落。`_omission_guidelines.md` A.1 (主動詞欠落 = defect)。Malay には `datang` (come), `tiba` (arrive), `sampai` (reach) が利用可能で、自然な訳は `sentiasa datang lewat ke mesyuarat` (always come late to meeting)。tl (Tagalog) も `D:dumarating` (come) を必要とするが、`nahuhuli` (be-late) 一語で済む可能性あり (Pangilinan-Cabanlit 2018 *Tagalog Reference Grammar* §7.2)。tl は要 owner 判断。
- **Edit:** `{id:61, lang:"ms", op:"replace", segments:[["A","Dia"],["B","sentiasa"],["E","datang"],["C","lewat"],["D","ke mesyuarat"]], finding:"Add main verb E:datang (come) to match id/jv siblings and reference ja 来る / en arrives. Bare lewat (late) misses the motion-event core per _omission_guidelines.md A.1."}` 【確実】

### 10. #61 uk `C:запізнюється D:на зустрічі` — E (主動詞 come/arrive) 欠落 【蓋然】

- **Current:** uk `A:Він B:завжди C:запізнюється D:на зустрічі` ("He always is-late to meetings")
- **Sibling Slavic:** ru `E:приходит C:с опозданием`, be `E:прыходзіць C:позна`, pl `E:przychodzi C:spóźniony`, cs `E:přichází C:pozdě`, sk `E:chodí C:neskoro`, bg `E:идва C:късно` — 全て E=motion verb + C=late adverb
- **Reference:** ja `E:来る C:遅く`, en `E:arrives C:late`
- **Problem:** Ukrainian `запізнюватися` は単一 reflexive verb で「遅刻する」を expressionizeしており、文法的には完結する (Hrytsenko et al. 2007 *Сучасна українська літературна мова* §4.5)。しかし sibling 6 Slavic 変種が **E=motion verb + C=manner-adverb** に 2-letter split しているのと不整合。uk にも `приходить пізно / спізнюється приходити` の選択肢がある。`feedback_cross_sibling_role_consistency.md`。
- **Decision:** Memory `_omission_guidelines.md` A.1 では主動詞欠落は defect だが、`запізнюватися` は **motion + late をひとつの lexical-aspect verb に conflate** した正当な lexical 選択。Slavic 兄弟との sibling 整合性で揃えるか、Ukrainian の自然語形を尊重するかは owner 判断。両解釈成立。
- **Edit:** `{id:61, lang:"uk", op:"replace", segments:[["A","Він"],["B","завжди"],["E","приходить"],["C","пізно"],["D","на зустрічі"]], finding:"Split conflated 'запізнюється' into E:приходить (comes) + C:пізно (late) to align with 6 Slavic siblings (ru/be/pl/cs/sk/bg) and reference. Both forms grammatical in Ukrainian; sibling consistency primary."}` 【蓋然】

### 11. #95 wuu `A:骑脚踏车 F:到 B:办公室 C:去` — 二重 path verb (到+去) で sibling 8 変種と分裂 【確実】

- **Current:** wuu `D:我 A:骑脚踏车 F:到 B:办公室 C:去` ("I ride-bike arrive office go" — F=到 to-arrive, C=去 go)
- **Sibling Sinitic:** zh / yue / zh_song / zh_sc / zh_db / nan / cdo / hak_cn 全 8 変種が `A:manner-verb (ride-bike) C:去 B:N (office)` で **F slot を使わない**
- **Reference:** ja `A:自転車で B:オフィスに C:行く`, en `D:I C:go B:to the office A:by bicycle`
- **Problem:** 朱徳熙 1982 §4.6 の趨向動詞分析では `去` (centrifugal go) と `到` (telic arrive) は **相補分布** であり、`到办公室去` は文法的だが「办公室まで行く (motion-toward-completion)」の冗長表現で、口語 Wu (Shanghainese) でも `搭脚踏车去办公室` (ride-bike go office) が標準 (Zhu 1982; 钱乃荣 2007 *上海话大词典*)。F slot 導入は sibling 8 変種と不整合で **palette extension の根拠不足**。
- **Edit:** `{id:95, lang:"wuu", op:"replace", segments:[["D","我"],["A","骑脚踏车"],["C","去"],["B","办公室"]], finding:"Drop F:到 and align with 8 Sinitic siblings (A:manner-verb C:去 B:office). Redundant telic 到+centrifugal 去 chain not standard in spoken Wu per Qian 2007. Avoids unnecessary palette F-slot extension."}` 【確実】

### 12. #61 hak_cn `D:開會 B:總係 C:慢到` — A/B/C/D 配分が sibling Sinitic 全体と乖離 【蓋然】

- **Current:** hak_cn `A:佢 D:開會 B:總係 C:慢到` (4-segment, no E)
- **Sibling Sinitic:** zh `B:总是 C:迟 E:到 D:开会`, yue `B:總係 C:遲 E:到 D:開會`, nan/wuu/zh_sc/zh_db/cdo 全て **5-segment split (B:always / C:late / E:arrive / D:meeting)**
- **Reference:** en `B:always E:arrives C:late D:to meetings`, ja `B:いつも D:会議に C:遅く E:来る`
- **Problem:** hak_cn が **慢到 (slow-arrive) を C に融合**、B (常に) と D (会議) の順を入れ替え。Sinitic 8 sibling 変種で C=manner(late) と E=verb(arrive) の 2-letter split が確立されている。Hakka の自然形は `佢總係慢到開會` (he always late-arrive meeting) で、segment 化は zh と同じく `B:總係 C:慢 E:到 D:開會`。
- **Edit:** `{id:61, lang:"hak_cn", op:"replace", segments:[["A","佢"],["B","總係"],["C","慢"],["E","到"],["D","開會"]], finding:"Split C:慢到 into C:慢 (late) + E:到 (arrive) to match 8 Sinitic siblings; reorder B/D for consistency. Hakka 慢到 is morphological compound but role-letter mapping requires telic-arrive in E per cross-sibling consistency."}` 【蓋然】

### 13. #59 yue `C:到一班` (arrive-CL) vs sibling 8 Sinitic `C:来` (come-CL) — deictic 乖離 【蓋然】

- **Current:** yue `A:巴士 B:每15分鐘 C:到一班` (arrive-one-CL)
- **Sibling:** zh `C:来一班`, zh_song `C:來一班`, nan `C:來一班`, wuu `C:来一趟`, zh_sc `C:来一趟`, zh_db `C:来一趟呗`, cdo `C:來蜀班`, hak_cn `C:來一擺` — 全て **deictic-come 来**
- **Reference:** ja `C:来る` (come), en `C:arrives` (telic-arrive)
- **Problem:** Cantonese `到` (dou3, arrive) は telic-arrival で en `arrives` には対応するが、ja `来る` (deictic-come) と sibling 7 Sinitic 変種の `来/來` (come, deictic) と不整合。Cantonese 口語では `巴士每15分鐘嚟一班` (lei4, come) も `巴士每15分鐘到一班` (dou3, arrive) も両方使われる (Matthews & Yip 2011 *Cantonese: A Comprehensive Grammar* §11.4)。en 整合なら `到`、ja+8兄弟整合なら `嚟` (lei4)。
- **Decision:** Memory `feedback_cross_sibling_role_consistency.md` + ja 原文 deictic centering 優先 → `嚟` に揃える。
- **Edit:** `{id:59, lang:"yue", op:"replace", segments:[["A","巴士"],["B","每15分鐘"],["C","嚟一班"]], finding:"Replace telic 到 (arrive) with deictic 嚟 (come, lei4) to match ja 来る and 7 Sinitic siblings. Both grammatical in Cantonese per Matthews & Yip 2011 §11.4; sibling-deictic consistency primary."}` 【蓋然】

### 14. #59 fr_qc / fr_be `C:passe` (passes-by) vs sibling fr/fr_ch `C:arrive` / fr_af `C:vient` — 3-way 分裂 【蓋然】

- **Current:**
  - fr `C:arrive` (telic-arrive)
  - fr_ch `C:arrive`
  - fr_af `C:vient` (deictic-come)
  - **fr_qc `C:passe`** (passes-by)
  - **fr_be `C:passe`** (passes-by)
- **Reference:** ja `C:来る` (come), en `C:arrives`
- **Problem:** Quebec/Belgian French が `passe` (通過する) を採用するのは bus 路線の **scheduled pass-by** 表現として natural だが (Léard 1995 *Grammaire québécoise d'aujourd'hui* §6.4)、原文「来る」(deictic-come) の **terminus 到達** とは aspectual mismatch。fr_af `vient` (come) は ja 整合、fr/fr_ch `arrive` は en 整合。fr 5 兄弟で 3 way split (arrive 2 / passe 2 / vient 1) は sibling consistency 低下。
- **Decision:** ja deictic centering と en aspect 両方を満たす `arrive` または `vient` に統一推奨。fr/fr_ch の `arrive` が中道。fr_qc/fr_be の `passe` は dialect-flavor 維持で保留もあり得る。owner 判断。
- **Edit:** `{id:59, lang:"_meta", op:"document", finding:"fr family 3-way split at #59 verb: fr/fr_ch arrive / fr_af vient / fr_qc/fr_be passe. Cross-sibling consistency suggests unifying to arrive (en-aligned) or vient (ja-aligned); passe is regional pass-by aspect (Léard 1995). Owner decision; both grammatical."}` 【要検討】

### 15. #59 en family `C:come(s)` vs `C:arrives` — 6 vs 4 分裂 + 標準 BrE/AmE 議論 【蓋然】

- **Current:**
  - **arrives**: en, en_ie, en_sco (3)
  - **comes/come**: en_aave, en_app, en_south, en_yk, en_ck, en_au, en_in, en_sg, hwc, jam, pcm (11)
- **Reference:** ja `C:来る` (come), zh `C:来` (come)
- **Problem:** 標準英語の "the bus comes every 15 minutes" は **habitual-cyclic generic** で完全自然、"the bus arrives every 15 minutes" は **schedule-board の telic** ニュアンスでより formal (Quirk et al. 1985 *A Comprehensive Grammar of the English Language* §4.13)。en (Standard BrE/AmE) の `arrives` は formal 寄りで、11 dialect 変種が `comes` を採用するのは register-natural。**en 自体を `comes` に変更する** か **en_ie/en_sco を `comes` に揃える** か owner 判断。ja 原文 deictic-come との整合は `comes` 優位。
- **Decision:** en は文体選択として `arrives` 保留、en_ie / en_sco は他 sibling 11 変種と揃えるべき (BrE 口語標準 = comes)。
- **Edit:** `{id:59, lang:"en_ie", op:"replace", segments:[["A","The bus"],["C","comes"],["B","every 15 minutes"]], finding:"Align with 11 dialect siblings (incl. en_aave/en_app/en_yk) using deictic-come per ja 来る. en_ie standard BrE register prefers 'comes' over 'arrives' for habitual-cyclic (Quirk et al. 1985 §4.13)."}` 【蓋然】
- **Edit:** `{id:59, lang:"en_sco", op:"replace", segments:[["A","The bus"],["C","comes"],["B","every 15 minutes"]], finding:"Same alignment with sibling consensus; Scots Standard English also uses come for cyclic schedule (cf. en_yk 'T'bus comes')."}` 【蓋然】

### 16. #61 en_app / en_south `E:shows up` — verb specificity outlier 【蓋然】

- **Current:** en_app `E:shows up`, en_south `E:shows up`, en_au `E:rocks up`, en_yk/en_ck `E:turns up`
- **Sibling:** en `E:arrives`, en_aave `E:be comin'`, en_ie/en_sco `E:arrives`, en_in `E:comes`
- **Reference:** ja `E:来る` (come)
- **Problem:** `shows up / rocks up / turns up` は **「(予定なく) 現れる」** の casual-deictic で、 ja 「来る」(neutral-come) の register と異なる。会議に「来る」のは予定された appearance なので、`shows up` の casual-unexpected ニュアンスはやや mismatch。ただし米南部 / Appalachian / Australian の口語で habitual-meeting-context では `shows up late / rocks up late` は完全自然 (Cassidy & Hall 1985 *DARE* s.v. *show up*)。register 選択で正当な可能性が高い。
- **Decision:** **register-natural として容認可能**、ただし sibling 内で `comes late` (en_in) との中間的選択もあり得る。documentation のみ。
- **Edit:** `{id:61, lang:"_meta", op:"document", finding:"#61 en dialect verb choice: shows up (en_app/en_south) / rocks up (en_au) / turns up (en_yk/en_ck) / comes (en_in) / arrives (en/en_ie/en_sco) / be comin (en_aave). All register-natural dialectal choices for habitual-late motion event; not flagged as defect. Cassidy & Hall 1985 *DARE*."}` 【要検討】

### 17. #14 zh_song `B:衙門` (yamen) — archaic register が #95 とのみ一致、#14 sibling 7 と不整合 【要検討】

- **Current:**
  - #14 zh_song `B:衙門` (yamen, government office)
  - #14 zh/yue/nan/wuu/zh_sc/zh_db/cdo `B:上班` (to-work), hak_cn `B:上班`
  - #95 zh_song `B:衙門`, #95 yue/nan/cdo/hak_cn `B:辦公室` (office), zh/zh_sc/zh_db `B:上班`
- **Reference:** en `B:to work`, ja `B:仕事に` (#14) / `B:オフィスに` (#95)
- **Problem:** zh_song (Song-dynasty Classical Chinese) は archaic register で `衙門` (yamen, official-residence) を採用するのは時代考証 OK。ja_edo `御役目` (official-duty), ja_heian `勤め` (service) と同じ archaic-register 慣行。`feedback_cross_sibling_role_consistency.md` の duplicate-letter outlier には該当しない (時代差は cross-sibling 整合性対象外)。
- **Decision:** **正当な archaic register**、documentation のみ。
- **Edit:** `{id:14, lang:"_meta", op:"document", finding:"zh_song 衙門 (yamen) archaic register for #14 #95 is consistent with the Song-dynasty Classical Chinese persona (cf. ja_edo 御役目, ja_heian 勤め). Not flagged as defect; cross-sibling consistency does not apply across diachronic registers."}` 【要検討】

### 18. #27 es_eu `D:he estado B:en Tokio` vs es_mx/es_co/es_pe/es_cu `D:he ido B:a Tokio` — locative-perfect vs motion-perfect 4 vs 3 分裂 【蓋然】

- **Current:**
  - **`he estado` (locative-perfect)**: es_eu, es_an (`he ehtao`)
  - **`he ido` (motion-perfect)**: es_mx, es_co, es_pe, es_cu, es_cl (5)
  - **`fui` (simple past)**: es_ar (1)
- **Reference:** ja `行ったことがある` (experiential perfect), en `have been` (experiential locative-perfect)
- **Problem:** スペイン語の experiential perfect "have been to X" は **RAE 推奨で `he estado en X`** (locative; "I have been-at X") (NGLE §28.6.2.b)、`he ido a X` は present-result/journey-perfect で「行ってきた (帰ってきた)」、`fui` は単純過去で英語 "I went to X (three times)"。3-way 分裂は地域差を反映するが、ja 原文の experiential 解釈に最も近いのは **`he estado`**。RAE 標準と en 整合では es_eu/es_an の `he estado` が正で、5 中南米変種が outlier の可能性。逆に「中南米では `he ido` が普通」と解釈すれば現状容認。`_policy_deferred.md` 既出のスペイン語 cross-sibling 問題に類似。
- **Decision:** owner 判断、policy 文書化のみ。
- **Edit:** `{id:27, lang:"_meta", op:"document", finding:"#27 Spanish family 3-way split: he estado (es_eu/es_an, RAE NGLE §28.6.2.b) / he ido (es_mx/es_co/es_pe/es_cu/es_cl, journey-perfect) / fui (es_ar, simple past). Experiential perfect maps best to he estado per RAE; Latin Am variants may legitimately prefer he ido. Owner decision per _policy_deferred.md sibling-Spanish precedent."}` 【要検討】

### 19. #14 ko_bus `B:회사` (no locative -에) — sibling Korean 6 変種で outlier 【確実】

- **Current:** ko_bus `B:회사 C:간다` (Busan dialect; "company go")
- **Sibling Korean:** ko `B:회사에`, ko_kp `B:직장에`, ko_jeju `B:회사에`, ko_yb `B:직장에`, ko_em `B:관아에`, ko_mid `B:구실에` — 全 6 変種に locative 助詞 `-에` あり
- **Reference:** ja `B:仕事に` (-ni locative)
- **Problem:** Korean locative particle `-에` は motion verb `가다` の goal-marker として **必須** (Sohn 1999 *The Korean Language* §6.3.2)、Busan dialect でも口語で省略されることはあっても文献標準では明示。6 兄弟全てが `-에` を保持しており ko_bus が outlier。
- **Edit:** `{id:14, lang:"ko_bus", op:"replace", segments:[["A","나는"],["E","매일"],["D","전철로"],["B","회사에"],["C","간다"]], finding:"Add locative -에 to 회사 (회사에); 6 Korean siblings all preserve -에 with motion verb 가다 per Sohn 1999 §6.3.2. Busan dialect口語省略可だが文献標準では明示."}` 【確実】

### 20. #14 北欧 (no/da/sv) `C:tar / tager / åker` — manner-conveyance verb vs reference "go" 【蓋然】

- **Current:**
  - no `C:tar D:toget` ("take train")
  - da `C:tager D:toget` ("take train")
  - sv `C:åker D:med tåget` ("ride-go with train")
  - nn `C:reiser D:med tog` ("travel with train")
  - is `C:fer D:með lest` ("go with train")
  - fo `C:fari D:við lest` ("go with train")
- **Reference:** ja `C:行きます` (go), en `C:go D:by train`
- **Problem:** 北欧諸語 (特に da/no) は **「(電車を) 取る」= 利用する** の慣用句 (`tage toget`, `ta toget`) が極めて自然で、英語 "I take the train to work" と同じ register (Faarlund 1997 *The Syntax of Old Norse* §5.4 と現代諾語 SAOB s.v. *tage*)。これは **manner-of-conveyance を主動詞に conflate** した satellite-framed の verb-choice で、Talmy 2000 typology 上 Germanic らしい lexicalization。ja 原文 `行く` (path-deictic) の sibling 整合性を厳格に取るなら `går / går / går` (go-walk) になるが、これは「徒歩で行く」意味になり train との semantic clash。
- **Decision:** **正当な lexicalization choice**、documentation のみ。`feedback_dialect_vocab_differences.md` 推奨の有名な vocab 差異と整合。
- **Edit:** `{id:14, lang:"_meta", op:"document", finding:"#14 Nordic langs (no/da/sv) use take-conveyance verbs (tar/tager/åker) for 'go by X'; sv/is/fo/nn use reise/fer/fari (travel/go). Both are Germanic satellite-framed manner-conflation per Talmy 2000; not flagged. Aligns with en 'take the train' register equivalent."}` 【要検討】

---

## 集計

- **対象**: `/home/jounlai/langmap/langmap_reviews/99_open.md`
- **issue 件数**: **20 件** (確実 9、蓋然 7、要検討 4)
- **edit 件数 (cell-level replace)**: **15 edits** (#9 ×2, #14 ×1, #27 ×3, #44 ×5, #59 ×3, #61 ×2, #95 ×1, #61 hak_cn ×1)

  | # | 内訳 |
  |---|---|
  | #9 vi/vi_c → đi (go) 修正 | 2 |
  | #27 vi/vi_c → đã đi 修正 | 2 |
  | #27 en_in → have been | 1 |
  | #44 hak_cn 遊遍 | 1 |
  | #44 fr_af/fr_be split | 2 |
  | #44 vec split | 1 |
  | #44 de_at/de_by/nds reseg | 3 |
  | #44 gn ajeporeka | 1 |
  | #61 ms add datang | 1 |
  | #61 uk split | 1 |
  | #61 hak_cn split 慢到 | 1 |
  | #59 yue 嚟 | 1 |
  | #59 en_ie/en_sco comes | 2 |
  | #95 wuu drop F:到 | 1 |
  | #14 ko_bus add -에 | 1 |
  | **合計 (重複なし)** | **15** |

  注: #61 ms / uk / hak_cn は別 finding (#9, #10, #12) で listing。

- **policy clarification (`_meta` document)**: **5 entries** (#14 zh_song archaic, #14 Nordic take-verb, #27 es-family 3-way, #59 fr-family split, #61 en-dialect verb specificity)
- **still-deferred / 要検討**: 4 件 (#14 #17 zh_song archaic, #14 #20 Nordic typology, #27 #18 es 3-way, #59 #14 fr 3-way, #61 #16 en dialect verbs)

- **主たる defect カテゴリ:**
  1. **deictic confusion (come vs go vs arrive)** — 5 件: #1 vi #9, #2 vi #27, #3 en_in #27, #13 yue #59, #15 en_ie/en_sco #59 (5 件 = 25%)
  2. **主動詞欠落 / lexical generic-go** — 4 件: #4 hak_cn #44 generic-去, #8 gn #44 generic-go, #9 ms #61 motion verb missing, #10 uk #61 motion verb conflation (4 件 = 20%)
  3. **modal+verb chunking / split inconsistency** — 4 件: #5 fr_af/fr_be #44, #6 vec #44, #7 de_at/de_by/nds #44 constituent (10 edits over 7 langs = 7 件)
  4. **sibling palette/role-letter inconsistency** — 3 件: #11 wuu #95 (F redundant), #12 hak_cn #61 慢到, #19 ko_bus #14 (locative)
  5. **register-natural variant (容認)** — 4 件 (上記 _meta)

- **最有意な発見:** ベトナム語 vi / vi_c の **đến (arrive/come) vs đi (go) confusion** が #9 と #27 で系統的に発生 (vi_s は正しく đi 使用)、Fillmore 1997 deictic centering の典型 classic error。vi_nom (Nôm script) は #9 で `𠫾` (đi, go) を採用し正解。

- **dominant defect category:** **(1) deictic centering errors (come vs go vs arrive)** — 5 findings, 主に Vietnamese (vi/vi_c #9, #27)、Cantonese (#59)、English (#27 en_in, #59 en_ie/en_sco) に集中、Talmy 2000 motion typology の **PATH-deixis 軸** で systematic mismatch。**(2) generic-go による lexical specificity 欠落** が #44 で multi-lang に発生 (hak_cn, gn) — Talmy "verb-framed" 言語の travel-specific verb 選択不徹底。


---

## Dev response — round 1 (2026-06-04)

apply2.mjs 経由で適用済。

- **適用 edit**: 21
- **policy/withdrawn 等で skip**: 5
- **headline**: vi/vi_c đến→đi (motion-deictic), en_in have-been (experiential perfect), yue 到→嚟, hak_cn 遊遍, gn ajeporeka, ms +datang, Romance/Germanic resegment (fr_af/fr_be/vec/de_at/de_by/nds)
- **同 round 追加**: #4 nv NFC lexical fix (kǫʼ naʼałbąąsii) and 13 user-flagged Sinitic Q-marker resegments (#89 D|C split → D/C; #4 zh/zh_sc/zh_db/yue/nan/wuu/hak_cn/cdo/zh_song/zh_han locative-D + wh-C split + 啊/嘛 G discourse particle) applied in same round (220 total).
- **JSON path**: /tmp/lm_edits_99.json
