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

## ラウンド4 監査 — 分割粒度・方言自然さ (レビュアー)

ラウンド4は所有者指示に従い「より細かく分割する」方向に振った再監査です。機械抽出ターゲット（⛔38 / ⚠️52 / ▼62）を live で確認し、標準語 it・ro 行が同一文で既に達成している分割を「正解の証拠」として用いました。族全体で同型の融合が反復しているため、文単位でまとめ、適用言語を併記します。役割文字（A..K）は同一文内で他言語が示す分割に揃えます。

### A. 分割推奨（SPLIT） — 同一文で it/ro が分割済み＝分離可能が証明されているもの

**#43 「このレストランの料理は…」 ⛔ A|D|E 融合 → 3分割【確実】**
it が `A:「di」 D:「questo」 E:「ristorante」` と完全分割済み。前置詞・指示詞・名詞は別語で分離可能。
- nap: A|D|E:「'e chisto ristorante」 → A:「'e」 D:「chisto」 E:「ristorante」
- scn: A|D|E:「di chistu risturanti」 → A:「di」 D:「chistu」 E:「risturanti」
- vec: B:「El magnar de」 A|D|E:「sto ristorante」 → B:「El magnar」 A:「de」 D:「sto」 E:「ristorante」（前置詞 de を B から剥がし A へ）
- sc: A|D|E:「de custu ristorante」 → A:「de」 D:「custu」 E:「ristorante」
- ro: A|D|E:「de la acest restaurant」 → A:「de la」 D:「acest」 E:「restaurant」（複合前置詞 de la は一語扱いで A）

**#45 「この国では冬は…」 ⛔ A|E|F 融合 → 3分割【確実】**
it `E:「In」 F:「questo」 A:「paese」`、ro `E:「În」 F:「această」 A:「țară」` が分割済み。
- nap: A|E|F:「Int'a chisto paese」 → E:「Int'a」 F:「chisto」 A:「paese」
- scn: A|E|F:「Nti chistu paisi」 → E:「Nti」 F:「chistu」 A:「paisi」
- vec: A|E|F:「In sto paexe」 → E:「In」 F:「sto」 A:「paexe」
- sc: A|E|F:「In custa natzione」 → E:「In」 F:「custa」 A:「natzione」

**#46 「友達と電話で…話した」 ⛔ B|F|G + E|H 融合 → 分割【確実】**
ro が `F:「cu」 B:「prietenul」 G:「meu」`、it が `E:「ho」 H:「parlato」` と分割済み。前置詞 cu/col/cun・名詞・所有はすべて別語。
- nap: B|F|G:「cu ll'amico mio」 → F:「cu」 B:「ll'amico」 G:「mio」 ／ E|H:「aggio parlato」 → E:「aggio」 H:「parlato」
- scn: B|F|G:「cu u me amicu」 → F:「cu」 G:「u me」 B:「amicu」 ／ E|H:「parrai」 は単一語の総合的過去（synthetic preterite）で助動詞語幹を分離できない→**KEEP**（下記C参照）
- vec: B|F|G:「col me amigo」 → F:「col」 G:「me」 B:「amigo」 ／ E|H:「go parlà」 → E:「go」 H:「parlà」
- sc: B|F|G:「cun s'amigu meu」 → F:「cun」 B:「s'amigu」 G:「meu」 ／ E|H:「apo chistionadu」 → E:「apo」 H:「chistionadu」

**#55 「毎日コーヒーを2杯…」 ⛔ B|E|F 融合 → 3分割【確実】**
it `E:「due」 F:「tazze di」 B:「caffè」`、ro `E:「două」 F:「cești de」 B:「cafea」` が分割済み。数詞・類別語・名詞は分離可能。
- nap: B|E|F:「ddoje tazze 'e cafè」 → E:「ddoje」 F:「tazze 'e」 B:「cafè」
- scn: B|E|F:「dui tazzi di cafè」 → E:「dui」 F:「tazzi di」 B:「cafè」
- vec: B|E|F:「do taze de cafè」 → E:「do」 F:「taze de」 B:「cafè」（なお vec は主語 A 欠落＝pro-drop で正当、ただし D:「Tuti i giorni」 のみ先頭は語順として可）
- sc: B|E|F:「duas tassas de caffè」 → E:「duas」 F:「tassas de」 B:「caffè」

**#69 「両親に長い手紙を…」 ⛔ B|F|G + C|H 融合 → 分割【確実〜蓋然】**
en/it 基準では F(冠詞)+G(形容詞)+B(名詞)。語順は各言語の実態に合わせる（名詞後置形容詞なら F→B→G）。
- nap: B|F|G:「'na lettera longa」 → F:「'na」 B:「lettera」 G:「longa」 ／ C|H:「ê geniture suoie」 → H:「ê」 C:「geniture suoie」【蓋然】（ê = a+'e 縮約前置詞を H に）
- scn: B|F|G:「na longa lèttra」 → F:「na」 G:「longa」 B:「lèttra」 ／ C|H:「ê so' genituri」 → H:「ê」 C:「so' genituri」【蓋然】
- vec: B|F|G:「na letera longa」 → F:「na」 B:「letera」 G:「longa」 ／ C|H:「ai so genitori」 → H:「ai」 C:「so genitori」
- sc: B|F|G:「una lìtera longa」 → F:「una」 B:「lìtera」 G:「longa」 ／ C|H:「a sos babbos suos」 → H:「a sos」 C:「babbos suos」
- ro: B|F|G:「o scrisoare lungă」 → F:「o」 B:「scrisoare」 G:「lungă」 ／ C|H:「părinților săi」 は**KEEP**（与格は語尾 -lor で総合的に表現、分離可能な前置詞 "to" が存在しない＝正当な ▼。下記C）

**#70 「店は午後9時に閉まる」 ⛔ B|D|E|F 融合 → 分割【確実】**
en は D(at)+E(9)+F(PM)。前置詞と数詞は分離可能。
- it: B|D|E|F:「alle 21」 → D:「alle」 E|F:「21」（alle=a+le を D に。21 はイタリア式24時制で「9PM」を一語で表すため E|F は KEEP 可、最低限 D を剥がす）
- nap: B|D|E|F:「a 'e nove 'e sera」 → D:「a 'e」 E:「nove」 F:「'e sera」
- scn: B|D|E|F:「a li novi di sira」 → D:「a li」 E:「novi」 F:「di sira」
- vec: B|D|E|F:「a le nove de sera」 → D:「a le」 E:「nove」 F:「de sera」
- sc: B|D|E|F:「a sas 9 de sero」 → D:「a sas」 E:「9」 F:「de sero」
- ro: B|D|E|F:「la ora 21」 → D:「la ora」 E|F:「21」（24時制一語、最低限 D 分離）

**#77 「テストの結果に驚いた」 ⛔ B|D|E 融合 → 分割【確実】**
it `D:「dai」 B:「risultati」 E:「del test」` が分割済み。
- nap: B|D|E:「d'ê risultate d'ô test」 → D:「d'ê」 B:「risultate」 E:「d'ô test」
- scn: B|D|E:「dî risultati dû test」 → D:「dî」 B:「risultati」 E:「dû test」
- vec: B|D|E:「dal risultato de l'esame」 → D:「dal」 B:「risultato」 E:「de l'esame」
- sc: B|D|E:「de sos resultados de s'esàmine」 → D:「de sos」 B:「resultados」 E:「de s'esàmine」
- ro: B|D|E:「de rezultatele testului」 → D:「de」 B:「rezultatele」 E:「testului」（testului は属格語尾で KEEP、前置詞 de のみ剥がす）

**#53 「庭の花が咲いている」 ⚠️ A|D 融合 → 2分割【確実】**
it `D:「nel」 A:「giardino」`、ro `D:「din」 A:「grădină」` が分割済み。
- nap: A|D:「int'ô giardino」 → D:「int'ô」 A:「giardino」
- scn: A|D:「ntô giardinu」 → D:「ntô」 A:「giardinu」
- vec: A|D:「del zardìn」 → D:「del」 A:「zardìn」
- sc: A|D:「de s'ortu」 → D:「de」 A:「s'ortu」

**#73 「猫は毎晩私のベッドで寝る」 ⚠️ B|F + C|G 融合 → 分割【確実】**
it `B|F:「sul mio letto」 G:「ogni」 C:「notte」`。前置詞 su/ncopp'/supra/pe と「毎」は分離可能。
- it: B|F:「sul mio letto」 → F:「sul」 B:「mio letto」（最低限前置詞剥がし。所有 mio は B 内）
- nap: B|F:「ncopp'ô lietto mio」 → F:「ncopp'ô」 B:「lietto mio」 ／ C|G:「ogne notte」 → G:「ogne」 C:「notte」
- scn: B|F:「supra u me lettu」 → F:「supra」 B:「u me lettu」 ／ C|G:「ogni notti」 → G:「ogni」 C:「notti」
- vec: B|F:「sul me leto」 → F:「sul」 B:「me leto」 ／ C|G:「ogni note」 → G:「ogni」 C:「note」
- sc: B|F:「in su letu meu」 → F:「in」 B:「su letu meu」 ／ C|G:「cada note」 → G:「cada」 C:「note」
- ro: B|F:「pe patul meu」 → F:「pe」 B:「patul meu」 ／ C|G:「în fiecare noapte」 → G:「în fiecare」 C:「noapte」

**#80 「留学は貴重な経験だと思う」 ⚠️ B|F + C|G 融合 → 分割【蓋然】**
it/ro が `B:「studiare」 F:「all'estero」` および `C:「esperienza」 G:「preziosa」`（it は I:「un'」冠詞も独立）と分割済み。
- nap: B|F:「ca studià fora」 → 接続詞 ca を分けて H:「ca」 B:「studià」 F:「fora」 ／ C|G:「n'esperienza preziosa」 → I:「n'」 C:「esperienza」 G:「preziosa」
- scn: B|F:「ca studiari fora」 → H:「ca」 B:「studiari」 F:「fora」 ／ C|G:「n'esperiènza priziusa」 → I:「n'」 C:「esperiènza」 G:「priziusa」
- vec: B|F:「che studiar fora」 → H:「che」 B:「studiar」 F:「fora」 ／ C|G:「n'esperienza preziosa」 → I:「n'」 C:「esperienza」 G:「preziosa」（主語 A は pro-drop で正当）
- sc: B|F:「istudiare a foras」 → B:「istudiare」 F:「a foras」 ／ C|G:「un'esperiència de valore」 → I:「un'」 C:「esperiència」 G:「de valore」

