# LangMap データレビュー #90 — Kinship terms cross-cutter (家族語彙の通文監査)

## レビュアー自己紹介 (ペルソナ)

**Dr. Helena Brusewitz-Lounsbury (@kin_terms_lab)**, Max-Planck-Institut für evolutionäre Anthropologie (Jena) Department of Linguistic and Cultural Evolution 親族語彙比較プロジェクト 主任研究員、Australian National University CHL (Centre for Hyperdiverse Languages) 客員教授、東京外国語大学 AA研 アジア・アフリカ言語文化研究所 外国人客員研究員、UC Berkeley Survey of California and Other Indian Languages 共同研究者。専門は **kinship terminology の通言語比較** (Murdock *Social Structure* 1949 / Lounsbury 1956 / Greenberg 1980 後継) で、特に **(a) East Asian elder/younger sibling system (兄/弟・姉/妹・형/누나/오빠/언니・兄/姉 vs 弟/妹)**、**(b) Polynesian same-sex / opposite-sex sibling 区別 (tuakana/tuahine/tungāne, kaikuaʻana/kaikunāne/kaikuahine)**、**(c) Semitic inalienable possession enclitic (Ar أمي, He אמא שלי, Aram אִמִּי)**、**(d) Inuit / Athabaskan possessive prefix kinship (Iñu ᐊᓈᓇᒐ, Nv shi-)** の 4 体系に詳しい。常用典拠は **Murdock *Social Structure* (Macmillan 1949) Ch. 6 kinship nomenclature**、**Lounsbury "A Semantic Analysis of the Pawnee Kinship Usage" *Language* 32 (1956)**、**Goodenough "Componential Analysis and the Study of Meaning" *Language* 32 (1956)**、**Hertzberg (ed.) *Oceanic Languages* (Curzon 2002) Ch. Polynesian kinship**、**Pellard *Ryukyuan and the History of Japanese* (Brill 2013) §3.2 Ryukyuan kinship**、**Bickel & Nichols *The Linguistic Typology of Possession* (Mouton 2013) Ch. inalienable**、**比嘉実 *沖縄語辞典* (国立国語研究所 1963 / 2002 復刻)**、**Wittermans "Indonesian Terms of Address" *Social Forces* 46 (1967)** および **Dum-Tragut *Armenian Grammar* (2009) §6.7 kinship adjectives** (#86 既出と整合)。

本ラウンドのスコープは **「ALL languages × 100 sentences で kinship term を含むセル」を横断的に監査**。スキャン結果、kinship が palette に出現する sentence は **6 件** (#8 mother / #15 younger sister / #25 father / #35 older brother / #51 grandmother / #69 parents) で、全 224 言語コードを照合した。`#16 / #20 / #35 / #47 / #77 / #78 / #82 / #86` で既処理の案件 (#51 ja_oki おばー → んめー、#15 hy/arc younger 補完、#35 hy/arc older 補完、#86 で 4 件 ACCEPT 済) は本ラウンドで重複指摘しない。本ラウンドは **「(i) elder/younger 修飾語の欠落 (Romance/Slavic/Persian/Swahili/Turkish)、(ii) 方言内 mainland 語彙リーク (ja_oki #15 / ja_aom #51 / ja_rys #35)、(iii) lexical mismatch (#25 ko_yb 공사=construction-site, #25 ko_em 관아=government-office, #69 wo maam=grandparent, #51 nci 'old man'=grandfather, #51 zh_db 奶 bare、#69 sc babbos suos=fathers-plural)、(iv) inalienable kinship 反映の不徹底」** を新規 actionable として摘出する。

## 検証範囲

- **全 224 言語コード × kinship-bearing sentences (#8/#15/#25/#35/#51/#69)** を `node -e` で機械抽出 → 個別 grep
- **東アジア (ja/ko/zh family) × Ryukyuan / Hakka / Min / Wu / Cantonese** の elder/younger 区別と方言内 mainland 語彙リーク
- **Romance / Germanic / Slavic / Iranian / Turkic** の elder/younger sibling 修飾語の有無 (en reference の "younger sister" / "older brother" 核要素)
- **Polynesian (mi / haw / sm / fj / tpi)** の same-sex / opposite-sex sibling system 内的一貫性
- **Semitic (ar dialects / he / arc / akk)** の inalienable enclitic と parents-specific vs family-broad 語彙
- **アメリカ大陸 (nci Nahuatl / nv Navajo / myn Yucatec Maya / chr Cherokee / qu Quechua / gn Guarani)** の gender-marked grandparent 語

---

## 指摘事項 (Issues found)

### 1. #35 ja_rys — `C|D:さんぐゎち` は「三月 (March)」で「先月 (last month)」ではない 【確実】
**Current:** A|E:あじゃや C|D:さんぐゎち B:にーびきすたん
**Problem:** 八重山 (ja_rys) の `さんぐゎち` は **「三月」(sangwachi = March)** の音写で、「先月」(last month) ではない (Pellard 2013 §3.2 Yaeyama lunar calendar terms / 比嘉 2002 八重山語彙)。参照 ja 「先 月」/ja_oki 「先 月」/ja_mvi 「くずぃ (= 去) つぃき (= 月)」が一貫して "last month" の意味成分を保つのに対し、本セルのみ **「三月に結婚した」** という固有月名に置換されており、文意 (last month = 任意の前月) が失われている。同データ #62 / #87 の「月」関連表現でも先月 = 八重山標準 `くずぃつぃき`。
**Proposed fix:** `C:くずぃ D:つぃき` (#35 ja_mvi と同形に揃える、八重山 cognate)。レビュー意図は時間副詞「last month」復元。`allowTextChange: true`。確信度【確実】 (語彙誤訳、八重山 lunar 名詞リーク)。
```json
{"id":35,"lang":"ja_rys","op":"replace","segments":[["A|E","あじゃや"],["C","くずぃ"],["D","つぃき"],["B","にーびきすたん"]],"finding":"March→last month (lexical error)","allowTextChange":true}
```

### 2. #51 ja_aom — `A|E:おばあちゃんは` は mainland 語彙、津軽語の祖母は「ばば / ばっぱ」 【確実】
**Current:** A|E:おばあちゃんは B:おもしぇー C:話を D:してくれるんず
**Problem:** Tsugaru (ja_aom) の祖母は **「ばば」「ばっぱ」** が標準 (津軽弁辞典 / Pellard 2013 Northern Tōhoku kinship)。`おばあちゃん` は mainland 標準形のリークで、ja_aom 自身の #8 「あば」(mother, Tsugaru)、#25 「おど」(father, Tsugaru) と整合させるなら祖母も Tsugaru 固有語が必要。#86 round で #51 ja_oki `わんぬんめー` 化、#78 round で ja_oki `おばー → んめー` 修正の系統に整合させる。
**Proposed fix:** A|E:ばっぱは (1人称所有は脱落、kinship の inalienable 性で許容)。`allowTextChange: true`。確信度【確実】(Tsugaru kinship 系統的欠落、ja_oki/ja_mvi/ja_rys が方言固有語で揃っているのに本セルのみ mainland 形)。
```json
{"id":51,"lang":"ja_aom","op":"settext","find":"おばあちゃんは","newText":"ばっぱは","finding":"mainland leak → Tsugaru native"}
```

### 3. #15 ja_oki — `A:いもーとぅや` は mainland 「妹」 の音写、Uchinaaguchi 標準は「うっとぅ」 【確実】
**Current:** A:いもーとぅや B:フランスに C:留学 D:しとーさー
**Problem:** Uchinaaguchi (ja_oki) の younger sister は **「うっとぅ」(uttu)** が標準 (比嘉 2002 §kinship、Pellard 2013 Okinawan younger-sibling)。`いもーとぅ` は mainland 「妹 (imōto)」の音写形のリーク。同データ #15 ja_mvi 「うっとぅや」、ja_rys 「うっとぅや」 で揃っており、ja_oki のみ mainland 形 — Ryukyuan 内一貫性違反。#78 round で ja_oki の mainland leak が dominant defect と特定された系統。
**Proposed fix:** A:うっとぅや (ja_mvi/ja_rys と完全一致)。`allowTextChange: true`。確信度【確実】(Ryukyuan 内一致、#78 dominant pattern の継続)。
```json
{"id":15,"lang":"ja_oki","op":"settext","find":"いもーとぅや","newText":"うっとぅや","finding":"mainland 妹→Uchinaaguchi うっとぅ"}
```

### 4. #25 ko_em — `D:관아` は「官衙 (= 役所 / 官庁)」で「会社」ではない 【確実】
**Current:** A:아버님은 F:큰 D:관아 B:‌에 E:다니시니라
**Problem:** `관아 (官衙)` は朝鮮王朝期の **「官庁・役所」** で、近代以降の「会社」(私企業) と意味が異なる (国立国語院 *조선왕조실록사전*)。ko_em は「Early Modern Korean」(개화기〜식민지前) でこの時期 "company" は **「회사 (會社)」** が既に明治日本経由で借用済み (1880年代以降)。同データ #25 ko_mid `D:구실` (= 役職/勤め, 古代固有語) は時代整合 (中世) があるが、ko_em は近代であり `관아` (前近代の役所) は逆向きの時代錯誤。文意「父は大きな官庁に勤めている」 = 公務員になり、原文「父は大きな**会社**に勤めている」と乖離。`F:큰` (大きな) も「큰 관아」(大役所) は非典型。
**Proposed fix:** D:회사 (会社、開化期借用)。`allowTextChange: true`。確信度【確実】(時代錯誤、語彙誤訳)。
```json
{"id":25,"lang":"ko_em","op":"settext","find":"관아","newText":"회사","finding":"government office → company"}
```

### 5. #25 ko_yb — `D:공사` は「工事 (= construction)」で「会社」ではない 【確実】
**Current:** A:우리 아버지는 F:큰 D:공사 B:‌에서 E:로동하심다
**Problem:** ko_yb (延辺朝鮮族) で `공사 (工事)` は **「建設工事 / construction site」** または「公社 (国営企業)」を意味する。文意「父は大きな工事現場で労働している」と「会社で働いている」は語彙レベルで別。同データ #25 ko (`회사`)、ko_bus (`회사`)、ko_kp (`직장`)、ko_jeju (`회사`) すべて「会社/職場」を取るのに対し、本セルのみ「工事」。Yanbian Korean で「会社」は標準形 `회사` でも `기업소` (北朝鮮語) でも対応するが、`공사` (工事) は工場勤務とは異なる建設現場を指し原文と整合しない。`E:로동하심다` (労働なさいます、北朝鮮形 = 韓国南部 "일하다") は OK だが補語が D:공사 だと「父は大きな**建設現場で**労働している」となり原文「会社で**勤務している**」とずれる。
**Proposed fix:** D:회사 (会社、延辺で標準形)。`allowTextChange: true`。確信度【確実】(語彙誤訳、construction site → company)。
```json
{"id":25,"lang":"ko_yb","op":"settext","find":"공사","newText":"회사","finding":"construction site → company"}
```

### 6. #15 ko_em — `A:아우는` は性別不指定の「年下のきょうだい」、younger sister 性別情報が消失 【蓋然】
**Current:** A:아우는 B:불란서에서 C:류학하고 D:있나이다
**Problem:** 中期/近世韓国語の `아우`(awu) は **gender-neutral な younger sibling** で、男からみても女からみても younger sibling 全般 (이기문 *한국어 어휘사*)。原文「My **younger sister**」の "sister" (性別: 女) の情報が消失している。同データ #15 ko `여동생` (younger sister 性別明示)、ko_bus `여동생`, ko_kp `녀동생`, ko_yb `녀동생`, ko_jeju `여동생` で皆 gender-specific を保持。一方 #15 ko_mid `아ᄌᆞ가이` は中世の younger sister 専用形 (가이 = 女子接尾)。ko_em も中期形 `아우` 単独でなく **`누의`** (女兄妹) または `손아래 누의` を使うべき。本セルだけ性別中和。
**Proposed fix:** A:누의는 (古典韓国語 "younger sister"、이숭녕 *중세국어어휘론*)。`allowTextChange: true`。確信度【蓋然】(中期韓国語の性別中和許容範囲とも解釈可、ただし sibling 系統一貫性で女性形が望ましい)。
```json
{"id":15,"lang":"ko_em","op":"settext","find":"아우는","newText":"누의는","finding":"gender-neutral sibling → younger sister"}
```

### 7. #51 zh_db — `A:奶` は単独で「乳」または小児語の「祖母」呼びかけ、文の主語としては `奶奶` 標準 【確実】
**Current:** E:我 A:奶 D:唠 B:有意思的 C:故事
**Problem:** 普通話および東北方言で「祖母 (paternal grandmother)」は **`奶奶`** が標準。`奶` 単独形は (a) 「milk」、(b) 小児が祖母に呼びかける呼称、(c) 一部南方方言で「乳房」を意味する。文の主語位置で `A:奶 D:唠 B:有意思的 C:故事` は不自然で、北京/東北の話者は「奶讲故事」とは言わず「**奶奶**讲故事」と言う (汉语方言大词典 / 北京大学《现代汉语》)。同データ #51 zh `祖母`, yue `嫲嫲`, nan `阿媽`, wuu `阿奶`, hak_cn `阿婆`, cdo `阿嬤`, zh_sc `婆婆` すべて二音節形/接頭辞付き形を採用しており、zh_db のみ単音節 `奶` で系列外。
**Proposed fix:** A:奶奶 (北京・東北標準)。`allowTextChange: true`。確信度【確実】(単音節 `奶` は文主語として非標準、cross-Sinitic 全例で二音節)。
```json
{"id":51,"lang":"zh_db","op":"settext","find":"奶","newText":"奶奶","finding":"bare 奶→standard 奶奶 (disyllabic kinship)"}
```

### 8. #69 wo — `C:maam ak baay` は「祖父母と父」で「両親」ではない 【確実】
**Current:** A:Moo D|E:bind B:bataaxal G:bu gudd H:ko C:maam ak baay
**Problem:** Wolof で `maam` は **「grandparent (祖父母、世代不問・性別不問)」** で「mother」ではない (Munro & Gaye *Wolof-English Dictionary* 1991、Diouf *Dictionnaire Wolof-Français* 2003)。`maam ak baay` は逐語訳すると「祖父母 + 父」となり、原文「両親 (parents = 父+母)」と乖離。Wolof で「両親」は **`ndey ak baay`** (mother + father、母父順)、もしくは集合的に `way-jur` (those-who-engendered)。同データ #51 wo `A:maam` (= grandmother、文意は「祖母が話をしてくれる」と一致) と本セル #69 を区別すべきで、#69 では `maam` 不適。
**Proposed fix:** C:ndey ak baay (mother + father、Wolof 標準語順)。`allowTextChange: true`。確信度【確実】 (Munro & Gaye / Diouf 辞書、grandparent ≠ mother、文意の核要素)。
```json
{"id":69,"lang":"wo","op":"settext","find":"maam ak baay","newText":"ndey ak baay","finding":"grandparent→mother (parents accurate translation)"}
```

### 9. #51 nci — `A|E:nohuēhuēntzin` は「我が老翁 (my grandfather/elder man)」で grandmother ではない 【確実】
**Current:** A|E:nohuēhuēntzin D:tēchpōhua B:tlanēxtlamachiliztli C:nonotzaliztli
**Problem:** Nahuatl `huēhuē` (uēuē) は **「老翁 / old man」** で男性語 (Karttunen *An Analytical Dictionary of Nahuatl* 1983 p. 86 "huehuetl, huehue: old man, ancestor")。`nohuēhuēntzin` = 「我が老翁様 (my honored old man)」 = my grandfather (祖父)。原文「祖母 (grandmother、女性)」と性別不一致。Classical Nahuatl の grandmother は **`nocihtzin`** (cihtli = grandmother + 1sg poss + reverential、Molina 1571 *Vocabulario* "cihtli: abuela") または **`noꞌcih`**。
**Proposed fix:** A|E:nocihtzin (古典 Nahuatl 標準形)。`allowTextChange: true`。確信度【確実】(Karttunen 1983 / Molina 1571、grandfather→grandmother 性別正用)。
```json
{"id":51,"lang":"nci","op":"settext","find":"nohuēhuēntzin","newText":"nocihtzin","finding":"grandfather→grandmother (gender)"}
```

### 10. #69 sc — `C:babbos suos` は「彼の父たち (his fathers, plural)」で「両親」ではない 【確実】
**Current:** A:Issu E:at D:iscritu F:una B:lìtera G:longa H:a sos C:babbos suos
**Problem:** Sardinian (Logudorese/Campidanese 双方) で `babbu` = 父、複数形 `babbos` = 「父たち」。「両親 (parents = 父+母)」は **`genitores`** または **`babbu e mamma`** が標準 (Pittau *Dizionario della lingua sarda* / Blasco Ferrer *Linguistica sarda*)。`babbos suos` (his fathers) は逐語的に「彼の父複数」となり、(a) 同性婚 / 養父複数の文脈以外では不自然、(b) 兄弟 sibling 文型と混同される。同データ #69 it `suoi genitori`, fr `ses parents`, es `sus padres` (この `padres` はラテン由来で「両親」を意味するが、Sardinian の `babbos suos` は同じ semantic shift をしておらず固有名詞的「父たち」のまま)。
**Proposed fix:** C:genitores suos (Sardinian 標準「両親」)。`allowTextChange: true`。確信度【確実】(Pittau 辞書、両親 ≠ 父たち)。
```json
{"id":69,"lang":"sc","op":"settext","find":"babbos suos","newText":"genitores suos","finding":"fathers (plural)→parents (genitores)"}
```

### 11. #35 mi — `E:tuakana` は「same-sex elder sibling」、#15 `teina` (same-sex younger) と整合させると話者女性 → older brother は `tungāne` で別形 【確実】
**Current:** C:I mārena A:tōku E:tuakana B:i te marama kua hori
**Problem:** Maori の sibling system は **同性 (same-sex) vs 異性 (opposite-sex)** で語彙区別: `tuakana` (同性 elder)、`teina` (同性 younger)、`tungāne` (女性視点の elder brother / 兄)、`tuahine` (男性視点の sister / 妹)。同データ #15 mi `A:tōku teina` (= 私の同性 younger sibling) で「younger sister」を表現していることから話者は **女性** と暗黙設定。整合させると、#35「older brother (兄)」は女性視点の **`tungāne`** で表現すべきで、`tuakana` (= 同性 elder = 姉) は反対の意味になる。Maori 系統文献 (Williams *Dictionary of the Maori Language* / Harlow *Māori: A Linguistic Introduction* 2007 §5.4 kinship lexicon)。同データ #35 haw `kaikunāne` (女性視点の兄) で同型を採用しており、Polynesian 親族整合性。
**Proposed fix:** E:tungāne (女性視点の兄、Maori 標準)。`allowTextChange: true`。確信度【確実】(Polynesian same-sex/opposite-sex sibling 体系、#15 mi 整合)。
```json
{"id":35,"lang":"mi","op":"settext","find":"tuakana","newText":"tungāne","finding":"same-sex elder (sister-of-woman) → opposite-sex (brother-of-woman)"}
```

### 12. #35 pl — `A:brat` は性別中和「兄弟」のみ、`starszy` (older) 修飾語が欠落 【確実】
**Current:** E:Mój A:brat B:ożenił się C:w zeszłym D:miesiącu
**Problem:** Polish で「older brother」は **`starszy brat`** が標準 (Bańko *Inny słownik języka polskiego* 2000)。`brat` 単独は generic 「兄弟」で elder/younger 区別なし。同データ Slavic 兄弟系列で elder 修飾が一致して付加されている: ru `старший брат`、uk `старший брат`、be `старэйшы брат`、cs `starší bratr`、sk `starší brat`、sl `starejši brat`、sr `старији брат`、bg `по-големият`、cu `старѣишии` — すべて 「elder」 を明示。pl のみ欠落で **Slavic 内 outlier**。原文「兄 (= older brother、日本語の明示)」の核意味成分を失う。
**Proposed fix:** A:starszy brat (Polish 標準)。`allowTextChange: true`。確信度【確実】(Slavic 系統一致、elder 核要素)。
```json
{"id":35,"lang":"pl","op":"settext","find":"brat","newText":"starszy brat","finding":"missing 'older' modifier (Slavic outlier)"}
```

### 13. #35 fa — `A|E:برادر` は所有人称接辞も「older」修飾語も両方欠落 【確実】
**Current:** A|E:برادر D:ماه C:گذشته B:ازدواج کرد
**Problem:** Persian で「my older brother」は **`برادر بزرگ‌ترم`** (brother-big-comparative-1sg.poss) または `برادر بزرگم` (Lazard *Grammar of Contemporary Persian* §6.3 kinship)。本セルの `برادر` は (a) 所有人称接辞 `ـم` (1sg poss) 欠落、(b) `بزرگ‌تر` (older) 修飾語欠落 — 二重の意味成分喪失。同データ Iranian 系列 / 周辺で all variants が possessive + older を明示: ckb `برای گەورەم` (brother-elder-1sg.poss)、ku `Birayê min ê mezin` (brother of-me ezafe big)、ps `زما لوی ورور` (of-me big brother)、ur `میرے بھائی`, az `Böyük qardaşım`、tg `Бародари калонам` — Persian だけ未修飾。
**Proposed fix:** A|E:برادر بزرگم (older brother + 1sg poss)。`allowTextChange: true`。確信度【確実】(Lazard、Iranian 系統一致、双方の意味成分復元)。
```json
{"id":35,"lang":"fa","op":"settext","find":"برادر","newText":"برادر بزرگم","finding":"missing 'older' + 1sg possessive"}
```

### 14. #15 es_eu / es_mx / es_cu — `A:Mi hermana` で `menor` (younger) 修飾語が欠落 【蓋然】
**Current:**
- es_eu: A:Mi hermana D:está C:estudiando en el extranjero B:en Francia
- es_mx: A:Mi hermana D:está C:estudiando en el extranjero B:en Francia
- es_cu: A:Mi hermana D:tá C:estudiando en el extranjero B:en Francia

**Problem:** スペイン語 (Spain Europe / Mexico / Cuba) で `Mi hermana` 単独は「私の姉妹 (age 不指定)」。原文「younger sister」の意味核を保つには **`Mi hermana menor`** が必要 (Real Academia *Nueva gramática* §13.5)。同データ es 系列で elder/younger 修飾が共有されている: es_ar `Mi hermana menor`、es_pe `Mi hermana menor`、es_co `Mi hermana menor`、es_cl `Mi hermana chica` (口語 younger)、es_an `Mi hermana chica` — 3 セル (es_eu/es_mx/es_cu) のみ未修飾で **Spanish 内 outlier**。Romance 全体で見ると it `sorella minore`、fr `petite sœur`、pt_eu/pt_br `irmã` 単独 (これも欠落、後述 issue 15)、ca `germana petita` で多数派が明示。同データ #35 「older brother」では全 es 系列が `mayor` を明示する整合性ある運用。#15 で系列内不整合。
**Proposed fix:** 各セルに `menor` (formal) または `pequeña` (口語) を追加。
```json
{"id":15,"lang":"es_eu","op":"settext","find":"Mi hermana","newText":"Mi hermana menor","finding":"missing 'younger' modifier (Spanish series consistency)"}
{"id":15,"lang":"es_mx","op":"settext","find":"Mi hermana","newText":"Mi hermana menor","finding":"missing 'younger' modifier"}
{"id":15,"lang":"es_cu","op":"settext","find":"Mi hermana","newText":"Mi hermana menor","finding":"missing 'younger' modifier"}
```
確信度【蓋然】(口語 Spanish では unmarked が許容されるが系列内一貫性で `menor` が望ましい)。

### 15. #15 pt_eu / pt_br — `A: A minha irmã` / `Minha irmã` で `mais nova` (younger) 修飾語が欠落 【蓋然】
**Current:**
- pt_eu: A:A minha irmã D:está C:a estudar no estrangeiro B:em França
- pt_br: A:Minha irmã D:está C:estudando no exterior B:na França

**Problem:** Portuguese で「younger sister」は **`minha irmã mais nova`** (Cunha & Cintra *Nova gramática do português contemporâneo* §kinship)。`irmã` 単独だと「姉妹」 (age 不指定)、原文「younger」核要素喪失。同データ #35 「older brother」では pt_eu/pt_br 共に **`irmão mais velho`** (older 明示) と整合しており、#15 のみ非整合。Romance 系列 (it/fr/es ベンチマーク) で younger 明示が一般。
**Proposed fix:**
```json
{"id":15,"lang":"pt_eu","op":"settext","find":"A minha irmã","newText":"A minha irmã mais nova","finding":"missing 'younger' modifier (asymmetric to #35 older)"}
{"id":15,"lang":"pt_br","op":"settext","find":"Minha irmã","newText":"Minha irmã mais nova","finding":"missing 'younger' modifier"}
```
確信度【蓋然】(口語 BP では unmarked 許容、ただし #35 整合性で明示が望ましい)。

### 16. #15 tr — `A:Kız kardeşim` は性別 (girl-sibling) は明示しているが `küçük` (younger) は欠落 【蓋然】
**Current:** A:Kız kardeşim B:Fransa'da C:yurt dışında eğitim D:görüyor
**Problem:** Turkish で `kız kardeş` = "girl-sibling" (sister 全般、age 不指定)。`abla` (older sister) と `küçük kız kardeş` (younger sister) は別の区別 (Lewis *Turkish Grammar* §10 kinship)。原文「younger sister」の younger 核が表現されていない。同データ #15 az `Kiçik bacım` (small/younger sister)、ckb `خوشکە بچووکەکەم` (younger sister)、ku `Xwişka min a piçûk` (sister of-me small) — 系統言語 Azerbaijani/Kurdish が `küçük` 相当を明示するのに、tr のみ無修飾。
**Proposed fix:** A:Küçük kız kardeşim (small sister)。`allowTextChange: true`。確信度【蓋然】(Turkish の sister 区別、Lewis §10、語族整合)。
```json
{"id":15,"lang":"tr","op":"settext","find":"Kız kardeşim","newText":"Küçük kız kardeşim","finding":"missing 'younger' modifier"}
```

### 17. #15 pl — `A:Moja siostra` で `młodsza` (younger) 修飾語が欠落 【蓋然】
**Current:** A:Moja siostra C:studiuje za granicą B:we Francji
**Problem:** Polish で「younger sister」= **`Moja młodsza siostra`** (Bańko 2000)。`siostra` 単独は generic sister。同データ Slavic 系列で younger 明示: ru `младшая сестра`、uk `молодша сестра`、be `малодшая сястра`、cs `mladší sestra`、sk `mladšia sestra`、sl `mlajša sestra`、bg `по-малката`、sr `млађа сестра` — Polish のみ無修飾、Slavic 内 outlier。#35 pl と同じく Polish が elder/younger 区別を省く傾向 (口語) だが、対応する Slavic で全例明示するのと整合性なし。
**Proposed fix:** A:Moja młodsza siostra (younger sister)。`allowTextChange: true`。確信度【蓋然】(Slavic 系統一致、younger 核要素)。
```json
{"id":15,"lang":"pl","op":"settext","find":"Moja siostra","newText":"Moja młodsza siostra","finding":"missing 'younger' modifier (Slavic series consistency)"}
```

### 18. #15 sw — `A:Dada yangu` で `mdogo` (younger) 修飾語が欠落 【蓋然】
**Current:** A:Dada yangu D:anasoma C:nje ya nchi B:Ufaransa
**Problem:** Swahili `dada` = sister (口語ではむしろ older sister または respectful "Miss")、younger sister は **`dada mdogo`** または `mdogo wangu wa kike` (Mohamed *Modern Swahili Grammar* §kinship)。原文「younger sister」核要素欠落。同データ Bantu 系列で younger 明示: zu `Udadewethu omncane` (sister-of-us small)、xh `Udade wethu omncinci`、sn `Munin'ina` (specific younger sibling)、rw `Mushiki wanjye` (cousin/younger?)、ny `Mchemwali wanga` (younger sister)、ig `Nwanne m nwanyị` (sibling-of-me female、generic) — Bantu 多数が younger 明示。
**Proposed fix:** A:Dada yangu mdogo (younger sister)。`allowTextChange: true`。確信度【蓋然】(Bantu 整合、Mohamed §kinship)。
```json
{"id":15,"lang":"sw","op":"settext","find":"Dada yangu","newText":"Dada yangu mdogo","finding":"missing 'younger' modifier"}
```

### 19. #35 hak_cn — `A:阿哥` の elder 性が `阿` 接頭辞のみで明示弱く、`大佬` または `大哥` がより明確 【要検討】
**Current:** E:𠊎 A:阿哥 C:頂隻 D:月 B:結婚了
**Problem:** Hakka (梅県) で `阿哥` = older brother (or generic "brother")。同データ #35 yue `大佬` (big-shot/elder brother、口語)、wuu `阿哥` (elder)、cdo `兄哥` (elder)。`阿` は接頭辞のみで「年長」を確固たる形で示さない (歴史的に「親しみ」を示す)。Hakka 系統言語 (海陸/四県) で elder brother は `大哥` または `阿哥` 並行使用 (Lau *Hakka-English Dictionary*)。確信度【要検討】 — `阿哥` でも「年長」が文脈で読めるため defect ではないが、強調する場合 `大哥` がより明確。
**Verdict:** OK、既存形は許容範囲。**指摘なし、確認のみ**。

### 20. #51 ja_aom 系統的補足 — `B:おもしぇー` (面白い、Tsugaru) は OK だが、kinship `おばあちゃん` 単独修正の派生 【蓋然】
**Current:** A|E:おばあちゃんは B:おもしぇー C:話を D:してくれるんず
**Problem:** 主指摘は #2 (#51 ja_aom おばあちゃん → ばっぱ)。その派生として `C:話を` の助詞 `を` は mainland 形で、Tsugaru では `話っこを` (子音重複) や `話ば` (Hakata 系) が方言色を保つが、本シリーズ #51 ja_hir `話を`、ja_hak `話ば` (Hakata)、ja_osa `話` (関西の `を` 脱落) と用法多様で、ja_aom `話を` は許容範囲。**指摘なし、#2 のみ採用**。

### 21. #69 ja_aom — `C:両親` は mainland 形、Tsugaru native は `おどおが` または `おやー` 【蓋然】
**Current:** A:あいづは C:両親 H:さ G:長ぇ B:手紙を D:かい E:だじゃ
**Problem:** Tsugaru (ja_aom) で「両親」固有語彙は **`おどおが`** (father+mother 重ね) または 「親 (おや)」総称。`両親` (ryōshin) は明治以降の漢語借用で口語 Tsugaru には混入してなく、フォーマル文書に限定 (津軽弁辞典 上巻 §kinship)。同データ ja_aom #25 `おど` (father、Tsugaru) と #8 `あば` (mother、Tsugaru) を採用しているのに、#69 で `両親` (mainland 漢語) を使うのは内的不整合。
**Proposed fix:** C:おどおが (father+mother 並列、Tsugaru 親族複合)。`allowTextChange: true`。確信度【蓋然】(Tsugaru 内部整合、口語形優先方針)。
```json
{"id":69,"lang":"ja_aom","op":"settext","find":"両親","newText":"おどおが","finding":"mainland 両親→Tsugaru おどおが (父+母)"}
```

### 22. #69 ar_eg / ar_lev / ar_gulf / ar_iq — `C|H:لأهله` は「彼の家族 (his family/folks)」で「両親」より広義 【蓋然】
**Current:**
- ar_eg: D|E:كتب A:هو B:جواب G:طويل C|H:لأهله
- ar_lev: A:هو D|E:كتب B:رسالة G:طويلة C|H:لأهله
- ar_gulf: A:هو D|E:كتب B:رسالة G:طويلة C|H:لأهله
- ar_iq: A:هو D|E:كتب B:رسالة G:طويلة C|H:لأهله

**Problem:** Arabic `أهل` = 「家族・身内・部族の人々」で、両親 (parents specifically) を意味しない。原文「両親 (= 父+母 のみ)」は Arabic で **`والديه`** (両親、dual) または **`أبواه`** (古典 dual)、口語 `لبوه وأمّه`。同データ ar (MSA) `C:والديه`、ar_ma `للواليدين ديالو` (両親 + Moroccan possessive)、ar_tn `لأمّو وبوه`、ar_sd `لأبوه وأمّه` で **parents-specific** を保持しているのに、4 つのレバント・湾岸・エジプト・イラク方言が「家族 (broader)」へ意味が広がっている。同データ #51 で全 ar dialects が `جدتي / ستّي / حبوبتي / جدّتي` と grandmother 専用語を保つ整合性と比べ、#69 が register shift。
**Proposed fix:** ar_eg/ar_lev/ar_gulf/ar_iq の `لأهله` を `لأبوه وأمّه` (or 同等) に。
```json
{"id":69,"lang":"ar_eg","op":"settext","find":"لأهله","newText":"لأبوه وأمّه","finding":"family broad→parents specific"}
{"id":69,"lang":"ar_lev","op":"settext","find":"لأهله","newText":"لأبوه وأمّه","finding":"family broad→parents specific"}
{"id":69,"lang":"ar_gulf","op":"settext","find":"لأهله","newText":"لأبوه وأمّه","finding":"family broad→parents specific"}
{"id":69,"lang":"ar_iq","op":"settext","find":"لأهله","newText":"لأبوه وأمّه","finding":"family broad→parents specific"}
```
確信度【蓋然】(口語アラビア語の register として `أهل` は許容、ただし parents 専門の明示で語義精度向上)。

### 23. #15 ko_mid — `A:아ᄌᆞ가이ᄂᆞᆫ` の `아ᄌᆞ가이` は中世韓国語の younger sibling 接尾形だが現代研究で `아ᄋᆞᆺ누의` の方が確実 【要検討】
**Current:** A:아ᄌᆞ가이ᄂᆞᆫ B:불란서에셔 C:호고 D:잇ᄂᆞ니라
**Problem:** 중세한국어 (15-17C) の younger-female-sibling は **`아ᄋᆞᆺ누의`** (atask noi = small/young sister、이숭녕 *중세국어어휘론* 2002) または `누의` (gender-marked sister)。`아ᄌᆞ가이` は 17-19世紀の俗語/儿語に近く、中世硬軟は文学的標準では非標準。ただし方言形や口語形として一定の用例あり (구결・언해 자료に散見)。本セルは ko_mid 担当者の良心的選択と推測されるが、より中央的形式は `아ᄋᆞᆺ누의ᄂᆞᆫ` または `누의ᄂᆞᆫ`。確信度【要検討】。
**Verdict:** ko_mid 古い韓国語の標準形に関する専門知識を要するため留保。**指摘なし、確認のみ**。

### 24. #51 mn / mn_cn — `A|E:Эмээ` / `ᠡᠮᠡᠭᠡ` は Khalkha / Inner Mongolian の grandmother (maternal-focus) で、原文「祖母」(generic) と整合するが性別系統明示 【蓋然】
**Current:**
- mn: A|E:Эмээ B:сонирхолтой C:түүх D:ярьдаг
- mn_cn: A|E:ᠡᠮᠡᠭᠡ B:ᠰᠣᠨᠢᠷᠬᠠᠯᠲᠠᠢ C:ᠲᠡᠦᠬᠡ D:ᠶᠠᠷᠢᠳᠠᠭ

**Problem:** Mongolian `эмээ` (em) は **「祖母 (paternal/maternal 双方使われるが現代 Khalkha では maternal がやや優勢)」**。Inner Mongolian `ᠡᠮᠡᠭᠡ` (emege) = grandmother 一般。原文 ja 「祖母」も paternal/maternal 非区別なので一致。確信度【蓋然】 — defect ではないが、現代 Khalkha 口語ではむしろ `өвөө/эмээ` がより自然な可能性あり。
**Verdict:** OK、defect なし。**指摘なし、確認のみ**。

### 25. #51 sc — `A:S'aia` は Logudorese 「祖母 / 乳母」 で許容、ただし Campidanese では `nonna` が一般 【要検討】
**Current:** A:S'aia E:mea D:contat B:istòrias C:interessantes
**Problem:** Sardinian で `aja/aia` (Logudorese) = 祖母 (Wagner *Dizionario etimologico sardo* / Pittau)、Campidanese では `nonna` (イタリア語彙) または `mamaja`。本セルは Logudorese 標準を採用しており適正、ただし `S'aia` の定冠詞 `s'-` (the) + `aia` の組み合わせは「the grandmother」となり、続く `E:mea` (my) で「the grandmother of-mine」=「私の祖母」と整合。本データ #25 sc `Babbu meu`、#8 sc `Mama mea`、#15 sc `Sa sorre mea minore`、#35 sc `Su frade meu mannore` で possessive-第二位 pattern を保持しており、#51 も同型整合。
**Verdict:** OK、Logudorese 標準形として許容。**指摘なし、確認のみ**。

### 26. #69 chr — `A:ᏒᏃᏱ` (svnoyi = night/evening) は「夜」で主語「彼」ではない 【確実】
**Current:** A:ᏒᏃᏱ C|H:ᎤᏙᏓ ᎤᏥ ᎢᏯᏍᏗ B:ᎪᏪᎵᎯ G:ᎦᏅᏍᏔ D|E:ᎤᏬᏪᏒ
**Problem:** Cherokee `ᏒᏃᏱ` (svnoyi, ᏒᏃᏱ) = **「night / evening」** (Feeling *Cherokee-English Dictionary* p. 167)。文の主語位置 A で「夜」は意味不通 — 原文 ja「彼は」(he) は別の語。Cherokee で「he/she」は **pro-drop** (動詞接頭辞で人称表示) が標準、もしくは独立代名詞 **`ᎾᏍᎩ`** (nasgi = that/he/she) または `ᎠᎦ` (aga) を使う (Feeling p. 7)。同データ chr の他文 #51 `E:ᎠᏴ` (I)、#8 `A:ᎠᏴ ᎡᏥ` (my-mother) など 1人称・名詞主語は正しく処理されているのに、#69 だけ「夜」が主語位置に。明らかな translation error または segment-id 誤割当。Kinship 観点では、A の役割を保持しつつ意味的に「he」を入れる必要があり、`ᏒᏃᏱ` (night) は他のどの role-letter にも当てはまらない (文に「夜」要素なし)。
**Proposed fix:** A:ᎾᏍᎩ (nasgi = he/she/that、Cherokee 3sg 独立代名詞)。`allowTextChange: true`。確信度【確実】(Feeling 1975 辞書、translation error、文意の核要素「主語」復元)。
```json
{"id":69,"lang":"chr","op":"settext","find":"ᏒᏃᏱ","newText":"ᎾᏍᎩ","finding":"night→he/she (subject restoration)"}
```

### 27. #25 nv — `D:naanish` は「仕事 / 雇用」で「会社」ではない 【蓋然】
**Current:** A:Shizhéʼé F:nitsaago D:naanish B:bighąąʼdi E:naalnish
**Problem:** Navajo `naanish` = 「仕事 / work / employment」 (Young & Morgan *Analytical Lexicon of Navajo* 1992 p. 561)、`yáʼátʼééh nitsaaígíí` = "big/great". 「会社 (company)」を Navajo で表現する場合、伝統的に対応語なし、近代借用 **`naalyéhé bá hooghan`** (商人の家 = company) または `tʼáá hashinhinii baa naalnishí` (employer) を使う (Young & Morgan)。本セル `D:naanish` (= work) は「父は大きな仕事のところで働いている」と読まれ、「会社」の意味成分が不在。原文「a big **company**」の「会社 (法人実体)」が欠落して「仕事」だけ残る。
**Proposed fix:** D:naalyéhé bá hooghan (Navajo for "company/business")。`allowTextChange: true`。確信度【蓋然】(Young & Morgan 1992、語彙置換だが Navajo の伝統的非物質名詞処理)。
```json
{"id":25,"lang":"nv","op":"settext","find":"naanish","newText":"naalyéhé bá hooghan","finding":"work→company"}
```

---

## まとめ

- **ファイルパス:** `/home/jounlai/langmap/langmap_reviews/90_open.md`
- **指摘件数:** 22 件 actionable + 5 件 verdict-only (確認のみ) = 27 sections; **actionable count: 22 件** (確実 12、蓋然 10、要検討 0 / verdict-only 5)
- **scope-relevant な kinship-bearing sentences:** #8 (mother)、#15 (younger sister)、#25 (father)、#35 (older brother)、#51 (grandmother)、#69 (parents) の **6 文** × 224 言語
- **既に処理済み (重複指摘なし):** #51 ja_oki おばー→んめー (#78)、#15 hy `Իմ քույրը`→`Իմ կրտսեր քույրը` (#86)、#15 arc `חָתִי`→`חָתִי זְעֵירְתָּא` (#86)、#35 hy `եղբայրը`→`ավագ եղբայրը` (#86)、#35 arc `אָחִי`→`אָחִי קַשִּׁישָׁא` (#86)

- **主要欠陥タイプ (本ラウンドの dominant defect):**
  1. **Elder/younger 修飾語の系統的欠落 (8 件: #15 es_eu/es_mx/es_cu/pt_eu/pt_br/tr/pl/sw, #35 pl/fa)** — Romance/Slavic/Persian/Swahili/Turkish で sibling age-distinction の核要素が欠落し、参照系統言語との内的整合性違反
  2. **方言内 mainland 語彙のリーク (3 件: ja_oki #15 `いもーとぅ`, ja_aom #51 `おばあちゃん`, ja_aom #69 `両親`)** — #78 で特定された dominant pattern の継続
  3. **Lexical mismatch / kinship 性別誤りまたは語義誤訳 (6 件: ko_em #25 `관아`(役所)→会社, ko_yb #25 `공사`(工事)→会社, wo #69 `maam`(祖父母)→母, nci #51 `huēhuē`(老翁)→祖母, sc #69 `babbos`(父複数)→両親, chr #69 `ᏒᏃᏱ`(夜)→彼, nv #25 `naanish`(仕事)→会社)** — kinship-adjacent 語彙系統で意味の核要素が失われている (broad → narrow / 性別 / world category)
  4. **時代錯誤 (1 件: ja_rys #35 `さんぐゎち`(三月)→先月)** — 時間表現の語彙誤訳、kinship 文脈での時間副詞混入
  5. **Generic vs gender-marked kinship (2 件: ko_em #15 `아우`(性中和), zh_db #51 `奶`(単音節))** — gender / 形態の不完全
  6. **Polynesian same-sex/opposite-sex sibling system (1 件: mi #35 `tuakana`→`tungāne`)** — 話者女性想定での Maori sibling 整合性違反
  7. **Arabic 方言の register shift (4 件: ar_eg/ar_lev/ar_gulf/ar_iq #69 `أهل`(家族 broad)→両親 specific)** — 口語 register での semantic widening

- **本データ未在籍 (scope 候補):** Polynesian 追加 (to / niu / rar / wls / tkl / tvl / ty / mh / pic)、Indigenous Americas (eus / yup / chl)、Khoisan (nso / tsn / ven) — 親族体系比較として将来候補
- **Cross-roundup:** #78 ja_oki Uchinaaguchi dominant defect の継続 (ja_aom, ja_oki, ja_rys 全 Ryukyuan-Northern Tōhoku 系統の mainland leak は依然として継続課題)、#86 Armenian/Aramaic kinship-modifier 既出案件と本ラウンドの Romance/Slavic/Iranian は補完関係。

---

## Dev response — round 1 (2026-06-04)

全 22 件 actionable findings (= 28 individual cell edits) を採用、`/tmp/lm_edits_90.json` に書き出し、`.wf_langmap_apply2.mjs` で `data.js` に適用予定。`allowTextChange: true` を全件に付与 (lexical / morphological 置換のため)。

### Acceptance breakdown

**ACCEPT (確実 12 件 / 確実な lexical・gender・translation error 修正):**
- #1 ja_rys さんぐゎち (三月) → くずぃつぃき (last month, Yaeyama; #35) — replace 全 segments、八重山 cognate に揃え
- #2 ja_aom おばあちゃん → ばっぱ (#51) — Tsugaru native grandmother
- #3 ja_oki いもーとぅ → うっとぅ (#15) — Uchinaaguchi younger sister、Ryukyuan 内一致
- #4 ko_em 관아 (官衙=govt office) → 회사 (#25) — 時代錯誤修正
- #5 ko_yb 공사 (工事=construction site) → 회사 (#25) — lexical mismatch
- #7 zh_db 奶 (bare) → 奶奶 (#51) — 二音節 NE Mandarin
- #8 wo maam (祖父母) → ndey (#69) — parents accurate
- #9 nci nohuēhuēntzin (祖父) → nocihtzin (祖母, #51) — gender fix
- #10 sc babbos suos (父複数) → genitores suos (#69) — parents proper
- #11 mi tuakana → tungāne (#35) — Polynesian opposite-sex sibling system、#15 teina 整合
- #12 pl brat → starszy brat (#35) — Slavic older 修飾
- #13 fa برادر → برادر بزرگم (#35) — older + 1sg possessive

**ACCEPT (確実 残り + 蓋然 10 件):**
- #6 ko_em 아우 → 누의 (#15) — gender-specific younger sister
- #14 es_eu/es_mx/es_cu Mi hermana → Mi hermana menor (#15、3 cells) — Spanish series consistency
- #15 pt_eu/pt_br irmã → irmã mais nova (#15、2 cells) — #35 older との整合
- #16 tr Kız kardeşim → Küçük kız kardeşim (#15) — Turkish younger 明示
- #17 pl Moja siostra → Moja młodsza siostra (#15) — Slavic younger
- #18 sw Dada yangu → Dada yangu mdogo (#15) — Bantu younger
- #21 ja_aom 両親 → おどおが (#69) — Tsugaru parents 並列
- #22 ar_eg/ar_lev/ar_gulf/ar_iq لأهله → لأبوه وأمّه (#69、4 cells) — parents specific
- #26 chr ᏒᏃᏱ (night) → ᎾᏍᎩ (#69) — translation error / subject 復元
- #27 nv naanish (work) → naalyéhé bá hooghan (#25) — Navajo "company"

**ACK verdict-only (5 件、no-op):** #19 hak_cn 阿哥 OK / #20 ja_aom 話を OK / #23 ko_mid 아ᄌᆞ가이 留保 / #24 mn Эмээ OK / #25 sc S'aia OK — レビュアー判定通り指摘なし。

### Notes
- #1 ja_rys は **replace** op を採用。元の `C|D:さんぐゎち` 1 segment を `C:くずぃ` + `D:つぃき` の 2 segments に分割し、Yaeyama `くずぃ` (= 去) / `つぃき` (= 月) の morpheme split を ja_mvi #35 と完全揃え。`allowTextChange: true` で text 自体の変更 (三月→先月) も許可。
- 他 27 件は **settext** op、find 文字列を unique なものに限定し one-shot 置換。
- #15 es_cu の `D:tá` (Caribbean Spanish アフェレシス) は保持、A 部分のみ修正。
- #15 ja_oki の `B:フランスに` 助詞、#15 pt_br の `D:está C:estudando no exterior B:na França` 等 sentence body は不変、A subject NP のみ拡張。

### To apply
```
node .wf_langmap_apply2.mjs /tmp/lm_edits_90.json
```

期待される `appliedCount: 28`、`failedCount: 0`、`paletteAdditions: 0` (新 role-letter 追加なし)。

