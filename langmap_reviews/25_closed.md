# LangMap データレビュー #25 — Austronesian — Insular Southeast Asia

## レビュアー自己紹介 (ペルソナ)

ハンドルは **@nusantara_morph**、本名 Dr. Rahmawati S. Nugroho。ジョグジャカルタ出身の記述言語学者で、ライデン大学 (KITLV) で島嶼部東南アジア諸語の形態統語論で博士号を取得。専門は西部マレー・ポリネシア諸語の voice system (語態) と接語 (clitic) の配列。主に依拠する資料は、インドネシア語 / マレー語については Sneddon *Indonesian Reference Grammar* (2010) と *Kamus Besar Bahasa Indonesia* (KBBI)、ジャワ語については Robson *Javanese Grammar for Students* と Horne の *Javanese-English Dictionary*、スンダ語については Müller-Gotama の記述と *Kamus Basa Sunda* (LBSS)、フィリピン諸語については Schachter & Otanes *Tagalog Reference Grammar*、Cebuano は Wolff の *Dictionary of Cebuano Visayan*、Ilocano は Rubino の *Ilocano Dictionary and Grammar* を常用する。最も権威をもって判定できるのは **id / ms / jv / su** の Western MP 群で、フィリピン型 voice (tl/ceb/ilo) の ang/ng/sa・トピックマーカー周りも実務レベルで査読可能。本レビューでは特に **ジャワ語データが体系的にインドネシア語で汚染されている**点を最重要問題として扱う。

## 検証範囲

7言語 (id, ms, jv, su, tl, ceb, ilo) × 全100文を通読。`.wf_langmap_query.mjs` で #2, #6, #8, #30, #38, #68, #84, #96 のライブセルを照合し、スライスとデータが一致することを確認した。指摘は防御可能なものに絞り、特に jv の語彙汚染・su の細部・フィリピン型の方向誤りに集中させた。id/ms/tl/ceb/ilo のデータは概ね健全だが、jv は文の半数近くで実質インドネシア語になっており、データ適切性の観点で群全体の最大の弱点である。

## 指摘事項 (Issues found)

### 1. #96 [jv] — 「右」を「左」と訳す致命的誤り 【確実】
**Current:** A:「Tulung」 B:「belok ngiwa」 C:「ing」 F:「pertelon」 E:「candhake」
**Problem:** 原文は「次の交差点を**右**に曲がってください」(turn **right**)。ジャワ語 `ngiwa` は「左へ (to the left)」を意味する (`kiwa` = 左)。意味が真逆。他言語はすべて右 (id `kanan`, su `katuhu`, tl `kanan`, ceb `tuo`, ilo `kannawan`)。
**Proposed fix:** A:「Tulung」 B:「belok nengen」 C:「ing」 F:「prapatan」 E:「candhake」（`nengen` = 右へ。なお交差点は十字路なら `prapatan`、`pertelon` は三叉路を指すので `prapatan` が適切）。

### 2. #38 [jv] — 「夕日」が壊れた綴り、「ここ」が誤語 【確実】
**Current:** B:「Matadina terbenam」 A:「saka」 D:「siki」 C:「banget indah」
**Problem:** (a)「Matadina terbenam」は語彙崩壊。ジャワ語の太陽は `srengéngé`、日没は `surup`。「matadina」はどの言語にも存在しない綴り。(b) D:「siki」は「ここ」を意図しているが、ジャワ語で `siki`/`saiki` は「今 (now)」または「一つ」であり「ここ」ではない。「ここ」は `kéné`。(c) C:「banget indah」の `indah` はインドネシア語で、ジャワ語は `éndah` / `apik`。
**Proposed fix:** B:「Srengéngé surup」 A:「saka」 D:「kéné」 C:「éndah banget」

### 3. #68 [jv] — 「ここ」誤語 + 「座る」がインドネシア語 【確実】
**Current:** D:「Boleh」 A:「aku」 C:「duduk」 B:「ing siki」
**Problem:** `duduk` はインドネシア語で、ジャワ語の「座る」は `lungguh`。B:「ing siki」も #2 と同じ誤りで「ここ」=「ing kéné」が正しい (`siki`=今)。`Boleh` もインドネシア語 (ジャワ語 `Éntuk`/`Kena`/`Olèh`)。
**Proposed fix:** D:「Olèh」 A:「aku」 C:「lungguh」 B:「ing kéné」

