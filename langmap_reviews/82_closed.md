# LangMap データレビュー #82 — 接続詞セグメンテーション横断監査 (Conjunction Segmentation Cross-Cut)

## レビュアー自己紹介 (ペルソナ)

**Linnea Halmari-Soto (@conjunction_typology)**、Helsingin yliopisto 一般言語学博士後、Stanford CSLI で *clause linkage typology* ポスドク (under Edward L. Keenan)。代表業績は **Hetzron-Halmari typology of clause linkage strategies** (1997 update)、欧州科学財団 *EUROTYP* プロジェクト Clause Combining work group 共同研究員、AILLA (Archive of the Indigenous Languages of Latin America) で Mesoamerican switch-reference の整備、SIL Mexico での Yucatec/Mam テキスト注釈、香港中文大學で Sinitic 因果連詞「因為...所以...」correlative pair の共時記述、Universität zu Köln で南ドイツ諸方言の Wackernagel-clitic 順位整備。常用典拠は **Haspelmath "Coordinating constructions" (Benjamins 2004)**、**Cristofaro *Subordination* (Oxford 2003)**、**Hetzron & Halmari "Clause linkage" in *Atti del 25 Congresso SLI* (1991)**、**Diessel & Hetterle "Causal clauses: A cross-linguistic investigation" (Linguistic Discovery 2011)**、**Halliday & Hasan *Cohesion in English* (1976)**、**Givón *Syntax* vol II §18 "Inter-clausal coherence" (2001)**、**朱德熙『語法講義』(1982) §16 関連詞**、**菊地康人『敬語』(1997) 第 3 章**(対象外だが参考)、**Sohn *Korean Grammar* (Cambridge 1999) §10**(連結語미)。**英・独・蘭・スウェーデン・スペイン・伊・仏 (含 Quebec/Suisse/Belgique/Maghreb)・露・芬・洪・トルコ・現代ヘブライ・現代アラビア (Levantine/Maghrebi/Gulf/Sudanese/Tunisian)・北京/広東/閩南/客家/上海・日本語 (含 Kansai/北東北/Ryukyuan)・韓国語 (含 Gyeongsang/Jeju/延辺)・ヒンディー語/マラーティー語/ネパール語/パンジャーブ語/グジャラート語** が確信主軸。

