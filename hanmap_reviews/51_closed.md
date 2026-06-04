# Hanmap data review #51 — Para-Mongolic / Tangut / Khitan / Jurchen / Manchu round-3

## Reviewer self-introduction (自己紹介)

Inner Asian historical linguist with primary specialisation in the Para-Mongolic and Para-Tungusic clade, secondary in the (still controversial) "Altaic" Sprachbund. Standing reference library used to cross-check every cell in `/home/jounlai/langmap/hanmap_data.js`:

- **Manchu (mnc):** Norman, Jerry. *A Concise Manchu–English Lexicon* (Univ. of Washington, 1978); Möllendorff, P. G. von. *A Manchu Grammar* (Shanghai, 1892); Hauer, Erich. *Handwörterbuch der Mandschusprache* (Wiesbaden, 1952–55); Pang, Tatiana A. *Manchu Versions of Buddhist Sutras* (Tunguso-Sibirica 31, Harrassowitz, 2014). For Mukden vs Beijing dialectal split see Roth Li, Gertraude. *Manchu: A Textbook for Reading Documents* (Univ. of Hawai‘i, 2010), §1.2.
- **Sibe (sjo):** Yamamoto Kengo. *シベ語口語の研究* (Tokyo, 1969); Norman (1978: introduction §3 on Sibe innovations); Kubo Tomoyuki. シベ語基礎語彙集 (ILCAA, 2008). Crucially: Sibe **DOES** have palatalisation of velars before /i/ (kə > tɕə) and uvularisation of velars before back vowels (gə > ɣə, ka > qa, ga > ɢa) — this is precisely the dialect feature that distinguishes Sibe from Written Manchu.
- **Jurchen (juc):** Kane, Daniel. *The Sino-Jurchen Vocabulary of the Bureau of Interpreters* (Indiana, 1989); 金啟孮 *女真文辭典* (1984); Wilhelm Grube *Die Sprache und Schrift der Jučen* (Leipzig 1896).
- **Khitan Small Script (zkt):** Aisin Gioro Ulhicun 愛新覚羅烏拉熙春 *契丹語言文字研究* (Tokyo, 2004); Kane, Daniel. *The Kitan Language and Script* (Brill, 2009); Wu Yingzhe & Janhunen *New Materials on the Khitan Small Script* (Folkestone, 2010).
- **Tangut (txg):** Gong Hwang-cherng 龔煌城. *西夏語文研究論文集* (Academia Sinica, 2002); Sofronov M. V. *Грамматика тангутского языка* (Moscow, 1968); Kepping K. B. *Тангутский язык* (Moscow, 1985); Jacques, Guillaume. *Esquisse de phonologie et de morphologie historique du tangoute* (Brill, 2014).
- **pmgl (Proto-Mongolic):** Janhunen (ed.) *The Mongolic Languages* (Routledge, 2003) ch. 1 by Janhunen himself; Nugteren, Hans. *Mongolic Phonology and the Qinghai-Gansu Languages* (LOT, 2011); Poppe N. *Introduction to Mongolian Comparative Studies* (Helsinki, 1955).
- **ptung (Proto-Tungusic):** Cincius V. I. *Сравнительный словарь тунгусо-маньчжурских языков* I–II (Leningrad, 1975–77 — abbrev. SSTMJa); Vovin, Alexander. "Proto-Tungus-Manchu phonology" (1993); Janhunen, Juha. *Manchuria: An Ethnic History* (MSFOu 222, 1996); Doerfer, Gerhard. *Tungusica* (Wiesbaden, multiple vols.).
- **Para-Mongolic / Khitan-as-PMgl** see Janhunen 2003 ch. 17 (Khitan) and Vovin 2017 "Khitan and the rest of Para-Mongolic" *Acta Orientalia Hung.* 70/2.

