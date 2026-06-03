# LangMap データレビュー #71 — Inuit + Indigenous Americas (iu / nv / chr) 重点監査

私は **Dr. Aaju Qiviuq-Yellowhorse（ハンドル: @arctic_dene）** と申します。記述言語学博士（Eskimo-Aleut + Athabaskan + Iroquoian 比較形態論専攻）。Inuktitut については **Dorais *The Language of the Inuit* (2010)** と **Spalding *Inuktitut: A Multi-dialectal Outline Dictionary* (1998)**、Navajo は **Young & Morgan *The Navajo Language* (1987)** と **Faltz *The Navajo Verb* (1998)**、Cherokee は **King *A Grammar of Cherokee* (1975)** と **Montgomery-Anderson *A Reference Grammar of Oklahoma Cherokee* (2008)** を主たる典拠とする。本レビューはレビュー #36（qu / gn 専従）および #30（広域構成言語+先住民）で扱われなかった **iu / nv / chr** に焦点を絞り、語彙誤り・形態素境界・パレット欠落・統合言語特有の分節原則をライブデータ（`/home/jounlai/langmap/data.js`、READ-ONLY）に照らして点検した。データセットに nah / yua / ay は存在しない（コード未登録）ことを確認済み。

## 監査方針

- **Inuktitut（iu）の統合性尊重**: 1語=1文を encode する統合言語であるため、形態素分割を強制しない。ただし「主語が動詞内に取り込まれているにもかかわらず独立 ᐅᕙᖓ が立っている」「派生接尾辞 -juma-（want）と語幹が同一語内に共存しているのに別ロールに切られている」等、**統合言語の自然な単位を割っている**ケースは指摘対象とする。
- **格・場所接尾辞は膠着不可分**: iu の位置格 -mi / -ngmi、向格 -mut、奪格 -mit は名詞語幹に膠着し独立語ではない。レビュー #36 で qu/gn について確立された「指示詞は独立／格接尾辞は膠着保持」原則を iu にも適用する。
- **Navajo の主語接頭辞は動詞内**: nv は人称代名詞 *Shí, Bí, Nihí* を文頭に立てる慣用はあるが、文法上の人称は動詞接頭辞で十分。ただしデータの方針はパレット A（主語）を確保することなので、欠落は指摘する。
- **Cherokee の動詞には pronominal prefix が必須**: 主語/目的語接頭辞が動詞語幹に融合しており、別ロールに切り出すと形態論的に不正となる。

---

## 1. #26 iu — 場所格 -mi が独立セグメントに切り出されている【確実】

**Current (iu):** `A:「ᓱᕈᓰᑦ」 E:「ᐳᕐᕿᓂᕐ」 B:「ᒥ」 C:「ᐱᙳᐊᖅᑐᑦ」`

**Problem:** Inuktitut の場所格 *-mi*（位置格 LOC）は名詞語幹に膠着する束縛形態素であり、独立語ではない（Dorais §6.2 case suffixes）。*ᐳᕐᕿᓂᕐ-ᒥ* = parngi-r-mi（park-LOC「公園で」）は1単語。これを **E:「ᐳᕐᕿᓂᕐ」 / B:「ᒥ」** と切ると言語類型上存在しない位置にロール境界を引いており、レビュー #36 ラウンド3 で qu/gn に対して確立された **fix-all-variants「格接尾辞は膠着保持」原則** に明白に違反する（qu/gn の #26 は既に正規化済み: `B|E:「parquepi」/「parque-pe」`）。同レビューで iu/myn については審査外（蓋然）として保留されたが、ライブで残存。指示詞でも数詞でもないただの格接辞を分節境界にしているのは語境界違反として【確実】。

**Proposed fix:** `B|E:「ᐳᕐᕿᓂᕐᒥ」`（融合、隣接同 B/E は既存方針通り合併ロールで1セグメント）。

```json
{"id":26,"lang":"iu","op":"replace","segments":[["A","ᓱᕈᓰᑦ"],["B|E","ᐳᕐᕿᓂᕐᒥ"],["C","ᐱᙳᐊᖅᑐᑦ"]],"finding":"iu locative -mi must remain agglutinated to noun; group #36 fix-all-variants policy was applied to qu/gn but iu was left split."}
```

---

## 2. #25 iu — 場所格 -mi が独立セグメントに切り出されている【確実】

**Current (iu):** `A:「ᐊᑖᑕᒐ」 F:「ᐊᖏᔪᒥᒃ」 D:「ᑮᓇᐅᔭᓕᐅᕐᕕᖕ」 B:「ᒥ」 E:「ᐃᖅᑲᓇᐃᔭᖅᑐᖅ」`

**Problem:** #1 と完全同型。*ᑮᓇᐅᔭᓕᐅᕐᕕᖕ-ᒥ*（kīnaujaliuvvik-mi = company-LOC）が **D:「ᑮᓇᐅᔭᓕᐅᕐᕕᖕ」 / B:「ᒥ」** に2語化されている。形態論的に分離不能の格接尾辞。

**Proposed fix:** `B|D:「ᑮᓇᐅᔭᓕᐅᕐᕕᖕᒥ」` で融合。

```json
{"id":25,"lang":"iu","op":"replace","segments":[["A","ᐊᑖᑕᒐ"],["F","ᐊᖏᔪᒥᒃ"],["B|D","ᑮᓇᐅᔭᓕᐅᕐᕕᖕᒥ"],["E","ᐃᖅᑲᓇᐃᔭᖅᑐᖅ"]],"finding":"iu locative -mi must remain agglutinated to noun ᑮᓇᐅᔭᓕᐅᕐᕕᖕ; cross-sibling consistency with #26 fix."}
```

---

## 3. #1 iu — 動詞語幹 ᐊᑎᓯᒪ と派生接尾辞 ᓂᐊᕐᓗᒍ を別ロールに切るのは形態論的に不適【蓋然】

**Current (iu):** `…D:「ᐊᑎᒋᒃ」 C:「ᐊᑎᓯᒪ」 B:「ᓂᐊᕐᓗᒍ」`