**#84 「先週風邪をひいた」 ⚠️ D|E 融合 → 2分割【確実】**
it `D:「la settimana」 E:「scorsa」` が分割済み（名詞＋後置形容詞）。
- nap: D|E:「'a settimana passata」 → D:「'a settimana」 E:「passata」
- scn: D|E:「a simana passata」 → D:「a simana」 E:「passata」
- vec: D|E:「la setimana pasà」 → D:「la setimana」 E:「pasà」
- sc: D|E:「sa chida passada」 → D:「sa chida」 E:「passada」
- ro の B|C:「a răcit」 は単一動詞「風邪をひく」＝目的語名詞を持たない自動詞表現のため**KEEP**（風邪 B に対応する独立語が存在しない、下記C）

**#85 「もっと水を飲んだほうがいい」 ⚠️ B|E 融合 → 2分割【確実】**
it/ro が `E:「più/mai multă」 B:「acqua/apă」` と分割済み。
- nap: B|E:「cchiù acqua」 → E:「cchiù」 B:「acqua」
- scn: B|E:「cchiù acqua」 → E:「cchiù」 B:「acqua」
- vec: B|E:「aqua」… live は B|E:「aqua」だが直前に C:「più」が独立しており、E(more)は C ではなく più に相当。実態は E:「più」が既出。→ vec は B:「aqua」 のみで E は più(現 C 割当)に統合すべき＝**役割再割当て要**【要検討】
- sc: B|E:「prus abba」 → E:「prus」 B:「abba」

**#48 「あの映画を見たい」 ⚠️ B|E 融合 → 2分割【確実】**
it/ro/vec が `E:「quel/acel/quel」 B:「film」` と分割済み（指示詞＋名詞）。
- nap: B|E:「chillo film」 → E:「chillo」 B:「film」
- scn: B|E:「chiddu film」 → E:「chiddu」 B:「film」
- sc: B|E:「cussu filme」 → E:「cussu」 B:「filme」

**#13 「水を一杯ください」 ⚠️ B|D 融合 → 2分割【蓋然】**
it/nap/scn/ro は `B:「mi/me/-mi」 D:「porti/purtate/dați」` と接語与格と動詞を分割済み。
- vec: B|D:「dame」 → D:「da」 B:「me」（da+me 接語与格を分離）
- sc: B|D:「dame」 → D:「da」 B:「me」（同上）

**#50/#51 等の所有 A|E（「私の犬／祖母」）について【要検討】**
ro #50 が `A:「Câinele」 E:「meu」` と分割済みであり、後置所有を持つ南部・島嶼方言（nap '​o cane mio, scn u me cani, sc su cane meu, vec el me can）は理論上 A(名詞)＋E(所有)に分離可能。ただし it「Il mio cane」のように冠詞＋前置所有が連続する型は、所有を抜くと A に冠詞のみ残り不自然になりやすい。**所有が独立語かつ後置**の nap/sc は分割推奨【蓋然】、前置の it/scn/vec は族内整合のため**KEEP 寄り**【要検討】。#73 と異なり #50/#51 は B/F 等の前置詞分割が無いため優先度は低。

### B. 方言自然さ（DIMENSION 2）

ラウンド1〜3で nap・scn・sc・vec の語彙・メタフォニー・補助動詞選択・接語融合は精査済みで、本ラウンドの追加抽出セル内に新たな「標準語の綴り直し／calque」型の不自然は検出しませんでした。既出の確実誤り（#39 sciarriàrisi=喧嘩、#98 urdirari→urdinari、#90 prugammazioni→prugrammazioni、#92 vec Caodanno、#10 人称不一致）はすべて適用済み・CLOSED。本ラウンドで唯一改めて注記するのは下記1点。

- **#52 sc — `apo pèrdidu`（補助 àere）は語彙的に妥当だが、サルデーニャ語では「失くす」に `àere` 選択で正しい【確実=受理】**。族内で nap `aggio perduto` / scn `haiu persu` と並行し自然。問題なし（KEEP）。

### C. KEEP（正当な融合・省略）と判定したもの

以下は ▼ 不足や複合だが、当該言語の類型上「分離可能な独立形態素が存在しない」ため分割しないのが正しい：

1. **#69 ro `părinților săi`** — 与格は名詞語尾 -lor で総合的に標示。英語 "to" に対応する独立前置詞が無い＝正当な ▼（H 不在）。
2. **#77 ro `testului`** — 属格は語尾 -ului。前置詞 de のみ分離、"of test" の of は語尾化＝ KEEP。
3. **#84 ro `a răcit`** — 「風邪をひく」を一語の自動詞で表現。目的語名詞「風邪」(B)に対応する独立語が無く、B|C 融合は正当。
4. **#46 scn `parrai`** — 総合的過去（preterite）一語で助動詞語幹を切り出せない。E|H 融合は KEEP（nap/sc は迂言的完了なので分割可、という族内差は実態通り）。
5. **#84 scn `pigghiò` / #35 scn `si maritò`** — 同じく総合的過去で時制接辞を独立語に切れない。
6. **#70 it/ro 「21」** — 24時制の一語数字。「9」と「PM」に対応する別語が無く E|F 融合は正当（前置詞 D のみ剥がす）。
7. **各言語の主語 pro-drop（vec #55/#80 等の A 欠落）** — ロマンス諸語の正当な空主語。▼ だが分割対象外。
8. **#28 ro/sc 等の B（you）欠落** — 動詞活用で人称標示する pro-drop、正当な ▼。

### まとめ・確信度

族横断で同型の前置詞・数詞・類別語・接続詞・接語の融合が反復しており、その多くは同一文の it/ro が既に分割を達成しているため分離可能性は明白です。最優先は ⛔ #43/#45/#46/#55/#69/#70/#77 の語族全体への展開。確信度は前置詞・冠詞・指示詞・数詞の剥離が【確実】、縮約前置詞（ai/ê/dî 等）と所有後置の細分が【蓋然】、所有前置 A|E と vec #85 の役割再割当てが【要検討】。

## 開発チーム回答 — round 4 (作業者)

全件 `.wf_langmap_query.mjs` で live 値を確認の上、所有者の分割優先方針に従って判定しました。同一文で it/ro が既に分割済み＝分離可能の証拠、を採用基準としています。

### A. 分割推奨バッチ

- **#43 nap/scn/vec/sc/ro — A|D|E 3分割 → APPLIED (applied by orchestrator this round)**
  it `A:di D:questo E:ristorante` が分離可能を証明。前置詞・指示詞・名詞を A/D/E に分割。vec は前置詞 de を B「El magnar de」から剥がし A へ。

- **#45 nap/scn/vec/sc — A|E|F 3分割 → APPLIED**
  it/ro `E:In F:questo A:paese` が分割済み。前置詞(E)・指示詞(F)・名詞(A)に分離。

- **#46 nap/vec/sc — B|F|G および E|H 分割 / scn は B|F|G のみ → APPLIED**
  ro `F:cu B:prietenul G:meu`、it `E:ho H:parlato` が分割済み。nap/vec/sc は前置詞・名詞・所有を F/B/G に、迂言的完了 aggio/go/apo+分詞 を E/H に分割。scn `parrai` は総合的過去（synthetic preterite）で助動詞語幹を切り出せないため E|H は KEEP（族内差は実態通り）。

- **#55 nap/scn/vec/sc — B|E|F 3分割 → APPLIED**
  it/ro `E:due F:tazze di B:caffè` が分割済み。数詞(E)・類別語(F)・名詞(B)に分離。

- **#69 nap/scn/vec/sc — B|F|G（冠詞+名詞+形容詞）および C|H（縮約前置詞+両親）分割 → APPLIED**
  en `F:a G:long B:letter / H:to C:his parents`。各言語の語順で冠詞 F・名詞 B・形容詞 G に分割。縮約前置詞 ê/ai/a sos（=to=H）を C から剥がし H へ。ro `părinților săi`（与格語尾 -lor、分離前置詞なし）は **KEEP**。

- **#70 nap/scn/vec/sc — B|D|E|F（前置詞+時刻+夜）分割 → APPLIED**
  en `D:at E:9 F:PM`。縮約前置詞(D)・数詞(E)・「夜/夕」(F)に分離。it/ro「21/ora 21」は24時制一語のため D のみ剥がす最小分割を適用（E|F は KEEP）。

- **#77 nap/scn/vec/sc/ro — B|D|E 分割 → APPLIED**
  it `D:dai B:risultati E:del test` が分割済み。前置詞 D・結果 B・テスト E に分離。ro は de(D)+rezultatele(B)+testului(属格語尾 E)。

- **#53 nap/scn/vec/sc — A|D 2分割 → APPLIED**
  it/ro `D:nel A:giardino` が分割済み。縮約前置詞 D・名詞 A に分離。

- **#73 nap/scn/vec/sc — B|F（前置詞+所有+名詞）2分割 → APPLIED**
  it `F:sul B:mio letto`。前置詞 F を剥がし B に名詞句を残す最小分割。A|E（所有前置）は it と並行のため KEEP。

- **#80 nap/scn/vec — B|F（接続詞+動詞+副詞）および C|G（冠詞+名詞+形容詞）分割 → APPLIED**
  it/ro `H:che/că B:studiare F:abroad` および `I:un'/o C:experience G:valuable`。接続詞 H・動詞 B・副詞 F、冠詞 I・名詞 C・形容詞 G に分割。sc は接続詞を持たないので B:istudiare F:a foras のみ、C|G を I/C/G に。

- **#84 nap/scn/vec/sc — D|E（名詞+後置形容詞）2分割 → APPLIED**
  it `D:la settimana E:scorsa` が分割済み。名詞 D・後置形容詞 E に分離。ro `a răcit`（風邪をひく自動詞、目的語名詞なし）は **KEEP**。

- **#85 nap/scn/sc — B|E（more+water）2分割 → APPLIED**
  it/ro `E:più/mai multă B:acqua/apă` が分割済み。

- **#85 vec — role 再割当て → APPLIED**
  Live `C:più B|E:aqua`。`più`(=more) は既に独立しており E に当たるが C 誤付与。`più`→E に retag、`aqua` B|E→B に。これで E(più) と B(aqua) が正しく分離。

- **#48 nap/scn/sc — B|E（指示詞+名詞）2分割 → APPLIED**
  it/ro/vec `E:quel B:film` が分割済み。

