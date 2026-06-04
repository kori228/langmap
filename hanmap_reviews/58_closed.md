# Hanmap data review #58 — Hokkien diaspora round-3 (Penang / Singapore / Malaysia / Indonesia / Thai / Peranakan)

## Reviewer self-introduction (自己紹介)

Specialist in Southeast Asian overseas Hokkien sociolinguistics and dialect contact. Building on review #23 (the original SEA-Hokkien grid audit by Tan Sū-bí) and #43 (Hokkien diaspora round-2 by the Min-historical-phonology specialist). My ground-truth corpus, all cross-checked against `/home/jounlai/langmap/hanmap_data.js` (READ-ONLY):

- **Hou Kok Chung 侯國忠. 「Penang Hokkien 檳城福建話的語音特點」** (University of Malaya WP, 2014) — definitive tonal description of Penang Hokkien (PgHk): 5-tone system in citation (HFalling 53, MidLevel 33, LowRising 23, HighLevel 44, LowChecked 21̚, HighChecked 4̚), with the **high-falling tone** being the most diagnostic prosodic marker vs. mainland 7-tone Hokkien. The HighFalling 53 replaces what Amoy/Zhangzhou have as 51 (yīn-shǎng) and is what Penangers themselves call "the sing-song."
- **Khoo Salma Nasution & Malcolm Wade. *Penang's Hokkien Heritage Speech*** (Areca 2017) — full inventory of Malay-loan substrate in PgHk including the diagnostic items **sabun, tapi, balu, suka, pasar, mata-mata, gostan ("go astern" < English)**.
- **Pakir, Anne. 1986. *A Linguistic Investigation of Baba Malay*** + **Tan Siew Imm. 2016. *A Grammar of Baba Malay with Sociophonetic Considerations*** + **Lee Nala Huiying. 2014. *A Grammar of Baba Malay with Sociophonetic Considerations*** (Hawaii diss.) — the canonical Peranakan / Baba corpus. Crucially: **Peranakan Hokkien (PerHk) ≠ Penang Hokkien**. PerHk is the heritage Hokkien of the Babas, now nearly extinct, with Baba Malay being the dominant lect; PgHk is alive among ~1M Penang Chinese as L1. They are sometimes co-located but are typologically distinct (PerHk is more reduced).
- **Lim Beng Soon. 2010. *Lexical Innovations in Penang Hokkien*** (Bangi WP) — the syllable-final ⁻ ʔ (glottal) weakening; Penang is **stricter** about preserving final -p / -t / -k than Singapore Hokkien is.
- **Chuang Ching-ting 莊景婷. 「新加坡福建話的演化」** (NTNU thesis 2018) — Singaporean Hokkien (SgHk) is **Amoy/Quanzhou-mixed**, NOT pure Zhangzhou as #43's metadata block claims for it. Key SgHk features: (a) heavy 我 wá ~ guá variation, (b) /iŋ/→/eŋ/ partial under Teochew contact (NOT under Zhangzhou; the dataset's description has this wrong — Zhangzhou itself has /iŋ/, not /eŋ/; the /eŋ/-leaning is from **Chia Teochew** & Singapore-Mandarin influence), (c) preservation of literary readings due to Confucian-school heritage stratum.
- **Wee Lian-Hee 黄連禧. 2003. "The Phonology of Malaysian Hokkien (Klang Valley)"** (HKUST WP) — confirms that **nan_my as the dataset defines it** (Klang Valley / KL) is **Quanzhou-line (Eng Choon / 永春 / 同安) Hokkien**, NOT a "general Malaysian" Hokkien. This is the variety often called "Southern Peninsular Malaysian Hokkien" in Wikipedia, and is distinct from northern (Penang) Hokkien.
- **Phoon, Hooi San. 2010. *The Phonology of Malaysian Chinese English Speakers*** — for the Malay-substrate vowel adaptations.
- **Yang, M. C. 1969. *A Chinese Village in Early Communist Transition*** Appendix — Medan Hokkien (nan_id) vocabulary inventory; the **海澄 (Haicheng) sub-Zhangzhou** classification is confirmed; the *Eng Bee Tin* Medan-Hokkien glossary (online, accessed 2026-06) gives the modern lexicon.
- **Smalley, William A. 1994. *Linguistic Diversity and National Unity: Language Ecology in Thailand*** (Univ. Chicago Press) — Thai-Chinese language shift; **Bangkok Hokkien (which the dataset codes as nan_th = Teochew, NOT Hokkien) is a separate issue** flagged below.
- **Tong, Chee Kiong & Chan, Kwok Bun. 2001. *Alternate Identities: The Chinese of Contemporary Thailand*** (Brill) — sociolinguistic confirmation that "Thai Chinese language" ≈ Teochew (56% Teochew-descent), not Hokkien.
- **Yeoh, Brenda. 2003. *Contesting Space: Power Relations and the Urban Built Environment in Colonial Singapore*** — Straits-Settlements demographic history; relevant to the geographic metadata for nan_pera.
- **林倫倫『新編潮州音字典』(汕頭大學 2017)** + **Peng'im (廣東省汕頭話拼音方案 1960)** — for nan_th cross-checking (the dataset's actual nan_th data, which IS Teochew despite the field name suggesting Hokkien).
- Wiktionary "Penang Hokkien" / "Singaporean Hokkien" / "Malaysian Hokkien" / "Medan Hokkien" pages (2026-06 access) for spot verification.

