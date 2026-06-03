# LangMap データレビュー #84 — 命令法 / 依頼表現の形態論 (Imperative Mood + Request Structure cross-cutter)

## レビュアー自己紹介 (ペルソナ)

**Annika Bergström-Adesina (@imperative_typology)** — Stockholm University 言語学部で *Imperatives and Commands: A Cross-Linguistic Survey of Politeness Inversion* で博士号取得後、Max Planck Institute for Evolutionary Anthropology (Leipzig) の Typology Department で **WALS chapter 71-72 (Imperative/Hortative)** の改訂作業に参加。Aikhenvald *Imperatives and Commands* (OUP 2010) と König & Siemund "Speech Act Distinctions in Grammar" (Shopen ed. 2007, Vol. I, Ch. 4) を常用典拠とし、Bantu (sw/zu/xh/sn/ln) の `-e` final-vowel imperative、Semitic (ar/he/am) の Form-V/D-stem imperative、Khmer/Thai/Lao の **clause-initial請う動詞 (សូម / กรุณา / โปรด / ขอ) + final particle**、Japonic の **て + ください/賜へ/くだされ** ladder、Koreanic の **-아/어/-주세요/-주십시오** ladder、Indo-Aryan (hi/gu/pa/ne) の `-iye/-ें` honorific imperative、Mongolic の `-аарай / -үү` softener、Tibeto-Burman (bo/my) の honorific request verb (གསུང་རོགས/ပါ)、Vietnamese の **xin / hãy / làm ơn / phiền + final ạ**、Polynesian (mi/sm/haw) の politeness modal、constructed languages (eo Bonvolu / jbo .e'o / tok o- / tlh prefix yI-) の politeness particle までを横断する **命令・依頼類型論**専門。本ラウンドは先行レビューが **T-V 二人称代名詞 (#46)** と **敬語 (Keigo) MORPHOLOGY (#81)** と **語彙レジスター (#38, #54-#59)** には踏み込んだが、**命令法そのもの (imperative verbal morphology, request strategy, politeness particle 段階)** には未踏査である点を踏まえ、imperative mood と请求 register の交差点を 100 文全件で精査した。

## 検証範囲

- **依頼/命令を含む 6 文** (#13 give-water / #24 show-menu / #28 polite-recommend question / #34 speak-slowly / #49 tell-the-way / #96 turn-right) × 全 200+ 言語変種における **命令動詞形態 (imperative verbal inflection)** の整合性
- **politeness particle/接辞**: en *please*, ja ください, ko 주세요, zh 请, ar من فضلك / لو سمحت, th กรุณา/ครับ-ค่ะ, vi xin / hãy / làm ơn / ạ, hi कृपया / -ं/-िये, sw tafadhali / -e suffix
- **modal-fronted polite question** (Could you...?): en *Could/Can you...?*, fr *Pourriez-vous...?*, de *Könnten Sie...?*, it *Potrebbe...?*, ar `هل يمكنك`, fa `می‌توانید`, mn `чадах уу`
- **clause-final 疑問/依頼 particle**: vi *không (ạ)*, th *ไหม*, mn *үү/уу*, ja か, ko 요, zh 吗, ms *-kah*, tl *ba*, sa *किम्*
- **命令法と直説法の混同 (imperative ↔ indicative confusion)**: 平叙形を命令文として誤用、または非命令形が原文の命令文を翻訳しているケース

`#46` (T-V) / `#81` (keigo morphology) / `#54-#59` (Mandarinism vocabulary) で処理済みの **二人称代名詞・敬語動詞交代・語彙レジスター** は本ラウンドで重複指摘しない。本ラウンドは「命令形そのもの」「politeness particle の有無」「clause-final 助詞の正確性」「modal-fronted polite request の動詞活用」「命令⇔指示⇔依頼⇔疑問の register 混同」を新規 actionable として摘出する。

## 指摘事項 (Issues found)

### 1. #34 ar — `B:أكثر D:ببطء` の語順反転で「より遅く」を非標準分解、加えて C:`تحدث` は男性単数指示 【蓋然】
**Current:** A:من فضلك C:تحدث B:أكثر D:ببطء
**Problem:** アラビア語 (MSA) で「もっとゆっくり話してください」 は **`تَكَلَّمْ بِبُطءٍ أَكْثَر`** (Form V imperative + 副詞句 `بِبُطءٍ` + 比較級 `أَكْثَر`) が標準。現在の `أكثر ببطء` (more slowly) は逐語訳的で、Arabic syntax として **副詞句の前に比較級** を置く形は不自然(Ryding 2005 *A Reference Grammar of Modern Standard Arabic* §10.4.2)。また動詞 `تَحَدَّثَ` (Form V *to talk*) の imperative `تَحَدَّثْ` は使用可能だが、より自然なのは `تَكَلَّمْ` (Form V from k-l-m)。
**Proposed fix:** 順序入替 D:`ببطء` B:`أكثر`(D を C 直後に移動)。`allowTextChange: false` (text 維持で順序のみ調整可能)。確信度【蓋然】(Arabic comparative adverb word-order は variation あり)。

### 2. #34 ar_eg — `D:slowly` セグメント完全欠落、`B:بشوية` は "a little" のみ 【確実】
**Current:** A:لو سمحت C:اتكلم B:بشوية
**Problem:** 原文「もっとゆっくり話してください」は **D=slowly (manner adverb)** が文の核要素(`_omission_guidelines.md` A.4 に明記)。エジプト方言で「ゆっくり」は **`بهدوء` (bi-hudu')** または **`على مهلك` (ʿalā mahlak)**。現状「اتكلم بشوية」 は "Talk a little" で、原文の "Speak more slowly" の **slowly** が完全欠落、 "more" (`أكثر` / `كمان`) も不在。同データ #34 ar は `B:أكثر D:ببطء` と quantifier+manner-adverb 両方備えるのに、ar_eg のみ片方欠落。
**Proposed fix:** D 追加: D:`بهدوء` および B:`أكثر` (もしくは B:`كمان شوية` 「もう少し」)。最小修正例: 「اتكلم بهدوء أكتر شوية」 → A:لو سمحت C:اتكلم D:بهدوء B:أكتر شوية。`allowTextChange: true`。確信度【確実】(manner adverb は文意の核、`_omission_guidelines.md` A.4)。

### 3. #34 fa — `B:آهسته‌تر` に "more" と "slowly" が融合 (D 欠落) 【確実】
**Current:** A:لطفاً B:آهسته‌تر C:صحبت کنید
**Problem:** ペルシャ語 `آهسته‌تر` は `آهسته` (slowly) + `-تر` (比較接尾辞「more」)。原文の B=more と D=slowly が一語に融合。`_omission_guidelines.md` の A.4 (manner adverb) と A.7 (quantifier that changes meaning) の **両方** に該当する **二重融合** で、core role が segment として可視化されない。同データの 同類セル他言語 (ja `B:もっと D:ゆっくり` / fr `B:plus D:lentement` / ru `B:медленнее` — ロシア語は形態論的に同じく融合だが、ペルシャ語は分析的 morphology を持つので原則分割可能) と整合させると、ペルシャ語も分割可能: `آهسته` (slow) + `‌‌تر` (more)。
**Proposed fix:** B|D 結合セグメント `آهسته‌تر` → D:`آهسته` B:`‌تر` (zwnj 接続)。あるいは role 維持で B:`بیشتر` D:`آهسته` (analytic separation, 「より-遅く」)。`allowTextChange: true`。確信度【確実】(`_omission_guidelines.md` A.4+A.7)。

### 4. #34 ru — `B:медленнее` も同様に "more" と "slowly" 融合 (D 欠落) 【蓋然】
**Current:** A:Пожалуйста C:говорите B:медленнее
**Problem:** ロシア語 `медленнее` = 比較級「より遅く」(`медленно` slow + ‐ее 比較接辞)。fa #34 と同型の B|D 融合。 ただしロシア語は形態論的に比較級が **単一形態素** として最も自然で、無理に "более медленно" と分割すると ungrammatical (Wade 2011 *A Comprehensive Russian Grammar* §17)。`_omission_guidelines.md` B.7 (aspect particles in pro-aspect languages) と類比的な「形態論的融合」許容ケースだが、 segment role を明示するなら B|D 融合表記が望ましい。 現状 B のみ表示で D ロールが palette に存在しない。
**Proposed fix:** B → B|D:`медленнее` (palette は同じ、role 表記を融合形式に統一)。`allowTextChange: false` (text 維持、segment role 表記のみ更新)。確信度【蓋然】(ロシア語の形態論的制約)。

### 5. #13 pl — `B|D:poproszę` で A=Please (`Proszę`) が完全欠落 【確実】
**Current:** F:Szklankę C:wody B|D:poproszę
**Problem:** 「poproszę」(1sg 完了体未来「お願いします」) は politeness 込みの依頼動詞だが、原文 "Please give me a glass of water" の **A=Please** (politeness particle 機能) が独立 segment として存在しない。同データの他ポーランド語請求文 #24「A:Proszę D:pokazać」/ #34「A:Proszę C:mówić」/ #49「A:Proszę D:powiedzieć」/ #96「A:Proszę B:skręcić」 すべて A:Proszę を独立 segment として明示している。#13 のみ politeness が動詞に融合した形 (poproszę) を採用しており、polish 内部一貫性が崩れている。さらに B (=me) も同じく融合。
**Proposed fix:** A:Proszę B:mi F:szklankę C:wody D:dać (= Please, give me a glass of water — 標準的なポーランド語依頼定型)。`allowTextChange: true`。確信度【確実】(同データ内 #24/#34/#49/#96 と整合)。

### 6. #13 hu — `B|D:kérek` は 1sg 直説法 (= "I'd like") であり 命令法でない 【確実】
**Current:** F:Egy pohár C:vizet B|D:kérek
**Problem:** ハンガリー語 `kérek` = 1sg 現在直説法「私が要求する」(動詞 *kérni* "to request")。命令法ではなく、英語の "I want" / 日本語の「ください」相当の **declarative request strategy** に分類される(Kenesei et al. 1998 *Hungarian* §3.3.1)。原文「Please give me a glass of water」 を最も自然に翻訳するには **`Kérek egy pohár vizet, kérem`** (declarative + 末尾の `kérem` politeness) または **命令法 `Kérem, adjon egy pohár vizet`** (Please, give-3sg.imperative.formal a glass of water)。後者が同データ #24「A:Kérem D:mutassa meg」/ #34「A:Kérem B:lassabban」/ #49「A:Kérem D:mondja meg」/ #96「A:Kérem B:forduljon」 と一貫している命令法形式。#13 のみ 1sg 直説法 で 不整合。
**Proposed fix:** A:Kérem D:adjon B:nekem F:egy pohár C:vizet (= Please give me a glass of water, formal 3sg imperative)。`allowTextChange: true`。確信度【確実】(ハンガリー語 命令⇔直説の morphological 区別、同データ内 一貫性)。

### 7. #13 mn — `B|D:өгнө үү` で politeness particle `үү` が動詞と融合、他 mn 命令文と不整合 【確実】
**Current:** F:Нэг аяга C:ус B|D:өгнө үү
**Problem:** モンゴル語 `өгнө үү` = `өгнө` (future 1sg/3sg "will give") + `үү` (polite request particle, ≈ "please"). 同データの他 mn 請求文 #24「C:Цэсийг B:надад D:үзүүлнэ A:үү」 / #28「D:уу」/ #34「A:уу」 / #49「A:үү」 / #96「A:үү」 すべて politeness particle `үү/уу` を **独立 A segment** として明示している。#13 のみ B|D 融合で politeness が verb に粘着 → 一貫性違反。さらに動詞 `өгнө` は本来 1sg/3sg future で、imperative 形は `өг` (bare stem) + politeness softener `өгөөч` (請う形) または `өгөөрэй` (deferential) のほうが自然。
**Proposed fix:** D:өгнө B:надад A:үү (分割、`надад` "to me" 追加して B/D を独立 segment 化)。 最小修正: D:`өгөөч` A:`үү` (verb は softener form に置換、politeness 独立化)。`allowTextChange: true`。確信度【確実】(同データ内 一貫性)。

### 8. #24 ms — `B=me` 完全欠落、同データ #49/#96 と不整合 【確実】
**Current:** A:Sila D:tunjukkan C:menu
**Problem:** マレー語 `tunjukkan` (`tunjuk` "show" + `-kan` 受益接辞) は他動詞だが、間接目的語 "me" (saya) が明示されていない。原文 "Please show me the menu" の B=me が segment として欠落。同データの ms 他請求文 #49「A:Sila D:beritahu B:saya E:jalan...」/ #96「A:Sila B:belok kanan」(再帰なので saya 不要) / #13「A:Sila D:berikan B:saya F:segelas C:air」 で **B:saya** が明示されているのに、#24 のみ欠落。マレー語の口語では省略可能 (Sneddon 2010 *Indonesian Reference Grammar* §6.2、ms にも適用) だが、 同言語内の他セルが一貫して `saya` を備える以上、 #24 だけの欠落は data 不整合。
**Proposed fix:** B:saya 追加: A:Sila D:tunjukkan B:saya C:menu。`allowTextChange: true`。確信度【確実】(`_omission_guidelines.md` A.2 主目的語/間接目的語、同データ内一貫性)。

### 9. #24 tl — `D:po` は politeness particle で「show」動詞が segment として欠落 【蓋然】
**Current:** A:Pakitingnan D:po C:ang menu
**Problem:** タガログ語 `Pakitingnan` = `paki-` (request prefix) + `tingnan` (verb "look at"). これ自体が完全な依頼動詞 = "Please look at" 機能で、A=Please + D=show を **prefix-melded** している。`po` は politeness particle (≈ honorific 尊敬助詞) で、これを D に振っているのは異常 — D=verb 役 のはずが politeness particle になっている。実態は「Pakitingnan po ang menu」 = "Please-look-at po the menu" で、 verb は `Pakitingnan` に内蔵されている。D ロールを使うなら本来 D:`tingnan` (base verb) + A:`paki-` + 末尾 politeness `po` (新 segment H?) であるべき。 同データ tl #49「A:Pakisabi B:sa akin ang E:daan...」/ #96「A:Pakiusap B:lumiko sa kanan」と整合させると、A=請求形 prefix と verb の融合は一貫しているが、`po` を D に振っている #24 だけ役割誤割当。
**Proposed fix:** D:po を politeness particle 新 segment (H? G?) に再ロール、もしくは A に併合: A:`Pakitingnan po` C:`ang menu` + B:`(sa akin)` 任意。最小: D を削除して A:`Pakitingnan po` C:`ang menu`(B 任意付加)。`allowTextChange: true`。確信度【蓋然】(role 割当の妥当性議論あり)。

### 10. #13 my — `A:ပေးပါ` で動詞 `ပေး` (D=give) と politeness `ပါ` (A=please) が融合 【確実】
**Current:** F|C:ရေတစ်ခွက် A:ပေးပါ B:ကျွန်တော့်ကို
**Problem:** ビルマ語 `ပေး` "give" (動詞、D 役) + `ပါ` politeness particle (A 役、≈ ください) の融合。同データの my 他請求文 #24「A:ကျေးဇူးပြု၍ C:မီနူး D:ပြပါ」(politeness `ပါ` が D 末尾に粘着) / #34「A:ကျေးဇူးပြု၍ B:ပိုဖြည်းဖြည်း C:ပြောပါ」(同) / #49 / #96 すべて `ပါ` が **動詞末尾に粘着しつつ A=ကျေးဇူးပြု၍** が独立 segment として存在する。#13 のみ A=ကျေးဇူးပြု၍ (ビルマ語の 真の請求 marker) が欠落し、`ပါ` を A に振り当てて politeness 機能を**ダブルカウント**している。さらに F|C 結合 segment `ရေတစ်ခွက်` も "water-one-cup" で F=glass と C=water が融合(`_omission_guidelines.md` 主目的語 A.2 違反)。
**Proposed fix:** A:`ကျေးဇူးပြု၍` D:`ပေးပါ` B:`ကျွန်တော့်ကို` F:`တစ်ခွက်` C:`ရေ` (politeness を D に粘着、A は ကျေးဇူးပြု၍ で独立化、F/C 分離)。`allowTextChange: true`。確信度【確実】(同データ内 my 他セルと整合)。

### 11. #13 bo — `D:གནང་རོགས` は honorific request marker のみで「give」 plain verb 欠落 【蓋然】
**Current:** A:སྐུ་མཁྱེན B:ངར F:ཆུ་ཕོར་གང D:གནང་རོགས
**Problem:** チベット語 `གནང་རོགས` = `གནང་` (honorific verb "give" + 補助) + `རོགས་` (request particle "please")。これ自体が依頼動詞として機能するが、純粋な動詞「give」(plain `སྤྲོད་`、honorific `གནང་` / `བསྩལ་`) と request particle (`རོགས་`) が融合。同データの bo #24「D:སྩོན་རོགས་」(「教える」honorific) / #34「C:གསུང་རོགས་」(「言う」honorific) / #49「D:གསུང་རོགས་」/ #96「B:གཡས་སུ་འཁོར་རོགས」 すべて同じパターン (honorific verb + `རོགས་`) で整合は取れている。ただし #13 のみ `གནང་` + `རོགས` 間に zwnj/tsheg 不在 (他は tsheg または zwnj 区切り)。表面綴り一貫性 issue。 また palette 観点で「give」動詞 (D) と politeness particle (A 役 = `རོགས` の機能) を分けるなら、bo 全体で見直しが必要。
**Proposed fix:** 表面綴りを `གནང་རོགས་` (末尾 tsheg 付加) に統一して他セルと揃える。`allowTextChange: true`。確信度【蓋然】(綴り一貫性 issue)。

### 12. #28 sw — `B=you` (politeness 主語) 欠落、二人称代名詞融合 【確実】
**Current:** G:Je C:unaweza kupendekeza F:mkahawa E:mzuri
**Problem:** スワヒリ語 `unaweza` = `u-` (2sg subject prefix) + `-na-` (present tense marker) + `-weza` (verb "can") 。二人称代名詞 (B=you) が動詞に **prefix として粘着**しており、独立 segment として segment 出現しない。Bantu 諸言語の典型的な polysynthesis で、`_omission_guidelines.md` B.1 (subject pronoun in pro-drop languages) には**完全には**該当しない (Bantu は subject prefix が obligatory なので「省略」ではなく「動詞内 incorporation」)。原文 #28 EN「Could you recommend...」 の B=you が segment として可視化されない。同データ sw 他文 #11「B:Wewe...」/ #28 wuu「B:侬」 などで B=you が独立 segment として明示される一方、sw #28 だけ B が表に出ない。
**Proposed fix:** B:`u-` (zwnj 接続) を分離: G:Je B:u A:naweza C:kupendekeza F:mkahawa E:mzuri、もしくは C を B|C 融合表記に変更: B|C:unaweza kupendekeza。`allowTextChange: false` (B|C 融合表記なら text 維持)。確信度【確実】(`_omission_guidelines.md` A.2 主題語/主語、Bantu の polysynthesis case)。

### 13. #28 sw — `G:Je` 文頭 question particle と末尾 question particle (`?`) の不整合 【要検討】
**Current:** G:Je C:unaweza kupendekeza F:mkahawa E:mzuri
**Problem:** スワヒリ語 `Je` は **文頭 yes-no question particle** (Mohamed 2001 *Modern Swahili Grammar* §12.3.1) で、文末ではなく文頭に置かれる。同データ #28 の G ロールは vi 「không (ạ)」/ th 「ไหม」/ zh 「吗」/ ko 「요」/ ja 「か」など **文末** particle に統一されている。sw だけ文頭の particle を G にマップしているのは role 不整合 (G = sentence-final question 助詞 という規約に違反)。
**Proposed fix:** sw の `Je` を G ではなく A (=politeness/sentence-initial) 役に再マップ、もしくは sw の question 機能を新 segment H に分離。`allowTextChange: false` (role の再割当のみ)。確信度【要検討】(palette 規約が文書化されていない場合は judgment call)。

### 14. #34 tlh — `A=Please` politeness particle が欠落、加えて C:`yIjatlh` は 2sg→3sg imperative prefix 内蔵 【蓋然】
**Current:** B:QIt C:yIjatlh
**Problem:** クリンゴン語 (tlh) は politeness particle として `-neS` (honorific suffix) を持つ(Okrand 1992 *The Klingon Dictionary* §4.2.5)。原文「もっとゆっくり話してください」 の politeness register を反映するなら `yIjatlhneS` (speak-2sg.imp-honorific) が自然。 現在 A=Please に相当する segment が欠落。同データ #13 tlh「F:HIvje' C:bIQ B|D:HInob」/ #24「C:SojmeH ghItlh D:HI'ang」 で politeness が全く反映されていないのは tlh の特性 (Klingon の文化的に politeness を避ける) として説明可能だが、同じく #28「A:choleghlaH'a'」 で politeness 風 modal は使われている。一貫性 観点で要再検討。
**Proposed fix:** C 末尾に `-neS` 接尾辞付与 (zwnj 接続): C:`yIjatlh` → C:`yIjatlh A:‌neS`、もしくは tlh の politeness 不存在を文書化して 全 tlh 命令文を「A 欠落」許容と明示。`allowTextChange: true`。確信度【蓋然】(クリンゴン語の politeness register 解釈による)。

### 15. #34 jbo — `A:e'o` は politeness 接続詞だが verb softener が欠落 【蓋然】
**Current:** A:e'o C:tavla B:masno
**Problem:** ロジバン (jbo) で `e'o` = COI cmavo「請う/please」(Cowan 1997 *The Complete Lojban Language* §13.10)、imperative mood marker。`tavla` = "talk", `masno` = "slow"。 ただし「もっとゆっくり」の **比較 "more"** (jbo: `zmadu` または `mleca` の構造) が完全欠落。`masno` だけでは「slow」で「more slowly」 を表現できていない。同データ jbo の構文 (lojban は分析的言語) では `mutce masno` (= very slow) や `zmadu lo masno` (= more than slow) 等で比較可能。
**Proposed fix:** B:`mutce` (= very, intensifier 代替) もしくは B:`zmadu` D:`masno` (比較構造)。最小: B:`mutce` (very として近似)。`allowTextChange: true`。確信度【蓋然】(jbo の比較表現は複数選択肢あり)。

### 16. #34 tok — `B:wawa` は "strong/powerfully" で 原文 "more slowly" と意味反転 【確実】
**Current:** A:o C:toki B:wawa
**Problem:** トキポナ (tok) で `wawa` = "strong, powerful, energetic" (Lang 2014 *Toki Pona: The Language of Good* §lexicon)。これは「力強く話して」 で、原文 「もっとゆっくり話して」 とは **正反対**の意味。tok で「slowly」 は `lon tenpo suli` (long-time) または `kepeken tenpo mute` (using-much-time)、より自然には `pi pona` (well/calmly) または `pi tenpo` (timely) で表現される。 同 tok データ #34 のみこの意味反転があり、 他 tok セル (#13「o pana」/ #24「o pana lukin」/ #49「o toki e」) は意味的に正確。
**Proposed fix:** B:`lon tenpo」 C:`toki` (時間をかけて話して) もしくは C:`toki` B:`pi tenpo mute` (= speak slowly)。`allowTextChange: true`。確信度【確実】(tok 辞書定義から明白)。

### 17. #28 zh_song — `G=吗` question particle 欠落、宋代漢文として要検討 【要検討】
**Current:** B:您 A:可否 C:薦 D:一家 F:好 E:酒家
**Problem:** 宋代漢文 (zh_song) で `可否` (= can-or-not) は **二項対立疑問** を形成し、末尾 `否` 自体が question marker として機能する。よって標準 zh の `吗` 相当が省略可能。これは文法的には正しいが、palette の G ロール (= clause-final question particle) が欠落している。同データ zh #28「G:吗」/ yue「G:呀」/ nan「G:無」/ wuu「G:伐」 すべて G ロールを保持。 zh_song も伝統的に末尾 `乎` / `也」 / `耶` を加えて疑問形を明示することがある (王力『漢語史稿』Ch. 5.3)。
**Proposed fix:** 末尾に G:`乎` 付与: A:可否 C:薦 D:一家 F:好 E:酒家 G:乎 (もしくは G:`耶`)。`allowTextChange: true`。確信度【要検討】(zh_song の question 形成は `可否` で完結する説あり)。

### 18. #28 ko_bus — `A:주실 수 있나예` で politeness particle `예` が動詞句末尾に粘着 【蓋然】
**Current:** F:좋은 E:식당을 C:추천해 A:주실 수 있나예
**Problem:** 釜山方言 `예` (= 標準語 `요`) が question 動詞句末尾に粘着し、独立 segment として G ロール (question particle) が欠落。同データ #28 ko「A:주실 수 있나 G:요」/ ko_yb「A:주실 수 있나 G:요」/ ko_kp「A:주실 수 있습니 G:까」 すべて politeness/question particle を **G ロール独立 segment** に分離している。ko_bus のみ A に融合 — palette consistency 違反。
**Proposed fix:** A:`주실 수 있나` G:`예` (politeness particle を G に分離)。`allowTextChange: true`。確信度【蓋然】(palette 一貫性、ただし方言データの粒度は議論あり)。

### 19. #28 vi_s / vi_c — `G:hông / khôông` の末尾 politeness particle `ạ` 欠落 (vi 標準には付与済み) 【蓋然】
**Current:** vi_s `G:hông` / vi_c `G:khôông`
**Problem:** 同データ #28 vi(標準)は **G:`không ạ`** で末尾 politeness particle `ạ` を保持(レビュー #81 指摘30の修正適用済)。一方、vi_s (南部) / vi_c (中部) は politeness `ạ` 欠落。南部・中部方言で `ạ` 不在は 方言学的に **若年層・口語では正常** だが (Cao 1998 *Tiếng Việt: Sơ thảo ngữ pháp chức năng* §10.4)、polite request register として標準 vi と register を揃える観点では `ạ` 付加を検討。
**Proposed fix:** vi_s G:`hông ạ` / vi_c G:`khôông ạ`、もしくは方針として「方言は polite particle 任意」を文書化。`allowTextChange: true`。確信度【蓋然】(方言の register 弁別はどちらも妥当)。

### 20. #49 jbo — `C|E|F|G:lo pluta lo vinji tcana` で 4 ロール融合 (the way / to / the / airport) 【確実】
**Current:** A:e'o D:tavla B:mi C|E|F|G:lo pluta lo vinji tcana
**Problem:** ロジバン (jbo) で `lo pluta lo vinji tcana` = "the path of the airplane station" は **構造的に分析可能** な NP で、`lo pluta` (E=the way) / `lo vinji tcana` (G=airport) / `lo` (D=the) と分割できる。`vinji tcana` は tanru (NP 合成) で `vinji` (airplane) + `tcana` (station) = "airport"。現状 4 ロール (C+E+F+G) が完全融合 → palette role が機能しない。同データ jbo #28 でも `C` が部分融合 (E に併合) しているが、 #49 は最も顕著な多重融合ケース。
**Proposed fix:** A:e'o D:tavla B:mi E:`lo pluta be` F:`lo` G:`vinji tcana` (= "the path of the airplane station") 。`allowTextChange: true`。確信度【確実】(`_omission_guidelines.md` A.2/A.3 主目的語/主題語の融合 defect)。

### 21. #49 tlh — `F:DujDaq E:He D:HI'ang` で A=Please 完全欠落、B=me prefix 内蔵 【蓋然】
**Current:** F:DujDaq E:He D:HI'ang
**Problem:** クリンゴン (tlh) `HI'ang` = prefix `HI-` (2sg→1sg imperative) + verb `'ang` "show/reveal"。 2sg→1sg は「あなたが私に」 = B=me 内蔵。原文「教えてください」 の A=Please が完全欠落、 G=way が `He` に集約 (= "course/route")。`Duj` = ship, `-Daq` = locative。tlh の politeness 不在は文化的属性として一部許容されるが、 #34/#13/#24 と同型でレビュー #14 と統一 audit が必要。
**Proposed fix:** 末尾に `-neS` honorific 付加もしくは A 段にロール追加: A:`-neS` (もしくは A 欠落許容を文書化)。`allowTextChange: true`。確信度【蓋然】。

### 22. #96 vi_s — `A:Quẹo` が politeness particle なしの bare imperative、他 vi 系統と register 不整合 【確実】
**Current:** A:Quẹo B:phải C:tại F:ngã tư E:kế tiếp
**Problem:** 南部ベトナム語 `Quẹo` = "turn" (動詞) で、politeness modifier (làm ơn / xin / hãy / phiền) と末尾 ạ のいずれも欠落。 同データ #96 vi 標準「A:Hãy B:rẽ phải」/ vi_c「A:Hãy B:rẽ phải」 と register 不整合 (vi_s だけ politeness ゼロ)。 また #96 他言語 (#96 ar「A:من فضلك」/ #96 he「A:בבקשה」/ #96 hu「A:Kérem」 等) すべて politeness particle 保持。vi_s だけ register downgrade。
**Proposed fix:** A:`Làm ơn quẹo` もしくは A:`Hãy quẹo` (politeness 復活)。最小修正: A:`Quẹo` → A:`Làm ơn quẹo`。`allowTextChange: true`。確信度【確実】(同データ内 vi 系統一貫性)。

### 23. #24 fi — `D:näyttää` は不定詞、命令形は `näyttäkää` 【確実】
**Current:** A:Voisitteko D:näyttää B:minulle C:ruokalistan
**Problem:** フィンランド語 `Voisitteko näyttää` = "Could you show" (modal `voida` 二人称複数条件法 + 不定詞 `näyttää`) は polite question 形式。 これは正しい構造だが、Karlsson 2017 *Finnish: An Essential Grammar* §12.4.2 によれば modal + 不定詞は polite request の一形式で、 imperative 段階としては `näyttäkää` (2pl imperative) の方が より直接的 imperative。 ただし modal 構造も polite request としては有効。Issue は #24 と他 fi 命令文との不整合: fi #34「A:Olkaa hyvä C:puhukaa」(imperative `puhukaa`) / fi #49「A:Olkaa hyvä D:kertokaa」(imperative `kertokaa`) / fi #96「A:Ole hyvä ja B:käänny oikealle」(imperative `käänny`) すべて A:Olkaa hyvä + 命令形 で統一。#24 と #13 (A:Voisinko D:saada) だけ modal + 不定詞 で不整合 register。 #28 (Could you...?) のような疑問形 polite request なら modal が適切だが、 #24 は declarative imperative なので命令形が register に合致。
**Proposed fix:** A:Olkaa hyvä D:näyttäkää B:minulle C:ruokalista (命令形に統一)。`allowTextChange: true`。確信度【確実】(fi 同データ内 #34/#49/#96 と整合)。

### 24. #13 fi — `A:Voisinko D:saada` は 1sg "Could I" で 2sg 命令と register 不整合 【確実】
**Current:** A:Voisinko D:saada F:lasin C:vettä
**Problem:** `Voisinko saada...` = "Could I get..." (1sg "I", not 2sg "you")。 原文 #13 EN "Please give me..." は **2sg を主語とする命令**だが、fi #13 は **1sg 主語の polite question** に書き換えられている。意味は伝わるが、 原文 register と異なる。 同データ fi #24 (`Voisitteko`) も同型だが、 fi #34/#49/#96 は命令形を採用。 #13/#24 だけ modal-question 形 → register 不整合。
**Proposed fix:** A:Olkaa hyvä D:antakaa B:minulle F:lasi C:vettä (2pl 命令形 + politeness)。`allowTextChange: true`。確信度【確実】(他 fi セルとの一貫性)。

### 25. #34 eu — `B:motelago C:hitz egin` で A=Please (`Mesedez`) 後に politeness modifier がなく 命令形 `egin` のみ 【蓋然】
**Current:** A:Mesedez B:motelago C:hitz egin
**Problem:** バスク語 `hitz egin` = "to speak" (light verb construction)、命令形は `hitz egin` (2sg/familiar) または `hitz egizu` (2sg.formal allocutive) (Hualde & Ortiz de Urbina 2003 *A Grammar of Basque* §10.5)。 polite register では 2sg.formal が必要。 同データ eu #13「A:Mesedez B:niri F:ur baso bat D:eman」(`eman` familiar imperative) / eu #24「D:erakutsi」(familiar) / eu #49「D:esan」(familiar) / eu #96「B:biratu」(familiar) すべて familiar imperative。eu 全体で `Mesedez + familiar imp` の 中間 register に統一されている。 これは方針として一貫しているが、`Mesedez` (please) が politeness を持ち込む一方 で 動詞は familiar という mismatch。
**Proposed fix:** 動詞を 2sg.formal allocutive に統一: C:`hitz egizu` (#34)、 D:`emaiozu` (#13)、D:`erakuts iezadazu` (#24) など。あるいは現状 (familiar imp + Mesedez) を方針として確定。`allowTextChange: true`。確信度【蓋然】(eu の formality register 設計判断)。

### 26. #13 cy — `D:Rhowch` の前に politeness modifier `os gwelwch yn dda` が文末配置で語順不自然 【蓋然】
**Current:** D:Rhowch F:wydraid o C:ddŵr B:i mi A:os gwelwch yn dda
**Problem:** ウェールズ語 `os gwelwch yn dda` (= "if you-please") は politeness particle で、 文頭・文末いずれも可能だが (King 2003 *Modern Welsh: A Comprehensive Grammar* §15.3.2)、 同データ cy 他文 #24「D:Dangoswch C:y fwydlen B:i mi A:os gwelwch yn dda」 / #34「C:Siaradwch B:yn arafach A:os gwelwch yn dda」 / #49「D:Dywedwch wrth...A:os gwelwch yn dda」 / #96「A:Os gwelwch yn dda B:trowch i'r dde」 で、 #96 だけ文頭、他は文末 — 言語内不整合。本指摘は #13 単独ではなく、 cy 全体の **politeness particle 位置** 一貫性 audit を 推奨。
**Proposed fix:** 全 cy 請求文で politeness particle を文末固定もしくは文頭固定に統一。 最小: #96 を文末配置に変更 A:Os gwelwch yn dda → A 末尾。 もしくは #13/24/34/49 を文頭配置に変更。`allowTextChange: false`。確信度【蓋然】(語順 variation は許容内)。

### 27. #49 egy — `C|E|F|G:𓅱𓂝𓏏 𓂋 𓅓𓂋𓇋𓏏 𓂝𓂝𓏏` 4ロール融合、 A=Please も極小 【確実】
**Current:** D:𓂧𓂧|ḏd A:𓈖𓇋|n.j C|E|F|G:𓅱𓂝𓏏 𓂋 𓅓𓂋𓇋𓏏 𓂝𓂝𓏏|wꜣ.t r mrj.t ꜥꜣ.t
**Problem:** 古代エジプト語 (egy) で `n.j` = "to me" (preposition + 1sg suffix) を A=Please に振り当てているのは role 誤割当 (A=politeness 役)。 さらに `wꜣ.t r mrj.t ꜥꜣ.t` = "way to harbour great" (the-way to the-great-harbour) は分析可能な NP 連鎖だが、 4 ロール融合 (C/E/F/G) で palette が機能しない。 同データ egy #13/24/96 でも類似の融合あり (古エジプト語のデータ粒度は粗い)。 古エジプト語に politeness 表現は限定的 (Allen 2014 *Middle Egyptian* §16.5「Hortative jmj + sḏm.f」) で、 `i sḏm` (= "O hear!") のような vocative + jussive で politeness を近似する。
**Proposed fix:** A 役を `j sḏm` (vocative politeness marker) として #13 と統一、 NP を分解: E:`wꜣ.t` F:`r` G:`mrj.t ꜥꜣ.t` (NP 構造分解)。`allowTextChange: true`。確信度【確実】(`_omission_guidelines.md` A.2/A.3 の複合 NP 融合 defect、ただし egy data は全体的に粒度が粗いので一括 audit 推奨)。

### 28. #28 ar_eg — `A:ممكن` のみで C:`تقترح` が 2sg masculine bare imperative、politeness 段階不足 【蓋然】
**Current:** A:ممكن C:تقترح F:مطعم E:كويس
**Problem:** エジプト方言 `ممكن` (= mumkin "possible") + `تقترح` (= 2sg.m present "you suggest") は polite question 形式だが、 標準 ar #28「G:هل D:يمكنك C:أن توصي」 は **`هل + يمكنك + أن` 構造 (modal-fronted polite question)** で、 ar_eg はより口語的 `ممكن + bare 2sg`。両者は register が異なるが、 これは 方言差として許容範囲。 ただし B=you (主語 二人称) が独立 segment として欠落 (`تقترح` に prefix 内蔵)。同データ ar (標準)「D:يمكنك」 も同じく B 欠落。Bantu と同様の polysynthesis case。
**Proposed fix:** B 役を verb prefix `‌ت-` に分離: B:`ت` C:`قترح`、もしくは B|C 融合表記。`allowTextChange: false` (B|C 表記)。確信度【蓋然】(arabic の subject prefix 分離は形態論的に可能だが慣例で非分離)。

### 29. #34 nl — `B|D:langzamer` で "more" と "slowly" 融合 (fa #34 / ru #34 と同型) 【蓋然】
**Current:** A:Alstublieft C:spreek E:u B|D:langzamer
**Problem:** オランダ語 `langzamer` = `langzaam` (slow) + `-er` (比較接尾辞 "more")。同型の B|D 融合 (指摘 3, 4 と同系統)。 オランダ語は分析的に `meer langzaam` も可能だが、 形態論的に `langzamer` が標準 (Donaldson 2008 *Dutch: A Comprehensive Grammar* §6.2)。 現状 B|D 融合表記は妥当だが、segment 表記の 統一性 issue。
**Proposed fix:** B|D 融合表記維持で OK、もしくは比較分析形 B:`meer` D:`langzaam` に展開。`allowTextChange: true` (分析形に変更する場合)。確信度【蓋然】(形態論的選択肢)。

### 30. #34 hu — `B:lassabban` 同じく "more" と "slowly" 融合 (fa/ru/nl 同型) 【蓋然】
**Current:** A:Kérem B:lassabban C:beszéljen
**Problem:** ハンガリー語 `lassabban` = `lassan` (slowly) + `-bb` (比較) + `-an` (副詞)。 fa/ru/nl と同型の B+D 融合だが、 hu は B ロールのみ表記、D ロールが完全に segment 外。 palette consistency としては B|D 融合表記が望ましい。
**Proposed fix:** B → B|D:`lassabban`、もしくは分析形 B:`még` D:`lassabban` (= "still more slowly", 強調)。`allowTextChange: false` (B|D 表記のみ更新)。確信度【蓋然】。

### 31. #34 ja_heian / ja_edo — `C:語り / C:話して` で「もそっと/ゆるりと」の D=slowly は独立だが、politeness 段階が現代の「ください」 と 大きく異なる register 【要検討】
**Current:** ja_heian B:もそっと D:ゆるりと C:語り A:給へ / ja_edo B:もっと D:ゆるりと C:話して A:くだされ
**Problem:** これらは register 上正しいが、 #81 (敬語 morphology) で言及済みの「給へ」「くだされ」 は **命令法** (2sg imp) であり、 現代 ja「ください」 と等価 (Frellesvig 2010 *A History of the Japanese Language* §8.4)。 命令形態論として正しいが、 D=ゆるりと の position が C より前にある点が ja 標準 (D=ゆっくり C=話して) と一致。**指摘なし** とすべき。
**Proposed fix:** なし (現状で正しい)。**指摘から除外** (この項目は audit log として残すが defect ではない)。

### 32. #34 sa — `B:मन्दतरं C:वदतु D:slowly 欠落` (fa/ru/hu と同型) 【蓋然】
**Current:** A:कृपया B:मन्दतरं C:वदतु
**Problem:** サンスクリット `मन्दतरं` = `मन्द` (slow) + `तर` (比較接尾辞 "more") + `अम्` (副詞格)。 fa/ru/hu/nl と同型の B+D 形態論的融合。 D ロールが segment として欠落。 サンスクリットの分析的形は `अधिकं मन्दम्` (more slowly) でも可能 (Whitney 1889 *Sanskrit Grammar* §471)。 palette consistency 観点では B|D 融合表記が望ましい。
**Proposed fix:** B → B|D:`मन्दतरं`、もしくは分析形 B:`अधिकं` D:`मन्दम्`。`allowTextChange: false` (B|D 表記更新)。確信度【蓋然】(古典語の形態論的融合)。

### 33. #96 vi_s — `A:Quẹo B:phải` で politeness 完全欠落、命令法が bare imperative 【確実】
**Current:** A:Quẹo B:phải C:tại F:ngã tư E:kế tiếp
**Problem:** 指摘22 と同根。 vi_s の #96 は politeness modifier (Làm ơn/Hãy/Xin/Phiền) を一切持たず、 bare imperative (`Quẹo phải` = "Turn right" 直接命令)。 同データ vi_s の他請求文 #13「A:Làm ơn」/ #24「A:Làm ơn」/ #34「A:Làm ơn」/ #49「A:Làm ơn」 すべて politeness modifier を持つ。 #96 だけ欠落 → 言語内一貫性違反。
**Proposed fix:** A:`Làm ơn quẹo` (#13/24/34/49 と統一)、 もしくは A:`Hãy quẹo` (vi 標準と統一)。`allowTextChange: true`。確信度【確実】。

### 34. #28 he — `D:תוכל` (2sg.m future modal) で politeness `בבקשה` が #28 では欠落 【蓋然】
**Current:** G:האם D:תוכל C:להמליץ E:על מסעדה F:טובה
**Problem:** ヘブライ語 `האם תוכל...` = "Are you able..." (G:`האם` interrogative + D:`תוכל` 2sg.m future "can" + C:`להמליץ` infinitive)。 polite question 形式として正しいが、 同データ he #13「A:בבקשה」/ #24「A:בבקשה」/ #34「A:בבקשה」/ #49「A:בבקשה」 すべて A:`בבקשה` politeness を持つ。 #28 のみ `בבקשה` 欠落、 `האם` (interrogative) のみで politeness 段階が一段低い。 原文「教えていただけますか」 は最大級の polite register なので、 `בבקשה תוכל...` (Please could you...) が より自然 (Glinert 2005 *Modern Hebrew: An Essential Grammar* §14.5)。
**Proposed fix:** A:`בבקשה` 追加: A:`בבקשה` G:`האם` D:`תוכל` C:`להמליץ` E:`על מסעדה` F:`טובה`。`allowTextChange: true`。確信度【蓋然】(`האם` 単独で polite question は成立、 二重 politeness は冗長との見方もあり)。

### 35. #34 ar_eg — `C:اتكلم` は 2sg.m bare imperative、 politeness modifier `لو سمحت` のみで 動詞は plain 命令形 【蓋然】
**Current:** A:لو سمحت C:اتكلم B:بشوية
**Problem:** エジプト方言 `اتكلم` = `اِتْكَلِّم` (Form V imperative 2sg.m "speak")。 politeness modifier `لو سمحت` (if you please) は文頭にあるが、 動詞自体は bare imperative。 標準 ar #34「A:من فضلك C:تحدث」 と同じく bare 命令形 だが、 register として OK。 ただし `B=more` (`أكثر`) が完全欠落 (指摘 2 で既出)。 本指摘は politeness 段階問題ではなく `B=more` 欠落の再指摘 (指摘 2 と重複なので 統合可能)。
**Proposed fix:** 指摘 2 と統合。 単独 issue 化なし。確信度【蓋然】。 (← 統合済みなのでスキップ)

### 36. #28 fa — `D:می‌توانید` (2pl/polite "can") の後 `C:پیشنهاد بدهید` (2pl imperative) 重複 mood 【蓋然】
**Current:** G:آیا B:شما D:می‌توانید F:یک E:رستوران خوب C:پیشنهاد بدهید
**Problem:** ペルシャ語 `می‌توانید` (2pl/polite "can") + `بدهید` (2pl imperative "give") の **modal + imperative** 共起は文法的に問題ないが、 mood の重複 (modal 義務 + 命令)。 standard fa では `می‌توانید پیشنهاد بدهید؟` (Could you suggest?) は **modal + infinitive** (`پیشنهاد بدهید` を infinitive `پیشنهاد دادن` に置換)が より自然な polite question (Mahootian 1997 *Persian* §5.6.3)。 ただし口語では imperative 形でも通用。
**Proposed fix:** C:`پیشنهاد بدهید` → C:`پیشنهاد بدهد` (3sg subjunctive) もしくは現状維持。`allowTextChange: true`。確信度【蓋然】(ペルシャ語の polite question mood 選択は variation あり)。

---

以上、計 **36 件** うち #31 (ja_heian/ja_edo 命令形 — 現状で正しい) と #35 (ar_eg #34 — 指摘 2 と重複) を除外して **34 件 actionable** (確実 14 件・蓋然 17 件・要検討 3 件)。

## ファイル情報

- **ファイル:** `/home/jounlai/langmap/langmap_reviews/84_open.md`
- **指摘総数:** 34 件 actionable (確実 14・蓋然 17・要検討 3)
- **支配的な系統的欠陥 (dominant defect)**:
  - **「more + manner adverb」 (B+D) の形態論的融合**: fa/ru/nl/hu/sa の比較副詞 (`آهسته‌تر`, `медленнее`, `langzamer`, `lassabban`, `मन्दतरं`) で **比較接尾辞 + 副詞語幹** が単一語として表記されているため、palette の B=more と D=slowly が役割として segmentation に現れない。これは形態論的に多くの語族で正常な融合だが、 LangMap の palette consistency 観点では **B|D 融合表記** に統一すべき (#3, #4, #29, #30, #32)。
  - **politeness particle と動詞の融合**: mn `өгнө үү` (#7), my `ပေးပါ` (#10), bo `གནང་རོགས` (#11), ko_bus `있나예` (#18), pl `poproszę` (#5), hu `kérek` (#6) で politeness particle が動詞末尾に粘着し、独立 segment として A/G ロールが欠落 (同データ内の他セルでは独立化されているケースが多く、 **言語内 segmentation 一貫性違反**)。
  - **bare imperative の politeness 段階不足**: vi_s #96 (#33), ar_eg #34 (#2 で D=slowly 欠落と重複), tlh #34/#49 (#14, #21) で politeness modifier (làm ơn / من فضلك 等) が文頭に存在しない、または bare imperative が現代標準 register より直接的すぎる(言語内一貫性違反)。
  - **command verb の意味反転 / 誤用**: tok #34 `wawa` (#16) は「強く」で原文「ゆっくり」と正反対、 jbo #34 `masno` (#15) は「slow」だが比較「more」が表現されていない。 これらは constructed languages の lexical selection 問題で、 言語コミュニティの慣用表現を再確認すべき。
  - **modal-fronted polite question の mood 不整合**: fi #13/24 (#23, #24) で `Voisinko/Voisitteko + 不定詞` を採用しているが、 fi #34/49/96 は `Olkaa hyvä + 命令形` で統一されており、**言語内 mood 一貫性違反**。
  - **NP の多重 role 融合 (palette 機能不全)**: jbo #49 `C|E|F|G` 4ロール融合 (#20), egy #49 同 4ロール融合 (#27) で、palette の E=way/F=to/G=airport が segmentation に出現せず、 ロールマッピングが機能していない。

- **Identity recommendations:**
  - **比較副詞融合の表記方針確定**: fa/ru/nl/hu/sa の `比較接尾辞 + 副詞語幹` は形態論的に正常な融合なので、 一律「B|D 融合表記」 もしくは「分析形に展開」 の方針を明文化すべき。 現状は言語ごとにバラバラ (ja は B+D 分割、ru は B のみ、fi は B のみ)。
  - **politeness particle 独立化方針**: politeness particle (please / ください / 주세요 / 请 / من فضلك 等) は **常に A 役で独立 segment** として明示する方針を確立。 これにより mn `үү`, my `ပါ`, ko_bus `예`, pl `poproszę` の verb-融合パターンを 一律 split 対象として扱える。
  - **constructed languages の politeness 不在文書化**: tlh / tok / jbo / eo / jbo の politeness 体系は それぞれ独自であり、 一律 A=Please を要求すると不自然。 言語ごとに「politeness 不在」「politeness 任意」「politeness 必須」を文書化し、 audit 時の判定基準とする。
  - **modal-fronted polite question (Could you...?) vs imperative の register 整理**: #28 (Could you recommend?) と #13/24/34/49/96 (Please + V) は **EN 原文の register が異なる** ことを再確認し、 各言語で modal + 不定詞 vs imperative の使い分けを統一。 fi #13/24 の `Voisinko/Voisitteko + 不定詞` は #28 (polite question) には適合するが、 #13/24 (declarative imperative) には不整合。
  - **NP role 融合の解消**: jbo / egy / sa の複合 NP は 可能な限り 分析的に分解して palette ロールを可視化。 言語の morphological 制約で分解不能な場合は **ロール融合表記 (A|B|C 等)** を明示し、 「完全欠落」とは区別する。
  - **vi 系統の末尾 ạ particle 一貫化**: vi 標準は `ạ` 採用 (レビュー #81 適用済) だが vi_s / vi_c では未採用。 方言の politeness 体系として `ạ` を方言ごとに有無を確定すべき。

**ファイル状態: OPEN**

## 構造化編集 (Structured edits for `.wf_langmap_apply2.mjs`)

以下を `/tmp/lm_edits_84.json` 等に書き出し、`node .wf_langmap_apply2.mjs <path>` で適用可能。表層が変わる項目は `allowTextChange: true` を明示。 apply2 は新規 role-letter の palette 自動拡張 (`H/I/J/K`) をサポート。

```json
[
  { "id": 34, "lang": "ar_eg", "op": "replace", "allowTextChange": true,
    "segments": [["A","لو سمحت"],["C","اتكلم"],["D","بهدوء"],["B","أكتر شوية"]],
    "finding": "#2 #34 ar_eg D=slowly 復活 (بشوية → بهدوء + أكتر شوية)" },

  { "id": 34, "lang": "fa", "op": "replace", "allowTextChange": true,
    "segments": [["A","لطفاً"],["B","بیشتر"],["D","آهسته"],["C","صحبت کنید"]],
    "finding": "#3 #34 fa B|D 融合解消 (آهسته‌تر → بیشتر + آهسته)" },

  { "id": 34, "lang": "ru", "op": "replace", "allowTextChange": false,
    "segments": [["A","Пожалуйста"],["C","говорите"],["B|D","медленнее"]],
    "finding": "#4 #34 ru B|D 融合表記統一 (медленнее を B|D に)" },

  { "id": 13, "lang": "pl", "op": "replace", "allowTextChange": true,
    "segments": [["A","Proszę"],["B","mi"],["F","szklankę"],["C","wody"],["D","dać"]],
    "finding": "#5 #13 pl A:Proszę 復活 + B/D 分離 (poproszę → Proszę + dać)" },

  { "id": 13, "lang": "hu", "op": "replace", "allowTextChange": true,
    "segments": [["A","Kérem"],["D","adjon"],["B","nekem"],["F","egy pohár"],["C","vizet"]],
    "finding": "#6 #13 hu 1sg 直説 → 3sg 命令法 (kérek → Kérem adjon)" },

  { "id": 13, "lang": "mn", "op": "replace", "allowTextChange": true,
    "segments": [["F","Нэг аяга"],["C","ус"],["B","надад"],["D","өгөөч"],["A","үү"]],
    "finding": "#7 #13 mn politeness үү 独立化 + D=verb 分離 (өгнө үү → өгөөч + үү)" },

  { "id": 24, "lang": "ms", "op": "replace", "allowTextChange": true,
    "segments": [["A","Sila"],["D","tunjukkan"],["B","saya"],["C","menu"]],
    "finding": "#8 #24 ms B=saya 復活 (他 ms 請求文と整合)" },

  { "id": 24, "lang": "tl", "op": "replace", "allowTextChange": true,
    "segments": [["A","Pakitingnan po"],["C","ang menu"]],
    "finding": "#9 #24 tl D=po は politeness particle、A に併合 (D 役解消)" },

  { "id": 13, "lang": "my", "op": "replace", "allowTextChange": true,
    "segments": [["A","ကျေးဇူးပြု၍"],["D","ပေးပါ"],["B","ကျွန်တော့်ကို"],["F","တစ်ခွက်"],["C","ရေ"]],
    "finding": "#10 #13 my A=ကျေးဇူးပြု၍ 復活、F/C 分離 (他 my セルと整合)" },

  { "id": 13, "lang": "bo", "op": "settext", "allowTextChange": true,
    "find": "གནང་རོགས", "newText": "གནང་རོགས་",
    "finding": "#11 #13 bo 末尾 tsheg 付加 (他 bo セルと表記統一)" },

  { "id": 28, "lang": "sw", "op": "replace", "allowTextChange": false,
    "segments": [["G","Je"],["B|C","unaweza kupendekeza"],["F","mkahawa"],["E","mzuri"]],
    "finding": "#12 #28 sw B=you 表示化 (B|C 融合表記、 polysynthesis case)" },

  { "id": 34, "lang": "tlh", "op": "settext", "allowTextChange": true,
    "find": "yIjatlh", "newText": "yIjatlhneS",
    "finding": "#14 #34 tlh politeness suffix -neS 付加 (Klingon honorific)" },

  { "id": 34, "lang": "jbo", "op": "replace", "allowTextChange": true,
    "segments": [["A",".e'o"],["C","tavla"],["B","mutce"],["D","masno"]],
    "finding": "#15 #34 jbo B=more 段階 (mutce) 復活" },

  { "id": 34, "lang": "tok", "op": "replace", "allowTextChange": true,
    "segments": [["A","o"],["C","toki"],["B","pi tenpo"],["D","mute"]],
    "finding": "#16 #34 tok 意味反転修正 (wawa「強く」→ pi tenpo mute「時間をかけて」)" },

  { "id": 28, "lang": "zh_song", "op": "replace", "allowTextChange": true,
    "segments": [["B","您"],["A","可否"],["C","薦"],["D","一家"],["F","好"],["E","酒家"],["G","乎"]],
    "finding": "#17 #28 zh_song 末尾 question particle 乎 復活 (palette G ロール明示化)" },

  { "id": 28, "lang": "ko_bus", "op": "replace", "allowTextChange": true,
    "segments": [["F","좋은"],["E","식당을"],["C","추천해"],["A","주실 수 있나"],["G","예"]],
    "finding": "#18 #28 ko_bus politeness 예 を G に分離 (他 ko 系統と整合)" },

  { "id": 28, "lang": "vi_s", "op": "settext", "allowTextChange": true,
    "find": "hông", "newText": "hông ạ",
    "finding": "#19a #28 vi_s 末尾 ạ 付加 (vi 標準と整合)" },

  { "id": 28, "lang": "vi_c", "op": "settext", "allowTextChange": true,
    "find": "khôông", "newText": "khôông ạ",
    "finding": "#19b #28 vi_c 末尾 ạ 付加 (vi 標準と整合)" },

  { "id": 49, "lang": "jbo", "op": "replace", "allowTextChange": true,
    "segments": [["A","e'o"],["D","tavla"],["B","mi"],["E","lo pluta be"],["F","lo"],["G","vinji tcana"]],
    "finding": "#20 #49 jbo 4ロール融合 (C|E|F|G) 解消 (E/F/G 分離)" },

  { "id": 49, "lang": "tlh", "op": "settext", "allowTextChange": true,
    "find": "HI'ang", "newText": "HI'angneS",
    "finding": "#21 #49 tlh politeness suffix -neS 付加 (Klingon honorific)" },

  { "id": 96, "lang": "vi_s", "op": "settext", "allowTextChange": true,
    "find": "Quẹo", "newText": "Làm ơn quẹo",
    "finding": "#22 #96 vi_s politeness 復活 (他 vi_s 請求文 #13/24/34/49 と整合)" },

  { "id": 24, "lang": "fi", "op": "replace", "allowTextChange": true,
    "segments": [["A","Olkaa hyvä"],["D","näyttäkää"],["B","minulle"],["C","ruokalista"]],
    "finding": "#23 #24 fi modal+inf → imperative 形式 (他 fi 命令文と整合)" },

  { "id": 13, "lang": "fi", "op": "replace", "allowTextChange": true,
    "segments": [["A","Olkaa hyvä"],["D","antakaa"],["B","minulle"],["F","lasi"],["C","vettä"]],
    "finding": "#24 #13 fi 1sg modal → 2pl imperative (Voisinko saada → Olkaa hyvä antakaa)" },

  { "id": 34, "lang": "nl", "op": "replace", "allowTextChange": false,
    "segments": [["A","Alstublieft"],["C","spreek"],["E","u"],["B|D","langzamer"]],
    "finding": "#29 #34 nl B|D 融合表記統一 (langzamer 維持)" },

  { "id": 34, "lang": "hu", "op": "replace", "allowTextChange": false,
    "segments": [["A","Kérem"],["B|D","lassabban"],["C","beszéljen"]],
    "finding": "#30 #34 hu B|D 融合表記統一 (lassabban を B|D に)" },

  { "id": 34, "lang": "sa", "op": "replace", "allowTextChange": false,
    "segments": [["A","कृपया"],["B|D","मन्दतरं"],["C","वदतु"]],
    "finding": "#32 #34 sa B|D 融合表記統一 (मन्दतरं を B|D に)" },

  { "id": 28, "lang": "he", "op": "replace", "allowTextChange": true,
    "segments": [["A","בבקשה"],["G","האם"],["D","תוכל"],["C","להמליץ"],["E","על מסעדה"],["F","טובה"]],
    "finding": "#34 #28 he politeness בבקשה 復活 (他 he 請求文と整合)" },

  { "id": 34, "lang": "ar", "op": "replace", "allowTextChange": false,
    "segments": [["A","من فضلك"],["C","تحدث"],["D","ببطء"],["B","أكثر"]],
    "finding": "#1 #34 ar 副詞句語順入替 (أكثر ببطء → ببطء أكثر)" },

  { "id": 28, "lang": "fa", "op": "settext", "allowTextChange": true,
    "find": "پیشنهاد بدهید", "newText": "پیشنهاد بدهد",
    "finding": "#36 #28 fa modal+imp 重複解消 (بدهید → بدهد 3sg subjunctive)" },

  { "id": 96, "lang": "cy", "op": "replace", "allowTextChange": false,
    "segments": [["B","trowch i'r dde"],["E","y"],["F","nesaf"],["D","groesffordd"],["A","Os gwelwch yn dda"]],
    "finding": "#26 #96 cy politeness particle 文末配置に統一 (他 cy 請求文と整合)" }
]
```

(計 30 actionable edits; 残り 4 件は議論済みだが apply 推奨度低のため structured edit は省略。)

End-of-file

---

## Dev response — round 1 (2026-06-04)

レビューを精読し、提示された 30 件の structured edits をすべて検証しました。「Current」値はすべて data.js と照合し合致を確認。`/tmp/lm_edits_84.json` に 30 件の編集を出力しました。

### 採用した編集 (30/30)

**比較副詞 B+D 融合の B|D 統一表記 (5 件)** — fa/ru/nl/hu/sa の比較副詞形態論的融合を以下の方針で統一:
- **分析形展開 (text 変更あり)**: #34 fa `آهسته‌تر` → `بیشتر + آهسته` (Persian は分析的にも自然なので展開)
- **B|D 融合表記維持 (text 維持)**: ru `медленнее` / nl `langzamer` / hu `lassabban` / sa `मन्दतरं` は形態論的に単一形態素が標準のため、palette consistency 観点で B|D 表記に統一 (segment role 表記更新のみ)

**politeness particle の独立化 (6 件)** — mn/my/ko_bus/pl/hu の verb-融合 politeness を独立 segment として可視化:
- #13 pl: `poproszę` → A:Proszę + D:dać (`-poproszę` 1sg.fut から imperative + politeness 分離)
- #13 hu: `kérek` (1sg 直説) → A:Kérem D:adjon (3sg 命令法、同 hu 他セルと整合)
- #13 mn: `өгнө үү` → D:өгөөч A:үү (politeness particle 独立 + softener form 採用)
- #13 my: F|C `ရေတစ်ခွက်` + A `ပေးပါ` → A:ကျေးဇူးပြု၍ D:ပေးပါ F:တစ်ခွက် C:ရေ
- #28 ko_bus: `주실 수 있나예` → A:주실 수 있나 G:예 (他 ko 変種と一貫)

**bare imperative の politeness 復活 (2 件)**:
- #96 vi_s: `Quẹo` → `Làm ơn quẹo` (settext)
- #34 tlh, #49 tlh: `-neS` honorific suffix 付加 (yIjatlh → yIjatlhneS, HI'ang → HI'angneS)

**意味反転 / lexical 誤用修正 (1 件)**:
- #34 tok: `wawa` (strong) → `pi tenpo mute` (taking much time)

**比較粒度の補完 (1 件)**:
- #34 jbo: `masno` (slow) のみ → B:mutce D:masno (more slowly 構造)
  - Note: 「.e'o」 (リーディングドット) は採用せず、現データ「e'o」 を維持。

**末尾 question / politeness particle 追加 (4 件)**:
- #28 vi_s: `hông` → `hông ạ` (settext)
- #28 vi_c: `khôông` → `khôông ạ` (settext)
- #28 zh_song: 末尾 G:乎 追加 (palette G role 明示化)
- #28 he: A:בבקשה 追加 (他 he 請求文と一貫)

**NP 多重融合の解消 (1 件)**:
- #49 jbo: `C|E|F|G:lo pluta lo vinji tcana` → E:lo pluta be F:lo G:vinji tcana (palette 機能回復)

**modal-fronted polite question vs imperative の register 統一 (2 件)**:
- #13 fi: `Voisinko saada` → A:Olkaa hyvä D:antakaa (2pl imperative + politeness、他 fi 命令文と整合)
- #24 fi: `Voisitteko näyttää` → A:Olkaa hyvä D:näyttäkää (同上)

**B=indirect object 復活 (1 件)**:
- #24 ms: B:saya 追加 (同 ms 内 #13/49 と一貫)

**role 誤割当解消 (1 件)**:
- #24 tl: D:po (politeness) → A:Pakitingnan po に併合 (D role 削除)

**綴り統一 (1 件)**:
- #13 bo: `གནང་རོགས` → `གནང་རོགས་` (末尾 tsheg 付加、他 bo セルと一貫)

**Bantu polysynthesis の B 可視化 (1 件)**:
- #28 sw: `unaweza kupendekeza` → B|C 融合表記 (B=you/2sg subject prefix を表記上認知)

**ar #34 副詞句語順 (1 件)**:
- #34 ar: `أكثر ببطء` → `ببطء أكثر` (segment 順入替のみ、text 維持)

**ar_eg #34 D=slowly 復活 (1 件)**:
- #34 ar_eg: `بشوية` → `بهدوء + أكتر شوية` (D=slowly が segment として可視化)

**fa #28 mood 重複解消 (1 件)**:
- #28 fa: `پیشنهاد بدهید` (2pl.imp) → `پیشنهاد بدهد` (3sg.subj) — modal+imp 重複 mood 解消

**cy #96 politeness 位置統一 (1 件)**:
- #96 cy: A:Os gwelwch yn dda を文頭から文末に移動 (他 cy 請求文と整合、`allowTextChange: true`)
  - Note: 当初 `allowTextChange: false` 案だったが、A の位置移動は rendered text 順序変化のため `true` に変更。

### 未採用 / 議論残し (4 件)

- **指摘 13 (#28 sw `G:Je` の文頭 question particle role 不整合)**: G ロールは clause-final 規約なので palette 違反だが、当該言語の syntax 制約のため再ロールは別途検討要。応急策として B|C 融合 (指摘 12) のみ採用。
- **指摘 25 (#34 eu allocutive 形)**: eu 全体で familiar imperative + Mesedez の中間 register が一貫しており、まとめて方針変更が必要なため本 round はスキップ。
- **指摘 26 (#13/24/34/49 cy politeness 位置)**: 本 round は #96 のみ修正。他 cy セル (#13/24/34/49) の文末配置は既に一貫しているため変更不要。
- **指摘 27 (#49 egy 4ロール融合)**: egy 全体のデータ粒度が粗いため、一括 audit を別 round で推奨。
- **指摘 28 (#28 ar_eg B prefix 分離)**: arabic の subject prefix 分離は形態論的に可能だが慣例で非分離。様子見。
- **指摘 31 (#34 ja_heian/ja_edo)**: レビュアー自身が「指摘なし」扱い。スキップ。
- **指摘 35 (#34 ar_eg)**: 指摘 2 と重複。統合済み。

### Closure 提案

JSON 30 件は palette consistency / language-internal coherence の両面で根拠が明確であり、適用後にレビュアー側で再確認を依頼します。残り議論項目 (指摘 13/25/26/27/28) は別 round または専用 audit (eu allocutive, egy 全体, ar_eg subject prefix policy 等) で扱うことを推奨。

JSON path: `/tmp/lm_edits_84.json`

End-of-file
