# LangMap データレビュー #98 — Spanish 11 deferred-items policy resolver (#76 cluster)

## レビュアー自己紹介 (ペルソナ)

私は **Dr. Tomás Iturralde-Caamaño (handle: @es_policy_resolver)**、サラマンカ大学スペイン語学博士 (2017、汎スペイン語構造類型論)、Real Academia Española 客員研究員 (2018–2020、NGLE 補遺第3版電子化プロジェクト)、Asociación de Academias de la Lengua Española (ASALE) 米州方言調整委員 (2021–) を経て、現在 Centro de Estudios Hispánicos de Lima で **「役割文字 (palette role-letter) cross-sibling 整合性」** を専門に dataset 監査を担当。常用資料は RAE *Nueva gramática de la lengua española* (NGLE 2009) §16/§28/§35/§42, Bosque & Demonte *Gramática descriptiva* (Espasa 1999), Lipski *Latin American Spanish* (Longman 1994), ASALE *Diccionario de americanismos* (2010), Lapesa *Historia de la lengua española* (9 ed. 1981)。

本ラウンドの目的は **#76 (Spanish dialects palette-coverage / chunking deep-dive, @es_chunker_cv 担当) で deferred された 11 件 (`_meta` policy items)** の解決である。#76 は 22 件中 11 件を即時 apply、残り 11 件を `_policy_deferred.md` §#76-A "Spanish palette role redefinitions" に retire した。本ラウンドは **(a) ownership 取得済みの policy** を該当 cell に apply、**(b) 真の policy items** はより精緻な documentation を残し `_policy_deferred.md` 更新提案を行う、の 2 軸で resolution する。

## 参考文献
- Real Academia Española *Nueva gramática de la lengua española* (NGLE 2009) §16 (perífrasis modales), §28.6 (llevar + gerundio), §35 (clíticos), §42.7 (impersonales con `hay que`)
- Bosque & Demonte 編 *Gramática descriptiva de la lengua española* (Espasa 1999) Vol 2 ch. 17/21
- Lipski, J. *Latin American Spanish* (Longman 1994) §6.4 (chileno), §6.5 (es_an), §6.6 (Caribbean)
- ASALE *Diccionario panhispánico de dudas* (Santillana 2005), s.v. "gustar", "hay que", "voy a + inf"
- Lapesa *Historia de la lengua española* (Gredos 1981, 9 ed.)
- Memory: `feedback_cross_sibling_role_consistency.md`, `feedback_split_segments_like_reference.md`, `feedback_modal_verb_not_subject.md`, `feedback_impersonal_modal_as_D.md`, `feedback_prefer_splitting_segments.md`, `feedback_priority_not_keep_reason.md`
- `_omission_guidelines.md` B.1 (pro-drop), B.3 (do-support 欠落), B.9 (impersonal/imperative の A 欠落)
- 既出: #76 closed (22 件中 11 apply 済), `_policy_deferred.md` §#76-A

## 検証方法

`/tmp/audit98.mjs` で `/home/jounlai/langmap/data.js` を JSON 化、#76 deferred 11 cells (#65 / #7 / #54 / #41 / #49 / #55 / #67 / #76 / #81 / #16 / #89) を全 9 変種 (es / es_eu / es_mx / es_ar / es_cl / es_co / es_pe / es_cu / es_an) 横断 dump、(i) en/ja 参照、(ii) palette role-letter 集合、(iii) cell 内 role-letter 配分の sibling 分裂、(iv) `_policy_deferred.md` 上の Option A/B 推奨を再評価。**data.js は READ-ONLY**、提案は JSON edit としても各項目末に転載。

確信度は **【確実】**= apply 可能 / policy 既存 memory rule で確定、**【蓋然】**= apply で sibling 整合する可能性高いが register 等で異論あり、**【要検討】**= 本ラウンドでも policy 未確定で deferred 継続必要。

---

## 指摘事項 (Issues found) — 14 件

### 1. #65 NP `C:adj` / `D:art+N` の en 参照とのスワップ — 8 変種共通 → **palette メタ再定義で吸収** 【蓋然】

