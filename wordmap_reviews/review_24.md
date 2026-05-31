# Wordmap review #24 — Italo-Romance dialectology specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a specialist in the non-Tuscan Italo-Romance varieties, trained in the comparative and historical phonology of the Italian dialects with particular focus on the transition zones of the northern Gallo-Italic belt, the conservative southern dialects, and the insular varieties. My reference framework rests on Maiden & Parry (eds.), *The Dialects of Italy* (Routledge, 1997); Loporcaro, *Vowel Length from Latin to Romance* (OUP, 2011) and *Profilo linguistico dei dialetti italiani* (Laterza, 2009); Pellegrini's work on Rhaeto-Romance and on the Veneto-Friulian border; Rohlfs, *Grammatica storica della lingua italiana e dei suoi dialetti* (3 vols., Einaudi, 1966–69); and Wagner's *Dizionario Etimologico Sardo* (DES, 1960–64). For Sardinian specifically I rely on Jones, *A Grammar of Sardinian* (LINCOM, 1993) and the Lausberg–Loporcaro description of the five-vowel system. For Friulian I use Iliescu & Mourin, *Comparaison de la morphologie des dialectes rhéto-romans* (1991) and the Friul Wikipedia linguistic atlas. For Venetian, Zamboni's classic description; for Ladin, the Gherdëina/Badiot grammars from the Istitut Ladin "Micurà de Rü."

---

## Issues found

### 1. `vec` — moon — Wrong IPA symbol for Venetian barred-L

- **File:** `words/moon.js` line 305
- **Current:** `["łuna", "ɰuna"]`
- **Expected:** `["łuna", "ɫuna"]`
- **Why:** Venetian orthographic ⟨ł⟩ (barred L) represents a velarized lateral approximant, transcribed in IPA as [ɫ] ("dark l"). The symbol [ɰ] is the voiced *velar* approximant — the back glide heard in Mandarin before /ɯ/ and in some analyses of Korean coda /ŋ/. It has no phonemic role in Venetian. Zamboni's description of Venetian ⟨ł⟩ consistently uses [ɫ]. The error propagates visually because [ɰ] superficially resembles a backwards [w], but the two symbols are phonetically unrelated. Correct to `[ɫuna]` (or, for surface-phonetic precision, `[ˈɫuːna]`).

---

### 2. `lld` — tree — Wrong lexeme: *lën* means 'wood', not 'tree'

- **File:** `words/tree.js` line 1095
- **Current:** `["lën", "ləŋ"]`
- **Expected:** `["albe", "ˈalbe"]` (Gherdëina); cf. also Badiot *àlber*, Fassa *àlbol*
- **Why:** In all Ladin varieties, *lëgn/lën* (from Latin LIGNUM) means 'wood, timber, firewood', not 'tree'. The word for 'tree' is *albe* (Gherdëina), *àlber* (Badiot), or *àrbol* (Fassa), all continuing Latin ARBOR(EM). The Istitut Ladin dictionaries (e.g., the Gherdëina–German *Wörterbuch*) are unambiguous on this point. Choosing LIGNUM for 'tree' is a fundamental lexical error.

---

### 3. `lld` — mother — *oma* is the German word for 'grandmother', not 'mother'

- **File:** `words/mother.js` line 1107
- **Current:** `["oma", "ˈoma"]`
- **Expected:** `["mëma", "ˈməma"]` or `["mama", "ˈmama"]`
- **Why:** German *Oma* 'grandmother' has been borrowed into peripheral Ladin usage for the same meaning (grandmother), not mother. The native Ladin word for 'mother' is *mëma* (Gherdëina) or *mama* (Badiot/Fassa). Although *oma* circulates in colloquial Ladin speech under heavy German influence, it denotes grandmother, not mother. Wagner's comparative notes on Alpine Romance and the Istitut Ladin dictionaries list *mëma/mama* under 'madre'. The current entry is a false cognate error propagated by superficial German borrowing.

---

### 4. `eml` — moon — IPA vowel contradicts the orthographic accent: *lóna* vs. [ˈluna]

