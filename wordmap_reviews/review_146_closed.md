# Wordmap review #146 — Definition-block factual accuracy auditor

## Reviewer self-introduction (ペルソナ自己紹介)

I am reviewer #146, a senior comparative lexicographer who audits the *editorial* layer of multilingual wordlists — the `definition:{}` glosses that bound each concept and instruct contributors — as the complement to review #114's `label:{}` pass. My standing references for this pass: 明鏡国語辞典 and 大辞林 for Japanese adverb/lemma senses (decisive on よく vs うまく as the adverb of 良い); 現代漢語詞典 for the Chinese gloss layer; Duden (Die deutsche Rechtschreibung; Duden-Grammatik §§ on *kein* vs *nicht ein*) for German negation idiom; Gray's/Terminologia Anatomica plus 解剖学用語 for the hand-vs-forearm-vs-upper-limb distinction; Từ điển tiếng Việt (Hoàng Phê) for Vietnamese morphological vocabulary (gốc từ / căn tố vs căn); and the IAU's English nomenclature for the Sun. Method: I first extracted all 20 `definition:{}` blocks verbatim with line numbers, confirmed the UI key-set is the uniform 23-locale column (`en ja ko zh yue vi th id hi de fr it es es_eu es_mx pt pt_eu pt_br ru uk ar he sw`), re-read `docs/words/CONTRIBUTING.md` and `docs/words/LANG_CODES.md`, and grepped every candidate against `wordmap_reviews/*_closed.md` so as not to re-litigate adjudicated cells. Review #114 fixed label/definition contradictions and several he/sw garbles (sun `日`, good he היטב, hand sw fundo, etc.); review #116 audited POS/citation forms in the data rows. None of the survivors below overlaps those. Each is checked against the file's own sibling locales — the strongest signal being a translation that breaks the uniformity its 22 siblings hold.

---

## Issues found

### 1. en — cat — Master `en` gloss drops `(Felis catus)` and `wordEvidence.note` that all 22 sibling locales carry
- **File:** words/cat.js line 32
- **Current:** `en: "Generic domestic cat; use the normal generic/citation form for that language, and note gender if it matters."`
- **Expected:** `en: "Generic domestic cat (Felis catus); use the normal generic/citation form for that language, and note gender (in wordEvidence.note) if it matters."`
- **Why:** Two source-side omissions in the canonical `en` gloss. (a) Every other locale states the binomial `(Felis catus)` — ja line 33 `一般的な家猫 (Felis catus)`, ko 34, zh 35, … sw 54 — exactly as the sibling concept dog gives `(Canis familiaris)` in its `en` (dog.js line 32). cat's `en` is the lone column with no binomial. (b) Each translation names the mechanism `wordEvidence.note` for recording gender (ja 33 `wordEvidence.note に記録`, ko 34, zh 35, etc.), but the `en` says only "note gender if it matters" without naming the field. Since `en` is the source the translations are made from, both elements should originate here; the data drifted because translators added detail the master lacks.

---

### 2. ja — hand — `前腕の末端部` ("distal part of the **forearm**") is an anatomical mismatch with `en` "distal upper limb"
- **File:** words/hand.js line 33
- **Current:** `ja: "手（前腕の末端部）。「腕」ではない。手と腕を区別しない言語もある。"`
- **Expected:** `ja: "手（上肢の末端部）。「腕」ではない。手と腕を区別しない言語もある。"`
- **Why:** The `en` original (line 32) is "Hand (distal upper limb)" and zh mirrors it exactly: `手（上肢末端）` (line 35); vi has `đầu xa của chi trên` = "distal end of the upper limb" (line 37). Anatomically the hand (手) is distal **to** the forearm (前腕), i.e. the distal segment of the upper limb (上肢), not "the distal part of the forearm" — 前腕 ends at the wrist and does not contain the hand (解剖学用語: 上肢 = upper limb ⊃ 上腕/前腕/手). The ja gloss is the only locale naming 前腕; it should read 上肢 to match en/zh/vi and basic anatomy.

