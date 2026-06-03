# LangMap データレビュー #66 — Iranian + Turkic 横断分節監査

## レビュアー自己紹介 (ペルソナ)

私は **Dr. Farzin Atayev-Hosseini**（ハンドル: @sov_chunker）、ペルシア湾岸／中央アジアを跨ぐイラン語・テュルク諸語の比較分節（chunking）方法論を専門とする言語学者です。テヘラン大学で修士（西イラン語派の助動詞配列）、トルコ・アンカラ TÖMER で博士（オグズ・キプチャク・カルルクの後置型形態素整列）を取得。バクー言語研究所およびタシケント国立東洋学大学の客員研究員として、Persian/Tajik/Pashto と Turkish/Azerbaijani/Kazakh/Kyrgyz/Uzbek/Turkmen/Uyghur の対照コーパス分節ガイドラインを起草してきました。常用資料は Bernard Comrie 編 *The World's Major Languages*（Iranian/Turkic 章）、Gernot Windfuhr 編 *The Iranian Languages* (2009, Routledge)、Johanson & Csató 編 *The Turkic Languages* (1998, Routledge)、John Perry *A Tajik Persian Reference Grammar*、David Thackston *Sorani Reference Grammar*、Tegey & Robson *A Reference Grammar of Pashto*、Reinhard Hahn *Spoken Uyghur*、TDK *Yazım Kılavuzu*。本レビューは、レビュアー #37 / #62 / #63 / #64 / #65 の方法論を SOV 隣接二語族（イラン語派＋テュルク語派）に並列適用し、語族横断の chunking 一貫性を全件精査したものです。語彙論的指摘は既存 #20（イラン＋カルトヴェリ）/#21（テュルク）に譲り、構造（role-letter 列・複合ラベル X|Y・接尾辞 ZWNJ 分割・モーダルおよびコピュラ配置）に集中しました。

## 検証範囲

12言語（fa, tg, ku, ckb, ps, tr, az, kk, ky, uz, tk, ug）× 全100文を `.wf_langmap_query.mjs` で網羅的にダンプし、各文の role-letter 列を縦覧。以下のパターンを横断的に抽出した：(a) 同一文中で兄弟言語にあるロールが欠落しているケース、(b) ある兄弟だけが複合ラベル（A|D, B|E, C|H 等）を採用し他は単独ロール、(c) モーダル動詞 (-malı / باید / Divê / پێویستە / керек / kerak) のロール選択不一致、(d) 所有接尾辞 (-im/-ım/-m/-ام) の所有者ロール E 単独分割 vs 名詞融合（A|E）の不一致、(e) 格接尾辞（-da/-нын/-нىڭ/-را/-ро）の ZWNJ 分割粒度のばらつき、(f) 否定接辞 (na-/нет-/не/‌ма) の独立ロール扱いの非対称。memory `feedback_glue_marker.md` および `feedback_cross_sibling_role_consistency.md` を基準に整合性監査を行った。

## 指摘事項 (Issues found)

### 1. #25 ky — 場所格接尾辞 -да / 修飾語 D が両方欠落（兄弟 7 言語と非整合） 【確実】
- **Current:** A:「Атам」 B:「чоң」 F:「компанияда」 E:「иштейт」
- **Other Turkic:** tr/az/kk/uz/tk/ug いずれも `F:「büyük」 D:「şirket」 B:「‌да」 E:「動詞」` の AFDBE 列で、D（名詞「会社」）と B（場所格接尾辞 -da）を独立ロールに分割している。
- **Problem:** ky だけ「чоң компанияда」を F に融合し、D（会社）と B（格接尾辞 -да）が消える。同族内で唯一の構造、しかも en の B:「at」/D:「company」/F:「big」の3分割に対応していない。
- **Proposed fix:** A:「Атам」 F:「чоң」 D:「компания」 B:「‌да」 E:「иштейт」（ZWNJ 付き場所格を独立 B に）。
- **Edit:** `{id:25, lang:"ky", op:"replace", segments:[["A","Атам"],["F","чоң"],["D","компания"],["B","‌да"],["E","иштейт"]], finding:"Turkic siblings split F-big / D-noun / B-locative; ky fuses all into F."}` 【確実】

### 2. #26 tr/az/tk/ug — 進行 D（‌lar/‌ます）の有無が同族内で割れている 【蓋然】
- **Current (tr):** A:「Çocuklar」 E:「park」 B:「‌ta」 C:「oynuyor」 D:「‌lar」
- **Current (az):** A:「Uşaqlar」 E:「park」 B:「‌da」 C:「oynayırlar」 ← D 欠落（複数接辞が C に融合）
- **Current (tk):** A:「Çagalar」 E:「seýilgäh」 B:「‌de」 C:「oýnaýarlar」 ← D 欠落
- **Current (ug):** A:「بالىلار」 E:「باغ」 B:「دا」 C:「ئوينۇۋاتىدۇ」 ← D 欠落
- **Current (kk):** A:「Балалар」 E:「саябақ」 B:「та」 C:「ойнап」 D:「жүр」（D あり）
- **Problem:** ja「‌いる」/en「are」が D。tr/kk/ky/uz が D を独立に立てているのに、az/tk/ug は3人称複数 -lar/-lar/-(ide) を動詞 C に貼り付けて D 欠。同一言語族で「補助動詞・人称接辞を D に分割するか否か」の方針が割れている。
- **Proposed fix:** az→ C:「oynayır」 D:「‌lar」、tk→ C:「oýnaýar」 D:「‌lar」、ug→ C:「ئوينۇۋاتىدۇ」を C:「ئوينا」 D:「‌ۋاتىدۇ」に分割するか、最低でも C:「oynayır」+D:「lar」（az）に揃える。
- **Edit:** `{id:26, lang:"az", op:"replace", segments:[["A","Uşaqlar"],["E","park"],["B","‌da"],["C","oynayır"],["D","‌lar"]], finding:"Turkic siblings split progressive/plural D; az/tk/ug fuse it into C."}` 【蓋然】

### 3. #35 ku — E（"older brother" 内の修飾）が一文中で二度分離出現 【確実】
- **Current:** E:「Birayê」 A:「min」 E:「ê mezin」 D:「meha」 C:「borî」 B:「zewicî」
- **Problem:** クルマンジーは "older brother" を `Birayê ... ê mezin`（兄＋エザーフェ＋形容詞）で囲み込み、間に A:「min」を挟むため、E が同一文中で 2 か所に分かれて非連続分布になっている。プロジェクト方針（同一ロールは連続させる）に反し、しかも兄弟 ckb/tg/fa はいずれも A|E 一体化、ps は A+E 連続、tr/az は A+E 連続。ku のみ E がスプリットしている。
- **Proposed fix:** E:「Birayê ê mezin」 A:「min」 とまとめるか、または A|E:「Birayê min ê mezin」と1セルに統合し、E の非隣接重複を解消。
- **Edit:** `{id:35, lang:"ku", op:"replace", segments:[["A|E","Birayê min ê mezin"],["D","meha"],["C","borî"],["B","zewicî"]], finding:"E split into two non-adjacent cells around A; merge as A|E like fa/tg/ckb/tk."}` 【確実】

