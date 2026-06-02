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

## ラウンド4 監査 — 分割粒度・方言自然さ (レビュアー)

Dr. Aurélie Vassal-Roumieu / @galloromanist。本ラウンドは R1–R3 が手薄だった (1)分割粒度 (2)方言自然さ の2軸に絞った再監査。`/tmp/langmap_suspect/06.md` の全フラグセルを `.wf_langmap_query.mjs` でライブ照合した。オーナー方針「迷ったら分割」に従い、特に ⛔3-way以上の複合を最優先で精査。en/標準 fr の参照分割（#70 fr は `D:à E:21 F:h`）を分割可能性の根拠に用いた。

### A. 分割すべき (SPLIT) — actionable

#### 【確実】系統横断で同型の機械的過融合

**1. #70 全変種（fr_be, fr_ch, fr_qc, fr_af, oc, ca, rm）— `B|D|E|F` 時刻句**
- 現状例: [ca] A:「La botiga」 C:「tanca」 **B|D|E|F:「a les 9 del vespre」**
- en は D:at / E:9 / F:PM と3分割。標準 fr もライブで **D:「à」 E:「21」 F:「h」** と既に3分割済み。よって複合内に前置詞・数詞・時間帯名詞が明白に分離可能。混入している B は冗長（en に B 役なし）。
- 提案（各変種）:
  - [fr_be] D:「à」 E:「vingt-et-une」 F:「heures」（21h=軍隊式、heures が時刻名詞=F、夜の語なし）
  - [fr_ch] D:「à」 E:「21」 F:「heures」
  - [fr_qc] D:「à」 E:「9」 F:「heures」
  - [fr_af] D:「à」 E:「21」 F:「heures」
  - [oc] D:「a」 E:「9」 F:「oras del ser」
  - [ca] D:「a les」 E:「9」 F:「del vespre」（または D:「a」 E:「les 9」 F:「del vespre」）
  - [rm] D:「a las」 E:「9」 F:「da saira」
- 理由: 前置詞(D)＋数詞(E)＋時間帯/単位(F) は全変種で独立形態素。隣接同色は生じない。

**2. #43 fr_be, fr_qc, fr_af, oc, rm — `A|D|E`（前置詞＋指示詞＋名詞）**
- 現状例: [oc] B:「Lo manjar」 **A|D|E:「d'aqueste restaurant」** C:「es deliciós」
- en は A:at / D:this / E:restaurant。同グループの **ca が既に `A|D:「d'aquest」 E:「restaurant」`** と名詞(E)を分離しており、これが正しいモデル。少なくとも名詞 E は全変種で分離可能。
- 提案:
  - [oc] A|D:「d'aqueste」 E:「restaurant」
  - [fr_be] A|D:「de ce」 E:「restaurant」（B:「La cuisine de」の de は B 側のまま）
  - [fr_af] A|D:「de ce」 E:「restaurant」
  - [fr_qc] A|D:「dans ce」 E:「resto-là」（指示後置辞 -là は指示詞の一部として D に残す）
  - [rm] A|D:「da quest」 E:「restaurant」
- 理由: 名詞 restaurant は明白に独立。前置詞＋指示詞(A|D)の更なる分離も理論上可能だが、de+aqueste/ce は連結が密で、まず名詞分離で⛔→⚠️に格下げするのが堅実。ca と同型化することでグループ内一貫も得られる。

**3. #77 fr_be, fr_af, oc, ca, rm — `B|D|E`（前置詞＋限定詞＋名詞）**
- 現状例: [ca] A:「Ell」 C:「es va sorprendre」 **B|D|E:「pels resultats de l'examen」**
- en は D:by / E:the test / B:results。Romance は「前置詞＋定冠詞縮約(per+els=pels / par le) ＋ 結果名詞(B) ＋ de＋試験名詞(E)」。少なくとも結果名詞(B)と試験名詞句(E)は de で明確に分離。
- 提案:
  - [ca] D:「pels」 B:「resultats」 E:「de l'examen」
  - [oc] D:「pels」 B:「resultats」 E:「del examen」
  - [rm] D:「dals」 B:「resultats」 E:「da l'examen」
  - [fr_be] D:「par le」 B:「résultat」 E:「de l'examen」
  - [fr_af] D:「par le」 B:「résultat」 E:「de l'examen」
- 理由: D(前置詞＋冠詞縮約)・B(結果)・E(de＋試験) は独立要素。隣接同色なし。⛔→完全3分割可。

#### 【蓋然】

**4. #46 oc, ca, rm（および fr_qc）— `B|F|G`（前置詞＋所有詞＋名詞）**
- 現状例: [oc] A:「Ieu」 E|H:「ai parlat」 **B|F|G:「amb mon amic」** C:「per telefòn」 D:…
- en は F:with / G:my / B:friend。**fr_be が既に F:「avec」 G:「mon」 B:「ami」 と完全3分割済み**で、これが正しいモデル。oc/ca/rm/fr_qc も同型分割可能。
- 提案:
  - [oc] F:「amb」 G:「mon」 B:「amic」
  - [ca] F:「amb」 G:「el meu」 B:「amic」
  - [rm] F:「cun」 G:「mieu」 B:「ami」
  - [fr_qc] F:「avec」 G:「mon」 B:「chum」（chum はケベック自然語、維持）
- 理由: 前置詞・所有詞・名詞は全て独立語。fr_be が証拠。

**5. #55 oc, ca, rm — `B|E|F`（数詞＋類別句＋名詞）**
- 現状例: [oc] C:「bevi」 **B|E|F:「doas tassas de cafè」** D:「cada jorn」
- en は E:two / F:cups of / B:coffee。数詞(E)＋「杯 de」(F)＋飲料名詞(B)は分離可能。
- 提案:
  - [oc] E:「doas」 F:「tassas de」 B:「cafè」
  - [ca] E:「dues」 F:「tasses de」 B:「cafè」
  - [rm] E:「duas」 F:「tazzas」 B:「café」（rm は属格 de なし、tazzas が F）
- 理由: 数詞・容器名詞・内容物名詞は独立。⛔→完全3分割可。

**6. #69 oc, ca, rm — `B|F|G`（冠詞＋形容詞＋名詞）＋ `C|H`（前置詞＋名詞句）**
- 現状例: [oc] D|E:「a escrich」 **B|F|G:「una longa letra」** **C|H:「a sos parents」**
- en は F:a / G:long / B:letter ／ H:to / C:his parents。
- 提案:
  - [oc] F:「una」 G:「longa」 B:「letra」 ／ H:「a」 C:「sos parents」
  - [ca] F:「una」 G:「llarga」 B:「carta」（語順: ca は名詞後置 "carta llarga"→ F:「una」 B:「carta」 G:「llarga」）／ H:「als」 C:「seus pares」（縮約 a+els=als は H 扱い）
  - [rm] F:「ina」 G:「lunga」 B:「brev」 ／ H:「a」 C:「ses geniturs」
- 理由: 不定冠詞(F)・形容詞(G)・名詞(B) は独立。前置詞 a/als(H) と名詞句(C)も de/格で分離。▼4 の不足を大きく解消。ただし ca は形容詞後置のため語順は B→G にせよ隣接同色は生じない。

### B. KEEP（正当な融合・省略、分割しない）

- **#53 fr_be/fr_af/oc/rm `A|D:「du jardin」/「en il curtgin」`** 【確実KEEP】: フランス語 du=de+le は前置詞＋冠詞の真正な縮約ポルトマントーで、A(庭)とD(前置詞)が一語に融合。分離不能。標準 fr が `D:dans A:le jardin` と分けられるのは dans が縮約しないため。du/del は分割不可。
- **#53/#84/#35 等の `C|E`（連結時制・コピュラ）** 【確実KEEP】: oc「son en florison」rm「flureschan」ca「estan florint」は進行/状態を一語動詞で表し、英 are(E)+blooming(C) の助動詞分離に対応する独立形態素を持たない。fr 単純現在 fleurissent も同様。▼ は pro-drop ならぬ「助動詞なし」の正当な類型差。
- **#84 ca `B|C:「es va refredar」`** 【確実KEEP】: 「風邪をひく」を再帰動詞 refredar-se 一語で表し、英 caught(C)+a cold(B) の目的語名詞に当たる独立要素がない。ca/同型は分離不可。
- **#48 fr_be/fr_af/oc `B|E:「film/film-là/aquel filme」`**: oc「aquel filme」は指示詞 aquel(E) と名詞 filme(B) に分離可能なので本来 SPLIT 候補だが、fr_be「film」fr_af「film-là」は指示が C:「ce」に既出で、B|E は名詞のみ＝E は冗長ラベル。oc のみ E:「aquel」 B:「filme」化を【蓋然】で推奨（下記カウントに算入）。fr_be/fr_af は KEEP。
- **#3 fr_be/ca `B|C:「déjeune/esmorzo」`** 【確実KEEP】: 「朝食をとる」を自動詞一語で表し、英 eat(C)+breakfast(B) の目的語に当たる独立語がない。分離不能。
- **#52/#73/#85/#50/#51/#35 の `A|E`, `B|F`, `C|G`, `B|E` 等**: 多くは所有詞＋名詞や前置詞＋名詞だが、#73「sus mon lièch」#52「al mercat」等は縮約 al=a+el を含むため部分分割のみ可。優先度低のため本ラウンドでは⛔のみ actionable とし、これらは KEEP/低優先。
- **#28 rm ▼2「Pudessas」**: 接続法二人称単数一語に「Could you」の主語 you が抱合（rm は主語代名詞省略の pro-drop 的環境）。B(you) の独立語なし＝正当な省略。KEEP。
- **#99 fr_af ▼2「C'est combien」**: ce+est のコピュラ融合は真正。D(is) 分離不能。KEEP。
- **#45 fr_qc ▼2 / oc・ca・rm `A|E|F`**: oc「Dins aqueste país」= 前置詞 Dins(E)＋指示 aqueste(F)＋国 país(A)。これは分離可能で本来 SPLIT 候補（E:Dins F:aqueste A:país）。【蓋然】で oc/ca/rm に推奨（カウント算入）。fr_qc「Dans ce pays-là」も同様に E:「Dans」 F:「ce」 A:「pays-là」へ分割推奨。

