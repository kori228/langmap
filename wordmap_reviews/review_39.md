# Wordmap review #39 — Southern African Nguni Bantu specialist

## Reviewer self-introduction

I am a specialist in the Southern African Nguni Bantu languages, with a focus on the phonological typology of click consonants, Nguni tonal systems and depressor-consonant phenomena, and noun-class morphology. Primary reference sources for this review: Doke (1954) *The Southern Bantu Languages* (IAI); Wright (1992) "Clicks in Khoisan and Bantu" in *Language and History in Africa*; Pahl, Bokwe & Aitchison (1989) *Xhosa Dictionary* (Lovedale Press); Doke, Malcolm, Sikakana & Vilakazi (1990) *Zulu–English Dictionary* (Witwatersrand University Press); Rycroft (1981) *A Concise SiSwati Dictionary* (Van Schaik); Khumalo (1992) "Phonetic and Phonological Description of isiNgqumo" (unpublished; SOAS); Cope (1959) *Zulu Prose* (Pietermaritzburg); Lanham & Prinsloo (1978) *Language and Communication Studies in South Africa*.

Languages covered in this review:
- **zu** — isiZulu (Zulu)
- **xh** — isiXhosa (Xhosa)
- **ssw** — siSwati / siSwazi (Swati/Swazi, ISO 639-1: ss; ISO 639-3: ssw)
- **nbl** — isiNdebele (Southern Ndebele, South African; ISO 639-3: nbl)

---

## Issues found

### Issue 1. `zu` — one — IPA [kunje] misrepresents the palatal nasal

- **File:** `words/one.js` line 150
- **Current:** `["kunye", "kunje"]`
- **Expected:** `["kunye", "kuɲe"]`
- **Why:** The orthographic sequence ⟨ny⟩ in isiZulu encodes the palatal nasal /ɲ/. The IPA transcription [kunje] instead shows [n] + the palatal approximant [j], which is a completely different sequence — a coronal nasal followed by a glide, rather than a single palatal nasal. The parallel Swati entry on the same word correctly uses [kuɲe], confirming that [kuɲe] is the intended — and correct — transcription. (Doke 1954: §3.22 on palatal nasals in Nguni.)

---

### Issue 2. `zu` — eat — implosive [ɗ] is wrong for the Zulu lateral affricate cluster /dl/

- **File:** `words/eat.js` line 150
- **Current:** `["ukudla", "ukuɗla"]`
- **Expected:** `["ukudla", "ukuɗla"]` → correct symbol needed: `["ukudla", "ukuᵈɮa"]` or `["ukudla", "ukudɮa"]`
- **Why:** The Zulu sequence ⟨dl⟩ is a prenasalised or plain voiced alveolar lateral affricate [dɮ] (IPA: /dɮ/). The IPA symbol [ɗ] is the *implosive* bilabial (or dental) stop — a completely different place and manner of articulation. The same error propagates to **ssw** (eat) and **nbl** (eat). The lateral affricate is a defining feature of Nguni consonantism (Doke 1954: §3.14). The correct IPA is [dɮ] for the voiced lateral affricate, realised in Zulu as the orthographic ⟨dl⟩ cluster. Using [ɗ] conflates this with an implosive, which Zulu does not phonemically possess.

---

### Issue 3. `ssw` — eat — same implosive [ɗ] error as Issue 2

- **File:** `words/eat.js` line 797
- **Current:** `["kudla", "kuɗla"]`
- **Expected:** `["kudla", "kudɮa"]`
- **Why:** Swati ⟨dl⟩ is likewise the voiced lateral affricate [dɮ], not an implosive. The error is identical to Issue 2 in Zulu. Swati preserves the lateral affricate robustly (Rycroft 1981: xvi). Additionally, the infinitive prefix in Swati is **ku-** (not **uku-** as in Zulu), and the display form "kudla" is correctly shortened relative to Zulu "ukudla" — the IPA should follow at [kudɮa].

---

### Issue 4. `nbl` — eat — same implosive [ɗ] error as Issue 2

- **File:** `words/eat.js` line 798
- **Current:** `["ukudla", "ukuɗla"]`
- **Expected:** `["ukudla", "ukudɮa"]`
- **Why:** Southern Ndebele ⟨dl⟩ is also the voiced lateral affricate [dɮ]. The implosive [ɗ] is erroneous for the same reason as Issues 2–3.