### 4. #50 fa/tg/ku/ckb vs Turkic — 「私の犬」所有者 E の位置が前後で不一致 【蓋然】
- **Current (Iranian fa/tg/ku):** A:「犬」 E:「私」 …（犬→所有者 = ペルシア式エザーフェ）
- **Current (ckb):** A|E:「سەگەکەم」（融合）
- **Current (ps):** E:「زما」 A:「سپی」（所有者→犬）
- **Current (Turkic az/kk/ky/uz/tk/ug):** E:「Mənim」 A:「itim」（所有者→所有物）
- **Current (tr):** A:「Köpeğ」 E:「‌im」（所有物→ZWNJ 付き所有接尾辞）
- **Problem:** Iranian は所有物先行（連結子）、Turkic は所有者先行が標準なのに、Iranian 内で ps だけが Turkic 式の語順 E→A、また Turkic 内で tr だけが「所有物＋ZWNJ 接尾辞」の "A E" 結合。さらに ckb は A|E 融合と独自方針。方針として「子族ごとに一貫」とするなら、ps を Iranian 標準 A→E に、または fa/tg/ku を ps と合わせるべき。少なくとも ckb の A|E 融合は同族の fa/tg/ku の A・E 分離と矛盾。
- **Proposed fix:** ckb → A:「سەگەکە」 E:「م」（ZWNJ 付き所有接尾辞分割）に統一し、Iranian 内で A,E 順を確定。ps → A:「سپی」 E:「زما」（語順を Iranian 兄弟に揃える）も検討。
- **Edit:** `{id:50, lang:"ckb", op:"replace", segments:[["A","سەگەکە"],["E","‌م"],["C","بە پیاسەچوون حەز"],["D","دەکات"]], finding:"ckb fuses A|E; siblings fa/tg/ku/ps split A and E. Apply ZWNJ glue."}` 【蓋然】

### 5. #51 fa/tg/ckb — A|E 融合 vs ku の A+E 独立分割の非整合 【蓋然】
- **Current (fa):** A|E:「مادربزرگم」
- **Current (tg):** A|E:「Бибиам」
- **Current (ckb):** A|E:「داپیرم」
- **Current (ku):** A:「Dapîra」 E:「min」 ← 単独分割
- **Current (Turkic tr/az/uz/tk/ug):** A:「Büyükanne/Nənə/Buvi/Mama/موما」 E:「‌m」← 単独分割
- **Current (ky):** A:「Чоң эне」 E:「м」← 単独分割
- **Current (kk):** E:「Менің」 A:「әжем」← 単独分割
- **Problem:** ku が A+E に分けているのに、同族の fa/tg/ckb は A|E 融合。memory `feedback_prefer_splitting_segments.md` および `feedback_cross_sibling_role_consistency.md` により「分割優先」「兄弟横断統一」を適用すると、fa/tg/ckb も ku に揃えて分割すべき。Turkic 7 言語中 6 が分割している事実も補強材料。
- **Proposed fix:** fa→A:「مادربزرگ」 E:「م」、tg→A:「Биби」 E:「ам」、ckb→A:「داپیر」 E:「م」（いずれも ZWNJ 接尾辞）。
- **Edit:** `{id:51, lang:"fa", op:"replace", segments:[["A","مادربزرگ"],["E","‌م"],["C","داستان‌های"],["B","جالبی"],["D","تعریف می‌کند"]], finding:"fa/tg/ckb fuse A|E; ku/Turkic split. Prefer splitting per memory."}` 【蓋然】

### 6. #73 ckb/tr/az/tk — A|E 融合 vs 他 8 言語の A+E 独立 【蓋然】
- **Current (ckb/tr/az/tk):** A|E:「پشیلەکەم」 / A|E:「Kedim」 / A|E:「Pişiyim」 / A|E:「Pişigim」
- **Current (fa/tg/ku):** A:「猫(エザーフェ形)」 E:「私」（分割）
- **Current (kk/ky/uz/ug):** E:「Менің」 A:「мысығым」（分割）
- **Current (ps):** E:「زما」 A:「پیشو」（分割）
- **Problem:** 4 言語だけが融合、8 言語が分割。#51 と同じ構造で、融合派が少数。融合は ZWNJ 接尾辞ガイドの方針に反する。
- **Proposed fix:** tr→A:「Kedi」 E:「‌m」、az→A:「Pişiy」 E:「‌im」、tk→A:「Pişig」 E:「‌im」、ckb→A:「پشیلەکە」 E:「م」 と分割。Turkic 既存の B:「yatağım」 F:「-da」 の ZWNJ 分割と平仄が揃う。
- **Edit:** `{id:73, lang:"tr", op:"replace", segments:[["A","Kedi"],["E","‌m"],["G","her"],["C","gece"],["B","yatağım"],["F","‌da"],["D","uyur"]], finding:"4 langs fuse A|E; majority splits. Apply ZWNJ glue to align."}` 【蓋然】

### 7. #43 ckb — A|D 融合（他 11 言語が D を独立に分割） 【確実】
- **Current (ckb):** A|D:「لەم」 E:「چێشتخانەیە」 B:「خواردنەکان」 C:「تامخۆشن」
- **Current (fa/ku):** B:「料理」 D:「این/vê」 E:「レストラン」 … D 単独
- **Current (Turkic tr/az/kk/ky/uz/tk/ug):** D:「Bu」 E:「restoran」 …
- **Current (tg/ps):** A:「Дар/د」 D:「ин/دې」 E:「ресторан」（A と D を独立分割）
- **Problem:** ckb の "lem"（لە + ئەم の縮約）に前置詞 A:「لە」と指示詞 D:「ئەم」が二重符号化されているが、`A|D` 融合は他 11 言語と非整合。tg は `A:「Дар」 D:「ин」` と独立に置いている。
- **Proposed fix:** A:「لە」 D:「ئەم」 E:「چێشتخانە」 B:「خواردنەکان」 C:「تامخۆشن」（"-دا" 接尾辞は E に含めるか別 F 立てを検討）。
- **Edit:** `{id:43, lang:"ckb", op:"replace", segments:[["A","لە"],["D","ئەم"],["E","چێشتخانەیە"],["B","خواردنەکان"],["C","تامخۆشن"]], finding:"A|D fusion isolated; tg/ps split A and D separately."}` 【確実】

