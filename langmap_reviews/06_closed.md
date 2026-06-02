# LangMap データレビュー #06 — Gallo-Romance — French varieties, Occitan, Catalan, Romansh

## レビュアー自己紹介 (ペルソナ)

私は **Dr. Aurélie Vassal-Roumieu**（ハンドル: @galloromanist）、エクス＝マルセイユ大学およびフリブール大学（スイス）でガロ・ロマンス諸語の歴史言語学・社会言語学を専攻する研究者です。博士論文はオック語（プロヴァンス／ラングドック方言）の動詞形態論で、Loís Alibert『Gramatica occitana』、Josiane Ubaud のオック語辞書、Pèire Bèc の研究を一次資料として日常的に参照します。カタルーニャ語については Institut d'Estudis Catalans の規範文法（GIEC）と DIEC2 辞典、ロマンシュ語については Rumantsch Grischun の規範（Lia Rumantscha の Pledari Grond）と Sursilvan/Vallader 方言文法を典拠とします。フランス語の地域変種（ベルギー・スイス・ケベック・アフリカ仏語）については Le Trésor de la langue française、Base de données lexicographiques panfrancophone (BDLP)、および Québec の Usito 辞典を用います。最も権威をもって判断できるのはオック語とロマンシュ語、次いでカタルーニャ語と標準フランス語です。

## 検証範囲

担当8言語（fr, fr_be, fr_ch, fr_qc, fr_af, oc, ca, rm）について全100文（#1–#100）を読み、特に oc / ca / rm の語彙・正書法・性数一致・語順、および仏語変種の方言マーキング（ケベックの y/à matin/icitte/chum/bécyk、ベルギーの souper/drache/gsm、スイスの natel 等）を重点的に検査した。疑わしいセルは `.wf_langmap_query.mjs` でライブ値を逐一照合した（#5, #17, #20, #24, #26, #38, #55, #63, #84, #88, #91, #93, #96, #98 等）。仏語標準形・ベルギー・スイス・ケベック・アフリカ変種は方言マーキングが概ね的確で自然。確証のある問題のみを以下に挙げる。

## 指摘事項 (Issues found)

### 1. #38 [rm] — B セグメントが「夕日」ではなく無関係な語句
**Current:** B:「Ir al sulegl」 A:「dad」 D:「qua」 C:「è bel」
**Problem:** 「Ir al sulegl」は文字どおり「太陽へ行くこと（to go to the sun）」であり、「夕日／日没（sunset）」を意味しない。主語が文意を成しておらず完全な誤り。ロマンシュ語（RG）で日没は **il tramunt da sulegl**、口語的には **il sulegl che va sut**。ca の「La posta de sol」が正しい対応形。
**Proposed fix:** B:「Il tramunt da sulegl」 A:「dad」 D:「qua」 C:「è bel」
**確信度:** 【確実】

### 2. #38 [oc] — B セグメントの語が破損（"colfo"）
**Current:** B:「Lo solelh colfo」 A:「d'」 D:「aicí」 C:「es polit」
**Problem:** 「colfo」はオック語の語ではなく、明らかな文字化け／破損（おそらく "colcant" 等の生成崩れ）。日没のオック語は **lo solelh colcant**（沈む太陽）または **lo solèlh colcat**。「colfo」のままでは意味不明。
**Proposed fix:** B:「Lo solelh colcant」 A:「d'」 D:「aicí」 C:「es polit」
**確信度:** 【確実】

### 3. #17 [oc] — C セグメントが破損（"una rfo"）
**Current:** A:「Ieu」 B:「ai」 C:「una rfo」 D:「a las」 E:「3」 F:「aqueste」 G:「tantòst」
**Problem:** 「una rfo」は語として成立しない明白な破損。英 meeting / 仏 réunion に対応するオック語は **una reünion**（または会合の意で **un rendètz-vos**）。ca:「una reunió」, rm:「ina sesida」と整合しない。
**Proposed fix:** A:「Ieu」 B:「ai」 C:「una reünion」 D:「a las」 E:「3」 F:「aqueste」 G:「tantòst」
**確信度:** 【確実】

### 4. #24 [oc] — C セグメントが破損（"lo menfo"）
**Current:** A:「Se vos plai」 D:「mostrats」 B:「-me」 C:「lo menfo」
**Problem:** 「lo menfo」は語ではなく破損。メニューのオック語は **lo menut**、または料理一覧の意で **la carta**。ca:「el menú」, rm:「la carta da spaisas」と不整合。
**Proposed fix:** A:「Se vos plai」 D:「mostrats」 B:「-me」 C:「lo menut」
**確信度:** 【確実】

