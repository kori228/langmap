# Wordmap Review #98 — Hebrew + Yiddish + Jewish Languages Audit

**Scope:** he (Modern Hebrew), hbo (Biblical Hebrew), yi (Yiddish), lad (Ladino / Judaeo-Spanish), and incidentally jpr (Judeo-Persian) + he_mis (Mishnaic Hebrew), across all 20 words in `/home/jounlai/langmap/words/`.

**Codes actually present in `words/*.js`:** `he`, `hbo`, `yi`, `lad`, plus the related `jpr` (Judeo-Persian) and `he_mis` (Mishnaic Hebrew).
**Codes asked about but NOT present:** `jbe` (Judeo-Berber) — not in the dataset; `jdt` (Judeo-Tat / Juhuri) — not in the dataset. No findings can be written about them; they simply don't exist here. If desired, they would need to be added separately.

**Status:** OPEN

---

## Findings

### Modern Hebrew (he) — orthography, register, stress

1. **`father` — he `אבא` / `aba` is the colloquial vocative, not the dictionary lemma.**
   `/home/jounlai/langmap/words/father.js:104`
   `אבא` is the affectionate/childhood form ("dad"). The neutral citation form is `אב` (`av`). All other `he` words in this dataset are dictionary lemmas (e.g. `אם` would parallel `אב`), and even within this file the Mishnaic and Biblical entries use the bare lemma `אב`. The Hebrew comment at line 53 ("אב — צורת מילון/ניטרלית") explicitly says "av — dictionary / neutral form," yet the entry is `אבא`. Inconsistent with the documented policy and with `mother`.

2. **`mother` — he `אמא` / `ima` has the same mismatch as `father`.**
   `/home/jounlai/langmap/words/mother.js:104`
   `אמא` is colloquial. Dictionary lemma is `אם` (`em`) — which is exactly what `he_mis` and `hbo` use in the same file. Pick one policy: either both `אבא/אמא` (colloquial, with note) or both `אב/אם` (dictionary). The current state is inconsistent across the two parent words.

3. **`eat` — he transcription `leχol` likely missing a vowel.**
   `/home/jounlai/langmap/words/eat.js:104`
   `לאכול` in Modern Hebrew is normatively `/lex̱ˈol/` ~ `/leʔeˈxol/`, often `[leˈxol]` in fast speech. `leχol` is defensible but inconsistent with the segolate/full-vowel style used elsewhere (`liʃtot`, `eχad` show stressed syllables clearly). Either accept the colloquial cluster or write `leʔeχol` / mark stress.

4. **`moon` — he `ירח` transcription mixes Latin /j/ with the IPA voiceless fricative /χ/.**
   `/home/jounlai/langmap/words/moon.js:104`
   `jaɾeaχ` uses tap `ɾ` (good for Modern Hebrew) but the final /χ/ should arguably be /aχ/ with the patach-genuvah audible: standard Modern Hebrew has `/jaˈʁeaχ/` with uvular /ʁ/, not tap /ɾ/. Compare with `father.js:104` which uses no rhotic at all. If the corpus convention is alveolar tap for /r/, that's a defensible style choice — but then it should be applied uniformly (e.g. `kelev` doesn't expose this). Flag for consistency review.

5. **`heart` — he `לב` / `lev` is fine but lacks the stressed-vowel cue used elsewhere.**
   `/home/jounlai/langmap/words/heart.js:104`
   Low priority. `/ˈlev/` is monosyllabic so stress is trivial, but the audit asked about Biblical vs Modern stress and this entry is identical to `hbo` `leːv` minus length, so it works.

6. **`tree` — he `עץ` / `et͡s` correctly drops the historical /ʕ/.**
   `/home/jounlai/langmap/words/tree.js:104`
   Good. This confirms the Modern/Biblical split is being honored: `hbo` keeps `ʕeːsˤ`, `he` reduces to `et͡s`. No change needed; cited as a positive control.

---

### Biblical Hebrew (hbo) — Tiberian reconstruction accuracy

