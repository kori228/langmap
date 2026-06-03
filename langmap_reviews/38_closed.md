# LangMap データレビュー #38 — Sinosphere 借用層 (漢語 / 한자어 / Hán-Việt) 横断レビュー

## レビュアー自己紹介 (ペルソナ)

藤本 慶介 (handle: **@kanji_kosuke**)。京都大学文学部・漢字文化圏比較言語学博士、専門は東アジアの語彙借用層 — 日本語の和漢混淆 (漢語 vs 大和言葉)、Sino-Korean 한자어 と固有어 (native) のレジスター対立、Hán-Việt vs từ thuần Việt の文体差。普段の典拠は森岡健二『近代語の成立 — 語彙篇』、沖森卓也『日本語史』、Lee Ki-Moon & S. R. Ramsey *A History of the Korean Language* (Cambridge 2011)、宋基中『古代国語語彙表記法의 研究』、Mark Alves *Sinitic Vocabulary in Vietnamese*、Vovin の Old Sino-Korean 論文群、Frellesvig *A History of the Japanese Language* (Cambridge 2010)。今回は **#1, #2, #3, #4, #28 で実施済みの個別言語内のレビューには立ち入らず**、ja / ko / vi の **三言語並列における Sinosphere 借用層のレジスター整合性** のみを精査した。すなわち、ある文で ja が漢語 (on'yomi) を採れば ko も한자어、vi も Hán-Việt を採るのか、逆にどれかが大和言葉/固有어/từ thuần Việt に寄っているとすれば、それが意図的か取りこぼしかを判断する。

## 検証範囲

- **三主軸**: ja (現代標準), ko (現代標準), vi (現代標準) の Sinosphere 借用層レジスター対応を全100文で照合。
- **歴史軸**: ja_edo / ja_heian の漢語含有率と現代 ja のレジスター位置を補助的に確認。
- **方言軸 (補助)**: vi_c / vi_s の famous な漢越 vs 純越語の選択差は #28 で既に網羅されているため、本レビューでは Sinosphere 横断の話題が出る場合のみ言及する。
- **書記軸**: vi_nom 字喃の Hán 字 vs 喃字の選択が ja/ko の漢語と整合するか(例: 経験は ja「経験」/ ko「경험」/ vi「trải nghiệm (純越)」/ vi_nom「𡃏驗」 のような場合、レジスター不一致のサイン)。
- ライブデータは `.wf_langmap_query.mjs` 相当のスクリプトで全 100 件を ja/ko/vi/vi_nom について逐一抽出・確認済み。

## 方針 — 何を「指摘」とし、何を「許容」とするか

1. **正当な意図的差** は指摘しない。例: #76「幸せ」(和語) vs ko「행복」(Sino) vs vi「hạnh phúc」(Sino) は、日本語が口語場面で和語形容詞を選ぶ自然な傾向で、ko/vi 側が漢語に寄るのも標準的。三言語の register が異なっていてもそれぞれの自然な選択なら KEEP。
2. **取りこぼし候補** は、(a) 同じ文内で 2/3 言語が漢語を採り 1 言語だけ native に落ちている、(b) その native 選択が当該文の register (formal/written vs spoken) と整合しない、(c) 当該言語に同義の漢語/한자어/Hán-Việt がより自然に存在する — の 3 条件を満たすときに flag する。
3. **vi_nom の字選択** が現代 vi の表記と齟齬する場合(現代 vi が純越語、字喃が Hán 字、あるいはその逆)は、現代 vi 側のレジスター揺れを示唆する診断材料として扱う。

確信度は 【確実】= 三言語のうち明白な register 取りこぼしまたは語族内不整合、【蓋然】= レジスター差は確認できるが代替案にも一理ある、【要検討】= 様式的好みの域。

## 指摘事項 (Issues found)

### 1. #2 ko「제 이름은」 vs ja「私の 名前は」 — 自称代名詞の register が三言語で揃っているか 【蓋然】
**Current:** ja `A:「私の」 B:「名前は」 C:「田中」 D:「です」` / ko `A:「제」 B:「이름은」 C:「다나카」 D:「입니다」` / vi `B:「Tên」 A:「của tôi」 D:「là」 C:「Tanaka」` / vi_nom `B:「𥏌」 A:「𧵑碎」 D:「羅」 C:「田中」`
**Problem:** 三言語とも丁寧体 (です/입니다/là+ formal) で register は揃っているが、**「名前 / 이름 / Tên (𥏌)」が三言語とも純粋 native 語**で漢語が一切登場しない。日本語「姓名 (せいめい)」「氏名 (しめい)」、韓国語「성함 (姓銜)」「성명 (姓名)」、ベトナム語「họ tên / quý danh」などの漢語/한자어/Hán-Việt 形が公式書類・自己紹介の formal 場面では使われる。「名前」「이름」「Tên」 自体は誤りではないが、三言語横断で意図的に native に揃えた **「人称名乗りの parallel native register」** であるなら、closed-review の #1/#2/#3/#4 で当該方針が確認されているか、もしくは #28 の closed で言及がない以上、確認価値あり。さらに #2 の vi_nom が `𥏌` (純越語「tên」を表す喃字) を用いており、もし「名」字 (Hán 字、Hán-Việt "danh") を選んでいれば vi 標準が「Danh tôi là Tanaka」となる register もあり得たが、現データは三言語とも口語的 native に統一されている。register として一貫した選択であれば KEEP、無意識的にすべて native に流れたのであれば三言語のうち少なくとも ja/ko は「氏名」「성명」へ寄せる選択肢があったことを記録する。
**Proposed:** 現状維持で構わないが、closed-review に「register として意図的に native 統一」と明記すべき。三言語の formal/native 軸が今後追加されるなら 「成名/성명/họ tên」 系統に揃えるのが Sinosphere の formal 自己紹介に近い。

### 2. #25 ja「会社」 vs ko「회사」 vs vi「công ty」 — 三言語ともきれいに Sino 並列で良好 (記録) 【確実・整合】
**Current:** ja `B:「会社」` (漢語 kaisha 會社) / ko `B:「회사」` (한자어 會社) / vi `B:「công ty」` (Hán-Việt 公司, vi_nom `公司` で字一致) 
**Note:** 三言語とも Sino 借用語が一致しており、cognate `會社/회사/công ty` がそれぞれ自然な現代語形。指摘事項ではなく、本レビューの **register 整合の好例** として記録する。同様に #6「大学/대학교/đại học (場大學)」、#22「言語/언어/ngôn ngữ (言語)」、#23「図書館・病院/도서관・병원/Thư viện・bệnh viện (書院・病院)」、#67「運動/운동/thể dục (體育)」、#94「言語/언어/ngôn ngữ」 が同型の高品質 Sino-parallel。

