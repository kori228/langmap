# LangMap データレビュー #16 — Baltic, Celtic, Hellenic, Albanian, Armenian & Basque

## レビュアー自己紹介 (ペルソナ)

私は **Dr. Maren Eilísdóttir-Garapetyan**（handle: `@isogloss_atlantic`）、ヨーロッパ周縁・孤立言語を専門とする比較統語論者です。トリニティ・カレッジ・ダブリンでケルト語学の博士号を取得後、フンボルト財団フェローとしてベルリンでバルト諸語・アルメニア語の格標示を研究しました。依拠する主要資料は、アイルランド語: *Foclóir Gaeilge–Béarla* (Ó Dónaill) と *Gramadach na Gaeilge* (Christian Brothers)；ウェールズ語: *Geiriadur Prifysgol Cymru* と King の *Modern Welsh: A Comprehensive Grammar*；ブルトン語: Favereau の *Dictionnaire du breton contemporain* と Press の文法；ギリシャ語: Holton/Mackridge/Philippaki-Warburton；アルバニア語: Newmark の *Standard Albanian*；現代東アルメニア語: Dum-Tragut の *Armenian: Modern Eastern Armenian*；バスク語: Hualde/Ortiz de Urbina の *A Grammar of Basque*；リトアニア語・ラトビア語は Ambrazas の *Lithuanian Grammar* と Mathiassen を参照します。最も自信を持って判定できるのはケルト3言語（ga/cy/br）とアルメニア語・バスク語で、ギリシャ語・アルバニア語・バルト2語も母語話者校閲付きで査読経験があります。

## 検証範囲

全100文について自分の担当9言語（lt, lv, ga, cy, br, el, sq, hy, eu）を通読し、語順（role-letter 列）・語彙選択・正書法・格/一致を確認しました。特に疑わしいセル（#1, #4, #5, #12, #16, #26, #36, #84, #91, #97 ほか）は `.wf_langmap_query.mjs` でライブデータと突き合わせて現値を確認しています。ブルトン語とアルメニア語に最も多くの誤りが集中していました。バルト2語・ギリシャ語・アルバニア語・ウェールズ語は概ね良好です。

## 指摘事項 (Issues found)

### 1. #4 / #36 / #97 [br] — 「駅」の語が実在しない綴り「savañ」
- **Current:** #4 `C:「Pelec'h」 D:「emañ」 A:「ar savañ」 B:「gorsav」` ／ #36 `… C:「er savañ」` ／ #97 `… C:「ar savañ」`
- **Problem:** ブルトン語で「駅」は **gar**（ti-gar）であり、「savañ」という語は存在しない。おそらく英語 station の誤入力。さらに #4 では同じ「駅」を表すのに `A:「ar savañ」`（誤語）と `B:「gorsav」`（gorsav = 別語「停留所/駅」）が二重に現れ、role-letter A と B が同一概念を分割していて整合しない。語幹も lenition していない（ar の後は gar→ar c'har にならない誤り）。
- **Proposed fix:** いずれも実在語 **gar** に統一。#4: `C:「Pelec'h」 D:「emañ」 A:「ar gar」 B:「dostañ」`（最寄り=A形容詞 dostañ、駅=B gar に役割を割り直す）。最小修正としては #4/#36/#97 の `savañ` を `gar`（文脈で `er gar`／`ar gar`）に置換。 【確実】

### 2. #1 [br] — 「スーツ」を「ul lostenn」(スカート/裾) と誤訳
- **Current:** `A:「Me」 B:「garfe」 C:「klask」 D:「ul lostenn」 E:「a」 G:「weliz」 …`
- **Problem:** *lostenn* は「スカート、裾、尾」であり「スーツ」ではない。スーツは **ur gwiskamant**（または gwiskad）。また `B:「garfe」` は条件法だが主語接語と動詞配置として "Me a garfe" の関係詞構文要素 `a` が脱落気味（他文 #98 では "Me garfe" 表記）。
- **Proposed fix:** `D:「ul lostenn」` → `D:「ur gwiskamant」`。 【確実】（語彙）／配置は 【要検討】