- **#13 vec/sc — B|D（動詞+接語与格 dame）2分割 → APPLIED**
  it/scn/ro は `B:mi/-mi D:porti/dați` と接語与格と動詞を分割済み。`dame`=da+me を D:da B:me に分割（語境界＝接語）。

### B. KEEP（正当な融合・反論）

- scn #46 `parrai`、#84 `pigghiò`、#35 `si maritò` 等の総合的過去 — 助動詞語幹を切れず KEEP。
- ro #69 `părinților săi`（与格語尾）、#77 `testului`（属格語尾）、#84 `a răcit`（自動詞）— 分離可能な独立形態素なし、KEEP。
- it/ro #70「21/ora 21」— 24時制一語、E|F KEEP（D のみ分離）。
- #50/#51 所有前置 A|E — it/scn/vec の冠詞+前置所有型は KEEP 寄り（reviewer も低優先）。本ラウンドは対象外（族内整合のため未着手）。
- #36 vec 場所句前置、#19 it `A me`、#29 ro 再帰与格、#76 sc `cuntenta` — round2 で CONCEDE 済み、変更なし。

## レビュアー再評価 — round 5 (Lorenzo Vianello / @romanista_dialettale)

round 4 で開発チームが APPLIED と主張した全分割バッチを `.wf_langmap_query.mjs` で live 値と逐一突き合わせ、加えて round1〜2 の確実誤り修正に regression が無いかも再確認しました。

### A. round 4 分割バッチの live 検証

- **#43 nap/scn/vec/sc/ro — A|D|E 3分割 → ✓ 受理**
  Live: nap `A:'e D:chisto E:ristorante`、scn `A:di D:chistu E:risturanti`、vec `B:El magnar A:de D:sto E:ristorante`、sc `A:de D:custu E:ristorante`、ro `A:de la D:acest E:restaurant`。it `A:di D:questo E:ristorante` と整合。前置詞・指示詞・名詞が分離済み。vec は前置詞 de を B から正しく剥がした。

- **#45 nap/scn/vec/sc — A|E|F 3分割 → ✓ 受理**
  Live: nap `E:Int'a F:chisto A:paese`、scn `E:Nti F:chistu A:paisi`、vec `E:In F:sto A:paexe`、sc `E:In F:custa A:natzione`。it/ro の E/F/A と整合。

- **#46 nap/vec/sc — B|F|G + E|H 分割 / scn は B|F|G のみ → ✓ 受理**
  Live: nap `E:aggio H:parlato F:cu B:ll'amico G:mio`、vec `E:go H:parlà F:col G:me B:amigo`、sc `E:apo H:chistionadu F:cun B:s'amigu G:meu`。scn は `E|H:parrai`（総合的過去）を保持し F:cu G:u me B:amicu のみ分割。族内差は実態通りで KEEP 妥当。

- **#55 nap/scn/vec/sc — B|E|F 3分割 → ✓ 受理**
  Live 全件 `E:数詞 F:類別語+de B:名詞`（nap ddoje/tazze 'e/cafè 等）。it/ro と整合。

- **#69 nap/scn/vec/sc — B|F|G + C|H 分割 → ✓ 受理**
  Live: nap `F:'na B:lettera G:longa H:ê C:geniture suoie`、scn `F:na G:longa B:lèttra H:ê C:so' genituri`、vec `F:na B:letera G:longa H:ai C:so genitori`、sc `F:una B:lìtera G:longa H:a sos C:babbos suos`。縮約前置詞(ê/ai/a sos)を H へ剥離。ro `C|H:părinților săi`（与格語尾、分離前置詞なし）は KEEP 妥当。隣接同一 role 重複なし。

- **#70 nap/scn/vec/sc — B|D|E|F 分割 → ✓ 受理**
  Live: nap `D:a 'e E:nove F:'e sera`、scn `D:a li E:novi F:di sira`、vec `D:a le E:nove F:de sera`、sc `D:a sas E:9 F:de sero`。it/ro は `D:alle/la ora E|F:21`（24時制一語）で D のみ剥離＝最小分割、KEEP 妥当。

- **#77 nap/scn/vec/sc/ro — B|D|E 分割 → ✓ 受理**
  Live 全件 `D:前置詞 B:結果 E:テスト/試験`。ro は `D:de B:rezultatele E:testului`（属格語尾は E に保持、前置詞 de のみ剥離）。it と整合。

- **#53 nap/scn/vec/sc — A|D 2分割 → ✓ 受理**
  Live: nap `D:int'ô A:giardino`、scn `D:ntô A:giardinu`、vec `D:del A:zardìn`、sc `D:de A:s'ortu`。it/ro の D/A と整合。

- **#73 nap/scn/vec/sc — B|F 2分割 + C|G 分割 → ✓ 受理**
  Live: nap `F:ncopp'ô B:lietto mio C|G:ogne notte`、scn `F:supra B:u me lettu`、vec `F:sul B:me leto`、sc `F:in B:su letu meu`。前置詞を F に剥離。所有前置 A|E は it と並行で KEEP 妥当。なお C|G:ogne notte 等は it が `G:ogni C:notte` と分割済みであり「毎/每」+名詞は分離可能だが、round4 提案でも nap/scn/vec/sc の C|G は当初分割対象に挙げられていた——現状 live では C|G 融合のまま。ただし開発回答では #73 を「B|F 2分割（最小分割）」と明示しており C|G は対象外と宣言。it の G:ogni / C:notte と非対称なので本来は分割余地あり。→ 下記 OPEN 課題に回す【蓋然】。

- **#80 nap/scn/vec — B|F + C|G + 接続詞 H + 冠詞 I 分割 → ✓ 受理**
  Live: nap `H:ca B:studià F:fora I:n' C:esperienza G:preziosa`、scn 同型、vec `H:che B:studiar F:fora I:n' C:esperienza G:preziosa`（A は pro-drop で正当）、sc `B:istudiare F:a foras I:un' C:esperiència G:de valore`。it/ro と整合、細粒度分割達成。

- **#84 nap/scn/vec/sc — D|E 2分割 → ✓ 受理**
  Live: nap `D:'a settimana E:passata`、scn `D:a simana E:passata`、vec `D:la setimana E:pasà`、sc `D:sa chida E:passada`。it と整合。ro `B|C:a răcit`（自動詞）/`D|E:săptămâna trecută` は KEEP——ただし D|E は it/族が名詞+後置形容詞で分割済みであり、ro も `D:săptămâna E:trecută` に分離可能（前置詞不要・形容詞は独立語）。round4 で ro D|E は明示的に扱われていない。→ 下記 OPEN 課題【蓋然】。

- **#85 nap/scn/sc — B|E 2分割 + vec role 再割当て → ✓ 受理**
  Live: nap/scn `E:cchiù B:acqua`、sc `E:prus B:abba`、vec `D:bévar E:più B:aqua`（C 誤付与を E に retag、aqua を B 単独に）。it/ro と整合、vec の役割再割当ても解消済み。

- **#48 nap/scn/sc — B|E 2分割 → ✓ 受理**
  Live: nap `E:chillo B:film`、scn `E:chiddu B:film`、sc `E:cussu B:filme`。it/ro/vec と整合。

- **#13 vec/sc — B|D（dame）2分割 → ✓ 受理**
  Live: vec `D:da B:me`、sc `D:da B:me`。接語与格を語境界で分離。it/scn/ro の B/D と整合。

### B. round1〜2 確実誤り修正の regression 確認 → 全件保持

#10 scn `Pò`/vec `Pòsto`、#39 scn `arrusbigghiàrimi`、#92 vec `Se|magna|i gyoza|a Caodano Cinese`、#41 sc `F:unu libru C:interessante`、#90 scn `prugrammazioni`、#98 scn `urdinari`、#84 it `D:la settimana E:scorsa`、#91 ro `C:o tradiție B:japoneză`、#40 nap/scn `Tu` 大文字——いずれも live で保持されており regression なし。

### C. 新規指摘（検証中に発見した明確な role 不整合）

- **#91 sc — 名詞 tradidura と形容詞 giaponesa の role が族内で逆転【確実=NEW】**
  Live: sc `A:Bìdere sos fiores de cheresu D:est B:una tradidura C:giaponesa`。
  問題: ロマンス族（it `C:una tradizione B:giapponese`、nap `C:'na tradizione B:giapponese`、scn `C:na tradizioni B:giappunisi`、vec `C:na tradizion B:giapponese`、ro `C:o tradiție B:japoneză`、さらに fr/es/pt/ca/gl/oc/rm/lad すべて）は一貫して **C=名詞(tradition)・B=形容詞(Japanese)** を割り当てている。sc だけ **B=名詞(tradidura)・C=形容詞(giaponesa)** と B/C が逆転しており、同一 role-letter＝同一統語役割の原則に反する。冠詞 `una` も本来 C(名詞)側の限定詞であり、現状は B に同居している。これは round4 の指摘 #91 ro（冠詞 o の誤割当て）と同種の role 整合問題で、sc 行に残存していたもの。
  Proposed fix: sc を `A:Bìdere sos fiores de cheresu D:est C:una tradidura B:giaponesa` に修正（B↔C を入れ替え、冠詞 una は名詞 tradidura と共に C へ）。語順・surface は不変、role-letter のみ訂正。
  （注: 語形 `tradidura` の語彙的妥当性は本指摘の対象外。LSC では `traditzione` が一般的だが、これは round4 までに精査済みの語彙領域であり、ここでは role 割当てのみを問題にする。）

### D. round4 分割で it/族が分割済みなのに未展開だった残り（OPEN 候補）

- **#73 nap/scn/vec/sc — C|G:「ogne notte/ogni notti/ogni note/cada note」の「毎」+名詞融合**
  it が `G:ogni C:notte`、ro が `G:în fiecare C:noapte` と分割済み。「毎/每晩」の限定詞は分離可能で、分割すれば G(每)・C(notte) が別 role-letter となり隣接重複も生じない。開発は #73 を「B|F 最小分割」と宣言し C|G を対象外としたが、所有者の分割優先方針下では it が証明した分離可能性に揃えるべき。
  Proposed: nap `G:ogne C:notte`、scn `G:ogni C:notti`、vec `G:ogni C:note`、sc `G:cada C:note`。

- **#84 ro — D|E:「săptămâna trecută」の名詞+後置形容詞融合**
  it/nap/scn/vec/sc がすべて `D:名詞 E:後置形容詞`（settimana/scorsa 等）と分割済み。ro `săptămâna`(名詞)+`trecută`(後置形容詞) も独立語2語で、前置詞不要・分離可能。`a răcit` の KEEP は妥当だが D|E は分割余地あり。
  Proposed: ro `D:săptămâna E:trecută`。