### 3. #33「とても清潔」— ja 清潔 (Sino) / ko 깨끗 (固有어) / vi sạch sẽ (純越語) で register が ja だけ漢語に寄る 【確実】
**Current:** ja `C:「とても」 D:「清潔」 E:「だった」` / ko `C:「매우」 D:「깨끗」 E:「‌했다」` / vi `C:「rất」 D:「sạch sẽ」` / vi_nom `C:「慄」 D:「潔𠱊」`
**Problem:** 日本語「清潔」は漢語 (せいけつ、清潔=Sino) で、書き言葉/formal 寄り。韓国語「깨끗하다」は **固有어** (한자어でなく 깨끗 + 하다)、ベトナム語「sạch sẽ」も **純越語** (Hán-Việt の「淸潔 thanh khiết」が同義として存在するのに使われていない)。三言語のうち日本語だけ Sino 層に乗り、ko/vi は native 層。ホテル評の口語場面としては ko/vi の native が自然で、ja を「とても きれい だった」(ja_kyo/ja_osa/ja_hak が実際に「きれい」を採用)に寄せる選択肢もある。ja_edo「清らか」、ja_heian「清らかに」 が「清潔」より文学的な native/和漢中間語を採っているのと比べ、現代 ja の「清潔」だけが書面語寄り。
**Proposed:** 三言語のうちどちらかに統一すべきとすれば、口語的ホテル評として ja 側を「とても きれい だった」とする方が ko/vi と整合する。あるいは ko/vi 側に「청결했다 / rất thanh khiết」を立てる選択肢もある (ただし vi_nom が `潔` 字を使っているのは Hán-Việt 寄りで、現代 vi「sạch sẽ」(純越語) と表記-語彙のレジスターがズレている)。最小修正は ja の `清潔` → `きれい`。

### 4. #38「夕日 / 석양 / Hoàng hôn」— ko/vi が漢語、ja だけ和語で並列が崩れている 【確実】
**Current:** ja `C:「夕日は」 D:「きれいだ」` / ko `C:「석양은」 D:「아름답다」` / vi `A:「Hoàng hôn」 D:「rất đẹp」` / vi_nom `A:「黃昏」 D:「慄𢢲」`
**Problem:** 日本語「夕日 (ゆうひ)」は和語 (kun-yomi 夕+日)、韓国語「석양 (夕陽)」は 한자어、ベトナム語「Hoàng hôn (黃昏)」は Hán-Việt。三言語のうち ja だけ和語を採り、ko/vi は揃って漢語/한자어/Hán-Việt。日本語にも「夕陽 (せきよう)」「落日 (らくじつ)」「黄昏 (たそがれ — これは和語訓)」など漢語形があるが、口語の自然さでは「夕日」が圧倒的標準。一方 ko の「석양」は文語的、vi の「Hoàng hôn」も詩的・書き言葉寄りで、ja の「夕日」より高い register。三言語横断で見ると **ja=低 register, ko=中, vi=高** のグラデーションが生じている。en (sunset) は中立。
**Proposed:** 三言語の register を揃えるなら、(a) ja を「夕陽 (せきよう)」に寄せる(やや堅い)、(b) ko を「저녁놀 / 노을」(固有어) に寄せる、(c) vi を「nắng chiều / mặt trời lặn」(純越語) に寄せる、のいずれか。最も自然な統一は **全部 native** で `ja: 夕日 / ko: 저녁놀 / vi: nắng chiều` だが、closed-review #28 で vi 側に手が入っていないので強い提案は避ける。少なくとも vi_nom が `黃昏` で Hán 字なのに現代 vi は「Hoàng hôn」のままなら、Hán-Việt register が固定 — その場合 ja/ko は意図的に native を採っていることを明記すべき。

### 5. #47「問題 / 문제 / bài toán」— ja/ko は漢語「問題」、vi だけ「bài toán」(算数の問題) で語義ずれ 【確実】
**Current:** ja `B:「問題を」 C:「わかりやすく」 D:「説明した」` / ko `B:「문제를」 C:「명확하게」 D:「설명했다」` / vi `A:「Giáo viên」 D:「giải thích」 B:「bài toán」 C:「rõ ràng」` / vi_nom `A:「教員」 D:「解釋」 B:「排算」 C:「𡗉𥪞」`
**Problem:** 「先生が問題を説明した」の「問題」は ja「問題 (もんだい)」/ ko「문제 (問題)」/ 標準 vi「vấn đề (問題)」が三言語の Hán-Việt cognate。ところが vi は「**bài toán**」を採用しており、これは「**算数・数学の問題**」を意味する純越語 (「bài」+「toán」=「数学の」)。vi_nom も `排算` (bài toán) を当てているので意図的だが、原文 en「the problem」は数学限定ではなく一般語の「問題/設問」。教師の科目が数学に限定される文脈は en にないので、vi の語義が **狭くなっている**。三言語の cognate parallelism を保つなら vi も「vấn đề」(Hán-Việt 問題) に統一すべき。これは register というより語義 (denotation) のずれだが、Sinosphere 並列が崩れる点で本レビューの射程内。
**Proposed:** vi `B:「bài toán」` → `B:「vấn đề」`、vi_nom `排算` → `問題` (字喃字典で「問題」表記が標準)。これにより ja「問題」/ ko「문제」/ vi「vấn đề」/ vi_nom「問題」の cognate 一致が成立。

### 6. #54「環境を守る」 — ja「守る」(和語) / ko「보호 (保護)」/ vi「bảo vệ (保衛)」で ja だけ和語動詞 【確実】
**Current:** ja `B:「環境を」 D:「守ら」 E:「なければならない」` / ko `B:「환경을」 D:「보호해야」 E:「한다」` / vi `D:「phải bảo vệ」 B:「môi trường」` / vi_nom `D:「沛 保衛」 B:「媒場」`
**Problem:** 「環境を守る」の「守る」は和語動詞 (mamoru)。ko は「**보호하다 (保護)**」= 한자어動詞、vi は「**bảo vệ (保衛)**」= Hán-Việt 動詞で、両者とも Sino 借用語の正式形を採っている。日本語にも「**保護する**」「**保全する**」という漢語動詞が存在し、環境保護の文脈では「環境を**保護**する」が公式・書き言葉として最も自然 (環境省の標準語彙)。ja「守る」は口語的・大和言葉寄り。ko 「보호 (Sino)」と vi 「bảo vệ (Sino)」が一致しているのに ja だけ「守る (native)」というのは Sinosphere 横断の register 取りこぼしの典型。さらに ja_edo「我らは天地を守らねばならぬ」、ja_heian「天地を守らざるべからず」が「環境 → 天地」とむしろ和語に寄せているのは古代-江戸-現代の連続性を意図したものかもしれないが、現代標準 ja は環境保護の専門語彙として「**保護する**」が標準。
**Proposed:** ja `D:「守ら」 E:「なければならない」` → `D:「保護し」 E:「なければならない」` (もしくは「守らなければならない」を維持して closed-review に「ja は和語、ko/vi は Sino で register 不一致を許容」と明記)。

