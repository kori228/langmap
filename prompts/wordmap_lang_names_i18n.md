# LANG_NAMES i18n Generation Prompt

## Role

You are a translation assistant generating language name translations for the LangMap UI. Output should be a JavaScript object literal fragment that can be appended to an existing `LANG_NAMES[<ui-lang>]` object.

## Input

- Target UI language code (one of: ko, zh, yue, vi, th, id, hi, de, fr, it, es_eu, es_mx, pt_eu, pt_br, ru, uk, ar, he, sw)
- The list of 204 newly added language codes with their English names (provided below)

## Output

A JavaScript object literal fragment that can be inserted before the closing `}` of `LANG_NAMES.<ui-lang>` in `app.js`. Format:

```
sah:'<translation>', tyv:'<translation>', kjh:'<translation>', ... toi:'<translation>'
```

Use locally-natural script and conventions for the target UI language. For example:
- Korean: 사하어, 투바어
- Chinese: 萨哈语, 图瓦语
- Russian: саха язык, тувинский язык
- Arabic: لغة الصخا, اللغة التوفية
- German: Sacha, Tuwinisch

## Style guide per UI language

| UI lang | Conventional suffix/format |
|---|---|
| ko | "X어" (e.g. 사하어, 마이티리어) |
| zh | "X语" or descriptive (e.g. 萨哈语, 迈蒂利语) |
| yue | "X語" or "X話" depending on convention |
| vi | "Tiếng X" (e.g. Tiếng Sakha, Tiếng Maithili) |
| th | "ภาษา X" (e.g. ภาษาซาฮา) |
| id | "Bahasa X" |
| hi | "X भाषा" |
| de | Adjectival form (e.g. Sachisch, Maithili) |
| fr | Native or Frenchified (e.g. iakoute, maïthili) |
| it | Italianized (e.g. iacuto, maithili) |
| es_eu/es_mx | Spanish form (e.g. yakuto, maithili) |
| pt_eu/pt_br | Portuguese form |
| ru | "X язык" or just adjective (e.g. саха язык, маитхили) |
| uk | "X мова" or just adjective |
| ar | "اللغة X" or descriptive |
| he | "X" or "X-ית" (e.g. סאחה, מייתילית) |
| sw | "Ki-X" (e.g. Kisakha, Kimaithili) |

## The 204 codes (with English names)

