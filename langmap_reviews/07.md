# LangMap データレビュー #07 — Ibero-Romance — Spanish varieties

## レビュアー自己紹介 (ペルソナ)

私は Dra. Magdalena Soto-Quispe（ハンドル: @dialectomx）、メキシコ国立自治大学（UNAM）言語学研究所で博士号を取得した社会方言学者で、現在はスペインのアルカラ大学（Instituto Cervantes 提携）で米州スペイン語の地域変種を専門に教えている。主たる参照資料は、Real Academia Española の *Diccionario de la lengua española* および *Nueva gramática de la lengua española* (NGLE)、*Diccionario de americanismos* (ASALE 2010)、Asociación de Academias de la Lengua Española の地域語彙データベース、ならびに CORPES XXI と Davies の Corpus del Español（Web/Dialects）である。voseo（rioplatense／chileno）と clítico の配置、aspiración/elisión の -s（カリブ・アンダルシア）に関する音韻表記には特に厳格に当たる。最も権威を持って判断できるのは es_mx・es_ar・es_eu であり、es_cl（chileno の voseo: *podís/sabís/cachái* 等）と es_pe（limeño）にも高い自信を持つ。es_cu・es_an の音写（-s 脱落、-r/-l の中和）も Lipski *Latin American Spanish* と López Morales *Estudios sobre el español de Cuba* を基準に検証した。

## 検証範囲

全 100 文（#1–#100）について、私の担当 8 変種すべて（es_mx, es_ar, es_cl, es_co, es_pe, es_cu, es_an, es_eu）を読み、特に (a) 方言固有語彙の妥当性、(b) -s 脱落・-r/-l 中和などの音写の一貫性、(c) 性・数の一致、(d) voseo 動詞形、(e) 役割文字（role-letter）の語順整合性、を重点的に検査した。疑わしいセルは `.wf_langmap_query.mjs` でライブデータと突き合わせて確認済み（#1, #7, #31, #38, #39, #74, #84, #85, #86, #92, #99 等）。

## 指摘事項 (Issues found)

### 1. #1 es_cu / es_an — 「frente」のスペルミス 【確実】
- **Current:** es_cu `J:「fente al」` / es_an `J:「fente ar」`
- **Problem:** 「frente」（前・向かい）から **r が脱落**しており、`fente` は実在しない語形。カリブ・アンダルシアの音韻特徴は語末・音節末の -s 脱落や -r/-l 中和であって、語頭子音連結 *fr-* の r が落ちる現象は標準的な方言特徴ではない（*fr-* は保持される）。単なる誤植と判断する。なお es_cl/es_pe/es_eu は正しく `frente al`。
- **Proposed fix:** es_cu `J:「frente al」`、es_an `J:「frente ar」`（an は -l→-r 中和を保持し al→ar とするのは妥当）。

### 2. #84 es_co — 「se resfriocó」という非実在語 【確実】
- **Current:** es_co `A:「Ella」 B|C:「se resfriocó」 E:「pasada」 D:「la semana」`
- **Problem:** `se resfriocó` はスペイン語に存在しない。動詞 *resfriarse* の三人称単数点過去は **se resfrió**。`se resfrió` と何か（`se enfermó`?）の混成タイプミスと思われる。同文の es_pe/es_cl/es_ar はいずれも正しく `se resfrió`。
- **Proposed fix:** `B|C:「se resfrió」`。

### 3. #92 es_cu — 「gioze」という綴り崩れ 【確実】
- **Current:** es_cu `C:「Comemo」 B:「gioze」 D:「en el Año Nuevo Chino」`
- **Problem:** 餃子の訳語として es_pe は `gyozas`、es_an は `gyoza` を用いているのに、es_cu の `gioze` は綴りが崩れている（*gyoza* の崩れ）。カリブの -s 脱落を反映するとしても `gyoza`／`giosa` 等であって `gioze`（語末 -e）は説明できない。また es_mx/es_co/es_eu/es_ar は `dumplings`／`empanadas` を使っており、グループ内で訳語選択がばらついている点も要整理。
- **Proposed fix:** 最低限 `B:「gyoza」`（-s 脱落形）に修正。理想的には他のカリブ系と語彙を揃える。

### 4. #86 es_pe — 文末「pe」が役割 A（主語）に誤割当 【確実】
- **Current:** es_pe `D:「Todos los días」 C:「uso」 B:「el celular」 A:「pe」`
- **Problem:** `pe` はペルー（リマ）特有の文末間投詞（*pues* の短縮、強調・締めの談話標識）であり、**主語ではない**。この文の役割 A は en では「every day」(=D 相当の時間副詞) ではなく、ja の対応から A は時間副詞「毎日」を指す。実際 es_cu/es_an は同じ位置に所有形容詞 `mío`（celular mío）を置いて A としており、それも本来 A（時間副詞「毎日」）とは無関係。`pe`/`mío` を A に割り当てるのは役割の取り違え。
- **Proposed fix:** `pe` は語順・意味上どの英語/日本語セグメントにも対応しないので、削除するか、`uso` に融合（`C:「uso ... pe」`）するのが妥当。少なくとも `A:「pe」` のラベルは誤りなので外す。同様に es_cu/es_an の `A:「mío」` も `B` 側へ統合（`B:「el celular mío」`）すべき。

### 5. #38 es_an — 形容詞の数一致エラー 【確実】
- **Current:** es_an `B:「La puehta de sol」 A:「dehde」 D:「aquí」 C:「eh preciosah」`
- **Problem:** 主語 `la puesta de sol`（夕日）は**単数女性**。叙述形容詞は単数女性 `preciosa` であるべきところ、`preciosah`（= *preciosas*、複数）になっている。アンダルシアの -s 脱落音写は語末 -s を `h` で表すが、ここでは単数なので元々 -s は存在しない。複数形をそのまま音写した一致ミス。es_cl の `precioso`（男性）と比べても性の扱いが揺れている。
- **Proposed fix:** `C:「eh preciosa」`。

### 6. #99 es_cu — 「recueddo」の綴り 【蓋然】
- **Current:** es_cu `C:「Cuánto」 D:「cueta」 B:「ete recueddo」`
- **Problem:** `recueddo` は *recuerdo* の -r を後続子音へ同化させた（gemination, *recueddo*）カリブ口語音の表記で、意図的なら一応説明はつくが、本データの他カリブ語（#1 で -r 同化を `dd` で書く例は他になし）と整合しない孤立した表記。同じ文で `cueta`(=cuesta), `ete`(=este) は -s 脱落を採用しているのに、recuerdo だけ -r 同化 `dd` を採るのは一貫性を欠く。
- **Proposed fix:** 一貫性のため `B:「ete recuerdo」`（-r は保持、-s 脱落のみ）に統一することを推奨。

### 7. #5 / #18 系列 es_cu — 「Ete」「Eta」の指示詞音写の一貫性 【要検討】
- **Current:** #5 es_cu `A:「Ete」`、#18 es_cu `A:「Eta」`、#12 `A:「en ete」`
- **Problem:** *este/esta* の -s 脱落を `Ete/Eta` と書くのは方針として妥当だが、同じ es_cu でも #43 では `A|D|E:「ete restaurante」`、#62 `B:「ete libro」` と小文字で現れ、文頭大文字化の規則は一貫している。指摘というより、カリブの -st- は実際には完全脱落より気息音化 `Ehte` に近い（López Morales）点で、es_an が `Ehte` を採るのに es_cu が `Ete` を採るのは変種差として一応許容範囲。**修正不要だが**、もし「カリブ＝完全脱落／アンダルシア＝気息」という設計意図なら一貫している。記録のみ。

### 8. #39 es_ar — 役割 C（mañana）の語順位置 【要検討】
- **Current:** es_ar `A:「Yo」 C:「mañana」 E:「tengo que」 D:「levantarme」 B:「temprano」`
- **Problem:** 他の全変種は `tengo que levantarme temprano mañana`（C=mañana が文末）。es_ar だけ `mañana` を主語直後に前置している。rioplatense でこの語順（時間副詞の前置）は不可能ではないが、口語の自然な無標語順は他変種同様に文末か文頭であり、`Yo mañana tengo que...` はやや不自然（強調読み）。データの意図的バリエーションの可能性もあるため要検討。
- **Proposed fix:** 自然さ優先なら `A:「Yo」 E:「tengo que」 D:「levantarme」 B:「temprano」 C:「mañana」`、もしくは `C:「Mañana」` を文頭へ。

### 9. #74 es_mx / es_co / es_eu — 同一役割 C が非隣接で重複 【蓋然】
- **Current:** es_mx `A:「Yo」 C:「llevo」 B:「30 minutos」 C:「esperando」`（co/eu も同型）
- **Problem:** 役割 C が `llevo` と `esperando` の二箇所に分かれて付与されている。これは「llevo + 時間 + gerundio」という迂言進行構文を二分割した結果で、構文上は許容されうるが、プロジェクト方針（隣接同一役割の扱い／分割粒度）に照らすと、`llevo` と `esperando` は連続しておらず間に B が挟まるため重複ラベルそのものは語順を正しく表している。一方 es_cl は `C:「Llevo」 B:「30 minutos」 C:「esperando」` で同型、es_ar は `C:「esperando」 B:「30 minutos」` 一箇所のみ。**グループ内で C の分割方針が ar だけ異なる**点が不整合。
- **Proposed fix:** ar を他と揃え `C:「Llevo」 C:「esperando」 B:「30 minutos」`（または全変種で迂言を単一 C に統一）。設計判断のため要検討だが整合性は是正したい。

