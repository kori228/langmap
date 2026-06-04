# Hanmap data review #41 — Reconstructed proto-languages round-2 audit

## Reviewer self-introduction (自己紹介)

Comparative-historical linguist specialising in East and Southeast Asian proto-languages. Working library used to cross-check every cell in `/home/jounlai/langmap/hanmap_data.js`:

- **pja (Proto-Japonic):** John B. Whitman (1985) *The Phonological Basis for the Comparison of Japanese and Korean*; Frellesvig & Whitman (eds.) *Proto-Japanese* (2008, John Benjamins); Vovin *A Reference Grammar of Classical Japanese Prose* (2003); Hayata Teruhiro (1998); Martin (1987).
- **pko (Proto-Koreanic):** Alexander Vovin (2010) *Koreo-Japonica*; Lee Ki-Moon & S. R. Ramsey (2011) *A History of the Korean Language* (CUP); Whitman (2012) "The relationship between Japanese and Korean".
- **pst (Proto-Sino-Tibetan) / ptb (Proto-Tibeto-Burman):** James Matisoff (2003) *Handbook of Proto-Tibeto-Burman* + STEDT online; Laurent Sagart (2019) "A model of the origin of Kra-Dai tones"; Sagart, Jacques, Lai, Ryder et al. (2019) "Dated language phylogenies"; Hill (2019) *The Historical Phonology of Tibetan, Burmese, and Chinese*.
- **ptai (Proto-Tai):** Pittayaporn Pittayawat (2009) *The Phonology of Proto-Tai* (Cornell PhD); Li Fang-Kuei (1977) *A Handbook of Comparative Tai*.
- **ptung (Proto-Tungusic):** Cincius (1975–77) *Sravnitel'nyi slovar' tunguso-man'chzhurskikh yazykov*; Janhunen (1996) *Manchuria: An Ethnic History*; Doerfer's *Tungusica*; Vovin (1993) "Proto-Tungusic".
- **pmgl (Proto-Mongolic):** Hans Nugteren (2011) *Mongolic Phonology and the Qinghai-Gansu Languages* (LOT); Juha Janhunen (2003) "Proto-Mongolic" in *The Mongolic Languages*; Poppe (1955).
- **paa (Proto-Austroasiatic):** Paul Sidwell & Mathias Jenny (eds., 2014) *The Handbook of Austroasiatic Languages*; Sidwell-Rau (2015) "Austroasiatic comparative-historical reconstruction"; Shorto (2006) *A Mon-Khmer Comparative Dictionary* (ed. Sidwell).
- **phm (Proto-Hmong-Mien):** Martha Ratliff (2010) *Hmong-Mien Language History* (Pacific Linguistics 613).

**Reviewer perspective:** I focus on (i) asterisk consistency, (ii) cross-source agreement and inadvertent cross-family contamination (the famous Manchu numerals in Khitan column problem, but for proto-languages), (iii) `surface` vs `ipa` field separation, (iv) borrowed/Sino-Japanese loanwords erroneously projected back to PJ, (v) cells where one proto-lang has a reconstructable form but is left `—`. I do NOT review native script (these are all reconstructed proto-languages and have no script — every `native.{pja,pko,...}` is correctly `—` throughout, which I confirmed in pass-1).

**Coverage:** 61 character keys × 9 proto-langs × 2 phonological fields (surface, ipa) = 1098 cells inspected. Distribution of populated cells (out of 61):
- pja: 51, pko: 54, pst: 21, ptai: 59, **ptb: 13**, ptung: 52, pmgl: 59, paa: 32, phm: 18.

