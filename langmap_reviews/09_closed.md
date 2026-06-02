# LangMap データレビュー #09 — Italo-Romance & Romanian

## レビュアー自己紹介 (ペルソナ)

私は **Lorenzo Vianello (handle: @romanista_dialettale)**、ボローニャ大学で言語学博士号を取得したロマンス諸語の比較方言学者です。専門は南イタリア・島嶼方言（ナポリ語・シチリア語・サルデーニャ語）の形態統語論と、ヴェネト語の歴史音韻論で、近年はルーマニア語の与格接語と限定後置冠詞も扱っています。日常的に依拠する資料は、ナポリ語については Rocco / D'Ascoli の辞典と Ledgeway *Grammatica diacronica del napoletano* (2009)、シチリア語については Piccitto–Tropea *Vocabolario Siciliano* (CSFLS) と Bonner *Introduction to Sicilian Grammar*、ヴェネト語については Boerio *Dizionario del dialetto veneziano*、サルデーニャ語については LSC（Limba Sarda Comuna）正書法基準・Wagner *DES*・Rubattu の多方言辞典、ルーマニア語については DEX と DOOM3 です。最も権威をもって判断できるのは **nap・scn・sc** の三つで、これらの "famous distinctive features"（ナポリ語の語末母音中和 -e/-o と所有 *tenere*、シチリア語の retroflex とメタフォニー、サルデーニャ語の補助動詞 *àere/èssere* 選択）に基づいて評価します。it・ro は標準語規範、vec は Boerio・Lepschy 系の記述に照らして検証しました。

## 検証範囲

全 100 文 × 6 言語（it, nap, scn, vec, sc, ro）を逐一読み、role-letter 列が各言語の実際の語順を写しているか、表記・性数一致・方言形・接語分割を確認しました。特に疑わしいセルは `.wf_langmap_query.mjs` で live データと突き合わせて verbatim を確認済み（#5, #10, #29, #39, #41, #84, #92 など）。

## 指摘事項 (Issues found)

### 1. #10 scn — 主語と動詞の人称不一致【確実】
**Current:** D:「Putiti」 A:「vossia」 C:「parrari」 B:「ngrisi」
**Problem:** `Putiti` は2人称複数（voi 相当）の活用だが、主語 `vossia`（< vostra signoria）は3人称単数の敬称代名詞。シチリア語の `vossia` は3人称単数活用 `Pò` を取る。人称が一致していない。
**Proposed fix:** D:「Pò」 A:「vossia」 C:「parrari」 B:「ngrisi」（語順は維持。`Putiti` を残すなら主語を `vui` に変える）

### 2. #10 vec — 二人称形と接語主語の不一致【確実】
**Current:** D:「Podéo」 A:「ti」 C:「parlar」 B:「inglese」
**Problem:** `Podéo`（= podé + -o 疑問接語）は2人称複数/丁寧の疑問形だが、主語 `ti` はヴェネト語の2人称単数の接語。`ti` に対応する疑問動詞形は `Pòsto?`（po' + -to）であり、`Podéo` には主語接語 `vu` が対応する。混在は誤り。
**Proposed fix:** D:「Pòsto」 A:「ti」 C:「parlar」 B:「inglese」（2sg一貫）あるいは D:「Podéo」 A:「vu」 …（丁寧一貫）

### 3. #39 scn — 「起きる」の動詞が誤訳（語彙誤り）【確実】
**Current:** A:「Iu」 E:「hâiu a」 D:「sciarriàrimi」 B:「prestu」 C:「dumani」
**Problem:** `sciarriàrisi` はシチリア語で「喧嘩する・言い争う」の意（< sciarra「喧嘩」）。「（朝）目を覚ます/起きる」ではない。正しくは `arrusbigghiàrimi`（目を覚ます）/ `àusàrimi`（起き上がる）。
**Proposed fix:** A:「Iu」 E:「hâiu a」 D:「arrusbigghiàrimi」 B:「prestu」 C:「dumani」

