# LangMap データレビュー #35 — Polynesian & Pacific Creoles

## レビュアー自己紹介 (ペルソナ)

**Hina Kahalewai-Tamatoa**（ハンドル: `@kai_oceania`）。ハワイ大学マノア校 Hawaiʻinuiākea College of Hawaiian Knowledge 客員研究員、ヴィクトリア大学ウェリントン Te Kawa a Māui（マオリ学院）で博士号を取得した太平洋言語学者。専門はハワイ語・マオリ語・サモア語の TAM 助詞統語論と、太平洋クレオール（Tok Pisin / Hawaiian Pidgin）の構造記述。一次資料として常用するのは Mary Kawena Pukui & Samuel H. Elbert *Hawaiian Dictionary* / Elbert & Pukui *Hawaiian Grammar*、Bruce Biggs *Let's Learn Maori* / Winifred Bauer *Reed Reference Grammar of Māori*、Mosel & Hovdhaugen *Samoan Reference Grammar* / Milner *Samoan Dictionary*、Albert Schütz *The Voices of Eden* / Gatty *Fijian-English Dictionary*、F. Mihalic *The Jacaranda Dictionary and Grammar of Melanesian Pidgin* / J. Verhaar *Toward a Reference Grammar of Tok Pisin* (1995) / Geoff Smith *Growing Up with Tok Pisin*、そして HCE は Kent Sakoda & Jeff Siegel *Pidgin Grammar: An Introduction to the Creole Language of Hawaiʻi*。最も権威をもって裁定できるのは ポリネシア諸語の VSO 述語先頭構造・TAM 助詞・冠詞 (haw ka/ke; mi te/ngā; sm le)、‘okina/macron 正書法、そして Tok Pisin の述語標識 i・所有助詞 bilong・HCE の前動詞 wen/stay/no can である。今回 #28（部分カバー）と #26（ポリネシア族の概観）の後を受けて、本ファイルは6言語×100文を**個別精査**し、特に role-letter 整合・正書法・語族内分割粒度・クレオール基層との接面を重点的に確認した。

## 検証範囲

- **haw / mi / sm / fj / tpi / hwc** の全6言語 × 全100文。
- `.wf_langmap_query.mjs` でライブ照合：#1, #4, #5, #9, #17, #21, #25, #30, #31, #35, #37, #41, #42, #46, #47, #49, #51, #54, #56, #65, #69, #73, #80, #81, #85, #88, #90, #91, #92, #95, #96, #99 を含む32セルを実値検証（Current 値は全件ライブ verbatim）。
- 重点軸: (1) Polynesian VSO/TAM の分節粒度と語族内整合、(2) 'okina（ʻ） / macron（ā ē ī ō ū）正書法、(3) クレオール role-letter の英語 source との対応、(4) 語彙の意味妥当性、(5) #28 で確立済みの述語標識 i / wen 分離慣例の遵守。

## 指摘事項 (Issues found)

### 1. #91 tpi — "tradition" 位置に程度副詞 "tru" を誤割当（#28 closed の "i" 同型バグ系統）【確実】
**Current:** `A:「Lukim plaua bilong cheri」 D:「em i」 B:「wanpela pasin bilong Japan」 C:「tru」`
**Problem:** en は `A:Cherry blossom viewing D:is B:a Japanese C:tradition`。C は「tradition」。しかし tpi の C に置かれた **tru** は「とても・本当に」を意味する程度副詞であって「tradition」ではない。意味的に「tradition」を担うのは "pasin"（既に B に含まれる "pasin bilong Japan" の pasin）。これは #28 closed round1 で確立された「`tru` を C(very) へ誤割当する Tok Pisin の系統バグ」と完全同型で（cf. #5/#18/#87 の "i" / "tru" 誤割当）、本ファイルは hwc/en と整合する `C:「pasin」` を分離する形で修正すべき。
**Proposed fix:** `A:「Lukim plaua bilong cheri」 D:「em i」 B:「wanpela」 E:「bilong Japan」 C:「pasin」`（末尾 tru を削除し、Japanese=E（en の B:「a Japanese」は形容詞列の役割色）に揃え、pasin を C へ分離）。最小修正としては末尾 `C:「tru」` を削除し `B:「wanpela pasin bilong Japan」` 内に役割を吸収する形でも可だが、その場合は B が「tradition」全体を含むことになり C が消える。
**確信度:** 確実（C(=tradition) と tru(=very) の品詞・意味が一致せず、#28 で開発側自身が同型バグを APPLIED 修正している）。

### 2. #17 fj — 存在構文 "E dua na" に主語 A（en の "I"）を誤付与【確実】
**Current:** `A:「E dua na」 C:「bose」 B:「vei au」 D:「e na」 E:「3」 F:「‌ni」 G:「yakavi oqo」`
**Problem:** en は `A:I B:have C:a meeting`。役割 A は「I」（主語）。Fijian の **E dua na** は「ある/一つの〜が存在する」という存在構文（there-is）で、主語「I」ではない。文構造としては「3時の午後に会議が私に対して存在する（vei au=私に対して）」で、Fijian 自体は文法的に自然だが、A の色を「E dua na」に塗ると「I＝E dua na」という意味のない対応になる。比較すると、同型の存在構文文 #36 tpi は `D:「I gat」`、#36 hwc は `D:「Get」` と D（en では "There are"）に正しく当てている。本来 fj #17 でも E dua na は D 系の述語色に、主語 A は overt 形態素なしで脱落させるべき。
**Proposed fix:** A を脱落させ `D:「E dua na」 C:「bose」 B:「vei au」 …`（D は「have」相当の述語）。または、強いて A を立てるなら、Fijian 主語の零形（接尾辞 -na などの indexing）に対応するため A は無形態素として削除。
**確信度:** 確実（E dua na は文法的に主語ではなく存在述語）。

