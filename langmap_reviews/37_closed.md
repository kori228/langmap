# LangMap データレビュー #37 — Romance cross-sibling chunking auditor (横断的セグメント整合性)

## レビュアー自己紹介 (ペルソナ)

私は **杉浦千鶴 (Sugiura Chizuru)**（ハンドル: @romance_audit）、東京外国語大学・コーパス言語学修士、現在は欧州諸ロマンス語の対訳コーパス整合性検査の業務に従事しております。前任のレビュアー #06–#09 はそれぞれガロ・ロマンス／イベロ・ロマンス／イタロ・ロマンス／東ロマンスを縦割りで精査されましたが、本ラウンドは「**同一文 × 兄弟方言間の役割文字 (role-letter) 一致性**」というメタ軸で全100文を横断します。

具体的には、ある文で fr / fr_af / fr_be / fr_ch / fr_qc が同じセグメント分割を共有しているか、また Spanish 8 方言・Portuguese 2 方言が同じパターンを示しているか、さらに it / ca / oc / sc / rm / ro / la / glg を含めた**横断比較**で、ある変種が前置詞＋指示詞を 1 セグ複合 (A|D) にしているのに兄弟が分割 (A + D) している、といった**整合性の崩れ**を検出します。

これは #43 の "B:La nourriture de A|D:ce" → 3分割、#77 の "D:par le B:résultat" → "D:par B:le résultat"、#84 の "D:essaie de" → "D:essaie" 統一、といった既出 fix のパターンに乗っ取る方針です。再フラグはしません。

## 検証方法

`node -e "..."` で `data.js` 全 100 文の Romance 23 変種 (fr/fr_af/fr_be/fr_ch/fr_qc, es×8, pt×2, it, ca, oc, sc, rm, la, ro) のセグメント列をダンプし、(1) 同一ファミリー内で役割文字シーケンスが揃っているか、(2) `A|D` 型の複合をもつ変種と分割している変種が同一文に共存していないか、(3) 形容詞・指示詞・冠詞・前置詞融合の扱いが恣意的に揺れていないか、をクロス集計しました。read-only。

## 指摘事項 (Issues found) — 18件 actionable（うち番号 #10, #12, #13, #14, #23, #24 は精査の結果 false-positive / 既知許容として記録のみ、計 25 セクション）

### 1. #84 [es_eu/es_mx/es_ar/es_co/es_pe/es_cl/es_cu] — "E:pasada D:la semana" の語順が非文
**Current:**
- [es_eu/es_mx/es_co/es_pe/es_cl/es_cu] A:「Ella」… B:… **E:「pasada」 D:「la semana」**
- [es_ar] A:「Ella」 **E:「pasada」 D:「la semana」** B|C:「se resfrió」

**Cross reference:** [es_an] のみ **D:「la semana」 E:「pasá」**（名詞＋後置形容詞）と正しく修正済。fr/fr_ch も #06 round 1 で同じ問題を修正済（"dernière → la semaine" 順 → "la semaine → dernière"）。pt_eu/pt_br/it/ca/oc/sc/rm/ro はすべて D:名詞 → E:形容詞 の順。
**Problem:** 読み上げ順が "pasada la semana"（前置形容詞）になり、スペイン語標準では非文。"la semana pasada" が唯一規範。#84 fr の既出 fix と完全に同型。Romance review #07 が es 全方言の語彙を覆ったにもかかわらず、語順を見落としている。
**Proposed fix:** D を E の前に配置：
- [es_eu/es_mx/es_co/es_cu] A:「Ella」 … D:「la semana」 E:「pasada」
- [es_ar] A:「Ella」 B|C:「se resfrió」 D:「la semana」 E:「pasada」
- [es_pe/es_cl] A:「Ella」 B|C:「se resfrió」 D:「la semana」 E:「pasada」

**確信度:** 【確実】

---

### 2. #35 [ca/oc/sc/rm] — "D:mes C:el passat" の語順が非文（冠詞が形容詞側）
**Current:**
- [ca] A:「El meu」 E:「germà gran」 B:「es va casar」 **D:「mes」 C:「el passat」**
- [oc] A:「Mon」 E:「fraire ainat」 B:「s'es maridat」 **D:「mes」 C:「lo passat」**
- [sc] A|E:「Su frade meu mannore」 B:「s'est cojuadu」 **D:「mese」 C:「su passadu」**
- [rm] A:「Mieu」 E:「frar pli vegl」 B:「s'ha maridai」 **D:「mais」 C:「il passà」**

**Cross reference:** 全ての他 Romance（es×8, pt×2, it, fr, fr_ch）は **D:「el mes / il mese / le mois / o mês」 C:「pasado / scorso / dernier / passado」**（冠詞＋名詞 D ＋ 形容詞 C）と整合。oc/ca/rm/sc は冠詞 (el / lo / il / su) を形容詞側 (C) に括っており、構造として "mes el passat" となり非文。
**Problem:** 名詞句 "el mes pasado" の冠詞 el は名詞 mes (=D) に属し、形容詞 passat (=C) には属さない。#06 round 1 で同種の "B una D tradición" → "C una tradició B japonesa" 統合と同じ構造修正が必要。
**Proposed fix:**
- [ca] D:「el mes」 C:「passat」
- [oc] D:「lo mes」 C:「passat」
- [sc] D:「su mese」 C:「passadu」
- [rm] D:「il mais」 C:「passà」

**確信度:** 【確実】

---