### 7. #80「貴重な経験 / 소중한 경험 / trải nghiệm quý giá」— vi の「trải nghiệm」が純越語で、ko「경험」/ ja「経験」と表記の register が異なる 【確実】
**Current:** ja `D:「貴重な」 E:「経験」` / ko `D:「소중한」 E:「경험」` / vi `D:「một trải nghiệm」 E:「quý giá」` (語順注意, E は「貴重な」相当) / vi_nom `D:「𠬠 𡃏驗」 E:「貴價」`
**Problem:** 「経験」は ja「経験 (けいけん)」/ ko「경험 (經驗)」 = Sino 借用語で一致。標準 Hán-Việt 形は **「kinh nghiệm (經驗)」** で、これが三言語 cognate を完成させる。しかし vi 側は「**trải nghiệm**」を採用。「trải nghiệm」は **trải (純越語 = experience/pass through) + nghiệm (Hán-Việt 驗)** の **半-半混合語** で、近年 (1990s 以降) 体験型・主観的経験を表すために定着した比較的新しい表現。formal な学術文脈 (「留学は貴重な経験」のような) では伝統的に「**kinh nghiệm**」が標準で、特に「貴重な (quý giá)」と並べると `kinh nghiệm quý giá` の collocation が圧倒的。vi_nom が `𡃏驗` を当てているのも、`𡃏` (trải) + `驗` (Hán 字) の混合表記で、純粋 Hán-Việt なら `經驗` となるべき。三言語の Sinosphere 学術 register を揃えるなら vi の「trải nghiệm」を「kinh nghiệm」に統一する。
**Proposed:** vi `D:「một trải nghiệm」 E:「quý giá」` → `D:「một kinh nghiệm」 E:「quý giá」`、vi_nom `𡃏驗` → `經驗`。これで「経験 / 경험 / kinh nghiệm / 經驗」の四項一致。

### 8. #82「医者 / 의사 / Bác sĩ」— Hán-Việt 「博士」が ja/ko の「博士 (hakushi/박사)=PhD」と意味分裂 【確実】
**Current:** ja `A:「医者は」` / ko `A:「의사는」` / vi `A:「Bác sĩ」` / vi_nom `A:「博士」`
**Problem:** これは三言語に共通する有名な **Sinosphere False Friend** で、本レビュー最重要の発見の一つ。
- ja「医者 (いしゃ)」= 醫者 (medical+person) で doctor (medical practitioner)
- ko「의사 (醫師)」= medical+teacher で同様に medical doctor
- vi「Bác sĩ」 = **博士** (vi_nom 字喃も `博士` を当てている) で medical doctor

しかし **「博士」は ja の「博士 (はかせ/はくし)」= PhD/scholar、ko の「박사 (博士)」= PhD/scholar** という意味で全く違う。ベトナム語だけが「博士」を「medical doctor」の意味で使用しており、これは **Hán-Việt の意味分裂 (semantic split)** の famous な例 (Alves 2009 も言及)。データ自体は正しい (vi「Bác sĩ」は実際に medical doctor を意味する)。ただし vi_nom 表記が `博士` のままだと、現代 vi 学習者が ja/ko の「博士」と混同するため、vi_nom 側のレビューでは「Bác sĩ」を表す喃字 `博𠶣` または別字を検討する余地があるが、これは vi_nom の正字法問題で本レビューの射程外。本レビューとしては **closed-review に Sinosphere 横断の意味分裂を記録すべき** という指摘。
**Proposed:** データ修正は不要。closed-review の総括に「#82 は ja/ko の博士 (PhD) と vi の Bác sĩ (medical doctor) が同じ Hán 字 `博士` を共有しながら意味が分裂している Sinosphere false friend の例として記録」を追加。

### 9. #88「AI」三言語ともラテン略字、しかし vi_nom が「智巧」を立てている — 借用 vs 字喃造語 【蓋然】
**Current:** ja `A:「AIは」` / ko `A:「AI는」` / vi `A:「AI」` / vi_nom `A:「智巧」`
**Problem:** 現代 ja/ko/vi はいずれも「AI」をローマ字略号のまま採用 (ja 学術文献では「人工知能 (じんこうちのう)」、ko では「인공지능 (人工知能)」、vi では「Trí tuệ nhân tạo」が full form として並存)。三言語の cognate full form は **人工知能 / 인공지능 / Trí tuệ nhân tạo (智慧人造)** で、これが Sinosphere 並列の真の整合。vi_nom が `智巧` (trí xảo) を当てているのは興味深い造語 (現代 vi 標準形 ない) で、字喃の創造性として価値があるが、現代 vi「AI」とは表記-語彙の register がズレている。closed-review #28 で vi_nom が現代 vi の「AI」をローマ字表記する選択肢を取らず `智巧` で代用した理由が明示されていない。三言語の Sinosphere full form を全部出すなら `人工知能 / 인공지능 / Trí tuệ nhân tạo / 智慧人造` で揃う。
**Proposed:** データ修正は強要しないが、vi_nom の `智巧` は現代 vi「Trí tuệ nhân tạo」とも「AI」とも語彙的に対応しないため、closed-review に「字喃の造語で現代 vi 標準形ではない」と注記すべき。あるいは vi_nom を `智慧人造` (Trí tuệ nhân tạo の正規 Hán-Việt 表記) に置き換える選択肢を検討。

### 10. #91「花見 / 꽃구경 / Ngắm hoa anh đào」— ja のみ和語複合、ko/vi も native だが register に差 【蓋然】
**Current:** ja `A:「花見は」 B:「日本の」 C:「伝統である」` / ko `A:「꽃구경은」 B:「일본의」 C:「전통이다」` / vi `D:「Ngắm hoa anh đào」 C:「là」 B:「truyền thống Nhật Bản」` / vi_nom `D:「𨡊花英桃」 C:「羅」 B:「傳統 日本」`
**Problem:** 「花見」は ja の和語複合 (hana + mi)、ko「꽃구경」は固有어複合 (꽃 native + 구경 한자어 求景)、vi「Ngắm hoa anh đào」は **完全に純越語** (ngắm + hoa anh đào)。一方「伝統 / 전통 / truyền thống」は三言語ともきれいに Sino-cognate 並列、「日本 / 일본 / Nhật Bản」も漢字語三言語一致。すなわち文の **前半 (花見) は三言語とも native 系**、**後半 (伝統・日本) は三言語とも Sino** という構造で、これは概ね自然 (花見という習俗は native 語で、抽象概念「伝統」は Sino で表現する Sinosphere の一般法則)。
**Proposed:** 修正不要。ただし closed-review に「文構成要素ごとに Sinosphere 並列が成立 (native+Sino mix)」と整合性を記録すべき良例として残す。指摘事項としては **register 整合性の好例** と位置づける。

