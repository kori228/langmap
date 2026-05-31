# Wordmap review #40 — Yoruba / Igbo / Hausa specialist

## Reviewer self-introduction

I am a specialist in the phonology and tonology of major Nigerian languages, drawing primarily on Bamgboṣe (1966) *A Grammar of Yoruba* (Cambridge), Awoyale (2008) *Yoruba Lexicography*, Welmers & Welmers (1968) *Igbo: A Learner's Manual*, Emenanjo (1978) *Elements of Modern Igbo Grammar*, Newman (2000) *The Hausa Language: An Encyclopedic Reference Grammar* (Yale), Wolff (1993) *Referenzgrammatik des Hausa*, and Yusuf (2007) *Basic Linguistics for Nigerian Languages Teachers*. My focus is tonological correctness: Yoruba's three-tone (H/M/L) system with downstep and seven oral vowels; Igbo's two-tone + downstep system with the eight-vowel ±ATR harmony split; and Hausa's three-tone (H/L/falling) system with contrastive vowel length, implosives (/ɓ ɗ/), and the ejective /ƙ/. I also cover Nigerian Pidgin English (PCM) as documented in Faraclas (1996) *Nigerian Pidgin*.

---

## Issues found

### 1. `yo` — water — IPA completely lacks tone marks
- **File:** `words/water.js` line 149
- **Current:** `["omi", "omi"]`
- **Expected:** `["omi", "omì"]` (mid + low) or per Abraham (1958) `["omi", "ōmī"]`
- **Why:** The orthographic form `omi` is acceptable in pedagogical Yoruba orthography where unmarked syllables are read as mid tone — but the IPA transcription field must carry explicit tone marks. Mid tone in IPA is shown with a macron or mid-tone diacritic (◌̄); low tone with grave (◌̀). The IPA field currently shows `omi` with no suprasegmental content whatsoever, making the entry phonologically inert. At minimum the low-tone final syllable requires `ì` or the IPA superscript `˨`. Cross-reference: every other Yoruba entry in this dataset does carry IPA tone marks; `omi` is an outlier and an error by omission.

---

### 2. `yo` — fire — tonal assignment on first syllable uncertain / underdocumented
- **File:** `words/fire.js` line 149
- **Current:** `["iná", "iná"]`
- **Expected:** `["iná", "ináˈ"]` — but the first syllable's mid tone should be explicit in IPA: `["iná", "inàˈ"]` or `["ìnà", "ìnà"]`
- **Why:** There is genuine lexicographic variation for `ina` (fire). Abraham's *Dictionary of Modern Yoruba* (1958) cites `inà` (mid+low). Bamgboṣe (1966) gives `iná` (mid+high) as the most common Oyo-Yoruba form. The current data uses `iná`/`iná` (both orthography and IPA identical, high on final), which reflects one accepted standard. However, the IPA first vowel `i` carries no tone diacritic — mid tone must be explicitly marked in IPA with a macron (`ī`) or tone letter (`˧`), since absence of diacritic in IPA does not mean mid tone the way it does in Yoruba orthographic convention. This asymmetry between orthographic and IPA conventions is a recurring error (see also issues 9, 10, 11 below).

---

### 3. `yo` — drink — tone marks absent from both fields
- **File:** `words/drink.js` line 149
- **Current:** `["mu", "mu"]`
- **Expected:** `["mu", "mū"]` (mid tone verb stem) or `["múu", "múː"]` if lengthened
- **Why:** The Yoruba verb `mu` (to drink) carries a mid tone. The orthographic form without accent is legitimate in Yoruba standard practice for mid tone. The IPA field, however, must mark the tone: `mū` (mid) or `m˧` using a tone letter. The current IPA `mu` provides zero tonal information, which is phonologically insufficient for a tonal language.

---

### 4. `yo` — tree — tone marks absent from both fields
- **File:** `words/tree.js` line 149
- **Current:** `["igi", "iɡi"]`
- **Expected:** `["igí", "iɡí"]` (mid+high, per Bamgboṣe) or `["igi", "īɡī"]`
- **Why:** `igi` (tree/wood) is a disyllable with mid+high tone pattern in standard Yoruba (Awoyale 2008). The orthographic form without diacritics suggests mid+mid, which is also attested dialectally, but the IPA shows `iɡi` with no tone marks — again leaving tonal content entirely absent. The IPA transcription field must carry tone information.

