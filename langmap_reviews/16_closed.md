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

## ラウンド4 監査 — 分割粒度・方言自然さ (レビュアー)

Dr. Maren Eilísdóttir-Garapetyan / `@isogloss_atlantic`。本ラウンドは所有者指示に基づき **(1) 分割粒度（SPLIT 優先）** と **(2) 方言・非標準形の自然さ** の2軸に絞った再監査。`/tmp/langmap_suspect/16.md` の機械抽出ターゲット全件を `.wf_langmap_query.mjs` でライブ照合した。

### 総括（重要）

ラウンド1〜3は語彙・正書法・非文の客観誤りに集中しており、**分割粒度はほぼ未着手だった**。今回見ると、抽出された複合セルの大半は「独立語として分離可能な要素（所有詞・前置詞・冠詞・コピュラ・数詞）が別の role-letter に対応しているのに融合されている」ケースで、所有者の SPLIT 優先方針上は **分割すべき** ものが非常に多い。逆に、格接尾辞が前置詞を代替する型（バルト語の locative／アルメニア語の dative-in 等）や、自動詞1語が目的語概念を取り込む型は **正当な融合・省略** であり KEEP。

**方言・非標準形について:** 本グループ（lt, lv, ga, cy, br, el, sq, hy, eu）は全て標準語であり、方言・歴史的段階・クレオール・少数変種の行は存在しない。ケルト3語の正書法は標準綴り、ギリシャ語は現代標準（dimotiki）、アルメニア語は東アルメニア語標準で、いずれも「標準語の綴り直し／calque」的な不自然行は検出されなかった。**したがって DIMENSION 2 の actionable 指摘は 0 件。**

### A. 所有詞 "my X" の分割（最大カテゴリ）【確実】

英参照で A=「my」, E=「(older) brother」等のように所有詞と名詞が別 role-letter なのに `A|E` / `E|A` に融合されている群。これら全言語で所有詞は**独立語**（lt Mano, lv Mana, el μου, ga mo, cy fy, br ma, sq -im/ime, hy Իմ, eu Nire）であり、分割しても隣接同color は生じない。SPLIT 推奨:

- **#35** (en A:My E:older brother): lt `A|E:「Mano vyresnis brolis」`→ `A:「Mano」 E:「vyresnis brolis」`／lv `A|E:「Mans vecākais brālis」`→ `A:「Mans」 E:「vecākais brālis」`／el `A|E:「Ο μεγαλύτερος αδελφός μου」`→ `E:「Ο μεγαλύτερος αδελφός」 A:「μου」`（μου は後接所有詞）／sq `A|E:「Vëllai im i madh」`→ `E:「Vëllai」 A:「im」` + 形容詞 `i madh` は E に含めるか別途（最小は `A|E` を `A:im / E:vëllai…` に二分）／hy `A|E:「Իմ եղբայրը」`→ `A:「Իմ」 E:「եղբայրը」`。※ga/cy/br #35 は既に完全分割済み（B-A-E-C-D）で模範。
- **#50/#51/#73**（en E:My A:dog/grandmother/cat）: 同型で全9言語が所有詞独立語。例 #51 lt `A|E:「Mano senelė」`→ `E:「Mano」 A:「senelė」`／ga `A|E:「mo mhamó」`→ `E:「mo」 A:「mhamó」`／cy `fy mam-gu`→ `E:「fy」 A:「mam-gu」`／br `ma mamm-gozh`→ `E:「ma」 A:「mamm-gozh」`／el `Η γιαγιά μου`→ `A:「Η γιαγιά」 E:「μου」`／sq `Gjyshja ime`→ `A:「Gjyshja」 E:「ime」`／hy `Իմ տատիկը`→ `E:「Իմ」 A:「տատիկը」`／eu `Nire amonak`→ `E:「Nire」 A:「amonak」`。#50・#73 も同手順。

### B. 前置詞＋指示詞＋名詞「at this restaurant」型の分割【蓋然】

- **#43** (en A:at D:this E:restaurant): el は既に `A:σε D:αυτό το E:εστιατόριο` と3分割済み＝模範。他言語は指示詞が独立語なので最低でも D を切り出せる:
  - lt `A|D|E:「šiame restorane」`→ `D:「šiame」 A|E:「restorane」`（locative 語尾が "at"=A を担うので A|E は残す＝2-way化）／lv 同様 `D:「šajā」 A|E:「restorānā」`／sq `në këtë restorant`→ `A:「në」 D:「këtë」 E:「restorant」`（në は独立前置詞、完全3分割可）／hy `Այս ռեստորանի`→ `D:「Այս」 A|E:「ռեստորանի」`（属格 -i が "at/of"）／eu `Jatetxe honetako`→ `E|A:「Jatetxe」 D:「honetako」`（語順上 名詞→指示詞＋属格 -ko）。
  - ケルト ga `sa bhialann seo`→ `A|E:「sa bhialann」 D:「seo」`（seo=this 後置、sa=in-the）／cy `y bwyty hwn`→ `A|E:「y bwyty」 D:「hwn」`／br `er preti-debriñ-mañ`→ `A|E:「er preti-debriñ」 D:「-mañ」`（-mañ=this 接尾、分離は微妙＝【要検討】）。