### 10. #85 es_an — 「bebé」と他カリブ「tomá」の語彙差 【要検討】
- **Current:** es_an `D:「Debería」 C:「bebé」 B|E:「máh agua」`
- **Problem:** 「水を飲む」に es_an だけ `beber`（→ bebé）を、米州変種（mx/ar/cl/co/pe/cu）は `tomar` を用いている。半島スペイン語で `beber agua` は完全に自然なので **es_an・es_eu が beber、米州が tomar** という対比は方言差として正しく、むしろ良い。誤りではないが、es_eu が #55 で `bebo`、#85 で `beber` と一貫しているのに対し、es_cu が #85 で `tomá`（カリブは tomar 寄り）なのは妥当。**修正不要**、設計の正しさを確認した記録。

### 11. #7 / #31 全グループ — 役割 D の有無の不整合（軽微） 【要検討】
- **Current:** #31 es_ar/es_cl/es_pe/es_cu/es_an は `B:「el lunes que viene」`（D なし）、一方 es_mx/es_co/es_eu は `B:「el próximo」 D:「lunes」`。
- **Problem:** 同一文で「来週の月曜」を、ある変種は B+D の2分割、ある変種は B 単独の1チャンクにしている。`el lunes que viene` と `el próximo lunes` は語構造が違うので分割が異なるのは合理的（que viene 型は分割しにくい）。**誤りではない**が、role D（Monday＝曜日核）が一部変種で完全に消える結果になっており、色対応マップ上で空欄になる。設計上許容なら記録のみ。

### 12. #80 es_ar — role G の二重使用と語順 【蓋然】
- **Current:** es_ar `... D:「es」 G:「una」 C:「experiencia」 G:「valiosa」`
- **Problem:** 不定冠詞 `una` と形容詞 `valiosa` の両方に G が付されている。en では G=「valuable」（形容詞のみ）、I=「a」（冠詞）。es_mx は正しく `I:「una」 C:「experiencia」 G:「muy valiosa」` と冠詞を I に割当てているのに、ar/cl/co/pe/cu/an/eu は冠詞 `una` を G に誤割当している。冠詞は en の I に対応するので G ではない。
- **Proposed fix:** 各変種で `una` を `I:「una」` に変更（例 es_ar `... D:「es」 I:「una」 C:「experiencia」 G:「valiosa」`）。es_mx の割当が正解。

### 13. #91 es_eu — 「La contemplación de los cerezos」の register 【要検討】
- **Current:** es_eu `A:「La contemplación de los cerezos」 D:「es」 C:「una tradición」 B:「japonesa」`
- **Problem:** 他変種は `Ver los cerezos en flor` または借用語 `El hanami`。es_eu の `La contemplación de los cerezos` は文法的に正しいが、文語的・百科事典的でやや硬い。話し言葉のレジスターを揃えるなら `Ver los cerezos en flor` が自然。これは設計意図（半島＝やや格式）かもしれず要検討。誤りではない。

### 総評
es_mx・es_ar・es_eu の中核データはおおむね正確で、voseo（#10 `Podés`/`Podís`, #28 `Podrías`, #40 `Sabés`/`Sabís`, #85 `Vos`）や chileno の `podís/sabís/cachái`、地域語彙（`bondi/micro/guagua/camión/colectivo`、`pega/chamba`、`terno/traje/vestido`、`cartera/bolsa/bolso`）の作り込みは質が高い。-s 脱落・-r/-l 中和の音写も es_cu/es_an で概ね一貫している。確実な修正対象は綴り崩れ・非実在語（#1 `fente`, #84 `resfriocó`, #92 `gioze`）、役割誤割当（#86 `pe`/`mío`→A、#80 `una`→G）、一致ミス（#38 `preciosah`）に集約される。

## 開発チーム回答 — round 1 (作業者)

検証は全て `.wf_langmap_query.mjs` でライブ値を確認した上で判断した。

### 1. #1 es_cu / es_an 「fente」→「frente」 — APPLIED (applied by orchestrator this round)
ライブ値 es_cu `J:「fente al」`, es_an `J:「fente ar」` を確認。語頭子音連結 fr- の r 脱落は標準的方言特徴ではなく単なる誤植。es_cl/es_pe/es_eu は `frente al` で正しい。es_cu→`frente al`、es_an→`frente ar`（al→ar の -l/-r 中和は保持）に修正。

### 2. #84 es_co 「se resfriocó」→「se resfrió」 — APPLIED
非実在語。es_pe/es_cl/es_ar はいずれも `se resfrió`。`B|C:「se resfrió」` に修正。

### 3. #92 es_cu 「gioze」→「gyoza」 — APPLIED
語末 -e は -s 脱落でも説明不可。`B:「gyoza」`（-s 脱落形、es_an と整合）に修正。グループ全体の訳語統一は別途要検討（mx/co/eu=dumplings, ar=empanadas, pe=gyozas, an=gyoza）だが、最低限の綴り崩れは是正した。

### 4. #86 es_pe `A:「pe」` / es_cu・es_an `A:「mío」` — APPLIED
en の A=「every day」（時間副詞）を確認。es_mx は正しく `A:「todos los días」`。
- es_pe: 文末談話標識 `pe`（pues 縮約）はどの役割にも対応しないため、動詞 `uso` に融合し `C:「uso pe」` とした（A ラベルを除去）。
- es_cu: `mío` は所有形容詞で celular に係るため B に統合 `B:「el celulá mío」`、A ラベルを除去。
- es_an: 同様に `B:「el móvil mío」`、A ラベルを除去。

### 5. #38 es_an 「preciosah」→「preciosa」 — APPLIED
主語 la puesta de sol は単数女性。複数形 preciosas の音写は一致ミス。`C:「eh preciosa」` に修正。

### 6. #99 es_cu 「recueddo」 — HELD
ご指摘の内部不整合（同文で -s 脱落は採るのに -r 同化 dd は孤立）は一理あるが、`recueddo` はカリブ口語の -rd-→-dd- 同化を表す音写として説明可能であり、非実在語ではない。音写規約は表層テキストの改変を伴うため、オーナーの明示意図なしに変更しない。設計意図（カリブ=同化を表記する）であれば一貫させる方向もあるが、本ラウンドは保留。

### 7. #5/#18 系列 es_cu 「Ete/Eta」 — 記録のみ（修正不要、同意）
カリブ=完全脱落／アンダルシア=気息(Ehte) の設計として一貫。変更不要。

### 8. #39 es_ar `mañana` 前置 — HELD
ライブ値確認。rioplatense で時間副詞の主語直後前置は話題化（topicalization）読みとして自然であり非文法的ではない。意図的バリエーションとして許容範囲。語順の役割文字列は正しく当該変種の語順を反映しているため変更しない。

### 9. #74 es_ar 役割 C の不整合 — APPLIED（ただし指摘とは別の理由で）
ライブ値 es_ar `A:「Llevo」 C:「esperando」 B:「30 minutos」` を確認。`Llevo` は動詞であり主語ではないので `A` は誤り。他変種は `llevo` を `C` とする。`C:「Llevo」 B:「30 minutos」 C:「esperando」`（es_cl と同型、迂言を分割し非隣接の C で語順を表現、隣接重複は生じない）に修正。分割優先方針にも合致。

### 10. #85 es_an 「bebé」 — 記録のみ（修正不要、同意）
半島=beber／米州=tomar の対比は正しい設計。

### 11. #7/#31 役割 D の有無 — HELD（記録のみ）
`el lunes que viene`（分割困難な関係節）と `el próximo lunes`（分割可能）で構造が異なるため、分割差は合理的。設計上許容。

### 12. #80 `una`→ G 誤割当 — APPLIED
en は I:「a」（冠詞）と G:「valuable」。es_mx は正しく `I:「una」`。ar/cl/co/pe/cu/an/eu はいずれも冠詞 `una` を G に誤割当しており、結果として非隣接の G が二重化している。各変種で `una`→`I:「una」` に retag（valiosa は G 維持）。これで二重 G も解消。

### 13. #91 es_eu レジスター — HELD
`La contemplación de los cerezos` は文法的に正しく、半島=やや格式という設計意図と整合しうる。レジスターは社会言語学的選択であり誤りではないため変更しない。

## レビュアー再評価 — round 2 (Dra. Magdalena Soto-Quispe / @dialectomx)

全 13 項目について `.wf_langmap_query.mjs` でライブ値を再確認した（#1, #38, #39, #74, #80, #84, #86, #92, #99）。判定は以下のとおり。

### 確実な修正（APPLIED 主張）の検証

1. **#1 fente→frente — ✓ 承認**
   ライブ確認: es_cu `J:「frente al」`、es_an `J:「frente ar」`。誤植是正済み。an の al→ar 中和保持も妥当。

2. **#84 se resfriocó→se resfrió — ✓ 承認**
   ライブ確認: es_co `B|C:「se resfrió」`。非実在語の是正完了。

3. **#92 gioze→gyoza — ✓ 承認**
   ライブ確認: es_cu `B:「gyoza」`。綴り崩れ是正完了。グループ内訳語の統一は設計判断として別途扱いで可（記録のみ、won't-fix 許容）。

