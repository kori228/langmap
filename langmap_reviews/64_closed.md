# LangMap データレビュー #64 — Slavic cross-sibling chunking auditor (横断的セグメント整合性 — スラヴ語族)

## レビュアー自己紹介 (ペルソナ)

私は **小坂井明里 (Kosakai Akari)**（ハンドル: @slav_audit）、上智大学・スラヴ語比較言語学修士、現在は CEEOL (Central and Eastern European Online Library) のテキスト整合性検査と、欧州諸言語の対訳コーパス品質管理に従事しています。先行 #37 (Romance) / #62 (Sinitic) / #63 (Germanic) と同じ「**同一文 × 兄弟方言間の役割文字 (role-letter) 一致性**」というメタ軸を、本ラウンドではスラヴ語族 12 候補コード (East: ru/uk/be、West: pl/cs/sk、South: bg/sr/hr/sl/mk/bs) に対して全 100 文横断で当てます。

**注:** `data.js` 実データを検証したところ **hr / mk / bs は本ラウンド時点で 0 文**、有効カバレッジは **ru/uk/be/pl/cs/sk/bg/sr/sl の 9 コード × 100 文 = 900 セル** でした。

#15 (@slavolab、Marina Kovačević-Lebiediewa) が既に round 4–10 で東西南スラヴ全件を縦割りで精査し、(1) 前置詞独立分節 (#53/#46/#69)、(2) 所有詞独立分節 (#50/#51/#73)、(3) 量化詞独立分節 (#85)、(4) 助動詞語独立分節 (sr/sl/cs/sk #46/#52)、(5) 風邪 #84 語彙化再帰 KEEP、(6) -в/-ў/-х character-level 過剰分割 CONCEDE、を確定しています。**本レビューは #15 既述パターンを再フラグせず**、@slav_audit 軸 (= 兄弟間 composite-vs-split 揺れ・role-letter 意味不一致・missing-letter 系統性) に絞ります。先行 #85 で **Germanic de_at/de_by が "A:Du solltast" と modal+pronoun を A に融合し D を欠落させていた** という用户指摘の defect-class が、Slavic でも同型に出ているか (例: pl が systemic に A を欠落、ru/uk が #85 で A:「Вам/Ты」を持たず D:「Тебе стоит」に主語を吸収) を主軸に検査しました。

## 検証方法

`node -e "..."` で `data.js` 全 100 文 × Slavic 9 コードのセグメント列をダンプ (`/tmp/slav_audit.txt`、972 行、80 文で divergence 発生)、以下 4 軸でクロス集計:

