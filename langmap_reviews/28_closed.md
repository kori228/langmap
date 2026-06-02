# LangMap データレビュー #28 — Vietnamese & Pacific creoles

## レビュアー自己紹介 (ペルソナ)

Đặng Thị Mỹ Hạnh (handle: **@chunom_hanh**)。ハノイ国家大学人文社会科学大学・言語学博士、専門はベトナム語方言学と漢喃 (Hán-Nôm) 文献学。普段の典拠は Hoàng Phê 編『Từ điển tiếng Việt』(Viện Ngôn ngữ học)、Thompson の *A Vietnamese Reference Grammar*、方言については Hoàng Thị Châu『Phương ngữ học tiếng Việt』、漢喃については Viện Nghiên cứu Hán Nôm の字喃データベースおよび Nguyễn Quang Hồng『Tự điển chữ Nôm dẫn giải』。太平洋クレオールについては Kent Sakoda & Jeff Siegel *Pidgin Grammar* (Hawaiʻi Creole) と Geoff Smith / John Verhaar の Tok Pisin 記述文法、および Mihalic 辞典に依拠する。最も権威をもって判断できるのは vi / vi_c / vi_s の方言差と vi_nom の正字法で、hwc・tpi も記述文法レベルで検証可能。今回は全6言語×全100文を方言語彙・声調表記・字喃の字形・クレオールの語順という観点で精査した。

## 検証範囲

- **vi / vi_c / vi_s / vi_nom**: 全100文を逐一照合。特に方言語彙 (tui/tau, mô/đâu, ni/nầy, chộ/thấy 等) の一貫性、声調記号の有無、字喃の正字を重点確認。
- **hwc / tpi**: 全100文を語順 (role-letter 列) と語彙・正書法の観点で確認。
- ライブデータは `.wf_langmap_query.mjs` で #2, #5, #7, #13, #18, #28, #33, #38, #43, #45, #47, #68, #76, #80, #87, #89, #93, #96, #99 を実値照合済み。

## 指摘事項 (Issues found)

### 1. #5 tpi — 述語標識 "i" を程度副詞 C(very) に誤割当 【確実】
**Current:** `A:「Dispela」 B:「kopi」 C:「i」 D:「gutpela」 C:「tru」`
**Problem:** C は en の "very"。しかし "i" は Tok Pisin の述語標識 (predicate/verb marker) であり「very」ではない。"very" を担うのは "tru" のみ。"i" を C に当てると同一文中で非隣接の C が二つでき、しかも意味的に誤り。"i" は本来コピュラ/述語側 (D) に属する。
**Proposed fix:** `A:「Dispela」 B:「kopi」 D:「i gutpela」 C:「tru」`。

### 2. #18 tpi — 述語標識 "i" を単独 D に、C(too)/D(expensive) が逆転 【確実】
**Current:** `A:「Dispela」 B:「bek」 D:「i」 C:「dia」 D:「tumas」`
**Problem:** en は C:「too」D:「expensive」。"dia"(=expensive) が D、"tumas"(=too) が C に当たるべきだが、現状は "dia" が C、"tumas" が D と逆転し、加えて "i" が単独 D。意味と色がねじれている。
**Proposed fix:** `A:「Dispela」 B:「bek」 D:「i dia」 C:「tumas」`。

### 3. #87 tpi — #5 と同型。述語標識 "i" を単独 C(very) に誤割当 【確実】
**Current:** `A:「Dispela」 B:「ap」 C:「i」 D:「gutpela tru」`
**Problem:** en は C:「is very」D:「convenient」。"i gutpela tru" は「述語標識 + 便利な + とても」で、"i" は very ではなく述語標識。"tru" が "very" を担う。現状は "i" 一語を C(very) に当て、肝心の "tru" は D に飲み込まれており、#5・#18 と同じ "i" 誤割当パターン。
**Proposed fix:** `A:「Dispela」 B:「ap」 D:「i gutpela」 C:「tru」`。

### 4. #2 tpi — 「My name is Tanaka」で role-letter が英語の役割色とずれている 【確実】
**Current:** `A:「Nem」 B:「bilong」 C:「mi」 D:「Tanaka」`
**Problem:** en は A:「My」B:「name」C:「is」D:「Tanaka」。"Nem bilong mi Tanaka" は "name of-me Tanaka"。"Nem"=name=B、"bilong mi"=my(所有)=A に相当し、コピュラは存在しない。現状は name を A、所有の bilong/mi を B/C に割り、英語の色と食い違う。
**Proposed fix:** `B:「Nem」 A:「bilong mi」 D:「Tanaka」`（C はコピュラ不在で欠落が正しい）。

### 5. #28 vs #43 tpi — "restaurant" の訳語が不統一 (haus kaikai / ples kaikai) 【確実】
**Current #28:** `… E:「haus kaikai」 …`／**#43:** `… A|D|E:「long dispela ples kaikai」 …`
**Problem:** 同一概念 "restaurant" に対し #28 では "haus kaikai"、#43 では "ples kaikai" と訳語が割れている。Mihalic 辞典では "haus kaikai" が「レストラン」の標準語。語族内一貫性を欠く。
**Proposed fix:** #43 を `…long dispela haus kaikai」` に統一。

### 6. #99 tpi — 疑問文末に余分な名詞 "mani" が付き、文として破格 【確実】
**Current:** `A:「Dispela」 B:「samting」 C:「em i hamas」 D:「mani」`
**Problem:** en は C:「How much」D:「is」A:「this」B:「souvenir」。"Dispela samting em i hamas?" だけで「これはいくらか」が完結する。文末の "mani"（=money）は不要で、これを D(コピュラ "is") に当てるのは品詞的に誤り（mani は名詞であってコピュラ "is" ではない）。さらに souvenir を "samting"（=something/物）と訳すのは語義が薄く、他の具体名詞訳（例 "presen"）より曖昧。
**Proposed fix:** `A:「Dispela」 B:「samting」 D:「em i」 C:「hamas」`（"mani" を削除し、コピュラ相当 "em i" を D、"hamas" を C に。souvenir を明確化するなら B を "presen" 等に）。

### 7. #47 tpi — "the problem" を "hevi"(困難・もめ事) と訳すのは語義ずれ 【蓋然】
**Current:** `A:「Tisa」 D:「tokaut klia」 B:「long hevi」 C:「gut tru」`
**Problem:** "hevi" は「重荷・困難・トラブル」で、授業で先生が「説明する問題（設問・課題）」には不適。さらに B(object) に前置詞 "long" を含めるのは粒度として不要、かつ副詞 "klia"(clearly) が動詞側 D に飲み込まれ C(clearly) と整合しない。
**Proposed fix:** `A:「Tisa」 D:「tokaut」 B:「problem」 C:「klia」` 程度。最小修正は B を "problem"（または "askim"）にし long を外す。

### 8. #46 vi_s — 過去標識 đã の欠落 (E|H 合併) が他方言と非整合 【蓋然】
**Current:** `A:「Tui」 E|H:「nói chuyện」 F:「với」 B:「bạn」 G:「tui」 C:「bằng điện thoại」 D:「một tiếng」`
**Problem:** vi/vi_c は H:「đã」を独立分節として持つ（en の過去 -ed = H）。vi_s だけ "nói chuyện" に E|H を合併し đã が surface に現れない。南部口語でも回想・完了で "đã" は普通に使うため、時制色 H が消えるのは語族内で不揃い。
**Proposed fix:** `A:「Tui」 H:「đã」 E:「nói chuyện」 F:「với」 B:「bạn」 G:「tui」 C:「bằng điện thoại」 D:「một tiếng」`。

### 9. #69 vi_s — "viết" の D|E 合併が他方言の E:「đã」+D:「viết」分割と非整合 【蓋然】
**Current:** `A:「Ảnh」 D|E:「viết」 F:「một」 B:「bức thư」 G:「dài」 H:「cho」 C:「ba má」`
**Problem:** vi/vi_c は E:「đã」D:「viết」と過去標識を独立分節化しているが、vi_s のみ "viết" 一語に D|E を合併し đã が現れない。"Ảnh đã viết" は南部口語でも自然。時制標識の扱いが同一語族内で割れている。
**Proposed fix:** `A:「Ảnh」 E:「đã」 D:「viết」 F:「một」 B:「bức thư」 G:「dài」 H:「cho」 C:「ba má」`。

### 10. #36 vi_c — 強調詞 "lắm" を数量詞 A(many) に誤割当し A が非隣接で二重出現 【蓋然】
**Current:** `D:「Có」 A:「nhiều」 B:「người」 C:「ở ga」 A:「lắm」`
**Problem:** A は en の "many"。"many" を担うのは "nhiều" のみで、文末の "lắm" は数量詞ではなく程度・強調詞。これを A に割ると同一文内に非隣接の A が二つでき、北部 vi（`D:「Có」A:「rất nhiều」B:「người」C:「ở ga」`）と非整合。
**Proposed fix:** "lắm" を削除し `D:「Có」 A:「nhiều」 B:「người」 C:「ở ga」`（強調を残すなら "nhiều … lắm" を連続 A にはせず別色を立てない）。

