# Wordmap review #114 — label and definition i18n blocks auditor

## Reviewer self-introduction (ペルソナ自己紹介)

I am a UI-localization linguist (経歴: 多言語UIローカリゼーション監査 15年) specializing in cross-language consistency audits of interface strings — exactly the layer this dataset has never had reviewed: the `label:{}` and `definition:{}` blocks that translate each concept name and its editorial definition into the 23 UI languages (`en ja ko zh yue vi th id hi de fr it es es_eu es_mx pt pt_eu pt_br ru uk ar he sw`, verified identical across all 20 `words/*.js` files — the key-set audit itself came back clean). My method: every Current value below was re-grepped verbatim from the live files on 2026-06-11; every claim is checked against native-speaker reference works — 国語辞典 (大辞林/明鏡), 표준국어대사전, Từ điển tiếng Việt (Hoàng Phê), बृहत् हिन्दी कोश, Duden, DLE/DPD (RAE), Dicionário Priberam + Acordo Ortográfico de 1990, Even-Shoshan / Morfix for Hebrew, الوسيط for Arabic, and TUKI/BAKITA Kamusi ya Kiswahili Sanifu — plus internal sibling-block evidence (the strongest signal: several labels contradict their *own file's* definition text). Project docs consulted: `docs/words/CONTRIBUTING.md` (label/definition are UI strings; `label.en`/`label.ja` required), `docs/words/LANG_CODES.md`. I also grepped all `wordmap_reviews/*_closed.md`: reviews #01–100 audited only the `data:{}` rows; none of the findings below has been reported or adjudicated before.

---

## Issues found

### 1. ja — sun — Label `日` reads as "day", not "the sun"; file's own ja definition uses `太陽`
- **File:** words/sun.js line 8
- **Current:** `ja: "日"`
- **Expected:** `ja: "太陽"`
- **Why:** As a standalone UI label, 「日」 is read *hi/nichi* "day/date" by default (明鏡国語辞典 s.v. 日: first senses are 太陽の光・一昼夜・日付). The basic standalone Japanese word for the celestial body is 「太陽」. Decisive internal evidence: this file's own ja definition (line 33) is 「地球から見える恒星としての**太陽**。『空の**太陽**』」 — the definition names the concept 太陽 twice while the label says 日. Sibling evidence: zh label is `太阳` (line 10), ko is `해`. The `data.ja` row may legitimately stay 「日／ひ」 as the inherited Wago lexeme, but the *UI label* should be the unambiguous 太陽.

---

### 2. ko — hello — Label `안녕` is intimate register; the neutral UI form is `안녕하세요`
- **File:** words/hello.js line 9
- **Current:** `ko: "안녕"`
- **Expected:** `ko: "안녕하세요"`
- **Why:** 표준국어대사전 marks 안녕 (interjection) as 해라체/intimate — used to children and close friends. The concept being labelled is (en definition, line 32) a "Neutral everyday greeting"; the register-neutral Korean greeting is 안녕하세요. Sibling-label evidence: ja uses the polite-neutral `こんにちは` (line 8), not the intimate やあ; zh uses neutral `你好`. The ko label is the only one rendered in intimate register.

---

### 3. ko — thanks — Label `감사` is a bare Sino-Korean noun, not a thank-you formula
- **File:** words/thanks.js line 9
- **Current:** `ko: "감사"`
- **Expected:** `ko: "감사합니다"`
- **Why:** 감사 alone is the noun "gratitude" (표준국어대사전: 감사(感謝) 「고마움을 나타내는 인사」… used with -하다); it is not something a speaker says. The en label is the speakable formula "Thank you" (line 7), and every sibling label is likewise a speakable formula: ja `ありがとう` (line 8), de `Danke` (line 16), fr `Merci` (line 17), yue `多謝` (line 11), uk `Дякую` (line 26). The file's own ko definition (line 34) even calls the concept "구어 감사 표현" (spoken gratitude expression). `감사합니다` (or `고마워요`) is the speakable neutral form.

---

### 4. vi — father — Label `Bố` contradicts the file's own vi definition, which names `Cha` as the neutral form
- **File:** words/father.js line 12
- **Current:** `vi: "Bố"`
- **Expected:** `vi: "Cha"`
- **Why:** Internal contradiction: the vi definition in the same file (line 37) reads `"Cha — dạng trung tính/từ điển; chính sách giống \"mẹ\"."` — i.e. it declares **Cha** to be the neutral/dictionary form, while the label says **Bố**. Hoàng Phê's Từ điển tiếng Việt confirms *cha* is the neutral/dictionary headword; *bố* is the Northern colloquial "dad". The en definition (line 32) explicitly requires the "neutral/citation form". (The mother file is internally consistent: label `Mẹ` line 12 = definition's `Mẹ` line 37.)