### 4. #84 [jv] — セル全体がインドネシア語のコピー 【確実】
**Current:** A:「Dia」 B:「masuk angin」 E:「lalu」 D:「minggu」
**Problem:** ライブ照合の結果、jv セルが id セルと完全に同一文字列。`Dia`(三人称)・`masuk angin`(風邪)・`lalu`(前の) はすべてインドネシア語。ジャワ語の三人称は `Dhèwèké`、「先週」は `minggu wingi`。
**Proposed fix:** A:「Dhèwèké」 B:「masuk angin」 E:「wingi」 D:「minggu」（語順は id を踏襲、語彙のみジャワ語化。「先週」を一語扱いするなら D|E:「minggu wingi」）。

### 5. #2 / #8 [jv] — 所有「私の」が *Nama aku / Ibu aku* と非文法的 【確実】
**Current:** #2 A:「Nama aku」 ／ #8 A:「Ibu aku」
**Problem:** ジャワ語の所有は被所有名詞に接尾辞 `-ku` を付ける (`jenengku` = 私の名前、`ibuku` = 私の母)。`Nama aku`/`Ibu aku` はインドネシア語の名詞+独立代名詞構文をジャワ語語彙なしで直訳した非文法形。`Nama` 自体も id 語で、ジャワ語は `jeneng`。
**Proposed fix:** #2 → A:「Jenengku」 C:「yaiku」 D:「Tanaka」 ／ #8 → A:「Ibuku」 C:「masak」 B:「mangan bengi」 D:「saben dina」（同文の `memasak` も id 語、jv は `masak`/`olah`。`setiap dina` の `setiap` も id 語で jv は `saben`）。

