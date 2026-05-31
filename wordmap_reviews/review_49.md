# Wordmap review #49 — Andean languages specialist

## Reviewer self-introduction

I specialize in Quechuan and Aymaran linguistics, with particular attention to the phonological contrasts that distinguish the major Andean families and the dialects within them. Primary references for this review: Adelaar with Muysken (2004) *The Languages of the Andes* (Cambridge); Cerrón-Palomino (1987) *Lingüística Quechua* (Cusco: CBC); Cerrón-Palomino (2000) *Lingüística aimara* (Cusco: CBC); Hardman, Vásquez & Yapita (1988) *Aymara: Compendio de estructura fonológica y gramatical* (La Paz: ILCA); Smeets (2008) *A Grammar of Mapuche* (Berlin: Mouton de Gruyter); Catamarca [= Coombs, Coombs & Weber] (1976) *Gramática quechua: San Martín*; Thomas Bridges (1933) *Yamana–English Dictionary* (Buenos Aires: Coni). Spot-checks against Bertonio (1612) *Vocabulario de la lengua aymara* and de Santo Tomás (1560) *Lexicón*.

---

## Issues found

### 1. `yag` — ALL entries — language data is entirely Tajik, not Yahgan/Yamana
- **Files:** all 20 `words/*.js` files, `yag:` line
- **Current (examples):** `["рахмат", "rahmat"]` (thanks), `["мехр", "mehr"]` (love), `["салом", "salom"]` (hello), `["дил", "dil"]` (heart), `["чашм", "tʃaʃm"]` (eye), `["даст", "dast"]` (hand), `["маҳ", "mah"]` (moon)
- **Expected:** Actual Yahgan (Yamana) words in the Roman-script tradition of Thomas Bridges' *Yamana–English* dictionary
- **Why:** Every `yag` entry is written in Cyrillic and the words are Tajik (or closely related Persian/Dari): *rahmat* "thank you" (Tajik/Uzbek/Dari), *mehr* "love/affection" (Tajik/Persian), *salom* "hello" (Tajik/Uzbek), *dil* "heart" (Tajik/Persian/Urdu), *chashm* "eye" (Tajik/Persian/Urdu), *dast* "hand" (Tajik/Persian), *mah* "moon" (Tajik/Persian). Yahgan (Yagán), the extinct language of the Yamana people of Tierra del Fuego, is documented exclusively in Roman script and has no Cyrillic tradition whatsoever. None of the supplied forms correspond to attested Yahgan vocabulary. This is the most severe error in the Andean block: 20 entries covering a spurious language under `yag`.

---

### 2. `qu` — eat — aspirate kh transcribed as velar fricative /x/ instead of /kʰ/
- **File:** `words/eat.js` line 180
- **Current:** `["mikhuy", "mixuj"]`
- **Expected:** `["mikhuy", "mikʰuj"]`
- **Why:** In Quechua orthography the digraph `kh` encodes an aspirated velar stop /kʰ/, not a voiceless velar fricative /x/. The IPA symbol /x/ is phonemically distinct: it is the fricative heard in Spanish *loch* or German *Bach*, whereas Quechua aspirated consonants are phonetically [kʰ] — a voiceless stop with strong aspiration. The correct IPA for *mikhuy* "to eat" is /mikʰuj/. (Cerrón-Palomino 1987: 88–90; compare `cqu:` and `quz:` entries in `eat.js`, both of which correctly give `mikʰuj`.)

---

### 3. `qu` — eat — orthography "mikhuy" is Cusco form but file assigns it to generic qu without aspirate IPA
- **File:** `words/eat.js` line 180
- **Current:** `["mikhuy", "mixuj"]` under generic `qu`
- **Expected:** Either Ayacucho form `["mikuy", "mikuj"]` (consistent with the Ayacucho-based forms used elsewhere in `qu`) or Cusco form with correct IPA `["mikhuy", "mikʰuj"]`
- **Why:** The generic `qu` block elsewhere consistently uses Ayacucho Quechua (Chanka) forms — *yaku* for water, *sacha* (no ejective) for tree, *allillanchu* for hello. Ayacucho Quechua has no aspirated stops; the correct Ayacucho form is *mikuy* (without `h`), as shown in `quy: eat = ["mikuy", "mikuj"]`. Using the Cusco orthography *mikhuy* under generic `qu` while stripping the aspirate from the IPA creates an internally inconsistent entry that is wrong in both registers simultaneously.

