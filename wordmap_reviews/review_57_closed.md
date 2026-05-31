# Wordmap review #57 — Korean phonology & romanization specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a Korean phonologist and romanization specialist whose work centres on the segmental and prosodic phonology of Contemporary Standard Korean (Seoul), the major regional varieties (Gyeongsang/Busan, Pyongan/North, Jeju, and the Yukjin/Yanbian diaspora dialects), and the diachronic stages (Old Korean, Middle Korean, Early Modern Korean). My constant points of reference for this review are Ho-min Sohn, *The Korean Language* (Cambridge, 1999) — especially ch. 7 on the sound system and its treatment of the lax/tense/aspirated three-way stop laryngeal contrast and the post-obstruent tensification rule — together with the National Institute of Korean Language (NIKL) *Revised Romanization of Korean* (2000, rev. 2014) and its companion *표준 발음법* (Standard Pronunciation Rules). For phonetic detail on the Seoul vowel inventory (the ㅓ [ʌ]/ㅗ [o] back-vowel contrast, the ㅐ/ㅔ merger) and on coda neutralisation (평파열음화) and obstruent-clustering I rely additionally on Shin, Kiaer & Cha, *The Sounds of Korean* (Cambridge, 2013) and Lee & Ramsey, *The Korean Language* (SUNY, 2000). The recurring problems below are of three kinds: (a) IPA that fails to apply an obligatory sandhi rule that is already audible in the citation form, (b) aspiration produced by ㅎ-coda + lax-stop coalescence rendered as a tense stop, and (c) a wrong diphthong nucleus. None of these are matters of taste; each is a rule with a citable statement in the works above.

---

## Issues found

### 1. `ko` — good — ㅎ + ㄷ coalescence gives aspirated [tʰ], not tense [t͈]
- **File:** `words/good.js` line 66
- **Current:** `["좋다", "t͡ɕot̚t͈a"]`
- **Expected:** `["좋다", "t͡ɕotʰa"]`
- **Why:** 좋다 ends its first syllable in coda ㅎ /h/. Under 표준 발음법 §12 (격음화 / aspiration), a coda ㅎ in contact with a following lax ㄱ/ㄷ/ㅈ/ㅂ coalesces into the corresponding **aspirated** stop: 좋다 → [조타] [t͡ɕotʰa]. The transcription [t͡ɕot̚t͈a] applies the unrelated post-obstruent **tensification** rule (which is for a real coda stop), but here there is no coda obstruent — the ㅎ and ㄷ fuse into a single [tʰ]. (Sohn 1999 §7.4 on ㅎ-coalescence; Shin et al. 2013 ch. 8.)

---

### 2. `ko_em` — good — same ㅎ + ㄷ → [tʰ] error in Early Modern form
- **File:** `words/good.js` line 562
- **Current:** `["좋다", "tɕotta"]`
- **Expected:** `["좋다", "tɕotʰa"]`
- **Why:** The Early Modern citation form 좋다 has the identical structure and undergoes the identical 격음화 coalescence; the gloss [tɕotta] (geminate/tense) is wrong for the same reason as Issue 1. Aspiration from coda ㅎ + lax stop is well attested across the Early Modern period (Lee & Ramsey 2000, §6 on hangul spelling vs. pronunciation). Expected [tɕotʰa].

---

### 3. `ko` — thanks — post-obstruent tensification of ㅅ not transcribed
- **File:** `words/thanks.js` line 66
- **Current:** `["고맙습니다", "komapsɯmnida"]`
- **Expected:** `["고맙씀니다", "komap̚s͈ɯmnida"]` (IPA `komap̚s͈ɯmnida`)
- **Why:** In 고맙습니다 the coda ㅂ of 맙 is followed by ㅅ. By post-obstruent tensification (경음화; 표준 발음법 §23) the lax ㅅ obligatorily becomes tense [s͈]: 고맙습니다 → [고맙씀니다]. The current IPA omits both the unreleased coda [p̚] and the tensing, giving plain [s]. Compare the sibling `ko_bus` entry on line 68 which does mark [p̚] (`komap̚sɯmnida`) but still misses the tense [s͈]. (Sohn 1999 §7.5.1.)

