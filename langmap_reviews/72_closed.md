# LangMap データレビュー #72 — Horn of Africa + Tibetan structural chunking auditor (アフリカの角＋チベット系構造分節監査)

## レビュアー自己紹介 (ペルソナ)

私は **Dr. Selamawit Berhe-Hailu (handle: @hornofafrica_chunker)**、アディスアベバ大学言語学博士（クシ系・エチオピア＝セム諸語比較形態統語論, 2015）、ハンブルク大学エチオピア研究所客員研究員（2016–2018, アムハラ／ティグリニャ語コーパス分節）、ロンドン SOAS にてソマリ／オロモ語の SOV 焦点構文と分節境界の研究で post-doc（2019–2021）、その後ブータン王立カレッジ・ゾンカ語言語学センターでチベット系言語との対照分節タグ付け作業に従事。常用資料は Saeed *Somali Reference Grammar* (Foris/Routledge 1993)、Owens *A Grammar of Harar Oromo* (Buske 1985)、Leslau *Reference Grammar of Amharic* (Harrassowitz 1995)、Voigt *Das tigrinische Verbalsystem*（Reimer 1977）、Goldstein *Essentials of Modern Literary Tibetan* (UC Press 1991) / *Standard Tibetan Grammar* (UC Press 2003)、van Driem *The Grammar of Dzongkha* (DDC 1992)、Saeed *Focus and Topic in Somali* (Croom Helm 1984)。

本ラウンドの目的は #29 (Niger-Congo+Nilotic+Cushitic 広域語彙) / #24 (ANE/Other Semitic 部分 am/ti) / #27 (Mainland SE Asia, bo は綴り正規化のみ) で扱われなかった **6 変種 (so / om / am / ti / bo / dz) の構造的 chunking 監査**である。これら 6 言語は **専門レビュアーがこれまで構造面で割り当てられていない**(語彙は am/ti が #24、so/om が #29 で部分的にカバー)。

**背景の動機：** メタ集計で so の palette 欠落率が **42%**（100文中 42 文で en role の少なくとも 1 つが消失）、om も高水準、am/ti でも目立つ。bo は格助詞 (ལ・ནས・གི) の独立分節において ZWNJ 接頭の欠落が散見される。dz は #1〜#100 ほぼ全件未収録のため対象外（メタ問題として末尾に註記）。

## 参考文献
- Saeed, J. I. *Somali Reference Grammar* (Foris 1993); *Focus and Topic in Somali* (Croom Helm 1984) — `baa / waxa(a) / ayaa` 焦点標識、SOV、定冠詞 -ka/-ta 後置
- Owens, J. *A Grammar of Harar Oromo* (Buske 1985); *Oromo Grammatical Sketch* — SOV、コピュラ `dha`、未完了 `-a`、母音調和
- Leslau, W. *Reference Grammar of Amharic* (Harrassowitz 1995) — SOV、否定 አል-...-ም 環状辞、補文標識 -ኝ/-ዎ、複合動詞 አለ
- Voigt, R. *Das tigrinische Verbalsystem* (Reimer 1977); Tewolde Tedros *Tigrinya Reference Grammar* — SOV、否定 ኣይ-...-ን、補文 ምስ-/እንተ-
- Goldstein, M. C. *Essentials of Modern Literary Tibetan* (UC Press 1991); *Standard Tibetan Grammar* (UC Press 2003) — 格助詞 ལ་ (与・処)、ནས་ (奪)、གི/གྱི/ཀྱི (属), 完了 -པ་རེད་ / 進行 -བཞིན་ཡོད་
- van Driem, G. *The Grammar of Dzongkha* (DDC 1992)
- Memory: `feedback_glue_marker.md`(ZWNJ 接頭で接尾辞分割), `feedback_split_segments_like_reference.md`, `feedback_cross_sibling_role_consistency.md`, `feedback_prefer_splitting_segments.md`
- 既出 #24 (am/ti 語彙修正済み: #18 am ትንሽ→ከመጠን በላይ, #42 ti ትገብር→ትለብስ, #82 am 動詞句, #34 ti ቀስ ኢልካ, #79 ti ዓርኪ ናታ, #65 ti B|E:ሂባትኒ, #48 am C/D 分離, #46 am 動詞句) — 再フラグしない
- 既出 #29 (om/so 語彙: #1 om 玉突き混入, #71 om sagalee, #92 so sambuso, #99 so taariikhdan→xusuustani) — 再フラグしない
- 既出 #27 (bo 綴り ས+ 下接字の正規化方針) — 再フラグしない

## 検証方法

`/tmp/sentences72.mjs` に SENTENCES を ESM 化し、全 100 文 × 6 変種の (a) en 基準と target の role-letter 集合差分（missing / extra）、(b) bo 格助詞独立セルの ZWNJ 接頭有無、(c) 非隣接同一 role-letter の重複（特に so 焦点構文）、(d) 兄弟言語との chunking ばらつき（兄が分割し弟が融合）を `/tmp/audit72b.out`〜`/tmp/audit72u` に集計。語彙判断は #24/#29 に譲り、本ラウンドは **構造/分節のみ**を扱う。本ラウンドは read-only on data.js。提案は構造化 edit としても各項目末に転載。

## 指摘事項 (Issues found) — 20件

### 1. #82 so — 焦点標識 `wuxuu` と本動詞 `sheegay` が非隣接 D-B-D 分裂、en の単一 D に不整合 【確実】
- **Current (so):** A:「Dhakhtarku」 D:「wuxuu」 B:「ii」 D:「sheegay」 C:「inaan nasato」
- **Reference / siblings:**
  - [en] A:「The doctor」 D:「told」 B:「me」 C:「to rest」
  - [om] A:「Hakiimni」 B:「na」 C:「akkan boqodhu」 D:「jedhe」
  - [am] A:「ሐኪሙ」 B:「እኔን」 C:「እንዳርፍ」 D:「ነገረኝ」（#24 で修正済）
  - [ti] A:「ሓኪም」 B:「ንዓይ」 C:「ክዓርፍ」 D:「ነጊሩኒ」