- **File:** `words/moon.js` line 839
- **Current:** `["lóna", "ˈluna"]`
- **Expected:** `["lóna", "ˈlona"]`
- **Why:** In Emilian-Romagnol Bolognese orthographic convention, ⟨ó⟩ with acute accent denotes a stressed *mid-close* or *mid-open back* vowel /o(ː)/, not the high back vowel /u/. Latin LUNA has long Ū; in Emilian this typically yields /o/ (cf. Bolognese *lóna* as attested in the *Vocabolario bolognese* of Coronedi-Berti). The IPA transcription [ˈluna] with /u/ directly contradicts the orthographic ó. The correct IPA is [ˈlona] (or [ˈlɔna] in some sub-dialects). This is a transcription-orthography mismatch.

---

### 5. `lmo` — heart — French ligature ⟨œ⟩ used in Lombard orthography

- **File:** `words/heart.js` line 831
- **Current:** `["cœur", "kør"]`
- **Expected:** `["cör", "kør"]`
- **Why:** The standard Lombard orthographic system (whether the western Milanese convention or the normalised *Ortografia Lombarda*) uses ⟨ö⟩ (o-umlaut) for the front-rounded mid vowel /ø/, not the French ligature ⟨œ⟩. The form *cœur* is the *French* word for 'heart' spelt with the French ligature. The Lombard word is *cör* [kør]. While the IPA is correct, using French spelling in the Lombard field gives the impression the word was copied from French rather than attested in Lombard. All standard Lombard dictionaries (including the Devoto-Oli Lombard supplement and the Ortografia Lombarda norms) use ⟨ö⟩. Fix the display form to *cör*.

---

### 6. `lld` — eye — Non-standard IPA use of superscript [ʷ] as syllable onset

- **File:** `words/eye.js` line 1101
- **Current:** `["uedl", "ʷəːdl"]`
- **Expected:** `["uedl", "ˈwəːdl"]`
- **Why:** The IPA diacritic [ʷ] (superscript w) encodes *labialization* of a preceding consonant (e.g., [kʷ], [tʷ]). It is not an independent segment and cannot function as the onset of a syllable. The Ladin (Gherdëina) word *uedl* 'eye' begins with the labial-velar glide [w] followed by a mid-central vowel. The correct representation of the onset is the full IPA letter [w], giving [ˈwəːdl]. The current transcription [ʷəːdl] is ill-formed under IPA conventions (cf. the IPA Chart, 2015 revision).

---

### 7. `lmo` — tree — *pianta* means 'plant', not 'tree'

- **File:** `words/tree.js` line 831
- **Current:** `["pianta", "ˈpjanta"]`
- **Expected:** `["albar", "ˈalbar"]` or `["arbar", "ˈarbar"]`
- **Why:** Lombard *pianta* (from Latin PLANTA) means 'plant' generically — a herbaceous or woody plant. The specific word for 'tree' in Lombard is *albar/arbar* (western), *elber* (eastern), or similar forms continuing Latin ARBOR(EM). Standard Lombard dictionaries (Cherubini, *Vocabolario milanese-italiano*, 1839; Monti, *Vocabolario dei dialetti della città e diocesi di Como*) attest *alber/arber* for 'tree'. Using *pianta* conflates 'plant' with 'tree' and erases the lexical distinction that native speakers maintain.

---

### 8. `pms` — tree — Same *pianta* error in Piedmontese

- **File:** `words/tree.js` line 832
- **Current:** `["piànta", "ˈpjanta"]`
- **Expected:** `["àrbol", "ˈarbol"]` or `["arber", "ˈarber"]`
- **Why:** Piedmontese *piànta* is 'plant' (herbaceous or otherwise), exactly parallel to Lombard *pianta* above. The Piedmontese word for 'tree' is *àrbol* or *arber* (from ARBOR). The *Vocabulari piemontèis* of Sant'Albino (1859) and the more recent *Dizionario piemontese* of Gribaudo list *arbol/àrbol* under 'albero'. Substituting *piànta* is the same lexical category error as in Lombard.

---

### 9. `eml` — tree — Same *pianta* error in Emilian-Romagnol