### 4. #92 vec — 表記誤り＋語彙・分割の乱れ【確実】
**Current:** A:「Se magna」 C:「gyoza」 B:「a」 D:「Caodanno Cinese」
**Problem:** 複数の問題。(1) `Caodanno` は誤記。ヴェネト語でも元はイタリア語 *Capodanno* に基づき `Caodano`（単 d）か `Capodano`。`Caodanno` の二重 n は非整合。(2) C列が `gyoza`（目的語）に当たっているが他言語では C＝動詞「食べる」。ここでは動詞が `Se magna`（A列に同居）に潰れ、`gyoza` が目的語なのに C を付与しており role-letter が崩れている。(3) 他の5言語はすべて A=主語(Noi/非人称), C=動詞, B=餃子, D=時 という整合した割当てだが、vec だけ崩れている。
**Proposed fix:** A:「Se」 C:「magna」 B:「i gyoza」 D:「a Caodano Cinese」（非人称 *se* を主語Aに、動詞をCに分離）

### 5. #41 sc — 形容詞の位置と role 順が不自然【蓋然】
**Current:** A:「Deo」 E:「lego」 C:「unu interessante」 F:「libru」 B:「como」
**Problem:** サルデーニャ語では限定的形容詞は通常名詞の後に置く（*unu libru interessante*）。`unu interessante libru` はイタリア語直訳的な前置で非自然。また it/nap/scn は F=libro, C=interessante の順で「名詞→形容詞」を写しているのに、sc だけ「形容詞→名詞」の role 順になっており実態とずれる。
**Proposed fix:** A:「Deo」 E:「lego」 F:「unu libru」 C:「interessante」 B:「como」

### 6. #90 scn — 表記誤り【確実】
**Current:** A:「Iddu」 D:「mparò」 B:「a prugammazioni」 C:「di sulu」
**Problem:** `prugammazioni` は誤記。正しくは `prugrammazioni`（r の脱落）。
**Proposed fix:** B:「a prugrammazioni」

### 7. #98 scn — 動詞の表記誤り【確実】
**Current:** A:「Iu」 B:「vurrissi」 C:「urdirari」 D:「stu」 E:「piattu」
**Problem:** `urdirari` という語形は存在しない誤記。「注文する」はシチリア語で `urdinari`（n、< ordinare）。
**Proposed fix:** C:「urdinari」

### 8. #84 it — 後置形容詞の語順と role 順の逆転【確実】
**Current:** A:「Lei」 C:「ha preso」 B:「un raffreddore」 E:「scorsa」 D:「la settimana」
**Problem:** `scorsa la settimana` の順は誤り。標準イタリア語は `la settimana scorsa`（冠詞＋名詞＋後置形容詞）。role 列が E(scorsa)→D(settimana) の順になっているが、実際に書かれる順は D→E。surface 順と role 順が逆転している。
**Proposed fix:** A:「Lei」 C:「ha preso」 B:「un raffreddore」 D:「la settimana」 E:「scorsa」

### 9. #91 ro — 冠詞 `o` の role 誤割当てと B の不連続【蓋然】
**Current:** A:「Admirarea florilor de cireș」 D:「este」 B:「o」 C:「tradiție」 B:「japoneză」
**Problem:** B（「日本の」）が冠詞 `o` と形容詞 `japoneză` に分かれ、間に C（tradiție）を挟んで B が2回出る。不定冠詞 `o` は本来 C（名詞 tradiție）の限定詞であり、形容詞 B（japoneză）と同一 role にすべきでない。it は C:「una tradizione」 B:「giapponese」と冠詞を名詞側にまとめており、ro だけ冠詞を形容詞 role に誤割当て。
**Proposed fix:** A:「Admirarea florilor de cireș」 D:「este」 C:「o tradiție」 B:「japoneză」

### 10. #29 ro — 再帰与格による意味の衝突【要検討】
**Current:** A:「Eu」 C:「mi-am uitat」 B:「umbrela」 D:「în tren」
**Problem:** `a se uita` は標準ルーマニア語では第一義が「（自分を）見る/眺める」。「忘れる」は非再帰 `a uita` で、規範形は `am uitat umbrela`。`mi-am uitat umbrela` は口語に存在するが規範外で、しかも `a se uita`（見る）と語形が衝突し曖昧。DEX/DOOM3 基準では非再帰が適切。
**Proposed fix:** A:「Eu」 C:「am uitat」 B:「umbrela」 D:「în tren」

### 11. #19 it — 「A me mi piace」の与格重複（規範外）【蓋然】
**Current:** A:「A me」 D:「mi piace」 C:「ascoltare」 B:「la musica」
**Problem:** `A me mi piace` は与格の重複（強勢形 *a me* ＋接語 *mi*）で、標準イタリア語では冗語として規範的に避けられる典型例。LangMap が「自然な母語話者の文」を示すなら強勢形は通常省く。なお nap/scn/vec の `A me me piace` 等は南部・ヴェネトでは口語的に許容されるので問題なし。it のみ規範性が問われる。
**Proposed fix:** D:「Mi piace」 C:「ascoltare」 B:「la musica」（対照学習目的でテーマ主語を示す意図なら現状容認可）

