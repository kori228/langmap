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

## ラウンド4 監査 — 分割粒度・方言自然さ (レビュアー)

ラウンド1〜3 は語彙・綴り・役割ラベル誤りに集中し、**分割粒度**と**方言自然さ**の網羅が手薄だった。本ラウンドは `/tmp/langmap_suspect/26.md` の機械フラグ全件を `.wf_langmap_query.mjs` でライブ照合し、この2軸のみを審査する。オーストロネシア諸語は前置詞・所有代名詞・指示詞がいずれも**独立した音韻語**であり、英語直訳的に融合させた ⛔3-way は機械的に分解可能なものが大半である。方針（分割優先）に従い、参照言語に対応役色が存在する要素は積極的に切り出す。

### A. 分割推奨 (DIMENSION 1 — SPLIT)

#### A-1. #43 「(of) this restaurant」= A|D|E → A / D / E に3分割【確実】（mi/haw/sm/fj/pau/mg 全6言語）
ポリネシア／マレー系いずれも「前置詞(of/at) + 指示詞(this) + 名詞(restaurant)」が3つの独立語。en が A「at」/ D「this」/ E「restaurant」と3役を分けているので融合は不要。
- **mi** A|D|E:「o tēnei wharekai」 → **A:「o」 D:「tēnei」 E:「wharekai」**
- **haw** A|D|E:「o kēia hale ʻaina」 → **A:「o」 D:「kēia」 E:「hale ʻaina」**
- **sm** A|D|E:「i lenei faleaiga」 → **A:「i」 D:「lenei」 E:「faleaiga」**（lenei=le+nei、指示詞として D）
- **fj** A|D|E:「e na vale ni kana oqo」 → **A:「e na」 E:「vale ni kana」 D:「oqo」**（oqo=この、後置指示詞。fj は指示が後置なので語順上 E→D の順）
- **pau** A|D|E:「er tia el restorang」 → **A:「er」 D:「tia el」 E:「restorang」**
- **mg** A|D|E:「ato amin'ity toerana fisakafoanana ity」 → **A:「ato amin'」 D:「ity … ity」 E:「toerana fisakafoanana」**（ity…ity の挟み込みは round1 指摘#9 で【要検討】保留中。指示枠を D に統一し名詞を E に切り出す。少なくとも前置詞 `ato amin'` の A 分離は確実）
全言語で隣接同役は生じない。【確実】（mg のみ ity 枠の扱いが round1 保留事項に依存し【蓋然】）

#### A-2. #46 「with my friend」= B|F|G → F / G / B に分割【確実】（mi/haw/sm/fj/mg）
en は F「with」/ G「my」/ B「friend」の3役。ポリネシア諸語は「前置詞 + 所有代名詞 + 名詞」が独立語列。
- **mi** B|F|G:「ki tōku hoa」 → **F:「ki」 G:「tōku」 B:「hoa」**
- **haw** B|F|G:「me koʻu hoaaloha」 → **F:「me」 G:「koʻu」 B:「hoaaloha」**
- **sm** B|F|G:「ma laʻu uo」 → **F:「ma」 G:「laʻu」 B:「uo」**
- **fj** B|F|G:「kei na noqu itokani」 → **F:「kei na」 G:「noqu」 B:「itokani」**
- **mg** B|F|G:「tamin'ny namako」 → **F:「tamin'ny」 B|G:「namako」**（mg は所有 -ko が namana に抱合し独立語化しないため G を B から切り出せない。前置詞 tamin'ny のみ F に分離し、B|G は KEEP）
所有代名詞 tōku/koʻu/laʻu/noqu は単独で立つ語であり G に切り出せる。mg のみ接尾抱合のため G 不可分。【確実】（mg は部分分割）

#### A-3. #55 「two cups of coffee」= B|E|F → 分割【確実】（mi/haw/sm/fj/pau/mg）
en は E「two」/ F「cups of」/ B「coffee」。数詞・類別詞（杯）・名詞が独立語。
- **mi** B|E|F:「e rua ngā kapu kawhe」 → **E:「e rua」 F:「ngā kapu」 B:「kawhe」**
- **haw** B|E|F:「i ʻelua kīʻaha kope」 → **E:「i ʻelua」 F:「kīʻaha」 B:「kope」**
- **sm** B|E|F:「lua ipu kofe」 → **E:「lua」 F:「ipu」 B:「kofe」**
- **fj** B|E|F:「na rua na bilo kofi」 → **E:「na rua」 F:「na bilo」 B:「kofi」**
- **pau** B|E|F:「a terung el kohi」 → **E:「a terung el」 B:「kohi」**（terung=2、類別詞が独立しないため E/F 一体。pau は F を切り出せず E に統合、B のみ分離。実質2分割）
- **mg** B|E|F:「kafe kaopy roa」 → **B:「kafe」 F:「kaopy」 E:「roa」**（roa=2 が後置）
数詞と類別名詞（kapu/ipu/bilo「杯」）は明確に別語。【確実】

#### A-4. #69 「to his parents」= C|H → H / C に分割【確実】（mi/haw/sm/fj/pau/mg）
en は H「to」/ C「his parents」。前置詞が独立語。
- **mi** C|H:「ki ōna mātua」 → **H:「ki」 C:「ōna mātua」**
- **haw** C|H:「i kona mau mākua」 → **H:「i」 C:「kona mau mākua」**
- **sm** C|H:「i ona matua」 → **H:「i」 C:「ona matua」**
- **fj** C|H:「ki na nana kei na tamana」 → **H:「ki na」 C:「nana kei na tamana」**
- **pau** C|H:「er a delal me a demal」 → **H:「er a」 C:「delal me a demal」**
- **mg** C|H:「ho an'ny ray aman-dreniny」 → **H:「ho an'ny」 C:「ray aman-dreniny」**
所有は名詞に抱合（ōna/kona/-ny）するため C 内に残すが、前置詞 H は確実に分離可能。同じく #69 の B|F|G「a long letter」(F=a/G=long/B=letter) も `he reta roa`→ F:「he」 B:「reta」 G:「roa」 等で分割可能（冠詞 he/形容詞 roa が独立）。【確実】

#### A-5. #73 「on my bed」= B|F → F / B に分割【確実】（mi/haw/sm/fj/pau/mg）
en は F「on」/ B「my bed」。前置詞句が独立。
- **mi** B|F:「i runga i tōku moenga」 → **F:「i runga i」 B:「tōku moenga」**
- **haw** B|F:「ma koʻu wahi moe」 → **F:「ma」 B:「koʻu wahi moe」**
- **sm** B|F:「i loʻu moega」 → **F:「i」 B:「loʻu moega」**
- **fj** B|F:「e na noqu moce」 → **F:「e na」 B:「noqu moce」**
- **pau** B|F:「er a blechek el bed」 → **F:「er a」 B:「blechek el bed」**
- **mg** B|F:「eo ambonin'ny fandriako」 → **F:「eo ambonin'ny」 B:「fandriako」**
前置詞（i runga i / ma / eo ambonin'ny 等）は明確に独立。【確実】

#### A-6. #48 「that movie」= B|E → E / B に分割【確実】（mi/haw/sm/fj/pau/mg）
en は E「that」/ B「movie」。指示詞が独立語。
- **mi** B|E:「i taua kiriata」 → **E:「i taua」 B:「kiriata」**
- **haw** B|E:「i kēlā kiʻiʻoniʻoni」 → **E:「i kēlā」 B:「kiʻiʻoniʻoni」**
- **sm** B|E:「lena ata tifaga」 → **E:「lena」 B:「ata tifaga」**
- **fj** B|E:「na filamu koya」 → **B:「na filamu」 E:「koya」**（koya=その、後置）
- **pau** B|E:「a se el movie」 → **E:「a se el」 B:「movie」**
- **mg** B|E:「ilay sarimihetsika」 → **E:「ilay」 B:「sarimihetsika」**（ilay=その/件の、定指示）
指示詞 taua/kēlā/lena/koya/ilay/se はいずれも独立語。【確実】

#### A-7. #53 「in the garden」= A|D → D / A に分割【蓋然】（mi/haw/sm/fj/pau/mg）
en は D「in」/ A「the garden」。前置詞が独立。
- **mi** A|D:「i te māra」 → **D:「i」 A:「te māra」**
- **haw** A|D:「ma ke kīhāpai」 → **D:「ma」 A:「ke kīhāpai」**
- **sm** A|D:「i le togalaau」 → **D:「i」 A:「le togalaau」**
- **fj** A|D:「e na naba」 → **D:「e na」 A:「naba」**（※ naba=「番号」？ 庭=teitei が自然。語彙は別途要確認だが分割構造は同形）
- **pau** A|D:「er a sers」 → **D:「er」 A:「a sers」**
- **mg** A|D:「ao amin'ny zaridaina」 → **D:「ao amin'」 A:「ny zaridaina」**
前置詞分離は確実だが、A|D を分けても en の D は前置詞単独でやや細かい。分割優先方針では SPLIT 推奨。【蓋然】

#### A-8. #45 「in this country」= A|E|F → 分割【蓋然】（mi/haw/sm/fj/pau/mg）
en は E「In」/ F「this」/ A「country」。
- **mi** A|E|F:「i tēnei whenua」 → **E:「i」 F:「tēnei」 A:「whenua」**
- **haw** A|E|F:「kēia ʻāina」 → **F:「kēia」 A:「ʻāina」**（前置詞ゼロ、E 不在は正当。2分割）
- **sm** A|E|F:「i lenei atunuʻu」 → **E:「i」 F:「lenei」 A:「atunuʻu」**
- **mg** A|E|F:「eto amin'ity firenena ity」 → **E:「eto amin'」 F:「ity … ity」 A:「firenena」**
指示・前置詞が分離可能。【蓋然】（haw は前置詞欠落で2分割が上限）

### B. 融合・省略が正当（KEEP）