### 5. #96 [oc] — E/F セグメントの語が破損（"pròfo"）＋交差点語の選択
**Current:** A:「Se vos plai」 B:「virats a drecha」 C:「al」 E:「pròfo」 F:「cròtz de carrièra」
**Problem:** 「pròfo」は語として成立せず破損（next = オック語 **venent** / **pròchen**）。さらに「cròtz de carrièra」は交差点として不自然で、標準的には **crosada** / **caireforc**。ca:「propera cruïlla」, rm:「proxima cruschada」と不整合。
**Proposed fix:** A:「Se vos plai」 B:「virats a drecha」 C:「a la」 E:「venenta」 F:「crosada」
**確信度:** 【確実】（pròfo の破損は確実、交差点語の選択は【蓋然】）

### 6. #88 [rm] — 動詞 C が誤り（"mida" = 測る）＋主語の冠詞欠落
**Current:** A:「IA」 C:「mida」 B:「il mund」
**Problem:** 「mida」は RG で「(寸法を)測る／計る（measure）」の意であり、「変えつつある（is changing）」ではなく意味が全く異なる。継続相「変えつつある」を出すなら **è vid midar**（midar = 変える）または **transfurma**。また主語も他の全変種（fr:「L'IA」, ca:「La intel·ligència artificial」）が冠詞付きなのに対し rm のみ裸の「IA」で不自然。
**Proposed fix:** A:「L'IA」 C:「è vid midar」 B:「il mund」（または C:「transfurma」）
**確信度:** 【蓋然】

### 7. #63 [rm] — A セグメントの「木」が誤り（"buobs"）
**Current:** B:「Ils utschels」 C:「chantan」 A:「en ils buobs」
**Problem:** 「buobs」は RG で「木々（trees）」を意味しない。「木」の正規形は **arbor**（複数 **arbors**）。文意「鳥が木の中で歌う」に対し誤語。oc:「dins los arbres」, ca:「als arbres」と不整合。
**Proposed fix:** B:「Ils utschels」 C:「chantan」 A:「en ils arbors」
**確信度:** 【蓋然】

### 8. #98 [rm] — E セグメントの「料理」が誤り（"tschaler"）
**Current:** A:「Jau」 B:「less」 C:「cumendar」 D:「quest」 E:「tschaler」
**Problem:** 「tschaler」は RG で「料理（a dish）」を意味する語ではない（"chaler" = 暑さ/熱 や地下室系の語との混同の可能性）。「一品料理」は **plat**。oc:「plat」, ca:「plat」と不整合で、#24 で rm 自身が用いた「spaisa(s)」とも整合しない。
**Proposed fix:** A:「Jau」 B:「less」 C:「cumendar」 D:「quest」 E:「plat」
**確信度:** 【蓋然】

### 9. #91 [ca] — 役割 B が C を挟んで非隣接に2分割（構造崩れ）
**Current:** A:「L'observació dels cirerers en flor」 D:「és」 B:「una」 C:「tradició」 B:「japonesa」
**Problem:** 役割 B が「una」と「japonesa」に二分され、間に C「tradició」が挟まる異常構造。語順「tradició japonesa」自体は正しいが、不定冠詞「una」は名詞 tradició（=C）に属する冠詞であって「Japanese」（=B）ではない。冠詞を C 側に移し、B は形容詞 japonesa のみとすべき。oc:「una tradicion」＋「japonesa」が正しいモデル。
**Proposed fix:** A:「L'observació dels cirerers en flor」 D:「és」 C:「una tradició」 B:「japonesa」
**確信度:** 【確実】

### 10. #91 [rm] — 関係形容詞の位置・性と冠詞割当が不適切
**Current:** A:「Guardar flurs da tscherescha」 D:「è」 B:「ina giapunaisa」 C:「tradiziun」
**Problem:** RG では関係形容詞 **giapunais(a)** は名詞 tradiziun の後置が自然（"ina tradiziun giapunaisa"）。現状は前置で、かつ冠詞「ina」を B に含めて C を裸名詞にしており、#9 ca と同型の構造的誤り。
**Proposed fix:** A:「Guardar flurs da tscherescha」 D:「è」 C:「ina tradiziun」 B:「giapunaisa」
**確信度:** 【蓋然】