---

### 5. `yo` — mother — IPA uses /j/ for orthographic 'y' but this is inconsistently handled
- **File:** `words/mother.js` line 149
- **Current:** `["ìyá", "ìjá"]`
- **Expected:** `["ìyá", "ìjá"]` ✓ (this is actually correct)
- **Why:** This entry is correct — orthographic Yoruba `y` = IPA /j/ (palatal approximant). Flagged here only because the same rule is *not* being applied to orthographic `y` → `j` mapping in `sun.js` and `moon.js` IPA fields (see issue 6). Consistency requires verifying the entire `yo` IPA set applies the same `y`→`/j/` mapping.

---

### 6. `yo` — sun — IPA uses /ɾ/ for Yoruba `r` without justification
- **File:** `words/sun.js` line 149
- **Current:** `["oòrùn", "oòɾùn"]`
- **Expected:** `["oòrùn", "oòɾùn"]` — the flap /ɾ/ is plausible, but see note
- **Why:** Yoruba `r` is variously described as a tapped/flapped /ɾ/ (Bamgboṣe 1966), an approximant /ɹ/ (in some dialects), or a retroflex flap (in northern dialects). The /ɾ/ transcription is broadly defensible. However, the `dog.js` entry (`dára` good, `ajá` dog) and other entries use `ɾ` inconsistently. More critically: the tone transcription `oòɾùn` correctly marks the tones (mid-low-low) but the initial `o` should carry a mid-tone marker in IPA: `ōòɾùn`. A bare `o` in IPA does not communicate mid tone.

---

### 7. `yo` — cat — doubly-articulated /ɡb/ correctly represented but IPA high tone inconsistency
- **File:** `words/cat.js` line 149
- **Current:** `["ológbò", "olóɡbò"]`
- **Expected:** `["ológbò", "olóɡ͡bò"]` (with tie-bar) or `["ológbò", "olóɡbò"]`
- **Why:** The doubly-articulated labial-velar stop /ɡb/ is present in both orthographic and IPA fields, which is good. The IPA `ɡb` is acceptable broad transcription. Purists following the IPA 1999 handbook would prefer the tie-bar `ɡ͡b` to unambiguously mark simultaneous articulation rather than a sequence. Without the tie-bar, a reader could misparse `ɡb` as a stop cluster. This is a presentation issue rather than a phonological error, but it affects data quality in an IPA field.

---

### 8. `ig` — cat — /ŋw/ transcription questionable for Igbo `nw-`
- **File:** `words/cat.js` line 248
- **Current:** `["nwamba", "ŋwamba"]`
- **Expected:** `["nwamba", "ŋ͡mwamba"]` or `["nwamba", "ⁿwamba"]`
- **Why:** The Igbo labiovelar nasal orthographically represented as `nw` is a simultaneous velar+labial nasal, transcribed by Emenanjo (1978) and Welmers & Welmers (1968) as /ŋ͡m/ (co-articulated) or with a pre-nasalization diacritic. Writing it as /ŋw/ (velar nasal + labial glide sequence) misrepresents the single-segment nature of the phoneme. The same issue appears in `moon.js` `ọnwa → ɔŋwa` (see issue 15). Additionally, no tone marks are present on either the orthographic or IPA form.

---

### 9. `ig` — water — IPA tone marks entirely absent; geminate correct
- **File:** `words/water.js` line 255
- **Current:** `["mmiri", "mːiɾi"]`
- **Expected:** `["mmiri", "mːíɾì"]` (H+L) or per Welmers `["mmịri", "mːɪ̀ɾì"]`
- **Why:** `mmiri` (water) has a geminate initial nasal correctly marked as `mː` — this is good. However, the tone pattern is completely absent from the IPA. Standard Igbo `mmiri` carries a high tone on the first (nuclear) syllable and low on the second: H-L. The IPA must show `mːíɾì`. Additionally, Emenanjo (1978) gives the vowel as `ị` (−ATR /ɪ/), not plain `i` (+ATR /i/): `mmịri`. The ATR distinction is phonemic in Igbo and must be represented.

---

