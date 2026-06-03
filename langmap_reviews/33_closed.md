# LangMap データレビュー #33 — Bantu specialist focus (East + Southern Bantu)

## レビュアー自己紹介 (ペルソナ)

私は **Dr. Thandiwe M. Hadebe-Mwangi**（ハンドル: `@bantuconcord`）、ウィットウォーターズランド大学（南ア）およびダルエスサラーム大学・マケレレ大学で訓練を受けた東部・南部バントゥ諸語の比較統語論研究者です。専門は名詞クラス一致（concord）、応用態・場所格、動詞テンプレートの内部構造で、博士論文はズールー・スワヒリ・キニャルワンダの主語接辞 (SC) と目的語接辞 (OC) の融合度の対照でした。日常的に依拠している資料は、Swahili: TUKI *Kamusi ya Kiswahili Sanifu*、Ashton *Swahili Grammar*。Zulu: Doke *Textbook of Zulu Grammar*、Oxford Bilingual Zulu Dictionary、Poulos & Msimang *Zulu Grammar*。Xhosa: Kropf-Godfrey *Xhosa Dictionary*、Du Plessis *Xhosa Syntax*。Shona: Dale の辞書、Brauner *Shona Grammar*。Kinyarwanda: Kimenyi *A Relational Grammar of Kinyarwanda*、Coupez et al. の辞書。Chichewa/Nyanja: Mtenje *Tone and Stress in Chichewa*、Mchombo *The Syntax of Chichewa*、Scotton-Orr *Learning Chichewa*。最も権威をもって判断できるのは **sw, zu, xh, sn, rw, ny** の6言語です。

## 検証範囲

全100文（#1〜#100）について、本グループ6言語（sw, zu, xh, sn, rw, ny）すべてのセルを精査しました。前ラウンド #29 が Niger-Congo + Nilotic + Cushitic を13言語まとめて担当したため、本ラウンドはバントゥ6言語に焦点を絞り、特に (1) 主語接辞/目的語接辞/時制接辞の融合度の sibling 整合、(2) 名詞クラス一致と数詞・形容詞の concord、(3) 不可能態/否定の語境界、(4) 場所格・指示詞の融合パターン、(5) 文化置換・英語語幹のローン素通しに注目しました。全体としてはバントゥ群は #29 以降の round 1-12 で大量に整備済みで概ね良好ですが、**sibling 間の chunking 不整合**（同一構文・同一文で sw/zu/xh/sn/rw/ny の一部だけが異なる粒度・異なる role-letter を採用）と、**xh の系統的な isiNgisi 借用素通し** がやや目立ちます。指摘は `.wf_langmap_query.mjs` でライブ照合済みです。

## 指摘事項 (Issues found)

### 1. #4 rw — A/B が「最寄りの」「駅」で逆転 【確実】
- **Current:** C:「Iri hehe」 A:「sitasiyo」 B:「y'hafi cyane」
- **Problem:** en は `A:the nearest B:station`。rw 行は `sitasiyo`（station=駅）を A に、`y'hafi cyane`（=近い、近接形容修飾）を B に置き、**役割letter が逆**。同文の sw `A:iliyo karibu zaidi B:stesheni`、zu `A:esiseduze… B:isiteshi`、xh `A:eyona ikufutshane B:isitishi`、sn `A:chiri pedyo B:Chiteshi`、ny `A:siteshoni B:yapafupi kwambiri` も整理が必要だが、特に rw と ny は A/B を交換すべき。
- **Proposed fix:** rw → A:「y'hafi cyane」 B:「sitasiyo」。ny も同様に A:「yapafupi kwambiri」 B:「siteshoni」。

### 2. #91 xh — B（Japanese）と C（tradition）の役割letter逆転＋意味誤り 【確実】
- **Current:** A:「Ukubukela i-cherry blossom」 D:「yi」 B:「isiJapan」 C:「isiko」
- **Problem:** en は `B:a Japanese C:tradition`。xh だけ B/C を逆順に並べ、しかも **B:「isiJapan」 は「日本語」の意**（isi- + Japan = Japanese language, クラス7名詞、`isiNgisi` 英語と同型）で「日本の（形容修飾）」ではない。同文の sw `C:mila B:ya Kijapani`、zu `C:mkhuba B:waseJapani`、sn `C:tsika B:yechiJapanese`、rw `C:umuco B:w'Abayapani`、ny `C:chikhalidwe B:cha Ajapani` は皆 C:tradition B:Japanese（属格句）の順かつ語義も正しい。xh は **B:「waseJapani」**（=「日本の」）または **B:「yamaJapane」** とし、C との順序も他言語に揃えるべき。
- **Proposed fix:** A:「Ukubukela i-cherry blossom」 D:「yi」 C:「isiko」 B:「laseJapani」（=日本の伝統）。

