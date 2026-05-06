# I18N_DESCRIPTIONS Generation Prompt

## Role

You are a multilingual translator generating UI translations of a single language's modal description for the LangMap Word Map. Output should be a JavaScript object literal fragment ready to insert into `I18N_DESCRIPTIONS` in `wordmap_meta.js`.

## Input

For each language entry, you'll receive:
- ISO code (e.g. `sah`, `mni`, `quc`)
- English name (e.g. "Sakha", "Meitei", "K'iche'")
- Native autonym (e.g. "Саха тыла", "ꯃꯩꯇꯩꯂꯣꯟ")
- English description (the existing `meta.description` from `wordmap_meta.js`)

## Output

A JS object literal fragment for `I18N_DESCRIPTIONS[<code>]` containing translations into 17 of the 21 UI languages (es_eu/es_mx and pt_eu/pt_br share single keys `es` and `pt`):

```javascript
'<code>': {
  ja:'…日本語訳…',
  ko:'…한국어 번역…',
  zh:'…简体中文翻译…',
  yue:'…粵語翻譯…',
  vi:'Bản dịch tiếng Việt…',
  th:'…คำแปลภาษาไทย…',
  id:'Terjemahan dalam Bahasa Indonesia…',
  hi:'…हिंदी अनुवाद…',
  de:'…deutsche Übersetzung…',
  fr:'…traduction en français…',
  it:'…traduzione italiana…',
  es:'…traducción al español…',
  pt:'…tradução para português…',
  ru:'…русский перевод…',
  uk:'…український переклад…',
  ar:'…ترجمة باللغة العربية…',
  he:'…תרגום לעברית…',
  sw:'…tafsiri ya Kiswahili…'
}
```

Notes:
- `es` is the shared key for both `es_eu` and `es_mx` (handled by post-processing in `wordmap_meta.js` apply-loop)
- `pt` is the shared key for both `pt_eu` and `pt_br`
- `en` is NOT included here; the original `meta.description` (English) serves that role

## Translation guidelines

### Length
Keep each translation **roughly the same length as the English** (typically 2-4 sentences, 50-100 words). Don't expand into a full encyclopedia entry; don't compress to one short sentence.

### Style
- **Encyclopedic, neutral tone** — no first-person, no second-person address
- **Linguistic terminology should use the conventional terms in the target language**:
  - "polysynthetic" → 抱合語 (ja), 다종합어 (ko), 多式综合语 (zh), …
  - "ergative" → 能格 (ja zh), 능격 (ko), …
  - "voicing" → 有声 (ja), 유성 (ko), …
- **Geographic/ethnic terms** should use the conventional names in the target language
  - "Lake Eyasi" → エヤシ湖 (ja), 에야시 호수 (ko), …
- **Numbers and counts** preserve the figures (e.g. "~2.3M" → "約230万人" / "약 230만명" / "约230万")
- **Linguistic family names** use the standard term in target language
  - "Niger-Congo (Bantu)" → ニジェール・コンゴ語族(バントゥー諸語)
  - "Sino-Tibetan (Tibeto-Burman)" → 시노-티베트어족(티베트-버마어파)

### Tone variant for tonal/click languages
For each UI language, use the conventional terms:
- ja: トーン (tone), クリック子音 (click consonants), 放出音 (ejective)
- ko: 성조 (tone), 흡착음 (click), 방출음 (ejective)
- zh: 声调 (tone), 搭嘴音 (click), 喷音 (ejective)
- ru: тон (tone), щёлкающие звуки (click), эйективы (ejective)
- ar: نغمة (tone), أصوات النقر (click), أصوات لفظية (ejective)

### Cultural/political sensitivity
- For Russian Far East languages: refer to "Russia" not "USSR"
- For divided languages (Kashmiri, Caucasian): mention all relevant territories neutrally
- For endangered languages: state speaker numbers factually, don't editorialize

### Honorifics in Korean
Use the standard encyclopedic register (-다 endings, not -ㅂ니다 polite or -ㄴ다 narrative).

### Arabic and Hebrew
- Right-to-left text — output in logical (typing) order; the modal renderer will handle directionality
- Use modern standard registers (Modern Standard Arabic for ar; Modern Hebrew for he)

## Per-UI-language tone reminder

| UI | Register / style |
|---|---|
| ja | です/ます形ではなく〜である調（百科事典) |
| ko | -다 종결 (학술문체) |
| zh | 学术中文，避免口语化 |
| yue | 口語化避免、書面語 |
| vi | Văn viết bách khoa |
| th | สารคดี (encyclopedic style) |
| id | Bahasa baku, gaya ensiklopedis |
| hi | मानक हिंदी |
| de/fr/it/es/pt/ru/uk | Encyclopedic register |
| ar | فصحى |
| he | אקדמית |
| sw | Kiswahili sanifu |

## Example (for Sakha, sah)