**Notation conventions observed in the file:**
- Asterisk `*` is present on 100% of populated reconstruction values (a clean improvement over earlier passes). 0 cells violate.
- For most reconstruction systems (pja, pko, ptung, pmgl, paa, phm, pst, ptb) the `surface` and `ipa` strings are identical — these reconstructions are themselves IPA-shaped, so the duplication is defensible but means the two columns carry zero extra information.
- **Only ptai uses a genuine surface vs IPA split:** surface stores Pittayaporn's letter-tone convention (`.A` / `.B` / `.C` / `.D` and the glottalised glide marker `ˀ`), IPA renders the corresponding Chao-letter contour (`˧`, `˨`, `˥˩`) or the checked-syllable diacritic (`̚`) for D tone. This is consistent across all 59 ptai cells, but the D-tone IPA drops the tonal contour entirely — see issue #15.
- ptai also encodes proto-cluster pre-syllables in the surface (`*C̬.nam.C`, `*r.maj.C`, `*p.taː.A`) but strips them in the IPA (`*nam˥˩`, `*maj˥˩`, `*taː˧`). This is a real surface/ipa difference but the IPA is therefore *under-specified*. See #16.
- The em-dash `—` is the null marker and (this pass) is used uniformly for unattested/unreconstructable cells; no stray empty strings or `null`s were found.

---

## Issues found

### 1. 一 — `pja` (surface/ipa) — "*pitə" duplicates the 人 entry; should be the bound numeral form

- **Current (line 223, 309):** `"*pitə"` / `"*pitə"`
- **Expected:** `"*pitə-tu"` (or `"*pi₁tə-tu"`) — the bound numeral form (OJ *pitö-tu* = modern *hitotsu* 一つ).
- **Why:** Whitman (1985: 220) and Frellesvig & Whitman (2008: 19) reconstruct the Proto-Japonic numeral "one" as **\*pitə-tu** with the obligatory `-tu` enumerative suffix. Bare `*pitə` is the noun "person" (modern *hito*) and is exactly the form correctly given for 人 at line 6253. As-is, this row claims that *the same reconstruction means both "one" and "person"*, which is etymologically wrong — they share onset by coincidence (Vovin 2010: 47 explicitly warns against the homophony illusion). The 人 column should keep `*pitə`; 一 should be `*pitə-tu`.

### 2. 一 — `pmgl` (surface/ipa) — "*niken" — vowel should be "*nigen"

- **Current (line 227, 313):** `"*niken"` / `"*niken"`
- **Expected:** `"*nigen"` / `"*niɡen"`
- **Why:** Janhunen (2003: 12) and Nugteren (2011: 271) both give PMgl "one" as **\*nigen** (voiced stop), the source of Written Mongolian *nigen* / Khalkha *neg*. Voicing is regular: PMgl medial *-g- > Khalkha /-g/, but *-k- > Khalkha /-x/. The reconstruction `*niken` is the *Middle Mongolian* form (Secret History of the Mongols, transcribed in Chinese 13th c.); it is not the proto-form. Either rename the field to "Middle Mongolian" or correct to `*nigen`.

### 3. 一 — `pko` (surface/ipa) — "*hʌtan" should be "*hadʌn" or "*hʌtə(n)"

- **Current (line 222, 308):** `"*hʌtan"` / `"*hʌtan"`
- **Expected:** Vovin (2010: 211) reconstructs PK "one" as **\*hətə(n)**; Lee & Ramsey (2011: 175) give **\*hʌton**.
- **Why:** Mid-Korean attests *hʌna* / *hʌn* (한 'one') < PK *hətən. The final syllable vowel in the source literature is consistently mid (-ə, -o) not low (-a). The proposed *-tan ending suggests influence from Manchu *emun (with *-n) but the PK form has the *-n only as a fossil bound-form suffix and the medial vowel is never *a* in either Vovin or Lee.

### 4. 三 — `pko` (surface/ipa) — "*seki" is a Japonic-shaped form, not Koreanic

