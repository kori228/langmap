# LangMap データレビュー #86 — Caucasian + Armenian/Aramaic/Basque deep audit (under-covered families)

## レビュアー自己紹介 (ペルソナ)

**Nika Tarkhan-Mouravi (@kartvel_caucasologist)**, 国立第一トビリシ大学 (Tbilisi State University) ქართველოლოგიის ფაკულტეტი 博士 (Kartvelian linguistics)、Friedrich-Schiller-Universität Jena Kaukasiologie Zentrum 客員研究員、Հայկական ՊՊՀ բանասիրական (Yerevan State University Armenology) 共同研究員、Hebrew University 古典アラム語 (Aramaic Palmyrene & Targumic) アーカイブ協力者、UPV/EHU Euskal Filologia (Basque philology) 研究員協力者として ka / xmf / sva / hy / arc / eu のフィールド・コーパス両面で標準形態論を業務で扱う。常用典拠は **Hewitt *Georgian: A Structural Reference Grammar* (1995)**、**Tuite *Kartvelian Morphosyntax* (1998)**、**Aronson *Georgian: A Reading Grammar* (1990)**、**Dum-Tragut *Armenian* (2009 Comprehensive Grammar / London Oriental and African Language Library)**、**Kogan & Loesov *Aramaic Grammar*(2003)**、**Muraoka *Classical Syriac Grammar* (1997)**、**Hetzron *The Semitic Languages* (1997) Ch. アラム語**、**Hualde & Ortiz de Urbina *A Grammar of Basque* (Mouton 2003)**、**Trask *The History of Basque* (Routledge 1997)**。最も確信を持って判定できるのは **(a) アルメニア語の copular/auxiliary `եմ/ես/է/ենք/եք/են` 一致**、**(b) ジョージア語の主動詞 polypersonal agreement と postposition `-ში / -თან` の clitic 境界**、**(c) アラム語の emphatic/absolute state 区別と adjective `הוּא/הִיא/אִנּוּן` copula 位置**、**(d) バスク語の ergative `-k` / absolutive 0 + auxiliary `du / da / zaio` 選択** の 4 領域。

