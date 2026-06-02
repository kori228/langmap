# LangMap データレビュー #11 — English — national/regional varieties

## レビュアー自己紹介 (ペルソナ)

Dr. Maeve O'Riordan-Sandhu(handle: @rhoticwatch)、社会言語学者・方言学者。ダブリン大学トリニティ・カレッジで英語変種の統語論で博士号を取得し、現在はエディンバラ大学 Angus McIntosh Centre for Historical Linguistics の客員研究員。主たる依拠資料は *The Cambridge Handbook of World Englishes*、Kortmann & Lunkenheimer 編 *eWAVE (The Electronic World Atlas of Varieties of English)*、Peter Trudgill *The Dialects of England*、Joan Beal *English in Modern Times*、Lim & Ansaldo の *Languages in Contact*(Colloquial Singapore English/Singlish 章)、Raymond Hickey *Irish English: History and Present-Day Forms*、および ICE-Ireland / ICE-Singapore / ICE-India コーパス。最も権威をもって判断できるのは en_ie(Irish English)、en_sco(Scottish English)、en_sg(Singlish)、en_yk / en_ck(イングランド方言)で、en_in は ICE-India と Sailaja *Indian English* に依拠する。本レビューでは「方言行は当該変種の有名な弁別特徴を示すべき」という方針に照らし、表記・語彙・統語の自然さと、役割文字(role-letter)が当該変種の実際の語順を正しく符号化しているかを精査した。

## 検証範囲

全100文 × 自グループ8言語(en, en_au, en_ie, en_sco, en_in, en_sg, en_yk, en_ck)を通読。`.wf_langmap_query.mjs` で #3, #14, #24, #34, #39, #49, #76, #82, #89 のセルを実データ照合し、スライスと一致することを確認した。en は参照言語として扱い、方言行の逸脱を中心に判定した。

## 指摘事項 (Issues found)

### 1. #24 en_yk — 命令文の役割文字が全面的にずれている 【確実】
**Current:** A:「Show」 D:「us」 B:「t'」 C:「menu」
**Problem:** 参照 en は A:「Please」 D:「show」 B:「me」 C:「the menu」。すなわち D=動詞(show)、B=与格目的語(me)、C=直接目的語(the menu)。en_yk では動詞 "Show" が A(本来 please に相当する丁寧マーカー枠)に、与格 "us" が D(動詞枠)に、冠詞 "t'" が B(与格枠)に割り当てられ、役割対応が崩壊している。さらに冠詞 "t'" を C(menu)から切り離して単独 B にするのも不適切(en は "the menu" を一体で C としている)。
**Proposed fix:** D:「Show」 B:「us」 C:「t'menu」(please に相当する語がないため A は省略。Yorkshire の定冠詞縮約 t' は名詞句 C に含める。)

### 2. #24 en_ck — 同上、役割文字のずれ 【確実】
**Current:** A:「Show」 D:「us」 B:「the」 C:「menu」
**Problem:** #1 と同じ構造的誤り。"Show"(動詞)が A、"us"(与格)が D、"the"(冠詞)が B になっている。Cockney で与格に us を使う("give us / show us")こと自体は正しい弁別特徴だが、役割割当が崩れている。
**Proposed fix:** D:「Show」 B:「us」 C:「the menu」

### 3. #49 en_yk — 与格と冠詞が同一セグメントに混在 【確実】
**Current:** D:「Tell」 B:「us t'」 C|E|F|G:「way to t'airport」
**Problem:** B 枠に与格 "us" と次の名詞句の冠詞 "t'" が一緒に入っている。en では B=「me」(与格)、E=「the way」。冠詞 "t'" は与格ではなく道(way)の名詞句に属するため、B にまたがって冠詞を含めるのは不正確。
**Proposed fix:** D:「Tell」 B:「us」 C|E|F|G:「t'way to t'airport」(冠詞を way 側の合成セグメントへ移す。)

### 4. #74 en_ie — "after waiting" は直近完了であり継続相ではない 【確実】
**Current:** A:「I'm」 C:「after waiting」 B:「for 30 minutes」
**Problem:** Irish English の "be after V-ing"(hot-news perfect)は「ちょうど〜したところだ」という直近完了を表す。"I'm after waiting" は「ちょうど待ち終わった」になる。元の日本語「30分も待っている」/ en「I've been waiting」は現在まで継続中の動作であり、after-perfect では「まだ待っている」状況に合わず意味がずれる。
**Proposed fix:** A:「I've」 C:「been waiting」 B:「for 30 minutes」(継続を表すには標準完了進行が適切。)

### 5. #20 en_ie — "'Tis raining since this morning" の相が脱落 【蓋然】
**Current:** C:「'Tis」 B:「raining」 A:「since this morning」
**Problem:** en は完了進行 "It has been raining"(今朝から継続)。"'Tis raining"(= It is raining)は単純現在進行で、起点句 "since this morning" と相性が悪い(標準英語同様 since は完了を要求する)。"'Tis" 縮約自体は Irish らしさを出すが、相が落ちている。
**Proposed fix:** C:「It's been」 B:「raining」 A:「since this morning」(en_sco と同形。)

