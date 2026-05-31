# Hanmap data review #12 — Gan / Xiang / Jin dialectology specialist

## Reviewer self-introduction (ペルソナ自己紹介)

漢語方言学のうち、長江以南・以北の周縁官話と非官話群 — とりわけ贛語(江西)・湘語(湖南)・晋語(山西)、ならびに本データに同梱される徽語(czh)・平話(cnp) — を専門とする研究者として本査読を書く。評価軸は中古音の声母・韻尾・声調カテゴリ(全清/次清/全濁/次濁、舒声/入声、平上去入の陰陽分裂)が各方言にどの反映形(reflex)として現れるかである。贛語については「全濁送気」(中古全濁声母が平仄を問わず有気清音化する贛・客の共通特徴)を、湘語については老湘(双峰型)の全濁有声保持と新湘(長沙型)の陽平のみ部分有声化を、晋語については入声のグロタル止音 -ʔ 保持と入声の陰陽二分(清→陰入 vs 濁→陽入)を主要な検証点とする。徽語は呉語類似の有声声母・-ʔ 入声、平話(広西)は粤語類似の -p/-t/-k・-m/-n/-ŋ 完全保持を期待値とする。一次資料は『中国语言地图集』(中国社会科学院/Language Atlas of China, 1987/2012)、二次資料は Jerry Norman, *Chinese* (Cambridge UP, 1988) 第8章 "Dialects"、および 袁家驊ほか『漢語方言概要』と Margaret Mian Yan, *Introduction to Chinese Dialectology* (LINCOM, 2006)。長沙湘語の声調値は鮑厚星らの記述、太原晋語は侯精一・温端政の記述を内的整合性の照合基準とした。HAN_DATA の二層構造(surface=ローマ字/表記、ipa=音声、各 character の register キー)を逐一 `node -e` で読み出し、現行値を verbatim で確認したうえで以下を報告する。

**Reviewer perspective:** 全濁送気(贛)・有声保持(老湘 vs 新湘)・入声 -ʔ と入声陰陽分裂(晋)、韻尾保持(平話)を軸にした rime-category 反映の内的整合性検証。
**Coverage:** gan(南昌)/ hsn(長沙)/ cjy(太原)/ czh(徽語)/ cnp(平話)の 5 register、入声字・全濁字・声調カテゴリ代表字を中心に全 61 字をサンプリング。
**Notation conventions observed in the file:**
- surface はローマ字転写、ipa は IPA + Chao 調字(˥˦˧˨˩)。声調は surface では上付き数字、ipa では Chao 調字で表す二重表記。
- 入声は ipa で -ʔ または -p̚/-t̚/-k̚(unreleased 記号 ̚ 付き)、舒声は声調字のみ。
- 音節主音的鼻音は ŋ̩(U+0329, 下付き縦線)で表記するのが多数派。
- **注意:** czh は実は徽語(Hui / 徽州語)、cnp は平話(Pinghua / 広西)であり、贛湘晋とは別系統。タスク票の "czh(?) cnp(?)" を lang_names.js で同定済み。期待値は徽語=呉語型、平話=粤語型として設定した。

---

## Issues found

### 1. 中:2 — `gan` / `cjy` / `czh` / `cnp` (surface) — 生 IPA が surface 欄に混入

- Current:
  - gan surface `"tuŋ²¹³"`, ipa `"tuŋ˨˩˧"`
  - cjy surface `"tsuəŋ⁴⁵"`, ipa `"tsuəŋ˦˥"`
  - czh surface `"tsoŋ⁵⁵"`, ipa `"tsoŋ˥˥"`
  - cnp surface `"tsuŋ²²"`, ipa `"tsuŋ˨˨"`
- Expected: surface はローマ字転写にすべき。中:1 と同じ方式で gan `"tung²¹³"`, cjy `"zueng⁴⁵"`, czh `"zong⁵⁵"`, cnp `"zung²²"`。
- Why: 同字の **中:1** では surface がきちんとローマ字化されている(gan `"tung⁴²"`, cjy `"zueng³¹"`, czh `"zong³³"`, cnp `"zung⁴⁴"` — ŋ→ng/ung、ts→z)。中:2 だけ ipa 欄の生 IPA 文字列(ŋ, ə, 声調字を上付き数字に直しただけ)が surface に複製されている。ファイル全体のローマ字慣習(ŋ→ng, ts→z, ə→e/ue)から逸脱した唯一の系統的破れ。hsn のみ正しく `"ten⁴⁵"`。

---

### 2. 行:2 — `gan` / `cjy` / `czh` (surface) — 生 IPA が surface 欄に混入

- Current:
  - gan surface `"hɔŋ⁴⁵"`, ipa `"hɔŋ˦˥"`
  - cjy surface `"xɒ̃¹¹"`, ipa `"xɒ̃˩˩"`
  - czh surface `"ɦɔ̃²²"`, ipa `"ɦɔ̃˨˨"`
