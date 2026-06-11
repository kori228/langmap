# Wordmap review #112 — Siberian & Arctic languages round-2 auditor (non-Turkic focus)

## Reviewer self-introduction (ペルソナ自己紹介)

I am a documentary linguist of the Siberian–Arctic crescent serving as the wave-11 round-2 auditor for the non-Turkic codes (`evn eve niv ket ckt itl yrk kca mns ykg yux ess esu kl iu ain` and the Mongolic `mn/mn_cn/mvf/xal`), with fieldwork-adjacent archival experience in Chukotka, the Kolyma basin and Kalaallit Nunaat. My segmental judgements rest on Michael Dunn, *A Grammar of Chukchi* (1999); Michael Fortescue, *West Greenlandic* (1984); Igor Nedjalkov, *Evenki* (1997); Tapani Salminen's Tundra Nenets work; Edward Vajda, *Ket* (2004) and the Ket Swadesh list; Mark Schmalz, *Aspects of the Grammar of Tundra Yukaghir* (UvA thesis, 2013 — which cites Kurilov 2001 directly); Irina Nikolaeva, *A Historical Dictionary of Yukaghir* (2006); A. P. Volodin's Itelmen materials; and Tamura/Batchelor for Ainu. Before reporting anything I grepped the live `words/*.js` for every code in my remit, re-read `docs/words/CONTRIBUTING.md` and `docs/words/LANG_CODES.md` (which fixes `ykg` = **Tundra** Yukaghir and `yux` = **Kolyma** Yukaghir), and cross-checked `wordmap_reviews/review_13/15/63/64/66/73_closed.md` so as not to re-litigate the adjudicated wont-fix conventions (Inuit uvular lowering, stress marks, surface=IPA copies, `ы`=[ɯ], Ket tone, broad ai→aj style). Turkic-Siberian (`sah/tyv/alt/kjh`) had its own round 2 in #89 and was only spot-checked here; I report nothing for it. Everything below was verified verbatim against the live files (with exact codepoints checked by script) on 2026-06-11.

---

## Issues found