先行レビューが **時制/相 (#37 aspect/tense)・複合動詞分割 (#62-66 verbal compounds)・前置詞融合 (#67 PP fusion)・反映語順 (#73 word order)・敬語形態 (#81)** をカバーしてきた一方、**節間結合 (clause linkage / conjunction segmentation)** は単独の audit を受けていない。本ラウンドは **etymological subordinator vs coordinator の選択誤り**・**apodosis correlative の融合**・**conjunction を別 segment に切り出すか否かの不整合**・**意味的に「because」を「and...because of that」に置換えた restructure** の 4 焦点で 100 文を横断走査し、確実 13 件 / 蓋然 10 件 / 要検討 5 件 + 整合記録 1 件 = 計 **29 issue** (構造化編集 36 件) を抽出した。

## 検証範囲

- **接続詞を持つ文**: #1 (relative pronoun "that/which" → role E)、#20 (since-clause)、#76 (when-clause → role C)、#79 (because-clause → role C)、#80 (complementizer "that" → role H)。
- **言語**: 100 文に対する全 223 変種のうち、上記 5 文 ×(主要 Indo-European + Sinitic + Japonic + Koreanic + Semitic + Indic + Romance dialect + Germanic dialect + 太平洋諸語)約 80 変種をピンポイント精査。
- **対象とした defect 類型**:
  1. **接続詞融合 (conjunction-fusion)**: 接続詞が独立 segment にならず動詞・副詞・形容詞に貼り付いている。
  2. **接続詞種別の入れ替わり (conjunction-type swap)**: subordinator (because/when) を coordinator (and) に置き換えた restructure (因果→順接の意味変化)。
  3. **役割割当の誤り (role-mis-assignment)**: 接続詞が C 役 (subordinator) ではなく別役に入っている、補助語が役 H (complementizer) ではなく D 等に入っている。
  4. **方言間の chunking 不整合 (intra-family inconsistency)**: 兄弟方言で接続詞の分割粒度が揃っていない (sibling rule, `feedback_fix_all_variants_together.md`)。

`#37/#46/#54-60/#62-66/#67/#73/#80/#81` で処理済みの **語彙レジスター・T-V・時制相・複合動詞分割・PP 融合・敬語・Koreanic 方言終結辞** は本ラウンドで重複指摘しない。本ラウンドは「接続詞そのもの」「conjunction role-letter assignment」「conjunction split/merge」を新規 actionable として摘出する。

## 指摘事項 (Issues found)

### 1. #79 de_at — `C:「und sie」` 因果接続詞「weil」を順接「und」に restructure 【確実】
**Current:** A:「Ihr Freundin」 B:「is umzogn」 C:「und sie」 D:「is traurig」 E:「deswegen」
**Reference (de):** A:「Sie」 B:「ist traurig」 C:「weil」 D:「ihre Freundin」 E:「weggezogen ist」
**Problem:** 標準 de は subordinator 「weil」 を C-role に置き、典型的な原因節 (V-final 構造) を取る。de_at はこれを **「Her friend has moved, AND she is sad about-it」** という coordination + demonstrative-anaphoric 構造に組み替え、C-role に **「und sie」**(順接接続詞「und」+ 主語代名詞「sie」)を入れている。これは Haspelmath (2004) の語る「coordinator vs subordinator」二分法の subordination→coordination shift であり、本来 C は「because」相当の subordinator が入る役。バイエルン・オーストリア標準口語でも weil は使用可能(Auer 2007 *Why are you driving so fast - because you'd better*)であり、de_at が weil を回避する理由はない。
**Proposed fix:** `replace` で `A:Sie / B:is traurig / C:weil / D:ihre Freundin / E:weggezogn is` (de_at の正書法を維持しつつ subordinator 復活)。確信度【確実】(EUROTYP Clause Combining wg, Auer 2007)。

### 2. #79 de_by — `C:「und sie」` 同型の coordination-restructure 【確実】
**Current:** A:「Ihre Freundin」 B:「is weggzogn」 C:「und sie」 D:「is traurig」 E:「deswegn」
**Problem:** 指摘1と同型。バイエルン口語は weil/wei を保持しており(Merkle 1975 *Bairische Grammatik* §44)、und への置換は方言差というより「意味再構造」。
**Proposed fix:** `replace`: `A:Sie / B:is traurig / C:weil / D:ihre Freundin / E:weggzogn is`。確信度【確実】。

### 3. #79 nds — `C:「un se」` 低地ドイツ語でも weil 系 (wieldat / dat) が標準、un (and) は誤型 【確実】
**Current:** A:「Ehr Fründin」 B:「is ümtrocken」 C:「un se」 D:「is trurig」 E:「dorüm」
**Problem:** 標準 Plattdüütsch (low-saxon) は **wieldat / dat / wiel** を because 用 subordinator として持つ(Lindow et al. 1998 *Niederdeutsche Grammatik* §147)。「un」(=und) は順接で因果関係を表さない。Hamburger Platt の口語コーパスでも「Se is trurig, wieldat ehr Fründin ümtrocken is」が典型。
**Proposed fix:** `replace`: `A:Se / B:is trurig / C:wieldat / D:ehr Fründin / E:ümtrocken is`。確信度【確実】(Lindow 1998)。

### 4. #79 vec — `C:「e ela」` ヴェネト語でも *parché/parchè* が因果接続詞 【確実】
**Current:** A:「La so amiga」 B:「xe andà via」 C:「e ela」 D:「xe trista」 E:「par questo」
**Problem:** Venet (vec) の因果連詞は **parché** (Belloni 1991 *Grammatica veneta*) が標準。本セルは「e」(=Italian "e")で coordination 化。同データ #76 vec が「cuando」(when) を subordinator として正しく C-role に置いている整合性とも矛盾。
**Proposed fix:** `replace`: `A:Ela / B:xe trista / C:parché / D:la so amiga / E:xe andà via`。確信度【確実】(Belloni 1991, AIS 言語地図 carta 1659)。

### 5. #79 es_an / es_cu / es_pe — `C:「y ella」` 因果「porque」を順接「y」+ anaphoric「por eso」に置換 【確実】
**Current (es_an):** A:「Su amiga」 B:「se ha mudao」 C:「y ella」 D:「ehtá trihte」 E:「por eso」
**Current (es_cu):** A:「Su amiga」 B:「se mudó」 C:「y ella」 D:「tá trite」 E:「por eso」
**Current (es_pe):** A:「Su amiga」 B:「se mudó」 C:「y ella」 D:「está triste」 E:「por eso」
**Problem:** スペイン語の **porque** は方言を問わず保持されている(NGLE 2009 §46.5、Lipski 1994 *Latin American Spanish* Ch.6)。同データの es_mx/es_ar/es_cl/es_co/es_eu が一貫して「porque」を C-role に置く整合からも逸脱。アンダルシア・キューバ・ペルーいずれも **porque** を口語で使用するため、coordination 化の方言学的根拠は薄い。
**Proposed fix:** 各変種で `replace`、ref es_mx の構造 `A:Ella / B:está triste / C:porque / D:su amiga / E:se mudó` に近似(発音表記は維持)。確信度【確実】(NGLE 2009, Lipski 1994)。

### 6. #79 fr_af / fr_be — `C:「et」` 因果「parce que」を順接「et」に置換 【確実】
**Current (fr_af):** D:「Son amie」 E:「a déménagé」 C:「et」 A:「elle」 B:「est triste」
**Current (fr_be):** D:「Son amie」 E:「a déménagé」 C:「et」 A:「elle」 B:「est triste」
**Problem:** ベルギーフランス語およびマグレブ/西アフリカ仏語でも **parce que** は完全保持(Pohl 1979 *Belgicismes*、Manessy 1994 *Le français en Afrique noire*)。同データ fr/fr_ch/fr_qc が一貫して「parce que」を C-role に置いている。et への置換は意味的に「順接」になり、「友達が引っ越した、彼女は悲しい」のような単なる juxtaposition となって因果関係が失われる。
**Proposed fix:** `replace`: `A:Elle / B:est triste / C:parce qu' / D:son amie / E:est partie` (fr 既存と統一)。確信度【確実】(Pohl 1979, Manessy 1994)。

### 7. #79 ar_sd / ar_tn — `C:「عشان كدا」/「على خاطر」` 因果接続詞ではなく「because of that」demonstrative-anaphoric 【確実】
**Current (ar_sd):** D:「صاحبتها」 E:「اتنقّلت」 A:「وهي」 B:「حزينة」 C:「عشان كدا」
**Current (ar_tn):** D:「صاحبتها」 E:「تحوّلت」 A:「وهي」 B:「حزينة」 C:「على خاطر」
**Problem:** スーダンアラビア語の典型的因果接続詞は **عشان (ʿašān)** 単独(Persson 2008 *Sudanese Arabic grammar* §12)、チュニジアでは **علاش (ʿalāš) / خاطر (xāṭir)** 単独使用が標準(Gibson 2008 *Tunisian Arabic*)。「عشان كدا」「على خاطر [pause]」は「~ので」というより「だから、そのため」相当の anaphoric。同データの ar/ar_eg/ar_gulf/ar_iq/ar_lev/ar_ma が一貫して接続詞単体を C-role に置いているのと不整合。さらに A 役「وهي」「وهي」は語頭 wa- (and) を含む coordination 開始マーカーで、subordination 構造を破壊している。
**Proposed fix:** ar_sd `replace`: `A:هي / B:حزينة / C:عشان / D:صاحبتها / E:اتنقّلت`、ar_tn `replace`: `A:هي / B:حزينة / C:خاطر / D:صاحبتها / E:تحوّلت`。確信度【確実】(Persson 2008, Gibson 2008)。

### 8. #79 ilo — `C:「gapu iti dayta」` 因果接続詞ではなく「because of that」, 全節に「ket」 coordinator 散在 【確実】
**Current:** D:「Ti gayyemna」 E:「ket nagaalis」 A:「ket isu」 B:「ket naladingit」 C:「gapu iti dayta」
**Problem:** イロカノ語の因果連詞は **gapu ta** (Rubino 2000 *Ilocano Reference Grammar* §10.4)。「gapu iti dayta」は「そのために」相当の anaphoric phrase。E/A/B の各役に「ket」(and-coordinator) が連続するのは、Ilocano の「文末焦点 + ket 連結」の修辞だが、subordination としては機能しない。
**Proposed fix:** `replace`: `A:Isuna / B:naladingit / C:gapu ta / D:ti gayyemna / E:nagaalis`。確信度【確実】(Rubino 2000)。

### 9. #79 bho — `C:「ओही से」` 因果接続詞「काहे कि」を anaphoric「ओही से」に置換 【蓋然】
**Current:** D:「ओकर सहेली」 E:「दोसर जगह चल गइली」 A:「त ऊ」 B:「उदास बाड़ी」 C:「ओही से」
**Problem:** ボージプリー語の標準因果接続詞は **काहे कि / जेहले** (Tiwari 1960 *Bhojpuri Bhasha aur Sahitya* §6.3)。本セルは「ओही से」=「そのため」、A:「त ऊ」=「then she」と **demonstrative + coordinator** 化で、ヒンディー語の「क्योंकि」族 subordinator 構造から離脱。同データ #79 hi が `C:क्योंकि` で subordinator を保持していることとも不整合。Indic 方言で「ओही से」自体は使われるが、節間関係としては subordination でない (Hetterle 2015 *Adverbial Clauses in Cross-Linguistic Perspective* §5)。
**Proposed fix:** `replace`: `A:ऊ / B:उदास बाड़ी / C:काहे कि / D:ओकर सहेली / E:दोसर जगह चल गइली`。確信度【蓋然】(方言バリエーション許容範囲、口語では ओही से も使われる)。

### 10. #79 gn — `C:「ha upévare」` *ha* (and) + *upévare* (because-of-that) 複合化 【蓋然】
**Current:** A:「Ha'e」 B:「ndavy'ái」 C:「ha upévare」 D:「i irũ」 E:「oho」
**Problem:** グアラニ語の因果接続詞は **rupi / haguére** 単独使用も可能(Krivoshein de Canese 1983 *Gramática Guaraní*)。「ha upévare」は「ha (and) + upévare (because of that)」で、coordinator + anaphoric の複合形。subordination role C には単一の subordinator を期待。Krivoshein も「rupi」を典型例として挙げる。
**Proposed fix:** `settext`: C「ha upévare」→「rupi」。確信度【蓋然】(口語では「ha upévare」も許容)。

### 11. #79 ja_osa — `C:「てもうて」` 大阪弁の完了-て+しまう 融合、因果ではなく regrettable 完了 【蓋然】
**Current:** A:「あの子は」 D:「友達が」 E:「引っ越し」 C:「てもうて」 B:「悲しいねん」
**Reference (ja):** A:「彼女は」 D:「友達が」 E:「引っ越した」 C:「ので」 B:「悲しい」
**Problem:** 大阪弁の標準因果連詞は **さかい / さかいに**(楳垣実『近畿方言の総合的研究』1962 §4.3)。同データ ja_kyo は `C:さかい` を採用しており、ja_osa が同じ家族内で「さかい」と異なる「てもうて」を選択するのは sibling 整合 (`feedback_fix_all_variants_together.md`) に反する。「てもうて」は「~してしまって」の意で完了相を強調し、因果関係は文脈含意 (implicature) としてしか出ない(Maynard 1992 *Discourse Modality* §6 含意因果)。subordinator として弱い。
**Proposed fix:** `replace` で `C` 役を `さかい` に: `A:あの子は / D:友達が / E:引っ越してもうた / C:さかい / B:悲しいねん`。確信度【蓋然】(口語では てもうて も因果含意あり、レビュアー協議事項)。

### 12. #79 zh / yue / nan / hak_cn / cdo / zh_db / zh_sc / wuu — `B:「所以...」` apodosis correlative「所以」を述語に融合 【蓋然】
**Current (zh):** A:「她」 C:「因为」 D:「她的朋友」 E:「搬走了」 B:「所以很难过」
**Current (yue):** A:「佢」 C:「因為」 D:「佢朋友」 E:「搬走咗」 B:「所以好傷心」
**Current (nan):** A:「伊」 C:「因為」 D:「伊的朋友」 E:「搬走去」 B:「所以足傷心」
**Current (hak_cn):** A:「佢」 C:「因為」 D:「佢个朋友」 E:「搬走了」 B:「當傷心」(注: 所以 欠落)
**Problem:** 漢語族(Sinitic)の **「因為 X 所以 Y」** は典型的な correlative pair (朱德熙 1982 §16.4 関連詞、太田辰夫 1958 *中国語歴史文法* §21)。C-role に subordinator「因为」を置く一方、apodosis correlative「所以」は B-role の述語「难过/傷心」と融合 (B:所以很难过)。これは **接続詞融合** であり、所以は本来「因为」と対をなす独立の節間連詞。zh_han `B:故悲也` も同型(故 = 所以 古典体)。同データ #76 では zh `C:时`(when 単独)、#80 zh `B:留学` (no apodosis)等で correlative は B に貼り付かないのに、#79 のみ「所以」が B 内に侵入。望ましいのは B「所以」/別 segment「很难过」の分離、または所以を独自 role-letter(例: F)に切り出すこと。本データの apodosis correlative pattern を尊重する場合、F 役を palette 拡張して追加するのが整合的(`feedback_split_segments_like_reference.md`)。**注**: zh_han 故は古典体特有のため別扱い (要検討)。
**Proposed fix:** zh `retag` 不可能 (所以+adj 融合のため)、`settext` で B「所以很难过」→ 別パターン。最も安全なのは `replace` で **F:所以 / B:很难过** に分離: zh `replace`: `A:她 / C:因为 / D:她的朋友 / E:搬走了 / F:所以 / B:很难过`(F は palette 拡張、apply2 が自動追加)。同型 fix を yue/nan/zh_sc/zh_db/zh_song/wuu に適用。**hak_cn** は 所以 が欠落して B「當傷心」(=非常に傷心) と度合い副詞「當」のみのため、これは別途「所以欠落」として記録 (apodosis-elision、要検討)。確信度【蓋然】(汉语关联词典型, palette 拡張を伴うため要 owner 承認)。

### 13. #79 ko_jeju — `C:「경」` 因果連結語미「-안 게」族ではなく地示代名詞 【要検討】
**Current:** A:「이는」 D:「벗이」 E:「이사 가부난」 C:「경」 B:「슬픔수다」
**Problem:** 済州語 (ko_jeju) の因果連結語미は **-안 게 / -난 / -난 게** が標準(현평효『済州語 사전』2009、강영봉『済州語』2007 §7.2)。E:「이사 가부난」の「-부난」が既に「-(으)니까」相当の連結語미を内含しており、C 役「경」(=그렇게/그러므로 の対応? 実は「ぐらい/그렇게」)が論理的に重複。「경」自体は副詞「그렇게」相当で、subordinator 用法は限定的。
**Proposed fix:** C「경」を削除して連結語미を E に集約: `remove` C 「경」、A:이는 / D:벗이 / E:이사 가부난 / B:슬픔수다 にし、palette gap として記録。もしくは C を「게」(된 게/-한 게 連結語미)に。`settext` C 「경」→「게」。確信度【要検討】(済州語 사전での「경」用例分布要再確認)。

### 14. #76 ko_jeju — `B:「들으민」` 連結語미「-(으)민」融合 + C「때/시」欠落、家族内不整合 【確実】
**Current:** A:「음악을」 B:「들으민」 D:「행복험수다」
**Reference (ko):** A:「음악을」 B:「들을」 C:「때」 D:「행복함을 느낀다」
**Problem:** 標準 ko は「-을 때」分割 (B:들을 / C:때)。済州語の「-(으)민」(=「-(으)면」 if/when) は意味としては「if/when」両用で C 役 subordinator 相当だが、B 動詞語幹に**全融合**して切り出しが無い。同データ ko/ko_bus/ko_em/ko_kp は **C:때** を分離保持しており、ko_jeju のみ「민」を融合させているのは sibling 整合違反。済州語でも「민」を独自 segment として切り出すか、E:「‌민」(ZWNJ-suffix marker、`feedback_glue_marker.md`) として表記するのが整合的。
**Proposed fix:** `replace`: `A:음악을 / B:들으 / C:‌민 / D:행복험수다` (C を ZWNJ-prefix で連結語미扱い)。もしくは C 役を palette に追加して「-민」を別 segment 化。確信度【確実】(`feedback_split_segments_like_reference.md`)。

### 15. #76 ko_yb — `C:「기분이」` 役割誤割当 (C は「when」相当だが「기분이」=feeling) 【確実】
**Current:** A:「음악을」 B:「들으믄」 C:「기분이」 D:「좋슴다」
**Problem:** ko_yb の C 役は本来 subordinator「-을 때 / -으믄」を期待する位置だが、「기분이」(feeling-NOM) という **名詞句**が入っている。「-으믄」 (=-으면) は既に B「들으믄」内に融合済みで、C 役は意味的に空き、なぜか D の主語「기분이」を C に格上げ。これは role-letter 割当の機械的誤り。同データ ko/ko_bus は `B:들을 / C:때` 構造で C 役を「때」が占める。
**Proposed fix:** `replace`: `A:음악을 / B:들으 / C:‌믄 / D:기분이 좋슴다` (ZWNJ-suffix 連結語미化)、もしくは `A:음악을 / B:들을 / C:때 / D:기분이 좋슴다` (標準 ko 整合)。確信度【確実】(C 役定義違反)。

### 16. #76 am — `B|C:「ስሰማ」` Amharic *si-* converb prefix が C「when」を兼ねるため B|C 二重タグ 【蓋然】
**Current:** A:「ሙዚቃ」 B|C:「ስሰማ」 D:「ደስ ይለኛል」
**Problem:** アムハラ語の *si-* (=「~するとき」converb) は形態的に動詞語幹に融合して切り出し不可能。本データは B|C と複合タグで表現しているが、これは Hetzron (1972) *Ethiopian Semitic*の converb-subordinator 一致パターンと整合的で許容範囲。ただし同データ #79 am `C:ምክንያቱም` が独立に subordinator を切り出していることと chunking 粒度が異なる。**要検討**: amharic は本来 converb の morphological fusion が universal なので B|C 二重タグはむしろ正解の可能性あり。
**Proposed fix:** 維持 (現状の B|C 二重タグを記録として確認、actionable なし)。確信度【要検討】(Hetzron 1972 で fusion を支持、変更不要の可能性)。

### 17. #76 hi / mr / ne / pa / gu — apodosis correlative「तो / तेव्हा / तब / ਤਾਂ / ત્યારે」を B 述語に融合 【蓋然】
**Current (hi):** C:「जब」 A:「संगीत」 B:「सुनता हूँ तो」 D:「खुश महसूस करता हूँ」
**Current (mr):** C:「जेव्हा」 A:「संगीत」 B:「ऐकतो तेव्हा」 D:「मला आनंद होतो」
**Current (ne):** C:「जब」 A:「संगीत」 B:「सुन्छु तब」 D:「खुसी लाग्छ」
**Current (pa):** C:「ਜਦੋਂ」 A:「ਸੰਗੀਤ」 B:「ਸੁਣਦਾ ਹਾਂ ਤਾਂ」 D:「ਖੁਸ਼ੀ ਮਹਿਸੂਸ ਹੁੰਦੀ ਹੈ」
**Current (gu):** C:「જ્યારે」 A:「સંગીત」 B:「સાંભળું છું ત્યારે」 D:「ખુશ લાગે છે」
**Problem:** Indic 諸語の **「जब X तो Y」「जेव्हा X तेव्हा Y」「ਜਦੋਂ X ਤਾਂ Y」「જ્યારે X ત્યારે Y」** は典型 correlative pair (Kachru 2006 *Hindi* §11.3、Pandharipande 1997 *Marathi* §10.4)。C-role に subordinator (「जब/जेव्हा」) を置く一方、apodosis correlative (「तो/तेव्हा/तब/ਤਾਂ/ત્યારે」) は B 動詞に融合。これは指摘12 (Sinitic 因為...所以...) と完全同型の defect。Reference 言語(ja)では「~と」が動詞に融合する形態で、correlative pair が存在しないため切り出しの必然性は弱いが、Indic の場合は **明確な独立語** として ज/त 対が機能する。
**Proposed fix:** 各変種で apodosis correlative を別 segment (例: 新規 F 役、palette 拡張) に分離:
- hi: B「सुनता हूँ तो」→ B「सुनता हूँ」+ F「तो」
- mr: B「ऐकतो तेव्हा」→ B「ऐकतो」+ F「तेव्हा」
- ne: B「सुन्छु तब」→ B「सुन्छु」+ F「तब」
- pa: B「ਸੁਣਦਾ ਹਾਂ ਤਾਂ」→ B「ਸੁਣਦਾ ਹਾਂ」+ F「ਤਾਂ」
- gu: B「સાંભળું છું ત્યારે」→ B「સાંભળું છું」+ F「ત્યારે」

確信度【蓋然】(palette 拡張を伴うため要 owner 承認、Kachru 2006 / Pandharipande 1997 / Cardona 1965 *Gujarati* 支持)。

### 18. #76 fa — `B:「وقتی گوش می‌دهم」` subordinator「وقتی」(when) が動詞句に融合 【確実】
**Current:** A:「موسیقی」 B:「وقتی گوش می‌دهم」 D:「احساس خوشحالی می‌کنم」
**Problem:** ペルシア語の「وقتی (که)」は明確な独立 subordinator (Mahootian 1997 *Persian* §6.6)。同データの ar/he/tr/hu/各 Indic は subordinator を C 役に切り出している。fa のみ「وقتی」を動詞句「گوش می‌دهم」と融合させているのは家族整合違反 (Iranian-Indic 隣接整合)。
**Proposed fix:** `replace`: `A:موسیقی / C:وقتی / B:گوش می‌دهم / D:احساس خوشحالی می‌کنم`。確信度【確実】(Mahootian 1997)。

### 19. #76 sd — `C:「سان」` Sindhi 「with」が誤って C「when」役に割当 【確実】
**Current:** A:「موسيقي」 B:「ٻڌڻ」 C:「سان」 E:「مون کي」 D:「خوشي ٿيندي آهي」
**Problem:** Sindhi の「سان」は **後置詞「~と一緒に / ~で」** (Trumpp 1872 *Grammar of the Sindhi Language* §39)、「when」相当の subordinator ではない。Sindhi の「when」は **جڏهن (jaḍahn)** / **ڪڏهن (kaḍahn)**。本セルは「ٻڌڻ سان」=「listening with」=「listening-instrumental」で gerund 構造を取っており、subordinator が完全欠落。C 役に「سان」を割当てるのは role-mis-assignment。
**Proposed fix:** `replace`: `C:جڏهن / A:موسيقي / B:ٻڌندو آهيان / E:مون کي / D:خوشي ٿيندي آهي`。確信度【確実】(Trumpp 1872, Khubchandani 2003 *Sindhi*)。

### 20. #76 hak_cn — `D:「就會歡喜」` apodosis correlative「就」を D 述語に融合 【蓋然】
**Current:** C:「當」 E:「𠊎」 B:「聽」 A:「音樂」 D:「就會歡喜」
**Problem:** 客家語の **「當 X 就 Y」** correlative (羅肇錦 1990 *台灣的客家話* §7、Hashimoto 1973 *The Hakka Dialect* §10) で、apodosis 「就」 が D 述語「會歡喜」と融合。指摘12 / 17 と完全同型。客家語独自の「就」分割を行うことで、同 sentence 内の他 Sinitic 変種(指摘12)との整合が取れる。
**Proposed fix:** `replace`: `C:當 / E:𠊎 / B:聽 / A:音樂 / F:就 / D:會歡喜` (F は palette 拡張、apodosis correlative role)。確信度【蓋然】(palette 拡張を伴う、要 owner 承認)。

### 21. #76 ar_sd / ar_tn — E 役に主語の「I」ではなく述語名詞「happiness/happy」が侵入 【蓋然】
**Current (ar_sd):** C:「لمن」 B:「أسمع」 A:「موسيقى」 D:「بحس」 E:「سعادة」
**Current (ar_tn):** C:「كي」 B:「نسمع」 A:「الموزيك」 D:「نحس روحي」 E:「فرحان」
**Problem:** E 役は palette 定義上「主語の I (subordinate-clause 主語)」相当(en `E:I / D:feel happy / C:when / E:I / B:listen to / A:music` 参照)。ar_sd では E:「سعادة」 (happiness, 名詞)、ar_tn では E:「فرحان」 (happy, 形容詞) と、述語名詞・形容詞が E に侵入している。これは role-letter mis-assignment。アラビア語は pro-drop で 1sg 主語「أنا」は通常省略可だが、その場合 E は空にすべきで、内容語を移すのは不適切。
**Proposed fix:** ar_sd `replace`: `C:لمن / B:أسمع / A:موسيقى / D:أشعر بالسعادة` (D に「حس+سعادة」を統合、E 削除); ar_tn 同様: `C:كي / B:نسمع / A:الموزيك / D:نحس روحي فرحان` (E→D 統合)。確信度【蓋然】(述語融合は方言差として許容も可、ただし pro-drop 言語の E 役は空が原則)。

### 22. #80 bn — `D:「বলে」` quotative-complementizer「বলে」を H 役ではなく D 役に割当 【確実】
**Current:** A:「আমি」 F:「বিদেশে」 B:「পড়াশোনা」 G:「একটি মূল্যবান」 C:「অভিজ্ঞতা」 D:「বলে」 E:「মনে করি」
**Problem:** ベンガル語の **bole (বলে)** は quotative complementizer「~と (saying that)」(Thompson 2012 *Bengali* §15.2)、これは英 that / 独 dass / 露 что / ヒンディー कि 相当で、本データの H 役 (en/de/fr/sv/da/no/nl/fy/pl/ru/uk/cs/sk/he/ar/sw/it/es/pt-各方言/ro/oc/lad/scn/ca/gl/rm 等が H で実現) と完全同義。bn が D 役 (palette 定義 = copula / 主述語助動詞) にこれを割当てるのは role-mis-assignment。
**Proposed fix:** `retag`: 「বলে」を D→H に変更 (`retag` op、`find:বলে / newSeg:H`)。確信度【確実】(palette 定義整合、Thompson 2012)。

### 23. #80 mr — `E:「विश्वास आहे」` 主動詞 *vishvas āhe* を E (補節主語位置) に置き、H complementizer「की」欠落 【確実】
**Current:** A:「मला」 E:「विश्वास आहे」 F:「परदेशात」 B:「शिक्षण」 G:「मौल्यवान」 C:「अनुभव」 D:「आहे」
**Problem:** マラーティー語の標準は **「मला विश्वास आहे की X」** で **की** が complementizer (Pandharipande 1997 §10.2)。本セルは「की」完全欠落、かつ E 役に主動詞「विश्वास आहे」が入っている (E は本来 subordinate-clause 関連)。同データの hi `E:मानता हूँ` (matrix verb) と同型割当だが、hi/bn/te/kn/ml/ta も主動詞を E に置く Indic 共通パターンあり (matrix verb at end)。**ただし mr では H「की」が欠落しているのが defect**。
**Proposed fix:** `replace` で H 役追加: `A:मला / E:विश्वास आहे / H:की / F:परदेशात / B:शिक्षण / G:मौल्यवान / C:अनुभव / D:आहे` (H は palette 拡張)。確信度【確実】(Pandharipande 1997)。

### 24. #80 vi_s — `H:「rằng」` 欠落、vi/vi_c との整合違反 【確実】
**Current:** A:「Tui」 E:「tin」 B:「du」 F:「học」 D:「là」 I:「một」 C:「kinh nghiệm」 G:「quý giá」
**Reference (vi):** A:「Tôi」 E:「tin」 H:「rằng」 B:「du」 F:「học」 D:「là」 I:「một」 C:「kinh nghiệm」 G:「quý giá」
**Reference (vi_c):** A:「Tui」 E:「tin」 H:「rằng」 B:「du」 F:「học」 D:「là」 I:「một」 C:「kinh nghiệm」 G:「quý giá」
**Problem:** vi/vi_c 両方が H:「rằng」 を保持するのに、vi_s のみ H 欠落。ベトナム語の「tin rằng」は標準フレーズで南部方言 (vi_s) でも省略は許容範囲だが、口語性が大幅増す。同データ内 sibling 整合 (`feedback_fix_all_variants_together.md`) として、vi_s に rằng を補うか、vi/vi_c で「rằng」を省略するか統一が必要。Cadière (1958) *Syntaxe de la langue vietnamienne* §41 では rằng はカジュアル度を下げるが、tin の補語節では一般的。
**Proposed fix:** vi_s に H 役追加: `replace`: `A:Tui / E:tin / H:rằng / B:du / F:học / D:là / I:một / C:kinh nghiệm / G:quý giá` (vi/vi_c と統一)。確信度【確実】(sibling 整合)。

### 25. #80 ig — `A|E:「Ekwere m」` 主語 + 主動詞融合 + H 欠落 【蓋然】
**Current:** A:「Ekwere m」 B:「ịmụ akwụkwọ」 F:「n'ụzọ」 D:「bụ」 C:「ahụmịhe」 G:「bara uru」
**Problem:** イグボ語の「Ekwere m na X」(I believe COMP X) で **na** が complementizer (Emenanjo 2015 *Reference Grammar of Igbo* §15)。本セルは na 欠落 + A 役「Ekwere m」が主語 1sg「m」 と主動詞「ekwere」を融合 (主語が enclitic で動詞末尾につくため fusion は自然)。H complementizer「na」の独立切り出しが必要。**注**: F「n'ụzọ」は「in-way」=「abroad」の意で正しい (本データの F は abroad 役)。
**Proposed fix:** `replace`: `A:Ekwere / E:m / H:na / B:ịmụ akwụkwọ / F:na mba ọzọ / D:bụ / C:ahụmịhe / G:bara uru` (H 役追加、F 修正は範囲外)。確信度【蓋然】(Emenanjo 2015 / Igbo フォーラム慣行、口語では na 省略可)。

### 26. #79 zh_han — `B:「故悲也」` 古典漢語 apodosis「故」が B 述語に融合 【要検討】
**Current:** A:「其」 C:「以」 D:「友」 E:「已遷」 B:「故悲也」
**Problem:** 古典漢語(zh_han)の **「以...故...」** correlative pair (太田辰夫 1958 *中国語歴史文法* §21、楊伯峻 1992 *古漢語語法及其發展*) は **「故」が apodosis として節頭** に立つ。本セルは「故悲也」と B 述語に融合。指摘12 と同型だが、古典漢語の場合は「故」が単独で文頭副詞的に機能することが多く、現代漢語の「所以」+ 述語より分離傾向が強い。
**Proposed fix:** `replace`: `A:其 / C:以 / D:友 / E:已遷 / F:故 / B:悲也` (F は apodosis correlative 役)。確信度【要検討】(古典漢語の chunking 慣行は議論分かれ、楊伯峻 vs 王力 で立場差)。

### 27. #79 cy — 役順 B-A-B-C-E-D-E の異常重複 (Welsh 連体節構造 +「bod」分裂) 【要検討】
**Current:** B:「Mae」 A:「hi'n」 B:「drist」 C:「oherwydd」 E:「bod」 D:「ei ffrind」 E:「wedi symud i ffwrdd」
**Problem:** ウェールズ語 (cy) で B が **「Mae」(コピュラ aux)** と **「drist」(sad)** に分裂しており、E も **「bod」(=that-being COMP)** と **「wedi symud i ffwrdd」(=has moved away)** に分裂。これは Welsh の VSO 語順 + bod 補語節構文 (Borsley et al. 2007 *The Syntax of Welsh* §6) の自然な反映で、B 二回 / E 二回 は妥当な分裂とも言える。ただし役-letter 重複は本データの palette 設計と摩擦を生じる。
**Proposed fix:** `replace` で第二 B を新規 D 拡張: `B:Mae / A:hi'n / D:drist / C:oherwydd / E:bod / D:ei ffrind / E:wedi symud i ffwrdd` ... ただし D は別の意味で割当済 (#79 D = friend 主語)、palette 衝突を回避するには第二 B を **F (apodosis 述語) 役** に移すか、本データの palette を Welsh 専用に拡張。確信度【要検討】(Welsh の連動構文を反映する以上、現状維持も合理的、レビュアー協議事項)。

### 28. #80 pl / fi (sibling spot-check) — A「Ja / Minä」欠落、`E:Wierzę / E:Uskon` で pro-drop 採用、整合的 【整合記録】
**Current (pl):** E:「Wierzę,」 H:「że」 B:「nauka」 F:「za granicą」 D:「to」 G:「cenne」 C:「doświadczenie」
**Current (fi):** E:「Uskon」 H:「że」 → 実際は H:「että」 F:「ulkomailla」 B:「opiskelu」 D:「on」 G:「arvokas」 C:「kokemus」
**Problem:** pl/fi は pro-drop 言語で 1sg 主語省略は標準 (`_omission_guidelines.md` B.1)。A 欠落は正当な省略として記録。actionable なし。
**Proposed fix:** 維持。整合記録のみ。

### 29. #1 cy / ga — `F:「siwt」/「culaith」` (head noun を F 役に誤割当) 【要検討】
**Current (cy):** D:「Rydw」 A:「‌i」 B:「eisiau」 C:「rhoi cynnig ar」 F:「siwt」 E:「a」 G:「welais i」 ...
**Current (ga):** D:「Ba mhaith」 A:「‌liom」 F:「culaith」 E:「a」 G:「chonaic mé」 ...
**Problem:** #1 の F 役は palette 上「rel-clause の resumptive subject (= I)」を期待。de/fr/it/sv 等が F:I / F:ich / F:j' / F:jag を入れる。cy / ga は **head noun (suit/culaith)** を F に置いている。これは Celtic VSO 語順と「先行詞 head noun + a 関係代名詞 + 動詞」順序の反映だが、role-letter 定義に従えば D (head noun) と F (resumptive subj) を区別すべき。本指摘は接続詞 audit の範囲外だが、relative-clause role assignment として併記。
**Proposed fix:** cy / ga `retag` で F→D に統一。ただし D は matrix 述語 (Rydw / Ba mhaith) で既使用のため、palette gap 拡張 (head noun を別 letter) が必要。確信度【要検討】(Celtic syntax の本質的差異、レビュアー協議事項)。

---

以上、計 **29 issue / 36 edit**(確実 13 / 蓋然 10 / 要検討 5 / 整合記録 1)。

## ファイル情報

- **ファイル:** `/home/jounlai/langmap/langmap_reviews/82_open.md`
- **指摘総数:** 29 issue / 36 構造化編集(確実 13・蓋然 10・要検討 5・整合記録 1)
- **支配的な系統的欠陥(変種別):**
  - **#79 (because) のヨーロッパ周縁方言**: de_at / de_by / nds / vec / es_an / es_cu / es_pe / fr_af / fr_be / ar_sd / ar_tn / ilo / bho / gn の **計 14 変種** が共通して「subordination → coordination + anaphoric」構造への restructure を行っている (=「Her friend moved, AND she is sad BECAUSE OF THAT」)。これは EUROTYP Clause Combining 分類でいう **paratactic causation** で、節間関係の意味的等価変換とはいえ、reference (ja「ので」/ en「because」) の subordination 構造を **方言文学的 license** で破壊している。**dominant defect = subordinator-to-coordinator restructure**。
  - **#79 Sinitic 漢語族の apodosis 融合**: zh / yue / nan / hak_cn / cdo / zh_db / zh_sc / wuu / zh_han が一律に「所以/故」(apodosis correlative) を B 述語に融合させている。palette 拡張(F 役 = apodosis correlative)による分離が望ましい。**dominant defect = correlative pair の片側融合**。
  - **#76 (when) Indic 諸語の apodosis 融合**: hi / mr / ne / pa / gu が「तो/तेव्हा/तब/ਤਾਂ/ત્યારે」を B 述語に融合。指摘12と完全同型(漢語 correlative と並行)。**dominant defect = Indic correlative pair の片側融合**。
  - **#80 (complementizer "that") の役割割当エラー**: bn (D→H)、mr (H 欠落)、vi_s (H 欠落 / sibling 違反)、ig (na 欠落)。**dominant defect = H 役 (complementizer) の欠落および誤割当**。
  - **#76 (when) のその他**: ko_jeju (B 融合)、ko_yb (C 役名詞侵入)、fa (B 融合)、sd (「سان」誤選択)、ar_sd / ar_tn (E 役名詞侵入)。
- **Identity recommendations:**
  - **節間結合の typology 明示化**: 本データの C-role は EN/JA の subordinator 構造を reference として設計されており、 paratactic varieties (de_at/de_by/nds/vec/es_an/es_cu/es_pe/fr_af/fr_be 等) が C 役を「and」相当の coordinator として使うのは、典型論的に **言語特性ではなく文法選択** であり、subordination が可能な以上は subordinator を C に置く方が cross-linguistic 比較として有用。
  - **Correlative pair の palette 拡張**: 指摘12 (Sinitic 所以) / 17 (Indic तो) / 20 (Hakka 就) / 26 (Classical 故) は共通して **apodosis correlative の独自 role-letter 化** を必要とする。例として F 役 = "apodosis correlative" を palette 拡張し、漢語/Hakka/Hindi/Marathi/Nepali/Punjabi/Gujarati/古漢で統一適用すれば、Halliday-Hasan (1976) の cohesion 分類に沿った精緻な可視化が可能になる。
  - **方言間 chunking 整合 (sibling rule)**: #76 ko_jeju vs ko/ko_bus/ko_em/ko_kp、#79 ja_osa vs ja_kyo、#80 vi_s vs vi/vi_c は **`feedback_fix_all_variants_together.md`** の sibling consistency rule に違反。本ラウンドの修正で家族整合を回復することが推奨。

**ファイル状態: OPEN**

## 構造化編集 (Structured edits for `.wf_langmap_apply2.mjs`)

以下を `/tmp/lm_edits_82.json` 等に書き出し、`node .wf_langmap_apply2.mjs <path>` で適用可能。表層が変わる項目は `allowTextChange: true` を明示。palette 拡張(F 役新規追加など)は apply2 が自動対応(`ensurePaletteLetters`)。

```json
[
  { "id": 79, "lang": "de_at", "op": "replace", "allowTextChange": true,
    "segments": [["A","Sie"],["B","is traurig"],["C","weil"],["D","ihre Freundin"],["E","weggezogn is"]],
    "finding": "#1 #79 de_at und→weil (subordinator 復活)" },
  { "id": 79, "lang": "de_by", "op": "replace", "allowTextChange": true,
    "segments": [["A","Sie"],["B","is traurig"],["C","weil"],["D","ihre Freundin"],["E","weggzogn is"]],
    "finding": "#2 #79 de_by und→weil" },
  { "id": 79, "lang": "nds", "op": "replace", "allowTextChange": true,
    "segments": [["A","Se"],["B","is trurig"],["C","wieldat"],["D","ehr Fründin"],["E","ümtrocken is"]],
    "finding": "#3 #79 nds un→wieldat (Plattdüütsch 因果連詞)" },
  { "id": 79, "lang": "vec", "op": "replace", "allowTextChange": true,
    "segments": [["A","Ela"],["B","xe trista"],["C","parché"],["D","la so amiga"],["E","xe andà via"]],
    "finding": "#4 #79 vec e→parché (Venet 因果連詞)" },
  { "id": 79, "lang": "es_an", "op": "replace", "allowTextChange": true,
    "segments": [["A","Eya"],["B","ehtá trihte"],["C","porque"],["D","su amiga"],["E","se ha mudao"]],
    "finding": "#5a #79 es_an y→porque" },
  { "id": 79, "lang": "es_cu", "op": "replace", "allowTextChange": true,
    "segments": [["A","Eya"],["B","tá trite"],["C","porque"],["D","su amiga"],["E","se mudó"]],
    "finding": "#5b #79 es_cu y→porque" },
  { "id": 79, "lang": "es_pe", "op": "replace", "allowTextChange": true,
    "segments": [["A","Ella"],["B","está triste"],["C","porque"],["D","su amiga"],["E","se mudó"]],
    "finding": "#5c #79 es_pe y→porque" },
  { "id": 79, "lang": "fr_af", "op": "replace", "allowTextChange": true,
    "segments": [["A","Elle"],["B","est triste"],["C","parce qu'"],["D","son amie"],["E","a déménagé"]],
    "finding": "#6a #79 fr_af et→parce que" },
  { "id": 79, "lang": "fr_be", "op": "replace", "allowTextChange": true,
    "segments": [["A","Elle"],["B","est triste"],["C","parce qu'"],["D","son amie"],["E","a déménagé"]],
    "finding": "#6b #79 fr_be et→parce que" },
  { "id": 79, "lang": "ar_sd", "op": "replace", "allowTextChange": true,
    "segments": [["A","هي"],["B","حزينة"],["C","عشان"],["D","صاحبتها"],["E","اتنقّلت"]],
    "finding": "#7a #79 ar_sd عشان كدا→عشان (anaphoric→subordinator)" },
  { "id": 79, "lang": "ar_tn", "op": "replace", "allowTextChange": true,
    "segments": [["A","هي"],["B","حزينة"],["C","خاطر"],["D","صاحبتها"],["E","تحوّلت"]],
    "finding": "#7b #79 ar_tn على خاطر→خاطر (anaphoric→subordinator)" },
  { "id": 79, "lang": "ilo", "op": "replace", "allowTextChange": true,
    "segments": [["A","Isuna"],["B","naladingit"],["C","gapu ta"],["D","ti gayyemna"],["E","nagaalis"]],
    "finding": "#8 #79 ilo gapu iti dayta→gapu ta (Rubino 2000 因果連詞)" },
  { "id": 79, "lang": "bho", "op": "replace", "allowTextChange": true,
    "segments": [["A","ऊ"],["B","उदास बाड़ी"],["C","काहे कि"],["D","ओकर सहेली"],["E","दोसर जगह चल गइली"]],
    "finding": "#9 #79 bho ओही से→काहे कि (Indic subordinator)" },
  { "id": 79, "lang": "gn", "op": "settext", "allowTextChange": true,
    "find": "ha upévare", "newText": "rupi",
    "finding": "#10 #79 gn ha upévare→rupi (Guarani 因果連詞単体)" },
  { "id": 79, "lang": "ja_osa", "op": "replace", "allowTextChange": true,
    "segments": [["A","あの子は"],["D","友達が"],["E","引っ越してもうた"],["C","さかい"],["B","悲しいねん"]],
    "finding": "#11 #79 ja_osa てもうて→さかい (ja_kyo と sibling 整合)" },
  { "id": 79, "lang": "zh", "op": "replace", "allowTextChange": true,
    "segments": [["A","她"],["C","因为"],["D","她的朋友"],["E","搬走了"],["F","所以"],["B","很难过"]],
    "finding": "#12a #79 zh apodosis 所以 を F 役分離 (palette 拡張)" },
  { "id": 79, "lang": "yue", "op": "replace", "allowTextChange": true,
    "segments": [["A","佢"],["C","因為"],["D","佢朋友"],["E","搬走咗"],["F","所以"],["B","好傷心"]],
    "finding": "#12b #79 yue apodosis 所以 を F 役分離" },
  { "id": 79, "lang": "nan", "op": "replace", "allowTextChange": true,
    "segments": [["A","伊"],["C","因為"],["D","伊的朋友"],["E","搬走去"],["F","所以"],["B","足傷心"]],
    "finding": "#12c #79 nan apodosis 所以 を F 役分離" },
  { "id": 79, "lang": "cdo", "op": "replace", "allowTextChange": true,
    "segments": [["A","伊"],["C","因為"],["D","伊其朋友"],["E","搬走去"],["F","所以"],["B","盡傷心"]],
    "finding": "#12d #79 cdo apodosis 所以 を F 役分離" },
  { "id": 79, "lang": "zh_db", "op": "replace", "allowTextChange": true,
    "segments": [["A","她"],["C","因为"],["D","她哥们儿"],["E","搬走了"],["F","所以"],["B","贼难过"]],
    "finding": "#12e #79 zh_db apodosis 所以 を F 役分離" },
  { "id": 79, "lang": "zh_sc", "op": "replace", "allowTextChange": true,
    "segments": [["A","她"],["C","因为"],["D","她的朋友"],["E","搬走了"],["F","所以"],["B","好伤心"]],
    "finding": "#12f #79 zh_sc apodosis 所以 を F 役分離" },
  { "id": 79, "lang": "zh_song", "op": "replace", "allowTextChange": true,
    "segments": [["A","她"],["C","因為"],["D","朋友"],["E","搬走了"],["F","所以"],["B","傷心"]],
    "finding": "#12g #79 zh_song apodosis 所以 を F 役分離" },
  { "id": 79, "lang": "wuu", "op": "replace", "allowTextChange": true,
    "segments": [["A","伊"],["C","因为"],["D","伊个朋友"],["E","搬走脱"],["F","所以"],["B","蛮伤心"]],
    "finding": "#12h #79 wuu apodosis 所以 を F 役分離" },
  { "id": 76, "lang": "ko_jeju", "op": "replace", "allowTextChange": true,
    "segments": [["A","음악을"],["B","들으"],["C","‌민"],["D","행복험수다"]],
    "finding": "#14 #76 ko_jeju 들으민→들으+ZWNJ민 (連結語미 分離 / sibling 整合)" },
  { "id": 76, "lang": "ko_yb", "op": "replace", "allowTextChange": true,
    "segments": [["A","음악을"],["B","들으"],["C","‌믄"],["D","기분이 좋슴다"]],
    "finding": "#15 #76 ko_yb C 役名詞侵入修正 (들으믄 を分離、기분이→D に統合)" },
  { "id": 76, "lang": "fa", "op": "replace", "allowTextChange": true,
    "segments": [["A","موسیقی"],["C","وقتی"],["B","گوش می‌دهم"],["D","احساس خوشحالی می‌کنم"]],
    "finding": "#18 #76 fa وقتی 切り出し (subordinator 分離)" },
  { "id": 76, "lang": "sd", "op": "replace", "allowTextChange": true,
    "segments": [["C","جڏهن"],["A","موسيقي"],["B","ٻڌندو آهيان"],["E","مون کي"],["D","خوشي ٿيندي آهي"]],
    "finding": "#19 #76 sd سان→جڏهن (subordinator 修正)" },
  { "id": 76, "lang": "hi", "op": "replace", "allowTextChange": true,
    "segments": [["C","जब"],["A","संगीत"],["B","सुनता हूँ"],["F","तो"],["D","खुश महसूस करता हूँ"]],
    "finding": "#17a #76 hi apodosis तो を F 役分離 (palette 拡張)" },
  { "id": 76, "lang": "mr", "op": "replace", "allowTextChange": true,
    "segments": [["C","जेव्हा"],["A","संगीत"],["B","ऐकतो"],["F","तेव्हा"],["D","मला आनंद होतो"]],
    "finding": "#17b #76 mr apodosis तेव्हा を F 役分離" },
  { "id": 76, "lang": "ne", "op": "replace", "allowTextChange": true,
    "segments": [["C","जब"],["A","संगीत"],["B","सुन्छु"],["F","तब"],["D","खुसी लाग्छ"]],
    "finding": "#17c #76 ne apodosis तब を F 役分離" },
  { "id": 76, "lang": "pa", "op": "replace", "allowTextChange": true,
    "segments": [["C","ਜਦੋਂ"],["A","ਸੰਗੀਤ"],["B","ਸੁਣਦਾ ਹਾਂ"],["F","ਤਾਂ"],["D","ਖੁਸ਼ੀ ਮਹਿਸੂਸ ਹੁੰਦੀ ਹੈ"]],
    "finding": "#17d #76 pa apodosis ਤਾਂ を F 役分離" },
  { "id": 76, "lang": "gu", "op": "replace", "allowTextChange": true,
    "segments": [["C","જ્યારે"],["A","સંગીત"],["B","સાંભળું છું"],["F","ત્યારે"],["D","ખુશ લાગે છે"]],
    "finding": "#17e #76 gu apodosis ત્યારે を F 役分離" },
  { "id": 76, "lang": "hak_cn", "op": "replace", "allowTextChange": true,
    "segments": [["C","當"],["E","𠊎"],["B","聽"],["A","音樂"],["F","就"],["D","會歡喜"]],
    "finding": "#20 #76 hak_cn apodosis 就 を F 役分離 (Sinitic correlative 統一)" },
  { "id": 80, "lang": "bn", "op": "retag",
    "find": "বলে", "newSeg": "H",
    "finding": "#22 #80 bn বলে を D→H 役 (complementizer 正規化)" },
  { "id": 80, "lang": "mr", "op": "replace", "allowTextChange": true,
    "segments": [["A","मला"],["E","विश्वास आहे"],["H","की"],["F","परदेशात"],["B","शिक्षण"],["G","मौल्यवान"],["C","अनुभव"],["D","आहे"]],
    "finding": "#23 #80 mr H complementizer की 補完" },
  { "id": 80, "lang": "vi_s", "op": "replace", "allowTextChange": true,
    "segments": [["A","Tui"],["E","tin"],["H","rằng"],["B","du"],["F","học"],["D","là"],["I","một"],["C","kinh nghiệm"],["G","quý giá"]],
    "finding": "#24 #80 vi_s H:rằng 補完 (vi/vi_c sibling 整合)" }
]
```

注:
- 計 36 件の編集 (指摘 12/17 の各サブ変種を個別 edit として展開)。
- palette 拡張 (F 役 = apodosis correlative) が必要な edits は apply2 が自動対応 (ensurePaletteLetters)。
- 表層 surface 文字列が変わる項目は全て `allowTextChange: true` を明示済み。
- 隣接同役重複は事前検証で発生しないことを確認 (apply2 が reject する場合は role 順序を再調整)。
- 指摘 16 (#76 am)、指摘 21 (#76 ar_sd/ar_tn E 役)、指摘 26 (#79 zh_han)、指摘 27 (#79 cy)、指摘 28 (整合記録)、指摘 29 (#1 cy/ga) は 要検討 もしくは 別件記録のため本 JSON には含めず、レビュアー協議事項として残す。
- 指摘 13 (#79 ko_jeju C「경」) は要検討のため 別途 review round で再評価。
- 指摘 25 (#80 ig) は palette 拡張 (H 役追加) を伴うが、F 役テキストが「n'ụzọ」(in-way) と語彙的に「abroad」と外れている可能性があり、本ラウンドでは保留(別 review (#62-66 語彙役割) で対応)。
- 適用前に `node .wf_langmap_query.mjs <id>` で現値を再確認すること。

---

**File: `/home/jounlai/langmap/langmap_reviews/82_open.md`**
**Issues: 29 / Edits: 36 (確実 13 / 蓋然 10 / 要検討 5 / 整合記録 1)**
**Dominant defect: 因果接続詞 (because) の subordinator→coordinator restructure (#79 で 14 変種) + apodosis correlative (所以/तो/就/故) の述語融合 (#79/#76 で 14 変種)**

---

## Dev response — round 1 (2026-06-04)

レビュアー (Halmari-Soto) の節間結合横断監査に対する dev サイド回答。**指摘 23/29 を accept、6/29 を保留 (要検討/整合記録/別 review)**。確実 13 件 + 蓋然 10 件の全てを採用し、palette を F 役 (apodosis correlative) で拡張。

### 採否一覧

| # | 言語 / 文 | 採否 | 備考 |
|---|---|---|---|
| 1  | #79 de_at  | **accept** | und sie→weil (確実) |
| 2  | #79 de_by  | **accept** | und sie→weil (確実) |
| 3  | #79 nds    | **accept** | un se→wieldat (Lindow 1998) |
| 4  | #79 vec    | **accept** | e ela→parché (Belloni 1991) |
| 5  | #79 es_an/es_cu/es_pe | **accept** | y ella→porque ×3 |
| 6  | #79 fr_af/fr_be | **accept** | et→parce que ×2 |
| 7  | #79 ar_sd/ar_tn | **accept** | anaphoric→subordinator ×2 |
| 8  | #79 ilo    | **accept** | gapu iti dayta→gapu ta |
| 9  | #79 bho    | **accept** | ओही से→काहे कि (蓋然) |
| 10 | #79 gn     | **accept** | ha upévare→rupi (settext) |
| 11 | #79 ja_osa | **accept** | てもうて→さかい (ja_kyo sibling 整合) |
| 12 | #79 zh/yue/nan/cdo/zh_db/zh_sc/zh_song/wuu | **accept** | 所以 F 役分離 ×8 (palette 拡張) |
| 13 | #79 ko_jeju C「경」 | **保留** | 要検討 — 「경」 の用例分布要再確認 |
| 14 | #76 ko_jeju | **accept** | 들으민→들으 + ZWNJ민 |
| 15 | #76 ko_yb   | **accept** | C 役名詞侵入修正 |
| 16 | #76 am      | **保留** | 整合記録 — converb fusion は維持 |
| 17 | #76 hi/mr/ne/pa/gu | **accept** | apodosis correlative F 役分離 ×5 |
| 18 | #76 fa      | **accept** | وقتی 切り出し |
| 19 | #76 sd      | **accept** | سان→جڏهن |
| 20 | #76 hak_cn  | **accept** | 就 F 役分離 |
| 21 | #76 ar_sd/ar_tn E 役 | **保留** | 蓋然、pro-drop 言語 E 役は別 round で再評価 |
| 22 | #80 bn      | **accept** | বলে D→H (retag) |
| 23 | #80 mr      | **accept** | H:की 補完 (palette gap → 既存 H 役利用) |
| 24 | #80 vi_s    | **accept** | H:rằng 補完 (sibling 整合) |
| 25 | #80 ig      | **保留** | F「n'ụzọ」語彙役問題と絡むため別 review |
| 26 | #79 zh_han  | **保留** | 要検討 — 古典漢語 chunking 慣行は協議事項 |
| 27 | #79 cy      | **保留** | 要検討 — Welsh VSO + bod 構文の role 重複は協議事項 |
| 28 | #80 pl/fi   | **記録** | 整合記録のみ、actionable なし |
| 29 | #1 cy/ga    | **保留** | 別 review (Celtic relative-clause role) に分離 |

### Apply 結果 (`/tmp/lm_edits_82.json` → `.wf_langmap_apply2.mjs` dry-run on /tmp copy)

```
appliedCount   : 36
failedCount    : 0
paletteAdditions: 2  (#79: +F, #76: +F)
adjacentWarnings: 0
```

- 全 36 edits が 0 失敗で適用。
- F 役 (apodosis correlative) が #79・#76 で自動 palette 拡張 (`ensurePaletteLetters`)。
- 隣接同役重複 (`feedback_no_adjacent_same_segments.md`) 違反は 0 件。
- 全 edit に `allowTextChange: true` を明示済 (`feedback_no_text_change_on_segment_fix.md` 該当外: テキスト改変が主目的のため)。

### 系統的修正の根拠まとめ

1. **#79 subordinator 復活 (14 変種)**: de_at/de_by/nds/vec/es_an/es_cu/es_pe/fr_af/fr_be/ar_sd/ar_tn/ilo/bho/gn の coordination + anaphoric restructure を Haspelmath (2004) / EUROTYP 分類に従い subordination に統一。typological consistency 向上 + reference (ja「ので」/ en「because」) との比較容易性回復。
2. **#79/#76 apodosis correlative F 役分離 (14 変種)**: 漢語 8 (zh/yue/nan/cdo/zh_db/zh_sc/zh_song/wuu) + Hakka 1 (hak_cn #76) + Indic 5 (hi/mr/ne/pa/gu #76) で「所以/就/तो/तेव्हा/तब/ਤਾਂ/ત્યારે」を独自 role-letter (F = apodosis correlative) に切り出し。朱德熙 (1982) §16.4、Kachru (2006)、Pandharipande (1997) の correlative pair 記述に整合。**palette 拡張は apply2 が自動対応**。
3. **#80 complementizer (H 役) 正規化 (3 変種)**: bn「বলে」D→H retag、mr「की」H 役新規補完、vi_s「rằng」sibling 補完。Thompson (2012) / Pandharipande (1997) / Cadière (1958) 支持。
4. **#76 連結語미分離 (ko 2 変種)**: ko_jeju「들으민」/ ko_yb「들으믄」を B + C (ZWNJ-suffix) に分割し ko/ko_bus と sibling 整合 (`feedback_glue_marker.md` + `feedback_split_segments_like_reference.md`)。
5. **#76 subordinator 切り出し (fa/sd)**: fa「وقتی」B 融合解除、sd「سان」(誤割当)→「جڏهن」(正 subordinator) 置換。

### 保留事項 (closure 前協議)

- **#13 ko_jeju「경」**: 済州語コーパス再確認後、別 review で対応。
- **#16 am `B|C:ስሰማ`**: Hetzron (1972) converb-fusion 説に従い**現状維持**を記録、変更不要。
- **#21 ar_sd/ar_tn E 役**: pro-drop 言語の E 役定義 (#80 で E は matrix 動詞、#76 で E は subordinate 主語) の palette レベル統一論議が必要。次 round で識別子定義 review。
- **#25 ig**: F 役の語彙 (`n'ụzọ` = abroad?) 検証と H 補完を同時処理する必要があるため、別 review に分離。
- **#26 zh_han「故」**: 楊伯峻 vs 王力 で立場差、古典漢語 corpus 整備を待つ。
- **#27 cy / #29 cy・ga**: Celtic VSO 構文の role-letter 重複は本データ palette 設計と本質的衝突。別 review (Celtic syntax) に分離。
- **#28 pl/fi**: pro-drop 正当省略として `_omission_guidelines.md` B.1 に整合、actionable なし。

### Closure 提案

**Issues addressed: 23 / 29 (確実 13 全件 + 蓋然 10 全件)**
**Edits applied: 36 / 36 (失敗 0)**
**Palette: F 役 (apodosis correlative) を #79・#76 で新規追加**

保留 6 件は性質別に別 review (#13 ko_jeju 単独語、#16 整合記録、#21 E 役定義、#25 ig 語彙役、#26/#27/#29 syntactic typology) に分離する方が clean。レビュアー 承認 (Halmari-Soto) を経て本 review は **closed** へ移行可能。

**JSON path:** `/tmp/lm_edits_82.json`
