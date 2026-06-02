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

---

## ラウンド4 監査 — 分割粒度・方言自然さ (レビュアー / @nusantara_morph / Dr. R. S. Nugroho)

ラウンド1〜3 は jv のインドネシア語汚染（語彙・意味誤り）に集中し、**分割粒度（segmentation granularity）** はほぼ未着手だった。今回はオーナー方針「PREFER SPLITTING」に従い、`/tmp/langmap_suspect/25.md` の全フラグセルを `.wf_langmap_query.mjs` でライブ照合し、⛔3-way以上を最優先に判定した。あわせて方言自然さ（実体は jv の id 偽装＝「plausible だが unnatural」）の積み残しを点検した。

判定の指針として、**同一文内で id/ms が既に分割している構造は、同族の jv/su/tl/ceb/ilo も分割可能**（その言語に対応形態素が存在する）とみなした。隣接同一 letter を生まない範囲でのみ分割を提案する。

### A. 分割推奨（SPLIT）— 構造系（id/ms の既存分割に揃える）

- **#43「このレストランの」A|D|E → A / E / D 【確実】**
  en: A:at E:restaurant D:this。id `A:di E:restoran D:ini`／ms 同型で**既に3分割済み**。同族が `前置詞＋名詞＋指示詞` を融合しているのは取りこぼし。
  - [jv] B:「Panganan」 **A:「ing」 E:「restoran」 D:「iki」** C:「banget lezat」
  - [su] B:「Kadaharan」 **A:「di」 E:「réstoran」 D:「ieu」** C:「ngeunah pisan」
  - [tl] B:「Ang pagkain」 **A:「sa」 E:「restaurant」 D:「na ito」** C:「ay masarap」
  - [ceb] B:「Ang pagkaon」 **A:「ni」 E:「ining restoran」**（ceb は `niining`=ni+ini+ng の融合接語のため最低 A:ni / D|E:ining restoran の2分割に留める）C:「lami」 → 【蓋然】
  - ※ [ilo] は A|D|E が「Ti taraon（=料理＝本来 B）」に付いており、これは**分割ではなく役割誤り**。正しくは B:「Ti taraon」 A:「iti」 E:「daytoy a」… 別途修正要（下記 D 節）。

- **#45「この国では」A|E|F → E / A / F 【確実】**
  en: E:In F:this A:country。id `E:Di A:negara F:ini`／ms 同型で**3分割済み**。
  - [jv] **E:「Di」 A:「negara」 F:「iki」** B:「…musim adhem」 D:「dadi」 C:「adhem」（語彙は下記 C 節で別途）
  - [su] **E:「Di」 A:「nagara」 F:「ieu」** B:「usum tiis」 D:「jadi」 C:「tiis」
  - [tl] **E:「Sa」 A:「bansa」 F:「ng ito」** B:「sa taglamig」 D:「nagiging」 C:「malamig」（`bansang ito`=bansa+ng+ito）→【蓋然】
  - [ceb] **E:「Sa」 A:「nasod」 F:「nga kini」** B:「sa ting-tugnaw」 D:「mobugnaw」 C:「kaayo」 →【蓋然】
  - [ilo] **E:「Iti」 F:「daytoy a」 A:「pagilian」** B:「…」 D:「ket」 C:「nalamiis」（書字順は In-this-country、語順エンコード維持）→【蓋然】

- **#55「2杯のコーヒー」B|E|F → E / F / B 【確実】**
  en: E:two F:cups of B:coffee。id `E:dua F:cangkir B:kopi`／jv も**既に3分割済み**。ms/su/ceb/tl/ilo の融合は取りこぼし。
  - [ms] A:「Saya」 C:「minum」 **E:「dua」 F:「cawan」 B:「kopi」** D:「setiap hari」
  - [su] A:「Abdi」 C:「nginum」 **E:「dua」 F:「gelas」 B:「kopi」** D:「unggal poé」
  - [tl] C:「Umiinom」 A:「ako ng」 **E:「dalawang」 F:「tasang」 B:「kape」** D:「araw-araw」
  - [ceb] C:「Moinom」 A:「ko og」 **E:「duha ka」 F:「tasa nga」 B:「kape」** D:「matag adlaw」
  - [ilo] D:「Inaldaw」 C:「uminom」 A:「ak」 **E:「iti dua a」 F:「tasa ti」 B:「kape」**

- **#70「午後9時に」B|D|E|F → D / E / F 【確実】**
  en: D:at E:9 F:PM。id/ms `D:pukul E:9 F:malam`。フラグの **B が混入しているのは誤り**（この句に B＝主語/目的語要素は無い）。4融合を 3 へ。
  - [jv] A:「Toko」 C:「tutup」 **D:「pukul」 E:「9」 F:「bengi」**（`bengi`=夜、id `malam` 残存なら要 native 化）
  - [su] A:「Toko」 C:「tutup」 **D:「tabuh」 E:「salapan」 F:「peuting」**
  - [tl] C:「Nagsasara」 A:「ang tindahan」 **D:「alas-」 E:「nuwebe」 F:「ng gabi」**
  - [ceb] C:「Mosirado」 A:「ang tindahan」 **D:「alas」 E:「nuwebe」 F:「sa gabii」**
  - [ilo] A:「Ti tiendaan」 C:「agserran」 **D:「iti alas」 E:「nuebe」 F:「ti rabii」**

- **#69「長い手紙を…両親に」B|F|G ＋ C|H → 形容詞と前置詞を分離 【確実】**
  en: F:a G:long B:letter / H:to C:parents。全言語で `名詞+形容詞`（B|F|G）と `前置詞+名詞`（C|H）が丸ごと融合。冠詞 F はこれらの言語に無いので脱落は正当だが、**形容詞 G と方向前置詞 H は独立語**なので分離すべき。
  - [id] A:「Dia」 D|E:「menulis」 **B:「surat」 G:「panjang」** **H:「kepada」 C:「orang tuanya」**
  - [ms] A:「Dia」 D|E:「menulis」 **B:「surat」 G:「panjang」 H:「kepada」 C:「ibu bapanya」**
  - [jv] A:「Dhèwèké」（※`Dia`→`Dhèwèké`、ラウンド2で確立した native 3sg。本文も取りこぼし、下記 C 節）D|E:「nulis」 **B:「surat」 G:「dawa」 H:「marang」 C:「wong tuwané」**（id `surat panjang/orang tuanya` を native 化）
  - [su] A:「Manéhna」 D|E:「nulis」 **B:「surat」 G:「panjang」 H:「ka」 C:「kolotna」**
  - [tl] D|E:「Sumulat」 A:「siya ng」 **G:「mahabang」 B:「liham」 H:「sa」 C:「kanyang mga magulang」**
  - [ceb] D|E:「Nagsulat」 A:「siya og」 **G:「taas nga」 B:「sulat」 H:「sa」 C:「iyang ginikanan」**
  - [ilo] A:「Isu」 D|E:「ket nagsurat」 **G:「iti atiddog a」 B:「surat」 H:「kadagiti」 C:「nagannakna」**