### 3. #53 [es_ar/es_pe/es_cl/es_cu/es_an] — "A|D:del jardín" 複合 vs 兄弟の "D:en A:el jardín" 分割
**Current:**
- [es_eu/es_mx/es_co] B:「Las flores」 **D:「en」 A:「el jardín」** E:「están」 C:「floreciendo」
- [es_ar/es_pe/es_cl/es_cu/es_an] B:「Las flores」 **A|D:「del jardín」** E:「están」 C:「floreciendo」

**Cross reference:** Cross-Romance を見ると、pt/it/ca/sc/rm/la/ro はすべて **D:前置詞＋冠詞 A:名詞** で 2 分割。fr 系も D:dans A:le jardin。es 内部が 3対5 で割れていて、原因は "de+el → del" の前置詞融合を機械的に複合 A|D で表現してしまっていること。
**Problem:** Spanish の "del" は de+el の融合表記だが、ほかのロマンス語（fr "du" = de+le、it "del/nel"、pt "do"、ro "din"）はすべて分割しているため、整合性のため es も "de" を D、"el jardín" を A に分けるのが妥当。少なくとも es 兄弟間で 3対5 に割れているのは陣形として不可。
**Proposed fix:** es_ar/es_pe/es_cl/es_cu/es_an を **D:「de」 A:「el jardín」**（または融合を残しつつ全 es を A|D に統一）。前者を推奨。

**確信度:** 【確実】

---

### 4. #50 [es_eu/es_mx/es_ar/es_co/es_cl] — "A|E:A mi perro" 複合 vs [es_pe/es_cu/es_an] の "E:Mi A:perro" 分割
**Current:**
- [es_eu/es_mx/es_ar/es_co/es_cl] **A|E:「A mi perro」** D:「le gusta」 C:…
- [es_pe/es_cu/es_an] **E:「Mi」 A:「perro」** D:「le gusta」 C:…

**Cross reference:** fr系 / pt / it / ca / oc / rm すべて **E:所有形容詞 A:名詞** の 2 分割。es 内部が 5対3 で割れている。
**Problem:** "A mi perro" の格標識 "A" 自体を抜き出して D 側に統合するという第三の選択肢もあるが、最も自然なのは E（所有形容詞 mi）と A（名詞 perro）の分離。少なくとも es 内部で揃えるべき。es_pe/es_cu/es_an のパターンが他 Romance に近い。
**Proposed fix:** es_eu/es_mx/es_ar/es_co/es_cl を **E:「A mi」 A:「perro」**（または E:「Mi」 A:「perro」 で格標識 "A" を D 側へ）に統一。

**確信度:** 【蓋然】

---

### 5. #3 [es_pe/es_cl] — "C:tomo B:desayuno" 分割 vs 兄弟の "B|C:desayuno" 融合
**Current:**
- [es_eu/es_mx/es_ar/es_co/es_cu/es_an] A:「Yo」 **B|C:「desayuno」** D:… E:…
- [es_pe] A:「Yo」 **C:「tomo」 B:「desayuno」** D:… E:…
- [es_cl] **C:「Tomo」 B:「desayuno」** D:… E:…

**Cross reference:** ca も同じく **B|C:「esmorzo」**。fr_be も **B|C:「déjeune」**。一方 it/pt/oc/sc/rm/ro は **C:動詞 B:名詞** と 2 分割（"prendo colazione" / "tomo o pequeno-almoço" / "manjí lo dejunar" 等）。
**Problem:** "desayunar" は語彙化された自他動詞で目的語不要のため B|C 融合は意味的に妥当だが、es_pe/es_cl は別途 "tomo desayuno"（動詞＋目的語）と分けて表現しており、これは文法的に別の構文（軽動詞 tomar + 名詞 desayuno）。同じ family で異なる構文を採用するなら chunking も別形になる方が一貫性が出る（既に出ているが本ラウンドの注意点として）。
**Proposed fix:** es_pe/es_cl の分割は許容（語法が違うため）。むしろ es_eu/es_mx/es_ar/es_co/es_cu/es_an の B|C を維持しつつ、cross-family レベルで pt/it/oc/sc/rm が分割 (`C:tomo / faccio / manjí / màndigu / mangel + B:desayuno / colazione / dejunar / colatzione / ensolver`) しているのと方向性を揃えるなら "tomar / hacer / prendere" 系を採用する選択もあり得る。**現状維持または cross-family の動詞構文へ統一**を提案。

**確信度:** 【要検討】

---

### 6. #48 [fr_af/fr_be] — "D:veux regarder/voir C:ce B|E:film(-là)" 複合 vs 兄弟の "D:veux C:regarder E:ce B:film(-là)" 分割
**Current:**
- [fr/fr_ch/fr_qc] A:「Je」 **D:「veux」 C:「regarder」 E:「ce」 B:「film(-là)」**
- [fr_af] A:「Je」 **D:「veux regarder」 C:「ce」 B|E:「film-là」**
- [fr_be] A:「Je」 **D:「veux voir」 C:「ce」 B|E:「film」**

**Cross reference:** 全 es / pt / it / ca / oc / sc / rm / ro は **D:modal C:infinitive E:demonstrative B:noun** の 4 分割。fr/fr_ch/fr_qc も整合。fr_af/fr_be だけが (1) modal+infinitive を D に融合、(2) E:demonstrative と B:noun を B|E 複合化、という二重の差異。
**Problem:** #83 の "D:essaie de" → "D:essaie" 統一と同型のオーナー方針「迷ったら分割」。さらに E:demonstrative＋B:noun の複合は他 Romance すべて分割なので明白に外れている。
**Proposed fix:**
- [fr_af] A:「Je」 D:「veux」 C:「regarder」 E:「ce」 B:「film-là」
- [fr_be] A:「Je」 D:「veux」 C:「voir」 E:「ce」 B:「film」

