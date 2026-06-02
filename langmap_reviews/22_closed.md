# LangMap データレビュー #22 — Mongolic, Tungusic & Uralic

## レビュアー自己紹介 (ペルソナ)

ハンドルは **@altai_glottologist**、本名は Dr. Sarangerel B.-Tamir。モンゴル国立大学でモンゴル語形態統語論の博士号を取得後、ヘルシンキ大学フィン・ウゴル学科で客員研究員を務め、現在はウラル・アルタイ諸語の比較形態論を専門とする。依拠する主な資料は、モンゴル語については Janhunen (2012) *Mongolian*、内モンゴル伝統縦書き正書法は『蒙古文正字法詞典』および MongolWriting (Menksoft) の正書法規範、満洲語については Norman *A Comprehensive Manchu-English Dictionary* (2013) と渡部薫太郎の文法、フィンランド語は *Iso suomen kielioppi* (VISK)、エストニア語は *Eesti keele grammatika* (EKG)、ハンガリー語は Kenesei et al. *Hungarian* (Routledge Descriptive Grammars) を常用する。最も自信を持って判定できるのはモンゴル語(キリル文字)とフィンランド語・エストニア語・ハンガリー語で、満洲語は文献言語としての復元的判定になるため確実度を一段下げて扱う。

## 検証範囲

mn / mn_cn / mnc / fi / et / hu の6言語について全100文を精査した。特にウラル諸語の格接辞分割(ZWNJ グルー)と、満洲語・内モンゴル語の縦書き綴りの妥当性、モンゴル語キリル文字の語彙選択に重点を置いた。クエリツールで #1, #4, #5, #7, #8, #10, #11, #18, #21, #44, #83, #84, #85, #88, #91, #92 の実データを直接照合し、スライスと一致することを確認済み。

## 指摘事項 (Issues found)

### 1. #8 mnc — セルの内容が全く別の文（データ破損）【確実】
**Current:** A:「ᠪᡳ」(bi=私) C:「ᠨᡳᡴᠠᠨ ᡤᡠᡵᡠᠨ ᡩᡝ」(nikan gurun de=中国に) B:「ᠰᡠᠨᠵᠠ ᠠᠨᡳᠶᠠ」(sunja aniya=五年) D:「ᡨᡝᡥᡝ」(tehe=住んだ)
**Problem:** 原文は「お母さんは毎日夕食を作ります」だが、満洲語セルは「私は中国に五年住んだ」という全く無関係な文になっている。主語 A も「お母さん(eme)」でなく「私(bi)」。役割letter(C=動詞cook, B=dinner, D=every day)と中身が一致せず、データの取り違え。
**Proposed fix:** 正しい満洲語に差し替え。例: A:「ᠮᡳᠨᡳ ᡝᠮᡝ」(mini eme=私の母) D:「ᡳᠨᡝᠩᡤᡳ ᡩᠠᡵᡳ」(inenggi dari=毎日) B:「ᠶᠠᠮᠵᡳ ᠪᡠᡩᠠ ᠪᡝ」(yamji buda be=夕食を) C:「ᠠᡵᠠᠮᠪᡳ」(arambi=作る)。

### 2. #11 mnc — セルの内容が全く別の文（データ破損）【確実】
**Current:** A:「ᡝᡵᡝ ᠪᠠᡩᡝ」(ere bade=この場所で) B:「ᠰᠠᡳᠨ」(sain=良い) C:「ᠪᡠᡩᠠ ᠵᡝᡵᡝ ᠪᠣᠣ」(buda jere boo=食堂) D:「ᠪᡳ」(bi)
**Problem:** 原文は「私は昨日本屋で新しい本を買いました」。満洲語セルは語彙(良い・食堂)も語順も全く対応しておらず、役割letter(C=bought, D=a new, E=book, B=at the bookstore, F=yesterday)が完全に崩れている。明らかな取り違え・破損。
**Proposed fix:** 正しい文へ全面差し替え。例: A:「ᠪᡳ」(bi) F:「ᠰᡳᡴᠰᡝ」(sikse=昨日) B:「ᠪᡳᡨᡥᡝ ᡠᡩᠠᡵᠠ ᠪᠣᠣ ᡩᡝ」(bithe udara boo de=本屋で) D:「ᡳᠴᡝ」(ice=新しい) E:「ᠪᡳᡨᡥᡝ ᠪᡝ」(bithe be=本を) C:「ᡠᡩᠠᡥᠠ」(udaha=買った)。

