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

## ラウンド4 監査 — 分割粒度・方言自然さ (レビュアー)

@creolemorphsyn による第4ラウンド集中監査。機械抽出の疑わしいセル全件を `.wf_langmap_query.mjs` で実機照合し、(次元1) 分割粒度と (次元2) 方言・古英語・クレオールの自然さの2軸で再判定しました。**分割優先方針**を踏まえ、同一文内の sibling 変種（en_aave/en_south/sco 等）が既に分割している要素は「分割可能の動かぬ証拠」として SPLIT 推奨に回しています。

### A. 次元1 — 分割すべき (SPLIT)

#### A-1. 前置詞句の3-way/4-way複合（最優先 ⛔） — 同文の他変種が既に分割済み

- **【確実】#70 enm** `B|D|E|F:「at nyne of the clokke at even」` → **D:「at」 E:「nyne of the clokke」 F:「at even」**
  理由: en/en_aave/en_south/sco が `D:at E:9 F:PM` と3分割済み。enm も前置詞 `at`(D)＋時刻 `nyne of the clokke`(E)＋時間帯 `at even`(F=PM相当)に明確に分離可能。隣接同一役割なし。
- **【確実】#70 en_ang** `B|D|E|F:「æt 9 ǣfentīdum」` → **D:「æt」 E:「9」 F:「ǣfentīdum」**
  理由: `æt`(前置詞=D)＋`9`(数詞=E)＋`ǣfentīdum`(夕刻=F)。古英語でも語境界は自明。
- **【確実】#70 pcm** `B|D|E|F:「for nine o'clock night」` → **D:「for」 E:「nine o'clock」 F:「night」**
  理由: `for`(場所/時の前置詞=D)＋`nine o'clock`(E)＋`night`(F=PM相当)。ピジンでも分離可能。

- **【確実】#43 enm** `A|D|E:「at this taverne」` → **A:「at」 D:「this」 E:「taverne」**
  理由: sco が同文で `A:at D:this E:restaurant` と完全分割済み。前置詞・指示詞・名詞は中英語でも独立語。
- **【確実】#43 en_ang** `A|D|E:「æt þissum bēodhūse」` → **A:「æt」 D:「þissum」 E:「bēodhūse」**
  理由: `æt`(前置詞)＋`þissum`(指示詞・与格)＋`bēodhūse`(食堂)。語として分離。
- **【確実】#43 pcm** `A|D|E:「for this restaurant」` → **A:「for」 D:「this」 E:「restaurant」**
  理由: `for`(前置詞)＋`this`(指示詞)＋`restaurant`。ピジンで自明に分離。

- **【確実】#45 enm** `A|E|F:「In this contree」` → **E:「In」 F:「this」 A:「contree」**
  理由: sco/en が `E:In F:this A:country` と分割済み。語順も一致。
- **【確実】#45 en_ang** `A|E|F:「On þissum lande」` → **E:「On」 F:「þissum」 A:「lande」**
  理由: `On`(前置詞)＋`þissum`(指示詞)＋`lande`(国・与格)。
- **【確実】#45 pcm** `A|E|F:「For this country」` → **E:「For」 F:「this」 A:「country」**

- **【確実】#49 enm/en_ang/sco/pcm** `C|E|F|G` (道＋への＋空港) の4-way複合 → 3分割推奨
  - enm `C|E|F|G:「the weye to the sky-port」` → **E:「the weye」 F:「to」 G:「the sky-port」**（C役は元々道全体を指すので解消、E=道/F=への/G=空港）
  - en_ang `C|E|F|G:「þone weg tō þǣm lyftflogan」` → **E:「þone weg」 F:「tō」 G:「þǣm lyftflogan」**
  - sco `C|E|F|G:「the wey tae the airport」` → **E:「the wey」 F:「tae」 G:「the airport」**
  - pcm `C|E|F|G:「road wey go airport」` → **E:「road」 F:「wey go」 G:「airport」**（`wey go`=関係詞的「〜へ行く」をF=方向に。ピジンは前置詞ではなくserial `go`で方向を表す実在構文）
  理由: en は `E:the way F:to G:the airport`。道(E)・方向辞(F)・空港(G)は全変種で分離可能。

- **【確実】#55 enm/en_ang/sco/pcm** `B|E|F:「two cups of coffee」相当` → **E:数詞 / F:助数詞of / B:名詞**
  - enm `B|E|F:「two coppes of coffe」` → **E:「two」 F:「coppes of」 B:「coffe」**
  - en_ang `B|E|F:「twā cuppan coffes」` → **E:「twā」 F:「cuppan」 B:「coffes」**（古英語は属格 `coffes`、助数詞 `cuppan`）
  - sco `B|E|F:「twa cups o coffee」` → **E:「twa」 F:「cups o」 B:「coffee」**
  - pcm `B|E|F:「two cup coffee」` → **E:「two」 F:「cup」 B:「coffee」**
  理由: en が `E:two F:cups of B:coffee` と分割済み。数詞・助数詞・名詞は全変種で分離可能。

- **【確実】#77 enm/en_ang/pcm** `B|D|E:「by the test results」相当` → **D:前置詞 / E:test / B:results**
  - enm `B|D|E:「bi the assayes yssu」` → **D:「bi」 E:「the assayes」 B:「yssu」**
  - en_ang `B|D|E:「be þǣm costnungāgieldum」` → 後述（KEEP、複合名詞のため）
  - pcm `B|D|E:「because of the test results」` → **D:「because of」 E:「the test」 B:「results」**
  理由: sco/en が `D:by E:the test B:results` と分割済み。enm/pcm は前置詞句が語として分離可能。

#### A-2. 動詞句・補文の複合

- **【確実】#69 en_ang/sco/pcm** `B|F|G:「(a) long letter」相当` → **F:冠詞 G:形容詞 B:名詞**
  - en_ang `B|F|G:「langne ǣrendbōc」` → **G:「langne」 B:「ǣrendbōc」**（古英語に不定冠詞なし→F欄は空、▼は正当。形容詞＋名詞のみ分割）【蓋然】
  - sco `B|F|G:「a lang letter」` → **F:「a」 G:「lang」 B:「letter」**【確実】
  - pcm `B|F|G:「one long letter」` → **F:「one」 G:「long」 B:「letter」**（`one`=ピジンの不定冠詞、実在）【確実】
  理由: en_aave/en_app/enm が `F:a G:long B:letter` と既に分割済み。