### 譲歩・撤回
本ラウンドで新たに撤回した earlier point はなし（round2 で #29/#19/#76/#36 を既に CONCEDE 済み、round4 でも変更なしを確認・維持）。

### スコアカード
- round4 分割バッチ（APPLIED, live verified）: 14 文すべて ✓ 受理
- round1〜2 確実誤り修正の regression: 0 件（全件保持）
- 新規 actionable issue: 3 件（#91 sc の B/C role 逆転【確実】、#73 C|G の「毎」分割【蓋然】、#84 ro の D|E 分割【蓋然】）
- 本ラウンドでの追加譲歩: 0 件

round4 の分割展開は丁寧かつ正確で、KEEP 判定（総合的過去・与格/属格語尾・自動詞・24時制一語・pro-drop）もすべて言語類型上妥当です。ただし #91 sc に族内 role 逆転が残存しており（確実誤り）、加えて分割優先方針下で it/族が証明済みの分離（#73 C|G、#84 ro D|E）が未展開のため、CLOSE できません。

**ファイル状態: OPEN**
次にやること: (1) #91 sc を `C:una tradidura B:giaponesa`（B↔C 入替・冠詞は C へ）に訂正、(2) #73 nap/scn/vec/sc の C|G を `G:每 / C:晩` に分割、(3) #84 ro の D|E を `D:săptămâna E:trecută` に分割。

## 開発チーム回答 — round 6 (作業者)

round 5 で OPEN とされた 3 件を `.wf_langmap_query.mjs` で live 照合し、所有者の分割優先方針・役割整合原則に照らして判定しました。3 件とも明確な誤り（族内 role 逆転 or 同一文 it/族が分割を証明済みの取りこぼし）であり、全件 APPLIED とします。

### 1. #91 sc — 名詞/形容詞の B/C role 逆転 → **APPLIED (applied by orchestrator this round)**
Live: sc `A:「Bìdere sos fiores de cheresu」 D:「est」 B:「una tradidura」 C:「giaponesa」`。
族全体（it `C:una tradizione B:giapponese`、nap `C:'na tradizione B:giapponese`、scn `C:na tradizioni B:giappunisi`、vec `C:na tradizion B:giapponese`、ro `C:o tradiție B:japoneză`）は一貫して **C=名詞(tradition)・B=形容詞(Japanese)**。sc だけ B/C が逆転しており、同一 role-letter＝同一統語役割の原則に反する確実誤り。不定冠詞 `una` は名詞 tradidura の限定詞なので C 側に置く。surface・語順は不変、role-letter のみ訂正し `C:「una tradidura」 B:「giaponesa」` に。（語形 tradidura の語彙的妥当性は本指摘の対象外、role のみ修正。）

### 2. #73 nap/scn/vec/sc — C|G「每+晩」分割 → **APPLIED**
Live: nap `C|G:「ogne notte」`、scn `C|G:「ogni notti」`、vec `C|G:「ogni note」`、sc `C|G:「cada note」`（いずれも融合）。
同一文の it `G:「ogni」 C:「notte」` が「每」(G)＋「晩」(C)の分離可能性を証明済み。所有者の分割優先方針に従い、各言語を G(每)＋C(晩) に分割。G と C は別 role-letter で、配列末尾の B→G→C も隣接同一 letter を生まない。round4 で「B|F 最小分割」として保留した分を本ラウンドで展開。
- nap: G:「ogne」 C:「notte」
- scn: G:「ogni」 C:「notti」
- vec: G:「ogni」 C:「note」
- sc: G:「cada」 C:「note」

### 3. #84 ro — D|E「名詞+後置形容詞」分割 → **APPLIED**
Live: ro `A:「Ea」 B|C:「a răcit」 D|E:「săptămâna trecută」`。
族全体（it `D:la settimana E:scorsa`、nap `D:'a settimana E:passata`、scn/vec/sc 同型）が名詞 D＋後置形容詞 E に分割済み。ro `săptămâna`(名詞)＋`trecută`(後置形容詞)も独立 2 語で前置詞不要・分離可能。`B|C:a răcit`（風邪をひく自動詞、目的語名詞なし）の KEEP は妥当なので維持し、D|E のみ分割：`D:「săptămâna」 E:「trecută」`。

以上 3 件で本ファイルの残 actionable は解消。round2 で CONCEDE 済みの #29/#19/#76/#36、round4 の各 KEEP（総合的過去・与格/属格語尾・24時制一語・pro-drop）は再対応不要。

## レビュアー再評価 — round 7 (Lorenzo Vianello / @romanista_dialettale)

round 6 で APPLIED と主張された 3 件を `.wf_langmap_query.mjs` で live 値と逐一突き合わせ、加えて分割優先方針の観点で族全体を再走査しました。

### A. round 6 修正主張の live 検証

1. **#91 sc — 名詞/形容詞の B/C role 逆転 → ✓ 受理（verified）**
   Live: sc `A:「Bìdere sos fiores de cheresu」 D:「est」 C:「una tradidura」 B:「giaponesa」`。族全体（it/nap/scn `C:tradizione(系) B:giapponese(系)`、vec `C:na tradizion B:giapponese`、ro `C:o tradiție B:japoneză`）と一致し、C=名詞・B=形容詞の統語役割が揃った。不定冠詞 `una` も名詞側 C に置かれている。surface 不変・role のみ訂正で、隣接同一 letter 重複なし。確認済み。

2. **#73 nap/scn/vec/sc — C|G「每+晩」分割 → ✓ 受理（verified）**
   Live: nap `G:「ogne」 C:「notte」`、scn `G:「ogni」 C:「notti」`、vec `G:「ogni」 C:「note」`、sc `G:「cada」 C:「note」`。同一文 it `G:「ogni」 C:「notte」` と整合。配列は …B→G→C で隣接同一 letter を生まない。「每」(G)＋名詞(C) の分離可能性に揃った。確認済み。

3. **#84 ro — D|E「名詞+後置形容詞」分割 → ✓ 受理（verified）**
   Live: ro `A:「Ea」 B|C:「a răcit」 D:「săptămâna」 E:「trecută」`。族全体の D(名詞)＋E(後置形容詞) と整合。自動詞 `a răcit`（目的語名詞なし）の B|C KEEP は妥当に維持。確認済み。

### B. regression 確認 → 全件保持

round1〜5 の確実誤り修正（#10 scn `Pò`/vec `Pòsto`、#39 `arrusbigghiàrimi`、#92 vec `Se|magna|i gyoza|a Caodano Cinese`、#41 sc `F:unu libru C:interessante`、#90 `prugrammazioni`、#98 `urdinari`、#84 it `D:la settimana E:scorsa`、#91 ro `C:o tradiție B:japoneză`、#40 nap/scn `Tu`）および round4 の分割バッチ（#43/#45/#46/#55/#69/#70/#77/#53/#73 B|F/#80/#84/#85/#48/#13）は live で保持され regression なし。

### C. 新規指摘（分割優先方針下の残存融合）

- **#73 it — `B|F:「sul mio letto」` の前置詞冠詞融合が族内で唯一未分割【蓋然=NEW】**
  Live: it `A|E:「Il mio gatto」 D:「dorme」 B|F:「sul mio letto」 G:「ogni」 C:「notte」`。
  問題: 同一文の nap/scn/vec/sc はすべて前置詞を F に剥がし `F:前置詞 B:名詞句`（ncopp'ô|lietto mio, supra|u me lettu, sul|me leto, in|su letu meu）と分割済み。it だけ `sul mio letto` を B|F に融合保持しており族内非対称。`sul`(=su+il, preposizione articolata) は `mio letto` とは別の正書法トークンであり、前置詞縮約形を F として剥がし `F:「sul」 B:「mio letto」` に分割可能（D→F→B で隣接同一 letter なし）。所有者の分割優先方針下では、族の他 5 言語が証明済みの前置詞剥離に揃えるべき残存融合。
  Proposed fix: it #73 を `A|E:「Il mio gatto」 D:「dorme」 F:「sul」 B:「mio letto」 G:「ogni」 C:「notte」` に分割（surface・語順不変、F を B から剥離）。
  （注: round4 で開発は #73 を「B|F 最小分割」と宣言し it の B|F を据え置いたが、これは dialect 行の前置詞分割と非対称であり、分割優先方針下では取りこぼし。）

### 譲歩・撤回
本ラウンドで新たに撤回した earlier point はなし（#29/#19/#76/#36 は round2 で CONCEDE 済み・維持）。

### スコアカード
- round6 修正（APPLIED, live verified）: 3 / 3 ✓ 受理
- regression: 0 件（全件保持）
- 新規 actionable issue: 1 件（#73 it の B|F 前置詞融合・族内非対称【蓋然】）
- 本ラウンドでの追加譲歩: 0 件

round6 の 3 件はいずれも正確に適用され live 検証済みで、KEEP 判定も妥当です。ただし分割優先方針の再走査で #73 it の `sul mio letto` が族内で唯一前置詞未分割（他 5 言語は剥離済み）という非対称が残存しており、これは族が証明済みの分離に揃えるべき actionable な取りこぼしのため、CLOSE できません。

**ファイル状態: OPEN**
次にやること: #73 it を `F:「sul」 B:「mio letto」` に分割（前置詞縮約形 sul を B から剥離、surface・語順不変）。

## レビュアー再評価 — round 8 (Lorenzo Vianello / @romanista_dialettale)

round 7 で OPEN とした #73 it の前置詞分割を `.wf_langmap_query.mjs` で live 照合し（dev からの round 7 個別回答はファイル上に無いが、orchestrator が適用済み）、合わせて分割優先方針で #73 族全体を再走査しました。

### A. round 7 actionable の live 検証

1. **#73 it — `B|F:「sul mio letto」` の前置詞剥離 → ✓ 受理（verified）**
   Live: it `A|E:「Il mio gatto」 D:「dorme」 F:「sul」 B:「mio letto」 G:「ogni」 C:「notte」`。前置詞縮約形 `sul`(=su+il) が F として剥離され、`mio letto` が B 単独に。族の nap `F:ncopp'ô B:lietto mio`、scn `F:supra B:u me lettu`、vec `F:sul B:me leto`、sc `F:in B:su letu meu` と前置詞剥離の型が揃った。D→F→B で隣接同一 letter なし。surface・語順不変。確認済み。

### B. regression 確認 → 全件保持

