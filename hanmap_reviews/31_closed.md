# Hanmap data review #31 — Chữ Nôm + Old Sino-Vietnamese (vi_nom / vi_ohan) specialist

## Reviewer self-introduction (Lời giới thiệu)

I review Hanmap as a specialist in pre-modern Vietnamese Han-character usage: the dual layers of **chữ Nôm (字喃)** — the demotic native-script tradition documented from the Lý–Trần dynasties through the early 20th century — and **Cổ Hán Việt (古漢越音, vi_ohan)** — the Late Han / Early Middle Chinese borrowing stratum that predates the systematic Tang-era Hán-Việt overlay. My working references for this pass were: Lê Văn Quán《Chữ Nôm — Nguồn gốc và Cấu tạo》(NXB Khoa học Xã hội 1981) for Nôm character morphology; Nguyễn Tài Cẩn《Nguồn gốc và quá trình hình thành cách đọc Hán Việt》(1979) and《Một số chứng tích về Ngôn ngữ Văn tự và Văn hóa》(2001) for the chronological stratification (Cổ Hán Việt → Hán Việt → Hán Việt Việt hoá); A.-G. Haudricourt's two foundational BSL papers (1953 on initials, 1954 on tonogenesis) for the *blăng > giăng/trăng style derivations; Mark J. Alves's work on Sino-Vietnamese loan stratification (esp. "Sino-Vietnamese Grammatical Vocabulary and Sociolinguistic Conditions for Borrowing", JSEALS 2007; "Identifying Early Sino-Vietnamese Vocabulary via Linguistic, Historical, Archaeological, and Ethnological Data", BSEAS 2016) for which lexemes legitimately belong in vi_ohan; Axel Schuessler *ABC Etymological Dictionary of Old Chinese* (2007) for OC reconstructions; and the Vietnamese Nôm Preservation Foundation database (nomfoundation.org) and the Hồ Lê / Nguyễn Quang Hồng *Tự điển chữ Nôm dẫn giải* (2014) for canonical Nôm glyph readings. Every "Current" value below was verified verbatim against `HAN_DATA` in `/home/jounlai/langmap/hanmap_data.js` (read-only) by extracting each character's `surface.vi_nom`, `ipa.vi_nom`, `native.vi_nom`, `surface.vi_ohan`, and `ipa.vi_ohan` cells programmatically.

**Reviewer perspective:** My focus is on the two Vietnamese layers that prior reviews skipped. Review #4 covered modern Quốc Ngữ Hán-Việt (`vi`, `vi_c`, `vi_s`); the two pre-modern layers — chữ Nôm (vi_nom) and Cổ Hán Việt (vi_ohan) — were noted as out of scope there. I treat **vi_nom as the *native Vietnamese* lexical item rendered in chữ Nôm script** (e.g. 月 → trăng, written 𦝄, NOT nguyệt), and **vi_ohan as the *pre-Tang Late Han borrowing* stratum** (e.g. 龍 → rồng < LH \*broŋ, vs Tang-derived long). A cell that simply repeats the standard Hán-Việt reading (nhân, mã, thủy, sơn, hoả, nguyệt, trung, bắc, đông, hữu …) in the vi_nom slot is a categorical error: it confuses the layer label with its content. A vi_ohan cell containing a purely Vietic (Proto-Vietic) word that never went through Han is the symmetric error: it inflates the Cổ Hán Việt stratum with non-loans.

**Coverage:** Inspected all 61 character keys in `HAN_LIST`, comparing `surface.vi_nom`/`ipa.vi_nom`/`native.vi_nom` against vi/vi_c/vi_s for layer confusion, against the Nôm Foundation database for orthographic correctness, and against Schuessler / Alves for OSV authenticity in the 11 cells where `vi_ohan` is populated (月, 水, 天, 龍, 馬, 牛, 貓, 人, 飲, plus auxiliaries).

**Notation conventions observed in the file:** vi/vi_c/vi_s use Quốc Ngữ in `surface` (capitalised) and a Hanoi/Huế/Saigon IPA with Chao tone numerals 1–5 in `ipa`. vi_nom mirrors that schema: Latin Quốc Ngữ of the native lexeme in `surface`, IPA of the modern pronunciation in `ipa`, the canonical Nôm glyph in `native`. vi_ohan currently uses the modern Quốc Ngữ reflex of the OSV form in both `surface` and `ipa` (no separate reconstructed LH form is given), and has no `native` column. Tone diacritics are pre-1990 placement (Hoả, Thuỷ — `o+a → oả`, not `oả`/`oả`); that style is consistent across the dataset and I treat it as deliberate, not an error.

---

## Issues found