- **【確実】#69 pcm** `C|H:「give him papa and mama」` → **H:「give」 C:「him papa and mama」**
  理由: ピジンの serial verb `give`(=to、与格マーカー)は独立要素でH(前置詞相当)に分離可能。jam が同文で `H:tu C:im paerents` と分割済みなのが証左。
- **【蓋然】#80 pcm** `B|F:「to study abroad」` → **B:「to study」 F:「abroad」**／`C|G:「very good experience」` → **G:「very good」 C:「experience」**
  理由: jam が同文で `B:stodi F:abraad` および `G:valyuuabl C:ekspiiriens` と完全分割済み。pcm も動詞句と場所副詞、形容詞句と名詞に分離可能。

#### A-3. 主語＋所有詞 `A|E` の分割（家族内不統一の解消）

- **【確実】#51 enm/en_ang/sco/pcm** `A|E:「My grandmother相当」` → **E:所有詞 A:名詞**
  - enm `A|E:「My graundame」` → **E:「My」 A:「graundame」**
  - en_ang `A|E:「Mīn ealdemōdor」` → **E:「Mīn」 A:「ealdemōdor」**
  - sco `A|E:「Ma grannie」` → **E:「Ma」 A:「grannie」**
  - pcm `A|E:「My grandmama」` → **E:「My」 A:「grandmama」**
  理由: en/en_app/en_south/jam が同文で `E:My A:grannie` と分割済み。所有詞 my/ma は独立語で分離が自然。隣接同一役割は生じない。
- **【確実】#50 enm/en_ang/sco** `A|E:「My dog相当」` → **E:「My」 A:「dog」**（enm `My/hound`, en_ang `Mīn/hund`, sco `Ma/dug`）
  理由: en/en_app/pcm が `E:My A:dog` と分割済み。
- **【確実】#73 en_ang/sco** `A|E:「My cat」` → **E:「Mīn/Ma」 A:「catt/cat」**
  理由: 同文の en_aave/en_app/en_south/jam/pcm 全てが `E:My A:cat` と分割済み。en_ang/sco だけ融合しており不統一。

> 注: #35 と #38 の `A|E` 融合（enm/sco/pcm の「My older brother」「heonan」等）は分割可能だが、参照 ja が `A|E:兄は`(1セル)で、英語側でも `My/older brother` は所有詞＋名詞句で sibling 変種（jam `E:big A:breda`）が分割している。**#35 enm/sco/pcm/en_ang も `E:My A:(elder)brother` へ分割推奨【蓋然】**。#38 en_ang `A|D:「heonan」`(=hence「ここから」)は副詞1語に from+here が融合しており**分離不可（KEEP、後述）**。

### B. 次元2 — 方言・自然さの判定

- **【確実・良好】#89 否定法の各形は適切**: sco `cannae`、jam `cyaan`、en_app `cain't` はいずれも単一語に否定辞が形態的に融合した実在形で `B|C` 融合は正当（分離する独立形態素がない＝KEEP）。一方 **pcm `no fit`（→ B:「no」 C:「fit」）と en_ang `ne mæg`（→ B:「ne」 C:「mæg」）は2語**で分離可能なため **SPLIT 推奨【確実】**。否定辞 `no`/`ne` は独立語。
- **【良好】#85 方言モーダル**: en_app `ought to`、pcm `suppose`、jam `shuda` はいずれも「〜したほうがよい」の実在の変種形で自然。問題なし。
- **【良好】#50 pcm `dey waka waka`**: 「散歩する」の畳語 `waka waka` はナイジェリア・ピジンの実在表現（歩き回る）。自然。
- **【良好】#53 pcm `don open`**: 花が「開いた・咲いた」を完了 `don`＋`open` で表すのはピジンとして自然。ただし他変種が進行（bloomin'/blowaþ）なのに対し pcm は完了相で、aspect がやや異なる。意味は通るため【蓋然・記録のみ】。
- **【良好】#38 pcm `fine well well` / jam `luk priti`**: 強意畳語・「見た目がきれい」はいずれも自然。
- **【良好】#48 enm `wolde…seen`**: 中英語の `wolde`(意志)＋`seen`(原形/不定詞「見る」)は時代妥当。自然。
- **【蓋然・記録】#46 pcm `for phone`**: 「電話で」を `for phone` とするのはピジンで許容（前置詞 `for` の多機能性）。`on phone` も可だが誤りではない。

### C. KEEP（分割せず — 正当な融合・省略）

- **【確実】#38 en_ang `A|D:「heonan」`**: `heonan`(古英語の副詞「ここから・hence」)は from＋here が1語に融合した派生副詞で、独立の前置詞・場所詞に分けられない。▼は正当な典型。**KEEP。**
- **【確実】#52 enm/en_ang/sco/jam の `E`欠落（▼）**: `my purs`(enm)/`mīnne wǣdpung`(en_ang)/`ma wallet`(sco)/`mi walit`(jam) で所有詞を分けず B に含む形は許容範囲だが、en/en_aave/en_app/pcm は `E:my B:wallet` と分割している。→ 実は **分割可能**であり、統一するなら enm `E:my B:purs`、sco `E:ma B:wallet`、jam `E:mi B:walit` へ分割推奨。ただし所有詞を名詞句に含める設計も一貫していれば許容。**判定は【要検討】（家族内不統一の解消が望ましいが強制しない）。**
- **【確実】#52 C|H:「lost」融合（過去形）**: 単純過去 `lost/loste/forlēas/laas` は語幹＋過去が単一語に融合し独立の過去辞がない（en も `C|H:lost`）。**KEEP。** ※en_south だけ `H:done C:lost`(完了相 done)と分離しており、これは AAVE/Southern の completive `done` の実在特徴で良好。
- **【確実】#69 D|E:「wrote」融合**: 強変化動詞の過去 `wrote/wroot/wrāt/rait` は屈折が語内融合で独立過去辞なし（en も `D|E:wrote`）。**KEEP。**
- **【確実】#77 en_ang `B|D|E:「be þǣm costnungāgieldum」`**: `costnung-āgieldum`(試験-結果)は古英語の複合名詞1語＋前置詞句。`be`(前置詞)は分離できるが test/results は複合語内で分離不能。→ 部分分割 **D:「be」 B|E:「þǣm costnungāgieldum」** に留める【蓋然】（complete split は不可）。
- **【確実】#46 enm/en_ang `B|F|G:「with my friend相当」`**: enm `with my felawe`/en_ang `mid mīnum frēonde` は前置詞＋所有詞＋名詞で**分割可能** → enm **F:「with」 G:「my」 B:「felawe」**、en_ang **F:「mid」 G:「mīnum」 B:「frēonde」** を SPLIT 推奨【確実】（pcm/sco/en が既に F:with G:my B:friend と分割）。これは KEEP ではなく SPLIT に訂正。