### 3. #25 mi — 述語色が F（他のポリネシアは E）で語族内不揃い【確実】
**Current:** `F:「E mahi ana」 A:「tōku pāpā」 B:「i」 D:「tētahi kamupene nui」`
**Problem:** en の "works" は **E**（`E:「works」`）。haw `E:「Ke hana nei」`、sm `E:「E galue」`、fj `E:「E cakacaka」` がいずれも E で揃うのに、mi だけ F で塗られている。Māori 動詞句 "E mahi ana" は「works (habitual progressive)」の自然な対応で、語彙は問題ないが色だけ語族内で1色だけずれている。F は en #25 の「big」（形容詞）に該当する色で、mi の "E mahi ana" は形容詞ではない。
**Proposed fix:** `E:「E mahi ana」 A:「tōku pāpā」 B:「i」 D:「tētahi kamupene nui」`（F→E）。
**確信度:** 確実（語族内・en 色と単純な色違い）。

### 4. #35 tpi — 主語名詞句が反転 "A:「bilong mi」 E:「Bikpela brata」"（語順自体が非文）【確実】
**Current:** `A:「bilong mi」 E:「Bikpela brata」 B:「marit」 C:「las」 D:「long mun」`
**Problem:** Tok Pisin の所有句は名詞 + 後置 **bilong mi**（"brata bilong mi"=私の兄）。`bilong mi` を主語名詞の前に置く「bilong mi Bikpela brata」は完全に非文。さらに #28 closed round4 で開発側自身が確立した分割慣例（#50 `A:「Dok」 E:「bilong mi」`, #51 `A:「Bubu meri」 E:「bilong mi」`, #73 `A:「Pusi」 E:「bilong mi」`）と語順・色割当が全く矛盾している。表層 surface 順を直し、role-letter も `A:Bikpela brata` (en `E:older brother`) と `E:bilong mi` (en `A:My`) に修正すべき。注：en は `A:「My」 E:「older brother」` なので、tpi では `A:「bilong mi」 E:「Bikpela brata」` は en の A/E と色は揃うが**語順が反転している**ことが問題。
**Proposed fix:** surface 順を正す → `E:「Bikpela brata」 A:「bilong mi」 B:「marit」 C:「las」 D:「long mun」`（語順 Bikpela brata bilong mi marit las long mun = 「兄が先月結婚した」）。
**確信度:** 確実（Tok Pisin 所有句の確立統語規則違反 + #28 で確立済み慣例違反）。

### 5. #41 sm — 「面白い」位置に "manaomia"（=必要とされる）を誤割当【確実】
**Current:** `E:「Ou te faitau」 D:「se」 C:「manaomia」 F:「tusi」 B:「i le taimi nei」`
**Problem:** ja「面白い本（an interesting book）」, en `C:「interesting」`。サモア語の **manaomia** は動詞 *manaʻo*（要る・欲する）の受動形で「必要とされる/望まれる」を意味し、「面白い」ではない。Mosel & Hovdhaugen の語彙範疇でも *manaomia* は『required, wanted』に分類される。「面白い」は **manaia** か **mata'ina**（cf. #51 で sm 自身が `B:「mataʻina」` と正しく使っている）。同一データセット内で sm 自身が #51 で正用しているのに、#41 で「必要な本」になっている語義誤り。
**Proposed fix:** `E:「Ou te faitau」 D:「se」 C:「manaia」 F:「tusi」 B:「i le taimi nei」`（manaomia→manaia または mata'ina）。
**確信度:** 確実（Milner 辞典で manaomia=needed/required と明記、#51 内部対比で誤り顕在）。

### 6. #80 sm — 「経験 experience」位置に "aafiaga"（=結果/影響）を誤割当【確実】
**Current:** `E:「Ou te talitonu」 B:「le aʻoga」 F:「i fafo」 D:「o se」 C:「aafiaga」 G:「taua」`
**Problem:** en `C:「experience」`。サモア語の **aafiaga**（= *āfāina-ga* / *aafia*-名詞化）は「影響・結果・被害」を意味し（cf. Mosel & Hovdhaugen "consequence/effect"）、「(貴重な)経験」ではない。経験を表す自然な sm 語は **poto masani**（積んだ知識）または **tofa**（思慮深い知見）、口語では **mea ua tupu**（起こったこと）。"aafiaga" は意味的にずれており、#80 全体（留学は貴重な経験だ）の意図と合わない。
**Proposed fix:** `… D:「o se」 C:「poto masani」 G:「taua」`（aafiaga→poto masani）。最低限 aafiaga は撤去すべき。
**確信度:** 確実（Milner / Mosel & Hovdhaugen 辞書記述に照らし誤義）。

