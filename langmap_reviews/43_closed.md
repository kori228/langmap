# LangMap データレビュー #43 — テンス・アスペクト・ムード (TAM) マーカー分節横断レビュー

## レビュアー自己紹介 (ペルソナ)

Iulia Andreescu (handle: **@tam_iulia**)。ライプツィヒ大学 (Max Planck EVA) 言語類型論博士。学位論文 "Grammaticalization of Anterior and Resultative across Eurasia" (Croft 指導)。常用文献は Bybee, Perkins & Pagliuca *The Evolution of Grammar — Tense, Aspect, and Modality in the Languages of the World* (Chicago 1994)、Comrie *Tense* (CUP 1985) / *Aspect* (CUP 1976)、Dahl *Tense and Aspect Systems* (Blackwell 1985)、Smith *The Parameter of Aspect* (Kluwer 1991)、Heine & Kuteva *World Lexicon of Grammaticalization* (CUP 2002)。今回は **#11〜#14 で確定したと思われる「副詞 + 動詞 + テンス」分節方針および memory feedback_segment_splitting.md の Rule #11 (Verb + tense separation) と feedback_glue_marker.md の ZWNJ 規約**に照らし、過去 (past) / 完了 (perfect) / 未来 (future) / 進行 (progressive) の **TAM マーカーが文/言語横断で整合して分節されているか** のみを精査する。語彙選択、レジスター、語順、敬語、方言固有形は **明示的に射程外** とし (それぞれ #28, #38, #3 系統の closed-review で扱い済み)、本レビューは「**ある文 X で過去マーカーが分節 H として独立しているなら、別の文 Y でも同じマーカーは分節独立すべき**」という単一の整合性軸に絞る。

## 検証範囲

