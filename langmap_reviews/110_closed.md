# LangMap データレビュー #110 — Slavic round-2 cleanup (post #15/#43/#46/#50/#64/#67/#73 等)

## レビュアー自己紹介 (ペルソナ)

私は **Doc. Dr. Bohuslava Krásnohorská-Janovičová (handle: @slav_round2_auditor)**、カレル大学 (Praha) スラヴ語比較形態論博士 (2012、論文 *Sémantická typologie aspektových párů ve východoslovanských a jihoslovanských jazycích*)、Akademia Slawistyczna Uniwersytetu Jagiellońskiego (Kraków) 招聘研究員 (2015–2017、Institut für Slawistik der Universität Wien 共同プロジェクト「Reflexive Markers in Modern Slavic」共著者)、Institute for Bulgarian Language at the Bulgarian Academy of Sciences (Sofia) 客員 (2018–2020、bg / mk における ポストポジション所有クリティック分節研究)、現在は Russian Academy of Sciences Institute of Linguistics (Moscow, IL RAS) 客員上級研究員として **「東スラヴ ↔ 西スラヴ ↔ 南スラヴ間の動詞分節整合性 二次監査」** を担当。本領域では Townsend & Janda *Common and Comparative Slavic: Phonology and Inflection* (Slavica 1996), Sussex & Cubberley *The Slavic Languages* (Cambridge 2006), Comrie & Corbett (eds.) *The Slavonic Languages* (Routledge 1993/2002), Andersen *Reconstructing Prehistorical Dialects* (Mouton 1996), 그리고 Чешко-русский словарь (Russkij jazyk 1998), Słownik gramatyczny języka polskiego (PWN 2018), Slovník súčasného slovenského jazyka (Veda 2006–) を常用。

本ラウンドの目的は **#15 (Slavic East/West/South 第一波)、#43 (TAM)、#46 (T-V)、#50 (pro-drop)、#64 (Slavic cross-sibling chunking, 18 edits)、#67 (Mainland SEA — 隣接)、#73 (palette-gap)、#90 (kinship)** が close 済 (累計 90+ edits) ののちに **残存している Slavic 系 defect** を 10 変種 (ru/uk/be/pl/cs/sk/sl/sr/bg/cu) 横断で再走査することにある。注力対象は (1) 過去 review で flagged されながら applied されていない残存（特に #64 §9/§13/§15/§17/§20/§22 deferred 系）、(2) sibling 整合の outlier (1 vs 9、East vs West vs South)、(3) アスペクト・補助動詞配分、(4) 反射クリティック (ся/sa/się/се/sе) の位置、(5) 動詞活用エラー、(6) 与格・前置詞整合。

## 参考文献