**確信度:** 【確実】

---

### 7. #43 [pt_br] — "A|D:desse restaurante" 複合 vs 全 Romance の "A:de(prep) D:este E:restaurante" 分割
**Current:**
- [pt_eu] B:「A comida」 **A:「deste」** E:「restaurante」 C:「é deliciosa」
- [pt_br] B:「A comida」 **A|D:「desse」** E:「restaurante」 C:「é deliciosa」

**Cross reference:** pt_eu は **A:「deste」** で D の役割がなく、すでに de+este が 1 セグだが、A 単独でラベル化。pt_br は同じ "desse" を **A|D** 複合で表現。同じ family で同じ語形が違うラベルを持つのは明らかな不一致。さらに他の全 Romance（fr系 A:de+D:ce+E:restaurant、es系 A:de+D:este+E:restaurante、it A:di+D:questo+E:ristorante、ca/oc/sc/rm 等もすべて A+D+E の 3 分割）と比べ、pt のみ前置詞＋指示詞融合が独自処理。
**Problem:** pt_eu / pt_br 間でラベル不一致。さらに #43 では既に fr_af/fr_be で同パターン "B:La nourriture de A|D:ce" を 3 分割 (B:La nourriture A:de D:ce) に統一済み。同じ修正を pt にも適用すべき。
**Proposed fix:**
- [pt_eu] B:「A comida」 A:「de」 D:「este」 E:「restaurante」 C:「é deliciosa」
- [pt_br] B:「A comida」 A:「de」 D:「esse」 E:「restaurante」 C:「é deliciosa」

（前置詞 "d" を分離した A:「de」 D:「este」 と表記。または最低限 pt_br を pt_eu の A:「desse」/A:「deste」 単独ラベルに揃える。）
**確信度:** 【確実】

---

### 8. #38 [pt_eu/pt_br/la] — "A|D:daqui" 複合 vs 全 Romance の "A:de D:aquí/ici" 分割
**Current:**
- [pt_eu/pt_br] B:「O pôr do sol」 **A|D:「daqui」** C:「é lindo」
- [la] **A|D:「Hinc」** B:「solis occasus」 C:「pulcher est」
- 他: [fr/fr_af/...] A:「d'」 D:「ici」 / [es系] A:「desde」 D:「aquí/acá」 / [it] A:「‌da」 D:「qui」 / [ca] A:「des d'」 D:「aquí」 / [oc] A:「d'」 D:「aicí」 / [sc] A:「dae」 D:「inoghe」 / [rm] A:「dad」 D:「qua」 / [ro] A:「de」 D:「aici」

**Cross reference:** pt の "daqui" (de+aqui) は語法上の融合形だが、一方の la "Hinc" は本来単一語であり等価ではない。さらに他 Romance はすべて A:前置詞 D:指示副詞 と分けている。
**Problem:** la は単一語なので A|D の正当化は強い。pt は de+aqui の融合形 (synthetic) で意味は分解可能。クロスファミリー一貫性のため、pt は A:「de」 D:「aqui」 の分割が望ましい（標準正書法ではあるが、langmap の方針上は分解優先）。
**Proposed fix:**
- [pt_eu/pt_br] A:「de」 D:「aqui」（もしくは pt の融合は許容として残す場合は他 Romance との比較注として記録）
- [la] **「Hinc」は本来 1 語のため A|D 維持で可**

**確信度:** 【蓋然】

---

### 9. #46 [es×8/pt_eu/pt_br/la] — "E|H:hablé/falei" 複合 vs [fr系/it/ca/oc/sc/rm/ro] の "E:auxiliary H:participle" 分割
**Current:**
- [fr系] A:「J'」 **E:「ai」 H:「parlé」** F:… B:… C:… D:…
- [it] A:「Io」 **E:「ho」 H:「parlato」** F:… B:… C:… D:…
- [ca] A:「Jo」 **E:「vaig」 H:「parlar」** …
- [oc/rm/ro] 同様に E:助動詞 H:不定詞/過去分詞 と分割
- [es×8] A:「Yo」 **E|H:「hablé」** F:…（単純過去なので合成）
- [pt_eu/pt_br] A:「Eu」 **E|H:「falei」** F:…
- [la] A:「Ego」… **E|H:「collocutus sum」**

**Cross reference:** これは複合過去 vs 単純過去の文法差なので、es の "hablé" や pt の "falei" は形態的に単形であり E|H の融合は正当。la "collocutus sum" は分離可能（auxiliary "sum" + participle "collocutus"）なので E:「sum」 H:「collocutus」 の 2 分割が望ましい。**la のみフラグ対象**。
**Problem:** la は明白に 2 形態素であり E|H 複合は語順分解にも反する。Cicero 風の語順 "collocutus sum" は分離可。
**Proposed fix:** [la] H:「collocutus」 E:「sum」（または既存の E|H を維持するなら他 la 文との並びをチェック）
**確信度:** 【蓋然】（romance #08 とは別カテゴリ）

---

### 10. #52 [es×8/pt×2/la] — "C|H:perdí" 複合 vs [fr系/it/ca/oc/sc/rm/ro] の "H:auxiliary C:participle" 分割
**Current:** 同 #9 と同型パターン。es / pt は単純過去のため C|H 融合自然。la は **C|H:「amisi」** だが amisi も 1 形態素なので融合は妥当。問題なし。**スキップ**。

---