### 11. #84 [fr] / [fr_ch] — "dernière → la semaine" の表示順が非文
**Current:** (fr / fr_ch) A:「Elle」 C:「a attrapé」 B:「un rhume」 E:「dernière」 D:「la semaine」
**Problem:** 標準フランス語・スイス仏で「先週」は **la semaine dernière**（名詞＋後置形容詞）。現状は E「dernière」→ D「la semaine」の順で、語順どおり読むと "dernière la semaine" となり非文。日本語 reference（先=E, 週=D）に機械的に合わせてフランス語の実語順を壊している。fr_be / fr_qc / fr_af / oc / rm は正しく D|E 融合（「la semaine passée」等）で処理。
**Proposed fix:** D:「la semaine」 E:「dernière」（D を先、E を後に入れ替え）。fr_ch も同様。
**確信度:** 【確実】

### 12. #92 [ca] — B「dumplings」が英語のまま（未翻訳）
**Current:** A:「Nosaltres」 C:「mengem」 B:「dumplings」 D:「per l'Any Nou Xinès」
**Problem:** カタルーニャ語セルに英語「dumplings」がそのまま入っている。fr/fr_ch/fr_qc は「raviolis」、oc は「raviòlis」、rm は「raviolas」、fr_be/fr_af は「gyoza」。「現地語で書く」原則とグループ内一貫性からは未翻訳。カタルーニャ語の標準的訳は **raviolis**（中華の文脈を残すなら **dumplings xinesos**）。
**Proposed fix:** B:「raviolis」
**確信度:** 【蓋然】

### 13. #88 [oc] — B「lo monde」の語選択（「世界」vs「人々」）
**Current:** A:「L'IA」 C:「es a cambiar」 B:「lo monde」
**Problem:** オック語の **lo monde** は文脈により「人々（les gens）」を強く含意し（cf. #36 oc「monde」=people）、「世界（the world/planet）」の意では **lo mond** が規範的。AI が変えるのは「世界」なので、ここは ca:「el món」, rm:「il mund」, fr:「le monde」と揃え **lo mond** が望ましい。
**Proposed fix:** A:「L'IA」 C:「es a cambiar」 B:「lo mond」
**確信度:** 【蓋然】

