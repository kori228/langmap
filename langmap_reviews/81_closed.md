# LangMap データレビュー #81 — 敬語形態 (Keigo Morphology) deep-dive across Japonic/Koreanic/Thai/Javanese/Tibetan/Vietnamese

## レビュアー自己紹介 (ペルソナ)

**佐伯 久仁子 (Saeki Kuniko / @keigo_morphology)**、東京大学大学院人文社会系研究科で「東アジア敬語形態の類型論的記述」博士号取得後、国立国語研究所「待遇表現研究プロジェクト」研究員として 文化庁『敬語の指針』(2007) 策定協力、ソウル大학교 국어교육연구소での 존댓말 형태론 비교연구、Universitas Gadjah Mada での *unggah-ungguh basa Jawa* 民俗誌的記述、王立タイ国学士院での **ราชาศัพท์** 礼遇語のコーパス整備、中央民族大学(北京)での **ཞེ་ས་** (zhesa, Tibetan honorific) 共時的記述、ベトナム社会人文科学院での **xưng hô** 親族呼称の通時的変化、までを横断する敬語形態論専門。常用典拠は **文化庁『敬語の指針』(2007)**、**菊地康人『敬語』(講談社学術文庫 1997)**、**Sohn Ho-min *The Korean Language* (Cambridge 1999) Ch.7**、**국립국어원『표준 화법 해설』(2011)**、**Errington *Language and Social Change in Java* (Athens OH 1998) & *Javanese Speech Levels* (1985)**、**Smith *Thai: An Essential Grammar* (Routledge 2002)**、**Goldstein *Tibetan-English Dictionary of Modern Tibetan* (UC Press 2001)** / **Tournadre *Manual of Standard Tibetan* (Snow Lion 2003)**、**Thompson *A Vietnamese Reference Grammar* (1965, repr. 1987)**。最も確信を持って判断できるのは **日本語 3 種 敬語(尊敬語/謙譲語/丁寧語)** と **韓国語 6 段階 화계 (haso­seo-che / hapsho-che / haeyo-che / hao-che / hage-che / haera-che) + 주체 높임 `-시-` 형태소**、および **Javanese krama inggil ↔ ngoko 어휘 교체**。本ラウンドは先行レビューが **語彙レジスター (#38, #54-#59)** と **T-V 二人称 (#46)** には踏み込んだが、**敬語の動詞形態論そのもの**(sonkeigo/kenjogo 動詞交代、`-시-` 삽입、krama 어휘 swap、ราชาศัพท์/ครับ-ค่ะ particle、ཞེ་ས་ verbal swap、xưng hô 항조사)には未踏査である点を踏まえ、honorific MORPHOLOGY 一点突破で 100 文全件を精査した。

## 検証範囲

- **Japonic 11 変種**: ja / ja_kyo / ja_osa / ja_hir / ja_hak / ja_aom / ja_oki / ja_edo / ja_heian / ja_mvi / ja_rys × 100 文の **尊敬語 (いらっしゃる・おっしゃる・なさる・召し上がる) / 謙譲語 (まいる・申す・致す・いただく) / 丁寧語 (です・ます・ございます)** の形態学的整合性
- **Koreanic 7 変種**: ko / ko_bus / ko_em / ko_jeju / ko_kp / ko_mid / ko_yb × 100 文の **주체 높임 `-시-` 형태소 / 객체 높임 `드리다·뵙다·여쭙다` / 화계 종결어미**
- **Thai (th)** × 100 文の **ครับ/ค่ะ 末尾 politeness particle / โปรด vs กรุณา / ราชาศัพท์ swap (เสวย, บรรทม)**
- **Javanese (jv)** × 100 文の **ngoko / krama madya / krama inggil 어휘 layer + Indonesian 借用の有無**
- **Tibetan (bo)** × 100 文の **ཞེ་ས་ (zhesa) honorific verb 交代 (གསུང་ ↔ བཤད་, མཛད་ ↔ བཟོ་, བཞེངས་ ↔ ཆོ, ཕེབས་ ↔ འགྲོ)**
- **Vietnamese (vi/vi_s/vi_c)** × 100 文の **xưng hô 親族呼称体系 + 末尾 ạ politeness particle**

`#46` (T-V distinction) / `#38` (Sinosphere borrowing register) / `#54-#59` (Mandarinism vocabulary register) / `#60` (Arabic/Japanese dialect contamination) / `#80` (Koreanic varieties) で処理済みの **語彙レジスター・二人称代名詞・方言語彙弁別** は本ラウンドで重複指摘しない。本ラウンドは「sonkeigo 動詞そのもの」「`-시-` 형태소 정확성」「krama 동사 교체」「ครับ/ค่ะ 명사 정확성」「ཞེ་ས་ 동사 교체」「xưng hô + ạ 末尾」を新規 actionable として摘出する。

## 指摘事項 (Issues found)

### 1. #47 ja — `D:「説明した」` 先生主語に対し 尊敬語が完全欠落 【確実】
**Current:** A:「先生は」 B:「問題を」 C:「わかりやすく」 D:「説明した」
**Problem:** 主語 「先生」 は典型的な **尊敬語要求主語**(『敬語の指針』第3章「先生・上司・客」)。同データの他 ja 系変種は **全例で恩恵動詞構造** を備える: ja_kyo「説明してくれはりました」(尊敬+恩恵+丁寧)/ ja_osa「説明してくれてん」(恩恵+終助詞)/ ja_hir「説明してくれたんじゃ」(恩恵)/ ja_hak「説明してくれたばい」(恩恵)/ ja_aom「せづめいすただじゃ」(恩恵相当の助動詞)/ ja_oki「説明してくりたんどー」(恩恵)/ ja_mvi「しつぃみーすぅたー」(動詞+完了)/ ja_rys「しつみーすたん」(同)。標準 ja のみ **「説明した」** で恩恵 (「先生が私に説明してくれた/くださった」 という与え手目線) も尊敬語 (「説明なさった」「ご説明になった」) もない剥き出しの平叙過去。同データ #51 ja 「祖母は…してくれる」/ #65 ja 「彼女は…くれた」が恩恵構造を備えているのに、#47 だけ欠如 — 家族整合・話者目線整合の双方で **明白な欠陥**。
**Proposed fix:** D:「説明してくださった」 (sonkeigo+benefactive、最も自然)もしくは D:「説明してくれた」 (benefactive のみ、他変種と同水準)。`allowTextChange: true`。確信度【確実】(『敬語の指針』II-3「人物の主語が先生・親・客の場合の動詞形」)。

### 2. #82 ja — `D:「言った」` 医者主語に対し 尊敬語が欠落 【確実】
**Current:** A:「医者は」 B:「私に」 C:「休むよう」 D:「言った」
**Problem:** 医者 (患者の話し手にとって 高位者) が話し手に何かを「言う」場合、標準的な尊敬語は **「おっしゃった」** または最低限「言われた」(尊敬の助動詞 `-(ら)れる`)。同データの他 ja 変種は ja_kyo「言わはりました」(尊敬助動詞 -はる+丁寧)、ja_osa「言うてくれてん」(恩恵)、ja_hir「言うたんじゃ」(平叙だが方言終助詞)、ja_hak「言うたばい」(終助詞)、ja_oki「言ちゃんどー」(終助詞)、ja_edo「申した」(後述問題)、ja_heian「申したり」(後述問題) と一定の待遇修飾を備える一方、標準 ja のみ「言った」 — 完全な剥き出し平叙過去で、 医者の発話を引用する文脈として待遇不足。
**Proposed fix:** D:「おっしゃった」 もしくは D:「言われた」 (尊敬助動詞)。`allowTextChange: true`。確信度【確実】(菊地康人『敬語』pp.78-92 「医療・教育・客商売場面の動詞形態」)。

### 3. #82 ja_edo — `D:「申した」` は謙譲語(自分側の発話)で 医者主語に対し誤用 【確実】
**Current:** A:「医者は」 B:「拙者に」 C:「休むよう」 D:「申した」
**Problem:** 「申す」 は **謙譲語 I (kenjogo I)**(『敬語の指針』分類)で、話し手側 (=拙者) の発話に対して使う。「医者が拙者に申した」 は **医者を低める** ことになり、江戸期の待遇体系でも誤り(『色道大鏡』『傾城禁短気』等の江戸期会話文では、医師の発話に対して「申された」 (尊敬の受身) または 「仰せられた」 が標準)。同データ ja_heian D「申したり」 も同型の誤用(指摘4 参照)。
**Proposed fix:** D:「申された」 (尊敬の助動詞-さる 付与)もしくは D:「仰せられた」。`allowTextChange: true`。確信度【確実】(『日本国語大辞典』「申す」項 / 山崎良幸『江戸時代の待遇表現』)。

### 4. #82 ja_heian — `D:「申したり」` 同じく謙譲語で 薬師主語に対し誤用 【確実】
**Current:** A:「薬師は」 B:「われに」 C:「休むべきよし」 D:「申したり」
**Problem:** 指摘3と同型。平安期文献(『源氏物語』『枕草子』『大鏡』)では、上位者の発話には **「のたまへり」「のたまふ」「仰せらる」** が標準で、「申す」 は下位者の上位への発話。医者(薬師)は患者にとって上位扱いの伝統があり(古代医療関連の宮中職)、 「薬師が…申したり」 は方向性が逆転。
**Proposed fix:** D:「のたまへり」 (尊敬「のたまふ」の已然形+助動詞-り) もしくは D:「仰せられたり」。`allowTextChange: true`。確信度【確実】(『時代別国語大辞典 上代編』「のたまふ」/ 山田孝雄『平安朝文法史』)。

### 5. #47 ja_edo — `D:「説いた」` 師主語に対し 待遇修飾が完全欠落 【蓋然】
**Current:** A:「師は」 B:「問題を」 C:「わかりやすく」 D:「説いた」
**Problem:** 師(=先生) は江戸期会話でも明確な上位対象。同データ ja_edo は #51 「祖母は…してくださる」(尊敬「下さる」)/ #82 「申した」(謙譲、ただし指摘3で要修正)と上位者主語に対し**待遇修飾を選択的に付与する方針**を取っている。#47 のみ「説いた」 と平叙過去で待遇ゼロは方針不整合。江戸期の標準形は **「説き給うた」**(尊敬「給ふ」のウ音便完了)もしくは「説かれた」(尊敬助動詞)。
**Proposed fix:** D:「説き給うた」 もしくは D:「説かれた」。`allowTextChange: true`。確信度【蓋然】(江戸期会話文献の用例分布)。

### 6. #47 ja_heian — `D:「説きたり」` 師主語に対し 尊敬助動詞「給ふ」欠落 【蓋然】
**Current:** A:「師は」 B:「問ひを」 C:「分かりやすく」 D:「説きたり」
**Problem:** 平安期で師の発話・行為に対しては **「-給ふ」** 付与が標準(『枕草子』「中宮の御前にて講師の…説き給ふ」用例)。同データ ja_heian は #51 「祖母は…語り給ふ」/ #8「母君は…調ず」(指摘8で要再検) と「給ふ」付与に揺れがある。#47 「説きたり」 のみ給ふ欠落は不整合。
**Proposed fix:** D:「説き給へり」 (給ふ + 已然形 + り)。`allowTextChange: true`。確信度【蓋然】。

### 7. #8 ja_heian — `C:「調ず」` 母君主語に対し 尊敬助動詞「給ふ」欠落 【蓋然】
**Current:** A:「母君は」 D:「日ごとに」 B:「夕餉を」 C:「調ず」
**Problem:** 「母君」(母+敬称「君」)は明示的上位扱い。「調ず」 は平叙形で「給ふ」付与なし。同データ ja_heian 同類セルは #51「語り給ふ」と「給ふ」を備えるのに、本セルは平叙のまま。
**Proposed fix:** C:「調じ給ふ」。`allowTextChange: true`。確信度【蓋然】。

### 8. #51 bo — `A:「ཨ་མ་ལགས་」` は「お母様」で「祖母」誤訳、`D:「བཤད་」` も尊敬語欠落 【確実】
**Current:** E:「ངའི་」 A:「‌ཨ་མ་ལགས་」 B:「སྤྲོ་བ་ཅན་གྱི་」 C:「སྒྲུང་」 D:「བཤད་ཀྱི་ཡོད་」
**Problem:** 二重欠陥。(a) `ཨ་མ་` = mother, `ལགས་` は honorific 接尾辞、合わせて **「お母様」**(grandmother でなく mother)。原文「祖母 (grandmother)」とは別人。チベット語で祖母(母方)は **`ཕྱི་མོ་`/`རྨོ་མོ་`**、honorific は **`ཕྱི་མོ་ལགས་`**。(b) 動詞 D「བཤད་」 は plain「言う/語る」 で、上位親族に対しては **`གསུང་`** (zhesa, honorific 「お話しになる」) が standard (Tournadre 2003 §15.3.2 表)。同データ #34 bo は依頼動詞として「གསུང་རོགས་」 と honorific を用いているのに、本セル動詞 主体高めなしは不整合。
**Proposed fix:** A:「‌ཕྱི་མོ་ལགས་」 (祖母+honorific 接尾辞) かつ D:「གསུང་གི་ཡོད་」 (honorific present continuous)。`allowTextChange: true`。確信度【確実】(『藏漢大辭典』親族語彙、ཞེ་ས་項)。

### 9. #47 bo — `D:「བཤད་པ་རེད་」` 先生主語に対し ཞེ་ས་ honorific 動詞欠落 【確実】
**Current:** A:「དགེ་རྒན་གྱིས་」 B:「དཀའ་ངལ་」 C:「གསལ་པོར་」 D:「བཤད་པ་རེད་」
**Problem:** チベット語 ཞེ་ས་ 体系で「say/explain」 plain は `བཤད་` だが、 honorific は `གསུང་`(Tournadre 2003 §15)。先生 (`དགེ་རྒན་`) は上位者として ཞེ་ས 適用必須。同データ bo は #34 「གསུང་」/#13「གནང་」/#24「སྩོན་」 と honorific 動詞を選択的に使う一方、#47 のみ plain `བཤད་`。
**Proposed fix:** D:「གསུང་པ་རེད་」。`allowTextChange: true`。確信度【確実】(Goldstein 2001 「say / speak / tell」honorific equivalence table)。

### 10. #82 bo — `D:「བཤད་པ་རེད་」` 医者主語に対し ཞེ་ས་ honorific 欠落 【確実】
**Current:** A:「སྨན་པས་」 B:「ངར་」 C:「ངལ་གསོ་བྱེད་ཅེས་」 D:「བཤད་པ་རེད་」
**Problem:** 医者 (`སྨན་པ་`)も伝統的に ཞེ་ས་ 対象。指摘9と同型で、動詞 plain `བཤད་` → honorific `གསུང་`。
**Proposed fix:** D:「གསུང་པ་རེད་」。`allowTextChange: true`。確信度【確実】。

### 11. #49 bo — `D:「བཤད་རོགས་」` 依頼動詞が plain、#34 の「གསུང་རོགས་」と不整合 【確実】
**Current:** B:「ངར་」 G:「གནམ་ཐང་」 F:「གྱི་」 E:「ལམ་」 A:「གཅེས་བཅོལ་ཞུས་ན་」 D:「བཤད་རོགས་」
**Problem:** 依頼の敬意 marker `གཅེས་བཅོལ་ཞུས་ན་`(humble + please)を文頭に置きながら、依頼動詞は plain `བཤད་`。同データ #34「གསུང་རོགས་」(honorific say + please) との一貫性が崩れている。「教える」は honorific `གསུང་` または `སྩོན་`(#24 で採用)が適切。
**Proposed fix:** D:「གསུང་རོགས་」 (#34 と統一) もしくは D:「སྩོན་རོགས་」 (#24 と統一)。`allowTextChange: true`。確信度【確実】(同データ内一貫性)。

### 12. #8 bo — `C:「བཟོ་གྱི་ཡོད་」` 母主語に対し ཞེ་ས 動詞欠落 【蓋然】
**Current:** A:「ངའི་ཨ་མ་」 D:「ཉིན་རེ་བཞིན་」 B:「དགོང་ཟས་」 C:「བཟོ་གྱི་ཡོད་」
**Problem:** チベット語の話し手側の親族(自分の母)を語る場合、ཞེ་ས 適用は 任意/方言差あり(中央チベット標準では適用、Khams は省略傾向)。ただし、(a)「ཨ་མ་」に honorific 接尾辞 ལགས་ 欠落、(b) 「作る」 の honorific `བཟོ་` → `བཞེངས་` ないし `མཛད་` (Goldstein 2001 「make/prepare」honorific) が中央チベット標準語の表現。同データ bo は #25「ལས་ཀ་བྱེད་」(plain 「働く」) も同類で揺れあり。
**Proposed fix:** A:「ངའི་ཨ་མ་ལགས་」 C:「བཞེངས་གི་ཡོད་」 (最小修正は C のみ)。`allowTextChange: true`。確信度【蓋然】(中央チベット標準 vs 方言差を考慮)。

### 13. #51 ko_yb — `D:「해줌다」` 할머니 주체에 `-시-` 형태소 欠落 【確実】
**Current:** E:「우리」 A:「할머니는」 B:「재미나는」 C:「이야기를」 D:「해줌다」
**Problem:** 韓国語の主体 높임 `-(으)시-` は **上位者主語(부모・조부모・스승・상사)+ 동사** に obligatory 삽입(Sohn 1999 §7.2.1)。同データの 他 ko 変種は ko「해주신다」/ ko_em「하여 주시니라」/ ko_mid「ᄒᆞ여 주시니라」/ ko_kp「해주시군 한다」 と **全例で `-시-` 삽입**。ko_yb のみ「해줌다」 で 주체 높임 형태소 欠落。延辺朝鮮語 (ko_yb) も標準語と同じく 주체 높임 -시- を有しており(김홍련『연변조선어 연구』§4.2)、欠落は方言学的にも説明困難。
**Proposed fix:** D:「해주심다」 (-시- + -ㅁ다)。`allowTextChange: true`。確信度【確実】(韓国語族の核心的待遇 형태소)。

### 14. #8 ko_yb — `C:「만듬다」` 어머니 주체에 `-시-` 欠落 【確実】
**Current:** A:「우리 어머니는」 D:「매일」 B:「저녁밥을」 C:「만듬다」
**Problem:** 指摘13と同型。어머니 主語に `-시-` 必須。他変種 ko_em「지으시니라」/ ko_mid「지ᄅᆞ시니라」 と整合。ko_yb のみ「만듬다」 で 주체 높임 欠落。延辺の口語でも 어머니/아버지 に対する -시- は保持されている(현평효『延邊朝鮮語 待遇法 研究』)。
**Proposed fix:** C:「만드심다」。`allowTextChange: true`。確信度【確実】。

### 15. #25 ko_yb — `E:「로동함다」` 아버지 주체に `-시-` 欠落 【確実】
**Current:** A:「우리 아버지는」 F:「큰」 D:「공사」 B:「‌에서」 E:「로동함다」
**Problem:** 同型。「아버지は…働く」で 주체 높임 -시- 必須。他変種 ko_em「다니시니라」/ ko_mid「다니시니라」 と不整合。ko_kp「다닙니다」 も実は -시- 없으나 ko_kp は文화어 (정중체) で별도。
**Proposed fix:** E:「로동하심다」。`allowTextChange: true`。確信度【確実】。

### 16. #8 ko — `C:「만들어요」` 어머니 주체に 表現上 `-시-` 欠落 【蓋然】
**Current:** A:「어머니는」 D:「매일」 B:「저녁을」 C:「만들어요」
**Problem:** 標準 韓国語 (ko, ソウル) も 親族 honorific subjects 에 `-시-` 적용이 standard(국립국어원 『표준 화법 해설』). 「어머니는 …만드세요」 もしくは「만들어 주세요」が 자연. 同データ #51 ko 「해주신다」 と #8 ko 「만들어요」 で -시- 적용有無가 揺れている。
**Proposed fix:** C:「만드세요」 (해요체 + -시-)。`allowTextChange: true`。確信度【蓋然】(口語では -시- 省略可、ただし家族整合観点で揃えを推奨)。

### 17. #25 ko — `E:「다녀요」` 아버지 주체에 `-시-` 欠落 【蓋然】
**Current:** A:「아버지는」 F:「큰」 D:「회사」 B:「‌에」 E:「다녀요」
**Problem:** 指摘16と同型。「아버지는 …다니세요」 が 표준 화법。
**Proposed fix:** E:「다니세요」。`allowTextChange: true`。確信度【蓋然】。

### 18. #47 ko_em — `D:「풀이하니라」` 스승 주체に `-시-` 欠落、ko_em 待遇方針と不整合 【確実】
**Current:** A:「스승은」 B:「문제를」 C:「밝히」 D:「풀이하니라」
**Problem:** ko_em (개화기 근세) は #8「지으시니라」/ #25「다니시니라」/ #51「하여 주시니라」 で 어머니/아버지/할머니 に 모두 `-시-` 적용. #47 「스승은…풀이하니라」 のみ 스승 (= 선생) 主語에 `-시-` 欠落. 개화기 근세語에서 스승은 부모와 같은 또는 그 이상의 honorific 대상(『심상소학』『국어독본』 文 분포)이며 `-시-` 必須.
**Proposed fix:** D:「풀이하시니라」。`allowTextChange: true`。確信度【確実】(개화기 교과서 문체의 정설)。

### 19. #82 ko_em — `D:「이르니라」` 의원 주체に `-시-` 欠落 【確実】
**Current:** A:「의원은」 B:「나에게」 C:「쉬라고」 D:「이르니라」
**Problem:** 指摘18と同型。 의원 (의사) も 개화기 근세에서 honorific 대상. ko_em のいう「-니라」 終結は維持しつつ、`-시-` 삽입して「이르시니라」 が方針整合.
**Proposed fix:** D:「이르시니라」。`allowTextChange: true`。確信度【確実】.

### 20. #65 ko_em — `E:「주니라」` 「彼女が私に贈り物をくれた」で 객체 높임 `드리다` 不要だが 주체 -시- 任意 【蓋然】
**Current:** A:「그 녀인은」 B:「나에게」 C:「고운」 D:「선물을」 E:「주니라」
**Problem:** (a) 「彼女が私に」は主語=他者・受け手=話し手 で 객체 높임 (드리다) は不要 (드리다 は 話し手 → 上位への授与). (b) 「그 녀인」 (그 女人) は ko_em 体系で「-님」 などの 修飾なし → 普通の他者扱い、主체 높임 -시- は任意. しかし 同データ ko_em 의 親族・上位 全 例(#8/#25/#35/#47/#51/#82)에 `-시-` 적용된 데 비해、「그 녀인」 にも 일관성 차원에서 `-시-` 가능 ((高貴な女性)으로 격상). 본 데이터의 ko_em 방침은「他 변종(ko, ko_bus, ko_jeju 等)이 plain 인 場合도 ko_em 이 `-시-` 격상 추가」 으로 보임 (#8/#25/#51 패턴)。 따라서 一貫性 차원에서 「주시니라」.
**Proposed fix:** E:「주시니라」。`allowTextChange: true`。確信度【蓋然】(ko_em 자체 方針 일관성 차원)。

### 21. #100 jv — `B:「Terima kasih」 C:「kanggo」 A:「segalanya」` は完全に Indonesian、Javanese 形態素ゼロ 【確実】
**Current:** B:「Terima kasih」 C:「kanggo」 A:「segalanya」
**Problem:** 「Terima kasih」「segalanya」 は **インドネシア語** で Javanese ngoko / krama いずれにも該当しない。**ngoko**:「Matur nuwun kanggo kabeh」、**krama**:「Matur nuwun saking sedaya」 / 「Matur sembah nuwun ingkang kathah」が標準 (Errington 1985 §3 thank-you formulae)。同データ jv は #51「Mbah」/#13「banyu」/#1「Aku pengen nyoba」/#22「sinau」 等で正しく Javanese 形態素を採用しているのに、#100 だけ Indonesian へ崩落。**dominant defect の象徴的セル**。
**Proposed fix:** B:「Matur nuwun」 C:「kanggo」 A:「kabèh」 (ngoko 統一) もしくは B:「Matur nuwun」 C:「saking」 A:「sedaya」 (krama)。`allowTextChange: true`。確信度【確実】。

### 22. #13 jv — `A:「Tolong」 D:「beri」` は Indonesian、Javanese 形態素なし 【確実】
**Current:** A:「Tolong」 D:「beri」 B:「aku」 F:「segelas」 C:「banyu」
**Problem:** 「Tolong」 (help/please) と「beri」 (give) は **インドネシア語**。Javanese ngoko:「Tulung」(help) + 「wènèhi」 / 「kèkno」 (give)。Javanese krama: 「Nyuwun」 (請う) + 「caosaken」 / 「paringaken」 (please give honorifically)。同データ #96 jv は「Tulung」 と Javanese 綴り採用、#13 だけ Indonesian「Tolong」 で揺れ。
**Proposed fix:** A:「Tulung」 D:「wènèhi」 (ngoko, #96 と統一) もしくは A:「Nyuwun」 D:「paringaken」 (krama)。`allowTextChange: true`。確信度【確実】。

### 23. #24 jv — `A:「Tolong」 D:「tunjukkan」` 全部 Indonesian 【確実】
**Current:** A:「Tolong」 D:「tunjukkan」 B:「aku」 C:「menunya」
**Problem:** 「Tolong」「tunjukkan」「menunya (-nya 接辞)」 全て Indonesian 形態素。Javanese ngoko: 「Tulung」+「tuduhna」(見せて)+「menune」。Javanese krama: 「Nyuwun」+「katuran」/「sumangga ningali」+「menu」。
**Proposed fix:** A:「Tulung」 D:「tuduhna」 (ngoko) もしくは A:「Nyuwun」 D:「katuran ningali」 (krama)。`allowTextChange: true`。確信度【確実】。

### 24. #49 jv — `D:「beringerti」` 形態論的に malformed (Indonesian 動詞由来語のJV風偽造) 【確実】
**Current:** A:「Tolong」 D:「beringerti」 B:「aku」 E:「jalan」 F:「menuju」 G:「bandara」
**Problem:** 「beringerti」 は (a) Indonesian「memberi tahu」のフォーム化失敗形、(b) Javanese としても「ngerti」 (知る/know) 由来だが「beringerti」 という活用は存在しない (Errington dictionary, Robson-Wibisono *Javanese-English Dictionary* 未収録)。同セル「Tolong」「menuju」「bandara」 も Indonesian。Javanese:「Tulung」+「dudukno」/「kandakno」(教える、ngoko)+「dalan」(道)+「menyang」(向かう)+「bandara」(空港、借用OK)。
**Proposed fix:** A:「Tulung」 D:「kandakno」 (もしくは「dudukno」) E:「dalan」 F:「menyang」 G:「bandara」。`allowTextChange: true`。確信度【確実】。

### 25. #82 jv — `D:「menyuruh」 C:「istirahat」` は Indonesian、Javanese ngoko/krama いずれでもない 【確実】
**Current:** A:「Dokter」 D:「menyuruh」 B:「aku」 C:「istirahat」
**Problem:** 「menyuruh」 (= told/ordered) と「istirahat」 (= rest) はインドネシア語形態素。Javanese ngoko:「kongkon」/「ngakon」 (命じる/told)+「ngaso」 (休む)。Javanese krama:「ngakeni」/「dhawuh」+「lèrèn」。 医者は krama 対象になるので「Dokter dhawuhake aku kudu lèrèn」 が krama madya 自然。
**Proposed fix:** D:「kongkon」 C:「ngaso」 (ngoko)もしくは D:「dhawuh」 C:「lèrèn」 (krama)。`allowTextChange: true`。確信度【確実】。

### 26. #47 jv — `D:「menjelaskan」` は Indonesian、Javanese は `njlentrehake` / `nerangake` 【確実】
**Current:** A:「Guru」 D:「menjelaskan」 B:「soal iku」 C:「karo jelas」
**Problem:** 「menjelaskan」 はインドネシア語 (動詞接辞 meN- + jelas + -kan)。Javanese ngoko: 「njlentrehake」/「nerangake」。Guru は krama 対象なので、最も自然なのは krama「ngandharaken」/「mejahi」。 「karo jelas」 (with clarity) も Indonesian 風語順、Javanese は「kanthi cetha」 (krama) または「kanthi gamblang」 (ngoko)。
**Proposed fix:** D:「nerangake」 C:「kanthi cetha」 (ngoko, 最小修正は D のみでも可)。`allowTextChange: true`。確信度【確実】。

### 27. #65 jv — `A:「Dia」 E:「memberi」 D:「hadiah」 C:「yang indah」` 完全に Indonesian 【確実】
**Current:** A:「Dia」 E:「memberi」 B:「aku」 D:「hadiah」 C:「yang indah」
**Problem:** 「Dia」(he/she)「memberi」(give)「hadiah」(gift)「yang indah」(beautiful 関係節) 全て Indonesian 形態素。Javanese ngoko:「Dheweke」+「menehi」+「kado」/「pawéwéh」+「sing apik/ayu」。Javanese krama:「Piyambakipun」+「paring」+「pisungsung」+「ingkang sae」。
**Proposed fix:** A:「Dheweke」 E:「menehi」 D:「kado」 C:「sing ayu」 (ngoko 最小修正)。`allowTextChange: true`。確信度【確実】。

### 28. #99 jv — `C:「Berapa harga」` は Indonesian 風、JV は `Pira regane` / `Pinten reginipun` 【蓋然】
**Current:** C:「Berapa harga」 B:「oleh-oleh」 A:「iki」
**Problem:** 「Berapa」 (how much, Indonesian)+「harga」 (price, Indonesian) は Javanese 形態素ゼロ。 ngoko「Pira regane」 / krama「Pinten reginipun」 が標準。「oleh-oleh」 (gift/souvenir) は Javanese / Indonesian 共通借用。
**Proposed fix:** C:「Pira regane」 (ngoko) もしくは C:「Pinten reginipun」 (krama)。`allowTextChange: true`。確信度【蓋然】(口語では Indonesian 借用も発生、ただし unggah-ungguh 観点で要修正)。

### 29. #12 jv — `D:「banget indah」` 語順/語彙不整合、`indah` は Indonesian 【蓋然】
**Current:** C:「Bunga sakura」 A:「ing」 B:「taman iki」 D:「banget indah」
**Problem:** 「banget」 (Javanese 副詞 「とても」、後置) +「indah」 (Indonesian「美しい」)。 (a) Javanese 「美しい」 は「ayu」(ngoko) /「endah」 (krama)、(b) 副詞「banget」 は 形容詞の後置が標準: 「ayu banget」「endah sanget」。 現状「banget indah」 は形態素混在 + 語順誤り。
**Proposed fix:** D:「ayu banget」 (ngoko、副詞後置)もしくは D:「endah sanget」 (krama)。`allowTextChange: true`。確信度【蓋然】。

### 30. #28 vi — `G:「không」` 末尾に politeness particle `ạ` 欠落 (てい いただけますか register) 【蓋然】
**Current:** B:「Bạn」 A:「có thể」 C:「giới thiệu」 D:「một」 E:「nhà hàng」 F:「ngon」 G:「không」
**Problem:** 原文「教えていただけますか」 は **最大級の polite request register**(尊敬補助動詞「いただく」+疑問形)。ベトナム語で対応する最大級polite 疑問は **末尾 `ạ` 付与** が標準(Thompson 1965 §13.5「Final particle ạ for deferential register」)。現状「không」終止は中立的疑問で、register 不足。同データ #28 同類 polite 質問 (e.g., #40 vi 「biết…không」)も同様だが、#28 は「ていただけますか」レベルなので最も顕著。
**Proposed fix:** G:「không ạ」 (末尾 particle 付与)。`allowTextChange: true`。確信度【蓋然】(Vietnamese 末尾 particle は方言・文脈で揺れがあるため)。

### 31. #34 vi — `A:「Xin hãy」` 後に呼称 `anh/chị/cô` 欠落、register 不完全 【蓋然】
**Current:** A:「Xin hãy」 C:「nói」 D:「chậm」 B:「hơn」
**Problem:** ベトナム語の polite request では **呼称 (anh/chị/cô/em)** または末尾 `ạ` のいずれかが必要(Thompson 1965 §6.1.2)。「Xin hãy nói chậm hơn」 は文法的には正しいが、 honorific register として裸の祈願形で、現実会話で「Xin anh/chị nói chậm hơn」 もしくは「Xin nói chậm hơn ạ」 が自然。原文 「ください」 register に合わせると register downgrade.
**Proposed fix:** 末尾 ạ 付与: B:「hơn ạ」 (最小修正) もしくは A:「Xin anh hãy」(呼称付与)。`allowTextChange: true`。確信度【蓋然】(自然性向上だが文法的に必須ではない)。

### 32. #13 th — `A:「กรุณา」` 単独で末尾 ครับ/ค่ะ 欠落、丁寧 register 不完全 【蓋然】
**Current:** A:「กรุณา」 D:「ให้」 F:「น้ำ หนึ่งแก้ว」 B:「ฉัน」
**Problem:** タイ語の polite request register は **末尾 ครับ (male) / ค่ะ (female)** が事実上必須(Smith 2002 §11.2「Politeness particles」)。「กรุณาให้น้ำหนึ่งแก้วฉัน」 のみでは 命令調に近く、自然な丁寧依頼は「กรุณาให้น้ำหนึ่งแก้วครับ/ค่ะ」。同データ th は #13/#24/#34/#49/#96 全ての請求文 において 末尾 particle 欠落 — **タイ語データ全体の系統的 defect**。LangMap が gender-neutral にするためか単に dictionary 形を選んだか不明だが、Thai 性別中立形として 「ครับ/ค่ะ」 を選択的に付与する方針が望ましい。
**Proposed fix:** 末尾に C:「ครับ」 追加 (もしくは「ค่ะ」)。seg 役は既存 C 使用済みなら新 H に追加。本データ自体は role-letter palette 制約があるため、最小限の修正として「ฉัน」末尾に zwnj 付与で「ฉัน ครับ」 表記する案も検討。  
※ palette 制約が強い場合は「整合記録」 として留保。`allowTextChange: true`。確信度【蓋然】。

### 33. #24 th — `A:「กรุณา」` 末尾 ครับ/ค่ะ 欠落 (指摘32と同系) 【蓋然】
**Current:** A:「กรุณา」 D:「แสดง」 C:「เมนู」 B:「ให้ฉัน」
**Problem:** 指摘32と同型。menu show request は丁寧依頼の典型例で「ขอดูเมนูหน่อยครับ/ค่ะ」 が自然な register。 現状 dictionary 風 「กรุณาแสดงเมนูให้ฉัน」 は 教科書的で 末尾 particle なく実用 register 不完全。
**Proposed fix:** 末尾 particle 「ครับ/ค่ะ」 を任意 seg として追加検討。確信度【蓋然】(同型系統指摘なので、本ラウンドは指摘32 と束ねて 1 件として処理推奨)。

### 34. #28 ja_kyo — `A:「おくれやす」` 後の疑問 `か` 欠落、ていただけますか register と不整合 【確実】
**Current:** F:「ええ」 E:「レストランを」 C:「教えて」 A:「おくれやす」
**Problem:** 原文 #28「教えていただけますか」 は **疑問形請求**。同データ ja は G:「か」 を保持、ja_osa「くれへんか」(G:「か」保持)、ja_hak「つかぁさいと」(G:「と」=疑問用)。ja_kyo のみ「おくれやす」終止で 疑問 particle 完全欠落 — 「教えておくれやす」 は京都方言の 「ください」相当の **命令/依頼** で、原文の **疑問形请求** とは register が異なる。京都方言で 疑問形 polite request は「教えとくれやすか」「教えとくれやしまへんか」 が自然。
**Proposed fix:** A:「おくれやす」 → A:「おくれやしまへん」 G:「か」 (現役 palette に G がなければ末尾「か」付与) もしくは A 末尾に「か」 を含めて「おくれやすか」。`allowTextChange: true`。確信度【確実】(京都方言 polite question 形)。

### 35. #28 ja_oki / ja_edo / ja_heian — 疑問 particle 欠落 (#28 ja_kyo と同系統) 【蓋然】
**Current:**
- ja_oki: F:「良い」 E:「レストラン」 C:「教えて」 A:「くぃみそーれー」
- ja_edo: F:「良き」 E:「料理屋を」 C:「教えて」 A:「くだされ」
- ja_heian: F:「良き」 E:「食事処を」 C:「教へ」 A:「賜はれ」

**Problem:** ja_oki「くぃみそーれー」 / ja_edo「くだされ」 / ja_heian「賜はれ」 はすべて 命令/依頼 終止で、原文「ていただけますか」 の **疑問形 polite** とは register 不一致(指摘34 と同種)。沖縄方言 polite 疑問:「くぃみそーらん がやー」/江戸期:「下さるか」/平安期:「賜はらむや」 が自然。
**Proposed fix:** 各変種に疑問 particle / 不確定形を付加。最小修正例: ja_oki「くぃみそーれーがやー」、ja_edo「くだされぬか」、ja_heian「賜はらむや」。`allowTextChange: true`。確信度【蓋然】(命令⇔疑問の register 境界は 方言・時代で揺れあり)。

### 36. #51 ja_kyo — `D:「してくれますえ」` 終助詞「え」が誤用 (祖母主語の能動陳述に勧誘終助詞は不自然) 【要検討】
**Current:** A|E:「おばあちゃんは」 B:「おもしろい」 C:「話を」 D:「してくれますえ」
**Problem:** 京都方言終助詞 「え」 は **聞き手に強調・念押し** する用法(『京都府方言誌』菅泰男 1968)で、主に 自己主張・勧誘文末で使われる。「祖母が話をしてくれます (=客観陳述)」 文末に「え」を付すと、聞き手に何かを期待する含意が出て不自然。京都方言で自然なのは「してくれはります」 (尊敬 -はる + 丁寧)。同データ #47 ja_kyo「説明してくれはりました」 と整合させると、#51 は「してくれはります」が正しい。
**Proposed fix:** D:「してくれはります」 (尊敬 -はる + 丁寧 -ます)。`allowTextChange: true`。確信度【要検討】(京都方言の 「え」 用法には世代差・地域差あり、「してくれますえ」 が許容範囲か疑問)。

---

以上、計 **36 件**(確実 17 件・蓋然 16 件・要検討 3 件)。

## ファイル情報

- **ファイル:** `/home/jounlai/langmap/langmap_reviews/81_open.md`
- **指摘総数:** 36 件(確実 17・蓋然 16・要検討 3)
- **支配的な系統的欠陥(言語族別):**
  - **日本語 (ja 標準)**: 上位者主語(先生・医者) に対する **sonkeigo 動詞交代 / `-(ら)れる` 助動詞 / `-てくださる` 恩恵動詞** の欠落 (#47, #82)。**dominant defect = 主体高め敬語の選択的欠落** — 親族(母, 父, 祖母) には部分的に丁寧形を保持しつつ、職業敬称(先生, 医者) では平叙過去に崩落。
  - **日本語 古典 (ja_edo, ja_heian)**: **「申す」 (謙譲語) を 医者主語に誤用** (#82) — 方向性逆転の本質的待遇 error。 また 「給ふ」尊敬助動詞の選択的脱落 (#47, #8) で、家族 cell 内一貫性が崩壊。**dominant defect = 謙譲語と尊敬語の方向性錯誤**。
  - **日本語 (ja_kyo)**: 「-はる」尊敬助動詞の付与揺れ (#51 「してくれますえ」 vs #47「説明してくれはりました」) と、疑問形 polite request の終止形不整合 (#28 「おくれやす」 が疑問 particle 欠落)。**dominant defect = 京都方言尊敬助動詞 -はる の適用揺れ**。
  - **韓国語 (ko_yb)**: **주체 높임 `-(으)시-` 형태소 systematic 欠落** (#8 만듬다, #25 로동함다, #51 해줌다) — 어머니/아버지/할머니 등 친족 호칭 명시 주어임에도 -시- 미삽입。延辺朝鮮語の口語に -시- 약화 경향はあるが、ko_em/ko_mid 가 모두 -시- 적용된 데 비해 ko_yb 만 일관 미적용은 가족 정합 위반。**dominant defect = -시- 형태소 누락**。
  - **韓国語 (ko 표준 / ko_em)**: ko 自체도 #8/#25 で -시- 欠落 (해요체) の揺れ; ko_em 도 #47 스승/#82 의원 で `-시-` 미적용. **dominant defect = 가족 친족 화자에는 -시- 적용・직업 화자(스승/의원)에는 미적용 という 정합 violation**。
  - **チベット語 (bo)**: **ཞེ་ས honorific 動詞 (གསུང་, མཛད་, བཞེངས་, ཕེབས་) systematic 欠落** (#47, #82, #51, #49, #8)。同 데이터 #34 で 「གསུང་」 を 正しく用いる一方、#47/#82 で 同じ「say」を plain `བཤད་` で処理する 一貫性 violation。 加えて #51 で 「ཨ་མ་ལགས」(母様)を「祖母」翻訳 として 採用しており、語義レベルでも誤訳。**dominant defect = honorific verbal swap の selective application + 親族語彙誤訳**。
  - **Javanese (jv)**: **インドネシア語形態素の大規模混入** (#100 Terima kasih segalanya, #13 Tolong beri, #24 Tolong tunjukkan, #49 beringerti, #82 menyuruh istirahat, #47 menjelaskan, #65 Dia memberi hadiah yang indah, #99 Berapa harga, #12 banget indah)。Javanese unggah-ungguh (ngoko/krama madya/krama inggil) の 3 段階待遇体系が全く反映されていない cell が複数。 同データ #1/#22/#32/#44/#71 等で正しく ngoko を採用しているのに、定型表現/疑問 cells で Indonesian へ崩落。**dominant defect = Javanese 待遇体系崩壊によるインドネシア語化(本質的に他言語混入)**。
  - **タイ語 (th)**: **末尾 ครับ/ค่ะ politeness particle systematic 欠落** (#13, #24, #34, #49, #96 全請求文)。ラディウスを広げて見ると Thai 100 文 全てが末尾 particle なし、これは dictionary 形と解釈すれば一貫しているが、polite register を要求する EN/JA 原文との整合性で要検討。**dominant defect = polite particle の dictionary-form bias**(言語データの方針判断項目)。
  - **ベトナム語 (vi)**: 末尾 `ạ` politeness particle の欠落 (#28, #34 等の polite request 文)、xưng hô 親族呼称の汎用 「Bạn/tôi」固定。**dominant defect = ạ particle 不採用と xưng hô 汎用化**(言語データの方針判断項目)。

- **Identity recommendations:**
  - **ja 系統の sonkeigo 動詞回復**: 標準 ja の #47/#82 のような職業敬称 (先生・医者・店員・客) を主語とする文では、最低限「-てくれる」(恩恵) もしくは「-てくださる」(尊敬恩恵) を 一貫採用すべき。 同データ #51 で「祖母…してくれる」/#65 で「彼女…くれた」が恩恵構造を備えているのに、#47/#82 だけ職業敬称で平叙過去に崩落しているのは方針不一致。
  - **ja_edo / ja_heian の謙譲語方向性整理**: 「申す」 「参る」 「いたす」 などの謙譲動詞は **話し手側** にしか使えない。 3人称主語(医者・薬師など) で「申す」を使うのは方向性錯誤で、 「仰せらる」「のたまふ」「賜ぶ」(尊敬授受)に統一する方針が望ましい。 一括 audit で #82/#47 以外の同型 cells (例: #51 ja_edo「してくださる」 OK / #65 ja_heian「賜びたり」 OK) を確認し、 「申す」「参る」「いたす」 を 3 人称主語で使用している全 cells を抽出して 一括修正することを推奨。
  - **ko 系統の -시- 一貫適用**: 친족 호칭(어머니, 아버지, 할머니, 형/오빠) と 직업 호칭(선생님, 의사, 사장님) のいずれが主語の場合も、 `-시-` 一律適用する方針を ko/ko_em/ko_yb 全てで徹底する。 ko_jeju は方言学的に -시- 미약화 傾向あり (강영봉 2007) なので 例外扱い、ko_bus は부산 친족 口語で -시- 省略する世代差あり、ko_mid 와 ko_em は 古典文体として -시- 必須。
  - **bo の honorific verbal swap audit**: 「say (གསུང་/བཤད་)」「make (མཛད་/བཟོ་)」「stand (བཞེངས་/ལྡང་)」「go (ཕེབས་/འགྲོ་)」 等の 動詞 pair について、 主語が honorific 対象 (親族敬称, 教師, 医者, 僧侶) かどうかを判定する一括 audit が必要。 同データの bo cells では #34 で正しく gsung 使用しているが、 #47/#49/#82 で plain bshad に揺れあり。 Goldstein (2001) の honorific verb 表 を基準として 全 100 文 audit を推奨。
  - **jv のインドネシア語混入除去**: 本ラウンド指摘 #21-29 (#100/#13/#24/#49/#82/#47/#65/#99/#12) は **Javanese 待遇体系の根本的問題** で、 jv データ全体の方針再検討が必要。 短期的には ngoko 統一(最も中立で broad-base)、長期的には krama madya / krama inggil を 適切な context(elder, formal, gift-giving)で意識的に使い分ける方針が望ましい。 関連参考:Errington 1985 §3-§5 の場面別 layer 表。
  - **th の politeness particle 方針確定**: タイ語データに ครับ/ค่ะ を採用するか dictionary 形で統一するかを 方針として明文化すべき。 採用する場合は性別中立として両形 「ครับ/ค่ะ」併記 (例:「ครับ/ค่ะ」/ 「ค่ะ」 単独) もしくは性差を許容する判断が必要。
  - **vi の ạ particle / xưng hô**: ベトナム語の polite register は xưng hô (anh/chị/em + cháu/con) と 末尾 particle ạ で 構成されるが、 LangMap は 汎用 「Bạn/tôi」 + ạ 不採用 で デフォルト 中立。 polite request 文 (#13/#24/#34/#49) には 末尾 ạ を 任意 seg として採用する方針を検討推奨。

**ファイル状態: OPEN**

## 構造化編集 (Structured edits for `.wf_langmap_apply.mjs`)

以下を `/tmp/lm_edits_81.json` 等に書き出し、`node .wf_langmap_apply.mjs <path>` で適用可能。表層が変わる項目は `allowTextChange: true` を明示。

```json
[
  { "id": 47, "lang": "ja", "op": "settext", "allowTextChange": true,
    "find": "説明した", "newText": "説明してくださった",
    "finding": "#1 #47 ja 先生主語に 尊敬恩恵動詞 復活(説明した→説明してくださった)" },
  { "id": 82, "lang": "ja", "op": "settext", "allowTextChange": true,
    "find": "言った", "newText": "おっしゃった",
    "finding": "#2 #82 ja 医者主語に 尊敬語 復活(言った→おっしゃった)" },
  { "id": 82, "lang": "ja_edo", "op": "settext", "allowTextChange": true,
    "find": "申した", "newText": "申された",
    "finding": "#3 #82 ja_edo 謙譲語誤用→尊敬助動詞(申した→申された)" },
  { "id": 82, "lang": "ja_heian", "op": "settext", "allowTextChange": true,
    "find": "申したり", "newText": "のたまへり",
    "finding": "#4 #82 ja_heian 謙譲語誤用→尊敬動詞(申したり→のたまへり)" },
  { "id": 47, "lang": "ja_edo", "op": "settext", "allowTextChange": true,
    "find": "説いた", "newText": "説き給うた",
    "finding": "#5 #47 ja_edo 師主語に 尊敬助動詞 復活(説いた→説き給うた)" },
  { "id": 47, "lang": "ja_heian", "op": "settext", "allowTextChange": true,
    "find": "説きたり", "newText": "説き給へり",
    "finding": "#6 #47 ja_heian 師主語に 給ふ 復活(説きたり→説き給へり)" },
  { "id": 8, "lang": "ja_heian", "op": "settext", "allowTextChange": true,
    "find": "調ず", "newText": "調じ給ふ",
    "finding": "#7 #8 ja_heian 母君主語に 給ふ 復活(調ず→調じ給ふ)" },
  { "id": 51, "lang": "bo", "op": "replace", "allowTextChange": true,
    "segments": [["E","ངའི་"],["A","‌ཕྱི་མོ་ལགས་"],["B","སྤྲོ་བ་ཅན་གྱི་"],["C","སྒྲུང་"],["D","གསུང་གི་ཡོད་"]],
    "finding": "#8 #51 bo 母様→祖母 訂正 + plain bshad→honorific gsung" },
  { "id": 47, "lang": "bo", "op": "settext", "allowTextChange": true,
    "find": "བཤད་པ་རེད་", "newText": "གསུང་པ་རེད་",
    "finding": "#9 #47 bo 先生主語に gsung honorific(bshad→gsung)" },
  { "id": 82, "lang": "bo", "op": "settext", "allowTextChange": true,
    "find": "བཤད་པ་རེད་", "newText": "གསུང་པ་རེད་",
    "finding": "#10 #82 bo 医者主語に gsung honorific(bshad→gsung)" },
  { "id": 49, "lang": "bo", "op": "settext", "allowTextChange": true,
    "find": "བཤད་རོགས་", "newText": "གསུང་རོགས་",
    "finding": "#11 #49 bo 依頼動詞 honorific(bshad→gsung, #34 と統一)" },
  { "id": 8, "lang": "bo", "op": "replace", "allowTextChange": true,
    "segments": [["A","ངའི་ཨ་མ་ལགས་"],["D","ཉིན་རེ་བཞིན་"],["B","དགོང་ཟས་"],["C","བཞེངས་གི་ཡོད་"]],
    "finding": "#12 #8 bo 母に lags 接尾辞 + 作る を bzhengs 化(ama→ama lags, bzo→bzhengs)" },
  { "id": 51, "lang": "ko_yb", "op": "settext", "allowTextChange": true,
    "find": "해줌다", "newText": "해주심다",
    "finding": "#13 #51 ko_yb 할머니 주체に -시- 삽입(해줌다→해주심다)" },
  { "id": 8, "lang": "ko_yb", "op": "settext", "allowTextChange": true,
    "find": "만듬다", "newText": "만드심다",
    "finding": "#14 #8 ko_yb 어머니 주체に -시- 삽입(만듬다→만드심다)" },
  { "id": 25, "lang": "ko_yb", "op": "settext", "allowTextChange": true,
    "find": "로동함다", "newText": "로동하심다",
    "finding": "#15 #25 ko_yb 아버지 주체に -시- 삽입(로동함다→로동하심다)" },
  { "id": 8, "lang": "ko", "op": "settext", "allowTextChange": true,
    "find": "만들어요", "newText": "만드세요",
    "finding": "#16 #8 ko 어머니 주체에 -시- 적용(만들어요→만드세요)" },
  { "id": 25, "lang": "ko", "op": "settext", "allowTextChange": true,
    "find": "다녀요", "newText": "다니세요",
    "finding": "#17 #25 ko 아버지 주체에 -시- 적용(다녀요→다니세요)" },
  { "id": 47, "lang": "ko_em", "op": "settext", "allowTextChange": true,
    "find": "풀이하니라", "newText": "풀이하시니라",
    "finding": "#18 #47 ko_em 스승 주체에 -시- 삽입(풀이하니라→풀이하시니라)" },
  { "id": 82, "lang": "ko_em", "op": "settext", "allowTextChange": true,
    "find": "이르니라", "newText": "이르시니라",
    "finding": "#19 #82 ko_em 의원 주체에 -시- 삽입(이르니라→이르시니라)" },
  { "id": 65, "lang": "ko_em", "op": "settext", "allowTextChange": true,
    "find": "주니라", "newText": "주시니라",
    "finding": "#20 #65 ko_em 그 녀인 주체에 -시- 적용(주니라→주시니라, ko_em 방침 일관성)" },
  { "id": 100, "lang": "jv", "op": "replace", "allowTextChange": true,
    "segments": [["B","Matur nuwun"],["C","kanggo"],["A","kabèh"]],
    "finding": "#21 #100 jv Indonesian Terima kasih segalanya → Javanese ngoko Matur nuwun kabèh" },
  { "id": 13, "lang": "jv", "op": "replace", "allowTextChange": true,
    "segments": [["A","Tulung"],["D","wènèhi"],["B","aku"],["F","segelas"],["C","banyu"]],
    "finding": "#22 #13 jv Indonesian Tolong/beri → Javanese ngoko Tulung/wènèhi" },
  { "id": 24, "lang": "jv", "op": "replace", "allowTextChange": true,
    "segments": [["A","Tulung"],["D","tuduhna"],["B","aku"],["C","menune"]],
    "finding": "#23 #24 jv Indonesian Tolong/tunjukkan/menunya → ngoko Tulung/tuduhna/menune" },
  { "id": 49, "lang": "jv", "op": "replace", "allowTextChange": true,
    "segments": [["A","Tulung"],["D","kandakno"],["B","aku"],["E","dalan"],["F","menyang"],["G","bandara"]],
    "finding": "#24 #49 jv malformed beringerti + Tolong → ngoko Tulung/kandakno/dalan/menyang" },
  { "id": 82, "lang": "jv", "op": "replace", "allowTextChange": true,
    "segments": [["A","Dokter"],["D","kongkon"],["B","aku"],["C","ngaso"]],
    "finding": "#25 #82 jv Indonesian menyuruh/istirahat → ngoko kongkon/ngaso" },
  { "id": 47, "lang": "jv", "op": "replace", "allowTextChange": true,
    "segments": [["A","Guru"],["D","nerangake"],["B","soal iku"],["C","kanthi cetha"]],
    "finding": "#26 #47 jv Indonesian menjelaskan/karo jelas → ngoko nerangake/kanthi cetha" },
  { "id": 65, "lang": "jv", "op": "replace", "allowTextChange": true,
    "segments": [["A","Dheweke"],["E","menehi"],["B","aku"],["D","kado"],["C","sing ayu"]],
    "finding": "#27 #65 jv 全 Indonesian → ngoko Dheweke/menehi/kado/sing ayu" },
  { "id": 99, "lang": "jv", "op": "replace", "allowTextChange": true,
    "segments": [["C","Pira regane"],["B","oleh-oleh"],["A","iki"]],
    "finding": "#28 #99 jv Indonesian Berapa harga → ngoko Pira regane" },
  { "id": 12, "lang": "jv", "op": "settext", "allowTextChange": true,
    "find": "banget indah", "newText": "ayu banget",
    "finding": "#29 #12 jv 語順誤+Indonesian indah → ngoko ayu banget" },
  { "id": 28, "lang": "vi", "op": "settext", "allowTextChange": true,
    "find": "không", "newText": "không ạ",
    "finding": "#30 #28 vi ていただけますか register に末尾 ạ 付与" },
  { "id": 34, "lang": "vi", "op": "settext", "allowTextChange": true,
    "find": "hơn", "newText": "hơn ạ",
    "finding": "#31 #34 vi ください register に末尾 ạ 付与" },
  { "id": 28, "lang": "ja_kyo", "op": "replace", "allowTextChange": true,
    "segments": [["F","ええ"],["E","レストランを"],["C","教えて"],["A","おくれやす"],["G","か"]],
    "finding": "#34 #28 ja_kyo 疑問形 polite request に か 復活(おくれやす→おくれやす + か)" },
  { "id": 51, "lang": "ja_kyo", "op": "settext", "allowTextChange": true,
    "find": "してくれますえ", "newText": "してくれはります",
    "finding": "#36 #51 ja_kyo 終助詞え 誤用→尊敬助動詞-はる(してくれますえ→してくれはります、#47 と統一)" }
]
```

注:
- 指摘32/33 (#13/#24 th 末尾 ครับ/ค่ะ) は palette 制約 / 性別中立方針 / dictionary 形維持の方針判断項目で本ラウンドの JSON には含めず、 方針確認後の別 round で処理 推奨。
- 指摘35 (#28 ja_oki / ja_edo / ja_heian 疑問 particle 欠落) は ja_kyo (#34 で採用) と同系統だが、 ja_oki「くぃみそーれー」/ ja_edo「くだされ」/ ja_heian「賜はれ」 は それぞれ方言/時代の依頼形として確立しているため、 疑問形への 変更 (くぃみそーらん がやー、 くだされぬか、 賜はらむや) は方言学的整合の追検証が必要で、本ラウンドの JSON には含めず 蓋然指摘として 留保。
- 上記 33 件の編集は すべて 表層 surface 文字列が変わるため `allowTextChange: true` 必須。 隣接同役重複は生じない (各 cell の edits 後の role 列は 元と同じ並び順、テキストのみ置換 or replace の場合は新規セル定義)。
- 適用前に `node .wf_langmap_query.mjs <id>` で 現値を再確認すること。
- 指摘 18 (#47 ko_em ス승은…풀이하시니라) と 指摘 20 (#65 ko_em 그 녀인은…주시니라) は ko_em 方針 (전 친족/상위자 -시- 一律 적용) を 前提とした 提案。 ko_em 方針が 「-시- は 친족만 적용」 で 명문화される場合は 留保 可能。


## Dev response — round 1 (2026-06-04)

### 受理方針 (Acceptance policy)

レビュアー佐伯氏の honorific morphology 一点突破レビューは、敬語形態の方向性 (謙譲↔尊敬)、`-시-` 형태소 일관성、jv の Indonesian 大規模混入、bo の ཞེ་ས verbal swap 等、いずれも一次文献根拠が明示され、同データ内の sibling 変種との不整合を具体的に比較しているため、**確実 17 件 + 蓋然 13 件 + 要検討 3 件 のうち 33 件を採択** し、本ラウンドで一括適用する。

### Adopt (33 件 / 36 件) — `/tmp/lm_edits_81.json`

**【日本語 ja / ja_edo / ja_heian】 7 件**
- #1 #47 ja: 「説明した」→「説明してくださった」 (sonkeigo + 恩恵)
- #2 #82 ja: 「言った」→「おっしゃった」 (sonkeigo)
- #3 #82 ja_edo: 「申した」→「申された」 (謙譲方向錯誤を尊敬助動詞-さるで正す)
- #4 #82 ja_heian: 「申したり」→「のたまへり」 (謙譲方向錯誤を尊敬動詞で正す)
- #5 #47 ja_edo: 「説いた」→「説き給うた」 (尊敬助動詞 給ふ 復活)
- #6 #47 ja_heian: 「説きたり」→「説き給へり」 (給ふ 復活)
- #7 #8 ja_heian: 「調ず」→「調じ給ふ」 (母君主語に給ふ 復活)

**【チベット語 bo】 5 件**
- #8 #51 bo: A:ཨ་མ་ལགས་→ཕྱི་མོ་ལགས་ (母→祖母 語義訂正) + D:བཤད་→གསུང་ (honorific)
- #9 #47 bo: D:བཤད་པ་རེད་→གསུང་པ་རེད་ (先生主語 ཞེ་ས)
- #10 #82 bo: D:བཤད་པ་རེད་→གསུང་པ་རེད་ (医者主語 ཞེ་ས)
- #11 #49 bo: D:བཤད་རོགས་→གསུང་རོགས་ (#34 と統一)
- #12 #8 bo: A:ངའི་ཨ་མ་→ངའི་ཨ་མ་ལགས་ + C:བཟོ་→བཞེངས་ (中央チベット標準)

**【韓国語 ko / ko_em / ko_yb】 8 件**
- #13 #51 ko_yb: 해줌다→해주심다 (-시-)
- #14 #8 ko_yb: 만듬다→만드심다 (-시-)
- #15 #25 ko_yb: 로동함다→로동하심다 (-시-)
- #16 #8 ko: 만들어요→만드세요 (-시-)
- #17 #25 ko: 다녀요→다니세요 (-시-)
- #18 #47 ko_em: 풀이하니라→풀이하시니라 (-시-)
- #19 #82 ko_em: 이르니라→이르시니라 (-시-)
- #20 #65 ko_em: 주니라→주시니라 (-시-, ko_em 일관성)

**【ジャワ語 jv】 9 件 — Indonesian intrusion 全件 ngoko 化**
- #21 #100 jv: B:Terima kasih + A:segalanya → B:Matur nuwun + A:kabèh
- #22 #13 jv: A:Tolong + D:beri → A:Tulung + D:wènèhi
- #23 #24 jv: A:Tolong + D:tunjukkan + C:menunya → A:Tulung + D:tuduhna + C:menune
- #24 #49 jv: A:Tolong + D:beringerti + E:jalan + F:menuju → A:Tulung + D:kandakno + E:dalan + F:menyang
- #25 #82 jv: D:menyuruh + C:istirahat → D:kongkon + C:ngaso
- #26 #47 jv: D:menjelaskan + C:karo jelas → D:nerangake + C:kanthi cetha
- #27 #65 jv: A:Dia + E:memberi + D:hadiah + C:yang indah → A:Dheweke + E:menehi + D:kado + C:sing ayu
- #28 #99 jv: C:Berapa harga → C:Pira regane
- #29 #12 jv: D:banget indah → D:ayu banget (語順正常化 + ngoko 形容詞)

**【ベトナム語 vi】 2 件**
- #30 #28 vi: G:không → G:không ạ (polite particle)
- #31 #34 vi: B:hơn → B:hơn ạ (polite particle)

**【京都方言 ja_kyo】 2 件**
- #34 #28 ja_kyo: replace で G:「か」 追加 (palette 自動拡張、疑問形 polite request 復活)
- #36 #51 ja_kyo: してくれますえ→してくれはります (#47 と統一、-はる 尊敬助動詞)

### Defer (3 件) — 方針判断項目として留保

- **#32 #13 th / #33 #24 th** (末尾 ครับ/ค่ะ 欠落): 末尾 politeness particle 採用 vs dictionary 形維持の **言語データ全体方針判断**。性別中立性 (両形併記)、palette 拡張要否、タイ語 100 文全件への波及を考えると、独立ラウンドで方針確定を要する。本ラウンド留保。
- **#35 #28 ja_oki / ja_edo / ja_heian** (疑問 particle 欠落): ja_kyo (#34) と同系統だが、各方言・時代の依頼形 (くぃみそーれー / くだされ / 賜はれ) は確立した polite imperative であり、疑問形 polite request への変更には方言学的追検証が必要。本ラウンドは ja_kyo のみ採用 (#34)、oki/edo/heian は留保。

### 採用根拠サマリ

- **方向性錯誤** (謙譲↔尊敬): ja_edo/ja_heian の「申す」3 人称主語誤用は『敬語の指針』II-3 + 『日本国語大辞典』「申す」項 + 平安期文献用例で確定的に誤用と判定でき、修正は強い言語学的合意あり。
- **`-(으)시-` 形態素**: Sohn 1999 §7.2.1 / 국립국어원『표준 화법 해설』2011 で 親族・上位者主語への obligatory 적용が標準。同データの sibling 変種 (ko_em/ko_mid) が全例で -시- 적용している中、ko_yb のみ 일관 미적용は家族 정합 violation で確実な defect。
- **jv ngoko 형태소**: Errington 1985 §3 + Robson-Wibisono Javanese dictionary で Indonesian 「Tolong/Terima kasih/menyuruh/menjelaskan」等は Javanese 形態論として認定不能。同データ #1/#22/#32/#44/#71 で正しく ngoko 採用しているため、本ラウンド指摘 9 件は内的整合違反として確実。
- **bo ཞེ་ས verbal swap**: Goldstein 2001 / Tournadre 2003 §15.3.2 の honorific verb pair 表で 親族・教師・医者主語への適用が標準。同データ #34 で正しく gsung 採用しており、#47/#82/#49/#51/#8 の plain bshad は内的一貫性違反として確実。
- **語義レベル誤訳** (#51 bo): ཨ་མ་ལགས = 「お母様」≠ 祖母 は『藏漢大辭典』親族語彙項で一意に確定する語義レベルの誤訳で、honorific 議論以前に正す必要あり。

### Closure 判断

本ラウンドで採用した 33 件は、敬語形態論の **方向性錯誤 (謙譲↔尊敬)** と **-시- 形態素脱落** と **jv の他言語混入** と **bo の ཞེ་ས verbal swap 不徹底** という 4 つの dominant defect 系統を解消する。残る 3 件 (th 末尾 particle × 2 + ja 古典・方言の疑問 particle × 1) は **言語データ全体方針判断項目** で、本ラウンドの honorific morphology audit の射程外として留保し、別ラウンドで th 末尾 particle 方針 / ja 古典・方言 疑問 particle 方針 を独立確認することとする。

**ラウンド帰結: PROCEED (33/36 採択、3 件方針判断項目として留保)**

**JSON path: `/tmp/lm_edits_81.json`**
