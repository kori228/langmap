# LangMap データレビュー #13 — West-Germanic — continental

## レビュアー自己紹介 (ペルソナ)

私は **Dr. Wiebke Tjarks-Vandenberghe**（ハンドル: @niederrhein_phil）、フローニンゲン大学およびハンブルク大学で西ゲルマン諸語の比較統語論を専攻した言語学者です。標準ドイツ語については *Duden – Die Grammatik* (9. Aufl.) と *Helbig/Buscha: Deutsche Grammatik* を、オランダ語については *Algemene Nederlandse Spraakkunst (ANS)* と Van Dale を、低地ドイツ語については Sass の *Plattdeutsche Grammatik* と SASS-Wörterbuch を、フリジア語については *Tiersma: Frisian Reference Grammar* と Frysk Wurdboek を、アフリカーンス語については *Donaldson: A Grammar of Afrikaans* を主要な典拠としています。方言（オーストリア・バイエルン・スイスドイツ語）は Variantenwörterbuch des Deutschen と Schweizerisches Idiotikon に依拠して判定しました。とりわけ私が最も権威を持つのは **nl / nds / fy** の三言語と、ドイツ語の動詞末（V2 / Satzklammer）構造の整合性チェックです。本レビューでは「文末枠（Satzklammer）に置かれるべき本動詞・分離前綴り・過去分詞」が正しく最終位置に分節化されているか、を最重視しました。

## 検証範囲

- 全100文 × 8言語（de, de_at, de_by, de_gsw, nds, nl, af, fy）を通読。
- 特に、完了形・分離動詞・話法動詞による Satzklammer（動詞枠）構造（#1, #11, #16, #29, #47, #56, #65, #69, #72, #90 など）と、方言行の語彙的弁別性（#33, #59, #74 など）を重点的に検証。
- 疑わしいセルは `node .wf_langmap_query.mjs` で実データと照合済み（#33, #37, #60, #58, #64, #80, #84, #88, #99）。

## 指摘事項 (Issues found)

### 1. #33 [de] — 「部屋」の名詞句が壊れている 【確実】
**Current:** `E:「Das Zimmer」 A:「Hotel」 B:「war」 C:「sehr」 D:「sauber」`
**Problem:** 他の全変種（de_at「Des Zimmer / im Hotel」、de_gsw「S Hotelzimmer」、nl「De hotelkamer」、fr「La chambre / d'hôtel」）は「ホテルの＋部屋」を属格・複合語・前置詞句で表すが、de だけ `A:「Hotel」` が裸で宙に浮いており、ドイツ語として非文。「Das Zimmer ... Hotel ... war sauber」という語順・形態は成立しない。元来は複合語 *Hotelzimmer* か属格 *Zimmer des Hotels* であるべき。
**Proposed fix:** de_gsw に倣い複合語化が最も自然: `A:「Das Hotel」 E:「zimmer」 B:「war」 C:「sehr」 D:「sauber」`（A=ホテル, E=部屋）。または属格分割で `E:「Das Zimmer」 A:「des Hotels」 B:「war」 C:「sehr」 D:「sauber」`。

### 2. #88 [nl] — 動詞の綴り誤り（過去分詞形になっている）【確実】
**Current:** `A:「AI」 C:「veranderd」 B:「de wereld」`
**Problem:** 「変えつつある（現在的）」の主動詞は直説法現在3人称単数 *verandert* であるべき。`veranderd` は過去分詞（-d）で、ここでは非文。他の全ゲルマン変種は現在形（de「verändert」, af「verander」, fy「feroaret」）。オランダ語の悪名高い *d/dt* スペリング誤りそのもの。
**Proposed fix:** `A:「AI」 C:「verandert」 B:「de wereld」`