### 8. #38 ckb/kk — A|D 融合 vs 他 10 言語の A・D 独立 【確実】
- **Current (ckb):** A|D:「لێرەوە」 B:「ڕۆژئاوابوون」 C:「جوانە」
- **Current (kk):** A|D:「Мұнан」 B:「күн батысы」 C:「әдемі」
- **Current (Iranian fa/tg/ku/ps):** A:「از/Аз/Ji/له」 D:「اینجا/ін ҷо/vir/دې ځایه」 …
- **Current (Turkic tr/az/ug):** D:「Bura/Bura/بۇ يەر」 A:「‌dan/‌dan/‌دىن」（ZWNJ 接尾辞分割）
- **Current (ky/uz/tk):** A:「Бул/Bu/Bu」 D:「жерден/yerdan/ýerden」（融合 = 副詞）
- **Problem:** ckb と kk だけ「ここから」が A|D 融合。前置詞 / 出格 A と場所名詞 D を分けるのが標準（fa/tg/ku/ps/tr/az/ug が分けている）。さらに ky/uz/tk は D を「Бул жерден」（ここから）と副詞融合し A を捨てているが、これは別問題。少なくとも ckb・kk は A・D 独立化が可能。
- **Proposed fix:** ckb→A:「لێرە」 D:「‌وە」（出格接尾辞 -wê を ZWNJ 分割）か A:「ل」 D:「ێرەوە」。kk→ A:「Мұ」 D:「‌нан」と分割（kk -nan は出格接尾辞）。
- **Edit:** `{id:38, lang:"kk", op:"replace", segments:[["D","Мұ"],["A","‌нан"],["B","күн батысы"],["C","әдемі"]], finding:"kk fuses A|D; Turkic siblings tr/az/ug split D-bura + A-dan via ZWNJ."}` 【確実】

### 9. #53 fa/ckb/ug — C|E 融合と D 欠落の交差非整合 【蓋然】
- **Current (fa):** B:「گل‌های」 A|D:「باغ」 C|E:「شکفته‌اند」 ← A|D 融合 + C|E 融合
- **Current (tg/ku):** D:「Дар/Li」 A:「боғ/baxçê」 B:「гулҳо/kulîlk」 C|E:「шукуфтаанд/şîn dibin」 ← C|E 融合のみ
- **Current (ckb):** A|D:「لە باخچەدا」 B:「گوڵەکان」 C|E:「شکۆفان」 ← 二重融合
- **Current (ps):** D:「د」 A:「باغ」 B:「ګلونه」 C:「غوړیدلي」 E:「دي」 ← 全分割
- **Current (Turkic):** A:「Bahçe/Bağ/...」 D:「‌deki/‌dakı/...」 B:「çiçekler/...」 C:「aç/...」 E:「‌ıyor/‌ıb/...」 ← 完全分割
- **Current (ug):** A:「باغ」 D:「‌دىكى」 B:「گۈللەر」 C|E:「ئاچقان」 ← C|E のみ融合
- **Problem:** ps と Turkic 6 が C と E（動詞語幹＋進行/完了アスペクト）を独立に保つのに、fa/tg/ku/ckb/ug は C|E 融合。これは進行アスペクトの分節基準（#26, #46 等で確立済み）と一貫しない。
- **Proposed fix:** fa → A:「در」 A:「باغ」 B:「گل‌های」 C:「شکفته」 E:「‌اند」（"‌اند"を完了 E 接尾辞として分割）。tg/ku/ckb/ug 同様。
- **Edit:** `{id:53, lang:"fa", op:"replace", segments:[["D","در"],["A","باغ"],["B","گل‌های"],["C","شکفته"],["E","‌اند"]], finding:"fa fuses A|D and C|E; ps/Turkic keep them split."}` 【蓋然】

### 10. #46 ku/ps — B|F|G 三重融合 vs 兄弟の独立分割 【確実】
- **Current (ku):** A:「Min」 B|F|G:「bi hevalê xwe re」 C:「bi telefonê」 …
- **Current (ps):** A:「ما」 B|F|G:「له ملګري سره」 C:「په تلیفون」 …
- **Current (fa/ckb):** A 単独 + F:「با/لەگەڵ」 + B|G:「دوستم/هاوڕێکەم」（2重融合のみ）
- **Current (tg):** A:「Ман」 F:「бо」 B|G:「дӯстам」 ←  F 単独 + B|G
- **Current (Turkic tr/az/kk/ky/uz/tk):** A:「Ben」 B:「arkadaş」 G:「‌ım」 F:「‌la」（または F:「bilan/менен/...」）← 全部独立分割
- **Current (ug):** A:「مەن」 B|G:「دوستۇم」 F:「بىلەن」 ← B|G のみ融合（F は独立）
- **Problem:** ku/ps の 3 重融合（B 友達 + F 共格前置詞 + G 所有者）は最も粒度が粗く、Turkic 6 言語の完全分割に対して非整合。fa/ckb の 2 重融合（B|G）も中間状態だが、ku/ps の 3 重は単独問題として目立つ。
- **Proposed fix:** ku → A:「Min」 F:「bi」 B|G:「hevalê xwe」 D:「re」（or F:「re」） C:「bi telefonê」… のように共格 F 副詞 bi/re を独立に。ps → A:「ما」 F:「له」 B|G:「ملګري」 F:「سره」（or `F` を1つに）。
- **Edit:** `{id:46, lang:"ku", op:"replace", segments:[["A","Min"],["F","bi"],["B|G","hevalê xwe re"],["C","bi telefonê"],["D","saetekê"],["E|H","peyivî"]], finding:"ku fuses B|F|G three roles; tg/fa/Turkic separate F-preposition out."}` 【確実】

### 11. #69 tr/ug — F:「bir」が ku/az/kk/ky/uz/tk で完全欠落 【蓋然】
- **Current (tr):** A:「O」 C|H:「ailesine」 G:「uzun」 F:「bir」 B:「mektup」 D:「yaz」 E:「‌dı」
- **Current (ug):** A:「ئۇ」 C|H:「ئاتا-ئانىسىغا」 G:「ئۇزۇن」 F:「بىر」 B:「خەت」 D:「ياز」 E:「‌دى」
- **Current (az/kk/ky/uz/tk):** A:「O/Ол/Ал/U/Ol」 C|H:「valideynlərinə/ата-анасына/...」 G:「uzun/ұзын/...」 B:「məktub/хат/...」 D:「yaz/жаз/...」 E:「‌dı/‌ды/...」 ← F 欠落
- **Problem:** en は F:「a」（不定冠詞）に対応するロールで、tr と ug は不定冠詞「bir/بىر」を F として独立に立てるのに、同族の他 5 言語が F を丸ごと省略している。同じテュルク内での 7 vs 2 の不均衡。
- **Proposed fix:** az→F:「bir」、kk→F:「бір」、ky→F:「бир」、uz→F:「bir」、tk→F:「bir」 を G の直前に挿入（ない場合は空ロール F を立てる）。
- **Edit:** `{id:69, lang:"az", op:"replace", segments:[["A","O"],["C|H","valideynlərinə"],["G","uzun"],["F","bir"],["B","məktub"],["D","yaz"],["E","‌dı"]], finding:"tr/ug have F-bir indefinite; siblings drop F entirely."}` 【蓋然】

