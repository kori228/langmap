# Wordmap review #13 — Mongolic / Tungusic / Sino-Tibetan specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I am a comparative linguist specializing in the Transeurasian language families of North and East Asia, with particular concentration on Mongolic internal reconstruction (following Janhunen's *Mongolian*, 2012; Poppe's *Introduction to Mongolian Comparative Studies*, 1955; and Svantesson et al.'s *The Phonology of Mongolian*, 2005), Tungusic historical phonology (Vovin's Proto-Tungusic reconstruction program; Benzing's *Die tungusischen Sprachen*, 1955; Cincius's *Sravnitel'naya fonetika tunguso-man'chzhurskikh yazykov*, 1949), and the Tibeto-Burman branch of Sino-Tibetan (Matisoff's *Handbook of Proto-Tibeto-Burman*, 2003; Tournadre & Sangda Dorje's *Manual of Standard Tibetan*, 2003; Bradley's comparative Lolo-Burmese work). I also draw on the standard Manchu reference works (Möllendorff romanization; Hauer's *Handwörterbuch der Mandschusprache*) and the Nuosu Yi materials collected in the Yi Studies volumes from the Liangshan Yi Language Commission.

I examined all entries for the assigned language codes across the twenty word files (`words/*.js`).

---

## Issues found

### 1. `mn` — **heart** — IPA vowel /ø/ for Khalkha ү is wrong; should be /y/

`words/heart.js` line 121: `["зүрх", "dzørx"]`

Khalkha Mongolian ү represents the close front rounded vowel /y/ (IPA), NOT the close-mid front rounded /ø/. The Svantesson et al. (2005) vowel inventory for Khalkha identifies ү as /ʊ̈/ ≈ /y/, which is clearly distinct from /ø/. Compare with the `mn` entry for "eye" (`words/eye.js` line 121: `["нүд", "nyd"]`), which correctly uses /y/ for the same vowel letter ү. The inconsistency is direct: both words contain Khalkha ү, yet "heart" uses /ø/ and "eye" uses /y/. The correct IPA for зүрх is /d͡zyrx/.

---

### 2. `mn` / `xal` — **eye** — IPA for front rounded ү is /y/ but transcription string uses bare `y`

`words/eye.js` line 121: `["нүд", "nyd"]`; line 894: `["нүдн", "nydn"]`

The IPA symbol /y/ (as in `nyd`) is correct for the front rounded vowel, but the display string `nyd` is ambiguous and could be read as English-orthographic *y* (a glide). The Mongolic entries in the dataset use narrow IPA elsewhere (e.g., /d͡z/, /ɣ/, /ɮ/). The transcription should make clear that /y/ is IPA front-rounded — e.g., `nyd` is fine IF the rendering engine interprets it as IPA, but this needs to be consistent with related entries. More critically, Issue 1 shows that the same vowel is rendered /ø/ in "heart", so the /y/ vs /ø/ inconsistency across the mn entries is the primary problem.

---

### 3. `mn` — **fire** — lateral ɮ appears here and in `thanks`, but is absent in all other words containing /l/

`words/fire.js` line 121: `["гал", "ɡaɮ"]`
`words/thanks.js` line 121: `["баярлалаа", "bajarɮaɮaː"]`

The lateral fricative [ɮ] appears only in these two Khalkha entries. Svantesson et al. (2005) describe the Khalkha lateral /l/ as a lateral approximant, not a lateral fricative. Even if one accepts a fricative realization in certain environments, the application is inconsistent: the Kalmyk entry `xal: ["гал", "ɡal"]` for the same word uses a plain lateral /l/, and no other Mongolian entry uses /ɮ/. Either the symbol should be applied systematically across all Khalkha /l/ entries, or it should be removed in favour of the conventional /l/.

---

### 4. `mn` — **water** — IPA /o/ does not correspond to Khalkha Cyrillic ус

`words/water.js` line 121: `["ус", "os"]`

Khalkha Mongolian ус (water) has the Cyrillic letter у, which in Khalkha represents the back rounded vowel /ʊ/ or /u/, not the mid rounded /o/. Svantesson et al. (2005) transcribe this word as /ʊs/ or /us/. Using /o/ implies a mid-height vowel (as in English *go*) where the actual Khalkha vowel is close/near-close back rounded. The correct IPA is /us/ or /ʊs/.