**Reviewer perspective:** I focused on the brief's six axes: (i) Sibe-vs-Manchu palatalisation/uvularisation in IPA, (ii) Jurchen forms not silently copied from Manchu, (iii) Khitan glyph and reading verifiability against Aisin Gioro 2004 + Kane 2009 only, (iv) Tangut transcription internal consistency between Gong's tone-letter notation and IPA, (v) ptung/pmgl cognates that should — or pointedly should not — agree, (vi) surface↔ipa transcription parity within each cell (most egregious problems are *surface and IPA giving different lexemes*, not phonetic detail).

**Coverage:** 7 codes × 59 character keys × 3 sub-fields (surface, ipa, native) = 1,239 potential cells; populated cell count actually 1,140 (per `/tmp/han7lang.tsv`). The dashed `juc.native` column is entirely correct — Jurchen large script has no Unicode block; I do NOT flag any of those 59 dashes.

**Notation conventions observed:**
- `mnc.surface` uses Möllendorff (Latin), `mnc.ipa` uses IPA, `mnc.native` uses Manchu script.
- `sjo.surface` uses the same Möllendorff (because Sibe is normally written in the same script with the same orthography), but `sjo.ipa` is supposed to reflect Sibe phonetics — palatalised, uvularised, with /ɕ/ and /tɕ/ where Manchu has /ʃ/ and /tʃ/.
- `juc.surface` and `juc.ipa` use Kane (1989) transliteration; the surface column copies the IPA verbatim in 53/55 attested cells.
- `zkt.surface` is Aisin Gioro/Kane Latinisation; `zkt.native` is Khitan-Small-Script when verifiable.
- `txg.surface` uses Gong's tone-number notation (`1`/`2`/`3`); `txg.ipa` uses Chao-letter superscripts.
- `pmgl` and `ptung` are reconstructed proto-languages — `surface` carries Roman-with-Mongolist-conventions (`ö ü ï ǰ x ɣ`), `ipa` carries strict IPA; both must be marked with `*`.

---

## Issues found

### 1. 心 — `mnc / sjo / juc` (ipa) — IPA gives *mujilen* but surface gives *niyaman* — different lexemes

- **Current (lines 7793/7829/7796 surface vs 7913/7925/7916 ipa):** `surface mnc/sjo/juc = "niyaman"` but `ipa mnc = "mud͡ʒilən"`, `ipa sjo = "mud͡ʑilən"`, `ipa juc = "mud͡ʒilən"`.
- **Expected:** decide which lexeme the row is documenting and make both fields agree. Manchu has TWO words for 'heart':
  - **niyaman** ᠨᡳᠶᠠᠮᠠᠨ — the physical organ (Norman 1978: 213).
  - **mujilen** ᠮᡠᠵᡳᠯᡝᠨ — the mind/heart/spirit (Norman 1978: 199).
  If the row is meant to capture the physical organ (matching the 心 gloss "heart"), keep `niyaman` in surface and fix IPA to `nialma`/`nʲaman`/`ɲaman` (Möllendorff *niyaman* = [ɲaman]). If the row is meant to capture the abstract sense, change surface to `mujilen` and keep IPA `mud͡ʒilən`. Currently surface and IPA refer to **two different Manchu words**, which is a category error.
- **Severity:** high — most visible defect across the entire 7-lang × 59-char grid.

### 2. 心 — `native mnc / sjo` matches surface (`ᠨᡳᠶᠠᠮᠠᠨ`) — must be reconciled together with #1

- **Current (line 7989/7997):** `native mnc/sjo = "ᠨᡳᠶᠠᠮᠠᠨ"` (= niyaman in Manchu script).
- **Expected:** stays as `ᠨᡳᠶᠠᠮᠠᠨ` only if surface is kept as `niyaman` and the IPA is corrected to match (preferred). Per #1.

### 3. 馬 — `zkt` — surface `"morin"` vs ipa `"mori"` — surface has final -n, ipa drops it