---

### 5. hi — mother — Label `माँ` contradicts the file's own hi definition (`माता`) and the sibling father label (`पिता`)
- **File:** words/mother.js line 15
- **Current:** `hi: "माँ"`
- **Expected:** `hi: "माता"`
- **Why:** Double inconsistency. (a) The same file's hi definition (line 40) reads `"माता का तटस्थ/शब्दकोश रूप; ..."` — it names **माता** as the neutral/dictionary form being defined, while the label uses the affectionate **माँ** ("mum"). (b) Cross-file: father.js uses the formal/neutral `hi: "पिता"` (line 15), not informal पापा/बाप, so mother/father labels are at mismatched registers. बृहत् हिन्दी कोश gives माता as the tatsama citation form parallel to पिता. Either both files go formal (माता/पिता — recommended, matching the "neutral/citation form" policy of en line 32) or both informal; currently they split.

---

### 6. pt_br — dog — Label `Cão` contradicts the file's own pt_br definition, which uses `Cachorro`
- **File:** words/dog.js line 24
- **Current:** `pt_br: "Cão"`
- **Expected:** `pt_br: "Cachorro"`
- **Why:** Internal contradiction: the pt_br definition in the same file (line 49) was deliberately regionalized to `"Cachorro doméstico (Canis familiaris); ..."` — differing from pt/pt_eu's `"Cão doméstico ..."` (lines 47–48) — because *cachorro* is the everyday generic word for "dog" in Brazil (Priberam/Michaelis: in Brazil *cachorro* = cão; in Portugal *cachorro* = puppy). The label block missed the same split: `pt: "Cão"` / `pt_eu: "Cão"` / `pt_br: "Cão"` (lines 22–24). The whole point of carrying separate `pt_br` keys (cf. fire.js definitions es/es_eu/es_mx regionalizing cerilla/cerillo, lines 44–46) is to localize exactly this; the pt_br label should be `Cachorro`.

---

### 7. ar — good — Definition cites Persian `خوب` as the example adverb instead of Russian `хорошо`
- **File:** words/good.js line 52
- **Current:** `ar: "صفة أساسية \"جيد\" (صفة إيجابية)؛ تُفضَّل صيغة الصفة المعجمية. تجنّب الظرف (مثل خوب/добре) وردود التحية."`
- **Expected:** `ar: "... تجنّب الظرف (مثل хорошо/добре) وردود التحية."`
- **Why:** The English original (line 32) gives the example pair "(e.g. ru хорошо / uk добре)", and every other translation preserves exactly `хорошо / добре` (ja line 33, de line 41, fr line 42, es line 44, sw line 54 …). Only the Arabic swapped in **خوب** — which is the *Persian* adjective "good" (fa data, good.js), not the Russian adverb хорошо. A Persian word has no business in an example about Russian/Ukrainian adverbs; this looks like contamination from the fa data row. Restore the хорошо/добре pair (or use Arabic-internal examples), keeping добре as is.

---

### 8. he — good — Adverb example `"טוב מאוד"` means "very good", not the adverb "well"
- **File:** words/good.js line 53
- **Current:** `he: "שם תואר בסיסי \"טוב\" (איכות חיובית); מועדפת צורת הציון/המילון. להימנע מצורת תואר הפועל (\"טוב מאוד\") ומתשובות לברכה."`
- **Expected:** `he: "... להימנע מצורת תואר הפועל (\"היטב\") ומתשובות לברכה."`
- **Why:** The clause says "avoid the adverb form" but then exemplifies it with **טוב מאוד** = "very good", which is an intensified *adjective phrase*, not an adverb. The Hebrew adverb corresponding to en "well" (the thing the en original at line 32 says to avoid) is **היטב** (Even-Shoshan s.v. היטב: תואר־פועל). As written, the Hebrew instruction tells editors to avoid something that is not an adverb while leaving the actual adverb unmentioned. Secondary nit in the same line: `צורת הציון` ("the grade form") is a garbled rendering of "citation form" — should be `צורת הציטוט` or simply `צורת המילון`.

---