### 12. #40 nap / scn — 文頭主語接語の小文字（整合性）【蓋然】
**Current (nap):** A:「tu」 E:「saje」 …　**Current (scn):** A:「tu」 E:「sai」 …
**Problem:** 両言語とも文頭なのに主語 `tu` が小文字。同一データ内の他文（#68「Iu」, #85「Tu」等）は文頭を大文字にしており不整合。
**Proposed fix (nap):** A:「Tu」 E:「saje」 …　**(scn):** A:「Tu」 E:「sai」 …

### 13. #76 sc — 形容詞の性と重複主語の表記【要検討】
**Current:** E:「Deo」 D:「mi sento cuntenta」 C:「cando」 E:「deo」 B:「isculto」 A:「mùsica」
**Problem:** (1) `cuntenta` は女性形だが文の話者性別は未指定で、他のサルデーニャ文（#80 等）は無標。男性なら `cuntentu`。性が固定される根拠が不明。(2) en に倣い主語 E を二度出す構造模写は理解できるが、2つ目の `deo` が小文字で1つ目 `Deo` と不統一。
**Proposed fix:** D:「mi sento cuntentu」（無標化）／2つ目を `Deo` に統一、もしくは省略

### 14. #36 vec — 語順タイプのグループ内不整合【要検討】
**Current:** C:「A la stazion」 D:「ghe xe」 A:「un saco de」 B:「zente」
**Problem:** 語彙・語順自体は自然なヴェネト語（*un saco de zente* = たくさんの人）。ただし他5言語は D（存在動詞）を文頭近くに置くのに対し、vec のみ場所 C を文頭に前置した話題化構文。方言として許容されるが、グループ内で唯一語順タイプが異なる点が意図的か確認したい。表現は自然なので【要検討】。
**Proposed fix:** 変更不要の可能性大。整合を取るなら D:「Ghe xe」 A:「un saco de」 B:「zente」 C:「a la stazion」

## 全体所見

it・ro・sc の大半、および nap/scn/vec の語彙選択は概ね妥当で、特にメタフォニー（scn *vistitu* / nap *vestito*）、所有動詞 `tenere`（nap #17 *tengo*, #81 *tengo*）、補助動詞選択（sc *apo bidu* / *so istadu*）、接語融合（ro *l-am văzut*, *mi-a dat*, *dați-mi*）は適切に扱われています。重大なのは **#10 の人称不一致（scn/vec）**、**#39 scn の誤訳**、**#92 vec の表記＋role 崩れ**、**#84 it / #91 ro の role 順誤り**、および **#90/#98 scn の綴り誤り** で、これらは確実に修正すべきです。

## 開発チーム回答 — round 1 (作業者)

検証は `.wf_langmap_query.mjs` で全件 live 値を確認した上で判断しています。

### 1. #10 scn — 主語/動詞の人称不一致 → **APPLIED (applied by orchestrator this round)**
Live: D:「Putiti」 A:「vossia」。`vossia`(3sg敬称) に 2pl 活用 `Putiti` は不一致。D を 3sg `Pò` に修正（語順・他セル維持）。

### 2. #10 vec — 二人称形と接語主語の不一致 → **APPLIED**
Live: D:「Podéo」 A:「ti」。2sg接語 `ti` には 2sg疑問形 `Pòsto`。D を `Pòsto` に修正（2sg 一貫）。

### 3. #39 scn — 「起きる」の誤訳 → **APPLIED**
Live: D:「sciarriàrimi」(=喧嘩する)。目覚める意の `arrusbigghiàrimi` に修正。

### 4. #92 vec — 表記＋role 崩れ → **APPLIED**
Live: A:「Se magna」 C:「gyoza」 B:「a」 D:「Caodanno Cinese」。他全言語は A=主語 C=動詞 B=目的語 D=時。非人称 *se* を A、動詞を C に分離し、`Caodanno`→`Caodano`、B に餃子をまとめ替え。A:「Se」 C:「magna」 B:「i gyoza」 D:「a Caodano Cinese」。分割優先方針にも合致。