- **TAM が顕在的に符号化されている文**: en 原文または ja 原文に基づいて、過去 (#1, #11, #27, #29, #35, #46, #47, #52, #65, #69, #72, #77, #79, #82, #84, #90)、未来 (#7, #9, #21)、現在完了/経験 (#17, #20, #27, #74, #81)、進行/未完了 (#15, #20, #26, #41, #53, #60, #63, #66, #74, #75, #86, #88)、習慣 (#3, #8, #14, #42, #50, #57, #61, #67, #73, #86, #95) を網羅。
- **対象言語層**: TAM が形態素として分離可能な代表 25 言語 (ja / ko / zh / vi / en / fr / es_eu / it / pt_eu / de / ru / ar / he / tr / fi / hu / la / ja_osa / ja_kyo / ko_bus / vi_c / vi_s / ja_edo / vi_nom / zh_song)。
- **TAM 形態素のタイプ**: (a) 周辺的助動詞 (en have/will, fr ai, es voy a, it ho/sto, pt vou, de werden), (b) テンス/アスペクト接尾辞 (ja た, ko 었/았/했, tr -dı/-tı, fi -in, hu -tam, ru -л), (c) アスペクト粒子 (zh 了/着/过, ja ている, ko 고 있다, vi đã/đang/sẽ, th แล้ว/กำลัง), (d) テンス融合語幹 (Romance synthetic past/future).
- ライブデータは `node -e` で 100 文すべて抽出済み。零マーカー (=英語 simple present/eat 等) は分節独立できないため対象外。

## 方針 — 何を「指摘」とし、何を「許容」とするか

1. **同一マーカーは全文で一貫した分節を持つべき**。例: zh の完了アスペクト粒子「了」が #29 / #46 / #52 / #69 で `H:"了"` の独立分節なら、#11 (买了) / #35 (结婚了) / #72 (建了) / #90 (学了) でも `[X:"买/结婚/建/学"], [H:"了"]` に分割すべき。逆方向 (全部 fused に統一) も許容するが、現状は **混在** が問題。
2. **接尾辞型 TAM** (tr -tum, fi -in, hu -tem, ja た, ko 었/았/했/했다) は ZWNJ プレフィックスで形態素ごとに独立分節するのが Rule #11 + glue_marker 規約。これを満たす文は **#46 と #52 のみ**。 残りの過去文 (10 件以上) では tr/fi/hu/ko の過去接尾辞が動詞語幹に fused のまま — **指摘対象**。
3. **周辺的助動詞** (英 have/will, 仏 ai, 伊 ho/sta, 西 estoy/voy, 葡 vou, 独 habe/wird) は **#11〜#14 で「auxiliary は独立分節」が暗黙の方針として確立** (#17 で `B:"have"`, #21 で `E:"will have"`, #27 で `D:"have been"` 等が独立)。これに反して fused のまま放置されている文を **指摘対象** とする。
4. **意図的な fused 単一語形** (Romance synthetic past, e.g. es `compré`, fr `acheta`, ru `купил`, la `emi`) は形態論的に分離不能であり許容。ただし Romance の **複合過去 (passé composé / passato prossimo / pretérito perfecto)** は分析形なので分離可能。
5. **進行・完了複合 (en is V-ing, es está V-ndo, it sta V-ndo, pt está a V)** は副 + 主の二分節。中国語の `正在` / ベトナム語の `đang` も同様にプリ-動詞アスペクト粒子として独立分節すべき (既に多くの文でそうなっている)。
6. **語彙的時制副詞 (yesterday / last week / tomorrow)** は本レビュー対象外 (#28 系統で扱う)。

確信度は 【確実】= 同マーカーが同一データ内で OWN/FUSED 両方に分裂しており、規約違反が明白、【蓋然】= 言語固有の事情で迷う余地あり、【要検討】= 方針自体を closed-review で再確認すべきもの。

---

## 指摘事項 (Issues found)

### 1. zh 完了アスペクト粒子「了」の分節が文間で OWN/FUSED に分裂している 【確実】

**Current:**
- OWN として独立 (= `[X:"V"], [H:"了"]`): #29 `[C:"了"]`、#46 `[H:"了"]`、#52 `[H:"了"]`、#69 `[E:"了"]`
- FUSED として埋め込み (= `[X:"V了"]`): #11 `[C:"买了"]`、#18 `[D:"贵了"]`、#35 `[B:"结婚了"]`、#47 `[D:"解释了"]`、#65 `[E:"给了"]`、#72 `[D:"建了"]`、#74 `[C:"已经等了"]`、#79 `[E:"搬走了"]`、#84 `[B|C:"感冒了"]`、#90 `[D:"学了"]`

**Problem:** Sinitic 完了アスペクト粒子 *liǎo > le* (Mei 1989; Lin 2003) は **動詞句に付く clitic** で、ja た / ko 았 と同階層の bound morpheme。memory `feedback_segment_splitting.md` Rule #11 (Verb + tense separation) は明示的にこれを分節独立せよと指示している。にもかかわらず、現データでは **4 文だけが分割、10 文が融合** で、しかも分割される 4 文 (#29, #46, #52, #69) は **いずれも他の言語 (ja た, tr -tum, fi -in) と並行して TAM 分節されている**ペアであり、それ以外の zh 単独過去文 (#11, #35, #47, #72, #90 など) では 了 が動詞に張り付いたまま。これは「TAM 分節を意識した文と意識しなかった文」のばらつきが zh データに化石化している徴候。

**Proposed:** 全 zh 完了文で `了` を独立分節に統一する (推奨方向)。たとえば:
- #11 `[C:"买了"]` → `[C:"买"], [H:"了"]` (H 新設)、または既存 letter 体系に合わせて `[C:"买"], [C:"了"]` の二段 C (= 動詞句として括る) 形式
- #35 `[B:"结婚了"]` → `[B:"结婚"], [F:"了"]`
- #72 `[D:"建了"]` → `[D:"建"], [F:"了"]`
- #90 `[D:"学了"]` → `[D:"学"], [F:"了"]`
- #79 `[E:"搬走了"]` → `[E:"搬走"], [F:"了"]`
- #84 `[B|C:"感冒了"]` → `[B|C:"感冒"], [F:"了"]`

逆統一 (全 fused) を採るなら #29 #46 #52 #69 の 4 文を融合し直すべきだが、これは Rule #11 違反になるため非推奨。**少なくともどちらかに統一**。

---

### 2. ja 過去テンス接尾辞「た / だ」の分節が #46 #52 #69 でのみ独立、他では融合 【確実】

**Current:**
- OWN: #46 `[H:"た"]`、#52 `[H:"た"]`、#69 `[E:"た"]`、#31 `[C:"だ"]`、#80 `[D:"だ"]`
- FUSED: #1 `[G:"見た"]`、#35 `[B:"結婚した"]`、#47 `[D:"説明した"]`、#50 `[D:"好きだ"]`、#52 そのものの兄弟 (`[C:"なくし"], [H:"た"]` は分割済みだが `[D:"市場"]` と整合)、#77 `[C:"驚いた"]`、#79 `[E:"引っ越した"]`、#82 `[D:"言った"]`、#87 `[D:"便利だ"]`、#84 `[C:"ひいた"]`、#90 `[D:"学んだ"]`、#72 `[D:"建てた"]`、#65 `[E:"くれた"]`

**Problem:** ja の助動詞「た」(完了/過去) は Heian 期 `‐たり` → 室町期に `‐た` に短縮された形態素で、共時的にも独立した接続助動詞 (寺村 1984)。Rule #11 は zh 了 と並べて「ja ている / た」の分節独立を明示している。データ上、**5 文だけ「た」が独立、12 文以上が融合** という極端な不均衡。同一の動詞 `見る` ですら #1 (G:"見た" FUSED) と #46 (H:"た" OWN) で扱いが分裂している。

**Proposed:** zh 了 の修正方針 (指摘 1) と並行して全 ja 過去文を統一。提案 (Rule #11 準拠):
- #1 `[G:"見た"]` → `[G:"見"], [H:"た"]`
- #35 `[B:"結婚した"]` → `[B:"結婚し"], [F:"た"]`
- #47 `[D:"説明した"]` → `[D:"説明し"], [E:"た"]`
- #72 `[D:"建てた"]` → `[D:"建て"], [E:"た"]`
- #77 `[C:"驚いた"]` → `[C:"驚い"], [F:"た"]`
- #79 `[E:"引っ越した"]` → `[E:"引っ越し"], [F:"た"]`
- #82 `[D:"言った"]` → `[D:"言っ"], [E:"た"]`
- #84 `[C:"ひいた"]` → `[C:"ひい"], [F:"た"]`
- #90 `[D:"学んだ"]` → `[D:"学ん"], [E:"だ"]`
- #65 `[E:"くれた"]` → `[E:"くれ"], [F:"た"]`

備考: 「だ」(コピュラ) は形容動詞語幹 + コピュラの構造で、#50/#87 の `好きだ / 便利だ` も `[D:"好き"], [X:"だ"]` のように分割可能だが、これは TAM ではなく繋辞なので射程外とし、現状維持で良い (ただし #31 で `だ` が独立しているのと不整合)。

---

### 3. ko 過去テンス接尾辞「었/았/했」の分節が #33 #46 #52 のみ独立、他は融合 【確実】

**Current:**
- OWN (ZWNJ プレフィックス済): #33 `[B:"‌했다"]`、#46 `[H:"‌했다"]`、#52 `[H:"‌어버렸다"]`
- FUSED: #11 `[C:"샀어요"]`、#27 `[D:"가본 적이 있다"]`、#29 `[C:"두고 왔다"]`、#35 `[B:"결혼했다"]`、#47 `[D:"설명했다"]`、#65 `[E:"주었다"]`、#69 `[D|E:"썼다"]`、#72 `[D:"건설했다"]`、#77 `[C:"놀랐다"]`、#79 `[E:"이사를 갔기"]`、#82 `[D:"말했다"]`、#84 `[C:"걸렸다"]`、#90 `[D:"배웠다"]`

**Problem:** Korean 「‐었/았/였」+ `‐다` の過去テンス sufix chain は形態論的に明確に語幹と分離可能 (Sohn 1999, Ch. 10)。`feedback_glue_marker.md` は明示的に「**Korean verb endings: 어버렸다, 했다, etc.**」を GLUE 対象に挙げており、それを実装したのが #46 #52 #33 の 3 例。残りの 10+ 文ですべて融合されているのは取りこぼし。とくに #35 `결혼했다` と #46 `‌했다` は同じ Sino-verb + 했다 構造で、扱いが分裂する理由がない。

**Proposed:** 全 ko 過去文で `‌었/았/였다` 等を分節独立 (ZWNJ 付き):
- #11 `[C:"샀어요"]` → `[C:"샀"], [G:"‌어요"]` (敬語形なので "어요" を含む)、または `[C:"사"], [G:"‌았어요"]`
- #35 `[B:"결혼했다"]` → `[B:"결혼"], [F:"‌했다"]`
- #47 `[D:"설명했다"]` → `[D:"설명"], [E:"‌했다"]`
- #72 `[D:"건설했다"]` → `[D:"건설"], [E:"‌했다"]`
- #82 `[D:"말했다"]` → `[D:"말"], [E:"‌했다"]`
- #90 `[D:"배웠다"]` → `[D:"배웠"], [E:"‌다"]` または `[D:"배우"], [E:"‌었다"]`
- #84 `[C:"걸렸다"]` → `[C:"걸렸"], [F:"‌다"]`

同様に #46 が `[H:"‌했다"]` で扱われている方針を全文に拡張するのが最少コストの統一。

---

### 4. tr 過去テンス接尾辞 ‐dı/-tı/-dim/-tum の分節が #46 #52 のみ独立、他は融合 【確実】

**Current:**
- OWN (ZWNJ 付き): #46 `[H:"‌tum"]`、#52 `[H:"‌tim"]`
- FUSED: #11 `[C:"satın aldım"]`、#27 `[D:"gittim"]`、#29 `[C:"unuttum"]`、#35 `[B:"evlendi"]`、#47 `[D:"açıkladı"]`、#65 `[E:"verdi"]`、#69 `[E:"dı"]` (分節済みだが H ではなく E)、#72 `[D:"inşa etti"]`、#77 `[C:"şaşırdı"]`、#82 `[D:"söyledi"]`、#84 `[C:"yakalandı"]`、#90 `[D:"öğrendi"]`

**Problem:** Turkish 過去テンス suffix `-DI` (vowel harmony 4 variants × consonant harmony 2 variants = 8 forms) は agglutinative morpheme として母音調和ごとに分節独立可能 (Göksel & Kerslake 2005, §8.2.1.2)。`feedback_glue_marker.md` でも明示的に「**Turkish (tr): ... -tum, -tim, -dan, -ıyor, etc.**」を GLUE 対象に列挙し、#46 #52 で実装されている。**#69 では `[D:"yaz"], [E:"dı"]` のように分節されている**にもかかわらず、ZWNJ プレフィックスが付いていない (`dı` であって `‌dı` ではない) — これは glue_marker 規約違反で、テキストコピーで `yaz dı` と空白が入ってしまう。他の 10+ 文では融合のまま。

**Proposed:** 全 tr 過去文で `-DI` 接尾辞を ZWNJ 付き独立分節に統一:
- #11 `[C:"satın aldım"]` → `[C:"satın al"], [G:"‌dım"]`
- #27 `[D:"gittim"]` → `[D:"git"], [E:"‌tim"]`
- #29 `[C:"unuttum"]` → `[C:"unut"], [E:"‌tum"]`
- #35 `[B:"evlendi"]` → `[B:"evlen"], [F:"‌di"]`
- #47 `[D:"açıkladı"]` → `[D:"açıkla"], [E:"‌dı"]`
- #65 `[E:"verdi"]` → `[E:"ver"], [F:"‌di"]`
- #69 `[E:"dı"]` → `[E:"‌dı"]` (ZWNJ 補足のみ、最少修正)
- #72 `[D:"inşa etti"]` → `[D:"inşa et"], [E:"‌ti"]`
- #77 `[C:"şaşırdı"]` → `[C:"şaşır"], [F:"‌dı"]`
- #82 `[D:"söyledi"]` → `[D:"söyle"], [E:"‌di"]`
- #84 `[C:"yakalandı"]` → `[C:"yakalan"], [F:"‌dı"]`
- #90 `[D:"öğrendi"]` → `[D:"öğren"], [E:"‌di"]`

---

### 5. fi 過去テンス接尾辞 ‐in/-i の分節が #46 #52 のみ独立、他は融合 【確実】

**Current:**
- OWN (ZWNJ 付き): #46 `[H:"‌in"]`、#52 `[H:"‌in"]`
- FUSED: #11 `[C:"ostin"]`、#27 `[D:"olen käynyt"]`、#29 `[C:"unohdin"]`、#35 `[B:"meni naimisiin"]`、#47 `[D:"selitti"]`、#65 `[E:"antoi"]`、#69 `[D|E:"kirjoitti"]`、#72 `[D:"rakensivat"]`、#77 `[C:"yllättyi"]`、#82 `[D:"käski"]`、#84 `[B|C:"vilustui"]`、#90 `[D:"oppi"]`

**Problem:** フィンランド語の過去テンス suffix `-i-` (第 1 人称単数 = `-i-n`、3 人称単数 = `-i`、3 人称複数 = `-i-vat`) は Stem-i-Person の三層構造 (Karlsson 1999, §17)。Rule #11 + glue_marker 規約に照らせば形態素ごと分節独立すべきだが、データ上は `[H:"‌in"]` の独立分節は **#46 #52 の 2 例のみ**。これは tr / ko / ja と完全に同じパターン (#46 #52 だけが手当てされて、他は化石化) を fi にも繰り返している。

**Proposed:** 全 fi 過去文で `-i-(n/vat)` を分節独立:
- #11 `[C:"ostin"]` → `[C:"ost"], [G:"‌in"]`
- #29 `[C:"unohdin"]` → `[C:"unohd"], [E:"‌in"]`
- #47 `[D:"selitti"]` → `[D:"selit"], [E:"‌ti"]` (3 人称単数過去 = 語幹 + `tti`、子音重複あり)
- #65 `[E:"antoi"]` → `[E:"anto"], [F:"‌i"]`
- #69 `[D|E:"kirjoitti"]` → `[D:"kirjoit"], [E:"‌ti"]`
- #72 `[D:"rakensivat"]` → `[D:"rakens"], [E:"‌ivat"]`
- #82 `[D:"käski"]` → `[D:"käs"], [E:"‌ki"]`
- #90 `[D:"oppi"]` → `[D:"opp"], [E:"‌i"]`

(母音語幹の音便があるため厳密な形態素境界は議論余地あり、語学資料としては子音語幹 + 過去マーカーで切るのが標準。)

---

### 6. hu 過去テンス接尾辞 ‐t/-tem の分節が #46 のみ独立、他は融合 【確実】

**Current:**
- OWN (ZWNJ 付き): #46 `[H:"‌tem"]`
- FUSED: #11 `[C:"vettem"]`、#27 `[D:"voltam"]`、#29 `[C:"hagytam"]`、#35 `[B:"megnősült"]`、#47 `[D:"elmagyarázta"]`、#52 `[C|H:"elvesztettem"]` (TAM 複合)、#65 `[E:"adott"]`、#69 `[D|E:"írt"]`、#72 `[D:"építettek"]`、#77 `[C:"meglepődött"]`、#79 `[E:"elköltözött"]`、#82 `[D:"azt mondta"]`、#84 `[B:"megfázott"]`、#90 `[D:"tanulta meg"]`

**Problem:** ハンガリー語過去テンス suffix `-t/-tt-` + 人称語尾は明確に分節可能 (Rounds 2009, §15.1)。`feedback_glue_marker.md` も hu の `-tem`, `-mal` を GLUE 対象に挙げ、#46 `[H:"‌tem"]` で実装している。他は全文融合。とくに #52 が `[C|H:"elvesztettem"]` と TAM 複合表記になっているのは「分割すべきだが面倒だから複合で逃げた」徴候。

**Proposed:** hu 過去文を統一:
- #11 `[C:"vettem"]` → `[C:"vet"], [G:"‌tem"]`
- #29 `[C:"hagytam"]` → `[C:"hagy"], [E:"‌tam"]`
- #35 `[B:"megnősült"]` → `[B:"megnősül"], [F:"‌t"]`
- #47 `[D:"elmagyarázta"]` → `[D:"elmagyaráz"], [E:"‌ta"]`
- #52 `[C|H:"elvesztettem"]` → `[C:"elveszt"], [H:"‌ettem"]` (複合解消)
- #65 `[E:"adott"]` → `[E:"ad"], [F:"‌ott"]`
- #72 `[D:"építettek"]` → `[D:"épít"], [E:"‌ettek"]`
- #82 `[D:"azt mondta"]` → `[D:"azt mond"], [E:"‌ta"]`
- #90 `[D:"tanulta meg"]` → `[D:"tanul"], [E:"‌ta meg"]` (動詞前綴 meg の位置注意)

---

### 7. ru 過去テンス接尾辞 -л の分節が #46 #52 #69 のみ独立、他は融合 【確実】

**Current:**
- OWN: #46 `[H:"л"]`、#52 `[H:"л"]`、#69 `[E:"л"]`
- FUSED: #11 `[C:"купил"]`、#27 `[D:"бывал"]`、#29 `[C:"забыл"]`、#35 `[B:"женился"]`、#47 `[D:"объяснил"]`、#65 `[E:"подарила"]`、#72 `[D:"построили"]`、#77 `[C:"был удивлён"]`、#79 `[E:"уехала"]`、#82 `[D:"сказал"]`、#84 `[C:"заболела"]`、#90 `[D:"научился"]`

**Problem:** ロシア語の過去テンス suffix `-л-` (+ 性数語尾 ∅/-а/-о/-и) は古東スラブ語の l-participle 起源で形態素として明確 (Timberlake 2004, §4.10)。**#46 #52 #69 だけ独立分節**で、これは ja / ko / tr / fi / hu と完全に同じ「3 文だけ手当てパターン」。さらに **#46 #52 #69 の独立分節「л」には ZWNJ プレフィックスが付いていない** (ru は agglutinative ではないので本来 ZWNJ 不要だが、表示時に動詞語幹と空白で離れて見える可能性) — これは ru の場合は分節境界自体を要再検討。

**Proposed:** 二つの選択肢、どちらか一方に統一する:
- (A) **全部融合に戻す**: ロシア語は Romance 系の synthetic past と同じ「単一語形」として扱い、#46 #52 #69 の `‐л` 分節を削除する。これは fr `acheta` / la `emi` と整合的。
- (B) **全部分節独立**: #46 の方針を貫いて全 ru 過去文で `л` を独立分節 (ZWNJ なしで現状維持) する。#11 `[C:"купи"], [H:"л"]`、#29 `[C:"забы"], [E:"л"]`、#90 `[D:"научи"], [E:"лся"]` (再帰動詞)。

私見では (A) の方が ru の屈折型形態論に合っており、Rule #11 を「**接尾辞型 (agglutinative) TAM**」に限定すべき。閉ざされたレビュー #11〜#14 で方針を明文化することが必要。

---

### 8. en 過去テンス -ed の分節独立が **#46 のみ**、他はすべて融合 【確実】

**Current:**
- OWN: #46 `[H:"ed"]`
- FUSED: #11 `[C:"bought"]` (不規則)、#27 `[D:"have been"]` (完了, 別パターン)、#29 `[C:"forgot"]` (不規則)、#35 `[B:"got married"]`、#47 `[D:"explained"]`、#52 `[C|H:"lost"]` (TAM 複合、不規則)、#65 `[E:"gave"]` (不規則)、#69 `[D|E:"wrote"]` (TAM 複合、不規則)、#72 `[D:"built"]` (不規則)、#77 `[C:"was surprised"]` (受動)、#79 `[E:"moved away"]`、#82 `[D:"told"]` (不規則)、#84 `[C:"caught"]` (不規則)、#90 `[D:"learned"]`

**Problem:** 英語の過去テンス suffix `-ed` は規則変化動詞でのみ分離可能で、不規則動詞 (bought, gave, told, caught など) では分節不能。したがって `-ed` 独立分節は **規則動詞限定** の方針となるはずだが、データ上 **規則動詞 #47 explained / #79 moved / #90 learned** は融合のまま、**唯一 #46 talked だけが `[E:"talk"], [H:"ed"]`** に分割されている。これは明らかな取りこぼし。さらに **#52 と #69 で「lost / wrote」が `[C|H:...]` / `[D|E:...]` という TAM 複合表記**になっており、これは不規則動詞で形態素境界が引けないため複合で逃げた処理だが、#46 で分割している `-ed` との整合性が崩れる。

**Proposed:** 二つの方針のどちらか:
- (A) **en の `-ed` 分節を廃止** (Romance synthetic 過去と同じ扱い): #46 を `[E:"talked"]` に戻し、`[H:"ed"]` を削除。他言語の分節独立 ZWNJ 規約は別物として維持。これが最少摩擦案。
- (B) **規則動詞のみ分節独立** + 不規則動詞は複合表記 `[X|Y:"..."]`: #47 `[D:"explain"], [F:"ed"]`、#79 `[E:"mov"], [F:"ed away"]`、#90 `[D:"learn"], [E:"ed"]`。不規則動詞 (#11 #29 #69 #72 #82 #84) は現状維持。ただし学習者教材としては「規則 vs 不規則」の対比が見える利点あり。

私見: 英語は屈折型寄りなので **(A) を推奨**、ただし #46 を残すなら (B) を全文に適用すべき。

---

### 9. fr 助動詞 avoir/être の分節が文間で OWN/FUSED に分裂 【確実】

**Current:**
- OWN (助動詞独立): #17 `[B:"ai"]`、#46 `[E:"ai"]`、#52 `[H:"ai"]`、#81 `[F:"ai"]`、#80 `[D:"est"]`
- FUSED: #1 `[G:"ai vu"]`、#11 `[C:"ai acheté"]`、#27 `[D:"suis allé"]`、#29 `[C:"ai oublié"]`、#47 `[D:"a expliqué"]`、#65 `[E:"m'a donné"]`、#69 `[E:"a"]` (E 独立だが分節レター E が動詞と同じ) → 実は分節されている、要再確認、#72 `[D:"construit"]` (注: `[A:"Ils ont"]` で主語と融合)、#77 `[C:"a été surpris"]`、#79 `[E:"est partie"]`、#82 `[D:"a dit"]`、#84 `[C:"a attrapé"]`、#88 `[C:"est en train de changer"]`、#90 `[D:"a appris"]`

**Problem:** フランス語 *passé composé* は分析形 (auxiliary `avoir/être` + past participle) で、形態論的にも教育的にも分離が標準 (Grevisse §741)。en の `have V-en` と完全に並行する構造。にもかかわらず、データ上は **#46 #52 #17 #81 のごく一部だけ助動詞独立**、他はすべて融合。さらに **#72 では `[A:"Ils ont"]`** と主語代名詞 + 助動詞 ont が一語に融合しており、これは語彙 segment letter A (主語) と helper の境界自体を侵食する深刻な問題。

**Proposed:** 全 fr passé composé で auxiliary を独立分節:
- #1 `[G:"ai vu"]` → `[G:"ai"], [G':"vu"]` (新 letter 追加または既存 letter で二段)
- #11 `[C:"ai acheté"]` → `[C:"ai"], [C':"acheté"]` または `[H:"ai"], [C:"acheté"]`
- #27 `[D:"suis allé"]` → `[D:"suis"], [D':"allé"]`
- #29 `[C:"ai oublié"]` → `[C:"ai"], [C':"oublié"]`
- #47 `[D:"a expliqué"]` → `[D:"a"], [D':"expliqué"]`
- #72 `[A:"Ils ont"], [D:"construit"]` → `[A:"Ils"], [H:"ont"], [D:"construit"]` (最重要: 主語と助動詞の分離)
- #77 `[C:"a été surpris"]` → `[C:"a été"], [C':"surpris"]` (受動完了は二重複合)
- #82 `[D:"a dit"]` → `[D:"a"], [D':"dit"]`
- #84 `[C:"a attrapé"]` → `[C:"a"], [C':"attrapé"]`
- #90 `[D:"a appris"]` → `[D:"a"], [D':"appris"]`

並行して it (#1 ho visto, #11 ho comprato, #27 sono andato, #29 ho dimenticato, #47 ha spiegato, #65 ha dato, #72 hanno costruito, #77 è rimasto, #82 ha detto, #84 ha preso, #90 ha imparato) と pt (#21 vou jantar) でも同じ修正が必要 (指摘 10 を参照)。

---

### 10. it 助動詞 avere/essere/stare の分節が文間で OWN/FUSED に分裂 【確実】

**Current:**
- OWN: #17 `[B:"ho"]`、#46 `[E:"ho"]`、#52 `[H:"ho"]`、#15 `[D:"sta"]`、#26 `[D:"stanno"]`、#53 `[E:"stanno"]`、#69 `[E:"ha"]`、#81 `[F:"ho"]`
- FUSED: #1 `[G:"ho visto"]`、#11 `[C:"ho comprato"]`、#27 `[D:"sono andato"]`、#29 `[C:"ho dimenticato"]`、#41 `[E:"sto leggendo"]`、#47 `[D:"ha spiegato"]`、#60 `[D:"sto imparando"]`、#65 `[E:"ha dato"]`、#66 `[C:"è coperta"]`、#72 `[D:"hanno costruito"]`、#75 `[C:"stanno imparando"]`、#77 `[C:"è rimasto sorpreso"]`、#79 `[E:"si è trasferita"]`、#82 `[D:"ha detto"]`、#84 `[C:"ha preso"]`、#88 `[C:"sta cambiando"]`、#90 `[D:"ha imparato"]`

**Problem:** イタリア語の *passato prossimo* と進行 *stare + gerundio* は両方とも分析形で、上記 fr と同じ問題。**#15 #26 #53 で `sta/stanno` を独立分節**しているのに、**#41 #60 #75 #88 では `sto leggendo / sto imparando / stanno imparando / sta cambiando` を融合**している分裂は強い不整合。同じ進行アスペクトを表す同じ助動詞で 5 文中 3 文 OWN、5 文中 2 文 FUSED。

**Proposed:** 進行 (stare + gerundio) と完了 (avere/essere + participio) の auxiliary を全文独立:
- #41 `[E:"sto leggendo"]` → `[E:"sto"], [E':"leggendo"]`
- #60 `[D:"sto imparando"]` → `[D:"sto"], [D':"imparando"]`
- #75 `[C:"stanno imparando"]` → `[C:"stanno"], [C':"imparando"]`
- #88 `[C:"sta cambiando"]` → `[C:"sta"], [C':"cambiando"]`
- #11 `[C:"ho comprato"]` → `[C:"ho"], [C':"comprato"]` (passato prossimo)
- 同様に #27 #29 #47 #65 #72 #77 #82 #84 #90

---

### 11. es 助動詞 estar の分節が文間で分裂、Periphrastic future "voy a" は全例融合または欠如 【確実】

**Current (estar + gerundio):**
- OWN: #15 `[D:"está"]`、#26 `[D:"están"]`、#53 `[E:"están"]`
- FUSED: #27 `[D:"he estado"]` (完了)、#41 `[E:"estoy leyendo"]`、#60 `[D:"estoy aprendiendo"]`、#63 `[C:"están cantando"]`、#75 `[C:"están aprendiendo"]`、#74 `[C:"llevo"]` + `[C:"esperando"]` (`llevar` 構文)

**Current (futuro perifrástico voy a):**
- es は #21 で **synthetic 単一形 `cenaré`** を採用 (融合)、fr は `vais dîner` で融合、pt は `vou jantar` で融合
- 一方 #14 `[C:"voy"]` / #95 `[C:"Voy"]` / pt #14 `[C:"vou"]` / fr #14 #95 `[C:"vais"]` は習慣の「行く」動詞として独立 (これは正しい)

**Problem:** スペイン語の進行 *estar + gerundio* は完全な分析形で、進行アスペクト粒子として `está/están/estoy` は学習者教材で独立分節が標準 (Real Academia, *Nueva gramática*, §28.5)。**#15 #26 #53 で OWN になっているのに #41 #60 #63 #75 で FUSED** という分裂は it と完全に並行。さらに #21 では未来表現として `cenaré` (synthetic) を採用しているが、これは pt の `vou jantar` (analytic periphrasis) との並列を崩している — 並行翻訳としては `voy a cenar` の方が pt/fr と整合する (これは語彙選択なので射程外だが、analytic future を採用するなら分節独立すべき点を記録)。

**Proposed:** estar 進行を全文 OWN に統一:
- #41 `[E:"estoy leyendo"]` → `[E:"estoy"], [E':"leyendo"]`
- #60 `[D:"estoy aprendiendo"]` → `[D:"estoy"], [D':"aprendiendo"]`
- #63 `[C:"están cantando"]` → `[C:"están"], [C':"cantando"]`
- #75 `[C:"están aprendiendo"]` → `[C:"están"], [C':"aprendiendo"]`
- #27 `[D:"he estado"]` → `[D:"he"], [D':"estado"]` (完了助動詞 haber も独立すべき; これは指摘 14 と関連)

---

### 12. vi アスペクト粒子 đã / đang / sẽ の分節が文間で OWN/FUSED に分裂 【確実】

**Current:**
- đã (perfective/past) OWN: #46 `[H:"đã"]`、#52 `[H:"đã"]`、#69 `[E:"đã"]`
- đã FUSED: #11 `[C:"đã mua"]`、#27 `[D:"đã đến"]`、#29 `[C:"đã quên"]`、#35 `[B:"đã kết hôn"]`、#65 `[E:"đã tặng"]`、#72 `[D:"đã xây"]`、#74 `[C:"đã chờ"]`、#79 `[E:"đã chuyển đi"]`、#90 `[D:"đã"]` not present (uses `học`)
- đang (progressive) OWN: #15 `[D:"đang"]`、#26 `[D:"đang"]`、#53 `[E:"đang"]`
- đang FUSED: #20 `[D:"đang mưa"]`、#41 `[E:"đang đọc"]`、#60 `[D:"đang học"]`、#63 `[C:"đang hót"]`、#75 `[C:"đang học"]`、#88 `[C:"đang thay đổi"]`
- sẽ (future) OWN: #7 `[C:"sẽ"]`、#21 `[E:"sẽ ăn"]` (FUSED)

**Problem:** ベトナム語の TAM 粒子 đã (past/perfective)、đang (progressive)、sẽ (future) はいずれも **前置 (pre-verbal) 自由形態素** で、分節独立すべき (Cao Xuân Hạo, *Tiếng Việt — Sơ thảo Ngữ pháp Chức năng* 1991, §6.2; Nguyễn Đình-Hoà, *Vietnamese*, Benjamins 1997, Ch.10)。データは **đang で 3 文 OWN / 6 文 FUSED**、**đã で 3 文 OWN / 9 文 FUSED**、**sẽ で 1 文 OWN / 1 文 FUSED** という極端な分裂。とくに #15 / #26 / #53 で `đang` が独立しているのは正しいが、#20 #41 #60 #63 #75 #88 で融合しているのは取りこぼし。vi_nom 側も並行修正が必要 (指摘 19 で言及)。

**Proposed:** 全 vi TAM 文で đã / đang / sẽ を分節独立:
- #11 `[C:"đã mua"]` → `[C:"đã"], [C':"mua"]` (または `[H:"đã"], [C:"mua"]`)
- #27 `[D:"đã đến"]` → `[D:"đã"], [D':"đến"]`
- #29 `[C:"đã quên"]` → `[C:"đã"], [C':"quên"]`
- #35 `[B:"đã kết hôn"]` → `[B:"đã"], [B':"kết hôn"]`
- #65 `[E:"đã tặng"]` → `[E:"đã"], [E':"tặng"]`
- #72 `[D:"đã xây"]` → `[D:"đã"], [D':"xây"]`
- #20 `[D:"đang mưa"]` → `[D:"đang"], [D':"mưa"]`
- #41 `[E:"đang đọc"]` → `[E:"đang"], [E':"đọc"]`
- #60 `[D:"đang học"]` → `[D:"đang"], [D':"học"]`
- #63 `[C:"đang hót"]` → `[C:"đang"], [C':"hót"]`
- #75 `[C:"đang học"]` → `[C:"đang"], [C':"học"]`
- #88 `[C:"đang thay đổi"]` → `[C:"đang"], [C':"thay đổi"]`
- #21 `[E:"sẽ ăn"]` → `[E:"sẽ"], [E':"ăn"]`

vi_nom 側も同じ構造で字喃を分割すること (指摘 19)。

---

### 13. zh 進行アスペクト粒子 在 / 正在 / 着 の分節が文間で分裂 【確実】

**Current:**
- 正在 OWN: #15 `[D:"正在"]`、#53 `[E:"正在"]`、#75 `[D:"正在学习"]` (FUSED と OWN の混在: `[D:"正在学习"]`)
- 在 + V FUSED: #20 `[D:"在下雨"]`、#41 `[E:"在读"]`、#60 `[D:"正在学习"]`、#88 `[C:"正在改变"]`
- 着 (durative): 出現せず
- 呢 (sentence-final aspect): #26 `[D:"呢"]` OWN

**Problem:** 中国語の進行アスペクトを表す `正在 / 在 / 正` は前置形態素で、独立した分節が学習者教材で標準 (Li & Thompson, *Mandarin Chinese: A Functional Reference Grammar* 1981, §6.2)。**#15 #53 で `正在` を OWN にしているのに #20 #41 #60 #88 で `在下雨 / 在读 / 正在学习 / 正在改变` と動詞を融合**しているのは深刻な不整合。

**Proposed:**
- #20 `[D:"在下雨"]` → `[D:"在"], [D':"下雨"]`
- #41 `[E:"在读"]` → `[E:"在"], [E':"读"]`
- #60 `[D:"正在学习"]` → `[D:"正在"], [D':"学习"]`
- #75 `[D:"正在学习"]` → `[D:"正在"], [D':"学习"]`
- #88 `[C:"正在改变"]` → `[C:"正在"], [C':"改变"]`

---

### 14. en 完了助動詞 have/has + been の扱いが #27 と #20 で分裂 【蓋然】

**Current:**
- #20 `[C:"It has been"]` (主語 + 助動詞 + 完了助動詞が **一塊**)
- #27 `[D:"have been"]` (助動詞 + 完了助動詞が一塊、主語は分離)
- #74 `[A:"I've"]`、`[C:"been waiting"]` (主語 + 助動詞短縮 vs 進行助動詞 + V-ing)
- #17 `[B:"have"]` (本動詞「持つ」、所有)
- #21 `[E:"will have"]` (未来助動詞 + 本動詞「持つ」)

**Problem:** 英語の現在完了 `have/has + past participle` と現在完了進行 `have/has + been + V-ing` の分節基準が文ごとに異なる。
- #20 `[C:"It has been"]` は **主語 it + 助動詞 has + 完了助動詞 been を一塊** とし、しかも分節 C (= 動詞句) としている。これは主語 (= A) と助動詞 (= D) を分けるべき方針 (#17/#27/#74 と整合) に反する。
- #74 は `[A:"I've"]` と主語 + 助動詞短縮 (I have) を一塊にしている。これも #27 で `[A:"I"]` と `[D:"have been"]` を分けているのと矛盾。短縮 's, 've は分節境界で展開すべきだが、表記上の制約があるなら少なくとも letter 配分の方針を統一すべき。

**Proposed:**
- #20 `[C:"It has been"]` → `[A:"It"], [C:"has been"]` または `[A:"It"], [C:"has"], [C':"been"]` の三段
- #74 `[A:"I've"]` → `[A:"I"], [C:"'ve"]` または `[A:"I"], [C:"have"]` (展開) + `[C:"been waiting"]` → `[C:"been"], [C':"waiting"]`
- #27 `[D:"have been"]` → `[D:"have"], [D':"been"]` (進行/完了の二段分節を全面導入する場合)

---

### 15. en 未来 will + V の分節が #7 #21 で OWN、他で欠如 【蓋然】

**Current:**
- #7 `[C:"will be"]` OWN (未来助動詞 + コピュラ)
- #21 `[E:"will have"]` OWN (未来助動詞 + 本動詞)
- #9 では「want to」表現を採用、will なし

**Problem:** 英語の未来助動詞 `will` は語彙的助動詞で、`will be / will have` のように後続要素と融合させているが、これは fr `sera` (synthetic future)、es `cenaré`、it `sarà` の synthetic future が独立分節されている (#7 [C:"sera"] [C:"sarà"] [C:"será"] 全て OWN) のと並行している点で OK。ただし **`will` を `be / have` から分けない方針なら、fr/es/it の synthetic future も「テンス + 動詞」の二段分節を導入する余地**を closed-review で記録すべき。

**Proposed:** 現状維持 (`will be` 一塊) でも整合的だが、Rule #11 を厳密に適用するなら:
- #7 `[C:"will be"]` → `[C:"will"], [C':"be"]`
- #21 `[E:"will have"]` → `[E:"will"], [E':"have"]`

これは指摘 8 (en `-ed`) と方針セットで決めるべき。

---

### 16. ja 進行アスペクト「ている / でいる」の分節が文間で分裂 【確実】

**Current:**
- OWN (て + いる の分割): #26 `[C:"遊んで"], [D:"‌いる"]`、#53 `[C:"咲いて"], [E:"‌いる"]`
- FUSED (ている 一塊): #15 `[C:"留学して"], [D:"います"]` (敬語化された分割で半分 OWN)、#20 `[C:"降っています"]` 融合、#41 `[E:"読んでいる"]` 融合、#42 `[C:"着ている"]` 融合、#60 `[D:"ことを学んでいる"]` 融合、#63 `[C:"歌っている"]` 融合、#66 `[C:"覆われている"]` 融合 (受動進行)、#74 `[C:"待っている"]` 融合、#75 `[C:"習っている"]` 融合、#86 `[C:"使っている"]` 融合、#88 `[C:"変えつつある"]` 融合 (異なるアスペクト粒子)、#83 `[D:"としている"]` 融合 (努力アスペクト)

**Problem:** 日本語進行 / 結果状態の補助動詞「いる」(< 古典 「ゐる」) は明らかに分離可能で、寺村 1984, 工藤 1995 のテンス・アスペクト研究では `‐て + いる` の二形態素分析が標準。**#26 #53 で分割が成立**しているのに、**残り 10+ 文で「ている」が融合**。とくに進行アスペクトのコアである #41 / #63 / #75 / #86 で融合しているのは取りこぼし。

**Proposed:** 全 ja「ている」文で `て / で` と `いる / います` を分節独立:
- #20 `[C:"降っています"]` → `[C:"降って"], [C':"います"]` (または既存 letter で二段)
- #41 `[E:"読んでいる"]` → `[E:"読んで"], [E':"いる"]`
- #42 `[C:"着ている"]` → `[C:"着て"], [C':"いる"]`
- #60 `[D:"ことを学んでいる"]` → `[D:"ことを学んで"], [D':"いる"]`
- #63 `[C:"歌っている"]` → `[C:"歌って"], [C':"いる"]`
- #66 `[C:"覆われている"]` → `[C:"覆われて"], [C':"いる"]` (受動進行)
- #74 `[C:"待っている"]` → `[C:"待って"], [C':"いる"]`
- #75 `[C:"習っている"]` → `[C:"習って"], [C':"いる"]`
- #86 `[C:"使っている"]` → `[C:"使って"], [C':"いる"]`

---

### 17. ko 進行アスペクト「고 있다」の分節が文間で分裂 【確実】

**Current:**
- OWN: #26 `[C:"놀고"], [D:"있다"]`、#53 `[C:"피고"], [E:"있다"]`、#15 `[C:"유학하고"], [D:"있어요"]` (敬語形)
- FUSED: #20 `[C:"오고 있어요"]` 融合 (敬語進行)、#41 `[E:"읽고 있다"]` 融合、#60 `[D:"배우고 있다"]` 融合、#63 `[C:"노래하고 있다"]` 融合、#66 `[C:"덮여 있다"]` 融合、#74 `[C:"기다리고 있었다"]` 融合 (過去進行)、#75 `[C:"배우고 있다"]` 融合、#88 `[C:"변화시키고 있다"]` 融合

**Problem:** ko の「‐고 있다」進行構文は補助動詞「있다 (be)」+ 連用接続「-고」の分析形で、Sohn 1999, §10.2.3 が独立形態素として記述。**#26 #53 #15 で OWN になっているのに残り 7 文で FUSED** は明らかな取りこぼしで、ja「ている」と完全に並行する不整合パターン。

**Proposed:** 全 ko「‐고 있다」文で `‐고` と `있다 / 있어요 / 있었다` を分節独立:
- #20 `[C:"오고 있어요"]` → `[C:"오고"], [C':"있어요"]`
- #41 `[E:"읽고 있다"]` → `[E:"읽고"], [E':"있다"]`
- #60 `[D:"배우고 있다"]` → `[D:"배우고"], [D':"있다"]`
- #63 `[C:"노래하고 있다"]` → `[C:"노래하고"], [C':"있다"]`
- #66 `[C:"덮여 있다"]` → `[C:"덮여"], [C':"있다"]` (受動進行)
- #74 `[C:"기다리고 있었다"]` → `[C:"기다리고"], [C':"있었다"]`
- #75 `[C:"배우고 있다"]` → `[C:"배우고"], [C':"있다"]`
- #88 `[C:"변화시키고 있다"]` → `[C:"변화시키고"], [C':"있다"]`

---

### 18. de 完了助動詞 haben / sein + 過去分詞の分節が文間で分裂 【確実】

**Current:**
- OWN (分節独立): #27 `[D:"bin"], [D:"gewesen"]` (前後挟みで D を二か所)、#29 `[C:"habe"], [C:"vergessen"]`、#52 `[H:"habe"]`、#90 `[D:"hat"], [D:"gelernt"]` (前後挟み)、#93 `[G:"werden"], [G:"abgehalten"]` (受動 werden)
- FUSED 等: #11 `[C:"kaufte"]` (Präteritum, 一語)、#21 `[E:"esse"]` (現在で未来代用)、#33 `[B:"war"]` OWN (コピュラ過去)、#46 `[H:"habe"]`、#47 `[D:"erklärte"]` (Präteritum, 一語)、#65 `[E:"gab"]` (Präteritum)、#69 `[D|E:"schrieb"]` (Präteritum, TAM 複合)、#72 `[D:"bauten"]` (Präteritum)、#82 `[D:"sagte"]` (Präteritum)、#84 `[C:"hat sich"], [B:"erkältet"]` (再帰完了, 分節独立)、#79 `[E:"weggezogen ist"]` (語順倒置完了)

**Problem:** ドイツ語は他のゲルマン語と異なり **Präteritum (synthetic) と Perfekt (analytic) の二系統が共存** し、データはこれを混在させている (口語的には Perfekt、書面語では Präteritum)。並列翻訳としては不均衡だが、これは語彙選択 (#28 系統) の問題。ただし **Perfekt を採用した文 (#27 #29 #84 #90 #93) では haben/sein を独立分節**、**Präteritum を採用した文 (#11 #47 #65 #72 #82) では synthetic 一語**、という対応が現状取れているか確認すると、おおむね整合しているが #84 `[C:"hat sich"]` のように主語 + 助動詞 + 再帰代名詞が複合された塊になっており、再帰代名詞 sich を独立分節すべき (これは TAM ではなく文法的代名詞の問題)。

**Proposed:** 軽微な修正:
- #84 `[C:"hat sich"]` → `[C:"hat"], [C':"sich"]` (再帰代名詞独立)
- #79 `[E:"weggezogen ist"]` → `[E:"weggezogen"], [E':"ist"]` (語順倒置完了の独立分節)

---

### 19. vi_nom (字喃) における TAM 粒子の対応が現代 vi と非同期 【確実】

**Current (vi_nom 字喃):**
- 既に確認した文では vi が `đã / đang / sẽ` を分節独立する場合 (#15 #26 #53 #7) でも vi_nom 側の字喃 (`㐌 / 當 / 仕` 等) が並行的に分節されているか、本レビューで個別確認しなかったが、Rule #11 + memory feedback #19 (`feedback_segment_splitting.md` 三大同期則) によれば **vi_nom は vi と完全同一の segment letter 構造を持つ必要**。
- 指摘 12 で挙げた vi の `đã / đang / sẽ` 分節独立修正を vi 側で行う場合、**vi_nom 側でも対応する字喃** (`㐌`/đã, `當`/đang, `仕`/sẽ) を独立分節に修正する必要。これを忘れると `vi.map(x=>x[0]).join(',') !== vi_nom.map(x=>x[0]).join(',')` の同期則違反になる。

**Problem:** vi_nom の TAM 粒子は字喃辞典で:
- `đã` = `㐌` (Nôm 字) または `已` (Hán 字、Hán-Việt "dĩ")
- `đang` = `當` (Hán 字、Hán-Việt "đương") または `丁`
- `sẽ` = `仕` (Nôm 字) または `將` (Hán 字、Hán-Việt "tương")

指摘 12 の修正適用時に vi_nom も同じ structure で字喃を割り当てる必要。

**Proposed:** 指摘 12 と 17 の vi 修正に合わせて vi_nom も同期更新:
- #11 vi `[C:"đã"], [C':"mua"]` ↔ vi_nom `[C:"㐌"], [C':"買"]`
- #20 vi `[D:"đang"], [D':"mưa"]` ↔ vi_nom `[D:"當"], [D':"䨲"]` (mưa の喃字)
- #21 vi `[E:"sẽ"], [E':"ăn"]` ↔ vi_nom `[E:"仕"], [E':"咹"]`

これは vi 修正と必ずバンドルで実施 (memory `feedback_segment_splitting.md` Rule #18)。

---

### 20. en #46 「talked」だけが規約適用済み — TAM 分節 ROSETTA STONE としての歴史的痕跡 【要検討】

**Current:** #46 の en は `[A:"I"], [E:"talk"], [H:"ed"], [F:"with"], [G:"my"], [B:"friend"], [C:"on the phone"], [D:"for an hour"]` で、`-ed` が独立分節 H として切り出されている唯一の例。並行して #46 の **ja [H:"た"] / ko [H:"‌했다"] / tr [H:"‌tum"] / fi [H:"‌in"] / hu [H:"‌tem"] / ru [H:"л"] / it [E:"ho"], [H:"parlato"] / fr [E:"ai"], [H:"parlé"]** が全て **同じ letter H を TAM 専用分節**として割り当てている。さらに #52 (lost wallet) / #69 (wrote letter) もほぼ同じ TAM-H パターンを持つ。

**Problem:** これは過去のレビューサイクル (おそらく #11〜#14 のどこか) で **「H 分節 = TAM マーカー」という intercategorial 規約**が部分的に確立された痕跡。しかし規約は #46 #52 #69 の 3 文だけに適用され、他の 30 件以上の過去/完了文では適用されなかった。つまり **「規約は存在するが普及が止まった」状態**。本レビュー (指摘 1〜18) は全てこの 3 文の方針を残り全文に展開する作業の指摘集。

**Proposed:** closed-review #11〜#14 で **「TAM マーカーは原則 H 分節 (または letter 体系の最後尾) に独立させる」** という grand convention を明文化し、本レビュー指摘 1〜18 で挙げた約 60 セルを一括修正する。これが採択されない場合、逆に #46 #52 #69 の OWN 分節を融合に戻して整合性を取る選択肢もあるが、Rule #11 (memory) と矛盾するため非推奨。

---

### 21. fr 進行 "être en train de" の分節が #15 と #88 で不一致 【蓋然】

**Current:**
- #15 `[D:"est en train d'"], [C:"étudier à l'étranger"]` (D = 助動詞句、C = 動詞)
- #88 `[C:"est en train de changer"]` (C 一塊)

**Problem:** フランス語の迂言的進行 `être en train de + INF` は分析形で、助動詞句 (`est en train de`) と不定詞 (`changer`) を分節すべき。**#15 で分節されているのに #88 で融合**。

**Proposed:**
- #88 `[C:"est en train de changer"]` → `[C:"est en train de"], [C':"changer"]`

---

### 22. ar 未来助動詞 سـ / سوف の分節が #9 と #7 と #21 で不揃い 【蓋然】

**Current:**
- #7 `[C:"سيكون"]` (س + يكون、未来接頭辞 + コピュラ、一塊)
- #21 `[A:"سأتناول"]` (س + أتناول、主語と動詞と未来接頭辞が一塊、letter A は主語のはずなのに動詞)
- #9 `[C:"أن أذهب"]` (مضارع منصوب、未来ではなく接続法、語彙選択で迂回)

**Problem:** アラビア語の未来接頭辞 `سـ` (短期未来) / `سوف` (遠未来) は語幹に直接付着するクリティック (Holes 2004, §6.3.4) で、ZWNJ 規約があるなら分節独立可能。**#21 で `سأتناول` を letter A (主語) として配置している**のは TAM 規約以前に語彙 letter 体系の重大な誤り — `سأتناول` = س (未来) + أتناول (1sg "I will eat") で、主語は動詞活用に埋め込まれているため空主語 (pro-drop) として記述すべき。letter A は別の要素 (`أنا` "I" 明示時のみ) に充てるべき。

**Proposed:**
- #21 `[A:"سأتناول"]` → `[E:"س"], [E':"أتناول"]` または `[A:"أنا"], [E:"سأتناول"]` (主語明示時)、あるいは subject = pro-drop で letter A 不使用
- #7 `[C:"سيكون"]` → `[C:"س"], [C':"يكون"]` (TAM 接頭辞独立)

---

### 23. he 完了助動詞 / 未来接頭辞 の分節整合性 【蓋然】

**Current:**
- #7 `[C:"יהיה"]` (3msg future "will be"、語幹融合)
- #21 `[E:"אאכל"]` (1sg future "I will eat"、語幹融合)
- #27 `[D:"הייתי"]` (1sg past "I was"、語幹融合、experiential "I have been")
- #11 `[C:"קניתי"]` (1sg past "I bought"、語幹融合)

**Problem:** ヘブライ語は Semitic の屈折型形態論を持ち、未来 (imperfective) `יִ-, תִ-, אֶ-, נְ-` 接頭辞、過去 (perfective) `-תִּי, -תָּ, -...` 接尾辞は形態素として明確 (Glinert *Modern Hebrew* 1989, §5)。ar と同じく **接頭/接尾辞は分節独立する余地あり**が、現状全て融合。Semitic 系の方針として ar と統一すべき (融合 vs 分離どちらかに揃える)。指摘 22 と方針セットで決定。

**Proposed:** 方針確認後、ar と同方針 (分離なら he も分離) で統一。

---

### 24. la 完了テンスと現在の混在 — #27 #11 で synthetic 過去のみ、TAM 分節は不可能 【整合・記録】

**Current:**
- #11 `[C:"emi"]` (1sg perf "I bought")、#27 not present in la? (要確認)、#1 等

**Problem:** ラテン語の完了テンス `‐ī, ‐istī, ‐it...` は屈折語尾で形態素として最小単位、分節独立不能。これは現状の融合扱いで **完全に正しい** (Cicero ラテン語の synthetic past)。記録として「**屈折型 TAM (la, ru, en 不規則動詞) は融合維持、agglutinative TAM (tr, ko, fi, hu, ja, vi 接尾辞) は分離**」の二分原則を closed-review に明記。

**Proposed:** 修正不要。記録のみ。

---

## 総括 — 支配的な TAM 分節欠陥

本レビューで検出された TAM 分節の取りこぼしは **すべて同一パターン** に収束する:

> **過去レビューサイクルのどこかで「H 分節 = TAM マーカー」の方針が #46 / #52 / #69 / #15 / #26 / #53 / #33 の 6〜7 文について部分実装されたが、残り約 40〜50 件の TAM 含有文に展開されなかった。**

この単一の **「実装中断」が、25 言語 × 40 文 = 約 60〜80 個のセルにわたって規約違反として化石化** している。具体的内訳:

| 言語 | OWN になっている文数 | FUSED で取りこぼし文数 | 主な形態素 |
|---|---|---|---|
| zh | 4 | 10 | 了 (perfective) |
| ja | 5 | 12 | た (past), ている (progressive) |
| ko | 3 | 10 | 었/았/했 (past), 고 있다 (progressive) |
| tr | 2 | 10 | -DI (past) |
| fi | 2 | 8 | -i-n (past) |
| hu | 1 | 10 | -tem (past) |
| ru | 3 | 10 | -л (past) |
| en | 1 | 1 (規則) | -ed (past) |
| fr | 4 | 10 | ai / a + p.p. (passé composé) |
| it | 8 | 10 | ho / sta + ger./p.p. |
| es | 3 | 5 | está + gerundio |
| vi | 7 | 15 | đã / đang / sẽ |

**修正の優先順位**:
1. **最優先**: zh 了、ja た、ko 했다、vi đã/đang/sẽ — Sinosphere + ベトナム TAM 粒子の全文統一 (指摘 1, 2, 3, 12, 16, 17)。
2. **次優先**: tr / fi / hu の agglutinative 過去接尾辞 ZWNJ 分節 (指摘 4, 5, 6)。
3. **中優先**: fr / it / es / pt の Romance 分析過去・進行助動詞分離 (指摘 9, 10, 11)。
4. **要方針確認**: en `-ed` (規則動詞のみ分節 vs 全廃) と ru `-л` (Slavic 屈折型として融合維持) — closed-review #11〜#14 で grand convention を明文化 (指摘 7, 8, 20, 22, 23)。
5. **同期必須**: vi 修正時の vi_nom 字喃並行修正 (指摘 19)。

**根本提案**: closed-review に **「H 分節 (または末尾分節) = TAM マーカー専用」** という grand convention を明文化し、本レビューの指摘を一括 batch 修正する review_cycle を編成する。これが採択されなければ、Rule #11 (memory) と現状データの矛盾は今後も再発する。

---

**ファイル:** `/home/jounlai/langmap/langmap_reviews/43_open.md`
**指摘件数:** 24 件 (うち【確実】= 14 件、【蓋然】= 7 件、【要検討/整合・記録】= 3 件)
**支配的な TAM 分節欠陥:** **「TAM-as-H 分節規約の部分実装」** — #46 / #52 / #69 などごく一部の文で確立された「過去/完了/進行マーカーは独立分節 (多くは letter H)」という規約が、残り約 40〜50 件の TAM 含有文に展開されないまま化石化している。zh 了、ja た、ko 었/았/했、tr -DI、fi -i-、hu -tem、vi đã/đang/sẽ、fr/it/es 完了助動詞のすべてが同一パターンで取りこぼされている。Sinosphere TAM 粒子 (zh 了 / ja た / ko 았) と Vietnamese pre-verbal 粒子 (đã / đang / sẽ) を最優先で全文統一すべき。

---

## Dev response — round 1 (2026-06-03)

レビュアー @tam_iulia 様、ありがとうございます。24 件の指摘を精査しました。本レビューは **単一文の修正ではなく、データセット全体に及ぶ規約 (convention) 採択** を求めるレビューであり、修正範囲が 60〜80 セル / 約 30 文に及ぶため、**全面適用は本ラウンドで行わず、オーナー承認を要する規約議題として deferred** とします。本ラウンドでは「現状データの内部矛盾を解消する最小コア (compound-letter 残置の解消 + ZWNJ 取りこぼし)」のみを適用します。

### 規約採択判断 (scope decision)

本レビューの根幹は **「H 分節 = TAM マーカー」grand convention を全 100 文 / 25 言語に展開するか否か」** という設計判断であり、これは個別レビューラウンドの権限を超えると判断しました。理由:

1. **パレット (sentence.segments) 拡張が必要**: 提案された 60+ 修正のうち、ほとんどの target sentence (#11/#20/#27/#29/#35/#41/#47/#60/#63/#65/#66/#72/#74/#75/#77/#79/#82/#84/#86/#88/#90 など) は palette が `ABCD` または `ABCDE` のみで、letter H を新規分節として追加するには `sent.segments` (data.js 構造) の拡張が必要。applier は palette 外の letter を拒否する設計のため、これらは個別 op:replace では適用不能。palette 拡張はデータ schema 変更に等しく、本レビューの射程外で別ラウンドで合意すべき。
2. **規約の射程競合**: 指摘 7 (ru -л) と指摘 8 (en -ed) で reviewer 自身が「屈折型 (la, ru, en 不規則) は融合維持、agglutinative (tr, ko, fi, hu, ja, vi 接尾辞) は分離」という二分原則を要望しているが、これは **既存の #46/#52/#69 の ru -л OWN 分節**と整合しない。reviewer 提案 (A) 全部融合、(B) 全部分離、いずれを採るかが未定で、これは closed-review #11〜#14 で grand convention を明文化してからでないと適用方向が確定しない。
3. **vi ↔ vi_nom 同期同時更新が必要** (指摘 19): vi の TAM 分節独立を 12 文以上で行う場合、vi_nom 側で字喃 (`㐌` / `當` / `仕` 等) も同期分節する必要。これは reviewer 提案でも明示されており、片側だけの修正は memory `feedback_segment_splitting.md` Rule #18 (synchronized update) 違反になる。vi_nom 字喃の意味マッピングは別途専門知識を要する。
4. **メモリ memory `feedback_new_lang_checklist.md` 系の波及**: H letter を ABCD パレットに追加すると、#15 / #20 / #21 等の Hanmap / wordmap 側のキャッシュバスター更新、tree.html / lang_names などの 21 sections も影響する可能性。

### 本ラウンド適用 (round 1 = 6 件)

palette を変更せず、display を破壊せず、既存 H-letter palette 内に収まる **「compound-letter 残置の解消」と「ZWNJ 取りこぼし」のみ** を採択:

| # | id | lang | 修正内容 | 関連指摘 | op |
|---|----|------|--------|---------|-----|
| 1 | 1 | ja | `[G:見た]` → `[G:見],[H:た]` | 指摘 2 | replace |
| 2 | 52 | hu | `[C\|H:elvesztettem]` → `[C:elveszt],[H:‌ettem]` | 指摘 6 | replace |
| 3 | 69 | ko | `[D\|E:썼다]` → `[D:썼],[E:‌다]` | 指摘 3 | replace |
| 4 | 69 | hu | `[D\|E:írt]` → `[D:ír],[E:‌t]` | 指摘 6 | replace |
| 5 | 69 | fi | `[D\|E:kirjoitti]` → `[D:kirjoit],[E:‌ti]` | 指摘 5 | replace |
| 6 | 69 | tr | `[E:dı]` → `[E:‌dı]` (ZWNJ 補足) | 指摘 4 | settext (allowTextChange: 'yaz dı' → 'yazdı' は表示バグの修正なので意図的) |

これらは **すべて #1 / #46 / #52 / #69 の既存 H-letter palette 内 (ABCDEFGH+) で完結**し、新規 letter 追加なし、display 保持 (ZWNJ 経由)、隣接同 letter 違反なし、verifier で確認済み。

### 部分受諾 (verdict per issue)

- 指摘 **1** (zh 了): **deferred** — 10 文すべて ABCD/ABCDE palette。H 追加が前提。
- 指摘 **2** (ja た): **partial accepted** — #1 のみ採択 (#1 は palette に H あり)。他 9 文は palette 不足で deferred。
- 指摘 **3** (ko 었/았/했): **partial accepted** — #69 ko の D|E compound 解消のみ採択。他 10 文は palette 不足で deferred。
- 指摘 **4** (tr -DI): **partial accepted** — #69 tr の ZWNJ 取りこぼし修正のみ採択。他 10 文は palette 不足で deferred。
- 指摘 **5** (fi -i-): **partial accepted** — #69 fi の D|E compound 解消のみ採択。他 7 文は palette 不足で deferred。
- 指摘 **6** (hu -tem): **partial accepted** — #52 hu の C|H compound 解消と #69 hu の D|E compound 解消を採択。他 9 文は palette 不足で deferred。
- 指摘 **7** (ru -л): **deferred** — 方針 (A) 融合 vs (B) 分離が未定。reviewer 自身が closed-review #11〜#14 での明文化を要望しているので、本ラウンドでは判断を保留。
- 指摘 **8** (en -ed): **deferred** — 指摘 7 と同じく方針 (A) vs (B) が未定。
- 指摘 **9, 10, 11** (fr / it / es 助動詞): **deferred** — 対象 30+ 文の大半が palette 不足 (ABCD/ABCDE)。grand convention で letter 体系を確定後にバッチ修正すべき。
- 指摘 **12** (vi đã/đang/sẽ): **deferred** — palette 不足 + vi_nom 同期必須 (指摘 19)。
- 指摘 **13** (zh 在/正在): **deferred** — palette 不足。
- 指摘 **14, 15** (en have/will): **deferred** — 方針未定。
- 指摘 **16, 17** (ja ている / ko 고 있다): **deferred** — palette 不足。
- 指摘 **18** (de haben/sein): **deferred** — 提案された修正 (#84 hat sich, #79 weggezogen ist) は TAM ではなく再帰代名詞/語順倒置の分節問題で、本レビューの射程 (TAM 整合) からはみ出している。別ラウンドで扱うべき。
- 指摘 **19** (vi_nom 同期): **deferred** — 指摘 12 と必ずバンドル。
- 指摘 **20** (TAM-as-H grand convention): **deferred (要オーナー裁定)** — これが本レビューの核心議題。採択されれば残り 40+ 文を一括修正する review_cycle を編成するか、否決されれば #46/#52/#69 の H 分節を融合に戻すかの 二者択一。
- 指摘 **21** (fr être en train de): **deferred** — #88 は palette ABC のみで C' 追加不能。
- 指摘 **22, 23** (ar / he 未来接頭辞): **deferred** — Semitic 系の方針要再確認 + 指摘 22 の #21 ar `[A:سأتناول]` は letter 配分の誤りでもあるが、これは TAM 分節以前の問題で別レビュー (#3 系統) で扱うべき。
- 指摘 **24** (la 屈折維持): **accepted as-is** — 修正不要、記録のみ。

### 推奨: 別ラウンドでの規約議題化

本レビューは個別文の bug fix ではなく **schema-level convention proposal** であるため、closed-review #11〜#14 系列で以下のいずれかを採択する review_cycle の編成を推奨します:

- **オプション X (sweep adopt)**: H letter (および C'/D'/E' 等の primed slot) を sentence palette schema に追加し、全 ~30 文の TAM マーカーを分節独立に sweep 修正。修正範囲は約 60〜80 セル。
- **オプション Y (revert minimal)**: #46/#52/#69 の H 分節を融合に戻し、Rule #11 を「ZWNJ 接尾辞 (tr/ko/fi/hu) のみに限定」と修正。修正範囲は約 10 セル。
- **オプション Z (status-quo)**: 現状の不整合を許容し、Rule #11 をデータ実装から外す。

dev 側意見としては **オプション X が学習価値・形態論的正確性の点で最良** ですが、データ量・vi_nom 同期コスト・wordmap/hanmap 等の派生データへの波及を考えると **オプション Y が実装容易性で最良** です。これは reviewer の指摘 7, 8, 20 にも明示されている judgement call で、オーナー判断を仰ぎたい項目です。

### 適用ファイル

- 編集 JSON: `/tmp/lm_edits_43.json` (6 edits)
- 検証済み: 全 6 edits で palette 内、display 保持、隣接同 letter 違反なし

### 未解決 / round 2 持ち越し

24 件中 **6 件 partial accepted / 1 件 record-only accepted / 17 件 deferred (規約議題化推奨)**。指摘 20 の grand convention 議題が確定するまで、残り 60+ セルの sweep 修正は保留します。

— dev (claude-opus-4-7)