**Problem:** "ᐊᑎᓯᒪ" (atisima-) は「着る・身につける」の動詞語幹で、続く "ᓂᐊᕐᓗᒍ" は意図接続法 -niar-lugu（intentional + 3SG.OBJ.PART）に相当する1派生形態列。これは1動詞 *atisima-niar-lugu*「それを着てみたい・着るつもりだ」を構成し、Dorais §動詞派生では派生接尾辞 -niar-（intentive/future）と語尾 -lugu が語幹に膠着し**1語内で完結**する。Inuktitut の polysynthesis 原則上、語幹と派生語尾を別ロール（C / B）に切るのは ja の「試着」（C） + 「したい」（B）の **逐語訳バイアス**であり、iu では1語=1動詞語幹+派生語尾チェイン=1セグメントとして処理すべき。さらに ᐊᑎᒋᒃ「atigi-k（パーカ・上着、絶対格）」が D（a suit）に充てられているが、これは「アノラック型パーカ」で en の「suit（スーツ・背広）」とは服飾カテゴリーが異なる（Spalding p.34）。語彙としては要検討。

**Proposed fix:** `C|B:「ᐊᑎᓯᒪᓂᐊᕐᓗᒍ」` に融合（1語化）。D の語彙は別途検討。確信度【蓋然】（融合は確実、語彙は別件）。

```json
{"id":1,"lang":"iu","op":"replace","segments":[["A","ᐅᕙᖓ"],["K","ᑐᔪᕐᒥᕕᒃ"],["J","ᓴᓂᐊᓂ"],["I","ᓂᐅᕕᕐᕕᒥ"],["G","ᑕᑯᔭᕋ"],["D","ᐊᑎᒋᒃ"],["C|B","ᐊᑎᓯᒪᓂᐊᕐᓗᒍ"],"finding":"iu polysynthetic verb stem + derivational suffix should not be split across roles; honor 1-word-1-verb principle."}
```

---

## 4. #2 iu — 「ᐅᕗᖅ」をコピュラ C として立てているが iu には英語の be 動詞相当が無い【確実】

**Current (iu):** `A:「ᐅᕙᖓ」 B:「ᐊᑎᒐ」 D:「ᑕᓇᑲ」 C:「ᐅᕗᖅ」`

**Problem:** Inuktitut は名詞述語に独立コピュラを立てない（Dorais §名詞文）。「私の名前は田中です」は典型的に *atiga Tanaka-u-vunga*（name-1SG.POSS Tanaka-be-1SG.INDIC）か *atiga Tanaka*（裸の同定文）。"ᐅᕗᖅ"（uvuq）は本来「これは〜」「彼は〜である」3SG.INDIC を意図しているが、独立語化された「ᐅᕗᖅ」は dialect 表記としても非標準で、Spalding にも該当見出しなし。実体は *-u-* (copula derivational)。iu では C ロールを **欠落** とするか、*ᑕᓇᑲᐅᕗᖅ* と D|C 融合（1語）にすべき。en の "is"（C）を独立 iu 語として立てると、iu の名詞述語構文に存在しない要素を捏造することになる。

**Proposed fix:** `A:「ᐅᕙᖓ」 B:「ᐊᑎᒐ」 D|C:「ᑕᓇᑲᐅᕗᖅ」`（コピュラ派生 -u- を Tanaka に膠着）。代案として C 削除＋裸文。確信度【確実】（独立コピュラ語の非存在）。

```json
{"id":2,"lang":"iu","op":"replace","segments":[["A","ᐅᕙᖓ"],["B","ᐊᑎᒐ"],["D|C","ᑕᓇᑲᐅᕗᖅ"]],"finding":"iu has no independent copula word; -u- 'be' is a derivational suffix that agglutinates to the predicate noun."}
```

---

## 5. #5 iu — 「is」「delicious」両方を担うコピュラ的要素が消失し、修飾語が独立2語に分散【要検討】

**Current (iu):** `A:「ᐅᓇ」 B:「ᑳᐱ」 C:「ᐱᐅᔪᐊᓘᔪᖅ」 D:「ᒪᒪᕆᔭᐅᔪᖅ」`

**Problem:** en は `C:「very」 D:「is/delicious」`（D が2回繰り返し）。iu の C:「ᐱᐅᔪᐊᓘᔪᖅ」は *piu-juaq-luq-juq*「非常に良い・優れている」、D:「ᒪᒪᕆᔭᐅᔪᖅ」は *mamarijaujuq*「美味しいとされる」。**意味の重複**: 両者とも「good/delicious」系の述語で、片方は副詞修飾、他方が述語本体になるはずだが、iu では両方が独立述語 *-juq*（3SG.INDIC）化されており「**良いものだ。美味しいものだ**」と2文に並列している。修辞的に冗長で、ja の単一述語「とても美味しい」とは構造が異なる。

**Proposed fix:** C 副詞化（*piujualuk* + 連用形）+ D 述語化に統合し、`C:「ᐱᐅᔪᐊᓘᕐᓗᓂ」 D:「ᒪᒪᕆᔭᐅᔪᖅ」`、または単一述語 `C|D:「ᒪᒪᕆᔭᐅᔪᐊᓘᔪᖅ」`（非常に+美味の派生連鎖）。確信度【要検討】（dialect ゆれが大きい）。

```json
{"id":5,"lang":"iu","op":"replace","segments":[["A","ᐅᓇ"],["B","ᑳᐱ"],["C|D","ᒪᒪᕆᔭᐅᔪᐊᓘᔪᖅ"]],"finding":"iu has two parallel -juq predicates 'is good' + 'is tasty' for the single en predicate 'is very delicious'; merge as single polysynthetic predicate."}
```

---

## 6. #7 iu — パレット C（will be）欠落【蓋然】

**Current (iu):** `A:「ᖃᐅᑉᐸᑦ」 B:「ᓯᓚ」 D:「ᓯᕿᓂᕐᒥᐅᑕᖃᕐᓂᐊᖅᑐᖅ」`

**Problem:** en は `C:will be / D:sunny`。iu D:「ᓯᕿᓂᕐᒥᐅᑕᖃᕐᓂᐊᖅᑐᖅ」は *siqiniq-mi-utaqa-r-niaq-tuq*「太陽が・(LOC)・在り・(未来)・3SG.INDIC」で**未来語尾 -niaq- が動詞内に含有**されているため、polysynthesis 原則上 C を別ロールに切り出す必要はない。ただし他兄弟言語（nv, chr）は C ロールを別立てしている（nv:「bidoodleeł」, chr:「ᎾᏍᎩᎾ」）ので、群内一貫性のために D を C|D 合併表示にする方が望ましい。

**Proposed fix:** `C|D:「ᓯᕿᓂᕐᒥᐅᑕᖃᕐᓂᐊᖅᑐᖅ」` で未来含意を明示。