- Expected: 行:1 と同方式で gan `"hong⁴⁵"`, cjy `"xang¹¹"`(または鼻母音を示す慣習表記)、czh `"hhong²²"`(行:1 で ɦ→hh と転写している前例あり: czh 行:1 surface `"hhien²²"`/ipa `"ɦiɛ̃˨˨"`)。
- Why: #1 と完全並行。行:1 では gan `"hen⁴⁵"`, cjy `"xing³⁵"`, czh `"hhien²²"` と正しくローマ字化されているのに、行:2 は ɔ/ɒ̃/ɦ/ɔ̃ という IPA 専用字を surface に残す。hsn のみ正しく `"xan¹³"`。#1 と合わせ「:2 異読行だけ surface=IPA」という編集ミスのパターン。

---

### 3. 日 — `gan` (surface/ipa) — 欠落

- Current: surface `undefined`, ipa `undefined`(完全に空)
- Expected: 南昌贛語 日母字。同じ日母の **肉** が gan で `"nyiuq⁵"`/`"ɲiuʔ˥"`(声母 ɲ)である内的証拠から、surface `"nyit"`/ipa `"ɲit̚˥"`(陽入)相当。
- Why: 他の 4 register(hsn `"nyi²⁴"`, cjy `"zeh⁵"`, czh `"ngit⁵"`, cnp `"ni²²"`)は全て populated。「日(太陽/にち)」は方言調査の最基本語彙であり、gan だけ空欄なのは coverage の穴。日母反映を gan 列で検証する唯一の高頻度字が欠ける。

---

### 4. 人 — `gan` (surface/ipa) — 欠落

- Current: surface `undefined`, ipa `undefined`(完全に空)
- Expected: 南昌贛語 日母平声字。肉=ɲ の証拠から surface `"nyin"`/ipa `"ɲin˦˥"`(陽平、gan の陽平調 ˦˥ に従う)相当。
- Why: #3 と同じく gan だけ欠落(hsn `"in¹³"`, cjy `"zeng³⁵"`, czh `"ren²¹³"`, cnp `"neing³³"`)。「人」は全データ中で最も基本的な語彙の一つ。#3・#4 は同一 register・同一声母(日母)で並んで欠落しており、gan 日母行の一括 fill 漏れと推定。

---

### 5. 一 — `cnp` (ipa) — surface は -t 韻尾を持つのに ipa が韻尾を脱落

- Current: surface `"it⁵"`, ipa `"i˥"`
- Expected: ipa `"it̚˥"`(surface の -t と一致させる)
- Why: 平話(広西)は粤語型で入声 -p/-t/-k を完全保持する。cnp の他の入声字は全て ipa に止音を持つ: 立 `"lit̚˥"`、八 `"paːt̚˥"`、北 `"pak̚˥"`、木 `"muk̚˥"`、六 `"lok̚˨˨"`、七 `"tsʰɐt̚˥"`、十 `"sɐp̚˨˨"`。一(質韻 -t、surface も `"it"`)だけ ipa が `"i˥"` と開音節化しているのは明白な転記漏れ。surface↔ipa 不一致。

---

### 6. 十 — `cjy` (ipa) — 入声の陰陽分裂で全濁字が陰入調に誤配

- Current: surface `"seh²"`, ipa `"səʔ˨"`
- Expected: ipa `"səʔ˥"`(陽入 ˥)、surface `"seh⁵"`
- Why: 太原晋語の入声は清声母→陰入(本データ ˨)、濁声母(全濁+次濁)→陽入(本データ ˥)に二分される。本データ cjy 入声は完全にこの規則に従う: 清=一 ˨, 七 ˨, 八 ˨, 足 ˨, 血 ˨, 北 ˨ / 濁=日 ˥, 月 ˥, 木 ˥, 目 ˥, 肉 ˥, 食 ˥, 立 ˥。十は **禅母(全濁)** ゆえ陽入 ˥ であるべきで、同じ全濁入声の **食**(船母)が `"seh⁵"`/`"səʔ˥"` であるのと矛盾。˨ は誤り(『中国语言地图集』太原音系・Yan 2006)。

---

### 7. 六 — `cjy` (ipa) — 入声の陰陽分裂で次濁字が陰入調に誤配

- Current: surface `"lueh²"`, ipa `"luəʔ˨"`
- Expected: ipa `"luəʔ˥"`(陽入 ˥)、surface `"lueh⁵"`
- Why: #6 と同根。六は **来母(次濁)**。本データ cjy の他の次濁入声字は全て陽入 ˥: 立(来母)`"liəʔ˥"`、木(明母)`"muəʔ˥"`、目(明母)`"məʔ˥"`、日(日母)`"ʐəʔ˥"`、月(疑母)`"yəʔ˥"`、肉(日母)`"zəʔ˥"`。六だけ ˨(陰入)なのは内的不整合。来母は次濁であり陽入に入る(太原入声陰陽の標準記述)。

