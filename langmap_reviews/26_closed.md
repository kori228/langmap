# LangMap データレビュー #26 — Austronesian — Pacific & Madagascar

## レビュアー自己紹介 (ペルソナ)

**Dr. Teuira Mānoa-Rakotovao**（ハンドル: `@reo_moana`）。オークランド大学で太平洋言語学の博士号を取得し、現在はハワイ大学マノア校の言語復興センターに所属するオーストロネシア語比較統語論の専門家。Māori と Hawaiian の動詞句（TAM 標識）統語論を最も得意とし、Bruce Biggs *Let's Learn Maori* / *English–Maori Maori–English Dictionary*、Mary Kawena Pukui & Samuel Elbert *Hawaiian Dictionary*、Albert Schütz *Spoken Fijian* と R. Gatty *Fijian–English Dictionary*、G.B. Milner *Samoan Dictionary*、Lewis Josephs *Palauan Reference Grammar* / *New Palauan–English Dictionary*、そして Malagasy については *Rakibolana Malagasy*（マダガスカル・アカデミー）と Rajaona の統語論研究を一次資料として常用する。ポリネシア諸語（mi/haw/sm）の述語先頭（VSO 系）構造と TAM 助詞の切り出しに最も自信があり、fj の前置詞 *e/ena* の用法、pau の動詞接頭辞、mg の VOS 語順と環境接辞にも踏み込んで判断する。

## 検証範囲

mi, haw, sm, fj, pau, mg の全6言語 × 全100文を通読し、`.wf_langmap_query.mjs` でライブ `data.js` と #1, #13, #33, #35, #66, #81, #87, #89, #90, #94 のセルを照合（スライスとライブは完全一致を確認）。特に (1) ポリネシア諸語の TAM 助詞＋動詞の切り出し、(2) fj の前置詞綴り、(3) pau の英語直挿入（プレースホルダ的データ）、(4) mg の VOS 後置主語の役割付与、を重点的に点検した。全体として TAM 標識と語順の整合は概ね良好だが、明確な綴り・語彙・データ誤りを以下に列挙する。

## 指摘事項 (Issues found)

### 1. #66 fj「na uthe」— 綴り誤り（存在しない字 *th*）【確実】
- **Current:** C:「E ubia」 A:「na ulunivanua」 B:「na uthe」
- **Problem:** フィジー語に *th* という綴りは存在しない。標準フィジー語正書法では各子音字が独自の音価を持ち、「雪」は **uca**（c = [ð]）。*uthe* は英語式に [θ]/[ð] を *th* と綴った非フィジー語表記で、ネイティブには読めない。なお #20 では同じ書き手が正しく「uca」を雨に使っているなど c の綴りは把握しているはずで、これは単純な誤記。
- **Proposed fix:** B:「na uca」（語順・役割はそのまま）
- 【確実】

### 2. #33 fj「totolo sara」— 語彙誤り（totolo =「速い/這う」）【確実】
- **Current:** B:「E」 C:「totolo sara」 D:「savasava」 A:「na rumu ni otela」
- **Problem:** 程度副詞「とても（清潔）」を表すべき位置に **totolo**（「速い」「這う」の意）が入っている。「清潔（savasava）」を強める副詞は **vakalevu**（とても）か **sara**（強意）であり、*totolo* は意味的に無関係。同じ書き手は #5/#18 等で「vakalevu」を程度副詞に正しく使っている。おそらく「totoka（美しい/良い）」または単なる打ち間違い。
- **Proposed fix:** C:「sara vakalevu」 もしくは C:「vakalevu」（清潔をとても強める副詞）。役割 C のまま。
- 【確実】

### 3. #94 pau — セル全体が英語のプレースホルダ（lernyng / openeth）【確実】
- **Current:** A:「Lernyng」 B:「el tekoi」 C:「openeth」 D:「beches el」 E:「rael」
- **Problem:** 「Lernyng」は英語 *learning* の綴り崩し、「openeth」は古英語風の英語動詞であって、いずれもパラオ語ではない。パラオ語で「学ぶ」は *suld/mesuld*、「開く」は *tobed/meketmokl/mengai* 系。現状は他言語のデータをパラオ語化せず英単語を疑似綴りで置いた未完成データ。
- **Proposed fix:** 例: B:「A osisechakl」 A:「er a tekoi」 C:「a meketmokl」 D:「a beches el」 E:「tuangel」 程度の自然なパラオ語に差し替え（語順は ja の B-A-C-E-D 主題構造に合わせて要再構成）。少なくとも *Lernyng/openeth* は撤去必須。
- 【確実】

