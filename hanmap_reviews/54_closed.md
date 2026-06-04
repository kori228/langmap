# HanMap Reviewer #54 — Mandarin sub-dialect round-2 audit

Sweep of all `zh_*` Mandarin sub-dialect codes (zh_cd, cq, db, gl, hf, jh, jiao, jn, kf, km, lz, nj, sc, tj, tw, us, wh, xa, yuan, zz) over 59 Han characters in `/home/jounlai/langmap/hanmap_data.js`. Focus: tone-value consistency, cross-dialect copy-paste, sub-dialect phonological signatures, zh_us heritage Mandarin, zh_yuan Zhongyuan Yinyun.

---

## Finding 1 — zh_jn vs zh_jiao surface forms byte-identical on 40 of 59 chars (copy-paste)
Jinan (zh_jn, Ji-Lu Mandarin 冀魯官話) and Jiao-Liao Mandarin (zh_jiao, 膠遼官話) are sister but DISTINCT Mandarin groups with very different tone shapes (Jinan canonical T1 213 / T2 42 / T3 55 / T4 21; Yantai/Jiao-Liao prototypical T1 31 / T2 53 / T3 214 / T4 212 in non-Yantai sub-points, and 42/21 patterns elsewhere). The data file gives them an IDENTICAL four-tone shape (T1 213 / T2 42 / T3 55 / T4 21) and the surface strings collide byte-for-byte on ~40 of 59 chars (一 yi²¹³, 三 san²¹³, 五 wu⁵⁵, 七 qi²¹³, 八 ba²¹³, 九 jiu⁵⁵, 十 shi⁴², 山 shan²¹³, 水 shui⁵⁵, 火 huo⁵⁵, 土 tu⁵⁵, 天 tian²¹³, 海 hai⁵⁵, 龍 long⁴², 虎 hu⁵⁵, 犬 quan⁵⁵, 馬 ma⁵⁵, 魚 yu⁴², 羊 yang⁴², 貓 mao²¹³, 手 shou⁵⁵, 足 zu⁴², 耳 er⁵⁵, 口 kou⁵⁵, 頭 tou⁴², 心 xin²¹³, 血 xue²¹³, 中:1 zhong²¹³, 央 yang²¹³, 左 zuo⁵⁵, 東 dong²¹³, 西 xi²¹³, 北 bei²¹³, 行:1 xing⁴², 行:2 hang⁴², 来 lai⁴², 聞 wen⁴², 食 shi⁴², 飲 yin⁵⁵, 走 zou⁵⁵). zh_jiao is effectively a clone of zh_jn. Jiao-Liao reference points (Yantai 煙台 / Qingdao 青島) ought to show distinctive features — palatalised k- before front vowels lost only partially, ng→ɣ-glide, l/n confusion (see Finding 8) — none of which surface.

## Finding 2 — zh_sc vs zh_cd surface forms byte-identical on 56 of 59 chars (copy-paste)
Sichuanese (zh_sc, broad Southwestern label) and Chengdu (zh_cd, 成都) match byte-for-byte on 56 of 59 chars. Only 地 (sc 213 vs cd 13), 上 (sc 213 vs cd 13), 右 (sc 213 vs cd 13) differ — and those differences are merely the dropped onset on Chengdu's half-third 13. If zh_sc is meant to represent the broader Sichuan basin (Southwestern Mandarin Chéng-Yú cluster) it should diverge from Chengdu at sub-dialect signature points: e.g. Zigong/Yibin/Leshan 自貢/宜賓/樂山 use a high-rising 35 instead of Chengdu's 21 yang-ping, Pengshui has retroflex initials lost differently than Chengdu, and many Southwestern points use 不 = pu⁰ with different initial allophony. Currently zh_sc carries zero independent value.

## Finding 3 — zh_sc IPA still contains pinyin orthography (forgot to convert during copy)
`龍 zh_sc` ipa="nong²¹" (line 4413 region) shows the **pinyin spelling "ong"** in the IPA field while zh_cd 龍 ipa="noŋ²¹" uses proper IPA ŋ. Same problem on `足 zh_sc` ipa="tsu˨˩" (with Chao bar) but `足 zh_cd` ipa="tsu²¹" (superscript digit) — the two zones are out of sync on tone-notation as well. zh_sc IPA is a half-finished copy.