---

### 4. `cqu` — moon — Classical Quechua palatal lateral /ʎ/ lost
- **File:** `words/moon.js` line 1022
- **Current:** `["killa", "killa"]`
- **Expected:** `["killa", "kiʎa"]`
- **Why:** In Classical Quechua (and in every phonological analysis of Southern Quechua), the grapheme `ll` represents the palatal lateral approximant /ʎ/, not the alveolar lateral /l/. This is attested since de Santo Tomás (1560) and confirmed by Cerrón-Palomino (1987: 90–93). *Killa* "moon" is /kiʎa/ (confirmed by the parallel entry `quz: ["killa", "kiʎa"]` which correctly shows /ʎ/). Having the Classical variety strip the palatal lateral while the modern Cusco variety retains it is historically inverted.

---

### 5. `quz` — dog — word form reduced from "allqu" to "alqu", palatal lateral /ʎ/ lost
- **File:** `words/dog.js` line 962
- **Current:** `["alqu", "alqu"]`
- **Expected:** `["allqu", "aʎqu"]`
- **Why:** The Cusco Quechua word for dog is *allqu* /aʎqu/, with the palatal lateral /ʎ/ spelled `ll`. The `quz` entry drops the second `l` from the orthography and also drops /ʎ/ from the IPA, yielding /alqu/ with alveolar /l/. Compare `qu: ["allqu", "aʎqu"]` and `cqu: ["allqu", "aʎqu"]`, both of which correctly retain `ll`/`ʎ`. This is an error specific to the Cusco Quechua entry.

---

### 6. `quz` — heart — /ŋ/ assimilation before uvular /q/ missing
- **File:** `words/heart.js` line 1022
- **Current:** `["sunqu", "sunqu"]`
- **Expected:** `["sunqu", "suŋqu"]`
- **Why:** In Cusco Quechua, the nasal consonant /n/ assimilates phonetically to velar/uvular place [ŋ] before the uvular stop /q/. This allophonic process is well established and the Classical Quechua entry in the same file already shows the correct form: `cqu: ["sunqu", "suŋqu"]`. The Cusco Quechua (`quz`) entry should equally show /suŋqu/.

---

### 7. `qu` — heart — same /ŋ/ assimilation missing (low priority relative to #6)
- **File:** `words/heart.js` line 180
- **Current:** `["sunqu", "sunqu"]`
- **Expected:** `["sunqu", "suŋqu"]`
- **Why:** Same process as Issue 6. Even for generic Quechua, the assimilation /n/ → [ŋ] / _q is broadly applicable across southern varieties and should be reflected in the IPA.

---

### 8. `jaq` — eat — IPA /qʼ/ (ejective uvular) does not match orthography "mankaña" (plain velar k)
- **File:** `words/eat.js` line 632
- **Current:** `["mankaña", "manqʼaɲa"]`
- **Expected:** `["mankaña", "mankaɲa"]` (if Jaqaru uses plain /k/) or `["manqʼaña", "manqʼaɲa"]` (if ejective uvular)
- **Why:** The orthographic form *mankaña* uses `k` (plain velar stop), but the IPA field gives /manqʼaɲa/ with an ejective uvular /qʼ/. These are contradictory: the ejective uvular /qʼ/ in Jaqaru is written `q'` (with apostrophe), not `k`. The Aymara cognate *manq'aña* /manqʼaɲa/ has the ejective and the apostrophe, and the Jaqaru IPA appears to have been copied directly from the Aymara entry without updating either the orthography or the phonology. If the Jaqaru word uses plain velar /k/, the IPA must be /mankaɲa/.

---