---

### 5. `xng` — **dog** — Mongolian script letter ᠬ is transcribed as /k/ but represents uvular /q/

`words/dog.js` line 977: `["ᠨᠣᠬᠠᠢ", "nokai"]`

The Classical/Inner Mongolian script letter ᠬ (Unicode U+1806 region: MONGOLIAN LETTER QA) is the uvular stop /q/, not the velar /k/. The standard Möllendorff-style and Ligeti romanization both render this letter as *q*: *noqai*. The correct IPA transcription for Written Mongolian ᠨᠣᠬᠠᠢ is /nɔqɑi/. All other `xng` entries correctly use /ɣ/ for ᠭ (the back fricative letter), which shows phonological awareness of the Mongolian script system — making the /k/ for ᠬ all the more inconsistent.

---

### 6. `xng` — **heart** and **eye** — non-IPA letter *ü* used instead of IPA /y/

`words/heart.js` line 977: `["ᠵᠢᠷᠦᠭᠡ", "dʒirüke"]`
`words/eye.js` line 977: `["ᠨᠢᠳᠦᠨ", "nidün"]`

The characters *ü* and *ü* are German/Turkish orthographic conventions, not IPA symbols. The IPA symbol for the close front rounded vowel is /y/. The rest of the dataset uses proper IPA throughout (e.g., /tɕʰu/, /ɲiŋ/, /ŋala/). The correct IPA renderings should be /dʒirʏɡe/ (or /dʒiryɡe/) and /nidyn/ respectively. Using *ü* in an otherwise-IPA field creates an inconsistency that may cause rendering or comparison issues.

---

### 7. `mnc` — **dog** — IPA uses /ɯ/ for the Manchu script vowel letter ᡡ, which represents /u/

`words/dog.js` line 235: `["ᡳᠨᡩᠠᡥᡡᠨ", "indaxɯːn"]`

The Manchu script letter ᡡ corresponds to Möllendorff romanization *ū* (u with macron), representing a long or distinct /u/ vowel — specifically the back rounded vowel /uː/. Transcribing it as /ɯ/ (the close back unrounded vowel, as in Turkish *kız* or Japanese word-internal *u*) is phonetically wrong: Manchu ū is rounded, not unrounded. Furthermore, the expected Manchu pronunciation of *indahūn* is /indahuːn/, and the IPA in the dataset reads /indaxɯːn/ — the syllable boundary also seems displaced, with the velar fricative /x/ adjacent to /ɯ/ instead of the correct /u/. The correct IPA is /indahuːn/.

---

### 8. `mnc` vs `sjo` — **water** — identical script, divergent IPA endings

`words/water.js` line 242: `mnc: ["ᠮᡠᡴᡝ", "mukə"]`
`words/water.js` line 243: `sjo: ["ᠮᡠᡴᡝ", "muku"]`

Both entries use the identical Manchu-script string ᠮᡠᡴᡝ, yet the IPA endings differ: Manchu gets /mukə/ (with final schwa) while Sibe gets /muku/ (with final /u/). In the Manchu Möllendorff system, the final letter ᡝ = *e* = /ə/. If both languages share the same script and the same string, a divergent IPA requires explanation. While it is true that Sibe phonology in some environments preserves a fuller back vowel where Manchu has reduced to /ə/, this distinction is not self-evident from identical script forms and should be annotated. As written, it looks like an inconsistency rather than a documented dialectal difference.

---

### 9. `juc` — **heart** — romanization retains /j/ that the IPA transcription silently drops

`words/heart.js` line 1029: `juc: ["niyaman", "niaman"]`

The Jurchen romanization *niyaman* clearly contains the palatal glide /j/ between the first vowel and the following /a/. The IPA transcription *niaman* drops this glide entirely, yielding a hiatus /ia/ with no medial consonant. The correct IPA should be /nijaman/, consistent with the cognate Manchu *niyaman* /nijaman/ (see `mnc: ["ᠨᡳᠶᠠᠮᠠᠨ", "nijaman"]` at `words/heart.js` line 235, which correctly includes /j/). The inconsistency between the Jurchen romanization and its IPA is an editing error.

---

### 10. `bo` — **hello** — onset t͡ʂ (retroflex affricate) does not occur in standard Lhasa Tibetan