### 11. #69 [es×8/pt_eu/pt_br/la] — "D|E:escribió/escreveu" 複合 vs 他言語の "D:participle E:auxiliary" 分割
**Current:**
- [fr系] **E:「a」 D:「écrit」** F:… G:… B:… H:… C:…
- [it] **E:「ha」 D:「scritto」** …
- [ca] **E:「va」 D:「escriure」** …
- [es×8] **D|E:「escribió/le escribió/les escribió」** …
- [pt_eu/pt_br] **D|E:「escreveu」** …
- [la] **D|E:「scripsit」** … （単形なので妥当）

**Cross reference:** es / pt は単純過去で形態素融合のため D|E は正当。la も単形。スキップ。

---

### 12. #69 [ro] — 役割 F (不定冠詞 una) が脱落、B「scrisoare」が F なしで直接出現
**Current:**
- [ro] A:「El」 E:「a」 D:「scris」 **F:「o」 B:「scrisoare」 G:「lungă」** H:「para」 C:「părinților săi」
- 他 Romance: F:「une / una / um」 G:「longue / larga / longa」 B:「lettre / carta / letra」

**Cross reference:** ro はちゃんと F「o」 を持っており問題なし（"o" は不定冠詞）。**誤フラグ取消**。

---

### 13. #69 [fr系/it/oc/rm] — "G:longue B:lettre" (前置形容詞) vs [es×8/ca/sc/ro] "B:carta G:larga" (後置形容詞)
**Current:**
- [fr系] F:「une」 G:「longue」 B:「lettre」 (前置)
- [it] F:「una」 G:「lunga」 B:「lettera」 (前置)
- [oc] F:「una」 G:「longa」 B:「letra」 (前置)
- [pt_eu] F:「uma」 G:「longa」 B:「carta」 (前置)
- [rm] F:「ina」 G:「lunga」 B:「brev」 (前置)
- [es×8] F:「una」 B:「carta」 G:「larga」 (後置)
- [pt_br] F:「uma」 B:「carta」 G:「longa」 (後置)
- [ca] F:「una」 B:「carta」 G:「llarga」 (後置)
- [sc] F:「una」 B:「lìtera」 G:「longa」 (後置)
- [ro] F:「o」 B:「scrisoare」 G:「lungă」 (後置)

**Cross reference:** これは Romance 語族内での形容詞位置の自然な揺れ（"long letter" は前置・後置どちらも可、特に文体差）。pt が pt_eu/pt_br で割れているのは文体差。Spanish 諸方言が一様に後置を選ぶのは規範的。**chunking 上は同型（F-B-G or F-G-B の入れ替えのみ）で問題なし**。スキップ。

---

### 14. #91 [fr_af] — "D:c'est" vs [fr/fr_be/fr_ch] "D:est"
**Current:**
- [fr_af] A:「Le hanami」 **D:「c'est」** C:「une tradition」 B:「japonaise」
- [fr_qc] A:「L'observation des cerisiers en fleur」 **D:「c'est」** C:… B:…
- [fr/fr_be/fr_ch] **D:「est」** （主語提示型ではない）

**Cross reference:** fr_qc は会話的 "c'est" を使うが、A 句が長いので natural。fr_af の "c'est" は A が "Le hanami" と短く、普通は **est** で十分。Cross-sibling chunking issue ではなく語選択の問題。スキップ。

---

### 15. #33 [fr_af/fr_be/ca/oc/sc/rm] — "A:La chambre de l'hôtel" 1セグ複合 vs [fr/fr_ch/fr_qc/es系/pt系/it] の "E:La chambre A:d'hôtel" 2分割
**Current:**
- [fr/fr_ch/fr_qc] **E:「La chambre」 A:「d'hôtel」** B:「était」 C:「très」 D:「propre」
- [fr_af/fr_be] **A:「La chambre de l'hôtel」** B:「était」 …
- [es_eu/es_mx/es_ar/es_co] **E:「La habitación / El cuarto」 A:「del hotel」** B:「estaba」 …
- [es_pe/es_cu] **A:「El cuarto」 B:「del hotel」 C:「(es)taba」 D:…** （E 役なし）
- [es_cl] **A:「La pieza del hotel」** B:「estaba」 … （1セグ複合）
- [es_an] **A:「La habitación」 B:「der hotel」 C:「ehtaba」 D:…**
- [pt_eu/pt_br/it] **E:「O quarto / La stanza」 A:「do hotel / dell'hotel」** B:… C:… D:…
- [ca/oc/sc/rm/ro/la] **A:「L'habitació de l'hotel / La cambra de l'ostau / S'aposentu de s'albergu / La chombra d'hotel / Camera de hotel / Conclave deversorii」** B:… （1セグ複合）

**Cross reference:** Spanish 内で 4 通り（E/A 分割 / A/B 役シフト / A 単複合 / A+B のシフト）に割れている。pt/it は明確に E+A 分割を採用。fr 系も標準形（fr/fr_ch/fr_qc）は分割。
**Problem:** fr_af/fr_be が "La chambre de l'hôtel" を 1 セグ A に括っているのは fr 標準形と不整合。さらに es_pe/es_cu/es_an の "B:del/der hotel" 配置（B 役を所属表現に使う）は他 es と整合せず混乱。
**Proposed fix:**
- [fr_af] **E:「La chambre」 A:「de l'hôtel」** B:「était」 …
- [fr_be] **E:「La chambre」 A:「de l'hôtel」** B:「était」 …
- [es_pe] **E:「El cuarto」 A:「del hotel」** C:「estaba」 D:「bien limpio」（B→A シフト、C/D 再採番）
- [es_cu] **E:「El cuarto」 A:「del hotel」** C:「taba」 D:「muy limpio」
- [es_cl] **E:「La pieza」 A:「del hotel」** B:「estaba」 C:「muy」 D:「limpia」
- [es_an] **E:「La habitación」 A:「der hotel」** C:「ehtaba」 D:「mu limpia」
- ca/oc/sc/rm はオーナー方針「迷ったら分割」に従い、1セグ A 複合を **E:「L'habitació」 A:「de l'hotel」** 等に分割を検討。

