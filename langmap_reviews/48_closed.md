# LangMap データレビュー #48 — 再帰代名詞・再帰動詞構文の横断分節レビュー

## レビュアー自己紹介 (ペルソナ)

Bertrand Gélinas-Faucher (handle: **@reflexion_bgf**)。モントリオール大学言語学博士、論文 "The Cliticization of Romance se: Syntax, Semantics and Pragmatics" (M. Haspelmath 副査)。常用文献は König & Gast 編 *Reciprocals and Reflexives — Theoretical and Typological Explorations* (Mouton de Gruyter 2008)、Geniušienė *The Typology of Reflexives* (Mouton de Gruyter 1987)、Kemmer *The Middle Voice* (Benjamins 1993)、Haspelmath "A grammatical overview of voice" (in Brown & Miller 1999)、Faltz *Reflexivization: A Study in Universal Syntax* (Garland 1985)、Cardinaletti & Starke "The typology of structural deficiency" (in van Riemsdijk 1999)、寺村秀夫 *日本語のシンタクスと意味 III* (くろしお出版 1991, 第8章 受身・使役・再帰)。今回のレビュー軸は **再帰マーカー (REFL) ─ Romance se/si/me/te/nous、Slavic ‐ся/‐się/se/sa、Germanic sich/mich/sig/seg/meg、Hindi अपना、Korean 자신/혼자、Japanese 自分、English -self、Arabic نفس、Greek μέ-/εαυτό- 等 ─ が文・言語を横断して整合した分節レター割り当てを受けているか** のみに絞る。語彙選択 (#28 系統)、敬語 (#38 系統)、テンス分節 (#43 で扱い済) 等は射程外とし、純粋に「**再帰要素が独立分節か融合か、letter 体系のどこに割り当てられているか**」のみを判定する。

## 検証範囲

- **再帰マーカーが顕在的に出現する文**: スキャンの結果、以下 30 文が射程内 (Romance/Slavic/Germanic/Hindi/Korean/English のいずれかで真性再帰 ─ 単なる与格代名詞でなく ─ が出現):
  - **真性再帰動詞 (inherent reflexive)**: #26 (es_eu se siesta? 否, is leika sér), #35 (got married = casarse/sposarsi/жениться/sich verheiraten/gifte seg), #39 (wake up = se lever/levantarse/svegliarsi/sich aufwachen/прокинутися/vakna), #40 (be located = se trouver/si trova/находиться), #50 (go for walks = se promener), #56 (start = se začne), #60 (learn = se učit/uczyć się), #68 (sit = sentarse/si sednout), #70 (close = se zatvára/zamyka się), #75 (learn to swim), #76 (feel = se sentir/sich fühlen), #77 (be surprised = es va sorprendre), #79 (move away = se mudó/si è trasferita/się wyprowadziła), #82 (rest = se reposer/odpočívat), #83 (try = se snažím), #84 (catch cold = se refredar/sich erkälten), #93 (be held = se celebran)
  - **再帰所有形 (reflexive possessive)**: #29 (forgot my umbrella = bg чадъра си, fr/it 通常所有), #46 (my friend = tr arkadaşım, ko 親友, hi अपने दोस्त), #52 (my wallet = bg портфейла си, hi अपना बटुआ), #64 (my phone = hi अपना फ़ोन, bg телефона си, ru своим), #69 (his parents = ru своим родителям, cs svým rodičům, hi अपने माता-पिता), #71 (my pronunciation = pl swoją wymowę, hi अपना उच्चारण), #86 (my smartphone = ru своим, hi अपना), #90 (by himself = lui-même, par/cuenta/sich, खुद)
  - **再帰与格・経験者 (reflexive dative)**: #13 (give me — 真の与格、再帰ではないが #82 と混同しやすい), #19 (I like = mi piace/me gusta — 経験者構文の与格、ロマンス諸語で再帰類似に見える)、#24 (show me)
  - **再帰使役 / 再帰受動 (reflexive causative / passive)**: #71 (improve my pronunciation = 自分の発音を改善)、#93 (be held = passive reflexive in Romance)、#84 (catch cold = inchoative reflexive)
- **対象言語層**: 真性再帰を持つ Romance 8 (fr/es_eu/es_mx/it/pt_eu/pt_br/ro/ca + nap/scn/vec/oc/gl), Slavic 8 (ru/uk/pl/cs/sk/sr/bg/sl), Germanic 9 (de/nl/sv/no/da/is/fy/af/nds + de_gsw/de_at), Indic 1 (hi), Korean (ko), Japanese (ja), Arabic (ar), Greek (el), Hebrew (he), Turkish (tr)。
- ライブデータは `node -e` で全 100 文抽出済。

## 方針 — 何を「指摘」とし、何を「許容」とするか

1. **再帰マーカーは独立分節か、動詞と融合か、いずれかに統一されるべき**。Romance の `se/si/me/mi/te/ti` は学習者文法では proclitic / enclitic として認識可能な形態素 (Cardinaletti & Starke 1999 のクリティック階層)。#13 fr `[B:-moi]` のように **すでに独立分節されている例**と #29 es_eu `[C:me olvidé]` のように **動詞に融合された例**が並存しており、これは方針未確定の徴候。
2. **再帰所有形 (свой/swój/svůj/अपना)** は Slavic / Indic で **必須の文法形式** (Timberlake 2004 §4.6.5, Kachru 2006 §6.3)。これらは通常の所有代名詞 (мой/мой/мой/मेरा) と意味的に対立するが、データ上は **片や独立分節 (#86 ru `[B:своим смартфоном]`)、片や所有句に融合 (#52 hi `[E:अपना] [B:बटुआ]`)** と扱いが分裂。
3. **真性再帰動詞 (inherent reflexive: 結婚する/起きる/座る/驚く/移転する)** は **「動詞 + 再帰」が一語のレキシム** として扱える (Geniušienė 1987)。融合 (`[B:s'est marié]` 一塊) でも分節独立 (`[B:s'] [B':est marié]` のような分割) でもよいが、**文・言語横断で統一**が必要。
4. **再帰受動 (Romance se-passive, #93 se celebran)** は **能動とは構造的に異なる voice marker** (Belletti 1982; *Nueva gramática* §41) で、`se` を独立分節する強い動機がある。
5. **クリティック方向性 (proclitic vs enclitic)**: 同じ動詞でも文によって `me dijo / dijo-me / mi disse / m'a dit` と並びが変わる。これは **letter 順を保つために再帰要素を独立分節する** ことで自然に解決できる。現状は融合で letter 不変だが、結果として「同じ意味要素が別 letter に化ける」ため言語比較が壊れる。
6. **#82 fr `[B:m'] [D:a dit] [C:de me reposer]`** は **同一文中に 2 つの `me` が出現**し (`m' a dit` の与格 me と `me reposer` の再帰 me)、前者は letter B (与格目的語) で独立、後者は letter C (動詞句) に埋没。この **同一機能の片方だけ分割** が最も顕著な不整合。

確信度は 【確実】= 同一データ内で再帰マーカーが OWN/FUSED 両方に分裂しており規約違反が明白、【蓋然】= 言語固有事情で迷い余地あり、【要検討】= 方針自体を closed-review で再確認すべきもの。

---

## 指摘事項 (Issues found)

### 1. Romance 再帰クリティック `se/si/me/te/mi/ti` が文・言語間で OWN/FUSED に分裂 【確実】

**Current — OWN (再帰クリティック独立分節):**
- #13 fr `[B:-moi]`、it `[B:mi]`、nap `[B:me]`、pt_eu/pt_br/ro/ca `[B:-me/me/-mi/-me]`
- #24 it `[B:mi]`、pt_br `[B:me]`、fr `[D:me montrer]` 内に埋没
- #65 it `[B:mi]`、pt_br `[B:me]`、es_eu `[B:me]`、ca `[B:em]`
- #76 es_eu/es_mx/pt_br/it/ro/nap/scn `[D:Me siento/Mi sento/Me sento/Mă simt/...]` (再帰 + 動詞融合だが letter D 独立)
- #82 fr `[B:m'] [D:a dit] [C:de me reposer]` (1 つ目だけ独立)、it `[B:mi]`、es_eu/pt_br `[B:me]`、ro `[B:mi-]`、ca `[B:em]`

**Current — FUSED (再帰クリティックが動詞句に埋没):**
- #29 es_eu `[C:me olvidé]`、es_mx `[C:se me olvidó]`、pt_eu `[C:esqueci-me]`、ro `[C:mi-am uitat]`、ca `[C:em vaig oblidar]`、it 該当なし (非再帰 ho dimenticato)
- #35 fr `[B:s'est marié]`、es_eu `[B:se casó]`、it `[B:si è sposato]`、pt_eu `[B:casou-se]`、pt_br `[B:se casou]`、ro `[B:s-a căsătorit]`、ca `[B:es va casar]`
- #39 fr `[D:me lever]`、es_eu `[D:levantarme]`、it `[D:svegliarmi]`、ro `[D:mă trezesc]`、ca `[D:llevar-me]`
- #40 fr `[D:se trouve]`、it `[D:si trova]`、nap `[D:se trova]`、scn `[D:si trova]`
- #50 fr `[C:se promener]`、it `[C:andare a fare passeggiate]` (再帰なし)
- #60 fr `[D:apprends]` (非再帰)、cs/sk/sl `[D:se učím/sa učím/se učim]` (Slavic は独立分節済)
- #68 fr `[C:m'asseoir]`、es_eu `[C:sentarme]`、es_mx `[D:me puedo]` + `[C:sentar]` (分裂)、it `[C:sedermi]`、pt_eu `[C:sentar-me]`、oc `[C:m'assèire]`
- #76 fr `[D:me sens heureux]`、it `[D:Mi sento felice]` (再帰 + 形容詞、letter D 一塊)
- #79 es_eu `[E:se mudó]`、it `[E:si è trasferita]`、pt_br `[E:se mudou]`、ro `[E:s-a mutat]`、ca `[E:se n'ha anat]`、nap `[E:s'è trasferuta]`、vec `[B:xe andà via]` (語彙差)
- #82 fr 内 `[C:de me reposer]` (再帰 me が C に埋没、上記 OWN 例の `m'` と非対称)、it `[C:di riposarmi]`、es_eu `[C:que descansara]` (非再帰補文)、ro `[C:să mă odihnesc]`、nap `[C:'e me ripusà]`、scn `[C:di ripusàrimi]`、vec `[C:de riposarme]`、oc `[C:de me repausar]`
- #83 pt_br `[C:me exercitar]` (融合)
- #84 ca `[B|C:es va refredar]`、vec `[C:se ga ciapà]`、es_mx `[C:se agarró]`、de `[C:hat sich]` (sich が hat に複合)

**Problem:** Romance の再帰クリティックは Kayne 1975 以降、`[Spec, IP]` から V に proclitic 移動するか V に enclitic として接合するかで syntactic position が変わる。学習者教材としては **分節独立**することで「与格 me (#13 fr `-moi`) と再帰 me (#39 `me lever`) を視覚的に同じ要素として認識**できる。現状は同じクリティック `me` が、与格用法 (#13, #82 前半) では OWN になり、再帰用法 (#29, #39, #68, #79, #82 後半) では FUSED になり、**syntactic role でなく semantic role で OWN/FUSED が決まる** という直感に反する規約が暗黙化している。さらに #82 fr で `m' a dit` の `m'` (与格、独立 B) と `me reposer` の `me` (再帰、融合 C) が **同一文中に共存**し、視覚的に「片方は分節、もう片方は分節しない」という非対称が露呈。

**Proposed:** 全 Romance 再帰文で `se/si/me/mi/te/ti` を独立分節に統一 (推奨方向):
- #29 es_eu `[C:me olvidé]` → `[C:me] [C':olvidé]` (または letter 体系に H 追加して `[C:me] [H:olvidé]`)
- #35 fr `[B:s'est marié]` → `[B:s'] [B':est marié]`、it `[B:si è sposato]` → `[B:si] [B':è sposato]`、es_eu `[B:se casó]` → `[B:se] [B':casó]`、ro `[B:s-a căsătorit]` → `[B:s-] [B':a căsătorit]`、ca `[B:es va casar]` → `[B:es] [B':va casar]`
- #39 fr `[D:me lever]` → `[D:me] [D':lever]`、es_eu `[D:levantarme]` → `[D:levantar] [D':me]` (enclitic は逆順)、it `[D:svegliarmi]` → `[D:svegliar] [D':mi]`
- #40 fr `[D:se trouve]` → `[D:se] [D':trouve]`、it `[D:si trova]` → `[D:si] [D':trova]`
- #68 fr `[C:m'asseoir]` → `[C:m'] [C':asseoir]`、it `[C:sedermi]` → `[C:seder] [C':mi]`
- #79 es_eu `[E:se mudó]` → `[E:se] [E':mudó]`、it `[E:si è trasferita]` → `[E:si] [E':è trasferita]`
- #82 fr `[C:de me reposer]` → `[C:de me] [C':reposer]` または `[C:de] [B:me] [C:reposer]` (与格 `m'` と再帰 `me` を同 letter B に統一)

逆方向 (全融合) を採るなら #13/#82 前半/#65 の `[B:me]` 独立を融合に戻すべきだが、これは Cardinaletti & Starke クリティック理論と矛盾するため非推奨。**少なくとも syntactic role による OWN/FUSED 規則を立てる**こと。

---

### 2. Slavic 再帰接尾辞 `‐ся/‐сь` (East Slavic) と独立小辞 `się/se/sa` (West/South Slavic) の扱いが文間で分裂 【確実】

**Current — `‐ся/‐сь` (East Slavic, ru/uk):**
- 全文 FUSED (動詞語幹に張り付き、形態論的に分離不能寄り): #16 ru `[C:начинается]`、#56 ru `[D:начинается]`、#60 ru `[D:учусь]`、#70 ru `[C:закрывается]`、#75 ru `[C:учатся]`、#79 ru `[B:грустит]` (非再帰)、#83 ru `[D:стараюсь]`、#84 uk `[B|C:застудилася]`、#90 ru `[D:научился]`、#93 ru `[G:проводится]`、#76 ru `[D:чувствую себя счастливым]` (себя は再帰代名詞独立分節せず融合)

**Current — `się/se/sa` (West/South Slavic, pl/cs/sk/sr/sl/bg):**
- OWN (粒子独立、動詞と分離): #22 cs `[E:Chci se]`、sk `[D:sa naučiť]`、sl `[E:se želim] [D:naučiti]`、#39 (none)、#56 pl `[D:zaczyna się]`、sl `[D:se začne]`、#60 cs `[D:se učím]`、sk `[D:sa učím]`、sl `[D:se učim]`、#68 cs `[C:si sednout]`、sk `[C:si sadnúť]`、#70 pl `[C:zamyka się]`、ro `[C:se închide]`、sr `[C:се затвара]`、sl `[C:se zapre]`、#75 pl `[C:uczą się]`、cs `[C:se učí]`、sk `[C:sa učia]`、sr `[C:уче]` (非再帰)、sl `[C:se učijo]`、#76 sk `[D:Cítim sa šťastný]` (再帰 + 形容詞)、#79 pl `[E:się wyprowadziła]`、cs `[E:se odstěhovala]`、sk `[E:sa odsťahovala]`、sr `[E:одселила]` (内蔵)、sl `[D:se je njena prijateljica]`、bg `[E:се изнесе]`、#82 bg `[C:да си почина]`、#83 pl `[D:Staram się]`、cs `[D:se snažím]`、sk `[D:sa snažím]`、bg `[D:се опитвам]`、#84 pl `[B|C:przeziębiła się]`、sr `[B|C:се прехладила]`、#90 cs `[D:se naučil]`、sk `[D:sa naučil]`、sl `[D:se je naučil]`、#93 sk `[G:sa koná]`、sl `[G:se odvija]`、sr `[G:се одржава]`、bg `[G:се провеждат]`、ro `[G:se organizează]`、pl `[G:odbywa się]`、cs `[G:se koná]`

- FUSED (粒子が前後の語と一塊): #16 pl `[C:zaczyna się]` (前後を見ると OWN だが letter は C 一塊)、#26 ro `[C:se joacă]`、pl `[C:bawią się]`、cs `[C:si hrají]`、sk `[C:sa hrajú]`、sr `[C:се играју]`、sl `[D:se] [C:igrajo]` (唯一 sl が分割)、#39 ru `[D:проснуться]`、uk `[D:прокинутися]`、#35 pl `[B:ożenił się]`、cs `[B:se oženil]`、sk `[B:sa oženil]`、sr `[B:се оженио]`、bg `[B:се ожени]`、sl `[B:se je poročil]`、#46 sk `[E:sa rozprával]`

**Problem:** Slavic 文法書 (Sussex & Cubberley 2006 *The Slavic Languages*, §6.4.1) は:
- East Slavic `‐ся/‐сь` は **音韻的に動詞に張り付いた接辞 (postfix)**、形態論的に分離可能だが書記上は連書。
- West/South Slavic `się/se/sa` は **自由小辞 (clitic particle)**、文中で動詞と離れて出現可能 (Wackernagel 位置)。

データ上は **sl が #26 で唯一 `[D:se] [C:igrajo]` と粒子独立**にし、それ以外の文では `[C:se igrajo]` 風に融合させており、**自身の規約破り**。さらに #70 (close = 自動詞化) のように **「同じ意味で半数の Slavic が再帰、半数が非再帰」**になる文では、再帰を持つ言語の `se/się` を独立分節するか否かで「再帰の有無」が視覚的に分かるべきだが、現状は混在しており **学習者には「pl は閉まる、cs は閉まる、sk は閉まる」と動詞だけ見えて再帰の存在が透明化**してしまう。

**Proposed:** Slavic 再帰小辞 `się/se/sa` (West/South) を独立分節に統一 (East の `‐ся/‐сь` は接辞のため例外的に融合許容):
- #16 pl `[C:zaczyna się]` → `[C:zaczyna] [C':się]`
- #26 ro `[C:se joacă]` → `[C:se] [C':joacă]`、pl `[C:bawią się]` → `[C:bawią] [C':się]`、cs `[C:si hrají]` → `[C:si] [C':hrají]`、sk `[C:sa hrajú]` → `[C:sa] [C':hrajú]`、sr `[C:се играју]` → `[C:се] [C':играју]` (sl の `[D:se] [C:igrajo]` パターンを全 Slavic に拡大、ただし sl の `D:se` は letter 体系上は再考すべき — Wackernagel 位置を D で表すなら統一)
- #35 pl `[B:ożenił się]` → `[B:ożenił] [B':się]`、cs `[B:se oženil]` → `[B:se] [B':oženil]`、sk `[B:sa oženil]` → `[B:sa] [B':oženil]`
- #79 pl `[E:się wyprowadziła]` → `[E:się] [E':wyprowadziła]`、cs `[E:se odstěhovala]` → `[E:se] [E':odstěhovala]`
- #93 sk `[G:sa koná]` → `[G:sa] [G':koná]`、sl `[G:se odvija]` → `[G:se] [G':odvija]`、bg `[G:се провеждат]` → `[G:се] [G':провеждат]`、ro `[G:se organizează]` → `[G:se] [G':organizează]`、pl `[G:odbywa się]` → `[G:odbywa] [G':się]`
- 東 Slavic ru/uk の `‐ся/‐сь` は **接辞として現状維持** (融合) を許容、ただし注記。

---

### 3. #82 fr 内に同一形 `me` が**同一文中で OWN 与格 B と FUSED 再帰 C** に分裂 【確実】

**Current:**
- #82 fr `[A:Le médecin] [B:m'] [D:a dit] [C:de me reposer]`

**Problem:** これは本レビューで最も明確な分節非対称の例。フランス語 1 人称単数クリティック `me` が:
- 与格 `m'` (← `m' a dit` = "told me") → letter **B (与格目的語)** に独立分節
- 再帰 `me` (← `me reposer` = "rest myself") → letter **C (動詞句 "de me reposer")** に埋没

同じ文で同じ表面形 `me` が、syntactic role (再帰 vs 与格) の違いだけで OWN/FUSED に分裂しているのは、学習者にとって **「いつ独立、いつ融合か」のルールが見えない**最悪のケース。さらに同じ #82 で:
- it `[B:mi] [D:ha detto] [C:di riposarmi]` — 同じ分裂、`mi` (与格 B) vs `riposar+mi` (再帰、enclitic として動詞に融合)
- es_eu `[B:me] [D:dijo] [C:que descansara]` — 補文 (que + 接続法) を採用、再帰なしで問題なし
- ro `[B:mi-] [D:a spus] [C:să mă odihnesc]` — `mi-` (与格 B) vs `mă` (再帰、補文内に融合)
- nap `[B:me] [D:ha ditto] [C:'e me ripusà]` — 同じ二重 me 分裂

**Proposed:**
- #82 fr → `[A:Le médecin] [B:m'] [D:a dit] [C:de] [B:me] [C:reposer]` または `[C:de me] [C':reposer]` (再帰 me を C と統合した上で C を二段分節)。最善は **再帰 me も letter B に統一** すること: `[A:Le médecin] [B:m'] [D:a dit] [C:de] [B:me] [C:reposer]` (letter B が 2 回出現、両方とも 1 人称代名詞 me)
- 同様に it `[A:Il medico] [B:mi] [D:ha detto] [C:di riposar] [B:mi]` (再帰 mi も letter B、enclitic 位置)
- ro `[A:Doctorul] [B:mi-] [D:a spus] [C:să] [B:mă] [C:odihnesc]`
- nap `[A:'O miedeco] [B:me] [D:ha ditto] [C:'e] [B:me] [C:ripusà]`

これにより **letter B = 1 人称代名詞 (与格・再帰両用)** という cross-functional な意味的整合が取れる。

---

### 4. Germanic `sich/mich/sig/seg/meg` の独立分節が #84 と #76 でのみ実施、他は融合 【確実】

**Current — OWN (再帰代名詞独立):**
- #84 de `[A:Sie] [C:hat sich] [E:letzte] [D:Woche] [B:erkältet]` (sich は hat に融合だがレター C 内で動詞句として独立)、nl `[C:heeft zich]`、nds `[C:hett sick]`、de_gsw `[C:hät sich]`、de_at `[C:hat sich]`
- #82 de `[C:ich solle mich ausruhen]` (mich が C に埋没)
- #76 de `[D:fühle mich glücklich]`、no `[D:føler meg glad]`、sv `[D:känner mig glad]`、da `[D:føler mig glad]`、fy `[D:fiel my bliid]`、de_gsw `[D:füele mi glücklich]`、de_at `[D:fühl i mi]` (`mi` 独立)
- #83 is `[C:hreyfa mig]` (mig が C に埋没)
- #22 sv `[D:lära mig]`、#60 sv `[D:lär mig]`、#75 sv `[C:lär sig]`、#90 sv `[D:har lärt sig]`、no `[D:har lært seg]` (再帰動詞 "lære seg = learn for oneself"、再帰代名詞が動詞句に融合)

**Current — FUSED:**
- 上記すべて、再帰代名詞 `sich/sig/meg/sig/mig` は letter 単位で独立しておらず、動詞句 (letter C/D) の内部に埋没。

**Problem:** ドイツ語 `sich` は accusative/dative 両用の再帰代名詞で、形態論的にも syntactic にも明確な独立形態素 (Eisenberg 2006, *Grundriss der deutschen Grammatik II*, §6.2)。北欧諸語の `sig/seg` も同様 (Holmes & Hinchliffe 2003, *Swedish: A Comprehensive Grammar*, §5.5)。データ上、**Germanic の再帰代名詞は 100% 動詞句に融合**しており、Romance の `se/si` が一部独立されているのと不均衡。#84 de `[C:hat sich]` のように **複合動詞句の中で sich が hat にくっついて C に埋没**しているのは、**助動詞 hat (= TAM、本来は H に独立すべき #43 指摘 18 参照) + 再帰 sich + 過去分詞 erkältet** の三層構造が、わずか letter C と B の 2 つに圧縮されている。

**Proposed:** Germanic 再帰代名詞 (`sich/mich/dich/sig/seg/meg/mig/sér/mér/my/mi`) を独立分節に統一:
- #76 de `[D:fühle mich glücklich]` → `[D:fühle] [B:mich] [D':glücklich]` (再帰 mich を letter B に分離、形容詞 glücklich は D' or 新 letter)
- #76 sv `[D:känner mig glad]` → `[D:känner] [B:mig] [D':glad]`
- #76 no `[D:føler meg glad]` → `[D:føler] [B:meg] [D':glad]`
- #84 de `[C:hat sich]` → `[C:hat] [B:sich]` (sich を letter B に独立)、nl `[C:heeft zich]` → `[C:heeft] [B:zich]`、nds `[C:hett sick]` → `[C:hett] [B:sick]`
- #82 de `[C:ich solle mich ausruhen]` → `[A:ich] [E:solle] [B:mich] [C:ausruhen]` (主語 ich + 助動詞 solle + 再帰 mich + 動詞 ausruhen の四分節)
- #83 is `[C:hreyfa mig]` → `[C:hreyfa] [B:mig]`
- #22 sv `[D:lära mig]` → `[D:lära] [B:mig]`、#60 sv `[D:lär mig]` → `[D:lär] [B:mig]`、#75 sv `[C:lär sig]` → `[C:lär] [B:sig]`、#90 sv `[D:har lärt sig]` → `[D:har lärt] [B:sig]`、no `[D:har lært seg]` → `[D:har lært] [B:seg]`

---

### 5. 再帰所有形 `свой/swój/svůj` (Slavic) と通常所有 `мой/мой` の混在 — letter 割当てが文間で不整合 【確実】

**Current:**
- #29 (forgot my umbrella)
  - bg `[B:чадъра си]` (`си` = 再帰所有エンクリティック)、ru `[B:зонт]` (所有なし)、cs/sk/sl `[B:deštník/dáždnik/dežnik]` (所有なし)
- #46 (talked with my friend)
  - bg `[B:приятеля си]` (再帰所有 si)、ru/uk/sl `[B:другом/другом/prijateljem]` (所有なし)
- #52 (lost my wallet)
  - bg `[B:портфейла си]` (再帰所有 si)、ru/uk/cs/sk/sl `[B:кошелёк/гаманець/peněženku/peňaženku/denarnico]` (所有なし)
- #64 (charge my phone)
  - bg `[B:телефона си]` (再帰所有)
- #69 (he wrote letter to his parents)
  - ru `[C|H:своим родителям]`、cs `[C|H:svým rodičům]`、uk `[C|H:батькам]` (所有なし)、pl `[C|H:do rodziców]` (所有なし、前置詞)、sk `[C|H:rodičom]` (所有なし)、sr `[C|H:родитељима]` (所有なし)、bg `[H:на] [C:родителите си]` (再帰所有 si を別 letter で分節)、sl `[C|H:svojim staršem]`
- #71 (improve my pronunciation)
  - pl `[B:swoją wymowę]`、cs `[B:svou výslovnost]`、sk `[B:svoju výslovnosť]`、bg `[B:произношението си]`、sr `[B:свој изговор]`、sl `[B:svojo izgovorjavo]` (全 Slavic で再帰所有 + 名詞が letter B 一塊)
- #86 (use my smartphone every day)
  - ru `[B:своим смартфоном]`、uk `[B:своїм смартфоном]`、cs `[B:svůj smartphone]`、sk `[B:svoj smartfón]`、bg `[B:смартфона си]`、sr `[B:свој паметни телефон]`、sl `[B:svoj pametni telefon]` (全 Slavic で再帰所有 + 名詞融合)
- #90 (he learned programming by himself)
  - ru `[C:самостоятельно]` (再帰副詞)、cs `[C:sám]`、pl `[C:sam]` (代名詞ベース副詞、他はそのまま) — `сам` 系は独立分節済

**Problem:** Slavic 再帰所有 `свой` (ru) / `swój` (pl) / `svůj` (cs) / `svoj` (sl) / `си` (bg, enclitic 再帰所有) は **主語と所有者が同一指示** であることを示す **必須文法形式**で、通常所有 `мой` (= 別の所有者) と意味的に対立 (Timberlake 2004 §4.6.5)。これは英語の `my/his/her` で表現できない区別であり、Slavic 言語学的に重要な指標。
- データ上、**#86 ru `[B:своим смартфоном]` は再帰所有 + 名詞を一塊**にしており、`свой` の存在が letter として現れない。
- 一方 **#69 bg `[H:на] [C:родителите си]`** は前置詞 `на` (letter H) と所有句 `родителите си` (letter C) を **分節独立**させており、`си` の存在は分かるが、`свой` の対立は letter 単位では現れない。
- **#71 sk `[B:svoju výslovnosť]`** は再帰所有が B に埋没、しかし兄弟言語 ko `[B:발음을]` / hi `[B:अपना उच्चारण]` (hi は 2 トークン分割) と並べると **再帰所有の透明性が文間で不均衡**。

**Proposed:** Slavic 再帰所有 `свой/swój/svůj/svoj` および bg enclitic `си` を独立分節:
- #86 ru `[B:своим смартфоном]` → `[E:своим] [B:смартфоном]` (新 letter E、または既存 letter で `[B:своим] [B':смартфоном]`)
- #71 pl `[B:swoją wymowę]` → `[E:swoją] [B:wymowę]`、cs `[B:svou výslovnost]` → `[E:svou] [B:výslovnost]`、sk `[B:svoju výslovnosť]` → `[E:svoju] [B:výslovnosť]`
- #69 ru `[C|H:своим родителям]` → `[E:своим] [C:родителям]`、cs `[C|H:svým rodičům]` → `[E:svým] [C:rodičům]`、sl `[C|H:svojim staršem]` → `[E:svojim] [C:staršem]`
- bg enclitic `си`: #29 `[B:чадъра си]` → `[B:чадъра] [E:си]`、#52 `[B:портфейла си]` → `[B:портфейла] [E:си]`、#64 `[B:телефона си]` → `[B:телефона] [E:си]`、#86 `[B:смартфона си]` → `[B:смартфона] [E:си]`

これにより `свой` (再帰) vs `мой` (非再帰) の語彙対立、および bg `си` (enclitic 再帰) の存在が letter 単位で可視化される。

---

### 6. Hindi 再帰所有 `अपना/अपने/अपनी` の分節が文間で OWN/FUSED に分裂 【確実】

**Current — OWN (再帰所有が独立 letter):**
- #46 hi `[A:मैंने] [G:अपने] [B:दोस्त] [F:से] ...` (`अपने` を letter G で独立)
- #52 hi `[A:मैंने] [D:बाज़ार] [F:में] [E:अपना] [B:बटुआ] [C:खो] [H:दिया]` (`अपना` を letter E で独立)

**Current — FUSED:**
- #29 hi `[B:अपना छाता]` (`अपना` + `छाता` を letter B 一塊)
- #64 hi `[B:अपना फ़ोन]` (一塊)
- #69 hi `[C|H:अपने माता-पिता को]` (`अपने` + `माता-पिता` + 後置詞 `को` を C|H 複合)
- #71 hi `[B:अपना उच्चारण]` (一塊)
- #86 hi `[B:अपना स्मार्टफोन]` (一塊)
- #90 hi `[C:खुद]` (`खुद` 単独で再帰副詞、letter C で独立)

**Problem:** ヒンディー語の再帰所有 `अपना/अपने/अपनी` は **必須形式** (Kachru 2006 §6.3) で、Slavic `свой` と並行。**#46 で独立分節 `[G:अपने]`、#52 で独立分節 `[E:अपना]`** にする方針が示されているのに、それ以外の **6 文中 5 文で融合**。とくに #71 `[B:अपना उच्चारण]` と #46 `[G:अपने] [B:दोस्त]` は **同じ「再帰所有 + 名詞」構造**で扱いが分裂。

**Proposed:** 全 hi 再帰所有を独立分節に統一:
- #29 `[B:अपना छाता]` → `[E:अपना] [B:छाता]`
- #64 `[B:अपना फ़ोन]` → `[E:अपना] [B:फ़ोन]`
- #69 `[C|H:अपने माता-पिता को]` → `[E:अपने] [C:माता-पिता] [H:को]`
- #71 `[B:अपना उच्चारण]` → `[E:अपना] [B:उच्चारण]`
- #86 `[B:अपना स्मार्टफोन]` → `[E:अपना] [B:स्मार्टफोन]`

これで #46 #52 の方針が hi 全体に拡張され、Slavic 再帰所有 (指摘 5) と並行する形式整備が完成する。

---

### 7. 真性再帰動詞 (lexical reflexive) の **letter 配分が文ごとに不均衡** — 同じ動詞「結婚する」が #35 で言語別に B/B/A|B 等に分裂 【確実】

**Current:** #35 「兄は先月結婚した」:
- en `[B:got married]` (再帰なし、B = 動詞)
- fr `[B:s'est marié]` (再帰、B = 動詞句一塊)
- es_eu `[B:se casó]`、it `[B:si è sposato]`、pt_eu `[B:casou-se]`、pt_br `[B:se casou]` (Romance 再帰、B = 動詞句)
- ro `[B:s-a căsătorit]` (再帰 + 助動詞、B 一塊)
- ca `[B:es va casar]` (再帰 + 助動詞 + 不定詞、B 三塊)
- ru `[B:женился]` (再帰内蔵 `‐ся` を含む、B = 動詞)
- pl `[B:ożenił się]` (再帰小辞 `się` を含む、B 一塊)
- cs `[B:se oženil]`、sk `[B:sa oženil]` (再帰小辞 + 動詞、B 一塊)
- sr `[B:се оженио]`、bg `[B:се ожени]`、sl `[B:se je poročil]` (同上)
- de `[B:hat] [C:letzten] [D:Monat] [B:geheiratet]` (助動詞 hat と過去分詞 geheiratet を **両方 letter B、間に時間表現 C/D を挟む**、再帰なし)
- sv `[B:gifte sig]`、no `[B:giftet seg]` (Germanic 再帰、B 一塊)
- da `[B:blev gift]` (受動様、再帰なし)、is `[B:giftist]` (再帰内蔵)

**Problem:** 「結婚する」は **クロス言語的に最も典型的な再帰動詞 (reciprocal-reflexive, "marriage" = "mutual joining")** (Kemmer 1993, *The Middle Voice*, Ch. 5)。#35 では:
- すべての言語で **letter B に動詞句が割り当てられている**点は整合的。
- ただし fr `[B:s'est marié]` / it `[B:si è sposato]` / ca `[B:es va casar]` / sl `[B:se je poročil]` のように **再帰小辞 + 助動詞 + 過去分詞** という 3 形態素を **B 一塊**にしている一方、de `[B:hat] [...] [B:geheiratet]` では **助動詞 hat と本動詞 geheiratet を別 letter B 二か所**にしている (=「文中の他の要素 C/D が間に挟まる」言語固有の語順を尊重)。
- これは方針の不統一: **Romance は文中分散させず一塊、Germanic は分散**。

**Proposed:** **言語固有の語順を尊重しつつ、再帰小辞・助動詞・過去分詞を分節独立** に統一:
- fr `[B:s'est marié]` → `[B:s'] [H:est] [B':marié]` (再帰 s' 独立、助動詞 est を letter H、本動詞 marié を B')
- it `[B:si è sposato]` → `[B:si] [H:è] [B':sposato]`
- ca `[B:es va casar]` → `[B:es] [H:va] [B':casar]`
- sl `[B:se je poročil]` → `[B:se] [H:je] [B':poročil]`
- pl `[B:ożenił się]` → `[B':ożenił] [B:się]` (enclitic 順)
- de は現状 `[B:hat] [...] [B:geheiratet]` で OK だが、`[H:hat]` と `[B:geheiratet]` に分けて TAM 助動詞 hat を H に独立する方が良い (= #43 指摘 18 と整合)。

---

### 8. 「sit (down)」#68 — 再帰の有無で **letter 数が言語間で不均衡** 【確実】

**Current:** #68 「ここに座ってもいいですか？」:
- en `[D:Can] [A:I] [C:sit] [B:here]` (再帰なし、4 letter)
- fr `[D:Puis] [A:je] [C:m'asseoir] [B:ici]` (`m'` 再帰内蔵、4 letter)
- es_eu `[A:Yo] [D:puedo] [C:sentarme] [B:aquí]` (`-me` enclitic、4 letter)
- es_mx `[A:Yo] [D:me puedo] [C:sentar] [B:aquí]` (`me` proclitic + 助動詞、letter D に融合)
- it `[A:Io] [D:posso] [C:sedermi] [B:qui]` (enclitic)
- pt_eu `[A:Eu] [D:posso] [C:sentar-me] [B:aqui]` (enclitic with hyphen)
- pt_br `[A:Eu] [D:posso] [C:sentar] [B:aqui]` (**再帰なし — pt_br では sentar が他動詞化**)
- ro `[D:Pot] [C:să stau] [B:aici]` (補文 + 非再帰動詞 sta)
- ca `[D:Puc] [C:seure] [B:aquí]` (非再帰 seure)
- ru `[D:Можно] [A:мне] [C:сесть] [B:здесь]` (非再帰)
- cs `[D:Mohu] [C:si sednout] [B:sem]` (`si` 再帰小辞 + sednout、letter C 一塊)
- sk `[D:Môžem] [C:si sadnúť] [B:tu]` (同上)
- is `[D:Má] [A:ég] [C:setjast] [B:hér]` (`-st` 再帰内蔵)
- de `[D:Darf] [A:ich] [B:hier] [C:sitzen]` (非再帰)
- sv `[D:Får] [A:jag] [C:sitta] [B:här]` (非再帰)

**Problem:** 「座る」は **inchoative reflexive** (= 動作主が自分自身を座位に置く) の典型例で、Romance, Slavic (cs/sk `si`), Germanic (is `-st`) で再帰、Germanic (de/sv/no/da) と Slavic (ru/uk/pl/sr/bg/sl) で非再帰、という分布。データ上 **「再帰がある言語の再帰小辞をどう扱うか」が文によって違う**。#68 では:
- es_eu `[C:sentarme]` は enclitic を C に融合
- es_mx `[D:me puedo] [C:sentar]` は proclitic を D (助動詞) に融合 (**proclitic と enclitic で letter 配分が違う**)
- pt_br は **再帰を脱落** させて中性的に
- cs/sk `[C:si sednout/sadnúť]` は再帰小辞 + 動詞を C 一塊
- is `[C:setjast]` は接辞 -st を内蔵

これは syntactic position (proclitic vs enclitic) によって letter が変わるという #1 で指摘した問題の **inherent reflexive 版**。

**Proposed:** 再帰小辞を全文で letter B (1 人称代名詞用に予約) または新 letter E に独立分節:
- es_eu `[C:sentarme]` → `[C:sentar] [B:me]` (enclitic me を B に独立)
- es_mx `[D:me puedo] [C:sentar]` → `[D:puedo] [B:me] [C:sentar]` (proclitic me を B に独立、語順は維持)
- it `[C:sedermi]` → `[C:seder] [B:mi]`
- pt_eu `[C:sentar-me]` → `[C:sentar] [B:me]`
- fr `[C:m'asseoir]` → `[C:m'] [C':asseoir]` または `[B:m'] [C:asseoir]` (`m'` を B)
- cs `[C:si sednout]` → `[B:si] [C:sednout]`、sk `[C:si sadnúť]` → `[B:si] [C:sadnúť]`

---

### 9. 「wake up」#39 — `me lever / svegliarsi / mă trezesc / vakna / прокинутися` の再帰扱いが言語間で不均衡 【確実】

**Current:** #39 「明日は早く起きなければならない」:
- en `[D:wake up]`、fr `[D:me lever]`、es_eu `[D:levantarme]`、it `[D:svegliarmi]`、ro `[D:mă trezesc]`、ca `[D:llevar-me]`、nap `[D:scetarme]`、scn `[D:arrusbigghiàrimi]`、vec `[D:alzarme]`、oc `[D:me levar]`
- pt_eu `[D:acordar]`、pt_br `[D:acordar]`、gl `[D:espertar]` (非再帰)
- ru `[D:проснуться]`、uk `[D:прокинутися]` (`‐ся` 内蔵)、cs/sk `[D:vstát/vstať]`、pl `[D:wstać]` (非再帰)
- sl `[D:vstati]`、sr `[D:да устанем]`、bg `[D:да стана]` (非再帰)
- de `[D:aufstehen]`、nl `[D:opstaan]`、sv `[D:stiga upp]`、no `[D:stå opp]`、da `[D:stå op]`、is `[D:vakna]` (非再帰)
- fy `[D:wekker wurde]` (受動様 "become awake")、af `[D:opstaan]`、nds `[D:oppstahn]`

**Problem:** 「起きる」は **inchoative reflexive** (= 自分を起こす) で、Romance 全言語で再帰、Slavic (ru/uk) で再帰、Germanic で非再帰という分布。データ上 **Romance の `me/-me/mi/mă` を全部 letter D に融合**しており、再帰の有無が letter 単位で見えない。#46/#39 を並べると:
- #46 fr `[E:ai] [H:parlé]` (TAM 助動詞 ai を H に独立) ← 整合的
- #39 fr `[D:me lever]` (再帰 me を D に融合) ← 不整合 — 同じ動詞句で TAM は独立、再帰は融合

**Proposed:** 再帰要素を letter B (代名詞用) に独立:
- fr `[D:me lever]` → `[B:me] [D:lever]`
- es_eu `[D:levantarme]` → `[D:levantar] [B:me]`
- it `[D:svegliarmi]` → `[D:svegliar] [B:mi]`
- ro `[D:mă trezesc]` → `[B:mă] [D:trezesc]`
- ca `[D:llevar-me]` → `[D:llevar] [B:me]`

---

### 10. 「forget」#29 — Romance で `me olvidé/me/esqueci-me/mi-am uitat` が **すべて letter C に融合** [Spanish DAT-EXP construction] 【確実】

**Current:** #29 「電車に傘を忘れてしまった」:
- en `[C:forgot]` (非再帰)
- fr `[C:ai oublié]` (非再帰、ただし passé composé で TAM 不分節 — #43 指摘 9)
- es_eu `[C:me olvidé]` (再帰、me + 動詞融合)
- es_mx `[C:se me olvidó]` (**3 形態素**: 再帰 se + 与格 me + 動詞 olvidó、すべて C に融合)
- it `[C:ho dimenticato]` (非再帰)
- pt_eu `[C:esqueci-me]` (enclitic me)
- pt_br `[C:esqueci]` (非再帰)
- ro `[C:mi-am uitat]` (与格 mi + 助動詞 am + 過去分詞 uitat)
- ca `[C:em vaig oblidar]` (再帰 em + 助動詞 vaig + 不定詞 oblidar)
- nap `[C:aggio scurdato]` (非再帰)、scn `[C:scurdai]` (非再帰)、vec `[C:desmentegà]` (非再帰)、gl `[C:esquecín]` (非再帰)

**Problem:** スペイン語 `olvidarse` は **dative-experiencer construction** (Maldonado 1992; "the umbrella forgot itself to me") で、`se me olvidó` の三形態素 `se` (anti-causative) + `me` (dative experiencer) + `olvidó` (3sg past) は **典型的な se 構文の見本**。これを `[C:se me olvidó]` 一塊にしているのは語学教材として深刻な情報損失。
- さらに es_eu `[C:me olvidé]` (1sg 再帰) と es_mx `[C:se me olvidó]` (3sg 中動態) は **異なる構文**を採用しているが、両方とも letter C 一塊で違いが見えない。
- ro `[C:mi-am uitat]` も与格 mi + 助動詞 am + 過去分詞 uitat の 3 形態素複合。

**Proposed:**
- es_mx `[C:se me olvidó]` → `[C:se] [B:me] [C':olvidó]` (anti-causative se を C、dative me を B、動詞を C')
- es_eu `[C:me olvidé]` → `[B:me] [C:olvidé]`
- pt_eu `[C:esqueci-me]` → `[C:esqueci] [B:me]`
- ro `[C:mi-am uitat]` → `[B:mi-] [H:am] [C:uitat]` (与格 mi B、助動詞 am H、過去分詞 uitat C)
- ca `[C:em vaig oblidar]` → `[B:em] [H:vaig] [C:oblidar]`

---

### 11. 「each other / reciprocal」 — 該当文不在だが、#35「結婚する」の reciprocal-reflexive 性が letter B 一塊化で透明化 【蓋然】

**Current:** #35「兄は先月結婚した」では fr `s'est marié` / it `si è sposato` の `s'/si` は **形式的に再帰** (REFL) だが、意味的には **reciprocal** (= 双方互いに結婚する、Kemmer 1993 §5.2 の "naturally reciprocal events")。

**Problem:** König & Gast 2008 は reciprocal を reflexive と区別し、Romance では「naturally reciprocal events」(= 結婚、合意、握手、戦う等) で再帰形が reciprocal の意味を担うと記述。本データでは reciprocal を含む文は #35 が唯一 (sit, learn, wash, dress 等は自己指向再帰)。
- データ上 `s'/si` は **すべて letter B (動詞) に融合**されており、reciprocal の存在が letter 単位で見えない (指摘 7 の問題と同一)。

**Proposed:** 指摘 7 と同一の対処 — `s'/si/se` を letter B から分離し、独立分節。reciprocal の場合の意味注記は別途 hover tooltip 等で補えば良い。

---

### 12. 「feel happy」#76 — 全 Germanic で **再帰代名詞 + 感情動詞 + 形容詞**の 3 形態素を D 一塊化 【確実】

**Current:** #76 「音楽を聴くと幸せな気持ちになる」:
- en `[D:feel happy]` (非再帰)、en_aave `[D:feel happy]`
- fr `[D:me sens heureux]`、es_eu `[D:Me siento feliz]`、it `[D:Mi sento felice]`、pt_br `[D:Me sinto feliz]`、ro `[D:Mă simt fericit]`、ca `[D:Em sento feliç]`、nap `[D:Me sento felice]`、scn `[D:Mi sentu filici]`、oc `[D:me sènti urós]`、gl `[D:Síntome feliz]` (Romance 全部 letter D 一塊)
- ru `[D:чувствую себя счастливым]` (再帰代名詞 себя + 動詞 + 形容詞、letter D 一塊)
- uk `[D:почуваюся щасливим]` (再帰内蔵 + 形容詞)
- pl `[D:czuję się szczęśliwy]`、cs `[D:Cítím se šťastný]`、sk `[D:Cítim sa šťastný]`、sr `[D:Осећам се срећно]`、bg `[D:Чувствам се щастлив]`、sl `[D:sem vesel]` (非再帰)
- de `[D:fühle mich glücklich]`、nl `[D:voel me gelukkig]`、sv `[D:känner mig glad]`、no `[D:føler meg glad]`、da `[D:føler mig glad]`、fy `[D:fiel my bliid]`、af `[D:voel gelukkig]` (非再帰)、de_gsw `[D:füele mi glücklich]`、de_at `[D:fühl i mi]` (`i` = ich、`mi` = mich、letter E + D 混在)
- nds `[D:föhl ik mi]` (語順倒置)

**Problem:** 「自分が幸せだと感じる」は **emotional middle voice** (Kemmer 1993 §3.2.2) で、ほぼ全言語が再帰構文を採用。データ上は **全 Romance/Germanic で「再帰代名詞 + 感情動詞 + 形容詞」を letter D 一塊**にしており、これは 3 形態素を 1 letter に圧縮する重大な情報損失。とくに de_at `[D:fühl i mi]` は **主語 i (= ich) と再帰 mi (= mich) と動詞 fühl が letter D に混在** し、letter A (主語) との一貫性が破綻。

**Proposed:** 再帰代名詞 + 動詞 + 形容詞を 3 letter に分解:
- fr `[D:me sens heureux]` → `[B:me] [D:sens] [D':heureux]`
- it `[D:Mi sento felice]` → `[B:Mi] [D:sento] [D':felice]`
- ru `[D:чувствую себя счастливым]` → `[D:чувствую] [B:себя] [D':счастливым]` (再帰代名詞 себя を B、形容詞 счастливым を D')
- pl `[D:czuję się szczęśliwy]` → `[D:czuję] [B:się] [D':szczęśliwy]`
- de `[D:fühle mich glücklich]` → `[D:fühle] [B:mich] [D':glücklich]`
- sv `[D:känner mig glad]` → `[D:känner] [B:mig] [D':glad]`
- de_at `[D:fühl i mi]` → `[A:i] [D:fühl] [B:mi]` (主語を A に戻し、letter A の整合確保)

---

### 13. 「learn (to)」#22 / #60 / #75 — `lära mig / se učit / nauczyć się` の再帰扱いが文・言語間で完全に不均衡 【確実】

**Current — #22 (I want to learn a new language):**
- sv `[D:lära mig]` (Germanic 再帰 lära sig "learn for oneself")
- cs `[E:Chci se]` + `[D:naučit]` (再帰小辞 se は E に独立)
- pl `[D:nauczyć się]` (D 一塊)
- sk `[D:sa naučiť]` (D 一塊、proclitic sa)
- sl `[E:se želim]` + `[D:naučiti]` (再帰 se は希望動詞 želim と E 一塊、本動詞 naučiti は D)

**Current — #60 (I'm learning Korean cooking):**
- sv `[D:lär mig]` (D 一塊)
- ru `[D:учусь]` (`‐ся` 内蔵、D)
- uk `[D:вчуся]` (同上)
- pl `[A:Uczę się]` (再帰 + 動詞を主語 letter A に圧縮、**主語不在の pro-drop なのに A に動詞句**)
- cs `[D:se učím]`、sk `[D:sa učím]`、sl `[D:se učim]` (D 一塊)

**Current — #75 (children are learning to swim):**
- sv `[C:lär sig]` (C 一塊)
- ru `[C:учатся]`、uk `[C:вчаться]` (`‐ся` 内蔵、C)
- pl `[C:uczą się]`、cs `[C:se učí]`、sk `[C:sa učia]`、sl `[C:se učijo]` (C 一塊)

**Current — #90 (he learned programming by himself):**
- sv `[D:har lärt sig]` (D 一塊)
- no `[D:har lært seg]` (D 一塊)
- ru `[D:научился]` (`‐ся` 内蔵)
- pl `[D:nauczył się]`、cs `[D:se naučil]`、sk `[D:sa naučil]`、sl `[D:se je naučil]` (D 一塊)

**Problem:** 「学ぶ (learn for oneself)」は **acquisitive middle voice** (Kemmer 1993 §3.2.3) で、Slavic と Scandinavian で **必須再帰**。データ上、**同じ動詞「学ぶ」が #22/#60/#75/#90 で完全に異なる扱い**を受けている:
- #22 cs `[E:Chci se]` (再帰 se を E に分離、希望動詞 chci と一塊化)
- #60 cs `[D:se učím]` (再帰 se を D に融合)
- #75 cs `[C:se učí]` (同じ動詞、letter C 融合)
- #90 cs `[D:se naučil]` (D 融合、ただし接頭辞 na- 付き perfective)

**4 つの異なる letter (C/D/E)** に同じ「学ぶ + 再帰」がバラバラに割り当てられている。さらに #60 pl `[A:Uczę się]` は **主語 (pro-drop) なのに動詞句を letter A に置く** という #43 指摘 22 と並行する letter A 用法の濫用。

**Proposed:** Slavic「学ぶ + 再帰」の letter 統一案:
- #22 cs `[E:Chci se] [D:naučit]` → `[E:Chci] [B:se] [D:naučit]` (希望動詞 chci E、再帰 se B、本動詞 naučit D)
- #60 cs `[D:se učím]` → `[B:se] [D:učím]`、sk `[D:sa učím]` → `[B:sa] [D:učím]`、sl `[D:se učim]` → `[B:se] [D:učim]`
- #60 pl `[A:Uczę się]` → `[D:Uczę] [B:się]` (letter A は主語専用、ここでは pro-drop で省略可)
- #75 cs `[C:se učí]` → `[B:se] [C:učí]`、sk `[C:sa učia]` → `[B:sa] [C:učia]`
- #90 cs `[D:se naučil]` → `[B:se] [D:naučil]`、sk `[D:sa naučil]` → `[B:sa] [D:naučil]`

Scandinavian も並行:
- #22 sv `[D:lära mig]` → `[D:lära] [B:mig]`
- #60 sv `[D:lär mig]` → `[D:lär] [B:mig]`
- #75 sv `[C:lär sig]` → `[C:lär] [B:sig]`
- #90 sv `[D:har lärt sig]` → `[D:har lärt] [B:sig]`、no `[D:har lært seg]` → `[D:har lært] [B:seg]`

---

### 14. 「by himself / par lui-même / khud」#90 — 再帰副詞 (intensifier) の letter 配分が言語間で不均衡 【確実】

**Current:** #90「彼は独学でプログラミングを学んだ」:
- en `[C:by himself]` (`himself` = intensifier reflexive)
- fr `[C:par lui-même]`、es_eu `[C:por su cuenta]`、es_mx `[C:por sí mismo]`、it `[C:da solo]`、pt_eu `[C:por conta própria]`、pt_br `[C:sozinho]`、ro `[C:singur]`、ca `[C:sol]`、nap `[C:pe cunto suoio]`、scn `[C:di sulu]`、vec `[C:da solo]`、oc `[C:sol]`、gl `[C:por si mesmo]`
- ru `[C:самостоятельно]` (副詞)、uk `[C:самостійно]`、pl `[C:sam]`、cs `[C:sám]`、sk `[C:sám]`、sr `[C:самостално]`、bg `[C:сам]`、sl `[C:sam]`
- de `[C:selbst]`、nl `[C:zelf]`、sv `[C:själv]`、no `[C:selv]`、da `[C:selv]`、is `[C:sjálfur]`、fy `[C:op eigen hân]`、af `[C:op sy eie]`、nds `[C:sick sülvst]`、de_gsw `[C:sälber]`、de_at `[C:selber beigebracht]` (再帰 + 動詞融合)
- hi `[C:खुद]`、ko `[C:혼자서]`、ja `[C:独学で]`、ar `[C:بنفسه]`、he `[C:בכוחות עצמו]`、tr `[C:kendi başına]`、el `[C:μόνος του]`

**Problem:** **すべての言語で letter C に「by himself」を割り当てる方針は整合的**だが、内訳に注目すると:
- 単一語 `selbst/sam/själv/खुद` (Germanic/Slavic/Indic) と 句 `par lui-même / por sí mismo / pe cunto suoio` (Romance) で **形態的長さが極端に違う**のに同じ letter C 一塊。
- とくに **de_at `[C:selber beigebracht]`** は再帰副詞 selber と動詞 beigebracht を C 一塊にしており、letter D (動詞用) に動詞要素が漏れている。
- **nds `[C:sick sülvst]`** は再帰代名詞 sick + 再帰副詞 sülvst の二重再帰構成 (König & Gast 2008 の "intensifier + reflexive" 重ね合わせ) — これは独立分節すべき。

**Proposed:**
- de_at `[C:selber beigebracht]` → `[C:selber] [D:beigebracht]` (副詞と動詞分離)
- nds `[C:sick sülvst]` → `[B:sick] [C:sülvst]` (再帰代名詞 sick を B、強意副詞 sülvst を C)
- 他の単一語副詞 (selbst/sam/själv) は現状維持。

---

### 15. 「his parents」#69 — Slavic 再帰所有 + 名詞 + 与格後置詞の 3 形態素を `[C|H:...]` 複合表記で逃避 【確実】

**Current:** #69「彼は両親に長い手紙を書いた」:
- en `[H:to] [C:his parents]` (前置詞 H + 所有句 C、分割済)
- fr `[H:à] [C:ses parents]`、it `[H:ai] [C:suoi genitori]`、es_eu `[H:a] [C:sus padres]` (Romance 分割済)
- pt_eu `[H:aos] [C:seus pais]`、pt_br `[H:para] [C:os pais]` (pt_br は所有なし)
- ro `[C:părinților săi]` (与格名詞 + 再帰所有 săi、letter C 一塊)
- ru `[C|H:своим родителям]` (再帰所有 свой + 与格名詞、複合 letter)
- uk `[C|H:батькам]` (与格名詞のみ、所有なし)
- pl `[C|H:do rodziców]` (前置詞 do + 名詞、所有なし)
- cs `[C|H:svým rodičům]` (再帰所有 svým + 与格名詞)
- sk `[C|H:rodičom]` (与格名詞、所有なし)
- sr `[C|H:родитељима]` (与格名詞、所有なし)
- bg `[H:на] [C:родителите си]` (**唯一 bg だけが前置詞 + 名詞 + 再帰所有 си を分割**)
- sl `[C|H:svojim staršem]` (再帰所有 + 与格名詞)
- de `[H:an] [C:seine Eltern]` (前置詞 + 所有句、分割)
- hi `[C|H:अपने माता-पिता को]` (再帰所有 + 名詞 + 後置詞 को、複合)
- ko `[C:부모님] [H:‌에게]` (名詞 + 与格 ZWNJ、分割)
- ja `[C:両親] [H:に]` (名詞 + 与格、分割)
- ar `[H:إلى] [C:والديه]` (前置詞 + 所有名詞)
- tr `[C|H:ailesine]` (家族 + 与格、複合)

**Problem:** `[C|H:...]` の **複合 letter 表記**は「letter C と H を併合」する苦肉策で、データ全体で 多用されている。指摘 #43 の指摘 6 と並行して、本指摘では **bg だけが正解**を出しており、他の Slavic / Indic / Turkish で:
- 前置詞・後置詞 (H = 移転先) と
- 名詞 (C = 受取人) と
- 再帰所有 (E = 再帰所有、提案)

の 3 要素を 1 letter 複合にしている。

**Proposed:** bg のパターンを Slavic 全体に拡張、hi/tr は形態的に分離可能な部分を分割:
- ru `[C|H:своим родителям]` → `[E:своим] [H:к] [C:родителям]` (与格は前置詞なしの場合 [C:родителям] のみ)
- cs `[C|H:svým rodičům]` → `[E:svým] [C:rodičům]`
- sl `[C|H:svojim staršem]` → `[E:svojim] [C:staršem]`
- hi `[C|H:अपने माता-पिता को]` → `[E:अपने] [C:माता-पिता] [H:को]` (再帰所有 E、名詞 C、後置詞 H)
- tr `[C|H:ailesine]` → `[C:aile] [H:‌sine]` (語幹 aile + 与格後置 -sine を ZWNJ で分離)
- ro `[C:părinților săi]` → `[C:părinților] [E:săi]` (名詞 + 再帰所有後置代名詞)

---

### 16. 「the doctor told me to rest myself」#82 — 全 Slavic で **使役・命令補文 + 再帰**が letter C 一塊化 【確実】

**Current:** #82「医者は私に休むよう言った」:
- en `[C:to rest]`、fr `[C:de me reposer]` (再帰)、it `[C:di riposarmi]` (enclitic)、es_eu `[C:que descansara]` (非再帰補文)、pt_eu `[C:para descansar]` (非再帰)、ro `[C:să mă odihnesc]` (再帰)、ca `[C:que descansés]` (非再帰)
- ru `[C:отдохнуть]` (非再帰)、cs `[C:abych odpočíval]` (非再帰)、sk `[C:aby som si odpočinul]` (`si` 再帰小辞 + 動詞融合)、sr `[C:да одморим]` (非再帰)、bg `[C:да си почина]` (`си` 再帰 + 動詞)、sl `[C:naj počivam]` (非再帰)
- de `[C:ich solle mich ausruhen]` (補文主語 ich + 助動詞 solle + 再帰 mich + 動詞 ausruhen の 4 形態素を C 一塊)
- nl `[C:ik moest rusten]` (補文主語 ik + 助動詞 moest + 動詞、3 形態素 C 一塊)
- sv `[C:att vila]` (非再帰)、no `[C:at jeg burde hvile]` (補文主語 jeg + 助動詞 burde + 動詞)、da `[C:at hvile mig]` (補文 + 再帰 mig)、is `[C:að hvílast]` (`-st` 再帰)
- fy `[C:om te rêsten]` (非再帰)
- nds `[B:ik schall mi utruh'n]` (補文全体を letter B、re帰 mi + 動詞 utruh'n)、de_gsw `[C:ich söll mi usruehe]`、de_at `[B:i soll mich ausrasten]` (上記同様)

**Problem:** 本文は **間接話法 + 再帰** の典型で、Slavic/Germanic では **補文標識 (то/aby/dass/that) + 補文主語 + 助動詞 + 再帰 + 本動詞** の最大 5 形態素を 1 letter に圧縮している。とくに de `[C:ich solle mich ausruhen]` は補文の主語 ich を letter C に埋没させており、letter A (主節主語) の整合性を破壊。さらに #82 fr で示した指摘 3 の **同一文 me 二重出現** と並行して、他言語でも補文内 me/mich/mi/си が letter C に融合。

**Proposed:**
- de `[C:ich solle mich ausruhen]` → `[A':ich] [E:solle] [B:mich] [C:ausruhen]` (補文主語 A'、助動詞 E、再帰 B、本動詞 C)
- nl `[C:ik moest rusten]` → `[A':ik] [E:moest] [C:rusten]`
- de_at `[B:i soll mich ausrasten]` → `[A':i] [E:soll] [B:mich] [C:ausrasten]`
- bg `[C:да си почина]` → `[C:да] [B:си] [C':почина]`
- sk `[C:aby som si odpočinul]` → `[C:aby] [H:som] [B:si] [C':odpočinul]`
- ro `[C:să mă odihnesc]` → `[C:să] [B:mă] [C':odihnesc]`

---

### 17. en `myself` 系 — **唯一の再帰代名詞出現 #90 で letter C 内に「by + himself」一塊化** 【確実】

**Current:**
- en の `-self` 系再帰代名詞は **100 文中ほぼ唯一 #90 で `[C:by himself]`** に出現
- #90 en_aave `[C:by himself]` — 同じ表現

**Problem:** 英語 `himself` は **intensifier (強意) 用法** (König & Gast 2008 Ch.1) で、`by + himself` は副詞句として PIVOT 機能を持つ。データ上 `by himself` を C 一塊にしているのは整合的だが、**`by` (前置詞) と `himself` (再帰代名詞) を分節独立しない方針が #46 #49 等での `with/to + noun` 分節 (`[F:with] [G:my] [B:friend]`) と矛盾**。

**Proposed:**
- en #90 `[C:by himself]` → `[C:by] [C':himself]` または `[F:by] [C:himself]` (新 letter F)
- これは指摘 14 の「全言語 letter C 統一」を維持しつつ、英語側だけ前置詞分節を細分化する案。整合性のため指摘 14 と合わせて検討。

---

### 18. ko 「혼자서」 #90 vs 「자기」 #76 — 韓国語再帰の **letter 割当て**の透明性 【蓋然】

**Current:**
- #90 ko `[C:혼자서]` (`혼자` = 一人で、`서` = ablative 副詞化、letter C で副詞独立)
- #76 ko `[D:행복함을 느낀다]` (再帰なし、letter D に動詞句一塊)
- #82 ko `[C:쉬라고]` (`쉬다` rest + `라고` 補文標識、letter C 一塊)

**Problem:** 韓国語は **真性再帰代名詞 자기/자신/저** を持つが、本データ 100 文では **ほぼ出現しない** (#82 で `나에게` 1 人称与格、#90 で `혼자서` 副詞のみ)。これは「題材文に再帰構文が含まれない」だけだが、Romance/Slavic と並行する re帰構文をデモするには **#76 (feel happy) で「자기 자신을 행복하다고 느낀다」**等の表現を導入すべき (これは語彙選択の問題で射程外)。
- 現状で問題なのは #90 `[C:혼자서]` の `서` (副詞化接尾辞) を **ZWNJ で分節しない**こと: `[C:혼자] [C':‌서]` のように分割すべき (memory `feedback_glue_marker.md` の Korean 規約)。

**Proposed:**
- #90 ko `[C:혼자서]` → `[C:혼자] [C':‌서]` (ZWNJ プレフィックス付きで `서` を独立)、もしくは現状維持で「副詞語化された一語」として許容。

---

### 19. ja 「自分」「自身」— **100 文中ゼロ出現**、再帰の透明化 【要検討】

**Current:** 全 100 文の ja を再帰代名詞 `自分/自身/おのれ/我` で検索した結果、**該当ゼロ**。

**Problem:** 日本語は **再帰代名詞 「自分」** を頻用するが、データ上は再帰構文を **すべて態 (voice) や受身で逃げ**ている:
- #90 ja `[C:独学で]` (「自分で」を「独学で」に置換)
- #29 ja `[C:忘れてしまった]` (再帰なし、完了アスペクト「てしまう」で代用)
- #84 ja `[C:ひいた]` (再帰なし)
- #82 ja `[C:休むよう]` (補文、再帰なし)

これは ja が再帰要素を **省略 (pro-drop) するか文法化された形式で吸収**するためで、現状維持で問題なし。ただし #90 ja「独学で」 と en「by himself」 の対応では、ja 側に再帰代名詞が現れないため学習者は **「日本語は再帰がない」と誤解**する可能性。これは語彙選択の問題で射程外だが、closed-review で「再帰構文を持つ追加例文 (例: 自分を責める / 自分で決める)」を提案する余地あり。

**Proposed:** (本指摘は方針提案のみ、データ修正なし)
- closed-review #48 に「ja 再帰代名詞 自分 / 自身 を含む例文の追加を検討」と記録。

---

### 20. is 「leika sér」 #26 / 「giftist」 #35 / 「kvefaðist」 #84 / 「talaði」 #46 — `-st` 再帰中態の扱いが文間で不均衡 【確実】

**Current — `-st` 再帰中態 (アイスランド語、middle voice marker):**
- #26 is `[C:leika sér]` (sér = 再帰代名詞独立、letter C 一塊)
- #35 is `[B:giftist]` (`-st` 内蔵)
- #46 is `[E|H:talaði]` (非再帰)
- #75 is `[C:eru að læra]` (非再帰)
- #76 is `[D:líður vel]` (非再帰)
- #79 is `[B:er leið]` (非再帰)
- #82 is `[C:að hvílast]` (`-st` 内蔵)
- #83 is `[C:hreyfa mig]` (`mig` 独立)
- #84 is `[B|C:kvefaðist]` (`-st` 内蔵、複合 letter)
- #90 is `[C:sjálfur]` (intensifier、独立)

**Problem:** アイスランド語 `-st` は **古ノルド語 `sik` (再帰代名詞) の語尾退化形** (Faarlund 2004, *The Syntax of Old Norse*, §6.6) で、共時的にも形態論的に動詞語幹 + `-st` の二形態素に分解可能。データ上は **#26 では sér を独立 (letter C 内で sér が認識可能)、#35/#82/#84 では `-st` 接辞を融合**しているが、これは:
- 古い再帰代名詞 sér が独立形のまま残存している場合 → 独立分節
- 文法化された接辞 -st の場合 → 融合

という二段階の歴史的層を反映している。これは形態論的に正当だが、データ上 #84 `[B|C:kvefaðist]` のように **複合 letter で逃避** している例があり、不整合。

**Proposed:**
- #84 is `[B|C:kvefaðist]` → `[B:kvefað] [C:‌ist]` (ZWNJ で `-ist` 接辞を独立) または `[B|C:kvefaðist]` 現状維持で `-st` 内蔵を許容。
- #82 is `[C:að hvílast]` → `[C:að hvíla] [C':‌st]` (補文標識 að + 動詞 hvíla + 再帰 -st)

---

### 21. el 再帰 `μου / σου / του` の独立分節が文・言語間で不均衡 【蓋然】

**Current:**
- #19 el `[D:μου αρέσει]` (`μου` = 与格 1sg、letter D 一塊)
- #24 el `[B:μου]` (与格独立、letter B)
- #46 el `[G:μου]` (所有後置代名詞、letter G)
- #49 el `[B:μου]` (与格独立、letter B)
- #50 el `[E:μου]` (所有後置、letter E)
- #65 el `[E:μου έδωσε]` (与格 + 動詞、letter E 一塊)
- #82 el `[B:μου]` (与格独立、letter B)
- #86 el `[B:το κινητό μου]` (定冠詞 + 名詞 + 所有後置、letter B 一塊)
- #90 el `[C:μόνος του]` (intensifier + 所有後置、letter C 一塊)

**Problem:** 現代ギリシャ語 `μου` は **与格機能 / 所有後置代名詞** の両用で、Holton et al. 2012 *Greek: A Comprehensive Grammar*, §2.8 によれば常に **proclitic (与格) または enclitic (所有)**。データ上、**与格 μου は #24/#49/#82 で letter B 独立**だが、**所有 μου は #46/#50/#86/#90 で letter B/E に融合**。これは syntactic 機能による letter 分配のばらつきで、指摘 1 (Romance クリティック) と同じ問題を el で再生。

**Proposed:** el の与格 μου と所有 μου を統一的に letter B (代名詞専用) に独立:
- #46 el `[G:μου]` → 現状維持 (所有後置で独立済) OK
- #50 el `[E:μου]` → 現状維持 OK
- #65 el `[E:μου έδωσε]` → `[B:μου] [E:έδωσε]` (与格 μου B、動詞 E)
- #86 el `[B:το κινητό μου]` → `[B:το κινητό] [E:μου]` (名詞 + 所有後置を分離)
- #90 el `[C:μόνος του]` → `[C:μόνος] [E:του]`

---

### 22. ar 再帰 `نفس + 所有` (`بنفسه / نفسي / نفسه`) の独立分節 【蓋然】

**Current:**
- #90 ar `[C:بنفسه]` (`ب` 前置詞 + `نفس` 「自身」 + `ه` 3sgm 所有、letter C 一塊)
- 他の文ではほぼ出現せず

**Problem:** アラビア語の再帰名詞 `نفس` (nafs "self") は所有接尾辞と組み合わせて再帰代名詞を形成 (`نفسي` = 自分、`نفسك` = あなた自身、`نفسه` = 彼自身) (Holes 2004 §6.5)。`ب + نفس + ه` の三形態素を letter C 一塊にしているのは指摘 14 と並行する問題。

**Proposed:**
- #90 ar `[C:بنفسه]` → `[C:ب] [C':نفسه]` または `[F:ب] [C:نفسه]` (前置詞分離)
- 他の文では出現せず、closed-review で追加例文を検討。

---

### 23. tr 再帰 `kendi` — **100 文中ほぼゼロ出現**、#90 `[C:kendi başına]` のみ 【要検討】

**Current:**
- #90 tr `[C:kendi başına]` (`kendi` = 再帰、`başına` = 頭・自分で、letter C 一塊)
- 他では一切出現せず

**Problem:** トルコ語の再帰代名詞 `kendi` (Lewis 1967 §13) は **必須形式** で、データ上 #90 のみ。これは題材文の選択偏向。
- `kendi başına` (彼自身の頭で = by himself) は **イディオム** で、kendi + baş (head) + -ı (3sgm 所有) + -na (与格) の四形態素複合。

**Proposed:**
- #90 tr `[C:kendi başına]` → `[C:kendi] [C':başına]` または `[C:kendi] [C':baş] [C'':‌ına]` (ZWNJ で接尾辞分離)

---

### 24. 「Wackernagel position」 — Slavic 再帰小辞の **文中位置 (V2 後・接続詞後) が letter 割当てに反映されない** 【要検討】

**Current:** Wackernagel 位置 (= 文の第二位置に置かれるクリティック群) を持つ Slavic 諸語で、再帰小辞 `se/się/sa` は文中で動詞と離れた位置に出現することがある:
- #22 cs `[E:Chci se] [D:naučit]` (`se` が希望動詞 chci の直後、本動詞 naučit から離れた位置、letter E 一塊)
- #22 sk `[A:Ja] [E:chcem] [D:sa naučiť]` (`sa` が本動詞 naučiť の直前)
- #79 sl `[D:se je njena prijateljica] [E:preselila]` (`se` が letter D の冒頭、本動詞は letter E)
- #84 sr `[B|C:се прехладила]` (`се` が complex letter)

**Problem:** Wackernagel position は **syntactic constraint** であり、`se` が本動詞からどれだけ離れて出現するかは言語ごと文ごとに違う。データ上、**`se` を本動詞と同じ letter に置く方針**を取ると、cs `[E:Chci se]` のように本動詞 naučit と別 letter になり、**re帰の所属が透明化**。逆に **`se` を独立 letter (例: B = 代名詞) に置く**と、文中の物理的位置を保ったまま再帰要素を独立できる。

**Proposed:** 指摘 1, 2, 13 と並行して **Slavic 再帰小辞を letter B (代名詞専用) に独立** することで Wackernagel 位置問題は自動解決:
- #22 cs `[E:Chci se] [D:naučit]` → `[E:Chci] [B:se] [D:naučit]`
- #22 sk `[D:sa naučiť]` → `[B:sa] [D:naučiť]`
- #79 sl `[D:se je njena prijateljica]` → `[B:se] [H:je] [D:njena prijateljica]`

---

### 25. 「impersonal se」(unspecified subject) — #93 「祭りが開催される」の Romance/Slavic se-passive 【確実】

**Current:** #93「この国では夏に多くの祭りが開催される」:
- en `[G:are held]` (be-passive)
- fr `[G:sont organisés]`、it `[G:vengono organizzati]`、pt_br `[G:são realizados]`、ro `[G:se organizează]` (Romance se-passive)
- es_eu `[G:se celebran]`、es_mx `[G:se celebran]`、ca `[G:se celebren]` (Romance se-passive)
- pt_eu `[G:realizam-se]` (enclitic se-passive)
- gl `[G:celébranse]` (enclitic se-passive)
- ru `[G:проводится]` (`‐ся` passive)、uk `[G:проводиться]`、pl `[G:odbywa się]`、cs `[G:se koná]`、sk `[G:sa koná]`、sr `[G:се одржава]`、bg `[G:се провеждат]`、sl `[G:se odvija]` (Slavic se-passive)
- de `[G:werden] [...] [G:abgehalten]` (werden-passive、letter G 二か所、間に E/F)
- nl `[G:worden] [...] [G:gehouden]`、sv `[G:hålls]` (s-passive)、no `[G:holdes]`、da `[G:afholdes]`、is `[G:eru] [...] [G:haldnir]`、af `[G:word] [...] [G:gehou]`、nds `[G:ward] [...] [G:afhollen]`

**Problem:** Romance se-passive (`se celebran` = "are celebrated", lit. "[they] celebrate themselves") と Slavic se-passive (`проводится` = "is conducted") はどちらも **se/‐ся を passive voice marker** に転用したもの (Belletti 1982; Siewierska 1984)。これらを letter G 一塊にしているのは整合的だが、**Romance se と Slavic ‐ся は形態論的に独立可能**で、letter 内で分節する余地がある:
- es_eu `[G:se celebran]` → `[G:se] [G':celebran]` (passive marker と動詞を分離)
- ru `[G:проводится]` → `[G:проводит] [G':‌ся]` (動詞語幹 + 接辞)
- pl `[G:odbywa się]` → `[G:odbywa] [G':się]`

ここで重要なのは:
- Germanic werden-passive (`werden ... abgehalten`) と Romance se-passive (`se celebran`) は **構文的に異なる** (前者は分析形 auxiliary + past participle、後者は medio-passive)
- それぞれを letter G で統一しているのは voice の機能的等価を捉えていて良い
- しかし **se / ‐ся の独立分節**を入れると、Romance の `se` が他の文 (#26 ro `[C:se joacă]` reflexive、#79 `[E:se mudó]` inchoative reflexive、#93 `[G:se celebran]` passive) でどう使い分けられているかが視覚的に分かる。

**Proposed:**
- Romance se-passive: #93 es_eu `[G:se celebran]` → `[G:se] [G':celebran]`、es_mx 同じ、ca `[G:se celebren]` → `[G:se] [G':celebren]`、pt_eu `[G:realizam-se]` → `[G:realizam] [G':se]`、ro `[G:se organizează]` → `[G:se] [G':organizează]`、gl `[G:celébranse]` → `[G:celébran] [G':se]`
- Slavic se-passive: ru `[G:проводится]` → `[G:проводит] [G':‌ся]` (ZWNJ なしで `ся` 接辞分離)、uk 同じ、pl `[G:odbywa się]` → `[G:odbywa] [G':się]`、cs `[G:se koná]` → `[G:se] [G':koná]`、sk `[G:sa koná]` → `[G:sa] [G':koná]`、sr `[G:се одржава]` → `[G:се] [G':одржава]`、bg `[G:се провеждат]` → `[G:се] [G':провеждат]`、sl `[G:se odvija]` → `[G:se] [G':odvija]`

これにより、`se` の **reflexive / reciprocal / passive / medio-passive** の 4 機能が letter 単位で識別可能になる (Kemmer 1993 の middle voice 連続体)。

---

## 統計サマリ

| 指摘 | 主な対象言語 | 影響セル数 (概算) | 確信度 |
|------|--------------|------------------|--------|
| 1 | fr/es/it/pt/ro/ca + nap/scn/vec/oc/gl | ~80 | 確実 |
| 2 | pl/cs/sk/sr/bg/sl/ro | ~50 | 確実 |
| 3 | fr (#82 単独) + it/ro/nap | 5 | 確実 |
| 4 | de/nl/sv/no/da/is/fy/af/nds/de_at | ~40 | 確実 |
| 5 | ru/uk/pl/cs/sk/sr/bg/sl | ~30 | 確実 |
| 6 | hi | 6 | 確実 |
| 7 | Romance + Germanic (#35) | 20 | 確実 |
| 8 | Romance + Slavic (#68) | 10 | 確実 |
| 9 | Romance + Slavic (#39) | 10 | 確実 |
| 10 | Romance (#29) | 8 | 確実 |
| 11 | Romance (#35) | (指摘 7 と統合) | 蓋然 |
| 12 | Romance + Germanic + Slavic (#76) | 15 | 確実 |
| 13 | Slavic + Scandinavian (#22/#60/#75/#90) | 25 | 確実 |
| 14 | de_at / nds (#90) | 2 | 確実 |
| 15 | ru/uk/pl/cs/sk/sl/hi/tr (#69) | 8 | 確実 |
| 16 | de/nl/sk/sr/bg/sl + Germanic 補文 (#82) | 8 | 確実 |
| 17 | en (#90) | 2 | 確実 |
| 18 | ko (#90) | 1 | 蓋然 |
| 19 | ja (全 100 文) | 0 (方針提案) | 要検討 |
| 20 | is (#84) | 1 | 確実 |
| 21 | el (#65/#86/#90) | 3 | 蓋然 |
| 22 | ar (#90) | 1 | 蓋然 |
| 23 | tr (#90) | 1 | 要検討 |
| 24 | cs/sk/sl/sr (#22/#79) | 4 | 要検討 |
| 25 | Romance se-passive + Slavic se-passive (#93) | 15 | 確実 |

**総指摘数: 25**

## 結論

最大の問題は **指摘 1 (Romance 再帰クリティック)** と **指摘 4 (Germanic sich/sig)** で、これらは数百セル規模の修正を要するが、本質は **「与格代名詞は独立分節するのに再帰代名詞は融合する」という暗黙の二重基準**。指摘 3 (#82 fr で同一文中の `me` が OWN/FUSED に分裂) はこの二重基準が **同一文内で破綻している決定的証拠**。

優先対処:
1. **指摘 3 → 1 → 4** の順で Romance/Germanic 再帰クリティックを **letter B (1人称代名詞専用)** に独立統一する規約を closed-review #48 で明文化。
2. **指摘 5 → 6** の Slavic/Hindi 再帰所有 `свой/अपना` を **letter E (新設、再帰所有専用)** に分離。
3. **指摘 25** の se-passive を独立分節し、`se` の 4 機能 (reflexive/reciprocal/passive/middle) を視覚化。

支配的欠陥 (dominant defect): **「与格・所有用法の代名詞は独立 letter (B/G)、再帰用法の同形代名詞は動詞句 letter (C/D) に融合」という syntactic-role-by-semantic-role 規約の混在**。これにより同じ表面形 `me / sich / се` が文ごとに OWN/FUSED に化け、cross-functional な「代名詞の正体」が letter 単位で見えなくなる。最も顕著なのは #82 fr の同一文 me 二重分裂 (指摘 3)。

---

**ファイルパス**: `/home/jounlai/langmap/langmap_reviews/48_open.md`
**指摘数**: 25
**支配的再帰分節欠陥**: **Romance 再帰クリティック (`se/si/me/mi/te/ti`)、Germanic 再帰代名詞 (`sich/mich/sig/seg/meg`)、Slavic 再帰所有 (`свой/swój/svůj`)、Hindi 再帰所有 (`अपना`) が syntactic role (与格 vs 再帰) に応じて OWN/FUSED に二重基準で分裂しており、同一表面形が文・言語間で異なる letter に割り当てられる**。とくに #82 fr `[A:Le médecin] [B:m'] [D:a dit] [C:de me reposer]` のように **同一文中で同一形 `me` が letter B (独立) と letter C (融合) に分裂**するのが決定的不整合。提案: 全 Romance/Germanic 再帰クリティックを **letter B (代名詞専用) に独立分節**、Slavic/Hindi 再帰所有を **letter E (新設、再帰所有専用) に独立分節**。

---

## Dev response — round 1 (2026-06-04)

レビューを精読しました。25 指摘のうち大多数は **grand convention** — palette 拡張 (新 letter E for 再帰所有、新 sub-letter B'/D' などの導入) または数十〜数百セル規模の体系的方針変更 — を必要とするため、本ラウンドではオーナー裁定待ちとして **DEFER** し、明白な単独セル欠陥 (既存 palette A-K の範囲で再タグ可能なもの) のみを慎重に修正します。これは #43 で採った保守的対応の方針を踏襲。

### Round 1 で対応 (13 edits, `/tmp/lm_edits_48.json`)

**(A) #65 — dative 与格代名詞の cross-sibling 整合 (11 cells)**: 指摘 21 と部分的に重なるが、本質は「#65 内では既に大多数の言語 (it, es_eu, es_mx, pt_br, ca, ru, uk, ar, cs, fo, jam, vec, de_gsw) が dative 代名詞を `[B:me/mi/мне/мені/لي/...]` として独立分節済」という確立した規約があり、**outlier の融合セルを sibling 整合に揃える** のは memory `feedback_cross_sibling_role_consistency.md` に従う通常修正。これは reflexive ではなく **dative experiencer pronoun** の話なので grand convention とは別軸。
- fr `[E:m'a donné]` → `[B:m'] [E:a donné]`
- fr_qc `[E:m'a donné]` → `[B:m'] [E:a donné]`
- pt_eu `[E:deu-me]` → `[E:deu] [B:-me]` (enclitic 順保持、GLUE 自動付与)
- el `[E:μου έδωσε]` → `[B:μου] [E:έδωσε]` (指摘 21 の el #65 提案そのもの)
- ro `[E:mi-a dat]` → `[B:mi-] [E:a dat]`
- gl `[E:deume]` → `[E:deu] [B:me]` (enclitic、GLUE 付与)
- oc `[E:m'a donat]` → `[B:m'] [E:a donat]`
- scn `[E:mi detti]` → `[B:mi] [E:detti]`
- de_at `[E:hat mir]` → `[E:hat] [B:mir]`
- de_by `[E:hot mir]` → `[E:hot] [B:mir]`
- nds `[E:hett mi]` → `[E:hett] [B:mi]`

**(B) #90 — adverb+verb 融合の解消 (2 cells)**: 指摘 14 の de_at/de_by `[C:selber/selba beigebracht]` は副詞 selber と動詞 beigebracht が C に密着し、本動詞 (letter D) が C に漏れている明白な単独セル欠陥。既存 palette 内で `[C:selber] [D:beigebracht]` 分割可能。再帰代名詞 sich/si の扱いには触れない (それは grand convention)。
- de_at #90 `[C:selber beigebracht]` → `[C:selber] [D:beigebracht]`
- de_by #90 `[C:selba beigebracht]` → `[C:selba] [D:beigebracht]`

全 13 edits を applier dry-run で検証済 — display preservation OK、adjacent same role-letter ゼロ。

### Round 1 で DEFER (オーナー裁定待ち)

1. **指摘 1 (Romance 再帰クリティック ~80 cells)** — `se/si/me/mi` を letter B に独立統一する規約は、与格 (#13/#24/#82 前半) と再帰 (#29/#35/#39/#68/#79/#82 後半) を **同じ letter B で吸収する semantic-role-agnostic な統一方針**。これは複数の semantic role を 1 letter にまとめる schema-level 判断で、オーナー承認必須。
2. **指摘 3 (#82 fr の同一文 me 二重出現)** — 決定的単独セル証拠だが、修正には指摘 1 の grand convention 受諾が前提 (`[C:de me reposer]` → `[C:de] [B:me] [C:reposer]` の B 再帰用法は #82 だけの問題ではなく方針宣言)。レビュアー自身が「最大の問題」と位置づけており、オーナー判断にゆだねるのが適切。
3. **指摘 2 (Slavic 再帰小辞 ~50 cells)**、**指摘 13 (Slavic + Scandinavian learn ~25 cells)**、**指摘 24 (Wackernagel position ~4 cells)** — 西/南スラヴの `się/se/sa` を letter B に独立統一する規約。指摘 1 と並行する schema 拡張。
4. **指摘 4 (Germanic sich/mich ~40 cells)** — `sich/mich/sig/seg/meg` を letter B に独立統一。指摘 1 と一体の Germanic 版。
5. **指摘 5 (Slavic 再帰所有 ~30 cells)** + **指摘 6 (Hindi 再帰所有 6 cells)** — `свой/swój/svůj/अपना` 用に **新 letter E** (再帰所有専用) を palette に追加する提案。palette 拡張は確実に grand convention。
6. **指摘 7 / 8 / 9 / 10 / 11 / 12 / 16** — それぞれ #35 結婚 / #68 座る / #39 起きる / #29 忘れる / #76 幸せ / #82 補文 の系統的再分節提案。いずれも指摘 1, 2, 4 と同じ palette 拡張または semantic-role 統一規約の派生で、grand convention の傘下。
7. **指摘 15 (#69 his parents `[C|H:...]` 複合 letter 8 cells)** — Slavic/Hindi/Turkish の与格 + 再帰所有複合を `[E:...] [C:...] [H:...]` に分割する提案。これは指摘 5/6 の新 letter E に依存。
8. **指摘 17 (en #90 by himself 2 cells)** — `[C:by himself]` → `[C:by] [C':himself]` または `[F:by] [C:himself]`。前置詞分節方針自体に関わる schema 判断。closed-review で指摘 14 と合わせて検討推奨。
9. **指摘 18 (ko #90 혼자서 1 cell)** — ZWNJ で `[C:혼자] [C':‌서]` 分割提案だが、レビュアー自身が「現状維持で許容」を許可。題材文に他の再帰例が乏しく単独 cell 修正の必然性が薄い。
10. **指摘 19 (ja 自分 ゼロ出現)** — 方針提案のみ、データ修正なし。closed-review で「再帰例文追加」議題に記録推奨。
11. **指摘 20 (is `-st` 1 cell)** — レビュアーが現状維持を許容。
12. **指摘 21 (el clitic 3 cells)** — #65 el のみ round 1 で対処 (上記 A)。#86 と #90 は所有後置代名詞の独立分節方針で、grand convention 寄り (定冠詞+名詞+所有後置を分割する schema 判断)。
13. **指摘 22 (ar #90 1 cell)** + **指摘 23 (tr #90 1 cell)** — 前置詞/接尾辞分節方針の単独 cell 適用で、レビュー全体の grand convention が定まってからの方が整合的。
14. **指摘 25 (Romance/Slavic se-passive ~15 cells)** — `se/ся` を passive marker として独立分節する提案。**新 sub-letter G'** または `[G:se]+[G':verb]` の二段分節 schema を導入する palette 拡張。指摘 1 と同じく schema-level grand convention で、オーナー承認必須。

### 推奨されるクロージャ判断

本レビューの **dominant defect は schema-level 議論** であり、closed-review で以下を裁定すべき:
- **Q1**: 再帰代名詞 (Romance クリティック、Germanic sich、Slavic se/się/sa) を一律 letter B (1人称代名詞専用) に独立分節するか? それとも与格と再帰を区別する別 letter を導入するか?
- **Q2**: Slavic/Hindi の再帰所有 `свой/अपना` 用に新 letter E (再帰所有専用) を palette に追加するか? それとも既存 letter (G = 所有副) を再帰所有にも兼用するか?
- **Q3**: se-passive (Romance/Slavic の `se/ся` voice marker) を独立分節するか? Germanic werden-passive (分析形助動詞) との対称をどう取るか?

Round 1 closure 提案: **partial fix (#65 dative + #90 adverb の 13 edits) を適用、残 22 指摘は closed-review #48 へ昇格し schema 拡張議題として別途裁定**。レビュアー @reflexion_bgf の体系的論述は claude-review として高品質、Cardinaletti & Starke クリティック理論や König & Gast reflexive/intensifier 区別への参照は妥当。schema 判断の参考資料としてレビュー全文を保全。