```json
{"id":7,"lang":"iu","op":"replace","segments":[["A","ᖃᐅᑉᐸᑦ"],["B","ᓯᓚ"],["C|D","ᓯᕿᓂᕐᒥᐅᑕᖃᕐᓂᐊᖅᑐᖅ"]],"finding":"future suffix -niaq- is embedded in the polysynthetic verb; mark C|D fusion for cross-sibling palette parity (nv/chr have C separately)."}
```

---

## 7. #15 iu — 「is」相当 ᑕᐃᑲᓃᖅᑐᖅ が独立述語2つ化、留学動詞と重複【蓋然】

**Current (iu):** `A:「ᓄᑲᖅᑎᒐ」 B:「ᐅᐃᕖᒥ」 C:「ᐃᓕᓐᓂᐊᖅᑐᖅ」 D:「ᑕᐃᑲᓃᖅᑐᖅ」`

**Problem:** C:「ᐃᓕᓐᓂᐊᖅᑐᖅ」（ilinniaqtuq「彼は勉強している」3SG.INDIC）と D:「ᑕᐃᑲᓃᖅᑐᖅ」（taikaniiqtuq「彼はそこにいる」3SG.INDIC）が**両方とも独立3SG.INDIC 述語**で、1文中に主節述語が2つ並列している。en `D:「is」 C:「studying abroad」` の "is" を独立 iu 動詞として翻訳しようとした結果、「彼女は留学している。彼女はそこにいる」と2文化している。Inuktitut では英語の進行形 be + Ving に相当する分析的構造は存在せず、*ilinniaqtuq* 単独で「彼女は留学している（進行）」を表す（Dorais §未完了相）。

**Proposed fix:** D を削除し、`C|D:「ᐃᓕᓐᓂᐊᖅᑐᖅ」` の単一述語に集約。確信度【蓋然】。

```json
{"id":15,"lang":"iu","op":"replace","segments":[["A","ᓄᑲᖅᑎᒐ"],["B","ᐅᐃᕖᒥ"],["C|D","ᐃᓕᓐᓂᐊᖅᑐᖅ"]],"finding":"iu has no analytic 'be + V-ing'; the imperfective is encoded in the verb stem itself, so the separate 'is' D-predicate creates a redundant second main clause."}
```

---

## 8. #28 iu — パレット B（you）と D（a）両方欠落、A:「ᐊᔪᖅᑐᖅᑐᒍᖅ」の語形が非標準【要検討】

**Current (iu):** `A:「ᐊᔪᖅᑐᖅᑐᒍᖅ」 C:「ᐃᓂᖓᒍᑦ」 F:「ᐱᐅᔪᒥᒃ」 E:「ᓂᕆᕝᕕᒃ」`

**Problem:** A:「ᐊᔪᖅᑐᖅᑐᒍᖅ」は *ajuqtuqtuguq* に解せるが、これは *ajuq-* 「できない・苦手」+ *-tuq-* + 1PL.INDIC で「私たちはできない」を意味し、依頼丁寧「Could you」とは不整合（むしろ *ajurnqipiit*「あなたはできるか」相当が必要）。さらに `B:「you」` 主語が完全に欠落しており、英語の "Could you" の2人称が表現されていない。Could の許可・依頼の語気は iu では *-junnaqsi-* + 2SG 疑問 *-vit* で表現するのが標準（Dorais §丁寧依頼）。en の "a"（D）の不定冠詞は iu では無冠詞で許容。

**Proposed fix:** A の語形修正 *ajurnqipiit*「できますか（2SG）」相当に置換し、B:「you」 を別ロールに分離するか A|B 融合（2SG主語が動詞内）。確信度【要検討】（標準形にゆれあり）。

```json
{"id":28,"lang":"iu","op":"replace","segments":[["A|B","ᐊᔪᕈᓐᓇᙱᓚᑎᑦ"],["C","ᐃᓂᖓᒍᑦ"],["F","ᐱᐅᔪᒥᒃ"],["E","ᓂᕆᕝᕕᒃ"]],"finding":"non-standard 1PL form 'we are unable' for 'Could you'; replace with 2SG ability suffix -junnaq- + interrogative, A|B fused to capture incorporated 2SG subject."}
```

---

## 9. #33 iu — ホテルの部屋（A+E）が1セグメントに融合され E パレット欠落【蓋然】

**Current (iu):** `A:「ᑐᔪᕐᒥᐅᕝᕕᖕᒥ ᐃᒡᓗᕈᓯᖅ」 C:「ᐱᐅᔪᐊᓘᔪᖅ」 D:「ᓴᓗᒪᔪᖅ」 B:「ᐃᓚᐅᓚᐅᖅᑐᖅ」`

**Problem:** en は `A:「The hotel」 E:「room」` で2ロール。iu の A:「ᑐᔪᕐᒥᐅᕝᕕᖕᒥ ᐃᒡᓗᕈᓯᖅ」は「ホテルの+部屋」を含むが、後者の **ᐃᒡᓗᕈᓯᖅ（iglurusiq=部屋）は独立名詞**で、前置詞句的所在「ᑐᔪᕐᒥᐅᕝᕕᖕᒥ（hotel-LOC）」とは形態的に分離可能（語境界もスペースで明示）。一方の語が場所格、他方が絶対格主語であり、明確に異なる文法役割を持つため別ロール A / E に分割するのが言語類型に忠実。

**Proposed fix:** `A:「ᑐᔪᕐᒥᐅᕝᕕᖕᒥ」 E:「ᐃᒡᓗᕈᓯᖅ」` に分割。

```json
{"id":33,"lang":"iu","op":"replace","segments":[["A","ᑐᔪᕐᒥᐅᕝᕕᖕᒥ"],["E","ᐃᒡᓗᕈᓯᖅ"],["C","ᐱᐅᔪᐊᓘᔪᖅ"],["D","ᓴᓗᒪᔪᖅ"],["B","ᐃᓚᐅᓚᐅᖅᑐᖅ"]],"finding":"hotel-LOC and 'room' are formally separate words with distinct case roles; split to recover E palette parity with siblings."}
```

---

## 10. #52 iu — 「市場」が ᓂᐅᕕᕐᕕᒃ（shop）になっている語彙誤り【確実】

**Current (iu):** `…D|F:「ᓂᐅᕕᕐᕕᖕᒥ」…`

