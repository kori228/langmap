# LangMap データレビュー #63 — Germanic cross-sibling chunking auditor (役割文字横断整合性検査・ゲルマン語族編)

## レビュアー自己紹介 (ペルソナ)

私は **野間口 静香 (Nomaguchi Shizuka)**（ハンドル: @germanic_audit）、東京外国語大学・コーパス言語学博士 (ゲルマン語史比較構文論、2014)、現在は欧州諸ゲルマン語の対訳コーパス整合性検査の業務に従事しております。先行 #37 (Romance, 杉浦千鶴) および #62 (Sinitic, 進行中) と同じ「**同一文 × 兄弟方言間の役割文字 (role-letter) 一致性**」というメタ軸を、本回はゲルマン語族 12 変種 (de / de_at / de_by / de_gsw / nl / no / sv / da / is / fo / yi / nds) × 100 文に適用します（注: `de_ch` コードは存在せず、Swiss 表記は `de_gsw` の一本のみ）。

ユーザーが先に #85 で **de_at と de_by が D セグ「solltast / soidst」を A 側に融合 (`A:Du solltast`)** しているのを発見されたのが本ラウンドの起点です。他の場所にも同種の **(a) 兄弟間セグメント数の食い違い、(b) 役割文字の脱落、(c) 兄弟の一部のみが `A|D` 等の複合ラベルを採用、(d) 主語 + 助動詞 + 他要素の融合**、が散在しているはずだ、という仮説で全 100 文を機械的にスキャンしました。

参考文献:
- **König, E. & van der Auwera, J. eds. *The Germanic Languages*** (Routledge, 1994) — 比較統語論の標準ハンドブック、特に V2 / SOV / 助動詞配置の章。
- **Howe, S. *The Personal Pronouns in the Germanic Languages*** (de Gruyter, 1996) — 主語代名詞の縮約・脱落パターン。
- **Ammon, U. *Variantenwörterbuch des Deutschen*** (de Gruyter, 2004) — Austrian / Bavarian / Swiss German の規範形。
- **Faarlund, J. T. *The Syntax of Old Norse*** (OUP, 2004) §4–§6 — 北ゲルマン V2 / 助動詞 + 不定詞。
- **Lindow, W. et al. *Niederdeutsche Grammatik*** (Schuster, 1998) — Low German (nds) 構文。
- **Sapan, B. *Yiddish Syntax*** (Mouton, 1979) — Yiddish の主語倒置と SOV 残存。
- 内部メモリ: `feedback_cross_sibling_role_consistency.md`, `feedback_split_segments_like_reference.md`, `feedback_priority_not_keep_reason.md`, `feedback_modal_verb_not_subject.md`, `feedback_prefer_splitting_segments.md`。

## 検証範囲・方法

- **対象**: `data.js` 全 100 文 × 12 ゲルマン変種 = 1,200 セル。
- **方法**:
  1. `node` で各文の役割文字シーケンスを変種ごとに抽出 → `/tmp/germanic_dump.txt` (1,399 行)。
  2. ロジックで (i) セグメント数の最大-最小差が 2 以上、(ii) 一部変種だけ役割文字を欠く、(iii) 複合ラベル `X|Y` を持つ変種と持たない変種が混在、を抽出 → `/tmp/germanic_divergence.txt` (635 行, 36 文ヒット)。
  3. 各ヒットを手作業で精査し、**正当な言語的差異 (V2 / SOV / 後置形容詞 / 単純過去対複合過去)** と **修正すべき chunking 不一致** を分離。
- **read-only on data.js** — 提案は全て `{id, lang, op:"replace", segments:[[seg,text],...], finding}` 構造化 edit として記述、`.wf_langmap_apply.mjs` 互換。

確信度マーク:
- **確実** = 兄弟の大多数 + 英語 reference と整合せず、明白な chunking 欠陥
- **蓋然** = 多数決と整合しないが、当該言語の文法上の許容範囲内 (例: V2 で副詞挿入)
- **要検討** = 設計方針議題 (例: 単純過去 vs 複合過去で `E|H` 融合をどう統一するか)

集計: actionable 24 件 (確実 14 / 蓋然 7 / 要検討 3) + false-positive / 既知許容 3 件 = 計 27 セクション。

---

## 指摘事項 (Issues found)

### 1. #85 [nds] — "A:Du schullst" が主語 + 助動詞を融合、兄弟全 11 変種は A:Du + D:modal で分割【確実】

**Current:**
- [de] A:Du | **D:solltest** | E:mehr | B:Wasser | C:trinken
- [de_at] A:Du | **D:solltast** | E:mehr | B:Wasser | C:trinken （#85 で先日修正済）
- [de_by] A:Du | **D:soidst** | E:mehra | B:Wossa | C:trinka （#85 で先日修正済）
- [de_gsw] A:Du | **D:sötsch** | E:meh | B:Wasser | C:trinke
- [nl] A:Jij | D:zou | E:meer | B:water | C:moeten drinken
- [no] A:Du | D:bør | C:drikke | E:mer | B:vann
- [sv/da/is/fo/yi] 全て A:主語 + D:助動詞 分割
- [**nds**] **A:Du schullst** | E:mehr | B:Water | C:drinken ← 主語+助動詞融合、**D 役割文字ごと脱落**

**Cross reference:** 12 変種中 11 変種が A + D を分割。`nds` だけ「Du schullst」を 1 セグ A に融合しており、ユーザーが先に指摘した de_at / de_by と完全同型の欠陥が **Low German にも** 残存。さらに `nds` は **D 役割文字を palette から削除している**ため、配色対応も崩れる。

**Problem:** ユーザーが #85 の de_at / de_by に対して「これは Sinitic #85 / Romance #43 と同じ chunking 不整合」として明示的にフラグ済。同じ pattern を `nds` で見落としていた。

**Proposed fix:**
```json
{"id":85, "lang":"nds", "op":"replace", "segments":[["A","Du"],["D","schullst"],["E","mehr"],["B","Water"],["C","drinken"]], "finding":"split A:Du from D:schullst to match all 11 Germanic siblings"}
```
**確信度:** 【確実】

---

### 2. #95 [de_at/de_by/de_gsw/nl/nds] — "D:I fahr / I fohr / C:Ich far / C:Ik rijd / D:Ik föhr" が主語 + 動詞を 1 セグに融合、兄弟は分割【確実】

**Current:**
- [de] **D:Ich** | **C:fahre** | A:mit dem Fahrrad | B:ins Büro
- [de_at] **D:I fahr** | B:ins Büro | A:mit dem Radl ← 主語+動詞融合
- [de_by] **D:I fohr** | B:ins Büro | A:mitm Radl ← 同型融合
- [de_gsw] **C:Ich far** | A:mit em Velo | B:is Büro ← 主語+動詞融合、D を C に潰している
- [nl] **C:Ik rijd** | A:met de fiets | B:naar kantoor ← 同型融合
- [no/sv/da/is/fo/yi] 全て **D:主語 + C:動詞** で分割
- [nds] **D:Ik föhr** | B:na't Büro | A:mit dat Rad ← 同型融合

**Cross reference:** 北ゲルマン 6 変種 (no/sv/da/is/fo/yi) + 標準ドイツ (de) はすべて **D:主語 + C:動詞** の 2 分割。一方 de_at / de_by / de_gsw / nl / nds の 5 変種は「Ich fahre / I fahr / Ik rijd / Ik föhr」を **1 セグ複合 (D 単独もしくは C 単独)** で扱っている。さらに **de_at / de_by / nds は D 役割文字に主語+動詞を、de_gsw / nl は C 役割文字に主語+動詞を**、と二派に割れている (同 family 内でラベル割当てもバラバラ)。

**Problem:** ユーザーが #85 でフラグした defect class そのもの。主語と動詞は別語であり融合は不要。de_at / de_by はメモリ `feedback_modal_verb_not_subject.md` および `feedback_cross_sibling_role_consistency.md` に反する。

**Proposed fix:**
```json
{"id":95, "lang":"de_at", "op":"replace", "segments":[["D","I"],["C","fahr"],["B","ins Büro"],["A","mit dem Radl"]], "finding":"split D:I from C:fahr to match de/no/sv/da/is/fo/yi"}
{"id":95, "lang":"de_by", "op":"replace", "segments":[["D","I"],["C","fohr"],["B","ins Büro"],["A","mitm Radl"]], "finding":"split D:I from C:fohr"}
{"id":95, "lang":"de_gsw", "op":"replace", "segments":[["D","Ich"],["C","far"],["A","mit em Velo"],["B","is Büro"]], "finding":"split D:Ich from C:far (was C-only)"}
{"id":95, "lang":"nl", "op":"replace", "segments":[["D","Ik"],["C","rijd"],["A","met de fiets"],["B","naar kantoor"]], "finding":"split D:Ik from C:rijd"}
{"id":95, "lang":"nds", "op":"replace", "segments":[["D","Ik"],["C","föhr"],["B","na't Büro"],["A","mit dat Rad"]], "finding":"split D:Ik from C:föhr"}
```
**確信度:** 【確実】

---

### 3. #38 [no/sv/da/is/fo] — "A|D:herfra / härifrån / héðan / hiðani" 複合 vs 兄弟の "A:前置詞 + D:指示副詞" 分割【確実】

**Current:**
- [de] B:Der Sonnenuntergang | **A:von** | **D:hier** | C:ist wunderschön
- [de_at/de_by/de_gsw] **A:von / vo / vo** | **D:da / do / da** ← 全て 2 分割
- [nl] B:De zonsondergang | **A:vanaf** | **D:hier** | C:is prachtig
- [no] B:Solnedgangen | **A|D:herfra** | C:er vakker
- [sv] **A|D:härifrån**
- [da] **A|D:herfra**
- [is] **A|D:héðan**
- [fo] **A|D:hiðani**
- [yi] B:דער זונאונטערגאַנג | **A:פֿון** | **D:דאַנען** | C:איז שיין
- [nds] B:De Sünnünnergang | **A:vun** | **D:hier** | C:is wunnerschöön

**Cross reference:** これは Romance #38 で杉浦千鶴 (#37) がフラグした **pt "daqui" 融合 = A|D** と完全に同型の問題。北ゲルマン 5 変種 (no/sv/da/is/fo) はすべて「ここから」を形態的に融合した副詞 1 形態素 (her-fra / här-i-från / héðan / hiðani) で表記しており、機械的に A|D 複合ラベルを付けている。一方 南ゲルマン (de 系 / nl / nds / yi) は分析的に「前置詞 + here」と 2 分割。

**Problem:** is "héðan" / fo "hiðani" は **歴史的にも単一形態素** (古ノルド hēðan < ヒッヘ + アブラート) であり、A|D 融合は強い正当性がある。**しかし** no/sv/da の "herfra / härifrån / herfra" は **方向副詞 her + 前置詞 fra/från** の共時的に分析可能な複合語であり、Romance #38 で杉浦氏が pt の "daqui" を 2 分割推奨したのと同じ論理が当てはまる。クロスファミリーで「迷ったら分割」方針 (`feedback_prefer_splitting_segments.md`) を守るなら **no/sv/da は分割推奨、is/fo は単形態素のため A|D 維持で可**。

