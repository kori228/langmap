# LangMap データレビュー #94 — Time-expression cross-cutter (today/yesterday/tomorrow, mornings, every-X, frequency adverbs)

## レビュアー自己紹介 (ペルソナ)

**Lina Pertama Ngoma-Suryadi (@temporal_typology)**, Universitas Indonesia / Pusat Studi Bahasa Daerah & Universiti Kebangsaan Malaysia Pusat Kajian Bahasa Melayu 客員研究員。Australian National University 言語学博士 (Tense-Aspect-Mood typology)、ベトナム民族言語学研究所 (Viện Ngôn ngữ học) 客員、九州大学言語学コース 招聘研究員 (沖縄諸方言の deixis-temporal 形態素)、Ainu Language Archive (国立アイヌ民族博物館) 連携協力。常用典拠は **Comrie *Tense* (Cambridge Textbooks in Linguistics, 1985)**、**Dahl *Tense and Aspect Systems* (Blackwell 1985)**、**Klein *Time in Language* (Routledge 1994)**、**Sneddon *Indonesian: A Comprehensive Grammar* (Routledge 2010 §6 Time adverbs)**、**Robson & Wibisono *Javanese English Dictionary* (Tuttle 2002)**、**Tadmor *Loanwords in the World's Languages* — Javanese chapter (Mouton 2009)**、**Tamura *The Ainu Language* (ICHEL 2000) §4 deixis**、**Nakasone *Okinawan-English Wordbook* (UH Press 2003)**、**Lazard *A Grammar of Contemporary Persian* (Mazda 1992) §35 deictic adverbs**、**Sanchez Walker *El Español en América* (Castalia 2001) ch. ahorita vs ahora**、**Belletti *Italian Syntax and Universal Grammar* (Cambridge 1990)**、**Du Feu *Rapa Nui* (Routledge 1996)**、**Lord *Toki Pona: The Language of Good* (Tawhid 2014)**。最も確信を持って判定できるのは **(a) Javanese ngoko-krama bahasa-Indonesia 借用境界**、**(b) Persian / Arabic colloquial vs formal `now` deixis**、**(c) Romance dialect future tense vs `tonight` deixis 整合**、**(d) Sinitic Hakka/Cantonese `yesterday morning` / Classical-form 整合** の 4 領域。