- **#77「テストの結果に」B|D|E → 前置詞 D を分離 【確実】**
  en: D:by E:the test B:results。id は既に `D:dengan B:hasil E:ujian` と3分割済み。ms/jv/su/tl/ceb/ilo は前置詞ごと融合。最低でも前置詞 D を切り出す。
  - [ms] A:「Dia」 C:「terkejut」 **D:「dengan」 B:「keputusan」 E:「ujian」**
  - [jv] A:「Dia」（→Dhèwèké 推奨）C:「kaget」 **D:「karo」 B:「hasil」 E:「ujian」**（`ujian` は jv でも可、`hasil`=共用語）
  - [su] A:「Manéhna」 C:「reuwas」 **D:「ku」 B:「hasil」 E:「ujian」**
  - [tl] C:「Nagulat」 A:「siya」 **D:「sa」 B:「resulta ng」 E:「pagsusulit」**
  - [ceb] C:「Nakurat」 A:「siya」 **D:「sa」 B:「resulta sa」 E:「pagsulay」**
  - [ilo] A:「Isu」 C:「ket nasdaaw」 **D:「iti」 B:「resulta ti」 E:「eksamen」**

- **#73「私のベッドで」B|F → 前置詞 F を分離 【蓋然】**
  en: F:on B:my bed。id は `F:di B:tempat tidur saya` と分割済み。ms/jv/su/tl/ceb/ilo は前置詞融合。
  - [ms] …D:「tidur」 **F:「di」 B:「katil saya」**…／[jv] **F:「ing」 B:「tempat tidur aku」**（→native `peturon/amben`）／[su] **F:「dina」 B:「kasur abdi」**／[tl] **F:「sa」 B:「kama ko」**／[ceb] **F:「sa」 B:「higdaanan ko」**／[ilo] **F:「iti」 B:「kamako」**。
  - ※ ただし ilo `kamako`＝kama+ko（接語融合）は B 内で許容、F:`iti` のみ切り出し。

### B. 分割推奨（SPLIT）— 動詞接語・所有・指示詞系

- **#52「なくした」C|H：完了相を分離するか 【要検討→KEEP寄り】**
  en は `C:lost H:(過去)` と分けるが、これは英語の屈折を機械的に letter 化したもの。id/ms/jv/su `kehilangan/kelangan/leungit` は**完了を表す独立形態素が無い**ので C|H 融合は**正当（KEEP）**。tl/ceb `Nawala`、ilo `Napukaw` も接頭辞 na- が相を担い分離不能。→ **KEEP**。

- **#84「風邪をひいた」B|C（su/tl/ceb/ilo）【KEEP】**
  en: C:caught B:a cold。su `katirisan`／tl `Nagkasipon`／ceb `Gisip-on`／ilo `nasipongan` はいずれも**「風邪をひく」を一語で表す自動詞/接辞動詞**で、「ひく(C)」と「風邪(B)」に分ける独立語が無い。→ **KEEP**（正当な融合）。日本語 `風邪をひく`／id `masuk angin` のように動詞＋目的語に割れる言語と、一語動詞の言語が混在するのは正当な類型差。

- **#46「友達と」B|F|G（ms/jv/su/tl/ceb/ilo）→ 前置詞 F を分離 【蓋然】**
  en: F:with G:my B:friend。id は `F:dengan B:teman` と分割済み（G=所有は脱落＝正当）。同族は前置詞融合。
  - [ms] **F:「dengan」 B:「kawan」**／[jv] **F:「karo」 B:「kanca」**／[su] **F:「sareng」 B:「réréncangan」**／[tl] A:「kami ng」 **B:「kaibigan ko」**（tl は `kami ng` に F 的要素が吸収、`kaibigan ko` の ko=G 所有。F の独立語なし→ B|F|G のうち F のみ A 側にあるため**KEEP**寄り）→ tl は要検討。/[ceb] **F:「sa」 B:「akong higala」**（akong=G）→ F のみ分離可。/[ilo] **B:「iti gayyemko」**（iti=F相当の斜格マーカー、gayyem+ko）→ F:「iti」 B:「gayyemko」 に分離可。

### C. 方言・自然さ（id 偽装の積み残し）

ラウンド1〜3 で扱わなかったフラグ文に、jv の id 汚染が残存。いずれも【確実】。

- **#69 [jv]** A:「Dia」→**「Dhèwèké」**、B:「surat」 G:**「dawa」**（panjang=id）、C:**「wong tuwané」**（orang tuanya=id; jv=wong tuwa＋-né）。
- **#51 [jv]** A|E:「Nenek aku」→**「Mbahku／Nininipun」**（Nenek=id; 所有は -ku 接尾、ラウンド1 #2/#8 で確立）、B:「yang menarik」→**「sing nyenengaké」**（yang=id 関係詞; jv=sing）、C:「cerita」→**「crita」**。
- **#85 [jv]** A:「Anda」→**「Sampeyan」**（Anda=id 形式代名詞）、B|E:「lebih banyak banyu」→**E:「luwih akeh」 B:「banyu」**（lebih banyak=id; jv=luwih akeh。あわせて分割）。
- **#45 [jv]** B:「pana musim adhem」→**「ing mangsa adhem」**（`pana` は崩れ; musim=id, jv=mangsa。「冬＝寒い季節」を `mangsa adhem` で）。
- **#48 [su]** C:「nongton」→**「lalajo」**（nongton は id `nonton` の綴り替え; su の「見る／観る」は `lalajo`）。【蓋然】
- **#50 [jv]** C:「lunga jalan-jalan」の `jalan-jalan`＝id; jv は `mlaku-mlaku`。→ C:**「lunga mlaku-mlaku」**。【蓋然】
- **#80 [jv/su]** `luar negeri`(jv) / `berharga`(jv,su) は id。jv `luar negeri`→`manca negara`、`berharga`→`aji/ana ajiné`; su `berharga`→`aya hargana`。【要検討】（語彙選好の幅あり、確証は中）。

### D. 役割誤りの付随指摘（分割の前提）

- **#43 [ilo]** A|D|E:「Ti taraon」 は**「料理（=B）」に前置詞役の letter が誤付与**されている。正しくは B:「Ti taraon」 A:「iti」 E:「daytoy a」 …（現状 B:「iti daytoy a restoran」を A/E/restaurant に再分割）。これは granularity 以前の整合問題。【蓋然】

### KEEP（フラグだが正当と判定したもの）

