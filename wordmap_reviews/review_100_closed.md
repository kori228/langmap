# Wordmap Review #100 — Ancient Indo-European audit

Scope: la, grc / el_grc (no bare "grc" key found — only `el_grc` is used), sa, pi, ang, enm, got, non, goh, gmh, peo, ave, hit, xto, txb, ine across 20 words.
Languages **not present** in any words/*.js entries checked: `grc` (bare), `pcl`/Pali bare-name variants beyond `pi`/`pi_edu`. Languages confirmed present: la, el_grc, sa, sa_edu, pi, pi_edu, ang, enm, got, non, goh, gmh, peo, ave, hit, xto, txb, ine, plus related lemmata cu (OCS), ofs (Old Frisian), osx (Old Saxon), pal (Middle Persian), fa_clas (Classical Persian).

Files checked: cat, dog, drink, eat, eye, father, fire, good, hand, heart, hello, house, love, moon, mother, one, sun, thanks, tree, water (in `/home/jounlai/langmap/words/`).

---

## Findings

### 1. PIE reconstructions — asterisks all present (PASS, with caveats)
Every `ine` entry that has content carries the leading `*` in the native field: *ḱwṓ (dog), *peh₃- (drink), *h₁ed- (eat), *h₃ékʷ- (eye), *ph₂tḗr (father), *péh₂wr̥ (fire), *h₁su- (good), *ǵʰésr̥ (hand), *ḱḗr (heart), *dṓm (house), *lewbʰ- (love), *méh₁not (moon), *méh₂tēr (mother), *Hóynos (one), *sóh₂wl̥ (sun), *dóru (tree), *wódr̥ (water). `cat`, `hello`, `thanks` correctly use `—` (no PIE reconstruction). Good baseline; specific quibbles below.

### 2. ine 'one' *Hóynos — capitalization style inconsistent with rest (FIX)
`one.js:546  ine: ["*Hóynos", "hójnos"]` — the laryngeal "H" is written as capital Latin H, but every other PIE entry writes laryngeals subscripted with index digits (h₁, h₂, h₃) on lowercase h (e.g. `*h₁ed-`, `*h₃ékʷ-`, `*péh₂wr̥`). Use either `*h₁óynos` (standard) or `*h₂óynos` per LIV²/Beekes; the bare capital H is the underspecified shorthand and clashes stylistically. IPA `hójnos` likewise should be `h₁ójnos` style — or simpler `Hóynos` without IPA value, since PIE has no fixed phonetic realization.

### 3. ine 'fire' *péh₂wr̥ vs ine 'water' *wódr̥ — heteroclitic *r/n stems inconsistent (NOTE)
Both fire and water are PIE heteroclitic *r/n* stems. Convention is the same syllabic-resonant notation (`r̥`), but the IPA-column twin uses `r̩` (combining vertical line below). Fine and intentional, but ensure all syllabic resonants use the same dual convention; `hand.js:540  ine: ["*ǵʰésr̥", "ǵʰésr̩"]` agrees, `heart.js:540  ine: ["*ḱḗr", "ḱéːr"]` does **not** mark the long ē as macron in the IPA (`ḱéːr` uses length triangular colon — that's fine for IPA but the native `ḱḗr` macron is correct).

### 4. Latin macrons — present and correct (PASS)
`la sōl` (sun), `la lūna` (moon), `la māter` (mother), `la salvē` (hello), `la fēlēs` (cat), `la ūnus` (one), `la grātiās` (thanks), `la bibere` (no long vowels), `la edere` (no long vowels). All long vowels marked. IPA columns also carry length triangular colons (`soːl`, `luːna`, `maːter`). Good.

### 5. Latin 'fire' la ignis — IPA misses palatalized /gn/ (MINOR)
`fire.js:514  la: ["ignis", "iɡnis"]` — Classical Latin /gn/ was [ŋn] (velar nasal assimilation), so [ˈɪŋnɪs] is the standard reconstructed pronunciation. Current `iɡnis` is the spelling-faithful but phonetically inaccurate form. Compare la `manus` (`manus`) which is fine.

### 6. Latin 'love' la amor — fine, but cf. heart la cor (NOTE)
`heart.js:508  la: ["cor", "kor"]` — Classical Latin cor has short /o/ before /r/; OK. Lat. amor (`love.js:515`) likewise. Consistent.

### 7. Ancient Greek pitch accents — present and well-marked (PASS)
Acute, grave, circumflex all in use: `χαῖρε` (circumflex), `πῦρ` (circumflex), `πατήρ` (acute), `μήτηρ` (acute), `καρδία` (acute), `ἀγαθός` (acute, smooth breathing), `ὀφθαλμός` (acute, smooth breathing), `ἥλιος` (acute, rough breathing), `εἷς` (circumflex, rough breathing), `ὕδωρ` (acute, rough breathing). IPA columns reproduce them as combining acute/circumflex (e.g. `pŷːr`, `kʰâire`, `hêːs`). Good.

### 8. el_grc 'hello' χαῖρε IPA — accent placement (MINOR)
`hello.js:502  el_grc: ["χαῖρε", "kʰâire"]` — the circumflex in IPA `kʰâire` is on /a/, but in Greek the circumflex sits on the second mora of the long diphthong /ai/, conventionally rendered [kʰâi̯re] or [kʰái̯ːre]. Current is acceptable shorthand but worth flagging.

### 9. el_grc 'one' εἷς — the macron-rough-breathing combo is fine (PASS, NOTE)
`one.js:515  el_grc: ["εἷς", "hêːs"]` — rough breathing + circumflex on the long ει diphthong; IPA `hêːs` correctly preserves rough breathing + circumflex + length. Good.

### 10. el_grc 'eye' ὀφθαλμός — IPA aspirate cluster (NOTE)
`eye.js:509  el_grc: ["ὀφθαλμός", "opʰtʰalmós"]` — Classical Greek φθ was [pʰtʰ]; current IPA correctly aspirates both, often rendered [optʰalmós] in conservative reconstruction (Allen) which only aspirates the second. Acceptable as is — current pan-aspiration is one defensible school.

### 11. Sanskrit Devanagari — all present (PASS)
sa for all 20 words is in Devanagari. Macrons rendered via Devanagari vowel signs. ✓

### 12. Sanskrit 'one' एकम् vs canonical एकः (FIX-CONSIDER)
`one.js:85  sa: ["एकम्", "eːkam"]` and `sa_edu: ["एकम्", "eːkam"]` — एकम् is the neuter nom.acc. ("ekam"); the masculine citation form (matching la `ūnus`, grc `εἷς` masc., de `eins`, etc., which are all masculine) is एकः ("ekaḥ"). The PIE *Hóynos reflex is masc. *Hoynos > Skt. ekas. Either change to एकः or add a comment that neuter form is chosen for counting use. Compare sa cat `मार्जारः` (masc. -ḥ ending kept), sa hand `हस्तः`, sa heart `हृदयम्` (neuter, correct), sa fire `अग्निः`, sa sun `सूर्यः` — these all use proper -ḥ or -m endings. एकम् is inconsistent here.

### 13. Sanskrit 'good' उत्तमम् — wrong sense, choose साधु or भद्र (FIX-CONSIDER)
`good.js:85  sa: ["उत्तमम्", "uttamam"]` — uttama means "highest, best, supreme", not the general adjective "good". The neutral PIE-aligned word is साधु (sādhu) "good, proper" or भद्र (bhadra) "auspicious, good". Compare ave `wohu`, peo `naiba`, ine `*h₁su-` — the cognate Skt. form would be sú- in compounds (su-mati "good-thought"); a standalone everyday adjective like sādhu would line up better cross-linguistically.

### 14. Sanskrit pitch / udātta marking — absent (PARTIAL FAIL)
Vedic Sanskrit marks udātta with the over-vertical and anudātta with the horizontal underbar, but no entry uses these (e.g. mātā́ would be `माता॑` in udātta-marked Vedic). All sa entries use unaccented Classical Devanagari. Given the words list aims at lemma forms, this is acceptable — but worth a note that Vedic accent is intentionally not represented (the focus brief mentions it). If accent is desired, the standard candidates would be sa mother `पिता` → Vedic `पिता॒`, sa one → Ved. ékas. **Recommendation: leave as Classical sa, or add a separate `sa_ved` lect for Vedic accent.**

### 15. Pali pi 'cat' बिळाल — Devanagari with ळ is North-Indian rendition (NOTE)
`cat.js:519  pi: ["बिळाल", "biɭaːla"]` — Pali is often written in Roman or Sinhala/Thai/Burmese; the retroflex `ḷ` (ळ) here is OK for Devanagari Pali. `pi_edu` correctly renders "biḷāla". Consistent.

### 16. Old English macrons — present (PASS, mostly)
`ang fȳr` (fire), `ang gōd` (good), `ang ēage` (eye), `ang ān` (one), `ang mōna` (moon), `ang mōdor` (mother), `ang wes hāl` (hello) — all correct. **Issue:** `ang trēow` (tree) is fine; `ang heorte` (heart) has no macron (correct, short e); `ang hund` no macron (correct); `ang catt` no macron (correct). Good baseline.

### 17. Old English 'hello' ang "wes hāl" vs Old Norse non "heill" — phrasal vs single word (NOTE)
`hello.js:507  ang: ["wes hāl", "wes haːl"]` is the 2sg imperative phrase "be healthy" — the cognate single-word Old English greeting is "hāl" or "hāl wes þū". The phrasal form is fine but stylistically inconsistent with the single-word `non heill`, `got hails`, `goh heil`. Pick a convention.

### 18. Avestan script — all present and correctly using U+10B00 range (PASS)
ave for 16 of 20 words uses Avestan script (𐬀-𐬺). Glyphs match expected Av. forms: `𐬨𐬁𐬙𐬀𐬭` (mātar), `𐬞𐬌𐬙𐬀𐬭` (pitar), `𐬁𐬞` (āp "water"), `𐬁𐬙𐬀𐬭` (ātar "fire"), `𐬵𐬎𐬎𐬀𐬭𐬆` (huwarə "sun"), `𐬨𐬁𐬵` (māh "moon"). Good.

### 19. Avestan 'good' 𐬬𐬊𐬵𐬎 vohu — transliteration "wohu" mismatch (FIX)
`good.js:896  ave: ["𐬬𐬊𐬵𐬎", "wohu"]` — the glyph 𐬬 is conventionally transliterated `v` (Av. *v* is /w/-like phonetically, but the standard transliteration is `vohu`, as in vohu mana "good thought"). IPA-style "wohu" is defensible phonetically, but if these IPA columns are *Avestan transliteration* like elsewhere (e.g. peo `pitaː`, ave `pitar`), use `vohu`. Compare ave love `𐬟𐬭𐬌𐬌𐬀` → `frija` (uses transliteration not IPA), and ave water `𐬁𐬞` → `aːp` (uses length mark like IPA). The column is inconsistent across ave entries — sometimes IPA-ish, sometimes scholarly transliteration.

### 20. Old Persian peo entries — script and length correct (PASS, with one quibble)
peo `𐎱𐎡𐎫𐎠 pitaː` (father), `𐎶𐎠𐎫𐎼 maːtar` (mother), `𐎠𐎱 aːpi` (water), `𐎠𐎫𐎼 aːtar` (fire), `𐏃𐎢𐎺𐎼 huwar` (sun) — Old Persian cuneiform. ✓ However `sun.js:901  peo: ["𐏃𐎢𐎺𐎼", "huwar"]` lacks the long ā that Old Persian *huwar* / *huvar* would carry in some reconstructions; IPA in other Iranian languages here shows lengths. Minor.

### 21. Hittite cuneiform — present where attested (PASS)
hit uses cuneiform for `𒉿𒀀𒋻 waːtar` (water — beautifully matching the PIE *wódr̥), `𒉺𒄩𒄴𒄯 paxːur` (fire ← PIE *péh₂wr̥), `𒆗𒁕 kard` (heart ← *ḱḗr), `𒋫𒊒 taru` (tree ← *dóru), `𒀜𒋫 atːa` (father, child-talk), `𒀭𒈾 anːa` (mother). These are textbook IE etymological showcases — keep. `hit hello`, `hit thanks`, `hit sun`, `hit cat` use `—` (correct: no securely attested form for these meanings in the surviving corpus).

### 22. Hittite 'one' hit 𒁹 "aʃ" — sign and transliteration (NOTE)
`one.js:535  hit: ["𒁹", "aʃ"]` — 𒁹 is the cuneiform vertical wedge (DIŠ), used as the numeral 1. Hittite read it variously; the IE-cognate Hittite numeral is "ās" (cf. PIE *Hoy-) or written syllabically as 𒀀𒀸 (a-aš). Single 𒁹 is fine as logogram; IPA `aʃ` (with palatal sibilant) is unusual — Hittite š is typically transliterated /s/ phonologically. Recommend `as` (or `aːs`) instead of `aʃ`.

### 23. Tocharian A vs B — **Brahmi script use is non-standard** (FIX-MAJOR)
**All xto and txb native fields use the U+11000 Brahmi block** (e.g. xto `𑀓𑀼𑀫𑀽𑀱𑁆`, txb `𑀓𑁆𑀯𑁂𑀁`). Tocharian was written in the **Tocharian script**, a North Brahmic descendant with its own distinctive akṣaras that have **no dedicated Unicode block** (proposals exist but are not encoded). Scholarly editions universally use **Latin transliteration** (e.g. Toch.A *kāsu* "good", Toch.B *kartse*, Toch.A *por* / B *puwar* "fire"). Spelling these in vanilla Brahmi is misleading: it implies they are Brahmi-tradition words like Sanskrit/Pali, when in fact the Tocharian script is **distinct** and Brahmi transliteration is unattested. **Recommendation:** switch xto/txb native to Latin transliteration matching the IPA column, OR mark explicitly with a "Brahmi-approximation" annotation. This is the largest cross-cutting issue in this audit.

### 24. Tocharian A vs B — distinct phonology (PARTIAL FAIL, several FIXES)
The brief asks that A and B differ. Audit:
- **Different** (good): good (A `kāsu` / B `kartse`), fire (A `por` / B `puwar`), hand (A `tsar` / B `ṣar`), moon (A `mañ` / B `meñe`), father (A `pācar` / B `pācer`), cat (A `kumuṣ` / B `kweṅ`), eye (A `ak` / B `ek`), heart (A `arāñc` / B `arəñce`), house (A `waṣt` / B `ost`), eat (A `śaw` / B `śuwa`), sun (A `kontu` / B `kauṃ`), love (A `kāyu` / B `kāwā`), one (A `sas` / B `ṣe`), mother (A `mācar` / B `mācer`).
- **Identical** (suspect): **tree (both `staːm`)**, **water (both `wær`/`war`)**, **dog (both `ku`)**, **drink (both `jok`)**. Real attested forms:
  - tree: Toch.A *stām* (sg.) / Toch.B *stām* — OK, the singular is actually identical.
  - water: Toch.A **wär** / Toch.B **war** — already differs in IPA (`wær` vs `war`) but native Brahmi script is identical. Should be visually distinct (use *wär* vs *war* in transliteration).
  - dog: Toch.B *ku* is fine; Toch.A *ku* is also attested. Acceptable.
  - drink: Toch.A *yokäṃ* / Toch.B *yokaṃ* (3sg present); both forms differ. Current `jok` for both is over-truncated.

### 25. Gothic native script — present and correct (PASS)
got `𐌷𐌰𐌹𐌻𐍃` (hails), `𐌳𐍂𐌹𐌲𐌺𐌰𐌽` (drigkan, drink), `𐍆𐍉𐌽` (fōn, fire), `𐍅𐌰𐍄𐍉` (wato, water), `𐌷𐌰𐌹𐍂𐍄𐍉` (hairtō, heart), `𐌷𐌿𐌽𐌳𐍃` (hunds, dog), `𐌰𐍄𐍄𐌰` (atta, father child-talk), `𐌰𐌹𐌸𐌴𐌹` (aiþei, mother), `𐌰𐌹𐌽𐍃` (ains, one), `𐌼𐌴𐌽𐌰` (mēna, moon), `𐍃𐌿𐌽𐌽𐍉` (sunnō, sun), `𐍂𐌰𐌶𐌽` (razn, house), `𐍆𐍂𐌹𐌰𐌸𐍅𐌰` (friaþwa, love), `𐌱𐌰𐌲𐌼𐍃` (bagms, tree), `𐌺𐌰𐍄𐍄𐍃` (katts, cat), `𐌼𐌰𐍄𐌾𐌰𐌽` (matjan, eat), `𐌰𐌿𐌲𐍉` (augō, eye), `𐌰𐌿𐌲𐍉` (augō, eye), `𐌷𐌰𐌽𐌳𐌿𐍃` (handus, hand). ✓

### 26. Gothic 'cat' got 𐌺𐌰𐍄𐍄𐍃 "katts" — likely non-attested loan (NOTE/FIX-CONSIDER)
`cat.js:517  got: ["𐌺𐌰𐍄𐍄𐍃", "kɑtːs"]` — Gothic has **no attested word for "cat"**. The form `katts` is a hypothetical reconstruction modeled on West Germanic *katt-. Either mark with leading * (and a comment in `notes` if the schema supports it), or use `—`. Compare hit, ine, peo, ave for cat which correctly use `—`.

### 27. Gothic 'good' got 𐌲𐍉𐌸𐍃 "gōþs" — IPA mismatch (MINOR)
`good.js:517  got: ["𐌲𐍉𐌸𐍃", "ɡoːθs"]` — Gothic þ /θ/ is correct. ✓

### 28. Old Norse 'hand' non hǫnd — *o* ogonek (PASS)
`hand.js:516  non: ["hǫnd", "hɔnd"]` — Old Norse uses ǫ (o with hook) for /ɔ/. Correct. Matches `non hjarta` (heart, no ǫ), `non kǫttr` (cat with ǫ), `non þǫkk` (thanks with ǫ). Good.

### 29. Old Norse 'moon' non máni — acute marks long vowel (PASS)
`moon.js:522  non: ["máni", "mɑːni"]` ✓ and `non sól` ✓ and `non góðr` ✓ and `non ást` ✓. All acute-marked long vowels present.

### 30. PIE *swéḱs '6' cognate check — not applicable (NOTE)
The brief asks for *swḗḱs (six) cognate consistency, but **the wordmap doesn't include "six"** (only "one"). For "one" the cognate consistency is:
- la `ūnus` ← PIE *Hóynos ✓
- sa `एकम्` (ekam) ← PIE *Hóynos ✓ (with k-extension)
- el_grc `εἷς` ← PIE *sem-/*sm̥- (different root — heteroclitic across IE)
- non `einn`, got `ains`, ang `ān`, goh/gmh `ein` ← all reflect *Hóynos ✓
- ine entry: `*Hóynos` ✓
The Greek `εἷς` < *sem- diverges; if the goal is cognate-consistency, either add a note or pick PIE `*sem-/*sm̥-` for grc. Currently ine reconstructs *Hóynos only — but grc εἷς is **not** a reflex of *Hóynos. This is a substantive etymological mismatch.

### 31. peo/ave 'love' peo `𐎳𐎼𐎡𐎹 frija` / ave `𐬟𐬭𐬌𐬌𐬀 frija` — same form (PASS, NOTE)
Both Iranian forms cognate with Skt. priyá- "dear". The native scripts differ correctly; transliterations identical. Good.

### 32. peo 'eat' peo 𐎧𐎼 "xar" — verb stem vs infinitive (NOTE)
`eat.js:888  peo: ["𐎧𐎼", "xar"]` — this is the verb stem; compare ave `𐬑𐬬𐬀𐬭 xwar` which is the infinitive/stem. Old Persian verb of "eating/drinking" is xᵛar- (xwar-). The peo form should arguably be `𐏈𐎻𐎼` (xv ar) with the xv ligature, not bare 𐎧𐎼 (x ar). Minor, but Old Persian distinguishes xv- from x-.

### 33. Sanskrit hr̥dayam — syllabic r correct (PASS)
`heart.js:85  sa: ["हृदयम्", "hr̩dajam"]` IPA uses combining vertical-line-below ` ̩` on r, matching the ine convention. Consistent. ✓

### 34. Middle English enm — generally fine (PASS)
enm `catte`, `hound`, `drinken`, `eten`, `eye`, `fader`, `fyr`, `good`, `hand`, `herte`, `hail`, `hous`, `love`, `mone`, `moder`, `oon`, `sonne`, `gramercy`, `tre`, `water` — all reasonable Middle English forms.

### 35. enm 'thanks' gramercy — French-derived (NOTE)
`thanks.js:512  enm: ["gramercy", "ɡraːmɛrsiː"]` — gramercy is from Old French "grant merci"; a more native ME thanks expression is "þank" or "þanke". Compare `ang þanc`, `non þǫkk`, `got þagks`. The gramercy choice is fine but stylistically out of step with the Germanic family.

### 36. goh / gmh — diphthongs and macrons (PASS)
goh `māno`, `hūs`, gmh `mâne`, `hûs` (circumflex for long), `muoter` (uo diphthong) — all correctly marked. ✓

---

## Summary recommendations (priority order)

1. **Tocharian A/B Brahmi script**: switch native to Latin transliteration, or annotate. **(Finding 23)**
2. **ine 'one' capital H**: align with h₁/h₂/h₃ convention or simplify. **(Finding 2)**
3. **Sanskrit 'one'** एकम् → एकः to match masc.-citation siblings. **(Finding 12)**
4. **Sanskrit 'good'** उत्तमम् → साधु or भद्र for general "good". **(Finding 13)**
5. **Avestan 'good'** transliteration `wohu` → `vohu`. **(Finding 19)**
6. **Tocharian A/B identical entries** (water, drink): differentiate native or note rare A/B identity. **(Finding 24)**
7. **Gothic 'cat'** is unattested — mark with * or `—`. **(Finding 26)**
8. **Greek 'one' εἷς** vs ine *Hóynos — etymological non-cognate. **(Finding 30)**
9. **Hittite 'one'** IPA `aʃ` → `as`. **(Finding 22)**

---

**File:** `/home/jounlai/langmap/wordmap_reviews/review_100_open.md`
**Findings:** 36 (29 substantive findings + 6 PASS confirmations + 1 N/A note)


---

## Dev response — round 1 (2026-06-04)

.wf_wordmap_apply.mjs 経由で適用済。

- **適用 edit**: 8
- **policy/skip**: 28
- **headline**: ine one *Hóynos→*h₁óynos ×2, sa/sa_edu/vsa one एकम्→एकः masc ×6, sa good उत्तमम्→साधु ×2, ave good wohu→vohu, got cat * unattested, hit one aʃ→as
- **JSON**: /tmp/wm_edits_100.json
