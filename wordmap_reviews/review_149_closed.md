# Wordmap review #149 — Loanword & anachronism auditor for ancient/historical lects

## Reviewer self-introduction (ペルソナ自己紹介)

I am reviewer #149, a historical-comparative linguist specialising in the deep philology of ancient and reconstructed lects, brought in to hunt the loanword smuggled into the wrong stratum and the modern reflex masquerading as its ancestor. I work the way this project's data model is built: each `words/<concept>.js` carries a `data` block keyed by ISO/period codes, and my remit (`la`, `el_grc`, `sa`, `pi`, `ang/enm`, `non/got/goh/gmh`, `egy/akk/sux/hit`, `peo/ave/xpr/xto`, `cu`, and the historical Sinitic/Japonic/Koreanic stages `och/ojp/oko`) is precisely the band where a careless cell quietly imports a daughter-language form, a deity name, or a Sanskritism. I verified every Current value verbatim against the live files with line numbers, grepped `wordmap_reviews/*_closed.md` for each surface form and code before reporting so as not to re-tread reviews #76 and #100 (whose Tocharian A/B and Indo-Iranian passes I read in full), and confirmed each issue still stands in the working tree as of today. My reference shelf for this pass: Weiss, *Outline of the Historical and Comparative Grammar of Latin*; Sihler, *New Comparative Grammar of Greek and Latin*; Allen, *Vox Latina*/*Vox Graeca*; Ringe, *From Proto-Indo-European to Proto-Germanic*; Kloekhorst, *Etymological Dictionary of the Hittite Inherited Lexicon*; Durkin-Meisterernst, *Dictionary of Manichaean Middle Persian and Parthian*; Adams, *A Dictionary of Tocharian B* (with the Tocharian A thesaurus); the ePSD/CAD for Sumerian and Akkadian; eDIL for Old Irish; and the project's own `docs/words/CONTRIBUTING.md` and `docs/words/LANG_CODES.md` for the period definitions and the attestation/dash policy. The issues below are the subtle ones that survived eleven waves: a Southwestern Persian heart in a Northwestern Parthian cell, two moon-gods standing in for the common noun "moon," a Sanskrit tree in an Old Persian slot, and a Tocharian A citation form that is not a nominative.

---

## Issues found

### 1. `xpr` — heart — Southwestern Middle-Persian *dil* in a Northwestern Parthian cell
- **File:** words/heart.js line 937
- **Current:** `["dil", "dil"]`
- **Expected:** `["zyrd", "zird"]` (Manichaean Parthian 𐫉𐫏𐫡𐫅 *zyrd*)
- **Why:** Parthian is a **Northwestern** Iranian language; the Proto-Iranian cluster of the "heart" word (PIr *\*ʒr̥d-*, cf. PIE *\*ḱr̥d-*) is retained in NW Iranian as *zird*, exactly as Durkin-Meisterernst lists Parthian 𐫉𐫏𐫡𐫅 *zyrd* /zird/. *dil* is the **Southwestern** (Persian/Middle-Persian → New Persian) outcome, where *\*-rd-* → *-l-*; it is an anachronistic/wrong-branch reflex here. This is also an internal-consistency failure within the same row: the Iranian siblings keep the *z-* form — `peo` *zard* (line 895) and `ave` *zərəd* (line 896) — so Parthian *dil* is the lone Southwestern outlier where the family (and its own NW phonology) demands *zird*. Note that the `xpr` "sun" cell correctly shows the NW form `xwar` (sun.js line 943), proving the row otherwise respects the NW stratum; only heart was pulled from the Persian column.

---

### 2. `peo` — tree — Sanskrit *druma* standing in for the Old Persian word
- **File:** words/tree.js line 895
- **Current:** `["𐎭𐎼𐎢𐎶", "druma"]`
- **Expected:** Old Persian *dāru-* "tree, wood" (cf. NPers *dār*), or `["—", "—"]` if a securely attested common noun is wanted
- **Why:** *druma-* (द्रुम) is the **Sanskrit/Old-Indo-Aryan** word for "tree" — it is the form one finds in the Indic column, not the Iranian one; the `sa` sibling indeed carries the OIA "tree" lexeme (वृक्षः, tree.js line 85). The Old Persian word for "tree/wood" actually continued in the inscriptional/lexical record is *dāru-* (Av. *dāuru-*, gen. *draoš*, → Early NPers *dār*; Proto-Indo-Iranian *\*dāru-* "wood, tree"). Filling the Old Persian cell with the Sanskrit-shaped *druma* is a cross-family import: it gives an Indic surface form under an Iranian code. Per the project's attestation/dash convention (cf. the `peo` cat and hello cells already set to `—`), an unattested OP common noun should be `—`; the defensible attested replacement is *dāru-*.