### 3. #16 [nl] — 存在しない分離形 *begint … aan* 【確実】
**Current:** `A:「Wanneer」 C:「begint」 B:「de film」 C:「aan」`
**Problem:** オランダ語の「（映画が）始まる」は *beginnen*（分離前綴りなし）。`begint ... aan` という分離形は存在しない（*aanvangen* なら *vangt ... aan* だが *beginnen* に *aan* は付かない）。ドイツ語 *anfangen* (`fängt ... an`) を機械的に写した calque で、C 役の二分割（begint / aan）自体が誤り。
**Proposed fix:** `A:「Wanneer」 C:「begint」 B:「de film」`（aan を削除、C は一つ）。

### 4. #64 [fy] — フリジア語動詞の綴り誤り 【蓋然】
**Current:** `A:「Ik」 D:「moat」 B:「myn telefoan」 C:「oplaadze」`
**Problem:** 「充電する」のフリジア語不定詞は *oplade*（語幹 lade）。`oplaadze` は Frysk Wurdboek にない綴りで、おそらく *-ze* 語尾の過剰一般化。標準フリジア語では *oplade*（口語 *opladen* も可）。
**Proposed fix:** `C:「oplade」`

### 5. #99 [af] — 「お土産」の語彙が文脈とずれている 【蓋然】
**Current:** `C:「Hoeveel」 D:「kos」 A:「hierdie」 B:「geskenk」`
**Problem:** *geskenk* は「贈り物・プレゼント」。土産物店で値段を尋ねる「souvenir（記念品＝お土産）」には *aandenking* または *souvenir* が適切。他言語は de「Souvenir」, nl「souvenir」, fy「oantinken（記念品）」を使う。af だけ *geskenk*（gift）で、購入対象としての「土産」とは語義がずれる。
**Proposed fix:** `B:「aandenking」`（または `B:「souvenir」`）。

### 6. #37 [af] — 複合語の不自然なハイフン分割 【蓋然】
**Current:** `A:「Ek」 B:「moet」 C:「'n verjaardag-」 D:「geskenk」 E:「koop」`
**Problem:** アフリカーンス語の「誕生日プレゼント」は一語の複合語 *verjaardaggeskenk*。表示用に `verjaardag-` とハイフンで切って語末ハイフンが宙吊りになっている。de は `C:「ein Geburtstagsgeschenk」` と一括。af の *verjaardaggeskenk* は完全融合語なので分割の正当性が弱い。
**Proposed fix:** `A:「Ek」 B:「moet」 C|D:「'n verjaardaggeskenk」 E:「koop」`。分割を残すなら少なくとも語末ハイフンを除き `C:「'n verjaardag」 D:「geskenk」`。

### 7. #47 [de] — 副詞 *deutlich* の語彙適切性 【蓋然】
**Current:** `A:「Der Lehrer」 D:「erklärte」 B:「das Problem」 C:「deutlich」`
**Problem:** 「わかりやすく説明した」に対し *deutlich*（明瞭に・はっきりと）はやや「明確さ・滑舌」寄り。「理解しやすく」は *verständlich* がより的確で、実際 de_at が `C:「verständlich」` を採用。de だけ *deutlich* で家族内不整合。
**Proposed fix:** `C:「verständlich」` に統一を推奨。

### 8. #56 [nds] — 役ラベルの取り違え（「今夜」が D になっている）【蓋然】
**Current:** `A:「Dat Konzert」 C:「fangt」 D:「hüüt Avend」 B:「üm acht Uhr」 C:「an」`
**Problem:** en は `D:「starts」 B:「at 8 o'clock」 C:「tonight」`、ja は C=今夜・B=8時。よって「今夜(hüüt Avend)」=C, 「8時に(üm acht Uhr)」=B であるべき。他の独語変種も「今夜」を C としている。nds だけ「hüüt Avend」を D とラベルしており、役対応がずれる。
**Proposed fix:** D を C に修正: `A:「Dat Konzert」 C:「fangt」 C:「hüüt Avend」 B:「üm acht Uhr」 C:「an」`（C 連続が問題なら時刻句の配置を再整理）。