7. **`drink` — hbo `שתה` / `ʃaːtaː` is the perfect 3msg "he drank," not the lemma.**
   `/home/jounlai/langmap/words/drink.js:954`
   Biblical Hebrew lemmas are traditionally cited as either (a) the bare root `שׁתה` (just consonants, gloss "root") or (b) the qal qatal 3msg as a stand-in. The current `ʃaːtaː` is form (b), which is fine — but it should be `ʃɔːθɔː` in Tiberian (qamats = /ɔː/, post-vocalic ת spirantizes to /θ/). Compare with `thanks.js:954` `toːðaː` which correctly spirantizes /d/→/ð/. Inconsistent treatment of ת spirantization across the same word category. Either drop spirantization marking throughout or apply it everywhere.

8. **`eat` — hbo `אכל` / `ʔaːkal` — same lemma/inflection ambiguity, and /k/ should spirantize.**
   `/home/jounlai/langmap/words/eat.js:947`
   `ʔaːkal` ("he ate") has post-vocalic כ that in Tiberian spirantizes to /x/: expected `ʔɔːxal`. The qamats `ɔː` is also missing (rendered as `aː`). If the convention is Sephardi/Israeli-reading pronunciation (i.e. no spirantization, no qamats distinction), then `hbo` is functionally just transliterated Modern, which defeats its purpose. Decide and document.

9. **`love` — hbo `אהב` / `ʔaːhav` is correct as a root citation but disagrees with `he_mis` form.**
   `/home/jounlai/langmap/words/love.js:954-955`
   `hbo` gives root verb `אהב` (`ʔaːhav`); `he_mis` gives noun `אהבה` (`ʔɑhɑvɑ`). Cross-language consistency: Modern `he` uses the noun `אהבה`, Mishnaic uses the noun `אהבה`, but Biblical uses the verb root. The "love" word category in this corpus seems to be a noun for most languages; consider switching `hbo` to `אַהֲבָה` (Tiberian `ʔahăḇɔ̄`) to match part-of-speech.

10. **`hello` — hbo `שלום` / `ʃaːloːm` is etymologically fine but pragmatically anachronistic.**
    `/home/jounlai/langmap/words/hello.js:947`
    In the Tanakh, `שלום` is a noun ("peace, well-being") or a greeting formula ("ha-shalom lekha?"), not a standalone "hello" interjection — that usage is Modern. Per the Hebrew note at line 53 (`בשפות היסטוריות — "—" או שם עצם תודתי/ליטורגי מתועד; אין להמציא`), historical languages should either show `—` or a documented ritual greeting. `שלום` is the documented Biblical greeting noun, so this is defensible — but consider adding a `wordEvidence.note` clarifying it's the noun, not the interjection.

11. **`thanks` — hbo `תודה` / `toːðaː` is the "thank-offering," not "thanks."**
    `/home/jounlai/langmap/words/thanks.js:954`
    In Biblical Hebrew, `תּוֹדָה` means a thanksgiving sacrifice/praise (Lev 7:12, Ps 100), not a casual "thanks" interjection — that sense is Modern. Same comment style policy: either keep with a clarifying note, or use `—`. Currently no `wordEvidence.note` is attached.

12. **`cat` — hbo `—` is correct; no Biblical word for domestic cat.**
    `/home/jounlai/langmap/words/cat.js:954`
    Good. Cats are absent from the Tanakh (mentioned only in apocryphal Baruch). Positive control — keep as is.

13. **`house` — hbo `בית` / `bajit` should be `bajiθ` (or `bayiṯ`) with spirantization.**
    `/home/jounlai/langmap/words/house.js:961`
    Word-final post-vocalic ת in Tiberian Hebrew spirantizes to /θ/ ("bayiṯ"). The corpus does mark spirantization on `father` (`ʔaːv`), `thanks` (`toːðaː`), `tree` (`ʕeːsˤ`), but not on `house` or `eat`. Inconsistent.

14. **`mother` — hbo `אם` / `ʔeːm` — vowel length is contestable.**
    `/home/jounlai/langmap/words/mother.js:960`
    Tiberian `אֵם` is `ʔēm` with tsere = /eː/, so `ʔeːm` is correct. Good. Cite as positive control.

---

### Yiddish (yi) — YIVO orthography and diacritics