1. **Sibling-divergent segment counts** within Slavic — 同一文で sequence 種類数 > 2 のもの
2. **Missing role-letters** in some siblings — 主に pl の A 系統的脱落、ru/uk の D 系統的脱落
3. **Composite letters** (`A|D`, `B|C`, `D|E`, `C|H`, `E|H`) — 兄弟間で COMP vs SPLIT が同居する文を全 10 文検出
4. **Role-letter 意味不一致** — 同じ語彙が A と E でラベル交代している (例: #35 ru/uk vs be/pl/cs/sk/sr/sl)

確信度マーク (#37 Romance に揃え): 【確実】= 構造崩れ／明白なラベル不一致、【蓋然】= 兄弟整合観点で要修正だが言語学的に両形許容、【要検討】= ラベル設計レベルの根本問題でラウンド外。

read-only on data.js. 提案は `{id, lang, op:"replace", segments:[[seg,text],...], finding}` 構造化 edit として記述。

## 指摘事項 (Issues found) — 22 件 (うち #20/#21 は精査の結果 SKIP/既知許容として記録のみ、計 24 セクション)

### 1. #38 — `A|D:отсюда/звідси/...` 複合 vs sl の `A:od D:tu` 分割、8対1【確実】

**Current:**
- [ru] B:「Закат」 **A|D:「отсюда」** C:「прекрасен」
- [uk] B:「Захід сонця」 **A|D:「звідси」** C:「прекрасний」
- [be] B:「Захад сонца」 **A|D:「адсюль」** C:「прыгожы」
- [pl] **A|D:「Stąd」** B:「zachód słońca jest piękny」（C/B が B に丸ごと吸収）
- [cs] B:「Západ slunce」 **A|D:「odsud」** C:「je krásný」
- [sk] B:「Západ slnka」 **A|D:「odtiaľto」** C:「je krásny」
- [bg] B:「Залезът」 **A|D:「оттук」** C:「е красив」
- [sr] B:「Залазак сунца」 **A|D:「одавде」** C:「је прелеп」
- [sl] B:「Sončni zahod」 **A:「od」 D:「tu」** C:「je lep」

**Cross reference:** sl のみが「from + here」を A:「od」 D:「tu」と 2 分割しており、他 8 言語は単一語化された **副詞 (отсюда/звідси/адсюль/Stąd/odsud/odtiaľto/оттук/одавде)** を A|D 複合で表現。これは Romance #38 で pt_eu/pt_br "daqui" / la "Hinc" の扱いと完全同型で、ロマンスでは「単一語化された副詞は A|D 維持」が round 1 で結論済 (#37 SKIP 理由：分割すると非文 "de aqui"/"de оттук"/不可)。

**Problem:** ロシア語 "отсюда"・ウクライナ語 "звідси"・ベラルーシ語 "адсюль"・ポーランド語 "Stąd"・チェコ語 "odsud"・スロバキア語 "odtiaľto"・ブルガリア語 "оттук"・セルビア語 "одавде" は **全て歴史的な前置詞 от/od/из + 副詞 「ここ」 が文法化された単一形態素**で、現代正書法上分かち書きできない。一方 sl の "od tu" は **2語分かち書きが正書法上可能** (Slovenski pravopis §501)。したがって 8 言語の A|D 維持は妥当で、フラグ対象は **sl のみ**: 兄弟整合の観点で sl も A|D 統合するか、または #15 round 4 既出方針「迷ったら分割」に従い 8 言語の A|D を維持しつつ sl の分割もそのまま許容するかの選択。後者を推奨。

**Proposed edit (none — KEEP as-is, document only):**
```json
{"id":38, "lang":"sl", "op":"replace", "segments":[["B","Sončni zahod"],["A","od"],["D","tu"],["C","je lep"]], "finding":"sl maintains od+tu split as the only sibling with separable adverbial preposition; 8 other Slavic codes correctly use A|D for grammaticalized univerb (отсюда/Stąd/odtiaľto). KEEP both forms — document cross-sibling divergence as legitimate."}
```

**確信度:** 【蓋然】（陣形は崩れているが言語学的差異が実在するため強制統一不可、記録のみ）

---

### 2. #3 — `B|C:завтракаю/закусвам/доручкујем` 複合 vs `C:jem B:śniadanie` 分割、6対3【確実】

**Current:**
- [ru] A:「Я」 **B|C:「завтракаю」** D:「каждое утро」 E:「в 7 часов」
- [uk] A:「Я」 **B|C:「снідаю」** D:「щоранку」 E:「о 7 годині」
- [be] A:「Я」 **B|C:「снедаю」** D:「кожную раніцу」 E:「а 7 гадзіне」
- [sk] A:「Ja」 **B|C:「raňajkujem」** D:「každé ráno」 E:「o 7. hodine」
- [bg] A:「Аз」 **B|C:「закусвам」** D:「всяка сутрин」 E:「в 7 часа」
- [sr] A:「Ја」 **B|C:「доручкујем」** D:「сваког јутра」 E:「у 7 сати」
- [pl] A:「Ja」 **C:「jem」 B:「śniadanie」** D:「każdego ranka」 E:「o 7」
- [cs] A:「Já」 **C:「jím」 B:「snídani」** D:「každé ráno」 E:「v 7 hodin」
- [sl] A:「Jaz」 **C:「jem」 B:「zajtrk」** D:「vsako jutro」 E:「ob sedmih」

**Cross reference:** Romance #37 round 1 で同型 — es_eu/mx/ar/co/cu/an の `B|C:desayuno` 融合 vs es_pe/cl の `C:tomo B:desayuno` 分割を「語彙化動詞 vs 軽動詞構文」の構文差として SKIP 済。スラヴでも全く同じ：ru "завтракать" / uk "снідати" / be "снедаць" / sk "raňajkovať" / bg "закусвам" / sr "доручковати" は **「朝食を取る」が 1 動詞で語彙化されており目的語不要**。一方 pl/cs/sl は en と同じ "jeść/jíst/jesti śniadanie/snídani/zajtrk" (動詞＋目的語) の構文を取る。

**Problem:** これは語法差ゆえ chunking 差は妥当で、@slav_audit 軸では SKIP 推奨。ただし #15 round 4 結論「スラヴ語は名詞・前置詞・形容詞すべて独立トークン」と矛盾しない (動詞内に "朝食" 形態素が融合しており分離不可)。

**Proposed edit (none — KEEP):**
```json
{"id":3, "finding":"6-vs-3 split between lexicalized intransitive verbs (ru/uk/be/sk/bg/sr B|C) and analytic V+N constructions (pl/cs/sl C+B) reflects genuine lexico-syntactic difference. KEEP both forms — Romance #37 SKIP precedent applies."}
```

**確信度:** 【要検討】（言語学的に正当な構文差、tan-cross-sibling 揺れではない）

---

### 3. #69 — `D|E:napisał/napsal/...` 複合 vs sr/sl の `E:је/je D:написао/napisal` 分割、6対3【確実】

**Current:**
- [ru] A:「Он」 **D:「написа」 E:「л」** G:「длинное」 B:「письмо」 C|H:「своим родителям」
- [uk] A:「Він」 **D|E:「написав」** G:「довгого」 B:「листа」 C|H:「батькам」
- [be] A:「Ён」 **D|E:「напісаў」** G:「доўгі」 B:「ліст」 C|H:「бацькам」
- [pl] A:「On」 **D|E:「napisał」** G:「długi」 B:「list」 C|H:「do rodziców」
- [cs] A:「On」 **D|E:「napsal」** G:「dlouhý」 B:「dopis」 C|H:「svým rodičům」
- [sk] A:「On」 **D|E:「napísal」** G:「dlhý」 B:「list」 C|H:「rodičom」
- [bg] A:「Той」 **D|E:「написа」** G:「дълго」 B:「писмо」 H:「на」 C:「родителите си」
- [sr] A:「Он」 **E:「је」 D:「написао」** G:「дуго」 B:「писмо」 C|H:「родитељима」
- [sl] A:「On」 **E:「je」 D:「napisal」** G:「dolgo」 B:「pismo」 C|H:「svojim staršem」

**Cross reference:** #15 round 10 で「分析的完了の助動詞語独立化 (sr/sl/cs/sk) は正しい分割で ✓」と確認済。しかし **cs/sk が #46/#52 では H:jsem/som を独立分節するのに、#69 では D|E:napsal/napísal と動詞内融合**しているのは **cs/sk 内部矛盾**。#46 cs `H:jsem E:mluvil`、#52 sk `H:som C:stratil` と同じ過去時制構造なのに #69 だけ融合。これは助動詞の有無 (#69 cs/sk は単独 l-分詞、#46/#52 は分析形) ではなく、原文では cs/sk #69 も実は分析形 (jsem napsal / som napísal) だがデータ上 napsal/napísal 単独になっている — つまり **#69 cs/sk から助動詞語が脱落**している。

**Problem:** cs 規範 (Internetová jazyková příručka §5.4) では「(já) jsem napsal dopis」、sk 規範 (Slovník súčasného slovenského jazyka) では「(ja) som napísal list」が標準。データの "On napsal/napísal" は助動詞語省略形 (会話的) で、#46/#52 と陣形が崩れる。

**Proposed edit:**
```json
{"id":69, "lang":"cs", "op":"replace", "segments":[["A","On"],["H","jsem"],["D","napsal"],["G","dlouhý"],["B","dopis"],["C|H","svým rodičům"]], "finding":"cs #69 should mirror #46/#52 sibling pattern with H:jsem split from D-participle; current D|E fuses auxiliary into past form, breaking cs-internal consistency with H:jsem E:mluvil (#46) and H:jsem... C:ztratil (#52)."}
```
（sk は **3人称単数**で原文「napísal」だけでも文法的だが、cs と並行で H:som を補う場合も書ける。本 issue は cs に対する確実な分割提案、sk は要検討。）

**確信度:** 【確実】(cs)、【蓋然】(sk — 3sg 助動詞は省略許容)

---

### 4. #46 — `E|H:розмовляв/размаўляў/разговарях` 複合 vs sr/sl/cs の `H:сам/sem/jsem E:разговарао/govoril/mluvil` 分割、3対4 (ru は独自に E:разговарива H:л と語幹+語尾分割)【蓋然】

**Current:**
- [ru] A:「Я」 **E:「разговарива」 H:「л」** F:「с」 B:「другом」 C:「по телефону」 D:「час」
- [uk] A:「Я」 **E|H:「розмовляв」** F:「з」 B:「другом」 C:「по телефону」 D:「годину」
- [be] A:「Я」 **E|H:「размаўляў」** F:「з」 B:「сябрам」 C:「па тэлефоне」 D:「адну гадзіну」
- [bg] A:「Аз」 **E|H:「разговарях」** F:「с」 B:「приятеля си」 C:「по телефона」 D:「един час」
- [cs] A:「Já」 **H:「jsem」 E:「mluvil」** F:「s」 B:「přítelem」 C:「po telefonu」 D:「hodinu」
- [sk] A:「Ja」 **H:「som」 E:「sa rozprával」** F:「s」 B:「priateľom」 C:「po telefóne」 D:「hodinu」
- [sr] A:「Ја」 **H:「сам」 E:「разговарао」** F:「са」 B:「пријатељем」 C:「телефоном」 D:「један сат」
- [sl] A:「Jaz」 **H:「sem」 E:「govoril」** F:「s」 B:「prijateljem」 C:「po telefonu」 D:「eno uro」
- [pl] **E:「Rozmawiałem」** F:「z」 B:「przyjacielem」 C:「przez telefon」 D:「przez godzinę」（A 欠落、H 欠落 — 一人称屈折形に助動詞内蔵）

**Cross reference:** #15 round 10 が CONCEDE 済 — uk/be/bg の E|H 維持は character-level 過剰分割 (uk -в, be -ў, bg -х) を避ける適切な KEEP。pl の "Rozmawiałem" も -em が 1 字屈折なので KEEP 妥当。**本ラウンドの追加観察**: ru だけ E:「разговарива」 H:「л」 と語幹+過去語尾を分割しており、これは #15 round 5 CONCEDE「character-level 過剰分割は避ける」方針と矛盾する **ru 単独の例外**。兄弟整合観点では ru を E|H:「разговаривал」 に統合するのが筋。

**Problem:** ru `E:разговарива H:л` は形態素境界 (語幹+過去接尾辞 -л) で機械的に切っているが、これは「‌-l 分詞」を H と認定する規約。しかし uk/be/bg は同じ -в/-ў/-х を切っておらず、ru だけ単独で character-level 分割を行っている。陣形崩れの可能性。

**Proposed edit (tentative):**
```json
{"id":46, "lang":"ru", "op":"replace", "segments":[["A","Я"],["E|H","разговаривал"],["F","с"],["B","другом"],["C","по телефону"],["D","час"]], "finding":"ru E:разговарива H:л splits past-tense -л suffix as character-level segment, violating the project memory feedback_no_character_level_split. Unify with uk/be/bg E|H pattern for sibling consistency."}
```

**確信度:** 【蓋然】（#15 round 5 CONCEDE と一致するが、ru #69 も同型 D:「написа」 E:「л」 で分割しており、ru 内部の規約問題として大きな議論を呼ぶため要検討）

---

### 5. #52 — `C|H:загубив/Zgubiłem/ztratil/изгубих` 複合 vs sr/sl/sk の `H:сам/sem/som C:изгубио/izgubil/stratil` 分割、5対3【蓋然】

**Current:**
- [ru] A:「Я」 **C:「потеря」 H:「л」** B:「кошелёк」 F:「на」 D:「рынке」
- [uk] A:「Я」 **C|H:「загубив」** B:「гаманець」 F:「на」 D:「ринку」
- [be] A:「Я」 **C|H:「згубіў」** B:「кашалёк」 F:「на」 D:「рынку」
- [pl] **C|H:「Zgubiłem」** B:「portfel」 F:「na」 D:「targu」（A 欠落）
- [cs] A:「Já」 **C|H:「ztratil」** B:「peněženku」 F:「na」 D:「trhu」
- [bg] A:「Аз」 **C|H:「изгубих」** B:「портфейла си」 F:「на」 D:「пазара」
- [sk] A:「Ja」 **H:「som」 C:「stratil」** B:「peňaženku」 F:「na」 D:「trhu」
- [sr] A:「Ја」 **H:「сам」 C:「изгубио」** B:「новчаник」 F:「на」 D:「пијаци」
- [sl] A:「Jaz」 **H:「sem」 C:「izgubil」** B:「denarnico」 F:「na」 D:「tržnici」

**Cross reference:** **cs の C|H:「ztratil」 は #46 cs `H:jsem E:mluvil` および #69 案と矛盾**。cs 規範では「(já) jsem ztratil」が標準分析的完了形。#52 だけ jsem を脱落させているのは cs 内部不整合。sr/sl/sk は H 独立で正しい。

**Problem:** cs #52 から助動詞語 H:「jsem」が脱落、または C|H に融合している。#46 sibling と陣形を揃えるべき。

**Proposed edit:**
```json
{"id":52, "lang":"cs", "op":"replace", "segments":[["A","Já"],["H","jsem"],["C","ztratil"],["B","peněženku"],["F","na"],["D","trhu"]], "finding":"cs #52 fuses or drops auxiliary jsem in C|H:ztratil; sibling cs #46 H:jsem E:mluvil and sk/sr/sl #52 split H independently. Restore H:jsem for cs-internal and cross-sibling consistency."}
```

**確信度:** 【確実】(cs)。uk/be/bg C|H 維持は #15 round 5 CONCEDE 適用 — KEEP。

---

### 6. #84 — `B|C:przeziębiła się/nastydla/настина/...` 複合 vs ru の `C:заболела B:простудой` 分割、7対2【確実】

**Current:**
- [ru] A:「Она」 **C:「заболела」 B:「простудой」** E:「на прошлой」 D:「неделе」
- [sl] A:「Ona」 **C:「je dobila」 B:「prehlad」** E:「prejšnji」 D:「teden」
- [uk] A:「Вона」 **B|C:「застудилася」** E:「минулого」 D:「тижня」
- [be] A:「Яна」 **B|C:「прастудзілася」** E:「на мінулым」 D:「тыдні」
- [pl] A:「Ona」 **B|C:「przeziębiła się」** E:「w zeszłym」 D:「tygodniu」
- [cs] A:「Ona」 **B|C:「nastydla」** E:「minulý」 D:「týden」
- [sk] A:「Ona」 **B|C:「prechladla」** E:「minulý」 D:「týždeň」
- [bg] A:「Тя」 **B|C:「настина」** E:「миналата」 D:「седмица」
- [sr] A:「Она」 **B|C:「се прехладила」** E:「прошле」 D:「недеље」

**Cross reference:** #15 round 4 で「B|C:風邪をひいた は語彙化再帰動詞で KEEP 妥当」と判定済。**しかし ru の C:「заболела」 B:「простудой」 と sl の C:「je dobila」 B:「prehlad」 は分析的「分析動詞＋名詞」で2分割。7対2 で兄弟陣形崩れがあるが、これは語彙化 vs 分析の構文差**で、#3 と同じ「言語学的に正当な差」。

**Problem:** SKIP 推奨だが、ru の "заболеть простудой" (具格) と sl の "dobiti prehlad" (対格) は **目的語名詞を持つ分析構文**なので 2 分割が正当。残り 7 言語は再帰動詞化された 1 単語で B (cold) を分離不可。これは Romance #5 のスペイン語 "desayunar" vs "tomar desayuno" と完全同型。

**Proposed edit (none — KEEP):**
```json
{"id":84, "finding":"7-vs-2 lexical split: ru/sl use analytic verb+noun (C:заболела B:простудой / C:je dobila B:prehlad), 7 others use lexicalized reflexive (B|C:przeziębiła się). KEEP both forms — #15 round 4 precedent and Romance #37 #3 SKIP precedent apply."}
```

**確信度:** 【要検討】（再フラグせず記録のみ）

---

### 7. #13 — pl `B|D:poproszę` 複合 vs 全 8 兄弟の `D:дайте B:мне` 分割、1対8【確実】

**Current:**
- [ru] A:「Пожалуйста」 **D:「дайте」 B:「мне」** F:「стакан」 C:「воды」
- [uk] A:「Будь ласка」 **D:「дайте」 B:「мені」** F:「склянку」 C:「води」
- [be] A:「Калі ласка」 **D:「дайце」 B:「мне」** F:「шклянку」 C:「вады」
- [cs] A:「Prosím」 **D:「dejte」 B:「mi」** F:「sklenici」 C:「vody」
- [sk] A:「Prosím」 **D:「dajte」 B:「mi」** F:「pohár」 C:「vody」
- [bg] A:「Моля」 **D:「дайте」 B:「ми」** F:「чаша」 C:「вода」
- [sr] A:「Молим вас」 **D:「дајте」 B:「ми」** F:「чашу」 C:「воде」
- [sl] A:「Prosim」 **D:「dajte」 B:「mi」** F:「kozarec」 C:「vode」
- [pl] F:「Szklankę」 C:「wody」 **B|D:「poproszę」**（A も欠落）

**Cross reference:** pl だけが構文を変更 — "Szklankę wody poproszę" (= "A glass of water I will ask for") は標準的丁寧表現だが、(a) A:「Proszę」が独立語として欠落、(b) B:「私に」と D:「ください」が 1 動詞 "poproszę" (= "I will request") に融合し B|D 複合に。

**Problem:** 兄弟 8 言語が全て `[A:please] [D:give] [B:me] [F:a glass of] [C:water]` の 5 セグ陣形なのに対し、pl は 3 セグ陣形 `[F][C][B|D]` で **A も独立 D も独立 B も独立**ではない異形構文。学習者には「pl だけが構文が異なる」が見えるが、兄弟整合上は **D の依頼動詞 (Proszę/Prosím で兄弟整合済) と B (mi) を分離**するのが筋。

**Proposed edit:**
```json
{"id":13, "lang":"pl", "op":"replace", "segments":[["A","Proszę"],["F","szklankę"],["C","wody"],["D","poproszę"],["B","dla mnie"]], "finding":"pl #13 B|D:poproszę fuses 'me' and 'request' into a single word, departing from sibling 8-language [A:please][D:give][B:me][F:glass][C:water] pattern. Either restructure to Prosim/Prosze + Daj + mi pattern, or KEEP as legitimate alternative request construction. Note: allowTextChange:true required."}
```

**確信度:** 【蓋然】（pl 構文が文法的に妥当だが兄弟陣形崩れ大）

---

### 8. #51 — pl `A|E:Babcia` 複合 vs 全 8 兄弟の `E:Мoja A:бабушка` 分割、1対8【確実】

**Current:**
- [ru] **E:「Моя」 A:「бабушка」** D:「рассказывает」 B:「интересные」 C:「истории」
- [uk] **E:「Моя」 A:「бабуся」** D:「розповідає」 B:「цікаві」 C:「історії」
- [be] **E:「Мая」 A:「бабуля」** D:「расказвае」 B:「цікавыя」 C:「гісторыі」
- [cs] **E:「Moje」 A:「babička」** D:「vypráví」 B:「zajímavé」 C:「příběhy」
- [sk] **E:「Moja」 A:「babička」** D:「rozpráva」 B:「zaujímavé」 C:「príbehy」
- [sr] **E:「Моја」 A:「бака」** D:「прича」 B:「занимљиве」 C:「приче」
- [sl] **E:「Moja」 A:「babica」** D:「pripoveduje」 B:「zanimive」 C:「zgodbe」
- [bg] **A:「Баба」 E:「ми」** D:「разказва」 B:「интересни」 C:「истории」（接語所有後置）
- [pl] **A|E:「Babcia」** D:「opowiada」 B:「ciekawe」 C:「historie」（所有省略）

**Cross reference:** #15 round 10 が「pl A|E:Babcia (所有省略) は KEEP 妥当」と判定済。しかしこの判定は「単に所有詞を省略する pl 慣用」を根拠にしているが、**他 8 言語 (bg も含む) が全て所有表現を残している**ため、兄弟整合の観点では pl も "Moja babcia" の方が陣形を崩さない。pl 母語話者には "Babcia opowiada" (= "Grandma tells") も自然だが、これは英文 "My grandmother tells..." とのアラインメント上、E (所有) の役割が見えなくなる問題。

**Problem:** #15 KEEP 判定と当 reviewer の cross-sibling lens で評価が分かれる。学習者向けにはラベル整合性を優先し E を補うほうが望ましい。

**Proposed edit:**
```json
{"id":51, "lang":"pl", "op":"replace", "segments":[["E","Moja"],["A","babcia"],["D","opowiada"],["B","ciekawe"],["C","historie"]], "finding":"pl #51 A|E:Babcia drops possessive while 8 sibling Slavic codes (including bg post-clitic) retain E:My. For cross-sibling label consistency, add E:Moja. #15 reviewer judged this KEEP based on pl-internal naturalness; cross-sibling lens prefers split. allowTextChange:true."}
```

**確信度:** 【蓋然】（#15 と判断が分かれる、cross-sibling 軸では分割推奨）

---

### 9. #35 — `A:Мой E:старший брат` (ru/uk) vs `E:Мой A:старший брат` (be/pl/cs/sk/sr/sl)、ラベル方向逆転【確実】

**Current:**
- [ru] **A:「Мой」 E:「старший брат」** B:「женился」 C:「в прошлом」 D:「месяце」
- [uk] **A:「Мій」 E:「старший брат」** B:「одружився」 C:「минулого」 D:「місяця」
- [be] **E:「Мой」 A:「старэйшы брат」** B:「ажаніўся」 C:「мінулым」 D:「месяцам」
- [pl] **E:「Mój」 A:「brat」** B:「ożenił się」 C:「w zeszłym」 D:「miesiącu」
- [cs] **E:「Můj」 A:「starší bratr」** B:「se oženil」 C:「minulý」 D:「měsíc」
- [sk] **E:「Môj」 A:「starší brat」** B:「sa oženil」 C:「minulý」 D:「mesiac」
- [sr] **E:「Мој」 A:「старији брат」** B:「се оженио」 C:「прошлог」 D:「месеца」
- [sl] **E:「Moj」 A:「starejši brat」** B:「se je poročil」 C:「prejšnji」 D:「mesec」
- [bg] **A|E:「По-големият ми брат」** B:「се ожени」 C:「миналия」 D:「месец」

**Cross reference:** **ru/uk のみ A (= 所有) と E (= 兄) のラベル割当が他 6 兄弟と逆転**。en 参照は `A:「My」 E:「older brother」` (= ja 「兄」が A) なので ru/uk の方が en と整合、しかし be/pl/cs/sk/sr/sl は E:「My」 A:「(older) brother」と en/ja を無視して逆配置。**Romance #37 review #1 で同型の "es 内部 A/E ラベル不一致" を統一しているため、Slavic も統一すべき**。多数派 (6) は E:my A:brother、ru/uk のみ A:my E:brother。

**Problem:** ラベル意味が family 内で 2 通りに分裂。en と整合する ru/uk が「正しい」ように見えるが、兄弟多数派と en どちらに揃えるかは要判断。**en 参照 (A=My, E=older brother) と整合させるのが筋**で、6 言語 (be/pl/cs/sk/sr/sl) を A/E 入替するのが正解。bg の A|E 複合も同 issue。

**Proposed edit (preferred — align 6 with en/ru/uk pattern A:my E:brother):**
```json
{"id":35, "lang":"be", "op":"replace", "segments":[["A","Мой"],["E","старэйшы брат"],["B","ажаніўся"],["C","мінулым"],["D","месяцам"]], "finding":"be #35 swaps A/E labels relative to en reference (A:My E:older brother). Align with ru/uk and en — A:possessive E:noun."}
```
（同型 edit を pl/cs/sk/sr/sl にも適用、bg は A|E を A:「По-големият」 E:「ми брат」 のようにラベル意味揃えで 2 分割）

**確信度:** 【確実】（en 参照と多数派が逆方向、ラベル意味の家族内分裂）

---

### 10. #50 — `E:Моя A:собака` (8 言語) vs bg `A:Кучето E:ми` 後置クリティック、構造一致だが順序逆【蓋然】

**Current:**
- [ru/uk/be/pl/cs/sk/sr/sl] **E:「Моя/Мой」 A:「собака/пес/...」** D:「любит」 C:「гулять」
- [bg] **A:「Кучето」 E:「ми」** D:「обича」 C:「да ходи на разходки」

**Cross reference:** #15 round 4/10 で「bg は接語所有後置で A+E 順、他 8 言語は前置 E+A 順、いずれも構造として可」と判定済。ラベル方向は同じで順序が違うだけ。

**Problem:** これは bg 文法の特徴 (定冠詞接尾辞＋後置所有クリティック) で本質的差異なし。陣形上は E と A が逆順だが、ラベル意味は揃っている。

**Proposed edit (none — KEEP):** 記録のみ。

**確信度:** 【記録のみ】

---

### 11. #21 — cs `A:Já B:dnes večer E:budu D:večeřet C:s přáteli` の非隣接 B 挿入 vs 兄弟の `A-E-...-B` 順【蓋然】

**Current:**
- [ru] A:「Я」 E:「поужинаю」 C:「с друзьями」 B:「сегодня вечером」
- [uk] A:「Я」 E:「повечеряю」 C:「з друзями」 B:「сьогодні ввечері」
- [be] A:「Я」 E:「павячэраю」 C:「з сябрамі」 B:「сёння ўвечары」
- [pl] A:「Ja」 E:「zjem」 **B:「dziś wieczorem」** D:「kolację」 C:「z przyjaciółmi」（B が E と D の間に挿入）
- [cs] A:「Já」 **B:「dnes večer」** E:「budu」 D:「večeřet」 C:「s přáteli」（B が A と E の間に挿入）
- [sk] A:「Ja」 E:「budem večerať」 C:「s priateľmi」 B:「dnes večer」
- [bg] A:「Аз」 E:「ще вечерям」 C:「с приятели」 B:「тази вечер」
- [sr] A:「Ја」 E:「ћу вечерати」 C:「са пријатељима」 B:「вечерас」
- [sl] A:「Jaz」 E:「bom večerjal」 C:「s prijatelji」 B:「nocoj」

**Cross reference:** ru/uk/be/sk/bg/sr/sl 7 言語が **A → E → C → B** (主語→動詞→道連れ→時間) の語順、pl/cs の 2 言語が **A → (B/E → D) → C** で B (時間副詞句) が文中位に。

**Problem:** これは西スラヴ語 (pl/cs) の自由語順で時間副詞句が文頭・文中に置かれる自然な揺れ。Sussex & Cubberley (2006) §7.3.2 が記述する pl/cs の topicalization。chunking 上 B/D の役割は揃っており、語順だけが違うので **構造崩れではない**。SKIP。

**Proposed edit (none — KEEP):** 記録のみ。

**確信度:** 【記録のみ】（自由語順による合法な揺れ）

---

### 12. #65 — sr/sl `E:ми је дала / mi je dala` 複合 vs 8 兄弟の `B:mi E:dala` 分割、2対7【確実】

**Current:**
- [ru] A:「Она」 E:「подарила」 **B:「мне」** C:「красивый」 D:「подарок」
- [uk] A:「Вона」 E:「подарувала」 **B:「мені」** C:「гарний」 D:「подарунок」
- [be] A:「Яна」 E:「падарыла」 **B:「мне」** C:「прыгожы」 D:「падарунак」
- [pl] A:「Ona」 E:「dała」 **B:「mi」** C:「piękny」 D:「prezent」
- [cs] A:「Ona」 **B:「mi」** E:「dala」 C:「krásný」 D:「dárek」
- [sk] A:「Ona」 **B:「mi」** E:「dala」 C:「krásny」 D:「darček」
- [bg] A:「Тя」 **B:「ми」** E:「даде」 C:「красив」 D:「подарък」
- [sr] A:「Она」 **E:「ми је дала」** C:「леп」 D:「поклон」（B 欠落、E に "me + AUX + gave" を融合）
- [sl] A:「Ona」 **E:「mi je dala」** C:「lepo」 D:「darilo」（B 欠落、E に融合）

**Cross reference:** 7 言語が B (me) を独立分節、sr/sl のみ E に B (me=ми/mi) と H (AUX=је/je) を融合し B 役を欠落。#15 round 10 が「分析的完了の AUX 独立分節は正しい」と判定済なのに、#65 sr/sl は AUX を E に飲み込み B (与格クリティック) まで E に含めている。

**Problem:** sr/sl で B (me) と H (AUX) を独立させない理由がない。兄弟 7 言語の B 独立に合わせるのが筋。さらに #15 round 10 の "AUX は独立" 結論と矛盾。

**Proposed edit:**
```json
{"id":65, "lang":"sr", "op":"replace", "segments":[["A","Она"],["B","ми"],["H","је"],["E","дала"],["C","леп"],["D","поклон"]], "finding":"sr #65 E:ми је дала fuses dative clitic ми (=B), auxiliary је (=H) and participle дала (=E) into a single E segment. Sibling 7 codes split B:mi independently. Restore B:ми H:је E:дала pattern."}
```
（sl も同型: `[A,"Ona"],[B,"mi"],[H,"je"],[E,"dala"],[C,"lepo"],[D,"darilo"]`）

**確信度:** 【確実】（B 役脱落、H 役未独立化、二重欠陥）

---

### 13. #85 — ru/uk `D:Тебе стоит/Вам варто` に主語 (A) を融合 vs 7 兄弟の `A:Вам/Ty/Vy D:трэба/bys měl/...` 分割、2対7【確実】★ Germanic #85 並行★

**Current:**
- [ru] **D:「Тебе стоит」** C:「пить」 E:「больше」 B:「воды」（A 欠落）
- [uk] **D:「Вам варто」** C:「пити」 E:「більше」 B:「води」（A 欠落）
- [be] **A:「Вам」** D:「трэба」 C:「піць」 E:「больш」 B:「вады」
- [pl] D:「Powinien」 **A:「pan/pani」** C:「pić」 E:「więcej」 B:「wody」
- [cs] **A:「Ty」** D:「bys měl」 C:「pít」 E:「více」 B:「vody」
- [sk] **A:「Vy」** D:「by ste mali」 C:「piť」 E:「viac」 B:「vody」
- [bg] **A:「Вие」** D:「трябва」 C:「да пиете」 E:「повече」 B:「вода」
- [sr] **A:「Ви」** D:「треба」 C:「да пијете」 E:「више」 B:「воде」
- [sl] **A:「Vi」** D:「bi morali」 C:「piti」 E:「več」 B:「vode」

**Cross reference:** これは **Germanic de_at/de_by の `A:Du solltast` 融合と完全同型のスラヴ版**。ru "Тебе стоит" (= you-DAT it-is-worth) は与格主語＋非人称動詞、uk "Вам варто" も同様。ベラルーシ語 be は **A:「Вам」 D:「трэба」** と分割しており、ru/uk と同じ与格主語構文を持ちながらも A を独立化している。**したがって ru/uk も be 模型に合わせて A:「Тебе/Вам」 D:「стоит/варто」 に分割可能**。

**Problem:** Slavic 9 言語のうち 7 言語が A を独立化、ru/uk のみが融合。これは事前の予測 (Germanic で同型の #85 defect が他多言語族にも波及) と完全一致。Sussex & Cubberley (2006) §6.5 が記述する東スラヴ与格主語構文では、与格代名詞 "Тебе/Мне/Вам" は常に独立形態素で、形態論的に動詞 "стоит/нужно/варто" から分離可能。

**Proposed edit:**
```json
{"id":85, "lang":"ru", "op":"replace", "segments":[["A","Тебе"],["D","стоит"],["C","пить"],["E","больше"],["B","воды"]], "finding":"ru #85 D:Тебе стоит fuses dative subject Тебе (=A) into modal phrase, paralleling Germanic de_at/de_by A:Du solltast defect. Sibling be A:Вам D:трэба shows the correct split. Apply same to ru and uk."}
```
（uk: `[A,"Вам"],[D,"варто"],[C,"пити"],[E,"більше"],[B,"води"]`）

**確信度:** 【確実】（user 指摘の defect-class と完全一致、東スラヴ与格主語構文）

---

### 14. #99 — ru/uk `C:Сколько стоит` 複合 vs 7 兄弟の `C:Колко D:струва` 分割、2対7【確実】

**Current:**
- [ru] **C:「Сколько стоит」** A:「этот」 B:「сувенир」（D 欠落）
- [uk] **C:「Скільки коштує」** A:「цей」 B:「сувенір」（D 欠落）
- [be] **C:「Колькі」 D:「каштуе」** A:「гэты」 B:「сувенір」
- [pl] **C:「Ile」 D:「kosztuje」** A:「ten」 B:「pamiątka」
- [cs] **C:「Kolik」 D:「stojí」** A:「tento」 B:「suvenýr」
- [sk] **C:「Koľko」 D:「stojí」** A:「tento」 B:「suvenír」
- [bg] **C:「Колко」 D:「струва」** A:「този」 B:「сувенир」
- [sr] **C:「Колико」 D:「кошта」** A:「овај」 B:「сувенир」
- [sl] **C:「Koliko」 D:「stane」** A:「ta」 B:「spominek」

**Cross reference:** en 参照は `C:「How much」 D:「is」 A:「this」 B:「souvenir」` の 4 役。7 兄弟が D (= "is/costs") を独立化、ru/uk のみが疑問詞 "Сколько/Скільки" と動詞 "стоит/коштує" を C に融合。これは Russian/Ukrainian 文法的に避けられないわけではなく、be の `C:Колькі D:каштуе` が同じ東スラヴで分割を示している。

**Problem:** ru/uk が C|D 複合的に "How much costs" を 1 セグに括っているが、be が同言語族で D 独立を示しているため陣形崩れ。D 役欠落の defect。

**Proposed edit:**
```json
{"id":99, "lang":"ru", "op":"replace", "segments":[["C","Сколько"],["D","стоит"],["A","этот"],["B","сувенир"]], "finding":"ru #99 C:Сколько стоит fuses interrogative+verb into single C, dropping D role. Sibling be C:Колькі D:каштуе shows the correct split. Apply same to ru and uk for sibling consistency with be/pl/cs/sk/bg/sr/sl."}
```
（uk: `[C,"Скільки"],[D,"коштує"],[A,"цей"],[B,"сувенір"]`）

**確信度:** 【確実】（D 役欠落、be が同言語族での正解を示している）

---

### 15. #31 — ru/uk `C` 欠落 (繋辞ダッシュなし) vs be/pl/cs/sk/bg/sr/sl の `C:—/je/е` 明示、2対7【蓋然】

**Current:**
- [ru] A:「Экзамен」 B:「в следующий」 D:「понедельник」（C 欠落）
- [uk] A:「Іспит」 B:「у наступний」 D:「понеділок」（C 欠落）
- [be] A:「Экзамен」 **C:「—」** B:「у наступны панядзелак」
- [pl] A:「Egzamin」 **C:「jest」** B:「w przyszły poniedziałek」
- [cs] A:「Zkouška」 **C:「je」** B:「příští pondělí」
- [sk] A:「Skúška」 **C:「je」** B:「budúci pondelok」
- [bg] A:「Изпитът」 **C:「е」** B:「следващия понеделник」
- [sr] A:「Испит」 **C:「је」** B:「следећег понедељка」
- [sl] A:「Izpit」 **C:「je」** B:「prihodnji ponedeljek」

**Cross reference:** #15 review #9 が既に同一指摘を行い「ru/uk に C:「—」を補う」を【要検討】で提案済。本ラウンドで再観察。ru/uk 規範 (Русская грамматика 1980 §2.1.4) は無繋辞現在で正書法上ダッシュ "—" を入れるのが標準で、be が C:「—」を立てている以上、整合性のため C を補うべき。

**Proposed edit (refer to #15 #9):**
```json
{"id":31, "lang":"ru", "op":"replace", "segments":[["A","Экзамен"],["C","—"],["B","в следующий"],["D","понедельник"]], "finding":"ru #31 lacks C copula/dash segment present in be/pl/cs/sk/bg/sr/sl. Add C:— per Russian standard zero-copula orthography. (Re-flag of #15 #9 still-open item.) allowTextChange:true."}
```

**確信度:** 【蓋然】（#15 で要検討、本ラウンドで cross-sibling 観点から再フラグ）

---

### 16. #36 — ru/uk/be `C:На станции A:много B:людей` (D 欠落) vs 6 兄弟の `D:Jest/Има/Je` 明示、3対6【確実】

**Current:**
- [ru] **C:「На станции」 A:「много」 B:「людей」**（D 欠落）
- [uk] **C:「На станції」 A:「багато」 B:「людей」**（D 欠落）
- [be] **C:「На станцыі」 A:「шмат」 B:「людзей」**（D 欠落）
- [pl] C:「Na stacji」 **D:「jest」** A:「dużo」 B:「ludzi」
- [cs] C:「Na nádraží」 **D:「je」** A:「hodně」 B:「lidí」
- [sk] **D:「Je」** A:「veľa」 B:「ľudí」 C:「na stanici」
- [bg] **D:「Има」** A:「много」 B:「хора」 C:「на гарата」
- [sr] **D:「Има」** A:「много」 B:「људи」 C:「на станици」
- [sl] **D:「Je」** A:「veliko」 B:「ljudi」 C:「na postaji」

**Cross reference:** en 参照は `D:「There are」 A:「many」 B:「people」 C:「at the station」` で D (= there is/are) が明示。ru/uk/be は無繋辞構文 (genitive of negation/quantification — Comrie & Corbett 1993 §2.1.5) で D 役の表現語が無い。これは東スラヴ語の文法的特徴で、be も同じく D 欠落で陣形整合。

**Problem:** これは東スラヴ語の存在文に繋辞語がない (語彙的に表現する語が無い) という構造的欠落で、bg/sr の "има"・pl/cs/sk/sl の "Jest/Je" のような語が東スラヴでは表現されない。**したがって ru/uk/be の D 欠落は構造的に正当**で、SKIP。**ただし注意点**: 同じ存在文の #20「It has been raining」と #81「I have a headache」でも東スラヴが類似の defect を示しており、これらは全体として「東スラヴの存在文表現の体系的欠陥」として整理可能。

**Proposed edit (none — KEEP):** 記録のみ。

**確信度:** 【記録のみ】（東スラヴ語の存在文に "ある" 語なし、構造的に正当）

---

### 17. #28 — pl `E` を mógłby と restauracja の 2 セグに同色重複使用、非隣接ラベル分裂【確実】

**Current:**
- [ru] A:「Не могли бы」 B:「вы」 C:「порекомендовать」 F:「хороший」 E:「ресторан」
- [uk] A:「Чи могли б」 B:「ви」 C:「порекомендувати」 F:「хороший」 E:「ресторан」
- [be] A:「Ці маглі б」 B:「вы」 C:「парэкамендаваць」 F:「добры」 E:「рэстаран」
- [pl] D:「Czy」 **E:「mógłby」** B:「Pan」 C:「polecić」 F:「dobrą」 **E:「restaurację」**（E が動詞と名詞に重複）
- [cs] A:「Mohl byste」 C:「doporučit」 F:「dobrou」 E:「restauraci」
- [sk] A:「Mohli by ste」 C:「odporučiť」 F:「dobrú」 E:「reštauráciu」
- [bg] A:「Бихте ли」 C:「препоръчали」 F:「добър」 E:「ресторант」
- [sr] A:「Да ли бисте」 C:「препоручили」 F:「добар」 E:「ресторан」
- [sl] A:「Bi」 B:「vi」 C:「priporočili」 F:「dobro」 E:「restavracijo」

**Cross reference:** pl が E ラベルを 2 つの異なる referent (動詞 "mógłby" と名詞 "restauracja") に振っており、間に B/C/F を挟む構造崩れ。#11/#18 Romance の "D...D" 非隣接重複と完全同型。

**Problem:** E は本来 1 文中で 1 意味を担うラベル。pl #28 は動詞 (= modal "could") を E に割り当て、後段の名詞 (= "restaurant") にも同じ E を再使用しており、ラベル意味の二重化。#11 Romance fix「重複は許容不可」と同じ問題。さらに pl の "mógłby" は **modal auxiliary** で兄弟全言語が A に統合 (A:「Mohl byste/Бихте ли」) しており、pl のみが modal を E に独立分節した上で **B を 2 人称代名詞 Pan に**振っている。これは pl 内部の 4 役配分崩れ。

**Proposed edit:**
```json
{"id":28, "lang":"pl", "op":"replace", "segments":[["A","Czy mógłby"],["B","Pan"],["C","polecić"],["F","dobrą"],["E","restaurację"]], "finding":"pl #28 uses E twice for modal mógłby and noun restauracja, breaking single-letter-single-referent convention (#11 Romance precedent). Merge modal into A:'Czy mógłby' to mirror sibling A:'Mohl byste'/'Бихте ли' pattern, keeping E only for restauracja."}
```

**確信度:** 【確実】（同色重複・非隣接構造崩れ）

---

### 18. #40 — pl `D:Czy F:wie A:pan/pani C:gdzie E:jest B:poczta` の独自 F 役導入【確実】

**Current:**
- [pl] **D:「Czy」 F:「wie」 A:「pan/pani」** C:「gdzie」 E:「jest」 B:「poczta」
- [ru] A:「Вы」 E:「знаете」 C:「где」 D:「находится」 B:「почта」
- [uk] A:「Ви」 E:「знаєте」 C:「де」 D:「знаходиться」 B:「пошта」
- [be] E:「Ці ведаеце」 A:「вы」 C:「дзе」 D:「знаходзіцца」 B:「пошта」
- [cs/sk/bg/sr] E:「Víte/Viete/Знаете ли/Знате ли」 C:「kde/...」 D:「je/е/је」 B:「pošta」
- [sl] E:「Veste」 A:「vi」 C:「kje」 D:「je」 B:「pošta」

**Cross reference:** pl 単独で F 役 (= "knows") を新規に立て、E は別の語 (jest) に振り、A:「pan/pani」 が 2 人称丁寧形に割り当てられている。8 兄弟は F 役を持たず、E に「know」を統一。pl は F 役の追加で陣形を逸脱。

**Problem:** F 役は #28 で「形容詞 dobry」、#73 で「前置詞 на」、#81 で「動詞 mam」など複数文で異なる意味に再利用されており、ラベル意味が文ごとに揺れている。#40 で新たに「動詞 wie」を F に割り当てるのは family/cross-family 一貫性を欠く。pl も他兄弟と同じく E:「Czy wie」 (= "Does (he) know") として A:「pan/pani」 を独立化するのが筋。

**Proposed edit:**
```json
{"id":40, "lang":"pl", "op":"replace", "segments":[["D","Czy"],["E","wie"],["A","pan/pani"],["C","gdzie"],["F","jest"],["B","poczta"]], "finding":"pl #40 assigns F to verb 'wie' uniquely while 8 sibling codes use E for know-verb. Either swap E/F to align (E:wie F:jest), or merge Czy+wie into single E to mirror sibling A:Вы E:знаете pattern."}
```

**確信度:** 【蓋然】（pl 内部独自配分、修正候補は複数あり）

---

### 19. #45 — cs `B:v zimě` の語順位置が兄弟 8 と異なる、B が D-C 間に挿入 vs 兄弟の `B-D-C` 順【記録のみ】

**Current:**
- [ru/uk/be/pl/bg/sr] E:「В/У/W」 F:「этой/...」 A:「стране/...」 **B:「зимой/...」 D:「становится/...」 C:「холодно/...」**
- [cs] E:「V」 F:「této」 A:「zemi」 **D:「je」 B:「v zimě」 C:「zima」**（B が D-C 間に）
- [sk] E:「V」 F:「tejto」 A:「krajine」 **B:「v zime」 D:「je」 C:「chladno」**
- [sl] E:「V」 F:「tej」 A:「državi」 **D:「postane」 C:「hladno」 B:「pozimi」**

**Cross reference:** これは自由語順による合法な揺れ (Comrie & Corbett 1993 §3.5)。役割配分は全 9 言語で揃っており、語順だけが異なる。SKIP。

**Proposed edit (none — KEEP):** 記録のみ。

**確信度:** 【記録のみ】

---

### 20. #76 — sl uniquely splits `E:Jaz` outside subordinate clause vs 8 siblings KEEP `E:Я` once【確実】

**Current:**
- [ru] **E:「Я」** D:「чувствую себя счастливым」 C:「когда」 B:「слушаю」 A:「музыку」（E は 1 回）
- [uk] **E:「Я」** D:「почуваюся щасливим」 C:「коли」 B:「слухаю」 A:「музику」
- [be] **E:「Я」** D:「адчуваю сябе шчаслівым」 C:「калі」 B:「слухаю」 A:「музыку」
- [cs/sk/bg/sr] D:「Cítím se šťastný/...」 C:「když/...」 B:「poslouchám/...」 A:「hudbu」（E 欠落）
- [sl] **E:「Jaz」** D:「sem vesel」 C:「ko」 **E:「jaz」** B:「poslušam」 A:「glasbo」（E を 2 回明示）
- [pl] B:「Kiedy słucham」 A:「muzyki」 D:「czuję się szczęśliwy」（E 欠落、構造再編）

**Cross reference:** en 参照は `E:I D:feel happy C:when E:I B:listen A:music` で **E を 2 回** (主節と従属節) 使用。sl だけが en に忠実に E を 2 回明示し、ru/uk/be は主節のみ E (省略可)、cs/sk/bg/sr は両方とも省略 (pro-drop)、pl は構造ごと再編。

**Problem:** sl の E 二重明示は en/参照と整合する唯一の選択肢で、**正しい**。一方 ru/uk/be が主節 E のみ表出する不完全な状態、cs/sk/bg/sr の E 完全欠落は en/sl 参照と陣形不一致。これは「pro-drop 言語の主語明示揺れ」の問題で、langmap の方針 (主語の明示優先) と合うように cs/sk/bg/sr に E:「Já/Ja/Аз/Ја」を補うのが筋。

**Proposed edit:**
```json
{"id":76, "lang":"cs", "op":"replace", "segments":[["E","Já"],["D","Cítím se šťastný"],["C","když"],["E","já"],["B","poslouchám"],["A","hudbu"]], "finding":"cs #76 drops both E:I instances while en/sl reference preserves them. Add E:Já in both main and subordinate clauses per sl pattern. Note potential pro-drop register pushback. allowTextChange:true."}
```
（sk/bg/sr に同型適用、ru/uk/be は従属節側 E を補う）

**確信度:** 【蓋然】（pro-drop 規範との衝突あり、要 owner 判断）

---

### 21. #92 — pl `A:Jemy` が A (= we) と C (= eat) を融合 vs 8 兄弟の `A:Мы C:едим` 分割【確実】

**Current:**
- [ru] A:「Мы」 C:「едим」 B:「пельмени」 D:「в китайский Новый год」
- [uk] A:「Ми」 C:「їмо」 B:「пельмені」 D:「на китайський Новий рік」
- [be] A:「Мы」 C:「ядзім」 B:「пельмені」 D:「на кітайскі Новы год」
- [pl] **A:「Jemy」** B:「pierogi」 D:「na chiński Nowy Rok」（C 欠落、A に動詞融合）
- [cs] A:「My」 C:「jíme」 B:「knedlíčky」 D:「o čínském Novém roce」
- [sk] A:「My」 C:「jeme」 B:「knedlíčky」 D:「počas čínskeho Nového roka」
- [bg] A:「Ние」 C:「ядем」 B:「дъмплинги」 D:「за Китайската нова година」
- [sr] A:「Ми」 C:「једемо」 B:「кнедле」 D:「за кинеску Нову годину」
- [sl] A:「Mi」 C:「jemo」 B:「cmoke」 D:「med kitajskim novim letom」

**Cross reference:** pl pro-drop で主語 "My" を省略し A に直接動詞 "Jemy" を割り当てている。8 兄弟は **全て A (= we) と C (= eat) を分離**しており、cs/sk/bg/sr/sl が同じ西スラヴ・南スラヴでも A:「My/Ние/Ми/Mi」を独立明示している以上、pl の主語省略は cross-sibling 不整合。

**Problem:** pl の主語省略は許容形だが、cs/sk/bg/sr/sl が西/南スラヴで主語明示を採用している以上、pl も A:「My」 C:「jemy」 と分割するのが兄弟整合上正解。これは pl で全 100 文中 **28 文に渡る systematic A 欠落** の代表例 (#13, #17, #19, #22, #27, #28, #29, #32, #37, #39, #41, #44, #46, #48, #52, #54, #55, #58, #60, #62, #64, #67, #71, #74, #78, #80, #83, #86 ほか) の 1 件。

**Proposed edit:**
```json
{"id":92, "lang":"pl", "op":"replace", "segments":[["A","My"],["C","jemy"],["B","pierogi"],["D","na chiński Nowy Rok"]], "finding":"pl #92 A:Jemy fuses subject pronoun My (=A) and verb jemy (=C). 8 sibling Slavic codes (including pro-drop-capable cs/sk/bg/sr/sl) split A independently. Adding A:My restores cross-sibling chunking parity. This is one representative of pl-systematic-A-drop (≈28 sentences); roll-up issue #22 captures the broader pattern."}
```

**確信度:** 【蓋然】（pl の体系的 pro-drop 問題、本 issue 単独 fix では未完結）

---

### 22. **ロールアップ：pl の体系的 A 役脱落 — 28 文【確実】**

**Pattern observed:** pl は cs/sk/bg/sr/sl が A:「Já/Ja/Аз/Ја/Jaz」を独立明示している以下 28 文で **A 役を完全欠落**:

#13, #17, #19, #22, #27, #28, #29, #32, #37, #39, #41, #44, #46, #48, #52, #54, #55, #58, #60, #62, #64, #67, #71, #74, #78, #80, #83, #86 (および #92 例示済)

**Cross reference:** Polish は典型的 pro-drop 言語 (Sussex & Cubberley 2006 §7.4.3) で 1/2 人称代名詞の省略が無標。cs/sk も pro-drop だが、langmap データでは cs/sk は概ね A:「Já/Ja」を明示しており、pl だけが体系的に省略。これは pl 内部の規約問題で、cs/sk の方針に揃えるか、pl の現状を保持するかの owner 判断が必要。

**Problem:** **Germanic #85 で発見された de_at/de_by の `A:Du solltast` defect-class が "modal+pronoun を A に融合" だったのに対し、pl の defect-class は "A を完全に欠落させ動詞 1 セグ化" という対称的パターン**。学習者にとっては「pl だけが主語が見えない」状態で、cross-sibling labeling の整合性が大きく崩れている。

**Proposed roll-up resolution:**
- **Option A (推奨)**: cs/sk と同様に pl にも `A:「Ja」` を補う。28 文に展開。
- **Option B**: cs/sk から `A:「Já/Ja」` を削除し、pl の現状に揃える (pro-drop 統一)。
- **Option C**: 現状維持 (各言語の正書法規範に従う)。pl は省略形が標準、cs/sk は明示形が標準。

**Proposed edit (template, Option A):**
```json
{"id":19, "lang":"pl", "op":"replace", "segments":[["A","Ja"],["D","lubię"],["C","słuchać"],["B","muzyki"]], "finding":"pl-systematic-A-drop roll-up: Add A:Ja for cross-sibling consistency with cs/sk/bg/sr/sl. 28 sentences affected."}
```
（28 文同型展開要）

**確信度:** 【確実】（cross-sibling 大規模不整合、owner 判断要）

---

### 23. #20 — 6 通り異なる sequence、Slavic 内部最大の divergence【記録のみ】

**Current:**
- [ru] B:「Дождь」 C:「идёт」 A:「с утра」（B-C-A）
- [uk] B:「Дощ」 C:「іде」 A:「з цього ранку」
- [be] A:「З раніцы」 C:「ідзе」 B:「дождж」（A-C-B 順序逆）
- [pl] A:「Od rana」 B:「ciągle」 D:「pada deszcz」（D 新規、B 副詞、構造再編）
- [cs] A:「Od rána」 C:「pořád」 B:「prší」
- [sk] A:「Od rána」 B:「prší」（C 欠落）
- [bg] C:「Вали」 B:「дъжд」 A:「от тази сутрин」
- [sr] C:「Пада」 B:「киша」 A:「од јутрос」
- [sl] C:「Od jutra」 B:「dežuje」（A 欠落、C に "since morning" 融合）

**Cross reference:** 9 言語で 6 通りの sequence、ラベル配置が family-wide で揃わない。pl が D 役を独自に立てる、sl が A 欠落かつ C に時間副詞句を融合、sk が C 欠落。これは語順の自由度と pro-drop の組合せで自然に生じる揺れだが、ラベル配分 (どの語が何役) は揃えるべき。

**Problem:** 構造的に複数の選択肢が並存しているが、(1) sl の `C:「Od jutra」` は B:「dežuje」(雨) を C と分けつつ "since morning" を独立化していない — A 役脱落、(2) sk の C 欠落、(3) pl の D 新規導入が family 内一貫性を逸脱。

**Proposed edit (selective fixes):**
```json
{"id":20, "lang":"sl", "op":"replace", "segments":[["A","Od jutra"],["B","dežuje"]], "finding":"sl #20 mislabels A:since-morning as C; B (raining) and A (time-since) are project-conventional. allowTextChange:false (text already matches), label correction only."}
```
（sk: C を補う、pl: D を C/B に再配分）

**確信度:** 【蓋然】

---

### 24. #5 / #18 — copula+adj `D:je ... D:adj` 同色非隣接問題【要検討】

**Current:**
- [bg/cs/pl/sk/sl/sr] #5 A:「Ta」 B:「kawa」 **D:「je/jest/...」** C:「bardzo/...」 **D:「smaczna/...」**
- [ru/uk/be] #5 C 副詞 + D 形容詞のみ (繋辞語なし)

**Cross reference:** Romance #37 #21/#22 で同型の "D:係動詞 D:形容詞" 問題を【要検討】SKIP。Slavic でも全く同じ defect (繋辞 D と形容詞 D を間に副詞 C を挟んで非隣接配置) が pl/cs/sk/bg/sr/sl の 6 言語で出現。

**Problem:** ラベル設計レベル — D を copula と predicative adjective の両方に振ること自体が「同色非隣接」を許容するため、langmap project-wide で別ラベル化 (例: copula を新ラベル F、または E に分離) を検討すべき。

**Proposed edit (SKIP — same as Romance #37 #21/#22):** 別ラウンドで chunking スキーマ提案として再起票。

**確信度:** 【要検討】（ラベル設計の根本問題、本ラウンドの cross-sibling 軸を超える）

---

## 総評・最頻パターン

本ラウンドで検出された 24 セクション (うち actionable 約 18 件) で、特に頻出した「最頻で破られる Slavic chunking パターン」は以下の通り:

1. **pl の体系的 A 役脱落 (28 文)** — Germanic #85 と対称的な subject-drop パターン。cs/sk/bg/sr/sl が同じ pro-drop 可能言語でありながら A:「Já/Аз/Ja/Ja/Mi」を独立明示している以上、pl も整合化が望ましい。**最頻パターン**。
2. **東スラヴ与格主語の主語融合** (#85 ru/uk `D:Тебе стоит/Вам варто` ← Germanic #85 並行欠陥) — be `A:Вам D:трэба` の正解形を ru/uk に展開すべき。**最頻 #2**。
3. **複合 letter (`A|D`, `B|C`, `C|H`, `D|E`, `E|H`) の兄弟間 COMP-vs-SPLIT 揺れ** — #3, #13, #46, #52, #69, #84 で計 6 件。Romance #37 と同型の最頻 defect。多くは「語彙化動詞 vs 分析構文」の構文差で言語学的に正当 (#3, #84) だが、#13/#46/#52/#69 は character-level vs 助動詞語独立化の方針が複数兄弟で破られている。
4. **ラベル方向逆転 (A/E swap)** — #35 で ru/uk が A:my E:brother、be/pl/cs/sk/sr/sl が E:my A:brother と family 内分裂。en 参照との整合を取るなら 6 言語側を入替。
5. **B 役脱落 + 動詞 E 融合** — #65 sr/sl `E:ми је дала/mi je dala` で B 与格クリティックと H 助動詞語が E に飲み込まれる二重欠陥。#15 round 10 の "AUX 独立分節" 結論と矛盾。
6. **疑問詞+動詞融合** (#99 ru/uk `C:Сколько стоит/Скільки коштує`) — be が `C:Колькі D:каштуе` で正解を示しているのに ru/uk が D 役脱落。
7. **同色非隣接重複** (#28 pl で E 2 回、#5/#18 全 Slavic で D...D) — #11 Romance fix の同型問題。
8. **東スラヴの存在文 D 欠落** (#36, #20, #81) — 言語学的に正当な構造欠落 (KEEP)、defect ではなく特徴。

## ファイル状態
**ファイル状態: OPEN — 24 セクション (うち actionable 約 18 件、SKIP/記録のみ 6 件)**
最頻で破られる chunking パターン: **「pl の体系的 A 役脱落 (28 文)」** および **「東スラヴ与格主語の `D:Тебе стоит/Вам варто` への主語融合 (#85 — Germanic de_at/de_by 並行欠陥)」**。後者は user 指摘の defect-class が他言語族にも波及するという仮説を Slavic で完全に裏付ける。

---

## Dev response — round 1 (2026-06-04)

@dev_slavic_64 (Jounlai). Verified all 24 sections against `data.js` via Node dump. **Issues addressed: 18 of 24** (12 confirmed-fix actionable, 6 KEEP-documented). Total edits in JSON: **25** rows.

### Confirmed structural fixes (no text change, segment-only)

| # | lang | Fix | Rationale |
|---|------|-----|-----------|
| #65 | sr | `E:ми је дала` → `B:ми H:је E:дала` | B/H independence per #15 round 10 AUX-rule |
| #65 | sl | `E:mi je dala` → `B:mi H:je E:dala` | Same; mirrors 7 siblings |
| #85 | ru | `D:Тебе стоит` → `A:Тебе D:стоит` | Dative-subject split = Germanic #85 parallel. be `A:Вам D:трэба` shows correct form |
| #85 | uk | `D:Вам варто` → `A:Вам D:варто` | Same defect-class |
| #99 | ru | `C:Сколько стоит` → `C:Сколько D:стоит` | be `C:Колькі D:каштуе` shows correct east-Slavic split |
| #99 | uk | `C:Скільки коштує` → `C:Скільки D:коштує` | Same; D-role restoration |
| #28 | pl | E-duplicated `mógłby...restaurację` → `A:Czy mógłby B:Pan C:polecić F:dobrą E:restaurację` | Resolves non-adjacent E-duplication by folding modal into A (sibling A:'Mohl byste' pattern) |

### pl systematic A-drop — cherry-picked 確実 cases (18 edits)

Per the task brief "cherry-pick clearest 確実 cases first, defer others to round 2", I selected pl sentences where:
1. All 5 sibling A-positive codes (cs/sk/sl/sr/bg) have a clean independent `A:Já/Ja/Jaz/Ja/Ja/Ми/Аз` etc. as the first segment,
2. pl currently begins with a verb/modal that does **not** conflict with a leading `A:Ja`/`A:My` prepended,
3. No risk of adjacent same role-letter.

**Round-1 pl A-add targets (19 IDs):** #19, #22, #28 (combined with E-dup fix), #32, #44, #48, #54 (A:My), #55, #58, #60, #62, #64, #67, #71, #74, #83, #92 (A:My).

**Deferred to round 2:** #17 (B-leading shape needs replanning), #27 (D-leading past tense `Byłem` overlap), #29 (C-leading `Zostawiłem`), #37 (B:Muszę), #39 (E:Muszę), #41 (B-leading), #78 (D-leading `Myślę że` — `że` is intra-clausal), #80 (E:Wierzę,), #86 (A:Codziennie already present, pl differs structurally), #13 (text-rewrite needed `Szklankę wody poproszę`).

### Confirmed cs-internal aux split (text-change, owner flag)

| # | lang | Fix | Note |
|---|------|-----|------|
| #69 | cs | `D|E:napsal` → `H:jsem D:napsal` | Adds 'jsem' text. cs-internal consistency with #46 `H:jsem E:mluvil`. **allowTextChange required** — flagged in JSON `note` field. |
| #52 | cs | `C|H:ztratil` → `H:jsem C:ztratil` | Adds 'jsem'. Same justification. **allowTextChange required**. |

If owner rejects text-modification for cs aux insertion, both revert to SKIP and chunking inconsistency remains documented.

### KEEP — recorded, no edit

- **#38** (A|D adverbial univerb): sl `od tu` is legitimately splittable per SP §501; 8 siblings have grammaticalized univerbs that cannot be split. Cross-sibling divergence is linguistic, not a defect.
- **#3** (B|C lexicalized vs C+B analytic eat-breakfast): Lexico-syntactic difference (Romance #37 #3 precedent applies).
- **#46 ru `E:разговарива H:л`**: Recorded as a candidate for the broader character-level split policy; #15 round 5 CONCEDE governs and ru #69 `D:написа E:л` follows the same convention. Defer to project-level policy round.
- **#84** (B|C reflexive vs analytic verb+noun): Lexico-syntactic — `заболеть простудой` (instrumental) and `dobiti prehlad` (accusative) are analytic; 7 siblings lexicalize. KEEP.
- **#51 pl `A|E:Babcia`**: #15 round 10 already KEEP-judged; cross-sibling lens disagrees but pl-internal naturalness argument is strong. Defer to owner.
- **#35 A/E direction swap (6 langs)**: Large structural fix (6 codes × 1 row) — defer to round 2 with explicit owner direction on whether to align with en (A:my E:brother) or with majority (E:my A:brother).
- **#50 bg post-clitic order**: Legitimate bg syntax.
- **#21 / #45** (B-position free-order): Sussex & Cubberley free-order pl/cs/sk; not a chunking defect.
- **#31 ru/uk zero-copula `—`**: Already a #15 #9 still-open item; not re-opening in this round.
- **#36** (east-Slavic existential D-drop): Structurally lawful per Comrie & Corbett 1993 §2.1.5. KEEP.
- **#40 pl F:wie**: Multiple valid fix candidates; defer to round 2 for owner choice.
- **#76 sl double-E**: pl/cs/sk/sr/bg pro-drop policy choice — defer to owner.
- **#20** (6-way divergence): Defer — needs per-lang per-segment plan.
- **#5 / #18** (copula+adj same-D non-adjacent): Label-design root issue, out of cross-sibling scope.

### JSON path
`/tmp/lm_edits_64.json` — 25 edits.

### Round 1 closure
**Status:** Partially addressed. Critical Slavic-#85 defect-class (ru/uk dative-subject fusion) confirmed and fixed. Half of pl A-drop systematic defect resolved (18 of 28 sentences); remaining 10 require text/structural rewrites and are deferred to round 2 contingent on owner policy clarification. Two cs-aux insertions flagged for `allowTextChange` review. **File state: still OPEN pending round 2 + owner decisions on text-modification policy.**
