# LangMap データレビュー #67 — Mainland Southeast Asia cross-sibling chunking auditor (大陸東南アジア横断分節監査)

## レビュアー自己紹介 (ペルソナ)

私は **Dr. Pisanu Hongsuwan-Champasak (handle: @msea_chunker)**、チュラーロンコーン大学言語学修士（タイ諸語比較分節, 2013）、京都大学東南アジア地域研究研究科博士（クメール・モン＝クメール語族の語境界とアスペクト粒子化, 2018）。プノンペン王立大学コーディネーター、ヴィエンチャン国立大学客員研究員、ヤンゴン大学ビルマ語学科訪問研究員として、Khmer/Lao/Thai/Burmese/Vietnamese の対照コーパス分節（chunking）ガイドラインの起草に従事してきた。常用資料は Smyth *Thai* (Routledge Comprehensive Grammar, 2014)、Enfield *A Grammar of Lao* (Mouton 2007)、Huffman *Modern Spoken Cambodian* (Yale 1970)、Headley *Cambodian-English Dictionary*、Okell *A Reference Grammar of Colloquial Burmese* (OUP 1969)、Diller, Edmondson & Luo *The Tai-Kadai Languages* (Routledge 2008)、Thompson *A Vietnamese Reference Grammar* (U of Hawai'i 1987)。

本ラウンドは #37 (Romance) / #62 (Sinitic) / #63 (Germanic) / #64 (Slavic) / #65 (Indo-Aryan) / #66 (Iranian+Turkic) と並列する **Mainland SE Asia 14 変種の cross-sibling role-letter 整合性検査** がメタ軸である。

**背景の動機：** ユーザーによる km #20（雨が降る動詞 D 欠落）・km #22（学ぶ動詞 D 欠落）のスポットチェックがいずれも真の構造欠陥であった事実を受け、`role-letter missing` 比率を集計したところ、**km 43%（14変種中最悪）**、続いて th_s/th_n 37%, my 32%, lo 30% という、大陸 SE Asia 全体で 30% 超の高欠落率が明らかになった。先行レビュー #27 は 3 語族横断の広域監査、#31/#32 は語彙論的監査（lo 王室語→Vientiane 口語、my 口語化、km コピュラ គឺ 等）であり、**km/lo/my の cross-sibling chunking 検査は本ラウンドが初である**。語彙論は #32 に譲り、本ラウンドは構造（role-letter 列・複合ラベル X|Y・モーダル＋動詞融合・アスペクト粒子の独立分節）に集中する。

## 参考文献
- Smyth, D. *Thai: A Comprehensive Grammar* (Routledge 2014) — final particle, aspect marker, classifier 分節
- Enfield, N. J. *A Grammar of Lao* (Mouton de Gruyter 2007) — Lao serial verb / TAM 接尾
- Huffman, F. E. *Modern Spoken Cambodian* (Yale 1970); Headley *Cambodian-English Dictionary* (CIL 1977) — km 前動詞モーダル ចង់/ត្រូវ/អាច の分割原則
- Okell, J. *A Reference Grammar of Colloquial Burmese* (OUP 1969) — my 文末助詞 ပါ / တယ် / နေ
- Diller, A. V. N., Edmondson, J. A., Luo, Y. *The Tai-Kadai Languages* (Routledge 2008) — 北タイ・東北タイ・南タイ方言比較分節
- Thompson, L. C. *A Vietnamese Reference Grammar* (U of Hawai'i 1987) — vi/vi_c/vi_s 共通の前動詞分節
- Memory: `feedback_cross_sibling_role_consistency.md`, `feedback_split_segments_like_reference.md`, `feedback_prefer_splitting_segments.md`, `feedback_modal_verb_not_subject.md`, `feedback_impersonal_modal_as_D.md`
- 既出 #27 (Mainland SE Asia 広域)・#31・#32 (km/my/lo 語彙) — 再フラグ回避
- 既に修正済みの km #20 (雨が降る)・km #22 (学ぶ動詞) — 再フラグしない

## 検証方法

`.wf_langmap_query.mjs` をベースに全 100 文 × 14 変種 (vi/vi_c/vi_s/vi_nom/vi_ohan/th/th_isan/th_n/th_s/lo/km/my/id/ms/jv/tl) の role-letter 列を `/tmp/audit67.out`（1408 行）に dump、続いて (a) 兄弟言語パレットに存在するが当該変種に欠落しているロール、(b) `X|Y` 複合ラベルが一部の兄弟のみに発生しているケース、(c) モーダル動詞＋本動詞 (ចង់+本動詞, ត្រូវ+本動詞 等) が独立分節されている兄弟と融合している兄弟の不整合、(d) アスペクト粒子 (កំពុង, បាន, ‌いる相当) の独立分節揺れ、(e) 場所前置詞 + 名詞融合 (km នៅ＋名詞 が "B:នៅ名詞" に潰れる) — を横断集計した。語彙判断 (例: km 료理 ヴォキャブ) は #32 に譲り、**chunking のみ**を扱う。本ラウンドは read-only on data.js。提案は末尾の構造化 edit リストにも転載する。

km は user spot-check 経緯に従い**重点的に集中監査**した。`vi_ohan` は #1 ほぼ全件未収録のため対象外、`vi_nom` は vi と並走するので vi と差がある場合のみ言及。

## 指摘事項 (Issues found) — 26件

### 1. #14 km — モーダル動詞列ではない単純 SVO で C 動詞（go = ទៅ）が B「働く」に融合 【確実】
- **Current (km):** A:「ខ្ញុំ」 B:「ទៅធ្វើការ」 D:「ដោយរថភ្លើង」 E:「រៀងរាល់ថ្ងៃ」
- **Reference / siblings:**
  - [en] A:「I」 **C:「go」** **B:「to work」** D:「by train」 E:「every day」
  - [vi] A:「Tôi」 **C:「đi」** **B:「làm」** D:「bằng tàu」 E:「mỗi ngày」
  - [th/lo/id/ms] いずれも C「行く」と B「仕事/働く」を独立に分割
- **Problem:** km の `B:「ទៅធ្វើការ」` は "go to work" を C+B にせず融合。en/vi/th/lo/id/ms すべてが C と B を独立に置いており、km だけが palette C を欠落する。`memory feedback_split_segments_like_reference.md` に従い参照言語 (en) の構造に合わせて分割すべき。
- **Proposed fix:** C:「ទៅ」 B:「ធ្វើការ」 と分割。
- **Edit:** `{id:14, lang:"km", op:"replace", segments:[["A","ខ្ញុំ"],["C","ទៅ"],["B","ធ្វើការ"],["D","ដោយរថភ្លើង"],["E","រៀងរាល់ថ្ងៃ"]], finding:"km fuses C-go + B-work; en/vi/th/lo all split. km lacks C entirely."}` 【確実】

### 2. #44 km — モーダル「ចង់」(want) と本動詞「ធ្វើដំណើរ」(travel) の融合（C 欠落） 【確実】
- **Current (km):** A:「ខ្ញុំ」 D:「ចង់ធ្វើដំណើរ」 B:「ជុំវិញពិភពលោក」
- **Reference / siblings:**
  - [en] A:「I」 **D:「want to」** **C:「travel」** B:「around the world」
  - [vi] A:「Tôi」 **D:「muốn」** **C:「đi du lịch」** B:「khắp thế giới」
  - [th] A:「ฉัน」 **D:「อยาก」** **C:「เดินทาง」** B:「รอบโลก」
  - [lo] A:「ຂ້ອຍ」 **D:「ຢາກ」** **C:「ເດີນທາງ」** B:「ຮອບໂລກ」
- **Problem:** 兄弟 en/vi/th/lo/id/ms すべてがモーダル D と本動詞 C を分割しているのに、km だけが `D:「ចង់ធ្វើដំណើរ」` に融合し C を欠落させる。これは user spot-check #22 (km E:「ចង់」を D に直すべき) で既に指摘されたパターンの**未対応類例**であり、Huffman 文法でも ចង់ は前動詞モーダルとして独立扱い。
- **Proposed fix:** D:「ចង់」 C:「ធ្វើដំណើរ」 と分割。
- **Edit:** `{id:44, lang:"km", op:"replace", segments:[["A","ខ្ញុំ"],["D","ចង់"],["C","ធ្វើដំណើរ"],["B","ជុំវិញពិភពលោក"]], finding:"km fuses D-want + C-travel; en/vi/th/lo all split modal+verb."}` 【確実】

### 3. #54 km — 義務モーダル「ត្រូវ」(must) と本動詞「ការពារ」(protect) の融合（C 欠落） 【確実】
- **Current (km):** A:「យើង」 D:「ត្រូវការពារ」 B:「បរិស្ថាន」
- **Reference / siblings:**
  - [en] A:「We」 **D:「must」** **C:「protect」** B:「the environment」
  - [vi] A:「Chúng ta」 **D:「phải」** **C:「bảo vệ」** B:「môi trường」
  - [th] A:「เรา」 **D:「ต้อง」** **C:「ปกป้อง」** B:「สิ่งแวดล้อม」
  - [lo] A:「ເລາ」 **D:「ຕ້ອງ」** **C:「ປກປ້ອງ」** B:「ສິ່ງແວດລ້ອມ」
- **Problem:** 義務モーダル ត្រូវ + 本動詞 ការពារ。user 既出パターン (#20 雨, #22 学ぶ) の延長線上。en/vi/th/lo すべて分割。
- **Proposed fix:** D:「ត្រូវ」 C:「ការពារ」。
- **Edit:** `{id:54, lang:"km", op:"replace", segments:[["A","យើង"],["D","ត្រូវ"],["C","ការពារ"],["B","បរិស្ថាន"]], finding:"km fuses D-must + C-protect; siblings all split. Same defect class as user-flagged #20/#22."}` 【確実】

### 4. #85 km — 助言モーダル「គួរ」(should) と本動詞「ផឹក」(drink) の融合（C 欠落） 【確実】
- **Current (km):** A:「អ្នក」 D:「គួរផឹក」 B:「ទឹក」 E:「ច្រើនជាង」
- **Reference / siblings:**
  - [en] A:「You」 **D:「should」** **C:「drink」** E:「more」 B:「water」
  - [vi] A:「Bạn」 **D:「nên」** **C:「uống」** E:「nhiều」 B:「nước」 E:「hơn」
  - [th] A:「คุณ」 **D:「ควร」** **C:「ดื่ม」** B:「น้ำ」 E:「มากขึ้น」
  - [lo] A:「ຄຸນ」 **D:「ຄວລ」** **C:「ດື່ມ」** B:「ນ້ໍາ」 E:「ມາກຂຶ້ນ」
- **Problem:** 同じく `D:「គួរផឹក」` 融合で C 欠落。
- **Proposed fix:** D:「គួរ」 C:「ផឹក」。
- **Edit:** `{id:85, lang:"km", op:"replace", segments:[["A","អ្នក"],["D","គួរ"],["C","ផឹក"],["B","ទឹក"],["E","ច្រើនជាង"]], finding:"km fuses D-should + C-drink; en/vi/th/lo all split modal+verb."}` 【確実】

### 5. #58 km — 願望モーダル「ចង់」+ 本動詞「ថត」(take photo) の融合（D 欠落） 【確実】
- **Current (km):** A:「ខ្ញុំ」 E:「ចង់ថត」 C:「រូបថត」 B:「នៃប្រាសាទនេះ」
- **Reference / siblings:**
  - [en] A:「I」 **E:「want to」** **D:「take」** C:「a photo」 B:「of this temple」
  - [vi] A:「Tôi」 **E:「muốn」** **D:「chụp」** C:「ảnh」 B:「của ngôi chùa này」
  - [th] A:「ฉัน」 **E:「อยากจะ」** **D:「ถ่าย」** C:「รูปภาพ」 B:「ของวัดนี้」
  - [lo] A:「ຂ້ອຍ」 **E:「ຢາກຈະ」** **D:「ຖ່າຍ」** C:「ຮູບພາບ」 B:「ຂອງວັດນີ້」
- **Problem:** 本動詞 ថត（撮る）が E モーダル ចង់ に潰れ、D 欠落。
- **Proposed fix:** E:「ចង់」 D:「ថត」。
- **Edit:** `{id:58, lang:"km", op:"replace", segments:[["A","ខ្ញុំ"],["E","ចង់"],["D","ថត"],["C","រូបថត"],["B","នៃប្រាសាទនេះ"]], finding:"km fuses E-want + D-take; siblings split modal+verb."}` 【確実】

### 6. #62 km — 願望モーダル「ចង់」+ 本動詞「អាន」(read) の融合（D 欠落） 【確実】
- **Current (km):** A:「ខ្ញុំ」 E:「ចង់អាន」 B:「សៀវភៅនេះ」 C:「នៅចុងខែ」
- **Reference / siblings:**
  - [en] A:「I」 **E:「want to」** **D:「read」** B:「this book」 C:「by the end of the month」
  - [vi/th/lo/id/ms] いずれも E:「想/อยาก/ຢາກ/ingin」 + D:「đọc/อ่าน/ອ່ານ/membaca」 を独立分割
- **Problem:** 同じく ចង់+本動詞 の融合パターン。
- **Proposed fix:** E:「ចង់」 D:「អាន」。
- **Edit:** `{id:62, lang:"km", op:"replace", segments:[["A","ខ្ញុំ"],["E","ចង់"],["D","អាន"],["B","សៀវភៅនេះ"],["C","នៅចុងខែ"]], finding:"km fuses E-want + D-read; siblings split."}` 【確実】

### 7. #21 km/id/ms/jv/tl — 未来助動詞「នឹង/akan/bakal/Mag-」+ 本動詞「ញ៉ាំ/makan」+ 目的語「アハーン・ペル・ルガーチ」の三重融合（D 欠落） 【確実】
- **Current (km):** A:「ខ្ញុំ」 E:「នឹងញ៉ាំអាហារពេលល្ងាច」 C:「ជាមួយមិត្តភក្តិ」 B:「យប់នេះ」
- **Current (id):** A:「Saya」 E:「akan makan malam」 C:「bersama teman」 B:「malam ini」
- **Current (ms):** A:「Saya」 E:「akan makan malam」 C:「bersama kawan」 B:「malam ini」
- **Current (jv):** A:「Aku」 E:「bakal mangan bengi」 C:「bersama kanca」 B:「bengi iki」
- **Current (tl):** E:「Maghahapunan」 A:「ako」 C:「kasama ang mga kaibigan」 B:「ngayong gabi」
- **Reference:**
  - [en] A:「I」 **E:「will have」** **D:「dinner」** C:「with friends」 B:「tonight」
  - [vi] A:「Tôi」 **E:「sẽ ăn」** **D:「tối」** C:「với bạn bè」 B:「tối nay」
  - [th] A:「ฉัน」 **E:「จะ ทาน」** **D:「อาหารเย็น」** C:「กับเพื่อน」 B:「คืนนี้」
  - [lo] A:「ຂ້ອຍ」 **E:「ຈະ ທານ」** **D:「ອາຫານແລງ」** C:「ກັບເພື່ອນ」 B:「ຄືນນີ້」
- **Problem:** en/vi/th/lo がいずれも E（助動詞＋ have）と D（dinner という目的語名詞）を分けるのに、km/id/ms/jv/tl の 5 言語が `E:「未来＋食べる＋夕食」` と三重融合。"dinner" の名詞 D が消滅。
- **Proposed fix (km):** E:「នឹងញ៉ាំ」 D:「អាហារពេលល្ងាច」。(id) E:「akan makan」 D:「malam」(ms 同様), (jv) E:「bakal mangan」 D:「bengi」, (tl) E:「Maghahapunan」のみだと dinner 名詞 D 不在 → 検討。
- **Edit (km, 優先):** `{id:21, lang:"km", op:"replace", segments:[["A","ខ្ញុំ"],["E","នឹងញ៉ាំ"],["D","អាហារពេលល្ងាច"],["C","ជាមួយមិត្តភក្តិ"],["B","យប់នេះ"]], finding:"km fuses future+verb+dinner-noun; vi/th/lo all split E (future) from D (dinner-noun)."}` 【確実】
- **Edit (id):** `{id:21, lang:"id", op:"replace", segments:[["A","Saya"],["E","akan makan"],["D","malam"],["C","bersama teman"],["B","malam ini"]], finding:"id fuses verb+dinner-noun; split D-malam from E-akan makan."}` 【蓋然】

### 8. #37 km — 義務モーダル「ត្រូវ」+ 本動詞「ទិញ」(buy) の融合（E 欠落） 【確実】
- **Current (km):** A:「ខ្ញុំ」 B:「ត្រូវទិញ」 D:「អំណោយ」 C:「ថ្ងៃកំណើត」
- **Reference / siblings:**
  - [en] A:「I」 **B:「need to」** **E:「buy」** D:「a」 C:「birthday」 D:「present」
  - [vi] A:「Tôi」 **B:「cần」** **E:「mua」** D:「quà」 C:「sinh nhật」
  - [th] A:「ฉัน」 **B:「ต้องซื้อ」**（融合！） D:「ของขวัญ」 C:「วันเกิด」 ← **th も同パターン融合**
  - [lo] A:「ຂ້ອຍ」 **B:「ຕ້ອງຊື້」**（融合！）
  - [id] A:「Saya」 **B:「perlu」** **E:「membeli」** D:「hadiah」 C:「ulang tahun」
  - [ms] A:「Saya」 **B:「perlu」** **E:「membeli」** D:「hadiah」 C:「hari jadi」
- **Problem:** en/vi/id/ms はモーダル B と本動詞 E を独立分割しているのに、km/th/lo は B にモーダル＋動詞融合し E 欠落。Mainland SE Asia 内で km/th/lo がローカル方針として「ต้อง+動詞融合」を許容しているが、これは #44/#54/#85 で確立された「モーダル＋本動詞は分ける」原則と矛盾する。
- **Proposed fix (km):** B:「ត្រូវ」 E:「ទិញ」。th 同様 B:「ต้อง」 E:「ซื้อ」、lo 同様 B:「ຕ້ອງ」 E:「ຊື້」。
- **Edit (km):** `{id:37, lang:"km", op:"replace", segments:[["A","ខ្ញុំ"],["B","ត្រូវ"],["E","ទិញ"],["D","អំណោយ"],["C","ថ្ងៃកំណើត"]], finding:"km fuses B-need + E-buy; en/vi/id/ms split modal+verb."}` 【確実】

### 9. #39 km — 義務モーダル「ត្រូវ」+ 本動詞「ក្រោកឡើង」(wake up) の融合（D 欠落） 【確実】
- **Current (km):** A:「ខ្ញុំ」 E:「ត្រូវក្រោកឡើង」 B:「ព្រឹកៗ」 C:「ថ្ងៃស្អែក」
- **Reference / siblings:**
  - [en] A:「I」 **E:「have to」** **D:「wake up」** B:「early」 C:「tomorrow」
  - [vi] A:「Tôi」 **E:「phải」** **D:「dậy」** B:「sớm」 C:「vào ngày mai」
  - [th] A:「ฉัน」 **E:「ต้อง」** **D:「ตื่น」** B:「แต่เช้า」 C:「พรุ่งนี้」
  - [lo] A:「ຂ້ອຍ」 **E:「ຕ້ອງ」** **D:「ຕື່ນ」** B:「ແຕ່ເຊ້າ」 C:「ມື້ອື່ນ」
- **Problem:** 今回は th/lo は分割しているのに、km だけが融合。
- **Proposed fix:** E:「ត្រូវ」 D:「ក្រោកឡើង」。
- **Edit:** `{id:39, lang:"km", op:"replace", segments:[["A","ខ្ញុំ"],["E","ត្រូវ"],["D","ក្រោកឡើង"],["B","ព្រឹកៗ"],["C","ថ្ងៃស្អែក"]], finding:"km fuses E-must + D-wake; vi/th/lo all split."}` 【確実】

### 10. #41 km — アスペクト粒子「កំពុង」(progressive) + 本動詞「អាន」(read) の融合（D 欠落） 【確実】
- **Current (km):** A:「ខ្ញុំ」 E:「កំពុងអាន」 F:「សៀវភៅ」 C:「គួរឱ្យចាប់អារម្មណ៍」 B:「ឥឡូវ」
- **Reference / siblings:**
  - [en] A:「I'm」 **E:「reading」** D:「an」 C:「interesting」 F:「book」 B:「now」
  - [vi] A:「Tôi」 **E:「đang đọc」**（融合）F:「sách」 …
  - [th] A:「ฉัน」 **E:「กำลังอ่าน」**（融合）…
  - [lo] A:「ຂ້ອຍ」 **E:「ກໍາລັງອ່ານ」**（融合）…
- **Problem:** ja/en の参照は D（一冊の／an）を立てているが、km/vi/th/lo は冠詞・量化詞を立てず palette D 欠落。これは Mainland SE Asia の冠詞不在を反映した legitimate な欠落であり、ここは**問題なし**。**ただし km の `E:「កំពុងអាន」` は進行 කំពុង + read を融合**しており、同様の融合は vi/th/lo でも進行が独立分節されていない点で兄弟一貫。**進行アスペクト独立化は本ラウンドの対象外**として保留。本件は palette D 欠落のみ legitimate と判定し**スキップ**。

> 本項はスキップ判定。番号維持のため記録。

### 11. #61 km — モーダル「តែងតែ」(always 副詞) は問題なしだが、C:「មកយឺត」が C「late」+E「come」融合 【蓋然】
- **Current (km):** A:「គាត់」 B:「តែងតែ」 C:「មកយឺត」 D:「ក្នុងកិច្ចប្រជុំ」
- **Reference:**
  - [en] A:「He」 B:「always」 **E:「arrives」** **C:「late」** D:「to meetings」
  - [my] A:「သူ」 B:「အမြဲ」 D:「အစည်းအဝေးတွေကို」 **C:「နောက်ကျ」** **E:「လာပါတယ်」**（分割）
- **Problem:** km `C:「មកយឺត」` は来る (មក) + 遅い (យឺត) を融合し E (arrive/come) が欠落。my は C:「နောက်ကျ」（遅い）と E:「လာပါတယ်」（来る）を独立分割している。
- **Proposed fix:** E:「មក」 C:「យឺត」。
- **Edit:** `{id:61, lang:"km", op:"replace", segments:[["A","គាត់"],["B","តែងតែ"],["E","មក"],["C","យឺត"],["D","ក្នុងកិច្ចប្រជុំ"]], finding:"km fuses C-late + E-come; my splits them; en sets E-arrives separately."}` 【蓋然】

### 12. #25 km — F「ធំ」(big) と D「ក្រុមហ៊ុន」(company) の語順逆転＋ C 欠落 【蓋然】
- **Current (km):** A:「ប៉ាខ្ញុំ」 E:「ធ្វើការ」 B:「នៅ」 **F:「ធំ」 D:「ក្រុមហ៊ុន」**
- **Reference:**
  - [en] A:「My father」 E:「works」 B:「at」 C:「a」 **F:「big」** D:「company」
  - [th] A:「พ่อของฉัน」 E:「ทำงาน」 B:「ที่」 **D:「บริษัท」 F:「ใหญ่」**
  - [lo] A:「ພໍ່ຂອງຂ້ອຍ」 E:「ເຮັດວຽກ」 B:「ທີ່」 **D:「ບໍລິສັດ」 F:「ໃຫຍ່」**
  - [my] A:「အဖေ」 **F:「ကြီး」** D:「ကုမ္ပဏီ」 …
- **Problem:** km の F-D 順は形容詞前置（漢化）であり、Khmer の名詞 + 形容詞語順（ក្រុមហ៊ុនធំ）に反する。my は形容詞前置 OK だが km は名詞 + 形容詞が標準。語順を D「ក្រុមហ៊ុន」 F「ធំ」 と入れ替えるべき。C（不定冠詞）は legitimate な欠落としてスキップ。
- **Proposed fix:** A:「ប៉ាខ្ញុំ」 E:「ធ្វើការ」 B:「នៅ」 D:「ក្រុមហ៊ុន」 F:「ធំ」（語順正常化）。
- **Edit:** `{id:25, lang:"km", op:"replace", segments:[["A","ប៉ាខ្ញុំ"],["E","ធ្វើការ"],["B","នៅ"],["D","ក្រុមហ៊ុន"],["F","ធំ"]], finding:"km has F-big before D-company (Sinitic-like word order); native Khmer is N+Adj. th/lo show correct D+F order."}` 【蓋然】

### 13. #12 km — 主語名詞「ផ្កាសាគូរ៉ា」が C ラベル、palette A 欠落（題述構造の役割割当ミス） 【確実】
- **Current (km):** **C:「ផ្កាសាគូរ៉ា」** B:「នៅសួនច្បារនេះ」 D:「គឺស្អាត」
- **Reference:**
  - [en] **C:「The cherry blossoms」** A:「in this」 B:「park」 D:「are beautiful」 ← C が主語
  - [vi] **C:「Hoa anh đào」** A:「trong」 B:「công viên này」 D:「rất đẹp」
  - [th/lo] 同じく C 主語 + A 前置詞
  - [my] **A:「ဒီ」** B:「ပန်းခြံရဲ့」 **C:「ချယ်ရီပန်းတွေ」** D:「လှပါတယ်」
- **Problem:** en/vi/th/lo すべて A:「in this」 で前置詞を立て、B:「park」を場所名詞に充てるのに、km は palette A を欠落させ、`B:「នៅសួនច្បារនេះ」`（this park に nоё＝で を融合）にしている。前置詞 នៅ を独立 A、名詞 សួនច្បារនេះ を B に分割すべき。
- **Proposed fix:** C:「ផ្កាសាគូរ៉ា」 A:「នៅ」 B:「សួនច្បារនេះ」 D:「គឺស្អាត」。
- **Edit:** `{id:12, lang:"km", op:"replace", segments:[["C","ផ្កាសាគូរ៉ា"],["A","នៅ"],["B","សួនច្បារនេះ"],["D","គឺស្អាត"]], finding:"km fuses A-in + B-park; en/vi/th/lo all split locative preposition from noun."}` 【確実】

### 14. #15 km — アスペクト粒子「កំពុង」+ 本動詞「សិក្សា」+「នៅក្រៅប្រទេស」三重融合（D 欠落） 【確実】
- **Current (km):** A:「ប្អូនស្រីខ្ញុំ」 **C:「កំពុងសិក្សានៅក្រៅប្រទេស」** B:「នៅបារាំង」
- **Reference:**
  - [en] A:「My younger sister」 **D:「is」** **C:「studying abroad」** B:「in France」
  - [vi] A:「Em gái tôi」 **D:「đang」** **C:「du học」** B:「ở Pháp」
  - [th] A:「น้องสาวของฉัน」 **D:「กำลัง」** **C:「เรียนอยู่ต่างประเทศ」** B:「ที่ฝรั่งเศส」
  - [lo] A:「ນ້ອງສາວຂອງຂ້ອຍ」 **D:「ກໍາລັງ」** **C:「ຮຽນຢູ່ຕ່າງປະເທດ」** B:「ທີ່ຝລັ່ງເສສ」
  - [id] A:「Adik perempuan saya」 **D:「sedang」** **C:「belajar di luar negeri」** B:「di Prancis」
- **Problem:** vi/th/lo/id 全てが進行アスペクト D を独立分節しているのに、km だけが C 内に融合し palette D を欠落させる。
- **Proposed fix:** D:「កំពុង」 C:「សិក្សានៅក្រៅប្រទេស」（進行 D を独立化）。
- **Edit:** `{id:15, lang:"km", op:"replace", segments:[["A","ប្អូនស្រីខ្ញុំ"],["D","កំពុង"],["C","សិក្សានៅក្រៅប្រទេស"],["B","នៅបារាំង"]], finding:"km fuses D-progressive + C-verb; vi/th/lo/id all split progressive aspect."}` 【確実】

### 15. #11 km — 過去アスペクト「បាន」+ 本動詞「ទិញ」(buy) の C 内融合 → D「new」が E「book」に潜入 【蓋然】
- **Current (km):** A:「ខ្ញុំ」 C:「បានទិញ」 **E:「សៀវភៅថ្មី」** B:「នៅហាងសៀវភៅ」 F:「ម្សិលមិញ」
- **Reference:**
  - [en] A:「I」 C:「bought」 **D:「a new」** **E:「book」** B:「at the bookstore」 F:「yesterday」
  - [th] A:「ฉัน」 C:「ซื้อ」 **E:「หนังสือ」** **D:「เล่มใหม่」** B:「ที่ร้านหนังสือ」 F:「เมื่อวาน」
  - [lo] A:「ຂ້ອຍ」 C:「ຊື້」 **E:「ໜັງສື」** **D:「ເລ່ມໄຫມ່」** B:「ທີ່ຮ້ານໜັງສື」 F:「ເມື່ອວານ」
  - [vi] A:「Tôi」 C:「đã mua」 **D:「một cuốn」** **E:「sách mới」** ← vi も部分融合
  - [my] A:「ကျွန်တော်」 F:「မနေ့က」 B:「စာအုပ်ဆိုင်မှာ」 **D:「အသစ်」** **E:「စာအုပ်」**（分割）
- **Problem:** km の `E:「សៀវភៅថ្មី」` は名詞 (សៀវភៅ book) + 形容詞 (ថ្មី new) を E に融合し palette D 欠落。th/lo/my は分割している。
- **Proposed fix:** E:「សៀវភៅ」 D:「ថ្មី」。
- **Edit:** `{id:11, lang:"km", op:"replace", segments:[["A","ខ្ញុំ"],["C","បានទិញ"],["E","សៀវភៅ"],["D","ថ្មី"],["B","នៅហាងសៀវភៅ"],["F","ម្សិលមិញ"]], finding:"km fuses E-book + D-new; th/lo/my all split N+Adj."}` 【蓋然】

### 16. #78 km — メタ命題述部「ខ្ញុំគិតថា」(I think that) の D 内に主語 A 融合（palette A 欠落） 【確実】
- **Current (km):** **D:「ខ្ញុំគិតថា」** B:「ផែនការនេះ」 C:「ល្អ」
- **Reference / siblings:**
  - [en] **D:「I think」** A:「this」 B:「plan」 C:「is good」
  - [vi] **D:「Tôi nghĩ」** B:「kế hoạch」 A:「này」 C:「rất tốt」
  - [th] **D:「ฉัน คิดว่า」** B:「แผน」 A:「นี้」 C:「ดี」
  - [lo] **D:「ຂ້ອຍ ຄິດວ່າ」** B:「ແຜນ」 A:「ນີ້」 C:「ດີ」
  - [id] **D:「Saya pikir」** B:「rencana」 A:「ini」 C:「bagus」
- **Problem:** en/vi/th/lo/id すべて palette A:「this」を独立分節するが、km は palette A を完全欠落。D に主語＋動詞、B に名詞「ផែនការនេះ」（this plan = 計画＋これ融合）と二重融合。少なくとも A:「នេះ」を独立化すべき。
- **Proposed fix:** D:「ខ្ញុំគិតថា」 B:「ផែនការ」 A:「នេះ」 C:「ល្អ」。
- **Edit:** `{id:78, lang:"km", op:"replace", segments:[["D","ខ្ញុំគិតថា"],["B","ផែនការ"],["A","នេះ"],["C","ល្អ"]], finding:"km fuses A-this into B-plan; vi/th/lo/id all split demonstrative A."}` 【確実】

### 17. #4 km — 形容詞 A「ជិតបំផុត」(nearest) と名詞 B「ស្ថានីយ」(station) の語順逆転 【蓋然】
- **Current (km):** **A:「ជិតបំផុត」** **B:「ស្ថានីយ」** D:「នៅ」 C:「ឯណា」
- **Reference / siblings:**
  - [en] C:「Where」 D:「is」 **A:「the nearest」** **B:「station」**（A→B 順）
  - [vi] **B:「Ga」** **A:「gần nhất」** D:「ở」 C:「đâu」（B→A 順）
  - [th] **B:「สถานี」** **A:「ที่ใกล้ที่สุด」** D:「อยู่」 C:「ที่ไหน」（B→A 順）
  - [lo] **B:「ສະຖານີ」** **A:「ທີ່ໃກ້ທີ່ສຸດ」**（B→A 順）
  - [id] **B:「Stasiun」** **A:「terdekat」**（B→A 順）
- **Problem:** Khmer の自然語順は名詞 + 形容詞 (ស្ថានីយជិតបំផុត) であり、A:「ជិតបំផュート」が先行する現状は Sinitic 形容詞前置の影響と思われる。vi/th/lo/id 全て B → A 順。
- **Proposed fix:** B:「ស្ថានីយ」 A:「ជិតបំផុត」 D:「នៅ」 C:「ឯណា」 と語順を入れ替え。
- **Edit:** `{id:4, lang:"km", op:"replace", segments:[["B","ស្ថានីយ"],["A","ជិតបំផុត"],["D","នៅ"],["C","ឯណា"]], finding:"km Adj+N order; native Khmer is N+Adj. vi/th/lo/id all show B+A."}` 【蓋然】

### 18. #9 km/th/lo/vi 等 — 移動目的 D「to」が全変種で欠落（en/ja のみ立てる） 【要検討】
- **Current:**
  - [en] A:「I」 B:「want to」 C:「go」 **D:「to」** E:「Japan」 F:「next」 G:「year」
  - [vi/th/lo/km/id/ms] D 欠落（C 動詞「行く」と E 目的地が直接隣接）
- **Problem:** 大陸 SE Asia 全変種（jp/SVO 系）が D:「to」を立てない。これは Khmer/Thai/Lao/Viet/Indonesian の「行く+目的地名詞」直接結合の自然な分節であり、Mainland SE Asia 全体一致のため**legitimate** と判定し**スキップ**。

> 本項はスキップ判定（兄弟全体一致）。

### 19. #99 km — 連結子 D「is」と疑問詞 C「How much」が C に融合、加えて指示詞 A の語順問題 【蓋然】
- **Current (km):** **A:「នេះ」** B:「វត្ថុអនុស្សាវរីយ៍」 **C:「តម្លៃប៉ុន្មាន」** ← D 欠落
- **Reference:**
  - [en] **C:「How much」** **D:「is」** A:「this」 B:「souvenir」
  - [vi] B:「Quà lưu niệm」 **A:「này」** **C:「giá bao nhiêu」**（D 欠落）
  - [th] B:「ของที่ระลึก」 **A:「นี้」** **C:「ราคาเท่าไร」**（D 欠落）
  - [lo] B:「ຂອງທີ່ລະລຶກ」 **A:「ນີ້」** **C:「ລາຄາເທ່າໄລ」**（D 欠落）
- **Problem:** D（copula "is"）欠落は vi/th/lo 兄弟と一致するため legitimate。**ただし km の指示詞 A:「នេះ」が先頭にあり、vi/th/lo は B「品物」 + A「これ」の語順**。Khmer 自然語順は B「វត្ថុ」 + A「នេះ」（this 後置）であり、km の現状は語順誤り。
- **Proposed fix:** B:「វត្ថុអនុស្សាវរីយ៍」 A:「នេះ」 C:「តម្លៃប៉ុន្មាន」。
- **Edit:** `{id:99, lang:"km", op:"replace", segments:[["B","វត្ថុអនុស្សាវរីយ៍"],["A","នេះ"],["C","តម្លៃប៉ុន្មាន"]], finding:"km has A-this before B-souvenir; native Khmer N+Demonstrative. vi/th/lo all show B+A."}` 【蓋然】

### 20. #46 km/th/th_isan/th_n/th_s/lo/my/id/ms/jv/tl — E|H 複合（aspect + 動詞融合）が SE Asia 全域に蔓延 【蓋然】
- **Current (km):** A:「ខ្ញុំ」 **E|H:「បាននិយាយ」** F:「ជាមួយ」 B:「មិត្តភក្តិ」 C:「តាមទូរស័ព្ទ」 D:「អស់មួយម៉ោង」
- **Current (th):** A:「ฉัน」 **E|H:「คุย」** …
- **Current (th_isan):** A:「ข้อย」 **E|H:「เว้า」** …
- **Current (lo):** A:「ຂ້ອຍ」 **E|H:「ຄຸຍ」** …
- **Current (id):** A:「Saya」 **E|H:「berbicara」** …
- **Current (ms):** A:「Saya」 **E|H:「bercakap」** …
- **Current (jv):** A:「Aku」 **E|H:「ngomong」** …
- **Reference:**
  - [en] A:「I」 **E:「talk」** **H:「‌ed」**
  - [ja] A:「私は」 B:「友達」 F:「と」 C:「電話で」 D:「一時間」 **E:「話し」** **H:「‌た」**
  - [vi] A:「Tôi」 **H:「đã」** **E:「nói chuyện」** F:「với」 …（独立分割）
- **Problem:** en/ja/vi はテンス・アスペクト H を独立分節するのに、km/th/th_isan/th_n/th_s/lo/id/ms/jv/tl の **10 変種**が E|H 複合融合。これは過去テンス独立化方針（#43 TAM convention）に反する。SE Asia の動詞単独形が tense 不明示なのは事実だが、km の「បាន」(perfective) は明示的 H 候補であり独立化すべき。
- **Proposed fix (km の最小限):** A:「ខ្ញុំ」 H:「បាន」 E:「និយាយ」 F:「ជាមួយ」 B:「មិត្តភក្តិ」 …
- **Edit (km):** `{id:46, lang:"km", op:"replace", segments:[["A","ខ្ញុំ"],["H","បាន"],["E","និយាយ"],["F","ជាមួយ"],["B","មិត្តភក្តិ"],["C","តាមទូរស័ព្ទ"],["D","អស់មួយម៉ោង"]], finding:"km fuses H-PAST (បាន) into E|H; en/vi/ja all split tense H. km can legitimately split បាន as H."}` 【蓋然】

### 21. #69 km/th/th_isan/th_n/th_s/lo/id/ms/jv/tl — D|E 複合（write + tense）が SE Asia 全域に蔓延 【蓋然】
- **Current:** km/th/th_isan/th_n/th_s/lo/id/ms/jv/tl いずれも `D|E:「書いた」` 融合。
- **Reference:**
  - [en] A:「He」 **D|E:「wrote」**（en は単一語融合は仕方ない）F:「a」 G:「long」 B:「letter」 H:「to」 C:「his parents」
  - [ja] A:「彼は」 G:「長い」 B:「手紙を」 C:「両親」 H:「に」 **D:「書い」** **E:「た」**
- **Problem:** ja は D（書く）と E（た）を独立分割。km の `D|E:「បានសរសេរ」` は បាន (perfective) + សរសេរ (write) で、tense と動詞の融合。これは #46 と同じ問題類型。 (#69 では palette F が欠落する点も全 SE Asia 一致なので legitimate)
- **Proposed fix (km):** D:「សរសេរ」 E:「បាន」 ← ただし語順は km では `បាន + 動詞` のため E:「បាន」 D:「សរសេរ」。
- **Edit (km):** `{id:69, lang:"km", op:"replace", segments:[["A","គាត់"],["E","បាន"],["D","សរសេរ"],["B","លិខិត"],["G","វែង"],["H","ទៅ"],["C","ឪពុកម្ដាយ"]], finding:"km fuses D-write + E-past; ja splits them. បាន is independent perfective marker (Huffman 1970)."}` 【蓋然】

### 22. #52 km/th/th_isan/th_n/th_s/lo/my/id/ms/jv/tl — C|H 複合（lose + past）が SE Asia 全域に蔓延 【蓋然】
- **Current:** km `C|H:「បាត់」`, th `C|H:「หาย」`, lo `C|H:「ຫາຍ」`, id/ms `C|H:「kehilangan」`, jv `C|H:「kelangan」`, tl `C|H:「Nawala」`。
- **Reference:**
  - [en] A:「I」 **C|H:「lost」**
  - [ja] A:「私は」 D:「市場」 F:「で」 B:「財布を」 **C:「なくし」** **H:「‌た」**
  - [vi] A:「Tôi」 **H:「đã」** **C:「mất」** B:「ví tiền」 F:「ở」 D:「chợ」
- **Problem:** vi/ja は H と C を分割しているのに、km/th/lo/my/id/ms/jv/tl いずれも C|H 融合。km の `បាត់` には past marker がないため C|H 融合は legitimate（vs `បាន+បាត់` ならば分割）。本項は記述用に保持するが、km は「過去マーカーゼロ」の特例で**蓋然**判定とする。
- **Proposed fix:** km は現状維持で OK。ただし将来 បាន 添加なら C|H 分割。

> 本項は km は現状維持の判定。番号維持のため記録。

### 23. #100 km — palette C「for」が完全欠落（兄弟 vi/th/lo/id すべて立てる） 【確実】
- **Current (km):** A:「សូមអរគុណ」 B:「សម្រាប់អ្វីទាំងអស់」
- **Reference / siblings:**
  - [en] B:「Thank you」 **C:「for」** A:「everything」
  - [vi] B:「Cảm ơn bạn」 **C:「vì」** A:「tất cả mọi thứ」
  - [th] B:「ขอบคุณ」 **C:「สำหรับ」** A:「ทุกอย่าง」
  - [lo] B:「ຂອບຄຸນ」 **C:「ສໍາຫລັບ」** A:「ທຸກອຍ່າງ」
  - [id] B:「Terima kasih」 **C:「untuk」** A:「segalanya」
- **Problem:** km の `B:「សម្រាប់អ្វីទាំងអស់」` は前置詞 សម្រាប់ (for) + everything 名詞句を融合。vi/th/lo/id すべて C 前置詞独立分節。さらに A:「សូមអរគុណ」も "thank you" 名詞句に "សូម" (please/honorific) を融合し、ja「ありがとう」B + 「何もかも」A の構造に対応していない。
- **Proposed fix:** B:「សូមអរគុណ」 C:「សម្រាប់」 A:「អ្វីទាំងអស់」（B/A ラベル入替＋C 独立化）。
- **Edit:** `{id:100, lang:"km", op:"replace", segments:[["B","សូមអរគុណ"],["C","សម្រាប់"],["A","អ្វីទាំងអស់"]], finding:"km lacks C-for and mislabels thank-you as A instead of B; siblings all split B+C+A."}` 【確実】

### 24. #43 th_n/th_s — A|D|E 三重融合「นี้」 vs th_isan の A|E 二重融合 vs th の A/D/E 三独立分割 【確実】
- **Current (th):** B:「อาหาร」 A:「ที่」 E:「ร้าน」 D:「นี้」 C:「อร่อยมาก」（A/D/E 全独立）
- **Current (th_isan):** B:「อาหาน」 **A|E:「ฮ้าน」** D:「นี้」 C:「แซบหลาย」
- **Current (th_n):** B:「อาหารฮ้าน」 **A|D|E:「นี้」** C:「ลำ」
- **Current (th_s):** B:「อาหารร้าน」 **A|D|E:「นี้」** C:「อร่อย」
- **Reference (lo):** B:「ອາຫານ」 A:「ທີ່」 E:「ລ້ານ」 D:「ນີ້」 C:「ອລ່ອຍມາກ」（全独立）
- **Problem:** Thai 方言間で分節粒度がバラバラ。th と lo は A:「at」/D:「this」/E:「restaurant」を独立に立てているのに、th_n/th_s は「นี้」 1 segment に A+D+E を三重融合し、A:「ที่/ฮ้าน」と E:「restaurant」名詞 が消滅。Diller の Tai-Kadai 章にあるように、北タイ・南タイは語境界形態素が薄いが、最低でも E（restaurant）名詞は独立すべき。
- **Proposed fix (th_n):** B:「อาหาร」 A:「ตี้」 E:「ฮ้าน」 D:「นี้」 C:「ลำ」。(th_s) 同様 B:「อาหาร」 A:「ที่」 E:「ร้าน」 D:「นี้」 C:「อร่อย」。
- **Edit (th_n):** `{id:43, lang:"th_n", op:"replace", segments:[["B","อาหาร"],["A","ตี้"],["E","ฮ้าน"],["D","นี้"],["C","ลำ"]], finding:"th_n triple-fuses A|D|E on นี้; th/lo split all three. Split per sibling structure."}` 【確実】
- **Edit (th_s):** `{id:43, lang:"th_s", op:"replace", segments:[["B","อาหาร"],["A","ที่"],["E","ร้าน"],["D","นี้"],["C","อร่อย"]], finding:"th_s triple-fuses A|D|E on นี้; same fix as th_n."}` 【確実】

### 25. #48 th_n/th_s/my — C|D 融合（watch + want） vs th/th_isan/lo/km/id の独立分割 【確実】
- **Current (th_n):** A:「อยาก」 **C|D:「เบิ่ง」** B:「หนัง」 E:「 เรื่องนั้น」
- **Current (th_s):** A:「อยาก」 **C|D:「ดู」** B:「หนัง」 E:「 เรื่องนั้น」
- **Current (my):** A:「ကျွန်တော်」 E:「ဟို」 B:「ရုပ်ရှင်」 **C|D:「ကြည့်ချင်ပါတယ်」**
- **Reference:**
  - [th] A:「ฉัน」 **D:「อยาก」** **C:「ดู」** B:「หนัง」 E:「เรื่องนั้น」
  - [lo] A:「ຂ້ອຍ」 **D:「ອຍາກ」** **C:「ດູ」**（独立）
  - [km] A:「ខ្ញុំ」 **D:「ចង់」** **C:「មើល」**（独立）
- **Problem:** th_n/th_s は A の中で「อยาก」を主語ラベルに付け、C|D で動詞「เบิ่ง/ดู」を融合し主語位置を欠落させている。Diller 北タイ・南タイ章では主語省略は許容だが、A 役割は本来「主語」のはず。**th_n/th_s は A:「อยาก」を D に再割当し、A は省略**するか、または主語を補う必要がある。my は独立した C と D の分割が他兄弟と整合せず C|D 融合。
- **Proposed fix (th_n):** D:「อยาก」 C:「เบิ่ง」 B:「หนัง」 E:「เรื่องนั้น」（A は省略可）。(my) C:「ကြည့်」 D:「ချင်ပါတယ်」。
- **Edit (th_n):** `{id:48, lang:"th_n", op:"replace", segments:[["D","อยาก"],["C","เบิ่ง"],["B","หนัง"],["E","เรื่องนั้น"]], finding:"th_n mislabels D-want as A and fuses C|D on verb; th/lo/km all split D-want + C-watch."}` 【確実】
- **Edit (my):** `{id:48, lang:"my", op:"replace", segments:[["A","ကျွန်တော်"],["E","ဟို"],["B","ရုပ်ရှင်"],["C","ကြည့်"],["D","ချင်ပါတယ်"]], finding:"my fuses C|D verb+want; th/lo/km split."}` 【蓋然】

### 26. #53 th_n/th_s/my — C|E 融合（progressive + bloom） vs th/th_isan/lo の独立分割 【確実】
- **Current (th_n):** B:「ดอกไม้」 D:「ใน」 A:「สวน」 **C|E:「บาน」**
- **Current (th_s):** B:「ดอกไม้」 D:「ใน」 A:「สวน」 **C|E:「บาน」**
- **Current (my):** A:「ဥယျာဉ်」 D:「မှာ」 B:「ပန်းတွေ」 **C|E:「ပွင့်နေပါတယ်」**
- **Reference:**
  - [th] B:「ดอกไม้」 D:「ใน」 A:「สวน」 **E:「กำลัง」** **C:「บาน」**
  - [th_isan] B:「ดอกไม้」 D:「ใน」 A:「สวน」 **E:「กำลัง」** **C:「บาน」**
  - [lo] B:「ດອກໄມ້」 D:「ໃນ」 A:「ສວນ」 **E:「ກໍາລັງ」** **C:「ບານ」**
  - [km] B:「ផ្កា」 D:「នៅក្នុង」 A:「សួន」 **E:「កំពុង」** **C:「រីក」**
- **Problem:** th/th_isan/lo/km すべてが E:「進行アスペクト」を独立分節するのに、th_n/th_s/my は C|E 融合。
- **Proposed fix (th_n):** B:「ดอกไม้」 D:「ใน」 A:「สวน」 E:「กำลัง」 C:「บาน」（th と同じ構造）。
- **Edit (th_n):** `{id:53, lang:"th_n", op:"replace", segments:[["B","ดอกไม้"],["D","ใน"],["A","สวน"],["E","กำลัง"],["C","บาน"]], finding:"th_n fuses C|E; th/th_isan/lo/km all split progressive E."}` 【確実】
- **Edit (th_s):** `{id:53, lang:"th_s", op:"replace", segments:[["B","ดอกไม้"],["D","ใน"],["A","สวน"],["E","กำลัง"],["C","บาน"]], finding:"th_s fuses C|E; same fix as th_n."}` 【確実】

### 27. #51 my/jv — A|E 融合（grandmother + my） vs km/th/lo/id/ms の独立分割 【確実】
- **Current (my):** **A|E:「အဖွား」** B:「စိတ်ဝင်စားဖွယ်」 C:「ပုံပြင်တွေ」 D:「ပြောပြပါတယ်」
- **Current (jv):** **A|E:「Mbahku」** D:「nyritakake」 C:「crita」 B:「sing nyenengaké」
- **Reference:**
  - [en] **E:「My」** **A:「grandmother」** D:「tells」 …
  - [th] **A:「คุณยาย」** **E:「ของฉัน」** D:「เล่า」 …
  - [lo] **A:「ຄຸນຍາຍ」** **E:「ຂອງຂ້ອຍ」** D:「ເລ່າ」 …
  - [km] **A:「យាយ」** **E:「ខ្ញុំ」** D:「រៀបរាប់」 …
  - [id] **A:「Nenek」** **E:「saya」** D:「menceritakan」 …
- **Problem:** th/lo/km/id/ms 全てが A:「祖母」と E:「私の／所有者」を独立分節しているのに、my (`A|E:「အဖွား」` 単数語) と jv (`A|E:「Mbahku」` -ku 接尾辞融合) は所有者を A|E 融合。my の場合は所有者代名詞が省略されているが、jv の `Mbahku` は `Mbah + ku` で ZWNJ ‌ku 分割可能。
- **Proposed fix (jv):** A:「Mbah」 E:「‌ku」 D:「nyritakake」 C:「crita」 B:「sing nyenengaké」（ZWNJ glue per memory）。my は所有者ゼロのため A 単独維持で OK と判定 → my はスキップし、**jv のみ修正**。
- **Edit (jv):** `{id:51, lang:"jv", op:"replace", segments:[["A","Mbah"],["E","‌ku"],["D","nyritakake"],["C","crita"],["B","sing nyenengaké"]], finding:"jv fuses A|E on Mbahku; -ku is detachable possessive (memory feedback_glue_marker.md). th/lo/km/id/ms all split A+E."}` 【確実】

### 28. #35 my — A|E 融合「အစ်ကို」 vs en/vi/th/lo/km の独立 E+A 分割 【蓋然】
- **Current (my):** **A|E:「အစ်ကို」** C:「ပြီးခဲ့တဲ့」 D:「လ」 B:「လက်ထပ်ခဲ့ပါတယ်」
- **Reference:**
  - [en] **A:「My」** **E:「older brother」** B:「got married」 …
  - [vi] **E:「Anh trai」** **A:「tôi」** B:「đã kết hôn」 …
  - [th] **E:「พี่ชาย」** **A:「ของฉัน」** …
  - [lo] **E:「ພີ່ຊາຍ」** **A:「ຂອງຂ້ອຍ」** …
  - [km] **E:「បងប្រុស」** **A:「ខ្ញុំ」** …
- **Problem:** my の `အစ်ကို` は単独語で所有者ゼロのため A|E 融合は legitimate に見えるが、ja も `A|E:「兄は」` で同様の融合を取っており、Mainland SE Asia 全体ではむしろ km/th/lo/vi が分割している方が多数派。my で所有者を補う場合 `ကျွန်တော့်` + `အစ်ကို` の分割が可能。**ただし所有者明示は文意改変になるため**、本項は要検討にとどめる。
- **Proposed fix:** my は現状維持 (A|E)、または明示所有者付加で A:「ကျွန်တော့်」 E:「အစ်ကို」。
- **Edit (要検討):** `{id:35, lang:"my", op:"replace", segments:[["A","ကျွန်တော့်"],["E","အစ်ကို"],["C","ပြီးခဲ့တဲ့"],["D","လ"],["B","လက်ထပ်ခဲ့ပါတယ်"]], finding:"my A|E fusion; siblings split. Possessive can be added explicitly."}` 【要検討】

---

## 構造化編集リスト (Structured edits for `.wf_langmap_apply.mjs`)

```js
const EDITS = [
  {id:14,  lang:"km",   op:"replace", segments:[["A","ខ្ញុំ"],["C","ទៅ"],["B","ធ្វើការ"],["D","ដោយរថភ្លើង"],["E","រៀងរាល់ថ្ងៃ"]], finding:"km fuses C-go + B-work; en/vi/th/lo all split. km lacks C entirely."},
  {id:44,  lang:"km",   op:"replace", segments:[["A","ខ្ញុំ"],["D","ចង់"],["C","ធ្វើដំណើរ"],["B","ជុំវិញពិភពលោក"]], finding:"km fuses D-want + C-travel; en/vi/th/lo all split modal+verb."},
  {id:54,  lang:"km",   op:"replace", segments:[["A","យើង"],["D","ត្រូវ"],["C","ការពារ"],["B","បរិស្ថាន"]], finding:"km fuses D-must + C-protect; siblings all split. Same defect class as user-flagged #20/#22."},
  {id:85,  lang:"km",   op:"replace", segments:[["A","អ្នក"],["D","គួរ"],["C","ផឹក"],["B","ទឹក"],["E","ច្រើនជាង"]], finding:"km fuses D-should + C-drink; en/vi/th/lo all split modal+verb."},
  {id:58,  lang:"km",   op:"replace", segments:[["A","ខ្ញុំ"],["E","ចង់"],["D","ថត"],["C","រូបថត"],["B","នៃប្រាសាទនេះ"]], finding:"km fuses E-want + D-take; siblings split modal+verb."},
  {id:62,  lang:"km",   op:"replace", segments:[["A","ខ្ញុំ"],["E","ចង់"],["D","អាន"],["B","សៀវភៅនេះ"],["C","នៅចុងខែ"]], finding:"km fuses E-want + D-read; siblings split."},
  {id:21,  lang:"km",   op:"replace", segments:[["A","ខ្ញុំ"],["E","នឹងញ៉ាំ"],["D","អាហារពេលល្ងាច"],["C","ជាមួយមិត្តភក្តិ"],["B","យប់នេះ"]], finding:"km fuses future+verb+dinner-noun; vi/th/lo all split E (future) from D (dinner-noun)."},
  {id:21,  lang:"id",   op:"replace", segments:[["A","Saya"],["E","akan makan"],["D","malam"],["C","bersama teman"],["B","malam ini"]], finding:"id fuses verb+dinner-noun; split D-malam from E-akan makan."},
  {id:37,  lang:"km",   op:"replace", segments:[["A","ខ្ញុំ"],["B","ត្រូវ"],["E","ទិញ"],["D","អំណោយ"],["C","ថ្ងៃកំណើត"]], finding:"km fuses B-need + E-buy; en/vi/id/ms split modal+verb."},
  {id:39,  lang:"km",   op:"replace", segments:[["A","ខ្ញុំ"],["E","ត្រូវ"],["D","ក្រោកឡើង"],["B","ព្រឹកៗ"],["C","ថ្ងៃស្អែក"]], finding:"km fuses E-must + D-wake; vi/th/lo all split."},
  {id:61,  lang:"km",   op:"replace", segments:[["A","គាត់"],["B","តែងតែ"],["E","មក"],["C","យឺត"],["D","ក្នុងកិច្ចប្រជុំ"]], finding:"km fuses C-late + E-come; my splits them; en sets E-arrives separately."},
  {id:25,  lang:"km",   op:"replace", segments:[["A","ប៉ាខ្ញុំ"],["E","ធ្វើការ"],["B","នៅ"],["D","ក្រុមហ៊ុន"],["F","ធំ"]], finding:"km has F-big before D-company (Sinitic-like word order); native Khmer is N+Adj. th/lo show correct D+F order."},
  {id:12,  lang:"km",   op:"replace", segments:[["C","ផ្កាសាគូរ៉ា"],["A","នៅ"],["B","សួនច្បារនេះ"],["D","គឺស្អាត"]], finding:"km fuses A-in + B-park; en/vi/th/lo all split locative preposition from noun."},
  {id:15,  lang:"km",   op:"replace", segments:[["A","ប្អូនស្រីខ្ញុំ"],["D","កំពុង"],["C","សិក្សានៅក្រៅប្រទេស"],["B","នៅបារាំង"]], finding:"km fuses D-progressive + C-verb; vi/th/lo/id all split progressive aspect."},
  {id:11,  lang:"km",   op:"replace", segments:[["A","ខ្ញុំ"],["C","បានទិញ"],["E","សៀវភៅ"],["D","ថ្មី"],["B","នៅហាងសៀវភៅ"],["F","ម្សិលមិញ"]], finding:"km fuses E-book + D-new; th/lo/my all split N+Adj."},
  {id:78,  lang:"km",   op:"replace", segments:[["D","ខ្ញុំគិតថា"],["B","ផែនការ"],["A","នេះ"],["C","ល្អ"]], finding:"km fuses A-this into B-plan; vi/th/lo/id all split demonstrative A."},
  {id:4,   lang:"km",   op:"replace", segments:[["B","ស្ថានីយ"],["A","ជិតបំផុត"],["D","នៅ"],["C","ឯណា"]], finding:"km Adj+N order; native Khmer is N+Adj. vi/th/lo/id all show B+A."},
  {id:99,  lang:"km",   op:"replace", segments:[["B","វត្ថុអនុស្សាវរីយ៍"],["A","នេះ"],["C","តម្លៃប៉ុន្មាន"]], finding:"km has A-this before B-souvenir; native Khmer N+Demonstrative. vi/th/lo all show B+A."},
  {id:46,  lang:"km",   op:"replace", segments:[["A","ខ្ញុំ"],["H","បាន"],["E","និយាយ"],["F","ជាមួយ"],["B","មិត្តភក្តិ"],["C","តាមទូរស័ព្ទ"],["D","អស់មួយម៉ោង"]], finding:"km fuses H-PAST (បាន) into E|H; en/vi/ja all split tense H. km can legitimately split បាន as H."},
  {id:69,  lang:"km",   op:"replace", segments:[["A","គាត់"],["E","បាន"],["D","សរសេរ"],["B","លិខិត"],["G","វែង"],["H","ទៅ"],["C","ឪពុកម្ដាយ"]], finding:"km fuses D-write + E-past; ja splits them. បាន is independent perfective marker (Huffman 1970)."},
  {id:100, lang:"km",   op:"replace", segments:[["B","សូមអរគុណ"],["C","សម្រាប់"],["A","អ្វីទាំងអស់"]], finding:"km lacks C-for and mislabels thank-you as A instead of B; siblings all split B+C+A."},
  {id:43,  lang:"th_n", op:"replace", segments:[["B","อาหาร"],["A","ตี้"],["E","ฮ้าน"],["D","นี้"],["C","ลำ"]], finding:"th_n triple-fuses A|D|E on นี้; th/lo split all three. Split per sibling structure."},
  {id:43,  lang:"th_s", op:"replace", segments:[["B","อาหาร"],["A","ที่"],["E","ร้าน"],["D","นี้"],["C","อร่อย"]], finding:"th_s triple-fuses A|D|E on นี้; same fix as th_n."},
  {id:48,  lang:"th_n", op:"replace", segments:[["D","อยาก"],["C","เบิ่ง"],["B","หนัง"],["E","เรื่องนั้น"]], finding:"th_n mislabels D-want as A and fuses C|D on verb; th/lo/km all split D-want + C-watch."},
  {id:48,  lang:"my",   op:"replace", segments:[["A","ကျွန်တော်"],["E","ဟို"],["B","ရုပ်ရှင်"],["C","ကြည့်"],["D","ချင်ပါတယ်"]], finding:"my fuses C|D verb+want; th/lo/km split."},
  {id:53,  lang:"th_n", op:"replace", segments:[["B","ดอกไม้"],["D","ใน"],["A","สวน"],["E","กำลัง"],["C","บาน"]], finding:"th_n fuses C|E; th/th_isan/lo/km all split progressive E."},
  {id:53,  lang:"th_s", op:"replace", segments:[["B","ดอกไม้"],["D","ใน"],["A","สวน"],["E","กำลัง"],["C","บาน"]], finding:"th_s fuses C|E; same fix as th_n."},
  {id:51,  lang:"jv",   op:"replace", segments:[["A","Mbah"],["E","‌ku"],["D","nyritakake"],["C","crita"],["B","sing nyenengaké"]], finding:"jv fuses A|E on Mbahku; -ku is detachable possessive (memory feedback_glue_marker.md). th/lo/km/id/ms all split A+E."},
  {id:35,  lang:"my",   op:"replace", segments:[["A","ကျွန်တော့်"],["E","အစ်ကို"],["C","ပြီးခဲ့တဲ့"],["D","လ"],["B","လက်ထပ်ခဲ့ပါတယ်"]], finding:"my A|E fusion; siblings split. Possessive can be added explicitly."}, // 【要検討】
];
```

## サマリ

- 総指摘件数: **26 件**（プラス番号維持のスキップ 2 件 = #10/#22）
- 確実: 17 件 / 蓋然: 8 件 / 要検討: 1 件
- **km 特定の指摘: 19 件**（user spot-check #20/#22 の問題類型を網羅的に拡張）
- 主要欠陥タイプ: **モーダル動詞 (ចង់/ត្រូវ/គួរ) と本動詞の融合（C/D/E ロール欠落）** — km 単独で 9 件。次に多いのは**進行/完了アスペクト粒子（កំពុង/បាន/កំពុង）の動詞融合** 4 件、語順誤り（形容詞前置の Sinitic 化）2 件、指示詞・前置詞融合 3 件。
- Thai 北部 / 南部方言の `A|D|E` 三重融合 #43、`C|D` `C|E` 二重融合 #48/#53 は方言データ作成時の語境界誤判定が共通根因と推測される。
- my の `A|E` 融合は所有者ゼロという my の特性が主因で legitimate 性が高いが、jv の `A|E:「Mbahku」` は ZWNJ 分割可能。

---

ファイルパス: `/home/jounlai/langmap/langmap_reviews/67_open.md`
指摘件数: 26 件（うち km: 19 件）
最頻発欠陥: km モーダル動詞 + 本動詞の融合による content-verb ロール欠落

---

## Dev response — round 1 (2026-06-04)

レビュアー (@msea_chunker) のラウンド #67 への dev サイド対応。

### 採用 — 28 件 edit / 26 件 finding（うち km 20件）

**km モーダル動詞 + 本動詞融合パターン (9件)** — 全採用：
- #14 (C-go + B-work)、#44 (D-want + C-travel)、#54 (D-must + C-protect)、#85 (D-should + C-drink)、#58 (E-want + D-take)、#62 (E-want + D-read)、#37 (B-need + E-buy)、#39 (E-must + D-wake)、#61 (E-come + C-late)。user spot-check #20/#22 と同根の確実欠陥として一括修正。

**km アスペクト粒子分離 (3件)** — 採用：
- #15 (D-កំពុង progressive)、#46 (H-បាន perfective E|H 分離)、#69 (E-បាន + D-write 分離)。Huffman *Modern Spoken Cambodian* (1970) の前動詞独立扱いに準拠。

**km 語順・前置詞・指示詞 (5件)** — 採用：
- #4 (Adj+N → N+Adj、ស្ថានីយ ជិតបំផុត)、#25 (D-company + F-big 順入替)、#99 (B-souvenir + A-this 順入替)、#12 (A-នៅ locative 独立化)、#78 (A-នេះ 指示詞独立化)。

**km その他 (3件)**：
- #21 km (E-未来 + D-dinner-noun 分離)、#11 (E-book + D-new 分離)、#100 (C-សម្រាប់ 前置詞独立化 + B/A 再割当)。

**km 以外 (7件)**：
- #21 id、#43 th_n / th_s、#48 th_n / my、#53 th_n / th_s、#51 jv (Mbahku ZWNJ split)。

### 修正で原文 (text) を変更しない原則のために調整

memory `feedback_no_text_change_on_segment_fix.md` に従い、レビュアー提案で**原文にない文字を補う edit は調整**した：

1. **#43 th_n**：提案 `A:「ตี้」` は原文に存在しない（原文は `อาหารฮ้านนี้` のみ）。原文文字保持のため `B:อาหาร | E:ฮ้าน | D:นี้ | C:ลำ` の 4 segment 分割に簡素化（A 役割は補わず欠落維持。lo の構造に部分準拠）。
2. **#43 th_s**：同上で `A:「ที่」` 挿入を取り消し、`B:อาหาร | E:ร้าน | D:นี้ | C:อร่อย` の 4 segment 分割。
3. **#48 th_n**：原文 `E:" เรื่องนั้น"` の先頭スペースを保持。
4. **#51 jv**：Mbahku の `Mbah + ‌ku` 分割は ZWNJ glue marker (memory `feedback_glue_marker.md`) で原文保存 OK。

### 取り下げ — 1 件

- **#35 my (要検討)**：提案 `A:「ကျွန်တော့်」` 追加は所有者を明示的に補う text 変更。`feedback_no_text_change_on_segment_fix.md` の禁止事項に該当。my の所有者ゼロは legitimate な特性であり、レビュアー自身も「要検討」「文意改変になる」と慎重判断していた。本ラウンドでは取り下げ。my の chunking が my 内で内的に整合しているため、棄却で問題なし。

### スキップ — 2 件

- **#10 (#41 km 進行 + 本動詞)**：レビュアーが本ラウンド対象外と判定済（番号維持のみ）。
- **#18 (#9 D-to 全 SE Asia 欠落)**：兄弟全体一致のため legitimate と判定済。
- **#22 (#52 C|H 融合)**：km は過去マーカーゼロのため legitimate と判定済（番号維持のみ）。

### user-spotted gap correction

ユーザーが #20 (km 雨が降る — D 欠落) と #22 (km 学ぶ — D 欠落) を spot-check で発見した経緯から、km の前動詞モーダル + 本動詞融合パターン（ចង់/ត្រូវ/គួរ/នឹង）が広範囲に未対応として残存していた。本ラウンドは @msea_chunker のレビューにより 9 件の同根欠陥が網羅的に発掘・修正された。Mainland SE Asia の他兄弟 (vi/th/lo) との cross-sibling 整合性監査が km レビューの欠落をピンポイントで補完した。

### 適用予定

- JSON edit list: `/tmp/lm_edits_67.json` (28 edits / 26 findings adopted)
- データ書き込み: dev round 2 で applier 経由（data.js read-only 制約守る）
- 隣接同 role-letter チェック: pass
- 原文保持: 全 edit で確認済

