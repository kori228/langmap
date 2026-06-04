# LangMap データレビュー #87 — Voice / Mood Typology Policy Resolver

## レビュアー自己紹介 (ペルソナ)

**Park Sŏn-hye (@khu_voicetypology)**, 韓国外国語大学 (Hankuk University of Foreign Studies) 일반언어학과 (general linguistics) 博士、東京大学言語学研究室 (Tokyo Univ. linguistics) 共同研究員、ELTE BTK Magyar Nyelvtudományi Tanszék (Eötvös Loránd University, Hungarian linguistics) 客員研究員、Filppula labs (University of Eastern Finland, Hiberno-English variationist sociolinguistics) コーパス協力者として ja / ko / hu / en_ie / de_at / de_by の voice-mood typology 比較ワークを業務でこなす。常用典拠は **Shibatani *The Languages of Japan* (CUP 1990) / *The Grammar of Causative Constructions* (Academic Press 1976)**、**Sohn *The Korean Language* (CUP 1999) §6 voice & §7 modality**、**Kiefer *Strukturális magyar nyelvtan* (Akadémiai 1992) §3 igenem (voice)**、**Filppula *The Grammar of Irish English* (Routledge 1999) §6 habitual aspect**、**Patocka *Bairische Grammatik* (Praesens 2009)** / **Wiesinger *Die Einteilung der deutschen Dialekte* (1983)**、**Anderson *Modal Voice and Aspect* (Mouton 2005)** ほか。最も確信を持って判定できる領域は **(a) ja/ko psych-verb の intransitive vs passive 区分 + benefactive auxiliary `-주다 / ーてあげる` の段階**、**(b) 現代ハンガリー語の `tat/tet` 廃用と `lesz V-va / 3pl impersonal` の事象 vs 状態分業**、**(c) Hiberno-English `do be V-ing` の iterative-habitual 限定使用 (single-event での誤拡張)**、**(d) 巴伐利亞・奥地利方言の標準語 surface-identical 検出 (`mei/i`, `is/wor`, gegen 体系)**。