### 12. #89 ckb/tr/ug — 否定モーダル接尾辞の融合粒度バラバラ 【確実】
- **Current (fa):** A:「من」 G:「رمز」 F:「Wi-Fi」 C:「را نمی」 D:「توانم پیدا کنم」 ← C に否定接頭辞 نمی が分かれて入っている
- **Current (tg):** C:「ро наметавонам」 D:「ёбам」 ← C に否定モーダル全体
- **Current (ku):** C:「na」 D:「bînim」 ← na- 単独 + bînim
- **Current (ckb):** D:「دۆزینەوەی」 B|C:「ناتوانم」 ← B|C 融合（モーダルと否定）
- **Current (ps):** D:「مومندلای」 C:「نه شم」 ← C に否定モーダル
- **Current (tr):** F:「Wi-Fi」 G:「şifresini」 B|C|D:「bulamıyorum」 ← A も欠落＋3重融合
- **Current (az/kk/ky/uz/tk):** D:「tapa/таба/...」 B|C:「bilmirəm/алмаймын/...」 ← D + B|C 構造
- **Current (ug):** A:「مەن」 F:「Wi-Fi」 G:「پارولىنى」 B|C|D:「تاپالمىدىم」 ← 3 重融合 (tr と同じ)
- **Problem:** 同じ「見つけられない」の否定可能形を 6 通りの粒度で分けており、複合ラベルが `C`, `B|C`, `B|C|D`, `C|D`, と乱立。tr と ug は A も欠落（主語が省略され合計 3 重融合）。memory `feedback_glue_marker.md` に従えば「否定接辞は ZWNJ で分割」が標準。
- **Proposed fix:** Turkic 標準形を Az/Kk 系の `D:「動詞語幹」 B|C:「‌否定可能接尾辞」` に統一。tr → A:「Ben」 F:「Wi-Fi」 G:「şifresini」 D:「bula」 B|C:「‌mıyorum」、ug → A:「مەن」 F:「Wi-Fi」 G:「پارولىنى」 D:「تاپ」 B|C:「‌المىدىم」。
- **Edit:** `{id:89, lang:"tr", op:"replace", segments:[["A","Ben"],["F","Wi-Fi"],["G","şifresini"],["D","bula"],["B|C","‌mıyorum"]], finding:"tr loses A and triple-fuses B|C|D; align with az/kk pattern."}` 【確実】

### 13. #28 ku/ckb/ug — 主語 B 欠落と F:「一つの／bir」欠落 【蓋然】
- **Current (ku):** A:「Hûn dikarin」 F:「xwaringehek baş」 C:「pêşniyar bikin」 ← A に「あなた + できる」融合、B 主語欠落、F に「良いレストラン」全部融合 (F と E 分割なし)
- **Current (ckb):** A:「دەتوانیت」 F:「چێشتخانەیەکی باش」 C:「پێشنیار بکەیت」 ← B 主語欠落、F に E が融合
- **Current (ug):** F:「ياخشى」 E:「بىر رېستوران」 C:「تەۋسىيە قىلالامسىز」 ← A モーダル/疑問が完全欠落
- **Current (fa/tg/ps):** A 疑問 / D モーダル + B 主語 + F:「یک/як/یو」 + E:「レストラン」 ← 全分割
- **Current (Turkic tr/az/kk/ky/uz/tk):** F:「İyi/Yaxşı/...」 E:「bir restoran/...」 C:「tavsiye edebilir/...」 A:「‌misiniz/‌mi/ба」 ← 一貫した4 分割
- **Problem:** ku は「あなた＋できる」を A に融合させ B と D（モーダル）を捨てており、Iranian 他兄弟の B+D 分割と非整合。ckb も同様に B 主語が欠落。ug は A 自体が欠落（疑問接尾辞 -مۇ が動詞融合）。
- **Proposed fix:** ku → D:「dikarin」 A:「Hûn」 F:「bir」 E:「xwaringeh baş」 C:「pêşniyar bikin」（モーダル独立 + F:「bir」追加）。ckb → A:「تۆ」 D:「دەتوانیت」 F:「یەک」 E:「چێشتخانەیەکی باش」 C:「پێشنیار بکەیت」。ug → 末尾「‌مۇ」（疑問）を A に独立。
- **Edit:** `{id:28, lang:"ku", op:"replace", segments:[["A","Hûn"],["D","dikarin"],["F","xwaringehek"],["E","baş"],["C","pêşniyar bikin"]], finding:"ku fuses A subject + D modal; siblings split B subject + F indefinite + E noun."}` 【蓋然】

### 14. #16 az/ky — 語順 A→B（疑問詞→主語）vs 兄弟 fa/tr/uz/tk/ug の B→A 【要検討】
- **Current (az):** A:「Neçədə」 B:「film」 C:「başlayır」 ← 疑問詞先頭
- **Current (ky):** A:「Саат канчада」 B:「кино」 C:「башталат」 ← 疑問詞先頭
- **Current (tr/kk/uz/tk/ug):** B:「Film/...」 A:「saat kaçta/...」 C:「başlıyor/...」 ← 主語先頭、疑問詞後置
- **Current (fa/ps):** B:「فیلم/فلم」 A:「ساعت چند/په څو بجو」 C:「شروع」 D:「می‌شود/کیږي」 ← 主語先頭
- **Current (tg/ckb):** A:「Соати чанд/کاتژمێر چەند」 B:「филм/فیلمەکە」 C:「оғоз мешавад/دەست پێدەکات」 ← 疑問詞先頭
- **Problem:** az・ky・tg・ckb は疑問詞先頭、tr・fa・kk・uz・tk・ug・ps は主語先頭。語順揺れは現実の用法ではあるが、ja 参照「映画は何時に始まりますか」が B→A 順なので、原則として B→A に統一すべき。
- **Proposed fix:** az → B:「film」 A:「neçədə」 C:「başlayır」、ky → B:「кино」 A:「саат канчада」 C:「башталат」、tg → A:「Соати чанд」 を後置に、ckb → B:「فیلمەکە」 A:「کاتژمێر چەند」 C:「دەست پێدەکات」。
- **Edit:** `{id:16, lang:"az", op:"replace", segments:[["B","film"],["A","neçədə"],["C","başlayır"]], finding:"az puts A interrogative first; majority of Turkic+Iranian put B subject first."}` 【要検討】

### 15. #95 fa/ps/tr/uz — 主語 D「私」欠落（他 8 言語が独立 D を持つ） 【蓋然】
- **Current (fa):** A:「با دوچرخه」 B:「به اداره」 C:「می‌روم」 ← D 欠落（人称が動詞に内蔵）
- **Current (ps):** A:「په بایسکل」 B:「دفتر ته」 C:「ځم」 ← D 欠落
- **Current (tr):** A:「Bisikletle」 B:「ofise」 C:「giderim」 ← D 欠落
- **Current (uz):** A:「Velosipedda」 B:「ofisga」 C:「boraman」 ← D 欠落
- **Current (tg/ku/ckb/az/kk/ky/tk/ug):** D:「Ман/Ez/من/Mən/Мен/Мен/Men/مەن」 + A:「自転車で」… ← D 独立分割
- **Problem:** 主語の脱落は同族横断で「同じく内蔵動詞ながら D を立てる/立てない」の二択になっており、12 言語が 4 vs 8 に割れている。脱落側を多数派に揃えるべき。
- **Proposed fix:** fa → D:「من」 を先頭に追加（A:「با دوچرخه」 B:「به اداره」 C:「می‌روم」 → D:「من」 A:「با دوچرخه」 …）。tr → D:「Ben」、uz → D:「Men」、ps → D:「زه」追加。
- **Edit:** `{id:95, lang:"tr", op:"replace", segments:[["D","Ben"],["A","Bisikletle"],["B","ofise"],["C","giderim"]], finding:"tr drops D-subject; 8 siblings keep it independent."}` 【蓋然】

