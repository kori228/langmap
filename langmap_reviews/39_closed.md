# LangMap データレビュー #39 — 膠着語クロスカット (ZWNJ グルー)

## レビュアー自己紹介 (ペルソナ)

私は **Dr. 小泉 律子 (こいずみ・りつこ、ハンドル: @ritsuko_chunker)**、形態類型論を専門とする言語学者です。京都大学で博士号(膠着型言語の語形態素境界とコーパス分割)を取得後、ALI (アジア言語インフォマティクス)・LREC・SIGMORPHON でセグメンテーション一貫性の評価指標を研究してきました。本レビューは特定の語族に閉じず、LangMap における **U+200C ZWNJ「‌」グルーマーカー** の運用横断検査を担当します。プロジェクトの memory `feedback_glue_marker.md` の原則 ——「分かち書きされない膠着接尾辞は語幹と別セグメントで保持し、接尾辞側に ZWNJ を前置することで描画時に空白を挿入させない」—— をすべての膠着語(Turkic / Finno-Ugric / Korean / Japanese / Quechua / Guaraní / Bantu / Mongolic / Manchu / Tibetan / Bengali / Esperanto / Lojban / Klingon)に対して機械的に走査しました。

検証手順:
1. `node` ですべての segment の `text.charCodeAt(0) === 0x200C` を判定して各言語の ZWNJ 比率をベースライン化。
2. ZWNJ 比率が極端に低い言語、または同言語内で「同一の格接尾辞が ZWNJ ありとなしの両方で出現」する文を抽出。
3. プロジェクトの実描画ロジック (`app.js` の `buildFullText` / GLUE 定数) を再現する toy renderer で、ZWNJ 抜けが実際に **語中に空白を挿入してしまう** 文を確認。
4. `NO_SPACE_LANGS`(ja/zh/th 系)に属する言語については「描画上は無害」だが、Spliterator/類似度計算・教育用途での chunking 一貫性の観点で別途記録。

ベースライン (本レビュー時点、抜粋):

| Lang | Sentences | TotalSegs | ZWNJsegs | % |
|---|---|---|---|---|
| ko | 100 | 461 | 13 | 2.8% |
| ko_bus | 100 | 452 | 14 | 3.1% |
| ko_kp | 100 | 459 | 13 | 2.8% |
| fi | 100 | 434 | 9 | 2.1% |
| et | 100 | 452 | 10 | 2.2% |
| hu | 100 | 432 | 7 | 1.6% |
| tr | 100 | 442 | 11 | 2.5% |
| az | 100 | 443 | 12 | 2.7% |
| mn | 100 | 444 | 10 | 2.3% |
| mn_cn | 100 | 437 | 2 | 0.5% |
| ja | 100 | 454 | 6 | 1.3% |
| qu | 100 | 434 | **0** | 0.0% |
| gn | 100 | 439 | **0** | 0.0% |
| xh | 100 | 418 | **0** | 0.0% |
| bn | 100 | 438 | **0** | 0.0% |

qu/gn/xh/bn が ZWNJ ゼロ。これらは「全融合方針」を一貫している場合は問題ありませんが、後述のとおり xh と bn は **既に分かち書き分割をしておきながら ZWNJ を付けていない** ため描画が壊れています。

## 指摘事項 (Issues found)

### 1. #25 ko / ko_bus / ko_kp との比較で ko/ko_kp #69 のみ位格接尾辞 ZWNJ 抜け 【確実】
- **Current:** ko `C:「부모님」 H:「에게」 …`、ko_kp `C:「부모님」 H:「에게」 …`、ko_bus `C:「부모님」 H:「한테」 …`
- **Problem:** `에게/한테`(与格・「〜に」)は接尾辞であり、原則どおりなら `‌에게` でなければなりません。実際、同じ ko 内の #25 `B:「‌에」`, #1 `H:「‌에서」`, #9 `D:「‌에」`, #17 `D:「‌에」`, #26 `B:「‌에서」` はいずれも ZWNJ 付き。toy renderer で再生すると `걔는 부모님 에게 긴 편지를 썼다`(に前に空白が入る、明らかに不自然)。
- **Proposed fix:** ko `H:「‌에게」`, ko_kp `H:「‌에게」`, ko_bus `H:「‌한테」`。op:"settext", value:"‌에게"(他2同様)。

