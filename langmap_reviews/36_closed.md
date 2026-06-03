# LangMap データレビュー #36 — Andean Indigenous Languages (Quechua / Guaraní)

## レビュアー自己紹介 (ペルソナ)

私は **Dr. Itzel Pumacahua-Mendieta（ハンドル: @runa_simi_pe）** と申します。記述言語学博士（アンデス諸語専攻）で、リマ・カトリック大学およびアスンシオン国立大学で南米先住民語の文法記述・正書法整備に従事してきました。Quechua については **Cusihuamán *Gramática quechua: Cuzco-Collao* (1976)**, **Cerrón-Palomino *Lingüística Quechua* (1987)**, **Adelaar with Muysken *The Languages of the Andes* (2004)** を主たる典拠とし、Guaraní については **Gregores & Suárez *A Description of Colloquial Guaraní* (1967)**, **Krivoshein de Canese & Acosta *Ñe'ẽryru* (Paraguayan std)** を常用します。最も権威を持って判断できるのは **qu (Cuzco-Collao 標準書字)** と **gn (Paraguayan Standard / 1992 正書法)** の2言語です。Bolivian / Ayacucho Quechua との差異も把握していますが、本データはどちらかと言えば Cuzco 寄りの正書 (q', q, qh, ch'I, sh-) を採用しているため、Cuzco-Collao 規範を基準に判定します。Jopara（gn-es 混合）は規範外要素として識別のみ行い、正書統一を勧告するに留めます。

## 検証範囲

- **全数確認**: qu, gn 各100文を `.wf_langmap_query.mjs` でライブ照合。
- 本レビュー記載の Current 値はすべて現行 data.js と一致することを確認済み（#1, #5, #15, #16, #19, #23, #26, #33, #46, #52, #65, #66, #75, #80, #86, #88, #89, #90, #95, #100 ほか）。
- レビュー #30 ラウンド1-13 で確定済みの語彙修正（#78 gn `Aimo'ã`, #79 gn `ndavy'ái`）に退行がないことも確認。
- READ-ONLY 遵守。data.js への直接編集は行わない。

## 指摘事項 (Issues found)

### 1. #15 qu — 「妹」の語が「痛み」になっている【確実】
**Current:** `A:「Nanaymi」 B:「Francia-pi」 C:「hawa llaqtapi」 D:「yachakushan」`
**Problem:** *nanay* は Cuzco-Collao Quechua で「痛み（pain / ache）」を意味する語（Cusihuamán §名詞語彙）。1人称所有 *-y* を付けた *nanay-mi* は「私の痛み」または評価的な「ああ痛い」相当で、「私の妹（My younger sister）」ではない。Cuzco 標準で「妹（弟）」は男性視点で *pana-y*、女性視点で *ñaña-y*、性別を限定しない年下のきょうだいは *sullk'a-y*（弟妹）。「妹」は最も典型的には **`Panaymi`**（兄目線）または **`Ñañaymi`**（姉目線）。本データの ja 原文「妹」（年下女性）は *sullk'a panay* / *sullk'a ñañay* がより明示的。明確な語彙誤り。
**Proposed fix:** A:「Sullk'a panaymi」または最小修正で A:「Panaymi」。確信度【確実】。

### 2. #5 qu — 述語に reportative past 証拠語尾 -sqa が付き、現在「is」が表せない【確実】
**Current:** `A:「Kay」 B:「cafe」 C:「ancha」 D:「miski kasqa」`
**Problem:** ja「このコーヒーはとても美味しい」/ en「This coffee is very delicious」は**現在時制の直接断定**。Cuzco-Collao の証拠標識（Cusihuamán §evidentiality, Cerrón-Palomino 1987）では、話者が今ここで味わって述べる直接体験は **-mi/-n**（direct evidential）を用いる。語尾 *-sqa* は **reportative past（伝聞または間接過去）**で「美味しかったらしい／〜だったそうだ」の意味。本文の語用と矛盾する。最小修正は *kasqa* を削除して D:「miskim」（miski + -mi 直接証拠）とするか、D:「miski kashan」（現在進行的）。
**Proposed fix:** D:「miskim」 または D:「miski kashan」。確信度【確実】。

