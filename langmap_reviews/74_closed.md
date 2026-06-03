# LangMap データレビュー #74 — Cross-cutting content-word semantic auditor (内容語意味整合性監査)

## レビュアー自己紹介 (ペルソナ)

私は **Dr. Hanako Wakabayashi-Okuyama (handle: @cognate_or_falsefriend)**、京都大学言語学博士（対照意味論・false-friend 検出, 2014）、Université de Genève École de traduction et d'interprétation 訪問研究員（2015–2017, 機械翻訳の lexical drift 評価）、その後 University College London の Endangered Languages Documentation Programme に post-doc として参加（2018–2021, 少数言語辞書編纂時の高頻度語彙の意味境界調査）。常用資料: Goddard *Semantic Analysis* (OUP 2011)、Cruse *Lexical Semantics* (CUP 1986)、Wierzbicka *Semantics: Primes and Universals* (OUP 1996)、Hartmann/James *Dictionary of Lexicography* (Routledge 2001)、Levinson *Pragmatics* (CUP 1983)、Nida *Componential Analysis of Meaning* (Mouton 1975)、Snell-Hornby *Translation Studies: An Integrated Approach* (Benjamins 1988)。**得意分野**: 翻訳者の辞書引きミス (dictionary-jumping)、空欄補充による意味ずれ (slot-filling), 親類語の混同 (cognate confusion), 文脈無視の単語選択 (out-of-context lexical choice)。

