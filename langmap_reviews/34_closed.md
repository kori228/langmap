# LangMap データレビュー #34 — West African (Niger-Congo + Hausa) 再査読

## レビュアー自己紹介 (ペルソナ)

私は **Dr. Ọláyínká Adébísí-Diop**(ハンドル: `@gbabouquet`)、イバダン大学言語学科およびダカール=シェイク・アンタ・ジョップ大学アフリカ諸語研究所で訓練を受けた西アフリカ語族(ニジェール=コンゴ＋アフロ=アジアの一部)の比較形態論研究者です。博士論文はヨルバ語の声調体系(三声調 + ダウンステップ)とイボ語の母音調和(±ATR)の対照分析、現在はウォロフ語の前鼻音化阻害音と限定詞体系を中心に教えています。日常的に依拠している主要資料は、yo については **Bamgbose *A Grammar of Yoruba*** と Abraham *Dictionary of Modern Yoruba*、ig については **Emenanjo *Elements of Modern Igbo Grammar*** と Igwe *Igbo-English Dictionary*、ha については **Newman *The Hausa Language: An Encyclopedic Reference Grammar*** と Newman *Modern Hausa-English Dictionary*、wo については **Munro & Gaye *Ay Baati Wolof*** と Diouf *Dictionnaire Wolof-Français*、Ka *Wolof Grammar* です。最も権威をもって判断できるのは **yo, ig, ha, wo** の語彙・表層声調・形態素分析と西アフリカ的借用パターン、特に yo の三声調表記(́ ̀ unmarked)と subdot ẹ/ọ、ig の dot-below ụ/ị/ọ、ha の hooked ɓ/ɗ/ƙ、wo の前鼻音化 mb/nd/ng と限定詞 bi/gi/yi/ji です。

## 検証範囲

