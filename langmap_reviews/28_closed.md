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