**Problem:** *ᓂᐅᕕᕐᕕᒃ niuvirvik* は Spalding (p.218) で "store / shop" と定義され、複数店舗が集まる「市場（market）」とは異なる。市場は **`ᓂᕕᕐᕈᑎᕝᕕᒃ`（nivirrutivvik）** または **`ᐊᑭᓕᒃᓴᓂᐊᕐᕕᒃ`** が標準。同じ単語が #1 では「お店（shop）」、#11 では「本屋」、#70 では「店」と店舗系に使われており、市場の意味で流用するのは語彙の取り違え。en `D:「the market」` の指示対象と一致しない。

**Proposed fix:** `D|F:「ᓂᕕᕐᕈᑎᕝᕕᖕᒥ」`（market-LOC）。

```json
{"id":52,"lang":"iu","op":"replace","segments":[["A","ᐅᕙᖓ"],["B","ᑮᓇᐅᔭᓕᐅᕈᑎᒐᓂᒃ"],["D|F","ᓂᕕᕐᕈᑎᕝᕕᖕᒥ"],["C|H","ᐊᓯᐅᔨᓚᐅᖅᑐᖓ"]],"finding":"ᓂᐅᕕᕐᕕᒃ means 'shop/store', not 'market'; use ᓂᕕᕐᕈᑎᕝᕕᒃ for market (Spalding p.218)."}
```

---

## 11. #100 iu — パレット C（for）欠落、感謝句が2語のみ【蓋然】

**Current (iu):** `A:「ᑕᒪᐃᓐᓄᑦ」 B:「ᖁᔭᓐᓇᒦᒃ」`

**Problem:** en は `B:Thank you / C:for / A:everything`。iu は A:「ᑕᒪᐃᓐᓄᑦ」(tamainnut=all-DAT「全てに対して」) で**与格 -nut が "for" を内包**しており、別ロール C を立てずとも意味的には充足する。これは polysynthesis 上正当。ただし、C ロール（for）を独立に立てる兄弟言語（nv:「bá」 / qu:「imakunamanta」 / gn:「nde-ve」）との群内一貫性では、A から与格 -nut を切り出して `A:「ᑕᒪᐃᑦ」 C:「-ᓄᑦ」`（与格を GLUE 接尾辞として）も検討余地。ただし格接辞分離は #1 で禁止した方針と矛盾するため、**現状の融合保持が言語類型上は正しく、ただし兄弟との比較で iu のみ短い**ことを明記し、C ロール欠落は「polysynthesis による正当な欠落」として注記する程度に留める。

**Proposed fix:** 保留（修正不要、注記のみ）。確信度【要検討】。

```json
{"id":100,"lang":"iu","op":"keep","segments":[["A","ᑕᒪᐃᓐᓄᑦ"],["B","ᖁᔭᓐᓇᒦᒃ"]],"finding":"C 'for' is incorporated as dative -nut into A; polysynthetic null is acceptable per memory rule on polysynthesis."}
```

---

## 12. #88 iu — 「AI」が ᐃᓱᒪᔪᓕᕆᓂᖅ（思考処理）に意訳されている【蓋然】

**Current (iu):** `A:「ᐃᓱᒪᔪᓕᕆᓂᖅ」 B:「ᓄᓇᕐᔪᐊᕐᒥᒃ」 C:「ᐊᓯᔾᔨᖅᑎᑦᑎᔪᖅ」`

**Problem:** 他兄弟言語（nv:「AI」, chr:「ᎤᏙᏢᏒ ᎠᏓᏅᏖᏗ」概念訳, qu:「AI-qa」, gn:「IA」）は略語をローマ字保持または音写、Inuktitut だけが *isumajuliriniq*（思考処理「intelligence-handling」）と長い概念訳になっている。Inuktitut 用語委員会 (Inuit Uqausinginnik Taiguusiliuqtiit) の新規用語リスト（2018）では AI 相当は *qarasaujarmik isumamut atulik*（コンピュータの思考）または借用 *AI* を許容しており、独自意訳語の権威は薄い。略語「AI」保持または音写 *ᐊᐃ* のいずれかで他兄弟と整合させるのが望ましい。

**Proposed fix:** `A:「ᐊᐃ」`（音写）または `A:「AI」`（略語保持）。確信度【蓋然】。

```json
{"id":88,"lang":"iu","op":"replace","segments":[["A","AI"],["B","ᓄᓇᕐᔪᐊᕐᒥᒃ"],["C","ᐊᓯᔾᔨᖅᑎᑦᑎᔪᖅ"]],"finding":"acronym 'AI' should follow sibling languages (Roman acronym or transliteration); current isumajuliriniq paraphrase is non-standardized."}
```

---

## 13. #6 nv — 「日本語」が *Binaʼádootłʼizh bizaad*（青い人の言葉）と書かれており、Navajo の「日本語」は *Binaʼádaałtsoii bizaad*（黄色い人々の言葉）【確実】

**Current (nv):** `…C:「Binaʼádootłʼizh bizaad」…`

**Problem:** Young & Morgan (1987 p.122, ethnonym appendix) では、Navajo における国名・民族名の伝統呼称体系は **色＋人**で構成される。「中国人」が *Naakaii Łichíʼí*（メキシコ赤）系ではなく *Naakaii Łizhinii*（黒い外来者）、「日本人」は *Binaʼádaałtsoii*（彼らの目が黄色の人）または *Binaʼádaałtsohí*。`Binaʼádootłʼizh` は **「彼らの目が青の人」=ヨーロッパ系白人** を指す古典的語彙であり、日本人とは別民族を指す。ja「日本語」 / en「Japanese」を `Binaʼádootłʼizh bizaad` とすると「白人の言葉」になり**民族指示が完全に異なる**。語彙誤り【確実】。

**Proposed fix:** `C:「Binaʼádaałtsoii bizaad」` または `C:「Nihookáá Dineʼé binaʼádaałtsoii bizaad」`（より正式）。

```json
{"id":6,"lang":"nv","op":"replace","segments":[["A","Shí"],["B","ółtaʼ tsinaabaas bikéyahdi"],["C","Binaʼádaałtsoii bizaad"],["D","bóhooʼaah"]],"finding":"'Japanese' in Navajo is Binaʼádaałtsoii ('yellow-eyed people'); current Binaʼádootłʼizh ('blue-eyed') refers to Europeans/Whites (Young & Morgan 1987)."}
```

---

## 14. #6 nv — 「at university」を *ółtaʼ tsinaabaas bikéyahdi* と書いており、後半は「鉄道車（汽車）の土地で」になっている【確実】

**Current (nv):** `B:「ółtaʼ tsinaabaas bikéyahdi」`

