# Wordmap review #63 — Hungarian & Ob-Ugric specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a Uralic linguist specialising in Hungarian and the two Ob-Ugric languages, Mansi (mns) and Khanty (kca), with a working knowledge of the Old Hungarian (ohu) layer reconstructed from the Tihany Charter and the Halotti beszéd. For Hungarian phonology and orthography I rely on Kenesei, Vago & Fenyvesi, *Hungarian* (Descriptive Grammars, Routledge, 1998), and on Siptár & Törkenczy, *The Phonology of Hungarian* (OUP, 2000) for the segmental inventory — crucially the fact that orthographic ⟨a⟩ is the open back rounded [ɒ], ⟨á⟩ is the long unrounded [aː], the palatals ⟨gy ty ny⟩ are [ɟ c ɲ], and ⟨r⟩ is an alveolar trill [r], never a tap. For Ob-Ugric I use Honti's comparative Ob-Ugric studies (*Chrestomathia Ostiacica*, 1984; *Die ostjakische Sprache*, and his reconstructions of Proto-Ob-Ugric vocalism) together with Riese, *Vogul* (LINCOM, 2001) for Mansi and the standard Khanty cyrillic-orthography conventions. My review checks Hungarian vowel length and quality, the gy/ty/ny palatals, vowel harmony, and — most urgently — several Ob-Ugric cells where a Russian loanword and its Russified IPA have been pasted in as if they were native Ugric forms.

---

## Issues found

### 1. `kca` — cat — Russian loanword pasted into a Khanty cell, IPA is Russian
- **File:** `words/cat.js` line 137
- **Current:** `["кошка", "koʂka"]`
- **Expected:** `["кеши", "kɛʃi"]` (or another genuine Khanty form; at minimum not the bare Russian)
- **Why:** `кошка` is simply the Russian word *кошка* 'cat', and the IPA `koʂka` is its Russian pronunciation with the retroflex [ʂ] of Russian ⟨ш⟩. This is a placeholder copy, not a Khanty entry. Cats are non-native to the Ob region and the usual reflex is an adapted loan (Khanty ⟨ш⟩ is a plain postalveolar [ʃ], not Russian retroflex [ʂ]). The cell needs a real Khanty surface form with a Khanty-phonology IPA.

---

### 2. `mns` — cat — identical Russian loanword + Russian IPA
- **File:** `words/cat.js` line 874
- **Current:** `["кошка", "koʂka"]`
- **Expected:** a genuine Mansi form (e.g. an adapted `кошка` → `[koʃka]`), not the verbatim Russian
- **Why:** Same defect as #1: the Mansi cell is the bare Russian *кошка* with Russian IPA `koʂka`. Even if Mansi borrows the word, Mansi has no retroflex [ʂ]; ⟨ш⟩ is [ʃ]. Per Riese, *Vogul* (2001), the Mansi sibilant inventory is /s ʃ ɕ/, so [ʂ] is impossible. The duplication of the exact same string across kca and mns is the tell-tale sign of a copy-paste placeholder.

---

### 3. `ohu` — cat — modern Hungarian form in the Old Hungarian slot, wrong vowel quality
- **File:** `words/cat.js` line 158
- **Current:** `["macska", "matʃka"]`
- **Expected:** `["macska", "mɒt͡ʃkɒ"]`
- **Why:** Two problems. (a) The IPA `matʃka` uses Cardinal [a] for both vowels, but Hungarian (and the Old Hungarian reflex) has open back rounded [ɒ] for ⟨a⟩ — cf. the modern `hu` cell on line 157, `mɒt͡ʃkɒ`. (b) The affricate ⟨cs⟩ is the single segment [t͡ʃ] and should carry a tie bar; `tʃ` reads as a stop+fricative cluster. Both follow Kenesei et al. (1998: ch. on phonology).

---

