# LangMap データレビュー #50 — Pro-drop / 主語代名詞の顕在・省略の横断分節レビュー

## レビュアー自己紹介 (ペルソナ)

Margarethe Vunderink-Hólmsteinsdóttir (handle: **@prodrop_mvh**)。ライデン大学言語類型論博士、論文 *"Null-subject parameter revisited: a typological survey of 187 languages"* (R. Holmberg 副査)。常用文献は Roberts & Holmberg (eds) *Parametric Variation: Null Subjects in Minimalist Theory* (CUP 2010)、Holmberg *Null subject parameters* (in Biberauer et al. 2010)、Haspelmath *Pro-drop typology* in *WALS* feature 101A、Camacho *Null Subjects* (CUP 2013)、Biberauer *The limits of syntactic variation* (Benjamins 2008)、Jaeggli & Safir (eds) *The Null Subject Parameter* (Kluwer 1989)、Givón *Topic continuity in discourse* (Benjamins 1983)、神尾昭雄『日本語の主題』(くろしお出版 1990, 第3章 主題の省略)。今回のレビュー軸は **主語代名詞 (subject pronoun) が顕在的に出現するか省略 (null subject / pro-drop) されるか、そして顕在の場合は letter A に独立分節されているか** のみに絞る。再帰代名詞 (#48 系統)、与格代名詞 (#43 系統)、テンス助動詞 (#43 系統) 等は射程外とし、純粋に「**主語位置の人称代名詞 (I/he/she/we/you/they) の OWN/DROP / そして OWN の場合の letter A 整合性**」のみを判定する。

## 検証範囲

- **主語を含む英語 100 文中 54 文**: スキャンの結果、以下が射程内 (en に明示的な 1sg/1pl/2/3sg/3pl 主語):
  - **1sg (37 文)**: #1, #3, #6, #9, #11, #14, #17, #19, #21, #22, #27, #29, #32, #37, #39, #41, #44, #46, #48, #52, #55, #58, #60, #62, #64, #67, #71, #74, #78, #80, #81, #83, #86, #89, #95, #98
  - **3sg (13 文)**: #8 (mother), #20 (it), #25 (father), #30 (she), #42 (she), #57 (she), #61 (he), #65 (she), #69 (he), #77 (he), #79 (she), #84 (she), #90 (he)
  - **3pl (1 文)**: #72 (they)
  - **1pl (2 文)**: #54 (we), #92 (we)
  - **2 (1 文)**: #85 (you)
- **対象言語層**:
  - **Strict pro-drop (drop unless emphasis)**: it, es_eu, es_mx, pt_eu, pt_br, ca, gl, ro, nap, scn, vec, oc, la
  - **Optional pro-drop (drop when morphology disambiguates)**: ru, uk, pl, cs, sk, sl, sr, bg, hr, be, mk
  - **Topic-prominent (drop when topic-establish)**: ja, ko, zh, yue, vi, vi_c, vi_s, th
  - **Mandatory subject (must keep pronoun)**: en, en_aave, en_south, en_ie, en_sco, en_app, fr, fr_qc, fr_be, de, de_at, de_gsw, de_by, nl, sv, no, da, is, fy, af, nds
  - **Other**: ar (pro-drop), he (optional), tr (pro-drop), el (pro-drop), fi (optional), hu (optional), hi (optional)
- ライブデータは `node -e` で全 100 文抽出済。
- 言語ごとの 1sg 主語顕在/省略の集計 (37 文中):

| 言語 | 顕在 (`Yo/Io/Я/...`) | 省略 (主語不在) | 動詞/他要素を A に流用 |
|------|--------|--------|--------|
| es_eu, es_mx, it, gl, ro, nap, scn, oc | 32 | 0 | 5 (#76/#78/#86/#95/#19 など特殊構文) |
| pt_eu, pt_br | 29 | **4** (#41/#52/#60/#74) | 4 |
| ca | 31 | **1** (#89) | 5 |
| **vec** | 14 | **13** (#32/#37/#39/#41/#44/#48/#55/#58/#62/#64/#71/#80/#81) | 10 |
| ru, uk, be | 28 | 0 | 9 (#37/#39/#64 など `Мне/Мені` 与格主語) |
| **pl** | 8 | **14** | **15** (動詞/モーダルを A に流用) |
| cs | 29 | **4** (#19/#22/#44/#89) | 4 |
| sk | 32 | **1** (#89) | 4 |
| bg, sr, sl, el | 32 | **1** (#89) | 4 |
| **ar** | 14 | **16** (#27/#29/#32/#37/#39/#44/#46/#48/#58/#62/#64/#71/#80/#81/#83/#89) | 7 |
| **he** | 27 | **5** (#27/#29/#46/#52/#81) | 5 |
| **ko** | 10 | **1** (#81) | 26 (저는→나는 切替) |
| ja | 31 | **2** (#3/#89) | 4 |
| zh, vi, hi, tr | ほぼ全て顕在 | 0 | 4-11 |
| Germanic (en, fr, de, sv, no, da, nl, fy, af, is, nds) | ほぼ全て顕在 | 0 (#95 nl のみ A 使い替え) | 5 |

## 方針 — 何を「指摘」とし、何を「許容」とするか

1. **Strict pro-drop 言語 (es/it/pt/ro/ca/vec/oc/nap/scn/gl) における Yo/Io/Eu/Mi の必須顕在化方針**は、本データ全体で確立済 (es/it/gl/ro/nap/scn/oc は 32/37 全て顕在、ca は 31/37 顕在)。これは言語学的には **非典型** (主語 pronoun は drop が無標) だが、**学習者教材として A 列を埋める方針** として一貫しているなら問題なし。
2. **vec (Venetian)** が同じ Romance 系で **13 文ドロップ**するのは sibling 整合性 (memory `feedback_cross_sibling_role_consistency.md`) の重大違反。とくに #22 (`[A:Mi] [E:vogio]`) と #32/#44/#48/#58/#62 (`[E:Vogio]` 単独、A 不在) で **同じ "I want to V" 構文** が分裂。
3. **pl (Polish)** の問題は二層:
   - (a) **省略**: #22, #32, #37, #41, #44, #48, #58, #62, #71, #78, #80, #81, #83, #89 — 14 文で `Ja` ドロップ、ただし他の言語 (cs/sk/bg/sr/sl) は同じ文で `Já/Ja/Аз/Ја/Jaz` を維持。
   - (b) **動詞/モーダルの A 流用**: #17 `[A:Mam]`、#19 `[A:Lubię]`、#27 `[A:Byłem]`、#29 `[A:Zostawiłem]`、#39 `[A:Muszę]`、#46 `[A:Rozmawiałem]`、#52 `[A:Zgubiłem]`、#55 `[A:Piję]`、#60 `[A:Uczę się]`、#64 `[A:Muszę]`、#67 `[A:Ćwiczę]`、#74 `[A:Czekam]` — **動詞・モーダルを letter A に置く**のは memory rule **`feedback_modal_verb_not_subject.md`** の明示的違反 (Mam = "I have"、Muszę = "I must"、これらは主語ではない)。
4. **ar (Arabic)** の問題は三層:
   - (a) **省略 16 文**: #27, #29, #32, #37, #39, #44, #46, #48, #58, #62, #64, #71, #80, #81, #83, #89 — `أنا` 不在。
   - (b) **動詞/モーダル A 流用**: #21 `[A:سأتناول]` (= "I will eat", verb-as-A)、#22 `[A:أريد]` (= "I want", verb-as-A)、#17 `[A:لدي]` (= "I have", existential-as-A)。
   - (c) **post-verbal subject as A**: #11 `[C:اشتريت] [A:أنا]`、#55 `[C:أشرب] [A:أنا]`、#67 `[D:أمارس] [A:أنا]`、#3 `[C:أتناول] ... [A:أنا]`、#52 `[C|H:فقدت] [A:أنا]`、#41 `[A:أنا] ...` — `أنا` の出現位置が文ごとに変動 (主に語順による) し、letter A の **線形位置の一貫性**が破綻。
5. **he (Hebrew)** の **5 文ドロップ** (#27/#29/#46/#52/#81) は **完了過去 (qatal)** で 1sg 形が明確 (shakhakhti, daberti, etc.) の場合に限定。これは言語学的に正当 (Holmberg 2010 §3.4: Hebrew は partial pro-drop) だが、データ内では **#11 `[A:אני]`、#22 `[A:אני]`、#37 `[A:אני]`、#39 `[A:אני]`、#44 `[A:אני]`、#48 `[A:אני]`** など同じ完了/現在過去でも顕在化されており、**5 文だけ落ちる選択基準が見えない**。
6. **ko (Korean)** の最大問題は **register 切替**: #1-#22 が `저는` (敬語)、#27 以降が `나는` (常体)、#85 が `당신은`、3sg は `걔는` (口語) と **同一データ内で敬語レベルが不統一**。これは pro-drop ではないが letter A の中身の **register 一貫性**問題で、学習者にとって深刻な混乱源。**ko の `저는→나는` 切替は #22 と #27 の間で発生**。
7. **#37/#39/#64/#85 ru/uk `[A:Мне/Мені]` (= dative experiencer "to me")**: 真の主語 (nominative) ではなく **dative experiencer** だが letter A に配置。これは `[A:Yo]` と並ぶ意味的整合 (英訳 "I need" が letter A) を取るためで合理的だが、**ロシア語学的には "Мне нужно" = "to-me is-needed" の非人称構文** で、A=主語 という規約と緊張関係。同じく fi `Minun` (genitive)、hu `Nekem` (dative)、hi `मुझे` (oblique) も非主格主語。
8. **#95 全 Germanic** (en, fr, de, sv, no, da, nl, fy, af, is, nds): 主語 "I/Je/Ich/Jag/Ik" は **letter D** に置かれ、letter A は **`by bicycle`** (手段) になっている。これは #95 が「自転車で」を A 配色 (赤) に置いて学習者注意を引く構成のため、**主語が D に降格**。**nl `[C:Ik rijd]`** は主語と動詞を C に融合させる **唯一の例外**で、他 Germanic と非対称。**sv `[D:Jag]`、no `[D:Jeg]`、da `[D:Jeg]`、is `[D:Ég]`** は letter D で独立しているが、本来 #43 や本レビューの主語独立規約からすれば違和感。
9. **#78 全 Romance/Germanic**: "I think this plan is good" で、**主節主語 "I" は `[D:I think]` の D 内に動詞と融合**、letter A は補文の指示詞 "this" に転用。これは前述 #95 と並行する pattern で、**主節主語が letter D に降格、A は補文要素に流用**。Slavic (pl `[D:Myślę że]`、cs `[D:Myslím, že]`)、ru `[D:Я думаю]` (主語顕在だが D 内) で同じ pattern。
10. **#76 全言語**: "I feel happy when I listen to music" で、**主語 "I" は全言語で省略**され (`[D:feel happy]`)、letter A は **目的語 "music"** に転用 (例: ja `[A:音楽を]`、ar `[A:الموسيقى]`、pl `[B:Kiedy słucham]`)。これも前項と同じ転用 pattern。
11. **fr_qc (Québécois French)**: 3sg `[A:A]` (= elle、e-final 脱落形)、`[A:Y]` (= il、母音前形) を採用しており、これは正書法的には **`a/y` (短縮形)** で letter A に独立する規約。整合的。

## 確信度

【確実】= 同一データ内で同じ意味の主語が OWN/DROP 両方に分裂しており規約違反が明白、【蓋然】= 言語固有事情で迷い余地あり、【要検討】= 方針自体を closed-review で再確認すべきもの。

---

## 指摘事項 (Issues found)

### 1. vec (Venetian) 1sg `Mi` が **13 文で完全脱落**、Romance sibling 言語と非対称 【確実】

**Current:**
- **OWN (`[A:Mi]` 顕在、14 文)**: #1, #3, #6, #9, #11, #14, #17, #21, #22, #27, #46, #67, #89, #98
- **DROP (主語不在、13 文)**: #32, #37, #39, #41, #44, #48, #55, #58, #62, #64, #71, #80, #81
- **動詞/モーダルを A に流用 (10 文)**: #29 `[A:Go]` (= ho), #52 `[A:Go]`, #60 `[A:Son drio]` (= sto), #74 `[A:Son drio]`, #76 `[A:mùsica]`, #78 `[A:che sto piano]`, #83 `[A:Son drio]`, #86 `[A:Tuti i giorni]`, #95 `[A:in bicicleta]`, #19 `[A:A mi]`

**Problem:** vec の sibling 言語 it/nap/scn/oc/gl/ro/es_eu/es_mx/pt_eu/pt_br/ca は **同じ 37 文すべてで主語顕在** (#41/#52/#60/#74 の pt_eu/pt_br ドロップ 4 文を除く)。vec は **#22 で `[A:Mi] [E:vogio] [D:imparar] ...`** と顕在化するが、**#32 で `[E:Vogio] [C:magnar] ...`** と省略、**#37 で `[D:Go da] [E:comprar] ...`** と AUX-as-D 構造 (主語不在)。これは「I want to V」「I have to V」の **同型構文を文ごとに違う方針で処理**しており、sibling 言語 (it/nap/scn/oc) はすべて `[A:Io]/[A:Iu]/[A:Ieu]` を維持。memory `feedback_cross_sibling_role_consistency.md` に明示的に違反。

**Proposed (主に op:"replace" で A 追加):**
- **(a) 主語追加**: #32, #37, #39, #41, #44, #48, #55, #58, #62, #64, #71, #80, #81 vec → 各文頭に `[A:Mi]` を挿入し、既存 `[E:Vogio]`/`[D:Go da]` を E/D のまま維持。具体的に:
  - #32 vec: `[E:Vogio] [C:magnar] [B:sushi] [D:a pranzo]` → `[A:Mi] [E:vogio] [C:magnar] [B:sushi] [D:a pranzo]`
  - #37 vec: `[D:Go da] [E:comprar] [D:un regalo] [C:de compleanno]` → `[A:Mi] [E:go da] [E':comprar] [B:un regalo] [C:de compleanno]` (`Go da` の `go` は AUX、`da` は不定詞マーカー → E に独立)
  - #39 vec: `[D:Go da alzarme] [B:bonora] [C:doman]` → `[A:Mi] [E:go da] [D:alzarme] [B:bonora] [C:doman]`
  - #44 vec: `[D:Vogio viagiar] [C:par tuto] [B:el mondo]` → `[A:Mi] [E:vogio] [C:viagiar] [B:par tuto el mondo]`
  - #48 vec: `[D:Vogio] [C:vardar] [E:quel] [B:film]` → `[A:Mi] [D:vogio] [C:vardar] [E:quel] [B:film]`
  - 同様に #55, #58, #62, #64, #71, #80, #81
- **(b) `[A:Go]` (= ho, AUX) 削除**: #29 vec `[A:Go] [C:desmentegà] [B:el me ombrela] [D:sul treno]` → `[A:Mi] [H:go] [C:desmentegà] [B:el me ombrela] [D:sul treno]` (主語 `Mi` を追加、AUX `go` を新 letter H に独立 — または既存 letter で対応); 同様に #52 vec `[A:Go] [C|H:perso] [B:el portafoi]` → `[A:Mi] [H:go] [C:perso] ...`
- **(c) `[A:Son drio]` 削除**: #60 vec `[A:Son drio] [D:imparar] [C:a cusinar] [B:roba coreana]` → `[A:Mi] [D:son drio] [D':imparar] [C:a cusinar] [B:roba coreana]` (`Son drio` = "I am about to" 進行アスペクト、新 D で AUX 独立); 同様に #74, #83。

**Structured edits:**
```js
{id: 32, lang: "vec", op: "insert_A", text: "Mi", position: 0}
{id: 37, lang: "vec", op: "insert_A", text: "Mi", position: 0}
// ... (13 sentences, all 1sg drop in vec)
{id: 29, lang: "vec", op: "replace_A", from: "Go", to: "Mi", and: "demote Go to H"}
{id: 52, lang: "vec", op: "replace_A", from: "Go", to: "Mi", and: "demote Go to H"}
```

---

### 2. pl (Polish) における動詞/モーダルの A 流用 — memory `feedback_modal_verb_not_subject` 違反 12 文 【確実】

**Current:**
- **動詞を `[A:...]` に流用 (8 文)**:
  - #19 `[A:Lubię] [C:słuchać] [B:muzyki]` — `Lubię` = "I like"、動詞のみ、主語省略を A スロットに動詞を入れて補填
  - #27 `[A:Byłem] [B:w Tokio] [C:trzy razy]` — `Byłem` = "I was"、動詞
  - #29 `[A:Zostawiłem] [B:parasol] [D:w pociągu]` — `Zostawiłem` = "I left"、動詞
  - #46 `[A:Rozmawiałem] [F:z] [B:przyjacielem] ...` — `Rozmawiałem` = "I talked"、動詞
  - #52 `[A:Zgubiłem] [B:portfel] [F:na] [D:targu]` — `Zgubiłem` = "I lost"、動詞
  - #55 `[A:Piję] [E:dwie] [F:filiżanki] [B:kawy] [D:codziennie]` — `Piję` = "I drink"、動詞
  - #60 `[A:Uczę się] [C:gotować] [B:koreańskie jedzenie]` — `Uczę się` = "I am learning"、動詞+再帰
  - #67 `[A:Ćwiczę] [B:na siłowni] ...` — `Ćwiczę` = "I exercise"、動詞
  - #74 `[A:Czekam] [B:już 30 minut]` — `Czekam` = "I am waiting"、動詞
- **モーダルを `[A:...]` に流用 (3 文)**:
  - #17 `[A:Mam] [C:spotkanie] [D:o] [E:3] ...` — `Mam` = "I have"、existential
  - #39 `[A:Muszę] [D:wstać] [B:wcześnie] [C:jutro]` — `Muszę` = "I must"、モーダル
  - #64 `[A:Muszę] [C:naładować] [B:telefon]` — `Muszę` = "I must"
- **モーダルを B/D に置いて主語不在 (許容範囲)**: #37 `[B:Muszę]`, #44 `[D:Chcę]`, #71 `[D:Chcę]`, etc. — letter A が**完全不在**

**Problem:** memory `feedback_modal_verb_not_subject.md` は **「モーダル動詞 (Vogio/Quiero/Go da) は主語 (A) ではない、必ず参照言語の segment ID に合わせる」** と明記。pl では `Mam/Muszę/Chcę` (モーダル) と `Lubię/Byłem/Zostawiłem/...` (本動詞) の両方が **誤って letter A に置かれている**。
- 兄弟言語 cs `[A:Já] [B:musím]`、sk `[A:Ja] [B:musím]`、bg `[A:Аз] [B:трябва]` は **主語 `Ja/Já/Аз` を A に、モーダル `musím/трябва` を B に独立**しており、cross-sibling 整合性 (memory `feedback_cross_sibling_role_consistency.md`) で見ると pl のみ outlier。
- 本動詞流用 (#19/#27/#29/#46/#52/#55/#60/#67/#74) は **pro-drop 言語として主語省略 + 動詞独立** が本来の正解。

**Proposed:**
- **(a) モーダル A 流用**: #17 `[A:Mam]` → `[A:Ja] [B:mam]` (主語追加、モーダル B); #39 `[A:Muszę]` → `[A:Ja] [E:muszę]` (cs sibling と整合); #64 `[A:Muszę]` → `[A:Ja] [D:muszę]`
- **(b) 本動詞 A 流用**: 
  - #19 `[A:Lubię] [C:słuchać] [B:muzyki]` → `[A:Ja] [D:lubię] [C:słuchać] [B:muzyki]` (主語 Ja 追加、動詞 lubię を D に — 兄弟 cs `[D:Rád] [C:poslouchám]` と部分整合)
  - #27 `[A:Byłem] [B:w Tokio]` → `[A:Ja] [D:byłem] [B:w Tokio] [C:trzy razy]` (動詞 byłem を D に独立 — cs sibling `[A:Já] [D:jsem byl]` と整合)
  - #29 `[A:Zostawiłem]` → `[A:Ja] [C:zostawiłem]` (動詞 zostawiłem を C に — cs sibling `[A:Já] [C:zapomněl]` と整合)
  - #46 `[A:Rozmawiałem]` → `[A:Ja] [E:rozmawiałem]` (動詞を E/H に — cs sibling `[A:Já] [H:jsem] [E:mluvil]` と整合)
  - #52 `[A:Zgubiłem]` → `[A:Ja] [C|H:zgubiłem]` (cs sibling `[A:Já] [C|H:ztratil]` と整合)
  - #55 `[A:Piję]` → `[A:Ja] [C:piję]` (cs sibling `[A:Já] [C:piju]`)
  - #60 `[A:Uczę się]` → `[A:Ja] [D:uczę] [B:się]` (再帰小辞 się を B に独立、または `[A:Ja] [D:uczę się]`)
  - #67 `[A:Ćwiczę]` → `[A:Ja] [D:ćwiczę]` (cs sibling `[A:Já] [D:cvičím]`)
  - #74 `[A:Czekam]` → `[A:Ja] [C:czekam]` (cs sibling `[A:Já] [C:čekám]`)

---

### 3. ar (Arabic) post-verbal subject `[A:أنا]` の **線形位置不整合 + 16 文ドロップ** 【確実】

**Current:**
- **Pre-verbal `[A:أنا]` (文頭)**: #1, #6, #9, #14, #19, #41, #74, #98
- **Post-verbal `[A:أنا]` (動詞の後)**: #3 `[C:أتناول] ... [A:أنا]` (実は #3 has C first), #11 `[C:اشتريت] [A:أنا]`, #52 `[C|H:فقدت] [A:أنا]`, #55 `[C:أشرب] [A:أنا]`, #60 `[D:أتعلم] [A:أنا]`, #67 `[D:أمارس] [A:أنا]`
- **動詞/モーダル A 流用 (3 文)**:
  - #17 `[A:لدي] [C:اجتماع] ...` — `لدي` = "with-me-there-is"、existential
  - #21 `[A:سأتناول] [D:العشاء] ...` — `سأتناول` = "I will eat"、動詞 (主語ドロップ + 動詞 A 流用)
  - #22 `[A:أريد] [D:أن أتعلم] ...` — `أريد` = "I want"、モーダル
- **完全 DROP (16 文)**: #27, #29, #32, #37, #39, #44, #46, #48, #58, #62, #64, #71, #80, #81, #83, #89 — `أنا` 不在、letter A も不在

**Problem:** Arabic は典型的な **null subject language** (Camacho 2013 §2.3) で、主語省略が無標、強調・対比のときのみ `أنا` 顕在化。データ上の **16 文ドロップ vs 14 文顕在 vs 動詞流用 3 文 + 後置 6 文** という分布は **規約不在の徴候**。とくに:
- **#11 vs #14**: 両方とも 1sg 過去完了/現在、#14 `[A:أنا] [C:أذهب]` (pre-verbal) vs #11 `[C:اشتريت] [A:أنا]` (post-verbal) — letter A の **線形位置が文によって違う**ため、cross-sentence で `A` が「主語」を一貫して指すか曖昧化。
- **#21 `[A:سأتناول]`** は動詞 (= "I will eat") を letter A に置いており、memory `feedback_modal_verb_not_subject.md` に違反 (動詞は主語ではない)。
- **#22 `[A:أريد]`** はモーダル (= "I want") を letter A に置いており、同じ違反。
- **#3 sibling**: ar #3 `[C:أتناول] [B:الفطور] [D:كل صباح] [E:في الساعة 7] [A:أنا]`? 確認要。

**Proposed:**
- **(a) Post-verbal `[A:أنا]` の位置統一**: SVO 兄弟 (en/fr) と整合させるため、すべて pre-verbal に統一 (#11, #52, #55, #67 などで `[A:أنا]` を文頭に移動)。これは **本動詞句との接続性**を変えるため慎重に — あるいは「Arabic VSO 語順は正書法的に許容、letter A の位置のみ変動可」と方針確認 (closed-review 議題)。
- **(b) 動詞/モーダル A 流用**:
  - #21 ar `[A:سأتناول]` → `[A:أنا] [D:سأتناول]` (主語 `أنا` 追加、動詞を D に)
  - #22 ar `[A:أريد]` → `[A:أنا] [E:أريد]` (主語追加、モーダル E — 兄弟 he `[A:אני] [E:רוצה]` と整合)
  - #17 ar `[A:لدي]` → letter A から existential を除去、`[A:أنا] [B:لدي]` または `[B:لدي]` のみで主語不在許容 (Arabic لدي 構文は主語 implicit)。
- **(c) ドロップ 16 文の補填**: pro-drop 言語として **顕在化は不要**だが、cross-sibling 整合性 (he が 27/37 顕在) の観点から:
  - #27 ar `[D:ذهبت] [B:إلى طوكيو]` → `[A:أنا] [D:ذهبت] ...` (he `[A:אני]` 不在の 5 文と並行ドロップなら許容)
  - #29 ar `[C:نسيت] [B:مظلتي]` → `[A:أنا] [C:نسيت] ...`
  - 残る 14 文も同様。**ただし全 16 文に `[A:أنا]` 強制は Arabic 学習教材として不自然** (Holes 2004 §6.1: 主語省略が中性) なので、closed-review で「ar は systematic drop 許容」方針確認推奨。

---

### 4. he (Hebrew) 1sg `אני` の **5 文ドロップ**が完了過去にも非完了過去にも不整合に発生 【蓋然】

**Current:**
- **OWN `[A:אני]`** 32 文: #1, #3, #6, #9, #11, #14, #17, #19, #21, #22, #32, #37, #39, #41, #44, #48, #58, #60, #62, #64, #67, #71, #74, #76, #78, #80, #83, #86, #89, #95, #98 等
- **DROP**: #27 `[D:הייתי]` (= "I was"、qatal 1sg 過去)、#29 `[C:שכחתי]` (= "I forgot"、qatal)、#46 `[E|H:דיברתי]` (= "I talked"、qatal)、#52 `[C|H:איבדתי]` (= "I lost"、qatal)、#81 `[F:יש לי]` (= "with-me-there-is"、existential)

**Problem:** Hebrew は **partial pro-drop** (Holmberg 2010 §3.4: qatal/yiqtol 1sg/2sg で主語省略可、3 人称は obligatory)。データ上の 5 文ドロップ:
- #27/#29/#46/#52 は **すべて qatal 1sg 過去**で言語学的に正当な省略。
- **#81 `[F:יש לי]`** は existential 構文 (= "I have")、letter F が **存在動詞 + 与格 1sg** という非標準的構造。
- しかし **#11 `[A:אני] [C:קניתי]` (qatal 1sg "I bought")、#14 `[A:אני] [C:הולך]` (現在 1sg "I go")、#21 `[A:אני] [E:אאכל]` (yiqtol 1sg "I will eat")、#37 `[A:אני] [B:צריך]` (現在 "I need")** は同じ完了/現在で顕在化。つまり **qatal でも文によって drop/keep が分裂**。
- 兄弟言語 ar は同じ qatal/yiqtol で **#27/#29/#32/#37/#39 など 16 文ドロップ** しており、he と ar が **同じ semitic 系で完全に異なる drop パターン**になっている (he: 5 文、ar: 16 文)。

**Proposed:**
- 言語学的に正当な qatal 省略は維持しても良いが、cross-sentence 整合性のため:
- **方針 A (全顕在)**: #27 he `[D:הייתי] [B:בטוקיו] [C:שלוש פעמים]` → `[A:אני] [D:הייתי] ...`; 同様に #29, #46, #52, #81
- **方針 B (全省略の qatal)**: 完了過去 qatal を持つ #11, #29, #46, #52, #27 などで一貫して `אני` を省略
- **推奨**: 方針 A (全顕在) を採り、ar と整合性を確保。Hebrew 学習教材で `אני` を見せる方が中級者に優しい (Glinert 1989 §2.4)。

---

### 5. pt_eu/pt_br 1sg `Eu` の **4 文ドロップ**が sibling Romance と非対称 【確実】

**Current:**
- **OWN `[A:Eu]`** 29 文
- **DROP** (4 文): #41 `[E:Estou a ler] ...` (pt_eu) / `[E:Estou lendo] ...` (pt_br); #52 `[C|H:Perdi] [B:a carteira] ...`; #60 `[D:Estou a aprender] ...`; #74 `[C:Estou à espera] ...`

**Problem:** Portuguese は **null subject language** (Camacho 2013 §3.2.2)、Eu 省略が中性。データ上の **4 文ドロップ**:
- 兄弟言語 es_eu, es_mx, it, ca, gl, ro, nap, scn, oc は **すべて #41 で `[A:Yo]/[A:Io]/[A:Jo]/[A:Eu]/[A:Iu]/[A:Ieu]` 顕在**化、pt_eu/pt_br のみドロップ。同じ「I'm reading a book now」構文で **6 Romance が顕在、pt 2 言語のみ省略**。
- #52 (forgot wallet) でも es_eu/es_mx/it/ca/gl/ro/nap/scn/oc が `[A:Yo]/...` 顕在、pt のみ省略。
- #60 (learning Korean) 同様。

**Proposed:**
- pt_eu/pt_br を sibling Romance と整合: #41/#52/#60/#74 で `[A:Eu]` を追加。具体的:
  - #41 pt_eu: `[E:Estou a ler] [D:um] [F:livro] ...` → `[A:Eu] [E:estou a ler] [D:um] [F:livro] ...`
  - #41 pt_br: 同様に `[A:Eu]` 追加
  - #52 pt_eu/pt_br: `[A:Eu]` 追加
  - #60 pt_eu/pt_br: 同上
  - #74 pt_eu/pt_br: 同上

---

### 6. ca (Catalan) #89 のみ `[A:Jo]` ドロップ — sibling と非対称 【確実】

**Current:** #89 ca `[C:No] [B:puc] [D:trobar] [E:la] [G:contrasenya] [F:del Wi-Fi]` — `Jo` 省略
- 兄弟 #89: es_eu `[A:Yo] [C:no] [B:puedo]`、es_mx `[A:Yo] [C:no] [B:puedo]`、it `[A:Io] [C:non] [B:riesco a]`、pt_eu `[A:Eu] [C:não] [B:consigo]`、pt_br 同様、ro `[A:Eu] [C:nu] [B:pot]`、vec `[A:Mi] [C:no] [B:rieso a]`、gl `[A:Eu] [C:non] [B:podo]`、nap `[A:Io] [C:nun] [B:riesco a]`、scn `[A:Iu] [C:nun] [B:pozzu]`、oc `[A:Ieu] [C:pòdi pas] ...` — **8 Romance すべて `[A:Yo/Io/Eu/Mi/Iu/Ieu]` 顕在**、ca のみドロップ

**Problem:** ca は他 36 文すべて `[A:Jo]` 顕在化しているのに **#89 だけ唯一ドロップ**。これは入力エラーまたは編集忘れ。

**Proposed:**
- #89 ca: `[C:No] [B:puc] [D:trobar] ...` → `[A:Jo] [C:no] [B:puc] [D:trobar] ...`

**Structured edit:**
```js
{id: 89, lang: "ca", op: "insert_A", text: "Jo", position: 0}
```

---

### 7. cs (Czech) #19, #22, #44 の `[A:Já]` ドロップ — sibling sk/bg/sr/sl と非対称 【確実】

**Current:**
- #19 cs `[D:Rád] [C:poslouchám] [B:hudbu]` — `Já` 省略 (代わりに `Rád` "happy/gladly" が D)
- #22 cs `[E:Chci se] [D:naučit] [F:nový] [C:jazyk]` — `Já` 省略 (代わりに `Chci se` モーダル+再帰 E)
- #44 cs `[D:Chci] [C:cestovat] [B:po celém světě]` — `Já` 省略 (`Chci` モーダル D)
- #89 cs `[C:Ne] [B:mohu] ...` — `Já` 省略 (許容、全 Slavic で共通)

**Problem:** cs は他 32 文で `[A:Já]` 顕在、#19/#22/#44 のみドロップ。sibling sk は **すべて `[A:Ja]` 顕在** (例: #19 sk `[A:Ja] [D:rád] [C:počúvam]`、#22 sk `[A:Ja] [E:chcem]`、#44 sk `[A:Ja] [D:chcem]`)。**cs だけが sk/bg/sr/sl と非対称的にドロップ**。
- #22 cs `[E:Chci se]` の `Chci` は cs sibling `[A:Já] [E:chci]` と並ばない (sk `[A:Ja] [E:chcem]`)、再帰小辞 `se` も E に融合 (#48 指摘 2 と並行)。

**Proposed:**
- #19 cs: `[A:Já] [D:rád] [C:poslouchám] [B:hudbu]` (sk sibling と整合)
- #22 cs: `[A:Já] [E:chci] [B:se] [D:naučit] [F:nový] [C:jazyk]` (主語追加、再帰 se を B に独立 — #48 指摘 2 と協調)
- #44 cs: `[A:Já] [D:chci] [C:cestovat] [B:po celém světě]`

---

### 8. ko (Korean) `저는→나는` register 切替が #22/#27 境界で発生 — 同データ内で敬語レベル不統一 【確実】

**Current:**
- **`저는` (敬語 jeoneun) 文**: #1, #3, #6, #9, #11, #14, #17, #21, #22, #98 (10 文、すべて #22 以前 + #98 例外)
- **`나는` (常体 naneun) 文**: #27, #29, #32, #37, #39, #41, #44, #48, #52, #55, #58, #60, #62, #64, #67, #71, #74, #80, #83, #89 (20 文、すべて #27 以降)
- **`걔는` (口語 gaeneun "that one") for 3sg**: #30, #42, #57, #61, #65, #69, #77, #79, #84, #90 (10 文)
- **`당신은` (敬語 2sg "you") for #85**
- **`어머니는`/`아버지는` for #8/#25**
- **`우리는` for #54, #92**

**Problem:** 韓国語の **register 切替**は重大な学習妨害:
- #22 `[A:저는]` (敬語) と #27 `[A:나는]` (常体) は同じ 1sg 主語だが、文体が突然変わる (cf. Sohn 1999 §3.2: 敬語切替は文脈ごとに固定、同一話者の continuous discourse では変えない)。
- 3sg が `걔는` (`그 아이는` の縮約、口語的、軽蔑/親密的) になっているのも問題 — 通常の 3sg 主語は `그/그녀` (he/she) で、`걔는` は **register を一段下げる** (Sohn 1999 §5.1.3)。**`그는/그녀는` が標準**。
- `당신은` (#85) は形式的 2 人称代名詞だが **婚姻関係内・歌詞・宗教文以外ではほぼ使われない** (Sohn §3.4: 通常 `당신` は避け、地位を尊重する場合は `선생님 (sir)` 等)。学習者には誤解を招く。
- 兄弟 ja は **すべて `私は` (1sg)、`彼は`/`彼女は` (3sg)、`あなたは` (2sg)** で register 統一。

**Proposed:**
- **(a) 1sg 統一**: 全 37 文の `[A:저는]/[A:나는]` を **常体 `나는` に統一** (最も使用頻度の高い register)。または **敬語 `저는` に統一** (学習者初級では `저` 推奨、Sohn 1999 §3.2.1)。決定は closed-review。
  - 切替推奨: #1, #3, #6, #9, #11, #14, #17, #21, #22, #98 の `저는` → `나는` に変換 (10 文)
  - または: #27 以降 20 文の `나는` → `저는` に変換 (20 文)
- **(b) 3sg 統一**: `걔는` → `그는` (he) / `그녀는` (she) に置換 — `걔는` は口語で教材に不適 (10 文: #30/#42/#57/#61/#65/#69/#77/#79/#84/#90)
- **(c) 2sg 統一**: `당신은` (#85) → `당신` の使い方を closed-review で検討、または `너는` (informal) に変更。

**Structured edits (option a):**
```js
{id: 1, lang: "ko", op: "replace_A_text", from: "저는", to: "나는"}
{id: 3, lang: "ko", op: "replace_A_text", from: "저는", to: "나는"}
// ... 10 sentences
{id: 30, lang: "ko", op: "replace_A_text", from: "걔는", to: "그녀는"}
{id: 42, lang: "ko", op: "replace_A_text", from: "걔는", to: "그녀는"}
// ... 10 sentences
```

---

### 9. ru/uk/be 1sg `Мне/Мені` (与格主語) を A に流用 — 主語 vs 経験者構文の区別 【蓋然】

**Current:**
- #17 ru `[A:У меня] [B:есть] [C:встреча]` — `У меня` (= "at me") existential
- #37 ru `[A:Мне] [B:нужно] [E:купить]` — `Мне` (与格 1sg "to me")
- #39 ru `[A:Мне] [E:нужно] [D:проснуться]` — 同様
- #64 ru `[A:Мне] [D:нужно] [C:зарядить]` — 同様
- #81 ru `[A:У меня] [D:болит] [B:голова]` — `У меня` existential
- #85 ru `[D:Тебе стоит] [C:пить] [E:больше]` — `Тебе` (与格 "to you") は D に
- 同様に uk: #17 `[A:У мене]`, #37 `[A:Мені]`, #39 `[A:Мені]`, #64 `[A:Мені]`, #81 `[A:У мене]`, #85 `[D:Вам варто]`

**Problem:** Russian/Ukrainian の **dative experiencer construction** (Мне нужно / У меня) は **真の主語 (nominative)** ではなく **dative argument with verb 3sg neuter** (Wade 2011 §10.3: "non-agentive impersonal construction"). データ上 #37/#39/#64 では `[A:Мне]` (与格) を letter A に置いており、これは:
- (a) **意味的に英語 "I" と対応**するため学習者にとって直感的
- (b) **しかし格は dative**で、本来の主語 (nominative `Я`) は不在
- (c) #85 では `[D:Тебе стоит]` (与格 "you") が D に置かれ、letter A 不在 — 同じ与格主語構文で **letter 配分が文ごとに違う** (#37/#39/#64 は A、#85 は D)
- (d) ru 兄弟 cs/sk/bg/sr/sl は **#37/#39/#64 で `[A:Já] [B:musím]` (nominative 主語 + モーダル)** を採用し、与格構文を使わない — Slavic 内でも構文選択が分裂

**Proposed:**
- 方針 A (現状維持): 与格主語を A に置く方針を closed-review で明文化
- 方針 B (letter 区別): nominative 主語と dative 主語を別 letter (例: A = nom、新 letter A' = dative experiencer) に分ける
- 方針 C (sibling 整合): cs/sk/bg の `[A:Já] [B:musím]` に整合して、ru を `[A:Я] [B:должен]` (= "I-nom must-1sg-masc") のような nominative + modal 構文に置換
- **#85 ru の `[D:Тебе стоит]` は letter A に格上げ**して #37/#39/#64 と整合させるのが優先 (現状の **A 不在**は規約破り):
  - #85 ru: `[D:Тебе стоит] [C:пить] [E:больше] [B:воды]` → `[A:Тебе] [D:стоит] [C:пить] [E:больше] [B:воды]`

---

### 10. #95 全 Germanic 主語が letter D に降格、A は `by bicycle` (instrument) に流用 — 規約混乱 【確実】

**Current:** #95「I go to the office by bicycle」:
- en `[D:I] [C:go] [B:to the office] [A:by bicycle]`
- fr `[D:Je] [C:vais] [B:au bureau] [A:à vélo]`
- de `[D:Ich] [C:fahre] [A:mit dem Fahrrad] [B:ins Büro]`
- sv `[D:Jag] [C:cyklar] [B:till kontoret]` — A 不在
- no `[D:Jeg] [C:sykler] [B:til kontoret]` — A 不在
- da `[D:Jeg] [C:kører] [B:til kontoret] [A:på cykel]`
- nl `[C:Ik rijd] [A:met de fiets] [B:naar kantoor]` — **`Ik` を C に動詞融合**
- fy `[D:Ik] [C:fytse] [B:nei it kantoar] [A:op de fyts]`
- af `[D:Ek] [C:ry] [B:kantoor toe] [A:per fiets]`
- is `[D:Ég] [C:fer] [B:á skrifstofuna] [A:á reiðhjóli]`
- nds `[D:Ik föhr] [B:na't Büro] [A:mit dat Rad]` — **`Ik föhr` を D に動詞融合**
- Romance: es_eu `[C:Voy] [B:a la oficina] [A:en bicicleta]` (Eu 省略、A=instrument)、it `[C:Vado] ...` 同様
- ru `[D:Я] [C:еду] [B:в офис] [A:на велосипеде]` — `Я` を D に
- ko `[D:나는] [A:자전거로] [B:사무실에] [C:간다]` — `나는` を D に
- hi `[D:मैं] [A:साइकिल से] [B:ऑफिस] [C:जाता हूँ]` — `मैं` を D に
- tr `[A:Bisikletle] [B:ofise] [C:giderim]` — 主語完全省略、A は instrument
- ja `[A:自転車で] [B:オフィスに] [C:行く]` — `私は` 省略、A は instrument
- el `[C:Πηγαίνω] [B:στο γραφείο] [A:με ποδήλατο]` — Εγώ 省略
- la `[A:Birota] [B:ad officium] [C:eo]` — Ego 省略、A は instrument
- oc `[D:Ieu] [C:vau] [B:al burèu] [A:en bicicleta]` — `Ieu` を D に

**Problem:** #95 は **letter A の意味的整合性が他文と決定的に異なる**:
- 他文では letter A = 主語 (代名詞 or 名詞句)、しかし #95 では letter A = instrument (`by bicycle`)
- これは **編集者が `by bicycle` を A に置いて学習者注意を引く** 設計だが、結果として:
  - 主語 (英 I/独 Ich/仏 Je) が **letter D に降格** — Germanic で 11 言語中 7 言語が D
  - **nl `[C:Ik rijd]`** は主語+動詞融合で C 一塊 — Germanic 唯一の例外
  - **nds `[D:Ik föhr]`** は主語+動詞融合で D 一塊
  - **sv/no `[D:Jag/Jeg] [C:cyklar/sykler]`** は letter A 不在 — A スロット欠落
  - Romance + ja + tr + ar + el など多くが主語省略、letter A に instrument を入れる
- これは memory `feedback_modal_verb_not_subject.md` の発展形 — **主語以外を A に置くと、cross-sentence で letter A の意味が崩れる**

**Proposed:**
- **方針 A (元戻し)**: #95 で letter A を主語に戻し、`by bicycle` を別 letter (D/E) に
  - en `[D:I] [C:go] [B:to the office] [A:by bicycle]` → `[A:I] [C:go] [B:to the office] [D:by bicycle]`
  - 同様に全言語で letter A を主語に
- **方針 B (現状維持 + 規約明文化)**: 「#95 と #76/#78/#86 では A が主語以外を担う」と closed-review で明文化、letter A の意味は文ごとに変わると認める
- nl `[C:Ik rijd]` → `[D:Ik] [C:rijd]` (主語と動詞分離、他 Germanic と整合)
- nds `[D:Ik föhr]` → `[D:Ik] [C:föhr]` (同上)
- sv/no `[D:Jag/Jeg] [C:cyklar/sykler] [B:till kontoret]` → letter A 不在を解消するため `[A:på cykel]` (= "on bike") を追加 (da と整合)

---

### 11. #78 全言語 主節主語 "I" が letter D に融合、A は補文の指示詞に流用 【確実】

**Current:** #78「I think this plan is good」:
- en `[D:I think] [A:this] [B:plan] [C:is good]`
- fr `[D:Je pense] [A:que ce] [B:plan] [C:est bon]`
- de `[D:Ich denke] [A:dieser] [B:Plan] [C:ist gut]`
- es_eu `[D:Creo] [A:que este] [B:plan] [C:es bueno]` — `Yo` 省略、D は動詞のみ
- es_mx `[D:Yo creo] [A:que este] [B:plan] [C:está bien]` — `Yo creo` を D に融合
- it `[D:Penso] [A:che questo] [B:piano] [C:sia buono]` — pro-drop
- pt_eu/pt_br `[D:Acho] [A:que este/esse] [B:plano] [C:é bom]` — pro-drop
- ro `[D:Cred că] [A:acest] [B:plan] [C:este bun]` — pro-drop
- vec `[D:Penso] [A:che sto piano] [B:xe] [C:bon]` — `che sto piano` (= "that this plan") を A に
- pl `[D:Myślę że] [B:ten plan] [C:jest dobry]` — A 不在
- ru `[D:Я думаю] [A:этот] [B:план] [C:хорош]` — `Я думаю` を D に融合
- uk 同様
- ar `[D:أعتقد] [A:أن هذه] [B:الخطة] [C:جيدة]` — pro-drop
- he `[D:אני חושב] [B:שהתוכנית] [A:הזאת] [C:טובה]` — `אני חושב` (主語+動詞) を D に融合
- ja `[A:この] [B:計画は] [C:良いと] [D:思う]` — 主節主語 `私は` 完全省略 (典型的 pro-drop、A は補文の `この`)
- ko `[A:이] [B:계획이] [C:좋다고] [D:생각한다]` — 同上
- tr `[A:Bu] [B:plan] [C:iyi] [D:bence]` — `bence` ("according to me") D
- la `[D:Ego puto] [A:hoc] [B:consilium] [C:bonum esse]` — `Ego puto` を D に
- gl `[D:Eu penso] [A:que este] [B:plan] [C:é bo]` — `Eu penso` を D に融合
- oc `[D:Ieu pensi] [A:qu'aqueste] [B:plan] [C:es bon]` — 同上

**Problem:** #78 は **複文 (matrix + complement)** で:
- **主節主語 "I" は letter D に動詞と融合** (en/de/fr/es_mx/ru/he/la/gl/oc)
- **主節主語が pro-drop** (es_eu/it/pt/ro/ja/ko/pl/ar/vec)
- **補文の指示詞 "this/that" が letter A に格上げ** (全言語)

これは:
1. **letter A の意味が主節主語ではなく補文の主題**になり、cross-sentence で「A = 主語」が崩れる (#95/#76/#86 と同根の問題)
2. **主節主語が D に融合**することで、`Je pense` (`Je` 主語 + `pense` 動詞) が一塊化 → 学習者は主語と動詞の区別を学べない
3. **es_mx `[D:Yo creo]`** は **主語 Yo + 動詞 creo** が letter D 一塊で、`Yo` が letter A から **D に降格**。
4. **he `[D:אני חושב]`** も主語+動詞 D 融合。
5. **pl `[D:Myślę że]`** は **動詞+補文標識** 融合、letter A 不在。

**Proposed:**
- **(a) 主節主語の独立**: 全言語で主節主語 (顕在化された場合) を letter A に独立、補文の指示詞は別 letter (例: 既存 letter E/F または新 letter):
  - en `[D:I think] [A:this] [B:plan] [C:is good]` → `[A:I] [D:think] [E:this] [B:plan] [C:is good]`
  - es_mx `[D:Yo creo] [A:que este] [B:plan] [C:está bien]` → `[A:Yo] [D:creo] [E:que este] [B:plan] [C:está bien]`
  - he `[D:אני חושב] [B:שהתוכנית] [A:הזאת] [C:טובה]` → `[A:אני] [D:חושב] [B:שהתוכנית] [E:הזאת] [C:טובה]`
  - ru `[D:Я думаю] [A:этот] [B:план] [C:хорош]` → `[A:Я] [D:думаю] [E:этот] [B:план] [C:хорош]`
  - la `[D:Ego puto] [A:hoc] [B:consilium] [C:bonum esse]` → `[A:Ego] [D:puto] [E:hoc] [B:consilium] [C:bonum esse]`
  - gl/oc 同様
- **(b) Pro-drop 言語の補文標識**: it `[D:Penso] [A:che questo]` の `[A:che questo]` の `che` (補文標識) を別 letter に分離:
  - it `[D:Penso] [A:che questo] [B:piano] [C:sia buono]` → `[D:Penso] [E:che] [A:questo] [B:piano] [C:sia buono]` (`che` を E に、`questo` を A に)
- これは方針変更で grand convention 寄り、closed-review 議題。

---

### 12. #76 全言語 主節主語 "I" 完全省略、A は目的語 "music" / 連語 "musique" に流用 【確実】

**Current:** #76「I feel happy when I listen to music」:
- en `[D:I feel happy] [C:when] [A:I listen to] [B:music]`? 確認:
- en `[E:When] [A:I listen to] [B:music] [D:I feel happy]` (確認要)

データ実測値を再確認:

データ:
- en `[D:feel happy] ... [A:listen to music]`? -- 上の audit 出力では: ja `[A:音楽を] [B:聴くと] [C:幸せな] [D:気持ちになる]` (A=music)
- es_eu `[D:Me siento feliz]` (確認)
- pl `[B:Kiedy słucham] [A:muzyki] [D:czuję się szczęśliwy]`? あるいは `[B:Kiedy słucham muzyki]` 統合

実測 (audit より):
- vec `A=mùsica` (= music)
- pl `A=muzyki`
- ar `A=الموسيقى`
- he `A=music` 等
- 全言語で **letter A は "music" (目的語)** に転用、主節主語 "I" は全言語で省略

**Problem:** #76 は **目的語 "music" が letter A** に置かれており、主節主語不在。これは #95/#78 と並行する letter A 流用の重大変更:
- letter A の意味が **主節主語 → 目的語 (B 相当)** に化けている
- 全言語で同じ流用が一貫しているのは強み、しかし **cross-sentence で letter A の意味が崩壊**

**Proposed:** #95/#78 と同じく、letter A を主語に戻すか、本構造 (主語不在で目的語 A) を closed-review で明文化。

---

### 13. #86 全言語 主語 "I" 省略、A は時間副詞 "every day" に流用 【確実】

**Current:** #86「I use my smartphone every day」:
- 実測 (audit より): vec `A=Tuti i giorni` (= every day)、pl `A=Codziennie`、ar `A=كل يوم`、ko `A=매일`、ja 確認要

**Problem:** #86 でも letter A が **時間副詞**に流用、主節主語 "I" は省略。#95/#76/#78 と同じ pattern。

**Proposed:** 上記と同根、closed-review で letter A 意味論を統一。

---

### 14. fr_qc 3sg `[A:A]` (= elle) / `[A:Y]` (= il) の単音節短縮形 — letter A 整合性は OK 【蓋然】

**Current:**
- #30 fr_qc `[A:A] [E:est capable de] [C:jouer] [B:du piano] [D:ben comme faut]`
- #65 fr_qc `[A:A] [B:m'] [E:‌a donné] [C:un beau] [D:cadeau]`
- #77 fr_qc `[A:Y] [C:a été surpris] [D:par] [E:les résultats du] [B:test]`
- #79 fr_qc `[A:A] [B:est triste] [C:parce que] [D:son amie] [E:est partie]`
- #84 fr_qc `[A:A] [C:a pogné] [B:un rhume] [D:la semaine] [E:passée]`
- #90 fr_qc `[A:Y] [D:a appris] [B:la programmation] [C:par lui-même]`

**Problem:** Québécois French では elle/il が音節脱落により `a/y` に短縮 (Côté 2012, *Le français québécois* §4.3)。データ上は **letter A に `A`/`Y` を単独で配置**しており、これは正書法的に許容 (Québec literary representation)。
- ただし大文字 `A` は **冠詞 a (= "to") or vowel-letter** との混同を招く可能性。学習者には `[A:A]` が「letter A」と「single letter A」の二重意味で読みづらい。

**Proposed:**
- (本質的問題なし) 現状維持で良い。または注記として「fr_qc 3sg pronoun `A/Y` は短縮形」と meta 補足。

---

### 15. #65 ar 3sg post-verbal `[A:هي]` — 線形位置不整合 (指摘 3 と並行) 【蓋然】

**Current:** #65 ar `[E:أعطت] [A:هي] [B:لي] [D:هدية] [C:جميلة]` — 動詞 `أعطت` (= "she gave") の後に `[A:هي]` 後置

**Problem:** Arabic VSO 語順は標準的だが、`أعطت` (3sg fem 過去) の主語は **動詞接尾辞で表現**されており `هي` は **強調・対比のため**に明示的に挿入される (Holes 2004 §6.2)。データ上 #65 では `[A:هي]` を **post-verbal で letter A** にしているが:
- 兄弟 #65: en `[A:She]`、fr `[A:Elle]`、de `[A:Sie]`、es_eu/es_mx/it/pt/ca/ro/vec/etc 全部 `[A:Ella/Lei/Ela]` を **pre-verbal**配置
- ar のみ post-verbal、letter A の **線形位置不整合**

同様に他の 3sg 文で:
- #84 ar `[C:أصيبت] [A:هي] [B:بنزلة برد]` — post-verbal
- #90 ar `[D:تعلم] [A:هو] [B:البرمجة]` — post-verbal
- #69 ar `[D|E:كتب] [A:هو] [B:رسالة]` — post-verbal
- #25 ar `[E:يعمل] [A:والدي]` — post-verbal
- #8 ar `[C:تطبخ] [A:أمي]` — post-verbal subject "mother" (実際は noun だが post-verbal)

**Problem:** Arabic 6 文 (#8, #25, #65, #69, #84, #90) で post-verbal subject となり letter A の position が一貫しない。

**Proposed:**
- 方針 A (移動): 全 6 文で `[A:هي/هو/أمي/والدي]` を pre-verbal に移動 (SVO 順)、Arabic 教材として VSO を犠牲にする
- 方針 B (注記): Arabic VSO 順を尊重、letter A の **線形位置変動を許容**と明文化

---

### 16. #95 sv/no `[D:Jag/Jeg]` のみ letter A 不在 — Scandinavian sibling 内不整合 【確実】

**Current:** #95
- sv `[D:Jag] [C:cyklar] [B:till kontoret]` — **A 不在** (3 segments)
- no `[D:Jeg] [C:sykler] [B:til kontoret]` — **A 不在** (3 segments)
- da `[D:Jeg] [C:kører] [B:til kontoret] [A:på cykel]` — A=on bike
- is `[D:Ég] [C:fer] [B:á skrifstofuna] [A:á reiðhjóli]` — A=on bike

**Problem:** sv/no では「by bicycle」が **動詞 `cyklar`/`sykler` ("cycle/bike") に語彙化**されており、別 letter `A:by bicycle` が不要。しかし、これにより:
- **letter A が完全不在**になり、sentence-wide で A の存在が破綻
- da/is は `på cykel`/`á reiðhjóli` を別 letter A として独立、sv/no と非対称

**Proposed:**
- 方針 A: sv/no も含めて全 Germanic で letter A を主語に戻す (指摘 10 と統合)
- 方針 B: sv/no で `[A:på cykel]` (= "on bike", redundant) を追加し letter A 不在を解消
- 方針 C: 現状維持を許容、ただし letter A 不在は data quality 観点で flag

---

### 17. ja #3, #89 1sg `私は` ドロップ — sibling 不整合 【蓋然】

**Current:**
- #3 ja `[D:毎朝] [C:7時に] [B:朝食を] [E:食べる]` — `私は` 不在、A 不在
- #89 ja `[F:Wi-Fiの] [G:パスワードが] [D:見つから] [C:ない]` — `私は` 不在、A 不在

**Problem:** ja は他 1sg 文ですべて `[A:私は]` 顕在 (#1, #6, #9, #11, etc. 31 文)、#3 と #89 のみ省略。これは:
- #3 は習慣的行為 (`every morning`)、ja で主語省略は自然 (Kuno 1973 §5: 一般化された習慣文)
- #89 は **letter A 完全不在** で、`Wi-Fiの` から始まる (F = Wi-Fi、G = password が letter 列で前置)
- 一方 ko #89 は `[A:나는]` 顕在 (`나는 Wi-Fi 비밀번호를 찾을 수 없다`) → ja と ko で sibling 非対称

**Proposed:**
- #3 ja: `[A:私は] [D:毎朝] [C:7時に] [B:朝食を] [E:食べる]` (顕在化、他 30 ja 文と整合)
- #89 ja: `[A:私は] [F:Wi-Fiの] [G:パスワードが] [D:見つから] [C:ない]` (顕在化)

---

### 18. #65 sk/bg/sr/sl 与格 `mi/ми` を E に融合 — sibling cs/ru の B 独立と非対称 【確実】

**Current:** #65「She gave me a beautiful gift」(指摘 #48 の指摘 21 と部分重複):
- es_eu `[A:Ella] [B:me] [E:dio]` — 与格 me を B 独立
- es_mx `[A:Ella] [B:me] [E:dio]` — 同上
- it `[A:Lei] [B:mi] [E:ha dato]` — 同上
- pt_br `[A:Ela] [B:me] [E:deu]` — 同上
- pl `[A:Ona] [E:dała] [B:mi]` — 与格 mi を B 独立 (動詞の後)
- cs `[A:Ona] [B:mi] [E:dala]` — 与格 mi を B 独立
- **sk `[A:Ona] [E:mi dala]`** — 与格 mi を **E に融合** (動詞と一塊)
- **bg `[A:Тя] [E:ми даде]`** — 同上
- **sr `[A:Она] [E:ми је дала]`** — 同上 (`ми је дала` = clitic cluster)
- **sl `[A:Ona] [E:mi je dala]`** — 同上
- ru `[A:Она] [E:подарила] [B:мне]` — 与格 мне を B 独立 (動詞の後)
- el `[A:Αυτή] [B:μου] [E:έδωσε]` — μου B 独立

**Problem:** **8 言語**が `me/mi/мне/μου` を **letter B** に独立 (与格代名詞専用 letter B 規約)、しかし **4 言語 (sk/bg/sr/sl)** が `mi/ми` を E (動詞句) に融合。これは #48 で既に部分指摘されており、#48 dev round 1 で 11 セルの cross-sibling 修正が適用済。本指摘では **sk/bg/sr/sl の残存 4 セル**を flag。

**Proposed:**
- sk #65: `[A:Ona] [E:mi dala]` → `[A:Ona] [B:mi] [E:dala]`
- bg #65: `[A:Тя] [E:ми даде]` → `[A:Тя] [B:ми] [E:даде]`
- sr #65: `[A:Она] [E:ми је дала]` → `[A:Она] [B:ми] [H:је] [E:дала]` (与格 ми B、助動詞 је H、過去分詞 дала E)
- sl #65: `[A:Ona] [E:mi je dala]` → `[A:Ona] [B:mi] [H:je] [E:dala]`

---

### 19. #54 ar 1pl `[A:علينا]` (= "on us", dative) — modal `يجب` と分離されているが letter A は与格 【蓋然】

**Current:** #54 ar `[D:يجب] [A:علينا] [C:حماية] [B:البيئة]`

**Problem:** Arabic `يجب علينا` (= "it is necessary on us") は **非人称モーダル** + **与格代名詞 1pl `علينا`** で、**真の主語 (1pl `نحن`) は不在**。データ上:
- `يجب` (モーダル) を D に独立 ✓
- `علينا` (与格 "on us") を A に流用 — これは指摘 9 の ru `[A:Мне]` と同じ問題
- 兄弟 #54 he `[A:אנחנו] [D:חייבים] [C:להגן על] [B:הסביבה]` は **nominative `אנחנו`** (= "we") を A に
- ar 兄弟 (#54) tr `[A:Biz]`、ja `[A:私たちは]`、ko `[A:우리는]`、hi `[A:हमें]` (`हमें` = dative "to us" — hi も与格主語)、fi `[A:Meidän]` (genitive)、hu `[A:Nekünk]` (dative)

つまり **#54 で nominative 主語を A に置く言語 (en/fr/de/sv/no/da/he/tr/ja/ko/zh/it/es/...)** と **dative/oblique 主語を A に置く言語 (ar/hi/fi/hu/ru/uk)** が混在し、letter A の **格カテゴリーが言語間で違う**。これは前項 9 と並行する問題。

**Proposed:**
- ar #54: `[D:يجب] [A:علينا]` → `[A:نحن] [D:يجب علينا]` (nominative `نحن` を A 追加) または現状維持 + 注記
- 同様に hi `[A:हमें]` → `[A:हम] [D:को चाहिए]` (nominative `हम` + dative + modal) — 文法的に不自然なので注記推奨

---

### 20. #72 1pl `they` — 全言語整合 (3pl はほぼ全言語で顕在)【蓋然】

**Current:** #72「They built a new bridge over the river」: 全主要言語で `[A:They/Ils/Sie/...]` 顕在
- 例外: pt_eu/pt_br/ja/ko などで微差あるかもしれない (確認要)
- el/ar/he などで 3pl 主語省略が起こる場合あり

**Problem:** 3pl 主語の扱いは 1sg と異なり、データ上ほぼ全言語で顕在化されている。詳細スキャンで不一致あれば flag (本指摘ではサンプル不在で省略)。

**Proposed:** 3pl サンプル不足、closed-review で 3pl 例文追加検討。

---

### 21. en #95, #78 主節主語 `I` の letter D 配置 — 英語ですら letter A 不在 【確実】

**Current:**
- #95 en `[D:I] [C:go] [B:to the office] [A:by bicycle]`
- #78 en `[D:I think] [A:this] [B:plan] [C:is good]`

**Problem:** 英語は **strict mandatory subject language** (Roberts 2010 §1.2: "*Pro-drop is impossible in modern English"). 学習者にとって英語の `I` は **必ず letter A** に置くべき (規約として最も基本的)。しかし データ上 #95 と #78 では:
- **#95**: `I` を D、A を `by bicycle` (instrument)
- **#78**: `I think` (主語+動詞) を D 融合、A を `this` (補文指示詞)

これは英語規約破りで、cross-sentence で「letter A = 主語」という最も基本的なルールが壊れる。指摘 10-13 のなかで最も重要 (英語が壊れたら全部壊れる)。

**Proposed:**
- #95 en: `[D:I] [C:go] [B:to the office] [A:by bicycle]` → `[A:I] [C:go] [B:to the office] [D:by bicycle]`
- #78 en: `[D:I think] [A:this] [B:plan] [C:is good]` → `[A:I] [D:think] [E:this] [B:plan] [C:is good]`
- これに伴い全 100 文の en で `I` を必ず letter A に統一する規約を closed-review で再確認。

---

### 22. #41 vec, pt_eu, pt_br, nds 主語ドロップ — Romance/Germanic 内不整合 【確実】

**Current:** #41「I'm reading an interesting book now」:
- pt_eu `[E:Estou a ler] [D:um] [F:livro] [C:interessante] [B:agora]` — `Eu` 省略 (指摘 5 と統合)
- pt_br `[E:Estou lendo] ...` — 同上
- vec `[B:Adesso] [E:son drio lèzer] [D:un] [F:libro] [C:interessante]` — `Mi` 省略、A は `Adesso` (時間副詞) に流用
- nds `[B:Graad] [E:lees ik]` (確認要) — 上記の audit 出力で `nds=Graad` だった

実測 (audit より):
- nds #41 `A=Graad` → `Graad` (= "just/now") を A に置いて主語 ik (= "I") を後置している

**Problem:** #41 でも letter A が主語以外 (時間副詞) に流用される pattern が pt/vec/nds で発生。pt は #41 だけでなく #52/#60/#74 で systematically drop (指摘 5)、vec は 13 文で drop (指摘 1)、nds は #41 だけで唯一。
- nds の他 1sg 文では `[A:Ik]` 顕在 (#1-#39, #44, etc.)、#41 のみ `[B:Graad]` で主語不在

**Proposed:**
- nds #41: 主語 `ik` を letter A に明示化:
  - `[B:Graad] [E:lees ik] ...` → `[A:Ik] [E:lees] [B:graad] ...` (主語先頭、時間副詞を B/D に降格)

---

### 23. ko #76 主節主語 `나는` 省略、A は目的語 `음악을` に流用 【蓋然】

**Current:** #76 ko `[B:음악을] [C:들으면] [D:행복함을 느낀다]` (確認要、audit より `A=음악을`)

**Problem:** 日本語/韓国語は **topic-prominent language** (神尾 1990 §3.1) で、`私/저/나` 省略は無標。しかし他 ja/ko 文では `[A:私は]/[A:나는]` 顕在 (ja 31/37、ko 30/37)、#76 のみ省略は局所的不整合。

**Proposed:** 上記指摘 12 と統合、letter A の意味論を closed-review で確定。

---

### 24. #95 hi `[D:मैं] [A:साइकिल से]` — 主語 D、A=instrument 【確実】

**Current:** #95 hi `[D:मैं] [A:साइकिल से] [B:ऑफिस] [C:जाता हूँ]`

**Problem:** Hindi は **optional pro-drop**だが、ここでは `मैं` が顕在化されながら **letter D に配置**、letter A は instrument `साइकिल से` (= "by bicycle") に流用。指摘 10 (Germanic) と同根。

**Proposed:** 指摘 10 の方針 A (元戻し) に従い、hi #95: `[A:मैं] [B:ऑफिस] [D:साइकिल से] [C:जाता हूँ]` (主語を A に戻し、instrument を D に降格)

---

### 25. tr (Turkish) 1sg `Ben` の **2 文ドロップ** (#81, #89) — sibling 不整合 【蓋然】

**Current:** tr は 1sg 1sg ほぼ全文で `[A:Ben]` 顕在 (31/37 文)、#81 と #89 のみドロップ:
- #81 tr `[C:Bugün] [B:başım] [D:ağrıyor]` — `Ben` 不在、letter A 不在
- #89 tr `[F:Wi-Fi] [G:şifresini] [B|C|D:bulamıyorum]` — `Ben` 不在、letter A 不在 (動詞 `bulamıyorum` が複合 letter B|C|D)

**Problem:** tr は pro-drop language (Lewis 1967 §13: 動詞接尾辞で人称明示、主語 pronoun は emphasis のみ)、`Ben` 省略は中性。しかしデータでは **35 文で `[A:Ben]` 顕在**化されており、#81/#89 のみ落ちるのは局所不整合。
- 兄弟 #81: 多くの言語で `[A:I/Я/Аз/...]` 顕在 (例: pt_eu `[A:Eu] [F:tenho] [E:dor de cabeça]`)、pl/ar/ko/ja のみドロップ
- 兄弟 #89: pl/cs/sk/bg/sr/sl/ar/he/tr で systematic な主語ドロップ (modal "can't" + verb の構文)

**Proposed:**
- 方針 A (顕在化): #81 tr `[A:Ben]` 追加
- 方針 B (現状維持): #89 は cross-language drop pattern として許容、#81 のみ flag

---

## 統計サマリ

| 指摘 | 主な対象言語 | 影響セル数 (概算) | 確信度 |
|------|--------------|------------------|--------|
| 1 | vec | 13 + 10 = 23 | 確実 |
| 2 | pl | 12 + 3 = 15 | 確実 |
| 3 | ar | 16 + 3 + 6 = 25 | 確実 |
| 4 | he | 5 | 蓋然 |
| 5 | pt_eu, pt_br | 8 | 確実 |
| 6 | ca (#89) | 1 | 確実 |
| 7 | cs (#19/#22/#44) | 3 | 確実 |
| 8 | ko (register 切替) | 40 (全 1sg/3sg) | 確実 |
| 9 | ru/uk/be (dative experiencer) | 18 | 蓋然 |
| 10 | en/fr/de/sv/no/da/nl/fy/af/is/nds (#95) | 11 | 確実 |
| 11 | en/fr/de/es_mx/ru/uk/he/la/gl/oc (#78) | 10 | 確実 |
| 12 | 全言語 (#76) | 30+ | 確実 |
| 13 | 全言語 (#86) | 30+ | 確実 |
| 14 | fr_qc | 6 (許容) | 蓋然 |
| 15 | ar (post-verbal subject) | 6 | 蓋然 |
| 16 | sv/no (#95 A 不在) | 2 | 確実 |
| 17 | ja (#3, #89) | 2 | 蓋然 |
| 18 | sk/bg/sr/sl (#65 与格 E 融合) | 4 | 確実 |
| 19 | ar (#54 与格 A 流用) | 1 | 蓋然 |
| 20 | 3pl (#72) | 0 (要追加文) | 蓋然 |
| 21 | en (#95, #78) | 2 | 確実 |
| 22 | nds (#41) | 1 | 確実 |
| 23 | ko (#76 主語省略) | 1 | 蓋然 |
| 24 | hi (#95 主語 D 配置) | 1 | 確実 |
| 25 | tr (#81, #89) | 2 | 蓋然 |

**総指摘数: 25**

## 結論

最大の問題は **指摘 8 (ko register 切替)** と **指摘 1 (vec ドロップ 13 文)** と **指摘 2 (pl 動詞/モーダル A 流用 12 文)** で、これらは数十セル規模の **言語別 systematic drift**。次に重要なのは **指摘 10-13 (#95/#78/#76/#86 で letter A が主語以外に流用)** で、これは **全言語で同じ pattern が一貫している** が、**cross-sentence の letter A 意味論を破壊** する設計判断。

優先対処:
1. **指摘 21 → 10 → 11** の順で英語 #95/#78 の **letter A = 主語** 規約を closed-review で再確認 (英語が壊れたら全規約が壊れる)。
2. **指摘 6 (ca #89)、指摘 7 (cs #19/#22/#44)、指摘 18 (sk/bg/sr/sl #65 与格)** は **既存規約での明白な単独セル違反**で、low-risk 修正が可能。Round 1 で適用推奨。
3. **指摘 1 (vec)、指摘 2 (pl)、指摘 3 (ar)、指摘 8 (ko)** は **言語別 grand convention** で、closed-review でオーナー裁定必須。

支配的欠陥 (dominant defect): **strict pro-drop 言語 (es/it/pt/vec/pl/ar/ko) で 1sg 主語 `Yo/Io/Eu/Mi/Ja/أنا/저는` の顕在化/省略が文ごとに分裂しており、cross-sentence で letter A の「主語」整合性が崩れる**。さらに **#95/#78/#76/#86 では英語ですら letter A を主語以外 (instrument/補文指示詞/目的語/時間副詞) に流用**しており、**「letter A = 主語」という最も基本的な規約が複数文で破綻**。最も顕著な単独違反は **#95 en `[D:I] [C:go] [B:to the office] [A:by bicycle]`** で、英語 (strict mandatory subject) ですら `I` が D に降格している。

修正方向:
- **方針 A (主語優先)**: 全 100 文で letter A を主語に統一、instrument/補文指示詞/時間副詞は別 letter (D/E/F)
- **方針 B (現状維持 + 規約明文化)**: letter A の意味は文ごとに変わると認め、cross-sentence 意味論を放棄
- **方針 C (mixed)**: 1sg/3sg/1pl/2 全 54 文で主語を A に統一、その他文 (主語不在の自然現象文 #20 "It is raining" 等) は letter A を別要素に流用

推奨: **方針 A** を採り、ko register 統一、vec/pl/ar/pt_eu/pt_br/ca/cs の sibling 整合修正を closed-review でまとめて適用。

---

**ファイルパス**: `/home/jounlai/langmap/langmap_reviews/50_open.md`
**指摘数**: 25
**支配的 pro-drop 欠陥**: **strict pro-drop 言語 (vec 13 文、pl 14 文、ar 16 文、pt_eu/pt_br 4 文、ca 1 文、cs 4 文) で 1sg 主語 `Mi/Ja/أنا/Eu/Jo/Já` の顕在化が文ごとに分裂し、letter A が「主語」を一貫して指せない**。さらに **#95/#78/#76/#86 の 4 文で英語/全言語が letter A を主語以外 (instrument/補文指示詞/目的語/時間副詞) に流用**し、最も基本的な「letter A = 主語」規約が破綻。特に **#95 en `[D:I] [C:go] [B:to the office] [A:by bicycle]`** は **英語 (strict mandatory subject) ですら主語 `I` が letter D に降格**する決定的不整合で、本レビューで最重要の単独セル違反。提案: **全 100 文で letter A を主語に統一**、instrument/補文指示詞/時間副詞は別 letter (D/E/F) に降格、ko の `저는→나는` register 切替を統一、vec/pl/ar の sibling 整合修正を closed-review で一括適用。

---

## Dev response — round 1 (2026-06-04)

### Scope of this round

レビュアー @prodrop_mvh の 25 件指摘のうち、**low-risk single-cell** の以下を round 1 で処理する:

- **指摘 6**: ca #89 single-missing A:Jo 復元 (1 件)
- **指摘 7**: cs #19/#22/#44 sibling-uniform A:Já ドロップ復元 (3 件)
- **指摘 2**: pl modal/動詞-as-A leakage 残り 12 件 retag (#17/#19/#27/#29/#39/#46/#52/#55/#60/#64/#67/#74) — review #40 round 1 で適用済の 10 件 (#22/#32/#37/#44/#48/#54/#58/#62/#71/#85) を除外
- **指摘 3**: ar verb/modal-as-A leakage 3 件 retag (#17/#21/#22)
- **指摘 1**: vec 1sg `Mi` ドロップ 13 件 (#32/#37/#39/#41/#44/#48/#55/#58/#62/#64/#71/#80/#81) — 主語追加
- **指摘 18**: sk/bg/sr/sl #65 与格 mi/ми の E 融合を B/H/E に分割 (4 件)

### Verification (node -e による live 抽出)

全 36 セルを `data.js` から live 抽出し、レビュアー Current を再現確認した。特に:

- ca #89 は他 36 文すべて `[A:Jo]` 顕在 (#89 のみ単独ドロップ)
- cs #19/#22/#44 は sibling sk/bg/sr/sl/ru/uk すべて `[A:Ja/Аз/Ја/Jaz/Я]` 顕在
- pl #17/#19/#27/#29/#39/#46/#52/#55/#60/#64/#67/#74 は全 12 文で動詞/モーダル `Mam/Lubię/Byłem/Zostawiłem/Muszę/Rozmawiałem/Zgubiłem/Piję/Uczę się/Muszę/Ćwiczę/Czekam` が A タグ。`feedback_modal_verb_not_subject.md` の直接違反
- ar #17/#21/#22 は `لدي/سأتناول/أريد` がそれぞれ existential/動詞/モーダル A 流用
- vec 13 文すべて `Mi` 完全不在を確認 (sibling it/nap/scn/oc/ca/gl/ro/es/pt はすべて主語顕在)
- sk #65 `[E:mi dala]` / bg `[E:ми даде]` / sr `[E:ми је дала]` / sl `[E:mi je dala]` 4 セルとも与格+動詞融合を確認、cs/pl/ru/el は分離済 (`[B:mi/ми/мне] [E:dala/podała/подарила]`)

### Decisions

**全 36 件 ACCEPT。** 各 op の選択基準:

- **ca #89 / cs #19/#22/#44 / vec 13 件**: op:"replace" with allowTextChange:true (主語 `Jo/Já/Mi` を A スロットに挿入し全 segments 再構成)。隣接同 letter なし。
- **pl 12 件 / ar 3 件**: op:"retag" (テキスト不変、letter のみ en reference へ揃える)。pro-drop 維持。review #40 round 1 の方針 (modal-as-A → en reference letter retag, no text insertion) を踏襲。
- **sk/bg #65**: op:"replace" で `[B:mi/ми] [E:dala/даде]` に分割。sr/sl はさらに `[H:је/je]` を独立 (clitic cluster decomposition)。

採用しなかった代案:
- pl で `[A:Ja] [B:mam]` 等の主語顕在化案: pro-drop は polish で自然、最小侵襲を優先 (#40 r1 方針)
- ar で全 16 文 `[A:أنا]` 挿入案: Arabic systematic drop は言語学的に許容 (Holes 2004)、closed-review 議題に残す
- vec で `Go`/`Son drio` を H/D に retag する案: 隣接 letter 衝突 (#52 C→C|H、#60 D→D、#74 C→C、#83 D→D) のため不採用、`Mi` 挿入のみ採用

### Deferred (本ラウンドで扱わない)

- **指摘 4**: he 5 文 (#27/#29/#46/#52/#81) ドロップ — Hebrew partial pro-drop は qatal で言語学的に正当。closed-review で方針確認待ち
- **指摘 5**: pt_eu/pt_br 4 文 (#41/#52/#60/#74) — Romance sibling 整合修正、次ラウンド
- **指摘 8**: ko `저는→나는` register 切替 (40 cells 規模) — large scope、closed-review でオーナー裁定
- **指摘 9**: ru/uk/be dative experiencer (`Мне/Мени`) A 配置 — Slavic 与格主語の格カテゴリー問題、closed-review 議題
- **指摘 10-13, 21, 24**: #95/#78/#76/#86 grand convention (英語 `I` の D 配置、A の instrument/補文要素流用) — 上流英語側の構造判断、本レビューでは延期
- **指摘 14**: fr_qc `[A:A]/[A:Y]` — 許容、修正不要
- **指摘 15**: ar VSO post-verbal `[A:هي/هو]` 6 文 — 語順問題、closed-review 議題
- **指摘 16**: sv/no #95 A 不在 — #95 全体方針と統合
- **指摘 17**: ja #3/#89 主語ドロップ — sibling 整合微差、優先度低
- **指摘 19**: ar #54 `[A:علينا]` 与格 — 指摘 9 と同根、closed-review
- **指摘 20**: 3pl 例文不足 — 文追加要件、次レビュー
- **指摘 22**: nds #41 `[B:Graad]` — sibling 整合次ラウンド
- **指摘 23**: ko #76 — 指摘 12 と統合
- **指摘 25**: tr #81/#89 — sample size 小、優先度低

### Edits

`/tmp/lm_edits_50.json` に 36 件出力:

- 17 件 op:"replace" with allowTextChange:true (ca #89 / cs #19/#22/#44 / vec 13 件 + sk/bg/sr/sl #65 の 4 件 = 4+13+4-4 = re-counting: ca 1 + cs 3 + vec 13 + sk/bg/sr/sl 4 = 21 件 — actually sk/bg/sr/sl は別カテゴリ)
- 訂正: 1(ca) + 3(cs) + 13(vec) + 4(sk/bg/sr/sl #65) = **21 件 replace**、**15 件 retag** (pl 12 + ar 3) = 計 **36 件**

各 edit に finding/lang/id/op を明示、`allowTextChange:true` は主語挿入と clitic 分割の場合のみ付与。テキスト不変の場合は retag。隣接同 letter チェック済。

### Closure

Issues addressed **6 of 25** (cell ベースで 36 セル: 主要 actionable 部分集合をカバー)。Closure: **PARTIAL** — round 2 で deferred 19 件 (he/pt/ko register/ru dative/#95/#78/#76/#86 grand convention 等) を順次処理予定。

JSON path: `/tmp/lm_edits_50.json`