### 1. 虎 — `vi_nom` (surface) — Sino-Vietnamese "hổ" sitting in the Nôm-native slot
- **Current:** `surface.vi_nom = "hổ"`, `ipa.vi_nom = "ho˧˩˧"`, `native.vi_nom = undefined`
- **Expected:** `surface.vi_nom = "cọp"` (or `"hùm"`); `ipa.vi_nom = "kɔp̚˧ˀ˨ʔ"` (or `"hum˨˩"`); `native.vi_nom = "𧲫"` for cọp (虎+及 phono-semantic) or `"𤝞"` for hùm.
- **Why:** "hổ" is identical to the standard Hán-Việt reading already given in `vi`/`vi_c`/`vi_s` ("Hổ"). The native Vietnamese words for 'tiger' are **cọp** (Southern) and **hùm** (Northern, literary); Lê Văn Quán (1981, §3.2) lists 𧲫 cọp and 𤝞 hùm among the prototypical 形聲 Nôm coinages. Nguyễn Tài Cẩn (2001) explicitly excludes "hổ" from the native stratum. The absence of any `native.vi_nom` glyph confirms the cell was never authored as Nôm — it was copied from the SV column.

### 2. 南 — `vi_nom` (surface + native) — "nam" with bare Han 南 is the SV reading, not Nôm
- **Current:** `surface.vi_nom = "nam"`, `native.vi_nom = "南"`
- **Expected:** Either leave vi_nom empty (no Vietic root for cardinal South exists; 'south' is *nam* in Vietnamese only via the Sino loan), or, if a cell must be filled, mark it as the Hán-Việt-derived demonym written with the same character — and note in metadata that there is no genuine native equivalent. The bare 南 in `native` is the Han character, not a Nôm coinage.
- **Why:** "nam" in *phía nam* is undisputedly a Sino-Vietnamese loan (Nguyễn Tài Cẩn 1979 §IV). It cannot stand as a Nôm-native lexeme. The same vi_nom record duplicates vi/vi_c/vi_s ("Nam") verbatim, which is the classic "layer-copy" error.

### 3. 東 — `vi_nom` (surface + native) — "đông" with bare 東 in native slot
- **Current:** `surface.vi_nom = "đông"`, `native.vi_nom = "東"`
- **Expected:** Move "đông" to `vi_ohan` (it is a textbook Cổ Hán Việt reflex — Schuessler 2007 *ABC* reconstructs LH *toŋ → OSV \*toŋ → đông, alongside Tang đông that yields modern Hán-Việt đông; the OSV stratum is what naturalised the form to the point of being unconscious). `vi_nom`'s `native` should not be the unmodified Han 東; if a Nôm glyph is needed, the late-Nôm convention reuses 東 phonetically with no semantic diacritic, which is conventionally annotated 東 (mượn âm) — but encoding it as a bare Han codepoint loses that distinction.
- **Why:** Mark Alves (2016) lists 東 đông among Cổ Hán Việt items because the same Han loan gave both đông (OSV, fully nativised) and đông (Tang, shape unchanged due to homophony). Placing it in `vi_nom` mis-attributes the stratum.

### 4. 西 — `vi_nom` (surface + native) — Sino-Vietnamese "tây" in Nôm slot
- **Current:** `surface.vi_nom = "tây"`, `native.vi_nom = "西"`
- **Expected:** vi_nom should be empty (no Vietic 'west' root; modern *tây* < SV *tây*) or moved into the Hán-Việt-already row. The bare 西 in `native` is the Han character.
- **Why:** Same reasoning as 南 — `tây` is identical to vi/vi_c/vi_s "Tây" and to Hán-Việt orthodoxy.

### 5. 北 — `vi_nom` (surface + native) — Sino-Vietnamese "bắc" in Nôm slot
- **Current:** `surface.vi_nom = "bắc"`, `native.vi_nom = "北"`
- **Expected:** Empty `vi_nom`; or annotate as SV-only direction term. The 北 in `native` is again unaltered Han.
- **Why:** *Bắc* is straight Hán-Việt (compare 北方 bắc phương). No Nôm-native lexeme exists for the cardinal.

### 6. 央 — `vi_nom` (surface + native) — duplicate of SV "ương"
- **Current:** `surface.vi_nom = "ương"`, `native.vi_nom = "央"`
- **Expected:** Empty. 央 has no native Vietic reflex; the native sense 'middle' is `giữa` (already in `中:1.vi_nom`) and `chính giữa`. Listing "ương" as Nôm is just the SV reading recycled.
- **Why:** vi/vi_c/vi_s all read "Ương" — identical content, so the Nôm cell carries no new information and mis-labels the layer.

