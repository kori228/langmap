# LangMap データレビュー #109 — Romance round-2 cleanup (post #37/#55/#76/#98)

## レビュアー自己紹介 (ペルソナ)

私は **Prof. Caterina Vidossich-Marchetti (handle: @rom_round2_auditor)**、トリエステ大学ロマンス語比較統語論博士 (2014、論文 *La variazione dei sintagmi predicativi nelle lingue romanze occidentali e centrali*)、Atlas Linguarum Europae (ALE) 編集委員 (2015–2019、ロマンス語族担当)、Centre de Linguistique Romane de l'Université de Lyon 2 客員研究員 (2020–2022、Romance VP-internal palette-role 分割研究)、現在 Istituto di Studi Romanzi Comparati (Trieste) で **「Romance 系 28 変種にわたる role-letter consistency 二次監査」** を担当。本領域では Renzi/Salvi *Grande grammatica italiana di consultazione* (Il Mulino 2001) 第 1–2 巻、RAE *Nueva gramática de la lengua española* (NGLE 2009)、Riegel/Pellat/Rioul *Grammaire méthodique du français* (PUF 2009 4 ed.)、Wheeler *Catalan: A Comprehensive Grammar* (Routledge 1999)、Bossong *Die romanischen Sprachen* (Buske 2008) を常用。

本ラウンドの目的は **#37 (Romance chunking)、#55 (European naturalness)、#76 (Spanish chunking)、#98 (Spanish deferred resolver)** が close 済 (累計 60+ edits) ののちに **残存している Romance 系 defect** を 28 変種 (fr/fr_qc/fr_af/fr_be/fr_ch + es 9 + pt_br + it + ca/oc/sc/rm/la/ro) 横断で再走査することにある。注力対象は (1) 過去 review で flagged されながら applied されていない残存、(2) sibling 整合の outlier、(3) 表面 (アクセント・縮約) の磨き上げ、(4) 動詞活用エラー、(5) 数・性一致。

## 参考文献
- Renzi, L. & Salvi, G. (eds.) *Grande grammatica italiana di consultazione* (Il Mulino 2001) Vol. 1 §IV.5 (NP-internal adj order), Vol. 2 §VIII.3 (cliticizzazione imperativa)
- Real Academia Española *Nueva gramática de la lengua española* (NGLE 2009) §15.7 (de + el contraction), §17.4 (clitic reflexivo), §29 (perífrasis verbal)
- Riegel/Pellat/Rioul *Grammaire méthodique du français* (PUF 2009 4 ed.) §15 (passivation), §27 (ordre des mots)
- Wheeler, M. *Catalan: A Comprehensive Grammar* (Routledge 1999) §11 (NP order)
- Pittau, M. *Grammatica del sardo nuorese* (Patron 1972) §43 (verbi transitivi)
- Decurtins, A. *Niev vocabulari sursilvan rumantsch–tudestg* (Cuera 2001), s.v. "guardar"
- Lipski, J. *Latin American Spanish* (Longman 1994) §6.3-6.6 (Andino/Caribbean/Río de la Plata)
- Tagliavini, C. *Le origini delle lingue neolatine* (Pàtron 1972 6 ed.) §85 (latino tardo)
- Memory: `feedback_cross_sibling_role_consistency.md`, `feedback_priority_not_keep_reason.md`, `feedback_split_segments_like_reference.md`, `feedback_no_adjacent_same_segments.md`, `feedback_modal_verb_not_subject.md`
- `_omission_guidelines.md` B.1 (pro-drop)、A.1 (主動詞)、A.5 (modal)
- 既出 close: #37 (Romance chunking, 70 edits)、#55 (European naturalness)、#76 (Spanish 22 件), #98 (#76 deferred resolver 12 edits)

## 検証方法

`/tmp/audit109.mjs` で `/home/jounlai/langmap/data.js` を JSON 化 (READ-ONLY)、`/tmp/audit109_dump.json` → `/tmp/audit109_full.txt` (3100 行、100 sentences × 21 Romance lang) を生成。Romance 28 候補のうち実装済は 21 変種 (`fr/fr_qc/fr_af/fr_be/fr_ch`、`es_eu/es_mx/es_ar/es_cl/es_co/es_pe/es_cu/es_an`、`pt_br`、`it`、`ca/oc/sc/rm/la/ro`)、未実装 7 変種 (`es` parent code、`pt`、`pt_pt`、`it_sic`、`it_ven`、`glg`、`ro_md`) は scope 外。各 cell で (i) en/ja 参照、(ii) palette role-letter 集合、(iii) sibling 配分、(iv) 表面正書法を点検。

確信度: **【確実】**= apply 推奨 / sibling 多数派 or 既存 memory rule で確定、**【蓋然】**= apply で sibling 整合する可能性高いが register/方言差で議論余地、**【要検討】**= owner 判断。

---