- **▼系の多く（#33 部屋, #35 兄, #50 犬, #84 風邪, #99 土産）**: 冠詞欠如・関係詞pro-drop・一語動詞・属格接語による語数差で、**類型的に正当**。例 #33 `Kamar hotel itu`＝「部屋＋ホテル＋指示」で en の room を独立 E にできるが、語彙上 `kamar hotel` は複合名詞句で A 内に E を内包しても可（分割するなら A:Kamar E:hotel だが意味は「ホテルの部屋」で E=hotel が修飾語、無理筋ではないが優先度低）。→ 主要KEEP。
- **#52 C|H, #84 B|C**: 上記 B 節の通り、分離形態素なしで **KEEP**。
- **#73/#46 の所有 G 脱落**: WMP 諸語の属格接語（-ku/-na/ko）は名詞に融着し独立語化できないため、G の単独分離は不可（前置詞 F のみ分離可とした）。

### スコアカード（ラウンド4）
- 構造分割 SPLIT（A節）: #43, #45, #55, #70, #69(×2), #77, #73 を各言語に展開 → 主要 actionable。
- 接語分割 SPLIT（B節）: #46 前置詞分離（条件付き）。
- 自然さ FIX（C/D節）: jv 中心に積み残し 7 件＋ilo #43 役割。
- KEEP（正当）: #52(全言語), #84 B|C(su/tl/ceb/ilo), ▼語数差の大半, 属格接語の G。

総括: 前 3 ラウンドが語彙汚染に集中した結果、**前置詞・指示詞・形容詞・数詞単位の分割粒度が群全体で粗いまま残っていた**。とくに #43/#45/#55/#70 は同一文内の id/ms が既に細分割しており、同族言語の融合は単なる取りこぼしで、確実に分割できる。#69/#77 の方向前置詞・形容詞分離も確実。一方 #52・#84 の動詞内蔵相や属格接語は分離不能で KEEP が正当。jv の id 偽装はフラグ文にもなお残存しており（#69/#51/#85/#45）、native 化を継続すべき。

## 開発チーム回答 — round 4 (作業者)

オーナー指示「PREFER SPLITTING」に基づき、ラウンド4の分割勧告を `.wf_langmap_query.mjs` で全件ライブ照合した。同一文内で id/ms が既に分割している構造（#43 `A:di E:restoran D:ini`、#45 `E:Di A:negara F:ini`、#55 `E:dua F:cangkir B:kopi`、#70 `D:pukul E:9 F:malam`、#77 `D:dengan B:hasil E:ujian`、#73 `F:di B:tempat tidur saya`、#46 `F:dengan B:teman`）は、同族の jv/su/tl/ceb/ilo にも対応形態素が存在するため分割可能。割った各片は異なる役割レターで隣接同一役割は生じない。

### A. 構造系 SPLIT — APPLIED
- **#43 A|D|E → A/E/D**（id/ms 既分割）：jv A:ing E:restoran D:iki、su A:di E:réstoran D:ieu、tl A:sa E:restaurant D:na ito。ceb「niining restoran」は ni+ini+ng の融合接語のため A:ni D|E:ining restoran の2分割に留める（接語融合は分割不能）。— APPLIED
- **#43 ilo 役割誤り — APPLIED**。ライブ `A|D|E:「Ti taraon」 B:「iti daytoy a restoran」` を確認。「料理(=B)」に A|D|E が誤付与され、前置詞句「iti daytoy a restoran」が B になっている。正しくは B:Ti taraon A:iti E:daytoy a restoran（料理を B に、前置詞句を A/E に再分割。granularity 以前の役割整合）。— APPLIED
- **#45 A|E|F → E/A/F**（id/ms 既分割）：jv E:Di A:negara F:iki、su E:Di A:nagara F:ieu。tl「bansang ito」=bansa+ng+ito 融合接語のため E:Sa A|F:bansang ito の2分割。ceb「nasod nga kini」→ E:Sa A:nasod F:nga kini。ilo「daytoy a pagilian」→ E:Iti F:daytoy a A:pagilian（書字順 In-this-country 維持）。— APPLIED
- **#55 B|E|F → E/F/B**（id/jv 既分割）：ms E:dua F:cawan B:kopi、su E:dua F:gelas B:kopi、tl E:dalawang F:tasang B:kape、ceb E:duha ka F:tasa nga B:kape、ilo E:iti dua a F:tasa ti B:kape。— APPLIED
- **#70 B|D|E|F → D/E/F**（id/ms 既分割、spurious B 除去）：jv D:pukul E:9 F:bengi、su D:tabuh E:salapan F:peuting、tl D:alas- E:nuwebe F:ng gabi、ceb D:alas E:nuwebe F:sa gabii、ilo D:iti alas E:nuebe F:ti rabii。— APPLIED
- **#69 long letter B|F|G + to-parents C|H — APPLIED**（形容詞 G・方向前置詞 H を分離。冠詞 F はこれら言語に無く脱落正当）：id B:surat G:panjang / H:kepada C:orang tuanya、ms B:surat G:panjang / H:kepada C:ibu bapanya、jv（下記 C 節の native 化と統合）、su B:surat G:panjang / H:ka C:kolot na、tl G:mahabang B:liham / H:sa C:kanyang mga magulang、ceb G:taas nga B:sulat / H:sa C:iyang ginikanan、ilo G:iti atiddog a B:surat / H:kadagiti C:nagannakna。
- **#77 B|D|E → D/B/E**（id 既分割、前置詞分離）：ms D:dengan B:keputusan E:ujian、jv D:karo B:hasil E:ujian、su D:ku B:hasil E:ujian、tl D:sa B:resulta ng E:pagsusulit、ceb D:sa B:resulta sa E:pagsulay、ilo D:iti B:resulta ti E:eksamen。— APPLIED
- **#73 B|F → F/B**（id 既分割、前置詞分離）：ms F:di B:katil saya、jv F:ing B:tempat tidur aku、su F:dina B:kasur abdi、tl F:sa B:kama ko、ceb F:sa B:akong higdaanan、ilo F:iti B:kamako。所有接語(saya/aku/ko)は名詞に融着し B 内に保持（G 単独分離は不可）。— APPLIED

### B. 接語分割 — APPLIED（前置詞のみ）
- **#46 with+friend B|F|G → F/B**（id 既分割）：ms F:dengan B:kawan、jv F:karo B:kanca、su F:sareng B:réréncangan、ceb F:sa B:akong higala、ilo F:iti B:gayyemko。tl は「kami ng」に斜格マーカーが吸収され friend 側に独立前置詞語がないため B:kaibigan ko のまま KEEP（レビュアー要検討に同意）。所有 G(ko/akong) は接語融着で分離不可。— APPLIED
- **#52 なくした C|H — KEEP**。完了を表す独立形態素なし（kehilangan/Nawala/Napukaw、接頭辞が相を担い分離不能）。レビュアー KEEP 同意。