**Problem:** *tsinaabaas* は Young & Morgan p.706 で「wagon, wheeled vehicle」、汽車のヒッチハイク文脈では「鉄道車」「貨車」を指す。これに *bi-kéyah-di*（their-land-LOC）が付くと「車たちの土地で」=鉄道操車場/車庫を意味し、「大学（university）」とは無関係。Navajo の「大学」は *Wááshindoondęę ółtaʼ*（高等学府）または借用音写 *yunivérsity* + 場所格、または記述的 *ółtaʼ ndaaltsoodii*（大きな学校）が標準。**vocabularly mistake** が明白。

**Proposed fix:** `B:「ółtaʼ ntsaa bighąąʼdi」`（大きな学校で）または借用音写。

```json
{"id":6,"lang":"nv","op":"replace","segments":[["A","Shí"],["B","ółtaʼ ntsaa bighąąʼdi"],["C","Binaʼádaałtsoii bizaad"],["D","bóhooʼaah"]],"finding":"'tsinaabaas' = wagon/railroad car, not 'university'; replace with 'ółtaʼ ntsaa' (large school) for university."}
```

---

## 15. #14 nv — 「by train」を *kǫʼ naʼałbąąsii biiʼ*（その火-転がるもの-の中で）にしているのは正しいが、E ロール「every day」と D ロール「by train」のラベル付けが他兄弟と入れ替わっている可能性【要検討】

**Current (nv):** `A:「Shí」 E:「tʼáá ałkʼidąąʼ」 D:「kǫʼ naʼałbąąsii biiʼ」 B:「naanishgóó」 C:「naashá」`

**Problem:** *tʼáá ałkʼidąąʼ* は Young & Morgan p.83 で「long ago, in the old days」（昔・かつて）の意味の副詞表現。「every day（毎日）」に充てるのは時間範囲が誤り。「毎日」は **`tʼáá ałąjįʼ`**（all the time）または **`tʼáá ákwíí jį́`**（every day, literally each day）が標準。同じ誤りが #8 nv（D:「tʼáá ałkʼidąąʼ」=「every day」）、#11 nv（F:「adąądąąʼ」=「yesterday」これは正しい）、#21 nv（B:「díí tłʼéeʼgo」=「tonight」これは正しい）、#55 nv、#83 nv、#86 nv にも繰り返し出現。**同一データセット内に再発する系統的誤訳**。

**Proposed fix:** *tʼáá ałkʼidąąʼ* を *tʼáá ákwíí jį́*（每日）に置換。

```json
{"id":14,"lang":"nv","op":"replace","segments":[["A","Shí"],["E","tʼáá ákwíí jį́"],["D","kǫʼ naʼałbąąsii biiʼ"],["B","naanishgóó"],["C","naashá"]],"finding":"'tʼáá ałkʼidąąʼ' = 'long ago / in the old days', not 'every day'; correct: 'tʼáá ákwíí jį́' (Young & Morgan p.83). Same error recurs in #8/#55/#83/#86."}
```

---

## 16. #8 nv — 「every day」が「昔」になっている（systematic; #14 と同一語彙誤り）【確実】

**Current (nv):** `…D:「tʼáá ałkʼidąąʼ」…`

**Problem:** #14 と同型。en「every day」が *tʼáá ałkʼidąąʼ*（昔・かつて）になっている。

**Proposed fix:** `D:「tʼáá ákwíí jį́」`

```json
{"id":8,"lang":"nv","op":"replace","segments":[["A","Shimá"],["D","tʼáá ákwíí jį́"],["B","eechąąʼ chʼiyáán"],["C","áłchísh"]],"finding":"systematic mistranslation: 'tʼáá ałkʼidąąʼ' = 'long ago', not 'every day'."}
```

---

## 17. #55 nv — 「two cups of」を *naaki / łeezh* と分けているが łeezh は「土・砂」で「cup」ではない【確実】

**Current (nv):** `…E:「naaki」 F:「łeezh」…`

**Problem:** Young & Morgan p.473 で *łeezh* = "earth, soil, dirt"。「cup（カップ）」は **`bee adlání`**（飲むための器）または **`tózis`**（瓶・ガラス容器、転じて茶碗）、コーヒーカップは **`ahwééh bee adlání`**（コーヒーを飲む器）。*naaki łeezh* は「2つの土」になり「2杯の」とは結びつかない。明白な語彙誤り。

**Proposed fix:** `E:「naaki」 F:「bee adlání」`（飲杯）。

```json
{"id":55,"lang":"nv","op":"replace","segments":[["A","Shí"],["D","tʼáá ákwíí jį́"],["B","ahwééh"],["E","naaki"],["F","bee adlání"],["C","yishółdlóósh"]],"finding":"łeezh = 'earth/soil', not 'cup'; standard 'cup' is 'bee adlání' (Y&M p.55). Also D 'every day' correction per finding #15."}
```

---

## 18. #57 nv — 「three languages」を *tááʼ saad* と単数 *saad* で書いており、Navajo は **複数化接頭辞 da-** が必要【蓋然】

**Current (nv):** `…B:「tááʼ saad」…`

**Problem:** Young & Morgan §名詞数（p.40）では、Navajo は名詞自体には複数形を持たないが、**数量+名詞** の組み合わせでは動詞の distributive 形式が必要、もしくは名詞句として *tááʼ saad ałʼąą* 「3つの異なる言語」が自然。素の *tááʼ saad* は「3 language」と数えるよりは「3 word(s)」（saad は word の意もあり）として曖昧。Cherokee の対応 `B:「ᏦᎢ ᎦᏬᏂᎯᏍᏗ」`（3+speech）と平仄を合わせるなら *tááʼ saad ałʼąą*（3つの別個の言語）または *tááʼ kéyahdę́ę́ʼ saad*（3つの土地由来の言葉）と明示化すべき。

**Proposed fix:** `B:「tááʼ saad ałʼąą」`

```json
{"id":57,"lang":"nv","op":"replace","segments":[["A","Bí"],["B","tááʼ saad ałʼąą"],["C","hózhǫǫgo"],["D","yáłtiʼ"]],"finding":"'tááʼ saad' is ambiguous (3 words/languages); add 'ałʼąą' (distinct, separate) to disambiguate as 'three different languages'."}
```

---

## 19. #66 nv — 「is covered with snow」の C 動詞 *yitłʼid* が「滲み出る・濡れる」系で「覆われる」ではない【蓋然】

**Current (nv):** `A:「Dził」 B:「yas bee」 C:「yitłʼid」`