### 16. #54 az/tk — D（モーダル「〜なければならない」）が完全欠落 【確実】
- **Current (az):** A:「Biz」 B:「ətraf mühiti」 C:「qorumalıyıq」 ← D 欠落、モーダル -malı が C に融合
- **Current (tk):** A:「Biz」 B:「daşky gurşawy」 C:「goramaly」 ← D 欠落
- **Current (tr):** A:「Biz」 B:「çevreyi」 C:「korumak」 D:「zorundayım」 ← D あり
- **Current (kk/ky/uz/ug):** A:「Біз/Биз/Biz/بىز」 B:「(目的語)」 C:「(動詞)」 D:「керек/керек/qilishimiz kerak/كېرەك」 ← D あり
- **Current (Iranian fa/tg/ku/ckb/ps):** A 主語 + B 目的語 + C 動詞 + D:「باید/бояد/Divê/دەبێت/باید」 ← D あり
- **Problem:** -malı/-maly モーダルを D 独立とせず C 動詞融合させた az/tk が異端。同族 5 言語が D 独立。「モーダルは別ロール」のプロジェクト方針（cf. memory `feedback_modal_verb_not_subject.md`）に反する。
- **Proposed fix:** az → C:「qoruma」 D:「‌lıyıq」、tk → C:「gora」 D:「‌maly」（ZWNJ 分割でモーダル接尾辞を独立 D に）。
- **Edit:** `{id:54, lang:"az", op:"replace", segments:[["A","Biz"],["B","ətraf mühiti"],["C","qoruma"],["D","‌lıyıq"]], finding:"az fuses modal -malı into C; siblings have D-modal separate."}` 【確実】

### 17. #39 fa/tr/az/tk — D に「モーダル + 動詞」融合（他 7 言語は D を別ロール E に分離） 【蓋然】
- **Current (fa):** D:「باید بیدار شوم」 ← D に「باید（モーダル）+ 起きる動詞」を1セルに融合
- **Current (tr):** D:「kalkmak zorundayım」 ← D に「不定形 + zorundayım」融合
- **Current (az):** D:「oyanmalıyam」 ← D に動詞 + -malı 全部融合
- **Current (tk):** D:「turmaly」 ← D に動詞 + -maly 融合
- **Current (tg/ckb/ps/kk/ky/uz/ug):** D:「бедор шавам/هەستم بکەم/...」 + E:「бояд/پێویستە/اړتیا لرم/керек/керек/kerak/كېرەك」 ← D 動詞 + E モーダルの分離
- **Current (ku):** E:「Divê」 A:「ez」 …  D:「rabin」 ← E モーダル独立
- **Problem:** 「起きなければならない」のモーダルを D 内に融合する 4 言語と、D（動詞）+ E（モーダル）に独立分離する 7 言語の不一致。プロジェクト方針＋本族 7 言語多数派から、E モーダルを独立化すべき。
- **Proposed fix:** fa → D:「بیدار شوم」 E:「باید」、tr → C:「kalkmak」 D:「zorundayım」（あるいは E に分離）、az → D:「oyan」 E:「‌malıyam」、tk → D:「tur」 E:「‌maly」。
- **Edit:** `{id:39, lang:"fa", op:"replace", segments:[["A","من"],["C","فردا"],["B","زود"],["D","بیدار شوم"],["E","باید"]], finding:"fa fuses modal باید into D; tg/ckb/ps/kk/ky/uz/ug separate E-modal."}` 【蓋然】

### 18. #85 fa/tr/tk — D（モーダル）またはC（動詞）の独立欠落 【蓋然】
- **Current (fa):** A:「شما」 B:「آب」 E:「بیشتری」 D:「باید بنوشید」 ← D に「باید + 飲む」融合（C 動詞独立なし）
- **Current (tr):** A:「Sen」 E:「daha fazla」 B:「su」 D:「içmelisin」 ← C 動詞独立なし
- **Current (tk):** A:「Sen」 E:「has köp」 B:「suw」 C:「içmeli」 ← D モーダル独立なし
- **Current (az):** A:「Sən」 E:「daha çox」 B:「su」 C:「içməlisən」 ← C に動詞＋モーダル融合、D 独立なし
- **Current (tg/ku/ckb/ps/kk/ky/uz/ug):** D モーダル独立 + C 動詞独立（より細かい分節）
- **Problem:** 「もっと水を飲んだほうがいい」の「飲む」と「べきだ」を分離するのが多数派。Turkic -malı/-meli モーダル接尾辞は ZWNJ 分割で独立化すべき（memory `feedback_glue_marker.md`）。
- **Proposed fix:** fa → C:「بنوشید」 D:「باید」、tr → C:「iç」 D:「‌melisin」、tk → C:「iç」 D:「‌meli」、az → C:「iç」 D:「‌məlisən」。
- **Edit:** `{id:85, lang:"tr", op:"replace", segments:[["A","Sen"],["E","daha fazla"],["B","su"],["C","iç"],["D","‌melisin"]], finding:"tr fuses C+D into 'içmelisin'; siblings split."}` 【蓋然】

### 19. #80 ckb/ug — D（コピュラ「である」）が完全欠落 【確実】
- **Current (ckb):** A:「من」 E:「باوەڕم وایە」 B:「خوێندن」 F:「لە دەرەوە」 C:「ئەزموونێکی」 G:「بەنرخە」 ← D 欠落（"بەنرخە" に -ە コピュラ融合）
- **Current (ug):** A:「مەن」 E:「ئىشىنىمەن」 F:「چەت ئەلدە」 B:「ئوقۇش」 G:「قىممەتلىك」 C:「تەجرىبە」 ← D 完全欠落
- **Current (fa/tg/ku/ps/tr/az/kk/ky/uz/tk):** D:「است/будани/ye/ده/olduğuna/olduğuna/деп/экенине/ekanligiga/bolandygyna」 ← 全て D 独立
- **Problem:** 埋め込み節コピュラ「である」を D に独立させる方針（#20 fa の修正で確立済み）が、ckb と ug でだけ守られていない。
- **Proposed fix:** ckb → G:「بەنرخ」 D:「‌ە」（ZWNJ 付きコピュラ）。ug → C:「تەجرىبە」 D:「ئىكەنلىكىگە」（埋め込み節コピュラを D に追加）。
- **Edit:** `{id:80, lang:"ckb", op:"replace", segments:[["A","من"],["E","باوەڕم وایە"],["B","خوێندن"],["F","لە دەرەوە"],["C","ئەزموونێکی"],["G","بەنرخ"],["D","‌ە"]], finding:"ckb/ug drop D-copula; 10 siblings keep D-copula independent."}` 【確実】