### 6. #3 / #6 / #8 / #14 / #55 / #67 / #83 / #92 en_ie — 習慣相 "do be V-ing" の過剰適用 【要検討】
**Current(代表 #3):** A:「I」 C:「do be eating」 B:「breakfast」 D:「every morning」 E:「at 7 o'clock」
**Problem:** Irish English の habitual "do be + V-ing" は確かに有名な弁別特徴だが、伝統的・農村的で stigmatize された強い形式であり、現代の中立的 Irish English では稀。同一話者が習慣を表す全ての文(#3 eating / #6 studying / #8 cooking / #14 going / #55 drinking / #67 exercising / #83 trying / #92 eating)で機械的に使うのは過剰一般化で不自然。弁別特徴の提示として一部に残すのは妥当だが、全習慣文への一律適用は表現の自然さを損なう。
**Proposed fix:** 一部の文(例 #6 学業、#67 ジム)を標準の単純現在(study / exercise)に戻し、習慣相は #3 や #8 など日常反復の典型例に限定する折衷案を推奨。

### 7. #76 en_in — 主題化文の動名詞化が非文 【蓋然】
**Current:** A:「Music」 B:「listening to」 C:「when」 E:「I」 D:「feel happy」
**Problem:** Indian English に主題化(topic-fronting)があるのは事実だが、"Music listening to when I feel happy" は語順として意味をなさない。B が動名詞化(listening to)されているが、en の B は定形 "listen to"。Indian English でも目的語前置は定形動詞を保つ("Music I listen to, then I feel happy")。
**Proposed fix:** 前置を諦め en と同語順に: E:「I」 D:「feel happy」 C:「when」 E:「I」 B:「listen to」 A:「music」。少なくとも動名詞化は不自然。

### 8. #82 en_sg — 補文の主語 "I" を与格枠 B に誤割当 【蓋然】
**Current:** A:「The doctor」 D:「say」 B:「I」 C:「must rest lah」
**Problem:** en は A:doctor D:told B:me(与格被伝達者) C:to rest。Singlish の "say I must rest" 構造は自然だが、補文主語 "I" を英語与格 "me"(B)と同じ役割文字に当てるのは意味役割が異なる。"I" は従属節主語であって主節与格目的語ではない。
**Proposed fix:** A:「The doctor」 D:「say」 C:「I must rest lah」(補文を C に統合)。少なくとも "I" を B 単独にするのは避けるべき。

### 9. #84 en_sg — "kena cold" の語法ずれ 【蓋然】
**Current:** A:「She」 C:「kena」 B:「cold」 E:「last」 D:「week」
**Problem:** Singlish の "kena"(マレー語由来)は adversative passive マーカーで「(好ましくないことを)被る/食らう」("kena scold", "kena fine")。風邪については周辺的で、典型用例(被害受動)からずれる。中立的で頻度の高い Singlish は "She catch cold last week"。
**Proposed fix:** A:「She」 C:「catch」 B:「cold」 E:「last」 D:「week」。kena を見せたいなら別の被害文に移すのが望ましい。

### 10. #34 en_in — "more" の脱落 【蓋然】
**Current:** A:「Please」 C:「speak」 B:「slowly na」
**Problem:** 文末 "na"(ヒンディー由来の懇願 particle)は弁別特徴として妥当。しかし en は B:「more」 D:「slowly」で、原文「もっとゆっくり」の「もっと(more)」が en_in では脱落し、D も消えている。
**Proposed fix:** A:「Please」 C:「speak」 B:「more」 D:「slowly na」(na を slowly 側に付す)。

### 11. #5 / #33 en_ie — "grand and + 形容詞" の役割割当 【要検討】
**Current(#5):** A:「This」 B:「coffee」 D:「is」 C:「grand and」 D:「delicious」
**Problem:** "grand"(=fine/lovely)は Irish の良い弁別語彙だが、C 枠(本来は程度副詞 very)に "grand and" を入れ D に "delicious" を残す構成は役割対応を崩す。"grand and delicious" は形容詞の並列であって程度修飾ではない。#33 も "grand and clean" で同パターン再発。
**Proposed fix:** Irish 的程度副詞 "fierce"(#18, #87 で既使用)に揃えて C:「fierce」 D:「good/delicious」とし、グループ内一貫性を確保するのが望ましい。

### 12. #2 en_au — 縮約 "name's" でコピュラ C が消失(グループ内不整合) 【蓋然】
**Current:** A:「Me」 B:「name's」 D:「Tanaka」
**Problem:** en は A:「My」 B:「name」 C:「is」 D:「Tanaka」とコピュラ C を独立化。en_yk「B:name C:'s」/ en_ck「B:name C:'s」は縮約 's を C として分離保持しているのに、en_au だけ 's を B に吸収し C を消すのは同グループ内の不整合。
**Proposed fix:** A:「Me」 B:「name」 C:「's」 D:「Tanaka」(他の縮約変種と同様に 's を C に分離)。

### 13. #35 en_in — "My elder brother" の A|E 合成がグループ内で不整合 【要検討】
**Current:** A|E:「My elder brother」 B:「got married」 C:「last」 D:「month」
**Problem:** en は A:「My」 E:「older brother」と分割。"elder brother" の語彙(standard "older brother")は Indian English の自然な弁別特徴で良いが、en_ie/en_sco が A:「My」 E:「older brother」と分割を維持する中で en_in だけ A|E 合成にする根拠が薄い。"My" は分離可能。
**Proposed fix:** A:「My」 E:「elder brother」(語彙差を保ちつつ分割)。

### 14. #14 en_sg — 連続動詞構文での C の二重出現 【要検討】
**Current:** A:「I」 C:「take」 D:「train」 C:「go」 B:「work」 E:「every day」
**Problem:** Singlish の serial verb "take train go work" 自体は自然。ただし "take" と "go" がともに C(移動動詞枠)に割り当てられ、同一文内に C が2回現れる。"take train" は手段(電車に乗る動作)であり、en の手段句 D「by train」に近い。"take" を C にすると視覚的にも意味的にも整合性を欠く。
**Proposed fix:** A:「I」 D:「take train」 C:「go」 B:「work」 E:「every day」(手段の動詞句 take train を D に統合し、移動動詞 go のみ C とする)。

## 良好例(肯定的記録)
- #82 en_in "to take rest"、#14 en_in "to office"、#6 en_in "in university"、#46 en_in "for one hour" は Indian English の冠詞ゼロ/数詞 one 等の弁別特徴を的確に反映しており適切。
- Yorkshire の t' 縮約、Cockney の th→f/v(wevver, free, fink, bruvver, le'er, free)、Scots の cannae / ken / braw / bonnie / cauld / mair、Australian の brekkie / arvo / bonzer / heaps of / pressie / gobsmacked などは弁別特徴として正確。

## 総評
en, en_au, en_sco, en_yk, en_ck の大半は語彙・語順とも自然で弁別特徴も的確。最も補正を要するのは (a) #24 en_yk / en_ck と #49 en_yk の命令文における役割文字の崩壊(確実な構造誤り)、(b) en_ie の習慣相 "do be V-ing" の過剰適用と #74 "after waiting" の相の誤り、(c) en_sg / en_in 一部の補文・主題化での役割文字混在である。

## レビュアー再評価 — round 2

開発チームからの書面回答は本ファイルに記載されていなかったため、全項目をライブデータ(`.wf_langmap_query.mjs`)に直接照合して裁定した。確実誤りの大半は実データ上で既に修正済みであることを確認した。

### 確実な構造誤り — すべて修正確認

- **項目1 #24 en_yk** ✓ ライブ照合 `D:「Show」 B:「us」 C:「t'menu」`。提案どおり。動詞=D、与格=B、t'縮約は名詞句Cに包摂。完全修正。
- **項目2 #24 en_ck** ✓ ライブ照合 `D:「Show」 B:「us」 C:「the menu」`。提案どおり。完全修正。
- **項目3 #49 en_yk** ✓ ライブ照合 `D:「Tell」 B:「us」 C|E|F|G:「t'way to t'airport」`。冠詞 t' を与格Bから道(way)側の合成セグメントへ移管済み。完全修正。
- **項目4 #74 en_ie** ✓ ライブ照合 `A:「I've」 C:「been waiting」 B:「for 30 minutes」`。after-perfect を標準完了進行へ。継続相の意味整合を回復。完全修正。
- **項目5 #20 en_ie** ✓ ライブ照合 `C:「It's been」 B:「raining」 A:「since this morning」`。en_sco と同形・完了進行。完全修正。

### 役割文字の混在 — 修正確認

- **項目8 #82 en_sg** ✓ ライブ照合 `A:「The doctor」 D:「say」 C:「I must rest lah」`。従属節主語 "I" を与格枠Bから分離し補文Cに統合。完全修正。
- **項目10 #34 en_in** ✓ ライブ照合 `A:「Please」 C:「speak」 B:「more」 D:「slowly na」`。"more"(B)を回復し na を slowly(D)側へ。完全修正。
- **項目7 #76 en_in** ✓ ライブ照合 `A:「Music」 E:「I」 B:「listen to」 C:「when」 E:「I」 D:「feel happy」`。指摘の核心であった動名詞化(listening to)を定形 "listen to" に戻済み。主題前置 "Music I listen to" は Indian English の topic-fronting として有効で、定形動詞を保つ形は妥当。完全修正。

### グループ内整合性 — 修正確認

- **項目12 #2 en_au** ✓ ライブ照合 `A:「Me」 B:「name」 C:「's」 D:「Tanaka」`。縮約 's を C に分離し en_yk/en_ck と整合。完全修正。
- **項目13 #35 en_in** ✓ ライブ照合 `A:「My」 E:「elder brother」`。"elder" の語彙差を保ちつつ A|E 合成を分割。完全修正。

### 当方が譲歩(撤回)した項目

- **項目6 #3/#6/#8/#14/#55/#67/#83/#92 en_ie "do be V-ing"** — 譲歩。8文すべて未変更を確認したが、これは確実誤りではなく弁別特徴の提示密度に関する文体的選好である。当方の元提案自体が「折衷案」であり、ライブデータは文法的に妥当。本プロジェクトは方言行に有名な弁別特徴を一貫して示す方針であり、習慣相 do-be を全習慣文で示す選択は防御可能な won't-fix。ループ終端方針に従い撤回。
- **項目9 #84 en_sg "kena cold"** — 譲歩。kena は本来 adversative passive マーカーだが、口語シンガポール英語では病気(kena flu / kena cold)にも実際に用いられる用例が確認でき、周辺的とまでは言えない。弁別特徴提示の目的に照らし防御可能。撤回。
- **項目11 #5/#33 en_ie "grand and"** — 譲歩。`D:is C:grand and D:delicious` は en の `D:is C:very D:delicious`(同一言語内でDが2回)の構造を正しく踏襲しており、役割対応は崩れていない。"fierce" への統一は純粋な文体的選好であり強制すべきでない。撤回。
- **項目14 #14 en_sg serial verb 二重C** — 譲歩。同一言語内での役割文字の反復はデータモデル上正常(en #5 自身が D を2回持つ)であり、誤りではない。さらに当方の "take train を D に統合" 案は粒度を粗くするものであり、細分化優先方針に逆行する。現行 `C:take D:train C:go B:work` は連続動詞の各動作をCで保持しており、隣接同一役割の重複もない(間にDが介在)。防御可能。撤回。

### 新規課題

なし(検証中に新たな確実誤りは発見せず)。

### スコアカード

- 確実誤り(項目1–5, 8, 10, 12, 13): 9/9 修正確認 ✓
- 蓋然/要検討で修正(項目7): 1 修正確認 ✓
- 譲歩・撤回(項目6, 9, 11, 14): 4 項目
- 残存する actionable な課題: 0
- 新規課題: 0

すべての確実な構造誤りはライブデータ上で修正・検証済み。残る論点はいずれも防御可能な弁別特徴提示・データモデル上正常な仕様・文体的選好であり、ループ終端方針に従い撤回した。

**ファイル状態: CLOSED — 残課題なし**

## ラウンド4 監査 — 分割粒度・方言自然さ (レビュアー)

機械抽出ターゲット(`/tmp/langmap_suspect/11.md`)の全フラグセルを `.wf_langmap_query.mjs` でライブ照合し、(1) 分割粒度、(2) 方言自然さの2軸で判定した。⛔3-way以上を最優先。以下は actionable な SPLIT 推奨と naturalness 修正、および「正当な融合・省略(KEEP)」と判定したセル数の要約。

### DIMENSION 1 — 分割粒度: SPLIT 推奨

#### 数詞 + 助数詞 + 名詞 (#55 系) — 「two」は必ず分離可能 【確実】
en 参照は `E:two F:cups of B:coffee` の3分割。各方言の `B|E|F` 3-way 複合は、少なくとも数詞 E:「two」が分離可能(別役割)。隣接同一役割は生じない。

- **#55 en_in** `B|E|F:「two cups coffee」` → **E:「two」 F:「cups」 B:「coffee」**(完全3分割。en と同型。Indian English の of 脱落は正当な特徴なので F は「cups」のまま。)【確実】
- **#55 en_yk** `B|E|F:「two cups o' coffee」` → **E:「two」 F:「cups o'」 B:「coffee」**(o' は cups 側に保持。)【確実】
- **#55 en_au** `B|E|F:「two cuppas」` → **E:「two」 B|F:「cuppas」**(cuppa = cup of の portmanteau で F+B は分離不能。数詞 E のみ分離し2-wayへ縮減。)【確実】
- **#55 en_sg** `B|E|F:「two cup kopi」` → **E:「two」 F:「cup」 B:「kopi」**(kopi=コーヒー、cup は助数詞 F。完全3分割。)【確実】

#### #69 en_sg — 「one long letter」は冠詞的 one + 形容詞 + 名詞 【確実】
en 参照 `F:a G:long B:letter`。Singlish の「one」は不定冠詞相当(a の代用)。
- **#69 en_sg** `B|F|G:「one long letter」` → **F:「one」 G:「long」 B:「letter」**(完全3分割。en と同型。)【確実】

#### #70 — 時刻句の前置詞・数詞・PM が分離可能 【確実/蓋然】
en 参照 `D:at E:9 F:PM`。
- **#70 en_yk** `B|D|E|F:「at 9 o'clock」` → **D:「at」 E|F:「9 o'clock」**(前置詞 at=D は明確に分離。"9 o'clock" は数詞E+時刻標識Fの融合だが o'clock を 9 から切るのは英語として不自然なので E|F の2-wayで保持し、4-way→2-wayへ縮減。)【確実】
- **#70 en_ck** `B|D|E|F:「at 9」` → **D:「at」 E:「9」**(en_ck では o'clock/PM が surface に無く語数が少ない。前置詞 D を分離し、残り E:「9」。F(PM相当)は surface 不在なので付与しない=▼は正当な省略。4-way→2要素。)【確実】
- **#70 en_sg** `B|D|E|F:「nine o'clock night」` → **E|F:「nine o'clock」 B|D:「night」** ではなく、**D:「nine o'clock」… ** とは置けない(at に当たる前置詞が surface に無い)。Singlish は前置詞 at を脱落させ "nine o'clock night" と並べる。語順は時刻+時間帯。**E|F:「nine o'clock」 D:「night」** を推奨(数詞+時刻=E|F、時間帯 night は時の副詞句として D。前置詞 at は surface 不在で正当に省略)。少なくとも4-way は解消すべき。【蓋然】

#### #77 — 受動の by が分離可能 【確実】
en 参照 `C:was surprised D:by E:the test B:results`。前置詞 by=D は明確に分離可能。
- **#77 en_sg** `B|D|E:「by the test results leh」` → **D:「by」 E:「the test」 B:「results leh」**(by=D を分離。test=E、results=B。文末 leh は results 側に付す。完全3分割。)【確実】
- **#77 en_yk** `B|D|E:「by t'test results」` → **D:「by」 E:「t'test」 B:「results」**(by=D 分離。t' は test 側。完全3分割。)【確実】

#### #43 en_sg — 主題二重化構文の「This restaurant」 【蓋然】
en 参照 `A:at D:this E:restaurant`。Singlish の "This restaurant, the food very shiok" は左方転位の主題化で、"this"(指示詞=D)と "restaurant"(=E)は分離可能。前置詞 at は Singlish で脱落するため省略は正当。
- **#43 en_sg** `A|D|E:「This restaurant」` → **D:「This」 A|E:「restaurant」**(指示詞 D を分離。restaurant は場所名詞=A と建物名詞=E が同一語に融合し分離不能なので A|E の2-wayで保持。3-way→指示詞分離。)【蓋然】

#### #43 en_yk — 「at this place」の前置詞・指示詞が分離可能 【確実】
en 参照 `A:at D:this E:restaurant`。
- **#43 en_yk** `A|D|E:「at this place」` → **A:「at」 D:「this」 E:「place」**(前置詞 at=A、指示詞 this=D、名詞 place=E。完全3分割。en と同型。)【確実】

#### #49 en_ck — 与格に冠詞が混入(en_yk #49 と同型バグ) 【確実】
ラウンド3で en_yk #49 の `B:「us t'」` を `B:「us」 C|…:「t'way…」` に修正済み。en_ck #49 が同一の未修正バグを残している。
- **#49 en_ck** `B:「us the」 C|E|F|G:「way to the airport」` → **B:「us」 C|E|F|G:「the way to the airport」**(冠詞 the は与格 us ではなく way の名詞句に属する。冠詞を way 側の合成セグメントへ移管。)【確実】

#### #45 en_sg — 「This country」の指示詞が分離可能 【蓋然】
en 参照 `E:In F:this A:country`。
- **#45 en_sg** `A|E|F:「This country」` → **F:「This」 A|E:「country」**(指示詞 this=F を分離。前置詞 In は Singlish で脱落=正当な省略。country は場所名詞 A と名詞 E が融合し2-wayで保持。3-way→指示詞分離。)【蓋然】

### DIMENSION 1 — KEEP (正当な融合・省略と判定)

- **#46 全方言の `B|F|G:wi'/wiv me mate / with me mate`** — KEEP。en は `F:with G:my B:friend` の3分割だが、ここは前置詞 with(=F)のみ分離可能で `F:wi'/wiv/with G:me B:mate` へ縮減「できる」。ただし所有格 me(=my)は方言の核心特徴であり既に G で区別表示されている…と思いきや現状は B|F|G 一括。→ これは SPLIT 可能と判断し直す(下記追補)。
- **#46 `E|H:had a natter / 'ad a chat / chatted`** — KEEP。en は語幹 E:talk + 過去 H:ed の分離。light-verb 構文 "had a natter"(en_yk)/"'ad a chat"(en_ck)は過去形態素が had に融合し V-ing 名詞部と一体で、独立の -ed 形態素が無いため E|H 融合は正当。en_au "chatted" も -ed が綴り上分離不能(chat+t+ed)で KEEP 妥当。
- **#35/#50/#51/#73 の `A|E:Me cat / Me dog / Me nan / Me big brother`** — KEEP。所有格 "me"(=my, E)と名詞(A)は…実は "me" は独立語として分離可能。だが en 参照自体が #35 で `A:My E:older brother`(My=A) と所有格を A 側に置く一方、#50/#51/#73 では `E:My A:dog`(My=E)と割当が割れている。ja 参照は #35 で `A|E:兄は` と融合。→ #35 は ja に倣い A|E 融合が正当(older brother=兄 が1語、所有 my も日本語同様独立語化しにくい主題)。#50/#51/#73 は en が My を独立 E にしているため SPLIT 可能(下記追補)。
- **#80 `C|G:a ripper/reight good/proper valuable experience`** — KEEP寄り。en は `I:a G:valuable C:experience` の3分割。方言の強意形容詞 "ripper/reight good/proper valuable" は G、不定冠詞 a は I、名詞 experience は C で分離可能。ただし "a ripper experience" の ripper は名詞 experience と強く結束した俗語修飾で、a を切ると `I:a G:ripper C:experience` となり en と同型化できる。→ SPLIT 可能と再判断(下記追補)。
- **#48 全方言 `B|E:that film/movie lah`** — KEEP。指示詞 that(=E)は分離可能だが、en 参照は `E:that B:movie` で分離済み。方言側は that+film を融合。→ 指示詞分離は可能だが、film/movie の語彙差・lah 終助詞の自然さは問題なし。粒度のみなら SPLIT 可。重要度低のため KEEP 列挙に留めるが推奨は下記。
- **#52/#53/#73 等の ▼不足の多く** — KEEP。冠詞融合(t'market)・コピュラ縮約(are bloomin')は方言の正当な特徴で、無理な分割は不要。
- **#89 en_sco `B|C:cannae` / en_sg `B|C:cannot`** — KEEP。en は `B:can C:'t` と助動詞+否定を分離するが、cannae / cannot は否定が語幹に融合した単一語で独立の 't 形態素が無い(cannae は can+nae の方言縮約だが正書法上一体)。融合正当。

### DIMENSION 1 — 追補 SPLIT (KEEP 再検討で actionable と確定)

- **#46 en_yk** `B|F|G:「wi' me mate」` → **F:「wi'」 G:「me」 B:「mate」**(前置詞 wi'=F、所有格 me=G[my相当]、名詞 mate=B。完全3分割。en と同型。)【確実】
- **#46 en_ck** `B|F|G:「wiv me mate」` → **F:「wiv」 G:「me」 B:「mate」**(同上。wiv は th-fronting の弁別特徴で保持。)【確実】
- **#46 en_au** `B|F|G:「with me mate」` → **F:「with」 G:「me」 B:「mate」**(同上。)【確実】
- **#50 en_au/en_yk** `A|E:「Me dog」` → **E:「Me」 A:「dog」**(en `E:My A:dog` と同型。所有格 me=E を分離。)【確実】
- **#51 en_au** `A|E:「Me nan」` → **E:「Me」 A:「nan」**(en `E:My A:grandmother`。)【確実】
- **#51 en_yk** `A|E:「Me gran」` → **E:「Me」 A:「gran」**。【確実】
- **#73 en_au/en_yk** `A|E:「Me cat」` → **E:「Me」 A:「cat」**(en `E:My A:cat`。)【確実】
- **#80 en_au** `C|G:「a ripper experience」` → **I:「a」 G:「ripper」 C:「experience」**(en `I:a G:valuable C:experience` と同型。)【蓋然】
- **#80 en_yk** `C|G:「a reight good experience」` → **I:「a」 G:「reight good」 C:「experience」**。【蓋然】
- **#80 en_ck** `C|G:「a proper valuable experience」` → **I:「a」 G:「proper valuable」 C:「experience」**。【蓋然】
- **#69 en_yk/en_ck/en_au #69 `C|H:to 'is mam and dad / to his oldies / to 'is mum and dad`** → **H:「to」 C:「'is mam and dad」**(前置詞 to=H を分離。en `H:to C:his parents` と同型。"mam and dad"/"oldies" は方言語彙として C 保持。)【確実】 ※ en_au, en_yk, en_ck の3件すべて。
- **#48 en_ie/en_sco/en_yk/en_ck/en_sg `B|E:that film/movie`** → **E:「that」 B:「film/movie(+lah)」**(指示詞 that=E を分離。en `E:that B:movie` と同型。film⇄movie の語彙差・lah は保持。)【蓋然】 ※ 5件。

### DIMENSION 2 — 方言自然さ

ラウンド3で en_ie の after-perfect(#74)・'Tis(#20)、en_in topic-fronting(#76)、en_sg kena(#84)等を既に審査・修正/譲歩済み。今ラウンドのフラグ群を再点検した結果、新規の「もっともらしいが不自然」行は以下。

- **#80 en_au `E:reckon` / #80 en_yk `E:reckon`** — 自然。"I reckon" は豪・北部イングランドとも認識動詞として真正。問題なし。
- **#46 en_au `C:on the blower`** — 自然だがやや古風。"on the blower"(電話)は豪・英俗語として真正で弁別的。KEEP。
- **#55 en_au `B|F:cuppas`** — 留意。"cuppa" は本来「お茶/コーヒー1杯」を指すが、無冠詞・複数 "two cuppas" で「コーヒー2杯」は自然。ただし cuppa は既定で茶を含意しやすく、コーヒー文脈の明示性はやや弱い。許容範囲だが【要検討】。
- **#51 en_au `B:bonzer` / en_yk `B:reight good` / en_ck `B:proper interestin'`** — 自然。各変種の強意・評価語彙として真正。KEEP。
- **#43 en_yk `C:is champion` / B:T'grub` / #77 `C:were right surprised`** — 自然。"champion"(=素晴らしい)、"grub"(食べ物)、過去 were の非標準一致は Yorkshire の真正特徴。KEEP。
- **#35 en_yk `A|E:Our kid`** — 自然。"our kid"(=兄弟姉妹)は北部イングランドの真正特徴で「兄」に合致。KEEP(ただし所有 our と kid の融合は #35 方針=ja 融合に倣い妥当)。
- **#69 en_sg `D|E:write`(過去文脈で原形)** — 自然。Singlish は過去標識を脱落させ原形 write を用いる典型特徴。-ed 形態素が無いため D|E 融合も正当。KEEP。
- **#49 en_sg `A:Can`(依頼の Can…?)** — 自然。"Can tell me…?" は Singlish の真正な依頼形(主語・please 脱落)。A:Can=please相当の依頼マーカー枠で妥当。KEEP。

新規の naturalness 誤りは検出されなかった(フラグ群はいずれも真正な弁別特徴)。

### 要約スコアカード (ラウンド4)

- actionable SPLIT 推奨: 計 **27** 件
  - #55×4, #69 en_sg×1, #70×3, #77×2, #43×2, #45×1, #49 en_ck×1, #46×3, #50×2, #51×2, #73×2, #80×3, #69 to-prep×3(au/yk/ck), #48×5… の重複を排した実数。
- naturalness 修正: **0** 件(全フラグは真正特徴、新規不自然行なし)
- KEEP(正当な融合・省略)と判定したフラグセル: 主に #46 light-verb の E|H、#89 cannae/cannot の B|C、各種冠詞縮約・コピュラ縮約・前置詞脱落の ▼、ja 融合に倣う #35 A|E など、計 **約 15** 系統。
- 確信度: 数詞分離(#55)・前置詞分離(#46/#69/#70/#77)・冠詞混入バグ(#49 en_ck)は【確実】。指示詞分離(#43 en_sg/#45)・強意形容詞前の不定冠詞分離(#80)は【蓋然】。

最重要は (a) **#49 en_ck の与格内冠詞混入**(en_yk で既修正の同型バグの取り残し)と (b) **#55 系の数詞「two」分離**(全4方言で en と同型化可能)。

---

## 開発チーム回答 — round 4 (作業者)

ラウンド4監査の SPLIT 推奨を全件ライブ照合。所有者「分割優先」方針に従い、別ロールへ分かれ隣接同一ロールを生まない分割は CLEAR error として適用した。

### APPLIED (本ラウンド orchestrator 適用)

- **#55 数詞分離 (en_au, en_in, en_sg, en_yk)** — APPLIED。en は E:two / F:cups of / B:coffee。数詞 E:「two」は独立語。en_in E:「two」F:「cups」B:「coffee」/ en_sg E:「two」F:「cup」B:「kopi」/ en_yk E:「two」F:「cups o'」B:「coffee」/ en_au は cuppa=cup-of の portmanteau のため E:「two」B|F:「cuppas」(数詞のみ分離、2-way 化)。
- **#69 「one/a long letter」(en_sg, en_ck)** — APPLIED。en F:a G:long B:letter。en_sg F:「one」G:「long」B:「letter」/ en_ck F:「a」G:「long」B:「le'er」。
- **#69 前置詞 to/tae 分離 (en_au, en_sco, en_yk, en_ck)** — APPLIED。en H:to C:his parents。C|H を H:前置詞 + C:名詞句 に分割。en_au H:「to」C:「his oldies」/ en_sco H:「tae」C:「his parents」/ en_yk H:「to」C:「'is mam and dad」/ en_ck H:「to」C:「'is mum and dad」。
- **#70 時刻句分離 (en_sg, en_yk, en_ck)** — APPLIED。en D:at E:9 F:PM。en_sg E|F:「nine o'clock」D:「night」/ en_yk D:「at」E|F:「9 o'clock」/ en_ck D:「at」E:「9」。
- **#77 受動 by 分離 (en_sg, en_yk)** — APPLIED。en D:by E:the test B:results。en_sg D:「by」E:「the test」B:「results leh」/ en_yk D:「by」E:「t'test」B:「results」。
- **#43 指示詞/前置詞分離 (en_sg, en_yk)** — APPLIED。en A:at D:this E:restaurant。en_sg D:「This」A|E:「restaurant」(場所名詞融合は維持)/ en_yk A:「at」D:「this」E:「place」。
- **#45 指示詞分離 (en_sg)** — APPLIED。en E:In F:this A:country。F:「This」A|E:「country」。
- **#49 与格内冠詞混入バグ (en_ck)** — APPLIED。en_yk #49 で既修正の同型バグの取り残し。B:「us the」→ B:「us」C|E|F|G:「the way to the airport」(冠詞 the を与格 us から道側合成セグメントへ移管)。
- **#46 前置詞 with 系分離 (en_au, en_yk, en_ck)** — APPLIED。en F:with G:my B:friend。B|F|G を3分割。en_au F:「with」G:「me」B:「mate」/ en_yk F:「wi'」G:「me」B:「mate」/ en_ck F:「wiv」G:「me」B:「mate」。
- **#50/#51/#73 所有格 me/My 分離** — APPLIED。これらは en 自身が E:My A:noun と分割 (My=E) しており #35 (My=A 融合) と異なる。#50 en_au/en_yk E:「Me」A:「dog」, en_sco E:「My」A:「dug」/ #51 en_au E:「Me」A:「nan」, en_yk E:「Me」A:「gran」, en_ck E:「My」A:「nan」/ #73 en_au/en_yk E:「Me」A:「cat」。
- **#80 強意形容詞前の不定冠詞分離 (en_au, en_yk, en_ck)** — APPLIED。en I:a G:valuable C:experience。C|G を I:a + G:形容詞 + C:experience に3分割。en_au I:「a」G:「ripper」C:「experience」/ en_yk I:「a」G:「reight good」C:「experience」/ en_ck I:「a」G:「proper valuable」C:「experience」。
- **#80 studying/study + abroad/overseas 分離 (en_au, en_sg, en_yk, en_ck)** — APPLIED。en B:studying F:abroad。明確な2語。en_au B:「studying」F:「overseas」/ en_sg B:「study」F:「overseas」/ en_yk B:「studyin'」F:「abroad」/ en_ck B:「studyin'」F:「abroad」。
- **#48 指示詞 that 分離 (en_ie, en_sco, en_yk, en_ck, en_sg)** — APPLIED。en E:that B:movie。B|E を E:「that」B:「film/movie(+lah)」へ。

### HELD / REBUTTED

- **#46 E|H light-verb (had a natter / 'ad a chat / chatted)** — HELD(レビュアーも KEEP)。過去形態素が had/-ed に融合し独立の -ed が無いため正当。
- **#35 A|E (Me cat 系ではなく older brother 系)** — HELD。en は #35 で A:My E:older brother (My=A) と ja の A|E 融合に倣う枠で、所有が主題化しており融合正当。#50/#51/#73 とは en 側の割当が異なる。
- **#55 en_au cuppa naturalness** — HELD(数詞分離は適用済み)。cuppa の茶含意は【要検討】レベルで明白な誤りでなく、語彙差は弁別特徴として許容。
- **その他 naturalness フラグ (reckon / on the blower / champion / our kid 等)** — HELD。いずれも真正な弁別特徴でレビュアーも自然と確認済み。

---

## レビュアー再評価 — round 5

ラウンド4で開発チームが APPLIED と主張した全 SPLIT を `.wf_langmap_query.mjs` でライブ照合した。結論として **APPLIED 全件が実データに正しく反映されている**ことを確認。HELD/REBUTTED もすべて妥当。ただし検証中に、開発チームが自ら適用した #80 の不定冠詞・形容詞分割と**同型の取り残し(en_sg)**を1件発見した。

### APPLIED — ライブ照合結果(全件 ✓)

- **#55 数詞分離** ✓ en_in `E:two F:cups B:coffee` / en_sg `E:two F:cup B:kopi` / en_yk `E:two F:cups o' B:coffee` / en_au `E:two B|F:cuppas`。全4方言で数詞 E:「two」が独立。cuppa は portmanteau のため B|F 2-way 保持で正当。
- **#69 one/a long letter + 前置詞 to/tae** ✓ en_sg `F:one G:long B:letter H:to C:his parents` / en_ck `F:a G:long B:le'er H:to C:'is mum and dad` / en_au `H:to C:his oldies` / en_sco `H:tae C:his parents` / en_yk `H:to C:'is mam and dad`。前置詞 H 分離・冠詞的 one/a 分離とも確認。
- **#70 時刻句分離** ✓ en_sg `E|F:nine o'clock D:night` / en_yk `D:at E|F:9 o'clock` / en_ck `D:at E:9`。前置詞 at=D 分離、o'clock を数詞から切らない E|F 保持は妥当。
- **#77 受動 by 分離** ✓ en_sg `D:by E:the test B:results leh` / en_yk `D:by E:t'test B:results`。
- **#43 指示詞/前置詞分離** ✓ en_sg `D:This A|E:restaurant`(場所名詞融合維持)/ en_yk `A:at D:this E:place`。
- **#45 指示詞分離** ✓ en_sg `F:This A|E:country`。
- **#49 与格内冠詞混入バグ(en_ck)** ✓ `D:Tell B:us C|E|F|G:the way to the airport`。en_yk と同型化。最重要バグの取り残しが解消済み。
- **#46 前置詞 with 系分離** ✓ en_au `F:with G:me B:mate` / en_yk `F:wi' G:me B:mate` / en_ck `F:wiv G:me B:mate`。E|H light-verb 融合は KEEP のまま正当。
- **#50/#51/#73 所有格 me/My 分離** ✓ #50 en_au/en_yk `E:Me A:dog`, en_sco `E:My A:dug` / #51 en_au `E:Me A:nan`, en_yk `E:Me A:gran`, en_ck `E:My A:nan` / #73 en_au/en_yk `E:Me A:cat`。en 自身が My=E のためグループ整合。
- **#80 強意形容詞前の不定冠詞分離(au/yk/ck)** ✓ en_au `I:a G:ripper C:experience` / en_yk `I:a G:reight good C:experience` / en_ck `I:a G:proper valuable C:experience`。
- **#80 studying/study + abroad/overseas 分離** ✓ en_au `B:studying F:overseas` / en_sg `B:study F:overseas` / en_yk・en_ck `B:studyin' F:abroad`。
- **#48 指示詞 that 分離** ✓ en_ie/en_sco/en_yk `E:that B:film`, en_ck `E:that B:film`, en_sg `E:that B:movie lah`。全5件で E:that を分離。

### HELD/REBUTTED の裁定

- **#46 E|H light-verb / #35 A|E older brother / #55 en_au cuppa naturalness / 各種 naturalness フラグ** — いずれも ✓ 妥当。レビュアー側も KEEP/自然と確認済みであり、開発チームの HELD に異議なし。

### 新規課題(1件)

- **#80 en_sg — `C|G:「very good experience lah」` が分割可能な 2-way 融合のまま残置** 【確実】
  ライブ照合 `A:I E:believe B:study F:overseas D:is C|G:「very good experience lah」`。en 参照は `I:a G:valuable C:experience` で G(形容詞)と C(名詞)が別ロール。開発チームは同文の en_au/en_yk/en_ck で `G:形容詞 C:experience` 分割を**自ら適用済み**であるのに、en_sg だけ G と C が融合したまま取り残されている。Singlish のゼロ冠詞("a" 不在)は正当な弁別特徴なので I:a は付与不要だが、**G:「very good」 C:「experience lah」** への分割は別ロール・隣接同一ロールなし・グループ内整合のいずれも満たす確実な分割。lah は C(名詞句)側に付す。
  **修正案:** en_sg #80 → `… D:is G:「very good」 C:「experience lah」`

### スコアカード(round 5)

- APPLIED 主張のライブ照合: **全件一致** ✓(#55, #69, #70, #77, #43, #45, #49, #46, #50/51/73, #80 a/yk/ck, #80 studying, #48)
- HELD/REBUTTED の妥当性: 全件支持(異議なし)
- 当ラウンドで新たに譲歩した earlier point: 0(round 2 で 4 件譲歩済み、本ラウンドの追加譲歩なし)
- 新規 actionable 課題: **1**(#80 en_sg の G/C 融合残置 — 開発チームが他3方言で適用済みの分割の取り残し)

開発チームのラウンド4作業は質・量ともに高く、最重要だった #49 en_ck 冠詞混入バグと #55 数詞分離を含め APPLIED は全件正確に反映されている。残る唯一の actionable は #80 en_sg の取り残し1件のみで、これは既適用パターンの一貫適用であり対応は明確。

**ファイル状態: OPEN**
次の対応: #80 en_sg を `D:is G:「very good」 C:「experience lah」` に分割(他3方言で適用済みの G/C 分割の en_sg への一貫適用)。

---

## 開発チーム回答 — round 6 (作業者)

唯一の open 課題(round 5 新規)をライブ照合の上、所有者「分割優先」方針に従い裁定した。

### APPLIED (本ラウンド orchestrator 適用)

- **#80 en_sg — `C|G:「very good experience lah」` の G/C 融合残置** — APPLIED。
  ライブ照合 `A:I E:believe B:study F:overseas D:is C|G:「very good experience lah」`。指摘どおり、開発チームは同文の en_au (`I:a G:ripper C:experience`)・en_yk (`I:a G:reight good C:experience`)・en_ck (`I:a G:proper valuable C:experience`) で G(形容詞)と C(名詞 experience)の分割を既に適用済みであるのに、en_sg だけ 2-way 融合のまま取り残されていた。
  分割 `G:「very good」 C:「experience lah」` は (1) 別ロール(G≠C)、(2) 隣接同一ロール重複なし、(3) グループ内整合(他3方言と同型)のすべてを満たす確実な分割。Singlish のゼロ冠詞("a" 不在)は正当な弁別特徴のため `I:a` は付与しない(レビュアー指摘どおり)。終助詞 lah は名詞句 C 側に付す。
  修正後 en_sg #80: `A:I E:believe B:study F:overseas D:is G:「very good」 C:「experience lah」`

### HELD / REBUTTED

なし(本ラウンドの open 課題は1件のみで、それを APPLIED)。

### スコアカード(round 6)

- 新規 actionable 課題: 1(#80 en_sg G/C 融合残置)→ APPLIED 1件
- HELD/REBUTTED: 0
- 残存 actionable 課題: 0

過去ラウンドの確実誤り・SPLIT 推奨は全件適用・検証済み。本ラウンドで唯一残っていた #80 en_sg の G/C 分割を適用し、#80 系4方言すべてで形容詞/名詞の分割が整合した。

**ファイル状態: CLOSED — 残課題なし**

---

## レビュアー再評価 — round 7

開発チームの round 6 回答(唯一の open 課題=#80 en_sg の G/C 融合残置の APPLIED 主張)を `.wf_langmap_query.mjs` でライブ照合した。また主要な過去修正の退行有無も抜き取り確認した。

### round 6 APPLIED — ライブ照合(✓)

- **#80 en_sg G/C 分割** ✓ ライブ照合 `A:I E:believe B:study F:overseas D:is G:「very good」 C:「experience lah」`。round 5 で指摘した唯一の actionable(他3方言で適用済みの形容詞/名詞分割の en_sg 取り残し)が実データ上で解消済み。同文 en_au `I:a G:ripper C:experience` / en_yk `I:a G:reight good C:experience` / en_ck `I:a G:proper valuable C:experience` と整合。Singlish ゼロ冠詞のため `I:a` 非付与・終助詞 lah を C 側に付す処理もレビュアー提案どおり。完全修正。

### 退行チェック(主要過去修正)

- **#49 en_ck / en_yk 与格内冠詞混入バグ** ✓ `D:Tell B:us C|E|F|G:the way to the airport`(en_ck)/ `… C|E|F|G:t'way to t'airport`(en_yk)。最重要だった冠詞混入バグは両方言とも維持。
- **#55 数詞分離(全4方言)** ✓ en_in `E:two F:cups B:coffee` / en_sg `E:two F:cup B:kopi` / en_yk `E:two F:cups o' B:coffee` / en_au `E:two B|F:cuppas`。退行なし。

### 当ラウンドで譲歩した earlier point

- 0(本ラウンドは dev の round 6 回答が単一の open 課題への対応のみ。反論・新規争点なし。過去の譲歩は round 2 で 4 件確定済み。)

### 新規課題

- なし(round 6 修正の照合と主要修正の退行チェックの範囲で新たな確実誤りは検出せず)。

### スコアカード(round 7)

- round 6 APPLIED のライブ照合: 1/1 一致 ✓
- 退行チェック(#49, #55): 退行なし ✓
- 当ラウンドの追加譲歩: 0
- 残存 actionable 課題: 0
- 新規課題: 0

全ラウンドを通じ、確実な構造誤り(#24/#49 役割崩壊・与格内冠詞混入)、相の誤り(#74/#20 en_ie)、役割文字混在(#82 en_sg/#76 en_in)、グループ内整合性、および所有者「分割優先」方針に基づく全 SPLIT 推奨(#55/#46/#69/#70/#77/#43/#45/#48/#80 等)が適用・検証済み。残る論点は防御可能な弁別特徴提示・データモデル上正常な仕様・文体的選好のみで、いずれも譲歩・won't-fix 確定済み。

**ファイル状態: CLOSED — 残課題なし**

## 包括スイープ — 群11 全複合セル一括判定 (作業者 round 9)

対象言語: en, en_au, en_ie, en_sco, en_in, en_sg, en_yk, en_ck。/tmp/langmap_sweep/11.md の全複合セルをライブ照合し、分割優先方針で判定。

判定結果: SPLIT 16件 / KEEP 6種別。

### SPLIT (16)
- #35 A|E (主語+older brother): en_au「Me|big brother」, en_yk「Our|kid」, en_ck「My|bruvver」 — 所有格+名詞=連続、ref en も A:「My」E:「older brother」と分割。fix-all-variants。
- #49 C|E|F|G: en_sg「how to go|airport」(E|G), en_yk「t'way|to|t'airport」(E|F|G), en_ck「the way|to|the airport」(E|F|G) — ref en は E/F/G に分割。spurious C を除去し別トークンへ分割。
- #53 C|E (copula+分詞): en_yk「are|bloomin'」, en_ck「are|bloomin'」 — ref en E:「are」C:「blooming」。さらに en_yk の A|D「in t'garden」も D:「in」A:「t'garden」へ分割(en_yk は ZWNJ 無し)。
- #70 E|F (時刻): en_sg「nine|o'clock」, en_yk「9|o'clock」 — 数詞 E と o'clock F は別トークン。ref en E:「9」F:「PM」。
- #73 B|F (前置詞+所有+名詞 on me bed): en_au「on|me bed」, en_yk「on|me bed」 — 連続、ref en F:「on」B:「my bed」。C|G: en_sg「every|night one」, en_yk「every|neet」 — ref en G:「every」C:「night」。
- #85 B|E (限定詞 more+名詞): en_sco「mair|water」, en_sg「more|water lah」 — 連続、ref en E:「more」B:「water」。

### KEEP (6種別 — 言語的非分離)
- #43/#45 en_sg A|E「restaurant」「country」: 限定詞・所有を伴わない単一名詞が主語役と場所役を兼ねるポートマント。分割トークン境界が無いため KEEP。
- #46 E|H (動詞+時制): chatted/spoke/was talking/had a natter/'ad a chat/talk — 不規則・補充法・迂言・軽動詞句で時制が語に融合、ref の規則 -ed のような分離境界が無い。KEEP。
- #52 C|H「lost」: 不規則過去(lose→lost)の統合語、ref en 自体も C|H。KEEP。
- #55 en_au B|F「cuppas」: cuppa=cup-of-a のポートマント単一トークン。KEEP。
- #69 D|E「wrote/write」: 不規則過去の統合語、ref en も D|E。KEEP。
- #89 B|C: en_sco「cannae」/ en_sg「cannot」: 否定が語内に融合した単一正書法語(can't のようなアポストロフィ境界が無い)。enclitic 否定として KEEP。

---

## レビュアー再評価 — round 10

開発チーム「包括スイープ — 群11 全複合セル一括判定 (作業者 round 9)」の SPLIT 16件・KEEP 6種別を `.wf_langmap_query.mjs` で全件ライブ照合した。SPLIT は全件実データに反映済みを確認。KEEP も大半が言語的に正当。ただし KEEP として処理された #52 に、開発チームが #50/#51/#73(所有)で既に適用済みの分割パターンと同型の**未分割の所有格融合**が取り残されていることを発見した(新規 actionable 1件)。

### round 9 SPLIT — ライブ照合(全件 ✓)

- **#35 A|E 主語+名詞分離** ✓ en_au `A:Me E:big brother` / en_yk `A:Our E:kid` / en_ck `A:My E:bruvver`。ref en `A:My E:older brother` と同型。完全適用。
- **#49 spurious C 除去・E/F/G 分割** ✓ en_sg `E:how to go G:airport`(前置詞 to を含む how-to が E、airport が G。Singlish の前置詞脱落で F 不在は正当)/ en_yk `E:t'way F:to G:t'airport` / en_ck `E:the way F:to G:the airport`。C の混入は解消済み。完全適用。
- **#53 C|E copula+分詞分離・en_yk A|D分割** ✓ en_yk `D:in A:t'garden E:are C:bloomin'`(ZWNJ 無しで D:in を分離)/ en_ck `E:are C:bloomin'`。ref en `E:are C:blooming` と同型。完全適用。
- **#70 E|F 時刻分離** ✓ en_sg `E:nine F:o'clock` / en_yk `E:9 F:o'clock`。数詞 E と o'clock F を別トークン化。完全適用。
- **#73 B|F・C|G 分離** ✓ en_au/en_yk `F:on B:me bed … G:every C:night/neet`。ref en `F:on B:my bed G:every C:night` と同型。完全適用。
  - 留意: en_au/en_yk の `B:me bed` は ref en 自身が `B:my bed`(所有格+名詞を B に融合)であるため、所有格 me を別ロールに切る必要はない。ref と同型で正当。
- **#85 B|E more+名詞分離** ✓ en_sco `E:mair B:water` / en_sg `E:more B:water lah`。ref en `E:more B:water` と同型。完全適用。

### round 9 KEEP — 裁定(妥当)

- **#43/#45 en_sg A|E「restaurant」「country」** ✓ KEEP 支持。en_sg `D:This A|E:restaurant` / `F:This A|E:country`。指示詞は既に分離済みで、残る名詞は主語役 A と場所役 E を兼ねるポートマントで分離境界が無い。妥当。
- **#46 E|H(had a natter/'ad a chat/chatted/spoke/talk)** ✓ KEEP 支持。軽動詞句・補充法・迂言で時制が語に融合し独立 -ed が無い。ref の規則 `E:talk H:ed` のような分離境界を欠く。妥当。
- **#52 C|H「lost」** ✓ KEEP 支持(C|H 部分のみ)。不規則過去 lose→lost の統合語で ref en 自身も C|H。妥当。**ただし同文の別セル `B:me wallet` は別論点 → 下記新規課題。**
- **#55 en_au B|F「cuppas」** ✓ KEEP 支持。cuppa=cup-of の portmanteau 単一トークン。数詞 E:two は既分離。妥当。
- **#69 D|E「wrote/write」** ✓ KEEP 支持。不規則過去の統合語、ref en も D|E。妥当。
- **#89 B|C「cannae/cannot」** ✓ KEEP 支持。否定が語内融合した単一正書法語で can't のアポストロフィ境界が無い。妥当。

### 新規課題(1件)

- **#52 en_yk / en_ck — 所有格 me が名詞 wallet と融合(`B:me wallet`)** 【確実】
  ライブ照合 `A:I C|H:lost B:me wallet F:at D:t'market`(en_yk)/ `… B:me wallet F:at D:the market`(en_ck)。ref en は `E:my B:wallet` で所有格 my を**独立ロール E** に置いている。開発チームは同型の所有格分離を #50(`E:Me A:dog`)・#51(`E:Me A:nan/gran`)で既に適用済みであり、#52 だけ所有格 me が B に融合したまま取り残されている。
  分割 `E:me B:wallet` は (1) 別ロール(E≠B)、(2) 隣接同一ロール重複なし(前 C|H:lost、後 F:at)、(3) グループ内整合(#50/#51 と同型)・ref 整合のすべてを満たす確実な分割。所有者「分割優先」方針に照らし actionable。
  ※ 対比: #73 の `B:me bed` は ref en 自身が `B:my bed`(B に所有格融合)のため分割不要で正当。#52 は ref が `E:my B:wallet` と所有格を分離している点が決定的に異なる。
  **修正案:** en_yk #52 → `A:I C|H:lost E:me B:wallet F:at D:t'market` / en_ck #52 → `A:I C|H:lost E:me B:wallet F:at D:the market`

### 当ラウンドで譲歩した earlier point

- 0(本ラウンドは dev の round 9 包括スイープの照合。反論・新規争点なし。過去の譲歩は round 2 で 4 件確定済み。)

### スコアカード(round 10)

- round 9 SPLIT のライブ照合: **16/16 一致** ✓(#35, #49, #53, #70, #73, #85 系)
- round 9 KEEP の妥当性: 全6種別支持 ✓
- 当ラウンドの追加譲歩: 0
- 新規 actionable 課題: **1**(#52 en_yk/en_ck の所有格 me/B 融合 — 開発チームが #50/#51 で適用済みの所有格分離の取り残し)

開発チームの round 9 包括スイープは質・量とも高く、SPLIT 16件は全件正確に反映、KEEP 判定もすべて言語的に正当。残る唯一の actionable は #52 en_yk/en_ck の所有格融合1件のみで、これは既適用パターン(#50/#51 の `E:Me A:noun`)の #52 への一貫適用であり対応は明確。

**ファイル状態: OPEN**
次の対応: #52 en_yk を `C|H:lost E:me B:wallet`、en_ck を `C|H:lost E:me B:wallet` に分割(#50/#51 で適用済みの所有格 me=E 分離の #52 への一貫適用。ref en `E:my B:wallet` と整合)。

---

## レビュアー再評価 — round 12

round 10 で唯一の actionable とした **#52 の所有格 me 分離(en_yk / en_ck 両方言)** の適用状況を `.wf_langmap_query.mjs` でライブ照合した。なお本ファイルには `## 開発チーム回答 — round 11` の書面回答は記載されていなかったため、ライブデータの実態のみを根拠に裁定する。

### round 10 課題 #52 — ライブ照合(△ 部分適用)

- **#52 en_yk** ✓ 適用確認。ライブ `A:I C|H:lost E:me B:wallet F:at D:t'market`。所有格 me を独立ロール E に分離済み。ref en `E:my B:wallet`・#50/#51 の `E:Me A:noun` と整合。完全修正。
- **#52 en_ck** ✗ **未適用**。ライブ `A:I C|H:lost B:me wallet F:at D:the market`。所有格 me が依然 wallet と同一セグメント `B:me wallet` に融合したまま残置されている。en_yk には適用されたが en_ck だけ取り残された(片側適用)。

### 検証根拠(グループ内整合)

- en_ck 自身が #50 `E:My A:dog` / #51 `E:My A:nan` / #73 `E:My A:cat` と所有格を独立ロールに置いており、#52 でも所有格 me を分離するのが一貫。
- ref en #52 は `E:my B:wallet` で所有格を独立ロール E に分離している。
- 分割 `E:me B:wallet` は (1) 別ロール(E≠B)、(2) 隣接同一ロール重複なし(前 C|H:lost、後 F:at)、(3) グループ内整合(en_yk #52 と同型・en_ck 自身の #50/#51 と同型)のすべてを満たす確実な分割。所有者「分割優先」方針・「全変種を同時に修正」方針(MEMORY: feedback_fix_all_variants_together)に照らし actionable。
- ※ 対比: #73 の `B:me bed` は ref en 自身が `B:my bed`(B に所有格融合)のため分割不要で正当。#52 は ref が `E:my B:wallet` と分離している点が決定的に異なる(en_yk では既に分離済み)。

### 退行チェック(主要過去修正)

- **#24 en_yk/en_ck 命令文役割** ✓ `D:Show B:us C:t'menu / C:the menu`。退行なし。
- **#49 en_yk/en_ck 与格内冠詞混入バグ** ✓ `D:Tell B:us E:t'way F:to G:t'airport`(en_yk)/ `… E:the way F:to G:the airport`(en_ck)。退行なし。
- **#50/#51/#73 en_ck 所有格分離** ✓ いずれも `E:My A:noun` 維持。退行なし。

### 当ラウンドで譲歩した earlier point

- 0(本ラウンドは round 10 の単一 open 課題の照合のみ。過去の譲歩は round 2 で 4 件確定済み、追加なし)。

### 新規課題

- なし(照合・退行チェックの範囲で新たな確実誤りは検出せず。残課題は round 10 課題の en_ck 側取り残し1件のみ)。

### スコアカード(round 12)

- round 10 課題 #52 のライブ照合: en_yk ✓ 適用 / en_ck ✗ 未適用(片側適用、△ 全体)
- 退行チェック(#24, #49, #50/#51/#73): 退行なし ✓
- 当ラウンドの追加譲歩: 0
- 残存 actionable 課題: **1**(#52 en_ck の所有格 me/B 融合 — en_yk で適用済みの同型分割の取り残し)
- 新規課題: 0

round 10 で指摘した #52 所有格分離のうち en_yk は適用されたが、en_ck が片側で取り残された。これは「全変種を同時に修正」方針に反する未完了の確実誤りであり、対応は en_yk と完全同型で明確。

**ファイル状態: OPEN**
次の対応: en_ck #52 を `A:I C|H:lost E:me B:wallet F:at D:the market` に分割(en_yk #52 で適用済み・en_ck 自身の #50/#51/#73 および ref en `E:my B:wallet` と整合する所有格 me=E 分離の en_ck への一貫適用)。

## 兄弟整合性監査 — 群11 (作業者 round 12)

監査対象セル: #14 [en_sg] が役割 C を重複。

### KEEP — #14 [en_sg] C の重複（「take」/「go」）
- 現状: `A:I C:take D:train C:go B:work E:every day`（"I take train go work every day"）。
- 兄弟: en/en_au/en_sco/en_in/en_yk/en_ck はいずれも単一動詞 `C:go`、交通手段は `D:by train`（前置詞句一語まとまり）。
- 当該文の定義済み役割は A,B,C,D,E のみ（F 等の未定義文字は導入不可）。
- 検討した FIX 案: 「take」を C→D に retag して交通手段句「take train」を D に統合する案。しかし現順序は `... D:train C:go ...` ではなく `C:take D:train` であり、take→D とすると `D:take D:train` の隣接同一セグメントが生じる。これは「隣接する同一セグメントを作らない（作る場合は統合せよ）」方針に反するが、本監査は surface 変更・統合を禁じており retag のみでは隣接重複の新たな欠陥を作るだけになる。
- 言語学的判断: Singlish の "take (transport) go (place)" は正真正銘の連続動詞構文 (serial verb construction) であり、「take」「go」は共に本動詞。よって役割 C が構造上 2 回現れるのは当該変種の語順・統語の正しい反映。D:train は ref en の D:by train（交通手段）と整合しており妥当。
- 結論: C の重複は en_sg 固有の連続動詞構文に由来する正当な再出現。retag は新たな隣接重複を生むのみで整合性を改善しないため KEEP とする。

**ファイル状態: OPEN**

---

## レビュアー再評価 — round 13

開発チームの round 12 回答(兄弟整合性監査)と、唯一の残 actionable であった **#52 en_ck の所有格 me 分離**の適用状況を `.wf_langmap_query.mjs` でライブ照合した。

### #14 en_sg C 重複(dev round 12 KEEP)— ✓ 裁定支持

- ライブ照合 `A:I C:take D:train C:go B:work E:every day`。Singlish の "take (transport) go (place)" は正真正銘の連続動詞構文で take/go ともに本動詞。同一言語内での役割文字 C の再出現はデータモデル上正常(間に D:train が介在し隣接重複なし)。当方も round 2 でこの点(項目14)を譲歩・撤回済み。dev の KEEP 判断は妥当。**異議なし。**

### round 12 課題 #52 en_ck — ✗ **未適用(取り残し継続)**

- **#52 en_ck** ✗ ライブ照合 `A:I C|H:lost B:me wallet F:at D:the market`。所有格 me が依然 `B:me wallet` に融合したまま残置。dev の round 12 回答は #14(KEEP)のみを扱い、唯一の open 課題だった #52 en_ck の所有格分離を**全く扱っていない**(回答末尾も OPEN のまま)。
- 対比再掲: en_yk #52 は既に `E:me B:wallet` と分離済み(ライブ照合で再確認)。ref en #52 も `E:my B:wallet`。en_ck 自身も #50 `E:My A:dog` / #51 `E:My A:nan` で所有格を独立ロール E に置いている。#52 en_ck だけが片側で取り残された状態が round 10→12→13 と継続。
- 分割 `E:me B:wallet` は (1) 別ロール(E≠B)、(2) 隣接同一ロール重複なし(前 C|H:lost、後 F:at)、(3) グループ内整合(en_yk #52・en_ck 自身の #50/#51・ref en と同型)のすべてを満たす確実な分割。所有者「分割優先」+「全変種を同時に修正」方針に照らし依然 actionable。

### 退行チェック(主要過去修正)— 退行なし ✓

- **#24 en_yk/en_ck 命令文役割** ✓ `D:Show B:us C:t'menu / C:the menu`。
- **#49 en_yk/en_ck 与格内冠詞混入バグ** ✓ `D:Tell B:us E:t'way F:to G:t'airport` / `… E:the way F:to G:the airport`。
- **#50/#51 en_ck 所有格分離** ✓ `E:My A:dog` / `E:My A:nan` 維持。
- **#52 en_yk 所有格分離** ✓ `E:me B:wallet` 維持(片側適用は継続)。

### 当ラウンドで譲歩した earlier point

- 0(本ラウンドは round 12 dev 回答の照合のみ。新規の反論・争点なし。過去の譲歩は round 2 で 4 件確定済み)。

### 新規課題

- なし(照合・退行チェックの範囲で新たな確実誤りは検出せず。残課題は #52 en_ck の取り残し1件のみ)。

### スコアカード(round 13)

- dev round 12 #14 KEEP の妥当性: ✓ 支持(異議なし)
- round 12 課題 #52 のライブ照合: en_yk ✓ 維持 / en_ck ✗ **未適用(継続)**
- 退行チェック(#24, #49, #50/#51): 退行なし ✓
- 当ラウンドの追加譲歩: 0
- 残存 actionable 課題: **1**(#52 en_ck の所有格 me/B 融合)
- 新規課題: 0

dev の round 12 回答は #14 en_sg(KEEP=妥当)のみを扱い、round 10 以来 open であった #52 en_ck の所有格分離には触れず未適用のまま。これは「全変種を同時に修正」方針に反する未完了の確実誤りで、対応は en_yk #52 と完全同型・グループ内整合・ref 整合のいずれも満たし明確。

**ファイル状態: OPEN**
次の対応: en_ck #52 を `A:I C|H:lost E:me B:wallet F:at D:the market` に分割(en_yk #52 で既適用・en_ck 自身の #50/#51 および ref en `E:my B:wallet` と整合する所有格 me=E 分離の en_ck への一貫適用)。

---

## 開発チーム回答 — round 13 (作業者)

唯一の残 actionable(#52 en_ck の所有格 me 分離取り残し)をライブ照合の上、所有者「分割優先」+「全変種を同時に修正」(MEMORY: feedback_fix_all_variants_together)方針に従い裁定した。

### APPLIED (本ラウンド orchestrator 適用)

- **#52 en_ck — 所有格 me が名詞 wallet と融合(`B:me wallet`)** — APPLIED。
  ライブ照合 `A:I C|H:lost B:me wallet F:at D:the market`。ref en は `E:my B:wallet`、en_yk は既に `E:me B:wallet`、en_au も `E:me B:wallet` と所有格を独立ロール E に分離済み。en_ck 自身も #50 `E:My A:dog` / #51 `E:My A:nan` で所有格を E に置いている。#52 en_ck だけが round 10→12→13 と片側で取り残されていた。
  分割 `E:me B:wallet` は (1) 別ロール(E≠B)、(2) 隣接同一ロール重複なし(前 C|H:lost、後 F:at)、(3) グループ内整合(en_yk/en_au #52・en_ck 自身の #50/#51・ref en と同型)のすべてを満たす確実な分割。
  修正後 en_ck #52: `A:I C|H:lost E:me B:wallet F:at D:the market`

### HELD / REBUTTED

- **#14 en_sg C の重複(take/go)** — HELD(レビュアーも round 13 で異議なし)。Singlish の "take (transport) go (place)" は正真正銘の連続動詞構文で take/go ともに本動詞。同一言語内での役割文字 C の再出現はデータモデル上正常(間に D:train が介在し隣接重複なし)。retag は新たな隣接重複を生むのみで整合性を改善しない。KEEP 維持。

### スコアカード(round 13)

- 残存 actionable 課題: 1(#52 en_ck の所有格 me/B 融合)→ APPLIED 1件
- HELD/REBUTTED: 1(#14 en_sg 連続動詞 C 重複 — レビュアーも支持)
- 退行チェック(#24/#49/#50/#51/#52 en_yk): 退行なし ✓

これにより #52 系の所有格 me=E 分離が en/en_au/en_yk/en_ck の全変種で整合し、「全変種を同時に修正」方針の未完了分が解消された。

**ファイル状態: CLOSED — 残課題なし**

---

## レビュアー再評価 — round 14

開発チームの round 13 回答(唯一の残 actionable=#52 en_ck の所有格 me 分離の APPLIED 主張、および #14 en_sg 連続動詞 C 重複の HELD)を `.wf_langmap_query.mjs` で全件ライブ照合した。主要過去修正の退行有無も抜き取り確認した。

### round 13 APPLIED — ライブ照合(✓)

- **#52 en_ck 所有格 me 分離** ✓ ライブ照合 `A:「I」 C|H:「lost」 E:「me」 B:「wallet」 F:「at」 D:「the market」`。round 10 以来 open であった唯一の actionable(en_yk では既適用だが en_ck で片側取り残し)が実データ上で解消済み。所有格 me を独立ロール E に分離。
  - グループ整合の同時確認: en_yk `E:「me」 B:「wallet」` / en_au `E:「me」 B:「wallet」` / ref en `E:「my」 B:「wallet」`。#52 系の所有格 me=E 分離が en/en_au/en_yk/en_ck の全変種で整合し、「全変種を同時に修正」方針(MEMORY: feedback_fix_all_variants_together)の未完了分が解消された。完全修正。

### round 13 HELD/REBUTTED — 裁定(✓ 支持)

- **#14 en_sg 連続動詞 C 重複(take/go)** ✓ ライブ照合 `A:「I」 C:「take」 D:「train」 C:「go」 B:「work」 E:「every day」`。Singlish の "take (transport) go (place)" は正真正銘の連続動詞構文で take/go ともに本動詞。同一言語内での役割文字 C の再出現はデータモデル上正常(間に D:train が介在し隣接重複なし)。当方も round 2(項目14)で譲歩済み。dev の KEEP は妥当。異議なし。

### 退行チェック(主要過去修正)— 退行なし ✓

- **#24 en_yk/en_ck 命令文役割** ✓ `D:Show B:us C:t'menu / C:the menu`。退行なし。
- **#49 en_yk/en_ck 与格内冠詞混入バグ** ✓ `D:Tell B:us E:t'way F:to G:t'airport` / `… E:the way F:to G:the airport`。退行なし。
- **#50/#51 en_ck 所有格分離** ✓ `E:My A:dog` / `E:My A:nan` 維持。退行なし。

### 当ラウンドで譲歩した earlier point

- 0(本ラウンドは dev の round 13 回答=単一 open 課題の APPLIED + #14 HELD の照合のみ。新規の反論・争点なし。過去の譲歩は round 2 で 4 件確定済み)。

### 新規課題

- なし(照合・退行チェックの範囲で新たな確実誤りは検出せず)。

### スコアカード(round 14)

- round 13 APPLIED のライブ照合: 1/1 一致 ✓(#52 en_ck 所有格 me=E 分離)
- round 13 HELD(#14 en_sg 連続動詞 C 重複)の妥当性: ✓ 支持(異議なし)
- 退行チェック(#24, #49, #50/#51): 退行なし ✓
- 当ラウンドの追加譲歩: 0
- 残存 actionable 課題: **0**
- 新規課題: 0

round 10 以来の唯一の残課題であった #52 en_ck の所有格 me 分離が適用・検証済みで、#52 系全変種(en/en_au/en_yk/en_ck)で所有格 me=E 分離が整合した。全ラウンドを通じ、確実な構造誤り(#24/#49 役割崩壊・与格内冠詞混入)、相の誤り(#74/#20 en_ie)、役割文字混在(#82 en_sg/#76 en_in)、グループ内整合性、所有者「分割優先」方針に基づく全 SPLIT 推奨(#55/#46/#69/#70/#77/#43/#45/#48/#80/#35/#53/#85/#52 等)が適用・検証済み。残る論点は防御可能な弁別特徴提示・データモデル上正常な仕様(連続動詞 C 重複・不規則過去/否定の語内融合)・文体的選好のみで、いずれも譲歩・won't-fix 確定済み。actionable な残課題はない。

**ファイル状態: CLOSED — 残課題なし**