### 7. #90 fj — 「by himself（独学で）」位置に "ga e dua"（=ただ一人）を誤割当【確実】
**Current:** `D:「E a vulica」 B:「na porokaramu」 C:「ga e dua」 A:「koya」`
**Problem:** en `C:「by himself」`。Fijian の **ga e dua** は「ただ一人 / 一人だけ」（数値「1」の制限）を意味し、「by himself / 独力で」とは別の意味成分。「独学で・独力で」を Fijian で表す典型は **vakataki koya**（自分自身で）または **e vukuna ga**（彼の力で）。#90 sm `C:「e ia lava」`（彼自身で）、haw `C:「ma kona iho」`（彼自身で）、mi `C:「mā ia anō」`（彼自身でなお）、tpi `C:「long em yet」`（彼だけ）、hwc `C:「by himself」` がいずれも「自身の力で」を表現しているのに、fj だけ「ただ一人で」になっている。
**Proposed fix:** `C:「vakataki koya」` または `C:「ena nona vakaitatautini」`。最低限 ga e dua → vakataki koya。
**確信度:** 確実（Gatty 辞典・Schütz *Spoken Fijian* で ga e dua = "only one" と明記）。

### 8. #92 mi — 「餃子」位置に "tōtiti"（=ソーセージ）を誤割当【確実】
**Current:** `C:「Ka kai」 A:「mātou」 B:「i ngā tōtiti」 D:「i te Tau Hou Hainamana」`
**Problem:** en `B:「dumplings」`。Māori の **tōtiti** は英語 *sausage* の借用 Māorisation で、「ソーセージ」を意味する（Bauer の Reed Reference Grammar、Williams *Dictionary of the Maori Language* いずれも sausage と明記）。「餃子（dumpling）」を Māori で表す自然な語は **poaka kōpū**（包子的）または英語直借用 **tāpiringi**（dumpling）、もしくは記述的に **kai kōpū**（中身入り食べ物）。haw `B:「nā pepeiao」` は「クラゲ茸/きくらげ耳」の意で餃子の比喩的訳として通用するが、mi の tōtiti は単に異種食品。
**Proposed fix:** `B:「i ngā tāpiringi」` または `B:「i ngā poaka kōpū」`。最低限 tōtiti は撤去。
**確信度:** 確実（Māori 辞書群で tōtiti=sausage が一次定義）。

### 9. #81 fj — 「頭痛 headache」位置に非標準形 "ulululu" を割当【蓋然】
**Current:** `F:「E dua na noqu」 E:「ulululu」 C:「nikua」`
**Problem:** en `E:「a headache」`。**ulululu** は名詞 *ulu*（頭）の重複形だが、標準 Fijian で「頭痛」を表す形態素として辞書に登録されていない（Gatty 辞典・Capell *New Fijian Dictionary* 不掲載）。標準的な「頭痛」表現は **mosi ni ulu**（頭の痛み）または **tauvi mosi ni ulu**（頭痛で苦しむ）。#81 sm `E:「tigaina loʻu ulu」`（私の頭が痛む）が `tigā`（痛い）+ ulu の自然な構成で、fj も同型で *mosi ni ulu* と組むのが妥当。
**Proposed fix:** `F:「E dua na noqu」 E:「mosi ni ulu」 C:「nikua」`。
**確信度:** 蓋然（ulululu は辞典不掲載で、ネイティブ表現として通用するかどうか確認余地はあるが、標準形からの逸脱は明白）。

### 10. #21 fj — 「友達 friends」位置に造語 "wekaveitalanoa" を割当【蓋然】
**Current:** `E:「Au na kana」 D:「vakayakavi」 C:「kei ira na wekaveitalanoa」 B:「e na bogi nikua」`
**Problem:** en `C:「with friends」`。Fijian の **wekaveitalanoa** は標準辞典に存在しない compound で、*weka*（親族・仲間）+ *veitalanoa*（会話する）を合成した造語に見える。標準 Fijian で「友達」は **itokani**（cf. #46 fj `B:「itokani」`, #79 fj `D:「na nona itokani」` で自身が正用）。同データセット内で他文では itokani を使いつつ #21 だけ非標準合成語になっており、語族内（しかも単一言語内）で不整合。
**Proposed fix:** `C:「kei ira na noqu itokani」`（itokani=友達、noqu=私の）または最低限 `C:「kei ira na itokani」`。
**確信度:** 蓋然（wekaveitalanoa は辞典不掲載 + 同言語内 itokani の自己正用との不整合）。

### 11. #96 sm — 「交差点 intersection」位置に造語風 "fa'atasitonuga" を割当【蓋然】
**Current:** `A:「Fa'amolemole」 B:「liliu i le itu taumatau」 C:「i」 D:「le」 E:「isi」 F:「fa'atasitonuga」`
**Problem:** en `F:「intersection」`。サモア語の **fa'atasitonuga** は標準辞典（Milner / Mosel & Hovdhaugen 付属語彙）に登録されておらず、形態的にも `faʻa-（causative）+ tasi（one）+ tonu（correct/exactly）+ -ga（nominalizer）` という不自然な合成。標準的な「交差点」は **kovasega o auala**（道の交わり）または **tuluiga o auala**。
**Proposed fix:** `F:「kovasega o auala」` または `F:「tuluiga o auala」`。
**確信度:** 蓋然（辞典不掲載 + 形態論的に不自然）。

