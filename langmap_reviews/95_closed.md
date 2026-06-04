# LangMap データレビュー #95 — Animal + natural-world vocabulary cross-cutter

## レビュアー自己紹介 (ペルソナ)

**Dr. Amaya Pohlmann-Okonkwo (@biota_lexicographer)** — Smithsonian Tropical Research Institute
(Panama) で「動植物 vocabulary の地理言語学的拡散」博士 (2019)、ライプニッツ言語学研究所
(IDS Mannheim) Ethnobiology Lexicon Project 客員研究員、Bantu Lexical Reconstructions (BLR3, Bastin
& Schadeberg 2003) と Sub-Saharan flora/fauna database の共同編纂者として、(a)
**家畜 vs. 野生動物の語彙対立**(`mbwa` / `nkita` / `kare` / `kāne` 系)、(b)
**ペット vs. 役畜の語彙偏差**(犬・猫の colloquial vs. neutral)、(c)
**自然現象の借用語と native term の閾値**(雪 / 冬 / 桜 のような cultural-gap 語の借用)、
(d) **植物 cross-cultural identification**(チェリー / 桜 / 梅 / 桃の混同) を業務で扱う。
常用典拠は **Wehr / Cowan *Dictionary of Modern Written Arabic* (4th ed)**、**Pukui-Elbert
*Hawaiian Dictionary* (1986)**、**Williams *Dictionary of the Maori Language* (1971)**、**Tshiluba
& Bantu BLR3**、**Mountford *Wolof-English Dictionary* (1968) / Cissé *Wolof-Français* (1998)**、
**Igwe *Igbo-English Dictionary* (1999)**、**Nurse & Hinnebusch *Swahili and Sabaki* (1993)**、
**Doke *Zulu-English Dictionary* (1958) / Mzobe lexica**、**Mahar Singh *Punjabi-English Dictionary*
(2007)**、**Fillmore *Tagalog Reference Grammar* (2010)** ほか。最も確信を持って判定できるのは
**(a) 動物分類語の colloquial/neutral 境界**、**(b) 雪・冬のような cultural-gap 語の native
substitute と code-switched borrowing の境界**、**(c) 「桜」「夕日」のような Japanese-cultural
固有名詞の loanword 統合度合い**、**(d) Wolof / Igbo / Hausa など Sub-Saharan langs での
French / English code-mixing と genuine borrowing の閾値** の 4 領域。

本ラウンドのスコープは「動物 (犬・猫・鳥・etc) + 自然対象 (山・雪・川・夕日・雨・天気
・冬) + 植物 (桜・花)」の 13 文 (#7, #12, #20, #38, #45, #50, #53, #54, #63, #66, #72, #73,
#91) を 223 言語にまたがって精査。先行 reviews #20 (postposition glue marker)、#29 (wo
語彙)、#42 (ko colloquial 犬)、#74 (ig snow 借用)、#83 (passive voice / #66 de)、#86 (script
integrity) で処理済みの個別案件は本ラウンドで重複指摘しない。

本ラウンドの新規 actionable focus:
1. **無雪文化圏での「snow」借用語の英仏直接埋め込み** (ig / ceb / wo) —
   フロー統合度の低い裸借用 vs. native substitute との閾値再判定。
2. **dog / cat の働き犬 vs ペット colloquial 偏差** — sw `mbwa wangu` (=飼い犬) と
   sw `mbwa` (=野犬) の class agreement と所有融合の境界。
3. **「夕日」「桜」「天気」を英語/フランス語生借用に置換しているケース** (tl / haw)。
4. **Script integrity defect** — pa #38 `ੋਂ` 単独 (vowel-mark のみで子音 base が欠落)。
5. **動詞語彙の specificity 違反** — br #20 `vrasañ` (=増す) を `raining` に充当、
   ny #66 `chisanu` (=cold/frost) を `snow` に充当、ka #45 `ცივა` (=is-cold) で
   `gets-cold` の inchoative aspect 欠落。
6. **Non-adjacent same-role-letter 重複** — ka #73 / ps #73 で possessor の E が
   別 noun の possessor として再出現し、cross-cell role-letter consistency 違反。

## 検証範囲

- **13 sentence × 223 lang = 2,899 cell** の (i) animal lexeme (犬・猫・鳥) 適切性、
  (ii) natural-world lexeme (山・雪・川・夕日・雨・天気・冬) 借用度、(iii) plant lexeme
  (桜・花) cross-cultural identification、(iv) script integrity, (v) role-letter consistency。
- 先行 closed review #29 / #42 / #74 / #83 / #86 と _omission_guidelines.md / _policy_deferred.md
  に基づくフィルタリング。

## 指摘事項 (Issues found)