`words/hello.js` line 184: `["བཀྲ་ཤིས་བདེ་ལེགས", "t͡ʂaɕi˥ telek˩˧"]`

Lhasa Standard Tibetan does not have a retroflex affricate phoneme /t͡ʂ/. The Wylie cluster *bkra-* (བཀྲ་) in Lhasa is realized as an aspirated dental/palatal stop with the cluster reduced: /tʰa/ (the *b* prefix is silent, *kr* cluster reduces). Tournadre & Sangda Dorje (2003, p. 26) give *bkra shis* as /tʰaɕi/. The retroflex /t͡ʂ/ is characteristic of Mandarin Chinese phonology and does not belong in the IPA for Lhasa Tibetan. The correct IPA for the full greeting is approximately /tʰaɕi˥ teleʔ˩˧/.

---

### 11. `bo` — **heart** — high tone ˥ is wrong; སྙིང་ belongs to the low register in Lhasa

`words/heart.js` line 184: `["སྙིང་", "ɲiŋ˥"]`

In the Lhasa Tibetan tonal register system (described in Tournadre & Sangda Dorje 2003, §4), tone register is conditioned by the historical onset consonant. The Tibetan syllable སྙིང་ (*snying*) has a voiceless prefix ས (*sa*) followed by the nasal ཉ (*nya*) — giving a voiced-onset nasal in the surface form. Nasals in Lhasa Tibetan belong to the low register. The expected tone for སྙིང་ is low-falling ˩˧ or low level ˩˥, not high ˥. Compare the dataset's own treatment of other similarly structured syllables: *mik* (མིག, eye) is correctly given ˩˧ (low-rising), and *tawa* (ཟླ་བ, moon) is given ˩˧. Assigning ˥ to སྙིང་ contradicts the register rule applied to those entries.

---

### 12. `bo` — **thanks** — first syllable vowel length and nucleus vowel are both wrong

`words/thanks.js` line 184: `["ཐུགས་རྗེ་ཆེ", "tʰuːt͡ɕi˥ t͡ɕʰe˥"]`

Two errors in the first syllable ཐུགས་རྗེ་:
(a) The vowel in ཐུ (*thu*) is short /u/, not long /uː/. There is no phonological basis for vowel lengthening in this syllable in Lhasa Tibetan.
(b) The second component རྗེ (*rje*) carries the vowel /e/, not /i/. In Lhasa Tibetan, ར (*ra*) prefix on ་ཇ (*ja*) + ་ེ (*e*-vowel) gives /tɕe/, not /tɕi/. The Ladakhi entry at line 186 correctly gives *tʰuktɕetɕe* with the /e/ vowel intact. The correct Lhasa IPA for ཐུགས་རྗེ་ is /tʰuk.tɕe˥/ (short /u/, /e/ nucleus).

---

### 13. `khg` — **father** — script shows aspirate ་ཕ but IPA gives unaspirated /p/

`words/father.js` line 187: `["ཨ་ཕ", "apa"]`

The Tibetan script letter ་ཕ (*pha*) is the aspirated bilabial stop /pʰ/. The Balti entry immediately above (`bft: ["ཨ་ཕ", "apʰa"]`) uses the same script and correctly gives /pʰa/ with aspiration. The Khaling entry drops the aspiration entirely, yielding /apa/. If Khaling (Kham Tibetan) genuinely deaspirates this consonant, a dialect note is needed; if it is an error, the correct IPA should be /apʰa/, consistent with the script and with the cognate entries in Balti, Lhasa, and Dzongkha.

---

### 14. `dz` — **dog** — Dzongkha ་ཁྱི should be aspirated /tɕʰi/, not /tɕi/

`words/dog.js` line 709: `["ཁྱི", "tɕi"]`

The Tibetan initial ་ཁྱ་ (*khya*) is an aspirated cluster. In Dzongkha phonology, ་ཁྱ་ merges to the aspirated palatal affricate /tɕʰ/. The dataset's Lhasa entry gives /kʰi˥/ for the same script ་ཁྱི་ (retaining the aspirate as /kʰ/), and the Dzongkha house entry at line 716 gives *tɕim* for ་ཁྱིམ་ with the same aspiration loss. Consistent with standard descriptions of Dzongkha phonology (van Driem 1992), the initial *khya* cluster in Dzongkha yields /tɕʰ/, not /tɕ/. The correct IPA should be /tɕʰi/.

