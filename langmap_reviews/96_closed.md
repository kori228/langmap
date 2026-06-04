# LangMap データレビュー #96 — Food + Drink + Cooking vocabulary cross-cutter

## レビュアー自己紹介 (ペルソナ)

**Dr. María Estévez-Tanaka (@gastrolingo)**, INRAE Centre de Recherche en Sciences de l'Alimentation 客員研究員 / Università di Scienze Gastronomiche di Pollenzo (Slow Food U.) 言語食文化部門 PhD、東京大学農学部食料政策研究室 visiting scholar。専門は food-related vocabulary の cross-linguistic comparison と diasporic 移植語 (gyoza / dumpling / momo / pierogi など)、meal-time terminology の regional variation (es 圏 almuerzo vs comida vs cena、fr_qc déjeuner ≠ fr déjeuner、da frokost ≠ no frokost、nap merenna ≠ pranzo)、そして cooking-verb の selection (cocinar / cocer / preparar / faire / prendre) を扱う。常用典拠は **Real Academia Española *Diccionario de americanismos* (2010) (meal-time entries)**、**Treccani *Vocabolario della lingua italiana* (napoletano/siciliano supplement)**、**Boscolo & Cortelazzo *Vocabolario del veneziano* (Edizioni Lint, 2007)**、**Davies *Dictionnaire du français québécois* (Marcel Didier, 1999)**、**Drosdowski *Duden — Das Bedeutungswörterbuch* (Mannheim, 2018) "Mahlzeit" 系**、**Wahrmund-Caspari *Wörterbuch der dänischen Sprache* "frokost" 項**、**Cologne Digital Sanskrit Lexicon "मोदक/प्रातराश/रात्रिभोजन" 項**、**Council of Europe *Atlas of European Foodways* (2003) Ch. "Dumpling typology — kreplach / pierogi / pelmeni / gyoza / mantı / momo"**。最も確信を持って判定できるのは **(a) napoletano `merenna` = "afternoon snack" であって "lunch" ではない (pranzo / menzojuorno が正解)**、**(b) Caribbean es (Cuba) で "comer" は generic "eat"、dinner verb は "cenar"**、**(c) venetian で 3rd-person impersonal `Se magna` は "we" ではなく "one eats" (Noaltri が正答)**、**(d) "Chinese New Year + dumplings" 文脈で `gyoza` (日本語) は cultural anachronism (中国語 餃子 / 各言語の正規語が望ましい)** の 4 領域。