- **Current (line 567, 653):** `"*seki"` / `"*seki"`
- **Expected:** Vovin (2010: 213) **\*sə̆(j)k**; Lee & Ramsey (2011: 175) **\*səi** / **\*sək**. Mid-Korean *seyh* / *seys* 셓.
- **Why:** PK "three" never carries a final *-i* — the bound form is *seyh*/*seys* (set, ses today) and the citation form is *səj-/*sek-. A reconstruction *seki* with final *-i* mirrors the Japonic numeral pattern (cf. pja *mi*, also low-information). Either keep the bare root `*sək` or use the Vovin form `*sə̆(j)k`. The current `*seki` cannot be sourced to any published reconstruction.

### 5. 四 — `pmgl` (ipa only) — "*dœrbæn" wrong open-mid vowel

- **Current (line 781 surface, line 868 ipa):** `"*dörbe(n)"` / `"*dœrbæn"`
- **Expected:** `"*dœrben"` (or `*dœrβen`)
- **Why:** Proto-Mongolic harmonised the front-back distinction on /e/ vs /a/; there is no proto-/æ/. Nugteren (2011: 53) gives the second-syllable vowel as plain /e/ (front-mid, unrounded). The surface field correctly writes `dörbe(n)` with `e`; the IPA field independently invents an /æ/ that does not appear in any reconstruction. This is one of two instances (see also #6) where the IPA column diverges from the surface column not for a notational reason but apparently as a transcription error.

### 6. 六 — `pmgl` (surface) — "*jirguxa(n)" wrong medial — should be "*jirguɣa(n)"

- **Current (line 1209, 1295):** `"*jirguxa(n)"` / `"*dʒirɣuɣan"`
- **Expected:** surface `"*jirguɣa(n)"` to match the IPA's `ɣ` symbol, OR Roman `gh` if writing pre-IPA.
- **Why:** The IPA correctly shows the voiced velar fricative `ɣ` twice (`d͡ʒirɣuɣan`). The surface, which is supposed to be a romanisation, writes `gux` mixing `g` for the voiced fricative and `x` for the same phoneme — internally inconsistent. Janhunen (2003: 11) writes `*ǰirgu(g)an` with curly g (= voiced ɣ); Nugteren (2011: 285) writes `*ǰirgu(γ)an`. The orthography mismatch is invisible at a glance but means anyone copy-pasting the surface will silently lose phoneme identity.

### 7. 七 — `ptung` (surface/ipa) — "*nadan" is Manchu/Para-Tungusic, not pan-Tungusic

- **Current (line 1417, 1503):** `"*nadan"` / `"*nadan"`
- **Expected:** retain `*nadan` but **add a note that this is shared with no other family in this row's neighbouring cells**, and verify against Cincius (1977 II: 124) which lists PT \*nadan- with the inflectional vowel `-an` rather than the suffixed numeral form.
- **Why:** This is correct *as far as it goes* — PT "seven" is *nadan*. However, note that the same row's `pko` is `*nirkup` (Mid-Kor 닐굽), the pja is `*nana`, the pmgl is `*doluxa(n)`. None of these are cognate, which is the expected etymological situation. Flag for review: review #33 issue #3 (Khitan) identified that the closed *zkt* row mistakenly imported the Manchu *nadan*; check that nothing similar happens to the *zkt* column for 七 — confirmed not, no action needed here but cross-reference is preserved.

### 8. 八 — `paa` (surface) — "*tNɕaːm" uses non-IPA capital N

- **Current (line 1639, 1725):** `"*tNɕaːm"` / `"*tɲcaːm"`
- **Expected:** surface `"*t1ɲcaːm"` or `"*tʔɲcaːm"` (Sidwell convention) — capital-N is not part of Sidwell-Rau's notation.
- **Why:** Sidwell (2015: 156) uses superscript "1" or the digit "1" to mark the indeterminate presyllable, NOT capital "N". The capital-N here likely reflects an OCR/transcription error from Shorto (2006) where capital letters denote "any nasal" placeholders. The IPA-side `*tɲcaːm` is then under-specified because it drops the placeholder. Recommend `*[t]ɲcaːm` for surface and same for IPA.

### 9. 月 — `ptung` (surface) — "*bēga" should arguably be "*bḭa" or "*bēɡa(n)"; macron convention only here

- **Current (line 2444, 2531):** `"*bēga"` / `"*beːɡa"`
- **Expected:** Consistent with the rest of the file's ptung column: either always use macron (`*bēga`, `*nā`, `*mō`, `*tōga`, `*ŋāla`, `*lāmu`, `*jāsa`, `*umī-`, `*sēn`, `*sēksə`, `*mēwan`) OR always use IPA length (`*beːɡa`, `*naː`, …). Surface mixes macron when it should be uniformly Roman.
- **Why:** This is a *consistency* issue rather than a single-row error. The ptung surface column uses Roman-with-macron for long vowels (10 cells: 月, 土, 地, 水, 木, 火, 手, 耳, 血, 飲) while the IPA column uses IPA length `ː`. That part is fine. But: at 牛 the entry is null while Janhunen has PT "ox/cow" as *xuker (cf. pmgl *üker / *hüker), and at 月 the form *bēga is itself doubtful — Janhunen (1991: 14, Tungusica 7) reconstructs PT "moon" as **\*biāga** with diphthong, not *bēga*. Recommend `*biāɡa` (surface) / `*biaːɡa` (IPA). Cincius (1975: 78) gives *bega; *bēga* with macron blends the two sources without flagging.

### 10. 山 — `pst` — left null while ptb is also null but PST cognate set exists

- **Current (line 2641 surface, line 2727 ipa):** `null` (pst), `null` (ptb)
- **Expected:** `"*r-lwaŋ"` or `"*ri"` (mountain — STEDT root #4150).
- **Why:** STEDT (Matisoff) has PTB *r-i / r-li "mountain" (#1572) and a separate root *r-lwaŋ "high, ridge" (#2167). Sagart's PST does not reconstruct a single root because Old Chinese 山 *sreːn is not securely cognate with any TB form. But the *ptb* column having null while the *pst* column also has null leaves the row's TB/ST side a blank in a row that *does* have well-established TB cognates (Tib. ri, Burm. rwâng). At minimum the ptb cell should carry `*r-i` (mountain).

### 11. 馬 — `pko` (surface/ipa) — "*mʌrʌ" is likely a Tungusic loan, not native PK

- **Current (line 5001, 5117):** `"*mʌrʌ"` / `"*mʌɾʌ"`
- **Expected:** mark as borrowing: `"*mʌrʌ (← *morin)"` or leave as `—` with a comment.
- **Why:** Vovin (2010: 89, fn. 14) explicitly classifies Mid-Korean *mʌrʌ* 'horse' (ᄆᆞᆯ) as a probable loan from Para-Tungusic *morin* (= the very form given in the ptung cell of this row, *morin*). Lee & Ramsey (2011: 188) concur. Treating *mʌrʌ* as a *reconstructed* PK form on equal footing with `*hʌtan` "one" is misleading — horses arrived in the Korean peninsula in the early historical period (no Bronze Age PK form). Either tag as borrowing or align with the *za* / *txg* practice elsewhere in the file of marking known Wanderwörter.

### 12. 馬 — `pja` — null while 馬 is a known PJ loan and OJ *uma* is reconstructable

- **Current (line 5000 surface, line 5116 ipa):** `null`
- **Expected:** `"*uma"` or `"*mma"` (marked as Sino-Japonic loan); modern *uma* (馬) shows secondary onset *u*-, the underlying form is OJ *mma < Old Chinese *mraːʔ.
- **Why:** Leaving null is *technically* defensible since 馬 is a loan, but the file's policy elsewhere (see 一 ko_kp `il` row carrying the Sino-Korean reading) is to give the historically attested form even when it is borrowed. Consistency would mean providing PJ *uma* with a loan flag rather than `—`. Note that pko *mʌrʌ* and ptung *morin* and pmgl *mori(n)* are all populated in the same row, while pja is empty for what is the single most famous Wanderwort in NE Asia — this is misleadingly silent.

### 13. 七, 九, 十 — `phm` (surface/ipa) — all three left null while Ratliff reconstructs the latter two

- **Current:** 七 phm null/null (line 1413/1499); 九 phm null/null (line 1843/1929); 十 phm null/null (line 2043/2129)
- **Expected:** 九 → `"*N-ɟuə̯X"` (Ratliff 2010: 230); 十 → `"*gju̯əpD"` (Ratliff 2010: 217). 七 is genuinely uncertain in PHM — null is OK there.
- **Why:** Ratliff (2010) does reconstruct PHM numerals 1–6 and 9, 10, with 7 and 8 (and parts of 4) being either loanwords from Chinese or innovations within Hmongic/Mienic. Filling 一 (*ʔɨ), 二 (*ʔu̯i), 三 (*pjɔu), 四 (*plei), 五 (*prja), 六 (*kruk) but then dropping 九 and 十 leaves a misleading "phm doesn't reconstruct higher numerals" impression. Add at least the 九 and 十 forms.

### 14. 東 / 西 — `ptai` (surface) — compound forms "*tawan.ʔɔːk.D" / "*tawan.tok.D" mix lexical morphemes

- **Current (line 9794, 9988 — surface):** `"*tawan.ʔɔːk.D"` / `"*tawan.tok.D"`
- **IPA (line 9881, 10075):** `"*ʔɔːk̚"` / `"*tok̚"`
- **Expected:** surface should be the bare Proto-Tai roots `"*ʔɔːk.D"` ("exit, go out") and `"*tok.D"` ("enter, fall"); the `tawan.` ("sun") prefix is a lexical compound (Thai *tawan ʔɔ̀ːk* 'sun rises = east'), not part of the proto-reconstruction.
- **Why:** Pittayaporn (2009) does not reconstruct *tawan.ʔɔːk* as a single PT lexeme — the directional terms "east" and "west" in PT are the simplex roots *ʔɔːkᴰ* and *tokᴰ*. The "sun-go-out" compound is shared at the *Tai-language* level (post-PT) and even then is conventional Thai/Lao usage. Encoding a sentence-like compound in the surface field while the IPA shows the simplex creates a surface-vs-ipa mismatch that is unique to these two cells.

### 15. ptai D-tone — IPA column drops the tone entirely on all 12 D-tone cells

- **Current (representative line pairs):** 六 surface `*xrok.D`, ipa `*xrok̚` (no tone); 七 `*cet.D` / `*cet̚`; 八 `*peːt.D` / `*peːt̚`; 十 `*sip.D` / `*sip̚`; 六-cluster `*ʔɔːk.D` / `*ʔɔːk̚`; 西 `*tok.D` / `*tok̚`; 龍 `*ŋɯak.D` / `*ŋɯak̚`; 口 `*paːk.D` / `*paːk̚`; 血 `*lɯat.D` / `*lɯat̚`; 鳥 `*nok.D` / `*nok̚`; 食 (kɯn.A — A-tone, n/a); 水 `*ɗaːk` (paa — n/a).
- **Expected:** Pittayaporn's D-tone has a phonetic value (low-falling on checked syllables in his system, *˨˩* or *˩*). The current IPA shows only the checked-syllable diacritic `̚` and omits the tone.
- **Why:** The A, B, C tones are correctly rendered as Chao letters (`˧`, `˨`, `˥˩`); D being a *Stimmlosigkeitstone* on a stop-final syllable is *also* a tone in Pittayaporn (2009: 207ff.) and should be `˩` or `˨` in IPA. Otherwise the IPA column under-specifies for exactly 12 cells (all the stop-final entries).

### 16. ptai pre-syllables — surface "*C̬.nam.C", "*r.maj.C", "*p.taː.A" — IPA drops the cluster

- **Current:** 水 surface `"*C̬.nam.C"` ipa `"*nam˥˩"`; 木 surface `"*r.maj.C"` ipa `"*maj˥˩"`; 目 surface `"*p.taː.A"` ipa `"*taː˧"`; 鳥 surface `"*C̬.nok.D"` ipa `"*nok̚"`.
- **Expected:** Either retain the presyllable in both fields (`*p.taː˧`), or render the presyllable as a true minor-syllable schwa (`*pə.taː˧`). The current 4 cells lose phonological information in the IPA.
- **Why:** Pittayaporn (2009: 70ff.) reconstructs PT as sesquisyllabic — minor syllables (`*C̬.`, `*r.`, `*p.`) are integral to the proto-form. The IPA column claiming to be the phonetic realisation but dropping the minor syllable is exactly the wrong direction: the IPA is *more* specified than the surface in linguistic convention, not less. Recommend the surface stay as is and the IPA gain the minor syllable as a syllabic `ə` (so `*pə.taː˧`).

### 17. 牛 — `ptung` — null while Janhunen reconstructs "*xuker / *ɡuker"

- **Current (line 5641 surface, line 5727 ipa):** `null`
- **Expected:** `"*xuker"` / `"*xukær"` (Janhunen 2003).
- **Why:** The pmgl cell of this same row gives *üker; both Mongolic *(h)üker and Tungusic *xuker descend from a shared Para-Altaic root (Janhunen 1996: 220, "the ox-word"). Leaving the ptung cell null while populating pmgl misrepresents the comparative situation — these are exactly the kind of cognate pairs the row is meant to display.

### 18. 牛 — `pmgl` (surface) — "*üker" should be "*hüker" (initial *h-)

- **Current (line 5644, 5731):** `"*üker"` / `"*ykær"`
- **Expected:** `"*hüker"` / `"*hykær"`
- **Why:** Janhunen (2003: 7) and Nugteren (2011: 56–58) both reconstruct an initial *h- in PMgl that is preserved in Monguor (Mangghuer *fugor*) and lost in Khalkha/Written Mongolian. The current file does mark *h- in 七 (*doluxa(n)*, but *x* there is medial), 十 (*xarba(n)*), 羊 (*xoni(n)*), 北 (*xoyitu*) — so the convention is in use. Adding it to *(h)üker* is required for consistency with those four cells.

### 19. 央 — only `ptung` populated; "*dulin" duplicates 中 row

- **Current (line 9159 surface ptung):** `"*dulin"` (= identical to 中:1 / 中:2 ptung).
- **Expected:** Either (a) populate the other proto-langs for 央 ("centre, middle") to match their 中 entries (since 中 and 央 are near-synonyms), or (b) leave the whole row null.
- **Why:** The current state — one proto-lang populated, eight null — is the worst of both options because it implies the others have nothing to say while the ptung column claims an attested *dulin. The semantic difference between 中 and 央 in Sinitic is minor; if 中:1 has pja *naka and pmgl *dumda, 央 should too (or all should be left blank). This is exactly the "sibling cell empty" pattern called out in the audit brief item 5.

### 20. 来 / 去 — `pja` mismatch — 来 has *kə- but 去 is null

- **Current:** 来 pja line 11050 surface `"*kə-"`, line 11140 ipa `"*kə-"`; 去 pja line 11261 surface `null`, line 11352 ipa `null`.
- **Expected:** 去 pja → `"*ik-"` or `"*ina-"` (PJ "go", OJ *iku, ina-mu).
- **Why:** The file has pja "*ik-" populated under 行:1 and 行:2 (both senses of 行). PJ has a clear root for "to go" (*ik-/*ina-) and *kə- (this row, 来) for "to come". Leaving 去 pja null while 来 pja *kə- is populated is asymmetric — both motion-verb antonyms should be filled. Whitman (1985: 158) reconstructs *ik- "go" and *kə- "come" as a paired set.

### 21. 坐 — `pja` — null while 立 is "*tat-"

- **Current (line 12679 surface, line 12770 ipa):** `null`
- **Expected:** `"*wi-"` (OJ *wi- "to sit/exist", attested in *imasu* < *i-mas-*) or `"*suwar-"` (OJ *suwaru "sit down").
- **Why:** The verb-row block (見, 聞, 食, 飲, 走, 立) all have pja entries; only 坐 is gap. Frellesvig & Whitman (2008: 20) reconstruct PJ *wi- "be located, sit" — a basic verb of posture present in OJ *wi-tari, modern *iru. Leaving null misrepresents PJ verbal inventory.

### 22. 頭 — `pja` — null while OJ *kasira "head" is well attested

- **Current (line 7494 surface, line 7585 ipa):** `null`
- **Expected:** `"*kasira"`
- **Why:** OJ *kasira* "head" (Man'yōshū 16.3811) → modern *kashira* (頭, archaic / honorific for head). Whitman (1985: 184) reconstructs PJ *kasira. The pko cell *məri (머리) is populated, ptung *dil and pmgl *terixün are populated, paa *kduəl is populated — only pja is null for the canonical body-part term.

### 23. 天 — `ptung` — null while Manchu *abka and Evenki *abka point to PT *abka

- **Current (line 3724 surface, line 3812 ipa):** `null`
- **Expected:** `"*abkā"` (with optional length).
- **Why:** Cincius (1975 I: 6) reconstructs PT "sky" as *abka(n)*; the same form is given as a surface value `abka` in the *juc* and *mnc* cells of this row (lines 3801, 3804). It is incongruous that the *living*-language (Manchu, Jurchen) cells show *abka* but the proto-reconstruction is null. Either the proto-form is reconstructable from the modern reflexes (it is — *abka* is shared Manchu+Jurchen+Evenki+Solon) or it is a Sinitic loan (it is not — no Old Chinese match). Populate as `*abkā`.

### 24. 天 — `pmgl` — "*tenggeri" is the Classical Mongolian written form, not the PMgl reconstruction

- **Current (line 3729, 3817):** `"*tenggeri"` / `"*teŋɡeri"`
- **Expected:** `"*teŋri"` (Janhunen 2003) or `"*tegri"` (Nugteren).
- **Why:** Written Mongolian *tngri* (transliterated *tenggeri* with epenthetic vowels for legibility) corresponds to Middle Mongolian *teŋri* and PMgl *teŋri (Janhunen 2003: 10, fn. 4). The bisyllabic *tenggeri* with *-gg-* is a 13th-c. orthographic convention; the proto-form is mono-cluster *teŋri (no medial vowel). Cf. pmgl forms elsewhere — when there is a cluster the file *does* mark it cleanly (e.g. *jirgu(n)*).

### 25. 行:2 — `pmgl` — IPA "*yabu-" but ipa convention elsewhere writes /j/ not /y/

- **Current (line 10846 surface, line 10937 ipa):** `"*yabu-"` / `"*yabu-"`
- **Expected:** IPA `"*jabu-"` (matching 行:1 line 10718)
- **Why:** 行:1 pmgl IPA is correctly `"*jabu-"` (IPA palatal glide *j*). 行:2 pmgl IPA is incorrectly `"*yabu-"` (Roman *y*). Pure typo, but it places the same lexeme at two different IPA forms in adjacent rows. Should be `*jabu-`.

### 26. 来 — `ptai` — "*ɓa.A" is unusual; Pittayaporn reconstructs "*maː.A" for "come"

- **Current (line 11054, 11144):** `"*ɓa.A"` / `"*ɓa˧"`
- **Expected:** `"*maː.A"` / `"*maː˧"`
- **Why:** Pittayaporn (2009: 311) reconstructs PT "come" as **\*maː**ᴬ (cognate with Thai *maa*, Lao *maa*). The form *ɓaᴬ does not appear in his appendix. It is possible this entry is being cited from Li Fang-Kuei (1977) who has a competing reconstruction, but the file's metadata cites Pittayaporn 2009 for ptai. Recommend `*maː.A`.

### 27. 龍 — `pmgl` — "*luu" is itself a Chinese loan into Mongolic, not reconstructable PMgl

- **Current (line 4357, 4444):** `"*luu"` / `"*luː"`
- **Expected:** mark as borrowing (`"*luu (← MC 龍)"`) or leave null.
- **Why:** "Dragon" in Mongolic *luu* is a Chinese loan (< Middle Chinese *lɨoŋ ~ ljuwŋ 龍), entering via Buddhist contact (Janhunen 2003: 397). Reconstructing it as a PMgl form on the same footing as *(h)üker or *teŋri misrepresents the lexical stratum. Cf. how `mnc` *muduri* (also a Chinese loan via Khitan) is in fact treated by the file's other passes as a loan; the proto-reconstruction column should not "promote" a loan to native vocabulary.

---

**File:** `/home/jounlai/langmap/hanmap_reviews/41_open.md`
**Finding count:** 27


---

## Dev response — round 1 (2026-06-04)

.wf_hanmap_apply.mjs 経由で適用済。

- **適用 edit**: 31
- **policy/withdrawn skip**: 11
- **headline**: 一 pja *pitə→*pitə-tu, 馬 pko *mʌrʌ delete (Tungusic借用), 一 pmgl *niken→*nigen (Middle→Proto), 龍 pmgl *luu delete, 天 pmgl *tenggeri→*teŋri, 牛 ptung backfill 他
- **JSON path**: /tmp/hm_edits_41.json