### 4. #91 pau「openeth」系と同様 — #94 と一貫しない英語残留（custom）【蓋然】
- **Current:** A:「A omes er a sakura」 D:「a」 B:「Iapan el」 C:「custom」
- **Problem:** 役割 C「伝統/慣習」に英語 **custom** がそのまま残っている。パラオ語には *siukang*（慣習・伝統、日本語「習慣」由来の借用だが定着語）があり、これを使うのが自然。pau 行は #1「suit」, #6「university」, #11「buk/stoang」, #87「app」など英借用が多いが、*custom* のような基礎語まで未翻訳なのは他文との一貫性を欠く。
- **Proposed fix:** C:「siukang」（役割そのまま）
- 【蓋然】

### 5. #89 mg — 否定語 *Tsy* が役割 A（主語 "I"）に誤付与【確実】
- **Current:** A:「Tsy」 D:「hitako」 E:「ny」 G:「tenimiafina」 F:「Wi-Fi」
- **Problem:** 役割 A は en の「I」（主語）に対応する色。マダガスカル語の **Tsy** は否定辞（en では B「can」+ C「't」に相当）であって主語ではない。さらにこの mg 文には主語 *aho*（私）が surface に現れていない（*hitako* の接尾 -ko が主語を抱合）。否定辞を A に塗ると「主語＝Tsy」という誤った色対応になる。比較すると haw は C:「ʻAʻole」（否定）を正しく否定の色に置いている。
- **Proposed fix:** 否定辞は en の否定色に合わせ **B|C:「Tsy」**、抱合主語は A:「‌-ko」（hitako の -ko を ZWNJ 接尾セグメントとして分離）か、最低限 A ラベルを Tsy から外す。例: B|C:「Tsy」 D:「hita」 A:「‌ko」 E:「ny」 G:「tenimiafina」 F:「Wi-Fi」。
- 【確実】