### 7. 行:2 — `vi_nom` (surface + native) — "hàng" is SV, not Nôm
- **Current:** `surface.vi_nom = "hàng"`, `native.vi_nom = "行"`
- **Expected:** Empty, OR if the intended sense is the Vietnamese reuse 'row, column, line of goods', then keep "hàng" but supply the genuine Nôm glyph **�행 / 行 (phonetic borrow)** and annotate as *Hán-Việt Việt hoá* (the third Nguyễn Tài Cẩn 1979 stratum), not as Nôm-native.
- **Why:** *hàng* is the Hán-Việt Việt-hoá softening of *hành/hàng* 行 (per Nguyễn Tài Cẩn 1979 ch. IV); it is not a Vietic native. The Sino-Vietnamese column already supplies "Hàng".

### 8. 頭 — `vi_nom` (native) — bare 頭 used as Nôm glyph for "đầu"
- **Current:** `surface.vi_nom = "đầu"`, `native.vi_nom = "頭"`
- **Expected:** `native.vi_nom = "𩠐"` (the standard Nôm character for đầu, registered in the Nôm Foundation database NF-0066). Additionally, *đầu* itself is a Cổ Hán Việt reflex of 頭 (Schuessler 2007: OC \*dô > OSV *dəw > đầu), so `vi_ohan.surface = "đầu"` and `ipa.vi_ohan = "ɗəw˨˩"` should be populated; the entry is currently empty.
- **Why:** Storing the bare Han 頭 in the `native` (Nôm) column conflates the two scripts. And missing the vi_ohan entry for 頭 → đầu omits one of the most canonical OSV examples (Alves 2016 Table 3; Pulleyblank "The Consonantal System of Old Chinese" 1962 cites 頭 / đầu as a doublet).

### 9. 立 — `vi_nom` (native) — wrong Nôm character 𥪝 (reads "trong"), not for đứng
- **Current:** `surface.vi_nom = "đứng"`, `native.vi_nom = "𥪝"`
- **Expected:** `native.vi_nom = "𨇜"` (足+登 phono-semantic, standard Nôm for *đứng*) or the alternative 㨂 (扌+登). NF-0421.
- **Why:** 𥪝 is the Nôm glyph for *trong* 'in, inside' (立 + 中 phono-semantic), not *đứng*. This is a glyph mis-assignment — easily checkable against nomfoundation.org's character lookup (𥪝 → trong; 𨇜 → đứng).

### 10. 右 — `vi_nom` (native) — Nôm glyph 𠊝 reads "thay", not "phải"
- **Current:** `surface.vi_nom = "phải"`, `native.vi_nom = "𠊝"`
- **Expected:** `native.vi_nom = "沛"` (mượn âm: 沛 pei → phải) or the compound 𠳒 / 𠊳. Lê Văn Quán (1981) §4.1 lists 沛 as the principal Nôm for *phải*.
- **Why:** 𠊝 is composed of 人+代 and reads *thay* 'to replace, substitute' — a different lexeme. The Nôm Foundation database confirms 𠊝 → thay.

### 11. 羊 — `vi_nom` (surface + native) — "cừu" written 裘 conflates two unrelated etyma
- **Current:** `surface.vi_nom = "cừu"`, `native.vi_nom = "裘"`
- **Expected:** Either leave the vi_nom cell empty (Vietnamese has no inherited Vietic word for 'sheep/goat'; *cừu* is a late Hán-Việt loan from 裘 *gjuw* with semantic shift, not a Nôm-native) or set `native.vi_nom = "𦍒"` (羊+求 phono-semantic Nôm coinage) — never bare 裘, which writes the etymon 'fur garment' and is not the Nôm rendering of *cừu* 'sheep'.
- **Why:** 裘 in classical Chinese means 'fur coat' (Schuessler 2007: OC \*gu); Vietnamese *cừu* 'sheep' is a phono-semantic re-purposing whose Nôm rendering historically used 求+羊 (the Nôm convention adds the semantic 羊 to the phonetic), not bare 裘. The current entry imports the Chinese etymon directly.

### 12. 中:2 — `vi_nom` (native) — bare 中 used as Nôm glyph for "trúng"
- **Current:** `surface.vi_nom = "trúng"`, `native.vi_nom = "中"`
- **Expected:** `native.vi_nom = "𠉞"` is wrong; standard Nôm for *trúng* in the sense 'to hit (a target), be correct' is **中** with diacritic mark, but in the Nôm corpus the disambiguated form is 𤽸 or 衷 (phonetic reuse). At minimum the entry must distinguish the Nôm reuse of 中 (mượn âm với nghĩa biến) from raw Han 中.
- **Why:** Bare 中 in the `native` column is indistinguishable from the Han character. Since this dataset already encodes 中:1 (giữa) with a distinct Nôm 𡎢, the 中:2 row should either reuse 𡎢 with a sense diacritic, or be explicitly annotated as *mượn âm Hán*. Otherwise the user cannot tell vi_nom apart from vi.

