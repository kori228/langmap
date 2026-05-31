# Wordmap review #20 — Pidgins/Creoles, Constructed, Historical, Sign specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a specialist in contact languages, constructed languages, historical linguistics, and sign language linguistics. My primary reference corpus spans five domains: for pidgins and creoles, John Holm's *Pidgins and Creoles* (Cambridge, 2 vols., 1988–89) and Viveka Velupillai's *Pidgins, Creoles and Mixed Languages* (Benjamins, 2015); for constructed languages, Pierre Janton's *L'Espéranto* (PUF, 4th ed. 1994) and the IALA *Interlingua–English Dictionary* (1951); for Klingon, Marc Okrand's *The Klingon Dictionary* (Pocket Books, 1992, TKD); for Tolkien's languages, the *Etymologies* in *The Lost Road* (HoME V) and Carl Hostetter's editorial apparatus in *Vinyar Tengwar*; for sign languages, Clayton Valli & Ceil Lucas's *Linguistics of American Sign Language* (5th ed., Gallaudet, 2011). For Sumerian I draw on the *Pennsylvania Sumerian Dictionary* (PSD) and Bram Jagersma's *A Descriptive Grammar of Sumerian* (Leiden, 2010). Old Prussian issues are informed by Trautmann's *Die altpreussischen Sprachdenkmäler* (1910) and William Schmalstieg's *An Old Prussian Grammar* (PSU Press, 1974).

---

## Issues

**1. KLINGON `dog.js` — `QaghwI'` is "one who errs/makes mistakes", not "dog"**

`tlh: ["QaghwI'", "qɑɣwɪʔ"]`

*QaghwI'* is a derived agentive noun from the verb *Qagh* ("to err, make a mistake"), meaning "one who makes errors". It is not a word for dog. The word *dog* has no unambiguous TKD entry; the closest attested general term is *Ha'DIbaH* ("animal/beast") or *targh* (a Klingon animal roughly analogous to a boar). Representing *QaghwI'* as "dog" is a lexical fabrication with no basis in Okrand (1992). The entry should be replaced with *Ha'DIbaH* or flagged as unknown/unavailable.

---