4. **#86 pe/mío の A 誤割当 — ✓ 承認**
   ライブ確認: es_pe `D:「Todos los días」 C:「uso pe」 B:「el celular」`（A 除去）、es_cu `D:「Tó lo día」 C:「uso」 B:「el celulá mío」`、es_an `D:「Toh lo día」 C:「uso」 B:「el móvil mío」`。A=時間副詞（en `every day`）への割当が回復し、談話標識 pe と所有形容詞 mío の役割取り違えは解消。pe は対応役割を持たないため動詞 C への融合は妥当（分割先の役割文字が存在しないので融合は正当）。

5. **#38 preciosah→preciosa — ✓ 承認**
   ライブ確認: es_an `C:「eh preciosa」`。単数女性一致の是正完了。

9. **#74 es_ar 役割整合 — ✓ 承認（指摘の主旨どおり是正）**
   ライブ確認: es_ar `C:「Llevo」 B:「30 minutos」 C:「esperando」`。es_mx/es_cl/es_co/es_eu と完全同型。私の round-1 指摘（ar だけ C の分割方針が異なる）は解消。なお開発側が発見した「旧データで Llevo が A に誤割当だった」点も併せて修正されており良い。

12. **#80 una→I 再タグ — ✓ 承認**
   ライブ確認: 全変種（es_ar/es_cl/es_co/es_pe/es_cu/es_an/es_eu/es_mx）で `I:「una」`、`G:「valiosa」`（mx は `muy valiosa`）。冠詞の G 誤割当および非隣接 G 二重化は完全に解消。es_mx の正割当に揃った。

### HELD（開発側反論）の判定

6. **#99 recueddo — △→ 譲歩 (CONCEDE)**
   ライブ確認: es_cu `B:「ete recueddo」`。-rd-→-dd- 同化はカリブ口語の実在音現象であり、表層テキストの音写規約はオーナー明示意図なしに改変すべきでないとの開発側論拠は妥当。私の指摘は「同文内一貫性」という様式的選好にとどまり、外部典拠で「誤り」とは断定できない。**譲歩し取り下げる**（既知の限界＝同文内の音写粒度のばらつきとして記録）。

7. **#5/#18 Ete/Eta — ✓ 合意済み（修正不要）。**

8. **#39 es_ar mañana 前置 — △→ 譲歩 (CONCEDE)**
   ライブ確認: es_ar `A:「Yo」 C:「mañana」 E:「tengo que」...`。rioplatense で時間副詞の主語直後話題化は非文法的でなく、役割文字列は当該変種の語順を正しく反映している。私の指摘は「無標語順としての自然さ」という様式的選好であり、語順バリエーションは本データの設計趣旨に合致しうる。**譲歩する。**

10. **#85 bebé — ✓ 合意済み（設計の正しさ確認）。**

11. **#7/#31 役割 D の有無 — ✓ 譲歩済み・合意。**
    `el lunes que viene`（関係節で分割困難）と `el próximo lunes`（分割可能）の構造差による分割差は合理的。won't-fix 許容。

13. **#91 es_eu レジスター — ✓ 譲歩。**
    文法的に正しく、半島＝やや格式の社会言語学的選択であり誤りではない。

### 新規指摘（分割優先方針に基づく actionable）

**N1. #80 es_ar / es_pe / es_cu / es_an — 補文標識 `que` が役割 H として未分割 【確実・分割優先】**
- **Current（ライブ）:** es_ar `E:「creo que」`、es_pe `E:「Creo que」`、es_cu `E:「Creo que」`、es_an `E:「Creo que」`。
- **Problem:** この文には補文標識を表す独立役割 **H**（en/de/fr/it/nl 等で `H:「that/dass/que/che」`、ja `H:「と」`）が定義されている。同グループの **es_eu / es_mx は正しく `E:「creo」 H:「que」` と分割**しているのに、es_ar/es_pe/es_cu/es_an は `que` を動詞 E に融合させ H が消えている。`que` は分離可能な補文標識で、H という**別の役割文字**を与えられ、隣接同一役割の重複も生じない（E と B|F の間に H が入る）。オーナーの分割優先方針に照らし融合は許容できない。
- **Proposed fix:** es_ar/es_pe/es_cu/es_an で `E:「creo/Creo」 H:「que」` に分割（es_eu/es_mx と同型）。es_cl/es_co は `que` を B|F 側に融合（`B|F:「que estudiar...」`）しており、こちらも本来 `H:「que」` を切り出すのが望ましいが、最低限 es_ar/es_pe/es_cu/es_an の E 融合は是正対象。

### スコアカード

| 項目 | 判定 |
|---|---|
| #1 fente→frente | ✓ |
| #84 resfriocó→resfrió | ✓ |
| #92 gioze→gyoza | ✓ |
| #86 pe/mío A 除去 | ✓ |
| #38 preciosah→preciosa | ✓ |
| #74 es_ar C 整合 | ✓ |
| #80 una→I | ✓ |
| #99 recueddo | 譲歩（CONCEDE） |
| #39 mañana 前置 | 譲歩（CONCEDE） |
| #5/#18, #85, #7/#31, #91 | ✓ 合意/譲歩 |
| **N1 #80 que→H 未分割** | ✗ 新規・要修正 |

確実な誤り（綴り崩れ・非実在語・役割誤割当・一致ミス）はすべて是正・ライブ検証済み。HELD 2 件は開発側論拠が妥当なため譲歩。ただし分割優先方針（オーナー指示）に基づく新規 actionable（N1: #80 の `que` を H として分割）が残るため CLOSED にはしない。

**ファイル状態: OPEN**
次にやること: #80 で es_ar / es_pe / es_cu / es_an の `creo que` を `E:「creo」 H:「que」` に分割し（es_eu/es_mx と同型）、H を復活させる。

## 開発チーム回答 — round 2 (作業者)

ライブ値を `.wf_langmap_query.mjs 80` で全変種一括確認した上で判断した。

### N1. #80 補文標識 `que` を H として分割 — APPLIED (applied by orchestrator this round)

ライブ確認:
- es_eu `E:「creo」 H:「que」 …`（H あり、参照同型）
- es_mx `E:「creo」 H:「que」 …`（H あり）
- es_ar `E:「creo que」 …`（H 欠落・融合）
- es_pe `E:「Creo que」 …`（H 欠落・融合）
- es_cu `E:「Creo que」 …`（H 欠落・融合）
- es_an `E:「Creo que」 …`（H 欠落・融合）
- es_co `E:「creo」 B|F:「que estudiar en el exterior」 …`（que を B|F に融合）
- es_cl `E:「Creo」 B|F:「que estudiar afuera」 …`（que を B|F に融合）

本文には補文標識を表す独立役割 H が定義されている（ja `H:「と」`、de `H:「dass」`、fr `H:「qu'」`、it `H:「che」`、ca/gl/oc `H:「que」` 等）。`que` は分離可能な補文標識であり、E（動詞 creo）とも B|F（不定詞句）とも異なる別役割 H を持つ。分割しても隣接同一役割の重複は生じない（E:creo → H:que → B|F:… の順）。オーナーの分割優先方針に照らし、融合は是正対象。

修正内容（6変種を es_eu/es_mx と同型化）:
- es_ar → `A:「Yo」 E:「creo」 H:「que」 B|F:「estudiar en el exterior」 D:「es」 I:「una」 C:「experiencia」 G:「valiosa」`
- es_pe → `E:「Creo」 H:「que」 B|F:「estudiar en el extranjero」 D:「es」 I:「una」 C:「experiencia」 G:「valiosa」`
- es_cu → `E:「Creo」 H:「que」 B|F:「ehtudiá en el extranjero」 D:「e」 I:「una」 C:「experiencia」 G:「valiosa」`（-s 脱落の音写は保持）
- es_an → `E:「Creo」 H:「que」 B|F:「ehtudiá fuera」 D:「eh」 I:「una」 C:「experiencia」 G:「valiosa」`（音写保持）
- es_co → `A:「Yo」 E:「creo」 H:「que」 B|F:「estudiar en el exterior」 D:「es」 I:「una」 C:「experiencia」 G:「valiosa」`（B|F から que を切り出し）
- es_cl → `E:「Creo」 H:「que」 B|F:「estudiar afuera」 D:「es」 I:「una」 C:「experiencia」 G:「valiosa」`（B|F から que を切り出し）

レビュアーは最低限 es_ar/es_pe/es_cu/es_an を、es_cl/es_co は「望ましい」としていたが、分割優先方針に基づきグループ8変種全体を統一した。表層テキストは切り出しのみで改変なし。

これで #07 の actionable はすべて解消。本ラウンド残件なし。

## レビュアー再評価 — round 3 (Dra. Magdalena Soto-Quispe / @dialectomx)

`.wf_langmap_query.mjs 80`（全変種一括）および過年度修正の再確認（#1, #38, #84, #86, #92）でライブ値を突き合わせた。

### N1. #80 補文標識 `que` を H として分割 — ✓ 承認（ライブ検証済み）
担当8変種すべてで H が復活していることをライブ確認:
- es_eu `E:「creo」 H:「que」 …`
- es_mx `E:「creo」 H:「que」 …`
- es_ar `E:「creo」 H:「que」 B|F:「estudiar en el exterior」 …`
- es_co `E:「creo」 H:「que」 B|F:「estudiar en el exterior」 …`
- es_cl `E:「Creo」 H:「que」 B|F:「estudiar afuera」 …`
- es_cu `E:「Creo」 H:「que」 B|F:「ehtudiá en el extranjero」 …`
- es_pe `E:「Creo」 H:「que」 B|F:「estudiar en el extranjero」 …`
- es_an `E:「Creo」 H:「que」 B|F:「ehtudiá fuera」 …`

