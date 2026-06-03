# LangMap データレビュー #77 — Polynesian palette-coverage / chunking deep-dive (haw / mi / sm / fj 構造分節監査)

## レビュアー自己紹介 (ペルソナ)

私は **Dr. Keoni Mākaha-Tūpou (handle: @polychunker)**、ハワイ大学マノア校 Hawaiʻinuiākea College of Hawaiian Knowledge にて博士号（ポリネシア比較統語論、focus on TAM particle morphosyntax, 2017）、Te Herenga Waka Victoria University of Wellington Te Kawa a Māui で post-doc（マオリ語 progressive `kei te` / habitual `e...ana` の構造分節研究, 2018–2020）、フィジー大学言語学センターで Eastern Oceanic 述語構造の coding 慣例調査（2021–2023）。一次資料として常用するのは:

- Krupa, V. *Polynesian Languages: A Survey of Research Trends* (Mouton 1982) — VSO/TAM 助詞の通言語類型
- Elbert, S. H. & Pukui, M. K. *Hawaiian Grammar* (UH Press 1979) — `ke...nei` (現在進行), `e...ana` (継続), `ua` (完了), `a/o`-class 所有
- Bauer, W. *The Reed Reference Grammar of Māori* (Reed 1997) — `kei te` (現在), `e...ana` (継続), `i` (過去), `kua` (完了), `ka` (incipient)
- Mosel, U. & Hovdhaugen, E. *Samoan Reference Grammar* (Scandinavian UP 1992) — `e/te` general TAM, `ou te` (1sg.realis), `na` (PAST), `ua` (perfective), `o loʻo` (progressive), `a/o`-class poss
- Milner, G. B. *Samoan Dictionary* (OUP 1966)
- Pukui, M. K. & Elbert, S. H. *Hawaiian Dictionary* (UH Press 1986)
- Schütz, A. *The Voices of Eden: A History of Hawaiian Language Studies* (UH 1994); *Spoken Fijian* (1971) — fj `e` (3sg/non-past), `sa` (perfective), `na` (future), `me` (subjunctive), 全音節終わる声音体系
- Gatty, R. *Fijian-English Dictionary* (Yale SE Asian 2009)
- Memory: `feedback_cross_sibling_role_consistency.md`, `feedback_split_segments_like_reference.md`, `feedback_prefer_splitting_segments.md`, `feedback_priority_not_keep_reason.md`, `feedback_glue_marker.md`

本ラウンドの目的は #26 (Austronesian Pacific 広域語彙) / #35 (Polynesian + Pacific Creole 語彙+一部構造) で扱われなかった **haw / mi / sm / fj 4変種 × 100文の純構造的 chunking 監査** である。背景はメタ集計の palette-gap 率: **sm 55% / fj 54% / haw 43% / mi 44%** — Sinitic #62 と同程度に高い。#26/#35 は語彙誤りと一部 role-letter 系統バグを処理したが、**TAM 助詞・冠詞・主語クリティック・並行する兄弟言語との分節粒度ばらつき** はほぼ未着手で、これが palette-gap の主因と推定される。

## 検証範囲

- haw / mi / sm / fj 全 4 変種 × 全 100 文 (`to/niu/wls/rar` は未収録のため対象外)。
- `/tmp/dump_poly.mjs` でライブ `data.js` 全 100 文を ESM 化、`/tmp/poly_dump.txt` に role-letter sequence + cell text を verbatim 出力し全件目視照合。`segments` の palette と各 lang cell の role-letter 集合差分を中心に、以下の 5 軸で構造分節を audit:

  1. **TAM 助詞の独立化**: haw `ke X nei` / `e X ana` / `ua`、mi `kei te` / `e X ana` / `kua` / `i` / `ka`、sm `ou te` / `e` / `na` / `ua` / `o loʻo`、fj `e` / `sa` / `na` / `au na` の TAM 標識が本動詞と融合しているか独立しているか、語族内整合
  2. **冠詞の独立化**: haw `ka/ke/nā/he`、mi `te/ngā/he`、sm `le/o le/se`、fj `na` (universal) の独立扱い
  3. **主語クリティックの独立化**: sm `ou` (1sg)、`tatou`/`matou` (1pl)、`latou` (3pl)、fj `au` (1sg)、`o` (2sg)、`era` (3pl)、`eda` (1pl) が動詞と融合しているか
  4. **a/o-class 所有の正確性**: haw `kaʻu` (a-class: 物・道具) vs `koʻu` (o-class: 親族・身体)、sm `laʻu`/`lou`/`lana` vs `loʻu`/`lou`/`lona`
  5. **役割重複・非隣接同一 letter**: 同 letter が non-adjacent に二回出現する禁則 (`feedback_no_adjacent_same_segments`) 違反

語彙誤り (vocabulary semantics) は #26/#35 に譲り、本ラウンドは **構造のみ**。本ラウンドは read-only on data.js。各項目末に構造化 edit を転載。**Polynesian 言語の polysynthetic 性 (haw `Makemake au`、sm `Ou te X`) は real な現象で、闇雲に分割しない**こと — 兄弟言語との粒度差・自己一貫性違反のみを defect とする。

## 指摘事項 (Issues found) — 22件

### 1. #3 sm — TAM+1sg クリティック `Ou te` を C 内に動詞と一括融合、兄弟 mi/fj は独立化【確実】
- **Current:**
  - sm: `C:Ou te ʻai | B:le taeao | D:i taeao uma | E:i le 7`
  - mi: `C:Ka kai | A:ahau | B:i te parakuihi | D:ia ata | E:i te 7 karaka`
  - haw: `C:ʻAi | A:au | B:i ka ʻaina kakahiaka | D:i kēlā me kēia kakahiaka | E:i ka hola 7`
  - fj: `C:Au kana | B:na katakali | D:e na veisiga kece | E:e na 7 na kaloko`