---

### Issue 5. `zu` — hand — /dl/ lateral affricate missing in IPA

- **File:** `words/hand.js` line 150
- **Current:** `["isandla", "isandla"]`
- **Expected:** `["isandla", "isandɮa"]`
- **Why:** The word-final ⟨dla⟩ contains the voiced lateral affricate [dɮ] (as in uku**dl**a). The IPA transcription "isandla" writes this as [dl], which is not a recognised IPA symbol — [d] is an alveolar stop and [l] is a lateral approximant; their sequence does not represent the affricate. The IPA should render this cluster as [dɮ]. The Xhosa entry correctly applies [ɬ] to the lateral fricative in its version, acknowledging the laterals in this word, but Zulu's lateral is affricated [dɮ], not plain fricative [ɬ]. Compare Swati "sandla" with the same issue.

---

### Issue 6. `ssw` — hand — noun-class prefix missing; lateral affricate missing in IPA

- **File:** `words/hand.js` line 797
- **Current:** `["sandla", "sandla"]`
- **Expected:** `["sandla", "sandɮa"]` (and display form arguably should be `"sandla"` — borderline, see note)
- **Why:** The Swati word for 'hand' is *sandla* (class 7/8: si-/ti-; the noun is *sandla* with the class 7 prefix *si-* often elided in informal citation). Even if the citation form without prefix is accepted, the IPA "sandla" makes the same error as Issue 5: the ⟨dla⟩ ending should be [dɮa], not [dla].

---

### Issue 7. `nbl` — hand — lateral affricate missing in IPA

- **File:** `words/hand.js` line 798
- **Current:** `["isandla", "isandla"]`
- **Expected:** `["isandla", "isandɮa"]`
- **Why:** Identical error to Issues 5–6. Southern Ndebele also has the voiced lateral affricate [dɮ] in *isandla*. The IPA [dl] is not a recognised symbol. (Khumalo 1992 notes [dɮ] is shared across Nguni varieties.)

---

### Issue 8. `zu` — good — IPA [kuɬe] misrepresents the orthographic ⟨hle⟩

- **File:** `words/good.js` line 150
- **Current:** `["kuhle", "kuɬe"]`
- **Expected:** `["kuhle", "kuɬe"]` — the symbol is correct but the phonological analysis is incomplete
- **Why:** The transcription [kuɬe] maps ⟨hl⟩ → [ɬ] (voiceless lateral fricative), which is correct in isolation. However, the word *kuhle* includes an initial tonal prefix *ku-* (subjunctive / infinitive form of class 15) and the root *-hle*. The root vowel /e/ in *-hle* is a mid vowel realised as [e] in open syllables. More importantly, *-hle* is a **depressor** environment: ⟨hl⟩ is a voiceless lateral fricative (not a depressor), so tone on the root syllable is high. No tonal diacritics are present anywhere in the Nguni transcriptions — this is a systemic omission discussed as a global issue below (Issue 20). The specific IPA symbol [ɬ] for ⟨hl⟩ is correctly used here and in the Swati and Ndebele entries for *kuhle*.

---

### Issue 9. `zu` — thanks — [ɓ] misapplied; [j] should not appear word-internally for ⟨y⟩

- **File:** `words/thanks.js` line 150
- **Current:** `["ngiyabonga", "ŋijaɓoŋɡa"]`
- **Expected:** `["ngiyabonga", "ŋijabɔŋɡa"]`
- **Why:** Two sub-errors:
  (a) The consonant ⟨b⟩ in *ngiyabonga* is a plain voiced bilabial stop [b], not the bilabial implosive [ɓ]. Zulu does not have phonemic implosives; ⟨b⟩ is realised as [b] or weakly fricativised [β] intervocalically, but never as an implosive [ɓ]. The IPA symbol [ɓ] is borrowed from languages like Hausa or Sindhi where true implosives occur, and its use here is an error. The same problem appears in **ssw** thanks (Issue 10) and **zu** hello (Issue 11).
  (b) The vowel of *-bonga* contains the open-mid back [ɔ], not [o]. Nguni /o/ in Bantu inherited noun-class contexts is typically [ɔ] in open syllables in present-day isiZulu. (Cope 1959: §4 on Zulu vowel quality.)

---

### Issue 10. `ssw` — thanks — same implosive [ɓ] error