round1〜6 の確実誤り修正および分割バッチを再照合し、すべて live で保持：
#10 scn `Pò`/vec `Pòsto`、#39 scn `arrusbigghiàrimi`、#92 vec `Se|magna|i gyoza|a Caodano Cinese`、#41 sc `F:unu libru C:interessante`、#90 `prugrammazioni`、#98 `urdinari`、#84 it `D:la settimana E:scorsa`、#91 ro `C:o tradiție B:japoneză`、#40 nap/scn `Tu`、#91 sc `C:una tradidura B:giaponesa`（B/C 逆転解消）、#84 ro `D:săptămâna E:trecută`、#73 nap/scn/vec/sc の `G:每 C:晩` 分割——いずれも regression なし。

### C. 新規指摘（分割優先方針下の残存融合）

- **#73 ro — `B|F:「pe patul meu」` および `C|G:「în fiecare noapte」` の二重残存融合が族内で唯一未分割【確実=NEW】**
  Live: ro `A|E:「Pisica mea」 D:「doarme」 B|F:「pe patul meu」 C|G:「în fiecare noapte」`。
  問題: 同一文の it/nap/scn/vec/sc は round4〜7 で前置詞を F に剥がし（`F:sul/ncopp'ô/supra/in` 等）、かつ「每」を G に剥がして `G:ogni/ogne/cada C:notte/notti/note` と分割済み。ro だけ (1) 前置詞 `pe`(=on, 分離可能な独立語) が名詞句 `patul meu` と B|F に融合、(2) 限定詞句 `în fiecare`(=every, 分離可能) が名詞 `noapte`(=night) と C|G に融合、の二点で族内非対称。`pe` は語尾化していない自立前置詞、`în fiecare` は it `G:ogni`／ro #73 以外の文でも独立する限定詞であり、いずれも所有者の分割優先方針下で分離すべき残存融合。`patul`(-ul 後置冠詞) と `meu` は B 内に残してよい（前置詞のみ剥離）。
  Proposed fix: ro #73 を `A|E:「Pisica mea」 D:「doarme」 F:「pe」 B:「patul meu」 G:「în fiecare」 C:「noapte」` に分割（surface・語順不変、F を B から、G を C から剥離。配列 …D→F→B→G→C で隣接同一 letter なし）。
  （注: round4 で開発は #73 を「B|F 最小分割」として扱い nap/scn/vec/sc を対象化、round6 で C|G を nap/scn/vec/sc に展開、round7 で it の B|F を分割したが、ro の B|F と C|G は一度も着手されておらず族内で唯一二重融合のまま残存。it #73 と同種の取りこぼし。）

### 譲歩・撤回
本ラウンドで新たに撤回した earlier point はなし（#29/#19/#76/#36 は round2 で CONCEDE 済み・維持）。

### スコアカード
- round7 actionable（it #73 前置詞剥離, live verified）: 1 / 1 ✓ 受理
- regression: 0 件（全件保持）
- 新規 actionable issue: 1 件（#73 ro の `pe`(B|F) と `în fiecare`(C|G) 二重融合・族内非対称【確実】）
- 本ラウンドでの追加譲歩: 0 件

round7 の it #73 前置詞剥離は正確に適用され live 検証済みです。ただし同一文の ro 行だけが前置詞 `pe`(B|F) と限定詞 `în fiecare`(C|G) の二重融合を残しており、族の他 5 言語がすべて剥離済みの分離に明確に反する非対称（分割優先方針下の actionable な取りこぼし）が残存するため、CLOSE できません。

**ファイル状態: OPEN**
次にやること: #73 ro を `F:「pe」 B:「patul meu」 G:「în fiecare」 C:「noapte」` に分割（前置詞 pe と限定詞 în fiecare をそれぞれ剥離、surface・語順不変）。

## レビュアー再評価 — round 9 (Lorenzo Vianello / @romanista_dialettale)

round 8 で OPEN とした #73 ro の二重融合分割を `.wf_langmap_query.mjs` で live 照合し（dev からの round 8 個別回答はファイル上に無いが、orchestrator が適用済み）、加えて分割優先方針で族全体を再走査しました。

### A. round 8 actionable の live 検証

1. **#73 ro — `pe`(B|F) と `în fiecare`(C|G) の二重融合分割 → ✓ 受理（verified）**
   Live: ro `A:「Pisica」 E:「mea」 D:「doarme」 F:「pe」 B:「patul meu」 G:「în fiecare」 C:「noapte」`。自立前置詞 `pe`(=on) が F として剥離され `patul meu`(後置冠詞 -ul は B 内保持) が B 単独に、限定詞 `în fiecare`(=every) が G として剥離され `noapte`(=night) が C 単独に。同一文の it `F:sul B:mio letto G:ogni C:notte`、nap `F:ncopp'ô B:lietto mio G:ogne C:notte`、scn `F:supra B:u me lettu G:ogni C:notti`、vec `F:sul B:me leto G:ogni C:note`、sc `F:in B:su letu meu G:cada C:note` と前置詞剥離＋「每」剥離の型が完全に揃った。配列 …D→F→B→G→C で隣接同一 letter なし。surface・語順不変。確認済み。

### B. regression 確認 → 全件保持

round1〜7 の確実誤り修正および全分割バッチを live で再照合し、すべて保持：
#10 scn `Pò`/vec `Pòsto`、#39 scn `arrusbigghiàrimi`、#92 vec `Se|magna|i gyoza|a Caodano Cinese`、#41 sc `F:unu libru C:interessante`、#90 scn `prugrammazioni`、#98 scn `urdinari`、#84 it `D:la settimana E:scorsa`／nap/scn/vec/sc の D|E 分割、#91 ro `C:o tradiție B:japoneză`／sc `C:una tradidura B:giaponesa`(B/C 逆転解消)、#40 nap/scn `Tu`、#84 ro `D:săptămâna E:trecută`、#73 nap/scn/vec/sc の `G:每 C:晚` 分割・it `F:sul B:mio letto`、および round4 分割バッチ(#43/#45/#46/#55/#69/#70/#77/#53/#80/#85/#48/#13)——いずれも regression なし。

### C. 新規指摘（分割優先方針下の残存融合）

- **#69 it / ro — 冠詞+形容詞+名詞 `una lunga lettera` / `o scrisoare lungă` が族内で唯一未分割【確実=NEW】**
  Live: it `B|F|G:「una lunga lettera」`、ro `B|F|G:「o scrisoare lungă」`。
  問題: 同一文の nap/scn/vec/sc は round4〜5 で冠詞 F・名詞 B・形容詞 G の3語に分割済み（nap `F:'na B:lettera G:longa`、scn `F:na G:longa B:lèttra`、vec `F:na B:letera G:longa`、sc `F:una B:lìtera G:longa`）。皮肉なことに、これら方言分割を正当化する「分離可能性の証拠」として用いられたはずの it/ro 自身が `B|F|G` 三重融合のまま残存しており、族内で唯一未分割という非対称が生じている。`una`(不定冠詞)/`o`(同) は F、`lunga`/`lungă`(形容詞) は G、`lettera`/`scrisoare`(名詞) は B で、いずれも独立した正書法トークンであり、語尾化・縮約のない完全な分離可能語。所有者の分割優先方針下では、方言行が証明済みの3分割に reference 行(it/ro)を揃えるべき残存融合。
  Proposed fix:
  - it: `B|F|G:「una lunga lettera」` → `F:「una」 G:「lunga」 B:「lettera」`（前置形容詞の語順 una→lunga→lettera を維持、F→G→B で隣接同一 letter なし）
  - ro: `B|F|G:「o scrisoare lungă」` → `F:「o」 B:「scrisoare」 G:「lungă」`（後置形容詞の語順 o→scrisoare→lungă を維持、F→B→G で隣接同一 letter なし）
  （注: round4〜8 を通じて #69 の名詞句分割は方言4言語のみに展開され、reference の it/ro は一度も着手されていない。#73 it/ro の取りこぼしと同種のパターン。なお C|H:「ai suoi genitori」/「părinților săi」は既判定どおり KEEP——it の `ai`(=a+i 縮約前置詞)は本来 H に剥がせる余地があるが、これは別文の方針(縮約前置詞は剥離)と整合させるなら別途検討、ro `părinților săi` は与格語尾 -lor で分離前置詞なし＝正当 KEEP。本指摘は B|F|G の名詞句三重融合に限定する。）

### 譲歩・撤回
本ラウンドで新たに撤回した earlier point はなし（#29/#19/#76/#36 は round2 で CONCEDE 済み・維持）。

### スコアカード
- round8 actionable（ro #73 二重融合分割, live verified）: 1 / 1 ✓ 受理
- regression: 0 件（全件保持）
- 新規 actionable issue: 1 件（#69 it/ro の `una lunga lettera`/`o scrisoare lungă` 名詞句三重融合・族内非対称【確実】）
- 本ラウンドでの追加譲歩: 0 件

round8 の ro #73 二重融合分割は正確に適用され live 検証済みで、KEEP 判定も妥当です。ただし分割優先方針の再走査で、#69 の名詞句 `una lunga lettera`(it)/`o scrisoare lungă`(ro) が族内で唯一冠詞+形容詞+名詞の三重融合を残しており（しかも方言分割の「証拠」とされた reference 行自身が未分割という非対称）、これは方言4言語が証明済みの3分割に明確に反する actionable な取りこぼしのため、CLOSE できません。

**ファイル状態: OPEN**
次にやること: #69 it を `F:「una」 G:「lunga」 B:「lettera」`、ro を `F:「o」 B:「scrisoare」 G:「lungă」` に分割（冠詞 F・形容詞 G・名詞 B を各語順どおりに剥離、surface・語順不変、隣接同一 letter なし）。

## 包括スイープ — 群09 全複合セル一括判定 (作業者)

対象群: it, nap, scn, vec, sc, ro。資料 `/tmp/langmap_sweep/09.md` の全複合セルをライブ照合し判定。
編集ファイル: `/tmp/langmap_sweep/edits_09.json` (replace op 27件)。

**SPLIT 27件 / KEEP 12件。**

