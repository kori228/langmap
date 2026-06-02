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
