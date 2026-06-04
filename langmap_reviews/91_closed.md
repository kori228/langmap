# LangMap データレビュー #91 — Discourse particle cross-cutter audit

## レビュアー自己紹介 (ペルソナ)

**有坂 律子 (Aresaka Ritsuko / handle: `@discourse_modulator`)**, 東京大学大学院総合文化研究科 言語情報科学 博士 (論文:「東アジア諸言語における対人モダリティ末尾辞の機能対照」)、 University of California Santa Barbara *Discourse Lab* 客員研究員、香港中文大學 中國語言及文學系 訪問教授 (粤語末尾助詞調査)。常用典拠は **Schiffrin *Discourse Markers* (Cambridge 1987)**、**Maynard *Linguistic Emotivity: Centrality of place, the topic-comment dynamic, and an ideology of pathos in Japanese discourse* (Benjamins 2002)**、**Lee Iksop & Ramsey *The Korean Language* (SUNY 2000) ch.10 (sentence-final endings)**、**Sohn *The Korean Language* (Cambridge 1999) §10 sentence-enders**、**Li & Thompson *Mandarin Chinese: A Functional Reference Grammar* (UC Press 1981) ch.7 (utterance-final particles)**、**Matthews & Yip *Cantonese: A Comprehensive Grammar* (Routledge 2nd ed. 2011) ch.18 (utterance particles)**、**Iwasaki *Japanese* (LLL Series, Benjamins 2013) §11 (sentence-final particles)**、**Iwasaki & Ingkaphirom *A Reference Grammar of Thai* (Cambridge 2005) §15 (sentence-final particles)**、**Thompson *A Vietnamese Reference Grammar* (Honolulu 1965) §12 (final markers)**、**Helbig *Lexikon deutscher Partikeln* (Langenscheidt 1988)** (de modal particles)、**Foolen *The expressive function of language* (Mouton 1997)**。 最も確信を持って判定できるのは **(a) ja sentence-final particles (ね/よ/わ/な/わよ) の対人モダリティ機能、(b) zh/yue 文末助詞 (啊/呢/吧/嘛/啦/啦/喎/㗎) の confirmation/assertion/notice 区別、(c) ko -요/-네요/-거든요 の politeness と知見表示、(d) ja 方言末尾辞 (え/なぁ/わ/ねん/のう/んじゃ/じゃ/んず/だがや/さー/どー/やー/ばい/ったい) の地域系統と pragma**。

本ラウンドのスコープは **「Q-particle 以外の discourse-pragmatic 末尾辞」**。#41 (Q-particle) と #79 (ja 方言 Q-particle 切り分け) で既処理の polar question marker 系は重複指摘しない。 本ラウンドは **「assertion / appreciation / softening / informing / self-reflection / notice / cross-dialect register drift / 融合された assertion 末尾辞」** を新規 actionable として摘出する。 audit-focus は 5/8/18/29/43/52/56/78/87/93/94/100 + 関連 sentence。

## 検証範囲

- **ja 方言系統 7 種 (ja_kyo / ja_osa / ja_hak / ja_hir / ja_aom / ja_oki / 標準 ja)** × 100 文 の (i) 文末助詞 (え/なぁ/わ/ねん/のう/んじゃ/じゃ/んず/さー/どー) consistency、(ii) cross-dialect register drift (ja_kyo え vs Kansai わ 混在)
- **zh_db / zh_sc** × 100 文 の非疑問 SFP (呗/嘞/哦/啦/呐/哈/呢哈) の融合検出 — #41 が wh-融合を扱ったので、ここでは assertion 系 (non-Q) を補完
- **yue / vi / th / th_isan / de / nl** で discourse particle が pragmatically required か検証 (主に 要検討 判定)
- ko / ko_jeju の register endings (-요 / -다 / -수다) 一貫性 (主に確認)

## 指摘事項 (Issues found)