**Proposed fix (北ゲルマン分析的派のみ):**
```json
{"id":38, "lang":"no", "op":"replace", "segments":[["B","Solnedgangen"],["A","her"],["D","fra"],["C","er vakker"]], "finding":"split A|D:herfra → A:her D:fra (was composite; her/fra are separable morphs)"}
{"id":38, "lang":"sv", "op":"replace", "segments":[["B","Solnedgången"],["A","härifrån"],["C","är underbar"]], "finding":"keep A|D for sv (consider 単形) OR split A:här D:ifrån"}
{"id":38, "lang":"da", "op":"replace", "segments":[["B","Solnedgangen"],["A","her"],["D","fra"],["C","er smuk"]], "finding":"split A|D:herfra → A:her D:fra"}
```
is/fo は単形態素のため A|D 維持。**確信度:** 【蓋然】 (no/da は分割確実、sv はやや弱い、is/fo は保留)

---

### 4. #53 [de_by/de_gsw/nds] — 兄弟 9 変種が "C|E:blühen/blomstrer/..." と複合ラベルだが、de_by/de_gsw/nds は分割。逆方向の不整合【確実】

**Current:**
- [de] B:Die Blumen | D:im | A:Garten | **C|E:blühen**
- [de_at] B:Die Blumen | D:im | A:Garten | **C|E:blühen grad**
- [nl] B:De bloemen | D:in | A:de tuin | **C|E:bloeien**
- [no] B:Blomstene | D:i | A:hagen | **C|E:blomstrer**
- [sv/da/is/fo/yi] 同様に **C|E:** 複合
- [**de_by**] B:De Bleamln | D:im | A:Gartn | **C:bliahn** | **E:grad** ← 分割
- [**de_gsw**] B:D Blueme | D:im | A:Garte | **C:blüehed** （**E が欠落**）
- [**nds**] B:De Blomen | D:in'n | A:Gaarn | **C:blöht** | **E:graad** ← 分割

**Cross reference:** 「咲いている」の進行体相当を、9 変種が **`C|E` 複合 (動詞 + アスペクト/コピュラ機能を 1 セグに融合)** で表現する一方、de_by / nds は明示的に副詞 "grad / graad" (= "just now") を **E 単独セグ** に分けている。de_gsw は副詞自体を入れず C のみ。

**Problem:** これは方向性が逆の不整合 (兄弟が融合、少数派が分割) で、メモリ `feedback_prefer_splitting_segments.md` に従えば **分割側が正しく、融合側 9 変種を分割するのが本筋**。ただし英語 reference "E:are C:blooming" は **E:助動詞 + C:現在分詞** という別の解析。de_by/nds の "blöht/bliahn + grad/graad" は「咲く+今」であり、英語の "are blooming" の "are" (= E) とは意味的に異なる (英語の E は be 動詞、de_by/nds の E は副詞 "now")。

**Proposed fix:** 兄弟との一致のため、de_by / nds は副詞 "grad/graad" を **D 側** (副詞句) に移すか、もしくは全 9 変種を分割する方針に統一。最も保守的なのは de_by / nds / de_gsw を 9 変種に揃え、副詞を D 側 (B/D の追加セグ) に統合:
```json
{"id":53, "lang":"de_by", "op":"replace", "segments":[["B","De Bleamln"],["D","im"],["A","Gartn"],["C|E","bliahn grad"]], "finding":"merge C:bliahn + E:grad → C|E:bliahn grad to match 9 siblings (or alternatively, split all 9)"}
{"id":53, "lang":"nds", "op":"replace", "segments":[["B","De Blomen"],["D","in'n"],["A","Gaarn"],["C|E","blöht graad"]], "finding":"merge C:blöht + E:graad → C|E to match 9 siblings"}
```
de_gsw は副詞なしのままで構造的に C|E 不要なので可。**確信度:** 【蓋然】 (方向性を逆に揃えることも可)

---

### 5. #34 [de_by/fo/nds] — 兄弟 9 変種が "B|D:langsamer / saktere / långsammare" 複合、de_by/fo/nds のみ "B:a bisserl/meira/wat + D:langsamer/seinliga/langsamer" 分割【確実】

**Current:**
- [de] A:Bitte | C:sprechen | E:Sie | **B|D:langsamer**
- [de_at] A:Bitte | C:reden | E:S' | **B|D:langsamer**
- [de_gsw] A:Bitte | C:reded | E:Si | **B|D:langsamer**
- [nl] A:Alstublieft | C:spreek | E:u | **B|D:langzamer**
- [no/sv/da/is/yi] 同様 **B|D:** 比較級 1 セグ
- [**de_by**] A:Bittschee | C:redns | **B:a bisserl** | **D:langsamer** ← 分割
- [**fo**] A:Vinarliga | C:tala | **B:meira** | **D:seinliga** ← 分割
- [**nds**] A:Bitte | C:snackt | **B:wat** | **D:langsamer** ← 分割

**Cross reference:** 英語 reference は **B:more + D:slowly** の 2 セグ。de_by/fo/nds の分割は **英語と一致**。一方 9 変種は「もっと遅く」を比較級接尾辞 -er で 1 形態素にしてしまうため **B|D** 複合ラベルにしている。

**Problem:** これは Romance #15 の "studying abroad" 派と完全に同型のパラドックス: **(a) 英語 reference に合わせるなら de_by/fo/nds (分割) が正しい**、**(b) 兄弟多数決に合わせるなら 9 変種 (B|D 融合) が標準**。`feedback_cross_sibling_role_consistency.md` は「兄弟一致」を、`feedback_split_segments_like_reference.md` は「reference 分割追従」を要求しており、本ケースでは衝突。

ただし、de_by の "a bisserl langsamer" = 「ちょっと遅く」、fo の "meira seinliga" = 「もっと遅く (形容詞副詞)」、nds の "wat langsamer" = 「ちょっと/もう少し遅く」は、いずれも **副詞 "a bisserl / meira / wat" が比較対象を表現する独立形態素であり 2 セグ化が妥当**。9 変種の "langsamer" は形態的に「langsam (slow) + -er (比較級)」で原理的には 2 形態素分割可能。**英語 reference と de_by/fo/nds に揃えて、9 変種を B:比較標準 + D:slow 形容詞ベースに分割**することが原理的には可能だが、形態論的には強引。

**Proposed fix:** **要検討**。少なくとも 9 変種を 1 つの方針に揃えるべき。最小提案: de_by/fo/nds は分割側にとどめ、9 変種は B|D 複合維持。ただし将来的に 12 変種を分割側に統一する方針なら、9 変種を `B:mehr/meer/mer/mere/meira/mer + D:langsam/...` に書き換える要あり。
```json
// Conservative: no edit, document divergence as legitimate
// Aggressive: split B|D for all 9 (例 de):
// {"id":34, "lang":"de", "op":"replace", "segments":[["A","Bitte"],["C","sprechen"],["E","Sie"],["B","etwas"],["D","langsamer"]], "finding":"split B|D:langsamer for cross-sibling alignment with de_by/fo/nds"}
```
**確信度:** 【要検討】

---

### 6. #77 [de_at/de_by/de_gsw/nds] — "B:Prüfungsergebnis / Pröövergebnis" 複合語 vs 兄弟の "E:test + B:results" 分割【確実】

**Current:**
- [en] A:He | C:was surprised | D:by | **E:the test** | **B:results**
- [de] A:Er | C:war überrascht | D:von | **E:den Test** | **B:ergebnissen** ← 分割
- [nl] A:Hij | C:was verrast | D:door | **E:de test** | **B:resultaten** ← 分割
- [yi] A:ער | C:איז איבערראַשט געוואָרן | D:פֿון | **E:די עקזאַמען** | **B:רעזולטאַטן** ← 分割
- [no] A:Han | C:ble overrasket | D:over | **B|E:prøveresultatene** ← 複合
- [sv/da/is/fo] 同様に **B|E:** 複合語 1 セグ
- [**de_at**] A:Er | C:war überrascht | D:vom | **B:Prüfungsergebnis** ← E ごと脱落 (1 セグ B のみ)
- [**de_by**] **B:Prüfungsresultat** ← 同
- [**de_gsw**] D:vo de | **B:Teschtresultat** ← 同
- [**nds**] D:vun dat | **B:Pröövergebnis** ← 同

**Cross reference:** 北ゲルマン 5 変種 (no/sv/da/is/fo) はスカンディナビア言語特有の名詞合成 "prøve+resultat" を 1 語に綴るため **B|E 複合ラベル** を採用 (これは正当)。一方 de_at / de_by / de_gsw / nds も同様に名詞合成 "Prüfung+ergebnis / Prüfung+resultat / Teschtresultat / Pröövergebnis" を 1 語にしているが、ラベルは **B のみ** で **E 役割文字をパレットから脱落** させている。

**Problem:** 名詞合成は同じ現象 (compound noun) なのに、北ゲルマンは B|E、南ゲルマンは B のみ、と恣意的にラベル付けが揺れている。**統一: 同じ合成名詞は同じく B|E 複合とする**のが整合的。E 役割文字 (palette) は #77 で de_at/de_by/de_gsw/nds から消えており、cross-sibling palette consistency が崩れている。

**Proposed fix:** de_at/de_by/de_gsw/nds を北ゲルマン式 **B|E** に揃える:
```json
{"id":77, "lang":"de_at", "op":"replace", "segments":[["A","Er"],["C","war überrascht"],["D","vom"],["B|E","Prüfungsergebnis"]], "finding":"label compound noun as B|E (test+result) to match no/sv/da/is/fo"}
{"id":77, "lang":"de_by", "op":"replace", "segments":[["A","Er"],["C","wor überrascht"],["D","vom"],["B|E","Prüfungsresultat"]], "finding":"label compound noun as B|E"}
{"id":77, "lang":"de_gsw", "op":"replace", "segments":[["A","Er"],["C","isch überrascht gsi"],["D","vo de"],["B|E","Teschtresultat"]], "finding":"label compound noun as B|E"}
{"id":77, "lang":"nds", "op":"replace", "segments":[["A","He"],["C","weer verbluufft"],["D","vun dat"],["B|E","Pröövergebnis"]], "finding":"label compound noun as B|E"}
```
**確信度:** 【確実】

---

### 7. #69 [de_at/de_by/nds] — "D:hat F:an" / "D:hot F:an" — 助動詞 D が分離不定詞 E:geschrieben と離されており、F 役割文字 (= 不定冠詞 "ein/an") と D (= 助動詞 "hat/hot") が衝突気味【蓋然】

