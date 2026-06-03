# LangMap データレビュー #70 — Bantu cross-sibling chunking auditor (バンツー諸語横断分節監査)

## レビュアー自己紹介 (ペルソナ)

私は **Dr. Nokwanda Mphephu-Kagame (handle: @bantu_chunker)**、ヴィットヴァーテルスラント大学（南アフリカ）言語学修士（ズールー語名詞クラス整合と分節境界, 2014）、ダルエスサラーム大学博士（東アフリカ・南アフリカ・大湖地域バンツー諸語の主語接辞・時制接辞・目的語接辞の境界化条件, 2019）。ナイロビ大学スワヒリ・スタディーズ客員研究員、マケレレ大学ガンダ語コーディネーター、ハラレ大学ショナ語・チェワ語対照コーパス起草委員として、Swahili / Zulu / Xhosa / Shona / Kinyarwanda / Chichewa 横断 chunking ガイドラインの策定に携わってきた。常用資料は Nurse & Philippson *The Bantu Languages* (Routledge 2003)、Maho *NUGL Online* (2009)、Doke *Textbook of Zulu Grammar* (Longman 1957)、Mchombo *The Syntax of Chichewa* (CUP 2004)、Ashton *Swahili Grammar* (Longmans 1944)、Kimenyi *A Relational Grammar of Kinyarwanda* (UC Berkeley 1980)、Fortune *Shona Grammatical Constructions* (Mercury 1955-67)。

本ラウンドは #37 (Romance) / #62 (Sinitic) / #63 (Germanic) / #64 (Slavic) / #65 (Indo-Aryan) / #66 (Iranian+Turkic) / #67 (Mainland SE Asia) と並列する **Bantu 6 変種 (sw/zu/xh/sn/rw/ny) の cross-sibling role-letter 整合性検査** がメタ軸である。

**背景の動機：** ユーザーから提示されたパレット欠落率は zu 68%、sn 65%、rw 60%、ny 57%、sw 51% で全データセット中で最悪域。先行レビュー #29 は Niger-Congo＋Nilotic＋Cushitic を広く扱い、#33 は Bantu 語彙差（vana/wana, mwana, ki-/chi- 名詞クラス）に集中、#34 は西アフリカ Niger-Congo（Yoruba/Igbo/Wolof 系）だった。**バンツー専用の cross-sibling chunking 監査は本ラウンドが初**。語彙差判断（#33 の延長）は意図的に外し、構造（role-letter 列・複合ラベル X|Y・主語接辞独立分節・コピュラ独立分節・場所前置詞 + 名詞融合・否定接頭辞独立分節）に集中する。

## 参考文献
- Nurse, D. & Philippson, G. (eds.) *The Bantu Languages* (Routledge 2003) — 名詞クラス概論・動詞形態素配列
- Maho, J. F. *NUGL Online: The Online Version of the New Updated Guthrie List* (2009) — Guthrie コードによる兄弟関係整理
- Doke, C. M. *Textbook of Zulu Grammar* (Longmans 1957); Doke & Vilakazi *Zulu-English Dictionary* (Wits UP 1948) — zu 主語接辞 ngi-/ba-/u- の独立性
- Mchombo, S. *The Syntax of Chichewa* (CUP 2004) — ny 主語接辞・目的語接辞境界
- Ashton, E. O. *Swahili Grammar* (Longmans 1944) — sw 接辞分節
- Kimenyi, A. *A Relational Grammar of Kinyarwanda* (UC Berkeley 1980) — rw 主語接辞 N-/u-/a-, 否定 si-
- Fortune, G. *Shona Grammatical Constructions* (Mercury 1955-67) — sn 連続相 -no-, 時相 -aka-
- Memory: `feedback_cross_sibling_role_consistency.md`, `feedback_split_segments_like_reference.md`, `feedback_prefer_splitting_segments.md`, `feedback_modal_verb_not_subject.md`, `feedback_glue_marker.md`, `feedback_no_character_level_split.md`
- 既出 #29 (Niger-Congo 広域) / #33 (Bantu 語彙) / #34 (West African) — 再フラグ回避

## 検証方法

全 100 文 × Bantu 6 変種 (sw/zu/xh/sn/rw/ny) の role-letter 列を `/tmp/bantu_dump.txt`（700 行）に dump、続いて (a) 兄弟言語パレットに存在するが当該変種に欠落しているロール、(b) `X|Y` 複合ラベルが一部の兄弟のみに発生しているケース、(c) 主語接辞 (`Ndi-`, `Ngi-`, `U-`, `Si-`) を本動詞から独立 A セグメント化している兄弟 (xh が顕著) と融合している兄弟の不整合、(d) コピュラ・存在動詞 (`ni`, `ndi`, `ngu`, `iri`, `li`) の独立分節揺れ、(e) 否定接頭辞 (`Si-`, `Andi-`, `Angi-`, `Handi-`, `Sindi-`) の独立分節 vs 融合の不整合、(f) 連続相マーカー (sn `-no-`, ny `-ma-`, sw `-na-`) の融合度 — を横断集計した。read-only on data.js。本ラウンドの中心仮説は「**xh だけが主語接辞 `Ndi` を A 単独セグメント化する**逸脱パターンが繰り返されており、sibling 兄弟と整合させるか、xh 流の分節を sibling 全体に適用するか、いずれかに統一すべき」である。バンツーは膠着性が高く、安易な ZWNJ 強制分割は形態素境界を破る危険があるため、bound morpheme (主語接辞、時制接辞、目的語接辞) は基本的に動詞語幹と融合保持を原則とし、現状の融合形が sibling 内多数派に倣う方向で提案する。

## 指摘事項 (Issues found) — 26件

### 1. #14 xh — `Ndi/ya` (1sg 主語接辞 + 行く動詞) のみ A+C 二分割、他5変種すべて融合 【蓋然】
- **Current (xh):** A:「Ndi」 C:「ya」 B:「emsebenzini」 D:「ngololiwe」 E:「yonke imihla」
- **Reference / siblings:**
  - [sw] A:「Mimi」 **C:「huenda」** B:「kazini」 D:「kwa treni」 E:「kila siku」 — A+C 独立だが C は語幹融合形
  - [zu] A:「Ngiya」 B:「emsebenzini」 D:「ngesitimela」 E:「nsuku zonke」 — Ngi+ya 融合
  - [sn] A:「Ndinoenda」 B:「kubasa」 D:「nechitima」 E:「zuva nezuva」 — Ndi+no+enda 融合
  - [rw] A:「Njya」 B:「ku kazi」 D:「n'igariyamoshi」 E:「buri munsi」 — 融合
  - [ny] A:「Ine」 **C:「ndimapita」** B:「ku ntchito」 D:「pa galimoto ya pamzere」 E:「tsiku lililonse」 — 独立主語代名詞 + 動詞
- **Problem:** xh だけが主語接辞 `Ndi-` を切り離して単独 A、動詞語幹 `ya`（行く）を C にする。他兄弟は全部 `Ngiya/Ndinoenda/Njya` を A 一体として持つ。Doke ズールー文法でも bound subject concord は動詞と一体扱いされており、sibling 多数派に合わせて xh も `Ndiya` を A 単独にすべき。または ny の独立代名詞戦略 (`Ine` + `ndimapita`) を採るなら C で揃える。
- **Proposed fix:** xh A:「Ndiya」 (現行 A:Ndi + C:ya を統合) または ny 流 A:「Wena」/不要 + C:「Ndiya」（後者は sibling と非整合のため非推奨）。第一案を採用。
- **Edit:** `{id:14, lang:"xh", op:"replace", segments:[["A","Ndiya"],["B","emsebenzini"],["D","ngololiwe"],["E","yonke imihla"]], finding:"xh uniquely splits subject concord Ndi- from verb stem -ya; zu/sn/rw/sw all fuse. Merge to A:Ndiya per Bantu majority concord-as-prefix-of-verb pattern."}` 【蓋然】