## Finding 4 — zh_jiao surface/IPA initial mismatch on 牛/鳥/南 (n vs l mix)
Three characters in zh_jiao show different initials in surface vs IPA:
- 牛 surf="liu⁴²" ipa="niou⁴²" (l vs n)
- 鳥 surf="liao⁵⁵" ipa="liɔ⁵⁵" (both l, but standard reading is niao — surface 'liao' is the result of n→l shift but if the dialect did that shift it should also apply to the IPA in 牛 and 南)
- 南 surf="lan⁴²" ipa="nã⁴²" (l vs n)
Either the dialect *does* show n→l merger and the IPAs are stale, or it does NOT and the surfaces are wrong. Choose one. Jiao-Liao's actual pattern: n/l merger is partial and area-specific (Penglai/Wendeng yes, Yantai no), so a curated decision is needed.

## Finding 5 — zh_us heritage Mandarin: shū/sh- initials de-retroflexed inconsistently
zh_us is captioned as US heritage Mandarin (early Cantonese-influenced) but the sh- → s- de-retroflexion is applied haphazardly:
- 山 ipa="san˥" (de-retroflexed, single ˥)
- 水 ipa="sweɪ˨" (de-retroflexed)
- 手 ipa="sou˨" (de-retroflexed)
- 上 ipa="saŋ˥˩" (de-retroflexed)
- 十 ipa="sɹ̩˧" (kept partial sɹ̩)
- 食 ipa="sɹ̩˧" (kept partial sɹ̩)
- 中:1 ipa="tsuŋ˥" (de-retroflexed tʂ→ts)
- 中:2 ipa="tsuŋ˥˩" (de-retroflexed)
Either pick a single transcription convention (heritage Cantonese-influenced Mandarin **does** characteristically de-retroflex sh/zh/ch → s/ts/tsh) and apply globally, or keep the retroflexes throughout. The current mix is incoherent.

## Finding 6 — zh_us T2 (陽平) IPA is level ˧ everywhere instead of rising ˧˥
Standard Mandarin yang-ping (T2) is a clear rising 35 contour. The zh_us file marks T2 in IPA as a single level Chao bar ˧ on every character: 龍 luŋ˧, 魚 ju˧, 牛 njou˧, 羊 jaŋ˧, 人 ɹən˧, 足 tsu˧, 頭 tʰou˧, 南 nan˧, 行:1 ɕiŋ˧, 行:2 xɑŋ˧, 来 laɪ˧, 聞 wən˧, 食 sɹ̩˧, 十 sɹ̩˧. Even in conservative heritage Mandarin T2 retains a rising contour. The flat ˧ is implausible across the board — likely the editor stripped the rising tail by accident.

## Finding 7 — zh_us T3 (上聲) IPA is ˨ everywhere instead of low-dipping 21(4) or half-third 21
zh_us T3 IPA is uniformly a single low Chao bar ˨ — 五 u˨, 九 t͡ɕjou˨, 虎 xu˨, 犬 t͡ɕʰjwan˨, 馬 ma˨, 鳥 njau˨, 手 sou˨, 耳 ɚ˨, 口 kʰou˨, 走 tsou˨, 火 xwo˨, 土 tʰu˨, 海 xaɪ˨, 北 peɪ˨, 飲 in˨, 左 tswo˨. The half-third realisation in citation form is **˨˩˦** (dipping) and even in connected speech low-fall is **˨˩**, never a flat ˨ level. Single ˨ implies a level-low which is not a Mandarin T3 reflex anywhere.

## Finding 8 — zh_us T1 marking inconsistent: ˥˥ vs ˥
Most zh_us T1 entries use ˥˥ (e.g. 一 i˥˥, 三 san˥˥, 七 t͡ɕʰi˥˥, 八 pa˥˥, 天 tʰjan˥˥, 心 ɕin˥˥, 央 jaŋ˥˥, 西 ɕi˥˥, 東 tuŋ˥˥, 貓 mau˥˥) but two T1 entries drop to a single ˥: 山 san˥, 中:1 tsuŋ˥. These look like editing slips — make uniform.