### 2. #70 ko / ko_bus / ko_kp ともに時間 D:「에」 が ZWNJ 抜け 【確実】
- **Current:** 3変種すべて `E:「9시」 D:「에」 C:「닫는다」`
- **Problem:** ko #9, #17, #25 では同じ `에` が `‌에` で保持されているのに、#70 だけ三方言とも素の `에`。renderer 上 `9시 에 닫는다` と空白が挿入され、ko #17 の `3시에` と整合しません。
- **Proposed fix:** 3変種とも `D:「‌에」`。

### 3. #73 ko / ko_bus / ko_kp の F:「에서」 が ZWNJ 抜け 【確実】
- **Current:** ko `B:「내 침대」 F:「에서」 …`、ko_bus 同形、ko_kp `B:「침대」 F:「에서」 …`
- **Problem:** #1 `H:「‌에서」`, #26 `B:「‌에서」`, #52 `F:「‌에서」`, #96 `C:「‌에서」` と「에서」は4文すべて ZWNJ 付き。#73 だけ3変種とも抜けている。renderer は `내 침대 에서 매일 밤 잔다` と「内 침대」と「에서」の間に空白を挿入し、現代韓国語正書法に反します。
- **Proposed fix:** 3変種とも `F:「‌에서」`。

### 4. #77 ko / ko_bus / ko_kp の D:「에」 が ZWNJ 抜け 【確実】
- **Current:** 3変種とも `B:「결과」 D:「에」 C:「놀랐다/놀라였다」`
- **Problem:** #2 と同根。renderer は `결과 에 놀랐다` を出力。同一言語内の他文と直接矛盾します。
- **Proposed fix:** 3変種とも `D:「‌에」`。

### 5. #38 ko / ko_kp の A:「서」(=에서の縮約) が ZWNJ 抜け 【確実】
- **Current:** ko `D:「여기」 A:「서」 E:「보는」 …`、ko_kp 同形。ko_bus は `A:「여서」` と1語融合済み。
- **Problem:** `여기서`(ここから)の `서` は `에서` の縮約助詞で、原則どおり接辞分割するなら `‌서`。renderer は `여기 서 보는` と空白を挿入し、語の同一性が完全に壊れます。ko_bus は融合保持で問題なし。
- **Proposed fix:** ko / ko_kp `A:「‌서」`。

### 6. #98 ko / ko_bus / ko_kp の D:「이」 は対象外(再確認のみ) 【要検討→却下】
- **Current:** ko `A:「나는」 D:「이」 E:「요리를」 …`
- **Problem の有無:** `이` は文末助詞「が」(subject) ではなく指示詞「この」(=ja「この」、D ロールが ja と同じ)。隣接独立語であり ZWNJ 不要。#5/#12/#18/#43/#45/#78/#87/#93/#99 でも同じく独立指示詞として扱われている。**修正不要**。

### 7. #25 fi の B:「sä」 が ZWNJ 抜け(位格接尾辞 -ssä) 【確実】
- **Current:** fi `D:「yritykses」 B:「sä」`
- **Problem:** `yrityksessä`(会社で = 位格)を `yritykses + sä` に分割しているが、`sä` は接尾辞そのもの。renderer は `suuressa yritykses sä` と空白を入れ、語が真っ二つになります。fi #43 `A:「‌n」`、#52 `F:「‌lla」`、#53 `D:「‌ssa」`、#96 `C:「‌ssa」` ではすべて ZWNJ 付きで分割しており、運用が二重基準。
- **Proposed fix:** `B:「‌sä」`(op:"settext", value:"‌sä")。さらに D 側も `D:「yrityksessä」` の単一化 + 役割再付与で対応する案もあるが、本プロジェクトの「分割優先」方針からは ZWNJ 補完が正当。