- **Problem:** en/om/am/ti すべてが「言った」を単一 D に持つのに、so だけが `D:wuxuu`（3sg 男性焦点標識）と `D:sheegay`（本動詞）の **非隣接同一 letter D 重複** を生成。プロジェクトの非隣接重複は #29 #99 wo（jar 余分）で却下された禁則と同じパターン。`wuxuu` は焦点構文の主語節融合形（waxa+uu）であり、A:「Dhakhtarku」と論理的に同位（主語焦点）。
- **Proposed fix:** A:「Dhakhtarku」 → A|D:「Dhakhtarku wuxuu」 もしくは A:「Dhakhtarku wuxuu」（焦点標識を主語に融合）、B:「ii」、D:「sheegay」、C:「inaan nasato」。非隣接 D 重複を解消。
- **Edit:** `{id:82, lang:"so", op:"replace", segments:[["A","Dhakhtarku wuxuu"],["B","ii"],["D","sheegay"],["C","inaan nasato"]], finding:"so has non-adjacent D twice (wuxuu focus + sheegay verb); en single D. Fuse focus marker into subject A."}` 【確実】

### 2. #11 so — 「a new book」を D:「buug cusub」に二重融合、E (book) palette 欠落 【確実】
- **Current (so):** A:「Waxaan」 F:「shalay」 C:「ka soo iibsaday」 D:「buug cusub」 B:「maktabadda」
- **Reference / siblings:**
  - [en] A:「I」 C:「bought」 D:「a new」 E:「book」 B:「at the bookstore」 F:「yesterday」
  - [om] A:「Ani」 F:「kaleessa」 B:「suuqii kitaabaa keessatti」 **D:「haaraa」 E:「kitaaba」** C:「bite」
  - [am] A:「እኔ」 F:「ትላንት」 B:「በመጽሐፍ ቤት」 **D:「አዲስ」 E:「መጽሐፍ」** C:「ገዛሁ」
  - [ti] A:「ኣነ」 F:「ትማሊ」 B:「ኣብ መጻሕፍቲ ዱኳን」 **D:「ሓዲሽ」 E:「መጽሓፍ」** C:「ገዚአ」
  - [bo] A:「ང་」 F:「ཁ་སང་」 B:「དཔེ་མཛོད་ཁང་ནས་」 **D:「གསར་པའི་」 E:「དཔེ་ཆ་」** C:「ཉོས་པ་རེད་」
- **Problem:** om/am/ti/bo すべて「new + book」を D + E に分割しているのに、so だけが `buug cusub`（book new、so は名詞-形容詞語順）を D に潰して E を palette から消失。`feedback_split_segments_like_reference.md` に従い分割すべき。
- **Proposed fix:** E:「buug」 D:「cusub」（so の N-A 語順を尊重して E→D 順）。
- **Edit:** `{id:11, lang:"so", op:"replace", segments:[["A","Waxaan"],["F","shalay"],["C","ka soo iibsaday"],["E","buug"],["D","cusub"],["B","maktabadda"]], finding:"so fuses D-new + E-book; om/am/ti/bo all split. so lacks E entirely."}` 【確実】

### 3. #25 so — 「big company」を F:「shirkad weyn」に二重融合、D (company) palette 欠落 【確実】
- **Current (so):** A:「Aabahay」 B:「ka」 F:「shirkad weyn」 E:「wuxuu shaqeeyaa」
- **Reference / siblings:**
  - [en] A:「My father」 E:「works」 B:「at」 C:「a」 F:「big」 D:「company」
  - [om] A:「Abbaan koo」 **F:「guddaa」 D:「dhaabbata」** B:「keessatti」 E:「hojjata」
  - [am] A:「አባቴ」 B:「በ」 **F:「ትልቅ」 D:「ኩባንያ」** E:「ይሠራል」
  - [ti] A:「ኣቦይ」 B:「ኣብ」 **F:「ዓቢ」 D:「ትካል」** E:「ይሰርሕ」
  - [bo] A:「ངའི་ཨ་ཕ་」 **F:「ཆེན་པོའི་」 D:「ཚོང་ལས་ཁང་」** B:「ནང་」 E:「ལས་ཀ་བྱེད་ཀྱི་ཡོད་」
- **Problem:** #11 so と同じパターン。「shirkad weyn」(company big) を F に融合し D が消失。om/am/ti/bo 全変種が D+F に分割している。なお `E:「wuxuu shaqeeyaa」` も焦点標識 wuxuu + 動詞 shaqeeyaa の融合だが、#82 と異なり non-adjacent 重複ではないため本項では分割を強制しない（要検討）。
- **Proposed fix:** F:「weyn」 D:「shirkad」（または D:「shirkad」 F:「weyn」、so N-A 語順優先）。
- **Edit:** `{id:25, lang:"so", op:"replace", segments:[["A","Aabahay"],["B","ka"],["D","shirkad"],["F","weyn"],["E","wuxuu shaqeeyaa"]], finding:"so fuses F-big + D-company; om/am/ti/bo all split. so lacks D entirely."}` 【確実】

### 4. #36 so / bo — 「many people」を A に二重融合、B (people) palette 欠落 【確実】
- **Current (so):** D:「Waxaa jira」 A:「dad badan」 C:「istayshanka」
- **Current (bo):** C:「འབབ་ཚུགས་ནང་」 A:「མི་མང་པོ་」 D:「ཡོད་རེད་」
- **Reference / siblings:**
  - [en] D:「There are」 A:「many」 B:「people」 C:「at the station」
  - [om] C:「Buufata irratti」 **A:「hedduun」 B:「namootaa」** D:「jiru」
  - [am] C:「በጣቢያው」 **A:「ብዙ」 B:「ሰዎች」** D:「አሉ」
  - [ti] C:「ኣብ ጣብያ」 **A:「ብዙሓት」 B:「ሰባት」** D:「ኣለዉ」
- **Problem:** om/am/ti は A(many) と B(people) を独立分節するが、so と bo は名詞句全体を A に潰して B を消失。Somali は N-A 語順（dad badan = people-many）、Tibetan も N-A（མི + མང་པོ་）で、分割可能な内部構造を持つにもかかわらず融合。
- **Proposed fix (so):** B:「dad」 A:「badan」（N-A 語順保持）。
- **Proposed fix (bo):** B:「མི་」 A:「མང་པོ་」 のように分割。
- **Edit (so):** `{id:36, lang:"so", op:"replace", segments:[["D","Waxaa jira"],["B","dad"],["A","badan"],["C","istayshanka"]], finding:"so fuses A-many + B-people; om/am/ti split. so/bo both lack B."}` 【確実】
- **Edit (bo):** `{id:36, lang:"bo", op:"replace", segments:[["C","འབབ་ཚུགས་ནང་"],["B","མི་"],["A","མང་པོ་"],["D","ཡོད་རེད་"]], finding:"bo fuses A-many + B-people into N-A NP; om/am/ti split."}` 【蓋然】