### 3. #5 [br] — 語順・コピュラ欠落で非文
- **Current:** `D:「Mat」 C:「kenañ」 A:「ar」 B:「kafe-mañ」`
- **Problem:** 「このコーヒーはとても美味しい」を表すには述語 *mat*（美味しい）が前置されてもコピュラ *eo* が必要で、しかも強調語 *-kenañ* は形容詞に接尾辞として付く（mat-kenañ）。現状は "Mat kenañ ar kafe-mañ" で eo がなく、主語 `A/B` が文末に放置され非文。他のコピュラ文（#33 "Oa…", #43 "Mat eo…"）と不整合。
- **Proposed fix:** `D:「Mat-kenañ eo」 A:「ar」 B:「kafe-mañ」`（C=kenañ を D に統合、または `D:「Mat」 C:「kenañ」 +「eo」`）。最小修正は eo を補い `B:D:「Mat-kenañ eo」 A:「ar」 B:「kafe-mañ」`。 【蓋然】

### 4. #16 [hy] — 「Պանի」はアルメニア語として無意味
- **Current:** `A:「Պանի ժամին」 D:「է」 B:「ֆիլմը」 C:「սկսվում」`
- **Problem:** 「何時に」は東アルメニア語で **Ժամը քանիսի՞ն**（または քանի՞սին）。「Պանի」は語彙として存在せず、おそらく քանի の誤字（Ք→Պ）。意味不明な綴り。
- **Proposed fix:** `A:「Քանիսին」 D:「է」 B:「ֆիլմը」 C:「սկսվում」`（より自然には A:「Ժամը քանիսին」）。 【確実】

### 5. #1 [hy] — 「試着する」を非語「փորարկել」と表記
- **Current:** `… C:「փորարկել」 D:「կոստում」 E:「որ」 …`
- **Problem:** 「試着する」は東アルメニア語で **փորձել**（試す）または չափել/հագնել փորձել。「փորարկել」は辞書にない綴り（փորձ- の語幹崩れ）。
- **Proposed fix:** `C:「փորձել」`。 【確実】

### 6. #84 [hy] — 「風邪をひいた」の時制構成が誤り
- **Current:** `A:「Նա」 D|E:「անցյալ շաբաթ」 B:「մրսել」 C:「էր」`
- **Problem:** *մրսել էր* は過去完了の作り方として不完全で、過去分詞は **մրսել էր**（մրսել = 不定詞）ではなく完了は "մրսել է / մրսեց"。「先週風邪をひいた」は単純過去 **մրսեց** が自然。lt(persišaldė)/lv(saaukstējās) も単純過去で並ぶ。現状は不定詞+էր で非文的。
- **Proposed fix:** `B|C:「մրսեց」`（B と C を統合し単純過去動詞1語に）。 【蓋然】

### 7. #91 [hy] — 「桜」を「Ծիրանի」(アンズ) と誤訳
- **Current:** `A:「Ծիրանի ծաղկունքի դիտումը」 …`
- **Problem:** *ծիրան* は「アンズ（apricot）」。桜は **բալ／կեռաս**（バルは sour cherry, ケラスは sweet cherry）。#12 では同じ「桜」を `բալենի`（cherry tree）と訳しており、#91 と#12 で同一概念が ծիրան/բալ に割れて不整合。日本の「花見」は桜であり apricot は誤り。
- **Proposed fix:** `A:「Բալի ծաղկման դիտումը」`（#12 と整合させ բալ 系に統一）。 【確実】

### 8. #12 [ga] — 「na bláthanna silíní」のスペース欠落（単語連結）
- **Current:** `… C:「na bláthannasilíní」 …`
- **Problem:** *bláthanna*（花・複数）と *silíní*（さくらんぼ・属格）の間の空白が脱落し "bláthannasilíní" という存在しない1語になっている。#91 ga にも同じ `bhláthannasilíní` が出現。
- **Proposed fix:** `C:「na bláthanna silíní」`（#91 も `bhláthanna silíní`）。 【確実】