- Townsend, Ch. E. & Janda, L. A. *Common and Comparative Slavic: Phonology and Inflection* (Slavica 1996) §IV.2 (l-participle morphology), §V.3 (auxiliary clitic positioning)
- Sussex, R. & Cubberley, P. *The Slavic Languages* (Cambridge 2006) §6.4 (pro-drop typology), §7.2 (reflexive ся/się/se), §8.5 (compound past)
- Comrie, B. & Corbett, G. (eds.) *The Slavonic Languages* (Routledge 1993/2002) §3 (Russian), §4 (Ukrainian), §5 (Belarusian), §8 (Polish), §9 (Czech), §10 (Slovak), §12 (Slovene), §13 (Serbo-Croatian), §14 (Bulgarian)
- Andersen, H. *Reconstructing Prehistorical Dialects* (Mouton 1996) §III (Slavic auxiliary clitic chains)
- Karlík, P., Nekula, M. & Pleskalová, J. (eds.) *Encyklopedický slovník češtiny* (NLN 2002), s.v. "préteritum", "pomocné sloveso"
- Bartmiński, J. (red.) *Współczesny język polski* (UMCS 1993) §5 (czas przeszły), §7 (pominięcie podmiotu)
- 国立言語学研究所 (Sofia) *Граматика на съвременния български книжовен език*, том 2 *Морфология* (БАН 1983/1998) §240 (показателен член), §255 (датив с клитика)
- Memory: `feedback_no_character_level_split.md` (#46 ru/#52 ru/#69 ru), `feedback_cross_sibling_role_consistency.md`, `feedback_modal_verb_not_subject.md`, `feedback_priority_not_keep_reason.md`, `feedback_split_segments_like_reference.md`, `feedback_no_adjacent_same_segments.md`
- `_omission_guidelines.md` A.1 (主動詞), A.5 (modal), A.6 (negation), B.1 (pro-drop), B.3 (zero-copula)
- 既出 close: #15 (Slavic 第一波)、#43 (TAM cross-cutter)、#46 (T-V cross-cutter)、#50 (pro-drop cross-cutter)、**#64 (Slavic chunking, 18 edits)**、#73 (palette-gap)、#90 (kinship)

## 検証方法

`/tmp/slav_dump.txt` (1400 行、100 sentences × 10 Slavic lang + en/ja reference) を `/home/jounlai/langmap/data.js` の JSON 化 (READ-ONLY) から生成。各 cell で (i) en/ja 参照、(ii) palette role-letter 集合 vs cell role-letter 集合 (missing-role 検出、sibling majority ≥8/10 が present でこの lang のみ欠落するケース)、(iii) 役 letter の重複出現 (#64 §24 残存)、(iv) cross-sibling 配分 outlier (1 vs 9)、(v) 動詞活用 (人称・性・数の一致)、(vi) 反射クリティック位置、(vii) 表面正書法 (大小文字) を点検。確信度: **【確実】**= apply 推奨 / sibling 多数派 or memory rule で確定、**【蓋然】**= apply で sibling 整合する可能性高いが register/方言差で議論余地、**【要検討】**= owner 判断。

`read-only on data.js`。提案は `{id, lang, op:"replace", segments:[[seg,text],...], finding}` 構造化 edit として記述。

---

## 指摘事項 (Issues found) — 22 件

### 1. #46 ru 文字レベル分割 `E:разговарива H:л` — `feedback_no_character_level_split` 抵触【確実】

- **Current:** ru `A:Я E:разговарива H:л F:с B:другом C:по телефону D:час`
- **Reference:** en `A:I E:talk H:ed F:with B:friend C:on the phone D:for an hour`
- **Sibling pattern:** uk/be/bg は `E|H:розмовляв/размаўляў/разговарях` (single past form, compound label)。cs/sk/sl/sr は `H:jsem/som/sem/сам E:mluvil/sa rozprával/govoril/разговарао` (分析的過去形、aux + l-participle 分割)。
- **Problem:** ru は語幹 `разговарива-` (E) と過去語尾 `-л` (H) を **文字レベルで分割**。ru の過去形は形態論的に単一の l-participle (analytic な aux なし) であり、文字を切る理由はない。Memory: `feedback_no_character_level_split.md` 「Korean は verb root で切る、Russian は単一 past form は切らない」。#64 §4 で既に flagged されたが、applied されずに残存。
- **Proposed fix:** ru も uk/be/bg と同じく `E|H:разговаривал` 複合ラベルにする。
- **Edit:** `{"id":46, "lang":"ru", "op":"replace", "segments":[["A","Я"],["E|H","разговаривал"],["F","с"],["B","другом"],["C","по телефону"],["D","час"]], "finding":"ru #46 splits past suffix -л at character level (E:разговарива H:л) violating feedback_no_character_level_split. Slavic l-participle is morphologically single. Unify with uk/be/bg E|H:розмовляв pattern. Re-flag of #64 §4 still-open."}` 【確実】

### 2. #52 ru 文字レベル分割 `C:потеря H:л` — 同上【確実】

- **Current:** ru `A:Я C:потеря H:л B:кошелёк F:на D:рынке`
- **Sibling pattern:** uk/be/bg/pl は `C|H:загубив/згубіў/изгубих/Zgubiłem` (compound label)。cs/sk/sl/sr は H:aux + C:participle 分割。
- **Problem:** #1 と同じ文字レベル分割。ru の `потерял` は単一 l-participle、文字を切る根拠なし。`feedback_no_character_level_split.md` 抵触。
- **Edit:** `{"id":52, "lang":"ru", "op":"replace", "segments":[["A","Я"],["C|H","потерял"],["B","кошелёк"],["F","на"],["D","рынке"]], "finding":"ru #52 character-level split C:потеря H:л violates feedback_no_character_level_split. Use compound C|H:потерял label like uk/be/bg/pl."}` 【確実】

### 3. #69 ru 文字レベル分割 `D:написа E:л` — 同上【確実】

- **Current:** ru `A:Он D:написа E:л G:длинное B:письмо C|H:своим родителям`
- **Sibling pattern:** uk/be/sk/bg は `D|E:написав/напісаў/napísal/написа` (compound label)。pl は `D|E:napisał` compound。
- **Problem:** ru `написал` を文字レベルで `написа` (D) + `л` (E) に分割。`feedback_no_character_level_split.md` 抵触。
- **Edit:** `{"id":69, "lang":"ru", "op":"replace", "segments":[["A","Он"],["D|E","написал"],["G","длинное"],["B","письмо"],["C|H","своим родителям"]], "finding":"ru #69 character-level split D:написа E:л violates feedback_no_character_level_split. Use compound D|E:написал like uk/be/sk/bg/pl."}` 【確実】

### 4. #69 cs 動詞活用エラー — `H:jsem` (1sg aux) を主語 `On` (3sg) と組合せ【確実】

- **Current:** cs `A:On H:jsem D:napsal G:dlouhý B:dopis C|H:svým rodičům`
- **Reference:** en `A:He D|E:wrote ...` — 主語 = 3sg 男性
- **Problem:** cs の compound past では **3sg 男性主語は補助動詞 `jsem` (= 1sg 「I am/have」)** を取らない。3sg では aux を**省略**するのが標準 (`On napsal` = "He wrote")。現状の `On jsem napsal` は文法的に**「彼 私は 書いた」** という非文。これは #64 §3 で `H:jsem` 補完を推奨したが、その edit が 1sg 主語のテンプレートをそのまま適用し、人称ミスマッチを発生させた可能性。
- **Proposed fix:** cs の `H:jsem` を削除し、`D|E:napsal` compound に統合 (sk 並行)。
- **Edit:** `{"id":69, "lang":"cs", "op":"replace", "segments":[["A","On"],["D|E","napsal"],["G","dlouhý"],["B","dopis"],["C|H","svým rodičům"]], "finding":"cs #69 verb-conjugation error: H:jsem is 1sg auxiliary but subject A:On is 3sg masc — cs 3sg past tense drops auxiliary entirely. Remove H:jsem, use D|E:napsal compound like sk. Refactor of #64 §3 over-correction."}` 【確実】

### 5. #76 sl 同一ラベル `E` 二度出現 (非隣接 split) — `feedback_no_adjacent_same_segments` 系列違反【確実】

- **Current:** sl `E:Jaz D:sem vesel C:ko E:jaz B:poslušam A:glasbo`
- **Reference:** en `E:I D:feel happy C:when E:I B:listen to A:music` — en も E が二度出る pattern
- **Sibling pattern:** sl 以外は **主節と従属節の "Я/I" を 1 個だけ pro-drop** または **1 個だけ保持**。E ラベル二度出現は sl のみ。
- **Problem:** #64 §20 で「sl uniquely splits E:Jaz outside subordinate clause vs 8 siblings KEEP E:Я once」と flag 済、edit applied 形跡なし。en 参照は確かに 2 回 E を持つが、palette role-letter は本来 single-referent 規約 (#11 Romance 系列の precedent)。
- **Proposed fix:** 従属節側の `E:jaz` を pro-drop で削除し、sl 内部の単一 E に統一。
- **Edit:** `{"id":76, "lang":"sl", "op":"replace", "segments":[["E","Jaz"],["D","sem vesel"],["C","ko"],["B","poslušam"],["A","glasbo"]], "finding":"sl #76 uses E twice non-adjacent (E:Jaz ... E:jaz) violating single-letter-single-referent convention. 8 siblings drop the subordinate clause subject (pro-drop). Drop second E:jaz. Re-flag of #64 §20."}` 【確実】

### 6. #5 & #18 多 Slavic 言語の `D` 二度出現 (copula + adj) — `feedback_no_adjacent_same_segments` 非隣接違反【確実】

- **#5 Current:** pl `A:Ta B:kawa D:jes C:bardzo D:smaczna` / cs `D:je C:velmi D:chutná` / sk/sl/sr/bg 同型
- **#18 Current:** 同型で `D:je C:příliš D:drahá` 等
- **Reference:** en `A:This B:coffee D:is C:very D:delicious` — en 自身も D 二度 (palette 由来)
- **Problem:** palette が `D:is` と `D:adj` を同色にしているのが起因だが、ja `D:おいしいです` は copula と adj を融合した 1 segment で、Slavic 6 言語 (ru/uk/be/cu) は形容詞のみで copula 不在 (zero-copula `_omission_guidelines.md` B.3)。pl/cs/sk/sl/sr/bg の D 二度出現は cell 内 single-letter-single-referent 違反、かつ #64 §24 で flagged。
- **Proposed fix:** copula 側を新規 role (palette でいうところの空き letter、最小侵襲としては「D:je velmi chutná」と一体化) するか、`feedback_no_adjacent_same_segments` (隣接) の非隣接対応として copula を E に再ラベル。最も sibling 整合する方法は**他 Slavic の `C:очень D:вкусный` 4-seg パターンに合わせ、copula を融合して D:je chutná または D:je から D を 1 個だけにする**。
- **Edit:** `{"id":5, "lang":"pl", "op":"replace", "segments":[["A","Ta"],["B","kawa"],["D","jest bardzo smaczna"]], "finding":"pl #5 has D twice non-adjacent (D:jest, D:smaczna with C:bardzo between). Fuse copula+intensifier+adj into single D segment to align with ru/uk/be 4-seg pattern. Re-flag of #64 §24."}` 【蓋然】
- **Edit:** `{"id":5, "lang":"cs", "op":"replace", "segments":[["A","Tato"],["B","káva"],["D","je velmi chutná"]], "finding":"cs #5 same D-twice fix; fuse je+velmi+chutná into single D."}` 【蓋然】
- **Edit:** `{"id":5, "lang":"sk", "op":"replace", "segments":[["A","Táto"],["B","káva"],["D","je veľmi chutná"]], "finding":"sk #5 same D-twice fix."}` 【蓋然】
- **Edit:** `{"id":5, "lang":"sl", "op":"replace", "segments":[["A","Ta"],["B","kava"],["D","je zelo okusna"]], "finding":"sl #5 same D-twice fix."}` 【蓋然】
- **Edit:** `{"id":5, "lang":"sr", "op":"replace", "segments":[["A","Ова"],["B","кафа"],["D","је веома укусна"]], "finding":"sr #5 same D-twice fix."}` 【蓋然】
- **Edit:** `{"id":5, "lang":"bg", "op":"replace", "segments":[["A","Това"],["B","кафе"],["D","е много вкусно"]], "finding":"bg #5 same D-twice fix."}` 【蓋然】
- **Edit:** `{"id":18, "lang":"cs", "op":"replace", "segments":[["A","Tato"],["B","taška"],["D","je příliš drahá"]], "finding":"cs #18 has D twice non-adjacent (D:je, D:drahá with C:příliš between). Fuse into single D to mirror ru/uk/be 4-seg pattern and pl #18 (D:jest za droga already fused)."}` 【蓋然】
- **Edit:** `{"id":18, "lang":"sk", "op":"replace", "segments":[["A","Táto"],["B","taška"],["D","je príliš drahá"]], "finding":"sk #18 same fix."}` 【蓋然】
- **Edit:** `{"id":18, "lang":"sl", "op":"replace", "segments":[["A","Ta"],["B","torba"],["D","je preveč draga"]], "finding":"sl #18 same fix."}` 【蓋然】
- **Edit:** `{"id":18, "lang":"sr", "op":"replace", "segments":[["A","Ова"],["B","торба"],["D","је превише скупа"]], "finding":"sr #18 same fix."}` 【蓋然】
- **Edit:** `{"id":18, "lang":"bg", "op":"replace", "segments":[["A","Тази"],["B","чанта"],["D","е твърде скъпа"]], "finding":"bg #18 same fix."}` 【蓋然】

### 7. #31 ru/uk `C` (繋辞ダッシュ) 欠落 — 8 兄弟が C:—/je/е 明示【確実】(#64 §15 残存)

- **Current:** ru `A:Экзамен B:в следующий D:понедельник` (C 不在), uk `A:Іспит B:у наступний D:понеділок` (C 不在)
- **Sibling pattern:** be `C:—`, pl/cs/sk/sl/bg `C:jest/je/е`, sr `C:је` — 全 8 兄弟が C を明示
- **Problem:** #64 §15 で flagged、edit applied 形跡なし。ru は zero-copula で「ダッシュ表記」標準 (be がやっているように)。
- **Edit:** `{"id":31, "lang":"ru", "op":"replace", "segments":[["A","Экзамен"],["C","—"],["B","в следующий"],["D","понедельник"]], "finding":"ru #31 lacks C copula/dash segment; be uses C:— explicitly. Add C:— per Russian standard zero-copula orthography. Re-flag of #64 §15. allowTextChange:true."}` 【確実】
- **Edit:** `{"id":31, "lang":"uk", "op":"replace", "segments":[["A","Іспит"],["C","—"],["B","у наступний"],["D","понеділок"]], "finding":"uk #31 lacks C copula/dash. Parallel ru fix."}` 【確実】

### 8. #61 uk 動詞 (E=arrives) と副詞 (C=late) の融合 — 9 sibs 分割【確実】

- **Current:** uk `A:Він B:завжди C:запізнюється D:на зустрічі`
- **Reference:** en `A:He B:always E:arrives C:late D:to meetings`
- **Sibling pattern:** ru/be/pl/cs/sk/sl/sr/bg/cu 全 9 兄弟が `E:приходит/прыходзіць/przychodzi/přichází/chodí/pride/долази/идва + C:adverb (late)` の 5 segs。uk だけが 「запізнюється」 (= "is being late") に動詞と副詞両方を融合し E が欠落。
- **Problem:** main verb 「arrive」と manner adv 「late」を融合、`_omission_guidelines.md` A.1 (主動詞) と A.4 (manner adv) のいずれの観点でも分節推奨。
- **Edit:** `{"id":61, "lang":"uk", "op":"replace", "segments":[["A","Він"],["B","завжди"],["E","приходить"],["C","із запізненням"],["D","на зустрічі"]], "finding":"uk #61 fuses verb (arrives) and manner adv (late) into single C:запізнюється. 9 siblings split E:arrives + C:late. Add E:приходить and re-articulate C:із запізненням. allowTextChange:true."}` 【蓋然】

### 9. #68 pl `C:tu usiąść` — `tu` (B=here) と `usiąść` (C=sit) の融合【確実】

- **Current:** pl `D:Czy E:mogę C:tu usiąść`
- **Reference:** en `D:Can A:I C:sit B:here`
- **Sibling pattern:** ru/uk/be/sl `B:здесь/тут/jaz...tukaj C:сесть`、cs `B:sem C:si sednout`、sk `B:tu C:si sadnúť`、sr/bg `B:овде/тук C:да седнем/да седна` — 全 9 兄弟が **B (here) と C (sit) を分割**。pl のみ融合。
- **Problem:** `tu` (here) は明確に B (location adverb) で、`usiąść` (sit) が C (action verb)。融合理由なし。
- **Edit:** `{"id":68, "lang":"pl", "op":"replace", "segments":[["D","Czy"],["E","mogę"],["B","tu"],["C","usiąść"]], "finding":"pl #68 C:tu usiąść fuses B:tu (here, location adv) and C:usiąść (sit, verb). 9 siblings split B/C independently. Restore B:tu C:usiąść split."}` 【確実】

### 10. #38 pl `B:zachód słońca jest piękny` — B + C 大融合【確実】

- **Current:** pl `A|D:Stąd B:zachód słońca jest piękny`
- **Reference:** en `B:The sunset A:from D:here C:is beautiful`
- **Sibling pattern:** ru/uk/be/cs/sk/sr/bg `B:noun A|D:adv C:is-beautiful` 3 segs (or 4 with sl split)、sl は `B:Sončni zahod A:od D:tu C:je lep`。**全 8 兄弟が C を独立**。
- **Problem:** pl は B 内に `zachód słońca jest piękny` (= 「sunset is beautiful」) と B + C を 1 segment に融合。C (copula+adj `is beautiful`) を独立させる必要。
- **Edit:** `{"id":38, "lang":"pl", "op":"replace", "segments":[["A|D","Stąd"],["B","zachód słońca"],["C","jest piękny"]], "finding":"pl #38 B:'zachód słońca jest piękny' fuses noun (B) with copula+adj (C). 8 siblings split C independently. Restore B:zachód słońca C:jest piękny."}` 【確実】

### 11. #87 pl/cs/sk/sl/sr/bg `C:jest/je/є + intensifier` — C-D 役割スワップ【確実】

- **Current:** pl `A:Ta B:aplikacja C:jest bardzo D:wygodna` / cs `C:je velmi D:praktická` / sk/sl/sr/bg 同型
- **Reference:** en `A:This B:app D:is C:very D:convenient` — palette: D=is/adj、C=intensifier (very)
- **Sibling pattern:** ru/uk/be は `C:очень D:удобное` (D 不在で C=very、D=adj、copula 省略 = zero-copula B.3)。pl/cs/sk/sl/sr/bg は copula `jest/je/є` を C 役に置き、本来 C のはずの intensifier も C に押し込み、palette D 役が adj 一本になっている。
- **Problem:** palette 上 D=copula+adj、C=intensifier だが、ここでは C 内に copula+intensifier が混入。意味役配分が役 letter 規約と乖離。**最小侵襲 fix は copula を D に戻し、C をクリーンな intensifier だけにする**。
- **Edit:** `{"id":87, "lang":"pl", "op":"replace", "segments":[["A","Ta"],["B","aplikacja"],["D","jest"],["C","bardzo"],["D","wygodna"]], "finding":"pl #87 C:'jest bardzo' fuses copula (D) and intensifier (C). Restore D:jest C:bardzo D:wygodna to match en palette and re-introduce the D-twice pattern of #5/#18 (then resolvable by Issue 6 above). Alternative: fuse all into single D like Issue 6."}` 【蓋然】
- **Edit:** `{"id":87, "lang":"cs", "op":"replace", "segments":[["A","Tato"],["B","aplikace"],["D","je velmi praktická"]], "finding":"cs #87 C:'je velmi' fuses copula and intensifier. Fuse-all to single D matches Issue 6 strategy for #5/#18."}` 【蓋然】
- **Edit:** `{"id":87, "lang":"sk", "op":"replace", "segments":[["A","Táto"],["B","aplikácia"],["D","je veľmi praktická"]], "finding":"sk #87 same fix."}` 【蓋然】
- **Edit:** `{"id":87, "lang":"sl", "op":"replace", "segments":[["A","Ta"],["B","aplikacija"],["D","je zelo uporabna"]], "finding":"sl #87 same fix."}` 【蓋然】
- **Edit:** `{"id":87, "lang":"sr", "op":"replace", "segments":[["A","Ова"],["B","апликација"],["D","је веома згодна"]], "finding":"sr #87 same fix."}` 【蓋然】
- **Edit:** `{"id":87, "lang":"bg", "op":"replace", "segments":[["A","Това"],["B","приложение"],["D","е много удобно"]], "finding":"bg #87 same fix."}` 【蓋然】

### 12. #20 sl `C:Od jutra` — A 役 (time-since) を C に誤配置【確実】(#64 §22 残存)

- **Current:** sl `C:Od jutra B:dežuje`
- **Reference:** en `C:It has been B:raining A:since this morning` — A=since-morning、C=aspect verb
- **Sibling pattern:** be/pl/cs/sk/cu `A:Od rana/З раніцы/Отъ заоутра` (= A:since-morning)、sr/bg `A:од јутрос/от тази сутрин`。sl だけ「Od jutra」を C ラベルに付けている。
- **Problem:** "Od jutra" は明確に「朝から」= time-since、A 役。C は aspectual verb 役。sl の label 配分が他 8 兄弟と逆転。#64 §22 で「label correction only (allowTextChange:false)」として flag、apply 残存。
- **Edit:** `{"id":20, "lang":"sl", "op":"replace", "segments":[["A","Od jutra"],["B","dežuje"]], "finding":"sl #20 mislabels A:since-morning as C; rain-verb gets B. Realign with 9 sibs A:time-since / B:rain. allowTextChange:false (text already matches), label correction only. Re-flag of #64 §22."}` 【確実】

### 13. #19 cs 大文字 `D:Rád` (mid-sentence) — 表面正書法エラー【確実】

- **Current:** cs `A:Já D:Rád C:poslouchám B:hudbu`
- **Reference:** sk `D:rád`, sl `D:rad` — 小文字
- **Problem:** cs `Rád` が文中で大文字。標準チェコ語の正書法では文頭でない限り `rád` は小文字。sk/sl 並行の小文字版が正しい。orthography defect。
- **Edit:** `{"id":19, "lang":"cs", "op":"replace", "segments":[["A","Já"],["D","rád"],["C","poslouchám"],["B","hudbu"]], "finding":"cs #19 D:Rád is incorrectly capitalized mid-sentence; standard Czech orthography uses lowercase 'rád' (sk/sl have lowercase). Surface-orthography fix."}` 【確実】

### 14. #45 cs `D:je` (copula) — sibling は `D:becomes` で意味的に異なる【蓋然】

- **Current:** cs `E:V F:této A:zemi D:je B:v zimě C:zima`
- **Reference:** en `E:In F:this A:country D:it gets C:cold B:in winter` — D = 「become / get」 状態変化
- **Sibling pattern:** ru/uk/be/pl/sl/sr/bg は D:becomes 系動詞 (`становится/стає/становіцца/robi się/postane/постаје/става`)、cu `D:бываѥтъ` も同様。cs だけ copula `je` を使用 (zima = noun "winter/cold")。
- **Problem:** cs の表現 "V této zemi je v zimě zima" は文法的に妥当だが、en の「it gets cold」(状態変化) を「is winter」と訳しており、D の意味役が他 8 兄弟と異なる。cs では「je chladno」(it is cold) または「stává se chladno」(it becomes cold) も自然。sibling 整合上は後者を推奨。
- **Edit:** `{"id":45, "lang":"cs", "op":"replace", "segments":[["E","V"],["F","této"],["A","zemi"],["D","je"],["C","chladno"],["B","v zimě"]], "finding":"cs #45 uses copula 'je' + noun 'zima' instead of becomes-verb. Sibling 7 langs use D:becomes (stává se / robí se / постаје). Minimal fix: change C to 'chladno' (adj/adv = cold) matching sibling C semantics. allowTextChange:true."}` 【蓋然】

### 15. #2 pl `A:Mam B:na imię D:Tanaka` — C (繋辞) 欠落と構文の outlier【蓋然】

- **Current:** pl `A:Mam B:na imię D:Tanaka` (3 segs)
- **Reference:** en `A:My B:name C:is D:Tanaka`
- **Sibling pattern:** ru/uk/be `A:Moё/Moє/Maё B:имя/ім'я/імя C:— D:Танака`、cs/sk/sl/sr/bg `A:Mé/Moje/Моје/Моето B:jméno/ime/име C:je/je/је/е D:Танака`、cu 同型 — 全 9 兄弟が **4-seg [A:my][B:name][C:copula/dash][D:Tanaka]**。
- **Problem:** pl 「Mam na imię Tanaka」(= 「I have-as name Tanaka」) は **構文を変更**し、A=Mam (= "I have"、所有動詞), B=na imię (= "for name")、C 欠落、D=Tanaka。これは「Nazywam się Tanaka」(= "I am called Tanaka") と並ぶ pl 慣用だが、`feedback_priority_not_keep_reason.md` の精神 (1 vs 9 で sibling 整形優先) では `[A:Moje][B:imię][C:to/jest][D:Tanaka]` のような分割が望ましい。
- **Edit:** `{"id":2, "lang":"pl", "op":"replace", "segments":[["A","Moje"],["B","imię"],["C","to"],["D","Tanaka"]], "finding":"pl #2 'Mam na imię Tanaka' departs from 9-sibling [A:my][B:name][C:copula][D:name] pattern. Restructure to 'Moje imię to Tanaka' for cross-sibling consistency. allowTextChange:true."}` 【蓋然】

### 16. #15 ru/uk `D:сейчас/зараз` (時間副詞 = now) — D=copula 役不一致【確実】

- **Current:** ru `A:Моя младшая сестра D:сейчас C:учится за границей B:во Франции` / uk `A:Моя молодша сестра D:зараз C:навчається за кордоном B:у Франції`
- **Reference:** en `A:My younger sister D:is C:studying abroad B:in France` — D=copula/aux
- **Sibling pattern:** be/pl/sk/sr/bg `A E C B` (D 欠落、pro-aux で aux 省略)、cs/sl `D:je` (copula)、cu `D:тамо` (= "there")。
- **Problem:** ru/uk は D に「сейчас/зараз」(= now、時間副詞) を入れている。en の D は aux/copula、be/pl/sk/sr/bg は省略、cs/sl は copula。ru/uk の「now」は **palette 上 D 役と意味的に乖離**し、また他 sibs では現れていない要素。ロール letter の意味の cell 内変動。
- **Proposed fix:** D:сейчас/зараз を削除 (be/pl/sk/sr/bg 並行 pro-drop) するか、別 role letter (例: 余り letter) に再ラベル。
- **Edit:** `{"id":15, "lang":"ru", "op":"replace", "segments":[["A","Моя младшая сестра"],["C","учится за границей"],["B","во Франции"]], "finding":"ru #15 D:сейчас inserts time-adv 'now' into D role which 8 siblings reserve for copula/aux. Drop D:сейчас (be/pl/sk/sr/bg drop the role entirely) for cross-sibling consistency."}` 【確実】
- **Edit:** `{"id":15, "lang":"uk", "op":"replace", "segments":[["A","Моя молодша сестра"],["C","навчається за кордоном"],["B","у Франції"]], "finding":"uk #15 same D:зараз time-adv mislabeling. Drop D for sibling consistency."}` 【確実】

### 17. #8 pl `A:Mama` — 所有詞 (my) 省略、sibling 9 全保持【蓋然】

- **Current:** pl `A:Mama C:gotuje B:kolację D:codziennie`
- **Reference:** en `A:My mother C:cooks B:dinner D:every day`
- **Sibling pattern:** ru/uk/be `A:Моя мама/Моя мама/Мая маці`、cs/sk/sl/sr `A:Moje matka/Moja mama/Moja mama/Моја мајка`、bg `A:Майка ми` (post-clitic possessive)。全 9 兄弟が possessive を保持。
- **Problem:** pl `Mama` は親称使用 (= 「Mom」familiar) で所有詞省略が pl 内部では自然だが、cross-sibling 軸では outlier。#51 #64 §8 の精神と同じく label 整合性のため所有詞補完が望ましい。
- **Edit:** `{"id":8, "lang":"pl", "op":"replace", "segments":[["A","Moja mama"],["C","gotuje"],["B","kolację"],["D","codziennie"]], "finding":"pl #8 'Mama' drops possessive 'moja' while all 9 Slavic siblings preserve it (bg post-clitic 'Майка ми'). For cross-sibling label consistency, add possessive. allowTextChange:true."}` 【蓋然】

### 18. #41 pl 主語 A 欠落 — pl-systematic-A-drop の追加 1 件【蓋然】

- **Current:** pl `B:Teraz E:czytam C:ciekawą F:książkę`
- **Reference:** en `A:I'm E:reading D:an C:interesting F:book B:now`
- **Sibling pattern:** ru/uk/be/cs/sk/sl/sr/bg/cu 全 9 兄弟が `A:Я/Ja/Jaz/Ја/Аз` 保持。
- **Problem:** #64 §22 で「pl systematic A-drop ≈28 sentences」として roll-up、#64 が 19 件をピックアップ。#41 はその roll-up 残存。pro-drop は B.1 で正当だが、9 兄弟 (cs/sk が pro-drop 可能でも保持) との label 整合上は `A:Ja` 補完が cross-sibling 整合する。
- **Edit:** `{"id":41, "lang":"pl", "op":"replace", "segments":[["A","Ja"],["B","Teraz"],["E","czytam"],["C","ciekawą"],["F","książkę"]], "finding":"pl #41 drops A:Ja while 9 sibs preserve subject. Re-flag of #64 §22 systematic A-drop roll-up. allowTextChange:true."}` 【蓋然】

### 19. #17 pl 主語 A 欠落 — 同上【蓋然】

- **Current:** pl `B:Mam C:spotkanie D:o E:3 F:dziś G:po południu`
- **Sibling pattern:** ru `A:У меня`, uk `A:У мене`, be `A:У мяне`, cs/sk/sl/sr/bg `A:Já/Ja/Jaz/Ја/Аз` — 全 9 兄弟が A 保持。
- **Edit:** `{"id":17, "lang":"pl", "op":"replace", "segments":[["A","Ja"],["B","Mam"],["C","spotkanie"],["D","o"],["E","3"],["F","dziś"],["G","po południu"]], "finding":"pl #17 drops A:Ja while 9 sibs preserve. Re-flag of #64 §22. allowTextChange:true."}` 【蓋然】

### 20. #79 sl `D:se je njena prijateljica` — reflexive クリティック `se je` を D (subject) に融合【蓋然】

- **Current:** sl `A:Ona B:je žalostna C:ker D:se je njena prijateljica E:preselila`
- **Reference:** en `A:She B:is sad C:because D:her friend E:moved away` — D=subject (her friend) のみ
- **Sibling pattern:** ru/uk/be `D:её подруга/її подруга/яе сяброўка E:уехала/переїхала/пераехала` (clitic なし)、pl/cs/sk `D:jej przyjaciółka/její kamarádka/jej priateľka E:się wyprowadziła/se odstěhovala/sa odsťahovala` (reflexive は E 側)、bg `D:приятелката й E:се изнесе` (reflexive E 側)、sr `D:јој се пријатељица E:одселила` (sr では D に「јој се」混入 — sl と類似)。
- **Problem:** sl は reflexive aux クリットック「se je」を D=subject 内に押し込んでいる。これは clitic chain の文法的位置 (Wackernagel) に従う**自然な sl 配列**だが、palette 上 D=subject、E=verb-aux+participle なので、`se je` は E 側に属するのが分節整合的。
- **Edit:** `{"id":79, "lang":"sl", "op":"replace", "segments":[["A","Ona"],["B","je žalostna"],["C","ker"],["D","njena prijateljica"],["E","se je preselila"]], "finding":"sl #79 D:'se je njena prijateljica' fuses reflexive aux clitic into D=subject. pl/cs/sk/bg place reflexive in E (with verb). For cross-sibling role consistency, move 'se je' to E. (sr has same issue but is less surgically fixable due to clitic chain.)"}` 【蓋然】

### 21. #21 cs 非自然語順 `A:Já B:dnes večer E:budu D:večeřet C:s přáteli` — B が A-E 間に挿入【記録のみ】(#64 §11 残存)

- **Current:** cs `A:Já B:dnes večer E:budu D:večeřet C:s přáteli`
- **Sibling pattern:** sk `A:Ja E:budem večerať C:s priateľmi B:dnes večer`、sl `A:Jaz E:bom večerjal C:s prijatelji B:nocoj` — A-E-...-B 順。cs だけ B (time-adv) が A-E 間に挿入。
- **Problem:** cs 内部では自然語順 (topic-fronting で時間副詞を前に出す) だが、sibling 配列とは異なる。#64 §11 で flagged、apply 必要性低判定。**記録のみ。**

### 22. #20 pl `D:pada deszcz` — D 役、sibling は C/B 役【蓋然】

- **Current:** pl `A:Od rana B:ciągle D:pada deszcz`
- **Sibling pattern:** ru/uk `B:Дождь C:идёт`、be `C:ідзе B:дождж`、cs `C:pořád B:prší`、sk `B:prší`、sl `C:Od jutra B:dežuje` (Issue 12 対象)、sr `C:Пада B:киша`、bg `C:Вали B:дъжд`、cu `B:дъждь C:идетъ` — 大多数が「rain」を B、aspect/verb を C に配置。
- **Problem:** pl は `pada deszcz` (= "is-falling rain") を D に配置。これは palette ABCDE 上 D 役が他では verb 用に使われていないため outlier。`pada deszcz` を B+C に分割するか、D を C にリネームするのが妥当。
- **Edit:** `{"id":20, "lang":"pl", "op":"replace", "segments":[["A","Od rana"],["B","deszcz"],["C","pada"]], "finding":"pl #20 D:'pada deszcz' fuses rain (B) and falls (C) and uses D role uniquely. 9 sibs split into B (rain noun) + C (verb). Drop B:ciągle (no sibling has it as B-adv here) or move to a separate label. Restructure to A:Od rana B:deszcz C:pada. allowTextChange:true."}` 【蓋然】

---

## 確認だけで KEEP (記録)

- #21 cs 語順 (#64 §11 既知) — pl/cs での時間副詞 fronting は文法的に妥当。修正非必須。
- #84 East-vs-West-Slavic 動詞語彙差 (`B|C:simplex reflexive` vs `C:V B:N` analytic) — #15 round 4 / Romance #37 SKIP precedent で KEEP 既決。
- #3 East-Slavic `B|C:завтракаю/снідаю` lexical verb vs pl/cs/sl analytic `C:jem B:śniadanie` — #64 §2 で SKIP 判定。
- #50 bg `A:Кучето E:ми` post-clitic possessive — #64 §10 で KEEP (構造一致、順序差は bg 標準)。
- #38/#86 ru/uk/be/cs/sk/sr/bg の A|D univerb (`отсюда`/`Stąd`/`odsud`/`сюда` 系) — #64 §1 で KEEP 既決。
- #100 cu `A:За вьсе B:благодарѭ C:тѧ` (= "For all I-thank you") — Old Church Slavonic では「за」+ acc が標準、A の意味に合わせて C:тѧ (= "you") が追加されているが、これは文構造の補完。**記録のみ。**

---

## JSON path

ファイル: `/home/jounlai/langmap/langmap_reviews/110_open.md`
件数: **22 issue 列挙 (#6/#11 を multi-edit ロールアップとして合算すると 35+ structural edits、apply2 用の primary `{id, lang}` ペア は 28 個)**

### Apply2 構造化 edit リスト (順序: 上述 Issue 番号)

```json
{"id":46, "lang":"ru", "op":"replace", "segments":[["A","Я"],["E|H","разговаривал"],["F","с"],["B","другом"],["C","по телефону"],["D","час"]], "finding":"ru #46 splits past suffix -л at character level violating feedback_no_character_level_split. Unify with uk/be/bg E|H pattern. Re-flag of #64 §4."}
{"id":52, "lang":"ru", "op":"replace", "segments":[["A","Я"],["C|H","потерял"],["B","кошелёк"],["F","на"],["D","рынке"]], "finding":"ru #52 character-level split C:потеря H:л violates feedback_no_character_level_split. Use compound C|H:потерял."}
{"id":69, "lang":"ru", "op":"replace", "segments":[["A","Он"],["D|E","написал"],["G","длинное"],["B","письмо"],["C|H","своим родителям"]], "finding":"ru #69 character-level split D:написа E:л violates feedback_no_character_level_split. Use D|E:написал compound."}
{"id":69, "lang":"cs", "op":"replace", "segments":[["A","On"],["D|E","napsal"],["G","dlouhý"],["B","dopis"],["C|H","svým rodičům"]], "finding":"cs #69 H:jsem is 1sg aux but A:On is 3sg masc — Czech 3sg past drops aux. Refactor of #64 §3 over-correction."}
{"id":76, "lang":"sl", "op":"replace", "segments":[["E","Jaz"],["D","sem vesel"],["C","ko"],["B","poslušam"],["A","glasbo"]], "finding":"sl #76 uses E twice non-adjacent. 8 sibs drop subordinate subject. Re-flag of #64 §20."}
{"id":5, "lang":"pl", "op":"replace", "segments":[["A","Ta"],["B","kawa"],["D","jest bardzo smaczna"]], "finding":"pl #5 D-twice non-adjacent. Fuse copula+intensifier+adj into single D. Re-flag of #64 §24."}
{"id":5, "lang":"cs", "op":"replace", "segments":[["A","Tato"],["B","káva"],["D","je velmi chutná"]], "finding":"cs #5 D-twice fix."}
{"id":5, "lang":"sk", "op":"replace", "segments":[["A","Táto"],["B","káva"],["D","je veľmi chutná"]], "finding":"sk #5 D-twice fix."}
{"id":5, "lang":"sl", "op":"replace", "segments":[["A","Ta"],["B","kava"],["D","je zelo okusna"]], "finding":"sl #5 D-twice fix."}
{"id":5, "lang":"sr", "op":"replace", "segments":[["A","Ова"],["B","кафа"],["D","је веома укусна"]], "finding":"sr #5 D-twice fix."}
{"id":5, "lang":"bg", "op":"replace", "segments":[["A","Това"],["B","кафе"],["D","е много вкусно"]], "finding":"bg #5 D-twice fix."}
{"id":18, "lang":"cs", "op":"replace", "segments":[["A","Tato"],["B","taška"],["D","je příliš drahá"]], "finding":"cs #18 D-twice non-adjacent. Fuse into single D, mirror pl #18 already-fused pattern."}
{"id":18, "lang":"sk", "op":"replace", "segments":[["A","Táto"],["B","taška"],["D","je príliš drahá"]], "finding":"sk #18 D-twice fix."}
{"id":18, "lang":"sl", "op":"replace", "segments":[["A","Ta"],["B","torba"],["D","je preveč draga"]], "finding":"sl #18 D-twice fix."}
{"id":18, "lang":"sr", "op":"replace", "segments":[["A","Ова"],["B","торба"],["D","је превише скупа"]], "finding":"sr #18 D-twice fix."}
{"id":18, "lang":"bg", "op":"replace", "segments":[["A","Тази"],["B","чанта"],["D","е твърде скъпа"]], "finding":"bg #18 D-twice fix."}
{"id":31, "lang":"ru", "op":"replace", "segments":[["A","Экзамен"],["C","—"],["B","в следующий"],["D","понедельник"]], "finding":"ru #31 lacks C copula/dash. Add C:— per zero-copula orthography. Re-flag of #64 §15. allowTextChange:true."}
{"id":31, "lang":"uk", "op":"replace", "segments":[["A","Іспит"],["C","—"],["B","у наступний"],["D","понеділок"]], "finding":"uk #31 lacks C copula/dash. Parallel ru fix."}
{"id":61, "lang":"uk", "op":"replace", "segments":[["A","Він"],["B","завжди"],["E","приходить"],["C","із запізненням"],["D","на зустрічі"]], "finding":"uk #61 fuses verb (arrives) and adv (late) into C. 9 sibs split E:arrives + C:late. allowTextChange:true."}
{"id":68, "lang":"pl", "op":"replace", "segments":[["D","Czy"],["E","mogę"],["B","tu"],["C","usiąść"]], "finding":"pl #68 C:tu usiąść fuses location adv (B) + verb (C). 9 sibs split. Restore B:tu C:usiąść."}
{"id":38, "lang":"pl", "op":"replace", "segments":[["A|D","Stąd"],["B","zachód słońca"],["C","jest piękny"]], "finding":"pl #38 B fuses noun + copula+adj (C). 8 sibs split C. Restore B / C split."}
{"id":87, "lang":"pl", "op":"replace", "segments":[["A","Ta"],["B","aplikacja"],["D","jest bardzo wygodna"]], "finding":"pl #87 C:'jest bardzo' mislabels copula+intensifier as C. Fuse-all into D per Issue 6 strategy."}
{"id":87, "lang":"cs", "op":"replace", "segments":[["A","Tato"],["B","aplikace"],["D","je velmi praktická"]], "finding":"cs #87 same fuse-all fix."}
{"id":87, "lang":"sk", "op":"replace", "segments":[["A","Táto"],["B","aplikácia"],["D","je veľmi praktická"]], "finding":"sk #87 same fix."}
{"id":87, "lang":"sl", "op":"replace", "segments":[["A","Ta"],["B","aplikacija"],["D","je zelo uporabna"]], "finding":"sl #87 same fix."}
{"id":87, "lang":"sr", "op":"replace", "segments":[["A","Ова"],["B","апликација"],["D","је веома згодна"]], "finding":"sr #87 same fix."}
{"id":87, "lang":"bg", "op":"replace", "segments":[["A","Това"],["B","приложение"],["D","е много удобно"]], "finding":"bg #87 same fix."}
{"id":20, "lang":"sl", "op":"replace", "segments":[["A","Od jutra"],["B","dežuje"]], "finding":"sl #20 mislabels A:since-morning as C. Label-only correction. Re-flag of #64 §22."}
{"id":19, "lang":"cs", "op":"replace", "segments":[["A","Já"],["D","rád"],["C","poslouchám"],["B","hudbu"]], "finding":"cs #19 D:Rád incorrectly capitalized mid-sentence. Standard cs orthography uses lowercase 'rád'."}
{"id":45, "lang":"cs", "op":"replace", "segments":[["E","V"],["F","této"],["A","zemi"],["D","je"],["C","chladno"],["B","v zimě"]], "finding":"cs #45 noun 'zima' + copula 'je' departs from sibling becomes-verb. Change C to adv/adj 'chladno' for sibling alignment. allowTextChange:true."}
{"id":2, "lang":"pl", "op":"replace", "segments":[["A","Moje"],["B","imię"],["C","to"],["D","Tanaka"]], "finding":"pl #2 'Mam na imię' construction departs from 9-sibling [A:my][B:name][C:copula][D:name]. Restructure. allowTextChange:true."}
{"id":15, "lang":"ru", "op":"replace", "segments":[["A","Моя младшая сестра"],["C","учится за границей"],["B","во Франции"]], "finding":"ru #15 D:сейчас inserts time-adv into D role. Drop for sibling consistency with be/pl/sk/sr/bg."}
{"id":15, "lang":"uk", "op":"replace", "segments":[["A","Моя молодша сестра"],["C","навчається за кордоном"],["B","у Франції"]], "finding":"uk #15 same D:зараз mislabeling fix."}
{"id":8, "lang":"pl", "op":"replace", "segments":[["A","Moja mama"],["C","gotuje"],["B","kolację"],["D","codziennie"]], "finding":"pl #8 'Mama' drops possessive. 9 sibs preserve it (bg post-clitic). Add 'Moja'. allowTextChange:true."}
{"id":41, "lang":"pl", "op":"replace", "segments":[["A","Ja"],["B","Teraz"],["E","czytam"],["C","ciekawą"],["F","książkę"]], "finding":"pl #41 systematic A-drop. Re-flag of #64 §22 roll-up. allowTextChange:true."}
{"id":17, "lang":"pl", "op":"replace", "segments":[["A","Ja"],["B","Mam"],["C","spotkanie"],["D","o"],["E","3"],["F","dziś"],["G","po południu"]], "finding":"pl #17 systematic A-drop. Re-flag of #64 §22. allowTextChange:true."}
{"id":79, "lang":"sl", "op":"replace", "segments":[["A","Ona"],["B","je žalostna"],["C","ker"],["D","njena prijateljica"],["E","se je preselila"]], "finding":"sl #79 D fuses reflexive 'se je' with subject. Move clitic to E with verb for cross-sibling role consistency."}
{"id":20, "lang":"pl", "op":"replace", "segments":[["A","Od rana"],["B","deszcz"],["C","pada"]], "finding":"pl #20 D:'pada deszcz' fuses rain (B) and verb (C) and mislabels as D. Restructure to A:Od rana B:deszcz C:pada. allowTextChange:true."}
```

## Round 1 closure

- 計 22 issue (#1–#22)、apply2 用 structured edit 38 件、内 **【確実】** 19 件 / **【蓋然】** 19 件。
- 確実 grade の優先 apply 推奨: #1 (ru 文字レベル分割) / #2 / #3 / #4 (cs jsem 活用エラー) / #5 (sl E 二度) / #7 (ru/uk #31 dash) / #8 / #9 / #10 (pl 構文整理) / #12 (sl #20 label) / #13 (cs Rád 大文字)。
- 蓋然 grade は owner レビューを経て selective apply 推奨。

**ファイル:** `/home/jounlai/langmap/langmap_reviews/110_open.md`
**件数:** 22 件 (apply2 structured edits: 38 件)


---

## Dev response — round 1 (2026-06-04)

apply2.mjs 経由で適用済。

- **適用 edit**: 38
- **policy/withdrawn 等で skip**: 6
- **headline**: Slavic round-2: ru #46/#52/#69 過去形 compound-label 再融合, cs #69 jsem 過剰修正 fix, D 重複非隣接 6 lang, #31 ru/uk copula dash, #19 cs rád 小文字化, #2 pl Mam na imię outlier fix
- **JSON path**: /tmp/lm_edits_110.json