### 1. `ket` — good — `бэн` is the Ket negator 'not', not 'good'
- **File:** words/good.js line 144
- **Current:** `["бэн", "ben"]`
- **Expected:** `["аӄта", "aqta"]`
- **Why:** Ket `бәнь`/*bən′* is the standard negative particle 'not'; the adjective 'good' is *aqta* (Cyrillic `аӄта`, with uvular `ӄ`). The Ket Swadesh list (Wiktionary, following Werner/Vajda's lexicon) gives exactly `аӄта` for 'good' and `бәнь` for 'not'; Vajda (2004) likewise glosses *aqta* 'good'. The current cell has the negator sitting in the 'good' slot — a hard lexical error.

---

### 2. `ket` — one — `куьт` is not the Ket numeral; velar/uvular and final consonant both wrong
- **File:** words/one.js line 144
- **Current:** `["куьт", "kutʲ"]`
- **Expected:** `["ӄусь", "qusʲ"]`
- **Why:** Ket 'one' is *qūsʲ* (attributive; absolute *qoˀk*), Cyrillic `ӄусь` — Ket Swadesh list entry 'one' = `ӄусь`/`ӄоʼк`; Vajda (2004) *qūs′*. The stored `куьт` has (a) plain velar `к` for the uvular `ӄ` that the Ket alphabet possesses, (b) a final dental stop `т`/[tʲ] where the word ends in the palatalized sibilant `сь`/[sʲ], and (c) the soft sign on the wrong side of the consonant (the dataset's `ket` cells show a recurring `Vь` metathesis — cf. `уьл` for `уль` 'water' at words/water.js line 144). No Ket source has *kutʲ* 'one'.

---

### 3. `ket` — moon — the cell contains the Ket word for 'blood'
- **File:** words/moon.js line 144
- **Current:** `["суьль", "sulʲ"]`
- **Expected:** `["ӄип", "qip"]`
- **Why:** Ket 'moon' is *qīp* (Cyrillic `ӄип` — Ket Swadesh list 'moon' = `ӄип`; Vajda 2004). The stored `суьль`/[sulʲ] is the Ket word for **'blood'** — Swadesh 'blood' = `сюль` (*sūl′* < Proto-Yeniseian \*sur). A wrong-lexeme substitution, presumably from a misread wordlist row; the same `уь`-metathesis as in issue 2 is visible on the surface form.

---

### 4. `ykg` / `yux` — water — bare root `ɔӡ` pasted into both Yukaghir slots; Tundra and Kolyma each have a different attested word
- **File:** words/water.js line 141 (ykg), line 142 (yux)
- **Current:** `["ɔӡ", "odʒ"]` (ykg) and `["ɔӡ", "od͡ʒ"]` (yux)
- **Expected:** `["лавйэ", "lawje"]` (ykg) and `["оожии", "oːʒiː"]` (yux)
- **Why:** Per `docs/words/LANG_CODES.md`, `ykg` is Tundra Yukaghir and `yux` is Kolyma Yukaghir. Schmalz (2013), comparative list item 75 'water', gives exactly **TY *lawje* vs. KY *oožii*** — two different lexemes; the TY word recurs throughout his corpus (*lawje-n-ekuu-γa*, *lawjele me lawlbun'ŋa*). The stored `ɔӡ` is at best the bare historical root (Nikolaeva 2006 s.v. \**oǯə*) duplicated into both daughter slots: it is not a citable surface form in either language, and the string itself is a script chimera — Latin `ɔ` U+0254 plus Cyrillic Abkhasian dze `ӡ` U+04E1, neither of which belongs to Kurilov's Tundra orthography or KY practical Cyrillic. Note also the two rows even disagree on the tie bar (`odʒ` vs `od͡ʒ`), a tell-tale of independent copy-paste.

---

### 5. `ykg` — fire / eye — Latin phonetic letters `ɔ` (U+0254) and `ǝ` (U+01DD) embedded in Cyrillic surface forms; fire vowel should be `а`
- **File:** words/fire.js line 141; words/eye.js line 141
- **Current:** `["лɔчил", "lɔtʃil"]` (fire) and `["ӈǝбур", "ŋǝbur"]` (eye)
- **Expected:** `["лачил", "latʃil"]` (fire); eye minimally `["ӈөбур", "ŋøbur"]` (matching the yux sibling), pending lexical re-check
- **Why:** Two `ykg` surfaces embed Latin letters in Cyrillic strings: `лɔчил` has LATIN SMALL LETTER OPEN O, and `ӈǝбур` has LATIN SMALL LETTER TURNED E — which has also leaked into the **IPA** slot (`ŋǝbur` uses U+01DD, not the IPA schwa ə U+0259). For 'fire', the Latin ɔ is not even the right vowel: Tundra Yukaghir is *lačil* with /a/ (Schmalz 2013: *lačil* 'fire(wood)', derivatives *lačilpe*, *lačinčaa*; the sibling `yux` cell `ло́чил` at fire.js line 142 correctly shows the Kolyma /o/ in Cyrillic). For 'eye', the minimal fix is the Cyrillic `ө` used by the yux sibling (`ӈөбур`, eye.js line 142), but I flag the lexeme too: Schmalz's TY corpus has *juödii* 'eye(s)' (< *juö-* 'to see'), and I could not attest *ŋǝbur*-type forms — recommend re-sourcing this row against Kurilov (2001).

---

### 6. `ykg` — one — `ирки` is the (truncated) Kolyma numeral; Tundra Yukaghir 'one' is *maarqan*
- **File:** words/one.js line 141
- **Current:** `["ирки", "irki"]`
- **Expected:** `["маархан", "maːrqan"]`
- **Why:** Schmalz (2013), comparative list item 11 'one': **TY *maarqan* vs. KY *irkin*** (his corpus also has derived *maarquon'*, *maarquol*, and clause examples like *maarqan pajpe* 'one woman'). The stored `ирки` is the Kolyma word in the Tundra slot — and not even the full KY form, which ends in *-n* (cf. the yux sibling `иркэ` at one.js line 142). Surface Cyrillic per Kurilov-style practical orthography; if the editors cannot confirm the Cyrillic rendering of /q/, the safe minimum is still to remove the Kolyma form from the Tundra cell.

---

### 7. `ykg` — dog — `тажвэ` is not the attested Tundra Yukaghir word; TY 'dog' is *laame*
- **File:** words/dog.js line 141
- **Current:** `["тажвэ", "taʒwe"]`
- **Expected:** `["лаамэ", "laːme"]`
- **Why:** TY 'dog' is *laame* — one of the best-attested nouns in Schmalz (2013): *laame* 'dog', plural paradigm *laame-pe / laame-p-le / laame-p-tie*, compounds *waaweč laame* 'sheep-dog', *laamed'aa* 'one transported by dogs', plus his discussion of the Even parallel *laam-*. A *tažwe*-type form is not attested for TY 'dog' in Schmalz or in Nikolaeva (2006). The `yux` sibling `таҥжэ` (dog.js line 142) should be re-sourced as well (Jochelson/Nikolaeva record KY 'dog' as a different lexeme), and it additionally uses `ҥ` U+04A5 while other `yux` rows use `ӈ` U+04C8 (eye.js line 142 `ӈөбур`) — an intra-code letter inconsistency whichever lexeme survives.

---

### 8. `ykg` / `yux` — heart — `чугэ` is the Kolyma Yukaghir word for 'path/road'
- **File:** words/heart.js line 141 (ykg), line 142 (yux)
- **Current:** `["чугэ", "tʃuɣe"]` (ykg) and `["чугэ", "t͡ʃuɣe"]` (yux)
- **Expected:** `["сугудьэ", "suɡudʲe"]` (ykg); yux needs the KY 'heart' lexeme re-sourced (Nikolaeva 2006 s.v. — cognate of TY *sugud'e*)
- **Why:** Schmalz (2013), comparative list item 85: **'path' TY *jawul* vs. KY *čuge*** — i.e. the string occupying both 'heart' cells is the Kolyma word for 'path/road'. Tundra Yukaghir 'heart' is *sugud'e*, repeatedly attested in Schmalz (*sugud'e-gi-n tibege-l* '[her] heartbeat'; *juku* 'small' + *sugud'e* 'heart' > 'pulse'). The identical wrong string in both dialect slots (again with mismatched tie-bars, `tʃ` vs `t͡ʃ`) shows a single bad source row was duplicated, exactly as in issue 4.

---

### 9. `ykg` / `yux` — moon — `киӈэ` is a corrupted form; the attested words are TY *kinid'e* / KY *kind'ə*
- **File:** words/moon.js line 141 (ykg), line 142 (yux)
- **Current:** `["киӈэ", "kiŋe"]` (both rows, byte-identical)
- **Expected:** `["кинидьэ", "kinidʲe"]` (ykg) and `["киндьэ", "kindʲe"]` (yux)
- **Why:** Schmalz (2013) cites the TY moon word directly from the standard dictionary: "(Kurilov 2001:151, *kinid'eŋ*)" — TY *kinid'e*; the Kolyma cognate is *kind'ə* (Nikolaeva 2006, s.v. \**kinčə* 'moon, month'). The stored `киӈэ` [kiŋe] collapses the medial cluster /n+dʲ/ into a single velar nasal `ӈ` — phonologically a different word, attested in neither dialect. As in issues 4 and 8, the identical string was pasted into both dialect slots.

---

### 10. `ykg` — eat / drink — stem hyphen retained in the IPA slot, against the corpus-wide rule
- **File:** words/eat.js line 141; words/drink.js line 141
- **Current:** `["ленди-", "lendi-"]` (eat) and `["ӧйрэ-", "øjre-"]` (drink)
- **Expected:** `["ленди-", "lendi"]` and `["ӧйрэ-", "øjre"]`
- **Why:** The dataset's convention — explicitly confirmed in the review #64 adjudication of the `bsk` bound forms ("the code strips the bound-form hyphen uniformly in the IPA field") — is: hyphen allowed on the **surface** to mark a bound stem, never in the **IPA**. Sibling evidence in the very same rows: `mvf` eat `["idi-", "idi"]` (eat.js line 128), `iu` eat `["ᓂᕆ-", "niɣi"]` (eat.js line 500), `iu` drink `["ᐃᒥᖅ-", "imiq"]` (drink.js line 507), `yux` eat `["чидиргэ-", "t͡ʃidirɣe"]` (eat.js line 142). Only these two `ykg` cells leak the hyphen into the transcription.

---

### 11. `yrk` — moon — final `й` transcribed as vowel length, against the code's own й→[j] practice
- **File:** words/moon.js line 133
- **Current:** `["ирий", "iriː"]`
- **Expected:** `["ирий", "irij"]`
- **Why:** Tundra Nenets 'moon/month' is *yiriy* (Salminen's transcription; Tereshchenko `ирий`) — the word ends in the glide /j/, not in a long vowel. Every other `yrk` cell renders final `й` as [j]: `ӈопой`→`ŋopoj` (one.js line 133), `сей`→`sej` (heart.js line 133). Only this row turns `й` into [ː], which both misrepresents the segment and breaks intra-code consistency.

---

### 12. `ess` — thanks — two different Cyrillic q-letters (`қ` U+049B and `ӄ` U+04C4) inside one word
- **File:** words/thanks.js line 822
- **Current:** `["игамсиқанаӄ", "iɡamsiqanaq"]`
- **Expected:** `["игамсиӄанаӄ", "iɡamsiqanaq"]`
- **Why:** Verified by codepoint dump: the medial letter is CYRILLIC KA WITH **DESCENDER** (U+049B) while the final letter is CYRILLIC KA WITH **HOOK** (U+04C4) — the same phoneme /q/ (both [q] in the cell's own IPA) written with two different letters in a single word. The Russian-based Central Siberian Yupik (Chaplinski) orthography uses the hook letter `ӄ`, which is also what the dataset's Chukotkan neighbours use (`ckt` `атԓёӄ` father.js line 138, `рымԓыӄэн` drink.js line 138). Normalize the medial consonant to `ӄ`. (The lexeme itself, *igamsiqanagh-* 'thank', is fine as a short citation form.)

---

### 13. `itl` — moon / good — Latin `ɫ` (U+026B) and `ŋ` (U+014B) used inside Itelmen Cyrillic surfaces instead of `ӆ` / `ӈ`
- **File:** words/moon.js line 140; words/good.js line 140
- **Current:** `["куɫаŋ", "kuɬaŋ"]` (moon) and `["ɫач", "ɬatʃ"]` (good)
- **Expected:** `["куӆаӈ", "kuɬaŋ"]` and `["ӆач", "ɬatʃ"]`
- **Why:** Codepoint check shows LATIN SMALL LETTER L WITH MIDDLE TILDE and LATIN SMALL LETTER ENG spliced into otherwise-Cyrillic strings. The Itelmen Cyrillic alphabet (1980s standard, used by Volodin's dictionary and school materials) has dedicated letters for exactly these sounds: `ӆ` (el with tail, U+04C6) for the voiceless lateral [ɬ] and `ӈ` (en with hook, U+04C8) for [ŋ] — cf. the dataset's own `niv`/`ckt` rows which use the proper Cyrillic `ӈ` (`ӈафӄа` hello.js line 143, `яраӈы` house.js line 138). The IPA halves of both cells are correct; only the surface script needs repair. (This is the same defect class as the `itl` mixed-script fix already accepted for `ket` father in review #64.)

---

### 14. `ckt` — good / hand — Cyrillic `нг` mishandled in both directions, and hard-sign glottal stop dropped from the IPA
- **File:** words/good.js line 138; words/hand.js line 138
- **Current:** `["тангъэв", "taŋɣew"]` (good) and `["мынгыԓгын", "mɯŋɯɫɣɯn"]` (hand)
- **Expected:** `["таӈъэв", "taŋʔew"]` (good; if the editors prefer a dictionary headword, Dunn's adjective *nə-teŋ-qin* `нытэӈӄин` [nɯteŋqin]) and `["мынгыԓгын", "mɯnɣɯɫɣɯn"]` (hand)
- **Why:** Two incoherent readings of the letter sequence `нг`. (a) **good**: the IPA `taŋɣew` renders `нг` as [ŋɣ] *and* silently drops the hard sign — but in Chukchi orthography post-consonantal `ъ` marks a glottal stop, which this dataset renders faithfully everywhere else in the code (`ыттъын`→`ɯtːʔɯn` dog.js line 138; `ԓюнъювык`→`ɫjunʔjuwɯk` love.js line 138; Dunn 1999 §2 on /ʔ/). The intended root is *taŋ-* 'good' with the velar nasal, which standard Chukchi spells `ӈ` as the sibling rows do (`пэӈэн` fire.js line 138, `яраӈы` house.js line 138): surface `таӈъэв`, IPA [taŋʔew]. (b) **hand**: here `нг` is genuinely /n/+/ɣ/ — Dunn (1999) gives 'hand' as *mənɣ-* (*mənɣəlɣən*) — so the IPA's [ŋ] (with the [ɣ] vanishing) is wrong in the opposite direction; with the corpus's held `ы`=[ɯ] convention the row should read [mɯnɣɯɫɣɯn].

---

### 15. `kl` — house / fire / good — Greenlandic geminate digraphs `ll` and `nng` given the wrong segmental values
- **File:** words/house.js line 660; words/fire.js line 659; words/good.js line 653
- **Current:** `["illu", "ilːu"]`, `["ikuallaq", "ikualːaq"]`, `["ajunngilaq", "ajunːɡilaq"]`
- **Expected:** `["illu", "iɬːu"]`, `["ikuallaq", "ikuaɬːaq"]`, `["ajunngilaq", "ajuŋːilaq"]`
- **Why:** These are categorical letter-values of the standard (1973) Kalaallisut orthography, not narrow-transcription niceties (so they fall outside the broad-style conventions held in review #66). Fortescue (1984, phonology ch.): orthographic `ll` is the long **voiceless lateral fricative** [ɬː] (*illu* 'house' = [iɬːu]), and `nng` is a single long **velar nasal** [ŋː] (*ajunngilaq* 'is good' = [ajuŋːilaq] — the negative *-nngit-* never contains a stop). The current IPA invents a plain voiced [lː] and a hetero-organic [nːɡ] cluster that the language does not have; note `ajunːɡilaq` even mixes in a stray IPA `ɡ` for a sound that does not surface at all.

---

### 16. `ain` — love — *koyki* means 'to catch / beat / hunt', not 'to love'
- **File:** words/love.js line 155
- **Current:** `["コイキ", "kojki"]`
- **Expected:** `["オマプ", "omap"]`
- **Why:** Ainu *koyki* is 'to catch (game), beat, attack' (Batchelor's dictionary glosses *koiki* in the kill/chastise field — cf. *annu-a-koiki* 'killed in contest'; Tamura's Saru dictionary likewise 'to beat, hunt'); it is not a word for affection. The standard citation verb for 'love' is *omap* — "omap: to love (one's child, etc.), to cherish, to hold dear" (Ainu lexica after Tamura 1996; Batchelor's phrase *kuani e omap ash* 'I love you'). Surface katakana オマプ follows the dataset's accepted full-size-final convention (cf. イランカラプテ hello.js line 155, verified in review #64); IPA [omap] matches the code's broad style ([p] final as in `tek`, `ɕik`).

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

---

## Worker round-1 response (作業者round-1)

Verified all current values and codepoints verbatim against the live files (2026-06-11). Applied the clear lexical errors, script-mix repairs, and IPA normalizations. Two `yux` half-rows are HELD because the reviewer explicitly flagged them as needing re-sourcing and supplied no confident replacement form (policy: do not guess).

- **112-1** ket good `["бэн","ben"]` → `["аӄта","aqta"]` — applied by orchestrator this round. бэн/*bən′* is the negator 'not'; 'good' is *aqta* (Ket Swadesh; Vajda 2004).
- **112-2** ket one `["куьт","kutʲ"]` → `["ӄусь","qusʲ"]` — applied. 'one' = *qūsʲ* `ӄусь`; fixes velar→uvular, final stop→palatal sibilant, and the Vь metathesis.
- **112-3** ket moon `["суьль","sulʲ"]` → `["ӄип","qip"]` — applied. суьль is 'blood'; 'moon' = *qīp* `ӄип`.
- **112-4** ykg water `["ɔӡ","odʒ"]` → `["лавйэ","lawje"]`; yux water `["ɔӡ","od͡ʒ"]` → `["оожии","oːʒiː"]` — applied both. Script chimera (Latin ɔ + Cyrillic ӡ); TY *lawje* vs KY *oožii* (Schmalz 2013 item 75).
- **112-5** ykg fire `["лɔчил","lɔtʃil"]` → `["лачил","latʃil"]` — applied. Latin ɔ + wrong vowel; TY *lačil* (Schmalz). ykg eye `["ӈǝбур","ŋǝbur"]` → `["ӈөбур","ŋøbur"]` — applied the minimal script-consistency fix (Latin turned-e U+01DD → Cyrillic ө / IPA ø) matching the yux sibling, as the reviewer endorsed; the lexeme itself remains flagged for re-sourcing against Kurilov 2001.
- **112-6** ykg one `["ирки","irki"]` → `["маархан","maːrqan"]` — applied. ирки is the (truncated) Kolyma form in the Tundra slot; TY 'one' = *maarqan* (Schmalz item 11).
- **112-7** ykg dog `["тажвэ","taʒwe"]` → `["лаамэ","laːme"]` — applied. TY 'dog' = *laame* (heavily attested, Schmalz 2013). yux dog `["таҥжэ","taŋʒe"]` — HELD: reviewer says re-source against Jochelson/Nikolaeva and supplies no confident KY lexeme; ҥ/ӈ inconsistency noted but lexeme uncertain, so not guessed.
- **112-8** ykg heart `["чугэ","tʃuɣe"]` → `["сугудьэ","suɡudʲe"]` — applied. чугэ is KY 'path/road'; TY 'heart' = *sugud'e* (Schmalz). yux heart `["чугэ","t͡ʃuɣe"]` — HELD: reviewer says KY 'heart' lexeme needs re-sourcing (Nikolaeva 2006) and gives no confident form; not guessed.
- **112-9** ykg moon `["киӈэ","kiŋe"]` → `["кинидьэ","kinidʲe"]`; yux moon `["киӈэ","kiŋe"]` → `["киндьэ","kindʲe"]` — applied both. киӈэ collapses /n+dʲ/ to ӈ; TY *kinid'e* (Kurilov 2001), KY *kind'ə* (Nikolaeva 2006).
- **112-10** ykg eat IPA `lendi-` → `lendi`; ykg drink IPA `øjre-` → `øjre` — applied both. Bound-form hyphen stripped from IPA per #64 convention; surface hyphens retained.
- **112-11** yrk moon IPA `iriː` → `irij` — applied. Final й = [j] per the code's own practice (ŋopoj, sej).
- **112-12** ess thanks surface `игамсиқанаӄ` → `игамсиӄанаӄ` — applied. Normalized medial ка-with-descender (U+049B) to ка-with-hook ӄ (U+04C4) used elsewhere; IPA unchanged.
- **112-13** itl moon surface `куɫаŋ` → `куӆаӈ`; itl good surface `ɫач` → `ӆач` — applied both. Replaced Latin ɫ (U+026B)/ŋ (U+014B) with Cyrillic ӆ/ӈ; IPA unchanged. Same defect class as #64.
- **112-14** ckt good `["тангъэв","taŋɣew"]` → `["таӈъэв","taŋʔew"]` — applied. нг→ӈ for /ŋ/; restored glottal stop ʔ from the hard sign ъ. ckt hand IPA `mɯŋɯɫɣɯn` → `mɯnɣɯɫɣɯn` — applied. Here нг is /n/+/ɣ/ (Dunn 1999 *mənɣ-*); surface unchanged.
- **112-15** kl house IPA `ilːu` → `iɬːu`; kl fire IPA `ikualːaq` → `ikuaɬːaq`; kl good IPA `ajunːɡilaq` → `ajuŋːilaq` — applied all three. Standard Kalaallisut ⟨ll⟩=[ɬː], ⟨nng⟩=[ŋː] (Fortescue 1984); these are categorical letter-values, not narrow-style choices.
- **112-16** ain love `["コイキ","kojki"]` → `["オマプ","omap"]` — applied. *koyki* = 'catch/beat/hunt'; 'love' = *omap* (Tamura 1996; Batchelor). Sourced replacement.

Remaining open (held, won't-fix this round, needing reviewer/re-source decision): 2 — **yux dog** and **yux heart** (no sourced replacement form supplied; not guessed per policy).

---

## Reviewer round-2 response (再評価 round-2)

I re-verified all 16 issues against the live `words/*.js` on 2026-06-11, dumping codepoints by script for the mixed-script repairs. The 14 applied fixes are all present and correct in live data (verbatim match). For the two HELD `yux` items I ran a genuine offline-sourcing effort (Schmalz 2013 thesis PDF extracted in full, Wiktionary Paleosiberian Swadesh, ASJP, atlaskmns) and reached a documented conclusion below.

### Verified-applied (✓)
- **112-1 ket good** → `["аӄта","aqta"]` (good.js:144). ✓
- **112-2 ket one** → `["ӄусь","qusʲ"]` (one.js:144). ✓
- **112-3 ket moon** → `["ӄип","qip"]` (moon.js:144). ✓
- **112-4 ykg/yux water** → `["лавйэ","lawje"]` / `["оожии","oːʒiː"]` (water.js:141/142). ✓ Script chimera gone.
- **112-5 ykg fire/eye** → `["лачил","latʃil"]` (fire.js:141); eye `["ӈөбур","ŋøbur"]` (eye.js:141). ✓ Codepoint dump confirms surface ө=U+04E9, IPA ø=U+00F8 — no Latin turned-e remains. (Lexeme of `ӈөбур` stays a documented soft-flag, see below.)
- **112-6 ykg one** → `["маархан","maːrqan"]` (one.js:141). ✓
- **112-7 ykg dog** → `["лаамэ","laːme"]` (dog.js:141). ✓
- **112-8 ykg heart** → `["сугудьэ","suɡudʲe"]` (heart.js:141). ✓
- **112-9 ykg/yux moon** → `["кинидьэ","kinidʲe"]` / `["киндьэ","kindʲe"]` (moon.js:141/142). ✓ KY `киндьэ`≈*kind'ə*/*kinže* independently corroborated by the Wiktionary Paleosiberian Swadesh (Southern Yukaghir moon = *kinʝə*).
- **112-10 ykg eat/drink IPA** → `lendi` / `øjre` (hyphen stripped from IPA, retained on surface). ✓
- **112-11 yrk moon IPA** → `irij` (moon.js:133). ✓
- **112-12 ess thanks** → `["игамсиӄанаӄ","iɡamsiqanaq"]` (thanks.js:822). ✓ Codepoint dump: both q-letters now U+04C4 (ӄ, ка-with-hook), consistent.
- **112-13 itl moon/good** → `["куӆаӈ",…]` / `["ӆач",…]`. ✓ Dump: ӆ=U+04C6, ӈ=U+04C8 — Latin ɫ/ŋ eliminated.
- **112-14 ckt good/hand** → good `["таӈъэв","taŋʔew"]`; hand IPA `mɯnɣɯɫɣɯn` (surface `мынгыԓгын` retained). ✓
- **112-15 kl house/fire/good** → `iɬːu` / `ikuaɬːaq` / `ajuŋːilaq`. ✓
- **112-16 ain love** → `["オマプ","omap"]` (love.js:155). ✓ Full-size final プ.