### 10. `ig` — fire — IPA lacks tone marks; ATR vowel correct
- **File:** `words/fire.js` line 254
- **Current:** `["ọkụ", "ɔkʊ"]`
- **Expected:** `["ọkụ", "ɔ́kʊ̀"]` (H+L)
- **Why:** `ọkụ` (fire) is correctly transcribed with −ATR vowels `ɔ` and `ʊ`, respecting Igbo ATR harmony (both −ATR). This is well done. The sole deficiency is the complete absence of tone marks. Standard `ọkụ` carries high+low: `ɔ́kʊ̀`. Without tone marks the IPA is phonologically incomplete for a tone language.

---

### 11. `ig` — systematic: tone marks absent from all 20 Igbo IPA transcriptions
- **Files:** all `words/*.js`
- **Current:** every `ig:` IPA field lacks tone diacritics
- **Expected:** each IPA transcription should carry acute (H), grave (L), and mid-macron diacritics
- **Why:** This is the single most pervasive error in the Igbo dataset. Igbo is a tone language with phonemic H, L, and downstep. Not one of the 20 IPA fields marks tone. Examples: `aka` (hand) should be `àká` (L+H); `obi` (heart) should be `óbì` (H+L); `osisi` (tree) should be `òsísì` (L+H+L); `otu` (one) should be `ótù` (H+L); `iri` (eat) should be `íríˀ` or `íríˈ` depending on analysis. The omission renders the IPA data phonologically unusable for tone-language pedagogy or acoustic reference.

---

### 12. `ig` — dog — /ŋkɪta/ missing tone marks; segmental analysis of `nk-` acceptable
- **File:** `words/dog.js` line 248
- **Current:** `["nkịta", "ŋkɪta"]`
- **Expected:** `["nkịta", "ŋkɪ́tà"]` (H+L on vowel-bearing syllables) or `["nkịta", "ŋ̀kɪ́tà"]`
- **Why:** The nasal `nk-` onset is transcribed as `ŋk-` (velar nasal + velar stop), which is acceptable for the prenasalized stop analysis. The −ATR vowel `ɪ` for orthographic `ị` is correct. However, tone marks are absent. Standard `nkịta` (dog): the tonal pattern is approximately L-H-L across the three morae (pre-nasal + vowel + coda).

---

### 13. `ig` — love — ATR harmony partially broken; tone absent
- **File:** `words/love.js` line 255
- **Current:** `["ịhụnanya", "ɪhʊnaɲa"]`
- **Expected:** `["ịhụnanya", "ɪ̀hʊ̀nàɲà"]` with tones; ATR note below
- **Why:** The −ATR vowels `ɪ` (for `ị`) and `ʊ` (for `ụ`) are correctly matched. The low vowels `a` are neutral/low and can co-occur with either ATR class (standard in Igbo ATR harmony). The glide `ɲ` for `ny` is correct. The sole structural problem is the complete absence of tone marks. `ịhụnanya` is a compound (ịhụ = to see, nanya = eye = 'eye-seeing' → love); its tonal melody is L-L-L-L in isolation. The IPA must mark these tones.

---

### 14. `ig` — thanks — vowel length marked but tone absent
- **File:** `words/thanks.js` line 248
- **Current:** `["daalụ", "daːlʊ"]`
- **Expected:** `["daalụ", "dàːlʊ̀"]`
- **Why:** The long vowel `aː` for orthographic `aa` is correctly marked. The −ATR `ʊ` for `ụ` is correct. Tone marks, however, are absent. `daalụ` (thank you) has a falling/low pattern: L throughout in the standard variety.

---

### 15. `ig` — moon — `ọnwa` IPA coarticulation error
- **File:** `words/moon.js` line 254
- **Current:** `["ọnwa", "ɔŋwa"]`
- **Expected:** `["ọnwa", "ɔ́ŋ͡mwà"]` or `["ọnwa", "ɔ́ⁿwà"]`
- **Why:** The `nw` cluster in `onwa` is the same labiovelar nasal as in `nwamba` (cat, issue 8). Writing `ŋw` implies a sequence of velar nasal + glide, not the simultaneous labial+velar nasal of Igbo. Welmers & Welmers (1968) and Emenanjo (1978) consistently transcribe this as a co-articulated segment. Tone marks are also absent: `ọnwa` is H+L (`ɔ́ⁿwà`).

---