### 3. #87 zu — 指示詞+名詞が A に完全融合し B が欠落（sibling 不整合）【確実】
- **Current:** A:「Leli app」 D:「lilula」 C:「kakhulu」
- **Problem:** en は `A:This B:app C:is very D:convenient`。zu は `Leli`（=This）と `app`（=app）を A に一括し B を持たない。**同文の xh `A:Le B:app C:iluncedo D:kakhulu`、sn `A:Appu B:iyi C:inobatsira D:zvikuru`、rw `B:Porogaramu A:iyi C:‌ni D:nziza cyane`、ny `B:Pulogalamu A:iyi C:ndi D:yothandiza kwambiri` は皆 B（app）を別立て**。zu は #18 で `A:Le B:sikhwama`、#5 では `A:Leli khofi`（A融合）、#78 では `C:leli cebo lihle`（C 内へ）と方針が揺れている。zu の指示詞 `le/leli/lesi` は近接 proclitic 化するため境界が微妙だが、xh が `Le` を独立に切り出している以上、zu も同型に分離可能。また D:「lilula」=「軽い/容易」で原意「便利な (convenient)」とずれる傾向あり（参考）。
- **Proposed fix:** A:「Leli」 B:「app」 C:「lilula」 D:「kakhulu」（D 語彙は要再検討、`lulusizo`/`luwusizo`=助けになる、等）。

### 4. #5 zu / xh — `Leli khofi`/`Le kofu` の B 欠落と方針揺れ 【蓋然】
- **Current zu:** A:「Leli khofi」 D:「limnandi」 C:「kakhulu」
- **Current xh:** A:「Le」 B:「kofu」 D:「imnandi」 C:「kakhulu」
- **Problem:** xh は This と coffee を A/B に分離するが、zu は `Leli khofi` を A に一括し B を欠落。en は `A:This B:coffee D:is C:very D:delicious`。同一構文（this+名詞）で xh が分割している以上、zu も同型に **A:「Leli」 B:「khofi」** に分割すべき。round-13（#29）の en 参照と分割優先方針からも整合。
- **Proposed fix:** zu → A:「Leli」 B:「khofi」 D:「limnandi」 C:「kakhulu」。

### 5. #78 zu — `leli cebo lihle` が C に一括、A/B/C が一切分離されていない 【確実】
- **Current:** D:「Ngicabanga」 B:「ukuthi」 C:「leli cebo lihle」
- **Problem:** en は `D:I think A:this B:plan C:is good`。zu は `leli`（this=A）+ `cebo`（plan=B）+ `lihle`（is good=C）を C 一括に塗りつぶしている。**同文の xh `A:le B:icebo C:lihle`、sn `A:uyu B:purani C:yakanaka`、rw `B:umugambi A:uyu C:ari mwiza`、ny `A:dongosolo B:ili C:ndi labwino` はすべて A/B/C を分離**。さらに B:「ukuthi」 は that-complementizer（接続詞）であり、en の B=plan とは別役。複数の役割letter 衝突。
- **Proposed fix:** D:「Ngicabanga ukuthi」 A:「leli」 B:「cebo」 C:「lihle」 もしくは D:「Ngicabanga」（複合 D|H にして ukuthi を H に） A:「leli」 B:「cebo」 C:「lihle」。

### 6. #8 zu — `upheka isidlo sakusihlwa` で動詞 C と目的語 B が融合 【確実】
- **Current:** A:「Umama wami」 B:「upheka isidlo sakusihlwa」 D:「nsuku zonke」
- **Problem:** en は `C:cooks B:dinner` を別役。zu だけが動詞 `upheka`（=cooks）と目的語 `isidlo sakusihlwa`（=dinner）を B 一括に潰し C を持たない。**同文の sw `C:anapika B:chakula cha jioni`、xh `C:upheka B:isidlo sangokuhlwa`、sn `C:vanobika B:chikafu cheusiku`、rw `C:ateka B:ifunguro rya nimugoroba`、ny `C:amaphika B:chakudya chamadzulo` は皆 C と B を別立て**。zu のみ取りこぼし。
- **Proposed fix:** A:「Umama wami」 C:「upheka」 B:「isidlo sakusihlwa」 D:「nsuku zonke」。