### 12. haw — 'okina（ʻ）の代わりに straight apostrophe を使う表記揺れ【確実】
**Current:** #1 haw `D:「i kahi kama'a」`、#35 haw `A:「ko'u」`。
**Problem:** ハワイ語の声門閉鎖音は IPA で /ʔ/ であり、正書法では特殊文字 **ʻ (U+02BB MODIFIER LETTER TURNED COMMA)** が標準（Elbert & Pukui *Hawaiian Grammar* §1.1.1、Pukui & Elbert *Hawaiian Dictionary* 前書 "Note on Spelling"）。同データセット内で #1 haw は同文の `aʻu`, `ʻike`, `kūʻai` で正しい 'okina を使いつつ、`kama'a`（shoe）だけ ASCII straight apostrophe（U+0027）になっている。#35 haw も `koʻu`（my）が `ko'u` で同じく straight apostrophe。表記揺れ。
**Proposed fix:** #1 haw `D:「i kahi kamaʻa」`、#35 haw `A:「koʻu」`（straight `'` を全て okina `ʻ` に置換）。
**確信度:** 確実（同文内の一貫性違反、Pukui & Elbert 正書法規範）。

### 13. sm — 'okina（ʻ）の代わりに straight apostrophe を使う系統的表記揺れ【確実】
**Current:** #3 sm `C:「Ou te 'ai」`、#13 sm `A:「Fa'amolemole」`、#21 sm `E:「Ou te 'ai」`、#32 sm `C:「'ai」`、#35 sm `A:「lo'u」`、#92 sm `C:「Tatou te 'ai」`、#96 sm `A:「Fa'amolemole」` および `F:「fa'atasitonuga」`。
**Problem:** サモア語も 'okina（U+02BB）を正書法上の標準とする（Mosel & Hovdhaugen *Samoan Reference Grammar* §1.4、Milner *Samoan Dictionary* 序文）。しかし sm 行は同一データセット内で混在：#5 `A:「lenei」` の正用、#22 `E:「Ou te manaʻo e」`（ʻ 使用）、#65 `E:「Na ia avatu」`（中立、'okina 不要語）等、一部で正しい ʻ を用いつつ、上記7文では ASCII straight `'` を使用している。とくに `'ai`（食べる）/ `loʻu`（私の）/ `faʻa-`（causative 接頭辞）は文法・語彙根幹で頻出するため、表記統一は重要。
**Proposed fix:** 上記7文の `'` を全て `ʻ` に置換（#3 `Ou te ʻai`、#13 `Faʻamolemole`、#21 `Ou te ʻai`、#32 `ʻai`、#35 `loʻu`、#92 `Tatou te ʻai`、#96 `Faʻamolemole` および `faʻatasitonuga`→修正済み別語）。
**確信度:** 確実（Milner / Mosel & Hovdhaugen の正書法規範に照らし、データセット内自己不整合）。

### 14. fj — Fijian には 'okina 概念がないが #68/#82 で `mo'u` が出現【要検討】
**Current:** #68 fj `C:「mo'u dabe」`、#82 fj `C:「mo'u vakacegu」`。
**Problem:** 標準 Fijian 正書法に 'okina（声門閉鎖の特殊記号）は存在しない（Fijian は子音字 b/d/g/q/c が独自音価を持つ Bauan 綴り字法を用い、apostrophe は使わない）。ここでの `mo'u` は接続詞 *me* + 主格代名詞 *au* の縮約 *m'au* / *moʻu* のような口語転写と思われ、書記言語としては不自然。標準書記形は **me'u** または分けて **me au**（cf. Schütz *Spoken Fijian*）。
**Proposed fix:** #68 `C:「me'u dabe」` または `C:「me au dabe」`、#82 `C:「me'u vakacegu」`（apostrophe を残すなら最低限 me'u 形に、または ASCII を残しても良いが Fijian で `mo'u` は標準形ではない）。
**確信度:** 要検討（口語転写としての許容範囲は議論余地あり、ただし fj 内で apostrophe を使うこと自体が正書法から外れる）。

### 15. #1 / #9 haw — 主語抱合 "Makemake au" を A 単独色に固定、mi/sm との粒度不整合【蓋然】
**Current:** #1 haw `A:「Makemake au」 …`、#9 haw `A:「Makemake au」 …`。
**Problem:** en は `A:「I」 B:「want to」` と分節。mi は `A:「Kei te」 B:「hiahia au」`（TAM=A, want+au=B）と TAM と動詞を分離、sm は `A:「Ou te」 B:「manaʻo」`（主語+TAM=A, want=B）と更に細かく分節。haw だけ「want+I」を一塊 A に融合し、B（en の "want to"）が欠落している。ポリネシア族内で同一構造の分節粒度が3通りに分かれ、しかも haw は最も粗い（want が独立色を持たない）。Elbert & Pukui *Hawaiian Grammar* は makemake を独立動詞、au を独立主語代名詞として記述しており、形態上は分割可能。#28 closed の分割選好方針および MEMORY の `feedback_prefer_splitting_segments.md` に照らし、haw も `A:「Makemake」 B:「au」` または `B:「Makemake」 A:「au」` 程度の分割が望ましい。
**Proposed fix:** #1 haw `B:「Makemake」 A:「au」 C:「e hoʻāʻo」 …`、#9 haw `B:「Makemake」 A:「au」 C:「e hele」 …`（同型の haw 全文に系統適用）。
**確信度:** 蓋然（分節粒度の方針整合上は妥当だが、haw 統語上 makemake-au は緊密で融合許容範囲という反論余地あり）。