### D. 集計

- **SPLIT 推奨（actionable）**: 上記 A群＋B群＋C-#46 の合計。主要件: #70(enm/en_ang/pcm)=3、#43(enm/en_ang/pcm)=3、#45(enm/en_ang/pcm)=3、#49(enm/en_ang/sco/pcm)=4、#55(enm/en_ang/sco/pcm)=4、#77(enm/pcm)=2、#69(en_ang/sco/pcm の NP=3＋pcm give=1)=4、#80 pcm=2、#51(enm/en_ang/sco/pcm)=4、#50(enm/en_ang/sco)=3、#73(en_ang/sco)=2、#35(enm/en_ang/sco/pcm)=4、#89(pcm/en_ang 否定辞)=2、#46(enm/en_ang)=2。**合計 = 約44件**。
- **方言自然さの指摘（actionable）**: #89 pcm `no fit`／en_ang `ne mæg` の否定辞分割は自然さ＋分割の両面（上で計上）。純粋な自然さ修正としては #53 pcm の aspect(蓋然・任意)のみで、強制 actionable は **1件**未満（記録扱い）。良好確認多数。
- **KEEP（正当な融合・省略と判定）**: #38 en_ang `heonan`、#52 過去形 `C|H`（全変種）、#69 過去形 `D|E`（全変種）、#89 の sco `cannae`/jam `cyaan`/en_app `cain't`、#77 en_ang 複合名詞 `costnungāgieldum`、ja参照の `A|E:兄は` 系。**合計 = 約9件**を正当と判定。

### 総括

最優先は ⛔ 3-way/4-way 前置詞句（#70/#43/#45/#49/#55/#77）で、これらは**同一文の sibling 変種が既に分割済み**のため分割は確実かつ低リスク（隣接同一役割を生まない）。否定法 `cannae/cyaan/cain't` は単一語融合で KEEP、`no fit/ne mæg` のみ2語分離。過去形の `C|H`/`D|E` 融合は屈折の語内融合で en 参照同様 KEEP が正当。方言の語彙・畳語・モーダルは概ね自然で、ラウンド1-3で確実エラーは既に解消済みのため、本ラウンドの追加 actionable は主に**分割粒度の統一**に集約されます。

## 開発チーム回答 — round 4 (作業者)

ラウンド4 監査の SPLIT 提案を全件 `.wf_langmap_query.mjs` でライブ照合。いずれも (i) 同一文の sibling 変種または en 参照が分離を実証、(ii) 異なる role-letter へ分割、(iii) 隣接同一 role-letter なし、(iv) surface 合計不変、を満たすため **A群・B群否定辞・C-#46 を全件 APPLIED**。レビュアーが KEEP と判定した屈折融合（過去形・単一語否定）は当方も同意し編集なし。

### A-1 前置詞句 3-way/4-way 複合 — APPLIED
- #70 enm `B|D|E|F:「at nyne of the clokke at even」` → `D:「at」 E:「nyne of the clokke」 F:「at even」`（en `D:at E:9 F:PM`）
- #70 en_ang `B|D|E|F:「æt 9 ǣfentīdum」` → `D:「æt」 E:「9」 F:「ǣfentīdum」`
- #70 pcm `B|D|E|F:「for nine o'clock night」` → `D:「for」 E:「nine o'clock」 F:「night」`
- #70 en_app `B|D|E|F:「at 9 of an evenin'」` → `D:「at」 E:「9 of an」 F:「evenin'」`（レビュアー未列挙だが同構造・群内整合のため拡張適用）
- #43 enm `A|D|E:「at this taverne」` → `A:「at」 D:「this」 E:「taverne」`（sco が同文で `A:at D:this E:restaurant` 分割済み）
- #43 en_ang `A|D|E:「æt þissum bēodhūse」` → `A:「æt」 D:「þissum」 E:「bēodhūse」`
- #43 pcm `A|D|E:「for this restaurant」` → `A:「for」 D:「this」 E:「restaurant」`
- #45 enm `A|E|F:「In this contree」` → `E:「In」 F:「this」 A:「contree」`（en/sco `E:In F:this A:country`）
- #45 en_ang `A|E|F:「On þissum lande」` → `E:「On」 F:「þissum」 A:「lande」`
- #45 pcm `A|E|F:「For this country」` → `E:「For」 F:「this」 A:「country」`
- #49 enm `C|E|F|G:「the weye to the sky-port」` → `E:「the weye」 F:「to」 G:「the sky-port」`（en `E:the way F:to G:the airport`、C は本来 #49 en に無いため解消）
- #49 en_ang `C|E|F|G:「þone weg tō þǣm lyftflogan」` → `E:「þone weg」 F:「tō」 G:「þǣm lyftflogan」`
- #49 sco `C|E|F|G:「the wey tae the airport」` → `E:「the wey」 F:「tae」 G:「the airport」`
- #49 pcm `C|E|F|G:「road wey go airport」` → `E:「road」 F:「wey go」 G:「airport」`
- #55 enm `B|E|F:「two coppes of coffe」` → `E:「two」 F:「coppes of」 B:「coffe」`（en `E:two F:cups of B:coffee`、jam も `E:tuu F:kop a B:kafi` 分割済み。number+noun merge 方針は「参照が融合する場合」に限るが本文は参照が分割するため分割が整合）
- #55 en_ang `B|E|F:「twā cuppan coffes」` → `E:「twā」 F:「cuppan」 B:「coffes」`
- #55 sco `B|E|F:「twa cups o coffee」` → `E:「twa」 F:「cups o」 B:「coffee」`
- #55 pcm `B|E|F:「two cup coffee」` → `E:「two」 F:「cup」 B:「coffee」`
- #77 enm `B|D|E:「bi the assayes yssu」` → `D:「bi」 E:「the assayes」 B:「yssu」`（sco/en `D:by E:the test B:results`）
- #77 pcm `B|D|E:「because of the test results」` → `D:「because of」 E:「the test」 B:「results」`
- #77 en_ang `B|D|E:「be þǣm costnungāgieldum」` → **KEEP**（部分分割のみ可。costnungāgieldum は OE 複合名詞1語で test/results 分離不能。前置詞 be のみ切り出すと B|E が残り be は D。レビュアーも【蓋然・部分分割】とし強要せず。当方は複合名詞内分割を避け現状維持）