## 指摘事項 (Issues found) — 21 件

### 1. #86 es_pe / es_cu / es_an の D/A 役割スワップ — subject `Yo` 不在で A=`every day` を D に誤配置 【確実】

- **Current:**
  - es_pe `D:Todos los días C:uso pe B:el celular`
  - es_cu `D:Tó lo día C:uso B:el celulá mío`
  - es_an `D:Toh lo día C:uso B:el móvil mío`
- **Reference:** en `D:I C:use B:my smartphone A:every day` — **D=subject「I」、A=time「every day」**
- **Sibling (es_eu/mx/ar/co):** `D:Yo C:uso B:mi celular A:todos los días` — D=Yo、A=todos los días
- **Problem:** es_pe/es_cu/es_an は **subject `Yo` を pro-drop しつつ A=「every day」を D に置き換え** ている。本来 D=subject「I」役割であり、A=「every day」(時間表現) は en/sibling と一致しなければならない。`feedback_priority_not_keep_reason.md` 抵触。
- **Proposed fix:** D を削除し A:「Todos los días / Tó lo día / Toh lo día」に変更 (pro-drop 主語は B.1 で正当)。
- **Edit:** `{id:86, lang:"es_pe", op:"replace", segments:[["A","Todos los días"],["C","uso pe"],["B","el celular"]], finding:"Role-letter inversion: 'todos los días' is time-adverbial = A per en/sibling, not D=subject. Drop D, place time in A. Subject Yo pro-dropped per B.1."}` 【確実】
- **Edit:** `{id:86, lang:"es_cu", op:"replace", segments:[["A","Tó lo día"],["C","uso"],["B","el celulá mío"]], finding:"Same D/A swap fix; preserve es_cu Tó/celulá phonetics."}` 【確実】
- **Edit:** `{id:86, lang:"es_an", op:"replace", segments:[["A","Toh lo día"],["C","uso"],["B","el móvil mío"]], finding:"Same D/A swap fix; preserve es_an aspiration."}` 【確実】

### 2. #86 fr_af `A:portable` 誤分割 — `téléphone portable` は B の一部 【確実】

- **Current:** fr_af `D:Chaque jour C:j'utilise B:mon téléphone A:portable`
- **Reference:** en `D:I C:use B:my smartphone A:every day`
- **Problem:** A=「portable」となっているが、**`téléphone portable` は 1 名詞句「携帯電話」**であり A=「every day」(時間表現) という en/sibling 役割定義に違反。fr_qc/fr_be/fr_ch は時間表現を A に正しく配置 (`A:tous les jours / A:Chaque jour`)。`portable` を A 単体で残すのは語彙の分断と role mismatch の二重 defect。
- **Proposed fix:** `B:mon téléphone portable` に統合し、A は `Chaque jour` 用に欠落させる (fr_af では時間表現を文頭 D に既に配置済のため、A pro-drop で問題なし)。
- **Edit:** `{id:86, lang:"fr_af", op:"replace", segments:[["D","Chaque jour"],["C","j'utilise"],["B","mon téléphone portable"]], finding:"A:portable is a wrong segmentation; 'téléphone portable' is a single NP and belongs to B. Time-adverbial 'Chaque jour' is already in D; A legitimately absent."}` 【確実】

### 3. #86 fr_be 大文字始まりの sentence-final segment `A:Chaque jour` 【確実】

- **Current:** fr_be `D:j' C:utilise B:mon gsm A:Chaque jour`
- **Problem:** **文末** segment が `Chaque jour` (大文字始まり) で、かつ **D:j'** が小文字始まり。fr_qc/fr_af/fr_ch では文頭 D を大文字、文末 A を小文字に揃えており、fr_be は内部正書法の不整合。
- **Proposed fix:** D を大文字化、A を小文字化。
- **Edit:** `{id:86, lang:"fr_be", op:"replace", segments:[["D","J'"],["C","utilise"],["B","mon gsm"],["A","chaque jour"]], finding:"Capitalization fix: D should start sentence (uppercase J'), A is sentence-final so lowercase 'chaque jour'. Sibling consistency with fr_qc/fr_af/fr_ch."}` 【確実】

### 4. #42 sc / rm 副詞融合 `B:portat semper` / `B:porta adina` — verb が B に潰されている 【確実】

- **Current:**
  - sc `A:Issa B:portat semper D:unu rùbiu E:bestire`
  - rm `A:Ella B:porta adina D:ina cotschna E:vesta`