### 8. #26 fi の B:「ssa」 が ZWNJ 抜け 【確実】
- **Current:** fi `E:「puisto」 B:「ssa」`
- **Problem:** 同上。`puistossa`(公園で)の位格接尾辞 `-ssa`。renderer 出力 `puisto ssa`(語分裂)。
- **Proposed fix:** `B:「‌ssa」`。

### 9. #9 fi の D:「iin」 が ZWNJ 抜け(向格 -iin) 【確実】
- **Current:** fi `E:「Japan」 D:「iin」 F:「ensi」 G:「vuonna」`
- **Problem:** `Japaniin`(日本へ = 向格)を分割。renderer 出力 `Japan iin ensi vuonna` で「ヤパン イイン」のような不自然な分裂が起きます。fi 中で `‌` 付き接尾辞の前例があるのに ZWNJ を欠く。
- **Proposed fix:** `D:「‌iin」`(op:"settext", value:"‌iin")。

### 10. #25 / #26 et の B:「s」 が ZWNJ 抜け(内格接尾辞 -s) 【確実】
- **Current:** et #25 `D:「ettevõtte」 B:「s」`、#26 `E:「pargi」 B:「s」`
- **Problem:** エストニア語の内格接尾辞 `-s`(`ettevõttes`=会社で、`pargis`=公園で)。et #1 `H:「‌s」`、#43 `A:「‌s」`、#45 `E:「‌s」`、#53 `D:「‌s」`、#73 `F:「‌s」` はすべて ZWNJ 付き(=既存運用)。#25 と #26 だけ素の `s`。renderer 出力 `suures ettevõtte s` / `pargi s`(語が分裂)。
- **Proposed fix:** 両文とも `B:「‌s」`(op:"settext", value:"‌s")。

### 11. #26 hu の B:「ban」 が ZWNJ 抜け(内格接尾辞 -ban) 【確実】
- **Current:** hu `E:「a park」 B:「ban」 C:「játszanak」`
- **Problem:** ハンガリー語の内格 `-ban`(`a parkban`=公園で)。hu #9 `D:「‌ba」`、#53 `D:「‌ben」`、#69 `H:「‌nek」`、#73 `F:「‌on」` などはすべて ZWNJ 付き。#26 だけ ZWNJ 抜けで `a park ban` と分裂描画。
- **Proposed fix:** `B:「‌ban」`。

### 12. #25 / #26 / #33 / #51 / #69 / #70 tr の接尾辞群が ZWNJ 抜け 【確実】
- **Current (代表):**
  - #25 `D:「şirket」 B:「te」`(処格)
  - #26 `E:「park」 B:「ta」 … D:「lar」`(処格+複数)
  - #33 `D:「temiz」 B:「di」`(過去 -di)
  - #51 `A:「Büyükanne」 E:「m」`(所有 -m)
  - #69 `D:「yaz」 E:「dı」`(過去 -dı)
  - #70 `E:「9'」 D:「da」`(処格 -da)
- **Problem:** これらはすべて分かち書きが許されない膠着接尾辞。`feedback_glue_marker.md` の方針および同言語内の #46 `F:「‌la」`、#52 `F:「‌da」`、#73 `F:「‌da」` の運用と矛盾。toy renderer 出力例: `Babam büyük şirket te çalışır` / `Çocuklar park ta oynuyor lar` / `Otel odası çok temiz di` / `Büyükanne m ilginç hikâyeler anlatır` / `O ailesine uzun bir mektup yaz dı` / `Mağaza akşam 9' da kapanır` — いずれも語が空白で分裂し、トルコ語の正書法を破壊します。
- **Proposed fix (各):**
  - #25 `B:「‌te」`
  - #26 `B:「‌ta」` + `D:「‌lar」`
  - #33 `B:「‌di」`
  - #51 `E:「‌m」`
  - #69 `E:「‌dı」`
  - #70 `D:「‌da」`

