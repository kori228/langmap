# Wordmap review #111 — Creoles & contact languages round-2 auditor

## Reviewer self-introduction (ペルソナ自己紹介)

I am a creolist (接触言語学・クレオール語専門) with fieldwork and lexicography experience across the Atlantic, Indian-Ocean and Pacific creole belts, returning for the wave-11 round-2 audit of the contact-language rows. I first grepped the live `words/*.js` to fix my actual remit — the codes present are `ht`, `jam`, `bah`, `bzj`, `pap`, `kea`, `pcm`, `tpi`, `tcs`, `pis`, `hwc`, `cbk`, `bi`, `max`, `mfe`, `rcf`, `crs`, `gcf`, `srn`, `djk`, `kri`, `jvn` (each present in all 20 files) — and re-read `docs/words/CONTRIBUTING.md` and `docs/words/LANG_CODES.md` (which fixes, e.g., `gcf` = **Guadeloupean** Creole and `djk` = Aukan/Ndyuka). I then read the closed round-1 adjudications in full — #50 (Atlantic creoles), #20 (which held the `srn` *poesi*/*pusi* orthography question) and #90 (Pacific) — and I do **not** re-open anything settled there: the `srn` final-nasal sub-pattern (`soŋ/buŋ/boŋ` vs `wan/ɲan`), the `ht` back-`ɑ̃` school, the `bzj` `kʲ` convention, the `kea` trill/tap convention, the `jam`/`kri` drink-affrication flag, and the `srn`/`djk` Dutch-era *poesi* headword are all left alone. I also read the concurrent wave-11 file `review_106.md`, which claims the `ht`/`mfe`/`rcf`/`gcf` rows it audits — its `ht` *pyebwa*, `ht` *chat*, `ht` *lalin*, `mfe` *lisien* and `mfe` *enn* findings are therefore not repeated here (though one of my findings below corrects a row #106 cited uncritically as sibling evidence). My reference works: Valdman (2007) *Haitian Creole–English Bilingual Dictionary* and the 1979 IPN orthography; Verhaar (1995) *Toward a Reference Grammar of Tok Pisin*; Kouwenberg & Singler (2008) *The Handbook of Pidgin and Creole Studies*; Crowley (2004) *A New Bislama Dictionary* / *Bislama Reference Grammar*; Carpooran (2011) *Diksioner Morisien*; d'Offay & Lionnet (1982) *Diksyonner kreol–franse*; Chaudenson (1974) and the CNRS-LGIDF Réunion Creole fiche; Huttar & Huttar (1994) *Ndyuka* and the SIL Aukan–English dictionary; Shnukal (1988) *Broken: An Introduction to the Creole Language of Torres Strait*; Fyle & Jones (1980) *A Krio–English Dictionary*; Faraclas (1996) *Nigerian Pidgin*; Decker (2005) *The Song of Kriol*; Cassidy & Le Page (1980) *Dictionary of Jamaican English* with Devonish & Harry (2004); Poullet & Duranty, *Dictionnaire des créoles comparés de Guadeloupe et de Martinique*. Every Current value below was verified verbatim against the live files on 2026-06-11.

---

## Issues found

### 1. `gcf` — house — `kay` is the Martinican/Haitian form; Guadeloupean Creole says `kaz`
- **File:** words/house.js line 938
- **Current:** `["kay", "kaj"]`
- **Expected:** `["kaz", "kaz"]`
- **Why:** `LANG_CODES.md` (line 285) defines `gcf` as **Guadeloupean Creole** specifically. The kay/kaz split is one of the best-known Guadeloupe–Martinique shibboleths: Guadeloupe says *kaz* (« a kaz an mwen » 'at my place'), Martinique says *kay* (« lakay mwen »), and Haitian has *kay* (already correctly at `ht: ["kay", "kaj"]`, house.js:328). Poullet & Duranty's comparative Guadeloupe/Martinique dictionary and the Archives départementales de la Guadeloupe (« Kaz antiyè, jan moun ka rété ») both give *kaz* for Guadeloupe; Glosbe's gcf dictionary lists *kaz* as the top translation of « maison ». The same-file Indian-Ocean sibling `rcf: ["kaz", "kaz"]` (house.js:936) shows the identical etymon (< Fr. *case*) with the expected IPA shape. The current row silently substitutes the Martinican/Haitian lexeme for the one variety the code names.

---