### 7. #3 zu / sn — 動詞 C と目的語 B が融合し C が欠落 【確実】
- **Current zu:** A:「Ngidla」 B:「isidlo sasekuseni」 D:「njalo ekuseni」 E:「ngo-7」
- **Current sn:** A:「Ndinodya」 B:「chikafu chemangwanani」 D:「mangwanani ose」 E:「pa7 o'clock」
- **Problem:** en は `C:eat B:breakfast`。zu/sn は動詞 (Ngidla=I-eat, Ndinodya=I-eat) と目的語 (isidlo sasekuseni=朝食, chikafu chemangwanani=朝食) を別立てしているように見えるが、SC+動詞が A に取り込まれ目的語が B に置かれ C 役（eat）が完全に欠落。**同文の sw `C:hula`、xh `C:tya`、ny `C:ndimadya` は C を別立て**。zu/sn でも `dla/-dy-` 語根は B から分離可能（zu: A:Ngi C:dla B:isidlo…、sn: A:Ndino C:dya B:chikafu…）。これは sw の #89「siwezi」のような不可分一語ではなく、SC（Ngi-/Ndi-）と本動詞語根（-dla/-dya）の境界は形態論的に明白で、分割優先方針と sibling 整合の両方から分離が望ましい。
- **Proposed fix:** zu → A:「Ngi」 C:「dla」 B:「isidlo sasekuseni」 …。sn → A:「Ndino」 C:「dya」 B:「chikafu chemangwanani」 …。
- 補足:sn `E:pa7 o'clock` は **英語 "o'clock" の素通し**。同文の ny `E:pa 7`、sw `E:saa moja`、rw `E:saa moya` と不統一。ショナ語で時刻は `paawa nomwe` 等が自然。→ E:「pa 7」 にすべき（最低限「o'clock」除去）。

### 8. #56 zu — B（at 8 o'clock）と C（tonight）が C に融合 【確実】
- **Current:** A:「Ikhonsathi」 D:「iqala」 C:「ngo-8 namhlanje ebusuku」
- **Problem:** en は `B:at 8 o'clock C:tonight`。zu は時刻句 `ngo-8` と `namhlanje ebusuku`（今夜）を C 一括に潰し B を欠落。**同文の xh `B:ngo-8 C:ngokuhlwa`、sn `B:pa8 o'clock C:manheru ano`、rw `B:saa mbiri z'ijoro C:uyu mwijoro`、ny `B:pa 8 C:madzulo ano` は皆 B/C を分離**。zu のみ取りこぼし。
- **Proposed fix:** A:「Ikhonsathi」 D:「iqala」 B:「ngo-8」 C:「namhlanje ebusuku」。
- 補足:sn `B:pa8 o'clock` も #3 同様に英語 "o'clock" の素通し。`pa 8` または `paawa sere` が自然。

### 9. #11 xh — D（new）と E（book）が D 一括、E が欠落 【確実】
- **Current:** A:「Ndi」 C:「thenge」 D:「incwadi entsha」 B:「evenkileni yeencwadi」 F:「izolo」
- **Problem:** en は `D:a new E:book`。xh は `incwadi`（=book）と `entsha`（=new）を D 一括に。**同文の sw `E:kitabu D:kipya`、zu `E:incwadi D:entsha`、sn `E:bhuku D:idzva`、rw `E:igitabo D:gishya`、ny `E:buku D:latsopano` は皆 E:名詞 + D:形容詞 を分離**。xh のみ E を持たない。コサ語の形容詞 concord（クラス9: en-tsha）は名詞の後で独立語として書かれ、分離は正書法上も自然。
- **Proposed fix:** A:「Ndi」 C:「thenge」 E:「incwadi」 D:「entsha」 B:「evenkileni yeencwadi」 F:「izolo」。

### 10. #65 xh — `isipho esihle` が C 融合・D 欠落 【確実】
- **Current:** A:「Yena」 E:「undinike」 C:「isipho esihle」
- **Problem:** en は `C:a beautiful D:gift`。xh は `isipho`（=gift）と `esihle`（=beautiful）を C 一括に。**同文の zu `D:isipho C:esihle`、sw `D:zawadi C:nzuri`、sn `D:chipo C:chakanaka`、rw `D:impano C:nziza`、ny `C:yokongola D:mphatso` は分離**。xh のみ取りこぼし。
- **Proposed fix:** A:「Yena」 E:「undinike」 C:「esihle」 D:「isipho」 もしくは D:「isipho」 C:「esihle」（語順は xh の後置形容詞 `isipho esihle` を保つなら D-C 順）。