---

### 8. 地 — `hsn` (ipa) — 陽去字に唯一の声調値 ˩˩、兄弟字 右(˨˩)と不一致

- Current: surface `"ti¹¹"`, ipa `"ti˩˩"`
- Expected: ipa `"ti˨˩"`(長沙陽去 ˨˩)、surface `"ti²¹"`
- Why: 長沙湘語の声調体系を本データ内で集計すると、陰平 ˧˧・陽平 ˩˧・上声 ˦˩・陰去 ˦˥・陽去 ˨˩・入声 ˨˦ で整然と分かれる。˩˩(11)はデータ全体で **地ただ一字** にしか現れない孤立調値。地は定母去声=陽去であり、同じ陽去の **右**(云母去声)が `"iəu²¹"`/`"iu˨˩"` と ˨˩ を取るのと一致すべき。˩˩ は ˨˩ のタイプミスと判断(長沙陽去 21:『中国语言地图集』湖南/Yan 2006)。

---

### 9. 上 — `hsn` (ipa) — 長沙に存在しない捲舌音 ʂ

- Current: surface `"shan⁴⁵"`, ipa `"ʂan˦˥"`
- Expected: ipa `"san˦˥"`(または `"saŋ"`)、捲舌 ʂ を避ける
- Why: 長沙湘語は知荘章組を歯茎/舌尖摩擦音に合流させ、捲舌声母 ʂ/ʈʂ を **持たない**(Norman 1988 ch.8; Yan 2006 湘語章)。本データ hsn 内でも同じ歯音系の入声字は捲舌を使わない: 食 `"sz̩˨˦"`、十 `"sɿ˨˦"`、四 `"sɿ˦˥"`(いずれも平 s)。上(禅母)だけ ʂan と捲舌化するのは内的不整合かつ長沙音系に反する。surface の `"shan"` も同根。

---

### 10. 食 — `cnp` (surface/ipa) — 普通話読みの混入(入声韻尾の喪失 + 捲舌)

- Current: surface `"shi²²"`, ipa `"ʂʐ̩˨˨"`
- Expected: surface `"sek"`/`"sik"` 相当、ipa `"sek̚˨˨"`/`"sɪk̚˨˨"`(職韻 -k 保持の入声)
- Why: 食は職韻 **入声**。平話は粤語型で -k を完全保持し、捲舌音を持たない。本データ cnp の他の -k 入声字は北 `"pak̚˥"`、木 `"muk̚˥"`、六 `"lok̚˨˨"` と -k を保つのに、食だけ `"ʂʐ̩˨˨"`(開音節・捲舌・声調 ˨˨)= 普通話 shí の引き写しになっている。粤語 食 `"sɪk̚˨"` が証拠する通り入声 -k 字であり、平話で開音節捲舌になることはない。明白な Mandarin reading の混入。

---

### 11. 月 — `czh` (surface/ipa) — gan 列と byte-identical、徽語に異質な -t̚ 韻尾