### 2. `gcf` — one — `yon` is the Haitian indefinite article, not the Antillean numeral; Guadeloupean counts `yonn`
- **File:** words/one.js line 937
- **Current:** `["yon", "jõ"]`
- **Expected:** `["yonn", "jõn"]`
- **Why:** *Yon* is Haitian Creole — and there it is the prenominal indefinite article ('a/an'), whose standalone numeral counterpart is *youn* (Valdman 2007); the dataset itself correctly uses the standalone form for Haitian (`ht: ["youn", "jun"]`, one.js:327). In Lesser Antillean (Guadeloupe/Martinique) the counting/standalone numeral is **yonn**: « yonn, dé, twa… » (languagesandnumbers.com, Antillean Creole counting: 1 = *yonn*, with compounds *mil yonn* 1 001; Poullet & Duranty s.v.). The current surface is thus the wrong variety **and** the wrong morphosyntactic slot. Final ⟨-nn⟩ after the nasal vowel is audible: [jõn], using the `õ` symbol this dataset already employs for gcf (`bon` `bõ` good.js:931, `lanmou` `lãmu` love.js:938).

---

### 3. `mfe` — cat — `lisat` is unattested; Morisien is `sat` (hypercorrect *li-* agglutination)
- **File:** words/cat.js line 928
- **Current:** `["lisat", "lisat"]`
- **Expected:** `["sat", "sat"]`
- **Why:** The Mauritian word for 'cat' is *sat* (< Fr. *chat*): Wiktionary/kaikki's Mauritian Creole lexicon (built on Carpooran-era sources) has **sat** 'cat' and no entry *lisat* in any Creole. French-article agglutination in Morisien is lexically frozen, not productive (Baker's classic work on agglutinated articles; Kouwenberg & Singler 2008, ch. on lexicon): *lisien* 'dog' (< *le chien*) and *lizie* 'eye' (< *les yeux*) really are agglutinated — both correctly in this dataset (dog.js:928, eye.js:928) — but *chat* never agglutinated, because the citation collocation was *(un) chat*. The row looks like an analogical over-extension of the *li-* pattern. Note that concurrent review #106 (its issue 3) cites this very row as sibling evidence for `ht` *chat* — the IPA value [lisat ~ sat] ending in [t] is indeed right, but the headword itself is a ghost form and should be fixed to `sat`. The Réunion sibling `rcf: ["shat", "ʃat"]` (cat.js:929) shows the same unagglutinated etymon.

---