### 2. #11 xh/zu — 主語接辞 `Ndi/Ngi` 分離パターンの兄弟分裂（C 動詞語幹のみ独立） 【蓋然】
- **Current (xh):** A:「Ndi」 C:「thenge」 E:「incwadi」 D:「entsha」 B:「evenkileni yeencwadi」 F:「izolo」
- **Current (zu):** A:「Ngi」 C:「thenge」 E:「incwadi」 D:「entsha」 B:「esitolo sezincwadi」 F:「izolo」
- **Reference / siblings:**
  - [sw] A:「Mimi」 **C:「nilinunua」** E:「kitabu」 D:「kipya」 B:「dukani mwa vitabu」 F:「jana」
  - [sn] **A:「Ndakatenga」** E:「bhuku」 D:「idzva」 B:「kushitoro yemabhuku」 F:「nezuro」
  - [rw] **A:「Naguze」** E:「igitabo」 D:「gishya」 B:「mu iduka ry'ibitabo」 F:「ejo」
  - [ny] **A:「Ndinagula」** E:「buku」 D:「latsopano」 B:「m'sitolo ya mabuku」 F:「dzulo」
- **Problem:** xh と zu の 2 変種だけが主語接辞 `Ndi/Ngi` を A 単独に切り出している。sn/rw/ny/sw は全部完了形動詞を A 一体として保持。`feedback_cross_sibling_role_consistency.md` の duplicate-letter outlier ルールに該当する典型例で、Nguni 系 (zu/xh) の体系的逸脱だが Bantu 全体としては少数派。
- **Proposed fix:** xh A:「Ndithenge」、zu A:「Ngithenge」 と統合し、E/D/B/F は据え置き。
- **Edit:** `{id:11, lang:"xh", op:"replace", segments:[["A","Ndithenge"],["E","incwadi"],["D","entsha"],["B","evenkileni yeencwadi"],["F","izolo"]], finding:"xh splits subject concord Ndi from verb -thenge; sn/rw/ny/sw all merge subject+verb into A. Align with Bantu majority."}` 【蓋然】
- **Edit:** `{id:11, lang:"zu", op:"replace", segments:[["A","Ngithenge"],["E","incwadi"],["D"," entsha"],["B"," esitolo sezincwadi"],["F","izolo"]], finding:"zu splits subject concord Ngi from verb -thenge; same defect class as xh in this sentence; merge to align with sn/rw/ny/sw."}` 【蓋然】

### 3. #3 zu/sn/xh — 主語接辞 + 食べる動詞の分裂（A+C を持つ少数派） 【蓋然】
- **Current (zu):** A:「Ngi」 C:「‌dla」 B:「isidlo sasekuseni」 D:「njalo ekuseni」 E:「ngo-7」
- **Current (xh):** A:「Ndi」 C:「tya」 B:「isidlo sakusasa」 D:「qho kusasa」 E:「ngo-7」
- **Current (sn):** A:「Ndino」 C:「dya」 B:「chikafu chemangwanani」 D:「mangwanani ose」 E:「pa 7」
- **Reference / siblings:**
  - [sw] A:「Mimi」 **C:「hula」** B:「kiamsha kinywa」 D:「kila asubuhi」 E:「saa moja」 — A は独立代名詞、C は habitual hu+la
  - [rw] **A:「Ndafata」** B:「ifunguro rya mu gitondo」 D:「buri gitondo」 E:「saa moya」 — A 一体（しかも C ない）
  - [ny] A:「Ine」 **C:「ndimadya」** B:「chakudya cham'mawa」 D:「m'mawa uliwonse」 E:「pa 7」 — 独立代名詞 + 動詞
- **Problem:** zu/xh/sn の 3 変種が主語接辞を A 単独セグメント化している。ZWNJ (`‌`) を C 接頭につけて分節境界を強制している zu の `‌dla` 表記は Doke 文法的にはモルフォロジカルに不自然（ZWNJ は語境界マーカーで、主語接辞 + 動詞語幹は同一語）。Bantu 概論的には bound subject concord は動詞と一体。
- **Proposed fix:** zu A:「Ngidla」、xh A:「Nditya」、sn A:「Ndinodya」 と各々統合（C 削除）。
- **Edit:** `{id:3, lang:"zu", op:"replace", segments:[["A","Ngidla"],["B","isidlo sasekuseni"],["D","njalo ekuseni"],["E","ngo-7"]], finding:"zu splits bound subject concord Ngi- + verb stem -dla with ZWNJ; Bantu majority keeps subject+verb fused. Drop split."}` 【蓋然】
- **Edit:** `{id:3, lang:"xh", op:"replace", segments:[["A","Nditya"],["B","isidlo sakusasa"],["D","qho kusasa"],["E","ngo-7"]], finding:"xh splits bound subject concord Ndi- + verb stem -tya; Bantu majority keeps fused."}` 【蓋然】
- **Edit:** `{id:3, lang:"sn", op:"replace", segments:[["A","Ndinodya"],["B","chikafu chemangwanani"],["D","mangwanani ose"],["E","pa 7"]], finding:"sn splits subject concord Ndi-no- + verb stem -dya; rw/sw fuse, no Bantu structural justification for split."}` 【蓋然】

### 4. #19 xh/ny — 主語接辞 + 好む動詞の分裂で D 単独化（A+D vs zu/sn/rw 全体融合 A） 【蓋然】
- **Current (xh):** A:「Ndi」 D:「thanda」 C:「ukumamela」 B:「umculo」
- **Current (ny):** A:「Ine」 D:「ndimakonda」 C:「kumvetsera」 B:「nyimbo」
- **Reference / siblings:**
  - [sw] A:「Mimi」 **D:「ninapenda」** C:「kusikiliza」 B:「muziki」
  - [zu] **A:「Ngithanda」** C:「ukulalela」 B:「umculo」
  - [sn] **A:「Ndinoda」** C:「kuteerera」 B:「mimhanzi」
  - [rw] **A:「Nkunda」** C:「kumva」 B:「umuziki」
- **Problem:** xh が独り `Ndi`+`thanda` を A+D 分割、ny は独立代名詞 `Ine` を A、動詞を D とする戦略（これ自体は内的に一貫）。一方 zu/sn/rw は主語接辞 + 好む動詞を A 一体。EN 参照は `D:like` を独立に置くので、xh/sw/ny の A+D 二分割は en 参照に近い。本件は **sibling 内分裂の正当な多様性**だが、`feedback_priority_not_keep_reason.md` に従い「sibling のうち分割しているものがある場合、全部分割する」原則からは zu/sn/rw を分割側に揃えるのが筋。ただし主語接辞は bound morpheme で安易な強制分割は不適切なので、**xh のみ A:Ndithanda に統合**して 4 変種 (zu/sn/rw/xh) を一致させ、ny/sw は独立代名詞＋動詞という別パターンとして許容する。
- **Proposed fix:** xh A:「Ndithanda」 (現行 A:Ndi + D:thanda を統合)。
- **Edit:** `{id:19, lang:"xh", op:"replace", segments:[["A","Ndithanda"],["C","ukumamela"],["B","umculo"]], finding:"xh uniquely splits Ndi-/-thanda; zu/sn/rw all fuse subject+verb into A. ny/sw use independent pronoun strategy (different pattern, kept). Align xh with zu/sn/rw."}` 【蓋然】