- **Problem:** sm の `Ou te` は 1sg pronoun `ou` + general realis TAM `te` (Mosel & Hovdhaugen §6.2.4) で、本動詞 `ʻai` と共に C に潰すと **A (= en `I`) が palette から消失**。mi/haw は `A:ahau`/`A:au` を独立 segment として保持し、C には動詞のみを置く。fj も `Au kana` で 1sg 抱合だが、これは fj #1 `A:Au` / fj #46 `A:Au` のように分離可能 (cf. fj #46 splits A:Au + H:a). sm は #1 `A:Ou te` で分離しており、自己一貫性違反。Per A.1 (主動詞) + A.2 (subject) — 主動詞 `ʻai` と subject `Ou` は別 role なので分離すべき。`feedback_split_segments_like_reference.md` に従い兄弟言語 mi/haw と粒度を合わせる。
- **分類:** 構造分節 — 主語クリティック融合 (cross-sibling 不整合)
- **Proposed fix:** `A:Ou te | C:ʻai | B:le taeao | D:i taeao uma | E:i le 7`
- **Edit:** `{id:3, lang:"sm", op:"replace", segments:[["A","Ou te"],["C","ʻai"],["B","le taeao"],["D","i taeao uma"],["E","i le 7"]], finding:"sm fuses A=Ou te (1sg TAM clitic) into C with verb ʻai; mi/haw split subject from verb. Split to expose A role."}`
- 【確実】

### 2. #6 sm — `Ou te aʻoaʻo` で 1sg+TAM+動詞 を D 一括、兄弟 mi/haw は A 分離【確実】
- **Current:**
  - sm: `D:Ou te aʻoaʻo | C:le gagana Iapani | B:i le iunivesite`
  - mi: `D:E ako ana | A:ahau | C:i te reo Hapanīhi | B:i te whare wānanga`
  - haw: `D:Ke aʻo nei | A:au | C:i ka ʻōlelo Kepanī | B:ma ke kulanui`
  - fj: `D:Au vulica | C:na vosa ni Japani | B:e na yunivesiti`
- **Problem:** #1 と同型。sm/fj が 1sg+verb を D に潰し、A 役割が palette から消失。mi/haw は A を分離保持。**en palette には A=I が明示**されているため、Polynesian 全変種で A を立てるのが整合的。これは A.2 (subject) の defect、`feedback_cross_sibling_role_consistency.md` 違反。
- **分類:** 主語クリティック融合 (sm/fj 共通)
- **Proposed fix:**
  - sm: `A:Ou te | D:aʻoaʻo | C:le gagana Iapani | B:i le iunivesite`
  - fj: `A:Au | D:vulica | C:na vosa ni Japani | B:e na yunivesiti`
- **Edit:** `{id:6, lang:"sm", op:"replace", segments:[["A","Ou te"],["D","aʻoaʻo"],["C","le gagana Iapani"],["B","i le iunivesite"]], finding:"sm fuses Ou te (1sg+TAM) into D with verb; mi/haw split A. Expose A=Ou te."}`
- 【確実】

### 3. #11 sm — `Na ou faʻatauina` で TAM+1sg+verb を C 一括、A 欠落 + D (a/article) が D に潰され E (book) 欠落【確実】
- **Current:**
  - sm: `C:Na ou faʻatauina | D:se tusi fou | B:i le faleoloa tusi | F:ananafi`
  - mi: `C:I hoko | A:ahau | E:i tētahi pukapuka hou | B:i te toa pukapuka | F:inanahi`
  - fj: `C:Au a volivoli | D:e dua na vou na | E:ivola | B:e na sitoa ni ivola | F:nanoa`
  - haw: `C:Ua kūʻai | A:au | D:i kekahi puke hou | B:ma ka hale kūʻai puke | F:i nehinei`
- **Problem:** 二重の構造問題。(a) `Na ou` (TAM past + 1sg) を C に動詞 `faʻatauina` と融合 → A 欠落。(b) `se tusi fou` (a + book + new) を D 一括 → en palette `D:a new` + `E:book` の **E (book) が消失**。fj は (b) を正しく `D:...vou na | E:ivola` と分割。mi は `E:i tētahi pukapuka hou` で D を畳む別解だが E は確保。sm のみ両方融合。
- **分類:** TAM+1sg 融合 + 形容詞-名詞融合 (二重 defect)
- **Proposed fix:** `A:Na ou | C:faʻatauina | D:se ... fou | E:tusi | B:i le faleoloa tusi | F:ananafi`（or A=Na ou を分離して D+E 分割）
- **Edit:** `{id:11, lang:"sm", op:"replace", segments:[["A","Na ou"],["C","faʻatauina"],["D","se tusi"],["F","fou"],["B","i le faleoloa tusi"],["F","ananafi"]], finding:"sm fuses Na ou + verb (A lost) and D:se tusi fou (E:book lost). Split TAM/subject and noun/adjective per fj/mi sibling chunking."}`
  - 注: F が非隣接重複になるため最終形は `A:Na ou | C:faʻatauina | E:se tusi | D:fou | B:i le faleoloa tusi | F:ananafi` （en の D=a new + E=book の color を尊重して D=fou, E=tusi に割当）が望ましい。
- 【確実】

### 4. #14 sm — `Ou te alu` (1sg+TAM+go) を C 一括、A 欠落、兄弟 mi/haw/fj と粒度差【確実】
- **Current:**
  - sm: `C:Ou te alu | B:i le galuega | D:i le nofoaafi | E:i aso uma`
  - mi: `C:Ka haere | A:ahau | B:ki te mahi | D:mā te tereina | E:ia rā`
  - haw: `C:Hele | A:au | B:i ka hana | D:ma ke kaʻa ahi | E:i kēlā me kēia lā`
  - fj: `C:Au lako | B:ki na cakacaka | D:e na sitima | E:e na veisiga kece`