### 9. #80 [de_by] — 従属節接続詞 *dass* の欠落と動詞位置 【要検討】
**Current:** `A:「I」 E:「glaab」 B|F:「im Ausland studiern」 D:「is」 I:「a」 G:「wertvolle」 C:「Erfahrung」`
**Problem:** 標準 de は `H:「dass」` を立て従属節動詞を文末に置くが、de_by は H を欠いたまま `D:「is」` が中位に来る中途半端な構造。バイエルン語でも「I glaab, dass im Ausland studiern a wertvolle Erfahrung is」のように *dass* ＋ 文末動詞が自然。
**Proposed fix:** *dass* を補い動詞を末尾へ: `A:「I」 E:「glaab」 H:「dass」 B|F:「im Ausland studiern」 I:「a」 G:「wertvolle」 C:「Erfahrung」 D:「is」`。

### 10. #84 [de] — 完了枠の複合役ラベルの過剰付与 【要検討】
**Current:** `A:「Sie」 B|C:「hat sich」 E:「letzte」 D:「Woche」 B|C:「erkältet」`
**Problem:** *hat sich … erkältet* の Satzklammer 構造自体は妥当だが、助動詞 *hat sich* と過去分詞 *erkältet* の双方に `B|C` を振っており、同一複合役の非隣接重複になっている。en は `C:「caught」 B:「a cold」`。助動詞側と本動詞側でラベルを分けるのが望ましい。
**Proposed fix:** `A:「Sie」 C:「hat sich」 E:「letzte」 D:「Woche」 B:「erkältet」`（C=完了助動詞＋再帰, B=本動詞）。要判断。

### 11. #69 [af] — 過去分詞への役ラベル重複 【要検討】
**Current:** `A:「Hy」 D|E:「het」 B|F|G:「'n lang brief」 C|H:「aan sy ouers」 D:「geskryf」`
**Problem:** 完了枠 *het … geskryf* は正しいが、助動詞側 `D|E:「het」` と本動詞側 `D:「geskryf」` で役 D が重複している。en は単一過去 `D|E:「wrote」`。af は迂言完了なので助動詞と本動詞に分かれるのは妥当だが、両方に D を振ると非隣接重複となり整合性が落ちる。
**Proposed fix:** `A:「Hy」 D:「het」 B|F|G:「'n lang brief」 C|H:「aan sy ouers」 E:「geskryf」`（助動詞=D, 本動詞=E）。要整理。

### 12. #74 [de_gsw] — 方言行の弁別性が薄い 【要検討】
**Current:** `A:「Ich」 C:「warte」 B:「sit 30 Minute」`
**Problem:** de_at/de_by は「30分」を *a halbe Stund*（＝半時間）と自然に言い換えるのに対し、de_gsw は標準語的に *30 Minute* のまま。スイスドイツ語の口語では *e halbi Stund* が圧倒的に自然で、方言行としての famous distinctive feature が出ていない。
**Proposed fix:** `A:「Ich」 C:「warte」 B:「scho e halbi Stund」` 程度が自然。標準語併用も許容されうるため要検討。

## 総評

de/nl/nds/fy/af の大半のセルは語順（V2・Satzklammer・SOV 従属節）と分節が概ね正確で、特に話法動詞＋文末不定詞（#9, #22, #62 など）の枠構造、完了形の助動詞前置＋過去分詞後置（#11, #29, #72）はよく整理されている。最も確実な修正対象は **#33 de（壊れた名詞句）**、**#88 nl（veranderd→verandert）**、**#16 nl（存在しない分離形 begint…aan）** の3点。残りは語彙選択・方言弁別性・複合役ラベルの整理に関する蓋然/要検討事項である。

## 開発チーム回答 — round 1 (作業者)

`.wf_langmap_query.mjs` で全件照合の上で判定。

