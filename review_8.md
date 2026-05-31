# Hanmap data review #8 — Manchu / Tungusic specialist

## Reviewer self-introduction (ペルソナ自己紹介)

Specialist in Manchu (mnc), Jurchen (juc) and Sibe (sjo) phonology and lexicon. Trained on Norman (1978) *Concise Manchu-English Lexicon* (University of Washington Press), Möllendorff transliteration, Jin Qicong's Jurchen script materials (*The Jurchen Script*, 1984), and modern Sibe field surveys (Xinjiang Chabchal). Background also covers Proto-Tungusic reconstruction (Vovin 1993 *A Reconstruction of Proto-Togusskir*, Robbeets 2005, Starostin–Dybo–Mudrak *Etymological Dictionary of the Altaic Languages* 2003) for distinguishing native Tungusic vocabulary from Sinitic loanwords across the lexicon.

---

## Issues found

### 1. 走 — mnc — Wrong verb: `tukiyembi` / `tukijəmbi` is "to lift/raise", not "to run/walk"

- Current surface: `"mnc": "tukiyembi"` / IPA: `"mnc": "tukijəmbi"`
- Expected: `jalgimbi` (to run), or better `bederembi`/`yabumbi` (to walk/go); the standard Norman entry for "run" is `jalgimbi` (Norman 1978 p. 220)
- Why: Manchu `tukiyembi` means "to lift, to raise, to promote" (Norman 1978 p. 407). The character 走 here means "run/walk fast." Pairing 走 with `tukiyembi` is a serious lexical error. The Sibe counterpart `feksim` (surface) / `fəkɕim` (IPA) in the same row is correct for "to run" (Sibe `feksimbi`), making the Manchu entry doubly anomalous.

### 2. 走 — juc — Value `"—"` while a Jurchen reconstruction exists

- Current: `"juc": "—"` (both surface and IPA)
- Expected: A reconstruction such as `jalgimbi` or at minimum a note that the Jurchen cognate of "run" is reconstructible; Jin Qicong's *Jurchen–Chinese Dictionary* records a verb stem for "go/walk" related to the Manchu root
- Why: The data consistently supplies Jurchen readings for numerals and body parts but leaves 走 blank for `juc`. Given that 行 correctly gets `yabumbi` / `jabumbi` for Jurchen, the omission for 走 looks like oversight rather than principled absence.

### 3. 走 — ptung — Proto-Tungusic reconstruction `*tuksa-` is wrongly routed

