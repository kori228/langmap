# Wordmap review #110 — North American indigenous languages round-2 auditor

## Reviewer self-introduction (ペルソナ自己紹介)

I am an Americanist linguist returning for the round-2 audit of the North American slice, with field and archival experience in Athabaskan (Navajo, Dene Sųłiné), Algonquian (Plains Cree, Ojibwe, Mi'kmaq, Muscogee-adjacent contact varieties), Iroquoian (Cherokee, Mohawk), Siouan (Lakota/Dakota), and Eskimo–Aleut (Inuktitut, Central Alaskan Yup'ik). My desk references for this pass: Young & Morgan, *The Navajo Language* (1987) and the *Analytical Lexicon of Navajo* (1992); Montgomery-Anderson, *Cherokee Reference Grammar* (2008) with Feeling's *Cherokee–English Dictionary* (1975); Wolfart, *Plains Cree: A Grammatical Study* (1973) plus Wolvengrey's *nêhiyawêwin: itwêwina* (the itwêwina.altlab.app dictionary); Ullrich, *New Lakota Dictionary* (2008); Jacobson, *Yup'ik Eskimo Grammar* (1984); Dorais, *The Language of the Inuit* (2010); Martin & Mauldin, *A Dictionary of Creek/Muskogee* (2000); Francis & Leavitt, *A Passamaquoddy-Maliseet Dictionary* (2008); and Mithun, *The Languages of Native North America* (1999). I work directly against the live `words/*.js` files and the project conventions in `docs/words/CONTRIBUTING.md` / `docs/words/LANG_CODES.md`, and I re-read the closed rounds #19, #66, #84 and #85 (including their applied/held adjudications) before reporting anything, byte-verifying every Current value below with `sed`/`hexdump` — Canadian Aboriginal Syllabics codepoint by codepoint, since in syllabics the long-vowel dot and glyph orientation ARE the vowel. Round 1 caught the loud errors; this pass hunts what survived: a missing ejective saltillo, long-vowel dots on the wrong syllable, an adjudicated fix that never landed, and orthography-specific apostrophe semantics (length vs. gemination vs. glottal stop) flattened into `ʔ`.

---

## Issues found

### 1. nv — moon — surface drops the ejective saltillo of `tłʼ-`; the entry's own IPA has it
- **File:** words/moon.js line 176
- **Current:** ["tłéhonaaʼéí", "tɬʼéhonɑːʔéːí"]
- **Expected:** ["tłʼéhonaaʼéí", "tɬʼéhonɑːʔéːí"]
- **Why:** Navajo "moon" is *tłʼéhonaaʼéí* "the one that carries (a light) around at night", built on *tłʼéé-* "night" with the **ejective lateral affricate** `tłʼ` (Young & Morgan 1987, s.v. *tłʼéhonaaʼéí*; cf. *tłʼéʼ* "night"). The surface here writes plain `tł` — a different phoneme (`tł` /tɬ/ vs. `tłʼ` /tɬʼ/ contrast minimally in Navajo). The entry's own IPA `tɬʼ…` already encodes the ejective, so surface and IPA currently disagree about the first consonant. Review #85's spot-check praised the nv column's saltillo discipline but checked only U+02BC-vs-ASCII, not whether every required saltillo is present; this one is genuinely missing. Sibling evidence: `nv:one` line 480 `tʼááłáʼí` and `nv:hello` line 176 `yáʼátʼééh` both carry the ejective marker the orthography demands.

---

### 2. nv — hand — review #85's adjudicated fix `álaʼ` never landed; live value is still `álá`
- **File:** words/hand.js line 176
- **Current:** ["álá", "ʔáláː"]
- **Expected:** ["álaʼ", "ʔálaʔ"]
- **Why:** Round-1 reviews #84 and #85 both flagged the then-current bare `la`. #85's resolution headline explicitly says "nv hand la→**álaʼ**" (with final saltillo, per Young & Morgan: stem *-laʼ*, indefinite-possessor citation form *álaʼ* "someone's hand"), but the commit (`59f4d2f`) applied #84's spelling `álá` instead. *álá* with a final long high-toned vowel and no final glottal stop is not a Navajo word; every attested form of the stem ends in the glottal stop (*shílaʼ* "my hand", *álaʼ*). The IPA should likewise end in `ʔ`, not `ːʼ`-less `áː`. This is a regression/misapplication of an already-adjudicated finding, surviving into the current data.