### 14. #5 / #55 [rm] — 借用語「café」の綴り不統一
**Current:** (#5 rm) B:「café」 ／ (#55 rm) B|E|F:「duas tazzas café」
**Problem:** RG の規範表記ではコーヒーは **cafè**（開アクセント）。フランス語綴り「café」をそのまま用いており、同一言語内で #5「café」、ca 側は #5「cafè」と割れている。軽微だが正書法の一貫性として要修正。
**Proposed fix:** rm を **cafè** に統一（Pledari Grond 準拠）。
**確信度:** 【要検討】

### 15. #1 [oc] — 「ホテル」を "l'ostal" とする語選択
**Current:** K:「l'ostal」（oc）
**Problem:** oc の **ostal** は「家／住居」が一次義で、近代的ホテルとしては含意がずれる（#33 でも「l'ostau」=家）。現代的には **l'otèl** が一般的。ca/rm は「hotel」を借用しており、誤りとまでは言えないがグループ内で含意が割れる。
**Proposed fix:** 現代化するなら K:「l'otèl」。現状維持も許容。
**確信度:** 【要検討】

### 総評
- **fr / fr_be / fr_ch / fr_qc / fr_af**：方言マーキング（souper, drache, frette, icitte, à matin, à soir, chum, bécyk, natel, gsm, cell, pogné, conte 等）は的確で自然。データはほぼ正確。唯一 #84 の「la semaine / dernière」表示順が標準仏・スイス仏で非文（指摘11）。
- **ca**：概ね良好。構造的な #91 の B 非隣接分割（指摘9）と #92 の未翻訳「dumplings」（指摘12）が主要問題。
- **oc**：語彙レベルの**破損が複数**（#17 rfo, #24 menfo, #38 colfo, #96 pròfo）。確実な要修正。加えて #88 monde→mond の語選択（指摘13）。語順・正書法は概ね妥当。
- **rm**：意味を取り違えた誤語が複数（#38 Ir al sulegl, #88 mida, #63 buobs, #98 tschaler）。#91 の形容詞位置・冠詞割当（指摘10）も要修正。要精査言語。
- なお #93 [rm] の G「vegnan … organisads」（受動 venir+過去分詞）が E/F を挟んで非隣接に現れるのは、ロマンシュ語の vegnir 受動構文として正しい語順であり**誤りではない**（同色 G の分割は妥当）。

## 開発チーム回答 — round 1 (作業者)

ライブ `data.js` を `.wf_langmap_query.mjs` で逐一照合した上での判断。

1. **#38 [rm] B「Ir al sulegl」 → APPLIED**（B:「Il tramunt da sulegl」）。ライブ確認: B:「Ir al sulegl」。「太陽へ行くこと」で日没にならず明白な誤り。ca:「La posta de sol」と整合する正規形へ。
2. **#38 [oc] B「Lo solelh colfo」 → APPLIED**（B:「Lo solelh colcant」）。「colfo」は語尾「-fo」型の破損トークンで実在語でない。
3. **#17 [oc] C「una rfo」 → APPLIED**（C:「una reünion」）。同じく「rfo」破損。ca:una reunió / rm:ina sesida と整合。
4. **#24 [oc] C「lo menfo」 → APPLIED**（C:「lo menut」）。「menfo」破損。
5. **#96 [oc] E「pròfo」「cròtz de carrièra」 → APPLIED**（C:「a la」 E:「venenta」 F:「crosada」）。「pròfo」破損。crosada は女性名詞のため冠詞は「a la」。役割列（C=at, D/E=next, F=intersection）はrm/caに合わせた。
6. **#88 [rm] C「mida」+主語冠詞欠落 → APPLIED**（A:「L'IA」 C:「è vid midar」 B:「il mund」）。mida=測る で「変えつつある」にならない。継続相 è vid midar へ。主語も他変種同様に冠詞付きへ。
7. **#63 [rm] A「en ils buobs」 → APPLIED**（A:「en ils arbors」）。buobs は「木々」でない。oc:los arbres / ca:als arbres と整合。
8. **#98 [rm] E「tschaler」 → APPLIED**（E:「plat」）。oc/ca とも plat。料理の意の正規語へ。
9. **#91 [ca] B の非隣接2分割 → APPLIED**（D:「és」 C:「una tradició」 B:「japonesa」）。不定冠詞 una は名詞 tradició(=C)に属するため C へ統合、B は形容詞 japonesa のみ。oc が正しいモデル。
10. **#91 [rm] 形容詞位置・冠詞割当 → APPLIED**（D:「è」 C:「ina tradiziun」 B:「giapunaisa」）。冠詞を C(名詞)へ、関係形容詞を後置。ca と同型に統一。
11. **#84 [fr]/[fr_ch] E「dernière」→D「la semaine」の順 → APPLIED**（D:「la semaine」 E:「dernière」 に入替）。語順どおり読むと "dernière la semaine" で非文。名詞+後置形容詞へ。fr_ch も同様。
12. **#92 [ca] B「dumplings」未翻訳 → APPLIED**（B:「raviolis」）。グループ内で fr/oc/rm はロマンス語訳。現地語化原則に従い raviolis へ。
13. **#88 [oc] B「lo monde」→「lo mond」 → APPLIED**。#36 oc で「monde」=人々(people)に用いられており（D:I a A:fòrça de B:monde…）、世界(planet)の意は「mond」が規範的。ca:el món / rm:il mund と整合。
14. **#5/#55 [rm] café綴り → HELD（要追加典拠）**。ライブ: #5 rm B:「café」/ #55 rm B|E|F:「duas tazzas café」。RG規範が cafè（開アクセント）である点は妥当に見えるが、Pledari Grond の見出し綴りを当方で一次確認できないため、綴り統一は確証ある典拠（見出し語スクリーンショット等）を提示いただければ次ラウンドで適用する。借用語表記は方言差もあるため慎重に保留。
15. **#1 [oc] K「l'ostal」 → HELD**。reviewer 自身が「現状維持も許容」とし【要検討】。ostal は家/宿の汎称で誤りとまでは言えず、ca/rm が hotel 借用なのに対し oc が土着語を使うのはむしろ多様性として妥当。語彙の含意ずれのみで明確な誤りでないため変更しない。

## レビュアー再評価 — round 2 (Dr. Aurélie Vassal-Roumieu / @galloromanist)

開発チームの round 1 回答について、`.wf_langmap_query.mjs` でライブ `data.js` を全件照合した。照合した文: #1, #5, #17, #24, #36, #38, #55, #63, #84, #88, #91, #92, #98。

### 適用主張の検証結果（per-item 判定）

1. **#38 [rm]** ✓ ライブ B:「Il tramunt da sulegl」確認。「Ir al sulegl（太陽へ行く）」誤訳を解消。A:dad / D:qua / C:è bel 維持。**受理。**
2. **#38 [oc]** ✓ ライブ B:「Lo solelh colcant」確認。破損 colfo を実在語へ修正。**受理。**
3. **#17 [oc]** ✓ ライブ C:「una reünion」確認。ca:una reunió / rm:ina sesida と整合。**受理。**
4. **#24 [oc]** ✓ ライブ C:「lo menut」確認。破損 menfo を解消。**受理。**
5. **#96 [oc]** ✓ ライブ C:「a la」 E:「venenta」 F:「crosada」確認。破損 pròfo を解消、crosada（女性名詞）に合わせ冠詞 a la も正しい。役割列も rm/ca と整合。**受理。**
6. **#88 [rm]** ✓ ライブ A:「L'IA」 C:「è vid midar」 B:「il mund」確認。midar=変える の継続相、主語冠詞付与とも妥当。**受理。**
7. **#63 [rm]** ✓ ライブ A:「en ils arbors」確認。buobs→arbors。oc:los arbres / ca:als arbres と整合。**受理。**
8. **#98 [rm]** ✓ ライブ E:「plat」確認。oc/ca とも plat。**受理。**
9. **#91 [ca]** ✓ ライブ D:「és」 C:「una tradició」 B:「japonesa」確認。冠詞を名詞 C に統合、B は形容詞のみ。非隣接2分割の構造崩れ解消。oc モデル（una tradicion / japonesa）と一致。**受理。**
10. **#91 [rm]** ✓ ライブ D:「è」 C:「ina tradiziun」 B:「giapunaisa」確認。冠詞を C へ、関係形容詞 giapunaisa を後置。ca と同型。**受理。**
11. **#84 [fr]/[fr_ch]** ✓ ライブ両変種とも D:「la semaine」 E:「dernière」確認。語順を名詞＋後置形容詞へ修正、"dernière la semaine" の非文を解消。**受理。**
12. **#92 [ca]** ✓ ライブ B:「raviolis」確認。未翻訳 dumplings をロマンス語化、グループ内一貫。**受理。**
13. **#88 [oc]** ✓ ライブ B:「lo mond」確認。加えて開発側の反証（#36 oc が「monde」=人々の意で使用：D:I a / A:fòrça de / B:monde / C:a l'estacion）をライブで確認した。world/planet には mond、people には monde という対立は当方の指摘と整合し、修正は正しい。**受理。**

### HELD 項目の裁定

14. **#5/#55 [rm] café/cafè 綴り** △→**CONCEDE（既知の限界として保留）**。ライブは #5 rm B:「café」/ #55 rm B|E|F:「duas tazzas café」のまま。当方は RG 規範を **cafè**（開アクセント）と主張するが、確信度を【要検討】と自ら記した軽微な正書法事項であり、開発側は「Pledari Grond の見出し綴りを一次確認できない」として典拠提示を条件に保留した。これは正当な調査姿勢であり、当方も本ラウンドで一次見出し語のスクリーンショット等の確証を提示できない。同一データ内で oc/ca が cognate を「cafè」と綴る傍証はあるが、これは oc/ca の正書法であって RG の典拠にはならない。ループ終了方針に従い、**「RG での café→cafè 統一は典拠提示待ちの既知の限界」**として本項を closed 扱いとし、これ以上追及しない（開発側の反論を受け入れ譲歩）。

15. **#1 [oc] K「l'ostal」** ✓**CONCEDE**。当方が当初から「現状維持も許容」【要検討】とした項目。ライブ K:「l'ostal」確認。ca/rm が hotel 借用なのに対し oc が土着語 ostal を保持するのは多様性として妥当との開発側反論は健全。明確な誤りでないため**譲歩して取り下げる。**

### スコアカード

| 区分 | 件数 | 番号 |
|---|---|---|
| ✓ 受理（修正確認済） | 13 | 1–13 |
| CONCEDE（開発側反論受入／既知の限界） | 2 | 14, 15 |
| △ 部分 | 0 | — |
| ✗ 却下 | 0 | — |
| 新規問題 | 0 | — |

確実な破損・誤訳（oc: rfo/menfo/colfo/pròfo、rm: Ir al sulegl/mida/buobs/tschaler）、構造崩れ（#91 ca/rm の非隣接分割）、非文語順（#84 fr/fr_ch）はすべて修正・ライブ確認済み。残る2件は当方が譲歩した軽微/要検討事項のみで、actionable な明確誤りは残存しない。

**ファイル状態: CLOSED — 残課題なし**（#5/#55 rm の café→cafè 正書法統一は RG 一次典拠待ちの「既知の限界」として記録。明確誤りではないため本サイクルでは追及しない）