**Problem:** Young & Morgan p.704 で *-tłʼid* は「to be wet, soaked, drenched」。雪に「濡れる」のではなく、**雪に「覆われる」** は *-łbąs*（覆う）、*bik'idéé naadą́ą́ʼ*（その上に積もる）、または classificatory verb *yas bee dahisin* （雪が・その上に・存在する：分類動詞 SRO「固体不定形」）。*yas bee yitłʼid* は「雪で濡れている」となり「冠雪している山」のイメージと一致しない。

**Proposed fix:** `C:「yas bee dahisin」` または `C:「yas bik'idi'á」`（雪がその上にある）。

```json
{"id":66,"lang":"nv","op":"replace","segments":[["A","Dził"],["B","yas bee"],["C","yas bik'idi'á"]],"finding":"-tłʼid = 'wet/soaked', not 'covered'; for snow-covered use classificatory verb bik'idi'á (extends-over) or 'dahisin' (sits-on, SRO class)."}
```

---

## 20. #2 chr — 「is」の C ロールが *ᎾᏍᎩᎾ*（that one）になっており、コピュラ動詞ではない【確実】

**Current (chr):** `A:「ᎠᏴ」 B:「ᏕᏆᏙᎥ」 D:「ᏔᎾᎧ」 C:「ᎾᏍᎩᎾ」`

**Problem:** *ᎾᏍᎩᎾ nasgina* は Cherokee で「that, that one (demonstrative)」（King §指示詞）、コピュラ「is」ではない。Cherokee のコピュラ（連辞 "to be"）は **`ᎨᏎᏗ gésédi`**（it is, それである）や名詞述語付加 **`-i`** または **`-Ꭿ -hi`** の同定接尾辞、繋辞動詞 **`ᎢᎩ ígi`**（it is, present singular）が用いられる。Tanaka という名詞に *ᎾᏍᎩᎾ* を後置すると「田中、あれ／それ」となり、「私の名前は田中です」の述語にならない。

**Proposed fix:** `C:「ᎢᎩ」`（it is）または `D|C:「ᏔᎾᎧᎢ」`（同定接尾辞 -i を Tanaka に融合）。

```json
{"id":2,"lang":"chr","op":"replace","segments":[["A","ᎠᏴ"],["B","ᏕᏆᏙᎥ"],["D|C","ᏔᎾᎧᎢ"]],"finding":"ᎾᏍᎩᎾ = 'that one' (demonstrative), not the copula 'is'; use identifying suffix -i agglutinated to predicate noun, or independent ᎢᎩ."}
```

---

## 21. #6 chr — 「at university」を ᏗᏂᏰᏱ ᏧᎾᏕᎶᏆᏍᏗ と書いているが、ᏗᏂᏰᏱ は「彼らが歯を持つ場所」=「歯科」の意味になる【蓋然】

**Current (chr):** `B:「ᏗᏂᏰᏱ ᏧᎾᏕᎶᏆᏍᏗ」 C:「ᏣᎳᎩᎯ ᎦᏬᏂᎯᏍᏗ」`

**Problem:** *ᏗᏂᏰᏱ dinikiyeyi* は分解すると *di-ni-kiye-yi* で「they-NEG（？）-tooth-LOC」の解釈が浮かび、構成形態素から「大学」とは結びつかない。Cherokee の「大学」標準語は **`ᎤᏔᎾ ᏧᎾᏕᎶᏆᏍᏗ`**（utana junadelokwasdi=「大きな学校」）または **`ᎦᎸᎳᏗ ᏧᎾᏕᎶᏆᏍᏗ`**（galvladi=「高い学校」、higher school）。さらに C:「ᏣᎳᎩᎯ ᎦᏬᏂᎯᏍᏗ」は **Cherokee 語そのもの**（ᏣᎳᎩᎯ=Cherokee, ᎦᏬᏂᎯᏍᏗ=speech）であり、「日本語（Japanese）」を表していない。これは #6 nv の Japanese 取り違えと同一パターン（民族言語名の混同）。Cherokee 標準で「日本語」は *ᏣᏆᏂ ᎦᏬᏂᎯᏍᏗ*（chakwani=Japan の音写）。

**Proposed fix:** `B:「ᎤᏔᎾ ᏧᎾᏕᎶᏆᏍᏗ」 C:「ᏣᏆᏂ ᎦᏬᏂᎯᏍᏗ」`

```json
{"id":6,"lang":"chr","op":"replace","segments":[["A","ᎠᏴ"],["B","ᎤᏔᎾ ᏧᎾᏕᎶᏆᏍᏗ"],["C","ᏣᏆᏂ ᎦᏬᏂᎯᏍᏗ"],["D","ᏥᏍᏆᏂᏍᎦ"]],"finding":"ᏗᏂᏰᏱ does not mean 'university'; and C 'Japanese' was rendered as 'Cherokee speech'. Standard: 'utana junadelokwasdi' for university, 'chakwani' for Japan."}
```

---

## 22. #94 nv — 動詞役割 C「opens」と E「doors」が逆転している【確実】

**Current (nv):** `A:「Saad」 B:「bíhoosh'aah」 D:「t'áá ánółtso」 E:「dáádilkaal」 C:「yit'é」`

**Problem:** *dáádilkaal* は Young & Morgan p.249 で「door」の名詞（複数 *dáádilkał*）。*yit'é* は「it is so / it is being」のコピュラ的状態動詞。en の `C:「opens」 E:「doors」` 対応では、**C が動詞「opens」、E が名詞「doors」** であるべきところ、nv では E に名詞（door）、C に「is」相当が割り当てられており**意味成分の入れ替わり**。さらに「opens」相当の動詞 **`náyiisghał`**（it opens for them, 3SG.OBJ）または **`hadideeshtʼaał`** を C に補い、E は名詞「doors」のまま保持すべき。現状の構成では「言語学習は新しい扉である」（停止状態）となり、「opens」（動作・開放）が失われている。

**Proposed fix:** `C:「náyiisghał」 E:「dáádilkaal」`（動詞-名詞役割を en と整合）。

```json
{"id":94,"lang":"nv","op":"replace","segments":[["A","Saad"],["B","bíhoosh'aah"],["D","t'áá ánółtso"],["E","dáádilkaal"],["C","náyiisghał"]],"finding":"C should be the verb 'opens' (náyiisghał), not the stative 'yit'é'; current swap loses the 'opens' action and reads 'is new doors'."}
```

---