## Finding 9 — zh_jh "xing" surface vs "ɕin" IPA (n/ŋ merger inconsistency)
Jianghuai Mandarin (zh_jh) characteristically merges 行 -n / -ŋ in the same direction across the lexicon. The data mixes the two:
- 心 surf="xin³³⁴" ipa="siŋ˧˧˦" (surf n, ipa ŋ)
- 行:1 surf="xing⁵⁵" ipa="ɕin⁵⁵" (surf ng, ipa n)
- 行:2 surf="hang⁵⁵" ipa="xã⁵⁵" (surf ng, ipa nasal vowel — vowel-only, consistent with merger)
- 山 surf="shan³³⁴" ipa="sa³³⁴" (surf n, ipa no nasal at all — should be sã or saŋ)
- 山 surf also has retroflex "sh" but IPA "s" (zero retroflex) — Nanjing Jianghuai prototypically retains retroflex initials, so dropping ʂ in IPA is suspect. Pick a Jianghuai sub-point (Nanjing 南京 vs Hefei 合肥 vs Yangzhou 揚州) and apply its merger pattern consistently.

## Finding 10 — Many `-ng` surfaces with non-ŋ IPA (suspected silent merger drift)
Across multiple dialects the surface ends in "ng" but the IPA shows a nasalised vowel only (no ŋ) — sometimes correct (genuine merger to nasal vowel) but inconsistently applied:
- 羊 zh_hf surf="yang⁵⁵" ipa="iɑ̃⁵⁵"
- 上 zh_hf surf="sang⁵³" ipa="sɑ̃⁵³"
- 央 zh_hf surf="yang²¹" ipa="iã²¹"
- 央 zh_xa surf="yang²¹" ipa="iã˨˩"
- 東 zh_lz surf="dong³¹" ipa="tũ˧˩"
- 行:1 zh_hf surf="xing⁵⁵" ipa="ɕin⁵⁵"
- 行:1 zh_lz surf="xing⁵³" ipa="ɕin⁵³"
- 行:1 zh_nj surf="xing²⁴" ipa="ɕin²⁴"
- 行:1 zh_wh surf="xing²¹³" ipa="ɕin²¹³"
- 行:2 zh_hf surf="hang⁵⁵" ipa="xæ̃⁵⁵"
- 行:2 zh_km surf="hang³¹" ipa="xã³¹"
- 行:2 zh_lz surf="hang⁵³" ipa="xã⁵³"
- 行:2 zh_wh surf="hang²¹³" ipa="xan²¹³"
The 行:1 cases especially (xing→ɕin) imply -ŋ merged to -n in those dialects, which contradicts the surface spelling. Either align surface to actual phonemes (xin) or restore -ŋ in IPA.

## Finding 11 — zh_kf 木 marked T1 (24) instead of T2 (42)
zh_kf (Kaifeng) Yang-ru tone reflexes are T2 42 in the modal pattern (十=42, 龍=42, 魚=42, 牛=42, 羊=42, 人=42, 南=42, 行:1=42, 行:2=42, 来=42, 聞=42, 食=42). But `木 zh_kf` surf="muq⁴" ipa="muʔ⁴" — wait this is a residual entering tone /-ʔ/ with tone 4 (rising)? Kaifeng (Central Plains Mandarin 中原官話 Zhèng-Cáo sub-group) has lost the glottal coda entirely. Several characters carry stale -q codas and rising 24/42 confusion: 木 muq⁴ should be mu⁴² (yang-ru → T2 42, no -q), 七 qiq⁵ should be qi²⁴ (yin-ru → T1 24, no -q), 八 baq⁵ should be ba²⁴, etc. The -q codas plus tone digit 4 or 5 (single Chao bars) look like leftover from a Jianghuai/Hefei template, not Kaifeng.

Reality check: zh_kf surfaces actually look fine (no -q codas in extracted data) — re-reading: 一 yi²⁴, 七 qi²⁴, 八 ba²⁴, 木 mu²⁴, 十 shi⁴². So the data is internally consistent except `木 zh_kf` mu²⁴ — but yang-ru should be T2 42, not T1 24. So 木 should be mu⁴² in Kaifeng. (Same issue may extend to 目 mu²⁴.)