### 3. #16 qu — 疑問文末に reportative past *kasqa* が付き「映画は何時に始まるか（らしい）」になる【確実】
**Current:** `B:「Pelicula」 A:「ima horastaq」 C:「qallarinqa」 D:「kasqa」`
**Problem:** *qalla-ri-nqa* は「始まるだろう（3sg 未来）」で**疑問詞 -taq と未来形だけで完結**する。さらに D:「kasqa」が後置されており、kasqa は前項(2)と同じく reportative past。「何時に始まるのか（伝聞）」という奇妙な二重時制の文になる。Cuzco の標準的な疑問形は単に *Película ima horastaq qallarinqa?* で、kasqa は不要。
**Proposed fix:** D セグメントを削除し、qu は `B:「Pelicula」 A:「ima horastaq」 C:「qallarinqa」` の3要素で完結。確信度【確実】。

### 4. #100 qu — 「ありがとう」の語形 anaychayki が非標準で、Cuzco の標準は sulpayki【確実】
**Current:** `A:「Llapan」 C:「imakunamanta」 B:「anaychayki」`
**Problem:** Cuzco-Collao Quechua の「ありがとう（thank you）」は標準的に **`sulpayki`**（< sullpa-y-ki）か、感謝詞 **`añay`** / **`urpichaykim`**（私の小鳩よ＝親愛の感謝）。*anaychayki* は (a) *añay* + *-cha*（指小） + *-yki*（2目的）「私はあなたに小さく感謝する」を意図したと思われるが、(b) **語頭の ñ が n に化けている**ため正書として非標準。Adelaar/Muysken も *sulpay-ki* を典型形として挙げる。最低限 ñ を補い *añaychayki* とすべきだが、Cuzco 標準なら *sulpayki* を推奨。
**Proposed fix:** B:「Sulpayki」（最も標準）または B:「Añaychayki」（最小修正・ñ 補正）。確信度【確実】。

### 5. #100 qu — 「何もかも」が *Llapan imakunamanta* と2セグメントに過剰展開【蓋然】
**Current:** `A:「Llapan」 C:「imakunamanta」 B:「anaychayki」`
**Problem:** 「何もかも（everything）」を *Llapan*（全て）+ *imakunamanta*（あらゆる物事から、複数化+奪格）の重畳で表現しているが、en は単に `C:for A:everything`（前置詞 for + everything）。Cuzco の自然形は **`tukuy imamantapas`** または **`llapanmanta`** の一語的表現で、*Llapan* と *imakunamanta* を別ロールに分けると「全て」「あらゆる物事から」の二重指示になり冗長。en 参照 A:everything（1ロール）/C:for（前置詞）と整合させると、qu は奪格 *-manta* が「for/from」相当の C を兼ね、*llapan-/tukuy ima-* が A を担う。Cuzco でより簡潔なのは A:「Tukuy imamanta」（=for everything）。
**Proposed fix:** A:「Tukuy」 C:「imamantapas」（または A:「Llapanmanta」 にして C 統合）。確信度【蓋然】（語法上の重複であって非文ではない）。

### 6. #19 qu — 「好き」と「したい」の区別が munani 1語で行われ意味曖昧【蓋然】
**Current:** `A:「Nuqam」 B:「takita」 C:「uyariyta」 D:「munani」`
**Problem:** *munani* は「私は欲する／したい」が基本義（Cusihuamán）。「〜が好き（like）」は再帰 *muna-ku-ni*、または評価動詞 *kusi-ku-ni* の方が忠実。同データ #1/#9/#22 等は **want to** を *munani* と訳しており、#19 を同じく *munani* とすると **「私は音楽を聴きたい」**になり「音楽を聴くのが好き」と意味重なる。en は「I like to listen」と like を明示。
**Proposed fix:** D:「munakuni」（=I like）に変更し、want との語形差を確保。確信度【蓋然】（Cuzco には *munani* の like 用法も方言的に存在するため誤りではないが、データ内一貫性のため like/want の語形分離を推奨）。

### 7. #26 qu / #26 gn — 場所格 *-pi* / *-pe* が独立セグメントに分離されている【確実】
**Current (qu):** `A:「Wawakuna」 E:「parque」 B:「pi」 C:「pukllashan」 D:「kashankum」`
**Current (gn):** `A:「Mitãnguéra」 E:「parque」 B:「-pe」 C:「oñembosarái」 D:「oĩ」`
**Problem:** 場所格接尾辞 *-pi*（qu）/ *-pe*（gn）は名詞に**膠着して分離不能**（Cusihuamán §case suffixes / Krivoshein §postposiciones）。レビュー #30 ラウンド4-6 で **fix-all-variants** として「指示詞は独立語→分離／格接尾辞は膠着→保持」が群30で確立した方針であり、qu/gn の #43 `wasipi`/`restaurante-pe`、#45 `llaqtapi`/`tetã-pe` は A|E 融合保持で実装済み。本 #26 だけが格接辞を独立セグメント B として切り出しており、**膠着原則違反**。語境界が言語類型上存在しない位置にロール境界を引いている。
**Proposed fix:** qu は B|E:「parquepi」（融合保持・1セグメント化）、gn は B|E:「parque-pe」。確信度【確実】（既存方針との重大な不整合）。