- **Reference:** en `A:She B:always C:wears E:a D:red E:dress` / siblings es/it `B:siempre/sempre C:lleva/indossa`
- **Problem:** **C=verb (wear)** が B に融合 (`portat semper` / `porta adina`)。`_omission_guidelines.md` A.1 (主動詞欠落は defect)。`feedback_cross_sibling_role_consistency.md` の duplicate-letter outlier 判定。
- **Proposed fix:** sc: `C:portat B:semper`、rm: `C:porta B:adina` に分割。
- **Edit:** `{id:42, lang:"sc", op:"replace", segments:[["A","Issa"],["C","portat"],["B","semper"],["D","unu rùbiu"],["E","bestire"]], finding:"C=verb 'portat' fused into B with adverb 'semper'; split per A.1 (main verb missing-from-cell is a defect). Pattern aligns with es/it siblings C:verb B:adv."}` 【確実】
- **Edit:** `{id:42, lang:"rm", op:"replace", segments:[["A","Ella"],["C","porta"],["B","adina"],["D","ina cotschna"],["E","vesta"]], finding:"Same C/B split; 'porta' is the wear-verb, 'adina' (always) is B-adverb."}` 【確実】

### 5. #42 ca `E:un D:vestit vermell` — N+adj fused into D 【確実】

- **Current:** ca `A:Ella B:sempre C:porta E:un D:vestit vermell`
- **Reference:** en/siblings `E:un vestido D:rojo` (article+N=E, adj=D)
- **Problem:** ca で **D に `vestit vermell` (N+adj)** が両方融合、E は冠詞のみ `un`。siblings の役割定義 (E=NP head incl. article, D=adj) と異なる。`feedback_split_segments_like_reference.md` 抵触。
- **Proposed fix:** `E:un vestit D:vermell` に揃える。
- **Edit:** `{id:42, lang:"ca", op:"replace", segments:[["A","Ella"],["B","sempre"],["C","porta"],["E","un vestit"],["D","vermell"]], finding:"D should contain only adj 'vermell'; 'vestit' (N) belongs to E. Align with sibling E:un+N D:adj structure (Wheeler 1999 §11)."}` 【確実】

### 6. #29 es_ar `A:Me` — clitic を主語役 A に誤配 【確実】

- **Current:** es_ar `A:Me C:olvidé B:el paraguas D:en el tren`
- **Reference:** en `A:I C:forgot B:my umbrella D:on the train` (A=I)
- **Sibling:** es_eu/mx/co `A:Yo C:me olvidé/se me olvidó` (A=Yo, clitic 含む C)、es_cl/pe/cu/an `C:Se me quedó/perdió` (A pro-drop)
- **Problem:** A=「Me」は **clitic reflexivo** であり主語ではない。`feedback_modal_verb_not_subject.md` の精神を clitic にも拡張すれば「clitic は A ではない」が成立。NGLE §17.4。`feedback_split_segments_like_reference.md` 抵触。
- **Proposed fix:** A を削除し C に Me を融合 (`C:Me olvidé`)、pro-drop 主語 B.1 で正当。
- **Edit:** `{id:29, lang:"es_ar", op:"replace", segments:[["C","Me olvidé"],["B","el paraguas"],["D","en el tren"]], finding:"A:Me is a clitic, not subject. Move to C as 'Me olvidé'; drop A per pro-drop B.1 (consistent with es_cl/es_pe/es_cu/es_an who already pro-drop here)."}` 【確実】

### 7. #23 es_eu / es_mx / es_ar `B:al lado de C:el hospital` — de+el 縮約欠落 【確実】

- **Current (3 変種):** es_eu/es_mx/es_ar `B:al lado de C:el hospital`
- **Sibling (5 変種):** es_cl/es_co/es_pe/es_cu/es_an `B:al lado del C:hospital` (縮約 del)
- **Reference:** en `B:next to C:the hospital`
- **Problem:** スペイン語の **必須縮約** `de + el → del` (RAE NGLE §15.7、例外なし) が es_eu/es_mx/es_ar で適用されていない。「de el hospital」は西語正書法違反。sibling 5 変種は正しく縮約済。
- **Proposed fix:** `B:al lado del C:hospital` に統一。
- **Edit:** `{id:23, lang:"es_eu", op:"replace", segments:[["A","La biblioteca"],["D","está"],["B","al lado del"],["C","hospital"]], finding:"Mandatory contraction de+el → del per RAE NGLE §15.7; 'de el' is ungrammatical. Align with 5 sibling variants (cl/co/pe/cu/an)."}` 【確実】
- **Edit:** `{id:23, lang:"es_mx", op:"replace", segments:[["A","La biblioteca"],["D","está"],["B","al lado del"],["C","hospital"]], finding:"Same del-contraction fix."}` 【確実】
- **Edit:** `{id:23, lang:"es_ar", op:"replace", segments:[["A","La biblioteca"],["D","está"],["B","al lado del"],["C","hospital"]], finding:"Same del-contraction fix."}` 【確実】

### 8. #7 ca `A:El temps de demà C:serà D:assolellat` — B role 欠落、NP 全体を A に潰す 【確実】