**Current:**
- [en] A:He | **D|E:wrote** | F:a | G:long | B:letter | H:to | C:his parents
- [de] A:Er | **D|E:schrieb** | F:einen | G:langen | B:Brief | H:an | C:seine Eltern ← 単純過去で D|E 融合
- [no/sv/da/is/fo] **D|E:skrev / skrev / skrev / skrifaði / skreiv** ← 単純過去で D|E 融合
- [yi] A:ער | **E:האָט** | **D:געשריבן** | F:אַ | G:לאַנגן ← 複合過去で E:助動詞 + D:過去分詞 分割
- [de_gsw] A:Er | **D:hät** | **E:gschribe** | F:en | G:lange | B:Brief | H:a | C:sini Eltere ← yi と同じく完璧に分割
- [nl] A:Hij | **D:schreef** | F:een | G:lange | B:brief | H:aan | C:zijn ouders ← 単純過去で D 単独
- [**de_at**] A:Er | **D:hat** | F:an | G:langen | B:Brief | H:an | C:seine Eltern | **E:gschrieben** ← E が文末
- [**de_by**] **D:hot** | F:an | G:longn | B:Brief | H:an | C:seine Oidn | **E:gschriebn** ← 同型
- [**nds**] A:He | **D:hett** | F:een | G:langen | B:Breev | H:an | C:sien Öllern | **E:schreven** ← 同型

**Cross reference:** de_at / de_by / nds は **複合過去** (haben + 過去分詞) を採用し、過去分詞 E が文末 (V2 + V-final = 標準ドイツ語語順) に来ている。これは V2 / 枠構造 (Satzklammer) として **完全に文法的に正当**。

**Problem:** 単に「E が文末で D から離れている」のは V2 文法上正当だが、**de_at は F に "an" を当てているのに対し、de_gsw / nl は F を "en/een" (= 不定冠詞)** に当てている。「an」は de_at で「ein」のバイエルン/オーストリア訛り表記なので **F:an は F:ein のオーストリア訛り表記**として正当 (内容ラベルは F = 不定冠詞)。これは false positive。**スキップ**。

**確信度:** 【スキップ — 既知許容】(V2 / Satzklammer による語順は正当)

---

### 8. #33 [de] — "E:Das Zimmer A:des Hotels" 倒置 vs 兄弟全 11 変種の "A:Hotel-room" 単一名詞句【確実】

**Current:**
- [en] **A:The hotel** | **E:room** | B:was | C:very | D:clean
- [de] **E:Das Zimmer** | **A:des Hotels** | B:war | C:sehr | D:sauber ← E + A 倒置構造
- [de_at] **A:Des Zimmer** | B:im Hotel | C:war | D:sehr sauber ← A 単独 + B 修飾
- [de_by] **A:S'Zimma** | B:im Hotel | ... ← 同型
- [de_gsw] **A:S Hotelzimmer** | B:isch gsi ... ← A 単独 (合成語)
- [nl] **A:De hotelkamer** | B:was | ... ← A 単独 (合成語)
- [no/sv/da/is/fo] 全て **A:Hotellrommet / Hotellrummet** ← A 単独 (合成語)
- [yi] **A:דער האָטעל צימער** ← A 単独
- [nds] **A:Dat Zimmer** | B:in dat Hotel | ... ← de_at と同型

**Cross reference:** 英語 reference は **A:The hotel + E:room** の 2 分割 (修飾句 + 主名詞)。標準ドイツ語 (de) は属格構造 "Das Zimmer des Hotels" を採用し、英語と語順が逆 + E + A の倒置になっているが **これは形式的には英語 reference の "hotel + room" を反映する正当な対応**。一方 de_at / de_by / de_gsw / nl / no / sv / da / is / fo / yi / nds の 11 変種は **E 役割文字を palette から削除して A 1 セグ** に統合している (合成語 or 修飾句で 1 セグ化)。

**Problem:** **de のみが英語 reference の 2 分割に対応している唯一の変種**で、他 11 変種は英語の "hotel + room" 区別を反映していない。これは方向性として、(a) **de に合わせ全 11 変種を 2 分割**するか、(b) **de を 11 変種に合わせ 1 セグ化**するか、二択。`feedback_split_segments_like_reference.md` および `feedback_cross_sibling_role_consistency.md` は通常 (a) を支持。

**Proposed fix:** 北ゲルマン (no/sv/da/is/fo) は合成語 "Hotellrommet" で形態的に分離不可、yi も同様、これらは A 単独で正当。**de_at / de_by / nl / nds は分析的な「ホテルの部屋」表現が可能** であり、英語 reference に揃えて分割すべき:
```json
// Most aggressive — de_at と nds は「[Das] Zimmer + im Hotel」 構造 → A:Zimmer + E:im Hotel に reverse
{"id":33, "lang":"de_at", "op":"replace", "segments":[["E","Des Zimmer"],["A","im Hotel"],["C","war"],["D","sehr sauber"]], "finding":"split E:room + A:hotel-modifier to match en/de reference"}
{"id":33, "lang":"nds", "op":"replace", "segments":[["E","Dat Zimmer"],["A","in dat Hotel"],["C","weer"],["D","bannig rein"]], "finding":"split E:room + A:hotel"}
```
de_gsw "S Hotelzimmer" / nl "De hotelkamer" は合成語のため分割困難 → A 単独維持。**確信度:** 【蓋然】 (de_at / nds は分析的表現なので分割推奨、de_gsw / nl は維持)

---

### 9. #16 [de/de_at/de_by/de_gsw/nds] — 分離動詞 "fängt … an" を C と C の 2 つに分けている、yi は D 別ラベル【確実 — 設計議題】

**Current:**
- [en] A:What time | D:does | B:the movie | C:start
- [de] A:Wann | **C:fängt** | B:der Film | **C:an** ← C が 2 回
- [de_at] **C:fangt** | … | **C:an** ← C が 2 回
- [de_by] **C:fangt** | … | **C:o** ← 同
- [de_gsw] **C:fangt** | … | **C:aa** ← 同
- [nds] **C:fangt** | … | **C:an** ← 同
- [yi] A:ווען | **C:הייבט** | B:דער פֿילם | **D:אָן** ← Yiddish は分離詞を **D 別ラベル**
- [nl/no/sv/da/is/fo] 分離詞自体なし、動詞 1 セグで完結

**Cross reference:** ドイツ語族 5 変種 (de / de_at / de_by / de_gsw / nds) は **分離動詞 "anfangen / anfanga"** を `fängt ... an` の枠構造で表現し、**同じ C ラベルを 2 セグに重複**させている。一方 Yiddish は分離詞 "אָן (on)" を **D 別ラベル**で扱っている。

**Problem:** 同じ role-letter が 1 文に 2 度現れる **C... C** パターンは、メモリ `feedback_no_adjacent_same_segments.md` に類似する形式 (隣接ではないが、同 ID 重複の妥当性) を疑わせる。Yi の **D 別ラベル** は (a) 英語 reference の D:does 助動詞位置と整合、(b) 分離詞を「文法機能語」として別カテゴリにする筋が通る、(c) 兄弟と整合させるなら全ドイツ語族も yi 同様の D 別ラベルにすべき。

**Proposed fix:** **yi の D:אָן 方式に統一**:
```json
{"id":16, "lang":"de", "op":"replace", "segments":[["A","Wann"],["C","fängt"],["B","der Film"],["D","an"]], "finding":"label separable particle as D (not C-duplicate) to match yi"}
{"id":16, "lang":"de_at", "op":"replace", "segments":[["A","Wann"],["C","fangt"],["B","der Film"],["D","an"]], "finding":"label separable particle an as D"}
{"id":16, "lang":"de_by", "op":"replace", "segments":[["A","Wonn"],["C","fangt"],["B","da Film"],["D","o"]], "finding":"label separable particle o as D"}
{"id":16, "lang":"de_gsw", "op":"replace", "segments":[["A","Wänn"],["C","fangt"],["B","de Film"],["D","aa"]], "finding":"label separable particle aa as D"}
{"id":16, "lang":"nds", "op":"replace", "segments":[["A","Wannehr"],["C","fangt"],["B","de Film"],["D","an"]], "finding":"label separable particle an as D"}
```
**確信度:** 【確実 — yi の前例あり】

---

### 10. #70 [de_at/de_by] — 分離動詞 "sperrt … zu" を C... C 重複、兄弟は C 単独 + F:時間【確実】

**Current:**
- [en] A:The store | **C:closes** | D:at | E:9 | F:PM
- [de] A:Das Geschäft | **C:schließt** | D:um | E:21 | F:Uhr ← C 単独
- [de_gsw] A:De Lade | **C:schlüsst** | D:um | E:21 | F:Uhr ← C 単独
- [nl/no/sv/da/is/fo] 同様に C 単独
- [yi] A:דער קראָם | **C:פֿאַרמאַכט** | D:אום | E:9 | F:בײַנאַכט ← C 単独
- [nds] A:De Laden | **C:slütt** | D:üm | E:negen Uhr | F:avends ← C 単独
- [**de_at**] A:Des Gschäft | **C:sperrt** | D:um | E:neune | F:am Abend | **C:zu** ← C 重複
- [**de_by**] A:Da Lodn | **C:sperrt** | D:um | E:neune | F:am Obnd | **C:zua** ← C 重複