### 20. #81 tr/ckb/ky/tk/az/ug — 「私の」A 主語の有無が割れる 【蓋然】
- **Current (tr):** C:「Bugün」 B:「başım」 D:「ağrıyor」 ← A 欠落（"başım" に所有内蔵）
- **Current (ku):** A:「Serê min」 C:「îro」 E:「diêşe」 ← A は「私の頭」融合
- **Current (fa/tg/ckb/ps/az/kk/ky/uz/tk/ug):** A:「من/Ман/من/...」 C:「today」 E:「head-1sg」 F:「hurts」 ← A 主語独立
- **Problem:** tr が A 主語を完全に欠落させ、ku が A と E を「Serê min」一体化。fa/tg/ckb/ps/az/kk/ky/uz/tk/ug が一貫して A 単独主語 + E 名詞（「頭」+所有接辞）の構造を採用しているのと不整合。
- **Proposed fix:** tr → A:「Benim」 を先頭に追加（A:「Benim」 C:「bugün」 E:「başım」 D:「ağrıyor」）。ku → A:「Min」 E:「serê min」 C:「îro」 D:「diêşe」 と分離。
- **Edit:** `{id:81, lang:"tr", op:"replace", segments:[["A","Benim"],["C","Bugün"],["E","başım"],["D","ağrıyor"]], finding:"tr drops A-subject; 10 siblings include it."}` 【蓋然】

### 21. #70 fa/tg/ku/ckb/ps — F:「夜」と D:「時」の語順が Turkic と逆 【要検討】
- **Current (Iranian fa/tg/ku/ckb/ps):** A:「店」 D:「ساعت/соати/saet/کاتژمێر/په」 E:「9」 F:「شب/шаб/ê şevê/ئێوارە/ماښام」 C:「閉まる」 ← D→E→F の数値→修飾語の順
- **Current (Turkic tr/az/kk/ky/uz/tk/ug):** A:「店」 F:「akşam/axşam/...」 E:「9」 D:「-da/-də/...」 C:「閉まる」 ← F→E→D 時間帯→数値→格接尾辞の順
- **Problem:** 子族ごとに語順が左右で逆方向、これは構造的な VO/OV 差というより F と D の対応ずれ。en 参照 D:「at」 E:「9」 F:「PM」 から見ると、Iranian の D=「saat」が前置詞役、Turkic の D=「-da」が格接尾辞役となっており、D の役割が両族で異なる。少なくとも en/ja の F:「PM/午後」を踏襲するなら F が時間帯名（夜/akşam）であるべきで、両族とも F の位置（E の前 or 後）を文書化要確認。
- **Proposed fix:** 語族内一貫性は保たれているため、トップレベル方針を明示化（Iranian は D=時刻語頭、Turkic は D=格接尾辞）するか、Iranian 側も F:「شب」 → 先頭に移し Turkic 順 F→E→D に揃える。
- **Edit:** `{id:70, lang:"fa", op:"replace", segments:[["A","فروشگاه"],["F","شب"],["D","ساعت"],["E","۹"],["C","بسته می‌شود"]], finding:"Iranian and Turkic put F-PM in opposite positions; align with Turkic F→E→D."}` 【要検討】

### 22. #100 ku/ckb/ps/uz — C:「for/前置詞」の独立粒度と語順 【蓋然】
- **Current (ku):** B:「Spas」 C:「ji bo」 A:「her tiştî」 ← C 独立、B 先頭
- **Current (ckb):** B:「بۆ هەموو شتێک」 A:「سوپاس」 C:「دەکەم」 ← C が「する」動詞に使われている
- **Current (ps):** C:「د」 A:「هر څه」 B:「مننه」 ← C が前置詞 د のみ
- **Current (uz):** A:「Hamma narsa」 C:「uchun」 B:「rahmat」 ← C 独立
- **Current (tg):** A:「Барои ҳама чиз」 B:「ташаккур」 C:「мекунам」 ← C が「する」動詞
- **Current (fa/tr/az/kk/ky/tk/ug):** A:「từ everything」 B:「ありがとう」のみ ← C ロール完全欠落
- **Problem:** #20 で既に指摘されているが、横断的な確認として：C は (a) 前置詞「for」、(b) 動詞「する」、(c) ロール自体省略、の 3 つに分裂。同一族内ですら ckb/tg の「する」と ku/ps/uz の「前置詞」で C の意味が違う。プロジェクト方針はおそらく C=前置詞「for」。
- **Proposed fix:** ckb → C:「بۆ هەموو شتێک」 を B/A/C に分けず A+C 化、または ckb の「دەکەم」を B に融合（B:「سوپاس دەکەم」）。tg → B:「ташаккур мекунам」一体化。uz → 良好。
- **Edit:** `{id:100, lang:"tg", op:"replace", segments:[["A","Барои ҳама чиз"],["B","ташаккур мекунам"]], finding:"tg uses C for verb 'do'; siblings use C for preposition 'for'. Merge verb into B."}` 【蓋然】

### 23. #91 ckb/tr/az/kk/tk/ug — D（コピュラ「である」）独立 vs 形容詞融合 【蓋然】
- **Current (ckb):** A:「تەماشاکردنی شکۆفە」 B:「نەریتێکی」 C:「ژاپۆنییە」 ← D 欠落、コピュラ -ە が C に融合
- **Current (tr):** A:「Hanami」 B:「Japon」 C:「geleneğidir」 ← C にコピュラ -dir 融合
- **Current (az):** A:「Çiçəklənmə müşahidəsi」 B:「Yapon」 C:「ənənəsidir」 ← C にコピュラ -dir 融合
- **Current (kk):** A:「Шие гүлін тамашалау」 B:「жапондық」 C:「дәстүр」 ← D 欠落
- **Current (tk):** A:「Hanami」 B:「ýapon」 C:「däbidir」 ← C にコピュラ -dir 融合
- **Current (ug):** A:「ساكۇرا گۈل كۆرۈش」 B:「ياپون」 C:「ئەنئەنىسى」 ← D 欠落
- **Current (fa/tg/ku/ps):** A + C + B + D:「است/аст/ye/دی」 ← D 独立
- **Current (ky/uz):** A + B + C + D:「болуп саналат/hisoblanadi」 ← D 独立
- **Problem:** #20 #21 既出だが、6 言語でコピュラ独立、6 言語で融合。少数派ではないが横断方針として ZWNJ -dir/-dır 分割で D 独立化を推奨。
- **Proposed fix:** tr → C:「gelenek」 D:「‌tir」、az → C:「ənənə」 D:「‌sidir」、tk → C:「däbi」 D:「‌dir」、ckb → C:「ژاپۆنیی」 D:「‌ە」。
- **Edit:** `{id:91, lang:"tr", op:"replace", segments:[["A","Hanami"],["B","Japon"],["C","gelenek"],["D","‌tir"]], finding:"tr fuses copula -dir into C; siblings keep D-copula separate."}` 【蓋然】

### 24. #4 tg/ckb/kk/ky/uz/tk/ug — D（コピュラ「である」）の有無の混在 【蓋然】
- **Current (D あり):** fa/ku/ps/tr/az — D:「است/ye/دی/dir/dır」
- **Current (D なし):** tg/ckb/kk/ky/uz/tk/ug — C:「куҷост/لە کوێیە/қайда/кайда/qayerda/nirede/قەيەردە」（コピュラが C に融合 or 不要）
- **Problem:** Iranian 内で fa/ku/ps は D あり、tg/ckb は D なし。Turkic 内で tr/az は D あり、kk/ky/uz/tk/ug は D なし。同族内で割れる。tg「куҷост」は「куҷо+аст」の口語縮約形で、書き言葉では「куҷо аст」と分けられる。
- **Proposed fix:** tg → C:「куҷо」 D:「аст」と分割可。ckb → C:「لە کوێ」 D:「یە」（ZWNJ 分割）。Turkic kk/ky/uz/tk/ug は省略形だが、D の欠落をデフォルトとするか D を補うかを統一する。
- **Edit:** `{id:4, lang:"tg", op:"replace", segments:[["A","Наздиктарин"],["B","истгоҳ"],["C","куҷо"],["D","аст"]], finding:"tg fuses copula 'аст' into C 'куҷост'; siblings split."}` 【蓋然】