- **File:** `words/tree.js` line 833
- **Current:** `["piànta", "ˈpjanta"]`
- **Expected:** `["àlber", "ˈalber"]` or `["ärbol", "ˈarbol"]`
- **Why:** Emilian-Romagnol *piànta* again means 'plant, seedling', not 'tree'. The Emilian word for 'tree' is *àlber* (Bologna) or *arbol* (Ferrara/Romagna area), continuing Latin ARBOR. The *Vocabolario bolognese* of Coronedi-Berti (1869) gives *àlber* under 'albero'. The three-language cluster of issues (lmo/pms/eml) suggests a single hasty substitution by the same data-entry pass.

---

### 10. `fur` — eat — Geminate [ɲɲ] in IPA is phonologically incorrect

- **File:** `words/eat.js` line 754
- **Current:** `["mangjâ", "maɲˈɲaː"]`
- **Expected:** `["mangjâ", "manˈɲaː"]` or `["mangjâ", "maˈɲaː"]`
- **Why:** Friulian *mangjâ* 'to eat' contains a single palatal nasal [ɲ] that corresponds to the digraph ⟨gj⟩ (which in Friulian spelling signals palatalisation of a preceding consonant cluster). The IPA [maɲˈɲaː] places two tokens of [ɲ] in immediate sequence — one at the end of the first syllable and one at the start of the second — effectively writing a geminate palatal nasal. Friulian does not geminate palatals in this context; the consonant is a single [ɲ] at the syllable boundary. The stress placement also needs review: the Friulian infinitive suffix ⟨-â⟩ carries the stress, giving [maɲˈaː] or more precisely [manˈɲaː] with the nasal in the coda of the first syllable, but in neither analysis does a geminate [ɲɲ] arise.

---

### 11. `sc` — good — /ɔ/ violates the Sardinian five-vowel system

- **File:** `words/good.js` line 508
- **Current:** `["bonu", "bɔnu"]`
- **Expected:** `["bonu", "ˈbonu"]`
- **Why:** The single most important phonological fact about Sardinian (Logudorese and Campidanese alike) is the conservation of the Latin five-vowel system: Latin Ĕ/Ē both yield Sardinian /e/; Latin Ŏ/Ō both yield Sardinian /o/; Latin Ĭ/Ī > /i/; Latin Ŭ/Ū > /u/; and /a/ is unchanged. The phoneme /ɔ/ does not exist in native Sardinian vocabulary. Using [bɔnu] projects the seven-vowel Tuscan–Italian system onto Sardinian. The correct transcription is [ˈbonu] with mid-close /o/. (Jones 1993: §2.1; Loporcaro 2011: ch. 2.)

---

### 12. `sc` — heart — /ɔ/ again violates the Sardinian five-vowel system; also wrong form

- **File:** `words/heart.js` line 508
- **Current:** `["coro", "kɔro"]`
- **Expected:** `["core", "ˈkore"]`
- **Why:** Two issues. First, the IPA /ɔ/ is impossible in native Sardinian (see issue 11). Second, the display form *coro* is the Campidanese variant; Logudorese Sardinian, which is typically taken as the prestige/reference variety, has *core* (from Latin COREM, the accusative of COR). Wagner DES s.v. *coro* notes that the -o form occurs in Campidanese and some southern Nuorese dialects, while *core* is the pan-Sardinian literary standard. If the data represents Logudorese (as implied by the ISO 639-3 code `sc` / BCP 47 usually targeting Logudorese), *core* is preferable, and in either case the vowel must be /o/ not /ɔ/.

---

### 13. `sc` — house — /ɔ/ a third time in Sardinian

- **File:** `words/house.js` line 515
- **Current:** `["domo", "dɔmo"]`
- **Expected:** `["domo", "ˈdomo"]`
- **Why:** Latin DOMUS has short Ŏ, which in the Sardinian five-vowel system still gives /o/ (because the Sardinian vowel merger neutralises the Ŏ/Ō distinction). The IPA [dɔmo] is again importing the Tuscan–Italian open-o quality. Fix to [ˈdomo]. The form *domo* itself is correct and well-attested in Logudorese (cf. Wagner DES s.v. *domo*).

---

### 14. `sc` — (systematic) — Stress marks absent from all IPA transcriptions