## Finding 12 — zh_zz 木/目 yang-ru tone outlier
Zhengzhou (zh_zz) yang-ru modal is 24 (also yin-ru 24). But `木 zh_zz` mu³¹² (with falling-rising T4) and `目 zh_zz` mu²¹ break the pattern. The systematic 6 yang-ru chars (龍 牛 羊 南 行:1 行:2 来 聞 食) all sit at 42 in Zhengzhou; 木 and 目 are sonorant-onset entering tones that in Central Plains usually went to 24 (yin-ping) or 42 (yang-ping) — 312 (falling-rising = qu) is not the expected reflex.

## Finding 13 — zh_cq YinShang split: 九/虎/犬/飲 = 53 instead of modal 42
Chongqing (zh_cq) yin-shang modal tone is 42 (五 wu⁴², 水 sui⁴², 火 huo⁴², 土 tu⁴², 海 hai⁴², 馬 ma⁴², 鳥 niao⁴², 手 sou⁴², 耳 er⁴², 口 kou⁴², 左 zuo⁴², 走 zou⁴²). But `九 zh_cq jiu⁵³`, `虎 zh_cq fu⁵³`, `犬 zh_cq quan⁵³`, `飲 zh_cq yin⁵³` use 53. Chongqing dialect has T3 = 42 (and T4 = 214); 53 is not in the canonical Chongqing inventory. These four entries appear copy-pasted from a 53-system (Chengdu / Tianjin / Lanzhou). Investigate whether they should be jiu⁴² / fu⁴² / quan⁴² / yin⁴².

## Finding 14 — zh_cd YangQu inconsistency: 二/下 = 213 vs modal 13
zh_cd (Chengdu) yang-qu modal is half-third 13 (地 di¹³, 上 sang¹³, 右 you¹³, 坐 zuo¹³). But `二 zh_cd er²¹³` and `下 zh_cd xia²¹³` jump to full 213 — note that zh_sc has uniformly 213 for these slots. This pattern strongly suggests two characters were forgotten when zh_cd was diverged from zh_sc. Should be er¹³ and xia¹³ in Chengdu, matching 地/上/右/坐.

## Finding 15 — zh_xa traditional /pf-/ initial absent on 水
The labio-velar /pf-/ initial is a signature of conservative Guanzhong/Xi'an (西安) Mandarin: 水 traditionally /pfei/ → /fei/. The neighbouring Lanzhou (zh_lz fei⁴⁴²) and Kunming (zh_km fei⁵³) both preserve this **f-** reflex for 水, but zh_xa records `水 suei⁵³` (modern standard reading). Either intentionally chose the modern reading (then add Western Mandarin /fei/ to nearby points to anchor the bundle isogloss), or update to fei⁵³ to reflect actual Xi'an folk pronunciation.

## Finding 16 — zh_yuan romanisation field mixes raw IPA with pinyin-style transliteration
Zhongyuan Yinyun (元代 Yuan-period 中原音韻) surface forms should follow a single notation. The file mixes two systems in the SAME `surface` field:
- pinyin-style (final digit, p/t/k/x/s/y, kh/th/tsh/ph for aspirates): 一 i1, 三 sam1, 四 sï4, 七 tshi1, 八 pa1, 九 kieu3, 土 thu3, 天 thien1, 火 xuo3, 虎 xu3, 犬 khyen3, 鳥 tiau3, 貓 miau1, 心 sim1, 血 xye1, 西 si1, 北 pei1, 去 khy4, 見 kien4, 飲 im3, 走 tseu3
- raw IPA characters embedded in surface: 二 ʐï4, 十 ʂï2, 山 ʂan1, 水 ʂuei3, 龍 luŋ2, 羊 iaŋ2, 上 ʂaŋ4, 中:1 tʂuŋ1, 中:2 tʂuŋ4, 央 iaŋ1, 東 tuŋ1, 行:1 ɕiŋ2, 行:2 xaŋ2, 食 ʂï2, 耳 ʐï3
A surface field of "ʂuei3" or "tʂuŋ4" mixes IPA-only glyphs (ʂ, tʂ, ŋ, ʅ) with ASCII tone digits. Either commit to a single romanisation throughout (e.g. ʈšhuei3 in DT-style, shuei3 in Karlgren, or ʂuei3 in modified IPA) or move the IPA-glyph-bearing forms to the ipa field and keep surface pinyin-style.