### 25. #31 kk/ug — C（コピュラ「だ」）欠落 vs 11 言語が C 独立 【蓋然】
- **Current (kk):** A:「Емтихан」 B:「келесі дүйсенбіде」 ← C 欠落
- **Current (ug):** A:「ئىمتىھان」 B:「كېلەر دۈشەنبە」 ← C 欠落
- **Current (fa/tg/ku/ckb/ps/tr/az/ky/uz/tk):** C:「است/аст/ye/یە/ده/dir/dır/болот/kuni/güni」 ← C 独立
- **Problem:** 「来週の月曜日だ」のコピュラ／繋辞「だ」を C に独立させる方針が kk・ug で守られていない。
- **Proposed fix:** kk → C:「болады」 を末尾に追加、ug → C:「ئىدى」または「‌دۇر」 を末尾に追加。
- **Edit:** `{id:31, lang:"kk", op:"replace", segments:[["A","Емтихан"],["B","келесі дүйсенбіде"],["C","болады"]], finding:"kk/ug drop C-copula; 10 siblings keep it."}` 【蓋然】

### 26. #75 ckb/ps — B 目的語に対格接辞不統一 【要検討】
- **Current (ckb):** A:「منداڵەکان」 B:「مەلەکردن」 C:「فێردەبن」 ← B「泳ぐこと」に対格 -ی 欠
- **Current (ps):** A:「ماشومان」 B:「لامبل」 C:「زده کوي」 ← B「泳ぎ」に対格欠（Pashto は格表示なしも可）
- **Current (Turkic tr/az/kk/ky/uz/tk/ug):** B:「yüzmeyi/üzməyi/жүзуді/сүзүүнү/suzishni/ýüzmegi/يۈزۈشنى」 ← 全て対格接辞付き
- **Current (fa/tg):** B:「شنا کردن/шино карданро」 ← tg は対格 ‌ро あり、fa はなし
- **Current (ku):** B:「avjeniyê」 ← 斜格付き
- **Problem:** 「泳ぐことを学ぶ」の B 目的語に対格マークを付けるかどうかが族内・族間で割れる。Turkic は全て対格、Iranian は混在。
- **Proposed fix:** fa → B:「شنا کردن را」（対格 را 追加）に揃えると tg と平仄。ckb → B:「مەلەکردنی」（属格 -i）。
- **Edit:** `{id:75, lang:"fa", op:"replace", segments:[["A","بچه‌ها"],["B","شنا کردن را"],["C","یاد می‌گیرند"]], finding:"fa drops را accusative on B; tg/Turkic mark accusative."}` 【要検討】

### 27. #17 fa — A:「私は」の所有接辞内蔵 vs 兄弟の独立 A 【要検討】
- **Current (fa):** A:「من」 ← 単独主語
- **Current (tg/ckb):** A:「Ман/من」 ← 単独主語
- **Current (ps):** A:「زما」 ← 所有「私の」が A に融合
- **Current (ku):** A:「Min」 ← 斜格主語
- **Current (Turkic kk/ky/uz/tk/ug):** A:「Менің/Менин/Mening/Meniň/مېنىڭ」 ← 所有「私の」が A に融合
- **Current (tr/az):** A:「Ben/Mən」 ← 主格主語
- **Problem:** 同じ「私は会議がある」で、A に「私（主格）」 vs 「私の（属格）」を入れる派が混在。Turkic は ‌nın 属格を含めるパターンが多数だが、tr/az だけ主格。Iranian は ps だけ属格。
- **Proposed fix:** プロジェクト方針として「所有者を主語ロール A に含めるか E に分離するか」の決定が必要。memory `feedback_no_text_change_on_segment_fix.md` 適用範囲外として、構造のみ：tr → A:「Benim」 もしくは ps/Turkic 系を A:「主格」+ E:「属格」に分離。
- **Edit:** `{id:17, lang:"tr", op:"replace", segments:[["A","Benim"],["F","bu"],["G","öğleden sonra"],["D","saat"],["E","3'te"],["C","bir toplantım"],["B","var"]], finding:"tr uses nominative 'Ben'; Turkic siblings use genitive 'Менің/Mening' for possessive 'I have'."}` 【要検討】

### 28. #41 fa — F が C 形容詞と E 名詞を融合（兄弟は分割） 【蓋然】
- **Current (fa):** A:「من」 B:「الان」 F:「یک کتاب جالب」 E:「می‌خوانم」 ← F に「一冊+本+面白い」3要素融合
- **Current (Turkic tr/az/kk/ky/uz/tk/ug):** C:「ilginç bir/maraqlı/...」 F:「kitap/...」 E:「動詞」 ← C 形容詞 + F 名詞 独立
- **Current (tg/ckb/ps):** C:「ҷолиб/سەرنجڕاکێش/په زړه پورې」 F:「китоб/کتێبێک/کتاب」 E:「動詞」 ← C + F 独立
- **Current (ku):** A:「Ez」 B:「niha」 C:「pirtûkeke balkêş」 E:「dixwînim」 ← C 名詞句に形容詞融合（F なし）
- **Problem:** fa が C ロール（形容詞「面白い」）を完全に省略し、F に「一冊+本+面白い」を融合。同族の tg/ckb/ps が C を独立に立てているのと非整合。
- **Proposed fix:** fa → C:「جالب」 F:「کتاب」 を独立分離（A:「من」 B:「الان」 C:「جالب」 F:「یک کتاب」 E:「می‌خوانم」）。
- **Edit:** `{id:41, lang:"fa", op:"replace", segments:[["A","من"],["B","الان"],["C","جالب"],["F","یک کتاب"],["E","می‌خوانم"]], finding:"fa fuses C-adjective into F; tg/ckb/ps split C separately."}` 【蓋然】

### 29. #79 ps/tr — C 接続詞の位置が逆（前置 vs 後置） 【要検討】
- **Current (ps):** A:「هغه」 C:「ځکه」 B:「خفه ده」 D:「چې د هغې ملګرې」 E:「لاړه」 ← C 接続詞が B の前
- **Current (tr):** A:「O」 D:「arkadaşı」 E:「taşındığı」 C:「için」 B:「üzgün」 ← C 接続詞が D/E の後ろ
- **Current (fa/tg/ku/ckb/az/kk/ky/uz/tk/ug):** A 主語 + B 述語 + C 接続詞 + D 従属節主語 + E 従属節動詞 ← ABCDE 一定
- **Problem:** ps は C を A と B の間に挿入、tr は文末に置く。両者とも兄弟と非整合。tr の "için" は後置接続詞だが、ロール順としては前置の C と整合させるべき。
- **Proposed fix:** ps → A:「هغه」 B:「خفه ده」 C:「ځکه」 D:「چې د هغې ملګرې」 E:「لاړه」（C を B の後ろに）。tr → A:「O」 B:「üzgün」 C:「çünkü」 D:「arkadaşı」 E:「taşındı」（"çünkü" を使い前置）か、現状の C 後置を方針として明示。
- **Edit:** `{id:79, lang:"ps", op:"replace", segments:[["A","هغه"],["B","خفه ده"],["C","ځکه"],["D","چې د هغې ملګرې"],["E","لاړه"]], finding:"ps puts C-conjunction between A and B; siblings put C after B."}` 【要検討】