### 8. #9 qu / #9 gn — 方向格 *-man* / *-pe* が独立セグメントに分離【確実】
**Current (qu):** `A:「Ñuqa」 F:「hamuq」 G:「watapi」 E:「Japón」 D:「man」 C:「riyta」 B:「munani」`
**Current (gn):** `A:「Che」 B:「aipota」 C:「aha」 E:「Japón」 D:「-pe」 F:「ary」 G:「ou vavépe」`
**Problem:** #7 と完全同型の膠着原則違反。方向（向格）の *-man*（qu）/ *-pe*（gn）は名詞 *Japón* に膠着し独立語ではない（Cusihuamán §case, Krivoshein §postposiciones）。先例 #27 qu `B:「Tokio-man」`、#27 gn `B:「Tokio-pe」` では正しく融合保持されている。fix-all-variants に明白に違反。
**Proposed fix:** qu は D|E:「Japón-man」（融合）、gn は D|E:「Japón-pe」（融合）。確信度【確実】。

### 9. #95 qu — 主語省略で「私」が欠落、兄弟整合性外れ【蓋然】
**Current:** `A:「Bicicletapi」 B:「oficinaman」 C:「rinim」`
**Problem:** ja「自転車でオフィスに行く」/ en `D:「I」 C:「go」 …`。Quechua は確かに pro-drop だが、人称屈折 *ri-ni-m* に1sg 既に内属しているため文法上は問題ない。しかし**兄弟言語 gn は `D:「Che」` を分離して表示**しており（gn:`D:「Che」 A:「bicicleta-pe」 B:「oficina-pe」 C:「aha」`）、qu だけが主語ロール D を欠く。レビュー #30 round12 で nv の主語代名詞 *Shí* が C→D へ retag された fix-all-variants 方針からも、qu に**独立主語代名詞 *Nuqa* の D セグメント追加**が整合的（他文の qu A:「Nuqam」 と同様、ここでは D ロールに割り当て）。
**Proposed fix:** D:「Nuqam」 A:「Bicicletapi」 B:「oficinaman」 C:「rinim」（D を追加）。確信度【蓋然】（言語上は省略可だが兄弟整合性のため）。

### 10. #75 gn — 「泳ぐ」の語が *oy* で誤り（*oy* は「彼が水を撒く／降りる」系）【確実】
**Current:** `A:「Mitãnguéra」 B:「oy」 C:「oñembo'e」`
**Problem:** ja「子どもたちは泳ぎを習っている」/ en「are learning to swim」。Paraguayan Guaraní で「泳ぐ」は **`ñetava`**（再帰）または動詞 **`oñetava`**（3人称）、より一般には *jaha ype guive*（直訳「水へ行く」）、辞書語形は **`oytypa`** / **`oñetava`**。*oy* は表層で *o-y* と解釈すると「彼が水を…する／降りる」系で「泳ぐ」を直接表さない。Krivoshein/Acosta 辞典では「nadar = ñetava, mytũ」とあり、*oy* 単体は「water」「彼は飲む？」程度で意味不明。明確な語彙誤り。
**Proposed fix:** B:「oñetava」 または B:「oytypa」。確信度【確実】。

### 11. #66 gn — 「雪」が *rogue*（葉）になり「覆われている」が *oñekurusu*（十字を切る）に【確実】
**Current:** `A:「Yvyty」 B:「roguégui」 C:「oñekurusu」`
**Problem:** ja「山は雪で覆われている」/ en `B:with snow / C:is covered`。
1. *rogue* = 「葉（leaf）」。Krivoshein §植物。雪は **`ro'y`**（寒さ・霜・雪の意味も持つ）、または借用 **`rojy`** / **`nieve`**。さらに格接辞 *-gui* は **奪格（from / out of）**で道具格「〜で（with）」ではない。「〜で覆う」の道具・素材は *-pe* または *-re* / *-vyrasa*。
2. *oñekurusu* = 「十字を切る」/「交差する」（< kurusu = 十字架）で「覆われる」ではない。「覆われる」は **`ojaho'i`**（< jaho'i = 覆う）の受動 *oñejaho'i*、または *ojahojai*。
両語ともに明確な語彙誤り。
**Proposed fix:** B:「ro'ýgui」/B:「ro'y rehe」 C:「oñejaho'i」。確信度【確実】（2項目の語彙取り違え）。

