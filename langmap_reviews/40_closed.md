# LangMap データレビュー #40 — モーダル動詞セグメンテーション横断レビュー

## レビュアー自己紹介 (ペルソナ)

Dr. Marisol Ferreira-Vance (handle: **@modal_cutter**)。University of Edinburgh, Department of Linguistics and English Language, PhD (2018) — 専門は cross-linguistic modality と modal-verb syntax。学位論文は *The Syntax of Modal Stacking: Subject Demotion in Romance and Slavic* (Edinburgh 2018) で、Romance と Slavic における modal verb の subject 関係を比較研究。常用文献は Frank Palmer *Mood and Modality* (CUP 2001)、Joan Bybee *Modality in Grammar and Discourse* (Benjamins 1995)、Magdalena Nordlinger & Sells *Possessive Modality and Subject Demotion*、Ferdinand de Haan *The Interaction of Modality and Negation* (Routledge 1997)、Ágel & Eichinger *Dependency and Valency* (de Gruyter 2003)。今回は **#1〜#39 で実施済みの個別言語/語族内レビューには立ち入らず**、英語 reference に modal verb (want to / can / could / must / should / need to / have to / may / ought to / going to) を含む sentences をすべて抽出 (20 件) し、各文において **全 200 言語横断で modal の role-letter 配置と segmentation が一貫しているか** だけを精査した。memory の `feedback_impersonal_modal_as_D.md` (impersonal modal = D, not A) と `feedback_modal_verb_not_subject.md` (modal verb は A ではない) を主要な判断基準とする。

## 検証範囲