### 4. `ohu` — dog — wrong word sense (a breed term, not the generic 'dog')
- **File:** `words/dog.js` line 158
- **Current:** `["kuvasz", "kuvas"]`
- **Expected:** `["kutya", "kucɒ"]` or an attested Old Hungarian generic for 'dog'
- **Why:** *kuvasz* is the name of a specific livestock-guardian **breed** (itself a Turkic loan), not the everyday word for 'dog'; it is a register/word-sense mismatch with the headword. Every other language cell here gives the generic term (cf. `hu` `kutya` on line 157). If an archaic generic is wanted, ⟨ty⟩ would still need to surface as the palatal [c].

---

### 5. `hu` — love — missing initial stress / fine, but `ohu` love uses a tap for ⟨r⟩
- **File:** `words/love.js` line 158
- **Current:** `["szèrēlm", "sɛɾeːlm"]`
- **Expected:** `["szèrēlm", "sɛreːlm"]`
- **Why:** The IPA renders ⟨r⟩ as the alveolar **tap** [ɾ]. Hungarian /r/ is a phonemic alveolar **trill** [r] in all positions (Siptár & Törkenczy 2000: §3); the tap [ɾ] is not part of the Hungarian inventory and is wrong for the Old Hungarian reflex too. Use [r].

---

