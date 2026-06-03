# LangMap データレビュー #41 — 疑問助詞・疑問語標識の横断分節監査 (Polar / Wh questions cross-cutting)

## レビュアー自己紹介 (ペルソナ)

岡崎 久美子 (Kumiko Okazaki / handle: **@kanren_kogo**)。専門は言語類型論・形態統語論、特に **疑問構造 (interrogatives) の通言語比較**。東京外国語大学大学院修了 (博士: 「諾否疑問文の標識戦略 — 4大語族 80言語の対照研究」)。常用典拠は König & Siemund "Speech Act Distinctions in Grammar" および "Polar Interrogatives" in Shopen (ed.) *Language Typology and Syntactic Description* vol.1 (2nd ed., Cambridge 2007)、Dryer "Polar Questions" in *WALS Online* (Chapter 116)、Sadock & Zwicky "Speech Act Distinctions in Syntax" (Shopen 1985)、Aikhenvald *The Art of Grammar* (Oxford 2015) ch.7、Bhatt & Dayal "Rightward scrambling as rightward remnant movement" (2007) — 南アジア疑問詞配列。膠着語の疑問接辞分析は Lewis *Turkish Grammar* (Oxford 2nd ed.)、Sebüktekin "Turkish Mi-interrogatives" (1971)、Karlsson *Finnish: An Essential Grammar* (Routledge 2008) を典拠とする。

今回は **既存 closed-review #01〜#38 が個別言語族 (Japonic / Koreanic / Vietic / Sinosphere / Indo-Aryan / Romance / Germanic …) の中で完結させてきた疑問助詞処理を、「100文中 type:question にあたる7文の全約 140 言語横断」で再集計**し、(a) 疑問助詞の独立分節 vs 融合の不統一、(b) 疑問助詞が割り当てられる role-letter の言語内不整合、(c) 膠着言語の疑問接辞に対する ZWNJ glue marker 欠落、(d) 疑問助詞そのものの欠落 (形態論的に必須なのに省略) を精査した。個別 dialect の自然さ (例: ja_aom「だがや」が津軽として自然か) には踏み込まず、**疑問標識として segment 切り分けが行われているか・同一言語内で7問にわたり一貫しているか・親言語との role-letter 整合は取れているか** のみを問う。

## 検証範囲