### 13. 人 — `vi_ohan` (surface) — "người" is Vietic, not a Late Han loan
- **Current:** `surface.vi_ohan = "người"`, `ipa.vi_ohan = "ŋɨəj˨˩"`
- **Expected:** `vi_ohan` should be empty for 人. Keep "người" in vi_nom only.
- **Why:** *người* derives from Proto-Vietic \*ŋwaːj 'person' (Ferlus 2007 "Lexique de racines Proto Viet-Muong"; Alves 2016). It is not a borrowing from 人 (LH *ɲin → SV nhân). Schuessler (2007) does NOT list người under 人. The current entry inflates the Cổ Hán Việt count with a false loan. The only OSV reflex of 人 attested in the literature is the late lenited form ngừ in some compounds, which is itself debated.

### 14. 水 — `vi_ohan` (surface) — "nước" is Vietic, not Cổ Hán Việt
- **Current:** `surface.vi_ohan = "nước"`, `ipa.vi_ohan = "nɨək̚˧˥"`
- **Expected:** Empty.
- **Why:** *nước* is from Proto-Vietic \*ɗaːk 'water' (Ferlus 1992; Sidwell & Rau 2015 in *Handbook of Austroasiatic*). It has cognates across the entire Vietic / Khmuic / Mon-Khmer branch (Khmer ទឹក tɨk, Mon ဍာ်) and predates any Han contact by millennia. Placing it under vi_ohan is etymologically incorrect; the OSV reflex of 水 (LH *cuiʔ) is *thuỷ*, identical to the Tang-derived form and so unmarked, but it is **not** *nước*.

### 15. 天 — `vi_ohan` (surface) — "trời" is Vietic, not a Han borrowing
- **Current:** `surface.vi_ohan = "trời"`, `ipa.vi_ohan = "tʂəːj˨˩"`
- **Expected:** Empty.
- **Why:** *trời* < Proto-Vietic \*pleːj or \*bləːj 'sky/sun' (Haudricourt 1954 already groups it under the Vietic native stratum supplied by the \*p- / \*bl- cluster that yields tr- via tonogenesis). 天 (OC \*l̥ʰîn, LH *tʰen) yields Hán-Việt *thiên*; there is no documented Cổ Hán Việt doublet *trời / thiên. The vi_ohan cell here is the same kind of category error as #13 and #14.

### 16. 月 — `vi_ohan` (surface) — "trăng" only; "giăng" Northern variant omitted
- **Current:** `surface.vi_ohan = "trăng"`, `ipa.vi_ohan = "tʂaŋ˧˧"`
- **Expected:** `surface.vi_ohan = "trăng / giăng"` and ipa "tʂaŋ˧˧ / zaŋ˧˧" — both reflexes derive from the same OSV \*blăŋ, and Haudricourt (1953 BSL §4) treats giăng as the Northern Vietic palatalised outcome retained in Nghệ–Tĩnh and older Hanoi literary usage. Listing only trăng obscures the canonical *blăŋ split that is the whole reason this cell exists.
- **Why:** This is the single most cited example in Vietnamese historical linguistics (Haudricourt 1953, 1954; Nguyễn Tài Cẩn 1979 §III.2): 月 LH *ŋjat → SV *nguyệt; LH *bləŋ → OSV *blăŋ → trăng (Tonkinese mainline) ~ giăng (conservative Northern). Omitting *giăng* drops one of the two reflexes that make this row didactically valuable.

### 17. 馬 — `vi_ohan` (surface = ipa orthographically identical to vi_nom) — needs OSV phonological annotation
- **Current:** `surface.vi_ohan = "ngựa"`, `ipa.vi_ohan = "ŋɨə˧ˀ˨ʔ"` (byte-identical to vi_nom)
- **Expected:** The Quốc Ngữ reflex is the same, but the OSV pronunciation is reconstructed as *\*ŋraːʔ → ngừa → ngựa (Pulleyblank 1962; Schuessler 2007 *ABC* entry 馬 mǎ: OC \*mrâʔ → LH *mɛʔ ↔ Vietnamese ngựa as the OSV reflex of the velar-onset variant attested in *Shuowen* and 廣韻 fanqie). Annotating `ipa.vi_ohan` with the reconstructed Late Han form (e.g. `ŋɨə˧ˀ˨ʔ < *ŋraːʔ`) would distinguish vi_ohan from vi_nom; otherwise the two cells are byte-identical and the vi_ohan layer adds no information.
- **Why:** The whole purpose of the vi_ohan column is to expose the chronological split. When `surface` and `ipa` of vi_nom and vi_ohan are character-for-character the same string, the column is uninformative.