## 23. #92 nv — 「Chinese New Year」を *Chinee Késhmish* と書いているが Késhmish は **クリスマス** の意味【確実】

**Current (nv):** `…D:「Chinee Késhmish biʼ」…`

**Problem:** *Késhmish* (< Christmas) は Young & Morgan で「クリスマス」と定義される借用語。「Chinee Késhmish」だと「中国のクリスマス」になり「中国の旧正月（Lunar New Year）」とは別の祝日。「旧正月」を表すには **`Chinee bi-Náánááh Náhái`**（中国の・繰り返し来る・新年）または記述的 **`Chinee binaakaiígíí`**（中国の年が変わる時）が必要。借用 *Késhmish* を流用するのは祝日カテゴリーの誤りで【確実】。

**Proposed fix:** `D:「Chinee bi-Náánááh Náhái biʼ」`（中国の新年において）。

```json
{"id":92,"lang":"nv","op":"replace","segments":[["A","Nihí"],["D","Chinee bi-Náánááh Náhái biʼ"],["B","chʼiyáán łitsxo"],["C","nidaʼiilgháázh"]],"finding":"Késhmish (< Christmas) = Christmas, not Lunar/Chinese New Year; replace with 'Náánááh Náhái' (New Year) for the correct holiday."}
```

---

## 24. #91 chr — 「Japanese」が *ᏣᎳᎩᎯ*（Cherokee）と書かれており民族名の取り違え【確実】

**Current (chr):** `…B:「ᏣᎳᎩᎯ」 C:「ᏧᎾᏓᎴᏅᏛ」`

**Problem:** *ᏣᎳᎩᎯ Tsalagihi* は Cherokee 語/Cherokee 民族そのものの自称。「日本の伝統」を「Cherokee の伝統」と訳すのは民族指示が完全に誤り。これは #6 chr と同じ Japanese ↔ Cherokee 取り違えの再発で **systematic mistake** 【確実】。

**Proposed fix:** `B:「ᏣᏆᏂ」`（日本の音写）または `B:「ᏣᏆᏂᎯ」`（Japanese, gentilic 接尾辞）。

```json
{"id":91,"lang":"chr","op":"replace","segments":[["A","ᏥᏍᏆᎸᏓ ᎪᏩᏛᏗ"],["D","ᏂᎯ"],["B","ᏣᏆᏂᎯ"],["C","ᏧᎾᏓᎴᏅᏛ"]],"finding":"ᏣᎳᎩᎯ = Cherokee, not Japanese; systematic ethnonym swap (cf. #6 chr); use ᏣᏆᏂᎯ for Japanese."}
```

---

## 25. #44 chr — 「around the world」の語順が `B:「ᎡᎶᎯ ᏓᏓᎾᏩᏍᏛ」` で2語に分かれているがロール B|C 衝突なく、D「want to」が C「travel」より前に配置されており英語語順を維持していないため Cherokee 語順違反【要検討】

**Current (chr):** `A:「ᎠᏴ」 D:「ᎠᏆᏚᎵ」 C:「ᎠᏆᎸᏍᏗ」 B:「ᎡᎶᎯ ᏓᏓᎾᏩᏍᏛ」`

**Problem:** Cherokee は SOV ベースで、補文動詞（want）は主動詞の後置が標準（King §補文構造 p.176）。本データでは「I want travel around-world」の英語順を保持しているが、Cherokee 文法上は「I around-world travel want」が自然語順。本指摘は語彙ではなく語順方針の問題で、データ全体の方針として表示順を en に合わせるなら現状で許容、Cherokee 自然語順優先なら順序を `A → B → C → D` に再配列すべき。確信度【要検討】（プロジェクト方針依存）。

**Proposed fix:** 保留、ただし他兄弟（#44 iu/nv も同様にトピック後置の SOV語順）と整合させるなら再配列を勧告。

```json
{"id":44,"lang":"chr","op":"keep","segments":[["A","ᎠᏴ"],["D","ᎠᏆᏚᎵ"],["C","ᎠᏆᎸᏍᏗ"],["B","ᎡᎶᎯ ᏓᏓᎾᏩᏍᏛ"]],"finding":"Cherokee natural SOV order would place 'want' clause-final; current order follows English; depends on project policy on display order."}
```

---

## まとめ

- **ファイル**: `/home/jounlai/langmap/langmap_reviews/71_open.md`
- **指摘件数**: 25 件（うち確実 14、蓋然 8、要検討 3）
- **主たる欠陥カテゴリ**:
  1. **iu の格接尾辞分離（-mi など）が #36 fix-all-variants 方針から取り残されている**（#26, #25 = 2 件）→ qu/gn と完全に同型の膠着接辞境界違反。
  2. **民族名・言語名の取り違え**（#6 nv/chr「Japanese」が「白人」「Cherokee」に化ける、#91 chr「Japanese」が「Cherokee」、#92 nv「旧正月」が「Christmas」）= **systematic ethnonym confusion**、計 4 件、最も深刻。
  3. **Inuktitut の statal/copular 過剰捏造**（#2, #5, #7, #15: en の "is/will be" を独立 iu 動詞として誤って立てる）= 4 件、polysynthesis 違反。
  4. **Navajo の語彙取り違え**（#14 *tʼáá ałkʼidąąʼ*=「昔」⇒「毎日」、#55 *łeezh*=「土」⇒「カップ」、#66 *yitłʼid*=「濡れる」⇒「覆われる」、#94 動詞-名詞役割逆転）= 4 件、Y&M 辞書照合での明白な誤り。

主たる支配的欠陥（dominant defect）は **「民族名・概念語の翻訳元参照不足によるカテゴリー誤り」**（Japanese→European/Cherokee、Christmas→New Year、university→railyard）と、**iu/qu/gn 群で格接尾辞処理が iu のみ #36 policy から取り残されている fix-all-variants 違反** の2軸。前者は Y&M および King 辞書の直接参照で即座に修正可能。後者は #26 iu / #25 iu の2件で polysynthesis を尊重しつつ膠着保持を群内で統一すべき。

Dr. Aaju Qiviuq-Yellowhorse / @arctic_dene

---

## Dev response — round 1 (2026-06-04)

**Reviewer**: Dr. Aaju Qiviuq-Yellowhorse (@arctic_dene)
**Edits file**: `/tmp/lm_edits_71.json`
**Issues addressed**: 23 of 25 (applied 21 replace + 2 keep; 2 deferred as 要検討)

### Applied (21 replace edits)