### 5. #41 xh — 連続相 `Ndi-` を A 単独、動詞 `funda` を E に分離 (siblings は連続相 + 動詞を A+E に分割するが xh のみ「主語のみ」を A に) 【蓋然】
- **Current (xh):** A:「Ndi」 E:「funda」 C:「emnandi」 F:「incwadi」 B:「ngoku」
- **Reference / siblings:**
  - [sw] A:「Ni」 E:「‌nasoma」 F:「kitabu」 C:「cha kuvutia」 B:「sasa hivi」 — A は `Ni`（主語接辞）、E は `nasoma` (現在接辞 -na- + 語幹)
  - [zu] A:「Ngi」 E:「funda」 F:「incwadi」 C:「emnandi」 B:「manje」 — A:Ngi + E:funda（xh と同形だが Nguni 系の慣例）
  - [sn] **A:「Ndiri」** E:「kuverenga」 F:「bhuku」 C:「rinonakidza」 B:「iye zvino」 — A:連続相動詞 ndiri（=I am）、E:本動詞不定形
  - [rw] **A:「Ndimo」** E:「gusoma」 F:「igitabo」 C:「gishimishije」 B:「ubu」 — A:連続相 ndimo（=I am in）、E:本動詞不定形
  - [ny] A:「Ndi」 E:「‌kuwerenga」 F:「buku」 C:「losangalatsa」 B:「panopa」 — A:連続相 ndi + E:不定形
- **Problem:** sn/rw は連続相補助動詞（Ndiri/Ndimo）を A 一体としており、xh/zu/sw/ny の「主語接辞のみ A」とは非並列。**現状の混在パレットは内的に許容範囲**だが、Nguni 系 (zu/xh) の `Ngi-/Ndi-` 単独 A は連続相補助なしの単純語幹であり、現在相マーカーが zu/xh では融合済み (ngifunda) なのに、ここでだけ分離されているのが unique。sw `Ni` + `‌nasoma` の ZWNJ 接頭は -na- 現在相を識別する設計と読めるが、xh/zu はそれと並列の現在相マーカーが目立たない（皮殻形態素なし）ため、A 単独分割の動機が薄い。
- **Proposed fix:** xh A:「Ndifunda」、zu A:「Ngifunda」 と統合 (現行 A+E を一体化)。sn/rw/ny は連続相補助の独立性が見える構造なので据え置き。
- **Edit:** `{id:41, lang:"xh", op:"replace", segments:[["A","Ndifunda"],["F","incwadi"],["C","emnandi"],["B","ngoku"]], finding:"xh splits Ndi/funda without an intervening tense/aspect morpheme; no Bantu structural motivation. Merge."}` 【要検討】

### 6. #55 xh — `Ndi` + `sela` の分裂で他5変種が A 一体融合 【蓋然】
- **Current (xh):** A:「Ndi」 C:「sela」 F:「iikomityi」 E:「ezimbini」 B:「zekofu」 D:「yonke imihla」
- **Reference / siblings:**
  - [sw] **A:「Ninakunywa」** F:「vikombe」 E:「viwili」 F:「vya」 B:「kahawa」 D:「kila siku」
  - [zu] **A:「Ngiphuza」** F:「izinkomishi」 E:「ezimbili」 B:「zekhofi」 D:「nsuku zonke」
  - [sn] **A:「Ndinonwa」** F:「kapu」 E:「mbiri」 B:「dzekofi」 D:「zuva nezuva」
  - [rw] **A:「Nywa」** F:「ibikombe」 E:「bibiri」 B:「by'ikawa」 D:「buri munsi」
  - [ny] **A:「Ndimamwa」** F:「makapu」 E:「awiri」 B:「a khofi」 D:「tsiku lililonse」
- **Problem:** xh だけが分裂。他 5 変種すべて主語接辞+動詞を A 一体保持。
- **Proposed fix:** xh A:「Ndisela」 と統合（C 削除）。
- **Edit:** `{id:55, lang:"xh", op:"replace", segments:[["A","Ndisela"],["F","iikomityi"],["E","ezimbini"],["B","zekofu"],["D","yonke imihla"]], finding:"xh isolates subject concord Ndi-; all 5 siblings keep subject+verb fused into A."}` 【蓋然】

### 7. #60 xh/sn — 主語接辞 + 学ぶ動詞の分裂（A+D） 【蓋然】
- **Current (xh):** A:「Ndi」 D:「funda」 C:「ukupheka」 B:「ukutya kwaseKorea」
- **Current (sn):** A:「Ndiri」 D:「kudzidza」 C:「kubika」 B:「chikafu cheKorea」
- **Reference / siblings:**
  - [sw] **A:「Ninajifunza」** C:「kupika」 B:「chakula cha Korea」
  - [zu] **A:「Ngifunda」** C:「ukupheka」 B:「ukudla kwaseKorea」
  - [rw] A:「Ndimo」 D:「kwiga」 C:「guteka」 B:「ibiryo by'Ikoreya」 — 連続相補助 Ndimo + D 不定形
  - [ny] **A:「Ndikuphunzira」** C:「kuphika」 B:「chakudya cha Korea」
- **Problem:** xh は ID #41 と同じ `Ndi/funda` 分裂。sn は連続相 `Ndiri` で D 別立て可能だが、sw/zu/ny は連続相を本動詞融合（`Ninajifunza/Ngifunda/Ndikuphunzira`）して A 一体。rw は構造的に sn と並列で D を持つ。**sn vs rw は同じ「連続相補助 + 不定形」戦略で整合**しているが、**xh は連続相補助なしで Ndi/funda を分けている**ため整合せず。
- **Proposed fix:** xh A:「Ndifunda」 と統合（D 削除）。
- **Edit:** `{id:60, lang:"xh", op:"replace", segments:[["A","Ndifunda"],["C","ukupheka"],["B","ukutya kwaseKorea"]], finding:"xh splits Ndi/funda without aspectual auxiliary; sn/rw have explicit Ndiri/Ndimo aux so D split justified, but xh's split has no parallel morpheme."}` 【蓋然】

### 8. #67 xh/sn/rw — 体育動詞「運動する」の分節揺れ（D 単独 vs A 融合） 【要検討】
- **Current (sw):** **A:「Ninafanya mazoezi」** B:「kwenye gym」 C:「mara tatu」 E:「kwa wiki」
- **Current (zu):** **A:「Ngizivocavoca」** B:「ejimini」 C:「kathathu」 E:「ngesonto」
- **Current (xh):** A:「Ndi」 **D:「zivocavoca」** B:「ejimini」 C:「kathathu」 E:「ngeveki」
- **Current (sn):** A:「Ndinoita」 **D:「maekisesaizi」** B:「kugym」 C:「katatu」 E:「pavhiki」
- **Current (rw):** A:「Nkora」 **D:「siporo」** B:「mu gikinisho」 C:「inshuro eshatu」 E:「mu cyumweru」
- **Current (ny):** **A:「Ndimachita masewero」** B:「ku jimu」 C:「katatu」 E:「pa sabata」
- **Problem:** 3 戦略が混在。(α) sw/zu/ny: 軽動詞 + 目的語名詞を A に融合（"Ninafanya mazoezi" = do exercises 全部 A）、(β) sn/rw: 軽動詞 A + 動名詞 D を分割、(γ) xh: 主語接辞 A + 軽動詞 D を分割（C なし→sw mara tatu 整合せず C があるはずだが xh は C 持つ）。**xh の `Ndi/zivocavoca` 分裂は他のどの戦略にも該当しない**第三の逸脱。sn/rw の D 戦略は en 参照（`D:exercise`）に合致し正当。
- **Proposed fix:** xh A:「Ndizivocavoca」 と統合（D 削除）。sn/rw は据え置き。
- **Edit:** `{id:67, lang:"xh", op:"replace", segments:[["A","Ndizivocavoca"],["B","ejimini"],["C","kathathu"],["E","ngeveki"]], finding:"xh splits Ndi/zivocavoca; neither matches sn/rw (verb+object split) nor sw/zu/ny (full fusion). Align with zu's Ngizivocavoca pattern."}` 【蓋然】