Input:
```
Code: sah
English name: Sakha
Native: Саха тыла
English description:
  "Sakha (Yakut) is the largest Turkic language of Siberia, spoken
   across the vast Sakha Republic. It preserves archaic Turkic
   features lost in other branches and has acquired numerous loanwords
   from Russian, Mongolic, and Tungusic neighbors."
```

Expected output:
```javascript
'sah': {
  ja:'サハ語(ヤクート語)はシベリア最大のテュルク系言語で、広大なサハ共和国全域で話される。他のテュルク語派で失われた古代テュルク語の特徴を残しており、ロシア語・モンゴル系・ツングース系の周辺言語から多くの借用語を受け入れている。',
  ko:'사하어(야쿠트어)는 시베리아 최대의 튀르크어로, 광대한 사하 공화국에서 사용된다. 다른 튀르크어파에서 사라진 고대 튀르크어의 특징을 보존하고 있으며, 러시아어, 몽골어, 퉁구스어 인접 언어로부터 많은 차용어를 받아들였다.',
  zh:'萨哈语（雅库特语）是西伯利亚最大的突厥语，通行于辽阔的萨哈共和国。它保留了其他突厥语支已失去的古老特征，并从俄语、蒙古语和通古斯语等邻近语言吸收了大量借词。',
  yue:'薩哈語（雅庫特語）係西伯利亞最大嘅突厥語，通行於遼闊嘅薩哈共和國。佢保留咗其他突厥語支已經失去嘅古老特徵，並由俄語、蒙古語同通古斯語等鄰近語言吸收咗大量借詞。',
  vi:'Tiếng Sakha (tiếng Yakut) là ngôn ngữ Turk lớn nhất của Siberia, được nói trên toàn lãnh thổ rộng lớn của Cộng hòa Sakha. Nó bảo tồn các đặc điểm cổ xưa của tiếng Turk đã mất trong các nhánh khác và đã tiếp nhận nhiều từ vay mượn từ tiếng Nga, các ngôn ngữ Mông Cổ và Tungus lân cận.',
  th:'ภาษาซาฮา (ภาษายาคุต) เป็นภาษาเตอร์กที่ใหญ่ที่สุดของไซบีเรีย ใช้พูดทั่วสาธารณรัฐซาฮาอันกว้างใหญ่ มีลักษณะเก่าแก่ของภาษาเตอร์กที่สูญหายไปในสาขาอื่น ๆ และได้รับคำยืมจำนวนมากจากภาษารัสเซีย ภาษามองโกล และภาษาตุงกุสที่อยู่ใกล้เคียง',
  id:'Bahasa Sakha (Yakut) adalah bahasa Turkik terbesar di Siberia, digunakan di seluruh Republik Sakha yang luas. Bahasa ini mempertahankan fitur Turkik kuno yang hilang di cabang-cabang lain dan telah memperoleh banyak kata pinjaman dari bahasa Rusia, Mongolik, dan Tungusik di sekitarnya.',
  hi:'साखा (याकूत) साइबेरिया की सबसे बड़ी तुर्किक भाषा है, जो विशाल साखा गणराज्य में बोली जाती है। यह अन्य तुर्किक शाखाओं में लुप्त हो चुकी प्राचीन तुर्किक विशेषताओं को संरक्षित करती है और रूसी, मंगोलिक, और तुंगुसिक पड़ोसी भाषाओं से कई उधार शब्द ग्रहण कर चुकी है।',
  de:'Sacha (Jakutisch) ist die größte Turksprache Sibiriens, gesprochen in der weiten Republik Sacha. Sie bewahrt archaische Turkmerkmale, die in anderen Zweigen verloren gingen, und hat zahlreiche Lehnwörter aus dem Russischen sowie aus benachbarten mongolischen und tungusischen Sprachen aufgenommen.',
  fr:"Le sakha (yakoute) est la plus grande langue turque de Sibérie, parlée à travers la vaste République de Sakha. Elle conserve des traits turcs archaïques perdus dans les autres branches et a acquis de nombreux emprunts au russe ainsi qu'aux langues mongoles et toungouses voisines.",
  it:"Il sakha (jakuto) è la più grande lingua turca della Siberia, parlata nell'ampia Repubblica di Sakha. Conserva tratti turchi arcaici perduti negli altri rami e ha acquisito numerosi prestiti dal russo e dalle lingue mongole e tunguse vicine.",
  es:'El sakha (yakuto) es la mayor lengua turca de Siberia, hablada en toda la vasta República de Sakha. Conserva rasgos turcos arcaicos perdidos en otras ramas y ha adquirido numerosos préstamos del ruso y de las lenguas mongólicas y tunguses vecinas.',
  pt:'O sakha (iacuto) é a maior língua turca da Sibéria, falada em toda a vasta República de Sakha. Preserva traços turcos arcaicos perdidos noutros ramos e adquiriu inúmeros empréstimos do russo e das línguas mongólicas e tunguses vizinhas.',
  ru:'Якутский (саха) — крупнейший тюркский язык Сибири, распространённый по всей обширной Республике Саха. Он сохраняет архаичные тюркские черты, утраченные в других ветвях, и приобрёл многочисленные заимствования из русского, монгольских и тунгусских соседних языков.',
  uk:'Якутська (саха) — найбільша тюркська мова Сибіру, поширена на всій великій території Республіки Саха. Зберігає архаїчні тюркські риси, втрачені в інших гілках, і запозичила численні слова з російської, монгольських і тунгуських сусідніх мов.',
  ar:'لغة الصخا (الياقوتية) هي أكبر لغة تركية في سيبيريا، يُتحدث بها في كامل أرجاء جمهورية الصخا الشاسعة. تحتفظ بسمات تركية قديمة فُقدت في الفروع الأخرى، واكتسبت العديد من الكلمات المستعارة من الروسية ومن اللغات المنغولية والتنغوسية المجاورة.',
  he:'סאחה (יאקוטית) היא השפה הטורקית הגדולה ביותר בסיביר, מדוברת ברחבי הרפובליקה הענקית של סאחה. היא משמרת תכונות טורקיות ארכאיות שאבדו בענפים אחרים ושאלה מילים רבות מרוסית ומשפות מונגוליות וטונגוסיות סמוכות.',
  sw:'Kisakha (Kiyakuti) ni lugha ya kiturkic kubwa zaidi ya Siberia, inayozungumzwa katika Jamhuri kubwa ya Sakha. Inahifadhi sifa za kale za Kituruki zilizopotea katika matawi mengine na imechukua maneno mengi yakopo kutoka Kirusi, Kimongolic, na lugha za Kitungus jirani.'
}
```