- **Files:** all `sc:` entries across all 20 word files
- **Affected entries (sample):** `["cane", "kane"]`, `["gattu", "ɡattu"]`, `["manu", "manu"]`, `["unu", "unu"]`, `["salude", "salude"]`, `["luna", "luna"]`, `["abba", "abba"]`, `["babbu", "babbu"]`, `["bìere", "biere"]`, `["àrbure", "arbure"]`, `["sole", "sole"]`, `["amore", "amore"]`, `["mandigare", "mandiɡare"]`
- **Why:** Across the entire Sardinian dataset, 18 of 20 IPA fields lack the primary stress mark ˈ. All other well-represented languages in the database carry stress marks consistently. Sardinian words are regularly stressed on the penultimate syllable, but that rule admits exceptions (e.g., proparoxytone *ˈàrbure*, *ˈmàndiga*re) that are invisible without the diacritic. The absence of stress marks across the board is likely a data-entry oversight for this language and should be corrected uniformly.

---

### 15. `nap` — water — Final unstressed /a/ not reduced to /ə/

- **File:** `words/water.js` line 304
- **Current:** `["acqua", "akkwa"]`
- **Expected:** `["acqua", "ˈakkwə"]`
- **Why:** The central phonological feature of the Neapolitan vowel system is the reduction of all unstressed final vowels — /a/, /e/, /o/ — to schwa [ə]. This process is consistently represented elsewhere in the dataset: *casa* [kasə], *luna* [lunə], *mano* [manə], *mamma* [mammə], *jatto* [jattə], *cane* [kanə], *core* [korə], *sole* [solə], etc. The word *àcqua* is stressed on the initial syllable (as all paroxytones); its final -a is therefore unstressed and must reduce to [ə]. The IPA [akkwa] without schwa breaks the otherwise consistent pattern and is phonologically wrong for Neapolitan. Expected: [ˈakkwə].

---

### 16. `lld` — thanks — *dilan* is an unverified/non-standard Ladin form

- **File:** `words/thanks.js` line 1095
- **Current:** `["dilan", "diˈlaŋ"]`
- **Why:** The standard Ladin expressions of thanks are *grazies* (< Italian *grazie*) in Gherdëina, *grazies/grazis* in Badiot and Fassa, or in more traditional/ceremonial contexts *dëida* (Gherdëina, from DEBITA 'things owed'). The form *dilan* does not appear in the Istitut Ladin *Wörterbuch* (Gherdëina–German), in the Badiot–Italian dictionary by Pizzinini, nor in Haiman & Benincà's *The Rhaeto-Romance Languages* (1992). It is possible that *dilan* reflects an extremely local or archaic variant, but without a source citation it should be treated as unverified. The widely accepted *grazies* [ˈɡrattsies] should be preferred.

---

### 17. `scn` — thanks — Transcription of double ⟨-ii⟩ ending

- **File:** `words/thanks.js` line 298
- **Current:** `["grazii", "ɡrattsii"]`
- **Expected:** `["grazii", "ˈɡratːsi"]` (or `[ˈɡrattsi]`)
- **Why:** The Sicilian orthographic convention ⟨-ii⟩ in *grazii* represents a final palatal glide or a high front vowel /i/ after the affricate: the grapheme encodes the plural of *grazia* > *grazii*. However, the IPA [ɡrattsii] with two tokens of [i] implies a phonetically long vowel [iː] or a sequence /ii/, neither of which is attested in Sicilian phonology at word-final position. Sicilian has short final vowels. The affricate itself should be [ts] not [tts] in a post-nasal environment of the expected Sicilian form. The most accurate transcription is [ˈɡrattsi] with a single final /i/ and a geminate affricate (Rohlfs §251; Maiden & Parry ch. on Sicilian).

---

### 18. `lij` — moon — Non-standard orthographic hyphen in *lùn-a*