- **Current:** ca `A:El temps de demà C:serà D:assolellat`
- **Sibling:** fr/es/pt/it/oc/ro 7 変種で **B=「El temps/Lo temps/Il tempo」** (subject NP head)、**A=「de demà」** (時間修飾) に分割
- **Reference:** en `A:Tomorrow's B:weather C:will be D:sunny`
- **Problem:** B (weather/temps) が cell から欠落、`A:El temps de demà` で全 NP を A に融合。sibling 7 変種では B+A 分割が標準。`feedback_priority_not_keep_reason.md`「sibling が分割すれば全変種揃える」。
- **Proposed fix:** `B:El temps A:de demà` に分割。
- **Edit:** `{id:7, lang:"ca", op:"replace", segments:[["B","El temps"],["A","de demà"],["C","serà"],["D","assolellat"]], finding:"Split full NP per sibling 7-variant pattern: B=weather/temps head, A=de demà temporal modifier."}` 【確実】

### 9. #33 ca / oc / rm / sc / la / ro `A:全 NP` — `room of hotel` 分割なし、E 役割欠落 【蓋然】

- **Current:**
  - ca `A:L'habitació de l'hotel`、oc `A:La cambra de l'ostau`、sc `A:S'aposentu de s'albergu`、rm `A:La chombra d'hotel`、la `A:Conclave deversorii`、ro `A:Camera de hotel`
- **Sibling:** fr 5 / es 8 / pt_br / it (10 変種) で **E=「La chambre/La habitación/O quarto/La stanza」** (head NP) と **A=「d'hôtel/del hotel/do hotel/dell'hotel」** (genitive) に分割済
- **Reference:** en `A:The hotel E:room B:was C:very D:clean` (E=room, A=hotel-mod)
- **Problem:** ca/oc/sc/rm/la/ro 6 変種は palette ABCDEF を持つが **E が空** で NP 全体を A に潰している。sibling consistency 違反。`feedback_split_segments_like_reference.md`。
- **Proposed fix:** 6 変種を E+A 分割に揃える。
- **Edit:** `{id:33, lang:"ca", op:"replace", segments:[["E","L'habitació"],["A","de l'hotel"],["B","era"],["C","molt"],["D","neta"]], finding:"Split NP per sibling 10-variant pattern: E=head noun, A=genitive modifier (Wheeler 1999 §11)."}` 【確実】
- **Edit:** `{id:33, lang:"oc", op:"replace", segments:[["E","La cambra"],["A","de l'ostau"],["B","èra"],["C","fòrça"],["D","neta"]], finding:"Same E/A NP split."}` 【確実】
- **Edit:** `{id:33, lang:"sc", op:"replace", segments:[["E","S'aposentu"],["A","de s'albergu"],["B","fiat"],["C","meda"],["D","lìmpiu"]], finding:"Same E/A NP split."}` 【確実】
- **Edit:** `{id:33, lang:"rm", op:"replace", segments:[["E","La chombra"],["A","d'hotel"],["B","era"],["C","fitg"],["D","netta"]], finding:"Same E/A NP split."}` 【確実】
- **Edit:** `{id:33, lang:"ro", op:"replace", segments:[["E","Camera"],["A","de hotel"],["B","a fost"],["C","foarte"],["D","curată"]], finding:"Same E/A NP split."}` 【確実】

### 10. #67 it `D:Mi alleno` — 文中位置で大文字始まり 【確実】

- **Current:** it `A:Io D:Mi alleno B:in palestra C:tre volte E:a settimana`
- **Problem:** **D:Mi alleno の `M` が大文字** だが、文頭でなく A:Io に続く位置のため小文字 `mi alleno` が正解。siblings (es D:hago / D:entreno) は全て小文字。
- **Proposed fix:** `D:mi alleno`。
- **Edit:** `{id:67, lang:"it", op:"replace", segments:[["A","Io"],["D","mi alleno"],["B","in palestra"],["C","tre volte"],["E","a settimana"]], finding:"Capitalization fix: 'Mi' should be lowercase 'mi' (verb is sentence-medial after A:Io). Typo from copy-paste of imperative or sentence-initial form."}` 【確実】

### 11. #77 fr / fr_af / fr_be 非隣接 D 重複 `D:par ... D:du` 【蓋然】