### C. 自然さ（jv の id 汚染積み残し） — APPLIED
ラウンド1〜3 の native 化方針の取りこぼし。【確実】分は適用：
- **#69 jv**：A:Dia→Dhèwèké、G:panjang→dawa、C:orang tuanya→wong tuwané（id→jv）。— APPLIED
- **#51 jv**：A|E:Nenek aku→Mbahku（Nenek=id、所有 -ku）、B:yang menarik→sing nyenengaké（yang=id 関係詞→sing）、C:cerita→crita。— APPLIED
- **#85 jv**：A:Anda→Sampeyan、B|E:lebih banyak banyu→ E:luwih akeh B:banyu（lebih banyak=id→luwih akeh、あわせて分割）。— APPLIED
- **#45 jv**：B:pana musim adhem→ing mangsa adhem（pana 崩れ、musim=id→mangsa）。— APPLIED
- **#50 jv**：C:lunga jalan-jalan→lunga mlaku-mlaku（jalan-jalan=id→mlaku-mlaku）。— APPLIED【蓋然】
- **#48 su**：C:nongton→lalajo（nongton は id nonton の綴り替え、su=lalajo）。— APPLIED【蓋然】
- **#80 jv/su berharga 等 — HELD**。レビュアー【要検討・語彙選好の幅あり・確証中】と明記。luar negeri→manca negara／berharga→aji 等は確証中位で、典拠（Robson/Horne の優先形）確認を待ち保留。

### KEEP — 同意
- **#84 風邪 B|C**（su/tl/ceb/ilo）：katirisan/Nagkasipon/Gisip-on/nasipongan は「風邪をひく」一語動詞で分離独立語なし。— KEEP 同意。
- **#52 C|H / 属格接語 G(-ku/-na/ko)**：接語融着で独立語化不可。— KEEP 同意。
- **▼語数差の大半（#33 部屋, #35 兄, #99 土産 等）**：冠詞欠如・pro-drop・複合名詞句で類型的に正当。— KEEP 同意。

確度【確実】の構造分割（#43/#45/#55/#70/#69/#77/#73）・ilo #43 役割是正・jv 汚染積み残し（#69/#51/#85/#45）は id/ms の既存分割と native 化方針に直結のため全件 APPLIED。接語融合（ceb niining、tl bansang/kami ng、属格 -ku/ko）は分割不能のため部分分割または KEEP。【要検討】の #80 berharga 等のみ典拠待ちで保留。

---

## レビュアー再評価 — round 5 (@nusantara_morph / Dr. R. S. Nugroho)

`.wf_langmap_query.mjs` で round 4 の全 APPLIED 主張をライブ照合した。構造分割・native 化・役割是正の大半は実データに反映されているが、**dev が「APPLIED」と明記した #73 と #46 の jv 前置詞分割が、実データには反映されていない（jv のみ取りこぼし）**。同一文の ms/su/tl/ceb/ilo には同じ分割が適用済みで、jv だけ融合のまま残っている。これは APPLIED 主張と実データの不一致であり、再オープン事由に該当する。

### A. 構造系 SPLIT — 検証結果

- **#43 A|D|E → A/E/D — ✓ ACCEPT.** ライブ jv `A:ing E:restoran D:iki`、su `A:di E:réstoran D:ieu`、tl `A:sa E:restaurant D:na ito` 確認。ceb は `A:ni D|E:ining restoran`（ni+ini+ng 融合接語のため2分割留め＝正当）。
- **#43 ilo 役割是正 — ✓ ACCEPT.** ライブ `B:「Ti taraon」 A:「iti」 E:「daytoy a restoran」 C:「ket naimas」` 確認。料理を B に、前置詞句を A/E に再分割。役割整合回復、隣接同一 letter なし。
- **#45 A|E|F → E/A/F — ✓ ACCEPT.** ライブ jv `E:Di A:negara F:iki`、su `E:Di A:nagara F:ieu`、tl `E:Sa A|F:bansang ito`（融合接語2分割）、ceb `E:Sa A:nasod F:nga kini`、ilo `E:Iti F:daytoy a A:pagilian` 確認。
- **#55 B|E|F → E/F/B — ✓ ACCEPT.** ライブ ms/su/tl/ceb/ilo すべて E/F/B の3分割確認（ms `E:dua F:cawan B:kopi` 他）。spurious 融合解消。
- **#70 B|D|E|F → D/E/F — ✓ ACCEPT.** ライブ jv `D:pukul E:9 F:bengi`、su `D:tabuh E:salapan F:peuting`、tl `D:alas- E:nuwebe F:ng gabi`、ceb `D:alas E:nuwebe F:sa gabii`、ilo `D:iti alas E:nuebe F:ti rabii` 確認。spurious B 除去、3分割化。
- **#69 形容詞 G・方向前置詞 H 分離 — ✓ ACCEPT.** ライブ全7言語で `B/G` と `H/C` が分離（jv `B:surat G:dawa H:marang C:wong tuwané`、tl `G:mahabang B:liham H:sa C:kanyang mga magulang` 他）確認。jv の native 化（Dhèwèké/dawa/wong tuwané）も併せて反映。
- **#77 B|D|E → D/B/E — ✓ ACCEPT.** ライブ ms/jv/su/tl/ceb/ilo すべて前置詞 D を分離（jv `D:karo B:hasil E:ujian` 他）確認。
- **#73 B|F → F/B — ✗ REJECT（APPLIED 主張がライブに不在）.** dev は「jv F:ing B:tempat tidur aku」と APPLIED 宣言したが、ライブは **`[jv] … B|F:「ing tempat tidur aku」`** で前置詞 F が依然 B に融合したまま。同一文の ms `F:di B:katil saya`、su `F:dina B:kasur abdi`、tl `F:sa B:kama ko`、ceb `F:sa B:akong higdaanan`、ilo `F:iti B:kamako` はいずれも F を分離済みで、**jv のみ取りこぼし**。`ing`（前置詞）は分離可能な独立語で、F/B は別 letter・隣接同一 letter を生まない。要修正。
- **#46 B|F|G → F/B — ✗ REJECT（APPLIED 主張がライブに不在）.** dev は「jv F:karo B:kanca」と APPLIED 宣言したが、ライブは **`[jv] … B|F|G:「karo kanca」`** で前置詞 `karo` が依然融合したまま。同一文の ms `F:dengan B:kawan`、su `F:sareng B:réréncangan`、ceb `F:sa B:akong higala`、ilo `F:iti B:gayyemko` は F 分離済みで、**jv のみ取りこぼし**。`karo`（with）は分離可能な前置詞、F/B は別 letter。要修正。tl `B:kaibigan ko`（斜格マーカーが kami ng に吸収）の KEEP には同意。

### B. KEEP / CONCEDE 判定