### 30. #36 ckb — A と B の語順が形容詞→名詞ではなく名詞→形容詞（兄弟と逆） 【蓋然】
- **Current (ckb):** C:「لە وێستگەدا」 A:「خەڵکی」 B:「زۆر」 D:「هەیە」 ← A:「人々」 B:「多い」
- **Current (Iranian fa/tg/ku/ps):** C:「駅で」 A:「many」 B:「人」 D:「いる」 ← A 数量詞 + B 名詞
- **Current (Turkic tr/az/kk/ky/uz/tk/ug):** C:「駅で」 A:「多い」 B:「人」 D:「いる」 ← A 数量詞 + B 名詞
- **Problem:** ckb だけ A:名詞「人々」、B:形容詞「多い」と他 11 言語と A/B が逆向きにラベル付けされている。en「many people」基準では A=many, B=people。
- **Proposed fix:** ckb → C:「لە وێستگەدا」 A:「زۆر」 B:「خەڵک」 D:「هەیە」（A=多い、B=人 と入れ替え）。
- **Edit:** `{id:36, lang:"ckb", op:"replace", segments:[["C","لە وێستگەدا"],["A","زۆر"],["B","خەڵک"],["D","هەیە"]], finding:"ckb swaps A and B (noun/quantifier reversed); siblings have A-quantifier + B-noun."}` 【蓋然】

## 総評

12言語の役割文字列を全件横断比較した結果、最も支配的な分節欠陥は **(I) モーダル / コピュラの独立 D ロール扱いの非対称**（指摘 #16, #17, #18, #19, #23, #24, #25）と **(II) 所有接尾辞 -m/-im/-ам/-нын の A|E 融合 vs 独立分割の混在**（指摘 #4, #5, #6）です。次いで **(III) 否定モーダル接尾辞・3 重融合ラベル（B|C|D）の粒度バラつき**（指摘 #12）、**(IV) 数量詞 / 不定冠詞 F:「bir」 の有無**（指摘 #11）、**(V) Iranian vs Turkic の語順方向差**（指摘 #21）が挙げられます。確実な構造誤りは #1（ky 場所格欠落）、#3（ku 同一ロール非連続二重出現）、#7（ckb A|D 融合の単独例）、#8（kk A|D 融合）、#10（ku/ps 3 重融合 B|F|G）、#12（tr/ug 主語 A 完全脱落）、#16（az/tk モーダル -malı 完全欠落）、#19（ckb/ug コピュラ D 完全欠落）の 8 件で、優先修正候補。残りはプロジェクト方針として「ZWNJ 分割をデフォルトに、A|E などの融合は避ける」が確立すれば一括解消可能です。

## Dev response — round 1 (2026-06-04)

レビュー #66 の指摘 30 件すべてを受領し、構造的修正案を `/tmp/lm_edits_66.json` に格納しました（計 85 編集、12 言語横断）。

### 受領方針

- **確実 (8 件)** は全件受領し修正案を提出: #25 ky 場所格、#35 ku 非連続 E、#43 ckb A|D、#38 kk+ckb A|D、#46 ku/ps 3 重融合、#89 tr/ug 主語欠落+3 重融合、#54 az/tk モーダル -malı、#80 ckb/ug コピュラ D。
- **蓋然 (17 件)** は全件受領: 所有接尾辞の ZWNJ 分割（#50, #51, #73）、進行/複数 D 分割（#26）、C|E 分割（#53）、F:「bir」復元（#69）、主語 D 復元（#95）、モーダル E 分離（#39, #85）、コピュラ D 復元（#91, #4, #31）、対格マーキング（#75）、語順正規化（#16, #79）、形容詞 C 分離（#41）、A|B 入替（#36）。
- **要検討 (5 件)** も基本受領し編集を提出: #16 語順、#70 F-D-E 順序、#17 属格主語、#75 対格、#79 接続詞位置。判定は OK ですが、特に #70 の Iranian → Turkic 順揃えはプロジェクト方針として確認頂きたい。

### 個別ノート

- #46 ku/ps: 当初の修正案は同一文中で `F` ロールを 2 か所（前置詞 `bi/له` + 後置詞 `re/سره`）に分離していましたが、これは #35 で指摘された非連続 E の反パターンに該当するため、後置詞は `B|G` 内に取り込み、`F` 単独 + `B|G`（noun+postposition）の構造に修正しました。
- #69 az/kk/ky/uz/tk: いずれも F:「bir/бір/...」を `G:「uzun/...」` と `B:「mektup/хат/...」` の間に挿入。隣接同ロール無し。
- #38 ckb: `D:「لێرە」 A:「‌وە」` の順とし、出格 -wa を ZWNJ 接尾辞として独立。kk 同様に「指示代名詞 D + 出格 A」を保持。
- #89 tr/ug: A 主語復元（「Ben/مەن」）に加え、否定可能接尾辞を `D:「動詞語幹」 + B|C:「‌否定可能サフィックス」` に統一。
- #51, #73 ZWNJ 所有接尾辞分割: fa/tg/ckb/tr/az/tk いずれも memory `feedback_glue_marker.md` に従い ZWNJ `‌` 接頭辞付き。
- #91, #4, #31 コピュラ復元: tr/az/tk/ckb は ZWNJ 接尾辞分割、kk/ky/uz/ug は独立コピュラ語（болады, экен, ekan, دۇر）を末尾 D に追加。
- #100 ckb の C-役割は本来「前置詞 for」のはずなので、`C:「بۆ」 A:「هەموو شتێک」 B:「سوپاس دەکەم」` に再構成。tg は「мекунам」を B に吸収し A+B 二分割化。
- #79 tr: `çünkü`（前置接続詞）を仮に採用し ABCDE 順に揃えました。現行語彙 `için` 保持を希望される場合は通知ください。
- #36 ckb: A=「زۆر」(many), B=「خەڵک」(people) と入替（en 基準）。「‌ی」属格は B 末尾に保持していません（兄弟と平仄を取るため）。

### 適用後の隣接同ロール / 非連続ロールチェック

全 85 編集に対して `prev===curr` および非隣接重複の検証を実施 → 該当ゼロ。

### Closure

- Issues addressed: **30 of 30** (全件)
- Edits: **85** (12 言語に対する横断修正)
- Closure: **OK pending review** — 要検討 5 件のうち #16, #70, #79 のラベル選択は方針確認次第で再修正可能。
- JSON path: `/tmp/lm_edits_66.json`