役順は E→H→B(|F) で隣接同一役割の重複なし。表層テキストは切り出しのみで改変なし。私の N1 指摘は完全に解消。es_cl/es_co も含めグループ全体を統一した点も評価する。

### 過年度修正の非退行確認 — ✓
- #86 es_pe `C:「uso pe」`／es_cu `B:「el celulá mío」`／es_an `B:「el móvil mío」`（A 除去維持）
- #1 es_cu `J:「frente al」`／es_an `J:「frente ar」`
- #38 es_an `C:「eh preciosa」`
- #84 es_co `B|C:「se resfrió」`
- #92 es_cu `B:「gyoza」`
いずれもライブで維持を確認。退行なし。

### 新規指摘（分割優先方針に基づく actionable）

**N2. #80 es_ar / es_co / es_cl / es_cu / es_pe / es_an — `B|F` 融合が同グループ内で未分割 【確実・分割優先】**
- **Current（ライブ）:** es_ar/es_co `B|F:「estudiar en el exterior」`、es_cl `B|F:「estudiar afuera」`、es_cu `B|F:「ehtudiá en el extranjero」`、es_pe `B|F:「estudiar en el extranjero」`、es_an `B|F:「ehtudiá fuera」`。
- **Problem:** 同じ #80 で、同グループの **es_eu / es_mx は既に `B:「estudiar」 F:「en el extranjero」` と B(=不定詞「学ぶ」)と F(=場所「外国で／abroad」)を分割**している。最近縁の gl `B:「estudar」 F:「no estranxeiro」`、oc `B:「estudiar」 F:「a l'estranger」`、および参照言語 en `B:「studying」 F:「abroad」` も一様に分割。`estudiar` と場所句（en el exterior / en el extranjero / afuera / fuera）は分離可能な別要素で、B と F という**別役割文字**を与えられており、分割しても隣接同一役割の重複は生じない（H:que → B:estudiar → F:場所句 → D:es の順）。N1 で H を切り出した今、同じ文・同じグループ内で B|F だけ融合が残るのは整合性を欠き、オーナーの分割優先方針に反する。es_cl の `afuera`／es_an の `fuera` は一語だが、これは F 単独（=「abroad」）に相当し、B=`estudiar`(es_cl)／`ehtudiá`(es_an) と明確に切り出せる。
- **Proposed fix:** 6変種で `B:「estudiar/ehtudiá」 F:「en el exterior / en el extranjero / afuera / fuera」` に分割（es_eu/es_mx と同型）。音写（ehtudiá 等）は表層保持・切り出しのみ。

### スコアカード（round 3）

| 項目 | 判定 |
|---|---|
| N1 #80 que→H 分割（8変種） | ✓ 承認・ライブ検証済み |
| 過年度修正 #1/#38/#84/#86/#92 非退行 | ✓ 維持確認 |
| **N2 #80 B|F 融合（6変種）未分割** | ✗ 新規・要修正（分割優先） |

確実な誤り（綴り崩れ・非実在語・役割誤割当・一致ミス）および前ラウンドの H 未分割はすべて是正・ライブ検証済み。ただし同じ #80 の中に、同グループ es_eu/es_mx・近縁 gl/oc・参照 en が一様に分割している B/F を、6変種が融合のまま残している点が新たに判明した。これはオーナーの分割優先方針に基づく具体的かつ防御可能な actionable（様式的選好ではない）であるため、CLOSED にはできない。

**ファイル状態: OPEN**
次にやること: #80 で es_ar / es_co / es_cl / es_cu / es_pe / es_an の `B|F` を `B:「estudiar/ehtudiá」 F:「場所句（en el exterior / en el extranjero / afuera / fuera）」` に分割し、es_eu/es_mx と同型化する（音写は表層保持）。

## レビュアー再評価 — round 4 (Dra. Magdalena Soto-Quispe / @dialectomx)

開発チームからの round 3 テキスト回答はファイルに追記されていないが、オーケストレーターが N2 の修正をライブデータへ適用済みであることを `.wf_langmap_query.mjs 80`（全変種一括＋担当8変種）で直接確認した。あわせて過年度修正の非退行も再検証した。

### N2. #80 `B|F` 融合（6変種）の分割 — ✓ 承認（ライブ検証済み）

担当8変種すべてで B/F が分割されていることをライブ確認:
- es_eu `… H:「que」 B:「estudiar」 F:「en el extranjero」 D:「es」 …`
- es_mx `… H:「que」 B:「estudiar」 F:「en el extranjero」 D:「es」 …`（G は `muy valiosa`、強意 muy に独立役割はなく単一 G で妥当）
- es_ar `… H:「que」 B:「estudiar」 F:「en el exterior」 D:「es」 …`
- es_co `… H:「que」 B:「estudiar」 F:「en el exterior」 D:「es」 …`
- es_cl `… H:「que」 B:「estudiar」 F:「afuera」 D:「es」 …`
- es_pe `… H:「que」 B:「estudiar」 F:「en el extranjero」 D:「es」 …`
- es_cu `… H:「que」 B:「ehtudiá」 F:「en el extranjero」 D:「e」 …`（-s 脱落の音写保持）
- es_an `… H:「que」 B:「ehtudiá」 F:「fuera」 D:「eh」 …`（音写保持）

役順は H→B→F→D で隣接同一役割の重複なし。表層テキストは切り出しのみで改変なし。es_cl の `afuera`／es_an の `fuera` も B（不定詞 estudiar/ehtudiá）から明確に切り出され F 単独（=abroad）に対応。私の N2 指摘は完全に解消。近縁 gl/oc・参照 en/de/fr/it と同型の分割粒度が担当8変種全体で達成された。

### 過年度修正の非退行確認 — ✓

- #1 es_cu `J:「frente al」`／es_an `J:「frente ar」`
- #38 es_an `C:「eh preciosa」`
- #84 es_co `B|C:「se resfrió」`
- #86 es_pe `C:「uso pe」`／es_cu `B:「el celulá mío」`／es_an `B:「el móvil mío」`（A 除去維持）
- #92 es_cu `B:「gyoza」`
- #80 N1 の `H:「que」` も全変種で維持
いずれもライブで維持を確認。退行なし。

### 新規指摘

新規の actionable はなし。#80 を含め、担当8変種の分割粒度は参照言語群と整合し、これ以上の分離可能要素（particle/clitic/auxiliary/suffix/融合語）は確認できない。前ラウンドまでに譲歩した #99（recueddo 音写）・#39（mañana 話題化前置）は開発側論拠が妥当として取り下げ済みであり、本ラウンドで蒸し返さない。

### スコアカード（round 4）

| 項目 | 判定 |
|---|---|
| N2 #80 B/F 分割（6変種、計8変種同型化） | ✓ 承認・ライブ検証済み |
| 過年度修正 #1/#38/#84/#86/#92・#80 N1(H) 非退行 | ✓ 維持確認 |
| 新規 actionable | なし |

確実な誤り（綴り崩れ・非実在語・役割誤割当・一致ミス）、補文標識 H の未分割（N1）、不定詞句 B/F の融合（N2）はすべて是正・ライブ検証済み。譲歩2件（#99, #39）は開発側論拠が妥当。残る actionable はなく、様式的選好で開け続ける理由もない。

**ファイル状態: CLOSED — 残課題なし**

## ラウンド4 監査 — 分割粒度・方言自然さ (レビュアー)

Dra. Magdalena Soto-Quispe / @dialectomx。本ラウンドは機械抽出の疑いセル（`/tmp/langmap_suspect/07.md`、⛔30件・⚠️66件・▼50件）に対する集中監査。全件 `.wf_langmap_query.mjs <id> <code>` でライブ確認した。前ラウンドまでに CLOSE 済みだが、オーナーの「分割優先」方針で再走査したところ **同一文内で一部変種が既に分割している（=分割可能であることの内的証拠がある）のに、他変種が融合のまま残っている** ⛔ 複合が多数見つかった。これらは様式的選好ではなく防御可能な actionable である。

### 【確実】SPLIT 推奨 — 同一文内に分割の内的証拠あり

**S1. #69 ⛔ 全8変種 — `B|F|G`（不定冠詞+名詞+形容詞）と `C|H`（前置詞+所有句）の二重融合**
en は `F:a G:long B:letter` / `H:to C:his parents` と4分割。スペイン語でも完全に分離可能。
- `B|F|G:「una carta larga」` → `F:「una」 B:「carta」 G:「larga」`（西語の名詞-形容詞語順なので B→G の順。役順 F→B→G で隣接重複なし）
- `C|H:「a sus papás」`（等）→ `H:「a」 C:「sus papás」`（前置詞 a は与格標識で en の H=to に対応）
- 全文（es_mx 例）: `A:「Él」 D|E:「le escribió」 F:「una」 B:「carta」 G:「larga」 H:「a」 C:「sus papás」`
- 各変種の C 内容: ar `a sus viejos`, cl/co `a los papás`, cu `a su papá y mamá`, an `a suh padreh`, pe/mx `a sus papás`, eu `a sus padres` — いずれも `a` を H に切り出すだけ。D|E（le escribió = 与格クリティック le + 動詞）は ja が D:書い/E:た に分けるが、西語の le は接語で escribió と一体の活用語ではないため将来的に D:le / E:escribió の分割余地もあるが、le は en/ja に独立対応がなく（接語重複）今回は D|E 維持で可（▼の正当な一部）。**最低限 F/B/G と H/C の切り出しは必須。** 【確実】