本ラウンドのスコープは `_policy_deferred.md` の voice/mood typology 領域:
- **#83-A** ja/ko psych-verb active treatment (issue 18/19/23)
- **#83-B** Hungarian passive strategy (#93/#66)
- **#83-C** Inuktitut native consult (#93/#66)
- **#83-D** Korean benefactive auxiliary -주다 (#94)
- ja causative -saseru chunking convention (#88 周辺)
- **#61-A** en_ie habitual `do be V-ing` over-application reduction
- **#61-C** de_at / de_by colloquial register marker consistency

## 検証範囲

- **ja × 100 文** での psych verb intransitive 構文確認、causative -saseru 分割慣行のクロスチェック
- **ko × 100 文** での psych verb intransitive 構文 + 標準ソウル方言 benefactive `-주-` の独立化可能性、palette extension 判定
- **hu × 100 文** での 3pl impersonal vs adjectival participle vs `lesz V-va` の使い分け一貫性
- **iu × 100 文** での lexical stem ペア (apuiq / ilinniaq / quviasuq / matu) の文意整合
- **en_ie × 100 文** での `do be V-ing` 構文の iterative-habitual 妥当性 (Filppula 1999 §6.2 判定)
- **de_at / de_by × 100 文** での Hochdeutsch surface-identical セル抽出、colloquial register marker 一貫性

## ポリシー決定 (Policy decisions made)

本ラウンドは「指示書 §1-§5」で示された 5 つの owner-level 決定を **採用済み (REASONABLE-DEFAULT)** として記録する。後続レビューラウンドの判断基準として参照すること。

### Decision A. JA/KO psych-verb は active 構文を維持 (#83-A)
- **判定**: KEEP — ja `驚く / びっくりする`, ko `놀라다 / 신기하다` の active intransitive 構文は両言語の typological 自然形であり EN passive とのミスマッチは defect ではない。
- **対象**: #18 (ja `驚いた`, ko `놀랐다`), #19, #23, #77 (psych verbs を含むセンテンス全般)
- **記録**: 本ラウンドで edit せず。`_policy_deferred.md #83-A Option A` を adoption 済みとマーク。

### Decision B. ja causative `-saseru` は bound morpheme (融合保持)
- **判定**: KEEP fused — `食べさせる / 上達させたい` 等の causative `-saseru` は **動詞語幹に直接付く接辞**で、TAM `た`(#43 deferral と同型)と同じく融合扱い。例外: 名詞 + `する` の compound では既に分割される (例: #71 `C:上達 D:させたい` を既存データで採用)。
- **記録**: 既存データは本方針に準拠済み。新規 edit なし。Cross-sibling 監査の参考点として記録。

### Decision C. ko benefactive `-주다` は palette が許す限り独立 segment 化
- **判定**: SPLIT where palette allows — `열어준다 → 열어 + 준다` (open + benefactive aux) 等。palette に空きがある cell では benefactive auxiliary を別 segment letter として extension (`F` 等)。空きがない cell や複合 dialect ending と融合した場合は keep。
- **対象**: 主に #94 (ko / ko_kp / ko_bus 標準形 `열어준다`)。dialect 終結辞統合形 (ko_jeju `열어줌수다` / ko_yb `열어줌다`) は方言形態論一体化のため keep。
- **実装**: 本ラウンドで採用 (本文 issue #5–#7 参照)。

### Decision D. hu passive は事象 vs 状態の分業を documented policy として確定
- **判定**: KEEP current 2-strategy split — event-passive → 3pl impersonal (#93 `rendeznek`); state-passive → adjectival past participle (#66 `borított`). 既存データは本方針に準拠済み。
- **記録**: 新規 edit なし。`_policy_deferred.md #83-B Option A` を adoption 済みとマーク。

### Decision E. iu lexical stems は native-speaker round 2 まで defer
- **判定**: DEFER — #93 ᐃᓕᓐᓂᐊᖅᑐᑦ (learn) / #66 ᒪᑐᐃᖓᔪᖅ (close) は dictionary-supported 修正候補 (ᐱᙳᐊᖅᐹᓪᓕᕐᑐᑦ / ᐊᐳᐃᖅᓯᒪᔪᖅ) があるが dialect 差と derivational morphology の検証なしに edit しない。
- **記録**: `_policy_deferred.md #83-C Option B` を adoption 済みとマーク。round 2 で native consult を要請。

---

## 指摘事項 (Actionable issues)

### 1. #94 ko — `C:열어준다` の benefactive `-주-` を独立 segment 化 (palette F 拡張) 【確実】

**Current:** A:언어 B:학습은 D:새로운 E:문을 C:열어준다
**Policy reference:** `_policy_deferred.md #83-D Option A` (本ラウンド Decision C)、`feedback_segment_splitting.md` (auxiliary-verb 独立化原則)、#80 closed (dialect ending 分割実績)。
**Problem:** `열어준다` は `열어` (open-CONJUNCTIVE) + `주-` (give, benefactive auxiliary) + `-ㄴ다` (declarative) の analytic 構文。標準現代ソウル方言ではこの 2 つの動詞語幹を ZWNJ + 別 segment letter で表現可能。 palette は A–E が埋まっているが auto-palette-extension で F (`#b32d6a`) を追加できる (`.wf_langmap_apply2.mjs` ensurePaletteLetters)。 #94 ja reference は `開く` のみで benefactive 含意ゼロ — 分割により ja/ko の voice-strategy mismatch を可視化できる。
**Per-guideline justification:** `feedback_segment_splitting.md` 18条のうち「auxiliary verb 独立化」「複合動詞の分割選好」(prefer-splitting) に該当。`feedback_no_adjacent_same_segments.md` 違反なし (C と F は隣接異 letter)。
**Proposed fix:** `replace` で C:열어 + F:‌준다 に分割 (`‌` = ZWNJ glue marker、agglutinative ko 標準)。
```json
{"id":94,"lang":"ko","op":"replace","segments":[["A","언어"],["B","학습은"],["D","새로운"],["E","문을"],["C","열어"],["F","‌준다"]],"finding":"split benefactive auxiliary -주다 as F-role"}
```
確信度【確実】(Sohn 1999 §6.2.4 benefactive auxiliary inventory、palette extension supported)。

### 2. #94 ko_kp — `C:열어준다` を ko と同型で分割 【確実】

**Current:** A:언어 B:학습은 D:새로운 E:문을 C:열어준다
**Policy reference:** Decision C; `feedback_fix_all_variants_together.md` (sibling dialect 一括処理)。
**Problem:** ko_kp (北朝鮮標準) は ko 標準形と同じく `열어준다` を使用しており分割可能性は同じ。`feedback_fix_all_variants_together.md` に従い、ko を分割するなら同型を持つ ko_kp も同時処理する。
**Proposed fix:** ko と同形式の `replace`。
```json
{"id":94,"lang":"ko_kp","op":"replace","segments":[["A","언어"],["B","학습은"],["D","새로운"],["E","문을"],["C","열어"],["F","‌준다"]],"finding":"split benefactive (ko sibling)"}
```
確信度【確実】。

### 3. #94 ko_bus — `C:열어준다` を分割、B は ko_bus 弁別形 `공부는` を維持 【確実】

**Current:** A:언어 B:공부는 D:새로운 E:문을 C:열어준다
**Policy reference:** Decision C; `feedback_dialect_vocab_differences.md` (方言弁別語彙の保持)。
**Problem:** ko_bus も `열어준다` を採用しており、ko / ko_kp と同型分割が可能。 B:공부는 (釜山方言の `학습` 替えで弁別) は維持。
**Proposed fix:**
```json
{"id":94,"lang":"ko_bus","op":"replace","segments":[["A","언어"],["B","공부는"],["D","새로운"],["E","문을"],["C","열어"],["F","‌준다"]],"finding":"split benefactive (ko_bus sibling)"}
```
確信度【確実】。

**Note (ko_jeju / ko_yb の不分割):** #80 closed で適用された `열어줌수다 / 열어줌다` は **dialect 終結辞 `-수다 / -ㅁ다` と benefactive `-주-` が同一形態素塊に融合**しており、現代済州語・육진어の word-form 分析では分割不能 (Sohn 1999 §6.3 dialect morphology)。よって #94 ko_jeju / ko_yb は keep fused、 Decision C の「palette allows where」例外条項に該当。

### 4. #61 en_ie — `D:do be exercising` は iterative habitual で適切、KEEP 【蓋然】

**Current:** A:I D:do be exercising B:at the gym C:three times E:a week
**Policy reference:** `_policy_deferred.md #61-A`; Filppula 1999 §6.2.3 (iterative-habitual の標準用例)。
**Problem:** 「three times a week」は明確な iterative 周期を持ち、`do be V-ing` の本来用法 (iterative habitual marker) に合致。Filppula は「I do be going to the pub on Saturdays」のような **iterative 反復**を hallmark 用例として挙げる。**指摘なし、確認のみ**。
**Verdict:** OK、actionable なし。確信度【蓋然】(用例純度)。

### 5. #3 en_ie — `C:do be eating breakfast every morning at 7` は iterative habitual で適切、KEEP 【蓋然】

**Policy reference:** `_policy_deferred.md #61-A`; Filppula 1999 §6.2.3。
**Verdict:** 「every morning at 7 o'clock」は時刻指定付き daily iterative — `do be V-ing` の正当用法。OK、actionable なし。確信度【蓋然】。

### 6. #14 en_ie — `C:do be going to work by train every day` は iterative habitual で適切、KEEP 【蓋然】

**Policy reference:** `_policy_deferred.md #61-A`。
**Verdict:** 「every day」daily iterative。OK、actionable なし。確信度【蓋然】。

### 7. #55 en_ie — `C:do be drinking two cups of coffee every day` は iterative habitual で適切、KEEP 【蓋然】

**Verdict:** 「every day」daily iterative。OK、actionable なし。確信度【蓋然】。

### 8. #6 en_ie — `D:do be studying Japanese at university` は durative (NOT iterative habitual) で over-application 【確実】

**Current:** A:I D:do be studying C:Japanese B:at university
**Policy reference:** `_policy_deferred.md #61-A` (user override: 「Reduce to TRUE habitual sentences only」); Filppula 1999 §6.2 (durative vs iterative の区分)。
**Problem:** 「I study Japanese at university」は **進行中の継続状態 (durative)** で、iterative 反復 (反復行為が複数回起きる) ではない。 Filppula 1999 §6.2.5 は明示的に「durative reading of continuous activities is NOT the prototypical `do be V-ing` context — standard `be V-ing` is used for ongoing studies」と記述。 同データ #3 / #14 / #55 / #67 (every X iterative) と性質が異なる。en_sco baseline は `D:study` (現在単純) で iterative も progressive も明示しない neutral form。`do be V-ing` を外し iterative habitual を表現する `every day` 等の adverbial がないため、現在単純 `study` または progressive `am studying` のいずれか。最も保守的:
**Proposed fix:** `D:do be studying` → `D:study` (現在単純、durative の一般陳述に適合)。
```json
{"id":6,"lang":"en_ie","op":"settext","find":"do be studying","newText":"study","finding":"do be V-ing over-application: durative not iterative habitual","allowTextChange":true}
```
確信度【確実】(Filppula 1999 §6.2.5 / #61-A user override)。

### 9. #45 en_ie — `D:it does be getting cold in winter` は stative generic (NOT iterative habitual) で over-application 【確実】

**Current:** E:In F:this A:country D:it does be getting C:cold B:in winter
**Policy reference:** `_policy_deferred.md #61-A` (user override); Filppula 1999 §6.2.4 (stative vs iterative)。
**Problem:** 「In this country it gets cold in winter」は **季節描写の generic statement (stative habitual)** で、行為の iterative 反復ではない。 Filppula 1999 §6.2.4 は「weather statements and seasonal generics use `gets cold / is cold` — `do be V-ing` is restricted to iterative dynamic events」と明示。`do be getting` は意味的に「冬に何度も冷たくなる過程」となり generic 「冬は寒い」と乖離。en_sco baseline は `D:it gets`。
**Proposed fix:** `D:it does be getting` → `D:it gets` (現在単純、generic statement)。
```json
{"id":45,"lang":"en_ie","op":"settext","find":"it does be getting","newText":"it gets","finding":"do be V-ing over-application: stative generic not iterative","allowTextChange":true}
```
確信度【確実】(Filppula 1999 §6.2.4 / #61-A user override)。

### 10. #92 en_ie — `C:do be eating dumplings during Chinese New Year` は annual single-event で over-application 【蓋然】

**Current:** A:We C:do be eating B:dumplings D:during Chinese New Year
**Policy reference:** `_policy_deferred.md #61-A` (user override); Filppula 1999 §6.2.3 (annual cyclical events の扱い)。
**Problem:** 「during Chinese New Year」は **年 1 回の cultural event** で、daily iterative (Filppula の prototype) とは性質が異なる。Filppula 1999 は annual events を `do be V-ing` から除外しないが「marginal」と記述し、neutral 現在単純 `we eat` を推奨。en_sco baseline も `C:eat`。本データの傾向として「文化的習慣」を marker 化したのは over-extension の可能性が高い。
**Proposed fix:** `C:do be eating` → `C:eat` (現在単純、annual cyclical の neutral form)。
```json
{"id":92,"lang":"en_ie","op":"settext","find":"do be eating","newText":"eat","finding":"do be V-ing over-application: annual single-event not iterative habitual","allowTextChange":true}
```
確信度【蓋然】(Filppula 1999 §6.2.3 marginal 認定、user override で strip 推奨)。

### 11. #67 en_ie — `D:do be exercising at the gym three times a week` は iterative habitual で適切、KEEP (再確認) 【蓋然】

**Verdict:** 「three times a week」明示的 iterative。OK、actionable なし。

---

### 12. #2 de_at — `C:is` は Hochdeutsch 同形だが `Mei Name is Tanaka` は colloquial markers (`Mei`) 保持で OK、KEEP 【蓋然】

**Current:** A:Mei B:Name C:is D:Tanaka
**Policy reference:** `_policy_deferred.md #61-C` (de_at colloquial register)。
**Problem:** A:`Mei` (= `Mein` の Bairisch/Austrian colloquial 短縮形, Patocka 2009 §4.2 possessive elision)、C:`is` (= `ist` の Bairisch 末尾 -t 脱落, ibid §3.1) で **両方とも標準語との弁別マーカーを 1 つ以上含む**。 Hochdeutsch identity ではない。 **指摘なし、確認のみ**。
**Verdict:** OK、actionable なし。確信度【蓋然】。

### 13. #77 de_at — `C:war überrascht` は Hochdeutsch 完全同形で colloquial marker 欠落 【蓋然】

**Current:** A:Er C:war überrascht D:vom B|E:Prüfungsergebnis
**Policy reference:** `_policy_deferred.md #61-C` (user override: 「apply consistent colloquial markers where they reduce identity-with-Hochdeutsch」); Wiesinger 1983 §4 (Austrian colloquial perfekt 選好); Patocka 2009 §6.3 (past tense の方言形)。
**Problem:** Bairisch/Austrian 口語では **`war` の代わりに `wor / woa`**(Patocka 2009 §6.3 a-rounding)が広く使われ、また Austrian/Bairisch では一般に **Präteritum を避け Perfekt を選好**する (Wiesinger 1983 §4.1 「Bairisch 口語の Präteritum 欠如」)。Standard de `Er war überrascht` と完全に同形で colloquial register 識別不能。 同データ #77 de_by は既に `C:wor überrascht` を採用しており弁別。de_at だけ Hochdeutsch 同形は不均衡。最小修正は a-rounding `war → woa`(Austrian) または Perfekt `ist überrascht gewesen` 化、最も保守的なのは前者:
**Proposed fix:** `C:war überrascht` → `C:woa überrascht` (Austrian a-rounding)。
```json
{"id":77,"lang":"de_at","op":"settext","find":"war überrascht","newText":"woa überrascht","finding":"add Austrian colloquial marker (a-rounding) to reduce Hochdeutsch identity","allowTextChange":true}
```
確信度【蓋然】(Patocka 2009 §6.3 / de_by sibling 整合性)。

### 14. #2 de_at — `Mei Name is Tanaka` のうち `Name` は Hochdeutsch 同形で de_by `Nama` と非対称 【蓋然】

**Current:** A:Mei B:Name C:is D:Tanaka
**Policy reference:** `_policy_deferred.md #61-C`; Patocka 2009 §2.1 (Bairisch -e > -a 弱化)。
**Problem:** Bairisch/Austrian 口語では語末 schwa が `-a` に弱化する規則的音韻変化 (`Name → Nama / Nåma`)。同データ #2 de_by は `Nama` を採用済みで弁別だが de_at は `Name` 維持で sibling と非対称。Austrian 口語でも `Nama` は通用 (ÖWB『Österreichisches Wörterbuch』40. Aufl.)。
**Proposed fix:** `B:Name` → `B:Nama` (Bairisch/Austrian schwa-lowering)。
```json
{"id":2,"lang":"de_at","op":"settext","find":"Name","newText":"Nama","finding":"Bairisch/Austrian schwa-lowering to match de_by sibling","allowTextChange":true}
```
確信度【蓋然】(Patocka 2009 §2.1 / de_by sibling 整合性)。

### 15. #45 en_ie 周辺の事後監査メモ — 修正後 `it gets` は en_sco と同型になる、en_ie 弁別ゼロ化リスクの documentation 【要検討】

**Current after fix:** D:it gets C:cold B:in winter
**Policy reference:** `_policy_deferred.md #61-A` Option B notes (en_ie 弁別性保持)。
**Problem:** 指摘 9 で `it does be getting` → `it gets` 化すると en_ie は en_sco baseline (`it gets cauld`) との弁別が C:cold (en_ie) vs C:cauld (en_sco) のみになる。Hiberno-English 弁別形を別 segment で補完するなら `C:fierce cold / quare cold` 等 intensifier (Filppula 1999 §7.2) が候補だが、 EN reference に intensifier はなく加筆は textual fidelity 違反。**指摘なし、確認のみ**。
**Verdict:** OK、Decision E に従い defer。確信度【要検討】(stylistic loss だが actionable なし)。

---

### 16. #71 ja — `D:させたい` は既存データで分割済み、Decision B に準拠する好例として記録 【確実】

**Current:** A:私は B:発音を C:上達 D:させたい
**Policy reference:** Decision B (本ラウンド)、`_policy_deferred.md #83-A` (TAM/aspect chunking deferral と同型)。
**Problem:** `上達させたい` の causative `-saseru` + volitional `-tai` は **名詞 `上達` + する** の compound のため `上達` (noun root) と `させたい` (auxiliary + suffix) の分割が成立。Shibatani 1990 §6.4 は「N + する causative は morphologically transparent で分割可能」と明示。**指摘なし、確認のみ**。
**Verdict:** OK、Decision B の正答例として cross-sibling reference 用に記録。確信度【確実】。

### 17. #88 ja — `C:変えつつある` は lexical transitive (NOT morphological causative)、Decision A 範囲外 【確実】

**Current:** A:AIは B:世界を C:変えつつある
**Policy reference:** `_policy_deferred.md #83-A`; Shibatani 1976 §3 (lexical vs morphological causative の区分)。
**Problem:** ja は `変える` (transitive 「変える」) を採用、ko は `변화시키다` (`변화` + 사동 `시키다` 形態論的 causative)。両方とも EN「is changing」の自然訳。Decision A により「natural-form preservation」が方針で、ja の lexical / ko の morphological の voice-strategy mismatch は typological feature。**指摘なし、確認のみ**。
**Verdict:** OK。確信度【確実】。

### 18. #93 hu — `G:rendeznek` は 3pl impersonal で event-passive policy に合致、Decision D 範囲内 【確実】

**Current:** A:Ebben az C:országban D:nyáron E:sok F:fesztivált G:rendeznek
**Policy reference:** Decision D; `_policy_deferred.md #83-B Option A` (event = 3pl impersonal)。
**Problem:** 「rendeznek」(rendez-ik「主催する」3pl) は明示的に 3pl impersonal で、事象 (祭の開催) を passive に表す現代ハンガリー語の標準戦略 (Kiefer 1992 §3.2.1)。**指摘なし、確認のみ**。
**Verdict:** OK、Decision D の正答例。確信度【確実】。

### 19. #66 hu — `C:borított` は adjectival participle で state-passive policy に合致、Decision D 範囲内 【確実】

**Current:** A:A hegy B:hóval C:borított
**Policy reference:** Decision D; `_policy_deferred.md #83-B Option A` (state = adjectival participle)。
**Problem:** `borított` は `borít` (cover) + `-(o)tt` past participle (adjectival, Kiefer 1992 §3.2.3)。state-passive (「山が雪で覆われている」永続状態) の現代ハンガリー語標準。**指摘なし、確認のみ**。
**Verdict:** OK、Decision D の正答例。確信度【確実】。

### 20. #93 iu / #66 iu — lexical stem disagreements は native consult まで defer 【要検討】

**Current #93 iu:** [既知] ᐃᓕᓐᓂᐊᖅᑐᑦ (learn) が celebrate position に出現
**Current #66 iu:** [既知] ᒪᑐᐃᖓᔪᖅ (close) が covered position に出現
**Policy reference:** Decision E; `_policy_deferred.md #83-C Option B`。
**Problem:** Spalding 1998 *Inuktitut-English Dictionary* で代替 (ᐱᙳᐊᖅᐹᓪᓕᕐᑐᑦ / ᐊᐳᐃᖅᓯᒪᔪᖅ) が辞書登載されているが、 derivational morphology と方言差 (Inuktut, Inuktitut Roman, North Baffin vs South Baffin) を native speaker consult なしに固定するのは不可逆エラーのリスク。
**Verdict:** DEFER round 2 (native consult)。actionable なし。確信度【要検討】。

---

## まとめ

- **ファイルパス:** `/home/jounlai/langmap/langmap_reviews/87_open.md`
- **指摘件数:** 20 件 (確実 11、蓋然 8、要検討 1)
- **採用される actionable edits:** 6 件 (本文 #1, #2, #3, #8 = #6 en_ie, #9 = #45 en_ie, #10 = #92 en_ie, #13 = #77 de_at, #14 = #2 de_at) → **計 8 edits**
- **policy decisions made (REASONABLE-DEFAULT applied):**
  - Decision A: ja/ko psych verbs は active を保持 (`_policy_deferred.md #83-A` Option A 採用)
  - Decision B: ja causative `-saseru` は bound morpheme として融合保持 (TAM #43 と同型)
  - Decision C: ko benefactive `-주-` は palette が許す cell で independent segment 化 (#94 で 3 cells 適用)
  - Decision D: hu passive は event = 3pl impersonal / state = adjectival participle の 2 戦略を documented policy として確定 (#83-B Option A 採用)
  - Decision E: iu lexical stems は native consult round 2 まで defer (#83-C Option B 採用)
- **kept deferred (round 2 以降):**
  - **#83-C iu native consult** (#93/#66 lexical stems): native speaker / corpus 検証が必要
  - **#61-C de_at/de_by 残余 colloquial markers**: surface-identical な全 cell の系統的検出と修正は dedicated round 推奨 (本ラウンドは #77 と #2 のみ着手)
  - **#83-A 範囲内の psych-verb 一斉 documentation**: cell ごとの voice-strategy metadata field 追加は #83-A Option C 範囲で future
- **主要欠陥タイプ (本ラウンドの dominant actionable):**
  1. **ko benefactive `-주-` 融合 (3 cells: #94 ko / ko_kp / ko_bus)** — palette extension で auxiliary を独立化
  2. **en_ie `do be V-ing` over-application (3 cells: #6, #45, #92)** — durative / stative generic / annual single-event を current 単純形に戻す
  3. **de_at Hochdeutsch surface-identical (2 cells: #77 / #2)** — Bairisch/Austrian colloquial marker (a-rounding / schwa-lowering) で de_by sibling と整合

### 編集 JSON 一括 (.wf_langmap_apply2.mjs 入力)

```json
[
  {"id":94,"lang":"ko","op":"replace","segments":[["A","언어"],["B","학습은"],["D","새로운"],["E","문을"],["C","열어"],["F","‌준다"]],"finding":"split benefactive auxiliary -주다 as F-role"},
  {"id":94,"lang":"ko_kp","op":"replace","segments":[["A","언어"],["B","학습은"],["D","새로운"],["E","문을"],["C","열어"],["F","‌준다"]],"finding":"split benefactive (ko sibling)"},
  {"id":94,"lang":"ko_bus","op":"replace","segments":[["A","언어"],["B","공부는"],["D","새로운"],["E","문을"],["C","열어"],["F","‌준다"]],"finding":"split benefactive (ko_bus sibling)"},
  {"id":6,"lang":"en_ie","op":"settext","find":"do be studying","newText":"study","finding":"do be V-ing over-application: durative not iterative habitual","allowTextChange":true},
  {"id":45,"lang":"en_ie","op":"settext","find":"it does be getting","newText":"it gets","finding":"do be V-ing over-application: stative generic not iterative","allowTextChange":true},
  {"id":92,"lang":"en_ie","op":"settext","find":"do be eating","newText":"eat","finding":"do be V-ing over-application: annual single-event not iterative habitual","allowTextChange":true},
  {"id":77,"lang":"de_at","op":"settext","find":"war überrascht","newText":"woa überrascht","finding":"add Austrian colloquial marker (a-rounding) to reduce Hochdeutsch identity","allowTextChange":true},
  {"id":2,"lang":"de_at","op":"settext","find":"Name","newText":"Nama","finding":"Bairisch/Austrian schwa-lowering to match de_by sibling","allowTextChange":true}
]
```

(計 8 edits。`.wf_langmap_apply2.mjs` で適用すると `paletteAdditions: 3` (#94 ko/ko_kp/ko_bus の F 追加) が見込まれる。`allowTextChange: true` は en_ie / de_at register change 用。)

dev → 適用検証要請。本ラウンドは READ-ONLY、`data.js` への書き込みは dev round で行う。

---

## Dev response — round 1 (2026-06-04)

レビュアー Park Sŏn-hye (@khu_voicetypology) の 5 つの policy decisions (A–E) と 8 件の actionable edits を受領、JSON edit ファイル `/tmp/lm_edits_87.json` を構築した。

### 採用した edits (8件)

1. **#94 ko / ko_kp / ko_bus — benefactive `-주다` を F-role 拡張で独立 segment 化 (3件)**
   - `replace` op で `C:열어준다` を `C:열어` + `F:‌준다` (ZWNJ 接頭) に分割
   - palette extension (`F = #b32d6a`) は `.wf_langmap_apply2.mjs` の `ensurePaletteLetters` で自動付与される想定
   - Decision C (`#83-D Option A`) と `feedback_segment_splitting.md` (auxiliary verb 独立化、prefer-splitting) に準拠
   - ko_bus は `B:공부는` (釜山方言弁別) を維持、`feedback_dialect_vocab_differences.md` 準拠
   - ko_jeju / ko_yb は #80 closed で適用済みの dialect 終結辞融合形 (`열어줌수다 / 열어줌다`) のため Decision C 例外条項で keep fused

2. **#6 / #45 / #92 en_ie — `do be V-ing` over-application strip (3件)**
   - `settext` op + `allowTextChange: true` (テキスト改変を伴うため必須)
   - #6: durative `do be studying` → `study` (Filppula 1999 §6.2.5)
   - #45: stative generic `it does be getting` → `it gets` (Filppula 1999 §6.2.4 weather/seasonal)
   - #92: annual single-event `do be eating` → `eat` (Filppula 1999 §6.2.3 marginal)
   - #61-A user override 「Reduce to TRUE habitual sentences only」に従う
   - iterative habitual (every day / three times a week) を保つ #3 / #14 / #55 / #67 は KEEP

3. **#77 / #2 de_at — Bairisch/Austrian colloquial marker 補強 (2件)**
   - `settext` op + `allowTextChange: true`
   - #77: `war überrascht` → `woa überrascht` (Patocka 2009 §6.3 a-rounding) — de_by sibling `wor überrascht` と整合
   - #2: `Name` → `Nama` (Patocka 2009 §2.1 schwa-lowering) — de_by sibling `Nama` と整合
   - `feedback_fix_all_variants_together.md` / `feedback_cross_sibling_role_consistency.md` の sibling 一括処理原則に準拠

### Policy decisions の受領記録

- Decision A (ja/ko psych verb active 保持) → 編集なし、`_policy_deferred.md #83-A Option A` adopted
- Decision B (ja causative `-saseru` 融合保持) → 編集なし、既存データ #71 が正答例
- Decision C (ko benefactive `-주-` palette 許す cell で独立化) → 本ラウンド #94 で 3 cells 適用
- Decision D (hu passive 2 戦略: 3pl impersonal / adjectival participle) → 編集なし、`_policy_deferred.md #83-B Option A` adopted
- Decision E (iu lexical stems native consult まで defer) → round 2 へ持ち越し、`_policy_deferred.md #83-C Option B` adopted

### 検証メモ

- JSON は `node -e` で構文・件数検証済 (8 件、ko ×3 / en_ie ×3 / de_at ×2)
- データへの書き込みは行わず、apply2 ステップで paletteAdditions: 3 (F-role for ko / ko_kp / ko_bus) と settext (5件、すべて `allowTextChange: true`) が走る想定
- ko_bus の `B:공부는` 維持、de_at の `C:wor` ではなく `C:woa` (Austrian a-rounding) 選択など dialect 弁別性は維持

### Round 2 申し送り

- **#83-C iu native consult** — Spalding 1998 候補 (ᐱᙳᐊᖅᐹᓪᓕᕐᑐᑦ / ᐊᐳᐃᖅᓯᒪᔪᖅ) は native speaker 同意なしには触らない
- **#61-C de_at/de_by 残余 colloquial markers** — 系統的 surface-identical 検出は dedicated round で
- **#83-A psych-verb metadata** — voice-strategy metadata field 案 (#83-A Option C) は future

edits: 8 / JSON: `/tmp/lm_edits_87.json`