### 9. he — eat — `צורת ההזמנה` ("the invitation/order form") is a mistranslation of "citation form"
- **File:** words/eat.js line 53
- **Current:** `he: "הפועל \"לאכול\" — צורת ההזמנה הרגילה; חריגות מתועדות ב־wordEvidence.note."`
- **Expected:** `he: "הפועל \"לאכול\" — צורת הציטוט/המילון הרגילה; חריגות מתועדות ב־wordEvidence.note."`
- **Why:** En original (line 32): "use the language's normal dictionary/citation convention". Hebrew **הזמנה** means "invitation; order/booking" (Even-Shoshan, Morfix) — "citation (form)" in the linguistic sense is **ציטוט** (or idiomatically צורת המילון "dictionary form", as the mother/father files correctly render it: `צורת מילון/ניטרלית`, mother.js line 53, father.js line 53). "צורת ההזמנה הרגילה" tells a Hebrew reader to use "the usual booking form". Note: review_07_closed.md §(eat/he) *quoted* this very phrase as the project's policy text without flagging it — the error itself has never been reported.

---

### 10. he — house — `שעבר התלקסיקול` is not a Hebrew word (garbled "lexicalized")
- **File:** words/house.js line 53
- **Current:** `he: "בית / מעון — מילה יומיומית למקום מגורים; בכמה ניבים יכול להיות צירוף לוקטיבי (לדוגמה \"בתוך הבית\") שעבר התלקסיקול למשמעות \"בית\"."`
- **Expected:** `he: "... שעבר לקסיקליזציה למשמעות \"בית\"."`
- **Why:** **התלקסיקול** does not exist in Hebrew — it is a malformed pseudo-hitpa'el coinage. The accepted Hebrew rendering of "lexicalization/lexicalized" is the loan **לקסיקליזציה** (so: "שעבר לקסיקליזציה", lit. "underwent lexicalization"); cf. האקדמיה ללשון העברית terminology, and the en original (line 32) "has lexicalized as 'house/home'". Every other language renders this technical term correctly (it line 43 "lessicalizzato", ru line 50 "лексикализованная", uk line 51 "лексикалізованою").

---

### 11. he — hello — `ברכות הברכה` ("blessings of the blessing") is garbled doubling
- **File:** words/hello.js line 53
- **Current:** `he: "ברכת שלום יומיומית ניטרלית. ברכות לפי שעות (בוקר/ערב) רק בהיעדר צורה ניטרלית; ברכות הברכה (\"שלום\") רק אם זוהי הברכה השגרתית."`
- **Expected:** `he: "... איחולי ברכה (כגון \"שלום\") רק אם זוהי הברכה השגרתית."`
- **Why:** En original (line 32): "Blessings (e.g. \"peace\") accepted only as the normal greeting." The phrase **ברכות הברכה** is a nonsensical construct-state doubling ("the blessings of the blessing"); the intended sense "blessing-type formulas" needs e.g. **איחולי ברכה** or simply **ברכות כגון "שלום"**. The garble is especially unfortunate in Hebrew, where שלום is simultaneously the word "peace" *and* the standard greeting (line 28 label `שלום`), so this sentence — the one clause meant to disambiguate exactly that case — currently parses as word salad.

---

### 12. sw — drink — `kuoana` means "to marry each other", not "to overlap"
- **File:** words/drink.js line 54
- **Current:** `sw: "Kitenzi \"kunywa\" — sera ile ile kama \"kula\"; kunaweza kuoana na \"kula\" katika lugha za Kiirani/Kithai cha kale."`
- **Expected:** `sw: "Kitenzi \"kunywa\" — sera ile ile kama \"kula\"; linaweza kuingiliana na \"kula\" katika lugha za Kiirani/Kithai cha kale."`
- **Why:** TUKI Kamusi ya Kiswahili Sanifu s.v. **-oana**: reciprocal of -oa, "marry one another". The en original (line 32) says drink "May **overlap** with eat"; Swahili for "overlap/intermix" is **-ingiliana** (TUKI s.v. -ingiliana). As written the Swahili definition says the verb "drink" *can marry* the verb "eat" in Iranian/Old Thai. Also, the subject concord `ku-` in `kunaweza` should be the neno/kitenzi concord `li-` (`linaweza`) since the antecedent is the verb-word under discussion.

---