### 3. #5 mnc — 「コーヒー」の訳語が不適切【蓋然】
**Current:** B:「ᡴᡳᡨᠠᠨ ᡳ ᠮᡠᡴᡝ」(kitan i muke)
**Problem:** kitan i muke は字義的には「契丹(キタイ)の水」で、コーヒーの満洲語訳として一般的でない造語。#55 では同じコーヒーが B|E|F:「ᠵᡠᠸᡝ ᠮᠣᠶᠣᡥᠣ ᡴᡳᡨᠠᠨ ᡳ ᠮᡠᡴᡝ」と再び使われており群内では一貫しているが、語彙選択としては疑問。満洲語に固有語がない近代語彙であり、外来音写 kafei/kāfī を用いるのが自然。
**Proposed fix:** B:「ᡴᠠᡶᡝᡳ」(kafei) など音写語に統一(#55も同様に修正)。【蓋然】

### 4. #4 mnc — 「station(駅)」の訳語が誤り【蓋然】
**Current:** B:「ᡥᡡᠰᡠᡨᡠᠨ」(hūsutun)
**Problem:** hūsutun は満洲語で「力・勢力(strength)」を意味する語で「駅」ではない。#36, #97 でも同じ hūsutun が「station」として繰り返し使われており、群内で系統的な誤訳。満洲語で駅・宿駅は giyamun(ᡤᡳᠶᠠᠮᡠᠨ)。
**Proposed fix:** B を「ᡤᡳᠶᠠᠮᡠᠨ」(giyamun)に統一(#36 の C、#97 の C も同様に giyamun i へ)。【蓋然】

### 5. #1 fi/hu — モーダル「want to」(B)のセグメント欠落・融合【蓋然】
**Current (fi):** A:「Haluaisin」(=I would like)…B セグメントなし。
**Problem:** プロジェクト方針では「want to」相当のモーダルは独立 letter(B)を保持し主語(A)と別扱いする。フィンランド語 Haluaisin は「(I) would-like」で主語+モーダルが一語に融合しているのに letter は A のみ。同文の et は A:「Ma」B:「tahan」と正しく分離しており、群内不整合。
**Proposed fix:** fi は A|B:「Haluaisin」と複合letter表記にして B の存在を明示(et・hu と揃える)。mn は問題なし。【蓋然】

### 6. #18 mn — 「too expensive(高すぎる)」の副詞が誤訳【確実】
**Current:** C:「жаахан」(=少し/ちょっと) D:「үнэтэй」(=高い)
**Problem:** жаахан は「少し・ちょっと」で「~すぎる(too)」の意味にならない。en は「too expensive(高すぎる)」。жаахан үнэтэй は「ちょっと高い」で過剰の含意がない。モンゴル語で「~すぎる」は хэт / хэтэрхий。なお mn_cn は C:「ᠬᠡᠲᠦᠷᠬᠡᠢ」(hetürhei=過度に)と正しく訳しており、本来同義であるべき近縁変種なのに乖離している。
**Proposed fix:** mn の C を「хэт」または「хэтэрхий」に修正(mn_cn と整合)。【確実】

### 7. #44 hu — 「世界中を/around the world」の格が誤り【確実】
**Current:** B:「a világban」(=世界の中で、内格 inessive) C:「utazni」
**Problem:** a világban は「世界(の内部)で」という静的所在で、「世界中を旅する(travel around the world)」の移動・遍歴の意味にならない。ハンガリー語で「世界中を旅する」は a világ körül utazni(körül=~の周りを)あるいは bejárni a világot。fi(ympäri maailmaa)・et(ümber maailma)・mn(дэлхийг тойрон)はいずれも「周りを巡る」を正しく表現しており、hu だけが静的内格で意味がずれている。
**Proposed fix:** B:「a világ körül」に修正(C「utazni」はそのまま)。【確実】

### 8. #83 et — 動詞 treenida の綴り誤り【確実】
**Current:** C:「treneerida」
**Problem:** エストニア語で「トレーニングする・運動する」の不定詞は treenida。treneerida は綴り誤り(余分な -ee-)。EKG・ÕS(Õigekeelsussõnaraamat)いずれも treenida。#67 では正しく D:「treenin」(現在形)が使われており、#83 だけ綴りが崩れている。
**Proposed fix:** C:「treenida」に修正。【確実】

### 9. #85 hu — モーダル D が二箇所に分断され重複letter【蓋然】
**Current:** A:「Neked」 D:「kellene」 E:「több」 B:「vizet」 D:「innod」
**Problem:** D が「kellene」(should)と「innod」(drink-2SG personal infinitive)の二つに割り当てられ、間に E・B を挟んで非隣接の重複letterになっている。innod は本来「飲む(drink)」=役割 C(動詞)であるべきで、should の D に巻き込まれている。「~したほうがいい」は kellene + 人称不定詞(innod)で、kellene=D(should)、innod=C(drink)と分けるのが en の役割対応(D:should, C:drink)に合致する。
**Proposed fix:** A:「Neked」 D:「kellene」 E:「több」 B:「vizet」 C:「innod」(末尾を C に再ラベル)。【蓋然】

### 10. #84 et — 「風邪をひいた」の構文が不完全【要検討】
**Current:** A:「Ta」 C:「jäi」 B:「külmetuse」 D|E:「eelmisel nädalal」
**Problem:** エストニア語で「風邪をひいた」は sai külmetuse か jäi külmetusse(向格 illative)が定型で、jäi + külmetuse(属格/分格)では座りが悪い。en では B=a cold, C=caught と分かれるが C:「jäi」(=とどまった/なった)に caught を当てるのは動詞選択として弱い。fi は B|C:「vilustui」と一語動詞で正しくまとめている。
**Proposed fix:** B|C:「sai külmetuse」、または C:「jäi」 B:「külmetusse」(向格化)。【要検討】

### 11. #92 fi — 「餃子(dumplings)」の訳語が不適切【蓋然】
**Current:** B:「nyyttejä」
**Problem:** nyytti は「包み・風呂敷包み」で食べ物の餃子を一般に指さない。文脈(旧正月の餃子)では誤解を招く。et は B:「pelmeene」(ロシア由来 pelmeni)と地域的に自然な訳を採用しており対照的。fi でも単独 nyyttejä は餃子と分からず不自然。
**Proposed fix:** B:「dumplingeja」または「kiinalaisia nyyttejä」等、餃子と分かる形へ。【蓋然】

### 12. #1 mnc — 「try on(試着)」の動詞 C が否定形になっている【蓋然】
**Current:** C:「etuki tuwarakū」
**Problem:** tuwarakū は tuwa-(見る/試す)+-rakū(否定)で「~しない/試さない」。原文は「試着したい(肯定の願望)」で、否定接辞 -rakū が付くのは誤り。「試しに着てみる」は etuki tuwaki(試着してみたい)等が自然。
**Proposed fix:** C:「etuki tuwaki」(否定接辞を除去)。【蓋然】

### 13. #73 fi — 所有接辞 -ni の分割が群内で不統一【蓋然】
**Current:** A|E:「Kissani」
**Problem:** フィンランド語所有接辞 -ni(my)の扱いが、#50/#51 では分割(E:「‌ni」を ZWNJ で独立)、#73 では融合(A|E:「Kissani」)と不統一。プロジェクト方針(膠着接辞は ZWNJ で独立分割)に照らせば #73 も分割すべき。
**Proposed fix:** #73 fi を A:「Kissa」 E:「‌ni」 に分割して #50/#51 と揃える。【蓋然】

### 14. #100 et — everything と for の letter対応が逆転【要検討】
**Current:** B:「Aitäh」 C:「kõige」 A:「eest」
**Problem:** 構文(Aitäh kõige eest=everything-GEN for)は自然で正しいが、A(everything)が後置詞 eest に、C(for)が kõige に割り当てられている。実際には kõige=everything(A)、eest=後置詞 for(C)。
**Proposed fix:** A:「kõige」 C:「eest」に入れ替え。【要検討】

### 15. #66 fi — 重複letter C が非隣接で分断【要検討】
**Current:** A:「Vuori」 C:「on」 B:「lumen」 C:「peitossa」
**Problem:** C が「on」と「peitossa」に分かれ間に B:「lumen」を挟む非隣接重複。olla lumen peitossa(雪に覆われている)は枠構造の連語で意味的には妥当だが、プロジェクトの「非隣接同一letterは避ける」原則と衝突しうる。
**Proposed fix:** 方針次第。peitossa を B|C 等に再編、または枠構造を許容。【要検討】

### 16. #88 mnc — 「AI」の訳語の妥当性【要検討】
**Current:** A:「ᠰᡠᡵᡝ ᠰᠠᡳᠨ ᡨᡝᡨᡠᠨ」(sure sain tetun=賢く良い器具)
**Problem:** AI(人工知能)の定訳ではなく恣意的な説明的造語。満洲語に近代語 AI の確立訳はないため造語は不可避だが、mn の「Хиймэл оюун ухаан(人工知能)」のように「人工+知」の構成が望ましい。
**Proposed fix:** 例「ᠠᡵᠠᡥᠠ ᠰᡠᡵᡝ」(araha sure=人工の知)等。確実度低。【要検討】

## 総評

ウラル諸語(fi/et/hu)とモンゴル語キリル(mn/mn_cn)のデータは概ね高品質で、格接辞分割(#25, #26, #46, #52, #53 等)や ZWNJ グルーの運用は適切。指摘の中心は (a) 満洲語(mnc)の信頼性で、特に **#8・#11 は明確なセル取り違え/破損**であり最優先修正、加えて hūsutun(駅)・kitan i muke(コーヒー)など系統的な訳語誤りが複数文に波及している。(b) モンゴル語 mn と mn_cn は本来同義であるべき近縁変種だが #18(жаахан vs хэтэрхий)で乖離があり群内整合を取るべき。(c) fi/et/hu は #44(hu 格誤り)、#83(et 綴り)、#85(hu モーダル分断)など個別の確実な誤りが残る。

## 開発チーム回答 — round 1 (作業者)

mn/mn_cn/mnc/fi/et/hu のライブ値を `.wf_langmap_query.mjs` で全件照合しました。満洲語(mnc)は当方が一次辞書を独自検証できないため、「全くの別文＝データ破損」が立証できるものは出典付き再構成を採用し、辞書一語の真偽に依存する系統的訳語は誠実に保留して出典提示を依頼します。

### 1. #8 mnc 別文（データ破損）—— APPLIED（本ラウンドでオーケストレータ適用）
ライブ値 `A:「ᠪᡳ」(bi=私) C:「ᠨᡳᡴᠠᠨ ᡤᡠᡵᡠᠨ ᡩᡝ」 B:「ᠰᡠᠨᠵᠠ ᠠᠨᡳᠶᠠ」 D:「ᡨᡝᡥᡝ」` を確認。「私は中国に五年住んだ」で原文「お母さんは毎日夕食を作ります」と全く無関係＝明白なセル取り違え。ご提案（Norman 辞書準拠）の正しい文へ全面差し替え：A:「ᠮᡳᠨᡳ ᡝᠮᡝ」 D:「ᠢᠨᡝᠩᡤᡳ ᡩᠠᡵᡳ」 B:「ᠶᠠᠮᠵᡳ ᠪᡠᡩᠠ ᠪᡝ」 C:「ᠠᡵᠠᠮᠪᡳ」。

### 2. #11 mnc 別文（データ破損）—— APPLIED
ライブ値 `A:「ᡝᡵᡝ ᠪᠠᡩᡝ」 B:「ᠰᠠᡳᠨ」 C:「ᠪᡠᡩᠠ ᠵᡝᡵᡝ ᠪᠣᠣ」 D:「ᠪᡳ」`（この場所/良い/食堂）を確認。原文「私は昨日本屋で新しい本を買いました」と無関係＝破損。ご提案の正しい文へ全面差し替え：A:「ᠪᡳ」 F:「ᠰᡳᡴᠰᡝ」 B:「ᠪᡳᡨᡥᡝ ᡠᡩᠠᡵᠠ ᠪᠣᠣ ᡩᡝ」 D:「ᠢᠴᡝ」 E:「ᠪᡳᡨᡥᡝ ᠪᡝ」 C:「ᡠᡩᠠᡥᠠ」。

### 3. #5/#55 mnc `kitan i muke`(コーヒー)—— HELD（群内一貫・近代造語）
コーヒーは満洲語に固有語がない近代語彙で、「契丹の水」式の造語か音写かは設計判断。#5/#55 で群内一貫しており、明白な誤りではないため現状維持（音写統一はオーナー方針判断）。

### 4. #4/#36/#97 mnc `hūsutun`(=力)を station に誤用 —— HELD（要出典・系統的だが未検証）
ライブ値で3文とも hūsutun を station に使用。giyamun(駅・宿駅)というご提案は妥当そうですが、当方は満洲語一次辞書を独自検証できません。Norman 辞書の hūsutun / giyamun 該当見出しを提示いただければ #4 B・#36 C・#97 C を一括で giyamun へ統一します。

### 5. #1 fi/hu モーダル B の融合 —— APPLIED（fi のみ）
ライブ値 fi A:「Haluaisin」（主語＋would-like が一語に融合）、et は A:「Ma」 B:「tahan」 と分離を確認。当データは複合letter表記（et の H|I:「poes」、fi の #84 B|C:「vilustui」等）を採用しているため、fi の Haluaisin を `A|B:「Haluaisin」` と複合letter化して B(モーダル)の存在を明示します（surface 不変）。hu は既に A:「Fel」 B:「akarom」 と分離済みで問題なし。

### 6. #18 mn `жаахан`(=少し)を too に誤訳 —— APPLIED
ライブ値 mn C:「жаахан」 D:「үнэтэй」、対する近縁 mn_cn は C:「ᠬᠡᠲᠦᠷᠬᠡᠢ」(hetürhei=過度に) を確認。жаахан は「少し」で en の「too(過剰)」にならず、本来同義であるべき mn_cn と乖離。→ mn C を「хэтэрхий」に修正（mn_cn と整合）。

### 7. #44 hu `a világban`(内格)を around the world に誤用 —— APPLIED
ライブ値 hu B:「a világban」(inessive=世界の中で静的)、fi「ympäri maailmaa」/et「ümber maailma」/mn「дэлхийг тойрон」 は移動・遍歴を表現。hu のみ静的内格で意味がずれ。→ B:「a világ körül」 に修正（C「utazni」は不変）。

### 8. #83 et `treneerida` 綴り誤り —— APPLIED
ライブ値 C:「treneerida」 を確認。#67 では D:「treenin」 と正しい語幹。余分な -ee- は綴り誤り。→ C:「treenida」 に修正。

### 9. #85 hu モーダル D の非隣接重複 —— APPLIED
ライブ値 `A:「Neked」 D:「kellene」 E:「több」 B:「vizet」 D:「innod」` を確認。D が二箇所（kellene…innod）で非隣接重複。innod は動詞(drink)＝役割 C（en: D:should, C:drink）。→ 末尾を C に再ラベル：`A:「Neked」 D:「kellene」 E:「több」 B:「vizet」 C:「innod」`。

### 10. #84 et 「風邪をひいた」構文 —— HELD（要検討）
ライブ値 C:「jäi」 B:「külmetuse」 を確認。jäi külmetusse(向格)/sai külmetuse が定型というご指摘は妥当そうですが、レビュアー自身【要検討】とし、現形も理解可能。EKG/ÕS の該当記述提示で再検討します。

### 11. #92 fi `nyyttejä`(=包み)を餃子に —— HELD（語選択・未確証）
ライブ値 fi B:「nyyttejä」、et B:「pelmeene」 を確認。nyytti が餃子と分かりにくいというご指摘は理解しますが、フィンランド語に固有の餃子語がなく、これは翻訳自然度の判断で明白な誤りとは言い切れません（nyytti は包み食品も指しうる）。より自然な訳の合意（dumplingeja 等）が取れれば修正します。

### 12. #1 mnc `tuwarakū`(否定形)—— APPLIED
ライブ値 C:「etuki tuwarakū」 を確認。-rakū は満洲語の否定接辞で「試さない」となり、肯定の願望「試着したい」に否定が付くのは構文誤り（jam の kyaan 誤用と同型）。→ C:「etuki tuwaki」 に修正（否定接辞を除去）。

### 13. #73 fi 所有接辞 -ni 分割の不統一 —— APPLIED
ライブ値 #73 A|E:「Kissani」（融合）、#50/#51 E:「‌ni」（ZWNJ 分割）を確認。膠着接辞は ZWNJ で独立分割する方針＋当方の分割優先方針に従い → #73 を `A:「Kissa」 E:「‌ni」` に分割（#50/#51 と統一）。

### 14. #100 et everything/for の letter逆転 —— APPLIED
ライブ値 `B:「Aitäh」 C:「kõige」 A:「eest」`、en は A:everything, C:for を確認。kõige(=everything)が C、eest(=後置詞 for)が A と逆転。→ kõige を A、eest を C に再ラベル（B→A→C の順で隣接重複なし）。

### 15. #66 fi 非隣接重複 C —— HELD（枠構造・要検討）
ライブ値 `A:「Vuori」 C:「on」 B:「lumen」 C:「peitossa」` を確認。en/sco/et は「is covered/on kaetud」を単一 C で扱い、fi は olla X:n peitossa の枠構造で C が分断＆間に B が入る非隣接重複。参照の役割スキームに「covered」用の別letterがなく、語順を保ったまま重複を解消する安全な再ラベルがありません。レビュアーも【要検討】。枠構造を許容する方針確定まで保留。

### 16. #88 mnc 「AI」訳語 —— HELD（要検討・近代造語）
AI に満洲語の確立訳はなく造語不可避。mn の「Хиймэл оюун ухаан(人工知能)」式の構成が望ましいというご提案は妥当ですが確実度低・造語であり、オーナー方針判断として保留。

## レビュアー再評価 — round 2 (@altai_glottologist / Dr. Sarangerel B.-Tamir)

開発チームの round 1 回答について、`.wf_langmap_query.mjs` で全 APPLIED 項目をライブ照合した。結論を先に述べると、APPLIED と申告された 11 項目はすべてライブデータに正しく反映されており、申告と実データの食い違いはゼロだった。HELD 項目のうち lexical/naturalness 系は当方も誠実に検討して大半を CONCEDE するが、**#4/#36/#97 の hūsutun(=力)→ station 系統誤訳だけは出典を提示できるため actionable として残す**。

### APPLIED 項目の検証（全件ライブ確認済み）

1. **#8 mnc 別文差し替え —— ✓ 承認**
   ライブ: `A:「ᠮᡳᠨᡳ ᡝᠮᡝ」 D:「ᠢᠨᡝᠩᡤᡳ ᡩᠠᡵᡳ」 B:「ᠶᠠᠮᠵᡳ ᠪᡠᡩᠠ ᠪᡝ」 C:「ᠠᡵᠠᠮᠪᡳ」`。提案どおり「私の母／毎日／夕食を／作る」に修正され、役割letter(A=主語,D=毎日,B=夕食,C=作る)と中身が一致。破損解消。

2. **#11 mnc 別文差し替え —— ✓ 承認**
   ライブ: `A:「ᠪᡳ」 F:「ᠰᡳᡴᠰᡝ」 B:「ᠪᡳᡨᡥᡝ ᡠᡩᠠᡵᠠ ᠪᠣᠣ ᡩᡝ」 D:「ᠢᠴᡝ」 E:「ᠪᡳᡨᡥᡝ ᠪᡝ」 C:「ᡠᡩᠠᡥᠠ」`。「私／昨日／本屋で／新しい／本を／買った」で全letter整合。破損解消。

3. **#1 fi モーダル B 複合化 —— ✓ 承認**
   ライブ fi: `A|B:「Haluaisin」`。主語+would-like 融合語に B(モーダル)の存在を明示。et の `A:「Ma」 B:「tahan」` と役割上揃い、群内整合が回復。複合letter表記はデータの既存慣行(et `H|I:「poes」`, fi `#84 B|C:「vilustui」`)とも一貫。なお hu は当初から `A:「Fel」 B:「akarom」` と分離済みで問題なし(指摘5の hu 部分は当方の見落とし、撤回)。

6. **#18 mn хэт/хэтэрхий —— ✓ 承認**
   ライブ mn: `C:「хэтэрхий」 D:「үнэтэй」`。жаахан(=少し)を хэтэрхий(=過度に)に修正。近縁 mn_cn の hetürhei と整合し「too expensive」の過剰含意を正しく表現。

7. **#44 hu a világ körül —— ✓ 承認**
   ライブ hu: `B:「a világ körül」 C:「utazni」`。内格 világban(静的所在)を körül(~の周りを)に修正。fi ympäri / et ümber / mn тойрон の「遍歴」と整合。

8. **#83 et treenida —— ✓ 承認**
   ライブ et: `C:「treenida」`。余分な -ee- を除去。#67 の treenin と語幹一致。ÕS 準拠の正書。

9. **#85 hu innod を C へ再ラベル —— ✓ 承認**
   ライブ hu: `A:「Neked」 D:「kellene」 E:「több」 B:「vizet」 C:「innod」`。末尾を D→C に変更し、非隣接の D 重複を解消。innod(drink)=C, kellene(should)=D で en(D:should, C:drink)と整合。隣接同一letter重複も発生せず。

12. **#1 mnc tuwaki(否定接辞除去)—— ✓ 承認**
    ライブ mnc: `C:「etuki tuwaki」`。否定 -rakū を除去し肯定の願望「試着してみたい」に修正。

13. **#73 fi -ni 分割 —— ✓ 承認**
    ライブ fi: `A:「Kissa」 E:「‌ni」`(ZWNJ グルー付)。#50/#51 の所有接辞分割と統一。分割優先方針に合致し、隣接重複も無し。

14. **#100 et kõige/eest 入れ替え —— ✓ 承認**
    ライブ et: `B:「Aitäh」 A:「kõige」 C:「eest」`。kõige(everything)=A, eest(後置詞 for)=C に修正。en(A:everything, C:for)と整合、B→A→C で隣接重複なし。

### HELD 項目の判定

5. **#5/#55 mnc kitan i muke(コーヒー)—— △→CONCEDE**
   ライブで #5・#55 とも kitan i muke を確認。満洲語に固有のコーヒー語はなく、「契丹の水」式造語か音写かは設計判断。群内一貫しており明白な誤りではない。音写統一はオーナー方針案件として当方も取り下げる。**concede。**

10. **#84 et jäi külmetuse —— △→CONCEDE**
    ライブ `C:「jäi」 B:「külmetuse」`。sai külmetuse / jäi külmetusse(向格)が定型という指摘は維持するが、当方自身が当初【要検討】とした項目であり、現形も理解可能。出典(EKG/ÕS の külmetus 項)を即時提示できる規範差ではないため、停止条件に従い「既知の限界」として取り下げる。**concede。**

11. **#92 fi nyyttejä(餃子)—— △→CONCEDE**
    ライブ fi `B:「nyyttejä」`、et `B:「pelmeene」`。nyytti は包み食品も指し得るため明白な誤訳とは言い切れない、という開発側の反論は妥当。翻訳自然度の範疇でありオーナー判断に委ねる。**concede。**

15. **#66 fi 非隣接 C(on…peitossa)—— ✗→CONCEDE（反論を認める）**
    ライブ `A:「Vuori」 C:「on」 B:「lumen」 C:「peitossa」`。当文の参照役割スキームは A(山)/B(雪)/C(覆われている)の3つのみで「copula と被覆述語を分ける別letter」が存在しない。olla X:n peitossa は copula+所格述語の枠構造であり、lumen(雪-属格)は peitossa と一体。同一文で zh/yue/nan/wuu/non 等多数の言語が同型の非隣接 C を採っており(例 non `C:「er」 A:「fjallit」 C:「hulið」`)、これはデータ全体で許容済みのパターン。安全な再ラベルが無いという開発側の反論は正しい。**hold→concede。**

16. **#88 mnc AI 訳語 —— △→CONCEDE**
    造語不可避・確実度低の自己申告どおり、オーナー方針案件として取り下げる。**concede。**

### 系統的訳語(出典提示して actionable に残す)

4. **#4/#36/#97 mnc hūsutun(=力)→ station —— ✗ 未修正・要対応**
   ライブで3文とも未修正を確認: #4 `B:「ᡥᡡᠰᡠᡨᡠᠨ」`、#36 `C:「ᡥᡡᠰᡠᡨᡠᠨ ᡩᡝ」`、#97 `C:「ᡥᡡᠰᡠᡨᡠᠨ ᡳ」`。開発側は「一次辞書を独自検証できないため出典提示を待つ」と HELD にしたので、依頼どおり出典を提示する:
   - **Norman, *A Comprehensive Manchu-English Dictionary* (2013):** _hūsun_ / _hūsutun_ 見出し = "strength, power, force"(力・勢力)。"station/relay" の語義は無い。
   - **同辞書 _giyamun_ 見出し = "post station, relay station, courier station"**(宿駅・駅站)。清代の駅伝制度の「駅」を指す確立語。
   - 近代鉄道「駅」に満洲語の専用語は無いため、歴史語 giyamun(駅站)を充てるのが唯一の防御可能な訳で、hūsutun(力)の流用は明白な語義誤り。
   - → #4 B、#36 C、#97 C を giyamun(ᡤᡳᠶᠠᠮᡠᠨ)系に一括統一(#36 は ᡤᡳᠶᠠᠮᡠᠨ ᡩᡝ、#97 は ᡤᡳᠶᠠᠮᡠᠨ ᡳ と格を保持)。これが残る唯一の actionable。

### 新規指摘
なし(検証中に新たな明白な誤りは発見せず)。

### スコアカード
- APPLIED 申告: 11件 → 全件ライブ反映を確認(✓11)。申告と実データの不一致: 0件。
- HELD 項目: 6件 → うち 5件を CONCEDE(#5/#55, #84, #92, #66, #88)、1系統(#4/#36/#97)を出典付きで actionable として維持。
- 当方の撤回(concede): #1 hu 部分 + #5/#55 + #84 + #92 + #66 + #88 = 計6点。
- 残課題: #4/#36/#97 の hūsutun→giyamun 統一(出典提示済み)1件のみ。

開発チームへ: hūsutun→giyamun は開発側自身が「出典提示で一括適用する」と明言した項目であり、上記 Norman 辞書の見出しが出典です。これを適用すれば本ファイルは即 CLOSE 可能です。

**ファイル状態: OPEN**
次にやること: #4 B / #36 C / #97 C の `hūsutun` を `giyamun`(ᡤᡳᠶᠠᠮᡠᠨ。#36=ᡤᡳᠶᠠᠮᡠᠨ ᡩᡝ, #97=ᡤᡳᠶᠠᠮᡠᠨ ᡳ)へ一括統一(出典: Norman 2013, giyamun / hūsutun 見出し)。

## 開発チーム回答 — round 2 (作業者)

レビュアーの round 2 再評価を受領。残課題は #4/#36/#97 の `hūsutun`(=力/strength)→ station 系統誤訳の1件のみで、他は全て CONCEDE 済み(双方合意)。当該1件について Norman (2013) の出典が提示されたため、round 1 で当方が明言した「出典提示で一括適用する」の約束どおり適用する。

### 4. #4/#36/#97 mnc `hūsutun`(=力)→ station —— APPLIED（本ラウンドでオーケストレータ適用）
ライブ値を3文とも再確認:
- #4 `A:「ᡥᠠᠨᠴᡳᡴᡳ」 B:「ᡥᡡᠰᡠᡨᡠᠨ」 C:「ᠶᠠᠪᠠ ᡩᡝ」 D:「ᠪᡳ」`
- #36 `C:「ᡥᡡᠰᡠᡨᡠᠨ ᡩᡝ」 A:「ᡤᡝᡵᡝᠨ」 B:「ᠨᡳᠶᠠᠯᠮᠠ」 D:「ᠪᡳ」`
- #97 `A:「ᠠᠮᠪᠠ ᡥᡡᡩᠠᡧᠠᡵᠠ ᡦᠣᠣ」 C:「ᡥᡡᠰᡠᡨᡠᠨ ᡳ」 B:「ᠠᠮᠠᠯᠠ」 D:「ᠪᡳ」`

出典(Norman, *A Comprehensive Manchu-English Dictionary*, 2013): hūsun/hūsutun = "strength, power, force" で station の語義なし; giyamun = "post station, relay station, courier station"(駅站)。提示された出典に基づき、surface 内の語彙のみを置換し格接辞(#36 ᡩᡝ 与位格 / #97 ᡳ 属格)は保持して role-letter は不変とする:
- #4 B 「ᡥᡡᠰᡠᡨᡠᠨ」→「ᡤᡳᠶᠠᠮᡠᠨ」
- #36 C 「ᡥᡡᠰᡠᡨᡠᠨ ᡩᡝ」→「ᡤᡳᠶᠠᠮᡠᠨ ᡩᡝ」
- #97 C 「ᡥᡡᠰᡠᡨᡠᠨ ᡳ」→「ᡤᡳᠶᠠᠮᡠᠨ ᡳ」

これで本ファイルの全 actionable 項目が解決。残る HELD/CONCEDE はオーナー方針案件(音写コーヒー・AI 造語等)のみ。

**ファイル状態: CLOSE 可能（全 actionable 解決済み）**

## レビュアー再評価 — round 3 (@altai_glottologist / Dr. Sarangerel B.-Tamir)

開発チームの round 2 回答（残課題 #4/#36/#97 の hūsutun→giyamun）を `.wf_langmap_query.mjs` でライブ照合した。round 2 終了時点で actionable 項目は本1系統のみであり、それ以外は双方合意済みの CONCEDE であった。

### 残課題（系統的訳語）の検証

4. **#4/#36/#97 mnc hūsutun(=力)→ giyamun(駅站) —— ✓ 承認（ライブ反映確認）**
   3文ともライブで置換を確認:
   - #4 `A:「ᡥᠠᠨᠴᡳᡴᡳ」 B:「ᡤᡳᠶᠠᠮᡠᠨ」 C:「ᠶᠠᠪᠠ ᡩᡝ」 D:「ᠪᡳ」` — B が hūsutun → giyamun に置換。
   - #36 `C:「ᡤᡳᠶᠠᠮᡠᠨ ᡩᡝ」 A:「ᡤᡝᡵᡝᠨ」 B:「ᠨᡳᠶᠠᠯᠮᠠ」 D:「ᠪᡳ」` — 与位格 ᡩᡝ を保持して giyamun に置換。
   - #97 `A:「ᠠᠮᠪᠠ ᡥᡡᡩᠠᡧᠠᡵᠠ ᡦᠣᠣ」 C:「ᡤᡳᠶᠠᠮᡠᠨ ᡳ」 B:「ᠠᠮᠠᠯᠠ」 D:「ᠪᡳ」` — 属格 ᡳ を保持して giyamun に置換。
   いずれも role-letter 不変・格接辞保持で、Norman (2013) の giyamun(post/relay station)に基づく正しい修正。当方が round 2 で出典提示した唯一の actionable がこれで完全解消。申告と実データの不一致なし。

### round 2 で CONCEDE 済みの項目（再掲・変更なし）
- #5/#55 mnc kitan i muke（コーヒー造語）— オーナー方針案件として取り下げ済み。
- #84 et jäi külmetuse（風邪構文）— 自己【要検討】・既知の限界として取り下げ済み。
- #92 fi nyyttejä（餃子）— 翻訳自然度の範疇・取り下げ済み。
- #66 fi 非隣接 C（on…peitossa 枠構造）— データ全体で許容済みパターン・反論を認めて取り下げ済み。
- #88 mnc AI 造語 — 造語不可避・オーナー方針案件・取り下げ済み。
- #1 hu モーダル部分（当方の見落とし）— 撤回済み。

### 新規指摘
なし（round 3 の検証で新たな明白な誤りは発見せず。検証はライブ照合のみに限定し、停止条件に従い padding は行わない）。

### スコアカード（round 3）
- APPLIED 申告（round 2）: 1系統3文（#4/#36/#97）→ 全件ライブ反映を確認（✓3）。申告と実データの不一致: 0件。
- 残 actionable: 0件。
- オーナー方針案件（既知の限界・won't-fix として双方合意）: コーヒー音写統一、AI 造語、et 風邪構文、fi 餃子訳、fi 枠構造 — いずれも明白な誤りではなく、停止条件に従い CLOSE。

全 actionable 項目が修正かつライブ検証済みであり、残る点は全て当方が defensible な慣行/既知の限界として受容したもの。本ファイルに actionable な残課題はない。

**ファイル状態: CLOSED — 残課題なし**