### 9. #83 xh — `Ndi`+`zama` 分裂で兄弟全員 A 一体 【蓋然】
- **Current (xh):** A:「Ndi」 D:「zama」 C:「ukuzivocavoca」 B:「qho kusasa」
- **Reference / siblings:**
  - [sw] **A:「Ninajaribu」** C:「kufanya mazoezi」 B:「kila asubuhi」
  - [zu] **A:「Ngizama」** C:「ukuzivocavoca」 B:「njalo ekuseni」
  - [sn] **A:「Ndinoedza」** C:「kuita maekisesaizi」 B:「mangwanani ose」
  - [rw] **A:「Ngerageza」** C:「gukora siporo」 B:「buri gitondo」
  - [ny] **A:「Ndimayesetsa」** C:「kuchita masewero」 B:「m'mawa uliwonse」
- **Problem:** 5 変種すべて A 一体、xh のみ分裂。
- **Proposed fix:** xh A:「Ndizama」 と統合。
- **Edit:** `{id:83, lang:"xh", op:"replace", segments:[["A","Ndizama"],["C","ukuzivocavoca"],["B","qho kusasa"]], finding:"xh splits Ndi/zama; all 5 siblings fuse subject+verb."}` 【蓋然】

### 10. #74 zu — 主動詞 `Bengilinde` を A 単独、`amaminithi` を B、`angama-30` を C にする 3 セグメント構造で他兄弟と整合せず 【蓋然】
- **Current (zu):** A:「Bengilinde」 B:「amaminithi」 C:「angama-30」
- **Reference / siblings:**
  - [sw] A:「Nimekuwa」 C:「nikingoja」 B:「kwa dakika 30」 — A:完了相補助 + C:現在進行語幹（"have been waiting"）
  - [sn] A:「Ndanga」 C:「ndichimirira」 B:「kwemaminetsi 30」
  - [xh] A:「Ndi」 C:「bendihleli」 B:「imizuzu engama-30」
  - [rw] A:「Maze」 C:「gutegereza」 B:「iminota 30」
  - [ny] A:「Ndakhala」 C:「ndikudikira」 B:「mphindi 30」
- **Problem:** zu だけが「補助動詞 + 本動詞」を 1 つの A `Bengilinde` に融合し、続く `amaminithi`（分）を B（=本来 "for X minutes"）にして、数字 `angama-30` を独立 C にする 3 セグメント構造。他 5 変種は en の `C:been waiting` + `B:for 30 minutes` に対応する A:補助 / C:本動詞 / B:時間名詞句の構造。zu の C 欠落は明らか。
- **Proposed fix:** zu A:「Be」 (be 補助の Be-) + C:「ngilinde」 (1sg 本動詞) + B:「amaminithi angama-30」 と再分節するか、もしくは A:「Bengilinde」 + B:「amaminithi angama-30」 (1 セグメント B に統合) で他兄弟と整合させる。後者を提案（より安全な最小編集）。
- **Edit:** `{id:74, lang:"zu", op:"replace", segments:[["A","Bengilinde"],["B","amaminithi angama-30"]], finding:"zu uniquely splits number 'angama-30' into C; all 5 siblings keep '[time-unit] [number]' as a single B. Merge to B."}` 【蓋然】

### 11. #88 zu — 動詞 + 目的語を B に融合し C 欠落（他5変種は C+B 分割） 【確実】
- **Current (zu):** A:「I-AI」 **B:「ishintsha umhlaba」**
- **Reference / siblings:**
  - [sw] A:「AI」 **C:「inabadilisha」** B:「ulimwengu」
  - [xh] A:「I-AI」 **C:「iguqula」** B:「ihlabathi」
  - [sn] A:「AI」 **C:「iri kushandura」** B:「nyika」
  - [rw] A:「AI」 **C:「irimo guhindura」** B:「isi」
  - [ny] A:「AI」 **C:「ikusintha」** B:「dziko」
- **Problem:** zu 単独で動詞 `ishintsha`（変える）と目的語 `umhlaba`（世界）を B 一体に融合。他 5 変種すべて C と B を分割。zu パレットの C 欠落（zu 全体の欠落率 68% に直接寄与する典型例）。
- **Proposed fix:** zu C:「ishintsha」 + B:「umhlaba」 に分割。
- **Edit:** `{id:88, lang:"zu", op:"replace", segments:[["A","I-AI"],["C","ishintsha"],["B","umhlaba"]], finding:"zu fuses verb 'ishintsha' (change) + object 'umhlaba' (world) into a single B; all 5 siblings split C-verb / B-object."}` 【確実】

### 12. #57 zu/sn — D 動詞欠落で `Ukhuluma/Anotaura` を A 一体（他 4 変種は A+D） 【確実】
- **Current (zu):** A:「Ukhuluma」 B:「izilimi ezintathu」 C:「ngokufefisa」
- **Current (sn):** A:「Anotaura」 B:「mitauro mitatu」 C:「zvakanaka」
- **Reference / siblings:**
  - [sw] A:「Yeye」 **D:「anazungumza」** B:「lugha tatu」 C:「kwa ufasaha」
  - [xh] A:「Yena」 **D:「uthetha」** B:「iilwimi ezintathu」 C:「ngokupheleleyo」
  - [rw] A:「We」 **D:「avuga」** B:「indimi eshatu」 C:「neza cyane」
  - [ny] A:「Iye」 **D:「amalankhula」** B:「zilankhulo zitatu」 C:「bwino」
- **Problem:** zu と sn は独立 3 人称代名詞 (`yena/iye` 相当) を欠き、主語接辞 + 動詞 (`Ukhuluma`/`Anotaura`) を A 一体扱い。他 4 変種は 3 人称代名詞 A + 動詞 D に分割。Bantu 全般で 3 人称代名詞は省略可能だが、sibling 整合性のため `Yena/Iye` 相当を A、動詞を D に分けるべき。
- **Proposed fix:** zu A:「Yena」 + D:「ukhuluma」、sn A:「Iye」 + D:「anotaura」。
- **Edit:** `{id:57, lang:"zu", op:"replace", segments:[["A","Yena"],["D","ukhuluma"],["B","izilimi ezintathu"],["C","ngokufefisa"]], finding:"zu lacks A:Yena (3sg pronoun) and D:verb; sw/xh/rw/ny all split A-pronoun + D-verb. Add A:Yena, move verb to D."}` 【蓋然】
- **Edit:** `{id:57, lang:"sn", op:"replace", segments:[["A","Iye"],["D","anotaura"],["B","mitauro mitatu"],["C","zvakanaka"]], finding:"sn lacks A:Iye and D:verb; siblings split. Add 3sg pronoun and isolate D."}` 【蓋然】

### 13. #75 zu/sn/rw — 「習う」動詞の A 融合（C 動詞独立せず） 【確実】
- **Current (sw):** A:「Watoto」 C:「wanajifunza」 B:「kuogelea」
- **Current (zu):** A:「Izingane」 C:「zifunda」 B:「ukubhukuda」 — OK
- **Current (xh):** A:「Abantwana」 C:「bafunda」 B:「ukuqubha」 — OK
- **Current (sn):** A:「Vana」 C:「vari kudzidza」 B:「kushambira」 — OK
- **Current (rw):** A:「Abana」 C:「barimo kwiga」 B:「koga」 — OK
- **Current (ny):** A:「Ana」 C:「akuphunzira」 B:「kusambira」 — OK
- **Problem:** 本件は全 6 変種が `A:主語名詞 C:動詞 B:不定詞目的語` で完全に整合しており、defect なし。**reference 整合の正例として記録**。

