# LangMap データレビュー #45 — 数詞 + 類別詞 (Numeral + Classifier) 分節横断レビュー

## レビュアー自己紹介 (ペルソナ)

Petra Kostić-Bandyopadhyay (handle: **@cl_petra**)。SOAS (London) 言語類型論博士 → Cologne Mercator-IPK 客員。学位論文 "Numeral Classifiers and the Count-Mass Continuum from East to South Asia"。常用文献は Aikhenvald *Classifiers: A Typology of Noun Categorization Devices* (OUP 2000)、Bisang *Classifiers, Quantifiers, and Class Nouns in Hmong* (1993) / "Numeral Classifiers in Mainland SEA" (Jensen 1999 hb.)、Greenberg "Generalizations about Numeral Systems" (1978)、Croft "Semantic Universals in Classifier Systems" (1994)、Li & Thompson *Mandarin Chinese: A Functional Reference Grammar* (UC Press 1981) §4.2、Sohn *The Korean Language* (CUP 1999) §6.2、Iwasaki *Japanese* (Benjamins 2013) §6.7、Diller et al. *The Tai-Kadai Languages* (Routledge 2008)。今回は memory `feedback_number_noun_merge_into_B.md` (= 「数 + 名詞は B に統合」) を主軸に、SEA/EA の類別詞言語 (zh/yue/ja/ko/vi/th/bn/my/km/lo/hi/bo) と非類別詞ロマンス/ゲルマン/英語 (en/fr/es/it/de/pt) を相互比較し、**数詞 + (類別詞) + 名詞 / 不定冠詞 + 名詞 / 数量詞 (many/some) + 名詞 / 時刻表現 (at X o'clock) / 頻度表現 (X times a week)** が文/言語横断で整合分節されているかを精査する。

## 検証範囲

- **数詞・類別詞・数量詞を含む 16 文** をライブデータ (`data.js`) からスキャン: #1 (a suit / a shop), #3 (every / 7 o'clock), #8 (every day), #11 (a new book), #13 (a glass of water), #14 (every day), #17 (a meeting / 3 o'clock), #22 (a new language), #25 (a big company), #27 (three times), #36 (many people), #46 (an hour), #55 (2 cups), #56 (8 o'clock), #57 (3 languages), #59 (every 15 minutes), #67 (3 times a week), #70 (9 PM), #74 (30 minutes), #93 (many festivals), #98 (this dish — 指示詞 + 名詞は比較対照群として)。
- **対象言語層**: 類別詞言語 12 (zh, yue, ja, ko, vi, vi_c, vi_s, th, th_n, th_isan, bn, my, km, lo, bo, hi) + 非類別詞参照群 (en, en_au, en_in, en_sg, fr, es_eu, it, de, pt_eu, id, ms, jv) + 韓 dialect (ko_bus 等) + 中 dialect (yue, hak_cn, nan, wuu, zh_db, zh_sc)。
- 分節データは `node -e` 抽出 (b7jcvs5th.txt / bcf50sc6n.txt の 2 ダンプ計 ~75KB) で 100 文 × 全言語を確認済み。

## 方針 — 何を「指摘」とし、何を「許容」とするか

1. **`feedback_number_noun_merge_into_B.md` の原則** — 「数 + 名詞は対象 (B / D / E などのオブジェクト系列) に統合」。同一文内で en/fr 等が `B:"a new book"` 系列に統合しているのに、別言語が `D:数 | E:名詞` のように分割する (またはその逆) のは **整合性違反**。
2. **類別詞 (CL) の扱い** は本データ上で既に **二つの慣行が並存**: 
   (a) `[E:数] [F:類別詞] [B:名詞]` の **三分節** (例: #55 zh `E:两 | F:杯 | B:咖啡`) 
   (b) `[D:数 + 類別詞] [E:名詞]` の **二分節** (例: #11 zh `D:一本 | E:新书`) 
   どちらか一方に統一すべきだが、本レビューでは **同一語族 (Sinitic / Japonic / Koreanic / Tai / Indic) 内で同じ文の類別詞扱いが揺れている** ケースを指摘の対象とする。`feedback_split_segments_like_reference.md` および `feedback_prefer_splitting_segments.md` も「方言は参照言語の構造に合わせて分割」を要請。
3. **時刻表現** (at 3 o'clock, 8 o'clock, 9 PM): en が `D:at | E:3 o'clock` のように **前置詞と時刻を分離**しているのに、別言語で時刻+助数詞が融合しているか、参照と分節数が整合しないか。
4. **頻度表現** (three times a week): en `C:three times | E:a week` の二分節を、他言語が `C:三回 | E:一週間` で揃えているか。
5. **不定冠詞 + 形容詞 + 名詞** (a new book, a big company, a meeting): en が `D:a new | E:book` (#11) / `C:a | F:big | D:company` (#25) と扱いを変えているのが問題。
6. **「many / some / a lot of」 (quantifier)**: en/fr が `E:many | F:festivals` (#93) のように分割。zh `E:许多 | F:节日` で揃っているが、vi `E:nhiều | F:lễ hội` と vi_s `E:có nhiều | F:lễ hội` で 「存在動詞 có (有)」が E に混入する不整合。

確信度: **【確実】**= 同一文内で同言語族の同等構造が異なる分節になっており、機械的判定可能、**【蓋然】**= 文法的に妥当な揺れだが整合性は損なう、**【要検討】**= memory rule そのものの拡張・再解釈が必要。

---

## 指摘事項 (Issues found)

### 1. #13 「a glass of water」 — 類別詞 (杯/cốc/ly/แก้ว) の分節が言語間で完全に分裂している 【確実】

**Current (#13):**
- en `F:"a glass of" | C:"water"` (= 数+類別詞句を F に統合, 名詞は C)
- fr `F:"un verre d'" | C:"eau"` (同上)
- ja `C:"お水を" | F:"一杯"` (= **名詞 C が前、数+類別詞 F が後**: 完全逆転)
- ko `C:"물" | F:"한 잔"` (同 ja パターン)
- zh `F:"一杯" | C:"水"` (en と同パターン)
- vi `F:"một cốc" | C:"nước"` (同上)
- **bn `F:"এক গ্লাস" | C:"পানি"`** (数+CL を F、名詞 C)
- **hi `F:"एक गिलास" | C:"पानी"`** (同上)
- **th `F:"น้ำ หนึ่งแก้ว" | B:"ฉัน"`** (= **名詞 + 数 + CL を F に一括**)
- **km `F:"ទឹកមួយ" | C:"កែវ"`** (= **「水 + 一」を F、「杯」を C** — 完全に解釈が壊れている)
- **lo `C:"ນ້ໍາ" | F:"ຫນຶ່ງ ແກ້ວ"`** (名詞 C、数+CL F — ja/ko 型)
- **my `F:"ရေ" | C:"တစ်ခွက်"`** (= **「水」を F、「一杯」を C** — km と逆方向に解釈が壊れている)
- **bo `F:"ཆུ་ཕོར་གང"`** (水+杯+一 を一括 F)
- **ta `F:"ஒரு கிளாஸ்" | C:"தண்ணீர்"`** (en 型)
- **te `F:"ఒక గ్లాసు" | C:"నీళ్ళు"`** (en 型)

**Problem:** 「a glass of water」は en の `F:"a glass of" | C:"water"` を **参照構造** とした場合、(i) **「数+類別詞」を F、「名詞 (=実体)」を C** という en/fr/zh/vi/bn/hi/lo/ta/te の **大勢方針**が確立している。だが **km は名詞+数を F に、CL を C に分けてしまっており逆**で、**my は名詞だけ F、数+CL を C に**入れて km と真逆。これは「**液体名詞 vs 容器類別詞** のどちらをオブジェクト主体と見るか」の根本的食い違いで、テキスト上 km の `ទឹកមួយ`(水一) と my の `ရေ`(水) を比較すると一目で破綻が分かる。th `F:"น้ำ หนึ่งแก้ว"`(水 一杯) は名詞 + 数 + CL を全部 F に一括しており、別パターン。

**Proposed (推奨統一: 「en 参照に合わせて 数+CL=F / 名詞=C」):**
- km: `F:"មួយកែវ" | C:"ទឹក"` (順序入れ替え) または `F:"ទឹកមួយកែវ"` 一括 (Khmer 標準語順は 名詞 + 数 + CL なので後者が自然)
- my: `F:"တစ်ခွက်" | C:"ရေ"` または `F:"ရေ တစ်ခွက်"` 一括 (Burmese 標準語順は 名詞 + 数 + CL)
- bo: `F:"ཆུ་ཕོར་གང"` は一括だが en 参照に合わせるなら `F:"ཕོར་པ་གང" | C:"ཆུ་"` のように CL+ 数を分けるべき
- th: `F:"น้ำ หนึ่งแก้ว"` の **空白 + 一括**は単独で奇妙。`C:"น้ำ" | F:"หนึ่งแก้ว"` (名詞 C、数+CL F) に統一を推奨
- ja/ko/lo (`C:名詞 | F:数CL`) を **C/F 入れ替え**して en 参照 (`F:数CL | C:名詞`) と整合させる方向もあるが、これらは「水を一杯ください」「물 한 잔 주세요」の **自然語順を保持**しているので segment letter のみ揃え (= `F:"お水を" | C:"一杯"` のように C/F を入れ替える) が最少コスト

**根拠:** `feedback_number_noun_merge_into_B.md` は「数+名詞は B に統合」を指示するが、本文では **容器類別詞「杯/glass」を独立分節 F として扱う** という派生慣行が en で確立されている。少なくとも **「水 (実体名詞)」が C に、「一杯 (数+CL)」が F に** という en/zh/vi/bn 大勢に統一すべき。

---

### 2. #11 「a new book」 — 不定冠詞+形容詞の分節が en/fr/de と zh/yue で食い違う 【確実】

**Current (#11):**
- en `D:"a new" | E:"book"` (= **不定冠詞 + 形容詞** を D、名詞を E)
- fr `D:"un nouveau" | E:"livre"` (同上)
- pt_eu `E:"um livro" | D:"novo"` (= **不定冠詞 + 名詞** を E、形容詞を D — 順序逆転)
- es_eu `E:"un libro" | D:"nuevo"` (同 pt パターン)
- it `E:"un libro" | D:"nuovo"` (同上)
- de `D:"ein neues" | E:"Buch"` (= en パターン)
- ja `D:"新しい" | E:"本を"` (= 不定冠詞ゼロ、形容詞 D + 名詞 E)
- ko `D:"새" | E:"책을"` (同 ja)
- **zh `C:"买了" | D:"一本" | E:"新书"`** (= **数+CL を D、形容詞+名詞 を E に統合**)
- **yue `C:"買咗" | D:"一本" | E:"新書"`** (同 zh)
- **vi `D:"một cuốn" | E:"sách mới"`** (= 数+CL を D、形容詞+名詞 を E)
- **th `E:"หนังสือ" | D:"เล่มใหม่"`** (= 名詞 E、CL+ 形容詞 D — **数詞「หนึ่ง」省略**かつ 形容詞が CL 側に張り付き)
- **lo `E:"ໜັງສື" | D:"ເລ່ມໄຫມ່"`** (同 th)
- **th_n / th_isan `E:"ปื้ม" | D:"ໃหม่"`** (= **CL も完全に省略**、形容詞のみ D)
- **en_sg `D:"one new" | E:"book"`** (= en の "a" を "one" に置き換え)

**Problem:** zh/yue/vi では **「数+CL」が D に、「形容詞+名詞」が E に** 統合されている (二分節)。これは `feedback_number_noun_merge_into_B.md` の精神 (「数+名詞は統合」) には沿うが、en/fr の **「冠詞+形容詞 を D、名詞 を E」** とは **形態素境界が一致しない** (en の D は形容詞を含む、zh の D は CL を含み形容詞は E)。th/lo に至っては **数詞が完全省略**され `E:名詞 | D:CL + 形容詞` という第三パターン。さらに **th_n/th_isan は CL すら省略**して `E:名詞 | D:形容詞` となっており、ja `D:形容詞 | E:名詞` と D/E の役割が **完全に逆転**している。

**Proposed:**
- **th / lo**: `E:"หนังสือ" | D:"เล่มใหม่"` → `D:"เล่ม" | E:"หนังสือใหม่"` (CL を独立 D、形容詞は名詞側に寄せる) または en に合わせて `D:"หนึ่งเล่ม" | E:"หนังสือใหม่"` (数詞補完)
- **th_n / th_isan**: 数+CL を完全省略するのは方言レジスタとして許容だが、現状 `E:"ปื้ม"(本) | D:"ใหม่"(新)` は **ja `D:"新しい" | E:"本を"` と D/E が逆**。Northern/Isan Thai 標準語順は **名詞 + 形容詞** だから `E:"ปื้ม" | D:"ใหม่"` は語順としては合っているが、letter の役割割当を ja と揃えるなら `D:"ปื้ม" | E:"ใหม่"` のように逆にするか、いっそ `B|E:"ปื้มใหม่"` 一括にすべき
- **zh / yue / vi**: 現状の `D:"一本/一冊" | E:"形容詞+名詞"` を en `D:"a new" | E:"book"` の構造と意味的に揃えるには、二つの選択肢: (a) en 側を `D:"a" | E:"new book"` に変更, (b) zh 側を `D:"一本新" | E:"书"` のように形容詞も D に取り込む。**(b) は不自然**なので **(a) を推奨**、すなわち en の `D:"a new"` を `D:"a"` + `B|E:"new book"` か、または `D:"a"` + 形容詞用の新 letter に分割

**根拠:** memory rule 「数+名詞は B に統合」は **同一分節への統合**を指示しているのに、現状は **数 (D) と名詞 (E) が分割されている**ケース (zh/yue/vi/en/fr) が支配的。これは memory rule に直接違反する重大な構造的不整合で、本来は **`B|D|E:"一本新书"`** のように **一括統合**するか、または **「数+CL=D, 形容詞+名詞=E」を全言語で統一**する必要がある。

---

### 3. #25 「a big company」 — 不定冠詞単独分節 (C:"a") が ja/ko/yue/my など多数で欠落 【確実】

**Current (#25):**
- en `B:"at" | C:"a" | F:"big" | D:"company"` (= **不定冠詞単独で C**、形容詞 F、名詞 D の 3 分節)
- fr `B:"dans" | C:"une" | F:"grande" | D:"entreprise"` (同上)
- es_eu `B:"en" | C:"una" | F:"gran" | D:"empresa"` (同上)
- de `B:"bei" | C:"einem" | F:"großen" | D:"Unternehmen"` (同上)
- it `B:"‌in" | C:"una" | F:"grande" | D:"azienda"` (同上)
- pt_eu `B:"numa" | F:"grande" | D:"empresa"` (= 前置詞+冠詞融合 `numa`、C 欠落)
- en_sg `B:"at" | F:"one big" | D:"company one"` (= 数+形容詞融合)
- **zh `B:"在" | C:"一家" | F:"大" | D:"公司"`** (en 構造に整合: 数+CL を C)
- **yue `B:"喺" | F:"大" | D:"公司"`** (= **数+CL 完全欠落**、C 分節なし — 口語 yue では裸名詞許容だが en 参照には不整合)
- **ja `F:"大きな" | D:"会社" | B:"に"`** (= C 欠落、不定冠詞ゼロ)
- **ko `F:"큰" | D:"회사" | B:"에"`** (同 ja)
- **vi `B:"tại" | C:"một" | D:"công ty" | F:"lớn"`** (= 不定冠詞 `một` を C 単独に分節 — en と整合)
- **hi `C:"एक" | F:"बड़ी" | D:"कंपनी" | B:"में"`** (= 不定数詞 `एक` C — en と整合)
- **bn `B:"একটি" | F:"বড়" | D:"কোম্পানিতে"`** (= **数詞 + 後置詞 を B に融合**、C 欠落)
- **te `B:"ఒక" | F:"పెద్ద" | D:"కంపెనీలో"`** (= 数詞 `ఒక` を B、後置詞は D 末尾に融合)
- **th `B:"ที่" | D:"บริษัท" | F:"ใหญ่"`** (= C 完全欠落、数詞ゼロ — 自然)
- **km `B:"នៅ" | F:"ធំ" | D:"ក្រុមហ៊ុន"`** (= C 欠落)
- **my `F:"ကြီး" | D:"ကုမ္ပဏီ" | B:"မှာ"`** (= C 欠落)

**Problem:** en/fr/es/de/it/zh/vi/hi が **「不定冠詞 (or 数+CL) を C 単独」** として独立分節しているのに対し、ja/ko/yue/my/km/th/bo は **C を完全欠落**。これは「ゼロ冠詞言語だから当然」と一見見えるが、**bn は `B:"একটি"`** (= 数詞+CL 結合形を B に格納) という **第三のパターン** を取っており、`feedback_number_noun_merge_into_B.md` の「数+名詞 B 統合」と整合的だが、同 #25 内の zh `C:"一家"` (= 独立 C) と矛盾する。

**Proposed:**
- **zh**: `C:"一家"` を維持するか **削除**して yue/ja に整合させるか統一。`feedback_number_noun_merge_into_B.md` 鑑みると **削除** が望ましい (en 参照は `C:"a"` を独立分節していて少数派)
- **bn**: `B:"একটি"` (数+CL を B に) と en 参照 `C:"a"` (C 単独) が整合しない。bn を `C:"একটি"` に変更するか、または en の `C:"a"` を `B` 系列に統合
- **vi**: `C:"một"` 独立は en に整合するが、同言語族の zh `C:"一家"` (CL 込み) と不揃い。**vi も `C:"một"` のままで OK**。ただし #11 vi `D:"một cuốn"` (= 数+CL を D) との内部不整合は #2 で既指摘
- **en_sg**: `F:"one big" | D:"company one"` の `D:"company one"` 末尾 "one" (= determiner final particle) は本来 sentence-final particle 用の独立 letter に出すべき (G 等)

**根拠:** 「不定冠詞 a/an の独立分節」自体が、en の慣行と非冠詞言語 (ja/ko/zh) の慣行で大きく分かれており、`feedback_number_noun_merge_into_B.md` を厳格適用すれば en 側も `C:"a"` を廃して `B|D:"a company"` 統合か、または `D:"a big company"` 一括にすべき。現状は **en だけが冠詞を独立 C にしている** ため、他言語の C 欠落が **意図的なゼロマーカー扱い** ではなく **取りこぼし** に見えてしまう。

---

### 4. #1 「a suit」「a shop」 — 不定冠詞「một」の独立分節が vi/vi_c/vi_s で文中の2か所で扱いが揺れる 【確実】

**Current (#1):**
- vi `D:"bộ vest" | ... | I:"một cửa hàng"` (= 「a suit」は数詞ゼロ・裸 CL、「a shop」は `một` 付き)
- vi_c `D:"bộ vest" | ... | I:"một cửa hàng"` (同上)
- vi_s `D:"bộ vest" | ... | I:"một tiệm"` (同上)
- vi_nom `D:"𦁸衣" | ... | I:"𠬠𨷶行"` (= 「𠬠」(một の漢字) で「a shop」)
- en `D:"a suit" | ... | I:"a shop"` (= 両方とも「a + N」を独立分節に統合)

**Problem:** 同一文内で英語が **「a suit」も「a shop」も同じ "a + N" パターン** を取っているのに、vi では **「a suit」を `D:"bộ vest"` (= 裸 CL bộ + 名詞、数詞省略)** にし、**「a shop」を `I:"một cửa hàng"` (= 数詞 một + 名詞、CL 省略)** にしている。これは **同一文内で同じ意味機能を持つ NP の分節パターンが不揃い**で、`feedback_split_segments_like_reference.md` の「兄弟言語は参照と同じ構造」原則に違反 (vi 内部での不整合)。

**Proposed:**
- vi `D:"bộ vest"` → `D:"một bộ vest"` (数詞 `một` を補い「a shop」と対称化) または 「a shop」側を `I:"cửa hàng"` (mộ削除) で対称化
- vi_s も同様 (`D:"bộ vest"` → `D:"một bộ vest"`)
- vi_nom `D:"𦁸衣"` も `D:"𠬠𦁸衣"` にして対称化

**根拠:** 同一英語フレーズ "a + N" が同じ文に 2 回出現するときは、ターゲット言語でも分節構造を揃えるべき (内部整合性)。

---

### 5. #17 「3 o'clock」「at 3」 — 前置詞 (at/に/lúc) と時刻数値の分節境界が言語間で不揃い 【確実】

**Current (#17):**
- en `D:"at" | E:"3 o'clock"` (= 前置詞 D、時刻 E)
- fr `D:"à" | E:"15 heures"` (同上)
- it `D:"alle" | E:"3"` (同上)
- de `D:"um" | E:"3 Uhr"` (同上)
- ja `E:"3時" | D:"に"` (= **時刻 E が前、後置詞 D が後** で順序逆転)
- ko `E:"3시" | D:"‌에"` (同 ja, ZWNJ 付き)
- vi `D:"lúc" | E:"3 giờ"` (= 前置詞 D、時刻 E — en と整合)
- **zh `E:"三点"`** (= **前置詞 D 完全欠落** — zh は時刻に前置詞不要だが en の D を空にする慣行が不揃い)
- **yue `E:"三點"`** (同 zh)
- **bn `E:"3টায়"`** (= **時刻+後置詞 を E に融合**、D 欠落)
- **hi `E:"3 बजे" | D:"बजे"`** (= 「3 बजे」 (3 時) を E、後置詞「बजे」(に) を D — **「बजे」が両方に重複!**)
- **my `E:"3 နာရီ" | D:"မှာ"`** (= 時刻 E、後置詞 D — ja パターン)
- **km `D:"នៅ" | E:"ម៉ោង 3"`** (= 前置詞 D、時刻 E — en パターン)
- **th `D:"เวลา" | E:"บ่ายสามโมง"`** (= 前置詞句 D、時刻 E)

**Problem:** zh/yue で **D 完全欠落**、bn で **D 欠落かつ E に後置詞融合**、hi で **「बजे」が D と E に重複** という重大な分節ミスがある。とくに hi `E:"3 बजे" | D:"बजे"` は **同じ語が 2 letter に出現**しており、display 上もテキストコピー時にも破綻する。

**Proposed:**
- **zh / yue**: `E:"三点"` のみで D 欠落 → 維持 (ゼロ前置詞は自然) で OK だが、`feedback_cross_sibling_role_consistency.md` 観点では vi `D:"lúc"` との対称性を保つため、せめて `D:""` 空セグメントを示すか、文書化が必要
- **hi**: `E:"3 बजे" | D:"बजे"` → `D:"बजे"` を削除して `E:"3 बजे"` のみに統一 (「बजे」は時刻表現の一部であって独立後置詞ではない)
- **bn**: `E:"3টায়"` の `টায়` は CL+ 後置詞融合形 → `E:"3টা" | D:"য়"` のように分割困難なので現状維持で OK、ただし en の D に対応する分節が欠落する旨を明示

**根拠:** 時刻表現は **「数 + CL/時刻語 + 後置詞/前置詞」** の 3 要素構造で、言語によって境界が揺れるのは仕方ないが、**同じ語が 2 letter に重複** (hi) は明確なバグ。

---

### 6. #56 「8 o'clock」 — 時刻 + 助数詞「時/giờ/točka/o'clock」の分節が言語間でバラバラ 【確実】

**Current (#56):**
- en `B:"at 8 o'clock"` (= 前置詞+数+語を一括 B)
- fr `B:"à 20 heures"` (同上)
- es_eu `B:"a las 8"` (= 前置詞+冠詞+数を一括)
- it `B:"alle 8"` (同上)
- de `B:"um 8 Uhr"` (= 一括)
- ja `B:"8時に"` (= 数+CL+ 後置詞を一括)
- ko `B:"8시에"` (同上)
- zh `B:"8点"` (= 数+CL一括、前置詞ゼロ)
- yue `B:"8點"` (同上)
- vi `B:"lúc 8 giờ"` (= 前置詞+数+CL 一括)
- th `B:"เวลา 8 โมง"` (= 前置詞+数+CL 一括)
- hi `B:"8 बजे"` (= 数+CL 一括)
- bn `B:"৮টায়"` (= 数+CL+ 後置詞融合)

**Comparison with #17 (which split D + E):** #17 では同じ「at 3 o'clock」が `D:"at" | E:"3 o'clock"` と **2 分節**に分けられているのに、#56 では同じ意味機能の「at 8 o'clock」が `B:"at 8 o'clock"` と **1 分節**に統合されている。en 内部での **同一構造の分節揺れ**。zh では #17 `E:"三点"`, #56 `B:"8点"` で letter も違うが、構造は両方とも「数+CL」一括で一貫している。

**Proposed:** en `B:"at 8 o'clock"` を #17 と整合させて `B:"at" | C:"8 o'clock"` に分割するか、あるいは **#17 側を統合**して `D|E:"at 3 o'clock"` 一括にすべき。**統合方向 (#17 を一括化) が memory rule** `feedback_number_noun_merge_into_B.md` に最も整合的。

**根拠:** 同一構造 (前置詞 + 数 + 時刻 CL) の分節扱いが文によって変わるのは典型的な整合性違反。

---

### 7. #55 「2 cups of coffee」 — 数 + CL の分節が **三分節 vs 二分節** で完全に分裂 【確実】

**Current (#55):**
- en `E:"two" | F:"cups of" | B:"coffee"` (= 数 E、CL+of F、名詞 B の **三分節**)
- fr `E:"deux" | F:"tasses de" | B:"café"` (同上)
- de `E:"zwei" | F:"Tassen" | B:"Kaffee"` (同上)
- ja `B:"コーヒーを" | E:"2" | F:"杯"` (= 名詞 B、数 E、CL F の **三分節** — 順序違うが letter 構造同じ)
- ko `B:"커피를" | E:"두" | F:"잔"` (同 ja)
- zh `E:"两" | F:"杯" | B:"咖啡"` (= 数 E、CL F、名詞 B)
- yue `E:"兩" | F:"杯" | B:"咖啡"` (同 zh)
- vi `E:"hai" | F:"tách" | B:"cà phê"` (= 同上)
- th `B:"กาแฟ" | E:"สอง" | F:"แก้ว"` (= 名詞 B、数 E、CL F)
- th_n `E:"สอง" | F:"แก้ว" | B:"กาแฟ"` (= **語順違い**、E + F + B)
- th_isan `B:"กาแฟ" | E:"สอง" | F:"จอก"` (= 名詞 B、数 E、CL F — `แก้ว` でなく `จอก` を使用、これは方言語彙差なので妥当)
- hi `E:"दो" | F:"कप" | B:"कॉफी"` (= 三分節)
- bn `E:"দুই" | F:"কাপ" | B:"কফি"` (同上)
- my `B:"ကော်ဖီ" | E:"နှစ်" | F:"ခွက်"` (同上)
- km `B:"កាហ្វេ" | E:"ពីរ" | F:"កែវ"` (同上)
- lo `B:"ກາແຟ" | E:"ສອງ" | F:"ແກ້ວ"` (同上)
- bo `B:"ཁ་ཕྱེ་" | F:"ཕོར་པ་" | E:"གཉིས་"` (= **B + F + E 順** で語順違うが letter 構造同じ)

**Problem:** **#55 では類別詞言語/非類別詞言語問わず `E:数 | F:CL | B:名詞` の三分節が確立**している (これは memory rule とは反する設計だが、本文では一貫)。**だが #11 (a new book) と #57 (3 languages) と #67 (3 times a week) を比較すると分節パターンが文ごとに違う**:
- #11 zh `D:"一本" | E:"新书"` (= 数+CL 統合の **二分節**)
- #55 zh `E:"两" | F:"杯" | B:"咖啡"` (= 数 + CL 分離の **三分節**)
- #57 zh `B:"三种语言"` (= 数 + CL + 名詞 完全一括の **一分節**)
- #67 zh `C:"三次"` (= 数 + CL 一括)
- #93 zh `E:"许多" | F:"节日"` (= 数量詞 + 名詞 二分節)

つまり **同一言語 (zh) 内で類別詞構造の分節パターンが 1〜3 分節に揺れている**。

**Proposed:** **全 zh 文で類別詞構造を統一**。最尤統一形は **二分節** `[数+CL] [名詞]`:
- #55 zh `E:"两" | F:"杯" | B:"咖啡"` → `E|F:"两杯" | B:"咖啡"` (en 参照と並列 letter 維持)
- #57 zh `B:"三种语言"` → `B|F:"三种" | E:"语言"` (一括を二分節化)
- #67 zh `C:"三次"` → 単独 CL 句なので現状維持 OK

または **全文で `数 | CL | 名詞` の三分節** に統一する方向もあるが、これは memory rule に反するので非推奨。

**根拠:** `feedback_number_noun_merge_into_B.md` 「数+名詞は B 統合」を厳格適用すれば **一分節** が理想だが、現実には CL を独立 F に出している運用が #55 等で確立済み。せめて **同一言語内では一貫した方針 (二分節 or 三分節)** を採るべき。

---

### 8. #57 「3 languages」 — 数 + CL + 名詞 の一括統合 vs 分離が言語間で分裂 【確実】

**Current (#57):**
- en `B:"three languages"` (= 数 + 名詞 一括統合)
- fr `B:"trois langues"` (同上)
- es_eu `B:"tres idiomas"` (同上)
- it `B:"tre lingue"` (同上)
- ja `B:"3つの言語を"` (= 数 + CL + 名詞 + 助詞 全部一括)
- ko `B:"세 가지 언어를"` (= 数 + CL + 名詞 + 助詞 一括)
- zh `B:"三种语言"` (= 数 + CL + 名詞 一括)
- yue `B:"三種語言"` (同上)
- vi `B:"ba ngôn ngữ"` (= 数 + 名詞、CL 省略 — Vietnamese で `ngôn ngữ` には通常 CL 不要なので妥当)
- th `B:"สามภาษา"` (= 数 + 名詞、CL 省略)
- hi `B:"तीन भाषाएँ"` (= 数 + 名詞)
- bn `B:"তিনটি ভাষা"` (= 数+CL + 名詞)
- my `B:"ဘာသာစကားသုံးမျိုး"` (= 名詞 + 数 + CL 一括、語順 NSC)
- km `B:"ភាសា" | C:"បី ស្ទាត់"` (= **名詞 B、数+副詞 C** — `បី`(三) と `ស្ទាត់`(流暢) が **同じ C に融合**!)
- bo `B:"སྐད་ཡིག་གསུམ་"` (= 名詞 + 数 一括)

**Problem:** km `B:"ភាសា" | C:"បី ស្ទាត់"` は **「3」(numeral) と「流暢に」(adverb)** が **同じ C 分節に融合** しており、これは **意味的に全く異なる役割 (数量 vs 様態)** を 1 segment にまとめている。本来 #57 en では `B:"three languages" (数+名詞)` と `C:"fluently" (副詞)` が明確に分節されており、km の現状は **「三」が C に紛れ込み** ローマ字対応辞書から見ても完全な分節ミス。

**Proposed:**
- km: `B:"ភាសា" | C:"បី ស្ទាត់"` → `B:"ភាសាបី"` (= 名詞 + 数 を B に統合, en の `B:"three languages"` と整合) + `C:"ស្ទាត់"` (= 副詞のみ C)
- vi/th/hi で **CL 省略**しているのは方言レジスタとして許容
- **bn `B:"তিনটি ভাষা"`** (= 数+CL+名詞 一括) は最も memory rule に整合的、これを参照モデルに

**根拠:** `feedback_number_noun_merge_into_B.md` 厳格適用。km の現状は数詞と副詞が同 C に融合という構造的バグで、テキスト copy 時に `បី ស្ទាត់`(三 流暢) という不自然な連結が表示される。

---

### 9. #27 「three times」 — 頻度 CL の分節 letter が言語間で不揃い (C vs D vs 助詞融合) 【蓋然】

**Current (#27):**
- en `C:"three times"` (= 数+CL を C)
- ja `C:"三回"` (= 同上)
- ko `C:"세 번"` (= 数 + CL に空白を入れて C)
- zh `C:"三次"` (= 数+CL 一括 C)
- vi `C:"ba lần"` (= 同上)
- th `C:"สามครั้ง"` (= 数+CL 一括)
- bn `C:"তিনবার"` (= 数+CL 結合)
- my `C:"သုံးကြိမ်"` (= 同上)
- km `C:"បីដង"` (= 数+CL 一括)
- bo `C:"ལན་གསུམ་"` (= 数+CL 順序逆だが letter 同じ)

**Problem:** #27 は **「three times」を全言語で C に一括** という美しい一貫性を保っている。これを **参照モデル** として #67 (three times a week)、#46 (for an hour) と比較すると揺れが見える。

**#67 比較:**
- en `C:"three times" | E:"a week"` (= 頻度 C、期間 E の 2 分節)
- ja `E:"週に" | C:"3回"` (= 順序逆だが letter 同じ)
- bo `E:"བདུན་ཕྲག་རེར་" | C:"ལན་གསུམ་"` (同上)
- km `C:"បីដង" | E:"ក្នុងមួយសប្ដាហ៍"` (同上)
- ta `E:"வாரம்" | C:"மூன்று முறை"` (同上)

**#67 ですべての言語が `C + E` 二分節**で揃っているのは優秀。

**#46 「一時間 / an hour」比較:**
- en `D:"for an hour"` (= 前置詞 + 数 + CL 一括 D)
- fr `D:"pendant une heure"` (同上)
- ja `D:"一時間"` (= 数+CL 一括)
- zh `D:"一个小时"` (= 数+CL+小辞 一括)
- vi `D:"trong một tiếng"` (= 前置詞+数+CL 一括)

**#46 もすべての言語が D に一括**で揃っており優秀。

**Proposed:** 指摘というより **賞賛** — #27, #46, #67 の頻度・期間 CL 構造は **全言語で letter が整合**しており、これを **数+CL 一括統合のモデルケース** として #11, #55, #57 の修正の根拠にすべき。

**根拠:** 既存の優秀な統一例を活用。

---

### 10. #93 「many festivals」 — 数量詞 「many/多くの」の分節が「存在動詞 + 数量詞」融合で揺れる 【確実】

**Current (#93):**
- en `E:"many" | F:"festivals"` (= 数量詞 E、名詞 F)
- fr `E:"de nombreux" | F:"festivals"` (同上)
- es_eu `E:"muchos" | F:"festivales"` (同上)
- de `E:"viele" | F:"Feste"` (同上)
- ja `E:"多くの" | F:"祭りが"` (= 同上)
- ko `E:"많은" | F:"축제가"` (= 同上)
- zh `E:"许多" | F:"节日"` (= 同上)
- yue `E:"好多" | F:"節日"` (= 同上)
- vi `E:"nhiều" | F:"lễ hội"` (= 同上)
- **vi_s `E:"có nhiều" | F:"lễ hội"`** (= **存在動詞「có」(有) が E に融合!**)
- **en_au `E:"heaps of" | F:"festivals"`** (= 方言 quantifier)
- **en_sg `E:"many" | F:"festivals" | G:"got"`** (= 存在動詞 `got` が G に独立 — `có` と非対称)
- th `F:"เทศกาล" | E:"มากมาย"` (= **名詞 F が前、数量詞 E が後** — Thai 語順)
- th_n / th_isan `F:"เทศกาล" | E:"หลาย"` (同上)
- hi `E:"कई" | F:"त्योहार"` (= 数量詞 E、名詞 F)
- bn `E:"অনেক" | F:"উৎসব"` (同上)
- my `F:"ပွဲတော်" | E:"များစွာ"` (= 名詞 F、数量詞 E — Burmese 語順 N-Q)
- km `F:"ពិធីបុណ្យ" | E:"ជាច្រើន"` (同上)
- lo `F:"ງານບຸນ" | E:"ຫຼາຍ"` (同上)
- bo `F:"དུས་ཆེན" | E:"མང་པོ"` (同上)

**Problem:** **vi_s `E:"có nhiều"`** は **存在動詞「có」(= 有, exist) を数量詞 `nhiều`(many) と同じ E に融合**している。これは vi `E:"nhiều"` (= 数量詞のみ E) と整合せず、しかも **en_sg `G:"got"`** が同じ意味機能 (existential) を **別 letter G に独立** させているのと対比すると、`có` も独立すべきという主張になる。

**Proposed:**
- vi_s `E:"có nhiều" | F:"lễ hội"` → `G:"có" | E:"nhiều" | F:"lễ hội"` または `E:"nhiều" | F:"có lễ hội"` (= 「có」を F の動詞句側に寄せる)
- en_sg `G:"got"` を維持しつつ、他の存在動詞文 (#36 など) との整合を確認

**根拠:** `feedback_cross_sibling_role_consistency.md` — 兄弟言語 (vi, vi_c, vi_s) で同じ letter の意味機能が揺れるのは禁止。`feedback_impersonal_modal_as_D.md` 「Hay que / Bisogna」は D」のように、**存在動詞も独立 letter** を持つべき。

---

### 11. #36 「many people」 — `Hay/There are/Có` (存在動詞) の分節 letter が言語間で揺れる 【確実】

**Current (#36):**
- en `D:"There are" | A:"many" | B:"people" | C:"at the station"` (= **存在動詞 D**, 数量詞 A, 名詞 B, 場所 C)
- fr `D:"Il y a" | A:"beaucoup de" | B:"personnes" | C:"à la gare"` (= 同上)
- es_eu `D:"Hay" | A:"mucha" | B:"gente" | C:"en la estación"` (= 同上)
- it `D:"Ci sono" | A:"molte" | B:"persone" | C:"alla stazione"` (= 同上)
- de `C:"Am Bahnhof" | D:"gibt es" | A:"viele" | B:"Menschen"` (= 順序違うが letter 同じ)
- pt_eu `D:"Há" | A:"muitas" | B:"pessoas" | C:"na estação"` (= 同上)
- ja `C:"駅には" | A:"たくさんの" | B:"人が" | D:"‌いる"` (= 存在動詞 `いる` を D、ZWNJ 付き — 優秀)
- ko `C:"역에는" | A:"많은" | B:"사람들이" | D:"있다"` (= 同 ja)
- zh `C:"车站" | D:"有" | A:"很多" | B:"人"` (= 同上)
- yue `C:"車站" | D:"有" | A:"好多" | B:"人"` (= 同上)
- vi `D:"Có" | A:"rất nhiều" | B:"người" | C:"ở ga"` (= 存在動詞 D — 優秀)
- vi_c `D:"Có" | A:"nhiều" | B:"người" | C:"ở ga"` (= 同上)
- **th `D:"มี" | B:"คน" | A:"เยอะมาก" | C:"ที่สถานี"`** (= **B と A の順序逆**: 名詞 B が前、数量詞 A が後)
- hi `C:"स्टेशन पर" | A:"बहुत" | B:"लोग" | D:"हैं"` (= 同 ja)
- bn `A:"অনেক" | B:"মানুষ" | C:"স্টেশনে" | D:"আছে"` (= 同上)
- my `C:"ဘူတာရုံမှာ" | B:"လူ" | A:"အများကြီး" | D:"ရှိပါတယ်"` (= B/A 順序逆 — Burmese 語順)
- km `D:"មាន" | B:"មនុស្ស" | A:"ច្រើន" | C:"នៅស្ថានីយ"` (= B/A 順序逆)
- lo `D:"ມີ" | B:"ຄນ" | A:"ເຍອະມາກ" | C:"ທີ່ສະຖານີ"` (= 同上)

**Problem:** #36 は **「many」を A、「people」を B、存在動詞を D** という整合的な体系で、これと #93 「many festivals」を比較すると **#93 では「many」が E、「festivals」が F** で letter が違う。両者は意味機能が同じ (数量詞 + 名詞) なのに **A/B (#36) vs E/F (#93)** の letter 不一致。これは文ごとに letter を割り直す本データの構造上避けられないが、**役割の対応関係 (数量詞 = 修飾子) は同じ** なので、**指摘というより memory rule 拡張提案**: 数量詞の letter を文間でなるべく揃えるルールを追加すべき。

**Proposed:** 当面は letter 不一致を許容 (本データ仕様)、ただし **「数量詞 (many/some/a lot of) は必ず名詞 letter の直前 letter に出す」** という新ルールを `feedback_segment_splitting.md` に追記提案。

**根拠:** `feedback_cross_sibling_role_consistency.md` の拡張。

---

### 12. #70 「9 PM」 — 時刻 + AM/PM の分節が言語間で完全に分裂 【確実】

**Current (#70):**
- en `E:"9" | F:"PM"` (= 数 E、PM F の **二分節**)
- fr `E:"21" | F:"h"` (= 24時制 + 略記 — 同 letter 構造)
- it `E|F:"21"` (= **E と F が同じ語に融合 (`E|F`)** — 24時制で AM/PM 不要)
- pt_eu `E|F:"21h"` (同上)
- es_eu `E:"9" | F:"de la noche"` (= 数 E、時間帯句 F)
- de `E:"21" | F:"Uhr"` (= 数 E、CL F)
- ja `F:"午後" | E:"9時" | D:"に"` (= **時間帯 F が前、数+CL E が後**)
- ko `F:"오후" | E:"9시" | D:"‌에"` (同 ja)
- zh `F:"下午" | E:"9点"` (= 時間帯 F、数+CL E)
- yue `F:"下午" | E:"9點"` (同上)
- vi `D:"lúc" | E:"9" | F:"giờ tối"` (= 前置詞 D、数 E、CL+時間帯 F)
- th `D:"เวลา" | E:"สาม" | F:"ทุ่ม"` (= 前置詞 D、数 E、夜時刻 CL F = `ทุ่ม` (19-23時帯))
- th_n / th_isan `E:"สาม" | F:"ทุ่ม"` (= D 欠落)
- hi `F:"रात" | E:"9" | D:"बजे"` (= 時間帯 F、数 E、CL+ 後置詞 D)
- **bn `F:"রাত" | B|D|E:"৯টায়"`** (= **B/D/E が同じ語に 3 重融合!**)
- my `F:"ည" | E:"ကိုးနာရီ"` (= 時間帯 F、数+CL E)
- km `D:"នៅ" | E:"ម៉ោង៩" | F:"យប់"` (= 前置詞 D、数+CL E、時間帯 F)
- lo `D:"ເວລາ" | E:"3" | F:"ທຸ່ມ"` (= 同 th)
- ta `F:"இரவு" | D|E:"9 மணிக்கு" | C:"மூடும்"` (= **D/E が同じ語に融合**)
- te `F:"రాత్రి" | D|E:"9 గంటలకు" | C:"మూసివేయబడుతుంది"` (= 同上)

**Problem:** bn の `B|D|E:"৯টায়"` (= **3 letter が同じ語**) は明確な異常分節。it/pt の `E|F:"21"` (2 letter 融合) はまだ 24時制の構造上説明できるが、**bn は 4 letter 構造のうち 3 letter が同一語**で、これは display 上 letter 色分けが破綻し、テキスト copy 時に同じ語が 3 度繰り返される。

**Proposed:**
- bn: `B|D|E:"৯টায়"` → `E:"৯টা" | D:"য়"` 程度に分割するか、または `E:"৯টায়"` 単独で B/D を欠落
- ta `D|E:"9 மணிக்கு"` → `E:"9 மணி" | D:"க்கு"` (CL と後置詞 -க்கு を分離)
- te `D|E:"9 గంటలకు"` → `E:"9 గంటలు" | D:"కు"` (同上)
- it `E|F:"21"` → `E:"21"` のみ (F 欠落として処理) または 維持で OK (24時制で AM/PM 区別なし)

**根拠:** `feedback_cross_sibling_role_consistency.md` の **「役割文字重複」原則の延長**。3 文字を 1 語に融合するのは表示不能 (3 色で同じ語を塗る?)。

---

### 13. #74 「30 minutes」 — 数 + 時間 CL + 期間助詞の分節が言語間で揺れる 【蓋然】

**Current (#74):**
- en `B:"for 30 minutes"` (= 前置詞 + 数 + CL 一括 B)
- fr `B:"depuis 30 minutes"` (同上)
- de `B:"seit 30 Minuten"` (同上)
- ja `B:"30分間"` (= 数 + CL + 期間助詞 `間` 一括)
- ko `B:"30분 동안"` (= 数 + CL + 期間助詞 `동안` を空白入れて B)
- zh `B:"30分钟"` (= 数 + CL 一括)
- yue `B:"30分鐘"` (同上)
- vi `B:"30 phút rồi"` (= 数 + CL + アスペクト助詞 `rồi`(已) を B に融合)
- th `B:"30 นาทีแล้ว"` (= 数 + CL + アスペクト `แล้ว`(已) を B に融合)
- hi `B:"30 मिनट से"` (= 数 + CL + 後置詞 `से`)
- bn `B:"৩০ মিনিট"` (= 数 + CL)
- my `B:"မိနစ်သုံးဆယ်"` (= CL + 数 — Burmese 語順)
- km `B:"អស់៣០នាទី"` (= 前置詞 + 数 + CL 一括)
- bo `B:"སྐར་མ་སུམ་ཅུ་"` (= CL + 数)

**Problem:** #74 では **全言語で「期間 (数+CL+助詞)」を B に一括統合**しており、これは memory rule `feedback_number_noun_merge_into_B.md` の最適例。**だが vi/th では「rồi/แล้ว」(完了アスペクト)** が B に融合されており、これは **TAM マーカー**として独立すべきというのが #43 (TAM レビュー) の指摘事項 1〜4 と整合しない。

**Proposed:**
- vi: `B:"30 phút rồi"` → `B:"30 phút" | H:"rồi"` (= 完了アスペクト独立)
- th: `B:"30 นาทีแล้ว"` → `B:"30 นาที" | H:"แล้ว"` (同上)

**根拠:** TAM レビュー #43 の指摘 1〜4 (zh 了, ja た, ko 었, tr -dı の独立分節) と並行。vi `rồi`, th `แล้ว` も同じ完了粒子で独立分節が正しい。

---

### 14. #59 「every 15 minutes」 — 頻度副詞 `every X` の分節が言語間で揺れる 【蓋然】

**Current (#59):**
- en `B:"every 15 minutes"` (= 一括)
- fr `B:"toutes les 15 minutes"` (同上)
- de `B:"alle 15 Minuten"` (同上)
- ja `B:"15分おきに"` (= 数+CL+`おきに` 一括)
- ko `B:"15분마다"` (= 数+CL+`마다` 一括)
- zh `B:"每15分钟"` (= `每` + 数+CL 一括)
- vi `B:"mỗi 15 phút"` (= `mỗi` + 数+CL)
- th `B:"ทุก 15 นาที"` (同上)
- hi `B:"हर 15 मिनट में"` (= `हर` + 数+CL + 後置詞)
- bn `B:"প্রতি ১৫ মিনিটে"` (同上)
- my `B:"မိနစ် ၁၅ တိုင်း"` (= CL + 数 + `တိုင်း`)
- km `B:"រៀងរាល់១៥នាទី"` (= `រៀងរាល់` + 数+CL)
- bo `B:"སྐར་མ་བཅོ་ལྔ་རེར་"` (= 数+CL+`རེར་`)

**Problem:** #59 は **全言語で B 一括**という美しい統一例。**指摘というより参照モデル** として #11 (a new book) や #55 (2 cups of coffee) を一括化する根拠にすべき。

**Proposed:** 指摘なし — 賞賛事項。

**根拠:** memory rule `feedback_number_noun_merge_into_B.md` の理想形。

---

### 15. #98 「this dish」 — 指示詞 + 名詞の分節が ja/ko で D|E 分離、vi/km で D|E 順序逆 【蓋然】

**Current (#98) (指示詞は数量詞の比較対照群):**
- en `D:"this" | E:"dish"` (= 指示詞 D、名詞 E)
- fr `D:"ce" | E:"plat"` (同上)
- es_eu `D:"este" | E:"plato"` (同上)
- ja `D:"この" | E:"料理を"` (= 指示詞 D、名詞+助詞 E)
- ko `D:"이" | E:"요리를"` (= 同上)
- zh `D:"这" | E:"道菜"` (= 指示詞 D、CL+名詞 E)
- yue `D:"呢" | E:"道菜"` (= 同上)
- vi `D:"món" | E:"này"` (= **D に名詞 `món`(物)、E に指示詞 `này`(此)** — **語順 N-Dem で D/E 役割が完全逆転**)
- vi_c `D:"món" | E:"‌ni"` (= 同上)
- th `E:"เมนู" | D:"นี้"` (= 名詞 E、指示詞 D — Thai 標準語順)
- km `E:"មុខម្ហូប" | D:"នេះ"` (= 同 th)
- lo `E:"ອາຫານ" | D:"ນີ້"` (同上)
- id `E:"hidangan" | D:"ini"` (同上)
- bn `D:"এই" | E:"খাবারটি"` (= 指示詞 D、名詞 E)
- hi `D:"यह" | E:"व्यंजन"` (同上)
- my `D:"ဒီ" | E:"ဟင်းကို"` (同上)
- ta `D:"இந்த" | E:"உணவை"` (同上)

**Problem:** **vi `D:"món" | E:"này"`** で D に名詞、E に指示詞が割り当てられているのは、en/ja/zh の **D=指示詞、E=名詞** と **letter 役割が完全に逆転**している。同じ N-Dem 語順言語である th/km/lo/id は **E が名詞、D が指示詞** で letter は en と一貫 (順序だけ逆) なのに対し、vi だけ **letter も逆転**。

**Proposed:**
- vi `D:"món" | E:"này"` → `E:"món" | D:"này"` (= letter 入れ替え、th/km と整合)
- vi_c `D:"món" | E:"‌ni"` → `E:"món" | D:"‌ni"` (同上)

**根拠:** `feedback_cross_sibling_role_consistency.md` 「役割文字の異 letter 化を兄弟言語で揃える」。vi は語順以外の点で他の SEA 言語と整合すべき。

---

### 16. #25 vs #11 vs #1 — 「a + N」の分節が文によって完全にバラバラ 【確実】(横断指摘)

**Current (比較):**
- #1 en `D:"a suit"` (= a+N 一括 D), `I:"a shop"` (= a+N 一括 I)
- #11 en `D:"a new" | E:"book"` (= a+形容詞 D、名詞 E 分離)
- #13 en `F:"a glass of" | C:"water"` (= a+CL F、名詞 C 分離)
- #17 en `C:"a meeting"` (= a+N 一括 C)
- #22 en `B:"a new language"` (= 推定: 一括 B)
- #25 en `C:"a" | F:"big" | D:"company"` (= a 単独 C、形容詞 F、名詞 D の **3 分節**)
- #56 en `B:"at 8 o'clock"` (= 一括)
- #59 en `B:"every 15 minutes"` (= 一括)
- #67 en `E:"a week"` (= a+N 一括 E)
- #70 en `E:"9" | F:"PM"` (= 数 E、時間帯 F 分離)
- #98 en `D:"this" | E:"dish"` (= 指示詞 + N 分離)

**Problem:** en 内部だけでも「a + 名詞」の扱いが **5 パターン**:
1. **一括** (#1 `D:"a suit"`, #17 `C:"a meeting"`, #67 `E:"a week"`)
2. **a + 形容詞** vs 名詞 (#11 `D:"a new" | E:"book"`)
3. **a + CL** vs 名詞 (#13 `F:"a glass of" | C:"water"`)
4. **a 単独** vs 形容詞 vs 名詞 (#25 `C:"a" | F:"big" | D:"company"`)
5. **数詞のみ** vs 時間帯 (#70 `E:"9" | F:"PM"`)

この **en 内部の不整合**が他言語の整合性を破壊している (zh/vi/ja などが en の不揃いパターンに各々合わせようとして混乱)。

**Proposed:** **en 側を「a + 名詞」は必ず B/D/E のいずれか 1 letter に一括統合** という統一ルールを定立。具体的には:
- #25 `C:"a" | F:"big" | D:"company"` → `D:"a big company"` 一括 または `F:"a big" | D:"company"` (形容詞 + a を F に、名詞のみ D)
- #11 `D:"a new" | E:"book"` → `D:"a new book"` 一括
- #13 `F:"a glass of" | C:"water"` → 維持 (容器類別詞は特別、対象が水 vs 容器で意味が違う)

**根拠:** **`feedback_number_noun_merge_into_B.md`** の原則は en 自身に最も鈍感に適用すべき。en の不整合が世界各語の整合性の上限を決めている。

---

### 17. #17 sg 方言 — `F:"this" | G:"afternoon"` で時間表現が **指示詞 + 時間帯** に分離されている 【確実】

**Current (#17):**
- en `F:"this" | G:"afternoon"` (= 指示詞 F、時間帯 G の 2 分節)
- vi `G:"chiều" | F:"nay"` (= 時間帯 G、指示詞 F — 順序逆だが letter 同じ)
- ja `F:"今日の" | G:"午後"` (= 指示詞+所有 F、時間帯 G)
- ko `F:"오늘" | G:"오후"` (同上)
- zh `F:"今天" | G:"下午"` (同上)
- hi `F:"आज" | G:"दोपहर"` (同上)
- bn `F:"আজ" | G:"বিকেলে"` (同上)
- de `F:"heute" | G:"Nachmittag"` (同上)
- en_sg `F:"this" | G:"afternoon"` (= 同 en)
- **id `G:"siang" | F:"ini"`** (= **G に時間帯 `siang`(昼)、F に指示詞 `ini`(此)** — 順序逆、letter は en と整合)
- **th `G:"บ่าย" | F:"นี้"`** (= 同 id)

**Problem:** #17 は **全言語で F=指示詞/今日, G=時間帯/午後 の 2 分節が確立**している優秀な統一例。**指摘なし** — むしろ #56 「tonight」, #70 「9 PM」, #93 「in summer」の **時間帯表現**も同様に **指示詞 + 時間帯 の 2 分節構造に統一**できないか検討すべき。

**Proposed:**
- #56 en `C:"tonight"` (= 一括) → `F:"to-" | G:"-night"` 程度に分割? — 形態素として分離可能だが過剰分節になるので **現状維持** が妥当
- #70 en `F:"PM"` (= 単独) → 「PM」は時間帯マーカーなので **G 系列ではなく独立 F** で OK

**根拠:** 指摘というより **#17 の 2 分節時間構造の優秀な統一**を他文に拡張する余地の探索。

---

### 18. #93 「in summer」 — 季節句の分節が D 一括 vs `H + I` 分離で揺れる 【蓋然】

**Current (#93):**
- en `D:"in summer"` (= 前置詞 + 季節 一括 D)
- fr `D:"en été"` (同上)
- es_eu `D:"en verano"` (同上)
- de `D:"im Sommer"` (同上)
- ja `D:"夏に"` (= 季節 + 後置詞 一括)
- ko `D:"여름에"` (同上)
- zh `D:"夏天"` (= 季節のみ、前置詞ゼロ)
- yue `D:"夏天"` (同上)
- vi `D:"vào mùa hè"` (= 前置詞+季節 一括)
- vi_c `D:"mùa hè"` (= 前置詞省略)
- vi_s `D:"mùa hè"` (同上)
- th `D:"ในช่วงฤดูร้อน"` (= 一括)
- th_n / th_isan `D:"ในฤดูร้อน"` (同上)
- hi `D:"गर्मियों में"` (= 季節+後置詞)
- bn `D:"গ্রীষ্মে"` (= 同上)
- my `D:"နွေရာသီ"` (= 季節のみ)
- km `D:"នៅរដូវក្ដៅ"` (= 前置詞+季節 一括)
- lo `D:"ໃນລະດູຮ້ອນ"` (同上)
- bo `D:"དབྱར་ཁར"` (= 同上)

**Problem:** #93 は **全言語で D 一括** という美しい統一だが、vi/vi_c/vi_s 内部で `vào` (前置詞) の有無で揺れている。これは vi 方言差として許容範囲だが、`feedback_split_segments_like_reference.md` を厳格適用すれば全 vi が `D:"vào mùa hè"` に統一すべき。

**Proposed:**
- vi_c `D:"mùa hè"` → `D:"vào mùa hè"` (vi 標準と整合)
- vi_s `D:"mùa hè"` → `D:"vào mùa hè"` (同上)

**根拠:** `feedback_split_segments_like_reference.md` + `feedback_fix_all_variants_together.md` — vi 方言は標準 vi の前置詞構造を維持すべき。

---

### 19. #55 vi_s 「mỗi ngày」 — 数量副詞「毎」の letter 配置が他兄弟と整合せず 【蓋然】

**Current (#55):**
- vi `D:"mỗi ngày"` (= 「毎日」を D)
- vi_c `D:"mỗi ngày"` (同上)
- **vi_s `D:"Mỗi ngày"`** (= **D だが文頭に位置**、`Mỗi` 大文字化)
- ja `D:"毎日"` (= 同)
- zh `D:"每天"` (= 同)

**Problem:** vi_s `D:"Mỗi ngày"` で **D が文頭に来ている**ため `Mỗi` が大文字化されているが、これは **語順優先** で letter は維持されている。**指摘というより観察**: 同一 letter D が文頭に出るかどうかで大文字小文字が変わる現象が、表示上一貫しているか確認すべき。

**Proposed:** 指摘なし (現状で letter 機能上問題なし)。

**根拠:** -

---

### 20. #67 「a week」 — 期間 NP の分節が「数+CL」と同 letter で揃っているか確認 【確実】

**Current (#67):**
- en `C:"three times" | E:"a week"` (= 頻度 C、期間 E)
- vi `C:"ba lần" | E:"một tuần"` (同上)
- ja `C:"3回" | E:"週に"` (= ja は `週に` で `1` 数詞ゼロ — 自然)
- ko `C:"세 번" | E:"일주일에"` (= 「일주일」(一週間) で **数詞 1 を含む**)
- zh `C:"三次" | E:"每周"` (= 「每周」(毎週) で `1` でなく `每`)
- bn `C:"তিনবার" | E:"সপ্তাহে"` (= 数詞ゼロ)
- th `C:"สามครั้ง" | E:"สัปดาห์ละ"` (= 数詞ゼロ)
- km `C:"បីដង" | E:"ក្នុងមួយសប្ដាហ៍"` (= 「មួយ」(1) を含む)
- ta `C:"மூன்று முறை" | E:"வாரம்"` (= 数詞ゼロ)

**Problem:** en `E:"a week"` の "a" は **不定冠詞** ではなく **頻度分配** (per/each) の意味なので、これを **「一週間に」と訳す言語 (ko, km, vi)** と **「毎週」と訳す言語 (zh, ja)** と **「週 (per)」と訳す言語 (ta, th, bn)** の 3 系統に分かれている。これは語彙選択の問題で memory rule 直接違反ではないが、**memory `feedback_number_noun_merge_into_B.md` の趣旨** (= 数 + 名詞は同一 letter) は全文で守られている (E に一括)。

**Proposed:** 指摘なし — letter は全文で E に揃っており優秀。

**根拠:** 既存統一例として #67 を **モデルケース** に維持。

---

### 21. #56 zh/yue `C:"今晚"` と #70 zh/yue 時間帯 F の不一致 【確実】

**Current 比較:**
- #56 zh `C:"今晚"` (= 「今夜」を C)
- #70 zh `F:"下午"` (= 「午後」を F)
- #17 zh `F:"今天" | G:"下午"` (= 「今日」F + 「午後」G 2分節)
- #93 zh `D:"夏天"` (= 「夏」を D)

**Problem:** zh の時間帯表現が **#17 (F+G)、#56 (C)、#70 (F)、#93 (D)** で letter が完全にバラバラ。これは「文ごとに letter を割り直す」本データ仕様上避けられないが、**「時間帯名詞 (今晚/下午/夏)」は常に同 letter で扱う**という統一ルールが望ましい。

**Proposed:**
- 時間帯名詞 = **F に統一** (#17, #70 と整合): #56 `C:"今晚"` → `F:"今晚"`, #93 `D:"夏天"` → `F:"夏天"`
- ただし他 letter との衝突がないか要確認 (#56 で F が空いていれば即対応可能)

**根拠:** `feedback_cross_sibling_role_consistency.md` 拡張案。

---

### 22. #46 「one hour / 一時間 / 한 시간」 — 数詞「1」の独立分節が揺れる 【確実】

**Current (#46):**
- en `D:"for an hour"` (= 前置詞 + 数 + CL 一括 D, `an` = 1)
- fr `D:"pendant une heure"` (同上, `une` = 1)
- es_eu `D:"durante una hora"` (同上)
- it `D:"per un'ora"` (= `un'ora` 一括)
- de `D:"eine Stunde"` (= 数 + CL)
- ja `D:"一時間"` (= 同)
- ko `D:"한 시간"` (= 数 + CL に空白)
- zh `D:"一个小时"` (= 数 + CL + 小辞)
- vi `D:"trong một tiếng"` (= 前置詞 + 数 + CL)
- th `D:"หนึ่งชั่วโมง"` (= 数 + CL)
- hi `D:"एक घंटे"` (= 同)
- bn `D:"এক ঘণ্টা"` (= 同)
- km `D:"អស់មួយម៉ោង"` (= 前置詞 + 数 + CL)
- lo `D:"ຫນຶ່ງຊັ່ວໂມງ"` (= 数 + CL)
- my `D:"တစ်နာရီ"` (= 同)

**Problem:** #46 は **全 25+ 言語で「one hour / 一時間」を D に一括統合** という memory rule 完全準拠の優秀例。`feedback_number_noun_merge_into_B.md` の最良モデル。

**Proposed:** 指摘なし — **賞賛事項** として #11, #55, #57 の修正基準に。

**根拠:** memory rule 完全準拠の参照モデル。

---

### 23. #11 「a new book」 zh_db `B:"早饭"` 系統 — 数詞「1」の文間揺れ 【蓋然】

**Current (#11) — 数詞「1」の zh 内部一貫性:**
- zh `D:"一本" | E:"新书"` (= 数+CL `一本` を D)
- yue `D:"一本" | E:"新書"` (= 同)
- en_sg `D:"one new" | E:"book"` (= 「one」を D に組み込み)

**Comparison #25 (a big company):**
- zh `C:"一家" | F:"大" | D:"公司"` (= 数+CL `一家` を C — letter が違う!)

**Problem:** zh で **「一本/一家」など数 + CL が D (#11) と C (#25) で letter 不一致**。これは「不定冠詞役割の数詞」と「明示的数量の数詞」を区別したいなら正当だが、現状区別なし。

**Proposed:** zh #25 `C:"一家"` を `D:"一家"` に変更して #11 と整合させる、または #25 の en `C:"a"` の C 位置に合わせて #11 zh も `C:"一本" | D|E:"新书"` 程度に再配置。

**根拠:** `feedback_cross_sibling_role_consistency.md`。

---

### 24. #36 en_in / en_sg — 数量詞「so many」の単独 letter A への押し込み 【蓋然】

**Current (#36):**
- en `A:"many"` (= 数量詞のみ A)
- en_in `A:"so many"` (= 強調副詞 `so` を A に融合)
- en_sg `A:"so many"` (同上)
- en_au `A:"heaps of"` (= 方言 quantifier)

**Problem:** en_in/sg/au で **強調副詞や方言数量詞句**を A に融合しているのは方言レジスタとして妥当。**指摘ではなく観察** — `heaps of` (en_au) は単一 letter A だが、本来 `heaps` (= 数量詞) + `of` (= 前置詞) に分解可能。`a lot of` (en) の場合は通常 `A:"a lot of"` 一括が慣行。

**Proposed:** 指摘なし — 現状で OK。

**根拠:** -

---

### 25. 横断指摘 — 「数量詞 + 名詞」と「数 + CL + 名詞」の letter 役割を memory rule で明示すべき 【要検討】

**Problem:** `feedback_number_noun_merge_into_B.md` は **「数 + 名詞は B に統合」** とのみ規定しているが、本データには:
- **(a) 数 + 名詞** (#11 `a new book`, #67 `a week`)
- **(b) 数 + CL + 名詞** (#13 `a glass of water`, #55 `2 cups of coffee`)
- **(c) 数量詞 + 名詞** (#36 `many people`, #93 `many festivals`)
- **(d) 数 + 時刻 CL + 時間帯** (#17 `at 3 o'clock this afternoon`, #56 `at 8 o'clock tonight`, #70 `9 PM`)
- **(e) 数 + 期間 CL** (#46 `for an hour`, #74 `for 30 minutes`)
- **(f) 不定冠詞 + 形容詞 + 名詞** (#25 `a big company`)

の 6 種類が混在しており、どれが「B 統合」対象かが曖昧。

**Proposed:** memory rule を以下のように拡張:
1. **(a), (e)** = B/D に一括統合 (現状 #46, #74 で実現済み — 維持)
2. **(b), (c), (f)** = 数 (or 数量詞 or 冠詞) を **独立 letter** に分節し、名詞は別 letter (現状 #11, #25, #36, #93 で実現済み — 維持)
3. **(d)** = 前置詞 + 数 + 時刻 CL は **一括** (現状 #56 で実現済み)、時間帯は **別 letter** (現状 #17, #70 で実現)

または逆に **全てを一括統合** (= memory rule 厳格適用) すれば、現状の混乱が解消される。**推奨は後者** (= 一括統合) で、これにより類別詞言語の負担も大幅軽減。

**根拠:** memory rule の **現運用が rule 自身と整合していない** ことを示す。要検討事項として review 委員会で決定すべき。

---

## まとめ

**ファイル:** `/home/jounlai/langmap/langmap_reviews/45_open.md`
**指摘件数:** 25 件 (確実 13, 蓋然 8, 要検討 1, 賞賛/観察 3)
**主たる分節欠陥 (dominant defect):** **同一言語内で「数 + (CL) + 名詞」の分節パターンが文ごとに 1〜3 分節に揺れている** (とくに zh: #11 `D:"一本" | E:"新书"` 二分節 / #55 `E:"两" | F:"杯" | B:"咖啡"` 三分節 / #57 `B:"三种语言"` 一括 の **3 通り並存**)、加えて **#13 で容器類別詞「杯/glass/cốc/ly」の letter 役割 (容器を F、液体を C) が km/my で完全に逆転** している深刻な構造ミス、および **#70 bn `B|D|E:"৯টায়"` のような 3 letter 単語融合**。`feedback_number_noun_merge_into_B.md` を厳格適用すれば、全文で **数 + CL + 名詞 = 単一 letter 一括** が理想形 (現実例: #46 `D:"一時間"`, #74 `B:"30分間"`, #59 `B:"15分おきに"`)。この一括方針を全 16 文に拡張するのが最小コストの整合化。

---

## Dev response — round 1 (2026-06-04)

担当: dev side。レビュアー @cl_petra のご指摘 25 件のうち **確実 (definite)** 系統を中心に、データ整合 + 機械的妥当性が確認できる修正のみを採用し、`/tmp/lm_edits_45.json` に **9 件のアトミック edits** を準備しました (applier dry-validation で 9/9 PASS)。

### 採用 (Accepted) — 9 edits

1. **#13 km** [指摘1] — `F:"ទឹកមួយ" | C:"កែវ"` の容器類別詞 letter 分裂を **単一の `F|C:"ទឹកមួយកែវ"` セル** に融合 (表示完全保持)。en/zh/vi 大勢の「容器類別詞は noun と一体」原則に整合化。op:replace
2. **#13 my** [指摘1] — `F:"ရေ" | C:"တစ်ခွက်"` の逆方向 letter 分裂を **`F|C:"ရေတစ်ခွက်"`** に融合 (表示完全保持)。km と同じ理屈で、role 反転を解消。op:replace
3. **#57 km** [指摘8] — `B:"ភាសា" | C:"បី ស្ទាត់"` の **数詞 បី(3) と副詞 ស្ទាត់(fluently) が C に同居**していたバグを `B:"ភាសាបី" | C:"ស្ទាត់"` に修正 (number+noun を B に統合 — `feedback_number_noun_merge_into_B.md` 原則完全準拠)。`allowTextChange:true` (បី と ស្ទាត់ 間のスペース除去のみ)。op:replace
4. **#70 bn** [指摘12] — `B|D|E:"৯টায়"` の **3 letter 単一語融合** (表示破綻リスク) を `E:"৯টায়"` 単独に簡素化 (表示完全保持)。bn では 9 PM の前置詞・存在動詞は overt 形態素を持たないため B/D 同時付与は不正当。op:retag
5. **#70 ta** [指摘12] — `D|E:"9 மணிக்கு"` の 2 letter 融合を `E` 単独に。locative -க்கு は CL に融合した接辞であって独立 D ではない。op:retag
6. **#70 te** [指摘12] — ta と平行: `D|E:"9 గంటలకు"` → `E` 単独。op:retag
7. **#98 vi** [指摘15] — `D:"món" | E:"này"` の **D/E 役割逆転** を `E:"món" | D:"này"` に入れ替え、th/km/lo/id の SEA 兄弟 (E=名詞, D=指示詞) と letter 整合化。op:replace
8. **#98 vi_c** [指摘15] — vi と同パターン: `E:"món" | D:"‌ni"` に修正 (`feedback_fix_all_variants_together.md`)。op:replace
9. **#98 vi_s** [指摘15] — vi と同: `E:"món" | D:"nầy"` に修正。op:replace

### 不採用 / 保留 (Deferred to later rounds)

- **#13 th/th_n/th_isan/lo/bo の type 整理** [指摘1] — th の `F:"น้ำ หนึ่งแก้ว"` 中スペース問題、lo の C/F swap、bo の `ཆུ་ཕོར་གང` fused 形などは **テキスト改変リスク高**。round 2 で reviewer 再諮問の上で対応予定。
- **#13 ja/ko の C/F swap** [指摘1] — reviewer 案 line 57 が「ja: `F:"お水を" | C:"一杯"`」と en (`F:数CL | C:noun`) と逆方向の swap を提示しており、意図解釈に揺れ。reviewer の確認後に round 2 で対応。
- **#17 hi の D:"बजे" 重複** [指摘5] — **データ実測では D:"बजे" 単独セグメントは存在せず**、`E:"3 बजे"` のみ。reviewer の現認誤りと判断、edit 不要。
- **#11 zh/yue/vi の D:"一本" | E:"新书"** [指摘2] — reviewer 提案 (a) は en 側修正 (`D:"a new"` → `D:"a"` + `E:"new book"`) を要するため **en 修正は round 1 範囲外** (タスク指示: 「en の `a + N` 変動は upstream、本ラウンド対象外」)。round 2 で en 構造方針決定後に対応。
- **#25 zh/bn の C:"一家" / B:"একটি"** [指摘3] — 同じく en `C:"a"` の独立分節と非冠詞言語の整合問題で、en 修正前提なので保留。
- **#1 vi の bộ vest / một cửa hàng 不対称** [指摘4] — `một` 補完はテキスト追加 (重大改変)、reviewer 再確認後。
- **#56 vs #17 の前置詞+時刻 分節揺れ** [指摘6] — en 自身の構造選択 (#56 を 2 分節化 vs #17 を 1 分節化) は round 2 方針決定マター。
- **#55 zh #57 zh の 1/2/3 分節揺れ** [指摘7] — `E|F:"两杯"` 化など複数文に跨る大規模再構成。reviewer の最終方針確認後に一括対応。
- **#74 vi/th の TAM 粒子 `rồi`/`แล้ว` 独立分節** [指摘13] — レビュー #43 (TAM レビュー) 領域と重複。#43 の決定に従う。
- **#93 vi_s の `có nhiều` 中の存在動詞融合** [指摘10] — `có` を G letter (現状 "are held") に分離するには palette 衝突あり、別 letter 新設の検討必要 (要 #93 palette 拡張)。round 2。
- **#21 zh 時間帯 letter 統一** [指摘21] — 4 文跨る大規模 retag で要方針確認。
- **#23 zh の #11/#25 数+CL letter 不一致 (D vs C)** [指摘23] — 上記 #11/#25 修正と一体で扱う。
- **#36 数量詞 letter 拡張 / #25 文の letter 統一** [指摘11, 25] — memory rule 拡張提案。reviewer 委員会決定マター、edit 対象外。
- 観察・賞賛事項 (#27, #46, #59, #67, #74 一部, #17 sg 2分節, #93 季節句 D, #36 強調副詞, #55 vi_s 文頭大文字) — edit 不要。

### 適用方法

```
node .wf_langmap_apply.mjs /tmp/lm_edits_45.json
```

dry-validation (data.js 非破壊) で 9/9 PASS 確認済。表示テキスト保持・palette・隣接 same role-letter 全てクリア。

### 終結勧告

**partial-close** を提案: 上記 9 edits を本ラウンドで apply 後、保留 14 件のうち **en 構造方針 (a + N 一括 vs 分散)** および **同一言語内の 数+CL 分節パターン統一 (1/2/3 分節)** を reviewer 側で round 2 として決定いただきたい。それらは横断指摘 (指摘 16, 25) として **memory rule 改訂** を要するレベルで、単一 edit JSON では収束しません。