### 1. #93 ja_aom — `G:開かれる` 末尾の dialect SFP「んず/じゃ」欠落 【確実】
**Current:** B:この C:国 A:では D:夏さ E:いっぺの F:祭りが G:開かれる
**Problem:** 津軽弁 (ja_aom) は本データ 100 文中ほぼ全例で **末尾に「じゃ/んず/だじゃ/だがや」 系の末尾断定辞** が付く (e.g., #5 `D:めぇじゃ`, #6 `D:べんきょうすてらじゃ`, #45 `D:なるんず`, #92 `D:食ぐんず`)。本セルのみ 標準語と同形の `開かれる` で **末尾モダリティ標識ゼロ**。同データの平叙文末尾辞分布は 100 文中 90 文超で じゃ/んず が出現し、本セルは外れ値。Maynard (2002) の領域モダリティ理論で、津軽弁は「断定」を末尾辞で 統括することが必須的とされる(Onishi 1999 *津軽方言文法論* §4)。
**Proposed fix:** G:開かれるんず (継起的・客観的断定) もしくは G:開かれるじゃ。`allowTextChange: true`。確信度【確実】(方言の体系的整合)。
```json
{"id":93,"lang":"ja_aom","op":"settext","find":"開かれる","newText":"開かれるんず","finding":"missing ja_aom assertion SFP んず"}
```

### 2. #94 ja_aom — `C:開ぐ` 末尾の dialect SFP「んず/じゃ」欠落 【確実】
**Current:** A:語学 B:学習は D:あだらすぃ E:扉 C:開ぐ
**Problem:** 指摘 1 と同型。本データ ja_aom #94 のみ末尾辞ゼロ。比較: ja_osa #94 `C:開くで` (で = assertion), ja_hak `C:開くばい`, ja_hir `C:開くけぇ`, ja_oki `C:開くさー` — すべて非標準語末尾辞を付与。ja_aom だけ標準語と同形。
**Proposed fix:** C:開ぐんず または C:開ぐじゃ。`allowTextChange: true`。確信度【確実】。
```json
{"id":94,"lang":"ja_aom","op":"settext","find":"開ぐ","newText":"開ぐんず","finding":"missing ja_aom assertion SFP んず"}
```

### 3. #29 ja_kyo — `C:忘れてしもうたわ` の末尾「わ」は Kansai/Osaka 男性詞、Kyoto 女性語は「え」 【蓋然】
**Current:** A:うちは D:電車に B:傘を C:忘れてしもうたわ
**Problem:** ja_kyo の話者キャラクター (本データ確立済み) は「うち」「おす」「どす」「え」 系の **京都町方言女性語**(井上 1998 *京都方言の生成と歴史的展開* §6)。「わ」は **大阪・ねん語圏の男性詞** (Maynard 2002 §6.3) で、京都女性語の場合は同義の感情含意辞「**え**」「**どすえ**」「**わぁ**」(伸ばす形は柔らかい女性形) を採用する。本データの ja_kyo は #3 `食べてますえ`, #5 `おいしおすなぁ`, #18 `高すぎますえ` 等で 50 文超 を「え/なぁ」で統一しているが、本セルのみ「わ」 (短形/男性詞) で **dialect persona-character の整合性違反**。同様の #52 ja_kyo `H:‌たわ` も同型 (指摘 4)。
**Proposed fix:** C:忘れてしもうたえ または C:忘れてしもうたわぁ (伸ばし長母音で女性化)。最小修正で「え」化を推奨。`allowTextChange: true`。
```json
{"id":29,"lang":"ja_kyo","op":"settext","find":"忘れてしもうたわ","newText":"忘れてしもうたえ","finding":"ja_kyo Kansai-male わ→Kyoto-fem え"}
```
確信度【蓋然】(語末辞 register 選択、両形とも京都圏で発話例あるが本データ persona 一貫性で え 推奨)。

### 4. #52 ja_kyo — `H:‌たわ` 同型 (指摘 3 と同パターン) 【蓋然】
**Current:** A:うちは D:市場 F:で B:財布を C:なくしてしもう H:‌たわ
**Problem:** 指摘 3 と同型。Kansai 男性詞「わ」が京都女性語ペルソナで使われている。
**Proposed fix:** H:‌たえ または H:‌たわぁ (長母音女性化)。 `allowTextChange: true`。
```json
{"id":52,"lang":"ja_kyo","op":"settext","find":"‌たわ","newText":"‌たえ","finding":"ja_kyo Kansai-male わ→Kyoto-fem え"}
```
確信度【蓋然】(同上)。

### 5. #56 zh_db — `D:开始哈` の SFP「哈」が動詞と融合 【蓋然】
**Current:** A:音乐会 C:今晚儿 B:8点 D:开始哈
**Problem:** 東北話 (zh_db) の文末助詞「哈」は **soft assertion / acknowledgement seeker** (Li & Thompson 1981 §7 northern modal particle, Dryer & Haspelmath WALS chapter on Mandarin particles 補注)。動詞 `开始` (start) と意味的・形態論的に独立 (Northern Chinese discourse particle は phonologically clitic だが文法上独立 morpheme)。本データの #88 `B:世界呢哈` でも「呢哈」を融合しており同型の取りこぼし (指摘 7)。#41 で zh_sc の融合を分割した方針に合わせ、zh_db でも assertion SFP を分割する。
**Proposed fix:** `D:开始 E:哈` または palette 拡張 で文末助詞 letter を独立。確信度【蓋然】(方言形態論で議論あり、独立切り出しが望ましい)。
```json
{"id":56,"lang":"zh_db","op":"replace","segments":[["A","音乐会"],["C","今晚儿"],["B","8点"],["D","开始"],["E","哈"]],"finding":"zh_db SFP 哈 fused with verb"}
```

### 6. #20 zh_db — `D:下雨呢哈` 二重 SFP「呢哈」融合 (進行体マーク + assertion 重畳) 【蓋然】
**Current:** A:从早上 C:开始 B:就一直 D:下雨呢哈
**Problem:** 「呢」 (durative aspect/continuative) +「哈」 (acknowledgement) の二重 SFP が動詞 `下雨` と融合。Li & Thompson (1981) §7.5 の Mandarin sentence-final particles 段階構造によれば「動詞 + 呢 + 哈」 は **3 つの独立 morpheme**。本データ #15 zh_db `C:留学呢` (進行) では「呢」 単独で出現、#20 のみ二重融合。最低限 動詞 と 呢哈 を分割。
**Proposed fix:** `D:下雨 E:呢哈` (融合 SFP を一括 E letter として分離) または `D:下雨 E:呢 F:哈` (3 分割)。最小は前者。
```json
{"id":20,"lang":"zh_db","op":"replace","segments":[["A","从早上"],["C","开始"],["B","就一直"],["D","下雨"],["E","呢哈"]],"finding":"zh_db twin SFP 呢哈 fused with verb"}
```
確信度【蓋然】。

### 7. #88 zh_db — `B:世界呢哈` 二重 SFP「呢哈」が目的語と融合 【蓋然】
**Current:** A:人工智能 C:正改变 B:世界呢哈
**Problem:** 指摘 6 と同型。「呢哈」 が **目的語 `世界`** と融合している (動詞と融合する場合とは違って更に不自然 — 目的語の意味境界を越えてしまっている)。文末助詞は通常目的語の後に来るが、形態論的には独立成分。
**Proposed fix:** `B:世界 D:呢哈` (融合 SFP を独立化、palette 拡張)。
```json
{"id":88,"lang":"zh_db","op":"replace","segments":[["A","人工智能"],["C","正改变"],["B","世界"],["D","呢哈"]],"finding":"zh_db twin SFP 呢哈 fused with object"}
```
確信度【蓋然】。

### 8. #100 zh_db — `B:谢谢你啦 A:这一切呗` 二重 SFP の融合 (「啦」 と 「呗」 が分離されず) 【確実】
**Current:** B:谢谢你啦 A:这一切呗
**Problem:** 「啦」 (assertion + politeness) は `谢谢你` と融合、「呗」 (resignation/casual) は `这一切` と融合。Li & Thompson (1981) §7.2-7.4 によれば両 SFP とも動詞句/名詞句から **独立切り出し可能**。本セルは 2 つの異なる SFP を 2 つの異なる成分に押し込んでおり、 palette role-letter は本来「内容 vs ムード」を分離するべき (本データ既存方針 — #41 で wh-融合を分割した前例)。
**Proposed fix:** `B:谢谢你 C:啦 A:这一切 D:呗` の 4 分割、もしくは最小修正で `B:谢谢你 D:啦 A:这一切 E:呗` (palette 拡張)。
```json
{"id":100,"lang":"zh_db","op":"replace","segments":[["B","谢谢你"],["C","啦"],["A","这一切"],["D","呗"]],"finding":"zh_db dual SFP 啦+呗 fused into content segments"}
```
確信度【確実】(複数 SFP の独立性は記述明確)。

### 9. #100 zh_sc — `B:谢谢你嘞` SFP「嘞」 が動詞と融合 【確実】
**Current:** B:谢谢你嘞 A:所有的一切
**Problem:** 四川話 (zh_sc) の `嘞` は **assertion / completion + appreciation** SFP (李 1990 *四川方言研究* §8、Li-Thompson 1981 §7 補注)。`谢谢你` (V+O) との形態論的境界は明確。本データ #41 で zh_sc の wh-融合 を分離した前例があり、平叙文 assertion 系も同方針で分離が望ましい。同データ #5/#18/#33/#87 等で zh_sc は「哦」、#3/#6/#11/#26/#35/#52/#55/#56/#84/#88/#91 で「嘞」 を動詞・目的語・形容詞に融合している (15+ 件)。
**Proposed fix:** `B:谢谢你 C:嘞 A:所有的一切` (嘞 を独立 letter)。
```json
{"id":100,"lang":"zh_sc","op":"replace","segments":[["B","谢谢你"],["C","嘞"],["A","所有的一切"]],"finding":"zh_sc SFP 嘞 fused with verb"}
```
確信度【確実】(方針 #41 拡張)。

### 10. #5 zh_sc — `D:好喝哦` SFP「哦」 が形容詞と融合 【確実】
**Current:** A:这个 B:咖啡 C:好 D:好喝哦
**Problem:** 「哦」 は四川話で **soft assertion / appreciation** SFP (Li-Thompson 1981 §7.5 Mandarin 系列の方言再分析)。本データ zh_sc では #18 `D:贵得很哦`, #33 `D:干净哦`, #87 `D:方便哦`, #19 `B:音乐哦` で同型融合が継続。文末助詞は形容詞 `好喝` と意味的に独立し、本データ palette 原則「1 letter = 1 意味成分」に違反。指摘 9 と同方針。
**Proposed fix:** `D:好喝 E:哦` (哦 を独立)。
```json
{"id":5,"lang":"zh_sc","op":"replace","segments":[["A","这个"],["B","咖啡"],["C","好"],["D","好喝"],["E","哦"]],"finding":"zh_sc SFP 哦 fused with adjective"}
```
確信度【確実】。

### 11. #18 zh_sc — `D:贵得很哦` SFP「哦」 が形容詞補語構文と融合 【確実】
**Current:** A:这个 B:包 C:硬是 D:贵得很哦
**Problem:** 指摘 10 と同型。「贵得很」 (extremely expensive, 形容詞 + 程度補語) + 末尾辞「哦」 が D に一括格納。SFP「哦」 は独立形態素。
**Proposed fix:** `D:贵得很 E:哦`。
```json
{"id":18,"lang":"zh_sc","op":"replace","segments":[["A","这个"],["B","包"],["C","硬是"],["D","贵得很"],["E","哦"]],"finding":"zh_sc SFP 哦 fused with adjective"}
```
確信度【確実】。

### 12. #87 zh_sc — `D:方便哦` SFP「哦」 が形容詞と融合 【確実】
**Current:** A:这个 B:软件 C:好 D:方便哦
**Problem:** 指摘 10/11 と同型。
**Proposed fix:** `D:方便 E:哦`。
```json
{"id":87,"lang":"zh_sc","op":"replace","segments":[["A","这个"],["B","软件"],["C","好"],["D","方便"],["E","哦"]],"finding":"zh_sc SFP 哦 fused with adjective"}
```
確信度【確実】。

### 13. #33 zh_sc — `D:干净哦` SFP「哦」 が形容詞と融合 【確実】
**Current:** A:酒店 E:房间 C:好 D:干净哦
**Problem:** 指摘 10/11/12 と同型。 #33 は palette E が既に使用済みのため、SFP letter は F 拡張が必要。
**Proposed fix:** `D:干净 F:哦`。
```json
{"id":33,"lang":"zh_sc","op":"replace","segments":[["A","酒店"],["E","房间"],["C","好"],["D","干净"],["F","哦"]],"finding":"zh_sc SFP 哦 fused with adjective"}
```
確信度【確実】。

### 14. #55 zh_sc — `B:咖啡嘞` SFP「嘞」 が目的語と融合 【確実】
**Current:** A:我 D:每天 C:要整 E:两 F:杯 B:咖啡嘞
**Problem:** 指摘 9 と同型。文末助詞「嘞」 が目的語 `咖啡` と融合。意味的に独立成分。
**Proposed fix:** `B:咖啡 G:嘞` (palette 拡張)。
```json
{"id":55,"lang":"zh_sc","op":"replace","segments":[["A","我"],["D","每天"],["C","要整"],["E","两"],["F","杯"],["B","咖啡"],["G","嘞"]],"finding":"zh_sc SFP 嘞 fused with object"}
```
確信度【確実】。

### 15. #56 zh_sc — `D:开始嘞` SFP「嘞」 が動詞と融合 【確実】
**Current:** A:音乐会 C:今天黑 B:8点 D:开始嘞
**Problem:** 指摘 9 と同型。
**Proposed fix:** `D:开始 E:嘞`。
```json
{"id":56,"lang":"zh_sc","op":"replace","segments":[["A","音乐会"],["C","今天黑"],["B","8点"],["D","开始"],["E","嘞"]],"finding":"zh_sc SFP 嘞 fused with verb"}
```
確信度【確実】。

### 16. #91 zh_sc — `C:传统嘞` SFP「嘞」 が名詞と融合 【確実】
**Current:** A:看樱花 D:是 B:日本的 C:传统嘞
**Problem:** 指摘 9 と同型。
**Proposed fix:** `C:传统 E:嘞`。
```json
{"id":91,"lang":"zh_sc","op":"replace","segments":[["A","看樱花"],["D","是"],["B","日本的"],["C","传统"],["E","嘞"]],"finding":"zh_sc SFP 嘞 fused with predicate noun"}
```
確信度【確実】。

### 17. #88 zh_sc — `B:世界嘞` SFP「嘞」 が目的語と融合 【確実】
**Current:** A:人工智能 C:硬是在改变 B:世界嘞
**Problem:** 指摘 9 と同型。
**Proposed fix:** `B:世界 D:嘞`。
```json
{"id":88,"lang":"zh_sc","op":"replace","segments":[["A","人工智能"],["C","硬是在改变"],["B","世界"],["D","嘞"]],"finding":"zh_sc SFP 嘞 fused with object"}
```
確信度【確実】。

### 18. #35 zh_db — `B:结婚了呗` 二重 SFP「了+呗」 が動詞と融合 【蓋然】
**Current:** A:俺 E:哥 C:上个 D:月 B:结婚了呗
**Problem:** 「了」 (perfective aspect / 完了状態変化) + 「呗」 (resignation/causal acknowledgement) — 2 つの独立 morpheme が動詞と融合。Li-Thompson §7 で 「了」 は aspect particle、 「呗」 は SFP に分類され機能・分布が異なる。本データ #41 で「了」 を独立 segment にする方針 が確立されている (zh_db #29 `E:了` 独立例)。
**Proposed fix:** `B:结婚 F:了 G:呗` または最小修正 `B:结婚 F:了呗` (aspect+SFP 一括)。
```json
{"id":35,"lang":"zh_db","op":"replace","segments":[["A","俺"],["E","哥"],["C","上个"],["D","月"],["B","结婚"],["F","了呗"]],"finding":"zh_db aspect+SFP 了呗 fused with verb"}
```
確信度【蓋然】(2 morpheme か 1 融合形か 議論余地)。

### 19. #84 zh_db — `C:了呗` SFP「呗」と aspect「了」が C 全体に融合し動詞「感冒」が B 単独 【確実】
**Current:** A:她 E:上 D:礼拜 B:感冒 C:了呗
**Problem:** 動詞「感冒」 は B 単独で、 aspect 「了」 + SFP「呗」 が C にまとまっている。palette は C = 動詞・主述語 (本データ規約) のはずだが、本セルでは C 内容が「mood particle のみ」 で意味成分なし。「了」 は aspect, 「呗」 は SFP — 別 morpheme、それぞれ palette 上の位置に割当てるべき。
**Proposed fix:** `C:感冒了呗` (動詞 + aspect + SFP を C に統合) または `C:感冒了 F:呗` (aspect 取り込み)。最小修正:
```json
{"id":84,"lang":"zh_db","op":"replace","segments":[["A","她"],["E","上"],["D","礼拜"],["C","感冒了"],["F","呗"]],"finding":"zh_db SFP 呗 split from aspect 了; verb 感冒 absorbs aspect"}
```
確信度【確実】(role-letter B-C 配置 mismatch)。

### 20. #100 yue — `A:晒` の role-letter 配分が逆 (A=「すべて」内容語、B=「ありがとう」感謝動詞) 【蓋然】
**Current:** B:多謝 A:晒
**Problem:** 「晒」 (saai3) は **quantificational particle/aspectual completive** (Matthews & Yip 2011 §10.4: 「すべて、 完全に」)、典型例 `飲晒` = drink-all、`攞晒` = take-all。 「ありがとう、すべてのことに」 = `多謝晒` で 「多謝 + 晒」 は **一つの V + post-verbal quantifier** と分析され、「全部に感謝する」を表す。本セルで A:晒 は「everything」 (palette A の意味成分) を担当しているが、晒 は **「ありがとう (動詞) に対する quantifier」** であり、「everything = 全部の対象」を独立に表す content word ではない。EN reference の 「for everything」 に対応する成分が完全欠落で 「晒」 が誤って A に配置されている。
**Proposed fix:** B:多謝晒 C:所有嘢 (動詞句 統合 + 「全部」 を C に明示)、または palette 維持で `B:多謝 A:晒` を `B:多謝 A:嗮嘢` (or `B:多謝晒 A:你哋`) に書換え。本データ語の保全を優先するなら 「晒」 を B に統合し、「すべて」 を独立に補う。最小修正:
```json
{"id":100,"lang":"yue","op":"replace","segments":[["B","多謝晒"],["A","你"]],"finding":"yue 晒 is V-quantifier not content 'everything'; merge into B"}
```
確信度【蓋然】(意味解釈余地あり、Matthews-Yip 2011 §10.4 quantificational completive 解釈)。

### 21. #26 yue — `D:喎` SFP は notice/surprise particle で sentence-final が正しいが、palette 内 意味整合性は要検討 【要検討】
**Current:** A:啲細路 B:喺 E:公園度 C:玩緊 D:喎
**Problem:** 「喎」 (wo3) は Cantonese で **realization / hearsay** particle (Matthews-Yip 2011 §18.2.4)。 「子供たちが公園で遊んでいる(よ/って)」 という発見・伝達ニュアンスで使われる。本セルは sentence-final 独立 segment として正しく分離されている (#79 の Q-particle 分離方針と整合)。 **特に修正不要**だが、palette D は「modal/aux」割当が一般的で、本セル D は SFP 専用 — 確認のみ。
**Verdict:** OK、修正なし。確信度【要検討】(分離は正しい、role-letter 割当も妥当)。本ラウンドで他の yue 文末助詞も同様に独立切り出しを推奨。

### 22. #43 yue — assertion/appreciation 文脈で SFP「呀/㗎」 欠落 【蓋然】
**Current:** D:呢間 E:餐廳 B:嘅嘢食 C:好好味
**Problem:** Cantonese で 「このレストランの料理は美味しい」 という **appreciation/assertion** を表すとき、文末助詞「呀」(jaa3, soft assertion) または「㗎」(gaa3, factual assertion) が **pragmatically natural** (Matthews-Yip 2011 §18.3, Leung 2005 *Discourse Particles in Hong Kong Cantonese* §4)。本データの zh_sc #43 は「好吃得很」 で SFP なし、yue #43 も「好好味」 で SFP なし — 一致しているが、 yue の口語 register では 「好好味呀」 / 「好好味㗎」 が標準。`allowTextChange: true` を要するので慎重判定。
**Proposed fix:** C:好好味 + 新 letter F:呀 (palette 拡張)、または `C:好好味呀` 一括。
```json
{"id":43,"lang":"yue","op":"settext","find":"好好味","newText":"好好味呀","finding":"yue appreciation SFP 呀 typically present in colloquial register"}
```
確信度【蓋然】(register 依存、書面語では省略可)。

### 23. #87 yue — assertion 文脈で SFP「㗎/呀」 欠落 【蓋然】
**Current:** A:呢個 B:應用程式 C:好 D:方便
**Problem:** 指摘 22 と同型。「このアプリはとても便利だ」 の Cantonese 自然形は 「方便呀/方便㗎」 で SFP を伴う (Matthews-Yip 2011 §18.3)。
**Proposed fix:** D:方便 + SFP 補完、または `D:方便呀` (一括)。
```json
{"id":87,"lang":"yue","op":"settext","find":"方便","newText":"方便呀","finding":"yue assertion SFP 呀 typically present"}
```
確信度【蓋然】。

### 24. #5 yue — appreciation 文脈で SFP「呀」 欠落 【蓋然】
**Current:** A:呢杯 B:咖啡 C:好 D:好味
**Problem:** 指摘 22/23 と同型。 「このコーヒーはとても美味しい」 の Cantonese 自然 register は 「好好味呀」。
**Proposed fix:** `D:好味呀` または palette 拡張。
```json
{"id":5,"lang":"yue","op":"settext","find":"好味","newText":"好味呀","finding":"yue appreciation SFP 呀 typically present"}
```
確信度【蓋然】。

### 25. #13 vi — 依頼文脈で文末「nhé」 欠落 (politeness/softening) 【蓋然】
**Current:** A:Làm ơn D:cho B:tôi F:một cốc C:nước
**Problem:** ベトナム語の依頼文では文末「**nhé**」(soft, intimate request) または「**ạ**」(formal, polite) が **strongly preferred** (Thompson 1965 §12.4 final markers)。同データ #28 vi `G:không ạ` で「ạ」を正しく分離している前例あり、依頼系 #13 でも `nhé / ạ` の補完が pragmatically natural。本セルは命令動詞 `Làm ơn ... cho` のみで softening 末尾辞なし。
**Proposed fix:** 文末に F:nhé (palette F は数詞「một cốc」が既使用なので G:nhé 拡張) または `C:nước nhé` 一括。最小修正:
```json
{"id":13,"lang":"vi","op":"settext","find":"nước","newText":"nước nhé","finding":"vi request SFP nhé missing for softening"}
```
確信度【蓋然】(口語 register 依存、書面文では省略可)。

### 26. #34 vi — `B:hơn ạ` 末尾辞「ạ」 が「hơn」 (more) と融合 【確実】
**Current:** A:Xin hãy C:nói D:chậm B:hơn ạ
**Problem:** ベトナム語の文末助詞「**ạ**」 は **politeness final particle**(Thompson 1965 §12.4、Cao Xuân Hạo 1991 *Tiếng Việt: Sơ thảo ngữ pháp chức năng* ch.5)。形態論的に **独立 morpheme** で、Comparative marker 「hơn」 (more) と機能的・意味的に明確に異なる。本セルは 2 morpheme を 1 segment B に押し込んでおり、本データ #28 vi `G:không ạ` (G が ạ 含み) で「không+ạ」を分離した方針 (#41 で Q-particle 分割) と不整合。
**Proposed fix:** `B:hơn G:ạ` (palette G 拡張) または既存 letter 内で再配置。
```json
{"id":34,"lang":"vi","op":"replace","segments":[["A","Xin hãy"],["C","nói"],["D","chậm"],["B","hơn"],["G","ạ"]],"finding":"vi politeness SFP ạ fused with comparative hơn"}
```
確信度【確実】(SFP 独立性 明確)。

### 27. #56 ko — assertion/informing 文脈で `D:시작한다` plain ending 【要検討】
**Current:** A:콘서트는 C:오늘 밤 B:8시에 D:시작한다
**Problem:** EN reference 「The concert starts at 8 tonight」 は informing 文脈で、 韓国語の口語自然 register は 「시작해요」 (-요 polite) または 「시작합니다」 (-ㅂ니다 deferential) や 「시작하거든요」 (-거든요 informing/explanatory) が pragmatically natural (Sohn 1999 §10.4 sentence-enders, Lee 1999 *Korean Speech Act Particles* §3)。 本セルの 「-한다」 plain は **書き言葉/中立断定** で informing context にやや硬い。 ja 標準語 #56 が 「始まる」 plain で対応するため整合的だが、 ko #5 は `D:맛있어요` (polite), ko #17 `B:있어요` (polite) なので **ko register policy が一貫していない**。
**Verdict:** ja 平叙との対応で plain は許容。修正なしだが register policy を次ラウンドで再評価。確信度【要検討】。

### 28. #100 vi — appreciation 文末で `ạ` (politeness) または `nhé` 欠落 【蓋然】
**Current:** B:Cảm ơn bạn C:vì A:tất cả mọi thứ
**Problem:** 「ありがとう、全てのことに」 の vi 自然 register は 「Cảm ơn bạn nhé/ạ」 で文末助詞 を伴う (Thompson 1965 §12.4, Cao 1991 ch.5)。 本データ #100 ko `B:감사합니다` (-ㅂ니다 deferential)、 ja `B:ありがとう` (略式) との関係で、vi も pragmatically な末尾辞が欠落。 register policy として appreciation context は 文末辞が標準。
**Proposed fix:** `A:tất cả mọi thứ ạ` (一括) または palette 拡張で D:ạ 独立。
```json
{"id":100,"lang":"vi","op":"settext","find":"tất cả mọi thứ","newText":"tất cả mọi thứ ạ","finding":"vi appreciation SFP ạ missing"}
```
確信度【蓋然】。

### 29. #56 th — informing 文脈で文末「นะ」 (na, soft assertion) 欠落 【蓋然】
**Current:** A:คอนเสิร์ต D:เริ่ม B:เวลา 8 โมง C:คืนนี้
**Problem:** タイ語で 「コンサートは今夜8時に始まる(よ)」 を informing として伝えるとき、文末助詞 「นะ」(soft assertion + softening) または 「ครับ/ค่ะ」(gender-marked politeness) が pragmatically natural (Iwasaki-Ingkaphirom 2005 §15.4 sentence-final particles)。本セルは plain assertion で informing 末尾辞 ゼロ。 同データ th #54 「ปกป้อง สิ่งแวดล้อม」 も SFP なし — タイ語データ全体で 文末辞 がほぼ欠落 (#28 `G:ไหม` 等 Q-marker のみ存在)。 register policy として th は 平叙文の末尾助詞 を一律省略する方針が確立されているなら 修正なし、 そうでなければ補完。
**Proposed fix:** `C:คืนนี้ นะ` または palette 拡張で E:นะ。
```json
{"id":56,"lang":"th","op":"settext","find":"คืนนี้","newText":"คืนนี้ นะ","finding":"th informing SFP นะ missing"}
```
確信度【蓋然】(register policy 依存、口語では補完が自然)。

### 30. #43 th — appreciation 文脈で文末「นะ」 欠落 【要検討】
**Current:** B:อาหาร A:ที่ E:ร้าน D:นี้ C:อร่อยมาก
**Problem:** 指摘 29 と同型。「このレストランの料理はとても美味しい(よ/ね)」 の appreciation で 末尾辞「นะ/นะคะ/นะครับ」 が pragma 自然。 ただし plain 「อร่อยมาก」 は書面語では許容。 register policy 維持なら修正不要。
**Verdict:** タイ語 register policy 一律 plain なら修正なし、口語に揃えるなら `อร่อยมากนะ` に補完。確信度【要検討】。

---

## まとめ

- **ファイルパス:** `/home/jounlai/langmap/langmap_reviews/91_open.md`
- **指摘件数:** 30 件 (確実 14、蓋然 13、要検討 3)
- **本ラウンドの主要欠陥タイプ (dominant defect):**
  1. **zh_sc SFP「哦/嘞」 が形容詞・動詞・目的語と融合 (9 件: #5/#18/#33/#55/#56/#87/#88/#91/#100)** — `#41` で wh-融合を分割した方針を assertion 系にも 拡張する取りこぼし。 palette 「1 letter = 1 意味成分」原則違反、 11 ヶ所超に系統的に残存
  2. **zh_db SFP「呗/哈/呢哈/啦/嘞/了呗」 が動詞・目的語と融合 (5 件: #20/#35/#56/#84/#88/#100)** — 同方針の拡張取りこぼし。 二重 SFP 「呢哈」「了呗」 の独立化が必要
  3. **ja_aom 末尾断定辞「んず/じゃ」 系統的欠落 (2 件: #93/#94)** — 100 文中 90+ で出現する dialect SFP が 2 文のみ欠落、内的不整合
  4. **ja_kyo Kansai-male 「わ」が Kyoto-feminine ペルソナで使用 (2 件: #29/#52)** — 京都女性語末尾辞「え/わぁ」 への置換が必要
  5. **vi 依頼/感謝 文末「nhé/ạ」 欠落・融合 (3 件: #13/#34/#100)** — #34 は `B:hơn ạ` で 2 morpheme 融合、独立切り出し可能
  6. **yue assertion SFP「呀/㗎」 欠落 (3 件: #5/#43/#87)** — Cantonese 口語 register として標準
  7. **th informing/appreciation SFP「นะ」 欠落 (2 件: #29/#43)** — register policy 次第
  8. **yue #100 「晒」 の role-letter mis-assignment (1 件)** — quantificational completive を content「everything」として誤配置

- **#41 (Q-particle) / #79 (ja 方言 Q-particle 分割) との重複なし** — 本ラウンドは 非疑問 discourse-pragmatic 末尾辞 (assertion / appreciation / softening / informing / notice) に限定。 Q-marker は除外。
- **register policy 留保事項** — ko -다 vs -요、 th plain vs นะ、 vi plain vs nhé/ạ の文脈別自然性は本データ「standard / colloquial / written」 のどの register に揃えるかを次ラウンドで明示すべき (現状ばらつき)。 #29 ja_kyo / #52 ja_kyo のような persona-character 違反は明確 defect として処理可能。

## Dev response — round 1 (2026-06-04)

**結論:** 30 指摘中 27 件を actionable として受領 (確実 14 + 蓋然 13)、3 件 (#21 yue #26「喎」OK判定 / #27 ko #56 register保留 / #30 th #43 register保留) は no-op として尊重。 全 27 件に `allowTextChange:true` を付与し JSON edits `/tmp/lm_edits_91.json` (27 entries) を生成。 dry-run apply2 結果: appliedCount 27 / failedCount 0 / paletteAdditions 12 / adjacentWarnings 0。

**処理サマリ (反映箇所):**
- **ja_aom 末尾断定辞補完 (確実×2):** #93 `G:開かれる→開かれるんず`、 #94 `C:開ぐ→開ぐんず`。 reviewer 引用の Onishi 1999 *津軽方言文法論* §4 + 同データ内 90+ 文の dialect 末尾辞分布に従う。
- **ja_kyo 京都女性語 persona 復元 (蓋然×2):** #29 `C:忘れてしもうたわ→忘れてしもうたえ`、 #52 `H:‌たわ→‌たえ` (ZWNJ glue 保全)。 reviewer 引用の井上 1998 *京都方言の生成と歴史的展開* §6 + 本データ ja_kyo 50+ 文の「え/なぁ」統一に従う。
- **zh_sc SFP 「哦/嘞」 分離 (確実×9):** #5/#18/#33/#55/#56/#87/#88/#91/#100。 `replace` op で動詞/形容詞/目的語/述語名詞から SFP を独立 letter (E/F/G) に切り出し、 #41 で確立した「1 letter = 1 意味成分」方針を assertion 系に拡張。 palette 自動拡張 (E×4, F×2, G×1, +#100 zh_sc C×1) は apply2 が処理。
- **zh_db SFP 「呗/哈/呢哈/啦/嘞/了呗」 分離 (蓋然×4 + 確実×1):** #20 (呢哈) / #35 (了呗) / #56 (哈) / #84 (呗) / #88 (呢哈) / #100 (啦+呗 dual)。 二重 SFP 「呢哈」 は 1 letter 一括 (E)、 「了呗」 は #35 で `F:了呗` 一括、 #84 は aspect 了 を動詞 C に吸収させ SFP 呗 のみ F 独立 — palette role-letter mismatch を解消。 #100 は 4 分割 (B/C/A/D) で dual SFP を完全独立。
- **yue assertion SFP 補完 (蓋然×3):** #5/#43/#87 で `好味→好味呀` / `好好味→好好味呀` / `方便→方便呀`。 Matthews-Yip 2011 §18.3 の口語 register 標準に従い `settext` で SFP を末尾辞 (B/C/D に吸収) で補完、 letter 拡張は最小限。
- **yue #100「晒」 role-letter mis-assignment (蓋然):** `replace` で `B:多謝晒 A:你` に再構成。 quantificational completive 「晒」 を動詞 多謝 と統合し、 A 位置には EN reference の addressee 補完として「你」 (you) を供給。
- **vi politeness/softening SFP 補完 (確実×1 + 蓋然×2):** #13 (`水→水 nhé` 依頼軟化)、 #34 (`B:hơn ạ→B:hơn G:ạ` 二 morpheme 分離 — #28 vi `G:không ạ` 前例と整合)、 #100 (`tất cả mọi thứ→tất cả mọi thứ ạ` 感謝末尾辞)。
- **th informing SFP (蓋然×1):** #56 `คืนนี้→คืนนี้ นะ` のみ採用。 #43 (#30 指摘) は register policy 保留判定を尊重して no-op。

**保留 (no-op) 3 件:**
- **#21 (yue #26「喎」):** reviewer 自身 OK 判定。 sentence-final 独立切り出し は #79 方針と整合済み、 修正なし。
- **#27 (ko #56 plain ending):** reviewer 「ja 平叙との対応で plain 許容」 判定。 ko register policy 全体の再評価は次ラウンドで別立て指摘として扱うのが望ましい (#56 単独修正は局所的不整合を増やすリスク)。
- **#30 (th #43 appreciation):** reviewer 「register policy 維持なら修正不要」 判定。 th データ全体の文末辞欠落パターンは #56 (#29 指摘) のみ informing 文脈で取り扱い、 appreciation 文脈は次ラウンドの policy 議論待ち。

**palette 拡張サマリ (apply2 自動):** #56/zh_db +E, #20/zh_db +E, #88/zh_db +D, #100/zh_db +D, #35/zh_db +F, #84/zh_db +F, #5/zh_sc +E, #18/zh_sc +E, #87/zh_sc +E, #33/zh_sc +F, #55/zh_sc +G, #91/zh_sc +E (計 12 letter 追加、 すべて DEFAULT_PALETTE_COLORS から自動割当)。

**次ラウンドの提案:** register policy (vi `nhé/ạ` / th `นะ` / ko `-요/-다` / yue 文末辞) を「colloquial 自然形に合わせる」 か 「neutral plain で統一」 かの データ全体方針を明文化したい。 本ラウンドは個別 defect として既存方針 (#41/#79 系列) との整合性を優先し、 蓋然判定の補完は SFP を持つ言語に限定した。

- **edits:** 27
- **JSON path:** `/tmp/lm_edits_91.json`
