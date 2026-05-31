# Wordmap review #06 — Iranian linguistics specialist

## Reviewer self-introduction (ペルソナ自己紹介)

I work in Iranian comparative linguistics with a focus on Proto-Indo-Iranian reconstruction, the Avestan–Vedic phonological correspondence, and the Parthian/Middle Persian → New Persian transition. My published work covers the Old Iranian nominal system (drawing on Schmitt 1989 *Compendium Linguarum Iranicarum*), the Avestan verbal categories (Bartholomae 1904 *Altiranisches Wörterbuch*; Kellens & Pirart 1988–91), and the lexicography of Middle Persian (MacKenzie 1971 *A Concise Pahlavi Dictionary*). For Eastern Iranian and Pamir materials I rely on Skjærvø (2009), Bailey (1979), Edelman & Dodykhudoeva; for Khotanese specifically on Bailey's Khotanese Texts and Dictionary. For the New Persian dialect spectrum (Iranian Persian, Dari, Tajik) I use Lazard, Perry (2005 *A Tajik Persian Reference Grammar*), and Haim's Steingass-derived Persian–English Dictionary. Pashto data is checked against Aslanov's Pashto Lexicon and Tegey & Robson (1996).

---

## Issues found

### 1. `ave` — water — Short /a/ in script and IPA where long /aː/ is required

`water.js` line 905: `ave: ["𐬀𐬞", "ap"]`

The Avestan word for water is **āp-** (long ā), cognate with Sanskrit **āp-**. The Avestan script letter **𐬀** is *short* a; the *long* ā must be written **𐬁**. The entry uses 𐬀𐬞 (short a + p) and transcribes /ap/ (short). Both the cuneiform and the IPA should be **𐬁𐬞** / **aːp**. The quantity distinction is phonemically contrastive in Avestan; this is not a typographical ambiguity.

**Correction:** `["𐬁𐬞", "aːp"]`

---

### 2. `peo` — water — Final vowel /a/ should be /i/ (the pi-sign in OP cuneiform)

`water.js` line 904: `peo: ["𐎠𐎱", "aːpa"]`

