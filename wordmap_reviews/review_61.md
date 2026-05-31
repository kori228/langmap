# Wordmap review #61 — North Germanic / Scandinavian specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a phonologist of the North Germanic (Scandinavian) languages, covering the Insular branch — Icelandic (is) and Faroese (fo) — and the Continental branch — Swedish (sv), Norwegian Bokmål (no) and Nynorsk (nn), Danish (da) — together with their common ancestor, Old Norse (non). My work centres on the features that distinguish these varieties from the rest of Germanic: Swedish/Norwegian lexical pitch accent (accent 1 vs. accent 2), Danish *stød*, Icelandic and Faroese *preaspiration* and the initial-fortis devoicing whereby orthographic ⟨b d g⟩ surface as voiceless unaspirated [p t k], the Icelandic *pre-stopping* of long sonorants (⟨nn ll⟩ → [tn̥ tl̥]), Faroese vowel realisations (the ⟨ó⟩ = [ɔu] *Skerping* vowel, ⟨á⟩ = [ɔa]), and questions of register (childish *mamma/pappa* vs. neutral *mor/far*). My primary reference for the Insular data is Kristján Árnason, *The Phonology of Icelandic and Faroese* (Oxford, 2011); for Swedish orthography and lemma choice I rely on *Svenska Akademiens ordlista* (SAOL, 14th ed.); for Old Norse, Noreen's *Altnordische Grammatik* and the standard normalised orthography. All "Current" values below are copied verbatim from the data files at the line numbers shown; I have not modified any data file.

---

## Issues found

### 1. `fo` — sun — Faroese ⟨ó⟩ is [ɔu], not [ou]
- **File:** `words/sun.js` line 501
- **Current:** `["sól", "souːl"]`
- **Expected:** `["sól", "sɔuːl"]`
- **Why:** Faroese ⟨ó⟩ in a stressed long position is realised with an open first element [ɔu], not the close [ou] of Icelandic. Árnason (2011, §6 on Faroese vowels) gives long ⟨ó⟩ = [ɔu]. The dataset itself already encodes this correctly in the *same file family* — cf. `fo` good `["góður", "kɔuːʊɹ"]` (good.js l.495) and `fo` moon `["máni", "mɔaːnɪ"]` (moon.js l.501) — so `souːl` here is an internal inconsistency: Faroese ⟨ó⟩ should be [ɔu] across the board.

---

### 2. `is` — water — final ⟨tn⟩ lacks the devoiced syllabic [n̥]
- **File:** `words/water.js` line 301
- **Current:** `["vatn", "vahtn"]`
- **Expected:** `["vatn", "vahtn̥"]`
- **Why:** Icelandic *vatn* ends in a syllabic nasal that is voiceless after the (pre-aspirated) cluster: [vaʰtn̥]. The dataset correctly captures the preaspiration as ⟨h⟩, but leaves the final ⟨n⟩ as a plain voiced non-syllabic segment. Árnason (2011, §3.4) describes final ⟨-tn⟩, ⟨-kn⟩, ⟨-pn⟩ as ending in a *voiceless* syllabic sonorant. The transcription should mark both syllabicity and devoicing: [n̥].

---