### 11. #33 zu — D（clean）が欠落、コピュラに融合 【蓋然】
- **Current:** A:「Igumbi lehhotela」 B:「belihlanzekile」 C:「kakhulu」
- **Problem:** en は `B:was D:clean`。zu の `belihlanzekile` は SC+TAM+語根 `-hlanzek-`+接尾 で「（過去）きれいになっていた」を1語にまとめており真に不可分な側面はあるが、**同文の xh `B:beli C:kakhulu D:cocekile`、sn `B:yakanga D:yakachena C:zvikuru`、rw `B:cyari D:gifite isuku C:cyane`、ny `B:chinali D:choyera C:kwambiri` は皆 D:clean を別立て**。zu の動詞テンプレ末尾 `-hlanzeki-le` は語根 `hlanzek`（clean）+ 過去接尾で、コピュラ `beli`/`be-` と語根を分離するなら `B:beli C:kakhulu D:hlanzekile`（の形態論的再分割）も論じる余地。少なくとも D の語彙 (`hlanzekile`) を E や独立タグとして付すか、現状を「不可分融合」と明示する判断が必要。sibling との不整合は明確。
- **Proposed fix:** B|D:「belihlanzekile」（コピュラ+clean の融合タグ化、sw #89 siwezi 方式）、または更に踏み込んで A:「Igumbi lehhotela」 B:「beli」 D:「hlanzekile」 C:「kakhulu」（語根分割）。

### 12. #39 zu — `Kumele` を E に付与（impersonal modal → D 規約違反）【確実】
- **Current:** E:「Kumele」 A:「ngi」 D:「vuke」 B:「ekuseni」 C:「kusasa」
- **Problem:** 既知のフィードバック（feedback_impersonal_modal_as_D.md）に**「Il faut/Hay que/Bisogna 等の非人称モーダルは D に付与する（A ではない）」**と明示。zu の `Kumele`（=「必要だ」非人称）は「私が起きる必要がある」のクラス15/17 非人称コピュラ。en は `E:have to` で必ずしも D ではないが、**同文の xh `A:Kufuneka E:ndi D:vuke B:ekuseni C:ngomso` も A:Kufuneka と非人称を A に置き同じ規約違反**。さらに sn `A:Ndinofanira`（=私が必須・主語付帯）、rw `A:Ngomba`、ny `A:Ndiyenera` は人称化されており A 妥当。**zu/xh は impersonal modal を D に retag すべき**。
- **Proposed fix:** zu → D:「Kumele」 A:「ngi」 E:「vuke」… か、E と D を交換。xh → D:「Kufuneka」 A:「ndi」 E:「vuke」…。
- 補足:同型の取りこぼしが #54 にも:**zu `D:Kumele A:si …`** は D で正しいが、**xh `A:Kufuneka D:si …`** が D 規約違反。#37 xh `A:Kufuneka B:ndi…` も同様。**#54/#37/#39 を一括で xh の `Kufuneka` を A→D に**。

### 13. #85 zu / xh — impersonal modal の sibling 不整合 【蓋然】
- **Current zu:** D:「Kufanele」 C:「uphuze」 B:「amanzi」 E:「amaningi」
- **Current xh:** A:「Wena」 D:「kufuneka」 C:「usele」 B:「amanzi」 E:「amaninzi」
- **Problem:** zu はここで `Kufanele` を **D**（impersonal modal 正規付与）にしているが、上述の通り **#54 では `Kumele` を D としつつ #39 では同じ `Kumele` を E に付与**しており zu 内部で揺れ。xh は #85 で A:「Wena」+D:「kufuneka」 と impersonal+pron を二重に置く独自構造で、`Wena`（=you 強調）は en の A:you と対応しているように見えるが、他の #54/#37/#39 xh では `Wena` を出さず `Kufuneka` を A にしている。**xh の impersonal 構文の役割letter 規約を統一せよ**:常に D:Kufuneka とし、必要なら A:ndi/si/wena 等の SC を別立て。
- **Proposed fix:** xh の `Kufuneka`/`Kufanele` を全箇所で D に統一。zu の `Kumele`/`Kufanele` も D に統一（#39 を E→D 訂正）。

### 14. #34 zu — 動詞 C と副詞 B が B に融合、D と C が欠落 【蓋然】
- **Current:** A:「Ngicela」 B:「ukhulume kancane」
- **Problem:** en は `C:speak B:more D:slowly`（あるいは似た副詞構造）。zu は `ukhulume`（=話す/C）と `kancane`（=少しずつ/B+D）を B 一括。**同文の xh `C:thetha B:kancinci`、sn `C:taura B:zvishoma nezvishoma`、rw `C:vuga B:buhoro cyane`、ny `C:lankhulani B:pang'onopang'ono` は C/B を分離**。zu のみ取りこぼし。
- **Proposed fix:** A:「Ngicela」 C:「ukhulume」 B:「kancane」。