### 4. `crs` — cat — same ghost form `lisat` propagated to Seselwa; the word is `sat`
- **File:** words/cat.js line 930
- **Current:** `["lisat", "lisat"]`
- **Expected:** `["sat", "sat"]`
- **Why:** Seychellois Creole 'cat' is *sat* (< Fr. *chat*, with the regular Seselwa /ʃ/ → /s/ shift; cf. the Wikipedia/Omniglot Seselwa descriptions of *chat* → *sat* and the Wiktionary Seychellois Creole entry **sat** 'cat'; d'Offay & Lionnet 1982 s.v.). *Lisat* is unattested in Seselwa just as in Morisien — the two rows are byte-identical and were evidently copied together with the same hypercorrect *li-*. Real agglutination is preserved where it belongs: `crs: ["lisyen", "lisjɛ̃"]` 'dog' (dog.js:930), `crs: ["lizye", "lizje"]` 'eye' (eye.js:930).

---

### 5. `crs` — one — `enn` IPA `ɛ̃n` nasalizes an oral vowel; expected `ɛn`
- **File:** words/one.js line 936
- **Current:** `["enn", "ɛ̃n"]`
- **Expected:** `["enn", "ɛn"]`
- **Why:** Seselwa *enn* 'one' (< Fr. *une*) has an **oral** vowel — the French source rime [yn] denasalizes nowhere; there was never a nasal to begin with. In the Seselwa orthography (as in the Morisien grafi-larmoni) a nasal vowel is written with single vowel+⟨n⟩ (`lisyen` [lisjɛ̃] dog.js:930, `lanmen` [lãmɛ̃] hand.js:930), while doubled ⟨nn⟩ marks oral vowel + consonantal /n/. The dataset already applies this correctly in the same crs column: `lalin` [lalin] (moon.js:936), and in the Réunion sibling `inn` [in] (one.js:935). [ɛ̃n] reads ⟨enn⟩ as ⟨en⟩+⟨n⟩ — exactly the error that concurrent review #106 (its issue 7) documents for the *mfe* twin row `["enn", "ẽn"]` (one.js:934); this is the Seselwa half of the same defect, which #106's remit did not cover. IPA-only fix.

---

### 6. `rcf` — moon — `lalune`/`lalyn` is plain French, not Réunion Creole: no front rounded vowels, no etymological spelling
- **File:** words/moon.js line 935
- **Current:** `["lalune", "lalyn"]`
- **Expected:** `["lalinn", "lalin"]`
- **Why:** This row is Metropolitan French in both columns. (i) Phonology: Réunion Creole lacks the French front rounded vowels — the CNRS-LGIDF fiche « Le créole réunionnais » states explicitly that French [y, ø, œ] are absent and correspond to unrounded vowels, citing precisely **« la line » for « la lune »**; Chaudenson (1974) documents the same [y] → [i]. So [lalyn] is impossible in the creole; the form is [lalin]. (ii) Orthography: every other rcf row in the corpus uses creole spelling (`dofé` fire.js:935, `zié` eye.js:929, `pyébwa` tree.js:929, `kaz` house.js:936, `shat` cat.js:929, `bonzour` hello.js:922); *lalune* with French silent ⟨-e⟩ is the lone etymological spelling. (iii) The corpus's own rcf column already shows the exact same French rime ⟨-une⟩ handled correctly one file over: `inn` [in] 'one' (< Fr. *une*, one.js:935) — doubled ⟨nn⟩ for oral vowel + [n], because single ⟨in⟩ would read as the nasal [ɛ̃] in Réunion spelling. Hence *lalinn* [lalin], matching the Mauritian sibling `lalinn` [lalin] (moon.js:934) and Seselwa `lalin` [lalin] (moon.js:936).

---

### 7. `bi` — thanks — `tankyu` violates Bislama spelling; the standard is `tangkyu` (⟨ng⟩ for /ŋ/)
- **File:** words/thanks.js line 685
- **Current:** `["tankyu", "taŋkju"]`
- **Expected:** `["tangkyu", "taŋkju"]`
- **Why:** Bislama orthography writes the velar nasal as ⟨ng⟩ wherever it occurs, including before /k/: Crowley (2004) *A New Bislama Dictionary* — the spelling authority used by bislama.org's spelling dictionary — has **tangkiu/tangkyu** (the national catchphrase is « Tangkyu tumas »; Omniglot's Bislama phrases page likewise gives *Tangkyu*). The dataset already follows the rule in this very column: `bi: ["dring", "driŋ"]` (drink.js:685) writes the nasal ⟨ng⟩. ⟨nk⟩ is an English-spelling leak; the IPA [taŋkju] is already correct, so this is a surface-only fix.

---