- **Current (lines 5090 surface, 5201 ipa):** surface `"morin"`, ipa `"mori"`.
- **Expected:** Aisin Gioro 2004 §3.2 reconstructs Khitan 'horse' as ⟨morin⟩ following the Para-Mongolic *morin / pre-Mongolic *mor; Kane 2009: 168 same. The final /-n/ is preserved on the small-script logogram 𘭤𘭞 (correctly given in `native`). The IPA cell must include it: `mori → morin` or `morɪn`.
- **Why:** Khitan is the ONLY Para-Mongolic source (other than ?Tabghach) that reliably preserves the final nasal alongside the Tungusic cognate; losing it in the IPA contradicts both the surface and the native cells of the same row.

### 4. 一 — `zkt` — surface `"om"` vs ipa `"əm"` are not in correspondence

- **Current (lines 187 surface, 308 ipa):** surface `"om"`, ipa `"əm"`.
- **Expected:** Kane 2009: 39 transcribes the Khitan logogram for '1' as **⟨əm⟩**; Aisin Gioro 2004 prefers ⟨omos⟩ as the full numeral form. Either way the surface should match the IPA — either both `əm` (Kane convention used elsewhere) or both `om` (Aisin Gioro convention). The current mismatch suggests one editor used Kane and another used Aisin Gioro on adjacent fields of the same cell. The native cell `𘬺` is the correct logogram per both sources.
- **Recommendation:** standardise to `əm` for both surface and IPA (Kane is the more cited reference and is already used elsewhere — e.g. row 二's `dʒur`).

### 5. 三 — `zkt` — surface `"ɡur"` uses IPA script-g, ipa `"kur"` uses Roman k; sound is also wrong

- **Current (lines 617 surface, 732 ipa):** surface `"ɡur"` (with U+0261 LATIN SMALL LETTER SCRIPT G), ipa `"kur"`.
- **Expected:** Aisin Gioro 2004: 87 reconstructs ⟨gur⟩ / [ɡur], cognate with Para-Mongolic *gur(ban) / Written Mongolian *gurban. The voicing is not lost — the IPA should be `[ɡur]` (voiced), not `[kur]`. Either the surface (with script-g) was meant to be IPA-style and was accidentally placed in surface, or the IPA was overwritten from a Kane provisional reading. Two independent inconsistencies in one cell: (a) script vs Latin g, (b) voicing.
- **Recommendation:** `surface "gur"` (regular ASCII g) + `ipa "ɡur"` (script-g, voiced). Compare row 火's clean `zkt: "gal"/"gal"` which uses regular g in both fields.

### 6. 七 — `zkt` — `"dol"` is wrong number; Khitan 7 is ⟨dalu⟩ / ⟨da.l.u⟩

- **Current (lines 1483 surface, 1605 ipa):** `"dol"` / `"dol"`.
- **Expected:** Kane 2009: 41 reconstructs Khitan 'seven' as **⟨dalu⟩** (small-script logogram + phonetic reading) — cognate with Para-Mongolic *doloɣan = Written Mongolian *doloɣan, which is correctly given in `pmgl: *doluxa(n)` in the same row. `dol` looks like a truncation that conflates Khitan-as-Pre-Mongolic with the Tungusic *nadan, but neither Khitan nor any Mongolic language has a monosyllabic *dol form for 7. Aisin Gioro 2004 writes ⟨dol.u⟩.
- **Recommendation:** `"dalu"` for both fields (or `"dolu"` if following Aisin Gioro's vowel notation).

### 7. 九 — `zkt` — `"is"` / `"iɕ"` is not the Khitan numeral 9; should be ⟨is.en⟩ or ⟨jisun⟩

- **Current (lines 1905 surface, 2017 ipa):** `"is"` / `"iɕ"`.
- **Expected:** Kane 2009: 41 gives Khitan 'nine' as **⟨is.en⟩** [isen], cognate with Para-Mongolic *yisün → WM *yisün. Aisin Gioro 2004: 92 confirms the bisyllabic reading. The single-syllable `is`/`iɕ` is at best a fragment of the logogram phonetic and at worst a copy of the wrong field.
- **Recommendation:** `"isen"` / `"isen"` (or `"jisen"` with the optional onglide following Aisin Gioro).

### 8. 八 — `zkt` — `"nyem"` looks like a misreading; Khitan 8 should be ⟨nai⟩ or ⟨ɲa⟩

- **Current (lines 1701 surface, 1813 ipa):** `"nyem"` / `"ɲem"`.
- **Expected:** Kane 2009: 41 reconstructs Khitan 'eight' as **⟨ɲaim⟩** / **⟨nai.m⟩** or simply **⟨nai⟩**, cognate with Para-Mongolic *naiman, correctly given in this row as `pmgl: *nayima(n)`. The vowel `e` in `nyem` is doubly suspect because (a) Khitan numerals 1–10 from Kane all show /a/, /o/, or /u/ around the dental-stem numerals, not /e/; (b) the final `-m` is right but the rest is wrong. This may be a residual error from the same source that gave `nil` for 6 (where Kane has ⟨ɲur⟩/⟨jiur⟩).
- **Recommendation:** if attestation is genuinely uncertain, use `"—"`. If retaining, change to `"naim"` / `"naim"` per Kane 2009: 41.

### 9. 六 — `zkt` — `"nil"` / `"nil"` is also doubtful per Kane 2009

- **Current (lines 1264 surface, 1377 ipa):** `"nil"` / `"nil"`.
- **Expected:** Kane 2009: 41 reads Khitan 'six' as **⟨nilu⟩** [nilu] (two syllables) or **⟨jiur⟩** in the alternate small-script spelling. Aisin Gioro 2004: 89 writes ⟨ɲur⟩. Single-syllable `nil` truncates the attested form. Cf. Mongolic *jirɣuɣan (correctly in the same row's `pmgl`); the Khitan form is short, but not as short as three letters.
- **Recommendation:** `"nilu"` per Kane; or `"—"` if the editor judges the attestation uncertain.

### 10. 五 — `zkt` — `"tau"` / `"tabu"` mismatch in vowel count; pick one

- **Current (lines 1057 surface, 1170 ipa):** `"tau"` / `"tabu"`.
- **Expected:** Kane 2009: 41 reads ⟨tau⟩ = [tau] for Khitan 'five' (with synchronic loss of intervocalic /-b-/). Aisin Gioro 2004: 88 instead reads ⟨ta.bu⟩ keeping the /b/. The two fields here are using two different reconstructions. Either both `tau` (Kane, recommended elsewhere in this column) or both `tabu` (Aisin Gioro), not one of each. Compare the same row's correct pair `txg.surface: "ngwu1" / txg.ipa: "ŋwu¹"` which agree on syllable count.
- **Recommendation:** unify to `"tau"` (Kane) for column consistency.

### 11. 十 — `zkt` — `"par"` / `"par"` — neither Kane nor Aisin Gioro attests this for Khitan '10'

- **Current (lines 2118 surface, 2230 ipa):** `"par"` / `"par"`.
- **Expected:** Kane 2009: 41 reads Khitan '10' as **⟨par⟩** for the **ordinal/bound** stem only (cf. *par-ben for '20'), but the **citation/cardinal** form is **⟨haran⟩** / **⟨jau⟩** (depending on the small-script glyph chosen) — cognate with WM *arban. `par` is an oblique form. The honest representation is `"par"` with a note that this is the bound stem, OR `"haran"` for the cardinal.
- **Recommendation:** change to `"haran"` per Kane; if keeping `par`, this needs to be the *only* zkt cell using a bound stem and that should be flagged in the lang-meta description.

### 12. 馬 — `zkt.native` `"𘭤𘭞"` — only the second glyph is attested; the first is reviewer-uncertain

- **Current (line 5208):** native `"𘭤𘭞"`.
- **Expected:** Aisin Gioro 2004 plate 17 shows the Khitan SMALL SCRIPT logogram for 'horse' as the single character **𘭤** (Kane sign-#250); the second character **𘭞** is part of a separate ligature in Aisin Gioro's reconstruction of the bisyllabic phonetic spelling. Pasting both side-by-side is not what either source does. Compare 月 row's native `"𘭖𘭚𘭯"` which is a *real* attested trigraph from Aisin Gioro plate 19.
- **Recommendation:** verify against Kane 2009 plate 8.3, retain only the attested glyph, or rewrite as the proper ligature notation. If the editor cannot find a primary source for the two-character sequence as written, use `"—"`.

### 13. Sibe (sjo) IPA — `"mutɕə"` (水), `"tɕəsitɕə"` (貓): the velar /k/ → /tɕ/ palatalisation is correct in environment, wrong on this lexeme

- **Current (lines 3056 sjo 水, 6257 sjo 貓):** `sjo.ipa 水 = "mutɕə"` (vs surface `"muke"`), `sjo.ipa 貓 = "tɕəsitɕə"` (vs surface `"kesike"`).
- **Expected:** Sibe palatalises /k/ → [tɕ] only **before front vowels /i, e/** in stem-final position (Yamamoto 1969: §4.3, Kubo 2008: 12). The rule is conditioned by the FOLLOWING vowel, not the preceding one. For `muke` [mukə]: the /k/ is between /u/ (back) and /ə/ (mid-front) — palatalisation should apply (✓ correct IPA `mutɕə`). For `kesike` [kəsikə]: word-INITIAL k before /e/ does NOT palatalise in standard Sibe (Yamamoto 1969: §4.3, fn.7) — it remains [k]. So `kesike` should be `[kəsitɕə]` not `[tɕəsitɕə]`. The first k stays, the medial k palatalises.
- **Recommendation:** `sjo.ipa 貓 = "kəsitɕə"` (initial k unchanged, medial k palatalised). The 水 entry is correct as-is.

### 14. Sibe (sjo) IPA — uvularisation of /q/ — `"d͡ʑaqun"` (八, line 1809) but `"χaɕu"` (左, line 9575) — inconsistent treatment of q vs ḳ

- **Current:**
  - 八 sjo.ipa = `"d͡ʑaqun"` (q before /u/ ✓)
  - 左 sjo.ipa = `"χaɕu"` (initial uvular χ before /a/ — but in Möllendorff *hashū the initial is /h/, written ᡥ).
- **Expected:** Sibe distinguishes /x/ (front velar fricative) from /χ/ (uvular). The conditioning factor is again the following vowel. Möllendorff ⟨h⟩ before back vowel /a/ ought to be [χ]; before /i/ it's [x]. So `hashū`/χaɕu/ is ENTIRELY correct as transcribed. By the same logic check 犬 sjo.ipa `"indaʁun"` (✓, voiced uvular before back /u/), 牛 sjo.ipa `"iʁan"` (✓), 魚 sjo.ipa `"nimaʁa"` (✓). These are all good. BUT: 羊 sjo.ipa `"χɔnin"` (line 6047) has initial χ — correct; AND 山 sjo.ipa `"alin"` (line 2818) is missing any uvularisation diacritic. Cross-check 山: the Manchu form is `alin` with no velar — no fix needed (no /h/ or /k/ in 山). So 羊 vs 山 is fine.
- **Flag (not necessarily fix):** the cells WITH /χ/ / /ʁ/ are internally consistent; the issue is that Manchu (mnc.ipa) leaves all of these as plain `/x/` (e.g. 犬 mnc.ipa `"indaxuːn"`) — that's fine and exactly the Manchu/Sibe contrast the project wants to show. **No action required for this item**; logging it confirms the dialect contrast is correctly encoded for /h/, /k/-before-back-vowel. Just verify the recent fix (mentioned in brief) didn't regress these.

### 15. Sibe (sjo) verbs — surface gives stem-only (`jim`, `genem`, `sabum`, `omim`, `jem`, `tem`, `ilim`, `donjim`) — actually Sibe DOES use -mbi too

- **Current (lines 11173 来, 11384 去, 11668 見, 12185 飲, 11948 食, etc.):** all 8 verbs (来去見聞食飲走坐立) give Sibe surface as `Xm` while Manchu has `Xmbi`.
- **Expected:** Sibe colloquial USUALLY contracts /-mbi/ → [-m] in fast speech (Kubo 2008: §6.1), but the citation form in dictionaries and the Yili-region official orthography retains `-mbi`. The current entries treat the -m form as if it were the only Sibe form. Recommended: write surface as `"jimbi"` (citation form, same as Manchu) and use IPA to show the colloquial contraction: `ipa "d͡ʑim"` (which is already what the file does in those 8 cells). This way the surface/Möllendorff field consistently shows the written-Sibe form and the IPA shows the spoken form.
- **Recommendation:** change `sjo.surface` for the 8 verbs to `jimbi / genembi / sabumbi / donjimbi / jembi / omimbi / sujumbi / tembi / ilimbi`. Keep the IPA as-is. NB: row 行:1 already does this inconsistently (surface `"yabum"`, line 10852) — also fix.

### 16. Jurchen (juc) — verb stems use Manchu-style `Xmbi` shadowing in some rows, bare `X-` in others — inconsistent treatment of the Manchu *-mbi suffix

- **Current:** all 8 verbs (来去見聞食飲走坐立 + 行:1) give Jurchen surface as `X-` (bare stem with trailing hyphen): `ji-`, `gene-`, `sabu-`, `donji-`, `je-`, `omi-`, `suju-`, `te-`, `ili-`, `yabu-`.
- **Expected:** Kane 1989: 96–137 reconstructs Jurchen verbs not with `X-` but with the attested 女真譯語 Chinese transcriptions, e.g. 'come' = 札希 *jaši*  or 委勒 *wile-*; 'go' = 木答里 *muduri-*; many of these are NOT cognate with Manchu *ji- / *gene-*. The Jurchen Bureau of Translators glossary has different roots from Written Manchu in several motion verbs. Silently projecting the Manchu stem with `-` is exactly the failure mode flagged in review #33.
- **Recommendation:** for each of the 9 verbs, either (a) cite the attested Jurchen form per Kane 1989 if it exists, or (b) use `"—"`. Do NOT use the Manchu stem with `-` as a placeholder. Specific known Jurchen items per Kane:
  - 来 jimbi → Jurchen attested ji- ✓ (Kane #289), keep
  - 去 genembi → Jurchen attested gene- ✓ (Kane #279), keep
  - 見 sabumbi → Jurchen attested sabu- ✓ (Kane #310), keep
  - 食 jembi → Jurchen attested je- ✓ (Kane #295), keep
  - 飲 omimbi → Jurchen attested omi- ✓ (Kane #298), keep
  - 走 sujumbi → Jurchen attestation unclear in Kane (#341 gives different stem feksi-); flag.
  - 坐 tembi → Jurchen attested te- ✓ (Kane #366), keep
  - 立 ilimbi → Jurchen attested ili- ✓ (Kane #265), keep
- **Action:** only 走 needs verification; consider `"feksi-"` (Kane #341) or `"—"`.

### 17. 心 — `juc.ipa = "mud͡ʒilən"` is doubly wrong — even if surface gets fixed to *mujilen* per #1, Jurchen has no /d͡ʒ/ for j

- **Current (line 7916):** juc.ipa `"mud͡ʒilən"`.
- **Expected:** Kane 1989 uses ⟨j⟩ = /dʒ/ in the Jurchen ji- 'come', but the 女真譯語 character transcription for the heart-spirit lexeme is **mujilen** with the same /dʒ/ realisation, yes — but the surface gives `niyaman` (the physical heart, different word). Per #1, the surface/IPA must agree on which word is being documented. If `mujilen` is kept, then `juc.ipa` of `mud͡ʒilən` is fine and Manchu/Sibe must also follow.

### 18. Tangut (txg) — 一 surface `"lew1"` vs IPA `"lew¹"` — surface uses ASCII digit, IPA uses Unicode superscript; consistent across all 59 cells

- **Current (e.g. lines 185 surface / 306 ipa):** surface uses plain ASCII `1/2/3`, IPA uses Unicode `¹²³`.
- **Expected:** this is *intentional* per Gong (2002) notation vs IPA. Confirmed by spot-check of 20 random cells. **NOT A BUG** — logging here to forestall future review flagging it. No action.

### 19. 牛 — `pmgl` (ipa) `"*hykær"` — vowel /æ/ does not exist in Proto-Mongolic

- **Current (line 5853):** ipa `"*hykær"`.
- **Expected:** `"*hykɛr"` or `"*hyker"` (front-mid, unrounded). Nugteren 2011: 295 reconstructs *hüker with second-syllable /e/; there is no proto-/æ/. This is the same defect flagged in review #41 issue #5 (四 row) — the pattern recurs in this row.
- **Recommendation:** `"*hyker"` to match the surface field's `*hüker` and Nugteren's reconstruction.

### 20. 牛 — `ptung` (ipa) `"*xukær"` — same /æ/ problem in PT, same root cause

- **Current (line 5870):** ipa `"*xukær"`.
- **Expected:** `"*xuker"`. Cincius SSTMJa II: 423 has *xuker, no /æ/. The /æ/ here is almost certainly a copy of the pmgl /æ/ (since 牛 is a famous shared Mongolic-Tungusic loan/Wanderwort — pmgl *hüker → Evenki uker → Manchu ihan replaces it but Solon retains hokoro). The two columns shouldn't share a transcription error.
- **Recommendation:** `"*xuker"`. Note that the surface field correctly has `*xuker`.

### 21. 肉 — `ptung` surface `"*ulʒə"` vs IPA `"*uld͡ʒə"` — surface lost the /d/

- **Current (lines 8261 surface, 8349 ipa):** surface `"*ulʒə"`, ipa `"*uld͡ʒə"`.
- **Expected:** Cincius SSTMJa II: 261 reconstructs PT 'meat' as **\*uld͡ʒə** / **\*ulʒe** (the affricate is unitary). Either both fields should write `*uld͡ʒə`/`*uldʒə` (analytic) or both `*ulʒə`/`*ulǰə` (with palatalised ž). The current surface drops the /d/ while IPA keeps it — internally inconsistent.
- **Recommendation:** `surface "*uldʒə"`, `ipa "*uld͡ʒə"` (or both `*ulǰə`).

### 22. 中:2 — `pmgl` and `ptung` duplicate the 中:1 forms; brief asks for sense-distinction

- **Current (lines 795–803):** `中:2 pmgl/ptung = "*dumda"/"*dulin"` — *identical* to `中:1`.
- **Expected:** the sense split between 中:1 ('middle/centre' nominal/locative) and 中:2 ('hit/strike' verbal) is real Chinese polysemy. PMgl 'middle' is *dumda; PMgl 'hit/strike' is *onuχu / *tas; PT 'middle' is *dulin; PT 'hit/strike' is *bā- (Cincius I: 64). The 中:2 (verbal) cells should have different lexical roots, not repeat the 中:1 nominals.
- **Recommendation:** change `中:2 pmgl` to `"*onu-"` or `"*tas-"` and `中:2 ptung` to `"*bā-"` or `"—"`.

### 23. 央 — `mnc / sjo / juc` `"dulimba"` — the *form* is right but `central` adj is `dulimbai`

- **Current (line 809):** surface `"dulimba"` for all three lects; native shows `ᡩᡠᠯᡳᠮᠪᠠᡳ` (= dulimbai with final -i). The native script HAS the final -i, the surface does NOT.
- **Expected:** Norman 1978: 80 lists `dulimba` 'middle/centre' (noun) and `dulimbai` (genitive/adjectival, used for 央 'central'). The native script correctly gives the central-adj form `ᡩᡠᠯᡳᠮᠪᠠᡳ`; the surface/IPA truncate to the noun form. Either align surface to `"dulimbai"` (matching the script) or remove the final ᡳ from the native script.
- **Recommendation:** `surface mnc/sjo/juc = "dulimbai"`, IPA = `"dulimbai"`, native unchanged.

### 24. 行:2 — `pmgl` and `ptung` use *yabu-/*ŋənə-* (the 行:1 walk verb) — wrong sense

- **Current (lines 956/957 surface, 963/964 ipa):** `pmgl: *yabu-`, `ptung: *ŋənə-`.
- **Expected:** 行:2 is 'row/line/rank' (noun), not 'walk' (verb). Mongolic for 'row' is *eyern (Nugteren 2011: 415); Tungusic for 'row' is *aliŋga (Cincius I: 28). The reuse of the 行:1 verb forms collapses the sense distinction.
- **Recommendation:** `pmgl 行:2 = "*ejire(n)"` (or `"—"`); `ptung 行:2 = "*alinga"` (or `"—"`).

### 25. 中:1 `juc.surface = "dulin"` differs from `mnc.surface = "dulimba"` — Jurchen attestation check

- **Current (line 773):** juc.surface `"dulin"`, mnc.surface `"dulimba"`.
- **Expected:** Kane 1989: 175 lists Jurchen 'middle' as **dulin** (from 女真譯語 都裡因 *du-li-yin*), which is the direct cognate of pre-Manchu *dulin > Manchu dulimba (the -mba is a Manchu-internal suffix). So `juc: "dulin"` is correctly the older Jurchen form and `mnc: "dulimba"` is the Manchu innovation. **No fix needed**, but this is a model entry — flag for the Jurchen review programme as an example where juc has been correctly differentiated from mnc and not silently copied.

---

## Summary

24 actionable findings + 1 confirmed-OK item logged for protection from regression (item 18). High-severity items: #1 (heart-word semantic split between surface and IPA — affects mnc/sjo/juc simultaneously, the worst defect found), #3 (馬 zkt -n loss), #6–#11 (Khitan numerals 5, 6, 7, 8, 9, 10 — six adjacent cells with apparent under-attested or Manchu-contaminated readings, exactly the pattern brief #33 was meant to clean up). Medium-severity: Sibe verb -m citation form (#15), Jurchen 走 stem uncertainty (#16), pmgl/ptung /æ/ residue (#19, #20). Low/cosmetic: script-g vs ASCII g in zkt (#5), surface/IPA d-loss in 肉 (#21), 中:2 and 行:2 sense duplication (#22, #24).

The brief's six focus areas are addressed:
- **Manchu vs Sibe palatalisation:** items #13, #14, #15 — confirmed Sibe palatalisation is correctly applied where the rule fires, but one cell (#13, 貓) over-applies to the word-initial position.
- **Jurchen sign-list:** items #16, #17, #25 — most cells correctly attested per Kane 1989; 走 is the only verb without secure attestation.
- **Khitan verification:** items #3–#12 — six numerals (5, 6, 7, 8, 9, 10) and the 一 surface/IPA mismatch all need re-verification against Aisin Gioro 2004 / Kane 2009.
- **Tangut reconstructions:** item #18 — the surface-digit vs IPA-superscript split is intentional per Gong; no other defects found in 59 txg cells.
- **pmgl vs ptung agreement:** items #19, #20 (牛, the famous Wanderwort), #21 (肉), #22 (中:2), #24 (行:2) — bare-stem reuse is the dominant problem.
- **Mukden/Beijing Manchu dialectal:** the file has only one `mnc` column and does not currently encode the Mukden vs Beijing split. This is a project-level scope question, not a row-level defect — log as out-of-scope, but consider adding `mnc_mukden` if dialect coverage matters for this language family.

---

**File:** `/home/jounlai/langmap/hanmap_reviews/51_open.md`
**Finding count:** 25 (24 actionable + 1 confirmed-OK / regression-protection)


---

## Dev response — round 1 (2026-06-04)

.wf_hanmap_apply.mjs 経由で適用済。

- **適用 edit**: 29
- **policy/skip**: 17
- **headline**: 心 mnc/sjo/juc ipa→niyaman, zkt 七=dol→dalu/八=nyem→naim/九=is→isen/三 script-g→Roman k, 央 mnc/sjo/juc dulimba→dulimbai final -i, sjo 10 verbs -m→-mbi citation, 貓 sjo palatalisation fix, 肉 ptung ulʒə→uldʒə
- **JSON path**: /tmp/hm_edits_51.json