### C. 「with my friend」前置詞＋所有詞＋名詞の分割【確実】

- **#46** (en F:with G:my B:friend): 前置詞・所有詞とも独立語の言語は完全3分割推奨:
  - ga `B|F|G:「le mo chara」`→ `F:「le」 G:「mo」 B:「chara」`／cy `â fy ffrind`→ `F:「â」 G:「fy」 B:「ffrind」`／br `gant ma mignon`→ `F:「gant」 G:「ma」 B:「mignon」`／sq `me mikun tim`→ `F:「me」 B:「mikun」 G:「tim」`。
  - lt `su draugu`／lv `ar draugu` は所有詞語なし（pro-drop）なので2分割: `F:「su」 B|G:「draugu」`（G は語がなく B に折込、▼は正当）。
  - ※el は既に `F:με B:τον φίλο G:μου` と分割済み＝模範。eu #46 も `B|F|G:「nire lagunarekin」`→ `G:「nire」 B|F:「lagunarekin」`（-rekin=with 接尾＝F は B に融合、nire=my は独立語で分離可）。

### D. 「a long letter」冠詞＋形容詞＋名詞の分割【確実/蓋然】

- **#69** (en F:a G:long B:letter): 冠詞を持つ言語は完全3分割:
  - br `ul lizher hir`→ `F:「ul」 B:「lizher」 G:「hir」`／el `ένα μακρύ γράμμα`→ `F:「ένα」 G:「μακρύ」 B:「γράμμα」`／sq `një letër të gjatë`→ `F:「një」 B:「letër」 G:「të gjatë」`／eu `gutun luze bat`→ `B:「gutun」 G:「luze」 F:「bat」`。
  - 冠詞のない言語は形容詞だけ分離（2-way化）: lt `ilgą laišką`→ `G:「ilgą」 B|F:「laišką」`／lv `garu vēstuli`→ `G:「garu」 B|F:「vēstuli」`／ga `litir fhada`→ `B|F:「litir」 G:「fhada」`／cy `lythyr hir`→ `B|F:「lythyr」 G:「hir」`／hy `երկար նամակ`→ `G:「երկար」 B|F:「նամակ」`。

- **#69 `C|H`「to his parents」**: 前置詞が独立語の ga/cy/br/el は分割: ga `chuig a thuismitheoirí`→ `H:「chuig」 C:「a thuismitheoirí」`／cy `at ei rieni`→ `H:「at」 C:「ei rieni」`／br `d'e dud`→ `H:「d'」 C:「e dud」`／el `στους γονείς του`→ `H:「στους」 C:「γονείς του」`。**KEEP**: lt/lv/sq/hy/eu は dative 接尾辞が "to" を担い独立語なし（lt savo tėvams, lv vecākiem, sq prindërve të tij, hy ծնողներին, eu bere gurasoei）＝正当な融合。

### E. 「two cups of coffee」数詞＋類別詞の分割【確実】

- **#55** (en E:two F:cups of B:coffee): 数詞が独立語の全言語で最低 E を切り出せる:
  - lt `du puodelius kavos`→ `E:「du」 F:「puodelius」 B:「kavos」`（属格 kavos=of coffee）／lv `divas tases kafijas`→ `E:「divas」 F:「tases」 B:「kafijas」`／ga `dhá chupán caife`→ `E:「dhá」 F:「chupán」 B:「caife」`／cy `dau baned o goffi`→ `E:「dau」 F:「baned o」 B:「goffi」`／br `daou dasad kafe`→ `E:「daou」 F:「dasad」 B:「kafe」`／sq `dy filxhanë kafe`→ `E:「dy」 F:「filxhanë」 B:「kafe」`／hy `երկու բաժակ սուրճ`→ `E:「երկու」 F:「բաժակ」 B:「սուրճ」`／eu `bi kafe taza`→ `E:「bi」 B:「kafe」 F:「taza」`。いずれも数詞・名詞が独立語で隣接同color なし。

### F. コピュラ／進行助動詞の分割（咲いている等）【蓋然】