In Old Persian cuneiform, **𐎱** is the syllabic sign *pi* (not *pa*). The sequence 𐎠𐎱 reads **ā-pi**, giving the stem **āpiy** (cf. Kent 1953 §§ 13–14; Schmitt 2014 *Wörterbuch der altpersischen Inschriften* s.v. āp-). The IPA /aːpa/ with final /a/ does not correspond to this sign value; it should be **/aːpi/** or **/aːpij/**.

**Correction:** `["𐎠𐎱", "aːpi"]`

---

### 3. `peo` — heart — Schwa in IPA reflects Avestan phonology, not Old Persian

`heart.js` line 897: `peo: ["𐏀𐎼𐎭", "zərd"]`

The IPA /zərd/ reproduces the Avestan vocalism (Av. **zərəd-**, with Avestan schwa from PIIr *a*). Old Persian, however, retained the full vowel: the OP reconstruction is **\*zard** /zard/. The two languages are distinct; using /zərd/ for OP conflates Avestan and Old Persian phonology. (The OP form is in any case only reconstructed on the basis of NP *zard-* and Av. parallel; that uncertainty should perhaps be flagged rather than papering over it with the Avestan vocalism.)

**Correction IPA:** `"zard"`

---

### 4. `ave` — good — /w/ for Avestan **v** is an outdated convention

`good.js` line 898: `ave: ["𐬬𐬊𐬵𐬎", "wohu"]`

The entry uses /w/ for the initial consonant of **vohu** 'good'. Modern Avestan scholarship (Kellens & Pirart 1988; Skjærvø 2009 *Old Iranian* in *Compendium*) consistently transcribes Avestan **𐬬** as **v** (a bilabial or labiodental fricative approximant, not a semivowel /w/). The same /w/-rendering affects every other Avestan entry that contains this letter (e.g., `ave: house: ["𐬥𐬨𐬁𐬥𐬀", "nmaːna"]` where no conflict arises, but the convention should be uniform). Using /w/ reads as the Sanskrit/Vedic convention, not standard Avestology.

**Correction IPA:** `"vohu"`

---

### 5. `sog` — house — /tʰ/ misidentifies the Sogdian spirant letter **ṯ**

`house.js` line 1046: `sog: ["kṯʾk", "katʰaːk"]`

In Sogdian transliteration, the underlined **ṯ** (or **δ** in some conventions) represents a *dental fricative* — approximately /θ/ or /ð/ — not an aspirated stop /tʰ/. The IPA /katʰaːk/ implies a South-Asian-style aspirated plosive, which has no basis in Sogdian phonology. The correct reconstruction is **/kaθaːk/** (or /kaðaːk/ in voiced position analyses; cf. Yoshida 2009 *Sogdian* in *The Iranian Languages*).

**Correction IPA:** `"kaθaːk"`

---

### 6. `prs` (Dari) — systematic use of /ɒː/ for the long-ā vowel

`water.js:108`, `fire.js:108`, `moon.js:108`, `mother.js:108`, `house.js:108`, `hello.js:108` (and others):

All Dari (Afghan Persian) entries with a Classical Persian **ā** vowel transcribe it as **ɒː** (open back unrounded). This is the Iranian-Persian (Tehran) allophone, where Classical /aː/ backed to /ɒː/. Dari did **not** undergo this backing; Dari retains **/aː/** (central to front low vowel), closer to the Classical/Tajik realisation. Representative affected entries:

| file | prs entry | given IPA | correct IPA |
|------|-----------|-----------|-------------|
| water | آب | ɒːb | aːb |
| fire | آتش | ɒːtaʃ | aːtaʃ |
| moon | ماه | mɒːh | maːh |
| mother | مادر | mɒːdaɾ | maːdaɾ |
| house | خانه | xɒːna | xaːna |
| hello | سلام | salɒːm | salaːm |

**Action:** Replace all /ɒː/ in `prs` entries with /aː/.

---

### 7. `fa` — good — Spurious vowel length /xuːb/ for خوب

`good.js` line 106: `fa: ["خوب", "xuːb"]`

Standard Iranian Persian خوب is pronounced **/xub/** with a **short** /u/. The long /uː/ would imply a distinct phoneme not present in this word. Compare: نوشیدن (drink) correctly uses /uː/ because ‹و› there represents classical long ū retained in formal register. In خوب the vowel is historically short and remains short in all registers of contemporary Persian. 

**Correction IPA:** `"xub"`

---

### 8. `fa` — hello — درود is a literary register word, not the everyday greeting

`hello.js` line 106: `fa: ["درود", "doɾuːd"]`

While درود (dorūd) is a genuine Persian word of greeting, it occupies the register of formal salutations or poetry (cf. درود بر شما in speeches). The universal everyday greeting in Iranian Persian is **سلام** /salɒːm/, which the `prs` entry already provides. Giving a marked literary form for the unmarked `fa` slot distorts the typological comparison. The map's other slots (tg, mzn, glk, lrc, ku, ckb, os, wbl) all give their everyday greeting.

**Recommendation:** Change to `["سلام", "salɒːm"]`.

---

### 9. `fa_clas` — good — /neːk/ should be /niːk/ (Classical Persian î was not yet lowered)

`good.js` line 905: `fa_clas: ["نیک", "neːk"]`

In Classical Persian (pre-12th-century reading tradition), the letter **ی** in the position of نيك represents long **ī** /iː/, not **ē** /eː/. The lowering ī → ē is a feature of later New Persian (and is categorical in Tajik but not attested in Classical readings). Classical نيك is **/niːk/**, consistent with the preserved Avestan/MP cognate (Av. naiba, MP nēw → NP nīk). The fa_clas layer is supposed to represent a pre-shift reading.

**Correction IPA:** `"niːk"`

---

### 10. `fa_clas` — eye — /tʃiʃm/ has unexplained /i/ where /a/ is expected

`eye.js` line 905: `fa_clas: ["چشم", "tʃiʃm"]`

The Classical Persian word for eye is **čašm** with /a/ in the first syllable, consistent with MP **čašm**, Av. **čašman**, and all modern daughters (fa /tʃeʃm/, tg /tʃɒʃm/, prs /tʃaʃm/). The IPA /tʃiʃm/ introduces a high vowel /i/ that has no historical support and is inconsistent with the script (چَشم with fatha). This looks like a transcription slip.

**Correction IPA:** `"tʃaʃm"`

---

### 11. `tg` — eat — /ʉː/ for Tajik ӯ is incorrect; ӯ = /uː/ not a front-rounded vowel

`eat.js` line 221: `tg: ["хӯрдан", "xʉːrdɒn"]`

Tajik ӯ represents the long high back rounded vowel **/uː/**, identical in quality to the standard cardinal /u/ (cf. Perry 2005 §2.2.1 on Tajik long vowels). The symbol /ʉː/ is the close central rounded vowel (between /y/ and /u/), which does not exist in Tajik phonology and sounds like a Turkish/Uyghur vowel. The same error would apply to any other Tajik entry using ʉ.

**Correction IPA:** `"xuːrdɒn"`

---

### 12. `kho` — heart — Script reads **yasī** but IPA gives **/ðiː/** (complete mismatch)

`heart.js` line 920: `kho: ["𑀬𑀲𑀻", "ðiː"]`

The Brahmi characters decode as: **𑀬** = ya, **𑀲** = sa, **𑀻** = ī-mātrā → **yasī**. The IPA /ðiː/ is phonetically unrelated to *yasī*: it begins with a voiced dental fricative and lacks the initial ya-syllable entirely. Either the Brahmi string is wrong (should represent a Khotanese word that sounds like /ðiː/) or the IPA is wrong. Bailey (1979 *Dictionary of Khotan Saka*) gives **ysa** (from Iranian *zarda-?) for 'heart/mind'. The script and IPA need to be reconciled; as it stands the entry is self-contradictory.

---

### 13. `wbl` — water — **яу** /jau/ is unconfirmed; standard Wakhi 'water' is **yupk/yuk**

`water.js` line 976: `wbl: ["яу", "jau"]`

Edelman (1990) and Morgenstierne (1938) give Wakhi 'water' as **yupk** or contracted **yuk** (from Iranian *āp- via an unusual development). The form **yau** /jau/ is not attested in standard Wakhi dictionaries and may be a confusion with the Wakhi numeral or another lexeme. If this form is real, a source citation is needed; if not, the entry should be corrected to **yupk** [jupk].

---

### 14. `wbl` — mother — **нан** 'nan' means 'bread', not 'mother'

`mother.js` line 975: `wbl: ["нан", "nan"]`

In Wakhi (and in Iranian languages generally), **nān** means **bread** (cf. Persian/Tajik نان). The Wakhi word for mother is typically **mom** or **non** in Wakhi-specific sources (Edelman 1990 *Jazyki mira: Iranskiye yazyki III*), not *nān*. Assigning *nān* to 'mother' is likely a confusion with the bread word, possibly via a child-language form in some dialects, but it is not the standard adult lexeme and the IPA /nan/ matches the 'bread' pronunciation precisely.

**Recommendation:** Verify and correct to the actual Wakhi word for mother.

---

### 15. `ave` — fire — Citation form is the stem **ātar-**, not the nominative; worth flagging

`fire.js` line 904: `ave: ["𐬁𐬙𐬀𐬭", "aːtar"]`

The Avestan entry gives the stem form **ātar-** for 'fire'. The Younger Avestan nominative singular is **ātarš** (YAv.) or the Old Avestan equivalent **āθrō**. While using a stem citation form is a legitimate lexicographic convention, the data is inconsistent: other Avestan entries use inflected forms (e.g., `ave mother: ["𐬨𐬁𐬙𐬀𐬭", "maːtar"]` is also a stem, but `ave dog: ["𐬯𐬞𐬁", "spaː"]` is the nominative **spā**). The lack of a declared convention for citation form (stem vs. nominative) creates potential for misinterpretation across the board.

---

### 16. `pal` — drink — Infinitive should end in **-tan** not **-dan** in Middle Persian

`drink.js` line 904: `pal: ["𐭭𐭥𐭱𐭩𐭲𐭭", "noːʃiːdan"]`

MacKenzie (1971) lemmatises the MP verb as **nōšītan** (from Proto-Iranian *\*naušaya-tan*), not **nōšīdan**. In Middle Persian, the infinitive suffix is **-tan** (voiceless), not **-dan** (voiced). The voiced -dan form is a New Persian innovation. The IPA /noːʃiːdan/ reflects a NP reading of a MP text, which is anachronistic for the `pal` slot.

**Correction IPA:** `"noːʃiːtan"`

---

### 17. `ps` — good — Pashto ښ /ʂ/ reflects Southern (Kandahari) dialect only; Northern /x/ is unrepresented

`good.js` line 225: `ps: ["ښه", "ʂə"]`

The Pashto grapheme **ښ** has two major dialectal realisations: **/ʂ/** (retroflex sibilant) in Southern (Kandahari) Pashto, and **/x/** (velar fricative) in Northern (Yusufzai/Peshawar) Pashto (Tegey & Robson 1996; Elfenbein 1997 *Pashto Phonology*). The data picks /ʂ/ without identifying this as the Kandahari variant. Since both dialects have millions of speakers and the ISO 639-1 code `ps` covers both, the entry should either label the dialect or adopt the Kandahari form explicitly as the default with a note.

---

### 18. `ave` — one — **aewa** should be **aēwa** or **aiwa** with diphthong notation

`one.js` line 904: `ave: ["𐬀𐬉𐬬𐬀", "aewa"]`

The Avestan numeral for 'one' is **aēwa-** (Bartholomae 1904 col. 36: *aēva-*). The IPA rendering "aewa" conflates the diphthong: Avestan **𐬉** = *ae/aē* (the sequence of a-macron + e, or the long diphthong /aɛ/). Writing "aewa" (with plain /e/) undersells the quality; the standard scholarly form is **/aɛːwa/** or at minimum **/aeːwa/**. Compare Old Persian **𐎠𐎡𐎺** "aiwa" (line 903) where the OP transcription uses *ai*, appropriately different from Avestan *aē* — the contrast between the two systems is important and is currently papered over by using /ae/ and /ai/ interchangeably.

---

### 19. `xpr` (Parthian) — fire — **ādar** rather than the expected form for Parthian

`fire.js` line 945: `xpr: ["ādar", "aːdar"]`

Parthian **ādar** 'fire' is attested (Ghilain 1939; Sundermann 1989). However, the IPA /aːdar/ uses the same symbol as Classical Persian ādar/ātar. In Parthian, the vowel system had collapsed some distinctions, and the word appears in both phonetic and ideographic (heterographic) spellings in the Manichaean corpus. The entry is defensible but the IPA transcription is identical to Classical Persian, obscuring any Parthian-specific phonology; at minimum a note on the Manichaean Parthian attestation base would clarify the register.

---

### 20. `tly` — moon — **ümüj** /ymyʒ/ uses front-rounded vowels requiring verification

`moon.js` line 1008: `tly: ["ümüj", "ymyʒ"]`

Talyshi (Southern Talysh) is a Northwestern Iranian language without a well-documented front-rounded vowel inventory comparable to Turkish. The IPA /ymyʒ/ requires both /y/ and /ø/-class vowels. Standard descriptions of Southern Talysh (Schulze 2000; Miller 1953) list /a, e, i, o, u/ as the vowel phonemes without /y/ or /ø/. If the front-rounded vowel is real in a particular Talysh variety, the specific dialect needs to be identified; if not, the transcription is inaccurate. The orthographic form **ümüj** itself uses the Turkish-style letter ü, which may have been borrowed from an Azerbaijani-influenced Talysh writing system where ü represents a backed /u/, not the German/Turkish front-rounded /y/.

---

### 21. `fa_clas` — love — Pharyngeal /ʕ/ in عشق is Arabic-layer phonology, not Classical Persian

`love.js` line 948: `fa_clas: ["عشق", "ʕiʃq"]`

Classical Persian texts render Arabic loanwords in a Persian phonological frame; the Arabic pharyngeal ع was typically *not* phonemically maintained in Persian even in the medieval period (Lazard 1963 *La langue des plus anciens monuments*; Paul 2008). Representing Classical Persian عشق with the pharyngeal /ʕ/ implies a phonological distinction that Persian did not preserve. The expected classical pronunciation is **/ʔiʃq/** (with glottal stop onset) or simply **/iʃq/** (no onset consonant). Using /ʕ/ is an Arabist transcription convention applied to a Persian text, which is misleading for a map whose audience is comparing languages cross-linguistically.

**Correction IPA:** `"ʔiʃq"` or `"iʃq"`

---

### 22. `ku` — dog — Kurmanji **se** with IPA /sɛː/ has unexplained vowel length

`dog.js` line 222: `ku: ["se", "sɛː"]`

The Kurmanji Hawar orthography **e** represents a short mid front vowel /ɛ/. The IPA /sɛː/ adds unexpected vowel length. Kurmanji does not have a productive phonemic long vowel *ɛː* in native vocabulary; the distinction is between **ê** = /eː/ (written with circumflex) and **e** = /ɛ/ (plain). The word for 'dog' is **se** (plain e, short), not **sê** (long). The length mark /ː/ appears to be erroneous.

**Correction IPA:** `"sɛ"`

---

*References: Schmitt, R. (ed.) 1989. Compendium Linguarum Iranicarum. Wiesbaden: Reichert. — Bartholomae, C. 1904. Altiranisches Wörterbuch. Strassburg: Trübner. — MacKenzie, D.N. 1971. A Concise Pahlavi Dictionary. London: OUP. — Kent, R.G. 1953. Old Persian. New Haven: AOS. — Bailey, H.W. 1979. Dictionary of Khotan Saka. Cambridge: CUP. — Perry, J.R. 2005. A Tajik Persian Reference Grammar. Leiden: Brill. — Tegey, H. & Robson, B. 1996. A Reference Grammar of Pashto. Washington: CAL. — Edelman, D.I. 1990. Jazyki mira: Iranskiye yazyki III. Moscow. — Lazard, G. 1963. La langue des plus anciens monuments de la prose persane. Paris: Klincksieck.*