### 1. #33 de 壊れた名詞句 → APPLIED
現値 E:「Das Zimmer」 A:「Hotel」 B:「war」… を確認。裸の「Hotel」が宙に浮き非文。fr の役割整列(E:chambre, A:d'hôtel)に合わせ属格分割で **E:「Das Zimmer」 A:「des Hotels」 B:「war」 C:「sehr」 D:「sauber」**(replace、適用)。文法的に成立し E→A の役順も維持。

### 2. #88 nl 過去分詞綴り誤り → APPLIED
現値 C:「veranderd」を確認。現在3sg は verandert。**C:「verandert」**(settext、適用)。

### 3. #16 nl 存在しない分離形 begint…aan → APPLIED
現値 C:「begint」 B:「de film」 C:「aan」を確認。beginnen に分離前綴り aan は付かない(独 anfangen の calque)。末尾 **C:「aan」を削除**(remove、適用)。残る C は単一。

### 4. #64 fy 綴り誤り → APPLIED
現値 C:「oplaadze」を確認。標準フリジア語不定詞は oplade(語幹 lade)。**C:「oplade」**(settext、適用)。

### 5. #99 af 「お土産」語彙 → APPLIED
現値 B:「geskenk」(=贈り物)を確認。de「Souvenir」/nl「souvenir」/fy「oantinken」が記念品を指すのに対し geskenk は gift で語義ずれ。**B:「aandenking」**(記念品、settext、適用)。

### 6. #37 af 宙吊りハイフン → APPLIED
現値 C:「'n verjaardag-」 D:「geskenk」を確認。分割自体は SPLIT 方針上維持してよいが、語末ハイフンが非語。**C:「'n verjaardag」**(末尾ハイフン除去、settext、適用)。分割は保持。

### 7. #47 de deutlich vs verständlich → HELD
deutlich は「わかりやすく」の訳として十分自然な独語で誤りではない。家族内で de_at が verständlich を使うのは許容される変異。語彙選択の領域につき不変更。

### 8. #56 nds 役ラベル取り違え → APPLIED(レビュアー案を改良)
現値 A:「Dat Konzert」 C:「fangt」 D:「hüüt Avend」 B:「üm acht Uhr」 C:「an」を確認。en/de では「動詞=D, 今夜=C」。nds は動詞 fangt/an を C、今夜を D と二重に取り違えている。レビュアー案(D→C)だけだと C:fangt と C:hüüt Avend が隣接重複してしまうため、動詞側も D に直す:**A:「Dat Konzert」 D:「fangt」 C:「hüüt Avend」 B:「üm acht Uhr」 D:「an」**(replace、適用)。隣接重複なし、verb=D/tonight=C/time=B が en・de と一致。

### 9. #80 de_by dass 欠落・動詞位置 → APPLIED
現値 …D:「is」が中位、H:「dass」欠落を確認。標準 de に倣い dass を補い動詞を文末へ:**A:「I」 E:「glaab」 H:「dass」 B|F:「im Ausland studiern」 I:「a」 G:「wertvolle」 C:「Erfahrung」 D:「is」**(replace、適用)。

### 10. #84 de 複合役の非隣接重複 → APPLIED
現値 B|C:「hat sich」 … B|C:「erkältet」を確認。同一複合役 B|C の非隣接重複。助動詞=C, 本動詞=B に分離:**A:「Sie」 C:「hat sich」 E:「letzte」 D:「Woche」 B:「erkältet」**(replace、適用)。

### 11. #69 af 役 D の重複 → APPLIED
現値 D|E:「het」 … D:「geskryf」で D が非隣接重複を確認。迂言完了の助動詞=D, 過去分詞=E に分離:**A:「Hy」 D:「het」 B|F|G:「'n lang brief」 C|H:「aan sy ouers」 E:「geskryf」**(replace、適用)。

### 12. #74 de_gsw 方言弁別性 → HELD
現値 B:「sit 30 Minute」を確認。「30 Minute」はスイス独語として誤りではなく、弁別性が弱いという指摘は文体的選好。明白な誤りでないため不変更(「e halbi Stund」案は記録に留める)。

## レビュアー再評価 — round 2 (Dr. Wiebke Tjarks-Vandenberghe)

`.wf_langmap_query.mjs` で全12件の主張を実データと照合した。APPLIED 10件はすべて実データに反映済みであることを確認。HELD 2件の論拠も検討した。

### 1. #33 de 壊れた名詞句 → ✓ 承認
実データ `E:「Das Zimmer」 A:「des Hotels」 B:「war」 C:「sehr」 D:「sauber」` を確認。属格分割で文法的に成立し、E→A の役順も保持。fr の役整列と一致。確実な修正が正しく適用済み。

### 2. #88 nl veranderd→verandert → ✓ 承認
実データ `C:「verandert」` を確認。直説法現在3sg として正しい。d/dt 誤りは解消。

### 3. #16 nl 存在しない分離形 begint…aan → ✓ 承認
実データ `A:「Wanneer」 C:「begint」 B:「de film」` を確認。末尾の偽分離 `C:「aan」` は削除され、C は単一。beginnen に aan は付かないという指摘どおりに修正済み。

### 4. #64 fy oplaadze→oplade → ✓ 承認
実データ `C:「oplade」` を確認。標準フリジア語不定詞として正しい綴り。

### 5. #99 af geskenk→aandenking → ✓ 承認
実データ `B:「aandenking」` を確認。de「Souvenir」/nl「souvenir」/fy「oantinken」と語義（記念品）が整合。土産物の文脈に適合。

### 6. #37 af 宙吊りハイフン → ✓ 承認
実データ `C:「'n verjaardag」 D:「geskenk」` を確認。語末ハイフンは除去済み。分割保持はオーナーの SPLIT 選好方針に合致し、C/D で異役・隣接重複なし。妥当な決着。

### 7. #47 de deutlich vs verständlich → ✓ 承認（譲歩）
deutlich は「わかりやすく説明する」の独語として標準的に成立し、de_at が verständlich を使うのは家族内の許容変異。これは文体的選好の領域であり、開発側の HELD 判断は妥当。当方の指摘を取り下げる。

### 8. #56 nds 役ラベル取り違え → ✓ 承認
実データ `A:「Dat Konzert」 D:「fangt」 C:「hüüt Avend」 B:「üm acht Uhr」 D:「an」` を確認。verb=D / tonight=C / time=B が en・de と一致。分離前綴り fangt…an は両方 D だが非隣接（間に C・B が入る）で重複問題なし。当方の素案を超える正しい改良。

### 9. #80 de_by dass 補充・動詞末尾 → ✓ 承認
実データ `…H:「dass」… C:「Erfahrung」 D:「is」` を確認。dass 従属節で本動詞 is が文末（Satzklammer）に正しく移動。標準 de の構造と整合。

### 10. #84 de 完了枠の複合役分離 → ✓ 承認
実データ `A:「Sie」 C:「hat sich」 E:「letzte」 D:「Woche」 B:「erkältet」` を確認。非隣接 B|C 重複は解消。完了助動詞＋再帰=C、過去分詞=B の分離は妥当。

### 11. #69 af 役 D の重複 → ✓ 承認
実データ `A:「Hy」 D:「het」 B|F|G:「'n lang brief」 C|H:「aan sy ouers」 E:「geskryf」` を確認。迂言完了の助動詞=D / 過去分詞=E に分離され D の非隣接重複は解消。

### 12. #74 de_gsw 方言弁別性 → ✓ 承認（譲歩 / 既知の限界として）
実データ `B:「sit 30 Minute」` を確認。de_at「a halbe Stund」/de_by「a holbe Stund」と並べると弁別性は確かに弱いが、「30 Minute」はスイス独語として誤りではなく、弁別性は文体的選好の領域。明白な誤りではないため開発側の HELD を尊重し、既知の限界（既存の e halbi Stund 案は記録に保持）として取り下げる。

### 新規指摘
今回の照合で新たな明白な誤りは発見されなかった（新規 0件）。

### スコアカード
- 確実3件（#33, #88, #16）：全て修正・実データ確認済み ✓
- 蓋然/要検討で適用された7件（#64, #99, #37, #56, #80, #84, #69）：全て妥当に解決 ✓
- HELD 2件（#47, #74）：開発側の論拠を妥当と認め譲歩 ✓✓
- 承認 12 / 12、譲歩 2、却下 0、新規 0
- 残課題：なし

**ファイル状態: CLOSED — 残課題なし**