---

### 3. zh — good — Adverb example left as the bare English token `"well"` instead of a Chinese gloss
- **File:** words/good.js line 35
- **Current:** `zh: "基本形容词\"好\"（正面属性）；优先使用定语词典形式。避免副词\"well\"(如 ru хорошо / uk добре) 和问候应答形式。"`
- **Expected:** `zh: "基本形容词\"好\"（正面属性）；优先使用定语词典形式。避免副词\"好（地）\"(如 ru хорошо / uk добре) 和问候应答形式。"`
- **Why:** Every other locale translates the en "avoid adverb \"well\"" into its own metalanguage gloss of the adverb: ja `副詞「うまく」` (line 33), ko `부사 "잘"` (34), yue `副詞「好咁」` (36). Only the Chinese leaves the raw English word `"well"` embedded in the sentence, which is exactly the untranslated-token defect the gloss layer is supposed to avoid; a Chinese reader gets no adverb example. Replace with the Mandarin adverbial (好/好地), keeping the хорошо/добре pair.

---

### 4. ja — good — `うまく` glosses "skillfully", not the adverb "well" that is the adverb of 良い
- **File:** words/good.js line 33
- **Current:** `ja: "基本形容詞「良い」（肯定的属性）。連体辞書形を優先。副詞「うまく」(例: ru хорошо / uk добре) や挨拶返答は避ける。"`
- **Expected:** `ja: "基本形容詞「良い」（肯定的属性）。連体辞書形を優先。副詞「よく」(例: ru хорошо / uk добре) や挨拶返答は避ける。"`
- **Why:** The en (line 32) tells editors to avoid "adverb \"well\" (e.g. ru хорошо / uk добре)". The adverbial form of the adjective 良い/いい is **よく** (明鏡・大辞林 s.v. よく: 良いの連用形・副詞用法), which is precisely the Russian/Ukrainian *хорошо/добре* the example pair cites. **うまく** is the adverb of 旨い/上手い "skillful/tasty" — a different lexeme meaning "skillfully, deftly", not "well = in a good manner". The Korean sibling correctly uses `잘` (line 34, the adverb of 좋다); ja should be よく for parity.

---

### 5. de — thanks — Stray space inside the compound `liturgisches/ Dank-Substantiv`
- **File:** words/thanks.js line 41
- **Current:** `de: "Mündliche Dankesformel für moderne Sprachen. Bei historischen Sprachen \"—\" oder ein klar belegtes liturgisches/ Dank-Substantiv — nichts erfinden."`
- **Expected:** `de: "Mündliche Dankesformel für moderne Sprachen. Bei historischen Sprachen \"—\" oder ein klar belegtes liturgisches/Dank-Substantiv — nichts erfinden."`
- **Why:** German slash-coordination of attributive adjectives sharing a head noun is written solid: `liturgisches/Dank-Substantiv`, parallel to the other slash pairs in the same block (es `gratitud/litúrgico`, fr `gratitude/liturgique`, pt `gratidão/litúrgico` — all closed up). The lone space after the slash (`liturgisches/ Dank-`) is a typo and also produces an ungrammatical floating fragment; close it up.

---

### 6. de — water — `nicht ein Gewässer` should be the idiomatic negation `kein Gewässer`
- **File:** words/water.js line 41
- **Current:** `de: "Trinkbares Wasser (H₂O); nicht ein Gewässer wie Fluss oder See."`
- **Expected:** `de: "Trinkbares Wasser (H₂O); kein Gewässer wie Fluss oder See."`
- **Why:** Standard German negates an indefinite-article noun phrase with **kein**, not **nicht ein** (Duden-Grammatik, Negation: "Vor einem Substantiv mit unbestimmtem Artikel steht *kein*"). `nicht ein Gewässer` is contrastive-emphatic ("not *one* body of water") and reads as an error here, where plain exclusion ("not a body of water") is meant — cf. the parallel ru `не водоём` and uk `не водойма`, which are bare negated nouns. The de moon gloss already uses the clean form `nicht der Kalendermonat` (moon.js line 41). (Related: tree.js line 41 `nicht eine bestimmte Baumart` has the same marked pattern and reads better as `keine bestimmte Baumart`.)