### 3. `is` — one — ⟨nn⟩ pre-stopping leaves the nasal voiced
- **File:** `words/one.js` line 300
- **Current:** `["einn", "ɛitn"]`
- **Expected:** `["einn", "ɛitn̥"]`
- **Why:** This is the textbook Icelandic *pre-stopping* (pre-aspiration's sister rule): after a long vowel/diphthong, ⟨nn⟩ → [tn̥] with a *voiceless* nasal (Árnason 2011, §3.4.2; the so-called "harðmæli" stop-insertion). The dataset has correctly inserted the [t], but the final nasal must be the voiceless syllabic [n̥], not voiced [n]. Compare *einn* 'one' [eitn̥] in Árnason's own examples.

---

### 4. `is` — hand — ⟨nd⟩ → [nt] is right but the value is under-specified vs. the rest of the set
- **File:** `words/hand.js` line 294
- **Current:** `["hönd", "hœnt"]`
- **Expected:** `["hönd", "hœnt"]` (keep) — but note the vowel: ⟨ö⟩ before a tautosyllabic cluster is short [œ], which is correctly given; flagged only for confirmation
- **Why:** This entry is actually correct (final-devoicing of ⟨d⟩ → [t], short [œ]); I list it to confirm it against Árnason (2011) rather than to change it, since reviewers of adjacent entries have queried the [t]. No change recommended.

---

### 5. `non` — fire — orthography copied verbatim into the IPA slot
- **File:** `words/fire.js` line 524
- **Current:** `["eldr", "eldr"]`
- **Expected:** `["eldr", "ˈeldr̩"]`
- **Why:** The IPA field is an exact copy of the orthographic surface form — a placeholder, not a transcription. Old Norse *eldr* has a syllabic final ⟨-r⟩ (the nom. sg. masc. ending, from PN \*-az), so the phonetic form is [ˈeldr̩] with a syllabic [r̩]. Leaving ⟨eldr⟩ in both slots gives no phonological information.

---

### 6. `non` — drink — surface form copied into IPA, missing geminate marking
- **File:** `words/drink.js` line 518
- **Current:** `["drekka", "drekːɑ"]`
- **Expected:** `["drekka", "drɛkːɑ"]`
- **Why:** The geminate [kː] is fine, but the stressed vowel of *drekka* is short ⟨e⟩ = [ɛ] before a geminate, not the close [e] given. Old Norse short ⟨e⟩ in a closed syllable is the open-mid [ɛ] (Noreen §96). Compare the *fo*/*is* cognates in this very file (`fo` `["drekka","tɹɛhka"]` l.495, `is` `["drekka","trɛhka"]` l.294), both of which use [ɛ].

---

### 7. `non` — heart — initial ⟨hj⟩ should be [çj]/[hj] cluster, vowel quality off
- **File:** `words/heart.js` line 518
- **Current:** `["hjarta", "hjɑrtɑ"]`
- **Expected:** `["hjarta", "hjarta"]`
- **Why:** Old Norse short ⟨a⟩ is the central-to-front [a], not the back [ɑ]. The dataset uses [ɑ] for both vowels of *hjarta* here, but ON did not have a back /ɑ/ phoneme in this position (the back vowel was ⟨ǫ⟩ = [ɔ]); short ⟨a⟩ = [a] (Noreen §85). Both vowels should be [a]: [hjarta].

---

### 8. `non` — eat — short ⟨e⟩ and final ⟨-a⟩ quality
- **File:** `words/eat.js` line 518
- **Current:** `["eta", "etɑ"]`
- **Expected:** `["eta", "ɛta"]`
- **Why:** *eta* has short stressed ⟨e⟩ = [ɛ] in the open syllable (the long-vowel reflex would be written ⟨é⟩), and the unstressed ending ⟨-a⟩ = [a], not back [ɑ]. The dataset's [etɑ] uses a too-close [e] and a back [ɑ]; ON had neither in this word (Noreen §96, §85).

---

### 9. `sv` — mother — register mismatch with the rest of the Scandinavian set
- **File:** `words/mother.js` line 164
- **Current:** `["mamma", "mamːa"]`
- **Expected:** `["mor", "muːr"]`
- **Why:** For the parental terms the dataset uses the *neutral* lemma everywhere else in North Germanic — `no`/`da` *mor* (l.165–166), `nn` *mor* (l.500), `is`/`fo`/`non` *móðir* — but for Swedish it switches to the *child-register* hypocoristic *mamma*. This is a register inconsistency: the unmarked Swedish citation form parallel to *mor* is **mor** [muːr] (SAOL s.v. *mor*). If the intent were the affectionate register, then `no`/`da` should likewise be *mamma*; as it stands, only Swedish is out of step.

---

### 10. `sv` — father — same register mismatch as #9
- **File:** `words/father.js` line 164
- **Current:** `["pappa", "papːa"]`
- **Expected:** `["far", "fɑːr"]`
- **Why:** Parallel to #9: every other variety gives the neutral term — `no`/`da` *far* (l.165–166), `nn` *far* (l.494), `is`/`fo` *faðir*, `non` *faðir* — while Swedish alone gives the child-register *pappa*. The unmarked Swedish form is **far** [fɑːr] (SAOL s.v. *far*). The two Swedish parental entries should match the register chosen for the rest of the row.

---

### 11. `sv` — water — disyllable missing accent-2 / stress mark
- **File:** `words/water.js` line 164
- **Current:** `["vatten", "vatːɛn"]`
- **Expected:** `["vatten", "ˈvatːɛn"]`
- **Why:** *vatten* is a disyllable bearing the Swedish *grave* (accent 2) tonal pattern; at minimum the primary-stress mark ˈ should head the transcription, as the dataset does for comparable polysyllables elsewhere. Leaving it unmarked obscures that stress is initial and that this is an accent-2 word (Riad, *The Phonology of Swedish*, 2014). A fuller transcription would be [²vatːɛn]; the floor requirement is the leading ˈ.

---

### 12. `no` — water — accent-2 / stress not marked on the long monosyllable+coda
- **File:** `words/water.js` line 165
- **Current:** `["vann", "vɑnː"]`
- **Expected:** `["vann", "ˈvɑnː"]`
- **Why:** Bokmål *vann* carries lexical tone; while it is monosyllabic, the leading stress mark is the dataset's convention for stressed forms and is absent here. Minor but consistent: add ˈ. (Kristoffersen, *The Phonology of Norwegian*, 2000.)

---

### 13. `da` — eat — initial ⟨sp⟩ shows no aspiration loss issue, but the vowel is fine; flag the ⟨d⟩ of *spise* approximant
- **File:** `words/eat.js` line 166
- **Current:** `["spise", "sbiːsə"]`
- **Expected:** `["spise", "sb̥iːsə"]`
- **Why:** Danish ⟨p⟩ after ⟨s⟩ is the unaspirated lenis, conventionally transcribed [b̥] (voiceless [b]) in the Dania-to-IPA mapping used by Grønnum (*Fonetik og fonologi*, 2005). The dataset writes a fully voiced [b]; after [s] the stop is voiceless-unaspirated, so the under-ring [b̥] is the standard notation. (Comparable to the cat entry's [d̥], l.166 of cat.js, which *is* marked — so this is an internal inconsistency.)

---

### 14. `da` — thanks — ⟨k⟩ realised as voiced [ɡ] needs the lenis under-ring
- **File:** `words/thanks.js` line 166
- **Current:** `["tak", "tʰaɡ"]`
- **Expected:** `["tak", "tʰaɡ̊"]`
- **Why:** Final orthographic ⟨k⟩ in Danish *tak* is the lenis unaspirated stop, voiceless [ɡ̊] (Grønnum 2005). The dataset gives a fully voiced [ɡ], which would imply phonetic voicing Danish does not have here; the standard transcription is the devoiced-lenis [ɡ̊]. (Same convention the file uses for da *kat* [kʰæd̥], cat.js l.166.)

---

### 15. `fo` — drink — initial ⟨dr⟩ devoicing and preaspiration are right; final ⟨a⟩ noted
- **File:** `words/drink.js` line 495
- **Current:** `["drekka", "tɹɛhka"]`
- **Expected:** `["drekka", "tɹɛhka"]` (confirm; optionally [tɹɛhkːa])
- **Why:** Faroese initial ⟨d⟩ → [t] and ⟨kk⟩ → preaspirated [hk] are correctly captured. The only refinement is that the post-aspiration stop may also be marked long; this is a confirmation entry, not an error. No change required. (Árnason 2011, Faroese preaspiration.)

---

### 16. `is` — fire — final ⟨-ur⟩ should show the devoiced [r̥]
- **File:** `words/fire.js` line 300
- **Current:** `["eldur", "ɛltʏɹ"]`
- **Expected:** `["eldur", "ɛltʏr̥"]`
- **Why:** Two points. (a) The masc. nom. ending ⟨-ur⟩ ends in a *voiceless* [r̥] when word-final/pre-pausal in Icelandic (Árnason 2011, §4 on sonorant devoicing). (b) The symbol used, ⟨ɹ⟩ (alveolar approximant), is the English rhotic; Icelandic ⟨r⟩ is an alveolar trill/tap [r], so the devoiced final should be [r̥], not [ɹ]. This ⟨ɹ⟩-for-⟨r⟩ slip recurs across the Icelandic and Faroese entries (e.g. is good `kouːðʏɹ` good.js l.294, fo father `feaːɪɹ` father.js l.495); [r]/[r̥] is the correct base symbol.

---

### 17. `is` — mother — non-Icelandic rhotic symbol ⟨ɹ⟩ in final position
- **File:** `words/mother.js` line 300
- **Current:** `["móðir", "mouːðɪɹ"]`
- **Expected:** `["móðir", "mouːðɪr̥"]`
- **Why:** As in #16, the word-final ⟨r⟩ of *móðir* is a *voiceless* tap/trill [r̥], not the English approximant [ɹ]. Icelandic has no [ɹ]; the rhotic is [r] (Árnason 2011). The final sonorant of a pre-pausal ⟨-ir⟩ ending is devoiced. Recommend [mouːðɪr̥].

---

### 18. `non` — mother — IPA omits the syllabic/voiced final ⟨r⟩ and uses back [oː] correctly but lenites ⟨ð⟩ fine
- **File:** `words/mother.js` line 524
- **Current:** `["móðir", "moːðir"]`
- **Expected:** `["móðir", "ˈmoːðir̩"]`
- **Why:** Old Norse *móðir* is stress-initial and the ending ⟨-ir⟩ is a full unstressed syllable; the transcription should carry the primary-stress mark ˈ (absent here) for consistency with how the dataset marks ON polysyllables. The segments [moːðir] are otherwise accurate (ON long ⟨ó⟩ = [oː], intervocalic ⟨ð⟩ = [ð]). The fix is the leading ˈ; optionally mark the final [r̩] as syllabic.

---

### 19. `fo` — mother — intervocalic ⟨ð⟩ is silent/[j]-glide, transcription drops it without a glide
- **File:** `words/mother.js` line 501
- **Current:** `["móðir", "mɔuːɪɹ"]`
- **Expected:** `["móðir", "mɔuːjɪr̥"]`
- **Why:** In Faroese, orthographic intervocalic ⟨ð⟩ between ⟨ó⟩/⟨u⟩ and a front vowel is realised as a [j] glide (the *ð*-glide rule; Árnason 2011, Faroese §on ð and glide insertion). The dataset has deleted ⟨ð⟩ entirely (giving a vowel hiatus [uːɪ]) rather than inserting the conditioned [j]; standard Faroese *móðir* is [mɔuːjɪɹ]. Also the final rhotic should be [r̥] per #16. Recommend [mɔuːjɪr̥].

---

### 20. `sv` — heart / love — retroflex ⟨rt⟩, ⟨rl⟩ assimilation: confirm the retroflex segments
- **File:** `words/love.js` line 164
- **Current:** `["kärlek", "ɕæːɭɛk"]`
- **Expected:** `["kärlek", "²ɕæːɭɛk"]` (add accent-2/stress); segments confirmed
- **Why:** The retroflex [ɭ] from ⟨rl⟩ and the front-vowel softening of ⟨k⟩ → [ɕ] are correct for Central Standard Swedish (Riad 2014). The missing element is the prosodic mark: *kärlek* is a disyllabic accent-2 word and should at least carry ˈ (ideally the accent-2 mark). Same prosodic gap as #11. Segmentally the entry is sound; the fix is prosodic notation.

---

*All line numbers reference the state of the files as of the review date (2026-05-31). No data files were modified.*