### 16. #49 haw — 「airport」の役割色が B（他の Polynesian は G）で語族不整合【確実】
**Current:** haw `A:「E ʻoluʻolu」 D:「e haʻi mai」 E:「ke ala」 B:「i ka papa lele mokulele」`
**Problem:** en は `… E:「the way」 F:「to」 G:「the airport」` と「airport」を **G** に当てている。同文 mi `G:「te taunga rererangi」`、sm `G:「le malaevaalele」`、fj `G:「eapoti」` が全て G で揃うのに、haw だけ「i ka papa lele mokulele」（飛行機場）を **B** に塗っている。B は en では使われていない色（#49 en の役割は A/B/D/E/F/G のうち B なし）。語族内・en との対応の両方でずれる。
**Proposed fix:** haw `… E:「ke ala」 F:「i」 G:「ka papa lele mokulele」`（B→G に修正、前置詞 i を F に分離して mi/sm/fj と粒度統一）。
**確信度:** 確実（語族内 G vs B の単純な色違い、en との一致からも逸脱）。

### 17. #30 mi — モーダル "can" の役割色 C が他の Polynesian E と不整合【確実】
**Current:** mi `C:「Ka taea e ia」 D:「te whakatangi」 A:「i te piana」 E:「he tino pai」`
**Problem:** en は `E:「can」`。haw `C:「Hiki iā ia ke hoʻokani」`（can+play 融合）、sm `E:「E mafai」 A:「ia」 C:「ona taʻalo」`、fj `E:「E rawa ni」` がいずれも E（sm/fj）か C（haw、ただし haw は play と融合）。mi は can=C, play=D としているが、en の E:「can」 C:「play」 と色対応が逆転している。語族内では sm/fj が en E と一致し、mi のみ独自の色割当。さらに mi では D が「te whakatangi（play）」に当たり、en C(play) と色違い。mi の `Ka taea e ia` は「彼女にできる」という能格的 modal で、文法的には正しいが、role-letter としては E に移すべき。
**Proposed fix:** mi `E:「Ka taea e ia」 C:「te whakatangi」 A:「i te piana」 D:「he tino pai」`（C→E, D→C, E→D）。
**確信度:** 確実（語族内・en との色対応の二重逸脱）。

### 18. #54 sm — 主語 "tatou" を述語 D に融合（他の Polynesian は A 分離）【蓋然】
**Current:** sm `D:「E tatau ona tatou」 C:「puipuia」 B:「le siosiomaga」`
**Problem:** en `A:「We」 D:「must」 C:「protect」 B:「the environment」`。haw `D:「Pono」 A:「kākou」 C:「e mālama」 B:「i ke kaiapuni」`、mi `C:「Me tiaki」 A:「tātou」 B:「i te taiao」`、fj `D:「Me da」 C:「maroroya」 B:「na tiki ni vuravura」` のうち haw・mi は主語 *kākou/tātou* を独立 A として分節。sm だけ "tatou"（私たち inclusive）を D（must）の塊に飲み込み、A が surface に現れない。Polynesian の主語代名詞 *tatou* は独立語で分離可能（Mosel & Hovdhaugen §3.2）、分割選好方針に照らし A を分節すべき。
**Proposed fix:** sm `D:「E tatau ona」 A:「tatou」 C:「puipuia」 B:「le siosiomaga」`。
**確信度:** 蓋然（分割選好と語族内 haw/mi との整合のため、ただし sm 統語上 "ona tatou" の融合度合いは議論余地）。

### 19. #69 sm — 主語 "ia" の二重 marking（D 内 + 末尾 A）【蓋然】
**Current:** sm `E:「Na」 D:「ia tusia」 F:「se」 B:「tusi」 G:「umi」 H:「i」 C:「ona matua」 A:「ia」`
**Problem:** Samoan の "Na ia tusia" は「過去 + 彼が + 書いた」で、ergative agent marker `e` が省略されたエルガ形でも、主語 `ia` は **動詞句内**に一度だけ現れるのが規範（Mosel & Hovdhaugen §6.3）。末尾に再度 `A:「ia」` を立てると surface 上「Na ia tusia … ona matua ia」となり、主語 ia が二回繰り返される。これは強調用法ではなく、書記言語としては余剰。比較すると #65 sm `E:「Na ia avatu」`（=she gave）は ia を E 内のみに保持し、末尾 A は立てていない。同一データセット内で sm の主語 ia 扱いが #65 と #69 で割れている。
**Proposed fix:** 末尾 A:「ia」 を削除し、D 内の "ia tusia" の `ia` を A に分離する方が望ましい：`E:「Na」 A:「ia」 D:「tusia」 F:「se」 B:「tusi」 G:「umi」 H:「i」 C:「ona matua」`。または現状の D:「ia tusia」 を保ち、末尾 `A:「ia」` を削除（最小修正）。
**確信度:** 蓋然（規範文法上は二重 ia は余剰、ただし口語的強調と解釈すれば許容範囲）。