- **File:** `words/thanks.js` line 797
- **Current:** `["ngiyabonga", "ŋijaɓoŋɡa"]`
- **Expected:** `["ngiyabonga", "ŋijabɔŋɡa"]`
- **Why:** Swati also uses a plain voiced bilabial stop [b] in *-bonga*; the implosive [ɓ] is erroneous for the same reason as Issue 9. Swati does not have implosives (Rycroft 1981: §2.3).

---

### Issue 11. `zu` — hello — implosive [ɓ] again; and vowel quality

- **File:** `words/hello.js` line 150
- **Current:** `["sawubona", "sawuɓona"]`
- **Expected:** `["sawubona", "sawubɔna"]`
- **Why:** The greeting *sawubona* contains the same root *-bona* ('see'). As in Issue 9, ⟨b⟩ here is a plain [b], not implosive [ɓ]. Additionally, the /o/ vowel in *-bona* is open-mid [ɔ] in Zulu phonology, not close-mid [o]. The same error carries into **ssw** hello.

---

### Issue 12. `ssw` — hello — implosive [ɓ] error (parallel to Issue 11)

- **File:** `words/hello.js` line 797
- **Current:** `["sawubona", "sawuɓona"]`
- **Expected:** `["sawubona", "sawubɔna"]`
- **Why:** Identical error to Issue 11. Swati *sawubona* uses plain [b], and the vowel is open-mid [ɔ].

---

### Issue 13. `nbl` — father — implosive [ɓ] applied to both syllables

- **File:** `words/father.js` line 798
- **Current:** `["ubaba", "uɓaɓa"]`
- **Expected:** `["ubaba", "ubaːba"]` or `["ubaba", "ubaba"]`
- **Why:** Southern Ndebele *ubaba* ('father') uses a plain bilabial stop [b] in both syllables, not implosives [ɓ]. The double implosive [uɓaɓa] is erroneous. Additionally, the first stressed syllable *ba-* in *ubaba* typically shows length [baː] due to penultimate lengthening, which is missing. (The noun prefix is *u-* class 1a, and the root *-baba* carries penultimate vowel lengthening in isolation form.)

---

### Issue 14. `xh` — fire — noun-class mismatch: wrong class prefix

- **File:** `words/fire.js` line 278
- **Current:** `["umlilo", "umlilo"]`
- **Expected:** display correct; IPA should be `["umlilo", "umlilɔ"]`
- **Why:** The Xhosa word *umlilo* is class 3 (um-/imi-), which is correct orthographically. However, the IPA [umlilo] uses [o] where Xhosa phonology has open-mid [ɔ] in the word-final open syllable. Xhosa vowels /e/ and /o/ are realised as open-mid [ɛ] and [ɔ] in non-final syllables and in citation form (Pahl 1989: Phonology §1). The same word-final [o] → [ɔ] issue affects **zu**, **ssw**, and **nbl** entries for fire as well, and recurs throughout the dataset.

---

### Issue 15. `ssw` — fire — noun-class error: Swati uses a different form

- **File:** `words/fire.js` line 803
- **Current:** `["umlilo", "umlilo"]`
- **Expected:** `["umlilo", "umlilɔ"]` — but more importantly, the standard Swati word for 'fire' is *umlilo* in the Swazi National orthography; however it is class 3 *um-* and the IPA should reflect open-mid final [ɔ]
- **Why:** Setting aside the word choice (umlilo is attested), the IPA renders the final vowel as [o] rather than [ɔ]. In siSwati, as in the other Nguni languages, /o/ is realised as open-mid [ɔ] in open syllables in citation form (Rycroft 1981: §1.4).

---

### Issue 16. `xh` — eat — IPA [tʲ] is wrong for Xhosa ⟨ty⟩

- **File:** `words/eat.js` line 272
- **Current:** `["ukutya", "ukutʲa"]`
- **Expected:** `["ukutya", "ukutʰja"]` or, per some analyses, `["ukutya", "ukucʰa"]`
- **Why:** The Xhosa sequence ⟨ty⟩ represents a palatalised aspirated stop, transcribed in IPA as [tʲ] by this dataset, but in standard Xhosa phonological literature it is described as either an aspirated palatal stop [cʰ] or the cluster [tʰj]. The key point is that it is **aspirated** — [tʲ] (plain palatalised) omits the aspiration that is phonemically contrastive in Xhosa (plain vs. aspirated vs. ejective for each place). Writing [tʲ] suggests a plain palatalised stop, which would correspond to a non-existent phoneme in Xhosa (Pahl 1989: §3.1 on Xhosa stops; Wright 1992 on Nguni consonant inventories). The dataset should use [cʰ] or [tʰj] to preserve the phonemic aspiration contrast.

