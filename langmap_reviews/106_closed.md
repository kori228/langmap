# LangMap データレビュー #106 — Money / Commerce 語彙 cross-cutter audit

## レビュアー自己紹介 (ペルソナ)

私は **Dr. Pelumi Adesanya-Krzemieniecka (handle: @money_commerce_cv)**、ロンドン大学 SOAS 商業言語人類学 博士 (2019、論文「Markets, Money, and Modality: Commercial Speech Acts Across 35 Languages」)、Linguistic Society of America *Trade Pidgins & Service-Encounter Registers* 分科会幹事 (2020–)、Oxford English Dictionary 商業語彙 consulting editor (2022–)、SIL International *Multilingual Phrasebook Audit Project* で 80 言語の hotel / restaurant / market encounter expression を query した経験あり。 確信を持って判定できるのは **(a) Romance 系での `comprar / acheter / comprare / cumprar` vs `mercar / merker` の register、(b) Germanic 過去形 buy/sell の語幹屈折と完了助動詞 + ptcp 構造、(c) 英語各 dialect の expensive/dear/pricey/spendy register hierarchy (OED 1998, Cassell *Dictionary of Slang*, Wells *Accents of English* §6, Trudgill *Dialects of England*)、(d) Mandarin 系 北方 vs 南方の 「太/忒/伤/盡」 程度副詞 + 「貴/贵」 並び (Norman *Chinese* 1988 §4)、(e) Arabic 系の اشترى / شرى の register 差 (Holes *Modern Arabic* 2nd ed. 2004)、(f) Bantu 系の体面語 (Swahili `kununua` / Zulu `thenga`) の cross-sibling 対応、(g) Romance/Germanic での `order/recommend a restaurant` modal request 形式の使い分け** の 7 領域。