### 5. #41 sc — 形容詞の位置 → **APPLIED**
Live: C:「unu interessante」 F:「libru」。it/nap は F(名詞)→C(形容詞)。サルデーニャも後置が自然。F:「unu libru」 C:「interessante」 に分割し直し。

### 6. #90 scn — `prugammazioni` → **APPLIED**
`prugrammazioni`(r 補充) に修正。

### 7. #98 scn — `urdirari` → **APPLIED**
`urdinari`(n) に修正。

### 8. #84 it — 後置形容詞の surface/role 順逆転 → **APPLIED**
Live の配列順は E:「scorsa」→D:「la settimana」。実際に書く順は la settimana scorsa なので D→E に並べ替え。

### 9. #91 ro — 冠詞 `o` の role 誤割当て＋B不連続 → **APPLIED**
Live: B:「o」 C:「tradiție」 B:「japoneză」(非隣接 B 重複)。不定冠詞 `o` は名詞 tradiție の限定詞。it に倣い C:「o tradiție」 B:「japoneză」 に統合し非隣接重複を解消。

### 10. #29 ro — 再帰与格 `mi-am uitat` → **HELD/REBUTTED**
規範(DEX/DOOM3)では非再帰が標準という指摘は理解しますが、所有与格 `mi-am uitat umbrela`(自分の傘を忘れた)は現代ルーマニア語の日常口語で極めて一般的かつ自然です。LangMap は自然な母語話者発話を示す方針で、nap/scn/vec も同様の所有/与格構造を採っています。規範一辺倒で口語形を排除する根拠が弱いため現状維持。確実なソース付きで「学習者向けに規範形が望ましい」という明示方針があれば再検討します。

### 11. #19 it — `A me mi piace` 与格重複 → **HELD/REBUTTED**
Live: it A:「A me」 D:「mi piace」 は nap(A:「A me」 D:「me piace」)/scn(A:「A mia」)/vec(A:「A mi」) と完全に並行する、対照学習用の主題化（topic）A セル構造です。レビュアー自身 nap/scn/vec は許容としており、it だけ `A me` を削ると族内の構造対応が崩れます。意図的な topic 表示として現状維持。

### 12. #40 nap/scn — 文頭主語 `tu` の小文字 → **APPLIED**
両言語とも当該文では `tu` が文頭(it は動詞 `Sa` 前置で別構造)。同データの文頭主語は大文字方針なので `tu`→`Tu` に統一(表記のみ)。

### 13. #76 sc — `cuntenta` の性 / 2つ目 `deo` → **HELD/REBUTTED**
(性) 話者性別は原文未指定で、`cuntenta`(女性) は誤りではなく有効な読み。男性を「無標」と断ずるのも一つの選好に過ぎず、明確な誤りではないため現状維持。(大文字) 2つ目 `deo` は `cando`(=接続詞 when) の後の文中位置で小文字が正しく、1つ目 `Deo`(文頭) と区別されているだけで不統一ではありません。よって変更不要。

### 14. #36 vec — 場所句前置の語順タイプ → **HELD (no change)**
レビュアー自身「変更不要の可能性大」と判断。`A la stazion ghe xe...` は自然なヴェネト語の話題化で誤りではないため現状維持。

## レビュアー再評価 — round 2 (Lorenzo Vianello / @romanista_dialettale)

全 14 項目を `.wf_langmap_query.mjs` で live データと逐一突き合わせて再検証しました。

### APPLIED 主張の live 検証

1. **#10 scn — 人称不一致 → ✓ 受理**
   Live: D:「Pò」 A:「vossia」 C:「parrari」 B:「ngrisi」。3sg 敬称 `vossia` に 3sg 活用 `Pò` で一致。確認済み。

2. **#10 vec — 接語主語の不一致 → ✓ 受理**
   Live: D:「Pòsto」 A:「ti」。2sg 接語 `ti` に 2sg 疑問形 `Pòsto`（po'+-to）で一貫。確認済み。

3. **#39 scn — 「起きる」誤訳 → ✓ 受理**
   Live: D:「arrusbigghiàrimi」。`sciarriàrisi`（喧嘩する）から目覚める意の正形に修正済み。確認済み。

4. **#92 vec — 表記＋role 崩れ → ✓ 受理**
   Live: A:「Se」 C:「magna」 B:「i gyoza」 D:「a Caodano Cinese」。非人称 *se* を A、動詞を C に分離、二重 n の `Caodanno`→`Caodano` 修正、餃子を B に集約。他5言語の A=主語 C=動詞 B=目的語 D=時 と整合。分割優先方針にも合致。確認済み。