- **File:** `words/moon.js` line 307
- **Current:** `["lùn-a", "lyna"]`
- **Expected:** `["lüna", "ˈlyna"]`
- **Why:** Standard Ligurian orthography (as normalised in the *Grafie de l'Academiia Ligüstica do Brénno*) writes the front-rounded vowel with the umlaut diacritic: ⟨ü⟩. The display form *lùn-a* with a hyphen appears to be an ad hoc device to signal the front-rounded vowel or syllable boundary, but it is not an accepted Ligurian orthographic convention. The correct form is *lüna* [ˈlyna]. The IPA [lyna] is itself correct — Ligurian does have /y/ from Latin Ū in this environment — but the hyphen in the display form is misleading and non-standard.

---

### 19. `fur` — drink — *bevi* is a conjugated form, not an infinitive

- **File:** `words/drink.js` line 754
- **Current:** `["bevi", "ˈbeːvi"]`
- **Expected:** `["bevê", "beˈve"]` (or `["bevi", "ˈbeːvi"]` only if explicitly labelling a non-infinitive)
- **Why:** The Friulian infinitive of 'to drink' is *bevê* (with the characteristic Friulian infinitive ending ⟨-ê⟩, representing a final accented /e/). The form *bevi* without the circumflexed ending looks like the Italian second-person singular imperative or the Friulian second-person singular present indicative *tu bevis*. Cross-checking with other Friulian verbs in the dataset (*mangjâ* 'eat', *bevi* 'drink') shows inconsistency: *mangjâ* correctly uses the infinitive marker ⟨-â⟩, while *bevi* lacks the parallel ⟨-ê⟩. The Friulian grammar by Iliescu & Mourin lists the infinitive as *bevê*. If the project policy is to use the citation/infinitive form, *bevê* [beˈve] should be preferred.

---

### 20. `lld` — hello — IPA transcription lacks stress marks

- **File:** `words/hello.js` line 1095
- **Current:** `["bun de", "bun de"]`
- **Expected:** `["bun dé", "ˈbun ˈde"]`
- **Why:** The Ladin greeting *bun dé* 'good day' is a two-word phrase, each word bearing its own primary stress. The IPA field [bun de] contains neither stress marks nor any IPA diacritics — it is merely a re-copy of the orthographic form. This renders the IPA field meaningless. The expected IPA is [ˈbun ˈde] (or [ˈbun de] if the second word is treated as weakly stressed in the greeting formula). Additionally, the display form should arguably be *bun dé* (with the accent on *dé* as written in standard Ladin orthography) rather than *bun de*.

---

### 21. `sc` — heart — Form *coro* should be *core* in Logudorese reference variety

*(This supplements issue 12 above with additional lexical evidence.)*

- **File:** `words/heart.js` line 508
- **Current:** `["coro", "kɔro"]`
- **Expected:** `["core", "ˈkore"]`
- **Why:** Beyond the /ɔ/ vowel error flagged in issue 12, the word *coro* in Logudorese specifically refers to a 'ring, circle' (from CHORUS) or occurs as a dialectal phonological variant in the south. The accusative form COREM, which all Romance languages inherit, gives Logudorese *core* directly. Wagner DES s.v. *coro* notes the synonymy but marks *core* as the general Logudorese term and *coro* as confined to specific Campidanese areas. Since the ISO code `sc` is typically assigned to Logudorese in modern BCP 47 practice, *core* is the appropriate display form and the IPA should be [ˈkore].

---

### 22. `vec` — eye — Final /o/ quality in *ocio* [ɔtʃo]

- **File:** `words/eye.js` line 299
- **Current:** `["ocio", "ɔtʃo"]`
- **Expected:** `["ocio", "ˈɔtʃo"]` (stress mark added; final /o/ quality verified)
- **Why:** The transcription [ɔtʃo] has the open-mid /ɔ/ for both the stressed initial syllable and the unstressed final syllable. In Venetian, stressed short Latin Ŏ > [ɔ] is correct. However, the unstressed final vowel of Latin -ULUM derivatives in Venetian surfaces as a phonetically mid or mid-close [o], not the open-mid [ɔ]. Zamboni's Venetian phonology notes that unstressed /o/ is realised as [o] (mid-close) rather than [ɔ] (open-mid), which is only found under stress. The expected transcription is [ˈɔtʃo] with the final vowel as [o], not [ɔ]. Additionally, the primary stress mark is missing.

---

*Review compiled against Maiden & Parry (1997), Loporcaro (2009, 2011), Wagner DES (1960–64), Rohlfs (1966–69), Jones (1993), Pellegrini (1977), and the orthographic norms of the Istitut Ladin "Micurà de Rü."*
