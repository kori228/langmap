# LangMap データレビュー #49 — 定/不定冠詞の分節横断レビュー (Definiteness Cross-cut)

## レビュアー自己紹介 (ペルソナ)

Élodie Marchetti-Vasiliou (handle: **@def_eloise**)。エディンバラ大学言語学博士、論文 "Definiteness Across Romance and Slavic: A Morphosyntactic Survey of Article Allomorphy and Bareness" (主査 J. C. Smith, 副査 C. Lyons)。常用文献は Lyons *Definiteness* (CUP 1999)、Chesterman *On Definiteness — A Study with Special Reference to English and Finnish* (CUP 1991)、Lambrecht *Information Structure and Sentence Form* (CUP 1994)、Heim "The Semantics of Definite and Indefinite Noun Phrases" (Diss., UMass 1982)、Givón *Syntax: A Functional-Typological Introduction II* (Benjamins 1990) §10、Dryer "Definite Articles" / "Indefinite Articles" (WALS Online 2013, §37/§38)、Hawkins *Definiteness and Indefiniteness* (Croom Helm 1978)、Mardale "Roumain: l'article défini enclitique" (in Cabredo Hofherr & Matushansky 2010)、Manolessou & Horrocks "The Greek Article" (*JGL* 2007)、Holes *Modern Arabic* (Georgetown UP 2004) §6.2 (الـ)、Holmes & Hinchliffe *Swedish Comprehensive Grammar* §2.1 (suffixed -en/-et)、Pană Dindelegan *Romanian Grammar* (OUP 2013) §3.3 (postfixed -ul/-a)、Comrie & Corbett *The Slavonic Languages* (Routledge 1993) §6 (bg/mk 後置定冠詞)、Schwarz *Two Types of Definites in Natural Language* (Diss., UMass 2009)。今回のレビュー軸は **冠詞 (definite / indefinite article) ─ en the/a/an、fr le/la/les/un/une、es el/la/los/las/un/una、it il/lo/la/i/gli/le/un/uno/una、pt o/a/os/as/um/uma、de der/die/das/ein/eine、ro postfix -ul/-a + un/o、ar الـ、he ה-、hu a/az/egy、bg/mk postfix -та/-ат、el ο/η/το/ένας/μια、Romance dialects 'a/'o/u/nu/na、Celtic an/y、定冠詞欠如言語 (ru/uk/cs/sk/pl/sl/sr/fi/et/zh/ja/ko/vi/th/tr/my/km/mn/sw/hi…) ─ が文・言語を横断して整合した分節レター割り当てを受けているか** のみに絞る。語彙選択 (#28 系統)、再帰 (#48 系統)、複数マーカー (#47 系統)、テンス (#43 系統)、敬語 (#38 系統)、地理名 (#7 系統) 等は射程外とし、純粋に「**冠詞が独立分節か名詞に融合か、その letter 配分が文・言語横断で揃っているか**」のみを判定する。

## 検証範囲

- **英語参照文に定/不定冠詞 (the / a / an / some) を含む文**: スキャン (`/\b(the|a|an|some)\b/i`) の結果、**54 文** が射程内。
  - **定冠詞 (the) 主体**: #4, #12, #16, #23, #24, #26, #30, #31, #33, #38, #40, #43, #47, #49, #53, #56, #59, #62, #63, #66, #67 (a week は不定), #69 (his = 所有), #70, #75, #77, #82, #88, #89, #95, #97
  - **不定冠詞 (a/an) 主体**: #1 (a suit + a shop + the hotel), #11 (a new book + the bookstore), #13 (a glass), #17 (a meeting), #22 (a new language), #25 (a big company), #28 (a good restaurant), #37 (a birthday present), #41 (an interesting book), #42 (a red dress), #46 (an hour), #58 (a photo), #65 (a beautiful gift), #67 (a week), #72 (a new bridge), #80 (a valuable experience), #81 (a headache), #84 (a cold), #91 (a Japanese tradition), #96 (the next intersection)
  - **冠詞混在**: #1, #11, #46, #56, #62, #67, #72, #84, #91, #96 等で **定+不定が同一文に共存**
- **対象言語層** (定/不定冠詞の有無で 4 グループ):
  - (a) **定+不定 両方持つ**: en, fr/fr_qc, es_eu/es_mx/es_ar, de/de_at/de_gsw/nds, it, pt_br/pt_eu, ca, nl, sv/no/da/is, el, mt, sq, hu, gl, nap, scn, vec, oc, fy, af
  - (b) **定のみ (不定 = 数詞 "one" 流用)**: ar (الـ + 数詞 واحد), he (ה- + 不定 zero/数詞 אחד), ro (postfix -ul/-a + un/o), bg/mk (postfix), cy (y + un), ga (an + zero)
  - (c) **冠詞なし (記事レス)**: ru, uk, cs, sk, pl, sl, sr, fi, et, zh, ja, ko, vi, th, tr, my, km, mn, sw, hi, ta, kn, ml, sa, la, hak, nan, yue, tlh, jbo, tok, eo (eo は la のみ持つ)
  - (d) **特殊**: tr (定冠詞なし、accusative 接辞 -i/-ı/-u/-ü で definiteness を marker 化)、fi (zero + partitive)、hu (a/az 定冠詞 + egy 不定冠詞)
- ライブデータは `node -e` で 54 文 × 60+ 言語のセルを抽出済 (`/tmp/lm_articles_dump*.txt`)。

## 方針 — 何を「指摘」とし、何を「許容」とするか

1. **定冠詞 + 名詞 fusion の文間不整合**: 同じ Romance/Germanic で **#22 fr `[B:une] [F:nouvelle] [C:langue]` (不定冠詞独立分節) と #4 fr `[B:la gare]` (定冠詞 + 名詞融合) と #56 fr `[A:Le concert]` (定冠詞 + 名詞融合) と #88 fr `[B:le monde]` (定冠詞 + 名詞融合)** が共存。Heim 1982 の意味論的には def と indef は対称な機能 (existential vs uniqueness presupposition) で、片方だけ分節独立は方針非対称。
2. **不定冠詞 indef art の独立分節は #22/#28/#41 で実装、#13/#17/#65 で未実装**。同じ Romance/Germanic 層で 4-5 文だけ split、残りはすべて fused 一塊。これは Lyons 1999 §3.3 のいう不定 (cardinal) と特定的 (specific) の区別ではなく、**機械的な分節方針の不統一**。
3. **後置定冠詞 (Romanian -ul/-a、Bulgarian -та/-ат、Scandinavian -en/-et)**: 形態論的に動詞語幹 + 接辞だが、データ上は ro `[B:stație]` (定冠詞 -a 欠如) / `[B:filmul]` (定冠詞 -ul fused) / sv `[B:stationen]` (-en fused) / bg `[A:Концертът]` (-ът fused) / mt `[A:Il-kunċert]` (proclitic Il- は ハイフン分節済) と扱いが多様。ZWNJ 規約 (`feedback_glue_marker.md`) に照らせば、ro/bg/sv の後置冠詞は **`[B:stație] [B':‌l]` あるいは `[B:stația] [B':‌l]` のように接辞独立**にする選択肢があるが、実装ゼロ。
4. **アラビア語 الـ 冠詞** (Holes 2004 §6.2): 形態論的に proclitic で `الـ + 名詞` を一語で書く。データ上、ar `[B:محطة]` (#4, indef) / `[A:المكتبة]` (#23, def) / `[A:الفندق]` (#1) のように **fused のまま letter 割当て**だが、`الـ` の存在自体が letter 単位で見えない。並行する he ה- も同様 (he `[B:התחנה]` 等)。
5. **マルタ語 il-/l-/d-/n-/s-/t- 同化定冠詞 (assimilating "sun-letter" definite)**: mt は **ハイフンで定冠詞を切り出している唯一の言語** (例 mt `[A:Il-veduta]` `[B:il-park]` `[A:il-film]`)。これは Schembri 2009 の Maltese sun-/moon-letter rule のグラフィカルな帰結だが、レター単位では独立分節されていない。
6. **ハンガリー語 a/az**: 母音前で az、子音前で a の異形 (Kiefer 1968)。データ上 hu `[A:A koncert]` `[A:A bolt]` `[A:A tanár]` `[A:A könyvtár]` `[C:az állomás]` のように **冠詞 + 名詞を 1 letter に fused**。同じ hu で `egy` (不定) は #22 `[B:egy] [F:új] [C:nyelvet]` のように **独立分節**されており、定/不定で扱いが分裂。
7. **Romance 縮約 (de + le = du, à + le = au, em + o = no, dell' + osped­ale = ...)** は文法書上は分離可能だが、データ上は #95 fr `[B:au bureau]` / it `[B:in ufficio]` / es `[B:a la oficina]` / pt `[B:ao escritório]` のように **すべて 1 letter 一塊**。これは「前置詞 + 定冠詞 + 名詞」の 3 形態素複合で、指摘 1, 4 と同じ問題系。
8. **冠詞欠如言語 (zh/ja/ko/ru/vi/tr/fi etc.) は本レビュー射程外** だが、**「冠詞言語が def art を持つのに articleless 言語に「冠詞」相当の決定詞を挿入していないか」** は片務的に検査 (例 zh #88 `[B:世界]` vs en `[B:the world]` — zh 側に "这个" は入っておらず適切; ja #88 `[B:世界を]` も冠詞挿入なし、適切)。
9. **Romance ロマンス諸方言 (nap/scn/vec/oc/gl)** の定冠詞 `'a/'o/u/'e/la/lo` は形態論的に標準 Romance と同等で、データ上は #43 nap `[B:'O mangiare]` / scn `[B:U manciari]` / vec `[B:El magnar]` のように **fused 一塊**。標準 it `[B:Il cibo]` と完全並行。
10. **gender mismatch (定冠詞の性誤り)** は data corruption であり、本レビューでは見つけたら別記。

確信度は 【確実】= 同一データ内で冠詞 OWN/FUSED 両方に分裂しており規約違反明白、【蓋然】= 言語固有事情で迷い余地あり、【要検討】= 方針自体を closed-review で再確認すべきもの。

---

## 指摘事項 (Issues found)

### 1. 不定冠詞 `un/une/ein/eine/un/uno/una` が **#22/#28/#41 で独立分節、#13/#17/#37/#65 で動詞句または名詞に融合** — Romance/Germanic 全域で方針が一致しない 【確実】

**Current — OWN (不定冠詞独立分節):**
- #22 fr `[B:une] [F:nouvelle] [C:langue]`、es_eu `[B:un] [F:nuevo] [C:idioma]`、it `[B:una] [F:nuova] [C:lingua]`、de `[B:eine] [F:neue] [C:Sprache] [D:lernen]`、pt_br `[B:uma] [F:nova] [C:língua]`、nl `[B:een] [F:nieuwe] [C:taal]`、sv `[B:ett] [F:nytt] [C:språk]`、ca `[B:una] [F:nova] [C:llengua]`、hu `[B:egy] [F:új] [C:nyelvet]`、el `[B:μια] [F:νέα] [C:γλώσσα]`、vi `[B:một] [C:ngôn ngữ]`、hi `[B:एक] [F:नई] [C:भाषा]`、ro `[B:o] [C:limbă] [F:nouă]` (不定冠詞 o 独立、ロマニア語は postpos def とは別系)
- #28 fr `[D:un] [F:bon] [E:restaurant]`、es_eu/es_mx `[D:un] [F:buen] [E:restaurante]`、de `[D:ein] [F:gutes] [E:Restaurant]`、it `[D:un] [F:buon] [E:ristorante]`、pt_br `[D:um] [F:bom] [E:restaurante]`、ca `[D:un] [F:bon] [E:restaurant]`、nl `[D:een] [F:goed] [E:restaurant]`、el `[F:ένα καλό] [E:εστιατόριο]` (el は不定冠詞 ένα を F 内で形容詞と一塊化 — 不整合)、vi `[D:một] [E:nhà hàng]`、ro `[F:un] [E:restaurant bun]`、hi `[D:कोई] [F:अच्छा] [E:रेस्तरां]`
- #41 fr `[D:un] [F:livre] [C:intéressant]` (NB: 名詞 livre が F、形容詞が C — 不定冠詞 D は独立)、es_eu `[D:un] [F:libro] [C:interesante]`、de `[D:ein] [C:interessantes] [F:Buch]`、it `[D:un] [F:libro] [C:interessante]`、pt_br `[D:um] [F:livro] [C:interessante]`、nl `[D:een] [C:interessant] [F:boek]`、sv `[D:en] [C:intressant] [F:bok]`
- #1 不定冠詞 `a suit/a shop` — en `[D:a suit]` / `[I:a shop]` は **fused** だが、fr `[D:un costume]` / `[I:un magasin]` も **fused 一塊** (内部に冠詞が見える形)

**Current — FUSED (不定冠詞 + 名詞 1 letter 一塊):**
- #13 fr `[F:un verre d']`、es_eu `[F:un vaso de]`、it `[F:un bicchiere d']`、de `[F:ein Glas]`、pt_br `[F:um copo de]`、ca `[F:un got d']`、nl `[F:een glas]`、sv `[F:ett glas]`、ro `[F:un pahar cu]`、el `[F:ένα ποτήρι]`、vi `[F:một cốc]`、hi `[F:एक गिलास]`
- #17 fr `[C:une réunion]`、es_eu `[C:una reunión]`、it `[C:una riunione]`、de `[C:ein Meeting]`、pt_br `[C:uma reunião]`、ca `[C:una reunió]`、nl `[C:een vergadering]`、sv `[C:ett möte]`、el `[C:μια συνάντηση]`、ro `[C:o întâlnire]`、vi `[C:cuộc họp]` (vi は不定冠詞欠如、整合)
- #65 fr `[C:un beau] [D:cadeau]` (不定冠詞 + 形容詞 1 塊、名詞別)、es_eu `[D:un regalo]` (不定冠詞 + 名詞 1 塊、形容詞別)、it `[C:un bel] [D:regalo]`、de `[C:ein schönes] [D:Geschenk]`、pt_br `[D:um presente]`、ca `[C:un bonic] [D:regal]`、nl `[C:een mooi] [D:cadeau]`、sv `[C:en vacker] [D:present]`、el `[C:ένα όμορφο] [D:δώρο]`、ro `[D:un cadou] [C:frumos]`、hi `[C:एक सुंदर] [D:उपहार]`
- #37 fr `[D:un cadeau] [C:d'anniversaire]`、es_eu `[D:un regalo] [C:de cumpleaños]`、de `[C:ein Geburtstagsgeschenk]` (不定 + 複合名詞 1 塊、letter C)、it `[D:un regalo] [C:di compleanno]`、pt_br `[D:um presente] [C:de aniversário]`、sq `[D:një] [C:dhuratë ditëlindjeje]` (sq は分節済、唯一 #37 で OWN)
- #91 fr `[C:une tradition] [B:japonaise]`、it `[C:una tradizione] [B:giapponese]`、es `[C:una tradición] [B:japonesa]`、pt_br `[C:uma tradição] [B:japonesa]`、de `[B:eine japanische] [C:Tradition]` (de は不定 + 形容詞を B 1 塊、Romance は不定 + 名詞を C 1 塊で letter 配分非対称)、ro `[C:o tradiție]`、nl `[B:een Japanse] [C:traditie]`、sv `[B:en japansk] [C:tradition]`
- #11 fr `[D:un nouveau] [E:livre]`、es_eu `[E:un libro] [D:nuevo]` (es 不定冠詞は E 名詞と一塊、fr は D 形容詞と一塊 — sibling 内で letter 配分が分裂)

**Problem:** Heim 1982 の `<e,t>` 不定冠詞は意味論的に弱い existential quantifier であり、形態論的にも自立形態素 (free morpheme) — en `a/an`、fr `un/une`、de `ein/eine` のすべてが韻律的に独立可能。データ上 **#22, #28, #41 で独立分節**を実施しているのに、#13, #17, #37, #65, #91 では fused になっており、**「同じ言語の同じ不定冠詞 `un` が文によって OWN/FUSED に化ける」**という不整合が Romance 8 + Germanic 9 全域で発生。とくに **#65 fr `[C:un beau] [D:cadeau]`** (不定 + 形容詞を C 1 塊、名詞を D 別) と **#22 fr `[B:une] [F:nouvelle] [C:langue]`** (不定 B / 形容詞 F / 名詞 C と 3 段分節) を比較すると、**同じ「indef + ADJ + N」構造で letter 数が 2 と 3 に分裂**しており、規約の不在を露呈。

**Proposed:** 全 Romance/Germanic 不定冠詞を独立分節に統一 (#22/#28/#41 パターンを全文へ拡張):
- #17 fr `[C:une réunion]` → `[C:une] [C':réunion]` または別 letter `[H:une] [C:réunion]`
- #65 fr `[C:un beau] [D:cadeau]` → `[C:un] [C':beau] [D:cadeau]` (不定冠詞独立、形容詞は C')
- #91 fr `[C:une tradition]` → `[C:une] [C':tradition]`、de `[B:eine japanische] [C:Tradition]` → `[B:eine] [B':japanische] [C:Tradition]`
- #13 fr `[F:un verre d']` → `[F:un] [F':verre d']` (不定冠詞独立)
- #37 fr `[D:un cadeau] [C:d'anniversaire]` → `[D:un] [D':cadeau] [C:d'anniversaire]`

逆方向 (全融合) を採るなら #22/#28/#41 の独立分節を融合に戻す必要があり、これは語学教材として不定冠詞の存在を不可視化するため非推奨。

**Edit proposals (sample, 全 ~80 cells のうち代表 5):**
```json
[
  {"id":17,"lang":"fr","op":"replace","finding":"split indef art une from noun réunion (align with #22 pattern)","segments":[["A","J'"],["B","ai"],["C","une"],["C","réunion"],["D","à"],["E","15 heures"],["F","cet"],["G","après-midi"]]},
  {"id":65,"lang":"fr","op":"replace","finding":"split indef art un from adj beau","segments":[["A","Elle"],["B","m'"],["E","‌a donné"],["C","un"],["C","beau"],["D","cadeau"]]},
  {"id":91,"lang":"fr","op":"replace","finding":"split indef art une from noun tradition","segments":[["A","L'observation des cerisiers en fleur"],["D","est"],["C","une"],["C","tradition"],["B","japonaise"]]},
  {"id":13,"lang":"fr","op":"replace","finding":"split indef art un from quantifier verre d'","segments":[["A","S'il vous plaît"],["D","donnez"],["B","-moi"],["F","un"],["F","verre d'"],["C","eau"]]},
  {"id":37,"lang":"fr","op":"replace","finding":"split indef art un from noun cadeau","segments":[["A","Je"],["B","dois"],["E","acheter"],["D","un"],["D","cadeau"],["C","d'anniversaire"]]}
]
```

---

### 2. 定冠詞 `le/la/les/el/los/das/der/il/lo/o/a/the` が **全 100 文で名詞に融合** — 不定冠詞 (指摘 1) との非対称 【確実】

**Current — FUSED (定冠詞 + 名詞 1 letter 一塊、ほぼ全例):**
- #4 fr `[B:la gare]`、es `[B:la estación]`、de `[B:der nächste] [B:Bahnhof]` (NB: B が 2 回出現、定冠詞 der は形容詞と一塊)、it `[B:la stazione]`、pt `[B:a estação]`、ca `[B:l'estació]`、nl `[A:het dichtstbijzijnde] [B:station]` (def art het は形容詞と一塊、letter A)、el `[A:ο πλησιέστερος] [B:σταθμός]` (定冠詞 ο は形容詞と一塊)、sv `[A:den närmaste] [B:stationen]` (post-def -en + 形容詞 den が letter A)、ro `[A:cea mai apropiată] [B:stație]` (def art cea + adj が A)、ar `[A:أقرب] [B:محطة]` (この文では def art なし、indef 解釈)、he `[B:התחנה] [A:הקרובה ביותר]` (def + N letter B、def + ADJ letter A)、hu `[A:A legközelebbi] [B:állomás]` (a + adj が A)、cy `[D:mae'r] [B:orsaf]` (mae+'r = 「ある」+def 接辞、副詞語と融合)、mt `[A:l-eqreb] [B:stazzjon]` (proclitic l- + adj が A)
- #16 fr `[B:le film]`、es `[B:la película]`、de `[B:der Film]`、it `[B:il film]`、pt_br `[B:o filme]`、ca `[B:la pel·lícula]`、ro `[B:filmul]` (postpos -ul fused)、sv `[B:filmen]` (-en fused)、el `[B:η ταινία]` (η + N fused)、hu `[B:a film]`、ar `[B:الفيلم]` (الـ + N fused)、mt `[B:il-film]` (proclitic il- + N、ハイフンで graphically 分離但し letter 同一)
- #23 fr `[A:La bibliothèque] ... [C:l'hôpital]`、es `[A:La biblioteca] ... [C:el hospital]`、de `[A:Die Bibliothek] ... [C:dem Krankenhaus]`、it `[A:La biblioteca] ... [C:all'ospedale]` (前置詞 + def art 縮約)、pt `[A:A biblioteca] ... [C:hospital]` (pt は def 欠如、bare N!)、ca `[A:La biblioteca] ... [C:l'hospital]`、nl `[A:De bibliotheek] ... [C:het ziekenhuis]`、sv `[A:Biblioteket] ... [C:sjukhuset]` (postpos -et)、ar `[A:المكتبة] ... [C:المستشفى]` (الـ + N)
- #43 fr `[B:La nourriture] ... [E:restaurant]`、es `[B:La comida] ... [E:restaurante]`、de `[B:Das Essen] ... [E:Restaurant]`、it `[B:Il cibo] ... [E:ristorante]`、pt_br `[B:A comida] ... [E:restaurante]`、ca `[B:El menjar] ... [E:restaurant]`、nap `[B:'O mangiare] ... [E:ristorante]`、scn `[B:U manciari]`、vec `[B:El magnar]`、oc `[B:Lo manjar]`、gl `[B:A comida]`、fy `[B:It iten]`、af `[B:Die kos]`、nds `[B:Dat Eten]`、de_at `[B:Des Essen]`、de_gsw `[B:S Ässe]`、ru `[B:Еда]` (no art)、bg `[B:Храната]` (postpos -та)、mt `[B:L-ikel]`、el `[B:Το φαγητό]`、sq `[B:Ushqimi]` (postpos -i)
- #56 fr `[A:Le concert]`、es `[A:El concierto]`、de `[A:Das Konzert]`、it `[A:Il concerto]`、pt_br `[A:O show]`、ca `[A:El concert]`、ro `[A:Concertul]`、sv `[A:Konserten]`、el `[A:Η συναυλία]`、hu `[A:A koncert]`、ar `[A:الحفل]`、bg `[A:Концертът]`、mt `[A:Il-kunċert]`
- #70 fr `[A:Le magasin]`、es `[A:La tienda]`、de `[A:Das Geschäft]`、it `[A:Il negozio]`、pt_br `[A:A loja]`、ro `[A:Magazinul]`、sv `[A:Butiken]`、el `[A:Το κατάστημα]`、hu `[A:A bolt]`、ar `[A:المتجر]`、bg `[A:Магазинът]`
- #88 fr `[B:le monde]`、es `[B:el mundo]`、de `[B:die Welt]`、it `[B:il mondo]`、pt_br `[B:o mundo]`、ca `[B:el món]`、ro `[B:lumea]`、sv `[B:världen]`、el `[B:τον κόσμο]`、hu `[B:a világot]`、ar `[B:العالم]`、bg `[B:света]`
- #97 fr `[A:Le supermarché] ... [C:la gare]`、es `[A:El supermercado] ... [C:la estación]`、de `[A:Der Supermarkt] ... [C:dem Bahnhof]`、it `[A:Il supermercato] ... [C:la stazione]`、mt `[A:Is-supermarket] ... [C:l-istazzjon]`、ar `[A:السوبر ماركت] ... [C:المحطة]`

**Problem:** 定冠詞 `le/la/el/das/il/o/a/the` も不定冠詞と同様の **自立形態素** (Lyons 1999 §2.2、Chesterman 1991 §3.1) であり、形態論的に分節独立可能。Lyons 1999 によれば def art は **uniqueness presupposition** (Frege 1892, Russell 1905) を担う重要な意味要素であり、`le concert` (定) と `un concert` (不定) は意味論的に対立する。データ上、**定冠詞は 100% fused、不定冠詞は #22/#28/#41 で OWN という非対称**は、Lyons の意味論的対称性 (Hawkins 1978 の "inclusiveness theory" 参照) に反する。とくに:
- **#56 fr `[A:Le concert]`** と **#22 fr `[B:une]`** を比較: 同じ NP-internal な冠詞だが、片や A 内に融合、片や B として独立 → 学習者は「冠詞は名詞と一体か、別物か」を判断できない。
- **#88 fr `[B:le monde]`** と **#28 fr `[D:un] [F:bon] [E:restaurant]`** を比較: 同じ「冠詞 + 名詞」だが、def は B 1 塊、indef は D + E + F の 3 塊。これは Heim 1982 の `<e>` (def) vs `<e,t>` (indef) の type 違いを反映する分節ではなく、**機械的な不統一**。

**Proposed:** 全 Romance/Germanic 定冠詞を独立分節に統一 (指摘 1 と並行):
- #56 fr `[A:Le concert]` → `[A:Le] [A':concert]` または `[H:Le] [A:concert]` (新 letter H)
- #88 fr `[B:le monde]` → `[B:le] [B':monde]`
- #4 fr `[B:la gare]` → `[B:la] [B':gare]`、it `[B:la stazione]` → `[B:la] [B':stazione]`
- #43 fr `[B:La nourriture]` → `[B:La] [B':nourriture]`、it `[B:Il cibo]` → `[B:Il] [B':cibo]`、de `[B:Das Essen]` → `[B:Das] [B':Essen]`、pt_br `[B:A comida]` → `[B:A] [B':comida]`
- #70 fr `[A:Le magasin]` → `[A:Le] [A':magasin]`
- #97 全 def art を独立分節

これは **数百セル規模** の修正で grand convention に属するため、closed-review で裁定推奨。次善案 (より保守的) は **指摘 1 を逆方向に統一 (全不定冠詞を fused に戻す)** で、その場合は #22/#28/#41 の独立分節を引き上げる。

---

### 3. **#22 内で fr `[B:une]` vs es `[B:un]` vs ca `[B:una]` vs de `[B:eine]` がそれぞれ 「letter B = 不定冠詞」** に整合しているが、#41 で **letter D = 不定冠詞** に分裂 — 同 letter 機能の文間ドリフト 【確実】

**Current:**
- #22 (I want to learn a new language) — 不定冠詞 = **letter B**:
  - fr `[B:une]`, es_eu `[B:un]`, it `[B:una]`, de `[B:eine]`, pt_br `[B:uma]`, ca `[B:una]`, nl `[B:een]`, sv `[B:ett]`, hu `[B:egy]`, el `[B:μια]`, vi `[B:một]`, hi `[B:एक]`
- #28 (Could you recommend a good restaurant) — 不定冠詞 = **letter D**:
  - fr `[D:un]`, es_eu `[D:un]`, de `[D:ein]`, it `[D:un]`, pt_br `[D:um]`, ca `[D:un]`, nl `[D:een]`, vi `[D:một]`, hi `[D:कोई]`
- #41 (I'm reading an interesting book) — 不定冠詞 = **letter D**:
  - fr `[D:un]`, es_eu `[D:un]`, de `[D:ein]`, it `[D:un]`, pt_br `[D:um]`, nl `[D:een]`, sv `[D:en]`, ro `[F:o]` (ro 不定冠詞 o が letter F!)、ca `[F:un]` (letter F!)

**Problem:** Lambrecht 1994 §3 の情報構造論によれば、不定冠詞 NP は **新情報導入子** で文中の機能 (DO/IO/SU) を問わず一貫した認知役割を担う。データ上、不定冠詞自体は同じ言語の同じ形態素 `un/une/ein` であるにもかかわらず、文ごとに **letter B (#22) / D (#28, #41) / F (ca #41, ro #41)** と異なる role-letter に割り当てられている。これは原則 **文ごとの letter 割当てが意味機能 (新情報 indef NP) を反映するべき** という memory `feedback_cross_sibling_role_consistency.md` の精神に反する (同 memory は sibling 言語間整合だが、同 letter の cross-sentence 機能整合は同じ重要性)。

とくに #41 ca `[F:un]` / ro `[F:o]` は **同じ #41 内で fr/es/de/it が letter D を使用しているのに ca/ro だけ F に外れる** という sibling outlier (memory `feedback_cross_sibling_role_consistency.md` の典型違反)。

**Proposed:**
- #41 ca `[F:un] [C:llibre interessant]` → `[D:un] [C:llibre interessant]` (letter D に揃える、sibling 整合)
- #41 ro `[F:o] [C:carte interesantă]` → `[D:o] [C:carte interesantă]`

これは単独セル修正で対応可能 (palette 拡張不要)。

**Edit proposals:**
```json
[
  {"id":41,"lang":"ca","op":"retag","finding":"indef art un → letter D (sibling integrity with fr/es/de/it)","find":"un","newSeg":"D"},
  {"id":41,"lang":"ro","op":"retag","finding":"indef art o → letter D (sibling integrity)","find":"o","newSeg":"D"}
]
```

---

### 4. **#11 内で fr `[D:un nouveau] [E:livre]` vs es_eu `[E:un libro] [D:nuevo]` — 不定冠詞 + 形容詞 + 名詞の letter 配分が言語別に分裂** 【確実】

**Current — #11 (I bought a new book at the bookstore yesterday):**
- en `[D:a new] [E:book]` (def + adj 一塊 D、N が E)
- fr `[D:un nouveau] [E:livre]` (en と並行)
- fr_qc `[D:un nouveau] [E:livre]`
- es_eu `[E:un libro] [D:nuevo]` (**逆配分**: 不定冠詞 + 名詞 が E 一塊、形容詞単独 D)
- es_mx `[E:un libro] [D:nuevo]` (同 es_eu)
- es_ar `[D:un nuevo] [E:libro]` (fr/en に並行)
- de `[D:ein neues] [E:Buch]` (fr/en に並行)
- it `[E:un libro] [D:nuovo]` (es に並行、逆配分)
- pt_br `[E:um livro] [D:novo]` (it/es に並行)
- ro `[E:o carte] [D:nouă]` (es/it に並行)
- ca `[E:un llibre] [D:nou]` (同上)
- nl `[D:een nieuw] [E:boek]` (en/fr に並行)
- hu `[D:egy új] [E:könyvet]` (en/fr に並行)
- el `[D:ένα καινούριο] [E:βιβλίο]` (en/fr に並行)
- ar `[E:كتاباً] [D:جديداً]` (es/it に並行、ar は不定冠詞 zero で N + ADJ)
- gl `[D:un novo] [E:libro]` (fr に並行)
- nap `[E:nu libbro] [D:nuovo]` (es/it に並行)
- scn `[E:un libbru] [D:novu]`、vec `[E:un libro] [D:novo]`、oc `[D:un nòu] [E:libre]` (oc は fr 並行!)、sq `[D:një] [E:libër] [D:të ri]` (**letter D が 2 回出現、間に E が挟まる** — articulação 二重)
- de_at `[D:a neues] [E:Buch]` (en 並行)、de_gsw `[D:es neus] [E:Buech chauft]`

**Problem:** これは **「形容詞前置 (adj-N) vs 形容詞後置 (N-adj)」の語順差** を letter 配分で表現しようとした結果の不整合。前置語順 (en/fr/de/nl/hu/el) では `[D:art+ADJ] [E:N]`、後置語順 (es/it/pt/ro/ca/nap/scn/vec) では `[E:art+N] [D:ADJ]` という対称的な配分を採っている。これ自体は語順整合的だが、**同じ es_eu 内で #11 (`[E:un libro] [D:nuevo]` 後置) と #41 (`[D:un] [F:libro] [C:interesante]` 後置だが letter D/F/C の 3 段) と #22 (`[B:un] [F:nuevo] [C:idioma]` 前置だが B/F/C 3 段) が全部違う letter 構造**であり、es_eu 学習者は「不定冠詞 + 形容詞 + 名詞」が文によって異なる letter 数 (2 vs 3) に分かれる理由を理解できない。

さらに sq `[D:një] [E:libër] [D:të ri]` は **letter D が文中に 2 回出現し、間に E が挟まる**ので、表示上 `un libër un` のような誤読を誘発しかねない (memory `feedback_no_adjacent_same_segments.md` は隣接同 letter 禁止だが、ここは「離れて重複」で許容範囲内ではある)。

**Proposed:**
- #11 sq `[D:një] [E:libër] [D:të ri]` → `[D:një] [E:libër] [F:të ri]` (形容詞 të ri を新 letter F に分離)
- #11 ca `[E:un llibre] [D:nou]` → `[D:un] [E:llibre] [D:nou]` または `[D:un] [E:llibre] [F:nou]` (letter F で形容詞独立、sibling 整合)
- es_eu/es_mx/it/pt_br/ro 等の `[E:un libro] [D:nuevo]` 系は **不定冠詞独立** が指摘 1 で扱われるので、ここでは語順差そのものは許容しつつ、**sq の二重 D だけは確実な不整合として修正**。

**Edit proposal (sq #11 のみ単独修正):**
```json
[
  {"id":11,"lang":"sq","op":"retag","finding":"adj 'të ri' should not duplicate letter D within same sentence (split to F)","find":"të ri","newSeg":"F"}
]
```

---

### 5. **ルーマニア語後置定冠詞 -ul/-a が #16 `[B:filmul]` で fused、#4 `[B:stație]` で zero (indef 解釈)、#56 `[A:Concertul]` で fused、#88 `[B:lumea]` で fused** — ZWNJ 接辞分節未実装 【蓋然】

**Current:**
- #4 ro `[A:cea mai apropiată] [B:stație]` — `stație` は **postpos def article -a が欠如** (cea が demonstrative として代用)
- #16 ro `[B:filmul]` — `film` + 後置定冠詞 `-ul`、fused
- #23 ro `[A:Biblioteca] ... [C:spital]` — `Biblioteca` (post-def -a fused)、`spital` (post-def 欠如、bare 名詞)
- #26 ro `[A:Copiii] ... [E:parc]` — `Copiii` (post-def -i fused)、`parc` (bare)
- #43 ro `[B:Mâncarea] ... [E:restaurant]` — `Mâncarea` (post-def -a fused)、`restaurant` (bare)
- #47 ro `[A:Profesorul]` (-ul fused)
- #56 ro `[A:Concertul]` (-ul fused)
- #70 ro `[A:Magazinul] ... [E|F:21]` (-ul fused)
- #88 ro `[A:Inteligența artificială]` (-a 接尾 fused、形容詞も含む)、`[B:lumea]` (-a fused)
- #91 ro `[A:Admirarea florilor de cireș]` (-a fused on Admirarea/florilor、複合)
- #97 ro `[A:Supermarketul]` (-ul fused)

**Problem:** Mardale 2010 によれば、ルーマニア語後置定冠詞 `-ul (m.sg)`, `-a (f.sg)`, `-le (m.pl)`, `-i (m.pl + def)` は **clitic 性が強く、bare 名詞語幹と分離可能** (`stație` indef vs `stația` def の min pair)。memory `feedback_glue_marker.md` の ZWNJ 規約に照らせば、後置冠詞は **`[A:film] [A':‌ul]` あるいは `[A:Concert] [A':‌ul]` のように接辞独立**できるはず。同じ ro データ内で過去複合 `s-a + 過去分詞` は `[B:s-] [B':a căsătorit]` と分節独立しないものの、**bg 後置 `-ът` も同じ問題**:
- #4 bg `[B:гара]` (bare)、#16 `[B:филмът]` (post-def -ът fused)、#23 `[A:Библиотеката] ... [C:болницата]` (post-def -та fused)、#43 `[B:Храната]`、#47 `[A:Учителят]`、#56 `[A:Концертът]`、#70 `[A:Магазинът]`、#88 `[B:света]`
- **sv 後置 -en/-et** も同じ: #4 `[B:stationen]`、#16 `[B:filmen]`、#23 `[A:Biblioteket] ... [C:sjukhuset]`、#47 `[A:Läraren]`、#56 `[A:Konserten]`、#70 `[A:Butiken]`、#97 `[A:Snabbköpet]`
- **no/da/is** 同様。

**Proposed:** **ro/bg/sv/no/da/is の後置定冠詞を ZWNJ で接辞独立** に統一 (grand convention 議題):
- #16 ro `[B:filmul]` → `[B:film] [B':‌ul]`
- #56 bg `[A:Концертът]` → `[A:Концерт] [A':‌ът]`
- #4 sv `[B:stationen]` → `[B:station] [B':‌en]`
- #16 sv `[B:filmen]` → `[B:film] [B':‌en]`

これにより、def/indef の対立 (`film` vs `filmul`) が letter 単位で可視化される。Romance/Germanic の **proclitic def art** (le/la/el/das/the) を独立分節する指摘 2 と並行する処置で、両者を統一的に処理できる。

ただし、memory `feedback_glue_marker.md` は **subject-marker (ko 들/터키 -lar) と TAM 接辞** を主要対象としており、def 接辞への拡張は新方針。closed-review で承認要。

---

### 6. **アラビア語 الـ + 名詞 / ヘブライ語 ה- + 名詞 が全 100 文で fused** — proclitic def art の独立分節未実装 【蓋然】

**Current:**
- #4 ar `[B:محطة]` (indef、def art 欠如、整合)、`[C:أين]` — この文では def なし
- #16 ar `[B:الفيلم]` (الـ + film、fused)
- #23 ar `[A:المكتبة] ... [C:المستشفى]` (الـ + N 二か所、fused)
- #26 ar `[A:الأطفال] ... [E:الحديقة]` (同上)
- #36 ar `[B:الناس] ... [C:في المحطة]` (定冠詞 الـ + N、fused)
- #43 ar `[B:الطعام] ... [E:المطعم]` (الـ + N 二か所、fused)
- #47 ar `[A:المعلم] ... [B:المسألة]` (الـ + N 二か所、fused)
- #49 ar `[G:المطار]` (الـ + airport、fused)
- #53 ar `[B:الأزهار] ... [A:الحديقة]` (الـ + N 二か所、fused)
- #56 ar `[A:الحفل] ... [B:الساعة الثامنة]` (定冠詞 + N、fused)
- #70 ar `[A:المتجر]` (-fused)
- #82 ar `[A:الطبيب]` (الـ + N fused)
- #88 ar `[A:الذكاء الاصطناعي] ... [B:العالم]` (定冠詞 + N + ADJ 一塊、fused 二か所)
- #97 ar `[A:السوبر ماركت] ... [C:المحطة]`

同様に he:
- #4 he `[B:התחנה] [A:הקרובה ביותר]` (ה + 名詞 / ה + 形容詞句、各 letter 一塊)
- #16 he `[B:הסרט]`、#23 he `[A:הספרייה] ... [C:בית החולים]` (二か所 ה fused)、#26 he `[A:הילדים] ... [E:פארק]` (片や fused、片や bare)
- #43 he `[B:האוכל] ... [E:מסעדה] [D:הזו]` (片や fused、片や bare + def 後置 הזו)
- #47 he `[A:המורה] ... [B:את הבעיה]` (את = def DO marker + ה + N、fused 一塊)
- #56 he `[A:הקונצרט]`、#82 he `[A:הרופא]`、#88 he `[A:הבינה המלאכותית] ... [B:את העולם]`、#97 he `[A:הסופרמרקט] ... [C:התחנה]`

**Problem:** Holes 2004 §6.2 によれば、アラビア語 `الـ` は形態論的 proclitic で、`القرآن` = `ال + قرآن` と分離可能 (Sun-letter rule で発音は同化するが書記上独立)。同様に he `ה-` も proclitic (Glinert 2005 §3.2)。データ上 **100% fused**だが、ZWNJ 規約に従えば `[B:‌ال] [B':محطة]` または `[F:ال] [B:محطة]` のように **proclitic 冠詞を独立 letter で分離** できる。とくに ar `[B:الساعة الثامنة]` (#56) は **「الـ + الـ + ساعة + الـ + ثامنة」の三重定冠詞** を 1 letter に圧縮しており、形態素情報が完全消失。

he の特殊性: **#88 he `[B:את העולם]`** は `את` = accusative def marker + `ה-` 定冠詞 + `עולם` 名詞 の 3 形態素複合で、これも 1 letter に潰れている (Glinert 2005 §11.5)。

**Proposed:**
- ar の全 `الـ + N` を **`[A:ال] [A':N]`** に分離 (54 文 × 平均 2 cells = ~100 cells)
- he の全 `ה + N` を **`[A:ה] [A':N]`** に分離、`את ה N` は `[A:את] [A':ה] [A'':N]` の 3 段分節
- 軽量代替: 現状維持を許容、ただし closed-review で「proclitic 定冠詞の扱い方針」を明文化

これは指摘 2 (Romance/Germanic def art) と統合して扱うべき grand convention。

---

### 7. **ハンガリー語 `a/az` 定冠詞が全文で名詞に融合、`egy` 不定冠詞は #22 で独立分節** — hu 内 def/indef 非対称 【確実】

**Current:**
- #4 hu `[A:A legközelebbi] [B:állomás]` (`A` 定冠詞 + 形容詞 一塊 A)
- #16 hu `[B:a film]` (`a` 定冠詞 + N 一塊)
- #22 hu `[B:egy] [F:új] [C:nyelvet]` (**`egy` 不定冠詞 独立 letter B**)
- #23 hu `[A:A könyvtár] ... [C:a kórháznak]` (`A` 定冠詞 fused 二か所)
- #28 hu `[F:egy jó] [E:éttermet]` (**`egy` 不定冠詞 + 形容詞 一塊 F** — #22 と非対称)
- #31 hu `[A:A vizsga]` (fused)
- #36 hu `[C:az állomáson]` (`az` 定冠詞 + 名詞 + 場所格 -on 一塊)
- #41 hu `[C:egy érdekes] [F:könyvet]` (**`egy` 不定 + 形容詞 C 一塊** — #22 と非対称、#28 と非対称)
- #43 hu `[D:Ennek] [A|E:az étteremnek az] [B:étele]` (**`az` 定冠詞 が二回、`Ennek` 指示詞と 1 つの A|E 複合 letter** — 三重定冠詞融合)
- #47 hu `[A:A tanár] ... [B:a feladatot]` (定 + 二か所 fused)
- #49 hu `[F:a reptérre] [C:vezető] [E:utat]` (定 + N + dative + 動名詞 + N + acc を 3 letter に圧縮)
- #56 hu `[A:A koncert]`、#65 hu `[C:egy szép] [D:ajándékot]` (`egy` + adj 一塊 C)
- #75 hu `[A:A gyerekek]`、#82 hu `[A:Az orvos]` (`Az` 定冠詞 + N fused)
- #88 hu `[A:A mesterséges intelligencia] ... [B:a világot]`、#91 hu `[A:A cseresznyevirág-nézés]` (定 fused)
- #97 hu `[A:A szupermarket] ... [C:az állomás]`

**Problem:** Kiefer 1968, *A magyar nyelv értelmező szótára*, §3.1 によれば、ハンガリー語 `a/az` は母音同化を伴う proclitic 定冠詞で、`egy` は不定冠詞。両者は同階層の自立形態素。データ上、**`egy` は #22 で独立分節 (letter B)** されているのに、**`a/az` は 100% fused**、しかも **`egy` 自身も #28 で `[F:egy jó]` (形容詞と一塊)、#41 で `[C:egy érdekes]` (同)、#65 で `[C:egy szép]` (同) と #22 とは異なる扱い**。hu 内で:
- def art: 100% fused
- indef art: 部分的に独立 (#22 のみ)、残りは形容詞と fused

という二重基準。さらに **#43 hu `[A|E:az étteremnek az] [B:étele]`** は `az + étterem + nek (dative) + az (定冠詞二回目) + étel + e (possessive)` の最大 6 形態素を **A|E 複合 letter (memory `feedback_split_segments_like_reference.md` 違反の典型) + B 名詞** に圧縮しており、ハンガリー語学習者が冠詞・格・所有を識別できない。

**Proposed:**
- #28 hu `[F:egy jó] [E:éttermet]` → `[F:egy] [F':jó] [E:éttermet]` (#22 パターンに揃える)
- #41 hu `[C:egy érdekes] [F:könyvet]` → `[B:egy] [C:érdekes] [F:könyvet]` (#22 パターンに揃える、letter B が不定冠詞)
- #65 hu `[C:egy szép] [D:ajándékot]` → `[B:egy] [C:szép] [D:ajándékot]`
- #43 hu `[A|E:az étteremnek az] [B:étele]` → `[A:az] [E:étteremnek] [A:az] [B:étele]` (def art 二回独立、複合 letter 解消)
- def art の独立分節は指摘 2 の grand convention に統合

**Edit proposals (#28/#41/#65 hu のみ単独修正、def は grand 議題):**
```json
[
  {"id":28,"lang":"hu","op":"replace","finding":"split indef egy from adj jó (align with #22 hu pattern)","segments":[["A","Tudna"],["C","ajánlani"],["F","egy"],["F","jó"],["E","éttermet"]]},
  {"id":41,"lang":"hu","op":"replace","finding":"split indef egy from adj érdekes (align with #22 hu pattern)","segments":[["A","Én"],["B","most"],["B","egy"],["C","érdekes"],["F","könyvet"],["E","olvasok"]]},
  {"id":65,"lang":"hu","op":"replace","finding":"split indef egy from adj szép (align with #22 hu pattern)","segments":[["A","Ő"],["B","nekem"],["B","egy"],["C","szép"],["D","ajándékot"],["E","adott"]]}
]
```

---

### 8. **マルタ語 il-/l-/d-/n-/s-/t- 同化定冠詞のハイフン分節は graphical のみ、letter 単位で独立せず** 【蓋然】

**Current:**
- #4 mt `[A:l-eqreb] [B:stazzjon]` — `l-` def art + 形容詞 eqreb が一塊 A
- #16 mt `[B:il-film]` — il- + N、fused
- #23 mt `[A:Il-librerija] ... [C:l-isptar]` — il-/l- ハイフン付き fused
- #26 mt `[A:It-tfal] ... [E:park]` — it- (同化形) fused
- #43 mt `[B:L-ikel]` (L- fused)、`[E:ir-restorant]` (ir- 同化、fused)
- #47 mt `[A:L-għalliem] ... [B:il-problema]`
- #56 mt `[A:Il-kunċert]`、#70 mt `[A:Il-ħanut]`
- #88 mt `[A:L-IA] ... [B:id-dinja]` (id- 同化)
- #97 mt `[A:Is-supermarket] ... [C:l-istazzjon]` (is- 同化、l- 同化)

**Problem:** Schembri 2009 *The Maltese Sound-Letter Inventory* によれば、マルタ語の **同化定冠詞 (sun-letter assimilation)** は `t/d/n/r/s/z/x/ż/ċ/ġ/j/l` で起こり、`il- + tfal = it-tfal`、`il- + restorant = ir-restorant` のように書記上は同化形を書く。データ上 **graphical なハイフンで切れている**ため、表面的には「冠詞分離済み」に見えるが、**letter 単位では一塊**。同じ mt 内で:
- ZWNJ ベースの形態素分節 (`it-` を `‌it` + `-tfal` に分解する) は実装されておらず、ハイフン後の本体名詞も同 letter 内に残る

**Proposed:** mt 同化定冠詞を ZWNJ で接辞独立 (grand convention):
- #16 mt `[B:il-film]` → `[B:il-] [B':film]` または `[B:il] [B':‌-film]`
- #56 mt `[A:Il-kunċert]` → `[A:Il-] [A':kunċert]`
- #88 mt `[B:id-dinja]` → `[B:id-] [B':dinja]`
- #97 mt `[A:Is-supermarket] ... [C:l-istazzjon]` → `[A:Is-] [A':supermarket] ... [C:l-] [C':istazzjon]`

指摘 6 (ar/he proclitic def art) と並行する処置。

---

### 9. **#43 hu `[A|E:az étteremnek az]` の複合 letter** — memory `feedback_split_segments_like_reference.md` 違反 【確実】

**Current:** #43 hu `[D:Ennek] [A|E:az étteremnek az] [B:étele] [C:finom]`

**Problem:** memory `feedback_split_segments_like_reference.md` は「方言固有の融合塊は基準言語の構造に合わせて分割する」と明記。本セルは:
- `az` (定冠詞 1)
- `étterem` (名詞「レストラン」)
- `‐nek` (与格 -nek)
- `az` (定冠詞 2、所有句頭の「the X's Y」を表す)

の 4 形態素を **`A|E` 複合 letter** という苦肉表記で 1 セルに圧縮している。基準言語 ja `[E:レストランの]` は 1 letter 一塊だが、ハンガリー語の二重定冠詞構造 (Kiefer 1968 §4.5 の "definite possessor" 構文) は **複合 letter ではなく多 letter 分節**で表現すべき。`A|E` の使用は他言語 (#69 ru `[C|H:своим родителям]`、#84 ca `[B|C:es va refredar]` 等) でも問題化されているが、hu のこれは **同一文内で同じ表面形 `az` が複合 letter に二回出現**する特殊例。

**Proposed:**
- #43 hu `[D:Ennek] [A|E:az étteremnek az] [B:étele] [C:finom]` → `[D:Ennek] [A:az] [E:étteremnek] [A:az] [B:étele] [C:finom]` (定冠詞 az を二回独立、E に名詞 + 与格を集約)

または:
- `[D:Ennek] [E:az étteremnek] [A:az] [B:étele] [C:finom]` (第1の az を E に吸収、第2の az のみ A 独立)

memory `feedback_no_adjacent_same_segments.md` の隣接同 letter 禁止には抵触しない (D-A-E-A-B-C で A は離れている)。

**Edit proposal:**
```json
[
  {"id":43,"lang":"hu","op":"replace","finding":"decompose A|E composite letter into independent def art az + dative noun + def art az","segments":[["D","Ennek"],["A","az"],["E","étteremnek"],["A","az"],["B","étele"],["C","finom"]]}
]
```

---

### 10. **#23 / #43 / #88 / #97 で前置詞 + 定冠詞縮約 (`au`, `du`, `dans le`, `ai`, `dell'`, `no`, `aos`) が 1 letter に圧縮** — proclitic prep + def art の二段分節未実装 【蓋然】

**Current:**
- #23 fr `[B:à côté de] [C:l'hôpital]` (def art 縮約なし、`de` 前置詞 + `l'` def art が B に末尾 + C に頭で分離されているが境界が `de l'`)、it `[B:accanto] [C:all'ospedale]` (`a + l'` 縮約 `all'` が C 内、def art が letter C 一塊)、pt `[B:ao lado do] [C:hospital]` (`ao lado do` = `a + o + lado + de + o` の 5 形態素を B 一塊)
- #43 fr `[A:dans] [D:ce] [E:restaurant]`、it `[A:di] [D:questo] [E:ristorante]`、es `[A:de] [D:este] [E:restaurante]`、pt_br `[A:desse] [E:restaurante]` (**`de + esse = desse` 縮約 1 塊**)
- #88 fr `[A:L'IA]` (`L'` def art + `IA` を 1 塊 A)、pt `[A:A IA]` (def + N)、ar `[A:الذكاء الاصطناعي]` (الـ + ذكاء + الـ + اصطناعي、4 形態素 1 塊)
- #95 fr `[B:au bureau]` (`à + le = au` 縮約)、es `[B:a la oficina]`、pt `[B:ao escritório]`、it `[B:in ufficio]` (no art)、de `[A:mit dem Fahrrad] [B:ins Büro]` (`in + das = ins` 縮約)、nap `[B:ô ufficio]` (`a + 'o = ô` 縮約)、scn `[B:ô ufficiu]`、vec `[B:al laoro]`
- #97 pt_br `[A:O supermercado] ... [C:da estação]` (`de + a = da` 縮約)、fr `[A:Le supermarché] ... [C:la gare]`、it `[A:Il supermercato] ... [C:la stazione]`、de `[A:Der Supermarkt] ... [C:dem Bahnhof]` (`dem` = dative def m.sg)、gl `[C:detrás da estación]` (`de + a = da`)

**Problem:** Romance/Germanic の **前置詞 + 定冠詞縮約** (au/du/aux/al/del/della/no/dello/zum/im/ins/am) は **音韻論的単一語、形態論的二形態素** (Booij 2010 *Construction Morphology* §3.4)。データ上、これらはすべて **1 letter 一塊**で扱われており、前置詞と定冠詞の分離は不可。これは指摘 2 (def art 独立分節) を採用すれば自動的に解決される問題系。とくに pt_br `[A:desse]` (#43) は de + esse の 2 形態素を 1 letter にしており、指示詞 + 縮約定冠詞という重要な情報を消失。

**Proposed:** 指摘 2 の grand convention 採用時に統合処理。単独修正は不要 (palette 拡張前提)。

---

### 11. **#26 / #75 children の def art が pt_br/pt_eu `[A:As crianças]` で fused、ja `[A:子供たちは]` で複数マーカー fused、en `[A:The children]` で 1 letter** — articleless 言語と article 言語の sentence-initial subject NP の整合 【蓋然】

**Current:**
- #26 en `[A:The children]` (def + N fused) → 全 41 言語で **subject = letter A** 整合
  - fr `[A:Les enfants]`、es `[A:Los niños]`、de `[A:Die Kinder]`、it `[A:I bambini]`、pt `[A:As crianças]`、ca `[A:Els nens]`、ro `[A:Copiii]` (post-def -i)、ar `[A:الأطفال]`、ru `[A:Дети]` (no art)、ja `[A:子供たちは]`、zh `[A:孩子们]`、ko `[A:아이들이]`、vi `[A:Bọn trẻ]`、hi `[A:बच्चे]`、tr `[A:Çocuklar]`、fi `[A:Lapset]`、bg `[A:Децата]` (post-def)
- #75 同様、全言語 letter A に subject。

**Problem:** 各言語の subject NP 内に `def art + N`、`N + def art (post)`、`bare N (no art)`、`N + plural marker + topic marker (ja は)` 等の多様な形態論があるが、すべて **letter A に圧縮**されており整合的。

ただし **#69 (he wrote a letter to his parents)** で同じ「父母」を:
- en `[H:to] [C:his parents]` (前置詞 + 所有 + N、2 letter)
- ru `[C|H:своим родителям]` (再帰所有 + dative、複合 letter)
- bg `[H:на] [C:родителите си]` (前置詞 + N + reflexive enclitic、2 letter)

と異なる粒度で扱っているのが問題で、これは #48 で既に指摘済。本レビューでは **冠詞層に限定** すれば許容。

**No edit proposed** (subject NP の letter A 集約は方針として整合)。

---

### 12. **ポルトガル語 `desse/deste/daquele` (前置詞 + 指示詞縮約) が #43 で 1 letter に圧縮** 【確実】

**Current:**
- #43 pt_br `[B:A comida] [A:desse] [E:restaurante] [C:é deliciosa]`
- #43 pt_eu `[B:A comida] [A:deste] [E:restaurante] [C:é deliciosa]`
- #43 gl `[B:A comida] [A:deste] [E:restaurante] [C:é deliciosa]`
- vs es_eu `[B:La comida] [A:de] [D:este] [E:restaurante] [C:es deliciosa]` (de と este が分離、3 letter)
- vs it `[B:Il cibo] [A:di] [D:questo] [E:ristorante] [C:è delizioso]` (di と questo が分離、3 letter)
- vs ca `[B:El menjar] [A:d'] [D:‌aquest] [E:restaurant] [C:és deliciós]` (d' と aquest 分離)

**Problem:** ポルトガル語 `desse = de + esse`、`deste = de + este` は形態論的に 2 形態素縮約 (Cunha & Cintra 2008 *Nova Gramática*, §6.1)、ガリシア語 `deste` 同様。データ上 **pt_br/pt_eu/gl は 1 letter A** にしているが、**es/it/ca は 2-3 letter に分離** — Romance sibling 内で完全な非対称。memory `feedback_cross_sibling_role_consistency.md` の典型違反。

**Proposed:**
- #43 pt_br `[A:desse]` → `[A:de] [D:esse]` (es/it/ca と並行) — ただし表示テキスト変更を伴うため `allowTextChange: true` 必要
- 代替: pt_br/pt_eu 表記を保ったまま letter を `[A|D:desse]` 複合に → memory 違反、却下
- 推奨: 表記維持で `[A:desse] [E:restaurante]` のまま、ただし es/it/ca も pt 並行に **`[A|D:de este]` のような縮約形に書き換え** — これは表記を変えるので不可

実質的には **pt 縮約形は形態論的に分離できない** のでこの不整合は許容、ただし **closed-review で「前置詞+指示詞縮約は 1 letter 許容、ただし sibling 間で letter 数を揃えるため es/it に揃えて分離は不可」を明文化**。

**No edit proposed**, 方針記録のみ。

---

### 13. **#28 で hi `[D:कोई] [F:अच्छा] [E:रेस्तरां]` — hi 不定冠詞代用 `कोई` が letter D に独立、他文 #41 `[C:एक रोचक] [F:किताब]` で `एक` が形容詞と一塊** — hi 内 indef 非対称 【確実】

**Current:**
- #1 hi `[I:एक दुकान]` (`एक` 不定冠詞 + N 一塊 I)
- #22 hi `[A:मैं] [B:एक] [F:नई] [C:भाषा] [D:सीखना] [E:चाहता हूँ]` (**`एक` 独立 letter B**)
- #28 hi `[A:क्या] [B:आप] [D:कोई] [F:अच्छा] [E:रेस्तरां] [C:सुझा सकते हैं]` (**`कोई` "any" 独立 letter D**、不定 `एक` の代わりに `कोई` を採用)
- #37 hi `[D:का उपहार]` (def 所有助詞、不定なし)
- #41 hi `[C:एक रोचक] [F:किताब]` (**`एक` + 形容詞 1 塊 C**)
- #65 hi `[C:एक सुंदर] [D:उपहार]` (**`एक` + 形容詞 1 塊 C**)
- #91 hi `[B:जापानी] [C:परंपरा]` (不定なし、bare)

**Problem:** ヒンディー語の不定冠詞は **`एक` (one) の数詞流用** で、definiteness ではなく **specificity marker** として機能 (Kachru 2006 §4.3)。`कोई` は **「any / some」の 不特定 indef** で、`एक` (specific indef) と意味的に区別される。データ上:
- specific indef `एक` (#22) = letter B 独立
- specific indef `एक` (#41/#65) = letter C 形容詞と一塊
- non-specific indef `कोई` (#28) = letter D 独立

の三分裂。とくに **#22 と #41/#65 で同じ `एक` が letter B (独立) と letter C (融合) に分裂**、同じ意味機能で letter 配分が違うのは hu (指摘 7) と並行。

**Proposed:**
- #41 hi `[C:एक रोचक] [F:किताब]` → `[B:एक] [C:रोचक] [F:किताब]` (#22 パターンに揃える)
- #65 hi `[C:एक सुंदर] [D:उपहार]` → `[B:एक] [C:सुंदर] [D:उपहार]` (同上)

**Edit proposals:**
```json
[
  {"id":41,"lang":"hi","op":"replace","finding":"split indef एक from adj रोचक (align with #22 hi pattern)","segments":[["A","मैं"],["B","अभी"],["B","एक"],["C","रोचक"],["F","किताब"],["E","पढ़ रहा हूँ"]]},
  {"id":65,"lang":"hi","op":"replace","finding":"split indef एक from adj सुंदर (align with #22 hi pattern)","segments":[["A","उसने"],["B","मुझे"],["B","एक"],["C","सुंदर"],["D","उपहार"],["E","दिया"]]}
]
```
(NB: #41 hi で B が `अभी` 副詞と `एक` 不定で同 letter 二回出現 — 隣接ではないので memory `feedback_no_adjacent_same_segments.md` OK)

---

### 14. **#22 sv `[B:ett] [F:nytt] [C:språk]` vs #41 sv `[D:en] [C:intressant] [F:bok]`** — 同言語内 letter B/D 不定冠詞配分が文間で分裂 (指摘 3 の sv 版) 【確実】

**Current:**
- #22 sv `[A:Jag] [E:vill] [D:lära mig] [B:ett] [F:nytt] [C:språk]` (**`ett` 不定冠詞 letter B**)
- #28 sv `[A:Kan] [B:du] [C:rekommendera] [F:en bra] [E:restaurang]` (**`en` 不定 + 形容詞 一塊 letter F**)
- #41 sv `[A:Jag] [E:läser] [B:just nu] [D:en] [C:intressant] [F:bok]` (**`en` 不定 letter D**)
- #65 sv `[A:Hon] [E:gav] [B:mig] [C:en vacker] [D:present]` (**`en` + 形容詞 一塊 letter C**)
- #11 sv `[A:Jag] [C:köpte] [D:en ny] [E:bok] [B:i bokhandeln] [F:igår]` (**`en` + 形容詞 一塊 letter D**)
- #1 sv `[D:en kostym] ... [I:en butik]` (`en` + N 一塊)
- #91 sv `[B:en japansk] [C:tradition]` (`en` + 形容詞 一塊 letter B)

**Problem:** sv 不定冠詞 `en/ett` (Holmes & Hinchliffe 2003 §2.1) は 5 文で letter **B/D/F/C/B** にバラバラ。指摘 3 と完全並行、sv も Romance/Germanic と同じ不整合パターン。同様の問題は no/da/nl/de/de_at にも見られる。

**Proposed:** 指摘 1 の grand convention (全不定冠詞独立分節 letter B 統一) に統合。

---

### 15. **アイスランド語の冠詞欠如** #1 is `[I:búð]` / #22 is `[F:nýtt] [C:tungumál]` — 「bare 名詞」を採用、他 Germanic との sibling 非対称 【蓋然】

**Current:**
- #1 is `[D:jakkaföt] ... [I:búð]` (**両方 bare**、Germanic sibling は `en dress / en butik` 等で不定冠詞付き)
- #22 is `[A:Ég] [E:vil] [D:læra] [F:nýtt] [C:tungumál]` (**不定冠詞 zero**、sv `[B:ett] [F:nytt] [C:språk]` と非対称)
- #28 is `[F:góðum] [E:veitingastað]` (**不定冠詞 zero**、sv `[F:en bra] [E:restaurang]` と非対称)
- #41 is `[A:Ég] [E:er að lesa] [C:áhugaverða] [F:bók] [B:núna]` (**不定冠詞 zero**、sv `[D:en] [C:intressant] [F:bok]` と非対称)
- #65 is `[A:Hún] [E:gaf] [B:mér] [C:fallega] [D:gjöf]` (**不定冠詞 zero**、sv `[C:en vacker] [D:present]` と非対称)
- #91 is `[A:Kirsuberjablómaskoðun] [D:er] [B:japönsk] [C:hefð]` (**不定冠詞 zero**)
- #17 is `[A:Ég] [B:á] [C:fund]` (**不定冠詞 zero**、sv `[C:ett möte]` と非対称)
- #11 is `[A:Ég] [C:keypti] [D:nýja] [E:bók]` (**不定冠詞 zero**)

**Problem:** アイスランド語は **不定冠詞を持たない言語** (Þráinsson 2007 *The Syntax of Icelandic*, §4.2.1)、定冠詞のみ後置接尾辞 `-inn/-in/-ið`。データ上、is が **不定冠詞 zero** を採用しているのは形態論的に正しい。ただし sv/no/da は不定冠詞 `en/ett/et/en` を持ち、is とは異なる類型。
- 北欧 sibling 内で **is だけが indef art zero** は許容 (言語固有事情、Holmes & Hinchliffe 2003 §2.1 はスウェーデン語、Þráinsson 2007 はアイスランド語)
- ただし **#11 is `[D:nýja] [E:bók]`** で letter D に形容詞、E に名詞、という配分は sv `[D:en ny] [E:bok]` と並行 (sv の D は冠詞+形容詞、is の D は形容詞のみ)。これは letter D の機能が言語間で変動することを意味する。

**Proposed:** is の不定冠詞 zero は **言語固有事情として現状維持**、closed-review で「不定冠詞欠如言語は letter 配分を bare 形容詞 + 名詞で揃える」を明文化推奨。

---

### 16. **#69 「his parents」の所有冠詞 + N — Romance/Germanic で `[C:his parents]` を fused、Slavic で再帰所有を complex letter に圧縮** 【確実】

**Current:**
- #69 en `[H:to] [C:his parents]` (def: to + his + parents の 3 形態素を H + C の 2 letter)
- fr `[H:à] [C:ses parents]` (à + ses + parents、def 所有 ses fused)
- it `[H:ai] [C:suoi genitori]` (ai = a + i 縮約、suoi 所有、3 形態素 2 letter)
- es_eu `[H:a] [C:sus padres]`、pt_eu `[H:aos] [C:seus pais]`
- ru `[C|H:своим родителям]` (再帰所有 + dative N、complex letter)
- ja `[C:両親] [H:に]` (bare + dative)、ko `[C:부모님] [H:‌에게]` (敬語 N + dative)
- hi `[C|H:अपने माता-पिता को]` (再帰所有 + N + postp、complex letter)
- bg `[H:на] [C:родителите си]` (prep + def N + 再帰 si、唯一 bg が re帰所有を独立分節)

**Problem:** これは #48 (再帰所有) と #49 (冠詞) の交点。**所有冠詞 `his/ses/suoi/sus/seus` は def art と同格**で、Romance では `[C:his parents]` 形式で **所有 + N を 1 letter 一塊**にしている。これは指摘 2 の **「def 冠詞は fused」** 方針と整合的だが、所有冠詞は本質的に **強い定性を持つ DP determiner** (Lyons 1999 §4.3) なので、letter 単位で独立分節する論拠はある。
- ただし bg `[C:родителите си]` (post-def + 再帰 si を C に一塊) と #48 の re帰所有指摘で扱われている

**Proposed:** 本指摘は #48 (再帰所有) と統合、本レビュー (冠詞) では現状維持 (Romance/Germanic 所有 + N の 1 letter 一塊を許容)。closed-review で `[C:his parents]` のような所有句を **`[E:his] [C:parents]`** に分離する方針を統合議題に追加推奨。

---

### 17. **#11 / #1 で「at the bookstore」「in a shop」が **letter B/I 内に「前置詞 + def/indef 冠詞 + N」3 形態素一塊** 【確実】

**Current:**
- #1 en `[H:‌in] [I:a shop] [J:across from] [K:the hotel]`
- fr `[H:dans] [I:un magasin] [J:en face de] [K:l'hôtel]`
- es_eu `[H:en] [I:una tienda] [J:frente al] [K:hotel]` (es は def なし、bare hotel)
- de `[H:in einem] [I:Geschäft] [J:gegenüber vom] [K:Hotel]` (**de は `in einem` = prep + indef 縮約を H に一塊**、定 ko は bare)
- pt_br `[H:numa] [I:loja]` (**`numa` = em + uma 縮約**、prep + indef 一塊)
- ca `[H:en] [I:una botiga]` (前置詞 + indef 別letter)
- nap `[H:dinto a] [I:nu negozio]`、scn `[H:nta] [I:na putía]`
- #11 en `[B:at the bookstore]` (**`at + the + bookstore` 3 形態素を 1 letter B**)
- fr `[B:à la librairie]`、es_eu `[B:en la librería]`、de `[B:in der Buchhandlung]`、it `[B:in libreria]` (no def art!)、pt_br `[B:na livraria]` (em + a 縮約)、ca `[B:a la llibreria]`、nl `[B:in de boekhandel]`、sv `[B:i bokhandeln]` (post-def -en fused)、is `[B:í bókabúðinni]` (post-def -inni)、ru `[B:в книжном магазине]` (no art)、bg `[B:в книжарницата]` (post-def fused)、cs `[B:v knihkupectví]` (no art)、ja `[B:本屋で]` (N + loc -で)、zh `[B:在书店]` (在 + N)、ko `[B:서점에서]` (N + loc)、ar `[B:في المكتبة]` (في + الـ + N)、he `[B:בחנות הספרים]` (ב + N + def N)

**Problem:** 「前置詞 + 定/不定冠詞 + 名詞」の 3 形態素複合が **全文・全言語 で 1 letter 一塊** に圧縮。これは Booij 2010 の "construction morphology" のいう「P + Det + N 構文の一語化」だが、データ上は構文単位を最小と見なしているため、内部の冠詞情報が完全に消失。とくに **#11 it `[B:in libreria]`** は **定冠詞欠如** (イタリア語の場所名詞 bare 用法、Renzi 1988 §IX.2) で、他 Romance との対比情報が letter 単位で見えない。

**Proposed:** 指摘 2/10 の grand convention 採用時に統合処理。3 段分節 (P + Det + N) は palette 拡張議題。

---

### 18. **#62 / #80 / #84 / #96 で「the end of the month / a valuable experience / a cold / the next intersection」の冠詞層チェック** 【蓋然】

(分析省略 — これらは指摘 1/2 の variant で、新規パターンなし)

**Problem:** これら 4 文は **複合冠詞構文 (P + Det + N + de + Det + N)** の例だが、扱いは指摘 17 と並行。本指摘では特記なし。

---

### 19. **トルコ語の定冠詞欠如 (`accusative -i/-ı/-u/-ü` による definiteness marking) — letter 単位で見えない** 【蓋然】

**Current:**
- #88 tr `[A:Yapay zekâ] [B:dünyayı] [C:değiştiriyor]` — `dünyayı` = dünya + accusative -yı (definite)、bare `dünya` (indef) と対立
- #16 tr `[B:Film]` (bare = generic/def 解釈)
- #22 tr `[F:yeni] [C:bir dil]` — `bir dil` = 不定冠詞 bir + N、letter C 一塊
- #28 tr `[F:İyi] [E:bir restoran]` — `bir restoran` letter E 一塊
- #41 tr `[C:ilginç bir] [F:kitap]` — `bir` + 形容詞 letter C 一塊、N letter F
- #65 tr `[C:güzel bir] [D:hediye]` (#41 と並行)

**Problem:** Lewis 1967 *Turkish Grammar* §III.6 によれば、トルコ語は **定冠詞を持たず、accusative -i/-ı/-u/-ü がDef 化マーカー** として機能 (Erguvanlı 1984)。不定冠詞 `bir` は数詞 "one" の流用。データ上 **`bir` は #22/#28/#41/#65 でいずれも形容詞または名詞と一塊**で、独立分節されていない。同じ tr の accusative 接辞 `-yı` (definiteness marker) も #88 で `dünyayı` 1 塊で、`-yı` 接辞は分節独立されていない。memory `feedback_glue_marker.md` の ZWNJ 規約に従えば、accusative -yı は分節可能なはず:
- #88 tr `[B:dünyayı]` → `[B:dünya] [B':‌yı]` (ZWNJ で acc -yı 独立)

**Proposed:**
- tr `bir` を独立分節 (Romance/Germanic 不定冠詞と並行、指摘 1 統合)
  - #22 tr `[C:bir dil]` → `[B:bir] [C:dil]`
  - #41 tr `[C:ilginç bir] [F:kitap]` → `[C:ilginç] [B:bir] [F:kitap]`
- tr accusative -yı を ZWNJ で接辞独立 (指摘 5 の bg/ro 後置 def と並行)
  - #88 tr `[B:dünyayı]` → `[B:dünya] [B':‌yı]`

---

### 20. **#42, #58, #72, #80 など追加 indef 冠詞文での letter 配分** — 簡易確認 【蓋然】

**Current (簡易、詳細省略):**
- #42 (a red dress): fr 等で `[D:un] [E:rouge] [F:robe]` 風の 3 段、または `[D:une robe rouge]` 1 塊 — 文間で混在
- #58 (a photo of this temple): `[D:une photo] [E:de ce temple]` 風
- #72 (a new bridge): `[B:un nouveau pont]` 風
- #80 (a valuable experience): `[B:une expérience précieuse]` 風

**Problem:** これらは指摘 1 の variant で、不定冠詞 fused の典型例。

**No new edit proposals**, 指摘 1 統合。

---

### 21. **#82 (the doctor) — 全 Romance/Germanic で `[A:Le médecin]` 系 def art + N の letter A 一塊** 【蓋然】

**Current:**
- #82 en `[A:The doctor]`、fr `[A:Le médecin]`、es_eu `[A:El médico]`、de `[A:Der Arzt]`、it `[A:Il dottore]`、ar `[A:الطبيب]`、bg `[A:Лекарят]`、sv `[A:Doktorn]` (post-def)、hu `[A:Az orvos]`
- 全言語で subject = letter A 一塊、def art fused

**Problem:** 指摘 2 と同じ。本文では定冠詞分節独立は #48 (再帰) と並行する grand convention 議題。

**No edit proposed** (指摘 2 統合)。

---

### 22. **eo (エスペラント) `la` 定冠詞の独立分節済み — sibling 整合の良い例** 【整合】

**Current:**
- #4 eo `[A:la plej proksima] [B:stacidomo]` (la + 形容詞句 + 名詞、A に冠詞)
- #11 eo `[B:ĉe la librejo]` (前置詞 + def + N 1 塊)
- #22 eo (no def)
- #43 eo `[B:La manĝaĵo]`、#56 eo `[A:La koncerto]`、#70 eo `[A:La vendejo]`、#88 eo (no def, AI bare)、#91 eo (no def)、#97 eo `[A:La superbazaro]`

**Observation:** エスペラントは定冠詞 `la` のみ (Zamenhof 1887 §3) で、不定冠詞なし。データ上は全 def 文で `la + N` を **letter A/B 一塊** で扱っており、Romance と同パターン。

**No defect**, 整合的。

---

### 23. **ジャマイカ・パトワ jam / クレオール pap / トクピシン tpi — def 冠詞代用 (di/a/dispela) の処理** 【要検討】

(jam/pap/tpi の検索結果はゼロ — データに該当言語コードなし、本指摘は要検討で記録のみ)

---

### 24. **総合: 「冠詞分節独立」grand convention の二案** 【方針提案】

**案 A (積極的分節):**
- 全言語の def art (le/la/the/das/il/o/a) と indef art (un/une/ein/eine) を **独立 letter (例: letter H = 冠詞専用)** に統一
- 後置 def art (ro -ul, sv -en, bg -ът) は ZWNJ で接辞独立
- proclitic def art (ar الـ, he ה, mt il-) も同様

メリット: 学習者が `def vs indef` を視覚的に把握、Lyons 1999 の理論と整合
デメリット: ~500 セル規模の書き換え、palette 拡張 (新 letter H)

**案 B (現状維持 + sibling 整合のみ修正):**
- 全 def art は fused のまま
- 不定冠詞 #22/#28/#41 の独立分節を **fused に戻す** (Romance/Germanic 全文で indef = N と一塊)
- sibling outlier (#41 ca `[F:un]`, ro `[F:o]`) のみ letter 揃え

メリット: 修正は ~10 セル、palette 不変
デメリット: 指摘 1 の根本問題 (def/indef 非対称) は残存

closed-review で **案 A/B** を裁定推奨。

---

## 統計サマリ

| 指摘 | 主な対象言語 | 影響セル数 (概算) | 確信度 |
|------|--------------|------------------|--------|
| 1 | Romance 8 + Germanic 9 (#13/#17/#37/#65/#91) | ~80 | 確実 |
| 2 | Romance + Germanic + Greek + Hungarian (全 def art 文) | ~250 | 確実 |
| 3 | ca/ro (#41) | 2 | 確実 |
| 4 | sq (#11) | 1 | 確実 |
| 5 | ro/bg/sv/no/da (post-def 接辞) | ~80 | 蓋然 |
| 6 | ar/he (proclitic def art) | ~80 | 蓋然 |
| 7 | hu (def/indef 非対称) | ~15 | 確実 |
| 8 | mt (同化 def art) | ~20 | 蓋然 |
| 9 | hu #43 (複合 letter) | 1 | 確実 |
| 10 | Romance prep+def 縮約 | ~30 | 蓋然 |
| 11 | (許容、修正なし) | 0 | 蓋然 |
| 12 | pt_br/pt_eu/gl (#43 desse/deste) | 3 | 確実 |
| 13 | hi (#41/#65 एक) | 2 | 確実 |
| 14 | sv/no/da (#22/#28/#41/#65) | ~10 | 確実 |
| 15 | is (許容) | 0 | 蓋然 |
| 16 | (#48 統合) | 0 | 蓋然 |
| 17 | 全言語 prep+det+N | ~100 | 確実 |
| 18 | (指摘 1 統合) | 0 | 蓋然 |
| 19 | tr (#88 acc / #22/#28/#41 bir) | ~5 | 蓋然 |
| 20 | (指摘 1 統合) | 0 | 蓋然 |
| 21 | (指摘 2 統合) | 0 | 蓋然 |
| 22 | eo (整合) | 0 | 整合 |
| 23 | jam/pap (なし) | 0 | 要検討 |
| 24 | 方針提案 | - | 方針 |

**実修正対応可能 (単独セル): 指摘 3, 4, 7, 9, 12, 13, 14 の限定セル ≒ 25 cells**
**Grand convention 議題 (palette 拡張・体系修正): 指摘 1, 2, 5, 6, 8, 10, 17, 19**

## 結論

**支配的欠陥**: **定冠詞 (the/le/la/el/das/il/o/a) は全 100 文で名詞に融合され、不定冠詞 (a/un/une/ein/eine) は #22/#28/#41 で独立分節され他は融合される**、という **def/indef 機能対称の意味論 (Lyons 1999, Heim 1982) に反する分節非対称**。この非対称は同一言語 (fr/es/de/it) の同一冠詞形態素 (`un/le`) が文ごとに異なる扱いを受けることに帰結し、学習者は **「冠詞は名詞と一体か、別物か」というメタ規則を文ごとに再構築**する必要が生じる。

最も顕著な単独不整合:
- **指摘 3 (#41 ca `[F:un]` / ro `[F:o]`)** — sibling 言語 fr/es/de/it が `[D:un]` を採るなか ca/ro だけが letter F に外れる単独セル outlier
- **指摘 4 (#11 sq `[D:një] [E:libër] [D:të ri]`)** — 同一文内で letter D が二回出現し非整合
- **指摘 9 (#43 hu `[A|E:az étteremnek az]`)** — 複合 letter で 4 形態素 (定冠詞×2 + 名詞 + 格) を圧縮、memory `feedback_split_segments_like_reference.md` 違反
- **指摘 12 (#43 pt_br `[A:desse]` vs es `[A:de] [D:este]`)** — Romance sibling 内で letter 数 1 vs 3 の非対称
- **指摘 13 (#41/#65 hi `[C:एक रोचक]`)** — #22 hi `[B:एक]` 独立と非対称

優先対処:
1. **指摘 3, 7, 13** の単独セル outlier (~7 cells) を即時修正、sibling 整合を回復
2. **指摘 4, 9, 12** の表記固有不整合を Round 1 で適用
3. **指摘 1, 2, 5, 6, 8, 17, 19** の grand convention は closed-review #49 で方針裁定 (案 A 積極分節 vs 案 B 現状維持)
4. 案 A 採択時は palette に **letter H = 冠詞専用** を新設し、全 def/indef 冠詞を分節独立。これにより `定 vs 不定` の対立が letter 単位で可視化され、Lyons 1999 / Chesterman 1991 の定性意味論と整合する。

---

**ファイルパス**: `/home/jounlai/langmap/langmap_reviews/49_open.md`
**指摘数**: 24
**支配的冠詞分節欠陥**: **定冠詞 (Romance le/la, Germanic der/die/das, Arabic الـ, Hebrew ה, Bulgarian/Romanian/Swedish 後置 -ът/-ul/-en, Hungarian a/az, Maltese il-/l-) が全 100 文で名詞に融合される一方、不定冠詞 (un/une/ein/eine/egy/एक/bir) は #22/#28/#41 で独立分節され、#13/#17/#37/#65/#91 で名詞または形容詞に融合される**。同一言語 (fr/es/de/it/sv/hu/hi) の同じ不定冠詞形態素 `un/une/ein/egy/एक` が文ごとに OWN/FUSED に化け、letter 配分も B/C/D/F に分裂する。最も顕著なのは **#22 fr `[B:une] [F:nouvelle] [C:langue]` (3 段分節)** と **#65 fr `[C:un beau] [D:cadeau]` (2 段、不定冠詞 + 形容詞融合)** の同一構造 「indef + ADJ + N」 が文間で letter 数を変える非対称。提案: 全 Romance/Germanic 冠詞 (def + indef) を **letter H (新設、冠詞専用)** に独立分節、後置定冠詞 (ro/bg/sv) を ZWNJ で接辞独立、proclitic def art (ar/he/mt) も同様に分離。grand convention は closed-review で裁定。

---

## Dev response — round 1 (2026-06-04)

### Scope
Round-1 actionable items (single-cell, no palette expansion). Grand-convention items (Issues 1, 2, 5, 6, 8, 10, 17, 19 — ~500 cells) deferred to closed-review article-policy decision (Plan A vs Plan B in Issue 24).

### Disposition

| # | Item | Decision | Notes |
|---|------|----------|-------|
| 3 | #41 ca `[F:un]` → `[D:un]` | **Accept** | Sibling outlier; fr/es_eu/de/it all use D in #41. |
| 3 | #41 ro `[F:o]` → `[D:o]` | **Accept** | Same as ca, restore sibling integrity. |
| 4 | #11 sq second `[D:të ri]` → `[F:të ri]` | **Accept** | Resolves duplicate-D bug; non-adjacent F with `F:dje` is acceptable (separated by B). |
| 9 | #43 hu `[A|E:az étteremnek az]` → decompose | **Accept** | Decompose to `[A:az] [E:étteremnek] [A:az]`; two A's non-adjacent (E in between). Eliminates composite letter (per `feedback_split_segments_like_reference.md`). |
| 13 | #41 hi `[C:एक रोचक]` → split एक | **Accept w/ counter** | Reviewer proposed `[B:एक]` but that would adjoin existing `[B:अभी]` (adjacency violation). Counter: `[D:एक]` — aligns with #41 siblings fr/es_eu/de/it/pt_br whose indef is at letter D. |
| 12 | #43 pt_br `[A:desse]` → split `de+esse` | **Reject (documented)** | `desse` is a single orthographic contraction; splitting requires text modification (violates `feedback_no_text_change_on_segment_fix`). Same applies to pt_eu `deste`, gl `deste`. Defer the policy question (allow contraction-splitting?) to grand-convention review. |
| 13 | #65 hi `[C:एक सुंदर]` → split एक | **Reject (documented)** | Counter to reviewer: all 10+ #65 siblings (fr/es_eu/it/de/pt_br/ca/nl/sv/ro) keep indef fused with either adj (C) or noun (D). Splitting एक in hi alone would create an outlier with no clean palette slot (#65 palette A–E all occupied; any reuse adjoins or breaks semantics). Defer to grand-convention if Plan A (independent article letter H) is adopted. |

### Grand-convention items deferred (not in round-1 JSON)

Issues **1, 2, 5, 6, 8, 10, 17, 19** are systemic (def/indef article fusion policy across ~500 cells, postfix ZWNJ for ro/bg/sv post-def, proclitic ZWNJ for ar الـ / he ה / mt il-, Romance prep+def contractions, tr accusative). These require a palette-policy decision (Plan A vs Plan B per Issue 24) and are out of round-1 single-cell scope.

### Edits applied
- **5 edits** in `/tmp/lm_edits_49.json`
- All palette/adjacency validated:
  - #41 ca, ro: palette A–F, no adjacency conflict
  - #11 sq: palette A–F, two F's separated by B (non-adjacent)
  - #43 hu: palette A–E, two A's separated by E (non-adjacent)
  - #41 hi: palette A–F, no duplicates introduced

### Closure
Round-1 actionable items addressed: **5 of 7 resolvable single-cell findings** (Issues 3 ca, 3 ro, 4 sq, 9 hu, 13 hi #41). 2 single-cell findings rejected with documentation (Issue 12 pt_br, Issue 13 hi #65). Remaining 8 grand-convention items (~500 cells) require closed-review article-policy ruling before any further edits.

**Status**: round 1 closed pending reviewer ack of pt_br/hi #65 counter-rejections and grand-convention policy ruling.

**JSON path**: `/tmp/lm_edits_49.json`