### 16. `ha` — one — implosive `ɗ` transcribed as ejective `dʼ` in IPA
- **File:** `words/one.js` line 265
- **Current:** `["ɗaya", "dʼaja"]`
- **Expected:** `["ɗaya", "ɗàjā"]`
- **Why:** This is the most serious segmental error in the Hausa dataset. Hausa `ɗ` is an **alveolar implosive** (IPA: ɗ), produced with ingressive glottalic airstream. The IPA notation `dʼ` uses the apostrophe convention for **ejectives** (egressive glottalic), which is a completely different phonation type. Newman (2000) is explicit: Hausa has two implosives (`ɓ`, `ɗ`) and one ejective (`ƙ`). The IPA field must use the dedicated IPA symbol `ɗ` — which is the same symbol used in the orthographic field — not the ejective digraph `dʼ`. Compare the correct treatment of `ƙauna` → `kʼauna` (love, issue 17): ejective notation is appropriate there because `ƙ` is indeed an ejective.

---

### 17. `ha` — systematic: tone marks absent from all 20 Hausa IPA transcriptions
- **Files:** all `words/*.js`
- **Current:** every `ha:` IPA field lacks tone diacritics; most also lack vowel length marks
- **Expected:** each IPA transcription should carry H (acute), L (grave), and F/falling (circumflex or fall diacritic) tone marks, plus length marks `:` on long vowels
- **Why:** Hausa has phonemic H, L, and falling tone, plus contrastive vowel length (short vs. long). The IPA fields suppress both. Examples: `wuta` (fire) should be `wùtâ` (L+falling); `ruwa` (water) should be `ɾúwàː` or `ɾùwàː` depending on dialect (Newman 2000 §8); `rana` (sun) should be `ɾāːnāː` (H:long + H:long); `gida` (house) should be `ɡìdāː` (L + H:long); `ido` (eye) should be `ìdōː` (L + H:long); `uwa` (mother) should be `ùwāː` (L + H:long). Without these marks the IPA representations are systematically deficient for a tone language with vowel length contrast.

---

### 18. `ha` — cat — /kʲ/ transcription for `ky-` acceptable but alternative preferred
- **File:** `words/cat.js` line 259
- **Current:** `["kyanwa", "kʲanwa"]`
- **Expected:** `["kyanwà", "cânwàː"]` (palatalized stop) per Newman (2000), or retain `kʲ` with tone marks
- **Why:** Hausa `ky` is a palatalized stop, which Newman (2000) and Wolff (1993) transcribe as /c/ (voiceless palatal stop) in phonological analysis, reflecting the full merger of the place of articulation to palatal. The `kʲ` notation treats it as a velar with secondary palatalization, which is a valid surface-phonetic reading but less accurate phonologically. More critically, `kyanwa` (cat) has the form `kyanwà` (with L on final): both the IPA and orthographic fields lack tone marks. The full form is `kyanwà` with long final vowel in some dialects: `kyânwāː`.

---

### 19. `ha` — dog — final vowel quality and tone absent
- **File:** `words/dog.js` line 259
- **Current:** `["kare", "kaɾɛ"]`
- **Expected:** `["karē", "kàɾēː"]` (L + H:long) or `["kare", "kàɾeː"]`
- **Why:** `kare` (dog): the final vowel is long in standard Hausa (`karē` with macron = long H). The IPA shows `kaɾɛ` with a short open-mid vowel `ɛ`, but Hausa `e` in this position is a close-mid `/e/` (or mid-long `/eː/`), not the open-mid `/ɛ/`. Newman (2000) gives `kàrèe` (L+L:long) for this lexeme in some dialects, or `kàrêː` with falling tone on long vowel. The use of `ɛ` appears to be an inadvertent near-open vowel substitution. Tone marks absent.

---

### 20. `ha` — father and mother — identical IPA to orthography; tones and length suppressed
- **Files:** `words/father.js` line 259, `words/mother.js` line 265
- **Current father:** `["uba", "uba"]`; **Current mother:** `["uwa", "uwa"]`
- **Expected father:** `["uba", "ùbàː"]` (L+L:long) or `["ùbā", "ùbāː"]`; **Expected mother:** `["uwa", "ùwāː"]` (L+H:long)
- **Why:** Both entries show IPA identical to the orthographic form — no tone marks, no length marks. Hausa `uba` (father) is `ùbāː` (L + H:long); Hausa `uwa` (mother) is `ùwāː` (L + H:long). Newman (2000) lists both with long final vowels. The IPA fields contain no phonological content beyond the bare segments, which is insufficient for Hausa.