- Current: czh surface `"ngyet⁵"`, ipa `"ŋyɛt̚˥"` — gan surface `"ngyet⁵"`, ipa `"ŋyɛt̚˥"` と **完全一致**
- Expected: 徽語の入声慣習(-ʔ)に揃え czh ipa `"ŋyəʔ˥"` 相当、surface `"ngyeh⁵"` 等
- Why: 徽語(czh)の入声は呉語型でグロタル -ʔ または開音節化が支配的。czh 入声字の実態は -ʔ が多数: 一 `"iɛʔ˥"`、八 `"paʔ˥"`、木 `"muʔ˥"`、血 `"ɕyɛʔ˥"`、肉 `"ɲioʔ˥"`、立 `"liʔ˥"`。-t̚ という硬い舌尖閉鎖を保つのは **月** と **日**(#12)だけで、しかも値が gan 列と一字一句同一。徽語が -t を保持しないことと、gan からの複製疑いの二重の証拠で誤りと判断。

---

### 12. 日・目 — `czh` (ipa) — 徽語入声韻尾の不統一(日=-t̚ / 目=開音節)

- Current: 日 czh ipa `"ŋit̚˥"`(-t̚ 保持)、目 czh ipa `"mu˥"`(韻尾なし開音節)
- Expected: 徽語の支配的 -ʔ に統一。日 `"ŋiʔ˥"` 相当、目 `"muʔ˥"`(同じ屋韻 -k の **木** が czh `"muʔ˥"` である内的証拠に揃える)
- Why: czh 入声の主流は -ʔ(#11 参照)。にもかかわらず日は -t̚ を保持し(#11 と同じく gan 複製疑い)、目は -ʔ すら無く完全開音節 `"mu˥"` になっている。同じ **屋韻 -k** の木が `"muʔ˥"` なのに目が `"mu˥"` なのは直接的矛盾。徽語入声の韻尾処理が一字ごとにバラついており、-ʔ への統一が必要。

---

### 13. 食 — `czh` (ipa) — 全濁入声字が舒声平調 ˧˧ に化け、入声性を喪失

- Current: surface `"si³³"`, ipa `"sɿ˧˧"`
- Expected: 入声調 + -ʔ。同じ全濁入声の **十** が czh `"siɪʔ˨˩"` であるのに揃え、`"sɿʔ"` 系の入声形に。
- Why: 食(船母・職韻・入声)が czh では `"sɿ˧˧"` と、陰平相当の舒声平調 ˧˧ を取り、グロタルも止音も無い。徽語で入声が舒声に派入(merger)する変種はあるが、本データ czh の他の入声字(十・足・立など)は ˥/˨˩/˨¹ の入声短調に -ʔ を伴って残っており、食だけ ˧˧ は系内孤立。少なくとも全濁入声の兄弟字 **十**(`"siɪʔ˨˩"`)と整合させるべき。

---

### 14. 南昌入声韻尾の系統的混乱 — `gan` (ipa) — 同一中古韻尾が -t̚/-k̚/-ʔ にばらつく

- Current(中古韻尾を併記):
  - 食(職 -k)`"sɨt̚˥"`、北(德 -k)`"pɛt̚˥"` ← **-k 字なのに -t̚**
  - 目(屋 -k)`"muk̚˥"` vs 木(屋 -k)`"muʔ˥"` ← **同じ屋韻が -k̚ と -ʔ に分裂**
  - 六(屋 -k)`"liuʔ˥"`、肉(屋 -k)`"ɲiuʔ˥"` ← -ʔ
  - 十(緝 -p)`"sɨt̚˥"`、立(緝 -p)`"lit̚˥"` ← **-p 字なのに -t̚**
  - 血(屑 -t)`"ɕyɛʔ˥"` vs 一(質 -t)`"it̚˥"` ← **同じ -t 起源が -ʔ と -t̚ に分裂**
- Expected: 南昌贛語は中古 -p/-t/-k を **単一のグロタル -ʔ に合流** させる(『中国语言地图集』南昌音系; Norman 1988)。原理的には全入声字を -ʔ に統一すべき。最低限、同一韻での分裂(目=muk̚ vs 木=muʔ、食=sɨt̚ vs 六=liuʔ)は解消が必要。
- Why: 韻尾の対応が中古カテゴリと無関係にばらついており(德/職韻 -k が -t̚、緝韻 -p が -t̚)、特に **食(`sɨt̚`)と十(`sɨt̚`)が完全同音** になってしまっている(食=職韻 -k、十=緝韻 -p で本来別韻尾)。南昌が -ʔ 単一合流であれば全て `"...ʔ"` に、もし韻尾を保つ古層を想定するなら中古カテゴリに従って -k/-p を正すべきで、現状はどちらの解釈とも矛盾する系統的エラー。

---

### 15. 平話の母音長 — `cnp` (surface/ipa) — surface "a" が ipa で ɐ/aː/a に三分、対応不統一

- Current:
  - 七 surface `"chat⁵"` / ipa `"tsʰɐt̚˥"`(ɐ)
  - 十 surface `"sap²²"` / ipa `"sɐp̚˨˨"`(ɐ)
  - 八 surface `"pat⁵"` / ipa `"paːt̚˥"`(aː 長母音)
  - 北 surface `"pak⁵"` / ipa `"pak̚˥"`(a 短)
- Expected: 粤語型の aː/ɐ 音韻対立を surface でも区別する(Jyutping 流に aa vs a)。少なくとも長母音 aː を持つ八は surface `"paat"` 等、ɐ を持つ七/十は別綴りに。
- Why: 平話(広西)は粤語同様 aː(長)と ɐ(短)が音韻的に対立する。ところが surface ではこの 4 字すべてが同じ "a" で綴られ、ipa では ɐ(七・十)/ aː(八)/ a(北)の三通りに分かれる。surface↔ipa の母音対応が一対一でなく、aː は cnp 全体で **八 ただ一字** にしか現れない孤立例。長短の対立を表記方針として立てるか、八の `"aː"` を他字に合わせるかの統一が必要。

---

### 16. 二 — `cnp` (surface/ipa) — 舒声字なのに単一声調字 ˨(=˨˨ 不足表記の疑い)

- Current: surface `"ni²"`, ipa `"ni˨"`
- Expected: 二桁の調値輪郭に統一。陽去なら `"ni²²"`/`"ni˨˨"` 等(同じ陽去系の四が cnp `"si˨˨"`)。
- Why: 二は日母去声=陽去の舒声字。ところが cnp の非入声(舒声)字はすべて二桁の調値輪郭で表記される(三 ˥˦、四 ˨˨、山 ˧˧、天 ˨˩、上 ˥˧ …)のに、二だけ単一調字 ˨(surface も上付き一桁 `"²"`)になっている。入声以外で bare single tone-letter を使うのはこの一字のみで、調値の under-specification(˨˨ の脱落)と見られる。surface の上付き `"²"` も同根。

---

## Summary of systematic issues

複数 register・複数字にまたがる再発パターンは以下の通り:

- **(A) `:2` 異読行の surface=IPA 複製(#1, #2):** 中:2・行:2 で gan/cjy/czh/cnp の surface 欄に ipa の生 IPA 文字列(ŋ, ə, ɔ, ɦ, 鼻母音)がそのまま入っている。`:1` 行は正しくローマ字化されているため、`:2` 行だけ surface 生成を忘れた編集ミス。hsn のみ全て正しい。**最優先の系統修正。**

- **(B) 入声の陰陽分裂の局所破綻 — 晋語(#6, #7):** cjy 入声は「清→陰入 ˨ / 濁→陽入 ˥」が体系的に成立しているのに、十(全濁・禅母)と六(次濁・来母)の 2 字だけ陰入 ˨ に誤配。兄弟字(食・立・木・目)が証拠する。

- **(C) 徽語(czh)入声韻尾の不統一(#11, #12, #13):** 支配的な -ʔ に対し、日・月が -t̚(うち月は gan 列と byte-identical の複製疑い)、目が開音節 `mu`、食が舒声平調 ˧˧ へ脱落。同一韻(屋韻)の木 vs 目、全濁入声の十 vs 食で内的矛盾。

- **(D) 南昌(gan)入声韻尾の中古カテゴリ非対応(#14):** -p/-t/-k が -t̚/-k̚/-ʔ に無秩序に分布し、食≡十 の偽同音まで発生。南昌の -ʔ 単一合流という標準記述に反する。

- **(E) Mandarin reading の混入と捲舌の過剰適用(#9, #10):** hsn 上=ʂan(長沙に捲舌なし)、cnp 食=ʂʐ̩(平話に捲舌なし・入声 -k 喪失、普通話 shí の引き写し)。いずれも当該方言の音系に存在しない捲舌を導入し、兄弟字(hsn 食/十、cnp 北/木)と矛盾。

- **(F) 孤立調値・表記不足(#8, #16):** hsn 地=˩˩(全データ唯一の 11、陽去は ˨˩)、cnp 二=単一調字 ˨(舒声で唯一)。いずれも兄弟字の調値輪郭に揃えるべき under-specification / typo。

- **(G) 表記の Unicode 不統一:** 音節主音的 ŋ の syllabicity 記号が gan/czh で U+0329(下付き縦線 ŋ̩)、cnp で U+030D(上付き縦線 ŋ̍)に分かれる(五 字)。同一記号に統一すべき軽微だが明確な不整合。

- **(H) coverage の穴 — gan 日母行(#3, #4):** 日・人の 2 字が gan でのみ完全欠落。同声母(日母)・隣接した欠落で、gan 日母行の一括 fill 漏れと推定。bulk fill タスクとして別パスでも可。

---

## Worker round-1 response (作業者round-1)

各指摘について、`hanmap_data.js` の現行値を verbatim 確認し、内的整合性・一次資料(主に Wiktionary の方言別 IPA 表 = 出典は各字の dialectal pronunciations 節)を照合して判断した。適用分は orchestrator が直列適用する。

### 適用(applied by orchestrator this round)

**#1 中:2 surface に生IPA混入** — gan/cjy/czh/cnp の surface を中:1 のローマ字慣習(ŋ→ng, ts→z, ə→ue/o)に揃えて修正。ipa はそのまま。
- gan `"tuŋ²¹³"`→`"tung²¹³"`、cjy `"tsuəŋ⁴⁵"`→`"zueng⁴⁵"`、czh `"tsoŋ⁵⁵"`→`"zong⁵⁵"`、cnp `"tsuŋ²²"`→`"zung²²"`。中:1 が gan `"tung⁴²"`/cjy `"zueng³¹"`/czh `"zong³³"`/cnp `"zung⁴⁴"` であることが内的証拠。

**#2 行:2 surface に生IPA混入** — 行:1(gan `"hen"`, cjy `"xing"`, czh `"hhien"`(ɦ→hh), cnp `"haing"`)の慣習に揃え、行:2 の母音で修正。
- gan `"hɔŋ⁴⁵"`→`"hong⁴⁵"`、cjy `"xɒ̃¹¹"`→`"xang¹¹"`、czh `"ɦɔ̃²²"`→`"hhong²²"`、cnp `"haŋ³³"`→`"hang³³"`(cnp は #2 本文に未列挙だが surface に生 ŋ が残り ŋ→ng 慣習に反するため併せて修正)。

**#3 日 gan 欠落 fill** — surface `"nyiq⁵"` / ipa `"ɲiʔ˥"` を追加。出典: Wiktionary 日 の Gan, Nanchang = /ȵiʔ⁵/(声母 ȵ=本ファイル ɲ、入声 -ʔ、陽入 ˥)。gan は -ʔ を surface で "q" と綴る(肉 `"nyiuq⁵"`/`"ɲiuʔ˥"`、木 `"muq⁵"`)内的慣習に一致。Wiktionary が /ȵiʔ/(-ʔ)を示す点は #14(南昌 -ʔ 合流説)とも整合。

**#4 人 gan 欠落 fill** — surface `"nyin⁴⁵"` / ipa `"ɲin˦˥"` を追加。出典: Wiktionary 人 の Gan, Nanchang 白話 = /n̠ʲin³⁵/(声母 ɲ)。声調は本データの gan 陽平が一律 ˦˥(行:1 `"hɛn˦˥"`、頭 `"tʰɛu˦˥"`、龍 `"luŋ˦˥"`、牛 `"ɲiu˦˥"`)であることに合わせ ˦˥ を採用(Wikt の 35 は別調値体系のため、ファイル内整合を優先)。

**#5 一 cnp ipa の -t 脱落** — ipa `"i˥"`→`"it̚˥"`。surface `"it⁵"` と一致させ、cnp 他入声(立 `"lit̚˥"`、八 `"paːt̚˥"`、北 `"pak̚˥"`)の止音保持に揃える。明白な surface↔ipa 不一致。

**#6 十 cjy 入声陰陽** — surface `"seh²"`→`"seh⁵"`、ipa `"səʔ˨"`→`"səʔ˥"`。禅母=全濁→陽入 ˥。兄弟字 食(船母)`"seh⁵"`/`"səʔ˥"` が証拠。

**#7 六 cjy 入声陰陽** — surface `"lueh²"`→`"lueh⁵"`、ipa `"luəʔ˨"`→`"luəʔ˥"`。来母=次濁→陽入 ˥。立/木/目/日/月/肉 が全て ˥ で証拠。

**#8 地 hsn 孤立調値** — surface `"ti¹¹"`→`"ti²¹"`、ipa `"ti˩˩"`→`"ti˨˩"`。˩˩ は全データ唯一。定母去声=陽去、兄弟字 右 `"iəu²¹"`/`"iu˨˩"` に一致。

**#9 上 hsn 捲舌** — surface `"shan⁴⁵"`→`"san⁴⁵"`、ipa `"ʂan˦˥"`→`"san˦˥"`。長沙は捲舌 ʂ を持たず、hsn 他の歯音(食 `"sz̩˨˦"`、十 `"sɿ˨˦"`、四 `"sɿ˦˥"`)は s。韻は触らず声母の脱捲舌のみの最小修正。

**#10 食 cnp 普通話読み混入** — surface `"shi²²"`→`"sik²²"`、ipa `"ʂʐ̩˨˨"`→`"sɪk̚˨˨"`。出典: Wiktionary 食 の Nanning Pinghua = /sɪk̚²²/(romanization "sik6")。現行 ˨˨ と職韻 -k 保持・無捲舌に一致。cnp 北 `"pak̚˥"`/木 `"muk̚˥"` が内的証拠。

**#11 月 czh が gan 列と byte-identical・-t̚** — surface `"ngyet⁵"`→`"ngye⁵"`、ipa `"ŋyɛt̚˥"`→`"ŋyɛʔ˥"`。徽語(Tunxi)の母音 /ȵyɛ/(Wiktionary 月 Hui)を採り、本データ czh 入声の支配的 -ʔ(一 `"iɛʔ˥"`、八 `"paʔ˥"`、立 `"liʔ˥"`)と surface 無コーダ綴り(一 `"ie"`、八 `"pa"`、立 `"li"`)に揃える。gan 列との完全一致(コピー artifact)を解消。

**#12 日 czh の -t̚(#11 と同じ gan コピー疑い)** — surface `"ngit⁵"`→`"ngi⁵"`、ipa `"ŋit̚˥"`→`"ŋiʔ˥"`。Wiktionary 日 の Hui(Shexian /ni/、Tunxi /ȵie/)は全て開音節で、-t̚ を持つ徽語変種は無い。本データ czh の -ʔ 入声模型(Tunxi 型、cf. 一 /iʔ⁵⁵/)に従い -ʔ 化。-t̚ は明白な誤り。

**#16 二 cnp 単一調字** — surface `"ni²"`→`"ni²²"`、ipa `"ni˨"`→`"ni˨˨"`。舒声(日母去声=陽去)で bare single tone-letter はこの一字のみ。兄弟字 四 `"si˨˨"` に揃える under-specification 修正。

### 保留(held with rationale)

**#12(目の部分)・#13 食 czh** — 保留。Wiktionary の徽語は **目**(Tunxi /mo¹¹/、Jixi /mɔ²²/)・**食**(Shexian /ɕi²²/、Tunxi /ɕi¹¹/)とも **開音節**で、本データ czh 目 `"mu˥"`・食 `"sɿ˧˧"` の開音節形は一次資料と整合する。査読者が要求する「目→`muʔ`」「食→-ʔ+˨˩」は徽語実態に反するため適用せず。徽語は同一字でも -ʔ 保持(十 `"siɪʔ˨˩"`)と開音節(食・目)が混在する真の方言内変異であり、機械的 -ʔ 統一はできない。食の ˧˧ は Wiktionary の ²²/¹¹ と僅かに異なるが ˧˧ も czh の有効調値で明白な typo とは言えず据え置き。

**#14 南昌入声韻尾の -ʔ 単一合流** — 保留(system-level normalization)。Wiktionary が日=/ȵiʔ/ を示す通り南昌 -ʔ 合流説は妥当だが、食 `sɨt̚`/北 `pɛt̚`/目 `muk̚`/十 `sɨt̚`/立 `lit̚`/一 `it̚` 等 10字超の gan 入声全体を書き換える大規模パスであり、コーダ区別を残す編集方針の可能性も排除できない。単一の明白 typo ではないため、チームの明示的 endorsement を待って別パスで一括処理すべき。最悪ケース(食=十 の偽同音、両者 `sɨt̚˥`)は本コメントに記録しエスカレート。

**#15 平話 aː/ɐ の surface 区別** — 保留(表記方針の選択)。八 `"paːt̚"` の長母音 aː を surface で "aa" 等に区別するか、ɐ/aː を統合するかは Jyutping 流 aa/a を導入する全体方針の決定であり、個別字の局所修正ではない。査読者の指摘は妥当だが方針合意が必要。

**#G Unicode ŋ̩(U+0329)vs ŋ̍(U+030D)** — 保留(別パス)。番号付き指摘外の軽微な正規化。五 字ほかで syllabic ŋ の付加記号が register 間で不統一。明確な不整合だが、全ファイル横断の Unicode 正規化として一括処理が望ましく、本ラウンドの個別 data fix の範囲外。


---

## Reviewer round-2 response (再評価 round-2)

作業者 round-1 の適用分・保留分を、`hanmap_data.js` の現行値に対して `node -e` で逐一 verbatim 照合した。確認したキー構造の注意点として、本字 **中・行** は `"中:1"`/`"中:2"`/`"行:1"`/`"行:2"` という異読サフィックス付きキーで格納されていること(本体キー `中`/`行` は存在しない)を再確認し、その上で検証した。

### 適用分の live-data 検証(全件 PASS)

| # | 字/register | 期待値 | live現行値 | 判定 |
|---|---|---|---|---|
| #1 | 中:2 gan/cjy/czh/cnp surface | tung²¹³ / zueng⁴⁵ / zong⁵⁵ / zung²² | tung²¹³ / zueng⁴⁵ / zong⁵⁵ / zung²² | ✓ |
| #2 | 行:2 gan/cjy/czh/cnp surface | hong⁴⁵ / xang¹¹ / hhong²² / hang³³ | hong⁴⁵ / xang¹¹ / hhong²² / hang³³ | ✓ |
| #3 | 日 gan | nyiq⁵ / ɲiʔ˥ | nyiq⁵ / ɲiʔ˥ | ✓ |
| #4 | 人 gan | nyin⁴⁵ / ɲin˦˥ | nyin⁴⁵ / ɲin˦˥ | ✓ |
| #5 | 一 cnp ipa | it̚˥ | it̚˥ | ✓ |
| #6 | 十 cjy | seh⁵ / səʔ˥ | seh⁵ / səʔ˥ | ✓ |
| #7 | 六 cjy | lueh⁵ / luəʔ˥ | lueh⁵ / luəʔ˥ | ✓ |
| #8 | 地 hsn | ti²¹ / ti˨˩ | ti²¹ / ti˨˩ | ✓ |
| #9 | 上 hsn | san⁴⁵ / san˦˥ | san⁴⁵ / san˦˥ | ✓ |
| #10 | 食 cnp | sik²² / sɪk̚˨˨ | sik²² / sɪk̚˨˨ | ✓ |
| #11 | 月 czh | ngye⁵ / ŋyɛʔ˥ | ngye⁵ / ŋyɛʔ˥ | ✓ |
| #12(日) | 日 czh | ngi⁵ / ŋiʔ˥ | ngi⁵ / ŋiʔ˥ | ✓ |
| #16 | 二 cnp | ni²² / ni˨˨ | ni²² / ni˨˨ | ✓ |

特記:
- **#11 の byte-identical コピー疑い解消を確認**:gan 月 は `ŋyɛt̚˥`(-t̚ 保持)のまま、czh 月 は `ŋyɛʔ˥`(-ʔ)に分化。両列はもはや一致せず、コピー artifact は解消された。✓
- #6/#7 の入声陰陽分裂(全濁・次濁→陽入 ˥)は兄弟字(食・立・木・目・日・月・肉)と整合。声調・止音とも live で確認。✓
- #8 の孤立調値 ˩˩ は消滅し、˨˩(右 `iu˨˩` と一致)に揃った。✓
- #9/#10 の捲舌脱落・Mandarin 読み除去も live で確認。cnp 食は職韻 -k を回復し、Wiktionary Nanning Pinghua /sɪk̚²²/ の出典どおり。✓

13 件すべて、claimed どおりに live data へ反映されていた。**missing-fix(過去に発生した「適用と称して未反映」)は本ファイルでは検出されず。**

### 保留分の adjudication

**#13 食 czh / #12 目 czh(開音節)— ✗ reject the original demand → ACCEPT worker's hold(won't-fix)**
作業者は Wiktionary 徽語で 目(Tunxi /mo/・Jixi /mɔ/)・食(Shexian /ɕi/・Tunxi /ɕi/)が **開音節** であることを示し、live の czh 目 `mu˥`・食 `sɿ˧˧` がこの一次資料と整合すると論証した。徽語が同一字内で -ʔ 保持(十 `siɪʔ˨˩`)と開音節(目・食)を併存させる real intra-dialect variation は、私の専門的期待値(徽語=呉語型で -ʔ 多数)とも矛盾しない — 呉語/徽語の入声は字ごとに -ʔ 保持と舒声派入(merger)がまだらに進行する。よって「機械的 -ʔ 統一」を求めた私の当初指摘は撤回する。食の ˧˧ も Wiktionary ²²/¹¹ と僅差だが czh の有効調値域内で、断定的 typo とは言えない。**won't-fix として受容。**

**#14 南昌(gan)入声韻尾の系統的混乱(食≡十 偽同音含む)— △ partial / documented known-limitation で CLOSE**
live 再確認:gan 食 `sɨt̚˥` と gan 十 `sɨt̚˥` は依然 **byte-identical**(食=職韻 -k、十=緝韻 -p で本来別韻尾)。これは客観的に望ましくない偽同音であり、私は問題の実在性を維持する。ただし本件は単一 typo ではなく gan 入声 10 字超の中古コーダ体系全体に関わる system-level 正規化であり、(a) -ʔ 単一合流に統一する説、(b) 古層コーダ保持として中古 -p/-t/-k を正す説の **二択の編集方針決定** を要する。作業者は問題を本コメントに記録・エスカレートし、チームの明示 endorsement 待ちとして別パスに回した。round round-2 のループ終了規範に照らし、これは「外部データ要求」ではなく方針合意待ちの documented decision であり、私はこれ以上同一要求を繰り返さない。**既知の限界(human linguist / チーム方針決定を要する)として明示記録のうえ受容。**

**#15 平話 aː/ɐ の surface 区別 — ✗ reject as actionable bug → ACCEPT as notation-policy**
ipa 側(八 `paːt̚˥` 長 vs 七 `tsʰɐt̚˥`・十 `sɐp̚˨˨` 短)は粤語型 aː/ɐ 対立を正しく保持しており音韻的には正確。surface で "aa/a" を立てるかは Jyutping 流表記方針の全体決定で、個別字バグではない。**convention-level choice として受容。**

**#G syllabic ŋ の Unicode 不統一(U+0329 vs U+030D)— △ minor, documented**
live 再確認:五 で gan `ŋ̩`(U+0329)・czh `ŋ̩`(U+0329)・cnp `ŋ̍`(U+030D)と付加記号が割れている(二 czh `n̩` は U+0329)。明確な不整合だが番号付き指摘外の cosmetic な Unicode 正規化であり、全ファイル横断パスが望ましい。**軽微・別パス事項として記録。actionable な data error ではない。**

### 新規 issue

検証中に新たな明白エラーは検出しなかった(newIssueCount = 0)。#11 のコピー解消・#6/#7 の調値・#8 の孤立調値除去はいずれも周辺字との整合を回復しており、副作用なし。

### Scorecard

- 適用 13 件:全件 live-data verified PASS、missing-fix 無し。
- 保留 4 群(#13/#12目, #14, #15, #G):#13/#12目 は一次資料(Wiktionary 徽語)で won't-fix を支持し受容;#14 は実在の偽同音を含むが system-level 方針決定待ちの documented known-limitation として受容;#15 は表記方針、#G は cosmetic Unicode で受容。
- 残る actionable な data error:**無し。**

明白エラーはすべて修正・検証済みで、残余項目はいずれも (a) 一次資料に裏打ちされた cross-variety / 方言内変異の許容、(b) チーム方針決定を要する system-level 正規化(#14, #15, #G)として明示文書化済み。ループ終了規範に従い、これ以上同一要求を繰り返す actionable な次手は無いため close する。なお #14 の gan 入声コーダ体系(食≡十 偽同音)は **human linguist / チーム方針決定を要する既知の限界** として申し送る。

**File status: CLOSED** — nothing left to address.