### 12. #33 gn — 「清潔だった」が「散らかっている／広がっている」になっている【確実】
**Current:** `A:「Hotel roga」 C:「iporãiterei」 D:「iñasãi」 B:「vaekue」`
**Problem:** *iñasãi* は「散らばっている／拡散している（scattered / spread out）」の意味（< asãi = scatter）で「清潔（clean）」ではない。清潔は **`ipotĩ`**（< potĩ = clean）。さらに #30 closed の dialectical 一貫性の鉄則からも、形容詞ロール D に逆義に近い *iñasãi* を当てるのは明白な語彙誤り。
**Proposed fix:** D:「ipotĩ」（clean=形容詞・3人称的属性形）。確信度【確実】。

### 13. #33 gn — 「ホテルの部屋」が *Hotel roga*（ホテルの家）と訳されている【蓋然】
**Current:** `A:「Hotel roga」 ...`
**Problem:** *roga*（< *róga*）は「家／住居」。「部屋（room）」は **`koty`**。en は `A:The hotel / E:room` と分離しており、ja も「部屋」を明示。Guaraní で「ホテルの部屋」は **`hotel koty`** または **`hotél pegua koty`** が標準。*Hotel roga* は「ホテルの建物全体」を指し、room の指示が落ちている。
**Proposed fix:** A:「Hotel」 E:「koty」 と分離（en と整合）、または最低限 A|E:「Hotel koty」。確信度【蓋然】。

### 14. #90 gn — 「学んだ」が「教えた」になっている【確実】
**Current:** `A:「Ha'e」 B:「programación」 C:「ha'eño」 D:「ombo'e」`
**Problem:** *ombo'e* は「彼は教える（he teaches）」（< mbo'e = teach）の他動詞 3sg。「学ぶ」は再帰形 **`oñembo'e`**（reflexive: he teaches-himself = he learns）。先例 #75 gn 自身が *oñembo'e* を「are learning」に正しく当てている。本文「彼は独学でプログラミングを学んだ（he learned programming by himself）」は明白に「学ぶ」側で、*ombo'e* では「彼はプログラミングを（誰かに）教えた」になり意味反転。
**Proposed fix:** D:「oñembo'e」（過去・完了は文脈で示される、または *oñembo'e vaekue* で過去明示）。確信度【確実】。

### 15. #86 gn — 「使う」が「選ぶ」になっている【確実】
**Current:** `D:「Che」 A:「ára ha ára」 B:「che teléfono」 C:「aiporavo」`
**Problem:** *aiporavo* は「私は選ぶ（I choose / pick）」（< poravo = elegir/choose）。Krivoshein §動詞。「使う」は **`aiporu`**（< poru = usar）。先例 #80 gn `B:「oñembo'e」` と同様、本データ内で動詞語幹の取り違えが散見される。明確な語彙誤り。
**Proposed fix:** C:「aiporu」。確信度【確実】。

### 16. #80 qu — 「信じる／思う」の語が *inini* で書かれており、Cuzco 標準は *iñini*【蓋然】
**Current:** `... A:「nuqam」 E:「inini」`
**Problem:** *iñini* は「信じる（believer / creer）」（スペイン語起源借用 *iñiy*）で、語頭は ñ。本データの *inini* は ñ→n の脱落で正書として非標準。さらに **#19 で *munani* を「I like」、#78 で *yuyani* を「I think」、#80 で *inini* を「I believe」と使い分けている**が、Cuzco 標準では「思う／信じる」はいずれも *yuyay* / *iñiy* の語彙領域で、*inini* と書かれた語形は辞書に存在しない。
**Proposed fix:** E:「iñinim」（正書補正＋直接証拠 -mi）または E:「yuyanim」（思うで統一）。確信度【蓋然】（正書の ñ 欠落は明確だが、選定動詞は語用次第）。

### 17. #52 qu — 「失くした」の形態素順が異常 *chinkarqachini*（< chinka-rqa-chi-ni）【確実】
**Current:** `... C|H:「chinkarqachini」`
**Problem:** Cuzco-Collao の語形成順は **語根 + 派生（使役 -chi-, 再帰 -ku- 等）+ 時制 + 人称**（Cusihuamán §verb morphology, Cerrón-Palomino §morfología）。「失くす」（他動詞）は語根 *chinka-* + 使役 *-chi-* で **`chinkachi-`**、過去1sg は **`chinkachirqani`**（chinka-chi-rqa-ni: lose-CAUS-PST-1）。本データの *chinkarqachini* は **時制 -rqa- の後に使役 -chi- が来ており、形態素順が逆**。さらに使役を入れずに自動詞 *chinkarqani*（私が失せた）と取ると主語が物体に転倒し非文。明確な形態素順誤り。
**Proposed fix:** C|H:「chinkachirqani」。確信度【確実】（Cusihuamán 説明と完全に矛盾する語形）。