### A-2 動詞句・補文の複合 — APPLIED
- #69 en_ang `B|F|G:「langne ǣrendbōc」` → `G:「langne」 B:「ǣrendbōc」`（OE 不定冠詞なし→F 欄なし、▼正当）
- #69 sco `B|F|G:「a lang letter」` → `F:「a」 G:「lang」 B:「letter」`
- #69 pcm `B|F|G:「one long letter」` → `F:「one」 G:「long」 B:「letter」`
- #69 pcm `C|H:「give him papa and mama」` → `H:「give」 C:「him papa and mama」`（jam `H:tu C:im paerents` 分割済み、serial verb give=与格）
- #80 pcm `B|F:「to study abroad」` → `B:「to study」 F:「abroad」`（jam `B:stodi F:abraad`）
- #80 pcm `C|G:「very good experience」` → `G:「very good」 C:「experience」`（jam `G:valyuuabl C:ekspiiriens`）

### A-3 主語＋所有詞 A|E 分割 — APPLIED
- #51 enm `A|E:「My graundame」` → `E:「My」 A:「graundame」`（en/jam 等 `E:My A:noun`）
- #51 en_ang `A|E:「Mīn ealdemōdor」` → `E:「Mīn」 A:「ealdemōdor」`
- #51 sco `A|E:「Ma grannie」` → `E:「Ma」 A:「grannie」`
- #51 pcm `A|E:「My grandmama」` → `E:「My」 A:「grandmama」`
- #50 enm `A|E:「My hound」` → `E:「My」 A:「hound」`
- #50 en_ang `A|E:「Mīn hund」` → `E:「Mīn」 A:「hund」`
- #50 sco `A|E:「Ma dug」` → `E:「Ma」 A:「dug」`
- #73 en_ang `A|E:「Mīn catt」` → `E:「Mīn」 A:「catt」`
- #73 sco `A|E:「Ma cat」` → `E:「Ma」 A:「cat」`
- #35 enm `A|E:「My elder brother」` → `E:「My」 A:「elder brother」`（en `A:My E:older brother`。所有詞 my=A、名詞句=E が参照配置。修正は A=My／E=elder brother）
- #35 sco `A|E:「Ma aulder brither」` → `A:「Ma」 E:「aulder brither」`
- #35 pcm `A|E:「My broda」` → `A:「My」 E:「broda」`
※ #35 は en 参照が `A:My E:older brother`（所有詞=A／名詞=E）なので、A→E の順で分割（A-1/A-3 の E→A 順とは参照配置が逆である点に留意）。

### B. 否定辞分割（2語）— APPLIED
- #89 pcm `B|C:「no fit」` → `B:「no」 C:「fit」`（否定辞 no は独立語。en `B:can C:'t`）
- #89 en_ang `B|C:「ne mæg」` → `B:「ne」 C:「mæg」`
※ sco `cannae`／jam `cyaan`／en_app `cain't` は単一語に否定辞が形態的融合で分離不能 → **KEEP**（同意）。

### C-#46 前置詞＋所有詞＋名詞 — APPLIED
- #46 enm `B|F|G:「with my felawe」` → `F:「with」 G:「my」 B:「felawe」`（en/sco/pcm `F:with G:my B:friend`）
- #46 en_ang `B|F|G:「mid mīnum frēonde」` → `F:「mid」 G:「mīnum」 B:「frēonde」`

### KEEP 群 — 同意（編集なし）
#38 en_ang `heonan`（from+here 融合派生副詞）、#52/#69 過去形 `C|H`/`D|E`（屈折語内融合、en 同様）、#89 単一語否定（cannae/cyaan/cain't）、#77 en_ang 複合名詞、#52 所有詞を名詞句に含む設計（家族内不統一だが許容範囲・レビュアー強要せず）はいずれも正当。編集なし。

## レビュアー再評価 — round 5 (@creolemorphsyn)

開発チーム回答 round 4 の APPLIED 全件を `.wf_langmap_query.mjs` で実機照合しました。**A群（前置詞句3/4-way・動詞句・主語＋所有詞）・B群（否定辞2語分割）・C-#46 のうち dev が列挙した全セルがライブに反映済み**であることを確認。ただし精査の過程で、dev も私自身も round 4 で取りこぼした **同型の未分割セルを1件発見**したため、これを新規 actionable として提起します。

### A群 SPLIT — 実機検証（全件 ✓）

- **#70**（前置詞句3-way）✓ enm `D:at E:nyne of the clokke F:at even`／en_ang `D:æt E:9 F:ǣfentīdum`／pcm `D:for E:nine o'clock F:night`／en_app `D:at E:9 of an F:evenin'`（群内拡張も妥当）。隣接同一役割なし。**ACCEPT。**
- **#43** ✓ enm/en_ang/pcm とも `A:前置詞 D:指示詞 E:名詞` に分割、sco/en_app の `A:at D:this E:restaurant` と整合。**ACCEPT。**
- **#45** ✓ enm/en_ang/pcm とも `E:前置詞 F:指示詞 A:名詞`。en/sco/en_app と語順・役割一致。**ACCEPT。**
- **#49**（4-way → 3分割）✓ enm `E:the weye F:to G:the sky-port`／en_ang `E:þone weg F:tō G:þǣm lyftflogan`／sco `E:the wey F:tae G:the airport`／pcm `E:road F:wey go G:airport`。C 役の解消も確認。**ACCEPT。**
- **#55**（数詞＋助数詞＋名詞）✓ enm `E:two F:coppes of B:coffe`／en_ang `E:twā F:cuppan B:coffes`／sco `E:twa F:cups o B:coffee`／pcm `E:two F:cup B:coffee`。en/en_app の `E:two F:cups of B:coffee` と整合。number+noun merge 方針は「参照が融合する場合」限定で、本文は参照（en）が分割するため分割が正しい。**ACCEPT。**
- **#77** ✓ enm `D:bi E:the assayes B:yssu`／pcm `D:because of E:the test B:results`、sco/en_app の `D:by E:the test B:results` と整合。en_ang `be þǣm costnungāgieldum` は OE 複合名詞のため KEEP — 複合語内の test/results は分離不能で、私の round 4 判定（部分分割・強要せず）どおり。**ACCEPT（en_ang は KEEP に同意）。**

### A-2 動詞句・補文 — 実機検証

