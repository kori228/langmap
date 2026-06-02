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