### 5. #76 am / bo — 接続詞 C「when」が動詞に融合、palette C 欠落（兄弟は分離） 【確実】
- **Current (am):** A:「ሙዚቃ」 B:「ስሰማ」 D:「ደስ ይለኛል」
- **Current (bo):** A:「རོལ་མོ་」 B:「ཉན་དུས་」 D:「ང་སྐྱིད་པོ་ཡོང་གྱི་ཡོད་」
- **Reference / siblings:**
  - [en] E:「I」 D:「feel happy」 **C:「when」** E:「I」 B:「listen to」 A:「music」
  - [so] D:「Waan farxaa」 **C:「markaan」** B:「dhagaysto」 A:「muusik」
  - [om] A:「Muuziqaa」 B:「yomman dhageeffadhu」 **C:「yommu」** D:「gammachuu natti dhaga'ama」
  - [ti] A:「ሙዚቃ」 B:「ክሰምዕ」 **C:「ከለኹ」** D:「ሕጉስ ይስመዓኒ」
  - [ko] A:「음악을」 B:「들을」 **C:「때」** D:「행복함을 느낀다」
- **Problem:** so/om/ti/ko すべてが従属節標識「when/とき/markaan/ከለኹ/yommu/때」を独立 C に分節するが、am は条件接頭辞 ስ- を動詞語幹 ሰማ に融合し（`ስሰማ`）、bo は条件名物化辞 དུས་ を動詞語幹 ཉན་ に融合（`ཉན་དུས་`）して C 役を消失させる。Goldstein は ཉན་དུས་ を V+TIME-NMLZ の 2 形態素として分析。Leslau は ስ- を従属節形成接頭辞として独立扱い。
- **Proposed fix (am):** B:「ስ」(ZWNJ 接頭) → むしろ B:「ሰማ」 C:「‌ስ」（接頭辞を ZWNJ で独立分節、agglutinative 言語の方針通り）。または B:「ስ」 C:「ሰማ」と語順は前置だが letter で表記。am 標準綴りでは ስ- が動詞前置のため、現実的には **B:「ሰማ」を C と B に分割**: C:「ስ‌」 B:「ሰማ」順は不自然。シンプルには `B:「ሰማ」` のみ残し条件辞 ስ を C に切り出すのが理想。**確実版 fix**: C:「ስ‌」 B:「ሰማ」、または C と B を融合 B|C:「ስሰማ」で palette 復元。
- **Proposed fix (bo):** B:「ཉན་」 C:「དུས་」（ZWNJ 接頭推奨: C:「‌དུས་」）。
- **Edit (am):** `{id:76, lang:"am", op:"replace", segments:[["A","ሙዚቃ"],["B|C","ስሰማ"],["D","ደስ ይለኛል"]], finding:"am fuses C-when into verb ስሰማ; siblings so/om/ti split conditional marker."}` 【蓋然】
- **Edit (bo):** `{id:76, lang:"bo", op:"replace", segments:[["A","རོལ་མོ་"],["B","ཉན་"],["C","‌དུས་"],["D","ང་སྐྱིད་པོ་ཡོང་གྱི་ཡོད་"]], finding:"bo fuses B-listen + C-when into ཉན་དུས་; split nominalizer དུས་ as own C with ZWNJ glue per Goldstein analysis."}` 【確実】

### 6. #100 so / om / am / ti — 「for everything」の「for」(C) が消失、4 変種揃って融合 【確実】
- **Current (so):** B:「Waad ku mahadsan tahay」 A:「wax walba」
- **Current (om):** A:「Waan hundaaf」 B:「galatoomaa」
- **Current (am):** A:「ለሁሉም ነገር」 B:「አመሰግናለሁ」
- **Current (ti):** A:「ንኹሉ」 B:「የቐንየለይ」
- **Reference / siblings:**
  - [en] B:「Thank you」 **C:「for」** A:「everything」
  - [bo] A:「ཐམས་ཅད་ཀྱི་」 **C:「ཆེད་དུ་」** B:「ཐུགས་རྗེ་ཆེ་」
- **Problem:** bo は「for」(C) を `ཆེད་དུ་` として独立分節するが、Horn of Africa 4 変種すべてが「for」を A に潰す。om の `-f` (dative)、am の `ለ-` (dative)、ti の `ን-` (dative) はいずれも前置・後置の格助詞で、ZWNJ で接尾辞/接頭辞として分節可能。so は前置詞 ku/u/-na 等の dative マーカが必要。
- **Proposed fix (om):** A:「Waan hunda」 C:「‌af」 B:「galatoomaa」（-f 後置を ZWNJ 接頭で分節）。
- **Proposed fix (am):** C:「ለ‌」 A:「ሁሉም ነገር」 B:「አመሰግናለሁ」 — 順序は ለ- 接頭辞を C として前置（語順は接頭辞前）。
- **Proposed fix (ti):** C:「ን‌」 A:「ኹሉ」 B:「የቐንየለይ」。
- **Proposed fix (so):** B:「Waad ku mahadsan tahay」 C:「u」 A:「wax walba」（u = dative「に対して」を補う、または現状維持 + 要検討）。
- **Edit (om):** `{id:100, lang:"om", op:"replace", segments:[["A","Waan hunda"],["C","‌af"],["B","galatoomaa"]], finding:"om fuses dative -f into A; bo splits ཆེད་དུ་ as C. ZWNJ-prefix the suffix per agglutinative policy."}` 【蓋然】
- **Edit (am):** `{id:100, lang:"am", op:"replace", segments:[["C","ለ"],["A","ሁሉም ነገር"],["B","አመሰግናለሁ"]], finding:"am fuses dative ለ- into A; bo splits 'for' as C. Split the prefix to recover palette C."}` 【蓋然】
- **Edit (ti):** `{id:100, lang:"ti", op:"replace", segments:[["C","ን"],["A","ኹሉ"],["B","የቐንየለይ"]], finding:"ti fuses dative ን- into A; bo splits 'for' as C."}` 【蓋然】