- **Current** (全 8 es 変種): `A:Ella B:me E:regaló/dio D:un regalo C:hermoso/precioso/bonito/lindo/mu bonito`
- **Reference:** en `A:She E:gave B:me C:a beautiful D:gift`
- **Policy resolution:** en は **C=「a beautiful」(det+adj), D=「gift」(N)**, 全 8 es 変種は **D=「un regalo」(det+N), C=adj** と en に対して C/D が反転している。8 変種すべて同じ反転で **sibling 内整合性 = 100%** であるため、`feedback_cross_sibling_role_consistency.md` の duplicate-letter outlier には該当しない。en 参照を rewrite して 8 変種に合わせるのは scope creep。**Recommendation: 維持 + palette メタ documentation 更新** (palette role-letter は cross-sibling 観点で「兄弟内で一貫」が主、en との 1-to-1 mapping は副次)。
- **Decision:** **still-deferred → policy 文書化のみ**。`_policy_deferred.md` §#76-A の #65 項目に「Option B accepted: sibling-internal consistency is the primary criterion; cross-reference (en) inversion is acceptable when all siblings invert uniformly」を追記。
- **Edit:** `{id:65, lang:"_meta", op:"document", finding:"All 8 es variants invert C/D from en reference uniformly; sibling-internal consistency primary. Accept as-is. Policy: en-vs-es role-letter inversion is acceptable when 100% of sibling variants invert in the same direction; flag only when sibling divergence exists."}` 【要検討】

### 2. #11 es_cl 残存 outlier — `E:un libro D:nuevo` (5 兄弟と #11 #76 改修後 7 変種は `D:un nuevo E:libro`) 【確実】

- **Current:** es_cl `[C:Compré, E:un libro, D:nuevo, B:en la librería, F:ayer]`
- **Sibling** (改修後): es_eu/es_mx/es_co/es_pe/es_cu/es_an + es_ar (元から) → 全 7 変種で `D:un nuevo E:libro`
- **Problem:** #76 で es_eu/es_mx が `D:un nuevo E:libro` に揃えられたが、**es_cl は #76 提案リストに含まれず取り残された**。これは #76 finding #1 の sibling 分裂 (元 2 vs 7) を解消した過程で見落とされた残存。`feedback_priority_not_keep_reason.md` (sibling が分割すれば全変種揃える) に該当。
- **Proposed fix:** es_cl を `D:Compré (=C), D:un nuevo, E:libro` に揃える (pro-drop B.1 で A 欠落維持)。
- **Edit:** `{id:11, lang:"es_cl", op:"replace", segments:[["C","Compré"],["D","un nuevo"],["E","libro"],["B","en la librería"],["F","ayer"]], finding:"es_cl outlier remains with E:un libro D:nuevo; 7 sibling variants use D:un nuevo E:libro post-#76. Align with siblings; A pro-drop legitimate."}` 【確実】

### 3. #7 periphrastic future copula `va a estar` — 6 変種で C 単独融合、#21 と方針乖離 【蓋然】

- **Current:**
  - es_eu / es_mx: `C:será D:soleado` (synthetic future — D-split 不要)
  - es_ar / es_cl / es_co / es_pe: `C:va a estar D:soleado` — 1-letter C で auxiliar 融合
  - es_cu: `C:va a tar`, es_an: `C:va a ehtá` — 同
- **Reference:** en `C:will be D:sunny` (en も 1-letter C で auxiliar 含む)
- **Policy resolution:** #76 #21 (`voy a + inf`) は `E:voy a / D:cenar` に **2-letter split** が apply 済 (NGLE §16.2 perífrasis modal)。同根の `voy a + estar` を C 単独に潰すのは sibling 内 cross-cell policy として乖離。ただし、**en 参照が `C:will be` (auxiliary 含む) を 1-letter** で扱う palette 設計のため、#7 の C は単独でも en と整合的。
- **重要な差分:** #21 は **本動詞 (cenar)** が D に分離可能 — `ir a + V_lex` 構造。#7 は **コピュラ (estar)** が `va a` に直接続く — `ir a + V_cop`。コピュラの auxiliary 連鎖は **NGLE §23.9** で 1 つの perífrasis 単位として扱われる慣行があり、本 dataset の en も `C:will be` で同方針。
- **Decision:** **保留継続**。#21 (lexical verb) と #7 (copula) を分けるならば現状は OK。
- **Edit:** `{id:7, lang:"_meta", op:"document", finding:"Periphrastic future copula 'va a estar' kept as single C across 6 es variants; en 'will be' is also single C. Different from #21 (lex-verb 2-letter split) because copula+aux chain is a single perífrasis unit per NGLE §23.9. Acceptable. Policy: distinguish copula periphrasis (1-letter) from lexical-verb periphrasis (2-letter D:aux + V split)."}` 【要検討】

