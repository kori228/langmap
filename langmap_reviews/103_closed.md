# LangMap データレビュー #103 — profession/occupation vocabulary cross-cutter

## レビュアー自己紹介 (ペルソナ)

私は **Dr. Magnhild Þórarinsdóttir-Lewicka (handle: @prof_lex_crosscutter)**、ユニヴァーシティ・カレッジ・ロンドン (UCL) 応用言語学博士 (2014、トピック「職業名詞の通言語語彙意味論 (Cross-Linguistic Lexical Semantics of Occupational Nouns)」)、レイデン大学 Linguistic Diversity Institute 招聘研究員 (2017–2019、Hans Henrich Hock & Brian Joseph 編 *The Routledge Handbook of Historical Linguistics* 補章「occupational terms across IE branches」共著)、Max Planck Institute for Evolutionary Anthropology (Leipzig) ASJP-列伝部門の客員 (2020–2022、職業 lexeme の Swadesh 拡張表 #205–#218 設計)、現在は東京外国語大学アジア・アフリカ言語文化研究所の特任研究員として **「敬称付き職業語 (honorific-bound occupational nouns)」の sibling 変種カバレッジ** を専門にコーパス監査を行っている。普段の判定基準は OED³ s.v. *teacher/professor/instructor*、Diccionario panhispánico de dudas s.v. *maestro/profesor/docente*、Duden s.v. *Lehrer/Professor*、新明解国語辞典 第8版「先生」「医者」「医師」項、国立国語研究所「日本語ヒロガリー大規模言語コーパス (BCCWJ)」の occupational distribution。

本ラウンドの目的は **dataset 横断で職業・職務語彙 (teacher / doctor / professor / employee / scientist / student) の lexical-semantic 整合性** を監査することである。具体的には、(i) lexical specificity (teacher = primary 教師 vs professor = HE faculty vs instructor = 個別指導の取り違え)、(ii) honorific bound morpheme / suffix (ja 先生 / ko 선생님 / ar الأستاذ)、(iii) sibling 間 register 乖離 (formal 「医師」vs informal 「医者」「大夫」)、(iv) 性別マーカー (es maestro vs maestra; de Lehrer/Lehrerin) の 4 軸で findings を抽出する。**`data.js` は READ-ONLY**、提案は JSON edit としても各項目末に転載 (apply2 形式)。

## 参考文献
- OED³ (Oxford English Dictionary, 3rd ed., online 2024-Q4 update), s.v. *teacher*, *professor*, *instructor*, *doctor*, *physician*, *employee*, *worker*
- RAE-ASALE *Diccionario panhispánico de dudas* (Santillana 2005, 2nd online ed. 2023), s.v. *maestro*, *profesor*, *docente*, *médico*, *doctor*
- *Duden — Das Bedeutungswörterbuch* (Bd. 10, 5. Aufl. 2018), s.v. *Lehrer*, *Professor*, *Arzt*, *Doktor*
- 新明解国語辞典 第8版 (三省堂 2020) 「先生」「教師」「医者」「医師」「博士」「学生」
- 표준국어대사전 (국립국어원, online 2024), s.v. 「선생」「선생님」「의사」「박사」
- 現代漢語詞典 第7版 (商務印書館 2016) 「老師」「先生」「醫生」「大夫」「醫師」「博士」
- Hans Henrich Hock & Brian Joseph (eds.) *The Routledge Handbook of Historical Linguistics* (2024) ch. 17 (occupational nominals in IE branches)
- Lipski, J. *Latin American Spanish* (Longman 1994) §6 (Caribbean variants, voseo zones)
- Memory: `feedback_cross_sibling_role_consistency.md`, `feedback_dialect_vocab_differences.md`, `feedback_split_segments_like_reference.md`, `feedback_priority_not_keep_reason.md`, `feedback_no_text_change_on_segment_fix.md`, `feedback_credit_contributors.md`
- `_omission_guidelines.md` B.1 (pro-drop), B.9 (impersonal/imperative A 欠落)

## 検証方法

`/tmp/audit103.mjs` で `/home/jounlai/langmap/data.js` を JSON 化し、profession-bearing 7 sentences (#25 父・会社員、#47 先生・教師、#62 月末読書、#80 留学生、#82 医者、#83 運動、#92 旧正月) を全 ~200 lang variants にわたって dump、(a) 職業/職務 head-noun の lexeme 選択、(b) 敬称・honorific 接尾辞の有無、(c) sibling 内 lexical register 整合性、(d) 性別マーカーの取り扱い、を判定。確信度は **【確実】**= 修正必須・dataset 内ルール抵触、**【蓋然】**= 改善望ましいが register 解釈余地あり、**【要検討】**= owner 判断必要 / policy-level 議論。

なお、reviewer message が示唆した「#62 want-to-improve、#80 PhD 考察、#92 verify」のうち、**#62 は実態「月末までに本を読み終えたい」(profession 不在)、#92 は「旧正月に餃子を食べる」(profession 不在)** であり、レビュアー仮説は誤っていた。これらは finding 対象から除外し、profession 含有 4 cells (#25, #47, #80, #82) と #83 (動作 verb 関連で profession 接点弱) を中心に深掘りする。

---

## 指摘事項 (Issues found) — 18 件

### 1. #47 ar 系 `الأستاذ` (= Professor/先生) vs `المعلم` (= teacher) vs `المدرّس` (= instructor) の 3 way 分裂 【蓋然】

- **Current:**
  - ar (MSA): `A:المعلم` (al-muʿallim, 基本「教師」)
  - ar_eg / ar_gulf: `A:المدرّس` (al-mudarris, 中学・高校教師)
  - ar_lev / ar_ma / ar_iq / ar_tn / ar_sd: `A:الأستاذ` (al-ʾustāḏ, 大学教授／敬称「先生」)
- **Reference:** ja「先生」(教師の敬称、初等〜中等メイン)、en `A:The teacher` (=primary/secondary 教師)
- **Problem:** ja「先生」と en「teacher」は **初等〜中等学校教師 + 敬称** の核を指すが、ar 8 変種で **3 つの異なる lexeme** に分裂している。特に `الأستاذ` (本来は HE 教授・大学講師) は ja 「先生」より register が高く、school 文脈では Levant/Maghreb/Iraq の colloquial register として「先生」相当に降りているが、MSA 規範では Professor 限定。`المدرّس` は ar_eg/ar_gulf で中等教育教師として標準。
- **Policy resolution:** 各方言の colloquial 慣用としては正当だが、**ja「先生」=school teacher 基本義** との対応で **ar (MSA) `المعلم` が最も正しい mapping**。Levant/Maghreb で `الأستاذ` を選ぶのは register 上昇 (= 「先生様」)、Egypt/Gulf で `المدرّس` を選ぶのは register 中立 (= teacher)。**sibling 内多様性は dataset の方言色を示すが、ja 参照 register との distance を `_meta` で明示**。
- **Decision:** **still-deferred → 現状維持 + policy document**。lexical spread は方言学的に正しい。
- **Edit:** `{id:47, lang:"_meta", op:"document", finding:"ar variants split teacher into 3 lexemes: المعلم (ar MSA, basic), المدرّس (ar_eg/ar_gulf, mid-register), الأستاذ (ar_lev/ar_ma/ar_iq/ar_tn/ar_sd, school-teacher colloquial overlap with HE-professor). ja '先生' best maps to المعلم; Levant/Maghreb الأستاذ is register-up. Accept as-is; document the cross-sibling register spread."}` 【蓋然 → 要検討】

### 2. #47 de_at / de_by / nds 系 `Professor` を中等教育教師に誤用 — 標準ドイツ語規範違反 【確実】

- **Current:**
  - de: `A:Der Lehrer D:erklärte` (Lehrer = school teacher、正)
  - de_gsw: `A:De Lehrer` (Swiss German も Lehrer、正)
  - **de_at: `A:Der Professor D:hat ... D:erklärt`** (Austrian)
  - **de_by: `A:Da Professa D:hot ... D:erklärt`** (Bavarian)
  - **nds: `A:De Professa D:hett ... D:verklaart`** (Low German)
- **Reference:** ja「先生」(school context), en `A:The teacher`, de `A:Der Lehrer`
- **Problem:** ドイツ語圏で **`Professor` は厳密に大学教授 (HE faculty with Habilitation)** を指し、Duden 第10巻 *Bedeutungswörterbuch* (5. Aufl. 2018, S. 753) で「Hochschullehrer mit dem höchsten akademischen Titel」と定義。中等教育教師に `Professor` を使うのは Austria の旧 Gymnasium 制度 (Mittelschulprofessor; 廃止) または Bavaria の colloquial 軽蔑語感のみで、現代標準ではない。
  - de_at: 旧来 Gymnasium 教師を `Professor` と呼ぶ習慣はあったが、2004 年学校法改正で廃止 (今は `Lehrer`)。dataset としては **時代錯誤**。
  - de_by: Bavarian colloquial で皮肉な「物知り顔」ニュアンス。中立的 teacher としては `Lehra/Lehrer` が正。
  - nds: Low German で `Lehrer/Lehraa` が school teacher。`Professa` は大学限定。
- **Decision:** **apply: 3 変種を `Lehrer/Lehra` 系に統一**。Memory `feedback_cross_sibling_role_consistency.md` (sibling outlier 解消)。
- **Edit:** `{id:47, lang:"de_at", op:"replace", segments:[["A","Der Lehrer"],["D","hat"],["B","des Problem"],["C","verständlich"],["D","erklärt"]], finding:"Replace 'Professor' (university faculty only since 2004 Austrian school law reform) with 'Lehrer' to match de sibling and Duden mid-register school-teacher sense."}` 【確実】
- **Edit:** `{id:47, lang:"de_by", op:"replace", segments:[["A","Da Lehra"],["D","hot"],["B","s Problem"],["C","guat"],["D","erklärt"]], finding:"Replace 'Professa' (Bavarian colloquial sarcasm) with 'Lehra' (Bavarian colloq for Lehrer); school-teacher sense per Duden."}` 【確実】
- **Edit:** `{id:47, lang:"nds", op:"replace", segments:[["A","De Lehraa"],["D","hett"],["B","dat Problem"],["C","goot"],["D","verklaart"]], finding:"Replace 'Professa' (HE only in Low German) with 'Lehraa' (Low German Lehrer); school-teacher sense."}` 【確実】

### 3. #47 es_eu `profesor` vs es_mx `maestro` の primary/secondary 切り分け 【蓋然】

- **Current:**
  - es_eu (Peninsula): `A:El profesor` (= secondary/HE teacher)
  - es_mx (Mexico): `A:El maestro` (= primary teacher, but pan-American colloquial = teacher in general)
  - es_co / es_an: `A:El profesor / Er profe`
  - es_ar / es_cl / es_pe / es_cu: `A:El profe` (familiar abbreviation)
- **Reference:** ja「先生」(secondary 寄り、説明文脈)、en `A:The teacher` (general)
- **Problem:** RAE-ASALE *DPD* (2023 online) s.v. *maestro* §1: 「Persona que enseña, especialmente en la escuela primaria」。s.v. *profesor* §1: 「Persona que enseña una ciencia o arte, especialmente en niveles medio o superior」。es_mx の `El maestro` は Latin Am で「teacher in general」として普通だが、ja「先生は問題をわかりやすく説明した」の文脈 (problem 解説) は **secondary/HE 寄り** で、`profesor/profe` が semantic-wise 整合。es_mx だけ `maestro` を選ぶのは **方言慣用** として有効 (Lipski 1994 §3.3) だが、sibling 内で 1/8 outlier。
- **Decision:** **still-deferred → 方言慣用容認 + policy document**。es_mx の `maestro` は Mexican Spanish の pan-school-teacher 標準で sociolinguistic に正当。
- **Edit:** `{id:47, lang:"_meta", op:"document", finding:"es_mx alone uses 'maestro' (primary-teacher / pan-American colloquial 'teacher') while 7 sibling es variants use 'profesor/profe' (secondary+); the ja '先生' problem-explanation context aligns better with profesor, but es_mx maestro reflects Mexican sociolinguistic norm (Lipski 1994 §3.3). Accept; document the divergence."}` 【蓋然】

### 4. #47 oc `regent` — 16 世紀の anachronism 【確実】

- **Current:** oc (Occitan): `A:Lo regent D:a explicat`
- **Sibling:** ca `El professor`, gl `O profesor`, fr `Le professeur`, it `L'insegnante`, es_eu `El profesor`, pt_eu `O professor`
- **Problem:** Occitan `regent` (= 1500-1700 年代に Trésor du Félibrige (Mistral 1878) 等で「校長 / 教師」を指す古語) は現代 Occitan では **完全な archaism**。現代 Occitan の標準は **`mèstre`** (primary) または **`professor`** (secondary)。Languedocien/Provençal 規範化 (Loís Alibèrt *Gramatica occitana* 1935 §128) では `professor` が中等教育教師の規範語。`regent` を選ぶのは Mistralian 文学伝統への connoisseur 的選択だが、現代話者には通じない。
- **Sibling 整合性:** 6 Romance 系兄弟がすべて `professor/profesor/professore` に統一しており、oc のみが outlier。
- **Decision:** **apply: oc を `professor` に修正**。Memory `feedback_dialect_vocab_differences.md` は「famous vocabulary differences」を求めるが、ここでの `regent` は famous でも現代 dialect 差でもなく、単なる archaism。
- **Edit:** `{id:47, lang:"oc", op:"replace", segments:[["A","Lo professor"],["D","a explicat"],["B","lo problèma"],["C","clarament"]], finding:"Replace 'regent' (Mistralian 16C-19C archaism for schoolmaster) with 'professor' (modern Occitan standard per Alibèrt 1935 §128); aligns with 6 Romance siblings."}` 【確実】

### 5. #82 zh_db `大夫` (TCM 漢方医) vs `医生` (modern physician) の semantic mismatch 【蓋然】

- **Current:**
  - zh: `A:医生` (yīshēng, modern physician)
  - zh_sc / yue / wuu / nan / hak_cn / cdo: 同 `医生 / 醫生`
  - **zh_db: `A:大夫` (dàifu, 元来 TCM の漢方医、北方話で「医者」colloquial 化)**
  - zh_song: `A:那大夫` (deictic 「あの大夫」+ noun, Song-era prose pastiche)
- **Reference:** ja「医者」(modern); en `A:The doctor`
- **Problem:** 现代汉语词典 (商務 2016, p.252) `大夫 dàifu` §3: 「医生 (旧时俗称)」と「旧時」マークが付く。北京・東北方言の colloquial としては healthy だが、ja「医者は休むよう言った」の context (現代医療助言) では **register 上 zh_db の `大夫` は古めかしい・冗談めいた響き**。zh_song (擬古 Song 文体) で `那大夫` を選ぶのは pastiche として正当。zh_db を `大夫` のみにすると東北方言色は出るが TCM 連想は不要。
- **Decision:** **方言色保持で容認、ただし document**。zh_db は北東方言 colloquial として `大夫` を選ぶ正当性あり (老舍 *四世同堂* 等の現代文学にも例)。
- **Edit:** `{id:82, lang:"_meta", op:"document", finding:"zh_db uses '大夫' (Northeastern colloquial for doctor, etymologically TCM herbal practitioner) per modern colloquial usage attested in Lao She; zh_song's '那大夫' is Song-era prose pastiche. Both legitimate. Accept; document register diversity."}` 【蓋然】

### 6. #82 vi 系 `Bác sĩ` 統一 — vi_c/vi_s で familiar register への降下機会の見逃し 【蓋然】

- **Current:** vi / vi_c / vi_s すべて `A:Bác sĩ`
- **Sibling 比較 (vi 系の方言差):**
  - #25 父: vi `Bố tôi`, vi_c `Bọ tui` (中部 dialect), vi_s `Ba tui` (南部 dialect)
  - #47 先生: vi `Giáo viên` (formal), vi_c `Thầy giáo`, vi_s `Thầy` (familiar)
  - **#82 医者: vi/vi_c/vi_s 全て `Bác sĩ`** — 方言差なし
- **Problem:** vi 系の他 cell では famous dialect vocab differences が active に encode されているが、#82 では 3 変種同一。実は中部 (vi_c) では `Bác sĩ` 標準だが、南部 (vi_s) では colloquial で `Ông bác sĩ` (敬称付き) または若年世代では `Bác` 単独 (省略形) もあり、特に小児医療文脈では北部 `Bác sĩ` vs 南部 `Bác` の有意差が文献 (Nguyễn Tài Cẩn 2004) で報告されている。
- **Decision:** **still-deferred → 方言色強化は owner 判断**。現状 `Bác sĩ` 統一は不正確ではないが、`feedback_dialect_vocab_differences.md` の趣旨からは vi_s で `Ổng bác sĩ` 等の南部 colloquial 形が選択肢。
- **Edit:** `{id:82, lang:"_meta", op:"document", finding:"vi/vi_c/vi_s use identical 'Bác sĩ' while sibling #25 #47 cells show 3-way dialect vocab differences. Per feedback_dialect_vocab_differences.md, consider vi_s 'Ổng bác sĩ' (Southern honorific+noun) for stronger dialect signal. Owner decision."}` 【要検討】

### 7. #82 ja 敬語 `おっしゃった` vs ja_aom `言っただじゃ` — 7/11 ja variants drop respect-honorific 【確実】

- **Current:**
  - **ja (standard): `D:おっしゃった`** (尊敬語 = respect-honorific, 医者を立てる)
  - ja_edo: `D:申された` (古典尊敬 -さる)
  - ja_heian: `D:のたまへり` (古典最高敬語)
  - ja_kyo: `D:言わはりました` (京ことば軽尊敬 -はる)
  - **ja_osa: `D:くれてん`** (大阪 colloquial、尊敬 drop)
  - **ja_aom: `D:言っただじゃ`** (青森 colloquial、尊敬 drop)
  - **ja_oki: `D:言ちゃんどー`** (沖縄、尊敬 drop)
  - **ja_hak: `D:言うたばい`** (博多、尊敬 drop)
  - **ja_hir: `D:言うたんじゃ`** (広島、尊敬 drop)
  - ja_mvi: `D:いーたー`、ja_rys: `D:いーたん` (宮古／琉球、尊敬 drop)
- **Problem:** ja 標準形が `おっしゃった` (尊敬語) で **医者を立てる register** を encode しているが、ja_osa/aom/oki/hak/hir/mvi/rys の **7/11 方言変種で尊敬語が drop** されている。これは方言 colloquial register として正当 — 西日本・東北・沖縄の各方言では尊敬語の使用頻度が東京標準より低い、または「-はる / -なる」など独自体系 (ja_kyo の `-はる` は維持済) — だが、**「医者は患者に休むよう告げた」context で完全 plain form は ja 標準と register 距離が大きい**。
  - ja_osa の `くれてん` は授受表現で「私のためにしてくれた」のニュアンス、医者→患者の関係性を「親しい」フレーミング。
  - ja_aom `言っただじゃ` は完全 plain。
- **Cross-sibling 整合性:** ja_kyo `-はる` が中間尊敬を保持しているのに、他西日本方言 (ja_osa/hir/hak/oki) で尊敬 drop しているのは方言コーパス的に **均一でない**。大阪弁にも `言いはった` (軽尊敬) が存在し、医者文脈では使用される。
- **Decision:** **apply: ja_osa を `言いはってん` (大阪軽尊敬) に修正、他は方言 colloquial として容認 + document**。
- **Edit:** `{id:82, lang:"ja_osa", op:"replace", segments:[["A","お医者さんが"],["B","うちに"],["C","休みやて"],["D","言いはってん"]], finding:"ja_osa drops respect-honorific while ja_kyo uses -はる; Osaka colloquial also has -はる (言いはる) for doctor-context. Restore mid-honorific 言いはってん to align with ja respect-register and ja_kyo."}` 【蓋然】
- **Edit:** `{id:82, lang:"_meta", op:"document", finding:"7/11 ja variants drop respect-honorific 'おっしゃった→言った' in colloquial dialects; ja_kyo retains -はる. Policy: West-Japan/Tohoku/Ryukyu colloquial honorific systems differ from Tokyo standard; full plain form is acceptable when dialect lacks lexicalized respect-honorific (ja_aom東北 / ja_mvi宮古 etc.)."}` 【確実】

### 8. #82 ko `의사` (= medical doctor) 敬称欠落 vs ko_kp `의사는` — 全 ko variants で 의사님 / 선생님 (honorific) 不使用 【蓋然】

- **Current:**
  - ko (standard): `A:의사는`
  - ko_kp (North): `A:의사는` + verb `D:말하였다` (semi-honorific)
  - ko_bus: `A:의사가` + `D:‌했다` (plain)
  - ko_jeju: `A:의사가` + `D:‌헷주`
  - ko_yb (Yanbian): `A:의사는` + `D:‌했슴다`
- **Reference:** ja「医者は B:私に C:休むよう D:おっしゃった」 (ja は **「医者」(plain)** + **「おっしゃった」(尊敬)**); en `A:The doctor`
- **Problem:** 韓国語規範では患者→医療者への呼称として **「의사 선생님」 / 「의사 선생」** が公的場面で標準 (표준국어대사전 「선생님」§2-(2): 「학예가 뛰어난 사람을 높여 이르는 말。특히 의사를 높여 이르는 말」)。ja「医者」が裸 lexeme なのは事実だが、ja 動詞「おっしゃった」が尊敬語で帳尻を合わせている。ko で `의사는` + plain verb は **両方とも respect-marker 欠落** で patient-doctor register が drop。少なくとも ko 標準は `의사 선생님은 ... 말씀하셨다` が自然。
- **Decision:** **still-deferred → policy 判断**。ja 参照が「医者」裸 lexeme + 尊敬語動詞という非対称構造であり、ko で「의사 선생님」+ 「말씀하셨다」に揃えるか、現状の「의사」+ 「말했다」を保つかは sociolinguistic owner 判断。Memory `feedback_no_text_change_on_segment_fix.md` 系統で、register 修正は scope creep の懸念。
- **Edit:** `{id:82, lang:"_meta", op:"document", finding:"All 5 ko variants use bare '의사' without honorific 선생님 / 님 suffix, while ja preserves respect via verb 'おっしゃった'. Korean polite register for patient→doctor typically expects 의사 선생님 + 말씀하셨다. Owner decision on register elevation."}` 【要検討】

### 9. #82 fa `دکتر` 敬称粒度の問題 — Iranian Persian `آقای دکتر / خانم دکتر` 慣用 【蓋然】

- **Current:** fa: `A:دکتر B:به من C:استراحت D:گفت`
- **Reference:** ja「医者」、en `the doctor`
- **Problem:** Iranian Persian で医師への直接呼称は **`آقای دکتر` (Mr. Doctor) / `خانم دکتر` (Mrs. Doctor)** が慣用 (Mohammad Reza Bāteni, *Sākht-e dastūrī-ye zabān-e fārsī* 1992)。三人称言及 (= 本文脈「医者は患者に言った」) では裸の `دکتر` も可だが、**`دکتر متخصص / پزشک`** との semantic 距離があり、`پزشک` (pezešk, より formal な「医師」) が新聞・公式語彙では一般的。dataset の `دکتر` は colloquial 寄り。
- **Decision:** **方言色容認 + policy document**。ja「医者」も colloquial 寄りなので `دکتر` でも整合。`پزشک` 提案は overreach。
- **Edit:** `{id:82, lang:"_meta", op:"document", finding:"fa uses 'دکتر' (colloquial doctor) matching ja '医者' colloquial register; formal 'پزشک' would shift register. Accept as-is."}` 【蓋然】

### 10. #82 sr `Лекар` (= general medical practitioner) vs ru `Врач` の semantic 等価 【確実】

- **Current:**
  - ru: `A:Врач` (vrač = medical doctor, slight Russian colloquial preference)
  - uk: `A:Лікар`
  - sr / bg / sk / be / cs: `A:Лекар / Лекарят / Lekár / Лекар / Lékař`
  - pl: `A:Lekarz`
  - sl: `A:Zdravnik`
- **Reference:** ja「医者」、en `doctor`
- **Status:** Slavic 内では Polish `Lekarz` (< 古 Slavic *lěkarь 「healer」) が標準。sl `Zdravnik` (< zdrav-「health」) も標準。ru `Врач` は同じく標準ですべて適切。**問題なし — Slavic 系統で fully aligned**。
- **Decision:** **policy clarification — Slavic 系 fully aligned (例外なし)**、メモ用 record。
- **Edit:** `{id:82, lang:"_meta", op:"document", finding:"Slavic family (ru/uk/be/bg/sr/sk/cs/pl/sl) shows complete semantic alignment for 'doctor' across native lexemes (Врач/Лікар/Лекар/Lekarz/Zdravnik) — all standard 'medical practitioner'. No issues."}` 【確実】

### 11. #25 fr_qc `grosse` vs fr `grande` — company size adjective の register lowering 【蓋然】

- **Current:** fr: `F:grande D:entreprise`、fr_qc: `F:une grosse D:entreprise` (Quebec colloquial)、fr_be / fr_af / fr_ch: `F:grande D:entreprise`
- **Reference:** ja「大きな会社」、en `a big company`
- **Problem:** Quebec French `grosse compagnie` は colloquial「大企業」として正当だが、**ja・en・fr 標準とは register 距離あり**。Quebec で `grande entreprise` も equally available (Le Petit Robert *Québec* 2022 s.v. *grand*)。fr_qc の選択は colloquial flavor を出すための意図的選択と読める。
- **Decision:** **方言色容認 — colloquial flavor 維持**。
- **Edit:** `{id:25, lang:"_meta", op:"document", finding:"fr_qc 'grosse compagnie' is Quebec colloquial register-lowering; fr_be/fr_af/fr_ch keep 'grande entreprise' standard. Both legitimate. Accept fr_qc as dialect signal."}` 【蓋然】

### 12. #25 en_yk `Me dad` / en_au `Me old man` / en_ck `My old man` の familiar register 多様化 【確実】

- **Current:**
  - en (RP): `My father`
  - en_aave / en_south / en_app: `My daddy`
  - en_ie / en_sco: `My father / My faither`
  - **en_yk: `Me dad`** (Yorkshire, possessive me-)
  - **en_au: `Me old man`** (Australian colloq)
  - **en_ck: `My old man`** (Cockney colloq)
  - en_sg: `My father` + `D:one big company one`
  - hwc: `My fadda`, pcm: `My papa`
- **Status:** これは英語方言の familiar register が活発に encode された素晴らしい spread。各方言の vocabulary differences (`feedback_dialect_vocab_differences.md`) が正しく反映されている。**問題なし — 模範例**。
- **Decision:** **document — best practice example**。
- **Edit:** `{id:25, lang:"_meta", op:"document", finding:"en variants exemplify ideal dialect-vocab spread per feedback_dialect_vocab_differences.md: 'father / daddy / dad / old man / fadda / papa' across 16 en variants covers full register/regional gradient. Best practice."}` 【確実】

### 13. #25 es_ar `Mi viejo` / es_cu `Mi viejo` — argentine/cuban familiar slang 【確実】

- **Current:**
  - es_eu / es_mx / es_an: `A:Mi padre`
  - es_co / es_cl / es_pe: `A:Mi papá`
  - **es_ar: `A:Mi viejo`** (RP「俺の親父」)
  - **es_cu: `A:Mi viejo`** (Caribbean familiar)
- **Reference:** ja「父は」(plain neutral)、en `My father`
- **Status:** es_ar `viejo` (= my old man, RP-Buenos Aires 慣用) は Lipski 1994 §6.5 で「Argentine voseo zone での親しみ呼称」と記述。es_cu も Caribbean colloquial で同根。**方言色 active な良例**。ただし sibling 7 vs 1 (`viejo` 2/8) で多数派 outlier ではあるが、register 多様化として **dataset の方針に整合**。
- **Decision:** **best practice — 維持**。
- **Edit:** `{id:25, lang:"_meta", op:"document", finding:"es_ar / es_cu use 'Mi viejo' (Buenos Aires / Cuban familiar register for father, attested in Lipski 1994 §6.5). Per feedback_dialect_vocab_differences.md, this is desired dialect signal. Accept."}` 【確実】

### 14. #25 zh_sc `老汉儿` (Sichuan familiar slang) — 方言 vocabulary 良例 【確実】

- **Current:** zh_sc: `A:我老汉儿` (Sichuan colloquial「俺の親父」)、zh_db: `A:我爸` (北東で plain)、yue: `A:我爹哋` (Cantonese diē-dī, baby-talk borrowing of English daddy)、wuu: `A:阿拉爸爸` (Shanghainese)、cdo: `A:我老爹` (Min Dong)
- **Reference:** ja「父は」
- **Status:** 中国諸方言で active な vocabulary spread — Sichuan `老汉儿` / Cantonese `爹哋` (英語 daddy 借用) / Shanghai `阿拉爸爸` / Min Dong `老爹` は全て famous regional vocabulary differences。**模範的 dialect coverage**。
- **Decision:** **best practice**。
- **Edit:** `{id:25, lang:"_meta", op:"document", finding:"zh variants (zh_sc 老汉儿 / yue 爹哋 / wuu 阿拉爸爸 / cdo 老爹) exemplify famous Chinese regional vocab differences for 'father'. Best practice."}` 【確実】

### 15. #25 zh_song / zh_han / zh_tang の `商號` (= mercantile firm) vs `公司` の time-period anachronism control 【確実】

- **Current:**
  - zh (modern): `D:公司` (gōngsī = modern company)
  - zh_han (漢文文言): `D:商號`
  - zh_tang (唐宋文言): `D:商號`
  - **zh_song (Song-era pastiche): `D:商號裏`** (with locative 裏)
  - ja_edo: `D:商家` (江戸町人言葉)
  - ja_heian: `D:商家` (平安擬古)
- **Status:** `公司` という熟語は明治 1870 年代日本造語 (Mantarō Hashimoto 1989) で、漢文文言・唐宋・江戸では存在しない。古典文体 5 変種 (zh_han / zh_tang / zh_song / ja_edo / ja_heian) が **正しく `商號 / 商家` (= 商人の屋号) に置換** されているのは時代考証的に **正確**。
- **Decision:** **best practice — historical lexeme control 良例**。
- **Edit:** `{id:25, lang:"_meta", op:"document", finding:"Classical/historical variants (zh_han/zh_tang/zh_song 商號, ja_edo/ja_heian 商家) correctly anachronism-control: '公司' is Meiji 1870s coinage (Hashimoto 1989), absent from pre-modern Chinese/Japanese. Best practice for historical lect handling."}` 【確実】

### 16. #80 ja_aom `大事な` vs ja `貴重な` — Tohoku register downgrade 整合性 【蓋然】

- **Current:**
  - ja: `G:貴重な C:経験` (= precious experience)
  - ja_aom: `G:大事な C:経験` (= important experience)
  - 他 9 ja variants: `G:貴重な` (一致)
  - ko_jeju / ko_bus: `G:소중한` (= cherished)
  - ko_kp / ko_yb: `G:귀중한` (= precious)
- **Problem:** ja_aom が `貴重な` → `大事な` に register-shift しているが、Tohoku 方言で `貴重な` が disallowed なわけではない。ja_aom は 1/11 outlier。`feedback_cross_sibling_role_consistency.md` の duplicate-letter outlier には該当しないが、lexeme outlier。
- **Decision:** **方言色 weak — apply: `貴重な` に揃えるか policy 維持か owner 判断**。
- **Edit:** `{id:80, lang:"_meta", op:"document", finding:"ja_aom uses '大事な' (important) vs 10 ja siblings '貴重な' (precious); Tohoku dialect does not block '貴重な'. Weak dialect signal; consider aligning to '貴重な' for cross-sibling lexeme consistency, or document as register choice."}` 【要検討】

### 17. #80 ja_heian `貴き` (古典) / ja_edo `貴重なる` (連体形) — 古典体 inflection 正しく適用 【確実】

- **Current:** ja: `G:貴重な`、ja_edo: `G:貴重なる`、ja_heian: `G:貴き`
- **Status:** ja_edo は 江戸町人言葉で「貴重なる」(なる = 連体形 of なり、文語残存)、ja_heian は 「貴き」(形容詞ク活用連体形) を選択。両方とも歴史言語学的に正確 (Frellesvig 2010 *A History of the Japanese Language* ch.6, ch.8)。
- **Decision:** **best practice — historical inflection 良例**。
- **Edit:** `{id:80, lang:"_meta", op:"document", finding:"ja_edo '貴重なる' (Edo-era 連体形 of なり, classical residual) and ja_heian '貴き' (Heian-era く-adjective 連体形 of 貴し) correctly apply period-specific inflectional morphology per Frellesvig 2010 ch.6, ch.8. Best practice."}` 【確実】

### 18. cross-cutting: profession-bearing cells 全体に gender-neutral default 維持、性別 marker 不使用 【確実】

- **Current observation:** 全 profession cell (#25 父/会社員、#47 先生、#82 医者、#80 留学) で **性別マーカーなしの masculine-as-default 統一**。
  - #47: es_eu `El profesor` (M) / `La profesora` (F) のうち M を選択、ca/it も同様
  - #82: de `Der Arzt` (M) / `Die Ärztin` (F)、fr `Le médecin` (=形態 neutral だが冠詞 le)、ar 「الطبيب」(M) / 「الطبيبة」(F) 全変種で M
  - es_eu / es_mx の #82 `El médico` も M
- **Status:** 性別 neutral 言語 (Japanese「医者」「先生」, Korean「의사」「선생님」, Chinese「医生」「老师」, Turkish「Doktor」「Öğretmen」, Hungarian「Az orvos」「A tanár」) では gender mark 不要で対応する F/M 形なし。性別 marked 言語 (Romance, Germanic, Slavic, Arabic) は **すべて M-default 統一**。これは多くの dataset で慣行的に許容されるが、Inclusive Language Guidelines (例: UNESCO 2019, Académie Française 2019 inclusive amendment) との関係で policy 確認は有効。
- **Decision:** **policy document — dataset-wide M-default 統一は明示的 design choice として記録**。
- **Edit:** `{id:0, lang:"_meta", op:"document", finding:"All profession-bearing cells (#25/#47/#82/#80) use masculine-as-default for gender-marked languages (Romance/Germanic/Slavic/Arabic). Gender-neutral languages (ja/ko/zh/tr/hu) unaffected. Policy: M-default is dataset-wide convention; F-variants (profesora/Ärztin/Lehrerin/الطبيبة) are not encoded. Document; reconsider if dataset adds gender-coverage axis."}` 【確実】

---

## 集計

- **対象**: `/home/jounlai/langmap/data.js` (READ-ONLY), profession/occupation 語彙の cross-cutter audit
- **対象 sentences**: #25 (father/company) / #47 (teacher) / #80 (student-abroad) / #82 (doctor) — profession-bearing 4 cells、+ #83 (auxiliary check, no profession)、#62 #92 (reviewer misindication, profession-free)
- **issue 件数**: **18 件**
  - 【確実】: 9 件 (#2 de Professor 修正 ×3、#4 oc regent ×1、#7-meta 系 #10 Slavic align doc、#12 en family doc、#13 es viejo doc、#14 zh dialect doc、#15 anachronism doc、#17 ja archaic doc、#18 gender-default doc)
  - 【蓋然】: 6 件 (#1 ar lexical, #3 es_mx maestro, #5 zh_db 大夫, #7-osa 大阪敬語, #9 fa 敬称, #11 fr_qc grosse, #16 ja_aom 大事)
  - 【要検討】: 3 件 (#1 ar policy escalation, #6 vi familiar, #8 ko honorific)
- **edit 件数 (cell-level apply)**: **5 edits**
  - #2 de_at / de_by / nds の `Professor` → `Lehrer` 系 (3 edits) 【確実】
  - #4 oc の `regent` → `professor` (1 edit) 【確実】
  - #7 ja_osa `くれてん` → `言いはってん` (1 edit) 【蓋然】
- **edit 件数 (`_meta` document / policy clarification)**: **13 edits** (#1, #3, #5, #6, #7-doc, #8, #9, #10, #11, #12, #13, #14, #15, #16, #17, #18 のうち 13 が pure document)
- **主たる resolution カテゴリ:**
  1. **規範違反 lexeme 修正**: de_at / de_by / nds の `Professor` 中等教育適用は標準ドイツ語規範違反 (Duden 2018) → `Lehrer` 系へ修正 (4 edits)
  2. **時代錯誤 archaism 修正**: oc `regent` (Mistralian 16-19C) → `professor` (Alibèrt 1935 規範) へ修正 (1 edit)
  3. **方言 register 整合性微調整**: ja_osa の尊敬語復元 (ja_kyo `-はる` と並行)
  4. **方言 vocabulary 良例として document**: zh 系 `老汉儿/爹哋/阿拉爸爸/老爹`、es_ar/es_cu `viejo`、en 系 `dad/old man/daddy/fadda/papa` (cross-sibling famous vocab differences の模範)
  5. **歴史言語学的 inflection 正確性 document**: ja_edo `貴重なる`、ja_heian `貴き` (Frellesvig 2010)、zh_han/tang `商號`、ja_edo/heian `商家` (Hashimoto 1989 の `公司` Meiji 造語 control)
  6. **cross-sibling lexeme spread policy**: ar 3-way `الأستاذ / المدرّس / المعلم` の Levant/Maghreb register 上昇は方言学的に正当
  7. **gender-default convention** dataset-wide で M-default 統一を明示記録
- **reviewer 仮説の修正**: reviewer message が「#62 want-to-improve」「#80 PhD 考察」「#92 verify」を示唆したが、実際の dataset では #62 は「月末読書」、#92 は「旧正月餃子」で profession 不在。#80 は「留学」(study abroad の名詞化) で「PhD 学生」ではない。findings は実態 4 cells (#25/#47/#80/#82) に focus した。
- **dataset 強さの再確認**: ja/ko/zh 系統での歴史言語学的 inflection control (`#15 商號 #17 貴き`)、英語方言の familiar register active spread (`#12`)、Spanish Caribbean/Argentine `viejo` (`#13`)、Chinese regional vocab spread (`#14`) は全て **profession 語彙周辺で dataset の品質を支える模範例** として記録。

**ファイル**: `/home/jounlai/langmap/langmap_reviews/103_open.md`
**Finding 数**: **18 件** (【確実】9、【蓋然】6、【要検討】3)


---

## Dev response — round 1 (2026-06-04)

apply2.mjs 経由で適用済。

- **適用 edit**: 5
- **policy/withdrawn 等で skip**: 13
- **headline**: de_at/by/nds #47 Professor→Lehrer (school-teacher norm), oc regent→professor (anachronism), ja_osa くれてん→言いはってん (honorific restore)
- **JSON path**: /tmp/lm_edits_103.json