### 7. #43 bo — 属格助詞 `གྱི་` 独立セル A に ZWNJ 接頭欠落 【確実】
- **Current (bo):** E:「ཟ་ཁང་」 D:「འདི་」 A:「གྱི་」 B:「ཟ་མ་」 C:「ཞིམ་པོ་འདུག་」
- **Reference / Memory:** `feedback_glue_marker.md` は膠着言語の接尾辞独立セグメントに ZWNJ 接頭 (‌) を必須とする（tr/ko/fi など）。Tibetan の格助詞 ལ/ནས/གི/གྱི/ཀྱི/འི は前後の名詞語幹に音韻的に依存する接辞であり、独立セルとする場合は ZWNJ 接頭が必要。
- **Problem:** A:「གྱི་」が裸で独立。前項目 D:「འདི་」(this) と結合して `འདི་གྱི་` (this-GEN) を成すべき形態素接尾辞だが、ZWNJ なしで独立。
- **Proposed fix:** A:「‌གྱི་」（ZWNJ ‌ を接頭）。
- **Edit:** `{id:43, lang:"bo", op:"replace", segments:[["E","ཟ་ཁང་"],["D","འདི་"],["A","‌གྱི་"],["B","ཟ་མ་"],["C","ཞིམ་པོ་འདུག་"]], finding:"bo standalone genitive གྱི་ lacks ZWNJ prefix per agglutinative-suffix policy."}` 【確実】

### 8. #49 bo — 属格助詞 `གྱི་` 独立セル F に ZWNJ 接頭欠落 【確実】
- **Current (bo):** B:「ངར་」 G:「གནམ་ཐང་」 F:「གྱི་」 E:「ལམ་」 A:「གཅེས་བཅོལ་ཞུས་ན་」 D:「བཤད་རོགས་」
- **Problem:** #43 と同パターン。`G:「གནམ་ཐང་」 + F:「གྱི་」` で「空港の」(airport-GEN) を構成するが F が裸。
- **Proposed fix:** F:「‌གྱི་」。
- **Edit:** `{id:49, lang:"bo", op:"replace", segments:[["B","ངར་"],["G","གནམ་ཐང་"],["F","‌གྱི་"],["E","ལམ་"],["A","གཅེས་བཅོལ་ཞུས་ན་"],["D","བཤད་རོགས་"]], finding:"bo standalone genitive གྱི་ lacks ZWNJ prefix; same defect class as #43."}` 【確実】

### 9. #69 bo — 与格助詞 `ལ་` 独立セル H に ZWNJ 接頭欠落 【確実】
- **Current (bo):** A:「ཁོས་」 C:「ཕ་མ་」 H:「ལ་」 B:「ཡི་གེ་」 G:「རིང་པོ་」 D|E:「བྲིས་པ་རེད་」
- **Problem:** `C:「ཕ་མ་」 + H:「ལ་」` で「両親に」を構成する与格構文だが H が裸。なお C と H を別 letter にしている分節判断（与格を独立 H に振る）は en の H:「to」と整合しており優れている。問題は ZWNJ のみ。
- **Proposed fix:** H:「‌ལ་」。
- **Edit:** `{id:69, lang:"bo", op:"replace", segments:[["A","ཁོས་"],["C","ཕ་མ་"],["H","‌ལ་"],["B","ཡི་གེ་"],["G","རིང་པོ་"],["D|E","བྲིས་པ་རེད་"]], finding:"bo dative ལ་ as standalone H lacks ZWNJ prefix."}` 【確実】

### 10. #77 bo — 道具格助詞 `ལ་` 独立セル D に ZWNJ 接頭欠落 【確実】
- **Current (bo):** A:「ཁོ་」 E:「རྒྱུགས་」 B:「འབྲས་」 D:「ལ་」 C:「ཡ་མཚན་བྱུང་」
- **Problem:** `B:「འབྲས་」 + D:「ལ་」` で「結果に（驚いた）」、Tibetan で経験動詞の対象格を表すマーカ。ZWNJ なし。
- **Proposed fix:** D:「‌ལ་」。
- **Edit:** `{id:77, lang:"bo", op:"replace", segments:[["A","ཁོ་"],["E","རྒྱུགས་"],["B","འབྲས་"],["D","‌ལ་"],["C","ཡ་མཚན་བྱུང་"]], finding:"bo dative/topic ལ་ standalone D lacks ZWNJ prefix."}` 【確実】

### 11. #96 bo — 処格助詞 `ལ` 独立セル C に ZWNJ 接頭欠落 【確実】
- **Current (bo):** A:「སྐུ་མཁྱེན」 E:「རྗེས་མའི」 F:「ལམ་འཛོམས」 C:「ལ」 B:「གཡས་སུ་འཁོར་རོགས」
- **Problem:** `F:「ལམ་འཛོམས」 + C:「ལ」` で「交差点で」（処格）。ZWNJ なし、ツェク（་）も欠落（短形 ལ）。
- **Proposed fix:** C:「‌ལ་」（ZWNJ 接頭 + ツェク補完）。
- **Edit:** `{id:96, lang:"bo", op:"replace", segments:[["A","སྐུ་མཁྱེན"],["E","རྗེས་མའི"],["F","ལམ་འཛོམས"],["C","‌ལ་"],["B","གཡས་སུ་འཁོར་རོགས"]], finding:"bo locative ལ standalone C lacks ZWNJ prefix and trailing tsek."}` 【確実】

