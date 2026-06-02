# LangMap データレビュー #29 — African — Niger-Congo, Nilotic & Cushitic

## レビュアー自己紹介 (ペルソナ)

私は **Dr. Aisha N. Okeke-Wambui**（ハンドル: `@bantuparser`）、ナイロビ大学言語学科およびSOAS(ロンドン大学東洋アフリカ研究学院)で訓練を受けたバントゥ・ナイル・クシ諸語の比較統語論研究者です。専門は名詞クラス一致と動詞形態論で、博士論文はスワヒリ語・キニャルワンダ語・ズールー語の応用態(applicative)と場所格(locative)体系の対照でした。日常的に依拠している資料は、スワヒリ語については *TUKI Kamusi ya Kiswahili Sanifu* と Ashton *Swahili Grammar*、ズールー語・コサ語については Doke *Textbook of Zulu Grammar* と Oxford Bilingual Zulu Dictionary、ショナ語は Dale の辞書、ヨルバ語は Awoyale のコーパスと Bamgbose の文法、イボ語は Emenanjo *Grammar of Contemporary Igbo*、ハウサ語は Newman *The Hausa Language*、ソマリ語は Saeed *Somali Reference Grammar*、オロモ語は Owens の文法、ウォロフ語は Diouf の辞書です。最も権威をもって判断できるのは **sw, zu, xh, sn, ny, rw**(東・南部バントゥ)と **ig, yo, ha** で、so/om(クシ系)と wo(大西洋系)も高い精度で査読できます。

## 検証範囲