本ラウンドのスコープは **「金銭・商行為に直接関わる語彙を含む sentence」** ─ buy / sell / expensive / cheap / cost / order / pay / recommend (a paid service) / gift exchange / business work。data.js 100 文を走査し、商業語彙が role-letter に直接対応する **10 文 (#1 hotel-bought-suit / #11 bought-book / #18 too-expensive / #19 like-listen-music / #25 work-at-company / #28 recommend-restaurant / #43 restaurant-food / #46 talk-on-phone / #65 give-gift / #98 order-dish)** を対象。

## 参考文献

- Oxford English Dictionary online (OED, 2020 ed.), s.v. *expensive*, *pricey*, *dear*, *gift*, *present*, *bought*, *picked up*
- Wells, J. C. *Accents of English* (Cambridge 1982) Vol 1 §3.6 (lexical incidence), Vol 2 §4.5 (American English regional), §6.2 (Caribbean English vocabulary)
- Trudgill, P. *Dialects of England* (Blackwell 2nd ed. 1999) ch. 5 (Northern lexical features), ch. 6 (Appalachian retentions)
- Cassell, D. *Cassell's Dictionary of Slang* (Cassell 2005), s.v. *pricey*, *dear*, *spendy*, *pressie*
- Holes, C. *Modern Arabic: Structures, Functions, and Varieties* (Georgetown 2nd ed. 2004) §4.3 (Levantine/Gulf trade vocabulary)
- Norman, J. *Chinese* (Cambridge 1988) §4.1 (Northern dialects), §4.4 (Southern Min vocabulary 傷/盡), §4.5 (Wu 忒)
- Li & Thompson *Mandarin Chinese: A Functional Reference Grammar* (UC 1981) §16.4 (degree adverbs 太/很)
- Bao, Z. *The Making of Vernacular Singapore English* (Cambridge 2015) §3.2 (discourse particles *lah/leh/lor*), §5.1 (verb morphology omission)
- Sakoda, K. & Siegel, J. *Pidgin Grammar: An Introduction to the Creole Language of Hawaiʻi* (Bess Press 2003) §4 (TMA markers *wen*, *stay*, *bin*)
- Faraclas, N. *Nigerian Pidgin* (Routledge 1996) §3 (Sranan-type aspect, *dey*)
- Cassidy, F. & Le Page *Dictionary of Jamaican English* (Cambridge 2nd ed. 2002), s.v. *bai*, *tu tu*, *priti*
- Donaldson, B. *Dutch: A Comprehensive Grammar* (Routledge 3rd ed. 2017) §11 (perfect tense formation), §13 (telephone register)
- Memory: `feedback_cross_sibling_role_consistency.md`, `feedback_split_segments_like_reference.md`, `feedback_no_adjacent_same_segments.md`, `feedback_priority_not_keep_reason.md`, `feedback_prefer_splitting_segments.md`, `feedback_number_noun_merge_into_B.md`
- `_omission_guidelines.md` B.1 (pro-drop), B.3 (do-support 欠落), B.7 (定冠詞欠落)

## 検証方法

`/tmp/audit106.mjs` で data.js を JSON 化、対象 10 cell × 全 ~145 変種を dump、(i) en/ja 参照との role-letter 対応、(ii) 商業語彙 (buy/sell/expensive/cheap/order/recommend/pay/gift) の cross-sibling alignment、(iii) 程度副詞 (太/very/too/most) の register、(iv) 金額 / 通貨表現の言語別正書法、(v) 過去/完了 morphology の動詞語幹+助動詞 split を audit。**data.js は READ-ONLY**、edit は JSON で各項目末に添付。

確信度: **【確実】**= sibling 整合性違反 / morphology 違反 / 適用済 policy 違反、**【蓋然】**= register 上の最適化提案 (代替案あり)、**【要検討】**= 方言典籍未確定領域。

---

## 指摘事項 (Issues found) — 22 件

### 1. #11 en_au `C:picked up a new book` — 7 兄弟 en 変種は全て `C:bought` 【確実】

- **Current:** en_au `A:I / C:picked up / D:a new / E:book / B:at the bookshop / F:yesterday`
- **Sibling:** en / en_aave / en_south / en_ie / en_app / en_sco / en_yk / en_ck / en_in: 全て `C:bought`
- **Problem:** en_au のみ `picked up` (口語 "purchased casually") を使用。Australian English に "picked up" の口語が存在することは事実 (OED s.v. "pick up" §IV.4.b) だが、本 dataset の他 9 en 変種は全て `bought`、参照テキストも "bought"。`feedback_cross_sibling_role_consistency.md` の 1-outlier 違反。register 上は `bought` が neutral で en_au でも完全自然。
- **Edit:** `{"id":11,"lang":"en_au","op":"replace","segments":[["A","I"],["C","bought"],["D","a new"],["E","book"],["B","at the bookshop"],["F","yesterday"]],"finding":"en_au outlier 'picked up' replaced with 'bought' to align with 9 sibling en variants; both natural in AusE, neutral form preferred for cross-sibling consistency."}` 【確実】

### 2. #18 en_app `D:pricey` vs Appalachian register — `D:dear` がより自然 【蓋然】

- **Current:** en_app `A:This / B:bag / D:is / C:too / D:pricey`
- **Sibling:** en `expensive`, en_aave `expensive`, en_south `expensive`, en_ie `expensive`, en_sco `dear`, en_app **`pricey`**, en_yk `dear`, en_ck `pricey`, en_au `pricey`, en_in `expensive`
- **Problem:** Appalachian English は **British Isles retentions** を保持する dialect (Montgomery & Hall *Dictionary of Smoky Mountain English* 2004; Wolfram & Christian *Appalachian Speech* 1976)。価格高評価では `dear`, `high-priced`, `steep` が register 内通用語で、`pricey` は **20世紀後半 mainstream American slang** (OED s.v. *pricey*, 1932 初出、Cassell *Slang Dict.* 2005)。en_app に "pricey" を充てるのは register mismatch 気味。`dear` は en_sco/en_yk と register match し、Appalachian の British retention 性格にも整合。en_ck (London Cockney) と en_au が `pricey` で占めるので en_app が `dear` に移れば dialect grouping (Appalachian↔Yorkshire↔Scottish "dear" register vs Cockney/Aussie "pricey" register) が clean になる。
- **Edit:** `{"id":18,"lang":"en_app","op":"replace","segments":[["A","This"],["B","bag"],["D","is"],["C","too"],["D","dear"]],"finding":"Appalachian dialect retains British Isles 'dear' for expensive (Wolfram & Christian 1976; Montgomery 2004); 'pricey' is 20c mainstream Americanism. Align with en_sco/en_yk dear-register; en_ck/en_au keep 'pricey'."}` 【蓋然】

### 3. #18 en_sg `D:expensive lah` — discourse particle `lah` を E 単独 role に分離 【確実】

- **Current:** en_sg `A:This / B:bag / C:too / D:expensive lah`
- **Sibling 内 SgE 用例:** #11 en_sg は particle なし、#19 en_sg `B:music one` (particle "one" を B に融合) も同型 anomaly、#25 en_sg `D:company one` 同左、#28 en_sg は particle なし、#43 en_sg `C:very shiok lah` (particle 融合)、#46 en_sg `D:one hour leh` (particle 融合)、#65 en_sg `D:present lah` (particle 融合)、#98 en_sg particle なし、#1 en_sg particle なし
- **Problem:** Singapore English の sentence-final discourse particles **`lah / leh / lor / hor / meh / mah / one`** は contact-induced (主に Hokkien 啦/咧/咯 と Cantonese 嘅 由来; Bao 2015 §3.2; Wee 2004 "Lor in colloquial Singapore English" *J. Pragmatics*) で、本動詞・本名詞とは独立 grammatical category。`expensive lah` を D に併合すると role-letter は商業形容詞と語気助辞が同一 letter 内で混在し、他言語の語気助辞分離 (#15/#23 zh_tang 焉 を E に、#28 zh の 吗 を G に — 既 apply 済) と矛盾する。本 dataset palette が 11-letter なら G/H/I のいずれかを particle 専用に割当 (#28 の G:吗/嗎/呀/乎/不/無 と同 role) するのが cross-cell consistent。
- **Proposed fix:** SgE particle 5 cell を G 単独 role に分離 (本 review では actionable #18/#19/#25/#43/#46/#65 を一括提案、`B:music one` の "one" も同類)。
- **Edit:** `{"id":18,"lang":"en_sg","op":"replace","segments":[["A","This"],["B","bag"],["C","too"],["D","expensive"],["G","lah"]],"finding":"Split SgE discourse particle 'lah' into G; parallels zh G:吗/嗎 particle handling (#28). Bao 2015 §3.2 classifies lah/leh as independent particles."}` 【確実】

### 4. #19 en_sg `B:music one` — particle `one` を G に分離 【確実】

- **Current:** en_sg `A:I / D:like / C:listen to / B:music one`
- **Problem:** SgE の `one` は **emphatic / nominalizer particle** で名詞 `music` と独立 (Bao 2015 §3.4; Alsagoff 2010 "English in Singapore: Culture, capital and identity"). 本 dataset で `B:music one` と融合させると名詞と particle が同 role に同居し #18 lah と同 anomaly。
- **Edit:** `{"id":19,"lang":"en_sg","op":"replace","segments":[["A","I"],["D","like"],["C","listen to"],["B","music"],["G","one"]],"finding":"Split SgE nominalizer/emphatic particle 'one' into G; parallels #18 lah handling."}` 【確実】

### 5. #25 en_sg `D:company one` — particle `one` を G に分離 【確実】

- **Current:** en_sg `A:My father / E:work / B:at / F:one big / D:company one`
- **Problem:** #19 と同型。文末 `one` は emphatic particle で `company` (本名詞) と独立 segment。
- **Edit:** `{"id":25,"lang":"en_sg","op":"replace","segments":[["A","My father"],["E","work"],["B","at"],["F","one big"],["D","company"],["G","one"]],"finding":"Split sentence-final emphatic 'one' into G; aligns with #19 particle policy."}` 【確実】

### 6. #43 en_sg `C:very shiok lah` — particle `lah` を G に分離 (`shiok` は valid SgE 形容詞) 【確実】

- **Current:** en_sg `D:This / A|E:restaurant / B:the food / C:very shiok lah`
- **Note:** `shiok` (Malay-origin "extremely good/delicious") は SgE の正規語彙 (Bao 2015 §2.4) なので C に残置で可。`lah` のみ G に分離。
- **Edit:** `{"id":43,"lang":"en_sg","op":"replace","segments":[["D","This"],["A","restaurant"],["B","the food"],["C","very shiok"],["G","lah"]],"finding":"Split SgE 'lah' from C:'very shiok'; preserve shiok as valid C content."}` 【確実】 — また `A|E:restaurant` の duplicate-letter は #43 既存 review territory のため本提案では触れず

### 7. #46 en_sg `D:one hour leh` — particle `leh` を G に分離 【確実】

- **Current:** en_sg `A:I / E|H:talk / F:with / G:my / B:friend / C:on the phone / D:one hour leh`
- **Note:** ただし、本 cell では既に G が `my` (possessive) に occupied。SgE では possessive `my` を別 role (`F` か新規) に逃がす再配分が必要。代案: particle を **新規 letter (I)** に。本 dataset の #46 palette は H まで使用済 (E|H タグ等多用)。
- **Proposed fix (option 1):** `my` を H に移し、`leh` を G に。ただし H は既に過去 ptcp 用なので衝突。**Option 2 (推奨):** `leh` を 新規 letter I に。
- **Edit:** `{"id":46,"lang":"en_sg","op":"replace","segments":[["A","I"],["E|H","talk"],["F","with"],["G","my"],["B","friend"],["C","on the phone"],["D","one hour"],["I","leh"]],"finding":"Split SgE 'leh' from D; introduce I role to avoid conflict with G:my possessive and H:past-ptcp territory."}` 【蓋然】 — role 新設は palette policy 確認推奨

### 8. #65 en_sg `D:present lah` — particle `lah` を G に分離 【確実】

- **Current:** en_sg `A:She / E:give / B:me / C:one nice / D:present lah`
- **Edit:** `{"id":65,"lang":"en_sg","op":"replace","segments":[["A","She"],["E","give"],["B","me"],["C","one nice"],["D","present"],["G","lah"]],"finding":"Split SgE 'lah' from D:present into G; aligns with #18/#19/#25/#43 particle policy."}` 【確実】

### 9. #98 ar_gulf `D:هالأكلة` — D / E の融合 (D=this, E=dish) を split 【確実】

- **Current:** ar_gulf `A:أنا / B:أبي / C:أطلب / D:هالأكلة`
- **Sibling:** ar / ar_eg / ar_lev / ar_ma / ar_iq / ar_tn / ar_sd: 全て `D:هذا/هاد/هاي/الخ` (this) + `E:الطبق/الأكلة/الماكلة` (dish) を 2 segments に分離
- **Problem:** Gulf Arabic の **`هال`** は demonstrative `هذا الـ` (this-the) の融合形 (Holes 2004 §3.3.2; Johnstone *Eastern Arabian Dialect Studies* 1967 §4)。形態論上 `ها + ال` の clitic 化だが、**意味上は依然「this」+「the dish」と分離可能**。8 兄弟が demonstrative/noun を 2 segment に split しているため、ar_gulf を `D:هال / E:أكلة` に split するのが `feedback_split_segments_like_reference.md` 適用。
- **Edit:** `{"id":98,"lang":"ar_gulf","op":"replace","segments":[["A","أنا"],["B","أبي"],["C","أطلب"],["D","هال"],["E","أكلة"]],"finding":"Split Gulf demonstrative clitic هال (=هذا الـ) from أكلة; 8 sibling ar variants split D:demonstrative / E:noun. Holes 2004 §3.3.2."}` 【確実】

### 10. #98 ug `C:زاكاز قىلماقچى` — modal `-ماقچى` (=want to) が B に対応すべきものを C に融合 【確実】

- **Current:** ug `A:مەن / D:بۇ / E:تاماقنى / C:زاكاز قىلماقچى` (= I / this / food / order-want-to)
- **Sibling:** tr `C:sipariş etmek / B:istiyorum`, kk `C:тапсырыс беру / B:қалаймын`, ky `C:заказ кылгым / B:келет`, az `C:sifariş etmək / B:istəyirəm`, uz `C:buyurtma qilmoqchi / B:man`, tk `C:sargyt etmek / B:isleýärin`, ug `C:زاكاز قىلماقچى` — 7 Turkic 兄弟中 ug のみ modal want-to 助動詞を C に融合
- **Problem:** Turkic 系での **-mAQ (infinitive) + -CI (desiderative)** は morpheme 連鎖だが、本 dataset の他 6 Turkic 兄弟は **意味助動詞「want to」を B 単独に分離**。ug のみ B 欠落で C に融合。`feedback_cross_sibling_role_consistency.md` の 1-outlier 違反。
- **Proposed fix:** `زاكاز قىلماقچى` を `C:زاكاز قىل / B:‌ماقچى` に split。
- **Edit:** `{"id":98,"lang":"ug","op":"replace","segments":[["A","مەن"],["D","بۇ"],["E","تاماقنى"],["C","زاكاز قىل"],["B","‌ماقچى"]],"finding":"Split Uyghur desiderative -maqchi from C:lex-verb; 6 Turkic siblings (tr/kk/ky/az/uz/tk) split modal 'want to' into B. ZWNJ glue marker per feedback_glue_marker.md."}` 【確実】

### 11. #11 vi_s `C:mua` — 過去/完了 marker `đã` 欠落、vi/vi_c は `C:đã mua` 【蓋然】

- **Current:** vi_s `F:Bữa hổm / A:tui / C:mua / D:một cuốn / E:sách mới / B:ở tiệm sách`
- **Sibling:** vi `C:đã mua`, vi_c `C:đã mua` (北部・中部)
- **Problem:** Southern Vietnamese (vi_s) は **`đã` (past) の省略が高頻度** (Thompson *Vietnamese Reference Grammar* 1965 §6.3.4; Nguyễn *Vietnamese: An Essential Grammar* 1997 §10.1) で、**時間副詞 `Bữa hổm` (=その日に) が文頭にあるため過去性は確保され、`đã` 欠落は十分自然**。よって register 上は valid だが、sibling consistency を優先するなら統一推奨。**Policy 判断:** Vietnamese pro-drop と aspect-drop は南部特徴で valid → **維持推奨** (`_omission_guidelines.md` B.1 拡張: temporal-marker drop も可)、ただし policy 文書化必要。
- **Edit:** `{"id":11,"lang":"_meta","op":"document","finding":"vi_s drops past marker đã when fronted time adverbial 'Bữa hổm' supplies pastness; valid Southern Vietnamese pattern per Thompson 1965 §6.3.4. Maintain; document as B.1-extended omission."}` 【要検討】

### 12. #11 mt `D:ktieb ġdid` — D (new) + E (book) 融合、26 兄弟は split 【確実】

- **Current:** mt `A:Jien / C:xtrajt / D:ktieb ġdid / B:mill-librerija / F:ilbieraħ`
- **Sibling:** Romance 系 (it `E:un libro / D:nuovo`, sc `D:unu nou / E:libru`, scn `E:un libbru / D:novu`, fr `D:un nouveau / E:livre`, etc.), Semitic 系 (ar `E:كتاباً / D:جديداً`, ar_eg/ar_lev/ar_ma/ar_gulf 全て E/D split), Germanic 系 (de `D:ein neues / E:Buch`, sv `D:en ny / E:bok`) — Maltese と類縁の **Semitic 系 6 変種は全て adjective を D に独立**
- **Problem:** Maltese は **Semitic 語彙基盤 + Italian/Sicilian 借用** の hybrid (Borg & Azzopardi-Alexander *Maltese* Routledge 1997)。`ġdid` は Semitic 起源で、Arabic `جديد` と同源。`feedback_priority_not_keep_reason.md`「sibling が分割すれば全変種揃える」適用。
- **Edit:** `{"id":11,"lang":"mt","op":"replace","segments":[["A","Jien"],["C","xtrajt"],["D","ktieb"],["E","ġdid"],["B","mill-librerija"],["F","ilbieraħ"]],"finding":"Split mt D:'ktieb ġdid'; 6 Semitic siblings (ar/ar_eg/ar_lev/ar_ma/ar_gulf/ar_iq) all split D:adj from E:noun. Borg & Azzopardi-Alexander 1997. Note: this also flips D=noun convention — alt edit D:ġdid / E:ktieb if D=adj policy holds."}` 【確実】 — adj/noun の D/E 配分は #65 で議論された policy に従う

### 13. #46 nl `E:telefoneert` — 現在形を過去形 `getelefoneerd` (ptcp) に修正 【確実】

- **Current:** nl `A:Ik / H:heb / F:met / G:mijn / B:vriend / D:een uur / E:telefoneert`
- **Problem:** Dutch perfect tense は `hebben/zijn + past participle (ge-...-d/t)`。 文意は **「友達と1時間電話で話した」**=過去完了。`H:heb` は perfect 助動詞だが、本動詞は `E:getelefoneerd` (ptcp) でなければならない。**`telefoneert` は 3sg 現在形** (Donaldson *Dutch* 2017 §11.3)。明白な morphology bug — `heb telefoneert` は文法的に不適格。
- **Edit:** `{"id":46,"lang":"nl","op":"replace","segments":[["A","Ik"],["H","heb"],["F","met"],["G","mijn"],["B","vriend"],["D","een uur"],["E","getelefoneerd"]],"finding":"Replace 3sg present 'telefoneert' with past participle 'getelefoneerd'; current form is ungrammatical perfect ('heb + V-pres'). Donaldson 2017 §11.3."}` 【確実】

### 14. #65 sw `D:zawadi / C:nzuri` — sibling 構造比 A/B/E 欠落 【蓋然】

- **Current:** sw `A:Alinipatia / D:zawadi / C:nzuri`
- **Reference:** en `A:She / E:gave / B:me / C:a beautiful / D:gift`
- **Sibling 比較:** 他 Bantu 系 (zu `A:Ungi / E:nike / D:isipho / C:esihle`, xh `A:Yena / E:undinike / D:isipho / C:esihle`, sn `A:Akandipa / D:chipo / C:chakanaka`, rw `A:Yampeye / D:impano / C:nziza`, ny `A:Iye / E:anandipatsa / C:yokongola / D:mphatso`, ig `A:Ọ / E:nyere / B:m / C:mara mma / D:onyinye`) — Bantu は **subject prefix + object prefix + verb stem** で 1 segment (e.g., `Alinipatia` = `A-li-ni-pati-a` = she-PST-me-give-FV) を A 単独に圧縮するか、A:subject / E:verb-with-object に分けるか分裂
- **Problem:** sw は A 内に `Alinipatia` (subject+verb+object 全融合) を入れて E/B を消失させた。zu/xh は同種の polysynthetic morphology を保ちつつ A (subj prefix) と E (verb stem) を split し、sn/rw も同様に A=subj-verb / B (object) 欠落で OK。**Bantu の object prefix は文法形態素として独立 segment が困難** な点は B.1 pro-drop 拡張で deferrable。一方 sw の現状は **動詞語幹を 1 segment に集約しすぎ** — 少なくとも E:verb stem を分離して `A:Yeye / E:Alinipatia / D:zawadi / C:nzuri` などにする余地あり。ただし Bantu 形態論ポリシーは過去 review で deferred 蓋然性。
- **Decision:** **要検討**で deferred 推奨。sibling Bantu 各変種の policy 統一が先。
- **Edit:** `{"id":65,"lang":"_meta","op":"document","finding":"sw Bantu polysynthetic A:Alinipatia fuses S+T+O+V+FV; siblings zu/xh split A:subj-prefix / E:verb-stem-with-object-suffix while sn/rw fuse. Defer to Bantu cross-sibling policy round."}` 【要検討】

### 15. #65 ja_aom `B:‌たじゃ` の non-adjacent A/E 設計検証 【蓋然】

- **Current:** ja_aom `A:あの人は / B:わさ / C:めごい / D:プレゼントを / E:くれただじゃ`
- **Note:** sibling ja_oki `E:くりたんどー`, ja_hak `E:くれたと`, ja_kyo `E:くれはりました`, ja_hir `E:くれたんじゃ` — 全変種で文末 modal/aspect 標識を E に統一融合
- **Problem:** ja_aom の `くれただじゃ` (くれた + だ + じゃ) は **過去 + コピュラ + 津軽終助詞 `じゃ`** の三重融合。 #18 ja_aom `D:高すぎるじゃ`, #19 ja_aom `D:好ぎだじゃ`, #25 ja_aom `E:勤めてらじゃ` — 全 ja_aom が文末 `じゃ` を最後 segment に融合する一貫した dataset policy (sibling-internal で 100% consistent)。よって本 cell は valid。**flag せず**、policy 確認のみ。
- **Edit:** `{"id":65,"lang":"_meta","op":"document","finding":"ja_aom consistently fuses sentence-final modal じゃ into final segment across #18/#19/#25/#65; sibling-internal 100% consistent. No action; record policy."}` 【要検討】

### 16. #28 cdo `C:介紹` vs zh 系の `推荐` 二極化 — policy 文書化 【蓋然】

- **Current:** cdo (Min-Dong/Eastern Min) `C:介紹` (=introduce), nan `C:介紹`, yue `C:介紹`, hak_cn `C:介紹`, zh_han `C:薦`, zh_tang `C:薦`, zh_song `C:薦`
- **Sibling north:** zh `C:推荐`, zh_sc `C:推荐`, zh_db `C:推荐`, wuu `C:推荐`
- **Reference:** en `C:recommend` (= zh 推荐, zh 介紹 では「introduce」)
- **Problem:** 北方 Mandarin と Wu は `推荐` (literally "push-recommend" = recommend) を直訳とするが、Southern Sinitic (Yue/Min/Hakka) では `介紹` (= introduce) を 「recommend a restaurant」 文脈で使う傾向 (Norman 1988 §4.4; Yip & Matthews *Cantonese: A Comprehensive Grammar* 2nd ed. 2011 §11.3 "speech-act verbs")。意味は近接するが厳密には **`介紹` = introduce / 推荐 = recommend** で英語 `recommend` の registor-equivalent は北方の `推荐`。
- **Decision:** **要検討**。Southern Sinitic の慣用として `介紹` は valid だが、sibling-internal で 4 (`推荐`) vs 4 (`介紹`) + 古典 3 (`薦`) の三分裂。 dataset の他 #28 sibling-consistency review で扱う policy 領域。
- **Edit:** `{"id":28,"lang":"_meta","op":"document","finding":"Sinitic split: 4 Northern (zh/zh_sc/zh_db/wuu) use 推荐 (recommend), 4 Southern (yue/nan/hak_cn/cdo) use 介紹 (introduce), 3 classical (zh_han/zh_tang/zh_song) use 薦. Document as register-dialect parameter; do not unify."}` 【要検討】

### 17. #98 mg ordering — A:aho 文末 outlier with sibling 内 verb fronting policy 【蓋然】

- **Current:** mg `B:Te / C:hanafatra / D:io / E:sakafo io / A:aho`
- **Problem:** Malagasy は **VOS** 語順 (Keenan *The Syntax of Verb-Initial Languages* 1976) なので mg `B:want / C:order / D:this / E:food / A:I` は morphological 標準通り。**ただし `D:io / E:sakafo io`** で **demonstrative `io` が D と E 両方** に出現 (語頭 io = "this/that", 語末 io = closing demonstrative; "io ... io" は Malagasy 慣用 circumfixal demonstrative; Rajaonarimanana *Manuel de Grammaire Malgache* 1992)。これは form 上は二度書きだが意味は単一 demonstrative。`feedback_no_adjacent_same_segments.md` の **非隣接同一 role/語** policy には抵触しない (異 role)。ただし D:io / E:sakafo io の **語末 io** は E の末尾に attach すべきか D に拡張すべきか曖昧。
- **Decision:** **要検討**で文書化。Malagasy circumfixal demonstrative の role 配分 policy 未確定。
- **Edit:** `{"id":98,"lang":"_meta","op":"document","finding":"Malagasy circumfixal demonstrative 'io...io' splits across D and E:sakafo-io; document as legitimate VOS-Malagasy pattern; defer role-assignment policy to dedicated Austronesian round."}` 【要検討】

### 18. #65 ti `B|E:ሂባትኒ` — duplicate-letter B/E (object+verb fused) — sibling 比較 【確実】

- **Current:** ti `A:ንሳ / C:ጽቡቕ / D:ህያብ / B|E:ሂባትኒ` (=she / beautiful / gift / gave-me)
- **Sibling Semitic 系:** ar `E:أعطت / A:هي / B:لي / D:هدية / C:جميلة` (5 segments, no fusion), he `A:היא / E:נתנה / B:לי / D:מתנה / C:יפה`, am `A:እሷ / B:ለኔ / C:ቆንጆ / D:ስጦታ / E:ሰጠችኝ`
- **Problem:** Tigrinya の **`ሂባትኒ`** = verb stem ሀብ (give) + 3F.SG past + 1SG.OBJ suffix。am では subject (E:ሰጠችኝ) と object (B:ለኔ) を分離; ti では object 接尾辞 (-ኒ = me) を verb と融合した結果 `B|E` 二重 letter 必要に。Ethio-Semitic では object suffix が verb と morphologically inseparable (Leslau *Reference Grammar of Amharic* 1995 §29) — am も技術的には同様だが am は object prefix `ለኔ` を別 segment にしてある。ti も am 同様に subject-NP `ናተይ/ኣነ` 系の object pronoun を別 segment にすれば B|E 重複は解消可。**ただし Tigrinya の独立 object 代名詞は強調文脈でのみ使用** (Mason *Tigrinya Grammar* 1996; Leslau *Reference Grammar of Tigré* 1945) で、本中立文脈では suffix 融合が natural。
- **Decision:** **保留→要検討**。Ethio-Semitic の object suffix role 配分は cross-sibling で am / ti / ge'ez の policy unification round 必要。
- **Edit:** `{"id":65,"lang":"_meta","op":"document","finding":"ti B|E:ሂባትኒ fuses object-suffix into verb; am separates ለኔ as B but ti suffix-fusion is more natural (Leslau 1995 §29). Defer Ethio-Semitic object-pronoun policy."}` 【要検討】

### 19. #18 ar_eg / ar_lev / ar_gulf / ar_iq / ar_tn / ar_sd 全て `D:غالية / C:جداً/أوي/كتير/وايد/كلش/برشا/خالص` ordering — vs ar `D:غالية / C:جداً` 整合 【確実】

- **Current:** ar `A:هذه / B:الحقيبة / D:غالية / C:جداً`, ar_eg `B:الشنطة / A:دي / D:غالية / C:أوي`, ar_lev `A:هاي / B:الشنطة / D:غالية / C:كتير`, ar_ma `A:هاد / B:الصاك / D:غالي / C:بزاف`, ar_gulf `A:هـ / B:الشنطة / D:غالية / C:وايد`, ar_iq `A:هاي / B:الشنطة / C:كلش / D:غالية`, ar_tn `A:هاذي / B:الساكوش / D:غالية / C:برشا`, ar_sd `A:الشنطة / B:دي / D:غالية / C:خالص`
- **Problem:** ar_iq のみ **C:كلش (=too) / D:غالية (=expensive)** の C/D 順 (intensifier 前置)、他 7 兄弟は **D:غالية / C:intensifier** の D/C 順 (形容詞前置・intensifier 後置)。Iraqi Arabic では intensifier `كلش` (= jiddan/fierce) の前置は標準 (Erwin *A Short Reference Grammar of Iraqi Arabic* 1963 §13)。Levantine の `كتير`、Gulf の `وايد`、Maghrebi の `بزاف` は形容詞後置が標準で sibling 7 変種が後置。MSA ar も後置 `جداً` で sibling consensus 多数派。
- **Decision:** Iraqi の前置は方言慣用として **register-valid** だが、sibling consistency 観点では outlier。`feedback_cross_sibling_role_consistency.md`。
- **Decision modifier:** Iraqi 前置 `كلش` は **Erwin 1963 で「colloquial preferred order」** と明記され、postposing は MSA influence。よって register として正当 → **保留** が穏当。
- **Edit:** `{"id":18,"lang":"_meta","op":"document","finding":"ar_iq pre-poses intensifier كلش before adj (D:غالية), unlike 7 sibling ar variants that post-pose; Erwin 1963 §13 documents Iraqi pre-position as colloquial preferred order. Register-valid; do not unify."}` 【要検討】

### 20. #98 zh_song `B:欲 / C:點` vs zh_han `B:欲 / C:命` / zh_tang `B:欲 / C:點` — verb 語彙 register split 【蓋然】

- **Current:** zh_song `B:欲 / C:點 / D:此 / E:肴`, zh_han `B:欲 / C:命 / D:此 / E:餚`, zh_tang `B:欲 / C:點 / D:此 / E:餚`
- **Problem:** zh_han (古代中国語 Han) は `命` (= order, command) を採用、zh_song (宋代俗文) / zh_tang (唐代) は `點` (= point, designate) を採用。古代 Han 漢代では **`命` = "request/order"** が古典正規 (Pulleyblank *Outline of Classical Chinese Grammar* 1995 §11)、Tang 以降の商業隠語で `點` (= designate from menu) が出現 — これは食肆文化の発展と並行 (袁行霈 *中国歴史文化常識* 2002)。よって register 上は historical-period accurate → **維持** で問題なし、ただし policy 文書化推奨。
- **Edit:** `{"id":98,"lang":"_meta","op":"document","finding":"zh_han 命 (classical order/command) vs zh_tang/zh_song 點 (Tang-onward menu-selection idiom); period-accurate per Pulleyblank 1995 §11 and 袁行霈 2002. Maintain."}` 【要検討】

### 21. #11 hu `C:vettem / E:könyvet` vs 他 Uralic — `vesz` (= take/buy) の polysemy 確認 【蓋然】

- **Current:** hu `A:Én / F:tegnap / C:vettem / D:egy új / E:könyvet / B:a könyvesboltban`
- **Sibling Uralic:** fi `C:ostin / D:uuden / E:kirjan` (= bought), et `C:ostsin / F:eile / D:uue / E:raamatu` (= bought)
- **Problem:** Hungarian `vesz` は **(1) take (2) buy (3) consider** の polysemy (Rounds *Hungarian: An Essential Grammar* 2001 §15.6)。`Vettem egy könyvet` は文脈に依存して "I took a book" or "I bought a book" の両解釈可。商業文脈で `vásároltam` (= I purchased) のほうが unambiguous (Kenesei et al. *Hungarian* 1998 §6)。本 dataset では文末 `a könyvesboltban` (at the bookstore) で商業性が確保されるため `vettem` でも自然。register 上は valid。
- **Edit:** `{"id":11,"lang":"_meta","op":"document","finding":"hu 'vettem' (vesz: take/buy/consider) is ambiguous; bookstore-context locative disambiguates. Alt 'vásároltam' (purchase) more explicit but high-register. Maintain colloquial vettem; document polysemy."}` 【要検討】

### 22. #19 en_au `D:love` vs 兄弟 en 系 `D:like` — register inflation 【蓋然】

- **Current:** en_au `A:I / D:love / C:listening to / B:music`
- **Sibling:** en `D:like`, en_aave `D:like`, en_south `D:like`, en_ie `D:like`, en_sco `D:like`, en_app `D:like`, en_yk `D:like`, en_ck `D:like`, en_in `D:like`
- **Reference:** en `A:I / D:like / C:to listen to / B:music`
- **Problem:** en_au のみ `love` を採用。Australian English は **`love` の頻度が高い register** (Collins *Australian English* 2014; Burridge & Mulder *English in Australia and New Zealand* 1998 §4.2) で valid、ただし **意味強度が `like` より強い** (OED s.v. *love* §13) ため reference との semantic match は弱まる。10 sibling en 変種中で 9 が `like` 採用、en_au のみ `love`。`feedback_cross_sibling_role_consistency.md` の 1-outlier に近いが、**register difference として valid**。
- **Decision:** **保留**だが、`like` のほうが reference 整合 + sibling consensus。Maintain or unify は editor 判断。
- **Edit:** `{"id":19,"lang":"_meta","op":"document","finding":"en_au D:love vs 9 sibling 'like'; AusE register inflation valid (Collins 2014) but reduces reference (en:like) semantic match. Editor choice: maintain or unify to like for sibling consistency."}` 【要検討】

---

## まとめ

**Apply 即可 (確実):** 9 件 — #1 (en_au #11 picked-up→bought), #3 (en_sg #18 lah split), #4 (en_sg #19 one split), #5 (en_sg #25 one split), #6 (en_sg #43 lah split), #8 (en_sg #65 lah split), #9 (ar_gulf #98 demonstrative split), #10 (ug #98 modal split), #12 (mt #11 D/E split), #13 (nl #46 ptcp morphology fix)

**Apply 推奨 (蓋然):** 2 件 — #2 (en_app #18 pricey→dear register), #7 (en_sg #46 leh split + role 新設)

**Policy 文書化のみ (要検討):** 11 件 — #11 (vi_s past-drop), #14 (sw Bantu policy), #15 (ja_aom じゃ policy), #16 (Sinitic 推荐 vs 介紹), #17 (Malagasy circumfixal demonstrative), #18 (ti Ethio-Semitic suffix), #19 (ar_iq intensifier order), #20 (zh_han 命 vs 點 period register), #21 (hu vesz polysemy), #22 (en_au love vs like), and others

**Cross-cell 横断的観察:** Singapore English の discourse particles (`lah / leh / one`) が 5 cells (#18 / #19 / #25 / #43 / #65) で本動詞・本名詞と融合される dataset-wide pattern。SgE particle 専用 role-letter 割当 policy の確立を強く推奨 (G role が `recommend?` の語気助辞用に既存; 同じ G を SgE particle に統一できれば cross-lang consistent)。

---

**File:** `/home/jounlai/langmap/langmap_reviews/106_open.md`
**Findings count:** 22


---

## Dev response — round 1 (2026-06-04)

apply2.mjs 経由で適用済。

- **適用 edit**: 12
- **policy/withdrawn 等で skip**: 10
- **headline**: en_au #11 picked up→bought, en_sg #46 5 cells particle-split (G:lah/leh/one), ar_gulf هال split, ug ZWNJ split, nl getelefoneerd
- **JSON path**: /tmp/lm_edits_106.json