---

### Issue 17. `xh` — good — IPA [luŋɡilɛ] uses voiced [ɡ] where Xhosa has tenuis [k]

- **File:** `words/good.js` line 272
- **Current:** `["lungile", "luŋɡilɛ"]`
- **Expected:** `["lungile", "luŋkilɛ"]`
- **Why:** The Xhosa word *lungile* contains the cluster ⟨ng⟩ followed by ⟨i⟩. The sequence NG in Xhosa is a prenasalised stop [ŋk] (tenuis velar) before a following vowel, not voiced [ŋɡ]. In Xhosa phonology, prenasalised stops follow the same voicing pattern as the language's obstruent inventory: the velar nasal+stop in this position is [ŋk], as ⟨ng⟩ before a vowel is the prenasalised tenuis. The voiced prenasalised [ŋɡ] occurs but in different phonological environments (Pahl 1989: §4.2). The IPA [ŋɡ] here is erroneous.

---

### Issue 18. `nbl` — one — word and IPA both lack noun-class prefix; bare root given

- **File:** `words/one.js` line 804
- **Current:** `["nye", "ɲe"]`
- **Expected:** At minimum note that the concord prefix varies by noun class; the citation form should arguably be *kunye* (class 15/adverbial) or another anchored form, not bare *-nye*
- **Why:** The numeral root *-nye* ('one') in Southern Ndebele requires a class-agreement concord prefix to be grammatical; *nye* in isolation is a morpheme, not a free word. The Zulu entry correctly gives *kunye* (absolute form, class 15 ku- concord) and Xhosa gives *inye* (class 9 concord). The bare root *nye* without any prefix is not an attested citation form. The IPA [ɲe] is phonetically accurate for the root itself but the display form and lack of any concord signals a morphological citation error. A comparable citation-form problem does not affect other entries in the dataset, making this an isolated inconsistency.

---

### Issue 19. `ssw` — water — wrong word: *emanti* should be *amanzi*; Swati has *amanzi* too

- **File:** `words/water.js` line 804
- **Current:** `["emanti", "emanti"]`
- **Expected:** `["amanzi", "amaːnzi"]`
- **Why:** The standard siSwati word for 'water' is *amanzi*, class 6 (ama- prefix), identical in form to isiZulu and isiXhosa *amanzi*. The form *emanti* appears to be a colloquial or dialectal form (or borrowed from Sotho-Tswana *metsi* via an intermediate), but it is not the standard literary or citation form used in official Swati orthography or in Rycroft (1981: s.v. *manzi*). Using *emanti* as the canonical form misrepresents Swati's Nguni-family form of this class-6 noun. The IPA transcription "emanti" also contains an unstressed [e] prefix which belongs to a different noun-class system (Sotho class 4) rather than Nguni class 6 *ama-*.

---

### Issue 20. Global (all Nguni languages) — Tonal diacritics entirely absent

- **Files:** all 20 `words/*.js` entries for `zu`, `xh`, `ssw`, `nbl`
- **Current:** All IPA transcriptions lack tone marks.
- **Expected:** IPA transcriptions should include high-tone diacritics (e.g., acute ´ or IPA tone letters) on high-toned syllables, at minimum for Zulu and Xhosa which are extensively documented tonal languages.
- **Why:** All four Nguni languages under review are **tonal**: isiZulu, isiXhosa, siSwati, and isiNdebele contrast at minimum high (H) and low (L) tones, with a productive **depressor-consonant** system in Zulu and Xhosa where voiced obstruents, prenasalised stops, and implosives lower the pitch of the following vowel (the "depression" or "lowered high" tone: H → !H). The complete absence of tonal marking across all 80 Nguni IPA transcriptions in this dataset means that every single transcription is phonologically underspecified for a contrastive feature of the language. For example, Zulu *inyanga* ('moon/traditional healer') is minimally distinguished from other morphologically related forms only by tone; *indlu* ('house') is H-L; *ilanga* ('sun') is L-H; and *inhliziyo* ('heart') has a complex tonal contour. No Nguni IPA transcription in this dataset is tonal-complete. (Doke 1954: Ch. 5; Lanham & Prinsloo 1978: 44–68 on Nguni tone.)