```
sah Sakha
tyv Tuvan
kjh Khakas
alt Altai
bxr Buryat
evn Evenki
eve Even
yrk Nenets
kca Khanty
ckt Chukchi
niv Nivkh
ket Ket

cjy Jin (Shanxi)
hsn Xiang (Hunan)
gan Gan (Jiangxi)
mai Maithili
awa Awadhi
skr Saraiki
sat Santali
mad Madurese
hil Hiligaynon
bal Balochi
ak Akan (Twi)
mk Macedonian

lg Luganda
ki Kikuyu
tn Tswana
st Sesotho
ts Tsonga
ve Venda
bem Bemba
lua Luba-Kasai
kg Kikongo
ff Fula
bm Bambara
kab Kabyle

quc K'iche'
yua Yucatec Maya
kek Q'eqchi'
tzo Tzotzil
mix Mixtec
zap Zapotec
ay Aymara
arn Mapudungun
cr Cree (Plains)
oj Ojibwe
lkt Lakota
kl Greenlandic

ce Chechen
inh Ingush
av Avar
lez Lezgian
dar Dargwa
lbe Lak
tab Tabasaran
ady Adyghe
kbd Kabardian
ab Abkhaz
xmf Mingrelian
os Ossetian

ty Tahitian
niu Niuean
tvl Tuvaluan
rap Rapanui
rar Cook Islands Māori
mh Marshallese
gil Gilbertese
ch Chamorro
tet Tetum
bi Bislama
pjt Pitjantjatjara
wbp Warlpiri

mni Meitei
new Newari
brx Bodo
lus Mizo
dz Dzongkha
min Minangkabau
ban Balinese
ace Acehnese
bug Buginese
war Waray
bik Bikol Central
tum Tumbuka

din Dinka
nus Nuer
luo Luo
mas Maasai
sid Sidamo
aa Afar
shi Tashelhit
rif Tarifit
mwr Marwari
bgc Haryanvi
ks Kashmiri
kok Konkani

mnp Min Bei
cpx Pu-Xian Min
nan_te Teochew
yue_ts Taishanese
wuu_wz Wenzhounese
wuu_sz Suzhou Wu
czh Hui Chinese
cnp Pinghua
zh_jh Jianghuai Mandarin
zh_tj Tianjin Mandarin
zh_lz Lanyin Mandarin
dng Dungan

hsb Upper Sorbian
csb Kashubian
fur Friulian
ast Asturian
an Aragonese
rup Aromanian
wa Walloon
kv Komi
udm Udmurt
mhr Meadow Mari
myv Erzya
krl Karelian

mzn Mazandarani
glk Gilaki
lrc Lurish
crh Crimean Tatar
tt Tatar
ba Bashkir
krc Karachay-Balkar
ksw Sgaw Karen
lhu Lahu
lis Lisu
nxq Naxi
shn Shan

ee Ewe
nyn Runyankole
luy Luhya
ssw Swazi
nbl Southern Ndebele
nso Northern Sotho
fan Fang
naq Nama (Khoekhoe)
hts Hadza
kr Kanuri
men Mende
dyu Dyula

syl Sylheti
mag Magahi
doi Dogri
mon Mon
xkk Khmu
moh Mohawk
cho Choctaw
esu Central Alaskan Yupik
ipk Inupiaq
apw Western Apache
dak Dakota
chy Cheyenne

lmo Lombard
pms Piedmontese
eml Emilian-Romagnol
mwl Mirandese
pnt Pontic Greek
hno Hindko
bhb Bhili
cja Cham
hmo Hiri Motu
pon Pohnpeian
syr Assyrian Neo-Aramaic
vmw Makhuwa

dsb Lower Sorbian
gv Manx
kw Cornish
zza Zaza
brh Brahui
mrq Marquesan
tiw Tiwi
guc Wayuu
myp Pirahã
emp Northern Embera
kpe Kpelle
loz Lozi

bbc Toba Batak
bjn Banjar
sas Sasak
kha Khasi
mns Mansi
mrw Maranao
tsg Tausug
yap Yapese
chk Chuukese
gbm Garhwali
kfy Kumaoni
xnr Kangri

hr Croatian
bs Bosnian
iba Iban
ljp Lampung
tzm Central Atlas Tamazight
ng Ndonga
umb Umbundu
kmb Kimbundu
her Herero
xal Kalmyk
sg Sango
toi Tonga (Zambia)
```

## Reference templates already filled

The `ja` (Japanese) and `en` (English) translations are already in `app.js`. Use them as references for parenthetical disambiguators (e.g. "Tonga (Zambia)" not just "Tonga", since ISO has another `to` Tongan).

## Quality bar

- Use the most well-established native-language convention for naming foreign languages
- For Sinitic varieties: keep the "Chinese (Variety)" format consistent with existing entries
- For Russian Far East/Siberian languages: use the conventional Russian-area linguistic naming (e.g. "Yakut" / "Sakha" depending on tradition)
- For African languages: use the language name (no "language" suffix unless conventional in the target UI lang)

## Output format example (for ko, partial)

```
sah:'사하어', tyv:'투바어', kjh:'하카스어', alt:'알타이어', bxr:'부랴트어', evn:'에벤키어', eve:'에벤어', yrk:'네네츠어', kca:'한티어', ckt:'추크치어', niv:'니브흐어', ket:'케트어',
cjy:'중국어(진어)', hsn:'중국어(상어)', gan:'중국어(간어)', ...
```