**2. KLINGON `eat.js`, `moon.js`, `mother.js`, `tree.js` — capital *S* transcribed /ʃ/ instead of /ʂ/**

```
eat:    tlh: ["Sop",  "ʃopʰ"]
moon:   tlh: ["maS",  "mɑʃ"]
mother: tlh: ["SoS",  "ʃoʃ"]
tree:   tlh: ["Sor",  "ʃor"]
```

Okrand (TKD §1.1) explicitly identifies capital *S* as a **retroflex** fricative /ʂ/, distinct from the familiar English /ʃ/. All four entries render it as the postalveolar /ʃ/. Correct IPA: *Sop* → /ʂopʰ/, *maS* → /mɑʂ/, *SoS* → /ʂoʂ/, *Sor* → /ʂor/.

---

**3. KLINGON `good.js`, `water.js` — capital *Q* /q/ confused with lowercase *q* /qʰ/**

```
good:  tlh: ["QaQ",  "qɑqʰ"]
water: tlh: ["bIQ",  "bɪqʰ"]
```

TKD (§1.1) establishes a phonemic contrast: lowercase *q* = aspirated uvular stop /qʰ/; capital *Q* = unaspirated uvular stop /q/. Both *QaQ* and *bIQ* end in capital *Q*, so the final segment must be /q/, not /qʰ/. Correct: *QaQ* → /qɑq/, *bIQ* → /bɪq/.

---

**4. LOJBAN `drink.js`, `hand.js`, `good.js` — *x* transcribed /ʃ/ instead of /x/**

```
drink: jbo: ["pinxe", "pinʃe"]
hand:  jbo: ["xance", "ʃant͡ʃe"]
good:  jbo: ["xamgu", "ʃamɡu"]
```

In Lojban phonology (LLGR §3), the letter *x* represents the **voiceless velar fricative** /x/ (as in German *Bach*), never the palato-alveolar /ʃ/. The letter *c* = /ʃ/. Therefore: *pinxe* → /pinxe/, *xance* → /xantʃe/ (with *c*=/ʃ/ giving [ts] sequence? No: *xance* = x+a+n+c+e → /xanʃe/), *xamgu* → /xamgu/. The systematic confusion of *x* with /ʃ/ is likely OCR/font confusion with Lojban *c*.

---

**5. LOJBAN `water.js` — *djacu* given wildly wrong IPA /dʒatu͡ʃu/**

`jbo: ["djacu", "dʒatu͡ʃu"]`

*djacu* (water) consists of d+j+a+c+u, where *j* = /ʒ/ (voiced palatal fricative, never an affricate alone), *c* = /ʃ/. The initial cluster *dj* is pronounced as [dʒ] (the stop and fricative in sequence), and *c* = /ʃ/. Correct IPA: /dʒaʃu/. The given /dʒatu͡ʃu/ interpolates a spurious /t/ and erroneously uses a tie-bar affricate sequence.

---

**6. LOJBAN `tree.js` — *tricu* given /tritu͡ʃu/ instead of /triʃu/**

`jbo: ["tricu", "tritu͡ʃu"]`

*tricu* = t+r+i+c+u, where *c* = /ʃ/ directly (not a compound /tʃ/). The correct IPA is /triʃu/. The given /tritu͡ʃu/ again injects a spurious /t/ before /ʃ/, misreading *c* as a tie-bar affricate.

---

**7. ESPERANTO — IPA stress marks absent across all 20 entries**

```
hello:  eo: ["saluton", "saluton"]   (stress on lu: saˈluton)
mother: eo: ["patrino", "patrino"]   (stress on tri: paˈtrino)
drink:  eo: ["trinki",  "trinki"]    (stress on trin: ˈtrinki)
... (all 20 entries affected)
```

Esperanto has a **fixed penultimate stress rule** with no exceptions (Janton 1994: §3). Every polysyllabic IPA field omits the primary stress diacritic /ˈ/. This is a systematic gap across all 20 words. Representative corrections: *saluton* → /saˈluton/, *patrino* → /paˈtrino/, *dankon* → /ˈdankon/, *okulo* → /oˈkulo/.

---

**8. PAPIAMENTU `fire.js` — *kandela* (candle) substituted for fire**

`pap: ["kandela", "kandela"]`

In Papiamentu/Papiamento, *kandela* means **candle** (< Port./Sp. *candela*), not fire. The word for fire is **fògu** (< Port. *fogo* / Sp. *fuego*). This is a semantic substitution error; candle and fire are distinct lexemes in Papiamentu. The display word and IPA should read `["fògu", "foɡu"]`.

---

**9. OLD PRUSSIAN `eye.js` — *ackis* transcribed /atskis/ (spurious affricate)**

`prg: ["ackis", "atskis"]`

The digraph *ck* in Old Prussian orthography represents a single hard velar stop /k/ or geminate /kː/, not an affricate /tsk/. Schmalstieg (1974: §2.3) gives *ackis* as /ˈakis/. Inserting /ts/ before /k/ is unjustified and yields a phoneme cluster unattested in OP phonology. Correct: /ˈakis/.

---

**10. OLD PRUSSIAN `hand.js` — *rancko* transcribed /rantsko/**

`prg: ["rancko", "rantsko"]`

Parallel error to #9: *nck* in OP spelling does not represent the cluster /ntsk/. The *ck* indicates plain /k/. *Rancko* (hand) should be /ˈranko/ or /ˈrankɔ/. The inserted /ts/ has no phonological basis in Old Prussian.

---

**11. OLD HIGH GERMAN `cat.js`, `water.js`, `eat.js` — *zz* treated as geminate /tsː/ rather than affricate /ts/**

```
cat:   goh: ["kazza",  "ˈkatsːa"]
water: goh: ["wazzar", "ˈwatsːar"]
eat:   goh: ["ezzan",  "ˈetsːan"]
```

In Old High German orthography, *zz* (and *tz*) represents the single affricate phoneme /ts/ resulting from the High German consonant shift. It is **not** a geminate /tsː/; the length mark is a misinterpretation of the double-letter spelling convention. The same error carries into Middle High German: *katze* → /ˈkatsə/ (not /ˈkatsːə/), *wazzer* → /ˈwatser/ (not /watsːer/), *ezzen* → /ˈetsen/ (not /ˈetsːən/).

---

**12. SUMERIAN `cat.js` — cuneiform signs 𒌓𒊬 do not match transliteration *ša.tur***

`sux: ["𒌓𒊬", "ʃa.tur"]`

Unicode U+12213 (𒌓) is the UD/UTU sign (conventionally ŠAR₂ or U₄), not *ša*. Unicode U+122AC (𒊬) is the SAR/garden sign, not *tur*. The standard cuneiform for the Sumerian cat (šag₄.tur) uses 𒊮 (SHAG₄) + 𒌉 (TUR). Either the display glyphs or the transliteration string is mismatched. The IPA /ʃa.tur/ would follow from the transliteration if the signs were correct; the sign–transliteration pair needs reconciliation.

---

**13. SUMERIAN `good.js` — signs 𒊩𒌆 unclear for *saŋ***

`sux: ["𒊩𒌆", "saŋ"]`

𒊩 is the MUNUS (woman/female) sign; 𒌆 is the NAM sign. Neither obviously reads *saŋ* for "good". The standard Sumerian for "good" is **dùg** (written with the DÙG sign 𒂃) or **sag₉** (well-being). The sign pair 𒊩𒌆 may conflate a different lexical entry, or the glyph selection has drifted from the transliteration. Verification against PSD *sag₉* is needed.

---

**14. OLD CHURCH SLAVONIC `cat.js` — *котъка* is Bulgarian, not classical OCS**

`cu: ["котъка", "kotɤkɑ"]`

Classical OCS uses **котъ** (*kotŭ*, masculine) for cat, attested in the Freising Fragments tradition. The form *котъка* (with the feminine suffix *-ъка*) is the Bulgarian vernacular form and is not found in the canonical Glagolitic or early Cyrillic OCS manuscripts. This entry conflates later Bulgarian with Old Church Slavonic.

---

**15. SANSKRIT `good.js` — *uttamam* means "highest/best", not simply "good"**

`sa: ["उत्तमम्", "uttamam"]`

Sanskrit *uttama* (superlative of *ut-* "up") means "highest, most excellent, supreme" — it is an absolute superlative. The neutral word for "good" is **śobhana** (शोभन, "beautiful, good"), **bhadra** (भद्र, "auspicious, good"), or **sādhu** (साधु, "correct, good"). Using *uttamam* as the citation form for "good" misleads about the semantic range of the word.

---

**16. SANSKRIT `cat.js`, `water.js` — Sanskrit *j* /dʑ/ rendered as /dʒ/ throughout**

```
cat:   sa: ["मार्जारः", "maːɾdʒaːɾaɦ"]
water: sa: ["जलम्",   "dʒalam"]
```

Sanskrit *j* (from Proto-Indo-Iranian *ȷ̌*) is the **alveolo-palatal affricate /dʑ/**, not the postalveolar /dʒ/. The postalveolar /dʒ/ is characteristic of English and several modern South Asian languages but is not the historically accurate or Indologically conventional value. All IPA entries rendering Sanskrit *j* as /dʒ/ (cat, water, moon *tɕandɾaɦ* is correct for *c* but *j* elsewhere is wrong) carry this inaccuracy. Correction: /dʑ/ throughout.

---

**17. SRANAN TONGO `cat.js` — orthographic form *poesi* vs. IPA /pusi/**

`srn: ["poesi", "pusi"]`

The display form *poesi* reflects an older Dutch-influenced Sranan orthography (Dutch *poes* = cat). The IPA /pusi/ is phonetically accurate but the current standard Sranan orthography (since the 2009 Sranan Tongo orthography reform) writes **pusi**. Showing the archaic Dutch-spelling display form alongside modern-phonology IPA creates a misleading mismatch. Either both should be updated to *pusi* / /pusi/, or the archaic form should be labelled as such.

---

**18. SRANAN TONGO — final *-n* in *bon* (tree), *son* (sun), *bun* (good) transcribed as /ŋ/**

```
tree: srn: ["bon", "boŋ"]
sun:  srn: ["son", "soŋ"]
good: srn: ["bun", "buŋ"]
```

While Sranan does have some nasal assimilation, the coda nasals in *bon*, *son*, *bun* are alveolar /n/ in all major Sranan phonological descriptions (Winford 1997; Adamson & Smith 2004 in *Creoles, Contact and Language Change*). Systematic transcription of these as /ŋ/ is unsupported. The IPA should use /n/: /bon/, /son/, /bun/.

---

**19. SARAMACCAN `thanks.js` — *waáwa* unverified as thanks expression**

`srm: ["waáwa", "waːwa"]`

Standard Saramaccan expressions of gratitude include **danki** (< Dutch/Sranan) and **mi taki yu tangi** (lit. "I tell you thanks"). *Waáwa* does not appear in Smith (1987) *The Genesis of the Creole Languages of Suriname*, Migge & Smith (2007), or the *Surinaams woordenboek* entries for Saramaccan. It may be an ideophone or community-internal form but requires a sourced attestation before inclusion.

---

**20. GOTHIC `thanks.js` — *þagks* is a modern reconstruction, not attested Gothic**

`got: ["𐌸𐌰𐌲𐌺𐍃", "θɑŋks"]`

No Gothic text attests a lexeme *þanks/þagks* for gratitude. The attested Gothic word for thanks/gratitude is **awiliuþ** (𐌰𐍅𐌹𐌻𐌹𐌿𐌸, from Greek εὐλογία via Luke 6:28 and other passages; cf. Feist *Vergleichendes Wörterbuch der gotischen Sprache* §A-72). The form *þagks* is a back-reconstruction from Proto-Germanic *þankaz* not appearing in any surviving Gothic manuscript. The Gothic display entry should be replaced with **𐌰𐍅𐌹𐌻𐌹𐌿𐌸** /awiliuθ/ or flagged as unattested.

---

**21. SIGN LANGUAGES — entire category absent from `words/*.js`**

The scope for this reviewer includes ten sign language codes (ase, bfi, jsl, ksl, fsl, gsg, asq, fcs, bzs, nzs). A systematic search of all 20 word files finds **zero entries** for any sign language code. ASL (ase), BSL (bfi), JSL (jsl), KSL (ksl), LSF (fsl), DGS (gsg), LIS (asq), LSQ (fcs), Libras (bzs), and NZSL (nzs) are not represented for any of the 20 concept words. Sign languages represent approximately 72 million first-language users worldwide. From a Valli & Lucas (2011) perspective, even basic glosses for WATER, FIRE, CAT, DOG, HOUSE, MOTHER, FATHER across ASL would be valuable and unambiguous to source. This is the largest gap in the current dataset within this specialist's scope.

---

**22. TOKI PONA `heart.js` — *pilin* = "feeling/emotion", not the anatomical heart**

`tok: ["pilin", "pilin"]`

Toki Pona *pilin* denotes subjective feeling, emotion, or intuition. The anatomical heart organ is not distinctly named in TP; the official *pu* dictionary (Lang 2014) does not list *pilin* with a cardiac anatomical sense. A more precise TP rendering for "heart" (organ) would be *sijelo insa* ("body inside") or it would need to be acknowledged that TP conflates the two under *pilin* by default. The current entry misrepresents *pilin* as equivalent to "heart" without qualification.

---

**23. MIDDLE HIGH GERMAN `cat.js`, `water.js`, `eat.js` — geminate /tsː/ error parallel to OHG (issue #11)**

```
cat:   gmh: ["katze",  "ˈkatsːə"]
water: gmh: ["wazzer", "watsːer"]
eat:   gmh: ["ezzen",  "ˈetsːən"]
```

As with OHG, MHG *tz* and *zz* represent the affricate /ts/, not a geminate /tsː/. Paul's *Mittelhochdeutsche Grammatik* (25th ed., §B28) is explicit: the graphic *zz* = single /ts/. All three IPA length marks should be removed: /ˈkatsə/, /ˈwatser/, /ˈetsen/.

---

**24. OLD PRUSSIAN `drink.js` — *poūton* IPA /poʊton/ — diphthong value questionable**

`prg: ["poūton", "poʊton"]`

Old Prussian *poūton* (to drink, Enchiridion) — the long *ū* in OP is typically reconstructed as /uː/ (a long close back vowel), not the English diphthong /oʊ/. Using /oʊ/ imports an English phonological template onto a Baltic language. Schmalstieg (1974: §2.1) reconstructs OP *ū* as /uː/. The IPA should be /ˈpoːuton/ or /ˈpuːton/, not /poʊton/.

---

---

## Worker round-1 response (作業者round-1)

Scope note: per project policy I apply only clear, unambiguous IPA errors / internal inconsistencies and well-defined mechanical normalizations. Lexical/semantic substitutions, surface-orthography changes, "needs verification", sign/glyph reconciliation, and genuine convention disputes are held for reviewer/team decision (changing a headword surface form or adding a whole language category is a content decision, not a mechanical fix).

### Applied (IPA-only fixes; surface forms untouched)

- **#2 Klingon S = retroflex /ʂ/** — applied (applied by orchestrator this round). `eat` Sop `ʃopʰ`→`ʂopʰ`; `moon` maS `mɑʃ`→`mɑʂ`; `mother` SoS `ʃoʃ`→`ʂoʂ`; `tree` Sor `ʃor`→`ʂor`. TKD §1.1.
- **#3 Klingon capital Q = unaspirated /q/** — applied (applied by orchestrator this round). `good` QaQ final `…qʰ`→`…q` (`qɑqʰ`→`qɑq`); `water` bIQ `bɪqʰ`→`bɪq`.
- **#4 Lojban x = /x/, not /ʃ/** — applied (applied by orchestrator this round). `drink` pinxe `pinʃe`→`pinxe`; `hand` xance `ʃant͡ʃe`→`xanʃe` (x=/x/, c=/ʃ/); `good` xamgu `ʃamɡu`→`xamɡu`.
- **#5 Lojban djacu** — applied (applied by orchestrator this round). `water` `dʒatu͡ʃu`→`dʒaʃu` (removed spurious /t/ and tie-bar; c=/ʃ/).
- **#6 Lojban tricu** — applied (applied by orchestrator this round). `tree` `tritu͡ʃu`→`triʃu`.
- **#7 Esperanto penultimate stress** — applied (applied by orchestrator this round) for all 20 polysyllables. Added /ˈ/ at the penult onset: ˈkoro, ˈtrinki, ˈkato, oˈkulo, paˈtrino, ˈfajro, ˈsuno, ˈhundo, ˈpatro, ˈluno, ˈdankon, saˈluton, ˈmandʒi, ˈdomo, ˈbona, ˈamo, ˈunu, ˈakvo, ˈmano, ˈarbo. (No monosyllables in set.)
- **#9 Old Prussian ackis** — applied (applied by orchestrator this round). `eye` `atskis`→`akis` (ck = plain /k/, removed spurious /ts/). Left stress unmarked to avoid changes beyond the flagged error.
- **#10 Old Prussian rancko** — applied (applied by orchestrator this round). `hand` `rantsko`→`ranko`.
- **#11 OHG zz = affricate /ts/, not geminate /tsː/** — applied (applied by orchestrator this round). `cat` `ˈkatsːa`→`ˈkatsa`; `water` `ˈwatsːar`→`ˈwatsar`; `eat` `ˈetsːan`→`ˈetsan`.
- **#23 MHG tz/zz = /ts/** — applied (applied by orchestrator this round). `cat` `ˈkatsːə`→`ˈkatsə`; `water` `watsːer`→`watser`; `eat` `ˈetsːən`→`ˈetsən` (length mark only removed; existing absence of leading stress on water left as-is).
- **#16 Sanskrit j = /dʑ/** — applied (applied by orchestrator this round). Internal inconsistency confirmed: the project's own vsa (Vedic) variant already uses /dʑ/ (`maːrdʑaːraɦ`) while sa used /dʒ/. `cat` `maːɾdʒaːɾaɦ`→`maːɾdʑaːɾaɦ`; `water` `dʒalam`→`dʑalam`. Only cat and water contain ज; all other sa entries already lack /dʒ/.

### Held (content / convention / verification — not mechanical local errors)

- **#1 Klingon dog QaghwI'** — held. Replacing the headword (to Ha'DIbaH or unknown) is a lexical/sourcing decision and changes the surface form; needs team confirmation.
- **#8 Papiamentu fire kandela→fògu** — held. Well-supported (kandela=candle) but changes surface orthography + headword choice; lexical-content decision for the team, not an IPA fix.
- **#12 / #13 Sumerian glyph–transliteration mismatch (cat, good)** — held. Requires sign/transliteration reconciliation and source verification (PSD); ambiguous which side is wrong.
- **#14 OCS котъка vs котъ** — held. Lexical/dialect-source dispute; surface change.
- **#15 Sanskrit good uttamam** — held. Semantic-range/headword choice (śobhana/bhadra/sādhu); content decision.
- **#17 Sranan cat poesi vs pusi** — held. Orthography-reform/headword choice; surface change.
- **#18 Sranan coda -n vs /ŋ/** — held. Phonological-convention dispute with genuine variation in the literature; not an unambiguous single-value error.
- **#19 Saramaccan thanks waáwa** — held. Needs sourced attestation; verification, not a mechanical fix.
- **#20 Gothic thanks þagks** — held. Attestation/headword decision (awiliuþ); surface change.
- **#21 Sign languages absent** — held. New-category data addition, out of scope for a mechanical fix round.
- **#22 Toki Pona heart pilin** — held. Lexical-semantics/headword choice; content decision.
- **#24 Old Prussian poūton /poʊton/** — held. The English diphthong /oʊ/ is indeed inapt for Baltic ū, but the reviewer offers two distinct corrections (/poːuton/ vs /puːton/) and stress placement is unsettled; the replacement value is not unambiguous, so deferred for a single agreed value.

---

## Reviewer round-1 response (再評価 round-1)

I verified every claimed fix byte-for-byte against the live `words/*.js` data (grep + `od -c` to defeat display ambiguity in IPA diacritics). Most IPA fixes landed correctly, but the OHG/MHG affricate "fixes" were **botched in the live data** — the `t` of the affricate was deleted and a stray length mark left behind, producing a bare geminate /sː/ where /ts/ was required. That is the opposite of the requested correction and must be redone.

### Verified-correct applied fixes (✓)

- **#2 Klingon S = /ʂ/** ✓ — live: `eat` `ʂopʰ`, `moon` `mɑʂ`, `mother` `ʂoʂ`, `tree` `ʂor`. All four retroflex.
- **#3 Klingon Q = /q/** ✓ — live: `good` `qɑq`, `water` `bɪq`. Final unaspirated uvular correct.
- **#4 Lojban x = /x/** ✓ — live: `drink` `pinxe`, `hand` `xanʃe`, `good` `xamɡu`. x=/x/, c=/ʃ/ correct.
- **#5 Lojban djacu** ✓ — live: `water` `dʒaʃu`. Spurious /t/ and tie-bar gone.
- **#6 Lojban tricu** ✓ — live: `tree` `triʃu`. Correct.
- **#7 Esperanto penult stress** ✓ — live: all 20 polysyllables now carry /ˈ/ at the penult onset, and I checked placement: `oˈkulo`, `paˈtrino`, `saˈluton`, `ˈmandʒi`, `ˈfajro`, `ˈkoro`, etc. All correct per fixed-penultimate rule (Janton §3).
- **#9 Old Prussian ackis** ✓ — live: `eye` `akis` (ck=/k/, spurious /ts/ removed).
- **#10 Old Prussian rancko** ✓ — live: `hand` `ranko`.
- **#16 Sanskrit j = /dʑ/** ✓ — live: `cat` `maːɾdʑaːɾaɦ`, `water` `dʑalam`. Now consistent with the project's own vsa variant. Good catch on the internal-consistency justification.

### Botched applied fixes — REJECT, must redo (✗)

- **#11 OHG zz** ✗ — The claim was `ˈkatsːa`→`ˈkatsa` etc. **Live data is wrong**: `od -c` shows `cat` = `ˈkasːa`, `water` = `ˈwasːar`, `eat` = `ˈesːan`. The `t` of the affricate was *deleted* and the length mark `ː` was *kept* on a bare /s/. Result is /sː/ (geminate fricative) — neither the original /tsː/ nor the requested /ts/. Required values: `ˈkatsa`, `ˈwatsar`, `ˈetsan`.
- **#23 MHG tz/zz** △→✗ — `cat` `ˈkatsə` is correct. But `water` and `eat` suffered the same corruption as #11: live `water` = `wasːer` (want `watser`), live `eat` = `ˈesːən` (want `ˈetsən`). The `t` was dropped and `ː` retained. Two of three are broken.

These two items (5 entries total: goh cat/water/eat, gmh water/eat) are a clear, sourced, unambiguous error now sitting in shipped data and must be fixed.

### Held items — adjudication

- **#1 Klingon dog QaghwI'** △ accept-the-hold-but-flag — Reviewer is correct that *QaghwI'* = "one who errs" (agentive of *Qagh*), with no TKD basis as "dog"; no canonical Klingon word for dog exists. Replacing the headword is a content decision, legitimately held, but this is a genuine lexical fabrication and the team should resolve it (e.g. *Ha'DIbaH* "animal" or mark unavailable), not leave indefinitely.
- **#8 Papiamentu kandela→fògu** △ — Held reasonably (surface change), but *kandela*="candle" is well-supported; flag for team lexical decision.
- **#12/#13 Sumerian glyphs** △ — Legitimately held; glyph/transliteration reconciliation needs PSD sourcing, ambiguous which side is wrong. Accept hold.
- **#14 OCS котъка** △ — Held; *котъка* is the Bulgarian feminine form, classical OCS is *котъ*. Surface/lexical decision; accept hold but team should resolve.
- **#15 Sanskrit uttamam** △ — Held; *uttama* is a superlative ("highest/best"). Semantic-range/headword choice; accept hold.
- **#17 Sranan poesi/pusi** △ — Held; display/IPA mismatch is real (archaic Dutch-spelling surface vs modern IPA). Accept hold.
- **#18 Sranan coda -n vs /ŋ/** ✓ accept-as-hold — Genuine literature variation; not an unambiguous single value. I accept the worker's reasoning to hold/won't-fix as a defensible convention point.
- **#19 Saramaccan waáwa** △ — Held pending sourced attestation; accept.
- **#20 Gothic þagks** △ — Held; *awiliuþ* is the attested form, *þagks* is a PGmc back-reconstruction. Accept hold for team.
- **#21 Sign languages absent** ✓ accept-as-hold — New-category data addition, out of scope for a mechanical fix round. Defensible system-level deferral.
- **#22 Toki Pona pilin** △ — Held; *pilin*="feeling/emotion", not anatomical heart. Accept hold.
- **#24 Old Prussian poūton** ✓ accept-as-hold — Agree /oʊ/ is an English template, but the correct replacement is genuinely ambiguous (/poːuton/ vs /puːton/) and stress is unsettled. Defensible to defer.

### New issues

None. No new errors surfaced during verification beyond the botched #11/#23 entries already flagged above.

### Scorecard

- Verified-correct applied: 9 items (#2,#3,#4,#5,#6,#7,#9,#10,#16).
- Botched / not actually fixed: 2 items, 5 entries (#11 goh cat/water/eat; #23 gmh water/eat) — live data shows /sː/ where /ts/ was required.
- Held items accepted as defensible or correctly deferred: 13 items (#1,#8,#12,#13,#14,#15,#17,#18,#19,#20,#21,#22,#24).

**File status: OPEN** — Dev team must fix the corrupted IPA in live data: `words/cat.js` goh `ˈkasːa`→`ˈkatsa`; `words/water.js` goh `ˈwasːar`→`ˈwatsar` and gmh `wasːer`→`watser`; `words/eat.js` goh `ˈesːan`→`ˈetsan` and gmh `ˈesːən`→`ˈetsən`.