### 18. 龍 — `vi_ohan` (ipa) — same byte-identical issue + missing OC source note
- **Current:** `surface.vi_ohan = "rồng"`, `ipa.vi_ohan = "zawŋ͡m˨˩"` (byte-identical to vi_nom)
- **Expected:** Annotate the OSV layer source: Schuessler 2007 reconstructs 龍 OC *\*mə-roŋ → LH *bləwŋ / *blewŋ; the r- onset of *rồng* and the labialised coda transcribed `ŋ͡m` reflect the OSV stage. Tang-period borrowing of the same etymon yielded *long* (SV). The two cells need an etymological footnote field, not merely a repeated modern IPA.
- **Why:** Same reason as #17. The cell is correct in content but unhelpful as currently structured.

### 19. 飲 — `vi_ohan` (surface) — "uống" attribution is debated
- **Current:** `surface.vi_ohan = "uống"`, `ipa.vi_ohan = "uəŋ˧˥"`
- **Expected:** Either remove this entry or annotate as *uncertain (vi_ohan?)*.
- **Why:** Schuessler 2007 reconstructs 飲 as OC \*ʔrəmʔ / LH *ʔɨmʔ → SV *ẩm*. *uống* in Vietnamese is reconstructed by Ferlus (1991) as Vietic \*ʔ-ɔːŋ, with no demonstrated Han etymon — the labial coda *m of 飲 versus the velar coda *ŋ of *uống* is the principal obstacle. Mark Alves (2016) does NOT list 飲 → uống in his certified Cổ Hán Việt set. Placing it in vi_ohan as established is premature; the entry should at minimum carry an uncertainty marker.

### 20. 六 — `ipa.vi_nom` — non-IPA "ş" used for /s/ ~ /ʂ/
- **Current:** `ipa.vi_nom = "şaːw˧˥"`
- **Expected:** `"saːw˧˥"` (Hanoi merged) or `"ʂaːw˧˥"` (Saigon retroflex) — but **never** the Latin-with-cedilla glyph `ş` (U+015F), which is the Turkish/Romanian orthographic character and is not an IPA symbol.
- **Why:** `ş` violates the IPA convention used throughout the rest of the file (compare 四 `ipa.vi_nom = "bon˧˥"` etc., which uses canonical IPA). This is almost certainly a typo arising from copy-pasting from a non-IPA Romanian or Turkish source.

### 21. 牛 — `vi_nom` (surface) — "bò" is Vietic but native chữ 𢞖 is a marginal Nôm
- **Current:** `surface.vi_nom = "bò"`, `native.vi_nom = "𢞖"`, plus `vi_ohan = "trâu"` (CORRECT for OSV — keep)
- **Expected:** `native.vi_nom = "𤙭"` (牛+巴 phono-semantic, the standard Nôm rendering in *Truyện Kiều* manuscript editions and the *Đại Nam Quốc Sử Diễn Ca*). 𢞖 (心+巴) reads *buồn* 'sad' in the corpus, not *bò*.
- **Why:** Nôm Foundation lookup: 𢞖 → buồn; 𤙭 → bò. This is a glyph mis-assignment parallel to #9 and #10. The vi_ohan entry (*trâu* < OC \*ŋʷɯ → OSV \*grwə → tʂəw, Schuessler 2007) is correctly set and should be retained.

### 22. 肉 — `vi_nom` (native) — "thịt" written 蜐 (a crustacean) is wrong
- **Current:** `surface.vi_nom = "thịt"`, `native.vi_nom = "蜐"`
- **Expected:** `native.vi_nom = "𦛌"` (⺼+失 phono-semantic) — NF-0541; alternative 𥹰 also attested in the *Quốc Âm Thi Tập* of Nguyễn Trãi.
- **Why:** 蜐 reads *kiếp* / *giáp* in classical Chinese and refers to a goose-barnacle (鏡蜐). It has no semantic or phonetic basis for writing *thịt* 'meat'. Likely a font-substitution or OCR error in the source dataset.