15. **`hello` — yi `שלום עליכם` missing YIVO hyphen and stress is questionable.**
    `/home/jounlai/langmap/words/hello.js:293`
    YIVO standard orthography writes the greeting with a `מקף` (mahkef hyphen): `שלום־עליכם`. The current entry uses a regular space. Additionally, transcription `ʃoləm aleɪxəm` uses [eɪ] for the second word's stressed vowel — that's Litvish/Standard YIVO and OK, but the first vowel of `aleykhem` is unstressed and should be schwa or `a`, with stress on `LEY` — fine as written; just confirm the hyphen.

16. **`fire` — yi `פֿײַער` uses pasekh-tsvey-yudn correctly; rafe on פֿ is preserved.**
    `/home/jounlai/langmap/words/fire.js:299`
    Excellent — both YIVO diacritics (rafe on פ to mark /f/ vs /p/, and pasekh-tsvey-yudn ײַ for /aj/) are present. Positive control.

17. **`moon` — yi `לבֿנה` / `ləvɔnə` — rafe on בֿ is correct, but consider native `moyn` alternative.**
    `/home/jounlai/langmap/words/moon.js:299`
    `לבֿנה` ("levone") is the standard daytime word for moon in Yiddish, borrowed from Hebrew with rafe-vet for /v/. Correct YIVO. (A purely Germanic alternative `moyn` exists historically but is rare.) Keep.

18. **`dog` — yi `הונט` / `hʊnt` — vowel quality.**
    `/home/jounlai/langmap/words/dog.js:293`
    YIVO transcription is usually `hunt` with `/u/`, not `/ʊ/`. The Yiddish `vov` in stressed open/closed syllables is generally `/u/` (close back rounded). Some Litvish varieties have laxing to `[ʊ]`, but the standard YIVO IPA is `/u/`. Compare `good.js:293` `gut` → `/ɡʊt/` — same issue. Decide on tense/lax `/u/` vs `/ʊ/` and apply consistently.

19. **`thanks` — yi `אַ דאַנק` / `a daŋk` — velar nasal /ŋ/ before /k/ is reasonable, but the standard transcription is `a dank`.**
    `/home/jounlai/langmap/words/thanks.js:293`
    YIVO romanization is `a dank`; the IPA `[aŋk]` is phonetically accurate (assimilation before velar) and `[ank]` is the phonemic form. Either is OK; just note the convention. Pasekh-alef on `אַ` and `דאַנק` is correctly used.

20. **`mother`/`father` — yi `מאַמע` / `טאַטע` correctly use pasekh-alef for the open `/a/`.**
    `/home/jounlai/langmap/mother.js:299`, `/home/jounlai/langmap/words/father.js:293`
    Both entries use the YIVO-mandated `אַ` (pasekh-alef) for word-internal `/a/`. Positive control — confirms the audit's "pasekh-alef ַא" check is satisfied for these.

---

### Ladino (lad) — Aki Yerushalayim orthography vs. older spellings

21. **`dog` — lad `perro` / `pero` mixes Aki-Yerushalayim spelling with merged-trill pronunciation.**
    `/home/jounlai/langmap/words/dog.js:504`
    Modern Aki Yerushalayim orthography typically writes single `r` since Ladino merged `/r/` and `/rr/`. The current entry keeps Spanish-style `perro` but transcribes `/pero/` (single tap), which is internally inconsistent. Either write `pero` (Aki Yerushalayim) with `/pero/`, or keep `perro` and transcribe `/pero/` only if explicitly noting tap-trill merger. Recommend `pero` to match the rest of the lad orthography (`kaza`, `korasón`, `grasias` already use Aki Yerushalayim conventions).

22. **`heart` — lad `korasón` / `koɾason` correctly uses Aki Yerushalayim conventions.**
    `/home/jounlai/langmap/words/heart.js:504`
    `k` for /k/, `s` for /s/, acute accent on stressed ultimate. Positive control.

23. **`tree` — lad `árvol` is a great dialect-specific form (vs Spanish `árbol`).**
    `/home/jounlai/langmap/words/tree.js:504`
    Ladino preserved Old Spanish `árvol` (`v` not `b`); excellent dialect-distinguishing choice. Compare with feedback memo `feedback_dialect_vocab_differences.md`. Positive control.