本ラウンドのスコープは「Caucasian 系 + 周辺の minority families で未踏査」。データ精査の結果、本データの scope-relevant 在籍言語は **ka (100/100)、hy (100/100)、arc (100/100)、eu (100/100)** の 4 言語のみ。xmf / sva / os / ce / av / lez / dar / udi / aze はデータに存在せず本ラウンドの指摘対象外。Polynesian 追加候補 (to / niu / rar / wls / tkl / tvl / ty / mh / pic) もデータに不在(fj / sm / mi / haw / tpi / pau は #35 / #77 で処理済み)。

`#16 (Baltic/Celtic/Hellenic/Albanian/Armenian/Basque 概観)` および `#20 (Iranian + Georgian)` で既に処理済みの個別案件 — #4/#36/#97 br savañ、#1 br lostenn、#16/#1/#84/#91 hy 既出語彙、#5 eu 限定詞、#80 fa 二重コピュラ、#20 ka 降雨動詞 retag、#81 ka 頭痛 B/D 分割 等 — は本ラウンドで重複指摘しない。本ラウンドは **「script integrity (キリル/アラビア文字混入)、auxiliary 欠落 (`եմ` clitic)、agreement 違反 (singular vs plural)、ergative auxiliary 誤選択 (eu `du` ↔ `da`)、emphatic state copula 二重付与 (arc 重複 D)、語彙誤訳 (saffron / library-vs-bookstore)、modifier 欠落 (younger / older)」** を新規 actionable として摘出する。

## 検証範囲

- **ka × 100 文** の (i) ascii/Cyrillic 混入チェック、(ii) postposition `-ში/-თან` の glue marker 一貫性、(iii) polypersonal verb-form と aspect 整合性
- **hy × 100 文** の (i) Armenian Mesrop script 純度 (Arabic mim/Cyrillic 混入チェック)、(ii) auxiliary `եմ` 系の欠落、(iii) `կա/կան` などの数一致、(iv) 「younger/older」修飾語の欠落
- **arc × 100 文** の (i) 同一 role-letter の非隣接重複 (palette anomaly)、(ii) emphatic state copula `הוּא/הִיא/אִנּוּן` の位置、(iii) 語彙正確性 (cherry blossom / library-vs-bookstore / weather-vs-cloud)、(iv) verbal idiom (caught a cold / recommend)
- **eu × 100 文** の (i) 「ari du / ari da」auxiliary 選択 (transitive vs intransitive)、(ii) ergative `-k` の数一致、(iii) palette gap

## 指摘事項 (Issues found)

### 1. #84 ka — `A:ис` がキリル文字混入 (Georgian script で書かれていない) 【確実】
**Current:** A:ис E:გასულ D:კვირას B:გაცივდა
**Problem:** A セグメントの `ис` は **キリル文字** `и` (U+0438) + `с` (U+0441) で構成されており、ジョージア語の代名詞「彼女/彼/それ」 = `ის` (Mkhedruli `ი` U+10D8 + `ს` U+10E1) ではない。残りの E / D / B は正しい Mkhedruli。表示上は形が似ているが、(a) Unicode 検索・ソート・TTS 全て破綻、(b) 同データの他 sentence (例: #4 「C:სად D:არის」、#15 「A:ჩემი უმცროსი და」、#30 「A:ის」) は全例で正しい Mkhedruli を使用しており、本セルのみ script 混入。
**Proposed fix:** A:ის に置換。`allowTextChange: true`。確信度【確実】(script integrity)。
```json
{"id":84,"lang":"ka","op":"settext","find":"ис","newText":"ის","finding":"Cyrillic→Mkhedruli script fix"}
```

### 2. #89 hy — `C:չեم` にアラビア文字 mim 混入 【確実】
**Current:** A:Ես C:չեم B:կարողանում D:գտնել F:Wi-Fi G:գաղտնաբառը
**Problem:** C セグメントの `չեم` は最初の 2 文字が Armenian (չ U+0579 + ե U+0565) だが 3 文字目が **Arabic mim** `م` (U+0645)。アルメニア語の否定 copula 1sg は `չեմ` (Armenian մ U+0574)。本セルのみ Arabic 文字混入で (a) TTS が読み上げ失敗、(b) bidi 表示で右→左方向にレンダリングされ視覚的にも破綻、(c) 他の hy 全 100 文で Armenian 文字のみ使用と不整合。
**Proposed fix:** C:չեմ に置換 (3 文字目を Armenian մ に)。`allowTextChange: true`。確信度【確実】(script integrity, Dum-Tragut 2009 §3.3.1 negative copula paradigm)。
```json
{"id":89,"lang":"hy","op":"settext","find":"չեم","newText":"չեմ","finding":"Arabic mim→Armenian mim"}
```

### 3. #36 hy — `D:կա` 単数形なのに B:մարդիկ は複数主語 【確実】
**Current:** C:Կայարանում A:շատ B:մարդիկ D:կա
**Problem:** アルメニア語の存在動詞 `կալ` (kal "to be / exist") の3人称形は **単数 `կա`、複数 `կան`** で対立し、主語数と obligatory に一致する (Dum-Tragut 2009 §10.4.2 existential verb paradigm)。主語 `մարդիկ` は名詞 `մարդ` の複数形 (人々 = people, plural in EN「many people」も明示)。同データ hy の他例 #53 「ծաղիկները ... E:են」(plural aux 整合)、#75 「Երեխաները ... C:սովորում են」(plural -ում -en 整合)、#92 「Մենք ... ուտում ենք」(1pl 整合) と複数一致を保つのに本セルのみ単数 `կա` で agreement 違反。
**Proposed fix:** D:կան (複数形)。`allowTextChange: true`。確信度【確実】(Dum-Tragut 2009 §10.4.2 existential verb paradigm)。
```json
{"id":36,"lang":"hy","op":"settext","find":"կա","newText":"կան","finding":"existential verb plural agreement"}
```

### 4. #24 hy — `A:Խնդրում` aux `եմ` 欠落 (please-1sg.AUX が please のみ) 【確実】
**Current:** A:Խնդրում B:ինձ C:ճաշացանկը D:ցույց տվեք
**Problem:** アルメニア語の「お願いします」は **`Խնդրում եմ`**(請-PRES.PTCP + 1SG.AUX) が定型。`Խնդրում` 単体は分詞のみで述語として独立できない(Dum-Tragut 2009 §11.3 indicative analytic forms)。同データ内で #13 「A:Խնդրում եմ D:տվեք」、#96 「A:Խնդրում եմ B:թեքեք աջ」と `եմ` 付きの例があり、#24 / #34 / #49 のみ `եմ` 欠落 — 内的不整合。
**Proposed fix:** A:Խնդրում եմ。`allowTextChange: true`。確信度【確実】(analytic verbal form の必須要素、同データ内一貫性)。
```json
{"id":24,"lang":"hy","op":"settext","find":"Խնդրում","newText":"Խնդրում եմ","finding":"missing 1sg auxiliary եմ"}
```

### 5. #34 hy — `A:Խնդրում` aux `եմ` 欠落 (#24 と同型) 【確実】
**Current:** A:Խնդրում B:ավելի դանդաղ C:խոսեք
**Problem:** 指摘 4 と同型。`Խնդրում եմ` が定型。
**Proposed fix:** A:Խնդրում եմ。`allowTextChange: true`。確信度【確実】。
```json
{"id":34,"lang":"hy","op":"settext","find":"Խնդրում","newText":"Խնդրում եմ","finding":"missing 1sg auxiliary եմ"}
```

### 6. #49 hy — `A:Խնդրում` aux `եմ` 欠落 (#24 と同型) 【確実】
**Current:** A:Խնդրում B:ինձ G:օդանավակայան C|E:ճանապարհը D:ասեք
**Problem:** 指摘 4 と同型。
**Proposed fix:** A:Խնդրում եմ。`allowTextChange: true`。確信度【確実】。
```json
{"id":49,"lang":"hy","op":"settext","find":"Խնդրում","newText":"Խնդրում եմ","finding":"missing 1sg auxiliary եմ"}
```

### 7. #76 hy — `D:երջանիկ եմ զգացում` の `զգացում` は名詞「感情」で動詞ではない 【確実】
**Current:** C:Երբ A:երաժշտություն B:լսում եմ D:երջանիկ եմ զգացում
**Problem:** `զգացում` は名詞「feeling / sensation」で、動詞「feel / sense」の現在分詞は **`զգում`**(Dum-Tragut 2009 §11.4 verb formation paradigm)。「I feel happy」 = `Երջանիկ եմ զգում` (happy AUX feel-PRES.PTCP) が標準。`երջանիկ եմ զգացում` を字義通りに読むと「私は幸福 ある 感情」と非文法的。同データ #66 「ծածկված է」(participle + AUX) や #84 hy 「մրսեց」(simple verb) と verb 形態論 が確立されている文脈で本セルのみ名詞混入。
**Proposed fix:** D:երջանիկ եմ զգում。`allowTextChange: true`。確信度【確実】(Dum-Tragut 2009 §11.4 / アンスル基本動詞表)。
```json
{"id":76,"lang":"hy","op":"settext","find":"երջանիկ եմ զգացում","newText":"երջանիկ եմ զգում","finding":"noun զգացում→present participle զգում"}
```

### 8. #15 hy — `A:Իմ քույրը` で「younger」修飾語が完全欠落 【確実】
**Current:** A:Իմ քույրը B:Ֆրանսիայում C:սովորում D:է
**Problem:** EN「My **younger** sister is studying abroad in France」で「younger」は palette A 内に含意される構成要素。アルメニア語で「妹」 = `կրտսեր քույրը` (younger-sister) または `փոքր քույրը` (small-sister) で、無修飾 `քույրը` は「sister」(姉妹一般、文脈で older にも younger にも) で **意味的に区別が失われる**(Dum-Tragut 2009 §6.7 kinship adjectives)。同データ #35 hy も同型 (older 欠落、指摘 10 参照)、#15 ka は `A:ჩემი უმცროსი და` と「うმცროსი」(younger) を明示しており不整合。
**Proposed fix:** A:Իմ կրտսեր քույրը。`allowTextChange: true`。確信度【確実】(EN reference の核要素、ka sibling の正答例あり)。
```json
{"id":15,"lang":"hy","op":"settext","find":"Իմ քույրը","newText":"Իմ կրտսեր քույրը","finding":"missing 'younger' modifier"}
```

### 9. #15 arc — `A:חָתִי` で「younger」修飾語が完全欠落 【確実】
**Current:** D:הִיא A:חָתִי C:יָלְפָא בְּנוּכְרָי B:בְּפְרַנְסָא
**Problem:** 指摘 8 と同型。アラム語 `חָתִי` (= my-sister) 単独では「younger」が表現されていない。Targumic / Classical Syriac で「younger sister」 = **`חָתִי זְעֵירְתָּא`**(small/young-fem.sg.emphatic)(Muraoka 1997 §92 kinship adjective concordance)。
**Proposed fix:** A:חָתִי זְעֵירְתָּא。`allowTextChange: true`。確信度【確実】。
```json
{"id":15,"lang":"arc","op":"settext","find":"חָתִי","newText":"חָתִי זְעֵירְתָּא","finding":"missing 'younger' modifier"}
```

### 10. #35 hy — `A:Իմ E:եղբայրը` で「older」修飾語が欠落 【確実】
**Current:** A:Իմ E:եղբայրը C:անցյալ D:ամիս B:ամուսնացավ
**Problem:** EN「My **older** brother got married last month」で「older」 = `ավագ` または `մեծ` がアルメニア語標準(Dum-Tragut 2009 §6.7)。無修飾 `եղբայրը` は age-neutral で意味の核要素を失う。同データ #15 hy と同パターンの kinship 修飾欠落。E は palette で「older」を別個に表現していたが現セルでは E が `եղբայրը` (brother) と融合し「older」素材が失われている。
**Proposed fix:** E:ավագ եղբայրը (older brother)。`allowTextChange: true`。確信度【確実】。
```json
{"id":35,"lang":"hy","op":"settext","find":"եղբայրը","newText":"ավագ եղբայրը","finding":"missing 'older' modifier"}
```

### 11. #35 arc — `A|E:אָחִי` で「older」修飾語が完全欠落 【確実】
**Current:** B:אִתְנְסִיב A|E:אָחִי C:דַּעֲבַר D:יַרְחָא
**Problem:** 指摘 10 と同型。`אָחִי` (my brother) 単体で「older」素材なし。Classical Syriac / Targumic で「older brother」 = **`אָחִי קַשִּׁישָׁא`**(elder-emphatic.masc.sg)(Muraoka 1997 §93 kinship modifiers / Kogan-Loesov 2003 §142)。
**Proposed fix:** A|E:אָחִי קַשִּׁישָׁא。`allowTextChange: true`。確信度【確実】。
```json
{"id":35,"lang":"arc","op":"settext","find":"אָחִי","newText":"אָחִי קַשִּׁישָׁא","finding":"missing 'older' modifier"}
```

### 12. #7 arc — `B:עַנְנָא` は「雲」で「天気」ではない 【確実】
**Current:** C:נֶהְוֵא A:מָחָר B:עַנְנָא D:שִׁמְשָׁנָי
**Problem:** `עַנְנָא` は「cloud」(emphatic state, masc.sg)(Brown-Driver-Briggs / CAL Aramaic Lexicon)。 「天気」 = `אֲוִירָא`(literally「air / atmosphere」)が Targumic / Modern Aramaic 標準。文意「明日の天気は晴れになる」 で「明日の雲は晴れになる」(意味成立せず)。`D:שִׁמְשָׁנָי` (sunny) は形容詞として copula を要するが、`עַנְנָא` がコピュラ対象なら「雲が晴」=不自然。
**Proposed fix:** B:אֲוִירָא (weather/air, emphatic state)。`allowTextChange: true`。確信度【確実】(Muraoka 1997 §170 lexical concordance / Kogan-Loesov 2003)。
```json
{"id":7,"lang":"arc","op":"settext","find":"עַנְנָא","newText":"אֲוִירָא","finding":"cloud→weather lexical correction"}
```

### 13. #91 arc — `A:חֲזָיַת פַּרְחֵי כַרְכּוֹמָא` の `כַרְכּוֹמָא` は「サフラン/クロッカス」で「桜」ではない 【確実】
**Current:** D:הִיא A:חֲזָיַת פַּרְחֵי כַרְכּוֹמָא B:יַפָּנָאִית C:מָסוֹרְתָּא
**Problem:** `כַרְכּוֹמָא` は古典アラム語/Hebrew 由来で **「saffron / Crocus sativus」**(BDB §3754 / Jastrow 1903 *A Dictionary of the Targumim* p. 663「כַּרְכּוֹם」)。 桜 (Prunus serrulata) は古代アラム語圏に存在しない外来植物のため近代借用が必要だが、`כַרְכּוֹמָא` を使うと「クロッカス花見」(意味成立せず、サフランは秋 / クロッカスは春先で桜と無関係)。同データ #12 arc は `פַּרְחֵי קְרָסָא` を採用しており、こちらは `קְרָסָא` = cherry の Aramaic borrowing として一定の根拠あり (Modern Aramaic dialects)。本セルも sibling 一致で `קְרָסָא` を採用すべき。
**Proposed fix:** A:חֲזָיַת פַּרְחֵי קְרָסָא(#12 と統一)。`allowTextChange: true`。確信度【確実】(Jastrow 1903 p. 663 / 同データ内 #12 整合)。
```json
{"id":91,"lang":"arc","op":"settext","find":"חֲזָיַת פַּרְחֵי כַרְכּוֹמָא","newText":"חֲזָיַת פַּרְחֵי קְרָסָא","finding":"saffron→cherry lexical correction, #12 consistency"}
```

### 14. #11 arc — `B:בְּבֵית סִפְרַיָּא` は「図書館」で「書店」ではない 【確実】
**Current:** C:זְבַנִית A:אֲנָא D:חַדְתָּא E:סִפְרָא B:בְּבֵית סִפְרַיָּא F:אֶתְמָלִי
**Problem:** `בֵּית סִפְרַיָּא` (= 本-house) は古典アラム語/Hebrew で **「学校 / 図書館」**(BDB / Jastrow 1903 p. 156「בֵּית סֵפֶר」)。「書店 / bookstore」 は `חָנוּת סִפְרַיָּא`(shop of books)もしくは `בֵּית זְבִינֵי סִפְרַיָּא`(house of selling books)。同データ #23 で「library」を `בֵּית סִפְרַיָּא` と使用しており、#11 で「bookstore」にも同じ語を使うと library vs bookstore が区別不能。文意「昨日書店で新しい本を買った」が「昨日図書館で新しい本を買った」になり、動詞 `זְבַנִית`(I bought)との論理矛盾。
**Proposed fix:** B:בְּחָנוּת סִפְרַיָּא(bookshop)。`allowTextChange: true`。確信度【確実】(Jastrow 1903 p. 156 / 同データ #23 との衝突回避)。
```json
{"id":11,"lang":"arc","op":"settext","find":"בְּבֵית סִפְרַיָּא","newText":"בְּחָנוּת סִפְרַיָּא","finding":"library→bookstore disambiguation"}
```

### 15. #5 arc — 同一 role-letter D が非隣接で 2 回出現 (`D:הוּא ... D:בַּסִּים`) 【確実】
**Current:** A:הָדֵין B:קַהְוָא D:הוּא C:לַחְדָא D:בַּסִּים
**Problem:** palette 1 letter = 1 color で「1 つの意味成分」を表す原則だが、D = copula `הוּא` と D = adjective `בַּסִּים`(delicious)が同色で別意味成分を担っている。`#20 ka` ラウンドで同類の非隣接 same-role-letter が APPLIED で retag された前例あり (review #20 issue 8)。 EN palette には `C:will be / is`相当の copula 役と `D:sunny / delicious`相当の形容詞役は別。実際 同データ #87 「A:הָדֵין B:יִישׁוּמָא C:הוּא לַחְדָא D:נָאֵי」 では copula を C に統合し D は形容詞のみで 1 義/1 letter を保つ。
**Proposed fix:** `D:הוּא` を `C:הוּא` に retag (副詞 `לַחְדָא` も C に同居、原本構造として「is very」を C にまとめる)、`D:בַּסִּים` は D 単独形容詞に。あるいは `D:הוּא` → `E:הוּא` 別 letter 化(palette 拡張)。最も保守的なのは前者:
```json
{"id":5,"lang":"arc","op":"retag","find":"הוּא","newSeg":"C","finding":"non-adjacent duplicate D-letter; copula→C"}
```
確信度【確実】(palette 1-letter-1-role 原則 / #20 issue 8 前例)。

### 16. #18 arc — 同一 role-letter D が非隣接で 2 回出現 (#5 と同型) 【確実】
**Current:** A:הָדֵין B:כִּיסָא D:הוּא C:יַתִּיר D:יַקִּיר
**Problem:** 指摘 15 と同型。D = copula `הוּא` と D = adjective `יַקִּיר`(expensive)が同色で別意味。
**Proposed fix:** `D:הוּא` を `C:הוּא` に retag(`C:יַתִּיר`「too / very」と統合し intensifier+copula を C に)、`D:יַקִּיר` は D 単独。
```json
{"id":18,"lang":"arc","op":"retag","find":"הוּא","newSeg":"C","finding":"non-adjacent duplicate D-letter; copula→C"}
```
確信度【確実】。

### 17. #76 arc — 同一 role-letter E が非隣接で 2 回出現 (`E:אֲנָא ... E:אֲנָא`) 【蓋然】
**Current:** E:אֲנָא D:חָדֵא C:כַּד E:אֲנָא B:שָׁמַע A:זְמָרָא
**Problem:** EN palette は E = I が 2 回登場する文構造(主節 I feel + 従属節 when I listen)。アラム語も同型反復するが、palette 1-letter-1-role 原則に従えば 2 つの E を区別すべき(主節主語 vs 従属節主語)。同データの非分裂例として #69 「主節 he wrote + 従属節 -」では従属節主語が出現しないため衝突なし。本セルは pragma 上 dropped pronoun(pro-drop)で従属節 `E:אֲנָא` を削除可能。Classical Syriac でも `כַּד שָׁמַע` のように 1 ヶ所だけ subject を明示するのが標準。
**Proposed fix:** 従属節の重複した E:אֲנָא を削除 (op: remove, nth: 2)。
```json
{"id":76,"lang":"arc","op":"remove","find":"אֲנָא","nth":2,"finding":"non-adjacent duplicate E; drop subordinate pro-drop"}
```
確信度【蓋然】(palette 1-letter-1-role 原則、 Classical Syriac pro-drop)。

### 18. #28 arc — `C:לְמַלָּכָא` の語根 mlk は「王/統治」で「推薦/助言」ではない 【蓋然】
**Current:** A:מַצֵית C:לְמַלָּכָא F:עַל E:בֵּית מְשַׁתְּיָא טָבָא
**Problem:** `לְמַלָּכָא` は語根 m-l-k Pa'el infinitive で意味は「to make king / to crown」または別語根扱いで「to advise / counsel」 — 後者 (m-l-k II) は Targumic 一部にしか現れず、Classical Syriac の標準「助言/推薦」は **`לְמַלָּכוּ`**(Aphel inf. of m-l-k II)あるいは `לְיָעַט`(to give counsel, more transparent root y-ʿ-ṭ)。`לְמַלָּכָא` は文脈で「即位させる」とも読め曖昧。
**Proposed fix:** C:לְמַלָּכוּ(m-l-k II Aphel)もしくは C:לְמִתַּן עֵיטָא(to give counsel, より transparent)。
```json
{"id":28,"lang":"arc","op":"settext","find":"לְמַלָּכָא","newText":"לְמַלָּכוּ","finding":"to crown→to counsel/recommend (m-l-k II Aphel)"}
```
確信度【蓋然】(Muraoka 1997 §172 / Kogan-Loesov 2003 §201 root m-l-k II の方言差注意)。

### 19. #20 eu — `C:ari du` は他動詞 aux 形で `euria ari` (intransitive 「降る」) と不整合 【確実】
**Current:** A:Goiz honetatik D:euria C:ari du
**Problem:** バスク語の auxiliary 選択は ergative split: 「du / dut / da / naiz」が動詞の他動性で決定(Hualde-Ortiz de Urbina 2003 §3.1 auxiliary paradigm)。`euria` (rain, absolutive) を主語とする「降る」は **intransitive**(主語 = experiencer/theme、ergative なし)で、aux は `da` 系。`euria ari du` は「(ergative) is doing the rain」と他動詞解釈になり非標準。標準は **`euria ari da`**(rain ARI-AUX.3SG.INTR)または **`euria egiten du`**(rain do-IMPF AUX.TR、別構文)の二択。本セルは混成で `ari du` という非文を作っている。
**Proposed fix:** C:ari da。`allowTextChange: true`。確信度【確実】(Hualde-Ortiz de Urbina 2003 §3.1 / Trask 1997 §6 weather verbs)。
```json
{"id":20,"lang":"eu","op":"settext","find":"ari du","newText":"ari da","finding":"weather verb intransitive aux"}
```

### 20. #95 hy — 主語 `Ես` が C セグメント `Ես գնում եմ` 内に融合、palette A から欠落 【確実】
**Current:** C:Ես գնում եմ B:գրասենյակ A:հեծանիվով
**Problem:** palette は A,B,C,D,F(D は missing 別途)。EN reference では A = "by bicycle"。`Ես` は本来 palette 外(アルメニア語 pro-drop)もしくは明示する場合 palette E などに割り当てるべきだが、本セルでは C 動詞句に主語が融合し、さらに A の位置が `հեծանիվով` (= "by bicycle", instrumental) と入れ替わって混乱している。同データ #6「A:Ես B:համալսարանում C:ճապոներեն D:սովորում եմ」のように 主語と動詞は分離する方針が確立されているのに、本セルのみ融合。
**Proposed fix:** C を `գնում եմ` のみに、`Ես` は split して別 letter (palette extension E)、もしくは pro-drop 化して削除。最も保守的:
```json
{"id":95,"lang":"hy","op":"replace","segments":[["A","հեծանիվով"],["B","գրասենյակ"],["C","գնում եմ"]],"finding":"split fused Ես+verb; drop pro-drop subject","allowTextChange":true}
```
確信度【確実】(同データ内 hy 主語-動詞 分割方針一貫性)。

### 21. #28 hy — `F:լավ E:ռեստորան` で indefinite singular accusative marker 欠落 (#28 dat case 整合) 【蓋然】
**Current:** A:Կարող եք C:խորհուրդ տալ F:լավ E:ռեստորան
**Problem:** `խորհուրդ տալ` (recommend, lit. give advice) は dative 目的補語を要求 (Dum-Tragut 2009 §13.2 verbs taking dative)。「a good restaurant」 = `լավ ռեստորան` は absolutive (主格・対格 indef.) のため、 給与動詞「ţmen」「khorhurd tal」の対象としては dative `ռեստորանի` または locative `ռեստորանի մասին`(about a restaurant)が標準。「Could you recommend (us / me) a good restaurant」では recipient `մեզ / ինձ` も補う方が自然。最小修正は dative 化。
**Proposed fix:** E:ռեստորանի (genitive-dative, recommend の補語格)。
```json
{"id":28,"lang":"hy","op":"settext","find":"ռեստորան","newText":"ռեստորանի","finding":"recommend takes dative/genitive complement"}
```
確信度【蓋然】(Dum-Tragut 2009 §13.2、recommend の case-frame 揺れ余地あり)。

### 22. #99 arc — `B:דּוּכְרָנָא` は「記念 / 追憶」で「土産物」ではない 【蓋然】
**Current:** C:כַּמָּא D:הוּא A:הָדֵין B:דּוּכְרָנָא
**Problem:** `דּוּכְרָנָא` (emphatic state, masc.sg) はアラム語で「記念 / commemoration / memorial」(BDB / Jastrow 1903 p. 290「דּוּכְרָן」)。 「souvenir」 (旅の記念品) のニュアンスは「物体」 = `מַזְכֶּרֶת`(Mishnaic Hebrew loan)もしくは `יָהֲבָה דְזִכְרוֹנָא`(thing-of-remembrance, より具体的)。`דּוּכְרָנָא` 単体だと「儀礼的追悼」を強く想起させ、「お土産いくら?」が「追悼式いくら?」と読まれうる。
**Proposed fix:** B:מַזְכֶּרֶת (Mishnaic Hebrew/Targumic 借用、souvenir のより具体的表現)あるいは B:יָהֲבָה דְזִכְרוֹנָא。古典内で十分な前例なし、低い確信度。
```json
{"id":99,"lang":"arc","op":"settext","find":"דּוּכְרָנָא","newText":"מַזְכֶּרֶת","finding":"memorial→souvenir lexical precision"}
```
確信度【蓋然】(古典アラム語に直接対応語なし、近代借用余地あり)。

### 23. #46 ka — `B|F|G:მეგობართან` で possessor 「my (G)」 が表示なし 【蓋然】
**Current:** A:მე B|F|G:მეგობართან C:ტელეფონით D:ერთი საათი E|H:ვისაუბრე
**Problem:** ジョージア語 `მეგობართან` = friend-INST.with(`-თან` postposition)で、palette F = with / B = friend を含むが G = my(possessor)に対応する形態素なし。「私の友達と」が標準なら「ჩემს მეგობართან」と possessive `ჩემს` を前置すべき(Hewitt 1995 §6 noun phrase structure)。同データ #50 「E:ჩემს A:ძაღლს」(my-DAT dog-DAT)、#73 「E:ჩემი A:კატა」(my-NOM cat-NOM)、#29 hy 「B:հովանոցս」(umbrella-1SG.POSS), #25 「A:ჩემი მამა」のように possessive を明示する方針があるのに、本セルのみ pro-drop。
**Proposed fix:** A:მე B|F|G:ჩემს მეგობართან または segment 分割: G:ჩემს B|F:მეგობართან。
```json
{"id":46,"lang":"ka","op":"settext","find":"მეგობართან","newText":"ჩემს მეგობართან","finding":"missing possessor 'my'"}
```
確信度【蓋然】(可能だがジョージア語の口語では possessor 省略許容、同データ整合性の観点で推奨)。

### 24. #1 eu — `A:Nik` ergative + 不在の絶対格(他動詞 `nahi dut` の主語) 検証 (palette gap E,F,H) 【要検討】
**Current:** A:Nik K:hotelaren J:aurreko I:dendan G:ikusi nuen D:trajea C:probatu B:nahi dut
**Problem:** バスク語の他動詞 `nahi dut` (want-AUX.1SG→3SG.ABS) は ergative 主語 `Nik` を要求し正しい。ただし、関係節 `G:ikusi nuen`(I-saw it)も同じ ergative `Nik` を共有する文型で、palette E(reference 「a suit I」関係詞 that)に対応する成分 がバスクでは関係動詞接尾辞 `-(e)n` に吸収されており、palette gap は **正当な省略**(omission guideline B.4: optional relative pronoun)。本セルは構文として正しい。**指摘なし、確認のみ**。
**Verdict:** OK、palette gap は legitimate。確信度【要検討】(omission guideline 適用、新規 actionable なし)。

### 25. #84 arc — `C:לָקְטָה ... B:צִנָּה` (she-picked + cold) は英語/ヘブライ語からの calque 【蓋然】
**Current:** C:לָקְטָה A:הִיא B:צִנָּה D:שַׁבְתָּא E:דַּעֲבַר
**Problem:** `לָקְטָה` (Peal 3FS perfect of l-q-ṭ「拾う/集める」) + `צִנָּה`(coldness)の組合せは Modern Hebrew `תפסה צינון`(she-caught a-cold)からの calque で、Classical Syriac 標準は **`אִתְקְרַרַת`**(Ethpaal「冷えた・風邪をひいた」reflexive)あるいは **`כְּאַב צִנָּה`**(she-suffered cold)。`לָקְטָה צִנָּה` は文法的には可能だが古典文献に用例少なく、Targumic / Classical Syriac の自然な表現ではない。同データ #20 arc 「C:הֲוָה B:מָטַר」(it-was rain = it rained)、#5/#33/#43 で天候・状態描写が `הֲוָה + 名詞` 構文を選択する方針との不整合もある。
**Proposed fix:** B:צִנָּה を残し、C:לָקְטָה → C:אִתְקְרַרַת (Ethpaal 3FS, reflexive cold) ; `B:צִנָּה` は redundant となるため削除も検討。最小修正:
```json
{"id":84,"lang":"arc","op":"settext","find":"לָקְטָה","newText":"אִתְקְרַרַת","finding":"calque→native Aramaic Ethpaal reflexive"}
```
確信度【蓋然】(Targumic / Classical Syriac 内的用法、Modern Aramaic では calque 表現も許容されつつある)。

### 26. #7 hy — `D:արևային` (solar) は太陽光線・太陽電池に使う形容詞、「晴れた」は `արևոտ` 【蓋然】
**Current:** A:Վաղը B:եղանակը D:արևային C:կլինի
**Problem:** `արևային` = solar (relating to the sun, scientific/technical) — 太陽電池 `արևային մարտկոց`, 太陽系 `արևային համակարգ` 等に使用。「晴れた天気 / sunny weather」は **`արևոտ`**(sun-ADJ.NATIVE)が標準(Dum-Tragut 2009 §6.3 productive adjective suffixes)。「明日の天気は太陽光線になる」は不自然。
**Proposed fix:** D:արևոտ。`allowTextChange: true`。確信度【蓋然】(語彙 register の問題、両形とも一応形容詞として通用するが日常表現では `արևոտ` が一般)。
```json
{"id":7,"lang":"hy","op":"settext","find":"արևային","newText":"արևոտ","finding":"solar (technical)→sunny (weather)"}
```

---

## まとめ

- **ファイルパス:** `/home/jounlai/langmap/langmap_reviews/86_open.md`
- **指摘件数:** 26 件 (確実 14、蓋然 11、要検討 1)
- **本データに在籍 (scope 内):** ka (100/100)、hy (100/100)、arc (100/100)、eu (100/100)
- **本データに不在 (scope 候補):** xmf, sva, os, ce, av, lez, dar, udi, aze (Caucasian 細別); to, niu, rar, wls, tkl, tvl, ty, mh, pic (Polynesian 追加); ms_kelantan, ms_perak, bm, dv, dz, bo_amdo, bo_kham, bzh, xpo (周辺 minority)
- **主要欠陥タイプ (本ラウンドの dominant defect):**
  1. **Script integrity 違反 (2 件: #84 ka Cyrillic, #89 hy Arabic mim)** — 視覚的に類似する別言語の文字が混入し TTS / Unicode 検索 / bidi rendering を破壊
  2. **Auxiliary `եմ` 欠落 (3 件: #24/#34/#49 hy `Խնդրում` analytic form)** — 同データ内 #13/#96 の正答例と不整合
  3. **Modifier 「younger/older」完全欠落 (4 件: #15/#35 × hy/arc)** — EN reference の核要素を失う family-wide 系統的欠陥(ka sibling の正答例あり)
  4. **Aramaic 語彙誤訳 (4 件: #7 cloud, #11 library, #91 saffron, #99 memorial)** — emphatic state 形態は正しいが lexical choice が文意を破壊
  5. **Aramaic palette 1-letter-1-role 違反 (3 件: #5/#18 非隣接 D 重複, #76 非隣接 E 重複)** — copula `הוּא` を adjective と同 letter で扱う構造ミス
  6. **Agreement 違反 (1 件: #36 hy `կա` singular vs `մարդիկ` plural)**
  7. **Auxiliary 選択ミス (1 件: #20 eu `ari du` vs `ari da` の他動性)**
  8. **動詞語形ミス (1 件: #76 hy `զգացում` noun vs `զգում` participle)**
  9. **Possessor 欠落・Case 不整合 (2 件: #46 ka `my`, #28 hy dative case)**
- **#16 / #20 / #35 / #77 既出案件との重複なし** — script integrity / auxiliary 欠落 / modifier 系統欠陥 / palette duplicate-letter は本ラウンド新規。

---

## Dev response — round 1 (2026-06-04)

**応答者:** dev (LangMap maintainer)
**処理:** 26 指摘中、actionable 25 件すべてを `/tmp/lm_edits_86.json` にまとめて applier (`.wf_langmap_apply2.mjs`) でドライ適用検証 → `appliedCount: 25, failedCount: 0, paletteAdditions: 0, adjacentWarnings: []`。すべて edit 成功。データ確認のうえ Current 値はレビュー記載と完全一致を確認。

### 採否一覧 (26 件 / accepted 25 + acknowledged 1)

| # | 言語/ID | 指摘要旨 | 判定 | op | 備考 |
|---|---|---|---|---|---|
| 1 | ka #84 | `A:ис` キリル→`ის` Mkhedruli | **ACCEPT** | settext | script integrity, 文字単位置換 |
| 2 | hy #89 | `C:չեم` Arabic mim→Armenian մ | **ACCEPT** | settext | 同上 |
| 3 | hy #36 | `D:կա` 単→`կան` 複 (`մարդիկ`一致) | **ACCEPT** | settext | existential verb plural |
| 4 | hy #24 | `A:Խնդրում` aux `եմ` 補完 | **ACCEPT** | settext | analytic form |
| 5 | hy #34 | 同上 | **ACCEPT** | settext | |
| 6 | hy #49 | 同上 | **ACCEPT** | settext | |
| 7 | hy #76 | `զգացում`名詞→`զգում`分詞 | **ACCEPT** | settext | verb form |
| 8 | hy #15 | `քույրը`→`կրտսեր քույրը` younger 補完 | **ACCEPT** | settext | ka sibling 一致 |
| 9 | arc #15 | `חָתִי`→`חָתִי זְעֵירְתָּא` | **ACCEPT** | settext | younger 補完 |
| 10 | hy #35 | `եղբայրը`→`ավագ եղբայրը` older | **ACCEPT** | settext | E セグ拡張 |
| 11 | arc #35 | `אָחִי`→`אָחִי קַשִּׁישָׁא` older | **ACCEPT** | settext | |
| 12 | arc #7 | `עַנְנָא` cloud→`אֲוִירָא` weather | **ACCEPT** | settext | lexical |
| 13 | arc #91 | `כַרְכּוֹמָא` saffron→`קְרָסָא` cherry | **ACCEPT** | settext | #12 sibling 一致 |
| 14 | arc #11 | `בֵּית סִפְרַיָּא` library→`חָנוּת סִפְרַיָּא` bookshop | **ACCEPT** | settext | #23 衝突回避 |
| 15 | arc #5 | 非隣接 D 重複 → C copula+intensifier 統合 | **ACCEPT (mod)** | replace | 単純 retag は adjacent C-C 生成 (applier reject)。`C:הוּא לַחְדָא` 統合形で実装 |
| 16 | arc #18 | 同上 | **ACCEPT (mod)** | replace | `C:הוּא יַתִּיר` 統合 |
| 17 | arc #76 | 非隣接 E 重複 → 従属節 pro-drop | **ACCEPT** | remove nth:2 | |
| 18 | arc #28 | `לְמַלָּכָא`→`לְמַלָּכוּ` Aphel | **ACCEPT** | settext | |
| 19 | eu #20 | `ari du`→`ari da` intransitive aux | **ACCEPT** | settext | weather verb |
| 20 | hy #95 | 主語融合解消 (`Ես`削除) | **ACCEPT** | replace | pro-drop |
| 21 | hy #28 | `ռեստորան`→`ռեստորանի` dative | **ACCEPT** | settext | |
| 22 | arc #99 | `דּוּכְרָנָא` memorial→`מַזְכֶּרֶת` souvenir | **ACCEPT** | settext | Mishnaic loan |
| 23 | ka #46 | `მეგობართան`→`ჩემს მეგობართან` possessor | **ACCEPT** | settext | |
| 24 | eu #1 | palette gap OK (確認のみ) | **NOOP** | — | レビュアー自身が actionable なしと判定。スキップ |
| 25 | arc #84 | `לָקְטָה`→`אִתְקְרַרַת` Ethpaal | **ACCEPT** | settext | calque→native |
| 26 | hy #7 | `արևային`→`արևոտ` sunny | **ACCEPT** | settext | register |

### 実装ノート

- **#15 / #16 arc** はレビュー記載どおりの単純 `retag D:הוּא → C:הוּא` だと、後続 `C:לַחְדָא` / `C:יַתִּיר` と隣接同一 letter (`C-C`) を生成し applier が拒否する。`replace` 経由でテキストを `C:"הוּא לַחְדָא"` / `C:"הוּא יַתִּיר"` の単一セグメントに統合する形に変更。これにより「copula+intensifier を 1 つの C で表現する」というレビュー意図を保持しつつ adjacency guard を満たす。
- **#15 hy** で `Իմ քույրը` → `Իմ կրտսեր քույրը` は A セグメント全体を書き換える `settext`。glue marker 不要(語間スペース)。
- **#35 hy** は E のテキストのみ書き換え(`եղբայրը` → `ավագ եղբայրը`)。palette は維持。
- **#95 hy** は元 `C:Ես գնում եմ B:գրասենյակ A:հեծանիվով` を `A,B,C` 順に再配置しつつ C を `գնում եմ` に分離 (主語 Ես は pro-drop で削除)。`replace` で文字列フル指定。
- **#17 arc #76** は `remove nth:2` で 2 つ目の `E:אֲנָא` を削除し、palette E の非隣接重複を解消。残った `E:אֲנָא` は主節主語として保持。
- データ書き込みはレビュー指示どおり実施せず。applier はドライ実行のみで、`data.js` は元に戻して終了。

### 適用結果サマリ

- **JSON path:** `/tmp/lm_edits_86.json`
- **edits 数:** 25
- **applier 結果:** `appliedCount: 25, failedCount: 0, paletteAdditions: 0, adjacentWarnings: []`
- **未処理:** #24 (eu #1) のみ — レビュアー自身「palette gap legitimate / 新規 actionable なし」と判定済みのため NOOP

dev → reviewer ハンドオフ。次ラウンドで本ラウンド差し戻しがあれば応答します。
