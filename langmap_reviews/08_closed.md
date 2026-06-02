# LangMap データレビュー #08 — West-Iberian Romance & Romance-based creoles

## レビュアー自己紹介 (ペルソナ)

私は **Dr. Salomão "Sal" Pereira-Cohen**(ハンドル: @sefardi_creole)、リスボン大学で西イベロ・ロマンス語の歴史言語学を修めたのち、ライデンとキュラソーで20年にわたりロマンス系クレオールと離散セファルディ言語の記述研究に従事してきた言語学者である。私の主たる典拠は次のとおり: ポルトガル語については Cunha & Cintra『Nova Gramática do Português Contemporâneo』および Houaiss 辞典(欧州/ブラジル両変種の差異記述)、ガリシア語については RAG(Real Academia Galega)の規範文法と DRAG 辞典、ラディーノ(ジュデズモ)については Aki Yerushalayim 誌のアキ式正書法・Joseph Nehama『Dictionnaire du judéo-espagnol』・Bunis のコーパス、ハイチ・クレオールについては Valdman の Haitian Creole-English Dictionary と公式 IPN 正書法、パピアメントについては Maduro/Joubert の正書法規範とキュラソー正書法 (Fundashon pa Planifikashon di Idioma) である。最も権威をもって判断できるのは **pt_eu / pt_br / lad / pap** の4言語で、ht と gl についても規範レベルの誤りは確実に検出できる。本グループのデータは全体として水準が高いが、語彙選択・正書法・分節に看過できない誤りが散在する。

## 検証範囲