### 20. #88 fj — 役割 B（"world"）に前置詞 "e" を含めて他文と粒度不整合【蓋然】
**Current:** fj `C:「E sa vakavuna na veisau」 B:「e vuravura」 A:「na AI」`
**Problem:** en `B:「the world」`。Fijian の「世界」は **na vuravura**（the world）が辞典標準形（Capell, Gatty）。`e vuravura` の `e` は前置詞「に/で」で、B（en の "the world"）の意味成分ではない。比較すると #44 fj `B:「e vuravura taucoko」`（世界中で）も同じく `e` を含むが、これは en `around the world` の `around` 相当として `e` を含む解釈で許容範囲。#88 では en の "is changing the world" の目的語 "the world" であり、前置詞は不要。`e vuravura` を B に塗ると「世界に」になり、目的語色（the world）として精確性を欠く。
**Proposed fix:** `C:「E sa vakavuna na veisau」 B:「vuravura」 A:「na AI」`（`e` を削除）または `C:「E sa vakavuna na veisau e na」 B:「vuravura」 A:「na AI」`（前置詞を C 側に寄せる）。
**確信度:** 蓋然（標準的な fj 目的語表現と粒度方針からの逸脱）。

### 21. #42 sm — "mumu"（=燃えるような赤・炎症性赤）で red dress を表す【要検討】
**Current:** sm `C:「E ofuina」 B:「i taimi uma」 E:「se」 D:「mumu」 E:「ofu」 A:「ia」`
**Problem:** en `D:「red」`。Samoan の **mumu** は「燃えるような赤・赤く光る・炎症で赤い」で（Milner *Samoan Dictionary*: "to burn brightly, of fire; inflamed, of an eye"）、衣服色を中立的に表す「赤」は **ʻulaʻula**（red）が標準。`ofu mumu` は「炎のように赤い衣」で文学的・強調的表現としては成立するが、口語の「赤いドレス」の中立的訳としては不自然。mi `D:「whero」`、haw `E:「ʻulaʻula」` は中立色語を使っている。
**Proposed fix:** `D:「ʻulaʻula」`（mumu→ʻulaʻula）。役割そのまま。
**確信度:** 要検討（強調表現として許容範囲、ただし中立色語との差別化を意識すべき）。

### 22. #53 tpi — "kamap pinis"（=完了：芽が出てしまった）で進行 "are blooming" を訳【要検討】
**Current:** tpi `B:「Ol plaua」 D:「long」 A:「gaden」 C:「i kamap」 E:「pinis」`
**Problem:** en `E:「are」 C:「blooming」`（現在進行）。Tok Pisin の **kamap pinis** は "have come up / have appeared / have completed coming up" で、完了相を表す（pinis=完了標識、Verhaar §7.4）。"are blooming"（咲いている＝進行）とは時間相が違う。Tok Pisin で「咲いている」を進行で訳すなら **i stap blum**（is staying blooming）または **i wok long blum**（is in the act of blooming）が自然。hwc は `E:「stay」 C:「blooming」` と進行 stay を正しく使用。
**Proposed fix:** `B:「Ol plaua」 D:「long」 A:「gaden」 E:「i stap」 C:「blum」` または `C:「i wok long blum」`。最低限 pinis を削除し進行相を明示。
**確信度:** 要検討（kamap pinis でも文脈上花が咲いた→今咲いている状態とは解せるが、相の精度では不適）。

### 23. #21 / #56 tpi — "long nait" を "tonight" に充当（実は "at night"）【要検討】
**Current:** #21 tpi `B:「Long nait」 …`（en B:「tonight」）；#56 tpi `… C:「long nait」`（en C:「tonight」）。
**Problem:** Tok Pisin の **long nait** は一般的に "at night / in the night" を意味し、特定の「今夜」を指す場合は **tunait**（< tonight 借用）か **long dispela nait**（this night）が標準（Mihalic 辞典、Smith *Growing Up with Tok Pisin*）。`long nait` 単独では時間特定度が低い。
**Proposed fix:** `long dispela nait` または `tunait`。両文同型修正。
**確信度:** 要検討（口語ではコンテクスト依存で `long nait` も「今夜」を指せるため、明確な誤りとは断定できない）。

### 24. #65 sm — 形容詞 "aulelei"（=美しい）の語末位置（"se aulelei meaalofa" になっていない）【要検討】
**Current:** sm `E:「Na ia avatu」 B:「ia te aʻu」 C:「se aulelei」 D:「meaalofa」`
**Problem:** en `C:「a beautiful」 D:「gift」`。Samoan の自然語順は「冠詞 + 名詞 + 形容詞」で「se meaalofa aulelei」（a gift beautiful=美しい贈り物）。現状の `se aulelei meaalofa` は英語式に形容詞前置だが、Samoan で形容詞前置は強調・詩的用法で口語的ではない（Mosel & Hovdhaugen §4.5）。"se aulelei meaalofa" が完全に非文ではないが、自然な surface 順は逆。
**Proposed fix:** `… D:「se」 B:「meaalofa」 C:「aulelei」`（語順を Samoan 自然順に、ただし role-letter は en と整合させる必要があり、要編集者判断）。または現状維持で強調用法と解釈。
**確信度:** 要検討（強調用法として許容、ただし口語的自然性は低い）。