全100文(#1〜#100)について、本グループ13言語(sw, yo, ig, ha, zu, xh, sn, ny, rw, ln, wo, so, om)すべてのセルを精査しました。特に語彙選択(借用語 vs 固有語)、名詞クラス一致、場所格・与格の形態、動詞活用、役割letterの順序整合に注目しました。指摘の主要セルは `.wf_langmap_query.mjs` でライブデータと突き合わせて確認済みです。全体としてこのグループのデータは概ね良好で、バントゥ語の応用態・場所格の処理や SVO 語順は正確に捉えられています。以下は明確に防御可能な誤りに絞った指摘です。

## 指摘事項 (Issues found)

### 1. #1 om(Oromo) — 役割letter G/I のセル内容が入れ替わり・混入 【確実】
- **Current:** A:「An」 D:「uffata」 G:「mana argee」 I:「suuqii」 J:「hotel」 K:「fuuldura」 C:「ofkoluuf ilaaluu」 B:「barbaada」
- **Problem:** G(saw=「見た」)のセルに「mana argee」とあるが、「mana」は「家/建物」の意で本来は I(shop=「店」)側に属する語。逆に J(across from)に「hotel」、K(the hotel)に「fuuldura(=正面/向かい、本来J)」が入っており、I/J/K と動詞 argee の語が玉突き状にずれて混入している。「suuqii(店)」が I にあるのは正しいが、その結果「mana」が宙に浮く。
- **Proposed fix:** A:「An」 D:「uffata」 K:「hoteela」 J:「fuuldura」 I:「suuqii keessatti」 G:「argee」 C:「ofkoluuf ilaaluu」 B:「barbaada」(語順はOroのSOVに合わせ K-J-I-G-C-B)。

### 2. #5 ln(Lingala) — 役割letter D の重複(隣接でない分割) 【蓋然】
- **Current:** B:「Kafe」 A:「oyo」 D:「ezali」 C:「mpenza」 D:「elengi」
- **Problem:** D が「ezali」(コピュラ=be)と「elengi」(delicious=形容詞)の二箇所に分かれ、間に C「mpenza(very)」が挟まる。enの基準でも D は is と delicious の二役だが、リンガラの自然な語順は **Kafe oyo ezali elengi mpenza**(very は文末)。現状は C と D 後半が逆順で、口語として不自然。
- **Proposed fix:** B:「Kafe」 A:「oyo」 D:「ezali」 D:「elengi」 C:「mpenza」。

### 3. #29 ny(Chewa) — D「mu galimoto ya pamzere」が「電車」ではなく語義過剰 【要検討】
- **Current:** B:「ambirela yanga」 D:「mu galimoto ya pamzere」
- **Problem:** 「galimoto ya pamzere(線路上の自動車)」は#14・#29で「列車」の説明的造語として使われているが、チェワ語の現代標準語では列車は **sitima** が定着している。説明句は冗長で、母語話者は「mu sitima」と言う。少なくとも#14とも不統一の余地。
- **Proposed fix:** D:「mu sitima」(#14 も同様に「pa sitima」へ統一を推奨)。

### 4. #66 wo(Wolof) — C「noppi na」が誤訳、B にフランス語残存 【確実】
- **Current:** A:「Tund bi」 C:「noppi na」 B:「ak neige」
- **Problem:** 「noppi」はウォロフ語で「黙る/静かになる」の意で、「覆われている(is covered)」ではない。意味が完全に取り違えられている。また B「neige」は無加工のフランス語で、他言語が雪の固有・借用語(snow/baraf/chando 等)を当てているのと不統一。
- **Proposed fix:** A:「Tund bi」 C:「dafa muuru」 B:「ci neige bi」(または B を借用語 neige を残すにせよ前置詞は ci が自然)。muur=「覆う」。

### 5. #71 om(Oromo) — B「sagalee koo」が「発音」ではなく「私の声」 【蓋然】
- **Current:** B:「sagalee koo」 C:「fooyyessuu」
- **Problem:** 「sagalee」は「声/音」。「発音(pronunciation)」はオロモ語で **akkaataa jechaa**(語の言い方)や **dubbii/sagalee dubbii** が適切で、単独の「sagalee koo」は「私の声を改善したい」と読め、原文「発音を上達させたい」とずれる。
- **Proposed fix:** B:「akkaataa jechoota koo」または B:「sagalee jechoota koo」。

### 6. #81 zu(Zulu) — 「頭が痛い」の構文と役割letter付与が不整合 【蓋然】
- **Current:** A:「Ngino」 E:「buhlungu」 B:「bekhanda」 C:「namuhla」
- **Problem:** ズールー語で「頭が痛い」は **Nginekhanda elibuhlungu**(私は痛い頭を持つ)または **Ikhanda liyangiqaqamba** が自然。現状「Ngino + buhlungu + bekhanda」は「私は…の痛みを持つ」を語順を割って並べた人工的な分割で、E(a headache)と B(頭)の対応が逆(buhlungu=痛い、khanda=頭)。母語話者には不自然。
- **Proposed fix:** A:「Ngino」 B:「khanda」 E:「elibuhlungu」 C:「namuhla」(=Nginekhanda elibuhlungu namhlanje)。

### 7. #92 yo(Yoruba) — B「ààmàlà」は餃子(dumpling)ではない 【確実】
- **Current:** A:「A」 B:「máa ń jẹ ààmàlà」 D:「ní àkókò ọdún tuntun Ṣáínà」
- **Problem:** 「àmàlà」はヤムイモ粉で作るヨルバの主食で、餃子(dumpling/餃子)とは全く別物。文化的固有食を当ててしまっており、原文の「餃子」とずれる。他言語は dumpling/gyoza/sambuso 等の借用や近似語を使用。
- **Proposed fix:** B:「máa ń jẹ ìṣù dáńpù」など説明句、または借用 B:「máa ń jẹ gyoza/dumpling」。少なくとも àmàlà は不可。

### 8. #96 wo(Wolof) — E/F が「次の交差点」と無関係な語 【確実】
- **Current:** A:「Bu la neexee」 B:「wëcc ci ndijoor」 C:「ci」 E:「ci kanam」 F:「xarnu」
- **Problem:** F「xarnu」はウォロフ語で「世紀(century)」の意で、「交差点(intersection)」ではない。E「ci kanam(前で)」も「次の(next)」を表しておらず、原文 #96「次の交差点で右に曲がって」に対し E(next)+F(intersection)が両方とも誤り。
- **Proposed fix:** E:「bu ci topp」 F:「croisement bi」(交差点は借用 croisement / kruazaman が一般的)。「右に曲がる」B も ndijoor より **ndeyjoor / ndeyjóor**(右)が標準だが B はひとまず許容範囲。

### 9. #89 sw(Swahili) — 否定形「siwezi」の分割が形態論的に不自然 【蓋然】
- **Current:** A:「Si」 B:「wezi」 D:「kupata」 G:「nenosiri」 F:「ya Wi-Fi」
- **Problem:** スワヒリ語の否定「私はできない」は **siwezi**(si-=1sg否定, -wez-語根, -i否定接尾)で一語。「Si」「wezi」に割っているが、語根は -wez- で -i は否定接尾辞。enの A(I)+B(can)+C(n't)に厳密対応させる意図でも、現状は語根の途中で切れていない(siは主語+否定融合)。プロジェクトの膠着接尾辞分割方針なら ZWNJ で接尾辞を別segにすべきで、現状の「Si/wezi」は中途半端。
- **Proposed fix:** A|B|C:「Siwezi」(主語+否定+can を融合扱い)、続いて D:「kupata」 G:「nenosiri」 F:「ya Wi-Fi」。

### 10. #18 rw(Kinyarwanda) — D「ni nini」は「大きい」で「高価」ではない 【確実】
- **Current:** B:「Isakoshi」 A:「iyi」 D:「ni nini」 C:「cyane」
- **Problem:** 「nini」はキニャルワンダ語で「大きい(big)」。原文「このバッグは高すぎる(too expensive)」の「高価」は **ihenze / ni ihenze**(高い)が正しい。「ni nini cyane」は「とても大きい」となり意味誤り。
- **Proposed fix:** B:「Isakoshi」 A:「iyi」 D:「ni ihenze」 C:「cyane」。

### 11. #1 sw(Swahili) — E「niliyoiona」の役割letter不一致 【要検討】
- **Current:** A:「Ninataka」 C:「kujaribu」 D:「suti」 E:「niliyoiona」 H:「katika」 I:「duka」 J:「mkabala na」 K:「hoteli」
- **Problem:** 関係節「私が見た(I saw)」を E として一語に融合しているが、enでは F(I)+G(saw)の二役。他バントゥ(ny, rw, ig等)は G を別立てしている。スワヒリの関係動詞 niliyoiona は主語+時制+関係詞+目的語+語根を内包し融合は妥当だが、letterは E ではなく **F|G**(I+saw)とするのが他言語との整合上自然。
- **Proposed fix:** E を **F|G:「niliyoiona」** に変更(意味・表現は維持、letterのみ修正)。

### 12. #99 so(Somali) — D の重複混入と語彙誤り 【確実】
- **Current:** C:「Immisa」 D:「ayuu」 A:「taariikhdan」 D:「yahay」
- **Problem:** A「taariikhdan」は「この日付/この歴史」の意で、「このお土産(souvenir)」ではない(taariikh=日付・歴史)。土産は **xusuus / hadiyad / xusuus-qor**。また D が「ayuu」と「yahay」に分かれ A を挟むが、疑問詞構文として「Immisa ayuu k'an … yahay」の焦点標識 ayuu は主語が三人称男性形で、souvenir(女性名詞になりうる)との一致も要確認。最低限 A の語彙が誤り。
- **Proposed fix:** C:「Immisa」 D:「ayay」 A:「xusuustani」 D:「tahay」(または A:「hadiyaddani」)。

### 13. #90 zu(Zulu) — 役割letter D「amakhompyutha」が原文に無く語順末尾で不自然 【蓋然】
- **Current:** A:「Ufunde」 B:「ukuhlela」 C:「 ngokwakhe」 D:「 amakhompyutha」
- **Problem:** 原文#90「彼は独学でプログラミングを学んだ」に D(=コンピュータ)に当たる役割は存在しない(enは A/B/C/Dのうち D=learned)。ズールー行だけ「amakhompyutha(コンピュータ群)」が文末に付き、しかも letter D は他言語で「learned(動詞)」に当たるのに名詞が入っている。コサ行(xh)は D:「ufunde」で正しく動詞。zu は動詞 ufunde を A に融合した結果、D に余分な名詞を入れている。
- **Proposed fix:** A:「U」 D:「funde」 B:「ukuhlela amakhompyutha」 C:「ngokwakhe」、または D を削除して A|D:「Ufunde」 B:「ukuhlela」 C:「ngokwakhe」。少なくとも letter D に名詞を残すのは不可。

### 14. #92 so(Somali) — B「sambuso」は餃子ではなくサモサ 【要検討】
- **Current:** A:「Waxaan」 C:「cunnaa」 B:「sambuso」 D:「xilliga Sanadka Cusub ee Shiinaha」
- **Problem:** 「sambuso」はソマリ料理のサモサ(三角揚げ)で、中華の餃子(dumpling)とは別物。文化置換が起きている。#92他言語は dumpling/gyoza等の借用が多い。
- **Proposed fix:** B:「dumpling」または B:「baastada dumpling」など。許容するなら註記が望ましいが、原義からの乖離は大きい。

### 15. #13 ny(Chewa) / #24 群 — F「galas ya」のつづり 【要検討】
- **Current(#13 ny):** A:「Chonde」 D:「ndipatseni」 F:「galas ya」 C:「madzi」
- **Problem:** 「コップ一杯(a glass of)」のチェワ語借用は通常 **galasi**(語末母音あり)。「galas」はバントゥの開音節構造に反する切り詰めで、sn の「girazi」、zu/xh の「iglasi」と不統一。
- **Proposed fix:** F:「galasi ya」。

### 16. #99 wo(Wolof) — 末尾に余分な D「jar」が付き役割letterが非隣接重複 【蓋然】
- **Current:** C:「Ñaata」 D:「‌la」 A:「bii」 B:「souvenir」 D:「jar」
- **Problem:** ウォロフ語で「これはいくらですか」は **Ñaata la souvenir bii?**(いくら-焦点標識-土産-この)が自然。現状は D(=is/コピュラ焦点標識)が「‌la」と末尾「jar(=値する/かかる)」の二箇所に分かれ、間に A・B を挟む非隣接重複になっている。「jar」は動詞「(値段が)かかる」で、焦点構文 Ñaata la… の後にさらに付けると冗長かつ語順が崩れる。また A「bii」と B「souvenir」の語順は名詞-指示詞が標準なので **souvenir bii** が正しく、現状は A が B より前に出ている。
- **Proposed fix:** C:「Ñaata」 D:「la」 B:「souvenir」 A:「bii」(末尾の余分な D「jar」を削除し、B-A の順に)。

---

以上、計16件。クシ系(om/so)とウォロフで文化固有食・語義取り違え(#1, #71, #92, #96, #99)が目立ち、バントゥ側は概ね高品質ながら #18 rw(nini)・#90 zu の役割letter混入・#5 ln の D 重複・#99 wo の余分 D が確実〜蓋然の要修正点です。

## 開発チーム回答 — round 1 (作業者)

全件 `.wf_langmap_query.mjs` で live 値を確認の上で判断しています。

### 1. #1 om — G/I/J/K の玉突き混入 → **APPLIED (applied by orchestrator this round)**
Live: G:「mana argee」 I:「suuqii」 J:「hotel」 K:「fuuldura」。en 基準 K=hotel J=across from。`hotel` が J、`fuuldura`(=向かい, 本来J) が K に入れ替わり、`mana` が宙に浮く。Oro SOV (K-J-I-G-C-B) で再構成: K:「hoteela」 J:「fuuldura」 I:「suuqii keessatti」 G:「argee」(他セル維持)。

### 2. #5 ln — D の重複 → **HELD/REBUTTED**
Live: D:「ezali」 C:「mpenza」 D:「elengi」。これは en 基準 D:「is」 C:「very」 D:「delicious」 と**完全に同一**の D-C-D 構造を写したものです。レビュアー提案の D(ezali)-D(elengi)-C 並べ替えは**隣接同一 role-letter (D-D) を生成**し、プロジェクトの禁則(隣接同一禁止)に違反します。en 参照と一致し禁則も回避する現状が正しいため変更しません。

### 3. #29 ny — `galimoto ya pamzere` vs `sitima` → **HELD/REBUTTED**
「線路上の自動車」は列車を表す記述的造語で誤りではありません。`sitima` がより一般的という点は認めますが語彙選好に留まり(レビュアーも要検討扱い)、#14 との整合も含め造語自体は有効なため現状維持。

### 4. #66 wo — `noppi na`(黙る) → **APPLIED**
`noppi`=黙る/静かになる で「覆われている」ではない明確な誤訳。C を `dafa muuru`(覆われている) に修正。B「ak neige」はレビュアーも借用語残存を許容しており `ak`(=with) も有効なので B は現状維持。

### 5. #71 om — `sagalee koo`(私の声) → **APPLIED**
単独 `sagalee koo` は「私の声」と読め発音(pronunciation)とずれる。B を `sagalee jechoota koo`(語の言い方=発音) に修正。

### 6. #81 zu — 「頭が痛い」の構文/role 不整合 → **APPLIED**
Live A:「Ngino」 E:「buhlungu」 B:「bekhanda」。en #81 は B を持たず E:「a headache」。`Ngino`+`bekhanda` は人工的分割。自然形 *Nginekhanda elibuhlungu* に沿い A:「Ngino」 B:「khanda」 E:「elibuhlungu」 C:「namuhla」 に再構成(B=頭, E=痛い)。異なる role で隣接重複なし。

### 7. #92 yo — `ààmàlà`(ヤム粉主食) ≠ 餃子 → **APPLIED**
amala は中身のない練り主食で dumpling とは全く別カテゴリ。明確な文化置換誤り。併せて B に動詞+目的語が融合(`máa ń jẹ ààmàlà`)していたので、分割優先方針で C:「máa ń jẹ」(食べる) B:「gyoza」(目的語, ha と整合) に分離。

### 8. #96 wo — `xarnu`(世紀)/`ci kanam`(前で) → **APPLIED**
F:「xarnu」=century で intersection ではなく、E:「ci kanam」も next を表さない明確な二重誤り。E:「bu ci topp」(次の) F:「croisement bi」(交差点・借用) に修正。

### 9. #89 sw — `Si`/`wezi` の不自然な分割 → **APPLIED**
`siwezi`(si-wez-i, 否定・できない) はスワヒリ語で**一語**であり、`Si`/`wezi` の語境界は実在しない正書法違反。分割不能な単一語なので A|B|C:「Siwezi」 に統合(続く D:「kupata」 G:「nenosiri」 F:「ya Wi-Fi」)。これは「分離可能要素は分割」の例外＝真に不可分な一語のため統合が正当。

### 10. #18 rw — `ni nini`(大きい) → **APPLIED**
原文「高すぎる」の高価は `ihenze`。`nini`=big で意味誤り。D を `ni ihenze` に修正。

### 11. #1 sw — `niliyoiona` の role E → **APPLIED**
en #1 に E は存在せず(F:「I」 G:「saw」)。関係動詞 niliyoiona は主語+saw を内包するので role を E→F|G に retag(text 維持)。他バントゥとも整合。

### 12. #99 so — D 重複混入＋語彙誤り → **APPLIED**
Live A:「taariikhdan」=「この日付/歴史」で souvenir ではない明確な語彙誤り。souvenir(女性名詞) に合わせ焦点標識/コピュラも女性一致: C:「Immisa」 D:「ayay」 A:「xusuustani」 D:「tahay」。

### 13. #90 zu — role D に名詞混入＋先頭空白 → **APPLIED**
Live D:「 amakhompyutha」(原文に無い名詞＋先頭空白)。en は D=learned。xh は D:「ufunde」(動詞)。`Ufunde` を A:「U」 D:「funde」 に分割し、computers を B(目的語)に吸収: B:「ukuhlela amakhompyutha」 C:「ngokwakhe」(先頭空白も除去)。

### 14. #92 so — `sambuso`(サモサ) → **HELD (no change)**
レビュアーも要検討・註記許容としており、サモサは「具入りの揚げ生地」で dumpling の近似として #92 他言語の局所近似(ny/sn madumplings 等)と同列に許容範囲。amala(具なし主食) のような別カテゴリ誤りとは質が異なるため現状維持。

### 15. #13 ny — `galas`(切り詰め) → **APPLIED**
バントゥの開音節構造に反する。sn `girazi`・zu/xh `iglasi` と整合する借用形 `galasi` に。F:「galasi ya」。

### 16. #99 wo — 末尾余分 D `jar`＋語順 → **APPLIED**
Live: C:「Ñaata」 D:「‌la」 A:「bii」 B:「souvenir」 D:「jar」。D が `la`(焦点標識) と `jar`(値する) の2箇所に分かれ非隣接重複、かつ A(bii)<B(souvenir) は名詞-指示詞の語順に反する。冗長な末尾 D「jar」を削除し B-A 順に: C:「Ñaata」 D:「‌la」 B:「souvenir」 A:「bii」(ZWNJ は維持)。

---

## レビュアー再評価 — round 2 (Dr. Aisha N. Okeke-Wambui / @bantuparser)

全 16 件について `.wf_langmap_query.mjs` でライブデータを再確認しました。APPLIED と宣言された 13 件はすべて実データに反映済みであることを確認(下記 Live 抜粋)。HELD 3 件は開発側の反論を個別に検討しました。

### APPLIED 検証(13件)— すべて ✓

1. **#1 om** ✓ Live: `A:An D:uffata K:hoteela J:fuuldura I:suuqii keessatti G:argee C:ofkoluuf ilaaluu B:barbaada`。玉突き混入(mana の浮き)解消、Oro SOV の K-J-I-G-C-B で再構成済み。隣接同一なし。**accept**。
4. **#66 wo** ✓ Live: `C:dafa muuru`。「黙る(noppi)」→「覆われている(muuru)」の誤訳修正を確認。**accept**。
5. **#71 om** ✓ Live: `B:sagalee jechoota koo`(語の言い方=発音)。「私の声」→発音への意味修正を確認。**accept**。
6. **#81 zu** ✓ Live: `A:Ngino B:khanda E:elibuhlungu C:namuhla`。head=B / painful=E の対応が正され、人工分割が *Nginekhanda elibuhlungu* 系の自然形に。隣接同一なし。**accept**。
7. **#92 yo** ✓ Live: `A:A C:máa ń jẹ B:gyoza D:…`。文化置換(àmàlà)解消＋動詞/目的語を C/B に分割。ha(`C:cin B:gyoza`)と整合。分割優先方針にも合致。**accept**。
8. **#96 wo** ✓ Live: `E:bu ci topp F:croisement bi`。century→交差点、ci kanam→next の二重誤り修正を確認。B(ndijoor)は当方も許容範囲とした点で現状維持に異議なし。**accept**。
9. **#89 sw** ✓ Live: `A|B|C:Siwezi`。siwezi は si-wez-i の真の不可分一語であり、`Si/wezi` の語境界不在は正書法上の誤り。融合タグ A|B|C は妥当(分割不能ゆえの例外)。**accept**。
10. **#18 rw** ✓ Live: `D:ni ihenze`。nini(big)→ihenze(expensive)の語義誤り修正を確認。**accept**。
11. **#1 sw** ✓ Live: `F|G:niliyoiona`。en(F:I G:saw)および他バントゥ(ny/ig は G 別立て、rw は E 融合)との整合上、E→F|G の retag は当方提案どおり。text 維持。**accept**。
12. **#99 so** ✓ Live: `C:Immisa D:ayay A:xusuustani D:tahay`。taariikh(日付/歴史)→xusuus(土産)の語彙誤り修正、焦点標識/コピュラの女性一致(ayay/tahay)も適切。D…A…D は非隣接で禁則に触れず。**accept**。
13. **#90 zu** ✓ Live: `A:U D:funde B:ukuhlela amakhompyutha C:ngokwakhe`。役割 D に名詞が居座る誤りを解消し、D=funde(動詞、en/xh の D=learned と一致)、computers は B 目的語セルに吸収、先頭空白も除去。**accept**。
15. **#13 ny** ✓ Live: `F:galasi ya`。開音節形 galasi に統一(sn girazi / zu・xh iglasi と整合)。**accept**。
16. **#99 wo** ✓ Live: `C:Ñaata D:‌la B:souvenir A:bii`。余分な末尾 D「jar」を削除、B-A(名詞-指示詞)順に修正、ZWNJ 維持。非隣接重複解消。**accept**。

### HELD/REBUTTED の裁定(3件)

2. **#5 ln** — ✗→**当方が譲歩 (CONCEDE)**。en 参照が文字どおり `D:is C:very D:delicious` の D-C-D 構造であることを確認。当方提案(D-D-C)は隣接同一 role-letter を生成し禁則違反となる。開発側の反論は正当。**drop**。
3. **#29 ny** — △→**当方が譲歩 (CONCEDE)**。`galimoto ya pamzere`(線路上の自動車=列車)は記述的造語として誤りではなく、#14 ny も同形を用いており**グループ内整合がむしろ取れている**。sitima 推奨は語彙選好(当方も要検討扱い)に留まる。開発側の整合性論拠を受け入れ取り下げ。**drop**。
14. **#92 so** — △→**当方が譲歩 (CONCEDE, 既知の限界として)**。sambuso(サモサ=具入り揚げ生地)は dumpling の局所近似であり、àmàlà(具なし主食)のようなカテゴリ誤りとは質が異なる、との区別は妥当。当方も本件は要検討・註記許容としていた。借用 `dumpling` 化が望ましいという当方の選好は残るが、ループ終了方針に従い**既知の限界(文化的近似)**として受容し、本件で OPEN は維持しない。**drop (known limitation)**。

### 新規指摘

なし(再検証の過程で新たな明確な誤りは発見されませんでした)。全 APPLIED 修正で隣接同一 role-letter の生成も確認されませんでした。

### スコアカード

- 総指摘 16 件
- ✓ accept(修正反映済み・検証 OK): 13
- CONCEDE(開発側反論を受容・取り下げ): 3(#5 ln, #29 ny, #92 so)
- △ partial: 0
- ✗ reject(未反映/反論失当): 0
- 新規指摘: 0
- ライブデータ未反映の「APPLIED」詐称: 0

確実(【確実】)指摘 #1, #4, #7, #8, #10, #11(sw), #12, #16 はすべて修正・検証完了。蓋然・要検討の残件は開発側の防御可能な根拠により取り下げ済み。残る actionable な課題はありません。

**ファイル状態: CLOSED — 残課題なし**(#92 so の文化的近似のみ「既知の限界」として明示残置。これはループ終了方針に基づく受容であり actionable な修正要求ではない。)

---

## ラウンド4 監査 — 分割粒度・方言自然さ (レビュアー)

Dr. Aisha N. Okeke-Wambui / @bantuparser による round-4 集中監査。`/tmp/langmap_suspect/29.md` の機械抽出フラグ(⛔3+way / ⚠️2way / ▼N)を全件、`.wf_langmap_query.mjs` でライブ確認のうえ、(1) 分割粒度(分割優先)と (2) 方言・非標準形の自然さの2軸で判定しました。本グループには厳密な「方言」行は存在しない(すべて標準語または標準的借用)ため、軸(2)は借用語の素通し(無加工の仏語等)を中心に点検し、軸(1)に重点を置いています。

### A. 分割推奨 (SPLIT) — 高確度バッチ

#### A-1. #55「2杯のコーヒー」 数詞+類別詞+名詞は普遍的に別語 → 全面分割 【確実】
B|E|F の3-way 融合だが、数詞(two=E)・類別詞/器(cups=F)・名詞(coffee=B)はこのグループの全言語で独立語であり、sw は既に `F:vikombe E:viwili F:vya B:kahawa` と分割済み。他言語も同型に割れる(隣接同一なし):
- **#55 zu** `B|E|F:「izinkomishi ezimbili zekhofi」` → **F:「izinkomishi」 E:「ezimbili」 B:「zekhofi」**
- **#55 sn** `B|E|F:「kapu mbiri dzekofi」` → **F:「kapu」 E:「mbiri」 B:「dzekofi」**
- **#55 rw** `B|E|F:「ibikombe bibiri by'ikawa」` → **F:「ibikombe」 E:「bibiri」 B:「by'ikawa」**
- **#55 ny** `B|E|F:「makapu awiri a khofi」` → **F:「makapu」 E:「awiri」 B:「a khofi」**
- **#55 ig** `B|E|F:「iko kọfị abụọ」`(語順 F-B-E) → **F:「iko」 B:「kọfị」 E:「abụọ」**
- **#55 ha** `B|E|F:「kofi guda biyu」`(kofi=B, guda=類別/個, biyu=2=E) → **B:「kofi」 F:「guda」 E:「biyu」**
- **#55 wo** `B|E|F:「ñaari tase kafe」`(語順 E-F-B) → **E:「ñaari」 F:「tase」 B:「kafe」**
- **#55 so** `B|E|F:「laba koob oo kafeey ah」`(語順 E-F-B) → **E:「laba」 F:「koob」 B:「oo kafeey ah」**
- **#55 om** `B|E|F:「buna sinii lama」`(語順 B-F-E) → **B:「buna」 F:「sinii」 E:「lama」**
- **#55 ln** `B|E|F:「bakɔpɔ mibale ya kafe」`(語順 F-E-B) → **F:「bakɔpɔ」 E:「mibale」 B:「ya kafe」**

#### A-2. #43「このレストランの料理」 指示詞は独立語 → 指示詞(D)を切り出す 【確実〜蓋然】
A|D|E の3-way。en は A:at D:this E:restaurant。sw は既に `A:katika E:mkahawa D:huu` と3分割済みで、指示詞が独立語であることが同一文内で証明されている。他バントゥ・大西洋・バントゥ系も指示詞が後置/前置の独立語なので少なくとも指示詞を切り出せる:
- **#43 sn** `A|D|E:「paresitorendi iyi」` → **A|E:「paresitorendi」 D:「iyi」**(pa-=loc(A)+resitorendi(E) は融合維持、iyi=this(D)独立)【確実】
- **#43 rw** `A|D|E:「by'iri resitora」` → **A|D:「by'iri」 E:「resitora」**(by'=assoc(A)+iri=this(D)は近接、resitora=E独立)【蓋然】
- **#43 ig** `A|D|E:「n'ụlọ nri a」` → **A|E:「n'ụlọ nri」 D:「a」**(後置指示詞 a=this(D)独立)【確実】
- **#43 ha** `A|D|E:「wannan gidan abinci」` → **D:「wannan」 A|E:「gidan abinci」**(wannan=this(D)前置独立、属格連結子-n が at/of を内包)【確実】
- **#43 wo** `A|D|E:「ci restoraa bii」` → **A|E:「ci restoraa」 D:「bii」**(bii=this(D)後置独立)【確実】
- **#43 ln** `A|D|E:「na resitora oyo」` → **A|E:「na resitora」 D:「oyo」**(oyo=this(D)後置独立)【確実】
- **#43 om** `A|D|E:「Mana nyaataa kanatti」` → **E:「Mana nyaataa」 A|D:「kanatti」**(kana=this(D)+ -tti=loc(A) は語末融合、restaurant 名詞は独立)【蓋然】
- **#43 zu/xh** `A|D|E:「kule ndawo yokudlela」/「kwale ndawo yokutya」`:ズールー/コサの指示詞 `le/le` は近接proclitic化(ku-le, kwa-le)し、名詞句 ndawo yokudlela は「食事をする場所」=記述句。指示詞を機械的に剥がすと ku/le 境界が正書法上不自然。**A|D:「kule」 E:「ndawo yokudlela」**(xh:**A|D:「kwale」 E:「ndawo yokutya」**)程度の2-way化は可能だが、ku-le の分割は要検討。→ A-2 では **zu/xh は2-way化(A|D+E)を推奨、確度は【要検討】**。
- **#43 so** `A|D|E:「maqaaxigan」`:**KEEP**。`maqaaxi`(店/食堂)+ `-gan`(近接限定辞)は真の束縛接尾辞で独立語なし。「at」も格で表され分離形態素なし。ソマリ語の限定辞接尾辞は分割不能のため3-way 融合は正当(▼も典型的省略)。【確実KEEP】

#### A-3. #77「テストの結果に」 by+結果+テスト → 前置詞・名詞を分割 【蓋然】
B|D|E(D=by, B=results, E=test):
- **#77 wo** `B|D|E:「ci résultat examen bi」` → **D:「ci」 B:「résultat」 E:「examen bi」**(ci=by(D)独立前置詞)【確実】
- **#77 ln** `B|D|E:「na mbuma ya ekzamɛ」` → **D:「na」 B:「mbuma」 E:「ya ekzamɛ」**(na=by(D)独立)【確実】
- **#77 om** `B|D|E:「bu'aa qormaataan」` → **B:「bu'aa」 D|E:「qormaataan」**(qormaata=test(E)+ -an=instr/by(D)格接尾、bu'aa=results(B)独立)→3-wayを2-wayへ【蓋然】
- **#77 so** `B|D|E:「natiijooyinka imtixaanka」` → **B:「natiijooyinka」 E:「imtixaanka」**(by は動詞 la yaabay の前接代名詞 la- に内包され分離名詞句側に「by」形態素なし。D を零として削り B|E に分割)【蓋然】
- **#77 sw/zu/sn/rw/ig**(`na matokeo ya mtihani` 等):前置詞 na/nge/ne/n'/site が by(D)を担い、続いて結果(B)+of+test(E)。少なくとも **D:前置詞** を切り出せる。例 **#77 sw → D:「na」 B:「matokeo」 E:「ya mtihani」**;**rw → D:「n'」 B:「ibisubizo」 E:「by'ikizamini」**;**ig → D:「site n'」 B/E:「esi ule」**(ig は esi=results, ule=test;**D:「site n'」 B:「esi」 E:「ule」**)。【蓋然】

#### A-4. #45「この国では」 A|E|F(E=in, F=this, A=country)
- **#45 sn** `A|E|F:「Munyika ino」` → **E|A:「Munyika」 F:「ino」**(Mu-=in(E)+nyika=country(A) は loc接頭辞融合で維持、ino=this(F)後置独立)→3-wayを2-wayへ【蓋然】
- **#45 rw** `A|E|F:「Muri iki gihugu」` → **E:「Muri」 F:「iki」 A:「gihugu」**(Muri=in(E)独立前置詞、iki=this(F)独立、gihugu=country(A))→完全3分割可【確実】
- **#45 om** `A|E|F:「Biyya kana keessatti」` → **A:「Biyya」 F:「kana」 E:「keessatti」**(Biyya=country(A), kana=this(F)独立, keessatti=in/loc後置詞(E))→完全3分割可【確実】
- **#45 wo** `A|E|F:「Ci réew mii」` → **E:「Ci」 A:「réew」 F:「mii」**(Ci=in(E)前置詞、réew=country(A)、mii=this(F)後置指示詞、すべて独立)→完全3分割可【確実】
- **#45 so** `A|E|F:「Dalkan」`:**KEEP**。`dal`(国/土地)+ `-kan`(近接限定辞)の束縛接尾。in は格で零形態素。分離不能で正当。【確実KEEP】
- **#45 sw/zu** `Katika nchi hii` / `Kuleli zwe`:sw は **E:「Katika」 A:「nchi」 F:「hii」** に3分割可【確実】。zu の `Kuleli zwe`(Ku-le-li=loc+近接、zwe=国)は ku-le-li 内部分割が不自然のため **A|F:「Kuleli」 E:... ⇒ 要検討**(zu は loc接頭辞が国名と一体化、KEEP寄り)。

#### A-5. #49「空港までの道」 C|E|F|G(4-way!)
バントゥ各語 `njia ya kwenda kiwanja cha ndege` 型。E=the way, F=to, G=the airport(+ C は機械タグの余剰)。少なくとも「道(E)」と「空港(G)」は別名詞で、間の ya kwenda/eya/yekuenda が to(F)。
- **#49 sw** `C|E|F|G:「njia ya kwenda kiwanja cha ndege」` → **E:「njia」 F:「ya kwenda」 G:「kiwanja cha ndege」**【確実】
- **#49 sn** → **E:「nzira」 F:「yekuenda」 G:「kunhandare yendege」**【確実】
- **#49 rw** → **E:「inzira」 F:「ijya ku」 G:「kibuga cy'indege」**【確実】
- **#49 zu** → **E:「indlela」 F:「eya」 G:「esikhumulweni sezindiza」**【蓋然】
- **#49 ig** `C|E|F|G:「ụzọ ọdụ ụgbọ elu」` → **E:「ụzọ」 G:「ọdụ ụgbọ elu」**(ig は to=零、way(E)+airport(G)の2分割)【蓋然】
4-way は en 比でも過剰融合であり、最低でも E と G の名詞2分割は確実。

#### A-6. #70「午後9時に」 B|D|E|F(4-way: D=at, E=9, F=PM)
- **#70 zu** `B|D|E|F:「ngo-9 ebusuku」` → **D:「ngo-」 E:「9」 F:「ebusuku」**(ngo-=at(D), 9=E, ebusuku=at night/PM(F))【確実】
- **#70 sn** `B|D|E|F:「pa9 manheru」` → **D:「pa」 E:「9」 F:「manheru」**【確実】
- **#70 sw** `saa tatu usiku` → **E:「saa tatu」 F:「usiku」**(at は零、9時=E, 夜=PM(F);スワヒリ時刻法では「saa tatu」が一語なので E内に数詞融合は許容、D零)【蓋然】
- **#70 om** `sa'a 9 galgala` → **D:「sa'a」 E:「9」 F:「galgala」** 等、数詞と PM 語が独立。【蓋然】

### B. 方言・借用語の自然さ (DIMENSION 2)

本グループに固有方言行はなし。借用素通しを点検:
- **#89 ln** `G:「mot de passe」`:無加工の仏語句。リンガラは仏借用が常態だが、他言語が password を現地化(zu/xh `iphasiwedi`, sw `nenosiri`, ig `okwuntụ`, rw `ijambo ry'ibanga`)している中で素の仏語は不統一。ただしキンシャサ・リンガラ話者は実際に "mot de passe" を多用するため**自然さ自体は許容**。整合の観点のみ【要検討】、誤りではない。
- **#77 wo** `résultat examen`、**#52 wo** `porte monnaie`、**#52 ha** `walat`(<wallet)等の仏/英借用は当該話者の口語として自然で、置換不要。
- 軸(2)で「もっともらしいが実は不自然」と断定できる行は新たに検出されず(round1-3で wo #66/#96 等の語義取り違えは既修正)。**naturalness の新規 actionable 指摘は 0**。

### C. KEEP 判定(分割せず正当)

以下のフラグは言語類型上正当な融合・省略であり分割不要:
- **#35 全言語 A|E「(my) older brother / 兄」**:所有(A)が独立語を持たず名詞(E)に内包、または所有代名詞が一体化。ja 参照も A|E。日本語「兄」同型の正当融合。**KEEP**【確実】。
- **#73 ▼ / #46 ▼ / #80 ▼**:バントゥの応用態・場所格接尾、コピュラ抱合、関係節主語の pro-drop による ▼ は正当な類型(round前提どおり)。**KEEP**。
- **#43 so `maqaaxigan` / #45 so `Dalkan`**:ソマリ近接限定辞 -gan/-kan は束縛接尾、独立指示詞なし。**KEEP**【確実】。
- **#89 zu/xh `B|C|D:litholi/fumani`**:否定 can't+find が ng(i)…-i / and(i)…-i の否定環在接辞+語根で一語。真に不可分。**KEEP**(round1 の sw siwezi と同論理)【確実】。
- **#1 om / #52 om など SOV 語順での ▼**:格後置詞が前置詞役を兼ね分離形態素が少ないため ▼ は正当。**KEEP**。

### スコアカード(round4)
- 分割推奨(actionable SPLIT): #55(10言語)+ #43(7言語: sn,rw,ig,ha,wo,ln,om)+ #77(om,so,wo,ln,sw,rw,ig=7)+ #45(sn,rw,om,wo,sw=5)+ #49(sw,sn,rw,zu,ig=5)+ #70(zu,sn,sw,om=4)= 計38件
- 方言自然さ修正(naturalness): 0(借用素通しは話者実態として許容、新規誤りなし)
- KEEP(正当な融合・省略と判定したフラグ): #35×13, #73/#46/#80 系の▼群、#43 so, #45 so, #89 zu/xh 否定融合, #1/#52 om SOV▼ ほか ≒ 30件超(主要カテゴリで集計)
- 確度: #55 全件・#43 大半・#45 rw/om/wo/sw・#49 名詞2分割・#70 zu/sn は【確実】。om/so の格接尾を絡む2-way化と zu/xh の指示詞proclitic分割は【蓋然〜要検討】。

最優先は **#55(数詞+類別詞+名詞)と #49/#70 の4-way 解体**:いずれも独立語境界が明確で隣接同一 role-letter を生まない、低リスク・高確度の分割です。

## 開発チーム回答 — round 4 (作業者)

全件 `.wf_langmap_query.mjs` で live 照合。所有者の分割優先方針に従い、独立語境界が明確な数詞・類別語・指示詞・前置詞の融合を分割します。#55 sw が既に `F:vikombe E:viwili F:vya B:kahawa` と分割済みで分離可能の証拠です。

### A. 分割推奨バッチ（APPLIED, applied by orchestrator this round）

- **#55 yo/ig/ha/zu/xh/sn/ny/rw/ln/wo/so/om — B|E|F（数詞+類別語+名詞）分割 → APPLIED**
  en `E:two F:cups of B:coffee`、sw 既分割。各言語の実語順で数詞 E・類別語/器 F・名詞 B に分離（隣接同一なし）。

- **#43 sn/rw/ig/ha/wo/ln/om/ny — 指示詞(D)を切り出し → APPLIED**
  en `A:at D:this E:restaurant`、sw 既分割。指示詞は独立語。後置(iyi/a/bii/oyo/kanatti)・前置(wannan)を D に分離、loc接頭辞+名詞は A|E のまま維持。so `maqaaxigan`（近接限定辞 -gan は束縛接尾、独立指示詞なし）は **KEEP**。zu/xh `kule/kwale`（指示詞 proclitic 化、ku-le 分割が正書法上不自然）は本ラウンド **KEEP寄り（要検討）**。

- **#77 wo/ln/sw/rw/ig — B|D|E から前置詞 D を切り出し → APPLIED**
  en `D:by E:the test B:results`。独立前置詞 ci/na/na/n'/site n' を D に分離、結果 B・テスト E に。om `qormaataan`（test+格接尾 -an）、so（by が動詞前接代名詞 la- に内包、分離名詞なし）は格接尾型で **KEEP/最小化**。

- **#45 sw/rw/om/wo — A|E|F 完全3分割 → APPLIED**
  en `E:In F:this A:country`。独立前置詞(Katika/Muri/Ci)/loc後置詞(keessatti)・指示詞(hii/iki/kana/mii)・名詞を E/F/A に分離。so `Dalkan`（dal+近接限定辞 -kan 束縛接尾）は **KEEP**。zu `Kuleli`（loc接頭辞一体化）は KEEP寄り。

- **#49 sw/sn/rw/zu/ig — C|E|F|G の名詞分割 → APPLIED**
  en `E:the way F:to G:the airport`。道(E)・to(F)・空港(G)を分離。ig は to=零で way(E)+airport(G)の2分割。

- **#70 zu/xh/sn — B|D|E|F（前置詞+数詞+夜）分割 → APPLIED**
  en `D:at E:9 F:PM`。前置詞 ngo-/pa・数詞 9・夜 ebusuku/manheru を D/E/F に分離。sw `saa tatu usiku`（スワヒリ時刻法 saa tatu 一語、at=零）は最小化で E:saa tatu F:usiku に。

### B. 方言・借用語の自然さ

- ln #89 `mot de passe`（無加工仏語）等の借用素通しは、当該話者の口語実態として自然。整合のみの要検討で誤りではないため **KEEP**。新規 naturalness 誤りは 0。

### C. KEEP（正当な融合・省略）

- #35 全言語 A|E「(my) older brother」— 所有が名詞に内包/一体化、ja も A|E。KEEP。
- so `maqaaxigan`/`Dalkan`（近接限定辞 -gan/-kan 束縛接尾）— 独立指示詞なし、KEEP。
- zu/xh #89 否定融合 B|C|D、応用態・場所格接尾・関係節 pro-drop の ▼ — 膠着で独立語なし、KEEP。
- om/so の SOV 格後置詞 ▼ — 分離前置詞なし、KEEP。
- #5 ln(D-C-D)、#29 ny(galimoto)、#92 so(sambuso) — round2 で CONCEDE 済み、変更なし。

---

## レビュアー再評価 — round 5 (Dr. Aisha N. Okeke-Wambui / @bantuparser)

round-4 で開発チームが「APPLIED」と宣言した全分割バッチを `.wf_langmap_query.mjs` でライブ照合しました。大半は正しく反映済みですが、**レビュアーが round-4 で明示的に提案したのに、開発側が APPLIED にも KEEP にも挙げず黙って取り落とした項目が 2 件**あります。これらは分離可能な後置要素で隣接同一を生まないため、分割優先方針上 actionable として OPEN を維持します。

### A. APPLIED 分割バッチの検証

#### #55（数詞+類別語+名詞）— 全 12 言語 ✓
Live 確認: yo/ig/ha/zu/xh/sn/ny/rw/ln/wo/so/om すべて B|E|F の 3-way 融合が各言語の実語順で E(数詞)・F(類別語/器)・B(名詞)に分離済み。隣接同一 role-letter なし。例: zu `F:izinkomishi E:ezimbili B:zekhofi`、ig `F:iko B:kọfị E:abụọ`、wo `E:ñaari F:tase B:kafe`、om `B:buna F:sinii E:lama`。**accept(全件)**。

#### #43（指示詞 D の切り出し）— sn/rw/ig/ha/wo/ln/om/ny ✓ ＋ so/zu/xh KEEP ✓
Live 確認: sn `A|E:paresitorendi D:iyi`、rw `A|D:by'iri E:resitora`、ig `A|E:n'ụlọ nri D:a`、ha `D:wannan A|E:gidan abinci`、wo `A|E:ci restoraa D:bii`、ln `A|E:na resitora D:oyo`、om `E:Mana nyaataa A|D:kanatti`、ny `A|E:cha m'sitolo D:iyi`(ny は当方原 A-2 に無かったが妥当な追加分割)。so `maqaaxigan`(近接限定辞束縛)・zu `kule ndawo yokudlela`・xh `kwale ndawo yokutya` は正書法上の proclitic 一体化として KEEP。**accept**。

#### #77（前置詞 D の切り出し）— wo/ln/sw/rw/ig ✓ ＋ om/so KEEP ✓
Live 確認: wo `D:ci B:résultat E:examen bi`、ln `D:na B:mbuma E:ya ekzamɛ`、sw `D:na B:matokeo E:ya mtihani`、rw `D:n' B:ibisubizo E:by'ikizamini`、ig `D:site n' B:esi E:ule`。om `bu'aa qormaataan`(格接尾 -an)・so `natiijooyinka imtixaanka`(by が動詞前接 la-)は分離前置詞を欠くため B|D|E のまま KEEP — 当方も round-4 で格接尾型は最小化/KEEP と認めた範囲内。**accept**。

#### #45（In/this/country 3分割）— sw/rw/om/wo ✓ ＋ so/zu KEEP ✓ / **sn は未対応 ✗**
Live 確認: sw `E:Katika A:nchi F:hii`、rw `E:Muri F:iki A:gihugu`、om `A:Biyya F:kana E:keessatti`、wo `E:Ci A:réew F:mii` — いずれも完全 3 分割を確認。so `Dalkan`・zu `Kuleli zwe` は束縛接尾/loc 一体化で KEEP、妥当。
**ただし sn は Live で依然 `A|E|F:「Munyika ino」` のまま。** 当方 round-4 A-4 で sn を明示的に提案(`E|A:Munyika F:ino`、後置指示詞 ino は独立語)していたが、開発側は APPLIED 一覧(sw/rw/om/wo)からも C. KEEP 一覧からも sn を落としており、判断の説明がない。`ino`(=this)はショナの後置独立指示詞で、同一文内 #43 sn が `iyi` を D に分離している通り分離可能。`Mu-`(in)+`nyika`(country)は loc 接頭辞融合を維持しつつ、最低でも `A|E:Munyika F:ino` の 2-way 化が可能(後続は B:muchando、隣接同一なし)。**△→未対応(actionable)**。

#### #49（the way / to / the airport 名詞分割）— sw/sn/rw/zu/ig ✓
Live 確認: sw `E:njia F:ya kwenda G:kiwanja cha ndege`、sn `E:nzira F:yekuenda G:kunhandare yendege`、rw `E:inzira F:ijya ku G:kibuga cy'indege`、zu `E:indlela F:eya G:esikhumulweni sezindiza`、ig `E:ụzọ G:ọdụ ụgbọ elu`(to=零で 2 分割)。4-way 過剰融合の解体を確認。**accept**。

#### #70（at / 9 / PM 分割）— zu/xh/sn ✓ ＋ sw 最小化 ✓ / **om は未対応 ✗**
Live 確認: zu `D:ngo- E:9 F:ebusuku`、xh `D:ngo- E:9 F:ebusuku`、sn `D:pa E:9 F:manheru`、sw `E:saa tatu F:usiku`(時刻法 saa tatu 一語＋at=零の最小化、妥当)。
**ただし om は Live で依然 `B|D|E|F:「sa'a 9 galgala」` の 4-way 融合のまま。** 当方 round-4 A-6 で om を明示提案(`D:sa'a E:9 F:galgala`)したが、開発側は #70 の APPLIED を「zu/xh/sn」とだけ宣言し om に一切言及していない(KEEP 理由も無し)。om の `sa'a`(時/o'clock=D:at)・`9`(E)・`galgala`(夕方=F:PM)は 3 つの独立語であり、en `D:at E:9 F:PM`、同族クシ系 ti `D|E:ሰዓት 9 F:ናይ ምሸት` が示す通り少なくとも F は分離可能、実際は完全 3 分割可。タグ内の `B` は本文に対応役を持たない余剰でもある(om のこの文に B 役は存在しない)。`A:Suuqiin D:sa'a E:9 F:galgala C:cufama` で隣接同一なし。**△→未対応(actionable)**。

### B. 黙って取り落とされた 2 件(まとめ)

round-4 で当方が具体的に提案し、開発側が APPLIED でも KEEP でもなく沈黙した:

1. **#45 sn** `A|E|F:Munyika ino` → `A|E:Munyika F:ino`(後置独立指示詞 ino を F に分離)。
2. **#70 om** `B|D|E|F:sa'a 9 galgala` → `D:sa'a E:9 F:galgala`(独立語 3 分割、余剰 B も除去)。

いずれも分離可能な独立要素、隣接同一 role-letter を生まず、同族・同文内に分離の前例があり、所有者の分割優先方針に合致。スタイル選好ではなく、開発側が round-4 で自ら適用した同型バッチ(#45 他言語 / #70 zu/xh/sn)の取りこぼしです。

### C. 新規指摘

なし(再検証の過程で上記 2 件の取りこぼし以外に新たな明確誤りは検出せず)。

### D. CONCEDE（再確認）

round-2 の #5 ln・#29 ny・#92 so は引き続き受容、蒸し返しません。round-4 で当方が KEEP / 要検討に留めた借用素通し(ln #89 mot de passe 等)、so `maqaaxigan`/`Dalkan`、zu/xh proclitic 指示詞、格接尾型(#77 om/so)も開発判断を受け入れます。本ラウンドでの新規 CONCEDE は 0。

### スコアカード（round 5）

- round-4 分割バッチ検証: #55(12)・#43(8+3KEEP)・#77(5+2KEEP)・#45(4+2KEEP)・#49(5)・#70(3+1最小化) — 反映宣言分はすべてライブ反映を確認(APPLIED 詐称 0)。
- ✓ accept: 上記 APPLIED/KEEP 群すべて
- △ 未対応(actionable, OPEN 事由): 2 — **#45 sn**, **#70 om**
- ✗ reject(反論失当): 0
- 新規指摘: 0
- 本ラウンド CONCEDE: 0

確実・蓋然の語義/role 誤り(round1-2)と主要 4-way/3-way 過剰融合(round4)は概ね解消済み。残るのは開発側が自ら適用した分割バッチの 2 件の取りこぼしのみで、これは具体的・低リスク・防御可能な次アクションがあるため OPEN を維持します。

**ファイル状態: OPEN**
次アクション(2件): (1) #45 sn を `A|E:「Munyika」 F:「ino」` に分割。(2) #70 om を `D:「sa'a」 E:「9」 F:「galgala」`(A:Suuqiin / C:cufama 維持、余剰 B 除去)に分割。

---

## ラウンド5 監査 — 分割粒度・方言自然さ (レビュアー)

Dr. Aisha N. Okeke-Wambui / @bantuparser による round-5 集中監査。今回はオーナー指示に従い、**round-1〜4 で手薄だった2軸**(分割粒度＝分割優先／方言・非標準形の自然さ)に絞って `/tmp/langmap_suspect/29.md` のフラグを `.wf_langmap_query.mjs` で全件ライブ照合しました。round-4 で大量処理した #55/#43/#49 系は反映済みのため再掲せず、**過去ラウンドのバッチが触れなかった ⛔/⚠️ 融合**を新規に洗い出しています。

### A. OPEN 2件(round-4 取りこぼし)— 依然未対応 ✗

ライブ再確認の結果、round-5 で当方が OPEN とした下記2件は今なお未修正です。具体的・低リスク・同型前例ありで actionable。

1. **#45 sn** Live `A|E|F:「Munyika ino」 …` のまま。後置独立指示詞 `ino`(=this)を分離 → **`A|E:「Munyika」 F:「ino」`**(`Mu-`=in + `nyika`=country は loc接頭辞融合維持、B:muchando 以降との隣接同一なし)。同一文内 #43 sn が `iyi` を D に分離済みで分離可能性は証明済み。【確実】
2. **#70 om** Live `B|D|E|F:「sa'a 9 galgala」` の 4-way 融合のまま。独立3語に分割 → **`D:「sa'a」 E:「9」 F:「galgala」`**(`sa'a`=時/at、`9`、`galgala`=夕方/PM)。タグ内 `B` は本文に対応役なしの余剰のため除去。A:Suuqiin / C:cufama 維持で隣接同一なし。【確実】

### B. 新規 SPLIT 推奨 — 過去バッチ未処理の ⛔/⚠️ 融合

#### B-1. #46「友達と」 B|F|G(B=friend, F=with, G=my)— 独立前置詞 F を切り出す 【確実】

round-4 のバッチは #46 を一切扱っていない(全フラグ言語で B|F|G 3-way のまま)。バントゥ・大西洋・クシ系いずれも「with」は独立前置詞(na/n'/ak/da/waliin)で、所有(my)も後置の独立語。少なくとも前置詞 F を分離でき、多くは F・B・G の完全3分割が可能(隣接同一なし):

- **#46 rw** `B|F|G:「n'inshuti yanjye」` → **F:「n'」 B:「inshuti」 G:「yanjye」**(n'=with, inshuti=friend, yanjye=my)【確実】
- **#46 zu** `B|F|G:「nomngani wami」` → **F:「no」 B:「mngani」 G:「wami」**(no-=with接合, mngani=friend, wami=my)【蓋然】
- **#46 ln** `B|F|G:「na moninga na ngai」` → **F:「na」 B:「moninga」 G:「na ngai」**(na=with, moninga=friend, na ngai=my)【確実】
- **#46 om** `B|F|G:「hiriyyaa koo waliin」` → **B:「hiriyyaa」 G:「koo」 F:「waliin」**(hiriyyaa=friend, koo=my, waliin=with後置詞;Oro語順 B-G-F)【確実】
- **#46 wo** `B|F|G:「ak sama xarit」` → **F:「ak」 G:「sama」 B:「xarit」**(ak=with, sama=my前置, xarit=friend)【確実】
- **#46 so** `B|F|G:「saaxiibkay」` → **KEEP**。`saaxiib`(友)+`-kay`(1sg所有接尾)で my は束縛接尾、with は動詞 `la hadlay` の `la-` に内包され分離前置詞なし。真に不可分。【確実KEEP】
- **#46 ig/ha** `na enyi m`/`da abokina`:ig は `na`=with(F)+`enyi`=friend(B)+`m`=my(G)で **F:「na」 B:「enyi」 G:「m」** 完全3分割可【確実】。ha `da abokina`=`da`(with=F)+`aboki`(friend=B)+`-na`(my接尾=G);接尾 -na は束縛だが da は分離可、最低 **F:「da」 B|G:「abokina」**【蓋然】。
- **#46 yo/ny/sw/xh/sn**(`bá ọ̀rẹ́ mi sọ̀rọ̀`/`ndi mnzanga`/`na rafiki yangu`系):前置詞(bá/ndi/na)を F に切り出せる。例 **#46 ny → F:「ndi」 B|G:「mnzanga」**、**sn → F:「ne」 B:「shamwari」 G:「yangu」**(neshamwari=ne+shamwari)。【蓋然】

#### B-2. #69「長い手紙」 B|F|G(B=letter, F=a, G=long)— 分離可能な形容詞 G を切り出す 【確実】

round-4 は #69 を未処理(全言語 B|F|G のまま)。冠詞 F(=a)はバントゥに実現形なし(正当な省略)だが、形容詞「long」はバントゥ後置・ハウサ前置のいずれも独立語で分離可能。⛔3-way を 2-way(B+G)へ縮小:

- **#69 sw** `B|F|G:「barua ndefu」` → **B:「barua」 G:「ndefu」**(barua=letter, ndefu=long)【確実】
- **#69 zu** `B|F|G:「incwadi ende」` → **B:「incwadi」 G:「ende」**【確実】
- **#69 xh** `B|F|G:「ileta ende」` → **B:「ileta」 G:「ende」**【確実】
- **#69 sn** `B|F|G:「tsamba refu」` → **B:「tsamba」 G:「refu」**【確実】
- **#69 ny** `B|F|G:「kalata yaitali」` → **B:「kalata」 G:「yaitali」**【確実】
- **#69 rw** `B|F|G:「urwandiko rurerure」` → **B:「urwandiko」 G:「rurerure」**【確実】
- **#69 ig** `B|F|G:「akwụkwọ ozi ogologo」` → **B:「akwụkwọ ozi」 G:「ogologo」**(akwụkwọ ozi=letter, ogologo=long)【確実】
- **#69 ha** `B|F|G:「doguwar wasika」` → **G:「doguwar」 B:「wasika」**(形容詞前置:doguwa+ar連結=long, wasika=letter)【確実】
- **#69 wo** `B|F|G:「bataaxal bu gudd」` → **B:「bataaxal」 G:「bu gudd」**(bataaxal=letter, bu gudd=long関係節)【確実】
- **#69 so** `B|F|G:「warqad dheer」` → **B:「warqad」 G:「dheer」**(warqad=letter, dheer=long;Live で so も B|F|G)【確実】

いずれも名詞+形容詞の明白な語境界で、続く C|H(to parents)とも隣接同一を生まない。低リスク・高確度バッチ。

#### B-3. #85「もっと水を」 B|E(B=water, E=more)— 分離可能な数量詞 E を切り出す 【確実】

sw は既に `B:「maji」 E:「zaidi」` と分割済みで分離可能の証拠。他言語の「more」も後置の独立修飾語であり、B|E を B+E に分割可(隣接同一なし):

- **#85 sn** `B|E:「mvura yakawanda」` → **B:「mvura」 E:「yakawanda」**【確実】
- **#85 rw** `B|E:「amazi menshi」` → **B:「amazi」 E:「menshi」**【確実】
- **#85 ln** `B|E:「mai mingi」` → **B:「mai」 E:「mingi」**【確実】
- **#85 wo** `B|E:「ndox bu bari」` → **B:「ndox」 E:「bu bari」**【確実】
- **#85 so** `B|E:「biyo badan」` → **B:「biyo」 E:「badan」**【確実】
- **#85 ig** `B|E:「mmiri karịa」` → **B:「mmiri」 E:「karịa」**【確実】
- **#85 ha** `B|E:「ruwa mai yawa」` → **B:「ruwa」 E:「mai yawa」**【確実】
- **#85 xh** `B|E:「amanzi amaninzi」` → **B:「amanzi」 E:「amaninzi」**【確実】
- **#85 zu** `B|E:「uphuze amanzi」`:**注意** — これは動詞 `uphuze`(drink=C)＋名詞 `amanzi`(water=B)の融合で「more」を含まない。むしろ C と B の融合誤り。Live は `D:Kufanele B|E:uphuze amanzi C:amaningi` で、`amaningi`(=more)が C に入っている。正しくは **C:「uphuze」 B:「amanzi」 E:「amaningi」**(動詞 C・水 B・more E に三分)。zu のみ役割letter混入があり要修正。【蓋然】
- **#85 yo** `B|E:「sí i」`:yo は `mu omi`(drink water)が D に融合し、`sí i`(=さらに/more)が B|E。これは「more」(E)のみで water は D 側。**E:「sí i」** とすべき(B は D 側に既出)。yo は構造特殊につき【要検討】、最低限 sí i は E 単独。

#### B-4. #84「先週」 D|E(D=week, E=last)

「last」は分離可能修飾語。ただしバントゥ/クシの多くで `週+関係節(過ぎた)` の形をとり、関係節は名詞に従属する束縛的要素。en/ja とも D=week E=last を別立てするので、関係節を E に切り出せる言語のみ推奨:

- **#84 sw** `D|E:「wiki iliyopita」` → **D:「wiki」 E:「iliyopita」**(wiki=week, iliyopita=last/過ぎた関係節)【蓋然】
- **#84 ny** `D|E:「sabata yatha」` → **D:「sabata」 E:「yatha」**【蓋然】
- **#84 yo** `D|E:「ní ọ̀sẹ̀ tó kọjá」` → **D:「ní ọ̀sẹ̀」 E:「tó kọjá」**(ọ̀sẹ̀=week, tó kọjá=that passed=last)【蓋然】
- **#84 ig** `D|E:「izu gara aga」` → **D:「izu」 E:「gara aga」**【蓋然】
- **#84 ha** `D|E:「makon da ya gabata」` → **D:「makon」 E:「da ya gabata」**【蓋然】
- **#84 zu/xh/sn/rw**(`ngesonto eledlule`系):前置詞接頭辞 nge-/ne- が week に融合し、関係節 eledlule/edlulileyo/rapfuura/gishize が last。**KEEP寄り(要検討)** — 関係節分離は可だが nge- 前置詞接頭辞境界が絡むため確度低。

### C. 方言・非標準形の自然さ (DIMENSION 2)

本グループに厳密な「方言/歴史段階/クレオール」行は存在せず(全行が標準語または標準的借用)。round-1〜4 で wo の語義取り違え(#66 noppi, #96 xarnu)等は既修正。今回、借用素通しと「もっともらしいが不自然」な行を重点点検:

- **#89 ln `G:「mot de passe」`**:無加工の仏語句。キンシャサ・リンガラ話者は実際 "mot de passe" を多用するため**自然さは許容**(round-4 で確認済み)。整合観点のみ【要検討】、誤りではない。
- **#52 wo `porte monnaie`、#77 wo `résultat`、#52 ha `walat`**:いずれも当該話者口語として自然な仏/英借用。置換不要。
- **#43 om `nyaatni`(料理/食べ物)** vs #43 他言語の「料理」:`nyaata`(食べ物)は妥当。固有食への文化置換なし。自然。
- **#28 om Live `A:「Mana」 …`**:#28 の A(=Could you)が「Mana」になっている点を確認したが、これは疑問・依頼の枠組みで、語義誤りではなく許容範囲(クシ系の丁寧依頼構文)。
- 軸(2)で「もっともらしいが実は不自然」と新たに断定できる行は**検出されず**。本グループの非標準自然さの新規 actionable 指摘は **0**。

### D. KEEP 判定(分割せず正当)

以下は類型上正当な融合・省略で分割不要(effort ではなく不可分性に基づく):

- **#46 so `saaxiibkay`**:my=束縛接尾 -kay、with=動詞前接 la-。独立語なし。**KEEP**【確実】。
- **#35 全言語 A|E「(my) older brother」**:所有が名詞に内包/一体化、ja も A|E。日本語「兄」同型。**KEEP**【確実】(round-4 から継続)。
- **#43 so `maqaaxigan` / #45 so `Dalkan`**:近接限定辞 -gan/-kan は束縛接尾、独立指示詞なし。**KEEP**【確実】。
- **#73 / #80 系の ▼**:応用態・場所格接尾、コピュラ抱合、関係節主語の pro-drop による不足は正当類型。**KEEP**。
- **#89 zu/xh `B|C|D:litholi/fumani`**:否定環在接辞+語根で can't+find が一語。真に不可分。**KEEP**【確実】。
- **#84 zu/xh/sn/rw** の `nge-/ne-` 前置詞接頭辞+関係節:接頭辞境界が絡むため関係節分離は **要検討/KEEP寄り**。
- **om/so の SOV 格後置詞 ▼**:分離前置詞を欠くため不足は正当。**KEEP**。

### E. スコアカード(round 5)

- **新規 SPLIT 推奨(actionable)**: OPEN再掲 #45 sn・#70 om(2)＋ #46 前置詞分離(rw,zu,ln,om,wo,ig,ha,yo,ny,sw,xh,sn=12)＋ #69 形容詞分離(sw,zu,xh,sn,ny,rw,ig,ha,wo,so=10)＋ #85 数量詞分離(sn,rw,ln,wo,so,ig,ha,xh,zu,yo=10)＋ #84 関係節分離(sw,ny,yo,ig,ha=5)= 計 **39件**
- **方言自然さ修正(naturalness)**: **0**(借用素通しは話者実態として自然、新規誤りなし)
- **KEEP(正当な融合・省略と判定したフラグ)**: #46 so、#35×13、#43 so、#45 so、#89 zu/xh 否定融合、#84 zu/xh/sn/rw の接頭辞型、#73/#80 系▼群、om/so SOV▼ ほか ≒ **30件超**
- 確度: #45 sn・#70 om・#69 全件・#85 大半・#46 rw/ln/om/wo/ig は【確実】。#46 zu/ha・#85 zu/yo・#84 全件・#46 yo/ny/sw/xh/sn は【蓋然〜要検討】。

最優先は **#69(名詞+形容詞)と #85(名詞+数量詞)**:sw に分割前例があり独立語境界が明白、隣接同一を生まない低リスク・高確度バッチ。次いで #46 の前置詞「with」分離。OPEN 2件(#45 sn / #70 om)は round-4 自バッチの取りこぼしであり最優先で消化すべき。

**ファイル状態: OPEN**(actionable: B-1〜B-4 の分割バッチ ＋ A の OPEN 2件)

---

## レビュアー再評価 — round 6 (Dr. Aisha N. Okeke-Wambui / @bantuparser)

開発チームによる round-5 への明示的な「開発チーム回答」テキストはファイルに無いものの、round-5 で当方が actionable とした全項目(OPEN 2件 ＋ B-1〜B-4 の分割バッチ)を `.wf_langmap_query.mjs` でライブ照合した結果、**すべてオーケストレータ経由で実データに反映済み**であることを確認しました。以下、項目別判定。

### A. OPEN 2件(round-4 取りこぼし)— 解消を確認 ✓

1. **#45 sn** ✓ Live `A|E:「Munyika」 F:「ino」 B:「muchando」 D:「kunobva」 C:「kutonhora」`。後置独立指示詞 `ino` が F に分離済み。`Mu-`(in)+`nyika`(country)の loc接頭辞融合は維持、隣接同一なし。**accept**。
2. **#70 om** ✓ Live `A:「Suuqiin」 D:「sa'a」 E:「9」 F:「galgala」 C:「cufama」`。4-way 融合が D(at)・E(9)・F(PM)の独立3語に分割され、余剰 B も除去済み。en `D:at E:9 F:PM` と整合、隣接同一なし。**accept**。

### B. round-5 新規 SPLIT 推奨 — すべて反映を確認

#### B-1. #46「友達と」 前置詞 F「with」分離 — 12言語 ✓ ＋ so KEEP ✓
Live 確認: rw `F:n' B:inshuti G:yanjye`、zu `F:no B:mngani G:wami`、ln `F:na B:moninga G:na ngai`、om `B:hiriyyaa G:koo F:waliin`、wo `F:ak G:sama B:xarit`、ig `F:na B:enyi G:m`、ha `F:da B|G:abokina`、yo `F:bá B:ọ̀rẹ́ G:mi`、ny `F:ndi B|G:mnzanga`、sw `F:na B:rafiki G:yangu`、xh `F:no B:mhlobo G:wam`、sn `F:ne B:shamwari G:yangu`。so `B|F|G:saaxiibkay`(my=束縛接尾 -kay、with=動詞前接 la-)は分離前置詞を欠くため **KEEP**(当方も【確実KEEP】と判定済み)。全件隣接同一なし。**accept**。

#### B-2. #69「長い手紙」 形容詞 G「long」分離 — 10言語 ✓
Live 確認: sw `B:barua G:ndefu`、zu `B:incwadi G:ende`、xh `B:ileta G:ende`、sn `B:tsamba G:refu`、ny `B:kalata G:yaitali`、rw `B:urwandiko G:rurerure`、ig `B:akwụkwọ ozi G:ogologo`、ha `G:doguwar B:wasika`(形容詞前置、語順正)、wo `B:bataaxal G:bu gudd`、so `B:warqad G:dheer`。冠詞 F(=a)はバントゥに実現形なしで正当省略。後続 C|H とも隣接同一なし。**accept**。

#### B-3. #85「もっと水を」 数量詞 E「more」分離 — 10言語 ✓(zu/yo の役割混入是正含む)
Live 確認: sn `B:mvura E:yakawanda`、rw `B:amazi E:menshi`、ln `B:mai E:mingi`、wo `B:ndox E:bu bari`、so `B:biyo E:badan`、ig `B:mmiri E:karịa`、ha `B:ruwa E:mai yawa`、xh `B:amanzi E:amaninzi`。**zu** は当方指摘どおり役割letter混入が是正され Live `D:Kufanele C:uphuze B:amanzi E:amaningi`(動詞 C・水 B・more E に三分)。**yo** も `E:sí i`(more)単独化を確認(water は D 側 `mu omi` に既出)。全件隣接同一なし。**accept**。

#### B-4. #84「先週」 関係節 E「last」分離 — sw/ny/yo/ig/ha ✓ ＋ zu/xh/sn/rw KEEP寄り ✓
Live 確認: sw `D:wiki E:iliyopita`、ny `D:sabata E:yatha`、yo `D:ní ọ̀sẹ̀ E:tó kọjá`、ig `D:izu E:gara aga`、ha `D:makon E:da ya gabata`。前置詞接頭辞 nge-/ne- が week に融合する zu `D|E:ngesonto eledlule`・xh `D|E:iveki edlulileyo`・sn `D|E:svondo rapfuura`・rw `D|E:icyumweru gishize` は接頭辞境界が絡むため当方も【要検討/KEEP寄り】とした通り D|E 維持で妥当。**accept**。

### C. 方言・借用語の自然さ(DIMENSION 2)— 新規 actionable なし

round-5 で点検した借用素通し(ln #89 `mot de passe`、#52 wo `porte monnaie`、#77 wo `résultat`、#52 ha `walat`)は当該話者の口語実態として自然で誤りではなく、置換不要との当方判断は変わらず。本グループに固有方言行は存在せず、「もっともらしいが実は不自然」な行も新たに検出されず。**naturalness の新規 actionable は 0**。

### D. 新規指摘

なし。全 applied 分割で隣接同一 role-letter の生成も無いことを確認(例: #46 om `B-G-F`、#69 ha `G-B`、#85 zu `D-C-B-E`、#84 各語 `D-E` いずれも重複なし)。

### E. CONCEDE(再確認)

round-2 の #5 ln(D-C-D)・#29 ny(galimoto)・#92 so(sambuso)は引き続き受容、蒸し返さず。round-4/5 で KEEP/要検討に留めた借用素通し、so `saaxiibkay`/`maqaaxigan`/`Dalkan` の近接限定辞・束縛接尾、zu/xh proclitic 指示詞・否定融合、#77 om/so の格接尾型、#84 zu/xh/sn/rw の接頭辞型も開発判断を受容。本ラウンドでの新規 CONCEDE は 0。

### F. スコアカード(round 6)

- OPEN 2件(#45 sn・#70 om): ✓ 解消・ライブ反映確認
- B-1 #46(12言語 + so KEEP)・B-2 #69(10言語)・B-3 #85(10言語 + zu/yo 役割是正)・B-4 #84(5分割 + 4 KEEP寄り): すべてライブ反映を確認(APPLIED 詐称 0)
- ✓ accept: 上記すべて
- △ 未対応(actionable): **0**
- ✗ reject(反論失当): 0
- 新規指摘: 0
- 本ラウンド CONCEDE: 0

round-1〜2 の語義/role 誤り、round-4 の主要 4-way/3-way 過剰融合、round-5 の取りこぼし 2件＋追加分割バッチ(#46/#69/#85/#84)が**すべて解消・ライブ検証完了**。残る actionable な課題はありません。借用素通しの整合(ln #89 等)は話者実態として自然な既知の限界として受容します。

**ファイル状態: CLOSED — 残課題なし**(借用素通しの語彙整合は「既知の限界=話者口語として自然」として明示残置。これはループ終了方針に基づく受容であり actionable な修正要求ではない。)

## 包括スイープ — 群29 全複合セル一括判定 (作業者 round 9)

全 27 文の複合(|)セルを `node .wf_langmap_query.mjs` でライブ検証し、分割優先方針 + fix-all-variants で判定した。

### SPLIT 集計
- #13: yo (D|B「fún mi」→ D「fún」/B「mi」、2トークン)
- #35: sn/ny (E名詞+A所有の2トークン語順 → 分割)
- #43: yo/ln/wo (A前置詞+E名詞 分割)、zu/xh (E名詞「ndawo…」を A|D「kule/kwale」から分離=部分分割)
- #45: yo/ha/ln (E前置詞+A国名+F指示 分割)、ig/zu/xh/ny (融合 E|A から F/A の単独トークンを分離=部分分割)
- #48: yo/ig/ha/zu/xh/sn/ny/rw/ln/wo/om (B映画+E指示 全分割 — 強い fix-all-variants)
- #49: yo/ha/xh/ny/ln/wo/so/om (E道 / (C関係節)+F前置詞 / G空港 に分解)
- #50: yo/ig/ha/zu/xh/sn/ny/rw/ln/wo/om (A犬+E所有 全分割)
- #51: yo/ig/zu/xh/sn/ny/ln/wo/om (A祖母+E所有 分割)
- #52: なし(全 KEEP)
- #53: A|D — yo/ha/ln/wo (D前置詞+A庭 2トークン)、rw「zo mu」+busitani、om「Qonnaa」+keessatti(接尾辞語だが独立トークン語); C|E — yo/ha/sn/ln/wo/om (E助動詞+C動詞 の2トークン分離)
- #69: C|H — sw/yo/ig/ha/ny/rw/ln/wo (H前置詞「kwa/sí/nye/ga/ku/epai ya/ko」が独立トークン → 分離); B|F|G — yo/ln/om (G長い「gígùn/molai/dheeraa」を分離=部分分割)
- #70: yo/ig/ha/ny/rw/ln/wo/so (D於+B時+E数字+F午後/夜 の時刻表現を全分解)
- #73: A|E 11言語、B|F yo/ig/ha/ny/rw/ln/wo/om、C|G 12言語 (全晩/夜 等 全分割)
- #77: yo/ha/ny (D於+B結果+E試験 全分割)、zu/xh/sn/om (融合から単独トークンを分離=部分)、so (B結果+E試験)
- #80: B|F 11言語(zu のみ KEEP)、C|G 9言語(ha/zu のみ KEEP)
- #84: zu/xh/sn/rw/ln/wo/so/om (D週+E先 全分割)
- #85: ny/om (B水+E量「ambiri/dabalata」 分割)
- #89: yo「kò lè」/om「hin dandeenye」 (C否定+B可能 の2トークン分離)

### KEEP 理由 (言語学的不可分のもの)
- 統合動詞(時制内蔵の単一語形): #1 sw「niliyoiona」(ni-li-yo-i-ona)、#46 全 E|H(talk+ed=単一動詞)、#52 全 C|H(lost+過去)、#53 ig/zu/xh/ny/rw/sw の C|E(na-/zi-/-ya- 接頭辞内蔵の1語)。
- 接尾/接頭融合の所有・指示・格・処格: #35 ha「ɗan'uwana」zu「Umfowethu」so「Walaalkay」(所有接尾)、#50/#73 so「Eygaygu/Bisadaydu」、#51 ha「Kakkata」rw「Nyogokuru」so「Ayeeyaday」sw「Bibi」(所有省略/融合)、#48 so「filimkaas」(-kaas指示接尾)、#43 ig「n'ụlọ」sn「paresitorendi」om「kanatti」(処格融合1語)、#45 sn「Munyika」so「Dalkan」(処格+指示融合)、#52 全 D|F「sokoni/n'ahịa/emakethe/pamusika/suuqa」(処格接尾/前接辞融合1語)、#53 sw「bustanini」ig「n'ubi」zu/xh「engadini」sn「mugadheni」ny「am'dimba」so「beerta」、#73 B|F zu「embhedeni」xh「ebhedini」sn「pamubhedha」so「sariirtayda」(処格融合+所有分割で C+C 隣接発生)。
- 単一トークン概念(別役割の独立語なし): #38 ln「awa」wo「fii」so「halkan」(「from here」=1語)、#9 sw「Japan」(D+E一語)、#43 ha「gidan abinci」(at省略)、#80 ha「mai daraja」(experience語なし)、zu C|G「kwamanye amazwe」(役割錯綜)。
- 否定接頭・可能融合の単一語: #89 sw「Siwezi」zu「litholi」xh「fumani」ln「kokí」wo「Manaa」。
- 部分分割で同役割隣接を生む: #69 zu/xh/sn「kubazali bakhe 等」(to融合+所有分割→C+C)、om「maatii isaatiif」(-tiif接尾)。

SPLIT 総数: 約 120 セル / KEEP: 上記の不可分群。語義・語順は各文の en/ja 参照および兄弟変種と整合確認済み。サーフェスはトークン境界のみで再分割、文字改変なし。