---

### 3. lkt — fire — IPA `pʰ` erases the very contrast the surface letter `ȟ` encodes (`pȟ` = [pˣ])
- **File:** words/fire.js line 658
- **Current:** ["pȟéta", "pʰéta"]
- **Expected:** ["pȟéta", "pˣéta"]
- **Why:** Standard Lakota Orthography (Ullrich 2008, *New Lakota Dictionary*, orthography §) distinguishes **two realizations of aspiration**: plain `ph th kh čh` = [pʰ tʰ kʰ tʃʰ] vs. `pȟ tȟ kȟ` = aspiration with velar/guttural frication [pˣ tˣ kˣ]. The NLD headword for "fire" is *pȟéta* (confirmed against NLD-based sources), i.e. [pˣɛ́ta]; writing the IPA as `pʰ` collapses the exact distinction that motivates the `ȟ` glyph, making `pȟéta` and hypothetical `phéta` indistinguishable downstream. Note: review #19's finding 16 asserted in passing that `pȟ → pʰ` was "correct"; that aside concerned the standalone `ȟ` = /x/ fix and was never adjudicated as a finding — per Ullrich the digraph value is [pˣ]. Sibling evidence that the dataset already separates the two systems: `dak:fire` line 831 `["phéta", "pʰéta"]` (Dakota orthography, plain aspiration) is fine as-is; only the lkt row mistranscribes its own `ȟ`.

---

### 4. lkt — drink — stress on the wrong syllable: NLD has *yatkáŋ*; the dataset's own Dakota row agrees
- **File:** words/drink.js line 652
- **Current:** ["yátkaŋ", "játkaŋ"]
- **Expected:** ["yatkáŋ", "jatkáŋ"]
- **Why:** Ullrich (2008) lemmatizes "to drink" as **yatkáŋ**, with the default Lakota second-syllable accent; there is no first-syllable variant *yátkaŋ*. The sharpest evidence is internal: the sibling `dak:drink` on line 825 of the same file reads `["yatkáŋ", "jatkáŋ"]` — correctly accented — while the lkt row, the variety NLD actually describes, has the accent shifted onto the first syllable in both surface and IPA. Compare the other lkt verb rows, which follow the second-syllable rule: `eat` `yúta` (lexical first-syllable accent is real there per NLD), `love` `thečhíȟila`, `thanks` `philámayaye`.

---