### 18. #1 qu — 「shop の所在地（across from）」を表す *chimpanpi* に対し *hotelpa*（hotel の所有格）が分離されている【蓋然】
**Current:** `... K:「hotelpa」 J:「chimpanpi」 I:「tindapi」 ...`
**Problem:** *hotel-pa*（hotel-GEN）+ *chimpa-n-pi*（across-3POSS-LOC）で「ホテルの向かい側に」を表す典型構文（Cuzco の関係名詞 *chimpa* "the other side"）。これは1つの所在表現として機能し、英 `J:across from / K:the hotel` と分節対応するのは妥当だが、qu のロール K に **hotelpa** だけを置くと所有格 -pa が孤立する。意味上 *hotelpa* は「ホテルの〜」で、対応英語ロール K は単に「the hotel」。所有/属格が-paによりすでに付加されているため意味上は OK だが、**所有格 -pa はホテルに膠着して chimpan を修飾**しているという形態統語関係が分節で表現されない（hotelpa を chimpanpi と切り離すと、所有関係が失われる）。先例 #43/#45 qu の `Kay / mikhuna wasipi` のように指示詞を分離した後の名詞句保持と同じく、**hotelpa を独立 K ロールにしつつ chimpanpi/tindapi と並列するのは関係名詞構文を分解しており**、本来は `K:「hotelpa chimpan」 J:「-pi」` という構造ではなく、ja/en の指示対応上は K|J:「hotelpa chimpanpi」 が言語類型に忠実。**この是非は #43/#45 で確立した「指示詞のみ独立／関係名詞は融合」原則の境界事例**。
**Proposed fix:** 最小修正案は K|J:「hotelpa chimpanpi」 として所有+関係名詞+格を1セグメント化、または J:「chimpanpi」 単独で K を兼ねる。確信度【蓋然】（言語類型の境界事例であり議論余地あり）。

### 19. #23 qu — 「病院」のロール C に属格付き *hampiq wasip* が当てられ「病院の〜」に化けている【確実】
**Current:** `A:「Nawiriy wasim」 C:「hampiq wasip」 B:「qayllapi」 D:「kashan」`
**Problem:** en は `C:the hospital`（病院単体）/`B:next to`/`D:is`。本データ qu の C:「hampiq wasip」は *hampi-q wasi-p*（cure-AG house-GEN = "of the hospital"）で**属格 -p が付加**されており、意味は「病院の」。次の *qayllapi*（近く-LOC）が「〜の近く」を担うため、*wasip* の属格は *qaylla-* を修飾している。よってロール C は本来「病院」ではなく「病院の近く」全体を表すべきで、現状の C:「hampiq wasip」 B:「qayllapi」分割は意味境界を誤切断している。Cuzco 標準の構文は **`hampiq wasi-q qayllan-pi`**（< wasi-GEN, qaylla-3POSS-LOC）「病院の近所に」で1関係名詞句。
**Proposed fix:** C:「hampiq wasiq」（属格 -q に修正）+ B:「qayllanpi」（3人称所有 -n + 場所 -pi）、または C|B:「hampiq wasiq qayllanpi」融合。最低限 *-p* を *-q* に正書修正。確信度【確実】（属格接尾辞の不一致：Cuzco では q/p の使い分けが母音終わり=-q、子音終わり=-pa、本例 wasi 母音終わり→ *wasiq*）。

### 20. #88 qu / #80 qu / #79 qu — 話題標識 -qa / 直接証拠 -mi の表記揺れ（ハイフン有り／無し）【要検討】
**Current:** #88 qu `A:「AI-qa」`、#80 qu `B:「yachakuyqa」`（ハイフン無し）、#79 qu `A:「payqa」`（ハイフン無し）、#84 qu `A:「Paymi」`（無し）、#86 qu `D:「Nuqam」`（無し）。
**Problem:** Cuzco-Collao 正書法（Cerrón-Palomino §ortografía）では enclitic（-qa, -mi/-n, -taq, -chu 等）は **基本的にハイフンなしで直接接尾**するのが規範。借用語語幹（AI, Wi-Fi）にのみ可読性のためハイフンを許容する慣例はあるが、#88 の `AI-qa` だけハイフン有り、他の qu 全文はハイフン無しで一貫している。表記揺れというより**借用語幹に対する個別慣例**として許容範囲内だが、群内一貫性のため明示方針が望ましい（コメント程度の指摘）。
**Proposed fix:** 借用語ハイフンは現状維持で可。ただし方針として「-qa/-mi はハイフンなしで膠着、ただし AI/Wi-Fi 等の借用大文字略号には可読性のためハイフン挿入を許容」と明文化。確信度【要検討】（誤りではなく方針明文化推奨）。