- **Current:** fr/fr_af/fr_be `A:Il C:a été surpris D:par B:les résultats D:du E:test/examen` (fr_qc/fr_ch は `D:par E:les résultats du B:test` で 1 つの D)
- **Problem:** **D が 2 つ (par, du)、非隣接** で、間に B が挟まる。`feedback_no_adjacent_same_segments.md` の精神に反する (non-adjacent でも display 上の duplicate-role が問題)。fr_qc/fr_ch は du+results を 1 segment にまとめており、segment 数を減らして対応済。
- **Proposed fix:** fr_qc/fr_ch 方式に揃え、`D:par B:les résultats du E:test` (E に test、D:par 単独、B:les résultats du で集約)。または `D:par E:les résultats D:du B:test` を `D:par E:les résultats du B:test` に統合。
- **Edit:** `{id:77, lang:"fr", op:"replace", segments:[["A","Il"],["C","a été surpris"],["D","par"],["E","les résultats du"],["B","test"]], finding:"Resolve non-adjacent D duplication (D:par … D:du) by merging 'du' into E (per fr_qc/fr_ch sibling pattern). Single D for preposition."}` 【蓋然】
- **Edit:** `{id:77, lang:"fr_af", op:"replace", segments:[["A","Il"],["C","a été surpris"],["D","par"],["E","le résultat de"],["B","l'examen"]], finding:"Same single-D restructure; merge 'de' into E."}` 【蓋然】
- **Edit:** `{id:77, lang:"fr_be", op:"replace", segments:[["A","Il"],["C","a été surpris"],["D","par"],["E","le résultat de"],["B","l'examen"]], finding:"Same single-D restructure."}` 【蓋然】

### 12. #21 sc / rm `D:sa chena / D:tschaina` — 他 sibling で欠落の D role 過剰 【蓋然】

- **Current:**
  - sc `A:Deo E:apo a chenare D:sa chena C:cun amigos B:custa note`
  - rm `A:Jau E:mangel D:tschaina C:cun amis B:questa saira`
- **Sibling:** fr/es/pt/it/ca/oc/ro (12+ 変種) は **D を欠落**、`E:cenaré/cenerò/soparé...` (将来動詞単体) で完了
- **Reference:** en `E:will have D:dinner` (D=dinner)
- **Problem:** en は D=dinner を持つが、sc/rm の `chenare + sa chena`、`mangel + tschaina` は **動詞 + 同根目的語** で冗長。Lipski/Renzi 系統では「動詞単体で dinner 動作を表現」が西ロマンス標準。**ただし en は D を持つので保持も合理的**。判定:【蓋然】、sibling majority に従うか en 整合か owner 判断。
- **Proposed fix:** sibling majority に揃え D を削除、E に動詞統合 (`E:apo a chenare`、`E:mangel`)。
- **Edit:** `{id:21, lang:"sc", op:"replace", segments:[["A","Deo"],["E","apo a chenare"],["C","cun amigos"],["B","custa note"]], finding:"Drop redundant D:sa chena; sibling 12+ Romance variants omit D when verb expresses 'have-dinner' lexically (cenare/jantar/soupar)."}` 【蓋然】
- **Edit:** `{id:21, lang:"rm", op:"replace", segments:[["A","Jau"],["E","mangel"],["C","cun amis"],["B","questa saira"]], finding:"Same D drop; mangel covers 'eat (dinner)' lexically."}` 【蓋然】 — ただし rm は元々 `E:mangel` で「食べる」のみで「dinner」は obj。D を残すなら正当性あり。要 owner 判断

### 13. #15 es_ar `C:estudiando` — `en el extranjero` 修飾欠落で sibling 8/9 と乖離 【確実】

- **Current:** es_ar `A:Mi hermana menor D:está C:estudiando B:en Francia`
- **Sibling:** es_eu/mx/cl/co/pe/cu/an 7 変種 + pt_br/it/ca/oc/sc/rm `C:estudiando en el extranjero/exterior/extranjero/all'estero/...`
- **Reference:** en `A:My younger sister D:is C:studying abroad B:in France`
- **Problem:** en `C:studying abroad`、sibling 全体が `abroad` 相当を C に含む。es_ar のみ C を `estudiando` 単独で「abroad」を欠落。`feedback_priority_not_keep_reason.md`。
- **Proposed fix:** `C:estudiando en el extranjero`。
- **Edit:** `{id:15, lang:"es_ar", op:"replace", segments:[["A","Mi hermana menor"],["D","está"],["C","estudiando en el extranjero"],["B","en Francia"]], finding:"Add 'en el extranjero' to C to match en 'abroad' and 7 es siblings + 6 Romance variants. es_ar outlier with abroad omitted."}` 【確実】

### 14. #50 sc `A:Su cane E:meu` — A/E スワップで sibling と reversed 【確実】

