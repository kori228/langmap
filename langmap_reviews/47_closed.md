# LangMap データレビュー #47 — 複数マーカー分節横断レビュー (Plural-Marking Segmentation Cross-cut)

## レビュアー自己紹介 (ペルソナ)

Selma Brankoviç (handle: **@plural_selma**)。ニューカッスル大学言語類型論博士、専門は名詞形態論 (number, gender, definiteness)。常用文献は Corbett *Number* (CUP 2000)、Acquaviva *Lexical Plurals: A Morphosemantic Approach* (OUP 2008)、Greenberg "Some Universals of Grammar with Particular Reference to the Order of Meaningful Elements" (1963) の Universal #34〜#39 (number marking)、Booij *The Grammar of Words* (OUP 2007) ch. 3、Aikhenvald *Classifiers* (OUP 2000) ch. 3、Sohn *The Korean Language* (CUP 1999) §6.4 (들)、Li & Thompson *Mandarin Chinese* (1981) §3.2 (们)、Shibatani *The Languages of Japan* (CUP 1990) §6.5 (たち / ども / がた)、Sneddon *Indonesian: A Comprehensive Grammar* (Routledge 2010) §4.6 (reduplication plural)、Holes *Modern Arabic* (Georgetown UP 2004) §5.1 (broken plurals)。今回は **memory `feedback_segment_splitting.md` (Rule #14: 接尾辞は ZWNJ で独立) と `feedback_glue_marker.md` (들/たち/들 を agglutinative-style に処理) と #43 で確立された "形態素分離" の grand convention** に照らし、**複数マーカーが文/言語横断で整合して分節されているか** のみを精査する。語彙選択 (cốc/ly 等)、敬語、格、語順、TAM は明示的に射程外とし、本レビューは「**ある言語が複数マーカー X を分節独立しているなら、同じ言語の別の文でも同じマーカー X は独立すべき**」「**英語が plural を持つ参照文では、対応する言語の複数マーカーが zero でも overt でも一貫した扱いを取るべき**」という二軸に絞る。

## 検証範囲

- **英語参照に複数名詞を含む文** (20 文): #21 (friends), #26 (children), #27 (times), #36 (people), #50 (walks), #51 (stories), #53 (flowers), #55 (cups), #57 (languages), #59 (minutes), #61 (meetings), #63 (birds + trees), #67 (times), #69 (parents), #74 (minutes), #75 (children), #77 (results), #92 (dumplings), #93 (festivals), #94 (doors)。
- **対象言語層** (複数マーカーが形態素として分離可能なもの): ja (たち), ko (들), zh (们), vi (những + 名詞), id/ms (reduplication), tl (mga), th (zero/ๆ), Romance concord (es/fr/it/pt + 定冠詞 + 形容詞 + 名詞), de (-en/-er), ru/uk/pl (語尾屈折), ar (broken + sound plural), he (-im/-ot), fa (-hâ), hi/ne/gu/ta/sa (-हरू/-கள்/-ओ etc.), tr (-lar/-ler), hu (-k/-ek/-ok), fi (-t/-i-), sw (mu-/wa- noun class), am (-očč)。
- ライブデータは `node -e` で 100 文すべて抽出済み。

## 方針 — 何を「指摘」とし、何を「許容」とするか