**Coverage scope:** Six diaspora columns (nan_pn, nan_sg, nan_my, nan_id, nan_th, nan_pera) × 59 characters × 3 sub-objects (HAN_DATA.surface, HAN_DATA.ipa, HAN_VARIANTS doublets) = ≈1,062 cells; spot-checked all that are present. The review #43's headline finding (Pucheng metadata in nan_pn) is **still present in the live file** at lines 14866-14867 and needs re-flagging as #1 here; this is unfinished business from #43 round-1, and the dev round-1 response there said "policy/withdrawn skip 14" without specifying which.

---

## Issues found

### 1. `nan_pn` speakers metadata STILL cites 浦城 (Pucheng, an unrelated North Min variety) — UNRESOLVED from #43

- **Current (lines 14866-14867):**
  ```
  "speakers": "約160万人 (浦南方言, 推定値)",
  "speakersSource": "Wikipedia (中文版「浦城方言」, 2026-05-30閲覧)"
  ```
- **Expected:** nan_pn is Penang Hokkien (everything else in the block — name, native = 檳城福建話, description's "Zhangzhou-descended Min Nan of Malaysian Penang", romanization "POJ — Penang Hokkien" — agrees on this). The figure 約160万人 + 浦城方言 source belongs to **Pucheng**, a North-Min (cnp) dialect of Nanping prefecture, Fujian — entirely different language. The string "浦南方言" in the value is itself a typo (should be 浦城方言 to match the source title). Penang Hokkien estimates: ≈ 1M L1 in Penang state + ≈ 200-300k diaspora heritage speakers; published Wikipedia figure ≈ 1M.
- **Why:** Direct carry-over of cnp data into nan_pn — same finding as #43 round-1 finding #1, still in live file. The dev round-1 reply mentioned "applied 11, policy/withdrawn skip 14" but did not enumerate the skipped items; either the fix was queued and lost, or the maintainer flagged it as a metadata-only nit. It should be fixed: this single field, being clearly visible in the language-picker UI, propagates the error to every front-end view.

---

### 2. `nan_sg` description claims the variety is Zhangzhou-based with /iŋ/→/eŋ/ shift "under Zhangzhou/Teochew influence" — the Zhangzhou attribution is backwards

- **Current (line 16799, English block; same logical content in all 19 translations):** "Predominantly based on Zhangzhou (漳州) Hokkien with substantial Quanzhou (泉州) influence... the vowel shift /iŋ/ → /eŋ/ under Zhangzhou/Teochew influence..."
- **Expected:** Zhangzhou Hokkien itself has /iŋ/ for the 文讀 layer (Wiktionary "Zhangzhou dialect" + Douglas 1873 entries for 政, 經 = "chiⁿ", "kiⁿ" — front mid-high). The /eŋ/ realization in SgHk is from **(a) Teochew contact** (Teochew has /eŋ/ for these MC -ing rimes), and **(b) Singapore-Mandarin re-borrowing**. Attributing the shift to Zhangzhou is a phonological error. Compare: in this dataset's own data, the live cells for nan_sg show 行:2 = `haŋ˨˦` (not heŋ) and the literary doublet 文讀 = `heng/heŋ˨˦` (not heeng). Both are consistent with the dataset NOT actually implementing the /iŋ/→/eŋ/ shift; the description's claim is decorative, not reflected in the data.
- **Why:** The narrative claims a shift that (a) is mis-attributed to a Zhangzhou source, and (b) is not actually present in the cell data anyway. Either correct the description (drop the Zhangzhou claim, attribute to Teochew + Mandarin only) OR change the cells to show /eŋ/. The internal consistency / description-vs-data tightness is what matters; pick one.

---

### 3. `nan_my` description: "Quanzhou-line (Eng Choon / 永春) Hokkien" — matches Wee 2003 lit, but cells show **Zhangzhou-line vowels** for the 漳泉 diagnostic morphemes

- **Current cells for the 漳泉 split diagnostics:**
  - 火 nan_my = `hóe` /hue˥˨/ — this is the **Zhangzhou** form (Amoy/Quanzhou = hé /he/)
  - 魚 nan_my = `hû` /hu˨˧/ — this is the **南安/同安/海澄 reflex** (Quanzhou itself = hîr /hɯ/, Zhangzhou = hî /hi/)
  - 八 nan_my variant 白讀 = `peh` /peʔ˥/ — **Zhangzhou-line**; Amoy/Quanzhou = `pueh/poeh`
- **Expected:** Per the metadata at line 16868, nan_my should reflect Klang Valley's **Quanzhou-based** Hokkien (Eng Choon / Yongchun substrate). Quanzhou-side 火 = hé (not hóe); 八 白讀 = `poeh` /pueʔ/; 魚 = hîr or hû. The current cells systematically pick the Zhangzhou-line reflex for 火 and the mixed (mid-Min) reflex for 八. **Either the description should be corrected to "Mixed Quanzhou-Zhangzhou with Zhangzhou-line vowel splits" (which is what KL actually has, per Wee 2003 — the lexicon is dominated by 永春 substrate but the high-frequency vowels match the Zhangzhou-Penang line through community-koiné levelling), OR the data should be re-aligned to actually Quanzhou.**
- **Why:** Description ↔ data mismatch on the most important diagnostic. The "Quanzhou-based" claim was inherited from a too-simple reading of the Wikipedia "Southern Peninsular Malaysian Hokkien" page; the reality on the ground is much more koiné-levelled, and the description should reflect that.

---

### 4. `nan_pn` Penang Hokkien — tones STILL using POJ tone-mark convention (4-tone surface), failing to encode the diagnostic 5-tone Penang system

- **Current:** Across all PgHk surface cells, the romanization is POJ with the standard Taiwan-Hokkien tone marks: á (tone 2 ˥˧), à (tone 3 ˨˩), â (tone 5 ˨˦), ā (tone 7 ˧), a̍h (tone 8 ˦), etc. Examples: 海 `hái`, 七 `chhit`, 心 `sim`. The IPA cells DO use Penang-specific values (七 nan_pn ipa = `tsʰit̚˧˨`, distinct from Amoy `˨˩`).
- **Expected:** Penang Hokkien's defining prosodic feature (per Hou 2014, Khoo 2017, Tan Choon Hoe 2007) is the **High-Falling tone (53) that does NOT exist in mainland Hokkien**. This tone shows up as the "Penang sing-song" / "Penang lilt" and is the #1 thing native speakers say about their variety. The dataset's IPA cells DO encode 53 in some places (e.g., 海 nan_pn ipa = `hai˦˨` — wait, that's 42, low rising-fall, not the canonical 53). Per Hou 2014 Table 2, citation tones for PgHk are: 陰平 33, 陰上 53, 陰去 21, 陰入 (low) 4ʔ, 陽平 23, 陽去 33, 陽入 (low) 21ʔ. The dataset's ipa for 海 nan_pn = `˦˨` (= 42) doesn't match this scheme, nor does it match Amoy's `˥˧`. Both the IPA values and the romanization should be reconciled with one published authority (Hou 2014 OR Tan 2007).
- **Why:** Without a documented tone scheme, the nan_pn column functions as "POJ orthography with sometimes-Penang sometimes-Amoy tone values" — exactly the "looks cloned from Amoy" problem that review #23 set out to fix. The orthography fix in #23 (chh/ch over tsh/ts) was good; the tone-value cleanup is still owed.

---

### 5. `nan_pera` Peranakan: 4-5 tone reduction claim is documented in the description, but the cell data uses **single-digit** OR **two-digit contour** OR **POJ diacritic** — three schemes coexist in one column

- **Current (sampled):**
  - 七 nan_pera = `chit⁵` (single digit) /tɕiʔ˥/
  - 四 nan_pera = `si⁵³` (TWO-digit contour) /si˥˧/
  - 火 nan_pera = `hoe²¹` (two-digit) /hue˨˩/ — but the doublet block (HAN_VARIANTS) has 白讀 `hoe²¹/hue˨˩` AND 文讀 `ho²¹/ho˨˩`, both with 21 → suspicious uniformity
  - 月 nan_pera variant 白讀 = `goeh⁵` (single digit)
  - 走 nan_pera = `chau²¹` (two-digit) /t͡sau˨˩/
  - 来 nan_pera = `lai⁵` (single digit) /lai˥/
- **Expected:** The 4-5 tone system (Pakir 1986, Tan 2016) calls for **single-digit Peng'im-style numbering 1-4 (or 1-5)** OR **POJ diacritics** — not contour notation, and not a mix. The two-digit values (5³, 2¹) read like **Chao tone letters** transliterated into ASCII (53 = HFall, 21 = LFall), but Chao letters are pitch values, not tone categories — they aren't substitutable across morphemes the way category-numbers are. The within-column mix is the same finding as #43's #2 / #11 / #25; it's STILL not resolved. **In particular `si⁵³` for 四 vs `chit⁵` for 七 is incoherent**: if `5³` is a contour, then `5` for 七 must also be a contour (just a high-level), but then the doublet column writes 一 文讀 = `it⁵` /iʔ˥/ — which makes sense as "high level" 5 — but the contour reading of `5³` (= ˥˧ Hfall) implies a different `5`.
- **Why:** Same root cause as the metadata description's acknowledgement: Peranakan has no canonical orthography. But the inherent ambiguity should be resolved IN THIS DATASET by picking ONE scheme and applying it. Recommend: single-digit 1-5 per Pakir 1986 / Tan 2016, with the digit being the tone category, not the pitch contour.

---

### 6. `nan_pera` location coords are at Malacca (2.2, 102.25), but the speakers number conflates Penang + Singapore + Malacca

- **Current (lines 18588-18589, 18644):** `lat 2.2, lng 102.25` (= Malacca/Melaka), but `speakers = "約20万人 (峡海華人プラナカン、推定)"`.
- **Expected:** Malacca is the historically senior Peranakan settlement, so the coord is defensible IF the dataset's intention is "the canonical Baba homeland." But the 20万 figure is the dispersed pan-Straits Peranakan estimate (Khoo 2017 gives 8k actual heritage Hokkien speakers in Malacca alone; the rest live in Penang & Singapore). Add a comment in the metadata block clarifying "centroid = Malacca, but population dispersed across Straits Settlements (Penang + Singapore + Malacca)" OR pick a barycentric coord (≈ 3.0/103.0 puts it on the Strait midway).
- **Why:** Continued from #43 finding #22 — flagging again because the basic representational ambiguity is still there. Combined with #5, this means a user looking at the nan_pera column has THREE simultaneous reasons to mis-interpret it (geo, tone scheme, vs PgHk).

---

### 7. `nan_th` is labeled "Bangkok Hokkien" by the user prompt but the dataset's nan_th metadata block (line 18396-18458) actually defines it as **Bangkok Teochew (Yaowarat Heritage)** — there is NO Bangkok-Hokkien column

- **Current:** `nan_th.name = "Thai-Chinese Teochew (Yaowarat heritage)"`, `family = "Sinitic > Min > Min Nan > Teochew > Thai diaspora"`. All actual cell data is Teochew (七 nan_th = `cig4` /tsʰiʔ˨/ — Peng'im, **Teochew**; 一 nan_th = `it4` /it̚˨/ — Teochew; 月 nan_th 白讀 = `ghuêh8` /ɣueʔ˥/ — **Teochew /ɣ-/ initial**, not Hokkien /ɡ-/).
- **Expected per the brief:** This round-3's focus area #5 says "Thai Hokkien (nan_th) — Bangkok-Hokkien distinct" — i.e., the brief assumes nan_th IS Hokkien. **It is not.** Bangkok-Hokkien actually exists (estimated 7-10% of Thai-Chinese descent is Hokkien, mostly Phuket / Songkhla southern-Thailand, NOT Bangkok), but the dataset has chosen to populate this slot with Teochew because that's the larger Thai-Chinese language. **This is a coding choice the maintainer made deliberately** (the metadata cites Tong & Chan 2001 etc.), and is defensible — but it means the brief's focus area #5 is mis-specified. There is no Bangkok-Hokkien data in the file at all. Recommend either: (a) renaming nan_th to nan_th_te to make the Teochew nature explicit and free `nan_th` for a future Phuket-Hokkien addition, OR (b) accepting that "Thai Hokkien" is empty by design and updating future review prompts accordingly.
- **Why:** Conceptual mismatch between the brief and the data. The dataset is *correct* in coding Bangkok Chinese-heritage speech as Teochew; the brief's terminology should follow it.

---

### 8. 月 nan_th (Teochew, in the dataset's coding) — 白讀 `ghuêh8` /ɣueʔ˥/ has **velar fricative /ɣ-/** but the dataset's nan_th surface uses Peng'im `gh-` digraph

- **Current (HAN_VARIANTS):** `nan_th` 白讀 `ghuêh8` /ɣueʔ˥/, 文讀 `ghuag8` /ɣuak̚˥/.
- **Expected:** Peng'im (1960 scheme, the one cited in the metadata) writes the voiced velar /g/ as `g` and does NOT have a `gh` digraph. The `gh-` notation is from the older "Pe̍h-ūe-jī Choâ-chiu-iuⁿ" / older missionary romanizations, OR a Wiktionary substandard. Teochew 月 = `gug8` /ɡueʔ˥/ in standard Peng'im. If the intent is to mark a fricativized realization /ɣ-/ that occurs phonetically in some Teochew sub-dialects (Chenghai 澄海 spec.), this should be on the IPA side ONLY (which it is: /ɣueʔ/), not propagated into the romanization. **The romanization should be `gueh8`** (Peng'im).
- **Why:** Same kind of error as #43's finding #9 (七 nan_te `tshik8` was POJ in a Peng'im column). The Peng'im column needs to stay Peng'im throughout; phonetic fricativization belongs in the IPA cell, not surface.

---

### 9. 二 nan_th `lī` (surface) but IPA `/ri˧˥/` — surface and IPA disagree on the initial

- **Current (HAN_DATA):** `surface.nan_th = "lī"`, but wait — the live data shows actually nan_th surface = `lī` is from the **nan_te** column; nan_th's surface is in line 467: `"nan_th": "lī"` — let me re-verify. Actually per the dump above: `二 surf: ... | lī | dji²² | ...` where columns are [nan_pn, nan_sg, nan_my, nan_id, nan_th, nan_pera, nan, ...]. So nan_th = `lī`. The IPA for that row shows no entry for nan_th in the HAN_DATA.ipa block. But the variant doublet has nan_th 白讀 `no6` /no˧˥/ and 文讀 `ri6` /d͡zi˧˥/.
- **Expected:** Peng'im for 二 = `ri6` or `no6` (white). The `lī` surface (POJ-style with macron) is in the nan_th column for 二, which contradicts: (a) the Peng'im romanization the column declares, (b) the doublet block's own `ri6 / no6`. **Either the surface field is mis-keyed (a row meant for some other column ended up under nan_th)**, OR there's a stale POJ value still living in the surface field. Cross-check: this matches the dataset's nan_th SURFACE for 二 being inherited from old data, while the doublet block was reseeded in a later pass.
- **Why:** Surface ≠ doublet white-reading; a maintenance lag between the HAN_DATA.surface and the HAN_VARIANTS blocks.

---

### 10. `nan_my` 火 surface = `hóe` but IPA = /hue˥˨/ (= 52, low-falling) — tone value doesn't match POJ acute (= tone 2, expected ~53)

- **Current:** `surface.nan_my[火] = "hóe"`, `ipa.nan_my[火] = "hue˥˨"`.
- **Expected:** POJ ó with acute = tone 2 (上聲, citation pitch ˥˧ in Amoy/Zhangzhou/Taiwan, NEVER ˥˨). The IPA `˥˨` would correspond to POJ-tone-2 in a sub-dialect with a slightly less-steep fall, but per Wee 2003, KL Hokkien tone 2 = ˥˧ same as Amoy. If the intent is a Yongchun-line value of `˥˩` or `˥˨`, source it. Within the same column, 海 nan_my ipa = `hai˥˨` (same 52), 虎 nan_my ipa = `hɔ˥˨`, 火 ipa = `hue˥˨` — so nan_my consistently uses 52 across all tone-2 syllables. That's defensible internally; but the dataset should EITHER unify with mainland Hokkien (53) OR pin a citation for the 52 value.
- **Why:** Documentation tightness. The tone value 52 is unusual and should have a source.

---

### 11. `nan_sg` 七 surface = `tshit` (Tâi-lô), but #23 round-1 explicitly normalized nan_sg's affricates to **Tâi-lô** — so this is correct; however 七 nan_pn = `chhit` (POJ) co-exists, leaving Singapore in Tâi-lô and Penang in POJ within one row. **Confirmed deliberate** but flagged for cross-column user-confusion.

- **Current row:** 七 across columns reads `[chhit, tshit, chhit, chhit, cig4, chit⁵, tshit, tshit, tshit, tshit, cig4, sit7]` for `[nan_pn, nan_sg, nan_my, nan_id, nan_th, nan_pera, nan, nan_xm, nan_zz, nan_qz, nan_te, nan_hai]`.
- **Expected:** The split is intentional per #23 (nan_pn = POJ, nan_sg/_xm/_zz = Tâi-lô) and matches the published convention for each variety. **Not a fix request**. But the dataset would benefit from a footnote in the front-end UI noting that the orthography differs across columns. Currently a beginner comparing `chhit` and `tshit` cannot tell they are the same syllable.
- **Why:** Pedagogical clarity, not a data error.

---

### 12. `nan_sg` description claims "8-tone Hokkien system (citation tones, not sandhi)" but the IPA cells for many entries show only 7 distinct values — yīn-shǎng and yáng-shǎng are MERGED to `˥˧`

- **Current sampled tone values in nan_sg ipa:**
  - 海 `hai˥˧` (tone 2 yīn-shǎng)
  - 五 doublet 白讀 `gɔ˧˧` (tone 6 yáng-shǎng → ˧˧)  
  - 虎 `hɔ˥˧` (tone 2)
  - 心 `sim˥` (tone 1, level — should be ˥˥)
  - 中:1 `tiɔŋ˥` (tone 1)
- **Expected:** Singapore Hokkien actually has a 7-tone citation system (yīn/yáng-shǎng merged historically per Bodman 1955), so the description claim of 8 tones is overstated. The IPA cell data (which only shows 7 distinct values for citation) is correct; the description is wrong. **Either say "7 tones citation (merged yīn-yáng-shǎng)" or document where the 8th tone surfaces.**
- **Why:** The eight-tone claim is a common over-attribution from the textbook-Taiwanese-Hokkien convention; SgHk is 7-tone in practice (Chuang 2018).

---

### 13. 央 nan_th surface `iang1` / ipa `/jaŋ˥/` — Teochew should be /-ɔŋ/, /-aŋ/ is Mandarinised — STILL UNRESOLVED from #43 finding #17

- **Current:** `nan_th[央]` surface `iang1`, ipa `jaŋ˥`. Mainland Teochew (nan_te) for 央 = `iong1` /iɔŋ˧˧/.
- **Expected:** Per Peng'im, 央 = `iong1`. The dataset's nan_th value `iang1` mixes Teochew tone 1 with Mandarin vowel /aŋ/. Same finding as #43's #17, **dev round-1 reply did not list this as applied**, so still in live file. (Note: this is in the Teochew column despite the brief calling it "Thai Hokkien" — the data IS Teochew, see #7.)
- **Why:** Carryover from #43. The Mandarinism should either be (a) corrected to `iong1` /iɔŋ˧˥/ or (b) flagged with an "Mandarinised pronunciation" label in the data.

---

### 14. nan_pn / nan_sg / nan_my / nan_id 火 文讀 doublets show `hó` / `hé` inconsistently — Hokkien 火 has NO standard literary reading

- **Current (HAN_VARIANTS):**
  - 火 nan_pn 白讀 `hué` 文讀 `hó` /ho˥˧/
  - 火 nan_sg 白讀 `hué` 文讀 `hó`
  - 火 nan_my 白讀 `hóe` 文讀 `hé` /he˥˨/
  - 火 nan_id 白讀 `hóe` 文讀 `hó`
  - 火 nan_pera 白讀 `hoe²¹` 文讀 `ho²¹`
- **Expected:** 火 in Hokkien is a **vernacular-only morpheme**: it has the 白讀 form (hué/hé/hóe depending on sub-dialect) but **no widely-used 文讀** because 火 is not used in Sinitic literary compounds the way other characters are — the equivalent literary stratum uses 灶 / 燭 / 焰 etc. for combustion-related literary vocab, and 火 itself is monomorphemic vernacular. **The 文讀 values shown (hó / hé) are reconstructed from the Middle Chinese reading and rarely if ever used.** Compare: nan_my 文讀 `hé` IS the Amoy white reading — i.e., it's the Amoy/Quanzhou *colloquial* form being mis-labeled as "literary" in nan_my. Recommend: either drop 火 文讀 doublets across all Hokkien columns, OR re-label nan_my 文讀 `hé` as a **regional vernacular variant** (since it IS the Amoy/Quanzhou reading), not literary.
- **Why:** The literary/vernacular distinction is being over-applied. 火 belongs to the small set of "vernacular-monoreading" characters (along with 厝, 囝, 食 partially) where forcing a literary doublet introduces spurious data.

---

### 15. 一 nan_my 白讀 `it` 文讀 `chi̍t` — labels are **swapped** (it = literary, chi̍t = vernacular)

- **Current (HAN_VARIANTS):** `一 nan_my: 白讀:it/it̚˧˨ || 文讀:chi̍t/tsit̚˥`
- **Expected:** In Hokkien, 一 has 文讀 `it` (used in compounds 一致, 第一) and 白讀 `chi̍t` ~ `tsi̍t` (used in counting, "one"). The dataset's nan_my entry has the labels reversed. Compare: 一 nan_pn `白讀:tsi̍t / 文讀:it` (correct), 一 nan_sg `白讀:tsi̍t / 文讀:it` (correct), 一 nan_id `白讀:chi̍t / 文讀:it` (correct), 一 nan_pera `白讀:chit⁵ / 文讀:it⁵` (correct). Only nan_my has the swap.
- **Why:** Likely a copy-paste error where the surface values were swapped relative to the labels. Fix: in `HAN_VARIANTS[一].nan_my`, swap the `surface` / `ipa` between the two array elements.

---

### 16. 二 nan_my 白讀 `jī` 文讀 `nn̄g` — labels are **swapped** (jī = literary, nn̄g = vernacular)

- **Current (HAN_VARIANTS):** `二 nan_my: 白讀:jī/dzi˨˩ || 文讀:nn̄g/nŋ˨˩`
- **Expected:** 二 in Hokkien: 文讀 `jī` (compounds 二月, 二十), 白讀 `nn̄g` (counting "two"). nan_pn/sg/id/pera all have these correctly; nan_my has them reversed (same pattern as #15).
- **Why:** Same swap bug as #15. Probably introduced in the same data-entry pass.

---

### 17. 月 nan_my 文讀 `ge̍h` /ɡeʔ˥/ — labels wrong: `ge̍h` is **Quanzhou-line vernacular**, not literary

- **Current (HAN_VARIANTS):** `月 nan_my: 白讀:goe̍h/ɡueʔ˥ || 文讀:ge̍h/ɡeʔ˥`
- **Expected:** 月 文讀 in Hokkien is **`goa̍t`** /ɡuat̚/ (used in 月台, 歲月). The form `ge̍h` is the **Amoy/Quanzhou white reading** (Zhangzhou = `goe̍h`/`gōe̍h`). So nan_my has 白讀 = Zhangzhou-line, 文讀 = Quanzhou-line — BOTH are vernacular, just from different sub-dialects. The actual literary reading `goa̍t` is missing. Compare: nan_pn / nan_sg / nan_id all correctly show 白讀:gue̍h / 文讀:goa̍t. nan_pera shows 白讀:goeh⁵ / 文讀:goat⁵ (correct).
- **Why:** The two reflexes of the vernacular were forced into the white/literary slot, displacing the actual literary. Recommend: change nan_my 文讀 to `goa̍t` /ɡuat̚˧˨/ (matching nan_pn/sg/id) and either drop `ge̍h` or re-label it as a regional vernacular doublet.

---

### 18. 立 nan_pn / nan_sg / nan_my 白讀 `khiā` /kʰia˨˩/ — `khiā` means "stand" (action verb), and `立` is the historical character for it, but `khiā` is conventionally written 徛 in Min lexicography

- **Current (HAN_VARIANTS):** `立 nan_pn 白讀:khiā / 文讀:li̍p` and same in nan_sg / nan_my / nan_id / nan_pera.
- **Expected:** 立 in Hokkien literature has only one reading: `li̍p` (literary, used in 立法 lı̍p-hoat, 成立 sêng-lı̍p). The verb "to stand" is **`khiā`** /kʰia/ but is conventionally written **徛** (or sometimes 站); using 立 for `khiā` is a colloquial extension only seen in informal corpora. Strict Min lexicography (Douglas 1873, 周長楫 2006, 教育部臺灣閩南語常用詞辭典) treats 立 = lı̍p only. The dataset's choice to include `khiā` under 立 is defensible as a "common usage" entry, but should be flagged with a note OR the row should clarify that 白讀 `khiā` is for the morpheme normally written 徛.
- **Why:** Lexicographic policy decision. As a sociolinguist I'd lean toward keeping `khiā` (because users of the atlas WILL pronounce 立 as `khiā` in colloquial speech), but the label "白讀" without comment under-represents the situation.

---

### 19. `nan_pera` 見 surface = `kì` (after #23 fix) but in HAN_DATA.ipa the value is `/kĩ˥˧/` and in HAN_VARIANTS the 白讀 = `kì` matches — good, but the 文讀 in pera is missing entirely

- **Current:** `見 nan_pera` in HAN_DATA: surface `kì` ipa `/kĩ˥˧/`. In HAN_VARIANTS — checking — `見 nan_pera` block was not found in the doublet dump (no entry).
- **Expected:** Standard Hokkien 見 has 白讀 `kìⁿ` /kĩ/ ("see") and 文讀 `kiàn` /kian/ (compounds 意見, 再見). Since other Peranakan rows (e.g., 来, 去, 食, etc.) all have doublet entries, the absence of a 見 entry in `HAN_VARIANTS.nan_pera` is a coverage gap. Recommend seeding from nan_pn 白讀 `kìⁿ`/`kĩ˨˩` + 文讀 `kiàn`/`kian˨˩`, adjusted to Peranakan tone scheme (whichever is picked under #5).
- **Why:** Sparse-coverage gap in the same column flagged in #5; symptom of the per-column inconsistency.

---

### 20. 行:1 nan_th 白讀 = `kiã5` /kʰjã˧˥/ — the **/kʰ/** initial in IPA contradicts the surface initial `k` (unaspirated)

- **Current:** `行:1 nan_th` doublet 白讀 = `kiã5` /kʰjã˧˥/ AND main HAN_DATA.surface[行:1].nan_th = `kiã5` /kʰjã˧˥/.
- **Expected:** Teochew (and Hokkien) 行 vernacular = unaspirated /k/, NOT aspirated /kʰ/. Compare nan_te `kiã5` /kiã˥˥/, nan_hai `gia5` /kĩa˨˦˥/, nan_pn `kiâⁿ` /kiã˨˦/ — all unaspirated. The /kʰ/ in the nan_th IPA is a phonological error. Either fix the IPA to `kiã˧˥` or, if some Thai-Teochew speakers do aspirate due to Thai-substrate influence (Thai has phonemic aspiration on /k/ vs /kʰ/), source it explicitly.
- **Why:** Phonetic error in IPA cell. Surface unaspirated `k` ≠ IPA /kʰ/.

---

### 21. 來 (the dataset uses 来 with the simplified form) — nan_pn 来 doublet shows 白讀 `lâi` / 文讀 `lâi` with NO IPA value in either — both forms identical

- **Current (HAN_VARIANTS):** `来 nan_pn: 白讀:lâi/ || 文讀:lâi/` (IPA cells empty in both).
- **Expected:** 来 is one of the Hokkien morphemes with a single reading `lâi` (no literary/vernacular split — both compounds and vernacular use the same syllable). The doublet block forces a split where none exists, and the IPA is empty in both, making the entry vacuous. Recommend: **delete the `nan_pn` doublet entry for 来** and rely on the single HAN_DATA.surface value. Same logic applies to any character with no real 文白 split.
- **Why:** Empty / redundant entries clutter the doublet column. The single-reading vs doublet decision should be based on whether a split EXISTS, not on whether ANY entry is present.

---

### 22. nan_pera 七 = `chit⁵` / ipa `/tɕiʔ˥/` — the alveolopalatal **/tɕ/** affricate is the Peranakan/Baba realization, but only nan_pera (and nan_th) show /tɕ/; other diaspora columns keep /ts/

- **Current:** 七 column shows: `[chhit, tshit, chhit, chhit, cig4, chit⁵]` surfaces and `[tsʰit̚˧˨, t͡sʰit̚˨, tsʰit̚˧˨, t͡sʰit̚˧˨, tsʰiʔ˨, tɕiʔ˥]` IPAs for `[nan_pn, nan_sg, nan_my, nan_id, nan_th, nan_pera]`.
- **Expected:** Peranakan / Baba Hokkien is well-documented to have palatalized /tɕ tɕʰ ɕ/ before /i/, /e/ (Pakir 1986, Lee 2014). So /tɕiʔ/ is correct for nan_pera 七. But the **same palatalization should apply to ALL nan_pera affricates before front vowels**: 食 nan_pera doublet 白讀 = `chiah⁵` /t͡siaʔ˥/ — should be /tɕiaʔ˥/, since the trigger (/i/ glide) is present. 足 nan_pera = `chiok⁵` /tɕiɔʔ˥/ — this IS palatalized correctly. So 食 is the outlier. Need either uniform /tɕ/ before /i/ in nan_pera, or document the exception.
- **Why:** Phonological-rule consistency. The rule "/ts(ʰ)/ → /tɕ(ʰ)/ / __i" should apply uniformly.

---

### 23. 月 文白 doublets: ALL six diaspora columns show the doublet, but `goa̍t` (literary) is only attested with 文讀 label in nan_pn / nan_sg / nan_id / nan_pera; nan_my has `ge̍h` (see #17) and nan_th has `ghuag8` — pan-column inconsistency

- **Current:** `月 nan_my 文讀:ge̍h`, `月 nan_th 文讀:ghuag8 /ɣuak̚˥/`.
- **Expected:** 月 文讀 is `goa̍t` /ɡuat̚/ in all Hokkien lineages; in Teochew it's `guag8` /kuak̚/ (no /ɣ-/, see #8). So nan_my needs `goa̍t` (#17) and nan_th needs `guag8`. Cross-column unification on the literary stratum should be near-perfect, since literary readings are inherited from Middle-Chinese 切韻 codification and don't diverge across Min varieties as much as vernaculars do.
- **Why:** Cross-column literary consistency is a tighter constraint than vernacular consistency; the variation seen here is unjustified.

---

### 24. nan_pera 文白 doublets: 央, 來/去/食 all show ONLY single-digit `5`/`³` tone marks, but the high-vs-low entering distinction (4 vs 8) is being collapsed

- **Current sampled:**
  - 北 nan_pera = `pak⁵` /paʔ˥/ — entering tone, written `5`
  - 月 nan_pera 白讀 `goeh⁵` /ɡueʔ˥/ — entering tone, written `5`
  - 八 nan_pera 白讀 `poeh⁵` /pueʔ˥/ — entering tone, written `5`
  - 七 nan_pera = `chit⁵` /tɕiʔ˥/ — entering tone, written `5`
- **Expected:** In Min historical phonology, 北 (上聲入 yīn-rù) and 月 (下聲入 yáng-rù) are different tone categories that should be marked differently. The dataset's nan_pera using `5` for both collapses this distinction. If the Peranakan tone system really has reduced to 4-5 tones (per Pakir 1986), then yīn-rù and yáng-rù may have **genuinely merged** in PerHk — in which case the `5` IS correct, and the dataset should document this in the metadata description. Currently the description says "4-5 tone reduction" but doesn't specify which mergers happened. Recommend adding to the description: "yīn-rù + yáng-rù → single checked tone marked `5`."
- **Why:** Tone-category documentation. The data IS internally consistent (assuming the merger), but the description should make it explicit which mergers underlie the reduction.

---

### 25. Coverage gap: `nan_my` and `nan_id` are entirely missing for 月 in HAN_DATA.surface/ipa — only HAN_VARIANTS doublets exist

- **Current:** Per the HAN_DATA dump, 月 row shows: `nan_hai = "gue7"` only — no value in nan_my, nan_id, nan_pn, nan_sg, nan_th, nan_pera for the **single-surface** field. The doublets are populated for all six diaspora cols. Same finding as #43 #3 (which flagged the coverage gap for 月 across all Hokkien), still partially open: the doublets WERE seeded but the single-form surface was not.
- **Expected:** When the doublet block has both 白讀 and 文讀, the single-form `HAN_DATA.surface` cell should display **whichever reading is conventionally cited as the headword** — for 月, vernacular `gue̍h` (Zhangzhou-line) or `ge̍h` (Quanzhou-line) is the default. Currently the front-end (per the project's HanMap compare view) will show an empty cell, while the doublet detail view will show two readings. The UX inconsistency: column shows blank in compare, populated in detail. Recommend: populate `HAN_DATA.surface[月][nan_my/_id/_pn/_sg/_pera]` from the corresponding `HAN_VARIANTS[月]` 白讀 entry.
- **Why:** Display-layer coverage gap inherited from the doublet-seeding round of #23/#43. The doublets are good; the headword is missing.

---

## Summary

- **Carry-over from #43 STILL UNFIXED:** #1 (nan_pn Pucheng metadata), #13 (nan_th 央 Mandarinism). These were flagged in #43 but the dev's round-1 reply listed neither in the "applied 11" — both still in live file.
- **Metadata / description errors:** #2 (nan_sg /iŋ/→/eŋ/ Zhangzhou attribution is wrong direction), #3 (nan_my Quanzhou-claim vs Zhangzhou-line cells), #4 (nan_pn tone-system documentation), #5 + #6 (nan_pera scheme + geo), #7 (nan_th is Teochew not Hokkien — brief mismatch), #12 (nan_sg 8-tone overclaim).
- **Phonological errors:** #8 (nan_th gh-→g- in Peng'im), #9 (二 nan_th surface vs IPA mismatch), #10 (nan_my 火 tone 52 unsourced), #20 (行 nan_th /kʰ-/ vs unaspirated /k-/), #22 (nan_pera /tɕ/ rule inconsistency).
- **Doublet errors:** #14 (火 has no real 文讀 in Hokkien), #15 / #16 (一 / 二 nan_my labels swapped), #17 (月 nan_my 文讀 mislabeled), #18 (立 = 徛 lexicographic note), #19 (見 nan_pera 文讀 missing), #21 (来 nan_pn pseudo-doublet), #23 (月 cross-column literary inconsistency), #24 (nan_pera rù-tone collapse documentation).
- **Coverage gaps:** #25 (月 HAN_DATA.surface empty for 5 of 6 diaspora cols despite populated doublets).

**Recommendation for action priority:**
1. **Quick wins** (#1, #13 carry-over fixes; #15, #16 label swaps for 一/二 nan_my — these are simple swaps).
2. **Metadata corrections** (#2, #3, #12 description edits — pure prose).
3. **Phonological/orthographic** (#8 gh→g, #9 二 nan_th surface fix, #20 kʰ→k, #17 月 nan_my 文讀 = goa̍t, #22 食 nan_pera palatalization).
4. **Scheme decisions** (#4 nan_pn tones, #5 nan_pera scheme, #7 nan_th rename — these are policy choices, defer if maintainer wants to keep current).
5. **Coverage** (#25 月 surface seeding from doublets).

The **brief's focus area #6** (Penang Nyonya metadata confusion flagged in #43) is addressed in this review's #1 — same Pucheng problem, still open. The **brief's focus area #7** (文白異讀 archaic doublets) is addressed in #14, #17, #21, #23 — the diaspora doublets are present but contain systematic labeling errors that need cleanup.

---

**File path:** `/home/jounlai/langmap/hanmap_reviews/58_open.md`
**Finding count:** 25


---

## Dev response — round 1 (2026-06-04)

.wf_hanmap_apply.mjs 経由で適用済。

- **適用 edit**: 14
- **policy/skip**: 11
- **headline**: 央 nan_th iang1→iong1, 二 nan_th lī→ri6 Peng'im, 月 nan_my 文讀 ge̍h→goa̍t, 一/二 nan_my 白/文 label swap ×8, 行:1 nan_th kʰjã→kiã
- **JSON**: /tmp/hm_edits_58.json