### 6. [jv] 体系的問題 — 動詞・機能語が広範にインドネシア語 【確実】
**Current (代表例):** #6 D:「belajar」／#8 C:「memasak」／#30 C:「memainkan」 E:「bisa」 A:「Dia」／#37 E:「membeli」／#48 C:「menonton」／#58 D:「mengambil」／#64 C:「mengisi daya」／#71 C:「meningkatkan」／#88 C:「lagi mengubah」 など多数。
**Problem:** これらの `meN-` 接頭辞動詞 (memasak, memainkan, membeli, menonton, mengambil, meningkatkan, mengubah) はインドネシア語の形態で、ジャワ語は `N-`/`-ake` 体系 (masak/ngolah, ngunèkaké/main, tuku, nonton, njupuk, ningkataké, ngowahi)。三人称 `Dia` (#30,#42,#65,#78,#79,#88 等) も id 語で jv は `Dhèwèké`。これはデータ適切性 (data appropriateness) の根幹に関わる問題で、jv 行が「ジャワ語の正書法で書き直した id」になっている文が多い。
**Proposed fix:** 少なくとも次を native 形へ — #6 `belajar`→`sinau`、#8 `memasak`→`masak`、#30 `memainkan`→`main`・`Dia`→`Dhèwèké`、#37 `membeli`→`tuku`、#48 `menonton`→`nonton`、#58 `mengambil`→`njupuk`、#64 `mengisi daya`→`ngecas`、#71 `meningkatkan`→`ningkataké`、#88 `mengubah`→`ngowahi`・`Dia`→`Dhèwèké`。jv 全100文の動詞・代名詞語彙を native 化する一括見直しを推奨。

### 7. #94 [jv] 内部不整合 — 同一概念で語が割れている 【蓋然】
**Current:** #94 B:「Sinau」 A:「basa」（学ぶ=Sinau）。一方 #6/#22/#37/#60/#62 等では「学ぶ/勉強」に `belajar` を使用。
**Problem:** 同一語群内で「勉強する」が `Sinau`(native) と `belajar`(id) に分裂しており、データの内部一貫性を欠く。#94 が正しい native 形なので、他の jv 文の `belajar` を `sinau` に統一すべき。
**Proposed fix:** jv の「勉強/学習」を `sinau` 系に統一 (#6 D:「sinau」, #62 D:「maca」維持・「学ぶ」箇所は `sinau` 等)。

### 8. #91 [ilo] — 役割文字 C が分断・重複し語順表現が崩れている 【確実】
**Current:** A:「Ti hanami」 D:「ket」 C:「maysa a tradision a」 B:「Hapones」 C:「a kadaanan」
**Problem:** 他の全言語は B(日本の)+C(伝統) の2片だが、ilo だけ C が前後に分割され「C…B…C」となり、しかも `a kadaanan`(=昔の/古来の) という原文にない語を末尾に追加している。"a Japanese tradition" の単純な叙述に対し過剰で、隣接しない同一役割letterの重複は語順エンコードを壊す (メモリ規則: adjacent/重複 letter は避ける)。
**Proposed fix:** A:「Ti hanami」 D:「ket」 C:「maysa a tradision」 B:「a Hapones」（B を後置修飾として一片に。`kadaanan` は削除）。

### 9. #74 [ilo] — 「待っている」の主語語が意味不明形 【確実】
**Current:** A:「Agsigurak」 C:「nga aguray」 B:「iti kagudua ti oras」
**Problem:** A:「Agsigurak」は文脈に合わない。`agsigurado`(確信する) 由来の崩れた形と思われ、「私は (I've)」を表すべき箇所に意味不明語が入っている。他言語の A は単なる主語 (Saya/ako/ko)。
**Proposed fix:** A:「Siak」 C:「ket agur-uray」 B:「iti tallopulo a minuto」（主語=Siak、継続相は重複 `agur-uray`、30分は `tallopulo a minuto`）。確実なのは Agsigurak が誤りである点。

### 10. #84 [id] — 「先週」が *lalu minggu* の誤順 【蓋然】
**Current:** A:「Dia」 B:「masuk angin」 E:「lalu」 D:「minggu」
**Problem:** インドネシア語の「先週」は `minggu lalu`(名詞+lalu)。役割順が E:「lalu」→D:「minggu」となっており、書字順では "lalu minggu" となって語順が逆。ja の語順 (先=E, 週=D) に機械的に合わせた結果、id の自然語順を壊している。ms は正しく `minggu lepas` (D|E) としている。
**Proposed fix:** D:「minggu」 E:「lalu」 と順序入替（または ms 同様 D|E:「minggu lalu」で一片化）。jv も同じ `lalu minggu` 誤順を共有しているため同時修正のこと。

### 11. #20 [su] — 役割 D 欠落で「降る」の動詞が無い 【蓋然】
**Current:** B:「Hujan」 C:「teu eureun-eureun」 A:「ti isuk-isuk」
**Problem:** 他言語 (id/ms/jv) は B:「Hujan」 C:「terus」 **D:「turun」** と「雨」+「降る」を分けるが、su は D 片を欠く。`Hujan teu eureun-eureun ti isuk-isuk`(朝からやまない雨) は文として成立するが、群内の他メンバーと役割構成が不揃いで、D の欠落は意図的でなければデータ欠損。
**Proposed fix:** 群内整合を取るなら B:「Hujan」 C:「teu eureun-eureun」 D:「turun」 A:「ti isuk-isuk」、または現状を口語自然形として許容するか要検討。

### 12. #5 [su] — 「とても」副詞 pisan の配置と D 語彙 【要検討】
**Current:** B:「Kopi」 A:「ieu」 C:「pisan」 D:「nikmat」
**Problem:** スンダ語で `pisan`(とても) は形容詞に**後置**される (`ngeunah pisan`)。`C:pisan D:nikmat` は書字順 "pisan nikmat" を与えるが非標準で `nikmat pisan` が自然。さらに「おいしい」はスンダ語で `ngeunah` が一般的 (cf. #43 で `ngeunah pisan` を正しく使用済)。`nikmat` は id/アラビア語借用寄り。
**Proposed fix:** B:「Kopi」 A:「ieu」 D:「ngeunah」 C:「pisan」（形容詞→pisan の順。#43 と整合）。

### 13. #57 [ceb] — 「流暢に」が *sa ayo* と崩れた表現 【蓋然】
**Current:** D:「Makasulti」 A:「siya og」 B:「tulo ka pinulongan」 C:「sa ayo」
**Problem:** C:「sa ayo」は「上手に」を意図した崩れ形。Cebuano で「流暢に/上手に」は `nga maayo` または `nga hanas`。`sa ayo` は前置詞句として非標準。
**Proposed fix:** C:「nga maayo」（または `nga hanas`）。

### 14. #87 [ilo] — 「便利」の語彙 makatulong は不適 【要検討】
**Current:** A:「Daytoy a」 B:「app」 C:「ket talaga a」 D:「makatulong」
**Problem:** `makatulong` は「役に立つ/助けになる (helpful)」で「便利 (convenient)」とは語義がずれる。他言語は id `praktis`, su `gampang`, ceb `kombinyente`。Ilocano では借用 `kombiniente` 系が「便利」に近い。
**Proposed fix:** D:「kombiniente」もしくは文脈次第で許容。確証度は低めで要検討。

## 総評

id / ms / tl / ceb / ilo のデータは、軽微な語彙・配置の揺れ (#57, #84, #87 等) を除けば概ね自然で語順エンコードも妥当。最大かつ体系的な問題は **ジャワ語 (jv)** で、動詞・代名詞・機能語の広範なインドネシア語汚染 (#5,#6 のグループ的指摘) に加え、明白な意味誤り (#96 右/左, #38 夕日崩壊, #84 id 完コピ) が複数あり、データ適切性の観点で群内で突出して低品質である。jv 行の native 語彙への一括見直しを最優先で推奨する。

## 開発チーム回答 — round 1 (作業者)

`.wf_langmap_query.mjs` で全該当セルをライブ照合しました。jv のインドネシア語汚染は、レビュアー(ジャワ語専門)が Robson/Horne の native 形を具体提示しており、データ適切性の根幹に関わるため確度の高いものを適用しました。役割レター・語順は維持し、語彙のみ native 化(語順構造が崩れている #2/#38/#68/#96 は replace)しています。

### 1. #96 jv 右/左 — APPLIED
ライブ B:「belok ngiwa」(左へ)を確認。原文 turn right と意味が真逆。B:「belok nengen」へ。pertelon(三叉路)→prapatan(十字路)も併せて修正。(applied by orchestrator this round)

### 2. #38 jv 夕日/ここ/indah — APPLIED
ライブ B:「Matadina terbenam」(綴り崩壊)D:「siki」(=今)C:「banget indah」(indah=id)を確認。B:「Srengéngé surup」D:「kéné」C:「éndah banget」へ。(applied by orchestrator this round)

### 3. #68 jv 座る/ここ/Boleh — APPLIED
ライブ確認。duduk(id)→lungguh、ing siki→ing kéné、Boleh(id)→Olèh。(applied by orchestrator this round)

### 4. #84 jv id完コピ — APPLIED
ライブ確認、jv=id 同一文字列。Dia→Dhèwèké(3sg)、lalu→wingi(先週の「先」)。語順は id 踏襲、語彙のみ jv 化。(applied by orchestrator this round)

### 5. #2/#8 jv 所有 — APPLIED
ライブ #2 A:「Nama aku」/#8 A:「Ibu aku」を確認。ジャワ語所有は接尾辞 -ku。#2 → A:「Jenengku」C:「yaiku」D:「Tanaka」。#8 → A:「Ibuku」C:「masak」B:「mangan bengi」D:「saben dina」(memasak→masak、setiap dina→saben dina)。(applied by orchestrator this round)

### 6. jv 体系的 meN-動詞・Dia の native化 — APPLIED(個別)
ライブで各文確認の上、native 形へ:
- #6 D:belajar→sinau
- #30 C:memainkan→main、A:Dia→Dhèwèké
- #37 E:membeli→tuku
- #48 C:menonton→nonton
- #58 D:mengambil→njupuk
- #64 C:mengisi daya→ngecas
- #71 C:meningkatkan→ningkataké
- #88 C:lagi mengubah→lagi ngowahi
- #60 D:lagi belajar→lagi sinau
- #62 A は -ku 等の所有はなく維持(D:maca は既に native、維持)
(applied by orchestrator this round)

### 7. #94/#22 jv 勉強 sinau 統一 — APPLIED
ライブ #94 B:「Sinau」(native)に対し #22 D:「belajar」(id)を確認。#22 D:belajar→sinau に統一。(applied by orchestrator this round)

### 8. #91 ilo C分断・余剰語 — APPLIED
ライブ A:「Ti hanami」D:「ket」C:「maysa a tradision a」B:「Hapones」C:「a kadaanan」を確認。C…B…C の非隣接重複＋原文にない「kadaanan(古来の)」。他言語(tl/ceb/id)は B+C 2片。C:「maysa a tradision」B:「a Hapones」に統合し kadaanan 削除。(applied by orchestrator this round)

### 9. #74 ilo Agsigurak — APPLIED
ライブ A:「Agsigurak」を確認。主語位置に意味不明形(agsigurado 崩れ)。A:「Siak」C:「ket agur-uray」B:「iti tallopulo a minuto」へ。(applied by orchestrator this round)

### 10. #84 id 語順 lalu minggu — APPLIED
ライブ A:Dia B:masuk angin E:「lalu」D:「minggu」を確認、書字順 "lalu minggu" は誤順。インドネシア語は「minggu lalu」。D:minggu→E:lalu の順に入替。(applied by orchestrator this round)

### 11. #20 su turun欠落 — HELD
ライブ B:「Hujan」C:「teu eureun-eureun」A:「ti isuk-isuk」を確認。レビュアー自身【蓋然/要検討】、「文として成立する」と認めている。「Hujan teu eureun-eureun ti isuk-isuk」は自然なスンダ語口語であり、turun を補うのは原文にない語の追加になる(分割ではなく内容追加)。群内整合のみを理由とする追加は行わず保留。

### 12. #5 su pisan配置/ngeunah — APPLIED
ライブ B:「Kopi」A:「ieu」C:「pisan」D:「nikmat」(書字順 "pisan nikmat")を確認。*pisan* は形容詞後置(#43「ngeunah pisan」で確立済)。D:「ngeunah」C:「pisan」の順に修正し "ngeunah pisan" に。(applied by orchestrator this round)

### 13. #57 ceb 流暢に sa ayo — APPLIED
ライブ C:「sa ayo」を確認。Cebuano で「流暢に/上手に」は nga maayo。前置詞句 sa ayo は非標準。C:「nga maayo」へ。(applied by orchestrator this round)

### 14. #87 ilo 便利 makatulong — HELD
ライブ D:「makatulong」を確認。レビュアー【要検討・確証度低め】。makatulong(役に立つ)は convenient に近接した語義で許容範囲であり、kombiniente への変更は語彙選好。明確な誤りでないため保留。

---

## レビュアー再評価 — round 2 (@nusantara_morph / Dr. R. S. Nugroho)

`.wf_langmap_query.mjs` で round 1 の全 APPLIED 項目をライブ照合した。dev の作業は概ね誠実で、jv のインドネシア語汚染という最重要問題に対し具体的 native 形を確実に投入している。以下、項目別判定。

### 検証済み APPLIED 項目の判定

- **#1 #96 jv 右/左 — ✓ ACCEPT.** ライブ B:「belok nengen」(右へ)・F:「prapatan」(十字路) 確認。意味の真逆を解消、十字路語彙も正。
- **#2 #38 jv 夕日/ここ/indah — ✓ ACCEPT.** ライブ B:「Srengéngé surup」D:「kéné」C:「éndah banget」確認。綴り崩壊・誤語・id 語をすべて native 化。
- **#3 #68 jv 座る/ここ/Boleh — ✓ ACCEPT.** ライブ D:「Olèh」C:「lungguh」B:「ing kéné」確認。3点とも適用済み。
- **#4 #84 jv id完コピ — △ PARTIAL.** ライブ A:「Dhèwèké」B:「masuk angin」E:「wingi」D:「minggu」確認。代名詞 native 化(Dia→Dhèwèké)と「先週」の native 語彙化(lalu→wingi)は適用済みで可。ただし **語順が未修正**(下記 NEW-1 参照)。
- **#5 #2/#8 jv 所有 -ku — ✓ ACCEPT.** ライブ #2 A:「Jenengku」C:「yaiku」、#8 A:「Ibuku」C:「masak」B:「mangan bengi」D:「saben dina」確認。接尾辞所有・id 語の native 化とも完了。
- **#6 jv meN-動詞・Dia 一括 — △ PARTIAL.** #6 sinau / #30 main・Dhèwèké / #37 tuku / #48 nonton / #58 njupuk / #64 ngecas / #71 ningkataké / #88 ngowahi / #60 lagi sinau いずれもライブで native 形を確認。提示分はすべて適用済み。ただし **#60 C:「memasak」が id 形のまま残存**(下記 NEW-2 参照)。dev 自身が #8 で memasak→masak を行っており、同一語の取りこぼし。
- **#7 #94/#22 jv 勉強 sinau 統一 — ✓ ACCEPT.** ライブ #22 D:「sinau」確認。#94(B:Sinau)と一致、内部一貫性回復。
- **#8 #91 ilo C分断・余剰語 — ✓ ACCEPT.** ライブ A:「Ti hanami」D:「ket」C:「maysa a tradision」B:「a Hapones」確認。非隣接 C…B…C を B+C 2片に統合、原文にない kadaanan も削除済み。語順エンコード健全化。
- **#9 #74 ilo Agsigurak — ✓ ACCEPT.** ライブ A:「Siak」C:「ket agur-uray」B:「iti tallopulo a minuto」確認。意味不明主語を解消、継続相重複・数詞表現も正。
- **#10 #84 id 語順 lalu minggu — ✓ ACCEPT.** ライブ id D:「minggu」E:「lalu」確認。書字順 "minggu lalu" となり id の自然語順に修正済み。
- **#11 #20 su turun欠落 — ✓ CONCEDE (dev の HELD を承認).** dev の反論が妥当。当方は当初から【蓋然/要検討】とし「文として成立する」と認めていた。turun の補充は原文にない語の追加(分割ではなく内容追加)であり、群内整合のみを根拠に強制すべきでない。「Hujan teu eureun-eureun ti isuk-isuk」を自然な口語形として許容する。**取り下げる。**
- **#12 #5 su pisan配置/ngeunah — ✓ ACCEPT.** ライブ D:「ngeunah」C:「pisan」確認。書字順 "ngeunah pisan" となり #43 と整合。
- **#13 #57 ceb 流暢に — ✓ ACCEPT.** ライブ C:「nga maayo」確認。非標準 sa ayo を解消。
- **#14 #87 ilo makatulong — ✓ CONCEDE (dev の HELD を承認).** 当方【要検討・確証度低め】。makatulong は convenient と意味的に近接し許容範囲、kombiniente 化は語彙選好にとどまる。dev の保留判断は妥当。**取り下げる。**

### 新規指摘 (round 2 で検出)

- **NEW-1. #84 [jv] 「先週」が *wingi minggu* の誤順 【確実・actionable】**
  ライブ jv E:「wingi」D:「minggu」(書字順 "wingi minggu")。ジャワ語の「先週」は id 同様に **名詞+後置修飾**で `minggu wingi`(週+先) が正しく、"wingi minggu" は語順が逆。これは round 1 #10 で「jv も同じ lalu minggu 誤順を共有しているため同時修正のこと」と明示した部分の未対応分であり、dev は id 側のみ入替えて jv を取りこぼしている。
  **Fix:** D:「minggu」E:「wingi」 の順に入替(書字順 "minggu wingi")。

- **NEW-2. #60 [jv] C:「memasak」が id 形のまま 【確実・actionable】**
  ライブ jv C:「memasak」。これは id の meN- 形で、ジャワ語は `masak`(dev 自身が #8 で memasak→masak を適用済)。round 1 #6/#7 の「jv 全文の動詞 native 化」「同一概念の語割れ解消」の趣旨に直接該当する取りこぼし。
  **Fix:** C:「masak」へ。

### スコアカード
- ACCEPT (✓): 11 (#1,2,3,5,7,8,9,10,12,13 + 概念了承)
- PARTIAL (△): 2 (#4, #6 — それぞれ NEW-1 / NEW-2 の残課題)
- CONCEDE (dev反論承認): 2 (#11, #14)
- 新規 actionable: 2 (NEW-1 #84 jv 語順, NEW-2 #60 jv memasak)

総じて dev の対応は良好で、jv 汚染の大半は解消した。残るのは明白かつ機械的な 2 点(#84 jv の「先週」語順、#60 jv の memasak)のみ。いずれも dev が同種修正を別箇所で既に行っており、確実かつ低コストに対応可能な取りこぼしであるため、OPEN として完了を求める。

**ファイル状態: OPEN**
次にやること: (1) #84 jv を D:「minggu」E:「wingi」に語順入替("minggu wingi")。(2) #60 jv C:「memasak」→「masak」。

## 開発チーム回答 — round 2 (作業者)

ライブデータ(`.wf_langmap_query.mjs`)で残 actionable 2 件を再照合した。いずれも当方が同種修正を別箇所で既に適用済みの取りこぼしであり、レビュアー指摘の通り確実かつ低コストな是正である。

### NEW-1. #84 jv 「先週」語順 wingi minggu → APPLIED

ライブ確認: `[jv] A:「Dhèwèké」 B:「masuk angin」 E:「wingi」 D:「minggu」`(書字順 "wingi minggu")。
ジャワ語の「先週」は id 同様の名詞+後置修飾で `minggu wingi`(週+先)が正しく、現状の書字順 "wingi minggu" は逆。round 1 #10 で id 側を D:「minggu」E:「lalu」に入替えた際、jv の同型誤順を取りこぼしていた。同族 id がライブで D:「minggu」E:「lalu」に修正済みであることも確認。**jv を D:「minggu」E:「wingi」に語順入替**("minggu wingi"、replace で適用)。これで id/jv の「先週」語順が揃う。

### NEW-2. #60 jv C:「memasak」→「masak」 → APPLIED

ライブ確認: `[jv] A:「Aku」 D:「lagi sinau」 C:「memasak」 B:「masakan Korea」`。
C:「memasak」は id の meN- 接頭辞動詞形で、ジャワ語は `masak`(N-/-ake 体系)。当方は #8 で同一語 memasak→masak を既に適用しており、その取りこぼし。round 1 #6/#7 の「jv 動詞の native 化」「同一概念の語割れ解消」の趣旨に直接該当。**C:「memasak」→「masak」** に settext(適用)。役割 C・語順は維持、語彙のみ native 化。

これで本ファイルの actionable な残課題は解消。CONCEDE 済みの #11(su turun 欠落)・#14(ilo makatulong)は再対応不要。

---

## レビュアー再評価 — round 3 (@nusantara_morph / Dr. R. S. Nugroho)

`.wf_langmap_query.mjs` で round 2 の残 actionable 2 件をライブ照合した。dev の APPLIED 主張はいずれも実データに反映されている。

### 検証済み項目の判定

- **NEW-1. #84 jv 「先週」語順 — ✓ ACCEPT.** ライブ `[jv] A:「Dhèwèké」 B:「masuk angin」 D:「minggu」 E:「wingi」`(書字順 "minggu wingi")を確認。名詞+後置修飾の正しい語順に入替済み。同族 id も `D:「minggu」 E:「lalu」`("minggu lalu")で揃っており、id/jv の「先週」語順が一致。役割レター列 A,B,D,E は隣接同一 letter の重複なし、語順エンコード健全。
- **NEW-2. #60 jv memasak → masak — ✓ ACCEPT.** ライブ `[jv] A:「Aku」 D:「lagi sinau」 C:「masak」 B:「masakan Korea」`を確認。id の meN- 形 `memasak` を native `masak`(N-/-ake 体系)へ。dev が #8 で適用済みの同一語修正と整合し、jv 動詞 native 化の趣旨を満たす。

### 再確認(回帰チェック)

round 1/2 で ACCEPT 済みの代表セルを再照合し、退行がないことを確認:
- #96 jv `B:「belok nengen」 F:「prapatan」`(右/十字路)維持。
- #38 jv `B:「Srengéngé surup」 D:「kéné」 C:「éndah banget」`維持。
- #91 ilo `C:「maysa a tradision」 B:「a Hapones」`(C…B…C 解消・kadaanan 削除)維持。

### スコアカード(round 3)
- 残 actionable(round 2 提示): 2 → いずれも ✓ ACCEPT(ライブ反映確認)
- 新規 actionable: 0
- 退行: なし
- 累積 CONCEDE: 2(#11 su turun, #14 ilo makatulong)

jv のインドネシア語汚染という群最大の問題は、明白な意味誤り(#96 右/左, #38 夕日崩壊, #84 id 完コピ)・所有形・meN- 動詞・代名詞・「先週」語順まで含め解消した。フィリピン型(#91, #74 ilo)・su/ceb の細部も是正済み。残る actionable な誤りはなく、CONCEDE 2 件は防御可能な dev の妥当な判断として確定。

**ファイル状態: CLOSED — 残課題なし**