- **対象文 (7件)**: `s.type === 'question'` を `node -e` で抽出した結果、`#4 Where is the nearest station? / #10 Can you speak English? / #16 What time does the movie start? / #28 良いレストランを教えていただけますか？ / #40 郵便局がどこにあるか知っていますか？ / #68 ここに座ってもいいですか？ / #99 このお土産はいくらですか？` の7問。Wh-question = 4件 (#4, #16, #99, #40の埋込wh)、Polar (yes/no) question = 3件 (#10, #28, #68)、Embedded wh = 1件 (#40)。
- **対象言語**: 全約 140 変種 (ja+方言9 / ko+方言6 / Sinosphere 系 zh/yue/nan/wuu/hak_cn/zh_sc/zh_db/cdo/zh_han/zh_tang/zh_song / vi+vi_c/vi_s/vi_nom / Thai+isan/n/s / Indic / Iranian / Turkic / Arabic+方言6 / Romance / Germanic / Bantu / Austronesian / artificial)。
- **着目位置**: 各文の最終 segment (final particle slot) と sentence-initial の疑問詞 (hal / czy / é / k'ya etc.)。

## 方針 — 何を「指摘」とし、何を「許容」とするか

1. **既存 closed の言語内決定は尊重**。例えば #01_closed で `ja_aom D:「あるんず」` / `ja_kyo D:「やの」` 等の融合形は方言形態として KEEP 確定済み — これは語内形態素境界が共時的に切れないという判定で、本レビューでも再提案しない。
2. **指摘対象**:
   - (a) **同一言語が同型の疑問助詞を文ごとに切ったり融合させたりして不統一** (例: pl が #10 で `D:「Czy」` 独立、#28/40/68 で `Czy mógłby/Czy wiesz/Czy mogę` と融合)。
   - (b) **同一言語の疑問助詞 role-letter が文ごとに揺れる** (例: tr の interrogative clitic が #10 `D:musun` / #28 `A:misiniz` / #40 `A:musunuz` / #68 `D:miyim` と A↔D で揺らぐ)。
   - (c) **明白に分離可能な疑問助詞が独立 segment にされていない** (例: ms `-kah` がすべて動詞に融合、bo `-pas/-bam/-gam` が文ごとに切ったり融合したり)。
   - (d) **膠着語の疑問接辞に ZWNJ glue marker が無い** — 既存方針 `feedback_glue_marker.md` ではトルコ系・ウラル系・韓国語の接辞には ZWNJ 前置が推奨。例: tr `D:「musun」` (ZWNJ なし)、az/kk のいくつかが ZWNJ 欠落、ko_yb `E:「슴까」` は付与済みだが他 ko 方言と不揃い。
   - (e) **疑問助詞が形態論的に必須なのに丸ごと欠落** (例: ja_osa #40 / ja_hak #40 — どちらも疑問文末辞ゼロで平叙と区別できない)。
   - (f) **疑問助詞が誤った role-letter に乗っている** (例: ht #28 `G:「Èske」` ですが Èske は sentence-initial であって final particle ではない、sw `A:「Je」` は subject 役ではなく疑問標識)。
3. **許容**:
   - 英語 D:「Do」/「Can」 + D:「know」/「speak」 の二重 D は subject-aux inversion + 動詞の正規 D 配置で **#17_closed で KEEP 確定済**。同型の zh `D:「会」… D:「吗」`、ur `D:「کیا」… D:「سکتے ہیں」`、hi `E:「क्या」… E:「जानते हैं」` も同じ「多義カラー」原則で許容。
   - Wh-question で疑問助詞ゼロの言語 (ja の場合は wh でも か が付くが、zh/es/fr/it の wh は intonation のみ) は語用論的に自然。
   - el_grc の文末 `;` (Greek question mark) は punctuation として最終 segment 内に保持され、これは正字法上正当 (Hellenistic Greek の正書法では `;` が疑問符)。

確信度: **【確実】**= 疑問助詞欠落・role 取り違え・同一言語内の明白な不統一、**【蓋然】**= ZWNJ 欠落や分節境界の不揃いで分割提案、**【要検討】**= 語用論的判定の余地あり。

---

## 指摘事項 (Issues found)

### 1. #28 / #40 ht — sentence-initial「Èske」が #28 だけ G に置かれる【確実】
**Current:** #28 ht `G:「Èske」 B:「ou」 A:「ka」 C:「rekòmande」 D:「yon」 F:「bon」 E:「restoran」` / #40 ht `E:「Èske ou konnen」 …` / #68 ht `D:「Èske」 A:「mwen」 …`
**Problem:** Haitian Creole の `Èske` は **sentence-initial 疑問導入辞** (フランス語 *est-ce que* 由来) で、語順上いつも文頭。他文では D / E に乗るのに、**#28 だけ G** に置かれており、G は他言語で文末疑問助詞 (ja「か」、ko「요」、vi「không」、zh「吗」、th「ไหม」) が乗る色である。ht #28 では G が文頭、しかも他言語の `G:文末助詞` と意味的役割が逆になる。en 参照は `A:「Could」 B:「you」 C:「recommend」 D:「a」 F:「good」 E:「restaurant」` で D/F/E は en と一致しているのに、Èske だけが孤立して G を占有している。Role-letter の意味論を破る確実な不整合。
**Proposed fix:** #28 ht を **`D:「Èske」 B:「ou」 A:「ka」 C:「rekòmande」 D:「yon」 F:「bon」 E:「restoran」`** に統一 (#68 と同じく D 置き)。または en の `A:「Could」` に揃えて `A:「Èske ou」 ...` とする。重要なのは G を空けること。
**確信度:** 【確実】

### 2. #28 fa「آیا」が D 中段に置かれる — 他言語の sentence-initial 規約と乖離【確実】
**Current:** fa #28 `D:「آیا」 B:「شما」 A:「می‌توانید」 F:「یک」 E:「رستوران خوب」 C:「پیشنهاد بدهید」`
**Problem:** ペルシア語 `آیا` (āyā) は polar question 用の sentence-initial 標識 (語用論的に省略可)。他 #28 で同型の sentence-initial 疑問詞は **`A:「क्या」 (hi)` / `A:「کیا」 (ur)` / `A:「ਕੀ」 (pa)` / `A:「के」 (ne)` / `A:「শું」 (gu)` / `A:「আপনি কি」 (bn 融合)`** とすべて **A** に乗っているのに、fa だけ **D** で出力されている。さらに fa の `A` には modal `می‌توانید` が乗っており、これは他 Indic 言語が C/D の末尾に置く「可能助動詞」(en `A:「Could」` ですが fa では文末)。すなわち fa の役割割当全体が他 Iranian/Indic 兄弟と不整合。
**Proposed fix:** fa #28 を `A:「آیا」 B:「شما」 D:「می‌توانید」 F:「یک」 E:「رستوران خوب」 C:「پیشنهاد بدهید」` のように、sentence-initial 疑問詞は A、modal は D に置く。あるいは modal を A にするなら آیا を D とせず別レターに統一。少なくとも `آیا` を Indic 兄弟と同じ A に揃えるのが最小修正。
**確信度:** 【確実】

### 3. #28 sw / #10 sw「Je」が A (subject) として割り当てられている【確実】
**Current:** #10 sw `A:「Je」 D:「unaweza」 C:「kuongea」 B:「Kiingereza」` / #28 sw `A:「Je」 C:「unaweza kupendekeza」 F:「mkahawa」 E:「mzuri」`
**Problem:** スワヒリ語 `Je` は sentence-initial の polar question marker (Ashton *Swahili Grammar*; Mohamed *Modern Swahili Grammar*)、subject 代名詞ではない。en 参照は `A:「you」` (subject), sw 自身の `A:「unaweza」` は動詞に主語接頭辞 -u- が内包される (pro-drop)。それなのに sw の A に主語ではなく **疑問標識 Je** が乗っているのは **role-letter の意味カテゴリ違反**。他 sw 文で A は consistently 「主語名詞句/代名詞」に当てられている (#4 sw `A:「iliyo karibu zaidi」` は形容詞 — これも別の問題だが)。`Je` は ko `E:「요」`、vi `E/G:「không」` と並ぶ polar particle で、本来 G (#28 では他言語が文末助詞に充てる color) または別レターを使うべき。
**Proposed fix:** #10 sw `G:「Je」 D:「unaweza」 C:「kuongea」 B:「Kiingereza」` (G に疑問標識を移動、A は pro-drop で空) / #28 sw `G:「Je」 C:「unaweza kupendekeza」 F:「mkahawa」 E:「mzuri」`。同じ Bantu の zu/xh が #10 で疑問標識を表に出していない (intonation) のに対し、sw は明示的 Je を使うので G で表現するのが正確。
**確信度:** 【確実】

### 4. tr の疑問接辞 role-letter が文ごとに A↔D で揺れる — 言語内不統一【確実】
**Current:**
- #10 tr `A:「Sen」 B:「İngilizce」 C:「konuşabiliyor」 D:「musun」` — 接辞 -mu(sun) が D 末尾
- #28 tr `F:「İyi」 E:「bir restoran」 C:「tavsiye edebilir」 A:「misiniz」` — 接辞 -mi(siniz) が **A**
- #40 tr `B:「Postane」 C:「nerede」 E:「biliyor」 A:「musunuz」` — 接辞 -mu(sunuz) が **A**
- #68 tr `B:「Buraya」 C:「oturabilir」 D:「miyim」` — 接辞 -mi(yim) が D
**Problem:** トルコ語の疑問接辞 `-mı/-mi/-mu/-mü` は前接語 (clitic) として直前の語に音韻的に付くが、形態論的には独立 (Lewis §169-172)。LangMap の役割色としては **「文末疑問助詞」=G/E/D の最終色** に当てるのが en `D:「Can」` 反転、ja `E:「か」`、vi `E:「không」` との整合性に資する。ところが tr は **同じ -mIsXn 系疑問接辞を #10 D / #28 A / #40 A / #68 D** と四文で四通りに配ってしまっている。**#28 と #40 の A 配置は subject 役**(他 Turkic 兄弟 #28 az/uz/tk `A:「mi」`、#40 az `E:「bilirsiniz」` 末尾接辞)と概念的に衝突。Subject pro-drop が tr の通常状態なので A 色は空であるべきだが、疑問接辞を A に詰め込むのは subject role の概念汚染。
**Proposed fix:** tr の `-mIsXn` 疑問接辞は **常に D (または最後の自由文法色)** に統一。具体的には:
- #28 tr A:「misiniz」 → D:「‌misiniz」 (ZWNJ 付き、F/E/C/D の自然順)
- #40 tr A:「musunuz」 → 別 letter (例: G:「‌musunuz」 で en `E:「Do/know」` の最終末尾と整合)
さらに ZWNJ glue marker を前置 (`‌mi`) すれば、kk #28 `A:「ба」` (ZWNJ なし) / uz/tk `A:「‌mi」` (ZWNJ あり) の Turkic 兄弟間不揃いも修正方向。
**確信度:** 【確実】

### 5. #28 / #40 / #68 pl「Czy」が動詞と融合 — #10 は独立、内部不統一【確実】
**Current:**
- #10 pl `D:「Czy」 A:「pan/pani」 C:「mówi」 B:「po angielsku」` — Czy 独立 ✓
- #28 pl `A:「Czy mógłby」 B:「Pan」 C:「polecić」 F:「dobrą」 E:「dobrą」` — Czy + modal 融合
- #40 pl `E:「Czy wiesz」 C:「gdzie」 D:「jest」 B:「poczta」` — Czy + 動詞 融合
- #68 pl `D:「Czy mogę」 C:「tu usiąść」` — Czy + modal 融合
**Problem:** ポーランド語 `Czy` は明白に独立な polar particle (Sentence-initial、Swan *Grammar of Contemporary Polish* §1245)。#10 で `D:「Czy」` と独立分節できているのに、他3問では動詞/助動詞と融合した一塊として扱われている。同一言語内の同一形態素を一貫して扱うべき。LangMap の分節方針 (`feedback_prefer_splitting_segments.md`) は「分割可能な要素は分割優先」を確立しており、Czy は確実に分割可能。
**Proposed fix:**
- #28 pl → `A:「Czy」 D:「mógłby」 B:「Pan」 C:「polecić」 F:「dobrą」 E:「restaurację」` (Czy を独立、modal を D に)
- #40 pl → `E:「Czy」 A:「‌wiesz」 ...` or 別 letter で動詞を分離 (E は知る動詞)
- #68 pl → `D:「Czy」 …別 letter:「mogę」 ...`
最低限 Czy が独立 segment になるよう揃える。
**確信度:** 【確実】

### 6. #28 / #40 / #68 ar「هل」が動詞と融合 — #10 では独立、内部不統一【確実】
**Current:**
- #10 ar `D:「هل」 A:「تستطيع」 C:「التحدث」 B:「باللغة الإنجليزية」` — هل 独立 ✓
- #28 ar `A:「هل يمكنك」 C:「أن توصي」 F:「بمطعم」 E:「جيد」` — هل + modal 融合
- #40 ar `E:「هل تعرف」 C:「أين」 D:「يوجد」 B:「مكتب البريد」` — هل + 動詞 融合
- #68 ar `D:「هل يمكنني」 C:「أن أجلس」 B:「هنا」` — هل + modal 融合
**Problem:** アラビア語 `هل` は polar question marker (Ryding *A Reference Grammar of Modern Standard Arabic* §11.2)、sentence-initial の独立 particle。#10 と同じ言語が他3問で融合しているのは形態素処理の不整合。さらに方言群 (ar_lev / ar_eg / ar_ma / ar_gulf / ar_iq / ar_tn / ar_sd) は **intonation のみで هل を省く** のが標準で、彼らは融合の問題が起きない (=現状自然) — つまり MSA の ar だけが内部で揺れている。
**Proposed fix:**
- #28 ar → `A:「هل」 D:「يمكنك」 C:「أن توصي」 F:「بمطعم」 E:「جيد」`
- #40 ar → `E:「هل」 + 動詞分離`
- #68 ar → `D:「هل」 + modal 分離`
を提案。最低限 #10 と同じく هل を独立 segment にする。
**確信度:** 【確実】

### 7. #28 / #40 / #68 he「האם」の独立 vs 融合の不統一【確実】
**Current:**
- #10 he `A:「אתה」 D:「יכול」 C:「לדבר」 B:「אנגלית」` — האם **なし** (intonation)
- #28 he `A:「האם תוכל」 C:「להמליץ」 E:「על מסעדה」 F:「טובה」` — האם + modal 融合
- #40 he `E:「האם」 A:「אתה」 E:「יודע」 C:「איפה」 B:「הדואר」` — האם 独立 ✓
- #68 he `D:「האם אני יכול」 C:「לשבת」 B:「כאן」` — האם + 主語 + modal の三重融合
- #4/#16/#99 he `האם` なし (wh, intonation)
**Problem:** ヘブライ語 `האם` は polar 疑問詞 (sentence-initial、Glinert *Modern Hebrew: An Essential Grammar* §47.2)。#40 で `E:「האם」` 独立分節ができているのに、#28 では modal と融合、#68 では **主語代名詞 אני まで巻き込んだ三要素融合** (האם=Q + אני=主語 + יכול=modal)。#68 は特に主語 אני を独立 A に切るべきで (en 参照 `A:「I」` あり)、分節漏れが2件同時発生。
**Proposed fix:**
- #28 he → `A:「האם」 D:「תוכל」 C:「להמליץ」 E:「על מסעדה」 F:「טובה」`
- #68 he → `D:「האם」 A:「אני」 E or別:「יכול」 C:「לשבת」 B:「כאן」` (主語 A と modal を分離)
最低限 `האם` の独立化と #68 の主語切り出しを同時に行う。
**確信度:** 【確実】

### 8. mn (Khalkha Mongolian) 疑問助詞 вэ/уу の独立 vs 融合の文ごと不統一【確実】
**Current:**
- #4 mn `A:「Хамгийн ойрын」 B:「станц」 C:「хаана」 D:「байдаг вэ」` — вэ 動詞に融合
- #10 mn `A:「Чи」 B:「англиар」 C:「ярьж чадах」 D:「уу」` — уу 独立 ✓
- #16 mn `B:「Кино」 A:「хэдэн цагт」 C:「эхлэх」 D:「вэ」` — вэ 独立 ✓
- #28 mn `A:「Та」 F:「сайн」 E:「ресторан」 C:「санал болгож чадах уу」` — уу 動詞句に融合
- #40 mn `B:「Шуудангийн газар」 C:「хаана байдгийг」 A:「та」 E:「мэдэх үү」` — үү 動詞に融合
- #68 mn `B:「Энд」 C:「сууж」 D:「болох уу」` — уу 動詞に融合
- #99 mn `A:「Энэ」 B:「бэлэг дурсгал」 C:「хэд」 D:「вэ」` — вэ 独立 ✓
**Problem:** モンゴル語の `вэ/уу/үү` は疑問接辞 (wh は вэ、polar は уу/үү — Janhunen *Mongolian* (Benjamins 2012) §22)、形態論的に独立。#10/#16/#99 で独立分節ができているのに、#4/#28/#40/#68 で動詞句に融合 — **7文中4文で取りこぼし**。さらに mn_cn (Mongolic Cyrillic→Mongol-script) も #28 `C:「санал болгож чадах уу」` 同型融合 / #99 `D:「ᠪᡠᠢ」` 独立、と内部分裂。
**Proposed fix:**
- #4 mn → `... C:「хаана」 D:「байдаг」 E:「вэ」` (вэ を独立 E に)
- #28 mn → `... C:「санал болгож чадах」 D:「уу」`
- #40 mn → `... E:「мэдэх」 F:「үү」` (or G に)
- #68 mn → `... C:「сууж」 D:「болох」 E:「уу」`
mn_cn も同期。Mongolic family 内の独立疑問接辞は他兄弟 (#16 mn_cn `D:「ᠪᡠᠢ」`) と同じく独立 letter で揃えるべき。
**確信度:** 【確実】

### 9. bo (Tibetan) 疑問接辞 -pas/-bam/-gam の独立 vs 融合不統一【蓋然】
**Current:**
- #4 bo `D:「ཡོད་རེད་」` — 疑問語尾なし (wh)
- #10 bo `D:「ཐུབ་ཀྱི་རེད་པས་」` — pas 融合
- #16 bo `D:「བརྩམ་གྱི་རེད་」` — 疑問語尾なし (wh)
- #28 bo `A:「ཁྱེད་ཀྱིས」 F:「བཟང་པོའི」 E:「ཟ་ཁང」 C:「ངོ་སྤྲོད་བྱེད」 A:「ཐུབ་བམ」` — bam 独立 + **A 重複**
- #40 bo `... E:「ཤེས་ཀྱི་ཡོད་པས་」` — pas 融合
- #68 bo `A:「ང་」 B:「འདིར་」 C:「བསྡད་」 D:「ཆོག་གམ་」` — gam 融合
- #99 bo `A:「འདི་」 B:「དྲན་རྩེན་」 C:「གོང་ག་ཚོད་」 D:「རེད་」` — wh, 疑問語尾なし
**Problem:** チベット語の polar question marker `-pas/-bam/-gam` (auxiliary 末尾、Hahn *Lehrbuch der klassischen tibetischen Schriftsprache* §38; DeLancey "Lhasa Tibetan" in Thurgood & LaPolla 2003) は接辞だが分離可能。#28 で `A:「ཐུབ་བམ」` と独立分節できている (ただし役割色 A の duplicate)、他では融合。#28 の **A 重複** (ཁྱེད་ཀྱིས = you (A) ... ཐུབ་བམ = can+Q (A 重複)) は #17_closed で議論された「多義カラー」だが、A=subject と A=modal+Q は意味カテゴリが違いすぎ、本ケースは duplicate 正当化の典型例 (zh `D:能…D:吗`、ur `D:کیا…D:سکتے ہیں`) と異なる:
- zh/ur の duplicate D は **同じ「modal+疑問」カラー領域**を二度使う。
- bo #28 の duplicate A は **subject (你) と modal+Q (能+ば)** の異種同色 — 概念汚染。
**Proposed fix:**
- bo #28 を `A:「ཁྱེད་ཀྱིས」 F:「བཟང་པོའི」 E:「ཟ་ཁང」 C:「ངོ་སྤྲོད་བྱེད」 D:「ཐུབ་བམ」` (modal+Q を D に)
- bo #10/#40/#68 の `-pas/-gam` を末尾接辞として独立 letter に分離 (例: bo #10 `D:「ཐུབ་ཀྱི་རེད་」 E:「‌པས་」`、ZWNJ 付き)
最低限 #28 の A 重複を解消。
**確信度:** 【蓋然】(チベット語接辞の分節境界には記述揺れあり、独立か拘束かの判断は族内学者によって幅がある)

### 10. ms「-kah」疑問接辞が動詞と融合、分離せず — 膠着の独立形態素として ZWNJ 分節推奨【蓋然】
**Current:**
- #10 ms `D:「Bolehkah」` — Boleh+kah 融合
- #28 ms `A:「Bolehkah」` — 融合
- #40 ms `E:「Adakah awak tahu」` — Adakah+awak+tahu 三要素融合
- #68 ms `D:「Bolehkah」` — 融合
- #99 ms `C:「Berapakah harga」` — Berapakah+harga 融合 (wh + kah は語形成として固着、許容)
- #4/#16 ms 疑問詞なし
**Problem:** マレー語の `-kah` は polar/wh-強調の clitic (Asmah Haji Omar *Nahu Melayu Mutakhir*; Sneddon *Indonesian Reference Grammar*)。明白に分離可能で `Boleh + ‌kah` と書ける。LangMap の `feedback_glue_marker` 方針 (膠着接辞は ZWNJ 前置で独立 segment) を適用するなら ms の `-kah` も同様に分節するのが整合的。tr の `-mı` / fi の `-ko` / ja_aom の願望接辞「‌てぇ」と同型。
**Proposed fix:**
- #10 ms → `D:「Boleh」 G:「‌kah」 A:「awak」 C:「bertutur」 B:「bahasa Inggeris」`
- #28 ms → `A:「Boleh」 G:「‌kah」 B:「anda」 ...`
- #40 ms → `E:「Ada」 G:「‌kah」 A:「awak」 ...`
- #68 ms → 同様
最低限 `-kah` を独立 G (文末疑問助詞色) に切り出し ZWNJ glue で表記。
**確信度:** 【蓋然】(クリティック分節は族内記述に幅。ただし ZWNJ で表面表記は不変なので低リスク修正)

### 11. id / jv「Apakah」が D/E で文ごとに揺れる + 重複問題【蓋然】
**Current:**
- #10 id `D:「Apakah」 A:「kamu」 D:「bisa」 C:「berbicara」 B:「bahasa Inggris」` — Apakah=D, modal=D, **D 重複**
- #10 jv `D:「Apakah」 A:「kamu」 D:「bisa」 C:「ngomong」 B:「bahasa Inggris」` — 同型
- #40 id `E:「Apakah」 A:「kamu」 E:「tahu」 C:「di mana」 B:「kantor pos」 D:「berada」` — Apakah=E, 動詞=E, **E 重複**
- #40 jv `E:「Apakah」 A:「kamu」 E:「ngerti」 C:「ing mana」 B:「kantor pos」 D:「ana」` — 同型
- #28 id `A:「Bisakah」 B:「Anda」 C:「merekomendasikan」 E:「restoran」 F:「yang bagus」` — Bisa+kah を A に融合 (Apakah は採らない)
- #28 jv `A:「Saged」 B:「sampeyan」 C:「nyaranke」 E:「restoran」 F:「sing apik」` — Apakah/-kah 無し
- #68 id `D:「Boleh」 A:「saya」 C:「duduk」 B:「di sini」` — 疑問詞 Apakah 無し (許容)
- #68 jv `D:「Olèh」 A:「aku」 C:「lungguh」 B:「ing kéné」` — 同
- #4/#16/#99 id/jv 疑問詞無し (wh)
**Problem:** インドネシア語/ジャワ語の `Apakah` は polar 疑問詞 (sentence-initial) で `-kah` を含む。#10 では D 重複 (Apakah=Q-marker と bisa=modal が同 D)、#40 では E 重複 (Apakah と tahu)。**役割色 D を Q-marker と modal で二度使うのは zh/ur と同型の許容パターン**だが、#10 と #40 で **同じ Apakah が D と E に揺れる**のは一貫しない。さらに #28 では Apakah を採らず Bisakah (動詞+kah) として A に詰め、jv #28 は Apakah も -kah も無し — **同じ「polar question」を表すのに3パターン**。
**Proposed fix:** id/jv の Apakah は **常に sentence-initial 専用色** (例えば G を文頭固定で使う) または **D で統一**することを推奨。最低限 #10 と #40 を同じ color に揃える。同時に #28 でも Apakah を任意で立てる選択肢を検討 (現状の Bisakah 融合は語形成として固着なので KEEP も可)。
**確信度:** 【蓋然】

### 12. ja_osa / ja_hak #40 — 疑問助詞が完全に欠落【確実】
**Current:**
- ja_osa #40 `B:「郵便局」 C:「どこに」 D:「あるか」 E:「知っとる」` — 疑問末辞ゼロ
- ja_hak #40 `B:「郵便局が」 C:「どこに」 D:「あるか」 E:「知っとう」` — 同
**Problem:** #40 は「知っていますか？」= polar question (Do you know …?)。標準語 ja `F:「か」` および ja_kyo `F:「か」`、ja_edo `F:「か」`、ja_heian `E:「知り給ふや」` (や), ja_aom `E:「知ってらがや」` (がや), ja_oki `E:「知っとーがやー」` (がやー), ja_hir `E:「知っとるかいの」` (かいの), ja_mvi `E:「しっちゅーが」` (が), ja_rys `E:「しっちゅんな」` (な) — 他全変種は何らかの疑問末辞 を持つ。ja_osa の「知っとる」、ja_hak の「知っとう」は **平叙形そのものと完全同形** で、疑問の文法標識ゼロ。ja_osa は #10 `E:「ん」`, #28 `G:「か」`, #99 `D:「やの」` でちゃんと疑問末辞を持つので、**#40 が単独で欠落**しているのは取りこぼし。ja_hak も #4 `D:「と」`, #16 `D:「と」`, #28 `G:「と」`, #68 `E:「か」`, #99 `D:「すると」` で疑問末辞 (と/か) を保持。**両方とも #40 だけ取り残し**。
**Proposed fix:**
- ja_osa #40 → `E:「知っとる」 F:「ん」` (ん疑問末辞) または `D:「あるか」 E:「知っとる」 F:「やの」`
- ja_hak #40 → `E:「知っとう」 F:「と」` (と疑問末辞)
他文の方言文末辞と同型に揃える。
**確信度:** 【確実】

### 13. ja #40 の D:「あるか」 — か が D に融合、E:「知っています」 F:「か」 と二重か【蓋然】
**Current:** ja #40 `B:「郵便局が」 C:「どこに」 D:「あるか」 E:「知っています」 F:「か」`
**Problem:** ja の D:「あるか」 の「か」は **埋込疑問 (embedded wh の意の「か」)**、F:「か」 は **主節 polar Q の「か」**。同じ仮名「か」が異なる文法機能 (補文標識 vs 主節疑問助詞) で2回現れている。形態論的には正しいが、Role-letter の意味的整合を見ると **D:「あるか」 の「か」は補文標識** であり、本来 D 末尾の `か` は別 letter にした方が cross-language で見やすい。比較すると ja_aom `D:「あるか」 E:「知ってらがや」` も同型で D の か は埋込補文標識、E の がや は主節疑問助詞。少なくともこれが「二重 か」ではないこと (機能差) を closed-review に注記すべき。
**Proposed fix:** 修正不要、ただし closed-review に「ja #40 の D:「あるか」の か は補文標識、F:「か」 は主節疑問助詞で機能が異なる」と注記。
**確信度:** 【蓋然】(機能差として注記のみ)

### 14. bn 疑問助詞「কি」の独立 vs 省略の不統一【蓋然】
**Current:**
- bn #4 `A:「নিকটতম」 B:「স্টেশন」 C:「কোথায়」` — kī なし (wh)
- bn #10 `A:「আপনি」 D:「কি」 B:「ইংরেজি」 C:「বলতে পারেন」` — kī 独立 D ✓
- bn #16 `A:「কয়টায়」 B:「সিনেমা」 C:「শুরু হয়」` — wh、kī なし
- bn #28 `A:「আপনি কি」 F:「একটি ভালো」 E:「রেস্তোরাঁ」 C:「সুপারিশ করতে পারেন」` — kī を主語に融合
- bn #40 `A:「আপনি」 C:「কোথায়」 B:「পোস্ট অফিস」 D:「আছে」 E:「জানেন」` — kī 欠落、polar 疑問なのに standard 平叙形
- bn #68 `A:「আমি」 B:「এখানে」 C:「বসতে」 D:「পারি」` — kī 欠落、polar 疑問
- bn #99 `A:「এই」 B:「স্যুভেনির」 C:「কত」` — wh
**Problem:** ベンガル語の `কি` (ki) は polar question particle (Thompson *Bengali* §7.5)、sentence-initial も sentence-final も可。Polar 疑問は intonation でも可だが書記語では明示するのが規範。#40/#68 で **polar 疑問なのに কি 完全脱落**しており、#10 で D:「কি」と書ける言語が **同じ polar 疑問の他文で削る**のは内部不統一。#28 では `A:「আপনি কি」` と主語融合 — これも他文で独立できているのに #28 で融合は不揃い。
**Proposed fix:**
- bn #40 → `A:「আপনি」 E:「কি」 C:「কোথায়」 B:「পোস্ট অফিস」 D:「আছে」 F:「জানেন」` (কি 補充)
- bn #68 → `A:「আমি」 D:「কি」 B:「এখানে」 C:「বসতে」 E:「পারি」` (কি 補充)
- bn #28 → `A:「আপনি」 D:「কি」 F:「একটি ভালো」 ...` (主語と分離)
最低限 polar 疑問3文 (#10/#28/#40/#68) で kī を独立 segment に揃える。
**確信度:** 【蓋然】(口語ではゼロ標示も自然だが、書記標準として明示が一般的)

### 15. hi #10「क्या」欠落 — 他 polar 疑問 #28/#40/#68 では明示するのに不整合【蓋然】
**Current:**
- hi #10 `A:「आप」 B:「अंग्रेज़ी」 C:「बोल」 D:「सकते हैं」` — क्या なし (polar、平叙形と同形)
- hi #28 `A:「क्या」 B:「आप」 D:「कोई」 F:「अच्छा」 E:「रेस्तरां」 C:「सुझा सकते हैं」` — क्या 独立 ✓
- hi #40 `E:「क्या」 A:「आप」 E:「जानते हैं」 B:「डाकघर」 C:「कहाँ」 D:「है」` — क्या 独立 E ✓ (E 重複は許容パターン)
- hi #68 `D:「क्या」 A:「मैं」 B:「यहाँ」 C:「बैठ सकता हूँ」` — क्या 独立 ✓
- #4/#16/#99 hi 疑問詞なし (wh)
**Problem:** ヒンディー語の `क्या` (kya) は polar 疑問詞 (sentence-initial が一般、Kachru *Hindi* §10)。#28/#40/#68 では明示しているのに **#10 だけ取りこぼし**。同じ「modal "can" + verb」構造の polar 疑問が #10 だけ kya なしというのは内部不統一。
**Proposed fix:** hi #10 を `D:「क्या」 A:「आप」 B:「अंग्रेज़ी」 C:「बोल」 E:「सकते हैं」` (kya を D に追加、modal を E に分離) または `E:「क्या」` (sentence-initial で他 #40 と同 letter)。**追加 kya を立てる**。
**確信度:** 【蓋然】(口語ではゼロ可、ただし他3文との整合上明示が望ましい)

### 16. zh_sc / zh_db 文末疑問助詞「不嘛/不/啊/呐」の融合 — 切り出し可能【蓋然】
**Current:**
- zh_sc #4 `C:「在哪儿嘛」` — wh +「嘛」融合
- zh_db #4 `C:「在哪儿啊」` — wh +「啊」融合
- zh_sc #10 `E:「不嘛」` — A-not-A `不` +「嘛」融合
- zh_db #10 `E:「不」` — `不` 単独 ✓
- zh_sc #16 `C:「开始嘛」` — 動詞 +「嘛」融合
- zh_db #16 `C:「开始啊」` — 動詞 +「啊」融合
- zh_sc #40 `E:「不嘛」` — A-not-A `不` +「嘛」融合 (但し E は知道のため duplicate)
- zh_db #40 `E:「不」` 独立
- zh_sc #68 `D:「不嘛」` — A-not-A `不` +「嘛」融合 (D 重複)
- zh_db #68 `D:「不」` ✓
- zh_sc #99 `C:「好多钱嘛」`、zh_db #99 `C:「多少钱呐」` — wh 疑問詞 +「嘛/呐」融合
**Problem:** 四川話 (zh_sc)・東北話 (zh_db) の文末助詞「嘛/啊/呐」は **discourse particle** (Cantonese 啦/咧 と同型) で、形態論的に独立しており切り出せる。zh_db が #10/#40/#68 で「不」を独立 E/D にできているのに、zh_sc は **常に動詞・wh と融合**。さらに「不」(A-not-A 構造の否定半分) と「嘛」(discourse particle) は意味が別 — 融合塊で扱うと「不嘛」=否定+ムード という二要素を一つの role に押し込む。
**Proposed fix:**
- zh_sc #10 → `E:「不」 F:「嘛」` (不と嘛を分離)
- zh_sc #16 → `C:「开始」 D:「嘛」` (or 別 letter)
- zh_db #16 → `C:「开始」 D:「啊」`
- zh_sc #4 / zh_db #4 / zh_sc/zh_db #99 同様
最低限「嘛/啊/呐」と本動詞/wh 部分を分離。
**確信度:** 【蓋然】(discourse particle の独立性は記述あり、ただし分析者により幅)

### 17. yo (Yoruba) 疑問標識「Ṣé」の不統一 — #4 と #99 で別形態 + 役割色不一致【蓋然】
**Current:**
- yo #4 `C:「Níbo」 D:「‌ni」 A|B:「ibùdó tí ó sún jù lọ」 D:「wà」` — Ṣé なし、`ni`/`wà` 重複 D
- yo #10 `D:「Ṣé」 A:「o」 C:「lè sọ」 B:「èdè Gẹ̀ẹ́sì」` — Ṣé 独立 D ✓
- yo #16 `A:「Ní àkókò wo」 D:「‌ni」 B:「fíìmù náà」 C:「yóò bẹ̀rẹ̀」` — Ṣé なし、wh
- yo #28 `A:「Ṣé」 B:「ẹ」 C:「lè dábàá」 F:「ilé oúnjẹ」 E:「tó dára」` — Ṣé **A** (subject 役)
- yo #40 `E:「Ṣé」 A:「o」 E:「mọ」 C:「ibi tí」 B:「ilé iṣẹ́ méèlì」 D:「wà」` — Ṣé **E**
- yo #68 `D:「Ṣé」 A:「mo」 C:「lè jókòó」 B:「níbí」` — Ṣé **D**
- yo #99 `B:「Ẹ̀yà ìrántí」 A:「yìí」 D:「jẹ́」 C:「ẹ̀ló」` — Ṣé なし (wh)
**Problem:** ヨルバ語の `Ṣé` は polar question particle (sentence-initial、Bamgboṣe *A Grammar of Yoruba* §7.3.4)、#10/#40/#68 で polar 疑問に使用、#28 でも使用 — ただし **役割色が D/E/A/D の四通り** に揺れる。特に **#28 yo A:「Ṣé」** は subject 役と概念衝突 (en 参照 `A:「Could」`, sw #28 `A:「Je」` と同じ問題を内包)。なお `ni` (focus marker) と `wà` (existential) を D に重複させているのは Yoruba の cleft 構造として spelled-out した結果で、これは独立の議論。
**Proposed fix:** Ṣé は **常に D (or 一意の polar Q 色)** に統一。
- #28 yo A:「Ṣé」 → D:「Ṣé」 B:「ẹ」 C:「lè dábàá」 F:「ilé oúnjẹ」 E:「tó dára」 (A は pro-drop または ẹ を A に)
- #40 yo E:「Ṣé」 → D に統一可
**確信度:** 【蓋然】

### 18. ko_yb / ko_jeju / ko_bus 疑問末辞 ZWNJ の不揃い + 独立 vs 融合の方言内不統一【蓋然】
**Current:**
- ko_yb #4 `E:「슴까」` — 独立、ZWNJ なし
- ko_yb #16 `D:「함까」` — 融合
- ko_yb #28 `G:「요」` — 独立 ✓
- ko_yb #40 `E:「알구 있슴까」` — 融合
- ko_yb #68 `D:「됨까」` — 融合
- ko_yb #99 `D:「임까」` — 融合
- ko_jeju #4 `D:「이시쿠과」`、#10 `E:「쿠과」` — #10 だけ独立
- ko_bus #4 `D:「있노」`、#10 `E:「나」` — #10 だけ独立
**Problem:** ko_yb (延辺朝鮮語) は #4 で `E:「슴까」` と疑問末辞を独立、#16/#40/#68/#99 で動詞融合 — 同じ「-슴까」末辞が独立したり融合したり。さらに膠着接辞なので `feedback_glue_marker` に従って `‌슴까` (ZWNJ 前置) するべきだが ZWNJ 無し。ko_jeju の `-쿠과/-우꽈` も #10 で独立、他で融合。ko_bus も同型不揃い。標準 ko は `E:「요」` で全文一貫しており、ko_kp も `E:「까」` で一貫している (これらが模範)。
**Proposed fix:**
- ko_yb の `-슴까/-임까/-됨까/-함까` を **全文で独立 letter** に揃え、ZWNJ 前置:
  - #16 → `D:「하」 E:「‌함까」` → 動詞「하」+疑問末辞「‌함까」
  - #40 → `E:「알구 있」 F:「‌슴까」`
  - #68 → `D:「되」 E:「‌ㅁ까」`
  - #99 → `D:「이」 E:「‌ㅁ까」`
- ko_jeju の `-쿠과/-우꽈` も同方針 (#4 を `D:「이시」 E:「‌쿠과」` 等に分離)
- ko_bus の `-노` も同方針
**確信度:** 【蓋然】(方言研究では融合形を1単位とする伝統もあり、ただし LangMap の分割優先方針には沿う)

### 19. th_isan / th_n / th_s 文末疑問助詞 ใ/บ่/ก่อ/ม่าย の重複 A 役【確実】
**Current:**
- #28 th `B:「คุณ」 A:「ช่วย」 C:「แนะนำ」 E:「ร้านอาหาร」 F:「ดีๆ」 A:「ได้」 G:「ไหม」` — A 重複
- #28 th_isan 同型 — A 重複
- #28 th_n 同型 — A 重複
- #28 th_s 同型 — A 重複
- #28 lo `B:「ເຈົ້າ」 A:「ຊ່ວຍ」 C:「ແນະນຳ」 E:「ຮ້ານອາຫານ」 F:「ດີ」 A:「ໄດ້ບໍ」` — A 重複
- #28 km `B:「តើអ្នក」 A:「អាច」 C:「ណែនាំ」 E:「ភោជនីយដ្ឋាន」 F:「ល្អ」 A:「បានទេ」` — A 重複
**Problem:** Tai系 (th/th_isan/th_n/th_s/lo) と km は **A 役を二回使う**: 1回目は modal/助動詞 (ช่วย / ຊ່ວຍ / អាច "help/can")、2回目は補助動詞 (ได้ / ໄດ້ "can/manage")。両方とも "can" 系で、en 参照 `A:「Could」 / D:「a」` と比較すると **A を modal 二度使用** は ja `D:「あるか」`/`F:「か」` の二度「か」(機能違いの同形) と異なり、両 A とも同じ「modal can」機能 — つまり真の重複。さらに最終 G に疑問助詞 ไหม/บ่/ก่อ/ม่า が乗っており、これは正しい。問題は **2 番目の A:「ได้」が独立可能か** で、これは「結果補語/様態補語」として独立形態素なので分離可能。
**Proposed fix:** 2 番目の A を別 letter (例: D) に移動:
- th #28 → `B:「คุณ」 A:「ช่วย」 C:「แนะนำ」 E:「ร้านอาหาร」 F:「ดีๆ」 D:「ได้」 G:「ไหม」`
- th_isan/th_n/th_s 同期
- lo: 2 番目 `A:「ໄດ້ບໍ」` は「得 + 疑問」融合なのでさらに分離 `D:「ໄດ້」 G:「ບໍ」`
- km #28: 2 番目 `A:「បានទេ」` は「得 + ទេ (疑問)」 → `D:「បាន」 G:「ទេ」` に分離
**確信度:** 【確実】(機能同一の A 二重は本来禁止、第二の A は別 letter に移すのが整合的)

### 20. tlh (Klingon) 疑問接辞 -'a' の不統一 — 動詞融合のみ【蓋然】
**Current:**
- #4 tlh `A:「Sum」 B:「raQpo'」 C:「nuqDaq」 D:「'oH」` — 'a' なし (wh)
- #10 tlh `B:「DIvI' Hol」 C:「DajatlhlaH'a'」 A:「SoH」` — 'a' 融合
- #16 tlh `B:「lut」 C:「taghlaH」 A:「ghorgh」` — 'a' なし!! (#10と同型 yes/no 疑問にも見えるが wh)
- #28 tlh `A:「choleghlaH'a'」 F:「QaQ」 E:「Qe'」` — 'a' 融合
- #40 tlh `B:「QIn ngoH pa'」 C:「nuqDaq」 D:「'oH」 E:「DaSov'a'」 A:「SoH」` — 'a' 融合
- #68 tlh `B:「naDev」 C:「ba'」 D:「vIlaHa'」 A:「jIH」` — 'a' 融合 (vIlaHa' は vIlaH+'a')
- #99 tlh `A:「vam」 B:「nob」 C:「'ar Huch」` — wh、'a' なし
**Problem:** クリンゴン語の `-'a'` は yes/no 疑問接辞 (Okrand *The Klingon Dictionary* §6.2.5)、動詞に膠着。#10/#28/#40/#68 で動詞融合状態。LangMap の `feedback_glue_marker` 方針に従えば ZWNJ 前置で独立分節可能 (`DajatlhlaH ‌'a'`)。さらに #28 では Q-marker が **A (subject)** 役に乗っており、tr/sw/yo と同型の「subject 役に疑問標識を詰め込む」問題が tlh にも発生。
**Proposed fix:**
- #10 tlh → `B:「DIvI' Hol」 C:「DajatlhlaH」 D:「‌'a'」 A:「SoH」`
- #28 tlh → `D:「choleghlaH」 G:「‌'a'」 F:「QaQ」 E:「Qe'」` (A から G に移し、A は pro-drop)
- #40 / #68 同方針で `-'a'` を独立分節
**確信度:** 【蓋然】

### 21. la (Latin) 疑問接辞 -ne の全文 ZWNJ 欠落【蓋然】
**Current:**
- la #4 `C:「Ubi」 A:「proxima」 B:「statio」 D:「est」` — -ne なし (wh)
- la #10 `D:「Potesne」 A:「tu」 B:「Anglice」 C:「loqui」` — -ne 融合
- la #16 `A:「Quota hora」 B:「pellicula」 C:「incipit」` — -ne なし (wh)
- la #28 `A:「Possisne」 C:「commendare」 F:「bonam」 E:「cauponam」` — 融合
- la #40 `E:「Num scis」 A:「tu」 C:「ubi」 B:「tabellarium」 D:「sit」` — Num 融合
- la #68 `D:「Licetne」 A:「mihi」 B:「hic」 C:「sedere」` — 融合
- la #99 `C:「Quanti」 A:「hoc」 B:「apophoretum」 D:「constat」` — wh
**Problem:** ラテン語の `-ne` は enclitic polar 疑問接辞 (Allen & Greenough §332)、形態論的に独立。LangMap の膠着接辞方針なら ZWNJ 付き独立分節推奨。#40 の `Num` (= "surely not"、wh 強調) は別語で他文と比較しにくいが、#10/#28/#68 の `-ne` は同型なので `Potes/Possis/Licet` + `‌ne` と切るのが整合的。
**Proposed fix:**
- la #10 → `D:「Potes」 E:「‌ne」 A:「tu」 ...`
- la #28 → `A:「Possis」 D:「‌ne」 C:「commendare」 ...`
- la #68 → `D:「Licet」 E:「‌ne」 A:「mihi」 ...`
**確信度:** 【蓋然】(クリティック分節は古典学者間で扱い差あり)

### 22. fi (Finnish) 疑問接辞 -ko/-kö の全文 ZWNJ 欠落【蓋然】
**Current:**
- fi #4 `C:「Missä」 D:「on」 A:「lähin」 B:「asema」` — -ko なし (wh)
- fi #10 `D:「Osaatko」 A:「sinä」 C:「puhua」 B:「englantia」` — 融合
- fi #16 `A:「Mihin aikaan」 B:「elokuva」 C:「alkaa」` — wh
- fi #28 `A:「Voisitko」 C:「suositella」 F:「hyvää」 E:「ravintolaa」` — 融合
- fi #40 `E:「Tiedättekö」 C:「missä」 B:「posti」 D:「on」` — 融合
- fi #68 `D:「Saanko」 C:「istua」 B:「tähän」` — 融合
- fi #99 `C:「Paljonko」 A:「tämä」 B:「matkamuisto」 D:「maksaa」` — wh + ko 強調 (= "how much exactly")
**Problem:** フィンランド語の `-ko/-kö` は polar 疑問 clitic (Karlsson §13.4)、ZWNJ 付き分節可能。tr/la と同型の処理が一貫すべきだが現状全文融合。`feedback_glue_marker` 方針に明確に該当。
**Proposed fix:**
- fi #10 → `D:「Osaat」 E:「‌ko」 A:「sinä」 ...`
- fi #28 → `A:「Voisit」 D:「‌ko」 ...`
- fi #40 → `E:「Tiedätte」 F:「‌kö」 ...`
- fi #68 → `D:「Saan」 E:「‌ko」 ...`
**確信度:** 【蓋然】

### 23. hu (Hungarian) 疑問接辞 -e の欠落 — polar Q が全文で形態論的に未標示【蓋然】
**Current:**
- hu #10 `A:「Te」 D:「tudsz」 B:「angolul」 C:「beszélni」` — -e なし (polar Q なのに)
- hu #28 `A:「Tudna」 C:「ajánlani」 F:「egy jó」 E:「éttermet」` — -e なし
- hu #40 `E:「Tudja」 C:「hol」 D:「van」 B:「a posta」` — -e なし
- hu #68 `B:「Ide」 D:「szabad」 C:「leülni」` — -e なし
**Problem:** ハンガリー語の `-e` は polar 疑問 enclitic (Rounds *Hungarian: An Essential Grammar* §10.1)、口語では脱落も自然だが書記標準では `tudsz-e`/`tudna-e`/`tudja-e`/`szabad-e` を付ける。fi/tr/la と並ぶ Uralic-Altaic 系統で疑問 clitic を持つ言語として、現状 hu のみ **全 polar 疑問で疑問形態素ゼロ** は不揃い。Intonation のみで polar 疑問を表す言語 (es/it/pt 等の Romance) と同じ扱いになっており、これは hu の grammar が許す範囲だが書記語としては明示が一般的。
**Proposed fix:** 各文に -e enclitic を補い、ZWNJ で独立分節:
- hu #10 → `A:「Te」 D:「tudsz」 E:「‌e」 B:「angolul」 C:「beszélni」`
- hu #28/#40/#68 同様
**確信度:** 【蓋然】(口語でゼロ標示も自然なので強い修正ではない、書記標準への寄せ)

### 24. ja_aom #4 / #10 / #16 / #99 — 疑問末辞「だがや/んだがや」の役割色不統一【要検討】
**Current:**
- ja_aom #4 `D:「あるんず」` — んず 平叙文末 (疑問なし!) — 同一変種の #99 `D:「だがや」` と比較すると #4 は **wh-疑問なのに疑問末辞ゼロ** の様にも見える
- ja_aom #10 `E:「んだがや」` 独立 ✓
- ja_aom #16 `D:「んだがや」` 融合
- ja_aom #28 `A:「けれじゃ」` 依頼文末
- ja_aom #40 `E:「知ってらがや」` 融合
- ja_aom #68 `D:「えぇだがや」` 融合
- ja_aom #99 `D:「だがや」` 融合
**Problem:** #01_closed で `ja_aom D:「あるんず」` (#4) は平叙断定として確定済み。しかし、#4 は wh-疑問 (どさ = どこへ) で、津軽弁では wh-疑問でも `〜だがや`/`〜んだがや` のような疑問末辞が一般的 (#16/#99 で確認)。#4 だけ `んず` (平叙) で **疑問形態素ゼロ** は内部不整合。閉じ済み review の判定だが、本横断レビューでは記録のみ。
**Proposed fix:** 要検討。closed-review #01 と整合性議論が必要。提案としては `D:「ある」 E:「んだがや」` のように疑問末辞を補う。
**確信度:** 【要検討】(closed-review の方言形決定に踏み込むため低優先)

### 25. el_grc 文末 `;` の punctuation 内包 — 一貫性は良好だが記録【整合・記録のみ】
**Current:** el_grc #4 `B:「σταθμός;」` / #10 `C:「λέγειν δύνασαι;」` / #16 `C:「ἄρχεται;」` / #28 — 最終 segment に `;` なし / #40 `D:「ἐστίν;」` / #68 `C:「καθίζεσθαι δύναμαι;」` / #99 `D:「ἐστίν;」`
**Note:** Ancient Greek の正書法では `;` が疑問符。el_grc は最終 semantic segment 内に `;` を保持しており、これは punctuation の一部として正当。**ただし #28 だけ `;` 無し** ( `E:「ἑστιατόριον」` で終わる) は punctuation 取りこぼし。
**Proposed fix:** el_grc #28 → `E:「ἑστιατόριον;」` または `C:「συμβουλεῦσαι ... ;」` に疑問符 punctuation を補う (修正は punctuation のみで分節影響なし)。
**確信度:** 【確実・微細】(punctuation 整合)

### 26. ko #4 D:「있어」 vs ko #99 D:「예」 — copula/existential 選択【要検討】
**Current:**
- ko #4 `D:「있어」 E:「요」` — 存在動詞 있어 + 丁寧 요
- ko #99 `D:「예」 E:「요」` — copula 예 + 요
**Note:** ko #4 は「どこに *あります* か」で存在動詞 있다、ko #99 は「いくら *です* か」で copula 이다 の縮約 예. **D 役が文ごとに「存在動詞」と「copula」の異なる lexeme を取る**のは言語的に正当 (存在 vs 同定の区別)。ja は同じ「です」を両方使うので D が一貫して copula。これは ko 側の語彙的多義であり指摘ではないが、cross-language 整合の観点で記録。
**確信度:** 【整合・記録】

### 27. ar_eg / ar_lev / ar_gulf / ar_iq #28 polar 疑問末辞ゼロ — Levantine/Egyptian arabic の intonation 標識として許容【整合】
**Current:** ar_eg #28 `A:「ممكن」 C:「تقترح」 F:「مطعم」 E:「كويس」` / 各方言同様。
**Note:** Egyptian/Levantine/Gulf Arabic は polar 疑問を intonation のみで表すのが日常標準 (Holes *Modern Arabic*; Watson *The Phonology and Morphology of Arabic*)。هل は MSA 限定。**方言変種の hal ゼロは自然**で、これは指摘ではない (MSA の ar が #10 で `D:「هل」` を保持しているのと対照的)。ただし指摘#6 で MSA ar の هل 内部不統一を指摘済み — 方言群はその影響を受けない。
**確信度:** 【整合・記録のみ】

### 28. id #28 Apakah ゼロ、jv #28 Apakah ゼロ — #10/#40 と非整合【蓋然】
**Current:** id #28 `A:「Bisakah」 B:「Anda」 ...` / jv #28 `A:「Saged」 B:「sampeyan」 ...` — Apakah なし。一方 #10/#40 では `Apakah` 明示。
**Problem:** すでに指摘#11 でカバー (Apakah の置き場が D↔E で揺れ + #28 で消失)。記録のみ。
**確信度:** 【蓋然】

---

## 総括 (Summary)

7つの question 文 (#4, #10, #16, #28, #40, #68, #99) × 約 140 言語 = 約 1000 セルを精査した結果、**疑問構造の表現には以下の支配的問題パターン**を確認した:

### Dominant defect: **「疑問助詞の独立 vs 動詞融合の言語内不統一」**

- **同一言語が文ごとに分節境界を変える**現象が広範に観測された。具体的に、`ar (هل)`, `pl (Czy)`, `he (האם)`, `mn (вэ/уу)`, `bo (pas/bam/gam)`, `bn (কি)`, `id/jv (Apakah)`, `tr (-mı)`, `fi (-ko)`, `la (-ne)`, `tlh (-'a')`, `ms (-kah)`, `yo (Ṣé)` の **13 言語で同型の疑問助詞が文ごとに独立分節/融合の処理を変えていた**。
- 標準 ja は **全 7 文で E/F:「か」 を独立 segment** に切り出し、ko も同様に **E/F:「요」**、vi は **E/F/G:「không」** で完全一貫している。これらが LangMap の **理想的 reference pattern** であり、他 130 言語はこれに合わせて疑問助詞を独立分節すべき。

### Secondary defect: **「疑問助詞の役割色 (role-letter) 揺れ」**

- **A (subject) 役に疑問標識を詰める例外**が散発: `tr #28 A:「misiniz」` / `tr #40 A:「musunuz」` / `sw #10,#28 A:「Je」` / `yo #28 A:「Ṣé」` / `bo #28 A:「ཐུབ་བམ」` / `tlh #28 A:「choleghlaH'a'」`。すべて「疑問標識を subject 役に乗せる」概念汚染で、本来は D/E/G の最終色を使うべき。
- **G (末尾疑問助詞色) に sentence-initial 標識を詰める例外**: `ht #28 G:「Èske」` の単独事例。
- **D 中段に sentence-initial を詰める例外**: `fa #28 D:「آیا」`。

### Tertiary defect: **「疑問助詞の完全脱落」**

- 形態論的に必須なはずの疑問末辞が単一文だけで欠落: `ja_osa #40 / ja_hak #40` (両方とも knowing 文末で疑問末辞ゼロ、平叙と同形)、`hi #10` (polar 疑問なのに क्या なし)、`bn #40/#68` (polar 疑問なのに kī なし)。これらは元データの取りこぼしと推測される。

### Quartary defect: **「ZWNJ glue marker の体系的欠落」**

- 膠着・clitic 系疑問接辞 (`tr -mı`, `fi -ko`, `la -ne`, `tlh -'a'`, `ms -kah`, `hu -e`) は `feedback_glue_marker.md` に従い ZWNJ 前置すべきだが、現状 ZWNJ 付与は uz/tk/ky (Turkic 一部のみ) に限定。他は ZWNJ なしで膠着接辞が動詞末尾に融合表記。

### 確信度別件数

- 【確実】= 12 件 (#1 ht, #2 fa, #3 sw, #4 tr, #5 pl, #6 ar, #7 he, #8 mn, #12 ja_osa/ja_hak #40 欠落, #19 th 重複 A, #25 el_grc #28 `;`, 部分指摘 #14/#15 確実部分)
- 【蓋然】= 11 件 (#9 bo, #10 ms, #11 id/jv, #13 ja #40 二重 か, #14 bn 一部, #15 hi #10, #16 zh_sc/zh_db, #17 yo, #18 ko_yb 系, #20 tlh, #21 la, #22 fi, #23 hu)
- 【要検討・整合記録】= 4 件 (#24 ja_aom #4, #26 ko 多義, #27 ar 方言, #28 id/jv #28 — 既出記録)

### 推奨次アクション (優先度順)

1. **最高優先**: ht #28 G→D 修正、fa #28 D→A 修正、sw/yo/tr/bo の A 役疑問標識の D/G 移行 (#1-#4, #17 の確実級 6 件)。
2. **高優先**: pl/ar/he の疑問助詞独立化 (#5, #6, #7 で各3-4文同期修正)。
3. **中優先**: ja_osa/ja_hak #40 の疑問末辞補充、bn polar 文の কি 補充 (#12, #14 — 言語学的に必須な明示)。
4. **低優先**: ZWNJ glue marker の一括付与 (tr/fi/la/tlh/ms/hu) — 表面表記は不変なので低リスク、ただし大量編集。
5. **記録のみ**: ja #40 二重「か」の機能差注記、ko 存在/copula 差注記、el_grc #28 `;` 補充。

### Sinosphere/Polar 横断観察

- **Polar Q particle の有 vs 無の地理分布**: 東アジア (ja/ko/vi/zh/yue/wuu/nan/cdo/hak_cn/th/lo/km/my/tlh) は **語末助詞 (Q-final) 型** で例外なく明示。南アジア (hi/bn/ne/pa/ur 等) は **sentence-initial 型** で文頭 क्या/کیا/কি。西アジア・スラブ (ar/he/pl/ru/uk) も **sentence-initial 型** (هل/האם/Czy)。Indo-European 西欧 (en/de/it/es/fr/pt) は **subj-aux inversion 型** で別形態素なし。これは König & Siemund (2007) の WALS 116 とほぼ一致する典型分布で、データは類型論的に妥当。
- **疑問助詞融合の地理**: 融合発生は Tai-Kadai (th/lo)、Mon-Khmer (km)、Tibeto-Burman (bo/my)、Turkic-Mongolic (tr/mn) で特に頻発。これらは **動詞末尾に複数接辞が連続膠着する言語型**で、分節境界が曖昧になりやすい。LangMap の分割優先方針 + ZWNJ glue marker で対応可能。

---

**ファイル: /home/jounlai/langmap/langmap_reviews/41_open.md**
**指摘件数: 28 (うち actionable 確実級 12件、蓋然級 11件、要検討/記録 5件)**
**支配的 systematic pattern: 「同一言語内で疑問助詞 (Q-particle / Q-clitic) の独立分節 vs 動詞融合が文ごとに揺れる」内部不統一 — 13言語 (ar/pl/he/mn/bo/bn/id/jv/tr/fi/la/tlh/ms/yo) で確認。標準 ja/ko/vi/zh が示す「Q-particle 常に独立 final segment」パターンが LangMap の reference として確立しており、これに揃えることで cross-language 検索・教育的利用が大幅に向上する。**

---

## Dev response — round 1 (2026-06-04)

レビュー指摘 **28件中 14件 (指摘 #1〜#9 / #12 / #17 / #19 / #25 と tr の ZWNJ 補強)** を **`/tmp/lm_edits_41.json` (34 件のエディット)** にまとめた。data.js は read-only のため未変更、エディット案のみを提出する。

### 採択方針 — 確実級は全採用、蓋然級は cross-cutting role-letter 衝突に絞る

確信度【確実】の 12 件は **A (subject) 役の意味カテゴリ汚染** と **言語内 Q-particle 不整合** を解消する基幹修正なので全て採用。【蓋然】からは role-letter 衝突を伴うもの (#9 bo の A 重複、#17 yo の A:Ṣé pollution) を優先採用。【要検討】の #13/#24/#26 は閉鎖済みレビューへの遡及や注記のみで本ラウンドからは外し、#11 (id/jv Apakah) / #14 (bn) / #15 (hi #10) / #16 (zh_sc/zh_db) / #18 (ko_yb 系) / #20 (tlh) / #21 (la) / #22 (fi) / #23 (hu) は次ラウンド以降に持ち越し (ZWNJ glue marker の大量編集と方言データの広範な書き換えが伴うため、まず基幹確定を優先)。

### エディット内訳 (34件)

**retag (13件)** — role-letter 衝突解消:
- #1 ht #28 G:Èske → D (sentence-initial を G 末尾色から解放)
- #2 fa #28 D:آیا → A、A:می‌توانید → D (Indic 兄弟と整合)
- #3 sw #10 A:Je → G、#28 A:Je → G (Q-particle を A から退避)
- #4 tr #28 A:misiniz → D、#40 A:musunuz → D (#10/#68 D と統一)
- #9 bo #28 second A:ཐུབ་བམ → D (subject A との衝突解消)
- #17 yo #28 A:Ṣé → D (sw/tr と同型の pollution 解消)
- #19 th/th_isan/th_n/th_s #28 second A:ได้ → D (4 言語の A 重複解消)

**replace (16件)** — Q-particle 独立化のための分割:
- #5 pl #28/#40/#68 — Czy 独立
- #6 ar #28/#40/#68 — هل 独立
- #7 he #28/#68 — האם 独立 (+ #68 で 主語 אני も分離)
- #8 mn #4/#28/#40/#68 — вэ/уу/үү 独立
- #19 lo/km #28 — ໄດ້ບໍ / បានទេ の二重融合 (modal + Q) を D + G に分離
- #12 ja_osa #40 / ja_hak #40 — 欠落していた疑問末辞 か/と を補充 (`allowTextChange: true`)

**settext (5件)** — ZWNJ glue marker と punctuation:
- #4 tr #10/#28/#40/#68 — 疑問接辞に ZWNJ 前置 (`musun`/`misiniz`/`musunuz`/`miyim` → `‌xxx`)
- #25 el_grc #28 — ἑστιατόριον → ἑστιατόριον; (Greek 疑問符、`allowTextChange: true`)

### 隣接同色制約と find 一意性の検証

`node -e` で 4 つの検証を実施 (全 OK):
1. **JSON parse**: 34 edits、3 op タイプ (retag 13 / settext 5 / replace 16)、31 cells (重複セルは tr で retag + settext の組合せ)。
2. **replace の隣接同色チェック**: 全 16 件で隣接同色なし。
3. **retag 適用後の隣接同色チェック**: 全 13 件で適用後も衝突なし (例: ht #28 D:Èske B:ou A:ka C:rekòmande D:yon F:bon E:restoran の D-…-D は B/A/C を挟むため正常)。
4. **find 一意性**: 全 retag/settext で対象セル内に find 文字列が 1 回のみ出現することを確認。

### スコープ外として残した蓋然級 (持ち越し方針)

- **#11 id/jv (Apakah letter揺れ)**: D↔E の揺れだが #10 D 重複 / #40 E 重複は zh/ur と同型の「多義カラー」許容パターンに該当。letter 統一は要追加判断のため次ラウンド。
- **#14 bn / #15 hi**: 疑問詞 কি / क्या の補充は口語ゼロも自然 (Kachru §10 / Thompson §7.5) で、テキスト追加 + `allowTextChange` を伴うため、ja_osa/ja_hak #40 のような明確な「完全欠落 + 平叙同形」とは区別して次ラウンドで再評価。
- **#16 zh_sc/zh_db (嘛/啊/呐)**: discourse particle の独立性は記述に幅 (Cantonese 啦/咧 議論と同様)。zh_db は #10/#40/#68 で「不」独立済みなので、zh_sc を zh_db に揃える方向で次ラウンド検討。
- **#18 ko_yb 系**: 方言研究で融合形を1単位とする伝統 vs 分割優先方針の調停が必要。ZWNJ 付与 + 動詞語幹/接辞境界の特定は方言別に精査して次ラウンド。
- **#20 tlh, #21 la, #22 fi, #23 hu**: ZWNJ glue marker の体系的付与 — 表面表記不変で低リスクだが大量編集 (4 言語 × 各 3-4 文)。tr ZWNJ を本ラウンドの試金石として効果検証後に他 clitic 系言語に展開する。

### 出力ファイル

- **JSON**: `/tmp/lm_edits_41.json` (34 edits、3 ops、31 cells)
- **data.js**: 未変更 (read-only 厳守)

Issues addressed 14 of 28 / Edits 34 / Closure pending reviewer ack on cross-cutting Q-particle policy / JSON path `/tmp/lm_edits_41.json`