### 9. #26 [el] — セグメント E に先頭スペースが混入
- **Current:** `A:「Τα παιδιά」 C:「παίζουν」 B:「στο」 E:「 πάρκο」`
- **Problem:** `E:「 πάρκο」` の冒頭に半角スペースが入っており、表示で不自然な字下げになる。データ衛生上の不備（ライブデータでも cat -A で先頭スペースを確認）。
- **Proposed fix:** `E:「πάρκο」`。 【確実】

### 10. #57 [br] — 数詞一致と副詞選択
- **Current:** `D:「Komz a ra」 A:「hi」 B:「teir yezh」 C:「a-walc'h」`
- **Problem:** (1) "3つの言語を流暢に" の「流暢に」を *a-walc'h*（「十分に、かなり」=enough/rather）と訳しており「流暢に」の意味にならない。正しくは **ampar / gant fluañs / naturel**、口語では "ampar". (2) teir yezh は女性名詞 yezh に女性形数詞 teir で正しい（これは○）。
- **Proposed fix:** `C:「ampar」`（または "gant aezamant"）。 【蓋然】

### 11. #31 [br] — 「来週の月曜日」の語順とコピュラ位置
- **Current:** `C:「D'al lun a zeu」 A:「an arnodenn」 B:「a vo」`
- **Problem:** 文頭に時の副詞句 *D'al lun a zeu*（来週月曜に）を前置し、述語 *a vo*（〜になる）を末尾に置く構成は、主語 *an arnodenn*（試験）と未来コピュラの語順として不自然。自然語順は "An arnodenn a vo d'al lun a zeu"（主語+a vo+時）。役割列が C-A-B となり主語が動詞より後で、強調倒置でない限り不自然。
- **Proposed fix:** `A:「An arnodenn」 B:「a vo」 C:「d'al lun a zeu」`。 【要検討】

### 12. #88 [sq] / [hy] — 略語の妥当性（軽微）
- **Current:** sq `A:「IA」` ／ hy `A:「ԱՀ-ն」`
- **Problem:** sq の「AI」はアルバニア語で *IA* (Inteligjenca Artificiale) で正しいが、口語・報道では英語 *AI* も頻用。hy `ԱՀ-ն`（Արհեստական հ—）は略語として一般的でなく、通常は **ԱԲ**（Արհեստական բանականություն）または綴り出し。これは表記揺れの範囲だが、他言語が綴り出し（lv: Mākslīgais intelekts, cy: deallusrwydd artiffisial）であることと不統一。
- **Proposed fix:** hy は `A:「Արհեստական բանականությունը」` への展開を推奨。 【要検討】

### 13. #5 [eu] — 限定詞配置（軽微確認）
- **Current:** `B:「Kafe」 A:「hau」 C:「oso」 D:「goxoa da」`
- **Problem:** バスク語で "この" *hau* は名詞句末に来るため "Kafe hau" は正しい（B-A 順）。ただし #18, #87, #99 でも同型 B:名詞 A:hau が一貫しており、本件は問題なし。整合性確認として記録（修正不要）。 【確実】（=正しい）

### 全体所見
バルト2語（lt/lv）、ウェールズ語（cy）、ギリシャ語（el）、アルバニア語（sq）、バスク語（eu）のデータは語順・格標示ともおおむね正確で、特筆すべき誤りは少数（el #26 のスペース等）。誤りはブルトン語の語彙誤訳・コピュラ欠落とアルメニア語の非語/誤訳に集中している。上記のうち #1(br/hy), #4/#36/#97(br), #16(hy), #91(hy), #12(ga), #26(el) は綴り・語彙レベルで客観的に誤りであり優先修正を推奨する。

## 開発チーム回答 — round 1 (作業者)

ライブ `data.js` を `.wf_langmap_query.mjs` で逐一照合した上での判断。

