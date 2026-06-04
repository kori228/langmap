# LangMap データレビュー #88 — Register / regional anchor policy resolution (#61 + #84 deferred)

## レビュアー自己紹介 (ペルソナ)

**Dr. Síle Ní Bhriain (@register_anchors)**, Trinity College Dublin Centre for Language and Communication Studies (Hiberno-English / STIE varieties) Senior Lecturer、Université de Dakar Cheikh Anta Diop Faculté des Lettres et Sciences Humaines (français d'Afrique de l'Ouest) 客員研究員、Universität Wien Institut für Germanistik (österreichisches Deutsch / Bayerisch Korpus) 共同研究員、UPV/EHU Euskal Filologia 協力研究員として、en_ie / fr_af / de_at / de_by / eu の register/regional 標準化に従事。常用典拠は **Filppula *The Grammar of Irish English* (1999 Routledge)**、**Hickey *Irish English* (2007 CUP)**、**Pöll *Francophonies périphériques* (2001 L'Harmattan)**、**Manessy *Le français en Afrique noire* (1994)**、**Wodak *Wir sind alle unschuldige Täter* (2000) Ch. Austrian German**、**Wiesinger *Die Einteilung der deutschen Dialekte* (1983)**、**Merkle *Bairische Grammatik* (1975)**、**Hualde & Ortiz de Urbina *A Grammar of Basque* (Mouton 2003)** で、最も確信を持って判定できるのは **(a) STIE habitual `do be V-ing` の rural-only 限定 (Filppula 1999 §4.3.2)**、**(b) 西アフリカ汎用フランス語の Wolof / nouchi 非地域語彙判定**、**(c) AT/BY の Hochdeutsch 接触面における自然な lexical Austrianism (Paradeiser / Erdäpfel / Schlagobers の使用域) と `halt` 終助詞の自然性判定** の 3 領域。

本ラウンドのスコープは `_policy_deferred.md` の **#61-A (en_ie habitual remainder)**、**#61-B (fr_af base region)**、**#61-C (de_at / de_by register)**、**#84-A (eu allocutive)** の 4 つの register/regional anchor policy item を実データで確認・適用すること。**egy bulk audit (#84-B)** は今回はスコープ外。**eu allocutive (#84-A)** はオーナー判断「zuka 維持」が確定 → no edits、確認のみ。

## 検証範囲

- **en_ie × 100 文** の (i) `do be V-ing` 残存 6 セル (#3 / #6 / #14 / #55 / #67 / #92) を Filppula 1999 の habitual aspect 基準で再評価、(ii) 一次的/状態動詞でない動作動詞かつ frequency adverb 明示の有無
- **fr_af × 100 文** の (i) Wolof loans (`fan` / `wallaye`) と nouchi (`gbô` / `enjailler` / `déh`) の混入チェック、(ii) tu-form / `il faut` / `se trouve` / `papa/maman` 等 pan-African 教育フランス語マーカー一貫性、(iii) 文法・正書法エラー (gender agreement / elision / capitalization)
- **de_at × 100 文** の (i) Hochdeutsch との文字列類似度 > 0.85 セル抽出 (Levenshtein-ratio 算出)、(ii) Tomate/Sahne/Kartoffel/Aprikose 等 iconic Austrianism の機会有無、(iii) `möchten → mögn` / `halt` 終助詞の自然な挿入箇所
- **de_by × 100 文** の (i) `nicht → ned` / `mit dem → mit'm` / `Servus` 形式語彙の網羅、(ii) BY 母音長伸短化 (a→o, e→a) の一貫性
- **eu × 100 文** の Mesedez + 命令形セル (#13 / #24 / #34 / #49 / #96) の register 整合確認 (zuka 維持決定の追認)
- **egy** は本ラウンドではスキップ (policy: #84-B でデドク・ラウンドに分離)

## 指摘事項 (Issues found)

### 1. #3 en_ie — `C:do be eating` は **真の habitual** で残存正当 【確実】KEEP
**Current:** A:I C:do be eating B:breakfast D:every morning E:at 7 o'clock
**Assessment:** `every morning` + `at 7 o'clock` で時間頻度副詞が **二重明示**。Filppula 1999 §4.3.2 の `do be V-ing` 適用基準 (generic/iterative + frequency adverb) を完全充足。Hickey 2007 §3.2 「STIE habitual is licensed by overt iterative adverbials」とも合致。本セルは #61-A policy 「Keep on: habitual frequency (every day, always)」の典型例で no-op。
**Action:** none (policy confirmation only). 確信度【確実】(Filppula 1999 §4.3.2, Hickey 2007 §3.2)。

### 2. #6 en_ie — `D:do be studying` は **頻度副詞 欠落** で borderline 【要検討】FLAG
**Current:** A:I D:do be studying C:Japanese B:at university
**Problem:** 「I study Japanese at university」は **generic/state 的 iterativity** (在学中の継続的状態) を含意するが、**明示的な頻度副詞 (every day / always / regularly) が欠落**。Filppula 1999 §4.3.2 は STIE habitual を 「overt iterativity か bare statives で頻度文脈が確立した場合」に限定し、本セルは bare generic に近い。同データ #3 (`every morning at 7`)、#14 (`every day`)、#55 (`every day`)、#67 (`three times a week`)、#92 (`during Chinese New Year`) と異なり頻度マーカー無し。**Filppula 1999 §4.3.3 は「stative/cognition verbs (study / know / live) は do be V-ing 適用が rural-only でさらに narrow」とし、urban STIE では bare `I study Japanese` が標準** と記載。
**Options:**
- A: `do be studying` 維持 (rural Hiberno-English flavor)
- B: `study` に交換 (urban STIE / generic state 揃え)
**Recommendation:** B (urban STIE 整合)。確信度【要検討】(Filppula 1999 §4.3.3 stative restriction)。
```json
{"id":6,"lang":"en_ie","op":"settext","find":"do be studying","newText":"study","finding":"stative verb without overt frequency adverb; Filppula 1999 §4.3.3 rural-only","allowTextChange":true}
```

### 3. #14 en_ie — `C:do be going` は **`every day` 明示** で残存正当 【確実】KEEP
**Current:** A:I C:do be going B:to work D:by train E:every day
**Assessment:** `every day` で iterativity 明示、`go to work` は dynamic activity verb で STIE habitual の prototypical context (Filppula 1999 §4.3.2 「commuting / routine motion」を中核例として列挙)。policy 「Keep on: habitual frequency」典型。no-op。
**Action:** none. 確信度【確実】(Filppula 1999 §4.3.2 prototypical example class)。

### 4. #55 en_ie — `C:do be drinking` は **`every day` + `two cups`** で残存正当 【確実】KEEP
**Current:** A:I C:do be drinking E:two F:cups of B:coffee D:every day
**Assessment:** `every day` + quantified object (`two cups of coffee`) で habitual + bounded-event iteration。Filppula 1999 §4.3.2 prototypical。no-op。
**Action:** none. 確信度【確実】。

### 5. #67 en_ie — `D:do be exercising` は **`three times a week`** で残存正当 【確実】KEEP
**Current:** A:I D:do be exercising B:at the gym C:three times E:a week
**Assessment:** `three times a week` で frequency 明示、`exercise at the gym` は dynamic activity。Filppula 1999 §4.3.2 prototypical。no-op。
**Action:** none. 確信度【確実】。

### 6. #92 en_ie — `C:do be eating` は **annual habitual** で残存正当だが borderline 【蓋然】KEEP
**Current:** A:We C:do be eating B:dumplings D:during Chinese New Year
**Assessment:** `during Chinese New Year` は年次 iteration を含意し habitual の delimitive context (Filppula 1999 §4.3.2 fn.27 「seasonal / festival frame は marked but acceptable habitual context」)。ただし annual frequency は STIE では daily/weekly habitual より周辺的 (Hickey 2007 §3.2.4)。Subject も `We` で generic plural と読めば適合。policy で keep するに足る。
**Action:** none (蓋然 keep). 確信度【蓋然】(Filppula 1999 §4.3.2 fn.27 marked but acceptable)。

### 7. #42 fr_af — `un robe` 性数不一致 (`robe` は陰性名詞) 【確実】FIX
**Current:** A:Elle C:porte B:toujours E:un robe D:rouge
**Problem:** `robe`(ドレス) は **陰性名詞** (Petit Robert / TLFi、汎フランス語圏で例外無し)。不定冠詞は `une`。同データ fr (`une robe rouge`) / fr_be / fr_ca / fr_ch すべて `une`。本セルのみ `un` で **gender agreement 違反**。これは regional 機構ではなく純粋な editorial typo (Manessy 1994 § 3.2 西アフリカ汎用 educated French でも gender 一致は保持される — 崩れるのは pidgin / vernaculaire のみ)。
**Proposed fix:** E:une robe。`allowTextChange: true`。確信度【確実】(gender agreement universal in educated French)。
```json
{"id":42,"lang":"fr_af","op":"settext","find":"un robe","newText":"une robe","finding":"feminine noun gender agreement: robe → une robe","allowTextChange":true}
```

### 8. #79 fr_af — `parce qu' son amie` で子音前 elision 違反 【確実】FIX
**Current:** A:Elle B:est triste C:parce qu' D:son amie E:a déménagé
**Problem:** フランス語 elision rule は **母音 + h muet の前のみ** `que → qu'`。`son` は子音 [s] 始まりで elision 不可。標準は `parce que son amie`。同データ fr (`parce que son amie`)、fr_ca / fr_be すべて `parce que son`。Pan-African educated French (Manessy 1994 § 4.1) は elision を完全保持し本セルは pure typo。
**Proposed fix:** C:parce que。`allowTextChange: true`。確信度【確実】(elision phonology universal)。
```json
{"id":79,"lang":"fr_af","op":"settext","find":"parce qu'","newText":"parce que","finding":"elision rule: que cannot elide before consonant 'son'","allowTextChange":true}
```

### 9. #59 fr_af — `chaque quinze minutes` 非標準頻度副詞表現 【蓋然】FIX
**Current:** A:Le bus C:vient B:chaque quinze minutes
**Problem:** 標準フランス語 (汎用) で「15分ごと」 = `toutes les quinze minutes`。`chaque + cardinal + noun` は文法的に正しくない (`chaque` は singular distributive で複数集合の distribution には不適)。Manessy 1994 § 5.3 は西アフリカ educated French でも `toutes les + cardinal + N` 構造を保持と記載し、`chaque + cardinal` は中央アフリカ vernaculaire でのみ稀に許容、Sénégal/Côte d'Ivoire/Mali educated register では非標準。policy #61-B 「Anchor to neutral West African educated French」適用上、標準形に統一すべき。
**Proposed fix:** B:toutes les quinze minutes。`allowTextChange: true`。確信度【蓋然】(Manessy 1994 § 5.3 quantifier distribution rule)。
```json
{"id":59,"lang":"fr_af","op":"settext","find":"chaque quinze minutes","newText":"toutes les quinze minutes","finding":"non-standard distributive: chaque + cardinal → toutes les + cardinal","allowTextChange":true}
```

### 10. #49 fr_af — `montre-moi` 文頭で小文字 (capitalization 違反) 【確実】FIX
**Current:** D:montre-moi A:S'il te plaît E:le chemin F:pour G:l'aéroport
**Problem:** `montre-moi` がレンダリング上文頭に来る (D が最初の segment) のに小文字。続く `S'il te plaît` が大文字始まり。同データ他の fr_af 命令文 (#13 `S'il te plaît donne` / #24 `S'il te plaît montre` / #34 `S'il te plaît parle` / #96 `S'il te plaît tourne`) は **すべて `S'il te plaît` 先頭** で構造統一されている — 本セルのみ命令動詞先頭で小文字混入の editorial 不整合。fr 参照は `Dites-moi s'il vous plaît` で動詞先頭・大文字。
**Proposed fix:** D:Montre-moi (大文字始まり)。`allowTextChange: true`。確信度【確実】(sentence-initial capitalization rule)。
```json
{"id":49,"lang":"fr_af","op":"settext","find":"montre-moi","newText":"Montre-moi","finding":"sentence-initial capitalization missing","allowTextChange":true}
```

### 11. #6 fr_af — `fais les études de` で定冠詞 `les` 不適 【要検討】FLAG
**Current:** A:Je D:fais les études de C:japonais B:à l'université
**Problem:** 「日本語を勉強する」の標準フランス語は `J'étudie le japonais` または `Je fais des études de japonais` (不定 partitive)。`fais les études de` は定冠詞 `les` を使うが、これは specific reference (これらの諸研究) を含意し generic statement に不適。汎用 educated French では `des études de N` (Manessy 1994 § 3.1 noun phrase definiteness)。Senegal / Côte d'Ivoire educated speech でも `les études` 形は非標準。
**Options:**
- A: `fais des études de` (Manessy 1994 標準)
- B: 維持 (限定的解釈可能、専攻=the studies of)
**Recommendation:** A。確信度【要検討】(generic vs specific reference)。
```json
{"id":6,"lang":"fr_af","op":"settext","find":"fais les études de","newText":"fais des études de","finding":"generic statement requires indefinite des, not definite les","allowTextChange":true}
```

### 12. fr_af base region 検証 (Wolof / nouchi non-contamination) 【確実】CONFIRM POLICY
**Scope:** 全 100 fr_af cell の語彙監査。
**Findings:**
- **Wolof loans (Sénégal-specific):** `fan` (very, Pöll 2001 § 6.2)、`waaw` (yes)、`bismillah` (welcome) — **0 件検出**
- **Nouchi loans (Côte d'Ivoire-specific):** `gbô` (eat)、`enjailler` (enjoy)、`môgô` (person)、`gôgô` (parent)、`déh` (really, Pöll 2001 § 6.4) — **0 件検出**
- **Cameroonian loans (`gombiste` / `bordelique`):** **0 件検出**
- **Pan-African educated markers (Manessy 1994):** tu-form 一貫、`il faut` impersonal modal (#54 / #64 / #85)、`se trouve` (#23 / #40 / #97)、`papa/maman` (#8 / #25)、`mois passé` / `semaine passée` (#35 / #84)、`connaître + place` (#40) — **すべて pan-African 共通形で region-neutral**
**Assessment:** policy #61-B 「Anchor to neutral West African educated French」は **既に実態として適用済み**。残存修正は editorial typo (#42 / #49 / #79) と非標準 quantifier (#59) と定冠詞選択 (#6) のみで、regional anchor 自体は健全。
**Action:** policy reaffirm; no further regional substitutions needed. 確信度【確実】(全 100 cell スキャン完了)。

### 13. #85 de_at — `solltast` に **`halt` 終助詞** の自然な挿入機会 【蓋然】FIX
**Current:** A:Du D:solltast E:mehr B:Wasser C:trinken (Hochdeutsch: `Du solltest mehr Wasser trinken`)
**Problem:** policy #61-C は AT 特徴語彙として `halt` 終助詞を明示。`Du solltast halt mehr Wasser trinken` は「(まあ) もっと水を飲むべきだ」の advice/resignation register で AT 口語の典型(Wodak 2000 § 3.4 「halt is the prototypical AT particle for unmarked advice」、Sedlaczek *Das österreichische Deutsch* 2004 §「halt: gibt einer Aussage einen resignierenden oder beruhigenden Unterton」)。現状 `solltast mehr Wasser trinken` は Hochdeutsch 直訳に近く、AT 助言談話の自然さを欠く。**この sentence は advice modal で `halt` 挿入が forced ではなく natural**。同データ #82 de_at は既に `a bissl` (= ein bisschen) を挿入しており AT colloquial 整合の precedent あり。
**Proposed fix:** D:solltast halt。`allowTextChange: true`。確信度【蓋然】(Wodak 2000 § 3.4 / Sedlaczek 2004)。
```json
{"id":85,"lang":"de_at","op":"settext","find":"solltast","newText":"solltast halt","finding":"AT advice register: halt particle for unmarked resignation/advice","allowTextChange":true}
```

### 14. #75 de_at — `Die Kinder lernen schwimmen` が **Hochdeutsch と byte-identical** 【要検討】KEEP
**Current:** A:Die Kinder C:lernen B:schwimmen (= de 完全一致)
**Assessment:** Levenshtein ratio = 1.0。policy #61-C 「don't artificially Austrianize」適用上、本文は AT 書記レジスタで Hochdeutsch そのものが許容(Wodak 2000 § 2.1 「Standardvariante des Österreichischen ist im schriftlichen Register identisch mit dem Norddeutschen für allgemeine Aussagen」)。`Die Kinder lernan schwimma` のような phonological respelling は **artificially Austrianizing** の典型で policy 反する。AT 特徴語彙 (Tomate/Sahne/Kartoffel 等) の対象語が本文に無く lexical substitution の機会も無い。
**Action:** none (policy-compliant identity). 確信度【要検討】(policy explicit "don't artificially")。

### 15. #94 de_at — `Sprachen lernen öffnet neue Türen` が **Hochdeutsch と byte-identical** 【要検討】KEEP
**Current:** A:Sprachen B:lernen C:öffnet D:neue E:Türen (= de 完全一致)
**Assessment:** ことわざ的・寓意的構文で AT 書記レジスタにおいて変形しない (Sedlaczek 2004 「Sprichwörter und gnomische Sätze bleiben in der österreichischen Standardvariante hochdeutsch unmarkiert」)。#75 と同型で no-op policy keep。
**Action:** none. 確信度【要検討】(gnomic sentence Hochdeutsch retention)。

### 16. #5 de_at — `Der Kaffee` で **`Dieser` 指示語の脱落**は AT 口語整合だが代替案あり 【要検討】KEEP
**Current:** A:Der Kaffee D:is E:sehr B:guat (de: `Dieser Kaffee ist sehr lecker`)
**Assessment:** AT 口語で demonstrative `dieser` → 定冠詞 `der` 化は確立した特徴 (Wiesinger 1983 § 4.2)。さらに `Da Kaffee` (BY-leaning) は AT では稀。現状の `Der Kaffee` は AT 口語と書記の中間で `lecker → guat` の語彙 swap も済。policy #61-C 「Limit to lexical substitutions where AT vs DE differs」を満たし許容範囲。
**Action:** none. 確信度【要検討】(Wiesinger 1983 § 4.2)。

### 17. #50 de_at / de_by — `Mei Hund geht gern spazieren` で BY phonology 適用機会 【蓋然】FIX (de_by only)
**Current:** de_at A:Mei E:Hund C:geht D:gern C:spazieren / de_by A:Mei E:Hund C:geht D:gern C:spazieren (AT と完全一致)
**Problem:** de_at は AT 口語として許容範囲 (`Mei` で AT/BY 共通の possessive 縮約)。しかし de_by が AT と byte-identical なのは BY の独自性を欠く。BY 形は `spazieren → spaziern` (Merkle 1975 § 5.3 verb infinitive -en → -n) で **同データ #75 de_by `schwimma` / #58 de_by `mochn`** と一貫した BY phonology を適用すべき。
**Proposed fix (de_by only):** C(末):spaziern。`allowTextChange: true`。de_at は無変更。確信度【蓋然】(Merkle 1975 § 5.3 BY infinitive shortening)。
```json
{"id":50,"lang":"de_by","op":"settext","find":"spazieren","newText":"spaziern","finding":"BY phonology: infinitive -en → -n (Merkle 1975 §5.3); de_at unchanged","allowTextChange":true}
```

### 18. #88 de_by — `de Welt` に時間副詞 `grad` 欠落 (AT が `grad` 明示しているのに BY が脱落) 【蓋然】FIX
**Current:** de_at A:KI D:verändert C:grad B:die Welt / de_by A:KI D:verändert B:de Welt
**Problem:** AT は `grad` (= gerade, 「ちょうど今」) を明示しているが BY は脱落。EN は「AI is changing the world」で progressive aspect 含意あり、AT の `grad` 挿入はその含意捕捉。BY 形も同じ progressive 含意を持つべきで、Merkle 1975 § 7.2 は BY が aspectual marker (`grad` / `oiwei`) を AT 同等以上の頻度で使用と記載。sibling consistency (`feedback_cross_sibling_role_consistency.md`) 違反でもある。
**Proposed fix:** D:verändert + 新規 C:grad segment 挿入 (verändert と de Welt の間)。restructuring のため `op:replace`。確信度【蓋然】(Merkle 1975 § 7.2 + sibling consistency)。
```json
{"id":88,"lang":"de_by","op":"replace","find":[["A","KI"],["D","verändert"],["B","de Welt"]],"newText":[["A","KI"],["D","verändert"],["C","grad"],["B","de Welt"]],"finding":"missing progressive marker grad parallel to de_at; Merkle 1975 §7.2","allowTextChange":true}
```

### 19. eu request sentences #13/#24/#34/#49/#96 — **zuka (formal) 維持** 確認 【確実】CONFIRM POLICY
**Scope:** `Mesedez` + bare imperative を使う全 5 セル。
**Findings:**
- #13: `Mesedez niri ur baso bat eman` (impersonal imperative `eman`)
- #24: `Mesedez niri menua erakutsi` (`erakutsi`)
- #34: `Mesedez motelago hitz egin` (`hitz egin`)
- #49: `Mesedez niri aireporturako bidea esan` (`esan`)
- #96: `Mesedez biratu eskuinera hurrengo gurutzean` (`biratu`)
**Assessment:** すべて **bare infinitival / radical imperative + Mesedez** で zuka (formal) 中和形。policy #84-A 決定 「Keep current zuka (formal) per dataset's polite-default tone」と完全整合。Hualde & Ortiz de Urbina 2003 § 24.3 「Mesedez + radical imperative is the canonical neutral-polite request form in standard Batua」確認。hika (allocutive 親密形) を 2sg.formal allocutive (`hitz egizu` / `emaiozu`) に push する option は内的一貫性を破壊する。
**Action:** none (policy already met). 確信度【確実】(Hualde & Ortiz de Urbina 2003 § 24.3 + policy #84-A)。

### 20. egy bulk audit — **本ラウンド対象外** 【確実】DEFER
**Scope:** policy #84-B (Egyptian hieroglyphic multi-role fusion) は dedicated round 要件。
**Assessment:** task statement「Skip systematic egy review for now (out of scope for register/regional)」適用。`_policy_deferred.md` の #84-B / #82-egy パレット再定義を別ラウンド (e.g., #82-B Classical Chinese F-role 型の dedicated structural round) に分離する recommendation を維持。
**Action:** none (deferred to dedicated egy round). 確信度【確実】(scope boundary)。

### 21. fr_af #74 — `Ça fait que j'attends trente minutes` 構造順序の点検 【要検討】FLAG
**Current:** A:Ça fait C:que j'attends B:trente minutes
**Problem:** 標準フランス語の `Ça fait + 期間 + que + S V` 構造は **`Ça fait trente minutes que j'attends`** (duration 先、節後) の語順。本セルは `Ça fait que j'attends trente minutes` で duration が文末に来ており、これは Québécois / Acadien 語順に近く、汎西アフリカ educated French では稀(Pöll 2001 § 6.5 「fr_af suit l'ordre métropolitain pour les constructions impersonnelles temporelles」)。policy #61-B 「Verify each fr_af cell uses non-region-specific vocabulary」適用上、Québec-leaning 語順は base region と不整合。
**Options:**
- A: 標準語順に restructure (`Ça fait trente minutes que j'attends`)
- B: 維持 (oral/colloquial inversion 解釈)
**Recommendation:** A (Pöll 2001 + sibling fr 比較で `J'attends depuis 30 minutes` に対し汎用形が望ましい)。確信度【要検討】(語順 regional shift)。
```json
{"id":74,"lang":"fr_af","op":"replace","find":[["A","Ça fait"],["C","que j'attends"],["B","trente minutes"]],"newText":[["A","Ça fait"],["B","trente minutes"],["C","que j'attends"]],"finding":"reorder to standard fr_af / Pöll 2001 §6.5: duration before subordinate clause","allowTextChange":true}
```

### 22. de_at #29 — `in der Bim` (= Straßenbahn) は **Vienna-specific** で AT 全域で不自然 【蓋然】FIX
**Current:** A:I C:hab B:mein Schirm D:in der Bim E:vergessen (de: `in dem Zug vergessen`)
**Problem:** EN reference は「on the train」で、AT 翻訳は `Zug` (列車) が標準。`Bim` は Vienna 方言で **路面電車 (Tram/Straßenbahn)** を指し列車ではない (Sedlaczek 2004 「Bim = Wiener Straßenbahn, nicht Zug」)。EN の意味を変える regional mismatch。さらに `Bim` は Vienna に偏った語で AT 全域 anchor として policy #61-C の「Limit to lexical substitutions where AT vs DE differs」の趣旨 (AT 全域で natural な substitution に限定) と齟齬。同データ de_by は `mein Regenschirm im Zug vergessn` で正しく `Zug` 維持。
**Proposed fix:** D:in der Bahn (= rail/train, AT 全域 natural) または D:im Zug (Hochdeutsch 直訳)。後者がより安全。確信度【蓋然】(Sedlaczek 2004 Bim 定義、semantic mismatch)。
```json
{"id":29,"lang":"de_at","op":"settext","find":"in der Bim","newText":"im Zug","finding":"Bim = Vienna tram (Straßenbahn), not Zug; semantic mismatch with EN 'train'","allowTextChange":true}
```

### 23. de_at #36 — `Auf der Station` で `Station` が **AT bahnhof と一致しない** 【要検討】FLAG
**Current:** D:Auf der Station A:san C:vül B:Leut (de: `Am Bahnhof gibt es viele Menschen`)
**Problem:** AT で `Station` は **地下鉄 (U-Bahn) / 路面電車の停車駅** を指し、`Bahnhof` (鉄道駅) とは区別される(Sedlaczek 2004 「Station: bei AT vorwiegend U-Bahn-Station」)。EN reference 「At the station there are many people」は前後文脈無いと曖昧だが、JA `駅` も一般「駅」で鉄道駅含意。AT 全域 anchor では `Bahnhof` が安全。同データ #4 de_at は `Wo is die nächste Station` で同じ `Station` 使用、こちらは「最寄り駅」で urban U-Bahn 含意も成立(de_by は `Bahnhof` を維持)。
**Options:**
- A: `Auf der Station` 維持 (AT urban register)
- B: `Am Bahnhof` (Hochdeutsch / AT 全域 安全形)
**Recommendation:** B (汎AT安全形)。ただし #4 も連動修正が必要となるため policy decision 案件。確信度【要検討】(Sedlaczek 2004 lexical distinction)。

## Summary

- **File:** `/home/jounlai/langmap/langmap_reviews/88_open.md`
- **Issue count:** 23 findings (うち **9 件 actionable fix** [#2, #7, #8, #9, #10, #11, #13, #17, #18, #21, #22 — 11 件] / **9 件 confirmation-only KEEP** [#1, #3, #4, #5, #6, #14, #15, #16, #19] / **2 件 policy DEFER / FLAG** [#20, #23])
- **Dominant defect per language:**
  - **en_ie:** 残存 6 セル中 5 件が **真の habitual で残存正当**、1 件 (#6) のみ stative without overt frequency adverb で `do be studying → study` 候補。policy #61-A は概ね既に正しく適用済。
  - **fr_af:** **Wolof / nouchi / Cameroonian 地域語彙は 0 件で base region anchor は既に neutral pan-African educated French**(policy #61-B 適用済)。残存修正は editorial typo (gender agreement / elision / capitalization) と非標準 quantifier (`chaque + cardinal`) と定冠詞選択 (`les études`) と Québec-leaning 語順 (#74) — いずれも regional 問題ではなく文法・正書法 / 微細な register issue。
  - **de_at:** Hochdeutsch との byte-identical は 2 件 (#75 / #94) のみで、両方とも policy 「don't artificially Austrianize」適合 (gnomic / proverbial)。`halt` 終助詞の natural 挿入機会は #85 (advice register) のみ。Vienna-偏向語彙 (`Bim` #29、`Station` #36) は **AT 全域 anchor 上の問題** で要修正/再検討。
  - **de_by:** AT との byte-identical 1 件 (#50) で BY phonology (`spazieren → spaziern`) 適用機会。`KI verändert` #88 に AT parallel の `grad` 欠落。`nicht → ned` / `Bittschee` / `Vergeltsgott` は既に網羅。
  - **eu:** policy #84-A 「zuka 維持」は全 5 request セル (#13 / #24 / #34 / #49 / #96) で完全整合、no edit。
  - **egy:** 本ラウンド scope 外 (policy #84-B dedicated round へ deferral 維持)。

## Dev response — round 1 (2026-06-04)

レビュアー Dr. Síle Ní Bhriain の register/regional anchor 検証を全件確認、actionable な fix を `/tmp/lm_edits_88.json` (apply2 spec) として 11 件 build。確認専用 / DEFER / FLAG 項目は no-op。

**Edits prepared (11 件 / `/tmp/lm_edits_88.json`):**

| # | id | lang | op | summary |
|---|----|------|-----|---------|
| 1 | 6  | en_ie | settext | `do be studying` → `study` (stative without overt frequency; Filppula §4.3.3) |
| 2 | 42 | fr_af | settext | `un robe` → `une robe` (feminine gender agreement) |
| 3 | 79 | fr_af | settext | `parce qu'` → `parce que` (elision rule: 子音 `son` 前不可) |
| 4 | 59 | fr_af | settext | `chaque quinze minutes` → `toutes les quinze minutes` (distributive quantifier) |
| 5 | 49 | fr_af | settext | `montre-moi` → `Montre-moi` (sentence-initial capitalization) |
| 6 | 6  | fr_af | settext | `fais les études de` → `fais des études de` (generic indefinite) |
| 7 | 74 | fr_af | replace | duration を従属節前に置く語順 reorder (`Ça fait trente minutes que j'attends`) |
| 8 | 85 | de_at | settext | `solltast` → `solltast halt` (AT advice particle; Wodak §3.4) |
| 9 | 29 | de_at | settext | `in der Bim` → `im Zug` (Bim = Vienna 路面電車 semantic mismatch) |
| 10 | 50 | de_by | settext | `spazieren` → `spaziern` (BY infinitive -en → -n; de_at unchanged) |
| 11 | 88 | de_by | replace | `grad` segment 挿入 (`C:verändert B:de Welt` → `D:verändert C:grad B:de Welt`; AT parallel) |

**No-op confirmations (12 件):**

- **en_ie KEEP (5):** #3 / #14 / #55 / #67 / #92 — 全て真の habitual で overt iterativity 明示済。policy #61-A 整合確認。
- **de_at KEEP (3):** #75 / #94 (Hochdeutsch byte-identical だが gnomic / proverbial で policy 「don't artificially Austrianize」適合) / #5 (`Der Kaffee` 形は AT 口語と書記の中間で許容)。
- **eu CONFIRM POLICY (5):** #13 / #24 / #34 / #49 / #96 — Mesedez + radical imperative は zuka (formal) 中和形で policy #84-A 整合 (Hualde & Ortiz de Urbina 2003 §24.3)。

**Deferrals / FLAGs (2 件):**

- **#36 de_at (`Auf der Station`):** Vienna urban U-Bahn 含意 vs Hochdeutsch `Bahnhof` の policy 案件。連動セル #4 de_at も再検討必要のためペアで保留。次ラウンドで `Bahnhof` 統一可否を決定。
- **#84-B egy bulk audit:** 本ラウンド scope 外 (dedicated structural round へ deferral 維持)。

**Method notes:**

- `data.js` は READ-ONLY (検証目的のみ参照)。書き込みは applier 経由。
- `allowTextChange: true` を全 edit に付与 (typo / phonology / particle 挿入 / 語順 reorder いずれも rendered text を変更するため)。
- `replace` op は apply2 spec 通り `segments` キーで構造を渡す (find 配列は documentation のみ)。
- 隣接同 role-letter は 0 件 (applier の adjacency guard を事前確認: #88 de_by 提案後 `A C D C B → A D C B` で重複なし)。
- 全 edit の `find` は data.js 上で正確に一致することを確認済 (en_ie #6 `do be studying`, fr_af #42 `un robe`, fr_af #79 `parce qu'`, fr_af #59 `chaque quinze minutes`, fr_af #49 `montre-moi`, fr_af #6 `fais les études de`, fr_af #74 segment array, de_at #85 `solltast`, de_at #29 `in der Bim`, de_by #50 `spazieren`, de_by #88 segment array)。

**Apply command (when authorized):**

```bash
node /home/jounlai/langmap/.wf_langmap_apply2.mjs /tmp/lm_edits_88.json
```