### 13. #9 / #51 / #69 az の接尾辞群が ZWNJ 抜け 【確実】
- **Current:**
  - #9 `E:「Yaponiya」 D:「ya」`(与格 -ya)
  - #51 `A:「Nənə」 E:「m」`(所有 -m)
  - #69 `D:「yaz」 E:「dı」`(過去 -dı)
- **Problem:** #12 の tr と同型。アゼルバイジャン語の格・人称・時制接尾辞。renderer は `Yaponiya ya` / `Nənə m ...` / `O ... yaz dı` と分裂出力。
- **Proposed fix:** #9 `D:「‌ya」`、#51 `E:「‌m」`、#69 `E:「‌dı」`。

### 14. #51 uz / tk の所有接尾辞 E:「m」 が ZWNJ 抜け 【確実】
- **Current:** uz `A:「Buvi」 E:「m」`、tk `A:「Mama」 E:「m」`
- **Problem:** 1人称所有 `-m`。renderer は `Buvi m qiziqarli ...` / `Mama m gyzykly ...` と分裂。
- **Proposed fix:** uz / tk ともに `E:「‌m」`。

### 15. #26 tk の B:「de」 が ZWNJ 抜け 【確実】
- **Current:** tk `E:「seýilgäh」 B:「de」 C:「oýnaýarlar」`
- **Problem:** 処格 `-de`。tk #52 `F:「‌da」`(round9 で適用済)など先例あり。renderer `seýilgäh de oýnaýarlar` と空白挿入。
- **Proposed fix:** `B:「‌de」`。

### 16. #25 mn の B:「д」 が ZWNJ 抜け(与位格 -д) 【確実】
- **Current:** mn `D:「компани」 B:「д」 E:「ажилладаг」`
- **Problem:** モンゴル語の与位格 `-д`(`компанид`=会社で)。同言語 #70 `D:「‌т」`、#77 `D:「‌д」` ではすべて ZWNJ 付き。#25 だけ抜けて renderer は `том компани д ажилладаг` を出力。
- **Proposed fix:** `B:「‌д」`。

### 17. #26 mn の B:「д」 が ZWNJ 抜け 【確実】
- **Current:** mn `E:「цэцэрлэгт хүрээлэн」 B:「д」`
- **Problem:** #16 と同様の与位格 `-д`。renderer `цэцэрлэгт хүрээлэн д тоглож` で語分裂。
- **Proposed fix:** `B:「‌д」`。

### 18. #25 mn_cn の与位格 ᠳᠤ が ZWNJ 抜け、同系統他文と二重基準 【確実】
- **Current:** mn_cn #25 `B:「ᠳᠤ」`、#26 `B:「ᠳᠦ」`、#70 `B:「ᠲᠤ」`、#77 `B:「ᠳᠦ」`、#73 `B:「ᠳᠡᠭᠡᠷ᠎ᠡ」`(独立後置詞ではなく接尾辞)
- **Problem:** mn_cn は ZWNJ 付き segment が #52 / #89 の2件しかなく、全体方針として接尾辞融合 (`ᠺᠣᠮᠫᠠᠨᠢ ᠳᠤ` のように伝統モンゴル文字の慣習で接尾辞を **半角分かち書き** する正書法)とも矛盾します。実描画は `ᠺᠣᠮᠫᠠᠨᠢ ᠳᠤ` と通常空白(U+0020)を含み、伝統モンゴル文字では narrow no-break space (U+202F, MVS) を使うのが標準。
- **Proposed fix:** mn_cn の接尾辞は (a) 全融合して語幹に戻す、または (b) ZWNJ で前置して描画上の空白を消す、のいずれかに統一。最小修正は #25/#26/#70/#77 各 B を `‌` 前置 + 残しもの。横断的決定が必要なため【確実+要検討混在】。本ラウンドでは少なくとも #25 / #26 の `B:「ᠳᠤ」` / `B:「ᠳᠦ」` に ZWNJ を付与し mn と整合を取ることを提案。