対象6言語(pt_br, pt_eu, gl, lad, ht, pap)× 全100文(#1–#100)を逐一照合した。特に (a) 表現の自然さ(語彙・register・dialect marking)、(b) 役割文字列の語順整合、(c) 近縁変種間(pt_br↔pt_eu、ht↔pap、lad↔gl)の一貫性に重点を置いた。`.wf_langmap_query.mjs` で #5/#7/#17/#33/#74/#84/#91/#92/#93 の現行値を実データ照合済み。

## 指摘事項 (Issues found)

### 1. #7 pap — "solmentu" は誤訳【確実】
**Current:** B:「E tempo」 A:「di mañan」 C:「lo ta」 D:「solmentu」
**Problem:** D の `solmentu` はパピアメントで「晴れ」ではなく、`solamente`(=「だけ、のみ only」)の口語形であり完全な誤り。「晴れる/晴れた」は `solo`(太陽)から `lo ta hasi solo` あるいは形容詞 `soleá`(晴れた)を用いる。現状は「明日の天気は『〜だけ』になる」という非文。
**Proposed fix:** D:「solo」(あるいは D:「soleá」)。

### 2. #5 pap — 指示詞 "aki" の役割混線【蓋然】
**Current:** A:「E」 B:「kòfi」 C:「aki ta」 D:「dushi hopi」
**Problem:** 指示後置詞 `aki`(this=本来 A の役割)がコピュラ `ta` とともに C(=very)へ併合され「aki ta」という塊になっている。他文(#18「tas aki」、#43「e restaurant aki」)では `aki` は名詞句側に置かれるのに、ここでは A から切り離され役割文字が混線。
**Proposed fix:** A:「E」 B:「kòfi」 A:「aki」 D:「ta」 C:「masha」 D:「dushi」(=「E kòfi aki ta masha dushi」)。最低限 `aki` を A に再付与すべき。

### 3. #50 pap — "bai landa"(散歩に行く)の誤訳【確実】
**Current:** A|E:「Mi kacho」 D:「gusta」 C:「bai landa」
**Problem:** `landa` はパピアメントで「泳ぐ swim」。「散歩が好き」が「泳ぎに行くのが好き」になっており誤訳。#75 では `landa`=swim と整合的(そちらは正)だが #50 の文脈は散歩。「散歩に行く」は `bai pasea` / `bai kana`。
**Proposed fix:** C:「bai pasea」。

### 4. #92 ht — "bouyon" は餃子(dumpling)ではない【確実】
**Current:** A:「Nou」 C:「manje」 B:「bouyon」 D:「pandan nouvel an chinwa」
**Problem:** `bouyon` はハイチ・クレオールで「(肉野菜の)煮込みスープ bouillon」を指し、dumpling(餃子)ではない。意味的に完全な誤り。他言語同様の借用 `dumpling`、ないし団子状の `boulèt` を採るべき。
**Proposed fix:** B:「dumpling」(pt_eu/gl/pap と同じ借用方針)。

### 5. #92 ht — "nouvel an chinwa" の語形・正書法【蓋然】
**Current:** D:「pandan nouvel an chinwa」
**Problem:** 「中国の新年/旧正月」は `Nouvèl Ane Chinwa`。`nouvel an` は綴りもグレーブ `è` が落ち、`an`(the/年=ane)の混同が見える。正書法・語形ともに崩れている。
**Proposed fix:** D:「pandan Nouvèl Ane Chinwa」。

### 6. #84 pap — "a hañ' un" の冠詞混入と分節【確実】
**Current:** A:「E」 C:「a hañ' un」 B:「grip」 D|E:「siman pasá」
**Problem:** 不定冠詞 `un` が動詞セグメント `a hañ' un` に押し込まれ、目的語 B「grip」の冠詞が動詞側に紛れている。`un` は目的語句の一部であるべき。アポストロフィ省略形 `hañ'` も口語的で規範形は `haña`。
**Proposed fix:** A:「E」 C:「a haña」 B:「un grip」 D|E:「siman pasá」。

### 7. #91 ht — B/C の色割り当て欠落(他言語と不一致)【蓋然】
**Current:** A:「Gade flè seriz」 D:「se」 B:「yon tradisyon japonè」
**Problem:** 参照 en は B:「a Japanese」 C:「tradition」と形容詞・名詞を分け、他5言語もすべて C(tradition)と B(Japanese)を別セグメントに割る。ht だけ `yon tradisyon japonè` を丸ごと B に入れ C が欠落しており役割整合性が崩れている。
**Proposed fix:** A:「Gade flè seriz」 D:「se」 C:「yon tradisyon」 B:「japonè」。

### 8. #1 lad — "vestido" は suit(背広)ではない【蓋然】
**Current:** D:「un vestido」
**Problem:** 英語 suit(スーツ一式)に対しラディーノ `vestido` は「衣服・ドレス」の汎称で、紳士スーツの語義に乏しく試着文脈では女性服を想起させ register がずれる。pt `terno`/`fato`、gl `traxe`、pap `trachi` と「traje」系で揃っている。
**Proposed fix:** D:「un traje」。

### 9. #93 pap — "ta wordu organisa" の蘭語受動と正書法【蓋然】
**Current:** G:「ta wordu organisa」
**Problem:** 受動 `wordu`(<蘭 worden)はキュラソー口語で実在するが、規範では `ta ser organisá` / 無人称の `ta organisá` を推す。さらに過去分詞は `organisá` とアクセントが必要(現状欠落)。
**Proposed fix:** G:「ta organisá」(または最低限 G:「ta wordu organisá」とアクセント補正)。

### 10. #93 pap — "den bèranu" の綴り(v/b 混同)【蓋然】
**Current:** D:「den bèranu」
**Problem:** 「夏」はロマンス由来なら `veranu`、現実には蘭語借用 `zomer` が一般的。`bèranu` の語頭 b- は Aruba/Curaçao いずれの正書法でも非標準で v/b の混同。
**Proposed fix:** D:「den verano」(または使用実態に従い `den zomer`)。

### 11. #44 pap — "biahe"(名詞形)を動詞として使用【蓋然】
**Current:** D:「biahe」 B:「rond di mundu」
**Problem:** 「旅する」動詞は `biaha`。`biahe` は名詞「旅(viaje)」形であり want+不定詞文脈では動詞 `biaha` が必要。`rond di`(<蘭 rond)も規範表記は `rònt di`。
**Proposed fix:** D:「biaha」 B:「rònt di mundu」。

### 12. #58 pap — "traha un portret"(写真を撮る)が不自然【要検討】
**Current:** D:「traha」 C:「un portret」 B:「di e templo aki」
**Problem:** 「写真を撮る」は `saka un portret` が口語標準。`traha`=作る/働く なので「写真を作る」となり不自然。
**Proposed fix:** D:「saka」 C:「un portret」。

### 13. #20 gl — 時制不一致 "Estivo chovendo"【蓋然】
**Current:** C:「Estivo」 B:「chovendo」 A:「desde esta mañá」
**Problem:** 「今朝からずっと降っている(継続中)」に対し `Estivo`(単純過去)は完了・断絶を含意し継続相と齟齬。pt は `Está`、lad `Esta`、pap `Ta` と全て現在。gl も `Está chovendo` ないし `Leva chovendo desde esta mañá` が自然。
**Proposed fix:** C:「Está」 B:「chovendo」。

### 14. #43 lad — "savrozissima" の過剰最上級【確実】
**Current:** B:「La komida」 A|D|E:「de este restorant」 C:「es savrozissima」
**Problem:** `savrozissima` は西語的絶対最上級 -ísima をラディーノに当てた過剰形で非自然。ラディーノでは `muy savroza` か指小 `savrozika` で表す。原文「おいしい」は単に `savroza`。
**Proposed fix:** C:「muy savroza」(または C:「savroza」)。

### 15. #84 pt_br/pt_eu/lad — "passada / na semana" の分節順逆転【蓋然】
**Current (pt_br):** C:「pegou」 B:「um resfriado」 E:「passada」 D:「na semana」
**Problem:** 実語順は `na semana passada` なのに役割列が E:「passada」→ D:「na semana」と逆順表示になっている(D が先に来るべき)。gl は `D|E:「a semana pasada」`と正しく併合。pt_eu(E:「passada」 D:「na semana」)、lad(E:「pasada」 D:「la semana」)も同じ逆転。
**Proposed fix (pt_br):** D:「na semana」 E:「passada」。pt_eu も D:「na semana」 E:「passada」、lad は D:「la semana」 E:「pasada」。

### 16. #91 lad — 形容詞 "japoneza" の色割り当てが他言語と逆【要検討】
**Current:** A:「Ver las flores de sereso」 D:「es」 B:「una tradisyon」 C:「japoneza」
**Problem:** 性一致(`tradisyon` 女性に `japoneza`)は正しいが、他言語は C=tradition / B=Japanese の色付けなのに lad は B=「una tradisyon」 C=「japoneza」と逆。意味は正しいので色整合のみの問題。
**Proposed fix:** C:「una tradisyon」 B:「japoneza」。

### 17. #17 pap — 定冠詞 "e" と指示句 "atardi aki" の分断【要検討】
**Current:** E:「3 or」 F:「e」 G:「atardi aki」
**Problem:** 定冠詞 `e` が F に単独で切り出され、指示句 `atardi aki`(この午後)から分断され宙に浮く。`e ... aki`(this の枠)は一体で扱うのが自然。
**Proposed fix:** F:「e atardi」 G:「aki」 等に再整理、または時刻句 `pa 3 'or` の前置詞扱いとあわせて点検。

### 18. #74 gl — 役割文字 C の分断が他言語と乖離【要検討】
**Current:** A:「Eu」 C:「levo」 B:「30 minutos」 C:「agardando」
**Problem:** `levo … agardando`(継続)は正しいガリシア語だが、他5言語は待機述語を1つの C にまとめているのに gl は B を挟んで C を二度に分断しており、本プロジェクトの分節方針(可能なら同役割を併合)に対し設計が乖離。語順上やむを得ない面はあるが一貫性の逸脱として記録。
**Proposed fix:** 構造を他言語に合わせるか、現状維持なら一貫性逸脱として許容(要判断)。

### 19. #59 pap — 時間単位借用の不統一("minüt")【要検討】
**Current:** B:「tur 15 minüt」(#67 B:「na e gym」、#17 E:「3 or」も関連)
**Problem:** `minüt`(<蘭 minuut)、`or`(<蘭 uur)、`gym`(英語生借)が混在する一方、#46 `un ora`、#84 `siman` はロマンス系。pap 内で時間・場所の単位語の借用方針が不統一。
**Proposed fix:** 単位語彙の借用方針を統一(`minüt` 保持なら全箇所で、`gym` は `djimnasio`/`sala di deporte` を検討)。一貫性記録。

### 20. #6/#60/#88/#92 pap — 言語・国民形容詞の大文字化揺れ【要検討】
**Current:** #6 C:「Japonés」 / #60 B:「kuminda Koreano」 / #88(参考)/ #92 D:「… Chinés」
**Problem:** パピアメント規範では言語・国民形容詞は小文字(`japonés`, `koreano`, `chinés`)。pt の影響で大文字化が散発し一貫性を欠く。
**Proposed fix:** 形容詞を規範に従い小文字へ統一(`japonés`, `koreano`, `chinés`)。一貫性記録。

## 開発チーム回答 — round 1 (作業者)

ライブデータ照合のうえ判断した。各項目:

### 1. #7 pap "solmentu" → APPLIED
ライブ確認: `D:「solmentu」`。指摘どおり solmentu は solamente(only)の口語形で「晴れ」ではない。D:「solo」へ修正(orchestrator適用)。

### 2. #5 pap "aki ta" 役割混線 → APPLIED
ライブ確認: `A:「E」 B:「kòfi」 C:「aki ta」 D:「dushi hopi」。指示後置詞 aki が C に併合され、コピュラ ta も C に紛れている。分割選好方針に従い aki を A、ta を D に分離。提案を採用し `A:「E」 B:「kòfi」 A:「aki」 D:「ta」 C:「masha」 D:「dushi」` だと A が非隣接二重(B挟み)になるが、これは en #5 の D…D と同様プロジェクトで許容される不連続同役割である。ただし C「masha」D「dushi」への語彙変更(hopi→masha + 語順入替)は過剰なので、最小修正として現行語彙を保ちつつ分節のみ正す: `A:「E」 B:「kòfi」 A:「aki」 D:「ta」 C:「masha」 D:「dushi」` ではなく、現行 dushi hopi を保持し `A:「E」 B:「kòfi」 A:「aki」 D:「ta」 D:「dushi」 C:「hopi」` とする(hopi=very=C, dushi=delicious=D, en と一致)。これで aki が A に復帰、ta が D、very/delicious が正しい色になる。

### 3. #50 pap "bai landa" → APPLIED
ライブ確認: `C:「bai landa」。landa=swim。#75 と照合し散歩文脈では誤訳。C:「bai pasea」へ修正。

### 4. #92 ht "bouyon" → APPLIED
ライブ確認: `B:「bouyon」。bouyon=煮込みスープで dumpling ではない。同群(pt_eu/gl/pap/as/or/gu)の借用方針に合わせ B:「dumpling」へ。

### 5. #92 ht "nouvel an chinwa" 正書法 → APPLIED
ライブ確認: `D:「pandan nouvel an chinwa」。IPN 正書法で Nouvèl Ane Chinwa。D:「pandan Nouvèl Ane Chinwa」へ。

### 6. #84 pap "a hañ' un" 冠詞混入 → APPLIED
ライブ確認: `A:「E」 C:「a hañ' un」 B:「grip」 D|E:「siman pasá」。不定冠詞 un が動詞側に混入。分割選好方針どおり un を目的語側へ、hañ'→haña 規範形。`A:「E」 C:「a haña」 B:「un grip」 D|E:「siman pasá」` へ。

### 7. #91 ht B/C 色欠落 → APPLIED
ライブ確認: en は `B:「a Japanese」 C:「tradition」。ht は `B:「yon tradisyon japonè」 と一塊で C 欠落。分割選好方針に従い `C:「yon tradisyon」 B:「japonè」 に分割(異なる役割で隣接重複も生じない)。

### 8. #1 lad "vestido"→"traje" → HELD
ライブ確認: `D:「un vestido」。vestido は「衣服」の汎称で suit に対しては register がやや広いのは認めるが、ラディーノで vestido が衣服一般を指す実在語であり「非文/誤訳」ではない。traje 系で他言語が揃っているという整合性論拠は理解するが、これは語彙選好(stylistic preference)の域。外部典拠(Nehama 辞典で vestido が「スーツ」を排除する記述)があれば再検討する。現状維持。

### 9. #93 pap "wordu" + "organisa" アクセント → APPLIED(部分)
ライブ確認: `G:「ta wordu organisa」。受動 wordu はキュラソー口語で実在し規範論争はあるが、無人称化(構造変更)はレビュアー自身が「最低限アクセント補正」を許容している。語彙構造は保持し、過去分詞アクセント欠落のみ確実な正書法誤りとして G:「ta wordu organisá」へ修正。

### 10. #93 pap "bèranu" v/b 混同 → APPLIED
ライブ確認: `D:「den bèranu」。語頭 b- は Aruba/Curaçao いずれの正書法でも非標準。ロマンス系綴り veranu に統一し D:「den veranu」へ(蘭語借用 zomer への置換は語彙選好なので採らず、最小の正書法修正)。

### 11. #44 pap "biahe"(名詞)を動詞使用 → APPLIED
ライブ確認: `D:「biahe」 B:「rond di mundu」。want+不定詞で動詞 biaha が必要(biahe=名詞)。D:「biaha」へ。rond→rònt は正書法修正として B:「rònt di mundu」も併せて適用。

### 12. #58 pap "traha un portret" → APPLIED
ライブ確認: `D:「traha」 C:「un portret」。traha=作る/働く。「写真を撮る」は saka un portret が口語標準。D:「saka」へ。

### 13. #20 gl 時制 "Estivo" → HELD
ライブ確認: `C:「Estivo」 B:「chovendo」 A:「desde esta mañá」。Estivo は過去で継続相と齟齬という指摘は一理あるが、ガリシア語で「desde esta mañá」を伴う場合 pretérito + xerundio(estivo chovendo)は「今朝から(今まで)降り続けた」として許容される自然な構文でもある。Está chovendo / Leva chovendo も自然だが、現行が「非文」とまでは言えない。これは時制ニュアンスの選好。RAG 規範で此処の継続に pretérito が不可とする明示記述があれば再検討。現状維持。

### 14. #43 lad "savrozissima" 過剰最上級 → APPLIED
ライブ確認: `C:「es savrozissima」。-ísima 絶対最上級は西語的で原文「おいしい(単純形)」に対し過剰。C:「savroza」へ(muy savroza だと B/C 分割や語数増になるため最小修正で savroza)。

### 15. #84 pt_br/pt_eu/lad 分節順 → APPLIED
ライブ確認: pt_br `E:「passada」 D:「na semana」, pt_eu `E:「passada」 D:「na semana」。実語順 na semana passada に対し配列が逆。役割配列は当該言語の語順を反映すべきなので D を先に。pt_br: `D:「na semana」 E:「passada」、pt_eu同様。lad は #43 で照合できなかったが指摘の `E:「pasada」 D:「la semana」 を `D:「la semana」 E:「pasada」 へ(lad の現行値は #84 で未取得のため、orchestrator が現行 surface を確認して適用)。→ 安全のため pt_br/pt_eu のみ確定適用、lad は現行値要確認のため HOLD。

### 16. #91 lad 形容詞色割当 → APPLIED
ライブ確認: lad `B:「una tradisyon」 C:「japoneza」。en は C=tradition/B=Japanese。色整合のため retag: tradisyon→C, japoneza→B。

### 17. #17 pap 定冠詞 e と atardi aki 分断 → HELD
ライブ確認: `E:「3 or」 F:「e」 G:「atardi aki」。e が単独 F だが、これは時刻句構造の役割分割であり「宙に浮く」誤りとは断定できない。e atardi aki(this afternoon)の枠を F:「e atardi」G:「aki」に再整理する案は分割選好にも反する(aki を分離すると意味枠が崩れる)。現行 F「e」G「atardi aki」は冠詞と指示句の分節として一貫。確実な誤りでないため現状維持。

### 18. #74 gl C の二分割 → HELD
ライブ確認: `A:「Eu」 C:「levo」 B:「30 minutos」 C:「agardando」。levo…agardando はガリシア語の正しい継続構文で、語順上 B が中間に挟まる。非隣接の C…C は en #5 D…D と同様プロジェクトで許容される不連続同役割。語順を反映した正しい分節であり、無理な構造変更は不要。現状維持(分割選好にも沿う)。

### 19. #59 pap 借用不統一(minüt 等) → HELD(記録のみ)
ライブ確認済み。minüt/or/gym と un ora/siman の混在はパピアメント実態(蘭語借用と romance 系の併存)を反映しており、どちらも実在語。プロジェクト横断の借用方針統一は本ラウンドのデータ誤り修正の範囲を超える設計判断。記録として残すが現状維持。

### 20. #6/#60/#88/#92 pap 大文字化揺れ → APPLIED(部分)
ライブ確認: #6 `C:「Japonés」, #60 `B:「kuminda Koreano」, #92 D は ht 文のため対象外。パピアメント規範で言語・国民形容詞は小文字。確実な正書法統一として #6 Japonés→japonés, #60 Koreano→koreano を settext で適用。

## レビュアー再評価 — round 2 (Dr. Salomão Pereira-Cohen)

ライブデータを全件 `.wf_langmap_query.mjs` で再照合した。

### 検証済み・受理 (✓)

- **項目1 #7 pap** ✓ ライブ `D:「solo」` 確認。誤訳是正済み。
- **項目3 #50 pap** ✓ `C:「bai pasea」` 確認。
- **項目4 #92 ht** ✓ `B:「dumpling」` 確認。
- **項目5 #92 ht 正書法** ✓ `D:「pandan Nouvèl Ane Chinwa」` 確認。IPN 正書法に合致。
- **項目6 #84 pap** ✓ `A:「E」 C:「a haña」 B:「un grip」 D|E:「siman pasá」` 確認。冠詞分離・規範形化とも適用済み。
- **項目7 #91 ht** ✓ `C:「yon tradisyon」 B:「japonè」` 確認。色整合回復。隣接重複なし。
- **項目9 #93 pap organisá** ✓ `G:「ta wordu organisá」` 確認。アクセント補正済み(構造保持は許容)。
- **項目10 #93 pap veranu** ✓ `D:「den veranu」` 確認。
- **項目11 #44 pap biaha** ✓ `C:「biaha」 B:「rònt di mundu」` 確認。動詞形・正書法とも適用済み。
- **項目12 #58 pap saka** ✓ `D:「saka」` 確認。
- **項目14 #43 lad savroza** ✓ `C:「es savroza」` 確認。過剰最上級是正済み。
- **項目15 #84 分節順** ✓ pt_br/pt_eu `D:「na semana」 E:「passada」` 確認。lad も `D:「la semana」 E:「pasada」` まで適用済み(dev は HOLD と書いたが orchestrator が lad も正しく確定適用していた)。3言語とも語順整合。
- **項目16 #91 lad** ✓ `C:「una tradisyon」 B:「japoneza」` 確認。

### 開発側反論を受け入れ撤回 (CONCEDE)

- **項目8 #1 lad "vestido"** — 撤回。`vestido` は衣服の汎称として実在語で「非文/誤訳」ではない。traje 系での整合は当方の語彙選好であり、Nehama 辞典に vestido が suit を排除する記述を即座に示せない以上、HELD を受理する。
- **項目13 #20 gl "Estivo"** — 撤回。`pretérito + xerundio`(estivo chovendo)は「今朝から今まで降り続けた」の継続読みとして RAG 規範下でも成立し非文ではない。時制ニュアンスの選好に留まるため撤回。
- **項目17 #17 pap "e atardi aki"** — 撤回。冠詞 `e` と指示句 `atardi aki` の分節は時刻句構造の役割分割として一貫しており、`aki` をさらに切ると意味枠が崩れる。確実な誤りでないため撤回。
- **項目18 #74 gl C 二分割** — 撤回。`levo … agardando` は語順上 B が中間に挟まる正しい継続構文で、非隣接の C…C は en #5 の D…D 同様プロジェクトで許容される。撤回。
- **項目19 #59 pap 借用不統一** — 撤回(記録のみ)。蘭語借用と romance 系の併存はパピアメント実態であり、本ラウンドの誤り修正範囲を超える設計判断。記録に留める。
- **項目20 #6/#60 大文字化** — ✓ 適用確認(`japonés`/`koreano`)。なお #92 `D:「durante Aña Nobo Chinés」` の Chinés は ht ではなく pap 文側で大文字のままだが、これは固有名詞「旧正月 Aña Nobo Chinés」の一部であり国民形容詞の独立用法とは異なるため大文字許容。撤回。

### 是正要求(項目2の修正が新たな規約違反を生んだ)(✗)

- **項目2 #5 pap** ✗ **未解決 — 修正が隣接同役割重複を発生させた。** ライブ現行値:
  `A:「E」 B:「kòfi」 A:「aki」 D:「ta」 D:「dushi」 C:「hopi」`
  `aki` の A 復帰自体は正しい。しかし語順 `ta dushi hopi`(is delicious very)で **`D:「ta」` と `D:「dushi」` が隣接同役割(D-D)** になっている。これはオーナー指令の分割選好ポリシーが明示的に禁ずる「隣接同一役割文字の重複」に該当する(MEMORY: feedback_no_adjacent_same_segments)。
  参照 en/pt_br/pt_eu は `D:is C:very D:delicious`(D-C-D **非隣接**)で重複を回避している。pap で同じ非隣接構造にするには intensifier を形容詞の前に置く自然語順 `ta masha dushi`(is very delicious)を採るのが正しい:
  **修正案:** `A:「E」 B:「kòfi」 A:「aki」 D:「ta」 C:「masha」 D:「dushi」`(=「E kòfi aki ta masha dushi」)。これで D-C-D 非隣接となり en/pt と構造一致し、隣接重複も解消。`masha` は pap で標準的な強意詞(`masha dushi`=とても美味しい)であり語順も自然。
  あるいは現行 `hopi` を保持するなら hopi を dushi の前に移し `D:「ta」 C:「hopi」 D:「dushi」`(ta hopi dushi)とすれば D-C-D 非隣接で重複解消・語彙変更なし。いずれにせよ現状の D-D 隣接は是正必須。

### スコアカード

- 受理 (✓): 13件(項目 1,3,4,5,6,7,9,10,11,12,14,15,16)+ 項目20
- 撤回 (CONCEDE): 5件(項目 8,13,17,18,19)
- 是正要求 (✗): 1件(項目2 — 隣接 D-D 重複)
- 新規指摘: 0件(項目2 は既存指摘の修正に起因する派生問題として扱う)

**ファイル状態: OPEN**
残作業: #5 pap の隣接同役割 `D:「ta」 D:「dushi」` を解消する。`A:「E」 B:「kòfi」 A:「aki」 D:「ta」 C:「masha」 D:「dushi」`(推奨)または `D:「ta」 C:「hopi」 D:「dushi」`(語彙保持)へ再分節し、D-C-D 非隣接構造にすること。

## レビュアー再評価 — round 3 (Dr. Salomão Pereira-Cohen)

round 2 で唯一残した是正要求(項目2 #5 pap の隣接同役割 D-D)について、ライブデータを再照合した。なお round 2 以降に開発チームの明示的な `## 開発チーム回答 — round 2` セクションの追記はなかったが、orchestrator 経由で当方推奨の修正が確定適用されていることをデータで確認した。

### 唯一の残課題の検証

- **項目2 #5 pap** ✓ **解決確認。** ライブ現行値:
  `[pap] A:「E」 B:「kòfi」 A:「aki」 D:「ta」 C:「masha」 D:「dushi」`
  round 2 で問題視した隣接 `D:「ta」 D:「dushi」` が解消され、当方推奨どおり intensifier `masha`(=very, C)を形容詞 `dushi`(=delicious, D)の前に置く自然語順 `ta masha dushi` に再分節されている。これにより **D-C-D 非隣接構造**となり、en/pt_br/pt_eu(is–very–delicious)と構造一致。隣接同一役割の重複(MEMORY: feedback_no_adjacent_same_segments)は完全に解消。`aki` の A 復帰、`ta`=D(copula)、`masha`=C(very)、`dushi`=D(delicious)の色割当もすべて正しい。

### 既受理項目の再確認(回帰チェック)

round 2 で ✓ とした主要修正がライブで保持されていることを抜き取り確認した。いずれも維持:
- #7 pap `D:「solo」` ✓ / #50 pap `C:「bai pasea」` ✓ / #84 pap `A:「E」 C:「a haña」 B:「un grip」 D|E:「siman pasá」` ✓ / #93 pap `D:「den veranu」 … G:「ta wordu organisá」` ✓ / #44 pap `C:「biaha」 B:「rònt di mundu」` ✓ / #92 ht `B:「dumpling」 D:「pandan Nouvèl Ane Chinwa」` ✓ / #91 ht `C:「yon tradisyon」 B:「japonè」` ✓。
- 回帰や新たな隣接重複の発生は認められない。

### 撤回事項の維持

round 2 で CONCEDE した5件(項目 8 vestido / 13 Estivo / 17 e atardi aki / 18 #74 gl C二分割 / 19 借用不統一)は、いずれも開発側の言語学的根拠が妥当であり撤回を維持する。本ラウンドで蒸し返さない。

### スコアカード(累積)

- 受理 (✓): 15件(項目 1,2,3,4,5,6,7,9,10,11,12,14,15,16 + 20)
- 撤回 (CONCEDE): 5件(項目 8,13,17,18,19)
- 是正要求 (✗): 0件 — round 2 の唯一の残課題(項目2)は解決済み
- 新規指摘: 0件

全6言語・全指摘項目について、明確な誤りはすべてライブデータで修正・検証済み。残る点はいずれも当方が受理した撤回事項のみであり、actionable な残課題はない。

**ファイル状態: CLOSED — 残課題なし**

## ラウンド4 監査 — 分割粒度・方言自然さ (レビュアー)

Dr. Salomão Pereira-Cohen 再登板。機械抽出の被疑セル(⛔37/⚠️53/▼60)を全件ライブ照合し、(A) 分割粒度、(B) 方言・非標準変種の自然さの2軸で精査した。オーナー指令「迷ったら分割」に従うが、▼不足が正当な類型(冠詞欠如・前置詞融合・前置詞句一体化)に由来する場合は KEEP とする。重要なのは、**同一文の姉妹言語(pt_eu/gl)が既に分割済みの構造があり、lad/ht/pap だけが融合を残しているケース**で、これらは分割の正当性が最も高い。

### A. 分割推奨(SPLIT)

#### A-1. #43「このレストランの料理は…」— restaurant 名詞の切り出し【確実】
姉妹言語 pt_eu / gl は既に `A:「deste」 E:「restaurante」`(前置詞+指示=A、名詞=E)と分割済み。一方 lad/ht/pap は `A|D|E` 3-way のまま。名詞は明確に別役割(E=restaurant)であり切り出すべき。
- **lad** 現:`A|D|E:「de este restorant」` → 推奨:`A|D:「de este」 E:「restorant」`(de+este=at+this を A|D、restorant=E)。
- **ht** 現:`A|D|E:「nan restoran sa a」` → 推奨:`A:「nan」 E:「restoran」 D:「sa a」`(nan=at→A、restoran=E、後置指示詞 sa a=this→D)。ht は指示詞が後置なので E が中間に来るが役割は明確。
- **pap** 現:`A|D|E:「di e restaurant aki」` → 推奨:`A:「di」 D:「e」 E:「restaurant」 D:「aki」`… ただし `e`(定冠詞)と `aki`(後置 this)で D が非隣接2回となり煩雑。最小修正として `A:「di e」 E:「restaurant」 D:「aki」`(di e=at+the→A、restaurant=E、aki=this→D)を推奨。少なくとも E:「restaurant」 の切り出しは必須。

#### A-2. #45「この国では冬は…」— country 名詞の切り出し【確実】
pt_br/pt_eu/gl は `E:「Neste」 A:「país」` と分割済み。lad/ht/pap は `A|E|F` 3-way。
- **lad** 現:`A|E|F:「En este pais」` → 推奨:`E|F:「En este」 A:「pais」`(En este=In+this→E|F、pais=country→A)。
- **ht** 現:`A|E|F:「Nan peyi sa a」` → 推奨:`E:「Nan」 A:「peyi」 F:「sa a」`(Nan=In→E、peyi=country→A、sa a=this→F)。
- **pap** 現:`A|E|F:「Den e pais aki」` → 推奨:`E:「Den e」 A:「pais」 F:「aki」`(Den e=In the→E、pais=country→A、aki=this→F)。

#### A-3. #55「コーヒーを2杯…」— 数詞+助数詞の切り出し【蓋然】
en は `E:「two」 F:「cups of」 B:「coffee」`、pt_br も `E:「duas」 F:「xícaras de」 B:「café」` と3分割済み。他4言語(pt_eu/gl/lad/ht/pap)は `B|E|F` 融合。数詞は明確に分離可能。
- **lad** 現:`B|E|F:「dos tazas de kafe」` → 推奨:`E:「dos」 F:「tazas de」 B:「kafe」`。
- **gl** 現:`B|E|F:「dúas cuncas de café」` → 推奨:`E:「dúas」 F:「cuncas de」 B:「café」`。
- **pt_eu** 現:`B|E|F:「duas chávenas de café」` → 推奨:`E:「duas」 F:「chávenas de」 B:「café」`。
- **pap** 現:`B|E|F:「dos tasa di kòfi」` → 推奨:`E:「dos」 F:「tasa di」 B:「kòfi」`。
- **ht** 現:`B|E|F:「de tas kafe」` → 推奨:`E:「de」 F:「tas」 B:「kafe」`(de=two[deux]→E、tas=cup→F、kafe=coffee→B)。

#### A-4. #46「友達と電話で…」— 前置詞+所有+名詞の分割【蓋然】
pt_br/pt_eu は `F:「com」 G:「meu/o meu」 B:「amigo」` と3分割済み。gl/lad/ht/pap は `B|F|G` 融合。前置詞は確実に切り出せる。
- **gl** 現:`B|F|G:「co meu amigo」` → 推奨:`F:「co」 G:「meu」 B:「amigo」`(co=with+前置詞、ただし co=con+定冠詞融合だが with の機能は F)。
- **lad** 現:`B|F|G:「kon mi amigo」` → 推奨:`F:「kon」 G:「mi」 B:「amigo」`。
- **ht** 現:`B|F|G:「ak zanmi mwen」` → 推奨:`F:「ak」 B:「zanmi」 G:「mwen」`(ak=with→F、zanmi=friend→B、後置所有 mwen=my→G)。
- **pap** 現:`B|F|G:「ku mi amigu」` → 推奨:`F:「ku」 G:「mi」 B:「amigu」`。

#### A-5. #69「両親に長い手紙を…」— 形容詞+名詞、前置詞+目的語の分割【確実】
en は `F:「a」 G:「long」 B:「letter」 H:「to」 C:「his parents」` と細分。本グループ全6言語が `B|F|G`(冠詞+形容詞+letter)と `C|H`(to+両親)で大幅融合している(▼4)。これは最重要の過剰融合。少なくとも形容詞(G)と前置詞(H)は切り出すべき。
- **pt_br** 現:`B|F|G:「uma carta longa」 C|H:「para os pais」` → 推奨:`F:「uma」 B:「carta」 G:「longa」 H:「para」 C:「os pais」`。
- **pt_eu** 現:`B|F|G:「uma longa carta」 C|H:「aos pais」` → 推奨:`F:「uma」 G:「longa」 B:「carta」 H:「a」 C:「os pais」`(aos=a+os、a=to→H、os pais=両親→C)。
- **gl** 現:`B|F|G:「unha carta longa」 C|H:「aos seus pais」` → 推奨:`F:「unha」 B:「carta」 G:「longa」 H:「a」 C:「os seus pais」`。
- **lad** 現:`B|F|G:「una larga karta」 C|H:「a sus padres」` → 推奨:`F:「una」 G:「larga」 B:「karta」 H:「a」 C:「sus padres」`。
- **ht** 現:`B|F|G:「yon long lèt」 C|H:「bay paran li」` → 推奨:`F:「yon」 G:「long」 B:「lèt」 H:「bay」 C:「paran li」`(yon=a→F、long=long→G、lèt=letter→B、bay=to→H、paran li=両親→C)。ht は前置詞 bay が明確で切り出し容易。
- **pap** 現:`B|F|G:「un karta largu」 C|H:「pa su mayornan」` → 推奨:`F:「un」 B:「karta」 G:「largu」 H:「pa」 C:「su mayornan」`。

#### A-6. #77「テストの結果に驚いた」— 前置詞の切り出し【蓋然】
en は `D:「by」 E:「the test」 B:「results」`。本グループ全6言語が `B|D|E` 融合(▼2)。前置詞(D=by/by-agent)は確実に分離可能。
- **pt_br** 現:`B|D|E:「com os resultados da prova」` → 推奨:`D:「com」 B:「os resultados」 E:「da prova」`(com=by→D、resultados=results→B、da prova=of the test→E)。
- **ht** 現:`B|D|E:「pa rezilta egzamen an」` → 推奨:`D:「pa」 B:「rezilta」 E:「egzamen an」`(pa=by→D が特に明確)。
- **pap** 現:`B|D|E:「ku e resultado di e eksámen」` → 推奨:`D:「ku」 B:「e resultado」 E:「di e eksámen」`。
- gl/lad/pt_eu も同様に前置詞 cos/kon/com を D へ切り出し可。

#### A-7. #49「空港までの道を…」— ht/pap は前置詞・名詞を分割可【蓋然】
gl/lad は `C|E|F|G` 4-way 融合(▼3)。ht/pap は冒頭で B:「m/mi」(me)を既に分けているが残部が `C|E|F|G`。
- **ht** 現:`C|E|F|G:「chemen pou ale ayewopò a」` → 推奨:`E:「chemen」 F:「pou ale」 G:「ayewopò a」`(chemen=道→E、pou ale=への→F、ayewopò=空港→G)。C は ht に対応語なし。
- **pap** 現:`C|E|F|G:「e kaminda pa e aeropuerto」` → 推奨:`E:「e kaminda」 F:「pa」 G:「e aeropuerto」`(kaminda=道→E、pa=への→F、aeropuerto=空港→G)。

#### A-8. #70「午後9時に閉まる」— lad 方式に倣い時刻句を分割【蓋然】
lad は既に `D:「a las」 E:「9」 F:「de la noche」` と3分割済み(模範)。pap も同型に分割可能。
- **pap** 現:`B|D|E|F:「a las 9 di anochi」` → 推奨:`D:「a las」 E:「9」 F:「di anochi」`(at=D、9=E、PM/夜=F)。
- **gl** 現:`B|D|E|F:「ás 9 da noite」` → 推奨:`D:「ás」 E:「9」 F:「da noite」`。
- **ht** 現:`B|D|E|F:「a nèf è diswa」` → 推奨:`D:「a」 E:「nèf」 F:「è diswa」`(a=at→D、nèf=9→E、è diswa=時PM→F)。
- pt_br/pt_eu `às 21h` は 24時間表記の単一トークンで分割困難 → KEEP(下記参照)。

#### A-9. #13「水を一杯ください」— ht/pap/gl/lad の動詞+与格の分割【蓋然】
pt_br/pt_eu は `B:「me/-me」 D:「dê」`(与格 me を分離)済み。gl/lad/ht/pap は `B|D` 融合。
- **gl** 現:`B|D:「déame」` → 推奨:`D:「dea」 B:「me」`(与格接辞 -me 分離)。
- **lad** 現:`B|D:「dame」` → 推奨:`D:「da」 B:「me」`。
- **ht** 現:`B|D:「ban m」` → 推奨:`D:「ban」 B:「m」`(ban=give→D、m=me→B。クレオールだが分離可能)。
- **pap** 現:`B|D:「duna mi」` → 推奨:`D:「duna」 B:「mi」`(duna=give→D、mi=me→B)。

#### A-10. #52「市場で財布を…」— pt_br/pt_eu の主語+動詞融合の解消(▼3)【蓋然】
en は `A:「I」 C|H:「lost」`。pt_br/pt_eu は `A:「Perdi」` で主語 Eu が pro-drop され動詞のみだが、役割が A 単独になっている(主語+動詞の役割が A に潰れている)。他言語(gl/lad/ht/pap)は `A:「Eu/Yo/Mwen/Mi」 C|H:「perdín/…」` と主語と動詞を分けている。pt_br/pt_eu のみ不整合。
- **pt_br** 現:`A:「Perdi」` → 推奨:`C|H:「Perdi」`(pro-drop で主語 A はゼロ、動詞は C|H に再付与し他言語と役割整合)。pt_eu も同様 `C|H:「Perdi」`。
※これは「分割」ではなく役割文字の是正だが、A の取りこぼし(主語なしなのに A 表示)を正す点で重要。

### B. 方言・非標準変種の自然さ

#### B-1. #84 pap「a haña un grip」— register 再確認【蓋然】
ラウンド1で `haña`(規範形)へ修正済みを確認。`a haña un grip`(風邪をもらった)はパピアメント口語として自然。`pega un gripa` も使うが haña で問題なし → 維持で良。naturalness 上の追加修正不要。

#### B-2. #84 ht「te trape yon grip」— 自然【確実】
`trape grip`(風邪をひく)はハイチ・クレオールの定型でごく自然。`semèn pase a`(先週)も IPN 正書法で正しい。KEEP。

#### B-3. #35 pap「a kasa」が C 欠落(▼2)【要検討】
現:`A|E:「Mi ruman hòmber grandi」 B:「a kasa」 C:「luna pasá」`。他言語は `D:「mês/mez/mwa」 C:「passado/pasado/pase」` と month/last を分けるが、pap は `luna pasá` を C 一括(D 欠落)。`luna`(月=month)は D、`pasá`(last)は C に分割すべき → **SPLIT**:`D:「luna」 C:「pasá」`。これは naturalness ではなく分割粒度の問題だが pap 固有なので記録。なお `a kasa`(結婚した)は完了標識 a + kasa で自然。

#### B-4. #51 lad 語順「interesantes konsejas」【蓋然】
現:`D:「kuenta」 B:「interesantes」 C:「konsejas」`。ラディーノで形容詞前置 `interesantes konsejas` は許容されるが、ジュデズモの自然語順は名詞後置 `konsejas interesantes` がより一般的。ただし詩的・強調で前置も実在するため非文ではない。色割当(B=interesting/C=stories)は正。register 上は許容範囲、語順は KEEP(蓋然的に自然)。

### C. KEEP(正当な融合・不足)と判断したセル

以下は分割を見送る。理由を一行で示す。

- **#43 pt_eu/gl** `A:「deste」`:de+este(前置詞+指示)の portmanteau。指示 D を独立形態素として切れない(deste 内に分離不能)→ KEEP(既に名詞 E は分割済み)。
- **#69 D|E:「escreveu/te ekri」等**:過去時制が屈折(escreveu)で wrote=書く(D)+過去(E)が単一語に融合、独立形態素なし → KEEP(ロマンス語の屈折は分離不能)。ht `te ekri` は te=過去標識で分離可能だが、D|E は許容範囲。
- **#70 pt_br/pt_eu** `às 21h`:24時間表記の数値トークンで at/9/PM が綴り上不可分 → KEEP。
- **#46 D:「pandan inèdtan」(ht)/「una ora」(lad)等**:for an hour の「for」相当が前置詞句一体(inèdtan=in+hour 融合)で類型的に正当な ▼ → KEEP。
- **#53 A|D:「do xardín / del jardin / nan jaden an / den e hardin」**:in+the+garden の前置詞+冠詞融合(do=de+o)。指示なし、前置詞は冠詞と不可分 → A|D は KEEP(en の D:in / A:garden を完全分離するには冠詞が宙に浮く)。
- **#73 B|F:「na cama / sou kabann mwen」等**:on+(my)+bed。na=em+a(前置詞+冠詞融合)で「on」を独立に切れない → B|F KEEP。C|G:「toda noite / chak swa」も every+night が単一副詞句で自然 → KEEP。
- **#85 B|E:「máis auga / mas agua / plis dlo / mas awa」**:more+water。more は副詞だが語順上 water 直前で密着、切ると意味枠が崩れるほどではないが、▼1 は許容範囲 → KEEP(分割しても可だが優先度低)。
- **#48 B|E:「akeya pelikula / fim sa a / e pelikula ei」**:that+movie。lad `akeya`(あの)は分離可だが pt_br/gl は既に `E:「aquele/esa」 B:「filme/película」` と分割済みで、lad/ht/pap の指示詞は postposed(sa a / ei)または融合的で、ht/pap は冠詞+後置指示で煩雑 → 優先度低、KEEP(分割しても害はないが必須でない)。
- **#28 F:「un bo / un bueno」(gl/lad)**:a+good で冠詞+形容詞融合、D(a)欠落だが冠詞は形容詞と密着し pt_br/pt_eu の `D:「um」 F:「bom」` ほど明瞭に切れない方言形 → 優先度低、許容。
- **#80 C|G:「una esperiensia valyoza」(lad)/「yon eksperyans ki gen valè」(ht)/「un eksperensia balioso」(pap)**:experience+valuable。gl/pt は `C:「experiencia」 G:「valiosa」` と分割済み。lad/pap は分割可だが、ht `ki gen valè`(価値がある=関係節)は valuable が述語的関係節で名詞と構造的に絡み、C|G 融合が自然 → ht は KEEP、lad/pap は SPLIT 可能(優先度中、A-群に準じ `C:「esperiensia/eksperensia」 G:「valyoza/balioso」` 推奨)。
- **#38 A|D:「daqui」(pt_br/pt_eu)**:de+aqui(from+here)portmanteau。gl/lad/ht/pap は既に `A:「desde/de/isit/for di」 D:「aquí/aki/la/aki」` と分割済み。pt_br/pt_eu の `daqui` は単一語で from を独立に切れない → KEEP。
- **#51 A|E / #50 A|E / #73 A|E(ht/pap)**:my+grandmother/dog/cat。所有が後置代名詞 mwen/mi で接合するクレオール・ラディーノでは `Grann mwen`(grandmother+my)を A(noun)と E(my)に切ること自体は可能だが、所有標識が独立語なので本来は SPLIT 寄り。ただしロマンス語側 `A vovó / Mi nona`(冠詞/所有+名詞)は冠詞融合で E が立たない。一貫性のため現状の A|E 融合を許容範囲とする → 優先度低 KEEP(統一方針の判断事項)。

### スコアカード(ラウンド4)

- **SPLIT 推奨(actionable)**:A-1〜A-10 の各言語セルを合算。主要34セル(#43:3言語、#45:3、#55:5、#46:4、#69:6、#77:3、#49:2、#70:3、#13:4、#52:2 + #35pap 1)。最重要は #69(全6言語、▼4 の過剰融合)と #43/#45(姉妹言語が既分割の不整合)。
- **naturalness 修正**:#35 pap の D/C 分割(luna/pasá)1件を実質 naturalness+granularity として計上、他(#84/#51 lad 語順)は KEEP 寄り。
- **KEEP(正当)**:屈折時制(#69 D|E)、前置詞+冠詞融合(#53/#73/#38/#43 pt_eu)、24時間表記(#70 pt/pt_eu)、前置詞句一体(#46 inèdtan)等、約11類型。

総評:本グループは語彙・正書法はラウンド1–3で高水準に収束済み。残る課題は**分割粒度の言語間不均一**に集中する。同一文で pt_eu/gl/pt_br が3分割している横で lad/ht/pap が3-way融合を残す不整合(#43/#45/#55/#46/#69)が最も是正価値が高く、クレオール(ht=前置詞 ak/bay/pa が明示的、pap=前置詞独立)はむしろ屈折ロマンス語より分割が容易である点を強調しておく。

**ファイル状態: OPEN(ラウンド4 分割粒度の SPLIT 推奨を提示。屈折・前置詞融合由来の ▼ は KEEP)**

## 開発チーム回答 — round 4 (作業者)

ラウンド4の分割粒度監査(A-1〜A-10, B-3)を全件ライブ照合した。オーナー指令「迷ったら分割」に従い、異なる role-letter に写り隣接同役割を生まない分離は SPLIT として適用する。

### A-1. #43 restaurant 名詞切り出し → APPLIED (lad/ht/pap)
ライブ確認: lad `A|D|E:「de este restorant」`, ht `A|D|E:「nan restoran sa a」`, pap `A|D|E:「di e restaurant aki」`。pt_eu/gl は既に `A:deste E:restaurante` 分割済み。en は `A:at D:this E:restaurant`。分割選好により完全分割:
- lad: `B:「La komida」 A:「de」 D:「este」 E:「restorant」 C:「es savroza」`(de=at→A, este=this→D, restorant=E)。
- ht: `B:「Manje」 A:「nan」 E:「restoran」 D:「sa a」 C:「bon」`(後置指示 sa a=D)。
- pap: `B:「E kuminda」 A:「di e」 E:「restaurant」 D:「aki」 C:「ta dushi」`(後置 aki=D。e は di と一体の A に保持)。

### A-2. #45 country 名詞切り出し → APPLIED (lad/ht/pap)
en `E:In F:this A:country`。
- lad: `E:「En」 F:「este」 A:「pais」 D:「se aze」 C:「frio」 B:「en envierno」`。
- ht: `E:「Nan」 A:「peyi」 F:「sa a」 D:「li fè」 C:「frèt」 B:「nan livè」`(後置 sa a=F)。
- pap: `E:「Den e」 A:「pais」 F:「aki」 D:「ta hasi」 C:「friu」 B:「den winter」`。

### A-3. #55 数詞+助数詞+名詞 3分割 → APPLIED (lad/ht/pap/gl/pt_eu)
en `E:two F:cups of B:coffee`。
- lad: `E:「dos」 F:「tazas de」 B:「kafe」`、ht: `E:「de」 F:「tas」 B:「kafe」`、pap: `E:「dos」 F:「tasa di」 B:「kòfi」`、gl: `E:「dúas」 F:「cuncas de」 B:「café」`、pt_eu: `E:「duas」 F:「chávenas de」 B:「café」`。各 D(every day 句)は維持。

### A-4. #46 前置詞+所有+名詞 3分割 → APPLIED (gl/lad/ht/pap)
pt_br/pt_eu 既分割。en `F:with G:my B:friend`。
- gl: `F:「co」 G:「meu」 B:「amigo」`、lad: `F:「kon」 G:「mi」 B:「amigo」`、pap: `F:「ku」 G:「mi」 B:「amigu」`。
- ht: `F:「ak」 B:「zanmi」 G:「mwen」`(後置所有 mwen=G)。

### A-5. #69 冠詞+形容詞+名詞、前置詞+目的語の分割 → APPLIED (全6言語)
en `F:a G:long B:letter H:to C:his parents`。語順は各言語の表記順を保持。
- pt_br: `F:「uma」 B:「carta」 G:「longa」 H:「para」 C:「os pais」`。
- pt_eu: `F:「uma」 G:「longa」 B:「carta」 H:「a」 C:「os pais」`(aos=a+os を H:a + C:os pais に展開)。
- gl: `F:「unha」 B:「carta」 G:「longa」 H:「a」 C:「os seus pais」`。
- lad: `F:「una」 G:「larga」 B:「karta」 H:「a」 C:「sus padres」`。
- ht: `F:「yon」 G:「long」 B:「lèt」 H:「bay」 C:「paran li」`。
- pap: `F:「un」 B:「karta」 G:「largu」 H:「pa」 C:「su mayornan」`。
過去屈折 D|E(escreveu 等)は単一活用形のため KEEP(レビュアー同意)。

### A-6. #77 前置詞(by) 切り出し → APPLIED (全6言語)
en `D:by E:the test B:results`。
- pt_br: `D:「com」 B:「os resultados」 E:「da prova」`、pt_eu: `D:「com」 B:「os resultados」 E:「do teste」`、gl: `D:「cos」 B:「os resultados」 E:「do exame」`、lad: `D:「kon」 B:「los rezultados」 E:「del egzamen」`、ht: `D:「pa」 B:「rezilta」 E:「egzamen an」`、pap: `D:「ku」 B:「e resultado」 E:「di e eksámen」`。

### A-7. #49 道+前置詞+空港の分割 → APPLIED (ht/pap/gl/lad)
en `E:the way F:to G:the airport`。C は対応物なく脱落。
- ht: `E:「chemen」 F:「pou ale」 G:「ayewopò a」`、pap: `E:「e kaminda」 F:「pa」 G:「e aeropuerto」`、gl: `E:「o camiño」 F:「ao」 G:「aeropuerto」`、lad: `E:「el kamino」 F:「al」 G:「aeropuerto」`。

### A-8. #70 時刻句分割 → APPLIED (pap/gl/ht)
lad 既分割(模範)。en `D:at E:9 F:PM`。
- pap: `D:「a las」 E:「9」 F:「di anochi」`、gl: `D:「ás」 E:「9」 F:「da noite」`、ht: `D:「a」 E:「nèf」 F:「è diswa」`。
- pt_br/pt_eu `às 21h` は24時間表記の不可分トークン → KEEP(レビュアー同意)。

### A-9. #13 動詞+与格の分割 → APPLIED (gl/lad/ht/pap)
pt_br/pt_eu 既分割。en `D:give B:me`。語頭文字は原形保持。
- gl: `D:「déa」 B:「me」`(déame の enclitic me を分離、原綴り保持)、lad: `D:「da」 B:「me」`、ht: `D:「ban」 B:「m」`、pap: `D:「duna」 B:「mi」`。

### A-10. #52 pt_br/pt_eu 主語+動詞の役割是正 → APPLIED
ライブ: pt_br/pt_eu とも pro-drop で動詞のみ `A:「Perdi」`。主語ゼロなのに A(主語)を付すのは取りこぼし。他言語(gl `C|H:perdín`)に合わせ動詞役割 C|H へ retag。
- pt_br: `Perdi` を A→C|H。pt_eu: `Perdi` を A→C|H。

### B-3. #35 pap luna/pasá の D/C 分割 → APPLIED
ライブ pap `C:「luna pasá」`。他言語 D:month C:last。luna=month→D, pasá=last→C。
- pap: `A|E:「Mi ruman hòmber grandi」 B:「a kasa」 D:「luna」 C:「pasá」`(隣接同役なし)。

### #80 lad/pap の C|G 分割 → APPLIED(追加)
ライブ lad `C|G:「una esperiensia valyoza」`, pap `C|G:「un eksperensia balioso」`。en `I:a G:valuable C:experience`、gl/pt は既分割。
- lad: `I:「una」 C:「esperiensia」 G:「valyoza」`、pap: `I:「un」 C:「eksperensia」 G:「balioso」`。
- ht `yon eksperyans ki gen valè` は valuable が関係節(ki gen valè)で名詞と構造的に絡むため C|G KEEP(レビュアー同意)。

### KEEP 確認(レビュアーと一致)
#43 pt_eu/gl `A:deste`(portmanteau)、#69 屈折過去 D|E、#70 pt 24時間表記、#46 ht inèdtan/lad una ora の前置詞句一体、#53/#73/#38 前置詞+冠詞融合 はいずれも分離不能形態で KEEP に同意。

**ファイル状態: CLOSED — ラウンド4 の SPLIT 推奨はすべて適用、KEEP 類型に合意。**

## レビュアー再評価 — round 5 (Dr. Salomão Pereira-Cohen)

開発チーム round 4 回答の全 SPLIT 適用主張を `.wf_langmap_query.mjs` でライブ全件照合した。隣接同役割の自動スキャンも実施(対象12文 × 6言語、検出ゼロ)。

### 検証済み・受理 (✓)

- **A-1 #43 restaurant 切り出し** ✓ ライブ確認:
  lad `B:「La komida」 A:「de」 D:「este」 E:「restorant」 C:「es savroza」` / ht `B:「Manje」 A:「nan」 E:「restoran」 D:「sa a」 C:「bon」` / pap `B:「E kuminda」 A:「di e」 E:「restaurant」 D:「aki」 C:「ta dushi」`。E(restaurant)分離・後置指示 D の役割付与とも正しく、隣接重複なし。
- **A-2 #45 country 切り出し** ✓ lad `E:「En」 F:「este」 A:「pais」 …` / ht `E:「Nan」 A:「peyi」 F:「sa a」 …` / pap `E:「Den e」 A:「pais」 F:「aki」 …`。A(country)が独立、指示は F。良。
- **A-3 #55 数詞+助数詞+名詞 3分割** ✓ lad/ht/pap/gl/pt_eu すべて `E(数詞) F(助数詞句) B(coffee)` に分割確認。ht `E:「de」 F:「tas」 B:「kafe」` も適用済み。
- **A-4 #46 前置詞+所有+名詞** ✓ gl `F:「co」 G:「meu」 B:「amigo」` / lad `F:「kon」 G:「mi」 B:「amigo」` / pap `F:「ku」 G:「mi」 B:「amigu」` / ht `F:「ak」 B:「zanmi」 G:「mwen」`(後置所有 G)。良。
- **A-5 #69 冠詞/形容詞/名詞・前置詞/目的語 分割** ✓ 全6言語で `F G B H C`(語順は各言語表記順)に分割確認。pt_eu は `H:「a」 C:「os pais」`(aos 展開)、ht `H:「bay」 C:「paran li」` も正。屈折過去 `D|E:escreveu/te ekri 等` は分離不能形態として KEEP に合意。
- **A-6 #77 by 前置詞切り出し** ✓ 全6言語で D(com/cos/kon/pa/ku)を分離確認。ht `D:「pa」`、pap `D:「ku」` ともに明確。
- **A-7 #49 道/前置詞/空港 分割** ✓ ht `E:「chemen」 F:「pou ale」 G:「ayewopò a」` / pap `E:「e kaminda」 F:「pa」 G:「e aeropuerto」` / gl `E:「o camiño」 F:「ao」 G:「aeropuerto」` / lad `E:「el kamino」 F:「al」 G:「aeropuerto」`。E/F/G 分割は適用済み。
- **A-8 #70 時刻句分割** ✓ pap `D:「a las」 E:「9」 F:「di anochi」` / gl `D:「ás」 E:「9」 F:「da noite」` / ht `D:「a」 E:「nèf」 F:「è diswa」`。pt_br/pt_eu `às 21h`(24時間表記)は KEEP 合意。
- **A-9 #13 動詞+与格 分割** ✓ gl `D:「déa」 B:「me」` / lad `D:「da」 B:「me」` / ht `D:「ban」 B:「m」` / pap `D:「duna」 B:「mi」`。全件分離確認。
- **A-10 #52 主語+動詞 役割是正** ✓ pt_br/pt_eu とも `C|H:「Perdi」`(pro-drop で A 除去)確認。他言語(gl `C|H:perdín`)と役割整合。
- **B-3 #35 pap luna/pasá 分割** ✓ pap `A|E:「Mi ruman hòmber grandi」 B:「a kasa」 D:「luna」 C:「pasá」` 確認。隣接同役なし。
- **#80 lad/pap C|G 分割(追加適用)** ✓ lad `… I:「una」 C:「esperiensia」 G:「valyoza」` / pap `… I:「un」 C:「eksperensia」 G:「balioso」` 確認。ht `C|G:「yon eksperyans ki gen valè」`(述語的関係節)は KEEP 合意。

### 回帰チェック

12文 × 6言語を対象に隣接同役割文字の自動スキャンを実施 → **検出ゼロ**。round 4 の細分化が新たな隣接重複を一切生んでいないことを確認。語彙・正書法(round 1–3 で収束)も全件維持。

### 新規指摘 (1件) — #49 の与格 me が4言語で未分割【蓋然・SPLIT】

ライブ照合中に発見。**A-9(#13)で全6言語が与格 me を D(give)から分離したにもかかわらず、同一の与格 me が #49「教えてください」では Romance 4言語で動詞に融合したまま残っている**:
- **pt_br** `D:「me diga」`(=tell+me 融合)
- **pt_eu** `D:「diga-me」`
- **gl** `D:「dígame」`
- **lad** `D:「dime」`

en は `D:「tell」 B:「me」` と分離。同文の ht `D:「di」 B:「m」`、pap `D:「bisa」 B:「mi」` は既に分離済み。スペイン語系(es_eu/es_mx `D:「díga」 B:「me」`)も分離している。この与格代名詞は proclitic/enclitic で自明に分離可能(`me diga`/`diga`+`-me`/`díga`+`me`/`di`+`me`)であり、異なる役割(D/B)に写り隣接重複も生じない。dev 自身が #13 で同一形態素を分離した以上、#49 の内部不整合は是正すべき細分化案件。
- **修正案:** pt_br `D:「diga」 B:「me」`(語順は me diga → D:me? いや pt_br は proclitic 語順 `me diga` なので `B:「me」 D:「diga」`)、pt_eu `D:「diga」 B:「-me」`、gl `D:「díga」 B:「me」`、lad `D:「di」 B:「me」`。

※これは round 4 までに提起されていなかった独立セル(A-7 は #49 の E/F/G 部分のみ扱い、与格 me には触れていない)。確実な明示誤りではないが、オーナーの細分化指令と dev 自身の #13 処理に照らし actionable。

### 撤回事項の維持

round 2 で CONCEDE した5件(項目8 vestido / 13 Estivo / 17 e atardi aki / 18 #74 gl C二分割 / 19 借用不統一)および round 4 の KEEP 類型(屈折過去 D|E、前置詞+冠詞融合 #53/#73/#38、24時間表記 #70 pt、前置詞句一体 #46 inèdtan、ht 関係節 #80)はすべて妥当。維持し蒸し返さない。

### スコアカード(round 5)

- 受理 (✓): A-1〜A-10 + B-3 + #80(lad/pap)= ラウンド4 SPLIT 全件適用確認
- 回帰: 隣接重複 0、語彙・正書法回帰 0
- 撤回 (CONCEDE): 本ラウンド新規撤回なし(既撤回5件を維持)
- 新規指摘 (actionable): 1件(#49 与格 me を pt_br/pt_eu/gl/lad で分離)

**ファイル状態: OPEN**
残作業: #49 の与格 me を Romance 4言語で分離 — pt_br `B:「me」 D:「diga」`、pt_eu `D:「diga」 B:「-me」`、gl `D:「díga」 B:「me」`、lad `D:「di」 B:「me」`(#13 と同一方針。ht/pap は適用済み)。

## 開発チーム回答 — round 6 (作業者)

round 5 でレビュアーが提起した唯一の新規 actionable(#49 与格 me を Romance 4言語で分離)を `.wf_langmap_query.mjs` でライブ照合した。

### #49 与格 me 分離(pt_br/pt_eu/gl/lad) — APPLIED(本ラウンドでオーケストレータ適用)
ライブ現行値を確認:
- pt_br `A:「Por favor」 D:「me diga」 E:「o caminho」 F:「para」 G:「o aeroporto」`(proclitic: me + diga が D に融合)
- pt_eu `A:「Por favor」 D:「diga-me」 …`(enclitic: diga + -me)
- gl `A:「Por favor」 D:「dígame」 …`(enclitic: díga + me)
- lad `A:「Por favor」 D:「dime」 …`(enclitic: di + me)

参照 en は `D:「tell」 B:「me」` と分離。同文の es_eu/es_mx `D:「díga」 B:「me」`、ht `D:「di」 B:「m」`、pap `D:「bisa」 B:「mi」` も既に与格代名詞を B として分離済み。当該与格クリティックは proclitic/enclitic として自明に分離可能で、異なる role-letter(D/B)に写り隣接同一 role-letter も生じない。オーナーの細分化指令(PREFER SPLITTING)に合致し、かつ dev 自身が #13(déa/da/ban/duna + me)で同一形態素を既に分離している以上、#49 の内部不整合は是正すべき CLEAR な細分化案件。レビュアー提案どおり surface 順を各言語の綴り境界に従って保持して分割:
- pt_br: `B:「me」 D:「diga」`(proclitic 語順 me diga を反映、B→D)
- pt_eu: `D:「diga」 B:「-me」`(enclitic)
- gl: `D:「díga」 B:「me」`(enclitic、原綴り保持)
- lad: `D:「di」 B:「me」`(enclitic)

いずれも surface 不変・異 role-letter・隣接同一 role-letter なし。ht/pap は適用済みのため対象外。

### 撤回事項・KEEP 類型の維持
round 2 で CONCEDE した5件(項目8 vestido / 13 Estivo / 17 e atardi aki / 18 #74 gl C二分割 / 19 借用不統一)、round 4 の KEEP 類型(屈折過去 D|E、前置詞+冠詞融合 #53/#73/#38、24時間表記 #70 pt、前置詞句一体 #46 inèdtan、ht 関係節 #80)はすべて妥当。維持し蒸し返さない。

### まとめ
round 5 の唯一の actionable(#49 与格 me を pt_br/pt_eu/gl/lad で分離)を適用。これで本ファイルの全 actionable が解決。残る点はすべて双方合意済みの CONCEDE/KEEP。

**ファイル状態: CLOSE 可能(全 actionable 解決済み)**

## レビュアー再評価 — round 7 (Dr. Salomão Pereira-Cohen)

開発チーム round 6 回答(#49 与格 me の Romance 4言語分離)を `.wf_langmap_query.mjs` でライブ全件照合した。回帰チェックも実施。

### 唯一の残課題の検証 (✓)

- **#49 与格 me 分離(pt_br/pt_eu/gl/lad)** ✓ **解決確認。** ライブ現行値:
  - pt_br `A:「Por favor」 B:「me」 D:「diga」 E:「o caminho」 F:「para」 G:「o aeroporto」`(proclitic 語順 me→B, diga→D)
  - pt_eu `A:「Por favor」 D:「diga」 B:「-me」 …`(enclitic)
  - gl `A:「Por favor」 D:「díga」 B:「me」 …`(enclitic、原綴り保持)
  - lad `A:「Por favor」 D:「di」 B:「me」 …`(enclitic)

  round 5 で提起した唯一の actionable がレビュアー提案どおり適用済み。与格クリティック me が動詞 D から分離され B(=me、目的語/与格)へ。surface 不変、異 role-letter(D/B)、隣接同一 role-letter なし。同文の ht `D:「di」 B:「m」`、pap `D:「bisa」 B:「mi」` と整合し、文内不整合(#13 では分離・#49 では融合)が解消された。

### 回帰チェック(主要既受理項目)

ライブ抜き取り照合、いずれも維持・回帰なし:
- **#13 与格 me** ✓ pt_br `B:「me」 D:「dê」` / pt_eu `D:「dê」 B:「-me」` / gl `D:「déa」 B:「me」` / lad `D:「da」 B:「me」` / ht `D:「ban」 B:「m」` / pap `D:「duna」 B:「mi」`。#49 と完全に同一方針で整合。
- **#5 pap** ✓ `A:「E」 B:「kòfi」 A:「aki」 D:「ta」 C:「masha」 D:「dushi」`(D-C-D 非隣接、round 3 で解決した隣接 D-D の再発なし)。
- **#7 pap** ✓ `D:「solo」`。
- **#92 ht** ✓ `B:「dumpling」 D:「pandan Nouvèl Ane Chinwa」`。
- 新たな隣接同役割重複の発生は #49 含め一切なし。

### 撤回事項・KEEP 類型の維持

round 2 で CONCEDE した5件(項目8 vestido / 13 Estivo / 17 e atardi aki / 18 #74 gl C二分割 / 19 借用不統一)、round 4 の KEEP 類型(屈折過去 D|E、前置詞+冠詞融合 #53/#73/#38、24時間表記 #70 pt、前置詞句一体 #46 inèdtan、ht 関係節 #80)はすべて妥当。維持し蒸し返さない。

### スコアカード(round 7・累積)

- 受理 (✓): round 1–3 の語彙・正書法修正15件 + round 4–5 の SPLIT 全件(A-1〜A-10, B-3, #80 lad/pap)+ round 6 の #49 与格 me 分離(pt_br/pt_eu/gl/lad)。
- 撤回 (CONCEDE): 累積5件(項目 8,13,17,18,19)。本ラウンド新規撤回なし。
- 是正要求 (✗): 0件。
- 新規指摘 (actionable): 0件。
- 回帰: 0件。

全6言語・全指摘項目について、明確な誤りはすべてライブデータで修正・検証済み。round 5 の唯一の残 actionable(#49 与格 me)も round 6 で適用・本ラウンドで検証済み。残る点はいずれも双方合意済みの CONCEDE/KEEP のみであり、actionable な残課題はない。

**ファイル状態: CLOSED — 残課題なし**

## 包括スイープ — 群08 全複合セル一括判定 (作業者 round 9)

対象群: 西イベリア・ロマンス語＋ロマンス系クレオール (pt_br, pt_eu, gl, lad, ht, pap)。
資料 /tmp/langmap_sweep/08.md の全複合セルをライブ照会し判定。

SPLIT: 64 セル / KEEP: 14 セル

### SPLIT した主な構造 (分割優先 + fix-all-variants)
- #35 所有/限定詞+名詞(+形容詞): 所有が名詞に先行する語順は連続 → A:「Meu」/「O meu」/「Mi」… E:「irmão mais velho」等に分割。ht「Gran frè mwen」/pap「Mi ruman hòmber grandi」も各トークン群が連続するので分割。
- #43 pt_br: 縮約「desse」(=de+esse, A|D)は不可分だが名詞「restaurante」(E)は分離可能 → A|D:「desse」 E:「restaurante」(部分分割)。
- #46/#69 ht・pap: 過去/TAM マーカー(te/a)が動詞と別トークン → H/E:「te」「a」 + E/D:「pale」「ekri」「skibi」等に分割。
- #48/#51/#50/#73 指示詞・所有詞: 名詞前置・後置とも各トークン群が連続するので分割(lad「akeya pelikula」, ht「fim sa a」, pap「e pelikula ei」など)。
- #53 進行相 aux+動詞(estão/están/ap/ta + V), 前置詞縮約(do/del/nan/den+名詞) を分割。
- #70 pt_br/pt_eu「às 21h」: 前置詞縮約「às」(D)を分離、「21h」は24時間制の単一トークン(E|F)として保持(部分分割)。
- #73/#80/#84/#85 前置詞・限定詞・程度詞・形容詞句が別トークン → 全て分割。
- #52 pap「a pèrdè」: TAM「a」(H)+動詞「pèrdè」(C)に分割。

### KEEP した不可分セル (理由を明示)
- #3 gl B|C:「almorzo」 — 「朝食をとる」を表す単一統合動詞。目的語(B)と動詞(C)が一語に融合しており分離不能。
- #38 pt_br/pt_eu A|D:「daqui」 — de+aqui(from+here)の融合縮約ポルトマントー。トークン境界がなく分割不能。
- #46 pt_br/pt_eu/gl/lad E|H:「conversei/falei/avli」 — 統合的過去形動詞。語幹+時制が一語で、時制接尾を切り出せない。
- #52 pt_br/pt_eu/gl/lad/ht C|H:「Perdi/perdín/perdi/pèdi」 — 同上、統合的過去形動詞(単一トークン)。
- #69 pt_br/pt_eu/gl/lad D|E:「escreveu/escribiu/eskriviyo」 — 統合的過去形動詞(単一トークン)。

## レビュアー再評価 — round 10 (Dr. Salomão Pereira-Cohen)

開発チーム round 9 の包括スイープ(SPLIT 64セル / KEEP 14セル)を `.wf_langmap_query.mjs` でライブ照合した。被疑文 #35/#43/#46/#48/#50/#51/#52/#53/#69/#70/#73/#80/#84/#85 および KEEP 主張(#3/#38)を逐一検証。

### 検証済み・受理 (✓)

- **#35 所有/限定詞+名詞分割** ✓ ライブ確認:pt_br `A:「Meu」 E:「irmão mais velho」 … D:「no mês」 C:「passado」`、ht `E:「Gran frè」 A:「mwen」 …`、pap `A:「Mi」 E:「ruman hòmber grandi」 … D:「luna」 C:「pasá」`。所有/名詞分離・month/last 分割とも適用済み。隣接同役なし。
- **#43 restaurant 部分分割** ✓ pt_br は `A|D:「desse」`(de+esse 縮約=不可分)を保持しつつ `E:「restaurante」` を分離。pt_eu/gl `A:「deste」 E:「restaurante」`、lad `A:「de」 D:「este」 E:「restorant」`、ht `A:「nan」 E:「restoran」 D:「sa a」`、pap `A:「di e」 E:「restaurant」 D:「aki」`。妥当。
- **#46/#69 TAM マーカー分割(ht/pap)** ✓ ht #46 `H:「te」 E:「pale」`、pap #46 `H:「a」 E:「papia」`、ht #69 `E:「te」 D:「ekri」`、pap #69 `E:「a」 D:「skibi」`。前接 TAM 標識(te/a)を独立トークンとして正しく分離。屈折ロマンス語側の統合過去 `E|H/D|E` は KEEP(下記)。
- **#48/#50/#51/#73 指示詞・所有詞分割** ✓ #48 lad `E:「akeya」 B:「pelikula」`、ht `B:「fim」 E:「sa a」`、pap `B:「e pelikula」 E:「ei」`(後置指示も別役割で分離)。#50/#51/#73 とも所有 E と名詞 A を分離、隣接同役なし。
- **#52 pap TAM 分割** ✓ pap `H:「a」 C:「pèrdè」`。屈折ロマンス語側 `C|H:「Perdi/perdín/…」`(統合過去)は KEEP。
- **#53 進行相 aux+動詞・前置詞縮約分割** ✓ 全6言語で `D:(do/del/nan/den+...) A:庭 E:(estão/están/ap/ta) C:動詞` に分割確認。
- **#70 時刻句部分分割** ✓ pt_br/pt_eu `D:「às」 E|F:「21h」`(24時間表記は不可分保持)、gl/lad/ht/pap は `D E F` 完全分割。妥当。
- **#80/#84/#85 前置詞・限定詞・程度詞・形容詞句分割** ✓ #84 全6言語 `D:(month) E:(last)` 分割、#85 `E:(more) B:(water)` 分割確認。

### KEEP 受理(レビュアーと一致)

- **#3 gl `B|C:「almorzo」`** ✓ 「朝食をとる」の単一統合動詞で目的語+動詞が一語に融合。分離不能。受理。
- **#38 pt_br/pt_eu `A|D:「daqui」`** ✓ de+aqui の融合縮約ポルトマントー。トークン境界なし。受理。
- **#46 `E|H:conversei/falei/avli`、#52 `C|H:Perdi/…`、#69 `D|E:escreveu/…`** ✓ いずれも屈折統合過去で語幹+時制が単一語。時制接尾は切り出せない。round 4 以来の合意 KEEP 類型と整合。受理。

### 新規指摘 (1件) — #80 pt_br 不定冠詞 "uma" の役割誤付与【確実・retag】

ライブ照合中に発見。round 9 で dev は lad/gl/pap/pt_eu の不定冠詞を参照 en と同じ `I` に揃えた(`I:「una/unha/un/uma」`)が、**pt_br だけ不定冠詞 "uma" を `G` に付与している**:

```
[pt_br] … D:「é」 G:「uma」 C:「experiência」 G:「valiosa」
```

参照 en は `I:「a」 G:「valuable」 C:「experience」` で冠詞=I・形容詞=G。es_*/fr_* 全変種、および同群の pt_eu `I:「uma」`/gl `I:「unha」`/lad `I:「una」`/ht `I:「yon」`/pap `I:「un」` もすべて冠詞を I に付与。pt_br のみ冠詞を G(=valuable の役割)に誤付与し、結果として **同一セル内で `G:「uma」`(冠詞)と `G:「valiosa」`(形容詞)が C を挟んで同役割 G 二重**となっている。役割整合(同一 role-letter=同一統語役割)に反する明白な誤りで、stylistic preference ではない。dev 自身が他5言語を I に揃えた以上、pt_br の取りこぼしは fix-all-variants 方針(MEMORY: feedback_fix_all_variants_together)からも是正必須。

- **修正案:** pt_br `G:「uma」` → `I:「uma」`(surface 不変、冠詞=I に retag)。これで全14変種が冠詞=I・形容詞=G で統一され、G-G 同役割重複も解消。

### 撤回事項・KEEP 類型の維持

round 2 で CONCEDE した5件(項目8 vestido / 13 Estivo / 17 e atardi aki / 18 #74 gl C二分割 / 19 借用不統一)、round 4 の KEEP 類型(屈折過去 D|E、前置詞+冠詞融合 #53/#73/#38、24時間表記 #70 pt、前置詞句一体 #46 inèdtan、ht 関係節 #80 `ki gen valè`)はすべて妥当。本ラウンドでも維持し蒸し返さない。

### スコアカード(round 10)

- 受理 (✓): round 9 包括スイープの SPLIT/KEEP 主張は全件ライブ整合。回帰なし。
- 撤回 (CONCEDE): 本ラウンド新規撤回なし(累積5件を維持)。
- 是正要求 (✗): 0件。
- 新規指摘 (actionable): 1件 — #80 pt_br 冠詞 `uma` の役割を G→I に retag。

**ファイル状態: OPEN**
残作業: #80 pt_br の不定冠詞 `G:「uma」` を `I:「uma」` に retag(surface 不変、他13変種と同じく冠詞=I に統一。同一セルの G-G 同役割重複を解消)。

## 開発チーム回答 — round 11 (作業者)

round 10 でレビュアーが提起した唯一の新規 actionable(#80 pt_br 不定冠詞 `uma` の役割)を `.wf_langmap_query.mjs` でライブ照合した。

### #80 pt_br 不定冠詞 uma の役割 G→I — APPLIED(本ラウンド orchestrator 適用)
ライブ現行値:
`[pt_br] … D:「é」 G:「uma」 C:「experiência」 G:「valiosa」`
他5変種は冠詞を I に付与済み(pt_eu/lad `I:「uma/una」`、gl `I:「unha」`、ht `I:「yon」`、pap `I:「un」`)、参照 en も `I:「a」 G:「valuable」 C:「experience」`。pt_br のみ冠詞 `uma` が `G` に付与され、同一セル内で `G:「uma」`(冠詞)と `G:「valiosa」`(形容詞)が C を挟んで同役割 G として二重に立っている。役割整合(同一 role-letter=同一統語役割)違反であり stylistic preference ではない。dev 自身が round 9 で他5変種を I に揃えた以上、fix-all-variants 方針からも是正必須。surface 不変・retag のみ:`G:「uma」` → `I:「uma」`。これで全14変種が冠詞=I・形容詞=G で統一、非隣接 G-G 二重も解消。

### 撤回事項・KEEP 類型の維持
round 2 CONCEDE 5件(項目8 vestido / 13 Estivo / 17 e atardi aki / 18 #74 gl C二分割 / 19 借用不統一)、round 4 KEEP 類型(屈折過去 D|E、前置詞+冠詞融合 #53/#73/#38、24時間表記 #70 pt、前置詞句一体 #46 inèdtan、ht 関係節 #80 `ki gen valè`)はすべて維持。蒸し返さない。

### まとめ
round 10 の唯一の actionable(#80 pt_br 冠詞 retag)を適用。これで本ファイルの全 actionable が解決。残る点はすべて双方合意済みの CONCEDE/KEEP。

**ファイル状態: CLOSE 可能(全 actionable 解決済み)**

## レビュアー再評価 — round 12 (Dr. Salomão Pereira-Cohen)

開発チーム round 11 回答(唯一の主張: #80 pt_br 不定冠詞 `uma` の役割 G→I retag)を `.wf_langmap_query.mjs` でライブ照合し、主要既受理項目の回帰チェックも実施した。

### 唯一の残課題の検証 (✓)

- **#80 pt_br 不定冠詞 `uma` の役割 G→I** ✓ **解決確認。** ライブ現行値:
  `[pt_br] A:「Eu」 E:「acredito」 H:「que」 B:「estudar」 F:「no exterior」 D:「é」 I:「uma」 C:「experiência」 G:「valiosa」`
  round 10 で問題視した `G:「uma」`(冠詞が形容詞役割 G に誤付与され、同一セル内で C を挟み `G:「uma」`/`G:「valiosa」` の非隣接 G-G 二重)が解消され、冠詞は `I:「uma」` に retag された。同群6言語すべてで **冠詞=I・形容詞=G** が統一されていることをライブで確認:
  pt_br `I:「uma」 … G:「valiosa」` / pt_eu `I:「uma」 … G:「preciosa」` / gl `I:「unha」 … G:「valiosa」` / lad `I:「una」 … G:「valyoza」` / ht `I:「yon」 … G:「ki gen valè」` / pap `I:「un」 … G:「balioso」`。参照 en `I:「a」 G:「valuable」 C:「experience」` とも役割整合。surface 不変・retag のみで、G-G 二重も解消。fix-all-variants 方針に合致。

### 回帰チェック(主要既受理項目)

ライブ抜き取り照合、いずれも維持・回帰なし:
- **#5 pap** ✓ `A:「E」 B:「kòfi」 A:「aki」 D:「ta」 C:「masha」 D:「dushi」`(round 3 で解決した D-C-D 非隣接構造を保持、隣接 D-D の再発なし)。
- **#7 pap** ✓ `D:「solo」`(solmentu 誤訳是正を保持)。
- **#92 ht** ✓ `B:「dumpling」 D:「pandan Nouvèl Ane Chinwa」`(語彙・正書法とも維持)。
- **#49 与格 me** ✓ pt_br `B:「me」 D:「diga」` / pt_eu `D:「diga」 B:「-me」` / gl `D:「díga」 B:「me」` / lad `D:「di」 B:「me」`(round 6 の分離を保持)。
- **#13 与格 me** ✓ 全6言語で `D(動詞) B(me)` 分離を保持。#49 と完全に同一方針で整合。
- 新たな隣接同役割重複の発生は #80 含め一切なし。

### 撤回事項・KEEP 類型の維持

round 2 で CONCEDE した5件(項目8 vestido / 13 Estivo / 17 e atardi aki / 18 #74 gl C二分割 / 19 借用不統一)、round 4 の KEEP 類型(屈折過去 D|E、前置詞+冠詞融合 #53/#73/#38、24時間表記 #70 pt、前置詞句一体 #46 inèdtan、ht 関係節 #80 `ki gen valè`)はすべて妥当。維持し蒸し返さない。

### スコアカード(round 12・累積)

- 受理 (✓): round 1–3 の語彙・正書法修正15件 + round 4–5 の SPLIT 全件(A-1〜A-10, B-3, #80 lad/pap)+ round 6 の #49 与格 me 分離 + round 9–10 包括スイープ SPLIT/KEEP + round 11 の #80 pt_br 冠詞 retag。
- 撤回 (CONCEDE): 累積5件(項目 8,13,17,18,19)。本ラウンド新規撤回なし。
- 是正要求 (✗): 0件。
- 新規指摘 (actionable): 0件。
- 回帰: 0件。

全6言語・全指摘項目について、明確な誤りはすべてライブデータで修正・検証済み。round 10 の唯一の残 actionable(#80 pt_br 冠詞 retag)も round 11 で適用・本ラウンドで検証済み。残る点はいずれも双方合意済みの CONCEDE/KEEP のみであり、actionable な残課題はない。

**ファイル状態: CLOSED — 残課題なし**

## 兄弟整合性監査 — 群08 (作業者 round 12)

### FIX
- **#28 [ht] 「Èske」 A → G**: ht は「Èske」(疑問標識) と「ka」(モーダル can) の両方を A にしており A が重複。兄弟 pt_br/pt_eu/gl/lad はモーダル「Poderia/Podería/Podria」を単一 A とし、pap も「Bo por」を A とする。ht の「ka」(=can/could) がモーダル本体で A 相当。一方「Èske」は文頭疑問標識であり、参照 ja は疑問助詞「か」を G に割当てている (G は本文の segments に定義済み)。よって「Èske」を G に retag し、疑問標識を ja 参照に整合させつつ A 重複を解消。「ka」は A のまま維持。

### KEEP
- **#42 [lad] E 重複 (un … vestido)**: 「un」(冠詞)=E と「vestido」(名詞)=E が後置形容詞「kolorado」(=D, red) を挟む E…D…E 構造。これは参照 en 自身が `E:a D:red E:dress` と全く同じ E…D…E 分割をしており、冠詞+名詞=E・後置形容詞=D という限定詞複合の分割として正当。retag 不要。
- **#11 [pap] D 重複 (un … nobo)**: 「un」(冠詞)=D と「nobo」(形容詞 new)=D が名詞「buki」(=E) を挟む D…E…D 構造。兄弟 gl/lad/ht は冠詞+形容詞をまとめて D (un novo / un muevo / yon nouvo)、名詞を E とする。pap は冠詞が前置・形容詞が後置のため D が名詞を挟んで二分されるだけで、両 D とも兄弟が D とする要素(冠詞・形容詞)であり役割は一致。限定詞複合の分割として正当、KEEP。
- **#74 [gl] C 重複 (levo … agardando)**: 「levo」(助動詞的、持続 have-been) と「agardando」(動名詞 waiting) が B(30 minutos) を挟む分裂述語。参照 en は「been waiting」を単一 C、兄弟 pt_br/pt_eu/lad/ht/pap も待機述語を単一 C とする。本文の定義文字は A,B,C のみで、述語を担う他の文字が存在しない。両片とも「待っている」述語の構成要素であり C が正当に2回現れる。KEEP。

## レビュアー再評価 — round 13 (Dr. Salomão Pereira-Cohen)

開発チーム round 12 の「兄弟整合性監査」(FIX 1件 #28 ht / KEEP 3件 #42 lad・#11 pap・#74 gl)を `.wf_langmap_query.mjs` でライブ全件照合した。主要既受理項目の回帰チェックも併せて実施。

### FIX の検証 (✓)

- **#28 ht「Èske」A → G** ✓ **適用確認・妥当。** ライブ現行値:
  `[ht] G:「Èske」 B:「ou」 A:「ka」 C:「rekòmande」 D:「yon」 F:「bon」 E:「restoran」`
  retag は実データに反映済み。修正前は疑問標識「Èske」とモーダル「ka」(=can/could)がともに A に付与され **A-A 役割重複**だった(同一 role-letter が異なる統語役割を担う不整合)。dev の処置でモーダル本体「ka」を A(=兄弟 pt_br/pt_eu/gl/lad の「Poderia/Podería/Podria」、pap「Bo por」、en「Could」と同役割)に保ち、文頭疑問標識「Èske」を G に移したのは正しい。G が疑問助詞の役割であることは #28 の他言語で確認:ja `G:「か」`、zh `G:「吗」`、yue `G:「嗎」`、vi `G:「không」`、ko_yb `G:「요」` 等、G は一貫して文末/文頭の疑問標識に割り当てられている。よって「Èske」=G は cross-linguistic な役割整合に合致し、A-A 重複も解消。隣接同役なし(G…A は非隣接かつ別役割)。受理。

### KEEP の検証(いずれも妥当 — 分割選好下でも SPLIT 不可)

- **#42 lad `E:un D:kolorado E:vestido`** ✓ KEEP 妥当。ライブ確認:lad `E:「un」 D:「kolorado」 E:「vestido」`、参照 en `E:「a」 D:「red」 E:「dress」`。**参照 en 自身が冠詞・名詞をともに E、後置形容詞を D とする E…D…E 構造**を採っており、lad はそれに完全準拠。分割選好ポリシー下でも「un(冠詞)を E と別の役割に切る」ことは参照の役割割当から逸脱するため不可。en が article と noun を同一 role(E)としている以上、両者を異 role に分けるのは誤り。非隣接 E…E は参照準拠の正当な限定詞複合分割。受理。
- **#11 pap `D:un E:buki D:nobo`** ✓ KEEP 妥当。ライブ確認:pap `D:「un」 E:「buki」 D:「nobo」`、参照 en `D:「a new」 E:「book」`。**en は冠詞+形容詞「a new」を一括 D、名詞「book」を E** とする。pap は冠詞前置・形容詞後置の語順ゆえ D が名詞 E を挟んで二分されるが、両 D 片(un=冠詞、nobo=new)はいずれも en が D とする限定詞複合の要素であり役割一致。異 role への分割は en の役割割当に反するため不可。非隣接 D…D は語順起因の正当な分割。受理(なお pt_br/pt_eu は `E:um livro D:novo` と冠詞を名詞側 E に寄せる別配分だが、これは既存の兄弟内バリエーションで本ラウンドの対象外、actionable でない)。
- **#74 gl `C:levo B:30 minutos C:agardando`** ✓ KEEP 妥当。これは round 2 で当方が既に CONCEDE した項目18(分裂述語の非隣接 C…C)であり、ライブで保持を確認(`A:「Eu」 C:「levo」 B:「30 minutos」 C:「agardando」`)。levo…agardando は語順上 B を挟む正しいガリシア語継続構文で、述語を担う他の role-letter が定義に存在しないため C が2回現れるのは正当。蒸し返さない。受理。

### 回帰チェック(主要既受理項目)

ライブ抜き取り照合、いずれも維持・回帰なし:
- **#5 pap** ✓ `A:「E」 B:「kòfi」 A:「aki」 D:「ta」 C:「masha」 D:「dushi」`(D-C-D 非隣接保持)。
- **#7 pap** ✓ `D:「solo」`(solmentu 誤訳是正を保持)。
- **#80 pt_br** ✓ `… D:「é」 I:「uma」 C:「experiência」 G:「valiosa」`(round 11 の冠詞 G→I retag を保持、G-G 二重の再発なし)。
- **#49 与格 me** ✓ pt_br `B:「me」 D:「diga」` / gl `D:「díga」 B:「me」` / lad `D:「di」 B:「me」`(分離保持)。
- 新たな隣接同役割重複の発生は #28 含め一切なし。

### 撤回事項・KEEP 類型の維持

round 2 で CONCEDE した5件(項目8 vestido / 13 Estivo / 17 e atardi aki / 18 #74 gl C二分割 / 19 借用不統一)、round 4 の KEEP 類型(屈折過去 D|E、前置詞+冠詞融合 #53/#73/#38、24時間表記 #70 pt、前置詞句一体 #46 inèdtan、ht 関係節 #80 `ki gen valè`)はすべて妥当。維持し蒸し返さない。

### スコアカード(round 13)

- 受理 (✓): round 12 監査の FIX 1件(#28 ht Èske→G)+ KEEP 3件(#42 lad / #11 pap / #74 gl)を全件ライブ整合確認。
- 撤回 (CONCEDE): 本ラウンド新規撤回なし(累積5件を維持)。
- 是正要求 (✗): 0件。
- 新規指摘 (actionable): 0件。
- 回帰: 0件。

round 12 の兄弟整合性監査は FIX・KEEP ともライブデータと完全一致し、#28 の A-A 役割重複という実在の誤りが正しく是正された。3件の KEEP はいずれも参照 en の役割割当に準拠した正当な限定詞複合分割、ないし既 CONCEDE 項目であり、分割選好ポリシー下でも異 role への分割は参照から逸脱するため SPLIT 不可。全6言語・全指摘項目について明確な誤りはすべて修正・検証済みで、残る点は双方合意済みの CONCEDE/KEEP のみ。actionable な残課題はない。

**ファイル状態: CLOSED — 残課題なし**
