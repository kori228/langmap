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