---

### 4. `ko_kp` — thanks — same missing [p̚] and tense [s͈]
- **File:** `words/thanks.js` line 67
- **Current:** `["고맙습니다", "komapsɯmnida"]`
- **Expected:** IPA `komap̚s͈ɯmnida`
- **Why:** Identical environment to Issue 3 (coda ㅂ + ㅅ). The Pyongan form spells and pronounces the suffix the same way; tensification of ㅅ after an obstruent coda is exceptionless in the standard rule, so the [s] here should be [s͈] and the coda ㅂ should be unreleased [p̚]. (표준 발음법 §23.)

---

### 5. `ko_yb` — thanks — same missing [p̚] and tense [s͈]
- **File:** `words/thanks.js` line 70
- **Current:** `["고맙습니다", "komapsɯmnida"]`
- **Expected:** IPA `komap̚s͈ɯmnida`
- **Why:** The Yukjin/Yanbian form uses the standard -습니다 suffix and undergoes the same obligatory 경음화. As with Issues 3–4, expected [komap̚s͈ɯmnida]. (Sohn 1999 §7.5.1; for the Yanbian variety's retention of standard suffixal sandhi see Lee & Ramsey 2000 ch. 7.)

---

### 6. `ko_jeju` — hello — ㅂ + ㅅ tensification not transcribed in 옵서
- **File:** `words/hello.js` line 69
- **Current:** `["혼저옵서예", "hond͡ʑʌop̚sʌje"]`
- **Expected:** IPA `hond͡ʑʌop̚s͈ʌje`
- **Why:** In 혼저옵서예 the coda ㅂ of 옵 precedes ㅅ in 서, so the ㅅ is tensed to [s͈] exactly as in 고맙습니다 (Issue 3): [옵써] [op̚s͈ʌ]. The coda is correctly unreleased [p̚] here, but the following sibilant is still given as plain [s]; it should be [s͈]. (표준 발음법 §23; the rule applies in Jeju as in the standard — Shin et al. 2013 ch. 8.)

---

### 7. `ko_jeju` — cat — wrong diphthong nucleus in 괭이 (ㅙ/ㅚ→ wɛ, not wa)
- **File:** `words/cat.js` line 69
- **Current:** `["괭이", "kwaŋi"]`
- **Expected:** `["괭이", "kwɛŋi"]`
- **Why:** The medial of 괭 is ㅙ (or, in older spelling, ㅚ realised as the glide-vowel sequence), whose nucleus is the front vowel ㅐ [ɛ], giving [wɛ], not the open back [a]. So 괭이 = [kwɛŋi]. The transcription [kwaŋi] substitutes ㅘ [wa] for ㅙ [wɛ]. (Sohn 1999 §7.3 on the rounded on-glide diphthongs ㅘ/ㅙ/ㅚ; Shin et al. 2013 ch. 5.)

---

### 8. `ko_em` — eat — post-obstruent tensification of ㄷ missing
- **File:** `words/eat.js` line 556
- **Current:** `["먹다", "mʌkta"]`
- **Expected:** IPA `mʌk̚t͈a`
- **Why:** In 먹다 the coda ㄱ of 먹 precedes lax ㄷ, which is obligatorily tensed: 먹다 → [먹따] [mʌk̚t͈a]. The modern `ko` entry (water/eat line 66) correctly shows `mʌk̚t͈a`; the Early Modern `ko_em` gloss `mʌkta` omits both the unreleased coda and the tensing. Post-obstruent tensification is an old, well-established rule and applies to this Early Modern citation form too. (Sohn 1999 §7.5.1; Lee & Ramsey 2000 §6.)

---

### 9. `ko_mid` — eat — Middle Korean form should also show tensing / coda neutralisation marked
- **File:** `words/eat.js` line 552
- **Current:** `["먹다", "mʌk.ta"]`
- **Expected:** IPA `mʌk̚.t͈a` (or at minimum `mʌk̚.ta`)
- **Why:** Even read as a syllabified Middle Korean citation, the coda ㄱ is an unreleased [k̚] in the cluster /kt/, which the bare `k` does not signal; and post-obstruent tensification of the following ㄷ is reconstructable for this stage. At a minimum the coda should be marked unreleased [k̚]. (Lee & Ramsey 2000 ch. 6 on MK obstruent clusters.)

---

### 10. `ko` / `ko_kp` / `ko_bus` / `ko_jeju` / `ko_yb` — water — second-element is romanisation-coincident, ㅏ-free but bracket-free; verify RR vs IPA convention
- **File:** `words/water.js` lines 66–70
- **Current:** `["물", "mul"]` (×5, identical across all five)
- **Expected:** IPA `mul` is acceptable **as IPA** (lax ㅁ + ㅜ + ㄹ), but note it is **not** Revised Romanization, which would also be ⟨mul⟩ here only by coincidence; the same slot for 불 (`fire`) is `pul`, which is **IPA** ([p] for lax word-initial ㅂ) and **not** RR (RR = ⟨bul⟩).
- **Why:** This is flagged for consistency auditing, not because [mul] is phonetically wrong. The dataset's IPA slot for word-initial lax ㅂ correctly uses voiceless [p] (`pul`, `pal`-type), which proves the slot is IPA and not RR. Reviewers should confirm no downstream tool re-reads these as Revised Romanization, because for ㅂ/ㄷ/ㅈ/ㄱ-initial words the IPA ([p t tɕ k]) and RR (⟨b d j g⟩) diverge. (NIKL Revised Romanization §1; Sohn 1999 §7.1 on the lax stop being voiceless word-initially.)

---

### 11. `ko_kp` — fire — word-initial lax ㅂ correctly voiceless; cross-check vowel ㅜ length
- **File:** `words/fire.js` line 67
- **Current:** `["불", "pul"]`
- **Expected:** `["불", "pul"]` (IPA is correct; no change to segments)
- **Why:** Recorded as a *confirmation* (no defect in the stop): word-initial ㅂ is the voiceless lax [p], correctly transcribed. I flag only that none of the monosyllabic CVC entries (물/불/달/손/눈) carry the length or pitch-accent information that distinguishes Pyongan/North and Gyeongsang varieties from Seoul; if the dataset intends to capture dialect, the `ko_kp` and `ko_bus` rows are currently segmentally identical to `ko` and add no information. (Sohn 1999 §7.6 on dialectal pitch-accent in Gyeongsang/Hamgyong.)

---

### 12. `ko_bus` — eat — Gyeongsang 묵어 vowel raising captured, but intervocalic ㄱ voicing fine
- **File:** `words/eat.js` line 68
- **Current:** `["묵어", "muɡʌ"]`
- **Expected:** `["묵어", "muɡʌ"]` (segments correct)
- **Why:** Confirmation entry: the Busan/Gyeongsang lexical form 묵어 with ㅜ [u] and intervocalic ㄱ → [ɡ] is correct. I note only that Gyeongsang is a pitch-accent dialect and the citation form would canonically carry a H or HL melody; if tone is in scope it is absent here. No segmental change required. (Sohn 1999 §7.6.)

---

### 13. `ko_jeju` — drink — 마셩 connective with ㅕ glide vowel is correct; sun/ㅐ caution
- **File:** `words/drink.js` line 69
- **Current:** `["마셩", "maɕjʌŋ"]`
- **Expected:** `["마셩", "maɕjʌŋ"]` (segments correct)
- **Why:** Confirmation: ㅅ before the [j]-glide of ㅕ is correctly palatalised to [ɕ], and the Jeju connective -엉/-앙 is rendered [ʌŋ]. Filed alongside a broader caution: the `sun` rows transcribe 해 as [hɛ] with open-mid [ɛ]; in present-day Seoul the ㅐ/ㅔ contrast is merged to a single [e], so a strictly contemporary transcription would be [he], while [hɛ] reflects the conservative/older norm. Pick one convention consistently across ㅐ-words. (Shin et al. 2013 ch. 5 on the ㅐ/ㅔ merger; Sohn 1999 §7.2.)

---

### 14. `ko_mid` — moon — Middle Korean ㆍ (arae-a) nucleus value
- **File:** `words/moon.js` line 558
- **Current:** `["ᄃᆞᆯ", "tʌl"]`
- **Expected:** `["ᄃᆞᆯ", "tʌl"]` → keep, but standardise ㆍ as [ʌ]/[ɐ] consistently with `ko_mid` ᄒᆞ나 etc.
- **Why:** The Middle Korean letter ㆍ (아래아) is reconstructed as a low-mid back unrounded vowel, commonly given as [ʌ] or [ɐ]. The value [ʌ] used here is defensible, but the same morpheme-internal ㆍ is elsewhere transcribed inconsistently (cf. `one` `ko_mid` ᄒᆞ나 = `hʌna`, `mother`/`father` use plain MK forms). The request is consistency: fix on one symbol for ㆍ across all `ko_mid` rows. (Lee & Ramsey 2000 §5 on the MK vowel system and the value of ㆍ.)

---

### 15. `oko` — moon — reconstruction `*tʌɾh` mixes a final aspiration diacritic into the IPA
- **File:** `words/moon.js` line 559
- **Current:** `["達", "*tʌɾh"]`
- **Expected:** `["達", "*tʌrh"]` or `["達", "*tʌɾ"]` — disambiguate the trailing ⟨h⟩
- **Why:** The trailing ⟨h⟩ in `*tʌɾh` is the conventional notation for a Middle/Old Korean post-coda /h/ (the ㅎ-final or ㅎ-종성체언 class), not an IPA segment following the flap [ɾ]. As written it reads as a flap immediately followed by [h], which is phonotactically odd as an Old Korean coda. If the intent is the ㅎ-final stem, it should be flagged as a morphophonemic ⟨h⟩ (e.g. `*tʌr-h`); if it is meant phonetically it needs justifying. The same ⟨…h⟩ convention recurs in `one` `oko` `*hʌnah` and `good` `oko` `*tjoh`. (Lee & Ramsey 2000 §4 on Old Korean ㅎ-final nouns; reconstructions after Vovin.)

---

### 16. `ko_em` — hello — 안녕하시오 IPA syllabified but ㅎ not weakened intervocalically
- **File:** `words/hello.js` line 556
- **Current:** `["안녕하시오", "annjʌŋ.ha.si.o"]`
- **Expected:** IPA `annjʌŋ.(ɦ)a.ɕi.o` — at minimum 시 → [ɕi]
- **Why:** Two points. (a) In 시 the ㅅ precedes the high front vowel ㅣ and is obligatorily palatalised to [ɕ]; the gloss `si` should be `ɕi` (compare `drink` `ko` 마시다 = `maɕida`, correctly palatalised). (b) The ㅎ of 하 is intervocalic/post-sonorant (after [ŋ]) and is typically voiced/weakened to [ɦ] in connected speech; `ha` is acceptable as a careful citation but inconsistent with the dataset's own palatalisation of ㅅ. The ㅅ→[ɕ] fix is the firm one. (표준 발음법; Sohn 1999 §7.4 on ㅅ-palatalisation before /i, j/.)

---

### 17. `ko_kp` — hello — 안녕하십니까 nasalisation correct; ㅅ→[ɕ] confirmed
- **File:** `words/hello.js` line 67
- **Current:** `["안녕하십니까", "annjʌŋhaɕimnikka"]`
- **Expected:** `["안녕하십니까", "annjʌŋhaɕimnikka"]` (segments correct)
- **Why:** Confirmation entry: 십니까 correctly shows (a) ㅅ→[ɕ] before ㅣ and (b) coda ㅂ + ㄴ → nasal assimilation [mn] (비음화), giving [ɕimnikka]. This is exactly the analysis the `ko_em` 안녕하시오 row (Issue 16) fails to apply to its own ㅅ. Included as the positive control demonstrating Issue 16 is a real inconsistency, not a stylistic choice. (표준 발음법 §18 비음화; Sohn 1999 §7.5.)

---

### 18. `ko` — heart — 마음 transcription correct, but ㅡ value note
- **File:** `words/heart.js` line 66
- **Current:** `["마음", "maɯm"]`
- **Expected:** `["마음", "maɯm"]` (segments correct)
- **Why:** Confirmation: ㅡ as the close back-central unrounded [ɯ] is correct and consistent. I flag only for the diachronic rows: `ko_mid` ᄆᆞᅀᆞᆷ = `mʌzʌm` correctly preserves the Middle Korean ⟨ㅿ⟩ [z], a value that disappears by Early Modern Korean — confirming the dataset's MK/EM staging is internally sound here. No change. (Lee & Ramsey 2000 §5 on the loss of ⟨ㅿ⟩ [z] and ⟨ㆍ⟩.)

---

*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*

---

## Worker round-1 response (作業者round-1)

I verified every issue against the live data (note: review line numbers were slightly off from the current files; I located each entry by its `ko*`/`oko` key). The reviewer's three rule classes (ㅎ-coalescence 격음화, post-obstruent tensification 경음화, diphthong nucleus) are all citable obligatory rules. IPA-only fixes applied; surface orthography left unchanged per project convention.

**1. `good` `ko` 좋다 [t͡ɕot̚t͈a]→[t͡ɕotʰa]** — applied (applied by orchestrator this round). ㅎ-coda + lax ㄷ coalesces to aspirated [tʰ] (격음화, 표준발음법 §12); the tense-stop transcription was a misapplied tensification. Clear error. IPA field only.

**2. `good` `ko_em` 좋다 [tɕotta]→[tɕotʰa]** — applied (applied by orchestrator this round). Same 격음화 coalescence; geminate/tense was wrong. IPA field only.

**3. `thanks` `ko` 고맙습니다 [komapsɯmnida]→[komap̚s͈ɯmnida]** — applied (applied by orchestrator this round). Coda ㅂ + ㅅ → unreleased [p̚] + tense [s͈] (경음화 §23). I applied the IPA fix only; I did NOT change the surface spelling to the reviewer's phonetic respelling 고맙씀니다, because standard orthography stays 고맙습니다 (project rule: do not alter surface orthography for a sandhi that is already captured in IPA).

**4. `thanks` `ko_kp` 고맙습니다 →[komap̚s͈ɯmnida]** — applied (applied by orchestrator this round). Same environment as #3, IPA only.

**5. `thanks` `ko_yb` 고맙습니다 →[komap̚s͈ɯmnida]** — applied (applied by orchestrator this round). Same environment as #3, IPA only.

**6. `hello` `ko_jeju` 혼저옵서예 [hond͡ʑʌop̚sʌje]→[hond͡ʑʌop̚s͈ʌje]** — applied (applied by orchestrator this round). ㅂ-coda already unreleased; only the following ㅅ→[s͈] tensification (경음화 §23) was missing. IPA only.

**7. `cat` `ko_jeju` 괭이 [kwaŋi]→[kwɛŋi]** — applied (applied by orchestrator this round). The medial of 괭 is ㅙ [wɛ]; [kwaŋi] wrongly uses ㅘ [wa]. Clear diphthong-nucleus error. IPA only.

**8. `eat` `ko_em` 먹다 [mʌkta]→[mʌk̚t͈a]** — applied (applied by orchestrator this round). ㄱ-coda + lax ㄷ → unreleased [k̚] + tense [t͈] (경음화); matches the modern `ko` entry which already has `mʌk̚t͈a`. IPA only.

**9. `eat` `ko_mid` 먹다 [mʌk.ta]→[mʌk̚.ta]** — applied (applied by orchestrator this round). Applied only the reviewer's explicit firm floor: mark the coda ㄱ as unreleased [k̚] in the /kt/ cluster (kept the syllable boundary). I did NOT add the tense [t͈]: the reviewer themselves calls MK tensification merely "reconstructable", so for this diachronic citation I hold the speculative tensing and apply only the uncontroversial unreleased-coda diacritic.

**10. `water` `ko`/dialects 물 [mul] ×5** — held (no defect). Reviewer explicitly states this is a consistency-audit flag, "not because [mul] is phonetically wrong." The IPA-vs-RR concern is a downstream-tooling question, not a data error. No change.

**11. `fire` `ko_kp` 불 [pul]** — held (confirmation; reviewer requests no segment change). The pitch-accent/length absence is a dataset-scope decision, not a local error.

**12. `eat` `ko_bus` 묵어 [muɡʌ]** — held (confirmation; "segments correct"). Tone scope is a system-level decision.

**13. `drink` `ko_jeju` 마셩 [maɕjʌŋ]** — held (confirmation; "segments correct"). The ㅐ/ㅔ merger ([hɛ] vs [he]) raised here is a corpus-wide convention choice, not a single-entry bug; out of scope for a local fix.

**14. `moon` `ko_mid` ㆍ value [ʌ]** — held (already consistent). I audited all `ko_mid` arae-a rows (love sʌɾaŋ, heart mʌzʌm, moon tʌl, hello hʌ, thanks sʌp, one hʌna): every ㆍ is already [ʌ]. The requested consistency already holds; no change needed.

**15. `moon` `oko` `*tʌɾh`** — held (deliberate convention). The trailing ⟨h⟩ is the dataset's morphophonemic ㅎ-final (ㅎ-종성체언) marker, applied consistently across `one` `oko` `*hʌnah` and `good` `oko` `*tjoh`. It is an internally consistent reconstruction convention, not a local error; changing one would desync it from the sibling oko ㅎ-final reconstructions. Hold with rationale.

**16. `hello` `ko_em` 안녕하시오 [annjʌŋ.ha.si.o]→[annjʌŋ.ha.ɕi.o]** — applied (applied by orchestrator this round). ㅅ→[ɕ] before /i/ is obligatory palatalisation and is done elsewhere in the dataset (drink `ko` 마시다 maɕida; hello `ko_kp` haɕimnikka). Applied the firm ㅅ→[ɕ] fix only; left ㅎ→[ɦ] intervocalic weakening unchanged (reviewer marks it as an acceptable careful-citation [h], not the firm fix). IPA only.

**17. `hello` `ko_kp` 안녕하십니까 [annjʌŋhaɕimnikka]** — held (confirmation; positive control for #16).

**18. `heart` `ko` 마음 [maɯm]** — held (confirmation; MK/EM staging confirmed sound).

Summary: 9 IPA-only fixes applied (#1–9 except none skipped, plus #16; #9 partial). 9 items held as confirmations / convention choices / already-consistent (#10–15, #17–18), none of which the reviewer demanded a change to.

---

## Reviewer round-2 response (再評価 round-2)

I re-verified every claimed fix against the live per-word data files. Findings below; each value quoted was read directly from `words/*.js`.

### Applied fixes — VERIFIED in live data
- **#1 `good` `ko` 좋다** → `words/good.js:66` = `["좋다", "t͡ɕotʰa"]` ✓ accept. 격음화 coalescence correctly rendered as aspirated [tʰ].
- **#2 `good` `ko_em` 좋다** → `words/good.js:556` = `["좋다", "tɕotʰa"]` ✓ accept.
- **#3 `thanks` `ko` 고맙습니다** → `words/thanks.js:66` = `["고맙습니다", "komap̚s͈ɯmnida"]` ✓ accept. Unreleased [p̚] + tense [s͈] both present; surface orthography correctly left as standard 고맙습니다 (my "고맙씀니다" was an illustrative phonetic respelling, not a demand — worker's read is right).
- **#4 `thanks` `ko_kp`** → `words/thanks.js:67` = `komap̚s͈ɯmnida` ✓ accept.
- **#5 `thanks` `ko_yb`** → `words/thanks.js:70` = `komap̚s͈ɯmnida` ✓ accept.
- **#6 `hello` `ko_jeju` 혼저옵서예** → `words/hello.js:69` = `["혼저옵서예", "hond͡ʑʌop̚s͈ʌje"]` ✓ accept.
- **#7 `cat` `ko_jeju` 괭이** → `words/cat.js:69` = `["괭이", "kwɛŋi"]` ✓ accept. ㅙ nucleus [wɛ] correct.
- **#8 `eat` `ko_em` 먹다** → `words/eat.js:547` = `["먹다", "mʌk̚t͈a"]` ✓ accept.
- **#9 `eat` `ko_mid` 먹다** → `words/eat.js:543` = `["먹다", "mʌk̚.ta"]` △ accept-as-partial. The unreleased [k̚] floor is applied; the worker's choice to withhold the merely-"reconstructable" tense [t͈] for a diachronic MK citation is exactly the conservative call I left open to them. Defensible; not held against the file.
- **#16 `hello` `ko_em` 안녕하시오** → `words/hello.js:547` = `["안녕하시오", "annjʌŋ.ha.ɕi.o"]` ✓ accept. ㅅ→[ɕ] before /i/ applied; ㅎ→[ɦ] correctly left as careful-citation [h].

### Held items — adjudicated
- **#10 `water` 물 ×5** ✓ accept hold. Explicitly a downstream-tooling consistency audit, no data error.
- **#11 `fire` `ko_kp` 불** ✓ accept hold. Confirmation; pitch/length is system scope.
- **#12 `eat` `ko_bus` 묵어** ✓ accept hold. `words/eat.js:68` = `["묵어", "muɡʌ"]`, segments correct.
- **#13 `drink` `ko_jeju` 마셩** ✓ accept hold. Confirmation; ㅐ/ㅔ merger is a corpus-wide convention, not a local bug.
- **#14 `moon` `ko_mid` ㆍ value** ✓ accept hold — and VERIFIED: across all ko_mid arae-a rows (`sun` hʌj, `love` sʌ.ɾaŋ, `thanks` sʌp, `one` hʌna, `heart` mʌzʌm, `hello` hʌ, `moon` tʌl) ㆍ is uniformly [ʌ]. Consistency genuinely holds.
- **#15 `moon` `oko` *tʌɾh** ✓ accept hold — and VERIFIED: the ㅎ-final ⟨h⟩ convention is consistent across `moon` *tʌɾh, `one` *hʌnah, `good` *tjoh. Internally coherent morphophonemic marker.
- **#17 `hello` `ko_kp`** ✓ accept hold. Positive control, `annjʌŋhaɕimnikka` correct.
- **#18 `heart` `ko` 마음** ✓ accept hold. `maɯm` correct; MK ⟨ㅿ⟩ [z] staging sound.

### NEW issue (round-2)
- **N1. `thanks` `ko_bus` 고맙습니다 — same ㅂ+ㅅ 경음화 NOT applied.** `words/thanks.js:68` = `["고맙습니다", "komap̚sɯmnida"]` — coda [p̚] is marked but the following ㅅ is still plain [s]. The Gyeongsang/Busan citation uses the identical standard -습니다 suffix, so by the exceptionless post-obstruent tensification rule (표준 발음법 §23) it must be [s͈], exactly as in the now-fixed `ko`/`ko_kp`/`ko_yb` siblings. I in fact flagged this very row in Issue 3 ("the sibling `ko_bus` entry … still misses the tense [s͈]"), but the round-1 fix touched ko/ko_kp/ko_yb and skipped ko_bus, leaving the family internally inconsistent. **Action: `words/thanks.js:68` → `["고맙습니다", "komap̚s͈ɯmnida"]` (IPA only).** This is a clear, in-scope, single-token error, not a scope/convention question.

### Scorecard
- Verified-applied: 10/10 claimed fixes are genuinely present in live data (#1–9, #16). No phantom fixes.
- Holds accepted: 8/8 (#10–15, #17–18) are defensible confirmations / convention / system-scope choices.
- New actionable: 1 (N1).

Because N1 is a concrete, defensible, one-token IPA error in live data that follows directly from the reviewer's own already-stated rule (and was named in Issue 3), the file cannot close this round.

**File status: OPEN** — dev team must apply: `words/thanks.js:68` `ko_bus` → `["고맙습니다", "komap̚s͈ɯmnida"]` (tense [s͈]), then this file can close.

---

## Worker round-2 response (作業者round-2)

I re-verified the live data for the single open item N1 and the previously-held items. Quoted strings read directly from `words/thanks.js`.

**N1. `thanks` `ko_bus` 고맙습니다 [komap̚sɯmnida]→[komap̚s͈ɯmnida]** — applied (applied by orchestrator this round). Verified `words/thanks.js:68` = `ko_bus: ["고맙습니다", "komap̚sɯmnida"]`: coda [p̚] already marked, but the following lax ㅅ is still plain [s]. The Busan/Gyeongsang citation uses the identical standard -습니다 suffix, so post-obstruent tensification (경음화, 표준 발음법 §23) obligatorily tenses ㅅ → [s͈], exactly as in the already-fixed `ko`/`ko_kp`/`ko_yb` siblings (all `komap̚s͈ɯmnida`). This was named in Issue 3 and skipped by the round-1 batch. Clear, in-scope, single-token IPA error. IPA field only; surface orthography unchanged.

All other items (#1–9, #16 applied in round-1 and reviewer-verified; #10–15, #17–18 held as confirmations / convention / system-scope, reviewer-accepted) require no further action. With N1 applied, the `ko_bus` family is internally consistent and the file can close.

---

## Reviewer round-3 response (再評価 round-3)

I re-verified the single round-2 open item (N1) plus the full ㅂ+ㅅ 경음화 family and a spot-check of the previously-accepted fixes, reading each value directly from the live `words/*.js`.

### N1 — VERIFIED FIXED
- **N1 `thanks` `ko_bus` 고맙습니다** → `words/thanks.js:68` = `["고맙습니다", "komap̚s͈ɯmnida"]` ✓ accept. The lax ㅅ is now tense [s͈] after the unreleased coda [p̚], matching the obligatory post-obstruent tensification (경음화, 표준 발음법 §23). The whole -습니다 family is now internally consistent in live data:
  - `ko` (`:66`) `komap̚s͈ɯmnida` ✓
  - `ko_kp` (`:67`) `komap̚s͈ɯmnida` ✓
  - `ko_bus` (`:68`) `komap̚s͈ɯmnida` ✓
  - `ko_yb` (`:70`) `komap̚s͈ɯmnida` ✓
  - `ko_jeju` (`:69`) `고맙수다` `komap̚suda` — correctly NOT tensed: the Jeju form has no ㅅ-after-obstruent-coda environment (수다 is intervocalic), so plain [s] is right. Good that this row was left untouched.

### Re-confirmation of earlier accepted fixes (spot-check against live data)
- `good` `ko` `:66` `t͡ɕotʰa` ✓; `good` `ko_em` `:556` `tɕotʰa` ✓ (격음화).
- `cat` `ko_jeju` `:69` `kwɛŋi` ✓ (ㅙ nucleus [wɛ]).
- `eat` `ko_em` `:547` `mʌk̚t͈a` ✓; `ko_mid` `:543` `mʌk̚.ta` ✓ (unreleased-coda floor, tense [t͈] conservatively withheld for MK — accepted as a defensible diachronic call).
- `hello` `ko_jeju` `:69` `hond͡ʑʌop̚s͈ʌje` ✓; `ko_em` `:547` `annjʌŋ.ha.ɕi.o` ✓ (ㅅ→[ɕ] before /i/).
- `moon` `oko` `:559` `*tʌɾh` and `ko_mid` `:558` `tʌl` ✓ (ㅎ-final morphophonemic convention held, internally consistent).
- `heart` `ko` `:66` `maɯm`, `ko_mid` `:552` `mʌzʌm` ✓ (MK ⟨ㅿ⟩ [z] staging sound).

### Held items
All round-2 holds (#10–15, #17–18) stand as accepted: downstream-tooling consistency audit (#10), dataset-scope pitch/length/tone decisions (#11, #12), corpus-wide ㅐ/ㅔ merger convention (#13), already-uniform ㆍ=[ʌ] (#14), morphophonemic ㅎ-final marker (#15), positive controls (#17, #18). None demand a data change.

### New issues
None. No new errors surfaced during verification.

### Scorecard
- N1: VERIFIED FIXED in live data (1/1).
- All prior applied fixes (#1–9, #16): re-confirmed present, no regressions, no phantom fixes.
- Held items (#10–15, #17–18): all defensible, accepted.
- New actionable issues: 0.

The one concrete open item from round-2 is now correctly applied and verified, the -습니다 family is internally consistent, and every remaining item is an accepted convention/scope/confirmation. There is nothing left for the dev team to address.

**File status: CLOSED** — nothing left to address.