### 13. sw — hand — `si "fundo la mkono"` does not mean 'not "arm"'
- **File:** words/hand.js line 54
- **Current:** `sw: "Mkono (sehemu ya mbali ya kiungo cha juu); si \"fundo la mkono\". Lugha kadhaa hazitofautishi."`
- **Expected:** `sw: "Mkono (sehemu ya mbali ya kiungo cha juu); si \"mkono mzima\" (kuanzia bega). Lugha kadhaa hazitofautishi."`
- **Why:** En original (line 32): "Hand (distal upper limb); **not \"arm\"**." Swahili **fundo** = "knot; knuckle/joint" (TUKI s.v. fundo), so `fundo la mkono` means roughly "knuckle/knot of the arm" — not "arm". Swahili is itself a language where *mkono* covers both hand and arm (precisely the situation the definition's last sentence describes), so the contrast must be paraphrased, e.g. `si "mkono mzima" (kuanzia bega)` "not the whole limb (from the shoulder)". The current text excludes the wrong body part entirely.

---

### 14. sw — thanks — `Msemo wa kuthamini` means "expression of valuing/appreciating", not a thank-you formula
- **File:** words/thanks.js line 54
- **Current:** `sw: "Msemo wa kuthamini wa kunena katika lugha za kisasa. Kwa lugha za kihistoria tumia \"—\" au nomino ya shukrani/kiimani iliyotajwa; usitunge."`
- **Expected:** `sw: "Msemo wa shukrani unaonenwa katika lugha za kisasa. Kwa lugha za kihistoria tumia \"—\" au nomino ya shukrani/kiimani iliyotajwa; usitunge."`
- **Why:** TUKI s.v. **-thamini**: "to value, estimate the worth of" — an appraisal verb, not gratitude; the Swahili word for "thanks/gratitude" is **shukrani**, which the *second sentence of this very line* already uses correctly (`nomino ya shukrani`). En original (line 32): "Spoken thank-you formula". The double-`wa` chain `wa kuthamini wa kunena` is also ungrammatical stacking; "spoken" is more naturally a relative (`unaonenwa`) or simply `wa mdomo`.

---

### 15. pt / pt_eu — hello — Pre-1990 hyphenation `dia-a-dia`; pt_br in the same block already uses the AO90 form
- **File:** words/hello.js lines 47–48
- **Current:** `pt: "Saudação neutra do dia-a-dia. ..."` (line 47); `pt_eu: "Saudação neutra do dia-a-dia. ..."` (line 48)
- **Expected:** `pt: "Saudação neutra do dia a dia. ..."`; `pt_eu: "Saudação neutra do dia a dia. ..."`
- **Why:** The Acordo Ortográfico de 1990 (Base XV, in force in Portugal since 2009) removed the hyphens from this locution: **dia a dia** (Priberam: "dia a dia … Grafia anterior ao Acordo Ortográfico de 1990: dia-a-dia"). Internal inconsistency clincher: the very next line in the same block, `pt_br` (line 49), already reads `"Saudação neutra do dia a dia. ..."` — so the three Portuguese variants currently disagree on an orthography point that post-AO90 is identical in all of them. All other pt/pt_eu strings in the corpus correctly follow modern European norms (e.g. fire.js line 47 `fenómeno`, heart.js line 47 `registar`), so these two are isolated pre-reform relics.

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

## Worker round-1 response (作業者round-1)

All 15 findings verified verbatim against the live files. Issues 1–6 are label↔definition (or label↔sibling-label) internal contradictions; 7–15 are dictionary-confirmed mistranslations / non-words / an AO90 normalization. All applied.

- **114-1** ja sun — label `日` (reads "day") → `太陽`; the file's own ja definition (line 33) names 太陽 twice; zh label is 太阳. data.ja untouched. Applied (applied by orchestrator this round).
- **114-2** ko hello — label `안녕` (intimate 해라체) → `안녕하세요` (register-neutral), matching the en "neutral" definition and neutral siblings (ja こんにちは, zh 你好). Applied.
- **114-3** ko thanks — label `감사` (bare noun) → `감사합니다` (speakable formula), matching en "Thank you" and siblings ありがとう/Danke/Merci. Applied.
- **114-4** vi father — label `Bố` (Northern colloquial) → `Cha`; the file's own vi definition (line 37) declares Cha the neutral/dictionary form. Applied.
- **114-5** hi mother — label `माँ` ("mum") → `माता`; file's own hi definition (line 40) names माता as the neutral/dictionary form, and father.js uses formal पिता. Applied.
- **114-6** pt_br dog — label `Cão` → `Cachorro`; the file's own pt_br definition (line 49) was deliberately regionalized to Cachorro (vs pt/pt_eu Cão). pt and pt_eu labels left as Cão. Applied.
- **114-7** ar good — definition example `خوب` (Persian "good", fa-data contamination) → `хорошо`, restoring the Russian/Ukrainian adverb pair the en original and every other translation carry (хорошо/добре). добре kept. Applied.
- **114-8** he good — two fixes: adverb example `"טוב מאוד"` ("very good", an adj phrase) → `"היטב"` (Even-Shoshan: תואר־פועל = adverb "well"); and garbled `צורת הציון/המילון` → `צורת המילון` ("citation/dictionary form"). Applied.
- **114-9** he eat — `צורת ההזמנה` ("the booking/order form") → `צורת הציטוט/המילון`, the correct rendering of en "dictionary/citation convention" (cf. mother/father he `צורת מילון`). Applied.
- **114-10** he house — non-word `התלקסיקול` → `לקסיקליזציה` (accepted loan for "lexicalization"; cf. it "lessicalizzato", ru "лексикализованная"). Applied.
- **114-11** he hello — garbled construct-doubling `ברכות הברכה` ("blessings of the blessing") → `איחולי ברכה`, the intended "blessing-type formulas" (en: "Blessings (e.g. peace)"). Applied.
- **114-12** sw drink — `kuoana` ("marry one another", TUKI -oana) → `kuingiliana` ("overlap/intermix", TUKI -ingiliana), matching en "May overlap with eat"; and concord `kunaweza` → `linaweza` (li- for the kitenzi antecedent). Applied (both in one edit).
- **114-13** sw hand — `fundo la mkono` ("knuckle/knot of the arm", TUKI fundo = knot/knuckle) → `mkono mzima" (kuanzia bega)` ("the whole limb, from the shoulder"), correctly paraphrasing en "not arm" for a language where mkono = hand+arm. Applied.
- **114-14** sw thanks — `Msemo wa kuthamini wa kunena` ("expression of appraising", TUKI -thamini = to value; plus ungrammatical double-wa) → `Msemo wa shukrani unaonenwa` (shukrani = gratitude, already used correctly later in the same line). Applied.
- **114-15** pt/pt_eu hello — pre-1990 `dia-a-dia` → `dia a dia` (AO90 Base XV; Priberam confirms); pt_br in the same block (line 49) already uses the reformed form. Applied (both pt and pt_eu lines).

Open/held: none — all 15 applied.

## Reviewer round-2 response (再評価 round-2)

I re-grepped all 15 target lines verbatim from the live `words/*.js` files on 2026-06-11. Every claimed fix is present and correct in live data — no phantom "applied" claims this round.

Per-item verification (live values quoted):

- **114-1** ✓ `words/sun.js:8` now `ja: "太陽"` (was 日). Consistent with own ja def line 33 (太陽) and zh 太阳. `data.ja` line 57 still `["日","hi"]` as intended.
- **114-2** ✓ `words/hello.js:9` `ko: "안녕하세요"` (register-neutral), matching neutral siblings.
- **114-3** ✓ `words/thanks.js:9` `ko: "감사합니다"` (speakable formula); def line 34 still "구어 감사 표현".
- **114-4** ✓ `words/father.js:12` `vi: "Cha"`, now matching the file's own vi definition.
- **114-5** ✓ `words/mother.js:15` `hi: "माता"`, matching own hi def and father.js पिता.
- **114-6** ✓ `words/dog.js:24` `pt_br: "Cachorro"`; pt/pt_eu correctly kept `Cão` (lines 22–23), now mirroring the def-block split (47–49).
- **114-7** ✓ `words/good.js:52` Arabic example now `хорошо/добре`; Persian خوب removed.
- **114-8** ✓ `words/good.js:53` `"היטב"` for the adverb example and `צורת המילון` for citation form.
- **114-9** ✓ `words/eat.js:53` `צורת הציטוט/המילון` (booking-form garble gone).
- **114-10** ✓ `words/house.js:53` `שעבר לקסיקליזציה` (non-word התלקסיקול gone).
- **114-11** ✓ `words/hello.js:53` `איחולי ברכה` (construct-doubling ברכות הברכה gone).
- **114-12** ✓ `words/drink.js:54` `linaweza kuingiliana` (kuoana="marry" and concord both fixed).
- **114-13** ✓ `words/hand.js:54` `si "mkono mzima" (kuanzia bega)` (fundo="knot" gone).
- **114-14** ✓ `words/thanks.js:54` `Msemo wa shukrani unaonenwa` (kuthamini="appraise" and double-wa fixed).
- **114-15** ✓ `words/hello.js:47–48` both pt and pt_eu now `dia a dia` (AO90), matching pt_br line 49.

New issues raised this round: 0. Spot-checked surrounding label/definition lines in each touched file (e.g. dog pt-block, good ar/he full lines, hello pt-block) for collateral damage; none found, key-sets and quoting intact.

Scorecard: 15 accepted (✓), 0 partial, 0 rejected, 0 new. All clear errors fixed and verified in live data; nothing left for the dev team.

**File status: CLOSED** — nothing left to address.