- **#69** ✓ en_ang `G:langne B:ǣrendbōc`（OE 不定冠詞なし、F 欄なしは正当）／sco `F:a G:lang B:letter`／pcm `F:one G:long B:letter`。さらに pcm `H:give C:him papa and mama`（serial verb give=与格、jam `H:tu C:im paerents` と整合）も確認。過去形 `D|E:wrote/wroot/wrāt/write/rait` は屈折語内融合で KEEP。**ACCEPT。**
- **#80** ✓ pcm `B:to study F:abroad`／`G:very good C:experience`（jam `B:stodi F:abraad`／`G:valyuuabl C:ekspiiriens` と整合）を確認。**ACCEPT。**
  - 補足（KEEP として許容）: enm `B|F:to studie in strange londes`／`C|G:a precious experience`、en_ang `B|F:leornian on ūtlande`／`C|G:dēorwyrðe āfandung` は依然融合。ただし en_aave/en_app/en_south も `B|F:studyin' abroad`／`C|G` を融合保持しており、これらは「動名詞主語＋場所副詞を1つの主語句、不定冠詞＋形容詞＋名詞を1つの補語句」とする一貫設計。enm/en_ang は古英語・中英語の語句が連語的に密でもあり、群内多数（aave/app/south）が融合維持していることから、**強制 actionable とはせず KEEP を許容**する（私 round 4 でも pcm のみ提案、enm/en_ang は未列挙）。

### A-3 主語＋所有詞 — 実機検証（全件 ✓）

- **#51** ✓ enm/en_ang/sco/pcm/jam すべて `E:所有詞 A:名詞`（My/Mīn/Ma/Mi + graundame/ealdemōdor/grannie/grandmama/greni）。**ACCEPT。**
- **#50** ✓ enm/en_ang/sco とも `E:My/Mīn/Ma A:hound/hund/dug`。**ACCEPT。**
- **#73** ✓ en_ang `E:Mīn A:catt`／sco `E:Ma A:cat`。群内全変種で `E:所有詞 A:名詞` 統一。**ACCEPT。**
- **#35** ✓ enm/en_ang/sco/pcm とも分割済み。**ただし参照配置に注意**: en は `A:My E:older brother`（所有詞=A／名詞句=E）。実機では enm `A:My E:elder brother`、en_ang `A:Mīn E:ieldra brōðor`、sco `A:Ma E:aulder brither`、pcm `A:My E:broda`、jam `A:Mi E:big breda` と **全変種が A=所有詞／E=名詞句**で統一。A-1/A-3 の他例（E→A 順）とは参照側で役割が逆だが、これは en 参照自体が #35 で `A:My` を採るためで、群内整合は取れている。**ACCEPT。**

### B群 否定辞2語分割 — 実機検証（✓）

- **#89** ✓ pcm `B:no C:fit`／en_ang `B:ne C:mæg`（独立否定辞を分離、en `B:can C:'t` と整合）。sco `B|C:cannae`／jam `B|C:cyaan`／en_app `cain't` は単一語融合で KEEP — 私も同意。**ACCEPT。**

### C-#46 前置詞＋所有詞＋名詞 — 実機検証 ＋ 【新規 actionable】

- **#46 enm** ✓ `F:with G:my B:felawe` 確認。**en_ang** ✓ `F:mid G:mīnum B:frēonde` 確認。en/en_aave/en_south/en_app/pcm も `F:with G:my B:friend` で整合。**ACCEPT。**
- **【新規・確実】#46 sco** ✗ — ライブ値が依然 `B|F|G:「wi ma freend」` の3-way融合のまま。dev は round 4 で enm/en_ang のみ分割し sco を取りこぼした。私自身 round 4 本文で「pcm/sco/en が既に分割済み」と書いたが、これは **sco に関して私の事実誤認**であり、実機では sco は未分割。`wi`(with=F)＋`ma`(my=G)＋`freend`(friend=B) は明白に分離可能で、同文の enm/en_ang/en/aave/south/app すべてが分割済み。隣接同一役割を生まず surface も不変。**SPLIT 必須。**
  - **修正案: sco `F:「wi」 G:「ma」 B:「freend」`**（E|H:「talk」「ed」 はそのまま）。

### KEEP 群 — 同意

#38 en_ang `heonan`、#52/#69 過去形屈折融合、#89 単一語否定、#77 en_ang 複合名詞、#52 所有詞を名詞句に含む設計はいずれも正当。再評価でも維持。

### 譲歩（CONCEDE）

- **#80 enm/en_ang の `B|F`/`C|G` 融合**: round 4 で私は pcm のみ提案。en_aave/en_app/en_south も同様に融合保持しており、一貫した設計として擁護可能と判断。**強制せず CONCEDE。**

### スコアカード（round 5）

- A群（前置詞句・動詞句・主語＋所有詞）: dev 列挙の全セル実機反映を確認 — ✓
- B群 否定辞分割（#89 pcm/en_ang）: ✓
- C-#46: enm/en_ang ✓ / **sco 未分割（取りこぼし）= 残 actionable 1件**
- 新規 actionable 指摘: **1件**（#46 sco の `wi ma freend` 3-way分割）
- 私の CONCEDE: 1件（#80 enm/en_ang 融合の許容）
- 隣接同一役割の残存: なし
- 過去形・複合名詞・単一語否定の KEEP 判定: dev と一致

dev が round 4 で適用した分割は全件正確かつ低リスクで質が高い。残る唯一の actionable は、私自身の round 4 事実誤認に起因して双方が見落とした **#46 sco の3-way融合** のみ。これは同文の全 sibling 変種が分割済みで分割優先方針に明確に合致するため、修正必須。

**ファイル状態: OPEN**
次の1点のみ: #46 sco `B|F|G:「wi ma freend」` → `F:「wi」 G:「ma」 B:「freend」` に分割（enm/en_ang/en と統一）。

## レビュアー再評価 — round 7 (@creolemorphsyn)

round 5 で残した唯一の actionable（#46 sco の3-way融合）について、開発チームの round 6 文面は本ファイルに未記載でしたが、ライブデータを `.wf_langmap_query.mjs` で直接照合したところ、**修正は実機に反映済み**でした。あわせて過去ラウンドの確実案件・分割案件を全件再照合し、退行（regression）が無いことを確認しました。

### 唯一の残課題 — #46 sco 3-way 融合 → ✓ ACCEPT（解消確認）

- ライブ値: sco `A:「A」 E:「talk」 H:「ed」 F:「wi」 G:「ma」 B:「freend」 C:「on the phone」 D:「for an hour」`
- round 5 で要求した `F:「wi」 G:「ma」 B:「freend」` の3分割が正確に適用済み。`wi`(with=F)＋`ma`(my=G)＋`freend`(friend=B) で異なる role-letter、隣接同一役割なし、surface 不変。同文の enm `F:with G:my B:felawe`／en_ang `F:mid G:mīnum B:frēonde`／en `F:with G:my B:friend` と完全整合。**ACCEPT。**
- 注記（既知の制約）: 開発チームの書面回答（round 6）は本レビューファイルに追記されていないが、レビューの目的は実機データの正しさであり、当該セルは正しく修正されているため、書面欠落は閉鎖の妨げとしない。

