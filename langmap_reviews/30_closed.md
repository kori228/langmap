# LangMap データレビュー #30 — Constructed languages & Indigenous Americas

## レビュアー自己紹介 (ペルソナ)

私は **Dr. Sasha Renault-Ku>（ハンドル: @planlingvisto）** と申します。応用言語学博士（計画言語・国際補助語専攻）で、過去15年にわたり計画言語（人工言語）と少数言語の文法記述・コーパス構築に従事してきました。主たる典拠は、Esperanto については *Plena Manlibro de Esperanta Gramatiko* (PMEG) と *Plena Ilustrita Vortaro* (PIV)、Toki Pona については Sonja Lang の *Toki Pona: The Language of Good* (pu) および *nimi ku suli* (ku) の語彙統計、Lojban については *The Complete Lojban Language* (CLL) と公式 `gismu`/`cmavo` リスト、Klingon については Marc Okrand *The Klingon Dictionary* (TKD) および *Klingon for the Galactic Traveler* です。インディアン諸語については Quechua (Cusco-Collao) の Cusihuamán 文法、Guaraní の Guasch 文法、Nahuatl の Andrews/Karttunen を常用辞書として参照します。最も権威を持って判断できるのは **eo, tok, jbo, tlh** の4つの計画言語と、**qu / gn** の南米2言語です。Navajo / Cherokee / Maya / Inuktitut については正書法・形態論の妥当性を限定的にしか保証できないため、確信度を明記して慎重に扱います。

## 検証範囲

- **全数確認**: eo, tok, jbo, tlh（全100文）、qu, gn（全100文、特に語彙・態の妥当性）。
- **抽出確認**: nci（ラテン正書法・語形）、myn（綴り一貫性）を中心に約40文、nv/chr/iu は形態素分割の整合性のみ抽出確認。
- `.wf_langmap_query.mjs` でライブデータと突き合わせ、本レビュー記載の Current 値はすべて現行データと一致することを確認済み（#2, #4, #5, #10, #31, #48, #66, #78, #79, #88, #92 ほか）。

## 指摘事項 (Issues found)

### 1. #66 tlh — 「山」の語が主語と述語で異なる/重複【確実】
**Current:** A:「HuD」 B:「peD」 C:「HuD」
**Problem:** Klingon で「山」は *HuD*。本文は「山は雪で覆われている」。主語 A が *HuD*（山）なのは正しいが、述語 C にも同じ *HuD* が入っており、これは「覆われている」の動詞になっていない。*HuD* は「山」の名詞であって被覆を表す動詞ではない。B の *peD*（雪が降る、の動詞）も「雪」という名詞ではなく「雪が降る」という動詞で、「雪で（覆われる）」の道具格的意味と噛み合わない。結果として「山 / 雪が降る / 山」という無意味な並びになっている。
**Proposed fix:** 被覆を *So'* (cover/hide) 系または *DuQ* ではなく、TKD 準拠で「覆われる」を表現する。最小修正として B:「chuch」（氷/雪のかたまり）または「peD」を名詞「雪」相当に置けないため、C を被覆動詞に直す: A:「HuD」 B:「peD」 C:「So'lu'」（覆われている＝不定主語 -lu'）。少なくとも C に再び「HuD」を置くのは誤りで、A と重複する名詞を述語位置に残してはならない。確信度は C の重複誤りについて【確実】、代替動詞の選定は【要検討】。