---

### 21. `pcm` — water — IPA drops the accent mark present in the orthographic field
- **File:** `words/water.js` line 337
- **Current:** `["wọtá", "wɔta"]`
- **Expected:** `["wọtá", "wɔˈta"]` or `["wọtá", "ˈwɔta"]`
- **Why:** The orthographic field `wọtá` carries an acute accent on the final syllable, indicating stress or high tone (Nigerian Pidgin has some residual tonal/stress prominence). The IPA field `wɔta` drops this information entirely. Faraclas (1996) notes that Nigerian Pidgin words from Yoruba substrate often carry the H+L or L+H tonal pattern of the source word. `wata` (< English *water*) in PCM is stressed on the first syllable: `ˈwɔta`. The acute on the orthographic `wọtá` disagrees with initial-stress IPA expectation, and either the orthographic accent or the IPA needs correction — but the current mismatch between the two fields is in any case an error.

---

### 22. `yo` — hello — mid-tone `ẹ` lacks IPA tone mark; systematic pattern
- **File:** `words/hello.js` line 149
- **Current:** `["ẹ kú", "ɛ kú"]`
- **Expected:** `["ẹ kú", "ɛ̄ kú"]` (mid + high)
- **Why:** The greeting particle `ẹ` carries mid tone. The IPA transcribes it as `ɛ` with no tone diacritic. In IPA, a bare vowel with no tone mark conveys no tonal information. The mid tone must be shown explicitly: `ɛ̄` (with macron) or `ɛ˧`. The same issue occurs in `thanks.js` `["ẹ ṣé", "ɛ ʃé"]` where `ɛ` (mid tone `ẹ`) lacks its IPA tone mark. These are minor but consistent omissions that pattern with the broader problem of mid-tone erasure in the Yoruba IPA fields.

---

### 23. `ig` — sun — segmental: `anyanwụ` coarticulated nasal; tone absent
- **File:** `words/sun.js` line 254
- **Current:** `["anyanwụ", "aɲaŋwʊ"]`
- **Expected:** `["anyanwụ", "àɲàŋ͡mwʊ̀"]` with tie-bar on labiovelar nasal
- **Why:** `anyanwụ` (sun, literally 'eye of the day') contains two nasal segments: `ny` = `/ɲ/` (palatal nasal — correctly transcribed) and `nw` = the labiovelar nasal (same as `nwamba` cat, issue 8). The `nw` → `ŋw` sequence error recurs here. Additionally all vowels lack tone marks. The standard tonal pattern is L throughout in isolation (`àɲàŋ͡mwʊ̀`).

---

## Summary

The dataset contains **three systemic tone-suppression errors** that affect nearly every entry in these three languages:

1. **Igbo IPA fields** (20/20 entries): zero tone marks on any vowel in any word. Igbo has phonemic H, L, and downstep; the omission is not trivial.
2. **Hausa IPA fields** (20/20 entries): zero tone marks and near-total absence of vowel length marks. Hausa has H/L/falling tone plus phonemic length contrast; both are suppressed.
3. **Yoruba IPA fields**: mid tone is systematically unmarked. IPA does not share Yoruba orthographic convention where unmarked = mid; each IPA vowel needs an explicit tone diacritic.

Beyond tone, the following segmental errors recur:
- Igbo `nw-` → IPA `ŋw` (issues 8, 15, 23): should be `ŋ͡m` or `ⁿw` for the co-articulated labial-velar nasal
- Hausa implosive `ɗ` → IPA `dʼ` (issue 16): confuses implosive with ejective notation
- Hausa vowel quality in `kare`: `ɛ` for mid-close Hausa `e` (issue 19)

---

## Worker round-1 response (作業者round-1)

Thank you for the detailed tonological review. I have applied the one clear, unambiguous segmental error and held the remainder per the project editing policy (we only fix clear local errors / internal inconsistencies, not dataset-wide convention choices the corpus has already settled).

### Applied