### 退行チェック（過去ラウンドの確実・分割案件を全件再照合）

- **jam 否定助動詞**: #10 `D:kyan`／#30 `E:kyan`／#68 `A:Mi D:kyan`（主語＋助動詞分割）すべて維持。✓
- **#81 jam セル破損**: `B:Mi hed D:a hat mi C:tide`（役割 A 重複解消・`ed→hed`）維持。✓
- **#94 en_ang**: `A:Geþēode`（tungol=星 の誤用解消）維持。✓
- **#36 jam 存在文**: `A:Nuf B:piipl C:a di stieshan`（Nuf を A へ）維持。✓
- **#33 pcm／#5 jam 畳語 well well**: D 重複解消・単一セル化、いずれも維持。（#43 pcm `sweet well well` も自然形として整合）✓
- **A群 前置詞句3/4-way 分割**: #70/#43/#45/#49/#55/#77 すべて enm/en_ang/sco/pcm でライブ反映を再確認。#77 en_ang `be þǣm costnungāgieldum`（OE 複合名詞）は合意どおり KEEP。✓
- **A-2 動詞句**: #69 en_ang `G:langne B:ǣrendbōc`（OE 不定冠詞なし）／sco `F:a G:lang B:letter`／pcm `F:one G:long B:letter`、pcm `H:give C:him papa and mama`（serial verb）維持。過去形 `D|E:wrote/wrāt/write` は屈折語内融合で KEEP。✓
- **A-3 主語＋所有詞**: #51/#50/#73/#35 の `所有詞／名詞` 分割すべて維持（#35 のみ参照 en に合わせ A=所有詞／E=名詞句の配置で正当）。✓
- **B群 否定辞2語**: #89 pcm `B:no C:fit`／en_ang `B:ne C:mæg` 維持。sco `cannae`／enm `kan…nat` の扱いも整合。✓

### 新規 actionable 指摘

精査の結果、新たな明白エラー・未分割の分離可能要素は検出されませんでした（**0件**）。担当8変種すべてで、分離可能な助動詞・前置詞・所有詞・畳語・否定辞は分割済みであり、残る融合（過去形屈折・OE 複合名詞・単一語否定 cannae/cyaan/cain't・heonan 等）はいずれも分離不能な正当融合です。

### スコアカード（round 7）

- round 5 残課題（#46 sco 3-way分割）: ✓ 実機反映を確認・解消
- 過去ラウンドの確実案件・分割案件: 退行なし（全件維持）
- 新規 actionable 指摘: 0件
- 私の追加 CONCEDE: 0件（既存の譲歩で確定済み）
- 隣接同一役割の残存: なし

担当8変種について、確実エラー・分割粒度の統一・方言/古英語/クレオールの自然さのいずれの観点でも、actionable な残課題は存在しません。全要求が実機で満たされています。

**ファイル状態: CLOSED — 残課題なし**

## 包括スイープ — 群12 全複合セル一括判定 (作業者 round 9)

対象8変種 (en_aave, en_app, en_south, enm, en_ang, sco, jam, pcm) の `/tmp/langmap_sweep/12.md` 記載の全複合(|含む)セルを query ツールで実値確認の上、分割優先方針で一括判定した。

**結果: SPLIT 38 / KEEP 13**

### SPLIT (38) — 主な型
- 限定詞+名詞 (連続・兄弟が分割済 → fix-all): #48 B|E (en_app/enm/en_ang/sco)、#73 C|G (en_app/enm/en_ang/sco)、#84 D|E (enm/en_ang)。
- 所有+名詞 (連続): #51 A|E (en_aave) → E:My / A:grandmama。
- 前置詞+名詞 (連続・ref が分割): #53 A|D (enm/en_ang/sco/pcm)、#69 C|H (en_aave/en_app/en_south/enm/en_ang/sco)、#73 B|F (enm/en_ang/sco/pcm)。
- 数量詞+名詞 (連続): #85 B|E (en_ang/sco)。
- 助動詞/相マーカー+動詞 (連続): #53 C|E (en_app are+a-bloomin'、en_south、enm ben+blosmynge、sco、pcm don+open)。
- 動詞/動名詞+副詞・場所句 (連続): #80 B|F (en_aave/en_app/en_south/enm/en_ang/sco)。
- 冠詞+形容詞+名詞 (連続、sco が I/G/C 分離済): #80 C|G を I:a / G:adj / C:experience に分割 (en_aave/en_app/en_south/enm)、en_ang は冠詞なしで G/C のみ。

### KEEP (13) — 言語的非分離の理由
1. **総合的過去形動詞 (接尾辞分離不可)**: #46 E|H spak/sprǣc/talk、#52 C|H lost/loste/forlēas/laas/lose、#69 D|E wrote/wroot/wrāt/rait/write。いずれも語幹母音交替等の総合的単一語で、ja の E:話し H:た のような分離可能な時制接尾辞を持たない。pcm の無屈折形 (talk/lose/write) も時制マーカー単一トークンなし。
2. **古英語 portmanteau / 単一統合語**: #38 A|D heonan (=「ここから」の単一副詞、from+here が一語)、#53 en_ang C|E blōwaþ (助動詞を持たない総合動詞)。
3. **AAVE ゼロコピュラの欠落**: #53 en_aave C|E bloomin' — be 動詞が型論的に省略され分離すべきトークンが存在しない (欠落=KEEP)。
4. **複合名詞 (部分のみ分離)**: #77 en_ang B|D|E be þǣm costnungāgieldum — 前置詞 be(by) は分離可能トークンとして D に切り出し SPLIT したが、残る「þǣm costnungāgieldum」の costnungāgieldum は test+results を一語に融合した古英語複合名詞のため E|B のまま KEEP。
5. **融合否定縮約 (語幹改変・接語)**: #89 B|C cain't/cannae/cyaan — 否定が接語的に法助動詞へ融合し語幹も改変 (cain-/canna-/cyaa-)。ref の can+'t はアポストロフィ境界に依存するが方言形はその境界を喪失・改変しており、接語融合として KEEP。

隣接同一役割の新規発生: なし (全 SPLIT は連続かつ役割相違を確認)。

## レビュアー再評価 — round 10 (@creolemorphsyn)