- Current: `"ptung": "*tuksa-"` (both surface and IPA)
- Expected: PTung `*tuksa-` means "to run, to gallop" and is actually the correct reconstruction — but the *Manchu* surface form `tukiyembi` ("to lift") does not derive from `*tuksa-`. The Sibe form `feksimbi` does derive from PTung `*tuksa-` (via metathesis). The PTung entry is correct for Sibe but mis-associated with the Manchu row which was given the wrong word. (Starostin–Dybo–Mudrak 2003, Tungusic #1549)

### 4. 見 — juc surface — `sabumbi` is "to be seen / appear", not "to see"

- Current: `"juc": "sabumbi"` (surface row)
- Expected: `sabu-mbi` is the passive/reflexive of `sabu-` in Manchu; the active "to see" in Manchu/Jurchen is `sabumbi` only in the sense "to perceive, notice" — but the Manchu row already has `tuwambi` which is the canonical "to see" (Norman 1978 p. 376). For the Jurchen row the correct form reflecting Jurchen visual-perception root would be closer to an ancestor of `tuwambi`, not `sabumbi`. In any case `tuwambi` and `sabumbi` are not synonyms: `tuwambi` = "to look, to see" (active, deliberate gaze); `sabumbi` = "to come into view, to be visible." Using `sabumbi` for 見 (see/meet) misrepresents the semantic.

### 5. 見 — juc IPA — `sabumbi` appears in IPA field (not IPA notation)

- Current IPA: `"juc": "sabumbi"` (IPA row, line ~11674)
- Expected: An IPA transcription such as `sabu-mbi` → `sabumbi` in IPA would be `[saˈbumbi]`; the IPA field should carry phonetic brackets, not romanized Möllendorff. All other language IPA fields in the same row use IPA symbols. The Jurchen IPA cell reproduces the romanization verbatim, which is inconsistent.

### 6. 四 — mnc IPA — `"dujn"` is a typo for standard Manchu `duin`

- Current IPA: `"mnc": "dujn"` (IPA row, line ~923)
- Expected: `duin` (or in IPA `[duɪn]`); the surface row correctly gives `duin` but the IPA row gives `dujn` with a misplaced `j`. Norman (1978 p. 61) transcribes this as `duin`; the Möllendorff form has no `j`. This appears to be a data-entry typo that crept only into the IPA field.

### 7. 人 — mnc IPA — `"njalma"` does not match the surface form `niyalma`

- Current IPA (mnc): `"njalma"` (line ~6405)
- Expected: `[nɪjaɫma]` or close; in Möllendorff romanization the form is always `niyalma`, which in IPA is approximately `[njɑɫmɑ]`. The IPA cell `njalma` elides the vowel of the first syllable and collapses `niy-` to `nj-`. This is an IPA-quality issue: it transcribes a phonemic approximation rather than actual pronunciation. Norman (1978 p. 251): the -iy- sequence is a distinct glide+vowel nucleus, not a simple palatal onset.

### 8. 人 — juc IPA — `"nialma"` vs surface `niyalma`; Jurchen form is inconsistent

- Current surface juc: `"niyalma"`, IPA juc: `"nialma"` (lines ~6298 / 6404)
- Expected: Jin Qicong's Jurchen materials do not attest `niyalma`; the Jurchen word for "person" in the Jin-dynasty Jurchen script corpus is closer to `nialma` (without the -y- glide). The *surface* row should therefore read `nialma` (the attested Jurchen form), while the current surface value `niyalma` is the *Manchu* form being retrojected onto Jurchen. The IPA row here is accidentally more accurate than the surface row.

### 9. 心 — juc — `mujilen` is used; Jurchen attestation is uncertain

- Current: `"juc": "mujilen"` / IPA: `"juc": "mud͡ʒilən"` (lines ~7776, 7896)
- Expected: A reconstruction marker or "—"; `mujilen` is the standard *Manchu* word for "heart/mind" (Norman 1978 p. 244). Its Jurchen antecedent is not independently attested in Jin-dynasty inscriptions with this exact form. Jin Qicong's Jurchen dictionary does not list a confirmed `mujilen` entry; the data is projecting the Manchu form back onto Jurchen without marking it as a reconstruction.
- Note: This is a systemic issue — many `juc` cells repeat the Manchu form. For body-part / mind vocabulary this is especially problematic because lexical replacement between Jurchen and Manchu is documented.

### 10. 土 — ptung — `*tuksa` is listed as PTung for 土 (earth/soil) but it means "run"

- Current: `"ptung": "*tuksa"` for 土 (both surface line ~3570 and IPA line ~3668)
- Expected: PTung `*tuksa-` is the Proto-Tungusic verbal root meaning "to run/gallop" (cf. issue #3 for 走). It should not appear as the PTung entry for 土 (earth). The correct PTung root for "earth/soil" is `*na` (cognate with Manchu/Sibe `na`, attested across Evenki `na`, Nanai `na`, etc. — Starostin–Dybo–Mudrak 2003 s.v. PTung \*na).
- Why: The confusion likely arose because Manchu `boihon` (earth/soil) does not derive from `*tuksa`. The PTung value `*tuksa` appears to have been mis-copied from the 走 entry.

### 11. 走 / 土 — ptung — Same reconstruction `*tuksa` / `*tuksa-` appears for two unrelated characters

- Current: Both 走 (run) and 土 (earth) have `"ptung": "*tuksa"` / `"*tuksa-"`
- Expected: Only 走 should carry `*tuksa-`; 土 should have `*na` (see issue #10)
- Why: This duplication is a clear copy-paste error or a lookup-table collision.

### 12. 月 — ptung — `*bēga` / `*beːɡa` notation inconsistency

- Current surface: `"ptung": "*bēga"` / IPA: `"ptung": "*beːɡa"` (lines ~2506, 2589)
- Expected: Consistent use of long-vowel notation. The IPA row uses `eː` (IPA-length mark) while the surface row uses `ē` (macron). The macron notation is the Starostin–Dybo–Mudrak convention for PTung vowel length; the IPA cell should use the IPA convention `eː` throughout. Having both conventions in the same entry for the same proto-form is confusing. (Cross-check: 火's ptung also has this macron/IPA split: `*tōga` vs `*toːɡa`.)

### 13. 火 — ptung — Same macron/IPA split: `*tōga` (surface) vs `*toːɡa` (IPA)

- Current surface: `"ptung": "*tōga"` / IPA: `"ptung": "*toːɡa"` (lines ~3133, 3222)
- Expected: Same as issue #12 — consistent vowel-length notation within each field
- Why: The PTung root for "fire" is given as `*tōga` in the surface row (Starostin macron convention) but `*toːɡa` in the IPA row (IPA length mark). This is the same inconsistency as 月.

### 14. 耳 — ptung — `*sēn` / `*seːn`: same macron/IPA split as above

- Current surface: `"ptung": "*sēn"` / IPA: `"ptung": "*seːn"` (lines ~7173, 7262)
- Expected: Consistent notation. Same systemic notation inconsistency as issues #12–13.
- Note: The PTung root itself (`*sēn` "ear") is correctly cited — Evenki `sin`, Nanai `sin`, etc. (Starostin–Dybo–Mudrak s.v. PTung \*sen) — but the cross-field notation inconsistency is a data quality issue.

### 15. 木 — ptung — `*mō` / `*moː`: macron/IPA split

- Current surface: `"ptung": "*mō"` / IPA: `"ptung": "*moː"` (lines ~3345, 3436)
- Expected: Consistent notation throughout. Same systemic issue as #12–14.

### 16. 水 — ptung — `*mū` / `*muː`: macron/IPA split

- Current surface: `"ptung": "*mū"` / IPA: `"ptung": "*muː"` (lines ~2918, 3009)
- Expected: Consistent notation. The PTung root for "water" is `*mu(ː)` (Evenki `mu`, Nanai `mo`, Sibe/Manchu `muke`); the citation itself is sound but the notation is split across fields.

### 17. 犬 — ptung — `*ŋinda` listed without the expected Tungusic suffix

- Current: `"ptung": "*ŋinda"` (surface and IPA, lines ~4867, 4964)
- Expected: The Proto-Tungusic root for "dog" is reconstructed as `*ŋinakta` or `*ŋinda` (Starostin–Dybo–Mudrak 2003; Benzing 1955 *Die tungusischen Sprachen*). The `-kta` suffix is retained in Evenki `ŋenakta` and Nanai `ŋjanakta`; the shortened `*ŋinda` is the Manchu/Sibe branch form, not the full PTung reconstruction. The data lists the branch-specific reduction as if it were the proto-form. The more conservative PTung reconstruction should be `*ŋinakta`.

### 18. 魚 — ptung — `*sugʒan` / `*suɡd͡ʒan`: notation inconsistency and unusual form

- Current surface: `"ptung": "*sugʒan"` / IPA: `"ptung": "*suɡd͡ʒan"` (lines ~5512, 5602)
- Expected: The standard PTung root for "fish" in Starostin–Dybo–Mudrak is `*sulki` or `*nima-` (cf. Manchu `nimaha`, Evenki `nimakī`). The form `*sugʒan` does not correspond to any widely accepted PTung reconstruction. It resembles the Nanai word `sugdʒan` ("fish" in some Nanai dialects) but that is a *branch-level* Nanaic form, not a PTung proto-form. The IPA variant `*suɡd͡ʒan` disagrees with the surface form by inserting a `d` stop (affricate vs fricative), suggesting an internal data inconsistency as well.
- Reference: Manchu `nimaha` transparently continues PTung `*nima-` (Norman 1978 p. 253); the PTung entry should reflect this etymology.

### 19. 肉 — ptung — `*ulʒə` / `*uld͡ʒə`: fricative vs affricate split between surface and IPA

- Current surface: `"ptung": "*ulʒə"` / IPA: `"ptung": "*uld͡ʒə"` (lines ~8246, 8334)
- Expected: Consistent reconstruction. The IPA row inserts a stop `d` before the affricate (`*uld͡ʒə`) while the surface row has a simple voiced palatal fricative `ʒ` (`*ulʒə`). These are phonetically different: `*uld͡ʒ-` implies a prestopped affricate, while `*ulʒ-` implies a fricative-only onset. The same reconstruction cannot be both. Starostin–Dybo–Mudrak list PTung `*ulge` / `*ulgiyen` (Manchu `yali`) — a form without the `dʒ` element entirely — suggesting the data here uses a non-standard reconstruction. (Manchu `yali` "flesh" is cited in Norman 1978 p. 427.)

### 20. 左 — ptung — `*dʒəgün` / `*d͡ʒəɡyn`: back-vowel inconsistency between surface and IPA

- Current surface: `"ptung": "*dʒəgün"` / IPA: `"ptung": "*d͡ʒəɡyn"` (lines ~9485, 9579)
- Expected: Consistent vowel. The surface row has `ü` (front rounded, Manchu-esque notation) while the IPA row has `y` (correct IPA for front rounded). This is acceptable if `ü` is the romanization convention in the surface field — but the IPA field should unambiguously use `y`, not `yn` which is non-standard. Additionally, the Möllendorff macron `ü` in a PTung reconstruction is unusual; standard PTung notation (Starostin–Dybo–Mudrak) uses `*ü` only where a front rounded vowel is distinctively reconstructed. The PTung root for "left" is not well established; `*dʒəgün` looks like a retrojection from Manchu `hashū` + Mongolian `jegün` rather than a PTung internal reconstruction.

### 21. 右 — ptung — `*aŋān` / `*aŋaːn`: same macron/IPA split

- Current surface: `"ptung": "*aŋān"` / IPA: `"ptung": "*aŋaːn"` (lines ~9709, 9804)
- Expected: Consistent notation. Surface uses macron (`Ān`), IPA uses length mark (`aːn`). Same systemic inconsistency as issues #12–16.

### 22. 行:1 / 行:2 and 去 — ptung — All three share `*ŋənə-` for entirely different semantic functions

- Current: 行:1, 行:2, 去, and 来 all carry `"ptung": "*ŋənə-"` or `"*əmə-"`
- Issue for 行:1 / 行:2 specifically: `*ŋənə-` is the PTung root "to go" (Evenki `ŋene-`, Manchu `gene-` "to go"). Using it identically for both 行:1 (walk/travel) and 行:2 (same character, different reading) collapses a distinction. More critically, Manchu `yabumbi` for 行:1 (travel/walk) derives from PTung `*jabu-`, not from `*ŋənə-`. The PTung entry should distinguish: `yabumbi` ← `*jabu-`; `genembi` ← `*ŋənə-`.

### 23. 見 — sjo surface — `tuwam` is a truncated citation form

- Current surface sjo: `"sjo": "tuwam"` (line ~11599)
- Expected: The Sibe verb for "to see" is `tuwambi` (cognate with Manchu), shortened in spoken Sibe to `tuwa-` in certain contexts; the infinitive citation form in Sibe dictionaries is `tuwambi`. The truncated form `tuwam` (dropping `-bi`) is inconsistent with how other Sibe verbs in the same dataset are cited: e.g. `donjim` (hear), `jem` (eat), `omim` (drink) — all are also truncated identically. This is a systemic *convention* issue: if Sibe verbs drop the `-bi` infinitive suffix uniformly in this dataset, it should be documented; if not, `tuwambi` should be used.

### 24. 坐 — juc — `tehe` is noun/past form, not infinitive

- Current surface juc: `"juc": "tehe"` (line ~12593)
- Expected: Jurchen verb root citation should use the imperfective/present stem. In Manchu, `tembi` is "to sit" (Norman 1978 p. 382). The Jurchen form `tehe` corresponds more closely to a *past participle* or nominalized form ("that which sat / seat") than the verb infinitive. If the intent is to give the Jurchen cognate of Manchu `tembi`, the root should be presented as `te-` or `tembi`. The IPA row correctly gives `texe` (= `tehe` in standard Jurchen), but this still represents a past/perfect stem, not an infinitive.

### 25. 頭 — mnc — `uju` is correct but ptung `*dil` is inconsistent with Manchu etymology

- Current ptung: `"ptung": "*dil"` (surface and IPA, lines ~7597, 7685)
- Expected: PTung `*dil` (Starostin–Dybo–Mudrak) is the reconstruction underlying Evenki `dil` "head." However, Manchu `uju` "head" does NOT derive from `*dil`; it derives from a distinct PTung root `*uʒu` (cf. Evenki `uju`, Nanai `uju`, all Manchu-branch forms). The PTung `*dil` line is shared across the language families but the Manchu branch does not inherit `*dil` — it has `*uʒu` instead. Citing `*dil` as the PTung root for the Manchu/Sibe row is etymologically misleading (Norman 1978 p. 417; Starostin–Dybo–Mudrak PTung #0431).

---

## Summary of systemic patterns

1. **PTung macron vs IPA length-mark split** (issues 12–16, 21): The surface row uses `ē/ō/ū/Ā` while the IPA row uses `eː/oː/uː/aː` for the same PTung reconstruction. This is a global formatting inconsistency across all PTung entries with long vowels.

2. **Jurchen `juc` cells repeating Manchu forms** (issues 9, 24): Several `juc` surface cells carry the Manchu word unmodified rather than an attested Jurchen reconstruction; this conflates two distinct historical stages separated by ~500 years.

3. **IPA cells carrying romanized text, not IPA** (issue 5): The `juc` IPA row for 見 and likely others carry Möllendorff romanization rather than phonetic transcription, inconsistent with all other language IPA fields.

4. **Wrong Manchu lemma for 走** (issue 1): `tukiyembi` "to lift" is not "to run"; this is a hard lexical error affecting the mnc, and the ptung association is consequently wrong too.