**Issue 16 — `ha` / `one` — implosive `ɗ` mis-transcribed as ejective `dʼ`** — (applied by orchestrator this round)
- `words/one.js` line 265, `ha` IPA field: `dʼaja` → `ɗaja`.
- This is a genuine, unambiguous phonetic error: Hausa `ɗ` is an alveolar **implosive** (ingressive glottalic), whereas `dʼ` notates an **ejective** (egressive glottalic) — a different phonation type entirely (Newman 2000). The orthographic field already carries the correct IPA symbol `ɗ`, and `dʼ` occurs nowhere else in the corpus, so this is an isolated local error, not a convention. Only the IPA field is changed; orthography and tone treatment are untouched.

### Held with rationale (won't-fix this round)

- **Issues 1–4, 9–15, 17, 20, 22 — systematic absence of tone marks (and Hausa vowel-length marks) in IPA.** These are dataset-wide convention choices, not local errors — by your own framing (issues 11 and 17: "all 20/20 entries"). The wordmap corpus uses a broad IPA transcription that does not mark tone for these languages, consistently across every Yoruba/Igbo/Hausa entry. Changing this is a system-level convention decision for the whole corpus, outside the scope of a per-file error fix, so I am holding rather than partially marking a handful of words (which would create the very inconsistency the policy guards against).
- **Issues 8, 15, 23 — Igbo `nw-` → `ŋw` vs `ŋ͡m`/`ⁿw`.** Sequence vs. co-articulated is a legitimate analytic choice. `ŋw` is a defensible broad transcription and is applied consistently across `cat`/`moon`/`sun`. Not an unambiguous error; held.
- **Issue 19 — Hausa `kare` `ɛ` vs `e`.** Vowel-quality / dialect choice (you note dialectal variation yourself); arguable, not unambiguous. Held.
- **Issue 21 — `pcm` / `water` orthographic accent vs IPA.** The IPA omitting the accent matches the corpus-wide broad convention; the proposed `ˈwɔta` stress mark is an addition rather than a clearly-correct local fix, and the orthographic accent is intentional. Held pending a convention-level decision.
- **Issue 7 — IPA tie-bar on `ɡb`.** Explicitly flagged by you as presentation, not a phonological error. Held.
- **Issue 18 — Hausa `ky` `kʲ` vs `c`.** You note `kʲ` is "a valid surface-phonetic reading." Held.
- **Issues 5, 6 — confirmed correct by reviewer** (`ìyá`→`ìjá`, `oòɾùn` flap); no action needed.

---

## Reviewer round-1 response (再評価 round-1)

I verified every claim against the live per-word data files (`words/*.js`, keys `yo:`/`ig:`/`ha:`/`pcm:`, format `["surface","ipa"]`). I additionally ran a corpus-wide audit of tone-marking and vowel-quality consistency across all 20 entries per language to test the worker's "system-level convention" defence rather than taking it on faith.

### Verification of the applied fix

- **Issue 16 (`ha`/`one`) — ACCEPTED ✓ and CONFIRMED in live data.** `words/one.js` line 265 now reads `ha: ["ɗaya", "ɗaja"]`. The ejective notation `dʼaja` is gone; the implosive `ɗ` is in the IPA field. I grepped the whole corpus: `dʼ` appears in no other entry, confirming this was an isolated local error, not a convention. Correct and verified.

### Adjudication of the tone-suppression cluster (issues 1–4, 9–15, 17, 20, 22) — REJECT ✗ (worker's hold upheld)

I audited orthography-vs-IPA tone presence for all 60 entries (20×3). The pattern is unambiguous and internally consistent:

- **Yoruba:** the IPA field mirrors the *orthographic* tone marking exactly. Every word whose orthography carries tone also carries it in IPA (`iná`/`iná`, `bàbá`/`bàbá`, `ọwọ́`/`ɔwɔ́`, `oòrùn`/`oòɾùn`, `ìfẹ́`/`ìfɛ́`, …). The only "toneless" IPA fields — `omi`, `mu`, `igi`, `jẹ` — are exactly the words whose *orthography* is also unmarked (Yoruba leaves mid tone unwritten). So there is no orthography/IPA asymmetry to fix; the IPA faithfully reproduces standard Yoruba orthographic tone-marking.
- **Igbo (20/20) and Hausa (20/20):** neither orthography nor IPA carries tone, in lockstep, for every single entry. This matches standard practical Igbo/Hausa orthography, which is conventionally toneless. The IPA mirrors it.