全100文(#1〜#100)について、本グループ4言語(yo, ig, ha, wo)のセルを精査しました。#29 review が「Niger-Congo + Nilotic + Cushitic を一括」で処理した結果、本グループは(i)yo の三声調マーク欠落、(ii)語彙取り違え(skull/umbrella、mud/story、tasty/convenient 等)、(iii)yo の動詞+目的語融合(round-9 の包括スイープに漏れた箇所)、(iv)wo の borrowing 一貫性、の4軸で見落としが残存していました。指摘の主要セルは `.wf_langmap_query.mjs` でライブ値を verbatim 確認済みです。語義誤りと声調欠落を最優先、次いで分割優先方針からの取りこぼしを列挙します。

## 指摘事項 (Issues found)

### 1. #29 yo — B「àgbàrí」は「頭蓋骨」で「傘」ではない 【確実】
- **Current:** A:「Mo」 B:「gbàgbé àgbàrí mi」 D:「nínú ọkọ̀ ojú irin」
- **Problem:** 「àgbàrí」はヨルバ語で「頭蓋骨/(時に転じて)頭」を意味し、「傘(umbrella)」ではない。Abraham *Dictionary of Modern Yoruba* および Bamgbose は umbrella を **agbóòrùn** とする(類例 ig `ụmbrelạ`(借用), ha `laima`, wo `parasol` と整合)。原文「電車に傘を忘れてしまった」(en B:「my umbrella」)に対し àgbàrí は語義誤り。加えて B が動詞 gbàgbé(forgot, en C)＋目的語(umbrella)の融合になっており、role C も欠落。
- **Proposed fix:** C:「gbàgbé」 B:「agbóòrùn mi」 D:「nínú ọkọ̀ ojú irin」(動詞 C と目的語 B を分離、àgbàrí→agbóòrùn)。

### 2. #51 ig — B「ụrọ na-adọrọ adọrọ」の `ụrọ` は「泥/粘土」で「話」ではない 【確実】
- **Current:** A:「Nne nne」 E:「m」 D:「na-akọ」 B:「ụrọ na-adọrọ adọrọ」
- **Problem:** イボ語で「ụrọ」は **mud/clay(泥・粘土)** を指す(Igwe *Igbo Dictionary*、Emenanjo 参照)。原文「面白い話」(en B:「interesting」 C:「stories」)に対し B 内の名詞は **akụkọ**(物語/話)が正しい。修飾語 `na-adọrọ adọrọ`(= 引きつける/興味深い)は妥当。動詞 D「na-akọ」(= 語る)とのコロケーションも `akụkọ` でこそ自然(「ịkọ akụkọ」= 物語を語る)。加えて en は B:interesting C:stories と分かれており、現状の B|形容詞融合は分割優先方針からも対象。
- **Proposed fix:** B:「na-adọrọ adọrọ」 C:「akụkọ」(語順は ig 名詞-形容詞型に合わせ C:「akụkọ」 B:「na-adọrọ adọrọ」でも可)。最低限 `ụrọ → akụkọ` の語彙修正は確実。

### 3. #87 ig — D「ụtọ」は「甘さ/美味」で「便利」ではない(#5 からの誤コピペ) 【確実】
- **Current:** B:「Ngwa」 A:「a」 C:「dị nnọọ」 D:「ụtọ」
- **Problem:** 「ụtọ」はイボ語で **sweetness / tastiness(味の良さ)**(Emenanjo)。原文「このアプリはとても便利だ」(en D:「convenient」)に対し ụtọ は意味の取り違え。同一データセット #5「This coffee is very delicious」が `C:dị nnọọ D:ụtọ`(=very tasty)であり、#87 へそのまま流用されたコピペ誤りと推定される。便利は ig で **bara uru**(= useful)あるいは **dị mfe**(= 楽な/便利な)が正しい。
- **Proposed fix:** D:「bara uru」(または D:「dị mfe」)。C:「dị nnọọ」は維持可。

### 4. #76 wo — D「Maa ngi am boppam」は「彼の頭を持つ」で「幸せを感じる」ではない 【確実】
- **Current:** D:「Maa ngi am boppam」 C:「bu」 B:「ma dégg」 A:「misik」
- **Problem:** 「Maa ngi am boppam」は逐語「私は彼/彼女の頭を持っている」(am=have, bopp=head, -am=3sg 所有接尾)で、「幸せを感じる(feel happy)」ではない。Munro & Gaye 辞典で happy は **kontaan**、feel happy = **kontaan na** / **am mbégte**(= 喜びを持つ)が標準。`boppam`(3sg の頭)は誤生成と思われる(おそらく `bopp am` = 自分自身という熟語との混同)。
- **Proposed fix:** D:「Maa ngi kontaan」(または D:「dama kontaan」/「am naa mbégte」)。

### 5. #79 wo — B「sonnal」は「疲れさせる(causative)」で「悲しい」ではない 【確実】
- **Current:** A:「Moo」 B:「sonnal」 C:「ndax」 D:「xarit am」 E:「genn na」
- **Problem:** 「sonnal」は `sonn`(= 疲れる)の使役形で「(誰かを)疲れさせる」の意。「悲しい(is sad)」の意ではない(Munro & Gaye / Diouf)。Wolof で sad は **naqari**(動詞)/ **am naqar**(= 悲しみを持つ)/ **tiis** が標準。
- **Proposed fix:** B:「dafa tiis」(または B:「dafa am naqar」/「naqari na」)。

### 6. #51 wo — B「wàllu」は「分け前/助け」で「面白い」ではない 【蓋然】
- **Current:** E:「Sama」 A:「maam」 D:「di mos」 B:「wàllu」 C:「léebu」
- **Problem:** 「wàllu」は Wolof で「(一方の)分け前/側」「助け」の派生で、形容詞「面白い(interesting)」を表さない。en B:「interesting」 C:「stories」 に対し、Wolof は通常 **léeb yu neex**(= 楽しい物語) や **léeb yu rafet**(= 美しい物語) を用いる。C「léebu」(= 物語の/物語+定冠詞)は妥当だが、B に neex/rafet 系の形容詞が欠ける。`wàllu` は誤挿入か文法的に意味の通らないトークン。
- **Proposed fix:** B:「yu neex」(関係節 = 面白い)、C:「léeb yi」(物語+定冠詞) もしくは B:「léeb」 C:「yu neex」 の入れ替え。最低限 wàllu の削除/置換。

### 7. #38 wo — B「Nàkk bi」は「夕日」ではない 【蓋然】
- **Current:** B:「Nàkk bi」 A|D:「fii」 C:「rafet na」
- **Problem:** Munro & Gaye / Diouf で sunset(夕日/日没)は **so**(= 夕方になる)から派生する **so bi** / **jant bi tëdd** / **tooru jant** が標準。「nàkk」は Wolof で「(何かが)欠ける/失う」あるいは口語的に「無駄」を指し、太陽・夕日との対応はない(類例 yo `Ìwọ̀ oòrùn`, ig `Ọdịda anyanwụ`, ha `Faɗuwar rana` はいずれも「太陽の沈み」の固有句)。
- **Proposed fix:** B:「Jant bi tëdd bi」(= 沈む太陽) または B:「Tooru jant bi」(= 夕日)。

### 8. #4 wo — A「gëstu」は「研究する/探す」で「最も近い」ではない 【確実】
- **Current:** C:「Fan la」 B:「gaar gi」 A:「gëstu」 D:「nekk」
- **Problem:** 「gëstu」は Wolof で **rechercher / chercher(調べる・探す)** の意(Diouf 辞典)。「最も近い(the nearest)」を表さない。en A:「the nearest」、ja A:「一番近い」に対応する Wolof は **gu gën a jege**(= which is closer = 最近の) が標準。
- **Proposed fix:** A:「gu gën a jege」(関係節「より近い」)。

### 9. #7 wo — D「natt」(計る)＋B「wetu」(脇)の二重誤り、A「Tey elkam」も誤 【確実】
- **Current:** A:「Tey elkam」 B:「wetu」 C:「di na」 D:「natt」
- **Problem:** 三重に問題: (i) A「Tey elkam」= 字義「today」+ 不明トークン「elkam」、本来「Tomorrow's」は **Ëllëg** (Wolof で明日)。`tey` = today で意味逆転。(ii) B「wetu」= 「脇/側」で「天気(weather)」ではない(weather は Wolof で **jamano** / **tale jamano**)。(iii) D「natt」= 「測る/測定する」で「晴れ(sunny)」ではない。Wolof で sunny は **dafa naaj**(= 日差しがある) / **am naaj**。Munro & Gaye 参照。
- **Proposed fix:** A:「Ëllëg」 B:「jamano ji」 C:「dina」 D:「am naaj」(または D:「naaj」)。

### 10. #23 wo — A「Librairie」は仏語で「書店」、「図書館」ではない 【確実】
- **Current:** A:「Librairie bi」 D:「nekk na」 B:「wetu」 C:「opital bi」
- **Problem:** フランス語の `librairie` は **bookstore(書店)** を指し、library(図書館)ではない(librairie ↔ bibliothèque の典型誤訳)。en A:「The library」 に対し、Wolof では仏借用 **bibliothèque(bi)** または土着 **kër-i-téere**(= 本の家)が正しい。同一データセット内 #11 wo が `B:ci librairie`(= at the bookstore)で librairie を「書店」として正しく使っており、#23 で「図書館」にも同語を当てるのは一語多義として許容外。
- **Proposed fix:** A:「Bibliothèque bi」(または A:「Kër-i-téere bi」)。

### 11. #89 yo — A「Mi」は所有代名詞「私の」で 1sg 主語ではない 【蓋然】
- **Current:** A:「Mi」 C:「kò」 B:「lè」 D:「rí」 G:「ọ̀rọ̀ aṣínà」 F:「Wi-Fi」
- **Problem:** ヨルバ語の 1sg 主語代名詞は **Mo / Mi/Ǹ**。否定文脈で `Mi ò` / `Mi kò` の口語形は確かに使われるが、正書法ではより標準的なのは **N kò / Èmi kò / Ǹ kò** で、Bamgbose は「Mi」を所有 my としてマーク。同一データセット内 yo の全 1sg 主語は一貫して `Mo`(#3, #6, #9 等)で、#89 のみ `Mi` で開始するのは不統一。少なくとも一貫性違反、辞書的には所有との混同を招く。
- **Proposed fix:** A:「N」(または A:「Mo」、ただし `Mo kò` は接続不自然のため `N kò` 推奨)。

### 12. #99 yo — C「ẹlọ́」は非標準表記、正しくは「ẹ̀ló」 【確実】
- **Current:** B:「Ẹ̀yà ìrántí」 A:「 yìí」 D:「jẹ́」 C:「 ẹlọ́」
- **Problem:** ヨルバ語の「いくら(how much)」は **ẹ̀ló**(低声調 ẹ̀ + 高声調 ló)(Bamgbose, Abraham)。現状 `ẹlọ́`(中声調 ẹ + 高声調 ọ́)は声調記号の欠落 + 末尾母音の subdot ọ(/ɔ/)化で二重に非標準。subdot ẹ で語頭、subdot ọ で語末は別語形を生んでしまう。
- **Proposed fix:** C:「ẹ̀ló」(正書法どおり ẹ̀ + ló)。

### 13. #29 yo — B 内に動詞 `gbàgbé`(forgot, en C)が目的語と融合 【確実(分割優先)】
- **Current:** B:「gbàgbé àgbàrí mi」(指摘1と同一セル)
- **Problem:** en は C:「forgot」 B:「my umbrella」 と動詞/目的語を別立て。同類の yo は通常分離可能(他文 #44, #58 等で C verb + B object と分かれる)。指摘1の語彙修正と併せて C/B 分割が必要。
- **Proposed fix:** C:「gbàgbé」 B:「agbóòrùn mi」(指摘1と統合提案)。

### 14. #84 yo — B「mú òtútù」 動詞(caught)＋目的語(a cold)の融合 【確実】
- **Current:** A:「Ó」 B:「mú òtútù」 D:「ní ọ̀sẹ̀」 E:「tó kọjá」
- **Problem:** en C:「caught」 B:「a cold」 を yo は B 内に「mú òtútù」(動詞 mú = 取る/捕まえる + òtútù = 風邪/寒さ)で融合。同データセット内 ig `C:tara B:oyi`、ha `C:kamu B:mura` は別立てしており、fix-all-variants の観点でも yo のみ取りこぼし。
- **Proposed fix:** C:「mú」 B:「òtútù」(分割のみ、語彙保持)。

### 15. #14 yo — B「lọ sí ibi iṣẹ́」 動詞(go)＋目的句(to work)の融合 【確実】
- **Current:** A:「Mo」 B:「lọ sí ibi iṣẹ́」 D:「pẹ̀lú ọkọ̀ ojú irin」 E:「ní gbogbo ọjọ́」
- **Problem:** en C:「go」 B:「to work」 を yo は B 内に動詞「lọ」＋前置詞句「sí ibi iṣẹ́」で融合。ig `C:aga B:ọrụ`、ha `C:zuwa B:aiki`、wo `C:dem B:liggéey` は別立て。yo のみ未分割。
- **Proposed fix:** C:「lọ」 B:「sí ibi iṣẹ́」。

### 16. #21 yo — E「máa jẹ oúnjẹ alẹ́」 助動詞(will have)＋目的語(dinner)の融合 【確実】
- **Current:** A:「Mo」 E:「máa jẹ oúnjẹ alẹ́」 C:「pẹ̀lú àwọn ọ̀rẹ́」 B:「ní alẹ́ yìí」
- **Problem:** en E:「will have」 D:「dinner」 別立て。yo は E に未来助動詞 `máa` + 動詞 `jẹ`(食べる)+ 目的語 `oúnjẹ alẹ́`(夕食)を融合。ig `E:eri D:nri abalị`、ha `E:ci D:abincin dare`、wo `E:di lekk D:reer` は別立て(動詞 E、目的語 D)。yo のみ取りこぼし。
- **Proposed fix:** E:「máa jẹ」 D:「oúnjẹ alẹ́」。

### 17. #86 yo — B「máa ń lo fóònù mi aláìlowó」 動詞＋目的語＋形容詞 3-way 融合 【確実】
- **Current:** D:「Mo」 B:「máa ń lo fóònù mi aláìlowó」 A:「ní gbogbo ọjọ́」
- **Problem:** en C:「use」 B:「my smartphone」、yo は B に動詞 `máa ń lo`(習慣相+use)＋目的語 `fóònù mi`(my phone)＋形容詞 `aláìlowó`(wireless=smart)を融合。役割 C(use 動詞)が完全に欠落。ig `C:eji B:ekwentị m`、ha `C:amfani da B:wayar salula ta`、wo `C:jëfandikoo B:sama telefon` はすべて C/B 分離。
- **Proposed fix:** C:「máa ń lo」 B:「fóònù mi aláìlowó」(または B:「fóònù aláìlowó mi」)。

### 18. #88 yo — B「ń yí àgbáyé padà」 分離動詞(yí…padà)＋目的語の融合 【蓋然】
- **Current:** A:「AI」 B:「ń yí àgbáyé padà」
- **Problem:** ヨルバ語の `yí … padà` は分離動詞「変える(change)」(類例 #24 fi … hàn / #64 gbá … ní agbára)。en C:「is changing」 B:「the world」 に対し yo は分離動詞の両半 + 目的語を 1 セルに融合。役割 C(動詞)が欠落。分離動詞自体は KEEP すべきだが、両半とも C で目的語 `àgbáyé` を B に分離するのが正則(#24 同型: D:fi C:menu D:hàn)。
- **Proposed fix:** C:「ń yí」 B:「àgbáyé」 C:「padà」(C-B-C で分離動詞の両半が C、目的語 B を挟む。隣接同一なし)。

### 19. #95 yo — 主語役 D が C に誤付与、動詞+目的句も融合 【確実】
- **Current:** C:「Mo」 B:「máa ń lọ sí ọ́fíìsì」 A:「lórí kẹ̀kẹ́」
- **Problem:** en は **D:「I」 C:「go」 B:「to the office」 A:「by bicycle」**。yo `Mo`(= I)は **C ではなく D** が正しい(類例 #29_closed round-12 で om #95 が C:Ani → D:Ani に retag されたのと完全同型)。さらに B に動詞 `máa ń lọ`(go の習慣相)＋前置詞句 `sí ọ́fíìsì`(to office)が融合し、役割 C(go)が欠落。
- **Proposed fix:** D:「Mo」 C:「máa ń lọ」 B:「sí ọ́fíìsì」 A:「lórí kẹ̀kẹ́」(主語の役割是正 + 動詞/目的句の分割)。

### 20. #65 yo — C と D の語彙が逆(gift ↔ beautiful が入れ替わり) 【確実】
- **Current:** A:「Ó」 E:「fún」 B:「 mi」 C:「ní ẹ̀bùn」 D:「 ẹlẹ́wà kan」
- **Problem:** en は **C:「a beautiful」 D:「gift」**。yo は C に `ní ẹ̀bùn`(= 前置詞 + gift)、D に `ẹlẹ́wà kan`(= beautiful + a/one)を入れており、**ẹ̀bùn(gift) と ẹlẹ́wà(beautiful) が C/D で入れ替わっている**。役割 letter の付与誤りで、語そのものは正しい。
- **Proposed fix:** D:「ní ẹ̀bùn」 C:「ẹlẹ́wà kan」 への swap(または C:「ní … ẹlẹ́wà kan」 D:「ẹ̀bùn」 で位置を入れ替え)。yo の自然語順 `ẹ̀bùn ẹlẹ́wà kan` を保つには、D:「ẹ̀bùn」 C:「ẹlẹ́wà kan」 と語順そのまま role swap が最小修正。

### 21. #4 yo — A/B の役割誤付与(station と "be" verb が逆) 【蓋然】
- **Current:** C:「Níbo」 D:「‌ni」 A:「 ibùdó tí ó sún jù lọ」 B:「 wà」
- **Problem:** en は **C:「Where」 D:「is」 A:「the nearest」 B:「station」**。yo は A に `ibùdó tí ó sún jù lọ`(= 最も近い駅、= "the nearest station"=A|B 融合相当)、B に `wà`(= 存在動詞 "is/be")を入れており、**en B(station)を A に、en D に近い "be" 動詞を B に当てている**。`wà` は en D「is」に対応する存在動詞で、D には焦点標識 `ni` が入っている。
- **Proposed fix:** 最小修正は A|B:「ibùdó tí ó sún jù lọ」(station+nearest 融合)＋ D:「wà」(または D|F:「ni wà」融合) — つまり `wà` の役割を D 側に統合し、A は A|B 標識に。代替で station と nearest を yo 語順のまま B:「ibùdó」 A:「tí ó sún jù lọ」 に分割(後置修飾 nearest を A)。

### 22. #2 yo/ig/ha — 「名前(name=B)」が所有(my=A)と融合しているのに B が欠落 【蓋然】
- **Current(#2 yo):** A:「Orúkọ mi」 C:「‌ni」 D:「 Tanaka」
- **Current(#2 ig):** A:「Aha m」 C:「bụ」 D:「Tanaka」
- **Current(#2 ha):** A:「Sunana」 C:「shi ne」 D:「Tanaka」
- **Problem:** en は **A:「My」 B:「name」 C:「is」 D:「Tanaka」** と所有(A)と名詞(B)を別立て。本グループ 3 言語は所有が名詞に接続/融合(yo 後置 `mi`、ig 後置 `m`、ha 接尾 `-na`)するため A|B 融合タグが正則だが、現状は単に A のみ付与で B が欠落。プロジェクト規約に従い融合タグ A|B が必要(類例 #29_closed の #35「兄」が A|E と既処理済み — 所有融合の標準形)。wo `A:Sama B:tur` は両言語境界が独立トークンのため A/B 別立てで正則(現状そのまま)。
- **Proposed fix:** yo A|B:「Orúkọ mi」、ig A|B:「Aha m」、ha A|B:「Sunana」(融合タグ化、surface 不変)。

### 23. #56 yo — C「ní aago mẹ́jọ alẹ́ yìí」 時刻(B)＋夜(C)が C に融合 【蓋然】
- **Current:** A:「Eré orin náà」 D:「yóò bẹ̀rẹ̀」 C:「ní aago mẹ́jọ alẹ́ yìí」
- **Problem:** en は **B:「at 8 o'clock」 C:「tonight」** 別立て。同データセット ig `B:na elekere asatọ C:n'abalị taa`、ha `B:da karfe takwas C:a daren yau`、wo `B:ci 8 waxtu C:ci guddi gii` がすべて B/C 分離済み。yo のみ「8時に」と「今夜」を C に融合(役割 B 欠落)。`alẹ́ yìí`(= tonight)は独立分離可能。
- **Proposed fix:** B:「ní aago mẹ́jọ」 C:「alẹ́ yìí」(分割、隣接同一なし)。

### 24. #25 wo — D「enterprise」は仏語綴り誤、正しくは `entreprise` 【要検討】
- **Current:** A:「Sama baay」 E:「liggéey na」 B:「ci」 F:「benn」 D:「enterprise bu mag」
- **Problem:** フランス語「会社」は `entreprise`(re-を含む)で、`enterprise` は英語綴り。Wolof は仏借用が常態のため Diouf も `entreprise` を採録。同じ仏借用パターンを使う他セル(`librairie`, `restorãa`, `examen`, `commander`, `réunion` 等)はすべて仏綴りで、`enterprise` だけ英綴りは不統一。語義は通じるため誤りとまで言えないが、整合の観点で要検討。
- **Proposed fix:** D:「entreprise bu mag」。

### 25. #28 wo — E「restorãa」の波線アクセントは Wolof 表記外、`restoraa` または `restoran` 【要検討】
- **Current:** A:「Ndax mën」 B:「nga」 C:「ma digal」 F:「benn bu baax」 E:「restorãa」
- **Problem:** Wolof のラテン表記には鼻母音記号 `ã` は標準で含まれない(代わりに `-an` で表す)。Munro & Gaye は restaurant を **restoran** とし、Diouf は **restoraa** も併用。同データセット内 #43 wo は `E:restoraa`(波線なし)。#28 と #43 の表記不統一。
- **Proposed fix:** E:「restoraa」(#43 と統一)または E:「restoran」(Munro & Gaye 標準)。

---

以上、計 25 件。

## ファイル情報

- **ファイル:** `/home/jounlai/langmap/langmap_reviews/34_open.md`
- **指摘総数:** 25 件(確実 16・蓋然 7・要検討 2)
- **支配的な系統的欠陥:** **(1) yo の動詞+目的語/前置詞句融合の取りこぼし**(#13/14/15/16/17/18/19/23、計 8 件)— round-9 の包括スイープで本グループの yo に対する分割が十分適用されず、ig/ha/wo が C(動詞)/B(目的語)を別立てしているのに yo だけ B 1 セルに融合したままの箇所が広範に残存。**(2) 語義取り違え(false friends)**(#1 yo `àgbàrí`=頭蓋骨、#51 ig `ụrọ`=泥、#87 ig `ụtọ`=甘い、#76 wo `boppam`=彼の頭、#79 wo `sonnal`=疲れさせる、#51 wo `wàllu`=分け前、#38 wo `nàkk`、#4 wo `gëstu`=探す、#7 wo `natt`=測る/`wetu`=脇、#23 wo `librairie`=書店、計 11 件)— #29 review が「Niger-Congo + Nilotic + Cushitic 一括」で処理した結果、wo を中心に語彙の機械的当てはめが多数残存。**(3) 表層声調・正書法の崩れ**(#12 yo `ẹlọ́` vs 正則 `ẹ̀ló`、#25 wo `enterprise` vs `entreprise`、#28 wo `restorãa` vs `restoraa`)。

**ファイル状態: OPEN**

## Dev response — round 1 (2026-06-03)

Dr. Adébísí-Diop さん、4言語の表層と西アフリカ語族の語彙・声調・形態の両面から極めて精緻な指摘を頂き、深く感謝します。25件すべてを yo / ig / ha / wo の live セルで verbatim 確認し、確実 16件・蓋然 7件・要検討 2件 すべてを受諾、合計27件の編集を `/tmp/lm_edits_34.json` に構造化しました(指摘1+13 は同セルの語彙修正+分割で1 replace、指摘22 は 3 言語に分割で3 retag、指摘4 は 2 retag — 計 25 指摘 → 27 編集)。dry-run でデータ整合性チェック(隣接同一役割なし・パレット内のみ・display 復元) を通し、appliedCount=27 / failedCount=0 / adjacentWarnings=0 を確認しました。

### 採否一覧

| # | 言語 | 区分 | 採否 | 編集op | 備考 |
|---|------|------|------|--------|------|
| 1 | yo #29 | 確実 | accept | replace | àgbàrí→agbóòrùn + C/B分割(指摘13と統合) |
| 2 | ig #51 | 確実 | accept | replace | ụrọ→akụkọ + 名詞 C / 修飾 B 分離(自然語順) |
| 3 | ig #87 | 確実 | accept | settext | ụtọ→bara uru(#5 流用誤りを修正) |
| 4 | wo #76 | 確実 | accept | settext | Maa ngi am boppam→Maa ngi kontaan |
| 5 | wo #79 | 確実 | accept | settext | sonnal→naqari na(`Moo` 主語と整合する選択肢を採用) |
| 6 | wo #51 | 蓋然 | accept | replace | wàllu→yu neex に加え léebu/yu neex の語順を C-B に整理 |
| 7 | wo #38 | 蓋然 | accept | settext | Nàkk bi→Jant bi tëdd bi(沈む太陽=夕日) |
| 8 | wo #4 | 確実 | accept | settext | gëstu→gu gën a jege(関係節「より近い」) |
| 9 | wo #7 | 確実 | accept | replace | Tey elkam/wetu/natt の三重誤りを Ëllëg / jamano ji / am naaj に修正、C も `di na`→`dina` に統一 |
| 10 | wo #23 | 確実 | accept | settext | Librairie bi→Bibliothèque bi(EN ref は library と確認、#11 は bookstore で librairie 維持) |
| 11 | yo #89 | 蓋然 | accept | settext | Mi→N(同データセット 1sg 主語との一貫性確保) |
| 12 | yo #99 | 確実 | accept | settext | ẹlọ́→ẹ̀ló(Unicode: ẹ U+1EB9 + 結合 ̀ U+0300 + l + ó U+00F3) |
| 13 | yo #29 | 確実 | accept | (1と統合) | replace に含めて C/B 分離 |
| 14 | yo #84 | 確実 | accept | replace | mú òtútù→C:mú + B:òtútù(ig/ha と同型) |
| 15 | yo #14 | 確実 | accept | replace | C:lọ + B:sí ibi iṣẹ́ |
| 16 | yo #21 | 確実 | accept | replace | E:máa jẹ + D:oúnjẹ alẹ́ |
| 17 | yo #86 | 確実 | accept | replace | C:máa ń lo + B:fóònù mi aláìlowó(C 役割欠落を補完) |
| 18 | yo #88 | 蓋然 | accept | replace | 分離動詞 yí…padà を C-B-C(非隣接)で表現 |
| 19 | yo #95 | 確実 | accept | replace | C:Mo→D:Mo(主語役整正) + 動詞/PP 分割 |
| 20 | yo #65 | 確実 | accept | replace | ẹ̀bùn↔ẹlẹ́wà の role swap(語順保持) |
| 21 | yo #4 | 蓋然 | accept | retag×2 | station+nearest を A→A|B に、wà を B→D に役割正常化 |
| 22 | yo/ig/ha #2 | 蓋然 | accept | retag×3 | 所有融合 A→A|B(`Orúkọ mi` / `Aha m` / `Sunana`) |
| 23 | yo #56 | 蓋然 | accept | replace | B:ní aago mẹ́jọ / C:alẹ́ yìí に分割 |
| 24 | wo #25 | 要検討 | accept | settext | enterprise→entreprise(仏借用一貫性) |
| 25 | wo #28 | 要検討 | accept | settext | restorãa→restoraa(#43 と一致、Diouf) |

### 検証メモ

- **yo の三声調 + subdot**: 指摘12 の `ẹ̀ló` は U+1EB9(ẹ)+ U+0300(結合グレイブ)+ l + U+00F3(ó 既結合) で生成し、subdot ọ→subdot e の語頭、末尾は plain o + 高声調 ó であることを Unicode 表現で確認しました。
- **wo の library / bookstore**: 指摘10 の EN ref を `.wf_langmap_query.mjs 23 en` で確認したところ A:「The library」と library であることが確定したため、Wolof 訳を Bibliothèque bi に修正しました(#11 wo は EN「at the bookstore」に対応するため `ci librairie` を維持)。
- **ig の母音調和(±ATR)**: 指摘2 の `akụkọ` は ọ-ụ の -ATR 系列、指摘3 の `bara uru` は u-u の +ATR 系列で一貫していることを Emenanjo に照らして確認しました。
- **ha の implosive/glottalized**: 本ラウンドでは ha の指摘は #2(融合タグ A|B の付与のみで `Sunana` のフック文字は不変)に留まるため、ɓ/ɗ/ƙ の改変はありません。
- **隣接同一役割の禁則**: yo #88(C-B-C 非隣接)、yo #4(C-D-A|B-D、D は非隣接)、yo #65(A-E-B-D-C)、wo #51(E-A-D-C-B)等、全 27 編集で隣接同一なしを dry-run の `adjacentWarnings: []` で確認済み。
- **display 復元保証**: 表層が変わる編集には `allowTextChange: true` を明示(指摘1/2/3/4/5/6/7/8/9/10/11/12/24/25)。残りの編集(指摘14〜23 の分割系)はトークン境界での分割のみで rendered text 不変、`allowTextChange` 不要。

### Issues addressed 25 of 25 / Edits 27 / Closure: REQUEST_CLOSE / JSON: /tmp/lm_edits_34.json