### 19. #26 xh の B:「e」 + E:「pakini」 の前接補語 ZWNJ 抜け 【確実】
- **Current:** xh `A:「Abantwana」 D:「ba」 C:「dlala」 B:「e」 E:「pakini」`
- **Problem:** Bantu 系の位置詞接頭辞 `e-`(`epakini`=公園で)が独立 segment になっているが、後続 `pakini` 側に ZWNJ がない。renderer 出力 `Abantwana ba dlala e pakini` で接頭辞が分離し、Xhosa 正書法に違反します。さらに subject marker `D:「ba」` も独立で `Abantwana ba dlala` と分裂(正しくは `Abantwana badlala`)。
- **Proposed fix:** 描画上の空白を消すなら **後続セグメント** に ZWNJ 前置。すなわち xh `E:「‌pakini」` および `C:「‌dlala」`。同じ問題が #14 xh `A:「Ndi」 C:「ya」`(`Ndiya`=私は行く)、#54 xh `D:「Kufuneka」 A:「si」`、#78 xh `D:「Ndicinga」 A:「le」`(`le`=this の demonstrative なら別)、#80 xh `D:「yi」`、#81 xh `F:「ne」`、#91 xh `D:「yi」`、#99 xh `A:「le」` にも該当。**xh は ZWNJ ゼロのまま接頭辞・接続詞・性別マーカーを分割しており、Bantu 全体で運用が破綻**。

### 20. #26 zu の B:「e」 が ZWNJ 抜け(xh と同型) 【確実】
- **Current:** zu `A:「Izingane」 C:「zidlala」 B:「e」 E:「paki」`
- **Problem:** `epaki`(公園で)の `e-` 接頭辞。renderer `zidlala e paki` と分離。zu の ZWNJ は #54 `A:「si」` を含めて1件のみ。
- **Proposed fix:** `E:「‌paki」`。

### 21. #26 bn の B:「ে」 が ZWNJ 抜け(処格接尾辞) 【確実】
- **Current:** bn `E:「পার্ক」 B:「ে」 C:「খেলছে」`
- **Problem:** ベンガル語の処格接尾辞 `-ে`(`পার্কে`=公園で)。本来は語末母音記号で語幹と一体。renderer は `পার্ক ে খেলছে` と分裂し、文字単独で「ে」が浮く異常状態。bn は ZWNJ ゼロのため運用前例なしだが、原則どおりであれば ZWNJ 前置が必要。
- **Proposed fix:** `B:「‌ে」` または、より自然には E と B を融合して `E:「পার্কে」` 単一化(B ロールを別の語に割り当てるか削除)。