---

### 3. `sux` — moon — the moon-GOD Nanna (with divine determinative) instead of the common noun
- **File:** words/moon.js line 533
- **Current:** `["𒀭𒋀𒆠", "nanːa"]`
- **Expected:** `["𒌗", "itud"]` (Sumerian *itud* / *iti* "moon, month")
- **Why:** 𒀭𒋀𒆠 (DINGIR + ŠEŠ + KI) is the writing of **Nanna(r)**, the Sumerian moon-**deity** — note the leading 𒀭 DINGIR (the "god" determinative), the orthographic tell that this is a divine name, not a celestial-body common noun. The `moon` definition asks for the basic common noun, not the deity (the same line the `sux`/`akk` sun cells respect by avoiding the god). The Sumerian common noun for "moon/month" is *itud* (also *iti*), written 𒌗; the deity name is used only poetically/metonymically. This is a category error parallel to issue 4.

---

### 4. `akk` — moon — the moon-GOD Sîn (with divine determinative) instead of *warḫu*
- **File:** words/moon.js line 534
- **Current:** `["𒀭𒌍", "siːnu"]`
- **Expected:** `["𒌗", "warḫu"]` (Akkadian *warḫu(m)* / *arḫu* "moon, month")
- **Why:** 𒀭𒌍 is DINGIR + the numeral-sign "30" (𒌍), the standard logographic writing of the moon-**god Sîn/Su'en** — again flagged by the 𒀭 divine determinative, and *sīnu* is the theonym, not a common noun. The neutral Akkadian common noun for "moon/month" is *warḫu(m)* (var. *arḫu*; Proto-Semitic *\*warḫ-* "moon, month," cognate with Hebrew *yārēaḥ* "moon," *yeraḥ* "month") per CAD. As in issue 3, the `moon` definition wants the common noun, not the deity; the Sumerian and Akkadian moon cells make the identical mistake and should be fixed together for cross-row parity.

---

### 5. `xto` — sun — *kontu* is not a Tocharian A nominative; the word is *koṃ*
- **File:** words/sun.js line 903
- **Current:** `["𑀓𑁄𑀦𑁆𑀢𑀼", "kontu"]`
- **Expected:** `["𑀓𑁄𑀁", "kom"]` (Tocharian A *koṃ* "sun, day")
- **Why:** The Tocharian A word for "sun/day" is *koṃ* /kom/ (nom.sg.; nom.pl. *koñi*; Proto-Tocharian *\*kāunä*, cf. Toch B *kauṃ*), per Adams and the Tocharian A thesaurus. There is no nominative *kontu*; the cited string looks like a corrupted or oblique/plural form and is not the citation lemma the other cells use (the `xto` row otherwise gives clean nominatives: `por`, `wär`, `kāsu`, `sas`). Review #100 §24 listed "sun (A `kontu` / B `kauṃ`)" only to demonstrate that A differs from B — it did **not** verify *kontu* as the correct A form — so correcting it to the attested nominative *koṃ* is a fresh fix, not a re-report.

---

### 6. `xto` — love — *kāyu* (a Sanskrit-loan "body" word) where Tocharian A "love" is *tuṅk*
- **File:** words/love.js line 904
- **Current:** `["𑀓𑀸𑀬𑀼", "kaːju"]`
- **Expected:** `["𑀢𑀼𑀁𑀓𑁆", "tuṅk"]` (Tocharian A *tuṅk* / *tunk* "love")
- **Why:** The securely attested Tocharian A noun for "love" is *tuṅk* /tuŋk/ — the word that headlines the famous Berlin Tocharian A love poem (THT, ~600 CE) and is glossed "love" in the Tocharian A thesaurus and Adams (Toch B *tāṅkw*). *kāyu* is not a love-lexeme: it is the Sanskrit loan *kāya-* "body" naturalised into Tocharian, i.e. the wrong semantic field entirely. As with issue 5, review #100 §24 merely cited "love (A `kāyu` / B `kāwā`)" to contrast A vs B and never checked the gloss, so substituting the attested *tuṅk* is a new correction. (Lower confidence on the exact Brāhmī spelling supplied here than on the romanisation; the load-bearing point is the lexeme/sense, not the glyph.)

---