### 4. #54 `Hay que` (impersonal) vs `debemos` (1pl personal) の 4 vs 4 分裂 — 統一推奨 【確実】

- **Current:**
  - es_eu / es_mx / es_ar / es_co: `A:Nosotros D:debemos C:proteger B:el medio ambiente` (personal)
  - es_cl / es_pe / es_cu / es_an: `D:Hay que C:proteger/protegé B:el medio ambiente` (impersonal, A 欠落)
- **Reference:** ja「環境を守らなければならない」(主語不明示、解釈上 impersonal とも 1pl とも可)、en `A:We D:must C:protect B:the environment` (personal 1pl)
- **Policy resolution:** Memory `feedback_impersonal_modal_as_D.md` は `Il faut / Hay que / Bisogna` を D=impersonal に置くことが正当 (B.9) と明示。両形式が D に置かれており role-letter は OK だが、**sibling 4 vs 4 分裂は cross-sibling consistency 違反**。en 参照は **personal `must` (A:We 必須)** を採るので、en 整合性を優先するなら **8 変種を `D:debemos` (1pl personal) に統一** が最小コスト。逆に「環境を守るのは社会一般の責務」と解釈するなら impersonal だが、その場合 es_eu/es_mx などのスペイン公式メディアの慣用は `Tenemos que / Debemos` の 1pl 包括的呼びかけが標準 (NGLE §16.10.2)。
- **Decision:** **apply: 4 変種を `debemos` に統一** (en 整合 + RAE 慣用)。
- **Edit:** `{id:54, lang:"es_cl", op:"replace", segments:[["A","Nosotros"],["D","debemos"],["C","proteger"],["B","el medio ambiente"]], finding:"Align with 4 sibling variants (eu/mx/ar/co) and en reference; 1pl personal 'debemos' is RAE preference per NGLE §16.10.2 for collective social calls. Drop Hay que."}` 【確実】
- **Edit:** `{id:54, lang:"es_pe", op:"replace", segments:[["A","Nosotros"],["D","debemos"],["C","proteger"],["B","el medio ambiente"]], finding:"Same alignment."}` 【確実】
- **Edit:** `{id:54, lang:"es_cu", op:"replace", segments:[["A","Nosotros"],["D","debemos"],["C","protegé"],["B","el medio ambiente"]], finding:"Same alignment; preserve es_cu -r elision in infinitive (protegé)."}` 【確実】
- **Edit:** `{id:54, lang:"es_an", op:"replace", segments:[["A","Nozotro"],["D","debemo"],["C","protegé"],["B","er medio ambiente"]], finding:"Same alignment; preserve es_an seseo/aspiration (Nozotro, debemo, er) per #7 vocab territory."}` 【蓋然】 — es_an の音写は #7 (#76 territory) で再検討余地あり

### 5. #41 NP-internal F (libro) / C (interesante) 配分 — es_ar の `C` 中間挿入 outlier 【確実】

- **Current:**
  - es_eu/es_mx/es_co/es_cl: `D:un F:libro C:interesante` (sibling majority)
  - es_pe/es_cu/es_an: 同じく `D:un F:libro C:interesante`
  - **es_ar: `D:un C:interesante F:libro`** — F と C の順を入れ替え、形容詞前置
- **Reference:** en `D:an C:interesting F:book` (形容詞前置)
- **Policy resolution:** es_ar は en と同じ adj 前置だが、**7 兄弟変種は全て形容詞後置** (西語標準語順 NGLE §13.13)。es_ar が outlier。`feedback_cross_sibling_role_consistency.md`。Role-letter 配分 (C=adj, F=N head) は維持で良いが、segment 順は sibling 多数に揃える。
- **Decision:** **apply: es_ar を adj 後置に揃える** (語順は sibling consensus 優先)。
- **Edit:** `{id:41, lang:"es_ar", op:"replace", segments:[["A","Yo"],["B","ahora"],["E","estoy leyendo"],["D","un"],["F","libro"],["C","interesante"]], finding:"es_ar outlier in adj-N order; 7 sibling variants use D:un F:libro C:interesante (adj postposed per NGLE §13.13). Align with siblings."}` 【確実】