1. **#4/#36/#97 [br] 「savañ」 → APPLIED**。「savañ」は実在語でなく英 station の疑似綴り。
   - #4: 役割スキームは A=「the nearest」, B=「station」（en/cy 参照）。ライブは A:「ar savañ」(冠詞+破損station語) B:「gorsav」 で、A に駅語・B に別の駅語が入り役割が崩れていた。cy モデル(A:agosaf, B:orsaf)に倣い **A:「an tostañ」 B:「ti-gar」**（A=最寄り, B=駅）へ再構成。reviewer 提案の「ar gar / dostañ」は A=station,B=nearest と役割が逆になるため採らず、役割整合形に修正。
   - #36: C:「er savañ」→ C:「er gar」（語のみ置換、役割保持）。
   - #97: C:「ar savañ」→ C:「er gar」（駅は通常 lenition せず ti-gar/gar、文脈の前置詞は er）。最小修正で破損語を実在語へ。
2. **#1 [br] D「ul lostenn」 → APPLIED**（D:「ur gwiskamant」）。lostenn=スカート/裾 で「スーツ」でない。配置(garfe/a 脱落)は reviewer も【要検討】とし、語順変更は保留（語彙のみ修正）。
3. **#5 [br] コピュラ欠落 → HELD（部分同意・保留）**。ライブ: D:「Mat」 C:「kenañ」 A:「ar」 B:「kafe-mañ」。eo(コピュラ)欠落の指摘は理に適うが、reviewer 自身【蓋然】で、提案が複数案に割れ(D統合 vs eo補い)確定形がない。eo を新規セグメントとして挿入するとどの役割letterに割り当てるか(述語=C/D)が曖昧で、誤った再分割は避けたい。確定した単一の修正形（各セグメントの role-letter 込み）を提示いただければ次ラウンドで適用。
4. **#16 [hy] A「Պանի ժամին」 → APPLIED**（A:「Քանիսին」）。「Պանի」は語彙として存在せず քանի の誤字(Ք→Պ)。最小修正で疑問詞へ。
5. **#1 [hy] C「փորարկել」 → APPLIED**（C:「փորձել」）。「փորարկել」は辞書になく փորձ- 語幹崩れ。
6. **#84 [hy] 時制 B「մրսել」C「էր」 → APPLIED**（B|C:「մրսեց」 に統合・単純過去）。lt(persišaldė)/lv(saaukstējās) も単純過去で並ぶ。不定詞+էր は非文的。B と C を1語動詞へ統合（隣接同color回避のため B|C 複合ラベル）。
7. **#91 [hy] A「Ծիրանի」 → APPLIED**（A:「Բալի ծաղկման դիտումը」）。ծիրան=アンズ。#12 で同概念を բալենի と訳しており、桜は բալ系へ統一。
8. **#12 [ga] C「na bláthannasilíní」 → APPLIED**（C:「na bláthanna silíní」）。空白脱落の連結語。#91 ga も同様に **C:「bhláthanna silíní」**（lenition形を保持しつつ空白挿入）。
9. **#26 [el] E「 πάρκο」先頭スペース → APPLIED**（E:「πάρκο」）。cat -A 相当で先頭 U+0020 を確認。データ衛生修正。
10. **#57 [br] C「a-walc'h」 → APPLIED**（C:「ampar」）。a-walc'h=十分に/かなり で「流暢に」でない。reviewer 推奨の ampar へ（teir yezh の女性形一致は正しく維持）。
11. **#31 [br] 語順 → HELD**。reviewer も【要検討】。ライブ C-A-B(時副詞句前置→主語→未来コピュラ)。文頭副詞句前置はブルトン語で頻出かつ容認され、各言語配列は「その言語が書く順」を表すという本プロジェクトの方針上、強調的前置を非文とは断じられない。語順の自然さは話者校閲の典拠が要るため保留。
12. **#88 [sq]/[hy] 略語 → HELD**。reviewer も【要検討】。sq「IA」は reviewer 自身が「正しい」と認定。hy「ԱՀ-ն」の展開は表記揺れの範囲で、他文の略語運用との一貫性を崩す恐れもあり、確実な誤りでないため変更しない。
13. **#5 [eu] → 確認のみ（修正不要）**。reviewer も「問題なし」。B:Kafe A:hau の語末指示詞配置は #18/#87/#99 と一貫。変更なし。

