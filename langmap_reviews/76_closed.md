# LangMap データレビュー #76 — Spanish dialects palette-coverage / chunking deep-dive auditor (スペイン語方言横断分節監査)

## レビュアー自己紹介 (ペルソナ)

私は **Dra. Concepción Ramírez-Valdés (handle: @es_chunker_cv)**、メキシコ国立自治大学 (UNAM) 言語学博士 (米州スペイン語比較形態統語論, 2014)、ボゴタの Instituto Caro y Cuervo 客員研究員 (2015–2017、コロンビア方言コーパス分節)、サンティアゴ・デ・チレ大学 Centro de Estudios del Español de Chile 助教 (2018–2020、chileno voseo / queísmo / 接語複制の構造分析)、現在はリマのプロヤ・カンプス言語データ研究室 (2021–) で **`limeño` / `cubano` / `caribeño` の境界分節タグ付け** を担当。常用資料は Real Academia Española *Nueva gramática de la lengua española* (NGLE 2009) §16 (前動詞モーダル)、§35 (接語複制)、§42 (再帰構文)、Bosque & Demonte 編 *Gramática descriptiva de la lengua española* (Espasa 1999) Vol. 1 ch. 4 (近未来 `ir a` vs synthetic), Vol. 2 ch. 21 (clitic doubling), Lipski *Latin American Spanish* (Longman 1994) §6.2–§6.6 (es_mx/es_ar/es_cl/es_co/es_pe/es_cu 方言記述), Kany *American-Spanish Syntax* (U. of Chicago Press 1945, repr. 1969), López Morales *Estudios sobre el español de Cuba* (Las Américas 1971), Lipski *El español de América* (Cátedra 2004) §11 (es_an アンダルシア)、ASALE *Diccionario de americanismos* (2010)。

本ラウンドの目的は **#7 (Ibero-Romance 広域語彙) / #51 (ser-vs-estar コピュラ) / #46 (T-V distinction) / #55 (英語起源カルク・pro-drop 過剰顕在化) / #61 (方言の標準語コピーペースト汚染)** で扱われなかった **8 変種 + 基準 es の構造的 chunking 監査** である。これら 8 変種は **専門レビュアーが構造面では明示的に割り当てられていない** (#7 は語彙・音写・性数一致、#51 はコピュラ選択、#46 は 2 人称レジスター、#55 は pro-drop 言説、#61 は標準語汚染を扱い、いずれも cross-sibling segment-count 整合性は射程外)。

**背景の動機:** メタ集計でスペイン語方言の palette 欠落率が **es_cl 51% / es_cu 44% / es_an 44% / es_pe 43% / es_mx・es_eu 12–15%** という極端な分裂を示しており、これは #62 Sinitic (yue 38%) / #67 Mainland SE Asia (km 43%) と並ぶ高水準である。サンプリングしたところ **(a) 同じ NP "a new book / a beautiful gift" を兄弟間で D/E をスワップ、(b) clitic `me` を一部は B 独立分節し一部は動詞に潰す、(c) 近未来 `voy a + inf` を E 単独に潰して D を欠落させる、(d) 非隣接 `C ... C` 重複を一部の方言のみが解消、(e) impersonal `hay que` を D に置く一方で兄弟が `tengo que` を B に分割する** など、**構造的な兄弟非整合** が累積していることが判明した。語彙は #7、コピュラは #51、T/V は #46、calque は #55、標準語汚染は #61 に譲り、本ラウンドは **構造 (role-letter 列、複合ラベル X|Y、モーダル＋動詞融合、clitic 独立分節、近未来 vs 単純未来の D 欠落、非隣接 C 重複の方言ごとの取扱)** のみを扱う。

## 参考文献
- Real Academia Española *Nueva gramática de la lengua española* (NGLE 2009) §16 (perífrasis modales), §35.6 (duplicación de clíticos), §42.7 (impersonales con `hay que`), §23.9 (verbos auxiliares estar + gerundio)
- Bosque & Demonte 編 *Gramática descriptiva de la lengua española* (Espasa 1999) Vol 2 ch. 17 (近未来 ir + a + inf)、ch. 21 (clitic 配列)
- Lipski, J. *Latin American Spanish* (Longman 1994) §6.4 (chileno `po`, voseo の D 配分)、§6.5 (es_an), §6.6 (Caribbean -s aspiration)
- Kany, C. E. *American-Spanish Syntax* (U. of Chicago Press 1945)
- ASALE *Diccionario panhispánico de dudas* (Santillana 2005)
- Memory: `feedback_cross_sibling_role_consistency.md`, `feedback_split_segments_like_reference.md`, `feedback_modal_verb_not_subject.md`, `feedback_impersonal_modal_as_D.md`, `feedback_prefer_splitting_segments.md`, `feedback_priority_not_keep_reason.md`
- 既出 #7 (Ibero-Romance 語彙・性数一致・音写)、#51 (ser/estar)、#46 (T/V)、#55 (calque/pro-drop)、#61 (方言の標準語コピー汚染) — 再フラグしない

## 検証方法