### 22. #26 / #38 / #49 / #73 ja の助詞群が ZWNJ 抜け(描画は無害だが chunking 一貫性で要修正) 【要検討】
- **Current:** ja の助詞 `に / で / と / から / か / の / を / は` は #1, #4, #9, #10, #17, #25, #26, #28, #38, #40, #46, #52, #53, #69, #70, #73, #77, #80, #96, #99 など **全 22 segment で ZWNJ ゼロ**。一方 ja の ZWNJ 付き segment は #26 D:「‌いる」、#32 E:「‌たい」、#36 D:「‌いる」、#48 D:「‌たい」、#53 E:「‌いる」、#58 E:「‌たい」 の補助動詞 6 件のみ。
- **Problem:** ja は `NO_SPACE_LANGS` に含まれるため最終描画は壊れない(改行・空白なし)。しかし、(a) ko/tr/fi 等の他言語との chunking convention の対称性、(b) `feedback_glue_marker.md` の原則の言語非依存的適用、(c) tokenizer/類似度計算で「で」「に」が独立トークン扱いされる影響(検索クエリで `公園で` が `公園 で` で分解されてヒットしない)、を考えると **方針として ja でも ZWNJ を付与すべき**。少なくとも補助動詞 (たい/いる) で既に ZWNJ を採用しているのと整合性が取れていません。
- **Proposed fix (任意・大規模):** ja の助詞 segment 全 22 件と ja_kyo の同 20 件、ja_osa の 16 件に対し ZWNJ 前置を一括適用。op は各 `settext`。優先度は ko 系修正 (#1-#5) より低く【要検討】。
- 注: NO_SPACE 言語でも ZWNJ を付ければ tokenizer の挙動が一致するため、害はなく利得のみ。

### 23. #69 過去形 D|E の分割が tr/az にあって kk/ky/uz/tk/ug に無い 【確実】
- **Current:** tr `D:「yaz」 E:「dı」`、az `D:「yaz」 E:「dı」`(ZWNJ 抜けは #12, #13 で別途指摘)。kk `D|E:「жазды」`、ky `D|E:「жазды」`、uz `D|E:「yozdi」`、tk `D|E:「ýazdy」`、ug `D|E:「يازدى」`(融合のまま)。
- **Problem:** これはレビュー #21 のラウンド10で「claimed-but-not-applied」と既に指摘されている懸案。kk/ky/uz/tk/ug の過去形を tr/az に揃えて分割する場合、新セグメント E 側は ZWNJ 必須(`ды/ди/dy/دى`)。横断レビュアーの立場から、**まず ZWNJ 規約を整備したうえで分割を再適用するのが安全**と提案します。
- **Proposed fix:** 5言語で `D:「жаз/yoz/ýaz/ياز」 E:「‌ды/‌di/‌dy/‌دى」`。実施には #21 round10 の指摘との整合性確認が必要。

### 24. #46 sw F:「na」 / #77 sw D:「na」 / #46 rw F:「n'」 / #46 ny F:「ndi」 — 道具・前置詞句クリティック 【蓋然】
- **Current:** sw #46 `A:「Nilizungumza」 F:「na」 B:「rafiki」`、sw #77 `C:「alishangaa」 D:「na」 B:「matokeo」`、rw #46 `F:「n'」 B:「inshuti」`、ny #46 `F:「ndi」 B:「mnza」 G:「‌nga」`
- **Problem:** sw の `na`(=with/and) は前置詞で通常独立語、空白あり描画で正しい。ただし rw の `n'`(=na の母音脱落形)はアポストロフィー付きクリティックで `n'inshuti` と隣接単語に**接続描画**するのが標準正書法。renderer は `Navuganye n' inshuti yanjye` と分離して印字するが、`n'` の後に空白がある状態は Kinyarwanda 正書法的に不自然(「n' inshuti」と書くなら通常は省略しない `na inshuti` が選ばれる)。
- **Proposed fix:** rw #46 `B:「‌inshuti」`(後続側 ZWNJ)。sw の独立前置詞 `na` は許容範囲。

### 25. #46 ny G:「‌nga」 のセグメント割り当ての非対称 【要検討】
- **Current:** ny `A:「Ndinakamba」 F:「ndi」 B:「mnza」 G:「‌nga」 C:「pa foni」 D:「ora limodzi」`
- **Problem:** `mnzanga`(私の友だち)が `mnza` + `‌nga`(1人称所有接尾辞)に分割され、後者のみ ZWNJ 付き。これは正しい運用例(✓)。ただし sw #46 の対応箇所は `B:「rafiki」 G:「yangu」` と所有を独立独立語として保持(空白あり)。Bantu 内でこの **接尾所有 vs 独立所有代名詞** の運用が言語ごとに二重基準になっており、横断的に同一原則(分割優先+ZWNJ)で揃えるなら sw も `rafiki` + 別 G が望ましい。本件は既存運用の整合性問題で actionable 度は低い。【要検討】

## 横断的所見 (Methodological)

1. **「ZWNJ ゼロ」言語の二類型**: qu, gn は接尾辞を全融合(分割せずに語幹に保持)しているため ZWNJ 不要(良)。一方 xh, bn は **分割しておきながら ZWNJ を欠く** ので描画が壊れる(悪)。前者は「fuse」方針、後者は「split-without-glue」となっており、後者は明確に修正すべきバグです。
2. **言語ごとの ZWNJ 比率分散**: tr/az/ko/ko_bus/ko_kp/uz が 2.5–3.1%、fi/et/mn が 2.1–2.3%、ja/hu/bo/sw が 1.3–1.6%、mn_cn/mnc/eo/ny/zu/rw が 0.5–1.0% と階段状。低い言語群は分割粒度が粗い(全融合寄り)か、または運用漏れ(後者なら本レビューの修正対象)。mn_cn は mn と語族同一なのに ZWNJ 5倍未満であり、mn 並みに揃えるべき(指摘 #18)。
3. **方言間の不整合**: ko(標準)/ko_bus(釜山)/ko_kp(平壌)は概ね ZWNJ 運用一致(指摘 #1–#5 は3変種同時に発生)、ja(標準)/ja_kyo(京都)/ja_osa(大阪)も同様(指摘 #22)。すなわち修正は方言一括で行うのが正当。`feedback_fix_all_variants_together.md` 方針に合致。
4. **「描画上は無害」の落とし穴**: ja/zh/th 系は NO_SPACE_LANGS 指定で描画では空白が入らないが、(a) tokenizer 学習、(b) 類似度計算、(c) 検索クエリ、(d) 将来 NO_SPACE 指定を外したときの後方互換性、いずれの観点でも ZWNJ を**省くメリットは無い**。プロジェクトの memory 規約に従って統一すべき。
5. **チェックリスト(将来用)**: 新規言語追加時は ZWNJ 比率を膠着型語群の平均(2–3%)と比較し、極端に外れる言語(<1% または >5%)について手動レビューする workflow を `.wf_langmap_consistency.mjs` に統合することを推奨。

## スコアカード

| 区分 | 件数 | 備考 |
|---|---|---|
| 確実 (renderer で語分裂を確認) | 17 | #1, #2, #3, #4, #5, #7, #8, #9, #10, #11, #12, #13, #14, #15, #16, #17, #19, #20, #21 |
| 蓋然 (描画は微妙だが規約上要修正) | 3 | #18, #23, #24 |
| 要検討 (NO_SPACE 言語 / 運用裁量) | 3 | #6 (却下), #22, #25 |
| 既存運用が妥当(修正不要) | 1 | #6 |

総数: **24件提起**(うち1件は再確認のみで修正不要)。

横断レビュアーとしての所感: LangMap は膠着語の chunking 規約 (`feedback_glue_marker.md`) を Turkic round 9 で広範に適用済みであり、運用思想は一貫しています。しかし(a) Korean/Finnish/Estonian/Hungarian/Mongolian の特定文での個別漏れ(#1–#5, #7–#17)、(b) Xhosa/Zulu/Bengali の **未着手** 状態(#19–#21)、(c) Japanese の NO_SPACE 由来の運用緩み(#22)、(d) Manchu script (mn_cn) の方針未定(#18) が残存しています。最も優先度が高いのは ko 系 4件(#1–#5)と fi/et/hu 系 5件(#7–#11)で、これらは単一文字 ZWNJ 前置のみで修正完了するため compactly applicable。Bantu 系(#19, #20)は方針判断を伴うため、群29(Niger-Congo)レビュアーと擦り合わせて全 100 文に展開することを推奨します。

---

ファイル状態: **OPEN** — 開発チーム回答待ち

---

## Dev response — round 1 (2026-06-04)

ご指摘ありがとうございます。各 issue を `node` で逐一検証(`text.charCodeAt(0) === 0x200C` 判定)した結果、レビュアーの観察はすべて再現できました。本ラウンドの方針: **renderer 上で実害(語分裂)が発生している ZWNJ 抜けはすべて accept**、NO_SPACE 起因の方針判断・他レビュー依存・群レビュー横断のものは defer。

### 判定一覧

| # | 言語/文 | 判定 | 備考 |
|---|---|---|---|
| 1 | ko/ko_bus/ko_kp #69 H 에게/한테 | ✅ accept | 3変種同時 ZWNJ 前置 |
| 2 | ko/ko_bus/ko_kp #70 D 에 | ✅ accept | 時間位格 |
| 3 | ko/ko_bus/ko_kp #73 F 에서 | ✅ accept | 位格 |
| 4 | ko/ko_bus/ko_kp #77 D 에 | ✅ accept | 結과+에 |
| 5 | ko/ko_kp #38 A 서 | ✅ accept | ko_bus は融合済みのため対象外 |
| 6 | ko #98 D 이 | ⛔ reject | レビュアー判定どおり指示詞「この」、ZWNJ 不要 |
| 7 | fi #25 B sä | ✅ accept | 位格 -ssä の suffix 側 |
| 8 | fi #26 B ssa | ✅ accept | 位格 -ssa |
| 9 | fi #9 D iin | ✅ accept | 向格 -iin |
| 10 | et #25 / #26 B s | ✅ accept | 内格 -s 両方 |
| 11 | hu #26 B ban | ✅ accept | 内格 -ban |
| 12 | tr #25/#26/#33/#51/#69/#70 | ✅ accept | -te/-ta/-lar/-di/-m/-dı/-da、計7件 |
| 13 | az #9/#51/#69 | ✅ accept | -ya/-m/-dı、計3件 |
| 14 | uz/tk #51 E m | ✅ accept | 1人称所有 |
| 15 | tk #26 B de | ✅ accept | 処格 |
| 16 | mn #25 B д | ✅ accept | 与位格 |
| 17 | mn #26 B д | ✅ accept | 与位格 |
| 18 | mn_cn #25/#26 B ᠳᠤ/ᠳᠦ | ✅ accept (minimal) | mn と整合させる最小修正。MVS (U+202F) 全面採用は別ラウンドへ |
| 19 | xh #26 B+E / D+C | ✅ accept (partial) | #26 のみ E:‌pakini + C:‌dlala。他文(#14/#54/#78/#80/#81/#91/#99)の xh sweep は demonstrative/clitic 判定が要るため defer |
| 20 | zu #26 E paki | ✅ accept | 位置詞接頭辞 e- |
| 21 | bn #26 B ে | ✅ accept | ZWNJ 前置を採用(merge 案は不採用、分割優先方針による) |
| 22 | ja/ja_kyo/ja_osa 助詞群 (NO_SPACE) | ⏸ defer | 描画上無害、scope が大きい。tokenizer 整合性は別ラウンドで一括対応 |
| 23 | kk/ky/uz/tk/ug #69 過去形 D|E 分割 | ⏸ defer | レビュー #21 round10 の決着を待つ |
| 24 | rw #46 B inshuti | ✅ accept | n' クリティック後接の ZWNJ。sw の独立 na は据え置き |
| 25 | ny/sw 所有非対称 | ⏸ defer | レビュアー自身が actionable 度低と判定。Niger-Congo 横断ラウンドで対応 |

### 集計

- 提起 issue 数: 25
- accept: 18 issue 群 → **編集 42 件**
- reject: 1 (#6)
- defer: 4 (#19 の他文 sweep / #22 / #23 / #25)
- 部分 accept: 1 (#19 は #26 のみ accept、他文 defer)

### 検証メモ

- すべての対象 `find` テキストはセンテンス×言語セル内で **1 回のみ** 出現するため `nth` 指定不要(`/tmp/uniq_39.mjs` で確認)。
- 42 件すべて `newText.charCodeAt(0) === 0x200C` を確認、`newText === '‌' + find` を満たす。
- JSON は `JSON.parse` を通過。op は全件 `settext`(text のみ書き換え、role は無変更)。display-preservation guard の `reconcileDisplay` が ZWNJ を自然に通すため、隣接同 role 文字との衝突も発生しません(role 変更なし)。

### 出力

- 編集 JSON: `/tmp/lm_edits_39.json`(42 件)

ファイル状態: **AWAITING REVIEWER** — round 1 dev 回答完了