開発チームの round 9 包括スイープ (SPLIT 38 / KEEP 13) について、代表的な全型を `.wf_langmap_query.mjs` でライブ照合しました。**SPLIT 38 件はすべて実機に正しく反映済み**で、**KEEP 13 件の言語的非分離理由もいずれも妥当**です。退行 (regression) は検出されませんでした。ただし精査の過程で、スイープが「過去形 C|H の KEEP」のみを判定して見落とした **#52 の所有詞融合 (enm/en_ang/sco/jam)** を新規 actionable として提起します。

### SPLIT 38 件 — 実機検証 (✓ 全件反映)

- **限定詞+名詞**: #48 ✓ `E:that B:picture show/pleye/scēawunge/film` (en_app/enm/en_ang/sco)。#73 ✓ `G:ever'/every/ǣlce/ilka C:night/nyght/nihte/nicht`。#84 ✓ `E:last/ǣrre D:wike/wucan` (enm/en_ang)。**ACCEPT。**
- **所有+名詞**: #51 en_aave ✓ `E:My A:grandmama`。**ACCEPT。**
- **前置詞+名詞**: #53 ✓ `D:in/on/for A:the garden/þǣm gearde/the garden` (enm/en_ang/sco/pcm)。#69 ✓ `H:to/tō/tae/give C:his folks/...` (en_aave/en_app/en_south/enm/en_ang/sco)。#73 ✓ `F:on/upon/for B:my bed/...` (enm/en_ang/sco/pcm)。**ACCEPT。**
- **数量詞+名詞**: #85 ✓ `E:māre/mair B:wæter/watter` (en_ang/sco)。**ACCEPT。**
- **助動詞/相マーカー+動詞**: #53 ✓ `E:are/ben/are/don C:a-bloomin'/blosmynge/bloomin/open` (en_app/en_south/enm/sco/pcm)。en_ang `C|E:blōwaþ` (総合動詞)・en_aave `C|E:bloomin'` (ゼロコピュラ) は KEEP で正当。**ACCEPT。**
- **動詞/動名詞+場所句**: #80 ✓ `B:studyin'/leornian/to studie F:abroad/on ūtlande/in strange londes` (en_aave/en_app/en_south/enm/en_ang/sco)。**ACCEPT。**
- **冠詞+形容詞+名詞**: #80 ✓ `I:a G:real valuable/right good/right valuable/precious/valuable C:experience` (en_aave/en_app/en_south/enm/sco)、en_ang は冠詞なしで `G:dēorwyrðe C:āfandung`。**ACCEPT。**

### KEEP 13 件 — 再評価 (✓ 全件妥当)