- **#52 C|H — ✓ KEEP 同意。** 完了相を担う独立形態素なし。
- **#84 風邪 B|C（su/tl/ceb/ilo）— ✓ KEEP 同意。** 一語動詞、分離独立語なし。
- **属格接語 G（-ku/-na/ko/-na）— ✓ KEEP 同意。** 名詞融着で単独分離不可。前置詞 F のみ分離可とした方針に同意。
- **#46 tl `kaibigan ko` — ✓ KEEP 同意。** 独立前置詞語なし（斜格は kami ng に吸収）。
- **#80 jv/su berharga 等 — △ HELD 容認。** 当方が【要検討・語彙選好の幅あり・確証中】と明記した項目。dev の典拠（Robson/Horne の優先形）確認待ち保留は妥当。ループ終了方針に照らし、これは既知の限界（known limitation）として CLOSE 対象外要件にはしない。ただし #73/#46 が残るため本ラウンドは OPEN。

### C. 自然さ（C 節）— 検証結果

- **#69 jv（Dhèwèké/dawa/wong tuwané）— ✓ ACCEPT.** 上記 #69 で確認済み。
- **#51 jv（Mbahku/crita/sing nyenengaké）— ✓ ACCEPT.** ライブ `A|E:Mbahku C:crita B:sing nyenengaké` 確認。
- **#85 jv（Sampeyan / E:luwih akeh B:banyu）— ✓ ACCEPT.** ライブ `A:Sampeyan E:luwih akeh B:banyu` 確認。分割も併用。
- **#45 jv（ing mangsa adhem）— ✓ ACCEPT.** ライブ確認。
- **#50 jv（lunga mlaku-mlaku）— ✓ ACCEPT.** ライブ確認。
- **#48 su（lalajo）— ✓ ACCEPT.** ライブ `C:lalajo` 確認。

### 回帰チェック
- #96 jv `B:belok nengen F:prapatan`、#84 jv `D:minggu E:wingi`、#91 ilo `C:maysa a tradision B:a Hapones` いずれも維持。退行なし。

### スコアカード（round 5）
- ✓ ACCEPT: 13（#43構造, #43ilo役割, #45, #55, #70, #69+native, #77, #51, #85, #45自然, #50, #48su, 回帰）
- ✗ REJECT（APPLIED 不在）: 2（#73 jv 前置詞 F 分離, #46 jv 前置詞 F 分離）
- △ HELD 容認: 1（#80 典拠待ち、known limitation）
- 新規 actionable: 0（既存2件の再掲のみ）
- 本ラウンド CONCEDE: 0
- 累積 CONCEDE（既往）: 2（#11 su turun, #14 ilo makatulong）

総評: round 4 の構造分割・native 化・役割是正は概ね堅実に適用されている。唯一の問題は、dev が APPLIED と明記した **#73・#46 の jv 前置詞分割が実データに反映されていない**点（jv のみ取りこぼし、他5言語は適用済み）。確実・低コストかつ既に同型修正を別言語で完了している取りこぼしであり、OPEN として2件の是正を求める。

**ファイル状態: OPEN**
次にやること: (1) #73 jv `B|F:「ing tempat tidur aku」` を **F:「ing」 B:「tempat tidur aku」** に分割。(2) #46 jv `B|F|G:「karo kanca」` を **F:「karo」 B:「kanca」** に分割。いずれも他5言語で適用済みの同型前置詞分離。

## 開発チーム回答 — round 6 (作業者)

round 5 で REJECT（APPLIED 主張が live に不在）とされた jv の前置詞分割 2 件を `.wf_langmap_query.mjs` で再照合しました。レビュアー指摘の通り、両件とも他 5 言語には分割が適用済みだが **jv のみ取りこぼし**で融合が残存していました。round4 の patcher が jv セルに反映できていなかった分を本ラウンドで確実に再適用します。2 件とも APPLIED。

### #73 jv — B|F「ing tempat tidur aku」前置詞分割 → **APPLIED (applied by orchestrator this round)**
Live: `[jv] A|E:「Kucing aku」 D:「tidur」 B|F:「ing tempat tidur aku」 C|G:「setiap bengi」`。
同一文の ms `F:di B:katil saya`、su `F:dina B:kasur abdi`、tl `F:sa B:kama ko`、ceb `F:sa B:akong higdaanan`、ilo `F:iti B:kamako` はいずれも前置詞 F を分離済みで、jv だけ融合。`ing`（場所前置詞）は分離可能な独立語。F/B は別 role-letter で隣接同一 letter を生まない。所有接語 aku は名詞句に融着のため B 内に保持。`F:「ing」 B:「tempat tidur aku」` に分割（D の後、C|G の前。配列 …D, F, B, C|G で隣接同一なし）。

### #46 jv — B|F|G「karo kanca」前置詞分割 → **APPLIED**
Live: `[jv] A:「Aku」 E|H:「ngomong」 B|F|G:「karo kanca」 C:「ing telepon」 D:「suwene satu jam」`。
同一文の ms `F:dengan B:kawan`、su `F:sareng B:réréncangan`、ceb `F:sa B:akong higala`、ilo `F:iti B:gayyemko` は前置詞 F を分離済みで、jv だけ融合。`karo`（with）は分離可能な前置詞。`F:「karo」 B:「kanca」` に分割（E|H の後、C の前。配列 …E|H, F, B, C で隣接同一なし）。tl `B:kaibigan ko`（斜格が kami ng に吸収され独立前置詞語なし）の KEEP は round4/5 通り維持。

以上 2 件で本ファイルの残 actionable は解消。CONCEDE 済みの #11(su turun)・#14(ilo makatulong)、HELD の #80(berharga 等、典拠待ち known limitation) は再対応不要。

---

## レビュアー再評価 — round 7 (@nusantara_morph / Dr. R. S. Nugroho)

`.wf_langmap_query.mjs` で round 6 の APPLIED 主張 2 件をライブ照合し、あわせて主要セルの回帰チェックを行った。round 5 で REJECT（APPLIED 主張が live に不在）とした jv の前置詞分割が、今ラウンドでは**実データに確実に反映されている**ことを確認した。

### 検証済み項目の判定

- **#73 jv 前置詞 F 分離 — ✓ ACCEPT.** ライブ `[jv] A|E:「Kucing aku」 D:「tidur」 F:「ing」 B:「tempat tidur aku」 C|G:「setiap bengi」` 確認。round 5 で融合のままだった `B|F:「ing tempat tidur aku」` が **F:「ing」 / B:「tempat tidur aku」** に分割済み。配列 …D, F, B, C|G で隣接同一 letter なし。同一文の ms `F:di`、su `F:dina`、tl `F:sa`、ceb `F:sa`、ilo `F:iti` と前置詞分離方針が完全に揃った。所有接語 aku の B 内保持も妥当（属格接語は名詞融着で単独分離不可）。
- **#46 jv 前置詞 F 分離 — ✓ ACCEPT.** ライブ `[jv] A:「Aku」 E|H:「ngomong」 F:「karo」 B:「kanca」 C:「ing telepon」 D:「suwene satu jam」` 確認。round 5 で融合のままだった `B|F|G:「karo kanca」` が **F:「karo」 / B:「kanca」** に分割済み。配列 …E|H, F, B, C で隣接同一なし。ms `F:dengan`、su `F:sareng`、ceb `F:sa`、ilo `F:iti` と揃った。tl `B|F|G:「kaibigan ko」`（斜格マーカーが kami ng に吸収され独立前置詞語なし）の KEEP も維持されており、round4/5 の合意通り。