The reviewer's demand (issues 1–4, 9–15, 22) was that mid/H/L tone be marked in IPA *even where the orthography omits it*. That is a corpus-wide transcription-convention change (broad/orthography-mirroring IPA → narrow tonal IPA), not a local error, and the reviewer's own framing ("all 20/20 entries", issues 11 & 17) concedes its systematic nature. The worker's hold is the correct call. I uphold the reject for the whole cluster. (Issue 20's father/mother `["uba","uba"]`/`["uwa","uwa"]` are part of the same toneless-orthography mirroring; confirmed in live data, no local error.)

### Igbo `nw-` → `ŋw` (issues 8, 15, 23) — REJECT ✗ (hold upheld)

Verified consistent across all three occurrences: `ŋwamba` (cat), `ɔŋwa` (moon), `aɲaŋwʊ` (sun). `ŋw` is a defensible broad transcription of the labial-velar nasal; `ŋ͡m`/`ⁿw` is an alternative analysis, not a correction. Applied uniformly → not a local error. Hold stands.

### Issue 21 (`pcm`/`water` accent mismatch) — REJECT ✗ / △ (hold upheld, with a caveat)

Confirmed live: `pcm: ["wọtá", "wɔta"]` — orthographic acute, bare IPA. I checked: `wọtá` is the **only** pcm entry in the entire corpus carrying an orthographic tonal accent (n=1), so the worker's "matches corpus-wide IPA convention" is technically unfalsifiable from a pattern. That said, the toneless IPA is consistent with the broad-IPA convention used for all the substrate languages here, and the orthographic accent is plausibly intentional (Yoruba-substrate prominence per Faraclas). I accept the hold as a defensible system-level choice, not a clear error.

### Issues 7, 18 — REJECT ✗ (hold upheld)

Both flagged by the reviewer as presentation / "valid surface-phonetic reading" respectively. `ɡb` tie-bar (7) and `kʲ` vs `c` (18) are not unambiguous errors. Holds stand.

### Issue 19 (`ha`/`dog` — `kare` → `kaɾɛ`) — PARTIAL △ → **this one I do NOT accept as fully closed**

This is the one held item that is a genuine *internal inconsistency*, not a system-wide convention. Live data:
- `dog`: `ha: ["kare", "kaɾɛ"]` — orthographic word-final `e` → IPA `ɛ`
- `thanks`: `ha: ["na gode", "na ɡode"]` — orthographic word-final `e` → IPA `e`

The same orthographic `e` in the same word-final open-syllable environment is transcribed two different ways. The worker dismissed this as a "dialect/vowel-quality choice," but unlike the tone issues it is **not** applied consistently — it is an n=1 divergence from the corpus's own treatment of `e` (`gode`). Standard Hausa `kare` has close-mid `/eː/`, matching `gode`, not open-mid `/ɛ/`. This is exactly the class of "clear internal inconsistency" the project policy says to fix. I mark this **OPEN**: `words/dog.js` `ha` IPA `kaɾɛ` → `kaɾe` (optionally `kaɾeː`), to align with `na ɡode`.

### New issues

None beyond promoting issue 19 to an actionable internal-consistency fix. (I checked Hausa `e`, Igbo `nw`, and `dʼ` corpus-wide; no other outliers surfaced.)

### Scorecard

| Item(s) | Judgement |
|---|---|
| 16 (applied) | ✓ accepted, verified in live data |
| 1–4, 9–15, 17, 20, 22 (tone-suppression) | ✗ reject — internally-consistent broad-IPA / orthography-mirroring convention |
| 8, 15, 23 (`ŋw`) | ✗ reject — consistent broad transcription |
| 21 (pcm accent) | ✗ reject — defensible system-level choice (n=1) |
| 7, 18 (tie-bar / `kʲ`) | ✗ reject — presentation / valid reading |
| 19 (`kare` `ɛ` vs `e`) | △ OPEN — genuine internal inconsistency vs `na ɡode`; must fix |

**File status: OPEN** — Dev team must do one thing: fix the internal vowel-quality inconsistency in `words/dog.js`, Hausa IPA `kaɾɛ` → `kaɾe` (or `kaɾeː`) to match the corpus's own `na ɡode` (`ɡode`) treatment of orthographic word-final `e`. All other held items are upheld as defensible system-level conventions and require no action.