---

### 7. en — sun — Names the Sun "Sol", a Latin/astronomical designation no translation mirrors
- **File:** words/sun.js line 32
- **Current:** `en: "The star Sol seen from Earth; \"the sun in the sky\"."`
- **Expected:** `en: "The Sun (our star) seen from Earth; \"the sun in the sky\"."`
- **Why:** "Sol" is the Latin name and an informal/astronomical designation; the IAU's and ordinary English name for the body is "the Sun". No sibling locale renders "Sol": ja `恒星としての太陽` (line 33, "the Sun as a fixed star"), ko `항성으로서의 해` (34), zh `太阳` (35), de `Die Sonne` (41), fr `Le Soleil` (42). Since the gloss already says "the sun in the sky", introducing the niche name "Sol" only in the master `en` is an inconsistency and mildly misleading; "the Sun (our star)" preserves the "it is a star" point every translation carries without the Latinism.

---

### 8. vi — love — `căn cơ bản` is not the Vietnamese term for "root (word)"; en is "word/root"
- **File:** words/love.js line 37
- **Current:** `vi: "Từ/căn cơ bản chỉ tình yêu; danh từ hoặc động từ tuỳ ngôn ngữ; không phải lời chào."`
- **Expected:** `vi: "Từ/gốc cơ bản chỉ tình yêu hoặc tình cảm; danh từ hoặc động từ tuỳ ngôn ngữ; không phải lời chào."`
- **Why:** The en (line 32) is "Basic word/root for love or affection". Vietnamese for the linguistic "root/stem" of a word is **gốc (từ)** / **căn tố**, not bare **căn** (Hoàng Phê s.v. *căn*: chiefly "căn nhà / căn cứ / căn bản" — not "morphological root"); `căn cơ bản` parses as "fundamental basis", losing the "word-root" sense. Compare the clean sibling heart.js line 37 `từ cơ bản chỉ "tim/lòng"`. Secondary: vi also drops the "affection" half of "love or affection" (en, and ja `愛・愛情`, de `Liebe oder Zuneigung`) — restore `hoặc tình cảm` for parity.

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

## Worker round-1 response (作業者round-1)

All eight findings are clear editorial fixes in the `definition:{}` blocks, well-supported by the file's own sibling locales and the cited references.

- **146-1 en cat**: APPLIED (applied by orchestrator this round). Restores `(Felis catus)` and names the `wordEvidence.note` field, matching all 22 sibling locales and the dog `(Canis familiaris)` parallel.
- **146-2 ja hand 前腕→上肢**: APPLIED (applied by orchestrator this round). 手 is the distal segment of the upper limb (上肢), not the forearm (前腕); matches en "distal upper limb", zh `上肢末端`, vi.
- **146-3 zh good untranslated `"well"`→`好（地）`**: APPLIED (applied by orchestrator this round). Replaces the raw English token with the Mandarin adverbial gloss; siblings ja/ko/yue all gloss the adverb in their own metalanguage.
- **146-4 ja good うまく→よく**: APPLIED (applied by orchestrator this round). よく is the adverb of 良い/いい (= ru хорошо/uk добре); うまく is the adverb of 上手い "skillfully". Matches ko `잘`.
- **146-5 de thanks `liturgisches/ Dank-`→`liturgisches/Dank-`**: APPLIED (applied by orchestrator this round). Closes the stray space; German slash-coordination is written solid (cf. es/fr/pt siblings).
- **146-6 de water `nicht ein Gewässer`→`kein Gewässer`**: APPLIED (applied by orchestrator this round). Idiomatic negation of an indefinite NP (Duden); matches de moon `nicht der Kalendermonat` clean form and ru/uk bare negation. (Note: reviewer's secondary tree.js `nicht eine bestimmte Baumart` observation was outside this finding's file/field and is not changed here; recommend a separate finding if desired.)
- **146-7 en sun `Sol`→`The Sun (our star)`**: APPLIED (applied by orchestrator this round). Drops the Latin/astronomical name no sibling mirrors; preserves the "it is a star" point.
- **146-8 vi love `căn cơ bản`→`gốc cơ bản … hoặc tình cảm`**: APPLIED (applied by orchestrator this round). gốc (từ) is the Vietnamese term for word-root; also restores the "affection" half (hoặc tình cảm) for parity with en/ja/de.

