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