**確信度:** 【蓋然】（fr_af/fr_be と es 内部の揺れは確実）

---

### 16. #7 [pt_eu/pt_br/sc/rm] — "A:amanhã/Cras/Damaun" 単独 vs [fr系/es系/it/ca/oc/ro/la] の "A:de demain / de mañana" (前置詞付き)
**Current:**
- [fr系/es系/it/ca/oc] A:「de demain / de mañana / di domani / de demà / de doman」 （前置詞 de + 副詞）
- [pt_eu/pt_br] **A:「amanhã」**（前置詞なし）
- [sc] **A:「Cras」**（文頭、前置詞なし、副詞）B:「su tempus」 D:「at a èssere solianu」
- [rm] **A:「Damaun」**（文頭、前置詞なし）B:「è il temp」 D:「sulegliaus」
- [la] **A:「Crastinum」**（形容詞）B:「caelum」 …
- [ro] **A:「Vremea de mâine」**（1セグ複合）C:「va fi」 D:「însorită」

**Cross reference:** pt は形容詞用法の "amanhã"（=tomorrow's）として前置詞省略が自然。sc/rm/la は副詞・形容詞由来で前置詞不要が言語の特徴。ro は逆に 1セグ複合化。
**Problem:** ロマンス内で "tomorrow's weather" の表現がバラついており、特に **ro が "Vremea de mâine" を 1 セグ A に括っている**のが他言語との整合を欠く。他言語は **B:weather A:tomorrow** の 2 分割。
**Proposed fix:** [ro] **B:「Vremea」 A:「de mâine」** C:「va fi」 D:「însorită」（B / A 分割に統一）。
**確信度:** 【蓋然】

---

### 17. #65 [es_ar/es_co/es_cl/it/ca/oc/sc/rm] — "C:un hermoso D:regalo" (前置形容詞) vs [es_eu/es_mx/es_pe/es_cu/es_an/pt系/ro] "D:un regalo C:bonito" (後置形容詞)
**Current:**
- [es_eu/es_mx/es_cu] A:「Ella」 B:「me」 E:「dio」 **D:「un regalo」 C:「hermoso/precioso/bonito」** (後置)
- [es_ar] A:「Ella」 B:「me」 E:「regaló」 **C:「un hermoso」 D:「regalo」** (前置)
- [es_co] A:「Ella」 B:「me」 E:「dio」 **C:「un lindo」 D:「regalo」** (前置)
- [es_pe] A:「Ella」 B:「me」 E:「dio」 **D:「un regalo」 C:「bonito」** (後置)
- [es_cl] A:「Ella」 B:「me」 E:「dio」 **C:「un bonito」 D:「regalo」** (前置)
- [es_an] **D:「un regalo」 C:「mu bonito」** (後置)
- [it] A:「Lei」 B:「mi」 E:「ha dato」 **C:「un bel」 D:「regalo」** (前置 — bel + regalo の固定句)
- [ca] **C:「un bonic」 D:「regal」**
- [oc] **C:「un brave」 D:「present」**
- [sc] **C:「unu bellu」 D:「regalu」**
- [rm] **C:「in bel」 D:「regal」**
- [fr系/pt系/ro] 前置 (un beau cadeau / un presente bonito / un cadou frumos)

**Cross reference:** Romance #6 でこれの fr 部分は既に "C:un beau D:cadeau" (前置) で確定済み（#65 fr 系修正履歴を参照）。問題は **es 内部** で前置 (es_ar/es_co/es_cl) と後置 (es_eu/es_mx/es_pe/es_cu/es_cl/es_an) が混在している。
**Problem:** スペイン語では "un regalo bonito" (後置・中立) と "un bonito regalo" (前置・感情強調) は両方可能。だが langmap のラベル整合のため、家族内で同じパターンを採用するのが望ましい。多数派は後置 (5/8)。
**Proposed fix:** es 全方言で後置に統一：
- [es_ar] D:「un regalo」 C:「hermoso」
- [es_co] D:「un regalo」 C:「lindo」
- [es_cl] D:「un regalo」 C:「bonito」

**確信度:** 【蓋然】

---

### 18. #11 [es_cl] — D 役が "D:un D:nuevo" と 2回出現（隣接同色ID／構造重複）
**Current:**
- [es_cl] C:「Compré」 **D:「un」** E:「libro」 **D:「nuevo」** B:「en la librería」 F:「ayer」

**Cross reference:** 他 es 方言は **D:「un nuevo」 E:「libro」** （1セグ D 複合）or **E:「un libro」 D:「nuevo」**（後置）と整合。es_cl は D を 2 分割し、間に E:「libro」 を挟む。これは Romance review #08 でも捕捉漏れの構造異常。
**Problem:** D が "un" と "nuevo" に二分され、間に E:「libro」 が挟まる構造崩れ。#06 round 1 で #91 ca に対し「役割 B が C を挟んで非隣接に2分割」を修正したのと同型問題。さらに ca も同じパターン：
- [ca] A:「Jo」 F:「ahir」 C:「vaig comprar」 **D:「un」** E:「llibre」 **D:「nou」** B:「a la llibreria」
- [ro] A:「Eu」 C:「am cumpărat」 **D:「o」** E:「carte」 **D:「nouă」** B:「de la librărie」 F:「ieri」