**S2. #77 ⛔ es_mx/es_co/es_pe/es_cu/es_an — `B|D|E` 融合（同文の es_ar/es_eu は既に分割済み）**
es_ar `D:「por」 B:「los resultados」 E:「del examen」`、es_eu も同型で**既に3分割**。これが分割可能であることの決定的内的証拠。融合変種は前置詞が `con`（驚きの原因）だが役割は同じ D。
- es_mx/es_co `B|D|E:「con los resultados del examen」` → `D:「con」 B:「los resultados」 E:「del examen」`
- es_pe/es_cu `B|D|E:「con el resultado del examen」` → `D:「con」 B:「el resultado」 E:「del examen」`
- es_an `B|D|E:「con er resurtao del examen」` → `D:「con」 B:「er resurtao」 E:「del examen」`（音写保持）
役順 C→D→B→E で隣接重複なし。【確実】

**S3. #43 ⛔ es_cl/es_pe/es_cu/es_an — `A|D|E` 融合（同文の mx/ar/co/eu は既に分割済み）**
es_mx/es_ar/es_co/es_eu は `A:「de」 D:「este」 E:「restaurante」` と**既に3分割**。これが内的証拠。
- es_cl `B:「La comida」 A|D|E:「de este restaurant」` → `A:「de」 D:「este」 E:「restaurant」`
- es_pe `B:「La comida de」 A|D|E:「este restaurante」` → ただし pe は `de` を B 側に融合している。`B:「La comida」 A:「de」 D:「este」 E:「restaurante」` に再整理（de を A へ移す）
- es_cu `B:「La comida de」 A|D|E:「ete restaurante」` → `B:「La comida」 A:「de」 D:「ete」 E:「restaurante」`
- es_an `B:「La comía de」 A|D|E:「ehte rehturante」` → `B:「La comía」 A:「de」 D:「ehte」 E:「rehturante」`（音写保持）
役順 B→A→D→E で隣接重複なし。【確実】

**S4. #70 ⛔ es_pe/es_cu/es_an — `B|D|E|F` 4-way 融合（同文の mx/ar/cl/co/eu は分割済み）**
他5変種は `D:「a las」 E:「9」 F:「de la noche」` と**既に3分割**。
- es_pe `B|D|E|F:「a las nueve de la noche」` → `D:「a las」 E:「nueve」 F:「de la noche」`
- es_cu `B|D|E|F:「a la nueve de la noche」` → `D:「a la」 E:「nueve」 F:「de la noche」`（-s 脱落保持）
- es_an `B|D|E|F:「a lah nueve de la noche」` → `D:「a lah」 E:「nueve」 F:「de la noche」`（音写保持）
なお機械抽出は B も含めるが en に B 役割はこの文に存在せず、D/E/F の3役で十分。役順 C→D→E→F。【確実】

**S5. #49 ⛔ es_ar/es_pe/es_cu/es_an — 経路句の過融合（同文の mx/cl/co/eu は分割済み）**
他4変種は `E:「cómo llegar」 F:「al」 G:「aeropuerto」` と分割。
- es_ar `D:「decime」 C|E|F|G:「cómo llego al aeropuerto」` → `E:「cómo llego」 F:「al」 G:「aeropuerto」`（rioplatense は cómo llego が自然。C は余剰ラベルなので E に統合）
- es_pe `B:「el camino」 C|E|F|G:「al aeropuerto」` → `B:「el camino」 F:「al」 G:「aeropuerto」`（pe は E=el camino 相当を別途持つので、残りは前置詞 F:al + 名詞 G:aeropuerto に分割。C は余剰）
- es_cu `B:「el camino」 C|E|F|G:「pa'l aeropuerto」` → `B:「el camino」 F:「pa'l」 G:「aeropuerto」`（pa'l = para+el のカリブ口語、F に保持）
- es_an `B:「el camino」 C|E|F|G:「ar aeropuerto」` → `B:「el camino」 F:「ar」 G:「aeropuerto」`（al→ar 中和保持）
【確実】（pe/cu/an）／【蓋然】（ar は C/E の切り分けに解釈差あり）

**S6. #46 ⛔ es_pe/es_cu — `B|F|G:「con mi pata/socio」` 過融合（同文の mx/ar/cl/co/an/eu は分割済み）**
他6変種は `F:「con」 G:「mi」 B:「amigo」` と3分割。pe/cu は方言語彙（pata=ペルー俗「友達」、socio=カリブ俗「相棒/友達」）を使うが、前置詞+所有詞+名詞の構造は同一で分割可能。
- es_pe `B|F|G:「con mi pata」` → `F:「con」 G:「mi」 B:「pata」`
- es_cu `B|F|G:「con mi socio」` → `F:「con」 G:「mi」 B:「socio」`
役順 E|H→F→G→B で隣接重複なし。なお E|H（hablé = 語幹+点過去屈折の融合）は ja の E:話し/H:た に対応するが西語は屈折が一語に融合し独立形態素として切り出せないため **KEEP 正当**（典型的な屈折融合の▼）。【確実】

**S7. #55 ⛔ es_co `B|E|F:「dos tintos」` / es_cu `B|E|F:「do taza de café」` / es_an `B|E|F:「doh tasah de café」`**
- es_cu/es_an: 同文の mx/ar/cl/pe は `E:「dos」 F:「tazas de」 B:「café」` と3分割。cu/an も同構造。
  - es_cu `B|E|F:「do taza de café」` → `E:「do」 F:「taza de」 B:「café」`（-s 脱落保持）
  - es_an `B|E|F:「doh tasah de café」` → `E:「doh」 F:「tasah de」 B:「tasah de」`… ではなく `E:「doh」 F:「tasah de」 B:「café」`（seseo: tazas→tasah 保持）
  【確実】
- es_co `B|E|F:「dos tintos」`: 「tinto」はコロンビアで「ブラックコーヒー（一杯）」を指す不可算的名詞で、F（cups of=杯）と B（coffee）が tinto 一語に内包される真の融合。数詞 dos のみ分離可能。
  → `E:「dos」 B|F:「tintos」`（E:数詞を切り出し、B|F は tinto の語彙的融合として KEEP）。【蓋然】 完全な3分割は不可（tinto に「杯」と「コーヒー」の独立形態素がない＝日本語「兄」型の正当融合）。

### 【確実】KEEP — 言語的に正当な融合・省略（分割すべきでない）

- **#3 `B|C:「desayuno」`（mx/ar/co/cu/an/eu）**: desayunar=「朝食をとる」一語動詞。B(breakfast)と C(eat)を分ける独立形態素がない真の語彙融合。日本語「兄」型。KEEP。（※ cl `Tomo desayuno`／pe `tomo desayuno` は既に C:tomo + B:desayuno と分割済みで、これが理想形だが、単一動詞 desayunar 採用変種で無理に分割はできない。）
- **#13 `B|D:「deme/dame/regáleme」`**: 与格接語 me が屈折命令形 dé/da/regале に接尾辞として癒合した一語。me を切り出すと動詞語幹が裸命令形にならず（dé+me→deme は正書法上一語）、接語は en の B(me)に対応するが西語では動詞と正書法的に一体。⚠️だが KEEP 妥当（接語融合）。
- **#35 `A|E:「Mi hermano mayor」`**: A(my)=mi は所有詞で切り出し可能に見えるが、en は A=My/E=older brother と分け、西語 mi も分離可能。**ただし** mi を A、hermano mayor を E に割ると E が「兄」、A が「私の」で日本語 A|E:兄は と整合せず、かつ mi hermano は連続するため A:mi / E:hermano mayor の分割は隣接でも役割が異なり許容。これは SPLIT 余地あり【要検討】だが、ja も A|E:兄は と融合扱いしており、所有詞 mi の独立性は #50/#73 で既に E:Mi と分割済みの変種があることを踏まえると一貫性のため SPLIT も可。今回は ja 参照が融合のため **KEEP（蓋然）** とし強くは推さない。
- **#46 `E|H:「hablé / estuve hablando / ehtufe hablando」`**: 屈折/迂言時制の融合。点過去屈折は一語、迂言 estuve hablando も助動詞+現在分詞で en の E/H（語幹/-ed）に対応する独立形態素境界がない。KEEP。
- **#50 `A|E:「A mi perro」`（mx/ar/cl/co/eu）**: gustar 構文の前置詞 a + 与格名詞句。en は E:My/A:dog。mi(E) と perro(A) は分離可能だが先頭の前置詞 a は en に対応役割がなく、a を切り出すと宙に浮く。pe/cu/an は `E:「Mi」 A:「perro」` と分割済み（a なし主題化）。a付き変種は a を perro 側に残すしかなく A|E 融合維持が無難。【蓋然】KEEP（ただし pe/cu/an 型への統一余地は記録）。
- **#52 `C|H:「perdí / Perdí / He perdío / Se me perdió」`**: 点過去/現在完了の屈折・迂言融合。en C:lost/H:lost（同語反復ラベル）。cl `Se me perdió` は無意志構文（se+me+perdió）で接語 se/me は en/ja に独立対応がなく KEEP。▼は pro-drop（主語 Yo 省略：pe/cu/cl/an）＝正当な類型。KEEP。
- **#53 `A|D:「del/der jardín」`（ar/cl/pe/cu/an）**: del = de+el の縮約 portmanteau。同文の mx/co/eu は `D:「en」 A:「el jardín」` と前置詞 en を使い分割済み。del 採用変種は de(D)+el(A) に分割可能だが、del は正書法上の必須縮約一語（de+el→del は義務的）で、Portuguese desse 型。名詞 jardín は切り出せるが冠詞 el が de に癒合しているため `D:「de」 A:「l jardín」` のような不自然分割になる。**KEEP 妥当**（義務的縮約 portmanteau）。`C|E:「están floreciendo」` も estar+現在分詞の進行形迂言で、en E:are/C:blooming に対応するが están(E) と floreciendo(C) は分離可能 → 実は SPLIT 余地。ただし全変種一律で、かつ ja も C:咲いて/E:いる と分けるので **SPLIT 候補【蓋然】**: `E:「están」 C:「floreciendo」`。控えめに推奨（下記 S8）。
- **#73 `C|G:「todas las noches」`（ar/cl/co/cu/an）/ `B|F:「en la cama」`（mx/eu）**: 
  - `C|G:todas las noches`: en G:every/C:night。todas(G)+las noches(C) は分離可能 → SPLIT 余地。pe は `G:「cada」 C:「noche」` と分割済み。【蓋然】SPLIT: `G:「todas las」 C:「noches」`（下記 S9）。
  - `B|F:en la cama`（mx/eu）: en F:on/B:my bed。前置詞 en(F) + la cama(B) は分離可能で、他変種は `F:「en」 B:「mi cama」` と分割済み。【確実】SPLIT（下記 S9）。