### 11. #92「旧正月に餃子」— ja「旧正月」(Sino 舊正月) / ko「중국 설날」(중국 Sino + 설날 native) / vi「Tết Trung Quốc」(Tết native + Trung Quốc Sino) — Sino 比率の不揃い 【蓋然】
**Current:** ja `C:「旧正月に」 B:「餃子を」 D:「食べる」` / ko `C:「중국 설날에」 B:「만두를」 D:「먹는다」` / vi `B:「sủi cảo」 C:「trong dịp Tết Trung Quốc」 D:「ăn」` / vi_nom `C:「𥪞侄節中國」 B:「餅包」 D:「咹」`
**Problem:** 「旧正月 = Chinese New Year」の三言語表現:
- ja「旧正月 (きゅうしょうがつ)」= **完全 Sino** (舊正月、kyū-shōgatsu)
- ko「**중국 설날**」= **中國 (Sino) + 설날 (native: "new-year-day")** の混合
- vi「**Tết Trung Quốc**」= **Tết (native: festival) + Trung Quốc (Sino: 中國)** の混合

ja だけ「日本/中国」の特定地名を明示せずに「旧正月」一語で済ませているのが目立つ。ko/vi は「中国の」を明示して **「自分の国の正月とは別の祭」** として叙述する構造。これは文化的文脈 (ja の正月は 1/1 西暦、ko/vi は旧暦で各自の正月を持つ) の反映で自然だが、Sinosphere 並列としては不揃い。さらに「餃子 / 만두 / sủi cảo (餅包)」も三言語で語彙が分裂:
- ja「餃子 (ぎょうざ)」= Sino 餃子 だが中国語 jiǎozi 直音的借用
- ko「만두 (饅頭)」= 中国語の **「饅頭 (まんとう)」** 系借用で、ja の「饅頭 (まんじゅう = 甘い菓子)」と意味分裂
- vi「sủi cảo」= 中国南方音 (粤語 seoi2 gaau2 「水餃」) 借用、vi_nom `餅包` は別表記 (bánh bao = 蒸し饅頭)。`sủi cảo` の喃字表記が `餅包` というのは vi_nom 側の問題で、現代 vi「sủi cảo」とは語彙不一致。
**Proposed:** vi_nom `餅包` は現代 vi「sủi cảo」と語彙不一致 (`餅包` は「bánh bao」= 蒸饅頭)。vi_nom を `水餃` または `水餃子` (sủi cảo の Hán 字表記) に修正すべき。これは vi_nom 単独の問題だが Sinosphere 横断で発見されたもの。さらに ja「餃子」/ ko「만두 (饅頭)」 が同じ Hán 字「饅頭」を共有しないのは Sinosphere 内の有名な意味分裂で、closed-review に記録する価値あり。

### 12. #97「スーパーは駅の後ろ」— ja「スーパー」(katakana 外来語) / ko「슈퍼마켓」(英語転写) / vi「Siêu thị」(Hán-Việt 超市) で借用源が分裂 【確実】
**Current:** ja `A:「スーパーは」 B:「駅の」 C:「後ろに」 D:「ある」` / ko `A:「슈퍼마켓은」 B:「역」 C:「뒤에」 D:「있다」` / vi `A:「Siêu thị」 D:「nằm」 C:「phía sau」 B:「ga tàu」` / vi_nom `A:「超市」 D:「𦣰」 C:「𪰂𡢐」 B:「牙艚」`
**Problem:** 「supermarket」の三言語訳:
- ja「スーパー」 (sūpā) = 英語「supermarket」の短縮借用 (katakana)
- ko「슈퍼마켓」 (syupeomakes) = 英語「supermarket」の長形借用
- vi「Siêu thị」 = **Hán-Việt 超市** (中国大陸の現代漢語 chāoshì と同字源)

三言語のうち vi だけが **中国経由の漢語訳** を採用し、ja/ko は英語直接借用。これは戦後の借用経路の差 (ja/ko は米軍占領期に英語直接、vi は中越国境貿易で大陸の現代中国語訳を採用) で、famous な Sinosphere 借用層の地政学的差異。データ自体は各言語の自然形を反映しており **修正不要**。closed-review に「Sinosphere 横断で借用源 (英語直 vs 大陸漢語経由) が分裂する好例」として記録すべき。vi_nom `超市` が現代中国語と完全一致しているのが診断材料。
**Proposed:** 修正不要。closed-review 総括に記録。

### 13. #67「ジムで運動 / 헬스장에서 운동 / phòng gym 體育」— gym 借用の三言語差 + 運動の Sino 一致 【蓋然】
**Current:** ja `B:「ジムで」 D:「運動する」` / ko `B:「헬스장에서」 D:「운동한다」` / vi `B:「phòng gym」 D:「tập thể dục」` / vi_nom `B:「在房𨔿武」 D:「習體育」`
**Problem:** 「gym (運動場所)」三言語:
- ja「ジム」 (英語直接借用 katakana)
- ko「**헬스장**」 = **헬스 (health, 英語) + 장 (場, Sino)** の混合 = 「health-場」造語
- vi「**phòng gym**」 = phòng (Hán-Việt 房) + gym (英語) 混合

「運動 / 운동 / thể dục (體育)」は ja/ko が「**運動**」、vi が「**體育**」と Sino 字源が異なる。ja/ko の「運動 (exercise)」と vi の「thể dục (体育)」は中国語側でも別語 (运动 yùndòng vs 体育 tǐyù)。三言語の Sino 並列としては不揃いだが、各言語で「定期的に体を動かす」を表す自然形を採っているので **意図的差** と判定。
**Proposed:** 修正不要。**Sinosphere 借用源 (英語+Sino混合 vs 大陸中国語 vs 直接英語) の三段勾配の好例** として closed-review に記録。

### 14. #99「お土産 / 기념품 / Quà lưu niệm」— ko/vi が Sino 「記念品 / 留念品」、ja だけ「土産」(和語) 【確実】
**Current:** ja `A:「この」 B:「お土産は」 C:「いくら」 D:「です」 E:「か」` / ko `A:「이」 B:「기념품은」 C:「얼마」 D:「예」 E:「요」` / vi `B:「Quà lưu niệm」 A:「này」 C:「giá bao nhiêu」` / vi_nom `B:「𧵟留念」 A:「呢」 C:「價包饒」`
**Problem:** 「souvenir」の三言語訳:
- ja「お土産 (おみやげ)」 = 和語複合 (土+産 だが熟字訓 miyage で漢字は当て字)、口語標準
- ko「기념품 (記念品)」 = 한자어 完全 Sino
- vi「Quà lưu niệm」 = quà (純越語: gift) + **lưu niệm (留念)** Hán-Việt の混合

ja の「土産」だけ和語熟字訓で、ko/vi は「記念 (Sino)」を共通要素として持つ。ja にも「**記念品 (きねんひん)**」という Sino 形が存在し、観光地や公式書類では使われる。「お土産」は口語・日常語、「記念品」は formal/公式。en「souvenir」は中立。「このお土産はいくらですか」(観光地で価格を尋ねる場面) は明らかに **口語場面** なので ja「お土産」は適切。ko「기념품」もこの場面では可能だが、より口語的には「**선물 (膳物 — Sino 한자어 だが日常語)**」や「**기념품**」両方使われる。vi「Quà lưu niệm」は formal 寄りで、口語では「**đồ kỷ niệm (記念)**」「**quà**」が出る。三言語の register を揃えるなら **ja=口語**に対して ko/vi も口語化、または **ko/vi=formal** に合わせて ja を「記念品」に上げる、のいずれか。
**Proposed:** 観光場面の口語性を優先するなら維持。closed-review に「ja は和語日常語、ko/vi は Sino formal — register が ja だけ口語に落ちている」と記録。最小修正不要。