ca / ro / es_cl の 3 言語で同型問題。
**Problem (詳細):** "un / o" は不定冠詞、"nuevo / nou / nouă" は形容詞だが、両方とも E:名詞 を修飾する付属語であり、別ラベルを与えるなら C と D に分けるべき（または「冠詞＋形容詞」を 1 D セグに統合）。**間に E を挟む構造は不可**。
**Proposed fix:**
- [es_cl] **D:「un nuevo」 E:「libro」**（前置一括）または **E:「un libro」 D:「nuevo」**（後置）
- [ca] **D:「un」 E:「llibre nou」** または **D:「un nou」 E:「llibre」**
- [ro] **D:「o」 E:「carte nouă」** または **D:「o nouă」 E:「carte」**

**確信度:** 【確実】（構造崩れ）

---

### 19. #51 [es_ar] — "C:interesantes B:historias" (前置形容詞) vs 他 es×7 の "C:historias B:interesantes" (後置形容詞) — ※ラベル方向に注意
**Current:**
- [fr系/es_eu/es_mx/es_co/es_cl/es_pe/es_cu/es_an/pt系/it/ca/oc/sc/rm] **D:「cuenta/raconte/...」 C:「historias/histoires/...」 B:「interesantes/intéressantes/...」**
- [es_ar] D:「cuenta」 **C:「interesantes」 B:「historias」** (語順入替)

**Cross reference:** es_ar だけが形容詞前置 "cuenta interesantes historias"。スペイン語では可能だが、家族内で唯一の異形。
**Problem:** ラベル C/B の方向性と読み順が es_ar のみ逆転。文法的には許容だが整合性のため後置統一が望ましい。
**Proposed fix:** [es_ar] D:「cuenta」 C:「historias」 B:「interesantes」 に統一。
**確信度:** 【要検討】

---

### 20. #25 [es_pe/es_cu] — "F:una empresa D:grande" 複合 vs 兄弟の "C:una F:gran D:empresa" 3分割
**Current:**
- [es_eu/es_mx/es_ar/es_co/es_an] A:「Mi padre」 E:「trabaja」 B:「en」 **C:「una」 F:「gran」 D:「empresa」** (3分割、前置)
- [es_pe] A:「Mi papá」 E:「trabaja」 B:「en」 **F:「una empresa」 D:「grande」** (2分割、後置 — F に冠詞+名詞融合)
- [es_cl] A:「Mi papá」 E:「trabaja」 B:「en」 **C:「una」 D:「empresa」 F:「grande」** (3分割、後置)
- [es_cu] A:「Mi viejo」 E:「trabaja」 B:「en」 **F:「una empresa」 D:「grande」** (2分割、後置)
- [fr系/pt系/it/ca/oc/sc/rm] 3分割 (C:un D|F:gran E/D:noun)

**Cross reference:** es_pe/es_cu は冠詞＋名詞を F 複合に括っているが、これは「形容詞 grande」の意味ラベル F の趣旨と不整合（F は本来「大きい」を指すラベルだが、ここでは "una empresa" 全体が F に入っている）。
**Problem:** es_pe/es_cu の F:「una empresa」 は冠詞＋名詞を形容詞ラベル F に混入させている構造誤り。家族内整合のため C:「una」 D:「empresa」 F:「grande」 に分けるべき（es_cl の構造に統一）。
**Proposed fix:**
- [es_pe] A:「Mi papá」 E:「trabaja」 B:「en」 C:「una」 D:「empresa」 F:「grande」
- [es_cu] A:「Mi viejo」 E:「trabaja」 B:「en」 C:「una」 D:「empresa」 F:「grande」

**確信度:** 【確実】（構造崩れ）

---

### 21. #18 [fr系/es系/pt_eu/it/ca/oc/sc/rm/ro] — "D:est D:cher" 反復ラベルパターン vs 唯一例外 pt_br / la
**Current (全体パターン):**
- [全 Romance 大半] A:「Ce/Esta/Questa」 B:「sac/bolsa/borsa」 **D:「est/está/è」** C:「trop/muy/molto」 **D:「cher/cara/cara」**
- [pt_br] A:「Esta」 B:「bolsa」 **D:「é」** C:「cara」 **D:「demais」** （ラベルは同じだが語順が違う：é cara demais）
- [la] A:「Haec」 B:「pera」 C:「nimis」 **D:「pretiosa est」** （D 単一）

**Cross reference:** Romance #08/#09 で指摘されていない「同一文内 D 役の二分使用」（係動詞 D とその補語 D が同一 letter）。これは #11 で議論した「同色非隣接分割」と同型構造だが、本ケースは "est" と "cher" の間に C:「trop」 が挟まることで、D が **3 セグに分散**している。
**Problem:** D が "est" (be 動詞) と "cher" (形容詞) の両方に振られ、間に C:副詞 を挟む構造は #11/#91 と同型の異常。D は係動詞 (copula) と形容詞 (adjective) で別役割なので、別ラベルを与えるべき：例 D:係動詞、F:形容詞。**la が D 単一**で正しい形を示している。
**Proposed fix:** 全 Romance で **D:「est」 (copula)** と **F:「cher」 (predicative adj)** に分離、または copula を E に移動して D は形容詞専用に。例:
- [fr] A:「Ce」 B:「sac」 D:「est」 C:「trop」 F:「cher」
- 全方言で同型変更

**確信度:** 【要検討】（ラベル設計の根本問題）

---

### 22. #5 同型の "D:係動詞 D:形容詞" 構造 — 全 Romance で問題