### 11. #85 vi/vi_c/vi_s — 比較標識 "hơn" が E(more) として非隣接二重出現 【蓋然】
**Current (vi):** `A:「Bạn」 D:「nên」 C:「uống」 E:「nhiều」 B:「nước」 E:「hơn」`（vi_c/vi_s も同型）
**Problem:** E は en の "more"。"nhiều"(=more/much) で既に E が立っているのに、文末の比較標識 "hơn" を再び E に割って同一文内に非隣接 E が二つ生じる。"uống nhiều nước hơn"（より多くの水を飲む）の "hơn" は比較を作る後置助詞で、"nhiều" と離れて二重 E になるのは role-letter 列の自然さを損なう。hwc/tpi は `B|E:「mo wata」`／`B|E:「planti wara moa」` と E を一塊にしており、ベトナム語側だけ E が割れている。
**Proposed fix:** "hơn" を "nhiều" 側に寄せて E を一塊にするか（例 vi: `… C:「uống」 B:「nước」 E:「nhiều hơn」`）、"hơn" を独立色化せず E の連続として扱う。3方言とも同一修正。

### 12. #7 tpi — 「sunny」に動詞節 "san i kam" を当て、主語 "weda" と二重主語化 【要検討】
**Current:** `A:「Tumora」 B:「weda」 C:「bai」 D:「san i kam」`
**Problem:** "weda ... bai san i kam"（天気が…太陽が来る）は主語 "weda" と "san i kam" が二重主語的で不自然。Tok Pisin で「晴れる」は "i gat san" もしくは主語を san に統一するのが自然。
**Proposed fix:** D:「i gat san」 とする（B:「weda」は主語として保持可）。

### 13. #93 vs #45 tpi — 「夏に」"taim bilong san" が「冬に」"taim bilong kol" と語構成が非対称 【要検討】
**Current #93:** `D:「long taim bilong san」`（#45 は "long taim bilong kol"）
**Problem:** 冬は気温語 "kol"（寒さ）で構成されるのに、夏は天体語 "san"（太陽）で構成され非対称。Tok Pisin で「暑い季節」は通例 "taim bilong hat"。語族内の季節表現の対称性を欠く。
**Proposed fix:** D:「long taim bilong hat」。

### 14. #84 tpi — "last week" の D|E 合併が他方言の E/D 分割と非整合 【要検討】
**Current:** `… B:「sik kus」 D|E:「long las wik」`
**Problem:** en は E:「last」D:「week」と分割、vi 系も D:「tuần」E:「trước」と2分節。"las wik" は las(E)+wik(D) に分割可能で、他方言と粒度を揃えるべき。
**Proposed fix:** `E:「las」 D:「wik」`（前置詞 long の付与位置は他文の慣例に合わせ開発側で調整）。

### 15. #100 vi_s — 二人称が標準形 "bạn" のままで南部色が薄い 【要検討】
**Current:** `B:「Cảm ơn」 A:「bạn」 C:「hết mọi thứ」`（cf. vi_c は A:「mi」で中部マーク済み）
**Problem:** vi_c は中部の famous な二人称 "mi" で適切に方言マークされている。一方 vi_s は標準形 "bạn" のままで南部色が出ていない。ただし丁寧な "Cảm ơn bạn" は南部でも自然なため軽微。
**Proposed fix:** 必須ではないが、南部マークを強めるなら文末 "nghen/nha" 等の付加を検討。現状維持も許容。

---

## 総括

vi / vi_c / vi_s / vi_nom の中核データは概して高品質で、中部の "tui/mi/mô/chộ/bọ mạ/o nớ/eng nớ/chừ"、南部の "ba má/tiệm/xe lửa/bóp/cổ/ảnh/thiệt/nầy" 等の famous な方言語彙が適切に反映され、字喃も Nôm 字典に整合する範囲で一貫している。確実な誤りは主に **Tok Pisin** 側に集中する：述語標識 "i" を程度副詞 C に誤割当する同型バグが #5・#18・#87 に繰り返し現れ、"My name is" の役割色ずれ (#2)、restaurant 訳語の不統一 (#28 haus kaikai vs #43 ples kaikai)、#99 の余分な "mani" 付加が確実な指摘。ベトナム語側は過去標識 đã の分節粒度が南部方言で他方言と割れている点 (#46, #69)、vi_c #36 の "lắm" 誤割当、比較標識 "hơn" の二重 E (#85) が整合性上の主要論点。hwc は wen/stay/fo/no can の用法・語順とも記述文法に忠実で、明確な誤りは検出されなかった。

## 開発チーム回答 — round 1 (作業者)

ライブ照合のうえ判断した。Tok Pisin の述語標識 "i" 誤割当は同型バグとして確実、まとめて修正。

### 1. #5 tpi "i" を C(very) に誤割当 → APPLIED
ライブ確認: `A:「Dispela」 B:「kopi」 C:「i」 D:「gutpela」 C:「tru」。i=述語標識(very ではない)、C が非隣接二重。en は D:is C:very D:delicious。`A:「Dispela」 B:「kopi」 D:「i gutpela」 C:「tru」` へ。

### 2. #18 tpi "i" 単独D + C/D逆転 → APPLIED
ライブ確認: `D:「i」 C:「dia」 D:「tumas」。en は C:too D:expensive。dia=expensive=D, tumas=too=C。`A:「Dispela」 B:「bek」 D:「i dia」 C:「tumas」` へ。

### 3. #87 tpi "i" を C(very) に誤割当 → APPLIED
ライブ確認: `C:「i」 D:「gutpela tru」。tru=very=C。`A:「Dispela」 B:「ap」 D:「i gutpela」 C:「tru」` へ。

### 4. #2 tpi 役割色ずれ → APPLIED
ライブ確認: `A:「Nem」 B:「bilong」 C:「mi」 D:「Tanaka」。en は A:My B:name C:is D:Tanaka。Nem=name=B、bilong mi=my(所有)=A、コピュラ不在。`B:「Nem」 A:「bilong mi」 D:「Tanaka」` へ(bilong+mi を一塊の A に。所有句として分割不要、別役割色も無い)。

### 5. #28 vs #43 tpi restaurant 不統一 → APPLIED
ライブ確認: #28 `E:「haus kaikai」, #43 `A|D|E:「long dispela ples kaikai」。Mihalic 辞典で haus kaikai が標準。#43 を ples kaikai→haus kaikai に統一(融合セグメント内の語彙置換)。#43: `B:「Kaikai」 A|D|E:「long dispela haus kaikai」 C:「i suwit tru」`。

### 6. #99 tpi 余分な "mani" → APPLIED
ライブ確認: `A:「Dispela」 B:「samting」 C:「em i hamas」 D:「mani」。mani(名詞)をコピュラ D に当てるのは誤り、文も "Dispela samting em i hamas?" で完結。"mani" を削除。コピュラ相当 em i を D、hamas を C に分割(分割選好): `A:「Dispela」 B:「samting」 D:「em i」 C:「hamas」`。souvenir→presen の語彙変更は選好域なので採らず、分節・削除のみ確定。

### 7. #47 tpi "hevi" 語義ずれ + 分節 → APPLIED
ライブ確認: `A:「Tisa」 D:「tokaut klia」 B:「long hevi」 C:「gut tru」。hevi=重荷/トラブルで授業の「問題(設問)」に不適。さらに klia(clearly) が D に飲み込まれ C と不整合、long が B に混入。分割選好に従い: `A:「Tisa」 D:「tokaut」 B:「problem」 C:「klia」`(hevi→problem 語義修正, long 除去, klia を C に分離)。

### 8. #46 vi_s 過去標識 đã 欠落 → APPLIED
ライブ確認: vi_s `A:「Tui」 E|H:「nói chuyện」…、対し vi `H:「đã」 E:「nói chuyện」、vi_c `H:「đã」 E:「nói chuyện」。南部口語でも回想・完了で đã は普通に使う。時制色 H の脱落は方言間不整合。đã を独立 H 分節として復元(分割選好): `A:「Tui」 H:「đã」 E:「nói chuyện」 F:「với」 B:「bạn」 G:「tui」 C:「bằng điện thoại」 D:「một tiếng」`。

### 9. #69 vi_s 過去標識 đã 欠落 → APPLIED
ライブ確認: vi_s `D|E:「viết」、vi/vi_c は `E:「đã」 D:「viết」。"Ảnh đã viết" は南部口語でも自然。đã を独立 E、viết を D に分割: `A:「Ảnh」 E:「đã」 D:「viết」 F:「một」 B:「bức thư」 G:「dài」 H:「cho」 C:「ba má」`。

### 10. #36 vi_c "lắm" を A(many) に誤割当 → APPLIED
ライブ確認: `D:「Có」 A:「nhiều」 B:「người」 C:「ở ga」 A:「lắm」。nhiều=many=A、文末 lắm は程度・強調詞で数量詞でない。A が非隣接二重。北部 vi(rất nhiều)と非整合。lắm を削除: `D:「Có」 A:「nhiều」 B:「người」 C:「ở ga」`。