### 6. `ohu` — love — implausible final cluster /lm/ with no transition
- **File:** `words/love.js` line 158
- **Current:** `["szèrēlm", "sɛreːlm"]` (after fixing #5)
- **Expected:** `["szèrēlëm", "sɛreːlɛm"]` or a form with the etymological final vowel
- **Why:** The reconstructed Old Hungarian shape preserves the stem vowel of the *-lVm* deverbal-noun suffix (cf. modern *szerelem* [sɛrɛlɛm], `hu` line 157). A bare word-final [lm] cluster is phonotactically un-Hungarian and contradicts the very point of an archaic entry; either restore the vowel or align with the modern trisyllable.

---

### 7. `hu` — hello — `szia` IPA missing the glide / hiatus
- **File:** `words/hello.js` line 157
- **Current:** `["szia", "siɒ"]`
- **Expected:** `["szia", "sijɒ"]`
- **Why:** *szia* is pronounced with an intervocalic palatal glide [sijɒ] (hiatus-filling [j] between the high front vowel and the following vowel is regular in Hungarian — Siptár & Törkenczy 2000: §5 on hiatus). The bare `siɒ` collapses two syllables into a diphthong that Hungarian does not have.

---

### 8. `ohu` — hello — `isten hozott` long /tː/ is over-marked and register is odd
- **File:** `words/hello.js` line 158
- **Current:** `["ìstèn hozott", "iʃtɛn hozotː"]`
- **Expected:** `["ìstèn hozott", "iʃtɛn hozotː]"` → keep [tː] but note ⟨s⟩ = [ʃ] is correct; the issue is the unmarked phrase stress and the missing space-final analysis
- **Why:** The segmental transcription is actually defensible (⟨s⟩ = [ʃ], geminate ⟨tt⟩ = [tː]). The real problem is that *isten hozott* ('God brought you', a welcome) is a full clause, not a lexical greeting parallel to the other cells; flag as a word-sense/register mismatch with the headword "hello" rather than a transcription error.

---

### 9. `kca` — heart — breve vowel ⟨ӑ⟩ flattened to plain [a] in IPA
- **File:** `words/heart.js` line 137
- **Current:** `["сӑм", "sam"]`
- **Expected:** `["сӑм", "sɐm"]` (reduced/short central back vowel)
- **Why:** Khanty cyrillic ⟨ӑ⟩ (a with breve) marks the short reduced vowel, conventionally [ɐ]/[ə]-like, distinct from full ⟨а⟩ [a]. Transcribing it as plain [a] erases the very length/quality contrast the breve encodes (Honti, *Chrestomathia Ostiacica* 1984, vocalism tables). Compare the Mansi cognate `сым` [sɨm] on line 874, which correctly shows a non-[a] nucleus.

---

### 10. `kca` — mother — ⟨ӑ⟩ again flattened to [a]
- **File:** `words/mother.js` line 137
- **Current:** `["ӑңки", "aŋki"]`
- **Expected:** `["ӑңки", "ɐŋki"]`
- **Why:** Same as #9: the breve ⟨ӑ⟩ is the reduced vowel and must not be rendered as full [a]. The velar-nasal ⟨ң⟩ → [ŋ] is correct. Consistency with the breve convention is required across the kca cells (cf. sun line 137 `xatəl`, which correctly uses [ə] for ⟨ә⟩).

---

### 11. `mns` — heart — `сым` [sɨm] is good, but check `mns` father ⟨ӓщ⟩
- **File:** `words/father.js` line 874
- **Current:** `["ӓщ", "æɕ"]`
- **Expected:** `["ӓщ", "æɕ"]` (segmentally OK) — flag only the vowel length
- **Why:** ⟨ӓ⟩ = [æ] and ⟨щ⟩ = the alveolo-palatal [ɕ] are both correct for Mansi (Riese 2001). This cell is sound; I include it as a positive control. If anything, northern Mansi often has a long [æː] here, but I will not assert length without the source dialect specified, so I leave the surface as-is and note it for the editors.

---

### 12. `ohu` — father — `āpá` double long vowels plausible but stress unmarked
- **File:** `words/father.js` line 158
- **Current:** `["āpá", "aːpaː"]`
- **Expected:** `["āpá", "ˈaːpaː]"`
- **Why:** Segmentally [aːpaː] is fine (both ⟨ā⟩ and ⟨á⟩ = long [aː]). Hungarian has fixed word-initial primary stress (Kenesei et al. 1998); since several other cells are bare of stress this is a consistency note rather than an error, but for a citation-form transcription initial [ˈ] would be the norm.

---

### 13. `ohu` — moon — surface marks a long ⟨ȍ⟩ but IPA gives a short [o]
- **File:** `words/moon.js` line 158
- **Current:** `["hȍld", "hold"]`
- **Expected:** `["hȍld", "hoːld"]` (if ⟨ȍ⟩ encodes length) or fix the surface diacritic
- **Why:** The surface uses the double-grave ⟨ȍ⟩ (the convention this dataset uses elsewhere for an Old Hungarian long/marked vowel — cf. `jȍw`, `kȍszȍnèm`, `hȍld`), yet the IPA `hold` shows a plain short [o]. There is an internal mismatch: either the diacritic is meant to mark length (then IPA should be [hoːld]) or it is decorative (then it is misleading). The modern reflex *hold* is [hold], so the diacritic+IPA pairing is inconsistent. Resolve the convention.

---

### 14. `ohu` — good — `jȍw` IPA `joːw` mixes a long vowel with a labial glide coda
- **File:** `words/good.js` line 158
- **Current:** `["jȍw", "joːw"]`
- **Expected:** `["jȍw", "joːw]"` — verify the [w] coda against the source
- **Why:** Here the ⟨ȍ⟩→[oː] length mapping IS applied (unlike #13), which makes the moon cell's [o] inconsistent across the same ⟨ȍ⟩ grapheme. The bilabial [w] coda reflects the Old Hungarian *-w* that became modern *-ó* (jó); this is defensible per the standard *-w > -ó* monophthongisation, but the dataset must apply the ⟨ȍ⟩=[oː] rule **uniformly** (see #13). Flagged as a cross-cell consistency error.

---

### 15. `ohu` — mother — `ènyē` correctly palatal but check ⟨e⟩ vs ⟨è⟩ quality
- **File:** `words/mother.js` line 158
- **Current:** `["ènyē", "ɛɲeː"]`
- **Why:** Good: ⟨ny⟩ → palatal [ɲ] and the long ⟨ē⟩ → [eː] are correct (Kenesei et al. 1998). The open ⟨è⟩ → [ɛ] is also right. I cite this as a model cell; the only refinement is that the double-grave/grave system (ȍ, è, ē, ī …) used across the ohu cells is idiosyncratic and undocumented — the editors should add a key to docs so reviewers can verify length intent (this is what makes #13/#14 ambiguous).

---

### 16. `mns` — moon — `эрь` [erʲ] is almost certainly the wrong lexeme for 'moon'
- **File:** `words/moon.js` line 880
- **Current:** `["эрь", "erʲ"]`
- **Expected:** a genuine Mansi 'moon' form (northern Mansi *этпос* / *ёнгхып* type), not `эрь`
- **Why:** Mansi *эрь* does not mean 'moon'; the attested northern Mansi word for moon/month is *этпос* (Riese, *Vogul* 2001, lexicon). `эрь` looks like a stray or mis-keyed entry. The IPA [erʲ] with palatalised final ⟨рь⟩ is internally consistent with the cyrillic, but the **lexical choice** is the problem. This needs verification against a Mansi dictionary before publication.

---

### 17. `kca` — love — `наматты` glossed as 'love' but is a verb stem; length mark in IPA
- **File:** `words/love.js` line 137
- **Current:** `["наматты", "namatːɯ"]`
- **Expected:** verify sense (noun 'love' vs verb 'to love'); IPA geminate OK
- **Why:** The other cells in love.js are split between noun and verb senses; the Khanty `наматты` appears to be an infinitive/verbal-noun (the *-ты* ending parallels eat `лэты` [lətɯ], drink `яңхты` [jaŋxtɯ]) i.e. 'to love/think', whereas `hu` *szerelem* is a **noun**. This is a part-of-speech mismatch with the headword's apparent noun sense. The geminate [tː] and final [ɯ] are transcribed consistently with the other -ты cells, so the IPA is fine; the issue is sense alignment.

---

### 18. `mns` — love — `эрыглыктэ` long verb form vs noun headword
- **File:** `words/love.js` line 881
- **Current:** `["эрыглыктэ", "erɨɡlɨkte"]`
- **Expected:** verify sense; IPA segmentally OK
- **Why:** Same part-of-speech concern as #17: `эрыглыктэ` is a finite/derived **verb** form ('he loves' / 'to love'), not the noun 'love (szerelem)' the headword uses. The IPA `erɨɡlɨkte` correctly shows ⟨ы⟩ = [ɨ] and the velar [ɡ], so the transcription is good; flag the noun/verb mismatch for the editors to reconcile across the love.js row.

---

### 19. `hu` — thanks — `köszönöm` lacks initial stress; vowels otherwise correct
- **File:** `words/thanks.js` line 157
- **Current:** `["köszönöm", "køsønøm"]`
- **Expected:** `["köszönöm", "ˈkøsønøm"]`
- **Why:** The front-rounded harmony is correctly transcribed (⟨ö⟩ = [ø] throughout — good vowel-harmony fidelity, Kenesei et al. 1998). The only refinement is fixed word-initial primary stress [ˈ], absent here. Consistency note rather than a hard error, but for a citation form it should be marked (and the parallel `ohu` cell `kȍszȍnèm` [køsønɛm] shows the expected open final ⟨è⟩=[ɛ], correctly).

---

### 20. `kca` — thanks — `пӑсиве` ⟨ӑ⟩ flattened to [a] (third instance)
- **File:** `words/thanks.js` line 137
- **Current:** `["пӑсиве", "pasive"]`
- **Expected:** `["пӑсиве", "pɐsive"]`
- **Why:** As in #9 and #10, the breve ⟨ӑ⟩ is the reduced vowel and is rendered as full [a]. This is now a **systematic** kca transcription error across heart, mother, and thanks — every ⟨ӑ⟩ in the kca cells is mapped to [a], erasing the reduced-vowel contrast that is central to Khanty vocalism (Honti 1984). Recommend a global pass on all kca ⟨ӑ⟩ → [ɐ].

---

*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*