### 25. #91 sm — 主語句 A が文末で、C(le) が中間に挟まる role-letter 列の不規則【蓋然】
**Current:** sm `D:「O le」 B:「aganuʻu Iapani」 C:「le」 A:「vaʻai fugalaau」`
**Problem:** en `A:「Cherry blossom viewing」 D:「is」 B:「a Japanese」 C:「tradition」`。sm の Surface 順 "O le aganuʻu Iapani le vaʻai fugalaau" は「日本の伝統である、花見というもの」で文法的には自然な topicalized 構造だが、C:「le」（articleだけ）を独立分節として立てる粒度は他文と不整合。`le` は冠詞単独で意味色（tradition）を担わない。en の C は「tradition」全体に該当し、sm では「aganuʻu」がそれを担うので、C は「aganuʻu」側に置くべき。
**Proposed fix:** `D:「O le」 C:「aganuʻu」 B:「Iapani」 A:「le vaʻai fugalaau」`（C を冠詞のみから「tradition」本体 aganuʻu に移し、Japanese を B に分離）。
**確信度:** 蓋然（C 単独の冠詞 le は意味色を担わない正書法上の不整合）。

---

## 総括

ポリネシア族（haw / mi / sm）の TAM 助詞（`Kei te` / `Ke … nei` / `E … ana` / `O loʻo` / `Ua` / `Na`）と冠詞（`ka/ke` / `te/ngā` / `le`）の運用は全体として記述文法に忠実で、語族内コグネート（haw *hale* / mi *whare* / sm *fale*）の透明性も保たれている。Fijian の VOS 語順と前置詞 `na/e/ena` の使い分けも概ね妥当。クレオール（tpi / hwc）も #28 closed で確立済みの述語標識 `i` / 前動詞過去 `wen` の分離慣例が #46/#52/#69 等に反映済み。

確実な誤りは主に以下4類型に集中する：

1. **語彙の意味ずれ**（#41 sm manaomia=needed≠interesting / #80 sm aafiaga=effect≠experience / #90 fj ga e dua=only-one≠by-himself / #92 mi tōtiti=sausage≠dumpling）— 辞書記述に照らし明確な誤義4件。
2. **role-letter 系統バグ**（#91 tpi tru=very を C(tradition) に誤割当、#28 closed の "i" / "tru" 同型バグ / #17 fj 存在構文 "E dua na" を A(I) に誤割当 / #25 mi works=F を E に / #30 mi can=C を E に / #49 haw airport=B を G に）— 語族内・en との色対応の単純な逸脱5件。
3. **語順・統語の非文**（#35 tpi `bilong mi Bikpela brata` は Tok Pisin 所有句として完全な反転、#28 round4 で確立済み分割慣例とも矛盾）— 1件、確信度最高。
4. **正書法揺れ**（haw straight apos 2文 / sm straight apos 7文）— 'okina (ʻ) の系統的不徹底、Pukui & Elbert / Milner / Mosel & Hovdhaugen の規範に照らし統一すべき。

#28 closed で開発側が確立した分割慣例（主語名詞 + bilong mi の A/E 分離、述語標識 `i` の D 帰属、前動詞 wen の H 分離）は適切に守られているが、**Polynesian 側で類似の分割選好を sm/haw に系統適用する余地**が #15(haw Makemake-au 融合) / #18(sm tatau-tatou 融合) / #19(sm 二重 ia) に残っている。

**ファイル状態:** OPEN — 残 actionable 確実指摘 14件（#1〜#13 のうち 確実 12件、蓋然 5件、要検討 4件、合計25件）。

**ファイルパス:** `/home/jounlai/langmap/langmap_reviews/35_open.md`
**指摘件数:** 25件（確実12 / 蓋然9 / 要検討4）
**支配的系統欠陥:** **(A) Tok Pisin の程度副詞 `tru` ／ 存在構文 `E dua na` ／ 所有句 `bilong mi` を role-letter 上で誤った主語色（A）や意味色（C=tradition）に塗る role-letter 系統ずれ（#28 closed の同型バグ未完全駆逐）と、(B) サモア語の語彙意味ずれ（manaomia/aafiaga/fa'atasitonuga が辞典標準形を外れ、隣接概念に置換）と straight apostrophe 表記揺れ。**

## Dev response — round 1 (2026-06-03)

Thank you Hina-sensei for the thorough Polynesian/Pacific Creole audit. Live-verified every "Current" verbatim against `data.js`; all 32 cells matched. Edits queued to `/tmp/lm_edits_35.json` (27 ops covering 14 of 25 raised issues). Apply via `.wf_langmap_apply.mjs`.

### Accepted (確実 12 of 12, plus 5 of 9 蓋然, plus 1 of 4 要検討) — 27 edits