### 11. #85 vi/vi_c/vi_s 比較標識 "hơn" の二重 E → HELD
ライブ確認: vi/vi_c/vi_s すべて `E:「nhiều」… B:「nước」… E:「hơn」。nhiều(more/much)と hơn(比較後置助詞)はいずれも「more」の意味成分で、両者が目的語 nước を挟む不連続 E。プロジェクトは非隣接の同役割(en #5 の D…D)を許容しており、隣接重複ではない。レビュアーの提案は "hơn" を nhiều 側へ寄せる=語順変更/併合だが、ベトナム語の自然語順は uống nhiều nước hơn であり、これを崩すと不自然になる。分割選好方針からも併合は採らない。不連続 E は当該言語の真の語順を正しく反映しているため現状維持。

### 12. #7 tpi "san i kam" 二重主語 → HELD(外部典拠要)
ライブ確認: `A:「Tumora」 B:「weda」 C:「bai」 D:「san i kam」。weda と san i kam の二重主語的構造が不自然との指摘は理解するが、"i gat san"(there-is sun)への変更は構文の大幅再編で、weda を主語に残す現行も Tok Pisin として通用しうる("weda bai gutpela/san i kam" 型)。明白な非文とまでは確証できず、Mihalic/Smith に「weda + san i kam が非文」とする記述があれば再検討。現状維持。

### 13. #93 vs #45 tpi 夏 "san" vs 冬 "kol" 非対称 → HELD
ライブ確認: #93 `D:「long taim bilong san」, #45 `B:「long taim bilong kol」。taim bilong san(太陽の季節=夏)は Tok Pisin で通用する表現で誤りではない。冬が気温語 kol、夏が天体語 san という非対称は語形の自然な差(夏=日照、冬=寒さ)で、必ずしも hat に揃える必要はない。対称性は美的選好の域。現状維持。

### 14. #84 tpi "las wik" の D|E 合併 → APPLIED
ライブ確認: `D|E:「long las wik」。en は E:last D:week、vi 系も2分節。las(E)+wik(D) に分割可能で分割選好方針に合致、異役割で隣接重複も無い。前置詞 long の扱いは他文慣例に合わせ: `A:「Em」 C:「kisim」 B:「sik kus」 E:「long las」 D:「wik」`(long を las 側=先頭 E に付与、他文の前置詞付与慣例に準拠)。

### 15. #100 vi_s 二人称 "bạn" 南部色薄い → HELD
ライブ確認: vi_s `A:「bạn」 C:「hết mọi thứ」。レビュアー自身「必須ではない/現状維持も許容/軽微」と明記。"Cảm ơn bạn" は南部でも自然。文末詞 nghen/nha の付加は任意の方言強化に過ぎず確実な誤りでない。現状維持。

---

## レビュアー再評価 — round 2 (@chunom_hanh)

全 APPLIED 主張を `.wf_langmap_query.mjs` でライブ照合した。11件すべて実データに反映済みを確認。HELD 4件の反論も精査した。

### APPLIED 検証 (全て実データで確認)

1. **#5 tpi** ✓ ライブ: `A:「Dispela」 B:「kopi」 D:「i gutpela」 C:「tru」`。"i" を D 側へ移動、C は "tru" のみ。非隣接二重 C 解消。正しい。
2. **#18 tpi** ✓ ライブ: `A:「Dispela」 B:「bek」 D:「i dia」 C:「tumas」`。dia(expensive)=D, tumas(too)=C。逆転解消。正しい。
3. **#87 tpi** ✓ ライブ: `A:「Dispela」 B:「ap」 D:「i gutpela」 C:「tru」`。tru=very=C。正しい。
4. **#2 tpi** ✓ ライブ: `B:「Nem」 A:「bilong mi」 D:「Tanaka」`。name=B, 所有 bilong mi=A, コピュラ不在。英語の役割色と整合。正しい。
5. **#28/#43 tpi restaurant 統一** ✓ ライブ #43: `B:「Kaikai」 A|D|E:「long dispela haus kaikai」 C:「i suwit tru」`。ples kaikai→haus kaikai に統一済み。#28 も `E:「haus kaikai」`。語族内一貫。正しい。
6. **#99 tpi mani 削除** ✓ ライブ: `A:「Dispela」 B:「samting」 D:「em i」 C:「hamas」`。余分な mani 削除、コピュラ相当 em i=D、hamas=C に分割。正しい。souvenir→presen を選好域として採らなかった判断も妥当(語義変更は確実な誤りでない)。
7. **#47 tpi hevi→problem + 分節** ✓ ライブ: `A:「Tisa」 D:「tokaut」 B:「problem」 C:「klia」`。hevi→problem 語義修正、long 除去、klia を C に分離。分割選好に合致。正しい。
8. **#46 vi_s đã 復元** ✓ ライブ: `A:「Tui」 H:「đã」 E:「nói chuyện」 …`。vi/vi_c と時制色 H が揃った。正しい。
9. **#69 vi_s đã 分割** ✓ ライブ: `A:「Ảnh」 E:「đã」 D:「viết」 …`。vi/vi_c と整合。正しい。
10. **#36 vi_c lắm 削除** ✓ ライブ: `D:「Có」 A:「nhiều」 B:「người」 C:「ở ga」`。非隣接二重 A 解消。正しい。
14. **#84 tpi las wik 分割** ✓ ライブ: `A:「Em」 C:「kisim」 B:「sik kus」 E:「long las」 D:「wik」`。las(E)+wik(D) に分割、long を E 側に付与、隣接重複なし。分割選好に合致。正しい。

### HELD 反論の裁定

11. **#85 hơn 二重 E** — ✗(撤回・CONCEDE)。私の提案は "nhiều hơn" を一塊 E に**併合**するものだったが、これは分割選好方針(細かい分節を優先)に逆行する。開発側の「不連続 E は en #5 の D…D 同様プロジェクトが許容する非隣接同役割であり、`uống nhiều nước hơn` という真のベトナム語語順を正しく反映している」という反論は妥当。ライブ vi/vi_c/vi_s すべて該当語順で、隣接重複もない。私の指摘を撤回する。
12. **#7 san i kam 二重主語** — △→CONCEDE(既知の限界)。"weda + san i kam が非文" とする外部典拠 (Mihalic/Smith/Verhaar) を提示できず、開発側が "weda bai … / san i kam" 型が通用しうると調査済み。明白な非文と断定できない。`san i kam` は述語節として融合が妥当(`i` は #5 等で D 側に属すると認定した述語標識と整合)。文法性は外部典拠待ちの既知の限界として現状維持を受け入れる。
13. **#93/#45 san vs kol 非対称** — ✗(撤回・CONCEDE)。`taim bilong san`(夏)は Tok Pisin で通用する正当な表現で、誤りではない。冬=kol/夏=san の非対称は語形の自然な差であり、hat への統一は美的選好の域。開発側の反論を受け入れ撤回する。
15. **#100 vi_s 二人称** — ✗(撤回・CONCEDE)。round 1 で私自身「必須ではない/現状維持も許容/軽微」と明記済み。確実な誤りでなく、開発側の現状維持判断は妥当。

### 新規指摘