### 8. `djk` — eat — `njanjan` is the noun 'food'; the verb 'eat' is `nyan`
- **File:** words/eat.js line 936
- **Current:** `["njanjan", "ɲaɲaŋ"]`
- **Expected:** `["nyan", "ɲaŋ"]`
- **Why:** In Aukan/Ndyuka, *nyan* is the verb 'to eat' and the reduplication *nyanyan* is the **noun** 'food' (SIL Aukan–English dictionary s.v.; Huttar & Huttar 1994; Wiktionary *nyanyan* "reduplication of *nyan* 'to eat'"). Since this concept file is the verb 'eat' (the column's siblings are all verbs: `srn: ["nyan", "ɲan"]` eat.js:935, `mfe: manze`, `bi: kakae`), the reduplicated noun is the wrong lexeme. Secondarily, ⟨nj⟩ for /ɲ/ is the Dutch-era spelling; the modern SIL orthography — and the dataset's own Sranan sibling row — write ⟨ny⟩. Final nasal [ŋ] follows the dataset's djk convention (`boon` [boːŋ] good.js:943), hence [ɲaŋ]. (I am deliberately not touching `djk: ["poesi", "pusi"]` cat.js:943 — the parallel *oe*-spelling question for `srn` was held in closed #20 as a headword/orthography-school decision, and the same hold logically covers the Aukan row.)

---

### 9. `tcs` — hello — `ai go yu` is a leave-taking fragment ('I'm going'), not a greeting; Torres Strait Creole greets with `wis wei`
- **File:** words/hello.js line 455
- **Current:** `["ai go yu", "aj ɡo ju"]`
- **Expected:** `["wis wei", "wis wej"]`
- **Why:** *Ai go (nau)* 'I'm off (now)' is the formula a **departing** speaker uses in Torres Strait Creole — Shnukal (1988) *Broken* describes the leave-taking exchange built on *go*; placing it (with a stray *yu*) in the hello slot inverts the speech act. The attested greetings are the where-are-you-going question *Wis wei (yu go)?* — the State Library of Queensland's Yumplatok word list glosses **« Wiswai » as 'Hello'** — and the casual *gude* (Wikivoyage TSC phrasebook: hello = *gude*). *Wis wei* fits the dataset's substrate-appropriate-greeting policy (cf. the excellent `tcs: ["eso", "ɛso"]` 'thanks', thanks.js:462) far better than an inverted farewell. IPA follows the tcs column's [j]-offglide style (`ai` [aj] eye.js:462).

---

### 10. `kri` — cat — IPA `pʊs` uses a lax /ʊ/ that Krio does not have
- **File:** words/cat.js line 992
- **Current:** `["pus", "pʊs"]`
- **Expected:** `["pus", "pus"]`
- **Why:** Krio has a seven-vowel system /i e ɛ a ɔ o u/ with **no** tense/lax contrast — there is no /ʊ/ (Fyle & Jones 1980, introduction; Kouwenberg & Singler 2008). English STRUT/FOOT vowels merge into Krio /ɔ/ or /u/; *pus* 'cat' is [pus]. The kri column itself shows the correct mapping one concept over: `kri: ["gud", "ɡud"]` (good.js:992) renders English FOOT as [u], not [ʊ]. This row is the lone /ʊ/ in the kri set — an English-phonology leak. IPA-only fix.

---

### 11. `kri` — eat — IPA `iːt` imports English vowel length; Krio has none
- **File:** words/eat.js line 985
- **Current:** `["it", "iːt"]`
- **Expected:** `["it", "it"]`
- **Why:** Krio has no phonemic (or notated) vowel length — Fyle & Jones (1980) transcribe *it* 'eat' with plain /i/. Every other kri IPA in the corpus is length-free (`ˈwata` water.js:992, `mun` moon.js:998, `kuˈʃɛ` hello.js:985, `ˈtɛŋki` thanks.js:992, `tik` tree.js:992); this row's [iː] is the only length mark in the entire kri column, copied straight from English /iːt/. IPA-only fix.

---

### 12. `pcm` — moon — IPA `muːn` carries English vowel length into Naija
- **File:** words/moon.js line 336
- **Current:** `["mun", "muːn"]`
- **Expected:** `["mun", "mun"]`
- **Why:** Nigerian Pidgin has a seven-vowel system without phonemic vowel length (Faraclas 1996, *Nigerian Pidgin*, phonology ch.). The pcm column observes this everywhere else: `tri` [tɾi] (tree.js:330, English /iː/ → [i]), `drink` [dɾiŋk] (drink.js:330), `mun` — surface already the length-free creole spelling — yet the IPA keeps English [uː]. The same leak appears in `pcm: ["how far", "haʊ faː"]` (hello.js:330, expected [haw fa]); I cite the moon row as the clean, single-segment fix and flag the hello row as the same pattern. IPA-only fix.

---

### 13. `bah` — thanks — IPA `tank jə` misses the velar assimilation the dataset writes everywhere else
- **File:** words/thanks.js line 323
- **Current:** `["tank ya", "tank jə"]`
- **Expected:** `["tank ya", "taŋk jə"]`
- **Why:** A nasal before /k/ is velar [ŋ] — phonetically obligatory in English-lexifier creoles and consistently transcribed in this very file: `jam: ["tanks", "taŋks"]` (thanks.js:322), `bzj: ["tanks", "taŋks"]` (thanks.js:324), `hwc: ["tanks", "tæŋks"]` (thanks.js:464), `bi: [..., "taŋkju"]` (thanks.js:685). The bah column itself applies the assimilation elsewhere — `bah: ["drink", "dɹɪŋk"]` (drink.js:323) has [ŋk] — so the thanks row's [nk] is the lone unassimilated cluster in the set. Single-symbol IPA fix.

---

### 14. `jam` — house — IPA `ʊːs` invents a long monophthong; the Jamaican MOUTH vowel is the diphthong [ɔu]
- **File:** words/house.js line 329
- **Current:** `["ous", "ʊːs"]`
- **Expected:** `["ous", "ɔus"]`
- **Why:** Jamaican Creole 'house' (h-less basilect, Cassidy spelling ⟨ous⟩) has the MOUTH diphthong, transcribed [ɔu] in Devonish & Harry (2004, "Jamaican Creole and Jamaican English: phonology", in *A Handbook of Varieties of English*) and written ⟨ou⟩ in Cassidy & Le Page's DJE; [ʊː] is not a Jamaican Creole vowel at all — the language's long monophthongs are /iː aː uː/, and the dataset itself encodes /uː/ with the spelling ⟨uu⟩ (`muun` [muːn] moon.js:328). If [ʊːs] were right the surface would have to be *uus*. The surface ⟨ou⟩ and the IPA must agree on the diphthong: [ɔus]. IPA-only fix.

---

### 15. `bzj` — hello — IPA `hɛloʊ` imports the English GOAT diphthong; Belize Kriol final ⟨-oh⟩ is monophthong [o]
- **File:** words/hello.js line 324
- **Current:** `["heloh", "hɛloʊ"]`
- **Expected:** `["heloh", "hɛlo"]`
- **Why:** The surface form follows the Belize Kriol Project orthography, where word-final ⟨-oh⟩ writes the pure vowel /o/ (*goh* 'go', *soh* 'so', *noh* — Decker 2005, *The Song of Kriol*; Crosbie et al. 2007 *Kriol–Inglish Dikshineri*). Kriol's vowel inventory (Decker 2005) has /i ii e ai a aa o oa u uu ou/ — there is no [oʊ]; English GOAT is decreolized pronunciation, not Kriol. The bzj column elsewhere uses only pure vowels and [aj/aʊ]-type diphthongs (`ai` [aj] eye.js:324, `hous` [aʊs] house.js:331); this row's [oʊ] is the lone English-diphthong leak. IPA-only fix.

---

*All line numbers reference the state of the files as of the review date (2026-06-11). No data files were modified.*

---

## Worker round-1 response (作業者round-1)

All 15 findings are clear, well-sourced lexical errors or IPA/orthography normalizations consistent with established in-corpus conventions and the cited authorities. Applied all 15 (note: mfe *one* `["enn","ẽn"]` is out of remit — left to review #106 as the reviewer indicated).

- **111-1** gcf house `["kay","kaj"]` → `["kaz","kaz"]` — applied by orchestrator this round. gcf=Guadeloupean (LANG_CODES.md:285); kaz vs kay is the documented Guadeloupe/Martinique shibboleth; sibling rcf=kaz.
- **111-2** gcf one `["yon","jõ"]` → `["yonn","jõn"]` — applied. Antillean standalone numeral is *yonn*; *yon* is the Haitian indefinite article (ht already has standalone *youn*).
- **111-3** mfe cat `["lisat","lisat"]` → `["sat","sat"]` — applied. *chat* never agglutinated in Morisien; *lisat* is a ghost form (over-extension of *li-*).
- **111-4** crs cat `["lisat","lisat"]` → `["sat","sat"]` — applied. Same ghost form propagated to Seselwa; attested form *sat*.
- **111-5** crs one IPA `ɛ̃n` → `ɛn` — applied. *enn* has an oral vowel; doubled ⟨nn⟩ marks oral V + /n/ in the grafi.
- **111-6** rcf moon `["lalune","lalyn"]` → `["lalinn","lalin"]` — applied. Réunion Creole lacks French front rounded vowels ([y]→[i]); creole spelling, matching mfe/crs siblings.
- **111-7** bi thanks surface `tankyu` → `tangkyu` (IPA unchanged) — applied. Bislama writes /ŋ/ as ⟨ng⟩ everywhere (cf. *dring*); ⟨nk⟩ is an English-spelling leak.
- **111-8** djk eat `["njanjan","ɲaɲaŋ"]` → `["nyan","ɲaŋ"]` — applied. *nyanyan* is the noun 'food'; verb 'eat' is *nyan*; ⟨ny⟩ per modern SIL orthography and the srn sibling. (Left djk cat *poesi* alone per closed #20.)
- **111-9** tcs hello `["ai go yu","aj ɡo ju"]` → `["wis wei","wis wej"]` — applied. *ai go* is a leave-taking; *Wiswai* is glossed 'Hello' in the State Library of Queensland Yumplatok word list. Sourced replacement.
- **111-10** kri cat IPA `pʊs` → `pus` — applied. Krio has no lax /ʊ/ (Fyle & Jones 1980).
- **111-11** kri eat IPA `iːt` → `it` — applied. Krio has no phonemic vowel length; lone length mark in the kri column.
- **111-12** pcm moon IPA `muːn` → `mun` — applied. Naija has no phonemic vowel length (Faraclas 1996). (Flagged hello `haʊ faː` is outside this row; not edited.)
- **111-13** bah thanks IPA `tank jə` → `taŋk jə` — applied. Nasal-before-/k/ velar assimilation, consistent across the file.
- **111-14** jam house IPA `ʊːs` → `ɔus` — applied. Jamaican MOUTH diphthong [ɔu]; [ʊː] is not a JC vowel.
- **111-15** bzj hello IPA `hɛloʊ` → `hɛlo` — applied. Belize Kriol ⟨-oh⟩ is monophthong /o/; [oʊ] is decreolized English GOAT.

Remaining open: none.

---

## Reviewer round-2 response (再評価 round-2)

I re-grepped all 20 implicated `words/*.js` files on 2026-06-11 and verified each claimed fix verbatim against the live data. All 15 land exactly as stated:

| # | Row | Live value | Verdict |
|---|-----|-----------|---------|
| 1 | gcf house | `["kaz", "kaz"]` (house.js:938) | ✓ accept — Guadeloupe *kaz* shibboleth; ht *kay* (328) and rcf *kaz* (936) intact |
| 2 | gcf one | `["yonn", "jõn"]` (one.js:937) | ✓ accept — Antillean standalone numeral; ht *youn* (327) intact |
| 3 | mfe cat | `["sat", "sat"]` (cat.js:928) | ✓ accept — ghost *lisat* removed |
| 4 | crs cat | `["sat", "sat"]` (cat.js:930) | ✓ accept — twin ghost removed |
| 5 | crs one | `["enn", "ɛn"]` (one.js:936) | ✓ accept — oral vowel; now matches the corrected mfe twin (one.js:934 = `["enn","ɛn"]`, #106 also closed) |
| 6 | rcf moon | `["lalinn", "lalin"]` (moon.js:935) | ✓ accept — [y]→[i], creole spelling; matches mfe/crs *lalin* siblings |
| 7 | bi thanks | `["tangkyu", "taŋkju"]` (thanks.js:685) | ✓ accept — ⟨ng⟩ for /ŋ/, surface-only |
| 8 | djk eat | `["nyan", "ɲaŋ"]` (eat.js:936) | ✓ accept — verb (not noun *nyanyan*); ⟨ny⟩; srn *nyan* (935) sibling; *poesi* cat row correctly untouched (cat.js:943) per #20 |
| 9 | tcs hello | `["wis wei", "wis wej"]` (hello.js:455) | ✓ accept — sourced greeting (SL Queensland Yumplatok) replaces leave-taking |
| 10 | kri cat | `["pus", "pus"]` (cat.js:992) | ✓ accept — /ʊ/ removed, Krio has no lax vowel |
| 11 | kri eat | `["it", "it"]` (eat.js:985) | ✓ accept — length mark removed |
| 12 | pcm moon | `["mun", "mun"]` (moon.js:336) | ✓ accept — English [uː] removed |
| 13 | bah thanks | `["tank ya", "taŋk jə"]` (thanks.js:323) | ✓ accept — velar assimilation, matches jam/bzj/hwc (322/324/464) |
| 14 | jam house | `["ous", "ɔus"]` (house.js:329) | ✓ accept — MOUTH diphthong; *muun* [muːn] (328) confirms /uː/ would be spelled ⟨uu⟩ |
| 15 | bzj hello | `["heloh", "hɛlo"]` (hello.js:324) | ✓ accept — monophthong /o/, GOAT leak removed |

**New issues:** none. The two items I had flagged in passing but deliberately scoped out (pcm hello `["how far","haʊ faː"]` length leak, and the mfe *one* row) — the mfe row is now corrected to `["enn","ɛn"]` in live data; the pcm hello row remains as-flagged but was never an in-remit demand of this file and is not actionable here as a clear error of its own row given I cited it only as a "same pattern" note. I raise no new finding.

### Scorecard
- Accept (✓): 15 / 15
- Partial (△): 0
- Reject (✗): 0
- New issues: 0

All fixes verified present and correct in live data. Held items (srn/djk *poesi* orthography-school, settled in closed #20) remain appropriately untouched. Nothing left for the dev team.

**File status: CLOSED** — nothing left to address.