---

### Issue 21. `zu` + `xh` + `ssw` — moon — IPA: nasal + velar stop: [ŋɡ] vs prenasalised [ᵑɡ]

- **File:** `words/moon.js` lines 150, 278, 803
- **Current:** zu: `"iɲaŋɡa"`, xh: `"iɲaːŋɡa"`, ssw: `"iɲaŋɡa"`
- **Expected:** `"iɲaᵑɡa"` (prenasalised voiced velar stop), or at minimum `"iɲaŋga"` with consistent treatment
- **Why:** The ⟨ng⟩ in *inyanga* is a **prenasalised stop** [ᵑɡ], not the sequence nasal + voiced stop [ŋɡ]. While the surface phonetics overlap, in Nguni phonological literature prenasalised stops are treated as unitary segments, with the nasal component being a feature of the stop onset rather than a separate nasal phoneme. Transcribing as [ŋɡ] implies a two-phoneme sequence (nasal coda + stop onset across a syllable boundary), which misrepresents the syllabification. The same issue applies to [ŋɡ] in *ilanga* (sun), *ngiyabonga* (thanks), and *sawubona* (hello). (Doke 1954: §3.8 prenasalised consonants as unit phonemes.)

---

### Issue 22. `xh` — thanks — IPA: missing initial nasal; vowel [ɛ] for ⟨e⟩ in prefix is reasonable but tone absent

- **File:** `words/thanks.js` line 272
- **Current:** `["enkosi", "ɛnkosi"]`
- **Expected:** `["enkosi", "ɛŋkʰosi"]` (the ⟨k⟩ in *enkosi* is aspirated)
- **Why:** The Xhosa word *enkosi* (also written *eNkosi* or *enkosi* — a contracted form of *uyabonga enkosi* or standalone) contains the sequence ⟨nk⟩. In Xhosa, ⟨nk⟩ is a prenasalised aspirated stop [ŋkʰ] (tenuis aspirate with nasal onset) — the aspiration on the stop is phonemically contrastive and is omitted from the IPA [ɛnkosi]. The correct transcription is [ɛŋkʰosi]. Furthermore, the word *enkosi* is a greeting/thanks form derived from *inkosi* ('chief/lord'), and the ⟨nk⟩ cluster in that root is consistently aspirated in Xhosa phonology (Pahl 1989: s.v. *inkosi*).

---

### Issue 23. `ssw` — love — IPA [luʦandwo] inconsistently uses [ʦ] for ⟨ts⟩

- **File:** `words/love.js` line 804
- **Current:** `["lutsandvo", "luʦandwo"]`
- **Expected:** `["lutsandvo", "lutsʼandvɔ"]` or with IPA ejective notation if appropriate, else `"lutsandvɔ"`
- **Why:** Swati ⟨ts⟩ can represent either an ejective affricate [tsʼ] or a plain affricate [ts], depending on the word. In *lutsandvo* ('love', class 11 lu- prefix), the ⟨ts⟩ is typically the ejective [tsʼ] in Swati (Rycroft 1981: §2.5 on ejectives). The IPA [ʦ] (the affricating ligature) is equivalent to [ts] and omits the ejective mark. If the analysis is [tsʼ], then [ʦ] is wrong; if non-ejective, [ts] suffices without ligature. Additionally, the final vowel ⟨o⟩ in *-sandvo* should be [ɔ] (open-mid), not [o], consistent with Swati vowel phonology. Finally, the display form ⟨lutsandvo⟩ ends in ⟨vo⟩, which is transcribed as [wɔ] in the IPA — the ⟨v⟩ → [w] rendering is unusual and unexplained; Swati ⟨v⟩ is a bilabial fricative [β] or approximant [ʋ], not the labio-velar [w].

---

### Issue 24. `nbl` — hello — IPA [lotʃʰani] treats ⟨tjh⟩ adequately but misses penultimate lengthening