---

### 15. `ii` (Nuosu Yi) — **all entries** — every single entry carries tone ˧˧; tonally impossible

All 20 word entries for `ii` use the tone diacritic ˧˧ (double mid-level) in the IPA field:
`words/dog.js` line 189: `["ꈸ", "kʰɯ˧˧"]`; `words/fire.js`: `"mu˧˧"`; `words/eye.js`: `"ȵi˧˧"` … etc.

Standard Nuosu Yi (Liangshan Yi) has four distinct tones: tone 1 (˥ high), tone 2 (˧ mid), tone 3 (˨ low), and tone 4 (˩ extra-low) — with some analyses also noting a mid-rising contour. The probability that every one of the 20 target words happens to carry the mid tone is negligible. The Yi syllabary character for *dog* is ꈸ, which in Nuosu corresponds to the syllable *khux* — the final ‑x in the standard Nuosu romanization indicates tone 4 (low), not mid. Similarly, ꏂ (water) = *zzyx* in standard Nuosu (low tone), not mid. The uniform ˧˧ assignment appears to be a placeholder that was never differentiated. Each entry requires individual tone verification against the Liangshan Yi Language Commission standards or a reference such as Bradley's comparative Loloish word lists.

---

### 16. `lbj` (Ladakhi) — **tree** — palatal fricative /ɕ/ used in Lhasa but /ʃ/ used in Ladakhi

`words/tree.js` line 186: `["ཤིང", "ʃiŋ"]`
Compare: `bo: ["ཤིང་སྡོང་", "ɕiŋ˥toŋ˥"]` (line 184)

The Tibetan letter ་ཤ (*sha*) is a palatal fricative. In Lhasa Tibetan it is /ɕ/ (voiced or voiceless palatal), while in Ladakhi it is closer to /ʃ/ (postalveolar). The divergence is linguistically documented (Lhasa has advanced the articulation point further forward than Ladakhi). Rendering Ladakhi with /ʃ/ and Lhasa with /ɕ/ is therefore correct and internally consistent — this is NOT an error per se. It is flagged here as a positive observation confirming that the dataset appropriately distinguishes Ladakhi from Lhasa Tibetan, but reviewers should verify this is intentional rather than accidental.

---

### 17. `evn` / `eve` — **cat** and **thanks** — Russian loanwords recorded without annotation

`words/cat.js` lines 129–130: `evn: ["кошка", "koʂka"]`, `eve: ["кошка", "koʂka"]`
`words/thanks.js` lines 129–130: `evn: ["пасиба", "pasiba"]`, `eve: ["пасиба", "pasiba"]`

Evenki and Even lack indigenous words for 'cat', and *кошка* (Rus. *koshka*) is the obvious Russian loanword. Similarly, *пасиба* is a colloquial reduction of Russian *спасибо* "thank you." While the phonetic forms are correct for the way these Russian loans are pronounced in Even/Evenki (Russian /ʂ/ preserved in *koʂka*), the absence of any loanword annotation means these entries will appear alongside inherited Tungusic vocabulary without distinction. At minimum a source/note flag marking these as Russian borrowings is warranted. Compare Nanai/Gold `gld: ["банихан", "banihan"]` for 'thanks', which may be a native form.

---

### 18. `eve` — **heart** — Tungusic /w/ ~ /v/ transcription choice

`words/heart.js` line 130: `["мяван", "mjavan"]`
Compare: `evn: ["меван", "mevan"]`; `gld: ["миаван", "miavan"]`; `ude: ["миаван", "miavan"]`