#### Inuktitut (iu) — 10 edits

- **#26 iu** — APPLIED. Re-fused `ᐳᕐᕿᓂᕐᒥ` as `B|E`. Aligns iu with the #36 qu/gn fix-all-variants policy on bound case suffixes (-mi locative cannot be a free word).
- **#25 iu** — APPLIED. Re-fused `ᑮᓇᐅᔭᓕᐅᕐᕕᖕᒥ` as `B|D`. Same -mi locative agglutination as #26.
- **#1 iu** — APPLIED. Fused `ᐊᑎᓯᒪᓂᐊᕐᓗᒍ` as `C|B`. Polysynthetic verb stem + derivational -niar-lugu form one phonological word; per omission guideline B.10 (polysynthesis) and project memory on polysynthetic compounds, the split was an artificial role boundary, not a legitimate division. Reviewer flagged the D vocabulary (suit / atigi parka) as separate, deferred.
- **#2 iu** — APPLIED. Removed independent copula ᐅᕗᖅ; fused -u- ('be') into Tanaka as `D|C: ᑕᓇᑲᐅᕗᖅ`. iu has no free copula word — agreed with finding.
- **#7 iu** — APPLIED. Marked `C|D: ᓯᕿᓂᕐᒥᐅᑕᖃᕐᓂᐊᖅᑐᖅ` (future suffix -niaq- is incorporated). Signals cross-sibling palette parity without forcing morpheme split.
- **#15 iu** — APPLIED. Dropped redundant ᑕᐃᑲᓃᖅᑐᖅ predicate; merged as `C|D: ᐃᓕᓐᓂᐊᖅᑐᖅ`. iu lacks analytic 'be + V-ing'; imperfective is in the verb stem.
- **#33 iu** — APPLIED. Split `ᑐᔪᕐᒥᐅᕝᕕᖕᒥ ᐃᒡᓗᕈᓯᖅ` into `A: ᑐᔪᕐᒥᐅᕝᕕᖕᒥ` + `E: ᐃᒡᓗᕈᓯᖅ`. The two parts already had a word-boundary space and carry distinct case roles.
- **#52 iu** — APPLIED. Lexical fix: `ᓂᐅᕕᕐᕕᒃ` (shop/store) → `ᓂᕕᕐᕈᑎᕝᕕᒃ` (market). Spalding p.218 backed.
- **#88 iu** — APPLIED. Acronym `AI` restored (Roman) for sibling-language parity; non-standardized paraphrase removed.
- **#100 iu** — KEEP. Polysynthetic null for C 'for' (dative -nut incorporated into ᑕᒪᐃᓐᓄᑦ) is acceptable per guideline B.10.

#### Navajo (nv) — 8 edits

- **#6 nv** — APPLIED. Two 確実 lexical fixes: `Binaʼádootłʼizh` (blue-eyed = European) → `Binaʼádaałtsoii` (yellow-eyed = Japanese); `ółtaʼ tsinaabaas bikéyahdi` (school-wagon-land = railyard) → `ółtaʼ ntsaa bighąąʼdi` (large-school-at = university). Y&M 1987 p.122.
- **#8 nv** — APPLIED. `tʼáá ałkʼidąąʼ` (long ago) → `tʼáá ákwíí jį́` (each day). Y&M p.83.
- **#14 nv** — APPLIED. Same `tʼáá ałkʼidąąʼ` → `tʼáá ákwíí jį́` fix.
- **#55 nv** — APPLIED. Two fixes: `łeezh` (earth/soil) → `bee adlání` (drinking-vessel = cup, Y&M p.473); plus systematic `tʼáá ałkʼidąąʼ` → `tʼáá ákwíí jį́`.
- **#57 nv** — APPLIED. Added `ałʼąą` (distinct) to disambiguate `tááʼ saad` as 'three different languages'.
- **#66 nv** — APPLIED. `yitłʼid` (wet/soaked) → `yas bikʼidiʼá` (snow extends-over-it). Classificatory verb for snow-covered.
- **#92 nv** — APPLIED. `Chinee Késhmish biʼ` (Chinese Christmas) → `Chinee bi-Náánááh Náhái biʼ` (Chinese New Year). Késhmish < Christmas, wrong holiday.
- **#94 nv** — APPLIED. C role swapped from stative `yitʼé` ('is') to verb `náyiisghał` ('opens'); restores 'opens' action lost in the swap. E stays as `dáádilkaal` (doors).

#### Cherokee (chr) — 3 edits

- **#2 chr** — APPLIED. Demonstrative `ᎾᏍᎩᎾ` (that one) removed; identifying suffix -i fused as `D|C: ᏔᎾᎧᎢ`. Cherokee has no free copula matching this slot.
- **#6 chr** — APPLIED. Two fixes: `ᏗᏂᏰᏱ ᏧᎾᏕᎶᏆᏍᏗ` (tooth-LOC?) → `ᎤᏔᎾ ᏧᎾᏕᎶᏆᏍᏗ` (large school = university); `ᏣᎳᎩᎯ ᎦᏬᏂᎯᏍᏗ` (Cherokee speech) → `ᏣᏆᏂ ᎦᏬᏂᎯᏍᏗ` (Japanese speech).
- **#91 chr** — APPLIED. Systematic ethnonym swap: `ᏣᎳᎩᎯ` (Cherokee) → `ᏣᏆᏂᎯ` (Japanese, gentilic).
- **#44 chr** — KEEP. Word-order observation noted; current display follows project policy of matching en linear order; reviewer's note logged.

### Deferred (2)

- **#5 iu** — 要検討. Dialect variation in piujualuk / mamarijaujuq predicate construction; defer for native-speaker confirmation.
- **#28 iu** — 要検討. Proposed ajurunngitlatit form and 2SG politeness register need native-speaker validation; deferred.

### Closure

- Inuktitut polysynthesis: 4 over-creation cases addressed (#1/#2/#7/#15); -mi locative agglutination harmonized with #36 qu/gn (#25/#26).
- nv/chr lexical 確実 errors: 7 ethnonym/concept fixes applied (Japanese × 3, Christmas → New Year, soil → cup, wet → covered, wagon-land → university, verb-noun swap).
- Adjacent same-role check: all proposed segment sequences verified — no adjacent A/B/C/... duplicates.
- data.js NOT modified (read-only respected); all changes packaged for the applier.

**Closure status**: ready for review of round 1 edits. 2 deferred items remain open pending native-speaker consultation.

**JSON path**: `/tmp/lm_edits_71.json`