### 15. #41 sw / ny — A+E（SC+verb）融合 vs sibling 分割 【要検討】
- **Current sw:** A:「Ninasoma」 F:「kitabu」 C:「cha kuvutia」 B:「sasa hivi」
- **Current ny:** A:「Ndikuwerenga」 F:「buku」 C:「losangalatsa」 B:「panopa」
- **Problem:** en は `A:I'm E:reading`。sw `Ninasoma`（ni-na-soma=1sg-PRES-read）と ny `Ndikuwerenga`（ndi-ku-werenga）は SC+TAM+語根 の1語だが、**同文の zu `A:Ngi E:funda`、xh `A:Ndi E:funda`、sn `A:Ndiri E:kuverenga`、rw `A:Ndimo E:gusoma` は SC（または進行助動詞）と本動詞を A/E に分離**。sw/ny は分離しないことで sibling と不整合。スワヒリ語の `ni-na-soma` は形態論的に分離可能（ni-=A, na-soma=E）であり、同データの #6 sw `A:Mimi D:nasoma` も `Mimi` を A に出して動詞を D（≒E）に出す前例あり。
- **Proposed fix:** sw → A:「Ni」 E:「nasoma」 …（あるいは A:「Mimi」 E:「ninasoma」 とし主代名詞を補う、zu と整合）。ny → A:「Ndi」 E:「kuwerenga」 もしくは A:「Ine」 E:「ndikuwerenga」。

### 16. #96 sw — E/F の役割が入れ替わり（next と intersection）【確実】
- **Current:** A:「Tafadhali」 B:「geuka kulia」 C:「kwenye」 E:「njia panda」 F:「inayofuata」
- **Problem:** en は `E:next F:intersection`。sw は `njia panda`（=交差点=intersection）を **E** に、`inayofuata`（=次の/関係節）を **F** に置いており、**E/F が完全に逆**。**同文の zu `E:elandelayo F:isiphambano`、xh `E:elandelayo F:isiphambano`、sn `E:inotevera F:masangano`、rw `E:hakurikira F:masangano`、ny `E:yotsatira F:mphambano` は皆 E:次の F:交差点 で揃っており、sw だけが反転**。sw の関係節 `inayofuata` を E に、`njia panda` を F に retag すべき。
- **Proposed fix:** A:「Tafadhali」 B:「geuka kulia」 C:「kwenye」 E:「inayofuata」 F:「njia panda」。

### 17. #70 rw — `saa` に余剰 B が付与（en 構造に B 役なし）【確実】
- **Current:** A:「Iduka」 C:「rifunga」 B:「saa」 E:「tatu」 F:「z'ijoro」
- **Problem:** en は `A:The store C:closes D:at E:9 F:PM` で B 役を持たない。rw は `saa`（=時、at の機能）を **B** にタグ付け。**同文の zu/xh `D:ngo- E:9`、sn `D:pa E:9`、ny `D:pa E:9` は皆 `saa`/前置詞相当を D に**。rw も D に揃えるべき。`saa` は en の D:at に対応するキニャルワンダの時刻指示語。
- **Proposed fix:** A:「Iduka」 C:「rifunga」 D:「saa」 E:「tatu」 F:「z'ijoro」。

### 18. #20 ny — A（since this morning）が文頭に出て役割letterが他言語と乱れ、D（rain/it has been）欠落 【蓋然】
- **Current:** A:「Kuyambira m'mawa」 B:「mvula」 C:「ikugwa」
- **Problem:** en は `C:It has been B:raining A:since this morning`。ny は `mvula`（=雨）を **B** に置くが、**同文の sw/zu/rw は雨を D:「Mvula/Imvula/Imvura」 と D 付与**（理由:en の C:It has been の「It」が空主語、雨が D 主語役）。sn/xh は D を持たないが C/B のみで構成。ny は実質的に語順を倒置（A 先頭）かつ「rain」を B に付けて C を「is falling」のみに割く独自構造で、sibling とは整合しない。
- **Proposed fix:** D:「Mvula」 C:「ikugwa」 A:「Kuyambira m'mawa」 もしくは D を保持しつつ B/C を整理。少なくとも `mvula` の役割letter を D（雨=主語役）にすべきで、現状の B 付与は誤り。

### 19. #99 xh — B:「into yokuncokolisa」 が「お土産」ではなく「冗談の道具/雑談用のもの」【確実】
- **Current:** C:「Malini」 A:「le」 B:「into yokuncokolisa」
- **Problem:** xh で `ncokola` は「世間話する/おしゃべりする」の意（Kropf-Godfrey Xhosa Dictionary）。`into yokuncokolisa` は「雑談させるためのもの」=「会話のネタ」程度であり、「お土産（記念品/贈り物として故郷から持ち帰る品）」ではない。**同文の zu `B:suveni`（仏借用）、sn `B:Chipo`（贈り物）、rw `B:icyitegererezo`（記念品）、ny `B:chikumbutso`（記念のもの）は皆 souvenir を妥当に翻訳**。xh はカテゴリ的に誤訳。
- **Proposed fix:** B:「isikhumbuzo」（記念品）または借用 B:「isouveniri」。