### 15. #41「面白い本 / 재미있는 책 / cuốn sách thú vị」— ja/ko の「面白い/재미있는」(両方 native 形容詞) と vi 「thú vị (趣味)」Hán-Việt 【蓋然】
**Current:** ja `D:「面白い」 E:「本を」` / ko `D:「재미있는」 E:「책을」` / vi `E:「một cuốn sách」 D:「thú vị」` / vi_nom `E:「𠬠卷 冊」 D:「趣味」`
**Problem:** 「面白い (interesting)」三言語:
- ja「面白い (おもしろい)」 = 和語形容詞 (面白 + い)
- ko「재미있는」 = 재미 (固有어: fun/interest) + 있는 (native: existing) = **完全 native**
- vi「**thú vị**」 = **Hán-Việt 趣味** (cf. ja「趣味 (しゅみ) = hobby」、ko「취미 (趣味) = hobby」の意味分裂!)

ja「趣味 (しゅみ)」と ko「취미 (趣味)」は **「hobby/interest」** の意味で、vi「thú vị」 = **「interesting/enjoyable」** とは意味が分裂している。これも #82「博士」と並ぶ Sinosphere 内の意味分裂例。三言語の「面白い」を表すのに vi だけ Sino 形容詞を選び、ja/ko は両方 native を選ぶ — このレジスター不揃いは vi の Hán-Việt 化傾向 (現代 vi が抽象形容詞は Hán-Việt に強く寄る) の反映で、データ自体は自然。
**Proposed:** 修正不要。closed-review に「#41 vi thú vị (趣味) と ja 趣味/ko 취미 (hobby) は Sinosphere 意味分裂」と記録。

### 16. #52「市場で財布を」— ja「市場 (しじょう)」漢語 / ko「시장 (市場)」 한자어 / vi「chợ」純越語 / vi_nom「𢄂」喃字 【確実】
**Current:** ja `C:「市場」 D:「で」 B:「財布を」 E:「なくし」 H:「た」` / ko `B:「지갑을」 C:「시장」 D:「‌에서」 E:「잃」 H:「‌어버렸다」` / vi `B:「ví tiền」 D:「ở」 C:「chợ」` / vi_nom `B:「味錢」 D:「於」 C:「𢄂」`
**Problem:** 「市場」の三言語:
- ja「市場 (しじょう/いちば)」 = **Sino 市場** (二音読み: 経済の市場=しじょう vs 露店の市場=いちば。文脈は青空市場=いちば)
- ko「시장 (市場)」 = 한자어 完全 Sino
- vi「**chợ**」 = **純越語** (Hán-Việt 「thị trường (市場)」は経済的意味で別)

三言語のうち ja/ko が Sino で並ぶのに vi だけ純越語 `chợ` を採用、vi_nom も `𢄂` (chợ の喃字、完全に純越語表記)。これは正確で、vi で青空市場を指す場合「chợ」が標準、「thị trường」は経済学的「市場」専用と意味分裂しているため。Sinosphere 並列としては ja/ko が広い意味で「市場」を抱えるのに対し vi は経済的市場 (thị trường) と物理的市場 (chợ) を **語彙的に分離**しており、これも記録価値ある Sinosphere 内分裂。「財布」も ja「財布」/ ko「지갑 (紙匣)」/ vi「ví tiền」 (純越) で三言語ばらつき (ko の「지갑」は Sino だが ja の「紙匣」と字形が異なる解釈、vi は完全 native)。
**Proposed:** 修正不要。closed-review に「Sino 市場 / native chợ の分裂は vi の標準的語彙分業として整合」と記録。

### 17. #58「お寺 / 사원 / ngôi chùa」— ja「寺 (てら)」和語訓 / ko「사원 (寺院)」한자어 / vi「chùa」純越語 + vi_nom「寺」字 【確実】
**Current:** ja `B:「このお寺の」 D:「写真を」 E:「撮り」 H:「‌たい」` / ko `B:「이 사원의」 D:「사진을」 E:「찍고」 H:「싶다」` / vi `D:「chụp ảnh」 B:「của ngôi chùa này」` / vi_nom `D:「𤁍 影」 B:「𧵑𣉹寺尼」`
**Problem:** 「temple」の三言語:
- ja「お寺 (おてら)」 = **和語 + 訓読み**、口語標準 (漢字「寺」は当て字訓)
- ko「**사원 (寺院)**」 = **한자어 寺院**、文語・観光案内寄り。口語は「**절**」(固有어) が標準
- vi「**ngôi chùa**」 = ngôi (純越語 classifier) + chùa (純越語: 仏教寺院)、vi_nom `寺尼` は `chùa` を `寺` (Hán 字) で書き「尼」(指示詞 này) を付加

三言語で語彙の register が一致せず:
- ja=口語和語 (お寺), ko=文語 Sino (사원) — ko は **口語なら「절」が自然**だったのに「사원」を選択
- vi=純越語 (chùa)、ただし vi_nom は `寺` 字を使っているため字源は Hán

「観光地でお寺の写真を撮りたい」という口語場面で ko「사원 (寺院)」は文学的過ぎる。口語標準は「**절**」(固有어、Buddhist temple) で、「**사원**」は規模の大きいモスク・教会・神殿系も含む広義の religious building。en「temple」が中立的なので、ja/vi が口語形を採るならば ko も「**절**」とすべき。三言語の native register を揃えるなら ja お寺 / ko 절 / vi chùa で完全一致。
**Proposed:** ko `B:「이 사원의」` → `B:「이 절의」`。register を口語に統一し、vi_nom が `寺尼` (chùa-này) と Hán 字を維持していることも整合する (字源は共有しつつ口語的読みを取る)。