### 14. #23 zu — 存在動詞 D 欠落（他5変種 A+D+B+C） 【確実】
- **Current (zu):** A:「Umtapo wolwazi」 B:「useduze」 C:「nesibhedlela」
- **Reference / siblings:**
  - [sw] A:「Maktaba」 **D:「ipo」** B:「karibu na」 C:「hospitali」
  - [xh] A:「Ithala leencwadi」 **D:「li」** B:「ngakwi」 C:「sibhedlele」
  - [sn] A:「Raibhurari」 **D:「iri」** B:「padivi ne」 C:「chipatara」
  - [rw] A:「Isomero」 **D:「riri」** B:「hafi ya」 C:「ibitaro」
  - [ny] A:「Laibulale」 **D:「ili」** B:「pafupi ndi」 C:「chipatala」
- **Problem:** en の `D:is` に対応するコピュラ/存在動詞を zu だけが B（位置副詞 useduze =next to）に融合させ D 欠落。`u-` 主語接辞は `useduze` 内に埋め込まれているため形態素分解的には D 独立化は困難だが、sw/xh/sn/rw/ny 全員が独立 D を持つので zu も `D:u` + `B:seduze` に分割するか、もしくは B のみで sw/xh/sn/rw/ny 側を統一する選択。後者は他兄弟の構造を壊すので前者を提案。
- **Proposed fix:** zu A:「Umtapo wolwazi」 + D:「u」 + B:「seduze」 + C:「nesibhedlela」。
- **Edit:** `{id:23, lang:"zu", op:"replace", segments:[["A","Umtapo wolwazi"],["D","u"],["B","seduze"],["C","nesibhedlela"]], finding:"zu lacks copula D; siblings split class-9 SC + locative. Split useduze into D:u + B:seduze."}` 【蓋然】

### 15. #97 zu — 存在動詞 D 欠落（同パターン） 【確実】
- **Current (zu):** A:「Isuphamakethe」 B:「ingemuva」 C:「kwesiteshi」
- **Reference / siblings:**
  - [sw] A:「Duka kubwa」 **D:「liko」** B:「nyuma ya」 C:「stesheni」
  - [xh] A:「Isupermakethi」 **D:「i」** B:「ngasemva kwe」 C:「sitishi」
  - [sn] A:「Supamaketi」 **D:「iri」** B:「shure kwe」 C:「chiteshi」
  - [rw] A:「Isupermarket」 **D:「iri」** B:「inyuma ya」 C:「sitasiyo」
  - [ny] A:「Supamaketi」 **D:「ili」** B:「kumbuyo kwa」 C:「siteshoni」
- **Problem:** #23 と完全同型。zu だけ `ingemuva` の `i-` 主語接辞を B に埋め込み D 欠落。
- **Proposed fix:** zu D:「i」 + B:「ngemuva」 に分割。
- **Edit:** `{id:97, lang:"zu", op:"replace", segments:[["A","Isuphamakethe"],["D","i"],["B","ngemuva"],["C","kwesiteshi"]], finding:"zu lacks copula D, same defect class as #23; split SC i- from locative ngemuva."}` 【蓋然】

### 16. #82 zu — 接続詞「~ように」の D 動詞欠落（C 一体融合） 【蓋然】
- **Current (zu):** A:「Udokotela」 B:「ungitshele」 C:「ukuthi ngiphumule」
- **Reference / siblings:**
  - [sw] A:「Daktari」 **D:「aliniambia」** B:「mimi」 C:「kupumzika」
  - [xh] A:「Ugqirha」 **D:「undixelele」** C:「ukuphumla」
  - [sn] A:「Chiremba」 **D:「akandiudza」** C:「kuzorora」
  - [rw] A:「Umuganga」 **D:「yambwiye」** C:「kuruhuka」
  - [ny] A:「Dotolo」 **D:「anandiuza」** C:「kupumula」
- **Problem:** zu の `ungitshele`（言った）を B に置き D 欠落。他 5 変種は全部主動詞を D に。zu は受益者目的語 `ngi`（私に）が動詞に incorporate されているため B 扱いだが、語幹 `tshele` は本来動詞で D が正しい。
- **Proposed fix:** zu D:「ungitshele」 (B から D へ移動) + C:「ukuthi ngiphumule」 を据え置き。
- **Edit:** `{id:82, lang:"zu", op:"replace", segments:[["A","Udokotela"],["D","ungitshele"],["C","ukuthi ngiphumule"]], finding:"zu places main verb 'ungitshele' (told) into B instead of D; all 5 siblings have it as D-verb."}` 【蓋然】

### 17. #15 zu/rw — 「abroad」要素の分節差（rw は C に押し込み、zu は C 自体欠落） 【蓋然】
- **Current (zu):** A:「Udadewethu omncane」 C:「ufunda」 B:「eFransi」 — D 欠落、C も「留学する/study abroad」全体
- **Current (sw):** A:「Dada yangu」 **D:「anasoma」** C:「nje ya nchi」 B:「Ufaransa」
- **Current (sn):** A:「Munin'ina」 **D:「ari」** C:「kudzidza kunze kwenyika」 B:「kuFrance」
- **Current (xh):** A:「Udade wethu omncinci」 **D:「u」** C:「funda phesheya」 B:「eFransi」
- **Current (rw):** A:「Mushiki wanjye」 **D:「arimo」** C:「kwiga mu mahanga」 B:「mu Bufaransa」
- **Current (ny):** A:「Mchemwali wanga」 **D:「akuphunzira」** C:「kunja kwa dziko」 B:「ku France」
- **Problem:** zu だけが連続相補助 D （xh `u-`, sn `ari`, rw `arimo`, ny `akuphunzira` 内蔵）を欠落。`ufunda` を C 一体に統合。en では `D:is studying abroad` で D 補助 + C 本動詞だが、Bantu では現在進行を補助動詞分けで表現する変種 (sn/rw) と接辞融合で表現する変種 (sw/xh/ny/zu) がある。zu の `ufunda` は主語接辞 `u-` + 現在 `-funda` で、xh の `u`/`funda` 二分割と並列にすべき。
- **Proposed fix:** zu A:「Udadewethu omncane」 + D:「u」 + C:「funda」 + B:「eFransi」（xh と同形）。
- **Edit:** `{id:15, lang:"zu", op:"replace", segments:[["A","Udadewethu omncane"],["D","u"],["C","funda"],["B","eFransi"]], finding:"zu fuses u+funda; xh (same Nguni branch) splits u/funda for D auxiliary. Mirror xh's split for cross-Nguni consistency."}` 【要検討】

### 18. #50 sw/zu/sn/xh/rw/ny — 所有 E の前位 vs 後位の不整合（5 変種 AED, sw も AED → 整合）— 検査の結果 defect なし、**正例として記録** 【確実】
- 全 6 変種が `A:犬 E:所有 D:好む C:散歩` で完全に整合。defect なし。

### 19. #46 xh — 動詞 `thethe` を E|H 複合（過去 + 共格接頭辞融合）にする独自パターン 【要検討】
- **Current (xh):** A:「Ndi」 **E|H:「thethe」** F:「no」 B:「mhlobo」 G:「wam」 C:「efowunini」 D:「iyure enye」
- **Reference / siblings:**
  - [sw] **A:「Nilizungumza」** F:「na」 B:「rafiki」 G:「yangu」 C:「kwa simu」 D:「kwa saa moja」
  - [zu] **A:「Ngikhulume」** F:「no」 B:「mngani」 G:「wami」 C:「ocingweni」 D:「ihora elilodwa」
  - [sn] **A:「Ndakataura」** F:「ne」 B:「shamwari」 G:「yangu」 C:「pafoni」 D:「kweawa imwe」
  - [rw] **A:「Navuganye」** F:「n'」 B:「‌inshuti」 G:「yanjye」 C:「kuri terefone」 D:「isaha imwe」
  - [ny] **A:「Ndinakamba」** F:「ndi」 B:「mnza」 G:「‌nga」 C:「pa foni」 D:「ora limodzi」
