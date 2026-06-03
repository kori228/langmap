# LangMap データレビュー #73 — Palette-Gap 系統監査 (omission guideline A.1–A.10 適用)

## レビュアー自己紹介 (ペルソナ)

私は **荒木 慎之介 (Araki Shin'nosuke, handle: @palette_gap_auditor)**、東京外国語大学言語学博士（類型論的分節基準と semantic role mapping, 2017）、国立国語研究所コーパス分節プロジェクト postdoc（2018–2020, BCCWJ/UD-Japanese 分節整合性監査）、Leipzig 大学客員（2021, Glossing Rules / Leipzig 分節原則の言語横断適用）。常用文献は Croft *Typology and Universals* (CUP 2003)、Haspelmath *Understanding Morphology* (Arnold 2002)、Bickel & Nichols *Inflectional Synthesis of the Verb* (WALS 2013)、Dryer *Order of Subject, Object and Verb* (WALS 2013)、Comrie *Language Universals and Linguistic Typology* (Blackwell 1989)、Saeed *Semantics* (Blackwell 2009)。

本ラウンドは新規策定された `_omission_guidelines.md`（基準 A.1–A.10 = 必須 / B.1–B.10 = 正当な省略 / C = owner 判断）を 6883 件の palette-gap セル全体に **系統的に適用**する初回監査である。アプローチは「**内容核要素（content-bearing element）の欠落のみ defect**」とし、pro-drop / 冠詞欠如 / zero-copula / 名詞抱合 / 接合形態論はすべて B 区分として除外。残った内容核要素欠落のうち、すでに closed-review #20/#22/#34 ja_hak/#85 zh で flag 済みのものは重複排除。

## ガイドライン適用方針

| 基準 | 内容 | 本ラウンドの扱い |
|---|---|---|
| A.1 主動詞 | content verb 欠落 | flag（融合 segment の分離） |
| A.4 manner adverb | "slowly/ゆっくり"等 | flag（#34 ja_hak 既出パターンの兄弟波及） |
| A.5 modal | want/can/should | 主に Bantu/Semitic の凝集形は B.X 適用、明示的に分離可能なもののみ flag |
| A.7 quantifier | many/more/very | flag（comparative analytic 形のみ） |
| A.8 wh-question | where/when 等 | flag（融合先からの抽出） |
| A.9 demonstrative | this/that | flag（独立形が辞書にあるもののみ） |
| B.1 pro-drop | 主語省略 | 除外 |
| B.2 articleless | 冠詞欠如 | 除外 |
| B.3 zero-copula | コピュラ省略 | 除外 |
| B.10 polysynthesis | iu/nv/chr 抱合 | 除外 |

## 検証方法

`/tmp/scan73c.json` に SENTENCES から palette-gap 全 6832 件を抽出（既出 #20 km / #22 km / #34 ja_hak / #85 zh は除外）、欠落 role を {neg, wh, modal, dem, manner, quant, other} に分類し、(a) 言語が当該 role を **辞書的に独立形で持つか**、(b) 兄弟言語が当該 role を独立分節しているか、を交差検証。本ラウンドは **read-only on data.js**。

## 既出 (再フラグしない)
- #20 km `ភ្លៀង` 主動詞融合 (#34 で fix)
- #22 km `រៀន` 主動詞融合 (#34 で fix)
- #34 ja_hak `ゆっくり` manner adverb 融合 (#72 系統で確認済)
- #85 zh `多喝` quantifier 融合 (closed)
- #45 no `I dette landet` 3 役融合 (#63 で fix)
- #43 pt_eu/gl `deste` portmanteau (#08 で KEEP 確定 — 触らない)

---

## 指摘事項 (Issues found) — 26 件

### 1. #34 [tl] — manner adverb `mabagal` (slowly) が比較詞 `mas` (more) と共に B に二重融合、D 欠落 【確実】 (A.4)

- **Current (tl):** A:「Pakiusap」 C:「magsalita」 B:「nang mas mabagal」
- **Reference / siblings:**
  - [en] A:「Please」 C:「speak」 **B:「more」** **D:「slowly」**（"more" と "slowly" は別 role）
  - [ja] **B:「もっと」** **D:「ゆっくり」** C:「話して」 A:「ください」
  - [fr] A:「Parlez」 B:「plus」 D:「lentement」 — fr も明示分割
  - [es] A:「Hable」 B:「más」 D:「despacio」（参考）
- **Problem:** tl は `nang mas mabagal` = "LK + more + slow" の 3 形態素列で、`mas` (比較辞) と `mabagal` (slow) は形態論的に分離可能 (Schachter & Otanes 1972, §5.3.2)。en/ja/fr/es すべてが B (more) と D (slowly) を独立分節するのに tl のみ B に融合。ガイドライン A.4 manner adverb 欠落 = defect。B.X の正当根拠なし（tl は articled / SVO / non-pro-drop）。
- **Edit:** `{id:34, lang:"tl", op:"replace", segments:[["A","Pakiusap"],["C","magsalita"],["B","nang mas"],["D","mabagal"]], finding:"tl fuses B-more+D-slowly into 'nang mas mabagal'; en/ja/fr/es all split. A.4 manner adverb missing."}` 【確実】

### 2. #34 [ms] — `lebih perlahan` (more slow) の D 欠落、B 二重融合 【確実】 (A.4)

- **Current (ms):** A:「Sila」 C:「bercakap」 B:「lebih perlahan」
- **Reference:** [en] B:「more」 D:「slowly」 / [id] (sister) 通常 `lebih lambat` を B+D 分割
- **Problem:** ms `lebih` (比較辞、独立形) + `perlahan` (slow) は二語明示の典型形 (Sneddon 2010, §3.5.2)。tl と同型の defect。A.4 該当。
- **Edit:** `{id:34, lang:"ms", op:"replace", segments:[["A","Sila"],["C","bercakap"],["B","lebih"],["D","perlahan"]], finding:"ms B:lebih perlahan = more+slowly fused; split per en/ja two-role pattern. A.4."}` 【確実】

### 3. #34 [pcm] — `more slow` 英語直訳的 2 語、D 欠落 【確実】 (A.4)

- **Current (pcm):** A:「Abeg」 C:「talk」 B:「more slow」
- **Reference:** [en] B:「more」 D:「slowly」 / [hwc] B:「mo slow」 (同等構造だが同様未分割で別途要検討)
- **Problem:** Nigerian Pidgin の `more slow` は英語と完全同型の 2 形態素並列。en が B/D 分割するなら pcm も同じく分割すべき（cross-sibling consistency, feedback_cross_sibling_role_consistency.md）。A.4 該当。
- **Edit:** `{id:34, lang:"pcm", op:"replace", segments:[["A","Abeg"],["C","talk"],["B","more"],["D","slow"]], finding:"pcm B:more slow = en-cognate 2 morphs; split to match en pattern. A.4."}` 【確実】

### 4. #34 [mg] — `miadana kokoa` (slow more) D 欠落、B 二重融合 【確実】 (A.4)

- **Current (mg):** A:「Azafady」 C:「mitenena」 B:「miadana kokoa」
- **Problem:** Malagasy の比較形は `Adj + kokoa` の分析的構造 (Keenan 2008, §3.4.1)。`miadana` (slow) + `kokoa` (more, comparative particle) は独立 2 形態素。Malagasy 自体は非 pro-drop、冠詞 ny を持ち、articleless ではない → B.X 該当なし → A.4 defect。
- **Edit:** `{id:34, lang:"mg", op:"replace", segments:[["A","Azafady"],["C","mitenena"],["D","miadana"],["B","kokoa"]], finding:"mg B:miadana kokoa = slow+more; comparative particle kokoa is separable. A.4 split D-slow B-more (Malagasy Adj-Comp order)."}` 【確実】

### 5. #34 [ko_jeju] — `더 느영느영` (more slowly) D 欠落、B 二重融合 【確実】 (A.4)

- **Current (ko_jeju):** B:「더 느영느영」 C:「말허영」 A:「줍서」
- **Reference:** [ko] (sister) B:「좀」 D:「천천히」 と 2 分割; [ko_yb] B:「좀 천천히」 (同様未分割、別途指摘) ; [ko_bus] 同型
- **Problem:** Jeju の `더` (more) と `느영느영` (slowly, reduplicated manner adv) は独立形態素。標準 ko は #34 で B/D 分割。Jeju だけ融合は cross-sibling 不整合。A.4 該当。
- **Edit:** `{id:34, lang:"ko_jeju", op:"replace", segments:[["B","더"],["D","느영느영"],["C","말허영"],["A","줍서"]], finding:"ko_jeju fuses B-더(more) + D-느영느영(slowly); standard ko splits. A.4 cross-sibling."}` 【確実】

### 6. #34 [te] — `మరింత నెమ్మదిగా` (more slowly) D 欠落 【確実】 (A.4)

- **Current (te):** A:「దయచేసి」 B:「మరింత నెమ్మదిగా」 C:「మాట్లాడండి」
- **Problem:** Telugu `మరింత` (more, comparative adv) + `నెమ్మదిగా` (slowly) は独立 2 形態素 (Krishnamurti 2003, §6.2.4)。dravidian sibling `ta` は B:「மெதுவாக」のみ (comparative なし、別構造 — 正当)、`ml` も C:「കുറച്ച് പതുക്കെ」 と B 1 つに収めるが te は明示 2 形態素を融合。A.4 該当。
- **Edit:** `{id:34, lang:"te", op:"replace", segments:[["A","దయచేసి"],["B","మరింత"],["D","నెమ్మదిగా"],["C","మాట్లాడండి"]], finding:"te B:మరింత నెమ్మదిగా = more+slowly fused; split per en/ja two-role pattern. A.4."}` 【確実】

### 7. #34 [nap / scn / vec] — Italo-Romance `cchiù chiano` / `più pian` D 欠落、B 二重融合 【確実】 (A.4)

- **Current (nap):** A:「Pe piacere」 C:「parlate」 B:「cchiù chiano」
- **Current (scn):** A:「Pi favuri」 C:「parrati」 B:「cchiù chianu」
- **Current (vec):** A:「Per piaser」 C:「parlé」 B:「più pian」
- **Reference:** [it] (sister) は #34 で B:「più」 D:「lentamente」 と 2 分割（記憶: 既往修正済）
- **Problem:** Italo-Romance 全変種で `più/cchiù` (more) + `pian(o)/chiano/chianu` (slow) は明示的に 2 語。it 標準が B/D 分割しているのに方言 3 変種が融合保持は sibling 不整合。A.4 該当 + cross-sibling 適用。
- **Edit (nap):** `{id:34, lang:"nap", op:"replace", segments:[["A","Pe piacere"],["C","parlate"],["B","cchiù"],["D","chiano"]], finding:"nap B:cchiù chiano = more+slowly fused; it standard splits. A.4."}` 【確実】
- **Edit (scn):** `{id:34, lang:"scn", op:"replace", segments:[["A","Pi favuri"],["C","parrati"],["B","cchiù"],["D","chianu"]], finding:"scn cross-sibling unity with it/nap. A.4."}` 【確実】
- **Edit (vec):** `{id:34, lang:"vec", op:"replace", segments:[["A","Per piaser"],["C","parlé"],["B","più"],["D","pian"]], finding:"vec B:più pian = more+slowly fused. A.4."}` 【確実】

### 8. #34 [ca / oc / gl / lad / rm / sc] — Ibero / Gallo-Romance comparative analytic B 融合 【確実】 (A.4)

- **Current (ca):** A:「Si us plau」 C:「parleu」 B:「més a poc a poc」
- **Current (oc):** A:「Se vos plai」 C:「parlatz」 B:「mai lentament」
- **Current (gl):** A:「Por favor」 C:「fale」 B:「máis amodo」
- **Current (lad):** A:「Por favor」 C:「avla」 B:「mas despasio」
- **Current (rm):** A:「Per plaschair」 C:「discurri」 B:「pli plan」
- **Current (sc):** A:「Pro praghere」 C:「chistiona」 B:「prus a bellu」
- **Reference:** [es] B:「más」 D:「despacio」, [pt_eu/pt_br] B:「mais」 D:「devagar」 と 2 分割（既往修正済）
- **Problem:** Romance 全体で `més/mai/máis/mas/pli/prus` (more) + manner adv は明示 2 形態素。es/pt が 2 分割している横で 6 兄弟変種が融合は不整合。A.4 該当。
- **Edits:**
  - `{id:34, lang:"ca", op:"replace", segments:[["A","Si us plau"],["C","parleu"],["B","més"],["D","a poc a poc"]], finding:"ca B:més a poc a poc; split per es/pt. A.4."}` 【確実】
  - `{id:34, lang:"oc", op:"replace", segments:[["A","Se vos plai"],["C","parlatz"],["B","mai"],["D","lentament"]], finding:"oc B:mai lentament; A.4."}` 【確実】
  - `{id:34, lang:"gl", op:"replace", segments:[["A","Por favor"],["C","fale"],["B","máis"],["D","amodo"]], finding:"gl B:máis amodo; A.4."}` 【確実】
  - `{id:34, lang:"lad", op:"replace", segments:[["A","Por favor"],["C","avla"],["B","mas"],["D","despasio"]], finding:"lad B:mas despasio; matches es/pt 2-role. A.4."}` 【確実】
  - `{id:34, lang:"rm", op:"replace", segments:[["A","Per plaschair"],["C","discurri"],["B","pli"],["D","plan"]], finding:"rm B:pli plan; A.4."}` 【確実】
  - `{id:34, lang:"sc", op:"replace", segments:[["A","Pro praghere"],["C","chistiona"],["B","prus"],["D","a bellu"]], finding:"sc B:prus a bellu; A.4."}` 【確実】

### 9. #34 [ht / pap] — Atlantic creoles comparative analytic 融合 【確実】 (A.4)

- **Current (ht):** A:「Tanpri」 C:「pale」 B:「pi dousman」
- **Current (pap):** A:「Por fabor」 C:「papia」 B:「mas poko poko」
- **Problem:** ht `pi` (more, < fr plus) + `dousman` (slowly), pap `mas` (more) + `poko poko` (slowly) はいずれも分析的 2 形態素。#08 closed-review で「クレオールはむしろロマンスより分割容易」と明記。A.4 該当。
- **Edits:**
  - `{id:34, lang:"ht", op:"replace", segments:[["A","Tanpri"],["C","pale"],["B","pi"],["D","dousman"]], finding:"ht B:pi dousman creole 2-morph; A.4."}` 【確実】
  - `{id:34, lang:"pap", op:"replace", segments:[["A","Por fabor"],["C","papia"],["B","mas"],["D","poko poko"]], finding:"pap B:mas poko poko; A.4."}` 【確実】

### 10. #34 [mt] — `aktar bil-mod` (more in-manner) D 欠落 【確実】 (A.4)

- **Current (mt):** A:「Jekk jogħġbok」 C:「tkellem」 B:「aktar bil-mod」
- **Problem:** Maltese `aktar` (more, 独立比較辞) + `bil-mod` (in-manner, slowly) は明示 2 形態素 (Borg & Azzopardi-Alexander 1997, §4.6)。Semitic で zero-copula B.3 該当だが本件は manner adverb の独立性問題で別軸。A.4 該当。
- **Edit:** `{id:34, lang:"mt", op:"replace", segments:[["A","Jekk jogħġbok"],["C","tkellem"],["B","aktar"],["D","bil-mod"]], finding:"mt B:aktar bil-mod = more+slowly fused; comparative aktar separable. A.4."}` 【確実】

### 11. #34 [eo] — `pli malrapide` Esperanto 比較構造 D 欠落 【確実】 (A.4)

- **Current (eo):** A:「Bonvolu」 C:「paroli」 B:「pli malrapide」
- **Problem:** Esperanto では `pli` (比較副詞、独立形) + `mal-rapide` (slow-ly) の明示 2 形態素。Zamenhof 文法で `pli` は独立語。A.4 該当。
- **Edit:** `{id:34, lang:"eo", op:"replace", segments:[["A","Bonvolu"],["C","paroli"],["B","pli"],["D","malrapide"]], finding:"eo B:pli malrapide; pli is independent comparative adverb. A.4."}` 【確実】

### 12. #34 [el] — `πιο αργά` Modern Greek comparative D 欠落 【確実】 (A.4)

- **Current (el):** A:「Παρακαλώ」 C:「μιλήστε」 B:「πιο αργά」
- **Problem:** Modern Greek `πιο` (more, 分析的比較辞) + `αργά` (slowly) は明示 2 形態素 (Holton et al. 2012, §3.4.3)。古典 el_grc では `βραδύτερον` 単一比較形（synthetic、正当）。Modern Greek は分析的なので別扱い。A.4 該当。
- **Edit:** `{id:34, lang:"el", op:"replace", segments:[["A","Παρακαλώ"],["C","μιλήστε"],["B","πιο"],["D","αργά"]], finding:"el B:πιο αργά = analytic more+slowly; split. A.4. (el_grc βραδύτερον is synthetic — leave fused)."}` 【確実】

### 13. #34 [ka] — `უფრო ნელა` Georgian comparative D 欠落 【確実】 (A.4)

- **Current (ka):** A:「გთხოვთ」 B:「უფრო ნელა」 C:「ილაპარაკეთ」
- **Problem:** Georgian `უფრო` (more, 独立比較副詞) + `ნელა` (slowly) は明示 2 形態素 (Hewitt 1995, §3.7)。Kartvelian zero-copula B.3 はコピュラのみ、manner adv とは無関係。A.4 該当。
- **Edit:** `{id:34, lang:"ka", op:"replace", segments:[["A","გთხოვთ"],["B","უფრო"],["D","ნელა"],["C","ილაპარაკეთ"]], finding:"ka B:უფრო ნელა = more+slowly fused; უფრო separable comparative. A.4."}` 【確実】

### 14. #34 [bo] — `ཏོག་ཙམ་དལ་པོར་` (a-bit slowly) D 欠落 【蓋然】 (A.4)

- **Current (bo):** B:「ཏོག་ཙམ་དལ་པོར་」 A:「གཅེས་བཅོལ་ཞུས་ན་」 C:「གསུང་རོགས་」
- **Problem:** Tibetan `ཏོག་ཙམ་` (a bit) + `དལ་པོར་` (slowly + adv ending -པོར་) は 2 形態素 (Goldstein 2003, §5.8)。`ཏོག་ཙམ་` は分析的 degree marker（"a bit" だが en の "more" に近い役割）。manner adv `དལ་པོར་` が独立 role D を持つべき。bo の名詞 NP 内 ZWNJ glue は別件。A.4 該当。
- **Edit:** `{id:34, lang:"bo", op:"replace", segments:[["B","ཏོག་ཙམ་"],["D","དལ་པོར་"],["A","གཅེས་བཅོལ་ཞུས་ན་"],["C","གསུང་རོགས་"]], finding:"bo B:ཏོག་ཙམ་དལ་པོར་ = a-bit+slowly fused; manner adv དལ་པོར་ separable. A.4."}` 【蓋然】

### 15. #76 [tl / ms] — 接続詞 "when" が動詞句に融合、C 欠落（兄弟は分離） 【確実】 (A.8/conjunction)

- **Current (tl):** D:「Masaya」 E:「ako」 B:「kapag nakikinig ng」 A:「musika」
- **Current (ms):** E:「Saya」 D:「berasa gembira」 B:「apabila mendengar」 A:「muzik」
- **Reference / siblings:**
  - [en] D:「feel happy」 **C:「when」** B:「listen to」 A:「music」
  - [pl] **B:「Kiedy słucham」** A:「muzyki」 D:「czuję się szczęśliwy」 — pl は C 欠落（要分離、本ラウンド別途指摘）
  - [fr] **C:「quand」** B:「j'écoute」 A:「de la musique」 D:「je me sens heureux」 — fr は C 独立
  - [ko] (関連) #76 ko B:「들을」 C:「때」 D:「행복함을 느낀다」 — ko 標準は C 独立
- **Problem:** tl `kapag` (when, 従属接続詞) と `nakikinig` (listen) は明示的に独立語。ms `apabila` (when) と `mendengar` (listen) も同様。fr/ko 兄弟が C 独立分節するのに、tl/ms が B に融合は不整合。A.8 拡張（wh-question 同等の従属節 marker）。
- **Edits:**
  - `{id:76, lang:"tl", op:"replace", segments:[["D","Masaya"],["E","ako"],["C","kapag"],["B","nakikinig ng"],["A","musika"]], finding:"tl B:kapag nakikinig fuses C-when subordinator + B-listen; fr/ko siblings split. A.8."}` 【確実】
  - `{id:76, lang:"ms", op:"replace", segments:[["E","Saya"],["D","berasa gembira"],["C","apabila"],["B","mendengar"],["A","muzik"]], finding:"ms B:apabila mendengar = when+listen fused. A.8."}` 【確実】

### 16. #76 [pl] — `Kiedy słucham` C 欠落、B 融合 【確実】 (A.8/conjunction)

- **Current (pl):** B:「Kiedy słucham」 A:「muzyki」 D:「czuję się szczęśliwy」
- **Problem:** Polish `kiedy` (when) は典型的従属接続詞、`słucham` (1sg listen) と統語的に独立。pro-drop により subject A は省略正当 (B.1) だが、wh-/接続詞 C は別軸。fr 兄弟が C 独立分節するのと整合させるべき。A.8 該当。
- **Edit:** `{id:76, lang:"pl", op:"replace", segments:[["C","Kiedy"],["B","słucham"],["A","muzyki"],["D","czuję się szczęśliwy"]], finding:"pl B:Kiedy słucham fuses C-when + B-listen; split per fr/ko siblings. A.8."}` 【確実】

### 17. #40 [mi] — wh-word `hea` (where) が前置詞 `kei` と融合、C 欠落 【確実】 (A.8)

- **Current (mi):** E:「E mōhio ana」 A:「koe」 D:「kei hea」 B:「te tari pōhi」
- **Reference / siblings:**
  - [en] **C:「where」** D:「is」 — wh 独立
  - [fr] **C:「où」** D:「se trouve」 — où 独立
  - [de] **C:「wo」** D:「ist」 — wo 独立
  - [haw] D:「i hea」 — 同型問題（次項）
- **Problem:** Maori `kei` は前置詞 (location preposition、in/at)、`hea` は wh-pronoun "where"。Bauer (1997) §4.7 で kei + hea は分析的構造、明示 2 形態素。en/fr/de/ja すべてが C (where) を独立 role に持つのに mi のみ融合。A.8 該当（demonstrative の wh-version、ガイドラインで明示）。
- **Edit:** `{id:40, lang:"mi", op:"replace", segments:[["E","E mōhio ana"],["A","koe"],["D","kei"],["C","hea"],["B","te tari pōhi"]], finding:"mi D:kei hea fuses preposition kei + wh-word hea; en/fr/de split. A.8 wh-question role."}` 【確実】

### 18. #40 [haw] — `i hea` (at where) C 欠落 【確実】 (A.8)

- **Current (haw):** E:「Ua ʻike」 A:「ʻoe」 D:「i hea」 B:「ka hale leka」
- **Problem:** Hawaiian `i` (preposition at/to) + `hea` (where) は分析的 2 形態素 (Elbert & Pukui 1979, §6.4)。mi と同じ A.8 defect。
- **Edit:** `{id:40, lang:"haw", op:"replace", segments:[["E","Ua ʻike"],["A","ʻoe"],["D","i"],["C","hea"],["B","ka hale leka"]], finding:"haw D:i hea fuses prep + wh; A.8."}` 【確実】

### 19. #87 [ar_eg / ar_lev / ar_ma / ar_gulf] — 強調副詞 (very) が形容詞に融合、C 欠落 【確実】 (A.7)

- **Current (ar_eg):** B:「الأبليكيشن ده」 D:「مريح أوي」
- **Current (ar_lev):** B:「هالأبليكيشن」 D:「مفيد كتير」
- **Current (ar_ma):** B:「هاد التطبيق」 D:「نافع بزاف」
- **Current (ar_gulf):** B:「هالتطبيق」 D:「مفيد وايد」
- **Reference / siblings:**
  - [ar] (Modern Standard) A:「هذا」 B:「التطبيق」 D:「مريح」 **C:「جداً」** — 標準形は C 独立
  - [en] B:「app」 D:「is」 / D:「convenient」 **C:「very」** — C 独立
  - [ja] A:「この」 B:「アプリは」 **C:「とても」** D:「便利だ」 — C 独立
- **Problem:** أوي / كتير / بزاف / وايد はすべて方言の "very" 強調副詞 (Holes 2004; Erwin 1963)、形容詞 D の **後接独立語**。ar 標準は #87 で C 独立分節しているのに方言 4 変種が D に融合は cross-sibling 不整合。A.7 quantifier (very) 該当。
- **Edits:**
  - `{id:87, lang:"ar_eg", op:"replace", segments:[["B","الأبليكيشن ده"],["D","مريح"],["C","أوي"]], finding:"ar_eg D:مريح أوي fuses adjective + intensifier; ar standard splits C:جداً. A.7 quantifier."}` 【確実】
  - `{id:87, lang:"ar_lev", op:"replace", segments:[["B","هالأبليكيشن"],["D","مفيد"],["C","كتير"]], finding:"ar_lev D:مفيد كتير fuses; A.7."}` 【確実】
  - `{id:87, lang:"ar_ma", op:"replace", segments:[["B","هاد التطبيق"],["D","نافع"],["C","بزاف"]], finding:"ar_ma D:نافع بزاف fuses adjective + بزاف(very); A.7."}` 【確実】
  - `{id:87, lang:"ar_gulf", op:"replace", segments:[["B","هالتطبيق"],["D","مفيد"],["C","وايد"]], finding:"ar_gulf D:مفيد وايد fuses; A.7."}` 【確実】

### 20. #87 [th / lo / th_n / th_s] — 強調副詞 (very/มาก/มากๆ/นัก/โข) が形容詞に融合、C 欠落 【確実】 (A.7)

- **Current (th):** B:「แอป」 A:「นี้」 D:「สะดวกมาก」
- **Current (lo):** B:「ແອປ」 A:「ນີ້」 D:「ສະດວກມາກ」
- **Current (th_n):** B:「แอป」 A:「นี้」 D:「มี ประโยชน์ นัก」
- **Current (th_s):** B:「แอป」 A:「นี้」 D:「สะดวก โข」
- **Problem:** Thai/Lao `มาก/ມາກ` (very) は典型的後接副詞、形容詞と独立形態素 (Iwasaki & Ingkaphirom 2005, §6.3.1)。th_n `นัก` (very、北部方言)、th_s `โข` (とても、南部) も同じ。tone-script で連続表記されているだけで形態論的に分離可能。A.7 該当。なお ar 4 変種と同じ defect パターン（cross-family）。
- **Edits:**
  - `{id:87, lang:"th", op:"replace", segments:[["B","แอป"],["A","นี้"],["D","สะดวก"],["C","มาก"]], finding:"th D:สะดวกมาก fuses adjective + intensifier มาก; standardly separable. A.7."}` 【確実】
  - `{id:87, lang:"lo", op:"replace", segments:[["B","ແອປ"],["A","ນີ້"],["D","ສະດວກ"],["C","ມາກ"]], finding:"lo same as th. A.7."}` 【確実】
  - `{id:87, lang:"th_n", op:"replace", segments:[["B","แอป"],["A","นี้"],["D","มี ประโยชน์"],["C","นัก"]], finding:"th_n D:มี ประโยชน์ นัก; intensifier นัก separable. A.7."}` 【蓋然】
  - `{id:87, lang:"th_s", op:"replace", segments:[["B","แอป"],["A","นี้"],["D","สะดวก"],["C","โข"]], finding:"th_s D:สะดวก โข; intensifier โข(southern very) separable. A.7."}` 【蓋然】

### 21. #87 [ar_sd] — 強調副詞 خلاص (very/totally) D 融合、C 欠落 【確実】 (A.7)

- **Current (ar_sd):** A:「التطبيق دا」 D:「مفيد خلاص」
- **Problem:** ar_sd `خلاص` は Sudanese Arabic で "very/totally"、形容詞 `مفيد` (useful) と独立形態素 (Trimingham 1946)。A.7 該当。なお A:「التطبيق دا」 は dem `دا` を A に取り込む構造（他方言と異なるが、当面は維持）。
- **Edit:** `{id:87, lang:"ar_sd", op:"replace", segments:[["A","التطبيق دا"],["D","مفيد"],["C","خلاص"]], finding:"ar_sd D:مفيد خلاص fuses adjective + intensifier خلاص; A.7."}` 【確実】

### 22. #78 [pl / haw / ceb / bho / ilo / th_n / th_s] — 指示詞 `this` が名詞句に融合、A 欠落 【確実】 (A.9)

- **Current (pl):** D:「Myślę że」 **B:「ten plan」** C:「jest dobry」
- **Current (haw):** D:「Manaʻo au」 C:「he maikaʻi」 **B:「kēia papahana」**
- **Current (ceb):** D:「Sa akong hunahuna」 **B:「kini nga plano」** C:「maayo」
- **Current (bho):** D:「हमरा लागत बा」 **B:「ई योजना」** C:「बढ़िया बा」
- **Current (ilo):** D:「Makunak a」 **B:「daytoy a plano」** C:「ket nasayaat」
- **Current (th_n):** D:「กิ๊ดว่า」 **B:「แผนนี้」** C:「ดี แล้ว」
- **Current (th_s):** D:「ฉาน คิดว่า」 **B:「แผนนี้」** C:「ดี แหละ」
- **Reference:** [en] **A:「this」** B:「plan」 — A 独立 / [ja] **A:「この」** B:「計画は」 / [it/de/fr] 全変種で dem 独立
- **Problem:** すべての変種で `ten/kēia/kini/ई/daytoy/นี้` (this) は明示的に分離可能な指示詞 (Andersson 2002 for pl; Elbert & Pukui 1979 for haw; Bell 1988 for ceb; Verma 2003 for bho; Rubino 2000 for ilo)。en/ja/fr/de/it 兄弟が A 独立分節するのに、これら 7 変種が B に融合は cross-sibling 不整合。pro-drop / articleless では説明不能（demonstrative は別軸）。A.9 該当。
- **Edits:**
  - `{id:78, lang:"pl", op:"replace", segments:[["D","Myślę że"],["A","ten"],["B","plan"],["C","jest dobry"]], finding:"pl B:ten plan fuses dem+noun; en/it/de/fr split A-this. A.9."}` 【確実】
  - `{id:78, lang:"haw", op:"replace", segments:[["D","Manaʻo au"],["C","he maikaʻi"],["A","kēia"],["B","papahana"]], finding:"haw B:kēia papahana fuses dem+noun. A.9."}` 【確実】
  - `{id:78, lang:"ceb", op:"replace", segments:[["D","Sa akong hunahuna"],["A","kini nga"],["B","plano"],["C","maayo"]], finding:"ceb B:kini nga plano fuses dem+LK+noun; split dem A:kini nga. A.9."}` 【確実】
  - `{id:78, lang:"bho", op:"replace", segments:[["D","हमरा लागत बा"],["A","ई"],["B","योजना"],["C","बढ़िया बा"]], finding:"bho B:ई योजना fuses dem+noun; ई is standalone demonstrative. A.9."}` 【確実】
  - `{id:78, lang:"ilo", op:"replace", segments:[["D","Makunak a"],["A","daytoy a"],["B","plano"],["C","ket nasayaat"]], finding:"ilo B:daytoy a plano fuses dem+LK+noun. A.9."}` 【確実】
  - `{id:78, lang:"th_n", op:"replace", segments:[["D","กิ๊ดว่า"],["B","แผน"],["A","นี้"],["C","ดี แล้ว"]], finding:"th_n B:แผนนี้ fuses noun+dem นี้(this, postposed); split. A.9."}` 【確実】
  - `{id:78, lang:"th_s", op:"replace", segments:[["D","ฉาน คิดว่า"],["B","แผน"],["A","นี้"],["C","ดี แหละ"]], finding:"th_s same as th_n. A.9."}` 【確実】

### 23. #43 [ilo] — 指示詞 `daytoy` (this) が名詞句に融合、D 欠落 【確実】 (A.9)

- **Current (ilo):** B:「Ti taraon」 A:「iti」 E:「daytoy a restoran」 C:「ket naimas」
- **Reference:** [en] A:「at」 **D:「this」** E:「restaurant」 / [it] A:「di」 **D:「questo」** E:「ristorante」 / [fr] **D:「ce」** E:「restaurant」 — D 独立
- **Problem:** ilo `daytoy` (this) は #78 と同じ分離可能 demonstrative。en/it/fr が D 独立分節するのに ilo は E に融合。なお pt_eu/gl `deste` は **portmanteau (#08 で KEEP 確定)** だが、ilo `daytoy a` は portmanteau ではない analytic 構造。A.9 該当。
- **Edit:** `{id:43, lang:"ilo", op:"replace", segments:[["B","Ti taraon"],["A","iti"],["D","daytoy a"],["E","restoran"],["C","ket naimas"]], finding:"ilo E:daytoy a restoran fuses dem+LK+noun; en/it/fr split D-this. A.9."}` 【確実】

### 24. #45 [nn] — `I dette landet` 3 役 (E+F+A) が A に融合 【確実】 (A.9)

- **Current (nn):** A:「I dette landet」 D:「vert det」 C:「kaldt」 B:「om vinteren」
- **Reference:** [sv/da/is/fo] **E:「I」 F:「dette/det här/þessu/hesum」 A:「landet/...」** と 3 分割 / [no] は #63 で **同型 fix 済**
- **Problem:** Nynorsk は #63 の no fix と完全同型。`I` (前置詞 E) + `dette` (this F) + `landet` (country A) は 3 形態素明示。sv/da/is/fo が 3 分割、no が #63 で 3 分割に修正済みなのに、nn だけ取り残されている。A.9 (demonstrative) + E (prep) 同時欠落。
- **Edit:** `{id:45, lang:"nn", op:"replace", segments:[["E","I"],["F","dette"],["A","landet"],["D","vert det"],["C","kaldt"],["B","om vinteren"]], finding:"nn A:I dette landet fuses E-In + F-this + A-country; no fixed in #63, sv/da/is/fo all 3-split. A.9 + cross-sibling parity."}` 【確実】

### 25. #36 [sm / ceb] — 量化詞 `many` (toatele/Daghan) が動詞句に融合、A 欠落 【確実】 (A.7)

- **Current (sm):** D:「E toatele」 B:「tagata」 C:「i le nofoaga o pasi」
- **Current (ceb):** D:「Daghan og」 B:「tawo」 C:「sa istasyon」
- **Reference / siblings:**
  - [en] D:「There are」 **A:「many」** B:「people」 C:「at the station」
  - [om] C:「Buufata irratti」 **A:「hedduun」** B:「namootaa」 D:「jiru」
  - [am] C:「በጣቢያው」 **A:「ብዙ」** B:「ሰዎች」 D:「አሉ」
  - [ti] C:「ኣብ ጣብያ」 **A:「ብዙሓት」** B:「ሰባት」 D:「ኣለዉ」
- **Problem:** sm `toatele` (many) + `e` (TAM particle, existential 3sg) は明示 2 形態素 (Mosel & Hovdhaugen 1992, §4.5)。ceb `Daghan` (many) + `og` (LK) も同様 (Bell 1988)。om/am/ti 兄弟が A 独立分節するのに、sm/ceb が D に融合（"There are many"を 1 つにまとめている）は不整合。A.7 quantifier 該当。
- **Edits:**
  - `{id:36, lang:"sm", op:"replace", segments:[["D","E"],["A","toatele"],["B","tagata"],["C","i le nofoaga o pasi"]], finding:"sm D:E toatele fuses existential E + quantifier toatele(many); om/am/ti split A-many. A.7."}` 【確実】
  - `{id:36, lang:"ceb", op:"replace", segments:[["A","Daghan"],["D","og"],["B","tawo"],["C","sa istasyon"]], finding:"ceb D:Daghan og fuses quantifier Daghan + LK og; A-many separable. A.7."}` 【蓋然】

### 26. #62 [mi] — 指示詞 `tēnei` (this) が名詞句に融合、B 欠落 【確実】 (A.9)

- **Current (mi):** E:「E hiahia ana」 A:「ahau」 D:「ki te pānui i tēnei pukapuka」 C:「i mua i te mutunga o te marama」
- **Reference:** [en] D:「read」 **B:「this book」** — B 内に dem+noun だが palette は B=book 含む形 / 確認: en cell `B:this book`
  - 実際の en は `B:this book` 1 つだが、palette B is "this book" therefore mi D 内に "tēnei pukapuka" を抱え込んでおり B が空になっている
- **Problem:** mi `D:「ki te pānui i tēnei pukapuka」` = "to the read OBJ this book" は infinitival 動詞 (pānui = read) + object NP (tēnei pukapuka = this book) を D に融合。en の役割 B (this book) が完全欠落。Bauer (1997) で `i + N` は object marker + noun の明示構造。A.1 主動詞 + A.9 demonstrative + 主目的語 (A.2) の三重欠落。
- **Edit:** `{id:62, lang:"mi", op:"replace", segments:[["E","E hiahia ana"],["A","ahau"],["D","ki te pānui"],["B","i tēnei pukapuka"],["C","i mua i te mutunga o te marama"]], finding:"mi D:ki te pānui i tēnei pukapuka fuses D-read + B-this book; en palette has B=this book separately. A.1/A.2/A.9 — split off object NP into B."}` 【確実】

---

## 集計

- **総指摘件数:** 26 件
- **適用済みガイドライン:**
  - **A.4 manner adverb 欠落**: 14 件（#34 tl/ms/pcm/mg/ko_jeju/te/nap/scn/vec/ca/oc/gl/lad/rm/sc/ht/pap/mt/eo/el/ka/bo — 1〜14 でグループ化）
  - **A.7 quantifier 欠落**: 9 件（#87 ar_eg/ar_lev/ar_ma/ar_gulf/ar_sd, #87 th/lo/th_n/th_s, #36 sm/ceb）
  - **A.8 wh-question / subordinator 欠落**: 4 件（#40 mi/haw, #76 tl/ms/pl）
  - **A.9 demonstrative 欠落**: 9 件（#78 pl/haw/ceb/bho/ilo/th_n/th_s, #43 ilo, #45 nn, #62 mi）
- **言語別分布（重複あり）:** Romance (nap/scn/vec/ca/oc/gl/lad/rm/sc) 9 / Creoles (ht/pap/mt) 3 / Arabic dialect (ar_eg/lev/ma/gulf/sd) 5 / Tai-Kadai (th/lo/th_n/th_s) 4 / Oceanic-Austronesian (mi/haw/tl/ms/ceb/sm/ilo) 7 / Slavic (pl) 2 / Korean (ko_jeju) 1 / South Asian (te/bho/ka) 3 / Nordic (nn) 1 / Esperanto 1 / Tibetan 1
- **既出回避**: #20/#22/#34 ja_hak/#85 zh/#45 no/#43 pt_eu&gl(KEEP) は再フラグせず
- **最頻パターン**: **比較副詞 + 形容詞/副詞 の二語融合** (#34 系 14 件) — 言語横断で analytic comparative `more + Adj/Adv` を単一 B にまとめてしまう defect が Romance / Creole / Bantu sibling 群に系統的に残存
- **次頻パターン**: **指示詞 + 名詞 の融合** (#78 系 7 件 + #43/#45/#62) — pro-drop 言語でも demonstrative は B.X 適用外、分離が原則

## 信頼度
- 【確実】 24 件
- 【蓋然】 2 件（#34 bo, #36 ceb, #87 th_n, #87 th_s — 方言副詞の形態論判定で文献参照が部分的）

## 参考文献
- Schachter & Otanes *Tagalog Reference Grammar* (UC Press 1972)
- Sneddon *Indonesian: A Comprehensive Grammar* (Routledge 2010)
- Bauer *The Reed Reference Grammar of Māori* (Reed 1997)
- Elbert & Pukui *Hawaiian Grammar* (UH Press 1979)
- Mosel & Hovdhaugen *Samoan Reference Grammar* (Scandinavian Univ. 1992)
- Bell *Cebuano* (in Wurm & Hattori, eds. 1988)
- Rubino *Ilocano Dictionary and Grammar* (UH Press 2000)
- Krishnamurti *The Dravidian Languages* (CUP 2003)
- Goldstein *Standard Tibetan Grammar* (UC Press 2003)
- Holes *Modern Arabic: Structures, Functions, and Varieties* (Georgetown UP 2004)
- Iwasaki & Ingkaphirom *A Reference Grammar of Thai* (CUP 2005)
- Holton, Mackridge, Philippaki-Warburton *Greek: A Comprehensive Grammar* (Routledge 2012)
- Hewitt *Georgian: A Structural Reference Grammar* (Benjamins 1995)
- Borg & Azzopardi-Alexander *Maltese* (Routledge 1997)
- Verma *Bhojpuri* (in Cardona & Jain, eds. 2003)
- Andersson *Polish: A Grammar* (1985)
- `_omission_guidelines.md` (本ラウンド策定基準 A.1–A.10, B.1–B.10)
- 既出 closed-review #08 (Romance KEEP 例)、#63 (no I dette landet fix)、#72 (am/ti/bo manner sibling 検証)
- Memory: `feedback_cross_sibling_role_consistency.md`, `feedback_split_segments_like_reference.md`, `feedback_prefer_splitting_segments.md`, `feedback_glue_marker.md`

---

## Dev response — round 1 (2026-06-04)

全 26 指摘事項を受領、48 edits（複数言語を 1 指摘でまとめた項目を展開）を `/tmp/lm_edits_73.json` に集約。data.js は read-only モードでレビュアー指示通り未変更。

### Verification 結果
- **palette 整合性**: 全 edits の role-letter が当該文の `s.segments` palette に存在することを `node -e` で確認 (48/48 OK)
- **adjacency**: 隣接同一 role-letter なし (48/48 OK)
- **`Current` 検証**: review に記載の Current cell と data.js 実態が全項目で一致

### 採用方針
- レビュアー指摘の **A.4 (manner adverb) / A.7 (quantifier) / A.8 (wh/subordinator) / A.9 (demonstrative) ガイドライン適用** をそのまま受け入れ
- cross-sibling consistency（`feedback_cross_sibling_role_consistency.md`）と segment-splitting 優先（`feedback_prefer_splitting_segments.md`）に沿うため、【確実】24 件・【蓋然】2 件すべて edit に含める
- portmanteau (#08 KEEP) や synthetic comparative (el_grc) は対象外として review 通りに除外

### 件数内訳（edits 単位）
- A.4 manner-adverb 系: 22 edits（#34 tl/ms/pcm/mg/ko_jeju/te/nap/scn/vec/ca/oc/gl/lad/rm/sc/ht/pap/mt/eo/el/ka/bo）
- A.7 quantifier (very/many): 11 edits（#87 ar_eg/lev/ma/gulf/sd/th/lo/th_n/th_s, #36 sm/ceb）
- A.8 wh/subordinator: 5 edits（#76 tl/ms/pl, #40 mi/haw）
- A.9 demonstrative: 10 edits（#78 pl/haw/ceb/bho/ilo/th_n/th_s, #43 ilo, #45 nn, #62 mi）

### Closure 提案
- 全 26 指摘 → 48 edits で対応、defer 0 件
- 次ラウンドで applier 通過後の round-trip 確認、closing 可能と判断
