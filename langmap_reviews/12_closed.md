# LangMap データレビュー #12 — English — social/historical varieties & English creoles

## レビュアー自己紹介 (ペルソナ)

私は **Dr. Marlon A. Beckford(ハンドル: @creolemorphsyn)**、西インド諸島大学モナ校で言語学博士号を取得した社会言語学者・クレオール語研究者です。専門はカリブ英語クレオール (jam) と西アフリカのピジン・クレオール (pcm) の形態統語論で、Cassidy & Le Page『Dictionary of Jamaican English』、Bailey『Jamaican Creole Syntax』、および Faraclas『Nigerian Pidgin』(Routledge Descriptive Grammars) を日常的に参照します。AAVE については Green『African American English: A Linguistic Introduction』とDARE (Dictionary of American Regional English)、英語史諸変種 (enm/en_ang/sco) については Bosworth–Toller の古英語辞書・Mitchell & Robinson『A Guide to Old English』・DSL (Dictionary of the Scots Language) を基盤にしています。最も権威をもって判断できるのは **jam・pcm・AAVE** で、古英語の語彙考証も得意分野です。本レビューでは特にクレオール語の繋辞 (copula) 体系・否定法助動詞・TMA マーカーの誤用に注意を払いました。

## 検証範囲

担当8言語 (en_aave, en_app, en_south, enm, en_ang, sco, jam, pcm) について全100文を通読し、`.wf_langmap_query.mjs` で疑わしいセルの現値を逐一確認しました。特に jam の `kyaan`(否定助動詞)が肯定文脈に使われていないか全数チェックし、#10/#30/#68/#81 を実機照会で確定。pcm の繋辞 `na`/`dey`/`be`、AAVE のゼロ繋辞・habitual *be*・remote *been*、古英語の語彙妥当性 (#94 等) を重点検証しました。

## 指摘事項 (Issues found)