- **#46 G（mg）/#69 C 所有・#73 B 所有**：所有代名詞が名詞に**抱合**する言語（mg -ko/-ny、ポリネシアの所有は前接代名詞 tōku 等は切れるが mg は不可）では G/所有を独立役に切れない。Japanese 兄型の正当な融合。【確実 KEEP】
- **#70 B|D|E|F「at 9 PM」**：mi「ā te 9 i te pō」/ haw「i ka hola 9 i ka pō」等。`ā te/i ka hola`(D=at)・`9`(E)・`i te pō`(F=PM/夜) は分割可能で本来 SPLIT 候補だが、sm「i le 9」のように F(PM)が surface 不在の言語は ▼ 不足が正当（時刻表現の typological 省略）。**分割可能な mi/haw/pau/fj は SPLIT 推奨、sm/mg の PM 欠落は KEEP**。→ 部分 SPLIT 扱い。
- **#52 C|H「lost」**：受動/完了動詞に過去時制 H が抱合（mi「I ngaro」の I=過去 TAM + ngaro=動詞）。TAM 助詞 I/Ua/Na ou は en H「-ed」に対応するが、これは round1〜3 で「動詞先頭 TAM は分割せず C|H とする」既定処理として承認済み。新規 SPLIT は提案しない。【KEEP（既存方針）】
- **#80 B|F「studying abroad」/ C|G「valuable experience」**：B|F は「動詞句+場所」(ako ki tāwāhi)で en B(studying)+F(abroad)に対応するが、ki tāwāhi(海外へ)の ki は方向前置詞として F に切れる余地あり。ただし ja も B|F「留学は」と融合扱いで、名詞化された一語性が高く、隣接同役リスクもあるため KEEP 寄り。C|G は形容詞+名詞(he wheako nui = a/experience + valuable)で SPLIT 可能だが en の I(a)役が絡み複雑。本ラウンドでは【要検討】とし強くは推さない。
- **#84 D|E「last week」**：mi「i te wiki kua hori」= i te wiki(D=week) + kua hori(E=last/過ぎた)。SPLIT 可能（E:「kua hori」 D:「i te wiki」）だが語順が D→E でen の E→D と逆、かつ kua hori は関係節的修飾で一体性が高い。【要検討】
- **#50/#51 A|E「my dog/grandmother」**：所有 tāku/koʻu/laʻu は切れるが（G 相当）、en では E「My」が独立役。mi「ki tāku kurī」→ E:「tāku」 A:「kurī」 は SPLIT 可能。ただし fj「na noqu koli」の noqu、pau「bsechek（私の犬の融合形 bsechel+ek？）」は接辞化。**ポリネシア(mi/haw/sm)は SPLIT 可、pau bsechek（-ek 接尾所有）は KEEP**。これは A-2 と同種だが優先度中。

### C. 方言・非標準自然さ (DIMENSION 2)

本グループに歴史的方言・クレオールはなく、6言語すべて標準正書法の現代標準語。round1〜3 で非標準/未翻訳（pau の英語プレースホルダ #94、#91 custom、fj 綴り #66 uthe 等）は既に是正済み。本ラウンドの追加点検で見つかった自然さの懸念は以下：

- **#53 fj A:「naba」（庭）→ 不自然【蓋然】**：naba は英語 *number* 借用で「番号」。「庭」は標準フィジー語で **teitei**（菜園/庭）または **were**。「庭の花」は `na senikau e na teitei` が自然。borrowing でも意味が「番号」では誤訳。**A:「teitei」 を提案**（D:「e na」 A:「teitei」 と分割併用）。
- **#51 sm/fj 「面白い話」の語順・語彙【要検討】**：sm「E tala manaomia tala」は manaomia=「必要とされる」で「面白い(interesting)」でない（B役に不適）。「面白い話」は *tala mataʻina/tala fiafia*。fj「na ka taleitaki na itukutuku」も taleitaki=「好まれる」で interesting とずれる。round1〜3 で未指摘の語彙弱点。**sm B:「mataʻina」, fj B:「totoka」相当を推奨**。【蓋然】
- 上記以外の mi/haw/sm/pau/mg 行は、母語話者が産出する標準形として自然と判断（不自然な calque は新規には検出されず）。

### 集計と総評

機械フラグの ⛔3-way / ⚠️2-way は、本グループでは**前置詞・指示詞・数詞・類別詞が独立語**であるため、その大半が分割優先方針に照らして SPLIT すべきものだった（round1〜3 が語彙誤りに偏り粒度を見逃していた）。所有代名詞は言語によって可分（ポリネシア tōku 系）／不可分（mg -ko、pau -ek 接尾）に分かれ、不可分なものは正当な KEEP。TAM 助詞融合（C|H 等）は既存承認方針として維持。方言自然さは round1〜3 でほぼ解消済みだが、fj #53「naba(番号)＝庭」と sm/fj #51 の「interesting」語彙弱点を新規に指摘する。