## Finding 17 — zh_jh tone marks: ⁵, ⁵¹, ⁵³ used for entering-tone reflexes inconsistently
Jianghuai (zh_jh) entering-tone reflexes (preserved as /-ʔ/) should carry one consistent tone shape. The data uses:
- single ⁵ (high level): 一 yiq⁵, 七 qiq⁵, 八 baq⁵, 十 sheq⁵ (only — see 食 sheq³⁵ ≠ 十), 日 niq⁵, 月 yoq⁵, 足 zuq⁵, 血 xyeq⁵, 肉 rouq⁵
- ⁵¹ (high falling): 六 liuq⁵¹, 立 liq⁵¹
- ⁵³ (high falling, lower): 木 muq⁵³, 目 muq⁵³ (and surface tone matches yang-qu)
- 食 sheq³⁵ (rising) — anomalous: yang-ru should not be 35; sheq⁵ would parallel 十
- 北 beiq¹³ — yin-ru, but using 13 (half-third). Other yin-ru = 5 single.
The Jianghuai (Hefei/Nanjing) canonical entering-tone system is 5 (yin-ru) and 13 (yang-ru) OR a merged 5/4 system. Reconcile: pick T-yin-ru = ⁵ vs T-yang-ru = ⁵³ (or whatever the chosen sub-point uses) and apply globally.

## Finding 18 — zh_jh 山 ipa="sa³³⁴" loses the nasal coda entirely
`山 zh_jh` surf="shan³³⁴" ipa="sa³³⁴". The IPA "sa" has neither -n nor -ŋ nor a nasalised vowel ã. Jianghuai usually retains a nasalised vowel for -an: should be sã³³⁴ at minimum (or saŋ if -ŋ-merging variant). Likely typo dropping the tilde.

## Finding 19 — zh_lz 鳥 yin-shang outlier (432) plus 馬 (432) vs modal 442
Lanzhou (zh_lz) yin-shang modal is 442 (五, 九, 水, 火, 土, 海, 虎, 犬, 手, 耳, 口, 左, 飲, 走). But `馬 ma⁴³²` and `鳥 niao⁴³²` use 432. Both are yin-shang and should share one citation value. Pick 442 (canonical Lanzhou T3) or 432 — the difference is the medial digit (4→3) and looks like a one-off transcription. Reconcile.

## Finding 20 — zh_km 中:2 IPA tone 13 vs modal yin-qu 212
Kunming yin-qu modal is 212 (四 si²¹², 六 liu²¹², 去 qu²¹², 見 jian²¹²). But `中:2 zh_km zong¹³` carries 13 (half-third), which is not in Kunming's tone system at all (Kunming has only 4 tones: 44, 31, 53, 212 — half-third 13 is not one of them). Likely accidentally borrowed from a Tianjin/Lanzhou cell. Should be zong²¹² to match the yin-qu group.