## The 204 codes to process

Process each of the following codes by extracting its English description from `wordmap_meta.js` and generating the 17 UI translations:

### Phase 1 (Russian Far East / Siberia)
sah, tyv, kjh, alt, bxr, evn, eve, yrk, kca, ckt, niv, ket

### Phase 2 (high-population missing)
cjy, hsn, gan, mai, awa, skr, sat, mad, hil, bal, ak, mk

### Phase 3A (African)
lg, ki, tn, st, ts, ve, bem, lua, kg, ff, bm, kab

### Phase 3C (Indigenous Americas)
quc, yua, kek, tzo, mix, zap, ay, arn, cr, oj, lkt, kl

### Phase 3D (Caucasus)
ce, inh, av, lez, dar, lbe, tab, ady, kbd, ab, xmf, os

### Phase 3E (Pacific & Australia)
ty, niu, tvl, rap, rar, mh, gil, ch, tet, bi, pjt, wbp

### Phase 3F (Tibeto-Burman + Indonesian)
mni, new, brx, lus, dz, min, ban, ace, bug, war, bik, tum

### Phase 3G (Nilotic + Cushitic + Berber + Indo-Aryan)
din, nus, luo, mas, sid, aa, shi, rif, mwr, bgc, ks, kok

### Phase 3H (Sinitic)
mnp, cpx, nan_te, yue_ts, wuu_wz, wuu_sz, czh, cnp, zh_jh, zh_tj, zh_lz, dng

### Phase 3I (European/Uralic minor)
hsb, csb, fur, ast, an, rup, wa, kv, udm, mhr, myv, krl

### Phase 3J (Iranian + Turkic + Tibeto-Burman)
mzn, glk, lrc, crh, tt, ba, krc, ksw, lhu, lis, nxq, shn

### Phase 3K (West African + Khoisan)
ee, nyn, luy, ssw, nbl, nso, fan, naq, hts, kr, men, dyu

### Phase 3L (North American Indigenous + S Asian + SE)
syl, mag, doi, mon, xkk, moh, cho, esu, ipk, apw, dak, chy

### Phase 3M (Italian regional + S Asian + Pacific)
lmo, pms, eml, mwl, pnt, hno, bhb, cja, hmo, pon, syr, vmw

### Phase 3N (rare/iconic)
dsb, gv, kw, zza, brh, mrq, tiw, guc, myp, emp, kpe, loz

### Phase 3O (Indonesian/Philippine + Pahari + Micronesian)
bbc, bjn, sas, kha, mns, mrw, tsg, yap, chk, gbm, kfy, xnr

### Phase 3P (BCS + Borneo + Berber + Angola + Mongolic)
hr, bs, iba, ljp, tzm, ng, umb, kmb, her, xal, sg, toi

## Insertion target

After generation, all 204 entries should be inserted into `wordmap_meta.js`'s `I18N_DESCRIPTIONS` object — between `'jbo': {...}` and the closing `};` of `I18N_DESCRIPTIONS`.

The existing `// Apply multilingual descriptions` loop at the bottom of `wordmap_meta.js` will pick up the new entries and merge them into the corresponding `LANG_DATA[code].meta.description` objects.

## Output strategy (recommended)

To keep batches manageable, process **12 codes (one phase) per LLM run**. Each batch produces a single JS-object-literal fragment with 12 entries (one per code), totaling ~17 phases × ~12 codes/phase = 17 batches.

Since the existing `I18N_DESCRIPTIONS` only has 226 entries and the target is 430, this generation roughly doubles the I18N volume.