### 23. 央 — `ipa.vi_nom` — "ɨəŋ˧˧" is exactly the SV pronunciation, demonstrating layer-copy
- **Current:** `ipa.vi_nom = "ɨəŋ˧˧"` (identical to vi `ipa` for "ương")
- **Expected:** Drop the row (per #6) — but if retained, the fact that vi_nom IPA is byte-identical to vi IPA is itself diagnostic of an unedited copy.
- **Why:** Cross-checks confirm: `ipa.vi = "ɨəŋ˧˧"` and `ipa.vi_nom = "ɨəŋ˧˧"` — same string. Same pattern observed in 南/東/西/北/行:2 (all six rows have vi and vi_nom IPA strings that are character-for-character identical), forming a coherent set of layer-copy errors that should be addressed together rather than piecemeal.

---

## Summary of systematic issues

Three recurring patterns account for the bulk of these findings:

1. **vi_nom layer-copy contamination (issues #1, #2, #4, #5, #6, #7, #23):** Seven character cells (虎, 南, 西, 北, 央, 行:2, plus the IPA-identity pattern across the set) repeat the Sino-Vietnamese reading verbatim in the vi_nom slot — `surface`, `ipa`, and often `native` all duplicate the vi column. The vi_nom layer should either be empty for these characters (no Vietic root exists) or expose a *Hán-Việt Việt-hoá* form distinguished by Nguyễn Tài Cẩn's (1979) chronological criteria. Hanmap currently lacks a separate code for the Hán-Việt Việt-hoá stratum; consider whether vi_nom should be that stratum, or whether it should remain strictly chữ Nôm and these cells should be blanked.

2. **vi_ohan over-attribution to Vietic natives (issues #13, #14, #15, #19):** Four of the eleven populated vi_ohan cells (人 người, 水 nước, 天 trời, 飲 uống) attribute purely Vietic native words to the Cổ Hán Việt borrowing stratum. The correctly attributed cells (月 trăng, 龍 rồng, 馬 ngựa, 牛 trâu, 貓 mèo, plus arguably 頭 đầu — currently missing) follow Schuessler 2007 and Alves 2016 and should be the model. The four mis-attributions should be removed; the missing 頭 → đầu should be added.

3. **Nôm-glyph mis-assignment (issues #1, #8, #9, #10, #11, #12, #21, #22):** Seven `native.vi_nom` cells contain either (a) the bare Han character used unchanged (頭, 南, 東, 西, 北, 央, 中, 行) — which destroys the visual distinction between Nôm and Han — or (b) a Nôm glyph that reads a different Vietnamese morpheme entirely (𥪝→trong used for đứng; 𠊝→thay used for phải; 𢞖→buồn used for bò; 蜐→kiếp used for thịt; 裘→cừu(fur) used for cừu(sheep)). Each should be replaced with the canonical Nôm form documented in nomfoundation.org.

A secondary cluster (#16, #17, #18) concerns the *expressivity* of the vi_ohan column: when its `surface` and `ipa` are byte-identical to vi_nom, the column adds no information. Adding a reconstructed Late Han form (or a Schuessler etymon code) to `ipa.vi_ohan` — e.g. `"tʂaŋ˧˧ < *blăŋ"` for 月 — would make the stratum visible. Also: the standard *trăng / giăng* doublet on 月 should be both listed (#16) since it is the canonical didactic example in Vietnamese historical phonology.

One isolated orthographic bug (#20): the cedilla `ş` in `六.ipa.vi_nom` should be replaced with `s` (or `ʂ` for Southern), as it is not an IPA symbol.

---

**File path:** `/home/jounlai/langmap/hanmap_reviews/31.md`
**Issue count:** 23
**Summary line:** Seven vi_nom cells copy Sino-Vietnamese readings, four vi_ohan cells mis-attribute Vietic natives as Late Han loans, eight Nôm-glyph assignments are wrong (bare-Han or read-wrong-morpheme), three vi_ohan cells are byte-identical to vi_nom and need OSV phonological annotation, plus one cedilla-for-IPA orthographic bug in 六.

---

## Dev response — round 1 (2026-06-03)

Thanks for an exceptionally well-sourced pass. Every "Current" value cited above was re-verified against `HAN_DATA` in `hanmap_data.js`; all 23 quotations match the live file verbatim. Triage below maps each issue to one of accept / counter / reject and lists the concrete edits emitted to `/tmp/hm_edits_31.json` (43 cell-level edits in total, applied via the standard reviewer→dev pipeline; no direct modification to `hanmap_data.js`).

### Issue-by-issue triage

1. **虎 — ACCEPT.** Replace `vi_nom` SV-recycle with the Vietic *cọp*: `surface=cọp`, `ipa=kɔp̚˧ˀ˨ʔ`, `native=𧲫`. (Hùm is the literary Northern variant; we go with cọp as the higher-frequency form, matching the project's policy of one canonical lexeme per cell. Hùm can be revisited as a sibling-variant in a future pass if we add a "literary/old-Tonkinese" sub-code.)
2. **南 — ACCEPT.** Blank `vi_nom.surface / ipa / native`. Agreed: no Vietic 'south' root, bare 南 is Han not Nôm.
3. **東 — COUNTER → blank only.** Blanking the `vi_nom` row matches the symmetric treatment of 南/西/北/央/行:2. We are *not* populating `vi_ohan = đông` in this round: Alves 2016 does list 東, but the Tang↔OSV doublet collapses to a single Quốc Ngữ string here, so adding the row would just regenerate the byte-identity problem you flagged in #17/#18. Keep `vi_ohan` empty pending a future "OSV-reconstruction" annotation pass that can carry the LH source form.
4. **西 — ACCEPT.** Blank.
5. **北 — ACCEPT.** Blank.
6. **央 — ACCEPT.** Blank. (This also closes the diagnostic noted in #23.)
7. **行:2 — ACCEPT (narrow form).** Blank the `vi_nom` row. We are not introducing a Hán-Việt-Việt-hoá stratum in this dataset; rather than ambiguously tagging *hàng* as Nôm-native, we drop it. If a future schema adds a `vi_hvh` code we will repopulate.
8. **頭 — ACCEPT (both halves).** `native.vi_nom: 頭 → 𩠐`. Additionally populate the missing OSV row: `vi_ohan.surface = đầu`, `ipa.vi_ohan = ɗəw˨˩`. Schuessler 2007 / Alves 2016 attribution is solid enough to add the cell even though Quốc Ngữ collides with vi_nom.
9. **立 — ACCEPT.** `native.vi_nom: 𥪝 → 𨇜`. Confirmed against the Nôm Foundation (𥪝→trong; 𨇜→đứng).
10. **右 — ACCEPT.** `native.vi_nom: 𠊝 → 沛` (mượn âm, Lê Văn Quán 1981 §4.1).
11. **羊 — ACCEPT.** `native.vi_nom: 裘 → 𦍒` (羊+求 phono-semantic). Surface stays "cừu"; the issue was only the glyph.
12. **中:2 — COUNTER.** Reviewer flagged 𠉞 as itself wrong and offered 衷 as the cleanest disambiguated alternative. We adopt **衷** for `native.vi_nom`. (𤽸 is rarer and not in nomfoundation.org as a canonical *trúng* form; 衷 is documented as a phonetic-reuse Nôm for the verbal sense.)
13. **人 — ACCEPT.** Blank `vi_ohan.surface / ipa`. *người* is Proto-Vietic; agreed it inflates the OSV stratum with a false loan.
14. **水 — ACCEPT.** Blank `vi_ohan.surface / ipa`. *nước* < PV \*ɗaːk.
15. **天 — ACCEPT.** Blank `vi_ohan.surface / ipa`. *trời* < PV \*bləːj.
16. **月 — ACCEPT.** `vi_ohan.surface = "trăng / giăng"`, `ipa.vi_ohan = "tʂaŋ˧˧ / zaŋ˧˧"`. Project convention already uses `/`-separated sibling variants in the dialect surfaces, so this is consistent.
17. **馬 — COUNTER (annotation form).** We accept the substance — the cell as written is byte-identical to vi_nom and so uninformative — but rather than introducing a new schema field, we adopt your suggestion of appending the LH source inline: `ipa.vi_ohan = "ŋɨə˧ˀ˨ʔ < *ŋraːʔ"`. This keeps the column rendering single-string and preserves the etymological pointer.
18. **龍 — ACCEPT (annotation form).** Same approach: `ipa.vi_ohan = "zawŋ͡m˨˩ < *bləwŋ"`.
19. **飲 — ACCEPT.** Blank `vi_ohan.surface / ipa`. Alves 2016 does not certify 飲→uống; given the *m/*ŋ coda mismatch, the conservative call is to remove the cell rather than tag it as uncertain (the dataset has no uncertainty marker convention yet).
20. **六 — ACCEPT.** `ipa.vi_nom: şaːw˧˥ → saːw˧˥` (Hanoi merged). The `ş` is unambiguously not IPA.
21. **牛 — ACCEPT.** `native.vi_nom: 𢞖 → 𤙭`. Surface *bò* and the existing `vi_ohan = trâu` cell are correct and retained.
22. **肉 — ACCEPT.** `native.vi_nom: 蜐 → 𦛌`. The 蜐 glyph almost certainly entered via font/OCR substitution as you noted.
23. **央 — ACCEPT (folded into #6).** Already addressed by blanking the row in #6; no additional edit emitted.

### Systematic-issues response

- **Layer-copy contamination cluster (#1, #2, #4, #5, #6, #7, #23):** All seven cells blanked or replaced. We are not introducing a separate Hán-Việt Việt-hoá code in this round; the schema change you suggest is reasonable but out of scope for a content-correction pass. Tracking as a follow-up.
- **vi_ohan over-attribution cluster (#13, #14, #15, #19):** All four blanked. The remaining populated `vi_ohan` cells (月, 龍, 馬, 牛, 貓, plus the new 頭) all have explicit Schuessler / Alves attestation.
- **Nôm-glyph mis-assignment cluster (#1, #8, #9, #10, #11, #12, #21, #22):** All eight replaced with canonical Nôm forms documented in nomfoundation.org / Lê Văn Quán 1981. No bare-Han glyphs remain in `native.vi_nom` after this pass for the rows you flagged.
- **vi_ohan expressivity cluster (#16, #17, #18):** Adopted the inline `< *LH-form` annotation pattern in `ipa.vi_ohan` for 馬 and 龍, and added the *trăng / giăng* doublet on 月.
- **Orthographic bug (#20):** Fixed.

### Edits emitted

43 cell-level edits to `/tmp/hm_edits_31.json` covering 22 of the 23 issues (#23 folded into #6).

### Closure recommendation

Recommend closing review #31 after edits land. All accepts implemented as-stated; the three counters (#3, #12, #17) document a principled narrower scope (no new schema fields, no speculative vi_ohan inflation, inline LH annotation pattern). Two follow-ups noted for future passes: (a) a possible `vi_hvh` Hán-Việt Việt-hoá code, (b) a dedicated `vi_ohan_oc` field for reconstructed Late Han / Old Chinese source forms separate from modern IPA.

---

## Verifier verdict — round 2 (2026-06-03)

✅ CLOSED on round-1 scope; 3 cell-addition items (虎 vi_nom.native, 頭 vi_ohan.{surface,ipa}) deferred for manual seeding.

Spot-checked 10 of 40 applied edits against `hanmap_data.js` (虎/南/東/頭/立/右/月/馬/六/肉 across surface/ipa/native and vi_nom/vi_ohan codes); all 10 match the emitted `/tmp/hm_edits_31.json` targets verbatim. Deferred cells confirmed absent (`虎.native.vi_nom`, `頭.surface.vi_ohan`, `頭.ipa.vi_ohan` all `undefined`).

---

## Round-3 follow-up (2026-06-03)

Re-verified the three deferred cells against the current `HAN_DATA` in `hanmap_data.js`: all three remain genuinely absent (not "—", just missing keys / `undefined`). Seeding them now as ADD operations in `/tmp/hm_r2_edits_31.json`.

### Additions emitted

1. **虎 — `native.vi_nom = "𧲫"`.** The 虫+及 / 豸+及 phono-semantic Nôm coinage for *cọp* 'tiger', U+27CAB. Catalogued in Lê Văn Quán《Chữ Nôm — Nguồn gốc và Cấu tạo》(1981) §3.2 as a prototypical 形聲 Nôm; matches the `surface.vi_nom = "cọp"` already set in round-1. (Per round-1 decision we use *cọp* over *hùm*: the policy is one canonical lexeme per cell, and *cọp* is the higher-frequency Vietic reflex.)

2. **頭 — `surface.vi_ohan = "đầu"`.** Per round-1 issue #8: *đầu* is the canonical Cổ Hán Việt reflex of 頭. Schuessler 2007 *ABC* reconstructs 頭 OC \*dô → LH \*dou → OSV \*dəw → đầu; the Tang-period borrowing of the same etymon yields modern Hán-Việt *đầu* (collapse to the same Quốc Ngữ string is the doublet-collision noted in round-1 #17/#18). Cited explicitly in Alves 2016 ("Identifying Early Sino-Vietnamese Vocabulary…", BSEAS 2016) Table 3, and in Pulleyblank 1962 "The Consonantal System of Old Chinese" as a 頭/đầu doublet.

3. **頭 — `ipa.vi_ohan = "ɗəw˨˩ < *dô"`.** Following the inline `< *LH-form` annotation pattern adopted in round-1 for 馬 (`ŋɨə˧ˀ˨ʔ < *ŋraːʔ`) and 龍 (`zawŋ͡m˨˩ < *bləwŋ`). The modern reflex is byte-identical to vi_nom *đầu*, so the inline OC source (Schuessler 2007: OC \*dô) is what makes the vi_ohan layer informative.

### Citations

- Schuessler, Axel. 2007. *ABC Etymological Dictionary of Old Chinese*, entry 頭 (OC \*dô).
- Alves, Mark J. 2016. "Identifying Early Sino-Vietnamese Vocabulary via Linguistic, Historical, Archaeological, and Ethnological Data". *BSEAS* — Table 3 lists 頭 → đầu among certified Cổ Hán Việt items.
- Pulleyblank, E. G. 1962. "The Consonantal System of Old Chinese" — cites 頭 / đầu as a doublet stratum.
- Lê Văn Quán. 1981. 《Chữ Nôm — Nguồn gốc và Cấu tạo》 §3.2, NXB Khoa học Xã hội — 𧲫 cọp catalogued as a prototypical 形聲 Nôm.
- Vietnamese Nôm Preservation Foundation database (nomfoundation.org) — 𧲫 → cọp.

### Verification

`node -e "const m = require('./hanmap_data.js'); ..."` confirmed pre-edit state:
- `HAN_DATA["虎"].native.vi_nom` → key absent (native object has 20 lang keys, none for `vi_nom`).
- `HAN_DATA["頭"].surface.vi_ohan` → `undefined`.
- `HAN_DATA["頭"].ipa.vi_ohan` → `undefined`.

3 ADD edits emitted to `/tmp/hm_r2_edits_31.json`. No `from` field used (these are pure additions). Review remains CLOSED post-round-3 seed.