### 1. 【確実】#10 jam — 肯定の「can」に否定形 `kyaan` を使用
- **Current:** A:「Yu」 D:「kyaan」 C:「chat」 B:「Inglish」
- **Problem:** `kyaan`(< can't /kjãː/)はジャマイカ・クレオールの**否定**法助動詞「〜できない」であり、肯定の「〜できる」は `kyan`(/kjan/, can)です。原文「Can you speak English?」は肯定の能力疑問文なので、否定形を当てると意味が「英語を話せ**ない**のか?」に反転してしまいます。Cassidy & Le Page も `can` = kyan / `can't` = kyaan と峻別。
- **Proposed fix:** A:「Yu」 D:「kyan」 C:「chat」 B:「Inglish」

### 2. 【確実】#30 jam — 同上、肯定能力に `kyaan`
- **Current:** A:「Shi」 E:「kyaan」 C:「play」 B:「di piano」 D:「riil gud」
- **Problem:** 原文「She can play the piano very well」は肯定。`kyaan` だと「弾けない」になり矛盾。
- **Proposed fix:** A:「Shi」 E:「kyan」 C:「play」 B:「di piano」 D:「riil gud」

### 3. 【確実】#68 jam — 肯定の許可「Can I」に `kyaan`
- **Current:** D:「Mi kyaan」 C:「sidong」 B:「ya」
- **Problem:** 「Can I sit here?」は許可を求める肯定疑問。`Mi kyaan` は「私は座れない」。肯定形 `Mi kyan` が正しい。なお主語 `Mi` と助動詞を1セルに併合している点も他文(#10 で A と D を分離)と不統一だが、最優先は語彙の誤り。
- **Proposed fix:** D:「Mi kyan」 C:「sidong」 B:「ya」(統一を図るなら A:「Mi」 D:「kyan」)

### 4. 【確実】#81 jam — セル破損・主語の重複・綴り
- **Current:** A:「Mi」 B:「ed」 D:「a hat」 A:「mi」 C:「tide」
- **Problem:** (a) 役割 A が2回出現し重複(`Mi`…`mi`)。(b) `ed` は「頭 head」を表すなら `hed`、`hat` は「痛む hurt」を表すなら綴りはよいが配列が不自然。(c) 他言語(en: A:I F:have E:a headache C:today)と役割が全く対応しておらず、文全体の整合が崩れている。ジャマイカ・クレオールの自然な言い方は「Mi hed a hat mi tide」(私の頭が今日痛む)で、所有的主語+繋辞的 `a`(progressive/状態)+動詞。
- **Proposed fix:** 他言語の役割枠(A=主語 I、F=have、E=a headache、C=today)に寄せるのが本来だが、クレオールの身体表現は構造が異なるため最低限の修正として B:「Mi hed」 D:「a hat mi」 C:「tide」(主語=頭、述語=痛む、時=今日)。重複 A を必ず解消すること。

### 5. 【確実】#94 en_ang — 「language(語学)」に `Tungol`(=星)を誤用
- **Current:** A:「Tungol」 B:「leornunge」 C:「ontyneþ」 D:「nīwe」 E:「duru」
- **Problem:** `tungol` は古英語で「星・天体 (heavenly body)」を意味し、「言語」ではありません(Bosworth–Toller)。混同は現代英語 *tongue* との類推による誤りと推測されます。「言語」は `sprǣc` または `geþēode` (語族の意では `geþēode`、ことば一般は `sprǣc`)。同文の他変種は語幹「language/leid/tonge」を用いており、ここだけ意味がずれている。
- **Proposed fix:** A:「Geþēode」 B:「leornung」 C:「ontȳneþ」 D:「nīwe」 E:「duru」(あるいは A:「Sprǣc」)。

### 6. 【蓋然】#1 en_app / en_aave / enm — 関係詞節の節境界マーカー欠落
- **Current (en_app):** …D:「a suit」 F:「I」 G:「seen」…(E 役なし)
- **Problem:** 参照の enm は E:「that」、jam は E:「weh」、pcm は E:「wey」と関係詞(または zero-relative)を E 役として明示しているが、en_aave/en_app/en_south/sco は E を欠く。AAVE/Appalachian では zero-relative(接触節)が極めて自然なので「データなし」自体は許容範囲だが、同一文内で関係詞役 E の扱いが変種間で不統一。少なくとも省略であることが意図的か確認が必要。
- **Proposed fix:** 仕様として zero-relative を許すなら現状維持で可。統一する場合は en_app に E:「(that)」相当を置かず、enm 側を zero に合わせるなどポリシーを明文化。要検討事項として残す。

### 7. 【蓋然】#1 en_app — 過去形 `seen` の妥当性
- **Current:** …F:「I」 G:「seen」…
- **Problem:** Appalachian/AAVE で過去形 `seen`(I seen)は実在の有名な非標準特徴であり妥当。ただし同セットの en_south は `saw`(標準)になっており、en_app と en_aave だけが `seen`。これは方言差として正しい設計(Southern は seen も使うが saw も普通)なので**問題なし**と判断。記録のみ。

### 8. 【確実】#36 jam — existential 構文で主辞 `Nuf` を D 役に誤割当・語順
- **Current:** D:「Nuf」 B:「piipl」 C:「a di stieshan」(A 役=数量詞が欠落)
- **Problem:** 原文「There are many people at the station」。jam の自然な存在文は「Nuf piipl de a di stieshan」または繋辞省略で「Nuf piipl a di stieshan」。`Nuf`(< enough = many/plenty)は**数量限定詞**であり、役割としては A(many)に相当する。これを存在動詞 D(There are)に当てるのは誤り。en 参照では D:「There are」 A:「many」 B:「people」。pcm 行は A:「Plenty」と正しく A に置いている。
- **Proposed fix:** A:「Nuf」 B:「piipl」 C:「a di stieshan」(D の存在動詞は jam では省略されるため空。明示するなら D:「de」を C の前に挿入)。

### 9. 【蓋然】#17 jam — 「afternoon」を `evening` に置換
- **Current:** …F:「dis」 G:「evening」
- **Problem:** 原文・他全変種は「this afternoon(午後3時)」。ジャマイカ英語では午後を `evening` と呼ぶ用法が確かに存在する(DJE; 正午過ぎから日没までを evening と言う地域的特徴)ため、これは**意図的な方言特徴**の可能性が高く、誤りとは断定しない。ただし時刻 3時 と `evening` の併置はやや不整合に見えるため、編集意図の確認を推奨。
- **Proposed fix:** 方言特徴として残すなら現状可。標準寄せなら G:「aaftanuun」。

### 10. 【確実】#94 en_aave / jam / pcm — 語順 (B が A に先行) の役割対応
- **Current (en_aave):** B:「Learnin'」 A:「a language」 C:「open up」…
- **Problem:** これは「Learning a language opens…」を動名詞主語として B(learning)+A(language)の順に並べたもので、語順自体は自然。en/sco は A:「Language」B:「learning」の複合名詞順。AAVE/jam/pcm が動名詞句順に組み替えるのは妥当な異分析であり**問題なし**。記録のみ(役割の入れ替わりは語順エンコードとして正しい)。

### 11. 【蓋然】#15 pcm — 「studying abroad」を `read book for abroad` と冗長表現
- **Current:** C:「read book for abroad」 B:「for France」
- **Problem:** ナイジェリア・ピジンで「勉強する」を *read book* と言うのは実在の慣用(I dey read book = I'm studying)で自然。ただし「留学する」全体としては *dey study for abroad* や *dey school for abroad* がより一般的。`read book for abroad` は通じるが、直後に B:「for France」が続くと `for` が二重に並び冗長。意味は通るので方言色として許容範囲。
- **Proposed fix:** 任意。自然度を上げるなら C:「dey study」 F+B 部分を「for abroad, for France」へ。要検討。

### 12. 【蓋然】#1 jam — `did si`(過去)の TMA と関係詞 `weh`
- **Current:** …E:「weh」 F:「mi」 G:「did si」…
- **Problem:** `did` は jam の過去/完了マーカー、`si`(see)で「見た」、`weh`(関係詞)は正しい。全体として自然で**問題なし**。記録のみ。

### 13. 【確実】#36 pcm — existential の役割割当が en と逆転気味
- **Current:** A:「Plenty」 B:「people」 D:「full」 C:「for station」
- **Problem:** pcm「Plenty people full for station」は自然(full = ある・満ちている)。役割は A=Plenty, B=people, D=full(存在述語), C=場所 で en と整合し**問題なし**。記録のみ(jam #8 と対比して pcm が正しく A を使えている証左)。

### 14. 【蓋然】#43 jam — 「is delicious」に `tays gud`(tastes good)
- **Current:** C:「tays gud」
- **Problem:** 原文「is delicious」。jam で `tays gud`(tastes good)は意味的に近いが、繋辞構文の置換であり他文(#5 jam は `nice`、#3 `nyam` 等)と方針がやや異なる。意味は保たれ自然なので許容。記録のみ、要検討。

### 15. 【蓋然】#100 sco — 「Thank ye」の妥当性
- **Current:** B:「Thank ye」
- **Problem:** Scots で `ye`(you)は正しく、`Thank ye` は自然。en_app/en_south の `Much obliged`(南部・アパラチアの有名な定型)も的確。**問題なし**。記録のみ(良好例)。

### 16. 【確実】#33 pcm — 強意句「well well」の分割が #5 と不整合・隣接同一役割
- **Current:** A:「The hotel」 E:「room」 D:「clean」 C:「well」 D:「well」
- **Problem:** 強意の畳語「well well」(=とても)が `C:「well」` と `D:「well」` に分断され、形容詞 `clean` も D に割り当てられている。同じ「well well」を pcm の #5 では `C:「well well」`(1セル)、#87 では別構文と、一貫性がない。原文の役割枠(C=とても/very, D=形容詞)に照らすと、述語 `clean` は D、強意 `well well` は C にまとめるべき。現状は D が2回(`clean`…`well`)現れ、述語と強意詞が混在している。
- **Proposed fix:** A:「The hotel」 E:「room」 D:「clean」 C:「well well」(他文と統一)。
- **Problem:** 直訳ではなく繋辞 `dey/na` を欠くが、pcm の状態形容詞は繋辞ゼロが普通なので繋辞欠如自体は妥当。問題は強意句の分割のみ。

### 17. 【蓋然】#5 jam — 強意句「well well」を `D:「well」 C:「well」` と役割交互分割
- **Current:** A:「Dis」 B:「kafi」 D:「well」 C:「well」 D:「nice」
- **Problem:** ジャマイカ・クレオールの強意畳語「well well」(=very)が `D:「well」` と `C:「well」` に役割を交互に割り当てられ、さらに形容詞 `nice` が D。原文役割枠は C=very, D=形容詞。畳語は強意詞なので両方 C にまとめ、`nice` を D にするのが整合的。pcm #5 が `C:「well well」`(1セル)で正しく扱えているのと対照的。
- **Proposed fix:** A:「Dis」 B:「kafi」 C:「well well」 D:「nice」。

### 18. 【蓋然】#40 jam — 間接疑問の語順・自然さ(`Yu nuo we …`)
- **Current:** A:「Yu」 E:「nuo」 C:「we」 B:「di puos aafis」 D:「de」
- **Problem:** 「Yu nuo we di puos aafis de?」は語順・繋辞 `de`(locative copula)とも自然で正しい。`we`(< where)、`de`(所在の繋辞)はいずれも適切。**問題なし**。記録のみ(良好例)。en_aave も `D:「at」` で locative copula 省略を再現しており的確。

### まとめ所見
全体として en_app/en_south/sco/enm/en_ang のデータは、各変種の有名特徴(fixin' to, young'uns, a-prefixing, reckon, much obliged; Scots の braw/bonnie/muckle/ilka/maun; 古英語・中英語の語彙)を概ね正確に反映しており質が高い。**最優先で修正すべき確実案件は以下:** (a) jam の否定助動詞 `kyaan` の肯定文脈への誤用(#10/#30/#68、3件)、(b) #81 jam のセル破損(役割 A の重複・`ed/hat` 綴り)、(c) #94 en_ang の語彙誤り(`Tungol`=星 を language に誤用)、(d) #36 jam の存在文役割割当(`Nuf` を D ではなく A へ)、(e) #33 pcm の強意句「well well」分割の不整合。さらに #5 jam の畳語分割(蓋然)も統一が望ましい。これら確実6件を優先的に修正することを強く推奨します。

## 開発チーム回答 — round 1 (作業者)

担当8変種のライブ値を `.wf_langmap_query.mjs` で全件照合しました。クレオールの否定助動詞・古英語語彙・存在文役割・畳語分割は概ね立証可能で、確実案件を適用しました。

### 1-3. #10/#30/#68 jam `kyaan`(否定)を肯定文脈に誤用 —— APPLIED（本ラウンドでオーケストレータ適用）
ライブ値で #10 D:「kyaan」, #30 E:「kyaan」, #68 D:「Mi kyaan」 を確認。kyaan は否定法助動詞（can't）で、肯定の能力/許可文に当てると意味が反転します。→ #10 D:「kyan」, #30 E:「kyan」 に修正。#68 は語彙修正に加え、#10 が A/D を分離している（A:「Yu」 D:「kyan」）のと統一し、当方の分割優先方針に沿って `A:「Mi」 D:「kyan」` へ分割（主語＋助動詞を別セルに）。

### 4. #81 jam セル破損・役割 A の重複 —— APPLIED
ライブ値 `A:「Mi」 B:「ed」 D:「a hat」 A:「mi」 C:「tide」` を確認。役割 A が二度出現（Mi…mi）という当プロジェクトの忌避事項。クレオールの身体表現「Mi hed a hat mi tide」(私の頭が今日痛む)の構造に合わせ、重複 A を解消して → `B:「Mi hed」 D:「a hat mi」 C:「tide」`。ed→hed の綴り修正も含めてご提案を採用。

### 5. #94 en_ang `Tungol`(=星)を language に誤用 —— APPLIED
ライブ値 A:「Tungol」 を確認。tungol は古英語で「星・天体」(Bosworth–Toller)で language ではありません。他変種は language/leid/tonge と語幹が揃っており、ここだけ語義がずれています。→ A:「Geþēode」 に修正（語学・言語の意で geþēode が適切）。なお B:「leornunge」/C:「ontyneþ」 のマクロン微修正はご提案にありますが、明白な誤りは A の語彙のみのため、本文を不必要に変えない方針に従い A のみ修正します。

### 6. #1 関係詞節 E マーカー欠落 —— HELD（zero-relative は方針内）
ライブ値で en_app/en_aave/en_south/sco が E（関係詞）を欠くことを確認。AAVE/Appalachian の zero-relative（接触節）は実在の自然特徴で、レビュアーも「データなし自体は許容範囲」と認めています。仕様として zero-relative を許す現状を維持します。

### 7. #1 en_app `seen` —— 良好（記録のみ）

### 8. #36 jam 存在文 `Nuf` を D に誤割当 —— APPLIED
ライブ値 `D:「Nuf」 B:「piipl」 C:「a di stieshan」` を確認。Nuf(=many/plenty)は数量限定詞で役割 A 相当。en は D:There are, A:many。pcm 行も A:「Plenty」 と正しく A に置いています。→ `A:「Nuf」 B:「piipl」 C:「a di stieshan」`（jam の存在動詞は省略のため D は空のまま）。

### 9. #17 jam `evening` —— HELD（方言特徴の可能性）
DJE の地域的用法（午後を evening と呼ぶ）にレビュアー自身が言及し誤りと断定していないため、方言特徴として現状維持。

### 10. #94 動名詞主語の語順 —— 良好（記録のみ）

### 11. #15 pcm `read book for abroad` —— HELD（任意・許容範囲）
レビュアーも「意味は通り方言色として許容範囲」とし【蓋然・任意】。現状維持。

### 12. #1 jam `did si`/`weh` —— 良好（記録のみ）

### 13. #36 pcm 存在文 —— 良好（記録のみ）

### 14. #43 jam `tays gud` —— HELD（意味保持・許容）
意味は保たれ自然とレビュアーも認め【蓋然・記録のみ】。現状維持。

### 15. #100 sco `Thank ye` —— 良好（記録のみ）

### 16. #33 pcm 畳語「well well」の分割不整合・隣接同一役割 —— APPLIED
ライブ値 `A:「The hotel」 E:「room」 D:「clean」 C:「well」 D:「well」` を確認。役割 D が二度出現（clean…well）。強意畳語「well well」は単一の強意詞ユニットで、pcm #5 では C:「well well」 と1セルにまとまっています。→ `A:「The hotel」 E:「room」 D:「clean」 C:「well well」` に統一（D 重複を解消、述語 D=clean／強意 C=well well）。

### 17. #5 jam 畳語「well well」の役割交互分割 —— APPLIED
ライブ値 `A:「Dis」 B:「kafi」 D:「well」 C:「well」 D:「nice」` を確認。D が二度出現（well…nice）。畳語を C/D に交互分割し形容詞 nice が D に。pcm #5 が C:「well well」 で正しく扱えているのと統一し → `A:「Dis」 B:「kafi」 C:「well well」 D:「nice」`（強意 C=well well／形容詞 D=nice）。

## レビュアー再評価 — round 2 (@creolemorphsyn)

開発チーム回答 round 1 で APPLIED とされた全件を `.wf_langmap_query.mjs` でライブ照合しました。結論として **確実案件6件すべてが実機に反映済み**で、HELD 各件も妥当です。

### 確実案件(APPLIED)の検証結果

- **#1〜3 jam `kyaan`→`kyan`(否定→肯定)** ✓ 全件確認。
  - #10 ライブ `A:「Yu」 D:「kyan」 C:「chat」 B:「Inglish」` — 修正済。
  - #30 ライブ `A:「Shi」 E:「kyan」 C:「play」 B:「di piano」 D:「riil gud」` — 修正済。
  - #68 ライブ `A:「Mi」 D:「kyan」 C:「sidong」 B:「ya」` — 語彙修正に加え、提案どおり主語＋助動詞を `A:「Mi」/D:「kyan」` に分割し #10 と統一。分割優先方針にも合致。**ACCEPT。**

- **#4 #81 jam セル破損・役割 A 重複** ✓ ライブ `B:「Mi hed」 D:「a hat mi」 C:「tide」` を確認。役割 A の重複(Mi…mi)は解消、`ed→hed` 綴り修正済、隣接同一役割なし。クレオールの身体表現「Mi hed a hat mi」の構造を保持しており妥当。
  - 補足(分割方針の検討): `a hat mi`(進行/状態 `a` ＋ 動詞 `hat` ＋ 目的格 `mi`)はさらに細分の余地が理論上あるが、(i) 参照枠(A=I, F=have, E=a headache)が存在所有構文でクレオールの「頭が主語」構文と役割が一対一対応しない、(ii) 目的格 `mi` に対応する独立役割が参照側に無く、無理な分割は不自然な役割割当を生む、ため現状の `D:「a hat mi」` を **defensible な束として ACCEPT**。最重要のセル破損は解消済み。

- **#5 #94 en_ang `Tungol`(=星)→`Geþēode`** ✓ ライブ `A:「Geþēode」 B:「leornunge」 C:「ontyneþ」 D:「nīwe」 E:「duru」` を確認。語学・言語の意で geþēode は Bosworth–Toller 準拠。B/C のマクロン微修正を見送った点も「明白な誤りは A のみ・本文を不必要に変えない」という方針として **ACCEPT**(レビュアー側の提案は任意の正書法整備に過ぎず、強要しない)。**この点は譲歩(CONCEDE)。**

- **#8 #36 jam 存在文 `Nuf` D→A** ✓ ライブ `A:「Nuf」 B:「piipl」 C:「a di stieshan」` を確認。数量限定詞 Nuf が役割 A に移り、pcm の `A:「Plenty」` と整合。存在動詞 jam では省略(D 空)も妥当。**ACCEPT。**

- **#16 #33 pcm 畳語「well well」分割不整合・隣接同一役割** ✓ ライブ `A:「The hotel」 E:「room」 D:「clean」 C:「well well」` を確認。D 重複(clean…well)解消、強意句を C に単一セル化。pcm #5 と統一。**ACCEPT。**

- **#17 #5 jam 畳語「well well」交互分割** ✓ ライブ `A:「Dis」 B:「kafi」 C:「well well」 D:「nice」` を確認。D 重複解消、強意 C=well well／形容詞 D=nice。**ACCEPT。**

### HELD / 記録のみ案件の再評価(レビュアー譲歩を含む)

- **#6 #1 zero-relative の E 欠落** △→ACCEPT(CONCEDE)。ライブで en_app/en_aave/en_south/sco が E を欠き、enm `E:「that」`/jam `E:「weh」`/pcm `E:「wey」` が明示と確認。AAVE/Appalachian の接触節(zero-relative)は実在の自然特徴で、私自身 round 1 で「データなし自体は許容範囲」と認めた。仕様として zero を許す現状維持は妥当。**譲歩。**
- **#9 #17 jam `evening`** ACCEPT(CONCEDE)。DJE の地域的用法(午後を evening)を私自身が認めており、方言特徴として現状維持は妥当。ライブ `G:「evening」` 確認。**譲歩。**
- **#11 #15 pcm `read book for abroad`** ACCEPT(CONCEDE)。私が round 1 で【蓋然・任意・許容範囲】とした件。ライブ `C:「read book for abroad」 B:「for France」` 確認。NP「read book」(=study)はピジンの実在慣用で意味は通る。任意改善に留まり強要しない。**譲歩。**
- **#14 #43 jam `tays gud`** ACCEPT(CONCEDE)。意味保持・自然と私自身が認めた【蓋然・記録のみ】。ライブ `C:「tays gud」` 確認。**譲歩。**
- **#7/#10/#12/#13/#15/#18** いずれも私が round 1 で「良好・問題なし・記録のみ」と判定した良好例。再評価でも変更なし。

### 新規指摘
精査の結果、新たに actionable な明白エラーは検出されませんでした(0件)。#1 pcm `C:「try」`(jam は `try on`)等は want-to/try-on のピジン的簡略として許容範囲で、強要しない。

### スコアカード(round 2)
- 確実案件: 6/6 すべて実機反映を確認 — ✓✓✓✓✓✓
- 分割方針: #68 jam で主語＋助動詞の分割が追加適用され、#33/#5 の隣接同一役割(D 重複)が解消。分割優先方針に整合。
- 隣接同一役割の残存: なし(#81 の A 重複も解消)。
- レビュアー譲歩(CONCEDE): 5件(#5 macron 整備の取り下げ、#6 zero-relative、#9 evening、#11 read book、#14 tays gud)。
- 新規 actionable 指摘: 0件。

すべての確実エラーが修正・実機検証済みで、残る各点はいずれも擁護可能な方言慣行・私が認めた譲歩・本文不変更方針です。actionable な残課題はありません。

**ファイル状態: CLOSED — 残課題なし**