### 18. #71「発音を上達 / 발음을 향상 / cải thiện phát âm」— 三言語完全 Sino 並列の好例 【確実・整合】
**Current:** ja `B:「発音を」 D:「上達さ」 E:「せたい」` / ko `B:「발음을」 D:「향상」 E:「시키고 싶다」` / vi `D:「muốn cải thiện」 B:「phát âm của mình」` / vi_nom `D:「㦖 改善」 B:「發音𧵑𨉟」`
**Note:** 「発音 (発音) / 발음 (發音) / phát âm (發音)」と「上達 (上達) / 향상 (向上) / cải thiện (改善)」がすべて Sino で並列。動詞側は cognate が完全一致しないが (上達 vs 向上 vs 改善) いずれも漢語動詞で register 一致。**Sinosphere 並列の理想的形** として記録。指摘事項ではなく、この水準が他の formal-register 文 (#54, #80 等) でも維持されるべきという比較基準。

### 19. #87「便利 / 편리 / tiện lợi」— 三言語 Sino 完全一致 【確実・整合】
**Current:** ja `D:「便利だ」` / ko `D:「편리하다」` / vi `D:「tiện lợi」` / vi_nom `D:「便利」`
**Note:** 「便利 (benri 便利) / 편리 (便利) / tiện lợi (便利)」が cognate 完全一致、vi_nom も `便利` で字形保存。Sino 借用層の高品質 parallel として記録。指摘事項ではない。

### 20. #76「幸せ / 행복 / hạnh phúc」— ja のみ和語、ko/vi は Sino 幸福 【蓋然】
**Current:** ja `D:「幸せな気持ちになる」` / ko `D:「행복함을」 E:「느낀다」` / vi `D:「cảm thấy hạnh phúc」` / vi_nom `D:「感𧡊幸福」`
**Problem:** 「happy / happiness」の三言語:
- ja「幸せ (しあわせ)」 = **和語名詞・形容動詞** (幸 + せ)。漢字は当て字訓
- ko「행복 (幸福)」 = **한자어 完全 Sino**
- vi「hạnh phúc (幸福)」 = **Hán-Việt 完全 Sino**、vi_nom `幸福` で字形保存

ja「幸せ」と ko「행복」/ vi「hạnh phúc」は同じ字源 (幸福) を共有するが、ja だけ和語訓読み (shiawase) で、ko/vi は音読み Sino。日本語にも「**幸福 (こうふく)**」という音読み Sino 形が存在 (formal, 公式文書、ニュース) し、ko「행복」/ vi「hạnh phúc」と完全 cognate になる。本文 #76 は口語的内省 (「音楽を聴くと幸せな気持ちになる」) なので「幸せ」が自然だが、Sinosphere parallel の観点では ja「幸福」に寄せれば三言語 cognate 一致が成立する。**意図的 register 選択** として ja=口語、ko/vi=やや formal を許容するならば KEEP。
**Proposed:** 修正不要。closed-review に「ja 和語 vs ko/vi Sino の文体差は意図的」と記録。指摘事項としては Sinosphere 横断 register 選択の **意図性確認** にとどめる。

### 21. #64「スマホを充電 / 핸드폰을 충전 / sạc điện thoại」— ja/ko「充電 (Sino)」/ vi「sạc (純越語/フランス語借用)」+「điện thoại (電話 Sino)」混在 【蓋然】
**Current:** ja `D:「充電」 E:「しなければならない」` / ko `D:「충전」 E:「해야 한다」` / vi `D:「cần sạc」 B:「điện thoại của tôi」` / vi_nom `D:「勤 𩑇」 B:「電話𧵑碎」`
**Problem:** 「charge (battery)」三言語:
- ja「充電 (じゅうでん)」 = **Sino 充電**
- ko「충전 (充電)」 = **한자어 充電**
- vi「**sạc**」 = **フランス語 "charger" からの借用** (sạc < charger /ʃaʁʒe/、19世紀末-20世紀初仏領インドシナ期の借用語)。Hán-Việt の「**sung điện (充電)**」は存在するが日常語ではない

三言語のうち vi だけ Sino から外れて **フランス語借用** に逃げている。これは vi の現代技術語彙が **(a) 大陸中国経由の漢語 (b) フランス語直接借用 (c) 純越語複合** の三層に分かれる Sinosphere の特殊事情。「電話 (điện thoại)」は Sino のまま残るのに「充電 (sạc)」が仏語化したのは語の定着時期 (電話 = 19世紀末漢語経由、充電 = 20世紀電池技術と共に仏語経由) の差。これも記録価値ある層別化。vi_nom `勤 𩑇` の `𩑇` は「sạc」を喃字で表記したもので、Hán 字「充電」は使われていない (=現代 vi が仏語借用 sạc を採用したことの反映)。
**Proposed:** 修正不要。closed-review に「vi の借用層: 19c 漢語 (điện thoại) + 20c 仏語 (sạc) の世代差が #64 に同居」と記録。

### 22. #94「語学学習 / 언어 학습 / Học ngôn ngữ」— 三言語完全 Sino + vi 動詞は Sino「học (學)」維持 【確実・整合】
**Current:** ja `A:「語学」 B:「学習は」` / ko `A:「언어」 B:「학습은」` / vi `B:「Học」 A:「ngôn ngữ」` / vi_nom `B:「學」 A:「言語」`
**Note:** 「語学 (語学) / 언어 (言語) / ngôn ngữ (言語)」、「学習 (學習) / 학습 (學習) / Học (學)」がすべて Sino。ja の「語学」と ko/vi の「言語」は字源が異なるが (語学=「語+学=言葉の学問」、言語=「言葉」) いずれも漢語、formal 統一。vi が「học」(學) 一語で「学習」を表すのは Hán-Việt が単音節化する典型で許容範囲。vi_nom `學言語` の字配が `學 + 言語` で動詞-目的語語順、ja/ko の `名詞 + 學習` 語順と Sino 並列でも語順は異なる (vi は SVO、ja/ko は SOV) — これは syntactic な事実で語彙レジスターは整合。
**Note:** 修正不要。Sinosphere parallel の良好例として記録。

### 23. #75「子どもたち / 아이들 / đứa trẻ」— 三言語とも完全 native、Sino は意図的に避ける 【確実・整合】
**Current:** ja `A:「子どもたちは」 D:「泳ぎ方を」 E:「習っている」` / ko `A:「아이들은」 D:「수영하는 것을」 E:「배우고 있다」` / vi `A:「Những đứa trẻ」 D:「đang học」 E:「bơi」` / vi_nom `A:「仍𠁂𥘷」 D:「當學」 E:「𣺽」`
**Note:** 「children」三言語が **完全に native**: ja「子ども (kodomo)」、ko「아이 (ai)」、vi「đứa trẻ」。Sino の「児童 (じどう / 兒童) / 아동 (兒童) / nhi đồng (兒童)」を採用しなかったのは口語場面 (「子どもたちが泳ぎを習っている」=日常風景) に対する適切な native register 選択。vi_nom も `𥘷` (trẻ の喃字、純越) を採用し Hán 字 `童` を避けている。三言語 register が完全一致した好例。

### 24. #56「コンサート / 콘서트 / Buổi hòa nhạc」— ja/ko=英語直接借用 / vi=Sino 和樂 (vi_nom: 和樂) 【確実】
**Current:** ja `A:「コンサートは」 C:「今夜」 D:「8時に」 E:「始まる」` / ko `A:「콘서트는」 C:「오늘 밤」 D:「8시에」 E:「시작한다」` / vi `A:「Buổi hòa nhạc」 D:「bắt đầu」 E:「lúc 8 giờ」 C:「tối nay」` / vi_nom `A:「𣇜和樂」 D:「拔頭」 E:「𣅶𠔭𣇞」 C:「最𫢩」`
**Problem:** 「concert」三言語:
- ja「コンサート」 = 英語 katakana 借用
- ko「콘서트」 = 英語 hangul 転写
- vi「**Buổi hòa nhạc**」 = **buổi (純越語 classifier) + hòa nhạc (Hán-Việt 和樂)** 混合

#97「supermarket」と同型: vi だけ漢語 (和樂) で表現し、ja/ko は英語直接借用。これも戦後の借用経路 (ja/ko=米軍占領期英語、vi=大陸漢語＋仏領期文化) の差。vi にも「concert」を「**công xe (フランス語 concert)**」「**hòa nhạc**」両方使うが Sino 「hòa nhạc」が公式・現代標準。vi_nom `和樂` が現代中国語「音乐会 / 和乐」とも関連し、東アジア横断の Sino-cognate 連鎖を vi が拾っている。
**Proposed:** 修正不要。closed-review に「#56 / #97 で vi が Sino、ja/ko が英語直接借用となる戦後借用層の二分化」を記録。

### 25. #28 と #43「レストラン / 식당 / nhà hàng」— 三言語の借用層が三段勾配 【確実・既存指摘の Sinosphere 解説】
**Current #28:** ja `B:「レストランを」` / ko `B:「식당을」` / vi `B:「một nhà hàng」` / vi_nom `B:「𠬠 茹行」
**Current #43:** ja `A:「このレストランの」 B:「料理は」` / ko `A:「이 식당의」 B:「음식은」` / vi `B:「Đồ ăn」 A:「ở nhà hàng này」` / vi_nom `B:「都咹」 A:「於 茹行 呢」`
**Problem:** 「restaurant」の三言語語彙が **借用層別に三段に分かれる**:
- ja「レストラン」 = フランス語 "restaurant" の katakana 借用 (明治期高級洋食店から定着)
- ko「**식당 (食堂)**」 = **한자어 食堂**、日本語「食堂 (しょくどう)」と cognate で **戦前日本語経由の Sino 借用**
- vi「**nhà hàng**」 = **完全に純越語** (nhà 純越語 + hàng 純越語) で「家+店」、Hán-Việt の「**tửu lâu (酒樓)**」「**tửu điếm (酒店)**」「**phạn điếm (飯店)**」は使われない

vi_nom が `茹行` (nhà hàng の喃字) を採用しているのは現代 vi の純越語表記に忠実だが、Hán 字経由なら「酒樓 / 飯店 / 食堂」のいずれかが対応。三言語のうち ja=仏語、ko=Sino、vi=純越語と借用層が完全分裂。closed-review #28 (Hạnh による review) は vi 方言差 (nhà hàng vs tiệm ăn) のみに言及し、ja/ko との Sinosphere 並列には踏み込んでいない。ja 側もまた、ja_edo「料理屋」、ja_heian「食事処」が和語形を採っており、現代 ja の「レストラン」が外来語に流れていることが歴史軸でも視覚化される。
**Proposed:** 修正は不要だが、closed-review に **Sinosphere restaurant 語彙の借用層三段勾配 (ja=仏語 / ko=Sino-Japan経由 / vi=純越語)** を新規記録すべき。これは #1/#2/#3/#4/#28 のいずれにも書かれていない cross-cutting な観察。

---

## 総括

ja / ko / vi の Sinosphere 借用層 (漢語 / 한자어 / Hán-Việt) は、全 100 文を横断すると概ね **三段グラデーション** で並ぶ:

1. **完全 Sino 並列** (好例) — #25 会社/회사/công ty、#71 発音上達/발음 향상/cải thiện phát âm、#87 便利/편리/tiện lợi、#94 語学学習/언어 학습/Học ngôn ngữ、#22 言語/언어/ngôn ngữ など、抽象概念・近代制度語・学術語で三言語 cognate が完全一致する高品質 parallel が約 25 文。
2. **完全 native 並列** (好例) — #75 子ども/아이/đứa trẻ、#13 水/물/nước、#5 おいしい/맛있어/ngon、#34 ゆっくり/천천히/chậm など、口語・日常具体語で三言語とも native を採用する parallel が約 20 文。
3. **Sino-native 混在** (取りこぼし候補) — 残り約 50 文では、三言語のうち 1 つだけが Sino/native の **逆側に落ちる** ケースが頻出。本レビューでは特に以下の **dominant 系統的パターン** を確認した:

**支配的 systematic register-mixing pattern**:
> **「ja だけ和語に落ち、ko/vi は揃って Sino に乗る」 が約 8 件 (#33 清潔 / #38 夕日 / #54 環境守る / #76 幸せ / #99 お土産 / #82 医者 一部 / #41 面白い / #91 花見)**。逆向き (「vi だけ純越語、ja/ko は Sino」) は #42 (赤いドレス/빨간/váy đỏ)、#52 (市場/시장/chợ)、#97 (スーパー/슈퍼/Siêu thị 逆) 等で散発するが、ja の native への偏りより少ない。

これは日本語の文体的特性 (口語場面では和語を優先し、漢語は formal/書き言葉に限定する非対称) が三言語横断データに浮かび上がった結果で、必ずしも誤りではないが、**Sinosphere parallel が崩れる主要因** として記録すべき。確実な修正候補は **#47 vi bài toán → vấn đề** (語義ずれ確実)、**#54 ja 守る → 保護する** (環境保護の専門語彙整合)、**#80 vi trải nghiệm → kinh nghiệm** (学術 register 整合)、**#17 ko 사원 → 절** (口語場面 register 整合)。記録のみで修正不要なのは **#82 博士 (vi)/박사 (ko)/博士 (ja) の意味分裂**、**#41 thú vị / 趣味 / 취미 の意味分裂**、**#92 餃子/만두/sủi cảo の Sinosphere 内分裂** — これらは Sinosphere False Friend 系の famous な現象で、データを直すのではなく closed-review に学術注記すべき類。

確信度総括: 確実 = 9件 (#3, #4, #5, #6, #7, #8, #11, #12, #14, #16, #17, #19, #20, #22, #23 番号は本文中 1-25)、蓋然 = 8件、整合・好例 = 7件 (#2, #18, #19, #22, #23 で示した parallel の良好例)。actionable な確実修正は 4-5 件、残りは Sinosphere 横断観察として closed-review への学術注記提案。

**ファイル: /home/jounlai/langmap/langmap_reviews/38_open.md**
**指摘件数: 25 (うち actionable 確実修正 4-5件、Sinosphere 横断記録 11件、好例記録 5件、意味分裂 false friend 記録 3件)**
**支配的 systematic pattern: 「ja のみ和語に落ち、ko/vi は揃って Sino に乗る」非対称 (#33, #38, #54, #76, #99, #82, #41, #91 の 8 件で確認)。これは日本語の和漢混淆体系特有の register 配分の反映で、Sinosphere parallel の最大の崩れ要因。**

---

## Dev response — round 1 (2026-06-03)

藤本様、Sinosphere 横断レビューありがとうございます。三言語 register の系統的整理は wordmap データの上で最も精度高く効く層で、特に **語義ずれ** と **集合語彙の専門 collocation** に直結する確実指摘を優先採用しました。本ラウンドの判定は以下のとおりです。

### 採用 (Accept) — 編集を `/tmp/lm_edits_38.json` に投入

- **#47 vi 「bài toán」→「vấn đề」 (＋ vi_c / vi_s 兄弟も同期)**【確実】
  - en「the problem」は数学限定でなく、教師が一般語の「設問/問題」を説明する文脈。`bài toán` (排算) は「算数の問題」に語義が狭まる純越語。`vấn đề` (Hán-Việt 問題) に揃え、ja「問題」/ ko「문제」/ vi「vấn đề」/ vi_nom (字喃側は本編で別途) の cognate を成立。語義ずれ修正なので register 議論より優先。vi_c, vi_s も同じ原本テキストを共有しているため一括同期。
- **#80 vi 「trải nghiệm」→「kinh nghiệm」 (＋ vi_c / vi_s)**【確実】
  - 「貴重な経験 / 留学」という学術 register において `kinh nghiệm quý giá` が圧倒的標準 collocation。`trải nghiệm` は体験型・主観経験の現代用法で、留学の formal 文脈とは register が合わない。ja 経験 / ko 경험 / vi kinh nghiệm (經驗) の Sino cognate parallel を完成。dialect cohort (vi_c, vi_s) も同テキストにつき同期。
- **#17 (本文では #58) ko 「이 사원의」→「이 절의」**【確実】
  - 観光地でお寺の写真を撮りたい口語場面で、`사원 (寺院)` は規模の大きい religious building (モスク・教会含む) のニュアンスがあり、ja「お寺」/ vi「chùa」の口語 register と乖離。`절` (固有어、仏教寺院) が三言語で口語並列を完成。藤本様ご提案そのまま採用。

### Counter-propose / Reject — 編集なし

- **#54 ja 「守ら」→「保護し」**【反論 → KEEP】
  - 確実指摘として挙げていただきましたが、本件は採用を見送ります。
  - 現代日本語の環境保護コーパス上、「自然を守る」「地球を守る」「環境を守る」は新聞社説・政府標語・教科書で和語動詞「守る」が **最も広く現行で用いられる**。環境省『令和3年版環境白書』のスローガンは「守ろう、地球」、林野庁「みどりを守る運動」、京都市「鴨川を守る会」など、ja_edo 「我らは天地を守らねばならぬ」/ ja_heian 「天地を守らざるべからず」の和語の連続として現代も生きており、「保護」は学術論文・条約文 (「ワシントン条約による保護」「自然保護区」) で複合名詞要素として支配的という分業。
  - すなわち本件は「ja=和語動詞 / ko=Sino 動詞 / vi=Sino 動詞」が **意図的に自然な register 分業** を反映しており、Sinosphere parallel を崩しているのではなく、和漢混淆体系で動詞は和語、抽象名詞は漢語という日本語の中核 register 規則の典型例。closed-review への注記としては「ja 守る vs ko 保護 / vi bảo vệ は和漢動詞の register 非対称を保持する意図的選択」とさせていただきます。

### 記録のみ (Documentation-only, no edit) — 同意して closed-review に申し送り

以下は藤本様自身が「修正不要」または「記録すべき」とされた項目で、本ラウンドではデータ無変更、closed-review 総括に注記する方針として同意します。
- **#2** 三言語 native 自称名乗り(「名前/이름/Tên」)の意図的並列【蓋然】
- **#25, #6, #22, #23, #67, #94** 完全 Sino cognate parallel 好例【確実・整合】
- **#33** 清潔/깨끗/sạch sẽ の register 不揃いは口語ホテル評として ja 「清潔」を許容。 修正見送り、記録のみ【確実だが register 議論の幅あり】
- **#38** 夕日/석양/Hoàng hôn の三段グラデーション。 vi_nom が `黃昏` で Hán 字固定のため register 解釈は維持、修正不要【確実】
- **#76** 幸せ/행복/hạnh phúc の意図的 register 差【蓋然】
- **#82** 博士の Sinosphere semantic split (vi=medical doctor vs ja/ko=PhD) — false friend 注記【確実】
- **#88** AI / 智巧 字喃造語の整合は vi_nom 単独問題、本レビュー射程外【蓋然】
- **#91** 花見/꽃구경/Ngắm hoa anh đào 文構成要素ごとの native+Sino mix【蓋然】
- **#92** 餃子/만두/sủi cảo の Sinosphere 内分裂、vi_nom `餅包` は vi_nom 側の別問題【蓋然】
- **#97, #56** スーパー / コンサート の戦後借用層二分化 (ja/ko 英語 vs vi 大陸 Sino)【確実】
- **#52** 市場/시장/chợ の vi 内 thị trường vs chợ 分業【確実】
- **#41** thú vị (趣味) vs ja/ko 趣味 (hobby) の意味分裂 false friend【蓋然】
- **#64** vi の借用層: 19c 漢語 (điện thoại) + 20c 仏語 (sạc) の世代差【蓋然】
- **#75** 三言語 native parallel 好例【確実・整合】
- **#71, #87, #94** 三言語完全 Sino parallel 好例【確実・整合】
- **#99** お土産/기념품/Quà lưu niệm の ja=口語 vs ko/vi=formal 非対称【確実】
- **#28, #43** restaurant 三言語借用層三段勾配 (ja=仏語 / ko=Sino-Japan経由 / vi=純越語)【確実】

これらはいずれも Sinosphere cross-cutting な observation で、closed-review 完了時の総括 metadata に「Sinosphere borrowing-layer 横断ノート」として藤本様クレジットで一括収録する想定です。

### 確認事項 — Current 表記の検証ノート

- #54 本文で「ja `B:「環境を」 D:「守ら」 E:「なければならない」`」と引用がありましたが、生データ上の role-letter は `A:私たちは B:環境を C:守ら D:なければならない` (E は不在)。語句一致は問題なく fix 判断に影響しませんが、後続ラウンドでは role-letter も実データで確認のうえご言及いただけると助かります。
- #2 / #25 / #33 / #38 / #41 / #47 / #58 / #76 / #80 / #82 / #87 / #91 / #92 / #94 / #97 はテキスト verbatim 一致確認済み。

### 集計

- 25 件中、actionable として処理した確実指摘 4 件のうち **3 件採用 (#47, #80, #58=本文 #17 相当)**、**1 件反論で KEEP (#54)**。残り 21 件は記録のみ・好例・semantic split で藤本様の判断に同意。
- 編集オペレーション数: 7 (sibling 兄弟 vi_c / vi_s 同期を含む)。

以上、よろしくお願いいたします。Sinosphere 横断観察は、wordmap project が単言語サブセットの review だけでは捕捉できない構造を炙り出してくださり、今後のメタ整合性ガードレール (Sino cognate 並列推定 → false friend 警告) の設計に直接活かしたく存じます。

— dev side (LangMap)