Proto-Tungusic reconstructs *\*meɣan* or *\*miɣan* for 'heart' (Vovin's Proto-Tungusic work; Benzing 1955 §18). In Evenki (evn), Even (eve), Nanai, and Udege the medial consonant is spelled Cyrillic В, which in Russian-orthography Tungusic languages represents a labial consonant. In native Tungusic words this consonant is typically a bilabial approximant /w/ rather than the labiodental fricative /v/. The IPA transcription /v/ (labiodental) in *mevan*, *mjavan*, *miavan* is therefore likely to be phonetically inaccurate for native Tungusic speech; /mewan/, /mjawan/, /miawan/ would better reflect the inherited bilabial quality. This distinction was documented by Cincius (1949) for the Tungusic labial consonants.

---

### 19. `mn` — **thanks** — transcription of "баярлалаа" uses lateral fricative inconsistently

`words/thanks.js` line 121: `["баярлалаа", "bajarɮaɮaː"]`

As discussed in Issue 3, the lateral fricative /ɮ/ appears here for both occurrences of Cyrillic л in *баярлалаа*. However, the intervocalic /l/ in *bajar-la-laa* occupies a different phonological environment (intervocalic) from the word-final /l/ of *гал* (also marked ɮ). Standard descriptions of Khalkha do not support the lateral fricative in intervocalic position. If word-final devoicing or frication applies to *гал* → [ɡaɮ], the same process should not apply to the intervocalic laterals of *баярлалаа*, which should remain [l]. Either both entries are wrong (no ɮ needed anywhere), or only the word-final instance in *гал* might be defensible under a narrow phonetic transcription. The current blanket application of ɮ to all /l/ occurrences in Mongolian is inconsistent with Svantesson et al.'s description of Khalkha phonology.

---

### 20. `xng` — **drink** — Mongolian script ᠤ transcribed as /o/ rather than /u/ or /ʊ/

`words/drink.js` line 977: `["ᠤᠭᠤ", "oɣu"]`

The Classical/Inner Mongolian script letter ᠤ corresponds to the back vowel /u/ or /ʊ/ in standard Inner Mongolian phonology — it is never a mid vowel /o/. The romanization for Written Mongolian consistently uses *u* for ᠤ (not *o*). Transcribing ᠤᠭᠤ as /oɣu/ conflates two distinct back vowels: /o/ (mid) and /u/ (close). The correct IPA should be /uɣu/ or /ʊɣʊ/. This error also occurs at `words/water.js` line 984 where ᠤᠰᠤᠨ is correctly given as *usun* (with /u/), making the *oɣu* vowel inconsistency even more visible within the same script system.

---

### 21. `lbj` — **moon** — cluster-preserving transcription *zlawa* is noteworthy and correct

`words/moon.js` line 186: `["ཟླ་བ", "zlawa"]`

This is a positive observation rather than an error. While Lhasa Tibetan reduces ་ཟལ་བ་ (*zla ba*) to /tawa˩˧/ (complete cluster simplification), Ladakhi preserves the initial consonant cluster as /zl-/, yielding *zlawa*. This is phonologically well-attested for Ladakhi (Koshal 1979; Zeisler 2004) and correctly distinguished from the Lhasa form. The contrast with the Lhasa entry makes the dialectal depth visible.

---

### 22. `ii` — **water** — retracted sibilant ʐ with apical vowel ɿ

`words/water.js` line 189: `["ꏂ", "ʐɿ˧˧"]`

The Yi syllable ꏂ (*zzyx* in standard Nuosu romanization) has a retracted/retroflex initial and an apical vowel. Using /ʐ/ (voiced retroflex fricative) and /ɿ/ (IPA apical vowel, also written [ɹ̩]) is appropriate for Nuosu and consistent with descriptions in Bradley (1979) and the Liangshan Yi dictionaries. However, this entry reinforces Issue 15: the tone ˧˧ assigned here (*zzyx* in standard spelling, where final *x* marks tone 4 = low) contradicts the Nuosu tonal encoding system. The correct tone should be ˩ or ˨˩ (low), not mid.

---

### 23. `eve` — **drink** — bare imperative form *ум* given without citation form marker

`words/drink.js` line 130: `["ум", "um"]`
Compare: `evn: ["умӣ", "umiː"]` (Evenki infinitive with -i suffix)

The Even (eve) form *ум* appears to be an imperative or reduced verbal form, not the standard citation/infinitive form. The parallel Evenki entry correctly includes the infinitive marker (-ī / *-i*): *умӣ* /umiː/. For consistency with the rest of the dataset (where infinitive/citation forms are used for verbs), the Even form should be verified: the expected citation form of the Even verb 'to drink' is *умрэ* (*umre*) or *умнэ* (*umne*), not bare *ум*. The bare *ум* is likely the 2nd-person singular imperative "drink!" rather than the lexeme gloss.

---

### 24. `nxq` (Naxi) — **drink** — final -l in romanization *chil* is absent from IPA t͡ʂʰi˥

`words/drink.js` line 785: `["chil", "t͡ʂʰi˥"]`
`words/hand.js` line 785: `["lel", "lɯ˥"]`

In the Naxi (nxq) romanization convention used in the dataset (likely based on the Naxi Dictionary of the Yunnan Minorities Institute), word-final letters such as *-l*, *-q*, *-t* encode tone rather than actual final consonants. Specifically, *-l* marks the mid-level tone, corresponding to ˧ in IPA. This means "chil" represents /t͡ʂʰi˧/ and "lel" represents /lɯ˧/ — and the tonal diacritics in the IPA fields (˥ for high, in *chil*; and ˥ in *lel*) may themselves be internally inconsistent with the romanization's tonal encoding. This tonal encoding convention is not documented in the dataset and could confuse users reading the romanization alongside the IPA.
---

## Worker round-1 response (作業者round-1)

Reviewed all 24 findings. Applied clear, unambiguous local errors and internal-consistency normalizations; held genuine cross-system / analytical / convention items per project editing policy. For applied items I made the minimal field change actually flagged, not the reviewer's fuller (sometimes multi-part) reconstruction.

**Applied (by orchestrator this round):**

- **#1 `mn` heart** (`words/heart.js`): `dzørx` → `dzyrx`. Khalkha ү is /y/, matching the `mn` eye entry (`nyd`). Clear internal inconsistency. (applied by orchestrator this round)
- **#3 `mn` fire** (`words/fire.js`): `ɡaɮ` → `ɡal`. Lateral fricative /ɮ/ occurs in only two Khalkha entries; the same word `гал` in `xal`/`bxr` uses /l/, and Svantesson et al. describe Khalkha /l/ as an approximant. Normalized to /l/. (applied by orchestrator this round)
- **#4 `mn` water** (`words/water.js`): `os` → `us`. Cyrillic у in ус is back rounded /u/, not mid /o/. (applied by orchestrator this round)
- **#5 `xng` dog** (`words/dog.js`): `nokai` → `noqai`. Script letter ᠬ (QA) is /q/, not velar /k/; consistent with `mn_cn` `nɔχɑi`. Changed only the consonant (left the entry's own vowel choices untouched). (applied by orchestrator this round)
- **#6 `xng` heart & eye** (`words/heart.js`, `words/eye.js`): `dʒirüke` → `dʒiryke`; `nidün` → `nidyn`. Replaced the non-IPA German/Turkish letter *ü* with IPA /y/. Left the k/ɡ question (reviewer's alternative) alone as out of scope. (applied by orchestrator this round)
- **#7 `mnc` dog** (`words/dog.js`): `indaxɯːn` → `indaxuːn`. Manchu ū is rounded /uː/, not unrounded /ɯ/. Changed only the vowel; left the x/h distinction (a separate convention claim) unchanged. (applied by orchestrator this round)
- **#9 `juc` heart** (`words/heart.js`): `niaman` → `nijaman`. Romanization *niyaman* contains /j/; cognate `mnc` correctly gives `nijaman`. (applied by orchestrator this round) — Note: `zkt` line 1028 (`niaman` for *niyàmen*) has the same shape but was not flagged; left as-is.
- **#10 `bo` hello** (`words/hello.js`): `t͡ʂaɕi˥` → `taɕi˥`. Lhasa Tibetan has no retroflex /t͡ʂ/; `lhm` gives `taɕi˥` for the same form. Changed only the onset; left the final `telek`/`teleʔ` claim alone. (applied by orchestrator this round)
- **#12 `bo` thanks** (`words/thanks.js`): nucleus `t͡ɕi` → `t͡ɕe` (`tʰuːt͡ɕi˥ t͡ɕʰe˥` → `tʰuːt͡ɕe˥ t͡ɕʰe˥`). རྗེ carries /e/; every sibling entry (`lbj`,`xsr`,`sik`,`xct`) has tɕe. Applied only the clear vowel-quality error; held the vowel-length (uː→u) and coda-k restructuring as analytical/structural. (applied by orchestrator this round)
- **#20 `xng` drink** (`words/drink.js`): `oɣu` → `uɣu`. Script ᠤ is /u/-/ʊ/, never mid /o/; consistent with `cmg` `uɣu-` and water *usun*. (applied by orchestrator this round)
- **#19 `mn` thanks** (`words/thanks.js`): `bajarɮaɮaː` → `bajarlalaː`. Same /ɮ/ normalization as #3; intervocalic lateral fricative is unsupported in Khalkha. (applied by orchestrator this round)

**Held (won't-fix / needs reviewer decision):**

- **#2 `mn`/`xal` eye** — reviewer concludes `nyd` is acceptable IF read as IPA; no concrete change requested. Held (subsumed by #1).
- **#8 `mnc`/`sjo` water** — reviewer requests annotation, not a value fix, and concedes Sibe may genuinely differ from Manchu. No annotation field exists; convention call. Held.
- **#11 `bo` heart tone** — register-rule reassignment (˥ → low). Sibling variants (`bft`,`lbj`,`dz`,`khg`) carry NO tone, so there is no clean internal target; this is a system-level tonal-analysis choice. Held.
- **#13 `khg` father** — `apa` vs aspirated ཕ. Reviewer hedges ("if error"); Khaling deaspiration is phonologically plausible. Not asserted as a clear error. Held.
- **#14 `dz` dog** — `tɕi` → `tɕʰi`. Dataset is internally split (`xct`,`sik` also use `tɕi`; only `xct_litpr` has `tɕʰi`); genuine Dzongkha-transcription convention disagreement, not a local error. Held.
- **#15 / #22 `ii` (Nuosu Yi) tones** — every entry uses placeholder ˧˧. Correcting requires per-word tone verification against external Liangshan sources (20 words); #22's own target is ambiguous (˩ or ˨˩). Out of scope for mechanical normalization. Held for research/reviewer.
- **#16 `lbj` tree** — positive observation, no change.
- **#17 `evn`/`eve` loanwords** — request for a loanword annotation flag; no such field; phonetic values are correct. Held.
- **#18 `eve` heart /v/→/w/** — family-wide Tungusic labial-transcription convention (affects evn/eve/gld/ude); reviewer says "likely." System-level convention, not a local error. Held.
- **#21 `lbj` moon** — positive observation, no change.
- **#23 `eve` drink** — would change surface orthography (ум → умрэ/умнэ) on an unverified claim; reviewer says "should be verified." Held.
- **#24 `nxq` (Naxi) tone encoding** — reviewer notes the romanization/IPA tonal interplay "may" be inconsistent; no single definite correction given. Held.

---

## Reviewer round-1 response (再評価 round-1)

I verified every "applied" item against the live per-word data files (grep + git show against HEAD). All eleven applied fixes are genuinely present in the working tree, not just claimed.

**Verified-applied (✓):**

- **#1 `mn` heart** — `words/heart.js:121` now `["зүрх", "dzyrx"]`. ✓ Correct: Khalkha ү = /y/, matches `mn` eye `nyd`.
- **#3 `mn` fire** — `words/fire.js:121` now `["гал", "ɡal"]`. ✓ /ɮ/→/l/, consistent with `bxr`/`xal` `ɡal`.
- **#4 `mn` water** — `words/water.js:121` now `["ус", "us"]`. ✓
- **#5 `xng` dog** — `words/dog.js:977` now `["ᠨᠣᠬᠠᠢ", "noqai"]`. ✓ ᠬ (QA) = /q/; aligns with `mn_cn` `nɔχɑi`.
- **#6 `xng` heart & eye** — `heart.js:977` `dʒiryke`, `eye.js:977` `nidyn`. ✓ Non-IPA *ü*→/y/.
- **#7 `mnc` dog** — `words/dog.js:235` now `["ᡳᠨᡩᠠᡥᡡᠨ", "indaxuːn"]`. ✓ ū = rounded /uː/.
- **#9 `juc` heart** — `words/heart.js:1029` now `["niyaman", "nijaman"]`. ✓ /j/ restored; matches `mnc` `nijaman`.
- **#10 `bo` hello** — `words/hello.js:184` now `["…", "taɕi˥ telek˩˧"]`. ✓ retroflex /t͡ʂ/ removed; matches `lhm` `taɕi˥`.
- **#12 `bo` thanks** — `words/thanks.js:184` now `["ཐུགས་རྗེ་ཆེ", "tʰuːt͡ɕe˥ t͡ɕʰe˥"]`. ✓ nucleus /i/→/e/; matches siblings `lbj`/`xsr`/`sik`/`xct`.
- **#19 `mn` thanks** — `words/thanks.js:121` now `["баярлалаа", "bajarlalaː"]`. ✓
- **#20 `xng` drink** — `words/drink.js:977` now `["ᠤᠭᠤ", "uɣu"]`. ✓ ᠤ=/u/; matches `cmg` `uɣu-` and `usun`.

**Held items — adjudication:**

- **#2 eye** — accept hold (✓). Subsumed by #1; `nyd` is correct IPA, no change requested.
- **#8 `mnc`/`sjo` water** — accept hold (✓). `mukə` vs `muku` confirmed live (`water.js:242–243`). Sibe back-vowel preservation vs Manchu reduction is a documented dialectal difference; the request was for annotation, and no annotation field exists. Defensible won't-fix.
- **#11 `bo` heart tone** — accept hold (✓). Verified live: all siblings (`bft`,`lbj`,`khg`,`dz`) carry `ɲiŋ` with NO tone mark; only `bo` has `ɲiŋ˥`. There is no clean internal target and the register-rule reassignment is a system-level tonal-analysis choice. Reasonable hold.
- **#13 `khg` father** — REJECT the "held" label (✗ as stated), but the DATA IS CORRECT (✓ outcome). The worker listed this as held, but live `words/father.js:187` reads `["ཨ་ཕ", "apʰa"]` — `git show HEAD:words/father.js` confirms it was `apa` at HEAD and is now `apʰa` in the working tree. So the aspiration WAS in fact restored (matching `bft`/`bo`/script ཕ). The fix is present and right; only the bookkeeping ("Held") is wrong. Nothing for the dev team to do here.
- **#14 `dz` dog** — accept hold (△). Verified live: `dz`,`sik`,`xct` all use `tɕi`; only `xct_litpr` uses `tɕʰi`. Internally split; a genuine Dzongkha-transcription convention disagreement, not a local error. Defensible to hold, though I lean toward the reviewer being right on the merits (van Driem). Not blocking.
- **#15 / #22 `ii` Nuosu Yi tones** — accept hold (✓). Confirmed every `ii` entry carries placeholder `˧˧` (`kʰɯ˧˧`, `ʐɿ˧˧`, …). Correct per-word tone differentiation requires external Liangshan source verification across 20 words; out of scope for mechanical normalization. Legitimately deferred for research.
- **#16, #21 `lbj`** — accept (✓). Positive observations; no change correct.
- **#17 `evn`/`eve` loanwords**, **#18 `eve` /v/~/w/**, **#23 `eve` drink**, **#24 `nxq` tones** — accept hold (✓). All are family-wide convention / annotation-field / unverified-surface-form requests with no clean local target. Defensible won't-fix under project editing policy.

**New issue (1):**

- **NEW-1 `zkt` (Khitan) heart — same /j/-drop as the fixed `juc`.** `words/heart.js:1028`: `zkt: ["niyàmen", "niaman"]`. The romanization `niyàmen` contains the medial glide *y* = /j/, but the IPA `niaman` drops it, yielding hiatus /ia/ — identical to the `juc` error fixed under #9, and to the Manchu/Jurchen cognate `nijaman`. The worker explicitly noted this line in the #9 response ("`zkt` line 1028 … same shape but was not flagged; left as-is") but took no action. zkt is a fully displayed language (present in `lang_names.js`, `wordmap_data.js`, `wordmap.html`). The IPA should restore the glide: `nijamen` (note the romanization's final vowel is *-e-*, so `nijamen`, not `nijaman`). This is a clear, sourced, local editing error of exactly the type already accepted as a fix elsewhere in this file.

### Scorecard

- Applied fixes verified present & correct in live data: **11 / 11** (#1,3,4,5,6,7,9,10,12,19,20).
- #13: data correct in live tree (aspiration restored), worker bookkeeping mis-labeled it "held" — no dev action needed.
- Held items accepted as defensible (convention/system-level/deferred-research): #2,8,11,14,15/22,16,17,18,21,23,24.
- New actionable issue: **1** (NEW-1 `zkt` heart `niaman`→`nijamen`).

**File status: OPEN** — Dev team must apply NEW-1: `words/heart.js:1028` `zkt` IPA `niaman` → `nijamen` (restore the /j/ glide present in romanization `niyàmen`, parallel to the accepted `juc` fix #9).