## Finding 21 — zh_km T2 (yang-ping) carries multiple alien values: 龍/頭/南/聞=24, 魚=42, 行:1=44
Kunming yang-ping is robustly **31** (人 ren³¹, 牛 niu³¹, 羊 yang³¹, 来 lai³¹, 行:2 hang³¹, 食 si³¹ — and even 立 li³¹ as yang-ru-merged). But:
- 龍 long²⁴, 頭 tou²⁴, 南 nan²⁴, 聞 wen²⁴ all carry 24 (not in Kunming's 4-tone inventory)
- 魚 yu⁴² carries 42 (not in inventory either)
- 行:1 xing⁴⁴ carries 44 (that's yin-ping, but 行:1 is yang-ping!)
These cells appear copy-pasted from a Central Plains (24) or Zhongyuan (42) template. Should all be 31.

## Finding 22 — zh_us syllable peeling: 食/十 sɹ̩˧ but 山 san˥ contradicts the sɹ̩-class
Heritage US Mandarin de-retroflexion typically produces ɹ̩ (a syllabic retroflex approximant) from former retroflex sibilants. zh_us preserves this on 食 sɹ̩˧ and 十 sɹ̩˧. But 山 ipa="san˥" gives a plain san — the sh-class environment differs (san is shān 山, an open syllable), so this isn't directly comparable. However, if 山 reduces to san (no retroflex onset) yet 食/十 keeps the sɹ̩ form, the choice tree should be: retroflex sibilant + non-i vowel → ts-/s- (中=tsuŋ, 山=san, 上=saŋ, 手=sou, 水=swei); retroflex sibilant + ï/ɿ vowel → sɹ̩ / ɹ̩. That heuristic mostly works in the file, but it should be documented or applied without exception.

## Finding 23 — zh_db yin-ru reflexes split (足=35, 血=53, 北=213, 八=55) — no clear citation rule
Dongbei (zh_db) yin-ru reflexes scatter across all four modern tones:
- 一 yi⁵⁵ → T1
- 七 qi⁵⁵ → T1
- 八 ba⁵⁵ → T1
- 足 zu³⁵ → T2 (35)
- 血 xue⁵³ → T4 (53)
- 北 bei²¹³ → T3 (213)
Mandarin yin-ru → 4-way scatter is the *Beijing pattern* (北京話 yin-ru randomly distributed across all four tones), and Dongbei mostly inherits that scatter. So this is *defensible* but worth flagging: is each assignment correct for Dongbei specifically (Harbin/Shenyang readings often diverge from Beijing on these characters)? Compare 北 zh_db = bei²¹³ (T3) vs Beijing běi (T3) ✓; 足 zh_db = zu³⁵ (T2) vs Beijing zú (T2) ✓; 血 zh_db = xue⁵³ (T4) vs Beijing xuè (T4) ✓. Looks correct — but document this as inherited from PTH for future-proofing.

## Finding 24 — zh_jh 牛/羊 yang-ping = 22 instead of modal 35 (sub-point divergence)
zh_jh yang-ping for content words is 35 (人=35, 魚=35, 南=35, 聞=35, 食=35) but 牛=22, 羊=22, 龍=24, 頭=224, 行:1=55, 行:2=55, 来=55. That's seven distinct tone values across one tone category — far more variation than any single Jianghuai sub-point exhibits. Either zh_jh is a mash-up of Hefei/Nanjing/Yangzhou readings, or there's heavy entry drift. Pick one anchor city and align.

## Finding 25 — zh_yuan 立 li4 placed in qu (T4) — defensible but flag context
Zhongyuan Yinyun (Yuan-dynasty 中原音韻 by 周德清, 1324) systematically merged ru-tone characters into ping/shang/qu following onset-voice rules: 次濁入 (sonorant onset, 木/月/日/肉/立/目/六) → 去聲 (T4); 全濁入 (full obstruent voiced onset, 十/食) → 陽平 (T2); 清入 (voiceless onset, 一/七/八/北/足/血) → mostly 上聲 (T3) or scattered. The data choices:
- 立 li4 ✓ (next sonorant l-, qu)
- 木 mu4 ✓; 月 ye4 ✓; 日 ʐï4 ✓; 肉 rieu4 ✓; 目 mu4 ✓; 六 lieu4 ✓
- 十 ʂï2 ✓; 食 ʂï2 ✓
- 一 i1 (yin-ping, not the canonical 入派陰平 outcome — should be yi3 or yi4 in standard 中原音韻 tables)
- 七 tshi1 (T1) — usually goes to T1 in some tables, but 七 was 清入 and should split among T2/T3/T4; T1 is rare. Verify against the 韻譜.
- 八 pa1 — 入派陰平 ✓
- 北 pei1 — 入派陰平; some tables put it in 上聲 (pei3). Both attested.
- 足 tsu1 — yin-ping; canonical: 清入→上聲 → should be tsu3, not tsu1. Flag for re-check.
- 血 xye1 — 清入→上聲 → should be xye3, not xye1.
Recommend cross-referencing Zhōu Déqīng's 《中原音韻》 directly for 一/七/足/血.

---

**File**: `/home/jounlai/langmap/hanmap_reviews/54_open.md`
**Findings**: 25


---

## Dev response — round 1 (2026-06-04)

.wf_hanmap_apply.mjs 経由で適用済。

- **適用 edit**: 22
- **policy/skip**: 20
- **headline**: zh_sc 龍 ipa pinyin ong→ŋ, zh_us T2 ˧→˧˥ rising ×14, zh_us T1 outliers ×2, zh_kf 木/目 yang-ru ×4, zh_jh 山 sã nasal restore
- **JSON**: /tmp/hm_edits_54.json