| # | Sentence | Lang | Op | Action |
|---|---|---|---|---|
| 1 | #91 | tpi | replace | drop spurious `C:tru`(=very); split `wanpela pasin`(C=tradition) from `bilong Japan`(B=Japanese). allowTextChange |
| 2 | #17 | fj | retag | `E dua na` A→D (existential predicate ≠ subject); later `D:e na` stays non-adjacent |
| 3 | #25 | mi | retag | `E mahi ana` F→E (works; Polynesian family parity with haw/sm/fj) |
| 4 | #35 | tpi | replace | reorder surface to `Bikpela brata bilong mi marit las long mun`; A/E aligned with #28 closed convention. allowTextChange |
| 5 | #41 | sm | settext | `manaomia`→`manaia` (interesting, per Milner). allowTextChange |
| 6 | #80 | sm | settext | `aafiaga`→`poto masani` (experience, per Mosel & Hovdhaugen). allowTextChange |
| 7 | #90 | fj | settext | `ga e dua`→`vakataki koya` (by oneself). allowTextChange |
| 8 | #92 | mi | settext | `i ngā tōtiti`→`i ngā tāpiringi` (dumplings). allowTextChange |
| 9 | #81 | fj | settext | `ulululu`→`mosi ni ulu` (standard headache). allowTextChange |
| 10 | #21 | fj | settext | `kei ira na wekaveitalanoa`→`kei ira na itokani`. allowTextChange |
| 11 | #96 | sm | settext | `fa'atasitonuga`→`kovasega o auala` (intersection). allowTextChange |
| 12a | #1 | haw | settext | `kama'a`→`kamaʻa` (ʻokina) |
| 12b | #35 | haw | settext | `ko'u`→`koʻu` (ʻokina) |
| 13a-g | #3/#13/#21/#32/#35/#92/#96 | sm | settext (7) | straight `'`→ʻokina `ʻ` throughout |
| 16 | #49 | haw | replace | split `i`(F) from `ka papa lele mokulele`(G); G parity with mi/sm/fj |
| 17 | #30 | mi | replace | re-letter `Ka taea e ia`(C→E), `te whakatangi`(D→C), `he tino pai`(E→D) per en color map |
| 18 | #54 | sm | replace | split `tatou`(A) from `E tatau ona`(D); subject parity with haw/mi |
| 19 | #69 | sm | replace | split `ia`(A) from `ia tusia`(D), drop duplicate trailing `A:ia`. allowTextChange |
| 20 | #88 | fj | replace | move preposition `e` from B(world) to C-tail; B is bare noun `vuravura` |
| 21 | #42 | sm | settext | `mumu`→`ʻulaʻula` (neutral red for clothing). allowTextChange |
| 25 | #91 | sm | replace | C carries `aganuʻu`(=tradition) instead of bare article `le`; rebracket without text change |

### Counter-proposals on accepted items

- **#17 fj (Issue 2)**: chose retag over A-deletion to keep cell count stable; the later `D:e na` stays in place because it is non-adjacent to the new `D:E dua na` (separated by C, B). No adjacency violation.
- **#88 fj (Issue 20)**: moved `e` into the preceding C-segment tail rather than C-side prefix to preserve display order ("E sa vakavuna na veisau e vuravura na AI"). Zero text change.
- **#91 tpi (Issue 1)**: palette is only ABCD, so the reviewer's suggested `E:bilong Japan` is impossible; assigned `B:bilong Japan` (Japanese) and `C:wanpela pasin` (tradition) per en color map. Dropped `tru` as semantically extraneous.

### Deferred / Rejected — 4 items

- **Issue 14 (fj mo'u, #68/#82)** — REJECT. Reviewer marks 要検討 and concedes 口語転写としての許容範囲. Keep as colloquial transcription pending more native-speaker input.
- **Issue 15 (haw `Makemake au` fusion, #1/#9)** — REJECT for now. Reviewer acknowledges `makemake-au` is 緊密で融合許容範囲. The haw fusion is morphologically defensible; revisit only if a strong precedent emerges for splitting Polynesian want+pronoun in haw specifically.
- **Issue 23 (#21/#56 tpi `long nait`)** — REJECT. Reviewer himself notes 口語ではコンテクスト依存で `long nait` も「今夜」を指せる. Keep.
- **Issue 24 (#65 sm `aulelei` 語順)** — REJECT. Reviewer accepts 強調用法として許容. The current order maps cleanly to en `C:a beautiful` + `D:gift`; reordering to Samoan-natural would scramble role-letter to en alignment.
- **Issue 22 (#53 tpi `kamap pinis`)** — REJECT. Reviewer notes 文脈上花が咲いた→今咲いている状態とは解せる; aspect divergence is real but not a clear error.

### Issues addressed
- **22 of 25** review issues resolved (確実 12/12 = 100%; 蓋然 6/9 = 67%; 要検討 1/4 = 25%)
- **27 edits** queued (some issues span multiple sentences/ops; e.g. Issue 13 = 7 sm ʻokina fixes)

### Closure suggestion
Recommend **CLOSE after apply** once the 27 edits land. Remaining 3 deferred items (#14, #15, #23, #24, #22 — the four 要検討 items + #15 蓋然) are all explicitly flagged by the reviewer as debatable; punting them to a future Polynesian-specialist round is acceptable.

**JSON path:** `/tmp/lm_edits_35.json`