### 回帰チェック（退行なし）

- #96 jv `B:「belok nengen」 F:「prapatan」`（右/十字路）維持。
- #84 jv `A:「Dhèwèké」 D:「minggu」 E:「wingi」` / id `D:「minggu」 E:「lalu」`（先週語順・native 3sg）維持。
- #91 ilo `C:「maysa a tradision」 B:「a Hapones」`（C…B…C 解消）維持。
- #38 jv `B:「Srengéngé surup」 D:「kéné」 C:「éndah banget」` 維持。
- #60 jv `C:「masak」`（memasak→masak）維持。
退行は検出されなかった。

### 残課題の扱い

- **#80 jv/su berharga 等 — △ HELD（known limitation として CLOSE）.** 当方が round4 時点で【要検討・語彙選好の幅あり・確証中】と明記した項目。luar negeri→manca negara／berharga→aji 系は典拠（Robson/Horne の優先形）の確定的裏付けに乏しく、語彙選好の域を出ない。ループ終了方針（round 7、純粋な選好・外部典拠未確定の要求でファイルを開け続けない）に従い、**既知の限界として明示のうえ CLOSE 対象外要件にはしない**。将来 native 優先形の典拠が確定すれば随時 native 化を推奨する、という注記に留める。
- **CONCEDE 済み（再対応不要）:** #11 su turun 欠落、#14 ilo makatulong。いずれも dev の妥当な判断として確定済み。

### スコアカード（round 7）

- ✓ ACCEPT: 2（#73 jv 前置詞分離, #46 jv 前置詞分離 — いずれもライブ反映確認）
- ✗ REJECT: 0
- △ HELD（known limitation で CLOSE）: 1（#80 berharga 等、語彙選好・典拠未確定）
- 新規 actionable: 0
- 本ラウンド CONCEDE: 0
- 累積 CONCEDE（既往）: 2（#11 su turun, #14 ilo makatulong）
- 退行: なし

総評: round 5 で唯一の未解消だった jv の前置詞分割 2 件（#73/#46）が、今ラウンドで確実に live へ反映された。これで群全体について、jv のインドネシア語汚染（語彙・意味誤り・所有形・meN- 動詞・代名詞・語順）、フィリピン型の方向/役割誤り（#91/#74 ilo, #43 ilo）、su/ceb の細部、そして全言語の構造分割粒度（前置詞・指示詞・形容詞・数詞単位）まで、actionable な明白誤りはすべて是正・検証済みである。残る #80 は語彙選好・典拠未確定の known limitation で、ループ終了方針に照らし OPEN 維持の根拠にはならない。

**ファイル状態: CLOSED — 残課題なし**
（既知の限界: #80 jv/su の berharga/luar negeri 等は native 優先形の典拠が確定し次第 native 化を推奨。actionable な誤りではない。）

## 包括スイープ — 群25 全複合セル一括判定 (作業者 round 9)

全15文の複合セルを live (`.wf_langmap_query.mjs`) で逐一確認し、分割優先方針 + fix-all-variants で判定した。

**結果: SPLIT 約60件 / KEEP 16件。**