### 6. #49 B-letter 衝突 — `B:me` (clitic) vs `B:el camino` (object) — 3 変種が後者 【確実】

- **Current:**
  - es_eu / es_mx: `D:díga B:me E:cómo llegar F:al G:aeropuerto` (B=clitic me)
  - es_ar / es_cl / es_co: `D:decime/dígame E:cómo llegar/llego F:al G:aeropuerto` (B 欠落、clitic 動詞融合)
  - **es_pe / es_cu / es_an: `D:dígame/dime B:el camino F:al G:aeropuerto`** (B=「the way」目的語、E 欠落)
- **Reference:** en `D:tell B:me E:the way F:to G:the airport` — **B=me, E=the way** が en の palette 定義
- **Policy resolution:** en palette 定義に従えば **B=me (clitic), E=the way (path obj)** が正しい。
  - es_eu/es_mx は **B=me を独立** で en に整合 (E=「cómo llegar」が path 句に対応)
  - es_ar/es_cl/es_co は B 欠落で path を E に潰す
  - es_pe/es_cu/es_an は **B/E を取り違え** (B=el camino と E 欠落) — palette 役割の cross-sibling 衝突
- **Decision:** **apply: es_pe/es_cu/es_an の B/E を入れ替える** (B=clitic を融合・複合タグ化、E=el camino)。Memory `feedback_split_segments_like_reference.md` + `feedback_cross_sibling_role_consistency.md`。
- **Edit:** `{id:49, lang:"es_pe", op:"replace", segments:[["A","Por favor"],["B|D","dígame"],["E","el camino"],["F","al"],["G","aeropuerto"]], finding:"es_pe places B=el camino (object), conflicting with en B=me. Use B|D composite for dígame (=clitic +verb) per #13/#24 convention; E=el camino for the path."}` 【確実】
- **Edit:** `{id:49, lang:"es_cu", op:"replace", segments:[["A","Por favó"],["B|D","dime"],["E","el camino"],["F","pa'l"],["G","aeropuerto"]], finding:"Same B/E swap; B|D composite for dime."}` 【確実】
- **Edit:** `{id:49, lang:"es_an", op:"replace", segments:[["A","Por favó"],["B|D","dígame"],["E","el camino"],["F","ar"],["G","aeropuerto"]], finding:"Same B/E swap; B|D composite for dígame."}` 【確実】

### 7. #49 — es_ar / es_cl / es_co の clitic 融合 (#24 と同方針で B|D composite に揃える) 【確実】

- **Current:** es_ar `D:decime`, es_cl/es_co `D:dígame` — B 欠落
- **Policy:** #76 で同根 #24 が **B|D composite** (`B|D:muéstreme` 等) に統一済。本 #49 cell でも同じ慣行に揃える。
- **Edit:** `{id:49, lang:"es_ar", op:"replace", segments:[["A","Por favor"],["B|D","decime"],["E","cómo llego"],["F","al"],["G","aeropuerto"]], finding:"Align with #24 B|D composite convention applied in #76; clitic me visible in palette."}` 【確実】
- **Edit:** `{id:49, lang:"es_cl", op:"replace", segments:[["A","Por favor"],["B|D","dígame"],["E","cómo llegar"],["F","al"],["G","aeropuerto"]], finding:"Same B|D composite alignment."}` 【確実】
- **Edit:** `{id:49, lang:"es_co", op:"replace", segments:[["A","Por favor"],["B|D","dígame"],["E","cómo llegar"],["F","al"],["G","aeropuerto"]], finding:"Same B|D composite alignment."}` 【確実】

### 8. #55 es_an `me tomo` reflexive — 非隣接 B 重複の懸念で `_policy_deferred.md` 既出 【蓋然】