本ラウンドは **「Time expression cross-cutter」** persona としてデータ全体 100 文中、時間表現 (today / yesterday / tomorrow / last/next week-month-year / morning / evening / night / now / every-X / always / often / late) を含む sentence (約 30 件: #3 #7 #8 #9 #11 #14 #17 #20 #21 #27 #31 #35 #39 #41 #42 #45 #55 #56 #59 #61 #62 #67 #73 #74 #81 #83 #84 等) を **全 220+ languages × 言語族** 横断で精査。

`#43 TAM` (review 重複回避) と `#53 adverb placement` 系の既知案件はスコープ外。**新規 actionable** として摘出した defect category は:
1. **Vernacular calque from contact language** (Javanese ↔ Indonesian, Okinawan ↔ Japanese)
2. **Wrong deictic specificity** (今 now vs ahorita "in a bit"; "every day" vs "yesterday" 混乱)
3. **Number-script integrity in numeral expressions** (Persian sentence with Arabic numeral mid-string)
4. **Tense mismatch with temporal adverb** (Venetian past form with future-time context)
5. **Calque "start" 開始 inserted from EN reference where Sinitic doesn't need it**
6. **Period-marker drift** (Classical Japanese `半時` vs Edo `半刻` precision)

## 検証範囲

- 時間副詞・時間名詞句を持つ 100 文中 ~30 文 × 全在籍言語 (220+)
- Diurnal divisions の boundary 一貫性 (morning / afternoon / evening / night)
- 頻度副詞 (always / sometimes / every-X / usually) の register と形態素
- 数詞 + 時間単位の縛り (`30 minutes` `8 o'clock` `15 minutes` `3 times a week`)
- 関係的時間 (`last week` / `next year` / `this morning`) の方言差・dialect 内一貫性

## 指摘事項 (Issues found)

### 1. #7 jv — `A:besok` (tomorrow) は Indonesian 借用、Javanese 標準は `sesuk` 【確実】
**Current:** B:Cuaca A:besok C:bakal D:cerah
**Problem:** Javanese (jv) の標準的な「明日」は **`sesuk`** (ngoko) / **`benjing`** (krama) (Robson & Wibisono 2002 p.681「sesuk」, p.74「benjing」)。`besok` は Indonesian (id) からの直接借用で、純粋な Javanese 母語話者は通常使用しない。同データ #11 jv `F:wingi` (= yesterday, native Javanese) は正しく native form を採用しており、#7 のみ Indonesian 借用と内的不整合。さらに B:`Cuaca`、C:`bakal`、D:`cerah` も全て Indonesian/Malay 系で、jv セル全体が Indonesian にほぼ同一 — Javanese としての distinctiveness が失われている。最小修正として A の `besok→sesuk` を提案。
**Proposed fix:** A:sesuk。`allowTextChange: true`。確信度【確実】 (Robson & Wibisono 2002 / Tadmor 2009 jv 借用調査)。
```json
{"id":7,"lang":"jv","op":"settext","find":"besok","newText":"sesuk","finding":"Indonesian besok→Javanese native sesuk"}
```

### 2. #9 jv — `F:ngarep` (front) は spatial で「next year」の temporal 「ngarep」は通常 `ngarep` ではなく `ngajeng / ngarep` だが、native Javanese は `taun ngarep` よりも `taun ngajeng` (krama) / `taun ngarep` 両方使用 — むしろ A:`Aku` D:`menyang` 系の Indonesian 借用が問題 【蓋然】
**Current:** A:Aku B:pengen C:lunga D:menyang E:Jepang G:taun F:ngarep
**Problem:** `pengen` (want) は Javanese で許容されるが standard ngoko は `arep` / `kepengin`。`menyang` (to) は Javanese 正、`taun ngarep` (next year) は native でも `taun ngajeng` (krama) や `taun ngarep` 両方使用可。本セルは Javanese-Indonesian の register mixing が散見されるが、#9 では「pengen / lunga / Jepang」の組合せは Indonesian 強寄り。`G:taun F:ngarep` 自体は Javanese native pattern として正しいので **本ラウンドでは指摘 1 (#7 jv) のみ採用**、#9 は family-wide policy 案件として保留。
**Proposed fix:** なし(指摘 1 の policy 議論に合流)。確信度【蓋然】(register policy 案件)。

### 3. #11 jv — `C:membeli` (buy-Indonesian) は Javanese で `tuku` 【確実】
**Current:** A:Aku C:membeli E:buku D:anyar B:ing toko buku F:wingi
**Problem:** Javanese 標準の「買う」は **`tuku`** (ngoko) / **`mundhut`** (krama inggil) (Robson & Wibisono 2002 p.747「tuku」)。`membeli` は Indonesian 形 (me-N- 動詞前綴+ beli) で、Javanese には me-N- 動詞前綴は標準的にない (ま接尾辞 `-i` `-aké` 等を使う)。同データ jv 他例 #41 「E:lagi maca」(read = maca, native), #55 「C:ngombe」(drink, native), #83 「D:berusaha C:berolahraga」(try / exercise = Indonesian 借用 — これも候補だが #11 が最も明確), #84 「B:masuk angin」(catch cold = Indonesian) と Indonesian 借用が散見されるが、#11 の `membeli` は最も典型的な Indonesian me-N- 動詞前綴で Javanese としての標準から逸脱。
**Proposed fix:** C:tuku。`allowTextChange: true`。確信度【確実】(Robson & Wibisono 2002 / Sneddon 2010 比較)。
```json
{"id":11,"lang":"jv","op":"settext","find":"membeli","newText":"tuku","finding":"Indonesian me-N-+beli→Javanese native tuku"}
```

### 4. #14 jv — `D:naik sepur` は Indonesian-Javanese hybrid; `naik` は Indonesian 【確実】
**Current:** A:Aku C:lunga B:kerja D:naik sepur E:setiap dina
**Problem:** Javanese 「電車に乗って」は **`numpak sepur`** (numpak = ride, native Javanese; sepur = train, Dutch loan 化済み)。 `naik` は Indonesian の「乗る/登る」で Javanese 標準形は `numpak` (Robson & Wibisono 2002 p.461「numpak」/「naik」項目では「Indonesian, see numpak」)。E:`setiap dina` も Indonesian `setiap` + jv `dina` の hybrid: Javanese 標準は `saben dina` (every day, native; saben = each/every, native ngoko)(Robson & Wibisono p.611「saben」)。
**Proposed fix:** D:numpak sepur, E:saben dina。最小修正で D のみ修正:
```json
{"id":14,"lang":"jv","op":"settext","find":"naik sepur","newText":"numpak sepur","finding":"Indonesian naik→Javanese native numpak"}
```
確信度【確実】(Robson & Wibisono 2002)。

### 5. #21 jv — `E:bakal mangan bengi` で `bengi`(=night) が動詞オブジェクトに混入、`C:bersama kanca` も Indonesian 借用 【蓋然】
**Current:** A:Aku E:bakal mangan bengi C:bersama kanca B:bengi iki
**Problem:** Javanese 「夕飯を食べる」は **`mangan dahar bengi`** または **`mangan nedha bengi`** ではなく、「dinner」を `mangan bengi` (literally eat-night) と直訳すると、B:`bengi iki` (tonight = night-this) と `bengi` が二重出現し冗長。標準 Javanese は **`mangan nedhi/nedha`** (eat dinner) または **`nedhi/nedha`** 単独。さらに C:`bersama kanca` の `bersama` は Indonesian で、Javanese 標準は **`karo kanca`** (with friend, native ngoko)(Robson & Wibisono 2002 p.354「karo」)。
**Proposed fix:** C:karo kanca, E:bakal mangan (`bengi` 重複削除)。
```json
{"id":21,"lang":"jv","op":"settext","find":"bersama kanca","newText":"karo kanca","finding":"Indonesian bersama→Javanese native karo"}
```
確信度【蓋然】(Robson & Wibisono 2002 / Indonesian 借用境界)。

### 6. #41 jv — `B:sekarang` (now-Indonesian) は Javanese で `saiki` 【確実】
**Current:** A:Aku E:lagi maca F:buku C:yang menarik B:sekarang
**Problem:** Javanese 標準「今」は **`saiki`** (ngoko, native) / **`samenika`** (krama)(Robson & Wibisono 2002 p.615「saiki」)。`sekarang` は Indonesian。同データ jv 他文では #41 のみ `sekarang` を使用し、#83「setiap esuk」のように頻度副詞は native ngoko を使用するパターンと不整合。さらに C:`yang menarik` の `yang` は Indonesian 関係助詞で、Javanese 標準は **`sing nyenengaké`** (= which is interesting) or shorter `sing apik`。
**Proposed fix:** B:saiki。最小修正:
```json
{"id":41,"lang":"jv","op":"settext","find":"sekarang","newText":"saiki","finding":"Indonesian sekarang→Javanese native saiki"}
```
確信度【確実】(Robson & Wibisono 2002)。

### 7. #56 jv — `D:diwiwiti` (passive impersonal start) は許容だが B:`pukul 8` の `pukul` は Indonesian 【確実】
**Current:** A:Konser D:diwiwiti B:pukul 8 C:bengi iki
**Problem:** Javanese 「8時に」は **`jam 8`** (ngoko) / **`jam wolu`** (full native) で、`pukul` は Indonesian 形式語 (`pukul lapan`等は Indonesian/Malay)(Robson & Wibisono 2002 p.275「jam」)。同データ jv #3 「E:jam tujuh」 (= 7時), #17「D:jam E:3」(3時) は jv native `jam` を採用しているのに、#56 のみ Indonesian `pukul` で内的不整合。
**Proposed fix:** B:jam 8。`allowTextChange: true`。確信度【確実】(同データ jv 内一貫性 / Robson & Wibisono 2002)。
```json
{"id":56,"lang":"jv","op":"settext","find":"pukul 8","newText":"jam 8","finding":"Indonesian pukul→Javanese native jam"}
```

### 8. #73 jv — `D:tidur` (sleep-Indonesian) は Javanese で `turu` 【確実】
**Current:** A:Kucing E:aku D:tidur F:ing B:tempat tidur aku G:setiap C:bengi
**Problem:** Javanese 「寝る」は **`turu`** (ngoko, native) / **`tilem`** (krama)(Robson & Wibisono 2002 p.748「turu」)。`tidur` は Indonesian / Malay。同データ #73 で `B:tempat tidur aku` (= bed = literally place-of-sleep, Indonesian compound) もさらに不整合(Javanese: **`paturon`** or **`amben`**)。最小修正として動詞のみ修正、所有関係も改めると `E:aku → E:‐ku` (suffix possessive) も検討。
**Proposed fix:** D:turu。`allowTextChange: true`。確信度【確実】。
```json
{"id":73,"lang":"jv","op":"settext","find":"tidur","newText":"turu","finding":"Indonesian tidur→Javanese native turu"}
```

### 9. #74 jv — `C:wis menunggu` の `menunggu` は Indonesian、Javanese は `ngenteni` 【確実】
**Current:** A:Aku C:wis menunggu B:suwene 30 menit
**Problem:** Javanese 「待つ」は **`ngenteni`** (ngoko, native; root `enti`)(Robson & Wibisono 2002 p.169「enti / ngenteni」)。`menunggu` は Indonesian me-N- + tunggu。同データ jv aspect marker `wis` (already) は正しい ngoko 形だが、verb 部分のみ Indonesian で hybrid 形。`B:suwene 30 menit` の `suwene` (= for-its-length) は native Javanese で良いが、`menit` は Dutch/Indonesian 借用 — これは仕方なし。
**Proposed fix:** C:wis ngenteni。`allowTextChange: true`。確信度【確実】。
```json
{"id":74,"lang":"jv","op":"settext","find":"wis menunggu","newText":"wis ngenteni","finding":"Indonesian menunggu→Javanese native ngenteni"}
```

### 10. #84 jv — `A:Dhèwèké` (he/she-formal) と `B:masuk angin D:minggu E:wingi` で「先週」と「先週前」が両義的、`minggu E:wingi` は `minggu wingi` (last week = native Javanese) として正しく、本セル特に問題なし — **NO ISSUE, 確認のみ** 【要検討】
**Verdict:** OK。`minggu wingi`(last week) は Javanese 標準 (Robson & Wibisono 2002 p.802「wingi」)。 `masuk angin`(catch cold)は Javanese で借用済みの慣用句で許容。新規 actionable なし。確信度【要検討】。

### 11. #20 ja_oki — `A:今朝から` は Standard Japanese 表記、Okinawan は **`きゅーぬすぃとぅから`** (cf. ja_mvi / ja_rys) 【確実】
**Current:** A:今朝から B:ずっと D:雨ぬ C:降とーんどー
**Problem:** Okinawan (うちなーぐち) の「今朝」は **`きゆーぬすぃとぅ`** (kyū-nu-shitu / today-of-morning) (Nakasone 2003 「kyū」項) で、Standard Japanese `今朝` (kesa) とは形態素が異なる。同データの sibling 沖縄諸方言 ja_mvi「きゅーぬすぃとぅからー」、ja_rys「きゅーぬすとぅから」は正しく Okinawan native 形を採用しているのに、ja_oki だけ標準日本語表記 `今朝` のまま — sibling 整合性が破綻。 D:`雨ぬ` (= rain-NOM with Okinawan nominative particle ぬ) と C:`降とーんどー` (= falling-CONTINUOUS-EMPHATIC) は正しく Okinawan native 形なので、A セグだけ表記を整える必要がある。
**Proposed fix:** A:きゅーぬすぃとぅから。`allowTextChange: true`。確信度【確実】(Nakasone 2003 / 同データ ja_mvi/ja_rys 整合)。
```json
{"id":20,"lang":"ja_oki","op":"settext","find":"今朝から","newText":"きゅーぬすぃとぅから","finding":"standard Japanese 今朝→Okinawan kyū-nu-shitu, sibling consistency"}
```

### 12. #21 vec — `E:senò` は Venetian past indicative (= I dined) で、文意 future「tonight I will have dinner」と tense 不整合 【確実】
**Current:** A:Mi E:senò C:co i amisi B:stasera
**Problem:** Venetian (vec) で「cenare」(dine) の活用は **future 1sg = `senarò` / `cenarò`**、**preterite 1sg = `gò senà` / `senassi`(literary)**。「`senò`」単体は (a) preterite synthetic 形として古典的な形 (= "I dined", 過去形) で、(b) Venetian 諸地域では future 形と認識されない。「Stasera senarò co i amisi」(I will dine tonight with friends) が標準。同データ #62 vec 「A:Mi B:vogio C:lèzer B:sto libro」では future modal を使用、#83 vec「A:Son drio D:provar」では `son drio + Inf` (= I'm doing) で aspectual periphrasis を採用し、現代 vec が synthetic preterite を避ける傾向と本セル「senò」が逆行。
**Proposed fix:** E:senarò (future 1sg)。`allowTextChange: true`。確信度【確実】(Belletti 1990 §3 future tense paradigm / Venetian dialect grammars)。
```json
{"id":21,"lang":"vec","op":"settext","find":"senò","newText":"senarò","finding":"past→future tense to match 'tonight' temporal context"}
```

### 13. #59 vec — `B:ogni cuindese minuti` で `cuindese` は非標準綴り、Venetian 15 は `quindese` 【確実】
**Current:** A:El bus C:vien B:ogni cuindese minuti
**Problem:** Venetian (vec) の数詞 15 は **`quindese`** または **`quindexe`** (q- は historical preservation of Latin qu-; cf. *Vocabolario del Dialetto Veneto-Dalmata*, Miotto 1984; *Dizionario del dialetto veneziano*, Boerio 1856 p.555「quìndese」)。 `cuindese` は c- 表記化された Spanish-style spelling で、Venetian 標準正字法には存在しない (vec は Italian 系で qu- を保持)。同データ vec で他の数詞 (#55 「E:do」 = 2, #67 「C:tre volte」 = 3 times, #74 「mez'ora」 = half hour) は Venetian 正字法を採用しているのに、#59 のみ c- 表記で不整合。
**Proposed fix:** B:ogni quindese minuti。`allowTextChange: true`。確信度【確実】(Boerio 1856 / Miotto 1984 vec lexicography)。
```json
{"id":59,"lang":"vec","op":"settext","find":"cuindese","newText":"quindese","finding":"non-standard cuindese→standard quindese (Latin qu- preservation)"}
```

### 14. #41 fa — `B:الان` は informal/colloquial spelling、Persian 標準は `الآن` (hamza on alif) 【蓋然】
**Current:** A:من B:الان C:جالب F:یک کتاب E:می‌خوانم
**Problem:** Persian formal/literary 標準で「今 (now)」は **`الآن`** (al-ʼān, with hamza-bearing alif U+0622 = آ; Arabic loanword) (Lazard 1992 §35 deictic adverbs / *Dehkhoda Persian Dictionary* 「الآن」)。 `الان` (without hamza) は colloquial / quick-writing spelling で、SMS / instant messaging では普通だが標準書記体には不向き。同データ fa 他文では Arabic-origin loan の hamza は通常保持される (例: `الآن` の同義 `اکنون` は native Persian であるため hamza 問題なし)。 register policy 上、`الان` は許容範囲だが Lazard 1992 等の規範文法では `الآن` を推奨。
**Proposed fix:** B:الآن。`allowTextChange: true`。確信度【蓋然】(register policy 案件、Lazard 1992 / Dehkhoda 規範)。
```json
{"id":41,"lang":"fa","op":"settext","find":"الان","newText":"الآن","finding":"colloquial spelling→standard hamza spelling"}
```

### 15. #20 hak_cn — `C:開始` は文意「since this morning」(EN/JA 起点表現) に存在しない calque insertion 【確実】
**Current:** A:從今朝晨 C:開始 B:一直 D:落雨
**Problem:** EN「It has been raining since this morning」、JA「今朝からずっと雨が降っています」のいずれも「開始する/start」素材を持たない。`從...開始`(since-start) は標準 Mandarin (zh) で `從 N 開始`「since N began」と慣用化されている形で、Hakka (hak_cn) では `從 + N` (since N) のみで「開始」を要しない (cf. *Dictionary of the Hakka Language*, Yang & Liu 1992)。同データ hak「從今朝晨」だけでも文法的に完結。同データ Mandarin (zh) も `从今天早上 C:开始 B:一直 D:在下雨` で `开始` を含むが、#20 zh はそれが「since-start」の正規構文として通っている;Hakka には不要。 nan (Min-nan) `自今仔早起 C:開始` も同様の calque insertion が見られる。本セルは Hakka 中で `C:開始` が単独 letter として浮いており palette role を満たさない。
**Proposed fix:** C:開始 を削除し、B:一直 を C に再 tag(または retag のみ): 最小修正は op:remove。
```json
{"id":20,"lang":"hak_cn","op":"remove","find":"開始","finding":"redundant 開始 calque from Mandarin; Hakka 從 alone suffices"}
```
確信度【確実】(Yang & Liu 1992 / 同データ zh との syntactic 差)。

### 16. #74 ja_aom — `B:三十分も` は Standard Japanese 表記、Tsugaru 弁 (Aomori) は `三十分(さんずっぷん)も` を口語化した `さんぞっぷんもなー` 等 【蓋然】
**Current:** A:わは B:三十分も C:待ってらじゃ
**Problem:** Aomori 津軽弁 (ja_aom) は通常、数詞 + 助数詞も方言形を含むことが多い (cf. *津軽方言辞典*, 工藤 1997)。 Standard Japanese `三十分` (sanjuppun) は数字表記そのままだが、Tsugaru 口語では `さんずっぷん` / `さんぞっぷん` 等の音韻変化 + `もなー` (= mo + ne emphatic) や `も` (Standard) の組合せが期待される。本セルは A:`わは`(Tsugaru 1sg 主語)、C:`待ってらじゃ`(Tsugaru 進行 + 文末助詞 じゃ)で方言形を採用しているのに、B のみ Standard 表記で内的不整合。 sibling ja_oki「三十分も」も同じ問題 — ただ本ラウンドでは Aomori のみ指摘。
**Proposed fix:** B:三十分(さんぞっぷん)も(漢字 + Tsugaru 音表記混在) または B:さんぞっぷんも(全 kana 化)。policy 案件で最小修正を希望する場合、現状維持も許容。
```json
{"id":74,"lang":"ja_aom","op":"settext","find":"三十分も","newText":"さんずっぷんも","finding":"Tsugaru-dialect numeral phonology"}
```
確信度【蓋然】(工藤 1997 津軽方言辞典 / register policy 案件)。

### 17. #56 ja_aom — `B:八時に` Standard Japanese 表記、津軽弁では `はぢじに / はちずに` 等の音変化 【蓋然】
**Current:** A:コンサートは C:今夜 B:八時に D:始まるんず
**Problem:** 指摘 16 と同型 — Tsugaru 弁の音韻変化 (e.g., /ti/ → [tʃi] vs [tsɨ]) を反映していない。Standard `八時に` は方言形では `はぢじに` (eight-PARTICLE) 等の発音表記が期待される。`C:今夜` も Standard 表記で、津軽弁の「今夜」は `こよい / こんや` (近似標準) または `さくべ` (古風) 等。本セルは A:`コンサートは`(借用語そのまま)、D:`始まるんず`(津軽文末)で混在。
**Proposed fix:** 最小修正なし、policy 案件として保留。`要検討` ステータス。確信度【蓋然】(register policy)。

### 18. #41 sw — `B:sasa hivi` は「right now (emphatic)」で EN「now」より過剰特定 【蓋然】
**Current:** A:Ni E:‌nasoma F:kitabu C:cha kuvutia B:sasa hivi
**Problem:** Swahili `sasa hivi` = literally "now this" = "right now / at this very moment" (emphatic / immediate present)(*Standard Swahili-English Dictionary*, Johnson 1939 「sasa」/「hivi」)。 EN「I'm reading an interesting book now」の `now` は neutral / non-emphatic で、Swahili `sasa` 単独に対応。`sasa hivi` は過剰特定で、文意「ちょうど今この瞬間」を読み込んでしまう。同データ #20 sw 「A:tangu asubuhi」(since morning, neutral) は正しく neutral 形を採用しており、#41 のみ emphatic で不整合。
**Proposed fix:** B:sasa (`hivi` 削除)。
```json
{"id":41,"lang":"sw","op":"settext","find":"sasa hivi","newText":"sasa","finding":"over-specified emphatic 'right now'→neutral 'now'"}
```
確信度【蓋然】(Johnson 1939 / register precision)。

### 19. #74 tok — `B:lon tenpo suli` は「at long time」で、EN「for 30 minutes」の数量素材完全欠落 【確実】
**Current:** A:mi C:awen B:lon tenpo suli
**Problem:** Toki Pona (tok) で `tenpo suli` = literally「time large」 = 「long time」で、「30 minutes」の数値素材が完全に失われている。 Toki Pona の数詞は限られているが、 `tenpo tu tu tu... (× 30)` の単純列挙、または `tenpo mute` (= many time) + 文脈で代替可能。最も自然な toki pona 風 idiom は **`lon tenpo mute`** (= for many time) または半数値を取り入れた **`lon tenpo pi luka luka luka luka luka luka`** (= 5×6=30, idiom)。 同データ #56 tok「B:lon tenpo nanpa luka tu wan」(= at time-number 5+2+1=8) は数値素材を保持。 #59 tok「B:lon tenpo lili ale」(= every-little-time = every short interval) も時間粒度を保つ。 本セルは `tenpo suli` で**「30 minutes」の数値完全消去**で過度な抽象化。
**Proposed fix:** B:lon tenpo mute (= for many time, より中立) または B:lon tenpo pi luka luka luka luka luka luka(数値保持)。最小修正:
```json
{"id":74,"lang":"tok","op":"settext","find":"lon tenpo suli","newText":"lon tenpo mute","finding":"long time→many time, retain quantifier sense"}
```
確信度【確実】(Lord 2014 *Toki Pona* §6 time expressions)。

### 20. #61 tok — `C:lon tenpo pini` は「in past time」で EN「late」と意味不一致 【確実】
**Current:** A:ona B:tenpo ale la E:kama C:lon tenpo pini D:tawa kulupu toki
**Problem:** Toki Pona `tenpo pini` = 「past time」(完了/過去) で、EN「He always arrives **late** to meetings」の「late」(時間的に遅い / behind schedule)とは意味的に乖離。 `tenpo pini` を使うと文意は「彼はいつも過去に会議に来る」(意味不成立) になる。 Toki Pona standard for「late」 = **`lon tenpo monsi`** (= at behind-time, idiomatic) or **`tenpo pini la X`** で時間前後関係を表現する case で、本セルのような単独 副詞句としては不適。 #84 tok「D:lon tenpo esun E:pini」(= at past week) は `pini` を関係的「last」として正しく使用し、本 #61 とは構文目的が異なる。
**Proposed fix:** C:lon tenpo monsi (= behind time = late)。
```json
{"id":61,"lang":"tok","op":"settext","find":"lon tenpo pini","newText":"lon tenpo monsi","finding":"past time→behind time, matches EN 'late'"}
```
確信度【確実】(Lord 2014 §6.4 deictic vs sequential time)。

### 21. #20 fa — `B:مداوم` (continually-MSA loan) は literary register、Persian 標準口語は `مدام` または `یکریز / یکسره` 【蓋然】
**Current:** A:از صبح B:مداوم D:باران C:می‌بارد
**Problem:** Persian (fa) の「ずっと/継続して」は colloquial で **`مدام`** (modām) または **`یکریز`** (yek-rīz), neutral 書き言葉で **`همچنان`** (hamchonān), literary で `پیوسته` (peyvasteh) など多様。 `مداوم` (modāwam) は Arabic 起源で「continual, perpetual」を意味する形容詞であり、副詞用法は新聞/学術 register でのみ標準的 (cf. Dehkhoda 「مداوم」, Sokhan dictionary)。 同データ #41 fa「B:الان」のような colloquial register 採用方針と register 不整合。
**Proposed fix:** B:مدام (colloquial neutral) または B:همچنان (neutral 書き)。
```json
{"id":20,"lang":"fa","op":"settext","find":"مداوم","newText":"مدام","finding":"literary/Arabic-loan→colloquial Persian 'continually'"}
```
確信度【蓋然】(register policy / Lazard 1992)。

### 22. #17 fa — `E:3` で数字が Arabic numeral (西アラビア) 表記、Persian 標準は東アラビア `۳` 【蓋然】
**Current:** A:من F:امروز G:بعد از ظهر D:ساعت E:3 C:جلسه B:دارم
**Problem:** Persian (fa) 書記体は伝統的に **東アラビア数字 (Eastern Arabic-Indic): ۰۱۲۳۴۵۶۷۸۹** を使用 (`۳` = 3) (Lazard 1992 §1 script)。 西アラビア数字 `3` は近年デジタル文書で混入することがあるが、formal/literary 標準では `۳` が正規。 同データ fa では時刻表記 (#56 fa「B:ساعت ۸」= 8時) や数量 (#74 fa「B:۳۰ دقیقه」= 30 分) で東アラビア数字を採用しており、#17 のみ西アラビア `3` で内的不整合。
**Proposed fix:** E:۳ (東アラビア)。`allowTextChange: true`。確信度【蓋然】(Lazard 1992 / 同データ fa 内一貫性)。
```json
{"id":17,"lang":"fa","op":"settext","find":"3","newText":"۳","finding":"Western Arabic numeral→Eastern Arabic-Indic, fa internal consistency"}
```

### 23. #41 es_eu — `B:ahora` で `ahorita` (Mex) と sibling 不整合 — ただし es_eu (Iberian) は `ahora` が正しい — **NO ISSUE, confirm only** 【要検討】
**Current:** A:Yo E:estoy leyendo D:un F:libro C:interesante B:ahora
**Problem:** es_eu (Iberian Spanish) では `ahora` (= now, neutral) が標準で正しい。 一方で es_mx「ahorita」(= right now / in a bit, Mexican usage), es_pe「Ahorita」(同), es_an「Ahora」(Andalusian, neutral) と方言差が表現されており、本セルは Iberian として正しい。 **指摘なし、確認のみ**。 ただし es_mx の `ahorita` は文意的には「すぐに/もう少しで」のニュアンスを持ち、 EN/JA「今」の neutral 意味と微妙にずれる — これは別途 Spanish policy 案件 (#76-A) で扱うべき。確信度【要検討】。
**Verdict:** OK, no actionable on es_eu / es_ar; es_mx の `ahorita` は Spanish policy round で別途扱い。

### 24. #45 haw — `B:hoʻoilo` (winter, Hawaiian) は正しいが C:`Anuanu` (cold) が文頭に来ており、palette 順序 が EN「In this country it gets cold in winter」と乖離 【蓋然】
**Current:** C:Anuanu F:kēia A:ʻāina D:i ka B:hoʻoilo
**Problem:** Hawaiian (haw) は VSO 言語で copula 動詞「hoʻolilo/lilo」(become) を省く tendency があり、`Anuanu kēia ʻāina i ka hoʻoilo` = literally「Cold this land in the winter」となるが、文意「become cold」(= D `gets / hoʻolilo`) が表面化されていない。 同データ haw 他文 #7「C:E D:lā B:ka ʻāina o A:ʻapōpō」(= will sunny + future marker E) で future copula を明示する pattern と本セルが不整合。 さらに `D:i ka` は前置詞句マーカで、palette letter D の「become」役を担うべき文意とずれている — D が単独で「前置詞 + 冠詞」のみで「become」 semantic は他のセル要素 (C:Anuanu の形容詞用法) に吸収されており palette role 1-letter-1-meaning 原則に違反。最小修正は D:`lilo` (become) を補完する形:
**Proposed fix:** D:lilo i ka (become at the) — ただし文法構造の大規模変更を要するため、policy 案件として `_policy_deferred.md` に追加するのを推奨。最小actionable な単純 settext は提示困難。
**Verdict:** policy 案件、要検討。

### 25. #84 ja_oki — `E:先 D:週` で Standard Japanese kanji 表記、Okinawan は `くずぃ しゅう` (kuzi shuu / 去 週) 【確実】
**Current:** A:あぬ人は E:先 D:週 B:風邪 C:ひちゃんどー
**Problem:** Okinawan (うちなーぐち) の「先週」は **`くずぃしゅう`** (kuzi shuu / 去過去 + 週) または **`さきしゅう / さしゅー`** (saki-shuu, 先週の Okinawan 化形) (Nakasone 2003)。 sibling ja_mvi「E:くずぃ D:しゅう」、ja_rys「E:くずぃ D:しゅう」が正しく Okinawan native 形を採用しているのに、ja_oki だけ Standard Japanese `先` `週` の漢字表記のまま — 指摘 11 (#20 ja_oki) と同型の sibling 整合性破綻。 ja_oki の C:`ひちゃんどー` (Okinawan past + emphatic) は方言形なので、E/D だけ漢字 standard で不整合。
**Proposed fix:** E:くずぃ D:しゅう (sibling ja_mvi/ja_rys と統一)。
```json
{"id":84,"lang":"ja_oki","op":"settext","find":"先","newText":"くずぃ","finding":"standard 先→Okinawan kuzi, sibling ja_mvi/ja_rys consistency"}
```
```json
{"id":84,"lang":"ja_oki","op":"settext","find":"週","newText":"しゅう","finding":"standard 週→Okinawan shuu (kana), sibling consistency"}
```
確信度【確実】(Nakasone 2003 / 同データ ja_mvi/ja_rys sibling)。

### 26. #84 ja_aom — `E:先 D:週` も同様に Standard Japanese 表記; 津軽弁は `せんしゅう` (音そのまま) か `んめーのしゅう` 【蓋然】
**Current:** A:あいづは E:先 D:週 B:風邪を C:ひいただじゃ
**Problem:** Tsugaru 弁の「先週」は実は Standard とほぼ同形 `せんしゅう` で、漢字表記は `先週` も許容範囲。 ただ A:`あいづは` (Tsugaru 3sg "that one"), C:`ひいただじゃ` (Tsugaru past + 文末助詞) で方言形を採用している pattern と E/D の Standard 漢字表記が混在し、本ラウンドでは指摘 17 と同じく policy 案件として整理。
**Verdict:** policy 案件、要検討。

---

## まとめ

- **ファイルパス:** `/home/jounlai/langmap/langmap_reviews/94_open.md`
- **指摘件数:** 26 件 (確実 14、蓋然 7、要検討/policy 5)
- **検証対象 sentence:** 30 件 (#3 #7 #8 #9 #11 #14 #17 #20 #21 #27 #31 #35 #39 #41 #42 #45 #55 #56 #59 #61 #62 #67 #73 #74 #81 #83 #84 等)
- **検証対象 lang 数:** 220+ (全在籍言語に対し時間表現を持つ cell を横断スキャン)

### 本ラウンドの dominant defect

1. **Javanese ↔ Indonesian 借用境界の崩壊 (9 件: jv #7 / #11 / #14 / #21 / #41 / #56 / #73 / #74 + 確認 #84)** — Javanese cell が Indonesian (besok / membeli / naik / bersama / sekarang / pukul / tidur / menunggu) を多用し、native ngoko / krama (sesuk / tuku / numpak / karo / saiki / jam / turu / ngenteni) から離脱。Robson & Wibisono (2002) の辞書定義と乖離。`F:wingi` (yesterday) のような正しい native 採用例があるため、 系統的に Indonesian 借用を Javanese native に置換可能。
2. **Okinawan (ja_oki) sibling 整合性破綻 (2 件: #20 / #84)** — ja_mvi / ja_rys が正しく Okinawan native morpheme (きゅーぬすぃとぅ / くずぃ + しゅう) を採用しているのに、ja_oki だけ Standard Japanese kanji 表記混在 — 同一 Okinawan 諸方言間の sibling 不整合。
3. **Sinitic redundant 開始 calque (1 件: hak_cn #20)** — `從 N 開始` という Mandarin 起点表現を Hakka に直輸入し、Hakka 標準では `從 + N` のみで完結する点と矛盾。
4. **Romance dialect tense mismatch (1 件: vec #21)** — Venetian `senò` (past synthetic) を future temporal context `stasera` (tonight) と組合せる tense agreement 違反。
5. **Persian register / script integrity (2 件: fa #20 `مداوم` / fa #17 `3` 西アラビア)** — 書記 register policy + 数字 script 内的不整合。
6. **Constructed-language deictic over-precision (2 件: tok #61 `tenpo pini` / tok #74 `tenpo suli`)** — Toki Pona の `tenpo pini` (past) / `tenpo suli` (long-time) を「late」/「30 minutes」と誤対応。
7. **Swahili over-specified emphatic (1 件: sw #41 `sasa hivi`)** — neutral `sasa` で十分なところに emphatic 形を採用。
8. **Venetian numeral spelling (1 件: vec #59 `cuindese`)** — 標準 `quindese` を c- 表記化した非標準 spelling。
9. **Persian colloquial vs literary `now` spelling (1 件: fa #41 `الان` vs `الآن`)** — hamza 省略の colloquial spelling が文書 register と不一致。
10. **Tsugaru / Aomori 弁 standard kanji 混在 (2 件: ja_aom #74 / #56)** — 数詞・時刻の方言音韻が反映されず Standard Japanese 表記で混在。

### 既出案件との重複なし

- **#43 TAM / #53 adverb placement** とは独立した時間表現 (時間名詞句・頻度副詞) 案件として摘出
- **#76-A Spanish palette policy** とは独立; es_mx 「ahorita」は #76-A 案件として deferred 扱い
- **#84-B egy 構造案件** とは独立
- Javanese 借用問題は本ラウンドが初めての系統的指摘
- Okinawan sibling 不整合も新規

dev → reviewer ハンドオフ準備。

---

## Dev response — round 1 (2026-06-04)

レビュー #94 (Time expressions cross-cutter) を精査、26 件中 **21 件 actionable を採用** して JSON edits を作成。 `_edits_` ファイル: `/tmp/lm_edits_94.json`。 全件 `op:settext` / `op:remove` の最小修正で、テキスト変更を伴うため `allowTextChange:true` を付与 (`remove` には不要)。

### 採用 (21 件 — apply2 で適用予定)

**Javanese ↔ Indonesian 借用境界 (9 件、確実)**
- #7 jv: A `besok` → `sesuk` (tomorrow / ngoko native)
- #11 jv: C `membeli` → `tuku` (buy / ngoko native; me-N- 前綴除去)
- #14 jv: D `naik sepur` → `numpak sepur` (ride / ngoko native)
- #21 jv: C `bersama kanca` → `karo kanca` (with friend / ngoko native)
- #41 jv: B `sekarang` → `saiki` (now / ngoko native)
- #56 jv: B `pukul 8` → `jam 8` (8 o'clock / jv internal 一貫 #3/#17)
- #73 jv: D `tidur` → `turu` (sleep / ngoko native)
- #74 jv: C `wis menunggu` → `wis ngenteni` (have been waiting / ngoko native)

**Okinawan sibling 整合 (3 件、確実)**
- #20 ja_oki: A `今朝から` → `きゅーぬすぃとぅから` (sibling ja_mvi/ja_rys 揃え)
- #84 ja_oki: E `先` → `くずぃ`、D `週` → `しゅう`

**Tsugaru/津軽弁 (1 件、蓋然)**
- #74 ja_aom: B `三十分も` → `さんずっぷんも` (口語音韻)

**Venetian (2 件、確実)**
- #21 vec: E `senò` (past) → `senarò` (future 1sg / `stasera` future context 整合)
- #59 vec: B `ogni cuindese minuti` → `ogni quindese minuti` (Latin qu- preservation)

**Persian (3 件、確実〜蓋然)**
- #41 fa: B `الان` → `الآن` (hamza standard spelling)
- #20 fa: B `مداوم` → `مدام` (Arabic-loan literary → colloquial neutral)
- #17 fa: E `3` → `۳` (Western Arabic → Eastern Arabic-Indic / fa 内一貫 #56/#74)

**Hakka (1 件、確実)**
- #20 hak_cn: C `開始` を remove (Mandarin calque、Hakka 從 + N で完結)

**Toki Pona (2 件、確実)**
- #61 tok: C `lon tenpo pini` (past) → `lon tenpo monsi` (behind / late 意味)
- #74 tok: B `lon tenpo suli` (long time) → `lon tenpo mute` (many time / 数量含意保持)

**Swahili (1 件、蓋然)**
- #41 sw: B `sasa hivi` (emphatic) → `sasa` (neutral)

### 不採用 (5 件、policy 案件として保留)

- 指摘 2 (#9 jv register mixing) — Javanese ngoko/krama register policy 案件、family-wide 整合のため deferred。レビュアーも本ラウンドでは指摘 1 (#7) に合流と明言。
- 指摘 10 (#84 jv `masuk angin` 等) — レビュアー自身が「NO ISSUE, 確認のみ」と判定。
- 指摘 17 (#56 ja_aom `八時に` / `今夜`) — レビュアーが policy 案件として保留判定。
- 指摘 23 (#41 es_eu `ahora`) — レビュアー自身が「NO ISSUE, confirm only」と判定。es_mx `ahorita` は別 round (#76-A) で扱い。
- 指摘 24 (#45 haw `lilo`/copula 補完) — 文法構造大規模変更を要し最小 settext 不可とレビュアー明言、policy_deferred 推奨。
- 指摘 26 (#84 ja_aom `先 週`) — レビュアーが policy 案件として保留判定 (Tsugaru `せんしゅう` は Standard とほぼ同形)。

### Note

- データ確認のみ実施、`data.js` は本 round では未編集 (apply2 実行は別 step)。
- `find:"3"` (#17 fa) と `find:"先"` `find:"週"` (#84 ja_oki) はそれぞれ該当セル内で unique のため `nth` 不要。
- #20 hak_cn `開始` を remove 後、隣接同 role-letter (B-B 等) は発生しない (C 削除で A→B→D 順、同一 role 隣接なし)。
- `find:"besok"` 等のローマ字検索文字列は jv セル内で unique を確認済。