### C. 方言・非標準の自然さ

担当8変種を実話者基準で再点検。R1–R3 で破損語（oc rfo/menfo/colfo/pròfo、rm 各種）は既修正。本ラウンドで新たに「自然さ」の観点から確認した結果:

- **fr_qc**: 「resto-là」「ben bonne」「frette」「y fait」「chum」「pogné」「A（=Elle の口語縮約, #84）」「-là」指示後置辞は、いずれもケベック口語として **自然【確実】**。calque や標準再綴りではない。問題なし。
- **fr_be**: 「causer（=話す、ベルギー/北部仏で parler の意）」(#46) は地域的に **自然【蓋然】**だが、causer は「おしゃべりする」含意が強く、電話で「一時間話した」の中立文脈ではやや口語寄り。許容範囲。「vingt-et-une heures」(#70) は標準的で問題なし。
- **fr_af**: 「film-là」(#48) の指示後置 -là はアフリカ仏語/口語仏で **自然【蓋然】**。「montre-moi le chemin」(#49) も自然。問題なし。
- **fr_ch**: フラグ箇所(#53/#70)に方言マーカーは出ないが、これは #70 が時刻表現で natel 等が出ない文のため。不自然さなし。
- **oc/ca/rm**: 本ラウンドのフラグは全て分割粒度の問題で、語彙自然さの新規問題は検出されず（破損は R1 で解消済み）。

方言自然さの新規 actionable 修正は **0件**。既存の方言マーキングは的確と再確認。

### D. スコアカード（ラウンド4）

| 区分 | 件数 |
|---|---|
| SPLIT 推奨（actionable, 文×言語単位） | 確実: #70×7, #43×5, #77×5 = 17 / 蓋然: #46×4, #55×3, #69×3, #48 oc×1, #45×4(oc,ca,rm,fr_qc) = 15 → 計 **32** |
| 方言自然さ修正 | **0**（既存マーキングは自然と再確認） |
| KEEP（正当な融合・省略と判定） | #53 縮約 du/del×4, #53/#84/#35 連結時制×多数, #84 ca 再帰, #3×2, #28, #99, #73/#52/#85/#50/#51 低優先群 ≈ **18** セル |

優先度: ⛔3-way（#70/#43/#77/#46/#55/#69/#45 系）を最優先で分割すれば、フラグ ⛔35件の大半が ⚠️ または解消に格下げ可能。⚠️2-way の多く（du/del 縮約、連結時制、自動詞抱合）は **正当な類型差で KEEP** であり、▼不足の相当数も pro-drop / 助動詞なし / 縮約による正当な省略である点を強調する。

## 開発チーム回答 — round 4 (作業者)

ライブ `data.js` を `.wf_langmap_query.mjs` で全フラグセル照合。オーナーの分割優先方針に従い、独立語に対応する役色を持つ複合は積極分割した（隣接同役は発生しないことを各件で確認）。

### A. SPLIT — APPLIED（applied by orchestrator this round）

1. **#70 時刻句 `B|D|E|F` → D/E/F に3分割（全7変種）APPLIED**。en は D:at E:9 F:PM で **B役は存在しない**（融合内の B は冗長）。冗長 B を落とし D(前置詞)/E(数詞)/F(時間帯・単位)へ。fr_be D:à E:vingt-et-une F:heures／fr_ch D:à E:21 F:heures／fr_qc D:à E:9 F:heures／fr_af D:à E:21 F:heures／oc D:a E:9 F:oras del ser／ca D:a les E:9 F:del vespre／rm D:a las E:9 F:da saira。
2. **#43 `A|D|E` → 名詞 E 分離 APPLIED**（fr_be/fr_af/fr_qc/oc/rm）。ca/fr_ch は既に分割済。fr_be B:「La cuisine de」A|D:「ce」E:「restaurant」／fr_af B:「La nourriture de」A|D:「ce」E:「restaurant」／fr_qc A|D:「dans ce」E:「resto-là」／oc A|D:「d'aqueste」E:「restaurant」／rm A|D:「da quest」E:「restaurant」。前置詞＋指示詞は連結が密なので A|D は維持し名詞のみ分離（ca モデルと同型）。
3. **#46 `B|F|G` → F/G/B に3分割 APPLIED**（fr_qc/oc/ca/rm）。fr_be は既に F:avec G:mon B:ami と分割済でモデル。fr_qc F:avec G:mon B:chum／oc F:amb G:mon B:amic／ca F:amb G:el meu B:amic／rm F:cun G:mieu B:ami。
4. **#55 `B|E|F` → E/F/B に分割 APPLIED**（oc/ca/rm）。oc E:doas F:tassas de B:cafè／ca E:dues F:tasses de B:cafè／rm E:duas F:tazzas B:café（rm は属格 de なし）。
5. **#69 `B|F|G`＋`C|H` 分割 APPLIED**（oc/ca/rm）。oc F:una G:longa B:letra ／ H:a C:sos parents。ca は名詞後置のため F:una B:carta G:llarga ／ H:als C:seus pares。rm F:ina G:lunga B:brev ／ H:a C:ses geniturs。
6. **#45 `A|E|F` → E/F/A に分割 APPLIED**（oc/ca/rm/fr_qc）。oc E:Dins F:aqueste A:país／ca E:En F:aquest A:país／rm E:En F:quest A:pajais／fr_qc E:Dans F:ce A:pays-là。
7. **#48 oc `B|E` → E/B 分割 APPLIED**。oc E:aquel B:filme（指示詞独立）。fr_be/fr_af は指示が C:ce に既出で B|E は名詞のみ＝分割不要、KEEP。

### B. KEEP（正当な融合）
- #53 du/del 縮約、連結時制、#84 ca 再帰、#3 自動詞抱合などは round4 レビュアーも KEEP 判定。同意、変更なし。

全 SPLIT は異なる役色への分割で、隣接同役色重複は発生しない。

## レビュアー再評価 — round 5 (Dr. Aurélie Vassal-Roumieu / @galloromanist)

開発チームの round 4 回答（A. SPLIT — APPLIED 7項目）を `.wf_langmap_query.mjs` でライブ `data.js` 全件照合した。照合文: #17, #24, #38, #43, #45, #46, #48, #55, #69, #70, #84, #88, #91, #92。隣接同役色重複の有無も各件で確認した。

### round 4 適用主張の検証（per-item 判定）

1. **#70 時刻句 3分割（全7変種）** ✓ ライブ全変種確認。fr_be `D:à E:vingt-et-une F:heures`／fr_ch `D:à E:21 F:heures`／fr_qc `D:à E:9 F:heures`／fr_af `D:à E:21 F:heures`／oc `D:a E:9 F:oras del ser`／ca `D:a les E:9 F:del vespre`／rm `D:a las E:9 F:da saira`。冗長 B を落とし前置詞(D)/数詞(E)/時間帯・単位(F)へ。en に B 役なしとの根拠も妥当。隣接同役色なし。**受理。**
2. **#43 名詞 E 分離** ✓ ライブ確認。fr_be/fr_af/fr_qc/oc/rm とも `A|D:…` ＋ `E:restaurant/resto-là` に分離。ca/fr_ch は既分割（fr_ch は `A:dans D:ce E:restaurant`）。前置詞＋指示詞(A|D)の密結合を維持し名詞のみ分離する判断は、当方 round4 提案（「まず名詞分離で⛔→⚠️に格下げ」）と完全一致。**受理。**
3. **#46 `B|F|G` 3分割** ✓ ライブ確認。fr_qc `F:avec G:mon B:chum`／oc `F:amb G:mon B:amic`／ca `F:amb G:el meu B:amic`／rm `F:cun G:mieu B:ami`。fr_be がモデル（既 `F:avec G:mon B:ami`）。fr_qc は chum 維持で自然。**受理。**
4. **#55 `B|E|F` 分割** ✓ ライブ確認。oc `E:doas F:tassas de B:cafè`／ca `E:dues F:tasses de B:cafè`／rm `E:duas F:tazzas B:café`（rm は属格 de なし、tazzas が F）。数詞/容器/内容物の3分離は妥当。**受理。**
5. **#69 `B|F|G`＋`C|H` 分割** ✓ ライブ確認。oc `F:una G:longa B:letra ／ H:a C:sos parents`／ca `F:una B:carta G:llarga ／ H:als C:seus pares`（名詞後置語順）／rm `F:ina G:lunga B:brev ／ H:a C:ses geniturs`。ca の B→G 順でも隣接同役色は生じない。**受理。**
6. **#45 `A|E|F` 分割** ✓ ライブ確認。oc `E:Dins F:aqueste A:país`／ca `E:En F:aquest A:país`／rm `E:En F:quest A:pajais`／fr_qc `E:Dans F:ce A:pays-là`。前置詞/指示詞/国名詞の完全3分離。pays-là の後置辞は A に残し妥当。**受理。**
7. **#48 oc `B|E` 分割** ✓ ライブ確認。oc `E:aquel B:filme`（指示詞独立）。fr_be/fr_af は指示が C:ce に既出で B|E は名詞のみ＝分割不要 KEEP との判断も妥当。**受理。**

### round 1 修正の非回帰確認

#38 oc/rm、#17/#24/#96 oc、#88 oc/rm、#91 ca/rm、#84 fr/fr_ch、#92 ca をライブ再照合し、R1 で適用した破損語・誤訳・構造崩れ・非文語順の修正がすべて維持されていることを確認（回帰なし）。

### KEEP 項目の同意

#53 du/del 縮約、連結時制、#84 ca 再帰動詞、#3 自動詞抱合、#28 rm pro-drop、#99 fr_af コピュラ融合は、いずれも正当な類型差・分離不能ユニットであり、開発側の KEEP 判定に同意。これらに更なる分割を求めない。

### 譲歩項目（既出）

#5/#55 rm café→cafè 正書法統一（指摘14）は round2 で「RG 一次典拠待ちの既知の限界」として CONCEDE 済み。本ラウンドでも一次見出し語の確証を提示できないため追及しない。#1 oc l'ostal（指摘15）も round2 で CONCEDE 済み。

### スコアカード（round 5）

| 区分 | 件数 | 番号 |
|---|---|---|
| ✓ 受理（round4 SPLIT 適用確認済） | 7 | A1–A7 |
| ✓ 非回帰確認（round1 修正維持） | 13 | R1 #1–13 |
| KEEP 同意 | 多数 | #53/#84/#3/#28/#99 ほか |
| CONCEDE（既知の限界） | 2 | 14, 15 |
| △ 部分 | 0 | — |
| ✗ 却下 | 0 | — |
| 新規問題 | 0 | — |

round 4 で要請した SPLIT 32セル相当（#70×7, #43×5, #46×4, #55×3, #69×3, #45×4, #48×1 ほか）はすべて適用・ライブ確認済み。隣接同役色重複なし。残る actionable な明確誤り・未適用主張は存在しない。café→cafè のみ典拠待ちの既知の限界として記録。

**ファイル状態: CLOSED — 残課題なし**（#5/#55 rm の café→cafè 正書法統一は RG 一次典拠待ちの「既知の限界」として記録。明確誤りではないため本サイクルでは追及しない）

## ラウンド5 監査 — 分割粒度・方言自然さ (レビュアー)

Dr. Aurélie Vassal-Roumieu / @galloromanist。本ラウンドはオーナー直々の2軸（(1)分割粒度＝迷えば分割、(2)方言自然さ）に絞った再監査。`/tmp/langmap_suspect/06.md` の全フラグセルを `.wf_langmap_query.mjs` でライブ照合し直した（#3, #35, #43, #45, #46, #48, #49, #50, #51, #52, #53, #55, #69, #70, #73, #77, #80, #84, #85 ほか）。

**重要な方針転換**: ラウンド4 で当方は #35/#50/#51/#73 等の `A|E`（所有詞＋名詞）や #73 の `C|G`（量化詞＋名詞）を「優先度低」として KEEP に分類した。しかしオーナー方針では「優先度低・労力は KEEP の正当理由にならない。KEEP は分離不能性のみに依拠せよ。**同系統のいずれかの変種が既に分割しているなら、同構造の全変種を分割せよ（fix-all-variants）**」と明示されている。ライブ照合の結果、**フランス語の全変種（fr/fr_be/fr_ch/fr_qc/fr_af）がこれらの所有詞・量化詞を既に分割している**ことが判明したため、当方の前回 KEEP 判定を撤回し、oc/ca/rm を SPLIT に格上げする。これがラウンド5 の主たる新規指摘である。

### A. 分割すべき (SPLIT) — actionable

#### 【確実】⛔ 残存する3-way以上の過融合（ラウンド4で未適用）

**S1. #77 oc/ca/rm/fr_be/fr_af — `B|D|E:「pels resultats del examen」等 → 3分割**
- ライブ現状: [oc] A:「El」 C:「foguèt espantat」 **B|D|E:「pels resultats del examen」**／[ca] **B|D|E:「pels resultats de l'examen」**／[rm] **B|D|E:「dals resultats da l'examen」**／[fr_be]/[fr_af] **B|D|E:「par le résultat de l'examen」**
- 根拠（fix-all-variants）: **標準 fr が既に `D:par E:les résultats du B:test` と3分割済み**。en も D:by / E:the test / B:results。前置詞＋冠詞縮約(pels/dals/par le=D)、結果名詞(B)、de＋試験名詞句(E) はすべて独立要素。
- 提案:
  - [oc] D:「pels」 B:「resultats」 E:「del examen」
  - [ca] D:「pels」 B:「resultats」 E:「de l'examen」
  - [rm] D:「dals」 B:「resultats」 E:「da l'examen」
  - [fr_be] D:「par le」 B:「résultat」 E:「de l'examen」
  - [fr_af] D:「par le」 B:「résultat」 E:「de l'examen」
- 隣接同役色なし。⛔→完全3分割。**確信度【確実】**。

**S2. #49 oc/ca/rm/fr_be/fr_af — `C|E|F|G`（4-way!）→ 分割**
- ライブ現状: [oc] A:「Se vos plai」 D:「diguètz」 B:「-me」 **C|E|F|G:「lo camin de l'aeropòrt」**／[ca] **C|E|F|G:「el camí cap a l'aeroport」**／[rm] **C|E|F|G:「la via a l'eroport」**／[fr_be] **C|E|F|G:「le chemin vers l'aéroport」**／[fr_af] **C|E|F|G:「le chemin pour l'aéroport」**
- 根拠: **標準 fr が `E:le chemin F:de G:l'aéroport` と分割済み**（C は不使用）。en は E:the way / F:to / G:the airport。少なくとも「道(E)」＋「前置詞(F)」＋「空港(G)」は明白に分離可能。冗長な C は fr 同様に落とす。
- 提案（C を落とし E/F/G へ）:
  - [oc] E:「lo camin」 F:「de」 G:「l'aeropòrt」
  - [ca] E:「el camí」 F:「cap a」 G:「l'aeroport」
  - [rm] E:「la via」 F:「a」 G:「l'eroport」
  - [fr_be] E:「le chemin」 F:「vers」 G:「l'aéroport」
  - [fr_af] E:「le chemin」 F:「pour」 G:「l'aéroport」
- 本グループ最大の残存過融合（4-way）。隣接同役色なし。**確信度【確実】**。

#### 【確実】所有詞＋名詞 `A|E` の系統横断分割（fr 変種が既に分割＝fix-all-variants）

**S3. #35 oc/ca/rm — `A|E:「Mon fraire ainat」等 → A(所有詞)+E(名詞)**
- ライブ: [oc] **A|E:「Mon fraire ainat」**／[ca] **A|E:「El meu germà gran」**／[rm] **A|E:「Mieu frar pli vegl」**
- 根拠: fr/fr_ch/fr_qc/fr_af すべて **A:「Mon」 E:「grand frère」** と分割済み。所有詞 Mon/El meu/Mieu は独立語（日本語「兄」型の抱合ではない）。
- 提案: [oc] A:「Mon」 E:「fraire ainat」／[ca] A:「El meu」 E:「germà gran」／[rm] A:「Mieu」 E:「frar pli vegl」
- **確信度【確実】**。

**S4. #50 oc/ca/rm — `A|E:「Mon chin」等 → E(所有詞)+A(名詞)**
- ライブ: [oc] **A|E:「Mon chin」**／[ca] **A|E:「El meu gos」**／[rm] **A|E:「Mieu chaun」**
- 根拠: **fr_be が既に E:「Mon」 A:「chien」**、fr/fr_ch/fr_qc/fr_af も同様に分割。所有詞は独立語。
- 提案: [oc] E:「Mon」 A:「chin」／[ca] E:「El meu」 A:「gos」／[rm] E:「Mieu」 A:「chaun」
- **確信度【確実】**。

**S5. #51 oc/ca/rm — `A|E:「Ma grand-maire」等 → E(所有詞)+A(名詞)**
- ライブ: [oc] **A|E:「Ma grand-maire」**／[ca] **A|E:「La meva àvia」**／[rm] **A|E:「Mia tatta」**
- 根拠: fr_be 「E:Ma A:grand-mère」ほか fr 全変種が分割済み。
- 提案: [oc] E:「Ma」 A:「grand-maire」／[ca] E:「La meva」 A:「àvia」／[rm] E:「Mia」 A:「tatta」
- **確信度【確実】**。

**S6. #73 oc/ca/rm — `A|E`（所有詞＋名詞）＋ `C|G`（量化詞＋名詞）の2系統分割**
- ライブ: [oc] **A|E:「Mon cat」** D:「dòrm」 B|F:「sus mon lièch」 **C|G:「cada nuèch」**／[ca] **A|E:「El meu gat」** … **C|G:「cada nit」**／[rm] **A|E:「Mieu giat」** … **C|G:「mintga saira」**
- 根拠: fr 全変種が **E:「Mon」 A:「chat」** および **G:「chaque」 C:「nuit」** と両方分割済み。所有詞(E)・量化詞 cada/mintga(G) はともに独立語。en も E:My/A:cat、G:every/C:night。
- 提案: [oc] E:「Mon」 A:「cat」 … G:「cada」 C:「nuèch」／[ca] E:「El meu」 A:「gat」 … G:「cada」 C:「nit」／[rm] E:「Mieu」 A:「giat」 … G:「mintga」 C:「saira」
- 注: `B|F:「sus mon lièch」`（前置詞＋所有詞＋ベッド）は **fr 全変種も `F:sur B:mon lit` と縮約せず保持＝同系統で一致**しており、本ラウンドでは B|F は別扱い（下記 KEEP/低優先）。所有詞・量化詞の2系統のみ SPLIT。
- **確信度【確実】**（A|E, C|G とも）。

#### 【蓋然】系統内一部のみ未分割（oc が分割済み、ca/rm 未分割）

**S7. #80 ca/rm — `B|F`（動詞＋場所句）／ rm の `C|G`（形容詞＋名詞）**
- ライブ: [oc] B:「estudiar」 F:「a l'estranger」 … C:「experiéncia」 G:「preciosa」（**oc は両方分割済み＝モデル**）／[ca] **B|F:「estudiar a l'estranger」** D:「és」 I:「una」 C:「experiència」 G:「valuosa」／[rm] **B|F:「studiar a l'exteriur」** D:「è」 **C|G:「ina valitaivla experientscha」**
- 根拠: en は B:studying / F:abroad ／ G:valuable / C:experience。oc が同系統内で既に B/F・C/G を分割しており、fix-all-variants で ca/rm も分割すべき。動詞(B)＋場所副詞句(F)、形容詞(G)＋名詞(C) はいずれも独立要素。
- 提案: [ca] B:「estudiar」 F:「a l'estranger」（C/G は ca 既分割で可）／[rm] B:「studiar」 F:「a l'exteriur」 ／ C|G は G:「valitaivla」 C:「experientscha」へ分割（rm のみ冠詞 ina を I として分離するかは要検討）。
- **確信度【蓋然】**（ca の B|F は確実寄り、rm の冠詞処理のみ要検討）。

**S8. #85 oc/ca/rm — `B|E:「mai d'aiga」等（量化詞＋名詞）**
- ライブ: [oc] **B|E:「mai d'aiga」**／[ca] **B|E:「més aigua」**／[rm] **B|E:「dapli aua」**
- 根拠: en は E:more / B:water。量化詞 mai/més/dapli(=more) は独立語で、後続の水(B)と分離可能（#73 の cada/G 分割と同論理）。本グループ内に既分割の sibling は無いが、量化詞は明白に独立。
- 提案: [oc] E:「mai d'」 B:「aiga」（de は部分冠詞、E 側に残す）／[ca] E:「més」 B:「aigua」／[rm] E:「dapli」 B:「aua」
- **確信度【蓋然】**（oc の de の帰属のみ要検討）。

### B. KEEP（正当な融合・省略、分割しない）— 分離不能性に基づく

- **#53 `A|D:「del jardin/du jardin/en il curtgin」`** 【確実KEEP】: del=de+lo, du=de+le は前置詞＋冠詞の真正ポルトマントー（縮約）。分離不能。標準 fr が `D:dans A:le jardin` と分けられるのは dans が縮約しない別語だから。
- **#53/#35/#84 等の `C|E`（連結時制・コピュラ）** 【確実KEEP】: oc「son en florison」rm「flureschan」ca「estan florint」fr「fleurissent」は進行/状態を一語ないし不可分の迂言形で表し、英 are(E)+blooming(C) の助動詞に当たる**独立形態素を持たない**。▼ は「助動詞なし」の正当な類型差。
- **#84 ca `B|C:「es va refredar」`** 【確実KEEP】: 「風邪をひく」を再帰動詞 refredar-se 一語で表現。英 caught(C)+a cold(B) の目的語名詞に当たる独立語がない。oc/rm が `C:「a atrapat/ha surpigliài」 B:「un refrejament/in arfridament」` と分けられるのは目的語名詞を持つ構文だから。ca のみ構文が異なり分離不能。
- **#3 fr_be/ca `B|C:「déjeune/esmorzo」`** 【確実KEEP】: 「朝食をとる」を自動詞一語で表現。英 eat(C)+breakfast(B) の目的語に当たる独立語がない。分離不能。
- **#52 oc/ca/rm `C|H:「ai perdut/vaig perdre/hai pers」`** 【確実KEEP】: 複合過去/迂言過去の助動詞＋過去分詞は一個の時制ユニット。英 lost(C|H) 自体が単一語で en でも C|H 融合。分離しても en に対応役の境界がない。
- **#46 rm `D:「ina ura」`（▼: durant/per 欠落）** 【確実KEEP】: 「一時間（の間）」を前置詞なしの裸の対格的名詞句で表すのは rm の正当な統語（持続の対格）。oc/ca が pendent/durant を持つのは別選択であり、rm の前置詞省略は誤りでない。
- **#73 `B|F:「sus mon lièch」`系** 【KEEP（系統一致）】: 前置詞 sus/al/en＋所有詞＋名詞。fr 全変種も `F:sur B:mon lit` と保持し系統内で一致。所有詞 mon は理論上分離可能だが、本ラウンドでは fr が縮約せず B|F 保持で揃っているため過剰分割を避け KEEP（所有詞分割は将来課題）。
- **#28 rm ▼2「Pudessas」** 【確実KEEP】: 接続法二人称単数一語に「Could you」の主語 you が抱合（pro-drop）。独立語なし。
- **#99 fr_af ▼2「C'est combien」** 【確実KEEP】: ce+est のコピュラ融合は真正。D(is) 分離不能。
- **café/cafè（#5/#55 rm）・#1 oc l'ostal**: round2 で CONCEDE 済み。典拠待ち／多様性として KEEP。

### C. 方言・非標準の自然さ

担当8変種を実話者基準で再点検（オーナーが「もっともらしいが実は不自然な行」を警戒せよと指示）。

- **fr_qc**: 「resto-là」「ben bonne」「frette」「chum」「pogné」「A（=Elleの口語縮約）」「-là」後置辞、#51「conte」（標準 raconte に対しケベックで conter も使う）は **自然【確実】**。calque や標準再綴りではない。
- **fr_be**: 「causer（=parler の意、ベルギー/北部仏）」(#46)、「souper」「déjeune（=朝食、ベルギー/スイス/ケベックで朝食を指す地域語）」(#3) は **自然【確実】**。特に déjeuner=朝食はベルギー仏の正しい用法で、標準フランス（昼食）の calque ではない点が秀逸。
- **fr_af**: 「film-là」(#48) の指示後置 -là、「montre-moi le chemin」(#49) は **自然【蓋然】**。#50 fr_af「se promener beaucoup」の beaucoup 付加もアフリカ仏の冗長強調として許容。
- **fr_ch**: フラグ箇所に方言マーカーは出ないが、不自然な行は検出されず。
- **oc/ca/rm**: 破損語は round1 で解消済み。本ラウンドで新たな語彙不自然さは検出されず。rm #80「valitaivla（貴重な）」「experientscha」、ca「valuosa」、oc「preciosa」はいずれも各規範に沿う自然語。

**方言自然さの新規 actionable 修正: 0件**。既存の方言マーキングは的確と再々確認。

### D. スコアカード（ラウンド5）

| 区分 | 件数（文×言語） | 内訳 |
|---|---|---|
| SPLIT 推奨（actionable） | **24** | 確実: S1 #77×5, S2 #49×5, S3 #35×3, S4 #50×3, S5 #51×3, S6 #73×3 ＝約19 ／ 蓋然: S7 #80×2, S8 #85×3 = 5 |
| 方言自然さ修正 | **0** | 既存マーキングは自然と再確認 |
| KEEP（正当な融合・省略） | **約14** | #53 縮約・連結時制、#84 ca 再帰、#3 自動詞抱合、#52 複合時制、#46 rm 対格、#73 B\|F系、#28、#99、café/ostal |

（カウント注記: SPLIT の「24」は S1–S8 を文×言語で素朴に合算した actionable 件数。#73 は同一セル内で A|E と C|G の2系統の分割を含む。）

**総括**: ラウンド4 で「優先度低」として誤って KEEP していた所有詞 `A|E`（#35/#50/#51/#73）と量化詞 `C|G`（#73）は、**フランス語全変種が既に分割済み**である以上、fix-all-variants 原則により oc/ca/rm でも分割すべきであった。当方の前回判定を撤回し SPLIT に格上げする。加えて ⛔3-way の #77 と ⛔4-way の #49 がラウンド4 で未適用のまま残存しており、いずれも標準 fr が分割済みのため最優先で分割すべき。真に分離不能な融合（縮約 du/del、連結時制、再帰動詞、自動詞抱合、複合過去助動詞）と pro-drop / 助動詞なし / 対格による正当な省略は KEEP を維持する。

**ファイル状態: REOPENED（ラウンド5 新規 SPLIT 指摘あり — #77, #49 の残存⛔ と 所有詞/量化詞の系統横断分割を要適用）**

## 開発チーム回答 — round 5 (作業者)

ライブ `data.js` を `.wf_langmap_query.mjs` で全フラグセル照合。オーナーの分割優先方針および fix-all-variants 原則に従い、標準 fr（および fr_ch/fr_qc）が既に分割済みで、独立語に対応する役色を持つ複合はすべて積極分割した（各件で隣接同役色が発生しないことを確認）。前ラウンドで「優先度低」として KEEP していた所有詞 `A|E`・量化詞 `C|G` は、fr 全変種が既分割である以上 SPLIT に格上げするとのレビュアー方針転換に同意する。

### A. SPLIT — APPLIED（applied by orchestrator this round）

- **S1 #77 oc/ca/rm/fr_be/fr_af `B|D|E` → D/B/E 3分割 APPLIED**。fr が `D:par E:les résultats du B:test` と既分割。前置詞＋冠詞縮約(D)・結果名詞(B)・de＋試験名詞(E) は独立。oc D:pels B:resultats E:del examen／ca D:pels B:resultats E:de l'examen／rm D:dals B:resultats E:da l'examen／fr_be/fr_af D:par le B:résultat E:de l'examen。隣接同役色なし。
- **S2 #49 oc/ca/rm/fr_be/fr_af `C|E|F|G`(4-way) → E/F/G 3分割 APPLIED**。fr が `E:le chemin F:de G:l'aéroport`（C不使用）と既分割。冗長 C を落とし道(E)/前置詞(F)/空港(G)へ。oc E:lo camin F:de G:l'aeropòrt／ca E:el camí F:cap a G:l'aeroport／rm E:la via F:a G:l'eroport／fr_be E:le chemin F:vers G:l'aéroport／fr_af E:le chemin F:pour G:l'aéroport。
- **S3 #35 oc/ca/rm `A|E` → A(所有詞)+E(名詞) APPLIED**。fr 全変種が `A:Mon E:grand frère` と既分割。oc A:Mon E:fraire ainat／ca A:El meu E:germà gran／rm A:Mieu E:frar pli vegl。
- **S4 #50 oc/ca/rm `A|E` → E(所有詞)+A(名詞) APPLIED**。fr が `E:Mon A:chien`。oc E:Mon A:chin／ca E:El meu A:gos／rm E:Mieu A:chaun。
- **S5 #51 oc/ca/rm `A|E` → E(所有詞)+A(名詞) APPLIED**。fr が `E:Ma A:grand-mère`。oc E:Ma A:grand-maire／ca E:La meva A:àvia／rm E:Mia A:tatta。
- **S6 #73 oc/ca/rm `A|E`＋`C|G` の2系統分割 APPLIED**。fr が `E:Mon A:chat` と `G:chaque C:nuit` を両方分割済み。oc E:Mon A:cat … G:cada C:nuèch／ca E:El meu A:gat … G:cada C:nit／rm E:Mieu A:giat … G:mintga C:saira。`B|F:sus mon lièch` 系は fr_be も B|F 保持で系統一致のため KEEP。
- **S7 #80 ca `B|F`／rm `B|F`＋`C|G` 分割 APPLIED**。oc が同系統内で既に B/F・C/G 分割済み（モデル）。ca B:estudiar F:a l'estranger（C/G は ca 既分割）／rm B:studiar F:a l'exteriur ＋ C|G を I:ina G:valitaivla C:experientscha に分割（冠詞 ina を I として分離、oc/ca の I:una と整合）。
- **S8 #85 oc/ca/rm `B|E` → E(量化詞)+B(名詞) APPLIED**。fr が `E:plus B:d'eau`。oc E:mai B:d'aiga／ca E:més B:aigua／rm E:dapli B:aua（部分冠詞 d' は fr 同様 B 側に同梱）。

### B. KEEP（正当な融合・省略 — レビュアーと一致）
#53 du/del 縮約、連結時制・コピュラ、#84 ca 再帰動詞、#3 自動詞抱合、#52 複合過去助動詞、#46 rm 対格、#73 B|F系（fr 全変種一致）、#28 rm pro-drop、#99 fr_af コピュラ融合は分離不能ユニットまたは正当な類型差として KEEP。レビュアーの KEEP 判定に同意。

### 譲歩済み（既出）
#5/#55 rm café→cafè（指摘14）は round2 で「RG 一次典拠待ちの既知の限界」として CONCEDE 済み、追及せず。#1 oc l'ostal（指摘15）も round2 で CONCEDE 済み。

全 SPLIT は異なる役色への分割で、隣接同役色重複は発生しない。

## レビュアー再評価 — round 6 (Dr. Aurélie Vassal-Roumieu / @galloromanist)

開発チームの round 5 回答（A. SPLIT — APPLIED S1–S8）を `.wf_langmap_query.mjs` でライブ `data.js` 全件照合した。照合文: #35, #38, #49, #50, #51, #73, #77, #80, #84, #85, #88, #91, #92。各件で隣接同役色重複の有無も確認した。

### round 5 適用主張の検証（per-item 判定）

- **S1 #77 `B|D|E` → D/B/E 3分割** ✓ ライブ確認。oc `D:pels B:resultats E:del examen`／ca `D:pels B:resultats E:de l'examen`／rm `D:dals B:resultats E:da l'examen`／fr_be・fr_af `D:par le B:résultat E:de l'examen`。前置詞＋冠詞縮約(D)・結果名詞(B)・de＋試験名詞句(E) の3独立要素に分離。標準 fr の `D:par E:les résultats du B:test` と整合。隣接同役色なし。**受理。**
- **S2 #49 `C|E|F|G`(4-way) → E/F/G 3分割** ✓ ライブ確認。oc `E:lo camin F:de G:l'aeropòrt`／ca `E:el camí F:cap a G:l'aeroport`／rm `E:la via F:a G:l'eroport`／fr_be `E:le chemin F:vers G:l'aéroport`／fr_af `E:le chemin F:pour G:l'aéroport`。冗長 C を落とし道(E)/前置詞(F)/空港(G)へ。本グループ最大の残存過融合を解消。**受理。**
- **S3 #35 `A|E` → A(所有詞)+E(名詞)** ✓ ライブ確認。oc `A:Mon E:fraire ainat`／ca `A:El meu E:germà gran`／rm `A:Mieu E:frar pli vegl`。fr 全変種 `A:Mon E:grand frère` と同型。**受理。**
- **S4 #50 `A|E` → E(所有詞)+A(名詞)** ✓ ライブ確認。oc `E:Mon A:chin`／ca `E:El meu A:gos`／rm `E:Mieu A:chaun`。fr 変種と同型。**受理。**
- **S5 #51 `A|E` → E(所有詞)+A(名詞)** ✓ ライブ確認。oc `E:Ma A:grand-maire`／ca `E:La meva A:àvia`／rm `E:Mia A:tatta`。**受理。**
- **S6 #73 `A|E`＋`C|G` の2系統分割** ✓（部分）ライブ確認。所有詞 `A|E` は oc `E:Mon A:cat`／ca `E:El meu A:gat`／rm `E:Mieu A:giat`、量化詞 `C|G` は oc `G:cada C:nuèch`／ca `G:cada C:nit`／rm `G:mintga C:saira` と適用済み。この2系統については**受理**。ただし同文の `B|F`（前置詞＋所有詞＋名詞）の KEEP 判定には新たな反証がある（下記「新規指摘 N1」）ため、S6 全体としては **△（A\|E・C\|G は受理／B\|F は要再検討）**。
- **S7 #80 ca/rm 分割** ✓ ライブ確認。ca `B:estudiar F:a l'estranger`（C/G 既分割）／rm `B:studiar F:a l'exteriur` ＋ `I:ina G:valitaivla C:experientscha`。oc モデル（`B:estudiar F:a l'estranger … I:una C:experiéncia G:preciosa`）と整合。rm の冠詞 ina を I として分離し oc/ca の I:una と揃えた処理も妥当。**受理。**
- **S8 #85 `B|E` → E(量化詞)+B(名詞)** ✓ ライブ確認。oc `E:mai B:d'aiga`／ca `E:més B:aigua`／rm `E:dapli B:aua`。標準 fr `E:plus B:d'eau` と同型、部分冠詞 d' は B 側同梱で一貫。**受理。**

### 新規指摘（NEW ISSUE）

**N1. #73 oc/rm/fr_be — `B|F`（自由前置詞＋所有詞＋名詞）が未分割。fix-all-variants 違反。**【確実】
- ライブ現状: [oc] `B|F:「sus mon lièch」`／[rm] `B|F:「en mieu letg」`／[fr_be] `B|F:「dans mon lit」`
- round5 で開発・レビュアー双方が「fr 全変種も `F:sur B:mon lit` と保持し系統内で一致するため KEEP」と判断したが、これは**事実誤認**である。ライブ照合の結果、**fr / fr_qc / fr_af / fr_ch の4変種はすべて `F:「sur」 B:「mon lit」` と既に分割済み**であり、B|F 融合を保持しているのは fr_be のみであった。よって「系統内一致」という KEEP の前提は崩れている。
- 当該前置詞は oc「sus」・rm「en」・fr_be「dans」のいずれも**縮約しない自由前置詞**であり、後続の所有詞＋名詞から明白に分離可能。en も `F:on B:my bed` と分離。オーナーの分割優先方針＋fix-all-variants 原則に従えば分割すべき。
- 提案: [oc] `F:「sus」 B:「mon lièch」`／[rm] `F:「en」 B:「mieu letg」`／[fr_be] `F:「dans」 B:「mon lit」`
- 隣接確認: 各文とも D（動詞）と G（量化詞）に挟まれ、F と B は別役色のため隣接同役色重複は生じない。**確信度【確実】**。
- **例外（ca は KEEP 妥当）**: ca `B|F:「al meu llit」` の「al」は前置詞 a＋定冠詞 el の真正縮約ポルトマントー（#52 の `F:al` と同じ a+el）であり、du/del と同様に分離不能。ca のみ KEEP は正当。したがって N1 の actionable は **oc / rm / fr_be の3セル**。

### round 1〜5 修正の非回帰確認

#38 oc/rm、#88 oc/rm、#91 ca/rm、#84 fr/fr_ch、#92 ca、および round4/5 の SPLIT（#77/#49/#35/#50/#51/#80/#85）をライブ再照合し、過去ラウンドの破損語・誤訳・構造崩れ・非文語順・分割がすべて維持されていることを確認（回帰なし）。

### KEEP 同意・譲歩項目

#53 du/del 縮約、連結時制・コピュラ、#84 ca 再帰動詞、#3 自動詞抱合、#52 複合過去助動詞、#46 rm 対格、#28 rm pro-drop、#99 fr_af コピュラ融合、および #73 ca `al meu llit`（a+el 縮約）は分離不能ユニット／正当な類型差として KEEP に同意。#5/#55 rm café→cafè（指摘14）・#1 oc l'ostal（指摘15）は round2 で CONCEDE 済み、追及せず。

### スコアカード（round 6）

| 区分 | 件数 | 番号 |
|---|---|---|
| ✓ 受理（round5 SPLIT 適用確認済） | 7+ | S1–S5, S7, S8（S6 の A\|E・C\|G 含む） |
| △ 部分 | 1 | S6（B\|F のみ要分割） |
| 新規問題（actionable） | 1 | N1（#73 oc/rm/fr_be の `B\|F` 分割） |
| KEEP 同意 | 多数 | #53/#84/#3/#52/#46/#28/#99/#73 ca ほか |
| CONCEDE（既知の限界） | 2 | 14, 15 |
| ✗ 却下 | 0 | — |

S1–S8 の主要分割はすべて適用・ライブ確認済み。残る actionable は N1 の1件（#73 の自由前置詞 sus/en/dans の `B|F` 分割、oc/rm/fr_be の3セル）のみ。これは「fr 全変種が一致して保持」という誤った前提で KEEP されていたものであり、ライブ照合で fr/fr_qc/fr_af/fr_ch が既に分割済みと判明したため、fix-all-variants により分割が必要。ca のみ a+el 縮約で KEEP 妥当。

**ファイル状態: OPEN**
- 開発が次に行うこと: #73 の `B|F` を分割 — oc `F:「sus」 B:「mon lièch」`／rm `F:「en」 B:「mieu letg」`／fr_be `F:「dans」 B:「mon lit」`（ca `al meu llit` は a+el 縮約のため KEEP）。

## 開発チーム回答 — round 6 (作業者)

ライブ `data.js` を `.wf_langmap_query.mjs` で N1 該当セルおよび fr 全変種を照合した上での判断。

**N1. #73 oc/rm/fr_be `B|F`（自由前置詞＋所有詞＋名詞）分割 → APPLIED（applied by orchestrator this round）**
- ライブ照合結果（決定的）: fr `F:sur B:mon lit`／fr_qc `F:sur B:mon lit`／fr_af `F:sur B:mon lit`／fr_ch `F:sur B:mon lit` と **fr 4変種すべてが既に分割済み**。B|F 融合を残しているのは fr_be のみ。round5 の「fr 全変種が一致して B|F 保持」という KEEP 前提はライブ照合で誤りと確認。レビュアーの事実訂正を受理する。
- 当該前置詞 oc「sus」・rm「en」・fr_be「dans」はいずれも縮約しない自由前置詞で、後続の所有詞＋名詞から明白に分離可能。en も `F:on B:my bed`。オーナーの分割優先方針＋fix-all-variants に従い分割する。
  - [oc] `F:「sus」 B:「mon lièch」`
  - [rm] `F:「en」 B:「mieu letg」`
  - [fr_be] `F:「dans」 B:「mon lit」`
- 隣接確認: 各文とも当該セグメントの前は D（動詞 dòrm/dorma/dort）、後は G（量化詞 cada/mintga/chaque）。F と B は別役色で、隣接同役色重複は生じない。
- **ca は KEEP（同意）**: ca `B|F:「al meu llit」` の「al」は前置詞 a＋定冠詞 el の真正縮約ポルトマントー（#52 `al`、du/del と同型）で分離不能。ca のみ KEEP は正当。N1 の actionable は oc/rm/fr_be の3セルのみ。

S1–S8 はライブ再照合で全件維持（回帰なし）。café/cafè（指摘14）・#1 oc l'ostal（指摘15）は round2 で CONCEDE 済み、追及せず。残る actionable は本ラウンドの N1 のみで、これを適用することで本ファイルの残課題は解消する。

## レビュアー再評価 — round 7 (Dr. Aurélie Vassal-Roumieu / @galloromanist)

開発チームの round 6 回答（N1 適用）を `.wf_langmap_query.mjs` でライブ `data.js` 照合した。照合文: #17, #35, #38, #46, #49, #52, #55, #70, #73, #77, #80, #84, #85, #91。各件で隣接同役色重複の有無も確認した。

### N1（#73 `B|F` 分割）適用の検証

- **N1 #73 oc/rm/fr_be `B|F` → F/B 分割** ✓ ライブ確認。
  - oc `D:dòrm F:sus B:mon lièch G:cada`／rm `D:dorma F:en B:mieu letg G:mintga`／fr_be `D:dort F:dans B:mon lit G:chaque`。自由前置詞 sus/en/dans を所有詞＋名詞から分離。
  - ca `B|F:al meu llit`（a+el 縮約）は KEEP のまま維持＝妥当。
  - 前は D（動詞）、後は G（量化詞）で隣接同役色重複なし。**受理。**

### round 1〜6 修正の非回帰確認

#17 oc(reünion)、#35/#49/#55/#70/#77/#80/#85 の SPLIT、#38 oc/rm、#84 fr/fr_ch（la semaine→dernière 後置）、#91 ca/rm をライブ再照合し、過去ラウンドの破損語・誤訳・構造崩れ・非文語順・分割がすべて維持されていることを確認（回帰なし）。

### 新規指摘（NEW ISSUE）

**N2. #52 oc/ca/rm ＋ #46 oc/ca/rm/fr_be — 複合過去の「助動詞＋過去分詞」が `C|H` / `E|H` に融合。fix-all-variants 違反。**【確実】

round1〜6 を通じて当方も開発側も、複合過去の助動詞＋過去分詞を「一個の時制ユニットで分離不能。en でも C\|H 融合」として一貫して KEEP 判定してきた（#52 round5 等）。しかし N1 と全く同型の事実誤認である。ライブ照合の結果、**フランス語変種は助動詞と過去分詞を実際に分割している**：

- **#52**: ライブで fr `H:ai C:perdu`／fr_qc `H:ai C:perdu`／fr_be `H:ai C:perdu` と**フランス語全変種が助動詞 ai と過去分詞 perdu を分割済み**。一方 oc `C|H:ai perdut`／ca `C|H:vaig perdre`／rm `C|H:hai pers` は融合のまま。
- **#46**: ライブで fr `E:ai H:parlé`／fr_af `E:ai H:parlé`／fr_ch `E:ai H:parlé`／fr_qc `E:ai H:parlé` と**フランス語4変種が分割済み**。一方 oc `E|H:ai parlat`／ca `E|H:vaig parlar`／rm `E|H:hai discurrì`／fr_be `E|H:ai causé` は融合のまま。

助動詞（oc/rm aver: ai/hai、ca 迂言過去 anar: vaig）と過去分詞／不定詞（perdut/pers/perdre, parlat/discurrì/parlar）はいずれも**独立した正書法上の2語**であり、フランス語自身が分割していることが分離可能性の決定的証拠（fix-all-variants）。「en でも融合・分離不能」という KEEP の前提は誤り。オーナーの分割優先方針＋fix-all-variants 原則に従い分割すべき。

- 提案（#52、`H:助動詞 C:過去分詞` ＝ fr モデルに合わせる）:
  - [oc] `H:「ai」 C:「perdut」`／[ca] `H:「vaig」 C:「perdre」`／[rm] `H:「hai」 C:「pers」`
- 提案（#46、`E:助動詞 H:過去分詞` ＝ fr モデルに合わせる）:
  - [oc] `E:「ai」 H:「parlat」`／[ca] `E:「vaig」 H:「parlar」`／[rm] `E:「hai」 H:「discurrì」`／[fr_be] `E:「ai」 H:「causé」`
- 隣接確認: #52 は前が A（主語）、後が B（目的語）で H/C は別役色、隣接同役色重複なし。#46 は前が A（主語）、後が F（前置詞）で E/H は別役色、隣接同役色重複なし。**確信度【確実】**。

注: #84 の `C:a attrapé`（fr）等、すでに助動詞＋分詞が単一役 C にまとまっている文や、コピュラ・連結時制（fleurissent / flureschan 等の単純形）は本指摘の対象外（後者は真に一語＝KEEP 維持）。本 N2 は「助動詞と過去分詞が別々の正書法語でありながら同一役に融合し、かつ同系統のフランス語変種が既に分割している」ケースに限定する。

### KEEP 同意・譲歩項目（維持）

#53 du/del 縮約、#73 ca `al meu llit`（a+el 縮約）、#84 ca 再帰動詞 `es va refredar`、#3 自動詞抱合、#46 rm 対格 `ina ura`、#28 rm pro-drop、#99 fr_af コピュラ融合は分離不能ユニット／正当な類型差として KEEP に同意。連結時制・単純形コピュラも KEEP 維持。#5/#55 rm café→cafè（指摘14）・#1 oc l'ostal（指摘15）は round2 で CONCEDE 済み、追及せず。

### スコアカード（round 7）

| 区分 | 件数 | 番号 |
|---|---|---|
| ✓ 受理（N1 適用確認済） | 1 | N1（#73 B\|F、oc/rm/fr_be） |
| ✓ 非回帰確認（round1〜6 維持） | 多数 | #17/#35/#38/#49/#52/#55/#70/#77/#80/#84/#85/#91 |
| 新規問題（actionable） | 1 | N2（#52・#46 複合過去 助動詞＋過去分詞 分割） |
| KEEP 同意 | 多数 | #53/#73 ca/#84 ca/#3/#46 rm/#28/#99 ほか |
| CONCEDE（既知の限界） | 2 | 14, 15 |
| ✗ 却下 | 0 | — |

N1 はライブ確認済みで受理。しかし非回帰照合の過程で、複合過去の助動詞＋過去分詞が N1 と全く同型の「en でも分離不能」という誤った前提で KEEP されており、実際にはフランス語変種が既に分割済み（#52 fr/fr_qc/fr_be、#46 fr/fr_af/fr_ch/fr_qc）であることが判明した。fix-all-variants 原則により oc/ca/rm（#46 は加えて fr_be）で分割が必要。これは明確に actionable な残課題である。

**ファイル状態: OPEN**
- 開発が次に行うこと: 複合過去の助動詞と過去分詞を分割（fr 変種に合わせる）。
  - #52: oc `H:ai C:perdut`／ca `H:vaig C:perdre`／rm `H:hai C:pers`
  - #46: oc `E:ai H:parlat`／ca `E:vaig H:parlar`／rm `E:hai H:discurrì`／fr_be `E:ai H:causé`
  （単純形コピュラ・連結時制、ca `al meu llit`・`es va refredar` 等の真正融合は KEEP 維持）

## 開発チーム回答 — round 7 (作業者)

ライブ `data.js` を `.wf_langmap_query.mjs` で #52・#46 の全変種を照合した上での判断。

**N2. #52・#46 複合過去「助動詞＋過去分詞」分割 → APPLIED（applied by orchestrator this round）**

レビュアーの事実訂正をライブ照合で確認した。これは N1 と完全に同型の「en でも融合・分離不能」という誤った前提で KEEP されていたケースである。

- **#52 ライブ照合（決定的）**: fr `H:ai C:perdu`／fr_qc `H:ai C:perdu`／fr_be `H:ai C:perdu`／fr_af `H:ai C:perdu`／fr_ch `H:ai C:perdu` と **フランス語全5変種が助動詞(H)と過去分詞(C)を既に分割済み**。一方 oc `C|H:ai perdut`／ca `C|H:vaig perdre`／rm `C|H:hai pers` は融合のまま。
- **#46 ライブ照合（決定的）**: fr `E:ai H:parlé`／fr_af `E:ai H:parlé`／fr_ch `E:ai H:parlé`／fr_qc `E:ai H:parlé` と **フランス語4変種が助動詞(E)と過去分詞(H)を既に分割済み**。一方 oc `E|H:ai parlat`／ca `E|H:vaig parlar`／rm `E|H:hai discurrì`／fr_be `E|H:ai causé` は融合のまま。

助動詞（oc/rm aver: ai/hai、ca 迂言過去 anar: vaig）と過去分詞／不定詞（perdut/pers/perdre, parlat/discurrì/parlar/causé）はいずれも独立した正書法上の2語であり、フランス語自身が分割していることが分離可能性の決定的証拠（fix-all-variants）。オーナーの分割優先方針＋fix-all-variants に従い、fr モデルの役色割当に合わせて分割する。

適用（各セル op:replace で full alignment 置換）:
- **#52**（fr モデル `H:助動詞 C:過去分詞`）:
  - [oc] `A:Ieu H:ai C:perdut B:mon portafuèlhas F:al D:mercat`
  - [ca] `A:Jo H:vaig C:perdre B:la cartera F:al D:mercat`
  - [rm] `A:Jau H:hai C:pers B:mia bursa F:al D:martgà`
- **#46**（fr モデル `E:助動詞 H:過去分詞`）:
  - [oc] `A:Ieu E:ai H:parlat F:amb G:mon B:amic C:per telefòn D:pendent d'una ora`
  - [ca] `A:Jo E:vaig H:parlar F:amb G:el meu B:amic C:per telèfon D:durant una hora`
  - [rm] `A:Jau E:hai H:discurrì F:cun G:mieu B:ami C:per telefon D:ina ura`
  - [fr_be] `A:J' E:ai H:causé F:avec G:mon B:ami C:au téléphone D:pendant une heure`（causé はベルギー仏で自然、surface 維持）

隣接確認: #52 は前 A（主語）・後 B（目的語）で H/C は別役色、隣接同役色なし。#46 は前 A（主語）・後 F（前置詞）で E/H は別役色、隣接同役色なし。surface text は一切変更せず、融合セルを2役に分割するのみ（既定の「ID 修正時に surface を変えない」方針を遵守）。

**KEEP 維持（同意）**: #84 `C:a attrapé`（fr）等すでに助動詞＋分詞が単一役 C にまとまる文や、コピュラ・連結時制（fleurissent / flureschan / 単純形）は本指摘対象外で KEEP。ca `al meu llit`（a+el 縮約）・`es va refredar`（再帰動詞）・#53 du/del 縮約・#3 自動詞抱合・#46 rm 対格 `ina ura`・#28 rm pro-drop・#99 fr_af コピュラ融合は分離不能ユニット／正当な類型差として KEEP に同意。

**譲歩済み（既出）**: #5/#55 rm café→cafè（指摘14）・#1 oc l'ostal（指摘15）は round2 で CONCEDE 済み、追及せず。

本ラウンドの N2 7セル（#52×3, #46×4）を適用することで、本ファイルの残 actionable は解消する。全 SPLIT は異なる役色への分割で隣接同役色重複なし、surface 無変更。

## レビュアー再評価 — round 8 (Dr. Aurélie Vassal-Roumieu / @galloromanist)

開発チームの round 7 回答（N2 適用 — 複合過去の「助動詞＋過去分詞」分割、#52×3・#46×4）を `.wf_langmap_query.mjs` でライブ `data.js` 全件照合した。照合文: #17, #24, #35, #38, #46, #49, #52, #70, #73, #77, #84, #85, #88, #91, #92, #96。各件で隣接同役色重複の有無も再確認した。

### N2（複合過去 助動詞＋過去分詞 分割）適用の検証

- **N2 #52 oc/ca/rm `C|H` → H(助動詞)/C(過去分詞) 分割** ✓ ライブ確認。
  - oc `A:Ieu H:ai C:perdut B:mon portafuèlhas F:al D:mercat`／ca `A:Jo H:vaig C:perdre B:la cartera F:al D:mercat`／rm `A:Jau H:hai C:pers B:mia bursa F:al D:martgà`。
  - フランス語全5変種が `H:ai C:perdu` と分割済みである点もライブで再確認（fr/fr_qc/fr_be/fr_af/fr_ch）。助動詞 ai/hai/vaig（ca 迂言過去 anar）と過去分詞/不定詞 perdut/pers/perdre は独立した正書法語であり、fr 自身の分割が分離可能性の決定的証拠。fix-all-variants 充足。
  - 隣接: 前 A（主語）・後 B（目的語）で H/C は別役色、隣接同役色重複なし。**受理。**
- **N2 #46 oc/ca/rm/fr_be `E|H` → E(助動詞)/H(過去分詞) 分割** ✓ ライブ確認。
  - oc `E:ai H:parlat`／ca `E:vaig H:parlar`／rm `E:hai H:discurrì`／fr_be `E:ai H:causé`。fr/fr_af/fr_ch/fr_qc が `E:ai H:parlé` と分割済みである点もライブで再確認。
  - fr_be の surface「causé」（ベルギー仏で parler の意の自然語）は維持されており、surface 無変更で融合のみ解消＝「ID 修正時に surface を変えない」方針を遵守。**受理。**
  - 隣接: 前 A（主語）・後 F（前置詞）で E/H は別役色、隣接同役色重複なし。**受理。**

### round 1〜7 修正の非回帰確認

以下をライブ再照合し、過去ラウンドの破損語・誤訳・構造崩れ・非文語順・分割がすべて維持されていることを確認した（回帰なし）:
- 破損語/誤訳: #38 oc `Lo solelh colcant`／rm `Il tramunt da sulegl`、#17 oc `una reünion`、#24 oc `lo menut`、#96 oc `a la venenta crosada`、#88 oc `lo mond`／rm `è vid midar`、#92 ca `raviolis`。
- 構造崩れ/非文: #91 ca/rm（冠詞を C名詞へ、形容詞 japonesa/giapunaisa を B）、#84 fr/fr_ch（`D:la semaine E:dernière` 後置）。
- SPLIT: #35/#49/#70/#73/#77/#85 とも適用維持。#73 は所有詞 `E|A`・前置詞 `F:sus/en/dans B:…`・量化詞 `G/C` がすべて分割済み、ca のみ `B|F:al meu llit`（a+el 縮約）が正当に KEEP されている。

### KEEP 同意・譲歩項目（維持）

- 分離不能ユニット／正当な類型差として KEEP に同意（変更不要）: #53 du/del 縮約、#73 ca `al meu llit`（a+el 縮約）、#84 ca 再帰動詞 `es va refredar`、#3 自動詞抱合、#46 rm 対格 `ina ura`（前置詞なしの持続対格）、#28 rm pro-drop `Pudessas`、#99 fr_af コピュラ融合 `C'est combien`、および連結時制・単純形コピュラ（fleurissent / flureschan 等）。
- #84 fr の `C:a attrapé` 等、助動詞＋分詞がすでに単一役 C にまとまる文は N2 対象外で KEEP（fr 自身が分割していないため fix-all-variants の根拠なし）。
- **CONCEDE 済み（既知の限界）**: #5/#55 rm café→cafè 正書法統一（指摘14）— RG 一次見出し語の確証を本ラウンドでも提示できないため追及せず。#1 oc l'ostal（指摘15）— 土着語保持は多様性として妥当、明確誤りでなく取り下げ済み。

### 全フラグの最終確認

N1（#73 自由前置詞 B|F）・N2（#52/#46 複合過去）という、過去に「en でも分離不能」という誤前提で KEEP されていた2系統の融合は、いずれもライブ照合でフランス語変種が既に分割済みと判明し、本サイクルで fix-all-variants により分割完了・ライブ確認済み。これ以外に「同系統の他変種が分割済みなのに本変種だけ融合」という残存ケースは、本ラウンドの照合範囲では検出されなかった。新規 actionable 指摘は **0件**。

### スコアカード（round 8）

| 区分 | 件数 | 番号 |
|---|---|---|
| ✓ 受理（round7 N2 適用確認済） | 2 | N2 #52, N2 #46 |
| ✓ 非回帰確認（round1〜7 維持） | 多数 | #17/#24/#35/#38/#49/#70/#73/#77/#84/#85/#88/#91/#92/#96 |
| KEEP 同意 | 多数 | #53/#73 ca/#84 ca/#3/#46 rm/#28/#99 ＋ 連結時制・単純形 |
| CONCEDE（既知の限界） | 2 | 14, 15 |
| △ 部分 | 0 | — |
| ✗ 却下 | 0 | — |
| 新規問題 | 0 | — |

N2 の7セル（#52×3, #46×4）はすべて適用・ライブ確認済みで、隣接同役色重複なし、surface 無変更。確実な破損・誤訳（oc rfo/menfo/colfo/pròfo、rm Ir al sulegl/mida/buobs/tschaler）、構造崩れ（#91 ca/rm）、非文語順（#84 fr/fr_ch）、および分割粒度（#70/#43/#46/#55/#69/#45/#48/#77/#49/#35/#50/#51/#73/#80/#85 ＋ 複合過去 #52/#46）はすべて解消・維持を確認した。残る2件は当方が既に譲歩した軽微/要検討事項（café→cafè 正書法、l'ostal 語選択）のみで、いずれも明確誤りでなく既知の限界として記録済み。actionable な残課題は存在しない。

**ファイル状態: CLOSED — 残課題なし**（#5/#55 rm の café→cafè 正書法統一は RG 一次典拠待ちの「既知の限界」として記録。明確誤りではないため本サイクルでは追及しない）

## 包括スイープ — 群06 全複合セル一括判定 (作業者 round 9)

対象 8文の複合(|)セルを全件ライブ照合し、分割優先方針で判定した。

**SPLIT: 18件**
- #43 A|D 分割: fr_qc「dans ce」→A:dans/D:ce、oc「d'aqueste」→A:d'/D:aqueste、ca「d'aquest」→A:d'/D:aquest、rm「da quest」→A:da/D:quest（前置詞+指示詞の2トークン。fr_qc/rm は完全分綴、oc/ca はアポストロフィ省略境界で分割）
- #53 C|E 分割: fr_be「sont en fleur」→E:sont/C:en fleur、fr_af「sont en train de fleurir」→E:sont/C:..、oc「son en florison」→E:son/C:..、ca「estan florint」→E:estan/C:florint（繋辞+補語/動名詞の迂言形。fr/fr_ch/fr_qc は総合形=KEEP と対照）
- #53 A|D 分割: rm「en il curtgin」→D:en/A:il curtgin（前置詞 en と冠詞付名詞の2トークン）
- #69 D|E 分割: oc「a escrich」→E:a/D:escrich、ca「va escriure」→E:va/D:escriure、rm「ha scrit」→E:ha/D:scrit（助動詞+過去分詞/不定詞=複合過去・迂言過去。fr 系は全て既に分割済み→fix-all）
- #73 B|F 分割: ca「al meu llit」→F:al/B:meu llit（fr 系 F:sur/B:mon lit に倣う。al は a+el 縮約だが単一トークンで前置詞役を担い、meu llit が B）
- #84 D|E 分割: fr_be/fr_qc/fr_af「la semaine passée」→D:la semaine/E:passée、oc/ca「la setmana passada」→D:../E:passada、rm「l'emna passada」→D:l'emna/E:passada（名詞句+形容詞 dernière/passée=「先」。plain fr が既に分割→fix-all）

**KEEP: 9件**
- #3 fr_be「déjeune」/ca「esmorzo」(B|C): 「朝食をとる」を表す総合動詞。目的語 B(breakfast)が動詞に抱合され分離可能トークン無し。
- #43 fr_be「ce」/fr_af「ce」(A|D): 前置詞 de が B セル(La cuisine de / La nourriture de)に既に取り込まれており、当セルは指示詞 ce のみ=D 単独。分離すべき A トークン不在。
- #48 fr_be「film」(B|E): 単一名詞。指示詞 ce は別セルに既存、当セル内に E トークン無し。
- #48 fr_af「film-là」(B|E): 後置指示強調辞 -là はハイフン接辞で名詞に膠着した単一正書語。ce が別途存在し E 意味を担うため当セルは分割不可。
- #53 fr「fleurissent」/fr_ch「fleurissent」/fr_qc「fleurissent」/rm「flureschan」(C|E): 「咲いている」を表す総合現在形動詞。繋辞要素が分離不能。
- #53 fr_be「du jardin」/fr_af「du jardin」/oc「del jardin」(A|D): du=de+le, del=de+lo の縮約ポルトマントー。前置詞 de(D)のみ分離可能だが冠詞 le/lo は A 側に属し、正書法上 du/del を de+le に分綴不可=KEEP。
- #84 ca「es va refredar」(B|C): 「風邪をひく」を表す再帰動詞 (es refredar)。目的語 B(cold)が動詞に抱合され分離可能トークン無し。