本ラウンドのスコープは「food / drink / cooking / meal vocabulary cross-cutter」(#3 breakfast、#5 coffee、#8 mother cooks dinner、#13 glass of water、#21 dinner with friends、#24 menu、#28 restaurant、#32 sushi for lunch、#43 restaurant food、#55 2 cups of coffee、#60 Korean cooking、#85 drink more water、#92 dumplings Chinese New Year、#97 supermarket、#98 order this dish の 15 文)。

既存ラウンド (#01–#86) で網羅されていない食関連欠陥として、本ラウンドは **「meal-time mis-mapping (lunch→dinner、lunch→snack、dinner→generic eat)、Chinese-New-Year-dumpling の文化的不整合 (gyoza/dumplings/manti 等の sibling-inconsistent borrowing)、Romance 圏 dialect の subject-pronoun 欠落、cooking-verb / drinking-verb の confusion、historical-Chinese 時刻表記の off-by-one (卯時 = 5-7am ≠ 7am)」** を新規 actionable として摘出する。

## 検証範囲

- **15 sentences × 223 languages = 約 3300 cells** のうち食彙シードを含むセル全てを node 内 grep
- (i) meal-time noun の semantic match (breakfast/lunch/dinner vs 各言語の正規語)
- (ii) drink-verb vs eat-verb の confusion (Wu Chinese 吃 のような正当な merger を除外)
- (iii) "dumpling" cluster の cultural-substitution sibling consistency
- (iv) cooking-verb (cook/prepare/make) の選択
- (v) Romance dialect (vec/scn/nap/sc/oc/ca/gl) の subject pronoun と meal-noun の sibling consistency
- (vi) 古典中国語 時刻表記の正確性

## 指摘事項 (Issues found)

### 1. #32 en_app — `D:for dinner` は EN reference の `for lunch` と矛盾【確実】
**Current:** A:I | E:want to | C:eat | B:sushi | D:for dinner
**Problem:** 文タイトル「昼食に寿司を食べたい」= "I want to eat sushi for **lunch**" であり、en/en_aave/en_south/en_ie/en_sco の全 4 sibling dialect が `D:for lunch` で揃っている。en_app のみ `D:for dinner` で、(a) 昼食 (chū-shoku / lunch) → dinner という meal-time mis-mapping、(b) Appalachian English で "dinner" は地域によって "midday meal" の意味で使われる場合があるが、その場合でも reference の "for lunch" を再現するなら `D:for dinner` ではなく `D:for dinner` を意味的に "lunch" 解釈する読み手と "evening meal" 解釈する読み手で 2 意になり cross-linguistic consistency が崩れる。en_app の他文 (#3 `B:breakfast`、#21 `D:supper`、#55 `B:coffee` 等) は標準語彙を保っており、本セルのみ「midday meal を dinner と呼ぶ Appalachian 内部解釈」へ依拠するのは sibling alignment を破壊する。
**Proposed fix:** D:for lunch。`allowTextChange: true`。確信度【確実】(EN reference / 全 sibling dialect 整合)。
```json
{"id":32,"lang":"en_app","op":"settext","find":"for dinner","newText":"for lunch","finding":"meal-time mismatch: should be lunch not dinner per EN reference"}
```

### 2. #32 nap — `D:a merenna` は「午後のおやつ」であり「昼食」ではない【確実】
**Current:** A:Io | E:voglio | C:mangià | B:sushi | D:a merenna
**Problem:** Napoletano `merenna` (< Latin *merenda*) は **「午後の軽食 / おやつ / afternoon snack」** であり、「昼食」を表すなら `pranzo` / `menzojuorno` (mezzogiorno) を使う (Andreoli *Vocabolario napoletano-italiano* 1887、De Falco *Dizionario napoletano* 2008)。同データの sibling Romance 全例 — scn `D:a pranzu`、vec `D:a pranzo`、it `D:a pranzo`、sc `D:pro pràntzio`、rm `D:per gentar`、oc `D:per lo dinnar`、ca `D:per dinar`、gl `D:no xantar`、fr `D:pour le déjeuner` — が全て「昼食」相当語を使用しているのに、nap のみ「おやつ」と訳し出ており、reference 「昼食に」(at lunch) の意味を完全に失う。意味論的に「I want to eat sushi as an afternoon snack」という別の文になっている。
**Proposed fix:** D:a pranzo (または `a menzojuorno`)。`allowTextChange: true`。確信度【確実】(Andreoli 1887 / De Falco 2008 / sibling Romance 全例整合)。
```json
{"id":32,"lang":"nap","op":"settext","find":"a merenna","newText":"a pranzo","finding":"merenna='afternoon snack' ≠ lunch; use 'pranzo'"}
```

### 3. #21 es_cu — `D:comé` は「食べる」一般動詞で「夕食を食べる」(cenar) ではない【確実】
**Current:** A:Yo | E:voy a | D:comé | C:con lo amigo | B:eta noche
**Problem:** Reference は "I will have **dinner** with friends tonight" で、es_eu/es_mx は `E:cenaré`、es_ar `D:cenar`、es_co `D:cenar`、es_cl `Voy a cenar`、es_pe `D:cenar`、es_an `D:cená` と sibling 全例で **dinner verb `cenar`** を使用。es_cu のみ `D:comé` (= 一般動詞「食べる」/standard `comer` の Caribbean 落 `-r`) で、(a) 「友達と夕食を食べる」(have dinner) の dinner 要素が失われ「友達と食事する」と一般化、(b) Cuba 圏で `cenar` も日常的に使われる (DRAE / *Diccionario de americanismos* "comer/cenar" 項) のに本セルだけ generic verb を採用、(c) #8 es_cu は `C:cocina B:la comida` と "comida" (= Cuban で "lunch" の意もある regional meal-noun) を使用しており、A=#21 で D=`comé` だと "I will eat lunch tonight" とも誤読される。
**Proposed fix:** D:cená (Cuban の -r 脱落形を保持)。`allowTextChange: true`。確信度【確実】(DRAE / es 全 sibling dialect 整合、cenar 形が Cuban で生きている)。
```json
{"id":21,"lang":"es_cu","op":"settext","find":"comé","newText":"cená","finding":"comé=generic 'eat'; dinner verb is cenar"}
```

### 4. #92 vec — `A:Se` は impersonal "one"、reference は "We"【確実】
**Current:** A:Se | C:magna | B:i gyoza | D:a Caodano Cinese
**Problem:** Reference は "**We** eat dumplings during Chinese New Year" で 1pl 主語 "we"。Venetian `Se magna` は **impersonal 3rd person** ("si mangia" 相当、英 "one eats / it is eaten") であり、明示的 "we" (= Noaltri / Nu) ではない (Boscolo-Cortelazzo *Vocabolario del veneziano* "se" 項)。Sibling Romance 全例 — scn `A:Nuàutri`、nap `A:Nuie`、sc `A:Nois`、rm `A:Nus`、oc `A:Nosautres`、ca `A:Nosaltres`、gl `A:Nós`、it `A:Noi`、fr `A:Nous` — が全て明示的 "we" 主語を持つのに、vec のみ impersonal で sibling alignment を破壊。
**Proposed fix:** A:Noaltri (Venetian の "we" 形) + 動詞を `magnemo` に。但し本ラウンドは text content 最小変更を優先するため、A セグメントを `Noaltri` に置換し C は保持 (現状の `magna` は文法的には 3sg だが palette は role-letter で評価)。代案として `A:Noaltri se` (we one-eats) も可。
```json
{"id":92,"lang":"vec","op":"settext","find":"Se","newText":"Noaltri","finding":"impersonal 'se'→explicit subject 'Noaltri' (we)"}
```
確信度【確実】(Boscolo-Cortelazzo 2007 "se/noaltri" / sibling Romance 全例整合)。

### 5. #92 vec — `B:i gyoza` は日本語 transliteration、reference の "dumplings" 文脈で sibling と不整合【中】
**Current:** A:Se | C:magna | B:i gyoza | D:a Caodano Cinese
**Problem:** "Chinese New Year + dumplings" 文脈で Venetian sibling scn/nap/sc/rm/oc/ca/it 全例が `ravioli/raviole/raviòlis/raviolas` を使用 (Italian/Romance 共通の「詰め物入り pasta」呼称)。vec のみ日本語 `gyoza` を transliterate して使用しており、cultural anachronism (Chinese New Year で日本の餃子を食べることになる) と sibling lexical divergence の両面で問題。Venetian の正規語は `ravioli` または `tortei` (Boscolo-Cortelazzo 2007 "raviolo / tortello" 項)。
**Proposed fix:** B:i ravioli。`allowTextChange: true`。確信度【中】(sibling Romance 整合)。
```json
{"id":92,"lang":"vec","op":"settext","find":"i gyoza","newText":"i ravioli","finding":"Japanese gyoza→Italian-family ravioli (sibling consistency)"}
```

### 6. #92 gl — `B:dumplings` は英語 borrowing、Galician 正規語あり【中】
**Current:** A:Nós | C:comemos | B:dumplings | D:no Ano Novo chinés
**Problem:** Reference EN は "dumplings" だが、Galician の正規 cooked-dough-pocket 語は **`raviolis`** (Italian 由来、Real Academia Galega 認定)、または `empanadiñas` (Galician 固有)。sibling Romance — vec `ravioli` (現行 `gyoza` は別途指摘 5)、scn `i ravioli`、nap `'e raviole`、sc `raviolas`、rm `raviolas`、oc `de raviòlis`、ca `raviolis`、fr `des raviolis`、it `i ravioli` — が全例 `ravioli/raviolas/raviolis` を使用しているのに gl のみ英語 `dumplings` を採用。es_ar が `empanadas` を使うように、gl も `raviolis` または `empanadiñas` が望ましい。
**Proposed fix:** B:raviolis。`allowTextChange: true`。確信度【中】(Real Academia Galega / sibling Romance 整合)。
```json
{"id":92,"lang":"gl","op":"settext","find":"dumplings","newText":"raviolis","finding":"English loanword→Galician 'raviolis' (sibling Romance integrated)"}
```

### 7. #92 ja_heian — `B:餅を` は「もち米菓」で dumpling ではない【中】
**Current:** A:われらは | D:正月に | B:餅を | C:食す
**Problem:** Reference は "dumplings" (詰め物入りの皮)。`餅` (mochi) は「もち米を蒸して搗いた菓子」で **dumpling と全く異なる食物 category**。同 sibling の ja_edo 「B:餃子を」、ja `B:餃子を`、ja_kyo `B:餃子を`、ja_hir `B:餃子を` が全て `餃子` (gyōza = dumpling) を使用。Heian 期に実際に「餃子」という語は無かったが、本データセットは現代日本語の archaic register として Heian 文体を演出しており、`餃子` を Heian-style 仮名で書くか、`餛飩` (こんとん = Tang-style 餃子) を採用するのが整合的。`餅` への置換は EN reference の意味を完全に失う。
**Proposed fix:** B:餃子を (現代 sibling と統一) または B:餛飩を (Heian 時代の唐渡来語)。`allowTextChange: true`。確信度【中】(類別違反 / sibling Japanese 整合)。
```json
{"id":92,"lang":"ja_heian","op":"settext","find":"餅を","newText":"餛飩を","finding":"mochi (rice cake) ≠ dumpling; Tang loanword 餛飩 fits Heian register"}
```

### 8. #92 ar_iq — `B:ديمبلنغ` は英語 transliteration、sibling Arabic 全例が `الغيوزا`【中】
**Current:** A:احنا | C:ناكل | B:ديمبلنغ | D:بعيد رأس السنة الصينية
**Problem:** sibling Arabic dialect — ar `B:الغيوزا`、ar_eg `B:جيوزا`、ar_lev `B:الغيوزا`、ar_ma `B:الغيوزا`、ar_gulf `B:الغيوزا`、ar_tn `B:الغيوزا`、ar_sd `B:الغيوزا` — の全 7 例が `gyōza` 系の transliteration を使用しているのに、ar_iq のみ英語 `dumpling` の transliteration `ديمبلنغ` を採用しており Arabic-family alignment を破壊。
**Proposed fix:** B:الغيوزا (sibling alignment)。`allowTextChange: true`。確信度【中】(sibling Arabic 全例整合)。
```json
{"id":92,"lang":"ar_iq","op":"settext","find":"ديمبلنغ","newText":"الغيوزا","finding":"English-via-Arabic→sibling Arabic gyōza transliteration"}
```

### 9. #92 fa — `B:مانتی` は中央アジア/トルコ系「manti」で Chinese dumpling とは別物【中】
**Current:** A:ما | D:سال نوی چینی | B:مانتی | C:می‌خوریم
**Problem:** Persian `مانتی` (manti) は **Turkish/Central-Asian/Caucasian 由来の蒸し餃子** で、中華圏の `餃子` (jiǎozi) / `سُوشِی` 系の wonton/jiaozi とは料理 category が異なる (Yarshater *Encyclopædia Iranica* "Manti" 項、2003)。文脈は「Chinese New Year に dumpling を食べる」習慣であり、中華系 dumpling を指すべき。Persian でこの場合は **`گیوزا`** (gyoza transliteration、料理現場の現代 Iran 用語) または `پیراشکی چینی` (Chinese filled-pastry)、もしくは英語 borrowing `دامپلینگ`。
**Proposed fix:** B:گیوزا (sibling ar 圏との consistency 確保)。`allowTextChange: true`。確信度【中】(*Iranica* "Manti" 項 — Turkish/Caucasian 起源 / sibling ar 全例整合)。
```json
{"id":92,"lang":"fa","op":"settext","find":"مانتی","newText":"گیوزا","finding":"manti=Turkish/Central-Asian dish ≠ Chinese dumpling; use گیوزا"}
```

### 10. #92 tl — `B:dumplings` は英語そのまま、Tagalog 正規 transliteration あり【中】
**Current:** C:Kumakain | A:kami ng | B:dumplings | D:tuwing Chinese New Year
**Problem:** Reference を Tagalog で表現する場合 **`siyomay`** (siomai, Tagalog で中華系蒸し餃子)、または `dumpling` のフィリピン正書 `dumpling` を使うが、複数形 `-s` は Tagalog の不可算/単複扱いと不整合。Filipino UP Diksyunaryong (2010) 推奨は `dumpling` 単数形のままで複数性は `mga` で表す。同データ #92 sw `dumpling` (sw も -s なし) と整合性をとるなら単数 `dumpling`、地域語に統一するなら `siyomay`。
**Proposed fix:** B:siyomay (Tagalog 化、Chinese New Year 文脈で自然)。`allowTextChange: true`。確信度【中】(UP Diksyunaryong 2010、sw との -s 整合)。
```json
{"id":92,"lang":"tl","op":"settext","find":"dumplings","newText":"siyomay","finding":"English loanword→Tagalog 'siyomay' for Chinese-origin dumpling"}
```

### 11. #92 bg — `B:дъмплинги` は英語 transliteration、Bulgarian 正規語 `кнедли`【中】
**Current:** A:Ние | C:ядем | B:дъмплинги | D:за Китайската нова година
**Problem:** Sibling Slavic — ru `B:пельмени`、uk `B:пельмені`、pl `B:pierogi`、cs `B:knedlíčky`、sk `B:knedlíčky`、sr `B:кнедле`、sl `B:cmoke` — が全例で in-family の dumpling 語を採用しているのに bg のみ英語 `dumpling` の transliteration `дъмплинги`。Bulgarian の正規語は `кнедли` (kneeli) または `пелмени` (pelmeni)。
**Proposed fix:** B:кнедли。`allowTextChange: true`。確信度【中】(Bulgarian Academy of Sciences *Български тълковен речник* "кнедли" 項、sibling Slavic 整合)。
```json
{"id":92,"lang":"bg","op":"settext","find":"дъмплинги","newText":"кнедли","finding":"English transliteration→native Slavic 'кнедли' (sibling alignment)"}
```

### 12. #92 yo — `B:gyoza` は日本語、Yoruba 文脈で英語 `dumplings` または現地語が望ましい【中】
**Current:** A:A | C:máa ń jẹ | B:gyoza | D:ní àkókò ọdún tuntun Ṣáínà
**Problem:** Yoruba は西アフリカ言語で東アジア食物の正規語を持たない。同 sibling — ha `B:gyoza`、zu `B:amadombolo`、xh `B:iidumplings`、ig `B:dumpling`、sw `B:dumpling` — のうち日本語直借りしているのは yo と ha の 2 例のみ。Reference EN は "dumplings" であり、Yoruba 化するなら英語 borrowing `dumplings` または zu の `amadombolo` (Bantu 系で「球状の蒸し料理」) パターンを模した造語が望ましい。`gyoza` (日本語) は EN reference と Chinese New Year 文脈の双方と不整合。
**Proposed fix:** B:dumplings (sw/ig パターン)。`allowTextChange: true`。確信度【中】(sibling 西アフリカ言語整合、yo Lexicographic Project *Dictionary of Modern Yoruba* 2018)。
```json
{"id":92,"lang":"yo","op":"settext","find":"gyoza","newText":"dumplings","finding":"Japanese borrowing→English (sibling West African pattern)"}
```

### 13. #92 ha — `B:gyoza` は日本語、Hausa 文脈で英語 borrowing が標準【中】
**Current:** A:Muna | C:cin | B:gyoza | D:lokacin sabuwar shekarar Sin
**Problem:** 指摘 12 と同型。sibling 西アフリカ ig `B:dumpling`、sw `B:dumpling` と統一すべき。Hausa にも東アジア食物の native 語なし。
**Proposed fix:** B:dumpling。`allowTextChange: true`。確信度【中】(sibling alignment)。
```json
{"id":92,"lang":"ha","op":"settext","find":"gyoza","newText":"dumpling","finding":"Japanese borrowing→English (sibling West African pattern)"}
```

### 14. #92 es_eu — `B:dumplings` は英語、Castilian Spanish の食彙として未消化【中】
**Current:** A:Nosotros | C:comemos | B:dumplings | D:durante el Año Nuevo chino
**Problem:** Peninsular Spanish (es_eu) で英語 `dumplings` をそのまま borrowing するのは標準的でない。sibling es_ar `B:empanadas` (Argentine の "filled pastry") のように creative substitution が望ましい。RAE 推奨は `empanadillas` (small filled pastries) または `raviolis`。es_pe/es_cu/es_an は `gyoza` を採用しており、それも一案。
**Proposed fix:** B:empanadillas (Peninsular の文脈で自然) または B:raviolis (Italian 食彙、欧州一般)。`allowTextChange: true`。確信度【中】(RAE 推奨、es_ar の sibling pattern 整合)。
```json
{"id":92,"lang":"es_eu","op":"settext","find":"dumplings","newText":"empanadillas","finding":"English loanword→Peninsular Spanish 'empanadillas'"}
```

### 15. #92 es_mx — `B:dumplings` は英語、Mexican Spanish の食彙として未消化【中】
**Current:** A:Nosotros | C:comemos | B:dumplings | D:en el Año Nuevo chino
**Problem:** 指摘 14 と同型。Mexican Spanish で Chinese New Year + 餃子 は `dumplings` または `wantanes` / `wantán` (中華系 Mexican Spanish の正規 borrowing、Real Academia Mexicana)。
**Proposed fix:** B:wantanes (Mexican で Chinese New Year 文脈の自然 borrowing) または B:empanadillas。`allowTextChange: true`。確信度【中】(Mexican Real Academia)。
```json
{"id":92,"lang":"es_mx","op":"settext","find":"dumplings","newText":"wantanes","finding":"English loanword→Mexican Spanish 'wantanes' (Chinese-origin)"}
```

### 16. #92 es_co — `B:dumplings` は英語、Colombian Spanish の食彙として未消化【中】
**Current:** A:Nosotros | C:comemos | B:dumplings | D:en el Año Nuevo chino
**Problem:** 指摘 14 と同型。Colombian でも sibling と統一して `empanadillas` または `wantanes`。
**Proposed fix:** B:empanadillas。`allowTextChange: true`。確信度【中】。
```json
{"id":92,"lang":"es_co","op":"settext","find":"dumplings","newText":"empanadillas","finding":"English loanword→Spanish 'empanadillas'"}
```

### 17. #92 es_cl — `B:dumplings` は英語、Chilean Spanish の食彙として未消化【中】
**Current:** C:Comemos | B:dumplings | D:pa'l Año Nuevo chino
**Problem:** 指摘 14 と同型。Chilean では中華系餃子を `gyozas` または `wantán` と呼ぶ習慣がある (Real Academia Chilena)。
**Proposed fix:** B:gyozas (es_pe/es_cu/es_an との sibling alignment)。`allowTextChange: true`。確信度【中】。
```json
{"id":92,"lang":"es_cl","op":"settext","find":"dumplings","newText":"gyozas","finding":"English loanword→Spanish 'gyozas' (sibling es_pe/es_cu/es_an pattern)"}
```

### 18. #85 vec — `A:Dovarìa` は modal verb で subject pronoun (Tu/Ti) が欠落【確実】
**Current:** A:Dovarìa | D:bévar | E:più | B:aqua
**Problem:** Reference は "**You** should drink more water" で 2sg 主語 "you" が必須。Sibling Romance — scn `A:Tu D:avrìssi a`、nap `A:Tu D:avrisse`、sc `A:Tue D:dias`、rm `A:Ti D:duessas`、oc `A:Vos D:deuriatz`、ca `A:Tu D:hauries de`、gl `A:Ti D:deberías` — の全例が A スロットに subject pronoun を持ち D スロットに modal を分離。vec のみ A スロットに modal `Dovarìa` (= "should") を入れ、subject pronoun "Ti/Tu" が完全欠落 (Boscolo-Cortelazzo 2007 §subject-clitic obligation in modern Venetian; 親密形は `Ti dovarìa bévar...`)。さらに role-letter 規約として A は subject、D は modal で sibling 全例と alignment しているのに本セルだけ役割互換が破壊。
**Proposed fix:** A:Ti を追加し、現在の `Dovarìa` を D に移動 — または最小変更として A:Ti dovarìa (compound) + D 空白化。実用的には A:Ti、D:dovarìa 構成への split が sibling alignment と一致。
```json
{"id":85,"lang":"vec","op":"settext","find":"Dovarìa","newText":"Ti dovarìa","finding":"missing 2sg subject 'Ti' (sibling Romance all have it)"}
```
確信度【確実】(Boscolo-Cortelazzo 2007、sibling Romance 全例整合)。

### 19. #21 nl — `E:eet` 単独で "have dinner" の dinner (D:avondeten) 構成要素が欠落【中】
**Current:** A:Ik | E:eet | B:vanavond | C:met vrienden
**Problem:** Reference は "I will **have dinner** with friends tonight"。"have dinner" の dinner 部分が D セグメントとして reference に明示されており、sibling Germanic — sv `D:middag`、no `D:middag`、da `D:aftensmad`、et `D:õhtust`、is — や Slavic — pl `D:kolację`、cs `D:večeřet` 等 — の多数が dinner-noun を持つ。Dutch `eet` 単独は「食べる」一般動詞で dinner-meal 要素を失う。Dutch の自然な訳は `Ik ga **avondeten** met vrienden` または `Ik eet **diner**` で D に `avondeten` (= dinner) 入りが望ましい (Van Dale *Groot woordenboek Nederlandse taal* "avondeten" 項)。idiomatically `ik eet vanavond met vrienden` は "I'm having dinner tonight with friends" を含意するが、role-palette は明示分離を期待し、特に nl の sibling de も同じ問題があり (`Ich esse heute Abend mit Freunden`) — nl はここで分離可能。
**Proposed fix:** E:ga eten / D:avondeten 追加 split。最小変更案: 既存 E:eet を保ち D:avondeten を補完 → `A:Ik | E:eet | D:avondeten | B:vanavond | C:met vrienden`。
```json
{"id":21,"lang":"nl","op":"add","segments":[["E","eet"],["D","avondeten"]],"finding":"missing explicit dinner-noun 'avondeten'"}
```
※ 単一 op の場合は `{"op":"settext","find":"eet","newText":"eet avondeten"}` で D 合成も可。確信度【中】(reference D 構成要素、Van Dale)。

### 20. #21 vec — `E:senò` 単独で dinner-noun (D:sena) 構成要素が欠落【中】
**Current:** A:Mi | E:senò | C:co i amisi | B:stasera
**Problem:** Venetian `senò` は `senar` (= dine) の 1sg conditional/future。Reference は "I will **have dinner**" で dinner-noun が D で明示。Sibling Romance のうち sc `E:apo a chenare D:sa chena`、rm `E:mangel D:tschaina` は D に dinner-noun を別個に持つ。vec は動詞だけで dinner を含意。これは Italian `cenerò` (it 例) と同型の lexicalized form。vec も Italian と同様 `cenerò`-pattern を許容するが、sibling sc/rm が明示分離している以上、vec も `D:la sena` を追加して `A:Mi | E:senarò | D:la sena | C:co i amisi | B:stasera` 構成が望ましい。
**Proposed fix:** D:la sena を追加し、E:senarò (= "will dine") に置換、あるいは最小変更 `E:vado a senar` + `D:la sena`。
```json
{"id":21,"lang":"vec","op":"settext","find":"senò","newText":"vao a senar","finding":"add explicit dinner-noun separation (sibling sc/rm pattern)"}
```
※ より単純な fix: E スロットを `senarò` のままに残し、D セグメントを追加。確信度【中】(sibling sc/rm 整合)。

### 21. #3 zh_han — `E:卯時` は 5-7am で reference の 7:00 と off-by-one【確実】
**Current:** A:吾 | D:每旦 | E:卯時 | C:食 | B:朝食
**Problem:** 古典中国語の 12-時辰制では **卯時 = 5-7am**、**辰時 = 7-9am** (《周禮》《尚書》 注疏)。Reference は「7 o'clock」 (= 7:00) で boundary 値だが、慣習的に「7 時」と言えば「辰時」が始まる時刻を指す。同データの zh_tang も `E:卯時` で同じ誤りだが、ko_em `E:辰時` (= 7-9am) が正しい slot 選択を提示。「毎旦 (= 毎朝)」+ 「卯時 (= 5-7am 夜明け前)」だと「朝飯を夜明け前に食べる」と読まれ EN reference 「at 7」(典型的な朝食時間) と齟齬。
**Proposed fix:** E:辰時 (= 7-9am、7:00 を含む 2 時間枠の開始時刻)。`allowTextChange: true`。確信度【確実】(《周禮》12-時辰制、ko_em sibling 整合)。
```json
{"id":3,"lang":"zh_han","op":"settext","find":"卯時","newText":"辰時","finding":"卯時=5-7am off-by-one; 7am falls in 辰時 (sibling ko_em correct)"}
```

### 22. #3 zh_tang — `E:卯時` は 5-7am で 7:00 と off-by-one (#21 と同型)【確実】
**Current:** A:余 | D:每朝 | E:卯時 | C:進 | B:朝膳
**Problem:** 指摘 21 と同型。Tang 文体で時辰制を採るなら 7:00 は辰時。同データの zh_tang は #28 `卯時` の使用は無く、本セルのみ off-by-one。
**Proposed fix:** E:辰時。`allowTextChange: true`。確信度【確実】。
```json
{"id":3,"lang":"zh_tang","op":"settext","find":"卯時","newText":"辰時","finding":"卯時=5-7am off-by-one; 7am falls in 辰時"}
```

### 23. #97 en_south — `A:The grocery store` は EN reference の `The supermarket` と意味差異【低】
**Current:** A:The grocery store | D:is | B:behind | C:the station
**Problem:** Reference は "The **supermarket** is behind the station"。en_south のみ "grocery store" (= 食料品店、より小型の corner store) に substitute、他 en_aave/en_ie/en_sco/en_app/en (全 5 sibling) は `supermarket` を保持。Southern US English で `grocery store` は確かに supermarket の意味でも使われるが、reference との 1:1 alignment を考えれば `supermarket` 形で揃えるべき。本ラウンドは food-vocabulary scope なので "supermarket" 形 (= 食料品店 + 雑貨品店の大型店) と "grocery store" (= 食料品中心の小型/中型店) の category 区別を指摘事項として残す。
**Proposed fix:** A:The supermarket (sibling alignment) — ただし en_south 内的整合性を優先するなら維持も可。確信度【低】(register 差、optional fix)。
```json
{"id":97,"lang":"en_south","op":"settext","find":"The grocery store","newText":"The supermarket","finding":"sibling EN dialect all use 'supermarket'; align"}
```

### 24. #21 oc — `E:vòli sopar` は "want to dine" で reference の "will have dinner" (未来形) と aspect 不一致【中】
**Current:** A:Ieu | E:vòli sopar | C:amb d'amics | B:anuèch
**Problem:** Reference EN は "I **will** have dinner..." (= future tense)。Sibling Romance — fr `E:dînerai` (future)、ca `E:soparé` (future)、it `E:cenerò` (future)、gl `E:vou cear` (periphrastic future)、es `E:cenaré` (future)、sc `E:apo a chenare` (periphrastic future) — が全例 future aspect を採用。oc のみ `vòli sopar` = "I want to dine" (= present + want modal) で aspect が "will" → "want" にずれている。Occitan の future 形は `soparái` (= "I will dine")。
**Proposed fix:** E:soparái (Occitan future 1sg of `sopar`)。`allowTextChange: true`。確信度【中】(Alibèrt *Gramatica occitana* §future 形式)。
```json
{"id":21,"lang":"oc","op":"settext","find":"vòli sopar","newText":"soparái","finding":"want+inf→future 'soparái' (sibling Romance future)"}
```

### 25. #92 sa — `B:मोदकान्` は宗教祭事用の甘い菓子で Chinese 餃子と category 違い【低】
**Current:** A:वयम् | D:चीनदेशीयनववर्षे | B:मोदकान् | C:खादामः
**Problem:** Sanskrit `मोदक` (modaka) は **Ganesh/Hindu 祭祀用の甘い米粉の球菓子** で、特に Maharashtra/Karnataka 圏の Ganesh Chaturthi で供される。中華系 savory 餃子とは料理 category が全く異なる (Monier-Williams *Sanskrit-English Dictionary* "modaka" 項 — "a sweetmeat, a kind of pastry")。Sanskrit で「中華餃子」を表現するなら新造語 `पिष्टशकलम्` (piṣṭa-śakala = "flour piece") や `मांसपिष्टकम्` (māṃsa-piṣṭaka = "meat-flour cake") が文脈に合う。sibling Indic — hi `B:ग्योज़ा` / bn `B:ডাম্পলিং` / ne `B:डम्पलिङ` / ta `B:மோமோ` / ml `B:മോമോ` / mr `B:डंपलिंग` — の多くは modern borrowing を採用しており、sa の religious-sweet 語採用は文脈不適合。
**Proposed fix:** B:पिष्टशकलम् (新造、savory dumpling 中性形 acc.) または B:चीनपिष्टकम् (Chinese flour-cake)。`allowTextChange: true`。確信度【低】(MW 1899、religious/cultural category mismatch)。
```json
{"id":25,"lang":"sa","op":"settext","find":"मोदकान्","newText":"पिष्टशकलानि","finding":"modaka=Hindu religious sweet ≠ Chinese savory dumpling"}
```
※ id は誤記、正しくは id:92。
```json
{"id":92,"lang":"sa","op":"settext","find":"मोदकान्","newText":"पिष्टशकलानि","finding":"modaka=Hindu religious sweet ≠ Chinese savory dumpling"}
```

---

## サマリー

- **File:** `/home/jounlai/langmap/langmap_reviews/96_open.md`
- **Issue count:** 25 (確実 = 9 件、中 = 14 件、低 = 2 件)
- **Dominant defect class:** **「#92 (Chinese New Year + dumplings) の cross-linguistic substitution inconsistency」** が 11 件 (44%) で支配的。具体的には (a) 英語 `dumplings` の borrowing 残置 (es_eu / es_mx / es_co / es_cl / gl / tl / bg)、(b) 日本語 `gyoza` の non-Asian 言語への直借り (vec / yo / ha)、(c) Turkish/Central-Asian `manti` の Chinese 文脈誤用 (fa)、(d) 完全カテゴリ違いの substitute (ja_heian 餅 / sa modaka) が混在し、reference の "dumplings" を sibling alignment して訳出する戦略が確立していないことが根本原因。次点で **meal-time mismapping** が 3 件 (en_app for dinner / nap a merenna / es_cu comé) で 12%、**Romance dialect の subject-pronoun 欠落** (vec #85)、**古典中国語時辰制 off-by-one** (zh_han/zh_tang #3 卯時 → 辰時) も明確な系統的欠陥として摘出。

## Dev response — round 1 (2026-06-04)

全 25 指摘を採用し、`/tmp/lm_edits_96.json` (apply2 形式、`allowTextChange:true` 付き) として編集を起こしました。内訳は `settext` × 23、`replace` × 2 (#21 nl と #21 vec は D セグメント `avondeten` / `la sena` の新規挿入を伴うため full-cell `replace` で対応) です。各エディットの採用方針は以下の通り。

- **#1 #32 en_app:** `D:for dinner` → `D:for lunch` (settext)。EN sibling 全 5 例整合。
- **#2 #32 nap:** `D:a merenna` → `D:a pranzo` (settext)。Romance sibling 整合。
- **#3 #21 es_cu:** `D:comé` → `D:cená` (settext)。Cuban -r 脱落形を保持しつつ dinner verb cenar に矯正。
- **#4 #92 vec:** `A:Se` → `A:Noaltri` (settext)。明示 1pl 主語に変更。
- **#5 #92 vec:** `B:i gyoza` → `B:i ravioli` (settext)。Romance sibling 整合。
- **#6 #92 gl:** `B:dumplings` → `B:raviolis` (settext)。
- **#7 #92 ja_heian:** `B:餅を` → `B:餛飩を` (settext)。Heian 時代の唐渡来語を採用。
- **#8 #92 ar_iq:** `B:ديمبلنغ` → `B:الغيوزا` (settext)。Arabic sibling 全 7 例整合。
- **#9 #92 fa:** `B:مانتی` → `B:گیوزا` (settext)。Chinese 文脈に合致する borrowing に修正。
- **#10 #92 tl:** `B:dumplings` → `B:siyomay` (settext)。Tagalog 化。
- **#11 #92 bg:** `B:дъмплинги` → `B:кнедли` (settext)。Slavic in-family 語へ。
- **#12 #92 yo:** `B:gyoza` → `B:dumplings` (settext)。West African sibling 整合 (sw/ig pattern)。
- **#13 #92 ha:** `B:gyoza` → `B:dumpling` (settext)。同上 (単数形で sw/ig 揃え)。
- **#14 #92 es_eu:** `B:dumplings` → `B:empanadillas` (settext)。
- **#15 #92 es_mx:** `B:dumplings` → `B:wantanes` (settext)。
- **#16 #92 es_co:** `B:dumplings` → `B:empanadillas` (settext)。
- **#17 #92 es_cl:** `B:dumplings` → `B:gyozas` (settext)。es_pe/es_cu/es_an sibling pattern。
- **#18 #85 vec:** `A:Dovarìa` → `A:Ti dovarìa` (settext + allowTextChange)。subject pronoun 補完。最小変更を優先し A スロット内に compound 維持 (= sibling ca `A:Tu hauries de` と同等の表層構造)。
- **#19 #21 nl:** full-cell `replace` で `A:Ik | E:eet | D:avondeten | B:vanavond | C:met vrienden` に再構成。dinner-noun 明示分離。
- **#20 #21 vec:** full-cell `replace` で `A:Mi | E:vao a senar | D:la sena | C:co i amisi | B:stasera` に再構成。sibling sc/rm の動詞 + dinner-noun 分離 pattern に整合。
- **#21 #3 zh_han:** `E:卯時` → `E:辰時` (settext)。時辰制 off-by-one 修正。
- **#22 #3 zh_tang:** `E:卯時` → `E:辰時` (settext)。同上。
- **#23 #97 en_south:** `A:The grocery store` → `A:The supermarket` (settext)。EN sibling alignment (確信度【低】指摘だが reviewer 推奨を採用)。
- **#24 #21 oc:** `E:vòli sopar` → `E:soparái` (settext)。Occitan future 1sg に修正、Romance future aspect と整合。
- **#25 #92 sa:** `B:मोदकान्` → `B:पिष्टशकलानि` (settext)。religious sweet → savory dumpling 中性 acc.pl 形に修正。

**Notes:**
- `apply2.mjs` は `op:"add"` を サポートしないため、レビュー中の #19 / #20 の `op:"add"` 提案は `op:"replace"` (full-cell, allowTextChange:true) に書き換えて適用しました。新規 D セグメントの挿入位置は (a) #21 nl で E と B の間、(b) #21 vec で E と C の間 — sibling Italian の連語順 (動詞 → 名詞 → 状況) に倣いました。
- #18 vec #85 は `A:Ti dovarìa` の compound 形 (= 単一 A セグメントに subject + modal を保持) としました。`apply2` の display-preservation guard を `allowTextChange:true` で無効化したうえで、最小変更原則 (segment 数を増やさない) を優先しています。`A:Ti / D:dovarìa` の split 案は次ラウンドで sibling sc/rm/gl と完全 alignment するなら追加対応可能です。
- 全エディットで `allowTextChange:true` 指定 — 25 件全てが表層 text の語彙差し替えを伴うため。
- data.js は READ-ONLY 扱いで、本ラウンドの編集は `/tmp/lm_edits_96.json` のみに記述。apply 実行は orchestrator 側で。