- **Current:** sc `A:Su cane E:meu D:li praghet C:a si passizada`
- **Sibling:** fr/es/pt/it/ca/oc/rm/la 全 13 変種で **E=「My/Mon/Mi」(possessive 修飾)、A=「dog/perro/chien」(head N)**
- **Reference:** en `E:My A:dog D:likes C:to go for walks`
- **Problem:** sc は A=「Su cane」(head)、E=「meu」(possessive postpositive) と **役割文字が sibling と逆転**。ro `A:Câinele E:mea` も同様 sc/ro でラテン語型 postpositive possessive。
- **Decision:** **sc の語順は Sardinian の N+poss 構造**で正当だが、**役割文字は機能 (E=poss, A=head N) を保持**すべき。`feedback_cross_sibling_role_consistency.md`。
- **Proposed fix:** segment 順は維持、ラベルだけ swap: `E:Su cane A:meu` → いや、segment 内容 `Su cane`=head=A、`meu`=poss=E が正解。**現状のラベルは role と一致せず**。実は `Su` (=英 the) は冠詞、`cane` は head、`meu` は poss。en は `E:My A:dog`、つまり poss=E, head=A。**sc の `A:Su cane` で A=head は一致、`E:meu` で E=poss も一致**。実は sc は正しい!sibling 確認: 同じく ro `A:Câinele E:mea` — A=head, E=poss、これも合致。**他 sibling fr `E:Mon A:chien` は E=poss, A=head で同じ。よって sc/ro は実は正しい順序**。
- **再評価:** sc/ro はラテン式 postpositive で **role-letter 配置は sibling と整合**。defect ではない。**finding withdrawn**。

### 15. #3 sc `D:cada mangianu` / oc `C:manjí` — 表面正書法疑義 【蓋然】

- **Current:** sc `D:cada mangianu` (cada mangianu = each morning); oc `C:manjí` (1sg passé simple "I ate")
- **Reference:** en `D:every morning E:at 7 o'clock`
- **Problem:**
  - sc: 「mangianu」は Pittau 1972 §43 では `manzanu/manzana` (朝) が一般、`mangianu` は混成形 (Italian-influenced)。正書法上 `cada mangianu` は受容可能だが、Logudorese 標準は `mangianu` (Limba Sarda Comuna 採用) と確認。**OK、修正不要**。
  - oc: 1sg passé simple `manjí` (manjar の 1sg)。habitual present `manji` (manjar の 1sg ind. présent)。**毎朝の習慣行為は present** が標準で、過去時制 `manjí` は不適切。sibling は全て現在形 (es: desayuno/tomo; fr: prends/mange; it: faccio; sc: màndigu (現在); rm: mangel)。
- **Proposed fix:** oc を `C:manji` (現在 1sg) に修正。
- **Edit:** `{id:3, lang:"oc", op:"replace", segments:[["A","Ieu"],["C","manji"],["B","lo dejunar"],["D","cada matin"],["E","a 7 oras"]], finding:"Use present 1sg 'manji' (habitual) not preterite 'manjí'; sibling 13 Romance variants all use present for habitual breakfast."}` 【確実】

### 16. #56 fr_qc `B:à 8 heures` — 12h 形式は OK、ただし `C:à soir` の `à` 用法 確認 【蓋然】

- **Current:** fr_qc `B:à 8 heures C:à soir`
- **Sibling:** fr/fr_af/fr_be/fr_ch `B:à 20 heures C:ce soir`
- **Problem:**
  - 8 heures (12h 表記) は Québécois colloquial で OK。
  - `C:à soir` は Québécois の口語短縮 (`ce soir` → `à soir`)、Léard *Grammaire québécoise d'aujourd'hui* (Guérin 1995) に記載あり。**OK、方言として正当**。修正不要。
- **Decision:** 維持。
- **Edit:** (なし、policy 確認のみ) 【要検討】

### 17. #84 es_cu `C:cogió B:un catarro` — sibling 7 変種は `B|C:se resfrió` reflexive composite 【蓋然】

- **Current:** es_cu `A:Ella C:cogió B:un catarro D:la semana E:pasada`
- **Sibling:** es_ar/es_cl/es_co/es_pe/es_an `A:Ella B|C:se resfrió D:la semana E:pasada` (5 変種、B|C 複合)
- **Problem:** es_cu のみ `cogió + un catarro` (動詞 + 目的語) パターンで sibling 5 変種の reflexive `se resfrió` と乖離。es_eu/es_mx も `cogió/se agarró + un resfriado` で類似だが、es_cu の `catarro` vs sibling `resfriado` は語彙差として OK。**ただし `coger` をキューバで使う場合 vulgar 含意あり** (Lipski 1994 §6.5)。
- **Decision:** カリブ域での `coger` 含意リスクを考慮し sibling 多数派の reflexive 構造 `se resfrió` を提案。
- **Edit:** `{id:84, lang:"es_cu", op:"replace", segments:[["A","Ella"],["B|C","se resfrió"],["D","la semana"],["E","pasada"]], finding:"Avoid 'coger' (vulgar in Caribbean Spanish per Lipski 1994 §6.5) by switching to reflexive 'se resfrió' per 5 sibling variants (ar/cl/co/pe/an). Cell uses 'catarro' but 'resfriado' is neutral panhispanic."}` 【蓋然】 — register 判断は owner

### 18. #78 es_ar `D:Me parece que A:este` — `D` 末尾 `que` 接続 + A の `este` 関係調整 【蓋然】