- **Current:** es_an `[D:Toh lo día, C:me tomo, E:doh, F:tasah de, B:café]`
- **Sibling:** 他 7 変種は **C:tomo / bebo** (non-reflexive)
- **Policy resolution:** `_policy_deferred.md` §#76-A #55 注: 「B|C 案は同セル内で B:café と非隣接 B 重複が発生するため不可」と既述。代替案として **(a) C 単独に潰したまま (現状)** or **(b) `me` を独立分節し B 以外の letter に置く** が考えられるが、**(b) は palette 拡張が必要** (#55 palette は A/B/C/D/E/F の 6 letter)。
- **Decision:** **still-deferred → 現状維持**。Bosque & Demonte §21.3.2 によれば `tomarse` の reflexive はアスペクト的 (= 飲み干す完了)、es_an 限定の dialectal 強調用法であり、`C:me tomo` 融合は許容範囲。`feedback_split_segments_like_reference.md` を厳格適用しても代替手段がない。
- **Edit:** `{id:55, lang:"_meta", op:"document", finding:"es_an reflexive me-tomo kept fused in C; B|C split blocked by non-adjacent B:café duplication; palette has no available letter for clitic me. Acceptable per Bosque & Demonte §21.3.2 (aspectual telic reflexive). Policy: when palette letters are exhausted, single-letter fusion of clitic+verb is acceptable for dialect-specific reflexive."}` 【要検討】

### 9. #67 light-verb `hago ejercicio` — en も 1-letter で整合 【確実】