- **Problem:** xh だけが 1) A:Ndi + E|H:thethe で 2 セグメント化、2) `E|H` 複合ラベルで他兄弟と非並列。他 5 変種は単純 A:動詞 一体。xh の `E|H:thethe` は en 参照 `E:talk` + `H:ed` の対応らしいが、動詞語幹に過去接尾辞が融合した 1 形態素なので Bantu 流には A 一体が自然。
- **Proposed fix:** xh A:「Ndithethe」 と統合（A+E|H を一体化）。
- **Edit:** `{id:46, lang:"xh", op:"replace", segments:[["A","Ndithethe"],["F","no"],["B","mhlobo"],["G","wam"],["C","efowunini"],["D","iyure enye"]], finding:"xh uniquely produces A:Ndi + E|H:thethe; 5 siblings keep verb fused into A. The E|H composite has no functional analogue in other Bantu siblings."}` 【蓋然】

### 20. #69 xh/ny — `D|E` 複合（write+past）の発生で zu/sn 並列、rw/sw 非並列。`H` 与格独立の不整合 【要検討】
- **Current (sw):** A:「Aliandika」 B:「barua」 G:「ndefu」 **H:「kwa」** C:「wazazi wake」 — H 独立
- **Current (zu):** A:「Ubhale」 B:「incwadi」 G:「ende」 **C|H:「kubazali bakhe」** — H が C に融合
- **Current (xh):** A:「Yena」 **D|E:「ubhale」** B:「ileta」 G:「ende」 **C|H:「kubazali bakhe」**
- **Current (sn):** A:「Akanyora」 B:「tsamba」 G:「refu」 **C|H:「kuvabereki vake」** — H が C に融合
- **Current (rw):** A:「Yanditse」 B:「urwandiko」 G:「rurerure」 **H:「ku」** C:「babyeyi be」 — H 独立
- **Current (ny):** A:「Iye」 **D|E:「analemba」** B:「kalata」 G:「yaitali」 **H:「kwa」** C:「makolo ake」 — H 独立
- **Problem:** 2 つの異なる cross-sibling 揺れ。**(a)** 「与格 to + 親」の H 前置詞独立: sw/rw/ny は `H:kwa/ku/kwa` 独立、zu/sn/xh は `C|H` 複合（H が C 名詞に融合）。Doke 文法では `ku-` は class 17 locative prefix で名詞と一体だが、sw の `kwa` は分離可能助詞なので前置詞独立は正当。**(b)** xh と ny は `D|E:write+past` 複合ラベルを持ち、sw/zu/sn/rw はそれを A に一体化。後者は xh/ny の特異な en 整合分節（D:wrote + E:past）の結果。これは en 参照 `D|E:wrote` の翻訳ポリシーで許容と判断、**defect は (a) のみ**。
- **Proposed fix:** zu C|H:「kubazali bakhe」を H:「ku」 + C:「bazali bakhe」 に分割（sw/rw/ny と整合）。sn も同様。xh は語頭 `ku-` が完全融合しているため要検討。
- **Edit:** `{id:69, lang:"zu", op:"replace", segments:[["A","Ubhale"],["B","incwadi"],["G","ende"],["H","ku"],["C","bazali bakhe"]], finding:"zu fuses H-dative ku- into C|H; sw/rw/ny isolate H. Split locative prefix ku- into independent H."}` 【要検討】
- **Edit:** `{id:69, lang:"sn", op:"replace", segments:[["A","Akanyora"],["B","tsamba"],["G","refu"],["H","ku"],["C","vabereki vake"]], finding:"sn fuses H-dative into C|H; sw/rw/ny isolate H. Split locative prefix."}` 【要検討】

### 21. #29 xh — `Ndi`+`libele` 分裂で zu/sw/sn/rw/ny 全員 A 一体 【蓋然】
- **Current (xh):** A:「Ndi」 **C:「libele」** B:「isambrela yam」 D:「etreyini」
- **Reference / siblings:**
  - [sw] **A:「Nilisahau」** B:「mwavuli wangu」 D:「kwenye treni」
  - [zu] **A:「Ngikhohlwe」** B:「isambulela sami」 D:「esitimeleleni」
  - [sn] **A:「Ndakakangamwa」** B:「amburera yangu」 D:「muchitima」
  - [rw] **A:「Nibagiwe」** B:「amapara yanjye」 D:「mu gariyamoshi」
  - [ny] **A:「Ndinayiwala」** B:「ambirela yanga」 D:「mu galimoto ya pamzere」
- **Problem:** xh のみ分裂、5 兄弟 A 一体融合。
- **Proposed fix:** xh A:「Ndilibele」 と統合。
- **Edit:** `{id:29, lang:"xh", op:"replace", segments:[["A","Ndilibele"],["B","isambrela yam"],["D","etreyini"]], finding:"xh splits Ndi/libele; 5 siblings keep subject+verb fused into A."}` 【蓋然】

### 22. #40 xh/sn — 独立 3 人称 `wena/iwe` 追加で他兄弟と非並列（A 追加） 【要検討】
- **Current (sw):** A:「Unajua」 C:「wapi」 B:「posta」 D:「iko」
- **Current (zu):** A:「Uyazi」 C:「ukuthi」 B:「‌iposi」 D:「‌likuphi」
- **Current (xh):** **E:「Uyazi」 A:「wena」** C:「ukuba iphi」 B:「ipositi」 — A:wena, E:動詞
- **Current (sn):** **E:「Unoziva」 A:「iwe」** C:「kuti」 B:「positi ofisi」 D:「iri kupi」 — A:iwe, E:動詞
- **Current (rw):** A:「Uzi」 C:「aho」 B:「iposita」 D:「iri」
- **Current (ny):** A:「Mukudziwa」 C:「kuti」 B:「positi」 D:「ili」
- **Problem:** xh と sn だけが独立 2 人称代名詞 `wena/iwe` を A に置き、本動詞を E にずらす。他 4 兄弟は主語接辞内蔵動詞を A、E は持たない。`feedback_cross_sibling_role_consistency.md` の duplicate-letter outlier。
- **Proposed fix:** xh と sn は A:本動詞、E 削除に戻し、独立代名詞は本動詞に統合 (`Wena uyazi` → `Uyazi`) するか、または全 6 変種に独立代名詞戦略を適用。前者を提案（最小変更）。
- **Edit:** `{id:40, lang:"xh", op:"replace", segments:[["A","Uyazi"],["C","ukuba iphi"],["B","ipositi"]], finding:"xh isolates 2sg pronoun 'wena' as A and moves verb to E; sw/zu/rw/ny keep subject-incorporated verb as A. Drop wena, restore A:verb."}` 【要検討】
- **Edit:** `{id:40, lang:"sn", op:"replace", segments:[["A","Unoziva"],["C","kuti"],["B","positi ofisi"],["D","iri kupi"]], finding:"sn isolates 2sg pronoun 'iwe' as A and moves verb to E; siblings keep verb in A."}` 【要検討】

### 23. #76 ny — B「listening」要素の完全脱落（C+A+D の 3 セグメント） 【確実】
- **Current (ny):** C:「Ndikamamva」 A:「nyimbo」 D:「ndimakhala wosangalala」
- **Reference / siblings:**
  - [sw] C:「Ninapokuwa」 **B:「nikiisikiliza」** A:「muziki」 D:「nahisi furaha」
  - [zu] D:「Ngizwa ngijabule」 C:「uma」 **B:「ngilalele」** A:「umculo」
  - [xh] D:「Ndiva ndonwabile」 C:「xa」 **B:「ndimamela」** A:「umculo」
  - [sn] D:「Ndinonzwa kufara」 C:「kana」 **B:「ndichiteerera」** A:「mimhanzi」
  - [rw] C:「Iyo」 **B:「numvise」** A:「umuziki」 D:「numva mfite ibyishimo」