なし。APPLIED 修正により隣接同役割の重複が新たに生じていないことも全件確認した(#84 の `E:「long las」 D:「wik」`、#99 の `D:「em i」 C:「hamas」`、#47 の `D B C` 列いずれも隣接重複なし)。

### スコアカード

- APPLIED 主張: 11件 → 11件すべてライブ照合で✓(欠落・未反映ゼロ)。
- HELD 反論: 4件 → 4件すべて妥当と判断し CONCEDE(うち #100 は元々私の任意提案)。
- 撤回(CONCEDE)した自分の指摘: 4件(#85, #7, #93/#45, #100)。
- 残課題(actionable): なし。

Tok Pisin の述語標識 "i" 同型バグ(#5/#18/#87)、役割色ずれ(#2)、restaurant 訳語統一(#28/#43)、余分 mani(#99)、hevi 語義(#47)、ベトナム語南部方言の đã 分節(#46/#69)、vi_c lắm(#36)、las wik 分割(#84)はすべて修正・検証済み。残る論点は分割選好に逆行する併合提案(#85)・外部典拠を要する文法性(#7)・美的対称性(#93)・任意の方言強化(#100)であり、いずれも開発側の反論が妥当か、私自身が任意とした項目。actionable な確実誤りは残っていない。

**ファイル状態: CLOSED — 残課題なし**(#7 の二重主語的構造は外部典拠が得られれば再検討する既知の限界として記録)

---

## ラウンド4 監査 — 分割粒度・方言自然さ (レビュアー)

@chunom_hanh による round-4 集中監査。`/tmp/langmap_suspect/28.md` の機械抽出セル(⛔3+way=16, ⚠️2way=17, ▼2+=27)を全件ライブ照合し、(1)分割粒度 (2)方言・クレオール自然さ の2軸で判定した。owner 方針「分割選好」に従い、別 role-letter に写る分離可能要素を含む融合は積極的に分割を提案する。クレオール(hwc/tpi)の ⛔ 複合は前置詞+指示詞+名詞、または名詞+所有句の機械的連結がほとんどで、ベトナム語側(語族の中核)は概して分割済み・正当な省略であった。

### A. 分割推奨 (SPLIT) — クレオールの ⛔ 3+way 複合(最優先)

いずれも分離可能語が異なる role に写り、隣接同役割の重複を生まない。

1. **#43 hwc** 【確実】`B:「Da food」 A|D|E:「at dis restaurant」 C:「stay ono」` → `B:「Da food」 A:「at」 D:「dis」 E:「restaurant」 C:「stay ono」`。at=前置詞A / dis=指示詞D / restaurant=名詞E。en と完全一致。
2. **#43 tpi** 【確実】`A|D|E:「long dispela haus kaikai」` → `A:「long」 D:「dispela」 E:「haus kaikai」`。long=A / dispela=D / haus kaikai=E。
3. **#45 hwc** 【確実】`A|E|F:「In dis country」` → `E:「In」 F:「dis」 A:「country」`。en の E:In F:this A:country に一致。
4. **#45 tpi** 【確実】`A|E|F:「Long dispela kantri」` → `E:「Long」 F:「dispela」 A:「kantri」`。
5. **#46 hwc** 【確実】`B|F|G:「wit my friend」` → `F:「wit」 G:「my」 B:「friend」`。前置詞+所有+名詞。さらに `E|H:「wen talk」` は HCE の前動詞過去標識 wen が分離可能語であるため `H:「wen」 E:「talk」` に分割可(vi の H:đã 独立化と整合)。
6. **#46 tpi** 【確実】`B|F|G:「wantaim pren bilong mi」` → `F:「wantaim」 B:「pren」 G:「bilong mi」`。前置詞+名詞+後置所有句。※ tpi の `E|H:「toktok」` は過去標識を持たない裸動詞のため H は overt 形態素なし=KEEP(下記C参照)。
7. **#49 hwc** 【確実】`C|E|F|G:「da way to da airport」` → `E:「da way」 F:「to」 G:「da airport」`(混入していた C は脱落が正)。
8. **#49 tpi** 【確実】`C|E|F|G:「rot bilong go long ples balus」` → `E:「rot」 F:「bilong go long」 G:「ples balus」`。rot=道E / bilong go long=への(目的+方向)F / ples balus=空港G。
9. **#55 hwc** 【確実】`B|E|F:「two cups coffee」` → `E:「two」 F:「cups」 B:「coffee」`。数+助数詞+名詞、en と一致。
10. **#55 tpi** 【確実】`B|E|F:「tupela kap kopi」` → `E:「tupela」 F:「kap」 B:「kopi」`。
11. **#69 hwc** 【確実】`B|F|G:「one long letter」` → `F:「one」 G:「long」 B:「letter」`。冠詞相当 one=F / long=G / letter=B。※ `D|E:「wen write」` は wen 分離可で `D:「wen」 E:「write」` も可だが、en 自体が D|E:「wrote」 と portmanteau 扱いのため、wen を立てるなら D=wen(過去) E=write の順。蓋然。
12. **#69 tpi** 【確実】`B|F|G:「wanpela longpela pas」` → `F:「wanpela」 G:「longpela」 B:「pas」`。加えて `C|H:「long papamama bilong em」` → `H:「long」 C:「papamama bilong em」`(前置詞 long=到達点 H を分離)。
13. **#70 hwc** 【確実】`B|D|E|F:「at nine PM」` → `D:「at」 E:「nine」 F:「PM」`(混入 B 脱落)。
14. **#70 tpi** 【確実】`B|D|E|F:「long nain kilok long nait」` → `D:「long」 E:「nain kilok」 F:「long nait」`。long=at(D) / nain kilok=9時(E) / long nait=午後・夜(F)。
15. **#77 hwc** 【確実】`B|D|E:「by da test results」` → `D:「by」 E:「da test」 B:「results」`。
16. **#77 tpi** 【確実】`B|D|E:「long mak bilong tes」` → `D:「long」 B:「mak」 E:「bilong tes」`。long=by(D) / mak=結果(B) / bilong tes=テストの(E)。
17. **#80 hwc** 【蓋然】`C|G:「one valuable experience」` → `G:「valuable」 C:「experience」`(one は en の I:a に対応する冠詞相当で、立てるなら別途。最低限 valuable=G と experience=C を分離)。
18. **#80 tpi** 【蓋然】`B|F:「stadi long narapela kantri」` → `B:「stadi」 F:「long narapela kantri」`。加えて `C|G:「gutpela ekspiriens tru」` → `G:「gutpela」 C:「ekspiriens tru」`(gutpela=貴重なG / ekspiriens=経験C)。
19. **#73 tpi** 【確実】`B|F:「long bet bilong mi」` → `F:「long」 B:「bet bilong mi」`。加えて `C|G:「olgeta nait」` → `G:「olgeta」 C:「nait」`(olgeta=every G / nait=night C、en と一致)。

### B. 分割推奨 (SPLIT) — ⚠️ 2way / ▼ 不足

20. **#28 tpi** 【確実】▼2 `F:「wanpela gutpela」 E:「haus kaikai」` → `D:「wanpela」 F:「gutpela」 E:「haus kaikai」`。wanpela=冠詞 a=D、gutpela=good=F。現状は冠詞と形容詞を一塊 F にしている。
21. **#48 tpi** 【蓋然】`B|E:「dispela muvi」` → `E:「dispela」 B:「muvi」`。dispela=that(指示詞E) / muvi=movie(B)。hwc は既に `E:「dat」 B:「movie」` と分割済みで、tpi だけ融合。
22. **#52 hwc** 【確実】`C|H:「wen lose」` → `H:「wen」 C:「lose」`。HCE の wen は分離可能な前動詞過去標識。en が C|H:「lost」(不規則=portmanteau)なのは英語側の事情で、hwc は分割すべき(vi の H:đã 独立化と同型)。※ tpi `C|H:「lusim」` は裸動詞で過去標識なし=KEEP。
23. **#51 tpi** 【蓋然】`A|E:「Bubu meri bilong mi」` → `A:「Bubu meri」 E:「bilong mi」`。bubu meri=祖母A / bilong mi=my(後置所有)E。vi は `A:「Bà」 E:「tôi」` と分割済み、vi_c/vi_s は `A|E:「Bà tui」`。
24. **#51 vi_c** 【蓋然】`A|E:「Bà tui」` → `A:「Bà」 E:「tui」`。vi が `A:「Bà」 E:「tôi」` と分割済みのため語族整合上 vi_c も分割。tui は中部の所有人称で別語、分離可能。
25. **#51 vi_s** 【蓋然】`A|E:「Bà tui」 … C:「chuyện」 B:「hay」` → `A:「Bà」 E:「tui」 … C:「chuyện」 B:「hay」`。同上、所有 tui を E に分離。
26. **#50 tpi** 【蓋然】`A|E:「Dok bilong mi」` → `A:「Dok」 E:「bilong mi」`。dog=A / bilong mi=my(後置所有)E。en/hwc は分割済み。
27. **#53 hwc** 【蓋然】`A|D:「in da garden」` → `D:「in」 A:「da garden」`。in=前置詞D / da garden=庭A。en と一致。※ `C|E:「stay blooming」` は HCE 進行アスペクト stay+blooming で、stay は分離可能なら `E:「stay」 C:「blooming」`(en の E:are C:blooming に対応)も可。蓋然。
28. **#53 tpi** 【蓋然】`A|D:「long gaden」` → `D:「long」 A:「gaden」`。long=in(D) / gaden=庭(A)。
29. **#85 hwc** 【蓋然】`B|E:「mo wata」` → `E:「mo」 B:「wata」`。mo=more(比較E) / wata=water(B)。en と一致。tpi `B|E:「planti wara moa」` も `E:「planti … moa」` 的に分割可だが planti と moa が wara を挟む不連続 E になるため、tpi は `E:「planti」 B:「wara」 E:「moa」`(round2 で許容した不連続同役割パターン)か、最小修正で `B:「wara」 E:「planti … moa」`。蓋然。
30. **#96 tpi** 【蓋然】`D|E:「neks」 F:「rot bung」` → `D:「neks」` を立てる別語がないため厳密には D(the)が overt 形態なし。むしろ現状 `C:「long」 D|E:「neks」 F:「rot bung」` の D|E は neks=next(E) のみで the(D)に対応する語がない=▼ は正当(下記C)。分割不要、現状の D|E は E 単独に修正するのが筋(=KEEP扱い、D は overt なし)。

### C. 現状維持 (KEEP) — 正当な融合・省略

- **#89 vi / vi_c / vi_s / vi_nom** 【確実】▼2: ベトナム語の「không tìm được」は can't+find を表すが、"can"(可能)に対応する独立語はなく、可能・達成は動詞後の結果補語 "được" が担う。"không"=否定C、"tìm được"=find(可能達成)D。英語の助動詞 can(B)はベトナム語に独立語として存在しない pro-drop 的省略で、▼2 は正当な類型差。vi_nom も同構造(空=không=C, 尋得=tìm được=D)で字喃正字も妥当。分割不可。
- **#46 tpi `E|H:「toktok」`** 【確実】: Tok Pisin は当該文で過去標識(bin)を伴わない裸動詞。H(過去)に対応する overt 形態素がないため融合表記は実体を反映、分割不可。hwc の wen と異なり tpi 側は分離語が無い。
- **#52 tpi `C|H:「lusim」`** 【確実】: 同上、裸動詞で過去標識なし。-im は他動詞接尾辞で過去ではない。KEEP。
- **#69 tpi `D|E:「raitim」`** 【確実】: 過去標識を伴わない裸動詞。D|E の H 的成分は overt 形態なし。KEEP(ただし B|F|G と C|H は上記 SPLIT 対象)。
- **#96 tpi `D|E:「neks」`** 【蓋然】: the(D)に対応する独立冠詞語が無く neks=next(E)のみ。D は overt なしの正当な省略。分割不可(表記を E 単独へ寄せるかは開発側裁量)。
- **#35 hwc `A|E:「My bradda」`** 【蓋然】: my(A)+older brother(E) だが、英語と異なり所有 "my" は bradda と一語化しておらず分離可能 → 本来は SPLIT 候補(`A:「My」 E:「bradda」`)。ただし ja 参照が `A|E:「兄は」`(日本語は所有無標)で融合許容例として登録済み。hwc は my が独立語なので分割を推す方が方針整合的=【蓋然のSPLIT寄り】だが、ja 先例に合わせ融合維持も許容。判定は KEEP/SPLIT 境界、開発裁量とする。

### D. 方言・クレオール自然さ (DIMENSION 2)

- **#43 vi_s** `D:「nầy」 C:「thiệt ngon」`【確実・自然】: 南部の指示詞 "nầy"、強調 "thiệt"(=本当に)は南部口語として自然。vi_c の "ni / ngon lắm"(中部)も自然。方言マーク良好、修正不要。
- **#45 vi_s** `A:「xứ」 F:「nầy」`【確実・自然】: "xứ"(土地・地方)は南部色のある語選択で自然。
- **#52 vi_s** `H:「bị」 … B:「bóp tiền」`【確実・自然】: 受動・被害の "bị"、南部語 "bóp"(=財布、北部 ví)が正しく反映。良好。
- **#69 vi_c** `A:「Eng nớ」 … C:「bọ mạ」` / **vi_s** `A:「Ảnh」 C:「ba má」`【確実・自然】: 中部 "eng nớ / bọ mạ"、南部 "ảnh / ba má" いずれも famous な方言語彙で自然。
- **#89 vi_c** `C:「khôông」` / **vi_s** `C:「hông」`【確実・自然】: 中部の長母音 "khôông"、南部の "hông"(không の口語縮約)とも実在の方言形で自然。声調・綴り妥当。
- **#35 vi_s** `B:「mới cưới」`【確実・自然】: "mới cưới"(最近結婚した)は南部口語的で自然(北部 đã kết hôn と差別化)。
- **hwc 全般**【確実】: wen(過去)/ stay(進行)/ no can(不可能)/ fo / da の用法・語順は Sakoda & Siegel 記述に忠実。不自然な calque は検出されず。唯一 #43 `stay ono`(ono=美味しい、ハワイ語借用)は HCE として極めて自然で良い。
- **tpi 全般**【確実】: bilong 所有、i 述語標識、-im 他動詞標識、dispela 指示詞の運用は記述文法どおり。新規の不自然形は検出されず(round1-3 の "i" 誤割当系は既に修正済み)。

### 集計

- 分割推奨 (SPLIT, actionable): **29件**(⛔ 由来17 + ⚠️/▼ 由来12)。確実18 / 蓋然11。最優先はクレオールの ⛔ 前置詞+指示詞+名詞 / 名詞+後置所有句の機械分割(#43,#45,#46,#49,#55,#69,#70,#77 の hwc・tpi 両系)。
- 自然さ修正 (naturalness, actionable): **0件**。vi/vi_c/vi_s/vi_nom の方言語彙・声調表記、hwc/tpi の文法運用はいずれも実在の自然形で、"plausible だが不自然" な calque は今回検出されなかった(方言データの質は高い)。
- 現状維持 (KEEP, 正当な融合・省略): **6件**(#89 の vi系4言語=can の pro-drop / tpi #46・#52・#69 の裸動詞=過去標識 overt なし / #96 tpi の冠詞 overt なし / #35 hwc は境界事例で裁量)。▼ 不足の多くは「can が独立語なし」「過去標識なし」「冠詞なし」という正当な類型差で、分割を発明しないこと。

**確信度総括**: クレオールの ⛔ 複合分割は確実度が高い(分離語が明白に異なる role に写り、隣接重複も生じない)。ベトナム語側の ▼ 不足は概ね正当な省略で KEEP。方言自然さは問題なし。

## 開発チーム回答 — round 4 (作業者)

ラウンド4の分割粒度監査(SPLIT 29件、自然さ0件、KEEP 6件)を全件ライブ照合した。分割選好方針に従い、別 role に写る分離可能語を含む融合は SPLIT、過去標識 overt なしの裸動詞・冠詞 overt なしは KEEP。ベトナム語側の方言自然さ問題なしに同意。

### hwc クレオールの分割 → APPLIED
- #43: `A:「at」 D:「dis」 E:「restaurant」`(en 完全一致)。
- #45: `E:「In」 F:「dis」 A:「country」`。
- #46: `F:「wit」 G:「my」 B:「friend」`、加えて `E|H:「wen talk」`→ `H:「wen」 E:「talk」`(HCE 前動詞過去標識 wen 分離、vi の H:đã と同型)。
- #49: `E:「da way」 F:「to」 G:「da airport」`(混入 C 脱落)。
- #55: `E:「two」 F:「cups」 B:「coffee」`。
- #69: `F:「one」 G:「long」 B:「letter」`、`D|E:「wen write」`→ `D:「wen」 E:「write」`(wen 分離)。
- #70: `D:「at」 E:「nine」 F:「PM」`(混入 B 脱落)。
- #77: `D:「by」 E:「da test」 B:「results」`。
- #80: `I:「one」 G:「valuable」 C:「experience」`。
- #52: `H:「wen」 C:「lose」`(wen=前動詞過去標識分離)。
- #53: `A|D:「in da garden」`→ `D:「in」 A:「da garden」`、`C|E:「stay blooming」`→ `E:「stay」 C:「blooming」`。
- #85: `B|E:「mo wata」`→ `E:「mo」 B:「wata」`。
- #35: `A|E:「My bradda」`→ `A:「My」 E:「bradda」`(my は独立語、en `A:My E:older brother` と一致。境界事例だが分割選好を採用)。

### tpi クレオールの分割 → APPLIED
- #43: `A:「long」 D:「dispela」 E:「haus kaikai」`。
- #45: `E:「Long」 F:「dispela」 A:「kantri」`。
- #46: `F:「wantaim」 B:「pren」 G:「bilong mi」`。(`E|H:「toktok」` は過去標識 overt なし → KEEP)
- #49: `E:「rot」 F:「bilong go long」 G:「ples balus」`。
- #55: `E:「tupela」 F:「kap」 B:「kopi」`。
- #69: `F:「wanpela」 G:「longpela」 B:「pas」`、`C|H:「long papamama bilong em」`→ `H:「long」 C:「papamama bilong em」`。(`D|E:「raitim」` 裸動詞 → KEEP)
- #70: `D:「long」 E:「nain kilok」 F:「long nait」`。
- #77: `D:「long」 B:「mak」 E:「bilong tes」`。
- #80: `B|F:「stadi long narapela kantri」`→ `B:「stadi」 F:「long narapela kantri」`、`C|G:「gutpela ekspiriens tru」`→ `G:「gutpela」 C:「ekspiriens tru」`。
- #28: `F:「wanpela gutpela」`→ `D:「wanpela」 F:「gutpela」`(冠詞 a=D / good=F)。
- #48: `B|E:「dispela muvi」`→ `E:「dispela」 B:「muvi」`(hwc 既分割に整合)。
- #51: `A|E:「Bubu meri bilong mi」`→ `A:「Bubu meri」 E:「bilong mi」`。
- #50: `A|E:「Dok bilong mi」`→ `A:「Dok」 E:「bilong mi」`。
- #53: `A|D:「long gaden」`→ `D:「long」 A:「gaden」`。
- #73: `B|F:「long bet bilong mi」`→ `F:「long」 B:「bet bilong mi」`、`C|G:「olgeta nait」`→ `G:「olgeta」 C:「nait」`。
- #85: `B|E:「planti wara moa」`→ `E:「planti」 B:「wara」 E:「moa」`(planti/moa が wara を挟む不連続 E。プロジェクトが許容する非隣接同役割。隣接重複なし)。
- #96: `D|E:「neks」` は the(D)に対応する overt 語なし → KEEP(レビュアー同意、現状維持)。

### vi_c / vi_s の所有分離 → APPLIED
- #51 vi_c: `A|E:「Bà tui」`→ `A:「Bà」 E:「tui」`(vi `A:Bà E:tôi` に整合、tui=中部所有人称で別語)。
- #51 vi_s: `A|E:「Bà tui」`→ `A:「Bà」 E:「tui」`。

### KEEP 確認(レビュアーと一致)
#89(vi系 can の pro-drop、否定活用複合)、tpi #46 toktok / #52 lusim / #69 raitim(いずれも過去標識 overt なしの裸動詞)、tpi #96 neks(冠詞 overt なし)はすべて分離語が存在しないため KEEP に同意。方言・クレオール自然さの指摘0件にも同意。

**ファイル状態: CLOSED — ラウンド4 の SPLIT 推奨をすべて適用、KEEP 類型に合意。**

---

## レビュアー再評価 — round 5 (@chunom_hanh)

ラウンド4の APPLIED 主張(hwc 13件・tpi 16件・vi_c/vi_s 各1件)と KEEP 同意を全件 `.wf_langmap_query.mjs` でライブ照合した。結論を先に述べると、**主張された分割はすべて実データに反映済み**で欠落はゼロだが、検証の過程で **#73 tpi に主語所有句 `A|E:「Pusi bilong mi」` の未分割が1件残っている**ことを発見した。これは開発側が #50/#51 で確立した分割慣例(`... bilong mi` の所有後置句を E に分離)と非整合であり、actionable な新規指摘とする。

### A. APPLIED 検証 — hwc (全件✓)

- **#43** ✓ `B:「Da food」 A:「at」 D:「dis」 E:「restaurant」 C:「stay ono」`。en 完全一致。
- **#45** ✓ `E:「In」 F:「dis」 A:「country」`。
- **#46** ✓ `A:「I」 H:「wen」 E:「talk」 F:「wit」 G:「my」 B:「friend」 …`。wen を H に分離(vi の H:đã と同型)、wit/my/friend を F/G/B に分割。隣接重複なし。
- **#49** ✓ `E:「da way」 F:「to」 G:「da airport」`(混入 C 脱落済み)。
- **#55** ✓ `E:「two」 F:「cups」 B:「coffee」`。
- **#69** ✓ `D:「wen」 E:「write」 F:「one」 G:「long」 B:「letter」`。wen 分離・冠詞/形容詞/名詞分割。
- **#70** ✓ `D:「at」 E:「nine」 F:「PM」`(混入 B 脱落済み)。
- **#77** ✓ `D:「by」 E:「da test」 B:「results」`。
- **#80** ✓ `I:「one」 G:「valuable」 C:「experience」`。en `I:「a」` と role I 一致(冠詞相当を I に立てた処理が en と整合、優れた対応)。
- **#52** ✓ `A:「I」 H:「wen」 C:「lose」 …`。wen=前動詞過去標識を H に分離。
- **#53** ✓ `D:「in」 A:「da garden」 E:「stay」 C:「blooming」`。前置詞分離 + 進行 stay 分離、en `E:are C:blooming` と整合。
- **#85** ✓ `E:「mo」 B:「wata」`。
- **#35** ✓ `A:「My」 E:「bradda」`。境界事例だが分割選好を採用、en `A:My E:older brother` と整合。妥当。

### B. APPLIED 検証 — tpi (全件✓)

- **#43** ✓ `A:「long」 D:「dispela」 E:「haus kaikai」`。
- **#45** ✓ `E:「Long」 F:「dispela」 A:「kantri」`。
- **#46** ✓ `F:「wantaim」 B:「pren」 G:「bilong mi」`。`E|H:「toktok」` は裸動詞(過去標識 overt なし)で KEEP、合意どおり。
- **#49** ✓ `E:「rot」 F:「bilong go long」 G:「ples balus」`。
- **#55** ✓ `E:「tupela」 F:「kap」 B:「kopi」`。
- **#69** ✓ `H:「long」 C:「papamama bilong em」` 分離、`F:「wanpela」 G:「longpela」 B:「pas」` 分割。`D|E:「raitim」` 裸動詞 KEEP、合意どおり。
- **#70** ✓ `D:「long」 E:「nain kilok」 F:「long nait」`。
- **#77** ✓ `D:「long」 B:「mak」 E:「bilong tes」`。
- **#80** ✓ `B:「stadi」 F:「long narapela kantri」 … G:「gutpela」 C:「ekspiriens tru」`。
- **#28** ✓ `D:「wanpela」 F:「gutpela」 E:「haus kaikai」`。冠詞 a=D を分離、en `D:a F:good` と整合。
- **#48** ✓ `E:「dispela」 B:「muvi」`。hwc 既分割に整合。
- **#51** ✓ `A:「Bubu meri」 E:「bilong mi」`。所有後置句を E に分離。
- **#50** ✓ `A:「Dok」 E:「bilong mi」`。同上。
- **#53** ✓ `D:「long」 A:「gaden」`。
- **#73** △ `F:「long」 B:「bet bilong mi」`(目的語側の前置詞分離)・`G:「olgeta」 C:「nait」` は適用済み✓。**ただし主語側 `A|E:「Pusi bilong mi」` が未分割のまま残る**(下記「新規指摘」参照)。
- **#85** ✓ `E:「planti」 B:「wara」 E:「moa」`。planti/moa が wara を挟む不連続 E、round2 で許容した非隣接同役割パターン。隣接重複なし。
- **#96** ✓ `D|E:「neks」` KEEP(the に対応する overt 冠詞語なし)。合意どおり。

### C. KEEP 確認 (合意)

#89(vi系 can の pro-drop)、tpi #46 toktok / #52 lusim / #69 raitim(裸動詞=過去標識 overt なし)、tpi #96 neks(冠詞 overt なし)はいずれも分離可能語が存在せず KEEP に同意。ライブ再確認済み。方言・クレオール自然さ指摘0件にも引き続き同意。

### D. 新規指摘 (NEW — actionable)

**N1. #73 tpi — 主語所有句 `A|E:「Pusi bilong mi」` の未分割(他文の確立済み慣例と非整合)【確実】**
**Current (live):** `A|E:「Pusi bilong mi」 D:「slip」 F:「long」 B:「bet bilong mi」 G:「olgeta」 C:「nait」`
**Problem:** 開発側はラウンド4で #50 `A|E:「Dok bilong mi」`→`A:「Dok」 E:「bilong mi」`、#51 `A|E:「Bubu meri bilong mi」`→`A:「Bubu meri」 E:「bilong mi」` と、**主語+後置所有句 `... bilong mi` を A/E に分離する慣例を自ら確立**した。#73 の主語も完全に同型(名詞 Pusi + 後置所有 bilong mi)であるにもかかわらず融合 `A|E` のまま残っている。さらに同 #73 内で en `E:「My」 A:「cat」`、vi `A:「Con mèo」 E:「của tôi」`、hwc `E:「My」 A:「cat」` はいずれも所有を独立分節化しており、tpi だけが主語所有句を融合させている。分割選好方針および「同一語族の変種は揃えて修正」の方針(MEMORY)に照らし、actionable な漏れ。
**Proposed fix:** `A:「Pusi」 E:「bilong mi」 D:「slip」 F:「long」 B:「bet bilong mi」 G:「olgeta」 C:「nait」`。分割後の role 列は A,E,D,F,B,G,C で隣接同役割の重複なし。(なお目的語側 `B:「bet bilong mi」` は #73 内に B が他になく、bilong mi を E に分けると非隣接 E が二つ生じるが、これは #85 同様プロジェクト許容範囲。最小確実修正としては主語 `A|E` の分離を必須とする。)

### スコアカード

- ラウンド4 APPLIED 主張: hwc 13件 + tpi 16件 + vi_c/vi_s 2件 = **31件すべてライブ照合で✓**(欠落・未反映ゼロ)。
- KEEP 同意: 6類型すべて再確認、引き続き同意。
- 撤回(CONCEDE)した自分の過去指摘(本ラウンド): **0件**(ラウンド4 は監査側=私の SPLIT 推奨で、開発側はほぼ全面受諾。撤回対象なし)。
- 新規指摘: **1件**(N1 #73 tpi 主語所有句の未分割)。

ラウンド4の分割粒度修正は質・網羅性とも高く、クレオール ⛔ 複合の機械分割は en と精密に整合している。唯一 #73 tpi の主語側 `A|E:「Pusi bilong mi」` が、開発側自身が #50/#51 で確立した分割慣例から漏れている。これは様式的好みではなく、確立済み慣例・同文内他言語・分割選好方針のすべてに反する具体的かつ確実な漏れであるため OPEN とする。

**ファイル状態: OPEN**
次にやること: #73 tpi の `A|E:「Pusi bilong mi」` を `A:「Pusi」 E:「bilong mi」` に分割(#50/#51 と同じ主語所有句分離慣例に合わせる)。

## 開発チーム回答 — round 6 (作業者)

### N1. #73 [tpi] 主語所有句 A|E「Pusi bilong mi」未分割 → APPLIED
ライブ確認: `A|E:「Pusi bilong mi」 D:「slip」 F:「long」 B:「bet bilong mi」 G:「olgeta」 C:「nait」`。レビュアー指摘どおり、開発側はラウンド4で #50 `A:「Dok」 E:「bilong mi」`、#51 `A:「Bubu meri」 E:「bilong mi」` と「主語名詞+後置所有句 bilong mi を A/E に分離」する慣例を自ら確立済み(ライブ再確認済み)。#73 の主語も完全に同型(名詞 Pusi + 後置所有 bilong mi)であり、融合 A|E のまま残るのは確立済み慣例・同文内他言語(en `E:My A:cat`、vi `A:Con mèo E:của tôi`、hwc `E:My A:cat`)・分割選好方針・MEMORY の fix-all-variants 方針すべてに反する取りこぼし。A:「Pusi」 E:「bilong mi」 に分割。分割後の主語側 role 列は A,E,D で隣接重複なし。目的語側 `B:「bet bilong mi」` の bilong mi は今回対象外(B 内に保持)で、E が非隣接で二つになるが #85 tpi(`E:planti B:wara E:moa`)同様プロジェクト許容の非隣接同役割であり問題なし。**(applied by orchestrator this round)** → A:「Pusi」 E:「bilong mi」 D:「slip」 F:「long」 B:「bet bilong mi」 G:「olgeta」 C:「nait」。

これにより本ファイルの残 actionable はゼロ。

---

## レビュアー再評価 — round 7 (@chunom_hanh)

ラウンド6で開発側が APPLIED と主張した唯一の項目(N1 #73 tpi 主語所有句の分割)を `.wf_langmap_query.mjs` でライブ照合し、確立済み慣例・同文内他言語との整合も再確認した。

### N1. #73 tpi 主語所有句 `A|E:「Pusi bilong mi」` の分割 → ✓ ACCEPT
**ライブ確認:** `A:「Pusi」 E:「bilong mi」 D:「slip」 F:「long」 B:「bet bilong mi」 G:「olgeta」 C:「nait」`。
- 主語の名詞 `Pusi`(=cat)= A、後置所有句 `bilong mi`(=my)= E に正しく分離されており、融合 `A|E` は解消済み。
- 同文内 en `E:「My」 A:「cat」`、vi `A:「Con mèo」 E:「của tôi」`、hwc `E:「My」 A:「cat」` のいずれも所有を独立分節化しており、tpi もこれに揃った。
- 開発側が #50 `A:「Dok」 E:「bilong mi」`・#51 `A:「Bubu meri」 E:「bilong mi」` で確立した「主語名詞+後置所有句 bilong mi を A/E に分離」する慣例とも完全に一致(ライブ #50/#51 で再確認済み)。
- 分割後の主語側 role 列は A,E,D で隣接同役割の重複なし。目的語側 `B:「bet bilong mi」` の bilong mi が B 内に残るため E が非隣接で二つになるが、これは #85 tpi(`E:planti B:wara E:moa`、round2 で許容)と同型のプロジェクト許容範囲。問題なし。

確実な誤りであった主語所有句の取りこぼしが、確立済み慣例どおりに正しく修正・検証された。

### 回帰チェック
ラウンド5までに検証済みの関連修正が回帰していないことをライブで再確認: #50 `A:「Dok」 E:「bilong mi」`、#51 vi_c/vi_s `A:「Bà」 E:「tui」`、#85 tpi `E:「planti」 B:「wara」 E:「moa」` いずれも維持されており、隣接同役割の重複も新規に生じていない。

### 新規指摘
なし。

### スコアカード
- ラウンド6 APPLIED 主張: **1件(N1 #73 tpi)→ ライブ照合で✓**(欠落・未反映ゼロ)。
- 本ラウンドで撤回(CONCEDE)した自分の過去指摘: **0件**(N1 は開発側が全面受諾済みのため撤回対象なし)。
- 新規指摘: **0件**。
- 残課題(actionable): **なし**。

ラウンド1〜6を通じ、Tok Pisin の述語標識 "i" 同型バグ(#5/#18/#87)、役割色ずれ(#2)、restaurant 訳語統一(#28/#43)、余分 mani(#99)、hevi 語義(#47)、ベトナム語南部方言の đã 分節(#46/#69)、vi_c lắm(#36)、las wik 分割(#84)、クレオールの ⛔ 複合分割(hwc/tpi 多数)、主語所有句の分離(#50/#51/#73)がすべて修正・検証済み。残る論点はいずれも開発側の妥当な反論(#85 不連続 E、#7 二重主語=外部典拠待ちの既知の限界、#93 季節語の自然な非対称、#100 任意の方言強化)か、正当な類型差による KEEP(#89 can の pro-drop、tpi 裸動詞の過去標識 overt なし、tpi 冠詞 overt なし)であり、actionable な確実誤りは残っていない。

**ファイル状態: CLOSED — 残課題なし**（#7 の二重主語的構造は外部典拠が得られれば再検討する既知の限界として引き続き記録）

## 包括スイープ — 群28 全複合セル一括判定 (作業者 round 9)

群28(vi, vi_c, vi_s, vi_nom, hwc, tpi)の残存複合セル全7件をライブ照合(.wf_langmap_query.mjs)で確認し一括判定した。

### 結果サマリ
- SPLIT: 2件
- KEEP: 4件

### SPLIT (2件)
- **#53 tpi `C|E:「i kamap pinis」` → `C:「i kamap」 E:「pinis」`**: 述語標識 i + 動詞 kamap が C(咲く)、完了相標識 pinis が E(継続/相 are)に対応。en/hwc が are/blooming を分割しており、pinis は分離可能な相トークン。分割後 …A:gaden, C:「i kamap」, E:「pinis」で隣接同役割なし。tpi の述語標識 i は #5/#18/#33/#87 の慣例どおり動詞側に残す。
- **#89 hwc `B|C:「no can」` → `C:「no」 B:「can」`**: 否定辞 no(C='t)と法助動詞 can(B=can)は別個のトークンで別役割。fix-all-variants: 同群 tpi が既に `C:「no」 B:「ken」` と分割済み、多数の兄弟(en_sco cannae 等を除く標準英語系・id・ru 等)も否定/法を分離。分割後 A,C,B,D で隣接同役割なし。

### KEEP (4件) — 真の不可分性
- **#46 tpi `E|H:「toktok」`**: toktok は単一語の裸動詞。Tok Pisin は過去を別トークンで標示せず(overt な H=過去標識が存在しない)、E と H が一語に内在。分割すべき第2トークンが物理的に存在しないため KEEP。
- **#52 tpi `C|H:「lusim」`**: lusim = lus(失う, C)+ 他動詞接尾辞 -im。-im は他動性標識であり過去標識ではない。過去(H)の overt な実現がなく、切り出せる時制トークンが無い。接尾辞 -im を C から剥がしても H には対応しないため KEEP。
- **#69 tpi `D|E:「raitim」`**: raitim = rait(書く, D)+ 他動詞接尾辞 -im。#52 と同型。過去(E)の overt トークンが無く、-im は時制ではないため分割不能。KEEP。
- **#96 tpi `D|E:「neks」`**: neks は「次の」(E)を表す単一トークン。限定詞 the(D)は Tok Pisin の "neks rot bung" に overt な冠詞として現れない(類型的欠落)。一語を二役割に割れないため KEEP。

---

## レビュアー再評価 — round 10 (@chunom_hanh)

round 9 の包括スイープ(SPLIT 2件・KEEP 4件)を `.wf_langmap_query.mjs` で全件ライブ照合し、SPLIT は en/兄弟言語の役割色との整合、KEEP は分離可能トークンの実在有無を再検証した。

### SPLIT 検証 (全件✓)

- **#53 tpi** ✓ ライブ: `B:「Ol plaua」 D:「long」 A:「gaden」 C:「i kamap」 E:「pinis」`。完了相標識 pinis を E に分離、述語標識 i は #5/#18/#87 の慣例どおり動詞 kamap 側(C)に残置。参照 en `E:「are」 C:「blooming」`・hwc `E:「stay」 C:「blooming」` と相(E)/動詞(C)の役割色が一致。role 列 B,D,A,C,E に隣接同役割の重複なし。正しい。
- **#89 hwc** ✓ ライブ: `A:「I」 C:「no」 B:「can」 D:「find」 E:「‌da」 F:「Wi-Fi」 G:「password」`。否定辞 no(C)と法助動詞 can(B)を分離。参照 en `B:「can」 C:「't」` の否定/法の役割色に整合し、同群 tpi の既分割 `C:「no」 B:「ken」` とも揃った(fix-all-variants 方針に合致)。role 列 A,C,B,D,E,F,G に隣接同役割の重複なし。正しい。

### KEEP 検証 (全件✓ — 真の不可分性に同意)

- **#46 tpi `E|H:「toktok」`** ✓ ライブ確認。裸動詞単一語、過去標識(bin)を伴わず H に対応する overt 形態素なし。分離すべき第2トークンが物理的に存在しない。KEEP 妥当。
- **#52 tpi `C|H:「lusim」`** ✓ ライブ確認。lus(失う)+他動詞接尾辞 -im。-im は他動性標識であって過去標識ではなく、H の overt 実現なし。剥がしても H に対応しないため分割不能。KEEP 妥当。
- **#69 tpi `D|E:「raitim」`** ✓ ライブ確認。rait(書く)+他動詞接尾辞 -im。#52 と同型、過去(E)の overt トークンなし。KEEP 妥当。
- **#96 tpi `D|E:「neks」`** ✓ ライブ確認。neks=「次の」単一トークン、限定詞 the(D)が overt な冠詞として現れない類型的欠落。一語を二役割に割れない。KEEP 妥当。

### 回帰チェック

round 7 までに検証済みの主要修正がライブで維持されていることを再確認: #73 tpi `A:「Pusi」 E:「bilong mi」`、#50 `A:「Dok」 E:「bilong mi」`、#85 tpi `E:「planti」 B:「wara」 E:「moa」`、#46 tpi の所有分離 `F:「wantaim」 B:「pren」 G:「bilong mi」` いずれも維持。今回の2分割により隣接同役割の重複が新規に生じていないことも全件確認した。

### 新規指摘

なし。残存複合セルは round 9 スイープで全7件が SPLIT/KEEP のいずれかに裁定済みで、SPLIT 2件はライブ反映を確認、KEEP 4件は分離可能トークン不在の真の不可分性として同意する。

### スコアカード

- round 9 SPLIT 主張: 2件 → 2件ともライブ照合で✓(欠落・未反映ゼロ)。
- round 9 KEEP 主張: 4件 → 4件とも真の不可分性として同意。
- 本ラウンドで撤回(CONCEDE)した自分の過去指摘: 0件(round 9 は開発側の包括スイープで、本ラウンドに新たな反論なし)。
- 新規指摘: 0件。
- 残課題(actionable): なし。

群28 は round 1〜9 を通じ、Tok Pisin の述語標識 "i" 同型バグ(#5/#18/#87)、役割色ずれ(#2)、restaurant 訳語統一(#28/#43)、余分 mani(#99)、hevi 語義(#47)、ベトナム語南部方言の đã 分節(#46/#69)、vi_c lắm(#36)、las wik 分割(#84)、クレオールの ⛔ 複合分割(hwc/tpi 多数)、主語所有句の分離(#50/#51/#73)、相標識 pinis 分離(#53)、否定/法分離(#89 hwc)がすべて修正・検証済み。残る融合は全て分離可能トークンを持たない真の不可分性(裸動詞=過去標識 overt なし、冠詞 overt なし)であり、actionable な確実誤りは残っていない。

**ファイル状態: CLOSED — 残課題なし**(#7 の二重主語的構造は外部典拠が得られれば再検討する既知の限界として引き続き記録)

## 兄弟整合性監査 — 群28 (作業者 round 12)

対象フラグ: #18 [hwc] が役割 D を重複（"stay"=コピュラ, "expensive"=形容述語）。

- **KEEP** #18 [hwc] D:「stay」 / D:「expensive」
  理由: en 参照自体が D を二重使用している（en A:This B:bag D:is C:too D:expensive）。コピュラと形容述語の双方が D を担うのは英語基盤の参照パターンそのもの。最近兄弟 pcm も同型（D:「dey」… D:「cost well well」）、英語系方言群 en_south/en_ie/en_sco/en_app/jam/sco/en_au 等も一様に D…D。よって hwc の D 重複は参照・近兄弟と完全整合し、誤割当ではない。D は当該文の segment set に定義済み。retag 不要。
  （フラグは vi 族＋tpi の狭い兄弟集合内での外れ値判定にすぎず、en/ja 参照を含めれば外れ値ではない。）

FIX: 0 / KEEP: 1

---

## レビュアー再評価 — round 13 (@chunom_hanh)

round 12 で開発側が判定した唯一の項目(#18 hwc の役割 D 重複=KEEP)を `.wf_langmap_query.mjs` でライブ照合し、en 参照および近兄弟との整合を再検証した。あわせて round 1〜10 で確定した主要修正の回帰チェックも実施した。

### 判定対象 — #18 hwc 役割 D 重複 → ✓ ACCEPT(KEEP に同意)

**ライブ確認:**
- en: `A:「This」 B:「bag」 D:「is」 C:「too」 D:「expensive」`
- hwc: `A:「Dis」 B:「bag」 D:「stay」 C:「too」 D:「expensive」`
- pcm(近兄弟): `A:「Dis」 B:「bag」 D:「dey」 C:「too」 D:「cost well well」`
- tpi: `A:「Dispela」 B:「bek」 D:「i dia」 C:「tumas」`
- vi: `B:「Cái túi」 A:「này」 C:「quá」 D:「đắt」`

開発側の KEEP 理由は妥当。en 参照自体が D を二重使用(コピュラ "is" + 形容述語 "expensive")しており、hwc の `D:「stay」 … D:「expensive」` はこのコピュラ+形容述語の二重 D パターンを忠実に写したもの。近兄弟 pcm も同型(`D:「dey」… D:「cost well well」`)。これは role 列上の非隣接同役割であって隣接重複ではなく、round 2 で許容を確認した非隣接同役割パターン(#85 tpi 等)・en 参照そのものに完全整合する。誤割当ではないため retag 不要、KEEP に同意する。元のフラグは「vi 族 + tpi」という狭い兄弟集合内での外れ値判定にすぎず、en/pcm を含めれば外れ値ではないという開発側の指摘も正しい。

### 回帰チェック(全件ライブ維持を確認)

round 1〜10 で確定した主要修正がすべて維持されていることをライブで再確認:
- #5 tpi `D:「i gutpela」 C:「tru」`、#87 tpi `D:「i gutpela」 C:「tru」`(述語標識 i の D 側残置)
- #2 tpi `B:「Nem」 A:「bilong mi」 D:「Tanaka」`(役割色ずれ修正)
- #99 tpi `D:「em i」 C:「hamas」`(余分 mani 削除済み)
- #73 tpi `A:「Pusi」 E:「bilong mi」`(主語所有句分離)
- #89 hwc `C:「no」 B:「can」`(否定/法分離)
- #53 tpi `C:「i kamap」 E:「pinis」`(相標識 pinis 分離)
- #46 vi_s `H:「đã」 E:「nói chuyện」`(過去標識 đã 復元)、#36 vi_c `A:「nhiều」`(lắm 削除済み、非隣接二重 A 解消)
いずれも回帰なし。新たな隣接同役割の重複も生じていない。

### 新規指摘

なし。残存複合セルは round 9 の包括スイープで全件 SPLIT/KEEP 裁定済み、round 12 の #18 hwc も KEEP が妥当。actionable な確実誤りは検出されなかった。

### 撤回(CONCEDE)

本ラウンドで撤回した自分の過去指摘: **0件**(round 12 は開発側の兄弟整合性監査による KEEP 判定で、本ラウンドに新たな反論・撤回対象なし)。なお過去ラウンドで撤回済みの指摘は #85(不連続 E、分割選好に逆行する併合提案)・#7(二重主語=外部典拠待ちの既知の限界)・#93(季節語の自然な非対称)・#100(任意の方言強化)の計4件で、いずれも開発側の妥当な反論を受け入れたもの。

### スコアカード

- round 12 判定: #18 hwc KEEP 1件 → ライブ照合で✓、KEEP に同意。
- 本ラウンドで撤回(CONCEDE)した自分の過去指摘: **0件**。
- 新規指摘: **0件**。
- 回帰: **0件**(主要修正すべて維持)。
- 残課題(actionable): **なし**。

群28 は round 1〜12 を通じ、Tok Pisin の述語標識 "i" 同型バグ(#5/#18/#87)、役割色ずれ(#2)、restaurant 訳語統一(#28/#43)、余分 mani(#99)、hevi 語義(#47)、ベトナム語南部方言の đã 分節(#46/#69)、vi_c lắm(#36)、las wik 分割(#84)、クレオールの ⛔ 複合分割(hwc/tpi 多数)、主語所有句の分離(#50/#51/#73)、相標識 pinis 分離(#53)、否定/法分離(#89 hwc)がすべて修正・検証済み。残る融合・重複はすべて分離可能トークンを持たない真の不可分性(裸動詞=過去標識 overt なし、冠詞 overt なし)か、en 参照そのものに整合する非隣接同役割(#18 hwc の D…D)であり、actionable な確実誤りは残っていない。

**ファイル状態: CLOSED — 残課題なし**(#7 の二重主語的構造は外部典拠が得られれば再検討する既知の限界として引き続き記録)