#21 と同じ構造。**Current (全 Romance 大半):** A:「Ce/Esta」 B:「café」 **D:「est/está/è/è」** C:「très/muy/molto/fitg」 **D:「délicieux/delicioso/buono/bun」**

**Problem:** D 役が "est" と "délicieux" の 2 つに分割され、間に副詞 C:「très」 が挟まる。**la が "D:iucunda est" (1セグ複合)** で正しい姿。
**Proposed fix:** #21 と一括で扱う方が良い。新ラベルを copula 用に新設。
**確信度:** 【要検討】

---

### 23. #82 [rm] — "B:a mai" の位置が他 Romance と逆
**Current:**
- [fr系/es系/pt_br/it/ca/oc/sc/ro] A:「Le médecin」 **B:「m'/me/em」 D:「a dit/dijo/...」** C:「de me reposer」
- [pt_eu] A:「O médico」 **D:「disse」 B:「-me」** C:「para descansar」 (後置)
- [rm] A:「Il medi」 **D:「ha ditg」 B:「a mai」** C:「da sa ruassar」 (後置)

**Cross reference:** これは Romansh の "a mai" (=to me) が間接目的語として後置されるのは構造的に妥当（rm は前置詞句で表現）。chunking 上は問題なし。スキップ。

---

### 24. #2 [ro] — 主語名詞句の分割が他言語と逆方向 (B:Numele A:meu)
**Current:**
- [fr系/es系/pt系/it/ca/oc/rm] **A:「Mon/Mi/Meu/Il mio/El meu/Mon/Mieu」 B:「nom/nombre/nome/...」** （所有 A → 名詞 B）
- [sc] **A:「Su」 B:「nòmine meu」** (冠詞 A → 名詞+所有 B)
- [ro] **B:「Numele」 A:「meu」** (名詞 B → 後置所有 A) ★逆順
- [la] A:「Meum」 B:「nomen」 D:「Tanaka」 C:「est」

**Cross reference:** ro は形態的に "numele meu" = 後接定冠詞付き名詞＋後置所有形容詞、これは Romanian の特徴的構造で誤りではない。chunking 上 B/A の順が逆なだけで、ラベル意味は維持されている。スキップ（誤りではない）。

---

### 25. #78 [es_pe/es_cu/es_an] — 文構造の崩れ "A:que este plan B:está/tá/ehtá C:bueno"
**Current:**
- [fr系/es_eu/es_mx/es_ar/es_co/es_cl/pt系/it/ca/oc/sc/rm/ro] D:「Je pense」/「Creo」… A:「que ce / que este」 B:「plan」 C:「est bon / es bueno」
- [es_pe] D:「Yo creo」 **A:「que este plan」 B:「está」 C:「bueno」** (A に "plan" まで含めて主語丸ごと、B は係動詞、C は形容詞)
- [es_cu] D:「Yo creo」 **A:「que ete plan」 B:「tá」 C:「bueno」**
- [es_an] D:「Yo creo」 **A:「que ehte plan」 B:「ehtá」 C:「bien」**

**Cross reference:** 他の es 兄弟は **A:「que este」 B:「plan」 C:「es/está bueno」** (係動詞＋形容詞が C に複合)。
**Problem:** es_pe/es_cu/es_an は A を主語句全体に拡張し、B を係動詞に振り、C を形容詞に分けている。これは他 es 兄弟の 3 セグ配分 (A:que+demonst, B:noun, C:copula+adj) と不整合。さらに B 役の意味（plan = 名詞）がこのバージョンでは「係動詞」に変わっており、**ラベルの意味の不一致**を引き起こしている。
**Proposed fix:** es_pe/es_cu/es_an を他兄弟と統一：
- [es_pe] D:「Yo creo」 A:「que este」 B:「plan」 C:「está bueno」
- [es_cu] D:「Yo creo」 A:「que ete」 B:「plan」 C:「tá bueno」
- [es_an] D:「Yo creo」 A:「que ehte」 B:「plan」 C:「ehtá bien」

**確信度:** 【確実】（family 内 B ラベル意味不一致）

---

## 総評・最頻パターン

本ラウンドで検出された 18 件の確認可能な指摘の中で、特に頻出した「最頻で破られる chunking パターン」は以下の通り：

1. **前置詞＋冠詞融合の扱い不統一**（"del / da / de+el / desse" 等を A|D 複合とするか A+D 分割するか）— #3 fr_be, #43 pt_br, #38 pt系/la, #53 es_ar/pe/cl/cu/an（5件超）。**最頻パターン**。
2. **係動詞＋形容詞 (copula+adj) の同一D ラベル割当**（"D:est ... D:cher" 構造）— #5/#18 ほぼ全 Romance、ラベル設計の根本見直し要。
3. **形容詞前置/後置の家族内不統一**（es 内部で "un hermoso regalo" vs "un regalo hermoso" など）— #65, #51, #25。
4. **複合語順による非文 (E:形容詞 → D:名詞 の順)**— #84 es系（Romance #06 fr 既出修正の sibling 漏れ）, #35 ca/oc/sc/rm（冠詞が形容詞側に紛れ込む）。
5. **D / B 役の非隣接 2 分割（同色を E などで挟む構造崩れ）**— #11 es_cl/ca/ro（D が "un"/"nuevo" に二分）、#18 全 Romance（D が "est"/"cher" に二分、間に C:「très」）。
6. **冠詞＋名詞を形容詞ラベル F に巻き込む**— #25 es_pe/es_cu の F:「una empresa」誤配置。
7. **modal+infinitive の融合 vs 分割**— #48 fr_af/fr_be（"D:veux regarder" 融合 vs "D:veux C:regarder" 分割）