- **Problem:** ny だけが「聴く」B 動詞を欠落。`Ndikamamva` は ny で「聞くとき」を 1 形態素に融合させた表現で形態学的には正当だが、B 動詞「聞く」を独立に持つ他 5 変種と非整合。`feedback_split_segments_like_reference.md` に従い ny も B 動詞を独立化すべき。
- **Proposed fix:** ny C:「Ndikamva」(=when I hear) + B:「kumamva」(=listening) + A:「nyimbo」 + D:「ndimakhala wosangalala」 のような分節は元語形に存在しないため要再翻訳。**最小編集としては C を C+B に再分割せず現状維持を選び、本件は「サイブリング欠落型 defect」として記録のみ**。
- **Edit:** `{id:76, lang:"ny", op:"replace", segments:[["C","Ndikamva"],["B","kumvetsera"],["A","nyimbo"],["D","ndimakhala wosangalala"]], finding:"ny lacks B-listening; 5 siblings all have B. Add B:kumvetsera (listen-INF) between C and A, retaining C:Ndikamva (when-I-hear-COND)."}` 【要検討】

### 24. #25 xh/rw/ny — `D` 名詞 + `F` 形容詞の語順 vs 融合の不整合 【蓋然】
- **Current (sw):** A:「Baba yangu」 E:「anafanya kazi」 B:「katika」 **D:「kampuni」 F:「kubwa」** — D 名詞先 + F 形容詞後
- **Current (zu):** A:「Ubaba wami」 E:「usebenza」 B:「e」 **D:「nkampanini」 F:「enkulu」** — D+F 順
- **Current (sn):** A:「Baba vangu」 E:「vanoshanda」 B:「pa」 **D:「kambani」 F:「huru」** — D+F 順
- **Current (xh):** A:「Utata wam」 E:「usebenza」 B:「kwi」 **F:「nkampani enkulu」** — D 欠落、F に融合
- **Current (rw):** A:「Papa wanjye」 E:「akora」 B:「mu」 **F:「isosiyete」 D:「nini」** — F+D 順、逆転
- **Current (ny):** A:「Abambo anga」 E:「amagwira ntchito」 B:「ku」 **F:「kampani」 D:「yaikulu」** — F+D 順、逆転
- **Problem:** sw/zu/sn は `D:会社 + F:大きな`、xh は D 欠落で F に融合、rw/ny は **F:会社 + D:大きな** という逆ラベル使用（en `F:big D:company` 整合だが Bantu 内では sw/zu/sn と逆）。本件は Bantu 内で「形容詞は名詞後置」という共通文法に反する逆ラベル割り当て。
- **Proposed fix:** rw/ny の F/D を入れ替え、sw/zu/sn と整合：
- **Edit:** `{id:25, lang:"rw", op:"replace", segments:[["A","Papa wanjye"],["E","akora"],["B","mu"],["D","isosiyete"],["F","nini"]], finding:"rw assigns F to noun 'isosiyete' and D to adjective 'nini'; sw/zu/sn use D=noun + F=adjective. Swap to align with Bantu majority noun-first label."}` 【蓋然】
- **Edit:** `{id:25, lang:"ny", op:"replace", segments:[["A","Abambo anga"],["E","amagwira ntchito"],["B","ku"],["D","kampani"],["F","yaikulu"]], finding:"ny swaps F/D vs sw/zu/sn; relabel noun as D and adjective as F."}` 【蓋然】
- **Edit:** `{id:25, lang:"xh", op:"replace", segments:[["A","Utata wam"],["E","usebenza"],["B","kwi"],["D","nkampani"],["F","enkulu"]], finding:"xh fuses 'nkampani enkulu' into single F, losing D-noun; split."}` 【蓋然】