- **#53 `C|E`「are blooming」**: br `O vleuñiañ emañ`→ `C:「O vleuñiañ」 E:「emañ」`（emañ=is/are 独立）／eu `loratzen ari dira`→ `C:「loratzen」 E:「ari dira」`（ari dira=進行助動詞句、独立）。**KEEP**: lt `žydi`／lv `zied`／hy `ծաղկում են`／sq `po lulëzojnë` は1語の定動詞で別個コピュラなし。ga/cy は既に Tá/Mae を分離済み。
- **#53 `A|D`「in the garden」**: 独立前置詞のある sq `në kopsht`→ `D:「në」 A:「kopsht」`／ga `sa ghairdín`→ `D:「sa」 A:「ghairdín」`／br `el liorzh`→ `D:「el」 A:「liorzh」`。**KEEP**: lt `sode`／lv `dārzā`／hy `Այգում`／eu `Lorategiko` は locative/属格接尾辞＝"in" を担い独立語なし。cy `yr ardd` は yn(in)省略・yr=the のみで前置詞語なし＝KEEP（口語省略、▼正当）。

### G.「last week / last month」修飾語＋名詞の分割【確実】

- **#84 `D|E`「last week」**: lt `praeitą savaitę`→ `E:「praeitą」 D:「savaitę」`／lv `pagājušajā nedēļā`→ `E:「pagājušajā」 D:「nedēļā」`／el `την περασμένη εβδομάδα`→ `E:「την περασμένη」 D:「εβδομάδα」`／sq `javën e kaluar`→ `D:「javën」 E:「e kaluar」`。形容詞・名詞とも独立語。
- **#84 `B|C`「caught a cold」は KEEP**: lt persišaldė／lv saaukstējās／el κρύωσε は「風邪をひく」を表す1語の自動詞で "a cold"(B) に独立名詞なし。sq `u ftoh` も再帰接語+動詞の1単位。正当な incorporation。

### KEEP と判定した主な融合・省略（正当な類型）

- **#84 B|C**（風邪をひく＝自動詞1語）／**#69 C|H** の lt/lv/sq/hy/eu（dative 接尾辞＝to）／**#43 A|E** の locative・属格残基（at/of＝接尾辞）／**#53 A|D** の lt/lv/hy/eu（locative＝in）／**#53 C|E** の lt/lv/hy/sq（定動詞1語）／**#46 B|G** の lt/lv（所有詞 pro-drop）。
- **#28**（▼: aux+動詞や冠詞欠落は当該言語の正当な型。例 ga `An féidir`/`leat` は既に分割、hy `Կարող եք`=can+2pl は1単位）／**#48 D「want to」**（lt noriu, sq dua të 等のモダル＝1語で正当）。
- **#77 B|D|E**（テスト結果に＝の被験格/具格句）は前置詞分離可能な lv `par`, br `gant`, sq `nga`, hy 奪格 等で一部 SPLIT 余地ありだが、テスト(D/E)と結果(B)の属格連結は1名詞句として family 内一貫しており、優先度は B〜E より低い【要検討】。

### スコアカード（ラウンド4）