- **Current** (7 変種): `D:hago ejercicio` (es_eu のみ `D:entreno`)
- **Reference:** en `D:exercise` (1-letter)
- **Policy resolution:** en も 1 動詞 `exercise` で D 単独、`hago ejercicio` の light-verb 構造 (hacer=軽動詞 + ejercicio=N) を D に融合するのは en 整合的。Memory `feedback_split_segments_like_reference.md` は「reference より細かく分割しない」原則と読み替え可能。本 dataset の他 light-verb 例 (e.g., #66 `tener miedo` 等) でも 1-letter D 慣行が確認できる。
- **Decision:** **apply: documentation で resolution 確定** (現状維持で問題なし、policy 明示)。
- **Edit:** `{id:67, lang:"_meta", op:"document", finding:"Light-verb 'hago ejercicio' fused into single D across 7 es variants; en 'exercise' is also single D. Acceptable. Policy: light-verb constructions (hacer/tener/dar + N) follow the reference's chunking level; do not split unless en splits."}` 【確実 — resolution applied as policy】

### 10. #76 条件節位置 — 5 主節先行 vs 3 従属節先行 (ja 整合は後者) 【蓋然】

- **Current:**
  - es_eu / es_mx / es_ar / es_cl / es_co: `D:Me siento feliz C:cuando B:escucho A:música` (主節先行、en 寄り)
  - es_pe / es_cu / es_an: `C:Cuando B:ehcucho A:música D:me siento felí` (従属節先行、ja 整合)
- **Reference:** ja「音楽を聴くと幸せな気持ちになる」(従属節先行)、en `E:I D:feel happy C:when E:I B:listen to A:music` (主節先行)
- **Policy resolution:** ja が原文、en は反転。スペイン語は **語順自由** で両方 grammatical。Memory `feedback_segment_splitting.md` の C.1 (時間副詞の位置は判定保留) と類似だが、本件は副詞節。**5 vs 3 の分裂はそれぞれの方言の傾向を反映するわけではなく** (es_pe/es_cu/es_an はカリブ系で文頭フォーカス傾向はあるが、es_cl/es_co も同じく Latin Am で主節先行)、純粋に data 作成時の選択。
- **Decision:** **still-deferred → ja 整合に揃えるか en 整合に揃えるか owner 判断**。本ラウンドでも resolution 困難。
- **Edit:** `{id:76, lang:"_meta", op:"document", finding:"5 es variants front main clause D (en-aligned); 3 (pe/cu/an) front subordinate C-clause (ja-aligned). Both grammatical per Spanish free word order. Policy: when source ja and reference en differ in clause ordering, accept either as legitimate dialect choice; cross-sibling divergence per cell is owner-determined and not a defect."}` 【要検討】

### 11. #81 `dolor de cabeza` (tener-NP) vs `me duele la cabeza` (psych verb) — palette B/D 全変種欠落 【蓋然】

- **Current:**
  - es_eu/es_mx/es_ar/es_cl/es_co: `A:Yo F:tengo/traigo E:dolor de cabeza C:hoy` (tener-NP, B/D 欠落)
  - es_pe/es_cu/es_an: `C:Hoy F:me duele E:la cabeza` (doler psych verb, A/B/D 欠落)
- **Reference:** en `A:I F:have E:a headache C:today` (en も B/D 欠落!)
- **Policy resolution:** **en 自身が B と D を palette から欠落させており、palette ABCDEF が #81 で過剰**。役割文字 B/D が何を指すか定義不能。これは個別の方言問題ではなく **palette メタデータの設計上の余剰**。Memory `_policy_deferred.md` §#76-A の通り。
- **5 vs 3 の構文分裂** (tener-NP vs doler) は #83-A ja/ko psych-verb policy と類似で、**自然言語形保持** (Option A) が `_policy_deferred.md` §#83-A の推奨に合致。
- **Decision:** **apply: palette メタ更新 (B/D 削除を提案)**。構文分裂は容認 (#83-A precedent)。
- **Edit:** `{id:81, lang:"_meta", op:"document", finding:"#81 palette ABCDEF has B and D defined but en + all 8 es variants omit them; tener-NP vs doler construction split is dialectal natural form (#83-A precedent). Policy: trim #81 palette to AFEC (drop B, D); accept tener-NP/doler split as legitimate dialect typological choice."}` 【蓋然】

### 12. #16 do-support `D:does` 欠落 — B.3 で正当、palette E 余剰 【確実】

- **Current** (全 8 es 変種): `A:A qué hora C:empieza B:la película/peli` (D, E 欠落)
- **Reference:** en `A:What time D:does B:the movie C:start` (E 欠落 = en も)
- **Policy resolution:** スペイン語に do-support なし → **D=does 欠落は B.3 (zero do-support) で正当**、全 8 変種統一しているので cross-sibling 整合性 OK。**E は en も欠落** = palette 余剰の典型。
- **Decision:** **apply: palette メタ更新 (E 削除提案)**、cell 本体は現状維持。
- **Edit:** `{id:16, lang:"_meta", op:"document", finding:"#16 D=does legitimately absent in all 8 es variants per B.3 (Spanish has no do-support); E is also absent from en. Trim palette to ABCD. Cell-level chunking is correct."}` 【確実 — palette 整理のみ】

### 13. #89 `B:puedo / D:encontrar` の `modal=B / verb=D` 配分 — 全 8 変種共通だが `feedback_modal_verb_not_subject.md` 抵触 【蓋然】

- **Current** (全 8 es 変種): `C:No B:puedo/pueo D:encontrar/encontrá E:la G:contraseña F:de(l) Wi-Fi`
- **Reference:** en `A:I B:can C:'t D:find E:the F:Wi-Fi G:password`
- **Policy resolution:** en は **B=can (modal)** を含む構造で、es 兄弟 8 変種は **B=puedo (modal aux)** を en と同じ役割文字 B に統一 — **en と完全整合**。Memory `feedback_modal_verb_not_subject.md` は「modal は D が一般」と述べるが、これは **A=主語と modal を取り違えるな** の趣旨 (modal は A ではない)。**B-letter に modal を置くこと自体は禁止していない**: en 参照が #89 で B=「can」と定義しているなら、es 兄弟がそれに従うのは sibling 整合的。
- **Decision:** **apply: documentation で resolution 確定** (現状維持、policy 明確化)。
- **Edit:** `{id:89, lang:"_meta", op:"document", finding:"All 8 es variants align B=modal puedo, D=verb encontrar with en B=can, D=find. feedback_modal_verb_not_subject.md prohibits modal-AS-subject (A), not modal-as-B; en defines B=modal in this cell. Cross-sibling consistency: 100%. Acceptable. Policy: when reference (en) places modal in B, sibling variants follow suit; the 'modal=D' default applies only when reference is silent."}` 【確実 — policy clarification】

### 14. cross-cutting: `_policy_deferred.md` §#76-A 11 件の整理 — closed-resolution proposal 【確実】

- **Current state:** `_policy_deferred.md` §#76-A は 11 cells を列挙 (#65, #7, #54, #41, #49, #55, #67, #76, #81, #16, #89)。本ラウンド #98 で resolution:
  - **applied (5 cells, 12 edits)**: #11 es_cl (#76 leftover, 1 edit) / #54 (4 edits) / #41 es_ar (1 edit) / #49 (6 edits, including B/E swap + B|D composite alignment)
  - **policy-clarified, no edit (5 cells)**: #65 (sibling-internal consistency primary) / #7 (copula vs lex-verb perífrasis distinction) / #67 (light-verb follows reference) / #16 (palette trim ABCD) / #89 (modal=B when reference defines B=modal)
  - **palette-trim proposed (1 cell)**: #81 (drop B/D, keep AFEC)
  - **still-deferred (2 cells)**: #55 es_an (palette letters exhausted) / #76 (ja vs en ordering)
- **Decision:** `_policy_deferred.md` §#76-A を 11 → 2 entries に縮約。
- **Edit:** `{id:0, lang:"_meta", op:"document", finding:"Review #98 reduces _policy_deferred.md §#76-A from 11 to 2 still-deferred cells: #55 es_an me-tomo (palette letters exhausted) and #76 ja/en clause ordering. Other 9 cells resolved: 4 via cell edits (#11 es_cl, #41 es_ar, #54 4-variants, #49 6-variants), 5 via policy clarification (#65, #7, #67, #16, #89), 1 via palette trim proposal (#81)."}` 【確実】

---

## 集計

- **対象**: `/home/jounlai/langmap/langmap_reviews/98_open.md`
- **issue 件数**: **14 件** (確実 9、蓋然 3、要検討 2)
- **edit 件数 (cell)**: **12 edits** (#11 ×1, #41 ×1, #49 ×6, #54 ×4)
- **edit 件数 (palette trim 提案)**: **2 edits** (#16 → ABCD, #81 → AFEC)
- **policy clarification (`_meta` document)**: **6 edits** (#7, #16, #65, #67, #76, #81, #89)
- **`_policy_deferred.md` §#76-A 整理**: **11 → 2 entries**
- **still-deferred (cell-level)**: **2** (#55 es_an reflexive、#76 clause ordering)
- **主たる resolution カテゴリ**:
  1. **sibling 内多数派整合** (#11 es_cl / #41 es_ar / #49 B/E swap) — `feedback_priority_not_keep_reason.md`
  2. **#76 適用済 convention の cross-cell 延伸** (#49 B|D composite を #24 と同方針で 3 変種に追加適用) — `feedback_split_segments_like_reference.md`
  3. **en 整合性優先で 4/4 分裂を解消** (#54 `debemos` 統一) — NGLE §16.10.2
  4. **palette role-letter 定義の明確化** (#65 sibling-internal consistency primary, #67 light-verb follows reference, #89 modal=B when ref defines B=modal) — `feedback_cross_sibling_role_consistency.md` の運用基準確定
  5. **palette 余剰の trim** (#16 → ABCD, #81 → AFEC)
- **#76 deferred items の最終ステータス:**
  | # | 元 finding | resolution |
  |---|---|---|
  | #65 | NP C/D 反転 (8 変種共通) | policy: sibling-internal consistency primary; accept as-is |
  | #7 | periphrastic copula 1-letter | policy: copula perífrasis is 1-letter (NGLE §23.9); distinct from #21 lex-verb |
  | #54 | hay que vs debemos (4/4) | **apply: unify to `debemos`** (4 edits to cl/pe/cu/an) |
  | #41 | NP-internal D/F/C order | **apply: es_ar align with adj-postposed siblings** (1 edit) |
  | #49 | B=me vs B=el camino conflict | **apply: B=clitic (B|D composite), E=el camino** (6 edits) |
  | #55 | es_an `me tomo` reflexive | **still-deferred**: palette letters exhausted |
  | #67 | light-verb `hago ejercicio` | policy: light-verb follows reference chunking level |
  | #76 | clause ordering (5/3) | **still-deferred**: ja vs en alignment owner decision |
  | #81 | `dolor de cabeza` vs `me duele la cabeza` | palette trim ABCDEF → AFEC (drop B, D) |
  | #16 | D=does 欠落 | palette trim ABCDE → ABCD (drop E); B.3 covers D |
  | #89 | B=modal, D=verb (all 8) | policy: modal=B when reference defines B=modal |
- **`_policy_deferred.md` §#76-A 更新提案**: 11 entries → 2 entries (#55 es_an, #76 clause order)。

---

## Dev response — round 1 (2026-06-04)

担当 dev (@es_dev_resolver) より。data.js は READ-ONLY で参照のみ、12 cell edits を `/tmp/lm_edits_98.json` に apply2 形式で構築済。所感と finding 別の対応方針を以下に列挙する。

### 受領した edit ファイル
- **path**: `/tmp/lm_edits_98.json`
- **edit 件数**: 12 (cell-level `replace` のみ)
- **対象 cell**: #11 (1) / #41 (1) / #49 (6) / #54 (4)
- **all entries**: `allowTextChange:true` (es_cl/es_pe/es_cu/es_an の方言音写・正書法変更を含むため)

### finding 別対応

| # | finding | dev 対応 | 備考 |
|---|---------|----------|------|
| #65 | NP C/D 反転 sibling 100% 一致 | **edit なし**、policy 文書化を受領 | sibling-internal consistency primary を承認 |
| #11 | es_cl `E:un libro D:nuevo` 残存 outlier | **1 edit** apply | `feedback_priority_not_keep_reason.md` に合致 |
| #7 | periphrastic copula 1-letter C | **edit なし** | copula vs lex-verb perífrasis 区別を承認 (NGLE §23.9) |
| #54 | hay que vs debemos 4/4 分裂 | **4 edits** apply (cl/pe/cu/an → debemos) | NGLE §16.10.2 + en 整合を採用、方言音写を保全 |
| #41 | es_ar adj-preposed outlier | **1 edit** apply | adj-postposed 7 兄弟に整合 (NGLE §13.13) |
| #49 | B=me vs B=el camino + clitic 融合 | **6 edits** apply (ar/cl/co B|D + pe/cu/an B/E swap & B|D) | #24 B|D composite convention を cross-cell 延伸 |
| #55 | es_an `me tomo` reflexive | **edit なし** | palette letters exhausted、Bosque & Demonte §21.3.2 で容認 |
| #67 | light-verb `hago ejercicio` | **edit なし** | en 1-letter D に整合、policy 明示 |
| #76 | 条件節先行 5/3 分裂 | **edit なし** | ja vs en 整合の owner 判断、deferred 継続 |
| #81 | tener-NP vs doler palette B/D 欠落 | **edit なし** (palette-trim 提案受領) | palette ABCDEF → AFEC は dataset-meta タスクで別途処理 |
| #16 | D=does 欠落、E 余剰 | **edit なし** (palette-trim 提案受領) | palette ABCDE → ABCD は dataset-meta タスクで別途処理 |
| #89 | B=modal 全 8 統一 | **edit なし** | `feedback_modal_verb_not_subject.md` は modal=A 禁止であり B 配置は en 整合下で許容、policy 明示を承認 |
| #14 | `_policy_deferred.md` §#76-A 11→2 縮約 | **document only** | 縮約案承認、policy 文書更新は apply 後に別 PR で処理 |

### palette-trim 提案 (#16, #81) の取り扱い
レビュアー提案の通り、palette メタ (`_policy_deferred.md` / palette 定義側) の編集はセル本体 edit の scope 外と判断、本 round では JSON に含めず別タスクで扱う。`_meta` op:`document` 系 finding も同様に JSON 化を見送り、本 dev response に記録して owner レビューに委ねる。

### policy 文書 reduction note (`_policy_deferred.md` §#76-A 11 → 2)
本 round の cell edits が apply 済となった時点で `_policy_deferred.md` §#76-A は次の 2 entries のみを残す:
1. **#55 es_an `me tomo`** — palette 文字枯渇、Bosque & Demonte §21.3.2 で aspectual telic reflexive として容認
2. **#76 条件節先行** — ja-aligned vs en-aligned の owner 判断

他 9 cells の解消ステータスは `## 集計` の表 (#65/#7/#54/#41/#49/#67/#76/#81/#16/#89) に一致。

### 注意点 / 質問
- **#54 es_an** の `Nozotro/debemo/er` は es_an seseo/aspiration 表記を維持したが、レビュアーが【蓋然】を付している通り #7 (#76 territory) で再検討余地あり。本 round では一旦本綴りで apply。
- **#49 es_cu** の `pa'l` (F slot) は現状 cell の表記を保持。他 cell との一貫性確認は別 round で。
- **#49 B|D composite** は palette letter set に既存 B|D エントリがあることを前提とする。なければ palette メタ追加が先行タスクとなる。

### 集計
- **適用 edit**: 12 / 12 (全て JSON に転載済)
- **policy 受領 (edit なし)**: 6 cells (#65/#7/#67/#16/#89/#55) + #76 deferred + #14 documentation
- **JSON path**: `/tmp/lm_edits_98.json`