### 9. `jaq` — mother — wrong word: "maya" = "one", not "mother"
- **File:** `words/mother.js` line 638
- **Current:** `["maya", "maja"]`
- **Expected:** Correct Jaqaru word for mother (e.g. *nuwa* or attested kin-term from Hardman 1983)
- **Why:** *Maya* /maja/ is the Jaqaru (and Aymara) word for "one" — confirmed by `jaq: ["maya", "maja"]` in `words/one.js`. Having the same form for both "one" and "mother" is the hallmark of a copy-paste error from `one.js`. Jaqaru kin terminology documented in Hardman (1983) *Jaqaru: Outline of Phonological and Morphological Structure* uses distinct roots for "mother".

---

### 10. `jaq` — father — ejective /kʼ/ in IPA not marked in orthography
- **File:** `words/father.js` line 632
- **Current:** `["awki", "awkʼi"]`
- **Expected:** `["awki", "awki"]` (if plain stop) or `["awqʼi", "awqʼi"]` (if ejective uvular)
- **Why:** The orthographic form *awki* ends in plain `k` (no apostrophe), but the IPA gives /awkʼi/ with an ejective. In Jaqaru orthographic convention, ejectives are marked with an apostrophe (e.g. `k'`, `q'`). The unadorned *awki* should give IPA /awki/. If the word genuinely ends in an ejective consonant, the orthographic form must also mark it.

---

### 11. `jaq` — hand — double ‹rr› transcribed as flap /ɾ/ instead of trill /r/
- **File:** `words/hand.js` line 632
- **Current:** `["amrra", "amɾa"]`
- **Expected:** `["amrra", "amra"]`
- **Why:** In Jaqaru orthography and in Aymaran languages generally, double `rr` represents the alveolar trill /r/, distinct from single `r` = flap /ɾ/. Hardman (1988) makes this distinction explicit in the Aymara compendium. Transcribing `rr` as /ɾ/ (flap) erases the length/manner contrast.

---

### 12. `arn` — dog — Mapudungun retroflex affricate /ʈʂ/ transcribed as tɾ
- **File:** `words/dog.js` line 643
- **Current:** `["trewa", "tɾewa"]`
- **Expected:** `["trewa", "ʈʂewa"]`
- **Why:** In Mapudungun, the digraph `tr` does not represent the sequence alveolar stop + flap /tɾ/. It is a unified retroflex affricate phoneme /ʈʂ/ (occasionally analysed as /ʈʂ/ or a laminal retroflex depending on the description). Smeets (2008: 19–23) gives this as a distinct phoneme separate from /t/ and /ɾ/. *Trewa* "dog" is therefore /ʈʂewa/, not /tɾewa/. This is one of the most distinctive and typologically unusual features of Mapudungun phonology; omitting it collapses a phonemic contrast.

---

### 13. `arn` — fire — same retroflex affricate error in "kütral"
- **File:** `words/fire.js` line 649
- **Current:** `["kütral", "kɨtɾal"]`
- **Expected:** `["kütral", "kɨʈʂal"]`
- **Why:** *Kütral* "fire" contains the same Mapudungun `tr` = /ʈʂ/ phoneme as *trewa* (Issue 12). The IPA /kɨtɾal/ (velar stop + central vowel + alveolar stop + flap + lateral) fragments the retroflex affricate into two separate phones that do not reflect the actual phonology. Correct IPA: /kɨʈʂal/. (Smeets 2008: 19–23.)

---

### 14. `arn` — moon, good, sun, drink — /e/ possibly a schwa /ə/ in Mapudungun
- **Files:** `words/moon.js` line 649 (`["küyen", "kɨjen"]`), `words/good.js` line 643 (`["küme", "kɨme"]`), `words/sun.js` line 649 (`["antü", "antɨ"]`), `words/drink.js` line 643 (`["pütun", "pɨtun"]`)
- **Current:** terminal or medial `e` transcribed as /e/
- **Expected:** /ə/ in non-high-vowel positions where Mapudungun has the sixth vowel
- **Why:** Mapudungun has six vowels: /a e i o u/ and a sixth central vowel /ə/ (written `e` in some orthographies, `ë` in others). Smeets (2008: 10–14) distinguishes /e/ (front mid) from /ə/ (central mid). In *küme* "good", *küyen* "moon", the final segment is the central vowel /ə/ in Smeets' analysis, not the front /e/. While some analysts treat them as one phoneme, the IPA transcription should reflect the vowel quality documented in the reference grammar. This affects all entries where `e` appears in positions where the schwa alternation operates.