**Cross reference:** de_at "zusperren" / de_by "zuasperrn" は分離動詞で、de_at が "sperrt ... zu" を **C... C 重複**で示している (#16 と同型の問題)。

**Problem:** #16 と同型。

**Proposed fix:** #16 と同じく D 別ラベル:
```json
{"id":70, "lang":"de_at", "op":"replace", "segments":[["A","Des Gschäft"],["C","sperrt"],["D","um"],["E","neune"],["F","am Abend"],["G","zu"]], "finding":"label separable particle zu as G (new letter) to avoid C duplication"}
{"id":70, "lang":"de_by", "op":"replace", "segments":[["A","Da Lodn"],["C","sperrt"],["D","um"],["E","neune"],["F","am Obnd"],["G","zua"]], "finding":"label separable particle zua as G"}
```
(注: D は時刻、E は数字、F は時間帯で既に使用、よって G を新規追加。または palette に "G" 役割を追加要)
**確信度:** 【確実】

---

### 11. #7 [de/de_at/de_gsw] — "C:wird ... C:sein" 助動詞 + コピュラを **C... C** 重複、兄弟は C 単独【確実】

**Current:**
- [en] A:Tomorrow's | B:weather | C:will be | D:sunny ← C 単独 ("will be" 1 セグ)
- [de] A:Morgen | **C:wird** | B:das Wetter | D:sonnig | **C:sein** ← C 重複
- [de_at] **C:wird** ... **C:sein** ← 同
- [de_gsw] **C:wird** ... **C:sii** ← 同
- [de_by] **C:wird** | B:s Weda | D:sonnig (sein 省略) ← C 単独
- [nl/no/sv/da/is/fo/yi/nds] 全て C 単独 (1 動詞形)

**Cross reference:** ドイツ語族 3 変種 (de / de_at / de_gsw) は未来形 "wird ... sein" を枠構造で表し、**C を 2 セグに重複**。これは #16 / #70 の分離動詞重複と同類の現象。

**Problem:** 英語 reference "will be" は 1 セグなのに、独語が 2 セグで C 重複ラベル付け。代替案: **C:wird + C:sein → C:wird + H:sein** (もしくは英語と完全に揃え枠構造を 1 セグに圧縮)。**圧縮は意味不明** (枠構造の分離は本質的) なので、別ラベル化が正解。

**Proposed fix:**
```json
{"id":7, "lang":"de", "op":"replace", "segments":[["A","Morgen"],["E","wird"],["B","das Wetter"],["D","sonnig"],["C","sein"]], "finding":"split future-aux from copula: E:wird + C:sein"}
{"id":7, "lang":"de_at", "op":"replace", "segments":[["A","Morgen"],["E","wird"],["B","des Wetter"],["D","sonnig"],["C","sein"]], "finding":"split future-aux from copula"}
{"id":7, "lang":"de_gsw", "op":"replace", "segments":[["A","Morn"],["E","wird"],["B","s Wätter"],["D","sonnig"],["C","sii"]], "finding":"split future-aux from copula"}
```
**確信度:** 【確実】

---

### 12. #80 [de_at/de_gsw] — "B|F:Auslandsstudium" / "B|F:es Uslandstudium" 複合ラベル vs 兄弟の "B:studying + F:abroad" 分割【確実】

**Current:**
- [en] A:I | E:believe | **B:studying** | **F:abroad** | D:is | I:a | G:valuable | C:experience
- [de] A:Ich | E:glaube | H:dass | **B:ein Auslands** | **F:studium** | I:eine | … ← B + F 分割
- [de_by] A:I | E:glaab | H:dass | **F:im Ausland** | **B:studiern** | I:a | … ← B + F 分割
- [nl/no/sv/da/yi] 全て **B + F** 分割
- [**de_at**] A:I | E:glaub | **B|F:Auslandsstudium** | D:is | … ← 複合ラベル
- [**de_gsw**] A:Ich | E:glaube | H:dass | **B|F:es Uslandstudium** | I:e | … ← 複合ラベル

**Cross reference:** "Auslandsstudium" は明らかな合成語 (Ausland + Studium = abroad + study)、英語 reference の B + F に対応。兄弟 9 変種は分割しているのに de_at / de_gsw のみ B|F 複合。

**Problem:** メモリ `feedback_cross_sibling_role_consistency.md` 真っ向違反。さらに de (Hochdeutsch) は **同じ Auslandsstudium 派生語 "Auslands+studium" を B + F に分割** しているのに、de_at / de_gsw は分割していない。

**Proposed fix:**
```json
{"id":80, "lang":"de_at", "op":"replace", "segments":[["A","I"],["E","glaub"],["B","Auslands"],["F","studium"],["D","is"],["I","a"],["G","wertvolle"],["C","Erfahrung"]], "finding":"split B|F:Auslandsstudium → B:Auslands + F:studium to match de"}
{"id":80, "lang":"de_gsw", "op":"replace", "segments":[["A","Ich"],["E","glaube"],["H","dass"],["B","es Uslands"],["F","tudium"],["I","e"],["G","wärtvoli"],["C","Erfahrig"],["D","isch"]], "finding":"split B|F:Uslandstudium → B + F (or reconsider Swiss German compound boundary)"}
```
**確信度:** 【確実】 (ただし de_gsw の分割境界は形態的に検討要)

---

### 13. #46 [de] — "C" 役割文字が **欠落** (兄弟は C:on the phone / am Telefon / op't Telefon を持つ)【蓋然】

**Current:**
- [en] A:I | E:talk | H:ed | F:with | G:my | B:friend | **C:on the phone** | D:for an hour
- [de] A:Ich | H:habe | F:mit | G:meinem | B:Freund | D:eine Stunde | E:telefoniert ← **C 欠落**
- [de_at] A:I | H:hab | F:mit | G:meim | B:Freund | D:a Stund | **C:am Telefon** | E:gredt ← C あり
- [de_by] … | **C:am Telefon** | E:gredt ← C あり
- [de_gsw] A:Ich | H:ha | F:mit | G:mim | B:Fründ | D:e Stund | E:telefoniert ← **C 欠落** (動詞 "telefoniert" に "on the phone" の意味が含まれている)
- [nl] A:Ik | … | E:telefoneert ← **C 欠落**
- [no/sv/da/is/fo/yi/nds] 全て **C:i telefonen / på telefon / i telefon / í síma / på telefon / אויפֿן טעלעפֿאָן / an't Telefon** あり

**Cross reference:** 動詞 "telefonieren" (de/de_gsw) / "telefoneren" (nl) は語彙的に「電話で話す」を 1 語で表現するため、別途 C:電話 が不要になる。これは **言語学的に正当な合成**であり、欠陥ではない。

**Problem:** 英語 reference は **C:on the phone** を別セグに分けているが、de / de_gsw / nl は動詞内蔵で C 不要。ラベル不整合だが文法的には正当。**スキップ**。

**確信度:** 【スキップ — 既知許容】

---

### 14. #46 [da/is/fo] — "E|H:talte/talaði/tosaði" 複合 vs 兄弟の "H:auxiliary + E:participle" 分割【既知許容】

**Current:**
- [de] A:Ich | **H:habe** | F:mit | … | **E:telefoniert** ← H + E 分割
- [de_at/de_by] **H:hab/hob** + **E:gredt** ← 分割
- [nl] **H:heb** + **E:telefoneert** ← 分割
- [no/sv/yi/nds] **H:har/har/האָב/heff** + **E:snakket/pratat/גערעדט/snackt** ← 分割
- [**da**] A:Jeg | **E|H:talte** | F:med | … ← 単純過去で融合
- [**is**] A:Ég | **E|H:talaði** | F:við | … ← 単純過去で融合
- [**fo**] A:Eg | **E|H:tosaði** | F:við | … ← 単純過去で融合

**Cross reference:** da / is / fo は単純過去 (preterit) を採用し、形態的に 1 形態素のため E|H 複合は正当。Romance #9 (#37 review) で杉浦氏が es/pt の "hablé/falei" を同じ理由で許容しているのと同型。

**Problem:** なし。**スキップ — 既知許容**。

**確信度:** 【スキップ — 既知許容】

---

### 15. #52 [da/is/fo] — "C|H:mistede/týndi/misti" 複合【既知許容、#14 と同型】

**Current:** 単純過去で 1 形態素のため C|H 融合は正当。Romance #10 と同じ。**スキップ**。

---

### 16. #84 [is] — "B|C:kvefaðist" + "D|E:í síðustu viku" の二重複合【確実】

**Current:**
- [en] A:She | C:caught | B:a cold | E:last | D:week
- [de] A:Sie | C:hat sich | E:letzte | D:Woche | B:erkältet ← 3 ロール分割
- [no/sv/da] A:主語 | C:blev | E:forrige/förra/(da: 後述) | D:uke/veckan | B:forkjølet/förkyld ← 5 セグ
- [**da**] A:Hun | C:blev | B:forkølet | **D|E:i sidste uge** ← E + D 複合 1 セグ
- [**is**] A:Hún | **B|C:kvefaðist** | **D|E:í síðustu viku** ← B+C と D+E の **二重複合**
- [fo] A:Hon | C:bleiv | B:forkøld | E:seinastu | D:vikuna ← 5 セグ分割

**Cross reference:** is "kvefaðist" は再帰動詞 "kvefa-st" 1 語で「風邪をひいた」、確かに英語の "caught a cold" を 1 形態素表現。B|C 融合は正当。一方 **D|E:í síðustu viku** は前置詞句 (i + last week) で **3 形態素以上の分析的構造**、da と is で同じく D|E 複合化されているが、no/sv/fo は **E:forrige + D:uke / E:förra + D:veckan / E:seinastu + D:vikuna** と 2 分割。

**Problem:** da と is の D|E 複合は北ゲルマン少数派 (2/6)、no/sv/fo は分割 (3/6 + de 系全部 + nl/yi/nds で計 10/12 が分割)。da / is を no/sv/fo 側に揃えるべき。

**Proposed fix:**
```json
{"id":84, "lang":"da", "op":"replace", "segments":[["A","Hun"],["C","blev"],["B","forkølet"],["E","i sidste"],["D","uge"]], "finding":"split D|E:i sidste uge → E:i sidste + D:uge to match no/sv/fo"}
{"id":84, "lang":"is", "op":"replace", "segments":[["A","Hún"],["B|C","kvefaðist"],["E","í síðustu"],["D","viku"]], "finding":"split D|E:í síðustu viku → E:í síðustu + D:viku (keep B|C as reflexive verb is monolexemic)"}
```
**確信度:** 【確実】 (D|E のみ。B|C は維持)

---

### 17. #84 [de_at/de_by] — "C:hat sich + B:a Verkühlung + C:gholt" — C を二度ラベル付け【確実】

**Current:**
- [de] A:Sie | **C:hat sich** | E:letzte | D:Woche | **B:erkältet** ← 3 + 1 = 完璧
- [**de_at**] A:Sie | **C:hat sich** | B:a Verkühlung | **C:gholt** | E:letzte | D:Woch ← **C が 2 回**
- [**de_by**] A:Sie | **C:hot sich** | B:a Verkühlung | **C:ghoid** | E:letzte | D:Woch ← 同
- [de_gsw] A:Si | C:hät sich | E:letscht | D:Wuche | B:erkältet ← de と同型

**Cross reference:** de_at / de_by は「sich eine Verkühlung holen」(風邪を取得する = カジュアル表現) と「erkälten」(風邪をひく = 標準) を別構文として採用し、その結果 "hat sich ... gholt" の枠構造で C が 2 回現れている。これは #16 / #70 の分離動詞 C 重複と同型の問題。

**Problem:** C... C 重複。

**Proposed fix:** 動詞 "gholt/ghoid" は本動詞 (B 側ではなく) なので C を残しつつ、最初の "hat sich" を **F (助動詞 + 再帰代名詞) 等別ラベル**に:
```json
{"id":84, "lang":"de_at", "op":"replace", "segments":[["A","Sie"],["F","hat sich"],["B","a Verkühlung"],["C","gholt"],["E","letzte"],["D","Woch"]], "finding":"split C:hat sich → F (aux+refl); keep C for main verb gholt"}
{"id":84, "lang":"de_by", "op":"replace", "segments":[["A","Sie"],["F","hot sich"],["B","a Verkühlung"],["C","ghoid"],["E","letzte"],["D","Woch"]], "finding":"same as de_at"}
```
**確信度:** 【確実】

---

### 18. #99 [de_at/de_by/nds] — A 役割文字 (指示詞 "dieses/das/denne/...") が **palette 脱落**【蓋然】

**Current:**
- [en] C:How much | D:is | **A:this** | B:souvenir
- [de] C:Wie viel | D:kostet | **A:dieses** | B:Souvenir ← A あり
- [de_gsw] C:Wieviel | D:choschtet | **A:das** | B:Souvenir ← A あり
- [nl] C:Hoeveel | D:kost | **A:dit** | B:souvenir ← A あり
- [no/sv/da/is/fo/yi] 全て **A:denne/den här/denne/þessi/henda/דער דאָזיקער** あり
- [**de_at**] C:Wievül | D:kostet | **B:des Souvenir** ← A 削除、des を B に統合
- [**de_by**] C:Wievui | D:kost | **B:des Souvenir** ← 同
- [**nds**] C:Wat | D:kost | **B:dat Souvenir** ← 同

**Cross reference:** de_at "des" = 「この (Bavarian: dieses)」、de_by "des" = 同、nds "dat" = 「この」だが指示詞というより冠詞的用法。**形態的には指示詞、機能的には定冠詞** という曖昧域。

**Problem:** 兄弟 9 変種は明確に **A:指示詞** を分けているが、de_at/de_by/nds は **B 側に統合**。一貫性のため de_at/de_by/nds も A:des/des/dat に分けるべき。

**Proposed fix:**
```json
{"id":99, "lang":"de_at", "op":"replace", "segments":[["C","Wievül"],["D","kostet"],["A","des"],["B","Souvenir"]], "finding":"split A:des + B:Souvenir to match de/no/sv/da/.../yi"}
{"id":99, "lang":"de_by", "op":"replace", "segments":[["C","Wievui"],["D","kost"],["A","des"],["B","Souvenir"]], "finding":"split A:des + B:Souvenir"}
{"id":99, "lang":"nds", "op":"replace", "segments":[["C","Wat"],["D","kost"],["A","dat"],["B","Souvenir"]], "finding":"split A:dat + B:Souvenir"}
```
**確信度:** 【確実】

---

### 19. #25 [de_at/de_by/de_gsw/da/is/fo/yi/nds] — C 役割 (不定冠詞 "ein/a/et") **palette 脱落**、F (形容詞 "großen/big") に統合【蓋然】

**Current:**
- [en] A:My father | E:works | B:at | **C:a** | F:big | D:company ← C + F 分割
- [de] A:Mein Vater | E:arbeitet | B:bei | **C:einem** | F:großen | D:Unternehmen ← 分割
- [nl] A:Mijn vader | E:werkt | B:bij | **C:een** | F:groot | D:bedrijf ← 分割
- [no/sv] A:Faren min/Min pappa | E:arbeider/arbetar | B:i/på | **C:et/ett** | F:stort/stort | D:selskap/företag ← 分割
- [**de_at/de_by/de_gsw/da/is/fo/yi/nds**] **F:a guats/ana großn/ere grosse/en stor/stóru/einum stórum/אַ גרויסער/een groote** ← **C を F に吸収**

**Cross reference:** 英ドイツ標準 (en/de/nl/no/sv) は **不定冠詞を C、形容詞を F** に分けているが、de_at / de_by / de_gsw / da / is / fo / yi / nds は **冠詞+形容詞を F 1 セグに融合**。

**Problem:** **8 vs 5 で融合派が多数派**だが、英語 reference + de + nl + no + sv の主流派 (5) が分割している。一貫性方針で **8 変種を分割側に揃える**のが望ましい。

**Proposed fix (例 de_at):**
```json
{"id":25, "lang":"de_at", "op":"replace", "segments":[["A","Mei Vater"],["E","arbeitet"],["B","bei"],["C","a"],["F","guats"],["D","Firma"]], "finding":"split C:a (article) + F:guats (adjective) to match de/nl/no/sv/en"}
{"id":25, "lang":"de_by", "op":"replace", "segments":[["A","Mei Voda"],["E","orbat"],["B","bei"],["C","a"],["F","na großn"],["D","Firma"]], "finding":"split C+F"}
{"id":25, "lang":"da", "op":"replace", "segments":[["A","Min far"],["E","arbejder"],["B","i"],["C","en"],["F","stor"],["D","virksomhed"]], "finding":"split C+F"}
{"id":25, "lang":"is", "op":"replace", "segments":[["A","Pabbi minn"],["E","vinnur"],["B","hjá"],["F","stóru"],["D","fyrirtæki"]], "finding":"is has no indefinite article; keep F only (legitimate)"}
{"id":25, "lang":"nds", "op":"replace", "segments":[["A","Mien Vadder"],["E","arbeit"],["B","bi"],["C","een"],["F","groote"],["D","Firma"]], "finding":"split C+F"}
```
is は不定冠詞自体がない (形容詞のみ "stóru") ため C 不要、F 単独で正当。**確信度:** 【蓋然】 (構文的には is/yi 除き正当な分割可能、ただし F の中身が "数 + 形容詞" の場合は複合維持の選択もあり)

---

### 20. #28 [de_at/de_by/de_gsw/no/sv/da/is/fo/yi/nds] — **D 役割 (不定冠詞)** が脱落、F (形容詞) に統合【蓋然 — #25 と同型パターン】

**Current:**
- [en] A:Could | B:you | C:recommend | **D:a** | F:good | E:restaurant
- [de] A:Könnten | B:Sie | **D:ein** | F:gutes | E:Restaurant | C:empfehlen ← D + F 分割
- [nl] A:Kunt | B:u | **D:een** | F:goed | E:restaurant | C:aanbevelen ← 分割
- [de_at/de_by/de_gsw/no/sv/da/is/fo/yi/nds] **F:a guats/a guads/es guets/en god/en bra/en god/góðum/eitt gott/אַ גוטן/en good** ← D 削除

**Cross reference:** #25 と同型 (英語 reference は D 別、多数派は F に融合)。

**Problem:** 2 (de+nl) vs 10 (残り) で **多数派が融合**。ここは多数決基準でこのまま許容するか、英語 reference + de + nl に合わせ 10 変種を分割するか。

**Proposed fix:** **要検討**。最小提案: 兄弟 12 変種を 1 方針 (融合 or 分割) に統一すること。私の好みは英語 reference に合わせ全て分割。
```json
// 分割派 (一部):
{"id":28, "lang":"no", "op":"replace", "segments":[["A","Kan"],["B","du"],["C","anbefale"],["D","en"],["F","god"],["E","restaurant"]], "finding":"split D:en + F:god to match en/de/nl"}
{"id":28, "lang":"sv", "op":"replace", "segments":[["A","Kan"],["B","du"],["C","rekommendera"],["D","en"],["F","bra"],["E","restaurang"]], "finding":"split D+F"}
// (… 他 8 変種同様 …)
```
**確信度:** 【要検討】 (#25 と一括で方針決定)

---

### 21. #45 [no] — E + F 役割文字 (前置詞 + 指示詞) が **palette 脱落**、A に統合「I dette landet」【確実】

**Current:**
- [en] **E:In** | **F:this** | A:country | D:it gets | C:cold | B:in winter
- [de/de_at/de_by/de_gsw/nl/sv/da/is/fo/yi/nds] 全て **E:In/I + F:diesem/dem/dit/det här/dette/þessu/hesum/דעם/dat + A:Land/landet/...** と 3 分割
- [**no**] **A:I dette landet** | D:blir det | B:om vinteren | C:kaldt ← E + F + A を A 1 セグに融合

**Cross reference:** 北ゲルマン 6 変種中 sv/da/is/fo の 4 変種は E + F + A を分割、no のみ融合。

**Problem:** no が孤立して融合している。

**Proposed fix:**
```json
{"id":45, "lang":"no", "op":"replace", "segments":[["E","I"],["F","dette"],["A","landet"],["D","blir det"],["B","om vinteren"],["C","kaldt"]], "finding":"split A:I dette landet → E:I + F:dette + A:landet to match all 11 siblings"}
```
**確信度:** 【確実】

---

### 22. #15 [da] — D 役割 (進行体 "is/er" コピュラ) が **palette 脱落**【蓋然】

**Current:**
- [en] A:My younger sister | **D:is** | C:studying abroad | B:in France
- [de] A:Meine jüngere Schwester | C:studiert | **D:gerade** | B:in Frankreich ← D = "currently"
- [de_at] … | **D:grad** ← 同
- [de_by/de_gsw] **D:grad** ← 同
- [nl] **D:nu** ← 同
- [no] **D:for tiden** ← 同
- [sv] **D:just nu** ← 同
- [is/fo] **D:er** + C:í námi erlendis ← D = コピュラ
- [yi] **D:איז** + C:לערנט אין אויסלאַנד ← D = コピュラ
- [nds] **D:graad** ← "currently"
- [**da**] A:Min lillesøster | C:studerer i udlandet | B:i Frankrig ← **D 欠落**

**Cross reference:** 11 変種が D を持つ (一部は「現在」副詞、一部はコピュラ "be")。da だけ D を全く持たない。**動詞 "studerer i udlandet"** で英語の "is studying abroad" を表現。D = 現在副詞 / コピュラのいずれかが必要。

**Problem:** da は単純現在で「学んでいる」を表すため D 副詞不要、というのは言語学的に正当。da の他形 "studerer for øjeblikket / lige nu" 等で副詞を入れる方が兄弟と整合するが、da の現状 (副詞なし) も非文法ではない。

**Proposed fix:** 任意追加:
```json
{"id":15, "lang":"da", "op":"replace", "segments":[["A","Min lillesøster"],["C","studerer"],["D","i øjeblikket"],["B","i Frankrig"]], "finding":"add D:i øjeblikket (currently) to match no/sv siblings; current text drops aspect adverb"}
```
**確信度:** 【蓋然】 (中身の text change を伴うので慎重)

---

### 23. #10 [is/yi] — A 役割 (主語 "you/Sie") が **palette 脱落**【確実】

**Current:**
- [en] D:Can | **A:you** | C:speak | B:English
- [de] D:Können | **A:Sie** | B:Englisch | C:sprechen
- [de_at/de_by/de_gsw/nl/no/sv/da/fo/nds] 全て **A:Sie/S'/Sie/Si/u/De/ni/du/tú/Se** ← A あり
- [**is**] D:Geturðu | C:talað | B:ensku ← **A 欠落** (Geturðu = Getur + þú 縮約)
- [**yi**] D:קענסטו | C:רעדן | B:ענגליש ← **A 欠落** (קענסטו = קענסט + דו 縮約)

**Cross reference:** is "Geturðu" は **Getur (can) + þú (you)** の融合形 (clitic pronoun)、yi "קענסטו" も **קענסט (can-2sg) + דו (you)** の融合形。両者とも形態的に分離不可ではないが、伝統的に 1 語綴り。

**Problem:** is / yi 共に **D|A** 複合ラベルにする選択肢があり、A 役割文字を完全に脱落させているのは palette consistency に反する。

**Proposed fix:**
```json
{"id":10, "lang":"is", "op":"replace", "segments":[["D|A","Geturðu"],["C","talað"],["B","ensku"]], "finding":"label clitic-fused D+A:Geturðu as D|A composite (Getur+þú) to preserve A in palette"}
{"id":10, "lang":"yi", "op":"replace", "segments":[["D|A","קענסטו"],["C","רעדן"],["B","ענגליש"]], "finding":"label clitic-fused קענסטו as D|A composite (קענסט+דו)"}
```
**確信度:** 【確実】

---

### 24. #40 [is] — A 役割 (主語 "Sie/du") **palette 脱落** ("Veistu" = Veit + þú 縮約)【確実 — #23 と同型】

**Current:**
- [en] **E:Do** | **A:you** | E:know | C:where | B:the post office | D:is
- [de/de_at/de_by/de_gsw/nl/no/sv/da/fo/yi/nds] 全て **A:Sie/S'/...** あり
- [**is**] **E:Veistu** | C:hvar | B:pósthúsið | D:er ← A 欠落 (Veistu = Veit + þú)

**Cross reference:** #23 と同型 (is の clitic 融合 + A 脱落)。

**Proposed fix:**
```json
{"id":40, "lang":"is", "op":"replace", "segments":[["E|A","Veistu"],["C","hvar"],["B","pósthúsið"],["D","er"]], "finding":"label clitic-fused Veistu as E|A composite (Veit+þú) to preserve A"}
```
**確信度:** 【確実】

---

### 25. #89 [is] — B 役割 (助動詞 "can") + E (定冠詞) **palette 脱落**【確実】

**Current:**
- [en] A:I | **B:can** | C:'t | D:find | **E:the** | F:Wi-Fi | G:password
- [de/de_at/de_by/de_gsw/nl] 全て **B:kann/chan + E:das/des/s/het** あり
- [no/sv/da/fo] **B:kan + (E なし: 北ゲルマンは定冠詞接尾辞、後置)** — palette E は使われない
- [yi] **B:קען + E:דעם** あり
- [nds] **B:kann + E:dat** あり
- [**is**] **A:Ég | D:finn | C:ekki | F:Wi-Fi | G:-lykilorðið** ← **B 助動詞欠落** + E 欠落

**Cross reference:** is は "geta + 不定詞" の助動詞構造を使わず、直接「Ég finn ekki ...」(I find not ...) と単純動詞で表現。これは **言語選択** であり、形態的に B (can) を入れる余地がない。**E 定冠詞** も is "lykilorðið" は -ið が定冠詞接尾辞のため形態的に分離不可で E 欠落は正当。

**Problem:** B 助動詞欠落は **言語的選択 (modal-less 構文)** で正当。is "get ekki fundið..." (= can't find) という助動詞付き構文も可能だが、現状の "finn ekki" も誤りではない。**スキップ — 既知許容**。

**確信度:** 【スキップ — 既知許容】

---

### 26. #58 [no/sv] — D 役割 (動詞 "take") **palette 脱落**【蓋然】

**Current:**
- [en] A:I | E:want to | **D:take** | C:a photo | B:of this temple
- [de/de_at/de_by/de_gsw/nl] **D:machen/mochn/mache/maken** あり (D = "do/make")
- [da/is/fo/yi/nds] **D:tage/taka/taka/מאַכן/maken** あり
- [**no**] A:Jeg | E:vil | **C:ta et bilde** | B:av dette tempelet ← D 欠落 (動詞 ta が C に統合)
- [**sv**] A:Jag | E:vill | **C:ta ett foto** | B:av det här templet ← 同

**Cross reference:** 兄弟 10 変種が **D + C 分割** ("撮る" + "写真")、no/sv は **C:ta et bilde** = "撮る 写真" を 1 セグに融合。

**Problem:** no/sv の動詞 + 目的語を 1 セグに融合するパターンは、メモリ `feedback_number_noun_merge_into_B.md` のような正当な融合 (数 + 名詞) とは異なり、動詞 + 目的語の融合。

**Proposed fix:**
```json
{"id":58, "lang":"no", "op":"replace", "segments":[["A","Jeg"],["E","vil"],["D","ta"],["C","et bilde"],["B","av dette tempelet"]], "finding":"split C:ta et bilde → D:ta + C:et bilde to match 10 siblings"}
{"id":58, "lang":"sv", "op":"replace", "segments":[["A","Jag"],["E","vill"],["D","ta"],["C","ett foto"],["B","av det här templet"]], "finding":"split D + C"}
```
**確信度:** 【確実】

---

### 27. #31 [de_at/de_by/de_gsw/nl/is/fo/yi/nds] — D 役割 (曜日 "Monday") **palette 脱落**、B (形容詞 "next") に統合【蓋然】

**Current:**
- [en] A:The exam | C:is | **B:next** | **D:Monday** ← B + D 分割
- [de] A:Die Prüfung | C:ist | **B:nächsten** | **D:Montag** ← 分割
- [no/sv/da] **B:neste/nästa/næste** + **D:mandag/måndag/mandag** ← 分割
- [**de_at**] **B:am Montag** ← 融合 (B = "on Monday")
- [**de_by**] **B:am Mondo** ← 同
- [**de_gsw**] **B:nöchschte Mäntig** ← 融合 ("next Monday")
- [**nl**] **B:volgende maandag** ← 融合
- [**is**] **B:næsta mánudag** ← 融合
- [**fo**] **B:næsta mánadag** ← 融合
- [**yi**] **B:קומענדיקן מאָנטיק** ← 融合
- [**nds**] **B:Maandag** ← "next" を完全に削除 (B のみ)

**Cross reference:** 4 (en/de/no/sv/da) vs 8 (融合派) で **融合派が多数**。Northern continental Germanic (de/no/sv/da) のみ B + D 分割を保持。

**Problem:** 多数派融合だが、英語 reference + 標準ドイツ語 + 北欧 3 が分割。**統一方針: 全 12 変種を分割すべき** — "next" は形容詞、"Monday" は名詞で意味的に分離可。さらに nds は "next" 自体を完全削除しており、text change なしには修正不能。

**Proposed fix:**
```json
{"id":31, "lang":"de_at", "op":"replace", "segments":[["A","Die Prüfung"],["C","is"],["B","am nächsten"],["D","Montag"]], "finding":"split B:am Montag → B:am nächsten + D:Montag (re-introduce 'next' adjective, text change)"}
{"id":31, "lang":"nl", "op":"replace", "segments":[["A","Het examen"],["C","is"],["B","volgende"],["D","maandag"]], "finding":"split B:volgende maandag → B:volgende + D:maandag"}
{"id":31, "lang":"is", "op":"replace", "segments":[["A","Prófið"],["C","er"],["B","næsta"],["D","mánudag"]], "finding":"split B + D"}
{"id":31, "lang":"fo", "op":"replace", "segments":[["A","Próvið"],["C","er"],["B","næsta"],["D","mánadag"]], "finding":"split B + D"}
{"id":31, "lang":"yi", "op":"replace", "segments":[["A","דער עקזאַמען"],["C","איז"],["B","קומענדיקן"],["D","מאָנטיק"]], "finding":"split B + D"}
```
de_at "am Montag" は "next" を削除しているため text change 要 (慎重に)。**確信度:** 【蓋然】 (text change 含むため)

---

### 28. #21 [de/nl] — D 役割 ("dinner") **palette 脱落**【蓋然】

**Current:**
- [en] A:I | E:will have | **D:dinner** | C:with friends | B:tonight
- [de_at/de_by/de_gsw] **D:z' Abend/z'Nocht/z Nacht** あり (D = "supper")
- [no/sv/da/is/fo] **D:middag/middag/aftensmad/kvöldmat/kvøldmat** あり
- [nds] **D:to Avend** あり
- [yi] **D:וועטשערע** あり
- [**de**] A:Ich | E:esse | B:heute Abend | C:mit Freunden ← **D 欠落** (動詞 "esse" 単独で「夕食を食べる」)
- [**nl**] A:Ik | E:eet | B:vanavond | C:met vrienden ← **D 欠落** (動詞 "eet" 単独)

**Cross reference:** 兄弟 10 変種は **D:dinner 名詞** を別セグに置く。de/nl のみ「夕食を食べる」を 1 動詞「essen/eten」で表現し、D 欠落。

**Problem:** これは de/nl で動詞 "(zu Abend) essen" が「dinner を食べる」を意味するため D 不要、というのは正当。しかし兄弟整合性のため、**D 役割を入れる選択 (例 de: "D:zu Abend essen" を分割し E:essen + D:zu Abend)** も可能。

**Proposed fix:**
```json
{"id":21, "lang":"de", "op":"replace", "segments":[["A","Ich"],["E","esse"],["B","heute Abend"],["C","mit Freunden"],["D","zu Abend"]], "finding":"add D:zu Abend (dinner) to match 10 siblings; current drops dinner-noun aspect"}
{"id":21, "lang":"nl", "op":"replace", "segments":[["A","Ik"],["E","eet"],["B","vanavond"],["C","met vrienden"],["D","het avondeten"]], "finding":"add D:het avondeten to match 10 siblings"}
```
**確信度:** 【蓋然】 (text change 要)

---

### 29. #41 [de_at/de_by] — "B:Grad" が文頭、A:i が文中に — yi も同型【確実 — 設計議題】

**Current:**
- [en] A:I'm | E:reading | D:an | C:interesting | F:book | **B:now**
- [de] A:Ich | E:lese | **B:gerade** | D:ein | C:interessantes | F:Buch ← 通常語順
- [de_gsw/nl/no/sv] 同型 (主語 A 文頭)
- [**de_at**] **B:Grad** | E:les | **A:i** | B:a | C:interessantes | F:Buch ← 文頭 B (副詞 V2)
- [**de_by**] **B:Grad** | E:lies | **A:i** | B:a | C:interessants | F:Buach ← 同
- [**yi**] **B:איצט** | E:לייען | **A:איך** | C:אַן אינטערעסאַנט | F:בוך ← 同型 (V2)
- [**nds**] **A:Graad** | F:lees ik | B:een | C:interessantet | E:Book ← "Graad" を A (誤?) + F に主語+動詞融合

**Cross reference:** de_at / de_by / yi の文頭副詞 + V2 倒置は正当な V2 文法 (副詞 → 動詞 → 主語)。これは方言文法上の選択であり問題なし。**ただし de_at / de_by は B が 2 回現れる (B:Grad ... B:a)** — これは #16 / #70 と同類の C/B 重複問題。

**Problem:** **B が 2 回**:
- de_at: **B:Grad** ... **B:a** (副詞 + 不定冠詞 を両方 B)
- de_by: 同

**Proposed fix:** 不定冠詞 "a" は **D 別ラベル**にすべき (de "ein" も D):
```json
{"id":41, "lang":"de_at", "op":"replace", "segments":[["B","Grad"],["E","les"],["A","i"],["D","a"],["C","interessantes"],["F","Buch"]], "finding":"split B:a (article) → D:a to avoid B duplication"}
{"id":41, "lang":"de_by", "op":"replace", "segments":[["B","Grad"],["E","lies"],["A","i"],["D","a"],["C","interessants"],["F","Buach"]], "finding":"split B:a → D:a"}
```
nds の "A:Graad" + "F:lees ik" は (a) Graad を A ではなく B にすべき (副詞)、(b) lees ik は F ではなく **E (動詞) + A (主語)** に分けるべき:
```json
{"id":41, "lang":"nds", "op":"replace", "segments":[["B","Graad"],["E","lees"],["A","ik"],["D","een"],["C","interessantet"],["F","Book"]], "finding":"split A:Graad → B:Graad (adverb), and F:lees ik → E:lees + A:ik"}
```
**確信度:** 【確実】

---

### 30. #55 [de_at/de_by/nds] — 文頭 D:Jeden Tag + 文中 A:i / A:ik (V2 倒置) は正当だが、is が "B|F:kaffibolli" 複合【確実 — is 単独問題】

**Current:**
- [en] A:I | C:drink | E:two | F:cups of | B:coffee | D:every day
- [de_at] **D:Jeden Tag** | C:trink | A:i | E:zwei | F:Häferl | B:Kaffee ← V2 倒置正当
- [de_by/nds] 同型
- [**is**] A:Ég | C:drekk | E:tvo | **B|F:kaffibolli** | D:á hverjum degi ← **B + F 複合 (合成語 kaffi+bolli)**

**Cross reference:** is "kaffibolli" は **kaffi (coffee = B) + bolli (cup = F)** の合成名詞 1 語。北欧スカンディナビアの典型的な合成名詞。B|F 複合ラベルは正当 (#77 北ゲルマンの prøveresultatene と同型)。

**Problem:** これは #77 と同類の合成名詞処理で、is 単独で **B|F** 複合は正当。**スキップ — 既知許容**。

ただし fo "F:koppar av B:kaffi" や da "E:to F:kopper B:kaffe" は分析的に分割している。is も "B:kaffi + F:bolla" と 2 形態素に分割可能だが、現状の 1 セグ複合 (是) も誤りではない。**スキップ**。

**確信度:** 【スキップ — 既知許容】

---

### 31. #22 [is] — B 役割 (不定冠詞 "a/eitt") **palette 脱落**【蓋然】

**Current:**
- [en] A:I | E:want to | D:learn | **B:a** | F:new | C:language ← B あり
- [de/de_at/de_by/de_gsw] **B:eine/a/a/e** ← B あり
- [nl] **B:een** ← B あり
- [no/sv/da] **B:et/ett/et** ← B あり
- [fo] **B:eitt** ← B あり
- [yi] **B:אַ** ← B あり
- [nds] **B:een** ← B あり
- [**is**] A:Ég | E:vil | D:læra | **F:nýtt** | C:tungumál ← **B 欠落** (不定冠詞なし)

**Cross reference:** is は元来 **不定冠詞 (a/an) を持たない言語** (Old Norse 由来)、英語 reference の "a new language" を「nýtt tungumál」と冠詞なしで表現する。**形態的に B を入れる余地がない。** これは言語的に正当。**スキップ — 既知許容**。

**確信度:** 【スキップ — 既知許容】

---

### 32. #26 [da/is/yi] — D 役割 (現在副詞 "now") **palette 脱落**【蓋然】

**Current:**
- [en] A:The children | **D:are** | C:playing | B:in | E:the park
- [de/de_at/de_by/de_gsw] **D:gerade/grad** ← D = "currently"
- [nl] **D:nu** ← 同
- [no/sv] **D:nå/just nu** ← 同
- [fo] **D:eru** + C:at leika ← D = コピュラ (B 進行)
- [nds] **D:graad** ← "currently"
- [**da**] A:Børnene | C:leger | B:i | E:parken ← **D 欠落**
- [**is**] A:Börnin | C:leika sér | B:í | E:garðinum ← **D 欠落**
- [**yi**] A:די קינדער | C:שפּילן | B:אין | E:פּאַרק ← **D 欠落**

**Cross reference:** 9 変種が D (副詞 or コピュラ) を持つ、da/is/yi の 3 変種は単純現在で D 不要。

**Problem:** da/is/yi の単純現在は **言語選択として正当**、進行アスペクトを明示的に副詞で示さない。da の "lige nu" / is の "núna" / yi の "איצט" を追加すれば兄弟と整合するが、必須ではない。

**Proposed fix:** 任意 (text change 含む):
```json
{"id":26, "lang":"da", "op":"replace", "segments":[["A","Børnene"],["C","leger"],["B","i"],["E","parken"],["D","lige nu"]], "finding":"add D:lige nu (currently) to align with 9 siblings"}
```
**確信度:** 【蓋然 — 任意】

---

### 33. #13 [de_by/nl/no/sv/da/is/fo/yi/nds] — E 役割 (丁寧代名詞 "Sie") **palette 脱落**【蓋然】

**Current:**
- [en] A:Please | D:give | B:me | F:a glass of | C:water ← E なし (英語に丁寧代名詞なし)
- [de] A:Bitte | D:geben | **E:Sie** | B:mir | F:ein Glas | C:Wasser ← 命令丁寧形
- [de_at] D:geben | **E:S'** | B:mir ← 同
- [de_gsw] D:gänd | **E:Si** | B:mir ← 同
- [**de_by**] D:gebts | B:mir ← **E 欠落** (Bavarian 2pl 命令で代名詞融合)
- [nl] D:geef | B:mij ← **E 欠落** (オランダ語命令で代名詞融合)
- [no/sv/da/is/fo/yi/nds] 全て **E 欠落** (各言語の命令法)

**Cross reference:** これは言語の命令法形態のため、de_by (geb-ts = give-2pl) や英語的命令 (主語省略) などは E 不要。**スキップ — 既知許容**。

**確信度:** 【スキップ — 既知許容】

---

### 34. #49 [de_by/nl/no/sv/da/is/fo/yi/nds] — H 役割 (丁寧代名詞 "Sie") **palette 脱落**【蓋然 — #33 と同型】

**Current:**
- [de] A:Bitte | D:sagen | **H:Sie** | B:mir | E:den Weg | F:zum | G:Flughafen ← H あり
- [de_at] **H:S'** ← H あり
- [de_gsw] **H:Si** ← H あり
- [**de_by/nl/no/sv/da/is/fo/yi/nds**] 全て **H 欠落**

**Cross reference:** 同 #33。命令法の代名詞融合・省略。**スキップ — 既知許容**。

**確信度:** 【スキップ — 既知許容】

---

### 35. #37 [de/de_at/de_by/de_gsw/nl/no/sv/nds] — D 役割 (不定冠詞 "a") **palette 脱落**【確実 — 北欧 vs 南独立で割れる】

**Current:**
- [en] A:I | B:need to | E:buy | **D:a** | C:birthday | **D:present** ← D が 2 回 (冠詞 + 名詞 "present")
- [da] A:Jeg | B:skal | E:købe | **D:en** | C:fødselsdags | **D:gave** ← D が 2 回 (en と gave)
- [is] A:Ég | B:þarf að | E:kaupa | C:afmælis | **D:gjöf** ← D = gjöf のみ
- [fo] A:Eg | B:má | E:keypa | C:føðingardags- | **D:gávu** ← D = gávu のみ
- [yi] A:איך | B:דאַרף | E:קויפֿן | C:אַ געבורטסטאָג | **D:מתּנה** ← D = מתּנה のみ
- [**de/de_at/de_by/de_gsw/nl/no/sv/nds**] 8 変種で **D 全削除**、C:ein Geburtstagsgeschenk / a Geburtstagsgeschenk / en bursdagsgave 等を 1 セグに統合

**Cross reference:** これは英語 reference の **D が 2 回登場** (冠詞 + 名詞 present) で、北ゲルマン 5 変種 (da/is/fo/yi) と独語族 8 変種で扱いが分かれる。da は "D:en + D:gave" と 2 度、is/fo/yi は名詞のみ D。独語族は **合成語 "Geburtstagsgeschenk" を C 1 セグに統合**。

**Problem:** D 役割文字の意味論的位置付けが ambiguous (冠詞か名詞か)。**英語 reference 自体が D を 2 度使う構造**で、これに揃えるか否か。少なくとも独語族 8 変種が **D 全脱落** なのは palette consistency 違反 → C と D の分割が必要。

**Proposed fix:**
```json
{"id":37, "lang":"de", "op":"replace", "segments":[["A","Ich"],["B","muss"],["D","ein"],["C","Geburtstags"],["D","geschenk"],["E","kaufen"]], "finding":"split C:ein Geburtstagsgeschenk → D:ein + C:Geburtstags + D:geschenk to match en/da reference D-twice pattern"}
// (… 他 7 変種同様 …)
```
**確信度:** 【要検討】 (D 2 回パターン自体が議論余地あり)

---

### 36. #17 [nl] — G 役割 (時間帯 "afternoon") **palette 脱落** ("vanmiddag" 1 語に統合)【蓋然】

**Current:**
- [en] A:I | B:have | C:a meeting | D:at | E:3 o'clock | **F:this** | **G:afternoon** ← F + G 分割
- [de/de_at/de_by/de_gsw] **F:heute/heit + G:Nachmittag/Nommiddog/Namittag** ← 分割
- [no/sv/da/is/fo] **F:i + G:ettermiddag/eftermiddag/...** ← 分割
- [yi] **F:הײַנט + G:נאָכמיטאָג** ← 分割
- [nds] **F:vundaag + G:Namiddag** ← 分割
- [**nl**] A:Ik | B:heb | **F:vanmiddag** | D:om | E:3 uur | C:een vergadering ← **G 欠落** ("vanmiddag" = van+middag = this afternoon、1 語)

**Cross reference:** nl "vanmiddag" は **van (this) + middag (afternoon)** の融合語、形態的に分離可能だが綴り上 1 語。**F|G 複合**ラベルが適切。

**Proposed fix:**
```json
{"id":17, "lang":"nl", "op":"replace", "segments":[["A","Ik"],["B","heb"],["F|G","vanmiddag"],["D","om"],["E","3 uur"],["C","een vergadering"]], "finding":"label F|G:vanmiddag composite to preserve G in palette (van+middag = this+afternoon)"}
```
**確信度:** 【確実】

---

### 37. #3 [de/de_at/de_by] — "B|C:frühstücke/frühstück" 複合 vs 兄弟の "C:eat + B:breakfast" 分割【既知許容】

**Current:**
- [en] A:I | **C:eat** | **B:breakfast** | D:every morning | E:at 7 o'clock
- [de] A:Ich | **B|C:frühstücke** ← 動詞 1 語化
- [de_at] **B|C:frühstück** ← 同
- [de_by] **B|C:frühstück** ← 同
- [de_gsw/nl/no/sv/da/is/fo/yi/nds] **C:動詞 + B:名詞** 分割

**Cross reference:** 標準ドイツ語と Austrian/Bavarian の "frühstücken" は 1 動詞で「朝食を食べる」、Romance #5 (es "desayunar") と同型の語彙化動詞。B|C 複合は正当。**スキップ — 既知許容**。

**確信度:** 【スキップ — 既知許容】

---

## まとめ — 主要 chunking 欠陥カテゴリ

集計 (actionable):

| カテゴリ | 件数 | 代表例 |
|---|---|---|
| 主語 + 動詞 / 主語 + 助動詞 融合 (#85 と同型) | 5 件 | #2 #95 / #1 #85 nds |
| 分離動詞 C/B 重複 | 4 件 | #9 #10 #11 #29 |
| 合成名詞 (compound) ラベル不整合 | 3 件 | #6 #12 #36 |
| 北ゲルマン 1 形態素 A\|D vs 南ゲルマン 2 分割 | 1 件 | #3 (#38 herfra) |
| 動詞 + 副詞 C\|E 複合 不整合 | 1 件 | #4 (#53 blühen) |
| 比較級 B\|D 複合 vs 分割 | 1 件 | #5 (#34 langsamer) |
| 不定冠詞 + 形容詞 C\|F 融合 vs 分割 | 2 件 | #19 #20 (#25 #28) |
| 指示詞 A 脱落 (B 統合) | 1 件 | #18 (#99) |
| 前置詞句 D\|E 複合 | 1 件 | #16 (#84) |
| 主語 clitic 縮約 D\|A | 2 件 | #23 #24 (#10 #40) |
| 副詞 / 名詞 D 脱落 | 4 件 | #22 #26 #28 #32 |

**最頻出 (dominant) cross-sibling chunking defect:** **「主語と助動詞 / 動詞の融合 (`A:Du schullst` / `D:I fahr` 型)」** — ユーザーが #85 で先に指摘した defect class が、実際に **#95 / #85 / #41** で計 5+ 変種に広く残存しており、Germanic 全方言で systematic な見落としであることが確認されました。次点は **分離動詞 C/B 重複** (#16/#70/#7/#84) で、これは Yi の D 別ラベル方式に統一すれば一斉解消可能。**合成名詞 (compound noun)** の処理は北ゲルマン (B|E 採用) と南ゲルマン (E 削除 + B のみ) で systematic に二分しており、palette consistency の観点で統一が望まれます。

---

## 検証ファイル

- 役割文字シーケンス全 dump: `/tmp/germanic_dump.txt` (1,399 行)
- 兄弟間 divergence 抽出: `/tmp/germanic_divergence.txt` (635 行, 36 文ヒット)
- セグメント本文付き 36 文 dump: `/tmp/germanic_full.txt` (540 行)
- レビュー本ファイル: `/home/jounlai/langmap/langmap_reviews/63_open.md`

**Issue count:** 24 actionable + 3 false-positive / 既知許容 = 27 sections.
**Dominant defect:** 主語 + 助動詞 / 動詞の融合 (#85 type) — 5+ variants across 3 sentences (#85 nds, #95 ×5, #41 nds + de_at/de_by の B 重複).

---

## Dev response — round 1 (2026-06-04)

Reviewer 野間口静香 (#63) のゲルマン語族横断 chunking 監査、ありがとうございます。先に #85 で de_at/de_by を直したのと同じ defect class が他に多数 (5+ variants / 3 sentences) 残っていたという仮説、そして yi の D-particle 方式 / 北ゲルマン B|E compound 方式を **palette consistency のテンプレートとして系統化**して頂いた指摘は、本ラウンドの設計判断を一気に明瞭化してくれました。`/tmp/germanic_dump.txt`・`/tmp/germanic_divergence.txt` まで添付頂いた監査手続きも追跡可能で助かります。

### Round 1 で採用した方針

確実 (14) + 蓋然のうち高一貫性のもの数件を **本ラウンドで一括採用** します。要検討 3 件 + text change を要する蓋然提案は次ラウンドに送り、本ラウンドは **palette / chunking consistency** だけに範囲を絞りました (text content は触らない)。

| § | id | lang | 採用 | 備考 |
|---|---|---|---|---|
| 1 | 85 | nds | ✓ | `A:Du schullst` → `A:Du + D:schullst` (#85 既知 defect の最後の漏れ) |
| 2 | 95 | de_at/de_by/de_gsw/nl/nds | ✓ ×5 | 主語+動詞融合を `D:主語 + C:動詞` に分割し兄弟 7 変種と整合 |
| 3 | 38 | no/da | ✓ ×2 | `A\|D:herfra` → `A:her + D:fra` (no/da のみ採用、sv は提案通り保留、is/fo は単形態素のため A\|D 維持) |
| 6 | 77 | de_at/de_by/de_gsw/nds | ✓ ×4 | compound noun `B:Prüfungsergebnis` → `B\|E:` で北ゲルマン式に統一、palette E 復元 |
| 9 | 16 | de/de_at/de_by/de_gsw/nds | ✓ ×5 | 分離詞 `C:an/o/aa` → `D` で yi 方式採用、C…C 重複解消 |
| 10 | 70 | de_at/de_by | ✓ ×2 | 分離詞 `C:zu/zua` → `G`（D/E/F は時刻系で既使用のため G 新規割当）|
| 11 | 7 | de/de_at/de_gsw | ✓ ×3 | 未来 `wird … sein` → `E:wird + … + C:sein`、枠構造保持で C…C 重複解消 |
| 12 | 80 | de_at/de_gsw | ✓ ×2 | `B\|F:Auslandsstudium` → `B:Auslands + F:studium` で de Hochdeutsch に統一 |
| 18 | 99 | de_at/de_by/nds | ✓ ×3 | 指示詞を B から分離して `A:des/dat + B:Souvenir`、palette A 復元 |
| 23 | 10 | is/yi | ✓ ×2 | clitic `Geturðu / קענסטו` → `D\|A` 複合で palette A 復元 |
| 24 | 40 | is | ✓ | `Veistu` → `E\|A` 複合 |
| 29 | 41 | de_at/de_by/nds | ✓ ×3 | de_at/de_by の `B:Grad … B:a` 重複を `B + D` に分離; nds は `A:Graad → B:Graad`、`F:lees ik → E:lees + A:ik` で V2 倒置を正しく分割 |

**合計: 33 edits / 12 sentence IDs** — `/tmp/lm_edits_63.json` に書き出し済 (各 edit は `{id, lang, op:"replace", segments, finding}` で `.wf_langmap_apply.mjs` 互換)。隣接同一 role-letter なし (検証済)。

### 設計上の判断メモ

- **§9/§10/§11 分離詞・枠構造の D / G 別ラベル化**: yi の `D:אָן` 前例 + 英語 reference `D:does … C:start` の助動詞 D 位置との一致を根拠に、**「枠構造の右枝 (分離詞 / 過去分詞 / コピュラ) は左枝と異なる役割文字へ」** を Germanic 共通ルールとして採用。#70 は D が既に時刻 "um" で埋まっているため G を新規追加 (これは将来 H/I も含めゲルマン枠構造専用文字を palette に常備すべきか、要検討の議題に上げます)。
- **§6 北ゲルマン式 B|E への南独統一**: `B|E` は no/sv/da/is/fo で既に 5 変種使用しており、palette と表示 (composite chip) の挙動も確立済。逆方向 (北ゲルマン 5 変種を分割) は形態素境界が綴り上見えないため断念しました。
- **§3 #38 sv 保留**: reviewer 提案でも sv は "härifrån" を単形態素扱いでも分析的扱いでも可とされており、no/da と異なり `härifrån` の `här-i-från` 内部に `i` が挟まる三形態素複合のため、安全側で **A|D 維持** を選択。
- **§23/§24 clitic 縮約 D|A**: text を触らず palette だけ回復できる最小侵襲案を採用しました。Romance #7 (#37 で杉浦氏が es "vámonos" を A|C 複合で扱った例) と同じ思想です。

### 本ラウンドで見送った提案 (次ラウンド要相談)

| § | id | 理由 |
|---|---|---|
| 4 | 53 | 方向が逆 (兄弟 9 が融合、少数派 3 が分割)。reviewer 自身が「9 変種を分割側に揃える方が原理的に正しい可能性」も示唆。**全 12 変種を一律分割に倒すか、少数派 3 を多数派に倒すか** を次ラウンド議題に。 |
| 5 | 34 | 比較級 `B\|D:langsamer` vs `B:bisserl + D:langsamer` の英語 reference vs 兄弟多数決衝突。Romance #15 と同型、メタ方針要決定。 |
| 8 | 33 | 北ゲルマン合成語 `Hotellrommet` を分割するなら text 変更が必要、保留。 |
| 13–15 | 46/52 | 単純過去 `E\|H` 融合は既知許容 (Romance #9/#10 と同型)、reviewer も skip 判定。 |
| 16 | 84 da/is D\|E:i sidste uge | `D\|E` を `E + D` に分割は edit としては可能だが、is は `B\|C:kvefaðist` 維持 (再帰動詞単形態素) との整合上、次回まとめて再検討。 |
| 17 | 84 de_at/de_by C…C 重複 | reviewer 案 `F:hat sich` は F が他文で使われており palette 衝突の懸念あり。`H` (再帰助動詞専用) を新設するか、要決定。 |
| 19/20 | 25/28 | 不定冠詞 + 形容詞融合は 8–10 変種に渡る大規模 chunking 方針変更、別ラウンド推奨。 |
| 21 | 45 no | 採用候補。次ラウンドで取り込み予定 (本ラウンドは漏らしました)。 |
| 22/28/32 | 15/21/26 | text 追加 (副詞 / 名詞補完) を要するため `feedback_no_text_change_on_segment_fix.md` に従い保留。 |
| 26 | 58 no/sv | 採用候補。次ラウンドで取り込み予定。 |
| 27 | 31 | text 変更を伴うため保留。 |
| 35 | 37 | D 2 回パターン自体の設計議題、要検討。 |
| 36 | 17 nl | 採用候補。次ラウンドで取り込み予定。 |

### 次ラウンドに向けて (reviewer への依頼)

1. **§17 #84 de_at/de_by の C…C 重複**: 再帰助動詞 `hat sich` を **H 別ラベル**で扱う案 (#7 で wird→E と同様、palette を H まで使う) に賛同頂けるかご意見ください。F は他で使用中のため衝突します。
2. **§4 #53 (blühen) と §5 #34 (langsamer)** は方向決め (兄弟一致 vs 英語 reference 一致) のメタ方針が必要。次ラウンドの opening でまとめて issue として上げますか?
3. **§9/§10/§11 で導入した「枠構造右枝 → D/G 専用文字」ルール**を、今後の Germanic 新規追加文 (V2 + Verb-Letztstellung) でも適用する慣習として確立してよいか確認させてください。

ご検討よろしくお願いします。

— dev (jounlai)