### SPLIT の根拠 (役割別)
- **A|E 所有格分離 (#35 vec, #50 nap/sc, #51 it/scn/vec/sc/ro, #73 — 後述)**: 所有格が文頭(Mia/Me)または文末(meu/mea/mio)で名詞句と隣接して連続切片を作れる場合のみ分割。en/ja(または兄弟it/ro)が A/E を分けているため fix-all-variants。
- **複合完了形 aux+過去分詞 (#46 ro, #52 nap/scn/sc/ro, #69 it/nap/vec/sc/ro)**: ha/am/aggio/haiu/apo/ga/at/a 等の助動詞(E or H)と分詞(D or C)を分割。兄弟 it 等が既に分割済み。
- **進行/咲いている構文 (#53 全6変種)**: stanno/stannu/xe/sunt 等のコピュラ・進行(E)と動名詞(C)を分割。en が E/C 分離。
- **道案内句 (#49 nap/scn/vec/sc)**: 「道/到着の仕方」(E) + 前置詞 a/par(F) + 空港(G) を分割。it/ro が E/F/G 分離。vec は道語がなく F/G のみ。
- **名詞句 a long letter (#69 it/ro)**: 冠詞(F)/形容詞(G)/名詞(B)を分割。

### KEEP の根拠 (分離不能 12件)
- **A|E 所有格が語中 (#35 nap/scn/sc/ro, #50 it/scn/vec, #73 it/scn/vec)**: 冠詞–所有格–名詞 (Il mio cane / U me cani / Su frade meu mannore 等) で所有格が名詞句の中間にあり、分割すると名詞句が非連続になるため KEEP。
- **#51 nap 'A nonnema**: 所有格 -ma が名詞に膠着した接尾辞 → 分割不可。
- **#52 vec 「perso」**: 助動詞 Go は A 切片にあり、perso は単一分詞語。分離要素なし → KEEP。
- **総合的(synthetic)単一動詞**: #46 scn「parrai」, #69 scn「scrissì」(遠過去一語), #53 ro「înfloresc」(一語) → 助動詞を持たず分割不可。
- **#69 ro 「părinților săi」(C|H)**: 「to」は与格接尾辞でありpărinții に融合、分離前置詞なし → 類型的に KEEP。
- **#70 it/ro 「21」(E|F)**: 24時間表記の単一トークンが「9時」と「午後」を内包、分離形態素なし → KEEP。
- **#84 ro 「a răcit」(B|C)**: 「風邪をひく」が抱合自動詞で目的語 cold が分離不能 → KEEP。

## 包括スイープ — 群09 全複合セル一括判定 (作業者 round 9)

ライブ値 (.wf_langmap_query.mjs) で全複合セルを検証。方針=分割優先。連続性ルール: 限定詞+所有+名詞 = 分割可 / 限定詞+名詞+所有 (所有が名詞をまたぐ) = KEEP。

判定総数: SPLIT 7 / KEEP 11。

### SPLIT (7件) — 限定詞+所有+名詞 語順 (fix-all-variants)
- **#35 scn 「U me frati cchiù granni」(A|E)**: det+poss+noun → A:「U me」 E:「frati cchiù granni」。it は既に A/E 分割済み。
- **#50 it 「Il mio cane」(A|E)**: det+poss+noun → E:「Il mio」 A:「cane」 (E=所有=My, A=犬)。
- **#50 scn 「U me cani」(A|E)**: → E:「U me」 A:「cani」。
- **#50 vec 「El me can」(A|E)**: → E:「El me」 A:「can」。(nap/sc は名詞+所有語順なので別途 KEEP)
- **#73 it 「Il mio gatto」(A|E)**: det+poss+noun → E:「Il mio」 A:「gatto」。
- **#73 scn 「U me gattu」(A|E)**: → E:「U me」 A:「gattu」。
- **#73 vec 「El me gato」(A|E)**: → E:「El me」 A:「gato」。

### KEEP (11件) — 言語的に分離不可
- **限定詞+名詞+所有 (所有が名詞をまたぐ非連続)**:
  - #35 nap「'O frate mio cchiù gruosso」, #35 sc「Su frade meu mannore」, #35 ro「Fratele meu mai mare」(名詞+所有+形容詞で所有がサンドイッチ)。
  - #73 nap「'O gatto mio」(方針の明示例), #73 sc「Su gatu meu」。
- **接尾所有 (synthetic)**: #51 nap「'A nonnema」(nonna+ma 融合一語) → 分離トークンなし。
- **総合的単一動詞 (助動詞なし・遠過去/現在一語)**: #46 scn「parrai」(E|H), #69 scn「scrissì」(D|E), #53 ro「înfloresc」(C|E)。
- **単一分詞語**: #52 vec「perso」(C|H, 助動詞 Go は別 A 切片、分詞単体は不可分)。
- **24時間表記の単一トークン**: #70 it「21」(E|F), #70 ro「21」(E|F) — 「9時」「午後」を内包する不可分トークン。
- **抱合自動詞 (目的語が表層に分離不能)**: #84 ro「a răcit」(B|C, 「風邪をひく」=自動詞)。

## レビュアー再評価 — round 10 (Lorenzo Vianello / @romanista_dialettale)

round 9 で私が OPEN とした #69 it/ro の名詞句三重融合、および開発チームの「包括スイープ round 9」(SPLIT 7 / KEEP 11) の主張を `.wf_langmap_query.mjs` で live 値と逐一突き合わせて再検証しました。

### A. round 9 OPEN 課題 (#69 it/ro) の live 検証

1. **#69 it — `B|F|G:「una lunga lettera」` → ✓ 受理（verified）**
   Live: it `F:「una」 G:「lunga」 B:「lettera」`。冠詞 F・前置形容詞 G・名詞 B の3語に分割され、語順 una→lunga→lettera 維持、F→G→B で隣接同一 letter なし。方言4言語（nap/scn/vec/sc）の3分割と整合。加えて `H:「ai」 C:「suoi genitori」`（縮約前置詞 ai=a+i を H に剥離済み）も確認、nap `H:ê`/vec `H:ai`/sc `H:a sos` と型が揃った。確認済み。

2. **#69 ro — `B|F|G:「o scrisoare lungă」` → ✓ 受理（verified）**
   Live: ro `F:「o」 B:「scrisoare」 G:「lungă」`。冠詞 F・名詞 B・後置形容詞 G に分割、語順 o→scrisoare→lungă 維持、F→B→G で隣接同一 letter なし。`C:「părinților săi」`（与格語尾 -lor、分離前置詞なし）の KEEP は妥当に維持。確認済み。

### B. 包括スイープ round 9 (SPLIT 7 / KEEP 11) の live 検証

SPLIT 7 件 — いずれも「限定詞+所有+名詞」連続語順で分離可能、すべて適用済み：
- **#35 scn → ✓** Live `A:「U me」 E:「frati cchiù granni」`。nap/sc/ro は名詞+所有サンドイッチ型で A|E KEEP 妥当。
- **#50 it/scn/vec → ✓** Live it `E:「Il mio」 A:「cane」`、scn `E:「U me」 A:「cani」`、vec `E:「El me」 A:「can」`。nap `A:「'O cane」 E:「mio」`/sc `A:「Su cane」 E:「meu」` は既に分離。
- **#73 it/scn/vec → ✓** Live it `E:「Il mio」 A:「gatto」`、scn `E:「U me」 A:「gattu」`、vec `E:「El me」 A:「gato」`。nap `A|E:「'O gatto mio」`/sc `A|E:「Su gatu meu」`（名詞+所有サンドイッチ）は KEEP 妥当。

KEEP 11 件 — 言語類型上の正当な不可分判定、live で確認：
- 限定詞+名詞+所有サンドイッチ: #35 nap/sc/ro、#73 nap/sc。所有が名詞句を跨ぐため分割で非連続化＝KEEP 妥当。
- 接尾所有（膠着一語）: #51 nap `'A nonnema`（nonna+ma）。
- 総合的単一動詞（助動詞なし）: #46 scn `parrai`(E|H)、#69 scn `scrissì`(D|E)、#53 ro `înfloresc`(C|E)。
- 単一分詞語: #52 vec `perso`（助動詞 Go は別 A 切片、分詞単体不可分）。
- 24時制一語トークン: #70 it/ro `21`(E|F)。
- 抱合自動詞: #84 ro `a răcit`(B|C)。
すべて round1〜8 で確立した KEEP 原則（synthetic preterite / 与格・属格語尾 / 24時制一語 / 自動詞抱合 / 膠着接尾辞 / 所有サンドイッチ）と整合。妥当。

### C. regression 確認 → 全件保持

round1〜8 の確実誤り修正・全分割バッチを live で再照合し、すべて保持（regression なし）：
#10 scn `Pò`/vec `Pòsto`、#39 scn `arrusbigghiàrimi`、#92 vec `Se|magna|i gyoza|a Caodano Cinese`、#41 sc `F:unu libru C:interessante`、#90 scn `prugrammazioni`、#98 scn `urdinari`、#84 it `D:la settimana E:scorsa`・nap/scn/vec/sc の D|E 分割・ro `D:săptămâna E:trecută`、#91 ro `C:o tradiție B:japoneză`・sc `C:una tradidura B:giaponesa`(B/C 逆転解消)、#40 nap/scn `Tu`、#73 全6言語の前置詞剥離 F・「每」剥離 G・所有 A|E 分割、#69 全6言語の名詞句分割、#46/#52/#53/#55/#70/#77/#43/#45/#13/#48/#80/#85 の分割バッチ。いずれも regression なし。

### D. 新規指摘（分割優先方針下の残存融合）

- **#49 vec — `D:「dime」` が動詞+与格接語の融合で族内唯一未分割【確実=NEW】**
  Live: vec `A:「Per piaser」 D:「dime」 B:「la strada」 F:「par」 G:「l'aeroporto」`。
  問題: `dime` = 命令形 *di'*（言え）+ 与格接語 *me*（私に）の融合。同一文の他言語はすべて動詞 D と与格受け手 B を分離している（it `D:「dica」 B:「a me」`、nap `D:「dicite」 B:「a me」`、scn `D:「dicìti」 B:「a mìa」`、sc `D:「nara」 B:「a mie」`、ro `D:「spuneți」 B:「-mi」`）。vec だけ動詞と接語を D に潰しており、しかも B(受け手) 自体が欠落している。これは本ファイルが #13 で既に確立した先例——vec/sc の `dame`(=da+me) を `D:「da」 B:「me」` に語境界分割した判定——と完全に同型であり、その先例に倣えば分離すべき残存融合。所有者の分割優先方針にも合致し、`di`→D、`me`→B で D→B 順は surface と一致、隣接同一 letter も生じない。
  Proposed fix: vec #49 を `A:「Per piaser」 D:「di」 B:「me」 E:「la strada」 F:「par」 G:「l'aeroporto」` に分割（接語与格 me を D から剥がし B へ。なお B には現在「la strada」が割当てられているが、他言語の B は受け手「私に」であり、vec の `la strada`(=道) は本来 E(=道/how to arrive) に対応する。実際 sc は `E:「su caminu」`、ro は `E:「drumul」` と「道」を E に置いており、vec の `la strada` も E にすべき。よって `D:「di」 B:「me」 E:「la strada」` が族整合形）。
  （注: vec の B が `la strada` になっているのは round1〜9 で見落とされていた role 割当てずれ。`dime` 分割と同時に「道」を E へ retag することで族と完全整合する。）

### 譲歩・撤回
本ラウンドで新たに撤回した earlier point はなし（#29/#19/#76/#36 は round2 で CONCEDE 済み・維持）。

### スコアカード
- round9 OPEN 課題（#69 it/ro 名詞句三重融合分割, live verified）: 2 / 2 ✓ 受理
- 包括スイープ round9（SPLIT 7 + KEEP 11, live verified）: 全件 ✓ 妥当
- regression: 0 件（全件保持）
- 新規 actionable issue: 1 件（#49 vec `dime` の動詞+与格接語融合＋`la strada` の role 割当てずれ【確実】）
- 本ラウンドでの追加譲歩: 0 件

round9 で私が指摘した #69 it/ro の三重融合は正確に分割され live 検証済み、開発チームの包括スイープ（SPLIT 7 / KEEP 11）もすべて妥当に適用・判定されています。ただし分割優先方針での族横断再走査で、#49 vec の `dime`（動詞+与格接語）が #13 `dame` の確立済み先例に反して族内で唯一未分割であり（かつ `la strada` の role が E ではなく B に誤割当て）、これは明確に actionable な取りこぼしのため CLOSE できません。

**ファイル状態: OPEN**
次にやること: #49 vec を `D:「di」 B:「me」 E:「la strada」 F:「par」 G:「l'aeroporto」` に修正（接語与格 me を D から B へ剥離＝#13 `dame`→`da`/`me` の先例と同型、加えて「道」la strada を B から E へ retag して族整合）。

## レビュアー再評価 — round 12 (Lorenzo Vianello / @romanista_dialettale)

round 11 では開発チームの個別回答テキストはファイル上に無く、orchestrator が round 10 OPEN 課題（#49 vec）に対して直接編集を適用したものとみて、`.wf_langmap_query.mjs` で live 値を逐一突き合わせて再検証しました。あわせて round1〜9 の確実誤り・全分割バッチの regression も再照合しました。

### A. round 10 OPEN 課題（#49 vec）の live 検証 → △ 部分適用（2点中1点のみ）

Live: vec `A:「Per piaser」 D:「dime」 E:「la strada」 F:「par」 G:「l'aeroporto」`。

私の round 10 提案は2点だった:
1. **`la strada` の role を B→E に retag → ✓ 適用済み（verified）**
   Live で `E:「la strada」` となっており、sc `E:「su caminu」`、ro `E:「drumul」`、it/nap/scn の `E:「come arrivare/comme arrivà/comu arrivari」`（=「道/到着の仕方」）と同一 role に揃った。これは正しく解消された。
2. **`dime`（動詞+与格接語）を `D:「di」 B:「me」` に分割 → ✗ 未適用**
   Live は依然 `D:「dime」` の融合のまま。`dime` = 命令形 *di'*（言え）+ 与格接語 *me*（私に）。
   - 族内対照: it `B:「a me」`、nap `B:「a me」`、scn `B:「a mìa」`、sc `B:「a mie」`、ro `B:「-mi」` — **全言語が受け手 B を独立切片として持つ**のに、vec だけ B を欠落させ、接語 *me* を動詞 D に潰したまま。
   - 同一ファイルの確立済み先例 #13: vec/sc の `dame`(=da+me) を `D:「da」 B:「me」` に語境界分割済み（live 再確認: #13 vec `D:「da」 B:「me」`、sc `D:「da」 B:「me」`）。`dime`→`di`/`me` は完全に同型の分離であり、語境界で切れる自立可能な与格接語。
   - 分割後 `D:「di」 B:「me」 E:「la strada」` で配列は D→B→E、隣接同一 letter は生じない。所有者の分割優先方針にも合致。
   よって2点目は actionable な取りこぼしとして残存する。

### B. regression 確認 → 全件保持

round1〜9 の確実誤り修正・全分割バッチを live で再照合し、すべて保持（regression なし）:
#10 scn `D:Pò`/vec `D:Pòsto`、#39 scn `D:arrusbigghiàrimi`、#92 vec `A:Se C:magna B:i gyoza D:a Caodano Cinese`、#41 sc `F:unu libru C:interessante`、#90 scn `prugrammazioni`、#98 scn `urdinari`、#84 it `D:la settimana E:scorsa`/族 D|E 分割/ro `D:săptămâna E:trecută`、#91 ro `C:o tradiție B:japoneză`/sc `C:una tradidura B:giaponesa`、#40 nap/scn `Tu`、#73 全6言語の F 前置詞剥離・G「每」剥離・A|E 所有分割（nap/sc の所有サンドイッチ KEEP 含む）、#69 it/ro 名詞句三分割。いずれも regression なし。

### C. 新規指摘
本ラウンドで新たな明確誤りは発見せず（新規 actionable issue: 0 件）。残課題は #49 vec `dime` 分割の1点のみ。

### 譲歩・撤回
本ラウンドで新たに撤回した earlier point はなし（#29/#19/#76/#36 は round2 で CONCEDE 済み・維持）。

### スコアカード
- round10 OPEN 課題 #49 vec: △ 部分適用（`la strada`→E retag ✓ / `dime` 分割 ✗）
- regression: 0 件（全件保持）
- 新規 actionable issue: 0 件
- 本ラウンドでの追加譲歩: 0 件
- 残存 actionable: 1 件（#49 vec `dime` の動詞+与格接語融合）

#49 vec の role retag（la strada→E）は正しく適用されたが、同時に依頼した `dime` の接語与格分割が未適用のまま残存しています。これは #13 `dame`→`da`/`me` という同一ファイル内の確立済み先例と完全同型で、しかも vec だけが族内で受け手 B を欠く明確な非対称であり、分割優先方針下の actionable な取りこぼしです。stylistic preference でも unsourced demand でもなく、語境界で切れる自立与格接語の具体的分割であるため、CLOSE できません。

**ファイル状態: OPEN**
次にやること: #49 vec を `D:「di」 B:「me」 E:「la strada」 F:「par」 G:「l'aeroporto」` に修正（接語与格 me を D から B へ剥離＝#13 `dame`→`da`/`me` の先例と同型。`la strada`→E retag は既に適用済みで維持）。

## 兄弟整合性監査 — 群09 (作業者 round 12)

- #11 [ro] D:「o」 E:「carte」 D:「nouă」 → **KEEP**。冠詞「o」(=a) と後置形容詞「nouă」(=new) が名詞 E:「carte」 を挟んで D…E…D となる正当な後置形容詞パターン。参照 en は D:「a new」(冠詞+形容詞をまとめて D) を用いており、ro はそれを分割しているだけで誤割当ではない。
- #25 [ro] C:「o」 … D:「companie」 C:「mare」 → **FIX**: 「mare」(=big) を C→F に retag。en F:「big」, ja F:「大きな」, 全兄弟 (it F:「grande」, nap F:「'na grossa」, scn F:「na granni」, vec F:「na granda」, sc F:「una manna」) が形容詞を F とする。ro のみ冠詞「o」と同じ C を重複させていた誤割当。F は当文で定義済み。
- #76 [sc] E:「Deo」 … E:「deo」 → **KEEP**。主語代名詞「I」が2節に現れる。参照 en も E:「I」 … E:「I」 と E を2回用いており、sc の二重 E は参照と完全一致。

## レビュアー再評価 — round 13 (Lorenzo Vianello / @romanista_dialettale)

開発チームの round 12 回答は「兄弟整合性監査」(#11/#25/#76 の3件) で、round 12 reviewer が残課題とした **#49 vec `dime`** には一切触れていません。`.wf_langmap_query.mjs` で全関連セルを live 照合し、(a) round 12 dev 監査3件の適否、(b) 残課題 #49 vec の現状、(c) regression を再検証しました。

### A. 開発チーム round 12「兄弟整合性監査」3件の live 検証

1. **#25 ro — `mare` の C→F retag → ✓ 受理（verified）**
   Live: ro `A:Tatăl meu E:lucrează B:‌la C:o D:companie F:mare`。形容詞 `mare`(=big) が F に retag され、en `F:big`/ja `F:大きな`/it `F:grande`/nap `F:'na grossa`/scn `F:na granni`/vec `F:na granda`/sc `F:una manna` と同一 role に揃った。冠詞 `o` は C のまま（限定詞）。配列 A,E,B,C,D,F に隣接同一 letter なし。確実な role 誤割当ての解消で妥当。

2. **#11 ro — `o…carte…nouă`(D…E…D) → ✓ KEEP 受理**
   Live: ro `D:o E:carte D:nouă`。参照 en は `D:a new`（冠詞+形容詞をまとめて D）。ro は同じ意味範囲を冠詞 `o`(D) と後置形容詞 `nouă`(D) に分けたうえで両者を D に保持しており、名詞 `carte`(E) を挟んだ D…E…D は**非隣接**の同一 letter で、本プロジェクトの「隣接同一 segment 禁止」規則に抵触しない。en の "a new"=D に role を揃えた正当な後置形容詞パターン。KEEP 妥当。

3. **#76 sc — `Deo…deo`(E…E) → ✓ KEEP 受理**
   Live: sc `E:Deo … C:cando E:deo …`。参照 en `E:I … E:I` と完全一致の二重主語 E。round2 で当方が既に CONCEDE 済みの論点でもあり、KEEP 妥当。

### B. 残課題 #49 vec `dime` の live 検証 → ✗ 未適用（dev 未対応・未反論）

Live: vec `A:Per piaser D:「dime」 E:la strada F:par G:l'aeroporto`。
- `dime` = 命令形 *di'*（言え）+ 与格接語 *me*（私に）の融合のまま。round 12 で依頼した `D:di B:me` への分割は **依然未適用**。
- 族内対照（live 再確認）: it `B:a me`、nap `B:a me`、scn `B:a mìa`、sc `B:a mie`、ro `B:-mi` — **群09 の他5言語すべてが受け手 B を独立切片として持つ**。さらに群外でも en/de/ru/uk/he/zh/ja/ko/vi/th/id 等ほぼ全言語が "me"(受け手) を独立 B として分割しており、vec のみが接語を動詞に潰して B を欠落。
- 同一ファイル内の確立済み先例 #13（live 再確認: vec `D:da B:me`、sc `D:da B:me`）と**完全に同型**の語境界分割（`dame`→`da`/`me` ⟺ `dime`→`di`/`me`）。分割後 `D:di B:me E:la strada` は配列 D→B→E で隣接同一 letter を生まない。所有者の分割優先方針にも合致。
- 開発チームは round 12 回答でこの項目に触れず、反論も提示していない。stylistic preference でも unsourced demand でもなく、in-file 先例と族内全言語の対照に裏づけられた具体的・actionable な分割であるため、HELD（保留）として CLOSE できない。

### C. regression 確認 → 全件保持
round1〜10 の確実誤り修正・全分割バッチを live 再照合し、すべて保持（regression なし）:
#10 scn `D:Pò`/vec `D:Pòsto`、#39 scn `arrusbigghiàrimi`、#92 vec `Se|magna|i gyoza|a Caodano Cinese`、#41 sc `F:unu libru C:interessante`、#90 `prugrammazioni`、#98 `urdinari`、#84 it `D:la settimana E:scorsa`/族 D|E/ro `D:săptămâna E:trecută`、#91 ro `C:o tradiție B:japoneză`/sc `C:una tradidura B:giaponesa`、#40 nap/scn `Tu`、#73 全6言語の F/G/A|E 分割、#69 it/ro 名詞句三分割、#49 vec `la strada→E` retag。いずれも regression なし。

### 譲歩・撤回
本ラウンドで新たに撤回した earlier point はなし（#29/#19/#76/#36 は round2 で CONCEDE 済み・維持）。round 12 dev 監査の #11/#25/#76 は反論ではなく独立した改善/KEEP 判定であり、いずれも妥当として受理。新規の譲歩は 0 件。

### スコアカード
- 開発チーム round12 監査（#25 FIX / #11・#76 KEEP, live verified）: 3 / 3 ✓ 受理
- regression: 0 件（全件保持）
- 新規 actionable issue: 0 件
- 本ラウンドでの追加譲歩: 0 件
- 残存 actionable: 1 件（#49 vec `dime` の動詞+与格接語融合・dev 未対応／未反論）

開発チーム round 12 の兄弟整合性監査3件はすべて妥当（#25 は確実な role 誤割当ての解消、#11/#76 は参照 en と一致する正当な KEEP）。しかし round 12 reviewer が明示的に残課題とした #49 vec `dime` の接語与格分割が今ラウンドでも未適用・未反論のまま残存しています。これは #13 `dame`→`da`/`me` という同一ファイル内の確立済み先例と完全同型で、群09 の他5言語（および群外ほぼ全言語）が受け手 B を独立切片として持つなか vec だけが B を欠く明確な非対称であり、分割優先方針下の具体的・actionable な取りこぼしです。よって CLOSE できません。

**ファイル状態: OPEN**
次にやること: #49 vec を `A:「Per piaser」 D:「di」 B:「me」 E:「la strada」 F:「par」 G:「l'aeroporto」` に修正（接語与格 me を動詞 `dime` から剥がし B へ＝#13 `dame`→`da`/`me` の先例と同型。`la strada`→E retag は適用済みで維持）。

## 開発チーム回答 — round 13 (作業者)

残課題は #49 vec `dime` の1件のみ。`.wf_langmap_query.mjs` で live 照合の上、判定しました。

### #49 vec — `dime`（命令形+与格接語）の分割 → **APPLIED (applied by orchestrator this round)**
Live: vec `A:「Per piaser」 D:「dime」 E:「la strada」 F:「par」 G:「l'aeroporto」`。
`dime` = 命令形 *di'*（言え, D）+ 与格接語 *me*（私に, B）の融合。
- 族内対照（live 確認済み）: it `B:「a me」`、nap `B:「a me」`、scn `B:「a mìa」`、sc `B:「a mie」`、ro `B:「-mi」` — 群09 の他5言語すべてが受け手 B を独立切片として持つ。vec だけ接語を動詞に潰し B を欠落。
- in-file 先例 #13（live 確認済み）: vec `D:「da」 B:「me」`、sc `D:「da」 B:「me」` — `dame`(=da+me) を語境界で `D:da / B:me` に分割済み。`dime`→`di`/`me` はこれと完全同型の語境界分割。
- 所有者の分割優先方針に合致。分割後の配列は D→B→E で隣接同一 letter を生じない。`di`+`me` は render rule 上 `dime` と同一表示（境界に空白なし＝glue marker 自動挿入）で surface 不変。
- レビュアー round 12/13 が依頼したとおり、接語与格 me を D から剥がし B へ。`la strada`→E の retag は既適用で維持。

レビュアーの指摘は stylistic preference でも unsourced demand でもなく、in-file 先例と族内全言語の対照に裏づけられた明確かつ actionable な分割であるため受理し、APPLIED とします。

これで本ファイルの残 actionable は解消。round2 で CONCEDE 済みの #29/#19/#76/#36、各 KEEP 判定（総合的過去・与格/属格語尾・24時制一語・自動詞抱合・膠着接尾辞・所有サンドイッチ・pro-drop）は再対応不要。

**ファイル状態: 残課題なし（#49 vec 適用で CLOSE 見込み）**

## レビュアー再評価 — round 14 (Lorenzo Vianello / @romanista_dialettale)

開発チームの round 13 回答（残課題 #49 vec `dime` の APPLIED 主張）を `.wf_langmap_query.mjs` で live 値と逐一突き合わせて検証し、あわせて round1〜12 で確立した全修正・全分割バッチの regression を再照合しました。

### A. round 13 actionable（#49 vec `dime`）の live 検証 → ✓ 受理（verified）

Live: vec `A:「Per piaser」 D:「di」 B:「‌me」 E:「la strada」 F:「par」 G:「l'aeroporto」`。
- `dime` = 命令形 *di'*（言え, D）+ 与格接語 *me*（私に, B）の融合が、`D:「di」 B:「‌me」` に語境界分割済み。接語 `me` には ZWNJ（‌）glue marker が前置されており、agglutinative/clitic 接続の表記ルール（feedback_glue_marker）に準拠＝surface は `dime` と同一表示で不変。
- 族内対照（live 再確認）: it `B:「a me」`、nap `B:「a me」`、scn `B:「a mìa」`、sc `B:「a mie」`、ro `B:「-mi」` — 群09 の他5言語すべてが受け手 B を独立切片として保持。さらに群外でも en/de/ru/uk/he/zh/ja/ko/es/pt/fr 等ほぼ全言語が "me"(受け手) を独立 B として割当てており、vec も同型に揃った。これまで vec だけが B を欠いていた族内非対称が解消。
- in-file 先例 #13（live 再確認: vec `D:「da」 B:「me」`、sc `D:「da」 B:「me」`）と完全同型の語境界分割（`dame`→`da`/`me` ⟺ `dime`→`di`/`me`）。
- `la strada`→E retag（round11 で先行適用）も維持され、sc `E:「su caminu」`/ro `E:「drumul」`/it `E:「come arrivare」` と同一 role。
- 配列 D→B→E で隣接同一 letter を生まず、分割優先方針にも合致。

私が round 10/12/13 で一貫して残課題としていた唯一の actionable が正確に解消された。受理。

### B. regression 確認 → 全件保持（0 件）

round1〜12 の確実誤り修正・全分割バッチ・KEEP 判定を live で再照合し、すべて保持（regression なし）:
- #10 scn `D:Pò`/vec `D:Pòsto`（人称一致）
- #39 scn `D:arrusbigghiàrimi`（誤訳解消）
- #92 vec `A:Se C:magna B:i gyoza D:a Caodano Cinese`（表記＋role 崩れ解消）
- #41 sc `F:unu libru C:interessante`（形容詞後置）
- #90 scn `prugrammazioni`／#98 scn `urdinari`（綴り）
- #84 it `D:la settimana E:scorsa`／ro `D:săptămâna E:trecută`（D|E 後置形容詞分割、ro `a răcit` 自動詞 KEEP 維持）
- #91 ro `C:o tradiție B:japoneză`／sc `C:una tradidura B:giaponesa`（B/C role 逆転解消）
- #40 nap/scn `A:Tu`（文頭大文字）
- #73 全6言語の F 前置詞剥離・G「每」剥離・A|E 所有分割（vec `E:El me A:gato`/ro `F:pe B:patul meu G:în fiecare C:noapte`、nap/sc の所有サンドイッチ KEEP 含む）
- #69 it `F:una G:lunga B:lettera H:ai C:suoi genitori`／ro `F:o B:scrisoare G:lungă C:părinților săi`（名詞句三分割、ro 与格語尾 KEEP）
- #13 vec/sc `D:da B:me`（接語与格分割）
- および #43/#45/#46/#55/#70/#77/#53/#80/#85/#48 の分割バッチ。
いずれも regression なし。

### C. 新規指摘
本ラウンドで新たな明確誤りは発見せず（新規 actionable issue: 0 件）。族内の語彙・性数一致・接語融合・メタフォニー・補助動詞選択・KEEP 判定（総合的過去・与格/属格語尾・24時制一語・自動詞抱合・膠着接尾辞・所有サンドイッチ・pro-drop）はすべて妥当。

### 譲歩・撤回
本ラウンドで新たに撤回した earlier point はなし（#29/#19/#76/#36 は round2 で CONCEDE 済み・維持）。本ラウンドの追加譲歩は 0 件。

### スコアカード
- round13 actionable（#49 vec `dime` 接語与格分割, live verified）: 1 / 1 ✓ 受理
- regression: 0 件（全件保持）
- 新規 actionable issue: 0 件
- 本ラウンドでの追加譲歩: 0 件
- 残存 actionable: 0 件

round 10 以降唯一の残課題であった #49 vec `dime` の接語与格分割が正確に適用され live 検証済みです（接語 me を B へ剥離＋ZWNJ glue marker、`la strada`→E retag 維持）。これは #13 `dame`→`da`/`me` の in-file 先例と完全同型で、族内全言語が持つ受け手 B 切片を vec も獲得し非対称が解消されました。round1〜12 の全修正に regression はなく、残る論点はすべて言語類型上正当な KEEP か round2 で CONCEDE 済みの defensible convention です。明確な error はすべて fixed-and-verified、actionable な残課題はありません。

**ファイル状態: CLOSED — 残課題なし**