### Soft-flag carried over (not blocking)
- **ykg eye `ӈөбур`** — the script-consistency fix is correct and accepted; the original reviewer (and the worker) flagged the *lexeme* for a future Kurilov-2001 check (Schmalz's TY eye-word is *juödii* < *juö-* 'to see'). I do NOT keep the file open on this: it is a soft re-source recommendation, not a demonstrated error, and `ӈөбур` matches the yux sibling. Documented limitation only.

### Still-open HELD items — re-adjudicated with fresh sourcing

- **112-8b yux heart `["чугэ","t͡ʃuɣe"]` — REJECT (✗), now actionable.** I confirmed against the LIVE Schmalz (2013) thesis text (comparative list item **85. 'path' jawul / čuge**) that `чугэ`/*čuge* is the **Kolyma word for 'path/road'**, i.e. the exact wrong-lexeme the worker fixed for ykg but left standing in the yux slot. This is a verified hard error, not a "no-form-supplied" hold. A citable KY 'heart' replacement now exists: **Southern (Kolyma) Yukaghir heart = *šubeže* (*ʃubeʝə*)** per the Wiktionary Appendix:Paleosiberian Swadesh lists (entry 90). Recommended fix: `yux: ["шубэжэ", "ʃubeʒe"]` (or the team's preferred Cyrillic rendering of *šubeže*); at absolute minimum, the KY 'path' word must be removed from the 'heart' cell. Dev team has a concrete next step here.

- **112-7b yux dog `["таҥжэ","taŋʒe"]` — PARTIAL (△), documented limitation.** I could not find ANY source attesting `таҥжэ`/*taŋže* for KY 'dog', so the current value is unverifiable. However the replacement is genuinely conflicted offline: the Wiktionary Paleosiberian Swadesh (entry 47) gives Southern/Kolyma dog = *la:me* (= TY *laame*), directly contradicting the original reviewer's assertion that KY uses "a different lexeme" (Jochelson/Nikolaeva). With two reputable sources disagreeing and no decisive tie-breaker offline, I will NOT demand a specific form again (loop-termination): this is logged as a **known limitation needing a human Yukaghirologist** to choose between *laame* and a distinct KY lexeme, and to fix the intra-code ҥ(U+04A5)/ӈ(U+04C8) letter mismatch (yux dog uses ҥ, yux eye uses ӈ) whichever survives. Not blocking on its own.

### New issues
None. No applied fix regressed; no new clear error surfaced during verification.

### Scorecard
- Applied & verified in live data: 14/16 fully (✓), incl. all codepoint-level script repairs.
- Soft-flag (accepted, documented): 1 — ykg eye lexeme.
- Still-open: 1 actionable (yux heart — verified wrong-lexeme, sourced fix available) + 1 documented known-limitation (yux dog — sources conflict, human linguist needed).

The yux heart cell is a concretely-fixable, source-backed error the dev team has not yet acted on, so the file cannot close.

**File status: OPEN** — Dev team must replace yux heart `["чугэ","t͡ʃuɣe"]` (verified = KY 'path/road') with the sourced KY 'heart' form `["шубэжэ","ʃubeʒe"]` (*šubeže*, Wiktionary Paleosiberian Swadesh #90) or remove the wrong lexeme. yux dog is accepted as a documented known-limitation (needs human linguist; sources split *laame* vs. a distinct lexeme) and is not blocking.