## レビュアー再評価 — round 2 (Dr. Maren Eilísdóttir-Garapetyan / `@isogloss_atlantic`)

ライブ `data.js` を `.wf_langmap_query.mjs` で全件再照合した。以下、開発チームの round 1 対応を項目ごとに裁定する。

### 各項目の裁定

1. **#4/#36/#97 [br] 「savañ」 → ✓ 受理（私の役割案は撤回・CONCEDE）**
   - ライブ確認: #4 `C:「Pelec'h」 D:「emañ」 A:「an tostañ」 B:「ti-gar」`／#36 `… C:「er gar」`／#97 `… C:「er gar」`。破損語 savañ は全箇所で実在語に置換済み。
   - 役割割当について: en 参照は `A:「the nearest」 B:「station」`、cy 参照は `A:「agosaf」(=nearest) B:「orsaf」(=station)`。開発側の `A:tostañ(最寄り)/B:ti-gar(駅)` はこの A=nearest, B=station スキームに正しく一致する。私の round 1 提案（A=gar/B=dostañ）は A/B を逆にしており、参照言語の役割整合を崩すものだった。**開発側の反論は妥当。私の役割案を撤回する（CONCEDE）。**
   - 軽微残件（非ブロッキング）: #97「スーパーは駅の**後ろ**にある」では `a-dreñv` の後は所有的に `ar gar`（後ろ＝of the station）がより標準で、`er gar`（=at/in the station, #36 の「駅に」と同じ前置詞）は意味的にやや弱い。ただし破損語修正という核心は達成されており、これは前置詞選択の微差なので won't-fix 許容（話者校閲が要る範囲）。

2. **#1 [br] D「ul lostenn」→「ur gwiskamant」 → ✓ 受理**
   - ライブ確認: `D:「ur gwiskamant」`。lostenn(スカート)→gwiskamant(衣服/スーツ) の語彙修正は適切。配置(garfe/a)は私自身【要検討】とした通り保留で妥当。

3. **#5 [br] コピュラ eo 欠落 → △ 部分／OPEN（確定単一形を提示）**
   - ライブ: `D:「Mat」 C:「kenañ」 A:「ar」 B:「kafe-mañ」` … 依然 eo なし。
   - 開発側は「複数案に割れ確定形がない」として保留したが、これは正当な保留だった（私が D統合案と eo補い案を併記したため）。今回**単一の確定形**を提示する: 参照言語（en `D:is C:very D:delicious`、br #43 `C:「Mat eo」`）に倣い、コピュラを述語役 D として C(kenañ=very) の後に挿入する。
   - **確定修正形:** `D:「Mat」 C:「kenañ」 D:「eo」 A:「ar」 B:「kafe-mañ」`
     - role-letter は D-C-D-A-B となり**隣接同color重複は発生しない**（D と D は C を挟む）。eo は述語＝D で en の copula 扱いと一致。kenañ(C=very) は分離保持。
   - これは客観的な非文（コピュラ欠落）の修正であり actionable。次ラウンドで適用を求める。

4. **#16 [hy] 「Պանի」→「Քանիսին」 → ✓ 受理**
   - ライブ確認: `A:「Քանիսին」 D:「է」 B:「ֆիլմը」 C:「սկսվում」`。非語 Պանի が疑問詞 Քանիսին に修正済み。妥当。

5. **#1 [hy] 「փորարկել」→「փորձել」 → ✓ 受理**
   - ライブ確認: `C:「փորձել」`。辞書になかった綴り崩れを正規語 փորձել に修正済み。

6. **#84 [hy] 時制 → ✓ 受理（特筆して良い対応）**
   - ライブ確認: `A:「Նա」 D|E:「անցյալ շաբաթ」 B|C:「մրսեց」`。不定詞+էր の非文構成を単純過去 մրսեց 1語へ統合。
   - lt `B|C:「persišaldė」`／lv `B|C:「saaukstējās」`／el `B|C:「κρύωσε」` と完全に同じ B|C 複合ラベル＋単純過去で並び、family 横断の整合も取れている。模範的。