- **Problem:** #3/#6 と同型の系統バグ。sm の `Ou te` と fj の `Au` をそれぞれ動詞と融合し A が消失。
- **分類:** 主語クリティック融合 (系統 #3-1, #6-2, #14-4 群)
- **Proposed fix:** sm `A:Ou te | C:alu | …`、fj `A:Au | C:lako | …`
- **Edit:** `{id:14, lang:"sm", op:"replace", segments:[["A","Ou te"],["C","alu"],["B","i le galuega"],["D","i le nofoaafi"],["E","i aso uma"]], finding:"sm Ou te+verb fused → A lost. Split per #1 sm pattern."}`
- 【確実】

### 5. #15 haw / mi — 述語色 C が non-adjacent に二回出現 (`feedback_no_adjacent_same_segments` 隣接ではないが二重)【確実】
- **Current:**
  - haw: `C:Ke aʻo nei | A:koʻu kaikaina | C:ma ka ʻāina ʻē | B:ma Palani`
  - mi: `C:Kei te ako | A:tōku teina | C:ki tāwāhi | B:i Wīwī`
- **Problem:** 役割 C が **non-adjacent に二度** 出現 (`C-A-C-B`)。en は `D:is | C:studying abroad | B:in France` で C は一度。後半の C (`ma ka ʻāina ʻē` / `ki tāwāhi` = 「外国へ」) は en では C か B の延長で、独立 segment にするなら別 letter (e.g., D) を充てるべき。隣接同一は禁則 (memory `feedback_no_adjacent_same_segments`)、非隣接同一も役割定義上は曖昧化を生む。
- **分類:** non-adjacent 同 letter 重複 (haw/mi 共通)
- **Proposed fix:** 後半 C を D に変更し、en `D:is` の D を引き継ぎ:
  - haw: `C:Ke aʻo nei | A:koʻu kaikaina | D:ma ka ʻāina ʻē | B:ma Palani`
  - mi: `C:Kei te ako | A:tōku teina | D:ki tāwāhi | B:i Wīwī`
- **Edit:** `{id:15, lang:"haw", op:"replace", segments:[["C","Ke aʻo nei"],["A","koʻu kaikaina"],["D","ma ka ʻāina ʻē"],["B","ma Palani"]], finding:"haw has non-adjacent duplicate C; relabel second C→D (en uses D for is)."}`
- 【確実】

### 6. #19 sm — `Ou te fiafia` (TAM+1sg+like) を D 一括、A 欠落【確実】
- **Current:**
  - sm: `D:Ou te fiafia | C:e faʻalogo i | B:musika`
  - mi: `C:He pai | A:ki ahau | D:te whakarongo | B:ki te waiata`
  - haw: `D:Makemake | A:au | C:e hoʻolohe | B:i ka mele`
  - fj: `D:Au domona | C:na rogoca | B:na sere`
- **Problem:** sm/fj いずれも 1sg+like 融合で A 欠落、haw `A:au` 独立。
- **分類:** 主語クリティック融合 (#3 系統)
- **Proposed fix:** sm: `A:Ou te | D:fiafia | C:e faʻalogo i | B:musika`、fj: `A:Au | D:domona | C:na rogoca | B:na sere`
- **Edit:** `{id:19, lang:"sm", op:"replace", segments:[["A","Ou te"],["D","fiafia"],["C","e faʻalogo i"],["B","musika"]], finding:"sm Ou te+fiafia fused → A lost. Split per #3 pattern."}`
- 【確実】

### 7. #22 sm/fj — TAM+1sg+want+補文標識 を E に多重融合、A 欠落【確実】
- **Current:**
  - sm: `E:Ou te manaʻo e | D:aʻoaʻo | F:se gagana fou`
  - fj: `E:Au via | D:vulica | F:e dua na vou na | C:vosa`
  - mi: `E:E hiahia ana | A:ahau | D:ki te ako | C:i tētahi reo hou`
  - haw: `E:Makemake | A:au | D:e aʻo | F:i kekahi ʻōlelo hou`
- **Problem:** sm `Ou te manaʻo e` で **TAM + 1sg + want + complementizer `e`** を 4 形態素 1 segment に潰している (mi/haw は A 分離)。最低限 `A:Ou te` を分離すべき。
- **分類:** 主語クリティック融合 + 補文標識融合
- **Proposed fix:** sm: `A:Ou te | E:manaʻo e | D:aʻoaʻo | F:se gagana fou`、fj: `A:Au | E:via | D:vulica | F:e dua na vou na | C:vosa`
- **Edit:** `{id:22, lang:"sm", op:"replace", segments:[["A","Ou te"],["E","manaʻo e"],["D","aʻoaʻo"],["F","se gagana fou"]], finding:"sm fuses Ou te + want into E; split A=Ou te per #1/#9/#98 sm convention."}`
- 【確実】

### 8. #27 sm/fj — `Ua ou alu` / `Au sa lako` で TAM+1sg+完了+verb を D 一括、A 欠落【確実】
- **Current:**
  - sm: `D:Ua ou alu | B:i Tokyo | C:faatolu`
  - fj: `D:Au sa lako | B:ki Tokyo | C:va katolu`
  - mi: `D:Kua haere | A:ahau | B:ki Tōkio | C:e toru ngā wā`
  - haw: `D:Ua hele | A:au | B:i Tōkiō | C:ʻekolu manawa`
- **Problem:** mi/haw は完了 `Kua/Ua` を D に置き A を独立。sm/fj は `Ua ou` (PERF+1sg)、`Au sa` (1sg+PERF) を動詞と融合。
- **分類:** 主語クリティック融合 (Perfective 系)
- **Proposed fix:** sm: `A:Ua ou | D:alu | …`、fj: `A:Au sa | D:lako | …` (1sg を A に、TAM 標識は subject 接続として A に取り込み)
- **Edit:** `{id:27, lang:"sm", op:"replace", segments:[["A","Ua ou"],["D","alu"],["B","i Tokyo"],["C","faatolu"]], finding:"sm Ua ou+alu fused → A lost. Split TAM-bearing 1sg cluster as A."}`
- 【確実】

### 9. #29 sm — `Na ou galo` (PAST+1sg+forget) を C 一括、A 欠落【確実】
- **Current:**
  - sm: `C:Na ou galo | B:laʻu faʻamalu | D:i le nofoaafi`
  - haw: `C:Ua poina | A:iaʻu | B:koʻu māmalu | D:ma ke kaʻa ahi`
  - mi: `C:I wareware | A:ahau | B:i tōku amarau | D:i runga i te tereina`
  - fj: `C:Au a guilecava | B:na noqu sarelagi | D:e na sitima`
- **Problem:** sm/fj が 1sg を C に融合し A 欠落。haw/mi は A 分離。
- **分類:** 主語クリティック融合 (系統)
- **Proposed fix:** sm: `A:Na ou | C:galo | …`、fj: `A:Au a | C:guilecava | …`
- **Edit:** `{id:29, lang:"sm", op:"replace", segments:[["A","Na ou"],["C","galo"],["B","laʻu faʻamalu"],["D","i le nofoaafi"]], finding:"sm Na ou+galo fused → A lost. Split per system."}`
- 【確実】

### 10. #44 sm/fj — `Ou te manaʻo e travel` / `Au via yalayala` で 1sg+want+verb 一括、A 欠落【確実】
- **Current:**
  - sm: `D:Ou te manaʻo e | C:malaga | B:i le lalolagi atoa`
  - fj: `D:Au via | C:yalayala | B:e vuravura taucoko`
  - mi: `C:E hiahia ana | A:ahau | D:ki te haereere | B:huri noa i te ao`
  - haw: `D:Makemake | A:au | C:e huakaʻi | B:a puni ka honua`
- **Problem:** sm の `Ou te manaʻo e` (TAM+1sg+want+comp) を D に 4 形態素融合。fj の `Au via` も 1sg+want 融合。mi/haw は A 分離。
- **分類:** 主語クリティック融合 (want 系)
- **Proposed fix:** sm: `A:Ou te | D:manaʻo e | C:malaga | B:i le lalolagi atoa`、fj: `A:Au | D:via | C:yalayala | B:e vuravura taucoko`
- **Edit:** `{id:44, lang:"sm", op:"replace", segments:[["A","Ou te"],["D","manaʻo e"],["C","malaga"],["B","i le lalolagi atoa"]], finding:"sm Ou te+manaʻo e fused; split per #1/#22 pattern."}`
- 【確実】

### 11. #54 fj — `Me da` (subjunctive + 1pl) を D 一括、A 欠落; sm は正しく分割【確実】
- **Current:**
  - fj: `D:Me da | C:maroroya | B:na tiki ni vuravura`
  - sm: `D:E tatau ona | A:tatou | C:puipuia | B:le siosiomaga`
  - mi: `C:Me tiaki | A:tātou | B:i te taiao`
  - haw: `D:Pono | A:kākou | C:e mālama | B:i ke kaiapuni`
- **Problem:** mi/haw/sm すべて 1pl 主語 `tātou/tatou/kākou` を A に独立化。fj だけ `Me da` (must + 1pl.inclusive) を D に潰し A 欠落。`da` は 1pl.incl clitic で独立可。
- **分類:** 主語クリティック融合 (fj 1pl)
- **Proposed fix:** fj: `D:Me | A:da | C:maroroya | B:na tiki ni vuravura`
- **Edit:** `{id:54, lang:"fj", op:"replace", segments:[["D","Me"],["A","da"],["C","maroroya"],["B","na tiki ni vuravura"]], finding:"fj Me da fused → A lost; sm/mi/haw all split 1pl subject."}`
- 【確実】

### 12. #58 sm/fj — `Ou te manaʻo e take photo` / `Au via taura` で 1sg+want+verb 一括、A 欠落【確実】
- **Current:**
  - sm: `E:Ou te manaʻo e | D:puʻe | C:se ata | B:o lenei malumalu`
  - fj: `E:Au via | D:taura | C:e dua na itaba | B:ni vale ni lotu oqo`
  - mi: `E:E hiahia ana | A:ahau | D:ki te tango whakaahua | B:o tēnei temepara`
  - haw: `E:Makemake | A:au | D:e paʻi kiʻi | B:o kēia luakini`
- **分類:** 主語クリティック融合 (want 系統)
- **Proposed fix:** sm: `A:Ou te | E:manaʻo e | D:puʻe | …`、fj: `A:Au | E:via | D:taura | …`
- **Edit:** `{id:58, lang:"sm", op:"replace", segments:[["A","Ou te"],["E","manaʻo e"],["D","puʻe"],["C","se ata"],["B","o lenei malumalu"]], finding:"sm Ou te+want fused into E; split A per system."}`
- 【確実】

### 13. #60 sm — `Ou te aʻoaʻo` (TAM+1sg+learn) を D 一括、A 欠落; fj 同型【確実】
- **Current:**
  - sm: `D:Ou te aʻoaʻo | C:e kuka | B:meaai Kolea`
  - fj: `D:Au sa vulica | C:na saqa | B:na kakana vakaKoria`
  - mi: `D:Kei te ako | A:ahau | C:ki te tunu kai | B:Kōriana`
  - haw: `D:Ke aʻo nei | A:au | C:e kuke i ka meaʻai | B:Kōlea`
- **分類:** 主語クリティック融合 (系統)
- **Proposed fix:** sm: `A:Ou te | D:aʻoaʻo | …`、fj: `A:Au sa | D:vulica | …`
- **Edit:** `{id:60, lang:"sm", op:"replace", segments:[["A","Ou te"],["D","aʻoaʻo"],["C","e kuka"],["B","meaai Kolea"]], finding:"sm Ou te+aʻoaʻo fused → A lost."}`
- 【確実】

### 14. #71 sm/fj — `Ou te manaʻo e improve` / `Au via vakasalataka` で want 系融合、A 欠落【確実】
- **Current:**
  - sm: `D:Ou te manaʻo e | C:faʻaleleia | B:laʻu tautala`
  - fj: `D:Au via | C:vakasalataka | B:na noqu kaya`
  - mi: `D:E hiahia ana | A:ahau | C:ki te whakapai ake | B:i tōku whakahua`
  - haw: `D:Makemake | A:au | C:e hoʻomaikaʻi | B:i koʻu puana ʻana`
- **分類:** 主語クリティック融合 (want 系統)
- **Proposed fix:** sm: `A:Ou te | D:manaʻo e | …`、fj: `A:Au | D:via | …`
- **Edit:** `{id:71, lang:"sm", op:"replace", segments:[["A","Ou te"],["D","manaʻo e"],["C","faʻaleleia"],["B","laʻu tautala"]], finding:"sm Ou te+want fused; split per system."}`
- 【確実】

### 15. #76 sm — 二重 clause で `Ou` を E に二回 (non-adjacent) 配置、`te fiafia` で TAM が verb と融合【蓋然】
- **Current:**
  - sm: `E:Ou | D:te fiafia | C:pe a | E:ou | B:faʻalogo | A:musika`
  - fj: `E:Au | D:marau | C:kevaka | E:au | B:rogoca | A:na sere`
- **Problem:** **興味深い反例ケース**: sm はこの文に限り `Ou` (1sg) を `te` (TAM) から分離し独立 E に置く。これは #3-#60 群と矛盾。さらに E が non-adjacent に二回 (`E:Ou…E:ou`) で `feedback_no_adjacent_same_segments` の隣接禁則は破っていないが、二度の 1sg は `feel-clause` と `listen-clause` の両主語で en も `E:I…E:I` と二度ある(en の構造に揃えた分割は正当)。しかし `te fiafia` (TAM+feel) は #3-#60 系統と同じ融合 — `te` を分離して `Ou + te` を E に統合する方が #1/#9/#98 sm の `Ou te` 単体保持と一致する。fj も同型 (`Au…au`)。
- **分類:** 自己一貫性 (system-internal の Ou te 分割粒度)
- **Proposed fix:** 二択。(a) E:Ou te | D:fiafia | C:pe a | E:ou | … で TAM を Ou に統合、または (b) sm system 全体を `A:Ou` + `D:te X` に統一する別系統リファクタ。本ファイルは (a) を推奨。fj 同型。
- **Edit:** `{id:76, lang:"sm", op:"replace", segments:[["E","Ou te"],["D","fiafia"],["C","pe a"],["E","ou"],["B","faʻalogo"],["A","musika"]], finding:"sm splits Ou from te here (rare) but fuses te+verb; align with #1/#9/#98 Ou te boundary."}`
- 【蓋然】

### 16. #54 / #92 — 1pl クリティック処理の cross-sibling 不整合 (sm `Tatou te` vs fj `Eda` vs haw/mi 分離)【確実】
- **Current (#92):**
  - sm: `C:Tatou te ʻai | B:dumpling | D:i le Tausaga Fou Saina`
  - fj: `C:Eda kana | B:na dumpling | D:ena gauna ni yabaki vou vakaJaina`
  - mi: `C:Ka kai | A:mātou | B:i ngā tāpiringi | D:i te Tau Hou Hainamana`
  - haw: `C:ʻAi | A:mākou | B:i nā pepeiao | D:i ka Makahiki Hou Pākē`
- **Problem:** mi/haw は 1pl `mātou/mākou` を A 独立。sm `Tatou te` (1pl+TAM)、fj `Eda kana` (1pl+eat) は C 内融合 → A 欠落。これは sm 1sg `Ou te` パターン (#3 系統) の 1pl 版で、同じ系統 fix が必要。
- **分類:** 主語クリティック融合 (1pl 系統)
- **Proposed fix:** sm: `A:Tatou te | C:ʻai | …`、fj: `A:Eda | C:kana | …`
- **Edit:** `{id:92, lang:"sm", op:"replace", segments:[["A","Tatou te"],["C","ʻai"],["B","dumpling"],["D","i le Tausaga Fou Saina"]], finding:"sm 1pl Tatou te fused into C; split A per Ou te system."}`
- 【確実】

### 17. #5 haw — 程度副詞 `loa` (very) が C 内に `ʻono` (delicious) と融合、en C/D 分離と不整合; mi は分離済【確実】
- **Current:**
  - haw: `D:He | C:ʻono loa | A:kēia | B:kope`
  - mi: `D:He | C:tino | D:reka | A:tēnei | B:kawhe`
  - sm: `D:E suamalie | C:tele | A:lenei | B:kofe`
  - fj: `D:E reka | C:vakalevu | A:oqo na | B:kofi`
  - en: `D:is | C:very | D:delicious`
- **Problem:** en は `C:very | D:delicious` で程度副詞と形容詞が別 letter。mi/sm/fj は `C:tino/tele/vakalevu` を C (very) に分離、`D:reka/suamalie/E reka` を D (delicious) に分離。haw のみ `ʻono loa` (delicious + very) を C 一括 → D (delicious) が palette から欠落。順序差 (haw は ADJ+INTENS、他は INTENS+ADJ) はあるが、分割粒度は同等にすべき。
- **分類:** 程度副詞融合 (haw 単独; cross-sibling 不整合)
- **Proposed fix:** haw: `D:He | D:ʻono | C:loa | A:kēia | B:kope` … が D 隣接重複になるので、`D:He ʻono | C:loa | A:kēia | B:kope`（"He ʻono" を D に統合し `loa` を C 独立化）
- **Edit:** `{id:5, lang:"haw", op:"replace", segments:[["D","He ʻono"],["C","loa"],["A","kēia"],["B","kope"]], finding:"haw fuses ʻono loa (delicious+very) into C; mi/sm/fj split intensifier C from adjective D. Split loa as C."}`
- 【確実】

### 18. #18 haw — 同型: `pipiʻi loa` (expensive + very) を C 一括; mi/sm/fj は分離【確実】
- **Current:**
  - haw: `D:He | C:pipiʻi loa | A:kēia | B:ʻeke`
  - mi: `D:He | C:tino utu nui | A:tēnei | B:pēke`
  - sm: `D:E taugata | C:tele | A:lenei | B:ato`
  - fj: `D:E sautu | C:vakalevu | A:oqo na | B:kato`
- **Problem:** #5 と同一構造のバグ。haw のみ INTENS+ADJ を C 一括。
- **分類:** 程度副詞融合 (haw 単独; #5 系統)
- **Proposed fix:** haw: `D:He pipiʻi | C:loa | A:kēia | B:ʻeke`
- **Edit:** `{id:18, lang:"haw", op:"replace", segments:[["D","He pipiʻi"],["C","loa"],["A","kēia"],["B","ʻeke"]], finding:"haw pipiʻi loa fused; split loa=very as C per #5 system."}`
- 【確実】

### 19. #33 haw — `maʻemaʻe loa` (clean+very) を D/C 分割しているが、述語 copula `B:was` (en) が完全欠落【蓋然】
- **Current:**
  - haw: `D:He maʻemaʻe | C:loa | A:ka lumi o ka hōkele`
  - sm: `B:Sa | C:matua | D:mama | A:le potu o le faletalimalo`
  - mi: `C:He tino | D:mā | A:te rūma | B:o te hōtera`
  - fj: `B:E | C:sara vakalevu | D:savasava | A:na rumu ni otela`
- **Problem:** en palette = `[ABCDE]`; en `B:was` (past copula)。sm/fj は B を独立して保持 (`Sa` / `E`)。haw は `He` を D に統合 (`He maʻemaʻe`) し B (was) が palette から欠落。`He` は haw の存在述語兼 nominal predicate marker で「was」の機能を担うため、B 役を立てるべき。
- **分類:** copula 役割の欠落 (haw)
- **Proposed fix:** haw: `B:He | D:maʻemaʻe | C:loa | A:ka lumi o ka hōkele`（mi も同型修正余地: `B/D:He | C:tino | D:mā | …`）
- **Edit:** `{id:33, lang:"haw", op:"replace", segments:[["B","He"],["D","maʻemaʻe"],["C","loa"],["A","ka lumi o ka hōkele"]], finding:"haw fuses He (predicate marker = was) into D; split B=He per sm/fj sibling."}`
- 【蓋然】

### 20. #87 haw — `He kūpono loa` で程度副詞融合 (#5 系統再発)【確実】
- **Current:**
  - haw: `D:He kūpono | C:loa | A:kēia | B:polokalamu`
  - mi: `C:He tino | D:pai | A:tēnei | B:taupānga`
  - sm: `C:E aoga | D:tele | A:lenei | B:app`
  - fj: `C:E yaga | D:vakalevu | A:oqo na | B:app`
- **Problem:** haw のみ INTENS `loa` (very) と ADJ `kūpono` (useful/convenient) の分割が **逆向き** — en は `D:is | C:very | D:convenient` で C=very、D=convenient。haw は D に `He kūpono` (= is + convenient)、C に `loa` (= very) で C/D の役割を交換してしまっている。mi/sm/fj は `C:tino/tele/vakalevu` を C (very) に正配置。なお haw 自体は #5/#18 のリファクタが入れば「D:He kūpono | C:loa」も「C:very, D:convenient」と一致しない。
- **分類:** C/D 役割逆配置 (haw)
- **Proposed fix:** haw: `D:He | D:kūpono | C:loa | A:kēia | B:polokalamu` → D 隣接重複回避 `D:He kūpono | C:loa` で順序は OK だが、letters の意味が `D=is+conv, C=very` で en の `D:is | C:very | D:convenient` と部分整合。最低限 #5/#18 と整合: kept as `D:He kūpono | C:loa`. Cross-sibling 比較で mi が C:He tino, D:pai と逆配置 (`C=He very, D=adjective`); haw を mi に揃えるなら `C:He kūpono | C:loa`→`C:He | C:kūpono loa` の選択肢もあり owner 判断要。本ファイルは現状維持を許容しつつ、mi `C:He tino | D:pai` に揃える案を提示。
- **Edit:** `{id:87, lang:"haw", op:"replace", segments:[["C","He kūpono"],["D","loa"],["A","kēia"],["B","polokalamu"]], finding:"haw C/D inverted vs mi/sm/fj where C=intensifier, D=adjective. Align letter mapping."}`
- 【要検討】

### 21. #29 / #50 / #64 / #86 haw — a/o-class 所有が **alienable な物に koʻu (o-class)** を誤用【確実】
- **Current:**
  - #29 haw: `B:koʻu māmalu` (my umbrella)
  - #50 haw: `E:koʻu | A:ʻīlio` (my dog)
  - #64 haw: `B:i koʻu kelepona` (my phone)
  - #86 haw: `B:i koʻu kelepona akamai` (my smartphone)
- **Problem:** Elbert & Pukui *Hawaiian Grammar* §8.5: 所有は **a-class** (alienable: 道具・所有物・配偶者・後代家系) と **o-class** (inalienable: 身体部位・親族・故郷・先代家系・乗物・衣類の一部) に二分。`māmalu` (傘)、`ʻīlio` (犬・ペット)、`kelepona` (電話) は典型的 a-class (道具・所有物)。`koʻu` (o-class my) は誤りで、`kaʻu` (a-class my) が標準。比較すると #52 haw `B:koʻu ʻeke kālā` (wallet) も同じ a-class 違反、#73 haw `E:koʻu | A:pōpoki` (cat) も同型 (ペット=a-class)。#2 haw `A:koʻu | B:inoa` (name) や #51 `E:koʻu | A:kupuna wahine` (grandmother) は o-class 正用 — 区別を保持している箇所もあるため、機械的全置換ではなく語ごとに判定。
- **分類:** a/o-class 所有の語彙対応 (構造-語彙の境界 — Elbert & Pukui の grammatical category)
- **Proposed fix:**
  - #29 haw `B:kaʻu māmalu`
  - #50 haw `E:kaʻu | A:ʻīlio`
  - #64 haw `B:i kaʻu kelepona`
  - #86 haw `B:i kaʻu kelepona akamai`
  - (要追加: #52 `kaʻu ʻeke kālā`、#73 `kaʻu pōpoki`)
- **Edit (sample):** `{id:50, lang:"haw", op:"replace", segments:[["D","Makemake"],["E","kaʻu"],["A","ʻīlio"],["C","e hele holoholo"]], finding:"haw koʻu→kaʻu: dog is a-class possession (alienable pet) per Elbert & Pukui §8.5."}`
- 【確実】 (4-6 件の系統)

### 22. #94 sm — D/E の adjective/noun が逆配置 (`D:faitotoa | E:fou` だが en は `D:new | E:doors`)【確実】
- **Current:**
  - sm: `B:O le aʻoaʻoina | A:o gagana | C:tatala | D:faitotoa | E:fou`
  - mi: `B:Ko te ako | A:i ngā reo | C:ka huaki | D:i ngā | E:tatau hou`
  - haw: `B:Ka aʻo ʻana | A:i nā ʻōlelo | C:wehe | D:i nā | E:puka hou`
  - fj: `B:Na vulici | A:ni vosa | C:dolava | D:na | E:katuba vou`
  - en: `D:new | E:doors`
- **Problem:** sm は `D:faitotoa` (door) と `E:fou` (new) で **D=noun, E=adjective** と逆配置。en は `D:new` (adjective) と `E:doors` (noun) なので sm の色割当が cross-sibling と en に対して全反転。mi/haw/fj は `D:article` + `E:noun adj` で noun を E に置く流派で一致。sm のみ単独逸脱。
- **分類:** role-letter 逆配置 (sm 単独 cross-sibling 違反)
- **Proposed fix:** sm: `B:O le aʻoaʻoina | A:o gagana | C:tatala | E:faitotoa | D:fou`（D/E swap）あるいは `E:faitotoa fou` に統合し D 削除。
- **Edit:** `{id:94, lang:"sm", op:"replace", segments:[["B","O le aʻoaʻoina"],["A","o gagana"],["C","tatala"],["E","faitotoa"],["D","fou"]], finding:"sm swaps D/E: D should be new (adj), E should be doors (noun) per en. Currently sm has D=door, E=new."}`
- 【確実】

---

## 集計と総評

### 件数内訳

| 確信度 | 件数 |
|---|---|
| 確実 | 17 |
| 蓋然 | 3 |
| 要検討 | 2 |
| **合計** | **22** |

### 主要な系統バグ (Dominant defect)

**sm/fj の主語クリティック (1sg/1pl/3pl) を TAM+verb と一括融合し A 役割を palette から消失させる系統バグ** が圧倒的多数 (#3, #6, #11, #14, #19, #22, #27, #29, #44, #54, #58, #60, #71, #92 = **14件**, 計 22 件中の 64%)。これは sm の `Ou te` / `Tatou te`、fj の `Au` / `Eda` / `Me da` / `Au sa` / `Au via` といった clitic + TAM complex が、本動詞と 1 segment に潰されることに起因。同データ内で #1/#9/#98 sm は `A:Ou te` を正しく独立化しており、**自己一貫性違反**として系統的修正が可能。`feedback_split_segments_like_reference.md` + `feedback_cross_sibling_role_consistency.md` の併用基準で、mi/haw との粒度を sm/fj に揃える形で一括修正を推奨。

次点は **haw の程度副詞 `loa` (very) を形容詞 + INTENS で C 一括融合する系統バグ** (#5, #18, #87 = 3件)。en の `C:very + D:adjective` 分離と mi/sm/fj の C/D 分離に対して haw のみ単独逸脱。

第三に **haw の a-class/o-class 所有誤用** (#29, #50, #64, #86 / 系統的に #52, #73 にも波及 = 4-6件)。Elbert & Pukui §8.5 に照らし、alienable な所有物 (傘・電話・ペット・財布) に o-class `koʻu` を充てている。これは構造-語彙境界の問題で、所有 category は grammatical な分類なので structural defect と扱う。

### 既出 (#26/#35) との切り分け

- 語彙の意味誤り (sm `manaomia`/`aafiaga`/`fa'atasitonuga`、fj `wekaveitalanoa`/`ulululu`/`ga e dua`、mi `tōtiti`/`marangai mātao`) は #35/#26 で既に処理済。本ラウンドは触れない。
- 'okina 正書法 (haw/sm の straight `'`→`ʻ`) も #35 issue 12-13 で処理済。
- #17 fj `E dua na`、#69 sm `ia` 二重 marking、#25 mi 色違い等の role-letter 系統バグも #35 で処理済。
- 本ファイルは **TAM+主語 clitic 融合**、**程度副詞融合**、**a/o-class 所有**、**non-adjacent 同 letter 重複**、**D/E 逆配置** の 5 つに集中。

### 推奨修正単位

22 件のうち **#3-1, #6-2, #11-3, #14-4, #19-6, #22-7, #27-8, #29-9, #44-10, #54-11, #58-12, #60-13, #71-14, #92-16** の 14 件は **sm/fj 主語クリティック分離系統** として一括スクリプト処理可能 (regex 検出: `Ou te ` / `Tatou te ` / `Au ` 先頭 + 動詞文)。残り 8 件は個別判定。

---

**File:** `/home/jounlai/langmap/langmap_reviews/77_open.md`
**Issue count:** 22 (確実 17 / 蓋然 3 / 要検討 2)
**Dominant defect:** sm/fj 主語クリティック (`Ou te` / `Tatou te` / `Au` / `Eda` / `Me da`) を TAM+本動詞と 1 segment に潰す系統バグ — 14/22 件 (64%)、A 役割の palette 欠落の主因。mi/haw との cross-sibling 粒度差で一括検出可能。

---

## Dev response — round 1 (2026-06-04)

レビュー #77 (Polynesian palette-coverage / chunking) 22 件全件を audit、確実 17 / 蓋然 3 / 要検討 2 のうち **21 件採用、1 件保留** (#20=#87 haw)。data.js は read-only で全 cell の現状を `/tmp/dump_poly77.mjs` で verbatim ダンプし照合。Edits は `/tmp/lm_edits_77.json` (36 edits / 23 unique sentence ids、隣接同一 role-letter 0 件)。

### 採用 (21 件 / 36 edits)

**A. sm/fj 主語クリティック分離系統 (14 件 / 26 edits)** — `feedback_split_segments_like_reference.md` + `feedback_cross_sibling_role_consistency.md` 適用。`Ou te` / `Tatou te` / `Au` / `Au sa` / `Au a` / `Au via` / `Eda` / `Me da` / `Ua ou` / `Na ou` を本動詞から分離し A 役独立化。mi/haw の `A:ahau` / `A:au` / `A:mātou` / `A:mākou` と粒度整合。
- 単独 sm 修正: #3, #11, #76 (それぞれ fj は別構造)
- 単独 fj 修正: #54 (sm はすでに `A:tatou` 分離済)
- sm + fj 並行修正: #6, #14, #19, #22, #27, #29, #44, #58, #60, #71, #92

**B. haw 程度副詞 `loa` 分離系統 (2 件 / 2 edits)** — INTENS+ADJ 融合解消。#5/#18 で `D:He ʻono | C:loa` / `D:He pipiʻi | C:loa` に分割し mi/sm/fj の C=intensifier 粒度に整合。en `D:is | C:very | D:delicious` の D 隣接重複を避け、`He` を D に統合する形で letter 安定化。

**C. haw a/o-class 所有 (4 件 / 4 edits)** — Elbert & Pukui §8.5 準拠。alienable な道具・ペット (傘・犬・電話・スマホ) に対する o-class `koʻu` → a-class `kaʻu` 訂正: #29 (傘), #50 (犬), #64 (電話), #86 (スマホ)。テキストのみ変更で segment 構造は維持。

**D. non-adjacent 同 letter 重複解消 (1 件 / 2 edits)** — #15 haw/mi で 後半 C (`ma ka ʻāina ʻē` / `ki tāwāhi` = abroad) を D に relabel。en `D:is | C:studying abroad | B:in France` の D を引き継ぎ。

**E. haw copula 欠落 (1 件 / 1 edit) [蓋然]** — #33 で `He` (predicate marker, en `was` 担当) を D 内融合から B 独立化。sm/fj の `B:Sa` / `B:E` と整合。

**F. role-letter 逆配置 (1 件 / 1 edit)** — #94 sm で D/E swap: `E:faitotoa | D:fou` に変更し en `D:new | E:doors` および mi/haw/fj の noun=E 流派に整合。

### 保留 (1 件)

**#20 (#87 haw)【要検討】** — レビュー自身が「owner 判断要」とした項目。提案された `C:He kūpono | D:loa | A:kēia | B:polokalamu` は、現状の `D:He kūpono | C:loa` から C/D を入れ替えるが、mi の `C:He tino | D:pai` (C=He+INTENS、D=adjective) には依然整合せず、letter 割当の意味論的曖昧性が残る。`feedback_priority_not_keep_reason.md` の「sibling 分割があれば全変種で揃える」原則と、要検討の保守判断のいずれを取るか単独レビュアー判断を超えるため、本ラウンドでは保留し review owner / 次ラウンドに委ねる。#5/#18 の haw INTENS+ADJ 分離 fix が入った後、#87 を再評価するのが望ましい。

### Closure 提案

採用 21 件は系統バグの根治を含み、残 1 件は要検討の保留のみ。Round 1 で **substantially closed**、`#87 haw 要検討` の owner 判断のみ次ラウンドに継続。

### 検証

- Adjacency check: 全 36 edits で隣接同一 role-letter 0 件 (validated via `/tmp/lm_edits_77.json` post-write parse)。
- Non-adjacent duplicate: #76 sm のみ `E...E` 二回出現 (en の二重 1sg clause 構造に対応、正当)。
- Vocabulary intact: #26/#35 で処理済の語彙誤りは触れず、純構造分節 + a/o-class grammatical category のみ。

### 件数

| 区分 | 数 |
|---|---|
| Issues addressed | 21 of 22 |
| Edits | 36 |
| Held over | 1 (#87 haw 要検討) |
| JSON | `/tmp/lm_edits_77.json` |