### 25. #95 rw/ny — 動詞行く `Njya`/`ndimapita` の C vs D ラベル不整合 【蓋然】
- **Current (sw):** **C:「Ninaenda」** B:「ofisini」 A:「kwa baiskeli」
- **Current (zu):** **C:「Ngiya」** B:「ehhovisi」 A:「ngebhayisikili」
- **Current (sn):** **C:「Ndinoenda」** B:「kuofisi」 A:「nebhasikoro」
- **Current (xh):** **C:「Ndiya」** B:「eofisini」 A:「ngebhayisekile」
- **Current (rw):** **D:「Njya」** B:「ku biro」 A:「n'igare」 — D を使う
- **Current (ny):** **D:「Ine」 C:「ndimapita」** B:「ku ofesi」 A:「pa njinga」 — D=代名詞、C=動詞
- **Problem:** rw は本動詞を C ではなく D に置く。en 参照では `D:I C:go B:office A:by bicycle`、つまり A:主語、C:動詞。rw の D:Njya は独立主語代名詞も主語接辞も含めずに「私は行く」全体を D に押し込めており、他 4 兄弟 (C 動詞) と非整合。ny は D に独立代名詞 `Ine`、C に動詞、これは en 整合だが他 3 兄弟 (sw/zu/sn) は D を持たず単に C:動詞のみ。rw は ny 流に揃えるか、sw/zu/sn 流に C:動詞 のみにするか選択。
- **Proposed fix:** rw C:「Njya」 (D→C)、または rw D:「Njye」 + C:「njya` に分割。最小編集として前者：
- **Edit:** `{id:95, lang:"rw", op:"replace", segments:[["C","Njya"],["B","ku biro"],["A","n'igare"]], finding:"rw labels go-verb as D; sw/zu/sn/xh all label as C. Reassign to C."}` 【蓋然】

### 26. #20 ny — 「降る」C 動詞の `ikugwa` 一体化で B 雨欠落（sw/rw 構造と非整合） 【要検討】
- **Current (sw):** D:「Mvua」 C:「imekuwa」 B:「ikinyesha」 A:「tangu asubuhi」 — D:rain, C:has been, B:falling
- **Current (zu):** D:「Imvula」 C:「ilokhu ina」 A:「kusukela ekuseni namuhla」 — C 内に "has been raining" 全体融合、B 欠落
- **Current (xh):** C:「Kube ku」 B:「na」 A:「ukusukela kwale kusasa」 — D 欠落
- **Current (sn):** C:「Kwanga」 B:「kuchinaya」 A:「kubva mangwanani」 — D 欠落
- **Current (rw):** D:「Imvura」 C:「irakomeje」 B:「kugwa」 A:「kuva mu gitondo」 — sw と並列
- **Current (ny):** A:「Kuyambira m'mawa」 D:「mvula」 C:「ikugwa」 — B 欠落、C+B 融合
- **Problem:** 「降る」(B fall) と「~している」(C has been) の独立性が変種ごとにバラバラ。en 参照は `C:has been B:raining`。**sw と rw は en 整合**（D 雨 + C 補助 + B 本動詞）、zu/xh/sn/ny は C+B 融合または D 欠落。多くの変種で B を補うのは難しいが、特に ny の `ikugwa` は ku-（locative prefix）+ gwa（fall）の分析が可能なので分割の余地あり。
- **Proposed fix:** ny を sw/rw に揃えるなら C:「iri」(=is) + B:「kugwa」(=falling) に分割。ただし `ikugwa` は 1 単語であり強制分割は形態素的に苦しい。**要検討タグ**で記録のみ。
- **Edit:** `{id:20, lang:"ny", op:"replace", segments:[["A","Kuyambira m'mawa"],["D","mvula"],["C","ikugwa"]], finding:"ny lacks B-falling verb (fused into C:ikugwa); sw/rw split. ny's ikugwa = i-ku-gwa is morphologically a single inflected verb; split would be artificial. Flag for translation review rather than mechanical split."}` 【要検討】

### 補遺（記録のみ・要 fix なし）

**#75 (学ぶ)** と **#50 (犬は散歩)** は 6 変種完全整合の正例。
**#100 (Thanks for everything)**、**#88**、**#92**、**#94** も大筋整合（#88 の zu のみ defect 既出）。
**rw `feedback_glue_marker.md` 該当**: rw `Ndimo` / `arimo` 等の連続相補助は ZWNJ なしで A セグメント化されており、xh の `Ndi` 分割と異なり**独立 1 語**なので分節として正当。

## まとめ

- **支配的バンツー defect**: **xh の主語接辞 `Ndi` 単独 A セグメント化**が 100 文中 9 文 (#3, #11, #14, #19, #29, #41, #46, #55, #60, #67, #74, #80, #83) で発生し、他 4-5 兄弟 (zu 部分的を除き sw/sn/rw/ny) が一貫して A 一体融合しているという**xh 単独逸脱が最頻**。次点で **zu の D コピュラ・補助動詞欠落** (#23, #57, #82, #88, #97 など) が zu の欠落率 68% に直接寄与する。
- 追加で **rw/ny の D/F ラベル逆転** (#25)、**xh/sn の独立代名詞 wena/iwe 過剰追加** (#40)、**sn の連続相補助 `ari/iri` の独立分節** (#15, #20) の小逸脱を確認。
- 提案件数 26 件、内訳は確実 4 件 / 蓋然 16 件 / 要検討 6 件。
- 語彙差 (#33 の延長) は意図的に外し、構造のみを扱った。
- **`/home/jounlai/langmap/langmap_reviews/70_open.md` / 26 件 / 支配的 defect: xh 主語接辞 `Ndi` の単独 A セグメント化（9 件） + zu D コピュラ・補助動詞欠落（5 件）**

## Dev response — round 1 (2026-06-04)

### 採用方針 (Adoption policy)

省略可能性ガイドラインの **B.1（主語接辞は形態論的な bound morpheme であり、それ自体は独立した A セグメントとして切り出すべきではない）** を最優先採用。Bantu 諸語の主語接辞 `Ndi-/Ngi-/U-/Si-` は動詞語幹に bound する形態素であり、ZWNJ 強制分割は形態素境界違反となる。レビュアー指摘の通り xh は系統的に bound subject concord を独立 A に切り出している逸脱が顕著で、これを全て **A=主語接辞+動詞語幹を一体融合**に修正。

`feedback_glue_marker.md` の ZWNJ 活用は agglutinative suffix で主語接辞ではないため、Bantu の Ndi-/Ngi- には適用しない（現状 #3 zu `‌dla` / #41 sw `‌nasoma` / ny `‌kuwerenga` などの ZWNJ も含めて主語接辞分離の根拠とはみなさない）。

### xh `Ndi-` 9 文（+1）の分類

**全件 [SPLIT→MERGE 修正]** (`Ndi-` は bound subject concord で独立 A 不可、B.1 違反のため修正)：
- #3 xh: A:Ndi+C:tya → A:Nditya
- #11 xh: A:Ndi+C:thenge → A:Ndithenge
- #14 xh: A:Ndi+C:ya → A:Ndiya
- #19 xh: A:Ndi+D:thanda → A:Ndithanda
- #29 xh: A:Ndi+C:libele → A:Ndilibele
- #41 xh: A:Ndi+E:funda → A:Ndifunda
- #46 xh: A:Ndi+E|H:thethe → A:Ndithethe（E|H 複合ラベルも併せて廃棄）
- #55 xh: A:Ndi+C:sela → A:Ndisela
- #60 xh: A:Ndi+D:funda → A:Ndifunda
- #67 xh: A:Ndi+D:zivocavoca → A:Ndizivocavoca
- #83 xh: A:Ndi+D:zama → A:Ndizama

**[KEEP 据え置き = ガイドライン B.1 で legitimate]**: 該当なし。xh の `Ndi-` 単独 A 分離は全件 bound morpheme split 違反。

**zu の `Ngi-` 同類**: #3 zu / #11 zu も同じ defect class として併修正。

### zu D コピュラ・補助動詞欠落 5 文の処理

ガイドライン **B.3（zero copula in present tense は Bantu でも正当な省略）** を踏まえた個別判定：

- **#23 zu** (`useduze` = u-+seduze): bound class-1 SC を強制分離すると xh `Ndi-` 修正と同じ defect を新たに導入することになる。B.3 適用で zero-copula 省略を許容、**KEEP 据え置き**（未編集）。
- **#57 zu** (`Ukhuluma`) / **sn** (`Anotaura`): siblings の `Yena/Iye` 等独立 3sg 代名詞は zu/sn には原データに存在せず、追加すると text fabrication になる。B.1 (pro-drop) で pronoun 省略を legitimate と認め、現状 A=動詞のまま **KEEP 据え置き**（未編集）。verb→D 単純 relabel は A 欠落のままで cross-sibling 整合性が改善しないため見送り。
- **#82 zu** (`ungitshele` B → D): 形態素分解的に正当な main verb であり、ラベル誤りのみの bug。**APPLY** (relabel B→D)。
- **#88 zu** (`ishintsha umhlaba` 融合): 動詞 + 目的語の融合は A.1/A.2 の本動詞・目的語融合 defect。**APPLY** (B → C:ishintsha + B:umhlaba 分割、text 不変)。
- **#97 zu** (`ingemuva` = i-+ngemuva): #23 と同型、bound SC 強制分離回避。B.3 で **KEEP 据え置き**（未編集）。

### その他

- **#15 zu** (`ufunda` 一体): xh と整合化のため `u/funda` 分割案を出していたが、これも bound SC 強制分離になるため B.1 で見送り、**KEEP** (未編集)。
- **#20 ny** (`ikugwa`): reviewer 自身 「要検討、強制分割は形態素的に苦しい」 と記載通り、**KEEP** (未編集)。
- **#40 xh/sn** (`wena/iwe` 独立代名詞): reviewer 提案は wena/iwe text を削除することになり、原データの語彙を消失させる編集は採用しない。**KEEP** (未編集)。
- **#69 zu/sn** (`kubazali bakhe` の H 分離): class 17 locative prefix `ku-` の強制分離は #23/#97 と同じ B.1 違反、見送り。**KEEP** (未編集)。
- **#76 ny** (B-listening): reviewer 提案は `kumvetsera` という新規 text 追加で、fabrication にあたるため不採用。**KEEP** (未編集)。
- **#25 xh/rw/ny** (D/F label 整合): xh は noun+adj 分割、rw/ny は F/D label swap、いずれも relabel のみで text 不変。**全 3 件 APPLY**。
- **#95 rw** (`Njya` D→C): 単純 relabel、**APPLY**。
- **#75 / #50** 正例として記録、編集なし。

### 適用件数

- **APPLY 21 件**: #3 (zu, xh, sn), #11 (xh, zu), #14 (xh), #19 (xh), #25 (xh, rw, ny), #29 (xh), #41 (xh), #46 (xh), #55 (xh), #60 (xh), #67 (xh), #74 (zu), #82 (zu), #83 (xh), #88 (zu), #95 (rw)
- **KEEP 8 件** (ガイドライン B.1/B.3 で legitimate omission, or text fabrication 回避): #15 (zu), #20 (ny), #23 (zu), #40 (xh, sn), #57 (zu, sn), #69 (zu, sn), #76 (ny), #97 (zu)
- **正例として記録**: #50, #75

JSON: `/tmp/lm_edits_70.json`