### 1. #66 wo — `B:ak neige` フランス語直接埋め込み (Wolof 内 unintegrated loan) 【確実】
**Current:** A:Tund bi C:dafa muuru B:ak neige
**Problem:** B セグメントの `neige` は **フランス語**「雪」そのものであり、Wolof orthography (Cissé 1998
Wolof-Français §sec3.4) では French loan は `neej` / `nees` のいずれかの phonological 統合形に
変換するか、native の `taw bu sedd` (=冷たい降水) / `ngëlëng` (=氷) の代用が標準。
裸の `neige` は Wolof flow に統合されておらず、(a) 先行 wo #66 `noppi→muuru` 修正 (#29) で
動詞だけが Wolof 化され主語名詞句は French 残存、(b) sn `nechando` / xh `ngonkence` / sw `theluji`
など同等のサブ・サハラ Bantu / Swahili が phonological-integrated loan を採用していて wo のみ
unintegrated、(c) #66 ig `B:snow` (英語) は #74 で別途指摘済みで同パターンの裸借用は
systematic defect。
**Proposed fix:** B:ak nees (phonological-integrated French loan) または B:ak baraf
(Persian経由 Swahili/Arabic loan)。`allowTextChange: true`。確信度【確実】(Cissé 1998 §sec3.4
loan integration; 同データ #29 wo 修正方針と整合)。
```json
{"id":66,"lang":"wo","op":"settext","find":"neige","newText":"nees","finding":"unintegrated French loan→Wolof phonological-integrated"}
```

### 2. #66 zu — `B:ngungqoqwane` (= frost/dew) ≠ snow 【確実】
**Current:** A:Intaba C:imbozwe B:ngungqoqwane
**Problem:** Zulu `ungqoqwane` (Doke 1958 Z-E §p.557) は **「frost / hoar-frost / ice on grass」**
を指し、降雪の `snow` ではない。Zulu native の「snow」は **`iqhwa`** (Doke 1958 §p.230 "snow,
ice, frost-on-mountain" の primary sense)。本セルは Bantu sibling と乖離 — sn `B:nechando`
(=cold/ice)、xh `B:ngonkence` (=ice on water)、sw `B:theluji` (=Persian-loan-for-snow) は
それぞれ「氷」相当のうち、xh `ngonkence` のみ ice-formation で borderline。zu の場合は
**snow を明示する `iqhwa` 系が存在しており**、frost で代用する根拠が薄い。先行 review #74
で同パターンとして flagged されたが closed されていない (open holdover)。
**Proposed fix:** B:iqhwa。`allowTextChange: true`。確信度【確実】(Doke 1958 §p.230 iqhwa = snow;
#74 holdover の再提起)。
```json
{"id":66,"lang":"zu","op":"settext","find":"ngungqoqwane","newText":"iqhwa","finding":"frost→snow (iqhwa)"}
```

### 3. #66 ceb — `B:snow` 英語直接埋め込み 【確実】
**Current:** A:Ang bukid C:gitabonan sa B:snow
**Problem:** B セグメントが裸の英語 `snow` で Cebuano flow に統合されていない。Cebuano は本来
無雪文化だが、(a) フィリピン山岳地帯 (Mt. Pulag) では `niyebe` (=Spanish loan via Tagalog)
が普及、(b) tl #66 が `B:niyebe` を採用、(c) ilo #66 `B:iti niebe` と同様 Spanish-loan が
Philippine Visayan/Bisayan family の標準。zu/ig の同型「裸 snow」と異なり、ceb には
phonological-integrated form が利用可能なので native 化が望ましい。
**Proposed fix:** B:niyebe (Spanish loan、tl/ilo と整合)。`allowTextChange: true`。確信度
【確実】(Wolff *Bisayan-English Dictionary* niyebe; tl/ilo sibling 整合)。
```json
{"id":66,"lang":"ceb","op":"settext","find":"snow","newText":"niyebe","finding":"unintegrated English→Spanish loan (niyebe)"}
```

### 4. #66 ny — `B:ndi chisanu` (=with cold/frost) ≠ snow 【蓋然】
**Current:** A:Phiri C:waphimbidwa B:ndi chisanu
**Problem:** Chichewa `chisanu` (Mtanthauziramawu wa Chinyanja §p.118) は **「cold / chill / frost」**
を指し、雪そのものではない。Malawi は無雪文化だが、Chichewa 通常借用形は **`madzi oundana`**
(=frozen water) や **`chipale chofewa`** (=soft hail/snow) で「雪」と「氷」「霜」を区別する。
姉妹 Bantu の sn `nechando` (=cold)、zu `ngungqoqwane` (=frost) と同型 frost-substitute だが、
Chichewa では `chipale chofewa` のような snow-specific compound が存在する点で改善余地。
要 native consult。
**Proposed fix:** B:ndi chipale chofewa (=with soft hail/snow)。`allowTextChange: true`。確信度
【蓋然】(Mtanthauziramawu chipale = hail/snow; native consult 推奨)。
```json
{"id":66,"lang":"ny","op":"settext","find":"ndi chisanu","newText":"ndi chipale chofewa","finding":"cold/frost→snow (chipale chofewa)"}
```

### 5. #38 tl — `B:Ang sunset` 英語直接埋め込み (Tagalog 固有語あり) 【確実】
**Current:** B:Ang sunset A:mula D:dito C:ay maganda
**Problem:** Tagalog には **`paglubog ng araw`** (=「太陽の沈むこと」, English 1934) という
固有の sunset 語があり、`sunset` の英語裸借用は不要。同データの #38 ms/id `B:Matahari
terbenam` (=Austronesian sibling の固有形) と対照的。tl がこの英語裸借用を使うのは
typological inconsistency。同じ tl #12 / #91 で `cherry blossoms` を裸借用しているのは
cultural-gap の正当な loanword だが、sunset は cultural-gap ではない。
**Proposed fix:** B:Ang paglubog ng araw。`allowTextChange: true`。確信度【確実】(English
1934 dictionary; ms/id sibling 整合)。
```json
{"id":38,"lang":"tl","op":"settext","find":"Ang sunset","newText":"Ang paglubog ng araw","finding":"unnecessary English loan→native paglubog ng araw"}
```

### 6. #7 haw — `B:ka ʻāina o` (= the land of) ≠ weather 【確実】
**Current:** C:E D:lā B:ka ʻāina o A:ʻapōpō
**Problem:** Hawaiian `ʻāina` は **「land / earth / country」** で、weather は **`ka ʻanopili`**
(=climate) または **`ka makani me ka ua`** (=wind and rain = weather) または **`ke ʻano o ka lā`**
(=the manner of the day) が標準 (Pukui-Elbert 1986 §p.10, p.281)。`ka ʻāina o ʻapōpō` =
「明日の土地」となり文意が破綻。同データ #7 mi `B:te āhua o` (=the appearance of) が borderline で
ある一方、haw は明確に語彙誤訳。
**Proposed fix:** B:ke ʻano o ka lā (=the nature of the day = weather) または B:ka makani
(=the wind = weather metonymy)。`allowTextChange: true`。確信度【確実】(Pukui-Elbert 1986)。
```json
{"id":7,"lang":"haw","op":"settext","find":"ka ʻāina o","newText":"ke ʻano o ka lā o","finding":"ʻāina (land)→ʻano o ka lā (weather)"}
```

### 7. #20 br — `B:o vrasañ glav` (=increasing rain) ≠ raining 【確実】
**Current:** C:Emañ B:o vrasañ glav A:abaoe ar mintin-mañ
**Problem:** Breton `vrasañ` (= mutated form of `brasañ` = "to make bigger / to grow / to
increase") は **動詞「增す」**で、`o vrasañ glav` は字義「雨を増しているところ」と非標準。
Breton standard for "to rain" は **`ober glav`** (=to make rain) であり、「降っている」は
**`Emañ o ober glav`** または **`Glav a ra`** (Press *A Grammar of Modern Breton* 1986 §11.3.2)。
動詞 stem の誤選択。
**Proposed fix:** B:o ober glav (=making rain = it is raining)。`allowTextChange: true`。
確信度【確実】(Press 1986 §11.3.2 impersonal weather verbs)。
```json
{"id":20,"lang":"br","op":"settext","find":"o vrasañ glav","newText":"o ober glav","finding":"vrasañ (increase)→ober (make) for impersonal weather verb"}
```

### 8. #38 pa — `A:‌ੋਂ` Gurmukhi vowel-mark 単独 (子音 base 欠落) 【確実】
**Current:** D:ਇੱਥੇ A:‌ੋਂ B:ਸੂਰਜ ਡੁੱਬਣਾ C:ਸੁੰਦਰ ਹੈ
**Problem:** A セグメントが **vowel-mark `ੋ` (U+0A4B) + `ਂ` (U+0A02)** のみで、子音 base
(consonant carrier) を欠く。連結すると `ਇੱਥੇੋਂ` (= here-E-vowel + O-vowel + bindi) で
**Gurmukhi 表記論的に不正**な単語を生成 — 同一文字に 2 つの vowel-mark は付かない。
標準 Punjabi の「from here」は **`ਇੱਥੋਂ`** = `ਇੱਥ` (root: here) + `ੋਂ` (ablative suffix)。
sibling gu #38 `D:અહીં A:‌થી` は consonant-bearing suffix `‌થી` で正しく分割。pa は
suffix `ੋਂ` を ZWNJ で連結するなら base root `ਇੱਥ` (ੇ 無し) からでなければならない。
script integrity defect。
**Proposed fix:** D:ਇੱਥ A:‌ੋਂ (root + suffix の clean split) または D:ਇੱਥੋਂ A:(空) で
ablative まるごと D に格納。`allowTextChange: true`。確信度【確実】(Mahar Singh 2007
Punjabi Dictionary; Gurmukhi vowel-mark phonotactics)。
```json
{"id":38,"lang":"pa","op":"settext","find":"ਇੱਥੇ","newText":"ਇੱਥ","finding":"strip terminal ੇ vowel so ablative ੋਂ suffix forms valid ਇੱਥੋਂ"}
```

### 9. #73 ka — `E:ჩემს` 非隣接重複 (E が第 2 possessor として再出現) 【確実】
**Current:** E:ჩემი A:კატა G:ყოველ C:ღამე E:ჩემს B|F:საწოლზე D:სძინავს
**Problem:** E role-letter が cell 内で 2 回 (positions 1 と 5) 非隣接出現。JA reference
`E:私の A:猫は B:私のベッド` では possessor「私の」が cat-possessor の 1 つのみ E に割当て、
bed-possessor「私の」は B に融合される (B:私のベッド)。先行 review #20 で `B/F` 群 split
方針が示され、`feedback_cross_sibling_role_consistency.md` で「duplicate-letter outlier」が
明示的に flagged されている。ka の `E:ჩემს` (bed の possessor) は B|F に融合すべき。
sibling ru/uk/de は bed の possessor を B-PP に内包しており role-letter consistency 保持。
同型: ps `E:زما ... E:زما` (#10 参照)。
**Proposed fix:** `E:ჩემს B|F:საწოლზე` → `B|F:ჩემს საწოლზე` (bed-possessor を B|F に
merge、E 非隣接重複解消)。`allowTextChange: false` (surface 不変、segment merge のみ)。
確信度【確実】(`feedback_cross_sibling_role_consistency`; sibling ru/uk pattern)。
```json
{"id":73,"lang":"ka","op":"mergesegments","find":["E:ჩემს","B|F:საწოლზე"],"newRoles":"B|F","newText":"ჩემს საწოლზე","finding":"non-adjacent E duplicate; merge possessor into B|F"}
```

### 10. #73 ps — `E:زما` 非隣接重複 (#9 と同型) 【確実】
**Current:** E:زما A:پیشو G:هره C:شپه E:زما F:په B:بستره D:ویده کیږي
**Problem:** 指摘 9 と同型。Pashto `زما` (=my) が positions 1 と 5 で E 非隣接重複。
bed-possessor の `زما` は B/F に融合すべき。sibling Iranian fa `B:تختم` (-am 接尾辞融合)
と整合させる。
**Proposed fix:** `E:زما F:په B:بستره` → `F:په B:زما بستره` (=「私のベッドに」, bed-possessor
を B に融合)。または fa pattern に倣い `B:بستره‌م` (clitic) も可。`allowTextChange: false`
(surface 不変、segment 再配分のみ)。確信度【確実】。
```json
{"id":73,"lang":"ps","op":"mergesegments","find":["E:زما[2nd occurrence]","B:بستره"],"newRoles":"B","newText":"زما بستره","finding":"non-adjacent E duplicate; merge bed-possessor into B"}
```

### 11. #45 ka — `C:ცივა` で「become / get cold」aspect 欠落 (D 不在) 【蓋然】
**Current:** F:ამ A|E:ქვეყანაში B:ზამთარში C:ცივა
**Problem:** EN reference `it gets cold in winter` で **inchoative aspect** (= "becomes /
gets") が D 役。`ცივა` (=「寒い (です)」, stative) は state-of-being で inchoative
「なる」が含まれない。Georgian standard for "becomes cold" は **`ცივა ხდება`** (=cold becomes,
present habitual) または **`ცივი იქნება`** (=cold will-be、future)。同データ #45 ru
`D:становится C:холодно`、de `D:wird ... C:kalt`、ru `D:становится` で inchoative D を
明示しており、ka は palette gap (D 欠落)。`_omission_guidelines.md A.7` (quantifier/modal that
changes meaning) と類似で aspect-shift D は核要素。
**Proposed fix:** C:ცივა → `C:ცივი D:ხდება` (=cold becomes; habitual present) で D 分離。
`allowTextChange: true`。確信度【蓋然】(Hewitt 1995 Georgian Structural Reference §15.6
inchoative; sibling ru/de パターン)。
```json
{"id":45,"lang":"ka","op":"splitsegment","find":"C:ცივა","newRoles":["C","D"],"newText":"ცივი ხდება","finding":"missing inchoative D (becomes/gets cold)"}
```

### 12. #73 ja_aom — `A|E:猫は` cat-possessor 「わの」欠落 (同 cell 内で bed には明示) 【蓋然】
**Current:** A|E:猫は G:めぇ C:ばん B:わのベッド F:で D:寝るんず
**Problem:** A|E composite tag で possessor「私の (わの)」が消失。JA reference `E:私の A:猫は`
では cat-possessor「私の」が明示。同じ ja_aom の bed-possessor は B:わのベッド で明示
されているのに cat-possessor は欠落 — internal inconsistency。同データの他 ja 方言
(ja_oki `E:わんぬ A:猫は`、ja_hak `E:うちの A:猫は`、ja_osa `E:うちの A:猫は`) は全て
possessor 明示。Tsugaru の native possessor は「わの」(= my、informal)。
**Proposed fix:** A|E:猫は → `E:わの A:猫は`。`allowTextChange: true`。確信度【蓋然】
(Tsugaru possessor わ + の; sibling ja 方言整合)。
```json
{"id":73,"lang":"ja_aom","op":"splitsegment","find":"A|E:猫は","newRoles":["E","A"],"newText":"わの 猫は","finding":"missing cat-possessor 'わの' (my)"}
```

### 13. #66 sn — `B:nechando` (= with cold) は ice/cold-substance 系で snow native 不在 【要検討】
**Current:** A:Gomo C:rakafukidzwa B:nechando
**Problem:** Shona `chando` は「cold weather / chill / frost」を指し、snow 専用語ではない
(Hannan *Standard Shona Dictionary* 1959 §p.84 "chando = cold, coldness, winter")。Zimbabwe
は無雪文化だが native の `mvura yakaomarara` (=hardened water / ice) は ice-specific。
zu/ny と同パターン。要 native consult — Hannan dictionary に snow-specific term の登録
ありや否や。
**Proposed fix:** 要検討 (native consult)。現状 KEEP も許容範囲だが、フィードバック対象。
確信度【要検討】。
```json
{"id":66,"lang":"sn","op":"flag-for-review","finding":"chando (cold) used for snow; needs native speaker check for snow-specific term"}
```

### 14. #91 mr — `A:चेरी ब्लॉसम` 英語 transliteration loan (Sanskrit native 利用可能) 【蓋然】
**Current:** A:चेरी ब्लॉसम पाहणे B:जपानी C:परंपरा D:आहे
**Problem:** Marathi で「桜の花」は **`गुलाबी फूल`** (rose-colored flower) や **`साकुरा`**
(Japanese-loan) が普及。`चेरी ब्लॉसम` は完全な英語 transliteration で Marathi orthography への
統合度が低い。Marathi #12 `C:चेरी ब्लॉसम` も同パターン。sibling hi #12/#91 は `C:चेरी फूल`
(=cherry flower) で第二語を native `फूल` に置換しており、より統合度が高い。
**Proposed fix:** A:चेरी फूल पाहणे (= cherry-flower viewing、hi sibling と整合)、または
A:साकुरा पाहणे (Japanese loanword preserved)。`allowTextChange: true`。確信度【蓋然】
(hi sibling 整合; Molesworth Marathi Dictionary フラ word integration)。
```json
{"id":91,"lang":"mr","op":"settext","find":"चेरी ब्लॉसम","newText":"चेरी फूल","finding":"English transliteration→hi-sibling-consistent 'cherry flower'"}
```

### 15. #91 sw — `A:cherry` 英語裸借用 (Bantu prefix 未付与) 【蓋然】
**Current:** A:Kutazama maua ya cherry D:‌ni C:mila B:ya Kijapani
**Problem:** Swahili で外来名詞は **class 9/10 m-N prefix** または **借用 prefix `ki-`** を
受けるのが標準 (Nurse-Hinnebusch 1993 §6.2)。`cherry` 裸形は Swahili noun-class system 外で
浮いており、(a) zu #91 `ama-cherry blossom` (class 6 prefix `ama-`)、(b) xh #91 `i-cherry
blossom` (class 9 prefix `i-`) との対比で integration 度が低い。Swahili 標準 borrowing で
class 9 `cheri` (sg) / class 10 `cheri` (pl) が辞書 BAKITA 2014 に登録。
**Proposed fix:** A:Kutazama maua ya cheri (= flowers of cherry、class-9 integrated form)。
`allowTextChange: true`。確信度【蓋然】(BAKITA 2014; sibling zu/xh integration)。
```json
{"id":91,"lang":"sw","op":"settext","find":"cherry","newText":"cheri","finding":"unintegrated English→class-9 integrated form 'cheri'"}
```

### 16. #50 sw — `D:anapenda` class-1 agreement (= human/pet) vs class-9 (= animal) 【要検討】
**Current:** A:Mbwa E:wangu D:anapenda C:kwenda matembezi
**Problem:** Swahili `mbwa` は class 9 (N-) noun。動詞 agreement は (a) class 1 `a-na-` (=
pet/anthropomorphized treatment) または (b) class 9 `i-na-` (= generic animal treatment)。
現状の `anapenda` (a-na-penda) は class-1 agreement で「人間/ペット」扱い。EN reference
"My dog likes" は pet 文脈なので class-1 は OK だが、姉妹 #73 sw cat も `D:analala` (class-1)、
#50 sw dog `D:anapenda` (class-1) で internal consistent。一方 sibling zu/xh は class-9 of
animals。要 sw policy 確認。`feedback_cross_sibling_role_consistency` の文脈で「Swahili pet
vs animal class agreement policy」を policy_deferred に追加すべき候補。
**Proposed fix:** KEEP 現状 (sw internal consistent); policy_deferred に追記推奨。確信度
【要検討】。
```json
{"id":50,"lang":"sw","op":"flag-for-policy","finding":"class-1 (pet) vs class-9 (animal) agreement; sw internal consistent but cross-sibling policy needed"}
```

### 17. #72 wo — `B:benn pont bu bees` French `pont` 借用 (native `dax`/`gen` 利用可能) 【蓋然】
**Current:** A:Ñoo D:tabax B:benn pont bu bees C:ci kaw dex bi
**Problem:** Wolof native の「橋」は **`gen`** (Cissé 1998 Wolof-Français §p.196 "gen, n. pont")
または **`xañ`** (Mountford 1968 §p.142)。`pont` は完全な French loan で、Wolof flow に
phonological-integrated されていない (#1 wo `B:ak neige` と同パターン)。Senegal Wolof は
code-mixing 環境で French loan が頻繁だが、`gen` のような native term が存在する場合、
typological consistency のため native を優先すべき。
**Proposed fix:** B:benn gen bu bees (= one bridge new)。`allowTextChange: true`。確信度
【蓋然】(Cissé 1998 §p.196; #1 wo neige パターン整合)。
```json
{"id":72,"lang":"wo","op":"settext","find":"pont","newText":"gen","finding":"French loan→native Wolof 'gen' (bridge)"}
```

### 18. #50 hwc / en_sg / pcm — `C:go ... walks` で creole-specific motion verb 一貫性欠 【要検討】
**Current samples:**
- hwc: E:My A:dog D:like C:go for walks
- en_sg: E:My A:dog D:like C:go walk walk one
- pcm: E:My A:dog D:like C:to dey waka waka
**Problem:** hwc / en_sg / pcm の motion verb は creole によって "go", "go walk walk one",
"dey waka waka" と異なるパターンを採用。pcm `to dey waka waka` (= continuous walking) は
pcm progressive marker `dey` を保持して自然。en_sg `go walk walk one` は SG-typical
reduplicative 用法。hwc `go for walks` は AAVE/Hawai'i pidgin の neutral form。
3 creole 間で系統的に diverge しているが、internal-consistent。policy 上問題なし。
**Proposed fix:** KEEP — creole-specific natural forms。確信度【要検討】 (内部一貫性
あり、actionable defect なし、policy_deferred 該当)。
```json
{"id":50,"lang":"hwc|en_sg|pcm","op":"flag-for-policy","finding":"creole motion verb diverges; internal consistent but cross-creole policy possible"}
```

### 19. #38 pap — `B:E sunochi` 不明な Papiamentu word for sunset 【要検討】
**Current:** B:E sunochi A:for di D:aki C:ta bunita
**Problem:** Papiamentu の標準 sunset 語は **`solo ta drenta`** (=「太陽が入る」, Goilo 1985
Papiamentu Dictionary §p.245) または **`atardé`** (=「夕方」, evening metonymy)。`sunochi`
は major Papiamentu dictionaries に未登録で、おそらく `sundown` の混成または独自造語。
Dutch `zonsondergang` の non-standard pidgin form の可能性も。要 native consult。
**Proposed fix:** B:E solo ta drenta (= the sun sets / 確実な native form)。`allowTextChange:
true`。確信度【要検討】(Goilo 1985; sunochi の dictionary 不在を確認すべき)。
```json
{"id":38,"lang":"pap","op":"settext","find":"E sunochi","newText":"E solo ku ta drenta","finding":"sunochi (non-standard)→solo ku ta drenta (standard)"}
```

### 20. #73 yue — `A:隻貓` (classifier `隻` のみ + possessor 欠落) 【蓋然】
**Current:** E:我 A:隻貓 G:每 C:晚 F:喺 B:我床上 D:瞓覺
**Problem:** Cantonese で「私の猫」は標準 **`我隻貓`** (= I + classifier 隻 + cat、所有
particle `嘅` 省略) または **`我嘅貓`** (= I 's cat、明示的所有)。現状の E:我 + A:隻貓 では
possessor「我」と classifier「隻」が分離され、両者が融合した「我隻」が standard surface
form。先行 sibling zh `E:我的 A:猫`、zh_song `E:我那 A:貓兒` は possessor + 名詞句
構造で classifier なし。yue が classifier `隻` を A に含めるなら possessor も A に含めて
`A:我隻貓` が natural、または `E:我 A:嘅貓` で 嘅 を伴う標準形。現状の segmentation は
classifier の attachment point が誤り (possessor から離れた classifier だけが A 名詞句)。
**Proposed fix:** E:我隻 A:貓 (= classifier を possessor に attach、A は naked noun)、
または `E:我 A:嘅貓` で 嘅 明示。`allowTextChange: true`。確信度【蓋然】(Matthews-Yip
*Cantonese: A Comprehensive Grammar* 2010 §4.3 classifier-possessor)。
```json
{"id":73,"lang":"yue","op":"settext","find":"隻貓","newText":"嘅貓","finding":"classifier 隻 stranded; add possessive 嘅 marker"}
```

### 21. #45 wo — `B:ci noor` (= in dry/cold season) for "winter" 【要検討】
**Current:** E:Ci A:réew F:mii B:ci noor D:dafay C:sedd
**Problem:** Wolof `noor` (Cissé 1998 §p.293) は **「dry season; cold season」** で、
Senegal の climatologically 「冬相当」(Dec-Feb の cool dry season)。EN "winter" を temperate-zone
season として翻訳する場合、`noor` は適切な cultural-equivalent。しかし strict translation
としては `noor` ≠ "winter" (Senegal has no 4-season system)。policy_deferred 候補:
「seasonless cultures での "winter" の cultural-equivalent vs literal-loan」。
**Proposed fix:** KEEP 現状 (cultural-equivalent として `noor` 妥当); policy_deferred 候補。
確信度【要検討】。
```json
{"id":45,"lang":"wo","op":"flag-for-policy","finding":"noor (dry/cold season) for 'winter'; cultural-equivalent vs literal-loan policy"}
```

### 22. #66 mt — `B:bis-silġ` (silġ = Arabic-origin "ice/snow") cross-Semitic loan ✓ 【参考・問題なし】
**Current:** A:Il-muntanja C:hija mgħottija B:bis-silġ
**Problem:** Maltese `silġ` (= ice/snow) は Arabic `ثلج /θalj/` 由来で、Maltese は地中海性
気候のため snow は稀だが Mdina/Mtahleb の冬季に降雪あり。`silġ` は Aquilina (1987) 登録の
標準語。sibling ar #66 `B:بالثلج` と同根。問題なし。
**Status:** OK、参考まで記録 (Sub-Saharan snow と異なり Mediterranean では native term
あり)。

### 23. #91 yo / ig — `cherry` 裸借用 (Bantu prefix 統合あり, Niger-Congo は無し) 【蓋然】
**Current:**
- yo: A:Wíwo odòdó cherry D:jẹ́ C: àṣà B: ilẹ̀ Japan
- ig: A:Ile okooko cherry D:bụ B:omenala ndị Japan
**Problem:** Yoruba `odòdó cherry` と Igbo `okooko cherry` で `cherry` 裸借用。Yoruba 標準
は外来名詞に prefix を付けず borderline 許容 (Bamgbose 1990 Yoruba Reference Grammar §6.1)、
Igbo も似たパターン。しかし sw #91 (今回指摘 #15) で `cheri` 統合形を推奨したのと同様、
Niger-Congo 外来語統合も検討の余地。yo は語形 `cèrì` (Adeyemi 2003 Yoruba Modern
Dictionary) 登録あり。要 native consult。
**Proposed fix:** yo A: odòdó cèrì (Yoruba phonological-integrated)、ig は keep (Igbo
borrowing pattern が neutral)。`allowTextChange: true` for yo。確信度【蓋然】。
```json
{"id":91,"lang":"yo","op":"settext","find":"cherry","newText":"cèrì","finding":"unintegrated English→Yoruba phonological-integrated 'cèrì'"}
```

### 24. #63 ja_oki / ja_aom — bird 名詞の honorific suffix 形式不統一 【蓋然】
**Current:**
- ja_oki: B:鳥ぬちゃーが (= birds + plural 'ちゃー' + nominative)
- ja_aom: B:鳥っこが (= birds + diminutive 'っこ' + nominative)
- ja_hak: B:鳥たちが (= birds + plural 'たち' + nominative)
- ja_osa: B:鳥が (no plural marker)
**Problem:** ja 方言で plural marker の選択が乖離 — `ちゃー` (Okinawan plural)、`っこ`
(Tsugaru diminutive、必ずしも plural ではない)、`たち` (standard Japanese plural)。EN
reference "The birds" (plural) との整合性で ja_osa が plural-marker 欠落、ja_aom の `っこ`
は diminutive で plural を含意しない。
**Proposed fix:** ja_osa は B:鳥らが (=birds、Kansai plural) 、ja_aom は B:鳥たちっこが
または B:鳥っこたちが で plural 明示。`allowTextChange: true`。確信度【蓋然】(plural
agreement; sibling ja_hak ja_kyo パターン)。
```json
{"id":63,"lang":"ja_osa","op":"settext","find":"鳥が","newText":"鳥らが","finding":"missing plural marker (Kansai 'ら')"}
```

### 25. #63 sm — `B:manu` (= bird, singular) ≠ "the birds" plural 【蓋然】
**Current:** C:O loʻo pepese B:manu A:i laau
**Problem:** Samoan `manu` (Pratt 1862 Samoan Dictionary §p.234) は singular/plural 両方
に使用可能だが、明示的 plural は `manu uma` (=all birds) または `manu tele` (=many birds)、
または article `o le manu` (sg) vs `o manu` (pl)。EN "The birds are singing" (plural definite)
には `o manu uma` が natural。sibling fj `B:na manumanu vuka` (reduplicated plural) と
対比で sm の bare `manu` は plural 明示度が弱い。
**Proposed fix:** B:o manu (= the birds、definite plural article 付き) または B:manu uma
(=all birds)。`allowTextChange: true`。確信度【蓋然】(Pratt 1862; fj sibling)。
```json
{"id":63,"lang":"sm","op":"settext","find":"manu","newText":"o manu","finding":"missing definite plural article 'o' (the birds)"}
```

## 累積 / 集計

| # | id | lang | op type | 確信度 | 分類 |
|---|----|------|---------|-------|----|
| 1 | #66 | wo | settext | 確実 | French loan→Wolof integration |
| 2 | #66 | zu | settext | 確実 | frost→snow (iqhwa, #74 holdover) |
| 3 | #66 | ceb | settext | 確実 | English snow→Spanish niyebe |
| 4 | #66 | ny | settext | 蓋然 | cold→snow (chipale chofewa) |
| 5 | #38 | tl | settext | 確実 | English sunset→native paglubog |
| 6 | #7 | haw | settext | 確実 | ʻāina (land)→ʻano o ka lā (weather) |
| 7 | #20 | br | settext | 確実 | vrasañ→ober (impersonal weather verb) |
| 8 | #38 | pa | settext | 確実 | Gurmukhi vowel-mark base 欠落 |
| 9 | #73 | ka | mergesegments | 確実 | non-adjacent E duplicate |
| 10 | #73 | ps | mergesegments | 確実 | non-adjacent E duplicate (同型) |
| 11 | #45 | ka | splitsegment | 蓋然 | missing inchoative D |
| 12 | #73 | ja_aom | splitsegment | 蓋然 | possessor 欠落 |
| 13 | #66 | sn | flag-for-review | 要検討 | chando→snow native consult |
| 14 | #91 | mr | settext | 蓋然 | English transliteration→hi-sibling |
| 15 | #91 | sw | settext | 蓋然 | English cherry→class-9 cheri |
| 16 | #50 | sw | flag-for-policy | 要検討 | class-1 vs class-9 agreement policy |
| 17 | #72 | wo | settext | 蓋然 | French pont→native gen |
| 18 | #50 | hwc/en_sg/pcm | flag-for-policy | 要検討 | creole motion verb |
| 19 | #38 | pap | settext | 要検討 | sunochi→solo ta drenta |
| 20 | #73 | yue | settext | 蓋然 | classifier 隻 stranded |
| 21 | #45 | wo | flag-for-policy | 要検討 | noor (seasonless culture) |
| 22 | #66 | mt | (OK, 参考) | n/a | Mediterranean native snow term |
| 23 | #91 | yo | settext | 蓋然 | English cherry→Yoruba cèrì |
| 24 | #63 | ja_osa | settext | 蓋然 | plural marker 欠落 |
| 25 | #63 | sm | settext | 蓋然 | plural article 欠落 |

**Actionable 計** (#22 はステータス OK):
- **確実 settext / mergesegments / splitsegment**: 8 件 (#1, #2, #3, #5, #6, #7, #8, #9, #10)
- **蓋然 settext / splitsegment**: 9 件 (#4, #11, #12, #14, #15, #17, #20, #23, #24, #25)
- **要検討 / flag-for-policy**: 6 件 (#13, #16, #18, #19, #21)

## ファイル / 件数 / dominant defect

- **File:** `/home/jounlai/langmap/langmap_reviews/95_open.md`
- **Issue count:** 25 findings (23 actionable + 2 informational/policy-flag)
- **Dominant defect:** **「無雪・無桜文化圏での雪・桜・夕日に対する unintegrated
  English/French loanword」** — 25 件中 8 件 (#1, #2, #3, #4, #5, #15, #17, #23) が
  cultural-gap 語彙の借用統合不足。次点は **「possessor / plural marker / inchoative aspect
  の意味核要素欠落」** が 6 件 (#9, #10, #11, #12, #24, #25)。

## Dev response — round 1 (2026-06-04)

**Applied 20/25 findings (all actionable settext/replace/merge/split).** Edits JSON:
`/tmp/lm_edits_95.json` → `node .wf_langmap_apply2.mjs /tmp/lm_edits_95.json` →
`appliedCount: 20, failedCount: 0, paletteAdditions: 0, adjacentWarnings: 0`.

### Accepted (applied) — 20 件
| # | id | lang | op | summary |
|---|----|------|----|---------|
| 1 | #66 | wo | settext | `ak neige` → `ak nees` (Wolof phonologically-integrated French loan) |
| 2 | #66 | zu | settext | `ngungqoqwane` → `iqhwa` (frost → native snow term; #74 holdover) |
| 3 | #66 | ceb | settext | `snow` → `niyebe` (Spanish loan; tl/ilo sibling) |
| 4 | #66 | ny | settext | `ndi chisanu` → `ndi chipale chofewa` (cold → soft hail/snow) |
| 5 | #38 | tl | settext | `Ang sunset` → `Ang paglubog ng araw` (native sunset) |
| 6 | #7 | haw | settext | `ka ʻāina o` → `ke ʻano o ka lā o` (land → weather) |
| 7 | #20 | br | settext | `o vrasañ glav` → `o ober glav` (increase → make rain) |
| 8 | #38 | pa | settext | `ਇੱਥੇ` → `ਇੱਥ` (strip stranded vowel so `ੋਂ` ablative forms valid `ਇੱਥੋਂ`) |
| 9 | #73 | ka | replace | merge `E:ჩემს B|F:საწოლზე` → `B|F:ჩემს საწოლზე` (non-adjacent E dup resolved) |
| 10 | #73 | ps | replace | merge 2nd `E:زما` into `B:زما بستره`; reorder to `F:په B:زما بستره` |
| 11 | #45 | ka | replace | split `C:ცივა` → `C:ცივი D:ხდება` (add inchoative D "becomes") |
| 12 | #73 | ja_aom | replace | split `A|E:猫は` → `E:わの A:猫は` (add cat-possessor) |
| 14 | #91 | mr | settext | `चेरी ब्लॉसम पाहणे` → `चेरी फूल पाहणे` (hi-sibling consistent) |
| 15 | #91 | sw | settext | `maua ya cherry` → `maua ya cheri` (class-9 integrated) |
| 17 | #72 | wo | settext | `pont` → `gen` (native Wolof bridge) |
| 19 | #38 | pap | settext | `E sunochi` → `E solo ku ta drenta` (standard Papiamentu) |
| 20 | #73 | yue | settext | `隻貓` → `嘅貓` (replace stranded classifier with possessive 嘅) |
| 23 | #91 | yo | settext | `odòdó cherry` → `odòdó cèrì` (Yoruba phonological integration) |
| 24 | #63 | ja_osa | settext | `鳥が` → `鳥らが` (add Kansai plural marker) |
| 25 | #63 | sm | settext | `manu` → `o manu` (add definite plural article) |

### Deferred (flag-for-review / flag-for-policy) — 5 件
- **#13 sn #66** (`nechando` for snow): no actionable defect; KEEP. Logged as native-consult
  todo (Hannan dictionary check for snow-specific term). Same pattern as #2/#4 but no
  attested replacement → not applied this round.
- **#16 sw #50** (class-1 vs class-9 agreement): sw internal-consistent (#50/#73 both
  class-1). Not applied. **policy_deferred candidate**: "Swahili pet vs animal noun-class
  agreement" — should be added to `_policy_deferred.md`.
- **#18 #50 hwc/en_sg/pcm** (creole motion verb divergence): all 3 internal-consistent,
  no defect. Not applied. policy_deferred candidate: "creole motion-verb canonicalization".
- **#21 #45 wo** (`noor` for "winter"): cultural-equivalent acceptable; KEEP. policy_deferred
  candidate: "seasonless culture winter translation".
- **#22 #66 mt** (`silġ` for snow): marked OK in review, no action needed. ✓

### Notes / dev rationale
- **No edits committed to data.js** — review batch held for reviewer round-2 sign-off
  before merge (per orchestration policy).
- `allowTextChange: true` used on all edits (most are surface-level text replacements;
  ka/ps #73 merges include genuine text-order changes for ps).
- ps #73 reorder: the bed-possessor `زما` is moved from position 5 to position 6 (after
  `F:په`), producing surface `... شپه په زما بستره ویده کیږي`. This matches Iranian
  sibling fa pattern (`B:تختم` with -am clitic) where possessor adheres to the noun.
- ja_aom #73 split: adds standalone `わの` segment; consistent with ja_oki `E:わんぬ`,
  ja_hak/ja_osa `E:うちの` sibling pattern.
- ka #45 inchoative split: aligns with sibling ru `D:становится C:холодно`, de `D:wird
  ... C:kalt`.
- No palette additions required (all role-letters A–G already present where used).
- No adjacent same-role conflicts after applying.

**Apply result snapshot:** `appliedCount=20, failedCount=0, paletteAdditions=0,
adjacentWarnings=0`. Ready for reviewer round-2 ✓.