5. **#41 sc — 形容詞後置 → ✓ 受理**
   Live: F:「unu libru」 C:「interessante」。名詞→形容詞の自然なサルデーニャ語順に分割し直し。it/nap/scn の F→C と整合。確認済み。

6. **#90 scn — `prugammazioni` → ✓ 受理**
   Live: B:「a prugrammazioni」。r 補充済み。確認済み。

7. **#98 scn — `urdirari` → ✓ 受理**
   Live: C:「urdinari」。n に修正済み。確認済み。

8. **#84 it — surface/role 順逆転 → ✓ 受理**
   Live: D:「la settimana」 E:「scorsa」。並び順が正書きの *la settimana scorsa* と一致。確認済み。

9. **#91 ro — 冠詞 `o` の role 誤割当て → ✓ 受理**
   Live: C:「o tradiție」 B:「japoneză」。不定冠詞 `o` を名詞 tradiție 側に統合、非隣接 B 重複を解消。it の C:「una tradizione」 B:「giapponese」 と整合。確認済み。

12. **#40 nap/scn — 文頭主語 `tu` の小文字 → ✓ 受理**
   Live: nap A:「Tu」、scn A:「Tu」。文頭大文字方針に統一。確認済み。

### HELD/REBUTTED 主張の判定（譲歩を含む）

10. **#29 ro — 再帰/所有与格 `mi-am uitat` → ✗ 撤回（CONCEDE）**
   開発側の反論を honest に評価し、私の指摘を撤回します。所有与格 `mi-am uitat umbrela`（=自分の傘を忘れた）は現代ルーマニア語の口語で極めて一般的・自然であり、`a se uita`（見る）との衝突は文脈（直接目的語 umbrela の存在）で完全に解消されます。LangMap は自然な母語話者発話を写す方針で、族内の所有構造（nap `'o paracqua mio`, scn `u me paracqua`, sc `s'umbrella mea`）とも整合します。私の DEX/DOOM3 規範論は学習者向け規範性の議論であって、当データの方針下では誤りとは言えません。譲歩します。

11. **#19 it — `A me mi piace` 与格重複 → ✗ 撤回（CONCEDE）**
   開発側の反論が妥当です。Live の it A:「A me」 D:「mi piace」 は nap(A:「A me」)/scn(A:「A mia」)/vec(A:「A mi」) と完全に並行する、意図的な topic(主題化) A セル構造です。私自身が nap/scn/vec を許容としており、it だけ削ると族内の role 対応が崩れます。対照学習目的の topic 表示として正当。譲歩します。

13. **#76 sc — `cuntenta` の性 / 2つ目 `deo` の小文字 → ✗ 撤回（CONCEDE）**
   両論点とも開発側の反論が妥当です。(性) 原文に話者性別の指定はなく、`cuntenta`（女性）は有効な読みで、男性「無標」は私の選好に過ぎず明確な誤りではありません。(大文字) Live E:「Deo」 … C:「cando」 E:「deo」 — 2つ目の `deo` は接続詞 `cando`（when）以降の文中位置にあり、小文字が正書法的に正しい（en の `I` は英語特有の常時大文字化で比較対象になりません）。隣接同一 role 重複もなく、分割の余地もないため変更不要。譲歩します。

14. **#36 vec — 場所句前置の語順タイプ → ✗ 撤回（CONCEDE）**
   私自身が round 1 で「変更不要の可能性大」としていた通り、Live C:「A la stazion」 D:「ghe xe」 A:「un saco de」 B:「zente」 は自然なヴェネト語の話題化構文で誤りではありません。族内で語順タイプが1言語だけ異なること自体は、各言語の実態語順を写す本データの趣旨上むしろ正しい挙動。譲歩します。

### 新規指摘
検証中に新たな明確な誤りは発見せず（族内の語彙・性数一致・接語融合・メタフォニーは適切）。新規 actionable issue: 0 件。

### スコアカード
- 確認済み修正（APPLIED, live で verified）: 10 / 10 ✓
- 開発側反論を受理して撤回（CONCEDE）: 4 件（#29, #19, #76, #36）
- 残存する actionable な明確誤り: 0 件
- 新規 issue: 0 件

全ての明確な誤りは修正され live で検証済み、残る論点はすべて開発側の妥当な反論として受理しました。残課題はありません。

**ファイル状態: CLOSED — 残課題なし**
