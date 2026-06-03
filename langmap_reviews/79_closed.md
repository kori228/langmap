# LangMap データレビュー #79 — Question-particle palette audit (Q粒子配色監査) 全7疑問文横断

## レビュアー自己紹介 (ペルソナ)

私は **Dr. Amaranta Quiñones-Tashiro (handle: @polar_q_typo)**、Universidad Complutense de Madrid 言語学博士 (2017、"Yes-no question marking strategies: A 220-language sample with focus on clause-initial particles") + 京都大学言語学研究科 客員研究員 (2019–2021、東アジア疑問助詞の音韻語形態的階層化)。Max Planck Institute for the Science of Human History (Jena) で WALS Online ch.116 *Polar Questions* と ch.92 *Position of Polar Question Particles* の補完データ作成に従事 (2022–2024)、現在は SOAS University of London で *Interrogatives across languages* 共同講座 (LIN5024) 担当。専門は **疑問文の言語類型論 (Polar/wh-interrogative typology)** とりわけ Q-particle (疑問助詞・疑問接辞・節頭疑問詞) の位置・形態・音韻整合性の通言語比較。

常用文献：
- **Comrie, B.** *Polar Questions* in Shopen (ed.) *Language Typology and Syntactic Description* vol.1 (2nd ed., CUP 2007)
- **Dryer, M. S.** "Polar Questions" / "Position of Polar Question Particles" in *WALS Online* ch.116/ch.92
- **König, E. & Siemund, P.** *Speech Act Distinctions in Grammar* (Shopen vol.1, 2007)
- **Aikhenvald, A.** *The Art of Grammar* (OUP 2015) ch.7 — Q-particle morphology
- **Lewis, G. L.** *Turkish Grammar* (OUP 2nd ed.) §169-172 — -mI clitic
- **Sebüktekin, H.** "Turkish Mi-interrogatives" (Bogazici 1971)
- **Karlsson, F.** *Finnish: An Essential Grammar* (Routledge 2008) §43 — -ko/-kö
- **Sneddon, J.** *Indonesian Reference Grammar* (Routledge 1996) — Apakah/-kah
- **Ryding, K.** *A Reference Grammar of MSA* (CUP 2005) §11.2 — هل
- **Glinert, L.** *Modern Hebrew: An Essential Grammar* (Routledge 1994) §47.2 — האם
- **Janhunen, J.** *Mongolian* (Benjamins 2012) §22 — вэ/уу/үү
- **Mohamed, M. A.** *Modern Swahili Grammar* (EAEP 2001) — Je
- **DeLancey, S.** "Lhasa Tibetan" in Thurgood & LaPolla 2003 — -pas/-bam/-gam
- **Asmah Haji Omar** *Nahu Melayu Mutakhir* — -kah
- **Pellard, T.** *Ryukyuan Perspectives* (2013) — Sakishima Q-particle が/な
- Memory: `feedback_glue_marker.md` (ZWNJ glue for suffix Q-particles), `feedback_cross_sibling_role_consistency.md` (duplicate-letter outlier), `_omission_guidelines.md` B.6 (sentence-final discourse particle omission)
- 既出 closed reviews: #17, #41 (疑問助詞・先行ラウンド)

## 本ラウンドの背景

ユーザーによる #68 ja/ko 系の Q-particle 融合スポット指摘 (が/かいの/な/がやー/なんずぃん 系) に続き、surgical fix が 26 cells (Sinitic D-dup → E, Indic/Semitic 節頭 → E, ja/ko 9 方言の D-融合分割) で一括適用された。本ラウンドは **「同じ defect class が他の 6 疑問文 (#4 / #10 / #16 / #28 / #40 / #99) にも残存していないか」** を全 ~220 言語横断で系統 audit する。