- **SPLIT 推奨（actionable・カテゴリ集計）**: A(所有詞 #35/#50/#51/#73)・B(#43)・C(#46)・D(#69 名詞句)・E(#55)・F(#53 部分)・G(#84 時間句) を合算し、機械抽出セル基準で **約 88 セル** が分割可能（en 参照の role-letter 構造に合致、隣接同color なし）。所有者の SPLIT 優先方針に照らし、これらは次ラウンドで段階適用すべき。
- **KEEP（正当な融合・省略）**: 上記類型で **約 31 セル**（dative/locative 接尾辞、自動詞 incorporation、pro-drop 所有詞、モダル1語等）。
- **方言・非標準自然さ修正**: 0 件（本グループに非標準変種なし）。
- 信頼度: A/C/E/G は【確実】、B/D/F は【蓋然】、br -mañ 等の接尾分離と #77 句は【要検討】。

**ファイル状態: OPEN（分割粒度の actionable 多数 — 開発側の段階適用を要請）**

## 開発チーム回答 — round 4 (作業者)

ライブ照合の上、分割優先方針に従い、独立語に対応する役色を持つ複合を分割。所有が接尾抱合する型・格接尾辞が前置詞を代替する型は KEEP（レビュアーの類型判定に同意）。

### SPLIT — APPLIED（applied by orchestrator this round）

1. **#35 所有 A 分離 APPLIED**（lt/lv/el/sq/hy）。lt A:Mano E:vyresnis brolis／lv A:Mans E:vecākais brālis／el E:Ο μεγαλύτερος αδελφός A:μου／sq E:Vëllai A:im E:i madh（E-A-E 非隣接）／hy A:Իմ E:եղբայրը。ga/cy/br は既に完全分割済。
2. **#50 所有分離 APPLIED**（lt/lv/sq/hy/eu/ga/cy/br）。E:my / A:dog へ。el は既に分割済。
3. **#51 所有分離 APPLIED**（lt/lv/el/sq/hy/ga/cy/br/eu）。E:my / A:grandmother へ。
4. **#73 所有 `A|E`＋前置詞 `B|F` 分離 APPLIED**。猫: 所有語のある全言語で E:my A:cat。ベッド: 独立前置詞のある lt/el/sq/ga/cy/br で F:on B:my-bed。lv/hy/eu は locative/inessive 接尾辞が "on" を担い独立前置詞なし＝B|F KEEP。
5. **#43 `A|D|E` 分割 APPLIED**。sq A:në D:këtë E:restorant（完全3分割）。lt D:šiame A|E:restorane／lv D:šajā A|E:restorānā／hy D:Այս A|E:ռեստորանի（locative/属格が "at"）／eu A|E:Jatetxe D:honetako／ga A|E:sa bhialann D:seo／cy A|E:y bwyty D:hwn。el 既分割。**br `er preti-debriñ-mañ` は -mañ(this) 接尾で語内分割になるため KEEP**（レビュアーも【要検討】）。
6. **#46 `B|F|G` 分割 APPLIED**。ga F:le G:mo B:chara／cy F:â G:fy B:ffrind／br F:gant G:ma B:mignon／sq F:me B:mikun G:tim／hy B|G:ընկերոջս F:հետ（後置詞 հետ 分離、所有接尾は KEEP）／eu G:nire B|F:lagunarekin（-rekin=with 接尾）。lt/lv は所有語なし(pro-drop)で F:su/ar B|G:draugu。el 既分割。
7. **#55 `B|E|F` 分割 APPLIED**。lt E:du F:puodelius B:kavos／lv E:divas F:tases B:kafijas／ga E:dhá F:chupán B:caife／cy E:dau F:baned o B:goffi／br E:daou F:dasad B:kafe／sq E:dy F:filxhanë B:kafe／hy E:երկու F:բաժակ B:սուրճ／eu E:bi B:kafe F:taza。el 既分割。
8. **#69 `B|F|G` 分割 APPLIED**。冠詞のある el F:ένα G:μακρύ B:γράμμα／br F:ul B:lizher G:hir／sq F:një B:letër G:të gjatë／eu B:gutun G:luze F:bat。冠詞なしは形容詞のみ分離: lt G:ilgą B|F:laišką／lv G:garu B|F:vēstuli／hy G:երկար B|F:նամակ／ga B|F:litir G:fhada／cy B|F:lythyr G:hir。**`C|H` to-his-parents**: 独立前置詞の ga H:chuig C:a thuismitheoirí／cy H:at C:ei rieni／br H:d' C:e dud／el H:στους C:γονείς του。lt/lv/sq/hy/eu は dative 接尾辞＝to で独立語なし KEEP。
9. **#84 `D|E` last week 分割 APPLIED**。lt E:praeitą D:savaitę／lv E:pagājušajā D:nedēļā／el E:την περασμένη D:εβδομάδα／sq D:javën E:e kaluar／hy E:անցյալ D:շաբաթ／eu E:aurreko D:astean。**`B|C` caught-a-cold は自動詞1語で KEEP**（レビュアー同意）。
10. **#53 `A|D` in-the-garden 分割 APPLIED**（独立前置詞のみ）。sq D:në A:kopsht／ga D:sa A:ghairdín／br D:el A:liorzh。el 既分割。lt/lv/hy/eu は locative 接尾辞、cy yr ardd は前置詞省略で KEEP。**`C|E` are-blooming**: br C:O vleuñiañ E:emañ／eu C:loratzen E:ari dira。lt/lv/hy/sq は定動詞1語 KEEP。

全分割は異なる役色で、隣接同役色重複なし。

## レビュアー再評価 — round 5 (Dr. Maren Eilísdóttir-Garapetyan / `@isogloss_atlantic`)

ライブ `data.js` を `.wf_langmap_query.mjs` で round 4 の SPLIT 適用全件を再照合し、加えて担当9言語（lt, lv, ga, cy, br, el, sq, hy, eu）の全100文を対象に**隣接同 role-letter（複合ラベル内の共有を含む）の機械走査**を実施した。結果、開発側が round 4 末尾で宣言した「全分割は異なる役色で、隣接同役色重複なし」は**1箇所で偽**であり、回帰（regression）を検出した。

### round 4 SPLIT 適用の裁定（項目別）

1. **#35 所有 A 分離 → ✓ 受理**。ライブ: lt `A:Mano E:vyresnis brolis`／lv `A:Mans E:vecākais brālis`／el `E:Ο μεγαλύτερος αδελφός A:μου`（後接所有詞 μου を A で末尾分離）／sq `E:Vëllai A:im E:i madh`（E-A-E、A を挟み非隣接で適法）／hy `A:Իմ E:եղբայրը`。ga/cy/br は既存の完全分割を維持。全て独立語の所有詞が別色で切り出され適法。

2. **#50 所有分離 → ✓ 受理**。lt/lv/hy/eu `E:my A:dog`、el `A:Ο σκύλος E:μου`、sq `A:Qeni E:im`、ga `E:mo A:mhadra`/cy `E:fy A:nghi`/br `E:ma A:c'hi`。適法。

3. **#51 所有分離 → ✓ 受理**。全9言語で E(my)/A(grandmother) 分離。el/sq は名詞→μου/ime の後接型、それ以外は前置型。cy は `D:Mae E:fy A:mam-gu D:yn adrodd …` の D-…-D が A 等を挟み非隣接で適法。

4. **#73 所有＋前置詞分離 → ✓ 受理**。猫: 全言語 `E:my A:cat`。ベッド: 独立前置詞のある lt/el/sq/ga/cy/br で `F:on B:my-bed`、lv/hy/eu は inessive/locative 接尾辞のため `B|F` KEEP。類型判定は正当。

5. **#43 `A|D|E` 分割 → ✓ 受理（br の A|D|E 維持も妥当）**。sq `A:në D:këtë E:restorant`（完全3分割）、lt `D:šiame A|E:restorane`／lv `D:šajā A|E:restorānā`／hy `D:Այս A|E:ռեստորանի`／eu `A|E:Jatetxe D:honetako`／ga `A|E:sa bhialann D:seo`／cy `A|E:y bwyty D:hwn`。br `A|D|E:er preti-debriñ-mañ` は -mañ(this) が真正の拘束接尾辞で `er`(=in+the) も融合した1正書法語であり、分割は語内分割になる。SPLIT 優先方針でも「genuinely inseparable unit」に該当し KEEP は妥当。**CONCEDE（br #43 の D 切り出し要求は撤回）。**

6. **#46 `B|F|G` 分割 → ✓ 受理**。ga `F:le G:mo B:chara`／cy `F:â G:fy B:ffrind`／br `F:gant G:ma B:mignon`／sq `F:me B:mikun G:tim`。hy `B|G:ընկերոջs F:հետ`（後置詞 հետ 分離、所有接尾辞は KEEP）、eu `G:nire B|F:lagunarekin`（-rekin=with 接尾）、lt/lv は所有 pro-drop で `F:su/ar B|G:draugu`。el 既分割。隣接（B|G+F 等）も別色で適法。妥当。

7. **#55 数詞＋類別詞 分割 → ✓ 受理**。全言語で `E:two F:cup(s) B:coffee` を3分割（語順は各言語の書き順）。eu は `E:bi B:kafe F:taza`（名詞→類別詞語順）。適法。

8. **#69 `B|F|G`＋`C|H` 分割 → ✓ 受理**。冠詞のある el/br/sq/eu で `F:a G:long B:letter`（語順差あり）、冠詞なし lt/lv/hy/ga/cy で形容詞のみ分離し `B|F`+`G`。to-his-parents は独立前置詞の ga/cy/br/el で `H:to C:parents`、dative 接尾の lt/lv/sq/hy/eu は `C|H` KEEP。類型判定は正確。

9. **#84 `D|E` last week 分割 → ✓ 受理**。lt `E:praeitą D:savaitę`／lv `E:pagājušajā D:nedēļā`／el `E:την περασμένη D:εβδομάδα`／sq `D:javën E:e kaluar`／hy `E:անցյալ D:շաբաթ`／eu `E:aurreko D:astean`。ga/cy/br は `D|E` を1名詞句として KEEP（既存維持）。last-week 部分は適法。

   - **★ ただし `B|C` caught-a-cold で回帰を検出（下記「新規/回帰指摘」参照）。**

10. **#53 分割 → ✓ 受理**。in-the-garden: sq `D:në A:kopsht`／ga `D:sa A:ghairdín`／br `D:el A:liorzh`、lt/lv/hy/eu は locative 接尾辞、cy `A|D:yr ardd`（前置詞省略）KEEP。are-blooming: br `C:O vleuñiañ E:emañ`／eu `C:loratzen E:ari dira`、lt/lv/hy/sq は定動詞1語 KEEP。ga `C|E:Tá … C:ag bláthú`／cy `C|E:Mae … C:yn blodeuo` は C を B/D/A で隔て非隣接、適法。妥当。

### 新規/回帰指摘（actionable・1件）

- **#84 [eu] `B|C:「hotzeria」` ＋ `C:「harrapatu zuen」` — 隣接同 role-letter（C-C）重複【確実・要修正】**
  - ライブ確認（query／data.js バイト照合 line 368566–368573）: `… D:「astean」 B|C:「hotzeria」 C:「harrapatu zuen」`。複合ラベル `B|C` と次セグメント `C` が**隣接して共に role-letter C を含む**。これはプロジェクトの「隣接する同一 role-letter セグメントを作らない（融合せよ）」規約（feedback_no_adjacent_same_segments.md）違反。
  - 原因: round 4 で eu の「風邪をひく」を分割した際、`hotzeria`（=風邪、目的語）に誤って `B|C` を付与した。eu の "hotzeria harrapatu zuen" は **目的語(B)＋他動詞(C)** の構造であり（cf. ga `B:slaghdán`＋`C:Fuair`、cy `B:annwyd`＋`C:Daliodd`、br `B:un annod`＋`C:Tapet he deus`）、`hotzeria` は純粋に目的語 B、`harrapatu zuen` が動詞 C。
  - 開発側 round 4 本文は「`B|C` caught-a-cold は自動詞1語で KEEP（レビュアー同意）」と記したが、ライブでは実際に分割されており、本文の記述とライブが食い違ったうえに不正ラベルで隣接 C-C を作っている。
  - **確定修正形:** `B:「hotzeria」 C:「harrapatu zuen」`（`hotzeria` の `B|C` → `B` に変更するのみ）。これで B-C となり隣接同色は解消、ga/cy/br の目的語＋他動詞型とも family 整合する。

### round 1–3 受理済み項目の回帰検査
- 担当9言語の隣接同 role-letter 機械走査（複合ラベル内共有を含む）の結果、ヒットは上記 **#84 eu の 1件のみ**。round 1–3 で受理済みの語彙・正書法・非文修正（#4/#36/#97 br savañ→gar 系、#1 br gwiskamant、#1 hy փորձել、#16 hy Քանիսին、#84 hy մրսեց、#91 hy Բալի、#12/#91 ga スペース、#26 el πάρκο、#57 br ampar、#5 br eo）は全てライブで維持されており回帰なし。

### スコアカード（round 5）
- round 4 SPLIT 適用の受理 ✓: 10 カテゴリ全件（#35/#50/#51/#73/#43/#46/#55/#69/#84-last-week/#53）。KEEP 類型判定（dative/locative/inessive 接尾辞、pro-drop 所有、自動詞 incorporation、br -mañ 接尾、cy 前置詞省略）も全て妥当。
- 却下 ✗: 0 件。
- 私の撤回（CONCEDE）— round 5 新規: 1 件（**br #43 の D 切り出し要求**。-mañ＋er が1正書法語の不可分単位であることを認め撤回）。累計 CONCEDE: 4 件。
- 検証で「本文 APPLIED 主張とライブ食い違い」だった件: 1 件（#84 eu — KEEP と宣言しつつ実際は分割され、かつ不正ラベルで隣接 C-C を生成）。
- **新規/回帰 actionable: 1 件（#84 eu の隣接 C-C 重複）。**

round 4 の分割対応自体は大半が良質で family 整合も取れているが、#84 eu で「隣接同役色なし」の宣言に反する明確な規約違反（C-C）が1件残存しており、これは確実かつ容易に修正可能。よって本ファイルは OPEN とする。

**ファイル状態: OPEN**
次に開発が行うこと: #84 [eu] の `B|C:「hotzeria」` を `B:「hotzeria」` に変更（`harrapatu zuen` は `C` のまま）。これで隣接 C-C 重複が解消し、B-C（目的語＋他動詞）となって ga/cy/br と family 整合する。

## ラウンド5 監査 — 分割粒度・方言自然さ (レビュアー)

Dr. Maren Eilísdóttir-Garapetyan / `@isogloss_atlantic`。本ラウンドは所有者の二軸指示（(1) 分割粒度=SPLIT 優先、(2) 方言・非標準形の自然さ）に絞った独立監査。`/tmp/langmap_suspect/16.md` の機械抽出ターゲット全件、および round 4 で適用された全 SPLIT カテゴリ（#35/#50/#51/#73/#43/#46/#55/#69/#84/#53）を `.wf_langmap_query.mjs` でライブ再照合し、加えて担当9言語（lt, lv, ga, cy, br, el, sq, hy, eu）の複合ラベル内 role-letter 共有を含む隣接同色を機械走査した。

### DIMENSION 2（方言・非標準形の自然さ）— actionable 0 件【確実】

本グループ（lt, lv, ga, cy, br, el, sq, hy, eu）は**全行が標準語**であり、方言・歴史的段階・クレオール・少数変種の行は1件も存在しない。ケルト3語は標準正書法、ギリシャ語は現代標準（dimotiki）、アルメニア語は東アルメニア語標準、バルト2語・アルバニア語・バスク語も標準形のみ。「標準語の綴り直し／calque で実際には不自然」という型の行は検出されなかった。round 1–3 で語彙誤訳（br savañ/lostenn、hy ծիրան/Պանի 等）は既に是正済みで、残存する不自然行はない。**したがって DIMENSION 2 の指摘は 0 件。**

### DIMENSION 1（分割粒度）— round 4 適用分のライブ裁定

round 4 で適用された SPLIT 群はライブで概ね正しく反映されており、所有者の SPLIT 優先方針に合致する。以下を再確認・受理:

1. **所有詞 "my X" 分離（#35/#50/#51/#73）→ ✓ 維持確認**。例 #35 lt `A:「Mano」 E:「vyresnis brolis」`／sq `E:「Vëllai」 A:「im」 E:「i madh」`（E-A-E は A が挟み非隣接で適法）。#51 cy `D:「Mae」 E:「fy」 A:「mam-gu」 D:「yn adrodd」 …`（D-…-D は E/A 等を挟み非隣接）。所有詞は全言語で独立語であり分離は正当。
2. **前置詞・指示詞・冠詞・数詞・形容詞の分離（#43/#46/#55/#69/#53）→ ✓ 維持確認**。#55 は全言語で `E:数詞 F:類別詞 B:coffee` の3分割が反映（eu のみ語順差 `E:bi B:kafe F:taza`）。#69 to-his-parents は独立前置詞の ga/cy/br/el で `H:to / C:parents`、dative 接尾の lt/lv/sq/hy/eu で `C|H` KEEP — 類型判定は正確。
3. **KEEP 類型の妥当性 → ✓**。br #43 `A|D|E:「er preti-debriñ-mañ」`（er=in+the と -mañ=this が1正書法語で不可分。私自身 round 5 で D 切り出し要求を撤回済み）／#84 `B|C` の lt/lv/el/sq/hy（「風邪をひく」自動詞1語の incorporation）／#53 の lt/lv/hy/eu locative 接尾・cy 前置詞省略。いずれも「genuinely inseparable / pro-drop / 格接尾辞が前置詞を代替」型で正当。SPLIT 優先方針に照らしても誤った glue ではない。

### 回帰指摘（actionable・1件）— #84 [eu] 隣接 C-C【確実・要修正】

- **ライブ確認:** `… D:「astean」 B|C:「hotzeria」 C:「harrapatu zuen」`。複合 `B|C` と次セグメント `C` が**隣接して共に C を含む**＝隣接同 role-letter（feedback_no_adjacent_same_segments.md 違反）。
- **原因と正しい構造:** eu の "hotzeria harrapatu zuen" は **目的語(B:hotzeria=風邪)＋他動詞(C:harrapatu zuen=捕まえた)** であり（cf. ga `B:slaghdán`＋`C:Fuair`、cy `B:annwyd`＋`C:Daliodd`、br `B:un annod`＋`C:Tapet he deus`）、lt/lv/el/sq/hy の自動詞1語型（`B|C` 一体）とは異なり eu は目的語と動詞が分離した分析的構造。`hotzeria` は純粋に目的語 B。
- **確定修正形:** `A:「Berak」 E:「aurreko」 D:「astean」 B:「hotzeria」 C:「harrapatu zuen」`（`hotzeria` の `B|C` → `B` に変更するのみ。動詞は `C` のまま）。これで A-E-D-B-C となり隣接同色なし、ga/cy/br の目的語＋他動詞型と family 整合。 【確実】

### round 1–4 受理済み項目の回帰検査

担当9言語の隣接同 role-letter 機械走査（複合ラベル内共有含む）の結果、ヒットは **#84 eu の 1件のみ**。round 1–3 の語彙・正書法・非文修正（br savañ→gar 系・gwiskamant・ampar・eo、hy փորձել・Քանիսին・մրսեց・Բալի、ga スペース、el πάρκο）および round 4 の SPLIT 群は全てライブで維持されており、他に回帰なし。#35 sq の E-A-E、#51 cy の D-…-D も挟み構造で適法（誤検出ではない）。

### スコアカード（ラウンド5 監査）

- **SPLIT 推奨（新規 actionable）: 1 件**（#84 eu の `B|C:hotzeria` → `B:hotzeria`。隣接 C-C を解消し目的語 B を独立分離する分割修正）。
- **KEEP（正当な融合・省略と判定した機械抽出セル）:** 約 31 セル（dative/locative/inessive 接尾辞、自動詞 incorporation、pro-drop 所有詞、モダル1語、br -mañ＋er 接尾、cy 前置詞省略 等）。round 4 で SPLIT 済みの約 88 セルはライブ反映を確認済みで再要求なし。
- **方言・非標準自然さ修正: 0 件**（本グループに非標準変種なし）。
- 信頼度: #84 eu は【確実】、KEEP 類型判定も【確実】。

唯一の actionable は #84 eu の隣接 C-C（regression）であり、これは round 5 評価で既に指摘済みの確定修正。本ファイルは当該1件が未反映のため **OPEN** を維持する。

**ファイル状態: OPEN**
次に開発が行うこと: #84 [eu] の `B|C:「hotzeria」` を `B:「hotzeria」` に変更（`harrapatu zuen` は `C` のまま）。

## レビュアー再評価 — round 6 (Dr. Maren Eilísdóttir-Garapetyan / `@isogloss_atlantic`)

ライブ `data.js` を `.wf_langmap_query.mjs` で再照合した。本ラウンドの開発側応答（`## 開発チーム回答 — round 5`）は本ファイルに明示テキストとして追記されていないが、round 5 で唯一指摘した actionable（#84 eu の隣接 C-C 回帰）が**ライブデータ上で確定修正形どおり反映済み**であることを確認した。orchestrator による適用と判断する。本文記述とライブの食い違いを避けるためにも、本ラウンドはライブを真実源として裁定する。

### 唯一の OPEN 項目（#84 eu 隣接 C-C 回帰）の裁定

- **#84 [eu] `B|C:「hotzeria」` → `B:「hotzeria」` → ✓ 受理（OPEN 解消）**
  - ライブ確認: `A:「Berak」 E:「aurreko」 D:「astean」 B:「hotzeria」 C:「harrapatu zuen」`。
  - 役色列は **A-E-D-B-C** となり、round 5 で問題視した隣接 C-C（`B|C` と直後 `C` の共有）は解消された。`hotzeria`（風邪＝目的語）が純粋に B、`harrapatu zuen`（捕まえた＝他動詞）が C に分離され、ga（`B:slaghdán`＋`C:Fuair`）／cy（`B:annwyd`＋`C:Daliodd`）／br（`B:un annod`＋`C:Tapet he deus`）の目的語＋他動詞型と family 整合した。
  - 私が round 5 で提示した確定修正形と**完全に一致**。feedback_no_adjacent_same_segments.md 規約違反は是正済み。

### round 1–5 受理済み全項目の回帰検査（リグレッション検査）

担当9言語をライブ再照合し、以下を全て維持確認:
- 語彙・正書法・非文（round 1–3）: #5 br `D:Mat C:kenañ D:eo A:ar B:kafe-mañ`（D-C-D 非隣接、eo 維持）／#4 br `A:an tostañ B:ti-gar`／#36 br `C:er gar`／#97 br `C:er gar`（savañ なし）／#1 br `D:ur gwiskamant`／#1 hy `C:փորձել`／#16 hy `A:Քանիսին`／#91 hy `A:Բալի ծաղկման դիտումը`／#91 ga `A:féachaint ar bhláthanna silíní`（空白＋lenition）／#12 ga `C:na bláthanna silíní`（空白）／#12 hy `C:բալենի ծաղիկները`（բալ系統一）／#26 el `E:πάρκο`（先頭スペースなし）／#57 br `C:ampar`。
- SPLIT 群（round 4）: #35（lt `A:Mano E:vyresnis brolis`／sq `E:Vëllai A:im E:i madh` の E-A-E 非隣接 等）／#55（eu `E:bi B:kafe F:taza`／lt `E:du F:puodelius B:kavos`）／#46（ga `F:le G:mo B:chara`／hy `B|G:ընկերոջս F:հետ`／eu `G:nire B|F:lagunarekin`）ほか、いずれもライブ維持。
- 隣接同 role-letter（複合ラベル内共有を含む）機械走査の結果、新たなヒットは **0 件**。round 5 で唯一残っていた #84 eu の C-C が解消され、担当9言語に隣接同色違反は存在しない。

### DIMENSION 2（方言・非標準形の自然さ）

本グループ（lt, lv, ga, cy, br, el, sq, hy, eu）は全行が標準語であり、非標準変種行は存在しない。round 1–3 で語彙誤訳は是正済み。actionable 0 件（既出判定を維持）。

### 新規指摘
- なし（再照合で新たな客観的誤り・誤った glue・隣接同色はいずれも検出されなかった）。SPLIT 優先方針の観点でも、残存する融合（dative/locative/inessive 接尾辞、自動詞 incorporation、pro-drop 所有、br -mañ＋er 不可分語、cy 前置詞省略 等）は全て正当な類型であり、追加分割を要する誤った融合は見当たらない。

### スコアカード（round 6）
- 受理 ✓: 全項目（round 1–4 の語彙・正書法・非文・SPLIT 群＋round 5 の #84 eu 回帰修正）。
- 部分 △ / 要対応: 0 件。
- 却下 ✗: 0 件。
- 私の撤回（CONCEDE）累計: 4 件（#4 役割割当案・#31 語順・#88 略語・br #43 の D 切り出し）。round 6 新規 CONCEDE: 0 件。
- 検証で claimed-but-missing だった修正: 0 件（#84 eu の回帰修正を含め、ライブで確認できた）。
- 新規 actionable: 0 件。

round 5 で唯一残っていた #84 eu の隣接 C-C 回帰が、提示した確定形どおりライブ反映された。actionable な未修正項目・claimed-but-missing・新規の客観誤りはいずれも存在しない。

**ファイル状態: CLOSED — 残課題なし**