- **SPLIT 推奨セル数**：A-1〜A-8 を言語別セル数で集計すると、確実〜蓋然の分割対象は概算 **38 セル**（#43×6, #46×4[mg部分含め5], #55×6, #69×6, #73×6, #48×6, #53×6, #45×4 のうち重複・部分を整理）。代表的・高信頼の actionable として **38** をカウント。
- **KEEP（正当な融合・省略）**：所有抱合(mg/pau)・TAM融合(C|H)・時刻PM省略(sm/mg)・名詞化一体(#80)等で概算 **18 セル**。
- **方言自然さ修正**：fj #53 naba、sm #51 manaomia、fj #51 taleitaki の **3 件**。

確信度総括：前置詞・指示詞・数詞の分離は【確実】、所有・複合名詞句の細分は【蓋然】〜【要検討】。mg ity…ity 枠は round1 保留方針との整合が前提。

## 開発チーム回答 — round 4 (作業者)

ライブ照合の上、分割優先方針に従い前置詞・指示詞・数詞・所有代名詞（独立語のもの）を分割。所有が接尾抱合する mg -ko/-ny・pau -ek、TAM 融合(C|H)は KEEP。

### A. SPLIT — APPLIED（applied by orchestrator this round）

1. **#43 `A|D|E` (of this restaurant) 分割 APPLIED**。mi A:o D:tēnei E:wharekai／haw A:o D:kēia E:hale ʻaina／sm A:i D:lenei E:faleaiga／fj A:e na E:vale ni kana D:oqo（指示後置）／pau A:er D:tia el E:restorang。**mg は前置詞のみ分離** A:ato amin' D|E:「ity toerana fisakafoanana ity」（ity…ity 挟み込み枠は語内分割になるため枠ごと D|E に保持。round1 #9 の【要検討】方針に整合）。
2. **#46 `B|F|G` (with my friend) 分割 APPLIED**。mi F:ki G:tōku B:hoa／haw F:me G:koʻu B:hoaaloha／sm F:ma G:laʻu B:uo／fj F:kei na G:noqu B:itokani。**mg は前置詞のみ** F:tamin'ny B|G:namako（-ko 接尾抱合）。pau は所有抱合形のため KEEP。
3. **#55 `B|E|F` (two cups of coffee) 分割 APPLIED**。mi E:e rua F:ngā kapu B:kawhe／haw E:i ʻelua F:kīʻaha B:kope／sm E:lua F:ipu B:kofe／fj E:na rua F:na bilo B:kofi／mg B:kafe F:kaopy E:roa。**pau は類別詞非独立** E:a terung el B:kohi（2分割）。
4. **#69 `B|F|G`＋`C|H` 分割 APPLIED**。手紙: mi F:he B:reta G:roa／haw F:i kekahi B:leka G:lōʻihi／sm F:se B:tusi G:umi／fj F:e dua na B:ivola G:balavu／mg B:taratasy G:lava。両親へ: mi H:ki C:ōna mātua／haw H:i C:kona mau mākua／sm H:i C:ona matua／fj H:ki na C:nana kei na tamana／pau H:er a C:delal me a demal／mg H:ho an'ny C:ray aman-dreniny。pau の手紙句は形態不明瞭のため KEEP。
5. **#73 `B|F` (on my bed) 前置詞分離 APPLIED**。mi F:i runga i B:tōku moenga／haw F:ma B:koʻu wahi moe／sm F:i B:loʻu moega／fj F:e na B:noqu moce／pau F:er a B:blechek el bed／mg F:eo ambonin'ny B:fandriako。
6. **#48 `B|E` (that movie) 分割 APPLIED**。mi E:i taua B:kiriata／haw E:i kēlā B:kiʻiʻoniʻoni／sm E:lena B:ata tifaga／fj B:na filamu E:koya（後置）／pau E:a se el B:movie／mg E:ilay B:sarimihetsika。
7. **#53 `A|D` (in the garden) 前置詞分離 APPLIED**。mi D:i A:te māra／haw D:ma A:ke kīhāpai／sm D:i A:le togalaau／pau D:er A:a sers／mg D:ao amin' A:ny zaridaina。fj は語彙修正併用（下記 C）。
8. **#45 `A|E|F` (in this country) 分割 APPLIED**。mi E:i F:tēnei A:whenua／sm E:i F:lenei A:atunuʻu／fj E:e na A:vanua F:oqo／pau E:Er F:tia el A:beluu。haw は前置詞ゼロで F:kēia A:ʻāina（2分割）。mg は ity…ity 枠保持で E:eto amin' A|F:「ity firenena ity」。
9. **#51 所有 `A|E` 分離 APPLIED**（独立所有のポリネシア3語）。mi E:tōku A:kuia／haw E:koʻu A:kupuna wahine／sm E:loʻu A:tinamatua。pau A obulek・mg ny renibe は所有非独立で KEEP。
10. **#50 所有 `A|E` 分離 APPLIED**（独立所有）。haw E:koʻu A:ʻīlio／sm E:laʻu A:maile／mi E:ki tāku A:kurī（与格 ki は所有側に保持）。fj/pau/mg は所有抱合で KEEP。

### C. 方言・語彙自然さ — 判定
- **#53 fj「naba」(=番号) → APPLIED**。naba は英 number 借用で「庭」でない。標準フィジー語の庭 **teitei** へ。前置詞分離と併せ D:e na A:teitei。【確実な語彙誤り】
- **#51 sm「manaomia」(=必要とされる) → APPLIED**。「面白い(interesting)」にならない。**mataʻina** へ（所有分離も併用: D:E tala B:mataʻina C:tala A|E→E:loʻu A:tinamatua）。【確実な語彙誤り】
- **#51 fj「na ka taleitaki na」 → HELD**。taleitaki は「好まれる/楽しい」で「面白い話」の訳として防御可能。現行セグメント「na ka taleitaki na」(B)＋「itukutuku」(C) も en の B:interesting C:stories に対応。明確な誤りでなく語彙選好のため保留（totoka 等への置換は話者校閲の典拠待ち）。

### KEEP
- mg/pau の所有接尾抱合、TAM 融合(C|H)、#70 PM 抱合差、#92 借用(dumpling/gyoza) はいずれも正当な類型差/既決事項で変更なし。

## レビュアー再評価 — round 5 (Dr. Teuira Mānoa-Rakotovao / @reo_moana)

ライブ `data.js` を `.wf_langmap_query.mjs` で round4 の全 applied 主張を逐一照合した上での最終判定。dev が「applied by orchestrator this round」とした分割・語彙修正はすべて実データに反映済みであることを確認した（虚偽の applied 報告なし）。

### A. SPLIT — ライブ照合結果

- **#43 `A|D|E` (of this restaurant) → ✓ 承認。** ライブ確認: mi `A:o D:tēnei E:wharekai`／haw `A:o D:kēia E:hale ʻaina`／sm `A:i D:lenei E:faleaiga`／fj `A:e na E:vale ni kana D:oqo`(指示後置)／pau `A:er D:tia el E:restorang`。mg は前置詞のみ分離 `A:ato amin' D|E:ity toerana fisakafoanana ity`(ity…ity 枠保持、round1 #9 の【要検討】方針と整合)。隣接同役なし。完了。
- **#46 `B|F|G` (with my friend) → ✓ 承認。** ライブ確認: mi `F:ki G:tōku B:hoa`／haw `F:me G:koʻu B:hoaaloha`／sm `F:ma G:laʻu B:uo`／fj `F:kei na G:noqu B:itokani`。mg `F:tamin'ny B|G:namako`(-ko 接尾抱合で G 不可分=正当 KEEP)、pau は所有抱合形 KEEP。完了。
- **#55 `B|E|F` (two cups of coffee) → ✓ 承認。** ライブ確認: mi `E:e rua F:ngā kapu B:kawhe`／haw `E:i ʻelua F:kīʻaha B:kope`／sm `E:lua F:ipu B:kofe`／fj `E:na rua F:na bilo B:kofi`／mg `B:kafe F:kaopy E:roa`。pau は類別詞非独立で `E:a terung el B:kohi`(2分割)=正当。完了。
- **#69 `B|F|G`＋`C|H` → ✓ 承認。** 手紙句: mi `F:he B:reta G:roa`／haw `F:i kekahi B:leka G:lōʻihi`／sm `F:se B:tusi G:umi`／fj `F:e dua na B:ivola G:balavu`／mg `B:taratasy G:lava`。両親へ: mi `H:ki C:ōna mātua`／haw `H:i C:kona mau mākua`／sm `H:i C:ona matua`／fj `H:ki na C:nana kei na tamana`／pau `H:er a C:delal me a demal`／mg `H:ho an'ny C:ray aman-dreniny`。pau 手紙句 `B|F|G:aekerekard el babier` は形態不明瞭で KEEP=妥当。所有抱合(ōna/kona/-ny)は C 内残存=正当。完了。
- **#73 `B|F` (on my bed) → ✓ 承認。** ライブ確認: mi `F:i runga i B:tōku moenga`／haw `F:ma B:koʻu wahi moe`／sm `F:i B:loʻu moega`／fj `F:e na B:noqu moce`／pau `F:er a B:blechek el bed`／mg `F:eo ambonin'ny B:fandriako`。前置詞分離済み。完了。
- **#48 `B|E` (that movie) → ✓ 承認。** ライブ確認: mi `E:i taua B:kiriata`／haw `E:i kēlā B:kiʻiʻoniʻoni`／sm `E:lena B:ata tifaga`／fj `B:na filamu E:koya`(後置)／pau `E:a se el B:movie`／mg `E:ilay B:sarimihetsika`。完了。
- **#53 `A|D` (in the garden) → ✓ 承認。** ライブ確認: mi `D:i A:te māra`／haw `D:ma A:ke kīhāpai`／sm `D:i A:le togalaau`／pau `D:er A:a sers`／mg `D:ao amin' A:ny zaridaina`／fj `D:e na A:teitei`。前置詞分離＋fj 語彙修正(naba→teitei)併用。完了。
- **#45 `A|E|F` (in this country) → ✓ 承認。** ライブ確認: mi `E:i F:tēnei A:whenua`／sm `E:i F:lenei A:atunuʻu`／fj `E:e na A:vanua F:oqo`／pau `E:Er F:tia el A:beluu`／haw `F:kēia A:ʻāina`(前置詞ゼロ2分割=正当)／mg `E:eto amin' A|F:ity firenena ity`(ity 枠保持)。完了。
- **#51 所有 `A|E` 分離 → ✓ 承認。** ライブ確認: mi `E:tōku A:kuia`／haw `E:koʻu A:kupuna wahine`／sm `E:loʻu A:tinamatua`。pau `A|E:A obulek`・mg `A|E:ny renibe` は所有非独立で KEEP=正当。完了。
- **#50 所有 `A|E` 分離 → ✓ 承認。** ライブ確認: mi `E:ki tāku A:kurī`(与格 ki は所有側保持)／haw `E:koʻu A:ʻīlio`／sm `E:laʻu A:maile`。fj `A|E:na noqu koli`・pau `A|E:A bsechek el katuu`・mg `A|E:ny aliko` は所有抱合で KEEP=正当。完了。

### C. 語彙・自然さ — 判定

- **#53 fj「naba」(=番号) → teitei → ✓ 承認。** ライブ確認: `A:teitei`。英 number 借用の誤訳から標準フィジー語の庭 teitei へ。語彙誤りの修正を確認。完了。
- **#51 sm「manaomia」(=必要とされる) → mataʻina → ✓ 承認。** ライブ確認: `B:mataʻina`。「面白い(interesting)」にならない語の置換を確認。完了。
- **#51 fj「na ka taleitaki na」 → △ HELD 承認(CONCEDE)。** dev は taleitaki=「好まれる/楽しい」が interesting の訳として防御可能とし、totoka 等への置換は話者校閲の典拠待ちとして保留。taleitaki は確かに「楽しい/喜ばれる」を含意し interesting と完全に無関係ではない(naba=番号 のような明白な誤訳とは性質が異なる)。明確な誤りでなく語彙選好であり、外部典拠を要求して round を空転させるべきでない。**CONCEDE。**

### #70「at 9 PM」部分 SPLIT の取り下げ(CONCEDE)

round4 で当方は #70 を KEEP に分類しつつ、mi/haw/pau/fj の `B|D|E|F` を部分 SPLIT 候補として軟提案した。本 round で #70 を全言語ライブ照合した結果、`B|D|E|F` 融合は de/fr/it/ru/mn/ta/el/hy/qu/fi/lv/et/eu/hu 他多数の言語で採られる**プロジェクト全体の既定セグメント枠**であることを確認した(時刻表現「9 PM」を一括 B|D|E|F とする文レベルの枠)。ポリネシア4語だけを分割すると全体の支配的処理と乖離する。当方の round4 分類自体が KEEP/部分であり、明確な誤りではない。**dev の KEEP を防御可能な convention として承認、部分 SPLIT 提案は CONCEDE。**

### KEEP 項目の妥当性確認

- mg/pau の所有接尾抱合(-ko/-ny/-ek)、TAM 融合(C|H)、mg ity…ity 枠保持、#92 借用(dumpling/gyoza/ravioly)、#80 名詞化一体、#70 PM 枠 — いずれも正当な類型差/既決方針として妥当。承認。

### 新規指摘

- なし。round4 applied の全件照合中に新たな明確な誤りは発見されなかった。

### スコアカード (round 5)

- round4 actionable(A. SPLIT 10系統 + C. 語彙 #53fj/#51sm)の判定: 承認 ✓ = 全件(ライブで applied 確認)、却下 ✗ = 0。
- 本 round の CONCEDE: 2 件(#51 fj taleitaki の HELD、#70 部分 SPLIT 提案の取り下げ)。
- 新規 actionable: 0 件。
- 残課題: なし。round1〜4 で指摘した全ての明確誤り(綴り #66、語彙 #33/#31/#77/#53fj/#51sm、英語残留 #94/#91、役割誤付与 #89/#1/#9/#98、融合分割 #43/#46/#55/#69/#73/#48/#53/#45/#51/#50)が live で修正・確認済み。残る全項目は承認済み修正、防御可能な convention(所有抱合/TAM融合/ity枠/#70時刻枠/#92借用)、または妥当な HELD(#51fj/#87/#90/#57/#92)。

**ファイル状態: CLOSED — 残課題なし**

## ラウンド5 監査 — 分割粒度・方言自然さ (レビュアー)

Dr. Teuira Mānoa-Rakotovao / @reo_moana。本ラウンドは `/tmp/langmap_suspect/26.md` の機械フラグのうち、**ラウンド4 の SPLIT 一括処理が触れずに残った ⛔3-way 系セル**（特に #49 / #77 / #46pau / #70）と、まだ KEEP/要検討で先送りした **#80・#84** の融合に絞り、`.wf_langmap_query.mjs` で全件ライブ照合して再審査した。ラウンド4 で処理済みの #43/#46(poly)/#55/#69/#73/#48/#53/#45/#51/#50 は live で分割残存を確認済みのため本ラウンドでは再掲しない。

### A. 分割推奨 (DIMENSION 1 — SPLIT) — ラウンド4 未処理の ⛔ を中心に

#### A-1. #49 「the way to the airport」= `C|E|F|G` → 分割【確実】(haw/sm/fj/mg)
en は E「the way」/ F「to」/ G「the airport」の3役。haw/sm/fj/mg の当該セルは「道(the way)＋方向前置詞＋空港」が独立語列で、機械フラグの ⛔ どおり過剰融合。
- **sm** `C|E|F|G:「le ala i le malaevaalele」` → **E:「le ala」 F:「i」 G:「le malaevaalele」**（i=方向前置詞、malaevaalele=空港）
- **fj** `C|E|F|G:「na sala ki na eapoti」` → **E:「na sala」 F:「ki na」 G:「eapoti」**（ki na=〜へ）
- **mg** `C|E|F|G:「ny lalana mankany amin'ny seranana fiaramanidina」` → **E:「ny lalana」 F:「mankany amin'ny」 G:「seranana fiaramanidina」**（mankany amin'ny=〜へ向かう、空港=seranana fiaramanidina）
- **haw** `C|E|F|G:「ke ala」` は surface が「道」のみで「to the airport」は別途 B:「i ka papa lele mokulele」に入っている。つまり C|E|F|G の4役ラベルは過大で、surface 実体は **E:「ke ala」** 単独。**haw は4役→ E 単独に是正**（F/G は B 側に既出のため C|E|F|G から外す）。
- **mi** は語順が特殊で `te huarahi`(A) / `ki te taunga rererangi`(B) と既に別役に割れており、C|E|F|G ラベルは「Tēnā」(=どうぞ/これ)に付く別問題（後述 C 節）。
隣接同役なし。【確実】(haw は4役ラベル是正＝実質クリーンアップ)

#### A-2. #77 「by the test results」= `B|D|E` → D / B / E に分割【確実】(mi/haw/sm/fj/pau/mg)
en は D「by」/ E「the test」/ B「results」の3役。⛔3-way で、全言語が「前置詞＋結果＋(of)テスト」の独立語列。ラウンド4 が見落とした ⛔。
- **mi** `B|D|E:「i ngā hua o te whakamātautau」` → **D:「i」 B:「ngā hua」 E:「o te whakamātautau」**（i=by, ngā hua=結果, o te=の＋テスト）
- **haw** `B|D|E:「i nā hua o ka hoʻokolokolo」` → **D:「i」 B:「nā hua」 E:「o ka hoʻokolokolo」**
- **sm** `B|D|E:「i taunuuga o le suega」` → **D:「i」 B:「taunuuga」 E:「o le suega」**
- **fj** `B|D|E:「e na vua ni sivi」` → **D:「e na」 B:「vua」 E:「ni sivi」**（vua=結果, ni sivi=テストの）
- **pau** `B|D|E:「er a llach er a exam」` → **D:「er a」 B:「llach」 E:「er a exam」**（llach=結果, er a exam=テストの）
- **mg** `B|D|E:「tamin'ny valim-panadinana」` → **D:「tamin'ny」 B|E:「valim-panadinana」**（valim-panadinana=試験の結果。valy「結果」+ panadinana「試験」が属格複合語として一語化しており B/E は不可分。前置詞 tamin'ny のみ D に分離）
全言語で前置詞 D は確実に分離。mi/haw/sm/fj/pau は結果(B)とテスト(E)も別語で3分割可。mg のみ複合語一体で B|E 保持＋D 分離の部分分割。隣接同役なし。【確実】

#### A-3. #80 「a valuable experience」= `C|G` → C / G (＋I) に分割【蓋然】(mi/sm/fj/pau/mg)
en は I「a」/ G「valuable」/ C「experience」。ラウンド4 で【要検討】保留。形容詞＋名詞が独立語の言語は分割可。
- **mi** `C|G:「he wheako nui」` → **I:「he」 C:「wheako」 G:「nui」**（he=不定冠詞, wheako=経験, nui=貴重な/大きな。語順 名詞→形容詞）
- **sm** `C|G:「aafiaga taua」` → **C:「aafiaga」 G:「taua」**（aafiaga=経験, taua=貴重な。冠詞 se は D セル `o se` 側に既出）
- **fj** `C|G:「dua na ka bibi」` → **I:「dua na」 C:「ka」 G:「bibi」**（dua na=一つの, ka=物/経験, bibi=重要な）
- **pau** `C|G:「ungil el experience」` → **G:「ungil el」 C:「experience」**（ungil=良い/貴重な, experience=英借用名詞）
- **mg** `C|G:「traikefa sarobidy」` → **C:「traikefa」 G:「sarobidy」**（traikefa=経験, sarobidy=貴重な）
- **haw** `C|G:「he waiwai」` は surface が「貴重(waiwai)」一語で「経験(experience)」名詞が脱落している。これは分割問題ではなく語彙欠落（後述 C 節で指摘）。
形容詞・名詞・冠詞いずれも独立語。【蓋然】（語順が名詞→形容詞で en と逆になるが役割色分割は妥当）

#### A-4. #46 pau 「with my friend」= `B|F|G` → 部分分割【蓋然】(pau)
en は F「with」/ G「my」/ B「friend」。pau `B|F|G:「el bebil er a rengelekek」`。ポリネシア各語はラウンド4 で分割済みだが pau は KEEP のまま残った ⛔。pau の `el bebil er a`(〜と一緒に)は接続辞列で、`rengelekek`= renguul「友」＋ -ek「私の」接尾。所有 -ek は接尾抱合のため G は不可分だが、**前置詞句 `el bebil er a`(F) と名詞 `rengelekek`(B|G) は分離可能**。
- **pau** `B|F|G:「el bebil er a rengelekek」` → **F:「el bebil er a」 B|G:「rengelekek」**
所有 -ek 抱合のため完全3分割は不可、F のみ分離の部分分割。【蓋然】

### B. 融合・省略が正当 (KEEP)

- **#46 E|H（全言語）TAM＋動詞**：mi「I kōrero」haw「Ua kamaʻilio」sm「Na ou talanoa」fj「Au a veitalanoa」mg「Niresaka」。en E「talk」＋H「-ed」に対応するが、ポリネシア／マレー系では過去/完了 TAM 助詞＋動詞を一体の動詞句として扱うのが既定方針（ラウンド1〜3 承認済み）。新規分割は提案しない。【KEEP】
- **#52 C|H「lost」（全言語）**：同上、受動/完了 TAM 抱合。既定方針 KEEP。
- **#70 B|D|E|F「at 9 PM」（全言語）**：ラウンド4 で当方が部分 SPLIT を軟提案したが、本枠は de/fr/it/ru 他多数言語で採るプロジェクト全体の時刻表現枠。ポリネシア4語だけ分割すると支配的処理から乖離するため KEEP を支持（ラウンド4 で CONCEDE 済み、再確認）。【KEEP】
- **#84 D|E「last week」（全言語）**：mi「i te wiki kua hori」haw「i ka pule i hala」等。week(D)＋last/過ぎた(E) は SPLIT 可能に見えるが、`kua hori / i hala / sa oti / ua tuana` は「過ぎ去った」を表す関係節的後置修飾で、語順が D→E と en の E→D と逆。一語性が高く、分割すると参照と逆順の隣接になり可読性を損なう。ja も同様に時間句を一塊で扱う。【KEEP（要検討寄り）】
- **#77 mg B|E「valim-panadinana」**：valy＋panadinana の属格複合語一語化で「結果」「試験」を分離不可。Japanese 兄型の正当融合。【KEEP】
- **#80 B|F「studying abroad」（全言語）**：ako ki tāwāhi / ka aʻo ʻana ma ka ʻāina ʻē 等。動名詞＋場所だが ja も B|F「留学は」と名詞化一体で扱い、方向前置詞 ki/ma を切ると隣接同役リスク。【KEEP（既決）】

### C. 方言・非標準自然さ (DIMENSION 2)

本グループは歴史的方言・クレオールを含まず、6言語すべて現代標準語の標準正書法。ラウンド1〜4 で英語プレースホルダ(#94)・綴り誤り(#66)・語彙取り違え(#33/#31/#77/#53naba/#51manaomia)は是正済み。本ラウンドの追加照合で見つかった自然さ・完成度の懸念：

- **#80 haw「he waiwai」— 「experience(経験)」名詞の脱落【蓋然】**：en C「experience」/ G「valuable」に対し haw は `he waiwai`(=価値ある/富) のみで、名詞「経験(ʻike)」が surface に現れない。他5言語は経験名詞(wheako/aafiaga/ka/experience/traikefa)を持つのに haw だけ欠落し、「留学は貴重(なもの)だ」と経験名詞が抜けた不完全文になっている。**C:「ʻike」 等の経験名詞を補い C:「he ʻike」 G:「waiwai」 と補完**を推奨。【蓋然】
- **#49 mi「Tēnā」に C|E|F|G を付与— 役割ラベル誤り【蓋然】**：mi の「道を教えて」は `te huarahi`(A=道) `ki te taunga rererangi`(B=空港へ) と既に分かれており、文頭 `Tēnā`(=どうぞ/さあ) は en A「Please」相当の依頼辞。これに「道(E)＋to(F)＋空港(G)」の4役 C|E|F|G を付けるのは明白な誤ラベルで、他5言語が C|E|F|G を「道〜空港」名詞句に当てているのと不整合。**mi の「Tēnā」は依頼辞として A（または D「tell」の語頭）へ retag し、C|E|F|G ラベルを外す**。【蓋然】
- 上記以外の mi/haw/sm/fj/pau/mg 行は、母語話者が産出する標準形として自然と判断。新規の不自然 calque は検出されず。

### 集計と総評

ラウンド4 の一括 SPLIT は #43/#46poly/#55/#69/#73/#48/#53/#45 等の「前置詞句・指示詞・数詞」系を網羅したが、**⛔3-way のうち #49・#77 という「前置詞＋名詞＋属格」型の2件と、#80 の形容詞＋名詞(C|G)、#46pau** が漏れていた。本ラウンドはこれらを分割優先方針に沿って SPLIT 提案する。所有接尾抱合(mg -ko/-ny/-ek, pau -ek)・TAM 融合(E|H/C|H)・mg 属格複合語(valim-panadinana)・#70 時刻枠・#84 関係節修飾・#80 名詞化(B|F)は正当な類型差として KEEP。方言自然さは概ね解消済みだが、**#80 haw の経験名詞脱落**と **#49 mi の Tēnā 誤ラベル**を新規に指摘する。

- **SPLIT 推奨セル数**：A-1(sm/fj/mg/haw=4) + A-2(mi/haw/sm/fj/pau/mg=6) + A-3(mi/sm/fj/pau/mg=5) + A-4(pau=1) = **16 セル**。
- **KEEP（正当な融合・省略）**：#46 E|H ×6・#52 C|H ×6・#70 ×6・#84 ×6・#77mg B|E ×1・#80 B|F ×6 = **31 セル**（既定方針による正当融合）。
- **方言自然さ修正**：#80 haw 経験名詞補完、#49 mi Tēnā 役割是正 の **2 件**。

確信度総括：#77/#49 の前置詞＋名詞分離は【確実】、#80 C|G の形容詞分離・#46pau の前置詞分離は【蓋然】、自然さ2件は【蓋然】。所有抱合・TAM・時刻枠の KEEP は既決方針として【確実】。

**ファイル状態: OPEN — ラウンド5 で #49/#77/#80/#46pau の追加 SPLIT と #80haw/#49mi の自然さ是正を提起**

## 開発チーム回答 — round 5 (作業者)

ラウンド5監査の未処理 ⛔3-way(#49/#77/#80 C|G/#46pau)と自然さ2件(#80haw/#49mi)を `.wf_langmap_query.mjs` で全件ライブ照合した。分割優先方針に従い、前置詞・名詞・形容詞・冠詞が独立語のものは切り出し、接尾抱合(mg -ny, pau -ek)・属格複合語(mg valim-panadinana)は KEEP。

### A-1. #49「the way to the airport」`C|E|F|G` 分割 — APPLIED(sm/fj/mg/haw)
ライブ確認。en は E:the way / F:to / G:the airport の3役。sm `C|E|F|G:le ala i le malaevaalele`→`E:le ala F:i G:le malaevaalele`、fj `C|E|F|G:na sala ki na eapoti`→`E:na sala F:ki na G:eapoti`、mg `C|E|F|G:ny lalana mankany amin'ny seranana fiaramanidina`→`E:ny lalana F:mankany amin'ny G:seranana fiaramanidina`。haw は surface が「ke ala(道)」のみで「to the airport」は別途 B:「i ka papa lele mokulele」に既出のため4役ラベルが過大→`E:ke ala` 単独へ是正。隣接同一letter不発生。(applied by orchestrator this round)

### A-2. #77「by the test results」`B|D|E` 分割 — APPLIED(mi/haw/sm/fj/pau ＋ mg 部分)
ライブ確認。en は D:by / E:the test / B:results。前置詞＋結果＋(of)テストの独立語列。mi `D:i B:ngā hua E:o te whakamātautau`、haw `D:i B:nā hua E:o ka hoʻokolokolo`、sm `D:i B:taunuuga E:o le suega`、fj `D:e na B:vua E:ni sivi`、pau `D:er a B:llach E:er a exam`。mg `tamin'ny valim-panadinana`→`D:tamin'ny B|E:valim-panadinana`(valy＋panadinana の属格複合語一語化で B/E 不可分、前置詞 D のみ分離)。隣接同一letter不発生。(applied by orchestrator this round)

### A-3. #80「a valuable experience」`C|G` 分割 — APPLIED(mi/sm/fj/pau/mg)
ライブ確認。en は I:a / G:valuable / C:experience。形容詞＋名詞＋冠詞が独立語。mi `I:he C:wheako G:nui`、sm `C:aafiaga G:taua`、fj `I:dua na C:ka G:bibi`、pau `G:ungil el C:experience`、mg `C:traikefa G:sarobidy`。haw は経験名詞欠落のため下記 C で別途補完。隣接同一letter不発生。(applied by orchestrator this round)

### A-4. #46 pau「with my friend」`B|F|G` 部分分割 — APPLIED
ライブ確認 pau `B|F|G:el bebil er a rengelekek`。前置詞句 `el bebil er a`(F=with) と名詞 `rengelekek`(renguul友＋-ek私の)は分離可。所有 -ek は接尾抱合のため G 不可分→`F:el bebil er a B|G:rengelekek`。ポリネシア各語は round4 で分割済み。隣接同一letter不発生。(applied by orchestrator this round)

### C(自然さ). #80 haw 経験名詞脱落 — APPLIED
ライブ確認 haw `C|G:he waiwai`(=価値ある)のみで経験名詞が surface に不在、他5語は経験名詞を持つ。Hawaiian の経験/知識 `ʻike` を補い、A-3 の C/G 分割と整合させて `I:he C:ʻike G:waiwai` とする(mi `I:he C:wheako G:nui` と同型)。レビュアー(ハワイ語専門)提案に沿う。隣接同一letter不発生。(applied by orchestrator this round)

### C(自然さ). #49 mi「Tēnā」役割是正 — APPLIED(全面再整列)
ライブ確認 mi `C|E|F|G:Tēnā D:kōrero mai A:te huarahi B:ki te taunga rererangi`。「Tēnā(koa)」は依頼辞で en A:Please に相当(haw E ʻoluʻolu / sm Faʻamolemole / fj Yalo vinaka / mg Azafady が A)。C|E|F|G(道〜空港)を付けるのは誤ラベル。en の役割(A:Please D:tell E:the way F:to G:the airport)に整列し直し、`A:Tēnā D:kōrero mai E:te huarahi F|G:ki te taunga rererangi` とする(te huarahi=道=E、ki te taunga rererangi=to＋空港=F|G)。これで A の重複も解消、他5語の E:道 とも整合。隣接同一letter不発生。(applied by orchestrator this round)

### KEEP — 同意
#77 mg valim-panadinana(属格複合語一語)、#46/#52 TAM融合(E|H/C|H)、#70 時刻枠、#84 last week 後置修飾、#80 B|F 留学名詞化、mg/pau 所有接尾抱合、#92 借用 — いずれも正当な類型差/既決方針として KEEP に同意。

## レビュアー再評価 — round 6 (Dr. Teuira Mānoa-Rakotovao / @reo_moana)

ライブ `data.js` を `.wf_langmap_query.mjs` で round5 の全 applied 主張を逐一照合した上での最終判定。dev が「applied by orchestrator this round」とした分割・役割是正・自然さ補完はすべて実データに反映済みであることを確認した（虚偽の applied 報告なし）。

### A. SPLIT — ライブ照合結果

- **#49 `C|E|F|G` (the way to the airport) → ✓ 承認。** ライブ確認: sm `A:Faʻamolemole D:taʻu mai E:le ala F:i G:le malaevaalele`／fj `A:Yalo vinaka D:tukuna mai E:na sala F:ki na G:eapoti`／mg `A:Azafady D:lazao B:ahy E:ny lalana F:mankany amin'ny G:seranana fiaramanidina`／haw `A:E ʻoluʻolu D:e haʻi mai E:ke ala B:i ka papa lele mokulele`。en の E:the way / F:to / G:the airport に整合。haw は surface が「ke ala(道)」のみで「to the airport」は B 側に既出のため E 単独へ是正＝妥当。隣接同役なし。完了。
- **#49 mi「Tēnā」役割是正 → ✓ 承認。** ライブ確認: mi `A:Tēnā D:kōrero mai E:te huarahi F|G:ki te taunga rererangi`。依頼辞 Tēnā を en A:Please へ retag（他5語の A:依頼辞 ʻoluʻolu/Faʻamolemole/Yalo vinaka/Azafady と整合）、C|E|F|G の誤ラベルを解消、A の重複も発生せず。E:te huarahi(道) は他語の E と一致。`F|G:ki te taunga rererangi` は当方が round5 で提案した形どおり（ki=to=F、te taunga rererangi=空港=G の枠保持）。完了。
- **#77 `B|D|E` (by the test results) → ✓ 承認。** ライブ確認: mi `D:i B:ngā hua E:o te whakamātautau`／haw `D:i B:nā hua E:o ka hoʻokolokolo`／sm `D:i B:taunuuga E:o le suega`／fj `D:e na B:vua E:ni sivi`／pau `D:er a B:llach E:er a exam`。mg は `D:tamin'ny B|E:valim-panadinana`(valy＋panadinana 属格複合語一語化で B/E 不可分、前置詞 D のみ分離=正当な部分分割)。隣接同役なし。完了。
- **#80 `C|G` (a valuable experience) → ✓ 承認。** ライブ確認: mi `I:he C:wheako G:nui`／sm `C:aafiaga G:taua`／fj `I:dua na C:ka G:bibi`／pau `G:ungil el C:experience`／mg `C:traikefa G:sarobidy`。形容詞＋名詞(＋冠詞)を分離。隣接同役なし。完了。
- **#46 pau `B|F|G` (with my friend) 部分分割 → ✓ 承認。** ライブ確認: pau `F:el bebil er a B|G:rengelekek`。前置詞句 F を分離、所有 -ek 接尾抱合で B|G 保持=正当。隣接同役なし。完了。

### C. 自然さ — ライブ照合結果

- **#80 haw 経験名詞脱落 → ✓ 承認。** ライブ確認: haw `I:he C:ʻike G:waiwai B|F:ka aʻo ʻana ma ka ʻāina ʻē`。脱落していた経験名詞を ʻike で補完し、mi `I:he C:wheako G:nui` と同型に整列。当方(ハワイ語専門)の補完提案どおり。完了。

### KEEP 項目の妥当性確認

- #77 mg valim-panadinana(属格複合語一語)、#46/#52 TAM融合(E|H/C|H)、#70 時刻枠、#84 last week 後置修飾、#80 B|F 留学名詞化(mg は `dia` 述語標識を含む B|F 一体=ja の名詞化句と同型)、mg/pau 所有接尾抱合(-ko/-ny/-ek)、mg ity…ity 枠、#92 借用(dumpling/gyoza) — いずれも正当な類型差/既決方針として妥当。承認。

### 新規指摘

- なし。round5 applied の全件照合中に新たな明確な誤りは発見されなかった。⛔3-way の残余は #46 pau / #77 mg のように所有抱合・属格複合語による正当な KEEP のみで、分割優先方針に照らしても追加 actionable は存在しない。

### CONCEDE（本ラウンド追加分）

- なし（round2 で6件、round5 で2件を譲歩済み。本ラウンドは round5 監査で当方が提起した #49/#77/#80/#46pau の SPLIT と #80haw/#49mi の自然さ是正がすべて applied・ライブ確認できたため、消化確認のみ）。

### スコアカード (round 6)

- round5 actionable(A. SPLIT #49/#77/#80/#46pau の4系統 + C. 自然さ #80haw/#49mi の2件)の判定: 承認 ✓ = 全件(ライブで applied 確認)、部分 △ = 0、却下 ✗ = 0。
- 本ラウンドの CONCEDE: 0 件。
- 新規 actionable: 0 件。
- 残課題: なし。round1〜5 で指摘した全ての明確誤り・分割漏れ・役割誤付与・自然さ懸念が live で修正・確認済み。残る全項目は承認済み修正、防御可能な convention(所有抱合/TAM融合/属格複合語/ity枠/#70時刻枠/#84後置修飾/#80名詞化/#92借用)、または妥当な HELD(#51fj taleitaki/#87 pai/#90 pau/#57 sm lelei/#92 借用)。

**ファイル状態: CLOSED — 残課題なし**

## 包括スイープ — 群26 全複合セル一括判定 (作業者 round 9)

オーナー指示「PREFER SPLITTING / fix-all-variants」に基づき、群26の全複合セル(|含む)を一括判定した。前ラウンドで「防御可能な convention」として保留したものも、分離可能な別役割トークンを含み連続性ルールに反しない限り全て分割した。

### 集計
- SPLIT: 47 件
- KEEP: 18 件

### SPLIT の主類型
- **TAM助詞 + 動詞** (述語先頭): mi「I/Kei te」, haw「Ua」, sm「Na」, fj「a / E sa」, pau「mla」 を時制/相(H または E)として動詞(C/D/E)から切り出し。#46/#52(E|H・C|H), #53(C|E), #69(D|E)。clean な[助詞+動詞]、または埋め込み主語クリティックがあっても別役割A(代名詞)を伴う3トークン clean(#46/#52 sm「Na ou …」→H/A/E, fj「Au a …」→A/H/E)のみ分割。
- **前置所有 + 名詞**: fj「na noqu koli/pusi」, mi「tōku ngeru」, haw「koʻu pōpoki」, sm「laʻu pusi」 を E(所有)+A(名詞)に分割(#50 fj, #73 mi/haw/sm/fj)。det+poss+noun の連続語順。
- **時刻枠 #70**: B|D|E|F を D(前置詞)+E(数詞/時)+F(午後/夜) に分割(全6変種)。merge 内の B は表層なしの幽霊役割のため脱落。
- **後置「先週」#84**: D|E を D(週)+E(過ぎた/先) に分割(全6変種)。後置修飾だが2トークン clean。
- **「留学(abroad) #80」**: B|F を B(名詞化された学び)+F(海外・前置詞句) に分割(全6変種)。
- **「もっと水 #85」**: B|E を B(水)+E(more) に分割(haw/sm/fj/pau/mg)。
- **その他**: #49 mi「ki te taunga rererangi」→F「ki」+G, pau「a rael el mo er a airport」→E/F/G(C脱落)。#69 pau「aekerekard el babier」→F|G+B。#73 C|G「毎晩」→ G(every)+C(night)(mi/haw/sm/fj/pau)。

### KEEP の根拠 (言語的非分離)
- **#13 pau「bom ngosukak」**(B|D): 目的語 -ak が動詞に接尾した統合動詞形。代名詞目的語は接尾辞。
- **#35 pau「A obekik el sechal」/#50 pau「A bsechek el katuu」/#51 pau「A obulek」**(A|E): 所有が接尾辞(-ik/-ek)で名詞に抱合され前置分離不可。
- **#50 mg「ny aliko」/#73 mg「ny sakako」**(A|E): 所有 -ko が名詞接尾。article ny のみでは所有Eを切り出せない。
- **#51 fj「na buqu」**(A|E): 親族名詞の不可譲所有は接尾(-qu)。alienable の前置 noqu と異なり分離不可。
- **#51 mg「ny renibe」**(A|E): 所有(my)は表層なし、article のみで E を分離不可。
- **#36 pau「A betok el」**(A|D): 存在(there are)に対応する独立トークンなし。
- **#43 mg「ity toerana fisakafoanana ity」(D|E)/#45 mg「ity firenena ity」(A|F)**: 指示詞 ity…ity が名詞を環状に挟む(det+noun+det)ため非連続=分割不可。
- **#46 pau「rengelekek」/mg「namako」, sm/fj #69**(B|G ほか): 所有接尾辞(-ek/-ko)による単語、および sm「Na ia tusia」/fj「E a vola」は別位置に独立Aがあり内部主語クリティックを切り出すと役割重複・誤付与となるため KEEP。
- **#46 mg「Niresaka」/#52 mg「Namoy」/#53 mg「Mamony」**(E|H/C|H/C|E): Malagasy 時制は接頭辞(n-/m-)で統合された単一語動詞。
- **#53 haw「Ke mohala nei」**(C|E): 連続相が Ke…nei の環状接辞で動詞を挟む=非連続。
- **#73 mg「isan-alina」**(C|G): every-night の属格複合単一語。
- **#77 mg「valim-panadinana」**(B|E): result-of-exam の属格複合単一名詞。
- **#85 mi「anō」**(B|E): more/again の単一語のみで水(B)は当セルに表層なし、分割不可。
- **#89 pau「diak」/mg「Tsy」**(B|C): 単一語否定辞、can(B)は表層なし。

**ファイル状態: 本スイープで再 OPEN し SPLIT 47件適用。**

## レビュアー再評価 — round 10 (Dr. Teuira Mānoa-Rakotovao / @reo_moana)

ライブ `data.js` を `.wf_langmap_query.mjs` で round9 包括スイープの SPLIT/KEEP 主張を全件照合した上での判定。round6 以降に reviewer 評価が無いまま round9 スイープが入ったため、本ラウンドはスイープ結果の検証と KEEP 根拠の妥当性審査を行い、さらに分割優先方針で残存する分離可能要素を点検した。

### A. round9 SPLIT — ライブ照合結果（虚偽 applied なし）

- **#70「at 9 PM」B|D|E|F → ✓ 承認。** ライブ: mi `D:ā te E:9 F:i te pō`／haw `D:i ka hola E:9 F:i ka pō`／sm `D:i le E:9`（F 表層なし＝正当省略）／fj `D:e na E:9 F:na kaloko`／pau `D:er a E:9 el klok F:er a kebesengei`／mg `D:amin'ny E:9 F:alina`。round5 で当方が CONCEDE した時刻枠を、オーナーの分割優先方針に沿って分割。表層なしの幽霊 B 役脱落も妥当。隣接同役なし。完了。
- **#84「last week」D|E → ✓ 承認。** ライブ全6語で D（週）+ E（過ぎた/先）に分割（mi `D:i te wiki E:kua hori` 他）。round5 で KEEP 寄りとした後置修飾だが分割で問題なし（語順 D→E は当該言語の自然順）。完了。
- **#80「abroad」B|F・#85「more water」B|E・#73「every night」C|G → ✓ 承認。** ライブ確認。#80 全6語 B(学び)+F(海外句)、#85 haw/sm/fj/pau/mg で B(水)+E(more)、#73 mi/haw/sm/fj/pau で C(夜)+G(every)。mi #85 `B|E:anō`・mg #73 `C|G:isan-alina` は単一語/属格複合語で KEEP（下記）。完了。
- **#50/#73 前置所有 + 名詞 → ✓ 承認。** ポリネシア前置所有（tōku/koʻu/laʻu/na noqu）を E、名詞を A に分割。fj #50 `E:na noqu A:koli` 他。完了。
- **#46/#52 TAM + 主語クリティック + 動詞 → ✓ 承認。** sm `H:Na A:ou E:talanoa`／fj `A:Au H:a E:veitalanoa`（#46）等、独立主語 A を伴う 3 トークン clean のみ分割。mg `E|H:Niresaka`（接頭辞統合）KEEP。完了。

### B. round9 KEEP — 言語的非分離の妥当性

すべてライブで現状維持を確認、根拠も妥当：
- **接尾抱合所有**：pau `-ek`（#35 obekik / #50 bsechek / #46 rengelekek）、mg `-ko`（#50 aliko / #73 sakako / #46 namako）、fj 不可譲所有 `-qu`（#51 buqu）。前置 article のみでは所有 E を切り出せず、分割すると参照に無い役を新設するため KEEP は正当。✓
- **属格複合単一語**：mg `valim-panadinana`(#77 B|E)、`isan-alina`(#73 C|G)。一語化した属格複合名詞で分離不可。✓
- **環状接辞（非連続）**：haw `Ke…nei`(#53 C|E)、mg `ity…ity`(#43/#45)。名詞/動詞を環状に挟むため連続分割不可。✓
- **接頭辞統合動詞**：mg `Niresaka/Namoy/Mamony`（n-/m- 時制接頭辞）。単一語動詞で TAM 分離不可。✓
- **単一語否定辞**：pau `diak`、mg `Tsy`(#89 B|C)。can(B) は表層なしで B|C 合成が正当。✓
- **目的語接尾動詞**：pau `bom ngosukak`(#13 B|D、-ak 目的語接尾)。✓
- **主語クリティック非切り出し**：sm `Na ia tusia`／fj `E a vola` 等、別位置に独立 A があり内部主語を切ると役割重複になるため KEEP。✓

以上、round9 の SPLIT 47 / KEEP 18 はライブと一致し、KEEP 根拠はいずれもオーストロネシア類型として防御可能。スイープの品質は高い。

### C. 新規指摘（分割優先方針で残存する分離可能要素）

- **#89 mi `A:「Kāore au」` — 否定辞 Kāore と主語 au が役割 A に二重融合【確実・新規】**
  - **Current:** mi `A:「Kāore au」 B:「e」 D:「kitea」 E:「te」 G:「kupuhipa」 F:「Wi-Fi」`
  - **Problem:** en は `A:「I」 B:「can」 C:「't」 …`。Māori の **Kāore** は否定述語（en C「't」＝否定に相当）で主語ではない。**au** が主語（A=I）。現状は否定辞 Kāore を主語 au と一括して役割 A に塗っており、(1) 否定の役割（他言語の C）が独立セグメントとして現れず、(2) 否定辞に主語役 A を誤付与している。同一文 haw は `C:「ʻAʻole」 A:「au」` と否定 C・主語 A を正しく分離しており、mi だけ未分割。round9 スイープが mg `Tsy`(#89 B|C)・pau `diak`(B|C) の否定を扱った際に **mi の `Kāore au` 融合を見落とした**。
  - **分割可否:** Kāore（否定）と au（主語）は明確に別の独立語。分割後の語順は `C:「Kāore」 A:「au」 B:「e」 D:「kitea」 …` となり、C→A→B→D で**隣接同役は生じない**（否定を C にすれば直後の B:「e」とも非衝突）。分割優先方針・「全変種を揃える」方針の双方に合致。
  - **Proposed fix:** mi `C:「Kāore」 A:「au」 B:「e」 D:「kitea」 E:「te」 G:「kupuhipa」 F:「Wi-Fi」`（否定辞を haw `ʻAʻole`=C と同じ否定役へ、主語 au のみ A 維持）。
  - 【確実・新規 actionable】

### 既出修正の残存再確認

- #1 mg `B:「Te」…A:「aho」`、#66 fj `B:「na uca」`、#94 pau（英語プレースホルダ撤去済）、#33 fj `C:「sara vakalevu」`、#77 fj `C:「E a kurabui」…B:「vua」 E:「ni sivi」` — いずれも live に残存。round1〜9 の確定修正はすべて維持されている。

### スコアカード (round 10)

- round9 スイープ判定: SPLIT 47 件 ✓ 全件ライブ確認、KEEP 18 件 ✓ 根拠妥当。虚偽 applied なし。却下 ✗ = 0。
- 本ラウンドの CONCEDE: 0 件（過去ラウンドで計8件譲歩済み。本ラウンドは新規譲歩なし）。
- 新規 actionable: **1 件**（#89 mi `Kāore au` の否定辞=主語 二重融合 → C 否定 / A 主語 に分割）。
- 残課題: #89 mi の否定辞分割のみ。他はすべて修正・確認済み、または防御可能 convention/妥当 KEEP。

**ファイル状態: OPEN**
次にやること: #89 mi の `A:「Kāore au」` を `C:「Kāore」`（否定、haw `ʻAʻole`=C と整合）＋ `A:「au」`（主語）に分割する。これで否定役の独立・主語役の二重塗り解消が達成され、CLOSED 可。

## レビュアー再評価 — round 12 (Dr. Teuira Mānoa-Rakotovao / @reo_moana)

ライブ `data.js` を `.wf_langmap_query.mjs` で照合した上での判定。本ファイルには round11 の開発チーム回答が記載されておらず、round10 で当方が提示した唯一の残 actionable（#89 mi `Kāore au` の分割）が消化されたかをライブで直接検証した。

### round10 残課題（#89 mi）の検証 — ✗ 未修正（claimed fix なし／実データ未反映）

- **#89 [mi] → ✗ 未修正。** ライブ確認: `A:「Kāore au」 B:「e」 D:「kitea」 E:「te」 G:「kupuhipa」 F:「Wi-Fi」`。round10 で指摘した `A:「Kāore au」`（否定辞 Kāore ＋ 主語 au の役割 A 二重融合）が**そのまま残存**。en は `A:「I」 B:「can」 C:「't」 …` で、Māori の **Kāore** は否定述語（en C「't」＝否定）であり主語ではない。同一文 haw は live で `C:「ʻAʻole」 A:「au」` と否定 C・主語 A を正しく分離しており、mi だけが未分割。
  - 開発チームの round11 回答は本ファイルに存在せず、orchestrator による applied 主張も確認できない。すなわち **claimed fix が live に反映されていない**（未着手）。
  - 分割の妥当性は変わらず: `C:「Kāore」 A:「au」 B:「e」 D:「kitea」 …` で語順は C→A→B→D となり**隣接同役は生じない**。否定役を haw `ʻAʻole`=C と整合させ、主語 au のみ A とすることで A の二重塗りも解消する。分割優先方針・全変種整合方針の双方に合致。

### 既出修正の残存再確認（回帰なし）

- **#66 [fj] → ✓ 残存。** ライブ `B:「na uca」`。
- **#1 [mg] → ✓ 残存。** ライブ `B:「Te」 … A:「aho」`。
- **#77 [fj] → ✓ 残存。** ライブ `C:「E a kurabui」 A:「koya」 D:「e na」 B:「vua」 E:「ni sivi」`。
- **#89 [mg/haw/pau/sm/fj] 否定処理 → ✓ 残存。** mg `B|C:「Tsy」 D:「hita」 A:「‌ko」`、haw `C:「ʻAʻole」 A:「au」`、pau `B|C:「diak」`、fj `C:「sega ni」`、sm `C:「E lē」`。mi 以外の全変種は否定役を正しく分離済み。**mi のみが系統から外れている**点が、本指摘の妥当性をさらに裏付ける。

round1〜10 で確定した修正に回帰はなく、虚偽の applied 報告もない（そもそも round11 回答自体が未記載）。残るのは #89 mi の単一・明確な分割漏れのみ。

### 新規指摘

- なし。#89 mi 以外に新たな明確な誤りは発見されなかった。

### CONCEDE（本ラウンド追加分）

- なし（過去ラウンドで計8件を譲歩済み。本ラウンドは残 actionable の検証のみで、譲歩すべき新事項なし）。

### スコアカード (round 12)

- round10 残 actionable（#89 mi 否定辞分割）の判定: **✗ 未修正**（live で `A:「Kāore au」` のまま）。
- 本ラウンド新規 actionable: 0 件。
- 累計 CONCEDE: 8 件（変動なし）。
- 残課題: **#89 mi `A:「Kāore au」` の否定辞＝主語 二重融合（C 否定 / A 主語 への分割が未適用）。**

ループ終了方針の確認: 本件はスタイル選好や外部典拠待ちではなく、(1) en の役割割当に照らした明確な役割誤付与、(2) 同一文の他5変種（haw/mg/pau/sm/fj）がすでに否定を分離している中で mi だけが外れている系統的不整合、(3) 隣接同役を生まない安全な分割、という三点で**具体的かつ防御可能な actionable**である。よって CLOSE せず OPEN を維持する。

**ファイル状態: OPEN**
次にやること: #89 mi の `A:「Kāore au」` を `C:「Kāore」`（否定、同文 haw `ʻAʻole`=C と整合）＋ `A:「au」`（主語）に分割する（語順 C→A→B、隣接同役なし）。これのみで CLOSED 可。

## 兄弟整合性監査 — 群26 (作業者 round 12)

対象言語: mi, haw, sm, fj, pau, mg。各フラグセルは「ある言語だけが役割文字を重複させている外れ値」。en/ja 参照と兄弟整列に照らして判定。

### FIX (retag)

- **#16 [haw]** `A:「ka」` → `B`。en は B:「the movie」（冠詞＋名詞）。haw の最初の「ka」は B:「kiʻiʻoniʻoni」(movie) に係る冠詞であり、A:「i ka hola ʻehia」(what time) とは別役割。兄弟 mi は B:「te kiriata」 と冠詞を B に含める。よって最初の「ka」は A の重複ではなく B。

- **#17 [mg]** `A:「Manana」` → `B`。en A:「I」 B:「have」、ja A:「私は」 B:「あります」。mg は動詞先頭言語で「Manana」=have=B、「aho」=I=A。兄弟 mi B:「tāku」/haw B:「koʻu」(have/my) と整合。よって「Manana」は A の重複ではなく B。

- **#39 [mi]** `C:「Me oho」` → `E`。en E:「have to」 D:「wake up」 B:「early」 C:「tomorrow」。mi の「āpōpō」=tomorrow=C が正。「Me oho」は modal「Me」(have to)＋wake で、語頭の modal が支配的。兄弟 fj は同形「Me au」を E、haw「Pono」=E、mg「Tsy maintsy」=E、sm「E tatau ona ou」=E と全て modal を E に割当。よって「Me oho」は C の重複ではなく E。

- **#81 [mi]** `C:「He mamae」` → `D`。en F:「have」 E:「a headache」 C:「today」、ja D:「痛い」(painful)。mi の「i tēnei rā」=today=C が正。「He mamae」=痛い(述語)で、兄弟 mg D:「Marary」(ill/painful) および ja D:「痛い」が D を使用。よって痛み述語は C の重複ではなく D。

### KEEP

- **#5 [mi]** `D:「He」 ... D:「reka」` を維持。en 参照自体が D:「is」 ... D:「delicious」 と D を二度使う（コピュラ＋形容詞パターン）。mi の「He」=is(D)、「reka」=delicious(D) は en の D…D 構造を正しく反映。隣接でなく間に C/A/B が入るため隣接同役問題なし。

- **#18 [pau]** `D:「a」 ... D:「udoud」` を維持。en は D:「is」 ... D:「expensive」 と D を二度使用。pau「a」=コピュラ(D)、「udoud」=expensive(D) は en の D…D を反映。正当な再出現。

- **#37 [pau]** `D:「a」 C:「birthday」 D:「present」` を維持。en が完全同型 D:「a」 C:「birthday」 D:「present」（限定詞複合が形容詞 C を挟んで D…D に分割）。pau は en 参照をそのまま写しており正当。

## レビュアー再評価 — round 13 (Dr. Teuira Mānoa-Rakotovao / @reo_moana)

ライブ `data.js` を `.wf_langmap_query.mjs` で round12 の作業者2セクション（「開発チーム回答」相当＝兄弟整合性監査の FIX/KEEP）を全件照合し、さらに round10/round12 で当方が提示した唯一の残 actionable（#89 mi `Kāore au` の否定辞＝主語 二重融合）が消化されたかを直接検証した。

### A. 兄弟整合性監査 (作業者 round 12) の FIX — ライブ照合結果（虚偽 applied なし）

- **#16 [haw] `A:「ka」` → `B` → ✓ 承認。** ライブ確認: `C:「Hoʻomaka」 B:「ka」 B:「kiʻiʻoniʻoni」 A:「i ka hola ʻehia」`。en は B:「the movie」（冠詞＋名詞）。先頭「ka」は movie の冠詞で B が正、A:「i ka hola ʻehia」(what time) とは別役。A の重複（誤った 2 重 A）が解消。兄弟 mi `B:「te kiriata」` と整合。完了。
  - 付記（軽微・非 actionable）: 結果として `B:「ka」 B:「kiʻiʻoniʻoni」` の隣接同役 B が生じている。ただし両者は同一名詞句（冠詞＋名詞）の正当な構成要素で、en も単一 B「the movie」。当方は冠詞を名詞 B セルに統合（`B:「ka kiʻiʻoniʻoni」`）する方が隣接同役回避方針に沿うと考えるが、これは round12 で作業者が解消した「誤った A 重複」より軽微で、役割文字自体は正しい。スタイル選好の範囲であり OPEN 維持の理由にはしない。

- **#17 [mg] `A:「Manana」` → `B` → ✓ 承認。** ライブ確認: `B:「Manana」 C:「fivoriana」 … A:「aho」`。en A:「I」/B:「have」、ja A:「私は」/B:「あります」。mg は動詞先頭言語で Manana=have=B、後置主語 aho=A。これにより A の二重塗り（Manana と aho）が解消。兄弟整合・参照整合とも妥当。完了。

- **#39 [mi] `C:「Me oho」` → `E` → ✓ 承認。** ライブ確認: `E:「Me oho」 A:「ahau」 B:「i te ata」 C:「āpōpō」`。en E:「have to」/D:「wake up」/C:「tomorrow」。modal「Me」(have to)＋動詞 oho を E に割当（兄弟 fj「Me au」=E, haw「Pono」=E, mg「Tsy maintsy」=E, sm「E tatau ona ou」=E と全変種整合）。āpōpō=tomorrow=C が独立。C の重複解消。完了。

- **#81 [mi] `C:「He mamae」` → `D` → ✓ 承認。** ライブ確認: `D:「He mamae」 A:「tōku」 B:「māhunga」 C:「i tēnei rā」`。ja D:「痛い」(painful)、mi「He mamae」=痛む述語=D、i tēnei rā=today=C。兄弟 mg `D:「Marary」` と整合し、C(today) の重複が解消。完了。

### B. 兄弟整合性監査 (作業者 round 12) の KEEP — 妥当性確認

- **#5 [mi] `D:「He」…D:「reka」` / #18 [pau] `D:「a」…D:「udoud」` / #37 [pau] `D:「a」C:「birthday」D:「present」` → ✓ KEEP 承認。** いずれも en 参照自体が D…D（コピュラ＋形容詞、または限定詞複合）構造を持ち、間に C/A/B が介在して隣接同役にならない。参照忠実な正当再出現。

### C. round10/12 の唯一の残 actionable（#89 mi）— ✗ 依然未修正（作業者 round12 が未着手）

- **#89 [mi] → ✗ 未修正（claimed fix なし）。** ライブ確認: `A:「Kāore au」 B:「e」 D:「kitea」 E:「te」 G:「kupuhipa」 F:「Wi-Fi」`。round10 で新規指摘し round12 で✗未修正と判定した `A:「Kāore au」`（否定辞 Kāore ＋ 主語 au の役割 A 二重融合）が**そのまま残存**。
  - en は `A:「I」 B:「can」 C:「't」 D:「find」 …`。Māori の **Kāore** は否定述語（en C「't」＝否定に相当）であり主語ではない。**au** が主語（A=I）。現状は否定辞 Kāore を主語 au と一括して A に塗り、(1) 否定役（他言語の C）が独立セグメントとして現れず、(2) 否定辞に主語役 A を誤付与している。
  - 同一文の他5変種はすべて否定を分離済み（ライブ再確認）: haw `C:「ʻAʻole」 A:「au」`、mg `B|C:「Tsy」 … A:「‌ko」`、pau `B|C:「diak」`、fj `C:「sega ni」`、sm `C:「E lē」`。**mi のみが系統から外れている**。
  - 作業者 round12 は兄弟整合性監査（#16/#17/#39/#81 等）を実施したにもかかわらず、同じ「兄弟整合性」軸で当方が2ラウンド連続で明示した #89 mi をスコープから外している。これは消化漏れであり、防御可能な convention でも HELD でもない。
  - **分割は安全:** `C:「Kāore」 A:「au」 B:「e」 D:「kitea」 …` で語順は C→A→B→D となり**隣接同役は生じない**。

### 既出修正の残存再確認（回帰なし）

- **#66 [fj] `B:「na uca」`** / **#1 [mg] `B:「Te」…A:「aho」`** / **#77 [fj] `C:「E a kurabui」…B:「vua」E:「ni sivi」`** / **#89 否定（mi 以外）** — いずれも live に残存。round12 の FIX 4件も含め、過去確定修正に回帰なし。虚偽 applied 報告もなし。

### 新規指摘

- なし（#16 haw の隣接 B は軽微なスタイル付記にとどめ、actionable には数えない）。

### CONCEDE（本ラウンド追加分）

- なし（過去計8件譲歩済み。本ラウンドは round12 FIX の承認確認と残 actionable の再検証のみ）。

### スコアカード (round 13)

- 作業者 round12 FIX（#16haw/#17mg/#39mi/#81mi）: 承認 ✓ = 4（全件ライブ確認・虚偽なし）。
- 作業者 round12 KEEP（#5mi/#18pau/#37pau）: 妥当承認 ✓ = 3。
- 却下 ✗ = 0。
- 本ラウンド新規 actionable: 0 件。
- 累計 CONCEDE: 8 件（変動なし）。
- 残課題: **#89 mi `A:「Kāore au」` の否定辞＝主語 二重融合（C 否定 / A 主語 への分割が依然未適用）。** round10→round12→round13 と3度連続で未消化。

ループ終了方針の確認: 本件はスタイル選好でも外部典拠待ちでもなく、(1) en 役割割当に照らした明確な役割誤付与（否定辞に主語役 A）、(2) 同一文の他5変種が否定を分離済みの中で mi だけが外れる系統的不整合、(3) 隣接同役を生まない安全な分割、の三点で具体的かつ防御可能な actionable。作業者は round12 でまさに「兄弟整合性監査」を行っており、同じ軸の本件を適用しない理由がない。よって CLOSE せず OPEN を維持する。

**ファイル状態: OPEN**
次にやること: #89 mi の `A:「Kāore au」` を `C:「Kāore」`（否定、同文 haw `ʻAʻole`=C と整合）＋ `A:「au」`（主語）に分割する（語順 C→A→B、隣接同役なし）。これのみで CLOSED 可。

## レビュアー再評価 — round 14 (Dr. Teuira Mānoa-Rakotovao / @reo_moana)

本ファイルには round13 に対する開発チームの文章回答が未記載だが、orchestrator が直接 live を更新した可能性があるため、round10→12→13 と3度連続で残課題としてきた唯一の actionable（#89 mi `Kāore au` の否定辞＝主語 二重融合）が消化されたかを `.wf_langmap_query.mjs` でライブ直接照合した。あわせて round12 FIX 群と過去確定修正の回帰有無を再確認した。

### A. 残課題（#89 mi）の検証 — ✓ 修正確認（live 反映済み）

- **#89 [mi] → ✓ 承認（修正確認済み）。** ライブ確認: `C:「Kāore」 A:「au」 B:「e」 D:「kitea」 E:「te」 G:「kupuhipa」 F:「Wi-Fi」`。round10/12/13 で当方が指摘した `A:「Kāore au」`（否定辞＋主語の役割 A 二重融合）が、当方の提案どおり **否定辞 Kāore=C（同文 haw `ʻAʻole`=C と整合）／主語 au=A** に分割された。en の `A:「I」 B:「can」 C:「't」 …` に照らし、否定役 C が独立セグメントとして現れ、A の二重塗りが解消。語順は C→A→B→D で隣接同役は生じていない。同一文の他5変種（haw `C:「ʻAʻole」 A:「au」`、mg `B|C:「Tsy」…A:「‌ko」`、pau `B|C:「diak」`、fj `C:「sega ni」`、sm `C:「E lē」`）と否定処理が完全に揃い、系統的不整合も解消した。完了。

### B. round12 FIX 群の残存再確認（回帰なし）

- **#16 [haw] → ✓ 残存＋付記解消。** ライブ `C:「Hoʻomaka」 B:「ka kiʻiʻoniʻoni」 A:「i ka hola ʻehia」`。round12 で解消した「誤った A 重複」が維持。さらに round13 で当方がスタイル付記とした隣接同役 B（`B:「ka」 B:「kiʻiʻoniʻoni」`）も、冠詞を名詞 B セルに統合した `B:「ka kiʻiʻoniʻoni」` へ整理され、隣接同役回避方針にも沿う形に。完了。
- **#17 [mg] → ✓ 残存。** ライブ `B:「Manana」… A:「aho」`。
- **#39 [mi] → ✓ 残存。** ライブ `E:「Me oho」 A:「ahau」 B:「i te ata」 C:「āpōpō」`。
- **#81 [mi] → ✓ 残存。** ライブ `D:「He mamae」 A:「tōku」 B:「māhunga」 C:「i tēnei rā」`。

### C. 過去確定修正の残存再確認（回帰なし・虚偽 applied なし）

- **#66 [fj] `B:「na uca」`** / **#1 [mg] `B:「Te」… A:「aho」`** / **#77 [fj] `C:「E a kurabui」… B:「vua」 E:「ni sivi」`** / **#33 [fj] `C:「sara vakalevu」`** / **#94 [pau]（英語プレースホルダ撤去済）** — いずれも live に残存。round1〜13 の確定修正に回帰なし。orchestrator が round13 後に #89 mi（および #16 haw 付記）を反映した内容も虚偽なく live と一致。

### 新規指摘

- なし。残課題消化の検証中に新たな明確な誤りは発見されなかった。⛔3-way の残余は所有接尾抱合（mg -ko/-ny、pau -ek）・属格複合単一語（mg valim-panadinana/isan-alina）・環状接辞（haw Ke…nei、mg ity…ity）・接頭辞統合動詞（mg Niresaka 等）・単一語否定辞・TAM 融合という、いずれも防御可能な類型差による正当 KEEP のみ。分割優先方針に照らしても追加 actionable は存在しない。

### CONCEDE（本ラウンド追加分）

- なし（過去ラウンドで計8件を譲歩済み。本ラウンドは残 actionable の消化確認のみで、譲歩すべき新事項なし）。

### スコアカード (round 14)

- round10/12/13 の唯一の残 actionable（#89 mi 否定辞＝主語 分割）: **✓ 修正確認済み**（live で `C:「Kāore」 A:「au」` に分割）。
- round12 FIX（#16haw/#17mg/#39mi/#81mi）: ✓ 全件 live 残存（#16 haw は付記の隣接同役も解消）。
- 本ラウンド新規 actionable: 0 件。
- 累計 CONCEDE: 8 件（変動なし）。
- 残課題: なし。round1〜13 で指摘した全ての明確誤り・綴り・語彙・役割誤付与・分割漏れ・自然さ懸念が live で修正・確認済み。残る全項目は承認済み修正、防御可能な convention（所有接尾抱合 / TAM融合 / 属格複合語 / 環状接辞 ity…ity・Ke…nei / 接頭辞統合動詞 / #70 時刻枠 / #84 後置修飾 / #80 名詞化 / #92 借用）、または妥当な HELD（#51fj taleitaki / #87 pai / #90 pau / #57 sm lelei）。

3度連続で OPEN を維持してきた #89 mi が本ラウンドで分割・確認できたことにより、群26 に actionable な残課題は存在しない。

**ファイル状態: CLOSED — 残課題なし**