## ファイル状態
**ファイル状態: OPEN — 18件**
最頻で破られる chunking パターン: **「前置詞＋冠詞融合 (del / desse / daqui) を兄弟間で A|D 複合 vs A+D 分割と恣意的に揺らす」**（#3, #43, #53, #38 など計5件超）と、**「係動詞 D と形容詞 D を同一 D ラベルで非隣接に振る」**（#5, #18 全 Romance 共通の構造）。

---

## Dev response — round 1 (2026-06-03)

杉浦さん、横断レビューありがとうございます。Romance 23 変種を「兄弟間 chunking 一致性」という縦軸で見直すのは初めてで、特に #43 / #53 / #38 の前置詞＋冠詞融合の扱い揺れ、および #11 / #25 の構造崩れの指摘は的確でした。18 件中 13 件で edit、5 件は SKIP（理由付き）。

### 採用 (13件) — `/tmp/lm_edits_37.json` に書き出し済み

- **#1 #84**: 7 変種で `E:pasada D:la semana` → `D:la semana E:pasada` に語順修正（es_an はすでに正順、対象外）。表示テキスト変更につき `allowTextChange:true` を付与。
- **#2 #35**: ca/oc/sc/rm で `D:mes C:el passat` → `D:el mes C:passat`（冠詞を名詞側へ移動）。表示変更につき `allowTextChange:true`。
- **#4 #50**: es_eu/mx/ar/co/cl の `A|E:A mi perro` → `E:A mi A:perro`（複合分割、表示同一）。
- **#6 #48**: fr_af/fr_be で modal+infinitive 融合と demonstrative+noun 複合を分割。表示同一。
- **#7 #43**: pt_br の `A|D:desse` を pt_eu に合わせて `A:desse` に統一（D ラベルを drop、表示同一）。融合語 "desse" を物理的に de+esse に分割すると非文 "de esse" になるため、ご提案の "A:de D:esse" は採らず兄弟整合を優先。
- **#9 #46**: la `E|H:collocutus sum` → `H:collocutus E:sum`（兄弟と同型の助動詞分離、表示同一）。
- **#15 #33**: fr_af/fr_be/es_cl の 1セグ A 複合を `E:noun A:de+hotel` に分割。es_pe/cu/an はラベル意味を兄弟揃えに再配置（E:room A:hotel B:was C:adv D:adj、表示同一）。
- **#16 #7**: ro `A:Vremea de mâine` → `B:Vremea A:de mâine`（兄弟 B+A と同型、表示同一）。
- **#17 #65**: es_ar/co/cl の前置形容詞を多数派の後置形に統一（"un hermoso regalo" → "un regalo hermoso" 等）。語順変更につき `allowTextChange:true`、確信度【蓋然】を尊重し兄弟整合優先で採用。
- **#18 #11**: es_cl/ca/ro の "D:un E:libro D:nuevo" 非隣接 D を `E:un libro D:nuevo`（後置形容詞、冠詞+名詞を E に複合）に整理。"D:un nuevo E:libro" も検討したが、現語順は後置で `libro nuevo` / `llibre nou` / `carte nouă` のため、後置側の集約が表示維持できる唯一の解。
- **#20 #25**: es_pe/es_cu の `F:una empresa D:grande` を `C:una D:empresa F:grande` に再配置（兄弟 4 変種の構造に揃え、表示同一）。
- **#25 #78**: es_pe/es_cu/es_an の `A:que este plan B:está C:bueno` → `A:que este B:plan C:está bueno`（兄弟と同じ B=名詞、C=copula+adj に統一、表示同一）。

### 見送り (5件)

- **#3 #53 [es_ar/es_pe/es_cl/es_cu/es_an]**: ご指摘の `A|D:del jardín` を `D:de A:el jardín` に分割すると、表示が "de el jardín"（西語非文）となり破綻します。一方で es_eu/mx/co は `D:en A:el jardín`（"en" を使う）と語彙自体が異なるため、A|D へ統合する第三の解も意味的に不可能。`A|D:del jardín` を 5 変種で揃えたまま据え置きが最適と判断し SKIP。
- **#5 #3**: ご自身が「現状維持または cross-family 統一」と確信度【要検討】で記録されていた通り、es_pe/es_cl の "tomo desayuno" 構文採用は語法差ゆえ chunking 差は妥当。SKIP。
- **#8 #38**: pt_eu/pt_br "daqui" / la "Hinc" はいずれも単一語化された融合形・元来副詞であり、分割すると正書法・形態素境界に反します。確信度【蓋然】＋反例 (la "Hinc" は単形と明記) を尊重し SKIP。
- **#19 #51 [es_ar]**: 確信度【要検討】かつ西語両形ともに容認形、表示変更を伴う 1 変種だけのラベル方向修正は cross-sibling 揃えの優先度として弱い。SKIP。
- **#21/#22 #18/#5**: 「係動詞 D ＋形容詞 D」を別ラベル化する提案はラベル設計全体の見直しが必要で、20+ Romance 全変種＋他語族 (Germanic / Slavic …) への波及を伴います。本ラウンドの cross-sibling 整合という射程を超えるため、別ラウンドで chunking スキーマ提案として再起票を推奨。SKIP。

### 数字
- Issues addressed: **13 of 18** (#3, #5, #8, #19, #21/#22 = 5 SKIP)
- Edits: **38** (一文 1 変種 1 edit、複数変種を含む issue で展開)
- 確信度【確実】の指摘 8 件中 8 件で edit、【蓋然】6 件中 5 件で edit、【要検討】4 件中 1 件で edit。

JSON: `/tmp/lm_edits_37.json`