### 21. #89 qu — 主語 *Ñuqa*（ñ あり）と他文の *Nuqa*（ñ なし）の正書統一が崩れている【蓋然】
**Current:** #89 qu `A:「Ñuqa」`、対して #1/#2/#3/#9/#11/#80 等 qu `A:「Nuqa」/「Nuqam」`。
**Problem:** Cuzco-Collao 正書（5母音表記）では1人称代名詞は **`Ñuqa`**（ñ 付き）が規範（Cusihuamán §pronouns; 1985 ペルー文化省正書法令）。Bolivian / Ayacucho の一部規範では *Nuqa* も用いられるが、データ内で **Ñuqa（#1, #9, #58, #80, #89, #98）と Nuqa（#2, #3, #5, #6, #11, #14, …）が混在**している。同一データセット内の正書一貫性が崩れており、Cuzco 規範に統一すべき。
**Proposed fix:** 全 qu 文の主語代名詞を **`Ñuqa(m)`** に統一（または逆に *Nuqa* に統一）。確信度【蓋然】（正書揺れ・方言差で誤りではないが内的一貫性のため統一推奨）。

### 22. #46 qu — 「友達と」の所有 -y + 共同格 -wan が B|F|G 3-way 融合のまま【蓋然】
**Current:** `... B|F|G:「masiywan」 ...`
**Problem:** *masi-y-wan*（friend-1POSS-COM）は確かに膠着で分離不能で、レビュー #30 round 5 の「所有接頭辞・接尾辞は KEEP」原則に従う融合は正しい。ただし gn 側は同 #46 で **G:「che」（my）/ B:「irũ」（friend）/ F:「ndive」（with）** と3分離されている。これは gn では所有が独立接頭辞 *che-*、共同格 *ndive* が独立後置辞であるのに対し、qu は所有 *-y*・共同格 *-wan* がいずれも接尾辞膠着であるため**言語類型差**として現状の融合は正当。**つまりこれは KEEP 案件で actionable ではない**が、明示的に「qu の B|F|G 融合は膠着原則による正当な保持」と記録しておく。
**Proposed fix:** 現状維持（KEEP 記録）。確信度【蓋然】（誤りなし、記録のみ）。

### 23. #50 qu — 「犬」+所有 +「私の」を A|E:「Allquymi」融合は妥当だが評価動詞の選定【蓋然】
**Current:** `A|E:「Allquymi」 C:「puriyta riyta」 D:「munanmi」`
**Problem:** *allqu-y-mi*（dog-1POSS-EVI）「私の犬は（直接証拠）」融合は #46 と同型で膠着保持として正当（A|E 融合 KEEP）。問題は D:「munanmi」で「散歩が好き」を *munan*（< muna-n = he wants）と訳している点。#19 と同じく *munay* で like/want を兼ねているが、ここでは「犬が散歩を好む」習慣的属性であり Cuzco では **`kusi-ku-n`**（< kusi-ku- = enjoy）の方が忠実。ただしレビュー #30 ラウンド1 で gn 側 *ohayhúva*（loves）の用例と整合し許容範囲。
**Proposed fix:** 任意改善 D:「kusikunmi」。確信度【蓋然】（誤りではない語用選好）。

### 24. #66 qu — 「覆われている」が *p'ampasqam*（埋められた、reportative）で受動・状態の不一致【蓋然】
**Current:** `A:「Urquqa」 B:「ritawan」 C:「p'ampasqam」`
**Problem:** *p'amp'a-* は「埋める／覆い隠す（bury, cover over）」（Cusihuamán §lexicon）で、*-sqa* 過去分詞 + *-mi* 直接証拠で「（私が見たところ）覆われている」自体は文法的に成立する。ただし *p'ampay* は通常「埋葬する／土をかぶせる」の含意が強く「雪で覆われた山頂」の image にやや過剰。Cuzco で「（雪に）覆われている」のより自然な表現は **`rit'iwan qatasqa`**（< qata- = cover）または **`rit'iyusqa`**（< rit'iyuy = snow-covered）。これは明確な誤りではないが語用選好の問題。
**Proposed fix:** 任意改善 C:「qatasqam」 または C:「rit'iyusqam」。確信度【蓋然】。