7. **#91 [hy] 「Ծիրանի」→「Բալի ծաղկման դիտումը」 → ✓ 受理**
   - ライブ確認: #91 `A:「Բալի ծաղկման դիտումը」`。#12 hy は `C:「բալենի ծաղիկները」`。両文とも բալ系（cherry）で統一され、ծիրան(apricot)の誤訳と #12/#91 の概念割れが解消。

8. **#12 / #91 [ga] スペース欠落 → ✓ 受理**
   - ライブ確認（バイト照合）: #12 `"na bláthanna silíní"`／#91 `"féachaint ar bhláthanna silíní"`。両箇所とも空白挿入済み、#91 は lenition 形 bhláthanna を保持。完璧。

9. **#26 [el] 先頭スペース → ✓ 受理**
   - ライブ確認（grep バイト照合）: `"πάρκο"`（先頭 U+0020 除去済み）。データ衛生修正完了。

10. **#57 [br] 「a-walc'h」→「ampar」 → ✓ 受理**
    - ライブ確認: `D:「Komz a ra」 A:「hi」 B:「teir yezh」 C:「ampar」`。「十分に」→「流暢に(ampar)」へ。teir yezh の女性形一致も維持。妥当。

11. **#31 [br] 語順 → ✓ 受理（CONCEDE）**
    - 私自身【要検討】とした項目。各言語配列は「その言語が書く順」を表すという本プロジェクト方針上、ブルトン語の文頭時副詞句前置（C-A-B）は容認される構文であり、非文と断ずる典拠を私は持たない。**開発側の保留判断は妥当。撤回する（CONCEDE）。**

12. **#88 [sq]/[hy] 略語 → ✓ 受理（CONCEDE）**
    - sq「IA」は私自身が「正しい」と認定済み。hy「ԱՀ-ն」の展開は表記揺れの範囲であり、確実な誤りではない。外部典拠なく一貫性を崩す変更は求めない。**開発側の won't-fix は妥当。撤回する（CONCEDE）。**

13. **#5 [eu] → ✓（元々修正不要）**
    - 確認のみ。変更なし。

### 新規指摘
- なし（再照合中に新たな客観的誤りは発見されなかった）。

### スコアカード
- 受理 ✓: 11 件（#4/#36/#97 br, #1 br, #16 hy, #1 hy, #84 hy, #91 hy, #12/#91 ga, #26 el, #57 br, #31 br, #88, #5 eu）
- 部分 △ / 要対応: 1 件（**#5 br コピュラ eo 欠落** — 確定単一形を上記 3 に提示済み）
- 却下 ✗: 0 件
- 私の撤回（CONCEDE）: 3 件（#4 の役割割当案、#31 語順、#88 略語）
- 新規 actionable: 0 件
- 検証で claimed-but-missing だった修正: 0 件（全 APPLIED 主張はライブで確認できた）

唯一残るのは #5 [br] のコピュラ欠落（客観的非文）で、今回 role-letter 込みの確定形を提示した。これは明確に actionable な未修正項目のため、本ファイルは OPEN とする。

**ファイル状態: OPEN**
次に開発が行うこと: #5 [br] を `D:「Mat」 C:「kenañ」 D:「eo」 A:「ar」 B:「kafe-mañ」`（eo を述語役 D として C の後に挿入。隣接同color重複なし）に修正・ライブ反映する。

## 開発チーム回答 — round 2 (作業者)

ライブ `data.js` を `.wf_langmap_query.mjs` で再照合した上での判断。round 1 で受理済みの 12 件はライブで反映確認済み（reviewer の round 2 スコアカードと一致）。唯一の OPEN 項目 #5 [br] のみ対応する。