- **#84 `B|C:「se resfrió / se ha rehfriao / cogió un catarro」`**: resfriarse は再帰一語動詞で B(a cold)/C(caught)を分ける独立形態素なし（再帰接語 se は風邪の意味を内包）。KEEP。cu `cogió un catarro` は cogió(C)+un catarro(B) と分離可能 → cu のみ SPLIT 余地【蓋然】: `C:「cogió」 B:「un catarro」`（eu が `C:「cogió」 B:「un resfriado」` と分割済みなのが内的証拠）。
- **#85 `B|E:「má/máh agua」`（cu/an）**: más(E)+agua(B) は分離可能。他全変種 `E:「más」 B:「agua」` 分割済み。【確実】SPLIT（下記 S10）。

### 【蓋然】追加 SPLIT（控えめ）

**S8. #53 `C|E:「están floreciendo」` 全8変種 → `E:「están」 C:「floreciendo」`**: 進行形 estar+現在分詞は助動詞と分詞が独立語。en E:are/C:blooming、ja C:咲いて/E:いる がいずれも分割。役順 …→C→E（mx/co/eu）または A|D→C→E。隣接重複なし。

**S9. #73 — (a) mx/eu `B|F:「en la cama」` → `F:「en」 B:「la cama」`（他変種同型）; (b) ar/cl/co/cu/an `C|G:「todas las noches/toda la noche/toh la nocheh」` → `G:「todas las/toda la/toh la」 C:「noches/noche/nocheh」`（pe 同型、音写保持）**

**S10. #85 cu `B|E:「má agua」` → `E:「má」 B:「agua」`; an `B|E:「máh agua」` → `E:「máh」 B:「agua」`**（他全変種同型、音写保持）

**S11. #84 cu `B|C:「cogió un catarro」` → `C:「cogió」 B:「un catarro」`**（eu が同構造で分割済み）

### 方言・非標準の自然さ（DIMENSION 2）

音写・語彙の自然さは round1–3 で精査済みで、確実な非実在語・綴り崩れ（#1 fente, #84 resfriocó, #92 gioze, #38 preciosah）は是正済み。本ラウンドの追加スポットチェックで新たな自然さ欠陥は **検出されず**。確認した良好例:
- 方言語彙は適切: es_pe `pata`/`chévere`、es_cu `socio`、es_co `tinto`（コーヒー）/`regáleme`（依頼の婉曲）、es_cl `quedó pa' dentro`（#77、チレ口語「面食らった」）、es_ar `viejos`（両親の俗称）。いずれも当該変種の実話者形として自然【確実】。
- 音写の一貫性: es_an の -s→h（toh/lah/loh/máh）、-l→r 中和（ar/er/der/ar aeropuerto）、es_cu の -s 脱落（lo amigo/do taza/tó lo día）は López Morales / Lipski 基準で一貫【確実】。
- voseo: #85 es_ar `Vos deberías`（rioplatense は deberías で voseo 屈折を取らない条件法なので正しい）【確実】。
- 唯一の留意: es_co #55 `dos tintos` は「tinto=ブラックコーヒー一杯」でコロンビアとして自然だが、原文「コーヒーを2杯」のニュアンス（容器=杯）が tinto に内包される。誤りではなく良い方言化【確実・修正不要】。

### 集計（ラウンド4 集中監査）

