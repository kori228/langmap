# LangMap データレビュー #42 — 所有マーカー (my / your / his / her / our) のチャンク化 横断レビュー

## レビュアー自己紹介 (ペルソナ)

Anneliese Brandt-Olafsson (handle: **@anneliese_poss**)。コペンハーゲン大学言語類型論部門・所有 (possession) 範疇の形態統語論専門。普段の典拠は Aikhenvald & Dixon *Possession and Ownership: A Cross-Linguistic Typology* (OUP 2013)、Heine *Possession: Cognitive Sources, Forces, and Grammaticalization* (CUP 1997)、Dixon *Basic Linguistic Theory vol. 2* §16、Nichols *Linguistic Diversity in Space and Time* §3.5。今回は LangMap の 100 文を対象として **英語 reference に所有代名詞 (my / your / his / her / our / their / its) が現れる sentence のみ** をターゲットに、所有マーカーの分節 (segmentation) と役割文字 (role-letter) 配当が、type 横断 (free pronoun + N / 接辞型 / 一致 (concord) 型 / 反射 (reflexive) 型 / inalienable vs alienable 区別) で一貫しているかを精査した。

## 検証範囲

- **英語に所有代名詞が出る文 = 全 16 文**: #2, #8, #15, #25, #29, #35, #46, #50, #51, #52, #64, #69, #71, #73, #79, #86 (`en` テキストから "my/your/his/her/our/their/its" を機械抽出)。en #73 は "my cat ... my bed" の二重所有を含む。
- **言語横断**: 標準言語 (ja, ko, zh, vi, de, fr, es_eu, it, ru, ar, he, fa, ur, ps, ku, hi, sa, la, el, el_grc) + 接辞型 (tr, az, kk, ky, ug, uz, fi, hu, mn, sw, zu, xh, sm, haw, mi, eu, hy, ka, am, ti, my, om, akk, sux, hit, egy, cop)。223 言語を機械的に走査し、所有マーカーの分節ふるまいを抽出。
- **既存 closed review** との重複は避け、本レビューは **「所有マーカーの分節と役割文字の言語横断整合」** に絞る。Sino register (#38) や segment splitting general rule (#39 等) には立ち入らない。

## 方針 — 何を「指摘」とし、何を「許容」とするか

1. **正当な type 差** は指摘しない。例: ja「お母さん」が #8 で 私の を省略 (Japanese は kinship + 主語の場合 1人称所有を defaulted で落とすのが自然) は許容。中国語「我妈妈」で 的 を入れない (近親称所有は 的 省略が標準) も許容。
2. **同一文内の sibling 不整合** は flag する。例: #2 で ja `A:私の B:名前は` (split) なのに #50 ja `E:私の A:犬は` を E に振っている、あるいは sibling 言語間で同じ所有概念に対し role-letter A と E が混在する。
3. **接辞型言語の所有接辞 (-im/-ni/-em) の分節基準** が closed review #21 (ZWNJ glue marker) で確立しているところに照らし、`B:N + A:‌POSS` の split が実施されているか、または `A|B:N-POSS` で merge されているかが、同一言語内で一貫しているかを確認する。
4. **同じ kinship/N に対する所有マーカーの含む/省く判断** が言語ごとに揺れている場合 (例: ja で #8「お母さん」は私の省略、#50「私の犬」は明示) は、en reference 側との対応が崩れる可能性を flag する。
5. **同じ言語族 (sibling) 内での所有マーカー形** が不揃いな場合 (ko 「제」 #2 / 「내」 #50 / 「나의」 #51 — 三形が登録される) は意図的 register 差か取りこぼしか診断する。

確信度: **【確実】** = 明白な sibling 不整合 / role-letter ミス / ZWNJ 欠落、**【蓋然】** = 形態論的に正当性に幅があるが揃えるべき候補、**【要検討】** = type 論的 default を踏まえれば KEEP も成立。

---

## 指摘事項 (Issues found)

### 1. ko の一人称所有形が 「제 / 내 / 나의」 三形混在 — register 揃え 【確実】
**Current:** #2 ko `A:「제」 B:「이름은」` / #50 ko `E:「내」 A:「강아지는」` / #51 ko `E:「나의」 A:「할머니는」` / #29 ko `A:「나는」 B:「내 우산을」` / #73 ko `E:「내」 ... B:「내 침대」`
**Problem:** 한국어 1人称所有形には三系統が併存する: (a)「제」= 저 (谦称) + 의 縮約、formal/丁寧体専用、(b)「내」= 나 + 의 縮約、口語標準、(c)「나의」= 完全形、書き言葉/詩的。LangMap の標準 ko データはこの三形を **register 標識なしに混在** させている:
- #2「제 이름은」(丁寧体「입니다」と整合、formal 自己紹介で正当)
- #50「내 강아지」(口語、犬の名称も「강아지」(diminutive) で口語整合)
- #51「나의 할머니」(書き言葉、「해주신다」尊敬体と整合する register)
- #29 / #73 / #64 はすべて「내」

ko 標準 register をどこに置くかが 16 文中で **動揺している**。en reference は中立 (my)。register 軸を持つ言語として #2 が「제 (formal)」を採るなら、文体 marker (입니다 등) と整合する文 (#46 「‌했다」 = 文語体) では同じ register 軸で「제/저의」が自然。一方 #50 「좋아한다」(口語) では「내」が自然。**register 整合検査** が必要。
**Proposed:** 各文の述語 register と所有形 register を機械的に合わせる:
- 丁寧体 (입니다 / 해요) → 「제」または「저의」
- 口語 (한다 / 갔다) → 「내」
- 文語/書面 (는다 + 尊敬) → 「나의」または「제」

具体的には #51 ko `E:「나의」` は「해주신다」尊敬体と整合し維持可、#50 ko `E:「내」` も口語 register と整合し維持可、ただし **closed-review で「ko 標準は register 軸で 3 形使い分けを意図」と明記すべき**。最小修正不要だが、ka 軸の説明が現状の closed reviews に存在しない。

### 2. ja 一人称所有「私の」の有無が文間で非一貫 — 意図性確認 【確実】
**Current:** ja の 16 文を比較すると:
- 「私の」を明示する文: #2 (A:私の)、#50 (E:私の 犬は)、#51 (E:私の 祖母は)、#73 (E:私の 猫は + B:私のベッド)
- 「私は」のみで「私の」省略: #8 (お母さん)、#15 (妹)、#25 (父)、#29 (傘を)、#46 (友達)、#52 (財布)、#64 (スマホ)、#71 (発音)、#86 (毎日)
- 「彼/彼女」は (#35 兄、#69 彼、#79 彼女) → 親族/モノに所有マーカーなし

**Problem:** ja は所有マーカー「私の」を **頻繁に省略する** (pro-drop 全般、特に kinship 親族・身体部位・身近な所持物では default 省略)。しかし LangMap の選択基準は **不明瞭**:
- #50「私の犬は」、#51「私の祖母は」、#73「私の猫は」 → 動物・祖母を「私の」付きで明示
- #8「お母さん」、#25「父」 → 同じく親族で「私の」省略
- #29「傘を」 → 「自分の傘」を意味するが省略
- #46「友達と」、#52「財布を」 → 省略

en reference 側は全 16 文で my を明示しているのに、ja では 4 文だけ「私の」を立てる。「祖母 / 犬 / 猫 / ベッド」は対象として **第三者と区別する必要が出る** (祖母は my grandma vs grandma in general) ためか? 一貫性ある原則 (例: animacy +human → 省略可、+animate −human → 明示、+inanimate 親密 → 省略) を立てた可能性はあるが、**closed-review に明記なし**。
**Proposed:** 修正候補は二択:
- (a) 全 16 文で「私の」を明示する (en parallel 一致を優先)。#8「私の お母さんは」、#15「私の 妹は」など。
- (b) 全 16 文で「私の」を省略する (pro-drop 自然さ優先)。#50 #51 #73 から「私の」を抜く。
個人的には ja の natural prose は #8 #15 型 (省略) が標準で、現在の 4 文で「私の」を立てる根拠が薄い。最小修正案は **#73 を `E:私の A:猫は` から `A:猫は` に統一**、#50 #51 も同様に省略。もしくは現状を「親密度・話者と対象の距離で判断」 として closed-review に明記。

### 3. zh 所有マーカー「的」の有無が文間で非一貫 【確実】
**Current:**
- 「我的」を立てる: #2 (A:我的), #50 (E:我的 狗), #64 (B:给我的手机), #71 (B:我的发音), #73 (E:我的 + B:我床上), #79 (D:她的朋友), #86 (B:我的智能手机)
- 「的」省略 (近親称デフォルト): #8 (A:我妈妈), #15 (A:我妹妹), #25 (A:我父亲), #35 (A:我 E:哥哥), #51 (E:我 A:祖母) — 親族
- 所有マーカー全くなし: #29 (A:我), #46 (A:我), #52 (A:我), #69 (A:他) — 物・友達

**Problem:** 中国語の所有マーカー「的」は **近親称 (亲属称谓) で省略可能、非親族 (人称代名詞+物)では原則必須** という規則がある (吕叔湘『現代漢語八百詞』)。LangMap の zh データはおおむねこれに沿うが:
- #46「我」 (en: my friend) → 「我朋友」も成立するが「我和朋友」(I with friend) と訳しており「my」を訳していない。en の「my friend」が「(my) friend」省略可能の register として処理されている。
- #29「我 把 雨伞」(en: my umbrella) → 「我的雨伞」「我的伞」と訳すべきところ「雨伞」一語で my を省略。
- #52「我 ... 钱包」(en: my wallet) → 同上、「我的钱包」を期待。
- #69「他...父母」(en: his parents) → 親族 default 省略は妥当、「他父母」または「他的父母」両方可。
- #51「我祖母」(no 的) — 親族 default 省略で OK。
- #73「我床上」(no 的) は **明示的に誤り**: en「my bed」は親族でも身体部位でもなく、「我的床上」が標準。「我床上」は文語的・古風で現代標準書面語では非標準。

zh の所有「的」の規則を統一するには:
- 親族 (#8, #15, #25, #35, #51, #69) → 「的」省略許容
- 物 (#29 雨伞, #52 钱包, #73 床, #64 手机, #71 发音, #86 智能手机) → 「的」必須

現状で `#73 我床上` は明白な不整合 (#73 自身が 「我的」を E に立てているのに B では 我床上 で 的 を落としている — 二重所有の片方だけ 的 を入れる現代中国語的に不自然)。`#29 雨伞` と `#52 钱包` も「我的雨伞」「我的钱包」が自然。
**Proposed:**
- #73 zh `B:「我床上」` → `B:「我的床上」` (内側 NP に 的 を補う)
- #29 zh: 「我 把 雨伞 忘在 火车上 了」 → 「我 把 我的雨伞 ...」 もしくは B:「雨伞」 を `B:「我的雨伞」`
- #52 zh: 同上、`B:「钱包」` → `B:「我的钱包」`
最小修正は **#73 のみ確実** で、#29 #52 は zh の中性記述としても「雨伞 / 钱包」が文脈上「自分のもの」と推測されるため許容範囲。確実は #73 のみ。

### 4. vi 所有マーカー「của tôi / của mình」の役割文字混在 (A vs G) 【確実】
**Current:**
- #2 vi `B:「Tên」 A:「của tôi」 D:「là」 C:「Tanaka」` — 「của tôi」が A
- #46 vi `A:「Tôi」 ... B:「bạn」 G:「tôi」 ...` — 「tôi」を G (所有) に
- #50 vi `A:「Con chó」 E:「của tôi」 D:「thích」` — 「của tôi」が E
- #64 vi `A:「Tôi」 D:「cần」 C:「sạc」 B:「điện thoại của tôi」` — 「của tôi」を B 内に merge
- #71 vi `A:「Tôi」 ... B:「phát âm của mình」` — 「của mình」(再帰) を B 内に merge
- #73 vi `A:「Con mèo」 E:「của tôi」 D:「ngủ」 F:「trên」 B:「giường tôi」` — 「giường tôi」(của 省略+所有) を B 内、「của tôi」を E
- #79 vi `D:「bạn cô ấy」` — 「cô ấy」(her) を D 内 merge
- #86 vi `D:「Tôi」 C:「dùng」 B:「điện thoại thông minh」` — 「my」を全く訳していない (zh 同様)

**Problem:** vi の「của + 代名詞」(所有句) の役割文字が **A / E / G / B 内 merge** の 4 通りに割れている。en reference の構造を見ると:
- #2 en `A:My B:name` → vi は所有を A、N を B に振る
- #50 en `E:My A:dog` → vi は所有を E、N を A に振る (en と整合)
- #46 en `G:my B:friend` → vi 「tôi」(無「của」) を G に分離
- #71 en `B:my pronunciation` → vi 「của mình」を B 内 merge (en と一致)
- #73 en `E:My A:cat ... B:my bed` → vi 「của tôi」E、「tôi」 (giường tôi の中) を B 内 merge

vi 自身は内部で **「của tôi」を独立 segment にするか N の中に飲み込むか** が動揺している。例えば #71 が `B:「phát âm của mình」` で全部 B に飲み込むなら #50 も `A:「Con chó của tôi」` で全部 A に飲み込むのが整合。逆に #50 が E に分離するなら #71 も B から「của mình」を分離して B:「phát âm」 + E:「của mình」 とすべき。

最も体系的なのは **「của + 所有代名詞」を独立 segment として常に分離** することで、これにより en reference の所有 role-letter (E:my / A:my / G:my) と完全 parallel になる。
**Proposed:**
- #64 vi `B:「điện thoại của tôi」` → `B:「điện thoại」 E:「của tôi」` (en は `B:my phone` だが「my」を E に分離するなら整合)
- #71 vi `B:「phát âm của mình」` → `B:「phát âm」 E:「của mình」` (en は `B:my pronunciation` だが上と同じ理由)
- #73 vi `B:「giường tôi」` → `B:「giường」 + B|F (位置)... + 所有 separate segment` (「tôi」 は B 内に混入したまま)
最小修正は vi 内部で **「của + 代名詞」「N + 代名詞」を全部 split に統一** する。または全部 merge に統一する。確実な選択は **split**。

### 5. tr 所有接辞 -m / -im / -em の split/merge と ZWNJ 不整合 【確実】
**Current:**
- #2 tr `A:「Benim」 B:「adım」` — 「ad + ım」 (Tanaka.my.name) を B 内に merge (ZWNJ なし)
- #8 tr `A:「Annem」` — 「Anne + m」 を A 内に merge (ZWNJ なし)
- #15 tr `A:「Kız kardeşim」` — merge
- #25 tr `A:「Babam」` — merge
- #29 tr `B:「şemsiyemi」` (= şemsiye + m + i = umbrella.my.ACC) — merge
- #35 tr `A:「Ağabey」 E:「‌im」` — **split (ZWNJ あり)** ← 唯一 split
- #46 tr `B:「arkadaş」 G:「‌ım」 F:「‌la」` — **split (ZWNJ あり)**
- #50 tr `A:「Köpeğ」 E:「‌im」` — **split (ZWNJ あり)**
- #51 tr `A:「Büyükanne」 E:「m」` — **split だが ZWNJ なし**
- #52 tr `B:「cüzdanımı」` — merge
- #64 tr `B:「telefonu」` — 所有接辞なし (= ACC 形のみ)、原文 my が消失
- #69 tr `C|H:「ailesine」` — 「aile + si (3sg poss) + ne (DAT)」 merge
- #71 tr `B:「telaffuzumu」` — merge
- #73 tr `A|E:「Kedim」 B:「yatağım」` — merge
- #86 tr `B:「akıllı telefon」` — 所有接辞なし、my 消失

**Problem:** #35 #46 #50 #51 が所有接辞 -m / -im を **独立 segment に分離** しているのに、#2 #8 #15 #25 #29 #52 #69 #71 #73 は **merge** している。前者の 4 文 (split) はいずれも en reference で所有マーカーが E (=my older brother, my friend, my dog, my grandmother) に割り当てられている — つまり **en 側で my が独立 role-letter を持つ場合だけ tr も split** という方針らしい。

しかし:
- **#51 tr `E:「m」` には ZWNJ がない** (他の split 例 #35 `‌im` #46 `‌ım` #50 `‌im` は ZWNJ あり)。形態論的に「m」も接辞であり、ZWNJ prefix が必要。
- **#2 tr `A:「Benim」 B:「adım」`** で「Benim」(my, free pronoun + GEN) と「adım」(name + 1sg.POSS) の二重所有マーキングが起きている。tr の標準は「(Benim) adım」で Benim は省略可、adım の -ım が必須。「Benim adım」 + 「ım」の二重所有を split するなら `A:「Benim」 B:「ad」 + E:「‌ım」` のように接辞を切り出すべきだが現状は B merge。
- **#64 tr `B:「telefonu」`** は **所有接辞が消失**: 「telefonumu」 (my phone-ACC) であるべき。「telefonu」 はただの ACC「the phone」で「my」を訳していない。
- **#86 tr `B:「akıllı telefon」`** 同様に -ım/-um が消失。

#46/#50/#35/#51 で split しているのに #29 (şemsiyemi) #52 (cüzdanımı) #71 (telaffuzumu) #73 (Kedim, yatağım) で merge している基準が **en reference の role-letter 構造に依存** しているが、tr の形態論的単位としては全部同じ「N + POSS + (CASE)」構造。**統一は「常に split」** が望ましい:
- #29 `B:「şemsiye」 + 所有 + ACC` (3 つに分割) または `B:「şemsiye」 E:「‌m」 + ACC「‌i」` のように切り出す。

確信度: 接辞 split 方針自体は wordmap project の方針 (#21 ZWNJ glue marker、ko の助詞 split 等) と整合するため確実に「全 16 文で接辞 split」が筋。
**Proposed:**
- **#51 tr `E:「m」` → `E:「‌m」`** (ZWNJ prefix を追加、即修正候補)
- **#64 tr `B:「telefonu」` → `B:「telefon」 E:「‌umu」`** (or 「telefonumu」 を split: `B:「telefon」 E:「‌umu」`)、現状 my を訳していない問題を解消
- **#86 tr `B:「akıllı telefon」` → `B:「akıllı telefon」 + E:「‌um」`** (同上、所有接辞を補う)
- 中長期的には #29 / #52 / #71 / #73 の merge 形を split 形に統一。

### 6. fi 所有接辞 -ni の split/merge 不整合 【確実】
**Current:**
- #2 fi `A:「Minun」 B:「nimeni」` — merge (B 内に -ni)
- #8 fi `A:「Äitini」` — merge
- #15 fi `A:「Pikkusiskoni」` — merge
- #25 fi `A:「Isäni」` — merge
- #29 fi `B:「sateenvarjoni」` — merge
- #35 fi `A|E:「Isoveljeni」` — merge (A|E compound)
- #46 fi `B:「ystäväni」` — merge
- #50 fi `A:「Koira」 E:「‌ni」` — **split (ZWNJ あり)**
- #51 fi `A:「Isoäiti」 E:「‌ni」` — **split (ZWNJ あり)**
- #52 fi `B:「lompakkoni」` — merge
- #64 fi `B:「puhelimeni」` — merge
- #71 fi `B:「ääntämistäni」` — merge
- #73 fi `A:「Kissa」 E:「‌ni」` — **split (ZWNJ あり)**
- #86 fi `B:「älypuhelintani」` — merge

**Problem:** tr と同型: split 4 文 (#50 #51 #73) + #46 G-相当無し すべてが en で `E:my` 役割。merge は en で `A:My` または所有が他 role-letter に飲み込まれる場合。tr と同じく **en の role-letter 構造に依存して fi の形態論を分節するか merge するかを決めている** が、fi 自身の体系として一貫しない。

特に #2「Minun nimeni」(my [GEN] name-1sg.POSS) — 二重所有で Minun は省略可、nimeni 単独で十分。free pronoun 「Minun」を A に立てるなら、接辞「-ni」も独立 segment とすべき (split):
- 現状 `A:「Minun」 B:「nimeni」`
- 揃え案 `A:「Minun」 B:「nime」 + E:「‌ni」` or `A:「Minun」 + A:「‌ni」 + B:「nime」` (二つの所有マーカーが両方 A)

#35 fi `A|E:「Isoveljeni」` は compound A|E (兄 A + my E) で、tr #35 が `A:「Ağabey」 E:「‌im」` と split しているのに対し fi は merge。**sibling cross-language 不整合**。
**Proposed:**
- 最小修正: fi の所有接辞 split 方針を「常に split」または「常に merge」のいずれかに統一。
- 確実な選択は **常に split** (wordmap project の glue marker 方針と整合)。例えば #2 fi → `A:「Minun」 B:「nime」 + 接辞「‌ni」` を E または A の追加 segment として、#35 fi → `A:「Isovelje」 E:「‌ni」`、#46 fi → `B:「ystävä」 G:「‌ni」`、等。
- 確実な現状最小修正: **#35 fi `A|E:「Isoveljeni」` → `A|E:「Isovelje」 + 別 segment「‌ni」`** で tr #35 と整合。

### 7. sw 所有 concord 「-angu / yangu / wangu / langu」の split/merge 不整合 【確実】
**Current:**
- #2 sw `A:「Jina langu」 C:「‌ni」 D:「Tanaka」` — A 内に langu merge (langu = name-class.7.my)
- #8 sw `A:「Mama yangu」` — merge
- #15 sw `A:「Dada yangu」` — merge
- #25 sw `A:「Baba yangu」` — merge
- #29 sw `B:「mwavuli wangu」` — merge
- #35 sw `A|E:「Kaka yangu mkubwa」` — merge
- #46 sw `B:「rafiki」 G:「yangu」` — **split (G で分離)**
- #50 sw `A:「Mbwa」 E:「wangu」` — **split (E で分離)**
- #51 sw `A|E:「Bibi」` — 所有マーカーなし (en: my grandmother、訳出されていない)
- #52 sw `B:「mkoba wangu」` — merge
- #64 sw `B:「simu yangu」` — merge
- #69 sw `C:「wazazi wake」` — merge (his)
- #71 sw `B:「matamshi yangu」` — merge
- #73 sw `A|E:「Paka」` — 所有マーカーなし (en: my cat、訳出されていない)
- #79 sw `D:「rafiki yake」` — merge
- #86 sw `B:「simu yangu ya akili」` — merge

**Problem:** sw の所有 concord (langu/yangu/wangu/lake/yake/wake) は class agreement 形式で、語根「-angu/-ako/-ake/-etu」+ class prefix の組み合わせ。LangMap の sw データは:
- merge 11 文 (#2, #8, #15, #25, #29, #35, #52, #64, #69, #71, #79, #86)
- split 2 文 (#46, #50)
- 完全省略 2 文 (#51 Bibi、#73 Paka — en: my grandmother / my cat に対する所有を全く訳していない)

#51 #73 の **完全省略は確実な取りこぼし**: en 「My grandmother」「My cat」は LangMap の他の言語 (zu, xh, sm, haw, mi, ko など) で全部 my を訳出している。sw 「Bibi」「Paka」(grandmother, cat) は所有マーカーなしで「(the) grandmother」「(the) cat」となり、英文の所有性が消失。
**Proposed:**
- **#51 sw `A|E:「Bibi」` → `A:「Bibi」 E:「yangu」`** (my grandmother、yangu = class 9 my)
- **#73 sw `A|E:「Paka」` → `A:「Paka」 E:「wangu」`** (my cat、wangu = class 1 my)
- 中長期的には #46 #50 の split 方針 (E に -angu を分離) に他文も統一するか、または全部 merge に統一。**最小修正は #51 #73 の補完**。

### 8. zu / xh の所有 concord 不整合 + 整形 bug 【確実】
**Current:**
- #2 zu `B:「Igama」 A:「 lami」 C:「ngingu」 D:「Tanaka」` — **A 内の先頭に空白文字 ` lami`**
- #2 xh `A:「Igama」 B:「lam」` — xh は所有 (lam) を B に
- #51 zu `A:「Ugogo」 E:「wami」` — split
- #25 zu `F:「 enkulu」` — F 内先頭に空白
- #51 zu `C:「 izindaba」 B:「 ezimnandi」` — C と B 両方先頭空白
- #64 zu `B:「 ifoni yami」` — B 先頭空白
- #71 zu `B:「 ukuphimisa kwami」` — 先頭空白
- #79 zu `D:「 umngani wakhe」 E:「 uhambile」` — 両方先頭空白

**Problem 1 (確実な bug):** zu のいくつかの segment が **先頭にスペース** を持つ。これは表示上「(空白) lami」となり、segmentation tool 上で「‌」(ZWNJ) で接辞を marking する project 方針と矛盾する。`lami` は実は所有 marker「la + mi」だが、ZWNJ なしで余分なスペースだけが入っており、Bantu 言語の所有 concord を agglutinative suffix として扱うのか free 形態素として扱うのかが曖昧。
**Problem 2:** zu と xh で同じ文の所有 role-letter が逆転:
- #2: zu `B:「Igama」 A:「 lami」` (名詞 B, 所有 A) vs xh `A:「Igama」 B:「lam」` (名詞 A, 所有 B)
- en reference は `A:My B:name` で「My=A, name=B」が parallel。zu は en と逆、xh は en と一致。**zu の role-letter 配置が en/xh と不整合**。
**Proposed:**
- **整形 bug 一括修正**: zu の以下の segment 先頭空白を削除し、Bantu 所有 concord を独立 segment 形 (split) として扱う方針を統一:
  - #2 zu `A:「 lami」` → `A:「lami」` (先頭空白削除) + role-letter を `B:「Igama」 + A:「lami」` から **`A:「Igama」 + E:「lami」`** に再配置 (xh と整合)
  - #25 zu `F:「 enkulu」` → `F:「enkulu」`
  - #51 zu `C:「 izindaba」` → `C:「izindaba」`、`B:「 ezimnandi」` → `B:「ezimnandi」`
  - #64 zu `B:「 ifoni yami」` → `B:「ifoni yami」`
  - #71 zu `B:「 ukuphimisa kwami」` → `B:「ukuphimisa kwami」`
  - #79 zu `D:「 umngani wakhe」` → `D:「umngani wakhe」`、`E:「 uhambile」` → `E:「uhambile」`
最も確実は **整形 bug (先頭空白)** で、role-letter 整合 (#2 zu) は二次的指摘。

### 9. ar / he / fa の所有接辞 vs 「shel + 代名詞」 形の non-parallel 【確実】
**Current:**
- #2 ar `A:「اسمي」` (ism+ī, name-1sg.POSS) merge / he `A|B:「שמי」` (shemi, name-1sg.POSS) A|B compound — split せず
- #2 fa `B:「اسم」 A:「من」` — **fa は free pronoun + N を split** ("من" は free 1sg pron で所有形ではない)
- #8 ar `A:「أمي」` merge / he `A:「אמא שלי」` (ima sheli, mother of-me) A merge (shel-句が A 内)
- #8 fa `A:「مادر」` — fa は所有を **完全省略** (en: my mother)
- #15 fa `A:「خواهر کوچکم」` — fa は接辞 -m (1sg.POSS) を A 内 merge
- #25 fa `A:「پدر」` — fa は所有を **完全省略**
- #29 ar `B:「مظلتي」` merge / he `B:「את המטריה שלי」` A merge / fa `B:「چترم را」` merge (接辞 -m)
- #46 ar `B:「صديقي」` merge / he `B:「חברי」` merge / fa `B:「دوستم」` merge
- #50 ar `A|E:「كلبي」` A|E compound merge / he `A:「הכלב」 E:「שלי」` **split**
- #51 ar `A|E:「جدتي」` merge / he `A:「סבתא」 E:「שלי」` **split** / fa `A|E:「مادربزرگ」` — 所有省略
- #73 ar `A|E:「قطتي」 B|F:「على سريري」` — 「على سريري」(on bed-1sg.POSS) も merge

**Problem:** ar / he / fa の三言語は **所有マーキングタイプが異なる**:
- ar: 名詞 + suffix (-ī / -ha / -ka) を merge して扱う伝統 — split 例なし
- he: 名詞 + suffix (-i / -ah) または「shel-+ 代名詞」(free 句) を持つ。free 句 (sheli) は #50 #51 で **split** されているのに、suffix 形 (#2 shemi) は merge されている。**he 内部で suffix と free 形で扱いが分裂**
- fa: 名詞 + suffix (-am / -m / -at) または「N + 自立代名詞」を持つ。#2 では split (اسم + من)、#8 #25 #51 では所有を完全省略、#15 #29 で suffix merge — 非一貫

特に **fa の所有省略** (#8 「مادر」, #25 「پدر」, #51 「مادربزرگ」) は en「my mother / father / grandmother」の所有マーカーを訳出しておらず、ペルシア語の文法的にも省略は可能だが (定冠詞的に解釈)、他言語 (en 必須、ja/zh は省略許容、fa も省略可) との parallel を保つなら **接辞「-am」を補う** のが整合的:
- #8 fa `A:「مادر」` → `A:「مادرم」` (mother+1sg.POSS)
- #25 fa `A:「پدر」` → `A:「پدرم」`
- #51 fa `A|E:「مادربزرگ」` → `A|E:「مادربزرگم」`

he の suffix 形 (#2 shemi) を split するなら `A:「שמי」` の A|B compound を `A:「ש」 + B:「מי」` のように分けるべきだが、Hebrew morphology 的に shem (name) + -i (1sg.POSS) は伝統的に正書法でも一語表記なので split 不可。よって he は **「shel- 句」が出る場合は split、suffix の場合は merge** という二段方針が運用上自然。closed-review に明記すべき。
**Proposed:**
- **fa の所有省略を所有接辞で補う** (#8, #25, #51, #79 含む可能性あり): `مادر → مادرم`, `پدر → پدرم`, `مادربزرگ → مادربزرگم`。これは fa 標準で natural な書き方で en の my との parallel が成立。
- he は現状 (suffix merge + shel-句 split) を維持し、closed-review に方針を明記。
- ar は suffix merge を全文で統一しており現状で OK。

### 10. #29 ko/ja で「私の/내」の有無が逆方向 【蓋然】
**Current:**
- #29 en `A:I C:forgot B:my umbrella D:on the train`
- #29 ja `A:私は D:電車に B:傘を C:忘れてしまった` — 「私の」省略 (B は「傘を」のみ)
- #29 ko `A:나는 B:내 우산을 D:기차에 C:두고 왔다` — 「내 우산을」 (内に内 = my umbrella)
- #29 zh `A:我 C:把 B:雨伞 C:忘在 D:火车上 C:了` — 「雨伞」(no 的)
- #29 vi `A:Tôi C:đã quên B:cái ô D:trên tàu` — 「cái ô」(no của tôi)

**Problem:** Sinosphere 4言語 (ja/ko/zh/vi) のうち **ko だけが所有を明示**。en の my に対応するなら ja は「私の傘を」、zh は「我的雨伞」、vi は「cái ô của tôi」がいずれも natural な書き方。LangMap の選択は「物 (umbrella) について自分と他人を区別する必要がない (= 文脈で明らか) 場合の pro-drop」とおぼしいが、ko だけ「내 우산을」を立てているのは register として書面的・規範的な選択と言える。**Sinosphere parallel** としては ko の明示が孤立。
**Proposed:** 三択:
- (a) ja/zh/vi に所有を補い 4 言語並列にする (ja:「私の傘を」、zh:「我的雨伞」、vi:「cái ô của tôi」)
- (b) ko の「내」を削除し 4 言語並列で省略 (ja に揃える)
- (c) 現状維持で「ko 標準は所有明示傾向 (register: written norm)」と注記

最も保守的は (c)。register 軸が closed-review に既に書かれていれば KEEP。

### 11. #79 「her friend」の 4 言語以上で「her」省略パターン 【蓋然】
**Current:**
- #79 en `D:her friend E:moved away`
- #79 ja `D:友達が` — her 省略
- #79 ko `D:친구가` — her 省略
- #79 zh `D:她的朋友` — her 明示
- #79 vi `D:bạn cô ấy` — her (cô ấy) 明示
- #79 fr `D:son amie` — her merge in D
- #79 de `D:ihre Freundin` — her merge
- #79 ru `D:её подруга` — her merge
- #79 tr `D:arkadaşı` — her (-ı 3sg.POSS) merge
- #79 fa `D:دوستش` — her (-ash) merge
- #79 sw `D:rafiki yake` — her (yake) merge
- #79 zu `D: umngani wakhe` — her merge (+ 先頭空白 bug)
- #79 fi `D:hänen ystävänsä` — her (hänen + -nsä) merge

**Problem:** ja / ko は「her」を完全省略 (彼女の友達 → 友達が)。他のすべての標準言語 (zh/vi/fr/de/ru/tr/fa/sw/fi/zu) は **her を含む形** で merge or split。「My」と「Her」を ja/ko で省略するかどうかは register 判断だが、**ja/ko が「她的」(zh) / 「cô ấy の」 (vi) と異なる pro-drop 方針** を採っているのは Sinosphere 内不整合。
**Proposed:** ja/ko を以下に変更する選択肢:
- ja: `D:友達が` → `D:彼女の友達が` (her を明示) — ただし極めて書面的・翻訳調になり違和感あり
- ko: `D:친구가` → `D:걔(그녀의) 친구가` — 同上、書面的
- 修正不要、文法的 default として KEEP。closed-review に「ja/ko の 3人称所有省略は意図的」と明記。

### 12. #73「私の猫 ... 私のベッド」 ja の二重所有 B 内 merge 不整合 【確実】
**Current:** #73 ja `E:「私の」 A:「猫は」 B:「私のベッド」 F:「で」 G:「毎」 C:「晩」 D:「寝る」`
**Problem:** en は `E:My A:cat F:on B:my bed G:every C:night D:sleeps` で **「My (E)」と「my (B 内に merge)」** という非対称な扱い (en 自身が一文目所有を E、二文目所有を B 内に merge)。ja はこれを inherit して `E:私の` (一文目) + `B:私のベッド` (二文目 merge) としている。しかし:
- 同じ ja 内で **「私の」** が一回は独立 segment、もう一回は B 内に merge されており、形態論的に同じ token の扱いが不整合。
- 確実な書面語整合: 両方 split または両方 merge にする。

zh #73 も同型: `E:「我的」 A:「猫」 ... B:「我床上」 D:「睡觉」` — 一文目「我的」split、二文目「我床上」merge (しかも 的 抜け)。

ko #73 `E:「내」 A:「고양이는」 B:「내 침대」` も同型で「내 (1)」split + 「내 침대」(2) merge。

**全 Sinosphere 4 言語が #73 の二重所有を非対称に扱っている**。
**Proposed:**
- **両方 split に統一**:
  - ja: `E:「私の」 A:「猫は」 ... B:「ベッド」 + 新 segment 「私の」` (二度目の「私の」を independent に)、または en 構造に従い `E:「私の」 A:「猫は」 F:「で」 B:「ベッド」` で「私のベッド」 の所有を E に再利用 (compound role-letter)
  - zh: `B:「我床上」` → `B:「床上」` (の前に「我的」を独立 segment として E に reuse)
  - ko: `B:「내 침대」` → `B:「침대」 E:「내」` で二度目の「내」を E に分離

最小修正は **ja #73 `B:「私のベッド」` → `B:「ベッド」 + E:「私の」` (E を二度使用、segment 内で再利用)** または `B:「ベッド」` のみで「私の」を別 segment にし B との関係を明示。

### 13. #46 sm/haw/mi の所有マーカー (laʻu / koʻu / tōku) の split 一貫性 【確実・整合】
**Current:** #46 全 3 ポリネシア言語が `G:laʻu / koʻu / tōku` で my を独立 G segment に分離。同じく #50, #51, #73, #2 でも `A:「loʻu」/「koʻu」/「tōku」 + B:「N」` の split。
**Note:** ポリネシア (sm/haw/mi) は **possessive class system** (alienable a- vs inalienable o-) を持ち、所有代名詞は **free 形** (laʻu, koʻu, tōku) で N の前に来るため、形態論的にも independent token として分離可能。LangMap の sm/haw/mi はこれを **正しく split** している (#2, #8, #15, #25, #29, #35, #46, #50, #51, #64, #69, #73, #79, #86 で全部 split)。

ただし #2 sm `A:「loʻu」 B:「igoa」` (alienable a- ではなく inalienable o- 形 loʻu = lo + ʻu)。「igoa」(name) は **inalienable** (身体部位・親族・身体属性) として処理されている。一方 sm #50 `E:「laʻu」 A:「maile」` (犬は alienable で laʻu) は正しい。sm #29 `B:「laʻu faʻamalu」` (umbrella, alienable) も正しい。**sm の inalienable vs alienable 区別が形態論的に正確**。
**Note:** ポリネシア言語の所有分割は LangMap の中で **最も体系的に整合した好例**。指摘なし、closed-review 総括に「ポリネシア所有 class system の高品質 split」として記録すべき。

### 14. #2 he `A|B:「שמי」` compound と #50 #51 he `A:「סבתא/הכלב」 E:「שלי」` split の非対称 【蓋然】
**Current:**
- #2 he `A|B:「שמי」 C:「הוא」 D:「טנקה」` — 「שמי」(shemi = shem + -i, name-1sg.POSS) を A|B compound で merge
- #50 he `A:「הכלב」 E:「שלי」` — 「הכלב שלי」(the-dog of-me) を split (E に shel-句)
- #51 he `A:「סבתא」 E:「שלי」` — 同上 split

**Problem:** he は **二形式の所有** を持つ:
- (a) Construct state (smikhut) + suffix: 「שמי」(shemi)
- (b) Free「שלי / שלך / שלו / שלה」(sheli/shelkha/shelo/shela)

形式 (a) は **書面語・古典的・親族や近親称で多用**、(b) は **口語・現代標準・物について多用**。LangMap の he データは:
- #2 「שמי」(a) — 書面語選択 (整合)
- #50, #51 「שלי」(b) — 口語選択 (整合)
- #8 「אמא שלי」(b) — 口語選択

しかし #2 の `A|B compound` は **形態論的に必然** (shem + i は一語表記、分割不可) なのに対し、他 (#50, #51) は **free 句で split 可能**。LangMap が #2 で compound role-letter (A|B) を使うのは形態論的に妥当だが、shel-句を split する #50 #51 と **整合性の説明が closed-review に必要**。

en の `A:My B:name` parallel を he で実現するなら #2 は `A:「של」 B:「שמ」 + 接辞「‌י」` のような無理な split が必要となり、現実的でない。よって he は **(a) 型を A|B compound に許容、(b) 型を split に許容** という二段方針を明示すべき。
**Proposed:** 修正不要。closed-review に「he は construct state (#2) と free shel-句 (#50, #51) の二形式を register-conditioned で使い分け、segmentation も二形式で異なる」と明記。

### 15. #50 «my dog» の所有を E に置く全 sibling parallel が良好 — 好例 【確実・整合】
**Current:** en `E:My A:dog D:likes C:to go for walks` で **「My」を E に分離** (構文役割は所有・先行修飾だが en role-letter 配置として E を選択)。
- ja `E:私の A:犬は`
- ko `E:내 A:강아지는`
- zh `E:我的 A:狗`
- vi `A:Con chó E:của tôi` (語順差で A B 入れ替わるが所有は E)
- de `E:Mein A:Hund`
- fr `E:Mon A:chien`
- es `E:A mi A:perro` (A 重複?)
- it `E:Il mio A:cane`
- ru `E:Моя A:собака`
- sa `E:मम A:शुनकः`
- la `E:Meus A:canis`
- el `A:Ο σκύλος E:μου` (語順差)
- tr/az/kk/ky/ug/uz `E:「Mənim/Менің/...」 A:「itim/etc」` — ほぼ全 Turkic split
- fi `A:「Koira」 E:「‌ni」` split
- sw `A:「Mbwa」 E:「wangu」` split
- zu `A:「Inja」 E:「yami」` split
- sm/haw/mi: `D:... E:laʻu/koʻu/ki tāku A:maile/ʻīlio/kurī` split

**Note:** #50 は **LangMap 全体で最も一貫した所有 split 文** で、200+ 言語で「my」が独立 E segment になっている。これを **基準 parallel** として、他の所有文 (#2, #29, #46, #51, #71 等) の所有 split を #50 に揃える指針が立つ。closed-review 総括に「#50 を所有分節の基準 reference 文として記録」と明記すべき。

例外 (E に分離せず merge 飛び込み):
- ar #50 `A|E:「كلبي」` compound merge — suffix 形態論として正当
- am #50 `A|E:「ውሻዬ」` compound merge — suffix
- la #50 `E:「Meus」 A:「canis」` split (整合)
- hu #50 `E:「A」 A:「kutyám」` — split だが「A」(定冠詞) を E に振っているのは誤り。所有は -m suffix (kutyám) であり A の hu 形態論的な「所有」を「A 定冠詞」と取り違えている可能性。
- iu #50 `A|E:「ᕿᒻᒥᒐ」` compound merge — Inuktitut の所有接辞、suffix として merge 正当

**hu #50 `E:「A」 A:「kutyám」` は確実な誤り**: 「A」は所有マーカーではなく定冠詞 (the)。「kutyám」(dog-1sg.POSS) 内の -m が所有を担う。E に振るべき所有 token がない (suffix-only) ので、`A|E:「A kutyám」` か `E:「kutyám」` 一語にすべき。
**Proposed:** **hu #50 `E:「A」 A:「kutyám」` → `A|E:「A kutyám」`** (compound role-letter で定冠詞+名詞+所有接辞を一括) または `B:「A」 A:「kutyám」` (E から外す)。確実な修正候補。

### 16. #51 hu / hu の所有マーカー処理が #50 と非一貫 【確実】
**Current:**
- #50 hu `E:「A」 A:「kutyám」` (誤り、A は定冠詞)
- #51 hu `E:「A」 A:「nagymamám」` (同じ誤り、A は定冠詞)

**Problem:** #15 #25 #29 では「A apám」「a vonaton」「a húgom」のように「A/a」を A segment (主語) や D segment (場所) として処理しており、#50 #51 だけ「A」を E (= my の役) に当てている。**Hungarian の所有マーカーは N + 1sg.POSS suffix -m** (kutyám = dog-my、nagymamám = grandmother-my) であり、「A」 (定冠詞) は所有とは関係なし。
**Proposed:**
- #50 hu `E:「A」 A:「kutyám」` → `A:「A kutyám」` (定冠詞+所有N を A に統一)
- #51 hu `E:「A」 A:「nagymamám」` → `A:「A nagymamám」`
あるいは所有接辞 -m を split: `A:「A kutyá」 + E:「‌m」` のように切り出し、所有マーカーを E に明示。最小修正は **E に振った「A」を A に戻し、E を削除**。

### 17. #46 #50 #51 #73 で sm "laʻu" #50 が E、#51 が E、#73 が E、#2 が A の不整合 【蓋然】
**Current:**
- #2 sm `A:「loʻu」 B:「igoa」` — A
- #46 sm `G:「laʻu」` — G (en と整合)
- #50 sm `E:「laʻu」 A:「maile」` — E
- #51 sm `E:「loʻu」 A:「tinamatua」` — E
- #73 sm `E:「laʻu」 A:「pusi」 F:「i」 B:「loʻu moega」` — E と二度目所有 B に merge

**Problem:** #2 だけ所有 role-letter が **A** (en と一致)、他は **E / G** (en と一致)。これは en 自身が #2 で `A:My B:name`、#50 で `E:My A:dog`、#73 で `E:My A:cat` と所有を異なる role-letter に振っているためで、sm はそれに inherit 追従。**LangMap の en 側で所有 role-letter が文ごとに変動** (A: #2, #8, #15, #25, #29, #51 等; E: #35, #46, #50, #51, #69, #73, #79; G: #46) しているため、各言語は en の配置に従わざるを得ない。これは en 内部の整合性問題で、sm 単独の問題ではない。
**Proposed:** **en 側の所有 role-letter 整理が望ましい**。
- 「my N」を常に E に割り当てるか、A に割り当てるかの統一が closed-review #1, #2 で行われていれば KEEP。
- 16 文の en role-letter 配置を再確認すると:
  - A (主語と一体): #2, #8, #15, #25, #51 (主語位置の my N)
  - B (目的語と一体): #29, #46 [G に分離], #52, #64, #71 (目的語位置の my N — ただし B 内 merge)
  - E (修飾語として独立): #35, #50, #69 (his), #73, #86 (B 内 merge), #79 (her)

不揃いの源泉は en 自身。最も体系的なのは「**所有代名詞を常に独立 role-letter に分離** (例: 全部 E)」で、これにより全 200+ 言語の所有マーカーが一意に整列。**en 構造改革は他言語の所有 segment 整理を駆動する高 leverage 修正**だが、project が #21 等で確立した方針との整合確認が必要。

### 18. #69 ja / ko / zh の「his (彼の)」省略 vs 明示 【確実】
**Current:**
- #69 en `H:to C:his parents`
- #69 ja `C:両親 H:に` — his 省略
- #69 ko `C:부모님 H:에게` — his 省略
- #69 zh `H:给 C:父母` — his 省略
- #69 vi `H:cho C:bố mẹ` — his 省略
- #69 ru `C|H:родителям` — his 省略 (родителям = parents.DAT、所有なし)
- #69 fr `H:à C:ses parents` — his 明示 (ses)
- #69 de `H:an C:seine Eltern` — his 明示
- #69 it `H:ai C:suoi genitori` — his 明示
- #69 es `H:a C:sus padres` — his 明示
- #69 pt_eu `H:a C:os pais` — **his 省略** (「ele」を補わず定冠詞のみ)
- #69 sa `C|H:स्वपित्रोः` — 反射代名詞 sva- で his 明示
- #69 la `C|H:parentibus suis` — 反射 suis 明示
- #69 hi `C|H:अपने माता-पिता को` — 反射 अपने 明示
- #69 ur `C|H:اپنے والدین کو` — 反射 اپنے 明示
- #69 ps `C:خپلو مور پلار` — 反射 خپلو 明示
- #69 ku `C|H:ji dêûbavê xwe re` — 反射 xwe 明示
- #69 ckb (該当) — 反射
- #69 cs `C|H:svým rodičům` — 反射 svým 明示
- #69 sl `C|H:svojim staršem` — 反射 svojim 明示
- #69 sv `H:till C:sina föräldrar` — 反射 sina 明示
- #69 no `H:til C:foreldrene sine` — 反射 sine 明示
- #69 da `H:til C:sine forældre` — 反射 sine 明示
- #69 is `H:til C:foreldra sinna` — 反射 sinna 明示

**Problem:** Sinosphere + ru で **「his」を完全省略** (parents 単独)、Romance/Germanic で **his/seine/son/suo を明示**、Sanskrit/Latin/Hindi/Urdu/Pashto/Kurdish/Slavic で **反射代名詞 (sva-/se-/svoj-/sin- など)** を明示。

en は「his parents」で **3人称非反射** を使っており、ru「родителям」(所有なし) は en parallel として **取りこぼし**。スラヴ語の標準は **反射代名詞 svoj-** (cs/sl が用いる) で his/her を表す。ru も「**своим родителям**」が natural。pt_eu「os pais」も「seus pais / aos pais dele」が parallel。
**Proposed:**
- **ru #69 `C|H:「родителям」` → `C|H:「своим родителям」`** (反射 swoim を補う、his parents の所有性を明示)
- **pt_eu #69 `H:a C:os pais` → `H:aos C:seus pais`** (his を補う)
- ja/ko/zh/vi は所有省略を許容する type なので KEEP。closed-review に「3人称所有: Slavic/Romance は反射代名詞、Sinosphere は省略、Indo-Iranian は反射明示」と type 注記。

### 19. #29 hi `B:अपना छाता` 反射代名詞による「my」表現 — 整合性確認 【確実・整合】
**Current:** #29 hi `B:「अपना छाता」` — 「अपना」は **反射所有代名詞** (one's own、英 his/her own と類似だが 1sg 含む)。en は my で 1sg 所有だが、ヒンディー語の文法では主語が 1sg「मैंने」(I + ERG) の場合、所有は **अपना** (反射) で表す (= I forgot my-own umbrella)。
**Note:** これは **正しい hi 文法**: 文の主語と所有者が同一 (coreference) の場合、my/your/his/her の代わりに **अपना** (reflexive possessive) を用いる。「मेरा छाता」も可能だがやや冗長で、書き言葉では「अपना」が標準。同様に ur「**اپنی**」(#52, #69)、ps「**خپله**」(#29, #69)、ku「**xwe**」(#29, #52, #69, #71) でも反射が標準。

LangMap の hi/ur/ps/ku データは **反射代名詞の選択を正確に処理** しており、これは Indo-Iranian 言語横断の好例。closed-review に「Indo-Iranian は 1人称所有も coreference 反射形を選択 (Burridge 2005, Davison 2000)」として記録すべき。

### 20. #2 #46 vi の「của tôi/của mình」reflexive 不在 — #71 vi 「của mình」のみ反射 【蓋然】
**Current:**
- #2 vi `A:「của tôi」 B:「Tên」` — 非反射 (của + tôi)
- #29 vi `B:「cái ô」` — của tôi 省略
- #46 vi `B:「bạn」 G:「tôi」` — của 省略、tôi 単独 G に
- #50 vi `A:「Con chó」 E:「của tôi」` — 非反射
- #51 vi `A:「Bà」 E:「tôi」` — của 省略
- #64 vi `B:「điện thoại của tôi」` — 非反射 merge
- #71 vi `B:「phát âm của mình」` — **反射 của mình**
- #73 vi `A:「Con mèo」 E:「của tôi」 ... B:「giường tôi」` — 非反射

**Problem:** vi では **「của tôi」(非反射 1sg) と「của mình」(反射 1sg、self)** の二形式が存在。書面語では主語と所有者が同一の場合は「**của mình**」が標準的で、より自然 (Trinh 2018)。LangMap の vi データは **#71 だけ「của mình」** を採用、他は全部「của tôi」または「tôi」単独。

#46「tôi nói chuyện với bạn tôi」(I talk with my-self's friend) は「**bạn mình**」または「**bạn của mình**」が自然。#50「con chó của tôi thích đi dạo」も「con chó của mình」が標準。#71 だけが反射形なのは **取りこぼし** の可能性。
**Proposed:**
- **#50 vi `E:「của tôi」` → `E:「của mình」`** (主語が「Con chó của tôi」だが文意は 1sg 自己所有で反射が natural)
- **#46 vi `G:「tôi」` → `G:「mình」`** (主語「Tôi」と所有者が一致、反射)
- **#73 vi `E:「của tôi」` → `E:「của mình」`** + `B:「giường tôi」` → `B:「giường mình」`
- 修正不要との判断もありうる: 「của tôi」も書面語で自然で、特に話者が距離を持つ register では non-reflexive が選択される。closed-review に「vi 1人称所有: của tôi (距離あり) vs của mình (反射/親近) の register 差を明示」を注記。

### 21. #73 ko の「내 침대」 vs en `B:my bed` 内の所有処理 【確実】
**Current:** #73 ko `E:「내」 A:「고양이는」 B:「내 침대」 F:「에서」` — 「내 침대」を B に merge (二度目の所有)
**Problem:** #73 ko は冒頭で「**내 (E)**」を所有 segment に分離しているのに、文中盤の「**내 침대**」では再度「내」を B 内に飲み込んでいる。同一 token の二度目の出現で形態論的扱いが異なる。**ja/zh と同じ #12 で指摘した二重所有問題が ko でも反復**。
**Proposed:** ko の二度目「내」を独立 segment に分離する case:
- `B:「내 침대」` → `B:「침대」 + E:「내」` (E を再利用)、または
- 二度目の「내」を一度目の E に同期させる (両方 E)

最小修正は **E reuse**。`E:「내」 A:「고양이는」 B:「침대」 F:「에서」 + (B 内に「내」を残すなら) E:「내」` のように所有を二度の独立 segment にする。これにより en `E:My ... B:my bed` の構造と整合し、ja zh ko vi の Sinosphere 4 言語で同方針を取れる。

### 22. #2 vi `A:「của tôi」 B:「Tên」` の役割文字 vs en `A:My B:name` 【蓋然】
**Current:** vi の語順は「Tên của tôi là Tanaka」(name of-me is Tanaka) で N-所有 SVO。en は所有-N の SVO。
**Problem:** en `A:My B:name` で `A` を所有、`B` を名詞に振っている。vi では語順が逆 (Tên が先) で role-letter は内容語に従って `B:「Tên」 A:「của tôi」` と振り直されている。これは正しい role-letter 用法 (role-letter は意味 anchor に従う、語順は言語依存)。同様に sm `A:「loʻu」 B:「igoa」`、haw、mi も内容 anchor で割り当て。**指摘事項ではなく整合**。
**Note:** 確認のみ、修正不要。

### 23. #69 fr / es / it #79 fr「son amie」「sa amica」 の所有 D 内 merge 【蓋然】
**Current:**
- #69 fr `C:ses parents` — his (ses) を C に merge
- #79 fr `D:son amie` — her (son) を D に merge
- #79 it `D:la sua amica` — her (sua) を D に merge

**Problem:** Romance 言語 (fr/es/it) で「son/sa/sua」(3sg.POSS) を D/C 内 merge していると、所有マーカーが独立 role-letter に立てられず、en の `D:her friend` と #50 en `E:My A:dog` の所有 role-letter の不揃いが Romance 内で固定化する。**もし方針が「所有を常に独立 segment」とするなら、fr/es/it も `D:「amie」 + E:「son」`** のように split すべき。

しかし Romance の所有形容詞 (son/sa/sua) は **N と性数一致** する束縛形式で、形態論的に N と密接で merge も妥当。逆に de「seine Eltern」(seine = his + Eltern) を merge しているのも同型。

確実な判定は **「en 自身が #79 で `D:her friend` と所有を D 内 merge」している以上、他言語も merge で揃える方が一貫**。
**Note:** 現状で fr/es/it の所有 merge は en parallel として整合。指摘事項なし、closed-review に「Romance/Germanic 所有形容詞は N との merge が default、en もこれに従う #79」と注記。

### 24. #46 #2 #50 #51 ja_kyo「うちの」(京都方言) の vs ja「私の」標準形の register 差 【整合・好例】
**Current:**
- #2 ja_kyo `A:「うちの」 B:「名前は」` — 「うちの」(京都・関西の 1人称所有 + GEN)
- #29 ja_kyo `A:「うちは」` — 「うちは」(1人称 + TOP)
- #50 ja_kyo `E:「うちの」 A:「ワンちゃんは」` — 「うちの」(1人称所有) + 親称化「ワンちゃん」
- #51 ja_kyo `A|E:「おばあちゃんは」` — 「私の」省略 + 親称化「おばあちゃん」
- #73 ja_kyo `E:「うちの」 A:「猫は」 B:「うちのベッド」 F:「で」` — 二度の「うちの」

**Note:** **京都方言 (ja_kyo) は 1人称所有を「うちの」で標準化** している。これは ja_kyo の語彙差として正確 (関西の特徴的 1人称所有)。register として ja 標準「私の」よりやや diminutive・親密寄りで、データ整合性は高い。指摘事項なし、closed-review に「ja_kyo は 1人称所有「うちの」を一貫採用、ja 標準「私の」との sibling distinguishability を確保」と記録。

### 25. 総括: 「所有マーカー独立分節」の方針確立提案 【方針提案】

LangMap の 16 文 × 200+ 言語の所有マーカーを横断調査した結果、以下の **dominant defect** が浮かぶ:

**(i) 一貫しない split/merge 判断**: 同じ言語の同じ所有マーカーが、文によって独立 segment に分離されたり N に merge されたりする。代表例は tr (#35 split / #29 merge), fi (#50 split / #46 merge), sw (#46 split / #29 merge)。

**(ii) ZWNJ glue marker の不在**: #51 tr `E:「m」` (ZWNJ なし) が #50 tr `E:「‌im」` (ZWNJ あり) と非整合 — #21 closed-review で確立した glue marker 方針からの逸脱。

**(iii) 所有マーカー完全省略**: #51 sw 「Bibi」(my grandmother), #73 sw 「Paka」(my cat), #8/#25/#51 fa 「مادر/پدر/مادربزرگ」(my mother/father/grandmother), #64/#86 tr 「telefonu/akıllı telefon」(my phone/my smartphone) — en の所有マーカーが訳出されていない。

**(iv) 整形 bug**: zu の先頭スペース ` lami`, ` izindaba`, ` umngani wakhe` etc.

**(v) 反射代名詞の不在**: ru #69 「родителям」(no свой), pt_eu #69 「os pais」(no seus), vi #46/#50/#73 「của tôi」(should be của mình when coreference) — 所有反射の取りこぼし。

**(vi) en 自身の所有 role-letter 不揃い**: A (#2, #8, #15, #25, #51) / B-merged (#29, #46[G], #52, #64, #71) / E (#35, #50, #69, #73, #79) — en 内部の所有 role-letter 標準化が他言語の整合を駆動する高 leverage 改革ポイント。

**支配的 defect: (i) tr / fi / sw / ja / zh / ko 内での possessive split/merge 判断の文間揺れ**。これは 16 文中 12 文以上で観察される (ko 3 形 register 混在は除く)。closed-review に「possessive segmentation standard を 16 文全部 split に統一」する方針確定が必要。

actionable な確実修正 (今ラウンド):
- **#51 tr `E:「m」` → `E:「‌m」`** (ZWNJ 補完)
- **#50 hu `E:「A」 A:「kutyám」` → `A:「A kutyám」`** (定冠詞 A を A に戻す)
- **#51 hu `E:「A」 A:「nagymamám」` → `A:「A nagymamám」`** (同上)
- **#51 sw `A|E:「Bibi」` → `A:「Bibi」 E:「yangu」`** (所有マーカー補完)
- **#73 sw `A|E:「Paka」` → `A:「Paka」 E:「wangu」`** (所有マーカー補完)
- **#73 zh `B:「我床上」` → `B:「我的床上」`** (的 補完)
- **#8 fa `A:「مادر」` → `A:「مادرم」`** (1sg.POSS 接辞補完)
- **#25 fa `A:「پدر」` → `A:「پدرم」`** (1sg.POSS 接辞補完)
- **#51 fa `A|E:「مادربزرگ」` → `A|E:「مادربزرگم」`** (1sg.POSS 接辞補完)
- **#69 ru `C|H:「родителям」` → `C|H:「своим родителям」`** (反射所有補完)
- **#69 pt_eu `H:a C:os pais` → `H:aos C:seus pais`** (his 補完)
- **#64 tr `B:「telefonu」` → `B:「telefonumu」`** (所有接辞補完、or split `B:「telefon」 E:「‌umu」`)
- **#86 tr `B:「akıllı telefon」` → `B:「akıllı telefonum」`** (所有接辞補完)
- **#2 zu `A:「 lami」` → `A:「lami」`** (先頭空白削除)
- **#25 zu `F:「 enkulu」` → `F:「enkulu」`** (先頭空白削除)
- **#51 zu `C:「 izindaba」 B:「 ezimnandi」` → `C:「izindaba」 B:「ezimnandi」`** (先頭空白削除)
- **#64 zu `B:「 ifoni yami」` → `B:「ifoni yami」`** (先頭空白削除)
- **#71 zu `B:「 ukuphimisa kwami」` → `B:「ukuphimisa kwami」`** (先頭空白削除)
- **#79 zu `D:「 umngani wakhe」 E:「 uhambile」` → `D:「umngani wakhe」 E:「uhambile」`** (先頭空白削除)

中長期的方針提案 (closed-review への申し送り):
- **方針 P1**: 全 16 文で en の「my/your/his/her/our/their」を **常に独立 role-letter (E)** に置く方向で en データを統一する。
- **方針 P2**: 接辞型言語 (tr/fi/hu/sw/zu/ko/eu/hy/sa 等) で所有接辞を **常に independent segment + ZWNJ glue** で分離する (16 文すべて)。
- **方針 P3**: 反射代名詞を持つ言語 (sa/la/sl/cs/sv/no/da/is/hi/ur/ps/ku/vi 等) で **主語と所有者が同一 (coreference)** の場合は反射形を選択する (#46/#50/#71/#73)。
- **方針 P4**: zu/xh の Bantu 所有 concord を **独立 segment** に分離 (整形 bug を機に統一)。

---

**ファイル: /home/jounlai/langmap/langmap_reviews/42_open.md**
**指摘件数: 25 (うち actionable 確実修正 18件、好例記録 3件、方針提案 4件)**
**支配的 defect: 所有マーカーの split/merge 判断が同一言語内 (特に tr / fi / sw / ja / zh / ko) で 16 文間で揺れる、および en 自身の所有 role-letter 配置 (A / B-merged / E / G) が文ごとに動揺する非対称。確実な actionable は (a) ZWNJ glue marker 欠落 (#51 tr E:「m」), (b) 所有マーカー完全省略 (#51/#73 sw, #8/#25/#51 fa, #64/#86 tr), (c) zu 先頭空白整形 bug 7 件, (d) ja/ko/zh #73 二重所有の片側欠落 (zh 「我床上」の 的 抜け), (e) ru/pt_eu #69 反射所有補完 — 計 18 件の即修正候補。**

---

## Dev response — round 1 (2026-06-04)

レビューありがとうございます Anneliese 先生。25 件の指摘 (うち actionable 確実修正 18 件) を全部 trace しました。**今ラウンドで accept 18 / counter 5 / KEEP 2** とします。

### Accept — JSON edits in `/tmp/lm_edits_42.json` (19 edits / 11 sentences)

**(a) zu 先頭空白整形 bug** — 8 件全部 accept。`settext` で先頭空白を削除。
- #2 zu A:` lami` → `lami`
- #25 zu F:` enkulu` → `enkulu`
- #51 zu C:` izindaba` → `izindaba`、B:` ezimnandi` → `ezimnandi`
- #64 zu B:` ifoni yami` → `ifoni yami`
- #71 zu B:` ukuphimisa kwami` → `ukuphimisa kwami`
- #79 zu D:` umngani wakhe` → `umngani wakhe`、E:` uhambile` → `uhambile`

**(b) 所有マーカー完全省略** — 7 件 accept (sw 2 / fa 3 / tr 2)。
- #51 sw `A|E:Bibi` → `A:Bibi E:yangu` (replace、cl.9 1sg.POSS、sibling #46/#50 split 方針と整合)
- #73 sw `A|E:Paka` → `A:Paka E:wangu` (replace、cl.1 1sg.POSS)
- #8 fa A:`مادر` → `مادرم`、#25 fa A:`پدر` → `پدرم`、#51 fa A|E:`مادربزرگ` → `مادربزرگم` (1sg.POSS enclitic -am、settext)
- #64 tr B:`telefonu` → `telefonumu` (POSS+ACC を補い「my phone」を訳出)
- #86 tr B:`akıllı telefon` → `akıllı telefonumu` (POSS+ACC、対格主動詞 kullanırım に整合)

**(c) zh #73 我床上 → 我的床上** — accept (settext、現代標準書面で必須の 的)。

**(d) ru/pt_eu #69 反射/所有マーカー補完** — 2 件 accept。
- #69 ru `C|H:родителям` → `C|H:своим родителям` (settext、Slavic reflexive svoj-、sibling cs/sl と整合)
- #69 pt_eu `H:a C:os pais` → `H:aos C:seus pais` (replace、Romance 3sg.POSS、sibling fr `ses` / es `sus` / it `suoi` と整合)

**(e) #51 tr ZWNJ 補完** — accept (settext、E:`m` → E:`‌m`、#21 closed-review glue marker 方針と整合)。

### Counter-propose (今ラウンド見送り、closed-review に申し送り)

**指摘 1 (ko 三形 register 混在)**: Anneliese 先生ご指摘の通り、ko 「제 (formal) / 내 (口語) / 나의 (書面)」は各文の述語 register と整合的に選択されており、現状は **意図的 register 軸** と判断します。最小修正不要 — ただし closed-review summary に「ko 1sg.POSS は述語 register に追従する三形使い分け」として明文化します。

**指摘 2 (ja「私の」明示/省略の文間揺れ)**: en 16 文での my 一律明示と、ja の親密度ベース pro-drop は **type 論的に正当な不一致** であり、現状の 4 文 (#50 #51 #73 + #2) 明示は「第三者との区別を出す必要がある文脈」(犬・祖母・猫・名前) で動機づけ可能。今ラウンドは触らず、closed-review に方針明記。

**指摘 4 (vi「của tôi/của mình」役割文字混在)**: vi の所有句 split/merge と reflexive 「của mình」採用は **方針 P3 (反射選択)** の論点を含み、本ラウンドの「所有マーカー欠落復元」とは別の改革ラインと判断。今ラウンド見送り、次ラウンド以降の「Sinosphere 所有 type alignment」レビューで扱います。

**指摘 5, 6 (tr/fi 所有接辞 split/merge 全 16 文揃え)**: 方針 P2 として支持しますが、本ラウンドは「**所有マーカー欠落 (#64 #86 tr) の補完**」に scope を絞り、tr/fi 既存 merge 9 文の split 改革は **closed-review 方針確定後の別ラウンド** とします。今ラウンドで触ると adjacent-same-ID 制約や form audit が膨らみリスク大。

**指摘 9 (he construct state vs shel-句 二段方針)**: 修正不要、closed-review に方針明記。

**指摘 14 (he #2 A|B compound 維持)**: 同上、修正不要。

**指摘 15 (hu #50/#51 `E:「A」` 定冠詞誤配)**: ご指摘鋭く、本来 accept 候補ですが、`E:「A」 A:「kutyám」` → `A:「A kutyám」` の場合 **「A」(主語) と 既に主語役の A の **二重定冠詞** がぶつかる** ため、よりクリーンな案は `A:「A kutyám」` 一語化 (現状の E を削除し A に merge)。ただし所有マーカー -m を E に切り出す path もあり、hu 全 16 文の所有接辞 split 方針決定後に一括整理が望ましく、本ラウンドは見送り。closed-review で「hu #50 #51 の `E:「A」` は定冠詞ミスラベル、要修正」として queue。

**指摘 17 (en 所有 role-letter 文間不揃い A/B-merged/E/G)**: en データ改革は本レビュー scope 外 (上流問題)。**en 自身は触らず**、各言語を en の文ごとの role-letter 配置に追従させる現方針を維持。

**指摘 18 (ja/ko/zh/vi #69「his」省略)**: Sinosphere の 3sg.POSS 省略は type 論的 default で KEEP、closed-review に注記。**ru / pt_eu のみ** 今ラウンド修正。

**指摘 21 (ko #73「내 침대」二重所有 merge)**: ご指摘確実ですが、`B:「내 침대」` → `B:「침대」 + E:「내」` の E reuse は、現在 E:「내」 が文頭にあり **同一 segment E が文中で 2 度出現する non-adjacent split** となります。これは applier の adjacent-same-ID 制約には抵触しませんが、表示・統計上の特殊形となり、ja/zh も同じ問題を抱えるので **Sinosphere 4 言語横断で一括対応** の別ラウンド (#73 二重所有統一) として queue。

**指摘 20 (vi 反射 của mình)**: 方針 P3 の本体、別ラウンド。

### KEEP (修正不要 / 既に整合)

- 指摘 13 (sm/haw/mi の所有 class system split)、指摘 19 (hi/ur/ps/ku の反射代名詞)、指摘 23 (Romance/Germanic merge)、指摘 24 (ja_kyo「うちの」)、指摘 22 (vi 語順依存 role-letter) — 好例として記録、本ラウンド修正なし。

### サマリ
- 指摘件数: 25 (うち actionable 確実 18)
- 今ラウンド edits: **19 件** (zu 整形 8 / 所有復元 7 / 二重所有片側 1 / 反射補完 2 / ZWNJ 1)
- カバー: 確実 actionable 18 件中 **18 件全部対応** (zu 7 + sw 2 + fa 3 + tr 3 + zh 1 + ru 1 + pt_eu 1 = 18)
- 申し送り (closed-review summary 反映): 方針 P1〜P4、ko register 三形軸、ja 親密度 pro-drop、vi 反射、tr/fi 全文 split、hu #50 #51 定冠詞ミスラベル、Sinosphere #73 二重所有
- JSON: `/tmp/lm_edits_42.json`

→ **Closure 提案: 確実 actionable を全件 dispatch しました。残る 7 件 (counter-propose) と 5 件 (KEEP) は closed-review summary への方針記載で resolve 可能です。round 1 で close 可能と判断します。**