### 6. #35 fj「na lailai」/ 文全体 — #31 と取り違えたデータ混入【確実】
- **Current (#31 fj):** C:「E tiko」 A:「na lailai」 B:「e na Moniti mai」（試験は来週の月曜日だ）
- **Problem:** #31「試験は来週の月曜日だ」で主語「試験（the exam）」の位置に **na lailai**（lailai =「小さい」）が入っている。「試験」は fj で *vakadidike / sivi* 等で、*lailai*（小さい）は完全な無関係語。「E tiko na lailai…」は「小さいのが…にある」となり原文と意味が合わない。おそらく別文からの取り違え。
- **Proposed fix:** A:「na sivi」 もしくは A:「na vakadidike」、述語も「E na…（未来）」が自然: C:「E na」 A:「na sivi」 B:「e na Moniti mai」。
- 【確実】

### 7. #77 fj — 役割語彙が全面的に原文と不一致（vakaduavata / ivolataki ni lailai）【確実】
- **Current:** C:「E a vakaduavata kina」 A:「koya」 B|D|E:「na ivolataki ni lailai」
- **Problem:** 原文「彼はテストの結果に驚いた」。**vakaduavata** は「一致させる/合意する」で「驚く（kurabui）」ではない。さらに B|D|E「テストの結果」を **ivolataki ni lailai**（lailai =「小さい」）と訳しており、#31 と同じ *lailai* 取り違えが「テスト」位置に再発している。fj で「テスト」は *sivi/vakadidike*、「結果」は *vua/itukutuku ni sivi*。
- **Proposed fix:** C:「E a kurabui」 A:「koya」 B|D|E:「e na vua ni sivi」。
- 【確実】

### 8. #1 mg — 後置主語 *aho* が文頭 *Te* と同じ役割 A で二重塗り【蓋然】
- **Current:** A:「Te」 C:「hitsapa」 … J:「manandrify ny」 K:「hotely」 A:「aho」
- **Problem:** 文頭 **Te**（「〜したい」の願望助詞、reduced *te ho*）と文末 **aho**（主語「私」）の両方が役割 A。Te は願望のモーダルであり主語ではない。プロジェクトの方針（モーダルは参照言語の役割に合わせ、主語 A と別にする）に照らすと、Te は en の B「want to」に対応させるべき。後置主語 aho のみ A が正しい。同型の問題は #9, #22, #32, #44, #58, #62, #71, #98 の mg 行（いずれも「Te … aho」で Te を A 表記）に共通する系統的誤り。
- **Proposed fix:** 文頭を **B:「Te」**（願望モーダル）に、文末 A:「aho」は維持。例 #1: B:「Te」 C:「hitsapa」 … A:「aho」。同パターンを mg の他の願望文にも一括適用。
- 【蓋然】

### 9. #5 mg「kafe ity」/ #43・#62 等 — 限定詞 *ity…ity* の枠が役割 A と B にまたがる扱いの不統一【要検討】
- **Current (#5 mg):** C:「Tena」 D:「matsiro」 A:「ity」 B:「kafe ity」
- **Problem:** マダガスカル語の指示は *ity X ity*（前後挟み）で一語の枠。現状は前半 *ity* を A（「この」）、後半を含む *kafe ity* を B にしているが、#12 では「valan-javaboary ity」、#43 では「ity toerana… ity」を A|D|E 合成セルにまとめており、同じ枠構造の切り方が文ごとに不統一。表現自体は自然なので語順誤りではないが、挟み込み *ity…ity* の分割規則を mg 内で統一すべき。
- **Proposed fix:** 規則統一を推奨。例: 前 *ity* = A、名詞 = B、後 *ity* = A（指示の枠として A に戻す）。データ提供者判断。
- 【要検討】

### 10. #90 pau「mla mengesuch」— 完了相 *mla* + 動詞だが「独学で」の C が冗長直訳【要検討】
- **Current:** A:「Ngii」 D:「mla mengesuch」 B:「a programming」 C:「er ngii el di ngar er ngii」
- **Problem:** C「独学で（by himself）」を *er ngii el di ngar er ngii*（直訳的「彼自身に在って」）と長く綴っているが、パラオ語の自然な「独りで/自力で」は *el ngii a di telkib* ではなく **el di ngii**（彼だけで）で足りる。現行は冗長で口語的でない。なお B「programming」は #6「university」等と同様の英借用許容範囲。
- **Proposed fix:** C:「el di ngii」（彼自身だけで）。役割 C のまま。
- 【要検討】

### 11. #87 mi「pai」/ #18・#5 等 — 形容詞述語 *He tino + 形容詞* の役割分割は概ね妥当だが #87 で D が単独「pai」【要検討】
- **Current:** C:「He tino」 D:「pai」 A:「tēnei」 B:「taupānga」
- **Problem:** 原文「便利だ（convenient）」に対し D:「pai」（=良い/便利の汎用語）。Māori に「便利」を表す専用形容詞 *whaihua/āhei* もあるが、口語では *pai* で十分自然。一方で *He tino pai* の *tino*（とても）を C（「very」）、*pai* を D（「convenient」）に割るのは妥当。指摘は語彙の弱さのみで、誤りとまでは言えない。表現としては許容範囲だが、より精確には D:「whaihua」。
- **Proposed fix:**（任意）D:「whaihua」。役割そのまま。
- 【要検討】

### 12. #66 mi「e te marangai mātao」/ #84 — 「風邪」を「冷たい雨/嵐」と訳す不自然さ【蓋然】
- **Current (#84 mi):** C:「I pangia」 A:「ia」 B:「e te marangai mātao」 D|E:「i te wiki kua hori」
- **Problem:** 原文「風邪をひいた（caught a cold）」の「風邪」を **marangai mātao**（「冷たい嵐/悪天候」）と訳している。Māori で病気の「風邪」は **rewharewha**（インフルエンザ/風邪）または **mate huango/mate makariri** が普通で、*marangai*（嵐・荒天）は気象語であり病名ではない。受動 *pangia*（襲われた）の主語に天候語を置くと「冷たい嵐に襲われた」となり原意とずれる。
- **Proposed fix:** B:「e te rewharewha」（役割 B のまま）。
- 【蓋然】

### 13. #92 sm/fj/pau — 「餃子」を未翻訳の英語 *dumpling* / 日本語ローマ字 *gyoza* のまま【蓋然】
- **Current:** sm B:「dumpling」 / fj B:「na dumpling」 / pau B:「a gyoza」
- **Problem:** 同一文 #92 内で mi は「ngā tōtiti」、haw は「nā pepeiao」と現地語化しているのに、sm・fj は英語 *dumpling*、pau は *gyoza* を残しており、グループ内で翻訳粒度が不統一。借用で良いとしても、せめて冠詞・前置の整合（fj の *na dumpling* は借用名詞として許容だが）と、3言語で同じ方針（英 *dumpling* か日 *gyoza* か）に揃えるべき。
- **Proposed fix:** 方針統一（例: 全て *dumpling* に統一、または fj/sm も日本料理文脈に倣い *gyoza*）。最低限 pau だけ *gyoza*、他は *dumpling* の不統一を解消。
- 【蓋然】

### 14. #81 mi — 役割 C「today」相当が日付語と融合し B に「i tēnei rā」が紛れ込む【要検討】
- **Current:** C:「He mamae」 A:「tōku」 B:「māhunga i tēnei rā」
- **Problem:** 原文 ja は C:「今日」を独立役割に持つ。mi では *i tēnei rā*（今日）が B「māhunga（頭）」セルの末尾に吸収されており、「今日」の役割（en では C「today」）が独立セグメントとして現れていない。これは語順は自然だがセグメント分割が原文の役割数と合わない（B に2役割が混在）。
- **Proposed fix:** B:「tōku māhunga」を A+B に整理し、C:「i tēnei rā」を時の役割として分離。例: A:「tōku」 B:「māhunga」 C:「i tēnei rā」（先頭の He mamae は述語役割のまま）。
- 【要検討】

### 15. #15 / #57 / #30 等 — sm/fj で主語 *ia/koya* が文末、述語が D/E 先頭：語順は妥当だが #57 sm で C「fluently」位置が「lelei」【要検討】
- **Current (#57 sm):** D:「E tautala」 B:「tolu gagana」 C:「lelei」 A:「ia」
- **Problem:** 「流暢に（fluently）」を **lelei**（「良い/上手に」）と訳している。Samoan で「流暢に」は *lelei*（上手）でも通じるが、より精確には *māfai lelei* や *poto*（巧み）。一方 mi/haw は同文で *matatau/mākaukau*（流暢）と精確な語を使っており、sm だけ汎用「良い」で弱い。誤りではないが精度差。
- **Proposed fix:**（任意）C:「lelei tele」 か C:「mafai lelei」。役割そのまま。
- 【要検討】

### 16. #43 fj「mai na vale ni kana oqo」— 「この」を表す A|D|E に *mai*（〜から）が混入【蓋然】
- **Current:** C:「E totoka」 B:「na kakana」 A|D|E:「mai na vale ni kana oqo」
- **Problem:** 原文「このレストランの料理」は所属（of/at this restaurant）であって起点（from）ではない。*mai*（〜から/起点）を冠すると「このレストランから来た料理」という移動の含意になる。所属なら *e na/ni*（of）が自然。比較で mg は *ato amin'ity…ity*（in/at this）と所在で正しく処理。
- **Proposed fix:** A|D|E:「ni na vale ni kana oqo」 または「e na vale ni kana oqo」。
- 【蓋然】

## 総評

mi・haw の TAM 標識（Kei te / Ka / Ua / E…ana / Ke…nei、Makemake au、Hiki iā…）と VSO 語順、ならびに sm・fj の述語先頭＋後置主語（… ia / … koya）の処理は全般に正確で、ポリネシア部分のデータ品質は高い。明確に修正を要するのは (1) fj の綴り・語彙取り違え（#66 *uthe*、#33 *totolo*、#31/#77 *lailai*）、(2) pau の英語プレースホルダ残留（#94 *Lernyng/openeth*、#91 *custom*）、(3) mg の否定辞・願望モーダルの役割誤付与（#89 *Tsy*=A、#1 系 *Te*=A）。これらは語順そのものより語彙・データ完成度と役割ラベルの問題で、developer が直接適用できる修正を上に明示した。

## 開発チーム回答 — round 1 (作業者)

ライブ `data.js` を `.wf_langmap_query.mjs` で逐一照合した上での判断。

1. **#66 [fj] B「na uthe」 → APPLIED**（B:「na uca」）。標準フィジー語正書法に th はなく、雪は uca(c=[ð])。#20 で同筆者が uca を正しく使う。語順・役割保持。
2. **#33 [fj] C「totolo sara」 → APPLIED**（C:「sara vakalevu」）。totolo=速い/這う で程度副詞にならない。清潔を強める副詞句 sara vakalevu へ。役割 C 保持。
3. **#94 [pau] 英語プレースホルダ → APPLIED**。Lernyng/openeth は英語疑似綴りでパラオ語でない。ja の主題構造(B-A-C-E-D)に合わせ reviewer 提案の自然形へ: B:「A osisechakl」 A:「er a tekoi」 C:「a meketmokl」 D:「a beches el」 E:「tuangel」。
4. **#91 [pau] C「custom」 → APPLIED**（C:「siukang」）。custom は基礎語の未翻訳。定着借用語 siukang へ。役割保持。
5. **#89 [mg] 否定辞 Tsy=A 誤付与 → APPLIED**。役割 A=「I」(en主語)。Tsy は否定辞(en B「can」+C「't」)。haw が C に否定を置くのと整合。分割優先方針に従い hitako を hita(D=find)+‌ko(A=I,ZWNJ接尾)へ分割: B|C:「Tsy」 D:「hita」 A:「‌ko」 E:「ny」 G:「tenimiafina」 F:「Wi-Fi」。
6. **#31 [fj] A「na lailai」 → APPLIED**（C:「E na」 A:「na sivi」 B:「e na Moniti mai」）。lailai=小さい で「試験」でない。別文取り違え。未来 E na + 試験 sivi へ。
7. **#77 [fj] vakaduavata/ivolataki ni lailai → APPLIED**（C:「E a kurabui」 A:「koya」 B|D|E:「e na vua ni sivi」）。vakaduavata=一致させる で「驚く」でない。lailai 取り違えも再発。驚く kurabui・テスト結果 vua ni sivi へ。
8. **#1 [mg] 願望助詞 Te=A 二重塗り → APPLIED**。文頭 Te(願望モーダル)と文末 aho(主語I)が両方A。モーダルは参照言語役割(en B「want to」)に合わせる方針。文頭を **B:「Te」** に、aho は A 維持。系統的問題(#9/#22/#32/#44/#58/#62/#71/#98)の指摘は妥当だが、本ラウンドは reviewer が現値を明示した #1 のみ適用。他文は次ラウンドで各 Te セル現値を確認の上一括適用したい(現値未確認のセルを盲目修正しない方針)。
9. **#5 [mg] ity…ity 枠の分割不統一 → HELD**。reviewer も【要検討】「語順誤りでない」。挟み込み指示の分割規則統一は方針判断事項で、現状(A:ity / B:kafe ity)も自然。誤りでないため変更せず、規則統一は別途方針合意の上で一括対応すべき。
10. **#90 [pau] C 冗長直訳 → HELD**。reviewer も【要検討】「誤りでない」。er ngii el di ngar er ngii は冗長だが非文ではなく、簡潔形 el di ngii への置換は文体選好。明確な誤りでないため保留。
11. **#87 [mi] D「pai」 → HELD**。reviewer も【要検討】「許容範囲・誤りでない」。pai は便利の汎用語として自然。whaihua は任意改善で必須でない。保留。
12. **#84 [mi] B「marangai mātao」 → APPLIED**（B:「e te rewharewha」）。marangai=嵐/荒天 は気象語で病名「風邪」でない。受動 pangia の主語に天候語は原意とずれる。rewharewha(風邪)へ。役割 B 保持。
13. **#92 [sm/fj/pau] 餃子の翻訳粒度 → HELD（部分）**。ライブ: sm「dumpling」, fj「na dumpling」, pau「a gyoza」, mi「ngā tōtiti」, haw「nā pepeiao」。借用自体は本プロジェクトで許容範囲(pau は #1 suit, #6 university 等借用多数)。「方針統一」は明確な誤りでなく選好のため、データは変えない。なお同 #92 は他グループ(06)で ca「dumplings」未訳を raviolis に修正済み。sm/fj/pau の統一方針が合意されれば次ラウンドで対応。
14. **#81 [mi] 「今日」融合 → APPLIED**。役割 C=「today」(en/ja)。i tēnei rā が B「māhunga i tēnei rā」末尾に吸収され C 役割が独立していない。分割優先方針に従い A:「tōku」 B:「māhunga」 C:「i tēnei rā」へ分離(先頭 He mamae は述語役割保持)。
15. **#57 [sm] C「lelei」 → HELD**。reviewer も【要検討】「誤りでない・精度差」。lelei は「流暢に」として通じ、任意改善。明確な誤りでないため保留。
16. **#43 [fj] mai 混入 → APPLIED**（A|D|E:「e na vale ni kana oqo」）。原文は所属(of/at this restaurant)で起点(from)でない。mai は移動含意。mg が ato amin'ity…ity(所在)で正しく処理する点と整合。e na(of)へ。

## レビュアー再評価 — round 2 (Dr. Teuira Mānoa-Rakotovao / @reo_moana)

ライブ `data.js` を `.wf_langmap_query.mjs` で全件再照合した上での判定。

- **#66 [fj] → ✓ 承認。** ライブ確認: B:「na uca」。標準正書法の c=[ð] で雪。語順・役割保持。完了。
- **#33 [fj] → ✓ 承認。** ライブ確認: C:「sara vakalevu」。totolo(速い)から程度副詞句へ正しく差替。役割 C 保持。完了。
- **#94 [pau] → ✓ 承認。** ライブ確認: B:「A osisechakl」 A:「er a tekoi」 C:「a meketmokl」 D:「a beches el」 E:「tuangel」。英語プレースホルダ Lernyng/openeth 撤去済み。ja 主題構造に整合。完了。
- **#91 [pau] → ✓ 承認。** ライブ確認: C:「siukang」。custom(基礎英単語)から定着借用語へ。役割保持。完了。
- **#89 [mg] → ✓ 承認。** ライブ確認: B|C:「Tsy」 D:「hita」 A:「‌ko」 E:「ny」 G:「tenimiafina」 F:「Wi-Fi」。否定辞を否定色へ、hitako を hita+‌ko(ZWNJ 接尾主語)へ分割。隣接同役なし。分割優先方針にも合致。完了。
- **#31 [fj] → ✓ 承認。** ライブ確認: C:「E na」 A:「na sivi」 B:「e na Moniti mai」。lailai(小さい)取り違えを試験 sivi+未来 E na へ修正。完了。
- **#77 [fj] → ✓ 承認。** ライブ確認: C:「E a kurabui」 A:「koya」 B|D|E:「e na vua ni sivi」。驚く kurabui・テスト結果 vua ni sivi へ。lailai 再発も解消。完了。
- **#1 [mg] → ✓ 承認。** ライブ確認: B:「Te」… A:「aho」。願望モーダル Te を en B「want to」役へ、後置主語 aho のみ A。二重塗り解消。完了。
- **#8 系統 (#9/#22/#32/#44/#58/#62/#71/#98 の Te) → △ 部分。【新規/未完の actionable あり】** dev は「他文は次ラウンドで現値確認の上一括」とした。round 2 で全件をライブ照合し、en「want to」の役割色と mg「Te」の役割を突合した結果:
  - #22 (en E / mg E), #32 (en E / mg E), #44 (en D / mg D), #58 (en E / mg E), #62 (en E / mg E), #71 (en D / mg D) → **既に正しい**（Te が en の want-to 色に一致）。これら6文は是正不要。指摘#8の「系統的誤り」という当方の見立ては過大で、ここは **CONCEDE**(6/8 は問題なし)。
  - **#9 → ✗ 未修正。** ライブ: `A:「Te」 … A:「aho」`。en は B:「want to」。Te を A(主語)に塗ったままで、しかも aho と **役割 A が二重**。指摘#8 で明示列挙した文であり、明確な誤り＋重複役のまま残存。
  - **#98 → ✗ 未修正。** ライブ: `A:「Te」 … A:「aho」`。en は B:「want to」。#9 と同型の Te=A 二重塗り。指摘#8 で列挙済み。未修正。
  - 「現値未確認のセルを盲目修正しない」方針は妥当だが、#9/#98 の現値は本 round で確定済み(上記)。残る actionable はこの2文のみ。
- **#5 [mg] ity…ity 分割不統一 → ✓ HELD 承認。** 当方も【要検討】で「語順誤りでない」。挟み込み指示の規則統一は方針合意事項。CONCEDE。
- **#90 [pau] C 冗長 → ✓ HELD 承認。** 当方も【要検討】。`mla mengesuch` の完了辞 mla を分割する案も検討したが、en 側 D:「learned」が単一役で対応役色がなく、分割すると参照に存在しない役を新設することになるため不適。文体選好にとどまるため保留を支持。CONCEDE。
- **#87 [mi] D「pai」 → ✓ HELD 承認。** 当方も「許容範囲」。CONCEDE。
- **#84 [mi] → ✓ 承認。** ライブ確認: B:「e te rewharewha」。気象語 marangai から病名 rewharewha へ。役割 B 保持。完了。
- **#92 [sm/fj/pau] 餃子 → ✓ HELD 承認。** ライブ: sm「dumpling」/ fj「na dumpling」/ pau「a gyoza」。借用は本プロジェクトで許容範囲。明確な誤りでなく方針選好。CONCEDE。
- **#81 [mi] → ✓ 承認。** ライブ確認: C:「He mamae」 A:「tōku」 B:「māhunga」 C:「i tēnei rā」。今日を独立 C へ分離。2つの C は隣接せず(間に A,B)隣接同役違反なし。完了。
- **#57 [sm] C「lelei」 → ✓ HELD 承認。** 当方も【要検討】「精度差」。CONCEDE。
- **#43 [fj] → ✓ 承認。** ライブ確認: A|D|E:「e na vale ni kana oqo」。起点 mai を所属 e na へ。完了。

### スコアカード (round 2)
- 適用要求 16 項目: 承認 ✓ = 14（うち HELD 妥当承認 5）, 部分 △ = 1（#8 系統: 6/8 正・2/8 未修正）, 却下 ✗ = 0。
- 当方の CONCEDE: 6 件（#5 / #90 / #87 / #92 / #57 の HELD、および #8 系統のうち #22/#32/#44/#58/#62/#71 が既に正しかった見立て過大の撤回 = まとめて 1 件の系統的譲歩）。実カウント: HELD 5 + 系統見立て撤回 1 = 6。
- 新規 actionable: 0 件（#9/#98 は既存指摘#8 の未消化分であり新規ではない）。
- 残課題: **#9 と #98 の mg「Te」が役割 A のまま（en B「want to」と不一致 + aho と二重 A）。**

**ファイル状態: OPEN**
次にやること: #9 mg と #98 mg の文頭「Te」を `A` から、それぞれの en「want to」の役割色（#9=B, #98=B）へ付け替える（後置主語 aho の A は維持、これで A の二重塗りも解消）。これのみで CLOSED 可。

## 開発チーム回答 — round 2 (作業者)

### #8 系統 (#9 / #98 mg 願望助詞 Te=A 二重塗り) — APPLIED
レビュアーの round2 ライブ照合(#22/#32/#44/#58/#62/#71 は既に正しく是正不要、残るは #9/#98 のみ)を当方も再確認した。
- #9 mg ライブ: `A:「Te」 C:「handeha」 D:「any」 E:「Japana」 F:「amin'ny taona」 G:「ho avy」 A:「aho」`。en は `A:「I」 B:「want to」 …`。文頭 Te(願望モーダル) が A役、文末 aho(主語I) も A役で **A が二重**。
- #98 mg ライブ: `A:「Te」 C:「hanafatra」 D:「io」 E:「sakafo io」 A:「aho」`。en は `A:「I」 B:「want to」 …`。同型の Te=A 二重塗り。
- 方針(モーダル/助動詞は参照言語の役割色に合わせる)に従い、文頭 Te を en「want to」の役割色 **B** へ retag。後置主語 aho の A は維持。これで A の二重塗りも解消し、隣接同役も生じない(間に C…が介在)。round1 で適用済みの #1 と完全同型の処理。
- 対象2文: #9 / #98。(applied by orchestrator this round)

これで #8 系統の残 actionable(#9/#98)は解消。レビュアーが「これのみで CLOSED 可」とした残課題を消化。ファイル状態: CLOSED 見込み。

## レビュアー再評価 — round 3 (Dr. Teuira Mānoa-Rakotovao / @reo_moana)

ライブ `data.js` を `.wf_langmap_query.mjs` で残課題を中心に再照合した上での最終判定。

### round 2 の残課題（#8 系統 #9 / #98）の検証

- **#9 [mg] → ✓ 承認（修正確認済み）。** ライブ確認: `B:「Te」 C:「handeha」 D:「any」 E:「Japana」 F:「amin'ny taona」 G:「ho avy」 A:「aho」`。en は `A:「I」 B:「want to」 …`。文頭 Te(願望モーダル)が en「want to」の役割色 **B** へ正しく retag され、後置主語 aho のみ A。A の二重塗りが解消し、隣接同役なし(間に C…G が介在)。round1 の #1 と完全同型。完了。
- **#98 [mg] → ✓ 承認（修正確認済み）。** ライブ確認: `B:「Te」 C:「hanafatra」 D:「io」 E:「sakafo io」 A:「aho」`。en は `A:「I」 B:「want to」 …`。Te=A 二重塗りを B へ retag、aho の A 維持。二重塗り解消・隣接同役なし。完了。

### 既出修正の残存確認（再照合）

- **#1 [mg] → ✓ 残存確認。** `B:「Te」… A:「aho」`。
- **#22 [mg] → ✓ 残存確認（既に正しい）。** `E:「Te」… A:「aho」`、en も `E:「want to」` で役割色一致。round2 の CONCEDE は妥当。
- **#89 [mg] → ✓ 残存確認。** `B|C:「Tsy」 D:「hita」 A:「‌ko」…`。否定辞・ZWNJ 接尾主語の分割が live に残存。
- **#66 [fj] → ✓ 残存確認。** `B:「na uca」`。

dev が round2 で「applied by orchestrator」と主張した #9 / #98 は、ライブ照合の結果いずれも実データに反映済みであることを確認した（虚偽の applied 報告なし）。round1〜2 で承認した他項目も live に残存している。

### 新規指摘

- なし。残課題の検証中に新たな明確な誤りは発見されなかった。

### CONCEDE（本ラウンド追加分）

- なし（round2 で計6件を譲歩済み。本ラウンドは残 actionable の消化確認のみ）。

### スコアカード (round 3)

- 当初指摘 16 項目の最終内訳:
  - 承認 ✓ = 16（うち明確誤りの修正適用 10: #66/#33/#94/#91/#89/#31/#77/#1/#84/#81/#43 系 + #8 系統 #9/#98、HELD 妥当承認 5: #5/#90/#87/#92/#57）。
  - 部分 △ = 0（round2 の #8 系統 △ は #9/#98 修正で解消し ✓ へ昇格）。
  - 却下 ✗ = 0。
- 累計 CONCEDE: 6 件（#5/#90/#87/#92/#57 の HELD ＋ #8 系統の見立て過大撤回 #22/#32/#44/#58/#62/#71）。
- 本ラウンド新規 actionable: 0 件。
- 残課題: なし。すべての明確誤りが live で修正・確認済み。残る全項目は承認済みの修正、または防御可能な convention / 妥当な HELD。

**ファイル状態: CLOSED — 残課題なし**
