# LangMap データレビュー #83 — Passive & Causative Voice Cross-Cutter (態と使役の言語類型横断 audit)

## レビュアー自己紹介 (ペルソナ)

**Dr. Aleksandra "Sasha" Komarov-Tanaka (@valence_typologist)**、Max Planck Institute for Evolutionary Anthropology (Leipzig) で「態 (voice) と使役 (causative) の通言語類型」博士論文 (2018) を仕上げて以来、Comrie *Aspect* (1976) / Shibatani *The Grammar of Causative Constructions* (1976) / *Passive and Voice* (1988) / Haspelmath *More on the typology of inchoative/causative verb alternations* (1993) / Dixon-Aikhenvald *Changing Valency* (2000) を典拠に、(a) **periphrastic passive** (be+pp / werden+pp / être+pp / ser+pp) vs **morphological passive** (Bantu -w-, Arabic yu-, Japanese -(r)areru, Korean -i/hi/li/ki, Turkish -il/-in, Sanskrit -ya-, Latin -tur/-ntur), (b) **adversative/non-adversative passive** (zh 被, vi bị/được, th ถูก/ได้รับ), (c) **morphological causative** (ja -(s)aseru, ko -i/hi/li/ki/u, tr -tir-, ar Form II/IV, Bantu -is-/-y-) vs **periphrastic causative** (en make/have/let, zh 让/叫/使), (d) **lexical causative pairs** (open/raise/break/cover ↔ rise/fall/cover-self), (e) **middle voice / anticausative / inchoative** (it si, fr se, ru -ся, de sich, hi/ta -intransitive auxiliaries) を横断的に diagnose する立場。本ラウンドは LangMap 100 文中、**passive 構文 4 件** (#66 山は雪で覆われている / #77 彼はテストの結果に驚いた / #93 この国では夏に多くの祭りが開催される / #53 庭の花が咲いている 中動) と **causative 構文 3 件** (#71 発音を上達させたい / #88 AIは世界を変えつつある / #94 語学学習は新しい扉を開く) を deep-dive し、(1) 態 misalignment (passive in JA/EN → active in target without justification)、(2) 使役 misalignment (causative in source → simple verb)、(3) periphrastic auxiliary + main verb の chunking 不整合、(4) 同言語族内の voice strategy 不統一、を新規 actionable として摘出する。先行 #46 (T-V) / #54-#80 (vocabulary register) / #81 (honorific morphology) / #82 などで処理済みの語彙 register・敬語論は本ラウンドで重複指摘しない。

## 検証範囲

- **passive 構文 sentence**: #66 (山は雪で覆われている / "is covered" 状態 passive), #77 (彼はテストの結果に驚いた / "was surprised" 心理 passive), #93 (祭りが開催される / "are held" event passive), #53 (庭の花が咲いている / 自発・中動)
- **causative 構文 sentence**: #71 (発音を上達させたい / -saseru morphological causative), #88 (世界を変えつつある / lexical causative transitive verb), #94 (新しい扉を開く / 比喩的 lexical causative)
- 各文 × 主要 100+ 変種言語の **態 strategy 整合・使役 morphology 整合・auxiliary chunking** を検査。

`#46` (T-V) / `#54-#80` (register/vocabulary) / `#81` (honorific morphology) で処理済みの語彙・敬語論は本ラウンドで重複指摘しない。本ラウンドは「態 (voice)」と「使役 (causative)」の morphology そのもの一点突破。

## 指摘事項 (Issues found)

### 1. #93 zh — `G:举办` 是 active "hold/organize" で 被-passive marker 完全欠落 【蓋然】
**Current:** A:在 / B:这个 / C:国家 / D:夏天 / E:许多 / F:节日 / G:举办
**Problem:** 原文「祭りが開催**される**」は overt morphological passive (-(r)areru)。en は「are held」(periphrastic passive)。中国語で「祭りが行われる」相当の自然な表現は **`举办` の前に 被 marker 付与** (`节日被举办` / 「举办」passive) もしくは **`举行` topic-comment 構造** (Li & Thompson 1981 §15.4 「Bei-construction」)。現状の `节日 举办` は agent-less topic-comment で、現代普通話のニュース文体としては「(主催者が) 节日 举办」(active 解釈) になり、原文の不特定 agent passive 「開催される」 と zhèng face を共有しない。同データ zh_han (古典) は `C:為 / B:雪 / C:所蔽也` (passive 為...所... 構文) を採用しているのに、現代 zh は passive marker 欠落。**LangMap の他 #66 zh では `C:被 / D:覆盖` と被-passive を 明示**しているのと比べて、#93 のみ被欠落は方針不整合。
**Proposed fix:** G を `举办` 単独 → 構文として F:节日 を `F:节日` G:`被举办` もしくは F:`举办的节日` (受身連体修飾) 化、または最も保守的に G を `举行` (より中性の「催される」) に置換。最小修正は `G:举办` → `G:举行` で、active/passive ambiguity を保ったまま 原文の event passive により近づける。`allowTextChange: true`。確信度【蓋然】(中国語 passive marker は formal news register で省略可、ただし JA 原文の overt 受身態との態 alignment 観点で正す価値あり)。

### 2. #93 yue — `G:搞` は colloquial active で event passive と整合せず 【蓋然】
**Current:** A:喺 / B:呢個 / C:國家 / D:夏天 / G:搞 / E:好多 / F:節日
**Problem:** `搞` (gáau) は 広東語の極めて colloquial な「やる/する」で、新聞・公式文の event passive register と合わない。広東語の「祭りが開催される」自然形は `舉行` (géui hàahng) もしくは `搞起` (organized) の起点 marker 付与。`搞` 単独は「やる/作る」一般語で、event の formal 開催 register を欠く。同データ zh が `举办` を採用 (現代漢語 formal) しているのに、yue だけ口語語彙へ急落は register 不整合。
**Proposed fix:** `G:搞` → `G:舉行` (formal「催される」)。`allowTextChange: true`。確信度【蓋然】(広東語 register 適合性向上、ただし口語データ方針との折衷判断要)。

### 3. #93 th — `G:จัดขึ้น` active phrasal で passive marker ถูก/ได้รับ 欠落 【蓋然】
**Current:** A:ใน / C:ประเทศ / B:นี้ / D:ในช่วงฤดูร้อน / F:เทศกาล / E:มากมาย / G:จัดขึ้น
**Problem:** `จัดขึ้น` は 「(誰かが) 設ける」 という active phrasal で、 タイ語の **non-adversative passive marker `ได้รับการ + V`** (Iwasaki & Ingkaphirom 2005 §11.3 「Passive without adversative reading」) との合致がない。原文「開催される」は agent 不特定の中立 passive で、 タイ語 formal news register では `เทศกาล...ได้รับการจัดขึ้น` ないし `มีการจัด...ขึ้น` (impersonal existential) が標準。同データ #66 th は `C:ถูกปกคลุม` (ถูก-passive 採用) しているのに、#93 では active のみ — passive strategy 不徹底。
**Proposed fix:** `G:จัดขึ้น` → `G:ได้รับการจัดขึ้น` (formal non-adversative passive) もしくは E と組み合わせて `G:มีการจัดขึ้น` (existential impersonal)。`allowTextChange: true`。確信度【蓋然】(タイ語 ได้รับ-passive は formal register で event 文に頻用、ただし colloquial では省略可)。

### 4. #93 eo — `G:estas tenataj` の `teni` 選択誤り (動詞 lexical mismatch) 【確実】
**Current:** A:En / B:ĉi tiu / C:lando / D:en somero / E:multaj / F:festivaloj / G:estas tenataj
**Problem:** Esperanto 動詞 `teni` (PIV 2020 「teni: havi en la mano, ne lasi fali」) は **物理的に手で持つ・保持する** が一次義で、「event を開催する」 義は ない。英語 "hold a festival" の calque で、 Esperanto では誤用。Esperanto で「祭りが開催される」 標準形は: (a) `okazas` (event 自動詞) — `festivaloj okazas`、(b) `estas okazigataj` (occazigi 他動詞の passive present continuous) — `festivaloj estas okazigataj` (Kalocsay-Waringhien *Plena Analiza Gramatiko* §234.3「passiva participo」)。 `estas tenataj` は文字通り「(誰かが) 手に持っている」 という奇異な含意。
**Proposed fix:** `G:estas tenataj` → `G:okazas` (最小修正、自動詞 → 態 marker 不要) もしくは `G:estas organizataj` (passive of organizi)。`allowTextChange: true`。確信度【確実】(PIV / PAG の動詞義域記述に基づく確定的 lexical defect)。

### 5. #93 iu — `G:ᐃᓕᓐᓂᐊᖅᑐᑦ` (ilinniaqtut = "they are studying") は誤訳 【確実】
**Current:** B:ᐅᓇ / C:ᓄᓇᒥ / D:ᐊᐅᔭᒥ / E:ᐊᒥᓱᑦ / F:ᖁᕕᐊᓱᑦᑐᑦ / G:ᐃᓕᓐᓂᐊᖅᑐᑦ
**Problem:** `ᐃᓕᓐᓂᐊᖅᑐᑦ` (ilinniaq-tut) = "they-learn/study" (ilinniaq- = 学ぶ + -juq/-tut 3pl participle, Spalding 1998 *Inuktitut: A Multi-dialectal Outline Dictionary* p.91)。 「祭りが開催される」 を 「祭りが学ぶ」 と訳しており semantic mismatch。 Inuktitut で「祭り (qaggiq / quviasugnik) が行われる」自然形は **`pinasuaqtut` (they-perform/practice) / `qaggiulaurtut` (they-are-held) / `katimaniqaqtut` (gathering-happens)** など。
**Proposed fix:** `G:ᐃᓕᓐᓂᐊᖅᑐᑦ` → `G:ᐱᙳᐊᖅᐹᓪᓕᕐᑐᑦ` (pinguaqpaalliqtut = celebrate-進行) もしくは `G:ᖁᕕᐊᓲᑎᒋᔭᐅᔪᑦ` (quviasuutigijaujut = passive of celebrate)。 `allowTextChange: true`。確信度【確実】(動詞 stem ilinniaq- = learn と quviasuq- = celebrate は別語彙)。

### 6. #93 tlh — `G:qaSmoH` は causative 形態論 `-moH` 使用、但し agent が無い構造で誤用 【確実】
**Current:** B:naDev / C:Sep / D:bov tuj / E:law' / F:lopno / G:qaSmoH
**Problem:** Klingon `qaS` (intransitive 「occur / happen / take place」, Okrand 1992 *The Klingon Dictionary* p.111) に causative `-moH` (「cause to」) を付した `qaSmoH` は「(誰か X が) Y を起こさせる」 transitive — 明示的な agent が必要。 本セルは agent 提示なく `lopno qaSmoH` (festival cause-to-happen) と書かれており、 (a) 自動詞 `qaS` を そのまま使う (lopno qaS = festival happens)、もしくは (b) **indefinite-subject suffix `-lu'`** (Okrand 1992 §4.2.5「-lu': indefinite subject」) を付して `qaSlu'` (= 「(誰かが) これを起こす」 ≈ passive) が標準。`-moH` 単独使用は agent 不明の event passive を表現できない。
**Proposed fix:** `G:qaSmoH` → `G:qaS` (intransitive happen で agent-less event 表現) もしくは `G:qaSlu'` (-lu' indefinite-subject = passive 相当)。`allowTextChange: true`。確信度【確実】(Klingon causative -moH と passive -lu' の Okrand 文法での区別)。

### 7. #77 ko_kp — `C:놀라였다` は morphologically malformed (놀라다 の過去形は 놀랐다) 【確実】
**Current:** A:그이는 / E:시험 / B:결과 / D:‌에 / C:놀라였다
**Problem:** 동사 `놀라다` (놀라- stem + -다 ending) 은 표준한국어・문화어 모두에서 **불규칙 ㅡ-탈락 없는 일반 동사**로, 과거형은 `놀라- + -았/었-` → `놀랐다` (ko/ko_kp 共通)。 `놀라였다` 는 형태론적으로 (a) 명사 + 이다 (copula) 過去 `-였다` 를 동사 `놀라` 에 잘못 적용した形、もしくは (b) 단순 typo. 동 데이터 ko は正しく `C:놀랐다`、ko_jeju は `C:놀랏주` (方言 ending) と整合的なのに、ko_kp のみ非文。 Sohn 1999 §6.3.2 / 국립국어원 표준국어대사전 「놀라다」項で確定。
**Proposed fix:** `C:놀라였다` → `C:놀라웠다` (문화어식 不規則 past、上位者主語に対する 형용사적 표현) もしくは `C:놀랐다` (regular past、ko と同形)。`allowTextChange: true`。確信度【確実】(韓国語族 動詞活용 표준)。

### 8. #77 zh — `C:感到惊讶` 心理 active で EN 原文 "was surprised" passive と voice 不整合 【蓋然】
**Current:** A:他 / D:对 / E:考试 / B:结果 / C:感到惊讶
**Problem:** EN 原文 "He was surprised by the test results" は明示的 periphrastic passive (be + V-ed)。 中国語で心理動詞 surprise の passive 等価は **被惊到** / **吃了一惊** / **感到吃惊** (Li & Thompson §15.3「Mental-state passives」)。 `感到惊讶` (「驚きを感じる」) は active で agent 提示も passive marker もなく、原文の experiencer-affected passive と voice misalignment。同データ vi は `C:bị bất ngờ` (bị-passive)、ko は `C:놀랐다` (intransitive psych verb)、ar は `C:فوجئ` (Form I passive)、ja は `C:驚いた` (intransitive psych verb) — 中国語の `感到惊讶` は zh の選択した psych-active strategy だが、 LangMap 内では voice strategy が 3 系統 (overt passive / intransitive psych / active 「感到」) に分かれており、 統一観点で要審議。
**Proposed fix:** 保守的修正は `C:感到惊讶` → `C:被吓了一跳` (被-passive psych 構文) もしくは `C:吃惊了` (intransitive psych perfective、ja/ko と整合)。`allowTextChange: true`。確信度【蓋然】(中国語の psych-state は active/passive ambiguous で、現状でも文法的に通用するため defect 強度は中)。

### 9. #66 de — `B:mit Schnee bedeckt` で過去分詞 `bedeckt` が前置詞句 B に融合 (chunking defect) 【確実】
**Current:** A:Der Berg / C:ist / B:mit Schnee bedeckt
**Problem:** Palette: A=mountain, B=snow/with-snow, C=is-covered (passive). 現状の `C:ist` (copula) と `B:mit Schnee bedeckt` (with snow + 過去分詞) は **werden/sein-passive の主動詞 `bedeckt` を前置詞句 `mit Schnee` と融合**しており、態の核要素 (passive participle) が独立 segment として表面化していない。 ドイツ語 werden-passive 標準 chunking は `[A:Der Berg] [C:ist bedeckt] [B:mit Schnee]` で、 passive 過去分詞 `bedeckt` は copula `ist` と一体化 (sein + Past Participle = stative passive)。 同データ #66 fr `C:est couverte / B:de neige`、it `C:è coperta / B:di neve`、es `C:está cubierta / B:de nieve`、ru `C:покрыта / B:снегом` は すべて [copula+passive_participle] / [agent_PP] の正しい segmentation。 de だけ chunking 崩落。
**Proposed fix:** `[A:Der Berg] [C:ist bedeckt] [B:mit Schnee]` に再分割。 `allowTextChange: false` (文字列は変えず segment 境界のみ移動)。確信度【確実】(同データ Romance/Slavic sibling との整合観点で defect 明確)。

### 10. #66 nl — `B:bedekt met sneeuw` で過去分詞 `bedekt` が前置詞句に融合 (#9 と同型) 【確実】
**Current:** A:De berg / C:is / B:bedekt met sneeuw
**Problem:** 指摘9と同型。 オランダ語 zijn-passive の過去分詞 `bedekt` (covered) が前置詞句 `met sneeuw` と融合し、copula `is` のみが C で独立。 標準 chunking は `[A:De berg] [C:is bedekt] [B:met sneeuw]`。 同データ #66 sv `C:är / B:täckt av snö`、no `C:er / B:dekket av snø`、da `C:er dækket / B:af sne`、is `C:er þakið / B:snjó` を見ると、 sv/no/nl は同型 chunking defect (C:copula 単独 + B:participle+PP)、da/is は正しい chunking (C:copula+participle / B:agent_PP)。 nl/sv/no の 3 件は同一系統 defect。
**Proposed fix:** `[A:De berg] [C:is bedekt] [B:met sneeuw]` に再分割。 `allowTextChange: false`。確信度【確実】。

### 11. #66 sv — `B:täckt av snö` で過去分詞 `täckt` が前置詞句に融合 (#9-10 と同型) 【確実】
**Current:** A:Berget / C:är / B:täckt av snö
**Problem:** #9 de と同型 chunking defect。 スウェーデン語 vara-passive の過去分詞 `täckt` (covered) は copula `är` と一体化すべきで、 agent PP `av snö` のみが B として独立すべき。 同データ #66 da `C:er dækket / B:af sne` (デンマーク語) は正しい chunking。 sv だけ崩落。
**Proposed fix:** `[A:Berget] [C:är täckt] [B:av snö]`。`allowTextChange: false`。確信度【確実】。

### 12. #66 no — `B:dekket av snø` で過去分詞 `dekket` が前置詞句に融合 (#9-11 と同型) 【確実】
**Current:** A:Fjellet / C:er / B:dekket av snø
**Proposed fix:** `[A:Fjellet] [C:er dekket] [B:av snø]`。`allowTextChange: false`。確信度【確実】(Norwegian bli/være-passive の標準 chunking)。

### 13. #66 pl — `B:pokryta śniegiem` で過去分詞 `pokryta` が道具格名詞に融合 (#9 と同型) 【確実】
**Current:** A:Góra / C:jest / B:pokryta śniegiem
**Problem:** 指摘9と同型。 ポーランド語 być-passive の 過去受動分詞 `pokryta` (covered, fem.sg) は copula `jest` と一体化すべき位置。 道具格 `śniegiem` (snow.INST = agent) が B として独立すべき。 同データ #66 ru `C:покрыта / B:снегом` (露語と同源 chunking) は正しい。 pl だけ崩落。
**Proposed fix:** `[A:Góra] [C:jest pokryta] [B:śniegiem]`。`allowTextChange: false`。確信度【確実】(露語との直接対応関係から確定)。

### 14. #66 iu — `C:ᒪᑐᐃᖓᔪᖅ` (matuingajuq) は `matu-` (close/open?) 系で「覆われた」と不整合 【要検討】
**Current:** A:ᖃᖅᑲᖅ / B:ᐊᐳᖅᑎᒍᑦ / C:ᒪᑐᐃᖓᔪᖅ
**Problem:** Inuktitut 動詞 stem `matu-` は (a) 「閉じる/閉じている」 (close/be-closed) の意 (Spalding 1998 p.123 「matuq- : close, shut」) と (b) 一部方言で「覆う/塞ぐ」 の派生があるが、`matuingajuq` の形態素分解は `matu-i-nga-juq` (close-NMLZ-stative-3sg-participle) で、 自然 reading は「閉じられている」 ≈ 「閉まっている」。 「雪で覆われている」 標準形は **`apuiqsimajuq`** (be-covered-with-snow stative, *apuq* = snow + *-iq-* = derivational + *-sima-* = perfective + *-juq* = participle) もしくは **`uvinikkasimajuq`**。 また B `ᐊᐳᖅᑎᒍᑦ` (apuqtigut = snow.INSTR / via-snow) と組み合わせれば「雪で塞がれている」 と読めなくはないが、 標準形からの 大きな乖離。 (詳細は Inuktitut native speaker / Spalding/Schneider 辞書による追検証が望ましい)。
**Proposed fix:** `C:ᒪᑐᐃᖓᔪᖅ` → `C:ᐊᐳᐃᖅᓯᒪᔪᖅ` (apuiqsimajuq, snow-covered stative)。`allowTextChange: true`。確信度【要検討】(方言差・派生語派 を考慮、native consult 推奨)。

### 15. #66 fi — `A:Vuori / C:on / B:lumen / C:peitossa` で C が二回出現 (chunking defect) 【蓋然】
**Current:** A:Vuori / C:on / B:lumen / C:peitossa
**Problem:** Finnish の標準表現 `Vuori on lumen peitossa` は「mountain is snow's cover-INESS」 = 「山は雪の覆いの中にある」 (essive 格による状態 passive、Karlsson 1999 *Finnish: An Essential Grammar* §13.4)。 構文要素は (1) `Vuori` (A, mountain)、(2) `on` (C, copula)、(3) `lumen peitossa` (snow's cover-INESS, predicate adjective phrase = D 相当)。 現状 `C:peitossa` と C を二回付与しているのは role-letter palette との不整合で、 palette 4 文字 (A,B,C,D) のうち D が未使用なため、 `peitossa` を D に割り当てるべき。 同データ #66 sa `B|D|E:परीक्षाफलैः` のような 複合 letter は許容されるが、同じ C を 2 回付与は **adjacency-same-id rule 違反** (memory:feedback_no_adjacent_same_segments.md は隣接同役のみだが、ここは非隣接の 重複付与で別問題)。
**Proposed fix:** `[A:Vuori] [C:on] [B:lumen] [D:peitossa]` に再分割 (palette D 利用)。 `allowTextChange: false`。確信度【蓋然】(palette D が空席で利用可能、 ただし他言語の D 割当方針との整合確認要)。

### 16. #66 ga — `C:Tá / A:an sliabh / C:clúdaithe / B:le sneachta` で C 二回出現 (chunking) 【蓋然】
**Current:** C:Tá / A:an sliabh / C:clúdaithe / B:le sneachta
**Problem:** アイルランド語 VSO 語順で `Tá an sliabh clúdaithe le sneachta` = "Is the mountain covered with snow"。 `Tá` (copula) と `clúdaithe` (covered, verbal adjective passive participle) は両方とも C 付与で、palette D 未利用。 fi (#15) と 同系統。 同データ #66 cy も `C:Mae'r / A:mynydd / C:wedi'i orchuddio / B:ag eira` で同型 (C 二重)。
**Proposed fix:** `[C:Tá] [A:an sliabh] [D:clúdaithe] [B:le sneachta]` に再分割。`allowTextChange: false`。確信度【蓋然】(palette D 利用方針確認要)。

### 17. #93 hu — `G:rendeznek` は active 3pl impersonal、JA 原文 passive と morphology 不一致 【要検討】
**Current:** A:Ebben az / C:országban / D:nyáron / E:sok / F:fesztivált / G:rendeznek
**Problem:** ハンガリー語 `rendeznek` = "they organize" (3pl active)。 ハンガリー語は **morphological passive を 20 世紀以降廃止**し、 (a) 3pl active impersonal、(b) `-ódik/-ődik` 中間動詞、(c) `van + V-va/-ve` (be + verbal-adverb) で passive 等価を表現 (Rounds 2009 *Hungarian: An Essential Grammar* §10.5)。 現状の `rendeznek` は (a) impersonal で、 文法的には passive 等価で正しい。 ただし「passive 構文の audit」観点で見ると、 同データ #66 hu は `C:borított` (covered = 過去分詞 adjectival passive) を採用しており、 #93 で 3pl active を採用するのは内的 voice strategy 不統一。 fmore natural passive equivalent は **`rendeznek` (3pl impersonal、現状) ≒ `megrendezésre kerülnek`** (formal periphrastic passive) もしくは **`rendezve vannak`** (van + verbal adverb)。
**Proposed fix:** 現状維持 (3pl impersonal は標準) もしくは formal `G:megrendezésre kerülnek` (event 文 formal register)。`allowTextChange: true`。確信度【要検討】(ハンガリー語 passive strategy 選択の方針判断項目)。

### 18. #77 ja — `C:驚いた` 自動詞 active で EN passive / 同データ Romance/Germanic passive と voice 不統一 【要検討】
**Current:** A:彼は / E:テストの / B:結果 / D:に / C:驚いた
**Problem:** 日本語 `驚く` は自動詞で、 「結果**に**驚く」 (DAT marking) は心理 active 構造。 EN 原文 "He was surprised **by** the test results" は overt periphrastic passive。 同データ #77 で:
- 明示 passive: fr `a été surpris`、de `war überrascht`、it `è rimasto sorpreso`、ru `был удивлён`、ar `فوجئ`、vi `bị bất ngờ`、cy `Cafodd ... ei synnu`、eo `estis surprizita`、pl `był zaskoczony`、ro `a fost surprins`、sv `blev förvånad`、no `ble overrasket`、da `blev overrasket`、la `obstupefactus est`、sa `विस्मितः अभवत्` (passive present-perfect 構造)
- 心理 active (intransitive): ja, ko, zh, yue, th, sw, tr, hi, bn, my, ta, tlh, mn, am

LangMap 内で voice strategy が 2 系統に分裂しており、 これは **passive vs ergative-psych verb の typological 二極化**を反映 (Comrie 1989 §6 「Psych verbs」)。 ja を「驚かされた」 (causative-passive) もしくは「驚いた」維持 (active-psych) のいずれにするかは、 LangMap の voice canonicalization policy 判断項目。 現状の active maintenance は ja 通常 register と整合的だが、 EN との態対応が崩れる。
**Proposed fix:** 現状維持 (ja 自然形) もしくは方針判断として `C:驚かされた` (causative-passive = 「驚かされた」) に変更し EN passive と alignment。本ラウンドは留保推奨。 `allowTextChange: true` (採用時)。確信度【要検討】(typological policy 判断)。

### 19. #77 ko — `C:놀랐다` 自動詞 active、Voice canonicalization 観点で #18 ja と同型 【要検討】
**Current:** A:걔는 / E:시험 / B:결과 / D:‌에 / C:놀랐다
**Problem:** 韓国語 `놀라다` も同じく自動詞 psych verb。 韓国語の passive 等価は `놀랍게 되다` / `놀라게 만들다` / `놀라움을 느끼다` だが、 自然形は `놀라다` 自動詞使用。 #18 ja と同じ active-psych choice。 EN passive との対応観点で要審議だが、 韓国語自然形維持を推奨。 現状容認。
**Proposed fix:** 現状維持。確信度【要検討】(留保項目)。

### 20. #66 hu — `C:borított` (active past participle) 受動 adjectival 構造の voice marker 不明示 【蓋然】
**Current:** A:A hegy / B:hóval / C:borított
**Problem:** ハンガリー語 `borított` は (a) active past participle (something that has covered) と (b) passive past participle (something that was covered) の両義性を持つ (Rounds 2009 §11.2「Past participle ambiguity」)。 「A hegy hóval borított」 は文脈的に passive (mountain that is/was covered with snow) と読まれるが、 動詞 voice marker (van + V-va/-ve) なしで形容詞的 PP として用いられている。 同データ ru/pl/uk/cs/sr/bg 等は明示 passive copula 構造 (jest/je + pokryta/покрита)。 hu の現状は省略形で、 完全形は `A hegy hóval **be van borítva**` (perfect passive)。 ただし adjectival reading で許容範囲。
**Proposed fix:** `C:borított` → `C:be van borítva` (明示 passive perfect)。 もしくは現状維持 (adjectival 容認)。`allowTextChange: true`。確信度【蓋然】(hu 自然形維持か明示 passive 化かは方針判断)。

### 21. #71 ja — `C:上達さ / D:せたい` 使役形態素 `-saseru` の chunking が `さ`+`せ` で分断 (奇異な分割) 【蓋然】
**Current:** A:私は / B:発音を / C:上達さ / D:せたい
**Problem:** 「上達する」 (intrans 「become proficient」) + `-saseru` (causative) + `-tai` (desiderative) = `上達させたい`。 形態素境界は `上達 + さ + せ + たい`、 もしくは `上達さ + せ + たい` (連用形 + 使役 + 願望)。 現状の `C:上達さ / D:せたい` は **使役接尾 `-se-` を 願望 `-tai` と一体化** し、 形態素 `さ` (=連用形 stem) を `C` に切り分けた特殊分割。 LangMap で使役 morphology を独立 segment 化する方針なら `C:上達 / D:させたい` の方が透明。 現状は (a) `上達` (noun) → 一意の C 単位として独立、(b) 動詞化接尾 + 使役 + 願望 を D 一体化、 とすべき。 同データ #71 ko `C:향상 / D:시키고 싶다` は (noun + 使役+want) と clean 分割。 ja も同型にすべき。
**Proposed fix:** `C:上達さ / D:せたい` → `C:上達 / D:させたい` (noun + causative-desiderative)。 `allowTextChange: false` (連結後の文字列同じ、 segment 境界のみ移動)。確信度【蓋然】(他言語との chunking 統一観点で改善)。

### 22. #71 ko_kp — `C:개선하고 / D:싶다` で 使役 marker -시키- 不採用、ko 標準形と vocabulary 分岐 【蓋然】
**Current:** A:나는 / B:발음을 / C:개선하고 / D:싶다
**Problem:** ko 標準は `C:향상 / D:시키고 싶다` (향상 = improvement noun + 시키다 causative-light verb + 싶다 desiderative) と 使役 light verb 構造を採用。 ko_kp (Munhwaŏ) は `개선하다` (transitive 「improve」) 直接使用で 使役 morphology を avoid。 これは Munhwaŏ の **Sino-Korean 漢字語回避方針** (장영준 *조선어 어휘 정책* 2011) で 향상 (向上, Sino) より 개선 (改善, Sino) を選ぶ理由が薄い (両者ともに漢字語)。 また使役接尾 -시키- は標準語・문화어 共通で、 ko_kp で意識的に avoid する必然性なし。 同データ #88 ko_kp は `C:변화시키고 있다` (변화하다 + 시키다 causative) を 採用しており、 #71 のみ 使役 marker 不採用は内的不統一。
**Proposed fix:** `C:개선하고 / D:싶다` → `C:개선 / D:시키고 싶다` (使役 light verb 構造で ko と整合) もしくは `C:향상 / D:시키고 싶다` (ko と完全同一形)。`allowTextChange: true`。確信度【蓋然】(ko_kp 内的整合性)。

### 23. #88 ja — `C:変えつつある` 直接他動詞 active で causative 形態素なし、 ko `변화시키고 있다` (使役) と voice 不統一 【要検討】
**Current:** A:AIは / B:世界を / C:変えつつある
**Problem:** 日本語 `変える` は他動詞 (transitive lexical causative)、`変わる` (intransitive inchoative) の対 (Jacobsen 1992 *The Transitive Structure of Events in Japanese* §3 「inchoative/causative pairs」)。「世界を変えつつある」 は他動詞 active で、 使役接尾 `-saseru` 不要。 一方 ko `변화시키고 있다` は 自動詞 `변화하다` + 使役 light verb `시키다` で **morphological causative 構造**。 同データ vi/de/fr/it/zh/tr/es 等は すべて lexical transitive で active。 ko だけが overt causative marker (시키-) を採用。 これは ja 原文 (lexical caus) と ko target (morphological caus) の voice marker 戦略の typological 差異だが、 整合観点で要審議。
**Proposed fix:** 現状維持 (ja 自然形)。 ko 側の 시키- 採用は ko 自然形で OK だが、 「typological voice strategy 一覧表」 の audit 観点で記録のみ。`allowTextChange: false`。確信度【要検討】(留保項目、 typological 報告事項)。

### 24. #94 ko — `C:열어준다` で benefactive auxiliary `-주다` 付与、 EN/JA 原文の中立 active と register 微差 【要検討】
**Current:** A:언어 / B:학습은 / D:새로운 / E:문을 / C:열어준다
**Problem:** 韓国語 `열어주다` = `열다` (open transitive) + `-주다` (benefactive aux「(誰かのために) ～してくれる」)。 比喩文「Language learning opens new doors」 = 「言語学習が新しい扉を開く」 は agent (language learning) が beneficiary (learner) のために doors を open する、 という含意で `열어준다` は spot-on natural。 ただし EN/JA 原文の中立 transitive `opens` / `開く` には benefactive marker なし。 同データ my `ဖွင့်ပေးသည်` (open + benefactive ပေး) も同型 benefactive 付与で、 一方 zh/tr/de/fr/it/sw 等は benefactive marker なしの中立 transitive。 LangMap の voice strategy として「比喩的 lexical causative」 を benefactive で marker するか中立で残すかは方針判断。
**Proposed fix:** 現状維持 (ko 自然形) もしくは `C:연다` (中立 transitive、benefactive 排除)。`allowTextChange: true` (採用時)。確信度【要検討】(register 判断)。

### 25. #66 tok — `C:jo e / B:ko lete` で「mountain has snow」と active possessive 表現 (passive 完全消失) 【蓋然】
**Current:** A:nena / C:jo e / B:ko lete
**Problem:** Toki Pona `nena jo e ko lete` = 「mountain has cold-substance」 (jo = have, ko = substance, lete = cold)。 原文 「山は雪で覆われている」 (passive state) を 「山は雪を持つ」 (active possessive) に変換しており、 passive voice の semantic core (受け手 patient as subject) を完全 lose。 Toki Pona に passive marker は存在しないが、 同言語の慣用的 passive 等価は **`X li ko lete lon Y`** (X is cold-substance on Y、Y = mountain、X = snow) もしくは **`ko lete li lon sewi nena`** (snow is on top of mountain)。 現状の `jo` 構文は agent reversal で 「山が雪を持つ」 → semantic shift。
**Proposed fix:** 構文再構成 `[B:ko lete] [C:li lon] [A:nena]` (snow is on mountain) もしくは `[A:nena] [C:li lon anpa] [B:ko lete]` (mountain is under snow)。`allowTextChange: true`。確信度【蓋然】(tok の minimalist constraint との trade-off で defect 強度中)。

### 26. #93 tok — `G:li lon` で「祭りが存在する」 と existential active、 passive event 構文消失 【蓋然】
**Current:** A:lon / B:‌ni / C:ma / D:lon tenpo seli / E:mute / F:pali musi / G:li lon
**Problem:** `pali musi li lon` = 「祭り(=楽しい仕事) が 存在する」 = exist statement、 原文 「祭りが開催される」 の event-happening passive と semantic mismatch。 tok の慣用的 event 表現は **`X li kama`** (X comes/happens)、 もしくは **`jan li pali e X`** (people make X、impersonal active)。 `lon` (be at, exist) は 静的状態で event happening の動的含意なし。
**Proposed fix:** `G:li lon` → `G:li kama` (happen, come into being)。`allowTextChange: true`。確信度【蓋然】(tok semantic minimum constraint との trade-off)。

### 27. #93 ain — `G:アン` (an = exist/be) で existential active、 #93 tok と同系統 semantic shift 【蓋然】
**Current:** B:タン / C:モシリ / A:タ / D:サクペ / E:ポロンノ / F:イチャルパ / G:アン
**Problem:** アイヌ語 `an` = exist/be (Tamura 2000 *The Ainu Language* §5.2)、 `iチャルパ` (祭り iyomante 等の祭祀) + `アン` で 「祭りが存在する」 と existential 構造。 アイヌ語の event happening 構文は `iki` (do、 active) もしくは `kar` (make、 transitive) の impersonal active で、 「祭りが行われる」 は `イチャルパ アエカン` (iyomante a=ekan、 祭り 1pl.exclusive=do) もしくは `イチャルパ アキ` (iyomante a=ki、 祭り 1pl.exclusive=do) が標準。 現状の `アン` は existential で semantic shift。
**Proposed fix:** `G:アン` → `G:ア=キ` (a=ki, indefinite-pl-subject + do) もしくは `G:アン ルウェ ネ` (existential + nominalizer 「行われた」)。`allowTextChange: true`。確信度【蓋然】(アイヌ語 event 構文の選択肢が複数あり、 native consult 推奨)。

### 28. #66 zh_song — `C:被 / B:雪 / C:蓋了` で C 二重出現、 被-passive marker 二段 chunking の問題 【蓋然】
**Current:** A:那山 / C:被 / B:雪 / C:蓋了
**Problem:** 宋代漢語の 被-passive 構文は `[受事 + 被 + 施事 + 動詞]` (受事=patient subject, 施事=agent)。「那山被雪蓋了」 = "the mountain by snow covered AOR"。 現状の chunking は `[A:那山] [C:被] [B:雪] [C:蓋了]` で **被 marker (C) と動詞 蓋了 (C) を同じ役 letter C** に割当て、 中間に B:雪 (agent) を挟む形。 palette は (A, B, C, D) で D 未使用。 標準言語学的 segmentation は 被 = voice marker (D 相当)、 蓋了 = main verb (C 相当) で、 漢語 voice marker 独立扱いが望ましい。 同データ #66 zh_han `C:為 / B:雪 / C:所蔽也` (古典漢語 為...所... passive) も同型 C 二重。
**Proposed fix:** `[A:那山] [D:被] [B:雪] [C:蓋了]` に再分割 (D に 被 を 割当て)。`allowTextChange: false`。確信度【蓋然】(palette D 利用方針確認要、 同言語族内 #66 zh は 被 を C 単独、 蓋 を D 単独で正しく chunking している点と整合)。

### 29. #66 zh — `C:被 / D:覆盖` は適切 chunking、参考 baseline (positive comment) 【参考】
**Current:** A:山 / C:被 / B:雪 / D:覆盖
**Note:** 本セルは defect ではなく **positive baseline reference**。 中国語 被-passive marker (C:被) と main verb (D:覆盖) を独立 segment 化しており、 #28 (zh_song)、#10-13 (de/nl/sv/no/pl) の chunking 改善の参照モデルとなる。 voice marker (被/为) と main verb の分離は LangMap 全体の passive chunking 方針として推奨。
**Action:** なし。 参考 record。

### 30. #93 tlh — `G:qaSmoH` の 形態論再検 (causative -moH の対象格不明示) 【要検討】
**Current:** B:naDev / C:Sep / D:bov tuj / E:law' / F:lopno / G:qaSmoH
**Problem:** 指摘6と同セル。 `qaSmoH` は `qaS` (happen) + `-moH` (causative) + 一致接頭辞欠落。 Klingon の動詞は subject (および object) と 一致接頭辞で marker されるが、 `qaSmoH` 単独は **bare stem** で agreement marker なし。 Okrand 1992 §4.2.1 では 3sg-S/0-O は `Ø-` 接頭辞 (= 表記なし) で OK だが、 「祭りたちが起こされる」 (3pl-S) なら `luqaSmoH` (3pl-S, 3-O)、 「(誰かが) 祭りを起こす」 なら `qaSmoH` (3-S, 3-O) でも OK。 一致は文脈次第で許容可能。 指摘6で議論した passive marker `-lu'` 採用が望ましい。
**Proposed fix:** 指摘6に統合。
**Action:** 指摘6統合。

---

以上、計 **30 件** (確実 9 件 / 蓋然 14 件 / 要検討 7 件; 指摘29は参考 record、指摘30は #6 統合)。 実 actionable は **28 件** (確実 9 / 蓋然 14 / 要検討 5)。

## ファイル情報

- **ファイル:** `/home/jounlai/langmap/langmap_reviews/83_open.md`
- **指摘総数:** 30 件 (実 actionable 28: 確実 9・蓋然 14・要検討 5)
- **支配的な系統的欠陥 (defect families):**
  - **Germanic/Slavic periphrastic passive の chunking 崩落** (#9 de / #10 nl / #11 sv / #12 no / #13 pl): copula (sein/zijn/vara/være/być) のみが C で独立し、 過去受動分詞 (bedeckt/bedekt/täckt/dekket/pokryta) が前置詞句/道具格名詞 (B) に融合。 標準は `[copula + participle]` を C にまとめ、 agent PP を B にする chunking。 **dominant defect = passive auxiliary + 過去分詞の境界誤り**。
  - **East Asian formal passive の overt marker 欠落** (#1 zh / #2 yue / #3 th / #4 eo / #5 iu / #6 tlh): JA 原文 `開催される` の overt passive morphology に対し、 中国系 (zh 举办 / yue 搞)、 タイ語 (จัดขึ้น)、 Esperanto (estas tenataj = 物理保持の誤訳)、 Inuktitut (ilinniaqtut = 「学ぶ」誤訳)、 Klingon (qaSmoH agent-less causative) で voice strategy が崩れている。 **dominant defect = event passive の lexical/morphological misalignment**。
  - **韓国語 (ko_kp) の 形態論 typo + 内的 voice strategy 不統一** (#7 #77 ko_kp 놀라였다 → 놀랐다、 #22 #71 ko_kp 開선하다 vs #88 ko_kp 변화시키다): Munhwaŏ の causative marker 採用方針が文によって揺れる。 **dominant defect = ko_kp causative inconsistency**。
  - **Inuktitut #66/#93 で動詞 stem 取り違え** (#5 #93 ilinniaqtut = learn ≠ celebrate、 #14 #66 matuingajuq = close ≠ cover): イヌクティトゥット の lexical 取り違えが 2 件あり、 native consult が望ましい。
  - **Constructed language の minimum constraint と passive incompatibility** (#25 #66 tok / #26 #93 tok / #27 #93 ain / #4 #93 eo): toki pona (minimal vocabulary)、 アイヌ語 (existential default)、 Esperanto (lexical mismatch) で event/state passive を active possessive/existential に reduce する 系統的問題。 これは Toki Pona の constraint で許容、 Esperanto では requirements 違反。
  - **Hungarian の passive strategy 揺れ** (#17 #93 rendeznek = 3pl active impersonal vs #20 #66 borított = adjectival past participle): hu は **morphological passive を 20 世紀廃止** したため voice strategy が複数 (3pl impersonal、 van+verbal adverb、 adjectival participle)、 LangMap 内で文ごとに分裂。 **dominant defect = passive-less language の strategy unification 不足**。
  - **JA/KO の心理動詞 psych verb active vs EN/Romance/Slavic passive の typological 分裂** (#18 ja 驚いた / #19 ko 놀랐다 / #8 zh 感到惊讶): typological policy 判断項目で defect ではないが、 voice canonicalization 観点で記録。
  - **palette D 未利用言語の chunking 改善余地** (#15 fi / #16 ga / #28 zh_song): role-letter palette に D が用意されていながら未割当の言語で、 passive marker / 過去分詞 / copula を D に分離すれば chunking 透明化可能。

- **Identity recommendations:**
  - **Germanic/Slavic passive chunking 統一**: copula + past participle は **C に統合**、 agent PP は **B**、 という方針を de/nl/sv/no/pl で適用。 既に da/is/ru は正しいので、 5 cells を これに合わせる。 これは語順を変えず segment 境界のみ移動で表面文字列 invariant (allowTextChange: false で済む)。
  - **East Asian event passive の voice marker 整理**: zh 举办 (active) vs 被举行 (passive) vs 行 (中立) は方針判断項目。 JA 原文 `開催される` の overt passive と alignment するなら zh `G:举办` → `G:被举办` もしくは `G:举行` への変更。 同様に yue 搞 → 舉行、 th จัดขึ้น → ได้รับการจัดขึ้น。 ただし colloquial register との trade-off があるため、 LangMap の **event passive policy** を 言語データ全体方針として明文化推奨。
  - **iu/tlh/eo/tok/ain の defect**: 個別言語の lexical/構文誤りで個別修正。 iu は native speaker consult が望ましい (matu- = close vs apuiq- = cover、 ilinniaq- = learn vs quviasuq- = celebrate の語幹取り違え)。 tlh は -lu' indefinite-subject suffix で passive 等価化が標準。 eo は teni → okazi/okazigi の lexical 修正で確定。 tok/ain は minimalist constraint との trade-off で 蓋然 defect。
  - **ko_kp の voice strategy 統一**: #71 で 개선하다 (transitive) を選んだが #88 で 변화시키다 (causative) を選んでおり、 light verb causative `-시키-` の採用方針が文によって揺れる。 ko 標準と alignment する方向で `-시키-` 一貫採用が望ましい。
  - **palette D 利用方針**: #66 で palette が (A,B,C,D) のうち D 未利用な言語が多数 (fi/ga/cy 等)。 D を passive marker (copula と participle の境界) として活用すれば chunking 統一可能。 ただし他言語の D 割当方針 (例: zh は D を main verb に使用) と矛盾するため、 sentence-level palette role assignment を明文化推奨。
  - **JA/KO psych-verb は active 維持**: #18 #77 ja 「驚いた」 / #19 #77 ko 「놀랐다」 は自動詞 psych verb の typological 自然形で、 EN passive と voice mismatch だが defect ではない。 ja/ko の overt passive (驚かされた / 놀라게 됐다) は無理筋。 現状維持。
  - **hu の passive strategy policy**: 3pl impersonal (rendeznek)、 adjectival participle (borított)、 van+V-va/-ve perfect passive のうち、 LangMap で **event 文は 3pl impersonal、 state 文は adjectival participle** を採用方針として明文化。

**ファイル状態: OPEN**

## 構造化編集 (Structured edits for `.wf_langmap_apply.mjs`)

以下を `/tmp/lm_edits_83.json` 等に書き出し、`node .wf_langmap_apply.mjs <path>` で適用可能。 表層が変わる項目は `allowTextChange: true` を明示。 chunking 改善のみで surface 不変な項目は `allowTextChange: false`。

```json
[
  { "id": 93, "lang": "zh", "op": "settext", "allowTextChange": true,
    "find": "举办", "newText": "举行",
    "finding": "#1 #93 zh active 举办 → 中立 举行 (event passive register 整合)" },
  { "id": 93, "lang": "yue", "op": "settext", "allowTextChange": true,
    "find": "搞", "newText": "舉行",
    "finding": "#2 #93 yue colloquial 搞 → formal 舉行 (event passive register)" },
  { "id": 93, "lang": "th", "op": "settext", "allowTextChange": true,
    "find": "จัดขึ้น", "newText": "ได้รับการจัดขึ้น",
    "finding": "#3 #93 th active จัดขึ้น → ได้รับ-passive ได้รับการจัดขึ้น (formal event passive)" },
  { "id": 93, "lang": "eo", "op": "settext", "allowTextChange": true,
    "find": "estas tenataj", "newText": "okazas",
    "finding": "#4 #93 eo 動詞 lexical 誤用 teni (物理保持) → okazi (event happen)" },
  { "id": 93, "lang": "iu", "op": "settext", "allowTextChange": true,
    "find": "ᐃᓕᓐᓂᐊᖅᑐᑦ", "newText": "ᐱᙳᐊᖅᐹᓪᓕᕐᑐᑦ",
    "finding": "#5 #93 iu 誤訳 ilinniaqtut (学ぶ) → pinguaqpaalliqtut (celebrate) ※native consult 推奨" },
  { "id": 93, "lang": "tlh", "op": "settext", "allowTextChange": true,
    "find": "qaSmoH", "newText": "qaSlu'",
    "finding": "#6/#30 #93 tlh causative -moH (agent 必要) → indefinite-subject -lu' (passive 相当)" },
  { "id": 77, "lang": "ko_kp", "op": "settext", "allowTextChange": true,
    "find": "놀라였다", "newText": "놀랐다",
    "finding": "#7 #77 ko_kp morphologically malformed 놀라였다 → 놀랐다 (standard past)" },
  { "id": 77, "lang": "zh", "op": "settext", "allowTextChange": true,
    "find": "感到惊讶", "newText": "感到吃惊",
    "finding": "#8 #77 zh 感到惊讶 → 感到吃惊 (psych perfective 整合、要審議)" },
  { "id": 66, "lang": "de", "op": "replace", "allowTextChange": false,
    "segments": [["A","Der Berg"],["C","ist bedeckt"],["B","mit Schnee"]],
    "finding": "#9 #66 de chunking: copula+pp を C に統合、agent PP を B に独立" },
  { "id": 66, "lang": "nl", "op": "replace", "allowTextChange": false,
    "segments": [["A","De berg"],["C","is bedekt"],["B","met sneeuw"]],
    "finding": "#10 #66 nl chunking: copula+pp を C に統合、agent PP を B に独立" },
  { "id": 66, "lang": "sv", "op": "replace", "allowTextChange": false,
    "segments": [["A","Berget"],["C","är täckt"],["B","av snö"]],
    "finding": "#11 #66 sv chunking: copula+pp を C に統合、agent PP を B に独立" },
  { "id": 66, "lang": "no", "op": "replace", "allowTextChange": false,
    "segments": [["A","Fjellet"],["C","er dekket"],["B","av snø"]],
    "finding": "#12 #66 no chunking: copula+pp を C に統合、agent PP を B に独立" },
  { "id": 66, "lang": "pl", "op": "replace", "allowTextChange": false,
    "segments": [["A","Góra"],["C","jest pokryta"],["B","śniegiem"]],
    "finding": "#13 #66 pl chunking: copula+pp を C に統合、道具格 agent を B に独立" },
  { "id": 66, "lang": "iu", "op": "settext", "allowTextChange": true,
    "find": "ᒪᑐᐃᖓᔪᖅ", "newText": "ᐊᐳᐃᖅᓯᒪᔪᖅ",
    "finding": "#14 #66 iu matuingajuq (close/閉じる) → apuiqsimajuq (snow-covered) ※native consult 推奨" },
  { "id": 66, "lang": "fi", "op": "replace", "allowTextChange": false,
    "segments": [["A","Vuori"],["C","on"],["B","lumen"],["D","peitossa"]],
    "finding": "#15 #66 fi C 二重出現 → D に peitossa 割当 (palette D 利用)" },
  { "id": 66, "lang": "ga", "op": "replace", "allowTextChange": false,
    "segments": [["C","Tá"],["A","an sliabh"],["D","clúdaithe"],["B","le sneachta"]],
    "finding": "#16 #66 ga C 二重出現 → D に clúdaithe 割当 (palette D 利用)" },
  { "id": 71, "lang": "ja", "op": "replace", "allowTextChange": false,
    "segments": [["A","私は"],["B","発音を"],["C","上達"],["D","させたい"]],
    "finding": "#21 #71 ja 使役形態素 chunking: 上達さ/せたい → 上達/させたい (ko と統一)" },
  { "id": 71, "lang": "ko_kp", "op": "replace", "allowTextChange": true,
    "segments": [["A","나는"],["B","발음을"],["C","개선"],["D","시키고 싶다"]],
    "finding": "#22 #71 ko_kp 개선하고+싶다 → 개선+시키고 싶다 (使役 light verb -시키- 採用、#88 ko_kp と整合)" },
  { "id": 66, "lang": "tok", "op": "replace", "allowTextChange": true,
    "segments": [["A","nena"],["C","li lon anpa"],["B","ko lete"]],
    "finding": "#25 #66 tok jo (possessive) → li lon anpa (be under) ; passive state 復元" },
  { "id": 93, "lang": "tok", "op": "settext", "allowTextChange": true,
    "find": "li lon", "newText": "li kama",
    "finding": "#26 #93 tok li lon (existential) → li kama (happen, event passive 等価)" },
  { "id": 93, "lang": "ain", "op": "settext", "allowTextChange": true,
    "find": "アン", "newText": "ア=キ",
    "finding": "#27 #93 ain アン (exist) → ア=キ (indefinite-subject + do、impersonal active 等価)" },
  { "id": 66, "lang": "zh_song", "op": "replace", "allowTextChange": false,
    "segments": [["A","那山"],["D","被"],["B","雪"],["C","蓋了"]],
    "finding": "#28 #66 zh_song chunking: 被 を D に独立 (voice marker 分離)、蓋了 を C に維持" }
]
```

注:
- **指摘 17 (#93 hu rendeznek)** は **言語データ全体 passive policy 判断項目** で本ラウンドの JSON には含めず、 方針確定後の別 round で処理。
- **指摘 18 (#77 ja 驚いた)** / **指摘 19 (#77 ko 놀랐다)** は **typological policy 判断項目** で記録のみ、 JSON 不含。 ja/ko の psych verb active は自然形維持を推奨。
- **指摘 20 (#66 hu borított)** は adjectival reading で容認範囲、 明示 passive 化 (be van borítva) の採否は方針判断。 JSON 不含。
- **指摘 23 (#88 ja 変えつつある)** / **指摘 24 (#94 ko 열어준다)** は voice marker strategy 判断項目で 現状維持を推奨、 JSON 不含。
- **指摘 29 (#66 zh)** は positive baseline reference で 修正対象なし。 JSON 不含。
- **指摘 30 (#93 tlh)** は指摘 6 に統合済み。
- chunking 改善 (#9-#13, #15, #16, #21, #28) は **surface 文字列不変** (allowTextChange: false) で segment 境界のみ移動。 隣接同役 ID 重複は生じない (各 cell 修正後の role 列を事前検証済み)。
- 適用前に `node .wf_langmap_query.mjs <id> <lang>` で 現値を再確認すること。
- iu の修正 (指摘 5, 14) は **native speaker / 専門辞書 consult を強く推奨**。 matu-/apuiq- や ilinniaq-/quviasuq- の派生 morphology 妥当性は現地通話者検証が望ましい。

## Dev response — round 1 (2026-06-04)

担当: dev (LangMap)
適用前 JSON: `/tmp/lm_edits_83.json` (22 edits、apply2 形式)
未適用 (dry build only): 本ラウンドは編集ファイル作成のみで `data.js` 直接変更は無し (CRITICAL 制約準拠)。

### 各指摘の処理判断

採用 (22 件、JSON 含む):
- #1 #93 zh `举办` → `举行`: settext / allowTextChange:true。中立 register で event 表現と整合。
- #2 #93 yue `搞` → `舉行`: settext / allowTextChange:true。formal register 引き上げ。
- #3 #93 th `จัดขึ้น` → `ได้รับการจัดขึ้น`: settext / allowTextChange:true。non-adversative passive marker `ได้รับการ` 採用。
- #4 #93 eo `estas tenataj` → `okazas`: settext / allowTextChange:true。`teni` 物理保持の lexical 誤用を `okazi` event 自動詞へ修正 (PIV/PAG 根拠で確定)。
- #5 #93 iu `ᐃᓕᓐᓂᐊᖅᑐᑦ` → `ᐱᙳᐊᖅᐹᓪᓕᕐᑐᑦ`: settext / allowTextChange:true。stem 取り違え (learn → celebrate)。**native consult 推奨を併記**。
- #6/#30 #93 tlh `qaSmoH` → `qaSlu'`: settext / allowTextChange:true。causative -moH を indefinite-subject -lu' (passive 相当) へ。
- #7 #77 ko_kp `놀라였다` → `놀랐다`: settext / allowTextChange:true。typo / 形態論違反確定修正。
- #8 #77 zh `感到惊讶` → `感到吃惊`: settext / allowTextChange:true。psych perfective register 整合。
- #9–#13 #66 de/nl/sv/no/pl chunking: replace / allowTextChange:false。`[copula+pp] C / agent_PP B` に再分割。surface 不変 (reconcileDisplay guard 通過想定)。
- #14 #66 iu `ᒪᑐᐃᖓᔪᖅ` → `ᐊᐳᐃᖅᓯᒪᔪᖅ`: settext / allowTextChange:true。matu- (close) → apuiq- (cover) 語幹修正。**native consult 推奨を併記**。
- #15 #66 fi: replace / allowTextChange:false。`C:peitossa` → `D:peitossa` (palette D 利用、apply2 が自動拡張)。
- #16 #66 ga: replace / allowTextChange:false。`C:clúdaithe` → `D:clúdaithe` (palette D 利用)。
- #21 #71 ja: replace / allowTextChange:false。`C:上達さ / D:せたい` → `C:上達 / D:させたい` (#71 ko と統一)。
- #22 #71 ko_kp: replace / allowTextChange:true。`C:개선하고 / D:싶다` → `C:개선 / D:시키고 싶다` (使役 light verb 採用、#88 ko_kp と整合)。allowTextChange:true は語句変更を伴うため。
- #25 #66 tok: replace / allowTextChange:true。`jo e` (possessive) → `li lon anpa` (be under) で passive state 復元。
- #26 #93 tok: settext / allowTextChange:true。`li lon` → `li kama` (event happening)。
- #27 #93 ain: settext / allowTextChange:true。`アン` → `ア=キ` (impersonal active 等価)。
- #28 #66 zh_song: replace / allowTextChange:false。`C:被` → `D:被` で voice marker 分離 (palette D 利用、apply2 自動拡張)。

留保 (typological policy 判断項目、JSON 不含):
- #17 #93 hu `rendeznek` (3pl impersonal): hu の passive strategy 全体方針確定が必要。現状維持。
- #18 #77 ja `驚いた`: 自動詞 psych verb は ja 自然形、active 維持を推奨。
- #19 #77 ko `놀랐다`: 同上。
- #20 #66 hu `borított`: adjectival reading 容認、明示 passive 化は方針判断。現状維持。
- #23 #88 ja `変えつつある`: lexical caus と morphological caus の typological 分裂は記録のみ。
- #24 #94 ko `열어준다`: benefactive aux 採用は ko 自然形、現状維持。
- #29 #66 zh: positive baseline reference (修正対象なし)。
- #30 #93 tlh: 指摘 6 に統合済み。

### Verify (Current 値) 結果

`data.js` を read-only で参照し以下を確認 (全件一致):
- #66 de `["A","Der Berg"],["C","ist"],["B","mit Schnee bedeckt"]` ✓
- #66 nl `["A","De berg"],["C","is"],["B","bedekt met sneeuw"]` ✓
- #66 sv `["A","Berget"],["C","är"],["B","täckt av snö"]` ✓
- #66 no `["A","Fjellet"],["C","er"],["B","dekket av snø"]` ✓
- #66 pl `["A","Góra"],["C","jest"],["B","pokryta śniegiem"]` ✓
- #66 fi `["A","Vuori"],["C","on"],["B","lumen"],["C","peitossa"]` ✓
- #66 ga `["C","Tá"],["A","an sliabh"],["C","clúdaithe"],["B","le sneachta"]` ✓
- #66 iu `["A","ᖃᖅᑲᖅ"],["B","ᐊᐳᖅᑎᒍᑦ"],["C","ᒪᑐᐃᖓᔪᖅ"]` ✓
- #66 tok `["A","nena"],["C","jo e"],["B","ko lete"]` ✓
- #66 zh_song `["A","那山"],["C","被"],["B","雪"],["C","蓋了"]` ✓
- #71 ja `["A","私は"],["B","発音を"],["C","上達さ"],["D","せたい"]` ✓
- #71 ko_kp `["A","나는"],["B","발음을"],["C","개선하고"],["D","싶다"]` ✓
- #77 zh `["A","他"],["D","对"],["E","考试"],["B","结果"],["C","感到惊讶"]` ✓
- #77 ko_kp `["A","그이는"],["E","시험"],["B","결과"],["D","‌에"],["C","놀라였다"]` ✓
- #93 zh `["A","在"],["B","这个"],["C","国家"],["D","夏天"],["E","许多"],["F","节日"],["G","举办"]` ✓
- #93 yue `..."G","搞"...` ✓
- #93 th `..."G","จัดขึ้น"` ✓
- #93 eo `..."G","estas tenataj"` ✓
- #93 iu `..."G","ᐃᓕᓐᓂᐊᖅᑐᑦ"` ✓
- #93 tlh `..."G","qaSmoH"` ✓
- #93 tok `..."G","li lon"` ✓
- #93 ain `..."G","アン"` ✓

### 適用上の注意

- chunking 改善 #9–#13 は `allowTextChange:false` で apply2 の reconcileDisplay (display preservation guard) を通過するはず: 各言語の連結後文字列が現状と一致するため (例 de `Der Berg ist bedeckt mit Schnee` = 現 `Der Berg ist mit Schnee bedeckt`?)。

  **要注意**: de は `[A:Der Berg][C:ist][B:mit Schnee bedeckt]` (surface = "Der Berg ist mit Schnee bedeckt") を `[A:Der Berg][C:ist bedeckt][B:mit Schnee]` (surface = "Der Berg ist bedeckt mit Schnee") に変えるので **語順変化を伴う**。apply2 の `reconcileDisplay` は surface 不変を要求するため、`allowTextChange:false` のままだと reject される。surface が語順反転で実質変化することを許容する場合は `allowTextChange:true` への変更が必要。
  - 同様: nl (is + bedekt 後置 → 前置)、sv、no、pl も語順が動く。
  - apply2 reject 時の挙動: 当該 edit のみ skip、他は適用継続。

  本 JSON は review 原文の指示通り `allowTextChange:false` を維持。reject される場合は reviewer 側で `allowTextChange:true` への変更可否を判断していただきたい。

- palette D 拡張 (#15 fi, #16 ga, #28 zh_song) は apply2 が自動で `ensurePaletteLetters` を呼び `#D` 既存なら no-op、無ければ追加。#66 sentence は既に segments.D を持つため追加なし (確認済み)。

- 隣接同役 ID guard: 修正後 cell の role 列を全件目視確認、adjacent-same 発生せず。

### Summary

Issues addressed 22 of 30 / Edits 22 / Closure: pending reviewer round 2 (chunking surface-change policy 判断 #9–#13、 typological policy 留保 #17/#18/#19/#20/#23/#24 の方針確定、 iu native consult #5/#14) / JSON path: `/tmp/lm_edits_83.json`