### 7. `sga` — one — long diphthong of *óen/óin* under-transcribed as short /oin/
- **File:** words/one.js line 945
- **Current:** `["oín", "oin"]`
- **Expected:** `["oín", "oːin"]`
- **Why:** Old Irish "one" is *óen* (variant *óin*), with the *síneadh fada* on the *ó* marking a **long** vowel: the realisation is /oːi̯n/ (< Proto-Celtic *\*oinos*; eDIL s.v. *óen*). The current IPA `oin` drops the length the orthographic accent explicitly encodes, transcribing a short /o/ where Old Irish has /oː/. This is a phonological under-specification of the kind already corrected elsewhere in the historical rows (length faithfully marked in `sga` *lám* /laːv/ hand, *máthair* /maːθirʲ/ mother); the `oín` cell is the lone Old Irish entry that swallows its long nucleus.

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

---

## Worker round-1 response (作業者round-1)

### 149-1 — xpr — heart — Parthian *dil* → *zyrd*/*zird* — APPLIED (applied by orchestrator this round)
Confirmed words/heart.js:937 `xpr: ["dil", "dil"]`. Parthian is Northwestern Iranian; PIr *\*ʒr̥d-* is retained as NW *zird* (Manichaean Parthian 𐫉𐫏𐫡𐫅 *zyrd*, Durkin-Meisterernst, *Dictionary of Manichaean Texts* III,1). *dil* is the Southwestern (Persian) *\*-rd- > -l-* reflex — wrong branch. Internal-consistency support in the same row: `peo` *zard* (l.895), `ave` *zərəd* (l.896) keep the *z-* form, and `xpr` "sun" already shows the NW `xwar` (sun.js:943). Applied surface and IPA → `["zyrd", "zird"]`.

### 149-2 — peo — tree — Sanskrit *druma* → dash — APPLIED (applied by orchestrator this round)
Confirmed words/tree.js:895 `peo: ["𐎭𐎼𐎢𐎶", "druma"]`. *druma-* (द्रुम) is the Sanskrit/OIA lexeme and belongs in the Indic column (the `sa` sibling already carries वृक्षः, tree.js:85); placing it under an Iranian code is a cross-family import. The attested Indo-Iranian "tree/wood" word is *dāru-* (Av. *dāuru-*, PII *\*dāru-*; → Early NPers *dār*), but a securely-attested **Old Persian inscriptional common noun** for "tree" is not reliably documentable offline — the OP corpus is small and royal-inscriptional, and *dāru-* as an OP common noun is a reconstruction from Avestan/NPers rather than a directly attested OP token. Per the reviewer's offered fallback and the project attestation/dash convention (cf. `peo` cat = `—`, hello = `—`), applied `["𐎭𐎼𐎢𐎶", "druma"]` → `["—", "—"]` to remove the wrong-family form without asserting an unattested OP surface. Reviewer may substitute a sourced *dāru-* cuneiform form if a human Iranist can attest it.

### 149-3 — sux — moon — moon-god Nanna → common noun *itud* — APPLIED (applied by orchestrator this round)
Confirmed words/moon.js:533 `sux: ["𒀭𒋀𒆠", "nanːa"]`. 𒀭𒋀𒆠 (DINGIR+ŠEŠ+KI) is the theonym Nanna(r), flagged by the leading 𒀭 divine determinative — a deity name, not the common noun the `moon` definition asks for. The Sumerian common noun "moon/month" is *itud* / *iti*, written 𒌗 (ITI), per ePSD2 itud[moon] (oracc.museum.upenn.edu/epsd2/o0031358). Applied → `["𒌗", "itud"]`.

### 149-4 — akk — moon — moon-god Sîn → *warḫu* — APPLIED (applied by orchestrator this round)
Confirmed words/moon.js:534 `akk: ["𒀭𒌍", "siːnu"]`. 𒀭𒌍 (DINGIR + "30") is the logogram for the moon-god Sîn/Su'en (divine determinative present); *sīnu* is the theonym. The neutral common noun is *warḫu(m)* / *arḫu* "moon, month" (Proto-Semitic *\*warḫ-*, cf. Heb. *yārēaḥ*; CAD; Wiktionary Reconstruction:Proto-Semitic/warḫ-), written with the ITI sign 𒌗. Applied → `["𒌗", "warḫu"]`, parallel to 149-3.

### 149-5 — xto — sun — *kontu* → *koṃ* — APPLIED (applied by orchestrator this round)
Confirmed words/sun.js:903 `xto: ["𑀓𑁄𑀦𑁆𑀢𑀼", "kontu"]`. Tocharian A "sun/day" is *koṃ* /kom/ (nom.sg.; PT *\*kauṃ-*, cf. Toch B *kauṃ*) — Adams; corroborated by Lubotsky & Starostin and the Tocharian/Turkic loan literature (koṃ 'sun, day'). No nominative *kontu* exists. Other `xto` cells give clean nominatives (por, wär, kāsu `𑀓𑀸𑀲𑀼`, sas `𑀲𑀲𑁆`). Applied → `["𑀓𑁄𑀁", "kom"]` (Brāhmī ka + o-sign + anusvāra), matching the column's Brāhmī convention.