3. **#5 [br] コピュラ eo 欠落 → APPLIED（applied by orchestrator this round）**
   - ライブ確認: `D:「Mat」 C:「kenañ」 A:「ar」 B:「kafe-mañ」` … 依然 eo なし。ブルトン語の述語形容詞文はコピュラ *eo* を必須とし（cf. #43 `C:「Mat eo」`）、現状は非文。これは客観的な文法誤り。
   - reviewer が round 2 で role-letter 込みの確定単一形を提示したため、保留理由（複数案併記による曖昧さ）は解消。en 参照は `A:This B:coffee D:is C:very D:delicious` で copula(is) と述語(delicious) が共に D、間に C(very) を挟む D-C-D 構造。提示形 `D:「Mat」 C:「kenañ」 D:「eo」 A:「ar」 B:「kafe-mañ」` はこの D-C-D-A-B に一致し、**隣接同 role-letter 重複なし**（D は C を挟んで非隣接）。
   - 提示確定形どおり適用。これで本ファイルの OPEN 項目は解消。

**ファイル状態: CLOSED（全項目 resolved）**

## レビュアー再評価 — round 3 (Dr. Maren Eilísdóttir-Garapetyan / `@isogloss_atlantic`)

ライブ `data.js` を `.wf_langmap_query.mjs` で、唯一の OPEN 項目および round 1–2 で受理済みの全項目を再照合した。

### 唯一の OPEN 項目の裁定

3. **#5 [br] コピュラ eo 欠落 → ✓ 受理（OPEN 解消）**
   - ライブ確認: `D:「Mat」 C:「kenañ」 D:「eo」 A:「ar」 B:「kafe-mañ」`。
   - 私が round 2 で提示した確定単一形と**完全に一致**。コピュラ *eo* が述語役 D として C(kenañ=very) の後に挿入され、en 参照 `A:This B:coffee D:is C:very D:delicious` の D-C-D 構造に整合。role-letter 列は D-C-D-A-B で、D と D は C を挟み**隣接同 role-letter 重複なし**。SPLIT-PREFERENCE 方針上も問題なし（eo は独立セグメントとして分離済み）。客観的非文（コピュラ欠落）の修正が完了した。

### round 1–2 受理済み 12 件の再確認（リグレッション検査）
- 全件ライブで再照合し、いずれも維持されていることを確認:
  - #4 br `A:「an tostañ」 B:「ti-gar」`／#36 br `C:「er gar」`／#97 br `C:「er gar」`（破損語 savañ なし）
  - #1 br `D:「ur gwiskamant」`／#1 hy `C:「փորձել」`
  - #16 hy `A:「Քանիսին」`／#84 hy `B|C:「մրսեց」`（family 横断 B|C 複合維持）
  - #91 hy `A:「Բալի ծաղկման դիտումը」`／#91 ga `A:「féachaint ar bhláthanna silíní」`（空白＋lenition 維持）
  - #12 ga `C:「na bláthanna silíní」`（空白維持）／#12 hy `C:「բալենի ծաղիկները」`（բալ系統一維持）
  - #26 el `E:「πάρκο」`（先頭スペースなし）／#57 br `C:「ampar」`
- リグレッションなし。

### 新規指摘
- なし（再照合中に新たな客観的誤りは発見されなかった）。SPLIT-PREFERENCE 観点でも、残る fused 単位（br の *Komz a ra*、hy の B|C 複合動詞など）はいずれも family 内の参照と整合した正当な扱いであり、追加分割を要する誤った glue は見当たらない。

### スコアカード
- 受理 ✓: 13 件（全項目）
- 部分 △ / 要対応: 0 件
- 却下 ✗: 0 件
- 私の撤回（CONCEDE）累計: 3 件（#4 役割割当案・#31 語順・#88 略語）。round 3 での新規 CONCEDE: 0 件
- 検証で claimed-but-missing だった修正: 0 件（#5 br を含め全 APPLIED 主張をライブで確認）
- 新規 actionable: 0 件

唯一残っていた #5 [br] のコピュラ欠落が、提示した確定形どおりライブ反映された。actionable な未修正項目は存在しない。

**ファイル状態: CLOSED — 残課題なし**