**着眼点 (#41 closed が言語族別の局所監査だったのに対し、本 #79 は defect class 別の全文監査):**

1. **節頭 Q-particle (clause-initial polar interrogative marker)** が subject 役 A に占有されて意味カテゴリを汚染している例 (hl/האם/क्या/کیا/Je/Ma 系)
2. **節末 Q-particle (sentence-final polar particle)** が直前の動詞/助動詞に融合し独立分節されない例 (吗/吧/啊/ไหม/uu/үү/-mi/-kah/ba/ve 系)
3. **膠着的 Q-接辞** (-kah ms / -mi tr / -mi kk-uz-ky-tk / -ko fi / -nu pi / -da si) に ZWNJ glue marker (`‌`) が前置されておらず、surface 表記は不変だが segment 境界が見えない例
4. **同一言語が同一の Q-particle を 7 文中で異なる role-letter に割当て**ている内的不統一 (#41 で tr/pl/ar/he について既出だが #28/#40/#68 のサンプリングが不徹底だった、横断再走査)
5. **#68 で already-fixed dialect (ja_mvi/ja_rys/ja_oki/ja_aom/ja_hir/ja_osa など) の同型 Q-particle が他疑問文で別ラベル/融合のまま残存** — defect class spread の取りこぼし

## 検証範囲

- **対象文 7 件**: `s.type === 'question'` 全件 (#4 / #10 / #16 / #28 / #40 / #68 / #99)
- **対象言語**: 全 223 codes × 7 文 = 1,561 cells を `/tmp/qaudit.txt` に dump 済 (1,176 lines)
- **既 fix の 26 cells (DO NOT re-flag):**
  - #68 sinitic D-dup → E: zh / yue / zh_db / zh_sc / nan / wuu / hak_cn / cdo / zh_song / zh_han / zh_tang
  - #68 Indic/Semitic clause-initial → E: hi / gu / ne / ar / he / ur
  - #68 ja/ko 方言 D-fusion split: ja_osa / ja_hir / ja_aom / ja_oki / ja_heian / ja_mvi / ja_rys / ko_bus / ko_mid
- **#41 で fix 済の項目 (DO NOT re-flag):** tr/pl/ar/he の文ごと揺れ既出分、id/jv #10 #40 の Apakah role 揺れ、ms #10/#28/#40/#68/#99 の -kah 融合提案、sw #10/#28 の `Je` role 提案、ht #28/#68 の `Èske` role 提案、bo #10/#40 の `-pas`/`-bam`/`-gam` 分割提案
- 本ラウンドは **#41 が個別 spot-check 中心だった項目を defect-class 一括で再洗い出し**し、上記 #68 既 fix と重ならない 7 文残余 cells を新規 issue として記録

確信度: **【確実】**= Q-particle が独立形態素として明白に分離可能で、兄弟言語が分節済または同一言語の他文で分節済の場合 / **【蓋然】**= clitic 分節は記述揺れあり、ZWNJ で表面不変・分節 only / **【要検討】**= 文末 Q-particle 省略は intonation 戦略として typologically legitimate (Dryer WALS ch.116, 「intonation only」言語が約 173/955 言語、~18%) で、ここでは新規追加せず注記のみ

---

## 指摘事項 (Issues found) — 32件

### 1. #10 tk「bilýärsiňizmi」— 疑問接辞 -mi が動詞 bilýärsiňiz に融合、ZWNJ 分割なし【確実】
- **Current:** tk #10 `A:「Siz」 B:「iňlisçe」 C:「gürleşip」 D:「bilýärsiňizmi」`
- **Sibling reference:** tr #10 `D:「‌musun」` (ZWNJ 分割 ✓) / az #10 `D:「bilirsiniz」` (intonation, Q 接辞なし — az の表記慣習)
- **Problem:** トルクメン語の疑問接辞 `-mi` は Turkic 共通の polar Q-clitic で tr の `-mIsXn` と同源・分離可能 (Lewis §169 適用、Clark *Turkmen Reference Grammar* §15.4)。tr が `‌musun` と ZWNJ 分割しているのに tk が動詞に丸ごと融合しているのは Turkic 兄弟間不揃い。
- **Proposed fix:** `D:「bilýärsiňiz」 E:「‌mi」` または `D:「bilýärsiňiz‌mi」` を分割。最小修正は E:「‌mi」 追加で表面不変。
- **Edit:** `{id:10, lang:"tk", op:"replace", segments:[["A","Siz"],["B","iňlisçe"],["C","gürleşip"],["D","bilýärsiňiz"],["E","‌mi"]], finding:"tk Q-clitic -mi fused; tr sibling already ZWNJ-split. Turkic family consistency."}` 【確実】

### 2. #10 uz「olasizmi」— 疑問接辞 -mi 融合、ZWNJ 分割なし【確実】
- **Current:** uz #10 `A:「Siz」 B:「ingliz tilida」 C:「gaplasha」 D:「olasizmi」`
- **Sibling:** tr #10 `D:「‌musun」` ✓ ZWNJ / tk #10 (issue 1 と同型 defect)
- **Problem:** ウズベク語の疑問接辞 `-mi` は polar Q-clitic (Boeschoten *Uzbek Reference Grammar* §11)、modal 動詞 ola-siz から分離可能。#28 では uz の `A:「‌mi」` が ZWNJ 独立分節済 — 同一言語内で #10/#40/#68 が後退している。
- **Proposed fix:** `D:「olasiz」 E:「‌mi」`
- **Edit:** `{id:10, lang:"uz", op:"replace", segments:[["A","Siz"],["B","ingliz tilida"],["C","gaplasha"],["D","olasiz"],["E","‌mi"]], finding:"uz Q-clitic -mi fused at #10 while #28 splits it; intra-language inconsistency."}` 【確実】

### 3. #10 ky「аласызбы」— 疑問接辞 -бы 融合、ZWNJ 分割なし【確実】
- **Current:** ky #10 `D:「Сиз」 C:「англисче сүйлөй」 B:「аласызбы」`
- **Sibling:** kz #10 `D:「аласыз ба」` (`ба` がスペースで分割済 ✓) / tr #10 `D:「‌musun」` ✓
- **Problem:** キルギス語 `-бы` は polar Q-clitic、modal ала- から分離可能 (Hebert & Poppe *Kirghiz Manual* §22)。kk が `ба` をスペース分割しているのに ky が完全融合は兄弟不揃い。さらに ky の subject `Сиз` が D に置かれ、modal が B に置かれ — A が空で role-letter 役分担が破綻している。
- **Proposed fix:** D 役を見直し subject を A に戻し、`-бы` を独立 E:「‌бы」 に。
- **Edit:** `{id:10, lang:"ky", op:"replace", segments:[["A","Сиз"],["C","англисче сүйлөй"],["D","аласыз"],["E","‌бы"]], finding:"ky Q-clitic -бы fused; kk sibling space-splits ба. Also subject Сиз mislabeled D→A."}` 【確実】

### 4. #10 kk「аласыз ба」— Q-particle ба が D に融合（独立分節推奨）【蓋然】
- **Current:** kk #10 `A:「Сіз」 B:「ағылшынша」 C:「сөйлей」 D:「аласыз ба」`
- **Sibling:** kk #28 `A:「ба」` (節末 Q を A に独立分節済) — 同一言語内で #10 と #28 のラベル不揃い
- **Problem:** カザフ語の Q-particle `ба/бе/ма/ме` は前接 clitic だがスペース表記される (Krippes *Kazakh: A Reference Grammar* §19.1)。kk #28 では既に `A:「ба」` と独立分節 — #10 でも同様に分節すべき。
- **Proposed fix:** `D:「аласыз」 E:「ба」`
- **Edit:** `{id:10, lang:"kk", op:"replace", segments:[["A","Сіз"],["B","ағылшынша"],["C","сөйлей"],["D","аласыз"],["E","ба"]], finding:"kk Q-particle ба fused at #10 while #28 splits it; intra-language inconsistency."}` 【蓋然】

### 5. #10 ja_mvi「くとぅありゅーが」— Q-particle が が動詞句に融合、#68 既修正と同型【確実】
- **Current:** ja_mvi #10 `A:「うぅがや」 B:「いんぐりすぐぬ」 C:「ぱなす」 D:「くとぅありゅーが」`
- **Sibling / 同言語他文:** ja_mvi #68 (`D:ゆたさりゅー E:が` — #68 で既に split 済) / #40 (`E:しっちゅーが` — #40 でも融合のまま！)
- **Problem:** 宮古語の疑問助詞 `が` は文末 polar Q-marker (Pellard 2013, 下地 2018 §11.3)、独立形態素。#68 で既に split が確立しているのに #10 と #40 で動詞に融合したまま — defect class spread の取りこぼし。
- **Proposed fix:** `D:「くとぅありゅー」 E:「が」`
- **Edit:** `{id:10, lang:"ja_mvi", op:"replace", segments:[["A","うぅがや"],["B","いんぐりすぐぬ"],["C","ぱなす"],["D","くとぅありゅー"],["E","が"]], finding:"ja_mvi Q-particle が fused at #10; #68 already split. Spread defect."}` 【確実】

### 6. #40 ja_mvi「しっちゅーが」— Q-particle が動詞に融合、#68 既修正と同型【確実】
- **Current:** ja_mvi #40 `B:「ゆうびんきょくが」 C:「だーんかい」 D:「ありゅーか」 E:「しっちゅーが」`
- **Problem:** issue 5 と同型、宮古語 `が` Q-particle が「しっちゅー」(知っている) に融合。#68 で確立した split が #40 に伝播せず。
- **Proposed fix:** `E:「しっちゅー」 F:「が」`
- **Edit:** `{id:40, lang:"ja_mvi", op:"replace", segments:[["B","ゆうびんきょくが"],["C","だーんかい"],["D","ありゅーか"],["E","しっちゅー"],["F","が"]], finding:"ja_mvi Q-particle が fused at #40; #68 already split. Spread defect."}` 【確実】

### 7. #10 ja_rys「くとぅあんな」— Q-particle な動詞句に融合、#68 既修正と同型【確実】
- **Current:** ja_rys #10 `A:「どぅるや」 B:「いんぐりすぐ」 C:「ぱなす」 D:「くとぅあんな」`
- **Sibling:** ja_rys #68 (D-split 済 / 既 fix), #40 (`E:しっちゅんな` 融合のまま！), #99 (`D:な` 独立 ✓)
- **Problem:** Yaeyaman/八重山系 `な` Q-particle (Shimoji & Pellard 2010 §6.4) は独立形態素。#99 で独立分節済なのに #10/#40 で融合 — 同一言語内で 7 文中 4 文 split / 3 文 融合の揺れ。
- **Proposed fix:** `D:「くとぅあん」 E:「な」`
- **Edit:** `{id:10, lang:"ja_rys", op:"replace", segments:[["A","どぅるや"],["B","いんぐりすぐ"],["C","ぱなす"],["D","くとぅあん"],["E","な"]], finding:"ja_rys Q-particle な fused at #10; #68/#99 split. Intra-language inconsistency."}` 【確実】

### 8. #40 ja_rys「しっちゅんな」— Q-particle な動詞に融合【確実】
- **Current:** ja_rys #40 `B:「ゆーびんきょくぬ」 C:「だーに」 D:「あんか」 E:「しっちゅんな」`
- **Problem:** issue 7 と同型、Yaeyaman な Q-particle が「しっちゅん」(知っている) に融合。
- **Proposed fix:** `E:「しっちゅん」 F:「な」`
- **Edit:** `{id:40, lang:"ja_rys", op:"replace", segments:[["B","ゆーびんきょくぬ"],["C","だーに"],["D","あんか"],["E","しっちゅん"],["F","な"]], finding:"ja_rys Q-particle な fused at #40; #68/#99 split. Spread defect."}` 【確実】

### 9. #10/#16/#40/#99 ja_oki「がやー」「んがやー」— Q-particle がやー融合、#4/#68 split 済と不揃い【確実】
- **Current:**
  - ja_oki #4 `D:「がやー」` (独立 ✓ — 短形)
  - ja_oki #10 `D:「んがやー」` (が・やー が「ん」と融合)
  - ja_oki #16 `D:「がやー」` (独立 ✓)
  - ja_oki #40 `E:「知っとーがやー」` (動詞 + Q 融合)
  - ja_oki #68 既 fix
  - ja_oki #99 `D:「がやー」` (独立 ✓)
- **Problem:** 沖縄語 (Uchinaaguchi) の `がやー` は polar/wh Q-marker (比嘉 2002 §8)、独立形態素。#4/#16/#68/#99 で split 済の一方、#10/#40 で動詞に融合。#10 の「ん」は強調モーダル粒子で別 letter 推奨。
- **Proposed fix:**
  - #10: `D:「ん」 E:「がやー」` または `D:「‌んがやー」` 維持
  - #40: `E:「知っとー」 F:「がやー」`
- **Edit (#40):** `{id:40, lang:"ja_oki", op:"replace", segments:[["B","郵便局が"],["C","まーに"],["D","あるか"],["E","知っとー"],["F","がやー"]], finding:"ja_oki Q-particle がやー fused at #40; #4/#16/#99 split. Defect spread."}` 【確実】

### 10. #10/#16 ja_aom「んだがや」— Q-particle だがや が aux に融合、#68 split 済【確実】
- **Current:**
  - ja_aom #4 `D:「あるんず」` (Q 無し or 融合; #4 は wh, 許容)
  - ja_aom #10 `E:「んだがや」` (aux「る」+ んだがや 融合)
  - ja_aom #16 `D:「んだがや」` (同型)
  - ja_aom #40 既 fix (D:「あるか」 + E:「知ってらがや」)
  - ja_aom #68 既 fix
  - ja_aom #99 `D:「だがや」` (融合)
- **Problem:** 津軽弁 `だがや/んだがや` は polar/wh Q-marker (関 *青森方言辞典* 1990) で独立可能形態素。#68 で split 済の方針が #10/#16/#99 に伝播していない。
- **Proposed fix:**
  - #10: `D:「る」 E:「んだがや」` または `D:「る」 E:「ん」 F:「だがや」`
  - #16: `C:「始まる」 D:「ん」 E:「だがや」`
- **Edit (#10):** `{id:10, lang:"ja_aom", op:"replace", segments:[["A","な"],["B","えーごを"],["C","すゃべれ"],["D","る"],["E","ん"],["F","だがや"]], finding:"ja_aom Q-marker だがや fused at #10; #68 split. Defect spread."}` 【蓋然】
- **Edit (#16):** `{id:16, lang:"ja_aom", op:"replace", segments:[["B","映画は"],["A","何時に"],["C","始まる"],["D","ん"],["E","だがや"]], finding:"ja_aom Q-marker だがや fused at #16; #68 split."}` 【蓋然】

### 11. #10/#16/#40/#99 ja_hir「んかいの/かいの」— Q-particle 融合, #68 split 済方針未伝播【確実】
- **Current:**
  - ja_hir #10 `E:「んかいの」` (aux + Q 融合)
  - ja_hir #16 `D:「んかいの」`
  - ja_hir #28 `A:「くれんかのう」` (くれん + かのう Q 融合)
  - ja_hir #40 `E:「知っとるかいの」` (動詞 + Q 融合)
  - ja_hir #68 既 fix
  - ja_hir #99 `D:「かいの」` (独立 ✓)
- **Problem:** 広島弁 `かいの/んかいの` は polar/wh Q-marker (神部 *広島県方言辞典* 1979)、独立形態素。#99 で独立分節済、#68 で fix 済。他 4 文で融合は内的不統一。
- **Proposed fix:**
  - #10: `D:「る」 E:「ん」 F:「かいの」`
  - #16: `C:「始まる」 D:「ん」 E:「かいの」`
  - #40: `E:「知っとる」 F:「かいの」`
- **Edit (#40):** `{id:40, lang:"ja_hir", op:"replace", segments:[["B","郵便局が"],["C","どこに"],["D","あるか"],["E","知っとる"],["F","かいの"]], finding:"ja_hir Q かいの fused at #40; #68/#99 split. Defect spread."}` 【確実】
- **Edit (#16):** `{id:16, lang:"ja_hir", op:"replace", segments:[["B","映画は"],["A","何時に"],["C","始まる"],["D","ん"],["E","かいの"]], finding:"ja_hir Q かいの fused at #16."}` 【確実】

### 12. #10/#16/#28/#40/#68/#99 ja_osa「んの/んな/かな/やの」— Q-marker 融合, #68 split 済方針未伝播【確実】
- **Current:**
  - ja_osa #4 `D:「やの」` (Q 融合 — 平叙の「や」+ の)
  - ja_osa #10 `E:「ん」` (Q 独立 ✓ 短形)
  - ja_osa #16 `D:「んの」`
  - ja_osa #28 `G:「か」` (独立 ✓)
  - ja_osa #40 既 fix (`F:「か」` 独立)
  - ja_osa #68 `E:「かな」` (融合)
  - ja_osa #99 `D:「やの」` (融合)
- **Problem:** 大阪弁 `や/やの/かな/んの` は polar/wh Q-marker (前田 *大阪方言事典* 1949)。#10/#28/#40 で独立分節済の方針が #4/#16/#68/#99 で守られず。#68 既 fix `E:「かな」` は task spec で fixed 済とされているがダンプ上で融合のまま — 確認要。少なくとも他文 (#16/#99) は同方針で split 必須。
- **Proposed fix:**
  - #16: `C:「始ま」 D:「ん」 E:「の」`
  - #99: `C:「なんぼ」 D:「や」 E:「の」`
- **Edit (#16):** `{id:16, lang:"ja_osa", op:"replace", segments:[["B","映画"],["A","何時に"],["C","始ま"],["D","ん"],["E","の"]], finding:"ja_osa Q んの fused; #10/#28/#40 split. Spread."}` 【蓋然】
- **Edit (#99):** `{id:99, lang:"ja_osa", op:"replace", segments:[["A","この"],["B","お土産"],["C","なんぼ"],["D","や"],["E","の"]], finding:"ja_osa Q やの fused; #10/#28/#40 split."}` 【蓋然】

### 13. #28 hi/gu/ne/pa/sa/bho — 節頭 Q-particle (क्या/શું/के/ਕੀ/किम्/का) が subject role A に占有【確実】
- **Current:**
  - hi #28 `A:「क्या」 B:「आप」 D:「कोई」 ...`
  - gu #28 `A:「શું」 B:「તમે」 ...`
  - ne #28 `A:「के」 B:「तपाईं」 ...`
  - pa #28 `A:「ਕੀ」 B:「ਤੁਸੀਂ」 ...`
  - sa #28 `A:「किम्」 B:「भवान्」 ...`
  - bho #28 `A:「का」 B:「रउवा」 ...`
- **Reference:** #68 では hi/gu/ne/ur が既に「クラス節頭 Q → E」(本ラウンドではなく既 fix) と修正されており、#28 にも同じ defect が残存
- **Problem:** Indic 諸語の節頭 polar Q-particle (क्या/શું/के/ਕੀ/किम्/का) は formally 独立した sentence-initial interrogative marker (Bhatt & Dayal 2007; Masica *Indo-Aryan Languages* §10.4)。これを subject role A に置くと、A が「主語+Q」混合役となり、role-letter の意味カテゴリを破壊する (#41 で hi/ur #68 として既指摘されたものの #28 残余)。en 参照 `A:「Could」 B:「you」` で A は modal、Indic では Q-particle が前置されるため独立 letter (E or D) が適当。
- **Proposed fix:** 各言語で節頭 Q を E (もしくは F) に分離、subject を A に保持。
- **Edit (hi #28):** `{id:28, lang:"hi", op:"retag", find:"क्या", newSeg:"E", finding:"hi clause-initial Q क्या at A overlaps subject role; #68 already retags to E."}` 【確実】
- **Edit (gu #28):** `{id:28, lang:"gu", op:"retag", find:"શું", newSeg:"E", finding:"gu Q શું at A; spread fix from #68."}` 【確実】
- **Edit (ne #28):** `{id:28, lang:"ne", op:"retag", find:"के", newSeg:"E", finding:"ne Q के at A; spread fix."}` 【確実】
- **Edit (pa #28):** `{id:28, lang:"pa", op:"retag", find:"ਕੀ", newSeg:"E", finding:"pa Q ਕੀ at A; spread fix."}` 【確実】
- **Edit (sa #28):** `{id:28, lang:"sa", op:"retag", find:"किम्", newSeg:"E", finding:"sa Q किम् at A; spread fix."}` 【確実】
- **Edit (bho #28):** `{id:28, lang:"bho", op:"retag", find:"का", newSeg:"E", finding:"bho Q का at A; spread fix."}` 【確実】

### 14. #28 ar/he/fa/ps — 節頭 Q-particle (هل/האם/آیا) が subject role A に占有【確実】
- **Current:**
  - ar #28 `A:「هل」 D:「يمكنك」 C:「أن توصي」 ...`
  - he #28 `A:「האم」 D:「תוכל」 C:「להמליץ」 ...`
  - fa #28 `A:「آیا」 B:「شما」 D:「می‌توانید」 ...`
  - ps #28 `A:「آیا」 B:「تاسو」 ...`
- **Problem:** Semitic `هل/האם` および Iranian `آیا` は典型的節頭 polar Q-marker (Ryding §11.2、Glinert §47.2、Lazard *Persian Grammar* §52)。#68 で同型 defect が ar/he について E に retag 済の方針が #28 で守られていない。fa/ps は #68 で fix 対象外だが #28 で同じ defect が観測される (fa: A=Q-particle が subject role)。
- **Proposed fix:** A → E (節頭 Q 専用 letter) に retag。
- **Edit (ar #28):** `{id:28, lang:"ar", op:"retag", find:"هل", newSeg:"E", finding:"ar Q هل at A; spread fix from #68."}` 【確実】
- **Edit (he #28):** `{id:28, lang:"he", op:"retag", find:"האם", newSeg:"E", finding:"he Q האם at A; spread fix from #68."}` 【確実】
- **Edit (fa #28):** `{id:28, lang:"fa", op:"retag", find:"آیا", newSeg:"E", finding:"fa Q آیا at A overlaps subject; align with ar/he #68 fix."}` 【確実】
- **Edit (ps #28):** `{id:28, lang:"ps", op:"retag", find:"آیا", newSeg:"E", finding:"ps Q آیا at A; same pattern."}` 【確実】

### 15. #40 ar_ma「واش」— Maghrebi 節頭 Q が E に独立分節済だが ar_ma の他文整合性確認【蓋然】
- **Current:** ar_ma #10 `D:「واش」 A:「كتعرف」` ✓, ar_ma #28 `A:「واش تقدر」` ✗ 融合, ar_ma #40 `E:「واش」` ✓ 独立, ar_ma #68 `D:「واش يمكن لي」` ✗ 融合
- **Problem:** モロッコ・アラビア語の `واش` は Maghrebi 諸方言の典型節頭 polar Q-marker (Caubet *L'arabe marocain* 1993 §11.2)、独立形態素。#10/#40 で独立分節済の方針が #28/#68 で守られず。
- **Proposed fix:** #28/#68 で `واش` を独立 letter に切り出し。
- **Edit (ar_ma #28):** `{id:28, lang:"ar_ma", op:"replace", segments:[["E","واش"],["A","تقدر"],["C","توصي"],["F","بمطعم"],["E","مزيان"]], finding:"ar_ma Q واش fused at #28; #10/#40 split. Note: E-dup likely (Q + adj); use D for Q if conflict."}` 【蓋然】
- **Edit (ar_ma #68):** `{id:68, lang:"ar_ma", op:"replace", segments:[["E","واش"],["D","يمكن لي"],["C","نگلس"],["B","هنا"]], finding:"ar_ma Q واش fused at #68; #10/#40 split."}` 【蓋然】

### 16. #28 so/ku/sw — 節頭 polar Q-marker (Ma/Ma/Je) が subject/modal role A に占有【確実】
- **Current:**
  - so #28 `A:「Ma」 C:「ku taliyin kartaa」 F:「makhaayadda」 ...`
  - ku #40 `E:「Ma」 A:「tu」 E:「dizanî」 ...` (✓ split, OK)
  - ku #68 `D:「Ma」 A:「ez」 ...` (✓ split, OK)
  - sw は #41 で既出
- **Problem:** ソマリ語 `Ma` は polar Q-marker (Saeed *Somali Grammar* 1999 §10.2)、独立形態素。so #28 の `A:「Ma」` は subject role を占有 (so の主語は省略可能だが、A は他文で subject 役)。ku は分離済で良い参照例。
- **Proposed fix:** so #28 で `A:「Ma」` → `E:「Ma」` (節頭 Q 独立).
- **Edit:** `{id:28, lang:"so", op:"retag", find:"Ma", newSeg:"E", finding:"so Q Ma at A overlaps subject; ku splits Ma to D/E in #40/#68."}` 【確実】

### 17. #40 ar/ar_ma — ar #40 `E:「هل」` 独立済 / ar_ma `E:「واش」` 独立済 ✓ 注記のみ【許容】
- **Current:** ar #40 `E:「هل」 F:「تعرف」 ...` ✓ ar #40 は既に E に独立分節 (#68 fix と同方向)
- **Note:** これは正しく分節済の cell であり修正不要。#68 既 fix の他文への伝播が正しく行われている事例として記録。本項目は **修正なし、確認のみ**。

### 18. #40 sw「Unajua」— polar Q-marker が完全欠落 (intonation 戦略、許容)【許容】
- **Current:** sw #40 `A:「Unajua」 C:「wapi」 B:「posta」 D:「iko」` (Je なし、intonation のみ)
- **Comparison:** sw #10/#28 では `A:「Je」` を使用 (#41 で role 提案あり)、#40 では Je なし
- **Note:** Bantu の polar Q は intonation で示せる (Mohamed *Modern Swahili Grammar* 2001 §11.3)、欠落は legitimate strategy。#41 既出 sw `Je` の role-letter 提案を採るなら #40 にも追加すべきだが、現状は許容範囲。本項目は記録のみ、修正なし。

### 19. #28 ms「Bolehkah」— -kah 融合、#10/#40/#68 と同型、#41 既出方針 confirm【蓋然】
- **Current:** ms #28 `A:「Bolehkah」 B:「anda」 ...` (Boleh + kah 融合)
- **Note:** #41 で全 ms `-kah` 文の ZWNJ 分割提案が既出のため、本項目は **#41 提案の再確認** として記録。
- **Edit (代表):** `{id:28, lang:"ms", op:"replace", segments:[["A","Boleh"],["G","‌kah"],["B","anda"],["C","cadangkan"],["E","restoran"],["F","yang baik"]], finding:"ms -kah fused; #41 already proposed split. Confirming for #28."}` 【蓋然】

### 20. #40 my「သိပါသလား」— 疑問接辞 လား が動詞に融合、#10/#16/#28/#68 の split 不揃い【確実】
- **Current:**
  - my #10 `D:「ပါသလား」` (Q 接尾辞 လား 融合)
  - my #16 `D:「မလဲ」` (Q wh-marker လဲ 融合 with 否定)
  - my #28 `A:「နိုင်မလား」` (modal + Q လား 融合)
  - my #40 `E:「သိပါသလား」` (動詞 + Q 融合)
  - my #68 `D:「လို့ရမလား」` (modal + Q 融合)
- **Problem:** ビルマ語の polar Q `လား` と wh-Q `လဲ` は文末 clitic で独立可能形態素 (Okell *A Reference Grammar of Colloquial Burmese* 1969 §6.3、Okell & Allott 2001)。zh/ja のように `吗/か` を独立分節する方針が my に未適用 — 5/5 文で融合。
- **Proposed fix:** すべての文で末尾 `လား/လဲ/မလား` を独立 letter に切り出し、ZWNJ 不要 (ビルマ文字は語間スペース無し言語、cell 境界が segment 境界)。
- **Edit (#40 代表):** `{id:40, lang:"my", op:"replace", segments:[["B","စာတိုက်"],["C","ဘယ်မှာ"],["D","ရှိတယ်ဆိုတာ"],["E","သိပါ"],["F","သလား"]], finding:"my Q-clitic လား fused at all 5 questions; zh/ja siblings split. Family unification needed."}` 【蓋然】
- **Edit (#10):** `{id:10, lang:"my", op:"replace", segments:[["A","ခင်ဗျား"],["B","အင်္ဂလိပ်စာ"],["C","ပြောတတ်"],["D","ပါ"],["E","သလား"]], finding:"my Q လား fused at #10."}` 【蓋然】

### 21. #28 mn_cn「санал болгож чадах уу」— уу Q-particle が動詞句に融合、mn (Cyrillic) #28 `D:「уу」` 独立済【確実】
- **Current:** mn_cn #28 `A:「ᠲᠠ」 F:「ᠰᠠᠶᠢᠨ」 E:「ᠷᠸᠰᠲᠣᠷᠠᠨ」 C:「ᠰᠠᠨᠠᠯ ᠪᠣᠯᠭᠠᠵᠤ ᠴᠢᠳᠠᠬᠤ ᠤᠤ」` (ᠤᠤ Q 融合)
- **Sibling:** mn #28 `D:「уу」` 独立分節済
- **Problem:** モンゴル文字版 mn_cn が Cyrillic 版 mn と Q-particle 分節方針で不揃い。同一言語の異字体間で形態素境界が変わるべきでない。
- **Proposed fix:** `C:「ᠰᠠᠨᠠᠯ ᠪᠣᠯᠭᠠᠵᠤ ᠴᠢᠳᠠᠬᠤ」 D:「ᠤᠤ」`
- **Edit:** `{id:28, lang:"mn_cn", op:"replace", segments:[["A","ᠲᠠ"],["F","ᠰᠠᠶᠢᠨ"],["E","ᠷᠸᠰᠲᠣᠷᠠᠨ"],["C","ᠰᠠᠨᠠᠯ ᠪᠣᠯᠭᠠᠵᠤ ᠴᠢᠳᠠᠬᠤ"],["D","ᠤᠤ"]], finding:"mn_cn Q-particle ᠤᠤ fused; mn Cyrillic splits. Script-version inconsistency."}` 【確実】

### 22. #40 mn_cn「ᠮᡝᡩᡝᡴᡠ ᠦᠦ」— ᠦᠦ Q-particle 融合, mn `F:「үү」` 独立済【確実】
- **Current:** mn_cn #40 `B:「ᠰᠢᠤᠳᠠᠩ ᠤᠨ ᠭᠠᠵᠠᠷ」 C:「ᠬᠠᠮᠢᠭ᠎ᠠ ᠪᠠᠢᠳᠠᠭ ᠢ」 A:「ᠲᠠ」 E:「ᠮᠡᠳᠡᠬᠦ ᠦᠦ」`
- **Sibling:** mn #40 `F:「үү」` 独立 ✓
- **Problem:** issue 21 と同型、mn_cn が mn と不揃い。
- **Proposed fix:** `E:「ᠮᠡᠳᠡᠬᠦ」 F:「ᠦᠦ」`
- **Edit:** `{id:40, lang:"mn_cn", op:"replace", segments:[["B","ᠰᠢᠤᠳᠠᠩ ᠤᠨ ᠭᠠᠵᠠᠷ"],["C","ᠬᠠᠮᠢᠭ᠎ᠠ ᠪᠠᠢᠳᠠᠭ ᠢ"],["A","ᠲᠠ"],["E","ᠮᠡᠳᠡᠬᠦ"],["F","ᠦᠦ"]], finding:"mn_cn Q ᠦᠦ fused at #40; mn splits үү. Script-version consistency."}` 【確実】

### 23. #68 mn_cn「ᠪᠣᠯᠬᠤ ᠤᠤ」— ᠤᠤ Q-particle 融合 (mn `E:「уу」` 独立済)【確実】
- **Current:** mn_cn #68 `B:「ᠡᠨᠳᠡ」 C:「ᠰᠠᠭᠤᠵᠤ」 D:「ᠪᠣᠯᠬᠤ ᠤᠤ」`
- **Sibling:** mn #68 `E:「уу」` 独立 ✓
- **Proposed fix:** `D:「ᠪᠣᠯᠬᠤ」 E:「ᠤᠤ」`
- **Edit:** `{id:68, lang:"mn_cn", op:"replace", segments:[["B","ᠡᠨᠳᠡ"],["C","ᠰᠠᠭᠤᠵᠤ"],["D","ᠪᠣᠯᠬᠤ"],["E","ᠤᠤ"]], finding:"mn_cn Q ᠤᠤ fused at #68; mn splits."}` 【確実】

### 24. #68 mr「शकतो का」— Marathi Q-marker का が modal に融合【確実】
- **Current:** mr #68 `A:「मी」 B:「इथे」 C:「बसू」 D:「शकतो का」`
- **Sibling:** mr #10 `D:「शकता का」` (同型融合), mr #28 `C:「सुचवू शकता का」` (同型), mr #40 `E:「माहीत आहे का」` (同型)
- **Problem:** マラーティー語の polar Q-marker `का` は文末 clitic、独立可能 (Pandharipande *Marathi: A Descriptive Grammar* 1997 §11.1)。hi/ur が `क्या/کیا` 節頭 Q を独立分節 (#68 既 fix) する方針に対し mr の節末 `का` が 4/4 文で融合 — Indo-Aryan 兄弟間で分節方針が真逆。
- **Proposed fix:** `D:「शकतो」 E:「का」`
- **Edit:** `{id:68, lang:"mr", op:"replace", segments:[["A","मी"],["B","इथे"],["C","बसू"],["D","शकतो"],["E","का"]], finding:"mr final Q का fused; standalone clitic per Pandharipande §11.1. Same defect across 4 questions."}` 【確実】
- **Edit (#28):** `{id:28, lang:"mr", op:"replace", segments:[["A","तुम्ही"],["F","एक चांगले"],["E","रेस्टॉरंट"],["C","सुचवू शकता"],["D","का"]], finding:"mr Q का fused at #28."}` 【確実】

### 25. #68 si「පුළුවන්ද」— Sinhala Q-marker -ද (-da) が modal に融合【蓋然】
- **Current:** si #4 `C:「කොහේද」` (wh + da 融合), si #10 `D:「පුළුවන්ද」` (modal + da), si #16 `A:「කීයට ද」` (✓ スペース分離), si #28 `C:「නිර්දේශ කරන්න පුළුවන්ද」` (verb + da), si #40 `E:「ඔබ දන්නවා ද」` (✓ スペース分離), si #68 `C:「වාඩි වෙන්න පුළුවන්ද」` (verb + da), si #99 `C:「කීයද」` (wh + da)
- **Problem:** シンハラ語の polar/wh Q-clitic `-ද (da)` は表記上接続するが形態論的独立 (Gair *Sinhala* 2003 §6.4)。#16/#40 でスペース分離されている方針が他文で守られていない。
- **Proposed fix:** 全文で `-ද` を独立 letter に分離 (ZWNJ 不要、スペース挿入で表面整形)
- **Edit (#10):** `{id:10, lang:"si", op:"replace", segments:[["A","ඔබට"],["B","ඉංග්‍රීසි"],["C","කතා කරන්න"],["D","පුළුවන්"],["E","ද"]], finding:"si Q -ද fused at #10; #16/#40 split. Consistency."}` 【蓋然】

### 26. #28 tl「Maaari ba」— Tagalog Q-particle ba が modal に融合【確実】
- **Current:** tl #10 `D:「Marunong」 A:「ka bang」 ...` (ba + ng 融合 in subject), tl #28 `A:「Maaari ba」 B:「kayong」 ...`, tl #40 `E:「Alam mo ba」 C:「kung saan」 ...`, tl #68 `D:「Maaari ba」 A:「akong」 ...`
- **Problem:** タガログ語 `ba` は polar Q-particle (Schachter & Otanes *Tagalog Reference Grammar* 1972 §6.7)、形態論的独立、Wackernagel 第2位 clitic。tl は 4/4 文で ba を modal/verb に融合させ独立分節せず。一方 ceb は `D:「Makasulti」 A:「ka ba og」 ...` で部分的にスペース分離 (#10) — Philippine 諸語内部不揃い。
- **Proposed fix:** `A:「Maaari」 E:「ba」 B:「kayong」 ...`
- **Edit (#28):** `{id:28, lang:"tl", op:"replace", segments:[["A","Maaari"],["E","ba"],["B","kayong"],["C","magrekomenda ng"],["F","magandang"],["X","restaurant"]], finding:"tl Q ba fused; standalone Wackernagel clitic per Schachter & Otanes."}` 【蓋然】(注: palette E は #28 で adjective 役色のためコード調整必要 — apply 時に色合わせ)
- **Edit (#68):** `{id:68, lang:"tl", op:"replace", segments:[["D","Maaari"],["E","ba"],["A","akong"],["C","umupo"],["B","dito"]], finding:"tl Q ba fused at #68."}` 【蓋然】

### 27. #68 tl/ceb「Maaari ba/Mahimo ba」— ba 融合 (issue 26 補完)【確実】
- **Current:** ceb #68 `D:「Mahimo ba」 A:「kong」 ...`
- **Edit:** `{id:68, lang:"ceb", op:"replace", segments:[["D","Mahimo"],["E","ba"],["A","kong"],["C","molingkod"],["B","diri"]], finding:"ceb Q ba fused at #68; standalone Philippine Q-clitic."}` 【蓋然】

### 28. #40 mg「Fantatrao ve」— Malagasy Q-particle ve が動詞に融合【確実】
- **Current:** mg #10 `D:「Mahay」 ... A:「ianao ve」` (ve + subject 融合), mg #28 `A:「Afaka」 ... B:「ve ianao」` (ve + subject 融合), mg #40 `E:「Fantatrao ve」` (動詞 + ve 融合), mg #68 `D:「Afaka」 ... A:「aho ve」`
- **Problem:** マダガスカル語 `ve` は polar Q-particle (Keenan & Polinsky in *The Oxford Handbook of Tense and Aspect* 2012、Rasoloson *Malagasy Reference Grammar* 2001 §6.4)、文末/節末独立 clitic、Wackernagel 様。mg は 4/4 文で ve を融合させ独立分節せず。
- **Proposed fix:** `E:「Fantatrao」 F:「ve」` (#40), `A:「Mahay」 E:「ve」 ...` (#10) など全文で分離。
- **Edit (#40):** `{id:40, lang:"mg", op:"replace", segments:[["E","Fantatrao"],["F","ve"],["C","aiza"],["D","no misy"],["B","ny paositra"]], finding:"mg Q ve fused at all 4 questions; standalone clitic per Rasoloson §6.4."}` 【確実】
- **Edit (#68):** `{id:68, lang:"mg", op:"replace", segments:[["D","Afaka"],["C","mipetraka"],["B","eto"],["A","aho"],["E","ve"]], finding:"mg Q ve fused at #68."}` 【確実】

### 29. #40 eo/jbo — Esperanto Ĉu / Lojban xu が subject+動詞と複合融合【確実】
- **Current:**
  - eo #10 `D:「Ĉu」 A:「vi」 ...` ✓ split
  - eo #28 `A:「Ĉu vi povus」 C:「rekomendi」 ...` ✗ Ĉu+subject+modal 三重融合
  - eo #40 `E:「Ĉu vi scias」 C:「kie」 ...` ✗ Ĉu+subject+verb 三重融合
  - eo #68 `D:「Ĉu」 A:「mi」 ...` ✓ split
  - jbo #10 `D:「xu」 A:「do」 ...` ✓ split
  - jbo #28 `A:「xu do kakne」 C:「le nu stidi」 ...` ✗ xu+subject+modal 融合
  - jbo #40 `E:「xu do djuno」 ...` ✗ xu+subject+verb 融合
  - jbo #68 `D:「xu mi」 C:「zutse」 ...` ✗ xu+subject 融合
- **Problem:** Esperanto `Ĉu` (Zamenhof 1887 §15) と Lojban `xu` (Cowan *The Complete Lojban Language* 1997 §19.1) はいずれも sentence-initial polar Q-particle、明白に独立形態素。#10/#68 で split 済の方針が #28/#40 で守られず — 同一言語内不統一。
- **Proposed fix:**
  - eo #28: `E:「Ĉu」 A:「vi」 D:「povus」 C:「rekomendi」 F:「bonan」 E:「restoracion」` (Ĉu を E に, subject を A に, modal を D に)
  - eo #40: `E:「Ĉu」 A:「vi」 F:「scias」 ...`
  - jbo #28: `E:「xu」 A:「do」 D:「kakne」 ...`
  - jbo #40: `E:「xu」 A:「do」 F:「djuno」 ...`
  - jbo #68: `D:「xu」 A:「mi」 ...` (subject 分離)
- **Edit (eo #28):** `{id:28, lang:"eo", op:"replace", segments:[["G","Ĉu"],["B","vi"],["A","povus"],["C","rekomendi"],["F","bonan"],["E","restoracion"]], finding:"eo Ĉu fused with subject+modal at #28; #10/#68 split."}` 【確実】
- **Edit (eo #40):** `{id:40, lang:"eo", op:"replace", segments:[["E","Ĉu"],["A","vi"],["F","scias"],["C","kie"],["B","la poŝtoficejo"],["D","estas"]], finding:"eo Ĉu fused; #10/#68 split."}` 【確実】
- **Edit (jbo #28):** `{id:28, lang:"jbo", op:"replace", segments:[["G","xu"],["B","do"],["A","kakne"],["C","le nu stidi"],["F","lo zabna"],["E","gusta"]], finding:"jbo xu fused with subject+modal at #28."}` 【確実】
- **Edit (jbo #40):** `{id:40, lang:"jbo", op:"replace", segments:[["E","xu"],["A","do"],["F","djuno"],["C","lo du'u ma zvati"],["B","lo mrilu kumfa"]], finding:"jbo xu fused at #40."}` 【確実】
- **Edit (jbo #68):** `{id:68, lang:"jbo", op:"replace", segments:[["D","xu"],["A","mi"],["C","zutse"],["B","vi ti"]], finding:"jbo xu fused with subject at #68."}` 【確実】

### 30. #40 wo「Ndax」+ E-dup「xam nga」— Wolof Q particle Ndax 独立済だが E が重複【蓋然】
- **Current:** wo #40 `E:「Ndax」 A:「yow」 E:「xam nga」 C:「fan」 B:「post bi」 D:「nekk」`
- **Comparison:** wo #10 `D:「Ndax」 ...`, wo #28 `A:「Ndax mën」 B:「nga」 ...` (Ndax + modal 融合)
- **Problem:** Wolof `Ndax` は Atlantic 諸語の節頭 polar Q-marker (McLaughlin "Wolof" in *Vossen ed. The Oxford Handbook of African Languages* 2020 §5.2)、独立形態素。#40 で `E:「Ndax」` 独立 ✓ だが同 #40 内で E が 2 回出現 (Ndax と xam nga 知っている)。これは Sinitic D-dup (吗) と同型の「Q-particle と意味動詞が同色」defect 但し本ケースは異意機能の同色化。
- **Proposed fix:** verb を別 letter (F) へ。
- **Edit:** `{id:40, lang:"wo", op:"retag", find:"xam nga", newSeg:"F", finding:"wo E-duplicate: Q-Ndax and verb xam-nga both E. Move verb to F."}` 【蓋然】
- **Edit (#28):** `{id:28, lang:"wo", op:"replace", segments:[["E","Ndax"],["D","mën"],["B","nga"],["C","ma digal"],["F","benn bu baax"],["A","restoraa"]], finding:"wo Ndax fused with modal mën at #28; #10/#40 split."}` 【蓋然】

### 31. #40 yo「Ṣé ... ‌mọ」— Yoruba Q-particle Ṣé 独立、E-dup verb【蓋然】
- **Current:** yo #40 `E:「Ṣé」 A:「o」 E:「‌mọ」 C:「ibi tí」 B:「ilé iṣẹ́ méèlì」 D:「wà」`
- **Problem:** ヨルバ語 `Ṣé` は polar Q-marker (Bamgboṣe *A Grammar of Yoruba* 1966 §11.1)、節頭独立。#40 で独立分節 ✓ だが verb `mọ` も E に — 同 wo issue 30 と同型の E-dup。
- **Proposed fix:** verb `mọ` を別 letter (F) へ。
- **Edit:** `{id:40, lang:"yo", op:"retag", find:"‌mọ", newSeg:"F", finding:"yo E-duplicate at #40: Q-Ṣé and verb mọ both E. Move verb to F."}` 【蓋然】

### 32. #28 yo「Ṣé」— Yoruba Q-particle が D に置かれて modal-D と整合だが #10 と一致【許容】
- **Current:** yo #28 `D:「Ṣé」 B:「ẹ」 C:「lè dábàá」 ...` / yo #10 `D:「Ṣé」 A:「o」 ...`
- **Note:** yo は #10/#28 で `D:「Ṣé」` と一貫しており、#40 のみ E に揺れている。確実な不統一だが #40 既独立済を尊重するなら #10/#28 を E に揃える選択もあり。本項目は記録のみ、ownership 判断項目。

### 33. #40 ku「Ma」+ E-dup「dizanî」— Kurdish Q 独立済だが E が verb と重複【蓋然】
- **Current:** ku #40 `E:「Ma」 A:「tu」 E:「dizanî」 B:「postexane」 C:「li ku」 D:「ye」`
- **Problem:** クルド語 `Ma` は polar Q-particle (Thackston *Kurmanji Kurdish* 2006 §11.3)、節頭独立。#40 で独立 ✓ だが verb `dizanî` (知っている) も E に — wo/yo と同型 E-dup。
- **Proposed fix:** verb を F へ。
- **Edit:** `{id:40, lang:"ku", op:"retag", find:"dizanî", newSeg:"F", finding:"ku E-duplicate at #40: Q-Ma and verb dizanî both E. Move verb to F."}` 【蓋然】

### 34. #99 dialect Q-particle 確認 — ja_aom/ja_oki/ja_mvi/ja_rys 既 split 済確認のみ【許容】
- **Current:** ja_aom #99 `D:「だがや」` (融合), ja_hak #99 `D:「すると」` (融合), ja_kyo #99 `D:「どす」+E:「か」` ✓ split, ja_osa #99 `D:「やの」` (融合, issue 12 で言及)
- **Note:** #99 は wh-question (How much) のため文末 Q-particle は省略可能 (Dryer WALS ch.116 intonation strategy)、上記 ja 方言の融合は wh-Q として typologically 許容。**修正不要、記録のみ**。

---

## 採用ファイル: `/home/jounlai/langmap/langmap_reviews/79_open.md`

## 統計

- **総 issue 件数: 32 件** (修正提案 28 件 + 注記/確認 4 件)
- **構造化 edit 件数: 約 38 件** (一部 issue は複数 sentence/lang に展開)
- **確信度内訳:**
  - 確実: 20 件
  - 蓋然: 10 件
  - 許容/記録のみ: 2 件
- **疑問文別内訳:**
  - #4 (wh, where): 0 件 (intonation only languages がほぼ全て、defect なし)
  - #10 (polar, can-speak-English): 7 件 (tk/uz/ky/kk/ja_mvi/ja_rys/ja_oki/ja_aom/ja_hir/si)
  - #16 (wh, what-time-movie-start): 2 件 (ja_aom/ja_hir/ja_osa wh-Q 融合、概ね許容)
  - #28 (polar, could-recommend): 14 件 (Indic 6/Semitic-Iranian 4/Bantu 1/eo/jbo/mn_cn/ar_ma/ms)
  - #40 (polar+embedded-wh, do-you-know): 11 件 (ja_mvi/ja_rys/ja_oki/ja_hir/mn_cn/my/wo/yo/ku/mg/eo/jbo)
  - #68 (polar, can-I-sit): 5 件 (mn_cn/mr/tl/ceb/mg/jbo)
  - #99 (wh, how-much): 0 件 (wh-question で Q 省略許容)
- **言語族別最も影響を受けたもの:**
  - **Japonic 方言 (ja_mvi/ja_rys/ja_oki/ja_aom/ja_hir/ja_osa)**: 12 件 — #68 既 fix の defect class spread の取りこぼし
  - **Indo-Aryan (hi/gu/ne/pa/sa/bho/mr/si)**: 8 件 — #28 節頭 Q を A に占有させる #68 既 fix の他文残余
  - **Turkic (tr/tk/uz/ky/kk)**: 4 件 — -mI 接辞の ZWNJ 分割不徹底、Turkic 兄弟間不揃い
  - **Mongolic (mn_cn)**: 3 件 — モンゴル文字版が Cyrillic 版 mn と分節方針で不揃い (#28/#40/#68)
  - **Semitic-Iranian (ar/he/fa/ps/ar_ma)**: 5 件 — 節頭 Q が A 占有 (#28 残余)
  - **Constructed (eo/jbo)**: 5 件 — sentence-initial Q が subject+modal/verb と複合融合
  - **Other isolates with Q-clitic fusion**: my (5/5 文), mg (4/4 文), mr (4/4 文), tl/ceb (Wackernagel ba 融合)
- **主たる defect class:**
  1. **節頭 Q-particle が role A (subject) を占有** — Indic/Semitic/Iranian/Niger-Congo 系で 11 cells (issue 13/14/16)
  2. **節末 Q-particle が動詞/助動詞に融合** — Turkic 4 / Japonic 方言 12 / Mongolic 3 / Burmese 5 / Malagasy 4 / Marathi 4 = 32 cells
  3. **Wackernagel 第2位 Q-clitic 融合** — Tagalog/Cebuano `ba` 系 (3 cells)
  4. **Q-particle と意味動詞の同色 (E-dup)** — wo/yo/ku #40 (3 cells)
  5. **同一言語の異字体間で分節方針不揃い** — mn / mn_cn (3 cells)
- **#41 closed review との重複回避:** sw `Je`, pl `Czy`, ar/he `هل/האם` の各文確認、ms `-kah` 各文確認、ht `Èske`、bo `-pas/-bam/-gam`、tr の文ごと揺れ、id/jv の `Apakah` は #41 で既出のため本ラウンドは spread defect (他文への伝播取りこぼし) のみフラグ。
- **memory 適用:**
  - `feedback_glue_marker.md` — Turkic/Sinhala 接辞に ZWNJ 前置を推奨
  - `feedback_cross_sibling_role_consistency.md` — Indic/Semitic 節頭 Q を E に統一、A-role の意味カテゴリ保護
  - `_omission_guidelines.md` B.6 — wh-question の文末 Q-particle 省略は許容、polar question の Q-particle 欠落のみフラグ

---

## Dev response — round 1 (2026-06-04)

**Issues addressed: 28 of 32 / Edits: 53 / JSON: `/tmp/lm_edits_79.json`**

### Per-issue disposition

| # | issue | dispo | rationale |
|---|---|---|---|
| 1 | tk #10 `-mi` ZWNJ split | APPLY | tr 兄弟 ZWNJ split 既施行、Lewis §169 |
| 2 | uz #10 `-mi` ZWNJ split | APPLY | uz #28 既 split、intra-language consistency |
| 3 | ky #10 `-бы` + role inversion fix | APPLY | kk 兄弟がスペース分割、subject D→A 同時修正 |
| 4 | kk #10 `ба` 分節 | APPLY | kk #28 既 A:ба 分節 |
| 5 | ja_mvi #10 `が` 分節 | APPLY | #68 既 split (確実 spread) |
| 6 | ja_mvi #40 `が` 分節 (palette F) | APPLY | 同上 |
| 7 | ja_rys #10 `な` 分節 | APPLY | #68/#99 既 split |
| 8 | ja_rys #40 `な` 分節 (F) | APPLY | 同上 |
| 9 | ja_oki #10/#40 `がやー` 分節 | APPLY 両方 | #4/#16/#99 で独立分節済 |
| 10 | ja_aom `んだがや` 分節 | APPLY #16 のみ | #10 は既に E:んだがや 独立分節済を確認、#99 は wh-Q (issue 34 で許容) |
| 11 | ja_hir `んかいの/かいの` 分節 | APPLY #16/#40 | #10 は既に E:んかいの 独立分節済 |
| 12 | ja_osa `んの/やの` 分節 | APPLY #16/#99 | #10/#28/#40 で既 split 方針 |
| 13 | Indic 節頭 Q (hi/gu/ne/pa/sa/bho) #28 | APPLY 全 6 件 (newSeg=**G** に変更) | #28 palette は G が dedicated Q-particle slot (sw #28 `G:Je`, zh #28 `G:吗`, ja #28 `G:か` と一致)。reviewer 提案 E は既存 E:restaurant と衝突するため **G に修正** |
| 14 | Semitic/Iranian 節頭 Q (ar/he/fa/ps) #28 | APPLY 全 4 件 (newSeg=**G**) | 同上 |
| 15 | ar_ma `واش` 分節 (#28/#68) | APPLY 両方 | ar_ma #10/#40 既独立 |
| 16 | so #28 `Ma` retag | APPLY (newSeg=**G**) | sw #28 `G:Je` と整合 |
| 17 | ar #40 `هل` 確認のみ | NO EDIT | 既に分節済を確認 |
| 18 | sw #40 intonation Q 欠落 | NO EDIT | typologically legitimate、_omission_guidelines.md B.6 |
| 19 | ms `-kah` 全文確認 | SKIP | #41 既出のため重複回避 |
| 20 | my Q `လား/လဲ` 分節 (5/5 文) | APPLY #10/#40 (代表 2 件) | 蓋然、5/5 一括は次ラウンド以降。最も融合度の高い #40 と最簡明な #10 を cherry-pick |
| 21 | mn_cn #28 `ᠤᠤ` 分節 | APPLY | mn 兄弟既独立、script-version consistency |
| 22 | mn_cn #40 `ᠦᠦ` 分節 (F) | APPLY | 同上 |
| 23 | mn_cn #68 `ᠤᠤ` 分節 | APPLY | 同上 |
| 24 | mr `का` 分節 (4 文) | APPLY 全 4 件 (#10/#28/#40/#68) | Pandharipande §11.1、family consistency |
| 25 | si `ද` 分節 | APPLY #10 のみ | reviewer 明示の edit のみ採用。si #28/#68 は次ラウンド |
| 26 | tl `ba` 分節 (#28/#68) | APPLY 両方 (newSeg=G for #28, E for #68) | Schachter-Otanes §6.7 |
| 27 | ceb `ba` 分節 (#28/#68) | APPLY 両方 | family consistency with tl |
| 28 | mg `ve` 分節 (#40/#68) | APPLY 両方 | Rasoloson §6.4 |
| 29 | eo/jbo 三重融合分節 (#28/#40 eo + #28/#40/#68 jbo) | APPLY 全 5 件 | eo #10/#68 既 split、jbo #10 既 split。#28 は G に Q, #40 は F に Q (palette dedicated slot) |
| 30 | wo #40 E-dup + #28 split | APPLY 両方 | E-dup retag (xam nga → F) と #28 split |
| 31 | yo #40 E-dup | APPLY | verb mọ E→F |
| 32 | yo #10/#28 vs #40 D/E 揺れ | NO EDIT | ownership 判断、reviewer も「記録のみ」 |
| 33 | ku #40 E-dup | APPLY | dizanî E→F |
| 34 | #99 ja 方言 wh-Q 融合 | NO EDIT | typologically 許容 (Dryer WALS ch.116) |

### Closure notes

- **Reviewer 提案 `newSeg:"E"` → `"G"` 変更**: Issue 13/14/16 (Indic/Semitic 節頭 Q + so) は #28 palette の G スロットが既に Q-particle 専用 (sw `G:Je`, zh `G:吗`, ja `G:か`)。E は restaurant が占有しているため、E に retag すると 2 E になり palette 意味カテゴリも崩れる。**G が明白に正しい**ため reviewer 提案を一段階改善。
- **palette 制約守備**: #40 の Q-particle は F (ja/ko `F:か/요`)、#68 は E (ja/ko `E:か/요`)、#28 は G。すべての分節 edit はこの palette 規約に沿って配置。
- **adjacent-same-letter 違反ゼロ** を node 検証スクリプトで確認。
- **memory 適用記録**:
  - `feedback_glue_marker.md` — tk/uz/ky で ZWNJ 前置 (Turkic -mi/-бы)
  - `feedback_cross_sibling_role_consistency.md` — Indic/Semitic #28 G スロット統一
  - `_omission_guidelines.md` B.6 — sw #40 intonation 戦略保護、#99 wh-Q 融合許容
- **次ラウンド送付候補** (本ラウンドで cherry-pick されなかった蓋然項目):
  - my #16/#28/#68 `လား/လဲ` 残余 3 件
  - si #4/#28/#68 `ද` 残余 3 件
  - tl/ceb #10/#40 `ba` 残余 (#10 は ka bang/ka ba og の部分分割、#40 は Alam mo ba 融合)
  - ja_aom #99 / ja_hak #99 / ja_osa #4 など wh-Q 系融合 (許容範囲だが族内整合性監査の対象)

### 統計

- 確実: 適用 16 件 / 蓋然: 適用 12 件 / 許容のみ: 4 件 (no edit)
- 構造化 edit: 53 件 (replace 39 / retag 14)
- 疑問文別: #10 (10) / #16 (3) / #28 (19) / #40 (13) / #68 (7) / #99 (1)
- 影響言語族: Japonic 方言 11、Indo-Aryan 10 (Indic 7 + Marathi 4 - 1)、Turkic 4、Semitic-Iranian 5、Mongolic 3、Philippine 4、Constructed 5、その他 (my/mg/wo/yo/ku) 7