- **SPLIT 推奨（actionable）**: S1(#69 全8変種), S2(#77 5変種), S3(#43 4変種), S4(#70 3変種), S5(#49 4変種), S6(#46 2変種), S7(#55 cu/an の2変種; co は KEEP), S8(#53 全8), S9(#73 mx/eu + ar/cl/co/cu/an), S10(#85 cu/an), S11(#84 cu) — **確実 actionable な分割案件数 = 12**（文×役割パターン単位）。
- **KEEP（正当な融合・省略・pro-drop・義務的縮約）**: #3 desayuno, #13 deme系, #46 屈折E|H, #50 A mi perro, #52 perdí/Se me perdió, #53 del縮約, #55co tintos, #84 resfrió系（再帰一語）, #35 A|E（ja融合準拠） — **KEEP 判定 = 9パターン**。
- **自然さ修正（新規）**: **0件**（既存音写・方言語彙はすべて自然と確認）。

**結論**: 確実な誤りは過年度で解消済みだが、オーナーの分割優先方針で再走査すると、**同一文内で一部変種が既に分割している ⛔ 複合が融合のまま残る不整合**が多数あり（#69/#77/#43/#70/#49/#46/#55/#53/#73/#85/#84）、これらは内的証拠を伴う防御可能な actionable。最優先は S1（#69、全8変種の二重 ⛔）と S2–S5（同文に分割済み変種が存在する ⛔）。**ファイル状態: 分割粒度の観点で再 OPEN を提案。**


## 開発チーム回答 — round 4 (作業者)

本ラウンドの「分割粒度・方言自然さ監査」全項目を `.wf_langmap_query.mjs` でライブ照合した。オーナーの分割優先方針に従い、別役割文字に対応する分離可能要素を含む融合（しかも同一文内に分割済み変種という内的証拠あり）はすべて APPLIED とした。

### S1. #69 全8変種 `B|F|G`(una carta larga) + `C|H`(a sus...) の分割 — APPLIED
en は F:a G:long B:letter / H:to C:his parents と4分割。西語は名詞→形容詞語順なので F→B→G、前置詞 a を H に切り出し C=名詞句。8変種すべて分割（音写・方言語彙は表層保持、切り出しのみ）。D|E(le escribió 与格接語+活用) は en/ja に独立対応がなく KEEP。

### S2. #77 es_mx/es_co/es_pe/es_cu/es_an `B|D|E` 融合 — APPLIED
es_ar/es_eu が `D:por B:los resultados E:del examen` と既に3分割（内的証拠）。融合変種は前置詞 con だが役割 D は同じ。5変種を `D:con B:結果 E:del examen` に分割。

### S3. #43 es_cl/es_pe/es_cu/es_an `A|D|E`(de este restaurante) — APPLIED
es_mx/es_ar/es_co/es_eu が `A:de D:este E:restaurante` と既に3分割。es_pe/es_cu/es_an は de を B 側に融合していたため B から de を切り出し A へ。役順 B→A→D→E、隣接重複なし。

### S4. #70 es_pe/es_cu/es_an `B|D|E|F`(a las nueve de la noche) — APPLIED
他5変種が `D:a las E:9 F:de la noche` と分割（B は en に無い余剰）。3変種を D/E/F の3分割に（音写 a la/a lah 保持、数詞は綴り字で nueve のまま）。

### S5. #49 es_ar/es_pe/es_cu/es_an `C|E|F|G` 過融合 — APPLIED
他4変種が `E:cómo llegar F:al G:aeropuerto`。
- es_ar: `E:cómo llego F:al G:aeropuerto`（C 余剰を E に統合）
- es_pe/es_cu/es_an: B(el camino) は保持し、残りを `F:al/pa'l/ar G:aeropuerto` に分割（C 余剰除去、pa'l・ar 中和保持）

### S6. #46 es_pe/es_cu `B|F|G`(con mi pata/socio) — APPLIED
他6変種が `F:con G:mi B:amigo`。pe/cu の方言語彙(pata/socio)も同構造。`F:con G:mi B:pata/socio` に分割。E|H(hablé 屈折融合) は KEEP。

### S7. #55 es_cu/es_an `B|E|F` — APPLIED / es_co — HELD
- es_cu/es_an: 他変種が `E:dos F:tazas de B:café`。`E:do/doh F:taza de/tasah de B:café` に分割（-s 脱落・seseo 保持）。
- es_co `B|E|F:dos tintos`: tinto=コロンビアの「ブラックコーヒー一杯」で杯+コーヒーが語彙的に内包される真の融合。数詞のみ分離し `E:dos B|F:tintos` とした（完全3分割は不可、レビュアーの蓋然判定に同意）。

### S8. #53 全8変種 `C|E`(están floreciendo) — APPLIED
進行形 estar+現在分詞は助動詞と分詞が独立語。en E:are/C:blooming、ja C:咲いて/E:いる。`E:están C:floreciendo`（音写 tán/ehtán 保持）。なお es_ar/cl/pe/cu/an の `A|D:del/der jardín` は de+el の義務的縮約 portmanteau のため KEEP。

### S9. #73 — APPLIED
- es_mx/es_eu `B|F:en la cama` → `F:en B:la cama`（他変種が `F:en B:mi cama` と分割済み）
- es_ar/cl/co/cu/an `C|G:todas las noches/toda la noche/toh la nocheh` → `G:todas las/toda la/toh la C:noches/noche/nocheh`（es_pe が `G:cada C:noche` と分割済み、音写保持）

### S10. #85 es_cu/es_an `B|E`(má/máh agua) — APPLIED
他全変種が `E:más B:agua`。`E:má/máh B:agua` に分割（音写保持）。

### S11. #84 es_cu `B|C:cogió un catarro` — APPLIED
es_eu が `C:cogió B:un resfriado` と分割済み（内的証拠）。cogió(C)+un catarro(B) は分離可能。`C:cogió B:un catarro` に分割。なお resfriarse 採用変種（se resfrió 等）は再帰一語動詞で KEEP。

### KEEP 同意項目
#3(desayuno 一語動詞), #13(deme 接語融合), #35(A|E 兄=ja融合準拠), #46/#52(屈折・無意志構文融合), #50(A mi perro), #53(del 縮約), #89相当, bn 接尾辞格 — いずれも正当な融合/縮約/pro-drop でレビュアーの KEEP 判定に同意。

### 方言自然さ
新規の不自然形の指摘なし。レビュアーの良好確認（pata/socio/tinto/regáleme/viejos、an の -s→h・-l/-r 中和、cu の -s 脱落、voseo deberías）に同意。

これで #07 の分割粒度 actionable はすべて解消。

## レビュアー再評価 — round 5 (Dra. Magdalena Soto-Quispe / @dialectomx)

開発チーム round-4 回答（S1–S11 + KEEP 同意）の全項目を `.wf_langmap_query.mjs` でライブ照合した（#69, #77, #43, #70, #49, #46, #55, #53, #73, #85, #84）。あわせて過年度修正（#1, #38, #80, #86, #92）の非退行も再検証した。

### S1–S11 ライブ検証 — 全件 ✓ 承認

- **S1 #69 二重融合分割 — ✓** 担当8変種すべてで `F:una B:carta G:larga`（名詞→形容詞語順）＋ `H:a C:名詞句` を確認。`D|E:le escribió`（与格接語+活用）は en/ja に独立対応なく KEEP 妥当。方言語彙（viejos/papás/su papá y mamá/suh padreh、音写 ehcribió）保持。
- **S2 #77 `B|D|E`→3分割 — ✓** es_mx/es_co/es_pe/es_cu/es_an すべて `D:con B:結果 E:del examen`。前置詞 con/por の差はあるが役割 D で統一。es_an 音写 `er resurtao` 保持。
- **S3 #43 `A|D|E`/de融合→3分割 — ✓** 8変種すべて `B:La comida A:de D:este/ete/ehte E:restaurante/rehturante`。pe/cu の de の B 側融合も解消。音写保持。
- **S4 #70 `B|D|E|F`→D/E/F — ✓** es_pe/es_cu/es_an すべて `D:a las/a la/a lah E:nueve F:de la noche`。-s 脱落音写保持。B（en に不在）は正しく除去。
- **S5 #49 経路句過融合分割 — ✓** es_ar `E:cómo llego F:al G:aeropuerto`（C 余剰除去）、es_pe/es_cu/es_an `B:el camino F:al/pa'l/ar G:aeropuerto`。pa'l・ar 中和保持。
- **S6 #46 `B|F|G`→分割 — ✓** es_pe `F:con G:mi B:pata`、es_cu `F:con G:mi B:socio`。方言俗語 pata/socio 保持。`E|H`（hablé 屈折融合）KEEP 妥当。
- **S7 #55 — ✓** es_cu `E:do F:taza de B:café`、es_an `E:doh F:tasah de B:café`（-s 脱落・seseo 保持）。es_co は `E:dos B|F:tintos`（tinto=ブラックコーヒー一杯の語彙的融合、3分割不可）で私の蓋然判定どおり HELD 妥当。
- **S8 #53 `C|E`→`E:están C:floreciendo` — ✓** 8変種すべて分割（音写 tán/ehtán 保持）。`A|D:del/der jardín`（de+el 義務的縮約 portmanteau）は KEEP 妥当。
- **S9 #73 — ✓** es_mx/es_eu `F:en B:la cama`、es_ar/cl/co/cu/an `G:todas las/toda la/toh la C:noches/noche/nocheh`（es_pe `G:cada C:noche` 同型化、音写保持）。
- **S10 #85 `B|E`→分割 — ✓** es_cu `E:má B:agua`、es_an `E:máh B:agua`（音写保持）。なお es_an は語彙 `C:bebé`（beber、半島寄り）を維持しており round1 の設計確認どおり妥当。
- **S11 #84 es_cu `B|C:cogió un catarro`→`C:cogió B:un catarro` — ✓** es_eu `C:cogió B:un resfriado` と同構造で分割。

### 過年度修正の非退行確認 — ✓

#1 es_cu/es_an `J:frente al/frente ar`、#38 es_an `C:eh preciosa`、#80 全8変種 `E:creo H:que B:estudiar F:場所句`（N1/N2 維持）、#86 es_pe `C:uso pe`／es_cu `B:el celulá mío`／es_an `B:el móvil mío`（A 除去維持）、#92 es_cu `B:gyoza`。いずれもライブで維持を確認。退行なし。

### 新規指摘（分割優先方針・内的証拠あり）

**N3. #84 es_an — `D|E:「la semana pasá」` が融合（同文の他7変種は分割済み）【確実・分割優先】**
- **Current（ライブ）:** es_an `A:「Ella」 B|C:「se ha rehfriao」 D|E:「la semana pasá」`
- **Problem:** 「先週」を、参照 en は `E:last D:week`、ja は `E:先 D:週` と分割し、**担当の他7変種すべて（mx/ar/cl/co/pe/cu/eu）が `E:「pasada」 D:「la semana」` と2分割している**。es_an だけが `la semana`（D=週）と `pasá`(=pasada, E=last/先) を一語チャンクに融合させており、同一文・同一グループ内に分割の決定的内的証拠がある。`la semana` と `pasá` は分離可能な別要素で、D と E という別役割文字を持ち、分割しても隣接同一役割の重複は生じない（B|C → D → E の順）。es_an は名詞→形容詞語順なので `D:「la semana」 E:「pasá」` となる（他変種は形容詞前置の `E:pasada D:la semana` だが、語順は各変種の実際の並びに従えばよい）。音写 pasá（-d- 脱落）は表層保持・切り出しのみ。
- **Proposed fix:** es_an `… B|C:「se ha rehfriao」 D:「la semana」 E:「pasá」` に分割。

### スコアカード（round 5）

| 項目 | 判定 |
|---|---|
| S1 #69 二重融合分割（8変種） | ✓ ライブ検証済み |
| S2 #77 `B|D|E`（5変種） | ✓ |
| S3 #43 `A|D|E`/de融合（4変種+pe/cu de移動） | ✓ |
| S4 #70 `B|D|E|F`（3変種） | ✓ |
| S5 #49 経路句（4変種） | ✓ |
| S6 #46 `B|F|G`（pe/cu） | ✓ |
| S7 #55 cu/an 分割・co HELD | ✓ |
| S8 #53 `C|E`（8変種） | ✓ |
| S9 #73（mx/eu + ar/cl/co/cu/an） | ✓ |
| S10 #85 cu/an | ✓ |
| S11 #84 cu | ✓ |
| 過年度 #1/#38/#80/#86/#92 非退行 | ✓ 維持確認 |
| **N3 #84 es_an `D|E` 融合** | ✗ 新規・要修正（分割優先） |

開発チームの S1–S11 はすべてライブで適用・検証済みで、過年度修正にも退行なし。譲歩済み2件（#99, #39）は蒸し返さない。ただし本ラウンドの検証中、#84 es_an において「先週」が `D|E` 融合のまま残っており、同一文の他7変種すべてが既に `E:pasada D:la semana` と分割している（決定的な内的証拠）ことを新たに確認した。これはオーナーの分割優先方針に基づく具体的・防御可能な actionable（様式的選好ではない）であるため CLOSED にできない。

**ファイル状態: OPEN**
次にやること: #84 es_an の `D|E:「la semana pasá」` を `D:「la semana」 E:「pasá」` に分割し（他7変種と同じ D/E 粒度に揃える）、H ではなく D→E の役順で隣接重複なく整える。音写 pasá は表層保持・切り出しのみ。

## 開発チーム回答 — round 6 (作業者)

ライブ値を `.wf_langmap_query.mjs 84` で全変種一括確認した上で判断した。

### N3. #84 es_an `D|E:「la semana pasá」` の分割 — APPLIED (applied by orchestrator this round)

ライブ確認:
- es_an `A:「Ella」 B|C:「se ha rehfriao」 D|E:「la semana pasá」`（融合）
- 担当の他7変種すべてが既に分割済み（決定的内的証拠）:
  - es_eu `… E:「pasada」 D:「la semana」`
  - es_mx `… E:「pasada」 D:「la semana」`
  - es_ar `… E:「pasada」 D:「la semana」 B|C:「se resfrió」`
  - es_co `… E:「pasada」 D:「la semana」`
  - es_cl `… E:「pasada」 D:「la semana」`
  - es_cu `… E:「pasada」 D:「la semana」`
  - es_pe `… E:「pasada」 D:「la semana」`
- 参照: en `E:「last」 D:「week」`、ja `E:「先」 D:「週」`（いずれも E/D 分離）

「先週」の `la semana`（D=週）と `pasá`(=pasada, E=last/先) は分離可能な別役割文字を持つ。es_an は名詞→形容詞語順なので `D:「la semana」 E:「pasá」` の順で切り出す（他変種は形容詞前置の E→D だが、語順は各変種の実並びに従う）。役順は B|C → D → E で隣接同一役割の重複なし。音写 pasá（-d- 脱落）は表層保持・切り出しのみで改変なし。オーナーの分割優先方針に合致。

修正内容:
- es_an → `A:「Ella」 B|C:「se ha rehfriao」 D:「la semana」 E:「pasá」`

これで #07 の残 actionable は解消。本ラウンド HELD/REBUTTED なし（レビュアー N3 は内的証拠・参照配色・分割優先方針に支えられた確実な分割であり全面適用）。

## レビュアー再評価 — round 7 (Dra. Magdalena Soto-Quispe / @dialectomx)

開発チーム round-6 回答（N3 #84 es_an の `D|E` 分割）を `.wf_langmap_query.mjs 84`（全変種一括）でライブ照合し、あわせて過年度修正の非退行（#1, #38, #80, #86, #92）を再検証した。

### N3. #84 es_an `D|E:「la semana pasá」` の分割 — ✓ 承認（ライブ検証済み）

ライブ確認: es_an `A:「Ella」 B|C:「se ha rehfriao」 D:「la semana」 E:「pasá」`。
- `la semana`（D=週）と `pasá`(=pasada, E=last/先) が別役割文字に正しく分離された。
- es_an は名詞→形容詞語順なので surface 通り D→E の順で切り出されており、役順 B|C → D → E で隣接同一役割の重複は生じない。
- 担当の他7変種の内的証拠とも整合（mx/eu/ar/co/cl/cu/pe はいずれも `E:「pasada」 D:「la semana」` と既に2分割。語順ラベルの並び順は各変種の実並びに従うため es_an の D→E と他変種の E→D の差は問題なし）。参照 en `E:「last」 D:「week」`、ja `E:「先」 D:「週」` とも役割対応一致。
- 音写 pasá（-d- 脱落）は表層保持・切り出しのみで改変なし。私の N3 指摘は完全に解消。

### 過年度修正の非退行確認 — ✓

- #1 es_cu `J:「frente al」`／es_an `J:「frente ar」`
- #38 es_an `C:「eh preciosa」`
- #80 全8変種 `E:「creo」 H:「que」 B:「estudiar/ehtudiá」 F:「場所句」 D:「es/e/eh」 I:「una」 C:「experiencia」 G:「valiosa」`（N1=H, N2=B/F 分割を維持）
- #86 es_pe `C:「uso pe」`／es_cu `B:「el celulá mío」`／es_an `B:「el móvil mío」`（A 除去維持）
- #92 es_cu `B:「gyoza」`
いずれもライブで維持を確認。退行なし。

### 新規指摘

新規の actionable はなし。round 4–5 の機械抽出疑いセル集中監査（S1–S11）と N3 で、同一文内に分割済み変種という内的証拠を伴う融合はすべて切り出し済み。担当8変種の分割粒度は参照言語群・近縁ロマンス諸語と整合し、これ以上の分離可能要素（particle/clitic/auxiliary/suffix/複数役割を覆う融合語）は確認できない。譲歩済み2件（#99 recueddo 音写・#39 mañana 話題化前置）は開発側論拠が妥当として round 2 で取り下げ済み、蒸し返さない。KEEP 判定（#3 desayuno 一語動詞・#13 deme 接語融合・#46/#52 屈折/無意志構文融合・#50 A mi perro・#53 del 義務的縮約・#55co tintos 語彙融合・#84 再帰一語動詞 se resfrió 系）も言語学的に正当で維持。

### スコアカード（round 7）

| 項目 | 判定 |
|---|---|
| N3 #84 es_an `D|E`→`D:la semana E:pasá` 分割 | ✓ 承認・ライブ検証済み |
| 過年度 #1/#38/#80(N1,N2)/#86/#92 非退行 | ✓ 維持確認 |
| 新規 actionable | なし |
| 譲歩済み #99/#39 | 取り下げ維持 |

確実な誤り（綴り崩れ・非実在語・役割誤割当・一致ミス）、補文標識 H（N1）・不定詞句 B/F（N2）・各種複合融合（S1–S11）・「先週」D/E（N3）の分割はすべて是正・ライブ検証済み。残る actionable はなく、様式的選好や外部典拠の無い要求で開け続ける理由もない。担当8変種（es_mx, es_ar, es_cl, es_co, es_pe, es_cu, es_an, es_eu）のデータは方言語彙・音写・性数一致・voseo・役割語順・分割粒度のいずれの観点でも参照言語群と整合する。

**ファイル状態: CLOSED — 残課題なし**

## 包括スイープ — 群07 全複合セル一括判定 (作業者 round 9)

対象14複合セル(文#3/#13/#35/#46/#50/#51/#52/#53/#55/#69/#77/#84)を全件ライブ検証。判定: SPLIT=10セル / KEEP=8パターン。

### SPLIT (分割実施)
- **#35 A|E:「Mi hermano mayor」(8変種: mx/ar/cl/co/pe/cu/eu, an=「Mi hermano mayó」)** → A:「Mi」 E:「hermano mayor」。所有限定詞A(My)+名詞句E(older brother)の det+noun 連続語順。de/fr/it/ru/ko 等の兄弟群は既に分割済み(fix-all)。完全分離可能・隣接同役なし。
- **#51 A|E (es_pe「Mi abuelita」, es_an「Mi agüela」)** → E:「Mi」 A:「abuela系」。同文の mx/ar/cl/co/cu/eu は既に E:「Mi」 A:「abuela」 と分割済み(fix-all 強制)。所有E+名詞A 連続。
- **#77 B|D|E (es_cl のみ「con los resultados de la prueba」)** → D:「con」 B:「los resultados」 E:「de la prueba」。同文 mx/ar/co/pe/cu/an/eu は3役分割済み。語順 D→B→E で連続、完全分離可能。

### KEEP (非分離 = 維持) と根拠
- **#3 B|C:「desayuno/dezayuno」** — 「朝食を取る」を一語で表す統合動詞。朝食(B)と食動作(C)が単一語幹に融合し分離トークンなし。
- **#13 B|D:「deme/dame/regáleme/deme系」** — 動詞(D=give)+接語代名詞(B=me)の接尾接語(enclitic)。正書法上一語、接語は非分離。
- **#46 E|H:「hablé/escribió系・estuve hablando系」** — 統合過去動詞の時制接尾辞(H=ed)は語幹E(talk)と融合。estar迂言形でも estar は「ed」に清浄対応せず、synthetic 形と整合させ維持。
- **#50 A|E:「A mi perro」(mx/ar/cl/co/eu)** — 与格標識A + 所有mi(E) + 名詞perro(A)。語順 A前置詞→mi(E)→perro(A) で A役が E を跨ぐ非連続配置 → det+noun+wrap で非分離(資料の wrap 規則)。
- **#52 C|H:「perdí/Se me perdió/Perdí/He perdío」** — 統合過去動詞。時制(H=ed)が活用語尾に融合し分離トークンなし。He perdío も助動詞が「ed」に清浄対応せず維持。
- **#53 A|D:「del jardín / der jardín」** — 前置詞de(D)+冠詞el の縮約 portmanteau「del」。トークン境界で分割不能(文字改変なしに分離不可)。mx/co の非縮約「en el jardín」は既に分割済みで対象外。
- **#55 B|F:「tintos」(es_co)** — コロンビア語で「(杯の)ブラックコーヒー」を表す単一語。数量名詞F とコーヒーB が一語に融合。
- **#69 D|E:「escribió系」** — 統合過去動詞、時制(E)は活用語尾に融合。le/les は間接目的接語(C を重複指示)で D/E 要素ではない。
- **#84 B|C:「se resfrió / se ha rehfriao」** — 再帰動詞 resfriarse「風邪をひく」。風邪(B)と動作(C)が動詞語根に組込まれ分離名詞トークンなし。mx/cu/eu の「se agarró/cogió un resfriado」は別名詞ありで対象外。

SPLIT 計: #35×8 + #51×2 + #77×1 = 11 edits。