24. **`hello` — lad `shalom` is a Hebrew loanword; alternative `bonjur` / `bivas` exists.**
    `/home/jounlai/langmap/words/hello.js:497`
    Ladino speakers historically used `shalom` (Hebraism) or French-derived `bonjur` (after 19th-c. Alliance Israélite schools). Either is defensible. The current `shalom` overlaps with `he`, `hbo`, `yi`, and `jpr` and provides zero contrast for the lad column. Consider switching to `bonjur` or `salud` for distinctiveness — or keep `shalom` and note the AIU-French alternative in `wordEvidence`.

25. **`eye` — lad `ojo` / `oʒo` keeps Old Spanish /ʒ/ — correct for Ladino.**
    `/home/jounlai/langmap/words/eye.js:504`
    Ladino retained medieval `/ʒ/` (lost in Castilian, which shifted to `/x/`). The transcription `/oʒo/` is the correct dialect-distinguishing feature. Positive control.

---

### Judeo-Persian (jpr) — Persian-Hebrew script convention

26. **`heart` — jpr `קלב` / `qælb` uses Arabic-origin "qalb" rather than native Persian "del."**
    `/home/jounlai/langmap/words/heart.js:107`
    Persian (and Judeo-Persian by extension) has two words: native `דל` / دل (`del`) for "heart as seat of emotion," and Arabic loan `קלב` / قلب (`qalb`) for "anatomical heart." The project default per the `he` comment ("ברירת מחדל: המילה הבסיסית ל'לב/נפש'") is the emotion-center word — which in Persian is `del`, not `qalb`. Recommend switching to `דל` / `del`. Note that this also matches the Hebrew lemma policy (basic native word).

27. **`love` — jpr `עשק` / `eʃq` Arabic-origin; native Persian `mehr` exists.**
    `/home/jounlai/langmap/words/love.js:107`
    Same pattern: `عشق` (eshq) is Arabic-origin "passionate love"; `مهر` (mehr) is native Iranian "love/affection." Both are common in Persian; `eshq` is the prototypical romantic-love noun and arguably the right choice, but worth a note.

28. **`hello` — jpr `שלום` / `ʃɒːlom` — Hebrew greeting borrowed into Judeo-Persian community use is fine.**
    `/home/jounlai/langmap/words/hello.js:107`
    Judeo-Persian speakers historically used `shalom` as the community greeting. Note that the standard Persian greeting `salām` is also from Hebrew/Arabic root and would be `סלאם`. Both defensible; current is fine.

29. **`one` — jpr `יכ` / `jek` — Persian "yek" (یک) transliterated in Hebrew script as `יכ`.**
    `/home/jounlai/langmap/words/one.js:107`
    The Hebrew-script rendering `יכ` is unusual — Judeo-Persian conventions typically write `יך` (with sofit/final kaf) or `יק` (qof for stops). `יכ` with non-final kaf at word end is non-standard. Recommend `יך` or `יק`.

---

### Cross-cutting / dataset-wide

30. **Definite article check — no `הַ` definite-article contamination found.**
    Spot-checked all 20 `he` and `hbo` entries; none lead with `ה` definite article. The audit's "definite article הַ should NOT be on citation" criterion is satisfied. Positive control.

31. **Gender — masculine citation forms used consistently for `he`/`hbo`/`he_mis`.**
    `one` (אחד, masc.) not (אחת, fem.); `good` (טוב, masc.) not (טובה). Consistent. Positive control. The Hebrew note at `one.js:53` explicitly documents this policy ("בשפות בעלות מין דקדוקי — צורת הזכר").

32. **`jbe` (Judeo-Berber) and `jdt` (Judeo-Tat / Juhuri) are entirely absent.**
    Not a finding per se, but worth recording for completeness. If these are intended to be added, they would require all the synchronized updates listed in `feedback_new_lang_checklist.md` (data, meta, lang_names in ~21 UI sections, count strings, tree.html, cache busters).

---

**File:** `/home/jounlai/langmap/wordmap_reviews/review_98_open.md`
**Finding count:** 32


---

## Dev response — round 1 (2026-06-04)

.wf_wordmap_apply.mjs 経由で適用済。

- **適用 edit**: 11
- **policy/skip**: 21
- **headline**: he moon ɾ→ʁ uvular, hbo qamats /aː/→/ɔː/ + begadkefat spirantization ×4, yi hello YIVO mahkef + dog/good u ×3, lad dog perro→pero, jpr heart qalb→del + one final kaf
- **JSON**: /tmp/wm_edits_98.json