### 20. #92 rw — B:「imitsima」（ウブガリ/サザ系の練り粥）が「餃子」と無関係 【確実】
- **Current:** A:「Turya」 B:「imitsima」 D:「mu mwaka mushya w'Abanyashinwa」
- **Problem:** `umutsima`（複 `imitsima`）はキニャルワンダ語の主食ペースト（とうもろこし粉やキャッサバ粉を練ったもの、東アフリカの ugali/sadza に相当）であり、中華の餃子（dumpling）とは別カテゴリ。これは **#29 round-1 で指摘済みの yo `ààmàlà`（ヤム粉主食）と同型のカテゴリ誤り**。**同文の sw `B:dumpling`（借用）、xh `B:iidumplings`、sn `B:madumplings`、ny `B:dumpling` は皆 dumpling 借用・近似**。rw だけ固有食への文化置換。
- **Proposed fix:** B:「dumpling」（借用、他バントゥと整合）または B:「ibitumbula」（中国式包子の説明的近似はないため借用が無難）。

### 21. #92 xh — D に raw English「Chinese New Year」が裸で混入 【確実】
- **Current:** A:「Sithi」 C:「sitya」 B:「iidumplings」 D:「nge-Chinese New Year」
- **Problem:** D:「nge-Chinese New Year」は xh 前置詞接頭辞 `nge-`（=at/with）に **裸の英語句 "Chinese New Year"** を貼り付けたもので、コサ語化されていない。**同文の zu `D:ngonyaka omusha wamaShayina`（コサ語化済）、sw `D:wakati wa Mwaka Mpya wa China`、sn `D:panguva yeGore Idzva reChina`、rw `D:mu mwaka mushya w'Abanyashinwa`、ny `D:pa chaka chatsopano cha China` は皆現地化**。xh のみローン素通し。
- **Proposed fix:** D:「ngonyaka omtsha wamaTshayina」（zu 形に倣う；コサ語クラス4-9: u-nyaka om-tsha wa-maTshayina）。

### 22. #16 xh — B:「imovie」が英語語幹素通し（同文 zu/sn/rw/ny は filim/filimi 系借用）【要検討】
- **Current:** A:「Ngabani ixesha」 B:「imovie」 C:「iqala」
- **Problem:** xh は `imovie`（i- クラス9 + 英語 "movie" 裸）を採用。**同文の zu `B:ifilimu`、sw `B:Filamu`、sn `B:Firimu`、rw `B:Filimi`、ny `B:Filimu` は皆「film/filimi」系の音韻化済み借用**。xh の正書法では `imuvi`（既出 #48 xh `B:muvi`）または `ifilimu` が定着しており、`imovie` は不統一。#48 で xh が `B:muvi` を使った同データ内前例も尊重すべき。
- **Proposed fix:** B:「imuvi」 または B:「ifilimu」。

### 23. #7 xh — D:「ilanga」が「太陽」のみで「晴れ」を表さない 【要検討】
- **Current:** A:「Ngomso」 B:「imozulu」 C:「iya kuba」 D:「ilanga」
- **Problem:** en は `D:sunny`（形容詞）。xh `ilanga` は名詞「太陽/日」で「晴れている」状態を直接表さない。**同文の zu `D:yilanga`（=「太陽である」コピュラ付き）は妥当、sw `D:na jua`（with sun=日が出ている）、sn `D:zuva richipisa`（太陽が暑い）、rw `D:cyiza`（=良い天気）、ny `D:yosefuka`（=晴れる）は妥当**。xh の素の `ilanga` は「太陽」名詞単独で、せめて `liya kuba lilanga` のコピュラ付き、または `lilakhanya`（明るい）等の形容修飾が必要。
- **Proposed fix:** D:「lilanga」（コピュラ化）または D:「yilanga」（zu と同型）。

### 24. #1 rw — H 役（前置詞 in）の欠落 vs sw/ny ある 【要検討】
- **Current rw:** A:「Ndashaka」 C:「gupima」 D:「ikositimu」 E:「nabonye」 H:「mu」 I:「iduka」 J:「imbere ya」 K:「hoteli」
- **Problem:** en は `H:‌in I:a shop`。実は rw は H:「mu」 を持っている — 失礼、これは妥当。ただし **zu/xh/sn は H:in を独立に出さず I 役も欠落（zu `H:esitolo`、xh `H:evenkileni`、sn `H:mushop` は in＋shop を一語に融合）し I が欠落**。一方 sw `H:katika I:duka`、rw `H:mu I:iduka`、ny `H:m' I:shopu` は分離。**zu/xh/sn の H|I 融合タグ化（H|I:esitolo 等）または I を補うべき**。sn `H:mushop` の **`shop` は英語素通し**（→ chitoro/shitoro が標準ショナ語）。
- **Proposed fix:** zu/xh/sn の H をそれぞれ **H|I 融合タグ**（`H|I:「esitolo」` 等）に変更、または `H:e-/H:mu` のような場所格接頭辞を切り出して `I:sitolo/venkile/chitoro` を分離。sn の `mushop` を `muchitoro` に変更。