- **File:** `words/hello.js` line 798
- **Current:** `["lotjhani", "lotʃʰani"]`
- **Expected:** `["lotjhani", "lotʃʰaːni"]`
- **Why:** In Southern Ndebele (and all Nguni languages), citation/isolation forms exhibit **penultimate vowel lengthening**: the syllable before the final syllable is lengthened. In *lotjhani*, the penultimate syllable is *-ha-*, which should be [haː] in isolation form, giving [lotʃʰaːni]. The IPA [lotʃʰani] omits this lengthening. While other entries also lack penultimate lengthening (a systemic issue), it is especially noticeable here because the word is a greeting typically uttered in isolation. (Doke 1954: §7.3 on penultimate lengthening in Southern Bantu isolation forms; Lanham & Prinsloo 1978: 71.)

---

### Issue 25. `ssw` — mother — *make* is a respect/kin term, not the standard noun; IPA is also underspecified

- **File:** `words/mother.js` line 803
- **Current:** `["make", "make"]`
- **Expected:** Display form possibly `"make"` (acceptable as a kinship term), but IPA should be `["make", "maːke"]`
- **Why:** Swati *make* is a respectful/vocative kin term for 'mother' (direct address or possessive form 'my mother'), comparable to Zulu *mama*. While using *make* is not wrong per se, the word for 'mother' as an independent noun in siSwati is *umake* or *umama*, with class 1a prefix *u-*. More critically, the IPA "make" is identical to the romanisation and provides no phonological information: it omits penultimate vowel lengthening [maːke] in the isolation form, and omits tonal specification. The root vowels /a/ and /e/ both need phonological commitment. This is the only Nguni entry where the IPA is entirely identical to the romanised display form, adding zero phonological value.

---

## Worker round-1 response (作業者round-1)

Reviewed all 25 issues against the project editing rule (only fix clear, unambiguous local errors / internal inconsistencies; hold genuine cross-school or system-wide convention choices). Applied fixes are the ⟨dl⟩ implosive error and the ⟨ny⟩→[ɲ] error, which are unambiguous and internally inconsistent with the dataset's own conventions. Per the team's "fix all variants together" rule, the identical ⟨dl⟩ error in the `nd` (isiNdebele/Zimbabwe) entries was corrected alongside the in-scope languages, even though `nd` was outside the reviewer's stated scope.

**Applied:**

- **Issue 1 (`zu` one):** `kunje` → `kuɲe`. Clear error: ⟨ny⟩ = palatal nasal /ɲ/, not [nj]. Confirmed by sibling entries `ssw: kuɲe` and `xh: iɲɛ` in the same file — internal inconsistency. (applied by orchestrator this round)
- **Issues 2–4 (eat, ⟨dl⟩):** `ukuɗla`/`kuɗla` → `ukudɮa`/`kudɮa` for `zu`, `ssw`, `nbl`. [ɗ] is an implosive dental stop; Nguni ⟨dl⟩ is the voiced lateral affricate [dɮ]. Unambiguous symbol error. Fix uses [dɮ], matching the dataset's existing convention (`ts: jindɮu` in house.js). Also applied to `nd: ukuɗla` → `ukudɮa` (same-family variant). (applied by orchestrator this round)
- **Issues 5–7 (hand, ⟨dl⟩):** `isandla`/`sandla` IPA → `isandɮa`/`sandɮa` for `zu`, `ssw`, `nbl`. The IPA had a bare orthographic [dl] (no IPA affricate); corrected to [dɮ]. Display/surface forms left unchanged. Also applied to `nd: isandla` IPA → `isandɮa`. (applied by orchestrator this round)

**Held (with rationale):**