1. **同一形態素は同言語内で一貫した分節**。例: ko `‐들` が #36 `사람들이` で fused なら、#26 `아이들이` でも fused、#53 `꽃들이` でも fused — 一文だけ独立分節 (ZWNJ) は不整合。
2. **接辞型複数マーカー** (ko 들, zh 们, ja たち, tr -lar, hu -k, fi -t, fa -hâ, am -očč, ta -கள், ne -हरू) は formally bound morpheme で、`feedback_glue_marker.md` の ZWNJ 規約は ko 들を **agglutinative-style に独立分節すべき**と読める。実際 `‐다` (ko 過去) や `‐tum` (tr 過去) は ZWNJ で独立しており、同じ Korean / Turkish 内で plural 들/-lar だけ fused は不均衡。
3. **遊離型複数マーカー** (vi `những`/`các`, tl `mga`, my `တွေ`, th `ๆ`) は明確に independent word で、独立分節すべき。データ上、vi `những` は #53/#63/#75/#94 で **時に独立、時に fused**、tl `mga` は **大体独立だが #93 で fused**。
4. **重複型複数 (reduplication)** (id `anak-anak`, ms `bunga-bunga`) は 1 つの音韻語として扱うのが妥当 (Sneddon 2010)、独立分節は基本不要。ただし全文整合チェック。
5. **Romance 性数一致 (concord)**: 定冠詞 + 形容詞 + 名詞すべてに複数マーカーが現れるが、これらは別 letter (B/F + D/E/F + A/B) に既に分節されているため、追加処理不要。ただし **「冠詞 + 名詞」を 1 letter に fused した文 (例: fr #26 `[A:"Les enfants"]`) と、分離した文の不整合**は指摘。
6. **ar broken plural** (`أصدقاء`/`أطفال`/`نتائج`) は形態論的に root + pattern で分離不能 — 独立分節不可、現状維持。ただし sound plural (`-ūn/-āt`) の場合は別議論。
7. **複数性が zero (sg と同形)** な言語 (zh 朋友 / 故事 / 节日, ja 友達 / 話 / 祭り) は overt marker がないため分節独立しようがなく許容。

確信度は 【確実】= 同マーカーが同一言語データ内で OWN/FUSED 両方に分裂、規約違反明白、【蓋然】= 言語固有事情で迷う余地あり、【要検討】= 方針自体を closed-review で再確認すべきもの。

---

## 指摘事項 (Issues found)

### 1. ko 複数マーカー「‐들」の分節が全文で fused のまま — agglutinative 規約から外れている 【確実】

**Current (ko, 들 を含む全文):**
- #21 `[C:"친구들과"]`、#26 `[A:"아이들이"]`、#36 `[B:"사람들이"]`、#53 `[B:"꽃들이"]`、#63 `[B:"새들이"]`、#69 ない (`부모님` は単数形)、#75 `[A:"아이들은"]`

**Problem:** Korean `‐들` は明確に分離可能な複数接尾辞 (Sohn 1999, §6.4)、agglutinative 言語の bound morpheme。同じ ko データ内で `‐다` (過去テンス) や `‐에서`/`‐의`/`‐에` (格助詞) は `feedback_glue_marker.md` 規約により **ZWNJ プレフィックス付きで独立分節** (#26 ko `[B:"‌에서"]`、#53 ko `[D:"‌의"]`、#69 ko `[H:"‌에게"]`、#69 ko `[E:"‌다"]`)。同じ言語の同じ階層 (bound suffix) でありながら **複数マーカー `‐들` だけが全文で fused** という扱いは形態論的に首尾一貫しない。とくに #36 `[B:"사람들이"]` は **명사 (사람) + 복수 (들) + 주격조사 (이) の 3 形態素** を 1 セルに圧縮しており、`‐이` だけでも独立分節すべき。

**Proposed:** Korean `‐들` を独立分節 (ZWNJ 付き) に統一:
- #21 `[C:"친구들과"]` → `[C:"친구"], [C:"‌들"], [C:"‌과"]` (3 段) または最少修正で `[C:"친구"], [C:"‌들과"]` (들 + 격助詞 fused)
- #26 `[A:"아이들이"]` → `[A:"아이"], [A:"‌들이"]` または `[A:"아이"], [A:"‌들"], [A:"‌이"]`
- #36 `[B:"사람들이"]` → `[B:"사람"], [B:"‌들이"]`
- #53 `[B:"꽃들이"]` → `[B:"꽃"], [B:"‌들이"]`
- #63 `[B:"새들이"]` → `[B:"새"], [B:"‌들이"]`
- #75 `[A:"아이들은"]` → `[A:"아이"], [A:"‌들은"]`

これは #43 review で確立された「同階層 bound morpheme は ZWNJ で独立」方針の plural への拡張で、現状の TAM/格助詞 分節と均衡を取る作業。逆統一 (들 を全部 fused のまま受容) を採るなら ko の `‐다`/`‐에서` も全部 fused に戻す必要があり、それは Rule #14 違反になるため非推奨。

---

### 2. ja 複数マーカー「‐たち」の分節が全文で fused、しかも子供/鳥にのみ付与・友達/人/両親には欠如 【確実】

**Current (ja, たち を含む / 含まない文):**
- WITH たち FUSED: #26 `[A:"子供たちは"]`、#63 `[B:"鳥たちが"]`、#75 `[A:"子どもたちは"]`
- WITHOUT たち: #21 `[C:"友達と"]` (friends 複数なのに たち なし)、#36 `[B:"人が"]` (people 複数なのに たち なし — `たくさんの` で集合性表示)、#51 `[E:"私の"], [A:"祖母は"]` (stories 複数だが対象は別)、#69 `[C:"両親"]` (parents 複数なのに たち なし — `両親` 自体が双数)、#75 ji_osa `[A:"子供らが"]`/ja_oki `[A:"わらびんちゃーが"]`

**Problem:** 日本語の「たち」(接尾) は **有情名詞のみに付き、無情名詞には付かない**意味論的制約があり (Shibatani 1990, §6.5)、`子供たち` `鳥たち` は OK、`扉` `祭り` `話` `結果` には付かないのが現代日本語の標準。一方 `友達` は既に複数集合語化しており `友達たち` は不自然 (OK だが冗長)。**問題は分節そのものよりも、たち を **「形態素として分節独立」させていない**点**。`‐たち` は明確に bound morpheme で、`‐の` `‐は` `‐が` `‐に` などの助詞と同じ階層。データ上 `[E:"テストの"]` (#77) のように `‐の` が一語の中に fused のままなのと整合的ではあるが、**ja の `‐ている` `‐た` を独立分節せよと主張する #43 方針** との一貫性が問われる。

**Proposed:** 二択 (どちらか一方に統一):
- (A) **`‐たち` を独立分節**: #26 `[A:"子供"], [A:"‌たち"], [A:"‌は"]`、#63 `[B:"鳥"], [B:"‌たち"], [B:"‌が"]`、#75 `[A:"子ども"], [A:"‌たち"], [A:"‌は"]`。これは ko `‐들` 修正 (指摘 1) と並行。
- (B) **現状維持** (fused のまま) で日本語全体の助詞 fusion 方針と整合させる。この場合 ko `‐들` の分節独立も再考要。

私見では (A) が memory `feedback_glue_marker.md` の精神に合致。

---

### 3. zh 複数マーカー「‐们」の使用が文間で恣意的 — 動物には付かず子供にだけ付く 【蓋然】

**Current (zh, 们 / non-们 の出現):**
- 们 OWN: #26 `[A:"孩子们"]`、#75 `[A:"孩子们"]`
- 们 欠如: #21 `[C:"和朋友一起"]` (朋友 = friend, 複数だが们なし)、#36 `[B:"人"]` (people, 们なし)、#51 `[C:"故事"]` (stories, 不可算扱い)、#53 `[B:"花"]` (flowers, 们は無情名詞に付かない)、#57 `[B:"三种语言"]` (languages, 们は無情名詞に付かない)、#63 `[B:"鸟儿"]` (birds, 鸟儿 = `鸟 + 儿`化、复数なし)、#69 `[C:"父母"]` (parents, 双数語、们なし)、#75 `[A:"孩子们"]` OWN、#77 `[B:"结果"]` (results, 们は無情名詞に付かない)、#93 `[F:"节日"]` (festivals, 同)、#94 `[E:"大门"]` (doors, 同)

**Problem:** 中国語 `‐们` は **有情 (とくに人間) 名詞のみに付く** Mandarin の動物には基本付かない (Li & Thompson 1981, §3.2; Yip & Rimmington 2004, §2.2)。データ上、**子供 (#26 #75) には们が付き、鸟 (#63) には付かない**のは規約通り正しい。**ただし `朋友` (#21) は有情で `朋友们` も成立する**にもかかわらず使われていない (現状 `和朋友一起`)。これは中国語母語話者として「友達と一緒」の意味で**両方とも適格だが、cross-lang 整合を取るなら zh も `朋友们` 形を採用すべき** — ko `친구들`, vi `bạn bè`, ja `友達`, en `friends` がすべて複数性を marked/unmarked のどちらかで決めているなか、zh #21 だけ singular-marked `朋友` (集合解釈) と複数 marker なしの形が選ばれている。

**Proposed:** 軽微な統一:
- #21 `[C:"和朋友一起"]` → `[C:"和朋友们一起"]` (有情複数 marker 們 付加、形態素分節は #26 と並行で `[C:"和"], [C:"朋友"], [C:"‌们"], [C:"一起"]` あるいは fused のまま)
- なお #26 #75 の `[A:"孩子们"]` を **形態素分節独立**にするなら `[A:"孩子"], [A:"‌们"]` も検討すべき (ko 들 と並行)。

---

### 4. vi 複数マーカー「những / các / mấy / bọn」の選択と分節が文間で分裂 【確実】

**Current (vi における複数 marker):**
- `Bọn trẻ` (= `bọn` 集合 + `trẻ` 子供) FUSED: #26 vi/vi_c、#75 vi_c
- `Mấy đứa nhỏ` (= `mấy` 数量 + `đứa nhỏ` 子供) FUSED: #26 vi_s、#75 vi_s
- `Những đứa trẻ` (= `những` 複数 + `đứa trẻ`) FUSED: #75 vi `[A:"Những đứa trẻ"]`
- `Những con chim` (= `những` 複数 + `con` 類別詞 + `chim` 鳥) FUSED: #63 vi `[B:"Những con chim"]`
- `Mấy con chim` FUSED: #63 vi_s
- `Chim` (singular 形のまま複数解釈) FUSED: #63 vi_c
- `Những bông hoa` FUSED: #53 vi `[B:"Những bông hoa"]`
- `Bông hoa` (singular 形) FUSED: #53 vi_s
- `Hoa` FUSED: #53 vi_c
- `Những câu chuyện` FUSED: #51 vi `[C:"những câu chuyện"]`
- `Những cánh cửa` FUSED: #94 vi `[E:"những cánh cửa"]`
- `Các cuộc họp` FUSED: #61 vi `[D:"các cuộc họp"]`
- `Bạn bè` (集合語 = friends) FUSED: #21 vi `[C:"với bạn bè"]`

**Problem:** ベトナム語の `những` / `các` / `mấy` / `bọn` はいずれも **遊離型複数マーカー (前置自立形態素)** で、独立分節すべき (Cao Xuân Hạo 1991, §4.3; Nguyễn Đình-Hoà 1997, ch.6)。zh `正在`、vi `đã/đang/sẽ` (#43 で独立分節要請) と完全に同階層の前置粒子。データでは **全文で fused** にされており、しかも **vi/vi_c/vi_s 間で選択語彙が分裂** (#26 `Bọn trẻ` vs `Mấy đứa nhỏ`、#53 `Những bông hoa` vs `Bông hoa` vs `Hoa`)。これは feedback `feedback_split_segments_like_reference.md` (方言は基準言語と同じ構造) に反する。

**Proposed:** 全 vi 複数文で 前置複数 marker を独立分節:
- #26 vi `[A:"Bọn trẻ"]` → `[A:"Bọn"], [A:"trẻ"]` (または #75 と並行で `[A:"Những"], [A:"đứa trẻ"]` に統一)
- #53 vi `[B:"Những bông hoa"]` → `[B:"Những"], [B:"bông hoa"]`
- #63 vi `[B:"Những con chim"]` → `[B:"Những"], [B:"con chim"]`
- #75 vi `[A:"Những đứa trẻ"]` → `[A:"Những"], [A:"đứa trẻ"]`
- #94 vi `[E:"những cánh cửa"]` → `[E:"những"], [E:"cánh cửa"]`
- #51 vi `[C:"những câu chuyện"]` → `[C:"những"], [C:"câu chuyện"]`
- #61 vi `[D:"các cuộc họp"]` → `[D:"các"], [D:"cuộc họp"]`

vi_nom 側も対応する字喃 (`仍` = những) を独立分節 (memory `feedback_segment_splitting.md` Rule #18 同期則)。#94 vi_nom `[E:"𨷑"]` は本来 `[E:"仍"], [E:"𨷑"]` であるべき。

---

### 5. tl 複数マーカー「mga」の分節が #21 #26 #51 等で独立しているのに #93 #94 で fused 【確実】

**Current (tl, mga):**
- mga OWN (独立分節): #21 `[C:"kasama ang mga kaibigan"]` — `mga` は冠詞 ang + mga + 名詞の塊で 1 letter、しかし mga 自体は分節境界の中に閉じ込められている。#26 `[A:"ang mga bata"]` (一塊)、#51 `[B:"mga kawili-wiling"], [C:"kuwento"]` — mga が形容詞句に張り付き、名詞 kuwento と分離されている (位置上分節独立に見える)、#53 `[B:"ang mga bulaklak"]` (一塊)、#63 `[B:"ang mga ibon"]`, `[A:"sa mga puno"]` (一塊)、#69 `[C:"kanyang mga magulang"]` (一塊)、#75 `[A:"ang mga bata"]` (一塊)、#94 `[D:"mga bagong"], [E:"pinto"]` — mga が D 形容詞句に張り付いている (E 名詞 pinto が単数形)
- mga なし: #51 `[C:"kuwento"]`、#93 `[F:"pagdiriwang"]` (festivals 複数なのに mga なし、しかも `pagdiriwang` 単数形)

**Problem:** Tagalog `mga` は **必須複数 marker (proclitic determiner)** で、`ang + mga + N` `sa + mga + N` `kanyang + mga + N` のように常に名詞句の頭に位置する自立 (lazy clitic) 形態素 (Schachter & Otanes 1972, §3.13)。**`mga` を含む文では `ang mga N` 全体を 1 letter に塊めるか、`mga` を独立形態素として切り出すかが文ごとに分裂** している。例えば #94 では `[D:"mga bagong"]` で **mga が形容詞 bagong (新しい) と一塊になり、名詞 pinto と分離**されているが、これは Tagalog 構文上 **`mga` は名詞 pinto を修飾する**のであり、`mga` を D に置くなら **pinto も D 内に入るべき** (`mga bagong pinto`)、あるいは `mga` を独立 letter として E 内に置くべき。

さらに **#93 `[F:"pagdiriwang"]`** で `festivals` (en 複数) に対し tl が `pagdiriwang` (単数形、mga なし) を採用しているのは複数性の表示漏れ。`mga pagdiriwang` が正しい。

**Proposed:**
- #94 `[D:"mga bagong"], [E:"pinto"]` → `[D:"bagong"], [E:"mga pinto"]` (mga を名詞 pinto と同じ letter に移す)、または `[D:"mga"], [D':"bagong"], [E:"pinto"]` (mga 独立)
- #93 `[F:"pagdiriwang"]` → `[F:"mga pagdiriwang"]` (複数 marker 補完)、または `[F:"mga"], [F':"pagdiriwang"]`
- #51 `[B:"mga kawili-wiling"], [C:"kuwento"]` → `[B:"kawili-wiling"], [C:"mga kuwento"]` (mga を kuwento 側に統一)

---

### 6. id/ms 重複型複数 (reduplication) が文間で OWN/FUSED に分裂 【蓋然】

**Current (id, reduplication):**
- 重複形 FUSED: #26 `[A:"Anak-anak"]`、#53 `[B:"Bunga-bunga"]`、#63 `[B:"Burung-burung"]`、#75 `[A:"Anak-anak"]`、#94 `[E:"pintu-pintu"]`
- 重複なし (singular 形): #21 `[C:"bersama teman"]` (friends 複数だが `teman` 単形)、#36 `[B:"orang"]` (people 複数だが `orang` 単形)、#51 `[C:"cerita"]` (stories 複数だが `cerita` 単形)、#57 `[B:"tiga bahasa"]` (languages 複数だが数詞修飾で reduplication 不要)、#67 ない、#69 `[C:"orang tuanya"]` (parents 集合語)、#77 `[B:"hasil"]` (results 単形)、#93 `[F:"festival"]` (festivals 複数だが `festival` 単形)

**Problem:** インドネシア語/マレー語の重複形は **強調的複数 (specific plural)** で、文脈で複数明示が必要な場合に使う (Sneddon 2010, §4.6)。**任意 (optional)** ではあるが、cross-lang 整合性のために **同じ参照英語が複数なら id/ms も重複形を採用すべき** な側面がある。データ上、**子供 (#26 #75)、花 (#53)、鳥 (#63)、扉 (#94) は重複形**、**friends (#21)、people (#36)、stories (#51)、festivals (#93) は単形** という分裂は、何らかの基準で選別すべき。とくに **`teman` (friend) vs `teman-teman` (friends)** は典型例で、文脈で複数性を表示するなら `bersama teman-teman` が標準。

**Proposed:** 二択:
- (A) **強い意味で複数性を表示**: #21 id `[C:"bersama teman"]` → `[C:"bersama teman-teman"]`、#36 id `[B:"orang"]` → `[B:"orang-orang"]`、#51 id `[C:"cerita"]` → `[C:"cerita-cerita"]`、#93 id `[F:"festival"]` → `[F:"festival-festival"]`
- (B) **現状維持** (id は plural marking optional の言語) の方針を closed-review で明文化。

私見では (A) を推奨 (cross-lang 整合)。同様の修正は ms にも適用必要。

---

### 7. Romance 定冠詞 + 名詞の分節が文間で OWN/FUSED に分裂 (concord 同期問題) 【確実】

**Current (Romance 複数名詞句):**
- **冠詞 + 名詞 FUSED** (1 letter): #26 fr `[A:"Les enfants"]`、it `[A:"I bambini"]`、es_eu `[A:"Los niños"]`、pt_eu `[A:"As crianças"]`; #53 fr `[B:"Les fleurs"]`、it `[B:"I fiori"]`、es_eu `[B:"Las flores"]`; #63 fr `[B:"Les oiseaux"]`、it `[B:"Gli uccelli"]`、es_eu `[B:"Los pájaros"]`、pt_eu `[B:"Os pássaros"]`; #75 fr `[A:"Les enfants"]`、it `[A:"I bambini"]`; #77 fr `[E:"les résultats du"]` (冠詞 + 名詞 + 前置詞 du の三形態素一塊!); #94 fr `[A:"des langues"]`、it `[A:"delle lingue"]`
- **冠詞独立 + 名詞独立** (2 letter): #93 fr `[E:"de nombreux"], [F:"festivals"]`、it `[E:"molti"], [F:"festival"]`、es_eu `[E:"muchos"], [F:"festivales"]` — `de + 数量詞` と `名詞` を別 letter

**Problem:** Romance 系の定冠詞 (les/i/los/as) は **proclitic article (前接的定冠詞)** で形態論的に名詞と分離可能 (Maiden et al. *The Cambridge History of the Romance Languages* 2011)。**memory `feedback_split_segments_like_reference.md`** + **#43 で確立された Rule #11 (auxiliary 独立)** の精神からすれば、定冠詞も独立分節すべき。データ上 **#93 では `muchos + festivales` を別 letter** にしているのに **#26/#53/#63/#75 では `Les enfants` を 1 letter** にしているのは深刻な不整合。

さらに #77 fr `[E:"les résultats du"]` は **定冠詞 les + 名詞 résultats + 前置詞 + 定冠詞融合形 du の 4 形態素を 1 letter に圧縮** しており、これは形態素分節として乱暴すぎる。本来 `[E:"les"], [B:"résultats"], [D:"du"], [E:"test"]` のように分節すべき。

**Proposed:** Romance 定冠詞 + 名詞を独立分節に統一 (代表例):
- #26 fr `[A:"Les enfants"]` → `[A:"Les"], [A:"enfants"]` (または `[A:"Les"], [A':"enfants"]`)
- #53 fr `[B:"Les fleurs"]` → `[B:"Les"], [B:"fleurs"]`
- #63 fr `[B:"Les oiseaux"]` → `[B:"Les"], [B:"oiseaux"]`
- #77 fr `[E:"les résultats du"]` → `[E:"les"], [B:"résultats"], [D:"du"]` (3 letter 分節、`du` は前置詞融合形)
- 同様に it (I, Gli) / es_eu (Los, Las) / pt_eu (Os, As) を全文展開

これは Romance 言語横断で **6+ 文 × 4 言語 = 24+ セル** の同期修正が必要。

---

### 8. ar 複数名詞「الأصدقاء」「الأطفال」「الطيور」の冠詞 ال の分節が全文で fused 【蓋然】

**Current (ar, 定冠詞 ال + 複数名詞):**
- #21 ar `[C:"مع أصدقائي"]` (友達 + 1sg 所有 ـي、全融合)
- #26 ar `[A:"الأطفال"]` (定冠詞 ال + 子供 broken plural、融合)
- #36 ar `[B:"الناس"]` (定冠詞 + 人々、融合)
- #51 ar `[A|E:"جدتي"]` (祖母 + 所有、融合)
- #53 ar `[B:"الأزهار"]` (定冠詞 + 花 broken plural、融合)
- #57 ar `[B:"ثلاث لغات"]` (数詞 + 言語 sound plural、融合)
- #63 ar `[B:"الطيور"]` (定冠詞 + 鳥 broken plural、融合)
- #69 ar `[C:"والديه"]` (両親 dual + 所有、融合)
- #75 ar `[A:"الأطفال"]` (融合)
- #77 ar `[B:"نتائج"]` (結果 broken plural、無冠詞)
- #93 ar `[F:"مهرجانات"]` (festivals sound plural、無冠詞)、`[E:"كثيرة"]` (形容詞 sing-fem 一致、broken plural の semantic plural は文法的に 単数扱い)
- #94 ar `[E:"أبواباً"]` (扉 broken plural + 不定 acc tanwin)、`[A:"اللغات"]` (定冠詞 + 言語 sound plural)

**Problem:** アラビア語の定冠詞 `الـ` (al-) は **clitic で形態論的に名詞と分離可能** (Holes 2004, §3.2)。さらに **broken plural (تكسير)** は root + pattern で分節不能だが、**sound plural (`-ūn` / `-āt`)** は明確な接尾辞で分節可能。データ上 **ar の `ال` は全文で名詞と fused**、**sound plural `-āt` も全文で fused**、**broken plural は当然 fused** (これは OK)。**問題は、ar データが「形態素分節せず word-level でのみ操作する方針」を取っていることが暗黙にしか示されていない点**。

**Proposed:** 二択 (closed-review で方針確認):
- (A) **ar は word-level 分節のみ採用** (broken plural 不可分性を尊重) と方針明文化、全文現状維持。
- (B) **sound plural と定冠詞 ال を独立分節**:
  - #93 ar `[F:"مهرجانات"]` → `[F:"مهرجان"], [F:"‌ات"]` (ZWNJ + sound plural -āt)
  - #94 ar `[A:"اللغات"]` → `[A:"الـ"], [A:"لغ"], [A:"‌ات"]` (al + 語幹 + sound plural)、`[E:"أبواباً"]` は broken plural なので独立不能

私見では (A) が ar の屈折型寄り形態論に合っており、Rule #14 は agglutinative 言語限定とすべき。ただし方針が #43 で確立されていないため明文化が必要。

---

### 9. he 複数名詞「הילדים」「הציפורים」の冠詞 ‐ה と複数接尾 ‐ים/‐ות が fused 【蓋然】

**Current (he, 定冠詞 ה + 複数接尾):**
- #26 `[A:"הילדים"]` (ha- + yeled + -im 子供 m.pl)、`[B:"ב"], [E:"פארק"]` (前置詞 b + 名詞 が独立)
- #36 `[B:"אנשים"]` (人々 sound plural m.pl)
- #51 `[C:"סיפורים"]` (stories m.pl)、`[B:"מעניינים"]` (形容詞 m.pl)
- #53 `[B:"הפרחים"]` (花 m.pl)、`[A|D:"בגינה"]` (前置詞 + 庭、融合)
- #57 `[B:"שלוש שפות"]` (3 + 言語 f.pl)
- #63 `[B:"הציפורים"]` (鳥 f.pl)
- #69 `[C|H:"להוריו"]` (前置詞 + 両親 + 所有、融合)
- #75 `[A:"הילדים"]` (children)
- #77 `[D|B:"מתוצאות"]` (前置詞 + 結果 f.pl 構造形、融合)
- #93 `[F:"פסטיבלים"]` (festivals m.pl)、`[E:"רבים"]` (形容詞 m.pl)
- #94 `[E:"דלתות"]` (扉 f.pl)、`[D:"חדשות"]` (形容詞 f.pl)

**Problem:** Hebrew 定冠詞 `‐ה` (ha-) は proclitic で **`ה + 語幹`** の境界を持つ (Glinert *Modern Hebrew* CUP 1989, §3.1)。複数接尾 `‐ים` (m.pl) / `‐ות` (f.pl) も明確な分離可能接尾辞。データ上は **全 he 文で完全 fused**。これは ar と並行する処理だが、**前置詞 ב- (b-) と名詞 פארק を独立分節している (#26 `[B:"ב"], [E:"פארק"]`)** のと、**定冠詞 ה- と名詞 הילדים を融合している** のは内部不整合。

**Proposed:**
- #26 he `[A:"הילדים"]` → `[A:"ה"], [A:"ילדים"]` または `[A:"ה"], [A:"ילד"], [A:"‌ים"]` (3 段)
- 同様に #53 `[B:"הפרחים"]`、#63 `[B:"הציפורים"]`、#75 `[A:"הילדים"]` を冠詞分離
- #53 `[A|D:"בגינה"]` → `[D:"ב"], [A:"גינה"]` (前置詞独立)

これは #26 で既に `ב` を独立分節している方針との整合修正。

---

### 10. fa 複数マーカー「‐ها」の分節が文間で fused 【確実】

**Current (fa, ‐ها 接尾):**
- #26 `[A:"بچه‌ها"]` (子供 + -ha、ZWJ 接続済)
- #36 `[B:"آدم‌های"]` (人 + -ha + ezāfe -i、3 形態素融合)
- #51 `[C:"داستان‌های"]` (物語 + -ha + ezāfe)
- #53 `[B:"گل‌های"]` (花 + -ha + ezāfe)
- #63 `[A:"در درختان"]` (前置詞 + 木 + -ān 文学的複数、融合)、`[B:"پرندگان"]` (鳥 + -ān、融合)
- #69 `[C:"والدینش"]` (両親 + 3sg 所有、融合)
- #75 `[A:"بچه‌ها"]` (融合)
- #77 `[B:"نتایج"]` (結果 アラビア借用 broken plural、融合)
- #93 `[F:"جشنواره‌های"]` (festivals + -ha + ezāfe、融合)
- #94 `[E:"درهای"]` (扉 + -ha + ezāfe、融合)

**Problem:** ペルシア語 `‐ها` (-hâ) は **bound suffix** で agglutinative 形態論。`‐ها` と `‐ان` は別系列の複数マーカー (Mahootian *Persian: A Comprehensive Grammar* 1997, ch.4)。さらに **ezāfe `-e/-ye/-i`** は別形態素として共起する (`بچه‌های زیبا` = 子供-PL-EZA 美しい)。データは **全 fa 文で完全 fused**。`feedback_glue_marker.md` の glue 規約は fa を明示しないが、ko/tr/fi/hu と並行するなら fa `‐ها`/`‐ان` も ZWNJ で独立分節すべき。

**Proposed:**
- #26 fa `[A:"بچه‌ها"]` → `[A:"بچه"], [A:"‌ها"]` (ZWNJ プレフィックス、既に存在する ZWJ を分離形に)
- #36 fa `[B:"آدم‌های"]` → `[B:"آدم"], [B:"‌ها"], [B:"‌ی"]` (3 段: 名詞 + 複数 + ezāfe)
- #51 fa `[C:"داستان‌های"]` → `[C:"داستان"], [C:"‌ها"], [C:"‌ی"]`
- #53 fa `[B:"گل‌های"]` → `[B:"گل"], [B:"‌ها"], [B:"‌ی"]`
- #63 fa `[B:"پرندگان"]` → `[B:"پرند"], [B:"‌گان"]` (‐gân は -ān の異形)
- #75 fa `[A:"بچه‌ها"]` → `[A:"بچه"], [A:"‌ها"]`
- #93 fa `[F:"جشنواره‌های"]` → `[F:"جشنواره"], [F:"‌ها"], [F:"‌ی"]`
- #94 fa `[E:"درهای"]` → `[E:"در"], [E:"‌ها"], [E:"‌ی"]`

---

### 11. tr 複数マーカー「‐lar/-ler」の分節が #26 でのみ独立、他は全文 fused 【確実】

**Current (tr, ‐lar/-ler):**
- OWN (独立分節): #26 `[A:"Çocuklar"], [E:"park"], [B:"‌ta"], [C:"oynuyor"], [D:"‌lar"]` — 動詞末尾の `‐lar` (3pl 一致) を D に独立分節
- FUSED (名詞接尾): #26 `[A:"Çocuklar"]` (子供 + -lar、融合)、#36 `[A:"insan"]` (人 sing 形)、#51 `[C:"hikâyeler"]` (物語 + -ler、融合)、#53 `[B:"çiçekler"]` (花 + -ler、融合)、#57 `[B:"üç dili"]` (3 + 言語 acc、単数形)、#63 `[B:"kuşlar"]` (鳥 + -lar、融合)、#69 `[C|H:"ailesine"]` (家族 + 3sg + dat、単数集合)、#75 `[A:"Çocuklar"]`、`[C:"öğreniyorlar"]` (動詞末 -lar、融合)、#77 `[B:"sonuçlar"]` (結果 + -lar、融合)、#93 `[F:"festival"]` (sing 形)

**Problem:** Turkish `‐lAr` は明確に分離可能な agglutinative 接尾辞 (Göksel & Kerslake 2005, §6.2.1)、`feedback_glue_marker.md` でも `tr` のサフィックス GLUE 対象として明記。**#26 で動詞末の 3pl 一致 `‐lar` を D 独立分節**しているのに、**同じ #26 内の名詞 `Çocuklar` の `‐lar` は融合**しているのは深刻な内部不整合。さらに他文 (#51 #53 #63 #75 #77) では全て fused。

**Proposed:** tr の名詞複数 `‐lAr` を独立分節 (ZWNJ 付き):
- #26 tr `[A:"Çocuklar"]` → `[A:"Çocuk"], [A:"‌lar"]` (動詞末の `[D:"‌lar"]` と並行)
- #51 tr `[C:"hikâyeler"]` → `[C:"hikâye"], [C:"‌ler"]`
- #53 tr `[B:"çiçekler"]` → `[B:"çiçek"], [B:"‌ler"]`
- #63 tr `[B:"kuşlar"]` → `[B:"kuş"], [B:"‌lar"]`
- #75 tr `[A:"Çocuklar"]` → `[A:"Çocuk"], [A:"‌lar"]`、`[C:"öğreniyorlar"]` → `[C:"öğreni"], [C:"‌yor"], [C:"‌lar"]` (現在進行 + 3pl 接尾)
- #77 tr `[B:"sonuçlar"]` → `[B:"sonuç"], [B:"‌lar"]`

---

### 12. hu 複数マーカー「‐k」の分節が全文で fused 【確実】

**Current (hu, ‐k/-ek/-ok/-ak):**
- 全文 FUSED: #26 `[A:"A gyerekek"]` (定冠詞 + 子供 + -ek、3 形態素融合)、#36 `[B:"ember"]` (sing 形! 複数なし)、#51 `[C:"történetek"]` (物語 + -ek) (これは出ていない、データでは `[C:"történeteket"]` も)、#53 `[B:"a virágok"]` (定冠詞 + 花 + -ok)、#57 `[B:"három nyelven"]` (3 + 言語 + -en、単数形)、#61 `[D:"a megbeszélésekre"]` (定冠詞 + 会議 + -ek + -re、4 形態素)、#63 `[B:"a madarak"]` (定冠詞 + 鳥 + -ak)、#69 `[C:"a szülei"], [H:"‌nek"]` (両親 + 3sg 所有 + -nek dative、両親自体は -i 双数なし)、#75 `[A:"A gyerekek"]`、#93 `[F:"fesztivált"]` (festivals 単数 acc!、複数性 -k がない)、#94 `[E:"ajtókat"]` (扉 + -k + -at acc、融合)

**Problem:** ハンガリー語 `‐k` (複数主格) は明確な agglutinative 接尾辞で、定冠詞 `a/az` も separate proclitic (Rounds 2009, §4.1)。`feedback_glue_marker.md` は hu の `-tem` `-mal` を GLUE 対象に挙げており、複数 `‐k` も同階層。とくに **#93 `[F:"fesztivált"]` (単数!)** はハンガリー語の数詞 + 単数則 (数量 modifier がある場合は名詞 sing) ではなく、**英語 `many festivals` を `sok fesztivál`/`sok fesztiválok` と訳すべきところ、`a kínai újévkor` (Chinese New Year) ではなく `birçok festival` と読むなら festivals 複数を表示すべき** — 実際 hu 文 `Ebben az országban nyáron sok fesztiváltakot rendeznek` のように複数 acc が必要なはず。データは `[F:"fesztivált"]` (sing acc) なのでこの点で複数性表示漏れの可能性。

**Proposed:**
- #26 hu `[A:"A gyerekek"]` → `[A:"A"], [A:"gyerek"], [A:"‌ek"]` (定冠詞 + 名詞 + 複数)
- #53 hu `[B:"a virágok"]` → `[B:"a"], [B:"virág"], [B:"‌ok"]`
- #61 hu `[D:"a megbeszélésekre"]` → `[D:"a"], [D:"megbeszélés"], [D:"‌ek"], [D:"‌re"]` (4 段)
- #63 hu `[B:"a madarak"]` → `[B:"a"], [B:"madar"], [B:"‌ak"]`
- #75 hu `[A:"A gyerekek"]` → `[A:"A"], [A:"gyerek"], [A:"‌ek"]`
- #93 hu `[F:"fesztivált"]` → 複数形に修正の上 `[F:"fesztivál"], [F:"‌ok"], [F:"‌at"]` (複数 acc) — ハンガリー語ネイティブによる文修正必要
- #94 hu `[E:"ajtókat"]` → `[E:"ajtó"], [E:"‌k"], [E:"‌at"]`

---

### 13. fi 複数マーカー「‐t (主格) / -i- (斜格)」の分節が全文で fused 【確実】

**Current (fi):**
- #26 `[A:"Lapset"]` (子供 + -t 複数主格、融合)
- #36 `[B:"ihmisiä"]` (人 + -i- 複数 + -ä 部分格、3 形態素融合)
- #51 `[C:"tarinoita"]` (物語 + -i- + -ta 部分格、融合)
- #53 `[B:"kukat"]` (花 + -t 複数主格、融合)
- #57 `[B:"kolmea kieltä"]` (3 + 言語 単数部分格)
- #63 `[B:"linnut"]` (鳥 + -t 複数主格、融合)、`[A:"Puissa"]` (木 + -i- + -ssa 内格、融合)
- #69 `[C|H:"vanhemmilleen"]` (両親 + -i- + -lle 向格 + -en 3sg 所有、4 形態素融合!)
- #75 `[A:"Lapset"]` (融合)
- #77 `[B|D|E:"koetuloksista"]` (テスト + 結果 + -i- + -sta 出格、巨大融合)
- #93 `[F:"festivaaleja"]` (festivals + -i- + -a 部分格、融合)、`[E:"monia"]` (多くの + -i- + -a 部分格、融合)
- #94 `[E:"ovia"]` (扉 + -i- + -a 部分格、融合)

**Problem:** フィンランド語の複数 `‐t` / `‐i-` は agglutinative 接尾辞で、格語尾と stacking する (Karlsson 1999, ch.7)。`feedback_glue_marker.md` で fi 接尾辞は GLUE 対象に明記され、#43 で過去テンス `‐in` を独立分節要請。**複数 `‐t` / `‐i-` も同階層** で、現状は全文 fused。とくに #69 `[C|H:"vanhemmilleen"]` は **4 形態素 (両親 + 複数 + 向格 + 所有) を 1 letter に圧縮** しており、形態論的に極端な fusion。

**Proposed:**
- #26 fi `[A:"Lapset"]` → `[A:"Laps"], [A:"‌et"]` (語幹 + 複数主格)
- #53 fi `[B:"kukat"]` → `[B:"kuk"], [B:"‌at"]`
- #63 fi `[B:"linnut"]` → `[B:"linn"], [B:"‌ut"]`、`[A:"Puissa"]` → `[A:"Pu"], [A:"‌issa"]` (puu + -i- + -ssa)
- #69 fi `[C|H:"vanhemmilleen"]` → `[C:"vanhempi"], [C:"‌ille"], [H:"‌en"]` (4 段では複雑だが少なくとも複数 + 格 + 所有を分離)
- #75 fi `[A:"Lapset"]` → `[A:"Laps"], [A:"‌et"]`
- #93 fi `[F:"festivaaleja"]` → `[F:"festivaale"], [F:"‌ja"]`、`[E:"monia"]` → `[E:"mon"], [E:"‌ia"]`
- #94 fi `[E:"ovia"]` → `[E:"ov"], [E:"‌ia"]`

---

### 14. ne 複数マーカー「‐हरू」の分節が全文で fused 【確実】

**Current (ne, ‐हरू):**
- #21 `[C:"साथीहरूसँग"]` (友達 + -हरू + सँग 共格)
- #26 `[A:"बच्चाहरू"]` (子供 + -हरू)
- #36 `[B:"मानिसहरू"]` (人 + -हरू)
- #51 `[C:"कथाहरू"]` (物語 + -हरू)
- #53 `[B:"फूलहरू"]` (花 + -हरू)
- #57 `[B:"तीन भाषाहरू"]` (3 + 言語 + -हरू)
- #63 `[B:"चराहरू"]` (鳥 + -हरू)
- #69 `[C|H:"आफ्ना आमाबुबालाई"]` (両親 集合語、-हरू なし)
- #75 `[A:"बच्चाहरू"]`
- #93 `[F:"चाडपर्वहरू"]` (festivals + -हरू)
- #94 `[E:"ढोकाहरू"]` (扉 + -हरू)

**Problem:** ネパール語 `‐हरू` (-harū) は **独立性の高い複数接尾辞** で、Manandhar/Riccardi *Nepali Grammar* で proclitic-like に分析される。Korean `‐들` や Persian `‐ها` と並行。データは全文 fused だが、#43 で確立された agglutinative 分節原則を適用するなら独立分節すべき。

**Proposed:**
- #26 ne `[A:"बच्चाहरू"]` → `[A:"बच्चा"], [A:"‌हरू"]`
- #36 ne `[B:"मानिसहरू"]` → `[B:"मानिस"], [B:"‌हरू"]`
- #53 ne `[B:"फूलहरू"]` → `[B:"फूल"], [B:"‌हरू"]`
- #63 ne `[B:"चराहरू"]` → `[B:"चरा"], [B:"‌हरू"]`
- #75 ne `[A:"बच्चाहरू"]` → `[A:"बच्चा"], [A:"‌हरू"]`
- #93 ne `[F:"चाडपर्वहरू"]` → `[F:"चाडपर्व"], [F:"‌हरू"]`
- #94 ne `[E:"ढोकाहरू"]` → `[E:"ढोका"], [E:"‌हरू"]`

---

### 15. ta 複数マーカー「‐கள்」の分節が全文で fused 【確実】

**Current (ta, ‐கள்):**
- #26 `[A:"குழந்தைகள்"]` (子供 + -கள்)
- #36 `[B:"மக்கள்"]` (人々、不規則)
- #51 `[C:"கதைகள்"]` (物語 + -கள்)
- #57 `[B:"மூன்று மொழிகளை"]` (3 + 言語 + -கள் + -ஐ acc)
- #63 `[B:"பறவைகள்"]` (鳥 + -கள்)
- #69 `[C|H:"பெற்றோருக்கு"]` (両親 + -க்கு dat、両親自体は collective)
- #75 `[A:"குழந்தைகள்"]`
- #77 `[B|D:"முடிவுகளால்"]` (結果 + -கள் + -ஆல் instr)
- #93 `[F:"திருவிழாக்கள்"]` (festivals + -கள்)
- #94 `[E:"கதவுகளைத்"]` (扉 + -கள் + -ஐ acc)

**Problem:** Tamil `‐கள்` (-kaḷ) は agglutinative 複数接尾辞で、Asher & Annamalai *Colloquial Tamil* (Routledge 2002) で典型的に分離可能。データは全文 fused。

**Proposed:**
- #26 ta `[A:"குழந்தைகள்"]` → `[A:"குழந்தை"], [A:"‌கள்"]`
- #51 ta `[C:"கதைகள்"]` → `[C:"கதை"], [C:"‌கள்"]`
- #57 ta `[B:"மூன்று மொழிகளை"]` → `[B:"மூன்று"], [B:"மொழி"], [B:"‌கள்"], [B:"‌ை"]` (数詞 + 名詞 + 複数 + acc 4 段、または 2-3 段に簡略)
- #63 ta `[B:"பறவைகள்"]` → `[B:"பறவை"], [B:"‌கள்"]`
- #75 ta `[A:"குழந்தைகள்"]` → `[A:"குழந்தை"], [A:"‌கள்"]`
- #93 ta `[F:"திருவிழாக்கள்"]` → `[F:"திருவிழா"], [F:"‌க்கள்"]`
- #94 ta `[E:"கதவுகளைத்"]` → `[E:"கதவு"], [E:"‌கள்"], [E:"‌ை"]`

---

### 16. sw 名詞クラス接頭辞 wa-/mi-/ma- の分節が全文で fused 【蓋然】

**Current (sw, noun class prefix marking plural):**
- #26 `[A:"Watoto"]` (wa- = noun class 2 PL + toto)
- #36 `[B:"watu"]` (wa- + tu)
- #51 `[C:"hadithi"]` (class 9/10、不変)
- #53 `[B:"Maua"]` (ma- = class 6 PL + ua "flower")
- #63 `[B:"Ndege"]` (class 9/10、不変)
- #69 `[C:"wazazi"]` (wa- + zazi 親)
- #75 `[A:"Watoto"]`
- #77 `[B:"matokeo"]` (ma- + tokeo)
- #93 `[F:"sherehe"]` (class 9/10、不変)
- #94 `[E:"milango"]` (mi- = class 4 PL + lango "door"、singular = mlango)

**Problem:** スワヒリ語の noun class system では、複数性は class 接頭辞 (wa- / mi- / ma- / vi- / n-) で明示される (Ashton *Swahili Grammar* 1944; Mohammed 2001)。これは「形態論的に分離可能な接頭辞」だが、Bantu の集合接辞融合的性質から **完全に独立した形態素として分節すべきかは議論余地** あり。Subject prefix (ni- / u- / a- / wa-) は動詞活用上独立要素として扱われる慣行があり、データ上 sw 動詞 (#74 `[A:"Nimekuwa"]`、#75 `[C:"wanajifunza"]`) でも fused のままで、名詞 class prefix と一貫性は取れている。

**Proposed:** sw は **noun class prefix を融合のまま** とする方針を closed-review で明文化。ただし agglutinative 分節原則を適用するなら:
- #26 sw `[A:"Watoto"]` → `[A:"Wa"], [A:"toto"]`
- #53 sw `[B:"Maua"]` → `[B:"Ma"], [B:"ua"]`
- #94 sw `[E:"milango"]` → `[E:"mi"], [E:"lango"]`

私見: sw は **noun class prefix を fused のまま維持** が学習者教材として読みやすく、現状維持を推奨。ただし方針明文化必要。

---

### 17. am 複数マーカー「‐očč」の分節が全文で fused 【確実】

**Current (am, -ኦች / -ዎች):**
- #26 `[A:"ልጆች"]` (子供 + -očč)
- #36 `[B:"ሰዎች"]` (人 + -očč)
- #51 `[C:"ታሪኮች"]` (物語 + -očč)
- #53 `[B:"አበባዎች"]` (花 + -očč)
- #57 `[B:"ሦስት ቋንቋዎችን"]` (3 + 言語 + -očč + -n acc)
- #63 `[B:"ወፎች"]` (鳥 + -očč)
- #69 `[C|H:"ለወላጆቹ"]` (両親 + 3sg 所有 + 前置詞)
- #75 `[A:"ልጆች"]`
- #77 `[B:"ውጤቱ"]` (結果 + -u 3sg、単数!)
- #93 `[F:"በዓላት"]` (festivals + -at sound plural, セム系借用)
- #94 `[E:"በሮችን"]` (扉 + -očč + -n acc)

**Problem:** Amharic `‐očč` は agglutinative 複数接尾辞で Leslau *Reference Grammar of Amharic* (1995) で分節可能。データは全文 fused。

**Proposed:**
- #26 am `[A:"ልጆች"]` → `[A:"ል"], [A:"‌ጆች"]` (語幹 + 複数)
- #51 am `[C:"ታሪኮች"]` → `[C:"ታሪ"], [C:"‌ኮች"]`
- #53 am `[B:"አበባዎች"]` → `[B:"አበባ"], [B:"‌ዎች"]`
- #63 am `[B:"ወፎች"]` → `[B:"ወፍ"], [B:"‌ዎች"]`
- #75 am `[A:"ልጆች"]` → `[A:"ል"], [A:"‌ጆች"]`
- #94 am `[E:"በሮችን"]` → `[E:"በ"], [E:"‌ሮች"], [E:"‌ን"]`

---

### 18. zh #21 "friends" の複数性が表示されない (vs ko/ja に対応する markedness 整合) 【確実】

**Current:**
- #21 zh `[C:"和朋友一起"]` (朋友 = friend、单数形のまま、複数 marker なし)
- 対応する他言語: ko `[C:"친구들과"]` (友達 + 들 PL)、vi `[C:"với bạn bè"]` (友達 集合語)、id `[C:"bersama teman"]` (友達 単数)、fr `[C:"avec des amis"]` (友達 PL + 不定冠詞 PL)、es_eu `[C:"con amigos"]` (友達 PL)、it `[C:"con amici"]` (友達 PL)、ja `[C:"友達と"]` (友達 集合語)

**Problem:** 中国語の `朋友` は **可算名詞だが複数 marker `们` は人称代名詞や有情人間に限定的に付く** (Li & Thompson 1981)。一方、英語参照 `friends` (PL) と並行翻訳として比較すると、zh は `朋友` (集合解釈で「友人と一緒に」を含意) を採用しており、これは **意味論的には自然だが cross-lang 整合で見ると ja `友達` と並行する unmarked 形**。問題は **#26 zh `[A:"孩子们"]` (children + 们) と #21 zh `[C:"和朋友一起"]` (friends + 们なし) で同じ「人間有情複数」に対して扱いが分裂**している点。

**Proposed:** 二択:
- (A) **#26 #75 の `孩子们` を `孩子` に変更** (zh の plural marker は context-dependent と明文化)、整合性を取る方向
- (B) **#21 を `和朋友们一起` に変更** (有情複数を全文で marked に統一)

私見では (B) を推奨。#26 #75 #21 で扱いが揃う。

---

### 19. la (ラテン語) #57 「tres linguas」と #21 「cum amicis」で 複数 acc/abl 分節が文間で fused 【蓋然】

**Current (la):**
- #21 `[C:"cum amicis"]` (前置詞 + 友達 abl.pl)
- #26 `[A:"Liberi"]` (子供 nom.pl)
- #36 `[A:"multi"], [B:"homines"]` (多くの nom.pl + 人 nom.pl、独立)
- #51 `[B:"iucundas"], [C:"fabulas"]` (面白い acc.pl + 物語 acc.pl、独立)
- #53 `[B:"Flores"]` (花 nom.pl)
- #57 `[B:"tres linguas"]` (3 + 言語 acc.pl、融合)
- #63 `[B:"Aves"]` (鳥 nom.pl)、`[A:"in arboribus"]` (前置詞 + 木 abl.pl、融合)
- #69 `[C|H:"parentibus suis"]` (両親 + 所有 dat.pl、融合)
- #75 `[A:"Liberi"]`
- #77 `[B:"eventis"]` (結果 abl.pl)
- #93 `[E:"multa"], [F:"festa"]` (多くの nom.pl + 祭 nom.pl、独立)
- #94 `[A:"Linguarum"]` (言語 gen.pl)、`[E:"ianuas"]` (扉 acc.pl)

**Problem:** ラテン語は屈折型なので **語幹 + 性数格屈折語尾の分節は教育的でない** (Allen & Greenough §22)。データは基本的に 1 letter = 1 形態論的語 という方針で、これは適切。**ただし #21 `[C:"cum amicis"]` のように前置詞 + 名詞を 1 letter に融合**しているのと、**#63 `[A:"in arboribus"]`** 同様の融合があるが、これは ar/he と並行する屈折型処理として許容できる。

ただし **#36 `[A:"multi"], [B:"homines"]`** で形容詞 + 名詞を別 letter に分節、**#51 `[B:"iucundas"], [C:"fabulas"]`** 同様。一方 **#57 `[B:"tres linguas"]` は数詞 + 名詞を 1 letter に融合**しており、これは数詞 = 形容詞的修飾語の扱いとして不整合。

**Proposed:**
- #57 la `[B:"tres linguas"]` → `[B:"tres"], [B:"linguas"]` または `[E:"tres"], [B:"linguas"]` (数詞独立、Indo-European 系全体で並行)
- #21 la `[C:"cum amicis"]` → `[D:"cum"], [C:"amicis"]` (前置詞独立、これは #63 `[A:"in arboribus"]` も同様)

---

### 20. de 複数マーカー (-en / -er / -e) と冠詞 die の分節が文間で fused 【蓋然】

**Current (de, 定冠詞 die + 複数名詞):**
- #21 `[C:"mit Freunden"]` (前置詞 + 友達 dat.pl、融合)
- #26 `[A:"Die Kinder"]` (定冠詞 + 子供 pl、融合)
- #36 `[A:"viele"], [B:"Menschen"]` (多くの + 人々、独立)
- #51 `[B:"interessante"], [C:"Geschichten"]` (面白い pl + 物語 pl、独立)
- #53 `[B:"Die Blumen"]` (定冠詞 + 花 pl、融合)
- #57 `[B:"drei Sprachen"]` (3 + 言語 acc.pl、融合)
- #63 `[B:"Die Vögel"]` (定冠詞 + 鳥 pl、融合)、`[A:"in den Bäumen"]` (前置詞 + 定冠詞 dat.pl + 木 dat.pl、3 形態素融合)
- #69 `[C:"seine Eltern"]` (所有 + 両親、融合)
- #75 `[A:"Die Kinder"]`
- #77 `[E:"den Test"], [B:"ergebnissen"]` (Testergebnisse 複合語、分節済)
- #93 `[F:"Feste"]` (祭 pl、独立)、`[E:"viele"]` (多くの)
- #94 `[E:"Türen"]` (扉 pl)

**Problem:** ドイツ語は屈折型で複数接尾辞 `‐en/-er/-e` は語幹融合が一般的、独立分節は形態論的に不自然 (Eisenberg 2006)。**しかし定冠詞 `die`/`den` は明確な proclitic で名詞と分離可能**。データ上、**#36 `viele Menschen`** や **#51 `interessante Geschichten`** で形容詞 + 名詞を別 letter に分節しているのに、**#26 `Die Kinder`** や **#53 `Die Blumen`** で定冠詞 + 名詞を 1 letter に融合**しているのは内部不整合。

**Proposed:** Romance #7 と並行修正:
- #26 de `[A:"Die Kinder"]` → `[A:"Die"], [A:"Kinder"]`
- #53 de `[B:"Die Blumen"]` → `[B:"Die"], [B:"Blumen"]`
- #63 de `[B:"Die Vögel"]` → `[B:"Die"], [B:"Vögel"]`、`[A:"in den Bäumen"]` → `[A:"in"], [A:"den"], [A:"Bäumen"]` (前置詞 + 定冠詞 + 名詞)
- #75 de `[A:"Die Kinder"]` → `[A:"Die"], [A:"Kinder"]`

---

### 21. ko_bus / ja_osa など方言の複数マーカー扱いが標準形と非同期 【確実】

**Current (方言の複数 marker 扱い):**
- #21 ko_bus `[C:"친구들이랑"]` (들 + 이랑 = 標準形 `친구들과` と並行) — 들 FUSED
- #21 ko_kp `[C:"동무들과"]` (동무 + 들 + 과、北朝鮮語) — 들 FUSED
- #26 ko_bus / ko_kp `[A:"아이들이"]` (들 FUSED、ko と同じ)
- #75 ko_bus `[A:"아이들이"]`、ko_kp `[A:"아이들은"]`
- #21 ja_osa `[C:"友達と"]` (大阪弁、たち なし)、ja_aom `[C:"けやぐど"]` (青森弁、複数 marker なし)、ja_oki `[C:"どぅしとぅ"]` (沖縄弁、複数 marker なし)
- #26 ja_osa `[A:"子供らが"]` (大阪弁では `たち` ではなく `‐ら`!)、ja_oki `[A:"わらびんちゃーが"]` (沖縄弁では `んちゃー` 複数接尾)

**Problem:** memory `feedback_fix_all_variants_together.md` (方言 sibling 同期則) と `feedback_split_segments_like_reference.md` (方言は基準言語と同じ構造) に照らすと、**指摘 1 (ko 들 独立分節) を適用するなら ko_bus / ko_kp も同期更新が必要**。同様に **指摘 2 (ja たち 独立分節) を適用するなら ja_osa の `子供ら` (`‐ら` も bound suffix 複数接尾) や ja_oki の `わらびんちゃー` (`んちゃー` 複数接尾) も独立分節**すべき。これは大きなバンドル修正の必要性を意味する。

**Proposed:** 指摘 1-2 を採択する場合、方言側を同時修正:
- #26 ja_osa `[A:"子供らが"]` → `[A:"子供"], [A:"‌ら"], [A:"‌が"]`
- #26 ja_oki `[A:"わらびんちゃーが"]` → `[A:"わらび"], [A:"‌んちゃー"], [A:"‌が"]`
- #26 ko_bus `[A:"아이들이"]` → `[A:"아이"], [A:"‌들이"]` (ko と並行)
- #75 ko_kp `[A:"아이들은"]` → `[A:"아이"], [A:"‌들은"]`

---

### 22. en `friends` `parents` `children` 等の `-s/-ren` 複数接尾辞は全文で fused — TAM の `-ed` 分節 (#43 指摘 8) との非対称 【要検討】

**Current (en):**
- #21 `[C:"with friends"]` (前置詞 + friends、融合)
- #26 `[A:"The children"]` (定冠詞 + 子供、不規則複数)
- #36 `[B:"people"]` (不規則複数、suppletive)
- #51 `[C:"stories"]` (-es 規則複数)
- #53 `[B:"The flowers"]` (定冠詞 + 規則複数)
- #57 `[B:"three languages"]` (数詞 + 規則複数)
- #59 `[B:"every 15 minutes"]` (修飾 + 規則複数)
- #63 `[B:"The birds"]` (定冠詞 + 規則複数)、`[A:"in the trees"]` (前置詞 + 定冠詞 + 規則複数、融合)
- #69 `[C:"his parents"]` (所有 + 規則複数、融合)
- #74 `[B:"for 30 minutes"]` (規則複数)
- #75 `[A:"The children"]`
- #77 `[B:"results"]` (規則複数)
- #93 `[F:"festivals"]` (規則複数)
- #94 `[E:"doors"]` (規則複数)

**Problem:** **#43 で TAM 接尾辞 `‐ed` を #46 で独立分節 `[H:"ed"]` にする方針**が示されたなら、英語複数接尾辞 `‐s/-es/-ren` も同階層 bound suffix なので並行処理を検討すべき。実際 `feedback_glue_marker.md` は en については明示しないが、agglutinative 系言語と並行するなら en plural `-s` も `‐s` (ZWNJ + s) で独立分節可能。

しかし en は **屈折型寄り (-s は単一形態素として高速融合)** であり、教育的価値は低い。**#43 指摘 8** (en `‐ed`) で「**en の `-ed` 分節を廃止 (Romance synthetic 過去と同じ扱い)**」を私見で推奨したが、同じ論理で **en の `-s` 複数も非分節とすべき**。一方、もし en で `-ed` を残すなら、`-s` も独立分節すべきというのが整合的な結論。

**Proposed:** closed-review で en 形態素分節方針 (-ed / -s 双方) を決定:
- (A) **en は分節独立しない** (#43 #46 の `[H:"ed"]` を `[E:"talked"]` に戻す方針と並行): 全 en 複数現状維持。
- (B) **en も agglutinative-style 分節**: #21 `[C:"with friends"]` → `[C:"with"], [C:"friend"], [C:"‌s"]`、#26 `[A:"The children"]` → `[A:"The"], [A:"child"], [A:"‌ren"]` (不規則複数 -ren)、#63 `[B:"The birds"]` → `[B:"The"], [B:"bird"], [B:"‌s"]` 等。これは大規模変更で実装コストが高い。

私見では (A) が en の屈折性に合致。

---

### 23. ru/uk/pl 複数斜格屈折の融合度が文間で分裂 【蓋然】

**Current (ru):**
- #21 `[C:"с друзьями"]` (前置詞 + 友達 instr.pl、融合)
- #26 `[A:"Дети"]` (子供 nom.pl)
- #36 `[A:"много"], [B:"людей"]` (多くの + 人 gen.pl、独立)
- #51 `[B:"интересные"], [C:"истории"]` (面白い nom.pl + 物語 nom.pl、独立)
- #53 `[B:"Цветы"]` (花 nom.pl)
- #57 `[B:"на трёх языках"]` (前置詞 + 3 + 言語 prep.pl、3 形態素融合)
- #63 `[B:"Птицы"]` (鳥 nom.pl)、`[A:"на деревьях"]` (前置詞 + 木 prep.pl、融合)
- #69 `[C|H:"своим родителям"]` ない (これは uk)、ru は `родителям` ない、データ確認: `[C|H:"родителям"]` — `своим` ない、確認再
- #75 `[A:"Дети"]`
- #93 `[F:"фестивалей"]` (festivals gen.pl)、`[E:"много"]`
- #94 `[E:"двери"]` (扉 nom.pl)

**Problem:** ロシア語は屈折型で複数語尾は語幹融合が一般的、独立分節は不自然 (Wade 2010)。**ただし前置詞 + 名詞の融合度に文間で分裂**: #36 `на станции` が独立に対し、#57 `на трёх языках`、#63 `на деревьях` は 1 letter に融合。これは前置詞独立分節の不整合。

**Proposed:**
- #57 ru `[B:"на трёх языках"]` → `[B:"на"], [B:"трёх"], [B:"языках"]` または `[D:"на"], [E:"трёх"], [B:"языках"]` (3 段)
- #63 ru `[A:"на деревьях"]` → `[A:"на"], [A:"деревьях"]`
- #21 ru `[C:"с друзьями"]` → `[D:"с"], [C:"друзьями"]`

ru の複数斜格屈折自体は融合のままで OK (屈折型尊重)。

---

### 24. tl `mga` と vi `những` の同階層性が方針として明文化されていない 【要検討】

**Current:** tl `mga` は #21 で `kasama ang mga kaibigan` のように `ang + mga + N` を 1 letter に塊めるが、#94 で `mga bagong + pinto` のように `mga + ADJ` + `N` に分割。vi `những` は全文で `những + N` を 1 letter に塊める。両者とも **proclitic plural determiner** で同階層であるべきだが、現状の扱いは異なる。

**Problem:** tl `mga` と vi `những` を同じく proclitic として扱うか、別物として扱うかの方針が暗黙。

**Proposed:** closed-review で **「proclitic plural determiner (tl mga / vi những / fa hâ-像) は独立分節」** を方針確認。指摘 4 + 5 で示した修正を統合適用すれば、両者とも `[X:"mga"], [Y:"N"]` `[X:"những"], [Y:"N"]` の形に揃う。

---

### 25. eu (バスク語) 複数 absolutive `‐ak` の分節が全文で fused 【蓋然】

**Current (eu):**
- #21 `[C:"lagunekin"]` (友達 + -ekin 共格、融合)
- #26 `[A:"Haurrak"]` (子供 + -ak、融合)
- #36 `[A:"asko"], [B:"jende"]` (多くの + 人 集合語、独立)
- #51 ない
- #53 `[B:"loreak"]` (花 + -ak、融合)
- #57 `[B:"hiru hizkuntza"]` (3 + 言語 単数形)
- #63 `[B:"txoriak"]` (鳥 + -ak、融合)
- #69 `[C|H:"bere gurasoei"]` (所有 + 両親 + -i dat.pl、融合)
- #75 `[A:"Haurrak"]`
- #93 `[F:"jaialdi"], [E:"asko"]` (祭 単数 + 多くの、独立、しかし複数性は asko で表示)
- #94 `[A:"Hizkuntzen"]` (言語 + -en gen.pl)、`[E:"berriak"]` (新しい + -ak abs.pl)

**Problem:** バスク語の `‐ak/-ek` (absolutive/ergative pl) と `‐en` (gen.pl) は agglutinative 接尾辞 (Hualde & Ortiz de Urbina *A Grammar of Basque* 2003)。データは全文 fused。

**Proposed:**
- #26 eu `[A:"Haurrak"]` → `[A:"Haurr"], [A:"‌ak"]`
- #53 eu `[B:"loreak"]` → `[B:"lore"], [B:"‌ak"]`
- #63 eu `[B:"txoriak"]` → `[B:"txori"], [B:"‌ak"]`
- #75 eu `[A:"Haurrak"]` → `[A:"Haurr"], [A:"‌ak"]`
- #94 eu `[A:"Hizkuntzen"]` → `[A:"Hizkuntz"], [A:"‌en"]`、`[E:"berriak"]` → `[E:"berri"], [E:"‌ak"]`

---

## 総括

本レビュー (#47) は 100 文中 **20 文 (en 複数名詞含む文)** を対象に、**ko 들 / ja たち / zh 们 / vi những / tl mga / id 重複 / fa ‐ها / tr ‐lAr / hu ‐k / fi ‐t/-i- / ne ‐हरू / ta ‐கள் / am ‐očč / ar ال + sound plural / he ‐ה + ‐ים/-ות / Romance 定冠詞 / de 定冠詞 / eu ‐ak / en ‐s** の **19 種の複数マーカー** が cross-lang/cross-sentence で整合分節されているかを検証した。

**支配的な欠陥**: agglutinative 系言語 (ko/tr/fi/hu/fa/ne/ta/am/eu) の **複数接尾辞が全文で fused のまま** という体系的取りこぼし。同言語内で TAM 接尾辞 (`‐다` `‐tum` `‐in` `‐tem`) や格接尾辞 (`‐에서` `‐ssa` `‐ban`) は `feedback_glue_marker.md` 規約により ZWNJ 独立分節されている (とくに #43 で TAM が体系化) のに、**同階層の複数接尾辞だけが取り残されている**。これは #43 の TAM grand convention を **複数マーカーにも拡張する必要性** を強く示唆する (指摘 1, 10-15, 17, 25 の 8 件が同パターン)。

副次的な欠陥は (a) **Romance/Germanic 定冠詞 + 複数名詞が文間で OWN/FUSED 分裂** (指摘 7, 9, 20)、(b) **vi 前置複数粒子 những が全文 fused** (指摘 4)、(c) **tl mga が文間で位置不整合** (指摘 5)、(d) **zh 们 の有情名詞限定使用が #21 友達に未適用** (指摘 3, 18)。

---

- **File:** `/home/jounlai/langmap/langmap_reviews/47_open.md`
- **Issue count:** 25
- **Dominant plural-marking defect:** agglutinative 系言語 (ko/tr/fi/hu/fa/ne/ta/am/eu) の **複数接尾辞 (‐들/-lAr/-t/-k/-ها/-हरू/-கள்/-očč/-ak) が全文で fused のまま**取り残されており、#43 で確立された TAM 接尾辞独立分節規約 (ZWNJ prefix) と非対称な状態が体系的に残存している。

---

## Dev response — round 1 (2026-06-04)

レビュアーの問題提起は妥当だが、**現行 applier の制約** (palette validation + 隣接同一 role-letter 拒否 + テキスト変更禁止) を考慮すると、提案された「複数マーカー ZWNJ 独立分節 grand convention」のほとんどは **本ラウンドでは適用不能**。詳細は以下。

### 適用した修正 (1 件)

#### Issue 7 (fr #77) — cross-sibling role 整合性
`[E:"les résultats du"] [B:"test"]` は it/es_eu/pt_eu の **B=results, E=test** パターンと逆転していた。fr のみ B=test, E=results+前置詞の 4-形態素圧縮で異常。3 セルに分解:
- `[A:"Il"] [C:"a été surpris"] [D:"par"] [B:"les résultats"] [D:"du"] [E:"test"]`
- 表面テキスト "Il a été surpris par les résultats du test" 完全保存
- 隣接重複なし (A-C / C-D / D-B / B-D / D-E)
- sibling Romance (it `[D:"dai"][B:"risultati"][E:"del test"]` / es `[D:"por"][B:"los resultados"][E:"del examen"]` / pt `[D:"com"][B:"os resultados"][E:"do teste"]`) と D=prep / B=art+noun / E=prep-art+noun(or noun) の構造が揃う
- 副次的に指摘 7 で言及された fr `[E:"les résultats du"]` の 4 形態素圧縮も解消
- memory `feedback_cross_sibling_role_consistency.md` に準拠

### Deferred items (24 / 25)

#### Grand convention 適用ブロック理由 — 共通

提案された「**agglutinative 複数接尾辞を ZWNJ で独立分節**」(指摘 1, 2, 10, 11, 12, 13, 14, 15, 17, 21, 25 → ko/ja/fa/tr/hu/fi/ne/ta/am/方言/eu) を実装するには:

```
例: ko #26 [A:"아이들이"] → [A:"아이"], [A:"‌들이"]
```

このパターンは **同一 role-letter A の隣接** を生み、applier の `adjacent-same-letter` 拒否ルールに直接違反する。回避するには:

1. **異なる role-letter を使う**: ただし palette validation により sentence.segments に既存する letter のみ許容、新規 letter (例: I / J / K) を導入できない。さらに、対象 20 文中 18 文 は palette が **完全占有** (A-E or A-F or A-G 全て使用済み)。`#26 [A,B,C,D,E]` palette は ja の場合 `A=children, B=in, C=playing, D=progressive(いる), E=park` で **全 5 letter が意味論的に占有済み**。ko 들を複数 role 用に新 letter 化する空きがない。
2. **既存 free letter を流用**: 一部文では D が free (例: #26 hu, tl, la, fi)、しかし D は他言語で **TAM/progressive** role に固定されているため、複数用に流用すると cross-language role consistency が崩壊する。`feedback_cross_sibling_role_consistency.md` 違反。

**結論**: 本 convention を実装するには **data.js の sentence.segments 構造拡張** (palette に "P" など複数専用 letter を追加し、対象 sentence 全てに色定義を追加) が必要。これは review #47 単独の dev round で対応すべき範囲を超え、**closed-review で全体方針を確定 + データ構造再設計 + 全 100 文 sweep を bundle で行う改修** が筋。

#### Issue-by-issue 整理

| # | 指摘内容 | 判定 | 理由 |
|---|---------|------|------|
| 1 | ko 들 独立分節 | DEFER | palette 全占有、同 letter 隣接ブロック (grand convention) |
| 2 | ja たち 独立分節 | DEFER | 同上 |
| 3 | zh 们 朋友追加 #21 | DEFER | テキスト変更要 (`朋友` → `朋友们`)、本 round は no-text-change 原則 |
| 4 | vi những 独立分節 | DEFER | palette 全占有 (#26/#51/#53/#61/#75/#94 全て A-E 占有) |
| 5 | tl mga 位置統一 | DEFER | (a) #94 で `mga` を E に移すと "bagong mga pinto" となり Tagalog 文法違反 (mga は被修飾語直前); (b) palette 全占有で `mga` 独立切出不能; (c) #93 `pagdiriwang` → `mga pagdiriwang` はテキスト変更要 |
| 6 | id/ms reduplication 統一 | DEFER | テキスト変更要 (`teman` → `teman-teman`)、しかも id/ms では reduplication は optional で意味論的 marker、cross-lang 統一の是非は closed-review で方針確認すべき |
| 7 | Romance 定冠詞 + 名詞独立 | PARTIAL | fr #77 のみ適用 (上記)。#26/#53/#63/#75 等は palette 全占有でブロック |
| 8 | ar 定冠詞 + sound plural | DEFER | reviewer 自身が (A) 現状維持を推奨。ar は屈折型寄りで Rule #14 適用外。closed-review で明文化 |
| 9 | he 定冠詞 + 複数接尾 | DEFER | palette 全占有、grand convention と同パターン |
| 10 | fa ‐ها 独立分節 | DEFER | grand convention ブロック |
| 11 | tr ‐lAr 独立分節 | DEFER | 同上。#26 で動詞末 ‐lar を D に独立しているのは TAM convention のため許容、名詞末 -lar は palette 全占有 |
| 12 | hu ‐k 独立分節 | DEFER | 同上 |
| 13 | fi ‐t/-i- 独立分節 | DEFER | 同上 |
| 14 | ne ‐हरू 独立分節 | DEFER | 同上 |
| 15 | ta ‐கள் 独立分節 | DEFER | 同上 |
| 16 | sw noun class prefix | DEFER | reviewer 自身が現状維持を推奨 |
| 17 | am ‐očč 独立分節 | DEFER | grand convention ブロック |
| 18 | zh #21 朋友们 補完 | DEFER | テキスト変更要、本 round は no-text-change |
| 19 | la 数詞 + 名詞分節 | DEFER | palette 全占有、別 review (#42/#43?) で論じる屈折型扱い方針要 |
| 20 | de 定冠詞 + 複数 | DEFER | palette 全占有 |
| 21 | 方言の複数 marker 同期 | DEFER | 指摘 1-2 と bundle、本 round では 1-2 が defer のため 21 も defer |
| 22 | en ‐s/-ren 分節 | DEFER | reviewer 自身が (A) en 屈折型扱い (非分節) を推奨。閉ループ |
| 23 | ru/uk/pl 斜格屈折 + 前置詞 | DEFER | 屈折型尊重、palette 全占有 |
| 24 | tl mga / vi những 同階層性方針 | DEFER | 方針確認 → closed-review |
| 25 | eu ‐ak 独立分節 | DEFER | grand convention ブロック |

### Closure 推奨

**Closure recommendation: defer-to-closed-review (issues 1-2, 4-6, 9-15, 17, 19-25) + adopt (issue 7 partial)**

本レビューは **構造拡張を要する grand convention 提案** が主体で、単発 dev round では消化不能。閉ループでは以下の方針判断が必要:

1. **複数マーカーに専用 role letter (例: "P") を palette に追加するか否か** — 追加すれば agglutinative 系全 8 言語 × 8+ 文 = 64 セル + 方言 sibling sweep の大規模改修が走る。追加しなければ「複数マーカーは fused」を方針として明文化し、`feedback_glue_marker.md` を「TAM/格 接尾辞のみ ZWNJ 独立、複数接尾辞は除外」に修正。
2. **ar/he の屈折型 vs agglutinative 分節方針** — 指摘 8, 9 のように「sound plural / 定冠詞 al-/ha- を独立分節するか」を Rule #14 の範囲決めとして明文化。
3. **id/ms reduplication / vi những-các-mấy-bọn / tl mga / zh 们 の選択語彙 cross-lang 整合性** — 指摘 3, 4 (vi の語彙分裂), 5 (tl mga 補完), 6 (id 重複統一), 18 (zh 朋友们) は **語彙 / 翻訳選択** の論点で、本来 review #47 (分節 only) の射程外。語彙 review (#41/#42 系) で別途処理推奨。
4. **fr #94 `des langues` / it `delle lingue` の冠詞融合** — 指摘 7 後半、palette 制約で本 round 不可。closed-review で「Romance 冠詞 + 名詞 fused 維持」を方針確定するか、palette 拡張で対応するか判断。

本 round dev は **適用 1 件 / defer 24 件**、closure rec は **close-with-deferral** (closed marker に変更、ただし grand convention 提案は別 issue (例: review #48+) で structural 設計とともに再提起)。