---

### 15. `ay` — tree — "quqa" means herb/plant, not tree specifically
- **File:** `words/tree.js` line 631
- **Current:** `["quqa", "quqa"]`
- **Expected:** A more precise Aymara term for tree (e.g. *quqa* qualified as "plant"; specific tree lexemes vary by Aymara variety)
- **Why:** In Aymara, *quqa* (from Bertonio 1612 *ccoca*) denotes "plant, herb, green vegetation" broadly — it is the generic word for plant material and is not specific to trees. Adelaar with Muysken (2004: 263) and Cerrón-Palomino (2000) both note that individual tree species have their own names in Aymara and that *quqa* alone is too general. A gloss note or variant form distinguishing "plant" from "tree" is warranted.

---

### 16. `ay` — hello — shortened form "kamisaki" vs. standard "kamisaraki"
- **File:** `words/hello.js` line 631
- **Current:** `["kamisaki", "kamisaki"]`
- **Expected:** `["kamisaraki", "kamisaɾaki"]`
- **Why:** The canonical Aymara greeting is *kamisaraki* "how are you (then)?" — *kamisa* (how) + *-ra* (topic/continuative) + *-ki* (interrogative enclitic). The form *kamisaki* omits the *-ra-* morpheme and is an informal abbreviation. For a reference dataset, the full form *kamisaraki* is preferred. (Hardman et al. 1988: 301.)

---

### 17. `qu` — water — "yaku" is Ayacucho/northern form; the generic qu entry should clarify dialect affiliation
- **File:** `words/water.js` line 180
- **Current:** `["yaku", "jaku"]`
- **Issue:** `quz: ["unu", "unu"]` uses the Cusco form; generic `qu` uses the Ayacucho form without flagging the split
- **Why:** *Yaku* and *unu* are not mere phonological variants: they are distinct lexical items used in different Quechua branches. *Yaku* is the proto-Quechua term retained in northern/central varieties (Cerrón-Palomino 1987: 265); *unu* is the Cusco-Collao innovation (possibly an Aymara borrowing). Assigning *yaku* to the generic `qu` code without documentation means the Cusco-Collao variety — the most prestigious and largest — is unrepresented at the generic level.

---

### 18. `qu` — hello — "allillanchu" is Ayacucho regional greeting, misassigned to generic Quechua
- **File:** `words/hello.js` line 180
- **Current:** `["allillanchu", "aʎiʎantʃu"]`
- **Expected:** Either the Cusco pan-regional *rimaykullayki* (shown correctly in `quz`) or a note that this is the Chanka/Ayacucho form
- **Why:** *Allillanchu* (literally "Are you well?") is the conventional greeting in Ayacucho/Chanka Quechua. The Cusco prestige form is *rimaykullayki* "I greet you". Presenting *allillanchu* under the generic `qu` code without dialect specification may mislead users into thinking it is the pan-Quechua greeting. At minimum a dialect note is needed; better to use the Cusco prestige form or split.

---