### 25. 総評：Quechua/Guaraní の系統的欠陥

本回監査で検出された **24 件**の actionable 指摘の支配的パターンは以下の3類型である：

1. **語彙取り違え（vocabulary mis-selection）— 9件** (#1[hotel構造], #15[nanay=痛み], #33gn[iñasãi=散乱], #66gn[rogue=葉/kurusu=十字], #75gn[oy], #86gn[poravo=選ぶ], #90gn[ombo'e=教える], #5qu[kasqa=reportative], #19qu[munani=want])。特に **gn の動詞語彙誤り**が突出して多く（6件）、これは類似形態の動詞語幹（mbo'e/oñembo'e, poravo/poru, kurusu/ho'i, asãi/potĩ）の混同が系統的に起きている疑い。

2. **格接尾辞の不正分離（agglutinative case suffix mis-split）— 2件**（#26qu/gn の *pi*/*-pe*、#9qu/gn の *man*/*-pe*）。これはレビュー #30 ラウンド4-6 で確立した「指示詞独立／格接辞膠着」鉄則と直接矛盾し、**fix-all-variants 原則に対する明白な退行**である。最優先で修正されるべき。

3. **正書統一の崩れ（orthographic inconsistency）— 3件**（#21 *Ñuqa*/*Nuqa* 混在、#16 *inini*/*iñini*、#100 *anaychayki*/*añaychayki*、#20 ハイフン揺れ）。**ñ の脱落**が共通因子で、Cuzco-Collao 正書法（1985 ペルー文化省規範）への明示的アンカーが必要。

**最も重大な系統的欠陥**は **gn の動詞語彙取り違え（mbo'e/oñembo'e, poravo/poru, kurusu/ho'i 等の類似形態混同）** で、計6件中4件が【確実】の語彙誤り。これは音形が近接した動詞語幹を取り違える共通の入力誤りパターンを示しており、gn 動詞群の全数再点検が望ましい。

---

**ファイル状態: OPEN**

**ファイルパス**: `/home/jounlai/langmap/langmap_reviews/36_open.md`
**指摘総数**: 24 件（うち【確実】= 12, 【蓋然】= 10, 【要検討】= 2）
**支配的系統欠陥**: **gn 動詞の類似形態取り違え**（mbo'e↔oñembo'e, poravo↔poru, kurusu↔ho'i, asãi↔potĩ）— 6 件中 4 件が【確実】の語彙誤り。次点で **qu/gn の格接尾辞不正分離**（#9, #26）が fix-all-variants 鉄則に対する退行として高優先。

---

## Dev response — round 1 (2026-06-03)

Reviewer Dr. Pumacahua-Mendieta、ご指摘ありがとうございました。Cuzco-Collao および Paraguayan Standard の鉄則に沿って、22項目のうち **19項目を受諾**、**2項目を反対案で計上**、**3項目を保留** としました。総編集件数 **51件**（うち qu/gn 直接修正 21件＋ qu 全文 *Nuqa→Ñuqa* 正書統一 30件）。

### 受諾（Accept）— 19件

#### A. 語彙取り違え（明確語誤）— 9件
- **#15 qu** A:「Nanaymi」→「Sullk'a panaymi」 — *nanay* = 痛み を 妹（年下女性きょうだい）に修正。`sullk'a panay` で「年下の妹」を明示。
- **#5 qu** D:「miski kasqa」→「miskim」 — reportative -sqa を直接証拠 -mi に。
- **#16 qu** D:「kasqa」segment 削除 — 未来 3sg *qallarinqa* に reportative-past を重ねる二重時制を解消。
- **#100 qu** B:「anaychayki」→「sulpayki」 — Cuzco 標準感謝語に置換。
- **#75 gn** B:「oy」→「oñetava」 — Paraguayan 標準「泳ぐ」に修正。
- **#66 gn** B:「roguégui」→「ro'ýgui」、C:「oñekurusu」→「oñejaho'i」 — 葉/十字を切る → 雪/覆われる に2項目同時修正。
- **#33 gn** D:「iñasãi」→「ipotĩ」 — 散乱 → 清潔 に修正。
- **#90 gn** D:「ombo'e」→「oñembo'e」 — 教える → 学ぶ（再帰）に修正、意味反転を解消。
- **#86 gn** C:「aiporavo」→「aiporu」 — 選ぶ → 使う に修正。

#### B. 形態統語誤り — 4件
- **#19 qu** D:「munani」→「munakuni」 — like/want の語形分離。
- **#52 qu** C|H:「chinkarqachini」→「chinkachirqani」 — 形態素順 -chi-/-rqa- 入れ替え（Cusihuamán §morphology）。
- **#23 qu** C:「hampiq wasip」→「hampiq wasiq」、B:「qayllapi」→「qayllanpi」 — 属格 -p→-q（母音終わり）と関係名詞の 3POSS -n- 補完。
- **#80 qu** E:「inini」→「iñinim」 — ñ 補完 + 直接証拠 -mi。

#### C. 格接尾辞の不正分離（fix-all-variants 退行修正）— 4件
- **#26 qu** E:「parque」+ B:「pi」 → B|E:「parquepi」融合。
- **#26 gn** E:「parque」+ B:「-pe」 → B|E:「parque-pe」融合。
- **#9 qu** E:「Japón」+ D:「man」 → D|E:「Japón-man」融合（#27 Tokio-man と整合）。
- **#9 gn** E:「Japón」+ D:「-pe」 → D|E:「Japón-pe」融合（#27 Tokio-pe と整合）。

#### D. 兄弟整合・構造修正 — 2件
- **#95 qu** D:「Ñuqam」新設 — 兄弟 gn D:「Che」と整合。
- **#33 gn** A:「Hotel roga」→ A:「Hotel」E:「koty」分割 — en `A:The hotel / E:room` と完全整合。

#### E. 正書統一（指摘 #21）— 30件
qu 全文を Cuzco-Collao 規範 **Ñuqa(m)** に統一（#3, #6, #11, #14, #19, #21, #22, #27, #29, #32, #37, #39, #41, #44, #46, #48, #52, #55, #58, #60, #62, #64, #67, #68, #71, #74, #80, #81, #83, #86）。**ñ 欠落の系統的修正**を全文範囲で実施。

### 反対案・部分受諾（Counter）— 2件

- **指摘5 (#100 qu)**: 「llapan / imakunamanta」二重指示は en の `A:everything C:for` と1:1対応しており（A は「全て」、C は奪格「〜について」）、現行 ロール分割は en alignment 上正当です。冗長と感じられる点は理解しますが、**ロール構造を en と一致させる優先度**から **A/C 分離は保持**します。
- **指摘18 (#1 qu)**: K:「hotelpa」 J:「chimpanpi」 は en `K:the hotel / J:across from` と完全に1:1対応しており、関係名詞構文の融合は en の rolespan を潰すことになります。Cuzco の **`hotelpa chimpan-pi`** という所有格＋関係名詞のチェーンは、en の across/from と the hotel が独立ロールで表現されるのと**並行構造**として現状を保持するのが妥当と考えます（指摘#43/#45 が「指示詞独立／格接辞膠着」とした原則の **関係名詞は en role と並行**境界事例）。**KEEP** とします。

### 保留（Defer / Doc-only）— 3件

- **指摘20 (#88 qu ハイフン揺れ)**: 【要検討】とされた通り、借用語幹（AI / Wi-Fi）への可読性のためのハイフン挿入は許容範囲内。本ラウンドでは**方針記録のみ**（borrowed-uppercase abbreviations may carry a hyphen before enclitics）とし、データ修正は見送ります。
- **指摘22 (#46 qu B|F|G 融合)**: 明示記録の通り **KEEP**（編集なし）。
- **指摘23 (#50 qu munanmi) / 指摘24 (#66 qu p'ampasqam)**: いずれも【蓋然】の語用選好。本ラウンドでは確実な語彙誤りに優先度を寄せ、本2件は**次ラウンド**で再検討します。

### 補足
- **ZWNJ メモ** (`feedback_glue_marker.md`): qu/gn 既存データは現時点で ZWNJ を使用しておらず、本データ群の慣例は **ハイフン or 直接膠着の単一セグメント表記**（例 #27 Tokio-man, #95 Bicicletapi）。本ラウンドは既存慣例を踏襲し、新規 ZWNJ 導入は行いませんでした。次ラウンドで全 qu/gn 接尾辞の ZWNJ 化を検討する場合は別件として議論します。
- **隣接同役回避**: 全編集後、隣接同役ロールはゼロ（applier 出力 `adjacentWarnings: []` で確認済み）。
- **READ-ONLY 遵守**: data.js は直接編集していません。編集 JSON は `/tmp/lm_edits_36.json` に格納。