## Reviewer round-2 response (再評価 round-2)

I re-verified all eight applied fixes against the LIVE data in `words/*.js` (line-by-line via sed). Every claimed fix is actually present in the data — no phantom "applied" claims this round.

- **146-1 en cat** — ✓ ACCEPT. words/cat.js:32 now reads `Generic domestic cat (Felis catus); … note gender (in wordEvidence.note) if it matters.` Binomial restored and field named; matches the 22 siblings and the dog `(Canis familiaris)` parallel.
- **146-2 ja hand** — ✓ ACCEPT. words/hand.js:33 now `手（上肢の末端部）`. Anatomically correct (手 = distal segment of 上肢, not 前腕); matches en "distal upper limb" / zh `上肢末端` / vi.
- **146-3 zh good** — ✓ ACCEPT. words/good.js:35 now `避免副词"好（地）"` — raw English token `"well"` removed, Mandarin adverbial gloss in place; хорошо/добре pair retained.
- **146-4 ja good** — ✓ ACCEPT. words/good.js:33 now `副詞「よく」`. よく is the 連用形/adverb of 良い (= ru хорошо/uk добре); うまく (上手い "skillfully") correctly removed. Parity with ko `잘`.
- **146-5 de thanks** — ✓ ACCEPT. words/thanks.js:41 now `liturgisches/Dank-Substantiv` (stray space gone). Solid slash-coordination as in es/fr/pt siblings.
- **146-6 de water** — ✓ ACCEPT. words/water.js:41 now `kein Gewässer wie Fluss oder See.` Idiomatic kein-negation of indefinite NP (Duden); matches moon's clean form and ru/uk bare negation. The reviewer's secondary tree.js `nicht eine bestimmte Baumart` note was explicitly out of scope for this finding's file/field; I am NOT keeping the file open on it — if desired it should be raised as its own finding against words/tree.js, not blocked here.
- **146-7 en sun** — ✓ ACCEPT. words/sun.js:32 now `The Sun (our star) seen from Earth; …`. Latinism "Sol" dropped; the "it is a star" point preserved; no sibling mirrored "Sol".
- **146-8 vi love** — ✓ ACCEPT. words/love.js:37 now `Từ/gốc cơ bản chỉ tình yêu hoặc tình cảm; …`. gốc (từ) is the correct VN word-root term; "affection" half (hoặc tình cảm) restored for parity with en/ja/de.

### New issues
None. During verification of the surrounding cells I found no new defensible errors.

### Scorecard
| Item | Verdict |
|------|---------|
| 146-1 en cat | ✓ |
| 146-2 ja hand | ✓ |
| 146-3 zh good | ✓ |
| 146-4 ja good | ✓ |
| 146-5 de thanks | ✓ |
| 146-6 de water | ✓ |
| 146-7 en sun | ✓ |
| 146-8 vi love | ✓ |

8/8 accepted and verified in live data. No open items, no new actionable issues.

**File status: CLOSED** — nothing left to address.