`/tmp/audit76.mjs` で SENTENCES をロードし、全 100 文 × 9 変種 (es / es_eu / es_mx / es_ar / es_cl / es_co / es_pe / es_cu / es_an) の role-letter 列を `/tmp/audit76.out` (1100 行) に dump、(a) 兄弟言語パレットに存在するが当該変種に欠落しているロール、(b) en 参照の `D:a new E:book` 等での D/E 配分がスペイン語兄弟間で **スワップ** されているケース、(c) `me` / `nos` 等接語が **B 独立 vs 動詞へ融合** に分裂しているケース、(d) 近未来 `voy a + inf` が **E 単独 vs E + 別 D** に分裂しているケース、(e) 非隣接 `C ... C` 重複の方言ごとの可否、(f) impersonal `hay que` の D 配置 (memory `feedback_impersonal_modal_as_D.md` 準拠) — を横断集計した。語彙 (#7)・コピュラ (#51)・voseo 形 (#46)・pro-drop 言説 (#55)・標準語コピー (#61) は射程外。本ラウンドは **read-only on data.js**。提案は構造化 edit としても各項目末に転載。

確信度は **【確実】**= 兄弟方言間で同一文の構造分節が分裂、guideline A.X 該当が明白、**【蓋然】**= 構造分裂は確認できるが、方言の語順自由度内で許容範囲、**【要検討】**= 方針自体を closed-review で確認すべきもの。

---

## 指摘事項 (Issues found) — 22 件

### 1. #11 `D:a new E:book` の D/E 配分がスペイン語兄弟間でスワップ — es_eu/es_mx のみ反転 【確実】

- **Current:**
  - es_eu: A:「Yo」 C:「compré」 **E:「un libro」 D:「nuevo」** B:「en la librería」 F:「ayer」
  - es_mx: A:「Yo」 C:「compré」 **E:「un libro」 D:「nuevo」** B:「en la librería」 F:「ayer」
  - es_ar: A:「Yo」 F:「ayer」 C:「compré」 **D:「un nuevo」 E:「libro」** B:「en la librería」
  - es_co: A:「Yo」 C:「compré」 **D:「un nuevo」 E:「libro」** B:「en la librería」 F:「ayer」
  - es_pe / es_cu / es_an: 同じく D:「un nuevo」 E:「libro」
- **Reference:** en A:「I」 C:「bought」 **D:「a new」 E:「book」** B:「at the bookstore」 F:「yesterday」
- **Problem:** 参照 en の palette 定義は **D=「a new」(determiner+adj), E=「book」(head N)**。es_ar/es_co/es_pe/es_cu/es_an は en と一致 (`D:un nuevo E:libro`) するが、**es_eu / es_mx だけが D と E をスワップ** し `E:un libro D:nuevo` と置く。これは形容詞後置 (`un libro nuevo`) というスペイン語の中立語順を採るための表記差だが、その場合は **D に "un" / E に "libro" / +別 letter に "nuevo"** にするか、あるいは **D:un E:libro + 形容詞を E に融合** が筋。現状の `E:un libro D:nuevo` は **D を本来「a new」(determiner+adj) と定義していたものを「nuevo」(adj のみ) として再解釈** しており、cross-sibling で D の意味が一致しない。`feedback_cross_sibling_role_consistency.md` の duplicate-letter outlier に該当。
- **Proposed fix:** es_eu / es_mx を `D:「un nuevo」 E:「libro」` に揃える (兄弟 5 変種と en に整合)。形容詞後置を残すなら **全 8 変種揃えて反転**。本データでは 5/7 が前置形を採っているため前置に揃えるのが最小コスト。
- **Edit:** `{id:11, lang:"es_eu", op:"replace", segments:[["A","Yo"],["C","compré"],["D","un nuevo"],["E","libro"],["B","en la librería"],["F","ayer"]], finding:"es_eu swaps D/E from en reference; 5 sibling es variants (ar/co/pe/cu/an) keep D:un nuevo E:libro. Cross-sibling D-letter semantic divergence."}` 【確実】
- **Edit:** `{id:11, lang:"es_mx", op:"replace", segments:[["A","Yo"],["C","compré"],["D","un nuevo"],["E","libro"],["B","en la librería"],["F","ayer"]], finding:"es_mx same swap as es_eu; align with 5 sibling Latin-American Spanish variants."}` 【確実】

### 2. #24 接語 `me` の B 独立 vs 動詞融合がスペイン語兄弟間で 2 vs 6 に分裂 【確実】

- **Current:**
  - es_eu / es_mx: A:「Por favor」 D:「muéstre」 **B:「me」** C:「el menú」
  - es_ar: A:「Por favor」 D:「mostrame」 C:「el menú」 — B 欠落
  - es_cl: A:「Por favor」 D:「muéstreme」 C:「la carta」 — B 欠落
  - es_co: A:「Por favor」 D:「me muestra」 C:「el menú」 — B 欠落
  - es_pe: A:「Por favor」 D:「muéstreme」 C:「la carta」 — B 欠落
  - es_cu: A:「Por favó」 D:「muéhtreme」 C:「el menú」 — B 欠落
  - es_an: A:「Por favó」 D:「enséñeme」 C:「la carta」 — B 欠落
- **Reference:** en A:「Please」 D:「show」 **B:「me」** C:「the menu」
- **Problem:** en は **D:show B:me** で接語 (間接目的) を独立 B に切り出すルール。es_eu / es_mx は `D:muéstre + B:me` で en に整合させるが、**残り 6 変種は接語を動詞に潰し B を palette から消失** させる。これは `feedback_split_segments_like_reference.md` 違反かつ guideline **A.2 (主目的語=接語 me/間接目的)** の単純融合。NGLE §35.4 によれば命令形 + 接語は表記上接続するが、データセット上は **同類文 #13 で `B|D:deme` 複合ラベル** が採用されている (= 接語の役割を明示) ことから、#24 でも複合ラベル `B|D:muéstreme` 等に統一すべき。少なくとも 8 変種全てで同一処理にすべき。
- **Proposed fix:** es_ar/es_cl/es_co/es_pe/es_cu/es_an 全てを `B|D:「muéstreme」` (または兄弟と同方針の `D:「muéstre」 B:「me」` 分割) に統一。データの慣行に従えば **`B|D` 複合ラベル** が #13 と整合的。
- **Edit:** `{id:24, lang:"es_cl", op:"replace", segments:[["A","Por favor"],["B|D","muéstreme"],["C","la carta"]], finding:"es_cl fuses clitic me into D-verb; es_eu/es_mx split B:me. Use B|D composite like #13 pattern; B otherwise lost from palette."}` 【確実】
- **Edit:** `{id:24, lang:"es_pe", op:"replace", segments:[["A","Por favor"],["B|D","muéstreme"],["C","la carta"]], finding:"es_pe same pattern; align with #13 B|D composite convention."}` 【確実】
- **Edit:** `{id:24, lang:"es_co", op:"replace", segments:[["A","Por favor"],["B|D","me muestra"],["C","el menú"]], finding:"es_co proclitic me muestra; still needs B-letter representation."}` 【確実】
- **Edit:** `{id:24, lang:"es_ar", op:"replace", segments:[["A","Por favor"],["B|D","mostrame"],["C","el menú"]], finding:"es_ar voseo imperative mostrame; B-clitic palette gap."}` 【確実】
- **Edit:** `{id:24, lang:"es_cu", op:"replace", segments:[["A","Por favó"],["B|D","muéhtreme"],["C","el menú"]], finding:"es_cu fuses clitic; align B|D."}` 【確実】
- **Edit:** `{id:24, lang:"es_an", op:"replace", segments:[["A","Por favó"],["B|D","enséñeme"],["C","la carta"]], finding:"es_an fuses clitic; align B|D."}` 【確実】

### 3. #65 `C:a beautiful D:gift` の C/D 配分が en に対しスペイン語兄弟全てでスワップ 【蓋然】

- **Current:**
  - es_eu/es_mx/es_ar/es_cl/es_co/es_pe/es_cu/es_an: A:「Ella」 B:「me」 E:「regaló/dio」 **D:「un regalo」 C:「(adj)」**
- **Reference:** en A:「She」 E:「gave」 B:「me」 **C:「a beautiful」 D:「gift」**
- **Problem:** en の palette は **C=adj+det "a beautiful", D=N "gift"**。スペイン語兄弟 8 変種は全て **D=「un regalo」 C=adj** と en に対し C/D を反転させている。本件は **全変種が同じ反転** なので兄弟間で非整合ではないが、参照 en との **role-letter semantic mismatch** が累積し、palette gap audit で「全変種 OK」と判定されてしまう。`feedback_cross_sibling_role_consistency.md` の duplicate-letter outlier (en の役割定義と他 8 言語で C/D が反転) に準じ、要 owner 判断。
- **Proposed fix:** スペイン語形容詞後置を尊重するなら、**en の C を「a beautiful (gift)」ではなく「beautiful」、D を「gift」** に再定義するか、または es 8 変種を `C:「un regalo」 D:adj` に揃える (現状の D=det+N が NP 主部、C=adj だが、en で C=adj+det なので意味的に対応はしている)。最小コストは **palette メタの C/D 役割を「形容詞 / 名詞」のような言語非依存定義に再記述**。
- **Edit:** `{id:65, lang:"_meta", op:"document", finding:"All 8 es variants invert C (=adj+det) / D (=N) from en reference; not a per-variant defect but a palette role-semantic mismatch. Owner decision: redefine #65 palette as C=NP-head D=adj, or accept inversion convention."}` 【要検討】

### 4. #74 非隣接 `C ... C` 重複が es_eu/es_mx/es_co のみ残存、4 変種は単一 C に統合 【確実】

- **Current:**
  - es_eu: A:「Yo」 **C:「llevo」** B:「30 minutos」 **C:「esperando」** ← 非隣接 C 重複
  - es_mx: A:「Yo」 C:「llevo」 B:「30 minutos」 C:「esperando」 ← 同
  - es_co: A:「Yo」 C:「llevo」 B:「30 minutos」 C:「esperando」 ← 同
  - es_ar: C:「Llevo」 B:「30 minutos」 C:「esperando」 ← A 欠落だが C-C 重複は残る
  - es_cl: C:「Llevo」 B:「30 minutos」 C:「esperando」 ← 同
  - es_pe: C:「Ya llevo esperando」 B:「media hora」 ← C 単独 (融合)
  - es_cu: C:「Llevo eperando」 B:「media hora」 ← C 単独
  - es_an: C:「Llevo ehperando」 B:「media hora」 ← C 単独
- **Reference:** en A:「I've」 C:「been waiting」 B:「for 30 minutes」
- **Problem:** Memory `feedback_no_adjacent_same_segments.md` は隣接同一 ID 禁止だが、本件は **非隣接** で B を挟む。プロジェクトでは非隣接重複は `feedback_cross_sibling_role_consistency.md` の duplicate-letter outlier として #82 so (wuxuu/sheegay 焦点重複) で却下された禁則と同じパターン。8 変種中 **5 変種が C-C 非隣接重複を残し、3 変種が単一 C に融合** している。語順 `llevo + 時間量 + 動名詞` (= NGLE §28.6 perífrasis "llevar + gerundio") では `llevo` (D=auxiliar) と `esperando` (C=本動詞) の **2 letter** が筋。
- **Proposed fix:** es_eu/es_mx/es_co/es_ar/es_cl 5 変種を **`D:「llevo」 B:「(時間量)」 C:「esperando」`** に統一 (D=助動詞 llevar、C=本動詞 esperar)。これは guideline A.5 (modal/aux) と整合し、非隣接 C-C 重複を解消する。
- **Edit:** `{id:74, lang:"es_eu", op:"replace", segments:[["A","Yo"],["D","llevo"],["B","30 minutos"],["C","esperando"]], finding:"es_eu has non-adjacent C-llevo + C-esperando duplication; llevar+gerundio is aux+verb, mark llevo as D."}` 【確実】
- **Edit:** `{id:74, lang:"es_mx", op:"replace", segments:[["A","Yo"],["D","llevo"],["B","30 minutos"],["C","esperando"]], finding:"es_mx same non-adjacent C duplication."}` 【確実】
- **Edit:** `{id:74, lang:"es_co", op:"replace", segments:[["A","Yo"],["D","llevo"],["B","30 minutos"],["C","esperando"]], finding:"es_co same non-adjacent C duplication."}` 【確実】
- **Edit:** `{id:74, lang:"es_ar", op:"replace", segments:[["D","Llevo"],["B","30 minutos"],["C","esperando"]], finding:"es_ar same; pro-drop A legitimate per B.1."}` 【確実】
- **Edit:** `{id:74, lang:"es_cl", op:"replace", segments:[["D","Llevo"],["B","30 minutos"],["C","esperando"]], finding:"es_cl same; pro-drop A legitimate."}` 【確実】

### 5. #21 近未来 `voy a + inf` が E 単独に潰れ D=auxiliar 欠落 — 6 変種で共通 【確実】

- **Current:**
  - es_eu / es_mx: A:「Yo」 **E:「cenaré」** C:「con amigos」 B:「esta noche」 — synthetic 未来 (D 欠落は normal)
  - es_ar: A:「Yo」 B:「esta noche」 **E:「voy a cenar」** C:「con amigos」 — periphrastic で E 1 letter
  - es_co/es_pe/es_cu/es_an: 同様に **E:「voy a (動詞)」** で 1 letter
- **Reference:** en A:「I」 **E:「will have」 D:「dinner」** C:「with friends」 B:「tonight」
- **Problem:** en は **E=「will have」(aux), D=「dinner」(本動詞・目的)** という 2-letter 分割。es_eu/es_mx は synthetic future `cenaré` で動詞・目的の融合 (西語固有のため legitimate) だが、**es_ar/es_co/es_pe/es_cu/es_an は periphrastic `voy a cenar`** を採りつつ **D を palette から完全に欠落** させる。guideline A.5 (modal/aux) かつ NGLE §16.2 によれば `ir a + inf` の `voy a` は明確に助動詞、`cenar` は本動詞 — **2 letter に分割すべき**。同じ近未来構文 #58 `Quiero + (inf)` では D:Quiero C:(inf) と分割されており、#21 でも `D:voy a C:cenar` (主動詞 cenar) と分割するのが整合的。
- **Proposed fix:** es_ar/es_co/es_pe/es_cu/es_an 5 変種で `E:「voy a」 D:「cenar」` (or `D:cená` for caribeño) に分割。
- **Edit:** `{id:21, lang:"es_ar", op:"replace", segments:[["A","Yo"],["B","esta noche"],["E","voy a"],["D","cenar"],["C","con amigos"]], finding:"es_ar periphrastic future fuses aux+verb into E; D missing. en splits E:will have D:dinner."}` 【確実】
- **Edit:** `{id:21, lang:"es_co", op:"replace", segments:[["A","Yo"],["E","voy a"],["D","cenar"],["C","con amigos"],["B","esta noche"]], finding:"es_co same pattern; split aux+verb."}` 【確実】
- **Edit:** `{id:21, lang:"es_pe", op:"replace", segments:[["A","Yo"],["E","voy a"],["D","cenar"],["C","con mis patas"],["B","esta noche"]], finding:"es_pe same; pata is vocab #7 territory but chunking needs D split."}` 【確実】
- **Edit:** `{id:21, lang:"es_cu", op:"replace", segments:[["A","Yo"],["E","voy a"],["D","comé"],["C","con lo amigo"],["B","eta noche"]], finding:"es_cu same; -r elision in infinitive comé legitimate per #7, but D split needed."}` 【確実】
- **Edit:** `{id:21, lang:"es_an", op:"replace", segments:[["A","Yo"],["E","voy a"],["D","cená"],["C","con loh amigoh"],["B","ehta noche"]], finding:"es_an same; split periphrastic aux+verb."}` 【確実】

### 6. #7 `va a estar` periphrastic 未来コピュラが 5 変種で C 単独融合、aux 欠落 【蓋然】

- **Current:**
  - es_eu / es_mx: B:「El tiempo」 A:「de mañana」 **C:「será」** D:「soleado」 — synthetic
  - es_ar / es_cl / es_co / es_pe: B:「El (tiempo|clima)」 A:「de mañana」 **C:「va a estar」** D:「soleado」 — periphrastic 1 letter
  - es_cu: 「va a tar」、es_an:「va a ehtá」 — 同じく 1 letter
- **Reference:** en B:「Tomorrow's weather」 A:「(?)」 **C:「will be」** D:「sunny」 — en も C 単独 ("will be" を 1 letter)
- **Problem:** en 参照が `C:will be` を 1-letter 扱いしているので、表面的には es 兄弟 6 変種の `C:va a estar` も整合的だが、#21 と整合させるなら periphrastic `voy a + inf` は **aux+verb の 2-letter** が筋 (`feedback_cross_sibling_role_consistency.md` の同一構文 = 同一処理原則)。データセット内方針として **periphrastic 近未来を C 単独 vs 2-letter のどちらに統一するか** が分かれている。
- **Proposed fix:** プロジェクトの慣行に従い、コピュラ含む periphrastic 未来は **C 単独 (現状 OK)** にするか、#21 と揃えて **2-letter に分割** するか、closed-review で方針確定。コピュラ文脈は #51 で扱われているので、本件は方針確認のみ。
- **Edit:** `{id:7, lang:"_meta", op:"document", finding:"Periphrastic future copula 'va a estar' kept as single C across 6 es variants; consistent with en C:will be. But #21 'voy a cenar' (also periphrastic) should split per #5 above. Owner: define policy for periphrastic future across all es variants."}` 【要検討】

### 7. #54 impersonal `hay que` を D に置く 4 変種 vs `debemos` を D に置く 4 変種 — D の意味 (impersonal vs personal modal) が分裂 【確実】

- **Current:**
  - es_eu/es_mx/es_ar/es_co: A:「Nosotros」 **D:「debemos」** C:「proteger」 B:「el medio ambiente」 — personal modal
  - es_cl/es_pe/es_cu/es_an: **D:「Hay que」** C:「proteger」 B:「el medio ambiente」 — impersonal (A 欠落)
- **Reference:** en A:「We」 D:「must」 C:「protect」 B:「the environment」
- **Problem:** Memory `feedback_impersonal_modal_as_D.md` (Il faut/Hay que/Bisogna は D=impersonal modal、A 欠落が正当 per B.9 imperatives/impersonals) に明示的に従っており、後者 4 変種は構造的に正当。しかし兄弟方言間で **personal `debemos` (1pl) vs impersonal `hay que`** が分裂しており、これは #46 (T/V) や #55 (calque) の射程外であり構造の問題。RAE NGLE §42.7 によれば `hay que` は **impersonal** で 1pl 主語と意味的に等価ではない (`debemos` = 我々が、`hay que` = 一般に)。これは方言的差というよりむしろ **元データの方針未統一** の可能性が高い。
- **Proposed fix:** 4 変種 (es_cl/es_pe/es_cu/es_an) を `debemos` (1pl personal) に統一するか、または 8 変種全て `hay que` に統一して A を全て欠落させる。元 ja「環境を守らなければならない」は impersonal とも 1pl とも解釈可能なので、どちらに揃えても可。
- **Edit:** `{id:54, lang:"_meta", op:"document", finding:"4 es variants use impersonal D:hay que (A omitted per B.9), 4 use personal D:debemos with A:Nosotros. Same source sentence; sibling-divergent modal structure. Owner: unify across 8 variants."}` 【確実】

### 8. #37 (誕生日プレゼント) 同様に `tengo que` vs `necesito` が D 配置で分裂 【確実】

- **Current:**
  - es_eu/es_mx/es_co: A:「Yo」 **B:「necesito」** E:「comprar」 D:「un regalo」 C:「de cumpleaños」
  - es_ar: A:「Yo」 **B:「tengo que」** E:「comprar」 C:「un regalo de cumpleaños」 ← D 欠落
  - es_cl/es_pe/es_cu/es_an: **B:「Tengo que」** E:「comprar」 D:「un regalo」 C:「de cumpleaño(s)」 — A 欠落
- **Reference:** en A:「I」 B:「need to」 E:「buy」 D:「a birthday gift」
- **Problem:** モーダル `tengo que` / `necesito` を **B** に置いている (全 8 変種共通) が、これは memory `feedback_modal_verb_not_subject.md` (modal は D が一般) と矛盾する。en では B が "need to" だが、これは元データ palette で **B=modal (need to)** と定義済みなのでスペイン語兄弟が B に置くこと自体は OK。しかし es_ar は D を palette から欠落させ (`D:un regalo` を `C:un regalo de cumpleaños` に潰している)、構造分節 cardinality が他 7 変種と異なる。
- **Proposed fix:** es_ar を `D:「un regalo」 C:「de cumpleaños」` (or `cumpleañoh` 等は射程外) に分割。
- **Edit:** `{id:37, lang:"es_ar", op:"replace", segments:[["A","Yo"],["B","tengo que"],["E","comprar"],["D","un regalo"],["C","de cumpleaños"]], finding:"es_ar fuses D:un regalo + C:de cumpleaños into single C; other 7 es variants split. D palette gap."}` 【確実】

### 9. #28 ペルソナ可能 `Podría` + `usted` の B 配分 — es_cl のみ B を独立分節、7 変種は B 欠落 【確実】

- **Current:**
  - es_eu/es_mx/es_co/es_pe/es_cu/es_an: A:「Podría/Podrías」 C:「recomendarme」 D:「un」 F:「buen」 E:「restaurante」 ← B 欠落
  - es_ar: 同様 A:「Podrías」 B 欠落
  - **es_cl**: A:「Podría」 **B:「usted」** C:「recomendarme」 D:「un」 F:「buen」 E:「restaurante」
- **Reference:** en A:「Could」 **B:「you」** C:「recommend」 D:「a」 F:「good」 E:「restaurant」 — B=「you」が独立
- **Problem:** en の palette で **B=「you」** (2sg 聞き手代名詞) が独立。es_cl だけが `B:usted` で en に整合し、他 7 変種は pro-drop で B を欠落。pro-drop は B.1 で正当な省略だが、**8 変種中 1 変種のみが B を持つ** のは cross-sibling 非整合。`feedback_priority_not_keep_reason.md` (sibling が分割すれば全変種分割) を逆向きに適用すれば、**es_cl の B:usted を削除して 7 変種に揃える** か、**7 変種に `B:usted` を補う** かのどちらか。スペイン語の polite 文脈で `usted` 顕在は #46 (T/V) で扱われたが、構造的には es_cl の outlier。
- **Proposed fix:** 7 変種に揃え es_cl の B:usted を削除 (pro-drop 統一) するのが最小コスト。または逆。
- **Edit:** `{id:28, lang:"es_cl", op:"replace", segments:[["A","Podría"],["C","recomendarme"],["D","un"],["F","buen"],["E","restaurante"]], finding:"es_cl alone retains B:usted; 7 sibling es variants drop B per pro-drop B.1. Align with siblings."}` 【蓋然】

### 10. #40 `usted` 主語の有無が方言間で 5 vs 3 に分裂 — `[A:usted]` の独立分節揺れ 【確実】

- **Current:**
  - es_eu/es_mx/es_cl/es_cu/es_an: E:「Sabe」 **A:「usted/Uhté/Tú」** C:「dónde」 D:「está/queda/ehtá」 B:「(目的)」
  - es_ar/es_pe: E:「Sabe(s)」 C:「dónde」 D:「queda」 B:「(目的)」 ← A 欠落
  - es_co: **E:「Usted sabe」** C:「dónde」 D:「queda」 B:「(目的)」 ← A 欠落 (Usted が E に融合)
- **Reference:** en A:「Do」 (Subject-Aux inverted) E:「you know」 C:「where」 D:「is」 B:「the post office」
- **Problem:** `usted` を **独立 A** にする (5 変種) か **E (動詞句) に融合** する (es_co) か **完全に省略** する (es_ar/es_pe pro-drop) かが 3 通りに分裂。Memory `feedback_cross_sibling_role_consistency.md`。少なくとも es_co の `E:Usted sabe` は他のどの変種とも構造が違い (主語+動詞を融合)、これは `feedback_modal_verb_not_subject.md` 違反でもある (主語と動詞は独立分節すべき)。
- **Proposed fix:** es_co を `A:「Usted」 E:「sabe」` に分割。
- **Edit:** `{id:40, lang:"es_co", op:"replace", segments:[["A","Usted"],["E","sabe"],["C","dónde"],["D","queda"],["B","la oficina de correos"]], finding:"es_co fuses Usted (subject) + sabe (verb) into E; split A+E like sibling variants."}` 【確実】

### 11. #41 時間副詞 `ahora/ahorita` の位置と letter 整合 — es_ar の B が中間挿入 【蓋然】

- **Current:**
  - es_eu/es_mx/es_co: A:「Yo」 E:「estoy leyendo」 D:「un」 F:「libro」 C:「interesante」 **B:「ahora/ahorita」** ← 文末
  - es_ar: A:「Yo」 **B:「ahora」** E:「estoy leyendo」 D:「un」 C:「interesante」 F:「libro」 ← 主語直後
  - es_cl: E:「Estoy leyendo」 D:「un」 F:「libro」 C:「interesante」 **B:「ahora」** ← 文末
  - es_pe/es_cu/es_an: **B:「Ahora/Ahorita」** E:「estoy leyendo」 D:「un」 F:「libro」 C:「interesante」 ← 文頭
- **Reference:** en A:「I'm」 B:「now」 E:「reading」 D:「an」 F:「interesting」 C:「book」 ← 主語直後
- **Problem:** 副詞「ahora」の位置自体は guideline C.1 (時間副詞 sentence-initial vs sentence-final) で **判定保留** だが、es_ar は F (libro) を文末に追い、C-F の順序が他 4 変種と逆 (C:interesante F:libro vs F:libro C:interesante)。en と es_ar/es_co は **D:art F:adj/N の順** で en 一致だが、es_eu/es_mx は **D:un F:libro C:interesante** と F=libro / C=adj の en と逆配分。これは finding #1 (`D:a new E:book` swap) と同根の構造分裂。`feedback_cross_sibling_role_consistency.md`。
- **Proposed fix:** 全 8 変種で **D:un / F:libro / C:interesante** (= 名詞前置+形容詞後置) に揃える。本件は #1 finding と合わせて palette letter 役割の一貫性確保が必要。
- **Edit:** `{id:41, lang:"_meta", op:"document", finding:"#41 D/F/C ordering within NP varies across es siblings (libro/interesante swap). Related to finding #1; owner decision on NP-internal letter semantics."}` 【要検討】

### 12. #45 `En este país` 分節が es_cu/es_an のみ 1-letter A に融合、6 変種は E-F-A に 3 分割 【確実】

- **Current:**
  - es_eu/es_mx/es_ar/es_cl/es_co/es_pe: **E:「En」 F:「este」 A:「país」** D:「hace」 C:「(mucho) frío」 B:「en invierno」
  - es_cu: **A:「En ete paí」** B:「en invierno」 D:「hace」 C:「frío」 ← E + F 欠落
  - es_an: **A:「En ehte paí」** B:「en invierno」 D:「hace」 C:「frío」 ← E + F 欠落
- **Reference:** en E:「In」 F:「this」 A:「country」 D:「(it's)」 C:「cold」 B:「in winter」
- **Problem:** カリブ・アンダルシア音写 (paí, ehte) のために文字列を融合した形跡があるが、guideline A.9 (demonstrative when context-required) かつ **`feedback_split_segments_like_reference.md`** により分節構造は維持すべき。es_cu/es_an で `En` (E) と `ete/ehte` (F) を独立分節できないわけではない。
- **Proposed fix:** es_cu/es_an を 6 変種に揃え `E:「En」 F:「ete/ehte」 A:「paí」` に分割。
- **Edit:** `{id:45, lang:"es_cu", op:"replace", segments:[["E","En"],["F","ete"],["A","paí"],["B","en invierno"],["D","hace"],["C","frío"]], finding:"es_cu fuses E:En + F:ete + A:país into single A; 6 sibling variants split 3-way. Phonetic spelling does not justify chunking loss."}` 【確実】
- **Edit:** `{id:45, lang:"es_an", op:"replace", segments:[["E","En"],["F","ehte"],["A","paí"],["B","en invierno"],["D","hace"],["C","frío"]], finding:"es_an same fusion pattern."}` 【確実】

### 13. #49 `dígame / dime` 接語融合がスペイン語兄弟間で fused-only 8 変種共通 — E 欠落と B/H/C の cross-sibling 混乱 【確実】

- **Current:**
  - es_eu/es_mx: A:「Por favor」 D:「díga」 **B:「me」** E:「cómo llegar」 F:「al」 G:「aeropuerto」 ← C, H 欠落
  - es_ar/es_cl/es_co: A:「Por favor」 D:「decime/dígame」 E:「cómo llegar/llego」 F:「al」 G:「aeropuerto」 ← B, C, H 欠落
  - es_pe/es_cu/es_an: A:「Por favor」 D:「dígame/dime」 **B:「el camino」** F:「al/pa'l/ar」 G:「aeropuerto」 ← C, E, H 欠落
- **Reference:** en (palette ABCDEFGH)
- **Problem:** 8 変種が 3 つの異なる構造を採り、B の意味が 2 つ (B=「me」接語 vs B=「el camino」目的語) に分裂、E の有無が 5 vs 3 に分裂。en の palette letter 定義に対し **B が "me" (clitic) を指すのか "the way" (path) を指すのか不明** で、内部分裂。`feedback_cross_sibling_role_consistency.md` の duplicate-letter outlier 典型。
- **Proposed fix:** 全 8 変種で **`B:el camino` (目的語) を独立** にし、接語 `me` は `B|D` 複合または D 内に統一。または **B:「me」 C/E:「el camino」** で全変種揃える。本件は owner 方針確定要件。
- **Edit:** `{id:49, lang:"_meta", op:"document", finding:"#49 B-letter splits between B:me (clitic) and B:el camino (object) across 8 es variants. Palette role-letter conflicts; owner decision needed."}` 【要検討】

### 14. #50 `A mi perro` の前置詞 `a` の有無が 5 vs 3 に分裂 — E の中身が `A mi` vs `Mi` 【確実】

- **Current:**
  - es_eu/es_mx/es_ar/es_cl/es_co: **E:「A mi」** A:「perro」 D:「le gusta/encanta」 C:「(動詞句)」
  - es_pe/es_cu/es_an: **E:「Mi」** A:「perro」 D:「le gusta/guta/guhta」 C:「(動詞句)」 ← `a` 欠落
- **Reference:** ja「私の犬は散歩が好きだ」(en 等価: "My dog likes walks")
- **Problem:** スペイン語 `gustar` 構文は **`a + (dative subject)` + 接語 le + 動詞** が標準 (NGLE §35.7)。es_pe/es_cu/es_an は **前置詞 `a` を欠落** させており、これは方言的省略ではなく **gustar 構文の必須要素** (RAE *Diccionario panhispánico de dudas* "gustar")。Memory `feedback_segment_splitting.md` rule on prepositions に該当。文意は伝わるが、5 兄弟と整合させるべき。
- **Proposed fix:** es_pe/es_cu/es_an を `E:「A mi」` に揃える。
- **Edit:** `{id:50, lang:"es_pe", op:"replace", segments:[["E","A mi"],["A","perro"],["D","le gusta"],["C","pasear bastante"]], finding:"es_pe omits 'a' before dative; NGLE §35.7 requires 'a + NP' for gustar. 5 sibling es variants retain 'A mi'."}` 【確実】
- **Edit:** `{id:50, lang:"es_cu", op:"replace", segments:[["E","A mi"],["A","perro"],["D","le guta"],["C","paseá un montón"]], finding:"es_cu same omission; align E with siblings."}` 【確実】
- **Edit:** `{id:50, lang:"es_an", op:"replace", segments:[["E","A mi"],["A","perro"],["D","le guhta"],["C","paseá un montón"]], finding:"es_an same omission; align E."}` 【確実】

### 15. #55 `me tomo` reflexive が es_an のみ顕在、他は `tomo`/`bebo` — C 内の reflexive 接語独立分節揺れ 【蓋然】

- **Current:**
  - es_eu: A:「Yo」 **C:「bebo」** E:「dos」 F:「tazas de」 B:「café」 D:「cada día」
  - es_mx/es_ar/es_cl/es_co: **C:「tomo」**
  - es_pe: **C:「tomo」** (但し副詞 D 前置)
  - es_cu: **C:「tomo」**
  - es_an: **C:「me tomo」** (reflexive `me tomar` 用法)
- **Problem:** es_an のみ reflexive `me tomo` を **C に融合** し、接語 `me` を独立分節していない。他 7 変種は非 reflexive で、構造分裂はあるが、**接語 me を独立 B に切り出すか C に潰すか** が #65 (B:me 独立) との整合性で問題。RAE 慣用では `tomarse` (= 飲み干す、強調 reflexive) は **接語の有意味性** がある (Bosque & Demonte §21.3.2)。最小コストは **es_an の `me tomo` を `B:「me」 C:「tomo」` に分割**。
- **Proposed fix:** es_an を `B|C:「me tomo」` 複合または分割。
- **Edit:** `{id:55, lang:"es_an", op:"replace", segments:[["D","Toh lo día"],["B|C","me tomo"],["E","doh"],["F","tasah de"],["B","café"]], finding:"es_an reflexive me-tomo fuses clitic; if me has aspectual content per Bosque-Demonte §21.3.2, mark B|C."}` 【蓋然】 (B が 2 度出る形になるため owner 確認)

### 16. #67 `D:hago ejercicio` vs `D:entreno` — es_eu/es_cl は 1-letter D に動詞融合、他 6 変種も同様 (整合) 【蓋然】

- **Current:**
  - es_eu: A:「Yo」 **D:「entreno」** B:「en el gimnasio」 C:「tres veces」 E:「a la semana」 — 1 letter D
  - es_mx/es_ar/es_co/es_pe/es_cu/es_an: A:「Yo」 **D:「hago ejercicio」** B:「en el gimnasio/gym/gimnahio」 ... — 1 letter D
  - es_cl: **D:「Hago ejercicio」** B:「en el gym」 C:「tres veces」 E:「a la semana」 — A 欠落 (#55 pro-drop で扱い済)
- **Reference:** en A:「I」 D:「exercise」 B:「at the gym」 C:「three times」 E:「a week」
- **Problem:** 7 変種は **`D:hago ejercicio`** という軽動詞構文 (= "do exercise") を D 1 letter に融合しているが、en は **D:exercise** (1 動詞)。`hago ejercicio` は **hacer (D=aux) + ejercicio (B=目的語名詞)** に分割可能で、Memory `feedback_split_segments_like_reference.md` の light verb construction split rule (`hacer + N` を D+B に分割) との整合確認要。ただし en も 1 letter なので、現状の融合は en と意味的に整合的。本件は方針確認。
- **Edit:** `{id:67, lang:"_meta", op:"document", finding:"7 es variants fuse light-verb 'hago ejercicio' into single D; en uses single D:exercise (verb). Acceptable per reference, but split into D:hago B:ejercicio possible. Owner: define light-verb policy."}` 【要検討】

### 17. #76 `Cuando` 節の位置 (D-C-B-A vs C-B-A-D) が 5 vs 3 に分裂 【確実】

- **Current:**
  - es_eu/es_mx/es_ar/es_cl/es_co: **D:「Me siento feliz/Me pongo feliz」** C:「cuando」 B:「escucho」 A:「música」 — D 文頭
  - es_pe/es_cu/es_an: C:「Cuando」 B:「escucho/ehcucho」 A:「música」 **D:「me siento feliz/felí」** — D 文末
- **Reference:** ja「音楽を聴くと幸せな気持ちになる」(条件節先行、主節後置)
- **Problem:** ja の元文は **音楽を聴くと (条件節先) + 幸せになる (帰結節後)** で、es_pe/es_cu/es_an の C-B-A-D 順が ja に整合的。一方 es_eu/es_mx/es_ar/es_cl/es_co は **主節 D 先行** で en SVO に揃えている (calque 寄り)。これは #55 で扱われた calque issue とも近接するが、本件は **構造の sibling-divergence** が射程。語順は guideline C.1 (時間副詞 sentence-initial vs final) と類似だが、本件は **副詞節** で意味中核を持つので、ja に揃えるべき。
- **Proposed fix:** 5 変種を ja に整合させ C-B-A-D 順に統一。または現状維持で語順自由扱い (es は語順自由)。
- **Edit:** `{id:76, lang:"_meta", op:"document", finding:"5 es variants front main clause D; 3 (pe/cu/an) front subordinate C-clause matching ja source. Sibling-divergent ordering; owner decision."}` 【要検討】

### 18. #81 `dolor de cabeza` vs `me duele la cabeza` で B/D が分裂 — 構造的に 2 vs 6 【確実】

- **Current:**
  - es_eu/es_mx/es_ar/es_cl/es_co: A:「Yo」 F:「tengo/traigo」 **E:「dolor de cabeza」** C:「hoy」 ← B, D 欠落
  - es_pe/es_cu/es_an: C:「Hoy」 **F:「me duele」** E:「la cabeza」 ← A, B, D 欠落
- **Reference:** ja「今日は頭が痛い」(literal: "today head is hurting")
- **Problem:** 8 変種で **構文自体が分裂**: 5 変種は `tener + dolor de cabeza` (have + headache)、3 変種は `me duele la cabeza` (head hurts me)。前者は B/D を構造的に欠落、後者は A も加えて欠落。B/D が palette にあるのに 8 変種すべてが欠落させる時点で **palette 役割定義 (#81 の B と D が何を指すか) が不明**。`feedback_cross_sibling_role_consistency.md` の duplicate-letter outlier。
- **Proposed fix:** palette の B/D を明確に再定義するか、`B:「dolor」 D:「de cabeza」` のように分割し、3 変種の `me duele la cabeza` を `B:「me」 D:「duele」 E:「la cabeza」` に揃える。
- **Edit:** `{id:81, lang:"_meta", op:"document", finding:"#81 palette has B and D but ALL 8 es variants omit them; constructions split (tener dolor vs doler). Owner: redefine B/D role for #81 or split A/B/D from current fused E."}` 【要検討】

### 19. #95 `D` (=palette) が 8 変種全てで欠落 — `Voy a la oficina en bicicleta` の D 役割未充足 【確実】

- **Current:**
  - 全 8 変種: **C:「Voy」 B:「a la (oficina/chamba/trabajo)」 A:「en bicicleta」** — D 欠落
- **Reference:** en A:「I」 C:「go」 B:「to the office」 D:「by bike」 ← D=「by bike」、A=「I」
- **Problem:** en では **D=「by bike」** (手段) かつ **A=「I」**。スペイン語兄弟は全変種で **D を palette から欠落** させ、`en bicicleta` を **A** に置く (= en の A=「I」と意味的に不一致)。pro-drop で A=「I」相当を省略しつつ A の letter 自体は手段表現に流用したため、**A=「I」 という en の役割定義と兄弟 8 変種の A=「en bicicleta」が衝突**。palette letter の cross-sibling 意味整合性違反。
- **Proposed fix:** 8 変種で `D:「en bicicleta/bici」` に統一 (A 欠落は pro-drop で正当)。
- **Edit:** `{id:95, lang:"es_eu", op:"replace", segments:[["C","Voy"],["B","a la oficina"],["D","en bicicleta"]], finding:"es_eu (and all 7 sibling es) put 'en bicicleta' in A; en defines A=I, D=by bike. Move to D; A legitimately omitted per pro-drop."}` 【確実】
- **Edit:** `{id:95, lang:"es_mx", op:"replace", segments:[["C","Voy"],["B","a la oficina"],["D","en bicicleta"]], finding:"es_mx same role-letter swap."}` 【確実】
- **Edit:** `{id:95, lang:"es_ar", op:"replace", segments:[["C","Voy"],["B","a la oficina"],["D","en bici"]], finding:"es_ar same."}` 【確実】
- **Edit:** `{id:95, lang:"es_cl", op:"replace", segments:[["C","Voy"],["B","a la oficina"],["D","en bici"]], finding:"es_cl same."}` 【確実】
- **Edit:** `{id:95, lang:"es_co", op:"replace", segments:[["C","Voy"],["B","a la oficina"],["D","en bicicleta"]], finding:"es_co same."}` 【確実】
- **Edit:** `{id:95, lang:"es_pe", op:"replace", segments:[["C","Voy"],["B","a la chamba"],["D","en bicicleta"]], finding:"es_pe same (chamba vocab is #61 territory but D move stands)."}` 【確実】
- **Edit:** `{id:95, lang:"es_cu", op:"replace", segments:[["C","Voy"],["B","pa la oficina"],["D","en bicicleta"]], finding:"es_cu same."}` 【確実】
- **Edit:** `{id:95, lang:"es_an", op:"replace", segments:[["C","Voy"],["B","ar trabajo"],["D","en bicicleta"]], finding:"es_an same."}` 【確実】

### 20. #16 `D, E` 全変種で欠落 — `What time` 疑問文の D=does, E=不明 【蓋然】

- **Current:**
  - 全 8 変種: A:「A qué hora」 C:「empieza」 B:「la película/peli」 ← D, E 欠落
- **Reference:** en A:「What time」 D:「does」 B:「the movie」 C:「start」 ← E 欠落 (palette ABCDE)
- **Problem:** スペイン語の wh 疑問は do-support なしで成立するので **D=「does」欠落は B.3 (zero copula/zero do-support) で正当**。しかし en 自身が E を欠落させており、palette ABCDE の **E が何を指すか不明** (元データの palette letter 余剰)。これは palette メタデータの問題。
- **Edit:** `{id:16, lang:"_meta", op:"document", finding:"All 8 es variants + en omit D and E; D=does is legitimate per B.3 (Spanish has no do-support). Palette E unused; owner: trim palette or accept gap."}` 【蓋然】

### 21. #89 `puedo / pueo` aux + `encontrar / encontrá` 構造で es_an の C=「No」 が他 7 変種と同位だが `pueo` は phonetic — 構造一致 【蓋然】

- **Current:**
  - 全 8 変種: C:「No」 B:「puedo/pueo」 D:「encontrar/encontrá」 E:「‌la」 G:「contraseña」 F:「de(l) Wi-Fi」 ← A 欠落
- **Reference:** en A:「I」 C:「can't」 B:「find」 D:... ← en B-letter 配分が異なる
- **Problem:** en は **B=find (動詞)** だがスペイン語兄弟は全 8 変種で **B=puedo (modal aux), D=encontrar (本動詞)**。これは memory `feedback_modal_verb_not_subject.md` (modal は D) と矛盾する (modal が B に置かれている)。ただし 8 変種すべてが同じ配分なので **palette 役割定義** (#89 で B=modal, D=verb と再定義) で受容可能。`feedback_priority_not_keep_reason.md` 観点では cross-sibling 整合は OK。
- **Edit:** `{id:89, lang:"_meta", op:"document", finding:"All 8 es variants assign B=modal puedo, D=verb encontrar; conflicts with feedback_modal_verb_not_subject.md (D=modal). Owner: clarify palette role for #89 or swap B↔D in all es variants."}` 【要検討】

### 22. #99 接語 `lo` の有無 (mc, costar/sale/vale の D 配分) と A 欠落の 5 vs 3 分裂 【確実】

- **Current:**
  - es_eu/es_mx/es_ar/es_cl/es_co: C:「Cuánto」 D:「cuesta/sale/vale」 **A:「este」 B:「(N)」** ← E 欠落
  - es_pe/es_cu/es_an: C:「Cuánto」 D:「cuesta/cueta/cuehta」 **B:「este recuerdo」** ← A, E 欠落
- **Reference:** en C:「How much」 D:「does ... cost」 A:「this」 B:「souvenir」 — en は A 独立
- **Problem:** 5 変種は **A:「este」 B:「recuerdo」** と en と整合的に分割 (demonstrative A.9 = `feedback_segment_splitting.md` rule on demonstratives)、3 変種は **B:「este recuerdo」** と融合して A を欠落。guideline A.9 (demonstrative when context-required) で defect。
- **Proposed fix:** 3 変種を `A:「este/ete/ehte」 B:「recuerdo/recueddo」` に分割。
- **Edit:** `{id:99, lang:"es_pe", op:"replace", segments:[["C","Cuánto"],["D","cuesta"],["A","este"],["B","recuerdo"]], finding:"es_pe fuses demonstrative+N into B; 5 sibling es variants split A:este B:recuerdo per A.9."}` 【確実】
- **Edit:** `{id:99, lang:"es_cu", op:"replace", segments:[["C","Cuánto"],["D","cueta"],["A","ete"],["B","recueddo"]], finding:"es_cu same fusion; split A:ete B:recueddo."}` 【確実】
- **Edit:** `{id:99, lang:"es_an", op:"replace", segments:[["C","Cuánto"],["D","cuehta"],["A","ehte"],["B","recuerdo"]], finding:"es_an same fusion; split A:ehte B:recuerdo."}` 【確実】

---

## 集計

- **対象**: `/home/jounlai/langmap/langmap_reviews/76_open.md`
- **issue 件数**: **22 件** (確実 15、蓋然 4、要検討 7、`_meta` ドキュメント要件 8 件を含む — 実 edit 提案 ≈ 27 件)
- **主たる欠陥カテゴリ (dominant defect)**: **「兄弟方言間で同一 NP / 同一構文の役割 letter 配分がスワップまたは欠落する cross-sibling structural inconsistency」** — 特に **(a) `D:a new E:book` 型 NP の D/E スワップ (#11, #41, #65, #41)、(b) clitic `me` の B 独立 vs 動詞融合分裂 (#24, #55, #50)、(c) 近未来 `voy a + inf` を E 単独に潰し D=aux 欠落 (#21, #7)、(d) 非隣接 `C...C` 重複が一部の方言のみ単一 C に統合 (#74)、(e) impersonal `hay que` vs personal `debemos` で A 欠落の有無分裂 (#54, #37)、(f) palette 役割 (A=主語 vs A=手段) の cross-sibling 意味衝突 (#95)** の 6 系統。`es_cl 51% / es_cu 44% / es_an 44% / es_pe 43%` という palette-gap 高値は **pro-drop (B.1 で正当)** に加えて、**所有形容詞 + 接語の融合・近未来助動詞融合・demonstrative 融合** の 3 つの構造的選択が累積したことに起因する。多くは guideline `feedback_cross_sibling_role_consistency.md` / `feedback_split_segments_like_reference.md` / `feedback_modal_verb_not_subject.md` の既知パターンの新事例で、`feedback_impersonal_modal_as_D.md` (#54, #37) は方言間の方針未統一を露呈している。

---

## Dev response — round 1 (2026-06-04)

@es_chunker_cv 様、構造的 cross-sibling 監査に感謝します。「(a) NP D/E スワップ、(b) clitic me 独立分節分裂、(c) 近未来 voy a + inf の D 欠落、(d) 非隣接 C…C 重複、(e) hay que vs debemos、(f) palette letter 役割衝突 (#95 A=I vs A=means)」の 6 系統は、いずれも `feedback_cross_sibling_role_consistency.md` / `feedback_split_segments_like_reference.md` / `feedback_modal_verb_not_subject.md` / `feedback_impersonal_modal_as_D.md` の既知パターン違反であり、ご指摘の通りです。本ラウンドで **11 件 / 22 件** を即時 edit として採択、**37 edits** を `/tmp/lm_edits_76.json` に格納しました (data.js は READ-ONLY を遵守、JSON のみ出力)。

### 採択 (11 issues / 37 edits)

- **#11 NP D/E スワップ (確実)** — es_eu / es_mx を `D:un nuevo E:libro` に揃え、en 参照と 5 兄弟変種に整合。2 edits。
- **#24 clitic `me` 接語独立 (確実)** — 6 変種 (cl/pe/co/ar/cu/an) を `B|D:muéstreme` 等の composite ラベルに統一。#13 の `B|D:deme` 慣行と整合させ B-letter を palette から失わない方針を採用。6 edits。
- **#74 非隣接 C-C 重複 (確実)** — 5 変種 (eu/mx/co/ar/cl) で `D:llevo` (perífrasis llevar+gerundio の aux per NGLE §28.6) + `B:時間量` + `C:esperando` に再分節。隣接同 ID 規則も維持。5 edits。
- **#21 近未来 voy a + inf (確実)** — 5 変種 (ar/co/pe/cu/an) で `E:voy a` + `D:cenar/cená/comé` に分割し aux/main verb を 2-letter 化、#58 `Quiero + inf` と整合。5 edits。
- **#37 tengo que の D 配分 (確実)** — es_ar の融合 `C:un regalo de cumpleaños` を `D:un regalo` + `C:de cumpleaños` に再分割し、他 7 変種と整合。1 edit。
- **#28 es_cl の outlier B:usted (蓋然)** — pro-drop B.1 で 7 兄弟と整合させるため es_cl の B:usted を削除。1 edit。
- **#40 es_co の主語+動詞融合 (確実)** — `E:Usted sabe` を `A:Usted` + `E:sabe` に分割し `feedback_modal_verb_not_subject.md` 準拠。1 edit。
- **#45 デモンストラティブ融合 (確実)** — es_cu / es_an の `A:En ete/ehte paí` を `E:En` + `F:ete/ehte` + `A:paí` に 3 分割。phonetic 表記は chunking 損失を正当化しない。2 edits。
- **#50 gustar 構文の前置詞 `a` (確実)** — es_pe / es_cu / es_an の `E:Mi` を `E:A mi` に修正し NGLE §35.7 の dative 必須要素を回復。3 edits。
- **#95 A=主語 vs A=手段 衝突 (確実)** — 全 8 変種で `A:en bicicleta/bici` → `D:en bicicleta/bici` に letter を移動。en の A=「I」と整合性を回復、pro-drop で A 欠落は正当。8 edits。
- **#99 デモンストラティブ A:este 独立 (確実)** — es_pe / es_cu / es_an の `B:este/ete/ehte recuerdo/recueddo` を `A:este/ete/ehte` + `B:recuerdo/recueddo` に分割。3 edits。

### 保留 (11 issues / `_meta` ドキュメント要件)

以下は **owner 方針確定** を要する `_meta` 提案、または cross-cell 影響が大きく単独 edit で解決できないため本ラウンドでは保留:

- **#65** (NP C/D 反転、8 変種共通) — palette role-letter 意味 (en C=adj+det vs es C=adj) の owner 再定義要件。
- **#7** (periphrastic コピュラ va a estar) — #21 と方針統一する場合 8 変種に再分割影響、owner 決定要。
- **#54** (hay que vs debemos) — 両方とも `feedback_impersonal_modal_as_D.md` 上 valid。どちらに統一するかの方針要。
- **#41** (NP-internal D/F/C ordering) — #11 と関連、palette letter 意味の owner 再定義要件。
- **#49** (`dígame / dime` の B 役割衝突) — B=clitic me vs B=el camino の palette 再定義要件。
- **#55** (es_an `me tomo` reflexive) — `B|C` 案は同セル内で `B:café` と非隣接 B 重複が発生するため、owner 判断要 (現状は `feedback_cross_sibling_role_consistency.md` の duplicate-letter outlier 規則に抵触)。
- **#67** (light-verb `hago ejercicio`) — en も 1-letter で現状受容可。policy 決定要。
- **#76** (条件節位置) — ja 整合 vs en 整合の policy 決定要。
- **#81** (`dolor de cabeza` vs `me duele la cabeza`) — palette B/D が全 8 変種で欠落、palette 再定義要件。
- **#16** (D=does 欠落) — B.3 で正当、palette E 余剰は owner 判断。
- **#89** (`puedo / encontrar` の B/D 配分) — 全 8 変種で整合的だが `feedback_modal_verb_not_subject.md` 抵触、palette 再定義要件。

### 留意事項
- **#51 (ser/estar)** は既出処理のため対象外、重複 flag なし。
- **#7 va a estar** は #21 と理屈上同根だが本ラウンドでは保留 (es 兄弟 6 変種共通 + en C 単独で整合的)。
- 全 37 edits は隣接同 ID なし (バリデート済)。
- data.js は READ-ONLY 維持、JSON のみ出力 (`/tmp/lm_edits_76.json`)。

### Closure 提案

採択 11 / 22 件は次ラウンド適用可。保留 11 件は **closed-review** で palette letter 意味と方言間方針を確定後、再オープン。本ラウンドは **partial close**、`_meta` 系統は **policy round** を別途要請します。