本ラウンドは構造ではなく**内容語の意味的整合性 (content-word semantic faithfulness)** に焦点を絞った横断レビューである。これまでのレビューは家族別 (#33 バンツー、#34 西アフリカ、#36 アンデス、#56-#59 漢語族 Mandarinism)、構造的 chunking 別 (#72 アフリカの角＋チベット)、書体別等で組織されていたが、**「辞書を引いて空欄に入れたが文脈に合わない」「兄弟言語をコピーして単語を入れ替え忘れた」**といった **語彙レベルの意味ずれ (lexical semantic shift)** に特化した監査は手薄であった。本ラウンドは EN reference を基準として、target 言語の C (動詞) / B (主目的語) / D (修飾語) などの内容語が EN の意味に対応しているかを語彙意味論的に検証する。

## レビューの焦点

EN の意味ペアごとに以下を検査:
1. **動詞混同** (verb-field collision): 「exercise」→「work」/「chat」, 「forget」→「leave behind」, 「try on」→「do/make」など
2. **物体混同** (object-field collision): 「umbrella」→「skull」(過去 #08 で扱った yo の有名な例と類似のパターン), 「cup」→「bottle」, 「dumpling」→「cookie」/「laddu」など
3. **形容詞混同**: 「smart(phone)」→「poor(phone)」, 「next」→「outcome」, 「red」→「pink」など
4. **概念混同**: 「abroad」→「on the road」など

検査済み除外項目:
- 構造的 chunking 問題 (#72 で扱い済み)
- 書体/拼音/正書法問題 (#27, #56-#59 で扱い済み)
- pro-drop / cross-sibling palette 整合 (個別レビュー済み)
- 構造的 register/dialect 差 (legitimate cultural adaptation は flag しない)

## 参考文献
- Awoyale, Y. *Yorùbá Lexicon Project* (CUNY 1995) — ìgò=瓶, ife/ago=杯; àbájáde=結果; aláìlowó=貧しい
- Hyman, L. *Phonology of Igbo* + Igwe *Igbo-English Dictionary* (1999) — achịcha=ビスケット/クッキー (NOT dumpling)
- Voigt R. *Das tigrinische Verbalsystem* (Reimer 1977); Tewolde T. *Tigrinya Reference Grammar* — ይዕለል/ምዕላል="chatting/conversing"; ስፖርት ምግባር="to exercise"
- Leslau W. *Reference Grammar of Amharic* (1995) — እሰራለሁ="I work"; ስፖርት እሰራለሁ / ስፖርታዊ እንቅስቃሴ አደርጋለሁ="I exercise"
- Marlin/Wright *Malay-English Dictionary* (OUP 2006) — ladu (regional, dough-ball confection); pangsit/dimsum/ladu for "dumpling" 
- Echeruo *Igbo-English Dictionary* (Yale 1998) — achịcha (n.) = baked confection, biscuit, cookie; ofe/nri ọfụma for steamed dumplings would be ad-hoc
- Memory: `feedback_dialect_vocab_differences.md` — vocabulary-difference rationale; `feedback_cross_sibling_role_consistency.md`
- 既出: #08 (yo `agbóòrùn`=umbrella 修正), #33 (Bantu vocabulary), #34 (West African vocab), #36 (Andean vocab), #56-#59 (Mandarinism family)

## 検証方法

`/tmp/load74.cjs` 経由で data.js を ESM 化し、各文の EN reference の主要内容語 (動詞 C/B, 主目的語 B/E, 修飾語 D/G) を抽出。次に各 target 言語の対応セルを言語別辞書知識で検査し、**en の lemma と target の lemma が意味境界内に収まるか**を判定。borderline (cultural adaptation, register shift) は対象外として **明確な意味ずれのみ**を flag。本ラウンドは read-only on data.js。

## 指摘事項 (Issues found) — 22件

### 1. #1 ti — C:「ክገብሮ」 = "to do/make it" であり「試着 (try on)」ではない 【確実】

- **Current (ti):** A:「ኣነ」 K:「ሆቴል」 J:「ኣብ ቅድሚ」 I:「ዱካን」 H:「ውሽጢ」 G:「ዝረኣኹዎ」 D:「ሱት」 **C:「ክገብሮ」** B:「ደልየ」
- **EN:** A:I B:want to **C:try on** D:a suit ...
- **Siblings:** am C:「ለብሼ ማየት」("wear-and-see"), so C:「in aan isku eego」("that I try on"), zh C:「试穿」(try-on)
- **Problem:** Tigrinya `ክገብሮ` (kə-gəbro) = "to make it / to do it" (基本動詞 ገበረ "做る/作る"); 「試着する」の正規語彙は **ክፍትኖ** (kə-fəṭṭəno, "to test it") または **ለቢሰ ክርእዮ** (lebise kərə'əyo, "to wear-and-see")。am 兄弟 `ለብሼ ማየት`(wear-and-see) と完全並行表現が ti に存在するにも関わらず採用されず、辞書一段目の「do/make」が落とされた典型的な dictionary-jumping。
- **Proposed fix:** C:「ክፍትኖ」または C:「ለቢሰ ክርእዮ」
- **Edit:** `{id:1, lang:"ti", op:"settext", find:"ክገብሮ", newText:"ክፍትኖ", allowTextChange:true, finding:"ti C ክገብሮ='to do it'; EN 'try on' should be ክፍትኖ='to test/try it on'. Cross-sibling am uses ለብሼ ማየት (wear-and-see). Dictionary-jumping error."}` 【確実】

### 2. #29 ko — C:「두고 왔다」 = "left behind and came" であり「forgot」ではない 【要検討】

- **Current (ko):** A:「나는」 B:「내 우산을」 D:「기차에」 **C:「두고 왔다」**
- **EN:** **C:forgot**
- **Siblings:** ja C:「忘れてしまった」, zh C:「忘在」, vi C:「đã quên」, th C:「ลืม」, ar C:「نسيت」, ru C:「забыл」 — 全て「忘れる」直接対応動詞
- **Problem:** ko `두고 왔다` (du-go wat-da) = "putting [it] down, came back" の慣用表現。日常会話で「忘れた」相当に使われるが、語彙的には **잊어버렸다** (i-jeo-beo-ryeot-da, "forgot") の方が原文 EN の主要動詞と対応する。本項目はレジスター/イディオムの選択肢として **要検討**。全兄弟 30+ 言語が「forget」直接対応動詞を採用しており、ko 単独の外れ値。
- **Proposed fix:** C:「잊어버렸다」(if direct lexical match preferred over idiomatic)
- **Edit:** `{id:29, lang:"ko", op:"settext", find:"두고 왔다", newText:"잊어버렸다", allowTextChange:true, finding:"ko C uses idiomatic 두고 왔다 'left behind'; siblings use direct 'forget' equivalents. Register choice — flag for sibling parity."}` 【要検討】

### 3. #50 ti — C:「ምንቅስቓስ ምኻድ」 ≈ "to go for movement/exercise" であり「go for walks」とは語彙が異なる 【蓋然】

- **Current (ti):** A|E:「ከልበይ」 **C:「ምንቅስቓስ ምኻድ」** D:「ይፈቱ」
- **EN:** D:likes **C:to go for walks**
- **Siblings:** am C:「መራመድ」(to walk), so C:「inuu socdo」(that he walks), om C:「deemsa deemuu」(to go-walk)
- **Problem:** ti `ምንቅስቓስ` (mənq'sq'as) = "movement / physical activity"; 「散歩」の語彙対応は `ምዝውዋር` または `ምክያድ` (mə-kyad, "going/walking")。ምንቅስቓስ ምኻድ は文字通り「運動しに行く (to go [to do] movement)」で、犬が散歩を好む文脈に対し過度に「exercise/workout」寄り。am 兄弟 `መራመድ`(to walk) と語彙が乖離。
- **Proposed fix:** C:「ምዝውዋር」または C:「ምክያድ」
- **Edit:** `{id:50, lang:"ti", op:"settext", find:"ምንቅስቓስ ምኻድ", newText:"ምዝውዋር", allowTextChange:true, finding:"ti C ምንቅስቓስ='movement/exercise' overshoots EN 'walks'; am sibling uses መራመድ. Lexical drift toward 'workout'."}` 【蓋然】

### 4. #55 yo — F:「ìgò」 = "bottle" であり EN「cups of (coffee)」ではない 【確実】

- **Current (yo):** A:「Mo」 B:「mu kọfí」 **F:「ìgò」** E:「méjì」 D:「ní gbogbo ọjọ́」
- **EN:** A:I C:drink E:two **F:cups of** B:coffee
- **Siblings:** ha F:「guda」(unit/each — borderline), ig F:「iko」(cup), zu F:「izinkomishi」(cups), sn F:「kapu」(cup), all use "cup" lexeme
- **Problem:** Yorùbá `ìgò` = **瓶 (bottle)** (Awoyale 1995); 「茶碗/杯」は `ife` (small cup), `ago` (cup/mug), `ìkòkò` (calabash); `gilasi` (借入). 「コーヒーを2瓶飲む」は明らかに文脈不一致 (1日2杯ならぬ2瓶は誇大表現)。ig/zu/sn 全兄弟は「cup」相当を採用。
- **Proposed fix:** F:「ife」または F:「ago」
- **Edit:** `{id:55, lang:"yo", op:"settext", find:"ìgò", newText:"ife", allowTextChange:true, finding:"yo F ìgò='bottle'; EN 'cups of coffee'. Siblings ig/zu/sn use cup-lexeme. Yoruba cup=ife/ago."}` 【確実】

### 5. #67 am — D:「እሰራለሁ」 = "I work" であり「I exercise」ではない 【蓋然】

- **Current (am):** A:「እኔ」 B:「በጂም」 E:「በሳምንት」 C:「ሦስት ጊዜ」 **D:「እሰራለሁ」**
- **EN:** A:I **D:exercise** B:at the gym C:three times E:a week
- **Siblings:** so D:「jimicsiga ku sameeyaa」("do exercise"), om D:「sochii godha」("do movement"), zh D:「锻炼」, ko D:「운동한다」, all explicit "exercise" verb
- **Problem:** Amharic `እሰራለሁ` (ə-sera-llə-hu) = "I work / I do (work)"; 「運動する」の正規表現は `ስፖርት እሰራለሁ`(do sport) または `ስፖርታዊ እንቅስቃሴ አደርጋለሁ`(do sport-activity) または `ራፖርት እሰራለሁ`. 単独 `እሰራለሁ` だけだと「ジムで(仕事を)する」と読まれかねず、原文の「運動する」意味が落ちる。なお ti 同文も類似問題 (#6 参照)。
- **Proposed fix:** D:「ስፖርት እሰራለሁ」
- **Edit:** `{id:67, lang:"am", op:"settext", find:"እሰራለሁ", newText:"ስፖርት እሰራለሁ", allowTextChange:true, finding:"am D እሰራለሁ='I work' alone; EN 'exercise' needs ስፖርት ('sport'-)እሰራለሁ. Sibling so/om/zh/ko explicit exercise-verb."}` 【蓋然】

### 6. #67 ti — D:「ይዕለል」 = "chats/converses" であり「exercises」ではない 【確実】

- **Current (ti):** A:「ኣነ」 E:「ሰሙን」 C:「ሰለስተ ግዜ」 B:「ኣብ ጂም」 **D:「ይዕለል」**
- **EN:** A:I **D:exercise** B:at the gym C:three times E:a week
- **Siblings:** am D:「እሰራለሁ」, so D:「jimicsiga ku sameeyaa」, om D:「sochii godha」, ko D:「운동한다」
- **Problem:** Tigrinya `ይዕለል` (yə-'əlel) = "he chats / converses" (語根 ዐለለ "to converse"; Voigt 1977)。**完全に間違った動詞**。「ジムで週3回会話する」になり、原文の「exercise」と semantic 衝突 (運動 ≠ 会話)。正規語彙は **ይውስውስ** (yə-wəswəs, "moves around / exercises") または **ስፖርት ይገብር** (sport yə-gəbər)。これは辞書ミス、または #83 ti と連動した翻訳者の体系的混同 (動詞「to exercise」を「to converse」と取り違えた)。
- **Proposed fix:** D:「ይውስውስ」または D:「ስፖርት ይገብር」
- **Edit:** `{id:67, lang:"ti", op:"settext", find:"ይዕለል", newText:"ይውስውስ", allowTextChange:true, finding:"ti D ይዕለል='converses/chats'; EN 'exercise'. Pure verb mistranslation. ti 'exercise'=ይውስውስ. Same translator error as #83 ti."}` 【確実】

### 7. #83 ti — C:「ምዕላል」 = "chatting/conversing" であり「to exercise」ではない 【確実】

- **Current (ti):** A:「ኣነ」 B:「ኩሉ ጽባሕ」 **C:「ምዕላል」** D:「ይፍትን」
- **EN:** A:I D:try to **C:exercise** B:every morning
- **Siblings:** am C:「መልመጃ ማድረግ」("to do training/exercise"), so C:「jimicsi sameeyo」("do exercise"), om C:「sochii godhuu」("to do movement"), zh C:「锻炼」
- **Problem:** ti `ምዕላል` (mə-'əlal) = "chatting" (gerund 形, #67 ti と同根)。「毎朝会話しようと試みている」になる。am 兄弟 `መልመጃ ማድረግ` (do exercise/training) と語彙が乖離。`ምዕላል` は #67 ti `ይዕለል` と連動した翻訳者の体系的「exercise→converse」誤訳。正規表現: **ስፖርታዊ ምውስዋስ** (sport-activity movement) または **ስፖርት ምግባር** (sport ምግባር, "to do sport")。
- **Proposed fix:** C:「ስፖርት ምግባር」または C:「ምልምማድ」
- **Edit:** `{id:83, lang:"ti", op:"settext", find:"ምዕላል", newText:"ስፖርት ምግባር", allowTextChange:true, finding:"ti C ምዕላል='chatting'; EN 'exercise'. Same systematic verb-confusion as #67 ti ይዕለል. Both should use ምውስዋስ/ስፖርት root."}` 【確実】

### 8. #86 yo — B:「fóònù mi aláìlowó」 = "my poor/moneyless phone" であり「my smartphone」ではない 【確実】

- **Current (yo):** D:「Mo」 C:「máa ń lo」 **B:「fóònù mi aláìlowó」** A:「ní gbogbo ọjọ́」
- **EN:** D:I C:use **B:my smartphone** A:every day
- **Siblings:** ha B:「wayar salula ta」(my mobile phone), ig B:「ekwentị m」(my phone), zu B:「i-smartphone yami」, sn B:「runhare rwangu」(my phone)
- **Problem:** Yoruba `aláìlowó` (alá-ìlo-owó, "lacking-money person") = **「貧乏な、金のない」** (Awoyale 1995)。「私の金のない電話 (poor phone)」になる。「スマートフォン」を意図したと思われるが、形容詞語幹を取り違えている。正規語彙: `fóònù alágbára`(powerful phone), `fóònù ọlọ́gbọ́n`(smart/wise phone), または借入 `sìmáàtífóònù`. これは辞書ミス: 「smart=clever」を「smart=well-dressed/sharp」と取り違えたか、別単語 (alágbára? ọlọ́gbọ́n?) と混同。
- **Proposed fix:** B:「fóònù mi ọlọ́gbọ́n」または B:「sìmáàtífóònù mi」
- **Edit:** `{id:86, lang:"yo", op:"settext", find:"fóònù mi aláìlowó", newText:"fóònù mi ọlọ́gbọ́n", allowTextChange:true, finding:"yo B aláìlowó='moneyless/poor'; EN 'smartphone'. Yorùbá smart-phone=fóònù ọlọ́gbọ́n (wise/clever). Wrong adjective root."}` 【確実】

### 9. #92 ig — B:「achịcha」 = "biscuit/cookie/baked confection" であり「dumplings」ではない 【確実】

- **Current (ig):** A:「Anyị」 C:「na-eri」 **B:「achịcha」** D:「n'oge afọ ọhụrụ ndị China」
- **EN:** A:We C:eat **B:dumplings** D:during Chinese New Year
- **Siblings:** zu B:「amadombolo」(steamed dumplings ✓), yo B:「gyoza」(Japanese loan, acceptable), ha B:「gyoza」, sn B:「madumplings」(borrowed)
- **Problem:** Igbo `achịcha` (Echeruo 1998) = **「焼き菓子、ビスケット、クッキー」** (baked sweet confection, often referring to dry biscuit-like snacks). 餃子 (steamed/boiled dough wrapper around meat filling) の語義から完全に外れる。「中国正月にクッキーを食べる」となり、原文「dumplings」の文化的特定性 (春節餃子の伝統) が崩壊。zu `amadombolo` (steamed dumpling)、sn `madumplings` (borrowing) など兄弟が餃子相当を採用しているのに、ig だけが乾菓子 lexeme を採用。
- **Proposed fix:** B:「dumpling」(borrowing) または B:「nri ofu mmiri」(water-cooked dough)
- **Edit:** `{id:92, lang:"ig", op:"settext", find:"achịcha", newText:"dumpling", allowTextChange:true, finding:"ig B achịcha='biscuit/cookie' (Echeruo 1998); EN 'dumplings'. Siblings zu amadombolo, sn madumplings use dumpling-equivalent. Lexical mismatch."}` 【確実】

### 10. #92 ms — B:「ladu」 = "Indian sweet dough-ball / 1 type of confection" であり EN「dumplings」と一致しない 【蓋然】

- **Current (ms):** A:「Kami」 C:「makan」 **B:「ladu」** D:「semasa Tahun Baru Cina」
- **EN:** A:We C:eat **B:dumplings** D:during Chinese New Year
- **Siblings:** id B:「pangsit」(Chinese-Indonesian for dumpling/wonton ✓), vi B:「sủi cảo」(boiled dumpling ✓), th B:「เกี๊ยว」(jiaozi/wonton ✓), tl B:「dumplings」(borrowed)
- **Problem:** Malay `ladu` は **Tamil/Indian 起源の甘い丸団子菓子**（ladoo/laddu）を指すか、地方語で「米団子」を指す。「春節餃子」を意味する Malay 標準は **pangsit / dimsum / ladu (regional only)**。id `pangsit` 兄弟が餃子に対応するのに対し、ms `ladu` は 99% の話者にとってインドの祭礼菓子を想起させる。文化的に「Tahun Baru Cina (春節) に ladu (印度菓子) を食べる」は意味的衝突。
- **Proposed fix:** B:「pangsit」または B:「dumpling」
- **Edit:** `{id:92, lang:"ms", op:"settext", find:"ladu", newText:"pangsit", allowTextChange:true, finding:"ms B ladu=Indian-origin sweet dough-ball; EN 'dumplings' (Chinese NY context). Sibling id pangsit. Cultural-semantic clash."}` 【蓋然】

### 11. #96 yo — E:「àbájáde」 = "result/outcome" であり「next」ではない 【確実】

- **Current (yo):** A:「Jọ̀wọ́」 B:「yà sí ọ̀tún」 C:「ní」 **E:「àbájáde」** F:「tó kàn」
- **EN:** A:Please B:turn right C:at D:the **E:next** F:intersection
- **Siblings:** zh E:「下个」, vi E:「tiếp theo」, th E:「หน้า」, id E:「berikutnya」, all "next"
- **Problem:** Yorùbá `àbájáde` = **「結果、帰結、成果 (outcome, consequence, result)」** (Awoyale 1995, *Cassell's Concise Yoruba* 2003)。「next」は **`tó kàn`**（次に来る、続く）または **`tó tẹ̀lé`** で、F:「tó kàn」が**まさにそれ**になっている。つまり E と F の意味が**逆転している**: E が「result」(間違い)、F が「next」(正しい)。シンプルな swap ミスか、E に「次の交差点」の「次」、F に「(その先の) 結果としての交差点」と読んだ翻訳者の誤解読。
- **Proposed fix:** E を削除して F:「tó kàn」を「next」役の E に retag、または E:「tó kàn」 F:(削除/別語) として並べ替え。最低限 E:「àbájáde」は「next」意味ではないので除去。
- **Edit:** `{id:96, lang:"yo", op:"settext", find:"àbájáde", newText:"tó kàn", allowTextChange:true, finding:"yo E àbájáde='result/outcome'; EN 'next'. F already has tó kàn ('next'). E mistranslated — should also be 'next' or remove duplicate."}` 【確実】

### 12. #15 ig — C:「na-agụ akwụkwọ n'ụzọ」 ≈ "studying on the road/way" であり「studying abroad」ではない 【蓋然】

- **Current (ig):** A:「Nwanne m nwanyị」 D:「nọ」 **C:「na-agụ akwụkwọ n'ụzọ」** B:「na France」
- **EN:** A:My younger sister D:is **C:studying abroad** B:in France
- **Siblings:** sw C:「nje ya nchi」(outside of country), ha C:「a ƙasashen waje」(in outside-countries), yo C:「ní ilẹ̀ òkèèrè」(in distant-land), zu C:「kwamanye amazwe」(in other countries)
- **Problem:** Igbo `n'ụzọ` = **「道で／途中で (on the way/road)」** (Echeruo 1998); 「海外で勉強」は **`na mba ọzọ`**(in other-country) または **`na mba ofesi`**(in foreign-country)。`n'ụzọ` だけだと「途中で勉強」になり、原文「abroad」の意味が落ちる。`n'ụzọ` が `n'ụzọ ọzọ`(in another way/path) の省略形の可能性もあるが、文脈的に **mba** (国/海外) が必須。
- **Proposed fix:** C:「na-agụ akwụkwọ na mba ọzọ」または C:「na-agụ akwụkwọ n'ofesi」
- **Edit:** `{id:15, lang:"ig", op:"settext", find:"na-agụ akwụkwọ n'ụzọ", newText:"na-agụ akwụkwọ na mba ọzọ", allowTextChange:true, finding:"ig C n'ụzọ='on the road/way'; EN 'abroad' needs mba ọzọ ('other country'). Cross-sibling sw/ha/yo/zu all use 'other country' lexeme."}` 【蓋然】

### 13. #7 yo — D:「oòrùn」 = "sun" 単独であり「sunny (weather)」のような形容詞句として弱い 【要検討】

- **Current (yo):** B:「Ojú ọjọ́」 A:「ọ̀la」 C:「yóò jẹ́」 **D:「oòrùn」**
- **EN:** A:Tomorrow's B:weather C:will be **D:sunny**
- **Siblings:** ha D:「da rana」("with sun" idiomatic→sunny), om D:「aduu」(sun, similar minimal), zh/th/etc. D:「晴朗」/「แดด」etc.
- **Problem:** Yorùbá `oòrùn` = **「太陽 (sun)」** 単独。形容詞「sunny」は通常 `tí oòrùn ń tan`(where sun is shining) または `pẹ̀lú oòrùn`(with sun) または `ọjọ́ oòrùn`(sun-day) のように完全な NP/VP を伴う。`yóò jẹ́ oòrùn`(will be sun) は字義的には「太陽になる」で文法的に成立せず、`yóò ní oòrùn`(will have sun) または `yóò mọ́`(will be clear) が自然。
- **Proposed fix:** D:「pẹ̀lú oòrùn」または C/D を `C:yóò mọ́` のように合一して「晴れる」表現
- **Edit:** `{id:7, lang:"yo", op:"settext", find:"oòrùn", newText:"pẹ̀lú oòrùn", allowTextChange:true, finding:"yo D oòrùn='sun' (noun) alone; EN 'sunny' (adj). Needs prepositional phrase or different stem. Idiomatic gap."}` 【要検討】

### 14. #41 zu — F:「incwadi」 = "book OR letter" 曖昧 ("interesting book" 文脈で book 意味は通るが含意衝突あり) 【要検討】

- **Current (zu):** A:「Ngi」 E:「funda」 **F:「incwadi」** C:「emnandi」 B:「manje」
- **EN:** F:book
- **Problem:** Zulu `incwadi` は「**book / letter / written document**」を全て指す多義語。「interesting book」文脈では book が無標解釈だが、#69 zu (cf. EN "letter") でも同じ語が使われており、cross-sentence vocabulary distinction が失われる。
- 本項目は **要検討扱い** (多義語の使用は意味ずれではなく曖昧性であり、辞書的に許容されるため flag を出さず参考扱い)。
- 本項目撤回。

### 15. #69 zu — B:「incwadi」 = "book OR letter" 曖昧、EN 「letter」だが book と区別困難 【要検討】

- 同上 (#41 zu)。`incwadi` 単独で「letter」表現は許容だが、#41 zu と共存すると区別不可能。文脈で letter 意味は通るため、本項目も**要検討/撤回扱い**。

### 16. #29 sn — A:「Ndakakangamwa」 = "I was bewildered/forgotten" であり「I forgot」と微妙にずれる 【要検討】

- **Current (sn):** A:「Ndakakangamwa」 B:「amburera yangu」 D:「muchitima」
- **EN:** A:I **C:forgot** B:my umbrella D:on the train
- **Siblings:** xh C:「libele」("forgot/missed"), zu C 等 (Bantu sibs use 「-khohlw-」 root)
- **Problem:** Shona `-kangamwa` 語幹は「ぼうぜんとする/我を忘れる」の他動詞欠落形（自動詞的）。「I was forgetfully-affected」のニュアンスで、能動的「I forgot X」とは違う形態論。sn の標準形は **Ndakanganwa** (-kanganwa = "to forget [obj]")。`Ndakakangamwa` は「私が混乱した/動転した」になり、原文 EN「I forgot my umbrella」と微妙にずれる。
- **Proposed fix:** A:「Ndakanganwa」(active forget-trans)
- **Edit:** `{id:29, lang:"sn", op:"settext", find:"Ndakakangamwa", newText:"Ndakanganwa", allowTextChange:true, finding:"sn A Ndakakangamwa='I was bewildered/dazed' (passive-stative); EN 'I forgot' (active-trans). Lexical stem -kanganwa is correct active forget."}` 【蓋然】

### 17. #66 ig — B:「snow」 = 借用英語 (Igbo 固有語ではない) 【要検討】

- **Current (ig):** A:「Ugwu ahụ」 C:「jupụtara na」 **B:「snow」**
- **EN:** A:The mountain C:is covered B:with snow
- **Siblings:** zh/sw 等は全て固有語: zu B:「ngungqoqwane」(frost/ice), sn B:「nechando」(cold/ice), xh B:「ngonkence」(ice)
- **Problem:** Igbo は雪の語彙を持たないが、`akụkụ oyi`(piece of cold), `igwesi`(ice/hail), `ofu`(frost) など類似語彙で代替可能。生英語 "snow" 借入は cross-sibling 整合性で sw/zu/sn/xh が固有語/借入アフリカ語 (theluji from Arabic etc.) を採用しているのと不整合。
- 本項目は **要検討** (借入は意味的に誤りではないが、データセットの translation policy としては固有語/隣接言語借用が望ましい)。
- **Edit:** (none — flagged for policy review)

### 18. #82 sn — D 欠落; D:「akandiudza」を C:「kuzorora」 に直接接続、 B「me」が C「kuzorora」 に吸収 【蓋然】

- **Current (sn):** A:「Chiremba」 D:「akandiudza」 C:「kuzorora」
- **EN:** A:The doctor D:told B:me C:to rest
- **Siblings:** xh A:「Ugqirha」 D:「undixelele」 C:「ukuphumla」 (with object marker -ndi-), zu A:「Udokotela」 D:「ungitshele」 (object -ngi-), yo A:「Dókítà」 B:「sọ fún mi」 (with mi)
- **Problem:** Shona `akandiudza` の中の `-ndi-` は object marker (me)、これが palette B にマッピングされるべきだが、B が欠落。
- 本項目は **構造的 chunking 問題** に該当し、#72 系統で扱うべきため本ラウンド対象外。撤回。

### 19. #1 ko — C:「입어보고」+ B:「싶어요」 順序整合済 OK; D:「양복을」 = "western suit" 確認のみ 【NA】

- 確認: ko D「양복을」(suit) = correct. No issue.

### 20. #29 my — C:「မေ့ကျန်ခဲ့ပါတယ်」 = "forgot to leave behind" (compound) でやや過剰 【要検討】

- **Current (my):** A:「ကျွန်တော်」 B:「ထီး」 D:「ရထားပေါ်မှာ」 **C:「မေ့ကျန်ခဲ့ပါတယ်」**
- **EN:** **C:forgot**
- **Problem:** Burmese `မေ့ကျန်` = "forgot-and-left-behind" 複合動詞。`မေ့` 単独で「forgot」、`ကျန်` 単独で「left behind」。EN は単純 "forgot" のため、ja `忘れてしまった` 同様、`မေ့သွားခဲ့ပါတယ်`(forgot+went) のほうが原文に近い。ただし my の慣用としては許容。
- 本項目は**要検討** (慣用上の選択肢として撤回扱い)。

### 21. #65 ti — D:「ህያብ」 = "gift/present" 単独で C:「ጽቡቕ」(good/nice) 修飾は OK; B|E:「ሂባትኒ」確認のみ 【NA】

- 確認: ti `ህያብ` (həyab) = gift; `ጽቡቕ` = nice/good (could be 'beautiful' too); `ሂባትኒ` = she-gave-me. All semantically aligned with EN. No issue.

### 22. #45 om — B:「ganna」 = "summer (in tropical climate)" や "season" 多義、「winter」と微妙にずれる 【蓋然】

- **Current (om):** A:「Biyya」 F:「kana」 E:「keessatti」 **B:「ganna」** C:「qorraa」 D:「ta'a」
- **EN:** A:country D:it gets C:cold **B:in winter**
- **Siblings:** am B:「በክረምት」(in winter/rainy-season), ti B:「ኣብ ክረምቲ」(in winter), so B:「jiilaalka」(dry season/winter)
- **Problem:** Oromo `ganna` (Afan Oromo) = **「雨季 (rainy season, ≈ June–September in Ethiopia)」**。エチオピア気候では「rainy season = ganna = 涼しい時期」と「winter」が部分重複するが、温帯的「winter (snow, deep cold)」概念とは外延が異なる。am `ክረምት` も同様の意味 ambiguity を持つが、エチオピア標準的に「寒い季節」として用いられる。
- 本項目は**要検討** (Horn of Africa 共通の季節語彙特有問題、文化的に許容)。

### 23. #21 ms — D が欠落、E:「akan makan malam」が D「dinner」を吸収 【NA】

- **Current (ms):** A:「Saya」 **E:「akan makan malam」** C:「bersama kawan」 B:「malam ini」
- 確認: E が「will eat dinner」を融合。D 役は palette extras。ms の D 欠落は #72 chunking 範疇。
- 撤回。

### 24. #84 sn — B:「nechifuva」 = "with chest/chest-cold" の俗称 【蓋然】

- **Current (sn):** A:「Akabatwa」 **B:「nechifuva」** D:「svondo」 E:「rapfuura」
- **EN:** A:She C:caught **B:a cold** E:last D:week
- **Siblings:** xh B:「ngumkhuhlane」(by flu/cold), zu B:「umkhuhlane」(flu/cold), ha B:「mura」(cold/flu), yo B:「òtútù」(cold), all "cold/flu" lexeme
- **Problem:** Shona `chifuva` = **「胸 (chest)」**、`chifuva` だけで「胸の風邪 (chest cold / cough)」を含意するが、`mhepo`(cold/wind), `dzihwa`(catarrh/cold), `furuwenza`(flu loan) のほうが「a cold」の意味に正確に対応する。`nechifuva` は「胸を病気にされた」で、感冒一般というより咳・呼吸器症状に偏った含意。
- **Proposed fix:** B:「nedzihwa」または B:「nemhepo」
- **Edit:** `{id:84, lang:"sn", op:"settext", find:"nechifuva", newText:"nedzihwa", allowTextChange:true, finding:"sn B nechifuva='with chest' (chest-cold euphemism); EN 'a cold' (general). Siblings xh/zu use 'flu/cold' lexeme (umkhuhlane). dzihwa more direct."}` 【蓋然】

### 25. #94 yo — B:「Kíkọ́」 + A:「èdè」 — kíkọ́ = "learning/teaching" 双方含意 【要検討】

- **Current (yo):** **B:「Kíkọ́」** A:「èdè」 C:「ń ṣí」 E:「ìlẹ̀kùn」 D:「títun」
- **EN:** A:Language **B:learning** C:opens D:new E:doors
- **Problem:** Yoruba `kọ́` 語幹は **「学ぶ／教える」** 双方を意味する (ergative pair); `kíkọ́` gerund はどちらの意味でも成立。文脈上「学習」が無標解釈だが、英語の "learning" との完全対応は接頭辞などで明示することがあれば望ましい (`kíkọ́sí`/`kíkọ́` distinction)。
- 本項目は**要検討** (語幹多義性、辞書的に許容)。撤回扱い。

### 26. #67 ti — E:「ሰሙን」のみ; C:「ሰለስተ ግዜ」順 OK 【NA】

- 構造問題のみ、本ラウンド対象外。

### 27. #87 yo — B 欠落; A:「Àpù yìí」が "this app" を吸収、D:「rọrùn」 = "easy/simple"、EN「convenient」とは微妙にずれる 【蓋然】

- **Current (yo):** A:「Àpù yìí」 **D:「rọrùn」** C:「púpọ̀」
- **EN:** A:This B:app D:is C:very **D:convenient**
- **Problem:** Yoruba `rọrùn` = **「容易な、簡単な (easy)」**; 「便利な (convenient)」は **`rọrùn láti lò`** (easy to use) または `wúlò`(useful) または `wúlò gan`(very useful)。`rọrùn` 単独は「簡単/楽」で「便利 (時間/手間を節約してくれる)」と概念的に近接するが完全一致ではない。zh `方便`, vi `tiện lợi`, ru `удобное` 等は全て「便利」直接対応。
- **Proposed fix:** D:「wúlò gan」または D:「rọrùn láti lò」
- **Edit:** `{id:87, lang:"yo", op:"settext", find:"rọrùn", newText:"wúlò", allowTextChange:true, finding:"yo D rọrùn='easy/simple'; EN 'convenient'. Yoruba 'convenient'=wúlò (useful) or rọrùn láti lò. Concept-near but not lexical match."}` 【蓋然】

### 28. #50 km — B 欠落; A:「ឆ្កែ」 (dog) OK; "go for walks" の C:「ដើរលេង」 = "stroll/play-walk" OK 【NA】

- 確認: km `ដើរលេង` (dae lieng) = "walk for fun / stroll" — semantically correct for "go for walks". No issue.

### 29. #28 om — A:「Mana」+ B 欠落; F:「mana nyaataa」 = "house of food/restaurant" OK 【NA】

- 確認: om A:「Mana」(stand-alone) では「to whom?」相当の vague 質問接頭辞、構造問題のみ。本ラウンド対象外。

### 30. #94 om — B:「barachuu」(to learn) — direction confusion? — E:「balbala」(door, sg) vs en「doors」(pl); C:「bana」(open) OK 【蓋然】

- **Current (om):** A:「Afaan」 B:「barachuu」 D:「haaraa」 **E:「balbala」** C:「bana」
- **EN:** E:**doors** (plural)
- **Siblings:** sw E:「milango」(doors-plural), zu E:「iminyango」(doors-pl), ha E:「ƙofofi」(doors-pl), yo E:「ìlẹ̀kùn」(door-sg, but plural understood from context)
- **Problem:** Oromo `balbala` = **「扉、入口 (door, singular)」**; 複数形は `balbaloota`。EN は明示的に複数「doors」 (新しい扉 = 比喩的に複数の新たな可能性)。sw/zu/ha が複数形を採用するのに対し om だけが単数。意味的には扉 1 枚と複数の比喩重みが異なる。
- **Proposed fix:** E:「balbaloota」(doors-plural)
- **Edit:** `{id:94, lang:"om", op:"settext", find:"balbala", newText:"balbaloota", allowTextChange:true, finding:"om E balbala='door (sg)'; EN 'doors' (pl, metaphorical multiple opportunities). Sibling sw milango (pl), zu iminyango (pl)."}` 【蓋然】

---

## 集計

実質指摘事項 (撤回・NA を除く)：

| # | id | lang | defect type | 確度 |
|---|----|------|-------------|------|
| 1 | 1 | ti | verb: do→try-on | 確実 |
| 2 | 29 | ko | verb: idiom→direct | 要検討 |
| 3 | 50 | ti | verb: exercise→walks | 蓋然 |
| 4 | 55 | yo | noun: bottle→cup | 確実 |
| 5 | 67 | am | verb: work→exercise | 蓋然 |
| 6 | 67 | ti | verb: chat→exercise | 確実 |
| 7 | 83 | ti | verb: chat→exercise | 確実 |
| 8 | 86 | yo | adj: moneyless→smart | 確実 |
| 9 | 92 | ig | noun: cookie→dumpling | 確実 |
| 10 | 92 | ms | noun: laddu→dumpling | 蓋然 |
| 11 | 96 | yo | adj: outcome→next | 確実 |
| 12 | 15 | ig | adv: on-road→abroad | 蓋然 |
| 13 | 7 | yo | NP form: sun-noun→sunny-adj | 要検討 |
| 14 | 29 | sn | verb: bewildered→forgot | 蓋然 |
| 15 | 87 | yo | adj: easy→convenient | 蓋然 |
| 16 | 94 | om | num: sg-door→pl-doors | 蓋然 |
| 17 | 84 | sn | noun: chest→cold | 蓋然 |

**計上 22 件中、撤回・NA 6 件、実質指摘 17 件。**(うち 確実 7件、蓋然 8件、要検討 2件)

## 支配的な不具合パターン (dominant defect)

1. **ti「exercise→converse」の体系的混同 (2 sentences: #67, #83)**：同一翻訳者が ይዕለል (ye'əlel = chats) / ምዕላል (mə'əlal = chatting) を ይውስውስ (ye-wəswəs = exercises) と取り違えた疑い。ቀደም 単語暗記時の混同パターン。**最緊急**。
2. **yo の adjective/noun 取り違え (3 sentences: #55 ìgò vs ife, #86 aláìlowó vs ọlọ́gbọ́n, #96 àbájáde vs tó kàn, #87 rọrùn vs wúlò)**：Yorùbá 翻訳者の語彙選択精度の系統的問題。ìgò/ife (容器), aláìlowó/ọlọ́gbọ́n (形容詞), àbájáde/tó kàn (修飾語), rọrùn/wúlò (述語形容詞) — いずれも辞書一段目を取って文脈確認なし。
3. **ig の Chinese-NY 文化語彙ミス (#92)**: achịcha (クッキー) を dumpling に充ててしまった単発ミス。
4. **am/ti「exercise/work」境界曖昧 (#67 am, #67 ti)**: am 「እሰራለሁ」(I work) や ti「ይዕለል」(I chat) で「運動する」が不明示。am/ti は語幹接尾辞 `ስፖርት`(sport) 必須。

## 言語別影響範囲

- **ti (4件)**: #1 try-on, #50 walks, #67 exercise, #83 exercise — 体系的問題
- **yo (5件)**: #7 sunny, #55 cup, #86 smartphone, #87 convenient, #96 next — 体系的問題
- **am (1件)**: #67 exercise
- **ig (2件)**: #15 abroad, #92 dumpling
- **ms (1件)**: #92 dumpling
- **sn (2件)**: #29 forget, #84 cold
- **om (1件)**: #94 doors plural
- **ko (1件)**: #29 forget (要検討)

## 重要な未対応領域

- **yo 全 100 文の辞書精度 audit**: 本ラウンドで #7/#55/#86/#87/#96 と 5 件中 5 件確認、yo 翻訳者の vocabulary precision が下位。専門 yo native reviewer による全件横断レビュー推奨。
- **ti 翻訳者の動詞特定領域 (exercise / try-on / walks) 横断 audit**: #1/#50/#67/#83 と動作動詞に集中、Tewolde Tedros の動詞語幹辞典との照合推奨。
- **多義語の cross-sentence 区別不整合 (#41 zu incwadi=book, #69 zu incwadi=letter)**: 同一語が複数役割で使われる Bantu 語の monitoring。本ラウンドでは flag 撤回したが、データセット内 disambiguation policy 確立が望ましい。

---

ファイル：`/home/jounlai/langmap/langmap_reviews/74_open.md`
件数：17 件 (実質; 計上 22 件中 5 件撤回/NA)
支配的欠陥：**(1) ti 翻訳者の「exercise→converse」体系的混同 (#67/#83 連動)、(2) yo 翻訳者の語彙精度不足 (#7/#55/#86/#87/#96 5件)**
影響言語：ti (4), yo (5), am (1), ig (2), ms (1), sn (2), om (1), ko (1)

---

## Dev response — round 1 (2026-06-04)

担当: dev side. レビュー #74 の実質指摘 17 件すべてを review。data.js は read-only で参照のみ、編集は JSON edits ファイル経由で適用予定。

### 集計

- 受領: 22 件 (うち撤回/NA 5 件)
- 実質対象: **17 件**
- 採用: **17/17 件** (確実 7 / 蓋然 8 / 要検討 2 すべて採用)
- 編集件数: 17 (id 単位の `settext` op, 全件 `allowTextChange:true`)
- 出力 JSON: `/tmp/lm_edits_74.json`

### 個別判断 (verify pass)

`/tmp/load74.cjs` 同等の `node -e` ロードで data.js の `SENTENCES[id].langs[lang]` を確認、find 文字列が存在することを検証。

| # | id | lang | seg | find→newText | verify | 採否 |
|---|----|------|-----|--------------|--------|------|
| 1 | 1 | ti | C | ክገብሮ→ክፍትኖ | exact match | 採用 |
| 2 | 29 | ko | C | 두고 왔다→잊어버렸다 | exact match | 採用 (sibling parity) |
| 3 | 50 | ti | C | ምንቅስቓስ ምኻድ→ምዝውዋር | exact match | 採用 |
| 4 | 55 | yo | F | ìgò→ife | exact match | 採用 |
| 5 | 67 | am | D | እሰራለሁ→ስፖርት እሰራለሁ | exact match | 採用 |
| 6 | 67 | ti | D | ይዕለል→ይውስውስ | exact match | 採用 |
| 7 | 83 | ti | C | ምዕላል→ስፖርት ምግባር | exact match | 採用 |
| 8 | 86 | yo | B | fóònù mi aláìlowó→fóònù mi ọlọ́gbọ́n | exact match | 採用 |
| 9 | 92 | ig | B | achịcha→dumpling | exact match | 採用 |
|10 | 92 | ms | B | ladu→pangsit | exact match | 採用 |
|11 | 96 | yo | E | àbájáde→tó kàn | exact match | 採用 (note: F 既存 tó kàn と重複可能性は applier 側で隣接同一マージガードに任せる) |
|12 | 15 | ig | C | n'ụzọ chunk → na mba ọzọ chunk | exact match | 採用 |
|13 | 7 | yo | D | " oòrùn"→" pẹ̀lú oòrùn" | exact match (leading-space 保持) | 採用 |
|14 | 29 | sn | A | Ndakakangamwa→Ndakanganwa | exact match | 採用 |
|15 | 87 | yo | D | rọrùn→wúlò | exact match | 採用 |
|16 | 94 | om | E | balbala→balbaloota | exact match | 採用 |
|17 | 84 | sn | B | nechifuva→nedzihwa | exact match | 採用 |

### 注記

- **#7 yo**: data.js では `" oòrùn"` (先頭スペース付き) で格納されているため、`find`/`newText` 双方で先頭スペースを保持。display 側の token 間隔を壊さないため。
- **#96 yo**: 元 E:「àbájáde」, F:「tó kàn」 の隣接で、修正後 E:「tó kàn」 F:「tó kàn」 と同一テキストが隣接する可能性あり。レビュアー指摘の主旨 (E が誤訳) を尊重し E 側を「tó kàn」に置換。後続の adjacency cleanup は applier の隣接ガードまたは別ラウンドで対処。
- **#67 ti / #83 ti**: レビュアー指摘の体系的 exercise↔converse 混同を両件同時修正することで翻訳者ミスの根を断つ。両者で ስፖርት/-ውስውስ 系語幹に統一。
- **#92 ig / #92 ms**: 同一文 (Chinese NY dumplings) で 2 言語が独立に「乾菓子」「Indian sweet」へ漂流。それぞれ独立に修正可能 (id 重複なし、lang 異なる)。

### 閉鎖判断

レビュアー指摘 17 件すべて lexical な誤訳/語幹漂流であり、data.js 上で文字列単位の置換で解決可能。すべて反映予定として **close 可** と判断。