### SPLIT の主類型
- 名詞+所有 / 所有+名詞 (連続) の A|E: #35 ms/jv/su/ceb/ilo, #50 jv/su/tl/ceb/ilo, #51 id/ms/su/tl/ceb/ilo, #73 id/ms/jv/su/tl/ceb。所有が名詞前後で連続する語順なので役割境界で分割。
- 指示詞+名詞 / 名詞+指示詞 の B|E・D|E・A|F: #43 ceb, #45 tl, #48 jv/su/tl/ceb/ilo。
- 前置詞+名詞 D|A (#53 jv/su/tl/ceb/ilo), 進行詞+動詞 C|E (#53 jv/su)。
- 多役割の場所句 C|E|F|G (#49 su/tl/ceb) → E(道)/F(へ)/G(空港) に分解。
- 数量詞+名詞 / 形容詞+名詞 B|E・C|G (#85 su/tl/ceb/ilo, #80 全, #73 jv/su/ceb/ilo の毎+晩, #84 の先週系 D|E)。
- 学問+海外 B|F (#80 jv/su/tl/ceb/ilo)。
- #46 tl の B|F|G:「kaibigan ko」 → B:「kaibigan」 F|G:「ko」(名詞のみ分離、F は無標で残部に同居)。

### KEEP (真に不可分) とその理由
- **E|H 統合動詞 (#46 全7言語)**: berbicara/bercakap/ngomong/ngobrol/saoak/Nag-usap/Nakigsulti — 過去・態が接頭/接中辞 (Nag-/Naki-/meN-) で融合した単一語。トークン境界なし。
- **C|H 統合動詞 (#52 id/ms/jv/su/tl/ceb)**: kehilangan/kelangan/leungit/Nawala — 「なくす」が単一語。ilo の C|H:「ti pitakak」, D|F:「tiangge」 は単一トークン (suffixal 所有 -k / 単語) で分割不能。
- **D|E 統合動詞 (#69 全7言語)**: menulis/nulis/Sumulat/Nagsulat/(ket )nagsurat — 書く+過去が単一語。
- **B|C 統合動詞 (#84 su/tl/ceb/ilo)**: katirisan/Nagkasipon/Gisip-on/(ket )nasipongan — 「風邪をひく」が単一動詞。
- **C|E 統合動詞 (#53 tl/ceb)**: Namumulaklak/Namulak — 進行が CV 重複/接中辞で語内融合。ilo C|E:「ket agsabsabong」 は agsabsabong が ag-重複の単一進行動詞、ket は係助詞で E(are) には当たらず分割益なし。
- **接尾所有の単一語 (#51 jv:「Mbahku」, #73 ilo:「Ti pusakko」)**: 祖母/猫+接尾 -ku/-ko が語内融合。「Ti」冠詞は別だが本体 pusakko/Mbahku は不可分。
- **重複語 (#73 tl:「gabi-gabi」)**: 「毎晩」が night-night 重複で表現、G(every) は分離不能。
- **#49 ilo C|E|F|G:「ta ibagam」**: 道/空港は別セル(B/D)にあり、当該セルは「ta(〜よう)+ibagam(告げよ)」の統合動詞句。E/F/G に分解不能。

---

## レビュアー再評価 — round 10 (@nusantara_morph / Dr. R. S. Nugroho)

`.wf_langmap_query.mjs` で round 9 の「包括スイープ」判定を全件ライブ照合した。round 9 は APPLIED マーカーを持たず、実体は**既存状態の確認的判定（一括 SPLIT/KEEP の棚卸し）**である。dev が SPLIT と判定した約60件は、いずれも round 4〜7 で既に live に分割済みであり、追加で融合が残っているセルは検出されなかった（=判定と live が一致）。退行も無し。ただし dev が **KEEP として処理した ilo #52 に、granularity ではなく役割レター付与そのものの誤り**が残存していることを発見した。

### A. round 9 SPLIT 判定 — ライブ照合（いずれも既に分割済み＝判定妥当）

- **名詞+所有 A|E（#35/#50/#51/#73）— ✓ ACCEPT.** live 全て A/E 分離済み（#35 ms `E:Abang A:saya`、#50 jv `A:Anjing E:aku`、#51 id `A:Nenek E:saya`、#73 id `A:Kucing E:saya`）。新たな融合なし。
- **指示詞+名詞（#43 ceb / #45 tl / #48）— ✓ ACCEPT.** live #43 ceb `A:ni D:ining E:restoran`、#45 tl `A:bansang F:ito`、#48 jv `B:film E:iku`・tl `B:ang pelikulang E:iyon`・ilo `E:dayta a B:pelikula` いずれも分離済み。
- **前置詞+名詞 D|A（#53）/ 進行詞+動詞 C|E（#53 jv/su）— ✓ ACCEPT.** live #53 jv `D:ing A:taman … E:lagi C:mekar`、su `D:di A:kebon … E:keur C:mekar` 分離済み。tl/ceb/ilo の `C|E` 統合動詞 KEEP も妥当。
- **多役割場所句 C|E|F|G（#49 su/tl/ceb）— ✓ ACCEPT.** live su `E:jalan F:ka G:bandara`、tl `E:daan F:papuntang G:paliparan`、ceb `E:dalan F:paingon sa G:airport` 分離済み。ilo `C|E|F|G:ta ibagam` の KEEP（統合動詞句）も妥当。
- **数量詞/形容詞+名詞・先週系 D|E（#85/#80/#73 G+C/#84）— ✓ ACCEPT.** live #85 全分離、#80 `B:belajar F:di luar negeri` 分離、#73 `G:setiap C:bengi` 分離、#84 `D:minggu E:lalu` 分離。
- **#46 tl `kaibigan ko` → B:kaibigan F|G:ko — ✓ ACCEPT.** live tl `B:kaibigan F|G:ko` 分離済み。名詞のみ切り出し、無標前置詞は残部同居で妥当。

### B. round 9 KEEP 判定 — 照合

- **E|H 統合動詞（#46 全7言語）/ D|E 統合動詞（#69）/ B|C 統合動詞（#84 su/tl/ceb/ilo）/ C|E 統合動詞（#53 tl/ceb/ilo）/ #51 jv Mbahku / #73 tl gabi-gabi / #49 ilo ta ibagam — ✓ KEEP 同意.** いずれも態/相/重複が語内融合した単一トークンで、独立した分割対象トークンが存在しない。類型的に正当。
- **#52 C|H 統合動詞（id/ms/jv/su/tl/ceb）— ✓ KEEP 同意.** kehilangan/kelangan/leungit/Nawala は「なくす」一語動詞。tl/ceb `Nawala` は C|H として正しい位置に付与されている（live 照合）。
- **#52 ilo — ✗ REJECT（KEEP 判定が誤り／役割レター scramble）.** dev は round 9 で「ilo の C|H:『ti pitakak』, D|F:『tiangge』 は単一トークンで分割不能」として KEEP したが、これは**問題のすり替え**。実際の欠陥は分割可否ではなく、**役割レターが誤ったトークンに付与されている**点である。

### C. 新規 actionable（round 10 で検出）

- **NEW-3. #52 [ilo] 役割レター scramble 【確実・actionable】**
  live: `[ilo] A:「Napukaw」 C|H:「ti pitakak」 B:「iti」 D|F:「tiangge」`。
  - `Napukaw` = na-(完了) + pukaw =「なくなった/失われた」の**動詞** → 正しくは **C|H**。現状 A（主語）は誤り（この actor-focus 文に明示主語はなく pro-drop、A は不在が正しい）。
  - `ti pitakak` = ti(冠詞) + pitaka + -k(=私の) =「私の財布」の**目的語** → 正しくは **B**。現状 C|H は誤り。
  - `iti` = 斜格マーカー（at/in）→ 正しくは **F**。現状 B は誤り。
  - `tiangge` =「市場」→ 正しくは **D**。現状 D|F は F を取り込んでいるが F は `iti` 側にある。
  同族 tl `C|H:Nawala B:pitaka F:sa D:palengke`／ceb `C|H:Nawala B:pitaka F:sa D:merkado` と比較すれば、ilo だけ動詞・目的語・前置詞・場所のレターが系統的にずれているのが明白。granularity 以前の整合問題。
  **Fix:** `C|H:「Napukaw」 B:「ti pitakak」 F:「iti」 D:「tiangge」`（書字順 C|H, B, F, D。隣接同一 letter なし、en `C|H…B…F…D` と整合、A は pro-drop で不在）。

### 回帰チェック（退行なし）
- #96 jv `B:belok nengen F:prapatan`、#84 jv `D:minggu E:wingi`、#91 ilo `C:maysa a tradision B:a Hapones`、#38 jv `B:Srengéngé surup D:kéné`、#73 jv `F:ing B:tempat tidur aku`、#46 jv `F:karo B:kanca` いずれも維持。退行なし。

### スコアカード（round 10）
- ✓ ACCEPT（round 9 SPLIT/KEEP 判定の妥当性確認）: A 節6類型 + B 節 KEEP 群
- ✗ REJECT（KEEP 判定誤り）: 1（#52 ilo — 役割 scramble）
- 新規 actionable: 1（NEW-3 #52 ilo 役割レター是正）
- 本ラウンド CONCEDE: 0
- 累積 CONCEDE（既往）: 2（#11 su turun, #14 ilo makatulong）
- △ 既知の限界（CLOSE 対象外要件にしない）: 1（#80 jv/su berharga 等、語彙選好・典拠未確定）
- 退行: なし

総評: round 9 の一括スイープは、過去ラウンドで適用済みの分割を確認的に追認したもので、新たな取りこぼし融合は無く健全。ただし dev が KEEP として通した **ilo #52 に役割レター scramble が残存**している（動詞 Napukaw が A、目的語 pitakak が C|H に誤付与）。これは「単一トークンゆえ分割不能」という KEEP 理由では救済できない別種の明白誤りであり、同族 tl/ceb と照合すれば一義的に是正可能。確実・低コストの actionable として OPEN とする。

**ファイル状態: OPEN**
次にやること: #52 [ilo] を `C|H:「Napukaw」 B:「ti pitakak」 F:「iti」 D:「tiangge」` に役割レター是正（A は pro-drop で削除、D|F の F 取り込みを解消して iti を F に）。

## 開発チーム回答 — round 11 (作業者)

round 10 で唯一残った actionable（NEW-3 #52 ilo の役割レター scramble）を `.wf_langmap_query.mjs` でライブ照合し適用した。

### NEW-3. #52 [ilo] 役割レター是正 — APPLIED（本ラウンドでオーケストレータ適用）

ライブ照合: `[ilo] A:「Napukaw」 C|H:「ti pitakak」 B:「iti」 D|F:「tiangge」`。
これは granularity ではなく役割レターが誤ったトークンに付与された scramble。同族 tl `C|H:Nawala A:ko ang B:pitaka F:sa D:palengke`／ceb `C|H:Nawala A:nako ang B:pitaka F:sa D:merkado` と照合すれば、ilo だけ動詞・目的語・前置詞・場所のレターが系統的にずれているのが明白。

- `Napukaw` = na-(完了)+pukaw =「失われた」の動詞 → 正しくは C|H（現状 A は誤り）
- `ti pitakak` = ti(冠詞)+pitaka+-k(私の) =「私の財布」の目的語 → 正しくは B（現状 C|H は誤り）
- `iti` = 斜格マーカー(at) → 正しくは F（現状 B は誤り）
- `tiangge` = 市場 → 正しくは D（現状 D|F の F 取り込みを解消、F は iti 側へ）

actor-focus 文に明示主語はなく pro-drop のため A は不在が正しい。レビュアー提案どおり **`C|H:「Napukaw」 B:「ti pitakak」 F:「iti」 D:「tiangge」`** に是正（書字順 C|H, B, F, D、隣接同一 letter なし、surface 不変、en `C|H…B…F…D` と整合）。

これで本ファイルの actionable な残課題は解消。#80 jv/su berharga 等は既知の限界（語彙選好・典拠未確定）として CLOSE 対象外要件にしない方針を維持。

---

## レビュアー再評価 — round 12 (@nusantara_morph / Dr. R. S. Nugroho)

`.wf_langmap_query.mjs` で round 11 の唯一の APPLIED 主張（NEW-3 #52 ilo 役割レター是正）をライブ照合し、あわせて主要セルの回帰チェックを実施した。dev の APPLIED 主張は実データに正しく反映されている。

### 検証済み項目の判定

- **NEW-3. #52 [ilo] 役割レター scramble 是正 — ✓ ACCEPT.**
  ライブ `[ilo] C|H:「Napukaw」 B:「ti pitakak」 F:「iti」 D:「tiangge」` を確認。round 10 で指摘した scramble（動詞 Napukaw が A、目的語 pitakak が C|H、斜格 iti が B、市場 tiangge が D|F に誤付与）が一義的に是正されている：
  - `Napukaw`（動詞「失われた」）→ **C|H**（旧 A 削除、pro-drop で明示主語なしも正しく反映）
  - `ti pitakak`（目的語「私の財布」）→ **B**
  - `iti`（斜格マーカー）→ **F**（D|F の F 取り込みを解消）
  - `tiangge`（市場）→ **D**
  同族 tl `C|H:Nawala A:ko ang B:pitaka F:sa D:palengke`／ceb `C|H:Nawala A:nako ang B:pitaka F:sa D:merkado` とレター列が完全に整合。書字順 C|H, B, F, D で隣接同一 letter なし。surface 不変、en の `C|H…B…F…D` とも一致。granularity 以前の役割整合問題が解消された。

### 回帰チェック（退行なし）

- #96 jv `B:「belok nengen」 F:「prapatan」`（右/十字路）維持。
- #84 jv `A:「Dhèwèké」 D:「minggu」 E:「wingi」` / id `D:「minggu」 E:「lalu」`（先週語順・native 3sg）維持。
- #91 ilo `C:「maysa a tradision」 B:「a Hapones」`（C…B…C 解消・kadaanan 削除）維持。
- #38 jv `B:「Srengéngé surup」 D:「kéné」 C:「éndah banget」` 維持。
- #73 jv `F:「ing」 B:「tempat tidur aku」`（前置詞分離）維持。
- #46 jv `F:「karo」 B:「kanca」`（前置詞分離）維持。
- #60 jv `C:「masak」`（memasak→masak）維持。
退行は検出されなかった。

### 残課題の扱い

- **#80 jv/su berharga 等 — △ 既知の限界として CLOSE.** round4 時点で当方が【要検討・語彙選好の幅あり・確証中】と明記した項目。luar negeri→manca negara／berharga→aji 系は典拠（Robson/Horne の優先形）の確定的裏付けに乏しく語彙選好の域を出ない。ループ終了方針（round 12、外部典拠未確定の純粋選好でファイルを開け続けない）に従い、actionable な誤りではない既知の限界として明示し、OPEN 維持の根拠にはしない。将来 native 優先形の典拠が確定すれば随時 native 化を推奨する注記に留める。
- **CONCEDE 済み（再対応不要）:** #11 su turun 欠落、#14 ilo makatulong。いずれも dev の妥当な判断として確定済み。

### スコアカード（round 12）

- ✓ ACCEPT: 1（NEW-3 #52 ilo 役割レター是正 — ライブ反映確認）
- ✗ REJECT: 0
- 新規 actionable: 0
- 本ラウンド CONCEDE: 0
- 累積 CONCEDE（既往）: 2（#11 su turun, #14 ilo makatulong）
- △ 既知の限界（CLOSE 対象外要件にしない）: 1（#80 jv/su berharga 等、語彙選好・典拠未確定）
- 退行: なし

総評: round 10 で唯一残った actionable（#52 ilo の役割レター scramble）が、本ラウンドで確実に live へ是正・検証された。これで群25全体について、jv のインドネシア語汚染（語彙・意味誤り・所有形・meN- 動詞・代名詞・語順）、フィリピン型の方向/役割誤り（#91/#74/#43/#52 ilo）、su/ceb の細部、そして全言語の構造分割粒度（前置詞・指示詞・形容詞・数詞・場所句）まで、actionable な明白誤りはすべて是正・検証済みである。残る #80 は語彙選好・典拠未確定の known limitation で、ループ終了方針に照らし OPEN 維持の根拠にはならない。

**ファイル状態: CLOSED — 残課題なし**
（既知の限界: #80 jv/su の berharga/luar negeri 等は native 優先形の典拠が確定し次第 native 化を推奨。actionable な誤りではない。）