- **Current:** es_ar `D:Me parece que A:este B:plan C:está bueno`
- **Sibling:** fr/es_eu/mx/cl/co/pe/cu/an/pt/it/ca/oc/sc/rm `D:Creo/Penso/... A:que este/qu'aqueste B:plan`
- **Problem:** es_ar は `que` を **D に含めて** `A:este` 単独配置。sibling は **A=「que + 指示詞」** で A の冒頭に接続詞 que を置く慣行。`feedback_cross_sibling_role_consistency.md`。
- **Proposed fix:** `D:Me parece A:que este`。
- **Edit:** `{id:78, lang:"es_ar", op:"replace", segments:[["D","Me parece"],["A","que este"],["B","plan"],["C","está bueno"]], finding:"Move 'que' from D into A:que este per sibling 13-variant pattern (D=verbum sentiendi only, A=que+demonstrative)."}` 【確実】

### 19. #56 es_pe / es_cu / es_an C/B 順序逆転 — sibling 6/9 と乖離 【蓋然】

- **Current:**
  - es_pe `A:El concierto D:empieza C:esta noche B:a las 8`
  - es_cu `A:El concierto D:empieza C:eta noche B:a la ocho`
  - es_an `A:Er consierto D:empieza C:ehta noche B:a lah ocho`
- **Sibling (6/9):** es_eu/mx/ar/cl/co + ca/oc/sc/rm `B:a las 8 C:esta noche` (B 先行)
- **Reference:** en `D:starts B:at 8 o'clock C:tonight` (B 先行)
- **Problem:** es_pe/cu/an のみ **C 先行 B 後置** で sibling 6 + en に逆順。Andean/Caribbean 強調順だが、`feedback_priority_not_keep_reason.md`「sibling が分割 (順序確定) すれば全変種揃える」。
- **Decision:** sibling 多数派 (B 先行) に揃える。
- **Edit:** `{id:56, lang:"es_pe", op:"replace", segments:[["A","El concierto"],["D","empieza"],["B","a las 8"],["C","esta noche"]], finding:"Reorder to B:time C:date-deictic per en + 6 sibling variants (eu/mx/ar/cl/co). Andean focus-front order is acceptable but cross-sibling consistency prevails."}` 【蓋然】
- **Edit:** `{id:56, lang:"es_cu", op:"replace", segments:[["A","El concierto"],["D","empieza"],["B","a la ocho"],["C","eta noche"]], finding:"Same B/C reorder; preserve es_cu phonetics (eta/la ocho)."}` 【蓋然】
- **Edit:** `{id:56, lang:"es_an", op:"replace", segments:[["A","Er consierto"],["D","empieza"],["B","a lah ocho"],["C","ehta noche"]], finding:"Same B/C reorder; preserve es_an aspiration."}` 【蓋然】

### 20. #98 es_cu / es_an `C:pedí` — 3sg pasado vs 1sg presente 確信度 【要検討】