### 12. #9 bo / #17 bo — 与格 `ལ` 独立セル D に ZWNJ 接頭欠落（複数文での同一パターン） 【確実】
- **Current (#9 bo):** A:「ངས」 F:「སང」 G:「ལོར」 E:「ཉི་ཧོང」 D:「ལ」 C:「འགྲོ」 B:「འདོད」
- **Current (#17 bo):** A:「ངའི」 F:「དེ་རིང」 G:「ཕྱི་དྲོ」 E:「དུས་ཚོད 3」 D:「ལ」 C:「ཚོགས་འདུ」 B:「ཡོད」
- **Problem:** いずれも E（目的語名詞）+ D:ལ（与・対格）で「~に（行く/会議がある）」を構成する与格句で、D が裸の ལ（ツェクも欠落）。
- **Proposed fix:** D:「‌ལ་」（ZWNJ 接頭 + ツェク補完）。
- **Edit (#9):** `{id:9, lang:"bo", op:"replace", segments:[["A","ངས"],["F","སང"],["G","ལོར"],["E","ཉི་ཧོང"],["D","‌ལ་"],["C","འགྲོ"],["B","འདོད"]], finding:"bo dative ལ standalone D lacks ZWNJ prefix and tsek."}` 【確実】
- **Edit (#17):** `{id:17, lang:"bo", op:"replace", segments:[["A","ངའི"],["F","དེ་རིང"],["G","ཕྱི་དྲོ"],["E","དུས་ཚོད 3"],["D","‌ལ་"],["C","ཚོགས་འདུ"],["B","ཡོད"]], finding:"bo dative ལ standalone D lacks ZWNJ prefix and tsek."}` 【確実】

### 13. #70 bo — 時格助詞 `ར` 独立セル D に ZWNJ 接頭欠落 【確実】
- **Current (bo):** A:「ཚོང་ཁང་」 F:「དགོང་མོ་」 E:「ཆུ་ཚོད་དགུ」 D:「ར」 C:「སྒོ་རྒྱག་གྱི་རེད་」
- **Problem:** `E:「ཆུ་ཚོད་དགུ」 + D:「ར」`（9時に＝時刻+処格 -r）。ར は ལ の短形変異体で語末母音 a/e/i/o の後に来る。裸で独立、ツェクなし、ZWNJ なし。
- **Proposed fix:** D:「‌ར་」。
- **Edit:** `{id:70, lang:"bo", op:"replace", segments:[["A","ཚོང་ཁང་"],["F","དགོང་མོ་"],["E","ཆུ་ཚོད་དགུ"],["D","‌ར་"],["C","སྒོ་རྒྱག་གྱི་རེད་"]], finding:"bo locative-r ར standalone D lacks ZWNJ prefix and tsek."}` 【確実】

### 14. #81 bo — palette 不整合：bo が B/D を使い E/F を欠落、en は A/F/E/C 【確実】
- **Current (bo):** A:「ང་ལ་」 C:「དེ་རིང་」 B:「མགོ་ན་」 D:「གྱི་འདུག་」
- **Reference / siblings:**
  - [en] A:「I」 F:「have」 E:「a headache」 C:「today」
  - [so] A:「Waxaa」 C:「maanta」 F:「i haysa」 E:「madax xanuun」
  - [om] A:「Ani」 C:「har'a」 E:「mataa dhukkubbii」 F:「qaba」
  - [am] C:「ዛሬ」 E:「ራስ ምታት」 F:「አለብኝ」
  - [ti] A:「ኣነ」 C:「ሎሚ」 E:「ሕማም ርእሲ」 F:「ኣለኒ」
- **Problem:** en palette は {A,F,E,C}。so/om/am/ti はすべて E (a headache) と F (have) に対応する letter を使用。bo だけが B (=letter B は本文の他の役割に予約済み)と D を使用し、E と F を欠落。`feedback_cross_sibling_role_consistency.md` の duplicate-letter outlier に該当。
- **Proposed fix:** B:「མགོ་ན་」 → E:「མགོ་ན་」（headache）、D:「གྱི་འདུག་」 → F:「གྱི་འདུག་」（have/exist=有相）。settext は据え置き、letter のみ E/F へ retag。
- **Edit:** `{id:81, lang:"bo", op:"replace", segments:[["A","ང་ལ་"],["C","དེ་རིང་"],["E","མགོ་ན་"],["F","གྱི་འདུག་"]], finding:"bo uses B/D where siblings use E/F for headache/have; retag letters to match cross-sibling palette."}` 【確実】

### 15. #28 so / om / am / ti / bo — 「Could you」(B=you) と「a」(D=indef) が 4 変種揃って palette 欠落 【蓋然】
- **Current (so):** A:「Ma」 C:「ku taliyin kartaa」 F:「makhaayadda」 E:「wanaagsan」
- **Current (am):** F:「ጥሩ」 E:「ምግብ ቤት」 C:「ሊጠቁሙ」 A:「ይችላሉ」
- **Current (bo):** A:「ཁྱེད་ཀྱིས」 F:「བཟང་པོའི」 E:「ཟ་ཁང」 C:「ངོ་སྤྲོད་བྱེད」 D:「ཐུབ་བམ」
- **Reference (en):** A:「Could」 B:「you」 C:「recommend」 D:「a」 F:「good」 E:「restaurant」
- **Problem:** bo のみ palette letter D（=「a」/可能助動詞ཐུབ）を保持。so/om/am/ti は B（=you, 2sg）と D（=indefinite article）の両方を欠落。"you" は agglutinative 一致接尾辞に融合する設計のため許容範囲だが、bo が D を分離している事実は cross-sibling 整合性で兄弟も最低限「可能助動詞」を D に分離するよう促す。
- **Proposed fix:** 各言語の可能助動詞・補助動詞の独立分節を検討（so: ka...kartaa の kartaa を D に、am: ይችላሉ を D に、ti: ትኽእሉ を D に）。
- **Edit (am):** `{id:28, lang:"am", op:"replace", segments:[["F","ጥሩ"],["E","ምግብ ቤት"],["C","ሊጠቁሙ"],["D","ይችላሉ"]], finding:"am ይችላሉ tagged A but corresponds to en D-可能助動詞; retag A→D to align with bo palette."}` 【蓋然】
- **Edit (ti):** `{id:28, lang:"ti", op:"replace", segments:[["F","ጽቡቕ"],["E","ቤት መግቢ"],["C","ክትመኽሩ"],["D","ትኽእሉ"]], finding:"ti ትኽእሉ tagged A but corresponds to en D-aux; retag A→D."}` 【蓋然】

### 16. #38 so — A|D|E の三重複合ラベルに余分な E（palette に存在するが en で未使用）が混入 【蓋然】
- **Current (so):** B:「Qorraxdu markay dhacdo」 A|D:「halkan」 C:「waa qurux badan」
  - 実際の生データを再確認すると `A|D:「halkan」` のみで E は無し（audit72.out 行 336 では `A|D` と記録）。OK — skip 修正、参考扱い。
- **Problem (revised):** 実はソマリは `A|D:halkan` で「from(A) + here(D)」を融合しており、A と D の意味的重なりは妥当。E ラベルは palette には存在するが en は使わない（未使用パレット）。問題なし、本項撤回。
- 当該項目は最終リストから除外（参考情報のみ）。

### 17. #75 so — 「to swim」(B) と他兄弟の chunking ばらつき：so は B:「dabaasha」名詞、om/am/ti/bo は不定詞 【要検討】
- **Current:**
  - [en] A:「The children」 C:「are learning」 B:「to swim」
  - [so] A:「Carruurtu」 C:「way baranaysaa」 B:「dabaasha」
  - [om] A:「Daa'imman」 B:「daakuu」 C:「barachaa jiru」
  - [am] A:「ልጆች」 B:「ዋና」 C:「እየተማሩ ናቸው」
  - [ti] A:「ህጻናት」 B:「ምሕንባስ」 C:「ይመሃሩ ኣለዉ」
  - [bo] A:「ཕྲུ་གུ་ཚོ་」 B:「ཆུ་རྐྱལ་」 C:「སློབ་སྦྱོང་བྱེད་ཀྱི་ཡོད་」
- **Problem:** so の B「dabaasha」は名詞「水泳」、他兄弟（om daakuu, am ዋና, ti ምሕንባስ, bo ཆུ་རྐྱལ་）も同じく動名詞または名詞で、内容自体は同質。語順だけ so は C-B、他は B-C で割れる。letter 整合は取れているため、本項は **要検討（問題なし扱い）**。
- 本項撤回。

### 18. #95 so / am — 主語「私」(D) が消失、so は焦点標識に融合し am は完全脱落 【蓋然】
- **Current (so):** C:「Waxaan ku tagaa」 B:「xafiiska」 A:「baaskiil」
- **Current (am):** A:「በብስክሌት」 B:「ወደ ቢሮ」 C:「እሄዳለሁ」
- **Reference / siblings:**
  - [en] **D:「I」** C:「go」 B:「to the office」 A:「by bicycle」
  - [om] **D:「Ani」** A:「biskileetiin」 B:「gara waajjiraa」 C:「deema」
  - [ti] **D:「ኣነ」** A:「ብብሽክለታ」 B:「ናብ ቤት-ጽሕፈት」 C:「ይኸይድ」
- **Problem:** so は `Waxaan`（焦点標識 waxa + 1sg 主語接辞 -aan）を C に融合（C は「行く」のはずだが waxaan は主語）。am はそもそも D を欠落。om/ti は D:「Ani/ኣነ」を明示。am の pro-drop は許容範囲だが、so は焦点標識を D に分離すべき（#82 と同パターン）。
- **Proposed fix (so):** D:「Waxaan」 C:「ku tagaa」 B:「xafiiska」 A:「baaskiil」。
- **Edit (so):** `{id:95, lang:"so", op:"replace", segments:[["D","Waxaan"],["C","ku tagaa"],["B","xafiiska"],["A","baaskiil"]], finding:"so fuses focus-marker Waxaan (containing 1sg subject) into C-verb; split as D-subject like om/ti."}` 【蓋然】

### 19. #80 am — コピュラ D 欠落、補文標識 ብዬ と本動詞 アムナレフ の融合 【蓋然】
- **Current (am):** A:「እኔ」 F:「በውጭ አገር」 B:「ማጥናት」 G:「ጠቃሚ」 C:「ተሞክሮ」 E:「ብዬ አምናለሁ」
- **Reference / siblings:**
  - [en] A:「I」 E:「believe」 B:「studying」 F:「abroad」 **D:「is」** I:「a」 G:「valuable」 C:「experience」
  - [so] A:「Waxaan」 E:「aaminsanahay」 B:「barashada」 F:「dibadda」 **D:「inay tahay」** C:「khibrad」 G:「qiimo leh」
  - [om] A:「Ani」 F:「biyya alaatti」 B:「barachuu」 C:「muuxannoo」 G:「gatii qabu」 **D:「akka ta'e」** E:「nan amana」
  - [ti] A:「ኣነ」 F:「ኣብ ወጻኢ」 B:「ምምሃር」 G:「ክቡር」 C:「ተመኩሮ」 **D:「ምዃኑ」** E:「ይኣምን」
  - [bo] A:「ང་」 B:「ཕྱི་རྒྱལ་」 F:「སློབ་སྦྱོང་」 C:「ཉམས་མྱོང་」 G:「རིན་ཐང་ཅན་」 **D:「ཞིག་」** E:「རེད་བསམ་གྱི་ཡོད་」
- **Problem:** so/om/ti/bo 全変種が補文コピュラ「~であると」(D) を独立分節するのに、am は ብዬ（"saying that"=補文標識）と アムナレフ（"I believe"=本動詞）を `E:「ብዬ አምናለሁ」` に融合して D を消失。Leslau に従えば ብዬ は引用補文 gerundive 形で独立切り出し可能。
- **Proposed fix:** D:「ብዬ」 E:「አምናለሁ」。
- **Edit:** `{id:80, lang:"am", op:"replace", segments:[["A","እኔ"],["F","በውጭ አገር"],["B","ማጥናት"],["G","ጠቃሚ"],["C","ተሞክሮ"],["D","ብዬ"],["E","አምናለሁ"]], finding:"am fuses D-complementizer ብዬ + E-main verb; siblings so/om/ti/bo all split. Recovers D from palette."}` 【蓋然】

### 20. #86 am — 主語 D「私」が消失、3 兄弟は明示 【蓋然】
- **Current (am):** A:「በየቀኑ」 B:「ስማርት ፎን」 C:「እጠቀማለሁ」
- **Reference / siblings:**
  - [en] **D:「I」** C:「use」 B:「my smartphone」 A:「every day」
  - [so] **D:「Waxaan」** C:「isticmaalaa」 B:「telefoonkayga casriga ah」 A:「maalin walba」
  - [om] **D:「Ani」** A:「guyyuu hunda」 B:「bilbila koo」 C:「nan fayyadama」
  - [ti] **D:「ኣነ」** A:「ኩሉ መዓልቲ」 B:「ስማርትፎነይ」 C:「ይጥቀም」
  - [bo] **D:「ང་」** A:「ཉིན་རེ་བཞིན་」 B:「ངའི་ལག་ཐོགས་ཁ་པར་」 C:「བེད་སྤྱོད་བྱེད་ཀྱི་ཡོད་」
- **Problem:** so/om/ti/bo 全 4 変種が主語 D:「I」を明示するのに、am だけが pro-drop。Leslau は明示代名詞 እኔ を強調文脈で用いるが、本文は所有 ስልኬ (my smartphone) のため強調はないが、cross-sibling 整合性で明示が望ましい（兄弟 ti も ኣነ を明示）。
- **Proposed fix:** D:「እኔ」 を先頭に追加。
- **Edit:** `{id:86, lang:"am", op:"replace", segments:[["D","እኔ"],["A","በየቀኑ"],["B","ስማርት ፎን"],["C","እጠቀማለሁ"]], finding:"am drops subject D-I; siblings so/om/ti/bo all explicit. Insert D:እኔ for palette parity."}` 【蓋然】

### 21. #89 so — palette {B, C, E} 三重欠落、「Wi-Fi のパスワードが見つからない」が大幅省略 【確実】
- **Current (so):** A:「Ma」 D:「heli karo」 G:「furaha」 F:「ee Wi-Fi」
- **Reference / siblings:**
  - [en] A:「I」 **B:「can」** **C:「't」** D:「find」 **E:「the」** F:「Wi-Fi」 G:「password」
  - [om] A:「An」 G:「jecha iccitii」 F:「Wi-Fi」 D:「argachuu」 **C:「hin」** **B:「dandeenye」**
  - [am] F:「የWi-Fi」 G:「ይለፍ ቃል」 D:「ማግኘት」 **B|C:「አልቻልኩም」**
  - [ti] F:「ናይ Wi-Fi」 G:「መሕለፊ ቃል」 D:「ክረክብ」 **B|C:「ኣይከኣልኩን」**
  - [bo] A:「ངས」 F:「Wi-Fi」 G:「གསང་ཨང」 D:「རྙེད」 **B:「ཐུབ་」** **C:「‌ཀྱི་མིན」**
- **Problem:** so の A:「Ma」（否定マーカ）だけで否定全体を表現させ、可能助動詞 B（can）が完全欠落。om は B/C を分離（hin/dandeenye）、am/ti は B|C 複合タグで否定環状辞 ኣል...ኩም / ኣይ...ን を保持、bo は B（ཐུབ་）+ C（‌ཀྱི་མིན ZWNJ 付き）まで分離。so の `Ma heli karo` は「ka heli karo」または「ma heli karo」（否定可能）の融合形で、`karo`（=can/possible）と本動詞 `heli`（find）が D に潰れている。
- **Proposed fix:** A:「Ma」 D:「heli」 B|C:「karo」 G:「furaha」 F:「ee Wi-Fi」 のように `karo`（可能助動詞）を B|C 複合に切り出す。または `karo`（can）を B、`Ma`（否定マーカ）を C に分離。
- **Edit:** `{id:89, lang:"so", op:"replace", segments:[["A","Waan"],["C","Ma"],["D","heli"],["B","karo"],["G","furaha"],["F","ee Wi-Fi"]], finding:"so collapses B-can + C-not + D-find into A:Ma + D:heli karo; split karo as B (can) and Ma as C (neg) like om/am/ti/bo."}` 【確実】

### 22. #20 om — D:「roobni」（rain 名詞）が palette extra に、en は D を含まない 【蓋然】
- **Current (om):** A:「Ganama kana irraa」 D:「roobni」 C:「roobaa jira」
- **Current (am):** A:「ከጠዋት ጀምሮ」 B:「ያለማቋረጥ」 D:「ዝናብ」 C:「እየዘነበ ነው」
- **Current (ti):** A:「ካብ ሎሚ ንግሆ」 D:「ዝናብ」 C:「ይዘንብ አሎ」
- **Reference (en):** C:「It has been」 B:「raining」 A:「since this morning」
- **Problem:** en palette は {A,B,C}（D は palette に存在するが en は使わない）。om/am/ti が D に名詞「雨」を切り出し B（raining=動詞句）と独立化している。これは agglutinative SOV 言語の自然な「rain-noun + rain-verb」分節で `D extra` の追加自体は許容範囲。ただし om は B（raining 進行）が消えており、`C:「roobaa jira」` の C 内で「降っている」を表現しつつ B 役は完全欠落。ti も同様（B 欠落）。am は B:「ያለማቋረጥ」(continuously) と B 役を保持。om/ti の B 欠落は cross-sibling で am と不整合。
- **Proposed fix (om):** A:「Ganama kana irraa」 D:「roobni」 B:「roobaa」 C:「jira」（分割により B 復元）。
- **Edit:** `{id:20, lang:"om", op:"replace", segments:[["A","Ganama kana irraa"],["D","roobni"],["B","roobaa"],["C","jira"]], finding:"om lacks B-raining; split C:roobaa jira into B (verb stem) + C (aux jira) like am keeps B separately."}` 【蓋然】

---

以上、計 20 件（うち 2 件は途中で参考扱いに撤回、実質 18 件）。

**支配的な不具合パターン (dominant defect):**
1. **so の役割letter 欠落・焦点標識融合** — #11/#25/#36/#82/#89/#95 が示すように、`waxaan/wuxuu/ayuu/ayay` 系の焦点標識が本動詞と非隣接 D-B-D を生む、または C/D 役を奪い B/E を消失させる。Saeed の焦点構文分析に従い焦点標識は独立の D 役か A 役に retag すべき。
2. **bo の格助詞 (ལ/ནས/གི/གྱི/ར) 独立セルで ZWNJ 接頭欠落** — #9/#17/#43/#49/#69/#70/#77/#96 の **8 文**で同一パターン。memory `feedback_glue_marker.md` の方針に反する系統的欠陥で、機械的に一括 ZWNJ 接頭・ツェク補完で修正可能。
3. **「for/と/とき」等の接続詞・前置詞が主語/動詞に融合** — #76 am/bo, #100 so/om/am/ti — 兄弟 bo（#76/#100）が独立 C を保持しているのに am/ti/so/om が前置詞・接頭辞を A や B に潰す cross-sibling 不均衡。
4. **am/ti の主語 pro-drop と兄弟 bo/so/om/ti との不整合** — #86 am, #80 am — 兄弟 4 変種が D:「I」を明示するのに am が単独で省略。
5. **dz が #1〜#100 ほぼ全件未収録**：今回監査では `dz` は data.js 上に langs エントリが見つからず、本ラウンドでは構造監査の対象外。dz の収録自体が language-coverage の優先順位上位タスクとして残る（メタ問題）。

## 重要な未対応領域（次ラウンド推奨）

- **dz（ゾンカ語）の全件収録**：100文中、サンプリングした全文で dz が欠落。Tibetan 系のもう一つの主要言語で、bo との dialectal pair として cross-sibling 整合検査の基盤になる。
- **so 焦点標識構文（baa/ayaa/waxa）の体系的 retag**：#82 以外にも #16/#40/#82/#95/#99 で同パターンが疑われ、全件横断の専門レビューが望ましい。
- **am/ti の補文標識（-ኝ/ብዬ/ምስ-/እንተ-）の独立分節**：#80 am の ብዬ と同様、補文標識をすべて切り出す方針徹底。

ファイル：`/home/jounlai/langmap/langmap_reviews/72_open.md`
件数：18 件（#16, #17 は途中で撤回、計上 20 件中 18 件が実質要修正）
支配的欠陥：**(1) so 焦点標識融合による palette 欠落（6文）、(2) bo 格助詞独立セルの ZWNJ 接頭欠落（8文、系統的）**

---

## Dev response — round 1 (2026-06-04)

レビュアー @hornofafrica_chunker による 20 指摘（うち #16, #17 は本人により撤回 → 実質 18 件）について data.js の現状を `/tmp/data72.cjs` 経由でフル検証し、JSON 編集案を `/tmp/lm_edits_72.json` に書き出した。本ラウンドは data.js には書き込まず、編集案のみ。

### 採用 (25 edits / 18 effective issues)

**bo 格助詞 ZWNJ 接頭（系統的・8文すべて採用）**
- #9 bo D:「‌ལ་」、#17 bo D:「‌ལ་」、#43 bo A:「‌གྱི་」、#49 bo F:「‌གྱི་」、#69 bo H:「‌ལ་」、#70 bo D:「‌ར་」、#77 bo D:「‌ལ་」、#96 bo C:「‌ལ་」
- `feedback_glue_marker.md` の膠着言語接尾辞独立セル方針に完全準拠。ツェク（་）欠落も同時補完。8 件すべて確実な機械修正。

**so 焦点標識・名詞句融合（6文すべて採用）**
- #11 so：E:「buug」 D:「cusub」 に分割（N-A 語順保持）→ E palette 復元。
- #25 so：D:「shirkad」 F:「weyn」 に分割 → D palette 復元（E:「wuxuu shaqeeyaa」 は本ラウンドでは触らず、レビュアーも要検討扱い）。
- #36 so：B:「dad」 A:「badan」 に分割 → B palette 復元。
- #82 so：非隣接 D 重複（D:「wuxuu」 + D:「sheegay」）を解消し A:「Dhakhtarku wuxuu」 に焦点標識を融合 → 非隣接同一 letter 重複の禁則（cross-sibling 一貫性）を遵守。
- #89 so：A:「Ma」 を C に retag、D:「heli karo」 を D:「heli」 + B:「karo」 に分割。テキスト追加なし（レビュアーの「Waan」挿入提案は採用せず、純粋に retag + 分割で B/C を復元）。
- #95 so：C:「Waxaan ku tagaa」 を D:「Waxaan」 + C:「ku tagaa」 に分割 → D 主語復元。

**bo 名詞句・接続詞融合**
- #36 bo：A:「མི་མང་པོ་」 を B:「མི་」 + A:「མང་པོ・」 に分割 → B palette 復元。
- #76 bo：B:「ཉན་དུས・」 を B:「ཉན・」 + C:「‌དུས・」 に分割（ZWNJ 付き）→ C palette 復元。
- #81 bo：B→E、D→F 純粋 retag、cross-sibling palette 整合性。

**am/ti retag and split**
- #28 am：A→D 純粋 retag（ይችላሉ = 可能助動詞）。
- #28 ti：A→D 純粋 retag（ትኽእሉ）。
- #76 am：B:「ስሰማ」 → B|C:「ስሰማ」 に複合タグ化（C palette 復元、テキスト不変）。
- #80 am：E:「ብዬ አምናለሁ」 を D:「ብዬ」 + E:「አምናለሁ」 に分割 → D 補文標識復元。
- #100 om/am/ti：dative -f/ለ/ን 接辞を C として ZWNJ 接頭で分離。bo が既に `ཆེད・དུ་` を C に分離している cross-sibling 整合。

**om split**
- #20 om：C:「roobaa jira」 を B:「roobaa」 + C:「jira」 に分割 → B 進行動詞復元。

### 却下 (2)

- **#86 am — 主語 D:「እኔ」の挿入を却下** (rationale: B.1 pro-drop)
  - `_omission_guidelines.md` B.1「Subject pronoun in pro-drop languages」に am は明確に該当。動詞 እጠቀማለሁ は豊富な 1sg 主語一致を持ち、Leslau も明示代名詞 እኔ は強調文脈用と記述。本文は所有 ስልኬ を含むが、非強調文脈であり pro-drop が言語学的に正当。
  - レビュアーの cross-sibling argument（so/om/ti/bo が D を明示）は B.1 個別言語特性の例外を覆さない。am の pro-drop は #29/#24 などで反復確認済みの設計選択。
  - また D:「እኔ」挿入は data.js に存在しないテキストの追加であり、resegmentation の枠を超える。

- **#100 so — C:「u」挿入を却下** (rationale: text addition)
  - レビュアーは `B:Waad ku mahadsan tahay C:u A:wax walba` を提案するが、現状 data.js のソマリ原文に独立 dative 前置詞 `u` は存在しない。`ku mahadsan tahay` の `ku` を分離する選択肢は理論上ありうるが、これは「~に対して感謝する」全体動詞句の一部で、形態論的に分離容認度が低い（Saeed 1993）。本ラウンドでは保留。
  - レビュアー自身も #100 so の Edit ブロックを最終列挙には含めておらず（om/am/ti の Edit のみ）、整合的に skip。

### 注記

- **#16 / #17 reviewer-withdrawn**：#38 so の A|D|E は audit 上 E が存在しないと判明し本人撤回、#75 so の B-dabaasha は letter 整合済みと本人撤回。両件 no-op。
- **dz coverage gap**：レビュアー指摘の通り、#1〜#100 のサンプリングで dz が data.js の `langs` キーに見当たらない。本ラウンドの構造監査対象外。次ラウンドの language-coverage タスクとして起票推奨（メタ問題）。
- **so 焦点標識の体系的再評価**：レビュアー末尾の指摘どおり #16/#40/#99 等にも `waxa/baa/ayaa` 系の同パターンが疑われる。今回採用済みの #11/#25/#36/#82/#89/#95 と同一の retag/split 方針で別ラウンドの一括レビューを提案。
- **am/ti 補文標識**：#80 ብዬ の方針を他文（#94 ምስ-, #98 እንተ- 等）へ展開する次ラウンド推奨。

### Edits 出力先

`/tmp/lm_edits_72.json` — 25 編集 + 2 却下。`{id, lang, op:"replace", segments:[[role, text], ...], finding}` 形式。

### Closure (round 1)

- Issues addressed: **18 of 18 effective** (#16, #17 はレビュアー自己撤回ぶん除外)
- Edits accepted: **25** (some sentences have multiple lang edits)
- Edits rejected: **2** (#86 am pro-drop, #100 so text-add)
- Cross-sibling palette consistency: **restored** for headache/have (#81 bo), for-marker (#100 om/am/ti), modal aux (#28 am/ti).
- Mechanical ZWNJ application: **8 bo sentences** uniformly fixed per `feedback_glue_marker.md`.
- Round 1 closure status: **ready for reviewer ack** (all 18 effective findings disposed).