### 19. `jaq` — tree — "qhura" means herb/weed, not tree
- **File:** `words/tree.js` line 632
- **Current:** `["qhura", "qʰuɾa"]`
- **Expected:** A Jaqaru term specifically for tree; *qhura* should be glossed as "weed, herb"
- **Why:** In Jaqaru and Aymara, *qhura* (aspirated uvular) means "weed, wild herb, useless plant" — it has a pejorative or at least non-arboreal sense. Hardman (1983) lists *qhura* = "weed/herb" in Jaqaru. This is the same semantic field as Aymara *quqa*/*qhura*. Neither word denotes a tree (arboreal plant) specifically, and using them for "tree" without qualification overgeneralizes a "plant/herb" term.

---

### 20. `qu` — tree — ejective chʼ missing from generic qu, inconsistent with IPA convention applied elsewhere
- **File:** `words/tree.js` line 180
- **Current:** `["sacha", "satʃa"]`
- **Expected:** Either `["sacha", "satʃa"]` (Ayacucho, no ejective — consistent with Ayacucho dialect policy for generic `qu`) or documentation that the Cusco ejective form *sach'a* /satʃʼa/ is excluded by design
- **Why:** *Sach'a* /satʃʼa/ is the Cusco Quechua (and Classical Quechua) form with ejective /tʃʼ/, confirmed in `quz: ["sach'a", "satʃʼa"]` and `cqu: ["sach'a", "satʃʼa"]`. If `qu` is set to Ayacucho, *sacha* without ejective is correct; but then the word for eat should be *mikuy* (not *mikhuy* with Cusco `kh`), and the generic `qu` data block needs a consistent dialect policy stated explicitly.

---

### 21. `ay` — thanks — IPA /ɣ/ for intervocalic g in "yuspagara" is debatable
- **File:** `words/thanks.js` line 631
- **Current:** `["yuspagara", "juspaɣaɾa"]`
- **Expected:** `["yuspagara", "juspaɡaɾa"]` or documentary note
- **Why:** *Yuspagara* is a lexicalized borrowing from Spanish *Dios pagará* "God will repay". In Aymara phonology there is no native voiced velar stop or fricative. Some phonetic descriptions render the Spanish loanword /g/ as a fricative [ɣ] in fast speech between vowels, but phonemically Aymara treats this as /ɡ/ (a non-native segment kept only in loans). Hardman et al. (1988) do not posit /ɣ/ as an Aymara phoneme. Transcribing the segment as /ɣ/ suggests a native phoneme that does not exist in the inventory.

---

### 22. `qu` — drink — "upyay" IPA /upjaj/: sequence yy → jj reduction unverified
- **File:** `words/drink.js` line 180
- **Current:** `["upyay", "upjaj"]`
- **Note:** Minor concern
- **Why:** *Upyay* = "to drink" ends in the infinitive suffix *-y*. The IPA /upjaj/ renders medial `y` as /j/ and final `y` as /j/, giving /upjaj/. This seems superficially plausible but the final syllable in Quechua infinitives /-y/ is typically a simple glide /j/ appended to a vowel, with no preceding syllable-nucleus vowel inserted. The form /upjaj/ implies an underlying vowel /a/ before the final glide that is not in the orthography; Cerrón-Palomino (1987) treats the infinitival *-y* as a glide suffix /j/ after the stem vowel. Clarification or cross-check with a Quechua phonology source is recommended.

---

### Summary table

| # | Code | Word | Type | Severity |
|---|------|------|------|----------|
| 1 | `yag` | ALL | Wrong language (Tajik data in Yahgan slot) | Critical |
| 2 | `qu` | eat | /x/ instead of /kʰ/ for aspirated kh | High |
| 3 | `qu` | eat | Cusco orthography mixed with Ayacucho IPA | High |
| 4 | `cqu` | moon | /l/ instead of /ʎ/ for Classical Quechua ll | High |
| 5 | `quz` | dog | "alqu" instead of "allqu", /l/ instead of /ʎ/ | High |
| 6 | `quz` | heart | /ŋ/ assimilation before /q/ missing | Medium |
| 7 | `qu` | heart | Same /ŋ/ missing | Medium |
| 8 | `jaq` | eat | Orthography k ≠ IPA qʼ | High |
| 9 | `jaq` | mother | "maya" = "one", not "mother" | Critical |
| 10 | `jaq` | father | Ejective kʼ in IPA not marked in orthography | Medium |
| 11 | `jaq` | hand | rr transcribed as /ɾ/ (flap) not /r/ (trill) | Medium |
| 12 | `arn` | dog | tr = /tɾ/ instead of /ʈʂ/ | High |
| 13 | `arn` | fire | tr = /tɾ/ instead of /ʈʂ/ (kütral) | High |
| 14 | `arn` | moon/good etc. | /e/ may need /ə/ in Mapudungun 6-vowel system | Low |
| 15 | `ay` | tree | *quqa* = plant/herb, not tree | Medium |
| 16 | `ay` | hello | Short form "kamisaki" vs. standard "kamisaraki" | Low |
| 17 | `qu` | water | *yaku* vs. *unu* split undocumented at generic level | Medium |
| 18 | `qu` | hello | Ayacucho-specific greeting under generic code | Medium |
| 19 | `jaq` | tree | *qhura* = weed/herb, not tree | Medium |
| 20 | `qu` | tree | Ejective policy for generic qu undocumented | Low |
| 21 | `ay` | thanks | /ɣ/ is non-native phoneme, /ɡ/ preferred | Low |
| 22 | `qu` | drink | /upjaj/ final glide analysis needs verification | Low |

---

## Worker round-1 response (作業者round-1)

Thanks for the thorough Andean review. I applied the clear, internally-supported IPA/orthography fixes (each backed by a sibling entry in the same file or by an unambiguous surface/IPA mismatch) and held the dialect-policy, lexical-gloss, and "needs-a-sourced-replacement" items.

**Applied (clear errors / internal inconsistencies):**

- **#2/#3 `qu` eat** — `words/eat.js` L180. IPA `mixuj` → `mikʰuj`. The digraph `kh` is the aspirated stop /kʰ/, not the fricative /x/; siblings `quz` and `cqu` both already give `["mikhuy", "mikʰuj"]`. Fixed IPA only; left orthography `mikhuy` unchanged (the Ayacucho-vs-Cusco orthography choice in #3 is a dialect-policy question, see Held). *(applied by orchestrator this round)*
- **#4 `cqu` moon** — `words/moon.js` L1028. IPA `killa` → `kiʎa`. `ll` = palatal lateral /ʎ/; siblings `qu` and `quz` both give `kiʎa`. *(applied by orchestrator this round)*
- **#5 `quz` dog** — `words/dog.js` L962. `["alqu", "alqu"]` → `["allqu", "aʎqu"]`. Restores the dropped second `l` and the palatal lateral; siblings `qu` and `cqu` both give `["allqu", "aʎqu"]`. Orthography change justified because the reviewer flagged the dropped `l` as the error and two siblings agree. *(applied by orchestrator this round)*
- **#6 `quz` heart** — `words/heart.js` L962. IPA `sunqu` → `suŋqu`. /n/ → [ŋ] before uvular /q/; sibling `cqu` already gives `suŋqu`. *(applied by orchestrator this round)*
- **#7 `qu` heart** — `words/heart.js` L180. IPA `sunqu` → `suŋqu`. Same assimilation, consistent with the `cqu` convention. (Left Ayacucho `quy` L963 untouched — out of scope of this finding.) *(applied by orchestrator this round)*
- **#8 `jaq` eat** — `words/eat.js` L632. IPA `manqʼaɲa` → `mankaɲa`. The IPA was copy-pasted from the Aymara sibling `ay: ["manq'aña", "manqʼaɲa"]`. Surface form is the anchor here: `mankaña` has plain `k` and no apostrophe, so the ejective uvular is wrong. Corrected IPA to match the surface; did not invent an ejective orthography. *(applied by orchestrator this round)*
- **#10 `jaq` father** — `words/father.js` L632. IPA `awkʼi` → `awki`. Surface `awki` has no apostrophe; ejective in IPA only is unsupported, so IPA brought into line with the orthographic anchor. *(applied by orchestrator this round)*
- **#11 `jaq` hand** — `words/hand.js` L632. IPA `amɾa` → `amra`. Surface `amrra` (double `rr`) = trill /r/, not flap /ɾ/. *(applied by orchestrator this round)*
- **#12 `arn` dog** — `words/dog.js` L643. IPA `tɾewa` → `ʈʂewa`. Mapudungun `tr` is the unit retroflex affricate /ʈʂ/ (Smeets 2008). *(applied by orchestrator this round)*
- **#13 `arn` fire** — `words/fire.js` L649. IPA `kɨtɾal` → `kɨʈʂal`. Same `tr` = /ʈʂ/. *(applied by orchestrator this round)*

**Held — needs a sourced replacement, not safe to invent:**

- **#1 `yag` (ALL 20 files)** — Confirmed: every `yag` entry is Cyrillic Tajik/Persian (e.g. eat `["хур","xur"]`, love `["мехр","mehr"]`, hand `["даст","dast"]`). This is a real, critical wrong-language error. But the fix is a 20-word data replacement requiring reliable Yahgan/Yamana forms from Bridges (1933); I will not fabricate lexemes. Flagging for a sourced data-import pass (separate task, not a mechanical IPA correction). **Left open.**
- **#9 `jaq` mother** — `words/mother.js` L638 `["maya","maja"]` is identical to `jaq` in `one.js` (= "one"); confirmed copy-paste error. However the reviewer's replacement is tentative ("e.g. *nuwa*"), so the correct Jaqaru kin term is not unambiguously determined. Needs a sourced Jaqaru "mother" form (Hardman 1983). **Left open.**

**Held — dialect-policy / lexical-gloss / convention choices (won't-fix as data edits):**

- **#3 (orthography part), #17, #18, #20** — generic `qu` dialect affiliation (Ayacucho vs Cusco-Collao) is a system-level convention. Changing `mikhuy`/`yaku`/`allillanchu`/`sacha` surface forms or "splitting" the code is a corpus-wide policy decision, not a local error. The IPA inconsistency in #2/#8 is fixed; the lexical/dialect choices are held for a documentation/policy pass. **Open for reviewer decision.**
- **#14 `arn` /e/ vs /ə/** — reviewer notes "some analysts treat them as one phoneme"; not an unambiguous error. **Held.**
- **#15 `ay` tree (quqa), #19 `jaq` tree (qhura)** — "plant/herb vs tree" is a gloss-precision/lexical-selection issue, not a transcription error. **Held.**
- **#16 `ay` hello (kamisaki)** — short vs full greeting is a register/lexical choice. **Held.**
- **#21 `ay` thanks (/ɣ/)** — loanword realization; reviewer calls it "debatable" and notes [ɣ] appears in fast speech. Not an unambiguous error. **Held.**
- **#22 `qu` drink (/upjaj/)** — reviewer flags as "needs verification"; no confirmed correction. **Held.**

---

## Reviewer round-1 response (再評価 round-1)

I verified every claimed fix against the live `data` objects in the `words/*.js` files (each file is `WORDS.<word> = { label, definition, data:{ <lang>: [surface, ipa] } }`). All ten claimed mechanical fixes are present and correct in the live data.

**Verified APPLIED (✓ confirmed in live data):**

- **#2/#3 `qu` eat** — `eat.data.qu = ["mikhuy","mikʰuj"]` ✓. IPA now /kʰ/, matching `quz`/`cqu`. (Orthography part of #3 deferred to dialect-policy — accepted, see below.)
- **#4 `cqu` moon** — `moon.data.cqu = ["killa","kiʎa"]` ✓ (/ʎ/ restored; matches `qu`/`quz`).
- **#5 `quz` dog** — `dog.data.quz = ["allqu","aʎqu"]` ✓ (orthography + /ʎ/ restored; matches `qu`/`cqu`).
- **#6 `quz` heart** — `heart.data.quz = ["sunqu","suŋqu"]` ✓ (/ŋ/ assimilation; matches `cqu`).
- **#7 `qu` heart** — `heart.data.qu = ["sunqu","suŋqu"]` ✓. Note: Ayacucho `quy` correctly left as `["sunqu","sunqu"]` (out of scope) — good call.
- **#8 `jaq` eat** — `eat.data.jaq = ["mankaña","mankaɲa"]` ✓ (ejective uvular removed; IPA now matches plain-`k` surface). Correct anchor choice.
- **#10 `jaq` father** — `father.data.jaq = ["awki","awki"]` ✓ (spurious ejective removed).
- **#11 `jaq` hand** — `hand.data.jaq = ["amrra","amra"]` ✓ (`rr` = trill /r/, not flap /ɾ/).
- **#12 `arn` dog** — `dog.data.arn = ["trewa","ʈʂewa"]` ✓ (retroflex affricate /ʈʂ/).
- **#13 `arn` fire** — `fire.data.arn = ["kütral","kɨʈʂal"]` ✓ (same /ʈʂ/).

**Held — confirmed still-erroneous in live data (these keep the file OPEN):**

- **#1 `yag` (ALL files)** — ✗ NOT fixed. Spot-checked live: `eat.yag=["хур","xur"]`, `love=["мехр","mehr"]`, `hello=["салом","salom"]`, `heart=["дил","dil"]`, `eye=["чашм","tʃaʃm"]`, `hand=["даст","dast"]`, `moon=["маҳ","mah"]`, `water=["уп","up"]`, `dog=["куч","kutʃ"]`, `mother=["мот","mot"]`, `thanks=["рахмат","rahmat"]`. Every entry is Cyrillic Tajik/Persian; Yahgan/Yamana has no Cyrillic tradition. I **agree** the worker should not fabricate Bridges (1933) lexemes, but this is a real critical error that remains in live data, so it is **actionable, not won't-fix**. Must be replaced via a sourced Yahgan import. **(✓ accept the hold rationale; item stays open as a data-import task.)**
- **#9 `jaq` mother** — ✗ NOT fixed. Live: `mother.jaq=["maya","maja"]`, identical to `one.jaq=["maya","maja"]` — confirmed copy-paste of "one". Needs a sourced Jaqaru kin term (Hardman 1983). Hold rationale accepted; item remains open and actionable.

**Adjudication of held dialect-policy / gloss / convention items:**

- **#3 (orthography), #17, #18, #20** — △ ACCEPT as system-level dialect policy. Verified the split is internally consistent: `quz`/`cqu` carry the Cusco-Collao forms (`unu`, `rimaykullayki`, `sach'a`) while generic `qu` carries Ayacucho/Chanka (`yaku`, `allillanchu`, `sacha`). The one genuine *error* inside this cluster — the mixed Cusco-orthography-with-stripped-aspirate IPA in #2/#8 — has been fixed. The remaining surface-form/dialect-assignment choices are a defensible corpus-wide convention, not a local data error. Won't-fix accepted.
- **#14 `arn` /e/ vs /ə/** — △ ACCEPT held. Live: `küme=kɨme`, `küyen=kɨjen`, `antü=antɨ`, `pütun=pɨtun`. The sixth-vowel /ə/-vs-/e/ analysis is genuinely contested (one-phoneme vs two-phoneme treatments); not an unambiguous transcription error. Won't-fix is defensible.
- **#15 `ay` tree (quqa), #19 `jaq` tree (qhura)** — △ ACCEPT held. Live: `tree.ay=["quqa","quqa"]`, `tree.jaq=["qhura","qʰuɾa"]`. "Plant/herb vs tree" is gloss precision; the dataset routinely uses the most generic available everyday lexeme, so this is a lexical-selection convention, not a transcription error. Defensible won't-fix.
- **#16 `ay` hello (kamisaki), #21 `ay` thanks (/ɣ/), #22 `qu` drink (/upjaj/)** — △ ACCEPT held. Verified live (`kamisaki`, `juspaɣaɾa`, and drink `upjaj` per the original review). All three are register/loanword-realization/needs-verification flags the reviewer themself qualified as "debatable/minor/needs verification"; none is an unambiguous error. Won't-fix accepted.

**New issues raised this round:** none. Verification surfaced no additional defensible errors.

### Scorecard

| Item | Judgement |
|------|-----------|
| #2/#3 IPA, #4, #5, #6, #7, #8, #10, #11, #12, #13 | ✓ fixed & verified in live data |
| #3 orthography, #14–#22 (dialect/gloss/convention/loanword) | △ accepted as defensible won't-fix |
| #1 `yag` (20 entries) | ✗ real critical error, still in live data — actionable data-import |
| #9 `jaq` mother | ✗ real error, still in live data — actionable sourced fix |

The mechanical phonological cleanup is complete and accurate. Two genuine, reviewer-confirmed errors (#1 wrong-language `yag` block; #9 `jaq` mother = "one") remain unfixed in the live data. Because these are clear errors and not won't-fix conventions, the file cannot close yet even though the hold rationale ("don't fabricate sourced lexemes") is reasonable.

**File status: OPEN** — Dev team must: (1) replace all 20 `yag` entries with sourced Yahgan/Yamana forms from Bridges (1933); (2) replace `mother.data.jaq` (`["maya","maja"]`, currently = "one") with a sourced Jaqaru "mother" term (Hardman 1983).