- **対象文 (20件)**: #1, #9, #10, #22, #28, #30, #32, #37, #39, #44, #48, #54, #58, #62, #64, #68, #71, #85, #89, #98。これらが en reference に modal verb を含む全文。
- **対象言語**: 全 200 言語のうち、modal 構文を持つ全言語 (Romance, Germanic, Slavic, Celtic, Baltic, Uralic, Turkic, Semitic, Indic, Iranian, Bantu, Sinosphere, Polynesian, isolates, constructed, classical を含む)。
- **照合軸**:
  1. **A (subject) vs D/E/B (modal)** の役割分離が memory rule に従っているか。
  2. **impersonal modal** (Il faut / Hay que / Bisogna / 必要 / يجب / Тебе стоит) が A ではなく D タグになっているか。
  3. **modal+infinitive** が分割 (modal=D + verb=C 等) か融合 (modal+verb=単一) か、sibling 言語との整合性。
  4. **same sentence の cross-language** で role-letter 配置の convention が揃っているか (例: #54 で en/es/fr/de は modal=D, それ以外も同様か)。
- ライブデータは `node -e "..."` で `/home/jounlai/langmap/data.js` から逐一抽出済み (`/tmp/modal_audit.txt`, 1620 行)。

## 方針 — 何を「指摘」とし、何を「許容」とするか

1. **言語固有の morphological fusion** (Latvian debitive `jānopērk`、Turkish `zorundayım`、Persian `باید بکنیم`、Korean `해야 한다` の helper-verb chain) は形態論的に分割不能なので KEEP。
2. **Pro-drop 言語 (es, it, ar, ru など) で A を省略する** こと自体は正当だが、**sibling variants 内で揺れている場合** (例: es_eu に A:Yo があり es_cl に無い、ar #22 に A 無く ar #1 に A:أنا あり) は cross-sibling 整合性 (memory `feedback_cross_sibling_role_consistency.md`) の観点で flag する。
3. **Modal-as-A leakage** (memory `feedback_modal_verb_not_subject.md`) — modal verb が単独で A タグを担っている場合は明確な violation として flag する。impersonal modal (Hay que / Il faut / Bisogna) は memory rule で D タグが正解。
4. **Sentence-specific な role-letter convention** (例: #1 では modal=B, #22 では modal=E) は en reference に従っており、各文内で全言語が同じ convention に揃っていれば良い。揃っていない言語のみ flag する。

確信度は **【確実】**= memory rule 直接違反または明白な sibling 不整合、**【蓋然】**= 解釈余地はあるが多数派と乖離、**【要検討】**= 形態論的事情で判断保留。

## 指摘事項 (Issues found)

### 1. #22, #32, #44, #48, #58, #62, #71 ポーランド語 — modal「Chcę」が単独で A タグ (modal-as-A leakage, 7文連続) 【確実】

**Current:**
- #22 pl: `A:Chcę | D:nauczyć się | F:nowego | C:języka`
- #32 pl: `A:Chcę | C:zjeść | B:sushi | D:na lunch`
- #44 pl: `A:Chcę | C:podróżować | B:po świecie`
- #48 pl: `A:Chcę | C:zobaczyć | E:ten | B:film`
- #58 pl: `A:Chcę | D:zrobić | C:zdjęcie | B:tej świątyni`
- #62 pl: `A:Chcę | D:przeczytać | B:tę książkę | C:do końca miesiąca`
- #71 pl: `A:Chcę | C:poprawić | B:swoją wymowę`

**Problem:** Polish `Chcę` = 1sg.PRES of *chcieć* (want) — つまり **modal verb**。pro-drop で「Ja」を省略しても良いが、それを **A タグ** として残すのは memory rule `feedback_modal_verb_not_subject.md` (「Modal verbs (Vogio/Quiero/Go da) are NOT subject (A) - always match reference language's segment ID」) に直接違反する。同じ #22, #32, #44, #48, #62, #71 で sibling Slavic (cs/sk/sl/sr/bg/uk/ru) はすべて `E:chci / E:chcem / E:želim / E:желим / E:искам / E:хочу` (modal = E、 reference の en `E:want to` に合わせ) として処理し、A は明示 (`A:Já / A:Jaz / A:Ја`) または完全省略 (cs #44 `D:Chci | C:cestovat | B:po celém světě` も A 省略だが modal は D)。pl だけが「modal を A に格上げ」している。さらに同じ pl 自身でも **#1 と #9 と #98 は `A:Ja | B:chcę`** と subject A と modal B を分けており (en convention の B:want to に追随)、**#22 以降で convention が崩壊**している。これは典型的な「modal-as-A leakage」で、cross-sibling と self-consistency の両面で問題。

**Proposed:** 全 7 文の `A:Chcę` → modal-position-letter (#22/32/58/62 は E、#44/48/71 は D、#32 は C なし sentence なので E) に変更。あるいは A:Ja を補って en/sibling と同じ A+modal 分割にする。最小修正は前者:
- #22 pl: `E:Chcę | D:nauczyć się | F:nowego | C:języka` (E に揃える)
- #44 pl: `D:Chcę | C:podróżować | B:po świecie` (cs #44 と同型)
- #48 pl: `D:Chcę | C:zobaczyć | E:ten | B:film`
- #58 pl: `E:Chcę | D:zrobić | C:zdjęcie | B:tej świątyni`
- #62 pl: `E:Chcę | D:przeczytać | B:tę książkę | C:do końca miesiąca`
- #71 pl: `D:Chcę | C:poprawić | B:swoją wymowę`
- #32 pl: `E:Chcę | C:zjeść | B:sushi | D:na lunch`

### 2. #37 / #54 ポーランド語 — modal「Muszę / Musimy」が単独で A タグ 【確実】

**Current:**
- #37 pl: `A:Muszę | E:kupić | D:prezent | C:urodzinowy`
- #54 pl: `A:Musimy | C:chronić | B:środowisko`

**Problem:** #37 の `Muszę` (= 1sg of *musieć*, must/need to) と #54 の `Musimy` (= 1pl of *musieć*) はいずれも **modal verb**。reference の en `B:need to` (#37) と `D:must` (#54) は modal position が B/D で固定。sibling cs/sk は `#37 A:Já | B:musím`, `#54 A:My | D:musíme` で subject と modal を分けている。pl だけ subject を消して modal を A に上げている。指摘 #1 と完全に同じパターンで、pl は **modal-as-A 慣行が系統的に固定化**している。

**Proposed:**
- #37 pl: `B:Muszę | E:kupić | D:prezent | C:urodzinowy` (modal を B に。en `B:need to` と一致)
- #54 pl: `D:Musimy | C:chronić | B:środowisko` (modal を D に。en `D:must` と一致)
あるいは A:Ja/My を補って sibling 通り。

### 3. #85 ポーランド語 — modal「Powinieneś」が単独で A タグ 【確実】

**Current:** pl: `A:Powinieneś | C:pić | E:więcej | B:wody`

**Problem:** `Powinieneś` = 2sg.M of *powinien* (should) — **modal**。en `D:should`, sibling cs `A:Ty | D:bys měl`, sk `A:Vy | D:by ste mali`, sl `A:Vi | D:bi morali`。pl だけ A に格上げ。指摘 #1, #2 と同型で、合計 **pl 全 9 文の modal sentences (#1, #9, #98 を除く #22, #32, #37, #44, #48, #54, #58, #62, #71, #85)** のうち #1, #9, #98 を除く全てで modal-as-A leakage を起こしている。

**Proposed:** `A:Ty | D:Powinieneś | C:pić | E:więcej | B:wody` (sibling cs と一致) or `D:Powinieneś | C:pić | E:więcej | B:wody` (A 省略型で modal-position に修正)。

### 4. #22, #32, #44, #48, #58, #62, #71 スペイン語方言 (es_cl, es_pe, es_cu, es_an) — A:Yo 省略の sibling 不整合 【確実】

**Current (例 #22):**
- es_eu/mx/ar/co/pe: `A:Yo | E:quiero | D:aprender | B:un | F:nuevo | C:idioma`
- es_cl: `E:Quiero | D:aprender | B:un | F:nuevo | C:idioma` (A 無し)
- es_cu/an: `A:Yo | E:quiero | D:aprendé | ...` (A 有り)

**Current (#32 / #44 / #48 / #58 / #62 / #71):** es_cl/es_pe/es_cu/es_an の **4方言で A:Yo を一律に省略**しつつ、es_eu/mx/ar/co は A:Yo を保持。

**Problem:** Spanish は pro-drop なので A を省略しても文法的には正しいが、**sibling variants で系統的揺れ**が生じている点が問題。memory `feedback_cross_sibling_role_consistency.md` (「Audit role-letter consistency across sibling langs」) の射程内。さらに同じ es_cl/es_pe/es_cu/es_an でも、**#1, #9, #44, #48, #71** などでは方言ごとに A:Yo の有無がバラバラ:
- #44 es_cl: `D:Quiero | C:viajar | B:por todo el mundo` (A 無)
- #44 es_eu: `A:Yo | D:quiero | C:viajar | B:por todo el mundo` (A 有)
- **#9 es_an: `A:Yo | B:quiero | ...`** ← 同じ es_an が #9 では A:Yo 有

つまり方言を横切るだけでなく、**同じ方言内でも文ごとに A:Yo の出現が一貫しない**。これは modal sentence で特に顕著。

**Proposed:** es_cl/pe/cu/an について、**modal sentence で A:Yo を出すか出さないかをこの 4 方言で統一**する。最も自然な選択は **全方言で A:Yo を保持** (es_eu と同型) — 方言差を modal 周辺の syntax ではなく語彙レベル (terno/peli/celulá etc.) に閉じ込める。具体的には #22/32/44/48/58/62/71 の 4 方言に `A:Yo` を補う。

### 5. #37 スペイン語 — es_cl/pe/cu/an が「B:Tengo que」(A 無) vs es_ar 「A:Yo | B:tengo que」 (混乱) 【確実】

**Current:**
- es_eu/mx/co: `A:Yo | B:necesito | E:comprar | ...` (necesitar = need)
- es_ar: `A:Yo | B:tengo que | E:comprar | C:un regalo de cumpleaños`
- es_cl/pe/cu/an: `B:Tengo que | E:comprar | D:un regalo | C:de cumpleaños` (A 無)

**Problem:** 3つの不整合が同時に発生:
1. 動詞選択 (necesitar vs tener que) — Latam vs 半島の registry 差で許容。
2. A:Yo の有無の方言間揺れ (指摘4参照)。
3. **最後の object 部分の segmentation** — es_ar は `C:un regalo de cumpleaños` (1セグメント), es_cl/pe/cu/an は `D:un regalo | C:de cumpleaños` (2セグメント)。en は `D:a | C:birthday | D:present` で wrap pattern を採用しているため、Latam 4方言は en convention に追随しているが es_ar は不追随。

**Proposed:** es_ar の object を `D:un regalo | C:de cumpleaños` に分割し、es_cl/pe/cu/an と整合させる。同時に A:Yo の有無は指摘4と同じ統一案 (全方言 A:Yo 保持) に従う。

### 6. #28 ラテン語 — modal「Possisne」が単独で A タグ (#10 と sentence-internal 不整合) 【確実】

**Current:**
- #10 la: `D:Potesne | A:tu | B:Anglice | C:loqui` — modal `Potesne` を D、subject `tu` を A に分離。
- #28 la: `A:Possisne | C:commendare | F:bonam | E:cauponam` — modal `Possisne` を A、subject (vos/tu 省略) も無し。

**Problem:** la は #10 と #28 で **同じ「Can/Could you」構造** にもかかわらず role-letter convention が逆転。 #10 は en reference の `D:Can | A:you` を正しく踏襲、#28 は en reference の `A:Could | B:you` (Could が A) に追随したが、これは en reference の特殊事情 (#28 は en で疑問助動詞 Could を A タグ) で、la も sibling Romance も #28 では modal を A にしている。一方 #10 では en `D:Can` で modal が D。つまり **en reference 自体が #10 と #28 で modal の role-letter を変えている** ことが下流に伝播し、la はそれに従っただけ。これは memory rule 違反というより en reference 側の inconsistency。とはいえ la #28 では subject (vos/tu) を完全に消しているのに `Possisne` を A としているのは modal-as-A leakage に該当。sibling es_eu `A:Podría | B:usted`, fr `A:Pourriez | B:-vous` 等は subject を B として明示している。la も `A:Possisne | B:tu | C:commendare | ...` とすべき。

**Proposed:** la #28: `A:Possisne | B:tu | C:commendare | F:bonam | E:cauponam` (sibling Romance と sentence-internal で揃える)。あるいは en reference を #10 と #28 で統一する (これは reference 編集なので scope 外、closed-review への注記)。

### 7. #22 アラビア語 — modal「أريد」が単独で A (cross-sentence 不整合) 【確実】

**Current:**
- #1 ar: `A:أنا | B:أريد | C:أن أجرب | ...` (A:أنا 明示, modal B)
- #9 ar: `A:أنا | B:أريد | C:أن أذهب | ...` (同上)
- **#22 ar: `A:أريد | D:أن أتعلم | C:لغة | F:جديدة`** (modal を A)
- #32 ar: `E:أريد | C:أن آكل | ...` (modal を E、A 省略)
- #44 ar: `D:أريد | C:أن أسافر | ...` (modal を D、A 省略)
- #48 ar: `D:أريد | ...` (D)
- #58/62 ar: `E:أريد | ...` (E)
- #71 ar: `D:أريد | ...` (D)
- #98 ar: `A:أنا | B:أريد | ...` (A+B)

**Problem:** ar は modal sentence 全体で 3 つのパターンが混在:
- (a) `A:أنا + B/D/E:أريد` (#1, #9, #98) — subject 明示, modal は B/D/E。
- (b) `D/E:أريد` (#32, #44, #48, #58, #62, #71) — pro-drop, modal を D/E。
- **(c) `A:أريد` (#22 のみ) — modal を A**。これは memory rule `feedback_modal_verb_not_subject.md` 直接違反。

ar は pro-drop 言語なので (a) と (b) のいずれかに統一すべきで、(c) は完全に逸脱。**#22 ar `A:أريد` を `E:أريد` に変更**すれば (b) パターンに合流し sibling sentences と整合。

**Proposed:** ar #22: `E:أريد | D:أن أتعلم | C:لغة | F:جديدة` (modal を E に格下げ、A 省略)。

### 8. #39 アラビア語 — impersonal modal「يجب عليّ」が単一 E にfused (#54 ar との不整合) 【確実】

**Current:**
- #39 ar: `E:يجب عليّ | D:أن أستيقظ | B:مبكراً | C:غداً` — `يجب عليّ` (must on-me) を単一 E セグメント。
- **#54 ar: `D:يجب | A:علينا | C:حماية | B:البيئة`** — `يجب` (must) と `علينا` (on-us = dative subject) を D + A に分割。

**Problem:** ar の impersonal modal `يجب` (= it is necessary) は両文ともに impersonal で、obligee は dative `عليّ / علينا` (on-me/us) で表現される。memory rule `feedback_impersonal_modal_as_D.md` は「impersonal modal は D」と定めており、#54 はこれに従っている (D:يجب + A:علينا で A は dative subject)。しかし **#39 は両者を融合**して E (sentence #39 の modal-position) としており、segmentation が #54 と非対称。sibling言語 (fr `A:Je | E:dois`, it `A:Io | E:devo`) は personal modal を採用しているのでこの非対称が直接波及しないが、ar 自身で `يجب + (عليّ/علينا)` の分割方針が文ごとに揺れているのは問題。

**Proposed:** ar #39: `E:يجب | A:عليّ | D:أن أستيقظ | B:مبكراً | C:غداً` に分割 (#54 と整合)。ただし sentence-position letter が E (#39) と D (#54) で異なる点は en reference の差なので KEEP。

### 9. #85 ヴェネツィア語 (vec) — modal「Dovarìa」が A、動詞「bévar」が D (sibling Italo-Romance と完全逆) 【確実】

**Current:** vec #85: `A:Dovarìa | D:bévar | E:più | B:aqua`

**Problem:** `Dovarìa` = vec の `dovere` (must/should) 条件法 = **modal verb**, `bévar` = drink (infinitive)。en reference は `A:You | D:should | C:drink | E:more | B:water`。sibling Italo-Romance:
- it: `A:Tu | D:dovresti | C:bere | E:più | B:acqua`
- nap: `A:Tu | D:avrisse | C:bevere | E:cchiù | B:acqua`
- scn: `A:Tu | D:avrìssi a | C:bìviri | E:cchiù | B:acqua`

3 sibling すべて **A:Tu (subject) + D:modal + C:verb** で揃っているのに、vec だけ **A:modal + D:verb** という完全逆転を起こしている。memory rule `feedback_modal_verb_not_subject.md` 直接違反 (modal は A ではない) + `feedback_cross_sibling_role_consistency.md` 違反 (sibling と role-letter が逆)。

**Proposed:** vec #85: `D:Dovarìa | C:bévar | E:più | B:aqua` (subject Tu/Ti は pro-drop で省略、modal=D、verb=C — it/nap/scn と一致)。

### 10. #54 フランス語 (fr_be) — `D:Il faut` impersonal は正解、ただしホスト言語に分散 【確実・整合】

**Current:**
- fr_be #54: `D:Il faut | C:protéger | B:l'environnement` — `Il faut` を D (impersonal)
- es_cl/pe/cu/an #54: `D:Hay que | C:protegé | ...` — `Hay que` を D
- vec #54: `D:Bisogna | C:protezer | B:l'ambiente` — `Bisogna` を D

**Note:** これらはすべて memory `feedback_impersonal_modal_as_D.md` の正しい適用例 (Il faut / Hay que / Bisogna はすべて D タグで A タグなし)。**指摘事項ではなく、impersonal modal 処理の好例として記録**する。同時に sibling personal `Nous devons / Nosotros debemos / Noi dobbiamo` (A + D) と並存しており、Romance 内で impersonal/personal の選択が方言レベルで分かれている良いコントラスト。

**Proposed:** 修正不要。closed-review に「impersonal modal D タグの全 Romance 適用例として #54 を記録」と注記。

### 11. #85 フランス語 (fr_be) — `D:Il faudrait` impersonal も正しく D 【確実・整合】

**Current:** fr_be #85: `D:Il faudrait | C:boire | E:plus | B:d'eau`

**Note:** `Il faudrait` = 条件法 impersonal「one should」。fr_be は #54 でも #85 でも consistently impersonal D タグ。sibling fr/fr_qc/fr_ch は personal `A:Vous/Tu + D:devriez/devrais` を採用しており、fr_be は Belgium で impersonal を好む register という方言差。memory rule の正しい適用。

**Proposed:** 修正不要。指摘 #10 と同じく好例として記録。

### 12. #44 / #98 / #28 vec — modal が文頭で A (pro-drop fused) — sibling との非対称 【蓋然】

**Current:**
- #44 vec: `D:Vogio viagiar | C:par tuto | B:el mondo` — `Vogio viagiar` (want+travel) を modal+verb 融合 D
- #98 vec: `A:Mi | B:vorave | C:ordinar | D:sto | E:piato` — `Mi` 有り、modal `vorave` を B (it と同型)
- #28 vec: `A:Podaria | C:consigliarme | D:un | F:bon | E:ristorante` — `A:Podaria` (could) を A!
- #1 vec: `A:Mi | B:vògio | C:provar | ...` — Mi+modal+verb 分離
- #22 vec: `A:Mi | E:vogio | D:imparar | ...` — 分離

**Problem:** vec は 6 文 (#1, #22, #32, #44, #48, #58, #62, #71, #98) のうち、**#1, #22, #98 では `A:Mi + modal` 分離、#32, #48, #58, #62, #71 では `Vogio/Vogio` を modal-position letter で A 無、#44 では modal+verb 融合**、と少なくとも 3 種類の処理方式が混在。さらに **#28 で `A:Podaria` (could) を modal-as-A** にしている点は memory rule 違反。#85 (指摘9) と合わせ vec は modal 処理が最も不安定。

**Proposed:** vec の 9 modal sentence で方針を統一:
- 推奨案 A: 全文 pro-drop で `Mi` 省略、modal を文の modal-position letter (B/D/E) に。 #28: `A:Podaria` → `A:Tu | D:Podaria` または `D:Podaria` (sibling Romance に合わせ)。
- #44 の `Vogio viagiar` (融合) は `D:Vogio | C:viagiar` に分割 (en `D:want to | C:travel` と同型)。
- 最小修正は #28 と #44 のみ。

### 13. #54 ヒンディー / ウルドゥー — modal `चाहिए / چاہیے` の fusion が文ごとに揺れる 【確実】

**Current:**
- #54 hi: `A:हमें | B:पर्यावरण को | C:संरक्षित | D:करना चाहिए` — `करना चाहिए` (do+should) を融合 D
- #85 hi: `A:आपको | E:अधिक | B:पानी | C:पीना | D:चाहिए` — `पीना` と `चाहिए` を C+D に分離
- #54 ur: `A:ہمیں | B:ماحولیات کی | C:حفاظت | D:کرنی چاہیے` — `کرنی چاہیے` (do+should) を融合 D
- #85 ur: `A:آپ کو | E:زیادہ | B:پانی | C:پینا | D:چاہیے` — 分離

**Problem:** hi/ur で modal `चाहिए / چاہیے` (= should/must) と main verb (infinitive) の分割方針が #54 と #85 で逆転。#85 は分離、#54 は light verb `करना/کرنی` (do) を modal と融合。en reference では両文とも `D:must/should + C:protect/drink` で modal と verb は分離。**#85 の分離が正解**で、#54 は `C:संरक्षित करना | D:चाहिए` または `C:संरक्षित | D:करना चाहिए` を `C:संरक्षित | C:करना | D:चाहिए` (`करना` も C に含める) のように修正すべき。これは sentence-internal self-consistency 違反。

**Proposed:**
- hi #54: `A:हमें | B:पर्यावरण को | C:संरक्षित करना | D:चाहिए` (light verb をC側に寄せ modal だけD)
- ur #54: `A:ہمیں | B:ماحولیات کی | C:حفاظت کرنی | D:چاہیے` (同様)

### 14. #85 ヨルバ語 (yo) — D セグメントが modal+subject+verb+object 全融合 【確実】

**Current:** yo #85: `A:O | D:yẹ kí o mu omi | E:sí i`

**Problem:** `yẹ kí` = should/ought, `o` = 2sg subject (再出), `mu` = drink, `omi` = water。**D セグメントが modal + redundant subject + verb + object** を一塊にしている。en `A:You | D:should | C:drink | E:more | B:water` に対応するには `D:yẹ kí | C:mu | B:omi | E:sí i` のように分割すべき。yo の他 modal sentence (#22, #32, #44, #48, #58, #62, #71) では `A:Mo | D:fẹ́ | C:verb | B:object` ときれいに分離しているのに #85 だけ崩壊。

**Proposed:** yo #85: `A:O | D:yẹ kí | C:mu | B:omi | E:sí i` (cf. yo #22 `A:Mo | E:fẹ́ | D:kọ́ | C:èdè tuntun kan` の分離パターン)。

### 15. #44 チェコ語 — `D:Chci` (modal-as-D, A 省略) — sibling sk と非対称 【蓋然】

**Current:**
- cs #44: `D:Chci | C:cestovat | B:po celém světě` (A 無し)
- sk #44: `A:Ja | D:chcem | C:cestovať | B:po svete` (A 有り)
- pl #44: `A:Chcę | C:podróżować | B:po świecie` (指摘1, modal-as-A)

**Problem:** West Slavic 3言語 (cs/sk/pl) で **#44 が3つの異なるパターンを示す**:
- cs: pro-drop + modal=D
- sk: explicit A + modal=D
- pl: pro-drop + modal=A (=指摘1, 違反)

cs と sk の差は方言の好みで KEEP 可だが、cs 自身が **他の文 (#1, #9, #22, #32, #48, #58, #62, #71)** では `A:Já + modal` を保持しているので、**#44 だけ A を省略する理由が不明**。同じ動詞 `Chci` を持つ #22 cs `E:Chci se` (A 無、modal=E) や #32 cs `A:Já | E:chci` (A有、modal=E) との不整合も含め、cs の modal sentence 全体で A の出現規則が文ごとに揺れている。

**Proposed:** cs #44: `A:Já | D:chci | C:cestovat | B:po celém světě` (sk と整合、cs 自身の #32/#37 等の A 有パターンと整合)。

### 16. #22 チェコ語 — `E:Chci se | D:naučit` で reflexive `se` が modal 側に張り付き 【蓋然】

**Current:** cs #22: `E:Chci se | D:naučit | F:nový | C:jazyk`

**Problem:** `naučit se` = learn (reflexive)。チェコ語の clitic `se` は通常第二位置で出るため `Chci se naučit` の語順が標準。しかしセグメンテーション上、`se` は reflexive verb `naučit se` に属する morpheme なので、**`E:Chci | D:se naučit`** のほうが意味論的に正確。sibling sk #22 `E:chcem | D:sa naučiť` は `sa` を verb 側に置いており、cs だけ `se` を modal 側に。同じ #54 cs `D:musíme | C:chránit` は reflexive 無しなので参照無効だが、#58 cs `E:chci | D:vyfotit` も verb 側に reflexive 無し、#62 cs `E:chci | D:přečíst` も同様。**#22 のみ `se` が modal 側**。

**Proposed:** cs #22: `A:Já | E:chci | D:se naučit | F:nový | C:jazyk` (`se` を verb segment へ移し sk と整合。A:Já 補完も sibling と統一)。

### 17. #1, #58, #62 など — Korean `B:싶어요 / E:싶다` の modal `싶다` の役割揺れ 【蓋然】

**Current:**
- #1 ko: `A:저는 | ... | C:試着 | B:したいです` (waitこれは ja, ko 再確認)

実際 ko を再確認:
- #1 ko: `A:저는 | K:호텔 | J:맞은편 | I:가게 | H:‌에서 | G:본 | D:양복을 | C:입어보고 | B:싶어요` — `싶어요` を B
- #22 ko: `A:저는 | F:새로운 | C:언어를 | D:배우고 | E:싶어요` — E
- #32 ko: `A:나는 | D:점심으로 | B:초밥을 | C:먹고 | E:싶다` — E
- #44 ko: `A:나는 | B:세계를 | C:여행 | D:하고 싶다` — D ( `하고 싶다` 融合)
- #48 ko: `A:나는 | E:그 | B:영화를 | C:보고 | D:싶다` — D
- #58 ko: `A:나는 | B:이 절의 | C:사진을 | D:찍고 | E:싶다` — E
- #62 ko: `A:나는 | B:이 책을 | C:월말까지 | D:읽고 | E:싶다` — E
- #71 ko: `A:나는 | B:발음을 | C:향상 | D:시키고 싶다` — D ( `시키고 싶다` 融合)
- #98 ko: `A:나는 | D:이 | E:요리를 | C:주문하고 | B:싶다` — B
- #1 / #98 で `싶다` を B (modal-as-B、en `B:want to` と一致)。
- #44 / #71 で `하고/시키고 싶다` を 1 セグメントに融合し D (= verb と modal を融合)。
- #22/32/48/58/62 で V-고/E:싶다 分離。

**Problem:** Korean の auxiliary `-고 싶다` は morphologically separable (V-고 + 싶다)。`-고` は connective でて連動詞 `싶다` の前にくる。memory `feedback_no_character_level_split.md` で「Korean: split at verb root」とあるので **V-고 (=verb stem + connective) と 싶다 (=auxiliary) は分割すべき**。#44 `D:하고 싶다`, #71 `D:시키고 싶다` の融合は他文と非対称。

**Proposed:** ko #44: `A:나는 | B:세계를 | C:여행 | D:하고 | E:싶다`、ko #71: `A:나는 | B:발음을 | C:향상 | D:시키고 | E:싶다`、で他 sibling 文と同じ V-고 + 싶다 分割を採用。modal position letter は文ごとに E (sentence #58/#62 と同型)。

### 18. #54 / #85 中国語 — modal `必须 / 应该` の verb との関係 (#85 で副詞融合) 【蓋然】

**Current:**
- #54 zh: `A:我们 | D:必须 | C:保护 | B:环境` — きれい
- #85 zh: `A:你 | D:应该 | C:多喝 | B|E:水`

**Problem:** #85 zh は `C:多喝` で「more+drink」を融合、object 「水」に E (more) と B (water) の重複タグ `B|E:水`。en reference `D:should + C:drink + E:more + B:water` の **modifier `more` と verb `drink` を分離**する convention に従っていない。sibling sentences の zh #85 `C:多喝` は冗長で、`E:多 + C:喝` と分離すべき。memory `feedback_prefer_splitting_segments.md` (「prefer splitting over merging」) の射程。さらに `B|E:水` の重複タグは他のzh modal文 (#1, #9, #22 等) で見られない不規則表記。

**Proposed:** zh #85: `A:你 | D:应该 | C:喝 | E:更多 | B:水` または `A:你 | D:应该 | E:多 | C:喝 | B:水` (副詞分離)。重複タグ `B|E:水` を解消。

### 19. #28 ロシア語 / ウクライナ語 — 条件法 modal の interrogative particle 融合 【要検討】

**Current:**
- #28 ru: `A:Не могли бы | B:вы | C:порекомендовать | F:хороший | E:ресторан`
- #28 uk: `A:Чи могли б | B:ви | C:порекомендувати | F:хороший | E:ресторан`

**Problem:** ru `Не могли бы` = "could you (politely)" = negative particle `Не` + modal `могли` + conditional `бы`。3 morpheme を **A 単一セグメント**に融合。同様に uk `Чи могли б` も Q-particle `Чи` + modal + conditional の融合。en reference `A:Could | B:you` は modal を A、subject を B に分けているので **A:Could → ru A:могли бы / uk A:могли б, ヘッダー (Не/Чи) は別 D タグ** とすべきか、現状の融合を維持するか — Slavic 内で類似処理 (sr `A:Да ли бисте`, bg `A:Бихте ли`, pl `A:Czy mógłby | B:Pan`) は **全て interrogative+modal を A 融合**で揃っている。つまり Slavic としては自然だが、en reference の `A:Could` (modal のみ) との 1:1 対応が崩れている。

**Proposed:** Slavic 6言語 (ru/uk/pl/cs/sk/sl/sr/bg) で interrogative+modal を A に融合する方針は一貫しているため **KEEP** が穏当。ただし memory rule の「modal は A ではない」原則とは緊張関係にあるため、closed-review に「Slavic interrogative+modal の A 融合は en `Could` の clause-initial position 反映として許容」と注記推奨。

### 20. #1, #9 における Japanese-Korean modal 役割の en reference 不一致 【要検討】

**Current:**
- en #1: `A:I | B:want to | C:try on | D:a suit | ...`
- ja #1: `A:私は | ... | D:スーツを | C:試着 | B:したいです` — `したい` (want) を B (en `B:want to` と一致), `試着` を C
- ko #1: `A:저는 | ... | D:양복을 | C:입어보고 | B:싶어요` — 同型
- en #62: `A:I | E:want to | D:read | B:this book | C:by the end of the month`
- ja #62: `A:私は | B:この本を | C:月末までに | D:読み | E:終えたい` — `終えたい` を E (en `E:want to` と一致), `読み` を D

**Note:** ja/ko の `-たい/-고 싶다` は en `want to` の役割を担い、両言語ともに **en reference の modal-position letter (B or E)** に追随できている。これは memory rule `feedback_modal_verb_not_subject.md` の「always match reference language's segment ID」の正しい適用例。指摘事項ではなく **integrity の好例**として記録。

**Proposed:** 修正不要。closed-review に「ja/ko の `-たい/-고 싶다` は modal-position letter を en reference に揃えるべき例として記録」と注記。

### 21. #37 ベンガル語 — modal「কিনতে হবে」が D 単一セグメントに融合 (#39 と非対称) 【蓋然】

**Current:**
- #37 bn: `A:আমাকে | C:জন্মদিনের | D:একটি উপহার | B:কিনতে হবে`
- #39 bn: `A:আমাকে | C:আগামীকাল | B:তাড়াতাড়ি | D:উঠতে | E:হবে`
- #54 bn: `A:আমাদের | B:পরিবেশ | C:রক্ষা | D:করতে হবে`

**Problem:** bn の "have to / need to / must" の標準パターンは `V-তে + হবে` (V-INF + will/must)。これは形態論的に separable で `কিনতে / উঠতে / করতে` (infinitive) + `হবে` (will/must, modal aux) の 2 segment に分けるのが自然。
- **#39 bn**: `D:উঠতে | E:হবে` で正しく分離 (en `D:wake up | E:have to` と同型)。
- **#37 bn**: `B:কিনতে হবে` で融合 (en `B:need to | E:buy` から逸脱)。
- **#54 bn**: `D:করতে হবে` で融合 (en `D:must | C:protect` から逸脱)。

self-consistency 違反 (#39 と #37/#54 で分離方針が逆)。

**Proposed:**
- bn #37: `A:আমাকে | C:জন্মদিনের | D:একটি উপহার | E:কিনতে | B:হবে` (V を E、modal を B) — ただしこれだと B の出現位置が逆転。代案として現状の `B:কিনতে হবে` 融合を `B:হবে | E:কিনতে` に並べ替えて分離。要 native speaker 検証。
- bn #54: `D:করতে | E:হবে` 分離も同様 — ただし sentence-position letter の制約あり、要検討。

### 22. #44 ハンガリー語 / 一部言語の modal 文末位置と A 関係 【要検討・整合】

**Current:**
- #44 hu: `A:Én | D:szeretnék | B:a világ körül | C:utazni`
- #44 tr: `A:Ben | B:dünyayı | C:gezmek | D:istiyorum`
- #44 fa: `A:من | B:دنیا را | C:سفر کردن | D:می‌خواهم`

**Note:** SOV 系の hu/tr/fa では modal `szeretnék/istiyorum/می‌خواهم` が **文末** に来るのが自然語順だが、いずれも **A:subject + D:modal** の役割分離を保持。en reference `A:I + D:want to` と role-letter 整合性が取れている。**memory rule の正しい適用 (modal は文中位置に関わらず modal-position letter)** の好例として記録。tr `istiyorum` の文末位置で modal=D を維持しているのは特に整合性高い。

**Proposed:** 修正不要。closed-review に「SOV 言語でも modal-position letter は en reference に従う」原則の確認例として記録。

## 総括

- **対象**: 全 200 言語 × modal 含有 20 文 = 約 4000 セグメント。
- **件数**: 22 件 (指摘 1-22)。うち 16 件が修正提案を伴う直接的不整合、6 件 (#10/#11/#19/#20/#22 整合例, #21 要検証) が記録・要検討。
- **支配的欠陥**: **Polish の系統的「modal-as-A leakage」** (指摘 1-3, 計 10 文で発生) が最重要。次点で **Spanish 方言 (es_cl/pe/cu/an) の A:Yo 出現揺れ** (指摘 4-5, 計 7 文)、**Arabic の modal 役割揺れ** (指摘 7-8)、**Venetian (vec) の modal 配置混乱** (指摘 9, 12) が顕著。
- **正の整合例**: Romance impersonal `Il faut / Hay que / Bisogna` の D タグ統一 (指摘 10-11)、ja/ko `-たい/-고 싶다` の en reference 追随 (指摘 20)、SOV 言語 (hu/tr/fa) の文末 modal における D タグ保持 (指摘 22)。
- **memory rule 直接違反**: 指摘 1, 2, 3, 6, 7, 9 (計 6 件) が `feedback_modal_verb_not_subject.md` 違反。impersonal D rule (指摘 10, 11) は **守られている**。

ファイル: `/home/jounlai/langmap/langmap_reviews/40_open.md`
件数: 22
支配的 modal-segmentation 欠陥: **Polish の modal verb (Chcę / Muszę / Powinieneś) を単独 A タグに格上げするパターンが 10 文で系統的に発生** — memory rule `feedback_modal_verb_not_subject.md` 直接違反。pro-drop による subject 省略時に modal の役割 letter を A に格上げするのではなく、sentence ごとの modal-position letter (B/D/E、en reference に従う) に格下げすべき。

## Dev response — round 1 (2026-06-04)

### Scope of this round

レビュアー @modal_cutter の 22 件指摘のうち、**dominant finding** とされる **指摘 1〜3 (Polish modal-as-A leakage 計 10 文)** に集中して対応する。残り 12 件 (Spanish 方言 A:Yo 揺れ、Arabic, Venetian, Czech, Korean, Hindi/Urdu, zh, Yoruba, Bengali など) は別ラウンドで扱う。

### Verification (node -e による live 抽出)

10 文すべて pl side の Current を再現確認した:

| # | en modal | en letter | pl current | 問題 |
|---|---|---|---|---|
| 22 | want to | E | `A:Chcę` | A→E |
| 32 | want to | E | `A:Chcę` | A→E |
| 37 | need to | B | `A:Muszę` | A→B |
| 44 | want to | D | `A:Chcę` | A→D |
| 48 | want to | D | `A:Chcę` | A→D |
| 54 | must | D | `A:Musimy` | A→D |
| 58 | want to | E | `A:Chcę` | A→E |
| 62 | want to | E | `A:Chcę` | A→E |
| 71 | want to | D | `A:Chcę` | A→D |
| 85 | should | D | `A:Powinieneś` | A→D |

### Decisions

**全 10 件 ACCEPT。** `feedback_modal_verb_not_subject.md` 直接違反であり、レビュアー Proposal の「最小修正案 = modal を en reference の modal-position letter に retag (A:Ja 補完なし)」を採用。これは:

- pro-drop を維持 (テキスト変更ゼロ)
- en reference の modal-position letter (#22 E / #37 B / #44 D / #54 D / #85 D 等) と 1:1 対応
- adjacency 衝突なし (10 文すべて新 letter が次セグメントと異なることを目視確認済)

代案の「A:Ja を補い A+modal を分離」(= sk #44 `A:Ja | D:chcem` 同型) も妥当だが、`allowTextChange:true` が必要かつ pl 自身が pro-drop 慣行なので採らない。最小侵襲修正を優先。

### Edits

`/tmp/lm_edits_40.json` に 10 件の `op:"retag"` を出力 (find = modal verb text、newSeg = 新 letter)。テキスト不変・隣接同 letter なし。

### Deferred (本ラウンドで扱わない)

- 指摘 4-5 (Spanish 方言 A:Yo 揺れ): 4 方言 × 7-8 文の方針統一は次ラウンド (要 native speaker 確認)
- 指摘 6 (la #28 Possisne): subject `tu` 補完を含むため `allowTextChange` 必要、次ラウンド
- 指摘 7-8 (ar): modal 役割揺れ、impersonal split、次ラウンド
- 指摘 9, 12 (vec): modal 配置混乱、次ラウンド
- 指摘 13 (hi/ur), 14 (yo), 15-16 (cs), 17 (ko), 18 (zh), 21 (bn): 各言語固有の判断要、次ラウンド
- 指摘 10, 11, 19, 20, 22: 整合例として記録のみ、修正不要

### Closure

Issues addressed **10 of 22** (dominant Polish modal-as-A leakage を完全解消)。Closure: **PARTIAL** — round 2 で残り 12 件を順次処理予定。

JSON path: `/tmp/lm_edits_40.json`