- **Issue 8 (`zu` good):** Reviewer confirms [ɬ] is correct; only tone is "missing" (covered by Issue 20). No actionable symbol error. Hold.
- **Issues 9–13 (⟨b⟩ → [ɓ] removal; o→ɔ):** Hold. The implosive analysis of Nguni plain ⟨b⟩ as /ɓ/ (with pulmonic [b] written ⟨bh⟩) is the *standard* Doke description and the dataset's deliberate convention — so [sawuɓona], [ŋijaɓoŋɡa], [uɓaɓa] are defensible, not clear errors. The reviewer's claim that Nguni lacks implosive ⟨b⟩ is contrary to the mainstream analysis. (Note: there is a genuine internal inconsistency in the opposite direction — `zu` father is `ubaba`/`ubaba` (plain) while `nbl`/`nd` father use `uɓaɓa` — but resolving that would be a convention call the reviewer did not request and it cuts against the reviewer's stated expected value, so deferred.) The o→ɔ vowel-quality sub-claims are a system-wide transcription-school choice (see Issue 14). Hold.
- **Issues 14, 15 ([o]→[ɔ], fire):** System-wide vowel-quality convention; the dataset consistently uses [o] for Nguni /o/. Not a local error. Hold for team convention decision.
- **Issue 16 (`xh` eat tʲ→cʰ/tʰj):** Aspiration/place analysis of ⟨ty⟩ is genuinely debated; reviewer offers two alternatives. Not unambiguous. Hold.
- **Issue 17 (`xh` good ŋɡ→ŋk):** Standard Xhosa treats ⟨ng⟩ (vs ⟨nk⟩) as voiced prenasalised [ŋɡ]; the orthography itself distinguishes ng/nk for voicing. Reviewer's [ŋk] correction not clearly correct. Hold.
- **Issue 18 (`nbl` one, bare `nye`):** Citation-form choice; reviewer self-describes as "borderline". Hold.
- **Issue 19 (`ssw` water emanti→amanzi):** Hold. *emanti* is the legitimate siSwati class-6 form (siSwati class 6 prefix is *ema-*, and ⟨z⟩→⟨t⟩ in siSwati, giving *emanti*); it is not a Sotho borrowing. The reviewer's substitution is incorrect for siSwati.
- **Issue 20 (tone, global):** System-wide design choice — the dataset does not mark tone in any language. Won't-fix at the data level; needs a project-level decision. Hold.
- **Issue 21 ([ŋɡ]→[ᵑɡ] prenasalisation notation):** System-wide notation convention applied consistently across the dataset. Hold.
- **Issue 22 (`xh` thanks enkosi→ɛŋkʰosi):** Bundles a debatable aspiration claim with [n]→[ŋ]; the reviewer's full expected form is not unambiguous. Hold.
- **Issue 23 (`ssw` love ʦ / ⟨v⟩→[w]):** Reviewer offers multiple alternatives (ejective vs plain; β vs ʋ); ⟨dv⟩ realisation in siSwati is itself contested. No single unambiguous fix. Hold.
- **Issue 24 (`nbl` hello penultimate length):** System-wide omission of penultimate lengthening; not a local error. Hold.
- **Issue 25 (`ssw` mother make / length):** Kin-term/length; reviewer accepts *make* as a valid form. Length omission is the system-wide pattern. Hold.

---

## Reviewer round-1 response (再評価 round-1)

I re-read all 25 items and verified every claimed fix against the live per-word data files. The applied fixes are all present and correct in the data.

### Verified-applied fixes

- **Issue 1 (`zu` one):** ✓ Live data `words/one.js:150` = `zu: ["kunye", "kuɲe"]`. The [nj]→[ɲ] palatal-nasal fix is present and consistent with sibling `ssw: ["kunye", "kuɲe"]` (line 803) and `xh: ["inye", "iɲɛ"]` (line 278). Accept.
- **Issues 2–4 (eat, ⟨dl⟩):** ✓ Live data `words/eat.js` 150/797/798/799 = `ukudɮa` / `kudɮa` / `ukudɮa` / `ukudɮa` for `zu`/`ssw`/`nbl`/`nd`. The implosive [ɗ] is gone; the voiced lateral affricate [dɮ] is now used. The same-family `nd` variant was correctly fixed too. Accept.
- **Issues 5–7 (hand, ⟨dl⟩):** ✓ Live data `words/hand.js` 150/797/798/799 = `isandɮa` / `sandɮa` / `isandɮa` / `isandɮa`. The bare orthographic [dl] in the IPA is replaced with the affricate [dɮ]; display forms untouched (per the no-text-change rule). `nd` fixed too. Accept.

These were the only unambiguous symbol errors in the file, and all four are now fixed-and-verified. Good.

### Adjudication of held items

- **Issue 8 (`zu` good):** ✓ Accept hold. Live `kuɬe` — [ɬ] is the correct symbol for ⟨hl⟩; the only residual is tone, subsumed under Issue 20.
- **Issues 9–12 (⟨b⟩→[ɓ], o→ɔ):** ✓ Accept hold on the school-level grounds. The plain-⟨b⟩ = implosive /ɓ/ analysis (with ⟨bh⟩ = pulmonic [b]) is the standard Doke/Nguni convention, and the dataset applies it deliberately. [sawuɓona], [ŋijaɓoŋɡa] are defensible. The o→ɔ vowel-quality sub-claims are a system-wide transcription-school choice, not a local error. Hold accepted.
- **Issue 13 (`nbl`/`zu` father, ⟨b⟩):** △ PARTIAL. The held *rationale* (⟨b⟩ = [ɓ] is the dataset convention) is sound, but the worker themselves flagged a real internal inconsistency and then deferred it. I verified it in live data: `zu` uses [ɓ] in `thanks.js:150` (`ŋijaɓoŋɡa`) and `hello.js:150` (`sawuɓona`) but plain [b] in `father.js:150` (`ubaba`/`ubaba`), while sibling `nbl`/`nd` father are `uɓaɓa`. Under the dataset's own ⟨b⟩→[ɓ] convention, `zu` father should be `uɓaɓa` to match its own other ⟨b⟩ entries and its Nguni siblings. This is a clear within-convention inconsistency (the kind the project's "fix all variants together" rule targets), not a cross-school judgement call. I am NOT requiring the reviewer's original expected value (`ubaba` plain) — I am requiring internal consistency in the direction the dataset already chose. **Actionable:** set `words/father.js:150` `zu` IPA to `uɓaɓa`. Display form unchanged.
- **Issues 14–15 (o→ɔ, fire):** ✓ Accept hold. System-wide vowel convention; dataset consistently uses [o] for Nguni /o/.
- **Issue 16 (`xh` eat ⟨ty⟩):** ✓ Accept hold. Reviewer offered two competing alternatives ([cʰ] vs [tʰj]); genuinely debated, not unambiguous.
- **Issue 17 (`xh` good ŋɡ→ŋk):** ✓ Accept hold. Xhosa orthography distinguishes ⟨ng⟩ (voiced) from ⟨nk⟩ (voiceless); voiced prenasalised [ŋɡ] for ⟨ng⟩ is defensible.
- **Issue 18 (`nbl` one bare `nye`):** ✓ Accept hold. Reviewer self-labelled "borderline"; citation-form choice. Verified live `nbl: ["nye", "ɲe"]` (one.js:804); `nd` matches.
- **Issue 19 (`ssw` water emanti):** ✓ Accept hold — and the worker is correct on the linguistics. siSwati class 6 prefix is *ema-* (not *ama-*) and siSwati has the regular /z/→/t/ shift, yielding *emanti* as the standard form. The reviewer's "amanzi" substitution would impose the Zulu/Xhosa form on siSwati and is wrong. Reject the reviewer's original expected value; hold accepted.
- **Issue 20 (tone, global):** ✓ Accept hold. Genuine system-wide design choice (no language in the dataset marks tone). Not addressable at the single-file data level.
- **Issue 21 ([ŋɡ]→[ᵑɡ]):** ✓ Accept hold. Notation convention applied consistently dataset-wide.
- **Issue 22 (`xh` thanks enkosi):** ✓ Accept hold. Bundles a debatable aspiration claim with [n]→[ŋ]; not a single unambiguous fix.
- **Issue 23 (`ssw` love ⟨ts⟩/⟨v⟩):** ✓ Accept hold. Reviewer offers multiple alternatives; ⟨dv⟩/⟨ts⟩ realisation in siSwati is contested.
- **Issue 24 (`nbl` hello penultimate length):** ✓ Accept hold. System-wide omission of penultimate lengthening.
- **Issue 25 (`ssw` mother make):** ✓ Accept hold. Reviewer accepts *make* as valid; length/tone are system-wide omissions.

### New issues

None beyond the within-convention inconsistency surfaced under Issue 13 (which the worker had already identified but deferred).

### Scorecard

- Applied & verified correct: Issues 1, 2, 3, 4, 5, 6, 7 (7 fixes, all confirmed in live data).
- Held / accepted as cross-school or system-level: Issues 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25.
- Outstanding actionable: Issue 13 — `zu` father IPA should be `uɓaɓa` for internal consistency with the dataset's own ⟨b⟩→[ɓ] convention and its `nbl`/`nd` siblings.

**File status: OPEN** — Dev team must set `words/father.js:150` `zu` IPA from `ubaba` to `uɓaɓa` (display form `ubaba` unchanged) to remove the within-dataset ⟨b⟩→[ɓ] inconsistency; all other items are correctly resolved or held.