### 25. #46 ny — B|G 融合（friend + my）vs sibling は分離 【蓋然】
- **Current:** A:「Ndinakamba」 F:「ndi」 B|G:「mnzanga」 C:「pa foni」 D:「ora limodzi」
- **Problem:** en は `B:friend G:my`。ny の `mnzanga`（=mnzake-anga=friend+my）は所有接尾 `-anga` が `mzanga` 系に融合した1語。確かに膠着接尾だが、**同文の sw `B:rafiki G:yangu`、zu `B:mngani G:wami`、xh `B:mhlobo G:wam`、sn `B:shamwari G:yangu`、rw `B:inshuti G:yanjye` は皆 B/G 分離**。ny でも `mnzake`（基幹）と `anga`（所有）の境界は形態論的にあり、`mnza-` + `-anga` で分離タグ可能（feedback_glue_marker.md の ZWNJ 適用候補）。ha の `abokina`（friend+my）が #29 で B|G 融合 KEEP されているが、ny は ha ほど不可分ではない。
- **Proposed fix:** B:「mnza」 G:「‌nga」（ZWNJ 付き接尾分離、feedback_glue_marker.md 準拠）または B|G:「mnzanga」 を維持（sibling 不整合は受容）。低リスクは ZWNJ 付き分離。

### 26. #100 ny — C:「chifukwa cha」が因果接続詞であり「for（〜のために）」と乖離 【要検討】
- **Current:** B:「Zikomo」 C:「chifukwa cha」 A:「zonse」
- **Problem:** en は `B:Thank you C:for A:everything`。ny の `chifukwa cha` は「〜のせいで/〜の理由で」（because of）で、感謝の前置詞 for とはニュアンスが異なる。チェワ語で「すべてのことを感謝」は通常 `Zikomo pa zonse`（pa=on/for）または `Zikomo chifukwa cha zonse`（理由として）と言えなくはないが、後者は説明的で口語的に重い。**同文の sw `C:kwa`、zu `C:ngakho`、xh `C:nge`、sn `C:ne`、rw `C:ku` は皆軽い前置詞**。ny も `C:pa` 程度が自然。
- **Proposed fix:** C:「pa」 A:「zonse」。

---

## 集計

- 総指摘 26 件。
- 確実: #1, #2, #3, #5, #6, #7, #8, #9, #10, #12, #16, #17, #19, #20, #21（15件）。
- 蓋然: #4, #11, #13, #14, #18, #25（6件）。
- 要検討: #15, #22, #23, #24, #26（5件）。
- 主要セルはすべて `.wf_langmap_query.mjs` でライブ照合済み。

## 支配的な系統的欠陥

**Sibling 間 chunking 不整合 ＋ zu/xh の verb-object/copula-adjective 融合タグ取りこぼし**:

特に zu は #3, #5, #8, #11(xh), #33, #34, #56, #65(xh), #78, #87 のいずれにおいても、**同一構文で他の sibling Bantu 言語が分離している role-letter（B=object, C=verb, D=adjective/clean）を融合し欠落させる**傾向が顕著。zu の動詞テンプレート（SC+TAM+語根+接尾）と指示詞 proclitic 化は確かに正書法上一語化する場面があるが、**xh は同条件で分離している**ため不可分性論拠は弱く、分割優先方針および fix-all-variants の観点から zu を sibling に揃える retag/再分割が最優先。

次点として **impersonal modal の D 規約違反**（feedback_impersonal_modal_as_D.md 準拠不徹底）が #39 zu, #54 xh, #37 xh, #39 xh で散発。xh の `Kufuneka`/`Kufanele` を全用例で A→D に統一する一括バッチが効率的。

第三に **xh の英語素通し**（#16 imovie, #22 #91 isiJapan の語義誤り, #92 「Chinese New Year」, #99 ncokola 誤訳）が xh 行に集中しており、語彙監査が必要。

## ファイル

- `/home/jounlai/langmap/langmap_reviews/33_open.md`（このファイル）
- 編集対象は **`/home/jounlai/langmap/data.js`** の sw/zu/xh/sn/rw/ny 該当セル。READ-ONLY 方針に従い、本ラウンドではデータ自体は変更していません。

**ファイル状態: OPEN**

## Dev response — round 1 (2026-06-03)

Edits queued at `/tmp/lm_edits_33.json` (35 ops). Per-issue verdict:

| # | Verdict | Op(s) | Notes |
|---|---------|-------|-------|
| 1 | ACCEPT | rw replace (relabel), ny replace (relabel) | A/B letters swapped without reordering text — display preserved. |
| 2 | ACCEPT | xh replace (allowTextChange) | B/C reorder + `isiJapan` → `laseJapani`. |
| 3 | ACCEPT | zu replace | `A:Leli app` split into `A:Leli + B:app`. |
| 4 | ACCEPT (zu) | zu replace | `A:Leli khofi` split into `A:Leli + B:khofi`. xh unchanged (already split). |
| 5 | ACCEPT | zu replace | `D:Ngicabanga ukuthi A:leli B:cebo C:lihle` (palette ABCD only, so `ukuthi` fused into D — H option not available). |
| 6 | ACCEPT | zu replace | `C:upheka B:isidlo sakusihlwa`. |
| 7 | ACCEPT | zu replace, sn replace (allowTextChange) | zu `A:Ngi + C:dla`; sn `A:Ndino + C:dya`; sn supplementary fix `pa7 o'clock` → `pa 7`. |
| 8 | ACCEPT | zu replace, sn settext (allowTextChange) | zu `B:ngo-8 + C:namhlanje ebusuku`; sn `pa8 o'clock` → `pa 8`. |
| 9 | ACCEPT | xh replace | `E:incwadi + D:entsha`. |
| 10 | ACCEPT | xh replace | `D:isipho + C:esihle` (post-nominal concord order). |
| 11 | ACCEPT (counter) | zu retag → `B\|D` | Fusion-tag accepted (sw `siwezi` style). Root-level split (`B:beli + D:hlanzekile`) rejected — past-TAM `be-li-` and stem `-hlanzeki-le` are not segmentable in standard zu orthography. |
| 12 | ACCEPT | zu replace, xh replace (#39), xh replace (#54), xh retag (#37) | `Kumele`/`Kufuneka` → D in all flagged cells; SC pronouns and verb root role-letters reshuffled to avoid adjacent D. |
| 13 | REJECT | — | Current state already conforms: zu #85 has `D:Kufanele`; xh #85 has `D:kufuneka`. No edit needed. |
| 14 | ACCEPT | zu replace | `C:ukhulume + B:kancane`. |
| 15 | ACCEPT | sw replace, ny replace | sw `A:Ni + E:nasoma`; ny `A:Ndi + E:kuwerenga` (display preserved by GLUE). |
| 16 | ACCEPT | sw replace (relabel) | E/F letters swapped without reordering text. |
| 17 | ACCEPT | rw retag | `saa` B→D. |
| 18 | ACCEPT | ny retag | `mvula` B→D. |
| 19 | ACCEPT | xh settext (allowTextChange) | `into yokuncokolisa` → `isikhumbuzo`. |
| 20 | ACCEPT | rw settext (allowTextChange) | `imitsima` → `dumpling` (borrowing, matches sw/ny). |
| 21 | ACCEPT | xh settext (allowTextChange) | `nge-Chinese New Year` → `ngonyaka omtsha wamaTshayina`. |
| 22 | ACCEPT | xh settext (allowTextChange) | `imovie` → `imuvi` (per existing #48 xh precedent). |
| 23 | ACCEPT | xh settext (allowTextChange) | `ilanga` → `yilanga` (copula attached, mirrors zu). |
| 24 | ACCEPT | zu retag, xh retag, sn settext+retag (allowTextChange) | zu/xh `H` → `H\|I` fusion-tag for `esitolo`/`evenkileni`; sn `mushop` → `muchitoro` then `H` → `H\|I`. |
| 25 | ACCEPT | ny replace | `B:mnza + G:‌nga` (ZWNJ-prefixed suffix, per feedback_glue_marker). |
| 26 | ACCEPT | ny settext (allowTextChange) | `chifukwa cha` → `pa`. |

**Issues addressed: 25 of 26** (issue 13 rejected as no-op — already correct). **Edits: 35.**

Pre-flight check: simulated sequential apply against current `data.js`. All 35 edits pass palette guard, adjacency guard, and display-preservation guard (relabel-only replaces preserve text order; agglutinative splits in #3/#41 reconciled via GLUE).

Notes on the dominant systemic finding ("zu/xh verb-object/copula-adjective fusion"): retained `belihlanzekile` (#33) as a single `B|D` fusion tag rather than a root split, because zu past-tense TAM `be-li-` and `-hlanzeki-le` form one orthographic word and the precedent (`sw #89 siwezi`) is fusion-tag rather than morphological split. All other zu cells (#3, #5, #8, #34, #56, #65 xh, #78, #87) are split per sibling consistency. xh `Kufuneka`/`Kufanele` unified to `D` across #37/#39/#54 per `feedback_impersonal_modal_as_D`.

**Closure: ready for reviewer round 2.** Recommend reviewer confirm the `B|D` fusion choice for #33 zu and the `H|I` fusion choice for #1 zu/xh/sn; if they prefer root-level splits, that can be deferred to a later round.