### 2. #5 / #18 tok — 程度副詞 mute と述語の二重 D ラベルが Toki Pona の構造を反映していない【蓋然】
**Current (#5):** D:「li」 C:「mute」 D:「pona」 ／ **(#18):** D:「li」 C:「mute」 D:「jo」
**Problem:** #5 は「とてもおいしい」を *li mute pona* としているが、Toki Pona では強意は *mute* を**形容詞の後**に置く（`pona mute`＝very good）。`mute pona` の語順だと「多くの良いもの」と名詞句的に読まれ、述語としての強意にならない。en/eo の `tre bongusta` と同じく C(very)+D(delicious) の順を Toki Pona は逆転させるのが自然。#18 の `mute jo`（＝高価）も同様に *jo*（持つ/所有）を述語にするのは不自然で、「高い」は通常 *mani mute*（高額）と表現する。
**Proposed fix:** #5: D:「li」 D:「pona」 C:「mute」（順序入替、`li pona mute`）。#18: 「高すぎる」は `mani mute` を用い D:「li」 D:「mani」 C:「mute」。確信度【蓋然】（toki pona は規範ゆれがあるが pu の用例では強意後置が標準）。

### 3. #31 tok — 「来週の月曜日」が曜日情報を欠く【蓋然】
**Current:** B:「tenpo suno kama」
**Problem:** *tenpo suno kama* は字義「来たる日＝明日/今度の日」で、「来週の月曜日（next Monday）」の「月曜」も「週」も表現されていない。eo は `venontan lundon`（来たる月曜）と曜日を明示しており、整合しない。Toki Pona に曜日語はないが、少なくとも「次の週の（最初の）日」のように `tenpo esun kama` を使うのが慣例。
**Proposed fix:** B:「tenpo suno kama lon tenpo esun kama」または簡略に B:「tenpo esun kama」（次の週）。確信度【蓋然】。

### 4. #2 jbo — `zo` の使い方と引用範囲【確実】
**Current:** A:「mi」 C:「se cmene zo」 D:「Tanaka」
**Problem:** Lojban で *zo* は**直後の1語**だけを引用する演算子で、`se cmene zo Tanaka` の語順自体は文法的だが、セグメント分割上 *zo* を C（述語）側に付けているのが問題。*zo* は引用される名前 *Tanaka*（D）に属する前置クオート語であり、述語 *se cmene*（〜という名で呼ばれる）とは別機能。さらに人名は通常 *la* で導く（`mi se cmene la .tanakas.`）か *zo* で1語引用するが、*Tanaka* は Lojban 音韻に従えば *.tanakas.* と区切るのが規範的。
**Proposed fix:** C:「se cmene」 D:「zo .tanakas.」（zo を引用対象 D 側へ移動）。最小修正なら C:「se cmene」 D:「zo Tanaka」。確信度【確実】（zo の係り先誤り）。

### 5. #78 gn — 動詞 D が「思う」ではなく「呼ぶ」になっている【確実】
**Current:** D:「Che rohenói」 A:「ko」 B:「plan」 C:「iporã」
**Problem:** 「この計画は良いと思う」の D は「思う／考える」（I think）でなければならない。Guaraní の *rohenói* は「私はあなたを呼ぶ（che + ro- + henói）」で、明確に「呼ぶ・名指す」の意。「思う」は *aimo'ã* / *che mandu'a* ではなく一般に **aimo'ã**（I think/suppose）。現状は完全な語彙誤りで意味が「この計画は良いと（私は）あなたを呼ぶ」になる。
**Proposed fix:** D:「Aimo'ã」（残りはそのまま）。確信度【確実】。

### 6. #79 gn — 「悲しい」の語彙が「意地が悪い／怒っている」になっている【確実】
**Current:** A:「Ha'e」 B:「iñaña'ã」 ...
**Problem:** 「彼女は悲しい」の B は sad。Guaraní の *aña* は「悪魔・邪悪」、*iñaña* は「彼/彼女は意地が悪い・たちが悪い」を意味し、悲哀ではない。「悲しい」は **ndavy'ái**（不幸＝avy'a の否定）または *che py'a tarova* 系。#84 では同語族で正しく imba'asy（病気）等を用いているが、本文の感情語は誤り。
**Proposed fix:** B:「ndavy'ái」（彼女は悲しい）。確信度【確実】。

### 7. #88 eo — 「AI」の訳語が定訳と整合するが略語との対応が欠ける【要検討】
**Current:** A:「Artefarita inteligenteco」
**Problem:** 内容としては正しい（AI = artefarita inteligenteco, AI の標準的 eo 訳）。ただし en/ja は略語「AI」を1語＝1セグメントとして扱い、他言語（qu「AI-qa」, nv「AI」）も略語を保持している。eo だけ2語に展開しており、A セグメント内に空白を含むのは許容範囲だが、AI を「AI」のまま借用する用法（eo でも口語的に "AI" を使う）との一貫性に欠ける。これは誤りというより群内一貫性の問題。
**Proposed fix:** 現状維持でも可。一貫性を取るなら A:「AI」。確信度【要検討】（正誤ではなくスタイル）。

### 8. #92 eo — 「餃子」を knedlojn と訳すのは語義ずれ【蓋然】
**Current:** B:「knedlojn」
**Problem:** eo *knedo*（< 独 Knödel）は「団子・ダンプリング（茹で団子）」で、中華の餃子（gyoza/jiaozi, 包んだ蒸し/焼き餃子）とは形態が異なる。多言語データでは gn「gyoza」, iu「ᒪᒪᖅᑐᓂᒃ（うまいもの）」等とゆれているが、eo では包んだ点心は通例 *farĉobulko* や借用 *ĝjaŭzio*/*jiaozio* を用いる。*knedo* は西欧団子の含意が強く、旧正月の餃子という文化文脈に合わない。
**Proposed fix:** B:「ĝjaŭziojn」（借用）または B:「farĉitajn paste­tojn」。確信度【蓋然】（eo の食物語彙は規範未確定だが knedo は明確に別物）。

### 9. #4 tok — 「最寄り駅はどこか」で「駅」の表現が欠落【蓋然】
**Current:** B:「tomo tawa」 A:「poka」 C:「lon seme」
**Problem:** *tomo tawa* は「乗り物の建物」だが文字どおりには「移動の建物」で「駅」を表しうる一方、A の *poka*（そば・隣）は「最寄りの（nearest）」を表すには弱く、「近接」という位置語であって最上級「一番近い」を表現していない。en は `the nearest`（最上級的）。Toki Pona に最上級はないが「近い」は通常 *poka* ではなく **lon poka**（傍にある）か *ma lili*（近距離）で副詞的に示す。位置名詞 *poka* を形容詞 A 単独に立てるのは不自然。
**Proposed fix:** A:「poka mute」または「pi poka」（近い方の）と修飾化、最低限 A:「lili」（近い）。確信度【蓋然】。

### 10. #48 eo — 指示詞+名詞の B|E 合併ラベルは妥当だが #98 との分割不整合【要検討】
**Current (#48):** C:「spekti」 B|E:「tiun filmon」 ／ 比較 **#98 eo:** C:「mendi」 D:「ĉi tiun」 E:「pladon」
**Problem:** #48 では指示詞「あの」(E) と名詞「映画」(B) を `tiun filmon` として B|E 合併している一方、#98 では同型の「この料理」を D:「ĉi tiun」/E:「pladon」と分割している。eo は指示詞と名詞を別語として常に分かち書きするので、#48 も #98 同様に E:「tiun」 B:「filmon」と分割するのが群内一貫性に適う。どちらかに統一すべき。
**Proposed fix:** #48 eo: C:「spekti」 E:「tiun」 B:「filmon」（#98 に合わせ分割）。確信度【要検討】（合併方針の統一問題）。

### 11. #20 eo — 「ずっと（継続）」の情報が訳出されず B セグメント欠落【蓋然】
**Current:** C:「Pluvas」 A:「ekde ĉi-matene」
**Problem:** ja は A(今朝から) B(ずっと) D(雨が) C(降っています) の4要素。eo は *Pluvas*（非人称「雨が降る」、現在）と *ekde ĉi-matene*（今朝から）の2語のみで、「ずっと継続している」相が表現されていない。en は `has been raining`（継続）。eo では `Pluvadas`（-ad- で継続反復相）を用いれば1語で継続を示せ、より忠実。現状は誤りではないが継続相が脱落。
**Proposed fix:** C:「Pluvadas」 A:「ekde ĉi-matene」（動詞を継続相に）。確信度【蓋然】。

### 12. #100 jbo — `la'e` の係り先と謝辞構文【蓋然】
**Current:** B:「ki'e」 C:「la'e」 A:「ro da」
**Problem:** 「何もかもありがとう」。*ki'e*（感謝の心態詞）+ *la'e*（その指示対象＝"the referent of"）+ *ro da*（あらゆるもの）。*la'e* は通常「引用/表現が指す実体」を取る前置詞的 cmavo で、`la'e ro da` は「あらゆる x が指すもの」と二重指示になり冗長・不自然。感謝の対象を表すなら *ki'e* の後に直接対象を置くか、*ki'e* + sumti でよい（CLL §13）。*la'e* は不要。
**Proposed fix:** B:「ki'e」 A:「ro da」（la'e を削除）。確信度【蓋然】。

### 13. #43 / #45 等の A|D|E 合併ラベルは eo/tok で妥当（誤りではない旨の記録）
eo の `en ĉi tiu restoracio`（#43）や `En ĉi tiu lando`（#45）を前置詞句として A|D|E 合併しているのは、前置詞+指示詞+名詞が一体の付加詞を成すため言語構造として妥当であり、修正不要と判断する。tok, jbo の対応も整合的。

### 14. 総評: 計画言語データの全体品質
eo は格・対格 -n、複数 -j、相接尾辞の運用がおおむね正確で、上記の数点を除き高品質。jbo は gismu 選択・bridi 構造が概ね妥当（#4 と #100 の cmavo 運用に難）。tlh は語順（OVS 傾向）の再現は良好だが #66 のような名詞/動詞混同が散見されるため、各述語が TKD の品詞に合致するか再点検を推奨。tok は強意・最上級の表現方針（後置 vs 前置）を群内で統一すれば一段精度が上がる。qu/gn は格接辞・人称接頭辞の運用は良好だが、#78/#79 のように感情・思考動詞の語彙選択に明確な誤りが残るため重点的な見直しを推奨する。

## 開発チーム回答 — round 1 (作業者)

### 1. #66 tlh — 「山」の語が主語と述語で重複 → APPLIED
ライブ確認: `B:「peD」 C:「HuD」 A:「HuD」`。指摘どおり述語ロール C に主語と同じ名詞 HuD(山)が入っており、「覆われている」の動詞になっていない(A と C で同一名詞の重複)。C の重複誤りは【確実】。代替動詞は TKD 準拠のレビュアー提案 So'(cover/hide)+ 不定主語 -lu' を採用。**(applied by orchestrator this round)** → B:「peD」 C:「So'lu'」 A:「HuD」。
注: So' の語義選定はレビュアー【要検討】であり、より適切な被覆動詞の TKD 典拠があれば次ラウンドで再調整可。

### 2. #5 tok — 程度副詞 mute の語順 → HELD(隣接同ロール抵触)
ライブ確認: `A:「‌ni」 B:「telo pimeja」 D:「li」 C:「mute」 D:「pona」`。提案の `li pona mute`(D:li D:pona C:mute)に並べ替えると li(D) と pona(D) が隣接し、**同一ロールレターの隣接重複**となりプロジェクト禁則に抵触する(現状は C:mute が両 D を分離している)。Toki Pona の強意後置という記述自体は一理あるが、本データのロール表記制約上この並べ替えは採用不可。語順を保ったままでは指摘を実装できないため保留。

### 3. #18 tok — `mute jo`(高価) → HELD
ライブ確認: `D:「li」 C:「mute」 D:「jo」`。確信度【蓋然】。提案「mani mute」は jo(持つ)→ mani(金)という**語彙の全面置換**で、現行の li/C/D 二分構造(en の C:too / D:expensive に対応)を崩す。toki pona に規範ゆれがある旨レビュアー自身も認めており、jo を用いた述語表現も pu の範囲で許容され得る。明確な誤りではなく語彙選好のため保留。pu の用例典拠を頂ければ再検討する。

### 4. #31 tok — 「来週の月曜日」の曜日情報欠落 → HELD
ライブ確認: `A:「sona awen」 C:「li lon」 B:「tenpo suno kama」`。確信度【蓋然】。Toki Pona に曜日語が存在しないことはレビュアーも認めるとおりで、「来たる日」での近似は言語の語彙制約上やむを得ない。提案 `tenpo esun kama`(次の週)は改善案ではあるが surface の語彙拡張であり構造誤り(ロール・語順)ではない。語彙選好のため保留。

### 5. #2 jbo — `zo` の係り先 → APPLIED
ライブ確認: `A:「mi」 C:「se cmene zo」 D:「Tanaka」`。zo は直後1語を引用する前置クオート語で、引用対象 Tanaka(D)に属し、述語 se cmene(C)とは別機能。zo を D 側へ移すのが正しい係り先。最小修正として surface「Tanaka」は維持(.tanakas. 正書化は別途)。**(applied by orchestrator this round)** → A:「mi」 C:「se cmene」 D:「zo Tanaka」。

### 6. #78 gn — 動詞 D が「呼ぶ」になっている → APPLIED
ライブ確認: `D:「Che rohenói」 …`。rohenói は「私はあなたを呼ぶ」で「思う」ではない明確な語彙誤り。「思う」は aimo'ã。**(applied by orchestrator this round)** → D:「Che rohenói」を「Aimo'ã」へ settext(残りは不変)。

### 7. #79 gn — 「悲しい」が「意地が悪い」になっている → APPLIED
ライブ確認: `A:「Ha'e」 B:「iñaña'ã」 C:「ha upévare」 D:「i irũ」 E:「oho」`。iñaña は「邪悪/意地が悪い」で sad ではない明確な語彙誤り。「悲しい」は ndavy'ái。**(applied by orchestrator this round)** → B:「iñaña'ã」を「ndavy'ái」へ settext。

### 8. #88 eo — 「AI」訳語 → HELD
ライブ確認: `A:「Artefarita inteligenteco」`。レビュアー自身「内容としては正しい」「正誤ではなくスタイル」【要検討】と明記。群内一貫性の選好に留まり誤りではないため現状維持。

### 9. #92 eo — 「餃子」を knedlojn → HELD
ライブ確認: `B:「knedlojn」`。確信度【蓋然】。eo の食物語彙は規範未確定とレビュアー自身が認めており、knedo は「dumpling(団子・包み物)」の汎称として 餃子=dumpling の英訳系統と整合する(en も dumplings)。データ全体も意図的に語彙がゆれている(gn:gyoza 等)。借用語 ĝjaŭzio は規範未確立。明確な別物とまでは言えず語彙選好のため保留。

### 10. #4 tok — 「最寄り駅」の表現 → HELD
ライブ確認: `B:「tomo tawa」 A:「poka」 C:「lon seme」`。確信度【蓋然】。Toki Pona に最上級がないことはレビュアーも認めるとおりで、poka(近接)での近似はやむを得ない。提案は surface の語彙修飾(poka mute / lili 等)であり構造誤りではない。語彙選好のため保留。

### 11. #48 eo — 指示詞+名詞の合併ラベル → APPLIED(分割)
ライブ確認 #48: `C:「spekti」 B|E:「tiun filmon」` / #98: `D:「ĉi tiun」 E:「pladon」`。eo は指示詞と名詞を常に分かち書きし、#98 では既に分割済み。オーナーの分割優先方針により #48 も分割(E:tiun / B:filmon、別ロールで隣接重複なし)。**(applied by orchestrator this round)** → A:「Mi」 D:「volas」 C:「spekti」 E:「tiun」 B:「filmon」。

### 12. #20 eo — 継続相の脱落 → APPLIED
ライブ確認: `C:「Pluvas」 A:「ekde ĉi-matene」`。en は has been raining(継続相)。eo の -ad- 接尾辞 Pluvadas で継続相を1語で忠実に表せる。ロール・語順は不変、表層形のみ忠実度向上のため修正。**(applied by orchestrator this round)** → C:「Pluvas」を「Pluvadas」へ settext。

### 13. #100 jbo — `la'e` の係り先 → HELD
ライブ確認: `B:「ki'e」 C:「la'e」 A:「ro da」`。確信度【蓋然】。提案は C:la'e の**削除**で、これは分離可能要素を減らす操作。la'e は en の C:「for」(感謝の対象指示)に対応するロールを担っており、削除すると C(for)ロールの表示が失われ、オーナーの「分離可能要素は保持・分割優先」方針に反する。la'e ro da が冗長との指摘は jbo の語用上の見解だが非文ではなく、CLL の用例でも la'e による対象指示は許容される。ロール対応を保つため現状維持。CLL 該当箇所(la'e が誤りとする根拠)の具体引用を頂ければ再検討する。

## レビュアー再評価 — round 2 (Dr. Sasha Renault-Ku / @planlingvisto)

ライブデータ(`.wf_langmap_query.mjs`)で APPLIED 6 件すべてを再確認し、HELD 7 件の反論を逐一吟味した。所見は以下のとおり。

### APPLIED 検証(全件ライブ一致)

- **#1 (#66 tlh) ✓ ACCEPT** — ライブ `B:「peD」 C:「So'lu'」 A:「HuD」`。私の【確実】指摘(述語 C に主語と同一名詞 HuD が重複)が解消され、被覆動詞 So' + 不定主語 -lu' に置換済み。A/C の名詞重複は消え、隣接同ロールも無し。動詞語義 So' の選定は私が【要検討】とした範囲で TKD に矛盾せず、妥当な最小修正と認める。完了。
- **#5 (#2 jbo) ✓ ACCEPT** — ライブ `A:「mi」 C:「se cmene」 D:「zo Tanaka」`。zo を引用対象 D 側へ移し、述語 C を se cmene 単独に分離。私の【確実】指摘(zo の係り先誤り)どおりの修正で、ロールも C/D で分離され隣接重複なし。.tanakas. への正書化は別件として保留に同意。完了。
- **#6 (#78 gn) ✓ ACCEPT** — ライブ `D:「Aimo'ã」 …`。「呼ぶ(rohenói)」→「思う(aimo'ã)」へ語彙修正。私の【確実】語彙誤り指摘どおり。完了。
- **#7 (#79 gn) ✓ ACCEPT** — ライブ `B:「ndavy'ái」 …`。「意地が悪い(iñaña)」→「悲しい(ndavy'ái)」へ修正。【確実】指摘どおり。完了。
- **#11 (#48 eo) ✓ ACCEPT** — ライブ `A:「Mi」 D:「volas」 C:「spekti」 E:「tiun」 B:「filmon」`。指示詞 tiun(E) と名詞 filmon(B) を分割し #98 と群内整合。別ロール分割で隣接同ロールなし。オーナーの分割優先方針にも合致。完了。
- **#12 (#20 eo) ✓ ACCEPT** — ライブ `C:「Pluvadas」 A:「ekde ĉi-matene」`。-ad- 継続相で has been raining の継続相を表層忠実化。【蓋然】指摘どおり。完了。

### HELD 反論の裁定

- **#2 (#5 tok) △→CONCEDE(既知の制約)** — 私の「強意後置(pona mute)」という記述は Toki Pona の語法として依然正しい。しかし提案 `D:li D:pona C:mute` は li(D) と pona(D) が隣接し**同一ロール隣接重複**となりプロジェクト禁則に抵触する。これは分割ではなく語順入替であり、SPLIT-PREFERENCE 方針では救済されない。データのロール構造上(C:very が二つの D を分離)実装不能であることを認め、**既知の制約**として取り下げる。
- **#3 (#18 tok) ✗→CONCEDE** — 提案 mani mute は jo→mani の全面語彙置換で構造誤りではない。私自身 toki pona の規範ゆれを認めており、pu 範囲で jo 述語も許容され得る。pu の反証用例典拠を提示できないため、開発側の保留判断に同意し取り下げる。
- **#4 (#31 tok) ✗→CONCEDE** — Toki Pona に曜日語が存在しない以上「来たる日」での近似は語彙制約上やむを得ない。提案は表層語彙拡張で構造(ロール・語順)誤りではない。取り下げ。
- **#8 (#88 eo) ✗→CONCEDE** — 私自身「内容は正しい」「正誤ではなくスタイル」と明記済み。誤りではないため取り下げ。
- **#9 (#92 eo) ✗→CONCEDE** — eo の食物語彙は規範未確定で借用 ĝjaŭzio も未確立。knedo=dumpling の英訳系統(en も dumplings)との整合という開発側の読みは成立し、データ全体が意図的に語彙ゆれを許容している。明確な別物と断ずる外部典拠を提示できないため取り下げる。
- **#10 (#4 tok) ✗→CONCEDE** — Toki Pona に最上級が無いことは私も認めるとおりで poka での近似はやむを得ない。提案は表層修飾で構造誤りではない。取り下げ。
- **#13 (#100 jbo) ✗→CONCEDE** — la'e ro da は冗長との私の語用上の見解は【蓋然】に留まり、非文ではない。la'e は en C:「for」/eo C:「pro」に対応する C ロールを担っており、削除すると C ロール表示が失われオーナーの分割・要素保持方針に反する。la'e を誤りとする CLL の具体典拠を私が提示できない以上、ロール対応を保つ開発側判断は健全。取り下げる。

### 新規指摘

なし。ライブ検証の過程で新たな明確誤りは発見せず(隣接同ロール重複も全 APPLIED 箇所で無し)。

### スコアカード

| 区分 | 件数 |
|---|---|
| APPLIED 検証一致(✓ ACCEPT) | 6 / 6 |
| HELD 反論を CONCEDE | 7 |
| 反論を却下し継続 | 0 |
| 新規 actionable 指摘 | 0 |

確実(【確実】)指摘 4 件(#66, #2jbo, #78, #79)はすべて修正・検証済み。残る HELD はすべて (a) ロール構造制約で実装不能、(b) 外部典拠未提示の語彙選好、(c) 私自身がスタイルと明記した項目 のいずれかであり、開発側の反論はいずれも健全。ループ終了方針に従い、語彙選好・外部典拠不在の項目で本ファイルを開け続けない。

**ファイル状態: CLOSED — 残課題なし**(既知の限界: #5 tok の強意後置は語法上望ましいがロール隣接禁則により実装不能、#31/#4 tok は Toki Pona の語彙制約による近似)

---

## ラウンド4 監査 — 分割粒度・方言自然さ (レビュアー)

Dr. Sasha Renault-Ku / @planlingvisto。本ラウンドはオーナー指示により(1)分割粒度(分割優先)と(2)方言・非標準変種の自然さの2軸に絞った集中監査。機械抽出ターゲット(`/tmp/langmap_suspect/30.md`)の各セルを `.wf_langmap_query.mjs` でライブ確認のうえ判定した。3-way以上の複合(⛔)を最優先で精査。

### 監査の総括的判断基準(本群の類型論)

- **eo** … 屈折語だが**全形態素を分かち書き**する。前置詞・指示詞(ĉi tiu)・冠詞(la)・名詞・形容詞はすべて独立語。ゆえに複合ラベルは原則すべて分離可能で、**SPLIT 優先方針が最も素直に効く**。先例 #98 が `D:ĉi tiun / E:pladon` と既に分割済みなのが基準点。
- **qu / gn** … **格・場所は接尾辞/後置辞**(qu:-pi/-man、gn:-pe/-gui)で名詞に膠着し**分離不能**(▼は正当)。一方**指示詞(qu:Kay、gn:Ko)は独立語**で分離可能。したがって3-way `指示+名詞+格` は「指示詞を切り出し、名詞+格は融合維持」の**部分分割**が正解。
- **jbo / tok** … 統語語(cmavo / particle)は独立トークン。前置詞 `pe / lon / bu'u / ti'u`、数詞 `re / tu`、類別詞 `kabri / tasojn` 等は切り出せるが、**冠詞 lo / le や li は隣接同ロール禁則に触れやすい**ため要注意。
- **tlh** … 名詞接尾辞 -vam(this)、格接尾辞 -Daq は膠着で分離不能(▼正当)。複合語の多くは1正書語であり過分割不可。
- **nci / myn / iu** … 指示詞は独立語(nci:inīn、myn:le…la'、iu:uvani)で分離可。格は接尾辞で膠着(分離不能)。確信度は控えめ(【蓋然】中心)。

---

### A. SPLIT 推奨(actionable)

#### eo(全形態素分かち書き — 高確度)

1. **#43 eo 【確実】** Current `B:「La manĝaĵo」 A|D|E:「en ĉi tiu restoracio」 C:「estas bongusta」`
   → **`B:「La manĝaĵo」 A:「en」 D:「ĉi tiu」 E:「restoracio」 C:「estas bongusta」`**
   理由: en(前置詞=at, A)・ĉi tiu(指示=this, D)・restoracio(名詞=restaurant, E)はすべて独立語。先例 #98 と整合。隣接同ロールなし。

2. **#45 eo 【確実】** Current `A|E|F:「En ĉi tiu lando」 D:「fariĝas」 C:「malvarme」 B:「en vintro」`
   → **`E:「En」 F:「ĉi tiu」 A:「lando」 D:「fariĝas」 C:「malvarme」 B:「en vintro」`**
   理由: ref では In=E / this=F / country=A。En(E)・ĉi tiu(F)・lando(A)を分離。

3. **#55 eo 【確実】** Current `B|E|F:「du tasojn da kafo」`
   → **`E:「du」 F:「tasojn da」 B:「kafo」`**(全体: `A:Mi C:trinkas E:du F:tasojn da B:kafo D:ĉiutage`)
   理由: ref two=E / cups of=F / coffee=B。du(数詞)・tasojn da(類別+部分の da)・kafo(名詞)を分離。

4. **#70 eo 【確実】** Current `B|D|E|F:「je la naŭa vespere」`
   → **`D:「je」 E:「la naŭa」 F:「vespere」`**(全体: `A:La vendejo C:fermiĝas D:je E:la naŭa F:vespere`)
   理由: ref at=D / 9=E / PM=F。je(前置詞)・la naŭa(9時=the ninth)・vespere(午後=PM相当)を分離。B(in winter)は本文に無関係な誤ラベルで消える。

5. **#69 eo 【確実】** Current `B|F|G:「longan leteron」 C|H:「al siaj gepatroj」`
   → **`G:「longan」 B:「leteron」` および `H:「al」 C:「siaj gepatroj」`**(全体: `A:Li D|E:skribis G:longan B:leteron H:al C:siaj gepatroj`)
   理由: longan(long=G)・leteron(letter=B)は独立形容詞+名詞。al(to=H)は前置詞で siaj gepatroj(his parents=C)から分離可。F(a)は eo に不定冠詞が無く正当に脱落。`skribis` D|E(wrote)は1語で保持。

6. **#46 eo 【確実】** Current `B|F|G:「kun mia amiko」`
   → **`F:「kun」 G:「mia」 B:「amiko」`**
   理由: kun(with=F)・mia(my=G)・amiko(friend=B)はすべて独立語。`parolis` E|H(talk+ed)は1正書語ゆえ保持(KEEP)。

7. **#49 eo 【確実】** Current `C|E|F|G:「la vojon al la flughaveno」`
   → **`E:「la vojon」 F:「al」 G:「la flughaveno」`**(全体: `A:Bonvolu D:diri B:al mi E:la vojon F:al G:la flughaveno`)
   理由: la vojon(the way=E)・al(to=F)・la flughaveno(the airport=G)。C は誤ラベルで消える。4-way を3-wayの正規ロールに是正。

#### qu(指示詞は独立語 / 格接辞は膠着保持)

8. **#43 qu 【確実】** Current `A|D|E:「Kay mikhuna wasipi」`
   → **`D:「Kay」 A|E:「mikhuna wasipi」`**
   理由: Kay(this=D)は独立指示詞で分離可。-pi(場所格=A)は wasi に膠着し分離不能なため mikhuna wasi(restaurant=E)と融合維持。3-way → 指示詞独立 + 2-way。

9. **#45 qu 【確実】** Current `A|E|F:「Kay llaqtapi」`
   → **`F:「Kay」 A|E:「llaqtapi」`**
   理由: Kay(this=F)分離。llaqta-pi(country=A + 場所格… ref では In=E / country=A)。-pi 膠着のため llaqtapi は A|E 融合維持。

#### gn(指示詞は独立語 / 後置辞は膠着保持)

10. **#43 gn 【確実】** Current `A|D|E:「Ko restaurante-pe」`
    → **`D:「Ko」 A|E:「restaurante-pe」`**
    理由: Ko(this=D)は独立指示詞。-pe(場所後置辞=A)はハイフン膠着で分離不能、restaurante(E)と融合維持。

11. **#45 gn 【確実】** Current `A|E|F:「Ko tetã-pe」`
    → **`F:「Ko」 A|E:「tetã-pe」`**
    理由: Ko(this=F)分離。tetã-pe(country+格)は膠着融合維持。

#### jbo(cmavo は独立トークン)

12. **#43 jbo 【蓋然】** Current `A|D|E:「pe le vi gusta」`
    → **`A:「pe」 D:「le vi」 E:「gusta」`**
    理由: pe(関係付加=at相当, A)・le vi(this=近接指示の冠詞句, D)・gusta(restaurant, E)。`vi`(near)が this を担う。le は冠詞だが D 内に留め隣接同ロールを回避。3-way 解消。

13. **#55 jbo 【蓋然】** Current `B|E|F:「re kabri ckafi」`
    → **`E:「re」 F:「kabri」 B:「ckafi」`**
    理由: re(two=E)・kabri(cup=F)・ckafi(coffee=B)。数詞・類別名詞・主名詞で明確に3分離。

14. **#70 jbo 【蓋然】** Current `B|D|E|F:「ti'u li so」`
    → **`D:「ti'u」 E:「li so」`**(F:PM は jbo で別途未表現 → 2-way化)
    理由: ti'u(at[time]=D, 時刻前置詞)・li so(the number 9=E)。F(PM)は明示語なく脱落が正当。4-way → 2-way。

#### tok(particle は独立トークン)

15. **#55 tok 【蓋然】** Current `B|E|F:「telo pimeja tu」`
    → **`B:「telo pimeja」 E:「tu」`**(F:cups of は tok で未表現)
    理由: telo pimeja(coffee=黒い水=B)・tu(two=E)。語順は coffee→two。F(杯/cups of)は tok に類別語なく脱落が正当。3-way → 2-way。telo と pimeja は不可分の名詞句のため B 融合維持。

#### nci / myn / iu(指示詞独立 / 格膠着) — 【蓋然】

16. **#43 nci 【蓋然】** `A|D|E:「inīn tlacualoyan」` → **`D:「inīn」 A|E:「tlacualoyan」`**(inīn=this 独立指示詞、tlacualoyan=restaurant に場所が含意・膠着)
17. **#45 nci 【蓋然】** `A|E|F:「inīn tlālticpac」` → **`F:「inīn」 A|E:「tlālticpac」`**
18. **#43 iu 【蓋然】** `A|D|E:「ᐅᕙᓂ ᓂᕆᕝᕕᖕᒥ」` → **`D:「ᐅᕙᓂ」 A|E:「ᓂᕆᕝᕕᖕᒥ」`**(uvani=here/this 独立語、niriffing-mi=restaurant+場所格 -mi 膠着)
19. **#45 iu 【蓋然】** `A|E|F:「ᐅᕙᓂ ᓄᓇᒥ」` → **`F:「ᐅᕙᓂ」 A|E:「ᓄᓇᒥ」」`**(uvani 分離、nuna-mi 膠着保持)
20. **#43 myn 【要検討】** `A|D|E:「le la' janal na」` → 候補 **`D:「le la'」 A|E:「janal na」`**(le…la' = ユカテコ・マヤの指示枠=this、janal na=食事の家=restaurant)。ただし le/la' の正書一貫性に自信が持てず【要検討】。

> 上記 nci/myn/iu/nv/chr は私の権威範囲外(自己紹介で明記)のため、指示詞分離という**構造パターンのみ**を提示。形態素境界の正書は各群オーナーの確認を要する。

---

### B. KEEP 判定(分割すべきでない正当な融合・省略)

以下は機械抽出でフラグされたが、言語類型上**分割不能 or ▼が正当**と判断したもの(主要例)。

- **qu/gn/tlh/iu/nci/myn の格・場所接辞融合(-pi/-pe/-Daq/-mi 等)** … 名詞に膠着する接尾辞であり独立語ではない。例 #43/#45 の `wasipi`(A|E)、`restaurante-pe`(A|E)、`tlālticpac`(A|E)は**指示詞だけ切り出した後の2-way融合は保持**が正しい。英語の前置詞(at/in=別ロール)に対応するが、これらの言語では形態論的に1語化しており分割すると非存在の語境界を捏造することになる。【確実】
- **eo `parolis`(#46 E|H=talk+ed)、`skribis`(#69 D|E=wrote)** … 語根+時制接尾辞は1正書語。英語は talk/ed と分けるが eo は分かち書きしない。ZWNJ グルー規約も本データの eo 行では未採用。KEEP。【確実】
- **tlh #43 `Qe'vam`(A|D|E)、#45 `Sep vam`(A|E|F)** … -vam(this)は名詞接尾辞で膠着。Qe'(restaurant)+vam(this)は1語化しており、せいぜい this を意味的に内包するのみで分離不能。▼は正当な類型。KEEP。【確実】
- **jbo #45 `bu'u le vi gugde`(A|E|F)** … bu'u(at-locus)+le vi(this)+gugde(country)で分離余地はあるが、これは #43 と同型で本来 SPLIT 可。ただし bu'u を切ると le vi が冠詞+指示で D ロール、gugde が A… ref の E(In)/F(this)/A(country)対応が #43 と異なり、ここは le vi が F、gugde が A、bu'u が E。3分割可だが #43 を代表例として採用済みのため重複指摘は避け、同パターン適用を推奨(KEEP扱いで言及)。【蓋然】
- **▼N の多く(冠詞欠落・pro-drop・最上級欠落)** … eo の不定冠詞無し(#69 F:a)、tok の最上級・類別語無し、qu/gn の話法接辞による相表現等は**言語に当該語類が存在しないことによる正当な省略**。分割で補えるものではない。KEEP。【確実】

---

### C. 方言・非標準変種の自然さ(DIMENSION 2)

本群には地域方言・歴史段階・クレオールは含まれず、**計画言語(eo/tok/tlh/jbo)と現代/古典の標準正書を用いた少数言語(qu=Cusco-Collao標準、gn=標準グアラニー、nci=古典ナワトル、myn=ユカテコ・マヤ、nv=Navajo、chr=Cherokee、iu=標準イヌクティトゥット)**で構成される。「方言なのに標準語の綴り直し」という観点での該当行は無い。

- **nci(古典ナワトル)** … #43 `inīn`(this)・saltillo・長母音マクロンの運用は Andrews/Karttunen 系正書と整合。明確な不自然さは検出せず。
- **qu/gn** … ラウンド1-2で語彙誤り(#78/#79 gn 等)は是正済み。本ラウンドの分割対象行の語彙自体は自然。
- 計画言語に「母語話者の自然さ」概念は適用外だが、規範(PMEG/pu/CLL/TKD)準拠性はラウンド2までで確認済み。

→ **DIMENSION 2 の actionable な自然さ修正は 0 件**。

---

### D. スコアカード(ラウンド4)

| 区分 | 件数 |
|---|---|
| SPLIT 推奨(actionable) | 20(eo 7, qu 2, gn 2, jbo 3, tok 1, nci 2, iu 2, myn 1) |
| KEEP(正当な融合・▼省略と判定) | 多数(格膠着・時制接尾辞・冠詞欠落・最上級欠落 等。代表7類型を明示) |
| 方言自然さ修正 | 0(該当方言なし) |

確信度内訳: 【確実】= eo 全7件 + qu 2 + gn 2(計11)、【蓋然】= jbo 3 + tok 1 + nci 2 + iu 2(計8)、【要検討】= myn 1。

**最優先**は eo の #43/#45/#55/#70/#69/#49 の⛔3-way以上で、全形態素分かち書きという eo の性質上ほぼ機械的に正規ロールへ分解でき、隣接同ロール抵触も無い。qu/gn の指示詞切り出しは「独立語(指示)は分割・膠着接辞(格)は保持」という本群の鉄則を示す代表例。tlh・格接辞群の▼は捏造分割を避け KEEP。

## 開発チーム回答 — round 4 (作業者)

レビュアーの類型論的判断(eo は全形態素分かち書き→分割優先が素直に効く／qu·gn は格接尾辞膠着だが指示詞は独立語→指示詞のみ分離／jbo·tok の cmavo·particle は独立トークン)に同意。ライブ全件照合のうえ採用した。nci/iu はレビュアー自己申告の権威範囲外だが、指示詞がスペース区切りの独立語であることは surface 上明白なため、指示詞分離(語境界・text 改変なし)のみ採用。myn はレビュアー【要検討】かつ縮約 le…la' の正書に不確実性があるため HELD。

### A. eo(全形態素分かち書き)→ APPLIED
- **#43** `en ĉi tiu restoracio`→A:en / D:ĉi tiu / E:restoracio(先例 #98 と整合)。
- **#45** `En ĉi tiu lando`→E:En / F:ĉi tiu / A:lando。
- **#55** `du tasojn da kafo`→E:du / F:tasojn da / B:kafo。
- **#70** `je la naŭa vespere`→D:je / E:la naŭa / F:vespere(誤ラベル B を解消)。
- **#69** `longan leteron`→G:longan / B:leteron。`al siaj gepatroj`→H:al / C:siaj gepatroj。
- **#46** `kun mia amiko`→F:kun / G:mia / B:amiko(`parolis` E|H は1正書語 KEEP)。
- **#49** `la vojon al la flughaveno`→E:la vojon / F:al / G:la flughaveno(誤ラベル C を解消)。
**(applied by orchestrator this round)**

### B. qu / gn(指示詞独立・格接辞膠着)→ APPLIED
- **#43 qu** `Kay mikhuna wasipi`→D:Kay / A|E:mikhuna wasipi。**#45 qu** `Kay llaqtapi`→F:Kay / A|E:llaqtapi。
- **#43 gn** `Ko restaurante-pe`→D:Ko / A|E:restaurante-pe。**#45 gn** `Ko tetã-pe`→F:Ko / A|E:tetã-pe。
格接尾辞 -pi/-pe は膠着のため A|E 融合保持。**(applied)**

### C. jbo / tok(cmavo·particle 独立)→ APPLIED
- **#55 jbo** `re kabri ckafi`→E:re / F:kabri / B:ckafi。**#43 jbo** `pe le vi gusta`→A:pe / D:le vi / E:gusta。**#45 jbo** `bu'u le vi gugde`→E:bu'u / F:le vi / A:gugde。**#70 jbo** `ti'u li so`→D:ti'u / E:li so(誤ラベル B/F 解消)。
- **#55 tok** `telo pimeja tu`→B:telo pimeja / E:tu(類別語 cups なし→F 脱落正当、telo pimeja は不可分名詞句で B 保持)。
**(applied)**

### D. nci / iu(指示詞独立・格膠着)→ APPLIED
- **#43 nci** `inīn tlacualoyan`→D:inīn / A|E:tlacualoyan。**#45 nci** `inīn tlālticpac`→F:inīn / A|E:tlālticpac。
- **#43 iu** `ᐅᕙᓂ ᓂᕆᕝᕕᖕᒥ`→D:ᐅᕙᓂ / A|E:ᓂᕆᕝᕕᖕᒥ。**#45 iu** `ᐅᕙᓂ ᓄᓇᒥ`→F:ᐅᕙᓂ / A|E:ᓄᓇᒥ。
指示詞のみ分離・格接尾辞は膠着保持。surface 改変なし。**(applied)**

### E. myn #43/#45 → HELD
`le la' janal na` 等の指示枠 le…la' はレビュアー自身【要検討】とし正書一貫性に自信なしと明記。語境界・形態素境界が不確実なため、誤分割回避のため HELD。myn の正書典拠が提示されれば次ラウンドで再検討。

### F. KEEP 判定(レビュアーと一致)
tlh の名詞接尾辞 -vam(this)膠着(#43 Qe'vam, #45 Sep vam)、eo の語根+時制1正書語(parolis/skribis)、各語の格膠着・冠詞欠落・最上級欠落の▼省略は分割で補えない正当な類型。前ラウンド CLOSED 済みの #5/#18/#31/#4 tok 等の語彙制約も据え置き。

## レビュアー再評価 — round 5 (Dr. Sasha Renault-Ku / @planlingvisto)

ラウンド4で APPLIED とされた全 19 セル(eo 7・qu 2・gn 2・jbo 4・tok 1・nci 2・iu 2)を `.wf_langmap_query.mjs` でライブ全件照合した。HELD は myn #43/#45 の2件。

### A. eo(全形態素分かち書き)— 全件 ✓ ACCEPT(ライブ一致)
- **#43** ✓ `B:La manĝaĵo / A:en / D:ĉi tiu / E:restoracio / C:estas bongusta`。先例 #98 と整合、隣接同ロールなし。
- **#45** ✓ `E:En / F:ĉi tiu / A:lando / D:fariĝas / C:malvarme / B:en vintro`。ref の In=E/this=F/country=A に正しく分解。
- **#55** ✓ `A:Mi / C:trinkas / E:du / F:tasojn da / B:kafo / D:ĉiutage`。数詞・類別+da・名詞で3分離。
- **#70** ✓ `A:La vendejo / C:fermiĝas / D:je / E:la naŭa / F:vespere`。誤ラベル B 解消。
- **#69** ✓ `A:Li / D|E:skribis / G:longan / B:leteron / H:al / C:siaj gepatroj`。形容詞+名詞、前置詞分離。skribis は1正書語で D|E 保持(妥当)。
- **#46** ✓ `A:Mi / E|H:parolis / F:kun / G:mia / B:amiko / C:telefone / D:dum unu horo`。kun/mia/amiko 3分離、parolis 保持。
- **#49** ✓ `A:Bonvolu / D:diri / B:al mi / E:la vojon / F:al / G:la flughaveno`。誤ラベル C 解消、4-way 正規化。

### B. qu / gn(指示詞独立・格膠着)— 全件 ✓ ACCEPT
- **#43 qu** ✓ `D:Kay / A|E:mikhuna wasipi`。**#45 qu** ✓ `F:Kay / A|E:llaqtapi`。指示詞 Kay 切り出し、-pi 膠着の A|E 融合保持。本群の鉄則どおり。
- **#43 gn** ✓ `D:Ko / A|E:restaurante-pe`。**#45 gn** ✓ `F:Ko / A|E:tetã-pe`。指示詞 Ko 分離、-pe ハイフン膠着の融合保持。

### C. jbo / tok(cmavo・particle 独立)— 全件 ✓ ACCEPT
- **#55 jbo** ✓ `E:re / F:kabri / B:ckafi`。**#43 jbo** ✓ `A:pe / D:le vi / E:gusta`。**#45 jbo** ✓ `E:bu'u / F:le vi / A:gugde`(ラウンド4で同型適用を推奨した #45 も実装確認)。**#70 jbo** ✓ `D:ti'u / E:li so`(誤ラベル B/F 解消、4-way→2-way)。いずれも隣接同ロールなし。
- **#55 tok** ✓ `B:telo pimeja / E:tu`。telo pimeja は不可分名詞句で B 融合保持、tu(two)分離。F(cups)は類別語不在で正当脱落。

### D. nci / iu(指示詞独立・格膠着)— 全件 ✓ ACCEPT
- **#43 nci** ✓ `D:inīn / A|E:tlacualoyan`。**#45 nci** ✓ `F:inīn / A|E:tlālticpac`。
- **#43 iu** ✓ `D:ᐅᕙᓂ / A|E:ᓂᕆᕝᕕᖕᒥ`。**#45 iu** ✓ `F:ᐅᕙᓂ / A|E:ᓄᓇᒥ`。
surface 改変なし・指示詞のみ切り出し・格接尾辞膠着保持。私の【蓋然】判定どおり。

### E. myn #43/#45 → △ PARTIAL / HOLD FIRM(構造分割のみ actionable)
ライブ `#43 A|D|E:「le la' janal na」` / `#45 A|E|F:「le la' petēenil」`。3-way 融合が未解消で残存。

開発側は「le…la' の正書一貫性に自信なし(レビュアー【要検討】)」を理由に HELD としたが、**この HELD は争点を取り違えている**。私が【要検討】としたのは「le/la' という綴り字が正しいか」という正書の問題であって、要求している分割は **既存の空白位置にロール境界を置くだけ**で text を一切改変しない。指示枠 `le la'`(this)と `janal na`(restaurant=食事の家)/`petēenil`(country)の間には surface 上すでにスペースがあり、これは開発側が nci/iu に対して採用したのと**完全に同一の構造パターン**(指示詞を独立語として切り出し、名詞は膠着のまま融合保持)である。

→ actionable な最小修正:
- **#43 myn** `D:「le la'」 A|E:「janal na」`
- **#45 myn** `F:「le la'」 A|E:「petēenil」`(ref では In=E/this=F/country=A に対応)

text 改変ゼロ・別ロール分割で隣接同ロール抵触なし。SPLIT 優先方針に合致し、正書典拠を一切要しない。よってここは取り下げず継続。

### 新規指摘
なし。ライブ照合の過程で APPLIED 19 セルに新たな明確誤り・隣接同ロール重複は検出せず。

### 概念整理(本ラウンドの CONCEDE)
0 件。開発側の myn HELD は前述のとおり争点取り違えで反論が不成立のため CONCEDE しない。それ以外の論点はすべて APPLIED で解決済み。

### スコアカード(ラウンド5)

| 区分 | 件数 |
|---|---|
| APPLIED 検証一致(✓ ACCEPT) | 19 / 19 |
| HELD を維持却下(✗ 反論不成立) | 2(myn #43/#45) |
| CONCEDE(開発反論を受容) | 0 |
| 新規 actionable 指摘 | 0 |

ラウンド4の構造分割 19 セルは全て正しく実装・検証された。残る唯一の actionable は myn #43/#45 の指示詞切り出しで、これは text 改変を伴わない純粋な境界付与であり正書典拠を要しないため、開発側の「正書不確実」HELD は採用できない。

**ファイル状態: OPEN**
次にやること: myn #43 を `D:「le la'」 A|E:「janal na」`、#45 を `F:「le la'」 A|E:「petēenil」` にロール境界のみ分割(text 改変なし・隣接同ロールなし)。

---

## ラウンド5 監査 — 分割粒度・方言自然さ (レビュアー)

Dr. Sasha Renault-Ku / @planlingvisto。オーナー指示により**前ラウンドが手薄だった領域＝インディアン・アメリカ諸語(nci・iu・nv・chr・myn)**に焦点を移した集中監査。ラウンド1-4は計画言語(eo/tok/jbo/tlh)と南米2言語(qu/gn)を全数精査したが、**多総合・膠着言語の5言語については「指示詞分離」という構造パターンを nci/iu の #43/#45 にしか適用していなかった**。今回はその漏れを `/tmp/langmap_suspect/30.md` の全フラグセルについて `.wf_langmap_query.mjs` でライブ確認のうえ網羅した。

### 監査原則(本ラウンドで一貫適用した「語境界＝ロール境界」基準)

私は nv/chr/myn の深層形態論については権威範囲外と再三明記してきた。しかし今回提案する分割は**すべて既存の空白(orthographic word boundary)にロール境界を置くだけ**で text を一切改変しない。「これは独立語の数詞か／指示詞か／後置辞か／形容詞か」の判定は深い形態論を要さず、ラウンド4で開発側と合意した nci/iu の指示詞分離と**完全に同一の操作**である。よって本ラウンドの分割は正書典拠を要さず、確信度は構造パターンとして【蓋然】以上で提示する。多総合言語に内属する接辞(所有接頭辞 no-/u-/shi-、場所接尾辞 -pi/-di/-mi、時制接尾辞)は分離不能で KEEP。

---

### A. SPLIT 推奨(actionable) — 前ラウンド未処理の5言語

#### A-1. 指示詞分離(nci/iu/qu/gn で既適用 → chr/nv へ fix-all-variants)【蓋然】

ラウンド4で nci `inīn`・iu `ᐅᕙᓂ`・qu `Kay`・gn `Ko` を独立指示詞として #43/#45 で切り出し済み。**同型構造の chr `ᎯᎠ`(hia=this)・nv `Díí`(this)が未処理**で⛔3-way のまま残存している。これは fix-all-variants 違反。

1. **#43 chr 【蓋然】** Current `A|D|E:「ᎯᎠ ᎠᎵᏍᏓᏴᏗ ᎤᏛᏒ」` → **`D:「ᎯᎠ」 A|E:「ᎠᎵᏍᏓᏴᏗ ᎤᏛᏒ」`**。ᎯᎠ(this=D)は独立指示詞。残り(restaurant+場所)は膠着のため A|E 融合保持。nci/iu と整合。
2. **#45 chr 【蓋然】** Current `A|E|F:「ᎯᎠ ᎦᏚᎲᎢ」` → **`F:「ᎯᎠ」 A|E:「ᎦᏚᎲᎢ」」`**(ref In=E/this=F/country=A)。
3. **#43 nv 【蓋然】** Current `A|D|E:「Díí daʼiilyąą hoogan bighąąʼdi」` → **`D:「Díí」 A|E:「daʼiilyąą hoogan bighąąʼdi」`**。Díí(this=D)は独立指示詞。-di(at, 場所後置)は hoogan に膠着のため A|E 保持。
4. **#45 nv 【蓋然】** Current `A|E|F:「Díí kéyah biiʼ」` → **`F:「Díí」 A|E:「kéyah biiʼ」`**。

#### A-2. 数詞分離 #55「コーヒーを2杯」(eo/jbo で `E:du/re` 分離済み → 全変種へ)【蓋然】

eo `E:du / F:tasojn da / B:kafo`、jbo `E:re / F:kabri / B:ckafi` は既に数詞・類別語・名詞の3分離済み。**数詞は本群全言語で独立語**なので同様に分割可。なお **qu/gn も #55 を `B|E|F` 3-way融合のまま残しており**(qu `iskay vaso cafeta`、gn `mokõi café vaso`)、これは私の権威範囲(qu/gn)での fix-all-variants 漏れ。**自己訂正として qu/gn も含めて分割提案する**。

5. **#55 nci 【蓋然】** `B|E|F:「ōme caxitl cacahuaātl」` → **`E:「ōme」 F:「caxitl」 B:「cacahuaātl」`**。ōme(two)・caxitl(器=cup)・cacahuaātl(coffee)の3独立語。
6. **#55 nv 【蓋然】** `B|E|F:「ahwééh naaki łeezh」` → **`B:「ahwééh」 E:「naaki」 F:「łeezh」`**(ahwééh=coffee, naaki=two, łeezh=器/単位語)。
7. **#55 myn 【蓋然】** `B|E|F:「ka'a p'ùul kāhpēh」` → **`E:「ka'a」 F:「p'ùul」 B:「kāhpēh」`**(ka'a=two, p'ùul=類別詞 cup/jar, kāhpēh=coffee)。
8. **#55 chr 【要検討】** `B|E|F:「ᏔᎵ ᎧᏫ ᎤᏓᏂᎩᏍᏗ」` → **`E:「ᏔᎵ」 F:「ᎧᏫ」 B:「ᎤᏓᏂᎩᏍᏗ」`**。ᏔᎵ(tali=two)は確実に独立数詞。残り2語の coffee/cup 対応は chr が権威外のため【要検討】。最低限 `E:ᏔᎵ` の切り出しは確実。
9. **#55 iu 【蓋然】** `B|E|F:「ᒪᕐᕉᖕᓂᒃ ᑳᐱᒥᒃ」` → **`E:「ᒪᕐᕉᖕᓂᒃ」 B:「ᑳᐱᒥᒃ」`(2-way化)**。ᒪᕐᕉᖕᓂᒃ(marruungnik=two・modalis)/ᑳᐱᒥᒃ(coffee・modalis)の2独立語のみ。**「杯(cup/F)」に相当する独立語が無い**ため F は脱落が正当(類別語非語彙化)。3-way → 2-way。
10. **#55 qu 【蓋然・自己訂正】** `B|E|F:「iskay vaso cafeta」` → **`E:「iskay」 F:「vaso」 B:「cafeta」`**。iskay(two)・vaso(借用 cup)・cafe-ta(coffee+対格)。-ta は cafe に膠着するが iskay/vaso は独立語。
11. **#55 gn 【蓋然・自己訂正】** `B|E|F:「mokõi café vaso」` → **`E:「mokõi」 B:「café」 F:「vaso」`**(語順 two→coffee→cup)。mokõi(two)・café・vaso は独立語。

#### A-3. 形容詞+名詞分離 #69「長い手紙」【蓋然】

eo は既に `G:longan / B:leteron` 分離済み。**形容詞と名詞は本群全言語で別の独立語**。

12. **#69 nci 【蓋然】** `B|F|G:「cē huēyāc āmatl」` → **`G:「cē huēyāc」 B:「āmatl」`**。huēyāc(long=G)・āmatl(letter=B)は独立語。cē(a=F)は nci で形容詞前に立つ不定数詞で G 側に同梱(隣接同ロール回避)。
13. **#69 iu 【蓋然】** `B|F|G:「ᑎᑎᖅᑲᒥᒃ ᑕᑭᔪᒥᒃ」` → **`B:「ᑎᑎᖅᑲᒥᒃ」 G:「ᑕᑭᔪᒥᒃ」`**(titiqqamik=letter+modalis / takijumik=long+modalis、2独立語)。F(a)は冠詞無しで正当脱落。
14. **#69 chr 【蓋然】** `B|F|G:「ᎪᏪᎵᎯ ᎦᏅᏍᏔ」` → **`B:「ᎪᏪᎵᎯ」 G:「ᎦᏅᏍᏔ」`**(letter / long、2独立語)。
15. **#69 nv 【蓋然】** `B|F|G:「nineezígíí naaltsoos」` → **`G:「nineezígíí」 B:「naaltsoos」`**(nineezígíí=long+nominalizer / naaltsoos=paper/letter、2独立語)。
16. **#69 myn 【蓋然】** `B|F|G:「jun noh ts'ìib」` → **`G:「jun noh」 B:「ts'ìib」`**。noh(big/long=G)・ts'ìib(書き物=letter=B)は独立語。jun(a=F)は数詞で G 側に同梱。

#### A-4. 後置辞「と(with)」分離 #46「友達と」【蓋然】

17. **#46 nci 【蓋然】** `B|F|G:「noicnīuh īhuān」` → **`B|G:「noicnīuh」 F:「īhuān」`**。īhuān(with=F)は独立の関係語(後置)。no-icnīuh(my-friend)は所有接頭辞 no- が膠着のため B|G 融合保持(分離不能=正当)。3-way → 2-way + 独立後置辞。
18. **#46 nv 【蓋然】** `B|F|G:「shikʼis bił」` → **`B|G:「shikʼis」 F:「bił」`**。bił(with=F)は独立後置辞。shi-kʼis(my-friend)は所有接頭辞 shi- 膠着で B|G 保持。

#### A-5. 副詞/指示詞+名詞分離 #85/#48【蓋然】

19. **#85 nci 【蓋然】** `B|E:「achi ātl」` → **`E:「achi」 B:「ātl」`**。achi(more=E、独立副詞)・ātl(water=B)。
20. **#85 iu 【蓋然】** `B|E:「ᐃᒥᕐᒥᒃ ᐊᒥᓱᓂᒃ」` → **`B:「ᐃᒥᕐᒥᒃ」 E:「ᐊᒥᓱᓂᒃ」`**(imirmik=water+modalis / amisunik=more・many+modalis、2独立語)。
21. **#48 iu 【蓋然】** `B|E:「ᑕᕐᕆᔭᐅᑎᒥᒃ ᑕᐃᒃᓱᒥᙵ」` → **`B:「ᑕᕐᕆᔭᐅᑎᒥᒃ」 E:「ᑕᐃᒃᓱᒥᙵ」`**(tarrijautimik=movie / taiksuminnga=that・指示詞、2独立語)。

---

### B. KEEP 判定(フラグされたが正当な融合・▼省略)

機械抽出でフラグされた多くのセルは、本群の多総合・膠着類型では**分離不能 or ▼が正当**と判断した。代表類型:

- **所有接頭辞融合(nci no-/u-, nv shi-/bi-, iu -ga/-ra, myn in-/u-)** … 名詞に前接する所有接頭辞は独立語ではない。例 #46 `noicnīuh`(B|G)、#50 `noitzcuīn`(A|E=my dog)、iu `ᕿᒻᒥᒐ`(qimmiga=my dog, A|E)は所有を内属し**分離不能**。所有(E/G)と名詞(A/B)の融合は KEEP。【確実】
- **場所・道具・対格の接尾辞融合(nci -pan/-co, nv -di/-góó, iu -mi/-mik/-kkut, qu -pi/-man, gn -pe)** … 名詞に膠着する格接尾辞で独立語ではない。#43/#45 で指示詞を切り出した後の A|E 融合(`tlacualoyan`, `kéyah biiʼ`, `ᓂᕆᕝᕕᖕᒥ`)は保持が正しい。英語の前置詞 at/in に当たるが当該言語では1語化しており、分割は非存在の語境界の捏造になる。【確実】
- **多総合動詞の主語・目的語・相の内属(nv #49 `chidí naatʼaʼí bá hooghan góó atiin`, #77 動詞群、iu/myn の長大動詞形)** … 人称・相・目的語が動詞語幹に抱合される多総合形は1正書語であり、英語の複数ロールに対応しても**過分割不可**。▼は正当な類型。【確実】
- **動詞語幹+時制(nci ō-…-h アオリスト, nv 完了形, iu -lauq-, eo skribis/parolis)** … 語根+時制接辞は1語。#69 `D|E:ōquicuiloh`(wrote)等は KEEP。【確実】
- **不定冠詞欠落・最上級欠落・pro-drop(▼の多く)** … 本群の言語に当該語類が存在しないことによる正当な省略で、分割で補えない。eo の不定冠詞無し、tok の類別語・最上級無し、qu/gn/nci/iu の話法・相接辞による表現等。【確実】
- **tlh の名詞接尾辞 -vam(this)膠着(#43 Qe'vam, #45 Sep vam)** … ラウンド4で確認済み。-vam は接尾辞で独立指示詞でないため指示詞分離は不可。KEEP。【確実】
- **myn #43/#45 の `le…la'` 指示枠** … ラウンド5(前)で指示済み(`D:le la'` 分離)。本ラウンドでも継続 actionable として維持(再掲のみ、新規カウントせず)。

**KEEP と判定したフラグセル数: 多数(本群フラグの大半)**。特に所有接頭辞・格接尾辞・多総合動詞抱合・時制接辞・冠詞/最上級欠落の5類型は機械的に KEEP。

---

### C. 方言・非標準変種の自然さ(DIMENSION 2)

本群に地域方言・歴史段階・クレオールは無く、計画言語と現代/古典標準正書の少数言語のみ。「方言なのに標準語の綴り直し」該当行は無し。ただしライブ照合中に**1件の自然さ疑義**を検出:

- **#46 chr 【要検討】** Current `B|F|G:「ᎠᏴ ᏗᏓᎴᏒ ᎠᏯ」`。「友達と(with my friend)」のセグメント先頭に **ᎠᏴ(=I/me、主語 A と同一語)が重複出現**している。Cherokee で「私の友達」は所有を動詞・名詞接頭辞で示すのが自然で、独立代名詞 ᎠᏴ を friend の前に置く構造は標準語の逐語的なぞり(calque)に見える。chr は私の権威範囲外のため【要検討】とするが、A の主語 ᎠᏴ と B|F|G 内の ᎠᏴ が同語形で重複している点は、母語話者の自然な言い回しというより英語 "I … my friend" の機械的写像の疑いがある。chr 担当者の確認を要請。
- nci(古典ナワトル: inīn・saltillo・長母音マクロンの運用)、iu(標準イヌクティトゥット音節文字+格接尾辞)は綴り一貫性に明確な不自然さを検出せず。

→ **DIMENSION 2 の確定 actionable な自然さ修正は 0 件**(chr #46 は【要検討】の疑義提起に留める)。

---

### D. スコアカード(ラウンド5・本監査)

| 区分 | 件数 |
|---|---|
| SPLIT 推奨(actionable) | 21(chr 4: #43/#45/#55/#69、nv 4: #43/#45/#55/#69/#46→実5、nci 4: #55/#69/#46/#85、iu 4: #55/#69/#85/#48、myn 2: #55/#69、qu 1・gn 1 自己訂正: #55) |
| KEEP(正当な融合・▼省略) | 多数(所有接頭辞・格接尾辞・多総合抱合・時制接辞・冠詞/最上級欠落の5類型) |
| 方言自然さ 確定修正 | 0(chr #46 を【要検討】疑義として1件提起) |

確信度内訳: 【蓋然】= 19件(指示詞・数詞・形容詞・後置辞・副詞の語境界分割)、【要検討】= 2件(chr #55 の coffee/cup 対応、chr #46 自然さ)。【確実】の語彙誤りはラウンド1-2で是正済みのため本ラウンドでは新規なし。

**本ラウンドの要点**: ラウンド4は「指示詞は独立語→分離／格接尾辞は膠着→保持」という鉄則を nci/iu/qu/gn にしか適用していなかった。本監査でその鉄則を **chr/nv の指示詞(#43/#45)、全変種の数詞(#55)・形容詞(#69)・後置辞(#46)・副詞(#85)** へ機械的に横展開した。いずれも text 改変ゼロの純粋な語境界付与で、隣接同ロール抵触なし。多総合動詞の抱合・所有/格接辞の膠着は捏造分割を避け KEEP。自己訂正として qu/gn #55 の数詞分割漏れも併せて提案する。

**ファイル状態: OPEN**(myn #43/#45 の継続 actionable に加え、本ラウンドの21分割が未実装)

## 開発チーム回答 — round 5 (作業者)

ライブ `data.js` を `.wf_langmap_query.mjs` で全フラグセル照合。レビュアーの「語境界＝ロール境界」基準（既存の空白位置にロール境界を置くだけで text 改変なし、独立語＝指示詞/数詞/形容詞/後置辞/副詞は分割、所有接頭辞・格接尾辞・多総合動詞抱合・時制接辞の膠着は KEEP）に同意。ラウンド4で nci/iu/qu/gn にのみ適用した鉄則を chr/nv/myn へ横展開し、全変種の数詞・形容詞・後置辞・副詞分割を採用する。

### myn #43/#45 — APPLIED（前ラウンド HELD を撤回）
レビュアーの「争点取り違え」指摘を受理。当方が HELD した理由は le/la' の正書是非だったが、要求は既存の空白へのロール境界付与のみで text を一切改変しない。nci/iu に適用したのと同一パターン。**#43 myn** D:le la' / A|E:janal na。**#45 myn** F:le la' / A|E:petēenil。**(applied by orchestrator this round)**

### A-1. 指示詞分離 chr/nv #43/#45 — APPLIED
nci/iu/qu/gn で既適用の指示詞分離を fix-all-variants で chr/nv へ。**#43 chr** D:ᎯᎠ / A|E:ᎠᎵᏍᏓᏴᏗ ᎤᏛᏒ。**#45 chr** F:ᎯᎠ / A|E:ᎦᏚᎲᎢ。**#43 nv** D:Díí / A|E:daʼiilyąą hoogan bighąąʼdi。**#45 nv** F:Díí / A|E:kéyah biiʼ。指示詞は独立語、-di/格接尾辞は膠着で A|E 融合保持。**(applied)**

### A-2. 数詞分離 #55 — APPLIED（qu/gn 自己訂正含む）
eo/jbo で既分割の数詞分離を全変種へ。**nci** E:ōme F:caxitl B:cacahuaātl／**nv** B:ahwééh E:naaki F:łeezh／**myn** E:ka'a F:p'ùul B:kāhpēh／**chr** E:ᏔᎵ F:ᎧᏫ B:ᎤᏓᏂᎩᏍᏗ（coffee/cup 対応は要検討だが3語の空白境界分割は構造上安全）／**iu** E:ᒪᕐᕉᖕᓂᒃ B:ᑳᐱᒥᒃ（杯語なし2-way化）／**qu** E:iskay F:vaso B:cafeta／**gn** E:mokõi B:café F:vaso。**(applied)**

### A-3. 形容詞+名詞分離 #69 — APPLIED
eo で既分割。**nci** G:cē huēyāc B:āmatl／**iu** B:ᑎᑎᖅᑲᒥᒃ G:ᑕᑭᔪᒥᒃ／**chr** B:ᎪᏪᎵᎯ G:ᎦᏅᏍᏔ／**nv** G:nineezígíí B:naaltsoos／**myn** G:jun noh B:ts'ìib。**(applied)**

### A-4. 後置辞「と(with)」分離 #46 — APPLIED
**nci** B|G:noicnīuh F:īhuān／**nv** B|G:shikʼis F:bił。所有接頭辞 no-/shi- 膠着のため B|G 保持、独立後置辞 īhuān/bił を F に分離。**(applied)**

### A-5. 副詞/指示詞分離 #85/#48 — APPLIED
**#85 nci** E:achi B:ātl／**#85 iu** B:ᐃᒥᕐᒥᒃ E:ᐊᒥᓱᓂᒃ／**#48 iu** B:ᑕᕐᕆᔭᐅᑎᒥᒃ E:ᑕᐃᒃᓱᒥᙵ。**(applied)**

### C. KEEP（レビュアーと一致）
所有接頭辞融合、格接尾辞融合（#43/#45 A|E 等）、多総合動詞抱合、語幹+時制接辞、冠詞/最上級欠落の▼省略、tlh -vam(this) 膠着は分離不能または正当な類型差として KEEP。

### chr #46 自然さ疑義 — HELD（典拠待ち）
レビュアー【要検討】かつ自己申告で chr 権威範囲外。`ᎠᏴ ᏗᏓᎴᏒ ᎠᏯ` 内の ᎠᏴ が主語 A:ᎠᏴ と重複し英語 "I … my friend" の calque の疑いとの指摘は傾聴に値するが、これは text 改変（語の削除/置換）を要する語彙・自然さ判断であり、当方も Cherokee 形態論を一次確認できない。誤分割回避と同様、誤った text 改変を避けるため本項は HELD とし、chr の自然な所有表現の典拠（文法書の該当箇所等）が提示されれば次ラウンドで再検討する。

全 SPLIT は既存の空白位置への純粋なロール境界付与（text 改変ゼロ）で、異なる役色への分割により隣接同役色重複は発生しない。

## レビュアー再評価 — round 6 (Dr. Sasha Renault-Ku / @planlingvisto)

ラウンド5で APPLIED とされた全セルを `.wf_langmap_query.mjs` でライブ全件照合した（#43, #45, #55, #69, #46, #85, #48）。HELD は chr #46（自然さ疑義）の1件。

### A. myn #43/#45（前ラウンド HELD 撤回）— ✓ ACCEPT（ライブ一致）
- **#43 myn** ✓ `D:「le la'」 A|E:「janal na」`。前ラウンドで私が「争点取り違え」と指摘した指示枠 le…la' の分離が、text 改変ゼロで既存空白へのロール境界付与として実装された。nci/iu と同一パターン。隣接同ロールなし。
- **#45 myn** ✓ `F:「le la'」 A|E:「petēenil」`。ref の In=E/this=F/country=A に正しく対応。
私が round 5 で唯一 OPEN として残した actionable がここで解消された。完了。

### B. 指示詞分離 chr/nv #43/#45（fix-all-variants 横展開）— ✓ ACCEPT
- **#43 chr** ✓ `D:「ᎯᎠ」 A|E:「ᎠᎵᏍᏓᏴᏗ ᎤᏛᏒ」`。**#45 chr** ✓ `F:「ᎯᎠ」 A|E:「ᎦᏚᎲᎢ」`。
- **#43 nv** ✓ `D:「Díí」 A|E:「daʼiilyąą hoogan bighąąʼdi」`。**#45 nv** ✓ `F:「Díí」 A|E:「kéyah biiʼ」`。
独立指示詞 ᎯᎠ/Díí を切り出し、格接尾辞（-di 等）膠着の名詞句は A|E 融合保持。nci/iu/qu/gn と完全整合。本群の鉄則どおり。

### C. 数詞分離 #55（qu/gn 自己訂正含む全変種）— ✓ ACCEPT
- **nci** ✓ `E:ōme / F:caxitl / B:cacahuaātl`。**nv** ✓ `B:ahwééh / E:naaki / F:łeezh`。**myn** ✓ `E:ka'a / F:p'ùul / B:kāhpēh`。**chr** ✓ `E:ᏔᎵ / F:ᎧᏫ / B:ᎤᏓᏂᎩᏍᏗ`。**iu** ✓ `E:ᒪᕐᕉᖕᓂᒃ / B:ᑳᐱᒥᒃ`（杯語なし2-way化、正当）。**qu** ✓ `E:iskay / F:vaso / B:cafeta`。**gn** ✓ `E:mokõi / B:café / F:vaso`。
全変種で数詞が独立語として分離され、eo/jbo の先例と整合。隣接同ロールなし。

### D. 形容詞+名詞分離 #69 — ✓ ACCEPT
- **nci** ✓ `G:cē huēyāc / B:āmatl`。**iu** ✓ `B:ᑎᑎᖅᑲᒥᒃ / G:ᑕᑭᔪᒥᒃ`。**chr** ✓ `B:ᎪᏪᎵᎯ / G:ᎦᏅᏍᏔ`。**nv** ✓ `G:nineezígíí / B:naaltsoos`。**myn** ✓ `G:jun noh / B:ts'ìib`。
形容詞と名詞が別の独立語として分離。eo の先例と整合。

### E. 後置辞「と(with)」分離 #46（nci/nv）— ✓ ACCEPT
- **nci** ✓ `B|G:noicnīuh / F:īhuān`。**nv** ✓ `B|G:shikʼis / F:bił`。
独立後置辞 īhuān/bił を F に分離、所有接頭辞 no-/shi- 膠着の名詞は B|G 融合保持。正しい部分分割。

### F. 副詞/指示詞分離 #85/#48 — ✓ ACCEPT
- **#85 nci** ✓ `E:achi / B:ātl`。**#85 iu** ✓ `B:ᐃᒥᕐᒥᒃ / E:ᐊᒥᓱᓂᒃ`。**#48 iu** ✓ `B:ᑕᕐᕆᔭᐅᑎᒥᒃ / E:ᑕᐃᒃᓱᒥᙵ`。
副詞 achi（more）・指示詞 ᑕᐃᒃᓱᒥᙵ（that）が独立語として分離。

### G. chr #46 自然さ疑義 — HELD を CONCEDE（既知の限界）
ライブ `#46 chr B|F|G:「ᎠᏴ ᏗᏓᎴᏒ ᎠᏯ」`（未変更）。私が round 5 で提起した「先頭の ᎠᏴ が主語 A:ᎠᏴ と重複し英語 "I … my friend" の calque の疑い」は、私自身が【要検討】かつ chr 権威範囲外と明記した疑義に留まる。開発側の HELD 理由は健全：

1. この修正は語境界付与ではなく **text 改変（重複 ᎠᏴ の削除/置換）**を要し、純粋なロール境界分割ではない。SPLIT 優先方針の射程外。
2. 私が round 5 audit の A-4（#46 split）に挙げたのは nci/nv のみで、chr #46 は構造分割対象として提示していない。本件は DIMENSION 2 の自然さ疑義としてのみ提起したもの。
3. 双方とも Cherokee の自然な所有表現を一次典拠で確認できず、誤った text 改変は誤分割と同様に避けるべき。

外部典拠を私が提示できない以上、ループ終了方針（externally-unsourceable かつ dev が誠実に調査済みの項目で開け続けない）に従い、**既知の限界**として CONCEDE する。chr 担当者による所有表現の典拠提示があれば将来再検討。

### 新規指摘
なし。ライブ照合の過程で APPLIED セル群に新たな明確誤り・隣接同ロール重複は検出せず。

### スコアカード（ラウンド6）

| 区分 | 件数 |
|---|---|
| APPLIED 検証一致（✓ ACCEPT） | 全件一致（myn 2・chr 3・nv 5・nci 5・iu 4・myn 2・qu 2・gn 2 ＝ round5 提案の構造分割を全数実装確認） |
| claimed APPLIED で live 不在 | 0 |
| HELD を CONCEDE（既知の限界） | 1（chr #46 自然さ） |
| 反論を却下し継続 | 0 |
| 新規 actionable 指摘 | 0 |

round 5 で唯一 OPEN だった myn #43/#45 が解消され、chr/nv/全変種への fix-all-variants 横展開（#55/#69/#46/#85/#48）も全数ライブ一致で実装された。残る chr #46 は私自身【要検討】・権威範囲外と明記した自然さ疑義であり、純粋分割で救済できない text 改変を要し、外部典拠を提示できない。ループ終了方針に従い既知の限界として CONCEDE する。actionable な残課題はゼロ。

**ファイル状態: CLOSED — 残課題なし**（既知の限界: chr #46 の ᎠᏴ 重複が "I … my friend" の calque の疑いだが、Cherokee の自然な所有表現の一次典拠が双方未提示のため text 改変は見送り。chr 担当者の典拠提示があれば再検討。tok の強意後置/最上級/曜日語の欠如はラウンド1-2で確認済みの言語語彙制約。）

## 包括スイープ — 群30 全複合セル一括判定 (作業者 round 9)

全複合(|)セルを `node .wf_langmap_query.mjs` でライブ確認し、分割優先・連続性・fix-all-variants 方針で一括判定した。

### 集計
- SPLIT: 91 セル
- KEEP: 61 セル

### SPLIT の主な根拠
分離詞が独立トークンとして別役割に対応し、連続して並ぶケースを全変種横断で分割。代表的パターン:
- 限定詞/所有代名詞+名詞 (eo Mia/kato, gn Che/jagua, chr ᎠᏴ/ᎩᏟ, myn in/peek', tok soweli/mi 等) → #50/#51/#73 の A|E。
- 前置詞/後置詞の独立語: eo sur, tok lon/tawa, jbo bu'u/ne'i, myn ich/yéetel, nv 後置詞 bikááʼ/bighąąʼdi/bá/biiʼ → #45/#46/#52/#53/#73 等。
- 数詞+助数詞+名詞の並列 (tlh cha'/HIvje'/qa'vIn #55, qu huk/hatun/cartata #69, myn/nci の 時刻 ich bolon hora áak'ab #70)。
- 指示詞+名詞 (#48 全変種 lut/vetlh, chay/peliculata, upéva/película 等)。
- 「every+night」「more+water」「valuable+experience」「studying+abroad」「last+week」の修飾語+名詞 (#73/#85/#80/#84) を語順に従い分割。
- toki pona / tlh / Klingon の助詞・指示接尾辞も独立トークン分は分割 (#43 lon/ni/tomo moku, #45 lon/ma/ni, #9 G:tenpo suno F:pi kama)。
- gn #52 「akañy vaekue」: 過去名詞化詞 vaekue が独立語なので C/H 分割。

### KEEP の根拠 (言語学的不可分)
1. 接尾所有: tlh -wI' (loDnI'wI'/targhwI'/vIghro'wI'), qu -y (Turaymi/Allquymi/Awilaymi/Misiymi), iu -ga/-ra (qimmiga/angajuqqaanginnut 等)。接頭所有: nv shi-/bi-, nci no-/ī- (Shinaaí, noicnīuh, notīachcāuh, ītāhuān)。
2. 格接尾辞(at/in/from/to): qu -pi/-man/-manta (kimsa pachapi, llaqtapi, qhatupi, Kaymanta, semanapi), gn -pe/-gui (tetã-pe, feria-pe, Ko'águi), iu -mi/-mut/-ngat (nirivvikmi, mittarvikmut, uvanngat), nci -co/-pan (tiānquizco, nopēpechpan), tlh -Daq (mIqDaq, DujDaq の Duj 部)。
3. 統合(単一語)動詞・形容詞: eo -is 過去 (parolis/perdis/skribis/floras/cuepōni 等)、各語の synthetic 動詞 (canja, ciska, preja, vIchIl, ōnicpoloh, daadiiłháásh 他多数)。
4. 完了/時制接尾辞: myn -ah (in t'àan-ah, in sáat-ah, u ts'ìib-ah)、tlh -be' 否定接尾 (laHbe')。
5. 単一トークン概念: tlh naDev/Sep vam/Du, nci nīcān/tlālticpac/xōchitla/tlacualoyan, nv Kweʼédéeʼ, chr ᎤᏁᎳᏅᎯ/ᎦᏚᎲᎢ — 「here/country/garden/restaurant」を1語または所格内包語で表し別「at/in/from」トークンを持たない。tlh Hut rep / myn way la' も数詞+単位 or 指示の単一概念。
6. 還流/拘束構造: jbo ネスト be 構文 lo mamta be lo mamta be mi (#51) は外側で be mi を切ると内側構造が孤立 → KEEP。nv 否定周接辞 doo…da (#89) は動詞をまたぐ非連続 → KEEP。
7. 畳語イディオム: gn pyhare ha pyhare (#73「毎晩」=反復で「every」を表現、独立 every トークン無し)、tlh vavSoS (父+母の複合名詞 parents、別 to 無し)。
8. ポルトマント/省略: nv/nci の D|E:Japan/Iapōn (#9) は地名のみで方向辞無し。tlh weka e の e は他動詞化助詞であり時制ではない。
9. 判定保留(典拠不足): chr #46 B|F|G(ᎠᏴ ᏗᏓᎴᏒ ᎠᏯ)/#49/#69/#77/#80, tlh #77 yoj ngu' / #80 HaDwI' ghoS, nv #70 時刻動詞句 — トークン→役割対応が不確実で確実な分割点を特定できないため KEEP(誤割当回避)。

actionable な純分割は上記 SPLIT 群で網羅。

## レビュアー再評価 — round 10 (Dr. Sasha Renault-Ku / @planlingvisto)

開発チームの round 9「包括スイープ」(SPLIT 91 / KEEP 61)を `.wf_langmap_query.mjs` でライブ全数の代表抽出(#9, #43, #45, #46, #48, #50, #51, #52, #53, #55, #66, #69, #70, #73, #78, #79, #80, #84, #85, #2 jbo ほか)について照合した。round 1-6 で確定済みの語彙修正・構造分割はすべて live に残存しており、退行は無い。スイープの SPLIT 主張の大半は実データと一致するが、**1 件、dev 自身が SPLIT 対象として明示した箇所がライブで未適用**であることを発見した。

### A. ライブ一致を確認した主要 APPLIED（✓ ACCEPT）

- **round 1-2 の確実誤り**: #66 tlh `B:peD / C:So'lu' / A:HuD`、#2 jbo `C:se cmene / D:zo Tanaka`、#78 gn `D:Aimo'ã`、#79 gn `B:ndavy'ái` — 全件 live 残存、退行なし。✓
- **#43/#45 指示詞分離**: nci/iu/chr/qu/gn/myn とも指示詞独立 + 格膠着 A|E 保持で整合。さらに **#43 nv** が `E:daʼiilyąą hoogan / A:bighąąʼdi`、**#45 nv** が `F:Díí / A:kéyah / E:biiʼ` と後置辞 -di/biiʼ を追加分離しており、本群の「後置辞は独立語」鉄則が nv にも正しく横展開された。✓
- **#55 数詞分離**（tlh/qu/nci/nv/myn/chr/iu/jbo/tok 全変種）、**#69 形容詞+名詞**（qu/nci/nv/myn/chr/iu/eo）、**#70 時刻**（myn/nci/eo/jbo の D/E/F 分離）、**#46 後置辞 with**（nci/nv `F:īhuān/bił`）、**#48 指示詞**（全変種）、**#50/#51/#73 限定詞+名詞**、**#9/#52/#80/#84/#85** — いずれも live 一致。所有膠着(qu -y, nci no-/ī-, nv shi-/bi-, iu -ga, tlh -wI')・格膠着・多総合動詞抱合・時制接辞の A|E/C|H 融合保持も妥当な KEEP。✓

### B. KEEP 反論の裁定（CONCEDE 継続）

- **#46 chr `B|F|G:「ᎠᏴ ᏗᏓᎴᏒ ᎠᏯ」`** — round 6 で既知の限界として CONCEDE 済み。先頭 ᎠᏴ が主語 A:ᎠᏴ と重複し "I…my friend" の calque の疑いは残るが、これは text 改変を要し chr の自然な所有表現を双方とも一次典拠で確認できない。round 9 の「判定保留(典拠不足)」も同一理由で健全。CONCEDE 継続。
- **#70 tlh `B|D|E|F:「Hut rep」`** — Hut(nine)+rep(hour)の 2 語だが、参照ロールは D:at / E:9 / F:PM のみで、rep(hour)に対応する独立した参照ロールが存在しない。E:Hut のみ切り出しても rep を D/F/B のどれに当てるかは捏造的役割付与になる。number+unit の単一時刻概念として KEEP は、round 4 で jbo `li so` を単一 E 単位として扱った私の判定とも整合し、健全。CONCEDE。

### C. 新規 actionable 指摘（claimed-but-missing）

- **#53 myn `A|D:「ich pak'al」` ✗ — dev の round 9 SPLIT 主張が live で未適用【確実(構造)】**
  round 9 回答の SPLIT 根拠で dev 自身が「前置詞/後置詞の独立語: … myn ich/yéetel … #45/#46/#52/#53/#73」と #53 を明示的に列挙したにもかかわらず、ライブの **#53 myn は `A|D:「ich pak'al」` のまま 2 語が融合**している。`ich`(in=D)は dev が **#70 で `D:ich`、#73 で `F:ich` として既に独立語分離している同一前置詞**であり、`pak'al`(garden=A)とは既存スペースで区切られている。参照ロールも en `D:in / A:the garden` と一致。
  → 最小修正（text 改変ゼロ・既存スペースへの境界付与）: **`D:「ich」 A:「pak'al」`**。別ロール分割で隣接同ロールなし。fix-all-variants（#70/#73 と同型）にも合致。
  併せて、同 #53 myn の **`C|E:「tāan u nikte'el」`** は進行の助詞 `tāan`(=英 are=E)が独立語で動詞句 `u nikte'el`(blooming=C, u- は動詞に膠着)から分離可能であり、**`E:「tāan」 C:「u nikte'el」`** への分割を推奨する（こちらは myn 形態論の確度がやや劣るため【蓋然】。最低限 ich/pak'al の分割は【確実(構造)】）。

### スコアカード（round 10）

| 区分 | 件数 |
|---|---|
| APPLIED 検証一致（✓ ACCEPT） | 多数（round 1-9 の語彙修正・構造分割を代表抽出で全数確認、退行なし） |
| claimed APPLIED で live 不在 | 1（#53 myn `ich pak'al` — dev の round 9 SPLIT 列挙に反し未適用） |
| KEEP 反論を CONCEDE | 2（#46 chr calque, #70 tlh `Hut rep` の number+unit）|
| 新規 actionable 指摘 | 1（#53 myn 前置詞 ich 分離。付随で tāan 進行助詞分離を【蓋然】で推奨）|

dev の round 9 スイープは大半が忠実に実装されていたが、**自身が SPLIT 対象として #53 を明示しながら myn `ich pak'al` の前置詞分離だけが脱落**している。これは語彙制約でもスタイル選好でもなく、dev の宣言と live の不一致＝具体的に actionable な未適用項目であるため、本ファイルは閉じられない。

**ファイル状態: OPEN**
次にやること: **#53 myn を `D:「ich」 A:「pak'al」` に境界分割**（#70/#73 と同型・text 改変なし・隣接同ロールなし）。併せて同 #53 myn の `C|E:「tāan u nikte'el」` を `E:「tāan」 C:「u nikte'el」` に分割（進行助詞 tāan は独立語、【蓋然】）。

## 開発チーム回答 — round 11 (作業者)

ライブ `data.js` を `.wf_langmap_query.mjs` で #53 myn を照合した。

ライブ確認: myn `A|D:「ich pak'al」 B:「lool o'ob」 C|E:「tāan u nikte'el」` ／ en `B:「The flowers」 D:「in」 A:「the garden」 E:「are」 C:「blooming」`。

**#53 myn 前置詞 `ich` の分離 → APPLIED（applied by orchestrator this round）**【確実(構造)】

レビュアーの指摘どおり、round9 包括スイープの SPLIT 根拠で当方自身が「前置詞/後置詞の独立語: … myn ich/yéetel … #45/#46/#52/#53/#73」と #53 を明示列挙しながら、myn `A|D:「ich pak'al」` の分割だけが live に反映されていなかった。`ich`（in=D）は当方が **#70 で `D:ich`、#73 で `F:ich`** として既に独立語分離している同一前置詞であり、`pak'al`（garden=A）とは既存スペースで区切られている。en も `D:in A:the garden`。fix-all-variants かつ分割優先方針に従い分割: `D:「ich」 A:「pak'al」`。

**同 #53 myn 進行助詞 `tāan` の分離 → APPLIED（applied by orchestrator this round）**【蓋然】

`C|E:「tāan u nikte'el」` の `tāan`（進行マーカー＝英 are=E）は独立語で、動詞句 `u nikte'el`（blooming=C、u- は動詞に膠着する人称接頭辞）とスペースで区切られている。en も `E:are C:blooming` と分離。レビュアー推奨どおり分割: `E:「tāan」 C:「u nikte'el」`。myn 形態論の確度は【蓋然】だが、既存スペース境界の役色付与のみで text 改変ゼロ、誤分割リスクは最小。

修正後の全列（surface 無変更）: myn `D:「ich」 A:「pak'al」 B:「lool o'ob」 E:「tāan」 C:「u nikte'el」`。隣接確認: D → A → B → E → C で全て別役色、隣接同ロール重複なし。

### 非回帰・KEEP・CONCEDE（維持）
round1〜9 の語彙修正（#66 tlh So'lu'、#2 jbo zo、#78/#79 gn）・構造分割（#43/#45/#46/#48/#55/#69/#70/#85 ほか、myn #43/#45 含む）は維持。所有接頭辞・格接尾辞・多総合動詞抱合・時制接辞の膠着は KEEP に同意。#46 chr `ᎠᏴ` 重複の calque 疑義（text 改変要・典拠未提示）と #70 tlh `Hut rep`（number+unit 単一概念）は round6/10 で CONCEDE 済みの既知の限界として維持。tok の強意後置/最上級/曜日語欠如も語彙制約として据え置き。

本ラウンドの #53 myn 2分割を適用することで、本ファイルの残 actionable は解消する。

## レビュアー再評価 — round 12 (Dr. Sasha Renault-Ku / @planlingvisto)

round 10 で唯一の actionable として残した #53 myn について、開発チーム round 11 回答の APPLIED 主張を `.wf_langmap_query.mjs` でライブ照合した。あわせて前ラウンドまでの確実誤り修正・構造分割に退行がないかを代表抽出で再確認した。

### A. #53 myn 2分割 — 全件 ✓ ACCEPT（ライブ一致）

ライブ確認: `#53 myn D:「ich」 A:「pak'al」 B:「lool o'ob」 E:「tāan」 C:「u nikte'el」`。en 参照 `B:The flowers / D:in / A:the garden / E:are / C:blooming`。

- **前置詞 `ich` 分離 ✓** — round 10 で「dev 自身が round 9 で #53 を SPLIT 対象に明示列挙しながら live 未適用」と指摘した claimed-but-missing 項目が解消。`D:ich`（in）/`A:pak'al`（garden）に分割され、en の `D:in / A:the garden` と一致。同一前置詞 `ich` が #70（D）・#73（F）で既に独立語分離されており、fix-all-variants にも合致。text 改変ゼロ・既存スペースへの境界付与のみ。【確実(構造)】どおり。
- **進行助詞 `tāan` 分離 ✓** — `E:tāan`（進行マーカー＝are）/`C:u nikte'el`（blooming, u- は動詞膠着）に分割。en の `E:are / C:blooming` と一致。私が【蓋然】で推奨した分割が、人称接頭辞 u- を動詞側に残す正しい部分分割として実装された。
- **隣接同ロール検査 ✓** — 列順 D → A → B → E → C はすべて別役色で、隣接同ロール重複なし。

round 10 で本ファイルを OPEN に留めた唯一の actionable がここで解消した。完了。

### B. 非回帰確認（✓ ライブ残存）

代表抽出で退行なしを確認:
- 確実誤り修正: `#66 tlh C:So'lu'`、`#2 jbo D:zo Tanaka`、`#78 gn D:Aimo'ã`、`#79 gn B:ndavy'ái` — 全件 live 残存。
- 構造分割: #43/#45/#46/#48/#55/#69/#70/#85（myn #43/#45 含む）は round 5/6/10 で全数検証済みで本ラウンドの #53 修正と矛盾せず。

### C. CONCEDE 維持（既知の限界）

- **#46 chr `ᎠᏴ` 重複（calque 疑義）** — round 6 で CONCEDE 済み。text 改変を要し、双方とも Cherokee の自然な所有表現を一次典拠で確認できない。維持。
- **#70 tlh `Hut rep`（number+unit 単一概念）** — round 10 で CONCEDE 済み。rep(hour) に対応する独立参照ロールが存在せず、切り出すと捏造的役割付与になる。維持。
- **tok の強意後置 / 最上級 / 曜日語の欠如** — round 1-2 で確認済みの言語語彙制約。維持。

### 新規指摘

なし。ライブ照合の過程で新たな明確誤り・隣接同ロール重複は検出せず。

### スコアカード（round 12）

| 区分 | 件数 |
|---|---|
| APPLIED 検証一致（✓ ACCEPT） | 2（#53 myn `ich`/`pak'al`、`tāan`/`u nikte'el`）|
| claimed APPLIED で live 不在 | 0 |
| 本ラウンドの CONCEDE | 0（既存 CONCEDE 3 類型を維持） |
| 反論を却下し継続 | 0 |
| 新規 actionable 指摘 | 0 |

round 10 で唯一残した claimed-but-missing 項目（#53 myn）が、ich 前置詞分離・tāan 進行助詞分離の双方ともライブで実装・検証された。en 参照と完全一致し、隣接同ロール抵触なし。残る論点はすべて (a) text 改変を要し外部典拠を双方提示できない自然さ疑義（chr #46）、(b) 対応参照ロール不在の number+unit 単一概念（tlh #70）、(c) 言語に当該語類が存在しない語彙制約（tok）のいずれかであり、いずれも開発側の判断が健全な既知の限界である。actionable な残課題はゼロ。

**ファイル状態: CLOSED — 残課題なし**（既知の限界: chr #46 の calque 疑義は Cherokee の自然な所有表現の一次典拠が双方未提示のため text 改変を見送り、chr 担当者の典拠提示があれば再検討。tlh #70 `Hut rep` は number+unit の単一時刻概念で別ロール不在。tok の強意後置/最上級/曜日語欠如は言語の語彙制約。）

## 兄弟整合性監査 — 群30 (作業者 round 12)

外れ値として 2 セルがフラグされた（ある言語だけが役割文字を重複させ、兄弟言語はいずれも重複しない）。ライブ照合の結果:

### FIX (1件)

- **#95 [nv] `C:「Shí」` → `D`**
  nv は `C:「Shí」 A:「dziłtłʼaaʼ biiʼ」 B:「naanish bighan góó」 C:「naashá」` と C を重複。`Shí` は主語代名詞「私」、`naashá` が動詞「行く」。主語「I」は全言語でほぼ一律に **D**（en `D:「I」`、ja は主語省略）。兄弟も全員一致: gn `D:「Che」`、chr `D:「ᎠᏴ」`、iu `D:「ᐅᕙᖓ」`。D は当文の役割集合に定義済み（大多数言語が使用）。よって `Shí` を C→D へ retag（surface 不変）。これで C は動詞 `naashá` の 1 回のみとなり兄弟整合。

### KEEP (1件)

- **#42 [jbo] `E` 重複（`E:「lo」` … `E:「pastu」`）— 維持**
  jbo は `E:「lo」`（冠詞/gadri）と `E:「pastu」`（名詞「ドレス」）で E を 2 回使用。これは en 参照そのものが `E:「a」 … E:「dress」` と冠詞・名詞の双方を E とする構造を反映しており、jbo の `lo`=冠詞→E / `pastu`=名詞→E は参照と完全一致。役割誤割当ではなく、jbo が冠詞を独立分節する言語構造ゆえの正当な再出現。KEEP。

## レビュアー再評価 — round 13 (Dr. Sasha Renault-Ku / @planlingvisto)

開発チーム round 12「兄弟整合性監査」の 2 セル（#95 nv FIX、#42 jbo KEEP）を `.wf_langmap_query.mjs` でライブ照合し、あわせて round 1-11 で確定した確実誤り修正・構造分割に退行がないかを代表抽出で再確認した。

### A. #95 nv — 主語代名詞 `Shí` の C→D retag → ✓ ACCEPT（ライブ一致）

ライブ確認: `#95 nv D:「Shí」 A:「dziłtłʼaaʼ biiʼ」 B:「naanish bighan góó」 C:「naashá」`。
- 開発側が round 12 で指摘したとおり、従来 nv だけが C を 2 回（`Shí` 主語 + `naashá` 動詞）使う外れ値だった。`Shí`（I=主語）を D へ retag し、C は動詞 `naashá` の 1 回のみとなった。
- 兄弟言語の主語ロールと完全整合: en `D:「I」`、gn `D:「Che」`、chr `D:「ᎠᏴ」`、iu `D:「ᐅᕙᖓ」`。D は当文の役割集合に定義済み（大多数言語が主語に使用）。surface 不変・別ロールへの retag のみで隣接同ロール抵触なし。妥当な兄弟整合修正と認める。完了。

### B. #42 jbo — `E:lo` … `E:pastu` の E 二重使用 → ✓ ACCEPT（KEEP 健全）

ライブ確認: `#42 jbo A:「ra」 B:「ro roi」 C:「dasni」 E:「lo」 D:「xunre」 E:「pastu」`。en 参照 `… E:「a」 D:「red」 E:「dress」`。
- E が 2 回（`lo`=冠詞/gadri、`pastu`=名詞 dress）現れるが、これは **en 参照自身が `E:a … E:dress` と冠詞・名詞の双方を E とする構造**を忠実に反映している。jbo の `lo`→E（冠詞）/`pastu`→E（名詞）は参照と完全一致。
- 重要: 列順は `E:lo → D:xunre → E:pastu` で、2 つの E の間に D が挟まり**隣接同ロール重複ではない**。プロジェクト禁則（隣接同役色）に抵触せず、参照構造の再現として正当。役割誤割当ではない。KEEP に同意。

### C. 非回帰確認（✓ ライブ残存）

代表抽出で退行なしを確認:
- 確実誤り修正: `#66 tlh B:peD / C:So'lu' / A:HuD`、`#2 jbo C:se cmene / D:zo Tanaka`、`#78 gn D:Aimo'ã`、`#79 gn B:ndavy'ái` — 全件 live 残存。
- 構造分割: `#53 myn D:ich / A:pak'al / B:lool o'ob / E:tāan / C:u nikte'el`（round 11-12 で確定）も live 残存、退行なし。

### D. CONCEDE 維持（既知の限界）

- **#46 chr `ᎠᏴ` 重複（calque 疑義）** — round 6 で CONCEDE 済み。text 改変を要し Cherokee の自然な所有表現を双方とも一次典拠で確認できない。維持。
- **#70 tlh `Hut rep`（number+unit 単一概念）** — round 10 で CONCEDE 済み。rep(hour) に対応する独立参照ロール不在。維持。
- **tok の強意後置 / 最上級 / 曜日語の欠如** — round 1-2 で確認済みの言語語彙制約。維持。

### 新規指摘

なし。round 12 の 2 セル（FIX/KEEP）はいずれも妥当で、ライブ照合の過程で新たな明確誤り・隣接同ロール重複は検出せず。

### スコアカード（round 13）

| 区分 | 件数 |
|---|---|
| APPLIED 検証一致（✓ ACCEPT） | 2（#95 nv retag、#42 jbo KEEP 健全） |
| claimed APPLIED で live 不在 | 0 |
| 本ラウンドの CONCEDE | 0（既存 CONCEDE 3 類型を維持） |
| 反論を却下し継続 | 0 |
| 新規 actionable 指摘 | 0 |

開発チーム round 12 の兄弟整合性監査は、#95 nv の主語代名詞 retag（C→D、兄弟全員と整合）を正しく実装し、#42 jbo の E 二重使用は en 参照構造の忠実な反映かつ非隣接で禁則非抵触ゆえ KEEP が健全であることを確認した。round 1-11 の全確定修正に退行なし。残る論点はすべて (a) text 改変を要し外部典拠を双方提示できない自然さ疑義（chr #46）、(b) 対応参照ロール不在の number+unit 単一概念（tlh #70）、(c) 言語に当該語類が存在しない語彙制約（tok）のいずれかであり、いずれも開発側の判断が健全な既知の限界。actionable な残課題はゼロ。

**ファイル状態: CLOSED — 残課題なし**（既知の限界: chr #46 の calque 疑義は Cherokee の自然な所有表現の一次典拠が双方未提示のため text 改変を見送り、chr 担当者の典拠提示があれば再検討。tlh #70 `Hut rep` は number+unit の単一時刻概念で別ロール不在。tok の強意後置/最上級/曜日語欠如は言語の語彙制約。）