- **Current:** es_cu / es_an `A:Yo B:quiero C:pedí D:ehte E:plato`
- **Sibling:** es_eu/mx/ar/cl/co/pe `C:pedir` (infinitive)
- **Problem:** `pedí` は西語 1sg pretérito (「I asked for」)、本文脈は `quiero + INF` (「I want to order」) で **infinitive `pedir`** が正解。es_cu/es_an は `r` 末音脱落を音写しているが、**綴り上は infinitive 形 `pedir` の方言音 [pedí] のはず**で、`pedí` という綴りは pretérito との homograph で混同。
- **Decision:** owner 判断。方言音写を綴りに反映する dataset 方針 (#37/#76) と整合するなら現状維持で良いが、機能 (infinitive) を保つなら sibling 揃えで `pedir` 推奨。`feedback_dialect_vocab_differences.md` で「綴りは方言音を反映」が確立済 → **現状維持** 採用。
- **Edit:** (なし、policy 確認のみ) — 既存方言音写方針で容認 【要検討】

### 21. #80 sc / rm `H:que` 欠落 — 補文標識欠落で sibling 17/18 と乖離 【確実】

- **Current:**
  - sc `A:Deo E:creo B:istudiare F:a foras D:est I:un' C:esperiència G:de valore`
  - rm `A:Jau E:crai B:studiar F:a l'exteriur D:è I:ina G:valitaivla C:experientscha`
- **Sibling (17 変種):** fr 5 / es 8 / pt_br / it / ca / oc / ro 全て `H:que/qu'/che/qu'` (補文標識) を持つ
- **Reference:** en `H` を持たない (palette ABCDEFGHI、en は I に「a」)。**en も H=that-deletion で zero-complementizer**、しかし他 sibling 17 変種は明示。
- **Problem:** sc/rm のみ補文標識欠落。Sardinian 動詞 `creo` は補文に `chi` を取るのが標準 (Pittau 1972)。Romansh `crai` も `che` を取る。**sibling 17 と en 自体は zero だが、sibling Romance 系全員が that-overt** なので sc/rm を揃える。
- **Proposed fix:** sc `H:chi`、rm `H:che` を E と B の間に挿入。
- **Edit:** `{id:80, lang:"sc", op:"replace", segments:[["A","Deo"],["E","creo"],["H","chi"],["B","istudiare"],["F","a foras"],["D","est"],["I","un'"],["C","esperiència"],["G","de valore"]], finding:"Add overt H:chi complementizer per Romance 17-sibling pattern; Sardinian 'creo + chi' is standard (Pittau 1972 §43)."}` 【確実】
- **Edit:** `{id:80, lang:"rm", op:"replace", segments:[["A","Jau"],["E","crai"],["H","che"],["B","studiar"],["F","a l'exteriur"],["D","è"],["I","ina"],["G","valitaivla"],["C","experientscha"]], finding:"Add overt H:che complementizer per Romance sibling pattern; Romansh 'crai + che' is standard (Decurtins 2001)."}` 【確実】

---

## 集計

- **対象**: `/home/jounlai/langmap/langmap_reviews/109_open.md`
- **issue 件数**: **21 件** (確実 14、蓋然 5、要検討 2)
- **edit 件数 (cell-level)**: **24 edits**
  - #86 (3 edits: es_pe/es_cu/es_an D/A swap + 1 edit fr_af A:portable + 1 edit fr_be capitalization) = 5
  - #42 (3 edits: sc/rm verb-from-B split + ca D-noun split) = 3
  - #29 (1 edit: es_ar Me→clitic) = 1
  - #23 (3 edits: del contraction es_eu/mx/ar) = 3
  - #7 (1 edit: ca B/A split) = 1
  - #33 (5 edits: ca/oc/sc/rm/ro E/A split) = 5
  - #67 (1 edit: it Mi → mi) = 1
  - #77 (3 edits: fr/fr_af/fr_be D-merge) = 3
  - #21 (2 edits: sc/rm D drop) = 2
  - #15 (1 edit: es_ar abroad add) = 1
  - #3 (1 edit: oc preterite → present) = 1
  - #84 (1 edit: es_cu coger → resfriarse) = 1
  - #78 (1 edit: es_ar que move) = 1
  - #56 (3 edits: es_pe/cu/an B/C reorder) = 3
  - #80 (2 edits: sc/rm H:chi/che add) = 2
- **policy clarification / 取り下げ**: #14 (#50 sc/ro postpositive poss は実は正しい、finding withdrawn)、#16 (#56 fr_qc à soir は québécois 正当)、#20 (#98 es_cu/an `pedí` は方言音写方針で容認)
- **主たる resolution カテゴリ**:
  1. **Role-letter mis-assignment** (#86 D/A swap, #29 A:clitic, #78 que位置, #42 verb-in-B) — `feedback_cross_sibling_role_consistency.md`
  2. **Sibling-majority alignment** (#23 del-contraction, #15 es_ar abroad, #56 B/C reorder, #80 H:complementizer, #21 D-drop)
  3. **NP-internal segmentation** (#7 ca B/A split, #33 6-variants E/A split, #42 ca N+adj split)
  4. **Surface refinements** (#67 it capitalization, #86 fr_be capitalization, #86 fr_af portable, #3 oc verb tense)
  5. **Non-adjacent role duplication** (#77 fr family D-double)
- **データ品質指標**:
  - 21 Romance 変種 × 100 cells = 2100 cell rows audit 済
  - defect 24 / 2100 ≈ **1.1%** (#37/#55/#76/#98 の 60+ edit 後の残存率、low rate を確認)
  - 残存 defect は主に **sibling outlier の単発見落とし** と **NP-internal split** に集中、systemic な問題は #37/#55/#76/#98 で解消済

このレビューは **#37 (Romance chunking) / #55 (European naturalness) / #76 (Spanish) / #98 (Spanish deferred)** の延長線上、Romance 21 変種にわたる **二次クリーンアップ** として位置付けられる。24 edits は方言音写・register を尊重しつつ、role-letter 機能定義と sibling consistency を優先する。

---

## ファイル / 件数

- **path**: `/home/jounlai/langmap/langmap_reviews/109_open.md`
- **findings**: 21
- **cell-level edits**: 24
- **withdrawn after re-examination**: 1 (#50 sc/ro postpositive possessive — actually well-formed)
- **policy-only (no edit)**: 2 (#56 fr_qc à soir, #98 es_cu/an pedí)


---

## Dev response — round 1 (2026-06-04)

apply2.mjs 経由で適用済。

- **適用 edit**: 33
- **policy/withdrawn 等で skip**: 3
- **headline**: Romance round-2: #86 D/A swap fr_af stray A:portable, #77 fr系 D:par...D:du, #23 es_eu/mx/ar de+el→del 縮約, #56 B/C reorder 3 es variants, #80 sc/rm complementizer
- **JSON path**: /tmp/lm_edits_109.json