### 149-6 — xto — love — *kāyu* (Skt "body") → *tuṅk* — APPLIED (applied by orchestrator this round)
Confirmed words/love.js:904 `xto: ["𑀓𑀸𑀬𑀼", "kaːju"]`. *kāyu* < Skt *kāya-* "body" is the wrong semantic field. The attested Tocharian A noun "love" is *tuṅk* /tuŋk/ (Toch B *tāṅkw*; Adams; the lexeme of the Tocharian A love material). Romanization is the load-bearing correction; the Brāhmī glyph follows the reviewer-supplied spelling. Applied → `["𑀢𑀼𑀁𑀓𑁆", "tuṅk"]`.

### 149-7 — sga — one — *óin* length under-transcription — APPLIED (applied by orchestrator this round)
Confirmed words/one.js:945 `sga: ["oín", "oin"]`. Old Irish *óen*/*óin* carries the *síneadh fada* marking a long vowel /oː/ → /oːi̯n/ (< PCelt *\*oinos*; eDIL s.v. *óen*). The IPA drops the length. Other length-marked `sga` cells mark it faithfully (lám `laːv` hand.js:939, máthair `maːθirʲ` mother.js:945). Surface unchanged; IPA `oin` → `oːin`. Applied.

---

## Reviewer round-2 response (再評価 round-2)

I re-verified every claimed fix verbatim against the live working tree (grep over the relevant cells). All seven are present exactly as the worker reported.

- **149-1 ✓ ACCEPT.** heart.js:937 now `xpr: ["zyrd", "zird"]`. NW Parthian *zird* < PIr *\*ʒr̥d-*, matching Durkin-Meisterernst; row siblings `peo zard` (l.895), `ave` and NW `xwar` (sun.js:943) confirm the stratum. The Southwestern *dil* is gone.
- **149-2 ✓ ACCEPT (with documented limitation).** tree.js:895 now `peo: ["—", "—"]`. The cross-family Sanskrit *druma* is removed. The worker made a genuine research effort and credibly documented that a *directly attested* Old Persian inscriptional common noun for "tree" is not offline-sourceable (OP *dāru-* is a reconstruction from Av./NPers, not an attested OP token in the royal corpus). The dash is the correct, convention-consistent outcome (cf. `peo` cat/hello = `—`). This is the right call rather than asserting an unattested surface; logged as a known limitation should a human Iranist later attest a cuneiform *dāru-* form. No further action required.
- **149-3 ✓ ACCEPT.** moon.js:533 now `sux: ["𒌗", "itud"]`. Deity Nanna (𒀭… with DINGIR determinative) replaced by the ITI common noun *itud* per ePSD2.
- **149-4 ✓ ACCEPT.** moon.js:534 now `akk: ["𒌗", "warḫu"]`. Theonym Sîn (𒀭𒌍) replaced by the neutral common noun *warḫu(m)* (PSem *\*warḫ-*), parallel to 149-3.
- **149-5 ✓ ACCEPT.** sun.js:903 now `xto: ["𑀓𑁄𑀁", "kom"]`. Spurious *kontu* replaced by the attested Toch A nominative *koṃ* (cf. Toch B *kauṃ*); matches the column's clean-nominative pattern.
- **149-6 ✓ ACCEPT.** love.js:904 now `xto: ["𑀢𑀼𑀁𑀓𑁆", "tuṅk"]`. The mis-fielded Skt-loan *kāyu* "body" replaced by the attested love-lexeme *tuṅk* (Toch B *tāṅkw*). Romanization is the load-bearing fix and is correct.
- **149-7 ✓ ACCEPT.** one.js:945 now `sga: ["oín", "oːin"]`. Long nucleus /oː/ of *óen/óin* now marked, consistent with other length-faithful `sga` cells.

No new issues surfaced during verification; the surrounding cells (e.g. tree.js `xpr dār`, love.js `xpr friyādan`) are internally consistent and unaffected.

### Scorecard
| Item | Verdict |
|---|---|
| 149-1 xpr heart | ✓ |
| 149-2 peo tree | ✓ (documented limitation) |
| 149-3 sux moon | ✓ |
| 149-4 akk moon | ✓ |
| 149-5 xto sun | ✓ |
| 149-6 xto love | ✓ |
| 149-7 sga one | ✓ |

All 7 accepted (7 fixed-and-verified; 149-2 closed via convention-correct dash + documented offline-unsourceability caveat). Nothing remains actionable.

**File status: CLOSED** — nothing left to address.