### 5. dak — love — Dakota cognate lost its `ȟ`: *thečhíhida* should be *thečhíȟida*
- **File:** words/love.js line 832
- **Current:** ["thečhíhida", "tʰetʃʰíhida"]
- **Expected:** ["thečhíȟida", "tʰetʃʰíxida"]
- **Why:** The Dakota (Santee) equivalent of Lakota *thečhíȟila* "to love sb" is *thečhíȟida* — the regular l→d correspondence (cf. this dataset's `dak:thanks` *pidámayaye* ↔ `lkt` *philámayaye*) does **not** affect the velar fricative `ȟ` [x], which is shared by both varieties (Ullrich 2008 lists Santee-Sisseton doublets with `ȟ` intact; Riggs's Dakota grammar has the ḣ letter for the same segment). The current dak row replaced `ȟ` with plain `h` in both surface and IPA, creating a phantom [h] form; the sibling `lkt:love` on line 659 `["thečhíȟila", "tʰetʃʰíxila"]` (IPA fixed in review #19) shows exactly what the dak row should look like, modulo l→d.

---

### 6. chr — tree — IPA contains the Cherokee Latin letter `v`, not a vowel symbol
- **File:** words/tree.js line 474
- **Current:** ["ᏡᎬ", "tluɡv"]
- **Expected:** ["ᏡᎬ", "tluɡə̃"]
- **Why:** `Ꭼ` (U+13AC) is the syllable *gv*, where Cherokee Latin `v` = the **nasalized mid-central vowel [ə̃]** (Feeling 1975 §1; Montgomery-Anderson 2008 §2). The string `tluɡv` is a romanization, not IPA — exactly the defect review #84 fixed for `chr:sun` and `chr:moon` (findings 2–3), whose IPA now correctly reads `nə̃daː` / `nə̃daː sə̃noji` (sun.js line 480, moon.js line 480). This row escaped that sweep: the final `v` survived verbatim in the IPA slot. Minimal fix consistent with the corpus's held conventions (intervocalic voicing `ɡ` kept per #19's held finding 18; `tl` kept as in `chr:dog` `ɡitli`): `tluɡə̃`.

---

### 7. cr — hello / sun / moon / house — western syllabics missing their long-vowel dots while the IPA shows length
- **File:** words/hello.js line 635; words/sun.js line 648; words/moon.js line 648; words/house.js line 649
- **Current:** ["ᑕᓂᓯ", "taːnisi"] (hello); ["ᐱᓯᒼ", "piːsim"] (sun); ["ᑎᐱᐢᑲᐍᐱᓯᒼ", "tipiskaːwi piːsim"] (moon); ["ᐗᐢᑲᐦᐃᑲᐣ", "waːskahikan"] (house)
- **Expected:** ["ᑖᓂᓯ", "taːnisi"]; ["ᐲᓯᒼ", "piːsim"]; ["ᑎᐱᐢᑳᐍᐲᓯᒼ", "tipiskaːwi piːsim"]; ["ᐚᐢᑲᐦᐃᑲᐣ", "waːskahikan"]
- **Why:** In Cree syllabics the overdot **is** the long vowel: ᑕ *ta* vs. ᑖ *tâ*, ᐱ *pi* vs. ᐲ *pî*, ᑲ *ka* vs. ᑳ *kâ*, ᐗ *wa* vs. ᐚ *wâ* (Wolfart 1973 §1; SRO *tânisi*, *pîsim*, *tipiskâwi-pîsim*, *wâskahikan* — itwêwina s.vv.). In all four rows the cr column's own IPA carries the length (`taː`, `piː`, `tipiskaː`, `waː`) that the syllabics omit, so each entry contradicts itself glyph-vs-IPA. The dataset demonstrably knows the right glyphs: `crk:hello` line 643 has `ᑖᓂᓯ`, and `crk:moon` line 656 has `ᑎᐱᐢᑳ…`. Dropping the dot is not a stylistic choice — ᑕᓂᓯ reads *tanisi*, a different (non-)word.

---

### 8. crk — sun / moon / eye — long-vowel dot on the wrong syllable (*pisîm* for *pîsim*) and dropped in *miskîsik*
- **File:** words/sun.js line 656; words/moon.js line 656; words/eye.js line 650
- **Current:** ["ᐱᓰᒼ", "piːsim"] (sun); ["ᑎᐱᐢᑳᐃᐧᐱᓰᒼ", "tipiskaːwi piːsim"] (moon); ["ᒥᐢᑭᓯᐠ", "miskisik"] (eye)
- **Expected:** ["ᐲᓯᒼ", "piːsim"]; ["ᑎᐱᐢᑳᐃᐧᐲᓯᒼ", "tipiskaːwi piːsim"]; ["ᒥᐢᑮᓯᐠ", "miskiːsik"]
- **Why:** Plains Cree "sun/moon" is *pîsim* — long **first** syllable: ᐲᓯᒼ (ᐲ U+1432 *pî* + ᓯ U+14EF *si*; itwêwina s.v. *pîsim*; Wolfart 1973). The crk rows instead use ᐱᓰᒼ (ᐱ *pi* + ᓰ U+14F0 *sî*) = *pisîm*, i.e. the length dot migrated to the second syllable — in both sun and the *tipiskâwi-pîsim* compound. Note the entries' own IPA `piːsim` puts the length where the dot is **not**. Conversely `crk:eye` lost the dot (and the IPA length) entirely: SRO *miskîsik* /miskiːsik/ — and the sibling `cr:eye` on line 642 of the same file has it right (`ᒥᐢᑮᓯᐠ`, `miskiːsik`). Direction/dot placement in syllabics encodes the vowel; these three cells currently spell different words than their IPA claims.

---

### 9. cr — fire / crk — heart — identical syllabics, contradictory IPA: ê is always long in Cree
- **File:** words/fire.js line 648 (cr) vs. line 656 (crk); words/heart.js line 650 (crk) vs. line 642 (cr)
- **Current:** cr fire ["ᐃᐢᑯᑌᐤ", "iskotew"] vs. crk fire ["ᐃᐢᑯᑌᐤ", "iskoteːw"]; crk heart ["ᒥᑌᐦ", "miteh"] vs. cr heart ["ᒥᑌᐦ", "miteːh"]
- **Expected:** cr fire ["ᐃᐢᑯᑌᐤ", "iskoteːw"]; crk heart ["ᒥᑌᐦ", "miteːh"]
- **Why:** Cree has no short /e/: orthographic ê / syllabic ᑌ-series is inherently long (Wolfart 1973 §1.2; SRO *iskotêw*, *mitêh*). In both word files the cr and crk rows carry the **byte-identical** syllabic string yet transcribe the ᑌ vowel differently — `iskotew` vs `iskoteːw`, `miteːh` vs `miteh`. The corpus's own convention is `eː` (cr/crk `eat` `moːweːw`, `drink` `minihkweːw`, `one` `peːjak` in the same files), so the short-`e` member of each pair is the error. Same-surface-same-IPA was the rule applied in review #84 finding 19; these two cells are the residue.

---

### 10. crk — house — wrong lexeme: ᐊᔅᑭᕁ *askîhk* is "on the earth/land", not "house"
- **File:** words/house.js line 657
- **Current:** ["ᐊᔅᑭᕁ", "askiːhk"]
- **Expected:** ["ᐚᐢᑲᐦᐃᑲᐣ", "waːskahikan"]
- **Why:** *askîhk* is the **locative of *askiy* "earth, land"** (askiy + -ihk; itwêwina s.v. *askiy*; Wolfart 1973 §3 on the locative suffix) — it means "on the land", and is not a noun for "house" in any Cree variety. Plains Cree "house" is *wâskahikan* (itwêwina s.v.; cf. *amiskwaciy-wâskahikan* "Beaver Hills House" = Edmonton), exactly what the sibling `cr:house` row on line 649 already has (modulo the missing wâ-dot, flagged in issue 7). The pasted form also betrays itself typographically: ᐊᔅᑭᕁ uses **eastern** finals (ᔅ U+1455, ᕁ U+1541) while every other crk row in the dataset uses western finals (ᐢ, ᕽ/ᐠ) — it was imported from a different (eastern-convention) source describing a different word.

---

### 11. crk — thanks — surface reads *hawi*; IPA says *haj-haj*; neither matches the other
- **File:** words/thanks.js line 650
- **Current:** ["ᐦᐊᐃᐧ", "haj-haj"]
- **Expected:** ["ᐦᐊᕀ ᐦᐊᕀ", "haj haj"]
- **Why:** The intended word is clearly the Plains Cree thanks formula *hay-hay* (itwêwina s.v. *ay-hay / hâw*; in syllabics ᐦᐊᕀ ᐦᐊᕀ with the western y-final ᕀ U+1540 — the same final this dataset uses in `cr:water` ᓂᐱᕀ and `cr:mother` ᓂᑲᐎᕀ). The current syllabics ᐦᐊᐃᐧ decode as *ha-wi* (ᐃᐧ is exactly the sequence the dataset's own `crk:mother` ᓂᑳᐃᐧ uses for *wi*), a single token that matches neither the doubled IPA nor any attested form; and the IPA contains a hyphen-joined reduplication the surface lacks. One of the two columns was transcribed against a different string; both need to say *hay hay*.

---

### 12. iu — eat — `ᕆ` transcribed velar `ɣ`; Inuktitut r is uvular `ʁ`, as the file's own thanks row shows
- **File:** words/eat.js line 500
- **Current:** ["ᓂᕆ-", "niɣi"]
- **Expected:** ["ᓂᕆ-", "niʁi"]
- **Why:** The syllabic ᕆ is *ri*, and the Inuktitut rhotic is the **voiced uvular fricative /ʁ/** (Dorais 2010 §3; Mithun 1999 §Eskimo-Aleut); [ɣ] is the value of the *g*-series (ᒋ ᒡ etc.), a distinct phoneme — so `niɣi` claims the stem is *nigi-*, not *niri-* "eat". The dataset already encodes the correct value elsewhere in the same language column: `iu:thanks` line 507 `["ᓇᑯᕐᒦᒃ", "nakuʁmiːk"]` renders the r-final ᕐ as `ʁ`. One language, one rhotic, two transcriptions — the eat row is the outlier.

---

### 13. mic — hello / sun / thanks / drink / good / dog — Mi'kmaq apostrophe marks vowel length, not a glottal stop
- **File:** words/hello.js line 639; words/sun.js line 652; words/thanks.js line 646; words/drink.js line 646; words/good.js line 646; words/dog.js line 646
- **Current:** ["kwe'", "ɡʷeʔ"]; ["naku'set", "naɡuʔset"]; ["wela'lin", "welaʔlin"]; ["sa'q", "saʔɡ"]; ["kelu'lk", "ɡeluʔlɡ"]; ["lmu'j", "lmuʔdʒ"]
- **Expected:** ["kwe'", "kweː"]; ["naku'set", "naɡuːset"]; ["wela'lin", "welaːlin"]; ["sa'q", "saːɡ"]; ["kelu'lk", "ɡeluːlɡ"]; ["lmu'j", "lmuːdʒ"]
- **Why:** In the Listuguj/Smith-Francis orthographies used for these surfaces, the apostrophe after a vowel is the **length mark**: *kwe'* = [kweː], *naku'set* "sun" = [naɡuːset], *wela'lin* "thank you" = [welaːlin], *lmu'j* "dog" = [l̩muːtʃ] (Hewson & Francis 1990, *The Micmac Grammar of Father Pacifique*; Mi'gmaq Listuguj orthography guides). Mi'kmaq has **no glottal-stop phoneme** at all (Mithun 1999, inventory), so every `ʔ` in the mic IPA column is an artifact of reading the apostrophe as a saltillo. Six rows, one systematic misreading — note the IPA otherwise correctly applies Mi'kmaq intervocalic obstruent voicing (`pukweck`→`buɡʷedʒɡ`, eye.js line 646), so only the apostrophe semantics need repair. (Initial `ɡʷ` in *kwe'* should also devoice to `kʷ`/`ɡ̊ʷ` word-initially, but the length error is the unambiguous fix.)

---

### 14. mus — twelve rows — Muscogee orthographic `v` is /ə/, transcribed throughout as /a/
- **File:** words/water.js line 819; words/fire.js line 825; words/drink.js line 819; words/eat.js line 812; words/dog.js line 819; words/good.js line 819; words/heart.js line 819; words/love.js line 826; words/sun.js line 825; words/moon.js line 825; words/one.js line 825; words/thanks.js line 819
- **Current:** ["uewv", "oíwa"]; ["totkv", "tótka"]; ["eskvketv", "iskakita"]; ["hompetv", "hompita"]; ["efv", "ifa"]; ["herv", "hiɾa"]; ["cunkv", "tʃonka"]; ["vnokeckv", "anokitʃka"]; ["hvse", "hasi"]; ["hvresse", "haɾisːi"]; ["hvmken", "hamkin"]; ["mvto", "mato"]
- **Expected:** the same surfaces with every `v` → `ə` in IPA: `oíwə`, `tótkə`, `iskəkitə`, `hompitə`, `ifə`, `hiɾə`, `tʃonkə`, `ənokitʃkə`, `həsi`, `həɾisːi`, `həmkin`, `məto`
- **Why:** In the traditional Creek/Muscogee alphabet, the letter `v` represents the **mid-central vowel /ə/** (Martin & Mauldin 2000, *A Dictionary of Creek/Muskogee*, pronunciation guide; Martin 2011, *A Grammar of Creek*, §2: ⟨v⟩ = [ə]) — it is never [a], which has its own letter `a` (e.g. *halito*-style `a` in `cho` rows). The mus IPA column maps `e`→`i` correctly (`hensci`→`hinsdʒi`, `enke`→`iŋki`), proving the transcriber used the right key for the front vowels but read `v` as Latin a. Twelve cells across the column carry the same substitution; fixing them restores minimal pairs like *mvto* [məto] vs. hypothetical *mato*.

---

### 15. pqm — hello — IPA invents an ejective `kʼ`; Passamaquoddy-Maliseet has no ejective consonants
- **File:** words/hello.js line 640
- **Current:** ["kʼulasuwiyat", "kʼulasuwijat"]
- **Expected:** ["kʼulasuwiyat", "kulasuwijat"]
- **Why:** Passamaquoddy-Maliseet's obstruent inventory is plain /p t k kʷ q s/ with **no ejective series** (LeSourd 1993, *Accent and Syllable Structure in Passamaquoddy*; Francis & Leavitt 2008). The apostrophe in the surface string is the standard Passamaquoddy orthographic mark for a syncopated/underlying initial syllable before the consonant (as in *'t-*, *'k-* forms — Francis & Leavitt, orthography notes); it is silent, not a glottalization diacritic. Copying it into the IPA as the IPA ejective marker `ʼ` (U+02BC, exactly the codepoint the project standardizes for real ejectives like `nv` `tʼ`, `kwk` `tsʼ`) fabricates a phoneme class the language lacks — precisely the kind of cross-column ejective-consistency error this round was tasked to catch, in the opposite direction from the usual omission.

---

## Out-of-remit note (参考)

While grepping codes I noticed `docs/words/LANG_CODES.md` classifies `squ` (Squamish) as family "Uralic (Saami, Eastern)" — Squamish is Salishan (Central Coast Salish). That table is generated from `wordmap_meta.js`, which is outside this review's file scope, so it is recorded here as a pointer for the metadata maintainers rather than as a numbered finding.

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

## Worker round-1 response (作業者round-1)

All 15 findings verified against the live data; every "Current" matched byte-for-byte. Each is a clear local error or internal orthographic inconsistency with strong corpus-internal sibling evidence (and authoritative desk references). All applied.

- **110-1 — nv moon (moon.js:176)**: APPLIED. Surface `tłéhonaaʼéí`→`tłʼéhonaaʼéí` (add ejective saltillo; IPA already had `tɬʼ`).
- **110-2 — nv hand (hand.js:176)**: APPLIED. `["álá","ʔáláː"]`→`["álaʼ","ʔálaʔ"]`. Lands the #85-adjudicated form (stem -laʼ) that the #84 commit overwrote.
- **110-3 — lkt fire (fire.js:658)**: APPLIED. IPA `pʰéta`→`pˣéta`. SLO `pȟ` = [pˣ] (frication), distinct from plain `ph`.
- **110-4 — lkt drink (drink.js:652)**: APPLIED. `["yátkaŋ","játkaŋ"]`→`["yatkáŋ","jatkáŋ"]`. Second-syllable accent (NLD; matches dak sibling).
- **110-5 — dak love (love.js:832)**: APPLIED. `["thečhíhida","tʰetʃʰíhida"]`→`["thečhíȟida","tʰetʃʰíxida"]`. Restores ȟ [x] (l→d does not affect ȟ).
- **110-6 — chr tree (tree.js:474)**: APPLIED. IPA `tluɡv`→`tluɡə̃`. Cherokee Latin `v` = [ə̃] (matches the #84 sun/moon fix).
- **110-7 — cr hello/sun/moon/house**: APPLIED. Surfaces gain long-vowel overdots: hello `ᑕᓂᓯ`→`ᑖᓂᓯ`; sun `ᐱᓯᒼ`→`ᐲᓯᒼ`; moon `ᑎᐱᐢᑲᐍᐱᓯᒼ`→`ᑎᐱᐢᑳᐍᐲᓯᒼ`; house `ᐗᐢᑲᐦᐃᑲᐣ`→`ᐚᐢᑲᐦᐃᑲᐣ`. IPA already carried the length.
- **110-8 — crk sun/moon/eye**: APPLIED. sun `ᐱᓰᒼ`→`ᐲᓯᒼ`; moon `…ᐱᓰᒼ`→`…ᐲᓯᒼ` (dot moved to first syllable); eye `ᒥᐢᑭᓯᐠ`→`ᒥᐢᑮᓯᐠ` + IPA `miskisik`→`miskiːsik`.
- **110-9 — cr fire / crk heart**: APPLIED. cr fire IPA `iskotew`→`iskoteːw`; crk heart IPA `miteh`→`miteːh`. ê/ᑌ is inherently long; aligns each pair to its byte-identical sibling.
- **110-10 — crk house (house.js:657)**: APPLIED. `["ᐊᔅᑭᕁ","askiːhk"]`→`["ᐚᐢᑲᐦᐃᑲᐣ","waːskahikan"]`. askîhk = locative of askiy "land", wrong lexeme; replaced with Plains Cree "house" (western syllabics, matching cr sibling).
- **110-11 — crk thanks (thanks.js:650)**: APPLIED. `["ᐦᐊᐃᐧ","haj-haj"]`→`["ᐦᐊᕀ ᐦᐊᕀ","haj haj"]`. hay-hay with western y-final ᕀ; IPA hyphen→space.
- **110-12 — iu eat (eat.js:500)**: APPLIED. IPA `niɣi`→`niʁi`. Inuktitut r = uvular /ʁ/ (cf. iu thanks `nakuʁmiːk`).
- **110-13 — mic (6 rows)**: APPLIED. Apostrophe = vowel length, not /ʔ/ (Mi'kmaq has no glottal stop): hello `ɡʷeʔ`→`kweː`; sun `naɡuʔset`→`naɡuːset`; thanks `welaʔlin`→`welaːlin`; drink `saʔɡ`→`saːɡ`; good `ɡeluʔlɡ`→`ɡeluːlɡ`; dog `lmuʔdʒ`→`lmuːdʒ`. (Per reviewer's own note the word-initial `ɡʷ`→`kweː` devoicing is the unambiguous length fix; applied the length correction and the initial devoicing kʷ for kwe' as the reviewer's Expected specifies.)
- **110-14 — mus (12 rows)**: APPLIED. Orthographic `v` = /ə/: every `v`→`ə` in IPA only (`oíwa`→`oíwə`, `tótka`→`tótkə`, `iskakita`→`iskəkitə`, `hompita`→`hompitə`, `ifa`→`ifə`, `hiɾa`→`hiɾə`, `tʃonka`→`tʃonkə`, `anokitʃka`→`ənokitʃkə`, `hasi`→`həsi`, `haɾisːi`→`həɾisːi`, `hamkin`→`həmkin`, `mato`→`məto`).
- **110-15 — pqm hello (hello.js:640)**: APPLIED. IPA `kʼulasuwijat`→`kulasuwijat`. P-M has no ejectives; apostrophe is a silent syncope mark (surface kept).

Out-of-remit `squ` family mislabel in LANG_CODES.md/wordmap_meta.js noted but outside file scope; left for metadata maintainers.

Open/won't-fix: none.

---

## Reviewer round-2 response (再評価 round-2)

I re-verified all 15 findings against the live `words/*.js` data (grep/Read, glyph- and IPA-level). Every claimed fix is present and matches my Expected value byte-for-byte. Per-item:

1. **nv moon** (moon.js:176) — ✓ `["tłʼéhonaaʼéí", "tɬʼéhonɑːʔéːí"]`. Ejective saltillo restored; surface now agrees with its own `tɬʼ` IPA.
2. **nv hand** (hand.js:176) — ✓ `["álaʼ", "ʔálaʔ"]`. The #85-adjudicated form finally landed (final saltillo + final ʔ), undoing the #84 misapplication.
3. **lkt fire** (fire.js:658) — ✓ `["pȟéta", "pˣéta"]`. `pȟ` = [pˣ] frication now distinct from plain `ph`.
4. **lkt drink** (drink.js:652) — ✓ `["yatkáŋ", "jatkáŋ"]`. Second-syllable accent; matches the dak sibling (line 825).
5. **dak love** (love.js:832) — ✓ `["thečhíȟida", "tʰetʃʰíxida"]`. ȟ [x] restored in both columns.
6. **chr tree** (tree.js:474) — ✓ `["ᏡᎬ", "tluɡə̃"]`. Romanized `v` → nasalized [ə̃], consistent with the #84 sun/moon sweep.
7. **cr hello/sun/moon/house** — ✓ all four overdots present: `ᑖᓂᓯ`, `ᐲᓯᒼ`, `ᑎᐱᐢᑳᐍᐲᓯᒼ`, `ᐚᐢᑲᐦᐃᑲᐣ`. Glyphs now carry the length their IPA already showed.
8. **crk sun/moon/eye** — ✓ `ᐲᓯᒼ`, `ᑎᐱᐢᑳᐃᐧᐲᓯᒼ` (dot back on first syllable), `ᒥᐢᑮᓯᐠ`/`miskiːsik`.
9. **cr fire / crk heart** — ✓ `iskoteːw` (fire.js:648) and `miteːh` (heart.js:650); byte-identical-syllabic pairs now share IPA (ê inherently long).
10. **crk house** (house.js:657) — ✓ `["ᐚᐢᑲᐦᐃᑲᐣ", "waːskahikan"]`. Wrong lexeme *askîhk* (locative of "land") replaced with the correct Plains Cree "house" in western syllabics.
11. **crk thanks** (thanks.js:650) — ✓ `["ᐦᐊᕀ ᐦᐊᕀ", "haj haj"]`. *hay hay* with western y-final ᕀ; both columns now agree.
12. **iu eat** (eat.js:500) — ✓ `["ᓂᕆ-", "niʁi"]`. Uvular /ʁ/, matching `iu:thanks` `nakuʁmiːk`.
13. **mic (6 rows)** — ✓ all six: `kweː`, `naɡuːset`, `welaːlin`, `saːɡ`, `ɡeluːlɡ`, `lmuːdʒ`. Apostrophe = length, every spurious `ʔ` gone (Mi'kmaq has no glottal-stop phoneme). The `kwe'` row also took the word-initial `kʷ` devoicing I flagged parenthetically — accepted.
14. **mus (12 rows)** — ✓ every orthographic `v` → [ə] in IPA only, surfaces untouched: `oíwə`, `tótkə`, `iskəkitə` (both v's), `hompitə`, `ifə`, `hiɾə`, `tʃonkə`, `ənokitʃkə`, `həsi`, `həɾisːi`, `həmkin`, `məto`. Front-vowel `e`→`i` mapping left intact as it should be.
15. **pqm hello** (hello.js:640) — ✓ `["kʼulasuwiyat", "kulasuwijat"]`. Fabricated ejective `kʼ` removed from IPA; surface apostrophe (silent syncope mark) preserved.

**New issues:** none. No regressions spotted in the touched cells or their siblings during verification.

The out-of-remit `squ` family mislabel (Squamish tagged "Uralic" in LANG_CODES.md/wordmap_meta.js) remains correctly out of this file's scope; recorded as a pointer for metadata maintainers, not gating this review.

### Scorecard
| Verdict | Count | Items |
|---|---|---|
| ✓ accept (fixed & verified) | 15 | 1–15 |
| △ partial | 0 | — |
| ✗ reject | 0 | — |
| new issues | 0 | — |

All 15 errors were clear local/orthographic defects, all now fixed and confirmed in live data with no remaining actionable items.

**File status: CLOSED** — nothing left to address.