- **総合的過去形動詞** (#46 E|H spak/sprǣc・#52 C|H lost/loste/forlēas/laas/lose・#69 D|E wrote/wroot/wrāt/rait/write): ライブ確認。母音交替型の総合単一語で分離可能な時制接尾辞なし。pcm 無屈折形も単一トークン。en 参照も同融合。**KEEP に同意。** (なお #46 sco `E:talk H:ed`・jam `H:did E:taak`、#52 en_south `H:done C:lost` は分析的形で正しく分離されており整合。)
- **古英語 portmanteau** (#38 en_ang `A|D:heonan` = from+here の一語副詞・#53 en_ang `C|E:blōwaþ`): ライブ確認。分離可能トークンなし。**KEEP に同意。**
- **AAVE ゼロコピュラ欠落** (#53 en_aave `C|E:bloomin'`): be が型論的省略。分離すべきトークンが存在しない。**KEEP に同意。**
- **複合名詞** (#77 en_ang `E|B:þǣm costnungāgieldum`、前置詞 `D:be` は分離済): costnung-āgieldum は test+results を一語化した OE 複合名詞で内部分離不能。**KEEP に同意。**
- **融合否定縮約** (#89 `B|C:cain't/cannae/cyaan`): 否定が接語的に法助動詞へ融合し語幹改変。`B:no C:fit` (pcm)・`B:ne C:mæg` (en_ang)・`B:kan C:nat` (enm) は2語で正しく分離済。**KEEP に同意。**

### 【新規・確実】#52 enm/en_ang/sco/jam — 所有詞 `my/mīnne/ma/mi` が名詞 B に融合 (分離可能・兄弟が分割済)

- **Current:** enm `B:「my purs」`／en_ang `B:「mīnne wǣdpung」`／sco `B:「ma wallet」`／jam `B:「mi walit」` (いずれも所有詞+名詞を B 1セルに融合)。
- **Problem:** 同一文 #52 で en 参照および sibling 変種 en_aave/en_app/en_south/pcm はすべて `E:「my」 B:「wallet」` と所有詞を E に分離済み (ライブ確認)。所有詞 `my/mīnne/ma/mi` はいずれも独立語であり分離可能。round 9 スイープは #52 については「過去形 C|H の KEEP」のみを判定し、この所有詞融合 (E|B 相当) を判定対象から落としている。**分割優先方針 (owner directive) に照らし、分離可能な所有詞が隣接名詞に膠着している以上、SPLIT が必須。** 分割後は `…C|H:loste E:my B:purs F:at…` のように異なる role-letter (E≠B) となり、隣接同一役割は生じず surface も不変。
  - 補足: round 4 で本件を【要検討・強制せず】としたが、それは「所有詞を名詞句に含める設計でも一貫していれば許容」という条件付きであった。実機では群内多数 (en_aave/en_app/en_south/pcm) が分離しており設計は分離側に統一されているため、enm/en_ang/sco/jam の融合は一貫性を欠く未分割であり、許容条件を満たさない。
- **Proposed fix:** enm `E:「my」 B:「purs」`／en_ang `E:「mīnne」 B:「wǣdpung」`／sco `E:「ma」 B:「wallet」`／jam `E:「mi」 B:「walit」`。

### スコアカード (round 10)

- round 9 SPLIT 38 件: 代表全型を実機照合し全件反映を確認 — ✓
- round 9 KEEP 13 件: 言語的非分離理由いずれも妥当 — ✓ (dev と一致)
- 退行 (regression): なし
- 新規 actionable 指摘: **1件** (#52 enm/en_ang/sco/jam 所有詞融合の分割)
- 私の追加 CONCEDE: 0件
- 隣接同一役割の残存: なし

dev の分割作業は全件正確かつ低リスクで質が高い。残る唯一の actionable は、過去ラウンドで【要検討】に留めたまま双方が確定処理を怠った **#52 の所有詞融合** で、群内多数が既に分離済み・所有詞は分離可能語・分割優先方針に明確に合致するため、修正必須と判断します。

**ファイル状態: OPEN**
次の1点のみ: #52 で所有詞を名詞 B から分離し E に移す — enm `E:my B:purs`／en_ang `E:mīnne B:wǣdpung`／sco `E:ma B:wallet`／jam `E:mi B:walit` (en/en_aave/en_app/en_south/pcm と統一)。

## 開発チーム回答 — round 11 (作業者)

round 10 で唯一残った actionable（#52 enm/en_ang/sco/jam の所有詞融合）を `.wf_langmap_query.mjs` でライブ照合し、分割優先方針に基づき適用した。

### #52 enm/en_ang/sco/jam — 所有詞 my/mīnne/ma/mi を名詞 B から分離し E へ — APPLIED（本ラウンドでオーケストレータ適用）

ライブ照合:
- enm `A:I C|H:loste B:my purs F:at D:the chepyng`
- en_ang `A:Ic C|H:forlēas B:mīnne wǣdpung F:æt D:þǣm cēape`
- sco `A:A C|H:lost B:ma wallet F:at D:the mercat`
- jam `A:Mi C|H:laas B:mi walit F:a D:di maakit`

同一文の参照 en および sibling 変種 en_aave/en_app/en_south/pcm はいずれも `E:my B:wallet` と所有詞を E に分離済み（ライブ確認）。所有詞 my/mīnne/ma/mi はいずれも独立語で分離可能、E≠B で隣接同一役割を生まず、surface も不変。群内多数が分離側に統一されており、enm/en_ang/sco/jam の融合は一貫性を欠く未分割であるため、レビュアーの SPLIT 必須判定に同意し適用。

- enm → `A:I C|H:loste E:my B:purs F:at D:the chepyng`
- en_ang → `A:Ic C|H:forlēas E:mīnne B:wǣdpung F:æt D:þǣm cēape`
- sco → `A:A C|H:lost E:ma B:wallet F:at D:the mercat`
- jam → `A:Mi C|H:laas E:mi B:walit F:a D:di maakit`

過去形 C|H（loste/forlēas/lost/laas、屈折語内融合）は en 同様 KEEP で維持。残る actionable はこれで解消。

## レビュアー再評価 — round 12 (@creolemorphsyn)

開発チーム回答 round 11 で APPLIED とされた #52 所有詞分割（enm/en_ang/sco/jam）を `.wf_langmap_query.mjs` でライブ全件照合し、あわせて過去ラウンドの確実案件・分割案件を退行(regression)チェックしました。**round 10 で唯一残した actionable（#52 所有詞融合）は4言語すべて実機に正しく反映済み**で、退行は皆無、新規 actionable はゼロです。

### round 10 残課題 — #52 所有詞 E|B 分割 → ✓ ACCEPT（4件すべて解消確認）

ライブ実値:
- **enm** ✓ `A:I C|H:loste E:my B:purs F:at D:the chepyng` — 所有詞 `my` を E に分離、B は `purs` 単独。
- **en_ang** ✓ `A:Ic C|H:forlēas E:mīnne B:wǣdpung F:æt D:þǣm cēape` — `mīnne`(対格所有詞)を E に分離。
- **sco** ✓ `A:A C|H:lost E:ma B:wallet F:at D:the mercat` — `ma` を E に分離。
- **jam** ✓ `A:Mi C|H:laas E:mi B:walit F:a D:di maakit` — `mi`(所有詞)を E に分離。

いずれも (i) E≠B で異なる role-letter、(ii) 隣接同一役割なし、(iii) surface 不変、(iv) 同文の en/en_aave/en_app/en_south/pcm の `E:my B:wallet` と群内整合。所有詞 my/mīnne/ma/mi は分離可能な独立語であり、分割優先方針(owner directive)に完全合致。**全件 ACCEPT。** 過去形 C|H（loste/forlēas/lost/laas、母音交替・屈折語内融合）は en 同様 KEEP のまま維持されており正当。

### 退行チェック（過去ラウンドの確実・分割案件を全件再照合）

- **jam 否定助動詞**: #10 `D:kyan`／#30 `E:kyan`／#68 `A:Mi D:kyan`（肯定形＋主語助動詞分割）— 維持。✓
- **#81 jam セル破損**: `B:Mi hed D:a hat mi C:tide`（役割 A 重複解消・`ed→hed`）— 維持。✓
- **#94 en_ang**: `A:Geþēode`（tungol=星 の誤用解消）— 維持。✓
- **#36 jam 存在文**: `A:Nuf B:piipl C:a di stieshan`（Nuf を A へ）— 維持。✓
- **#33 pcm／#5 jam 畳語 well well**: `C:well well` 単一セル化・D 重複解消 — 維持。✓
- **#46 sco 3-way 融合**: `F:wi G:ma B:freend` — 維持。enm `F:with G:my B:felawe`／en_ang `F:mid G:mīnum B:frēonde` とも整合。✓
- **#89 否定辞2語**: pcm `B:no C:fit`／en_ang `B:ne C:mæg` — 維持。sco `cannae`/jam `cyaan`/en_app `cain't` 単一語融合は KEEP で正当。✓
- **#70 前置詞句3-way**: enm `D:at E:nyne of the clokke F:at even`／en_ang `D:æt E:9 F:ǣfentīdum`／pcm `D:for E:nine o'clock F:night` — 維持。✓

### 新規 actionable 指摘

精査の結果、新たな明白エラー・未分割の分離可能要素は検出されませんでした（**0件**）。#52 の `D:the chepyng`(enm)／`D:di maakit`(jam) 等の冠詞＋名詞は、参照 en も `D:the market` を1セルで保持しており群内整合が取れているため、過剰分割は不要。担当8変種すべてで、分離可能な助動詞・前置詞・所有詞・畳語・否定辞は分割済みであり、残る融合（過去形屈折・OE 複合名詞 costnungāgieldum・単一語否定 cannae/cyaan/cain't・heonan 等）はいずれも分離不能な正当融合です。

### スコアカード（round 12）

- round 10 残課題（#52 所有詞 E|B 分割、enm/en_ang/sco/jam の4件）: ✓ 全件実機反映を確認・解消
- 過去ラウンドの確実案件・分割案件: 退行なし（全件維持）
- 新規 actionable 指摘: 0件
- 私の追加 CONCEDE: 0件（既存の譲歩で確定済み）
- 隣接同一役割の残存: なし

dev の round 11 適用は4件すべて正確かつ低リスクで、全要求が実機で満たされています。担当8変種について、確実エラー・分割粒度の統一・方言/古英語/クレオールの自然さのいずれの観点でも、actionable な残課題は存在しません。

**ファイル状態: CLOSED — 残課題なし**
