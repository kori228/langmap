/**
 * Word Map Data — 20 key words × 579 languages/varieties (incl. ~80 historical)
 * Each language has: coordinates (primary city), native name, and word entries with IPA
 */

const WORD_LIST = [
  { id: 'water', label: { en: 'Water', ja: '水', ko: '물', zh: '水', yue: '水', vi: 'Nước', th: 'น้ำ', id: 'Air', hi: 'पानी', de: 'Wasser', fr: 'Eau', it: 'Acqua', es: 'Agua', pt: 'Água', ru: 'Вода', uk: 'Вода', ar: 'ماء', he: 'מים', sw: 'Maji' } },
  { id: 'fire', label: { en: 'Fire', ja: '火', ko: '불', zh: '火', yue: '火', vi: 'Lửa', th: 'ไฟ', id: 'Api', hi: 'आग', de: 'Feuer', fr: 'Feu', it: 'Fuoco', es: 'Fuego', pt: 'Fogo', ru: 'Огонь', uk: 'Вогонь', ar: 'نار', he: 'אש', sw: 'Moto' } },
  { id: 'sun', label: { en: 'Sun', ja: '日', ko: '해', zh: '太阳', yue: '日頭', vi: 'Mặt trời', th: 'ดวงอาทิตย์', id: 'Matahari', hi: 'सूरज', de: 'Sonne', fr: 'Soleil', it: 'Sole', es: 'Sol', pt: 'Sol', ru: 'Солнце', uk: 'Сонце', ar: 'شمس', he: 'שמש', sw: 'Jua' } },
  { id: 'moon', label: { en: 'Moon', ja: '月', ko: '달', zh: '月亮', yue: '月亮', vi: 'Mặt trăng', th: 'ดวงจันทร์', id: 'Bulan', hi: 'चाँद', de: 'Mond', fr: 'Lune', it: 'Luna', es: 'Luna', pt: 'Lua', ru: 'Луна', uk: 'Місяць', ar: 'قمر', he: 'ירח', sw: 'Mwezi' } },
  { id: 'mother', label: { en: 'Mother', ja: '母', ko: '어머니', zh: '母亲', yue: '母親', vi: 'Mẹ', th: 'แม่', id: 'Ibu', hi: 'माँ', de: 'Mutter', fr: 'Mère', it: 'Madre', es: 'Madre', pt: 'Mãe', ru: 'Мать', uk: 'Мати', ar: 'أم', he: 'אמא', sw: 'Mama' } },
  { id: 'father', label: { en: 'Father', ja: '父', ko: '아버지', zh: '父亲', yue: '父親', vi: 'Bố', th: 'พ่อ', id: 'Ayah', hi: 'पिता', de: 'Vater', fr: 'Père', it: 'Padre', es: 'Padre', pt: 'Pai', ru: 'Отец', uk: 'Батько', ar: 'أب', he: 'אבא', sw: 'Baba' } },
  { id: 'eat', label: { en: 'Eat', ja: '食べる', ko: '먹다', zh: '吃', yue: '食', vi: 'Ăn', th: 'กิน', id: 'Makan', hi: 'खाना', de: 'Essen', fr: 'Manger', it: 'Mangiare', es: 'Comer', pt: 'Comer', ru: 'Есть', uk: 'Їсти', ar: 'أكل', he: 'לאכול', sw: 'Kula' } },
  { id: 'drink', label: { en: 'Drink', ja: '飲む', ko: '마시다', zh: '喝', yue: '飲', vi: 'Uống', th: 'ดื่ม', id: 'Minum', hi: 'पीना', de: 'Trinken', fr: 'Boire', it: 'Bere', es: 'Beber', pt: 'Beber', ru: 'Пить', uk: 'Пити', ar: 'شرب', he: 'לשתות', sw: 'Kunywa' } },
  { id: 'love', label: { en: 'Love', ja: '愛', ko: '사랑', zh: '爱', yue: '愛', vi: 'Yêu', th: 'รัก', id: 'Cinta', hi: 'प्रेम', de: 'Liebe', fr: 'Amour', it: 'Amore', es: 'Amor', pt: 'Amor', ru: 'Любовь', uk: 'Любов', ar: 'حب', he: 'אהבה', sw: 'Upendo' } },
  { id: 'heart', label: { en: 'Heart', ja: '心', ko: '마음', zh: '心', yue: '心', vi: 'Tim', th: 'ใจ', id: 'Hati', hi: 'दिल', de: 'Herz', fr: 'Cœur', it: 'Cuore', es: 'Corazón', pt: 'Coração', ru: 'Сердце', uk: 'Серце', ar: 'قلب', he: 'לב', sw: 'Moyo' } },
  { id: 'tree', label: { en: 'Tree', ja: '木', ko: '나무', zh: '树', yue: '樹', vi: 'Cây', th: 'ต้นไม้', id: 'Pohon', hi: 'पेड़', de: 'Baum', fr: 'Arbre', it: 'Albero', es: 'Árbol', pt: 'Árvore', ru: 'Дерево', uk: 'Дерево', ar: 'شجرة', he: 'עץ', sw: 'Mti' } },
  { id: 'house', label: { en: 'House', ja: '家', ko: '집', zh: '房子', yue: '屋', vi: 'Nhà', th: 'บ้าน', id: 'Rumah', hi: 'घर', de: 'Haus', fr: 'Maison', it: 'Casa', es: 'Casa', pt: 'Casa', ru: 'Дом', uk: 'Дім', ar: 'بيت', he: 'בית', sw: 'Nyumba' } },
  { id: 'dog', label: { en: 'Dog', ja: '犬', ko: '개', zh: '狗', yue: '狗', vi: 'Chó', th: 'หมา', id: 'Anjing', hi: 'कुत्ता', de: 'Hund', fr: 'Chien', it: 'Cane', es: 'Perro', pt: 'Cão', ru: 'Собака', uk: 'Собака', ar: 'كلب', he: 'כלב', sw: 'Mbwa' } },
  { id: 'cat', label: { en: 'Cat', ja: '猫', ko: '고양이', zh: '猫', yue: '貓', vi: 'Mèo', th: 'แมว', id: 'Kucing', hi: 'बिल्ली', de: 'Katze', fr: 'Chat', it: 'Gatto', es: 'Gato', pt: 'Gato', ru: 'Кошка', uk: 'Кіт', ar: 'قطة', he: 'חתול', sw: 'Paka' } },
  { id: 'hand', label: { en: 'Hand', ja: '手', ko: '손', zh: '手', yue: '手', vi: 'Tay', th: 'มือ', id: 'Tangan', hi: 'हाथ', de: 'Hand', fr: 'Main', it: 'Mano', es: 'Mano', pt: 'Mão', ru: 'Рука', uk: 'Рука', ar: 'يد', he: 'יד', sw: 'Mkono' } },
  { id: 'eye', label: { en: 'Eye', ja: '目', ko: '눈', zh: '眼睛', yue: '眼', vi: 'Mắt', th: 'ตา', id: 'Mata', hi: 'आँख', de: 'Auge', fr: 'Œil', it: 'Occhio', es: 'Ojo', pt: 'Olho', ru: 'Глаз', uk: 'Око', ar: 'عين', he: 'עין', sw: 'Jicho' } },
  { id: 'hello', label: { en: 'Hello', ja: 'こんにちは', ko: '안녕', zh: '你好', yue: '你好', vi: 'Xin chào', th: 'สวัสดี', id: 'Halo', hi: 'नमस्ते', de: 'Hallo', fr: 'Bonjour', it: 'Ciao', es: 'Hola', pt: 'Olá', ru: 'Привет', uk: 'Привіт', ar: 'مرحبا', he: 'שלום', sw: 'Habari' } },
  { id: 'thanks', label: { en: 'Thank you', ja: 'ありがとう', ko: '감사', zh: '谢谢', yue: '多謝', vi: 'Cảm ơn', th: 'ขอบคุณ', id: 'Terima kasih', hi: 'धन्यवाद', de: 'Danke', fr: 'Merci', it: 'Grazie', es: 'Gracias', pt: 'Obrigado', ru: 'Спасибо', uk: 'Дякую', ar: 'شكرا', he: 'תודה', sw: 'Asante' } },
  { id: 'one', label: { en: 'One', ja: '一', ko: '하나', zh: '一', yue: '一', vi: 'Một', th: 'หนึ่ง', id: 'Satu', hi: 'एक', de: 'Eins', fr: 'Un', it: 'Uno', es: 'Uno', pt: 'Um', ru: 'Один', uk: 'Один', ar: 'واحد', he: 'אחד', sw: 'Moja' } },
  { id: 'good', label: { en: 'Good', ja: '良い', ko: '좋은', zh: '好', yue: '好', vi: 'Tốt', th: 'ดี', id: 'Baik', hi: 'अच्छा', de: 'Gut', fr: 'Bon', it: 'Buono', es: 'Bueno', pt: 'Bom', ru: 'Хороший', uk: 'Добрий', ar: 'جيد', he: 'טוב', sw: 'Nzuri' } },
];

// Excluded codes: hidden from the default modern view. Includes:
//   - Historical / classical / extinct languages (Latin, Old English, Akkadian, …)
//   - Liturgical-only varieties (Pali, Coptic, Aramaic continuum)
//   - Pedagogical reconstructions of older registers (ja_edo, ko_mid, vi_nom)
//   - Genuine reconstructions (Proto-Indo-European)
//   - Critically endangered or revived (Manchu, Sanskrit-as-classical)
//   - Constructed / artificial languages can also live here
// Per wordmap-check-3.md §8: not all entries here are strictly "extinct";
// some have small modern speaker communities (e.g. Manchu, Aramaic dialects,
// liturgical Sanskrit). The shared property is "hidden from the modern view by default".
const EXCLUDED_CODES = new Set([
  'ja_edo','ja_heian','ko_mid','ko_em','la','egy','sux','akk','hit','nci','myn','ine',
  'non','en_ang','enm','got','cu','pi','cop','arc','el_grc','zh_song','zh_han','zh_tang',
  'vi_nom','sa','mnc',
  // Phase 4: historical / ancient
  'peo','ave','xto','txb','phn','uga','xlu','pal','syc','fro','goh','gez',
  // Phase 4B: more historical
  'gmy','xct','xpu','xhu','elx','xsa','kaw','kho','gmh','osp','okz','osx',
  // Phase 5 historical
  'xpr','xqa','sga',
  // Phase 6 historical
  'mga','hbo',
  // Phase 8 historical
  'xng',
  // Phase 13: ancient Asian additions
  'och','ojp','vsa','txg','sog','otk',
  // Phase 13b: NE Asian + SE Asian ancient
  'zkt','juc','omx','pyx','obr','occ',
  // Phase 13c: Russia / Thailand / Africa / Americas / Indonesia / Philippines ancient
  'orv','xsc','sukh','xmr','onw','cqu','omc','chb','oma','osu','otl'
]);

const LANG_DATA = {
  // === East Asian ===
  ja: { name: 'Japanese', native: '日本語', lat: 35.68, lng: 139.69, // Tokyo
    words: { water:['水','mizɯ'], fire:['火','hi'], sun:['日','hi'], moon:['月','tsɯki'], mother:['母','haha'], father:['父','tɕitɕi'], eat:['食べる','tabeɾɯ'], drink:['飲む','nomɯ'], love:['愛','ai'], heart:['心','kokoɾo'], tree:['木','ki'], house:['家','ie'], dog:['犬','inɯ'], cat:['猫','neko'], hand:['手','te'], eye:['目','me'], hello:['こんにちは','konnitɕiwa'], thanks:['ありがとう','aɾiɡatoː'], one:['一','itɕi'], good:['良い','joi'] }},
  ja_osa: { name: 'Japanese (Osaka)', native: '日本語(大阪)', lat: 34.69, lng: 135.50,
    words: { water:['水','mizɯ'], fire:['火','hi'], sun:['日','hi'], moon:['月','tsɯki'], mother:['おかん','okaN'], father:['おとん','otoN'], eat:['食べる','tabeɾɯ'], drink:['飲む','nomɯ'], love:['愛','ai'], heart:['心','kokoɾo'], tree:['木','ki'], house:['家','ie'], dog:['犬','inɯ'], cat:['猫','neko'], hand:['手','te'], eye:['目','me'], hello:['毎度','maido'], thanks:['おおきに','oːkini'], one:['一','itɕi'], good:['良え','eː'] }},
  ja_aom: { name: 'Japanese (Aomori)', native: '日本語(青森)', lat: 40.82, lng: 140.74,
    words: { water:['水','mizɯ'], fire:['火','hi'], sun:['日','hi'], moon:['月','tsɯki'], mother:['かっちゃ','kattɕa'], father:['とっちゃ','tottɕa'], eat:['食う','kɯː'], drink:['飲む','nomɯ'], love:['愛','ai'], heart:['心','kokoɾo'], tree:['木','ki'], house:['家','ie'], dog:['犬','inɯ'], cat:['猫','neko'], hand:['手','te'], eye:['目','me'], hello:['どうも','doːmo'], thanks:['ありがどー','aɾiɡadoː'], one:['一','itɕi'], good:['良い','iː'] }},
  ja_oki: { name: 'Japanese (Okinawa)', native: '日本語(沖縄)', lat: 26.33, lng: 127.80,
    words: { water:['水','midʑi'], fire:['火','hi'], sun:['てぃだ','tida'], moon:['月','tɕitɕi'], mother:['あんまー','ammaː'], father:['すー','suː'], eat:['食むん','kamun'], drink:['飲むん','numun'], love:['愛','ai'], heart:['心','kukuɾu'], tree:['木','kiː'], house:['家','jaː'], dog:['犬','inɯ'], cat:['まやー','majaː'], hand:['手','tiː'], eye:['目','miː'], hello:['はいさい','haisai'], thanks:['にふぇーでーびる','niɸeːdeːbiɾu'], one:['一','tʰiːtɕi'], good:['まし','maɕi'] }},
  ja_hak: { name: 'Japanese (Hakata)', native: '日本語(博多)', lat: 33.59, lng: 130.40,
    words: { water:['水','mizɯ'], fire:['火','hi'], sun:['日','hi'], moon:['月','tsɯki'], mother:['おかん','okaN'], father:['おとん','otoN'], eat:['食べる','tabeɾɯ'], drink:['飲む','nomɯ'], love:['愛','ai'], heart:['心','kokoɾo'], tree:['木','ki'], house:['家','ie'], dog:['犬','inɯ'], cat:['猫','neko'], hand:['手','te'], eye:['目','me'], hello:['良かねー','jokaneː'], thanks:['ありがとう','aɾiɡatoː'], one:['一','itɕi'], good:['良か','joka'] }},
  ja_kyo: { name: 'Japanese (Kyoto)', native: '日本語(京都)', lat: 35.01, lng: 135.77,
    words: { water:['水','mizɯ'], fire:['火','hi'], sun:['日','hi'], moon:['月','tsɯki'], mother:['お母さん','okaːsaN'], father:['お父さん','otoːsaN'], eat:['食べる','tabeɾɯ'], drink:['飲む','nomɯ'], love:['愛','ai'], heart:['心','kokoɾo'], tree:['木','ki'], house:['家','ie'], dog:['犬','inɯ'], cat:['猫','neko'], hand:['手','te'], eye:['目','me'], hello:['おいでやす','oidejasɯ'], thanks:['おおきに','oːkini'], one:['一','itɕi'], good:['宜し','joɾoɕi'] }},
  ja_hir: { name: 'Japanese (Hiroshima)', native: '日本語(広島)', lat: 34.39, lng: 132.46,
    words: { water:['水','mizɯ'], fire:['火','hi'], sun:['日','hi'], moon:['月','tsɯki'], mother:['おふくろ','ohɯkɯɾo'], father:['親父','ojadʑi'], eat:['食べる','tabeɾɯ'], drink:['飲む','nomɯ'], love:['愛','ai'], heart:['心','kokoɾo'], tree:['木','ki'], house:['家','ie'], dog:['犬','inɯ'], cat:['猫','neko'], hand:['手','te'], eye:['目','me'], hello:['やあ','jaː'], thanks:['ありがとう','aɾiɡatoː'], one:['一','itɕi'], good:['良え','eː'] }},
  ja_mvi: { name: 'Miyako', native: '宮古語', lat: 24.79, lng: 125.28,
    words: { water:['水','midzu'], fire:['火','piː'], sun:['てぃだ','tida'], moon:['月','tsɨkɨ'], mother:['あんま','amma'], father:['うや','uja'], eat:['食む','kamu'], drink:['飲む','numu'], love:['愛','ai'], heart:['肝','kimu'], tree:['木','kiː'], house:['家','jaː'], dog:['犬','in'], cat:['猫','majaː'], hand:['手','tiː'], eye:['目','miː'], hello:['んみゃーち','mjaːtɕi'], thanks:['たんでぃがーたんでぃ','tandiɡaːtandi'], one:['一つ','puːts'], good:['まし','maɕi'] }},
  ja_rys: { name: 'Yaeyama', native: '八重山語', lat: 24.34, lng: 124.16,
    words: { water:['水','midzɨ'], fire:['火','piː'], sun:['てぃだ','tida'], moon:['月','tsɨkɨ'], mother:['あんま','amma'], father:['うや','uja'], eat:['食むん','kamun'], drink:['飲むん','numun'], love:['愛','ai'], heart:['肝','kimu'], tree:['木','kiː'], house:['家','jaː'], dog:['犬','in'], cat:['猫','majaː'], hand:['手','tiː'], eye:['目','miː'], hello:['おーりとーり','oːɾitoːɾi'], thanks:['みーふぁいゆー','miːɸaijuː'], one:['一つ','puːtsɨ'], good:['まし','maɕi'] }},
  ko: { name: 'Korean', native: '한국어', lat: 37.57, lng: 126.98, // Seoul
    words: { water:['물','mul'], fire:['불','pul'], sun:['해','hɛ'], moon:['달','tal'], mother:['어머니','ʌmʌni'], father:['아버지','abʌdʑi'], eat:['먹다','mʌk̚t͈a'], drink:['마시다','maɕida'], love:['사랑','saɾaŋ'], heart:['마음','maɯm'], tree:['나무','namu'], house:['집','tɕip̚'], dog:['개','kɛ'], cat:['고양이','kojaŋi'], hand:['손','son'], eye:['눈','nun'], hello:['안녕하세요','annjʌŋhasejo'], thanks:['고맙습니다','komapsɯmnida'], one:['하나','hana'], good:['좋다','tɕot̚t͈a'] }},
  ko_kp: { name: 'Korean (DPRK)', native: '조선말', lat: 39.02, lng: 125.75, // Pyongyang
    words: { water:['물','mul'], fire:['불','pul'], sun:['해','hɛ'], moon:['달','tal'], mother:['어머니','ʌmʌni'], father:['아버지','abʌdʑi'], eat:['먹다','mʌk̚t͈a'], drink:['마시다','maɕida'], love:['사랑','saɾaŋ'], heart:['마음','maɯm'], tree:['나무','namu'], house:['집','tɕip̚'], dog:['개','kɛ'], cat:['고양이','kojaŋi'], hand:['손','son'], eye:['눈','nun'], hello:['안녕하십니까','annjʌŋhaɕimnikka'], thanks:['고맙습니다','komapsɯmnida'], one:['하나','hana'], good:['좋다','tɕot̚t͈a'] }},
  ko_bus: { name: 'Korean (Busan)', native: '한국어(부산)', lat: 35.18, lng: 129.08,
    words: { water:['물','mul'], fire:['불','pul'], sun:['해','hɛ'], moon:['달','tal'], mother:['엄마','ʌmma'], father:['아부지','abudʑi'], eat:['묵다','muk̚t͈a'], drink:['마시다','maɕida'], love:['사랑','saɾaŋ'], heart:['마음','maɯm'], tree:['나무','namu'], house:['집','tɕip̚'], dog:['개','kɛ'], cat:['고양이','kojaŋi'], hand:['손','son'], eye:['눈','nun'], hello:['안녕하이소','annjʌŋhaiso'], thanks:['고맙습니다','komap̚sɯmnida'], one:['하나','hana'], good:['좋다','tɕot̚t͈a'] }},
  ko_jeju: { name: 'Korean (Jeju)', native: '제주어', lat: 33.50, lng: 126.53,
    words: { water:['물','mul'], fire:['불','pul'], sun:['해','hɛ'], moon:['달','tal'], mother:['어멍','ʌmʌŋ'], father:['아방','abaŋ'], eat:['먹다','mʌk̚t͈a'], drink:['마시다','maɕida'], love:['사랑','saɾaŋ'], heart:['마음','maɯm'], tree:['낭','naŋ'], house:['집','tɕip̚'], dog:['개','kɛ'], cat:['괭이','kwaŋi'], hand:['손','son'], eye:['눈','nun'], hello:['혼저옵서예','hondʑʌop̚sʌje'], thanks:['고맙수다','komap̚suda'], one:['하나','hana'], good:['좋다','tɕot̚t͈a'] }},
  ko_yb: { name: 'Yanbian Korean', native: '연변조선어', lat: 42.90, lng: 129.51,
    words: { water:['물','mul'], fire:['불','pul'], sun:['해','hɛ'], moon:['달','tal'], mother:['어무이','ʌmui'], father:['아부지','abudʑi'], eat:['먹다','mʌk̚t͈a'], drink:['마시다','maɕida'], love:['사랑','saɾaŋ'], heart:['마음','maɯm'], tree:['나무','namu'], house:['집','tɕip̚'], dog:['개','kɛ'], cat:['고양이','kojaŋi'], hand:['손','son'], eye:['눈','nun'], hello:['안녕하십니까','annjʌŋhaɕimnikka'], thanks:['고맙습니다','komapsɯmnida'], one:['하나','hana'], good:['좋다','tɕot̚t͈a'] }},
  zh: { name: 'Chinese (Mandarin)', native: '中文', lat: 39.90, lng: 116.40, // Beijing
    words: { water:['水','ʂweɪ̯˧˩˧'], fire:['火','xwo˧˩˧'], sun:['太阳','tʰaɪ̯˥˩jɑŋ˧˥'], moon:['月亮','ɥɛ˥˩ljɑŋ˩'], mother:['妈妈','mama'], father:['爸爸','papa'], eat:['吃','ʈʂʰɨ˥'], drink:['喝','xɤ˥'], love:['爱','aɪ̯˥˩'], heart:['心','ɕin˥'], tree:['树','ʂu˥˩'], house:['房子','fɑŋ˧˥tsɨ'], dog:['狗','koʊ̯˧˩˧'], cat:['猫','mɑʊ̯˥'], hand:['手','ʂoʊ̯˧˩˧'], eye:['眼睛','jɛn˧˩˧tɕiŋ˥'], hello:['你好','ni˧˩˧xaʊ̯˧˩˧'], thanks:['谢谢','ɕjɛ˥˩ɕjɛ'], one:['一','i˥'], good:['好','xaʊ̯˧˩˧'] }},
  yue: { name: 'Cantonese', native: '廣東話', lat: 22.28, lng: 114.16, // Hong Kong
    words: { water:['水','sɵy˧˥'], fire:['火','fɔː˧˥'], sun:['日头','jɐt˨ tʰɐu˨˩'], moon:['月光','jyːt˨ kʷɔːŋ˥'], mother:['妈妈','maː˥maː˥'], father:['爸爸','paː˨˩paː˥'], eat:['食','sɪk˨'], drink:['饮','jɐm˧˥'], love:['爱','ɔːi˧'], heart:['心','sɐm˥'], tree:['树','syː˨'], house:['屋','ʊk˥'], dog:['狗','kɐu˧˥'], cat:['猫','maːu˥'], hand:['手','sɐu˧˥'], eye:['眼','ŋaːn˧˩'], hello:['你好','neːi˧˩hɔːu˧˥'], thanks:['多谢','tɔː˥tɕɛː˨'], one:['一','jɐt˥'], good:['好','hɔːu˧˥'] }},
  nan: { name: 'Taiwanese', native: '台語', lat: 25.03, lng: 121.57, // Taipei
    words: { water:['水','tsui˧˥'], fire:['火','hue˧˥'], sun:['日頭','lit˦˧tʰau˧˥'], moon:['月娘','ɡueʔ˦niu˧˥'], mother:['媽媽','mama'], father:['爸爸','papa'], eat:['食','tsiaʔ˦'], drink:['啉','lim˥'], love:['愛','ai˧'], heart:['心','sim˥'], tree:['樹','tsʰiu˧'], house:['厝','tsʰu˧'], dog:['狗','kau˧˥'], cat:['貓','niau˥'], hand:['手','tsʰiu˧˥'], eye:['目','bak˦'], hello:['你好','li˧˥ho˧˥'], thanks:['多謝','to˥sia˧'], one:['一','it˦'], good:['好','ho˧˥'] }},
  wuu: { name: 'Wu Chinese', native: '吳語', lat: 31.23, lng: 121.47,
    words: { water:['水','sɿ˧˩'], fire:['火','hu˧˩'], sun:['太阳','da˩jã˩'], moon:['月亮','ɲyəʔ˧liã˩'], mother:['姆妈','m̩ma'], father:['爸爸','pa˧˩pa'], eat:['吃','tɕʰiʔ˧'], drink:['喝','huəʔ˧'], love:['爱','ɛ˧˩'], heart:['心','ɕin˥'], tree:['树','zɿ˩'], house:['屋里','oʔ˧li'], dog:['狗','kɤ˧˩'], cat:['猫','mɔ˥'], hand:['手','sɤ˧˩'], eye:['眼睛','ŋɛ˩tɕin˥'], hello:['侬好','noŋ˩hɔ˧˩'], thanks:['谢谢','ʑia˩ʑia'], one:['一','iʔ˧'], good:['好','hɔ˧˩'] }},
  hak_cn: { name: 'Hakka', native: '客家话', lat: 24.30, lng: 116.12, // Meizhou
    words: { water:['水','sui˧˩'], fire:['火','fo˧˩'], sun:['日头','ŋit˧tʰeu˧˥'], moon:['月光','ŋiat˧koŋ˥'], mother:['阿姆','a˥me˧'], father:['阿爸','a˥pa˥'], eat:['食','sɨt˧'], drink:['饮','iam˧˩'], love:['爱','oi˧'], heart:['心','sim˥'], tree:['树','su˧'], house:['屋','vuk˧'], dog:['狗','kieu˧˩'], cat:['猫','miau˥'], hand:['手','su˧˩'], eye:['目','muk˧'], hello:['你好','ngi˧˥ho˧˩'], thanks:['多谢','to˥tsia˧'], one:['一','it˧'], good:['好','ho˧˩'] }},
  vi: { name: 'Vietnamese', native: 'Tiếng Việt', lat: 21.03, lng: 105.85, // Hanoi (Northern)
    words: { water:['nước','nɨək˧˥'], fire:['lửa','lɨə˧˩˧'], sun:['mặt trời','mət˨˩ tɤːj˨˩'], moon:['mặt trăng','mət˨˩ tɤŋ˥'], mother:['mẹ','mɛ˨˩'], father:['bố','ɓo˧˥'], eat:['ăn','an˥'], drink:['uống','uəŋ˧˥'], love:['yêu','iəw˥'], heart:['trái tim','tɕaj˧˥ tim˥'], tree:['cây','kəj˧˥'], house:['nhà','ɲaː˨˩'], dog:['chó','tɕɔ˧˥'], cat:['mèo','mɛw˨˩'], hand:['tay','taj˥'], eye:['mắt','mak˧˥'], hello:['xin chào','sin˥ tɕaːw˨˩'], thanks:['cảm ơn','kaːm˧˩˧ əːn˥'], one:['một','mot˨˩'], good:['tốt','tot˧˥'] }},
  vi_c: { name: 'Vietnamese (Central)', native: 'Tiếng Việt (Miền Trung)', lat: 16.46, lng: 107.60, // Huế
    words: { water:['nước','nɨːk˧˥'], fire:['lửa','lɨə˧˩'], sun:['mặt trời','maːk˨˨ ʈɤːj˧˨'], moon:['mặt trăng','maːk˨˨ ʈăːŋ˥'], mother:['mạ','maː˨˨'], father:['bọ','ɓɔː˨˨'], eat:['ăn','aːn˥'], drink:['uống','uəŋ˩˧'], love:['thương','tʰɨəŋ˥'], heart:['trái tim','ʈaːj˩˧ tiːm˥'], tree:['cây','kəːj˧˥'], house:['nhà','ɲaː˧˨'], dog:['chó','tɕɔː˩˧'], cat:['mèo','mɛːw˧˨'], hand:['tay','taːj˥'], eye:['mắt','maːk˧˥'], hello:['xin chào','siːn˥ tɕaːw˧˨'], thanks:['cảm ơn','kaːm˧˩ əːn˥'], one:['một','moːk˨˨'], good:['tốt','toːk˧˥'] }},
  vi_s: { name: 'Vietnamese (Southern)', native: 'Tiếng Việt (Miền Nam)', lat: 10.82, lng: 106.63, // Ho Chi Minh
    words: { water:['nước','nɨək˧˥'], fire:['lửa','lɨə˨˩˥'], sun:['mặt trời','mak˨˩˨ tɤːj˨˩'], moon:['mặt trăng','mak˨˩˨ tɤŋ˥'], mother:['má','maː˧˥'], father:['ba','ɓaː˥'], eat:['ăn','aŋ˥'], drink:['uống','uəŋ˧˥'], love:['thương','tʰɨəŋ˥'], heart:['trái tim','ʈaːj˧˥ tim˥'], tree:['cây','kəj˧˥'], house:['nhà','ɲaː˨˩'], dog:['chó','ɕɔ˧˥'], cat:['mèo','mɛw˨˩'], hand:['tay','taj˥'], eye:['mắt','mak˧˥'], hello:['xin chào','siŋ˥ ɕaːw˨˩'], thanks:['cảm ơn','kaːm˨˩˥ əːn˥'], one:['một','mok˨˩˨'], good:['tốt','tok˧˥'] }},
  th: { name: 'Thai', native: 'ไทย', lat: 13.76, lng: 100.50, // Bangkok
    words: { water:['น้ำ','naːm˧˥'], fire:['ไฟ','faj˥'], sun:['ดวงอาทิตย์','duaŋ˥ʔaː˥tʰit˧˥'], moon:['ดวงจันทร์','duaŋ˥tɕan˥'], mother:['แม่','mɛː˥˩'], father:['พ่อ','pʰɔː˥˩'], eat:['กิน','kin˥'], drink:['ดื่ม','dɯːm˥˩'], love:['รัก','rak˧˥'], heart:['ใจ','tɕaj˥'], tree:['ต้นไม้','ton˧˥maj˧˥'], house:['บ้าน','baːn˧˥'], dog:['หมา','maː˩˧'], cat:['แมว','mɛːw˥'], hand:['มือ','mɯː˥'], eye:['ตา','taː˥'], hello:['สวัสดี','sa˨˩wat˨˩diː˥'], thanks:['ขอบคุณ','kʰɔːp˨˩kʰun˥'], one:['หนึ่ง','nɯŋ˨˩'], good:['ดี','diː˥'] }},
  id: { name: 'Indonesian', native: 'Bahasa Indonesia', lat: -6.21, lng: 106.85, // Jakarta
    words: { water:['air','air'], fire:['api','api'], sun:['matahari','matahari'], moon:['bulan','bulan'], mother:['ibu','ibu'], father:['ayah','ajah'], eat:['makan','makan'], drink:['minum','minum'], love:['cinta','tɕinta'], heart:['hati','hati'], tree:['pohon','pohon'], house:['rumah','rumah'], dog:['anjing','andʒiŋ'], cat:['kucing','kutɕiŋ'], hand:['tangan','taŋan'], eye:['mata','mata'], hello:['halo','halo'], thanks:['terima kasih','tərima kasih'], one:['satu','satu'], good:['baik','baik'] }},
  ms: { name: 'Malay', native: 'Bahasa Melayu', lat: 3.14, lng: 101.69, // Kuala Lumpur
    words: { water:['air','air'], fire:['api','api'], sun:['matahari','matahari'], moon:['bulan','bulan'], mother:['ibu','ibu'], father:['ayah','ajah'], eat:['makan','makan'], drink:['minum','minum'], love:['cinta','tɕinta'], heart:['hati','hati'], tree:['pokok','pokok'], house:['rumah','rumah'], dog:['anjing','andʒiŋ'], cat:['kucing','kutɕiŋ'], hand:['tangan','taŋan'], eye:['mata','mata'], hello:['hai','hai'], thanks:['terima kasih','tərima kasih'], one:['satu','satu'], good:['baik','baik'] }},
  // === South Asian ===
  hi: { name: 'Hindi', native: 'हिन्दी', lat: 28.61, lng: 77.21, // Delhi
    words: { water:['पानी','paːniː'], fire:['आग','aːɡ'], sun:['सूरज','suːɾadʒ'], moon:['चाँद','tɕãːd'], mother:['माँ','mãː'], father:['पिता','pitaː'], eat:['खाना','kʰaːnaː'], drink:['पीना','piːnaː'], love:['प्यार','pjaːɾ'], heart:['दिल','dil'], tree:['पेड़','peːɽ'], house:['घर','ɡʱaɾ'], dog:['कुत्ता','kuttaː'], cat:['बिल्ली','billiː'], hand:['हाथ','haːtʰ'], eye:['आँख','ãːkʰ'], hello:['नमस्ते','namasteː'], thanks:['धन्यवाद','dʰanjaʋaːd'], one:['एक','eːk'], good:['अच्छा','atɕtɕʰaː'] }},
  sa: { name: 'Sanskrit', native: 'संस्कृतम्', lat: 27.18, lng: 78.02, // Agra (historical center)
    words: { water:['जलम्','dʒalam'], fire:['अग्निः','aɡniɦ'], sun:['सूर्यः','suːɾjaɦ'], moon:['चन्द्रः','tɕandɾaɦ'], mother:['माता','maːtaː'], father:['पिता','pitaː'], eat:['खादति','kʰaːdati'], drink:['पिबति','pibati'], love:['प्रेम','preːma'], heart:['हृदयम्','hɾɨdajam'], tree:['वृक्षः','vɾɨkʂaɦ'], house:['गृहम्','ɡɾɨham'], dog:['श्वा','ɕvaː'], cat:['मार्जारः','maːɾdʒaːɾaɦ'], hand:['हस्तः','hastaɦ'], eye:['नेत्रम्','neːtɾam'], hello:['नमस्ते','namasteː'], thanks:['धन्यवादः','dʰanjaʋaːdaɦ'], one:['एकम्','eːkam'], good:['उत्तमम्','uttamam'] }},
  bn: { name: 'Bengali', native: 'বাংলা', lat: 23.81, lng: 90.41, // Dhaka
    words: { water:['জল','dʒɔl'], fire:['আগুন','aɡun'], sun:['সূর্য','ʃuɾdʒo'], moon:['চাঁদ','tʃãd'], mother:['মা','ma'], father:['বাবা','baba'], eat:['খাওয়া','kʰaoa'], drink:['পান করা','pan kɔɾa'], love:['ভালোবাসা','bʰalobasa'], heart:['হৃদয়','hɾidɔe̯'], tree:['গাছ','ɡatʃʰ'], house:['বাড়ি','baɽi'], dog:['কুকুর','kukuɾ'], cat:['বিড়াল','biɽal'], hand:['হাত','hat'], eye:['চোখ','tʃokʰ'], hello:['নমস্কার','nɔmɔʃkaɾ'], thanks:['ধন্যবাদ','dʰɔnnobad'], one:['এক','ek'], good:['ভালো','bʰalo'] }},
  ur: { name: 'Urdu', native: 'اردو', lat: 31.56, lng: 74.35, // Lahore
    words: { water:['پانی','paːniː'], fire:['آگ','aːɡ'], sun:['سورج','suːɾadʒ'], moon:['چاند','tɕãːd'], mother:['ماں','mãː'], father:['والد','vaːlid'], eat:['کھانا','kʰaːnaː'], drink:['پینا','piːnaː'], love:['محبت','mohabːat'], heart:['دل','dil'], tree:['درخت','daɾaxt'], house:['گھر','ɡʱaɾ'], dog:['کتا','kuttaː'], cat:['بلی','bilːiː'], hand:['ہاتھ','haːtʰ'], eye:['آنکھ','ãːkʰ'], hello:['السلام علیکم','assalaːmu ʕalaikum'], thanks:['شکریہ','ʃukrijaː'], one:['ایک','eːk'], good:['اچھا','atʃtʃʰaː'] }},
  ta: { name: 'Tamil', native: 'தமிழ்', lat: 13.08, lng: 80.27, // Chennai
    words: { water:['நீர்','niːɾ'], fire:['தீ','tiː'], sun:['சூரியன்','suːɾijan'], moon:['நிலா','nilaː'], mother:['அம்மா','ammaː'], father:['அப்பா','appaː'], eat:['சாப்பிடு','saːpːiɖu'], drink:['குடி','kuɖi'], love:['காதல்','kaːdal'], heart:['இதயம்','idajam'], tree:['மரம்','maɾam'], house:['வீடு','viːɖu'], dog:['நாய்','naːj'], cat:['பூனை','puːnai'], hand:['கை','kaj'], eye:['கண்','kaɳ'], hello:['வணக்கம்','ʋaɳakkam'], thanks:['நன்றி','nanri'], one:['ஒன்று','ondru'], good:['நல்ல','nalla'] }},
  // === European ===
  en: { name: 'English', native: 'English', lat: 51.51, lng: -0.13, // London
    words: { water:['water','wɔːtər'], fire:['fire','faɪər'], sun:['sun','sʌn'], moon:['moon','muːn'], mother:['mother','mʌðər'], father:['father','fɑːðər'], eat:['eat','iːt'], drink:['drink','drɪŋk'], love:['love','lʌv'], heart:['heart','hɑːrt'], tree:['tree','triː'], house:['house','haʊs'], dog:['dog','dɒɡ'], cat:['cat','kæt'], hand:['hand','hænd'], eye:['eye','aɪ'], hello:['hello','hɛloʊ'], thanks:['thank you','θæŋk juː'], one:['one','wʌn'], good:['good','ɡʊd'] }},
  de: { name: 'German', native: 'Deutsch', lat: 52.52, lng: 13.41, // Berlin
    words: { water:['Wasser','vasɐ'], fire:['Feuer','fɔʏ̯ɐ'], sun:['Sonne','zɔnə'], moon:['Mond','moːnt'], mother:['Mutter','mʊtɐ'], father:['Vater','faːtɐ'], eat:['essen','ɛsn̩'], drink:['trinken','tʁɪŋkn̩'], love:['Liebe','liːbə'], heart:['Herz','hɛʁts'], tree:['Baum','baʊ̯m'], house:['Haus','haʊ̯s'], dog:['Hund','hʊnt'], cat:['Katze','katsə'], hand:['Hand','hant'], eye:['Auge','aʊ̯ɡə'], hello:['Hallo','haloː'], thanks:['Danke','daŋkə'], one:['eins','aɪ̯ns'], good:['gut','ɡuːt'] }},
  fr: { name: 'French', native: 'Français', lat: 48.86, lng: 2.35, // Paris
    words: { water:['eau','o'], fire:['feu','fø'], sun:['soleil','sɔlɛj'], moon:['lune','lyn'], mother:['mère','mɛːʁ'], father:['père','pɛːʁ'], eat:['manger','mɑ̃ʒe'], drink:['boire','bwaːʁ'], love:['amour','amuːʁ'], heart:['cœur','kœːʁ'], tree:['arbre','aʁbʁ'], house:['maison','mɛzɔ̃'], dog:['chien','ʃjɛ̃'], cat:['chat','ʃa'], hand:['main','mɛ̃'], eye:['œil','œj'], hello:['bonjour','bɔ̃ʒuːʁ'], thanks:['merci','mɛʁsi'], one:['un','œ̃'], good:['bon','bɔ̃'] }},
  it: { name: 'Italian', native: 'Italiano', lat: 41.90, lng: 12.50, // Rome
    words: { water:['acqua','akkwa'], fire:['fuoco','fwɔːko'], sun:['sole','soːle'], moon:['luna','luːna'], mother:['madre','maːdre'], father:['padre','paːdre'], eat:['mangiare','mandʒaːre'], drink:['bere','beːre'], love:['amore','amoːre'], heart:['cuore','kwɔːre'], tree:['albero','albero'], house:['casa','kaːza'], dog:['cane','kaːne'], cat:['gatto','ɡatto'], hand:['mano','maːno'], eye:['occhio','ɔkkjo'], hello:['ciao','tʃaːo'], thanks:['grazie','ɡrattsje'], one:['uno','uːno'], good:['buono','bwɔːno'] }},
  es_eu: { name: 'Spanish (Europe)', native: 'Español', lat: 40.42, lng: -3.70, // Madrid
    words: { water:['agua','aɣwa'], fire:['fuego','fweɣo'], sun:['sol','sol'], moon:['luna','luna'], mother:['madre','maðɾe'], father:['padre','paðɾe'], eat:['comer','komeɾ'], drink:['beber','beβeɾ'], love:['amor','amoɾ'], heart:['corazón','koɾaθon'], tree:['árbol','aɾβol'], house:['casa','kasa'], dog:['perro','pero'], cat:['gato','ɡato'], hand:['mano','mano'], eye:['ojo','oxo'], hello:['hola','ola'], thanks:['gracias','ɡɾaθjas'], one:['uno','uno'], good:['bueno','bweno'] }},
  es_mx: { name: 'Spanish (Mexico)', native: 'Español (México)', lat: 19.43, lng: -99.13, // Mexico City
    words: { water:['agua','aɣwa'], fire:['fuego','fweɣo'], sun:['sol','sol'], moon:['luna','luna'], mother:['madre','maðɾe'], father:['padre','paðɾe'], eat:['comer','komeɾ'], drink:['beber','beβeɾ'], love:['amor','amoɾ'], heart:['corazón','koɾason'], tree:['árbol','aɾβol'], house:['casa','kasa'], dog:['perro','pero'], cat:['gato','ɡato'], hand:['mano','mano'], eye:['ojo','oxo'], hello:['hola','ola'], thanks:['gracias','ɡɾasjas'], one:['uno','uno'], good:['bueno','bweno'] }},
  pt_eu: { name: 'Portuguese (Europe)', native: 'Português', lat: 38.72, lng: -9.14, // Lisbon
    words: { water:['água','aɡwɐ'], fire:['fogo','foɡu'], sun:['sol','sɔɫ'], moon:['lua','luɐ'], mother:['mãe','mɐ̃j'], father:['pai','paj'], eat:['comer','kumɛɾ'], drink:['beber','bɨbɛɾ'], love:['amor','ɐmoɾ'], heart:['coração','kuɾɐsɐ̃w'], tree:['árvore','aɾvuɾɨ'], house:['casa','kazɐ'], dog:['cão','kɐ̃w'], cat:['gato','ɡatu'], hand:['mão','mɐ̃w'], eye:['olho','oʎu'], hello:['olá','ɔla'], thanks:['obrigado','obɾiɡadu'], one:['um','ũ'], good:['bom','bõ'] }},
  pt_br: { name: 'Portuguese (Brazil)', native: 'Português (Brasil)', lat: -23.55, lng: -46.63, // São Paulo
    words: { water:['água','aɡwɐ'], fire:['fogo','foɡu'], sun:['sol','sɔw'], moon:['lua','luɐ'], mother:['mãe','mãj'], father:['pai','paj'], eat:['comer','komeɾ'], drink:['beber','bebeɾ'], love:['amor','amoɾ'], heart:['coração','koɾasãw'], tree:['árvore','aɾvoɾi'], house:['casa','kazɐ'], dog:['cachorro','kaʃohu'], cat:['gato','ɡatu'], hand:['mão','mãw'], eye:['olho','oʎu'], hello:['oi','oj'], thanks:['obrigado','obɾiɡadu'], one:['um','ũ'], good:['bom','bõ'] }},
  ru: { name: 'Russian', native: 'Русский', lat: 55.76, lng: 37.62, // Moscow
    words: { water:['вода','vɐda'], fire:['огонь','ɐɡonʲ'], sun:['солнце','sontsɨ'], moon:['луна','ɫʊna'], mother:['мать','matʲ'], father:['отец','ɐtʲets'], eat:['есть','jesʲtʲ'], drink:['пить','pʲitʲ'], love:['любовь','lʲʊbofʲ'], heart:['сердце','sʲertsɨ'], tree:['дерево','dʲerʲɪvɐ'], house:['дом','dom'], dog:['собака','sɐbakɐ'], cat:['кот','kot'], hand:['рука','rʊka'], eye:['глаз','ɡɫas'], hello:['привет','prʲɪvʲet'], thanks:['спасибо','spɐsʲibɐ'], one:['один','ɐdʲin'], good:['хорошо','xɐrɐʂo'] }},
  ar: { name: 'Arabic', native: 'العربية', lat: 24.71, lng: 46.68, // Riyadh
    words: { water:['ماء','maːʔ'], fire:['نار','naːr'], sun:['شمس','ʃams'], moon:['قمر','qamar'], mother:['أم','umm'], father:['أب','ab'], eat:['أكل','ʔakala'], drink:['شرب','ʃariba'], love:['حب','ħubb'], heart:['قلب','qalb'], tree:['شجرة','ʃadʒara'], house:['بيت','bajt'], dog:['كلب','kalb'], cat:['قطة','qitˤtˤa'], hand:['يد','jad'], eye:['عين','ʕajn'], hello:['مرحبا','marħaba'], thanks:['شكرا','ʃukran'], one:['واحد','waːħid'], good:['جيد','dʒajːid'] }},
  he: { name: 'Hebrew', native: 'עברית', lat: 32.07, lng: 34.78, // Tel Aviv
    words: { water:['מים','majim'], fire:['אש','eʃ'], sun:['שמש','ʃemeʃ'], moon:['ירח','jaɾeaχ'], mother:['אמא','ima'], father:['אבא','aba'], eat:['אוכל','oχel'], drink:['שותה','ʃote'], love:['אהבה','ahava'], heart:['לב','lev'], tree:['עץ','ets'], house:['בית','bajit'], dog:['כלב','kelev'], cat:['חתול','χatul'], hand:['יד','jad'], eye:['עין','ajin'], hello:['שלום','ʃalom'], thanks:['תודה','toda'], one:['אחד','eχad'], good:['טוב','tov'] }},
  tr: { name: 'Turkish', native: 'Türkçe', lat: 41.01, lng: 28.98, // Istanbul
    words: { water:['su','su'], fire:['ateş','ateʃ'], sun:['güneş','ɟyneʃ'], moon:['ay','aj'], mother:['anne','anːe'], father:['baba','baba'], eat:['yemek','jemek'], drink:['içmek','itʃmek'], love:['aşk','aʃk'], heart:['kalp','kalp'], tree:['ağaç','aːtʃ'], house:['ev','ev'], dog:['köpek','cøpek'], cat:['kedi','cedi'], hand:['el','el'], eye:['göz','ɟøz'], hello:['merhaba','meɾhaba'], thanks:['teşekkürler','teʃecːyɾleɾ'], one:['bir','biɾ'], good:['iyi','iji'] }},
  fa: { name: 'Persian', native: 'فارسی', lat: 35.69, lng: 51.39, // Tehran
    words: { water:['آب','ɒːb'], fire:['آتش','ɒːteʃ'], sun:['خورشید','xorʃiːd'], moon:['ماه','mɒːh'], mother:['مادر','mɒːdær'], father:['پدر','pedær'], eat:['خوردن','xordæn'], drink:['نوشیدن','nuːʃidæn'], love:['عشق','eʃq'], heart:['قلب','qælb'], tree:['درخت','deræxt'], house:['خانه','xɒːne'], dog:['سگ','sæɡ'], cat:['گربه','ɡorbe'], hand:['دست','dæst'], eye:['چشم','tʃeʃm'], hello:['درود','doɾuːd'], thanks:['سپاس','sepɒːs'], one:['یک','jek'], good:['خوب','xuːb'] }},
  sw: { name: 'Swahili', native: 'Kiswahili', lat: -6.79, lng: 39.28, // Dar es Salaam
    words: { water:['maji','madʒi'], fire:['moto','moto'], sun:['jua','dʒua'], moon:['mwezi','mwezi'], mother:['mama','mama'], father:['baba','baba'], eat:['kula','kula'], drink:['kunywa','kuɲwa'], love:['upendo','upendo'], heart:['moyo','mojo'], tree:['mti','mti'], house:['nyumba','ɲumba'], dog:['mbwa','mbwa'], cat:['paka','paka'], hand:['mkono','mkono'], eye:['jicho','dʒitʃo'], hello:['habari','habari'], thanks:['asante','asante'], one:['moja','modʒa'], good:['nzuri','nzuri'] }},
  tl: { name: 'Tagalog', native: 'Tagalog', lat: 14.60, lng: 120.98, // Manila
    words: { water:['tubig','tubiɡ'], fire:['apoy','apoj'], sun:['araw','aɾaw'], moon:['buwan','buwan'], mother:['ina','ina'], father:['ama','ama'], eat:['kumain','kumain'], drink:['uminom','uminom'], love:['pag-ibig','paɡʔibiɡ'], heart:['puso','puso'], tree:['puno','puno'], house:['bahay','bahaj'], dog:['aso','aso'], cat:['pusa','pusa'], hand:['kamay','kamaj'], eye:['mata','mata'], hello:['kamusta','kamusta'], thanks:['salamat','salamat'], one:['isa','isa'], good:['mabuti','mabuti'] }},
  mn: { name: 'Mongolian', native: 'Монгол', lat: 47.91, lng: 106.91, // Ulaanbaatar
    words: { water:['ус','os'], fire:['гал','ɡaɮ'], sun:['нар','nar'], moon:['сар','sar'], mother:['ээж','eːdʒ'], father:['аав','aːw'], eat:['идэх','idex'], drink:['уух','uːx'], love:['хайр','xajr'], heart:['зүрх','dzørx'], tree:['мод','mod'], house:['гэр','ɡer'], dog:['нохой','nɔxɔj'], cat:['муур','muːr'], hand:['гар','ɡar'], eye:['нүд','nyd'], hello:['сайн уу','sajn uː'], thanks:['баярлалаа','bajarɮaɮaː'], one:['нэг','neɡ'], good:['сайн','sajn'] }},
  // === Russian Far East / Siberia ===
  // Siberian Turkic
  sah: { name: 'Sakha', native: 'Саха тыла', lat: 62.03, lng: 129.73, // Yakutsk
    words: { water:['уу','uː'], fire:['уот','uɔt'], sun:['күн','kyn'], moon:['ый','ɯj'], mother:['ийэ','ije'], father:['аҕа','aʁa'], eat:['сиэ','sie'], drink:['ис','is'], love:['таптал','taptal'], heart:['сүрэх','syrex'], tree:['мас','mas'], house:['дьиэ','dʒie'], dog:['ыт','ɯt'], cat:['куоска','kuoska'], hand:['илии','iliː'], eye:['харах','xarax'], hello:['дорообо','doroːbo'], thanks:['махтал','maxtal'], one:['биир','biːr'], good:['үчүгэй','ytɕygej'] }},
  tyv: { name: 'Tuvan', native: 'Тыва дыл', lat: 51.72, lng: 94.43, // Kyzyl
    words: { water:['суг','suɣ'], fire:['от','ot'], sun:['хүн','xyn'], moon:['ай','aj'], mother:['ава','ava'], father:['ача','atɕa'], eat:['чиир','tɕiːr'], drink:['ижер','iʒer'], love:['ынакшыл','ɯnakʃɯl'], heart:['чүрек','tɕyrek'], tree:['ыяш','ɯjaʃ'], house:['бажың','baʒɯŋ'], dog:['ыт','ɯt'], cat:['диис','diːs'], hand:['хол','xol'], eye:['карак','karak'], hello:['экии','ekiː'], thanks:['четтирдим','tɕetːirdim'], one:['бир','bir'], good:['эки','eki'] }},
  kjh: { name: 'Khakas', native: 'Хакас тілі', lat: 53.72, lng: 91.44, // Abakan
    words: { water:['суғ','suɣ'], fire:['от','ot'], sun:['кӱн','kyn'], moon:['ай','aj'], mother:['иҷе','idʑe'], father:['паба','paba'], eat:['чиир','tɕiːr'], drink:['ірге','irɡe'], love:['хынығ','xɯnɯɣ'], heart:['чӱрек','tɕyrek'], tree:['ағас','aɣas'], house:['иб','ib'], dog:['адай','adaj'], cat:['міс','mis'], hand:['хол','xol'], eye:['харах','xarax'], hello:['изеннер','izenner'], thanks:['алғыс','alɣɯs'], one:['пір','pir'], good:['чахсы','tɕaxsɯ'] }},
  alt: { name: 'Altai', native: 'Алтай тил', lat: 51.96, lng: 85.96, // Gorno-Altaysk
    words: { water:['суу','suː'], fire:['от','ot'], sun:['кӱн','kyn'], moon:['ай','aj'], mother:['эне','ene'], father:['ада','ada'], eat:['ҷиир','dʑiːr'], drink:['ичер','itʃer'], love:['сӱӱш','syːʃ'], heart:['јӱрек','dʒyrek'], tree:['агаш','aɡaʃ'], house:['айыл','ajɯl'], dog:['ийт','ijt'], cat:['киске','kiske'], hand:['кол','kol'], eye:['кӧс','køs'], hello:['эзен','ezen'], thanks:['быйан','bɯjan'], one:['бир','bir'], good:['јакшы','dʒaqʃɯ'] }},
  // Siberian Mongolic
  bxr: { name: 'Buryat', native: 'Буряад хэлэн', lat: 51.83, lng: 107.61, // Ulan-Ude
    words: { water:['уһан','uhan'], fire:['гал','ɡal'], sun:['наран','naran'], moon:['һара','hara'], mother:['эхэ','exe'], father:['эсэгэ','esege'], eat:['эдеэлхэ','edeːlxe'], drink:['ууха','uːxa'], love:['дуран','duran'], heart:['зүрхэн','zyrxen'], tree:['модон','modon'], house:['гэр','ɡer'], dog:['нохой','noxoj'], cat:['миисгэй','miːsɡej'], hand:['гар','ɡar'], eye:['нюдэн','ɲuden'], hello:['сайн байна','sajn bajna'], thanks:['баярлаа','bajarlaː'], one:['нэгэн','neɡen'], good:['һайн','hajn'] }},
  // Tungusic
  evn: { name: 'Evenki', native: 'Эвэды̄ турэ̄н', lat: 64.27, lng: 100.22, // Tura, Evenkia
    words: { water:['му','mu'], fire:['того','toɡo'], sun:['дылача','dɯlatɕa'], moon:['бега','beɡa'], mother:['эни','eni'], father:['ама','ama'], eat:['дептэ','depte'], drink:['умӣ','umiː'], love:['аявдави','ajavdavi'], heart:['меван','mevan'], tree:['мо','mo'], house:['дю','dʒu'], dog:['нгинакин','ŋinakin'], cat:['кошка','koʂka'], hand:['нгалэ','ŋale'], eye:['эса','esa'], hello:['дорообо','doroːbo'], thanks:['пасиба','pasiba'], one:['умун','umun'], good:['ая','aja'] }},
  eve: { name: 'Even', native: 'Эвэды торэн', lat: 59.57, lng: 150.80, // Magadan
    words: { water:['му','mu'], fire:['тоог','toːɡ'], sun:['нөлтэн','nølten'], moon:['бяг','bjaɡ'], mother:['эньэн','eɲen'], father:['ама','ama'], eat:['дьэб','dʒeb'], drink:['ум','um'], love:['аякан','ajakan'], heart:['мяван','mjavan'], tree:['мо','mo'], house:['дьу','dʒu'], dog:['нгин','ŋin'], cat:['кошка','koʂka'], hand:['нгал','ŋal'], eye:['яса','jasa'], hello:['дорова','dorova'], thanks:['пасиба','pasiba'], one:['омэн','omen'], good:['ай','aj'] }},
  // Uralic Siberian (Samoyedic + Ob-Ugric)
  yrk: { name: 'Nenets', native: 'Ненэцяˮ вада', lat: 67.64, lng: 53.01, // Naryan-Mar
    words: { water:['ӣд','iːd'], fire:['ту','tu'], sun:['хаер','xajer'], moon:['ирий','iriː'], mother:['небя','nebja'], father:['нися','nisja'], eat:['ёлась','jolasʲ'], drink:['я','ja'], love:['садось','sadosʲ'], heart:['сей','sej'], tree:['пя','pja'], house:['мяˮ','mjaʔ'], dog:['вэно','weno'], cat:['кошка','koʂka'], hand:['ӈуда','ŋuda'], eye:['сэв','sev'], hello:['аньˮторова','anʔtorova'], thanks:['спасибо','spasibo'], one:['ӈопой','ŋopoj'], good:['сава','sawa'] }},
  kca: { name: 'Khanty', native: 'Ханты ясаӈ', lat: 61.00, lng: 69.00, // Khanty-Mansiysk
    words: { water:['йиңк','jiŋk'], fire:['тут','tut'], sun:['хатәл','xatəl'], moon:['тылащ','tɯlaɕ'], mother:['ӑңки','aŋki'], father:['аӂи','adʑi'], eat:['лэты','lətɯ'], drink:['яңхты','jaŋxtɯ'], love:['наматты','namatːɯ'], heart:['сӑм','sam'], tree:['юх','jux'], house:['хӑт','xat'], dog:['ампи','ampi'], cat:['кошка','koʂka'], hand:['йош','joʃ'], eye:['сэм','sem'], hello:['вуща','wuɕa'], thanks:['пӑсиве','pasive'], one:['ит','it'], good:['ям','jam'] }},
  // Chukotko-Kamchatkan
  ckt: { name: 'Chukchi', native: 'Ԓыгъоравэтԓьэн йиԓыйиԓ', lat: 64.73, lng: 177.49, // Anadyr
    words: { water:['мимыԓ','mimɯɫ'], fire:['пэӈэн','peŋen'], sun:['тиркытир','tirkɯtir'], moon:['йъиԓгын','jʔiɫɣɯn'], mother:['ынньэв','ɯɲɲew'], father:['атԓёӄ','atɫjoq'], eat:['рынтыкэн','rɯntɯken'], drink:['рымԓыӄэн','rɯmɫɯqen'], love:['ԓюнъювык','ɫjunʔjuwɯk'], heart:['ԓиӈыԓ','ɫiŋɯɫ'], tree:['уттуут','utːuːt'], house:['яраӈы','jaraŋɯ'], dog:['ыттъын','ɯtːʔɯn'], cat:['котйо','kotjo'], hand:['мынгыԓгын','mɯŋɯɫɣɯn'], eye:['ԓыԓет','ɫɯɫet'], hello:['етти','jetːi'], thanks:['вэԓынкы','weɫɯnkɯ'], one:['ыннэн','ɯɲɲen'], good:['тангъэв','taŋɣew'] }},
  // Language isolate
  niv: { name: 'Nivkh', native: 'Нивхгу диф', lat: 51.83, lng: 143.16, // Nogliki, Sakhalin
    words: { water:['чхар','tʃxar'], fire:['тур','tur'], sun:['керк','kerk'], moon:['лоӈ','loŋ'], mother:['ымык','ɯmɯk'], father:['ытык','ɯtɯk'], eat:['вид','vid'], drink:['ракь','rakʲ'], love:['орх','orx'], heart:['ыӈ','ɯŋ'], tree:['ча','tʃa'], house:['тыф','tɯf'], dog:['каӈ','kaŋ'], cat:['кошка','koʂka'], hand:['кы','kɯ'], eye:['ӈак','ŋak'], hello:['ӈафӄа','ŋafqa'], thanks:['туьмг','tumɡ'], one:['нён','ɲon'], good:['пах','pax'] }},
  // Yeniseian (last surviving)
  ket: { name: 'Ket', native: 'Остыган ка', lat: 62.55, lng: 86.97, // Kellog (Ket cultural center)
    words: { water:['уьл','ulʲ'], fire:['бок','bok'], sun:['и','i'], moon:['суьль','sulʲ'], mother:['ам','am'], father:['ɔб','oːp'], eat:['сьел','sʲel'], drink:['уьлся','ulʲsja'], love:['синьси','sinʲsi'], heart:['суӈ','suŋ'], tree:['оксь','oksʲ'], house:['куьсь','kusʲ'], dog:['тип','tip'], cat:['кошка','koʂka'], hand:['тыр','tɯr'], eye:['де','de'], hello:['торова','torova'], thanks:['асьх','asʲx'], one:['куьт','kutʲ'], good:['бэн','ben'] }},
  my: { name: 'Burmese', native: 'မြန်မာ', lat: 16.87, lng: 96.20, // Yangon
    words: { water:['ရေ','je'], fire:['မီး','mi'], sun:['နေ','ne'], moon:['လ','la'], mother:['အမေ','ʔəme'], father:['အဖေ','ʔəpʰe'], eat:['စား','sa'], drink:['သောက်','θauʔ'], love:['အချစ်','ʔətɕʰiʔ'], heart:['နှလုံး','n̥əlóuɴ'], tree:['သစ်ပင်','θiʔpìɴ'], house:['အိမ်','ʔèiɴ'], dog:['ခွေး','kʰwé'], cat:['ကြောင်','tɕàuɴ'], hand:['လက်','lɛʔ'], eye:['မျက်စိ','mjɛʔsì'], hello:['မင်္ဂလာပါ','mìɴɡəlà pà'], thanks:['ကျေးဇူးတင်ပါတယ်','tɕézú tìɴ pà dɛ̀'], one:['တစ်','tiʔ'], good:['ကောင်း','káuɴ'] }},
  km: { name: 'Khmer', native: 'ខ្មែរ', lat: 11.56, lng: 104.92, // Phnom Penh
    words: { water:['ទឹក','tɨk'], fire:['ភ្លើង','pʰləːŋ'], sun:['ព្រះអាទិត្យ','preah ʔaːtɨt'], moon:['ព្រះចន្ទ','preah tɕan'], mother:['ម៉ែ','mae'], father:['ប៉ា','paː'], eat:['ញ៉ាំ','ɲam'], drink:['ផឹក','pʰək'], love:['ស្នេហា','snaehaː'], heart:['បេះដូង','beh doːŋ'], tree:['ដើមឈើ','daəm cʰəː'], house:['ផ្ទះ','pteah'], dog:['ឆ្កែ','cʰkae'], cat:['ឆ្មា','cʰmaː'], hand:['ដៃ','daj'], eye:['ភ្នែក','pnɛːk'], hello:['សួស្តី','suːəsdəj'], thanks:['អរគុណ','ʔɔːkun'], one:['មួយ','muːj'], good:['ល្អ','lʔɑː'] }},
  lo: { name: 'Lao', native: 'ລາວ', lat: 17.97, lng: 102.63, // Vientiane
    words: { water:['ນ້ຳ','nam'], fire:['ໄຟ','faj'], sun:['ຕາເວັນ','taːwēn'], moon:['ດວງເດືອນ','duaŋ dɯːan'], mother:['ແມ່','mɛː'], father:['ພໍ່','pʰɔː'], eat:['ກິນ','kin'], drink:['ດື່ມ','dɯːm'], love:['ຮັກ','hak'], heart:['ໃຈ','tɕaj'], tree:['ຕົ້ນໄມ້','ton maj'], house:['ເຮືອນ','hɯːan'], dog:['ໝາ','maː'], cat:['ແມວ','mɛːw'], hand:['ມື','mɯː'], eye:['ຕາ','taː'], hello:['ສະບາຍດີ','sabaj diː'], thanks:['ຂອບໃຈ','kʰɔːp tɕaj'], one:['ໜຶ່ງ','nɯŋ'], good:['ດີ','diː'] }},
  // === African ===
  yo: { name: 'Yoruba', native: 'Yorùbá', lat: 7.39, lng: 3.93, // Ibadan (Yoruba historical/cultural center)
    words: { water:['omi','omi'], fire:['iná','iná'], sun:['oòrùn','oòɾùn'], moon:['oṣù','oʃù'], mother:['ìyá','ìjá'], father:['bàbá','bàbá'], eat:['jẹ','dʒɛ'], drink:['mu','mu'], love:['ìfẹ́','ìfɛ́'], heart:['ọkàn','ɔkàn'], tree:['igi','iɡi'], house:['ilé','ilé'], dog:['ajá','adʒá'], cat:['ológbò','olóɡbò'], hand:['ọwọ́','ɔwɔ́'], eye:['ojú','odʒú'], hello:['ẹ','ɛ kú'], thanks:['ẹ','ɛ ʃé'], one:['ọ̀kan','ɔ̀kan'], good:['dára','dáɾa'] }},
  zu: { name: 'Zulu', native: 'isiZulu', lat: -29.86, lng: 31.02, // Durban
    words: { water:['amanzi','amanzi'], fire:['umlilo','umlilo'], sun:['ilanga','ilaŋɡa'], moon:['inyanga','iɲaŋɡa'], mother:['umama','umama'], father:['ubaba','ubaba'], eat:['ukudla','ukuɗla'], drink:['ukuphuza','ukupʰuza'], love:['uthando','utʰando'], heart:['inhliziyo','inɬizijo'], tree:['isihlahla','isiɬaɬa'], house:['indlu','indlu'], dog:['inja','indʒa'], cat:['ikati','ikati'], hand:['isandla','isandla'], eye:['iso','iso'], hello:['sawubona','sawuɓona'], thanks:['ngiyabonga','ŋijaɓoŋɡa'], one:['kunye','kunje'], good:['kuhle','kuɬe'] }},
  am: { name: 'Amharic', native: 'አማርኛ', lat: 9.02, lng: 38.75, // Addis Ababa
    words: { water:['ውሃ','wɨha'], fire:['እሳት','ɨsat'], sun:['ፀሐይ','sʼɛhaj'], moon:['ጨረቃ','tʃʼɛɾɛkʼa'], mother:['እናት','ɨnat'], father:['አባት','abat'], eat:['መብላት','mɛblat'], drink:['መጠጣት','mɛtʼɛtʼat'], love:['ፍቅር','fɨkɨr'], heart:['ልብ','lɨb'], tree:['ዛፍ','zaf'], house:['ቤት','bet'], dog:['ውሻ','wɨʃa'], cat:['ድመት','dɨmɛt'], hand:['እጅ','ɨdʒ'], eye:['ዓይን','ajn'], hello:['ሰላም','sɛlam'], thanks:['አመሰግናለሁ','amɛsɛɡnalɛhu'], one:['አንድ','and'], good:['ጥሩ','tʼɨru'] }},
  mg: { name: 'Malagasy', native: 'Malagasy', lat: -18.91, lng: 47.52, // Antananarivo
    words: { water:['rano','ɾanu'], fire:['afo','afu'], sun:['masoandro','masuandɾu'], moon:['volana','vulana'], mother:['reny','ɾeni'], father:['ray','ɾaj'], eat:['mihinana','mihinana'], drink:['misotro','misutɾu'], love:['fitiavana','fitiavana'], heart:['fo','fu'], tree:['hazo','hazu'], house:['trano','tɾanu'], dog:['alika','alika'], cat:['saka','saka'], hand:['tanana','tanana'], eye:['maso','masu'], hello:['manao ahoana','manau ahoana'], thanks:['misaotra','misautɾa'], one:['iray','iɾaj'], good:['tsara','tsaɾa'] }},
  // === Others ===
  ain: { name: 'Ainu', native: 'アイヌ語', lat: 43.06, lng: 141.35, // Sapporo
    words: { water:['ワッカ','wakka'], fire:['アペ','ape'], sun:['チュプ','tɕup'], moon:['クンネチュプ','kunnetɕup'], mother:['ハポ','hapo'], father:['アチャ','atɕa'], eat:['イペ','ipe'], drink:['ク','ku'], love:['コイキ','kojki'], heart:['サンペ','sampe'], tree:['ニ','ni'], house:['チセ','tɕise'], dog:['セタ','seta'], cat:['チャペ','tɕape'], hand:['テク','teku'], eye:['シク','ɕiku'], hello:['イランカラプテ','iɾankaɾapute'], thanks:['イヤイライケレ','ijairaːikeɾe'], one:['シネプ','ɕinep'], good:['ピリカ','piɾika'] }},
  fi: { name: 'Finnish', native: 'Suomi', lat: 60.17, lng: 24.94, // Helsinki
    words: { water:['vesi','ʋesi'], fire:['tuli','tuli'], sun:['aurinko','ɑuɾiŋko'], moon:['kuu','kuː'], mother:['äiti','æiti'], father:['isä','isæ'], eat:['syödä','syødæ'], drink:['juoda','juodɑ'], love:['rakkaus','rɑkkɑus'], heart:['sydän','sydæn'], tree:['puu','puː'], house:['talo','tɑlo'], dog:['koira','koiɾɑ'], cat:['kissa','kissɑ'], hand:['käsi','kæsi'], eye:['silmä','silmæ'], hello:['hei','hei'], thanks:['kiitos','kiːtos'], one:['yksi','yksi'], good:['hyvä','hyʋæ'] }},
  hu: { name: 'Hungarian', native: 'Magyar', lat: 47.50, lng: 19.04, // Budapest
    words: { water:['víz','viːz'], fire:['tűz','tyːz'], sun:['nap','nɒp'], moon:['hold','hold'], mother:['anya','ɒɲɒ'], father:['apa','ɒpɒ'], eat:['enni','ɛnːi'], drink:['inni','inːi'], love:['szerelem','sɛrɛlɛm'], heart:['szív','siːv'], tree:['fa','fɒ'], house:['ház','haːz'], dog:['kutya','kucɒ'], cat:['macska','mɒtʃkɒ'], hand:['kéz','keːz'], eye:['szem','sɛm'], hello:['szia','siɒ'], thanks:['köszönöm','køsønøm'], one:['egy','ɛɟ'], good:['jó','joː'] }},
  el: { name: 'Greek', native: 'Ελληνικά', lat: 37.98, lng: 23.73, // Athens
    words: { water:['νερό','neɾo'], fire:['φωτιά','fotʲa'], sun:['ήλιος','ilios'], moon:['φεγγάρι','feŋɡaɾi'], mother:['μητέρα','miteɾa'], father:['πατέρας','pateɾas'], eat:['τρώω','tɾoo'], drink:['πίνω','pino'], love:['αγάπη','aɣapi'], heart:['καρδιά','kaɾðʲa'], tree:['δέντρο','ðendɾo'], house:['σπίτι','spiti'], dog:['σκύλος','skilos'], cat:['γάτα','ɣata'], hand:['χέρι','çeɾi'], eye:['μάτι','mati'], hello:['γεια σου','ʝa su'], thanks:['ευχαριστώ','efxaɾisto'], one:['ένα','ena'], good:['καλό','kalo'] }},
  nl: { name: 'Dutch', native: 'Nederlands', lat: 52.37, lng: 4.90, // Amsterdam
    words: { water:['water','ʋaːtər'], fire:['vuur','vyːr'], sun:['zon','zɔn'], moon:['maan','maːn'], mother:['moeder','muːdər'], father:['vader','faːdər'], eat:['eten','eːtə'], drink:['drinken','drɪŋkə'], love:['liefde','liːfdə'], heart:['hart','ɦɑrt'], tree:['boom','boːm'], house:['huis','ɦœʏs'], dog:['hond','ɦɔnt'], cat:['kat','kɑt'], hand:['hand','ɦɑnt'], eye:['oog','oːx'], hello:['hallo','hɑloː'], thanks:['dank je','dɑŋk jə'], one:['een','eːn'], good:['goed','xut'] }},
  pl: { name: 'Polish', native: 'Polski', lat: 52.23, lng: 21.01, // Warsaw
    words: { water:['woda','vɔda'], fire:['ogień','ɔɡɛɲ'], sun:['słońce','swɔɲt͡sɛ'], moon:['księżyc','kɕɛ̃ʐɨt͡s'], mother:['matka','matka'], father:['ojciec','ɔjt͡ɕɛt͡s'], eat:['jeść','jɛɕt͡ɕ'], drink:['pić','pit͡ɕ'], love:['miłość','miwɔɕt͡ɕ'], heart:['serce','sɛrt͡sɛ'], tree:['drzewo','dʐɛvɔ'], house:['dom','dɔm'], dog:['pies','pjɛs'], cat:['kot','kɔt'], hand:['ręka','rɛŋka'], eye:['oko','ɔkɔ'], hello:['cześć','t͡ʂɛɕt͡ɕ'], thanks:['dziękuję','d͡ʑɛŋkujɛ'], one:['jeden','jɛdɛn'], good:['dobry','dɔbrɨ'] }},
  uk: { name: 'Ukrainian', native: 'Українська', lat: 50.45, lng: 30.52, // Kyiv
    words: { water:['вода','wɔdɑ'], fire:['вогонь','wɔɦɔnʲ'], sun:['сонце','sɔntsɛ'], moon:['місяць','misʲɑtsʲ'], mother:['мати','mɑtɪ'], father:['батько','bɑtʲkɔ'], eat:['їсти','jistɪ'], drink:['пити','pɪtɪ'], love:['любов','lʲubɔw'], heart:['серце','sɛrtsɛ'], tree:['дерево','dɛrɛwɔ'], house:['дім','dim'], dog:['собака','sɔbɑkɑ'], cat:['кіт','kit'], hand:['рука','rukɑ'], eye:['око','ɔkɔ'], hello:['привіт','prɪwit'], thanks:['дякую','dʲɑkuju'], one:['один','ɔdɪn'], good:['добре','dɔbrɛ'] }},
  sv: { name: 'Swedish', native: 'Svenska', lat: 59.33, lng: 18.07, // Stockholm
    words: { water:['vatten','vatːɛn'], fire:['eld','ɛld'], sun:['sol','suːl'], moon:['måne','moːnɛ'], mother:['mamma','mamːa'], father:['pappa','papːa'], eat:['äta','ɛːta'], drink:['dricka','drɪkːa'], love:['kärlek','ɕæːɭɛk'], heart:['hjärta','jæːɭta'], tree:['träd','trɛːd'], house:['hus','hʉːs'], dog:['hund','hɵnd'], cat:['katt','katː'], hand:['hand','hand'], eye:['öga','øːɡa'], hello:['hej','hɛj'], thanks:['tack','takː'], one:['en','eːn'], good:['bra','brɑː'] }},
  no: { name: 'Norwegian', native: 'Norsk', lat: 59.91, lng: 10.75, // Oslo
    words: { water:['vann','vɑnː'], fire:['ild','ilː'], sun:['sol','suːl'], moon:['måne','moːnə'], mother:['mor','muːr'], father:['far','fɑːr'], eat:['spise','spiːsə'], drink:['drikke','drɪkːə'], love:['kjærlighet','çæːɾliːhɛt'], heart:['hjerte','jæɾtə'], tree:['tre','treː'], house:['hus','hʉːs'], dog:['hund','hʉnː'], cat:['katt','kɑtː'], hand:['hånd','hoːn'], eye:['øye','øjə'], hello:['hei','hɛɪ'], thanks:['takk','tɑkː'], one:['en','eːn'], good:['bra','brɑː'] }},
  da: { name: 'Danish', native: 'Dansk', lat: 55.68, lng: 12.57, // Copenhagen
    words: { water:['vand','vanˀ'], fire:['ild','ilˀ'], sun:['sol','soːˀl'], moon:['måne','mɔːnə'], mother:['mor','moɐ̯ˀ'], father:['far','fɑːˀ'], eat:['spise','sbiːsə'], drink:['drikke','dʁeɡə'], love:['kærlighed','kʰæɐ̯liːð̠ˀ'], heart:['hjerte','jæɐ̯d̥ə'], tree:['træ','tʁɛːˀ'], house:['hus','huːˀs'], dog:['hund','hunˀ'], cat:['kat','kʰæd̥'], hand:['hånd','hɔnˀ'], eye:['øje','øjə'], hello:['hej','haj'], thanks:['tak','tʰaɡ'], one:['en','eːˀn'], good:['god','ɡoːˀ'] }},
  ro: { name: 'Romanian', native: 'Română', lat: 44.43, lng: 26.10, // Bucharest
    words: { water:['apă','apə'], fire:['foc','fok'], sun:['soare','soare'], moon:['lună','lunə'], mother:['mamă','mamə'], father:['tată','tatə'], eat:['a mânca','a mɨnka'], drink:['a bea','a bea'], love:['iubire','jubire'], heart:['inimă','inimə'], tree:['copac','kopak'], house:['casă','kasə'], dog:['câine','kɨine'], cat:['pisică','pisikə'], hand:['mână','mɨnə'], eye:['ochi','okʲ'], hello:['salut','salut'], thanks:['mulțumesc','mult͡sumesk'], one:['unu','unu'], good:['bun','bun'] }},
  ga: { name: 'Irish', native: 'Gaeilge', lat: 53.35, lng: -6.26, // Dublin
    words: { water:['uisce','ɪʃcə'], fire:['tine','tʲɪnʲə'], sun:['grian','ɡɾʲiən'], moon:['gealach','ɟalax'], mother:['máthair','mɑːhəɾʲ'], father:['athair','ahəɾʲ'], eat:['ith','ɪ'], drink:['ól','oːl'], love:['grá','ɡɾɑː'], heart:['croí','kɾiː'], tree:['crann','kɾɑːn'], house:['teach','tʲax'], dog:['madra','mɑdɾə'], cat:['cat','kɑt'], hand:['lámh','lɑːv'], eye:['súil','suːlʲ'], hello:['dia duit','dʲiə dɪtʲ'], thanks:['go raibh maith agat','ɡɔ ɾɛv mah aɡət'], one:['aon','eːn'], good:['maith','mah'] }},
  eu: { name: 'Basque', native: 'Euskara', lat: 43.26, lng: -2.93, // Bilbao
    words: { water:['ur','ur'], fire:['su','su'], sun:['eguzki','eɡuski'], moon:['ilargi','ilaɾɡi'], mother:['ama','ama'], father:['aita','aita'], eat:['jan','jan'], drink:['edan','eðan'], love:['maite','maite'], heart:['bihotz','biots'], tree:['zuhaitz','suhaits'], house:['etxe','etʃe'], dog:['txakur','tʃakur'], cat:['katu','katu'], hand:['esku','esku'], eye:['begi','beɡi'], hello:['kaixo','kaiʃo'], thanks:['eskerrik asko','eskerik asko'], one:['bat','bat'], good:['on','on'] }},
  cy: { name: 'Welsh', native: 'Cymraeg', lat: 51.48, lng: -3.18, // Cardiff
    words: { water:['dŵr','duːr'], fire:['tân','tɑːn'], sun:['haul','haɨl'], moon:['lleuad','ɬɛɨ̯ad'], mother:['mam','mam'], father:['tad','tɑːd'], eat:['bwyta','bʊɨta'], drink:['yfed','əvɛd'], love:['cariad','karjad'], heart:['calon','kalon'], tree:['coeden','kɔɨdɛn'], house:['tŷ','tiː'], dog:['ci','kiː'], cat:['cath','kɑːθ'], hand:['llaw','ɬaʊ'], eye:['llygad','ɬəɡad'], hello:['helo','hɛlo'], thanks:['diolch','diːɔlx'], one:['un','iːn'], good:['da','dɑː'] }},
  ka: { name: 'Georgian', native: 'ქართული', lat: 41.72, lng: 44.79, // Tbilisi
    words: { water:['წყალი','t͡sʼqali'], fire:['ცეცხლი','t͡set͡sxli'], sun:['მზე','mze'], moon:['მთვარე','mtʰvare'], mother:['დედა','deda'], father:['მამა','mama'], eat:['ჭამა','tʃʼama'], drink:['დალევა','daleva'], love:['სიყვარული','siqvaruli'], heart:['გული','ɡuli'], tree:['ხე','xe'], house:['სახლი','saxli'], dog:['ძაღლი','dzaɣli'], cat:['კატა','kʼatʼa'], hand:['ხელი','xeli'], eye:['თვალი','tʰvali'], hello:['გამარჯობა','ɡamardʒoba'], thanks:['მადლობა','madloba'], one:['ერთი','ertʰi'], good:['კარგი','kʼarɡi'] }},
  hy: { name: 'Armenian', native: 'Հայերեն', lat: 40.18, lng: 44.51, // Yerevan
    words: { water:['ջուր','dʒuɾ'], fire:['կրակ','kɾɑk'], sun:['արև','ɑˈɾev'], moon:['լուսին','lusin'], mother:['մայր','majɾ'], father:['հայր','hajɾ'], eat:['ուտել','uˈtel'], drink:['խմել','χəˈmel'], love:['սեր','seɾ'], heart:['սիրտ','siɾt'], tree:['ծառ','tsaɾ'], house:['տուն','tun'], dog:['շուն','ʃun'], cat:['կատու','kɑtu'], hand:['ձեռք','dzeɾkʰ'], eye:['աչք','ɑtʃkʰ'], hello:['բարև','bɑɾev'], thanks:['շնորհակալություն','ʃnoɾhɑkɑlutʰjun'], one:['մեկ','mek'], good:['լավ','lɑv'] }},
  nv: { name: 'Navajo', native: 'Diné bizaad', lat: 36.17, lng: -109.51, // Window Rock
    words: { water:['tó','tʰóː'], fire:['kǫʼ','kʰõːʔ'], sun:['jóhonaaʼéí','dʒóhonɑːʔéːí'], moon:['tłéhonaaʼéí','tɬʼéhonɑːʔéːí'], mother:['shimá','ʃimáː'], father:['shizhéʼé','ʃiʒéːʔéː'], eat:['yishą́','jiʃã́ː'], drink:['yishdlą́','jiʃtlã́ː'], love:['ayóóʼánóshní','ɑjóːʔɑ́nóʃníː'], heart:['ajéí','ɑdʒéːí'], tree:['tsin','t͡sin'], house:['hooghan','hoːɣɑn'], dog:['łééchąąʼí','ɬéːtʃãːʔí'], cat:['mósí','mósí'], hand:['la','lɑ'], eye:['naá','nɑ́ː'], hello:['yáʼátʼééh','jɑ́ːʔɑ́tʰéːh'], thanks:['ahéheeʼ','ɑhéːheːʔ'], one:['tʼááłáʼí','tʼɑ́ːɬɑ́ːʔí'], good:['yáʼátʼééh','jɑ́ːʔɑ́tʰéːh'] }},
  haw: { name: 'Hawaiian', native: 'ʻŌlelo Hawaiʻi', lat: 21.31, lng: -157.86, // Honolulu
    words: { water:['wai','wai'], fire:['ahi','ahi'], sun:['lā','laː'], moon:['mahina','mahina'], mother:['makuahine','makuahine'], father:['makuakāne','makuakaːne'], eat:['ʻai','ʔai'], drink:['inu','inu'], love:['aloha','aloha'], heart:['puʻuwai','puʔuwai'], tree:['lāʻau','laːʔau'], house:['hale','hale'], dog:['ʻīlio','ʔiːlio'], cat:['pōpoki','poːpoki'], hand:['lima','lima'], eye:['maka','maka'], hello:['aloha','aloha'], thanks:['mahalo','mahalo'], one:['ʻekahi','ʔekahi'], good:['maikaʻi','maikaʔi'] }},
  mi: { name: 'Māori', native: 'Te Reo Māori', lat: -36.85, lng: 174.76, // Auckland
    words: { water:['wai','wai'], fire:['ahi','ahi'], sun:['rā','ɾaː'], moon:['marama','maɾama'], mother:['whaea','ɸaea'], father:['matua','matua'], eat:['kai','kai'], drink:['inu','inu'], love:['aroha','aɾoha'], heart:['ngākau','ŋaːkau'], tree:['rākau','ɾaːkau'], house:['whare','ɸaɾe'], dog:['kurī','kuɾiː'], cat:['ngeru','ŋeɾu'], hand:['ringa','ɾiŋa'], eye:['kanohi','kanohi'], hello:['kia ora','kia oɾa'], thanks:['ngā','ŋaː mihi'], one:['tahi','tahi'], good:['pai','pai'] }},
  qu: { name: 'Quechua', native: 'Runasimi', lat: -13.52, lng: -71.97, // Cusco
    words: { water:['yaku','jaku'], fire:['nina','nina'], sun:['inti','inti'], moon:['killa','kiʎa'], mother:['mama','mama'], father:['tayta','tajta'], eat:['mikhuy','mixuj'], drink:['upyay','upjaj'], love:['munay','munaj'], heart:['sunqu','sunqu'], tree:['sacha','satʃa'], house:['wasi','wasi'], dog:['allqu','aʎqu'], cat:['misi','misi'], hand:['maki','maki'], eye:['ñawi','ɲawi'], hello:['allillanchu','aʎiʎantʃu'], thanks:['sulpayki','sulpajki'], one:['huk','huk'], good:['allin','aʎin'] }},
  zh_db: { name: 'Chinese (Dongbei)', native: '东北话', lat: 41.80, lng: 123.43,
    words: { water:['水','ʂweɪ̯˧˩˧'], fire:['火','xwo˧˩˧'], sun:['太阳','tʰaɪ̯˥˩jɑŋ˧˥'], moon:['月亮','ɥɛ˥˩ljɑŋ˩'], mother:['妈妈','mama'], father:['爸爸','papa'], eat:['吃','ʈʂʰɨ˥'], drink:['喝','xɤ˥'], love:['爱','aɪ̯˥˩'], heart:['心','ɕin˥'], tree:['树','ʂu˥˩'], house:['房子','fɑŋ˧˥tsɨ'], dog:['狗','koʊ̯˧˩˧'], cat:['猫','mɑʊ̯˥'], hand:['手','ʂoʊ̯˧˩˧'], eye:['眼睛','jɛn˧˩˧tɕiŋ˥'], hello:['你好','ni˧˩˧xaʊ̯˧˩˧'], thanks:['谢谢','ɕjɛ˥˩ɕjɛ'], one:['一','i˥'], good:['好','xaʊ̯˧˩˧'] }},
  zh_sc: { name: 'Chinese (Sichuan)', native: '四川话', lat: 30.57, lng: 104.07,
    words: { water:['水','suei˨˩˧'], fire:['火','xo˨˩˧'], sun:['太阳','tʰai˥˩iaŋ˧˥'], moon:['月亮','ye˨˩liaŋ˥˩'], mother:['妈妈','mama'], father:['爸爸','papa'], eat:['吃','tsʰɨ˧˥'], drink:['喝','xo˧˥'], love:['爱','ai˥˩'], heart:['心','ɕin˥'], tree:['树','su˥˩'], house:['房子','faŋ˧˥tsɨ'], dog:['狗','kəu˨˩˧'], cat:['猫','mau˥'], hand:['手','sou˨˩˧'], eye:['眼睛','ŋan˨˩˧tɕin˥'], hello:['你好','ni˨˩˧xau˨˩˧'], thanks:['谢谢','ɕie˥˩ɕie'], one:['一','i˧˥'], good:['好','xau˨˩˧'] }},
  cdo: { name: 'Min Dong', native: '闽东语', lat: 26.07, lng: 119.30,
    words: { water:['水','tsui˧˧'], fire:['火','huoi˧˧'], sun:['日头','nit˧tʰau˧˧'], moon:['月光','ŋuoʔ˨˦kuoŋ˥'], mother:['依妈','i˥ma˧˧'], father:['依爸','i˥pa˥'], eat:['食','sieʔ˨˦'], drink:['啜','tsoʔ˨˦'], love:['爱','ai˧'], heart:['心','siŋ˥'], tree:['树','tshiu˧'], house:['厝','tsʰuo˧'], dog:['犬','kʰyøŋ˧˧'], cat:['猫','ma˥'], hand:['手','tsʰiu˧˧'], eye:['目','muʔ˨˦'], hello:['汝好','ny˧˧ho˧˧'], thanks:['谢谢','sia˧sia'], one:['一','suoʔ˨˦'], good:['好','ho˧˧'] }},
  bo: { name: 'Tibetan', native: 'བོད་སྐད', lat: 29.65, lng: 91.10,
    words: { water:['ཆུ','tɕʰu'], fire:['མེ','me'], sun:['ཉི་མ','ɲima'], moon:['ཟླ་བ','tawa'], mother:['ཨ་མ','ama'], father:['ཨ་ཕ','apʰa'], eat:['ཟ','sa'], drink:['འཐུང་','tʰuŋ'], love:['དགའ་པོ','kapo'], heart:['སྙིང་','ɲiŋ'], tree:['ཤིང་སྡོང་','ɕiŋtoŋ'], house:['ཁང་པ','kʰaŋpa'], dog:['ཁྱི','kʰi'], cat:['ཞི་མི','ɕimi'], hand:['ལག་པ','lakpa'], eye:['མིག','mik'], hello:['བཀྲ་ཤིས་བདེ་ལེགས','tʂaɕi telek'], thanks:['ཐུགས་རྗེ་ཆེ','tʰuːtɕi tɕʰe'], one:['གཅིག','tɕik'], good:['ཡག་པོ','jakpo'] }},
  ii: { name: 'Yi (Nuosu)', native: 'ꆈꌠꉙ', lat: 27.90, lng: 102.26,
    words: { water:['ꏂ','ʐɿ˧˧'], fire:['ꃆ','mu˧˧'], sun:['ꉢꁡ','ȵi˧mo˧'], moon:['ꃅꎖ','mu˧hy˧'], mother:['ꀊꂿ','a˧mo˧'], father:['ꀊꀧ','a˧da˧'], eat:['ꋊ','dza˧'], drink:['ꄸ','tu˧'], love:['ꉢ','ŋa˧'], heart:['ꌋ','si˧'], tree:['ꌦ','sɿ˧'], house:['ꑳ','ɣɯ˧'], dog:['ꈸ','kʰɯ˧'], cat:['ꃬ','vi˧'], hand:['ꇐ','la˧'], eye:['ꉜ','ȵi˧'], hello:['ꂿꎆꈐ','mo˧su˧kɤ˧'], thanks:['ꃰꊿ','ka˧tɕʰɿ˧'], one:['ꊰ','tsʰɿ˧'], good:['ꃅ','mu˧'] }},
  th_isan: { name: 'Thai (Isan)', native: 'ภาษาอีสาน', lat: 16.43, lng: 102.83,
    words: { water:['น้ำ','nam˧˥'], fire:['ไฟ','faj˥'], sun:['ตะเว็น','ta˨˩wen˥'], moon:['เดือน','dɯːan˥'], mother:['แม่','mɛː˥˩'], father:['พ่อ','pʰɔː˥˩'], eat:['กิน','kin˥'], drink:['ดื่ม','dɯːm˥˩'], love:['ฮัก','hak˧˥'], heart:['ใจ','tɕaj˥'], tree:['ต้นไม้','ton˧˥maj˧˥'], house:['เฮือน','hɯːan˥'], dog:['หมา','maː˩˧'], cat:['แมว','mɛːw˥'], hand:['มือ','mɯː˥'], eye:['ตา','taː˥'], hello:['สะบายดี','sa˨˩baːj˥diː˥'], thanks:['ขอบใจ','kʰɔːp˨˩tɕaj˥'], one:['หนึ่ง','nɯŋ˨˩'], good:['ดี','diː˥'] }},
  th_n: { name: 'Thai (Northern)', native: 'คำเมือง', lat: 18.79, lng: 98.98,
    words: { water:['น้ำ','nam˧˥'], fire:['ไฟ','faj˥'], sun:['ตะวัน','ta˨˩wan˥'], moon:['เดือน','dɯːan˥'], mother:['แม่','mɛː˥˩'], father:['พ่อ','pʰɔː˥˩'], eat:['กิ๋น','kin˩˧'], drink:['ดื่ม','dɯːm˥˩'], love:['ฮัก','hak˧˥'], heart:['ใจ๋','tɕaj˩˧'], tree:['ต้นไม้','ton˧˥maj˧˥'], house:['เฮือน','hɯːan˥'], dog:['หมา','maː˩˧'], cat:['แมว','mɛːw˥'], hand:['มือ','mɯː˥'], eye:['ต๋า','taː˩˧'], hello:['สวัสดี','sa˨˩wat˨˩diː˥'], thanks:['ขอบคุณ','kʰɔːp˨˩kʰun˥'], one:['หนึ่ง','nɯŋ˨˩'], good:['ดี','diː˥'] }},
  th_s: { name: 'Thai (Southern)', native: 'ภาษาใต้', lat: 7.88, lng: 98.39,
    words: { water:['น้ำ','nam˧˥'], fire:['ไฟ','faj˥'], sun:['ตะวัน','ta˨˩wan˥'], moon:['เดือน','dɯːan˥'], mother:['แม่','mɛː˥˩'], father:['พ่อ','pʰɔː˥˩'], eat:['กิน','kin˥'], drink:['ดื่ม','dɯːm˥˩'], love:['รัก','rak˧˥'], heart:['ใจ','tɕaj˥'], tree:['ต้นไม้','ton˧˥maj˧˥'], house:['บ้าน','baːn˧˥'], dog:['หมา','maː˩˧'], cat:['แมว','mɛːw˥'], hand:['มือ','mɯː˥'], eye:['ตา','taː˥'], hello:['สวัสดี','sa˨˩wat˨˩diː˥'], thanks:['ขอบคุณ','kʰɔːp˨˩kʰun˥'], one:['หนึ่ง','nɯŋ˨˩'], good:['ดี','diː˥'] }},
  za: { name: 'Zhuang', native: 'Vahcuengh', lat: 23.16, lng: 108.27, // Wuming (western Guangxi Zhuang heartland)
    words: { water:['raemx','ɣam˦'], fire:['feiz','fei˧˥'], sun:['daengzngoenz','taːŋ˧˥ŋɯn˧˥'], moon:['ndaen','daːn˥'], mother:['meh','me˨'], father:['boh','po˨'], eat:['gwn','kʷɤn˥'], drink:['gwnraemx','kʷɤn˥ɣam˦'], love:['gyaez','kjai˧˥'], heart:['sim','ɕim˥'], tree:['faex','fai˦'], house:['ranz','ɣan˧˥'], dog:['ma','maː˥'], cat:['meuz','meu˧˥'], hand:['fwngz','fɯŋ˧˥'], eye:['da','taː˥'], hello:['mwngz ndei','mɯŋ˧˥dei˥'], thanks:['dwgrengz mwngz','tuk˧ɣeŋ˧˥mɯŋ˧˥'], one:['it','it˧'], good:['ndei','dei˥'] }},
  hmn: { name: 'Hmong', native: 'Hmoob', lat: 26.65, lng: 104.25,
    words: { water:['dej','te˧'], fire:['taws','tɑ˧˩'], sun:['hnub','nu˧˥'], moon:['hli','ɬi˥'], mother:['niam','niã˥'], father:['txiv','tɕi˧˩'], eat:['noj','nɔ˧'], drink:['haus','hɑu˧˩'], love:['hlub','ɬu˧˥'], heart:['siab','ɕiã˧˥'], tree:['ntoo','tɔː˥'], house:['tsev','tɕɛ˧˩'], dog:['dev','te˧˩'], cat:['miv','mi˧˩'], hand:['tes','te˧˩'], eye:['qhov muag','kʰɔ˧˩muã˧'], hello:['nyob zoo','ɲɔ˧˥tɕɔː˥'], thanks:['ua tsaug','uã˥tɕɑu˧'], one:['ib','i˧˥'], good:['zoo','tɕɔː˥'] }},
  jv: { name: 'Javanese', native: 'ꦧꦱꦗꦮ', lat: -7.25, lng: 112.75,
    words: { water:['banyu','banju'], fire:['geni','ɡəni'], sun:['srengéngé','srəŋeŋe'], moon:['bulan','bulan'], mother:['ibu','ibu'], father:['bapak','bapak'], eat:['mangan','maŋan'], drink:['ngombe','ŋombe'], love:['tresna','trɛsna'], heart:['ati','ati'], tree:['wit','wit'], house:['omah','omah'], dog:['asu','asu'], cat:['kucing','kutɕiŋ'], hand:['tangan','taŋan'], eye:['mripat','mripat'], hello:['halo','halo'], thanks:['matur nuwun','matur nuwun'], one:['siji','sidʒi'], good:['apik','apik'] }},
  su: { name: 'Sundanese', native: 'ᮘᮞ ᮞᮥᮔ᮪ᮓ', lat: -6.91, lng: 107.61,
    words: { water:['cai','tɕai'], fire:['seuneu','sɤnɤ'], sun:['panonpoé','panɔnpoe'], moon:['bulan','bulan'], mother:['indung','induŋ'], father:['bapa','bapa'], eat:['dahar','dahar'], drink:['nginum','ŋinum'], love:['bogoh','bɔɡɔh'], heart:['haté','hate'], tree:['tangkal','taŋkal'], house:['imah','imah'], dog:['anjing','andʒiŋ'], cat:['ucing','utɕiŋ'], hand:['leungeun','lɤŋɤn'], eye:['panon','panɔn'], hello:['sampurasun','sampurasun'], thanks:['hatur nuhun','hatur nuhun'], one:['hiji','hidʒi'], good:['hadé','hade'] }},
  ceb: { name: 'Cebuano', native: 'Sinugbuanon', lat: 10.31, lng: 123.89,
    words: { water:['tubig','tubig'], fire:['kalayo','kalajo'], sun:['adlaw','adlaw'], moon:['bulan','bulan'], mother:['inahan','inahan'], father:['amahan','amahan'], eat:['kaon','kaon'], drink:['inom','inom'], love:['gugma','gugma'], heart:['kasingkasing','kasiŋkasiŋ'], tree:['kahoy','kahoj'], house:['balay','balaj'], dog:['iro','iɾo'], cat:['iring','iɾiŋ'], hand:['kamot','kamot'], eye:['mata','mata'], hello:['kumusta','kumusta'], thanks:['salamat','salamat'], one:['usa','usa'], good:['maayo','maːjo'] }},
  ilo: { name: 'Ilocano', native: 'Ilokano', lat: 16.62, lng: 120.32,
    words: { water:['danum','danum'], fire:['apoy','apoj'], sun:['init','init'], moon:['bulan','bulan'], mother:['ina','ina'], father:['ama','ama'], eat:['mangan','maŋan'], drink:['uminom','uminom'], love:['ayat','ajat'], heart:['puso','puso'], tree:['kayo','kajo'], house:['balay','balaj'], dog:['aso','aso'], cat:['pusa','pusa'], hand:['ima','ima'], eye:['mata','mata'], hello:['kablaaw','kablaːw'], thanks:['agyamanak','aɡjamanak'], one:['maysa','majsa'], good:['nasayaat','nasajaːt'] }},
  fj: { name: 'Fijian', native: 'Na vosa vakaviti', lat: -18.14, lng: 178.44,
    words: { water:['wai','wai'], fire:['buka','mbukaː'], sun:['siga','siŋa'], moon:['vula','vula'], mother:['tina','tina'], father:['tama','tama'], eat:['kana','kana'], drink:['gunu','ɡunu'], love:['loloma','loloma'], heart:['uto','uto'], tree:['kau','kau'], house:['vale','vale'], dog:['koli','koli'], cat:['pusi','pusi'], hand:['liga','liɡa'], eye:['mata','mata'], hello:['bula','mbula'], thanks:['vinaka','vinaka'], one:['dua','ndua'], good:['vinaka','vinaka'] }},
  sm: { name: 'Samoan', native: 'Gagana Sāmoa', lat: -13.83, lng: -171.76,
    words: { water:['vai','vai'], fire:['afi','afi'], sun:['lā','laː'], moon:['māsina','maːsina'], mother:['tinā','tinaː'], father:['tamā','tamaː'], eat:['ʻai','ʔai'], drink:['inu','inu'], love:['alofa','alofa'], heart:['loto','loto'], tree:['laʻau','laʔau'], house:['fale','fale'], dog:['maile','maile'], cat:['pusi','pusi'], hand:['lima','lima'], eye:['mata','mata'], hello:['talofa','talofa'], thanks:['faʻafetai','faʔafetai'], one:['tasi','tasi'], good:['lelei','lelei'] }},
  to: { name: 'Tongan', native: 'Lea faka-Tonga', lat: -21.21, lng: -175.15,
    words: { water:['vai','vai'], fire:['afi','afi'], sun:['laʻā','laʔaː'], moon:['māhina','maːhina'], mother:['faʻē','faʔeː'], father:['tamai','tamai'], eat:['kai','kai'], drink:['inu','inu'], love:['ʻofa','ʔofa'], heart:['loto','loto'], tree:['ʻakau','ʔakau'], house:['fale','fale'], dog:['kulī','kuliː'], cat:['pusi','pusi'], hand:['nima','nima'], eye:['mata','mata'], hello:['mālō','maːloː e lelei'], thanks:['mālō','maːloː'], one:['taha','taha'], good:['lelei','lelei'] }},
  pau: { name: 'Palauan', native: 'A tekoi er a Belau', lat: 7.50, lng: 134.62,
    words: { water:['ralm','ɾalm'], fire:['ngau','ŋau'], sun:['sils','sils'], moon:['buil','buil'], mother:['delak','ðɛlak'], father:['demak','ðɛmak'], eat:['mengang','mɛŋaŋ'], drink:['melim','mɛlim'], love:['klou el reng','klou ɛl ɾɛŋ'], heart:['reng','ɾɛŋ'], tree:['kerrekar','kɛrːɛkar'], house:['blai','blai'], dog:['bilis','biˈlis'], cat:['katuu','katuː'], hand:['chim','tʃim'], eye:['mad','mað'], hello:['alii','aliː'], thanks:['sulang','sulaŋ'], one:['tang','taŋ'], good:['klou','klou'] }},

  sd: { name: 'Sindhi', native: 'سنڌي', lat: 25.40, lng: 68.37,
    words: { water:['پاڻي','paːɳiː'], fire:['باهه','bɑːhə'], sun:['سج','sʊdʒə'], moon:['چنڊ','tʃəɖə'], mother:['ماءُ','maːʊ'], father:['پيءُ','pɪːʊ'], eat:['کائڻ','kʰaːɪɳʊ'], drink:['پيئڻ','pɪːəɳʊ'], love:['پيار','pjɑːrʊ'], heart:['دل','dɪlʊ'], tree:['وڻ','vəɳʊ'], house:['گهر','gʱərʊ'], dog:['ڪتو','kʊto'], cat:['ٻلي','ɓɪlːiː'], hand:['هٿ','hətʰə'], eye:['اک','əkʰə'], hello:['سلام','sælɑːm'], thanks:['مهرباني','meːrbɑːniː'], one:['هڪ','hɪkʊ'], good:['سٺو','sʊʈʰo'] }},
  pa: { name: 'Punjabi', native: 'ਪੰਜਾਬੀ', lat: 30.90, lng: 75.85,
    words: { water:['ਪਾਣੀ','pɑːɳiː'], fire:['ਅੱਗ','əɡː'], sun:['ਸੂਰਜ','suːɾədʒ'], moon:['ਚੰਦ','tʃənd'], mother:['ਮਾਂ','mɑ̃ː'], father:['ਪਿਤਾ','pɪtɑː'], eat:['ਖਾਣਾ','kʰɑːɳɑː'], drink:['ਪੀਣਾ','piːɳɑː'], love:['ਪਿਆਰ','pɪɑːɾ'], heart:['ਦਿਲ','dɪl'], tree:['ਰੁੱਖ','ɾʊkʰː'], house:['ਘਰ','kʰəɾ'], dog:['ਕੁੱਤਾ','kʊtːɑː'], cat:['ਬਿੱਲੀ','bɪlːiː'], hand:['ਹੱਥ','hətʰː'], eye:['ਅੱਖ','əkʰː'], hello:['ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ','sət sɾiː əkɑːl'], thanks:['ਧੰਨਵਾਦ','dənːʋɑːd'], one:['ਇੱਕ','ɪkː'], good:['ਚੰਗਾ','tʃəŋɡɑː'] }},
  ne: { name: 'Nepali', native: 'नेपाली', lat: 27.72, lng: 85.32,
    words: { water:['पानी','paːniː'], fire:['आगो','aːɡo'], sun:['सूर्य','suːɾjə'], moon:['चन्द्रमा','tʃəndɾəmaː'], mother:['आमा','aːmaː'], father:['बुबा','bubaː'], eat:['खानु','kʰaːnu'], drink:['पिउनु','piunu'], love:['माया','maːjaː'], heart:['मुटु','muʈu'], tree:['रूख','ɾuːkʰ'], house:['घर','gʱəɾ'], dog:['कुकुर','kukuɾ'], cat:['बिरालो','biɾaːlo'], hand:['हात','haːt'], eye:['आँखा','ãːkʰaː'], hello:['नमस्ते','nəməste'], thanks:['धन्यवाद','dʱənjəbaːd'], one:['एक','ek'], good:['राम्रो','ɾaːmɾo'] }},
  mr: { name: 'Marathi', native: 'मराठी', lat: 19.08, lng: 72.88,
    words: { water:['पाणी','paːɳiː'], fire:['अग्नी','əɡniː'], sun:['सूर्य','suːɾjə'], moon:['चंद्र','tʃəndɾə'], mother:['आई','aːiː'], father:['वडील','ʋəɖiːl'], eat:['खाणे','kʰaːɳe'], drink:['पिणे','pɪɳe'], love:['प्रेम','pɾemə'], heart:['हृदय','ɦɾudəjə'], tree:['झाड','dʒʱaːɖ'], house:['घर','gʱəɾ'], dog:['कुत्रा','kutɾaː'], cat:['मांजर','mãːdʒəɾ'], hand:['हात','haːt'], eye:['डोळा','ɖoɭaː'], hello:['नमस्कार','nəməskaːɾ'], thanks:['धन्यवाद','dʱənjəʋaːd'], one:['एक','ek'], good:['चांगले','tʃaːŋɡle'] }},
  gu: { name: 'Gujarati', native: 'ગુજરાતી', lat: 23.02, lng: 72.57,
    words: { water:['પાણી','paːɳiː'], fire:['આગ','aːɡ'], sun:['સૂર્ય','suːɾjə'], moon:['ચંદ્ર','tʃəndɾə'], mother:['મા','maː'], father:['પિતા','pɪtaː'], eat:['ખાવું','kʰaːʋũ'], drink:['પીવું','piːʋũ'], love:['પ્રેમ','pɾem'], heart:['હૃદય','ɦɾudəj'], tree:['ઝાડ','dʒʱaːɖ'], house:['ઘર','gʱəɾ'], dog:['કૂતરો','kuːtɾo'], cat:['બિલાડી','bɪlaːɖiː'], hand:['હાથ','haːtʰ'], eye:['આંખ','ãːkʰ'], hello:['નમસ્તે','nəməste'], thanks:['આભાર','aːbʱaːɾ'], one:['એક','ek'], good:['સારું','saːɾũ'] }},
  si: { name: 'Sinhala', native: 'සිංහල', lat: 6.93, lng: 79.85,
    words: { water:['වතුර','ʋatuɾə'], fire:['ගින්න','ɡɪnːə'], sun:['ඉර','ɪɾə'], moon:['හඳ','ɦəndə'], mother:['අම්මා','əmːaː'], father:['තාත්තා','taːtːaː'], eat:['කනවා','kənəʋaː'], drink:['බොනවා','bonəʋaː'], love:['ආදරය','aːdəɾəjə'], heart:['හදවත','ɦədəʋətə'], tree:['ගස','ɡəsə'], house:['ගෙදර','ɡedəɾə'], dog:['බල්ලා','bəlːaː'], cat:['පූසා','puːsaː'], hand:['අත','ətə'], eye:['ඇස','æsə'], hello:['ආයුබෝවන්','aːjuboːʋən'], thanks:['ස්තූතියි','stuːtɪjɪ'], one:['එක','ekə'], good:['හොඳ','ɦondə'] }},
  te: { name: 'Telugu', native: 'తెలుగు', lat: 17.39, lng: 78.49,
    words: { water:['నీళ్ళు','niːɭːu'], fire:['అగ్ని','əɡni'], sun:['సూర్యుడు','suːɾjuɖu'], moon:['చంద్రుడు','tʃəndɾuɖu'], mother:['అమ్మ','əmːə'], father:['నాన్న','naːnːə'], eat:['తినడం','tɪnəɖəm'], drink:['తాగడం','taːɡəɖəm'], love:['ప్రేమ','pɾeːmə'], heart:['హృదయం','ɦɾudəjəm'], tree:['చెట్టు','tʃeʈːu'], house:['ఇల్లు','ɪlːu'], dog:['కుక్క','kukːə'], cat:['పిల్లి','pɪlːɪ'], hand:['చేయి','tʃeːjɪ'], eye:['కన్ను','kənːu'], hello:['నమస్కారం','nəməskaːɾəm'], thanks:['ధన్యవాదాలు','dʱənjəʋaːdaːlu'], one:['ఒకటి','okəʈɪ'], good:['మంచి','məntʃɪ'] }},
  kn: { name: 'Kannada', native: 'ಕನ್ನಡ', lat: 12.97, lng: 77.59,
    words: { water:['ನೀರು','niːɾu'], fire:['ಬೆಂಕಿ','beŋkɪ'], sun:['ಸೂರ್ಯ','suːɾjə'], moon:['ಚಂದ್ರ','tʃəndɾə'], mother:['ಅಮ್ಮ','əmːə'], father:['ಅಪ್ಪ','əpːə'], eat:['ತಿನ್ನು','tɪnːu'], drink:['ಕುಡಿ','kuɖɪ'], love:['ಪ್ರೀತಿ','pɾiːtɪ'], heart:['ಹೃದಯ','ɦɾudəjə'], tree:['ಮರ','məɾə'], house:['ಮನೆ','mənɛ'], dog:['ನಾಯಿ','naːjɪ'], cat:['ಬೆಕ್ಕು','bekːu'], hand:['ಕೈ','kəi'], eye:['ಕಣ್ಣು','kəɳːu'], hello:['ನಮಸ್ಕಾರ','nəməskaːɾə'], thanks:['ಧನ್ಯವಾದ','dʱənjəʋaːdə'], one:['ಒಂದು','ondu'], good:['ಒಳ್ಳೆಯ','oɭːejə'] }},
  ml: { name: 'Malayalam', native: 'മലയാളം', lat: 8.52, lng: 76.94,
    words: { water:['വെള്ളം','ʋeɭːəm'], fire:['തീ','tiː'], sun:['സൂര്യൻ','suːɾjən'], moon:['ചന്ദ്രൻ','tʃəndɾən'], mother:['അമ്മ','əmːə'], father:['അച്ഛൻ','ətʃːʰən'], eat:['കഴിക്കുക','kəɻɪkːukə'], drink:['കുടിക്കുക','kuɖɪkːukə'], love:['സ്നേഹം','sneːɦəm'], heart:['ഹൃദയം','ɦɾudəjəm'], tree:['മരം','məɾəm'], house:['വീട്','ʋiːʈː'], dog:['നായ','naːjə'], cat:['പൂച്ച','puːtʃːə'], hand:['കൈ','kəi'], eye:['കണ്ണ്','kəɳːə'], hello:['നമസ്കാരം','nəməskaːɾəm'], thanks:['നന്ദി','nəndi'], one:['ഒന്ന്','onːə'], good:['നല്ല','nəlːə'] }},
  tg: { name: 'Tajik', native: 'Тоҷикӣ', lat: 38.56, lng: 68.77,
    words: { water:['об','ob'], fire:['оташ','otɒʃ'], sun:['офтоб','oftɒb'], moon:['моҳ','moh'], mother:['модар','modɒr'], father:['падар','padɒr'], eat:['хӯрдан','xʉːrdɒn'], drink:['нӯшидан','nʉːʃidɒn'], love:['ишқ','iʃq'], heart:['дил','dil'], tree:['дарахт','dɒrɒxt'], house:['хона','xonɒ'], dog:['саг','sɒɡ'], cat:['гурба','ɡʉrbɒ'], hand:['даст','dɒst'], eye:['чашм','tʃɒʃm'], hello:['салом','sɒlom'], thanks:['раҳмат','rɒhmɒt'], one:['як','jɒk'], good:['хуб','xub'] }},
  ku: { name: 'Kurdish', native: 'Kurmancî', lat: 37.22, lng: 43.00,
    words: { water:['av','ɑːv'], fire:['agir','ɑɡɪɾ'], sun:['roj','ɾoːʒ'], moon:['heyv','hejv'], mother:['dayik','dɑːjɪk'], father:['bav','bɑːv'], eat:['xwarin','xwɑːɾɪn'], drink:['vexwarin','vɛxwɑːɾɪn'], love:['evîn','ɛviːn'], heart:['dil','dɪl'], tree:['dar','dɑːɾ'], house:['mal','mɑːl'], dog:['se','sɛː'], cat:['pisîk','pɪsiːk'], hand:['dest','dɛst'], eye:['çav','tʃɑːv'], hello:['silav','sɪlɑːv'], thanks:['spas','spɑːs'], one:['yek','jɛk'], good:['baş','bɑːʃ'] }},
  ckb: { name: 'Kurdish (Sorani)', native: 'سۆرانی', lat: 36.19, lng: 44.01,
    words: { water:['ئاو','ɑːw'], fire:['ئاگر','ɑːɡɪɾ'], sun:['خۆر','xoːɾ'], moon:['مانگ','mɑːŋɡ'], mother:['دایک','dɑːjɪk'], father:['باوک','bɑːwɪk'], eat:['خواردن','xwɑːɾdɪn'], drink:['خواردنەوە','xwɑːɾdɪnɛwɛ'], love:['خۆشەویستی','xoʃɛwiːstiː'], heart:['دڵ','dɪɬ'], tree:['دار','dɑːɾ'], house:['ماڵ','mɑːɬ'], dog:['سەگ','sɛɡ'], cat:['پشیلە','pʃiːlɛ'], hand:['دەست','dɛst'], eye:['چاو','tʃɑːw'], hello:['سڵاو','sɬɑːw'], thanks:['سوپاس','supɑːs'], one:['یەک','jɛk'], good:['باش','bɑːʃ'] }},
  ps: { name: 'Pashto', native: 'پښتو', lat: 34.52, lng: 69.17,
    words: { water:['اوبه','obə'], fire:['اور','oːɾ'], sun:['لمر','lmər'], moon:['سپوږمۍ','spuɡmʌj'], mother:['مور','moːɾ'], father:['پلار','plɑːɾ'], eat:['خوړل','xwəɽəl'], drink:['څکل','tskəl'], love:['مینه','miːna'], heart:['زړه','zɽə'], tree:['ونه','wəna'], house:['کور','koːɾ'], dog:['سپی','spaj'], cat:['پیشو','piːʃo'], hand:['لاس','lɑːs'], eye:['سترګه','stərɡa'], hello:['سلام','sɑlɑːm'], thanks:['مننه','mənəna'], one:['یو','jaw'], good:['ښه','ʂə'] }},
  az: { name: 'Azerbaijani', native: 'Azərbaycanca', lat: 40.41, lng: 49.87,
    words: { water:['su','su'], fire:['od','od'], sun:['günəş','ɟyneʃ'], moon:['ay','ɑj'], mother:['ana','ɑnɑ'], father:['ata','ɑtɑ'], eat:['yemək','jemæc'], drink:['içmək','ɪtʃmæc'], love:['sevgi','sevɟi'], heart:['ürək','yɾæc'], tree:['ağac','ɑɣɑdʒ'], house:['ev','ev'], dog:['it','ɪt'], cat:['pişik','pɪʃɪc'], hand:['əl','æl'], eye:['göz','ɟøz'], hello:['salam','sɑlɑːm'], thanks:['təşəkkür','tæʃecːyɾ'], one:['bir','bɪɾ'], good:['yaxşı','jɑxʃɯ'] }},
  ug: { name: 'Uyghur', native: 'ئۇيغۇرچە', lat: 43.83, lng: 87.58,
    words: { water:['سۇ','su'], fire:['ئوت','ot'], sun:['قۇياش','qujɑʃ'], moon:['ئاي','ɑj'], mother:['ئانا','ɑnɑ'], father:['ئاتا','ɑtɑ'], eat:['يېمەك','jemɛk'], drink:['ئىچمەك','itʃmɛk'], love:['مۇھەببەت','muhɛbbɛt'], heart:['يۈرەك','jyɾɛk'], tree:['دەرەخ','dɛɾɛx'], house:['ئۆي','øj'], dog:['ئىت','it'], cat:['مۈشۈك','myʃyk'], hand:['قول','qol'], eye:['كۆز','køz'], hello:['ئەسسالامۇ ئەلەيكۇم','ɛssɑlɑmu ɛlɛjkum'], thanks:['رەھمەت','ɾɛhmɛt'], one:['بىر','bir'], good:['ياخشى','jɑxʃi'] }},
  kk: { name: 'Kazakh', native: 'Қазақша', lat: 51.17, lng: 71.43,
    words: { water:['су','sw'], fire:['от','ot'], sun:['күн','kyn'], moon:['ай','ɑj'], mother:['ана','ɑnɑ'], father:['әке','æke'], eat:['жеу','ʒew'], drink:['ішу','ɪʃw'], love:['махаббат','mɑxɑbbɑt'], heart:['жүрек','ʒyɾek'], tree:['ағаш','ɑʁɑʃ'], house:['үй','yj'], dog:['ит','ɪt'], cat:['мысық','mɯsɯq'], hand:['қол','qol'], eye:['көз','køz'], hello:['сәлем','sælem'], thanks:['рахмет','ɾɑxmet'], one:['бір','bɪɾ'], good:['жақсы','ʒɑqsɯ'] }},
  ky: { name: 'Kyrgyz', native: 'Кыргызча', lat: 42.87, lng: 74.59,
    words: { water:['суу','suː'], fire:['от','ot'], sun:['күн','kyn'], moon:['ай','ɑj'], mother:['эне','ene'], father:['ата','ɑtɑ'], eat:['жеп','dʒep'], drink:['ичүү','ɪtʃyː'], love:['сүйүү','syjyː'], heart:['жүрөк','dʒyɾøk'], tree:['жыгач','dʒɯɡɑtʃ'], house:['үй','yj'], dog:['ит','ɪt'], cat:['мышык','mɯʃɯk'], hand:['кол','kol'], eye:['көз','køz'], hello:['салам','sɑlɑm'], thanks:['рахмат','ɾɑxmɑt'], one:['бир','bɪɾ'], good:['жакшы','dʒɑkʃɯ'] }},
  uz: { name: 'Uzbek', native: "Oʻzbekcha", lat: 41.30, lng: 69.28,
    words: { water:['suv','suv'], fire:['olov','olov'], sun:['quyosh','qujɒʃ'], moon:['oy','oj'], mother:['ona','onɑ'], father:['ota','otɑ'], eat:['yemoq','jemɒq'], drink:['ichmoq','itʃmɒq'], love:['sevgi','sevɡi'], heart:['yurak','juɾɑk'], tree:['daraxt','dɑɾɑxt'], house:['uy','uj'], dog:['it','it'], cat:['mushuk','muʃuk'], hand:["qo'l",'qɒl'], eye:["ko'z",'kɒz'], hello:['salom','sɑlɒm'], thanks:['rahmat','ɾɑxmɑt'], one:['bir','biɾ'], good:['yaxshi','jɑxʃi'] }},
  tk: { name: 'Turkmen', native: 'Türkmençe', lat: 37.95, lng: 58.38,
    words: { water:['suw','suw'], fire:['ot','ot'], sun:['gün','ɡyn'], moon:['aý','ɑːj'], mother:['ene','ene'], father:['ata','ɑtɑ'], eat:['iýmek','iːjmek'], drink:['içmek','ɪtʃmek'], love:['söýgi','søːjɡi'], heart:['ýürek','jyɾek'], tree:['agaç','ɑɡɑtʃ'], house:['öý','øːj'], dog:['it','it'], cat:['pişik','pɪʃɪk'], hand:['el','el'], eye:['göz','ɡøz'], hello:['salam','sɑlɑːm'], thanks:['sagboluň','sɑɡboluŋ'], one:['bir','biɾ'], good:['gowy','ɡowɯ'] }},
  mn_cn: { name: 'Mongolian (Inner)', native: 'ᠮᠣᠩᠭᠣᠯ', lat: 40.84, lng: 111.75,
    words: { water:['ᠤᠰᠤ','usu'], fire:['ᠭᠠᠯ','ɡɑl'], sun:['ᠨᠠᠷᠠ','nɑrɑ'], moon:['ᠰᠠᠷᠠ','sɑrɑ'], mother:['ᠡᠬᠡ','eχe'], father:['ᠠᠪᠤ','ɑβu'], eat:['ᠢᠳᠡᠬᠦ','ideχʉ'], drink:['ᠤᠤᠬᠤ','uːχu'], love:['ᠬᠠᠢᠷ᠎ᠠ','χɑir'], heart:['ᠵᠢᠷᠦᠬᠡ','dʒirʉχe'], tree:['ᠮᠣᠳᠤ','mɔdu'], house:['ᠭᠡᠷ','ɡer'], dog:['ᠨᠣᠬᠠᠢ','nɔχɑi'], cat:['ᠮᠤᠤᠷ','muːr'], hand:['ᠭᠠᠷ','ɡɑr'], eye:['ᠨᠢᠳᠦ','nidʉ'], hello:['ᠰᠠᠢᠨ ᠪᠠᠢᠨ᠎ᠠ','sɑin bɑinɑ'], thanks:['ᠪᠠᠶᠠᠷᠯᠠᠯ᠎ᠠ','bɑjɑrlɑlɑ'], one:['ᠨᠢᠭᠡ','niɡe'], good:['ᠰᠠᠢᠨ','sɑin'] }},
  mnc: { name: 'Manchu', native: 'ᠮᠠᠨᠵᡠ', lat: 45.75, lng: 126.65,
    words: { water:['ᠮᡠᡴᡝ','mukə'], fire:['ᡨᡠᠸᠠ','tuwa'], sun:['ᡧᡠᠨ','ʃun'], moon:['ᠪᡳᠶᠠ','bija'], mother:['ᡝᠨᡳᠶᡝ','ənijə'], father:['ᠠᠮᠠ','ama'], eat:['ᠵᡝᠮᠪᡳ','dʒəmbi'], drink:['ᠣᠮᡳᠪᡳ','omibi'], love:['ᡥᠠᡳᡵᠠᠮᠪᡳ','xairambi'], heart:['ᠨᡳᠶᠠᠮᠠᠨ','nijaman'], tree:['ᠮᠣᠣ','moː'], house:['ᠪᠣᠣ','boː'], dog:['ᡳᠨᡩᠠᡥᡡᠨ','indaxɯːn'], cat:['ᡴᡝᠰᡳᡴᡝ','kəsikə'], hand:['ᡤᠠᠯᠠ','ɡala'], eye:['ᠶᠠᠰᠠ','jasa'], hello:['ᠰᡳ ᠰᠠᡳᠨ','si sain'], thanks:['ᠪᠠᠨᡳᡥᠠ','banixa'], one:['ᠡᠮᡠ','əmu'], good:['ᠰᠠᡳᠨ','sain'] }},

  ar_eg: { name: 'Arabic (Egyptian)', native: 'مصري', lat: 30.04, lng: 31.24,
    words: { water:['ميّه','majːa'], fire:['نار','naːɾ'], sun:['شمس','ʃams'], moon:['قمر','ʔamaɾ'], mother:['أم','ʔomm'], father:['أب','ʔabb'], eat:['ياكل','jaːkol'], drink:['يشرب','jiʃɾab'], love:['حب','ħobb'], heart:['قلب','ʔalb'], tree:['شجرة','ʃaɡaɾa'], house:['بيت','beːt'], dog:['كلب','kalb'], cat:['قطة','ʔotˤtˤa'], hand:['إيد','ʔiːd'], eye:['عين','ʕeːn'], hello:['أهلاً','ʔahlan'], thanks:['شكراً','ʃokɾan'], one:['واحد','waːħed'], good:['كويّس','kwajːes'] }},
  ar_lev: { name: 'Arabic (Levantine)', native: 'شامي', lat: 33.89, lng: 35.50,
    words: { water:['ميّ','majj'], fire:['نار','naːɾ'], sun:['شمس','ʃams'], moon:['قمر','ʔamaɾ'], mother:['إمّ','ʔemm'], father:['أب','ʔabb'], eat:['ياكل','jaːkol'], drink:['يشرب','jiʃɾab'], love:['حب','ħobb'], heart:['قلب','ʔalb'], tree:['شجرة','ʃaʒaɾa'], house:['بيت','beːt'], dog:['كلب','kalb'], cat:['بسّة','bisse'], hand:['إيد','ʔiːd'], eye:['عين','ʕeːn'], hello:['مرحبا','maɾħaba'], thanks:['شكراً','ʃukɾan'], one:['واحد','waːħad'], good:['منيح','mniːħ'] }},
  ar_gulf: { name: 'Arabic (Gulf)', native: 'خليجي', lat: 25.28, lng: 55.30,
    words: { water:['ماي','maːj'], fire:['نار','naːɾ'], sun:['شمس','ʃams'], moon:['قمر','gamaɾ'], mother:['أم','ʔumm'], father:['أب','ʔab'], eat:['ياكل','jaːkil'], drink:['يشرب','jiʃɾab'], love:['حب','ħubb'], heart:['قلب','galb'], tree:['شجرة','ʃijaɾa'], house:['بيت','beːt'], dog:['كلب','kalb'], cat:['بزّونة','bazzuːna'], hand:['يد','jad'], eye:['عين','ʕeːn'], hello:['هلا','hala'], thanks:['مشكور','maʃkuːɾ'], one:['واحد','waːħid'], good:['زين','zeːn'] }},
  ar_iq: { name: 'Arabic (Iraqi)', native: 'عراقي', lat: 33.31, lng: 44.37,
    words: { water:['ماي','maːj'], fire:['نار','naːɾ'], sun:['شمس','ʃamis'], moon:['قمر','gamaɾ'], mother:['أم','ʔumm'], father:['أب','ʔab'], eat:['ياكل','jaːkul'], drink:['يشرب','jiʃɾab'], love:['حب','ħubb'], heart:['قلب','galub'], tree:['شجرة','ʃadʒaɾa'], house:['بيت','beːt'], dog:['كلب','tʃalib'], cat:['بزّونة','bazzuːna'], hand:['إيد','ʔiːd'], eye:['عين','ʕeːn'], hello:['مرحبا','maɾħaba'], thanks:['شكراً','ʃukɾan'], one:['واحد','waːħid'], good:['زين','zeːn'] }},
  ar_ma: { name: 'Arabic (Moroccan)', native: 'دارجة', lat: 33.97, lng: -6.85,
    words: { water:['لما','lma'], fire:['عافية','ʕaːfja'], sun:['شمس','ʃəms'], moon:['قمر','qmɐɾ'], mother:['مّي','mmi'], father:['بّا','bba'], eat:['ياكل','jaːkul'], drink:['يشرب','jiʃɾəb'], love:['حب','ħubb'], heart:['قلب','qəlb'], tree:['شجرة','ʃəʒɾa'], house:['دار','daːɾ'], dog:['كلب','kəlb'], cat:['مشّ','məʃʃ'], hand:['يد','jədd'], eye:['عين','ʕin'], hello:['السلام','ssalaːm'], thanks:['شكراً','ʃukɾan'], one:['واحد','waːħəd'], good:['مزيان','mzjaːn'] }},
  ar_tn: { name: 'Arabic (Tunisian)', native: 'تونسي', lat: 36.81, lng: 10.18,
    words: { water:['ماء','maː'], fire:['نار','naːɾ'], sun:['شمس','ʃams'], moon:['قمر','qmɐɾ'], mother:['أمّي','ʔummi'], father:['بابا','baːba'], eat:['ياكل','jaːkəl'], drink:['يشرب','jiʃɾəb'], love:['حب','ħubb'], heart:['قلب','qalb'], tree:['شجرة','ʃaʒɾa'], house:['دار','daːɾ'], dog:['كلب','kalb'], cat:['قطّوس','qatˤtˤuːs'], hand:['يد','jədd'], eye:['عين','ʕiːn'], hello:['أسلامة','ʔasleːma'], thanks:['عيّشك','ʕajːʃək'], one:['واحد','waːħəd'], good:['باهي','beːhi'] }},
  ar_sd: { name: 'Arabic (Sudanese)', native: 'سوداني', lat: 15.59, lng: 32.53,
    words: { water:['موية','moːja'], fire:['نار','naːɾ'], sun:['شمس','ʃams'], moon:['قمر','gamaɾ'], mother:['أم','ʔumm'], father:['أب','ʔab'], eat:['ياكل','jaːkul'], drink:['يشرب','jiʃɾab'], love:['حب','ħubb'], heart:['قلب','galb'], tree:['شجرة','ʃadʒaɾa'], house:['بيت','beːt'], dog:['كلب','kalib'], cat:['قطّ','guttˤ'], hand:['يد','jad'], eye:['عين','ʕeːn'], hello:['سلام','salaːm'], thanks:['شكراً','ʃukɾan'], one:['واحد','waːħid'], good:['كويّس','kwajːis'] }},
  ti: { name: 'Tigrinya', native: 'ትግርኛ', lat: 15.34, lng: 38.93,
    words: { water:['ማይ','maj'], fire:['ሓዊ','ħawi'], sun:['ጸሓይ','sˤəħaj'], moon:['ወርሒ','wərħi'], mother:['ኣደ','ʔadɛ'], father:['ኣቦ','ʔabo'], eat:['ምብላዕ','mɨblaʕ'], drink:['ምስታይ','mɨstaj'], love:['ፍቕሪ','fɨqɾi'], heart:['ልቢ','lɨbi'], tree:['ኦም','ʔom'], house:['ገዛ','ɡɛza'], dog:['ከልቢ','kɛlbi'], cat:['ድሙ','dɨmu'], hand:['ኢድ','ʔiːd'], eye:['ዓይኒ','ʕajni'], hello:['ሰላም','sɛlaːm'], thanks:['የቐንየለይ','jɛqɛnjɛlɛj'], one:['ሓደ','ħadɛ'], good:['ጽቡቕ','sˤɨbuqʼ'] }},
  mt: { name: 'Maltese', native: 'Malti', lat: 35.90, lng: 14.51,
    words: { water:['ilma','ilma'], fire:['nar','naːɾ'], sun:['xemx','ʃɛmʃ'], moon:['qamar','ʔamaɾ'], mother:['omm','omm'], father:['missier','missiɛɾ'], eat:['jiekol','jiɛkol'], drink:['jixrob','jiʃɾop'], love:['imħabba','imħabːa'], heart:['qalb','ʔalp'], tree:['siġra','sidʒɾa'], house:['dar','daːɾ'], dog:['kelb','kɛlp'], cat:['qattus','ʔattus'], hand:['id','iːt'], eye:['għajn','ajn'], hello:['merħba','mɛɾħba'], thanks:['grazzi','ɡɾattsi'], one:['wieħed','wiɛħɛt'], good:['tajjeb','tajːɛp'] }},
  ig: { name: 'Igbo', native: 'Igbo', lat: 6.17, lng: 6.79, // Onitsha (Igbo historical/commercial center)
    words: { water:['mmiri','mːiɾi'], fire:['ọkụ','ɔkʊ'], sun:['anyanwụ','aɲaŋwʊ'], moon:['ọnwa','ɔŋwa'], mother:['nne','nːɛ'], father:['nna','nːa'], eat:['iri','iɾi'], drink:['aṅụ','aŋʊ'], love:['ịhụnanya','ɪhʊnaɲa'], heart:['obi','obi'], tree:['osisi','osisi'], house:['ụlọ','ʊlɔ'], dog:['nkịta','ŋkɪta'], cat:['nwamba','ŋwamba'], hand:['aka','aka'], eye:['anya','aɲa'], hello:['nnọọ','nːɔː'], thanks:['daalụ','daːlʊ'], one:['otu','otu'], good:['ọma','ɔma'] }},
  ha: { name: 'Hausa', native: 'Hausa', lat: 12.00, lng: 8.52,
    words: { water:['ruwa','ɾuːwa'], fire:['wuta','wuta'], sun:['rana','ɾana'], moon:['wata','wata'], mother:['uwa','uwa'], father:['uba','uba'], eat:['ci','tʃiː'], drink:['sha','ʃaː'], love:['ƙauna','kʼauna'], heart:['zuciya','zutʃija'], tree:['bishiya','biʃija'], house:['gida','ɡida'], dog:['kare','kaɾɛ'], cat:['kyanwa','kʲanwa'], hand:['hannu','hanːu'], eye:['ido','ido'], hello:['sannu','sanːu'], thanks:['na gode','na ɡode'], one:['ɗaya','dʼaja'], good:['nagari','naɡaɾi'] }},
  wo: { name: 'Wolof', native: 'Wolof', lat: 14.69, lng: -17.44,
    words: { water:['ndox','ndɔx'], fire:['safara','safaɾa'], sun:['jant','dʒant'], moon:['weer','weːɾ'], mother:['yaay','jaːj'], father:['baay','baːj'], eat:['lekk','lɛkː'], drink:['naan','naːn'], love:['mbëggeel','mbəɡeːl'], heart:['xol','xol'], tree:['garab','ɡaɾab'], house:['kër','kəɾ'], dog:['xaj','xaj'], cat:['muus','muːs'], hand:['loxo','lɔxɔ'], eye:['bët','bət'], hello:['na nga def','na ŋɡa dɛf'], thanks:['jërëjëf','dʒəɾədʒəf'], one:['benn','bɛnː'], good:['baax','baːx'] }},
  so: { name: 'Somali', native: 'Soomaali', lat: 2.05, lng: 45.32,
    words: { water:['biyo','bijo'], fire:['dab','dab'], sun:['qorrax','qɔɾːax'], moon:['dayax','dajax'], mother:['hooyo','hoːjo'], father:['aabo','aːbo'], eat:['cun','tʃun'], drink:['cab','tʃab'], love:['jacayl','dʒatʃajl'], heart:['wadne','wadnɛ'], tree:['geed','ɡeːd'], house:['guri','ɡuɾi'], dog:['eey','eːj'], cat:['bisad','bisad'], hand:['gacmo','ɡatʃmo'], eye:['il','il'], hello:['salaan','salaːn'], thanks:['mahadsanid','maħadsanid'], one:['kow','kow'], good:['wanaagsan','wanaːɡsan'] }},
  om: { name: 'Oromo', native: 'Afaan Oromoo', lat: 8.55, lng: 39.27, // Adama (Oromia regional center)
    words: { water:['bishaan','biʃaːn'], fire:['ibidda','ibidːa'], sun:['aduu','aduː'], moon:['jiʼa','dʒiʔa'], mother:['haadha','haːdʱa'], father:['abbaa','abːaː'], eat:['nyaachuu','ɲaːtʃuː'], drink:['dhuguu','dʱuɡuː'], love:['jaalala','dʒaːlala'], heart:['onnee','onːeː'], tree:['muka','muka'], house:['mana','mana'], dog:['saree','saɾeː'], cat:['adurree','aduɾːeː'], hand:['harka','haɾka'], eye:['ija','idʒa'], hello:['akkam','akːam'], thanks:['galatoomi','ɡalatoːmi'], one:['tokko','tokːo'], good:['gaarii','ɡaɾiː'] }},
  rw: { name: 'Kinyarwanda', native: 'Ikinyarwanda', lat: -1.94, lng: 30.06,
    words: { water:['amazi','amaːzi'], fire:['umuriro','umuɾiɾo'], sun:['izuba','izuba'], moon:['ukwezi','ukwezi'], mother:['mama','maːma'], father:['papa','paːpa'], eat:['kurya','kuɾja'], drink:['kunywa','kuɲwa'], love:['urukundo','uɾukundo'], heart:['umutima','umutima'], tree:['igiti','iɡiti'], house:['inzu','inzu'], dog:['imbwa','imbwa'], cat:['injangwe','indʒaŋɡwe'], hand:['ikiganza','ikiɡanza'], eye:['ijisho','idʒiʃo'], hello:['muraho','muɾaːho'], thanks:['murakoze','muɾakoze'], one:['rimwe','ɾimwe'], good:['byiza','bjiza'] }},
  xh: { name: 'Xhosa', native: 'isiXhosa', lat: -33.02, lng: 27.91, // East London (Eastern Cape Xhosa heartland)
    words: { water:['amanzi','amaːnzi'], fire:['umlilo','umlilo'], sun:['ilanga','ilaːŋɡa'], moon:['inyanga','iɲaːŋɡa'], mother:['umama','umaːma'], father:['utata','utaːta'], eat:['ukutya','ukutʲa'], drink:['ukusela','ukusɛla'], love:['uthando','utʰando'], heart:['intliziyo','intɬizijo'], tree:['umthi','umtʰi'], house:['indlu','indɬu'], dog:['inja','indʒa'], cat:['ikati','ikati'], hand:['isandla','isandɬa'], eye:['iliso','iliso'], hello:['molo','molo'], thanks:['enkosi','ɛnkosi'], one:['inye','iɲɛ'], good:['lungile','luŋɡilɛ'] }},
  sn: { name: 'Shona', native: 'chiShona', lat: -17.83, lng: 31.05,
    words: { water:['mvura','mvuɾa'], fire:['moto','moto'], sun:['zuva','zuva'], moon:['mwedzi','mwedzi'], mother:['amai','amai'], father:['baba','baba'], eat:['kudya','kudja'], drink:['kunwa','kunwa'], love:['rudo','ɾudo'], heart:['mwoyo','mwojo'], tree:['muti','muti'], house:['imba','imba'], dog:['imbwa','imbwa'], cat:['katsi','katsi'], hand:['ruoko','ɾwoko'], eye:['ziso','ziso'], hello:['mhoro','mhoɾo'], thanks:['maita','maita'], one:['potsi','potsi'], good:['chakanaka','tʃakanaka'] }},
  ln: { name: 'Lingala', native: 'Lingála', lat: -4.32, lng: 15.31,
    words: { water:['mai','mai'], fire:['mɔ́tɔ','mɔtɔ'], sun:['mói','moi'], moon:['sánzá','sanza'], mother:['mamá','mama'], father:['tatá','tata'], eat:['kolía','kolia'], drink:['komɛ́la','komɛla'], love:['bolíngo','boliŋɡo'], heart:['motéma','motema'], tree:['nzété','nzete'], house:['ndáko','ndako'], dog:['mbwá','mbwa'], cat:['nyáu','ɲau'], hand:['lobɔ́kɔ','lobɔkɔ'], eye:['líso','liso'], hello:['mbóte','mbote'], thanks:['matɔ́ndɔ','matɔndɔ'], one:['mɔ̌kɔ́','mɔkɔ'], good:['malámu','malamu'] }},
  ny: { name: 'Chichewa', native: 'Chicheŵa', lat: -13.96, lng: 33.79,
    words: { water:['madzi','madzi'], fire:['moto','moto'], sun:['dzuwa','dzuwa'], moon:['mwezi','mwezi'], mother:['amayi','amaji'], father:['abambo','abambo'], eat:['kudya','kudja'], drink:['kumwa','kumwa'], love:['chikondi','tʃikondi'], heart:['mtima','mtima'], tree:['mtengo','mteŋɡo'], house:['nyumba','ɲumba'], dog:['galu','ɡalu'], cat:['mphaka','mpʰaka'], hand:['dzanja','dzandʒa'], eye:['diso','diso'], hello:['moni','moni'], thanks:['zikomo','zikomo'], one:['chimodzi','tʃimodzi'], good:['chabwino','tʃabwino'] }},
  en_aave: { name: 'English (AAVE)', native: 'English (AAVE)', lat: 33.75, lng: -84.39,
    words: { water:['water','wɑːɾɚ'], fire:['fire','faːɚ'], sun:['sun','sʌn'], moon:['moon','muːn'], mother:['mama','mɑːmə'], father:['daddy','dæɾi'], eat:['eat','iːt'], drink:['drink','dɹɪŋk'], love:['love','lʌv'], heart:['heart','hɑːɹt'], tree:['tree','tɹiː'], house:['house','haʊs'], dog:['dog','dɔːɡ'], cat:['cat','kæt'], hand:['hand','hæːnd'], eye:['eye','aː'], hello:["what's up",'wʌts ʌp'], thanks:['thanks','θæŋks'], one:['one','wʌn'], good:['good','ɡʊd'] }},
  en_au: { name: 'English (Australian)', native: 'English (Australian)', lat: -33.87, lng: 151.21,
    words: { water:['water','woːɾə'], fire:['fire','fɑːə'], sun:['sun','sɐn'], moon:['moon','muːn'], mother:['mother','mɐðə'], father:['father','fɐːðə'], eat:['eat','iːt'], drink:['drink','dɹɪŋk'], love:['love','lɐv'], heart:['heart','hɐːt'], tree:['tree','tɹiː'], house:['house','hæːʉs'], dog:['dog','dɔɡ'], cat:['cat','kæːt'], hand:['hand','hæːnd'], eye:['eye','ɑːe'], hello:["g'day",'ɡədæɪ'], thanks:['thanks','θæːŋks'], one:['one','wɐn'], good:['good','ɡʊd'] }},
  sco: { name: 'Scots', native: 'Scots', lat: 55.86, lng: -4.25,
    words: { water:['watter','wɑtəɹ'], fire:['fire','fəiɹ'], sun:['sun','sʌn'], moon:['muin','mɪn'], mother:['mither','mɪðəɹ'], father:['faither','feðəɹ'], eat:['eat','iːt'], drink:['drink','drɪŋk'], love:['luve','lʌv'], heart:['hert','hɛɹt'], tree:['tree','triː'], house:['hoose','huːs'], dog:['dug','dʌɡ'], cat:['cat','kat'], hand:['haund','hɑːnd'], eye:['ee','iː'], hello:['hullo','hʌlo'], thanks:['thanks','θaŋks'], one:['ane','en'], good:['guid','ɡɪd'] }},
  af: { name: 'Afrikaans', native: 'Afrikaans', lat: -33.93, lng: 18.42,
    words: { water:['water','vɑːtər'], fire:['vuur','fyːr'], sun:['son','sɔn'], moon:['maan','mɑːn'], mother:['moeder','muːdər'], father:['vader','fɑːdər'], eat:['eet','iːt'], drink:['drink','drəŋk'], love:['liefde','liːfdə'], heart:['hart','ɦart'], tree:['boom','buːm'], house:['huis','hœɪs'], dog:['hond','ɦɔnt'], cat:['kat','kat'], hand:['hand','ɦant'], eye:['oog','uːx'], hello:['hallo','ɦaləu'], thanks:['dankie','daŋki'], one:['een','iːn'], good:['goed','xut'] }},
  de_gsw: { name: 'Swiss German', native: 'Schwyzerdütsch', lat: 47.38, lng: 8.54,
    words: { water:['Wasser','vasːər'], fire:['Füür','fyːr'], sun:['Sunne','zunə'], moon:['Mond','mond'], mother:['Mueter','muːətər'], father:['Vater','fatər'], eat:['ässe','ɛsːə'], drink:['trinke','trɪŋkə'], love:['Liebi','liːəbi'], heart:['Härz','hɛrts'], tree:['Baum','baʊm'], house:['Huus','huːs'], dog:['Hund','hund'], cat:['Chatz','xats'], hand:['Hand','hand'], eye:['Aug','aʊɡ'], hello:['Grüezi','ɡryːətsi'], thanks:['Merci','mɛrsiː'], one:['eis','ɛɪs'], good:['guet','ɡuːət'] }},
  de_at: { name: 'Austrian German', native: 'Österreichisch', lat: 48.21, lng: 16.37,
    words: { water:['Wasser','vasɐ'], fire:['Feuer','fɔɪɐ'], sun:['Sonne','sɔnə'], moon:['Mond','moːnt'], mother:['Mutter','mʊtɐ'], father:['Vater','fɑːtɐ'], eat:['essen','ɛsn'], drink:['trinken','tʁɪŋkŋ'], love:['Liebe','liːbə'], heart:['Herz','hɛɐts'], tree:['Baum','baːm'], house:['Haus','haʊs'], dog:['Hund','hʊnt'], cat:['Katze','kɑtsə'], hand:['Hand','hɑnt'], eye:['Auge','aːɡə'], hello:['Servus','zɛɐvʊs'], thanks:['Danke','daŋkə'], one:['eins','ɑːns'], good:['gut','ɡuːt'] }},
  de_by: { name: 'Bavarian', native: 'Boarisch', lat: 48.14, lng: 11.58,
    words: { water:['Wossa','vɔsɐ'], fire:['Feia','fɑɪɐ'], sun:['Sunn','zʊn'], moon:['Mond','moːnd'], mother:['Muada','muːɐdɐ'], father:['Voda','foːdɐ'], eat:['essn','ɛsn'], drink:['dringa','dʁɪŋɐ'], love:['Liab','liːɐb'], heart:['Herz','hɛɐts'], tree:['Bam','bɑːm'], house:['Haus','haʊs'], dog:['Hund','hʊnd'], cat:['Katz','kɑts'], hand:['Hand','hɑnd'], eye:['Aug','aʊɡ'], hello:['Griaß','ɡʁiɐs ɡɔd'], thanks:['Dangschee','dɑŋʃeː'], one:['oans','oːɐns'], good:['guad','ɡuːɐd'] }},
  nds: { name: 'Low German', native: 'Plattdüütsch', lat: 53.55, lng: 9.99,
    words: { water:['Water','vɑːtɐ'], fire:['Füer','fyːɐ'], sun:['Sünn','zʏn'], moon:['Maand','mɑːnt'], mother:['Moder','moːdɐ'], father:['Vader','fɑːdɐ'], eat:['eten','eːtn'], drink:['drinken','dɹɪŋkn'], love:['Leev','leːf'], heart:['Hart','haɐt'], tree:['Boom','boːm'], house:['Huus','huːs'], dog:['Hund','hʊnt'], cat:['Katt','kat'], hand:['Hand','hant'], eye:['Oog','oːx'], hello:['Moin','mɔɪn'], thanks:['Dankschöön','daŋkʃøːn'], one:['een','eːn'], good:['good','ɡoːt'] }},
  yi: { name: 'Yiddish', native: 'ייִדיש', lat: 40.71, lng: -74.01,
    words: { water:['וואַסער','vasər'], fire:['פֿײַער','fajər'], sun:['זון','zun'], moon:['לבֿנה','ləvɔnə'], mother:['מאַמע','mamə'], father:['טאַטע','tatə'], eat:['עסן','ɛsn'], drink:['טרינקען','trɪŋkən'], love:['ליבע','libə'], heart:['האַרץ','harts'], tree:['בוים','bɔɪm'], house:['הויז','hɔɪz'], dog:['הונט','hʊnt'], cat:['קאַץ','kats'], hand:['האַנט','hant'], eye:['אויג','ɔɪɡ'], hello:['שלום עליכם','ʃɔləm alɛɪxəm'], thanks:['אַ דאַנק','a daŋk'], one:['איינס','ɛɪns'], good:['גוט','ɡʊt'] }},
  is: { name: 'Icelandic', native: 'Íslenska', lat: 64.15, lng: -21.94,
    words: { water:['vatn','vahtn'], fire:['eldur','ɛltʏɹ'], sun:['sól','souːl'], moon:['tungl','tʰuŋkl'], mother:['móðir','mouːðɪɹ'], father:['faðir','faːðɪɹ'], eat:['borða','pɔrða'], drink:['drekka','trɛhka'], love:['ást','aːust'], heart:['hjarta','çaɹta'], tree:['tré','tɹjɛː'], house:['hús','huːs'], dog:['hundur','hʏntʏɹ'], cat:['köttur','kʰœʰtʏɹ'], hand:['hönd','hœnt'], eye:['auga','œɪːɣa'], hello:['halló','halouː'], thanks:['takk','tʰahk'], one:['einn','ɛitn'], good:['góður','ɡouːðʏɹ'] }},
  gd: { name: 'Scottish Gaelic', native: 'Gàidhlig', lat: 57.48, lng: -7.36,
    words: { water:['uisge','ɯʃkʲə'], fire:['teine','tʃʰenə'], sun:['grian','kɾʲiən'], moon:['gealach','kʲaɫəx'], mother:['màthair','maːhəɾʲ'], father:['athair','ahəɾʲ'], eat:['ith','i'], drink:['òl','ɔːl'], love:['gaol','kɯːl'], heart:['cridhe','kɾʲiə'], tree:['craobh','kɾɯːv'], house:['taigh','tʰɤj'], dog:['cù','kuː'], cat:['cat','kʰaʰt'], hand:['làmh','laːv'], eye:['sùil','suːl'], hello:['halò','haloː'], thanks:['tapadh leat','tʰapə lʲɛt'], one:['aon','ɯːn'], good:['math','ma'] }},
  br: { name: 'Breton', native: 'Brezhoneg', lat: 48.39, lng: -4.49,
    words: { water:['dour','duːɾ'], fire:['tan','tɑ̃ːn'], sun:['heol','heːɔl'], moon:['loar','lwaːɾ'], mother:['mamm','mɑ̃m'], father:['tad','taːd'], eat:['debriñ','debɾĩː'], drink:['evañ','eːvɑ̃'], love:['karantez','kaɾɑ̃ntes'], heart:['kalon','kalɔ̃n'], tree:['gwez','ɡweːs'], house:['ti','tiː'], dog:['ki','kiː'], cat:['kazh','kaːs'], hand:['dorn','dɔɾn'], eye:['lagad','laɡat'], hello:['demat','deːmat'], thanks:['trugarez','tɾyɡaɾes'], one:['unan','yːnɑ̃n'], good:['mat','maːt'] }},
  nap: { name: 'Neapolitan', native: 'Napulitano', lat: 40.85, lng: 14.27,
    words: { water:['acqua','akkwa'], fire:['fuoco','fwɔkə'], sun:['sole','solə'], moon:['luna','lunə'], mother:['mamma','mammə'], father:['pate','patə'], eat:['mangià','mandʒa'], drink:['vevere','vevərə'], love:['ammore','ammorə'], heart:['core','korə'], tree:['àrvero','arvərə'], house:['casa','kasə'], dog:['cane','kanə'], cat:['jatto','jattə'], hand:['mano','manə'], eye:['uocchio','wɔkkjə'], hello:['uè','wɛ'], thanks:['grazie','ɡratsjə'], one:['uno','unə'], good:['buono','bwɔnə'] }},
  scn: { name: 'Sicilian', native: 'Sicilianu', lat: 38.12, lng: 13.36,
    words: { water:['acqua','akkwa'], fire:['focu','fɔku'], sun:['suli','suli'], moon:['luna','luna'], mother:['matri','matri'], father:['patri','patri'], eat:['manciari','mantʃari'], drink:['vìviri','viviri'], love:['amuri','amuri'], heart:['cori','kɔri'], tree:['àrbulu','arbulu'], house:['casa','kasa'], dog:['cani','kani'], cat:['jattu','jattu'], hand:['manu','manu'], eye:['occhiu','ɔkkju'], hello:['salutamu','salutamu'], thanks:['grazii','ɡrattsii'], one:['unu','unu'], good:['bonu','bɔnu'] }},
  vec: { name: 'Venetian', native: 'Vèneto', lat: 45.44, lng: 12.34,
    words: { water:['aqua','akwa'], fire:['fogo','foɡo'], sun:['sol','sol'], moon:['łuna','ɰuna'], mother:['mare','mare'], father:['pare','pare'], eat:['magnàr','maɲar'], drink:['bévar','bevar'], love:['amor','amor'], heart:['cor','kɔr'], tree:['àrboro','arboro'], house:['caxa','ˈkaza'], dog:['can','kan'], cat:['gato','ɡato'], hand:['man','man'], eye:['ocio','ɔtʃo'], hello:['ciao','tʃao'], thanks:['grassie','ɡrasje'], one:['un','un'], good:['bon','bon'] }},
  ca: { name: 'Catalan', native: 'Català', lat: 41.39, lng: 2.17,
    words: { water:['aigua','ajɣwə'], fire:['foc','fɔk'], sun:['sol','sɔl'], moon:['lluna','ʎunə'], mother:['mare','maɾə'], father:['pare','paɾə'], eat:['menjar','mənʒa'], drink:['beure','bewɾə'], love:['amor','əmo'], heart:['cor','kɔr'], tree:['arbre','aɾbɾə'], house:['casa','kazə'], dog:['gos','ɡɔs'], cat:['gat','ɡat'], hand:['mà','ma'], eye:['ull','uʎ'], hello:['hola','ɔlə'], thanks:['gràcies','ɡɾasiəs'], one:['un','un'], good:['bo','bɔ'] }},
  gl: { name: 'Galician', native: 'Galego', lat: 42.88, lng: -8.54,
    words: { water:['auga','awɣa'], fire:['lume','lume'], sun:['sol','sɔl'], moon:['lúa','lua'], mother:['nai','naj'], father:['pai','paj'], eat:['comer','komeɾ'], drink:['beber','beβeɾ'], love:['amor','amoɾ'], heart:['corazón','koɾaθon'], tree:['árbore','aɾβoɾe'], house:['casa','kasa'], dog:['can','kaŋ'], cat:['gato','ɡato'], hand:['man','maŋ'], eye:['ollo','oʎo'], hello:['ola','ɔla'], thanks:['grazas','ɡɾaθas'], one:['un','uŋ'], good:['bo','bɔ'] }},
  oc: { name: 'Occitan', native: 'Occitan', lat: 43.60, lng: 1.44,
    words: { water:['aiga','ajɡɔ'], fire:['fuòc','fjɔk'], sun:['solelh','suˈlɛʎ'], moon:['luna','lyno'], mother:['maire','majre'], father:['paire','pajre'], eat:['manjar','mandʒa'], drink:['béure','bewre'], love:['amor','amur'], heart:['còr','kɔr'], tree:['arbre','arbre'], house:['ostal','ustal'], dog:['can','ka'], cat:['gat','ɡat'], hand:['man','ma'], eye:['uèlh','wɛʎ'], hello:['adieu','adjew'], thanks:['mercés','merses'], one:['un','yn'], good:['bon','bu'] }},
  be: { name: 'Belarusian', native: 'Беларуская', lat: 53.90, lng: 27.57,
    words: { water:['вада','vada'], fire:['агонь','aɣonʲ'], sun:['сонца','sontsa'], moon:['месяц','mʲesʲats'], mother:['маці','matsi'], father:['бацька','batsʲka'], eat:['есці','jesʲtsʲi'], drink:['піць','pʲitsʲ'], love:['каханне','kaxanʲe'], heart:['сэрца','sɛrtsa'], tree:['дрэва','drɛva'], house:['дом','dom'], dog:['сабака','sabaka'], cat:['кот','kot'], hand:['рука','ruka'], eye:['вока','voka'], hello:['прывітанне','prɨvitanʲe'], thanks:['дзякуй','dʲzʲakuj'], one:['адзін','adʲzʲin'], good:['добры','dobrɨ'] }},
  cs: { name: 'Czech', native: 'Čeština', lat: 50.08, lng: 14.44,
    words: { water:['voda','voda'], fire:['oheň','oɦɛɲ'], sun:['slunce','sluntsɛ'], moon:['měsíc','mɲɛsiːts'], mother:['matka','matka'], father:['otec','otɛts'], eat:['jíst','jiːst'], drink:['pít','piːt'], love:['láska','laːska'], heart:['srdce','srtsɛ'], tree:['strom','strom'], house:['dům','duːm'], dog:['pes','pɛs'], cat:['kočka','kotʃka'], hand:['ruka','ruka'], eye:['oko','oko'], hello:['ahoj','aɦoj'], thanks:['děkuji','ɟɛkuji'], one:['jeden','jɛdɛn'], good:['dobrý','dobriː'] }},
  sk: { name: 'Slovak', native: 'Slovenčina', lat: 48.15, lng: 17.11,
    words: { water:['voda','voda'], fire:['oheň','oɦeɲ'], sun:['slnko','slnko'], moon:['mesiac','mɛsɪats'], mother:['matka','matka'], father:['otec','otɛts'], eat:['jesť','jɛsc'], drink:['piť','pɪc'], love:['láska','laːska'], heart:['srdce','srtsɛ'], tree:['strom','strom'], house:['dom','dom'], dog:['pes','pɛs'], cat:['mačka','matʃka'], hand:['ruka','ruka'], eye:['oko','oko'], hello:['ahoj','aɦoj'], thanks:['ďakujem','ɟakujɛm'], one:['jeden','jɛdɛn'], good:['dobrý','dobriː'] }},
  sl: { name: 'Slovenian', native: 'Slovenščina', lat: 46.06, lng: 14.51,
    words: { water:['voda','voːda'], fire:['ogenj','oːɡənj'], sun:['sonce','soːntsɛ'], moon:['luna','luːna'], mother:['mati','maːti'], father:['oče','oːtʃɛ'], eat:['jesti','jɛːsti'], drink:['piti','piːti'], love:['ljubezen','ljubeːzɛn'], heart:['srce','sərtsɛ'], tree:['drevo','dɾeːʋo'], house:['hiša','xiːʃa'], dog:['pes','pɛːs'], cat:['mačka','maːtʃka'], hand:['roka','ɾɔːka'], eye:['oko','ɔːko'], hello:['živjo','ʒiːʋjo'], thanks:['hvala','xʋaːla'], one:['ena','eːna'], good:['dober','doːbɛɾ'] }},
  sr: { name: 'Serbian', native: 'Српски', lat: 44.79, lng: 20.47,
    words: { water:['вода','ʋoda'], fire:['ватра','ʋatra'], sun:['сунце','suntse'], moon:['месец','mɛsɛts'], mother:['мајка','majka'], father:['отац','otats'], eat:['јести','jɛsti'], drink:['пити','piti'], love:['љубав','ʎubaʋ'], heart:['срце','srtsɛ'], tree:['дрво','drʋo'], house:['кућа','kutɕa'], dog:['пас','pas'], cat:['мачка','matʃka'], hand:['рука','ruka'], eye:['око','ɔkɔ'], hello:['здраво','zdraʋo'], thanks:['хвала','xʋala'], one:['један','jɛdan'], good:['добар','dɔbar'] }},
  bg: { name: 'Bulgarian', native: 'Български', lat: 42.70, lng: 23.32,
    words: { water:['вода','vɔda'], fire:['огън','ɔɡɐn'], sun:['слънце','slɤntsɛ'], moon:['луна','luna'], mother:['майка','majka'], father:['баща','baʃta'], eat:['ям','jam'], drink:['пия','pijɐ'], love:['любов','ljubɔf'], heart:['сърце','sɐrtsɛ'], tree:['дърво','dɐrvɔ'], house:['къща','kɐʃtɐ'], dog:['куче','kutʃɛ'], cat:['котка','kɔtka'], hand:['ръка','rɐka'], eye:['око','ɔkɔ'], hello:['здравей','zdravɛj'], thanks:['благодаря','blaɡɔdarʲa'], one:['едно','ɛdnɔ'], good:['добър','dɔbɐr'] }},
  lt: { name: 'Lithuanian', native: 'Lietuvių', lat: 54.69, lng: 25.28,
    words: { water:['vanduo','vɐnduɔ'], fire:['ugnis','uɡʲnʲɪs'], sun:['saulė','sɐʊlʲeː'], moon:['mėnulis','mʲeːnʊlʲɪs'], mother:['motina','mɔːtʲɪnɐ'], father:['tėvas','tʲeːvɐs'], eat:['valgyti','vɐlɡʲiːtʲɪ'], drink:['gerti','ɡʲærtʲɪ'], love:['meilė','mʲæɪlʲeː'], heart:['širdis','ʃʲɪrʲdʲɪs'], tree:['medis','mʲædʲɪs'], house:['namas','nɐːmɐs'], dog:['šuo','ʃuɔ'], cat:['katė','kɐːtʲeː'], hand:['ranka','rɐŋkɐ'], eye:['akis','ɐːkʲɪs'], hello:['labas','lɐːbɐs'], thanks:['ačiū','ɐtʃʲuː'], one:['vienas','vʲɪɛnɐs'], good:['geras','ɡʲærɐs'] }},
  lv: { name: 'Latvian', native: 'Latviešu', lat: 56.95, lng: 24.11,
    words: { water:['ūdens','uːdɛns'], fire:['uguns','uɡuns'], sun:['saule','saulɛ'], moon:['mēness','meːnɛs'], mother:['māte','maːtɛ'], father:['tēvs','teːvs'], eat:['ēst','eːst'], drink:['dzert','dzɛrt'], love:['mīlestība','miːlɛstiːba'], heart:['sirds','sirds'], tree:['koks','kuɔks'], house:['māja','maːja'], dog:['suns','suns'], cat:['kaķis','kaʲcis'], hand:['roka','ruɔka'], eye:['acs','ats'], hello:['sveiki','svɛiki'], thanks:['paldies','paldiɛs'], one:['viens','viɛns'], good:['labs','labs'] }},
  sq: { name: 'Albanian', native: 'Shqip', lat: 41.33, lng: 19.82,
    words: { water:['ujë','ujə'], fire:['zjarr','zjar'], sun:['diell','diɛɫ'], moon:['hënë','hənə'], mother:['nënë','nənə'], father:['baba','baba'], eat:['ha','ha'], drink:['pi','pi'], love:['dashuri','daʃuɾi'], heart:['zemër','zɛmər'], tree:['pemë','pɛmə'], house:['shtëpi','ʃtəpi'], dog:['qen','cɛn'], cat:['mace','matsɛ'], hand:['dorë','dɔɾə'], eye:['sy','sy'], hello:['përshëndetje','pəɾʃəndɛtjɛ'], thanks:['faleminderit','falɛmindɛɾit'], one:['një','ɲə'], good:['mirë','miɾə'] }},
  et: { name: 'Estonian', native: 'Eesti', lat: 59.44, lng: 24.75,
    words: { water:['vesi','vesi'], fire:['tuli','tuli'], sun:['päike','pæike'], moon:['kuu','kuː'], mother:['ema','emɑ'], father:['isa','isɑ'], eat:['sööma','søːmɑ'], drink:['jooma','joːmɑ'], love:['armastus','ɑrmɑstus'], heart:['süda','sydɑ'], tree:['puu','puː'], house:['maja','mɑjɑ'], dog:['koer','koer'], cat:['kass','kɑsː'], hand:['käsi','kæsi'], eye:['silm','silm'], hello:['tere','tere'], thanks:['tänan','tænɑn'], one:['üks','yks'], good:['hea','heɑ'] }},
  ht: { name: 'Haitian Creole', native: 'Kreyòl ayisyen', lat: 18.54, lng: -72.34,
    words: { water:['dlo','dlo'], fire:['dife','dife'], sun:['solèy','sɔlɛj'], moon:['lalin','lalɛ̃'], mother:['manman','mɑ̃mɑ̃'], father:['papa','papa'], eat:['manje','mɑ̃ʒe'], drink:['bwè','bwɛ'], love:['lanmou','lɑ̃mu'], heart:['kè','kɛ'], tree:['pyebwa','pjɛbwa'], house:['kay','kaj'], dog:['chen','ʃɛ̃'], cat:['chat','ʃa'], hand:['men','mɛ̃'], eye:['je','ʒe'], hello:['bonjou','bɔ̃ʒu'], thanks:['mèsi','mɛsi'], one:['youn','jun'], good:['bon','bɔ̃'] }},
  jam: { name: 'Jamaican Patois', native: 'Patwa', lat: 18.00, lng: -76.79,
    words: { water:['wata','wɑːtə'], fire:['faya','fajə'], sun:['son','sɔn'], moon:['muun','muːn'], mother:['mada','mɑdə'], father:['fada','fɑdə'], eat:['nyam','ɲam'], drink:['drink','dɹɪŋk'], love:['lov','lɔv'], heart:['aat','aːt'], tree:['chrii','tʃɹiː'], house:['ous','ʊːs'], dog:['daag','daːɡ'], cat:['puss','pʊs'], hand:['an','an'], eye:['yai','jaɪ'], hello:['wah gwaan','wɑ ɡwɑːn'], thanks:['tanks','taŋks'], one:['wan','wan'], good:['gud','ɡʊd'] }},
  pap: { name: 'Papiamento', native: 'Papiamentu', lat: 12.17, lng: -68.98,
    words: { water:['awa','awa'], fire:['kandela','kandela'], sun:['solo','solo'], moon:['luna','luna'], mother:['mama','mama'], father:['tata','tata'], eat:['kome','kome'], drink:['bebe','bebe'], love:['amor','amor'], heart:['kurason','kurason'], tree:['palu','palu'], house:['kas','kas'], dog:['kacho','katʃo'], cat:['pushi','puʃi'], hand:['man','man'], eye:['wowo','wowo'], hello:['bon dia','bon dia'], thanks:['danki','daŋki'], one:['un','un'], good:['bon','bon'] }},
  rom: { name: 'Romani', native: 'Romani čhib', lat: 47.50, lng: 19.04,
    words: { water:['pani','pani'], fire:['jag','jaɡ'], sun:['kham','kʰam'], moon:['čhon','tʃʰon'], mother:['daj','daj'], father:['dad','dad'], eat:['xal','xal'], drink:['pijel','pijɛl'], love:['kamiben','kamibɛn'], heart:['jilo','dʒilo'], tree:['rukh','ɾukʰ'], house:['kher','kʰɛɾ'], dog:['žukel','ʒukɛl'], cat:['mačka','matʃka'], hand:['vast','vast'], eye:['jakh','jakʰ'], hello:['lačho','latʃʰo divɛs'], thanks:['nais tuke','najs tukɛ'], one:['jekh','jɛkʰ'], good:['lačho','latʃʰo'] }},
  pcm: { name: 'Nigerian Pidgin', native: 'Naijá', lat: 6.45, lng: 3.40, // Lagos (commercial/media center)
    words: { water:['wọtá','wɔta'], fire:['faya','faja'], sun:['sọn','sɔn'], moon:['mun','muːn'], mother:['mama','mama'], father:['papa','papa'], eat:['chọp','tʃɔp'], drink:['drink','dɾiŋk'], love:['lọv','lɔv'], heart:['hat','hat'], tree:['tri','tɾi'], house:['haus','haʊs'], dog:['dọg','dɔɡ'], cat:['pus','pus'], hand:['hand','hand'], eye:['ai','aɪ'], hello:['how far','haʊ faː'], thanks:['tanx','taŋks'], one:['wan','wan'], good:['fain','faɪn'] }},
  tpi: { name: 'Tok Pisin', native: 'Tok Pisin', lat: -6.73, lng: 147.00,
    words: { water:['wara','waɾa'], fire:['paia','paja'], sun:['san','san'], moon:['mun','mun'], mother:['mama','mama'], father:['papa','papa'], eat:['kaikai','kajkaj'], drink:['dring','dɾiŋ'], love:['laikim','lajkim'], heart:['hat','hat'], tree:['diwai','diwaj'], house:['haus','haʊs'], dog:['dok','dok'], cat:['pusi','pusi'], hand:['han','han'], eye:['ai','aj'], hello:['halo','halo'], thanks:['tenkyu','tɛŋkju'], one:['wanpela','wanpɛla'], good:['gutpela','ɡutpɛla'] }},
  hwc: { name: 'Hawaiian Creole', native: 'Pidgin', lat: 21.31, lng: -157.86,
    words: { water:['wata','wɑtə'], fire:['faia','fɑɪə'], sun:['san','sæn'], moon:['mun','muːn'], mother:['madda','mɑdə'], father:['fadda','fɑdə'], eat:['eat','iːt'], drink:['drink','dɹɪŋk'], love:['love','lʌv'], heart:['haht','hɑːt'], tree:['tree','tɹiː'], house:['house','haʊs'], dog:['dawg','dɔːɡ'], cat:['cat','kæt'], hand:['hand','hænd'], eye:['eye','aɪ'], hello:['howzit','haʊzɪt'], thanks:['tanks','tæŋks'], one:['wan','wɑn'], good:['good','ɡʊd'] }},
  se: { name: 'Northern Sámi', native: 'Davvisámegiella', lat: 69.65, lng: 18.96,
    words: { water:['čáhci','tʃaːhtsi'], fire:['dolla','dolːa'], sun:['beaivi','peɑjvi'], moon:['mánnu','maːnːu'], mother:['eadni','eɑdni'], father:['áhčči','aːhtːʃi'], eat:['borrat','porːat'], drink:['juhkat','juhkat'], love:['ráhkisvuohta','raːhkisvuɔhta'], heart:['váibmu','vajpmu'], tree:['muorra','muɔrːa'], house:['viessu','viesːu'], dog:['beana','peɑna'], cat:['bussá','pusːa'], hand:['giehta','kiehtɑ'], eye:['čalbmi','tʃɑlpmi'], hello:['bures','pures'], thanks:['giitu','kiːtu'], one:['okta','oktɑ'], good:['buorre','puɔrːe'] }},
  gn: { name: 'Guarani', native: "Avañe'ẽ", lat: -25.26, lng: -57.58,
    words: { water:['y','ɨ'], fire:['tata','tata'], sun:['kuarahy','kwaɾahɨ'], moon:['jasy','ʒasɨ'], mother:['sy','sɨ'], father:['túva','tuva'], eat:["ka'u",'kaʔu'], drink:["y'u",'ɨʔu'], love:['hayhu','haɨhu'], heart:["py'a",'pɨʔa'], tree:['yvyra','ɨvɨɾa'], house:['óga','oɡa'], dog:['jagua','ʒaɡwa'], cat:['mbarakaja','mbaɾakaʒa'], hand:['po','po'], eye:['tesa','tesa'], hello:["mba'éichapa",'mbaʔeitʃapa'], thanks:['aguyje','aɡuɨʒe'], one:['peteĩ','peteĩ'], good:['porã','poɾã'] }},
  chr: { name: 'Cherokee', native: 'ᏣᎳᎩ', lat: 35.51, lng: -83.52,
    words: { water:['ᎠᎹ','ama'], fire:['ᎠᏥᎳ','atʃila'], sun:['ᏅᏓ','nʌda'], moon:['ᏅᏓ ᏒᏃᏱ','nʌda svnoɪ'], mother:['ᎡᏥ','edʒi'], father:['ᎡᏙᏓ','edoda'], eat:['ᎠᎩᏍᏔ','aɡista'], drink:['ᎠᏗᏔ','adita'], love:['ᎠᏓᎨᏳᎯ','adaɡejuhi'], heart:['ᎤᏬᏱ','uwoji'], tree:['ᏡᎬ','tluɡv'], house:['ᎦᎵᏦᏕ','ɡalitsode'], dog:['ᎩᏟ','ɡitli'], cat:['ᏪᏌ','wesa'], hand:['ᎤᏰᏙᎯ','ujɛdohi'], eye:['ᎠᎦᏘ','aɡati'], hello:['ᎣᏏᏲ','osijo'], thanks:['ᎢᎴᎯᏍᏗ','ilehisdi'], one:['ᏌᏊ','saʔu'], good:['ᎣᏍᏓ','osda'] }},

  as: { name: 'Assamese', native: 'অসমীয়া', lat: 26.14, lng: 91.74,
    words: { water:['পানী','pani'], fire:['জুই','zui'], sun:['সূৰ্য','xuɹjɔ'], moon:['জোন','zʊn'], mother:['মা','ma'], father:['দেউতা','deuta'], eat:['খোৱা','kʰuwa'], drink:['পান কৰা','pan kɔɹa'], love:['প্ৰেম','pɹem'], heart:['হৃদয়','ɹidɔi'], tree:['গছ','gɔs'], house:['ঘৰ','gʱɔɹ'], dog:['কুকুৰ','kukuɹ'], cat:['মেকুৰী','mekuɹi'], hand:['হাত','hat'], eye:['চকু','sɔku'], hello:['নমস্কাৰ','nɔmɔxkaɹ'], thanks:['ধন্যবাদ','dʱɔnjɔbad'], one:['এক','ek'], good:['ভাল','bʱal'] }},
  or: { name: 'Odia', native: 'ଓଡ଼ିଆ', lat: 20.30, lng: 85.83,
    words: { water:['ପାଣି','paːɳi'], fire:['ନିଆଁ','niãː'], sun:['ସୂର୍ଯ୍ୟ','suːɾdʒɔ'], moon:['ଚନ୍ଦ୍ର','tʃɔndɾɔ'], mother:['ମା','maː'], father:['ବାପା','baːpaː'], eat:['ଖାଇବା','kʰaːɪbaː'], drink:['ପିଇବା','piːɪbaː'], love:['ପ୍ରେମ','pɾemɔ'], heart:['ହୃଦୟ','ɦɾudɔjɔ'], tree:['ଗଛ','ɡɔtʃʰɔ'], house:['ଘର','gʱɔɾɔ'], dog:['କୁକୁର','kukuɾɔ'], cat:['ବିଲେଇ','bɪlei'], hand:['ହାତ','haːtɔ'], eye:['ଆଖି','aːkʰi'], hello:['ନମସ୍କାର','nɔmɔskaːɾɔ'], thanks:['ଧନ୍ୟବାଦ','dʱɔnjɔbaːdɔ'], one:['ଏକ','ekɔ'], good:['ଭଲ','bʱɔlɔ'] }},
  bho: { name: 'Bhojpuri', native: 'भोजपुरी', lat: 25.32, lng: 83.01,
    words: { water:['पानी','paːniː'], fire:['आगि','aːɡɪ'], sun:['सूरज','suːɾədʒ'], moon:['चाँद','tʃãːd'], mother:['माई','maːiː'], father:['बाबू','baːbuː'], eat:['खाए','kʰaːe'], drink:['पिए','pɪe'], love:['प्यार','pjaːɾ'], heart:['दिल','dɪl'], tree:['पेड़','peɽ'], house:['घर','gʱəɾ'], dog:['कुकुर','kukuɾ'], cat:['बिलाड़ी','bɪlaːɽiː'], hand:['हाथ','haːtʰ'], eye:['आँख','ãːkʰ'], hello:['प्रणाम','pɾəɳaːm'], thanks:['धन्यवाद','dʱənjəʋaːd'], one:['एक','ek'], good:['नीक','niːk'] }},
  en_south: { name: 'English (Southern US)', native: 'English (Southern)', lat: 33.52, lng: -86.81,
    words: { water:['water','wɔːɾɚ'], fire:['fire','faːɹ'], sun:['sun','sʌn'], moon:['moon','muːn'], mother:['mother','mʌðɚ'], father:['father','fɑːðɚ'], eat:['eat','iːt'], drink:['drink','dɹɪŋk'], love:['love','lʌv'], heart:['heart','hɑːɹt'], tree:['tree','tɹiː'], house:['house','haːʊs'], dog:['dog','dɑːɡ'], cat:['cat','kæːt'], hand:['hand','hæːənd'], eye:['eye','aː'], hello:['howdy','haʊdi'], thanks:['thanks','θæːŋks'], one:['one','wʌn'], good:['good','ɡʊd'] }},
  en_app: { name: 'English (Appalachian)', native: 'English (Appalachian)', lat: 37.78, lng: -81.19,
    words: { water:['water','wɔːɾɚ'], fire:['fire','faːɚ'], sun:['sun','sʌn'], moon:['moon','muːn'], mother:['mother','mʌðɚ'], father:['father','fɑːðɚ'], eat:['eat','iːt'], drink:['drink','dɹɪŋk'], love:['love','lʌv'], heart:['heart','hɑːɹt'], tree:['tree','tɹiː'], house:['house','haːʊs'], dog:['dog','dɑːɡ'], cat:['cat','kæt'], hand:['hand','hænd'], eye:['eye','aː'], hello:['howdy','haːdi'], thanks:['thanks','θæŋks'], one:['one','wʌn'], good:['good','ɡʊd'] }},
  en_in: { name: 'English (Indian)', native: 'English (Indian)', lat: 19.08, lng: 72.88,
    words: { water:['water','ʋɔːʈɚ'], fire:['fire','fɑːjɚ'], sun:['sun','sʌn'], moon:['moon','muːn'], mother:['mother','mʌdɚ'], father:['father','fɑːdɚ'], eat:['eat','iːʈ'], drink:['drink','ɖɹɪŋk'], love:['love','lʌʋ'], heart:['heart','hɑːɹʈ'], tree:['tree','ʈɹiː'], house:['house','haʊs'], dog:['dog','ɖɔɡ'], cat:['cat','kæʈ'], hand:['hand','hænd'], eye:['eye','aɪ'], hello:['hello','hɛloː'], thanks:['thanks','tæŋks'], one:['one','ʋʌn'], good:['good','ɡʊɖ'] }},
  en_ie: { name: 'English (Irish)', native: 'English (Irish)', lat: 53.35, lng: -6.26,
    words: { water:['water','wɑːtəɹ'], fire:['fire','fɑɪəɹ'], sun:['sun','sʊn'], moon:['moon','muːn'], mother:['mother','mʊðəɹ'], father:['father','fɑːðəɹ'], eat:['eat','iːt'], drink:['drink','dɹɪŋk'], love:['love','lʊv'], heart:['heart','hɑːɹt'], tree:['tree','tɹiː'], house:['house','haʊs'], dog:['dog','dɒɡ'], cat:['cat','kat'], hand:['hand','hand'], eye:['eye','ɑɪ'], hello:['hello','hɛloː'], thanks:['thanks','taŋks'], one:['one','wʊn'], good:['good','ɡʊd'] }},
  en_sco: { name: 'English (Scottish)', native: 'English (Scottish)', lat: 55.86, lng: -4.25,
    words: { water:['water','wɔːtəɹ'], fire:['fire','faɪɹ'], sun:['sun','sʌn'], moon:['moon','muːn'], mother:['mother','mʌðəɹ'], father:['father','fɑːðəɹ'], eat:['eat','iːt'], drink:['drink','dɹɪŋk'], love:['love','lʌv'], heart:['heart','hɑɹt'], tree:['tree','tɹiː'], house:['house','hʌus'], dog:['dog','dɔɡ'], cat:['cat','kat'], hand:['hand','hand'], eye:['eye','aɪ'], hello:['hello','hɛlo'], thanks:['thanks','θaŋks'], one:['one','wʌn'], good:['good','ɡʊd'] }},
  en_yk: { name: 'English (Yorkshire)', native: 'English (Yorkshire)', lat: 53.80, lng: -1.55,
    words: { water:['water','wɔːtə'], fire:['fire','faɪə'], sun:['sun','sʊn'], moon:['moon','muːn'], mother:['mother','mʊðə'], father:['father','fɑːðə'], eat:['eat','iːt'], drink:['drink','dɹɪŋk'], love:['love','lʊv'], heart:['heart','hɑːt'], tree:['tree','tɹiː'], house:['house','aʊs'], dog:['dog','dɒɡ'], cat:['cat','kat'], hand:['hand','and'], eye:['eye','aɪ'], hello:['ey up','eɪ ʊp'], thanks:['ta','tɑː'], one:['one','wɒn'], good:['good','ɡʊd'] }},
  en_ck: { name: 'English (Cockney)', native: 'English (Cockney)', lat: 51.51, lng: -0.13,
    words: { water:['water','woːʔə'], fire:['fire','fɑːə'], sun:['sun','sɐn'], moon:['moon','muːn'], mother:['mother','mɐvə'], father:['father','fɑːvə'], eat:['eat','iːʔ'], drink:['drink','dɹɪŋk'], love:['love','lɐv'], heart:['heart','ɑːʔ'], tree:['tree','tɹiː'], house:['house','æːʔs'], dog:['dog','dɒɡ'], cat:['cat','kæʔ'], hand:['hand','ænd'], eye:['eye','ɑː'], hello:['oi','oɪ'], thanks:['fanks','fæŋks'], one:['one','wɐn'], good:['good','ɡʊd'] }},
  en_sg: { name: 'Singlish', native: 'Singlish', lat: 1.35, lng: 103.82,
    words: { water:['water','wɔːtə'], fire:['fire','fajə'], sun:['sun','san'], moon:['moon','muːn'], mother:['mother','madə'], father:['father','fadə'], eat:['eat','iːt'], drink:['drink','dɹɪŋk'], love:['love','laf'], heart:['heart','hat'], tree:['tree','tɹiː'], house:['house','haʊs'], dog:['dog','dɔk'], cat:['cat','kɛt'], hand:['hand','hɛn'], eye:['eye','aɪ'], hello:['hello lah','hɛlo lɑː'], thanks:['thanks','tɛŋks'], one:['one','wan'], good:['good','ɡʊt'] }},
  fy: { name: 'West Frisian', native: 'Frysk', lat: 53.20, lng: 5.80,
    words: { water:['wetter','vɛtər'], fire:['fjoer','fjuːr'], sun:['sinne','sɪnə'], moon:['moanne','mwɑnə'], mother:['mem','mɛm'], father:['heit','hait'], eat:['ite','iːtə'], drink:['drinke','drɪŋkə'], love:['leafde','lɪəfdə'], heart:['hert','hɛrt'], tree:['beam','bɪəm'], house:['hûs','huːs'], dog:['hûn','huːn'], cat:['kat','kɑt'], hand:['hân','hɔːn'], eye:['each','ɪəx'], hello:['hoi','hɔi'], thanks:['tankewol','tɑŋkəvɔl'], one:['ien','iːn'], good:['goed','ɡuːd'] }},
  nn: { name: 'Norwegian Nynorsk', native: 'Nynorsk', lat: 60.39, lng: 5.32,
    words: { water:['vatn','vɑːtn'], fire:['eld','ɛld'], sun:['sol','suːl'], moon:['måne','moːnə'], mother:['mor','muːɹ'], father:['far','fɑːɹ'], eat:['eta','eːtɑ'], drink:['drikka','drɪkːɑ'], love:['kjærleik','çæːɹlɛɪk'], heart:['hjarte','jɑːɹtə'], tree:['tre','tɹeː'], house:['hus','huːs'], dog:['hund','hʉnd'], cat:['katt','kɑtː'], hand:['hand','hɑnd'], eye:['auga','æʉɡɑ'], hello:['hei','hæɪ'], thanks:['takk','tɑkː'], one:['ein','ɛɪn'], good:['god','ɡuːd'] }},
  fo: { name: 'Faroese', native: 'Føroyskt', lat: 62.01, lng: -6.77,
    words: { water:['vatn','vɛaʰtn'], fire:['eldur','ɛltʊɹ'], sun:['sól','souːl'], moon:['máni','mɔaːnɪ'], mother:['móðir','mɔuːɪɹ'], father:['faðir','feaːɪɹ'], eat:['eta','eːta'], drink:['drekka','tɹɛhka'], love:['kærleiki','kɛaːɹlaiːtʃɪ'], heart:['hjarta','jaɹta'], tree:['træ','tɹɛaː'], house:['hús','huːs'], dog:['hundur','hʊntʊɹ'], cat:['ketta','tʃɛhta'], hand:['hond','hɔnt'], eye:['eyga','ɔiːja'], hello:['hey','hɛi'], thanks:['takk','tʰahk'], one:['ein','ain'], good:['góður','ɡɔuːʊɹ'] }},
  fr_qc: { name: 'Quebec French', native: 'Québécois', lat: 46.81, lng: -71.21,
    words: { water:['eau','o'], fire:['feu','fø'], sun:['soleil','sɔlɛj'], moon:['lune','lyn'], mother:['mère','mɛːʁ'], father:['père','pɛːʁ'], eat:['manger','mɑ̃ʒe'], drink:['boire','bwɑːʁ'], love:['amour','amuːʁ'], heart:['cœur','kœːʁ'], tree:['arbre','aːʁbʁ'], house:['maison','mɛzɔ̃'], dog:['chien','ʃjɛ̃'], cat:['chat','ʃa'], hand:['main','mɛ̃'], eye:['œil','œj'], hello:['allô','alo'], thanks:['merci','mɛʁsɪ'], one:['un','ɛ̃'], good:['bon','bɔ̃'] }},
  fr_af: { name: 'African French', native: 'Français africain', lat: 6.37, lng: 2.43,
    words: { water:['eau','o'], fire:['feu','fø'], sun:['soleil','sɔlɛj'], moon:['lune','lyn'], mother:['mère','mɛʁ'], father:['père','pɛʁ'], eat:['manger','mɑ̃ʒe'], drink:['boire','bwaʁ'], love:['amour','amuʁ'], heart:['cœur','kœʁ'], tree:['arbre','aʁbʁ'], house:['maison','mɛzɔ̃'], dog:['chien','ʃjɛ̃'], cat:['chat','ʃa'], hand:['main','mɛ̃'], eye:['œil','œj'], hello:['bonjour','bɔ̃ʒuʁ'], thanks:['merci','mɛʁsi'], one:['un','ɛ̃'], good:['bon','bɔ̃'] }},
  fr_be: { name: 'Belgian French', native: 'Français belge', lat: 50.85, lng: 4.35,
    words: { water:['eau','o'], fire:['feu','fø'], sun:['soleil','sɔlɛj'], moon:['lune','lyn'], mother:['mère','mɛʁ'], father:['père','pɛʁ'], eat:['manger','mɑ̃ʒe'], drink:['boire','bwaʁ'], love:['amour','amuʁ'], heart:['cœur','kœʁ'], tree:['arbre','aʁbʁ'], house:['maison','mɛzɔ̃'], dog:['chien','ʃjɛ̃'], cat:['chat','ʃa'], hand:['main','mɛ̃'], eye:['œil','œj'], hello:['bonjour','bɔ̃ʒuʁ'], thanks:['merci','mɛʁsi'], one:['un','ɛ̃'], good:['bon','bɔ̃'] }},
  fr_ch: { name: 'Swiss French', native: 'Français suisse', lat: 46.52, lng: 6.63,
    words: { water:['eau','o'], fire:['feu','fø'], sun:['soleil','sɔlɛj'], moon:['lune','lyn'], mother:['mère','mɛʁ'], father:['père','pɛʁ'], eat:['manger','mɑ̃ʒe'], drink:['boire','bwaʁ'], love:['amour','amuʁ'], heart:['cœur','kœʁ'], tree:['arbre','aʁbʁ'], house:['maison','mɛzɔ̃'], dog:['chien','ʃjɛ̃'], cat:['chat','ʃa'], hand:['main','mɛ̃'], eye:['œil','œj'], hello:['bonjour','bɔ̃ʒuʁ'], thanks:['merci','mɛʁsi'], one:['un','ɛ̃'], good:['bon','bɔ̃'] }},
  es_co: { name: 'Colombian Spanish', native: 'Español colombiano', lat: 4.71, lng: -74.07,
    words: { water:['agua','aɣwa'], fire:['fuego','fweɣo'], sun:['sol','sol'], moon:['luna','luna'], mother:['madre','maðɾe'], father:['padre','paðɾe'], eat:['comer','komeɾ'], drink:['beber','beβeɾ'], love:['amor','amoɾ'], heart:['corazón','koɾason'], tree:['árbol','aɾβol'], house:['casa','kasa'], dog:['perro','pero'], cat:['gato','ɡato'], hand:['mano','mano'], eye:['ojo','oxo'], hello:['hola','ola'], thanks:['gracias','ɡɾasjas'], one:['uno','uno'], good:['bueno','bweno'] }},
  es_cl: { name: 'Chilean Spanish', native: 'Español chileno', lat: -33.45, lng: -70.67,
    words: { water:['agua','aɣwa'], fire:['fuego','fweɣo'], sun:['sol','sol'], moon:['luna','luna'], mother:['madre','maðɾe'], father:['padre','paðɾe'], eat:['comer','komeɾ'], drink:['beber','beβeɾ'], love:['amor','amoɾ'], heart:['corazón','koɾason'], tree:['árbol','aɾβol'], house:['casa','kasa'], dog:['perro','pero'], cat:['gato','ɡato'], hand:['mano','mano'], eye:['ojo','oho'], hello:['hola','ola'], thanks:['gracias','ɡɾasjah'], one:['uno','uno'], good:['bueno','bweno'] }},
  es_ar: { name: 'Argentine Spanish', native: 'Español argentino', lat: -34.60, lng: -58.38,
    words: { water:['agua','aɣwa'], fire:['fuego','fweɣo'], sun:['sol','sol'], moon:['luna','luna'], mother:['madre','maðɾe'], father:['padre','paðɾe'], eat:['comer','komeɾ'], drink:['beber','beβeɾ'], love:['amor','amoɾ'], heart:['corazón','koɾason'], tree:['árbol','aɾβol'], house:['casa','kasa'], dog:['perro','pero'], cat:['gato','ɡato'], hand:['mano','mano'], eye:['ojo','oʃo'], hello:['hola','ola'], thanks:['gracias','ɡɾasjas'], one:['uno','uno'], good:['bueno','bweno'] }},
  es_cu: { name: 'Cuban Spanish', native: 'Español cubano', lat: 23.11, lng: -82.37,
    words: { water:['agua','aɣwa'], fire:['fuego','fweɣo'], sun:['sol','sol'], moon:['luna','luna'], mother:['madre','maðɾe'], father:['padre','paðɾe'], eat:['comer','komeɾ'], drink:['beber','beβeɾ'], love:['amor','amoɾ'], heart:['corazón','koɾason'], tree:['árbol','aɾβol'], house:['casa','kasa'], dog:['perro','pero'], cat:['gato','ɡato'], hand:['mano','mano'], eye:['ojo','oho'], hello:['hola','ola'], thanks:['gracias','ɡɾasjah'], one:['uno','uno'], good:['bueno','bweno'] }},
  es_pe: { name: 'Peruvian Spanish', native: 'Español peruano', lat: -12.05, lng: -77.04,
    words: { water:['agua','aɣwa'], fire:['fuego','fweɣo'], sun:['sol','sol'], moon:['luna','luna'], mother:['madre','maðɾe'], father:['padre','paðɾe'], eat:['comer','komeɾ'], drink:['beber','beβeɾ'], love:['amor','amoɾ'], heart:['corazón','koɾason'], tree:['árbol','aɾβol'], house:['casa','kasa'], dog:['perro','pero'], cat:['gato','ɡato'], hand:['mano','mano'], eye:['ojo','oxo'], hello:['hola','ola'], thanks:['gracias','ɡɾasjas'], one:['uno','uno'], good:['bueno','bweno'] }},
  es_an: { name: 'Andalusian Spanish', native: 'Español andaluz', lat: 37.39, lng: -5.98,
    words: { water:['agua','aɣwa'], fire:['fuego','fweɣo'], sun:['sol','sɔl'], moon:['luna','luna'], mother:['madre','maðɾe'], father:['padre','paðɾe'], eat:['comer','komɛh'], drink:['beber','beβɛh'], love:['amor','amɔh'], heart:['corazón','koɾasɔ̃'], tree:['árbol','aɾβɔl'], house:['casa','kasa'], dog:['perro','peho'], cat:['gato','ɡato'], hand:['mano','mano'], eye:['ojo','oho'], hello:['hola','ola'], thanks:['gracias','ɡɾasjah'], one:['uno','uno'], good:['bueno','bweno'] }},
  lad: { name: 'Ladino', native: 'Djudeo-Espanyol', lat: 41.01, lng: 28.98,
    words: { water:['agua','aɣwa'], fire:['fuego','fweɣo'], sun:['sol','sol'], moon:['luna','luna'], mother:['madre','madɾe'], father:['padre','padɾe'], eat:['komer','komeɾ'], drink:['bever','beveɾ'], love:['amor','amoɾ'], heart:['korasón','koɾason'], tree:['árvol','aɾvol'], house:['kaza','kaza'], dog:['perro','pero'], cat:['gato','ɡato'], hand:['mano','mano'], eye:['ojo','oʒo'], hello:['shalom','ʃalom'], thanks:['grasias','ɡɾasjas'], one:['uno','uno'], good:['bueno','bweno'] }},
  rm: { name: 'Romansh', native: 'Rumantsch', lat: 46.85, lng: 9.53,
    words: { water:['aua','awa'], fire:['fieu','fjew'], sun:['sulegl','suleʎ'], moon:['glina','ɡlina'], mother:['mamma','mama'], father:['bab','bap'], eat:['mangiar','mandʒar'], drink:['baiver','bajver'], love:['amur','amur'], heart:['cor','kɔr'], tree:['planta','planta'], house:['chasa','tʃaza'], dog:['chaun','tʃawn'], cat:['giat','dʒat'], hand:['maun','mawn'], eye:['egl','eʎ'], hello:['allegra','aleɡra'], thanks:['grazia','ɡratsia'], one:['in','in'], good:['bun','bun'] }},
  sc: { name: 'Sardinian', native: 'Sardu', lat: 39.22, lng: 9.12,
    words: { water:['abba','abba'], fire:['fogu','foɣu'], sun:['sole','sole'], moon:['luna','luna'], mother:['mama','mama'], father:['babbu','babbu'], eat:['mandigare','mandiɡare'], drink:['bìere','biere'], love:['amore','amore'], heart:['coro','kɔro'], tree:['àrbure','arbure'], house:['domo','dɔmo'], dog:['cane','kane'], cat:['gattu','ɡattu'], hand:['manu','manu'], eye:['ogru','oɣru'], hello:['salude','salude'], thanks:['gràtzias','ɡrattsjas'], one:['unu','unu'], good:['bonu','bɔnu'] }},
  iu: { name: 'Inuktitut', native: 'ᐃᓄᒃᑎᑐᑦ', lat: 63.75, lng: -68.52,
    words: { water:['ᐃᒪᖅ','imaq'], fire:['ᐃᑯᒪ','ikuma'], sun:['ᓯᕿᓂᖅ','siqiniq'], moon:['ᑕᖅᑭᖅ','taqqiq'], mother:['ᐊᓈᓇ','anaːna'], father:['ᐊᑖᑕ','ataːta'], eat:['ᓂᕆ-','niɣi'], drink:['ᐃᒥᖅ-','imiq'], love:['ᓇᒡᓕᒍᓱᒃ-','naɡliɡusuk'], heart:['ᐆᒻᒪᑦ','uːmːat'], tree:['ᓇᐹᖅᑐᖅ','napaːqtuq'], house:['ᐃᒡᓗ','iɡlu'], dog:['ᕿᒻᒥᖅ','qimːiq'], cat:['ᐱᓯᒃᑎ','pisikti'], hand:['ᐊᒡᒑᖅ','aɡɡaːq'], eye:['ᐃᔨ','iji'], hello:['ᐊᐃ','aj'], thanks:['ᓇᑯᕐᒦᒃ','nakuʁmiːk'], one:['ᐊᑕᐅᓯᖅ','atausiq'], good:['ᐱᐅᔪᖅ','piujuq'] }},
  // === Historical & Ancient Languages ===
  la: { name: 'Latin', native: 'Latina', lat: 41.90, lng: 12.50,
    words: { water:['aqua','akʷa'], fire:['ignis','iŋnis'], sun:['sōl','soːl'], moon:['lūna','luːna'], mother:['māter','maːter'], father:['pater','pater'], eat:['edere','edere'], drink:['bibere','bibere'], love:['amor','amor'], heart:['cor','kor'], tree:['arbor','arbor'], house:['domus','domʊs'], dog:['canis','kanis'], cat:['fēlēs','feːleːs'], hand:['manus','manʊs'], eye:['oculus','okulʊs'], hello:['salvē','salweː'], thanks:['grātiās','ɡraːtiaːs'], one:['ūnus','uːnʊs'], good:['bonus','bonʊs'] }},
  el_grc: { name: 'Ancient Greek', native: 'Ἑλληνική', lat: 37.97, lng: 23.73,
    words: { water:['ὕδωρ','hýdɔːr'], fire:['πῦρ','pŷːr'], sun:['ἥλιος','hɛ̌ːlios'], moon:['σελήνη','selɛ̌ːnɛː'], mother:['μήτηρ','mɛ̌ːtɛːr'], father:['πατήρ','patɛ̌ːr'], eat:['ἐσθίειν','estʰíeːn'], drink:['πίνειν','píneːn'], love:['ἔρως','érɔːs'], heart:['καρδία','kardía'], tree:['δένδρον','déndron'], house:['οἶκος','oîkos'], dog:['κύων','kýɔːn'], cat:['αἴλουρος','aíluːros'], hand:['χείρ','kʰéːr'], eye:['ὀφθαλμός','optʰalmós'], hello:['χαῖρε','kʰâire'], thanks:['εὐχαριστῶ','eukʰaristɔ̂ː'], one:['εἷς','hêːs'], good:['ἀγαθός','aɡatʰós'] }},
  egy: {
    "name": "Ancient Egyptian",
    "native": "𓂋 𓈖 𓆎𓅓𓏏",
    "lat": 25.69,
    "lng": 32.64,
    "words": {
      "water": [
        "𓈗",
        "muː"
      ],
      "fire": [
        "𓊮",
        "sedet"
      ],
      "sun": [
        "𓇳",
        "riːʕa"
      ],
      "moon": [
        "𓇹",
        "jaʕaħ"
      ],
      "mother": [
        "𓅐𓏏",
        "muːt"
      ],
      "father": [
        "𓇋𓏏",
        "jit"
      ],
      "eat": [
        "𓅱𓈖𓏌",
        "wenem"
      ],
      "drink": [
        "𓋴𓅱𓂋",
        "seweɾ"
      ],
      "love": [
        "𓅓𓂋",
        "meɾ"
      ],
      "heart": [
        "𓇋𓃀",
        "jib"
      ],
      "tree": [
        "𓇋𓈎𓏌𓆭",
        "ʕaːʃ"
      ],
      "house": [
        "𓉐",
        "peɾ"
      ],
      "dog": [
        "𓃡",
        "juːjuː"
      ],
      "cat": [
        "𓏇𓇋𓅱𓃠",
        "miːw"
      ],
      "hand": [
        "𓂝𓂋𓏏",
        "dʒeɾet"
      ],
      "eye": [
        "𓁹",
        "iːɾet"
      ],
      "hello": [
        "𓇋𓈖𓂧𓉔𓂋𓎡",
        "jined-ħeɾek"
      ],
      "thanks": [
        "𓂧𓅱𓂝𓎡",
        "duːʕak"
      ],
      "one": [
        "𓏤",
        "waːʕ"
      ],
      "good": [
        "𓄤",
        "nefeɾ"
      ]
    }
  },
  en_ang: { name: 'Old English', native: 'Englisc', lat: 51.51, lng: -0.13,
    words: { water:['wæter','wæter'], fire:['fȳr','fyːr'], sun:['sunne','sunːe'], moon:['mōna','moːnɑ'], mother:['mōdor','moːdor'], father:['fæder','fæder'], eat:['etan','etɑn'], drink:['drincan','drinkɑn'], love:['lufu','luvu'], heart:['heorte','heorte'], tree:['trēow','treːow'], house:['hūs','huːs'], dog:['hund','hund'], cat:['catt','kɑtː'], hand:['hand','hɑnd'], eye:['ēage','eːɑɣe'], hello:['hāl','hɑːl'], thanks:['þancas','θɑnkɑs'], one:['ān','ɑːn'], good:['gōd','ɡoːd'] }},
  enm: { name: 'Middle English', native: 'Englisch', lat: 51.51, lng: -0.13,
    words: { water:['water','watər'], fire:['fyr','fyːr'], sun:['sonne','sɔnːə'], moon:['mone','moːnə'], mother:['moder','moːdər'], father:['fader','faːdər'], eat:['eten','eːtən'], drink:['drinken','drɪŋkən'], love:['love','lʊvə'], heart:['herte','hɛrtə'], tree:['tre','treː'], house:['hous','huːs'], dog:['hound','huːnd'], cat:['catte','katːə'], hand:['hand','hand'], eye:['eye','iːə'], hello:['hail','hɛːl'], thanks:['gramercy','ɡraːmɛrsiː'], one:['oon','oːn'], good:['good','ɡoːd'] }},
  non: { name: 'Old Norse', native: 'Norrǿnt mál', lat: 59.91, lng: 10.75,
    words: { water:['vatn','vɑtn'], fire:['eldr','eldr'], sun:['sól','soːl'], moon:['máni','mɑːni'], mother:['móðir','moːðir'], father:['faðir','fɑðir'], eat:['eta','etɑ'], drink:['drekka','drekːɑ'], love:['ást','ɑːst'], heart:['hjarta','hjɑrtɑ'], tree:['tré','treː'], house:['hús','huːs'], dog:['hundr','hundr'], cat:['kǫttr','kɔtːr'], hand:['hǫnd','hɔnd'], eye:['auga','ɑuɣɑ'], hello:['heill','hɛilː'], thanks:['þǫkk','θɔkː'], one:['einn','ɛinː'], good:['góðr','ɡoːðr'] }},
  got: { name: 'Gothic', native: '𐌲𐌿𐍄𐌹𐍃𐌺', lat: 45.05, lng: 34.10,
    words: { water:['𐍅𐌰𐍄𐍉','wɑtoː'], fire:['𐍆𐍉𐌽','foːn'], sun:['𐍃𐌿𐌽𐌽𐍉','sunːoː'], moon:['𐌼𐌴𐌽𐌰','meːnɑ'], mother:['𐌰𐌹𐌸𐌴𐌹','ɛːθiː'], father:['𐌰𐍄𐍄𐌰','ɑtːɑ'], eat:['𐌼𐌰𐍄𐌾𐌰𐌽','mɑtjɑn'], drink:['𐌳𐍂𐌹𐌲𐌺𐌰𐌽','driŋkɑn'], love:['𐍆𐍂𐌹𐌰𐌸𐍅𐌰','friɑθwɑ'], heart:['𐌷𐌰𐌹𐍂𐍄𐍉','hɛːrtoː'], tree:['𐌱𐌰𐌲𐌼𐍃','bɑɣms'], house:['𐍂𐌰𐌶𐌽','rɑzn'], dog:['𐌷𐌿𐌽𐌳𐍃','hunds'], cat:['𐌺𐌰𐍄𐍄𐍃','kɑtːs'], hand:['𐌷𐌰𐌽𐌳𐌿𐍃','hɑndus'], eye:['𐌰𐌿𐌲𐍉','ɑuɣoː'], hello:['𐌷𐌰𐌹𐌻𐍃','hɛːls'], thanks:['𐌸𐌰𐌲𐌺𐍃','θɑŋks'], one:['𐌰𐌹𐌽𐍃','ɛːns'], good:['𐌲𐍉𐌸𐍃','ɡoːθs'] }},
  cu: { name: 'Old Church Slavonic', native: 'Словѣньскъ', lat: 42.70, lng: 23.32,
    words: { water:['вода','vodɑ'], fire:['огнь','oɡnʲ'], sun:['слъньце','slɤnʲtse'], moon:['лоуна','lunɑ'], mother:['мати','mɑti'], father:['отьць','otʲɪtsʲ'], eat:['ꙗсти','jɑsti'], drink:['пити','piti'], love:['любъвь','lʲubɤvʲ'], heart:['срьдьце','srʲdʲtse'], tree:['дрѣво','drěvo'], house:['домъ','domɤ'], dog:['пьсъ','pʲsɤ'], cat:['котъка','kotɤkɑ'], hand:['рѫка','rõkɑ'], eye:['око','oko'], hello:['радоуисѧ','rɑdujisẽ'], thanks:['благодарьствоую','blɑɡodɑrʲstvuju'], one:['ѥдинъ','jedinɤ'], good:['добръ','dobrɤ'] }},
  pi: {
    "name": "Pali",
    "native": "पालि",
    "lat": 25.28,
    "lng": 83,
    "words": {
      "water": [
        "उदक",
        "udaka"
      ],
      "fire": [
        "अग्गि",
        "aɡɡi"
      ],
      "sun": [
        "सुरिय",
        "surija"
      ],
      "moon": [
        "चन्द",
        "tʃanda"
      ],
      "mother": [
        "माता",
        "maːtaː"
      ],
      "father": [
        "पिता",
        "pitaː"
      ],
      "eat": [
        "खादति",
        "kʰaːdati"
      ],
      "drink": [
        "पिवति",
        "pivati"
      ],
      "love": [
        "पेम",
        "pema"
      ],
      "heart": [
        "हदय",
        "hadaja"
      ],
      "tree": [
        "रुक्ख",
        "rukkʰa"
      ],
      "house": [
        "घर",
        "ɡʰara"
      ],
      "dog": [
        "सुनख",
        "sunakʰa"
      ],
      "cat": [
        "बिळाल",
        "biɭaːla"
      ],
      "hand": [
        "हत्थ",
        "hatːʰa"
      ],
      "eye": [
        "चक्खु",
        "tʃakkʰu"
      ],
      "hello": [
        "नमो",
        "namo"
      ],
      "thanks": [
        "अनुमोदामि",
        "anumodaːmi"
      ],
      "one": [
        "एक",
        "eka"
      ],
      "good": [
        "सुन्दर",
        "sundara"
      ]
    }
  },
  cop: { name: 'Coptic', native: 'ⲙⲉⲧⲣⲉⲙⲛⲕⲏⲙⲉ', lat: 31.20, lng: 29.92,
    words: { water:['ⲙⲟⲟⲩ','moːu'], fire:['ⲕⲣⲱⲙ','krɔːm'], sun:['ⲣⲏ','reː'], moon:['ⲓⲟϩ','joːh'], mother:['ⲙⲁⲁⲩ','maːu'], father:['ⲉⲓⲱⲧ','ejɔːt'], eat:['ⲟⲩⲱⲙ','uɔːm'], drink:['ⲥⲱ','sɔː'], love:['ⲙⲉ','me'], heart:['ϩⲏⲧ','heːt'], tree:['ϣⲏⲛ','ʃeːn'], house:['ⲏⲓ','eːj'], dog:['ⲟⲩϩⲟⲣ','uhɔr'], cat:['ⲉⲙⲟⲩ','emu'], hand:['ϭⲓϫ','tʃidʒ'], eye:['ⲃⲁⲗ','bal'], hello:['ⲛⲟⲩϥⲣⲓ','nufri'], thanks:['ϣⲉⲡϩⲙⲟⲧ','ʃephmot'], one:['ⲟⲩⲁ','ua'], good:['ⲛⲁⲛⲟⲩ','nanu'] }},
  arc: { name: 'Aramaic', native: 'ܐܪܡܝܐ', lat: 33.51, lng: 36.29,
    words: { water:['ܡܝܐ','majaː'], fire:['ܢܘܪܐ','nuːraː'], sun:['ܫܡܫܐ','ʃemʃaː'], moon:['ܣܗܪܐ','sahraː'], mother:['ܐܡܐ','emːaː'], father:['ܐܒܐ','abːaː'], eat:['ܐܟܠ','aːχel'], drink:['ܫܬܐ','ʃtaː'], love:['ܚܘܒܐ','ħubːaː'], heart:['ܠܒܐ','lebːaː'], tree:['ܐܝܠܢܐ','iːlaːnaː'], house:['ܒܝܬܐ','bajtaː'], dog:['ܟܠܒܐ','kalbaː'], cat:['ܫܘܢܪܐ','ʃuːnaːraː'], hand:['ܐܝܕܐ','iːðaː'], eye:['ܥܝܢܐ','ʕajnaː'], hello:['ܫܠܡܐ','ʃlaːmaː'], thanks:['ܬܘܕܝ','tawdiː'], one:['ܚܕ','ħað'], good:['ܛܒܐ','tˤaːβaː'] }},
  sux: {
    "name": "Sumerian",
    "native": "𒅴𒂠",
    "lat": 30.96,
    "lng": 46.1,
    "words": {
      "water": [
        "𒀀",
        "a"
      ],
      "fire": [
        "𒉈",
        "izi"
      ],
      "sun": [
        "𒌓",
        "utu"
      ],
      "moon": [
        "𒀭𒋀𒆠",
        "nanːa"
      ],
      "mother": [
        "𒂼",
        "ama"
      ],
      "father": [
        "𒀀𒁀",
        "abːa"
      ],
      "eat": [
        "𒅥",
        "ɡu"
      ],
      "drink": [
        "𒅘",
        "naŋ"
      ],
      "love": [
        "𒆠𒀀𒄀",
        "ki.aŋ"
      ],
      "heart": [
        "𒊮",
        "ʃa"
      ],
      "tree": [
        "𒄑",
        "ŋeʃ"
      ],
      "house": [
        "𒂍",
        "e"
      ],
      "dog": [
        "𒌨",
        "ur"
      ],
      "cat": [
        "𒌓𒊬",
        "ʃa.tur"
      ],
      "hand": [
        "𒋗",
        "ʃu"
      ],
      "eye": [
        "𒅊",
        "iɡi"
      ],
      "hello": [
        "𒁲",
        "silim"
      ],
      "thanks": [
        "—",
        "—"
      ],
      "one": [
        "𒀸",
        "diʃ"
      ],
      "good": [
        "𒊩𒌆",
        "saŋ"
      ]
    }
  },
  akk: {
    "name": "Akkadian",
    "native": "𒀝𒅗𒁺𒌝",
    "lat": 33.34,
    "lng": 44.4,
    "words": {
      "water": [
        "𒈬",
        "muː"
      ],
      "fire": [
        "𒉈𒌋",
        "iʃaːtu"
      ],
      "sun": [
        "𒀭𒌓",
        "ʃamʃu"
      ],
      "moon": [
        "𒀭𒌍",
        "siːnu"
      ],
      "mother": [
        "𒌝𒈬",
        "umːu"
      ],
      "father": [
        "𒀊",
        "abu"
      ],
      "eat": [
        "𒀀𒅗𒇻",
        "akaːlu"
      ],
      "drink": [
        "𒊮𒌅",
        "ʃatuː"
      ],
      "love": [
        "𒊏𒄠",
        "raːmu"
      ],
      "heart": [
        "𒇷𒅁",
        "libːu"
      ],
      "tree": [
        "𒄑",
        "isˤu"
      ],
      "house": [
        "𒂍",
        "biːtu"
      ],
      "dog": [
        "𒌨𒁇",
        "kalbu"
      ],
      "cat": [
        "𒋗𒊏𒉡",
        "ʃuraːnu"
      ],
      "hand": [
        "𒋗",
        "qaːtu"
      ],
      "eye": [
        "𒅆",
        "iːnu"
      ],
      "hello": [
        "𒁲",
        "ʃulmu"
      ],
      "thanks": [
        "𒁲𒌅",
        "taʃlimtu"
      ],
      "one": [
        "𒁹",
        "iʃteːn"
      ],
      "good": [
        "𒄭𒄀",
        "damqu"
      ]
    }
  },
  hit: {
    "name": "Hittite",
    "native": "𒉈𒅆𒇷",
    "lat": 39.93,
    "lng": 32.86,
    "words": {
      "water": [
        "𒉿𒀀𒋻",
        "waːtar"
      ],
      "fire": [
        "𒉺𒄩𒄴𒄯",
        "paxːur"
      ],
      "sun": [
        "—",
        "—"
      ],
      "moon": [
        "𒀀𒅈𒈠",
        "arma"
      ],
      "mother": [
        "𒀭𒈾",
        "anːa"
      ],
      "father": [
        "𒀜𒋫",
        "atːa"
      ],
      "eat": [
        "𒅕𒀀𒀜",
        "ed"
      ],
      "drink": [
        "𒅔𒆪",
        "eku"
      ],
      "love": [
        "𒀸𒅆𒅀𒀭",
        "asːijant"
      ],
      "heart": [
        "𒆗𒁕",
        "kard"
      ],
      "tree": [
        "𒋫𒊒",
        "taru"
      ],
      "house": [
        "𒉺𒅕",
        "per"
      ],
      "dog": [
        "𒆪𒉿𒀭",
        "kuwan"
      ],
      "cat": [
        "—",
        "—"
      ],
      "hand": [
        "𒆠𒅖𒊭𒅈",
        "kesːar"
      ],
      "eye": [
        "𒊭𒆪𒉿",
        "ʃakuwa"
      ],
      "hello": [
        "—",
        "—"
      ],
      "thanks": [
        "—",
        "—"
      ],
      "one": [
        "𒁹",
        "aʃ"
      ],
      "good": [
        "𒀸𒋗",
        "asːu"
      ]
    }
  },
  nci: { name: 'Classical Nahuatl', native: 'Nāhuatl', lat: 19.43, lng: -99.13,
    words: { water:['ātl','aːtɬ'], fire:['tlētl','tɬeːtɬ'], sun:['tōnatiuh','toːnatiw'], moon:['mētztli','meːtstɬi'], mother:['nāntli','naːntɬi'], father:['tāhtli','taːtɬi'], eat:['tlacua','tɬakʷa'], drink:['ātli','aːtɬi'], love:['tlazōhtla','tɬasoːtɬa'], heart:['yōllōtl','joːlːoːtɬ'], tree:['cuahuitl','kʷawitɬ'], house:['calli','kalːi'], dog:['itzcuīntli','itskʷiːntɬi'], cat:['mīztōn','miːstoːn'], hand:['māitl','maːitɬ'], eye:['īxtli','iːʃtɬi'], hello:['niltze','niltse'], thanks:['tlazōhcāmati','tɬasoːʰkaːmati'], one:['cē','seː'], good:['cualli','kʷalːi'] }},
  myn: { name: 'Classical Maya', native: 'Maaya Tzij', lat: 14.63, lng: -90.51,
    words: { water:['haʼ','haʔ'], fire:['kʼahkʼ','kʼahkʼ'], sun:['kʼin','kʼin'], moon:['uh','uh'], mother:['naʼ','naʔ'], father:['yuum','juːm'], eat:['wiʼij','wiʔiχ'], drink:['ukʼ','ukʼ'], love:['yaah','jaːh'], heart:['pixan','piʃan'], tree:['cheʼ','tʃeʔ'], house:['otoch','otoːtʃ'], dog:['peekʼ','peːkʼ'], cat:['miis','miːs'], hand:['kʼab','kʼab'], eye:['ich','itʃ'], hello:['bix a beel','biʃ a beːl'], thanks:['nibʼoolal','nibʼoːlal'], one:['jun','χun'], good:['utz','uts'] }},
  ine: { name: 'Proto-Indo-European', native: '*dń̥ǵʰwéh₂s', lat: 47.00, lng: 39.00,
    words: { water:['*wódr̥','wódr̩'], fire:['*péh₂wr̥','péh₂wr̩'], sun:['*sóh₂wl̥','sóh₂wl̩'], moon:['*méh₁not','méh₁not'], mother:['*méh₂tēr','méh₂teːr'], father:['*ph₂tḗr','ph₂téːr'], eat:['*h₁ed-','h₁ed'], drink:['*peh₃-','peh₃'], love:['*lewbʰ-','lewbʰ'], heart:['*ḱḗr','ḱéːr'], tree:['*dóru','dóru'], house:['*dṓm','dóːm'], dog:['*ḱwṓ','ḱwóː'], cat:['—','—'], hand:['*ǵʰésr̥','ǵʰésr̩'], eye:['*h₃ékʷ-','h₃ékʷ'], hello:['—','—'], thanks:['—','—'], one:['*Hóynos','hójnos'], good:['*h₁su-','h₁su'] }},
  zh_song: { name: 'Classical Chinese (Song)', native: '文言(宋)', lat: 34.80, lng: 114.31,
    words: { water:['水','ɕy˧˩˧'], fire:['火','xwo˧˩˧'], sun:['日','ʐi˥˩'], moon:['月','ɥɛ˥˩'], mother:['母','mu˧˩˧'], father:['父','fu˥˩'], eat:['食','ʂʐ˧˥'], drink:['飲','jin˧˩˧'], love:['愛','ai˥˩'], heart:['心','ɕin˥'], tree:['木','mu˥˩'], house:['屋','u˥'], dog:['犬','kʰɥɛn˧˩˧'], cat:['貓','mau˧˥'], hand:['手','ʂou˧˩˧'], eye:['目','mu˥˩'], hello:['萬福','wan˥˩fu˧˥'], thanks:['謝','ɕjɛ˥˩'], one:['一','i˥'], good:['善','ʂan˥˩'] }},
  zh_han: { name: 'Han Chinese', native: '漢語(漢代)', lat: 34.26, lng: 108.94,
    words: { water:['水','ɕiwiɪʔ'], fire:['火','huɑiʔ'], sun:['日','ȵit'], moon:['月','ŋiuɑt'], mother:['母','muːʔ'], father:['父','biuoʔ'], eat:['食','ʑiək'], drink:['飲','ʔiəm'], love:['愛','ʔɑːi'], heart:['心','siəm'], tree:['木','muok'], house:['屋','ʔuok'], dog:['犬','kʰiuɛn'], cat:['貓','mau'], hand:['手','ɕiuʔ'], eye:['目','miuk'], hello:['萬福','miuɑn piuk'], thanks:['謝','ziɛ'], one:['一','ʔiit'], good:['善','dʑiɛn'] }},
  zh_tang: { name: 'Tang Chinese', native: '漢語(唐代)', lat: 34.26, lng: 108.94,
    words: { water:['水','ɕyɪX'], fire:['火','xuɑX'], sun:['日','ȵit'], moon:['月','ŋʉɐt'], mother:['母','muX'], father:['父','bɨoX'], eat:['食','ʑik'], drink:['飲','ʔimX'], love:['愛','ʔɑiH'], heart:['心','sim'], tree:['木','muk'], house:['屋','ʔuk'], dog:['犬','kʰiuɛnX'], cat:['貓','mæw'], hand:['手','ɕɨuX'], eye:['目','muk'], hello:['萬福','mʉɐnH piuk'], thanks:['謝','ziɛH'], one:['一','ʔit'], good:['善','dʑiɛnX'] }},
  ja_edo: { name: 'Japanese (Edo)', native: '江戸言葉', lat: 35.68, lng: 139.69,
    words: { water:['水','midzu'], fire:['火','hi'], sun:['日','hi'], moon:['月','tsuki'], mother:['おっかさん','okkasaN'], father:['おとっつぁん','otottsaɴ'], eat:['食う','kuː'], drink:['飲む','nomu'], love:['恋','kohi'], heart:['心','kokoro'], tree:['木','ki'], house:['家','ie'], dog:['犬','inu'], cat:['猫','neko'], hand:['手','te'], eye:['目','me'], hello:['御機嫌よう','ɡokiɡeɴjoː'], thanks:['忝い','katadʑikenai'], one:['一','hitotsu'], good:['良い','joi'] }},
  ja_heian: { name: 'Japanese (Heian)', native: '平安京言葉', lat: 35.01, lng: 135.77,
    words: { water:['水','midu'], fire:['火','ɸi'], sun:['日','ɸi'], moon:['月','tukï'], mother:['母','ɸaɸa'], father:['父','titï'], eat:['食ふ','kaɸu'], drink:['飲む','nomu'], love:['恋','koɸi'], heart:['心','kokoro'], tree:['木','ki'], house:['家','iɸe'], dog:['犬','inu'], cat:['猫','neko'], hand:['手','te'], eye:['目','me'], hello:['あなかしこ','anakasiko'], thanks:['忝なし','katadikenaɕi'], one:['一つ','ɸitotu'], good:['良し','joɕi'] }},
  ko_mid: { name: 'Medieval Korean', native: '中世韓國語', lat: 37.57, lng: 126.98,
    words: { water:['믈','mɯl'], fire:['블','pɯl'], sun:['ᄒᆡ','hʌj'], moon:['ᄃᆞᆯ','tʌl'], mother:['어미','ʌmi'], father:['아비','abi'], eat:['먹다','mʌk.ta'], drink:['마시다','maɕi.ta'], love:['ᄉᆞ랑','sʌ.ɾaŋ'], heart:['ᄆᆞᅀᆞᆷ','mʌzʌm'], tree:['나모','namo'], house:['집','tɕip'], dog:['가히','kahi'], cat:['고아이','koai'], hand:['손','son'], eye:['눈','nun'], hello:['안녕ᄒᆞ쇼셔','annjʌŋ hʌ.sjo.sjʌ'], thanks:['고맙ᄉᆞᆸ나이다','komap.sʌp.na.i.ta'], one:['ᄒᆞ나','hʌna'], good:['됴타','tjota'] }},
  ko_em: { name: 'Early Modern Korean', native: '近世韓國語', lat: 37.57, lng: 126.98,
    words: { water:['물','mul'], fire:['불','pul'], sun:['ᄒᆡ','hɛ'], moon:['달','tal'], mother:['어미','ʌmi'], father:['아비','abi'], eat:['먹다','mʌkta'], drink:['마시다','maɕida'], love:['사랑','saɾaŋ'], heart:['마음','maɯm'], tree:['나무','namu'], house:['집','tɕip'], dog:['개','kɛ'], cat:['고양이','kojaŋi'], hand:['손','son'], eye:['눈','nun'], hello:['안녕하시오','annjʌŋ.ha.si.o'], thanks:['고맙소이다','komap.so.i.da'], one:['하나','hana'], good:['좋다','tɕotta'] }},
  vi_nom: { name: 'Vietnamese Chữ Nôm', native: 'Tiếng Việt (Chữ Nôm)', lat: 21.03, lng: 105.85,
    words: { water:['渃','nɨək'], fire:['𤏬','lɨə'], sun:['𣎏𡗶','mət tɤj'], moon:['𣎏𢁑','mət taŋ'], mother:['𡞕','mɛ'], father:['𤙗','ɓo'], eat:['𫗒','an'], drink:['㗂','uəŋ'], love:['𢞅','iəw'], heart:['𢣐𢞂','tɤj tim'], tree:['𣘃','kəj'], house:['茹','ɲaː'], dog:['𤝞','tɕɔ'], cat:['猫','mɛw'], hand:['𡬶','taj'], eye:['𥄫','mak'], hello:['吀嘲','sin tɕaːw'], thanks:['感恩','kaːm əːn'], one:['𠬠','mot'], good:['卒','tot'] }},
  // === Constructed Languages ===
  eo: { name: 'Esperanto', native: 'Esperanto', lat: 32, lng: -38,
    words: { water:['akvo','akvo'], fire:['fajro','fajro'], sun:['suno','suno'], moon:['luno','luno'], mother:['patrino','patrino'], father:['patro','patro'], eat:['manĝi','mandʒi'], drink:['trinki','trinki'], love:['amo','amo'], heart:['koro','koro'], tree:['arbo','arbo'], house:['domo','domo'], dog:['hundo','hundo'], cat:['kato','kato'], hand:['mano','mano'], eye:['okulo','okulo'], hello:['saluton','saluton'], thanks:['dankon','dankon'], one:['unu','unu'], good:['bona','bona'] }},
  tok: { name: 'Toki Pona', native: 'toki pona', lat: 28, lng: -38,
    words: { water:['telo','telo'], fire:['seli','seli'], sun:['suno','suno'], moon:['mun','mun'], mother:['mama meli','mama meli'], father:['mama mije','mama mije'], eat:['moku','moku'], drink:['moku','moku'], love:['olin','olin'], heart:['pilin','pilin'], tree:['kasi','kasi'], house:['tomo','tomo'], dog:['soweli','soweli'], cat:['soweli','soweli'], hand:['luka','luka'], eye:['lukin','lukin'], hello:['toki','toki'], thanks:['pona','pona'], one:['wan','wan'], good:['pona','pona'] }},
  tlh: { name: 'Klingon', native: 'tlhIngan Hol', lat: 24, lng: -38,
    words: { water:['bIQ','bɪqʰ'], fire:['qul','qʰul'], sun:['jul','dʒul'], moon:['maS','mɑʃ'], mother:['SoS','ʃoʃ'], father:['vav','vɑv'], eat:['Sop','ʃopʰ'], drink:['tlhutlh','t͡ɬʰut͡ɬʰ'], love:['parmaq','pʰɑrmɑqʰ'], heart:['tIq','tʰɪqʰ'], tree:['Sor','ʃor'], house:['juH','dʒux'], dog:['QaghwI\'','qɑɣwɪʔ'], cat:['vIghro\'','vɪɣroʔ'], hand:['ghop','ɣopʰ'], eye:['mIn','mɪn'], hello:['nuqneH','nuqʰnex'], thanks:['qatlho\'','qʰɑt͡ɬʰoʔ'], one:['wa\'','wɑʔ'], good:['QaQ','qɑqʰ'] }},
  jbo: { name: 'Lojban', native: 'la .lojban.', lat: 20, lng: -38,
    words: { water:['djacu','dʒatu͡ʃu'], fire:['fagri','faɡri'], sun:['solri','solri'], moon:['lunra','lunra'], mother:['mamta','mamta'], father:['patfu','patfu'], eat:['citka','ʃitka'], drink:['pinxe','pinʃe'], love:['prami','prami'], heart:['risna','risna'], tree:['tricu','tritu͡ʃu'], house:['zdani','zdani'], dog:['gerku','ɡerku'], cat:['mlatu','mlatu'], hand:['xance','ʃant͡ʃe'], eye:['kanla','kanla'], hello:['coi','ʃoj'], thanks:['ki\'e','kiʔe'], one:['pa','pa'], good:['xamgu','ʃamɡu'] }},
  // === Phase 2: high-population missing languages ===
  // Sinitic (Chinese varieties)
  cjy: { name: 'Jin (Shanxi)', native: '晋语', lat: 37.87, lng: 112.55, // Taiyuan
    words: { water:['水','sueɪ˥˧'], fire:['火','xuo˥˧'], sun:['日头','ʐəʔ˨tʰəu˩'], moon:['月亮','yəʔ˨liɔ̃˩'], mother:['妈妈','ma˩ma'], father:['爹爹','tie˩tie'], eat:['吃','tʂʰəʔ˨'], drink:['喝','xəʔ˨'], love:['爱','ai˧'], heart:['心','ɕiŋ˩'], tree:['树','su˨˩˧'], house:['家','tɕia˩'], dog:['狗','kəu˥˧'], cat:['猫','mau˩'], hand:['手','səu˥˧'], eye:['眼睛','niæ˨˩˧tɕiŋ'], hello:['你好','ni˨˩˧xau˨˩˧'], thanks:['谢谢','ɕie˨ɕie'], one:['一','iəʔ˨'], good:['好','xau˨˩˧'] }},
  hsn: { name: 'Xiang (Hunan)', native: '湘语', lat: 28.20, lng: 112.97, // Changsha
    words: { water:['水','ɕy˦˩'], fire:['火','xo˦˩'], sun:['太阳','tʰai˥˩ian˩˧'], moon:['月亮','ye˨˦liaŋ'], mother:['妈妈','ma˧ma'], father:['爸爸','pa˥˧pa'], eat:['吃','tɕʰi˨˦'], drink:['喝','xo˨˦'], love:['爱','ŋai˥˩'], heart:['心','sin˧'], tree:['树','ɕy˩˧'], house:['屋里','u˨˦li'], dog:['狗','kəu˦˩'], cat:['猫','mau˩˧'], hand:['手','ɕəu˦˩'], eye:['眼睛','ŋan˦˩tɕin˧'], hello:['你好','n̩˦˩xau˦˩'], thanks:['谢谢','ɕie˩˧ɕie'], one:['一','i˨˦'], good:['好','xau˦˩'] }},
  gan: { name: 'Gan (Jiangxi)', native: '赣语', lat: 28.68, lng: 115.86, // Nanchang
    words: { water:['水','sui˨˩˧'], fire:['火','fo˨˩˧'], sun:['日头','ɲit˥tʰɛu'], moon:['月光','ŋyot˥kuɔŋ˦˨'], mother:['妈妈','ma˦˨ma'], father:['爸爸','pa˥pa'], eat:['吃','tɕʰiat˥'], drink:['喝','hot˥'], love:['爱','ŋoi˨˩'], heart:['心','ɕin˦˨'], tree:['树','ɕu˨˩'], house:['屋','uk˥'], dog:['狗','keu˨˩˧'], cat:['猫','mau˦˨'], hand:['手','ɕeu˨˩˧'], eye:['眼睛','ŋan˨˩tsin'], hello:['你好','n̩˨˩hau˨˩˧'], thanks:['谢谢','ɕia˨˩ɕia'], one:['一','it˥'], good:['好','hau˨˩˧'] }},
  // Indo-Aryan (large missing)
  mai: { name: 'Maithili', native: 'मैथिली', lat: 26.15, lng: 85.90, // Darbhanga
    words: { water:['पानि','paːni'], fire:['आगि','aːɡi'], sun:['सूरज','suːrəd͡ʒ'], moon:['चान','tʃaːn'], mother:['माय','maːj'], father:['बाबू','baːbuː'], eat:['खाएब','kʰaːeb'], drink:['पीयब','piːjəb'], love:['प्रेम','preːm'], heart:['हृदय','hridəj'], tree:['गाछ','ɡaːtʃʰ'], house:['घर','ɡʱər'], dog:['कुकुर','kukur'], cat:['बिलाइ','bilaːi'], hand:['हाथ','haːtʰ'], eye:['आँखि','ãːkʰi'], hello:['प्रणाम','prəɳaːm'], thanks:['धन्यवाद','dʱənjəbaːd'], one:['एक','eːk'], good:['नीक','niːk'] }},
  awa: { name: 'Awadhi', native: 'अवधी', lat: 26.78, lng: 82.13, // Ayodhya
    words: { water:['पानी','paːniː'], fire:['आगि','aːɡi'], sun:['सूरज','suːrəd͡ʒ'], moon:['चान','tʃaːn'], mother:['मइया','məjjaː'], father:['बाबू','baːbuː'], eat:['खाई','kʰaːiː'], drink:['पीई','piːiː'], love:['पिरेम','pirem'], heart:['हियाँ','hijãː'], tree:['रूख','ruːkʰ'], house:['घर','ɡʱər'], dog:['कुक्कुर','kukːur'], cat:['बिलारि','bilaːri'], hand:['हाथ','haːtʰ'], eye:['आँख','ãːkʰ'], hello:['राम राम','raːm raːm'], thanks:['धन्यवाद','dʱənjəbaːd'], one:['एक','eːk'], good:['निक','nik'] }},
  skr: { name: 'Saraiki', native: 'سرائیکی', lat: 30.20, lng: 71.47, // Multan
    words: { water:['پاݨی','paːɳiː'], fire:['اَگ','əɡ'], sun:['سُورج','suːrəd͡ʒ'], moon:['چن','tʃən'], mother:['ماں','maːŋ'], father:['ابا','əbbaː'], eat:['کھاوݨ','kʰaːʋəɳ'], drink:['پیوݨ','piːʋəɳ'], love:['پیار','pjaːr'], heart:['دل','dɪl'], tree:['ٻوٹا','ɓoːʈaː'], house:['گھر','kʰər'], dog:['کتا','kuttaː'], cat:['ٻلی','ɓɪlːiː'], hand:['ہتھ','hətʰ'], eye:['اکھ','əkʰ'], hello:['السلام علیکم','əssəlaːm əleːkum'], thanks:['شکریہ','ʃukrijaː'], one:['ہک','hɪk'], good:['چنگا','tʃəŋɡaː'] }},
  // Munda (Austroasiatic)
  sat: { name: 'Santali', native: 'ᱥᱟᱱᱛᱟᱲᱤ', lat: 24.27, lng: 87.25, // Dumka, Jharkhand
    words: { water:['ᱫᱟᱜ','daːk'], fire:['ᱥᱮᱝᱜᱮᱞ','seŋɡel'], sun:['ᱥᱤᱸᱜᱤ','siŋɡi'], moon:['ᱪᱟᱸᱫᱳ','tʃãndo'], mother:['ᱟᱭᱳ','ajo'], father:['ᱟᱯᱟᱹ','apa'], eat:['ᱡᱳᱢ','d͡ʒom'], drink:['ᱧᱩ','ɲu'], love:['ᱫᱩᱞᱟᱲᱤ','dulaɽi'], heart:['ᱢᱳᱱ','mon'], tree:['ᱫᱟᱨᱮ','dare'], house:['ᱳᱲᱟᱜ','oɽaːk'], dog:['ᱥᱮᱛᱟ','seta'], cat:['ᱯᱩᱥᱤ','pusi'], hand:['ᱛᱤ','tiː'], eye:['ᱢᱮᱫ','med'], hello:['ᱡᱳᱦᱟᱨ','d͡ʒohar'], thanks:['ᱫᱷᱚᱱᱭᱚᱵᱟᱫ','dʱonjobad'], one:['ᱢᱤᱫ','mit'], good:['ᱵᱮᱥ','bes'] }},
  // Austronesian — Indonesia & Philippines
  mad: { name: 'Madurese', native: 'Madhurâ', lat: -7.16, lng: 113.47, // Pamekasan
    words: { water:['aèng','aɛŋ'], fire:['apoy','apɔj'], sun:['are','are'], moon:['bulen','bulən'], mother:['ebu','əbu'], father:['eppa\'','əppaʔ'], eat:['ngakan','ŋakan'], drink:['ngenom','ŋənɔm'], love:['tresna','tresna'], heart:['ate','atɛ'], tree:['kajuh','kaju'], house:['bengko','bəŋkɔ'], dog:['pate\'','patɛʔ'], cat:['koceng','kɔtʃɛŋ'], hand:['tanang','tanaŋ'], eye:['mata','mata'], hello:['salam','salam'], thanks:['tarèma kasè','tarɛma kasɛ'], one:['settong','səttɔŋ'], good:['bagus','baɡus'] }},
  hil: { name: 'Hiligaynon', native: 'Ilonggo', lat: 10.72, lng: 122.56, // Iloilo
    words: { water:['tubig','tubiɡ'], fire:['kalayo','kalajɔ'], sun:['adlaw','adlaw'], moon:['bulan','bulan'], mother:['nanay','nanaj'], father:['tatay','tataj'], eat:['kaon','kaʔɔn'], drink:['inom','ʔinɔm'], love:['gugma','ɡuɡma'], heart:['tagipusoon','taɡipusɔʔɔn'], tree:['kahoy','kahɔj'], house:['balay','balaj'], dog:['ido','ʔidɔ'], cat:['kuting','kutiŋ'], hand:['kamot','kamɔt'], eye:['mata','mata'], hello:['kamusta','kamusta'], thanks:['salamat','salamat'], one:['isa','ʔisa'], good:['maayo','maʔajɔ'] }},
  // Iranian
  bal: { name: 'Balochi', native: 'بلوچی', lat: 30.18, lng: 67.00, // Quetta
    words: { water:['آپ','aːp'], fire:['آس','aːs'], sun:['روچ','roːtʃ'], moon:['ماہ','maːh'], mother:['ماس','maːs'], father:['پت','pit'], eat:['وارگ','waːraɡ'], drink:['نوشاگ','noʃaːɡ'], love:['مہر','mehr'], heart:['دل','dɪl'], tree:['درچک','daraːtʃk'], house:['لاگ','laːɡ'], dog:['کچک','kut͡ʃək'], cat:['پشی','piʃiː'], hand:['دست','dast'], eye:['چم','tʃam'], hello:['درود','dorud'], thanks:['مہربانی','mehrabaːniː'], one:['یک','jak'], good:['شر','ʃər'] }},
  // Niger-Congo (West African)
  ak: { name: 'Akan (Twi)', native: 'Akan', lat: 6.69, lng: -1.62, // Kumasi
    words: { water:['nsuo','nsuo'], fire:['ogya','odʑa'], sun:['owia','oɥia'], moon:['ɔsrane','ɔsrane'], mother:['ɛna','ɛna'], father:['agya','adʑa'], eat:['didi','didi'], drink:['nom','nom'], love:['ɔdɔ','ɔdɔ'], heart:['akoma','akoma'], tree:['dua','dua'], house:['efie','efie'], dog:['kraman','kraman'], cat:['agyinamoa','adʑinamoa'], hand:['nsa','nsa'], eye:['aniwa','aniwa'], hello:['akwaaba','akʷaːba'], thanks:['medaase','medaase'], one:['baako','baːko'], good:['pa','pa'] }},
  // South Slavic
  mk: { name: 'Macedonian', native: 'Македонски', lat: 41.99, lng: 21.43, // Skopje
    words: { water:['вода','ˈvɔda'], fire:['оган','ˈɔɡan'], sun:['сонце','ˈsɔnt͡sɛ'], moon:['месечина','mɛˈsɛt͡ʃina'], mother:['мајка','ˈmajka'], father:['татко','ˈtatkɔ'], eat:['јаде','ˈjadɛ'], drink:['пие','ˈpiɛ'], love:['љубов','ˈʎubɔv'], heart:['срце','ˈsərt͡sɛ'], tree:['дрво','ˈdərvɔ'], house:['куќа','ˈkucca'], dog:['куче','ˈkutʃɛ'], cat:['мачка','ˈmatʃka'], hand:['рака','ˈraka'], eye:['око','ˈɔkɔ'], hello:['здраво','ˈzdravɔ'], thanks:['благодарам','blaˈɡɔdaram'], one:['еден','ˈɛdɛn'], good:['добар','ˈdɔbar'] }},
  // === Phase 3A: African languages (Bantu, West African, Berber) ===
  // Bantu (East / Southern / Central)
  lg: { name: 'Luganda', native: 'Luganda', lat: 0.31, lng: 32.58, // Kampala
    words: { water:['amazzi','amaːzːi'], fire:['omuliro','omuliɾo'], sun:['enjuba','eɲɟuba'], moon:['omwezi','omwezi'], mother:['maama','maːma'], father:['taata','taːta'], eat:['kulya','kulja'], drink:['kunywa','kuɲʷa'], love:['okwagala','okwaːɡala'], heart:['omutima','omutima'], tree:['omuti','omuti'], house:['ennyumba','eɲɲumba'], dog:['embwa','embwa'], cat:['kkapa','kːapa'], hand:['omukono','omukono'], eye:['eriiso','eɾiːso'], hello:['oli otya','oli otja'], thanks:['webale','weːbale'], one:['emu','emu'], good:['kirungi','tʃiɾuŋɡi'] }},
  ki: { name: 'Kikuyu', native: 'Gĩkũyũ', lat: -1.17, lng: 36.83, // Kiambu, Kenya
    words: { water:['maaĩ','maːi'], fire:['mwaki','mwaki'], sun:['rĩũa','ɾiwa'], moon:['mweri','mweɾi'], mother:['maitũ','maitu'], father:['baba','baba'], eat:['kũrĩa','kuɾia'], drink:['kũnyua','kuɲua'], love:['wendo','wendo'], heart:['ngoro','ŋɡoɾo'], tree:['mũtĩ','muti'], house:['nyũmba','ɲumba'], dog:['ngui','ŋɡui'], cat:['nyaũ','ɲau'], hand:['guoko','ɡuoko'], eye:['riitho','riːθo'], hello:['wĩmwega','wimweɡa'], thanks:['nĩ wega','ni weɡa'], one:['ĩmwe','imwe'], good:['wega','weɡa'] }},
  tn: { name: 'Tswana', native: 'Setswana', lat: -24.65, lng: 25.91, // Gaborone
    words: { water:['metsi','metsi'], fire:['molelo','moleːlo'], sun:['letsatsi','letsatsi'], moon:['ngwedi','ŋwedi'], mother:['mmê','mːɛ'], father:['rrê','rːɛ'], eat:['ja','dʒa'], drink:['nwa','nwa'], love:['lerato','leɾato'], heart:['pelo','peːlo'], tree:['setlhare','setɬʼaɾe'], house:['ntlo','ntɬo'], dog:['ntša','ntʃa'], cat:['katse','katse'], hand:['seatla','seatɬa'], eye:['leitlho','leitɬʼo'], hello:['dumela','dumeːla'], thanks:['ke a leboga','ke a leboɣa'], one:['nngwe','ŋːwe'], good:['siame','siaːme'] }},
  st: { name: 'Sesotho', native: 'Sesotho', lat: -29.31, lng: 27.49, // Maseru
    words: { water:['metsi','metsi'], fire:['mollo','molːo'], sun:['letsatsi','letsatsi'], moon:['khoeli','kʰwɛːli'], mother:['mmè','mːɛ'], father:['ntate','ntate'], eat:['ho ja','ho dʒa'], drink:['ho noa','ho noa'], love:['lerato','leɾato'], heart:['pelo','pelo'], tree:['sefate','sefate'], house:['ntlo','ntɬo'], dog:['ntja','ntʃa'], cat:['katse','katse'], hand:['letsoho','letsoho'], eye:['leihlo','leiɬo'], hello:['dumela','dumɛla'], thanks:['kea leboha','kea leboha'], one:['nngwe','ŋːwe'], good:['monate','monate'] }},
  ts: { name: 'Tsonga', native: 'Xitsonga', lat: -23.30, lng: 30.71, // Giyani (Limpopo Tsonga heartland)
    words: { water:['mati','mati'], fire:['ndzilo','ndzilo'], sun:['dyambu','dʒambu'], moon:['n\'weti','nʷeti'], mother:['manana','manana'], father:['tatana','tatana'], eat:['ku dya','ku dʒa'], drink:['ku nwa','ku nwa'], love:['rirhandzu','riɾandzu'], heart:['mbilu','mbilu'], tree:['nsinya','nsiɲa'], house:['yindlu','jindɮu'], dog:['mbyana','mbjana'], cat:['mangoyi','maŋɡoji'], hand:['voko','voko'], eye:['tihlo','tiɬo'], hello:['avuxeni','aβuʃeni'], thanks:['inkomu','iŋkomu'], one:['rin\'we','rinʷe'], good:['kahle','kaɬe'] }},
  ve: { name: 'Venda', native: 'Tshivenḓa', lat: -22.95, lng: 30.49, // Thohoyandou
    words: { water:['maḓi','maɖi'], fire:['mulilo','mulilo'], sun:['ḓuvha','ɖuʋa'], moon:['ṅwedzi','ŋwedzi'], mother:['mme','mːe'], father:['khotsi','kʰotsi'], eat:['u ḽa','u ɭa'], drink:['u ṅwa','u ŋwa'], love:['lufuno','lufuno'], heart:['mbilu','mbilu'], tree:['muri','muɾi'], house:['nnḓu','nɖu'], dog:['mmbwa','mbːwa'], cat:['katse','katse'], hand:['tshanḓa','tʃʰaɳɖa'], eye:['ito','ito'], hello:['ndaa','ndaː'], thanks:['ndo livhuwa','ndo livʱuwa'], one:['nthihi','ntʰihi'], good:['zwavhuḓi','zwaʋʱuɖi'] }},
  bem: { name: 'Bemba', native: 'ChiBemba', lat: -10.21, lng: 31.18, // Kasama
    words: { water:['amenshi','ameɲʃi'], fire:['umulilo','umulilo'], sun:['akasuba','akasuba'], moon:['umweshi','umweʃi'], mother:['bamayo','bamajo'], father:['bataata','bataːta'], eat:['ukulya','ukulja'], drink:['ukunwa','ukunwa'], love:['ukutemwa','ukutemwa'], heart:['umutima','umutima'], tree:['icimuti','itʃimuti'], house:['ing\'anda','iŋːanda'], dog:['imbwa','imbwa'], cat:['pushi','puʃi'], hand:['ukuboko','ukuboko'], eye:['ilinso','ilinso'], hello:['muli shani','muli ʃani'], thanks:['natotela','natotela'], one:['cimo','tʃimo'], good:['chisuma','tʃisuma'] }},
  lua: { name: 'Luba-Kasai', native: 'Cilubà', lat: -6.13, lng: 23.59, // Mbuji-Mayi
    words: { water:['mâyi','maːji'], fire:['kapia','kapia'], sun:['dîba','diːba'], moon:['ngondo','ŋɡondo'], mother:['mâmu','maːmu'], father:['tâtu','taːtu'], eat:['kudia','kudia'], drink:['kunua','kunua'], love:['dinanga','dinaŋɡa'], heart:['mucima','mut͡ʃima'], tree:['mutshi','mut͡ʃi'], house:['nzubu','nzubu'], dog:['mbwa','mbwa'], cat:['nyao','ɲao'], hand:['tshianza','t͡ʃianza'], eye:['dîsu','diːsu'], hello:['moyo','mojo'], thanks:['tuasakidila','tuasakidila'], one:['umue','umue'], good:['bimpe','bimpe'] }},
  kg: { name: 'Kikongo', native: 'Kikongo', lat: -5.81, lng: 13.46, // Matadi
    words: { water:['maza','maza'], fire:['tiya','tija'], sun:['ntangu','ntaŋɡu'], moon:['ngonda','ŋɡonda'], mother:['mama','mama'], father:['tata','tata'], eat:['ku dia','ku dja'], drink:['ku nua','ku nua'], love:['zola','zola'], heart:['ntima','ntima'], tree:['nti','nti'], house:['nzo','nzo'], dog:['mbwa','mbwa'], cat:['nyau','ɲau'], hand:['koko','koko'], eye:['disu','disu'], hello:['mboté','mbote'], thanks:['matondo','matondo'], one:['mosi','mosi'], good:['mbote','mbote'] }},
  // West African (Niger-Congo Atlantic / Mande)
  ff: { name: 'Fula', native: 'Fulfulde', lat: 12.65, lng: -7.99, // Bamako (representative)
    words: { water:['ndiyam','ndijam'], fire:['yiite','jiːte'], sun:['naange','naːŋɡe'], moon:['lewru','lewɾu'], mother:['yumma','jumːa'], father:['baaba','baːba'], eat:['ñaamde','ɲaːmde'], drink:['yarude','jaɾude'], love:['yiɗde','jiɗːe'], heart:['ɓernde','ɓeɾnde'], tree:['lekki','lekːi'], house:['suudu','suːdu'], dog:['rawandu','ɾawandu'], cat:['ullundu','ulːundu'], hand:['junngo','dʒunːɡo'], eye:['yiitere','jiːteɾe'], hello:['jam tan','dʒam tan'], thanks:['a jaaraama','a dʒaːɾaːma'], one:['go\'o','ɡoʔo'], good:['jam','dʒam'] }},
  bm: { name: 'Bambara', native: 'Bamanankan', lat: 12.65, lng: -7.99, // Bamako
    words: { water:['ji','dʒi'], fire:['tasuma','tasuma'], sun:['tile','tile'], moon:['kalo','kalo'], mother:['ba','ba'], father:['fa','fa'], eat:['dumuni','dumuni'], drink:['min','min'], love:['kanu','kanu'], heart:['dusu','dusu'], tree:['jiri','dʒiɾi'], house:['so','so'], dog:['wulu','wulu'], cat:['jakuma','dʒakuma'], hand:['bolo','bolo'], eye:['ɲɛ','ɲɛ'], hello:['i ni ce','i ni tʃe'], thanks:['i ni ce','i ni tʃe'], one:['kelen','kelen'], good:['ka ɲi','ka ɲi'] }},
  // Berber (Afro-Asiatic)
  kab: { name: 'Kabyle', native: 'Taqbaylit', lat: 36.71, lng: 4.05, // Tizi Ouzou
    words: { water:['aman','aman'], fire:['times','times'], sun:['iṭij','itˤidʒ'], moon:['aggur','agːuɾ'], mother:['yemma','jemːa'], father:['baba','baba'], eat:['eçç','eʃː'], drink:['sew','sew'], love:['tayri','tajɾi'], heart:['ul','ul'], tree:['ttejra','tːedʒɾa'], house:['axxam','aχːam'], dog:['aydi','ajdi'], cat:['amcic','amʃiʃ'], hand:['afus','afus'], eye:['tiṭ','titˤ'], hello:['azul','azul'], thanks:['tanemmirt','tanemːiɾt'], one:['yiwen','jiwen'], good:['yelha','jelha'] }},
  // === Phase 3C: Indigenous Americas ===
  // Mayan
  // (quc K'iche' / kek Q'eqchi' moved to later block — see end of LANG_DATA, audit §6.28 dedup Session 4)
  yua: { name: 'Yucatec Maya', native: 'Maya tʼaan', lat: 20.97, lng: -89.62, // Mérida
    words: { water:['jaʼ','haʔ'], fire:['kʼáakʼ','kʼaːkʼ'], sun:['kʼiin','kʼiːn'], moon:['uj','uh'], mother:['naʼ','naʔ'], father:['taata','taːta'], eat:['jaant','haːnt'], drink:['ukʼul','ukʼul'], love:['yaakuntej','jaːkuntex'], heart:['puksiʼikʼal','puksiʔikʼal'], tree:['cheʼ','tʃeʔ'], house:['naj','nax'], dog:['peekʼ','peːkʼ'], cat:['miis','miːs'], hand:['kʼabʼ','kʼaɓ'], eye:['ich','itʃ'], hello:['baʼax ka waʼalik','baʔaʃ ka waʔalik'], thanks:['dios boʼotik','dios boʔotik'], one:['jun','hun'], good:['maʼalob','maʔalob'] }},
  tzo: { name: 'Tzotzil', native: 'Batsʼi kʼop', lat: 16.74, lng: -92.64, // San Cristóbal
    words: { water:['voʼ','voʔ'], fire:['kʼokʼ','kʼokʼ'], sun:['kʼakʼal','kʼakʼal'], moon:['u','u'], mother:['meʼ','meʔ'], father:['tot','tot'], eat:['veʼel','veʔel'], drink:['uchʼ','utʃʼ'], love:['kʼanel','kʼanel'], heart:['oʼon','oʔon'], tree:['teʼ','teʔ'], house:['na','na'], dog:['tzʼiʼ','tsʼiʔ'], cat:['mis','mis'], hand:['kʼob','kʼob'], eye:['sat','sat'], hello:['kʼusi avokoluk','kʼusi avokoluk'], thanks:['kolaval','kolaval'], one:['jun','xun'], good:['lek','lek'] }},
  // Oto-Manguean
  mix: { name: 'Mixtec', native: 'Tu\'un Sávi', lat: 17.27, lng: -97.69, // Tlaxiaco
    words: { water:['ndute','nduteʔ'], fire:['ñu\'u','ɲuʔu'], sun:['nikandii','nikandiː'], moon:['yoo','joː'], mother:['na\'án','naʔán'], father:['tatá','tatá'], eat:['kasi','kasi'], drink:['kohó','koʔó'], love:['kúu ini','kúu iniʔ'], heart:['ini','iniʔ'], tree:['yutu','jutu'], house:['ve\'e','βeʔe'], dog:['tina','tina'], cat:['vilú','βilú'], hand:['ndo\'ó','ndoʔó'], eye:['nduchi','ndutʃi'], hello:['nasáa','nasáː'], thanks:['tachu\'un','tatʃuʔun'], one:['in','iʔn'], good:['vate','βate'] }},
  zap: { name: 'Zapotec', native: 'Diidxazá', lat: 16.43, lng: -95.02, // Juchitán
    words: { water:['nisa','nisa'], fire:['gi','ɡi'], sun:['gubidxa','ɡubidʒa'], moon:['beeu','beːu'], mother:['jñaa','xɲaː'], father:['bixhoze','biʒoze'], eat:['ro','ɾo'], drink:['ge','ɡe'], love:['ranaxhii','ɾanaʒiː'], heart:['ladxi','ladʒi'], tree:['yaga','jaɡa'], house:['lidxi','lidʒi'], dog:['bi\'cu\'','biʔkʼuʔ'], cat:['mistuu','mistuː'], hand:['na','naʔ'], eye:['lú','lú'], hello:['padixhe','padiʒe'], thanks:['xtiozenu','ʃtjozenu'], one:['tobi','tobi'], good:['nazaaca','nazaːka'] }},
  // Quechuan / Aymaran
  ay: { name: 'Aymara', native: 'Aymar aru', lat: -16.49, lng: -68.15, // La Paz
    words: { water:['uma','uma'], fire:['nina','nina'], sun:['inti','inti'], moon:['phaxsi','pʰaχsi'], mother:['mama','mama'], father:['tata','tata'], eat:['manq\'aña','manqʼaɲa'], drink:['umaña','umaɲa'], love:['munasiña','munasiɲa'], heart:['chuyma','tʃujma'], tree:['quqa','quqa'], house:['uta','uta'], dog:['anu','anu'], cat:['phisi','pʰisi'], hand:['ampara','ampaɾa'], eye:['nayra','najɾa'], hello:['kamisaki','kamisaki'], thanks:['yuspagara','juspaɣaɾa'], one:['maya','maja'], good:['suma','suma'] }},
  // Araucanian
  arn: { name: 'Mapudungun', native: 'Mapuzugun', lat: -38.74, lng: -72.59, // Temuco
    words: { water:['ko','ko'], fire:['kütral','kɨtɾal'], sun:['antü','antɨ'], moon:['küyen','kɨjen'], mother:['ñuke','ɲuke'], father:['chao','tʃao'], eat:['in','in'], drink:['pütun','pɨtun'], love:['poyen','pojen'], heart:['piwke','piwke'], tree:['aliwen','aliwen'], house:['ruka','ɾuka'], dog:['trewa','tɾewa'], cat:['ñayki','ɲajki'], hand:['kuwü','kuwɨ'], eye:['nge','ŋe'], hello:['mari mari','maɾi maɾi'], thanks:['chaltu','tʃaltu'], one:['kiñe','kiɲe'], good:['küme','kɨme'] }},
  // Algonquian (North America)
  cr: { name: 'Cree (Plains)', native: 'ᓀᐦᐃᔭᐍᐏᐣ', lat: 52.13, lng: -106.67, // Saskatoon
    words: { water:['ᓂᐱᕀ','nipij'], fire:['ᐃᐢᑯᑌᐤ','iskotew'], sun:['ᐱᓯᒼ','piːsim'], moon:['ᑎᐱᐢᑲᐍᐱᓯᒼ','tipiskaːwi piːsim'], mother:['ᓂᑲᐎᕀ','nikaːwij'], father:['ᓄᐦᑖᐎᕀ','noːhtaːwij'], eat:['ᒨᐍᐤ','miːtʃiw'], drink:['ᒥᓂᐦᐠᐌᐤ','minihkweːw'], love:['ᓵᑭᐦᐃᐍᐏᐣ','saːkihiweːwin'], heart:['ᒥᑌᐦ','miteːh'], tree:['ᒥᐢᑎᐠ','mistik'], house:['ᐗᐢᑲᐦᐃᑲᐣ','waːskahikan'], dog:['ᐊᑎᒼ','atim'], cat:['ᒥᓅᐢ','minoːs'], hand:['ᒥᒋᒋᕀ','mitʃihtʃij'], eye:['ᒥᐢᑮᓯᐠ','miskiːsik'], hello:['ᑕᓂᓯ','taːnisi'], thanks:['ᑭᓇᓈᐢᑯᒥᑎᐣ','kinanaːskomitin'], one:['ᐯᔭᐠ','peːjak'], good:['ᒥᔫ','mijo'] }},
  oj: { name: 'Ojibwe', native: 'Anishinaabemowin', lat: 46.50, lng: -84.34, // Sault Ste. Marie
    words: { water:['nibi','nibi'], fire:['ishkode','iʃkode'], sun:['giizis','ɡiːzis'], moon:['dibik-giizis','dibik ɡiːzis'], mother:['nimaamaa','nimaːmaː'], father:['indede','indede'], eat:['wiisini','wiːsini'], drink:['minikwe','minikwe'], love:['zaagi\'iwewin','zaːɡiʔiweːwin'], heart:['ode\'','odeʔ'], tree:['mitig','mitiɡ'], house:['wiigiwaam','wiːɡiwaːm'], dog:['animosh','animoʃ'], cat:['gaazhagens','ɡaːʒaɡens'], hand:['ninij','ninidʒ'], eye:['oshkiinzhig','oʃkiːnʒiɡ'], hello:['boozhoo','boːʒoː'], thanks:['miigwech','miːɡʷetʃ'], one:['bezhig','beʒiɡ'], good:['mino','mino'] }},
  // Siouan
  lkt: { name: 'Lakota', native: 'Lakȟótiyapi', lat: 43.02, lng: -102.55, // Pine Ridge
    words: { water:['mní','mní'], fire:['pȟéta','pʰéta'], sun:['wí','wí'], moon:['haŋhépi wí','haŋhépi wí'], mother:['iná','iná'], father:['até','até'], eat:['yúta','júta'], drink:['yátkaŋ','játkaŋ'], love:['thečhíȟila','tʰetʃʰíʁila'], heart:['čhaŋté','tʃʰaŋté'], tree:['čháŋ','tʃʰáŋ'], house:['thípi','tʰípi'], dog:['šúŋka','ʃúŋka'], cat:['igmúŋke','iɡmúŋke'], hand:['napé','napé'], eye:['ištá','iʃtá'], hello:['háu','háu'], thanks:['philámayaye','pʰilámajaje'], one:['waŋží','waŋʒí'], good:['wašté','waʃté'] }},
  // Eskimo-Aleut (Greenlandic)
  kl: { name: 'Greenlandic', native: 'Kalaallisut', lat: 64.18, lng: -51.74, // Nuuk
    words: { water:['imeq','imeq'], fire:['ikuallaq','ikualːaq'], sun:['seqineq','seqineq'], moon:['qaammat','qaːmːat'], mother:['anaana','anaːna'], father:['ataata','ataːta'], eat:['nerivoq','neɾivoq'], drink:['imerpoq','imeɾpoq'], love:['asaaq','asaːq'], heart:['uummat','uːmːat'], tree:['orpik','oɾpik'], house:['illu','ilːu'], dog:['qimmeq','qimːeq'], cat:['qitsuk','qitsuk'], hand:['assak','asːak'], eye:['isi','isi'], hello:['aluu','aluː'], thanks:['qujanaq','qujanaq'], one:['ataaseq','ataːseq'], good:['ajunngilaq','ajunːɡilaq'] }},
  // === Phase 3D: Caucasus ===
  // Northeast Caucasian (Nakh-Daghestanian)
  ce: { name: 'Chechen', native: 'Нохчийн мотт', lat: 43.32, lng: 45.69, // Grozny
    words: { water:['хи','xi'], fire:['цӏе','tsʼe'], sun:['малх','malx'], moon:['бутт','butː'], mother:['нана','nana'], father:['да','da'], eat:['даа','daː'], drink:['мала','mala'], love:['безам','bezam'], heart:['дог','doɡ'], tree:['дитт','ditː'], house:['цӏа','tsʼa'], dog:['жӏала','ʒʼala'], cat:['цицик','tsitsiq'], hand:['куьг','kyɡ'], eye:['бӏаьрг','bʼæɾɡ'], hello:['маршалла','maɾʃalːa'], thanks:['баркалла','baɾkalːa'], one:['цхьа','tsʔa'], good:['дика','dika'] }},
  inh: { name: 'Ingush', native: 'Гӏалгӏай мотт', lat: 43.16, lng: 44.81, // Magas
    words: { water:['хий','xij'], fire:['цӏе','tsʼe'], sun:['малх','malx'], moon:['бутт','butː'], mother:['наьна','nænːa'], father:['да','da'], eat:['даа','daː'], drink:['мала','mala'], love:['безам','bezam'], heart:['дог','doɡ'], tree:['га','ɡa'], house:['цӏа','tsʼa'], dog:['жӏали','ʒʼali'], cat:['циск','tsisk'], hand:['куьг','kyɡ'], eye:['бӏаьрг','bʼæɾɡ'], hello:['моаршал','moaɾʃal'], thanks:['баркал','baɾkal'], one:['цаь','tsæ'], good:['дика','dika'] }},
  av: { name: 'Avar', native: 'Авар мацӀ', lat: 42.98, lng: 47.50, // Makhachkala
    words: { water:['лъим','ɬim'], fire:['цӏа','tsʼa'], sun:['бакъ','baq'], moon:['моцӏ','motsʼ'], mother:['эбел','ebel'], father:['эмен','emen'], eat:['кваназе','kʷanaze'], drink:['гьекӏезе','ʕekʼeze'], love:['рокьи','roqʼi'], heart:['ракӏ','raqʼ'], tree:['гъветӏ','ʁʷetʼ'], house:['рукъ','ruq'], dog:['гьой','ʕoj'], cat:['кету','ketu'], hand:['квер','kʷer'], eye:['бер','ber'], hello:['ворчӏами','voɾtʃʼami'], thanks:['баркала','baɾkala'], one:['цо','tso'], good:['лъикӏаб','ɬikʼab'] }},
  lez: { name: 'Lezgian', native: 'Лезги чӏал', lat: 41.79, lng: 48.16, // Derbent area
    words: { water:['яд','jad'], fire:['цӏай','tsʼaj'], sun:['рагъ','raʁ'], moon:['варз','varz'], mother:['диде','dide'], father:['буба','buba'], eat:['тӏуьн','tʼyn'], drink:['хъун','qun'], love:['кӏан хьун','kʼan χun'], heart:['рикӏ','rikʼ'], tree:['тар','tar'], house:['кӏвал','kʼval'], dog:['кицӏ','kitsʼ'], cat:['кац','kats'], hand:['гъил','ʁil'], eye:['вил','vil'], hello:['салам','salam'], thanks:['чухсагъул','tʃuxsaʁul'], one:['сад','sad'], good:['хъсан','qsan'] }},
  dar: { name: 'Dargwa', native: 'Дарган мез', lat: 42.36, lng: 47.51, // Sergokala
    words: { water:['шин','ʃin'], fire:['цӏа','tsʼa'], sun:['берхӏи','beɾħi'], moon:['баз','baz'], mother:['нес','nes'], father:['атта','atːa'], eat:['букӏан','bukʼan'], drink:['даркьес','daɾqʼes'], love:['дигай','diɡaj'], heart:['уркӏ','uɾkʼ'], tree:['галга','ɡalɡa'], house:['хъали','qali'], dog:['хя','xja'], cat:['гата','ɡata'], hand:['някӏ','ɲækʼ'], eye:['хӏули','ħuli'], hello:['салам','salam'], thanks:['баркалла','baɾkalːa'], one:['ца','tsa'], good:['гӏяхӏил','ʕaħil'] }},
  lbe: { name: 'Lak', native: 'Лакку маз', lat: 42.10, lng: 47.13, // Kumukh
    words: { water:['щин','ʃin'], fire:['цӏу','tsʼu'], sun:['бургъ','burʁ'], moon:['барз','barz'], mother:['нину','ninu'], father:['ппу','pːu'], eat:['ккаву','kːavu'], drink:['гьавхь','ʕavħ'], love:['ччан','tʃːan'], heart:['дакӏ','dakʼ'], tree:['мурхь','muɾħ'], house:['къатта','qatːa'], dog:['ккун','kːun'], cat:['ккац','kːats'], hand:['ка','ka'], eye:['я','ja'], hello:['салам','salam'], thanks:['барчаллагь','baɾtʃalːaʁ'], one:['ца','tsa'], good:['хъинсса','qinsːa'] }},
  tab: { name: 'Tabasaran', native: 'Табасаран чӀал', lat: 41.93, lng: 48.04, // Khiv
    words: { water:['штар','ʃtar'], fire:['цӏа','tsʼa'], sun:['рагъ','raʁ'], moon:['варз','varz'], mother:['бай','baj'], father:['дад','dad'], eat:['ипӏуб','ipʼub'], drink:['ужуб','uʒub'], love:['ккунивал','kːunival'], heart:['юкӏ','jukʼ'], tree:['гар','ɡar'], house:['хал','xal'], dog:['хю','xy'], cat:['кет','ket'], hand:['хил','xil'], eye:['ул','ul'], hello:['салам','salam'], thanks:['чухсагъул','tʃuxsaʁul'], one:['саб','sab'], good:['ужу','uʒu'] }},
  // Northwest Caucasian
  ady: { name: 'Adyghe', native: 'Адыгабзэ', lat: 44.61, lng: 40.10, // Maykop
    words: { water:['псы','psə'], fire:['машӏо','maʃʼo'], sun:['тыгъэ','təʁa'], moon:['мазэ','maza'], mother:['ны','nə'], father:['ты','tə'], eat:['шхэн','ʃxan'], drink:['ефэн','jafan'], love:['шӏу шӏэгъу','ʃʼʷ ʃʼaʁʷ'], heart:['гу','ɡʷə'], tree:['чыгы','tʃəɡə'], house:['унэ','wəna'], dog:['хьэ','ħa'], cat:['чэтыу','tʃatəw'], hand:['ӏэ','ʔa'], eye:['нэ','na'], hello:['шӏуфес','ʃʼwafes'], thanks:['тхьауегъэпсэу','tħawajaʁapsaw'], one:['зы','zə'], good:['дэгъу','daʁʷ'] }},
  kbd: { name: 'Kabardian', native: 'Адыгэбзэ', lat: 43.49, lng: 43.62, // Nalchik
    words: { water:['псы','psə'], fire:['маф1э','mafʼa'], sun:['дыгъэ','dəʁa'], moon:['мазэ','maza'], mother:['анэ','ana'], father:['адэ','ada'], eat:['шхэн','ʃxan'], drink:['ефэн','jafan'], love:['лъагъуныгъэ','ɬaːʁʷənəʁa'], heart:['гу','ɡʷə'], tree:['жыг','ʒəɡ'], house:['унэ','wəna'], dog:['хьэ','ħa'], cat:['джэду','dʒadu'], hand:['ӏэ','ʔa'], eye:['нэ','na'], hello:['фӏэхъус','fʼaqʷəs'], thanks:['фӏыщӏэ','fʼɪʃʼa'], one:['зы','zə'], good:['фӏы','fʼə'] }},
  ab: { name: 'Abkhaz', native: 'Аҧсуа бызшәа', lat: 43.00, lng: 41.02, // Sukhumi
    words: { water:['аӡы','aːdzə'], fire:['амца','amtsa'], sun:['амра','amra'], moon:['амза','amza'], mother:['ан','an'], father:['аб','ab'], eat:['афара','afara'], drink:['ажәра','aʒʷra'], love:['абзиабара','abziabara'], heart:['агәы','aɡʷə'], tree:['аҵла','atsʼla'], house:['аҩны','aːɥnə'], dog:['ала','aːla'], cat:['ацгәы','atsɡʷə'], hand:['анапы','anapə'], eye:['абла','abla'], hello:['мшыбзиа','mʃəbzia'], thanks:['иҭабуп','itʼabup'], one:['акы','akə'], good:['абзиа','abzia'] }},
  // Kartvelian
  xmf: { name: 'Mingrelian', native: 'მარგალური ნინა', lat: 42.50, lng: 41.87, // Zugdidi
    words: { water:['წყარი','tsʼqari'], fire:['დაჩხირი','datʃxiri'], sun:['ბჟა','bʒa'], moon:['თუთა','tuta'], mother:['დიდა','dida'], father:['მუმა','muma'], eat:['ჭკომუა','tʃʼkʼomua'], drink:['შუა','ʃua'], love:['ჸოროფა','ʔorofa'], heart:['გური','ɡuri'], tree:['ჯა','dʒa'], house:['ოშქური','oʃkʼuri'], dog:['ჯოღორი','dʒoʁori'], cat:['კატა','kʼatʼa'], hand:['ხე','xe'], eye:['თოლი','tʼoli'], hello:['გეგაჯანას','ɡeɡadʒanas'], thanks:['გიდიდი','ɡididi'], one:['არ','ar'], good:['ჯგირი','dʒɡiri'] }},
  // Iranian (in Caucasus)
  os: { name: 'Ossetian', native: 'Ирон ӕвзаг', lat: 43.02, lng: 44.68, // Vladikavkaz
    words: { water:['дон','don'], fire:['арт','art'], sun:['хур','xur'], moon:['мӕй','mæj'], mother:['мад','mad'], father:['фыд','fəd'], eat:['хӕрын','xæɾən'], drink:['нуазын','nwazən'], love:['уарзын','waɾzən'], heart:['зӕрдӕ','zæɾdæ'], tree:['бӕлас','bælas'], house:['хӕдзар','xædzar'], dog:['куыдз','kʷədz'], cat:['гӕды','ɡædə'], hand:['къух','kʼux'], eye:['цӕст','tsæst'], hello:['салам','salam'], thanks:['бузныг','buznəɡ'], one:['иу','iw'], good:['хорз','xorz'] }},
  // === Phase 3E: Pacific & Australia ===
  // Polynesian
  ty: { name: 'Tahitian', native: 'Reo Tahiti', lat: -17.54, lng: -149.57, // Papeete
    words: { water:['pape','pape'], fire:['auahi','auahi'], sun:['mahana','mahana'], moon:['marama','marama'], mother:['māmā','maːmaː'], father:['pāpā','paːpaː'], eat:['\'amu','ʔamu'], drink:['inu','inu'], love:['here','heɾe'], heart:['mafatu','mafatu'], tree:['tumu rā\'au','tumu raːʔau'], house:['fare','faɾe'], dog:['\'ūrī','ʔuːɾiː'], cat:['mimi','mimi'], hand:['rima','ɾima'], eye:['mata','mata'], hello:['\'ia ora na','ʔia oɾa na'], thanks:['māuruuru','maːuɾuʔuɾu'], one:['hō\'ē','hoːʔeː'], good:['maita\'i','maitaʔi'] }},
  niu: { name: 'Niuean', native: 'Vagahau Niue', lat: -19.05, lng: -169.92, // Alofi
    words: { water:['vai','vai'], fire:['afi','afi'], sun:['lā','laː'], moon:['mahina','mahina'], mother:['matua-fifine','matua fifine'], father:['matua-taane','matua taːne'], eat:['kai','kai'], drink:['inu','inu'], love:['fakaalofa','fakaalofa'], heart:['fatu','fatu'], tree:['akau','akau'], house:['fale','fale'], dog:['kuli','kuli'], cat:['pusi','pusi'], hand:['lima','lima'], eye:['mata','mata'], hello:['fakaalofa atu','fakaalofa atu'], thanks:['fakaaue','fakaaue'], one:['taha','taha'], good:['mitaki','mitaki'] }},
  tvl: { name: 'Tuvaluan', native: 'Te ggana Tuuvalu', lat: -8.52, lng: 179.20, // Funafuti
    words: { water:['vai','vai'], fire:['afi','afi'], sun:['laa','laː'], moon:['masina','masina'], mother:['maatua','maːtua'], father:['tamana','tamana'], eat:['\'ai','ʔai'], drink:['inu','inu'], love:['alofa','alofa'], heart:['fatu','fatu'], tree:['laakau','laːkau'], house:['fale','fale'], dog:['kuli','kuli'], cat:['pusi','pusi'], hand:['lima','lima'], eye:['mata','mata'], hello:['taalofa','taːlofa'], thanks:['fakafetai','fakafetai'], one:['tasi','tasi'], good:['lei','lei'] }},
  rap: { name: 'Rapanui', native: 'Vananga Rapa Nui', lat: -27.15, lng: -109.43, // Hanga Roa
    words: { water:['vai','vai'], fire:['ahi','ahi'], sun:['ra\'ā','raʔaː'], moon:['mahina','mahina'], mother:['matu\'a','matuʔa'], father:['matu\'a tāne','matuʔa taːne'], eat:['kai','kai'], drink:['unu','unu'], love:['hanga','haŋa'], heart:['mahatu','mahatu'], tree:['tumu rākau','tumu raːkau'], house:['hare','haɾe'], dog:['paihega','paiheŋa'], cat:['kati','kati'], hand:['rima','ɾima'], eye:['mata','mata'], hello:['\'iorana','ʔioɾana'], thanks:['maururu','mauɾuɾu'], one:['tahi','tahi'], good:['riva','ɾiva'] }},
  rar: { name: 'Cook Islands Māori', native: 'Reo Māori Kuki Āirani', lat: -21.21, lng: -159.79, // Rarotonga
    words: { water:['vai','vai'], fire:['ahi','ahi'], sun:['rā','raː'], moon:['marama','marama'], mother:['māmā','maːmaː'], father:['pāpā','paːpaː'], eat:['kai','kai'], drink:['inu','inu'], love:['aro\'a','aɾoʔa'], heart:['ngākau','ŋaːkau'], tree:['rākau','raːkau'], house:['\'are','ʔaɾe'], dog:['kurī','kuɾiː'], cat:['ngiao','ŋiao'], hand:['rima','ɾima'], eye:['mata','mata'], hello:['kia orāna','kia oɾaːna'], thanks:['meitaki','meitaki'], one:['ta\'i','taʔi'], good:['meitaki','meitaki'] }},
  // Micronesian
  mh: { name: 'Marshallese', native: 'Kajin Majeḷ', lat: 7.09, lng: 171.38, // Majuro
    words: { water:['dān','tʲan'], fire:['kijeek','kʲideːk'], sun:['aḷ','alˠ'], moon:['aḷḷōñ','alˠːənˤ'], mother:['jinō','tʲinə'], father:['jemān','tʲemʲan'], eat:['ṃōñā','mˠəɲˠaː'], drink:['idaak','idˠaːkʲ'], love:['yokwe','jokwe'], heart:['bōro','pˠəɾə'], tree:['wōjke','wətʲkʲe'], house:['eṃ','emˠ'], dog:['kidu','kʲidˠu'], cat:['kuuj','kʲuːtʲ'], hand:['pā','pˠaː'], eye:['mej','mʲetʲ'], hello:['yokwe','jokwe'], thanks:['koṃṃool','komˠːoːlˠ'], one:['juon','tʲuon'], good:['eṃṃan','emˠːanʲ'] }},
  gil: { name: 'Gilbertese', native: 'Taetae ni Kiribati', lat: 1.45, lng: 173.04, // Tarawa
    words: { water:['ran','ɾan'], fire:['ai','ai'], sun:['tai','tai'], moon:['namwakaina','namʷakaina'], mother:['tinau','tinau'], father:['tamau','tamau'], eat:['amwarake','amʷaɾake'], drink:['nima','nima'], love:['tangira','taŋiɾa'], heart:['nano','nano'], tree:['kai','kai'], house:['auti','auti'], dog:['kamea','kamea'], cat:['katu','katu'], hand:['bai','bai'], eye:['mata','mata'], hello:['mauri','mauɾi'], thanks:['ko rabwa','ko ɾabʷa'], one:['teuana','teuana'], good:['raoiroi','ɾaoiɾoi'] }},
  ch: { name: 'Chamorro', native: 'Chamoru', lat: 13.47, lng: 144.75, // Hagåtña
    words: { water:['hånom','haːnom'], fire:['guafi','ɡʷafi'], sun:['atdao','atdao'], moon:['pulan','pulan'], mother:['nana','nana'], father:['tata','tata'], eat:['kånno\'','kaːnnoʔ'], drink:['gimen','ɡimen'], love:['guaiya','ɡʷajja'], heart:['korason','koɾason'], tree:['trongkon','tɾoŋkon'], house:['guma\'','ɡumaʔ'], dog:['ga\'lågu','ɡaʔlaːɡu'], cat:['katu','katu'], hand:['kånnai','kaːnnai'], eye:['matå','mataː'], hello:['håfa adai','haːfa adai'], thanks:['si yu\'os ma\'åse\'','si juʔos maʔaːseʔ'], one:['unu','unu'], good:['maolek','maolek'] }},
  // Austronesian (Timor)
  tet: { name: 'Tetum', native: 'Tetun', lat: -8.56, lng: 125.58, // Dili
    words: { water:['bee','beː'], fire:['ahi','ahi'], sun:['loron','loɾon'], moon:['fulan','fulan'], mother:['inan','inan'], father:['aman','aman'], eat:['han','han'], drink:['hemu','hemu'], love:['domin','domin'], heart:['fuan','fuan'], tree:['ai','ai'], house:['uma','uma'], dog:['asu','asu'], cat:['busa','busa'], hand:['liman','liman'], eye:['matan','matan'], hello:['bondia','bondia'], thanks:['obrigadu','obɾiɡadu'], one:['ida','ida'], good:['di\'ak','diʔak'] }},
  // English-based creole (Vanuatu)
  bi: { name: 'Bislama', native: 'Bislama', lat: -17.74, lng: 168.31, // Port Vila
    words: { water:['wota','wota'], fire:['faea','faea'], sun:['san','san'], moon:['mun','mun'], mother:['mama','mama'], father:['papa','papa'], eat:['kakae','kakae'], drink:['dring','driŋ'], love:['laekem','laekem'], heart:['hat','hat'], tree:['tri','tri'], house:['haos','haos'], dog:['dog','doɡ'], cat:['pusi','pusi'], hand:['han','han'], eye:['ae','ae'], hello:['halo','halo'], thanks:['tankyu','taŋkju'], one:['wan','wan'], good:['gud','ɡud'] }},
  // Pama-Nyungan (Australia)
  pjt: { name: 'Pitjantjatjara', native: 'Pitjantjatjara', lat: -25.34, lng: 131.04, // Yulara/Uluru
    words: { water:['kapi','kapi'], fire:['waru','waɻu'], sun:['tjintu','cintu'], moon:['pira','piɻa'], mother:['ngunytju','ŋuɲcu'], father:['mama','mama'], eat:['ngalkuni','ŋalkuni'], drink:['tjikini','cikini'], love:['mukulya','mukulja'], heart:['kurunpa','kuɻunpa'], tree:['punu','punu'], house:['ngura','ŋuɻa'], dog:['papa','papa'], cat:['ngaya','ŋaja'], hand:['mara','maɻa'], eye:['kuru','kuɻu'], hello:['palya','palja'], thanks:['palya','palja'], one:['kutju','kucu'], good:['palya','palja'] }},
  wbp: { name: 'Warlpiri', native: 'Warlpiri', lat: -22.26, lng: 131.79, // Yuendumu
    words: { water:['ngapa','ŋapa'], fire:['warlu','waɻlu'], sun:['wantajarra','wantadʒaɻa'], moon:['pirli','piɻli'], mother:['ngati','ŋati'], father:['kirda','kiɻda'], eat:['ngarni','ŋaɻni'], drink:['purrami','puɻami'], love:['jaru','dʒaɻu'], heart:['pikirri','pikiɻi'], tree:['watiya','watija'], house:['ngurra','ŋuɻa'], dog:['jarntu','dʒaɳʈu'], cat:['mungalpa','muŋalpa'], hand:['rdaka','ɖaka'], eye:['milpa','milpa'], hello:['palka','palka'], thanks:['ngantitu','ŋantitu'], one:['jinta','dʒinta'], good:['ngumarna','ŋumaɳa'] }},
  // === Phase 3F: Tibeto-Burman, Indonesian/Philippine, misc ===
  // Tibeto-Burman
  mni: { name: 'Meitei', native: 'ꯃꯩꯇꯩꯂꯣꯟ', lat: 24.81, lng: 93.94, // Imphal
    words: { water:['ꯏꯁꯤꯡ','isiŋ'], fire:['ꯃꯩ','mei'], sun:['ꯅꯨꯃꯤꯠ','numit'], moon:['ꯊꯥ','tʰaː'], mother:['ꯏꯃꯥ','ima'], father:['ꯏꯄꯥ','ipa'], eat:['ꯆꯥꯕ','tʃaːba'], drink:['ꯊꯛꯄ','tʰakpa'], love:['ꯅꯨꯡꯁꯤꯕ','nuŋsiba'], heart:['ꯊꯋꯥꯏ','tʰawai'], tree:['ꯐꯨꯂꯥꯡ','pʰulaŋ'], house:['ꯌꯨꯝ','jum'], dog:['ꯍꯨꯏ','hui'], cat:['ꯍꯧꯗꯣꯡ','houdoŋ'], hand:['ꯈꯨꯠ','kʰut'], eye:['ꯃꯤꯠ','mit'], hello:['ꯈꯨꯔꯨꯝꯖꯔꯤ','kʰuɾumdʒaɾi'], thanks:['ꯊꯥꯒꯠꯆꯔꯤ','tʰaːɡattʃaɾi'], one:['ꯑꯃ','ama'], good:['ꯐꯕ','pʰaba'] }},
  new: { name: 'Newari', native: 'नेपाल भाषा', lat: 27.71, lng: 85.32, // Kathmandu
    words: { water:['ला','la'], fire:['मि','mi'], sun:['सूर्य','surja'], moon:['तिमिला','timila'], mother:['मां','maː'], father:['बौ','bau'], eat:['नये','naje'], drink:['तये','taje'], love:['माय','maj'], heart:['नुगः','nuɡʌ'], tree:['सिमा','sima'], house:['छें','tʃʰẽ'], dog:['खिचा','kʰitʃa'], cat:['भौंचा','bʰaũtʃa'], hand:['ल्हाः','lʱaː'], eye:['मिखा','mikʰa'], hello:['ज्वजलपा','dʒwadʒalpa'], thanks:['सुभाय','subʱaj'], one:['छ','tʃʰa'], good:['बःलाः','bʌlaː'] }},
  brx: { name: 'Bodo', native: 'बर\'', lat: 26.40, lng: 90.27, // Kokrajhar, Assam
    words: { water:['दै','dɔi'], fire:['वाथार','watʰaɾ'], sun:['सान','san'], moon:['ओखाफोर','okʰapʰoɾ'], mother:['आय','aj'], father:['आफा','apʰa'], eat:['जा','dʒa'], drink:['लोङ','loŋ'], love:['मोनदोङ','mondoŋ'], heart:['फिथा','pʰitʰa'], tree:['बिजि','bidʒi'], house:['नो','no'], dog:['सैमा','saima'], cat:['मौजि','maudʒi'], hand:['आखाइ','akʰai'], eye:['मेगन','meɡon'], hello:['खुशी','kʰuʃi'], thanks:['साबार','sabaɾ'], one:['से','se'], good:['मोजां','modʒaŋ'] }},
  lus: { name: 'Mizo', native: 'Mizo ṭawng', lat: 23.73, lng: 92.72, // Aizawl
    words: { water:['tui','tui'], fire:['mei','mei'], sun:['ni','ni'], moon:['thla','tʰla'], mother:['nu','nu'], father:['pa','pa'], eat:['ei','ei'], drink:['in','in'], love:['hmangaih','hmaŋai'], heart:['thinlung','tʰinluŋ'], tree:['thingkung','tʰiŋkuŋ'], house:['in','in'], dog:['ui','ui'], cat:['zawhte','zawʔte'], hand:['kut','kut'], eye:['mit','mit'], hello:['chibai','tʃibai'], thanks:['ka lawm e','ka lawm e'], one:['pakhat','pakʰat'], good:['ṭha','tʰa'] }},
  dz: { name: 'Dzongkha', native: 'རྫོང་ཁ', lat: 27.47, lng: 89.64, // Thimphu
    words: { water:['ཆུ','tɕʰu'], fire:['མེ','me'], sun:['ཉི་མ','ɲima'], moon:['ཟླ་བ','dawa'], mother:['ཨ་མ','ama'], father:['ཨ་པ','apa'], eat:['བཟའ','za'], drink:['འཐུང','tʰuŋ'], love:['དགའ་བ','ɡawa'], heart:['སྙིང','ɲiŋ'], tree:['ཤིང','ɕiŋ'], house:['ཁྱིམ','tɕim'], dog:['ཁྱི','tɕi'], cat:['བྱི་ལ','bila'], hand:['ལག་པ','lakpa'], eye:['མིག','mik'], hello:['ཀུ་ཟུ་ཟངས་པོ་ལ','kuzu zaŋpo la'], thanks:['བཀྲིན་ཆེ','kadrintɕe'], one:['གཅིག','tɕik'], good:['ལེགས་ཤོམ','lekɕom'] }},
  // Indonesian (large regional)
  min: { name: 'Minangkabau', native: 'Baso Minangkabau', lat: -0.95, lng: 100.35, // Padang
    words: { water:['aia','aia'], fire:['api','api'], sun:['matoari','matoaɾi'], moon:['bulan','bulan'], mother:['amak','amaʔ'], father:['abak','abaʔ'], eat:['makan','makan'], drink:['minum','minum'], love:['cinto','tʃinto'], heart:['ati','ati'], tree:['kayu','kaju'], house:['rumah','ɾumah'], dog:['anjiang','aɲdʒiaŋ'], cat:['kuciang','kutʃiaŋ'], hand:['tangan','taŋan'], eye:['mato','mato'], hello:['salam','salam'], thanks:['tarimo kasiah','taɾimo kasiah'], one:['ciek','tʃie'], good:['rancak','ɾantʃak'] }},
  ban: { name: 'Balinese', native: 'Basa Bali', lat: -8.65, lng: 115.21, // Denpasar
    words: { water:['yeh','jeh'], fire:['api','api'], sun:['matanai','matanai'], moon:['bulan','bulan'], mother:['meme','meme'], father:['bapa','bapa'], eat:['ngajeng','ŋadʒeŋ'], drink:['nginem','ŋinem'], love:['tresna','tɾesna'], heart:['manah','manah'], tree:['punyan','puɲan'], house:['umah','umah'], dog:['cicing','tʃitʃiŋ'], cat:['meong','meoŋ'], hand:['tangan','taŋan'], eye:['mata','mata'], hello:['om swastiastu','om swastiastu'], thanks:['matur suksma','matuɾ suksma'], one:['besik','besik'], good:['becik','betʃik'] }},
  ace: { name: 'Acehnese', native: 'Bahsa Acèh', lat: 5.55, lng: 95.33, // Banda Aceh
    words: { water:['ie','ie'], fire:['apui','apui'], sun:['mata uroe','mata uɾoe'], moon:['buleun','buleun'], mother:['mak','maʔ'], father:['ayah','ajah'], eat:['pajôh','padʒoh'], drink:['jep','dʒep'], love:['gaséh','ɡasɛh'], heart:['até','atɛ'], tree:['bak','baʔ'], house:['rumoh','ɾumoh'], dog:['asèe','asɛː'], cat:['miong','mioŋ'], hand:['jaroe','dʒaɾoe'], eye:['mata','mata'], hello:['assalamualaikum','assalamualaikum'], thanks:['trimong gaséh','tɾimoŋ ɡasɛh'], one:['sa','sa'], good:['gèt','ɡɛt'] }},
  bug: { name: 'Buginese', native: 'Basa Ugi', lat: -4.13, lng: 120.00, // Sengkang (Bugis heartland, Wajo regency)
    words: { water:['uwai','uwai'], fire:['api','api'], sun:['mata esso','mata esːo'], moon:['uleng','uleŋ'], mother:['indo','indo'], father:['ambo','ambo'], eat:['manre','manɾe'], drink:['minung','minuŋ'], love:['élo','élo'], heart:['ati','ati'], tree:['aju','adʒu'], house:['bola','bola'], dog:['asu','asu'], cat:['meong','meoŋ'], hand:['lima','lima'], eye:['mata','mata'], hello:['tabe','tabe'], thanks:['kuru sumange','kuɾu sumaŋe'], one:['séddi','sédːi'], good:['makanja','makandʒa'] }},
  // Philippine (Visayan/Bikolano)
  war: { name: 'Waray', native: 'Wináray', lat: 11.24, lng: 124.99, // Tacloban
    words: { water:['tubig','tubiɡ'], fire:['kalayo','kalajɔ'], sun:['adlaw','adlaw'], moon:['bulan','bulan'], mother:['nanay','nanaj'], father:['tatay','tataj'], eat:['kaon','kaʔon'], drink:['inom','ʔinɔm'], love:['gugma','ɡuɡma'], heart:['kasingkasing','kasiŋkasiŋ'], tree:['kahoy','kahɔj'], house:['balay','balaj'], dog:['ayam','ajam'], cat:['misay','misaj'], hand:['kamot','kamɔt'], eye:['mata','mata'], hello:['maupay nga aga','maʔupaj ŋa aɡa'], thanks:['salamat','salamat'], one:['usa','ʔusa'], good:['maupay','maʔupaj'] }},
  bik: { name: 'Bikol Central', native: 'Bikol', lat: 13.62, lng: 123.18, // Naga
    words: { water:['tubig','tubiɡ'], fire:['kalayo','kalajɔ'], sun:['aldaw','aldaw'], moon:['bulan','bulan'], mother:['nanay','nanaj'], father:['tatay','tataj'], eat:['kakanon','kakanon'], drink:['inumon','inumon'], love:['pagkamoot','paɡkamoʔot'], heart:['puso','puso'], tree:['kahoy','kahɔj'], house:['harong','haɾoŋ'], dog:['ayam','ajam'], cat:['ikos','ikos'], hand:['kamot','kamɔt'], eye:['mata','mata'], hello:['maugmang aga','maʔuɡmaŋ aɡa'], thanks:['dios mabalos','dios mabalos'], one:['saro','saɾo'], good:['marhay','maɾhaj'] }},
  // Bantu (filling Phase 3A gap)
  tum: { name: 'Tumbuka', native: 'ChiTumbuka', lat: -11.46, lng: 34.02, // Mzuzu
    words: { water:['maji','madʒi'], fire:['moto','moto'], sun:['zuva','zuva'], moon:['mwezi','mwezi'], mother:['amama','amama'], father:['adada','adada'], eat:['kurya','kuɾja'], drink:['kumwa','kumwa'], love:['kutemwa','kutemwa'], heart:['mtima','mtima'], tree:['khuni','kʰuni'], house:['nyumba','ɲumba'], dog:['ncheŵe','ntʃewe'], cat:['chona','tʃona'], hand:['woko','woko'], eye:['jiso','dʒiso'], hello:['monire','moniɾe'], thanks:['yewo','jewo'], one:['cimoza','tʃimoza'], good:['cwemi','tʃwemi'] }},
  // === Phase 3G: African Nilotic/Cushitic/Berber + South Asian Indo-Aryan ===
  // Nilo-Saharan (Nilotic)
  din: { name: 'Dinka', native: 'Thuɔŋjäŋ', lat: 4.85, lng: 31.58, // Juba area
    words: { water:['piu','piu'], fire:['mac','matʃ'], sun:['akɔ̈l','akɔl'], moon:['pɛɛi','pɛːi'], mother:['man','man'], father:['wun','wun'], eat:['cam','tʃam'], drink:['dek','dek'], love:['nhiär','ɲiar'], heart:['piöu','piɔu'], tree:['tim','tim'], house:['ɣöt','ɣɔt'], dog:['jɔ̈ŋ','dʒɔŋ'], cat:['gec','ɡetʃ'], hand:['cin','tʃin'], eye:['nyin','ɲin'], hello:['ke yïn','ke jin'], thanks:['alanyiek','alaɲiek'], one:['tök','tɔk'], good:['piath','piatʰ'] }},
  nus: { name: 'Nuer', native: 'Thok Nath', lat: 9.56, lng: 31.63, // Bentiu/Malakal
    words: { water:['pi','pi'], fire:['mäc','mɛtʃ'], sun:['caŋ','tʃaŋ'], moon:['pay','paj'], mother:['maar','maːr'], father:['gwaar','ɡwaːr'], eat:['cam','tʃam'], drink:['math','matʰ'], love:['nhok','ɲok'], heart:['lëŋ','lɛŋ'], tree:['jïath','dʒiatʰ'], house:['dööl','dɔːl'], dog:['jiek','dʒiek'], cat:['gec','ɡetʃ'], hand:['tet','tet'], eye:['wäk','wɛk'], hello:['malɛ','malɛ'], thanks:['lɛrnyä','lɛɾɲa'], one:['kɛl','kɛl'], good:['gɔaa','ɡɔaː'] }},
  luo: { name: 'Luo', native: 'Dholuo', lat: -0.10, lng: 34.75, // Kisumu
    words: { water:['pi','pi'], fire:['mach','matʃ'], sun:['chieng\'','tʃieŋ'], moon:['dwe','dwe'], mother:['mama','mama'], father:['baba','baba'], eat:['chiemo','tʃiemo'], drink:['madho','madʱo'], love:['hera','hera'], heart:['chuny','tʃuɲ'], tree:['yath','jatʰ'], house:['ot','ot'], dog:['guok','ɡuok'], cat:['paka','paka'], hand:['lwedo','lwedo'], eye:['wang\'','waŋ'], hello:['misawa','misawa'], thanks:['erokamano','erokamano'], one:['achiel','atʃiel'], good:['maber','maber'] }},
  mas: { name: 'Maasai', native: 'ɔl Maa', lat: -1.08, lng: 35.86, // Narok
    words: { water:['ɛŋare','ɛŋare'], fire:['ɛnkima','ɛŋkima'], sun:['enkolong','eŋkoloŋ'], moon:['ɔlapa','olapa'], mother:['yieyio','jiejio'], father:['papa','papa'], eat:['anya','aɲa'], drink:['oŋg','oŋɡ'], love:['eitalu','eitalu'], heart:['ɔltau','oltau'], tree:['olchani','oltʃani'], house:['eng\'aji','ɛŋadʒi'], dog:['oldia','oldia'], cat:['paka','paka'], hand:['ɛŋaina','ɛŋaina'], eye:['ɛŋɔnyek','ɛŋɔɲek'], hello:['sopa','sopa'], thanks:['ashe','aʃe'], one:['obo','obo'], good:['sidai','sidai'] }},
  // Afro-Asiatic (Cushitic)
  // (sid Sidamo moved to later block — see end of LANG_DATA, audit §6.28 dedup Session 4)
  aa: { name: 'Afar', native: 'Qafaraf', lat: 11.57, lng: 41.43, // Asaita
    words: { water:['lee','leː'], fire:['gira','ɡira'], sun:['ayró','ajɾɔ'], moon:['alsá','alsa'], mother:['inaá','inaː'], father:['abbá','abːa'], eat:['akmé','akme'], drink:['kibé','kibe'], love:['kicimá','kitʃima'], heart:['lubbí','lubːi'], tree:['caxá','tʃaχa'], house:['qarí','qari'], dog:['kuduú','kuduː'], cat:['dummú','dummu'], hand:['gabá','ɡaba'], eye:['intí','inti'], hello:['nagá','naɡa'], thanks:['qungúsa','quŋɡusa'], one:['enek','enek'], good:['meqé','meqe'] }},
  // Afro-Asiatic (Berber, Morocco)
  shi: { name: 'Tashelhit', native: 'Tashelḥit', lat: 30.42, lng: -9.60, // Agadir
    words: { water:['aman','aman'], fire:['timsi','timsi'], sun:['tafukt','tafukt'], moon:['ayyur','ajːuɾ'], mother:['imma','imːa'], father:['baba','baba'], eat:['čč','tʃː'], drink:['ssu','sːu'], love:['tayri','tajɾi'], heart:['ul','ul'], tree:['aseklu','aseklu'], house:['tigemmi','tiɡemːi'], dog:['aydi','ajdi'], cat:['amuš','amuʃ'], hand:['afus','afus'], eye:['tiṭṭ','titˤː'], hello:['azul','azul'], thanks:['tanmmirt','tanmːiɾt'], one:['yan','jan'], good:['ifulki','ifulki'] }},
  rif: { name: 'Tarifit', native: 'Tarifiyt', lat: 35.25, lng: -3.93, // Al Hoceima
    words: { water:['aman','aman'], fire:['thmessi','θmesːi'], sun:['dhish','ðiʃ'], moon:['ayyur','ajːuɾ'], mother:['yemma','jemːa'], father:['baba','baba'], eat:['eč','etʃ'], drink:['su','su'], love:['tayri','tajɾi'], heart:['ul','ul'], tree:['asɣar','asʁaɾ'], house:['thaddart','θadːaɾt'], dog:['aydi','ajdi'], cat:['mucc','mutʃː'], hand:['fus','fus'], eye:['thiṭ','θitˤ'], hello:['azul','azul'], thanks:['tanmirt','tanmiɾt'], one:['ijj','idʒː'], good:['šenmu','ʃenmu'] }},
  // Indo-Aryan (large missing)
  mwr: { name: 'Marwari', native: 'मारवाड़ी', lat: 26.24, lng: 73.02, // Jodhpur
    words: { water:['पाणी','paːɳiː'], fire:['आग','aːɡ'], sun:['सूरज','suːɾədʒ'], moon:['चांद','tʃãːd'], mother:['मा','maː'], father:['बाप','baːp'], eat:['खाणो','kʰaːɳo'], drink:['पीणो','piːɳo'], love:['मायड़','maːjəɽ'], heart:['हियो','hijoʔ'], tree:['रूख','ɾuːkʰ'], house:['घर','ɡʱəɾ'], dog:['कुत्तो','kutːoʔ'], cat:['मीनी','miːniː'], hand:['हाथ','haːtʰ'], eye:['आंख','aːŋkʰ'], hello:['खम्मा घणी','kʰəmːaː ɡʱəɳiː'], thanks:['धन्यवाद','dʱənjəbaːd'], one:['एक','eːk'], good:['बढ़िया','bəɽʱijaː'] }},
  bgc: { name: 'Haryanvi', native: 'हरयाणवी', lat: 28.90, lng: 76.59, // Rohtak
    words: { water:['पाणी','paːɳiː'], fire:['आग','aːɡ'], sun:['सूरज','suːɾədʒ'], moon:['चांद','tʃãːd'], mother:['माई','maːiː'], father:['बापू','baːpuː'], eat:['खाणा','kʰaːɳaː'], drink:['पीणा','piːɳaː'], love:['मोहब्बत','mohabːət'], heart:['दिल','dɪl'], tree:['पेड़','peːɽ'], house:['घर','ɡʱəɾ'], dog:['कुत्ता','kutːaː'], cat:['बिल्ली','bɪlːiː'], hand:['हाथ','haːtʰ'], eye:['आख','aːkʰ'], hello:['राम राम','ɾaːm ɾaːm'], thanks:['धन्यवाद','dʱənjəbaːd'], one:['एक','eːk'], good:['चोखा','tʃoːkʰaː'] }},
  ks: { name: 'Kashmiri', native: 'کٲشُر', lat: 34.08, lng: 74.80, // Srinagar
    words: { water:['آب','ab'], fire:['نار','naːɾ'], sun:['آفتاب','aːftaːb'], moon:['زۆن','zuːn'], mother:['مۄج','mɔdʒ'], father:['مۆل','muːl'], eat:['کھیون','kʰeːjɔn'], drink:['چھیون','tʃʰeːjɔn'], love:['محبت','muhabːətʰ'], heart:['دِل','dɪl'], tree:['کُل','kul'], house:['گَر','ɡəɾ'], dog:['ہَون','huːn'], cat:['بۅز','buːz'], hand:['اَتھ','atʰ'], eye:['چھَش','tʃəʃ'], hello:['اسلام علیکم','assalaːmu ʕalaikum'], thanks:['شُکریہ','ʃukrijaː'], one:['اَکھ','akʰ'], good:['خۄب','xuːb'] }},
  kok: { name: 'Konkani', native: 'कोंकणी', lat: 15.50, lng: 73.83, // Panaji, Goa
    words: { water:['उदक','udək'], fire:['उज्जो','udʒːo'], sun:['सूर्य','suɾjə'], moon:['चंद्र','tʃəndɾə'], mother:['आवय','aːʋəj'], father:['बापुय','baːpuj'], eat:['खांव','kʰaːũ'], drink:['पिएंव','pieːũ'], love:['मोग','moɡ'], heart:['काळीज','kaːɭiːdʒ'], tree:['रूख','ɾuːkʰ'], house:['घर','ɡʱəɾ'], dog:['सुणें','suɳẽ'], cat:['माजर','maːdʒəɾ'], hand:['हात','haːt'], eye:['दोळो','doːɭo'], hello:['नमस्कार','nəməskaːɾ'], thanks:['देव बरें करूं','deʋ bəɾẽ kəɾũ'], one:['एक','eːk'], good:['बरो','bəɾo'] }},
  // === Phase 3H: Sinitic (Chinese) varieties ===
  // Min branch
  mnp: { name: 'Min Bei (Northern Min)', native: '建瓯话', lat: 27.04, lng: 118.30, // Jian'ou
    words: { water:['水','sui˧˧'], fire:['火','xui˧˧'], sun:['日头','ni˥˥tʰau˨˨'], moon:['月光','ŋye˦˦kɔŋ˥˦'], mother:['妈','ma˧˧'], father:['爹','tia˥˦'], eat:['食','sie˦˦'], drink:['啜','tʃʰœ˦˦'], love:['爱','ai˨˩'], heart:['心','siŋ˥˦'], tree:['树','tʃʰy˨˩'], house:['厝','tsʰu˨˩'], dog:['狗','kɛu˧˧'], cat:['猫','miau˥˦'], hand:['手','siu˧˧'], eye:['目睭','mu˦˦tʃiu˥˦'], hello:['你好','ny˧˧hau˧˧'], thanks:['多谢','to˥˦sia˨˨'], one:['一','i˦˦'], good:['好','hau˧˧'] }},
  // (cpx Pu-Xian Min moved to later block — see end of LANG_DATA, audit §6.28 dedup Session 4)
  nan_te: { name: 'Teochew', native: '潮州话', lat: 23.35, lng: 116.68, // Shantou
    words: { water:['水','tsui˥˧'], fire:['火','hue˥˧'], sun:['日头','ʒik˥tʰau˥˥'], moon:['月娘','gueʔ˥niũ˥˥'], mother:['妈','ma˧˧'], father:['爸','pa˥˥'], eat:['食','tsiaʔ˥'], drink:['啉','lim˧˧'], love:['爱','ai˨˩˧'], heart:['心','sim˧˧'], tree:['树','tsʰiu˩˩'], house:['厝','tsʰu˨˩˧'], dog:['狗','kau˥˧'], cat:['猫','niau˧˧'], hand:['手','tsʰiu˥˧'], eye:['目','mak˥'], hello:['汝好','lɯ˥˧ho˥˧'], thanks:['感谢','kam˥˧sia˩˩'], one:['一','tsek˨'], good:['好','ho˥˧'] }},
  // Yue (Cantonese branch)
  yue_ts: { name: 'Taishanese', native: '台山话', lat: 22.25, lng: 112.79, // Taishan
    words: { water:['水','lui˧˧'], fire:['火','fɔ˧˧'], sun:['日头','ɲit˨hau˧˧'], moon:['月光','ɲut˧kwɔŋ˨˨'], mother:['阿妈','a˧˧ma'], father:['阿爸','a˧˧pa'], eat:['食','ɬik˧'], drink:['饮','ɲim˧˧'], love:['爱','ɔi˧˧'], heart:['心','ɬim˨˨'], tree:['树','ɬi˧˨'], house:['屋','uk˥'], dog:['狗','kau˧˧'], cat:['猫','miau˨˨'], hand:['手','ɬau˧˧'], eye:['眼','ŋan˧˧'], hello:['你好','nei˧˧hau˧˧'], thanks:['多谢','ɔ˨˨ɬɛ˧˨'], one:['一','it˥'], good:['好','hau˧˧'] }},
  // Wu branch (additional varieties — wuu_wz / wuu_sz moved to later block, audit §6.28 dedup Session 4)
  // Independent / regional Sinitic
  czh: { name: 'Hui Chinese', native: '徽州话', lat: 29.71, lng: 118.32, // Tunxi (Huangshan)
    words: { water:['水','ɕy˦˦'], fire:['火','xu˦˦'], sun:['日头','ʐɨ˨˦tʰəu'], moon:['月光','yo˨˧kuaŋ˨˦'], mother:['妈','ma˧˧'], father:['爸','pa˦˦'], eat:['吃','tʃʰi˨˦'], drink:['喝','xa˨˦'], love:['爱','ai˦˦'], heart:['心','ɕin˧˧'], tree:['树','ɕy˦˦'], house:['屋','uʔ˨˦'], dog:['狗','kəu˦˦'], cat:['猫','mau˧˧'], hand:['手','səu˦˦'], eye:['眼睛','ŋæ˦˦tɕin'], hello:['你好','n˦˦hau˦˦'], thanks:['谢谢','ɕie˦˦ɕie'], one:['一','iʔ˨˦'], good:['好','hau˦˦'] }},
  cnp: { name: 'Pinghua', native: '平话', lat: 22.82, lng: 108.32, // Nanning
    words: { water:['水','ɬui˦˨'], fire:['火','fu˦˨'], sun:['日头','ŋit˨tʰɐu˦˦'], moon:['月光','ŋyt˧kwɔŋ˦˦'], mother:['阿妈','a˦˦ma˦˦'], father:['阿爸','a˦˦pa˦˦'], eat:['食','sɐk˨'], drink:['饮','ɐm˦˨'], love:['爱','ɔi˦˦'], heart:['心','sɐm˦˦'], tree:['树','sy˦˦'], house:['屋','ɔk˨'], dog:['狗','kɐu˦˨'], cat:['猫','mau˦˦'], hand:['手','sɐu˦˨'], eye:['眼','ŋɐn˦˨'], hello:['你好','nei˦˨hou˦˨'], thanks:['多谢','tɔ˦˦tsɛ˦˦'], one:['一','jɐt˨'], good:['好','hou˦˨'] }},
  // Mandarin sub-varieties
  zh_jh: { name: 'Jianghuai Mandarin', native: '江淮官话', lat: 32.06, lng: 118.80, // Nanjing
    words: { water:['水','suei˨˩˦'], fire:['火','xuo˨˩˦'], sun:['日头','ʐəʔ˦tʰəu˨˦'], moon:['月亮','yeʔ liaŋ'], mother:['妈','ma˧˧'], father:['爸','pa˥˥'], eat:['吃','tʂʰʔ˥˥'], drink:['喝','xəʔ˥˥'], love:['爱','ɛ˦˦'], heart:['心','ɕin˧˧'], tree:['树','sɿ˦˦'], house:['房子','faŋ˨˦tsɿ'], dog:['狗','kəu˨˩˦'], cat:['猫','mɔ˧˧'], hand:['手','səu˨˩˦'], eye:['眼','jɛn˨˩˦'], hello:['你好','ni˨˩˦xau˨˩˦'], thanks:['谢谢','ɕje˦˦ɕje'], one:['一','iʔ˥˥'], good:['好','hau˨˩˦'] }},
  zh_tj: { name: 'Tianjin Mandarin', native: '天津话', lat: 39.13, lng: 117.20, // Tianjin
    words: { water:['水','ʂwei˨˩˧'], fire:['火','xwo˨˩˧'], sun:['日头','ʐʅ˥˩tʰoʊ˨˦'], moon:['月亮','ɥɛ˥˩ljaŋ'], mother:['妈','ma˩˩'], father:['爸','pa˥˩'], eat:['吃','tʂʰɨ˩˩'], drink:['喝','xɤ˩˩'], love:['爱','ai˥˩'], heart:['心','ɕin˩˩'], tree:['树','ʂu˥˩'], house:['房子','faŋ˨˦tsɨ'], dog:['狗','koʊ˨˩˧'], cat:['猫','mau˩˩'], hand:['手','ʂoʊ˨˩˧'], eye:['眼睛','jɛn˨˩˧tɕiŋ'], hello:['你好','ni˨˩˧xau˨˩˧'], thanks:['谢谢','ɕjɛ˥˩ɕjɛ'], one:['一','i˩˩'], good:['好','xau˨˩˧'] }},
  zh_lz: { name: 'Lanyin Mandarin', native: '兰银官话', lat: 36.06, lng: 103.83, // Lanzhou
    words: { water:['水','sui˥˧'], fire:['火','xo˥˧'], sun:['日头','ʐɨ˨˦tʰəu˨˦'], moon:['月亮','yɛ˦˦ljaŋ'], mother:['妈','ma˧˧'], father:['爸','pa˥˧'], eat:['吃','tʂʰɨ˧˧'], drink:['喝','xɛ˧˧'], love:['爱','ɛ˨˦'], heart:['心','ɕin˧˩'], tree:['树','sɨ˨˦'], house:['房子','faŋ˨˦tsɨ'], dog:['狗','kəu˥˧'], cat:['猫','mau˧˧'], hand:['手','sou˥˧'], eye:['眼睛','jɛn˥˧tɕin'], hello:['你好','ni˥˧xau˥˧'], thanks:['谢谢','ɕjɛ˨˦ɕjɛ'], one:['一','ji˧˧'], good:['好','xau˥˧'] }},
  // Dungan (Mandarin in Cyrillic, Central Asia)
  dng: { name: 'Dungan', native: 'Хуэйзў йүян', lat: 42.84, lng: 75.30, // Tokmok, Kyrgyzstan
    words: { water:['щүй','ɕy'], fire:['хуә','xuə'], sun:['жѳтў','ʐətʰu'], moon:['юә','yə'], mother:['ма','ma'], father:['ба','pa'], eat:['чы','tʂʰɨ'], drink:['хә','xə'], love:['ай','ai'], heart:['щин','ɕin'], tree:['фу','fu'], house:['фоңзы','faŋ tsɨ'], dog:['гу','ku'], cat:['мау','mau'], hand:['шў','ʂəu'], eye:['янҗин','jan tɕin'], hello:['ни хау','ni xau'], thanks:['дуәще','duəɕe'], one:['и','i'], good:['хау','xau'] }},
  // === Phase 3I: European minority + Uralic minority ===
  // West Slavic minor
  hsb: { name: 'Upper Sorbian', native: 'Hornjoserbšćina', lat: 51.18, lng: 14.42, // Bautzen
    words: { water:['woda','ˈvɔda'], fire:['woheń','ˈvɔhɛɲ'], sun:['słónco','ˈswʊnt͡sɔ'], moon:['měsačk','ˈmʲɛsat͡ʃk'], mother:['mać','mat͡ɕ'], father:['nan','nan'], eat:['jěsć','jɛst͡ɕ'], drink:['pić','pit͡ɕ'], love:['lubosć','ˈlubɔst͡ɕ'], heart:['wutroba','ˈvutrɔba'], tree:['štom','ʃtɔm'], house:['dom','dom'], dog:['pos','pɔs'], cat:['kóčka','ˈkʊt͡ʃka'], hand:['ruka','ˈruka'], eye:['woko','ˈvɔkɔ'], hello:['witaj','ˈvitaj'], thanks:['dźakuju so','ˈd͡ʑakuju sɔ'], one:['jedyn','ˈjɛdɨn'], good:['dobry','ˈdɔbrɨ'] }},
  csb: { name: 'Kashubian', native: 'Kaszëbsczi', lat: 54.35, lng: 18.65, // Gdańsk area
    words: { water:['woda','ˈvɔda'], fire:['ogniô','ˈɔɡɲɔ'], sun:['słuńce','ˈswuɲt͡sɛ'], moon:['ksãżëc','ˈksɔ̃ʐɨt͡s'], mother:['mëma','ˈmɨma'], father:['tatk','tatk'], eat:['jesc','jɛst͡s'], drink:['pic','pit͡s'], love:['lubota','luˈbɔta'], heart:['serce','ˈsɛrt͡sɛ'], tree:['drzewo','ˈdʐɛvɔ'], house:['chëcz','xɨt͡ʃ'], dog:['pies','pjɛs'], cat:['kòt','kʷɔt'], hand:['rãka','ˈrɔ̃ka'], eye:['òkò','ʷɔkʷɔ'], hello:['witôj','ˈvitwɔj'], thanks:['dzãki','ˈd͡zɔ̃ki'], one:['jeden','ˈjɛdɛn'], good:['dobri','ˈdɔbri'] }},
  // Romance minor
  fur: { name: 'Friulian', native: 'Furlan', lat: 46.06, lng: 13.23, // Udine
    words: { water:['aghe','ˈaɡe'], fire:['fûc','fuːk'], sun:['soreli','soˈreːli'], moon:['lune','ˈlune'], mother:['mari','ˈmaːri'], father:['pari','ˈpaːri'], eat:['mangjâ','maɲˈɲaː'], drink:['bevi','ˈbeːvi'], love:['amôr','aˈmoːr'], heart:['cûr','kuːr'], tree:['arbul','ˈarbul'], house:['cjase','ˈcaːse'], dog:['cjan','caŋ'], cat:['gjat','ɟat'], hand:['man','maŋ'], eye:['voli','ˈvoli'], hello:['mandi','ˈmandi'], thanks:['graziis','ˈɡraːt͡sjis'], one:['un','uŋ'], good:['bon','boŋ'] }},
  ast: { name: 'Asturian', native: 'Asturianu', lat: 43.36, lng: -5.85, // Oviedo
    words: { water:['agua','ˈaɣwa'], fire:['fueu','ˈfweu'], sun:['sol','sol'], moon:['lluna','ˈʎuna'], mother:['ma','ma'], father:['pa','pa'], eat:['comer','koˈmeɾ'], drink:['beber','beˈβeɾ'], love:['amor','aˈmoɾ'], heart:['corazón','koɾaˈθon'], tree:['árbol','ˈaɾβol'], house:['casa','ˈkasa'], dog:['perru','ˈperu'], cat:['gatu','ˈɡatu'], hand:['mano','ˈmano'], eye:['güeyu','ˈɣweʝu'], hello:['hola','ˈola'], thanks:['gracies','ˈɡɾaθjes'], one:['ún','un'], good:['bonu','ˈbonu'] }},
  an: { name: 'Aragonese', native: 'Aragonés', lat: 42.57, lng: -0.55, // Jaca
    words: { water:['augua','ˈawɣwa'], fire:['fuego','ˈfweɣo'], sun:['sol','sol'], moon:['luna','ˈluna'], mother:['mai','maj'], father:['pai','paj'], eat:['minchar','minˈt͡ʃaɾ'], drink:['beber','beˈβeɾ'], love:['amor','aˈmoɾ'], heart:['corazón','koɾaˈθon'], tree:['árbol','ˈaɾβol'], house:['casa','ˈkasa'], dog:['can','kan'], cat:['gato','ˈɡato'], hand:['mano','ˈmano'], eye:['güello','ˈɣweʎo'], hello:['hola','ˈola'], thanks:['gracias','ˈɡɾaθjas'], one:['un','un'], good:['bueno','ˈbweno'] }},
  rup: { name: 'Aromanian', native: 'Armâneashti', lat: 40.52, lng: 22.20, // Veria area
    words: { water:['apâ','ˈapɨ'], fire:['foc','fok'], sun:['soare','ˈsoare'], moon:['lunâ','ˈlunɨ'], mother:['dadâ','ˈdadɨ'], father:['tatâ','ˈtatɨ'], eat:['mâcari','mɨˈkari'], drink:['beari','ˈbeari'], love:['vreari','ˈvreari'], heart:['inimâ','ˈinimɨ'], tree:['arbur','ˈarbur'], house:['casâ','ˈkasɨ'], dog:['câni','ˈkɨni'], cat:['cãtushã','kɨˈtuʃɨ'], hand:['mânâ','ˈmɨnɨ'], eye:['oclju','ˈokʎu'], hello:['bunâ-vã ziuâ','ˈbunɨ vɨ ˈziwɨ'], thanks:['harauâ','haˈrawɨ'], one:['unu','ˈunu'], good:['bun','bun'] }},
  wa: { name: 'Walloon', native: 'Walon', lat: 50.63, lng: 5.57, // Liège
    words: { water:['aiwe','ˈajwə'], fire:['feu','fø'], sun:['solea','soˈlea'], moon:['lune','ˈlyn'], mother:['mame','mam'], father:['peure','pœːr'], eat:['magnî','maˈɲi'], drink:['boere','bweːr'], love:['amour','aˈmuːr'], heart:['cour','kuːr'], tree:['åbe','ˈɔːb'], house:['måjhon','mwaˈʒõ'], dog:['tchin','tʃɛ̃'], cat:['tchèt','tʃɛ'], hand:['min','mɛ̃'], eye:['ouy','uj'], hello:['bondjoû','bõˈd͡ʒu'], thanks:['mèrci','mɛɾˈsi'], one:['onk','õk'], good:['bon','bõ'] }},
  // Uralic minor (Russia)
  kv: { name: 'Komi', native: 'Коми кыв', lat: 61.67, lng: 50.84, // Syktyvkar
    words: { water:['ва','va'], fire:['би','bi'], sun:['шонді','ʃondi'], moon:['тӧлысь','tɵlɨɕ'], mother:['мам','mam'], father:['бать','batʲ'], eat:['сёйны','ɕɵjnɨ'], drink:['юны','junɨ'], love:['радейтны','radʲɛjtnɨ'], heart:['сьӧлӧм','sʲɵlɵm'], tree:['пу','pu'], house:['керка','kerka'], dog:['пон','pon'], cat:['кань','kanʲ'], hand:['ки','ki'], eye:['син','sin'], hello:['видза олан','vidza olan'], thanks:['аттьӧ','atʲtʲɵ'], one:['ӧти','ɵti'], good:['бур','bur'] }},
  udm: { name: 'Udmurt', native: 'удмурт кыл', lat: 56.85, lng: 53.22, // Izhevsk
    words: { water:['ву','vu'], fire:['тыл','tɨl'], sun:['шунды','ʃundɨ'], moon:['толэзь','tolezʲ'], mother:['мумы','mumɨ'], father:['атай','ataj'], eat:['сиыны','sijɨnɨ'], drink:['юыны','jujɨnɨ'], love:['яратон','jaraton'], heart:['сюлэм','sʲulem'], tree:['писпу','pispu'], house:['корка','korka'], dog:['пуны','punɨ'], cat:['коӵыш','kotɕɨʃ'], hand:['ки','ki'], eye:['син','sin'], hello:['ӟечбур','dʑetɕbur'], thanks:['тау','tau'], one:['одӥг','odiɡ'], good:['умой','umoj'] }},
  mhr: { name: 'Meadow Mari', native: 'марий йылме', lat: 56.63, lng: 47.89, // Yoshkar-Ola
    words: { water:['вӱд','vyd'], fire:['тул','tul'], sun:['кече','ketʃe'], moon:['тылзе','tɨlze'], mother:['ава','ava'], father:['ача','atʃa'], eat:['кочкаш','kotʃkaʃ'], drink:['йӱаш','jyaʃ'], love:['йӧратымаш','jøratɨmaʃ'], heart:['шӱм','ʃym'], tree:['пушеҥге','puʃeŋɡe'], house:['пӧрт','pørt'], dog:['пий','pij'], cat:['пырыс','pɨrɨs'], hand:['кид','kid'], eye:['шинча','ʃintʃa'], hello:['салам лийже','salam lijʒe'], thanks:['тау','tau'], one:['ик','ik'], good:['сай','saj'] }},
  myv: { name: 'Erzya', native: 'эрзянь кель', lat: 54.18, lng: 45.18, // Saransk
    words: { water:['ведь','vedʲ'], fire:['тол','tol'], sun:['чи','tʃi'], moon:['ков','kov'], mother:['ава','ava'], father:['тетя','tʲetʲa'], eat:['ярсамс','jarsams'], drink:['симемс','simems'], love:['вечкема','vetʃkema'], heart:['седей','sedej'], tree:['чувто','tʃuvto'], house:['кудо','kudo'], dog:['киска','kiska'], cat:['катка','katka'], hand:['кедь','kedʲ'], eye:['сельме','sʲelʲme'], hello:['шумбрат','ʃumbrat'], thanks:['сюкпря','sʲukprʲa'], one:['вейке','vejke'], good:['паро','paro'] }},
  krl: { name: 'Karelian', native: 'Karjalan kieli', lat: 61.79, lng: 34.36, // Petrozavodsk
    words: { water:['vesi','ˈvesi'], fire:['tuli','ˈtuli'], sun:['päivy','ˈpæjvy'], moon:['kuu','kuː'], mother:['muamo','ˈmuamo'], father:['tuatto','ˈtuatto'], eat:['syvvä','ˈsyvvæ'], drink:['juvva','ˈjuvva'], love:['suvaita','ˈsuvaita'], heart:['süväin','ˈsyvæin'], tree:['puu','puː'], house:['kodi','ˈkodi'], dog:['koiru','ˈkoiru'], cat:['kažin','ˈkaʒin'], hand:['käzi','ˈkæzi'], eye:['silmü','ˈsilmy'], hello:['terveh','ˈterveh'], thanks:['passibo','ˈpassibo'], one:['yksi','ˈyksi'], good:['hyvä','ˈhyvæ'] }},
  // === Phase 3J: Iranian + Turkic + Tibeto-Burman ===
  // Iranian (Caspian + Zagros)
  mzn: { name: 'Mazandarani', native: 'مازرونی', lat: 36.57, lng: 53.06, // Sari
    words: { water:['ئاو','ɒːv'], fire:['تش','tæʃ'], sun:['آفتاب','ɒːftɒːb'], moon:['مونگ','muŋɡ'], mother:['مار','mɒːɾ'], father:['پئر','pæʔɾ'], eat:['خرمسه','xoɾmesæ'], drink:['خواردن','xwɒːɾdæn'], love:['عشق','ɛʃq'], heart:['دل','del'], tree:['دار','dɒːɾ'], house:['سره','særæ'], dog:['سَگ','sæɡ'], cat:['پَشى','pæʃi'], hand:['دس','dæs'], eye:['چش','tʃæʃ'], hello:['سلام','sælɒːm'], thanks:['مرسی','mɛɾsi'], one:['یک','jæk'], good:['خوب','xub'] }},
  glk: { name: 'Gilaki', native: 'گیلکی', lat: 37.28, lng: 49.59, // Rasht
    words: { water:['ائب','ɒːb'], fire:['تش','tæʃ'], sun:['آفتاب','ɒːftɒːb'], moon:['ماه','mɒːh'], mother:['ماری','mɒːɾi'], father:['پر','pær'], eat:['خوردن','xoɾdæn'], drink:['خوردن','xoɾdæn'], love:['عشق','ɛʃq'], heart:['دل','del'], tree:['دار','dɒːɾ'], house:['خنه','xænæ'], dog:['سَگ','sæɡ'], cat:['پیشی','piʃi'], hand:['دس','dæs'], eye:['چوم','tʃum'], hello:['سلام','sælɒːm'], thanks:['مرسی','mɛɾsi'], one:['ای-تا','ɪtɒː'], good:['خوب','xub'] }},
  lrc: { name: 'Lurish', native: 'لۊری', lat: 33.49, lng: 48.36, // Khorramabad
    words: { water:['او','ɒw'], fire:['تش','tæʃ'], sun:['هور','hovaɾ'], moon:['مانگ','mɒːŋɡ'], mother:['دا','dɒː'], father:['بُوَا','buwɒː'], eat:['خواردن','xwɒːɾdæn'], drink:['خواردن','xwɒːɾdæn'], love:['عشق','ɛʃq'], heart:['دل','del'], tree:['دار','dɒːɾ'], house:['حونه','hunæ'], dog:['سَگ','sæɡ'], cat:['پشیله','pæʃilæ'], hand:['دس','dæs'], eye:['چش','tʃæʃ'], hello:['سلام','sælɒːm'], thanks:['مرسی','mɛɾsi'], one:['یَک','jæk'], good:['خاص','xɒːs'] }},
  // Turkic (additional)
  crh: { name: 'Crimean Tatar', native: 'Qırımtatar tili', lat: 44.95, lng: 34.10, // Simferopol
    words: { water:['suv','suv'], fire:['ateş','ateʃ'], sun:['küneş','kyneʃ'], moon:['ay','aj'], mother:['ana','ana'], father:['baba','baba'], eat:['aşamaq','aʃamaq'], drink:['içmek','itʃmek'], love:['sevgi','sevɡi'], heart:['yürek','jyrek'], tree:['terek','terek'], house:['ev','ev'], dog:['köpek','køpek'], cat:['mışıq','mɯʃɯq'], hand:['el','el'], eye:['köz','køz'], hello:['selâm','selæm'], thanks:['sağ ol','saɣ ol'], one:['bir','bir'], good:['yahşı','jaχʃɯ'] }},
  tt: { name: 'Tatar', native: 'татар теле', lat: 55.79, lng: 49.12, // Kazan
    words: { water:['су','su'], fire:['ут','ut'], sun:['кояш','qojaʃ'], moon:['ай','aj'], mother:['әни','æni'], father:['әти','æti'], eat:['ашау','aʃaw'], drink:['эчү','etɕy'], love:['сөю','søjy'], heart:['йөрәк','jøræk'], tree:['агач','aɣatʃ'], house:['өй','øj'], dog:['эт','et'], cat:['песи','pesi'], hand:['кул','qul'], eye:['күз','kyz'], hello:['исәнмесез','isænmesez'], thanks:['рәхмәт','ræxmæt'], one:['бер','ber'], good:['яхшы','jaχʃɯ'] }},
  ba: { name: 'Bashkir', native: 'башҡорт теле', lat: 54.74, lng: 55.97, // Ufa
    words: { water:['һыу','hɯw'], fire:['ут','ut'], sun:['ҡояш','qojaʃ'], moon:['ай','aj'], mother:['әсәй','æsæj'], father:['атай','ataj'], eat:['ашау','aʃaw'], drink:['эсеү','eseʉ'], love:['яратыу','jaratɯw'], heart:['йөрәк','jʉræk'], tree:['ағас','aɣas'], house:['өй','øj'], dog:['эт','et'], cat:['бесәй','besæj'], hand:['ҡул','qul'], eye:['күҙ','kyð'], hello:['һаумыһығыҙ','hawmɯhɯɣɯð'], thanks:['рәхмәт','ræxmæt'], one:['бер','ber'], good:['яҡшы','jaqʃɯ'] }},
  krc: { name: 'Karachay-Balkar', native: 'къарачай-малкъар тил', lat: 44.23, lng: 42.05, // Cherkessk area
    words: { water:['суу','suw'], fire:['от','ot'], sun:['кюн','kyn'], moon:['ай','aj'], mother:['ана','ana'], father:['ата','ata'], eat:['ашаргъа','aʃarʁa'], drink:['ичерге','itʃerɡe'], love:['сюймеклик','syjmeklik'], heart:['джюрек','dʒyrek'], tree:['терек','terek'], house:['юй','yj'], dog:['ит','it'], cat:['киштик','kiʃtik'], hand:['къол','qol'], eye:['кёз','køz'], hello:['салам','salam'], thanks:['сау бол','saw bol'], one:['бир','bir'], good:['ариу','ariw'] }},
  // Tibeto-Burman / Karen (Kra-Dai for shn)
  ksw: { name: 'Sgaw Karen', native: 'ကညီကျိာ်', lat: 16.89, lng: 97.63, // Hpa-an
    words: { water:['ထံ','tʰaŋ'], fire:['မ့ၣ်ဖီ','mʔiŋ pʰi'], sun:['မုၢ်','mu'], moon:['လါ','la'], mother:['မိၢ်','mi'], father:['ပၢ်','pa'], eat:['အီၣ်','ʔiŋ'], drink:['အီ','ʔi'], love:['အဲၣ်','ʔeŋ'], heart:['သး','θa'], tree:['သ့ၣ်','θiŋ'], house:['ဟံၣ်','haŋ'], dog:['ထွံၣ်','tʰwiŋ'], cat:['သိမံၣ်','θimaŋ'], hand:['စု','su'], eye:['မဲာ်ချံ','mɛ tʃʰa'], hello:['ဘၣ်တၢ်ဆၢ','baŋ ta sa'], thanks:['တၢ်ဘျုး','ta bju'], one:['တ','ta'], good:['ဂ့ၤ','ɣɛ'] }},
  lhu: { name: 'Lahu', native: 'Lahu hkâw', lat: 22.97, lng: 100.05, // Mengmang
    words: { water:['ɨ̂','ɯ̂'], fire:['a-mí','amí'], sun:['mvuhˇ-nyiˉ','mvuʔ ɲí'], moon:['ha-pa','hapa'], mother:['e','e'], father:['a-pa','apa'], eat:['caˆ','tsâ'], drink:['dawˇ','dàʔ'], love:['hâˆ','hâ'], heart:['nyiˉ-ma','ɲíma'], tree:['shi-pa','ʃìpa'], house:['yâˇ','jâʔ'], dog:['phuˇ-pheh','pʰùpʰeh'], cat:['maˇ-niˆ','mâníʔ'], hand:['lɔˆ','lɔ̂'], eye:['mɛhˇ','mɛ̂ʔ'], hello:['ô-bo-haˇ','óbohâʔ'], thanks:['a-bo-shaˇ','abôʃâʔ'], one:['tê','tê'], good:['dâˇ','dâʔ'] }},
  lis: { name: 'Lisu', native: 'Lisu', lat: 25.85, lng: 98.86, // Nujiang
    words: { water:['yi','ji'], fire:['a-mi','ami'], sun:['mei-lo','mejlo'], moon:['cha-mi','tʃami'], mother:['ma','ma'], father:['a-pa','apa'], eat:['dza','tsa'], drink:['dao','dao'], love:['gu-hpa','ɡupʰa'], heart:['ni-ma','nima'], tree:['shi-pa','ʃipa'], house:['hkyim','tɕim'], dog:['kwe','kwɛ'], cat:['a-nyi','aɲi'], hand:['la','la'], eye:['mai-mei','majmei'], hello:['ngo-lan','ŋolan'], thanks:['ti-tu','titu'], one:['ti','ti'], good:['nyi','ɲi'] }},
  nxq: { name: 'Naxi', native: 'Naqxi', lat: 26.86, lng: 100.23, // Lijiang
    words: { water:['gee','ɡe'], fire:['mee','me'], sun:['ny-mei','nỹmei'], moon:['he-mei','hemei'], mother:['mei','mei'], father:['av','a'], eat:['zo','zo'], drink:['chil','tʃʰi'], love:['lai','lai'], heart:['see-zai','sezai'], tree:['si','si'], house:['pee-mei','pemei'], dog:['kee','ke'], cat:['lai-mei','laimei'], hand:['lel','le'], eye:['nyi','ɲi'], hello:['nyel-bbeq','ɲeɓe'], thanks:['gbie-ɣ','ɡbieɣ'], one:['ʈʂʰu-i','ʈʂʰui'], good:['ai','ai'] }},
  // Tai (Kra-Dai, Myanmar)
  shn: { name: 'Shan', native: 'လိၵ်ႈတႆး', lat: 20.78, lng: 97.04, // Taunggyi
    words: { water:['ၼမ်ႉ','nam'], fire:['ၾႆး','faj'], sun:['ဝၼ်း','wan'], moon:['လိူၼ်','lyn'], mother:['မႄႈ','me'], father:['ပေႃႈ','pə'], eat:['ၵိၼ်','kin'], drink:['ဢိုၵ်ႇ','ʔuk'], love:['ႁၵ်ႉ','haq'], heart:['ၸႂ်','tsai'], tree:['တူၼ်ႈမႆႉ','tum maj'], house:['ႁိူၼ်း','hen'], dog:['မႃ','ma'], cat:['မႅဝ်','mɛw'], hand:['မိုဝ်း','miw'], eye:['တႃ','ta'], hello:['မႂ်ႇသုင်','maj suŋ'], thanks:['ၶွပ်ႈၸႂ်','kɔp tsai'], one:['ၼိုင်ႈ','nuŋ'], good:['လီ','li'] }},
  // === Phase 3K: African Bantu/Khoisan/W. African (more) ===
  // Niger-Congo (Kwa, additional)
  ee: { name: 'Ewe', native: 'Eʋegbe', lat: 6.13, lng: 1.22, // Lomé
    words: { water:['tsi','tsi'], fire:['dzo','dzo'], sun:['ɣe','ɣe'], moon:['ɣleti','ɣleti'], mother:['dada','dada'], father:['fofo','fofo'], eat:['ɖu','ɖu'], drink:['no','no'], love:['lɔ̃lɔ̃','lɔ̃lɔ̃'], heart:['dzi','dzi'], tree:['ati','ati'], house:['aƒe','aƒe'], dog:['avu','avu'], cat:['dadi','dadi'], hand:['asi','asi'], eye:['ŋku','ŋku'], hello:['ŋdi','ŋdi'], thanks:['akpe','akpe'], one:['ɖeka','ɖeka'], good:['nyo','ɲo'] }},
  // Niger-Congo (Bantu, additional)
  nyn: { name: 'Runyankole', native: 'Runyankore', lat: -0.61, lng: 30.66, // Mbarara
    words: { water:['amaizi','amaizi'], fire:['omuriro','omuriro'], sun:['izooba','izoːba'], moon:['omwezi','omwezi'], mother:['maawe','maːwe'], father:['tata','tata'], eat:['kurya','kurja'], drink:['kunywa','kuɲwa'], love:['rukundo','rukundo'], heart:['omutima','omutima'], tree:['omuti','omuti'], house:['enju','endʒu'], dog:['embwa','embwa'], cat:['kapa','kapa'], hand:['omukono','omukono'], eye:['eriiso','eriːso'], hello:['agandi','aɡandi'], thanks:['webare','webare'], one:['emwe','emwe'], good:['kirungi','kiruŋɡi'] }},
  luy: { name: 'Luhya', native: 'Oluluhia', lat: 0.28, lng: 34.75, // Kakamega
    words: { water:['amatsi','amatsi'], fire:['omuliro','omuliro'], sun:['liuba','liuba'], moon:['omwesi','omwesi'], mother:['mayi','maji'], father:['papa','papa'], eat:['khulia','kʰulia'], drink:['khunywa','kʰuɲwa'], love:['obuyanzi','obujanzi'], heart:['omwoyo','omwojo'], tree:['omusala','omusala'], house:['enzu','enzu'], dog:['imbwa','imbwa'], cat:['lipusi','lipusi'], hand:['omukhono','omukʰono'], eye:['liiso','liːso'], hello:['mulembe','mulembe'], thanks:['orio','orio'], one:['ndala','ndala'], good:['malayi','malaji'] }},
  ssw: { name: 'Swazi', native: 'siSwati', lat: -26.31, lng: 31.13, // Mbabane
    words: { water:['emanti','emanti'], fire:['umlilo','umlilo'], sun:['lilanga','lilaŋɡa'], moon:['inyanga','iɲaŋɡa'], mother:['make','make'], father:['babe','babe'], eat:['kudla','kuɗla'], drink:['kunatsa','kunatsa'], love:['lutsandvo','luʦandwo'], heart:['inhlitiyo','inɬitijo'], tree:['sihlahla','siɬaɬa'], house:['indlu','indlu'], dog:['inja','indʒa'], cat:['likati','likati'], hand:['sandla','sandla'], eye:['liso','liso'], hello:['sawubona','sawuɓona'], thanks:['ngiyabonga','ŋijaɓoŋɡa'], one:['kunye','kuɲe'], good:['kuhle','kuɬe'] }},
  nbl: { name: 'Southern Ndebele', native: 'isiNdebele', lat: -25.69, lng: 28.85, // KwaNdebele
    words: { water:['amanzi','amanzi'], fire:['umlilo','umlilo'], sun:['ilanga','ilaŋɡa'], moon:['inyanga','iɲaŋɡa'], mother:['umma','umma'], father:['ubaba','uɓaɓa'], eat:['ukudla','ukuɗla'], drink:['ukusela','ukusela'], love:['ithando','itʰando'], heart:['ihliziyo','iɬizijo'], tree:['umuthi','umutʰi'], house:['indlu','indlu'], dog:['inja','indʒa'], cat:['ikati','ikati'], hand:['isandla','isandla'], eye:['ihlo','iɬo'], hello:['lotjhani','lotʃʰani'], thanks:['ngiyathokoza','ŋijatʰokoza'], one:['nye','ɲe'], good:['kuhle','kuɬe'] }},
  nso: { name: 'Northern Sotho', native: 'Sesotho sa Leboa', lat: -23.90, lng: 29.45, // Polokwane
    words: { water:['meetse','meːtse'], fire:['mollo','molːo'], sun:['letšatši','letʃatʃi'], moon:['ngwedi','ŋwedi'], mother:['mma','mːa'], father:['tate','tate'], eat:['go ja','ɡodʒa'], drink:['go nwa','ɡonwa'], love:['lerato','leɾato'], heart:['pelo','pelo'], tree:['sehlare','seɬare'], house:['ntlo','ntɬo'], dog:['mpša','mpʃa'], cat:['katse','katse'], hand:['seatla','seatɬa'], eye:['leihlo','leiɬo'], hello:['dumela','dumɛla'], thanks:['ke a leboga','kealeboɣa'], one:['tee','teː'], good:['botse','botse'] }},
  // Niger-Congo (Bantu, A zone)
  fan: { name: 'Fang', native: 'Fang', lat: 0.39, lng: 9.45, // Libreville
    words: { water:['mendim','mendim'], fire:['ndoa','ndoa'], sun:['zòp','zop'], moon:['ngɔn','ŋɡɔn'], mother:['nyia','ɲia'], father:['tara','tara'], eat:['di','di'], drink:['nyu','ɲu'], love:['ndzem','ndzem'], heart:['nle','nle'], tree:['eli','eli'], house:['nda','nda'], dog:['mvu','mvu'], cat:['esin','esin'], hand:['wɔ','wɔ'], eye:['dis','dis'], hello:['mbolo','mbolo'], thanks:['akiba','akiba'], one:['bok','bok'], good:['mbeng','mbeŋ'] }},
  // Khoisan (with click consonants)
  naq: { name: 'Nama (Khoekhoe)', native: 'Khoekhoegowab', lat: -22.55, lng: 17.08, // Windhoek
    words: { water:['ǁgam-i','ǁɡami'], fire:['ǀae-b','ǀaeb'], sun:['sores','soɾes'], moon:['ǁkhâb','ǁkʰaːb'], mother:['ǁgûs','ǁɡũːs'], father:['ǁgûb','ǁɡũːb'], eat:['ǂû','ǂũː'], drink:['ā','aː'], love:['ǀnam','ǀnam'], heart:['ǂgaob','ǂɡaob'], tree:['hai-s','hais'], house:['oms','oms'], dog:['arib','arib'], cat:['ǀores','ǀoɾes'], hand:['ǁôa-s','ǁoːas'], eye:['mûs','mũːs'], hello:['matisâ','matisaː'], thanks:['aios','aios'], one:['ǀui','ǀui'], good:['ǃgâib','ǃɡaːib'] }},
  hts: { name: 'Hadza', native: 'Hadzane', lat: -3.65, lng: 35.05, // Lake Eyasi
    words: { water:['ʼati','ʔati'], fire:['ʼimi','ʔimi'], sun:['ʼisha','ʔiʃa'], moon:['heto','heto'], mother:['ama','ama'], father:['aba','aba'], eat:['ʼicha','ʔitʃa'], drink:['ʼo','ʔoː'], love:['ʼuwakitchi','ʔuwakitʃi'], heart:['ʼaitchi','ʔaitʃi'], tree:['ʼani','ʔani'], house:['ndolo','ndolo'], dog:['kongwesi','koŋɡwesi'], cat:['ʼmiu','ʔmiu'], hand:['kwaʼla','kʷaʔla'], eye:['ʼaha','ʔaha'], hello:['ʼmtana','ʔmtana'], thanks:['ʼmbweko','ʔmbweko'], one:['ihtche','ihtʃe'], good:['ʼiyaʼe','ʔijaʔe'] }},
  // Nilo-Saharan / Saharan
  kr: { name: 'Kanuri', native: 'Kanuri', lat: 11.85, lng: 13.16, // Maiduguri
    words: { water:['njim','ndʒim'], fire:['ru','ɾu'], sun:['kiŋal','kiŋal'], moon:['kau','kau'], mother:['ya','ja'], father:['aba','aba'], eat:['bayem','bajem'], drink:['simem','simem'], love:['nem-shanu','nem ʃanu'], heart:['karkə','karkə'], tree:['kasua','kasua'], house:['fato','fato'], dog:['keri','keri'], cat:['yaba','jaba'], hand:['musko','musko'], eye:['shim','ʃim'], hello:['lafiya','lafija'], thanks:['gushibe','ɡuʃibe'], one:['tilo','tilo'], good:['ngewu','ŋɡewu'] }},
  // Niger-Congo (Mande, Atlantic)
  men: { name: 'Mende', native: 'Mende', lat: 7.96, lng: -11.74, // Bo, Sierra Leone
    words: { water:['njei','ndʒei'], fire:['ngombu','ŋɡombu'], sun:['foni','foni'], moon:['ngewɔ','ŋɡewɔ'], mother:['nje','ndʒe'], father:['nya','ɲa'], eat:['mɛ','mɛ'], drink:['ngu','ŋɡu'], love:['ndolo','ndolo'], heart:['mola','mola'], tree:['ngulu','ŋɡulu'], house:['pɛlɛ','pɛlɛ'], dog:['nguje','ŋɡudʒe'], cat:['gɔngɔ','ɡɔŋɡɔ'], hand:['lɔkɔ','lɔkɔ'], eye:['ngama','ŋɡama'], hello:['bua','bua'], thanks:['bisɛ','bisɛ'], one:['yila','jila'], good:['nyande','ɲande'] }},
  dyu: { name: 'Dyula', native: 'Julakan', lat: 11.18, lng: -4.30, // Bobo-Dioulasso
    words: { water:['ji','dʒi'], fire:['tasuma','tasuma'], sun:['tile','tile'], moon:['kalo','kalo'], mother:['ba','ba'], father:['fa','fa'], eat:['dun','dun'], drink:['min','min'], love:['kanu','kanu'], heart:['dusu','dusu'], tree:['yiri','jiri'], house:['so','so'], dog:['wulu','wulu'], cat:['jakuma','dʒakuma'], hand:['bolo','bolo'], eye:['ɲɛ','ɲɛ'], hello:['i ni soɣoma','i ni soɣoma'], thanks:['i ni ce','i ni tʃe'], one:['kelen','kelen'], good:['ɲuman','ɲuman'] }},
  // === Phase 3L: more Indigenous Americas + remaining S Asian/SE Asian ===
  // Indo-Aryan (more)
  syl: { name: 'Sylheti', native: 'ꠍꠤꠟꠐꠤ', lat: 24.89, lng: 91.87, // Sylhet
    words: { water:['পানি','pani'], fire:['আগুন','agun'], sun:['সুরুজ','suruz'], moon:['চান','tʃan'], mother:['মা','ma'], father:['বাফ','baf'], eat:['খাইন','xaɪn'], drink:['ফিন','fin'], love:['মহব্বত','mohobbot'], heart:['দিল','dil'], tree:['গাছ','ɡatʃʰ'], house:['ঘর','gor'], dog:['কুত্তা','kuttʰa'], cat:['বিলাই','bilai'], hand:['হাত','hat'], eye:['ছকু','ʃoku'], hello:['আদাব','adab'], thanks:['শুকরিয়া','ʃukria'], one:['এক','ek'], good:['ভালা','bʱala'] }},
  mag: { name: 'Magahi', native: 'मगही', lat: 25.59, lng: 85.14, // Patna
    words: { water:['पानी','paːni'], fire:['आग','aːɡ'], sun:['सूरज','suːraj'], moon:['चान','tʃaːn'], mother:['माय','maːj'], father:['बाबू','baːbuː'], eat:['खैना','kʰaiːnaː'], drink:['पीना','piːnaː'], love:['प्रेम','preːm'], heart:['मन','mən'], tree:['गाछ','ɡaːtʃʰ'], house:['घर','ɡʱər'], dog:['कूकूर','kuːkuːr'], cat:['बिलाई','bilaːi'], hand:['हाथ','haːtʰ'], eye:['आँख','aːŋkʰ'], hello:['परणाम','prəɳaːm'], thanks:['धन्यवाद','dʱənjəbaːd'], one:['एक','eːk'], good:['नीक','niːk'] }},
  doi: { name: 'Dogri', native: 'डोगरी', lat: 32.73, lng: 74.86, // Jammu
    words: { water:['पाणी','paːɳiː'], fire:['अग्ग','aɡː'], sun:['सूरज','suːraj'], moon:['चन्न','tʃanː'], mother:['मां','maː'], father:['बापू','baːpuː'], eat:['खाना','kʰaːnaː'], drink:['पीना','piːnaː'], love:['प्यार','pjaːr'], heart:['दिल','dil'], tree:['रुक्ख','rukːʰ'], house:['घर','ɡʱər'], dog:['कुत्ता','kuttaː'], cat:['बिल्ली','bilːiː'], hand:['हत्थ','hattʰ'], eye:['अक्ख','akːʰ'], hello:['नमस्कार','nəməskaːr'], thanks:['धन्यवाद','dʱənjəbaːd'], one:['इक','ik'], good:['चन्गा','tʃəŋɡaː'] }},
  // Austroasiatic (Mon-Khmer additional)
  mon: { name: 'Mon', native: 'ဘာသာမန်', lat: 16.49, lng: 97.62, // Mawlamyine
    words: { water:['ဍာ်','daˀ'], fire:['ပၟတ်','pəmoit'], sun:['တ္ၚဲ','tŋai'], moon:['ဂိတု','ɡitɔ'], mother:['မိ','mi'], father:['မ','məˀ'], eat:['ၜုၚ်','paŋ'], drink:['သုၚ်','soŋ'], love:['ဍၚ်','ɗaŋ'], heart:['ဍုၚ်','ɗuiŋ'], tree:['ဆု','tʃəneˀ'], house:['ၐိၚ်','ʔaiŋ'], dog:['ကၠဵု','klui'], cat:['ဟိၚ်','hin'], hand:['တဲ','tɔˀ'], eye:['မတ်','mat'], hello:['အရ','aro'], thanks:['ဂုဏ်','ɓjantonɛ'], one:['မွဲ','muə'], good:['ၐုၚ်','ɲɛˀ'] }},
  xkk: { name: 'Khmu', native: 'Kmhmu\'', lat: 19.89, lng: 102.13, // Luang Prabang
    words: { water:['ɔm','ʔɔm'], fire:['ʔus','ʔus'], sun:['maŋ','maŋ'], moon:['kee','keː'], mother:['mɔɔʔ','mɔːʔ'], father:['ʔaaʔ','ʔaːʔ'], eat:['caa','tʃaː'], drink:['ɲɔɔp','ɲɔːp'], love:['kɔɔh','kɔːh'], heart:['kruɛŋ','kruɛŋ'], tree:['cmuul','tʃmuːl'], house:['kaaŋ','kaːŋ'], dog:['cɔ̀','tʃɔ'], cat:['meeo','meːo'], hand:['tii','tiː'], eye:['ŋtaa','ŋtaː'], hello:['lɔh','lɔh'], thanks:['ɔrkun','ʔɔrkun'], one:['muei','muei'], good:['gee','ɡeː'] }},
  // Iroquoian (NE North America)
  moh: { name: 'Mohawk', native: 'Kanien\'kéha', lat: 45.42, lng: -73.66, // Kahnawake
    words: { water:['ohnekanos','ohnekanos'], fire:['o\'kara','oʔkara'], sun:['karahkwa','karahkwa'], moon:['ahsonthenhne','ahsontʰenhne'], mother:['iste','iste'], father:['ranihá','raniha'], eat:['kekhwa','kekʰwa'], drink:['kahnek','kahnek'], love:['aknoronhkwa','aknoronhkʷa'], heart:['awèrià','awɛriã'], tree:['okwire','okʷire'], house:['kanonhsa','kanonhsa'], dog:['érhar','erhar'], cat:['takós','takos'], hand:['o\'nentsha','oʔnentsha'], eye:['kakahre','kakahre'], hello:['she:kon','ʃekon'], thanks:['niáwen','niawen'], one:['enska','enska'], good:['ió','jo'] }},
  // Muskogean (SE North America)
  cho: { name: 'Choctaw', native: 'Chahta anumpa', lat: 32.30, lng: -89.69, // Mississippi Choctaw
    words: { water:['oka','oka'], fire:['lowa','lowa'], sun:['hashi','haʃi'], moon:['hashi ninak','haʃi ninak'], mother:['ishki','iʃki'], father:['inki','inki'], eat:['impa','impa'], drink:['ishko','iʃko'], love:['hullo','hulːo'], heart:['chunkash','tʃunkaʃ'], tree:['itti','itti'], house:['chukka','tʃukka'], dog:['ofi','ofi'], cat:['katos','katos'], hand:['ibbak','ibbak'], eye:['nishkin','niʃkin'], hello:['halito','halito'], thanks:['yakoke','jakoke'], one:['achafa','atʃafa'], good:['chukma','tʃukma'] }},
  // Eskimo-Aleut (Yupik + Inupiaq)
  esu: { name: 'Central Alaskan Yupik', native: 'Yugtun', lat: 60.79, lng: -161.76, // Bethel
    words: { water:['meq','meq'], fire:['keneq','keneq'], sun:['akerta','akerta'], moon:['iraluq','iraluq'], mother:['aana','aːna'], father:['ata','ata'], eat:['ner\'uq','nerʔuq'], drink:['mertuq','mertuq'], love:['kenka','kenka'], heart:['irua','irua'], tree:['napa','napa'], house:['ena','ena'], dog:['qimugta','qimuxta'], cat:['qassraaraq','qassraːraq'], hand:['unirak','unirak'], eye:['ii','iː'], hello:['waqaa','waqaː'], thanks:['quyana','qujana'], one:['ataucik','atautʃik'], good:['assirtuq','asːirtuq'] }},
  ipk: { name: 'Inupiaq', native: 'Iñupiatun', lat: 71.29, lng: -156.79, // Utqiagvik
    words: { water:['imiq','imiq'], fire:['igniq','iɡniq'], sun:['siqiñiq','siqiɲiq'], moon:['tatqiq','tatqiq'], mother:['aaka','aːka'], father:['aapa','aːpa'], eat:['niġiruq','niʁiruq'], drink:['imiġuq','imiʁuq'], love:['piqpaġiyaa','piqpaʁijaː'], heart:['uumman','uːmːan'], tree:['napaaqtaq','napaːqtaq'], house:['iglu','iɡlu'], dog:['qimmiq','qimːiq'], cat:['pussiq','pusːiq'], hand:['argak','arɡak'], eye:['iri','iri'], hello:['paglagvik','paɡlaɡvik'], thanks:['quyanaq','qujanaq'], one:['atausiq','ataʊʃiq'], good:['nakuuruq','nakuːruq'] }},
  // Athabaskan
  apw: { name: 'Western Apache', native: 'Ndee bizaa', lat: 33.84, lng: -109.96, // Whiteriver, AZ
    words: { water:['tu','tu'], fire:['ko\'','koʔ'], sun:['shánda\'á','ʃandaʔa'], moon:['tłʼéʼsanaaʼái','tɬʔeʔsanaːʔai'], mother:['shimá','ʃima'], father:['shitaa','ʃitaː'], eat:['yiyąʼ','jijãʔ'], drink:['yidlą','jidlãˀ'], love:['ayóigóʼíí','ʔajoiɣoʔiː'], heart:['bíjéí','bidʒeː'], tree:['tsin','tsin'], house:['kį','kĩ'], dog:['łį́į́ʼ','ɬĩːʔ'], cat:['mósí','mosi'], hand:['shílaʼ','ʃilaʔ'], eye:['nadáá','nadaː'], hello:['dahgotʼe','dahɡotʔe'], thanks:['ahéheʼe','ʔaheːheʔe'], one:['dááłeʼ','daːɬeʔ'], good:['yáʼátʼééh','jaʔatʔeːh'] }},
  // Siouan / Algonquian (more)
  dak: { name: 'Dakota', native: 'Dakhótiyapi', lat: 45.66, lng: -97.05, // Sisseton, SD
    words: { water:['mní','mní'], fire:['phéta','pʰéta'], sun:['aŋpétuwí','aŋpétuwí'], moon:['haŋyétuwí','haŋjétuwí'], mother:['iná','iná'], father:['até','até'], eat:['yúta','júta'], drink:['yatkáŋ','jatkáŋ'], love:['thečhíhida','tʰetʃʰíhida'], heart:['čhaŋté','tʃʰaŋté'], tree:['čháŋ','tʃʰáŋ'], house:['thípi','tʰípi'], dog:['šúŋka','ʃúŋka'], cat:['igmúŋ','iɡmúŋ'], hand:['napé','napé'], eye:['ištá','iʃtá'], hello:['háu','háu'], thanks:['pidámayaye','pidámajaje'], one:['waŋžidaŋ','waŋʒidaŋ'], good:['wašté','waʃté'] }},
  chy: { name: 'Cheyenne', native: 'Tsêhésenêstsestôtse', lat: 45.62, lng: -106.66, // Lame Deer
    words: { water:['mahpe','mahpe'], fire:['ho\'ėstá','hoʔɛsta'], sun:['éše\'he','eˀʃeˀhe'], moon:['ame\'háo\'o','ameˀhaˀoʔo'], mother:['néhe\'e','néheʔe'], father:['néhyo','néhjo'], eat:['mésehe','méʔsehe'], drink:['mane','mane'], love:['méhotó\'o','meˀhotoʔo'], heart:['ohtsé','ohtse'], tree:['hohtsestse','hohtsestse'], house:['vee\'e','veːʔe'], dog:['oeškeso','oːʃkeso'], cat:['pó\'po','poʔpo'], hand:['ma\'kahko','maʔkahko'], eye:['vóome','voːme'], hello:['Haaahe','haːhe'], thanks:['néá\'eše','néáʔeʃe'], one:['no\'ka','noʔka'], good:['pevohto','pevohto'] }},
  // === Phase 3M: Italian regional + S Asian + Pacific ===
  // Romance (Italian regional)
  lmo: { name: 'Lombard', native: 'Lombard', lat: 45.46, lng: 9.19, // Milan
    words: { water:['aqua','ˈaːkwa'], fire:['fœg','føːk'], sun:['sô','soː'], moon:['lüna','ˈlyna'], mother:['mader','ˈmaːder'], father:['pader','ˈpaːder'], eat:['mangià','maɲˈdʒaː'], drink:['bev','bev'], love:['amor','aˈmuːr'], heart:['cœur','kør'], tree:['pianta','ˈpjanta'], house:['cà','kaː'], dog:['can','kan'], cat:['gat','ɡat'], hand:['man','maŋ'], eye:['öcc','øtʃ'], hello:['ciao','ˈtʃaːo'], thanks:['gràzie','ˈɡrasje'], one:['vün','vyŋ'], good:['bun','buŋ'] }},
  pms: { name: 'Piedmontese', native: 'Piemontèis', lat: 45.07, lng: 7.69, // Turin
    words: { water:['eva','ˈeva'], fire:['feu','føː'], sun:['sol','sol'], moon:['lun-a','ˈlyna'], mother:['mare','ˈmare'], father:['pare','ˈpare'], eat:['mangé','maɲˈdʒe'], drink:['bèive','ˈbɛive'], love:['amor','aˈmur'], heart:['cheur','kør'], tree:['piànta','ˈpjanta'], house:['ca','ka'], dog:['can','kaŋ'], cat:['gat','ɡat'], hand:['man','maŋ'], eye:['euj','øj'], hello:['ciao','tʃao'], thanks:['gràssie','ˈɡrasːie'], one:['un','yŋ'], good:['bon','buŋ'] }},
  eml: { name: 'Emilian-Romagnol', native: 'Emiliàn-Rumagnòl', lat: 44.49, lng: 11.34, // Bologna
    words: { water:['aqua','ˈakwa'], fire:['fôg','foːk'], sun:['sòul','sɔul'], moon:['lóna','ˈluna'], mother:['mèder','ˈmɛder'], father:['pèder','ˈpɛder'], eat:['magnèr','maˈɲɛːr'], drink:['bèvar','ˈbɛvar'], love:['amôr','aˈmoːr'], heart:['côr','koːr'], tree:['piànta','ˈpjanta'], house:['cà','kaː'], dog:['chèn','kɛn'], cat:['gat','ɡat'], hand:['mân','maːn'], eye:['ôc','oːtʃ'], hello:['ciao','ˈtʃao'], thanks:['grazie','ˈɡratsje'], one:['ón','uŋ'], good:['bón','boŋ'] }},
  mwl: { name: 'Mirandese', native: 'Mirandés', lat: 41.50, lng: -6.27, // Miranda do Douro
    words: { water:['auga','ˈawɣa'], fire:['fuogo','ˈfwoɣu'], sun:['sol','sɔl'], moon:['luna','ˈluna'], mother:['mai','maj'], father:['pai','paj'], eat:['comer','koˈmeɾ'], drink:['bubir','buˈβiɾ'], love:['amor','aˈmoɾ'], heart:['coraçon','koɾaˈθoŋ'], tree:['arble','ˈaɾβle'], house:['casa','ˈkaza'], dog:['perro','ˈperu'], cat:['gato','ˈɣatu'], hand:['mano','ˈmano'], eye:['uolho','ˈuoʎu'], hello:['olá','oˈla'], thanks:['oubrigado','owβɾiˈɣadu'], one:['un','uŋ'], good:['buono','ˈbwonu'] }},
  // Hellenic (regional)
  pnt: { name: 'Pontic Greek', native: 'Ποντιακά', lat: 40.64, lng: 22.94, // Thessaloniki diaspora
    words: { water:['νερόν','neˈron'], fire:['φοτεία','foˈtia'], sun:['ήλεν','ˈilen'], moon:['φέγγον','ˈfeŋɡon'], mother:['μάνα','ˈmana'], father:['πάππος','ˈpapːos'], eat:['τρώω','ˈtroːo'], drink:['πίνω','ˈpino'], love:['αγάπην','aˈɣapin'], heart:['καρδί','karˈði'], tree:['δέντρον','ˈðendron'], house:['σπίτ','spit'], dog:['σκύλος','ˈskilos'], cat:['γάτα','ˈɣata'], hand:['χέρ','xer'], eye:['ομμάτ','omːat'], hello:['καλημέρα','kaliˈmera'], thanks:['ευχαριστώ','efxariˈsto'], one:['εν','en'], good:['καλό','kaˈlo'] }},
  // Indo-Aryan (additional)
  hno: { name: 'Hindko', native: 'ہندکو', lat: 34.02, lng: 71.58, // Peshawar
    words: { water:['پانی','paːniː'], fire:['اگ','aɡ'], sun:['سورج','soːraj'], moon:['چن','tʃan'], mother:['ماں','mãː'], father:['پیو','pju'], eat:['کھانا','kʰaːnaː'], drink:['پینا','piːnaː'], love:['پیار','pjaːr'], heart:['دل','dil'], tree:['درخت','daɾaxt'], house:['گھر','ɡʱar'], dog:['کتا','kuttaː'], cat:['بلی','billi'], hand:['ہتھ','hattʰ'], eye:['اکھ','akːʰ'], hello:['اسلام علیکم','assalaːmu ʕalaikum'], thanks:['شکریہ','ʃukrija'], one:['اک','ik'], good:['چنگا','tʃəŋɡaː'] }},
  bhb: { name: 'Bhili', native: 'भीली', lat: 23.55, lng: 74.45, // Banswara
    words: { water:['पाणी','paːɳi'], fire:['आगि','aːɡi'], sun:['सूरज','suːraj'], moon:['चांद','tʃãːd'], mother:['माय','maːj'], father:['बाबू','baːbuː'], eat:['खानु','kʰaːnu'], drink:['पीनु','piːnu'], love:['प्रेम','preːm'], heart:['हिर्दय','hiɾdəj'], tree:['झाड़','dʒʱaːɽ'], house:['घर','ɡʱar'], dog:['कुतरा','kutɾaː'], cat:['मीनी','miːniː'], hand:['हाथ','haːtʰ'], eye:['आंख','aːŋkʰ'], hello:['राम राम','raːm raːm'], thanks:['धन्यवाद','dʱənjəbaːd'], one:['एक','eːk'], good:['चोखु','tʃoːkʰu'] }},
  // Austronesian (Cham, Vietnam)
  cja: { name: 'Cham', native: 'Cham', lat: 11.57, lng: 108.99, // Phan Rang
    words: { water:['ia','ja'], fire:['apuei','apuei'], sun:['aditiak','aditiak'], moon:['bilan','bilan'], mother:['mai','mai'], father:['amaa','amaː'], eat:['huak','huak'], drink:['maum','maum'], love:['gauh','ɡauh'], heart:['hatai','hatai'], tree:['kayuw','kaiuv'], house:['thang','tʰaŋ'], dog:['athuw','atʰuv'], cat:['meuw','meuv'], hand:['tangin','taŋin'], eye:['matá','mata'], hello:['salam','salam'], thanks:['tarima kasih','tarima kasiʔ'], one:['tha','tʰa'], good:['siam','siam'] }},
  // Pacific (Pohnpeian + Hiri Motu)
  hmo: { name: 'Hiri Motu', native: 'Hiri Motu', lat: -9.46, lng: 147.18, // Port Moresby
    words: { water:['ranu','ranu'], fire:['lahi','lahi'], sun:['dina','dina'], moon:['hua','hua'], mother:['sina','sina'], father:['tama','tama'], eat:['ania','ania'], drink:['inua','inua'], love:['lalokau','lalokau'], heart:['kudouna','kudouna'], tree:['au','au'], house:['ruma','ruma'], dog:['sisia','sisia'], cat:['pusi','pusi'], hand:['ima','ima'], eye:['mata','mata'], hello:['oi e namo','oi e namo'], thanks:['tanikiu','tanikiu'], one:['ta','ta'], good:['namo','namo'] }},
  pon: { name: 'Pohnpeian', native: 'Lokaiahn Pohnpei', lat: 6.96, lng: 158.21, // Kolonia
    words: { water:['pihl','pihl'], fire:['ahi','ahi'], sun:['ketipin','ketipin'], moon:['maram','maram'], mother:['nohno','nohno'], father:['pahpa','paːpa'], eat:['mwenge','mʷeŋe'], drink:['nim','nim'], love:['limpoak','limpoːk'], heart:['mohngion','mohŋion'], tree:['tuhke','tuhke'], house:['ihmw','ihmʷ'], dog:['kihdi','kihdi'], cat:['kaht','kaht'], hand:['peh','peh'], eye:['mese','mese'], hello:['kaselehlie','kaselehlie'], thanks:['kalahngan','kalahŋan'], one:['ehu','ehu'], good:['mwahu','mʷahu'] }},
  // Old Greek branch + Aramaic Modern
  syr: { name: 'Assyrian Neo-Aramaic', native: 'ܣܘܪܝܬ', lat: 36.36, lng: 43.15, // Mosul plain
    words: { water:['ܡܝ̈ܐ','mæje'], fire:['ܢܘܪܐ','nuɾa'], sun:['ܫܡܫܐ','ʃɛmʃa'], moon:['ܣܗܪܐ','sahɾa'], mother:['ܝܡܐ','jɛmma'], father:['ܒܒܐ','baba'], eat:['ܐܟܠ','ʔaχɛl'], drink:['ܫܬܐ','ʃate'], love:['ܚܘܒܐ','xubba'], heart:['ܠܒܐ','lɛbba'], tree:['ܐܝܠܢܐ','ʔilana'], house:['ܒܝܬܐ','beta'], dog:['ܟܠܒܐ','kalba'], cat:['ܩܛܘ','qaʈu'], hand:['ܐܝܕܐ','ʔida'], eye:['ܥܝܢܐ','ʕena'], hello:['ܫܠܡܐ','ʃlama'], thanks:['ܒܣܝܡܐ','basima'], one:['ܚܕ','xa'], good:['ܛܒ','ʈav'] }},
  // Bantu Eastern (Mozambique)
  vmw: { name: 'Makhuwa', native: 'eMakhuwa', lat: -15.12, lng: 39.27, // Nampula
    words: { water:['maasi','maːsi'], fire:['moro','moɾo'], sun:['ettsuwa','etsuwa'], moon:['mweri','mweɾi'], mother:['maama','maːma'], father:['paapa','paːpa'], eat:['ohuula','ohuːla'], drink:['ohwèwa','ohwɛwa'], love:['ophenta','opʰenta'], heart:['murima','muɾima'], tree:['muri','muɾi'], house:['empa','empa'], dog:['mphwa','mpʰwa'], cat:['paaka','paːka'], hand:['nikhono','nikʰono'], eye:['nittho','nitːo'], hello:['salaama','salaːma'], thanks:['kosheni','koʃeni'], one:['mosa','mosa'], good:['ratteene','ɾatːeːne'] }},
  // === Phase 3N: rare/iconic — small Slavic, Celtic revival, isolates, S American ===
  // Slavic minor (Lower Sorbian)
  dsb: { name: 'Lower Sorbian', native: 'Dolnoserbšćina', lat: 51.76, lng: 14.33, // Cottbus
    words: { water:['woda','ˈvɔda'], fire:['wogeń','ˈvɔɡɛɲ'], sun:['słyńco','ˈswɨnt͡sɔ'], moon:['mjasec','ˈmʲasɛt͡s'], mother:['maś','maɕ'], father:['nano','ˈnano'], eat:['jěsć','jɛst͡ɕ'], drink:['piś','piɕ'], love:['lubosć','ˈlubɔɕt͡ɕ'], heart:['wutšoba','ˈvut͡ʃɔba'], tree:['bom','bɔm'], house:['dom','dɔm'], dog:['pjas','pʲas'], cat:['kócka','ˈkʊt͡ska'], hand:['ruka','ˈruka'], eye:['woko','ˈvɔkɔ'], hello:['witaj','ˈvitaj'], thanks:['źěkujom se','ˈd͡ʑɛkujɔm sɛ'], one:['jaden','ˈjadɛn'], good:['dobry','ˈdɔbrɨ'] }},
  // Celtic revival
  gv: { name: 'Manx', native: 'Gaelg', lat: 54.15, lng: -4.49, // Douglas, IoM
    words: { water:['ushtey','ˈuʃtʲə'], fire:['aile','ailʲ'], sun:['grian','ɡrʲan'], moon:['eayst','eːst'], mother:['moir','mɔːɾ'], father:['ayr','ɛːr'], eat:['gee','ɡʲiː'], drink:['iu','ʲuː'], love:['graih','ɡraːx'], heart:['cree','kɾiː'], tree:['billey','ˈbʲilʲə'], house:['thie','θai'], dog:['moddey','ˈmɔðə'], cat:['kayt','kʲat'], hand:['laue','lɛːu'], eye:['sooill','sɔːlʲ'], hello:['moghrey mie','ˈmɔɣrə maː'], thanks:['gura mie ayd','ˈɡura miː eːd'], one:['nane','næn'], good:['mie','maː'] }},
  kw: { name: 'Cornish', native: 'Kernewek', lat: 50.27, lng: -5.05, // Truro
    words: { water:['dowr','dɔuɾ'], fire:['tan','tan'], sun:['howl','haʊl'], moon:['loor','loːɾ'], mother:['mamm','mam'], father:['tas','taːs'], eat:['dybri','ˈdɨbɾi'], drink:['eva','ˈɛva'], love:['kerensa','kɛˈɾɛnsa'], heart:['kolon','ˈkolon'], tree:['gwedhen','ˈɡwɛðən'], house:['chi','tʃiː'], dog:['ki','kiː'], cat:['kath','kaːθ'], hand:['leuv','lœv'], eye:['lagas','ˈlaɡas'], hello:['dydh da','dɪð daː'], thanks:['meur ras','mœːɾ ɾaːs'], one:['onen','ˈɔnən'], good:['da','daː'] }},
  // Iranian (Zaza-Gorani branch)
  zza: { name: 'Zaza', native: 'Zazakî', lat: 39.11, lng: 39.55, // Tunceli (Dersim)
    words: { water:['aw','aw'], fire:['adır','aˈdɯɾ'], sun:['tîj','tiːʒ'], moon:['aşmî','aʃˈmiː'], mother:['maye','ˈmajɛ'], father:['pî','piː'], eat:['werdiş','ˈweɾdiʃ'], drink:['şimitiş','ʃiˈmitiʃ'], love:['hes','hɛs'], heart:['zerre','ˈzɛrːe'], tree:['dare','ˈdaɾɛ'], house:['keye','ˈkɛjɛ'], dog:['kuçeg','kuˈt͡ʃɛɡ'], cat:['pisîk','piˈsiːk'], hand:['dest','dɛst'], eye:['çim','t͡ʃim'], hello:['silam','silam'], thanks:['sıpas','sɯpas'], one:['jew','d͡ʒɛw'], good:['rind','ɾind'] }},
  // Dravidian (Pakistan outlier)
  brh: { name: 'Brahui', native: 'براہوئی', lat: 30.18, lng: 67.00, // Quetta
    words: { water:['دیر','diːɾ'], fire:['کاہا','kaha'], sun:['دے','deː'], moon:['ماہ','mah'], mother:['لمّا','lummaː'], father:['باوا','baːwaː'], eat:['کنّا','kunːa'], drink:['پنّنگ','pinːinɡ'], love:['عشق','eʃq'], heart:['دل','dil'], tree:['پنتل','pantal'], house:['اولا','ulaː'], dog:['کچک','kut͡ʃik'], cat:['پسی','pisi'], hand:['ہت','hatʰ'], eye:['کن','kann'], hello:['سلام','sælaːm'], thanks:['شکریہ','ʃukɾijaː'], one:['اسٹ','asit'], good:['کشی','kaʃi'] }},
  // Polynesian (Marquesan)
  mrq: { name: 'Marquesan', native: 'ʻEo Enana', lat: -8.85, lng: -140.10, // Nuku Hiva
    words: { water:['vai','vai'], fire:['ahi','ahi'], sun:['ʻoumati','ʔoumati'], moon:['mahina','mahina'], mother:['kuʻa','kuʔa'], father:['motua','motua'], eat:['kai','kai'], drink:['inu','inu'], love:['hanahana','hanahana'], heart:['fatu','fatu'], tree:['tumu kahi','tumu kahi'], house:['hae','hae'], dog:['peko','peko'], cat:['piki','piki'], hand:['ʻima','ʔima'], eye:['mata','mata'], hello:['kaoha','kaoha'], thanks:['mauruuru','mauɾuʔuɾu'], one:['tahi','tahi'], good:['maitaʻi','maitaʔi'] }},
  // Australian Aboriginal (more)
  tiw: { name: 'Tiwi', native: 'Tiwi', lat: -11.77, lng: 130.62, // Bathurst Island
    words: { water:['kukuni','kukuni'], fire:['yikwani','jikwani'], sun:['pumarli','pumarli'], moon:['japarra','japaɾa'], mother:['ngiya','ŋija'], father:['rringani','ɾiŋani'], eat:['ngarini','ŋaɾini'], drink:['pirninkili','piɾninkili'], love:['payinti','pajinti'], heart:['miringa','miɾiŋa'], tree:['pirntali','piɾntali'], house:['pumpuni','pumpuni'], dog:['marlapwawa','marlapʷawa'], cat:['pussycat','pusikat'], hand:['punga','puŋa'], eye:['pwoja','pʷodʒa'], hello:['ngirramini','ŋiɾamini'], thanks:['wuta-wani','wutawani'], one:['kanyili','kaɲili'], good:['kwati','kʷati'] }},
  // Arawakan (Caribbean coast)
  guc: { name: 'Wayuu', native: 'Wayuunaiki', lat: 11.54, lng: -72.91, // Riohacha
    words: { water:['wuin','wuin'], fire:['siki','siki'], sun:['kaʼi','kaʔi'], moon:['kashi','kaʃi'], mother:['ei','ei'], father:['ashi','aʃi'], eat:['ekaa','ekaː'], drink:['asaa','asaː'], love:['alasüin','alasɨin'], heart:['aaʼin','aːʔin'], tree:['wunuʼu','wunuʔu'], house:['miichi','miːtʃi'], dog:['er+','eɾɨː'], cat:['misho','miʃo'], hand:['ajapü','axapɨ'], eye:['oʼu','oʔu'], hello:['jamaya','xamaja'], thanks:['talé','tale'], one:['wanee','waneː'], good:['anasü','anasɨ'] }},
  // Mura (linguistic isolate, Amazonia)
  myp: { name: 'Pirahã', native: 'Xapagí', lat: -7.70, lng: -62.30, // Maici River
    words: { water:['piigi','piiɡi'], fire:['hoa','hoa'], sun:['hisi','hisi'], moon:['kapiigaísao','kapiːɡaísao'], mother:['ʔaaí','ʔaaí'], father:['baíxi','baíʃi'], eat:['ʔaʔaí','ʔaʔaí'], drink:['gao','ɡao'], love:['gí','ɡí'], heart:['aoʔaago','aoʔaaɡo'], tree:['hoí','hoí'], house:['kaiʔii','kaiʔii'], dog:['kobaí','kobaí'], cat:['xowí','ʃowí'], hand:['piíʔai','piíʔai'], eye:['ʔai','ʔai'], hello:['gaíhií','ɡaíhií'], thanks:['kapiíhií','kapiíhií'], one:['hói','hói'], good:['aoʔaago','aoʔaaɡo'] }},
  // Chocoan (NW South America)
  emp: { name: 'Northern Embera', native: 'Eperã pedea', lat: 5.69, lng: -76.66, // Quibdó
    words: { water:['do','do'], fire:['tu','tu'], sun:['hewa','hewa'], moon:['ahuru','ahuɾu'], mother:['papa','papa'], father:['apa','apa'], eat:['ko','ko'], drink:['dorrare','doraɾe'], love:['ãỹba','ãɨba'], heart:['ƀakhuru','ɓakuɾu'], tree:['bakuru','bakuɾu'], house:['te','te'], dog:['usa','usa'], cat:['misu','misu'], hand:['jua','xua'], eye:['tau','tau'], hello:['sake bia','sake bia'], thanks:['bia bara','bia baɾa'], one:['aba','aba'], good:['bia','bia'] }},
  // Niger-Congo (Mande, Liberia/Guinea)
  kpe: { name: 'Kpelle', native: 'Kpɛlɛɛ', lat: 7.07, lng: -9.50, // Liberian-Guinean border
    words: { water:['ya','ja'], fire:['kɔ̃a','kõa'], sun:['pelei','pelei'], moon:['kɔŋɔ','kɔŋɔ'], mother:['ngaa','ŋaː'], father:['laai','laai'], eat:['nyii','ɲiː'], drink:['yiti','jiti'], love:['gboma','ɡboma'], heart:['lii','liː'], tree:['woo','woː'], house:['pere','pere'], dog:['nyila','ɲila'], cat:['gbele','ɡbele'], hand:['yee','jeː'], eye:['ŋɛ','ŋɛ'], hello:['halee','haleː'], thanks:['balika','balika'], one:['taa','taː'], good:['nyaŋa','ɲaŋa'] }},
  // Bantu (Zambia, Lozi)
  loz: { name: 'Lozi', native: 'siLozi', lat: -15.25, lng: 23.14, // Mongu
    words: { water:['mezi','mezi'], fire:['mulilo','mulilo'], sun:['lizazi','lizazi'], moon:['kweli','kweli'], mother:['ma','ma'], father:['ndate','ndate'], eat:['kuca','kut͡sa'], drink:['kunwa','kunwa'], love:['lilato','lilato'], heart:['pilu','pilu'], tree:['kota','kota'], house:['ndu','ndu'], dog:['nja','ndʒa'], cat:['kaze','kaze'], hand:['lizoho','lizoho'], eye:['liito','liːto'], hello:['eni sha','ɛni ʃa'], thanks:['nitumezi','nitumezi'], one:['nyinwi','ɲiŋʷi'], good:['nde','nde'] }},
  // === Phase 3O: Indonesian/Philippine + Pahari + Micronesian ===
  // Austronesian (Indonesia, additional)
  bbc: { name: 'Toba Batak', native: 'Batak Toba', lat: -2.62, lng: 98.83, // Balige, Lake Toba
    words: { water:['aek','aek'], fire:['api','api'], sun:['mata ni ari','mata ni ari'], moon:['bulan','bulan'], mother:['ina','ina'], father:['ama','ama'], eat:['mangan','maŋan'], drink:['minum','minum'], love:['holong','holoŋ'], heart:['roha','roha'], tree:['hau','hau'], house:['jabu','dʒabu'], dog:['biang','biaŋ'], cat:['huting','hutiŋ'], hand:['tangan','taŋan'], eye:['mata','mata'], hello:['horas','horas'], thanks:['mauliate','mauliate'], one:['sada','sada'], good:['denggan','deŋːan'] }},
  bjn: { name: 'Banjar', native: 'Bahasa Banjar', lat: -3.32, lng: 114.59, // Banjarmasin
    words: { water:['banyu','baɲu'], fire:['api','api'], sun:['matahari','matahari'], moon:['bulan','bulan'], mother:['uma','uma'], father:['abah','abah'], eat:['makan','makan'], drink:['nginum','ŋinum'], love:['sayang','sajaŋ'], heart:['ati','ati'], tree:['batang','bataŋ'], house:['rumah','rumah'], dog:['hadupan','hadupan'], cat:['pusa','pusa'], hand:['tangan','taŋan'], eye:['mata','mata'], hello:['salam','salam'], thanks:['tarima kasih','tarima kasih'], one:['asa','asa'], good:['bagus','baɡus'] }},
  sas: { name: 'Sasak', native: 'Bahasa Sasak', lat: -8.58, lng: 116.10, // Mataram
    words: { water:['aiq','aiʔ'], fire:['api','api'], sun:['mataari','mataari'], moon:['bulan','bulan'], mother:['inaq','inaʔ'], father:['amaq','amaʔ'], eat:['mangan','maŋan'], drink:['nginem','ŋinəm'], love:['tresne','tresne'], heart:['ate','ate'], tree:['lolon kayu','lolon kaju'], house:['bale','bale'], dog:['aco','atʃo'], cat:['meong','meoŋ'], hand:['ime','ime'], eye:['mate','mate'], hello:['salam','salam'], thanks:['tampi asih','tampi asih'], one:['esa','esa'], good:['solah','solah'] }},
  // Austroasiatic (Mon-Khmer, India NE)
  kha: { name: 'Khasi', native: 'Khasi', lat: 25.58, lng: 91.89, // Shillong
    words: { water:['um','um'], fire:['ding','diŋ'], sun:['ka sngi','ka sŋi'], moon:['bnai','bnai'], mother:['mei','mei'], father:['kpa','kpa'], eat:['bam','bam'], drink:['dih','dih'], love:['ieid','iəid'], heart:['ka jingmut','ka dʒiŋmut'], tree:['u dieng','u diəŋ'], house:['ka ing','ka iŋ'], dog:['u ksew','u ksew'], cat:['u miaw','u miau'], hand:['ka kti','ka kti'], eye:['ka khmat','ka kʰmat'], hello:['khublei','kʰublei'], thanks:['khublei shibun','kʰublei ʃibun'], one:['wei','wei'], good:['bha','bʱa'] }},
  // Uralic (Ob-Ugric, sister to Khanty)
  mns: { name: 'Mansi', native: 'маньси', lat: 61.00, lng: 69.00, // Khanty-Mansiysk
    words: { water:['вит','vit'], fire:['най','naj'], sun:['хотал','xotal'], moon:['эрь','erʲ'], mother:['ӓгкве','æɡkwe'], father:['ӓщ','æɕ'], eat:['тэныгкве','tenɨɡkwe'], drink:['айныгкве','ajnɨɡkwe'], love:['эрыглыктэ','erɨɡlɨkte'], heart:['сым','sɨm'], tree:['йив','jiv'], house:['кол','kol'], dog:['амп','amp'], cat:['кошка','koʂka'], hand:['кат','kat'], eye:['сам','sam'], hello:['пася','pasja'], thanks:['пасипа','pasipa'], one:['акв','akw'], good:['ёмас','jomas'] }},
  // Austronesian (Philippines)
  mrw: { name: 'Maranao', native: 'Mëranaw', lat: 8.00, lng: 124.30, // Marawi
    words: { water:['ig','iɡ'], fire:['apoy','apoj'], sun:['alongan','aloŋan'], moon:['bolan','bolan'], mother:['ina','ina'], father:['ama','ama'], eat:['mangan','maŋan'], drink:['minom','minom'], love:['kalimo','kalimo'], heart:['atay','ataj'], tree:['kayo','kajo'], house:['walay','walaj'], dog:['aso','aso'], cat:['pusa','pusa'], hand:['lima','lima'], eye:['mata','mata'], hello:['kapian','kapijan'], thanks:['salamat','salamat'], one:['isa','isa'], good:['mapia','mapija'] }},
  tsg: { name: 'Tausug', native: 'Bahasa Sūg', lat: 6.05, lng: 121.00, // Jolo
    words: { water:['tubig','tubiɡ'], fire:['kayu','kaju'], sun:['suga','suɡa'], moon:['bulan','bulan'], mother:['inaꞌ','inaʔ'], father:['amaꞌ','amaʔ'], eat:['kaun','kaʔun'], drink:['minum','minum'], love:['lasa','lasa'], heart:['hatay','hataj'], tree:['kahuy','kahoj'], house:['bāy','baːj'], dog:['iruꞌ','iruʔ'], cat:['kuting','kutiŋ'], hand:['lima','lima'], eye:['mata','mata'], hello:['kumusta','kumusta'], thanks:['magsukul','maɡsukul'], one:['isa','isa'], good:['marayaw','marajaw'] }},
  // Micronesian (additional)
  yap: { name: 'Yapese', native: 'Yapese', lat: 9.51, lng: 138.13, // Colonia, Yap
    words: { water:['raen','raen'], fire:['nifiy','nifij'], sun:['yaal','jaːl'], moon:['pul','pul'], mother:['mangiy','maŋij'], father:['chiitamoog','tʃiːtamoːɡ'], eat:['kay','kaj'], drink:['unum','unum'], love:['t\'uf','tʔuf'], heart:['gam','ɡam'], tree:['gaak\'iy','ɡaːkʔij'], house:['naun','naun'], dog:['pilibthir','pilibtʰir'], cat:['katuu','katuː'], hand:['pa\'','paʔ'], eye:['oow','oːw'], hello:['mogethin','moɡetʰin'], thanks:['kammagar','kamːaɡar'], one:['reb','reb'], good:['feel\'','feːlʔ'] }},
  chk: { name: 'Chuukese', native: 'Chuukese', lat: 7.45, lng: 151.85, // Weno
    words: { water:['kkonik','kːoɲik'], fire:['ekkei','ekːei'], sun:['akkar','akːaɾ'], moon:['maram','maɾam'], mother:['in','in'], father:['sam','sam'], eat:['mwóngó','mʷəŋːə'], drink:['nimwomw','nimʷomʷ'], love:['tóng','təŋ'], heart:['lólúwáán','lələwaːn'], tree:['irá','iɾaː'], house:['imw','imʷ'], dog:['kkoluk','kːoluk'], cat:['kkááset','kːaːset'], hand:['pói','pɔi'], eye:['maas','maːs'], hello:['ráán annim','raːn annim'], thanks:['kinisou','kinisou'], one:['éét','eːt'], good:['múrinnó','muːɾinːo'] }},
  // Indo-Aryan (Pahari/Central)
  gbm: { name: 'Garhwali', native: 'गढ़वाली', lat: 30.32, lng: 78.03, // Dehradun
    words: { water:['पाणि','paːɳi'], fire:['आग','aːɡ'], sun:['सूरज','suːraj'], moon:['चंदा','tʃəndaː'], mother:['ब्वारी','bʷaːriː'], father:['बाब','baːb'], eat:['खाणु','kʰaːɳu'], drink:['पीण','piːɳ'], love:['मया','məjaː'], heart:['मन','mən'], tree:['बूट','buːʈ'], house:['घर','ɡʱar'], dog:['कुकुर','kukur'], cat:['बिराळी','biraːɭiː'], hand:['हाथ','haːtʰ'], eye:['आँख','aːŋkʰ'], hello:['राम राम','raːm raːm'], thanks:['धन्यवाद','dʱənjəbaːd'], one:['एक','eːk'], good:['ठीक','ʈʰiːk'] }},
  kfy: { name: 'Kumaoni', native: 'कुमाऊँनी', lat: 29.60, lng: 79.66, // Almora
    words: { water:['पाणि','paːɳi'], fire:['आग','aːɡ'], sun:['स्यू','sjuː'], moon:['ज्यू','dʒjuː'], mother:['ईजा','iːdʒaː'], father:['बाबू','baːbuː'], eat:['खाण','kʰaːɳ'], drink:['पीण','piːɳ'], love:['प्यार','pjaːr'], heart:['मन','mən'], tree:['रूख','ɾuːkʰ'], house:['घर','ɡʱar'], dog:['कुकुर','kukur'], cat:['बिराव','biraːʋ'], hand:['हाथ','haːtʰ'], eye:['आँख','aːŋkʰ'], hello:['ज्यू नमस्कार','dʒjuː nəməskaːr'], thanks:['धन्यवाद','dʱənjəbaːd'], one:['एक','eːk'], good:['ठीक','ʈʰiːk'] }},
  xnr: { name: 'Kangri', native: 'कांगड़ी', lat: 32.22, lng: 76.32, // Dharamshala
    words: { water:['पाणी','paːɳiː'], fire:['अग्ग','aɡː'], sun:['सूरज','suːraj'], moon:['चन्न','tʃanː'], mother:['बेबे','bebe'], father:['बापू','baːpuː'], eat:['खाणा','kʰaːɳaː'], drink:['पीणा','piːɳaː'], love:['प्यार','pjaːr'], heart:['दिल','dil'], tree:['रुक्ख','rukːʰ'], house:['घर','ɡʱar'], dog:['कुत्ता','kuttaː'], cat:['बिल्ली','bilːiː'], hand:['हत्थ','hattʰ'], eye:['अक्ख','akːʰ'], hello:['नमस्कार','nəməskaːr'], thanks:['धन्यवाद','dʱənjəbaːd'], one:['इक','ik'], good:['चन्गा','tʃəŋɡaː'] }},
  // === Phase 3P: BCS split + Borneo + Berber + Angola + Mongolic + W/C African ===
  // Slavic (BCS standardization split)
  hr: { name: 'Croatian', native: 'hrvatski', lat: 45.81, lng: 15.98, // Zagreb
    words: { water:['voda','ˈʋoda'], fire:['vatra','ˈʋatra'], sun:['sunce','ˈsuːnt͡se'], moon:['mjesec','ˈmjeːsets'], mother:['majka','ˈmaːjka'], father:['otac','ˈotat͡s'], eat:['jesti','ˈjɛsti'], drink:['piti','ˈpiːti'], love:['ljubav','ˈʎuːbaf'], heart:['srce','ˈsr̩t͡se'], tree:['drvo','ˈdr̩vo'], house:['kuća','ˈkuːt͡ɕa'], dog:['pas','pas'], cat:['mačka','ˈmaːt͡ʃka'], hand:['ruka','ˈruːka'], eye:['oko','ˈoːko'], hello:['bok','bok'], thanks:['hvala','ˈxʋaːla'], one:['jedan','ˈjɛdan'], good:['dobar','ˈdobar'] }},
  bs: { name: 'Bosnian', native: 'bosanski', lat: 43.86, lng: 18.41, // Sarajevo
    words: { water:['voda','ˈvoda'], fire:['vatra','ˈvatra'], sun:['sunce','ˈsunt͡se'], moon:['mjesec','ˈmjɛsets'], mother:['majka','ˈmajka'], father:['otac','ˈotat͡s'], eat:['jesti','ˈjɛsti'], drink:['piti','ˈpiti'], love:['ljubav','ˈʎubav'], heart:['srce','ˈsr̩t͡se'], tree:['drvo','ˈdr̩vo'], house:['kuća','ˈkut͡ɕa'], dog:['pas','pas'], cat:['mačka','ˈmat͡ʃka'], hand:['ruka','ˈruka'], eye:['oko','ˈoko'], hello:['zdravo','ˈzdravo'], thanks:['hvala','ˈxvala'], one:['jedan','ˈjɛdan'], good:['dobar','ˈdobar'] }},
  // Austronesian (Borneo + Sumatra)
  iba: { name: 'Iban', native: 'jaku Iban', lat: 1.55, lng: 110.34, // Kuching
    words: { water:['ai','ai'], fire:['api','api'], sun:['mata-ari','mataari'], moon:['bulan','bulan'], mother:['indai','indai'], father:['apai','apai'], eat:['makai','makai'], drink:['ngirup','ŋirup'], love:['rinduai','rinduai'], heart:['ati','ati'], tree:['kayu','kaju'], house:['rumah','rumah'], dog:['ukui','ukui'], cat:['mayau','majau'], hand:['jari','dʒari'], eye:['mata','mata'], hello:['salam','salam'], thanks:['terima kasih','terima kasih'], one:['satu','satu'], good:['manah','manah'] }},
  ljp: { name: 'Lampung', native: 'Bahasa Lampung', lat: -5.43, lng: 105.27, // Bandar Lampung
    words: { water:['way','waj'], fire:['apui','apui'], sun:['matarani','matarani'], moon:['bulan','bulan'], mother:['ina','ina'], father:['kemamang','kemamaŋ'], eat:['nganik','ŋanik'], drink:['nginum','ŋinum'], love:['gawoh','ɡawoh'], heart:['hati','hati'], tree:['batang kayu','bataŋ kaju'], house:['lamban','lamban'], dog:['asu','asu'], cat:['kucing','kutʃiŋ'], hand:['pungow','puŋow'], eye:['mata','mata'], hello:['tabik','tabik'], thanks:['tarima kasih','tarima kasih'], one:['sai','sai'], good:['hayep','hajep'] }},
  // Berber (Morocco standard)
  tzm: { name: 'Central Atlas Tamazight', native: 'ⵜⴰⵎⴰⵣⵉⵖⵜ', lat: 32.93, lng: -5.66, // Khenifra
    words: { water:['aman','aman'], fire:['times','times'], sun:['tafukt','tafukt'], moon:['ayyur','ajːuɾ'], mother:['yemma','jemːa'], father:['baba','baba'], eat:['ečč','etʃː'], drink:['sew','sew'], love:['tayri','tajɾi'], heart:['ul','ul'], tree:['aseklu','aseklu'], house:['tigemmi','tiɡemːi'], dog:['aydi','ajdi'], cat:['amuš','amuʃ'], hand:['afus','afus'], eye:['tiṭṭ','titˤː'], hello:['azul','azul'], thanks:['tanmmirt','tanmːiɾt'], one:['yan','jan'], good:['ifulki','ifulki'] }},
  // Bantu (Namibia/Angola)
  ng: { name: 'Ndonga', native: 'Oshindonga', lat: -17.78, lng: 15.69, // Oshakati
    words: { water:['omeya','omeja'], fire:['omulilo','omulilo'], sun:['etango','etaŋɡo'], moon:['omwedhi','omweðiɲ'], mother:['meme','meme'], father:['tate','tate'], eat:['lya','ʎa'], drink:['nwa','nwa'], love:['ohole','ohole'], heart:['omutima','omutima'], tree:['omuti','omuti'], house:['egumbo','eɡumbo'], dog:['ombwa','ombwa'], cat:['okashima','okaʃima'], hand:['oshikaha','oʃikaha'], eye:['eho','eho'], hello:['wa lalapo','wa lalapo'], thanks:['tangi','taŋɡi'], one:['-mwe','mwe'], good:['-nawa','nawa'] }},
  umb: { name: 'Umbundu', native: 'Umbundu', lat: -12.78, lng: 15.74, // Huambo
    words: { water:['ovava','ovava'], fire:['ondalu','ondalu'], sun:['ekumbi','ekumbi'], moon:['osãi','osãi'], mother:['inã','inã'], father:['tate','tate'], eat:['okulya','okulja'], drink:['okunwa','okunwa'], love:['ocisola','otʃisola'], heart:['utima','utima'], tree:['omuti','omuti'], house:['onjo','ondʒo'], dog:['ombwa','ombwa'], cat:['ocikangu','otʃikaŋɡu'], hand:['oluwoko','oluwoko'], eye:['iso','iso'], hello:['oloi','oloi'], thanks:['twalipata','twalipata'], one:['imwe','imwe'], good:['vyali','vjali'] }},
  kmb: { name: 'Kimbundu', native: 'Kimbundu', lat: -8.84, lng: 13.23, // Luanda
    words: { water:['menha','meɲa'], fire:['tubia','tubja'], sun:['muanya','mwaɲa'], moon:['ngonde','ŋɡonde'], mother:['mama','mama'], father:['tata','tata'], eat:['kudya','kudja'], drink:['kunwa','kunwa'], love:['henda','henda'], heart:['muxima','muʃima'], tree:['mukune','mukune'], house:['inzo','inzo'], dog:['imbwa','imbwa'], cat:['kasalu','kasalu'], hand:['lukwaku','lukwaku'], eye:['dixi','diʃi'], hello:['kiebi','kiebi'], thanks:['kishukutu','kiʃukutu'], one:['-moxi','moʃi'], good:['kiá','kja'] }},
  her: { name: 'Herero', native: 'Otjiherero', lat: -20.46, lng: 16.65, // Otjiwarongo
    words: { water:['omeva','omeva'], fire:['omuriro','omuriro'], sun:['eyuva','ejuva'], moon:['omueze','omueze'], mother:['mama','mama'], father:['tate','tate'], eat:['kuriya','kurija'], drink:['kunwa','kunwa'], love:['orusuvero','orusuvero'], heart:['omutima','omutima'], tree:['omuti','omuti'], house:['ondjuwo','ondʒuwo'], dog:['ombwa','ombwa'], cat:['okatjiru','okat͡ʃiru'], hand:['eke','eke'], eye:['eho','eho'], hello:['wa penduka','wa penduka'], thanks:['okuhepa','okuhepa'], one:['-mwe','mwe'], good:['-wa','wa'] }},
  // Mongolic (Russia, Caspian)
  xal: { name: 'Kalmyk', native: 'Хальмг келн', lat: 46.31, lng: 44.27, // Elista
    words: { water:['усн','usn'], fire:['гал','ɡal'], sun:['нарн','narn'], moon:['сар','sar'], mother:['ээҗ','eːdʒ'], father:['аав','aːv'], eat:['иде','ide'], drink:['уу','uː'], love:['дурлх','durlx'], heart:['зүркн','zyrkn'], tree:['модн','modn'], house:['гер','ɡer'], dog:['ноха','noxa'], cat:['миис','miːs'], hand:['һар','ɣar'], eye:['нүдн','nydn'], hello:['менд','mend'], thanks:['ханҗанав','xandʒanav'], one:['негн','neɡn'], good:['сән','sæn'] }},
  // Adamawa-Ubangian (CAR lingua franca)
  sg: { name: 'Sango', native: 'Sängö', lat: 4.39, lng: 18.55, // Bangui
    words: { water:['ngu','ŋɡu'], fire:['wa','wa'], sun:['lâ','la'], moon:['nzë','ndʒɛ'], mother:['mama','mama'], father:['babâ','baba'], eat:['te','te'], drink:['nyon','ɲon'], love:['ndoyê','ndojɛ'], heart:['bê','bɛ'], tree:['kêkê','kekɛ'], house:['dâ','dɑ'], dog:['mbo','mbo'], cat:['nyao','ɲao'], hand:['maboko','maboko'], eye:['lê','lɛ'], hello:['bara mo','bara mo'], thanks:['singila','siŋɡila'], one:['oko','oko'], good:['nzöni','nzøni'] }},
  // Bantu (Zambia)
  toi: { name: 'Tonga (Zambia)', native: 'Chitonga', lat: -16.81, lng: 26.99, // Choma
    words: { water:['meenda','meːnda'], fire:['mulilo','mulilo'], sun:['zuba','zuba'], moon:['mwezi','mwezi'], mother:['bama','bama'], father:['bataata','bataːta'], eat:['kulya','kulja'], drink:['kunywa','kuɲwa'], love:['luyando','lujando'], heart:['moyo','mojo'], tree:['cisamu','tʃisamu'], house:['ng\'anda','ŋanda'], dog:['muvwa','muvwa'], cat:['kaaze','kaːze'], hand:['kuboko','kuboko'], eye:['liso','liso'], hello:['mwabuka buti','mwabuka buti'], thanks:['twalumba','twalumba'], one:['-mwi','mwi'], good:['kabotu','kabotu'] }},
  // === Phase 4: Historical / Ancient Languages ===
  // Indo-European (Old Iranian)
  peo: {
    "name": "Old Persian",
    "native": "𐎠𐎼𐎹",
    "lat": 29.94,
    "lng": 52.89,
    "words": {
      "water": [
        "𐎠𐎱",
        "aːpa"
      ],
      "fire": [
        "𐎠𐎫𐎼",
        "aːtar"
      ],
      "sun": [
        "𐏃𐎢𐎺𐎼",
        "huwar"
      ],
      "moon": [
        "𐎶𐎠𐏃",
        "maːha"
      ],
      "mother": [
        "𐎶𐎠𐎫𐎼",
        "maːtar"
      ],
      "father": [
        "𐎱𐎡𐎫𐎠",
        "pitaː"
      ],
      "eat": [
        "𐎧𐎼",
        "xar"
      ],
      "drink": [
        "𐎱𐎠",
        "paː"
      ],
      "love": [
        "𐎳𐎼𐎡𐎹",
        "frija"
      ],
      "heart": [
        "𐏀𐎼𐎭",
        "zərd"
      ],
      "tree": [
        "𐎭𐎼𐎢𐎶",
        "druma"
      ],
      "house": [
        "𐎶𐎠𐎴𐎡𐎹",
        "maːnija"
      ],
      "dog": [
        "𐎿𐎱𐎣",
        "spaka"
      ],
      "cat": [
        "𐎱𐎡𐏁𐎡",
        "piʃiː"
      ],
      "hand": [
        "𐎭𐎿𐎫",
        "dasta"
      ],
      "eye": [
        "𐏂𐏁𐎶𐎴",
        "tʃaʃman"
      ],
      "hello": [
        "𐎭𐎢𐎼𐎢𐎺",
        "duruwa"
      ],
      "thanks": [
        "—",
        "—"
      ],
      "one": [
        "𐎠𐎡𐎺",
        "aiwa"
      ],
      "good": [
        "𐎴𐎡𐎲",
        "naiba"
      ]
    }
  },
  ave: {
    "name": "Avestan",
    "native": "𐬀𐬬𐬈𐬯𐬙𐬁",
    "lat": 32.5,
    "lng": 60,
    "words": {
      "water": [
        "𐬀𐬞",
        "ap"
      ],
      "fire": [
        "𐬁𐬙𐬀𐬭",
        "aːtar"
      ],
      "sun": [
        "𐬵𐬎𐬎𐬀𐬭𐬆",
        "huwarə"
      ],
      "moon": [
        "𐬨𐬁𐬵",
        "maːh"
      ],
      "mother": [
        "𐬨𐬁𐬙𐬀𐬭",
        "maːtar"
      ],
      "father": [
        "𐬞𐬌𐬙𐬀𐬭",
        "pitar"
      ],
      "eat": [
        "𐬑𐬬𐬀𐬭",
        "xwar"
      ],
      "drink": [
        "𐬞𐬁",
        "paː"
      ],
      "love": [
        "𐬟𐬭𐬌𐬌𐬀",
        "frija"
      ],
      "heart": [
        "𐬰𐬆𐬭𐬆𐬛",
        "zərəd"
      ],
      "tree": [
        "𐬬𐬀𐬉𐬯𐬀",
        "waesa"
      ],
      "house": [
        "𐬥𐬨𐬁𐬥𐬀",
        "nmaːna"
      ],
      "dog": [
        "𐬯𐬞𐬁",
        "spaː"
      ],
      "cat": [
        "𐬞𐬌𐬱𐬌",
        "piʃiː"
      ],
      "hand": [
        "𐬰𐬀𐬯𐬙𐬀",
        "zasta"
      ],
      "eye": [
        "𐬗𐬀𐬱𐬨𐬀𐬥",
        "tʃaʃman"
      ],
      "hello": [
        "𐬵𐬎𐬱",
        "huʃ"
      ],
      "thanks": [
        "—",
        "—"
      ],
      "one": [
        "𐬀𐬉𐬬𐬀",
        "aewa"
      ],
      "good": [
        "𐬬𐬊𐬵𐬎",
        "wohu"
      ]
    }
  },
  xto: {
    "name": "Tocharian A",
    "native": "𑀆𑀭𑁆𑀰𑀺 𑀓𑀾𑀦𑁆𑀢𑁆𑀯𑁄",
    "lat": 41.6,
    "lng": 84.9,
    "words": {
      "water": [
        "𑀯𑀭𑁆",
        "wær"
      ],
      "fire": [
        "𑀧𑁄𑀭𑁆",
        "por"
      ],
      "sun": [
        "𑀓𑁄𑀦𑁆𑀢𑀼",
        "kontu"
      ],
      "moon": [
        "𑀫𑀜𑁆",
        "mæɲ"
      ],
      "mother": [
        "𑀫𑀸𑀘𑀭𑁆",
        "maːtsar"
      ],
      "father": [
        "𑀧𑀸𑀘𑀭𑁆",
        "paːtsar"
      ],
      "eat": [
        "𑀰𑀯𑁆",
        "ɕæw"
      ],
      "drink": [
        "𑀬𑁄𑀓𑁆",
        "jok"
      ],
      "love": [
        "𑀓𑀸𑀬𑀼",
        "kaːju"
      ],
      "heart": [
        "𑀅𑀭𑀸𑀜𑁆𑀘𑁆",
        "araːɲts"
      ],
      "tree": [
        "𑀲𑁆𑀢𑀸𑀫𑁆",
        "staːm"
      ],
      "house": [
        "𑀯𑀱𑁆𑀢𑁆",
        "waʂt"
      ],
      "dog": [
        "𑀓𑀼",
        "ku"
      ],
      "cat": [
        "𑀓𑀼𑀫𑀽𑀱𑁆",
        "kumuːʂ"
      ],
      "hand": [
        "𑀢𑁆𑀲𑀭𑁆",
        "tsar"
      ],
      "eye": [
        "𑀅𑀓𑁆",
        "ak"
      ],
      "hello": [
        "—",
        "—"
      ],
      "thanks": [
        "—",
        "—"
      ],
      "one": [
        "𑀲𑀲𑁆",
        "sas"
      ],
      "good": [
        "𑀓𑀸𑀲𑀼",
        "kaːsu"
      ]
    }
  },
  txb: {
    "name": "Tocharian B",
    "native": "𑀓𑀼𑀰𑀺𑀜𑁆𑀜𑁂 𑀓𑀾𑀦𑁆𑀢𑁂",
    "lat": 41.7,
    "lng": 82.95,
    "words": {
      "water": [
        "𑀯𑀭𑁆",
        "war"
      ],
      "fire": [
        "𑀧𑀼𑀯𑀭𑁆",
        "puwar"
      ],
      "sun": [
        "𑀓𑁅𑀁",
        "kauŋ"
      ],
      "moon": [
        "𑀫𑁂𑀜𑁂",
        "meɲe"
      ],
      "mother": [
        "𑀫𑀸𑀘𑁂𑀭𑁆",
        "maːtser"
      ],
      "father": [
        "𑀧𑀸𑀘𑁂𑀭𑁆",
        "paːtser"
      ],
      "eat": [
        "𑀰𑀼𑀯",
        "ɕuwa"
      ],
      "drink": [
        "𑀬𑁄𑀓𑁆",
        "jok"
      ],
      "love": [
        "𑀓𑀸𑀯𑀸",
        "kaːwaː"
      ],
      "heart": [
        "𑀅𑀭𑀾𑀜𑁆𑀘𑁂",
        "aɾæɲtse"
      ],
      "tree": [
        "𑀲𑁆𑀢𑀸𑀫𑁆",
        "staːm"
      ],
      "house": [
        "𑁄𑀲𑁆𑀢𑁆",
        "ost"
      ],
      "dog": [
        "𑀓𑀼",
        "ku"
      ],
      "cat": [
        "𑀓𑁆𑀯𑁂𑀁",
        "kweŋ"
      ],
      "hand": [
        "𑀱𑀭𑁆",
        "ʂar"
      ],
      "eye": [
        "𑁂𑀓𑁆",
        "ek"
      ],
      "hello": [
        "—",
        "—"
      ],
      "thanks": [
        "—",
        "—"
      ],
      "one": [
        "𑀱𑁂",
        "ʂe"
      ],
      "good": [
        "𑀓𑀭𑁆𑀢𑁆𑀲𑁂",
        "kartse"
      ]
    }
  },
  phn: { name: 'Phoenician', native: '𐤃𐤁𐤓𐤉𐤌 𐤊𐤍𐤏𐤍𐤉𐤌', lat: 33.27, lng: 35.20, // Tyre
    words: { water:['𐤌𐤌','majim'], fire:['𐤀𐤔','ʔeʃ'], sun:['𐤔𐤌𐤔','ʃameʃ'], moon:['𐤉𐤓𐤇','jaræħ'], mother:['𐤀𐤌','ʔem'], father:['𐤀𐤁','ʔab'], eat:['𐤀𐤊𐤋','ʔakal'], drink:['𐤔𐤕','ʃat'], love:['𐤀𐤇𐤁','ʔaheb'], heart:['𐤋𐤁','lib'], tree:['𐤏𐤑','ʕeʦʕ'], house:['𐤁𐤕','bajit'], dog:['𐤊𐤋𐤁','kalb'], cat:['𐤔𐤍𐤓','ʃunaːr'], hand:['𐤉𐤃','jad'], eye:['𐤏𐤍','ʕajin'], hello:['𐤔𐤋𐤌','ʃalom'], thanks:['𐤁𐤓𐤊','barak'], one:['𐤀𐤇𐤃','ʔeħad'], good:['𐤈𐤁','tˤob'] }},
  uga: { name: 'Ugaritic', native: '𐎜𐎂𐎗𐎚', lat: 35.60, lng: 35.78, // Ras Shamra
    words: { water:['𐎎𐎊','maju'], fire:['𐎛𐎌𐎚','ʔiʃt'], sun:['𐎌𐎔𐎌','ʃapʃ'], moon:['𐎊𐎗𐎈','jaːriχ'], mother:['𐎜𐎎','ʔumm'], father:['𐎜𐎁','ʔabu'], eat:['𐎍𐎈𐎎','laħam'], drink:['𐎌𐎚𐎊','ʃataju'], love:['𐎜𐎈𐎁','ʔaːhab'], heart:['𐎍𐎁','libbu'], tree:['𐎓𐎕','ʕaʦʕu'], house:['𐎁𐎚','bajtu'], dog:['𐎋𐎍𐎁','kalbu'], cat:['—','—'], hand:['𐎊𐎄','jadu'], eye:['𐎓𐎐','ʕajnu'], hello:['𐎌𐎍𐎎','ʃalaːmu'], thanks:['𐎁𐎗𐎋','baːriku'], one:['𐎀𐎈𐎄','ʔaːħadu'], good:['𐎉𐎁','tˤaːbu'] }},
  // Indo-European (Anatolian, Hittite-cousin)
  xlu: {
    "name": "Luwian",
    "native": "𔖻𔑯𔗬𔖻𔓯",
    "lat": 38.4,
    "lng": 33.5,
    "words": {
      "water": [
        "𔓷𔗬𔖻𔑯",
        "wadar"
      ],
      "fire": [
        "𔑭𔖖𔖖𔗬",
        "paːhːur"
      ],
      "sun": [
        "𔖻𔗬𔑯",
        "tiwad"
      ],
      "moon": [
        "𔓯𔗬",
        "arma"
      ],
      "mother": [
        "𔑯𔑯",
        "anna"
      ],
      "father": [
        "𔑯𔑯𔗬",
        "tati"
      ],
      "eat": [
        "𔑯𔗬",
        "ad"
      ],
      "drink": [
        "𔑯𔓷",
        "aku"
      ],
      "love": [
        "𔓷𔗬𔓯",
        "walaːhi"
      ],
      "heart": [
        "𔓷𔗬𔖻",
        "kard"
      ],
      "tree": [
        "𔑯𔓯",
        "alana"
      ],
      "house": [
        "𔑭𔗬𔑯",
        "parna"
      ],
      "dog": [
        "𔖻𔓷𔑯",
        "zuwana"
      ],
      "cat": [
        "—",
        "—"
      ],
      "hand": [
        "𔖻𔑯",
        "iʃʃa"
      ],
      "eye": [
        "𔖖𔗬",
        "hidu"
      ],
      "hello": [
        "—",
        "—"
      ],
      "thanks": [
        "—",
        "—"
      ],
      "one": [
        "𔑯",
        "as"
      ],
      "good": [
        "𔓷𔓷",
        "walwa"
      ]
    }
  },
  pal: {
    "name": "Middle Persian",
    "native": "𐭯𐭠𐭫𐭮𐭩𐭪",
    "lat": 32.65,
    "lng": 51.67,
    "words": {
      "water": ["𐭠𐭯", "aːb"],
      "fire": ["𐭠𐭲𐭱", "aːtaʃ"],
      "sun": ["𐭧𐭥𐭫𐭱𐭩𐭲", "xwarʃeːd"],
      "moon": ["𐭬𐭠𐭧", "maːh"],
      "mother": ["𐭬𐭠𐭲𐭫", "maːdar"],
      "father": ["𐭯𐭩𐭲𐭫", "pidar"],
      "eat": ["𐭧𐭥𐭫𐭲𐭭", "xwardan"],
      "drink": ["𐭭𐭥𐭱𐭩𐭲𐭭", "noːʃiːdan"],
      "love": ["𐭲𐭥𐭱𐭩", "doːʃiː"],
      "heart": ["𐭣𐭩𐭫", "dil"],
      "tree": ["𐭣𐭫𐭧𐭲", "draxt"],
      "house": ["𐭧𐭠𐭭𐭪", "xaːnaɡ"],
      "dog": ["𐭮𐭢", "saɡ"],
      "cat": ["𐭢𐭥𐭫𐭡𐭢", "ɡurbaɡ"],
      "hand": ["𐭣𐭮𐭲", "dast"],
      "eye": ["𐭰𐭱𐭬", "tʃaʃm"],
      "hello": ["𐭣𐭫𐭥𐭲", "droːd"],
      "thanks": ["𐭮𐭯𐭠𐭮", "spaːs"],
      "one": ["𐭠𐭩𐭪", "eːk"],
      "good": ["𐭥𐭩𐭧", "weh"]
    }
  },
  syc: { name: 'Classical Syriac', native: 'ܠܫܢܐ ܣܘܪܝܝܐ', lat: 37.16, lng: 38.78, // Edessa
    words: { water:['ܡܝܐ','majjaː'], fire:['ܢܘܪܐ','nuːraː'], sun:['ܫܡܫܐ','ʃemʃaː'], moon:['ܣܗܪܐ','sahraː'], mother:['ܐܡܐ','emmaː'], father:['ܐܒܐ','abbaː'], eat:['ܐܟܠ','ʔeχal'], drink:['ܐܫܬܝ','ʔeʃtiː'], love:['ܚܘܒܐ','ħuːbbaː'], heart:['ܠܒܐ','lebbaː'], tree:['ܐܝܠܢܐ','ʔiːlaːnaː'], house:['ܒܝܬܐ','bajtaː'], dog:['ܟܠܒܐ','kalbaː'], cat:['ܫܘܢܪܐ','ʃuːnaːraː'], hand:['ܐܝܕܐ','ʔiːdaː'], eye:['ܥܝܢܐ','ʕajnaː'], hello:['ܫܠܡܐ','ʃlaːmaː'], thanks:['ܫܘܒܚܐ','ʃubħaː'], one:['ܚܕ','ħad'], good:['ܛܒܐ','tˤaːbaː'] }},
  // Old Romance / Old Germanic
  fro: { name: 'Old French', native: 'romans', lat: 48.86, lng: 2.35, // Île-de-France
    words: { water:['eve','ɛːvə'], fire:['feu','fø'], sun:['soleil','soˈleʎ'], moon:['lune','ˈlynə'], mother:['mere','ˈmɛrə'], father:['pere','ˈpɛrə'], eat:['mangier','maɲˈdʒier'], drink:['boivre','ˈbojvrə'], love:['amor','aˈmor'], heart:['cuer','kwɛr'], tree:['arbre','ˈarbrə'], house:['maison','maiˈzõn'], dog:['chien','tʃjɛn'], cat:['chat','tʃat'], hand:['main','mɛ̃j'], eye:['oeil','œʎ'], hello:['salut','saˈlyt'], thanks:['merci','mɛrˈsi'], one:['un','yn'], good:['bon','bõn'] }},
  goh: { name: 'Old High German', native: 'diutisk', lat: 49.99, lng: 8.27, // Mainz
    words: { water:['wazzar','ˈwatsːar'], fire:['fiur','fiur'], sun:['sunna','ˈsunna'], moon:['māno','ˈmaːno'], mother:['muoter','ˈmuotɛr'], father:['fater','ˈfatɛr'], eat:['ezzan','ˈetsːan'], drink:['trinkan','ˈtrinkan'], love:['minna','ˈminna'], heart:['herza','ˈhertsa'], tree:['boum','boum'], house:['hūs','huːs'], dog:['hunt','hunt'], cat:['kazza','ˈkatsːa'], hand:['hant','hant'], eye:['ouga','ˈouga'], hello:['heil','heil'], thanks:['dank','dank'], one:['ein','ein'], good:['guot','ɡuot'] }},
  // South Semitic (Classical Ethiopic)
  gez: { name: 'Ge\'ez', native: 'ግዕዝ', lat: 14.13, lng: 38.72, // Aksum
    words: { water:['ማይ','maːj'], fire:['እሳት','əsaːt'], sun:['ፀሐይ','sˤaħaj'], moon:['ወርኅ','warχ'], mother:['እም','əmm'], father:['አብ','ʔab'], eat:['በልዐ','balʕa'], drink:['ሰትየ','satja'], love:['አፍቀረ','ʔafqara'], heart:['ልብ','ləbb'], tree:['ዕፅ','ʕəsˤ'], house:['ቤት','beːt'], dog:['ከልብ','kalb'], cat:['ድሙ','dəmmu'], hand:['እድ','ʔəd'], eye:['ዐይን','ʕajn'], hello:['ሰላም','salaːm'], thanks:['ምስጋና','məsgaːnaː'], one:['አሐዱ','ʔaħadu'], good:['ሠናይ','sˤannaːj'] }},
  // === Phase 4B: more Historical / Ancient Languages ===
  // Pre-Greek
  gmy: {
    "name": "Mycenaean Greek",
    "native": "𐀀𐀐𐀊",
    "lat": 37.73,
    "lng": 22.76,
    "words": {
      "water": [
        "𐀓𐀈",
        "hudɔːr"
      ],
      "fire": [
        "𐀢",
        "pyːr"
      ],
      "sun": [
        "𐀀𐀺𐀂𐀍",
        "haːwelios"
      ],
      "moon": [
        "𐀕",
        "mɛːn"
      ],
      "mother": [
        "𐀔𐀳",
        "maːtɛːr"
      ],
      "father": [
        "𐀞𐀳",
        "patɛːr"
      ],
      "eat": [
        "𐀁𐀈𐀕𐀙",
        "edmenai"
      ],
      "drink": [
        "𐀡𐀜",
        "piːnɔː"
      ],
      "love": [
        "𐀠𐀩𐀍",
        "pʰilos"
      ],
      "heart": [
        "𐀒𐀵𐀆",
        "kardia"
      ],
      "tree": [
        "𐀈𐀏",
        "dorka"
      ],
      "house": [
        "𐀺𐀂𐀒",
        "woikos"
      ],
      "dog": [
        "𐀓𐀺",
        "kuwɔːn"
      ],
      "cat": [
        "—",
        "—"
      ],
      "hand": [
        "𐀐𐀁",
        "kʰɛːr"
      ],
      "eye": [
        "𐀀𐀡𐀰𐀗𐀳",
        "opʰtʰalmos"
      ],
      "hello": [
        "—",
        "—"
      ],
      "thanks": [
        "—",
        "—"
      ],
      "one": [
        "𐀁",
        "hen"
      ],
      "good": [
        "𐀀𐀏𐀳",
        "agatʰos"
      ]
    }
  },
  xct: { name: 'Classical Tibetan', native: 'ཆོས་སྐད', lat: 29.65, lng: 91.10, // Lhasa area
    words: { water:['ཆུ','tɕʰu'], fire:['མེ','me'], sun:['ཉི་མ','ɲima'], moon:['ཟླ་བ','dawa'], mother:['ཨ་མ','ama'], father:['ཕ','pʰa'], eat:['བཟའ','za'], drink:['འཐུང','tʰuŋ'], love:['དགའ་བ','ɡawa'], heart:['སྙིང','ɲiŋ'], tree:['ཤིང','ɕiŋ'], house:['ཁྱིམ','tɕim'], dog:['ཁྱི','tɕi'], cat:['བྱི་ལ','bila'], hand:['ལག་པ','lakpa'], eye:['མིག','mik'], hello:['བཀྲ་ཤིས་བདེ་ལེགས','tʂaʃi deleks'], thanks:['ཐུགས་རྗེ་ཆེ','tʰukdʒe tɕʰe'], one:['གཅིག','tɕik'], good:['ཡག་པོ','jakpo'] }},
  // Late Phoenician (Carthage)
  xpu: { name: 'Punic', native: '𐤐𐤍𐤊', lat: 36.87, lng: 10.32, // Carthage
    words: { water:['𐤌𐤉𐤌','majim'], fire:['𐤀𐤔','ʔeʃ'], sun:['𐤔𐤌𐤔','ʃameʃ'], moon:['𐤉𐤓𐤇','jeraħ'], mother:['𐤀𐤌','ʔem'], father:['𐤀𐤁','ʔav'], eat:['𐤀𐤊𐤋','ʔakal'], drink:['𐤔𐤕','ʃat'], love:['𐤀𐤇𐤁','ʔaheb'], heart:['𐤋𐤁','lib'], tree:['𐤏𐤑','ʕeʦʕ'], house:['𐤁𐤕','bajit'], dog:['𐤊𐤋𐤁','kalb'], cat:['—','—'], hand:['𐤉𐤃','jad'], eye:['𐤏𐤍','ʕajin'], hello:['𐤔𐤋𐤌','ʃalom'], thanks:['𐤁𐤓𐤊','barak'], one:['𐤀𐤇𐤃','ʔeħad'], good:['𐤈𐤁','tˤob'] }},
  // Ancient Near East (isolates / poorly classified)
  xhu: {
    "name": "Hurrian",
    "native": "𒄩𒌨𒊑𒇷",
    "lat": 36.86,
    "lng": 40.04,
    "words": {
      "water": [
        "𒅆𒂊",
        "ʃie"
      ],
      "fire": [
        "𒋫𒌅",
        "tatu"
      ],
      "sun": [
        "𒅆𒈨𒄀",
        "ʃimeɡi"
      ],
      "moon": [
        "𒆪𒋢𒄴",
        "kuʃuh"
      ],
      "mother": [
        "𒂊𒈾",
        "ena"
      ],
      "father": [
        "𒀜𒋫𒀀𒄿",
        "attai"
      ],
      "eat": [
        "𒄠",
        "am"
      ],
      "drink": [
        "𒈾𒄴𒉿",
        "nahw"
      ],
      "love": [
        "𒋫𒁺",
        "tadu"
      ],
      "heart": [
        "𒋾𒊭",
        "tiʃa"
      ],
      "tree": [
        "𒋫𒁉",
        "tappi"
      ],
      "house": [
        "𒅁𒊑",
        "ipri"
      ],
      "dog": [
        "𒅕𒈠",
        "irma"
      ],
      "cat": [
        "𒊭𒉿𒍣",
        "ʃawazi"
      ],
      "hand": [
        "𒋗𒉌",
        "ʃuni"
      ],
      "eye": [
        "𒅆𒉌",
        "ʃini"
      ],
      "hello": [
        "𒄭𒇻",
        "hilːu"
      ],
      "thanks": [
        "𒀀𒅆",
        "aʃi"
      ],
      "one": [
        "𒊭",
        "ʃa"
      ],
      "good": [
        "𒀀𒍣",
        "aʦi"
      ]
    }
  },
  elx: {
    "name": "Elamite",
    "native": "𒁹𒋾𒈠𒋾",
    "lat": 32.19,
    "lng": 48.26,
    "words": {
      "water": [
        "𒄭",
        "hi"
      ],
      "fire": [
        "𒉺𒅈",
        "par"
      ],
      "sun": [
        "𒀭𒈾𒄴𒄭𒌅",
        "nahhunte"
      ],
      "moon": [
        "𒀭𒈾𒁉𒅕",
        "napir"
      ],
      "mother": [
        "𒀀𒈠",
        "amma"
      ],
      "father": [
        "𒀜𒋫",
        "atta"
      ],
      "eat": [
        "𒄩𒊭",
        "haʃ"
      ],
      "drink": [
        "𒉡",
        "nu"
      ],
      "love": [
        "𒇷𒅗",
        "lik"
      ],
      "heart": [
        "𒌋𒄭",
        "ulhi"
      ],
      "tree": [
        "𒄷𒌅𒆪",
        "hutk"
      ],
      "house": [
        "𒄩𒀠",
        "hal"
      ],
      "dog": [
        "𒆪𒌅",
        "kut"
      ],
      "cat": [
        "𒋾𒅗𒊏",
        "tiɡra"
      ],
      "hand": [
        "𒆪𒋗",
        "kuʃu"
      ],
      "eye": [
        "𒌅𒆠",
        "tukːi"
      ],
      "hello": [
        "𒅆𒅋𒄩",
        "ʃilha"
      ],
      "thanks": [
        "𒇷𒄩𒊑",
        "lihari"
      ],
      "one": [
        "𒆠𒅕",
        "kir"
      ],
      "good": [
        "𒊒𒄷",
        "ruːhuː"
      ]
    }
  },
  xsa: { name: 'Sabaean', native: '𐩪𐩨𐩱', lat: 15.45, lng: 45.35, // Marib
    words: { water:['𐩣𐩺','maːʔ'], fire:['𐩱𐩪','ʔas'], sun:['𐩦𐩣𐩪','ʃams'], moon:['𐩥𐩧𐩭','warkʰ'], mother:['𐩱𐩣','ʔumm'], father:['𐩱𐩨','ʔab'], eat:['𐩱𐩫𐩡','ʔakal'], drink:['𐩪𐩩𐩺','ʃataja'], love:['𐩥𐩵𐩵','wadda'], heart:['𐩡𐩨','lubb'], tree:['𐩲𐩳','ʕaːð'], house:['𐩨𐩺𐩩','bajt'], dog:['𐩫𐩡𐩨','kalb'], cat:['—','—'], hand:['𐩺𐩵','jad'], eye:['𐩲𐩺𐩬','ʕajn'], hello:['𐩪𐩡𐩣','salaːm'], thanks:['𐩦𐩫𐩧','ʃakar'], one:['𐩱𐩢𐩵','ʔaħad'], good:['𐩷𐩨','tˤajjib'] }},
  // Old Javanese
  kaw: {
    "name": "Old Javanese (Kawi)",
    "native": "ꦨꦴꦰꦏꦮꦶ",
    "lat": -7.79,
    "lng": 110.36,
    "words": {
      "water": [
        "ꦮꦫꦶꦃ",
        "warih"
      ],
      "fire": [
        "ꦄꦒ꧀ꦤꦶ",
        "aɡni"
      ],
      "sun": [
        "ꦱꦸꦂꦪ",
        "suɾja"
      ],
      "moon": [
        "ꦕꦤ꧀ꦢꦿ",
        "tʃandra"
      ],
      "mother": [
        "ꦆꦧꦸ",
        "ibu"
      ],
      "father": [
        "ꦫꦩ",
        "rama"
      ],
      "eat": [
        "ꦄꦩꦔꦤ꧀",
        "amaŋan"
      ],
      "drink": [
        "ꦄꦩꦶꦤꦸꦩ꧀",
        "aminum"
      ],
      "love": [
        "ꦱꦶꦃ",
        "sih"
      ],
      "heart": [
        "ꦲꦠꦶ",
        "hati"
      ],
      "tree": [
        "ꦏꦪꦸ",
        "kaju"
      ],
      "house": [
        "ꦈꦩꦃ",
        "umah"
      ],
      "dog": [
        "ꦄꦱꦸ",
        "asu"
      ],
      "cat": [
        "ꦩꦺꦴꦁ",
        "moŋ"
      ],
      "hand": [
        "ꦠꦔꦤ꧀",
        "taŋan"
      ],
      "eye": [
        "ꦩꦠ",
        "mata"
      ],
      "hello": [
        "ꦫꦲꦪꦸ",
        "rahaju"
      ],
      "thanks": [
        "ꦤꦸꦮꦸꦤ꧀",
        "nuwun"
      ],
      "one": [
        "ꦌꦏ",
        "eka"
      ],
      "good": [
        "ꦲꦪꦸ",
        "haju"
      ]
    }
  },
  kho: {
    "name": "Khotanese",
    "native": "𑀳𑁆𑀯𑀢𑀦𑀽",
    "lat": 37.11,
    "lng": 79.93,
    "words": {
      "water": [
        "𑀊𑀤𑀸",
        "uːdaː"
      ],
      "fire": [
        "𑀆𑀢𑀭",
        "aːtar"
      ],
      "sun": [
        "𑀉𑀭𑁆𑀫",
        "urma"
      ],
      "moon": [
        "𑀫𑀸𑀲𑁆𑀢",
        "maːsta"
      ],
      "mother": [
        "𑀫𑀸𑀢",
        "maːta"
      ],
      "father": [
        "𑀧𑀺𑀢",
        "pita"
      ],
      "eat": [
        "𑀧𑀭𑀢",
        "parætæ"
      ],
      "drink": [
        "𑀧𑀻𑀅",
        "piːa"
      ],
      "love": [
        "𑀅𑀭𑁆𑀭𑀽",
        "arːuː"
      ],
      "heart": [
        "𑀬𑀲𑀻",
        "ðiː"
      ],
      "tree": [
        "𑀤𑁆𑀭𑀼",
        "drːu"
      ],
      "house": [
        "𑀩𑁆𑀬𑀸𑀳",
        "bjaːha"
      ],
      "dog": [
        "𑀰𑀼",
        "ɕu"
      ],
      "cat": [
        "𑀰𑁆𑀰𑁆𑀭𑀅𑀼",
        "ɕːrau"
      ],
      "hand": [
        "𑀤𑀲𑁆𑀢",
        "dasta"
      ],
      "eye": [
        "𑀘𑁂𑀰𑁆𑀫𑀦𑁆",
        "tʃʰeʃman"
      ],
      "hello": [
        "𑀤𑁆𑀭𑀽𑀤𑀻",
        "drːuːdiː"
      ],
      "thanks": [
        "𑀧𑁆𑀬𑀰𑁆𑀢",
        "pjaʃta"
      ],
      "one": [
        "𑀰𑁆𑀰𑀅𑀼",
        "ɕːau"
      ],
      "good": [
        "𑀯𑀺𑀭𑀢𑁆𑀢",
        "viratːa"
      ]
    }
  },
  gmh: { name: 'Middle High German', native: 'diutsch', lat: 50.00, lng: 8.27, // Mainz / Rhine
    words: { water:['wazzer','watsːer'], fire:['viur','viur'], sun:['sunne','ˈzunːə'], moon:['mâne','ˈmaːnə'], mother:['muoter','ˈmuoːtər'], father:['vater','ˈfatər'], eat:['ezzen','ˈetsːən'], drink:['trinken','ˈtrinkən'], love:['minne','ˈminːə'], heart:['herze','ˈhertsə'], tree:['boum','boum'], house:['hûs','huːs'], dog:['hunt','hunt'], cat:['katze','ˈkatsːə'], hand:['hant','hant'], eye:['ouge','ˈougə'], hello:['gegrüezet','ɡəˈɡryːətsət'], thanks:['danc','dank'], one:['ein','ein'], good:['guot','ɡuoːt'] }},
  // Old Spanish (Castilian)
  osp: { name: 'Old Spanish', native: 'castellano', lat: 42.34, lng: -3.70, // Burgos
    words: { water:['agua','ˈaɣwa'], fire:['fuego','ˈfweɣo'], sun:['sol','sol'], moon:['luna','ˈluna'], mother:['madre','ˈmaðre'], father:['padre','ˈpaðre'], eat:['comer','koˈmeɾ'], drink:['bever','beˈveɾ'], love:['amor','aˈmoɾ'], heart:['coraçón','koɾaˈʣon'], tree:['árbor','ˈaɾβoɾ'], house:['casa','ˈkaza'], dog:['can','kan'], cat:['gato','ˈɡato'], hand:['mano','ˈmano'], eye:['ojo','ˈodʒo'], hello:['salud','saˈlud'], thanks:['mercedes','meɾˈʦeðes'], one:['uno','ˈuno'], good:['bono','ˈbono'] }},
  // Old Khmer (Angkor era)
  okz: { name: 'Old Khmer', native: 'ខ្មែរបុរាណ', lat: 13.41, lng: 103.87, // Angkor
    words: { water:['ទឹក','tik'], fire:['ភ្លើង','pʰlɤːŋ'], sun:['ព្រះអាទិត្យ','preh ʔaːtit'], moon:['ខែ','kʰae'], mother:['មាតា','maːtaː'], father:['បិតា','pitaː'], eat:['សុី','siː'], drink:['ផឹក','pʰək'], love:['ស្នេហា','snehaː'], heart:['ហ្ឫទយ','hridəj'], tree:['ដើមឈើ','daəm tʃʰəː'], house:['គេហ','keːh'], dog:['ឆ្កែ','tʃʰkae'], cat:['ឆ្មា','tʃʰmaː'], hand:['ហស្ត','hast'], eye:['ភ្នែក','pʰnɛːk'], hello:['សួស្តី','suəsdəj'], thanks:['អនុមោទនា','ʔanumoːtəna'], one:['ឯក','ʔaek'], good:['ល្អ','lʔɑː'] }},
  // Old Saxon (Heliand era)
  osx: { name: 'Old Saxon', native: 'sahsisk', lat: 51.96, lng: 7.62, // Westphalia (Münster)
    words: { water:['watar','ˈwatar'], fire:['fiur','fiur'], sun:['sunna','ˈsunːa'], moon:['māno','ˈmaːno'], mother:['muoder','ˈmuodər'], father:['fader','ˈfadər'], eat:['etan','ˈetan'], drink:['drinkan','ˈdrinkan'], love:['minnea','ˈminːea'], heart:['herta','ˈherta'], tree:['bōm','boːm'], house:['hūs','huːs'], dog:['hund','hund'], cat:['katta','ˈkatːa'], hand:['hand','hand'], eye:['ōga','ˈoːɡa'], hello:['heil','heil'], thanks:['thank','θank'], one:['ēn','eːn'], good:['gōd','ɡoːd'] }},
  // === Phase 5: more modern + 3 more historical ===
  // Bantu (Tanzania)
  smg: { name: 'Sukuma', native: 'Kisukuma', lat: -2.52, lng: 32.92, // Mwanza
    words: { water:['minzi','minzi'], fire:['moto','moto'], sun:['izuba','izuba'], moon:['mwedi','mwedi'], mother:['nyina','ɲina'], father:['tata','tata'], eat:['kulia','kulia'], drink:['kunywa','kuɲwa'], love:['kutogwa','kutoɡwa'], heart:['mtima','mtima'], tree:['igili','iɡili'], house:['nyumba','ɲumba'], dog:['mbwa','mbwa'], cat:['paka','paka'], hand:['ikono','ikono'], eye:['liso','liso'], hello:['mbinhi','mbiɲi'], thanks:['nashukulu','naʃukulu'], one:['sumwi','sumwi'], good:['-tare','tare'] }},
  // Niger-Congo Gur (Burkina Faso)
  mos: { name: 'Mooré', native: 'Mòoré', lat: 12.37, lng: -1.52, // Ouagadougou
    words: { water:['koom','koːm'], fire:['bʋgʋm','bʊɡʊm'], sun:['wəntinga','wəntinɡa'], moon:['kiuugu','kiuːɡu'], mother:['ma','ma'], father:['ba','ba'], eat:['dɩ','dɪ'], drink:['yʋ','jʊ'], love:['nong','noŋɡ'], heart:['sũur','sũːr'], tree:['tɩɩg','tɪːɡ'], house:['roogo','roːɡo'], dog:['baaga','baːɡa'], cat:['yʋʋga','jʊːɡa'], hand:['nug','nuɡ'], eye:['nin','nin'], hello:['ne y yibeoogo','ne i jibeoɡo'], thanks:['barka','barka'], one:['a yɛmbɛr','a jɛmbɛr'], good:['sõma','sõma'] }},
  // Nilo-Saharan (Kenya)
  kln: { name: 'Kalenjin', native: 'Kalenjin', lat: 0.51, lng: 35.27, // Eldoret
    words: { water:['beek','beːk'], fire:['maat','maːt'], sun:['asis','asis'], moon:['arawa','arawa'], mother:['ee\'yu','eːju'], father:['abu','abu'], eat:['am','am'], drink:['ee','eː'], love:['chamuga','tʃamuɡa'], heart:['muguleldo','muɡuleldo'], tree:['keetit','keːtit'], house:['gaa','ɡaː'], dog:['ses','ses'], cat:['paka','paka'], hand:['euondap','euondap'], eye:['kosit','kosit'], hello:['chamege','tʃameɡe'], thanks:['kongoi','koŋoi'], one:['agenge','aɡeŋe'], good:['karaaran','karaːran'] }},
  // French-based creole (Indian Ocean)
  mfe: { name: 'Mauritian Creole', native: 'Kreol Morisien', lat: -20.16, lng: 57.49, // Port Louis
    words: { water:['dilo','dilo'], fire:['dife','dife'], sun:['soley','soleɪ'], moon:['lalinn','lalin'], mother:['mama','mama'], father:['papa','papa'], eat:['manze','mãze'], drink:['bwar','bwaɾ'], love:['lamour','lamuɾ'], heart:['leker','lekeɾ'], tree:['pye','pje'], house:['lakaz','lakaz'], dog:['lisien','lisjen'], cat:['lisat','lisat'], hand:['lame','lame'], eye:['lizie','lizje'], hello:['bonzour','bõzuɾ'], thanks:['mersi','meɾsi'], one:['enn','ẽn'], good:['bon','bõ'] }},
  // Niger-Congo Mande (Senegal/Gambia)
  mnk: { name: 'Mandinka', native: 'Mandinka', lat: 13.45, lng: -16.58, // Banjul
    words: { water:['jiyo','dʒijo'], fire:['dimbaa','dimbaː'], sun:['tilo','tilo'], moon:['karoo','karoː'], mother:['baa','baː'], father:['faa','faː'], eat:['domo','domo'], drink:['miŋ','miŋ'], love:['kanu','kanu'], heart:['sondomoo','sondomoː'], tree:['yiroo','jiroː'], house:['buŋo','buŋo'], dog:['wuloo','wuloː'], cat:['ñankuma','ɲankuma'], hand:['buloo','buloː'], eye:['ɲaa','ɲaː'], hello:['salaam','salaːm'], thanks:['abaraka','abaraka'], one:['kiliŋ','kiliŋ'], good:['beteyaa','betejaː'] }},
  // Iranian (Bakhtiari, distinct from Lurish)
  bqi: { name: 'Bakhtiari', native: 'بختیاری', lat: 32.32, lng: 50.85, // Shahrekord
    words: { water:['ئاو','aw'], fire:['تش','teʃ'], sun:['خور','xor'], moon:['مانگ','mãŋ'], mother:['دا','daː'], father:['بوا','bowa'], eat:['خواردن','xwoɾdan'], drink:['خواردن','xwoɾdan'], love:['عشق','eʃq'], heart:['دل','del'], tree:['تو','tow'], house:['حونه','xune'], dog:['کچک','kotʃok'], cat:['پشی','peʃi'], hand:['دست','das'], eye:['تیه','tijah'], hello:['سلام','salaːm'], thanks:['ممنون','mamnun'], one:['یه','je'], good:['خاص','xaːs'] }},
  // Munda (Austroasiatic)
  unr: { name: 'Mundari', native: 'मुण्डारी', lat: 23.34, lng: 85.31, // Ranchi
    words: { water:['daa','daː'], fire:['sengel','seŋɡel'], sun:['singi','siŋɡi'], moon:['chando','tʃando'], mother:['ayo','ajo'], father:['apu','apu'], eat:['jom','dʒom'], drink:['nu','nu'], love:['dularaa','dularaː'], heart:['jiu','dʒiu'], tree:['daru','daru'], house:['oraa','oraː'], dog:['seta','seta'], cat:['pusi','pusi'], hand:['ti','ti'], eye:['med','med'], hello:['johar','dʒohar'], thanks:['dhonyobad','dʱoɲobad'], one:['mid','mid'], good:['bes','bes'] }},
  hoc: { name: 'Ho', native: 'Ho', lat: 22.55, lng: 85.81, // Chaibasa
    words: { water:['daa','daː'], fire:['sengel','seŋɡel'], sun:['singi','siŋɡi'], moon:['chando','tʃando'], mother:['ayu','aju'], father:['apu','apu'], eat:['jom','dʒom'], drink:['nu','nu'], love:['dulaiya','dulaija'], heart:['jiu','dʒiu'], tree:['daru','daru'], house:['oraa','oraː'], dog:['seta','seta'], cat:['pusi','pusi'], hand:['ti','ti'], eye:['med','med'], hello:['johar','dʒohar'], thanks:['dhanybad','dʱanjbad'], one:['miyad','mijad'], good:['bugin','buɡin'] }},
  // Trans-New Guinea (first Papuan language)
  enq: { name: 'Enga', native: 'Enga', lat: -5.47, lng: 143.71, // Wabag
    words: { water:['endaki','endaki'], fire:['ita','ita'], sun:['niko','niko'], moon:['kana','kana'], mother:['ainya','aiɲa'], father:['taata','taːta'], eat:['nepenge','nepeŋe'], drink:['na pee','na peː'], love:['mende','mende'], heart:['maita','maita'], tree:['ita','ita'], house:['anda','anda'], dog:['yana','jana'], cat:['pusi','pusi'], hand:['kingi','kiŋɡi'], eye:['lenge','leŋɡe'], hello:['baa wa','baː wa'], thanks:['yaku','jaku'], one:['mendeai','mendeai'], good:['epe','epe'] }},
  // Middle Iranian (Parthian, distinct from Pahlavi)
  xpr: { name: 'Parthian', native: 'Pārthawānīg', lat: 37.97, lng: 58.20, // Nisa, Turkmenistan
    words: { water:['āb','aːb'], fire:['ādar','aːdar'], sun:['xwar','xwar'], moon:['māh','maːh'], mother:['mād','maːd'], father:['pid','pid'], eat:['xward-','xward'], drink:['pī-','piː'], love:['friyādan','frijaːdan'], heart:['dil','dil'], tree:['dār','daːr'], house:['xānag','xaːnaɡ'], dog:['spag','spaɡ'], cat:['pišī','piʃiː'], hand:['dast','dast'], eye:['čašm','tʃaʃm'], hello:['drōd','droːd'], thanks:['spās','spaːs'], one:['ēw','eːw'], good:['nēw','neːw'] }},
  // Karakhanid (Old Turkic of Kashgar)
  xqa: { name: 'Karakhanid', native: 'تركي', lat: 39.47, lng: 75.99, // Kashgar
    words: { water:['suw','suw'], fire:['ot','ot'], sun:['kün','kyn'], moon:['ay','aj'], mother:['ana','ana'], father:['ata','ata'], eat:['yi-','ji'], drink:['ič-','itʃ'], love:['sevgü','sevɡy'], heart:['yürek','jyrek'], tree:['ığač','ɯɣatʃ'], house:['ev','ev'], dog:['it','it'], cat:['piši','piʃi'], hand:['qol','qol'], eye:['köz','køz'], hello:['salām','salaːm'], thanks:['tabug','tabuɡ'], one:['bir','bir'], good:['yaqšı','jaqʃɯ'] }},
  // Old Irish (Goidelic, c. 600-900 CE)
  sga: { name: 'Old Irish', native: 'Goídelc', lat: 54.35, lng: -6.65, // Armagh
    words: { water:['usce','uske'], fire:['tene','tene'], sun:['grían','ɡrian'], moon:['éscae','eːskai'], mother:['máthair','maːθirʲ'], father:['athair','aθirʲ'], eat:['ithid','iθʲiðʲ'], drink:['ibid','iβʲiðʲ'], love:['serc','serk'], heart:['cride','krʲiðʲe'], tree:['crann','kran'], house:['tech','tex'], dog:['cú','kuː'], cat:['cat','kat'], hand:['lám','laːv'], eye:['súil','suːlʲ'], hello:['dia duit','dia duitʲ'], thanks:['atloirgaim','atloiɾɡim'], one:['oín','oin'], good:['maith','maθʲ'] }},
  // === Phase 6: filling final major gaps ===
  // Language isolate (Karakoram)
  bsk: { name: 'Burushaski', native: 'بُروشَسکی', lat: 36.32, lng: 74.65, // Hunza
    words: { water:['čhil','tʂʰil'], fire:['phu','pʰu'], sun:['sá','saː'], moon:['hálance','halantse'], mother:['ámi','ami'], father:['ússa','usːa'], eat:['ši-','ʂi'], drink:['minas','minas'], love:['yarum','jarum'], heart:['-us','us'], tree:['tom','tom'], house:['ha','ha'], dog:['huk','huk'], cat:['bushi','buʂi'], hand:['-rin','rin'], eye:['-lčin','ltʂin'], hello:['šuá','ʂuaː'], thanks:['shukria','ʃukrija'], one:['hin','hin'], good:['shua','ʂua'] }},
  // Iranian (Sogdian descendant)
  yag: { name: 'Yaghnobi', native: 'yaġnobí zivók', lat: 39.15, lng: 68.50, // Yaghnob Valley
    words: { water:['уп','up'], fire:['одар','odar'], sun:['мет','met'], moon:['маҳ','mah'], mother:['мот','mot'], father:['піт','pit'], eat:['хур','xur'], drink:['вит','vit'], love:['мехр','mehr'], heart:['дил','dil'], tree:['дор','dor'], house:['кат','kat'], dog:['куч','kutʃ'], cat:['пшак','pʃak'], hand:['даст','dast'], eye:['чашм','tʃaʃm'], hello:['салом','salom'], thanks:['рахмат','rahmat'], one:['я','ja'], good:['хуб','xub'] }},
  // English-based creole (Suriname)
  srn: { name: 'Sranan Tongo', native: 'Sranan Tongo', lat: 5.85, lng: -55.20, // Paramaribo
    words: { water:['watra','watra'], fire:['faya','faja'], sun:['son','soŋ'], moon:['mun','mun'], mother:['mama','mama'], father:['papa','papa'], eat:['nyan','ɲan'], drink:['dringi','driŋi'], love:['lobi','lobi'], heart:['ati','ati'], tree:['bon','boŋ'], house:['oso','oso'], dog:['dagu','daɡu'], cat:['poesi','pusi'], hand:['anu','anu'], eye:['ai','ai'], hello:['odi','odi'], thanks:['grantangi','ɡrantaŋi'], one:['wan','wan'], good:['bun','buŋ'] }},
  // Wakashan (Pacific Northwest Coast)
  kwk: { name: 'Kwak\'wala', native: 'Kwak\'wala', lat: 50.62, lng: -126.93, // Vancouver Island
    words: { water:['\'wap','ʔwap'], fire:['lax̱','lax'], sun:['ƛ\'isa̱la','tɬʼisəla'], moon:['\'mukwa','ʔmukʷa'], mother:['abe','abe'], father:['o̱mp','omp'], eat:['ha̱\'ma̱p','haʔməp'], drink:['na̱\'qa','naʔqa'], love:['\'ya̱x̱is','ʔjəxis'], heart:['ts\'iłas','tsʼiɬas'], tree:['x̱o̱kwa','xokʷa'], house:['g̱ukw','ɡukʷ'], dog:['\'wa̱ts\'i','ʔwətsʼi'], cat:['pi̱s','pis'], hand:['\'wała','ʔwaɬa'], eye:['gigayu','ɡiɡaju'], hello:['gilakas\'la','ɡilakasla'], thanks:['gilakas\'la','ɡilakasla'], one:['\'na̱m','ʔnəm'], good:['ek','ek'] }},
  // Khoisan (Tanzania, distinct from Hadza)
  sad: { name: 'Sandawe', native: 'Sandawe', lat: -4.91, lng: 35.78, // Kondoa
    words: { water:['tsʼa','tsʼa'], fire:['cʼoo','tsʼoː'], sun:['kʼɔɔ','kʼɔː'], moon:['tsoa','tsoa'], mother:['yei','jei'], father:['ai','ai'], eat:['ǁee','ǁeː'], drink:['ʔee','ʔeː'], love:['kalokisi','kalokisi'], heart:['ǁʼampoo','ǁʼampoː'], tree:['hetsʼee','hetsʼeː'], house:['ge','ɡe'], dog:['ǀɔɔ','ǀɔː'], cat:['misho','miʃo'], hand:['kxʼaa','kxʼaː'], eye:['gaa','ɡaː'], hello:['gabaeesa','ɡabaeːsa'], thanks:['musʼokoyo','muʃokojo'], one:['tsʼekʼe','tsʼekʼe'], good:['tlʼobe','tɬʼobe'] }},
  // Tai-Kadai (China, related to Zhuang)
  pcc: { name: 'Bouyei', native: 'Haausqyaix', lat: 26.58, lng: 106.71, // Anshun
    words: { water:['raamx','raːm'], fire:['feih','fei'], sun:['ngonzbyaaiz','ŋonpjaːi'], moon:['ronh','roːn'], mother:['meeh','meː'], father:['poh','poː'], eat:['gianl','ɡian'], drink:['gunl','ɡuŋ'], love:['gaais','ɡaːi'], heart:['saamh','saːm'], tree:['faix','fai'], house:['ranz','raŋ'], dog:['ma','ma'], cat:['meeuq','meːu'], hand:['faengz','faŋ'], eye:['daa','daː'], hello:['meez ndil','meː ndi'], thanks:['gangzhainh','ɡaŋhaiŋ'], one:['ndeeul','ndeːu'], good:['ndil','ndil'] }},
  // Hmong-Mien (Yao branch)
  iuu: { name: 'Iu Mien', native: 'Iu Mienh', lat: 22.0, lng: 103.0, // Vietnam-Laos-China border
    words: { water:['wuom','wuom'], fire:['douz','dou'], sun:['hnoi','hnoi'], moon:['hlaax','hlaː'], mother:['maa','maː'], father:['diex','die'], eat:['nyanc','ɲan'], drink:['hopv','hop'], love:['hnamv','hnam'], heart:['mba\'y-fim','mbai fim'], tree:['ndiangx','ndian'], house:['biauv','biau'], dog:['juv','dʒuv'], cat:['mbao','mbao'], hand:['buoz','buo'], eye:['m\'zing','mziŋ'], hello:['yiem-longx','jiem lon'], thanks:['laengz','laŋ'], one:['yietc','jiet'], good:['longx','lon'] }},
  // Trans-New Guinea (additional)
  hui: { name: 'Huli', native: 'Huli', lat: -5.85, lng: 142.95, // Tari
    words: { water:['iba','iba'], fire:['tia','tia'], sun:['nogo','noɡo'], moon:['hina','hina'], mother:['ainya','aiɲa'], father:['aba','aba'], eat:['na','na'], drink:['ila','ila'], love:['hando','hando'], heart:['hambu','hambu'], tree:['danda','danda'], house:['anda','anda'], dog:['yamu','jamu'], cat:['pusi','pusi'], hand:['ki','ki'], eye:['ta','ta'], hello:['balu','balu'], thanks:['wei','wei'], one:['mendene','mendene'], good:['poke','poke'] }},
  // Polynesian (Tokelau)
  tkl: { name: 'Tokelauan', native: 'Tokelau', lat: -8.55, lng: -172.50, // Atafu
    words: { water:['vai','vai'], fire:['afi','afi'], sun:['la','la'], moon:['malama','malama'], mother:['matua','matua'], father:['tamana','tamana'], eat:['kai','kai'], drink:['inu','inu'], love:['alofa','alofa'], heart:['fatu','fatu'], tree:['lakau','lakau'], house:['fale','fale'], dog:['kuli','kuli'], cat:['pusi','pusi'], hand:['lima','lima'], eye:['mata','mata'], hello:['malo ni','malo ni'], thanks:['fakafetai','fakafetai'], one:['tahi','tahi'], good:['lelei','lelei'] }},
  // Salishan (Pacific Northwest Coast)
  squ: { name: 'Squamish', native: 'Sḵwx̱wú7mesh sníchim', lat: 49.70, lng: -123.16, // Squamish, BC
    words: { water:['stáḵw','staqʷ'], fire:['sḵwiḵw','sqʷiqʷ'], sun:['snexwílh','snexʷiɬ'], moon:['lh7álha','ɬʔaɬa'], mother:['sma','sma'], father:['smas','smas'], eat:['i7iyím','iʔijim'], drink:['q\'emél̕chen','qʼemʔeɬtʃen'], love:['néxwsa','nexʷsa'], heart:['stúlich','stulitʃ'], tree:['stsék\'as','stsekʼas'], house:['lám\'','laːmʔ'], dog:['sḵáxwesh','sqaxʷeʃ'], cat:['pus','pus'], hand:['chálash','tʃaːlaʃ'], eye:['kwíkw','kʷikʷ'], hello:['chen kwenmántumi','tʃen kʷenmantumi'], thanks:['huy chexw a','huj tʃexʷ a'], one:['nch\'a7','ntʃʼaʔ'], good:['éy','ej'] }},
  // Middle Irish (between Old Irish and Modern Irish)
  mga: { name: 'Middle Irish', native: 'Gáedelg', lat: 53.59, lng: -6.62, // Tara/Dublin
    words: { water:['usce','uske'], fire:['tene','tene'], sun:['grían','ɡrian'], moon:['ésca','eːska'], mother:['máthair','maːθirʲ'], father:['athair','aθirʲ'], eat:['ithid','iθʲiðʲ'], drink:['ól','oːl'], love:['serc','serk'], heart:['cride','krʲiðʲe'], tree:['crann','kran'], house:['tech','tex'], dog:['madra','madra'], cat:['cat','kat'], hand:['lám','laːv'], eye:['súil','suːlʲ'], hello:['dia duit','dia duitʲ'], thanks:['atloirgaim','atloiɾɡim'], one:['óen','oin'], good:['maith','maθʲ'] }},
  // Biblical/Ancient Hebrew (distinct from Modern Hebrew)
  hbo: { name: 'Biblical Hebrew', native: 'עברית מקראית', lat: 31.78, lng: 35.21, // Jerusalem
    words: { water:['מים','majim'], fire:['אש','ʔeʃ'], sun:['שמש','ʃemeʃ'], moon:['ירח','jaːreːaħ'], mother:['אם','ʔeːm'], father:['אב','ʔaːv'], eat:['אכל','ʔaːkal'], drink:['שתה','ʃaːtaː'], love:['אהב','ʔaːhav'], heart:['לב','leːv'], tree:['עץ','ʕeːts'], house:['בית','bajit'], dog:['כלב','kelev'], cat:['—','—'], hand:['יד','jaːd'], eye:['עין','ʕajin'], hello:['שלום','ʃaːloːm'], thanks:['תודה','toːðaː'], one:['אחד','ʔeħaːd'], good:['טוב','tˤoːv'] }},
  // === Phase 7: regional gap-fillers ===
  // Trans-New Guinea (Papuan)
  mpt: { name: 'Mian', native: 'Mian', lat: -5.13, lng: 141.61, // Telefomin
    words: { water:['ot','ot'], fire:['aon','aon'], sun:['kep','kep'], moon:['ham','ham'], mother:['na','na'], father:['ki','ki'], eat:['naka','naka'], drink:['an','an'], love:['na','na'], heart:['tem','tem'], tree:['yel','jel'], house:['am','am'], dog:['kowok','kowok'], cat:['pus','pus'], hand:['kun','kun'], eye:['tan','tan'], hello:['aben','aben'], thanks:['hok','hok'], one:['alok','alok'], good:['kep','kep'] }},
  ygr: { name: 'Yagaria', native: 'Yagaria', lat: -6.58, lng: 145.39, // Eastern Highlands
    words: { water:['nofa','nofa'], fire:['yo','jo'], sun:['kena','kena'], moon:['ulu','ulu'], mother:['nene','nene'], father:['papa','papa'], eat:['na','na'], drink:['nava','nava'], love:['amige','amiɡe'], heart:['nemo','nemo'], tree:['yake','jake'], house:['nono','nono'], dog:['yapa','japa'], cat:['pusi','pusi'], hand:['bayo','bajo'], eye:['gago','ɡaɡo'], hello:['amige','amiɡe'], thanks:['tega','teɡa'], one:['kahene','kahene'], good:['kavi','kavi'] }},
  // Quechuan (specific varieties)
  quz: { name: 'Cusco Quechua', native: 'Qhichwa', lat: -13.53, lng: -71.97, // Cusco
    words: { water:['unu','unu'], fire:['nina','nina'], sun:['inti','inti'], moon:['killa','kiʎa'], mother:['mama','mama'], father:['tayta','tajta'], eat:['mikhuy','mikʰuj'], drink:['upyay','upjaj'], love:['munay','munaj'], heart:['sunqu','sunqu'], tree:['sach\'a','satʃʼa'], house:['wasi','wasi'], dog:['alqu','alqu'], cat:['misi','misi'], hand:['maki','maki'], eye:['ñawi','ɲawi'], hello:['rimaykullayki','rimajkuʎajki'], thanks:['añay','aɲaj'], one:['huk','huk'], good:['allin','aʎin'] }},
  quy: { name: 'Ayacucho Quechua', native: 'Chanka Runasimi', lat: -13.16, lng: -74.22, // Ayacucho
    words: { water:['yaku','jaku'], fire:['nina','nina'], sun:['inti','inti'], moon:['killa','kiʎa'], mother:['mama','mama'], father:['tayta','tajta'], eat:['mikuy','mikuj'], drink:['upyay','upjaj'], love:['kuyay','kujaj'], heart:['sunqu','sunqu'], tree:['sacha','satʃa'], house:['wasi','wasi'], dog:['allqu','aʎqu'], cat:['michi','mitʃi'], hand:['maki','maki'], eye:['ñawi','ɲawi'], hello:['napaykullayki','napajkuʎajki'], thanks:['agradecekuyki','aɡradesekujki'], one:['huk','huk'], good:['allin','aʎin'] }},
  // Arawakan (Caribbean)
  cab: { name: 'Garifuna', native: 'Karifuna', lat: 15.77, lng: -86.79, // La Ceiba
    words: { water:['huya','huja'], fire:['watu','watu'], sun:['weyu','weju'], moon:['hati','hati'], mother:['úguchu','uɡutʃu'], father:['úguchili','uɡutʃili'], eat:['éiga','eiɡa'], drink:['ata','ata'], love:['hínsiñe','hinsiɲe'], heart:['anigi','aniɡi'], tree:['wewe','wewe'], house:['muna','muna'], dog:['aulamu','aulamu'], cat:['meu','meu'], hand:['úhabu','uhabu'], eye:['úgubu','uɡubu'], hello:['mabuiga','mabuiɡa'], thanks:['seremein','seremein'], one:['aban','aban'], good:['buidu','bwidu'] }},
  // Athabaskan (BC, Canada)
  crx: { name: 'Carrier', native: 'Dakelh', lat: 53.92, lng: -122.75, // Prince George
    words: { water:['tu','tu'], fire:['kwen','kʷen'], sun:['sa','sa'], moon:['sa-tlhaeh','sa tɬaeh'], mother:['oo','oː'], father:['abe','abe'], eat:['ʼoonjuh','ʔoːndʒuh'], drink:['dunjuh','dundʒuh'], love:['sjut','sdʒut'], heart:['ʼunjid','ʔundʒid'], tree:['dechen','detʃen'], house:['yoh','joh'], dog:['łi','ɬi'], cat:['gus','ɡus'], hand:['la','la'], eye:['ʼunaq','ʔunaq'], hello:['ʼahdoozaee','ʔahdoːzaː'], thanks:['snachailya','snatʃailja'], one:['ʼulhah','ʔuɬah'], good:['nezuʼ','nezuʔ'] }},
  // Tsimshianic (Pacific Northwest Coast)
  tsi: { name: 'Coast Tsimshian', native: 'Sm\'algyax', lat: 54.31, lng: -130.32, // Prince Rupert
    words: { water:['ax̱s','aχs'], fire:['laḵw','laqʷ'], sun:['gyemk','ɡjemk'], moon:['gemk','ɡemk'], mother:['naa','naː'], father:['baba','baba'], eat:['lalji','laldʒi'], drink:['hoos','huːs'], love:['ksu\'hahkw','ksuʔhahkʷ'], heart:['ootnasx̱','oːtnasχ'], tree:['gan','ɡan'], house:['walp','walp'], dog:['hashasaa','haʃasaː'], cat:['doosgi','duːsɡi'], hand:['an\'oon','anʔoːn'], eye:['mooḵs','muːqs'], hello:['ndii ne','ndiː ne'], thanks:['t\'oyaxsut nüsm','tʼojaχsut nyzm'], one:['ḵoo\'iyaa','qoːʔijaː'], good:['am\'','amʔ'] }},
  // Iranian (Pamir)
  wbl: { name: 'Wakhi', native: 'x̌ikwor zik', lat: 36.95, lng: 73.52, // Wakhan
    words: { water:['яу','jau'], fire:['ракс','raks'], sun:['йир','jir'], moon:['зимак','zimak'], mother:['нан','nan'], father:['тат','tat'], eat:['йав-','jav'], drink:['пав-','pav'], love:['руб','rub'], heart:['дил','dil'], tree:['ведж','vedʒ'], house:['хун','xun'], dog:['шач','ʃatʃ'], cat:['мушук','muʃuk'], hand:['дос','dos'], eye:['чашм','tʃaʃm'], hello:['салам','salam'], thanks:['ишкур','iʃkur'], one:['йиу','jiu'], good:['байт','bajt'] }},
  // Indo-Aryan (Dardic, Afghanistan)
  psi: { name: 'Pashai', native: 'pâšâî', lat: 35.0, lng: 69.5, // Kapisa
    words: { water:['واری','waːri'], fire:['انگاری','aŋɡaːri'], sun:['سور','sur'], moon:['مس','mas'], mother:['نا','naː'], father:['تاتا','taːtaː'], eat:['کخن-','kxn'], drink:['پی-','piː'], love:['پیار','pjaːr'], heart:['دل','dil'], tree:['درغ','darʁ'], house:['جوغ','dʒoʁ'], dog:['کوتا','kotaː'], cat:['بلور','baloːr'], hand:['دست','dast'], eye:['اچی','atʃiː'], hello:['سلام','salaːm'], thanks:['شکریه','ʃukrija'], one:['ایک','eːk'], good:['شو','ʃoː'] }},
  // Indo-Aryan (Rajasthani)
  bgq: { name: 'Bagri', native: 'बागड़ी', lat: 28.02, lng: 73.31, // Bikaner
    words: { water:['पाणी','paːɳiː'], fire:['आग','aːɡ'], sun:['सूरज','suːraj'], moon:['चंदो','tʃando'], mother:['माय','maːj'], father:['बाप','baːp'], eat:['खावणो','kʰaːʋɳo'], drink:['पीवणो','piːʋɳo'], love:['मया','məjaː'], heart:['हिवड़ो','hivəɽo'], tree:['रूख','ɾuːkʰ'], house:['घर','ɡʱar'], dog:['कुत्तो','kutːoʔ'], cat:['मीनी','miːniː'], hand:['हाथ','haːtʰ'], eye:['आंख','aːŋkʰ'], hello:['खम्मा घणी','kʰəmːaː ɡʱəɳiː'], thanks:['धन्यवाद','dʱanjabaːd'], one:['एक','eːk'], good:['चोखो','tʃoːkʰo'] }},
  // Nilo-Saharan (Western Nilotic, Luo)
  ach: { name: 'Acholi', native: 'Lwoo', lat: 2.78, lng: 32.30, // Gulu
    words: { water:['pii','piː'], fire:['mac','matʃ'], sun:['ceng','tʃeŋ'], moon:['dwe','dwe'], mother:['mego','meɡo'], father:['baba','baba'], eat:['cam','tʃam'], drink:['mat','mat'], love:['mar','mar'], heart:['cwiny','tʃwiɲ'], tree:['yat','jat'], house:['ot','ot'], dog:['gwok','ɡʷok'], cat:['ngabu','ŋabu'], hand:['cing','tʃiŋ'], eye:['wang','waŋ'], hello:['itye nining','itje niniŋ'], thanks:['apwoyo','apʷojo'], one:['acel','atʃel'], good:['ber','ber'] }},
  lag: { name: 'Lango', native: 'Lëblaŋo', lat: 2.25, lng: 32.90, // Lira
    words: { water:['pii','piː'], fire:['mac','matʃ'], sun:['ceŋ','tʃeŋ'], moon:['dwe','dwe'], mother:['maa','maː'], father:['papa','papa'], eat:['cam','tʃam'], drink:['mat','mat'], love:['mar','mar'], heart:['cwiny','tʃwiɲ'], tree:['yat','jat'], house:['ot','ot'], dog:['gwok','ɡʷok'], cat:['ngao','ŋao'], hand:['ciŋ','tʃiŋ'], eye:['waŋ','waŋ'], hello:['itye nining','itje niniŋ'], thanks:['apwoyo','apʷojo'], one:['acel','atʃel'], good:['ber','ber'] }},
  // === Phase 8: East / SE Asian major dialects ===
  // Burmese variety
  rki: { name: 'Rakhine', native: 'ရခိုင်ဘာသာ', lat: 20.15, lng: 92.90, // Sittwe
    words: { water:['ရေ','ɹeː'], fire:['မီး','miː'], sun:['နေ','neː'], moon:['လ','la'], mother:['အမေ','ʔəmeː'], father:['အဖေ','ʔəpʰeː'], eat:['စား','sa'], drink:['သာက်','θaˀ'], love:['အချစ်','ʔəkʰjiˀ'], heart:['နှလုံး','n̥əlóuɴ'], tree:['သစ်ပင်','θiˀpìɴ'], house:['အိမ်','ʔèiɴ'], dog:['ခွေး','kʰwé'], cat:['ကြောင်','tɕàuɴ'], hand:['လက်','lɛˀ'], eye:['မျက်စိ','mjɛˀsì'], hello:['မဂႝလာပါ','mìɴɡəlà pà'], thanks:['ကျေးဇူးတင်ပါတယ်','tɕézú tìɴ pà dɛ̀'], one:['တစ်','tiˀ'], good:['ကောင်း','káuɴ'] }},
  // Khmer variety (Thailand-Cambodia border)
  kxm: { name: 'Northern Khmer', native: 'ភាសាខ្មែរ (Surin)', lat: 14.88, lng: 103.49, // Surin
    words: { water:['ទឹក','tək'], fire:['ភ្លើង','pʰlɤːŋ'], sun:['ថ្ងៃ','tŋai'], moon:['ខែ','kʰae'], mother:['ម៉ែ','maɛ'], father:['ប៉ា','paː'], eat:['ស៊ី','siː'], drink:['ផឹក','pʰək'], love:['ស្រឡាញ់','sralaɲ'], heart:['ចិត្ត','tɕit'], tree:['ដើមឈើ','daəm tʃʰəː'], house:['ផ្ទះ','ptʰeah'], dog:['ឆ្កែ','tʃʰkae'], cat:['ឆ្មា','tʃʰmaː'], hand:['ដៃ','daj'], eye:['ភ្នែក','pʰnɛːk'], hello:['សួស្តី','suːəsdəj'], thanks:['អរគុណ','ʔɔːkun'], one:['មួយ','muːj'], good:['ល្អ','lʔɑː'] }},
  // Mongolian (historical)
  // Middle Mongolian. Co-located with Old Turkic at the Orkhon valley
  // (Karakorum area) — the wordmap's coordGroup logic auto-stacks labels
  // sharing the same lat/lng so they don't overlap visually.
  // Word forms use Traditional Mongolian script (vertical) with Latin
  // transliteration in the IPA field.
  xng: { name: 'Middle Mongolian', native: 'ᠮᠣᠩᠭᠣᠯ', lat: 47.20, lng: 102.83, // Karakorum / Orkhon valley
    words: { water:['ᠤᠰᠤᠨ','usun'], fire:['ᠭᠠᠯ','ɣal'], sun:['ᠨᠠᠷᠠᠨ','naran'], moon:['ᠰᠠᠷᠠ','sara'], mother:['ᠡᠭᠡ','eke'], father:['ᠡᠴᠢᠭᠡ','etʃiɡe'], eat:['ᠢᠳᠡ','ide'], drink:['ᠤᠭᠤ','oɣu'], love:['ᠳᠤᠷᠠ','dura'], heart:['ᠵᠢᠷᠦᠭᠡ','dʒirüke'], tree:['ᠮᠣᠳᠤᠨ','modun'], house:['ᠭᠡᠷ','ɡer'], dog:['ᠨᠣᠬᠠᠢ','nokai'], cat:['ᠮᠢᠭᠤᠢ','miɣui'], hand:['ᠭᠠᠷ','ɣar'], eye:['ᠨᠢᠳᠦᠨ','nidün'], hello:['ᠠᠮᠤᠷ','amur'], thanks:['ᠪᠠᠶᠠᠷᠯᠠᠪᠠ','bajarlaba'], one:['ᠨᠢᠭᠡᠨ','niɡen'], good:['ᠰᠠᠶᠢᠨ','sain'] }},
  // Japanese dialects (additional)
  ja_kg: { name: 'Japanese (Kagoshima)', native: '日本語(鹿児島)', lat: 31.59, lng: 130.55, // Kagoshima
    words: { water:['水','mid̥zɯ̥'], fire:['火っ','çiʔ'], sun:['お日さん','ohisaN'], moon:['月','tsɯki'], mother:['かか','kaka'], father:['とと','toto'], eat:['食ぼっか','tabokːa'], drink:['飲んで','nondeː'], love:['愛','ai'], heart:['心','kokoɾo'], tree:['木','ki'], house:['家','eː'], dog:['犬','iN'], cat:['猫','neko'], hand:['手','te'], eye:['目','me'], hello:['おやっとさあ','ojattosaː'], thanks:['ありがとさげもす','aɾiɡatosaɡemosɯ'], one:['一つ','çitotsɯ'], good:['良か','joka'] }},
  ja_sd: { name: 'Japanese (Sendai)', native: '日本語(仙台)', lat: 38.27, lng: 140.87, // Sendai
    words: { water:['水','midzɯ'], fire:['火','hi'], sun:['お日さま','ohisama'], moon:['月','tsɯki'], mother:['おっかさん','okːasaN'], father:['おっとさん','otːosaN'], eat:['食う','kuː'], drink:['飲む','nomɯ'], love:['めごい','meɡoi'], heart:['心','kokoɾo'], tree:['木','ki'], house:['家','ie'], dog:['犬','inɯ'], cat:['猫','neko'], hand:['手','te'], eye:['目','me'], hello:['おばんでがす','obandeɡasɯ'], thanks:['ありがとがんす','aɾiɡatoɡansɯ'], one:['一っつ','hitottsɯ'], good:['良いでがす','iːdeɡasɯ'] }},
  // Korean dialects (additional)
  ko_hg: { name: 'Korean (Hamgyong)', native: '함경방언', lat: 39.92, lng: 127.54, // Hamhung
    words: { water:['물','mul'], fire:['불','pul'], sun:['해','hɛ'], moon:['달','tal'], mother:['어머이','ʌmʌi'], father:['아바이','abai'], eat:['먹다','mʌk̚t͈a'], drink:['마시다','maɕida'], love:['사랑','saɾaŋ'], heart:['마음','maɯm'], tree:['나무','namu'], house:['집','tɕip̚'], dog:['개','kɛ'], cat:['고양이','kojaŋi'], hand:['손','son'], eye:['눈','nun'], hello:['안녕하시꼬마','annjʌŋhaɕikːoma'], thanks:['고마와','komawa'], one:['한나','hanːa'], good:['좋다','tɕot̚t͈a'] }},
  ko_jl: { name: 'Korean (Jeolla)', native: '전라방언', lat: 35.16, lng: 126.85, // Gwangju
    words: { water:['물','mul'], fire:['불','pul'], sun:['해','hɛ'], moon:['달','tal'], mother:['어매','ʌmɛ'], father:['아베','abe'], eat:['먹어','mʌɡʌ'], drink:['마셔','maɕjʌ'], love:['사랑','saɾaŋ'], heart:['마음','maɯm'], tree:['나무','namu'], house:['집','tɕip̚'], dog:['개','kɛ'], cat:['고양이','kojaŋi'], hand:['손','son'], eye:['눈','nun'], hello:['어이','ʌi'], thanks:['고맙당께','komap̚t͈aŋkːe'], one:['하나','hana'], good:['좋아부러','tɕoabuɾʌ'] }},
  // Chinese diaspora variant
  nan_pn: { name: 'Penang Hokkien', native: '庇能福建話', lat: 5.41, lng: 100.34, // George Town
    words: { water:['水','tsui˥˧'], fire:['火','hue˥˧'], sun:['日頭','lit˥tʰau˨˨'], moon:['月娘','gueh˥niũ'], mother:['阿媽','a˧˧ma˧˧'], father:['阿爸','a˧˧pa˥˥'], eat:['食','tsiaʔ˥'], drink:['啉','lim˧˧'], love:['愛','ai˨˩˧'], heart:['心','sim˧˧'], tree:['樹','tsʰiu˩˩'], house:['厝','tsʰu˨˩˧'], dog:['狗','kau˥˧'], cat:['貓','niau˧˧'], hand:['手','tsʰiu˥˧'], eye:['目','bak˥'], hello:['你好','li˥˧ho˥˧'], thanks:['多謝','to˥˥sia˩˩'], one:['一','tsit˥'], good:['好','ho˥˧'] }},
  // Mlabri (Northern Thailand hunter-gatherer)
  mra: { name: 'Mlabri', native: 'Mlabri', lat: 19.46, lng: 100.86, // Nan
    words: { water:['om','om'], fire:['ʔus','ʔus'], sun:['ŋay','ŋai'], moon:['thel','tʰel'], mother:['mɛʔ','mɛʔ'], father:['paʔ','paʔ'], eat:['ʔiʔ','ʔiʔ'], drink:['ʔaa','ʔaː'], love:['kraʔ','kraʔ'], heart:['kɛm','kɛm'], tree:['tɔn','tɔn'], house:['tu','tu'], dog:['cɛn','tɕɛn'], cat:['meo','meo'], hand:['tiʔ','tiʔ'], eye:['mɔt','mɔt'], hello:['hahɔ','haho'], thanks:['knɔŋ','knoŋ'], one:['mɔy','mɔi'], good:['laʔ','laʔ'] }},
  // Wu Chinese (Ningbo)
  wuu_nb: { name: 'Ningbo Wu', native: '宁波话', lat: 29.87, lng: 121.55, // Ningbo
    words: { water:['水','sɿ˨˩˦'], fire:['火','hu˨˩˦'], sun:['日头','ɲiʔ˩˨dɤu'], moon:['月亮','ɲyəʔ˩˨liaŋ'], mother:['阿妈','aʔ˦˦ma'], father:['阿爸','aʔ˦˦pa'], eat:['吃','tɕʰiʔ˩˨'], drink:['喝','hoʔ˩˨'], love:['爱','ai˥˧'], heart:['心','siN˦˦'], tree:['树','zɿ˨˧'], house:['屋里','oʔ˥˥li'], dog:['狗','kəu˨˩˦'], cat:['猫','mɔ˦˦'], hand:['手','sɤu˨˩˦'], eye:['眼睛','ŋɛ˨˧tɕiN˦˦'], hello:['侬好','noŋ˦˦hɔ˨˩˦'], thanks:['谢谢','ɕia˨˧ɕia'], one:['一','iʔ˩˨'], good:['好','hɔ˨˩˦'] }},
  // Yue Chinese (Western Guangdong)
  yue_gz: { name: 'Gaozhou Yue', native: '高州话', lat: 21.92, lng: 110.85, // Gaozhou
    words: { water:['水','sɵi˧˥'], fire:['火','fɔ˧˥'], sun:['日头','jɐt˥tʰɐu˧˧'], moon:['月光','jyt˥kwɔŋ˥˥'], mother:['妈妈','maː˥˥maː˥˥'], father:['爸爸','paː˨˩paː˨˩'], eat:['食','sɪk˨˨'], drink:['饮','jɐm˧˥'], love:['爱','ɔi˧˧'], heart:['心','sɐm˥˥'], tree:['树','sy˨˨'], house:['屋','ʊk˥'], dog:['狗','kɐu˧˥'], cat:['猫','maːu˥˥'], hand:['手','sɐu˧˥'], eye:['眼','ŋaːn˧˥'], hello:['你好','nei˧˥hɔu˧˥'], thanks:['多谢','tɔ˥˥tsɛ˨˨'], one:['一','jɐt˥'], good:['好','hɔu˧˥'] }},
  // Tai Lue (Sipsongpanna)
  khb: { name: 'Tai Lue', native: 'ᦅᧄᦺᦑᦟᦹᧉ', lat: 22.01, lng: 100.80, // Jinghong, Sipsongpanna
    words: { water:['ᦓᧄᧉ','nam'], fire:['ᦺᦝ','fai'], sun:['ᦋᧁᧉ','tsau'], moon:['ᦟᦲᧃ','liːn'], mother:['ᦡᦲᧈ','meː'], father:['ᦗᦸᧈ','pɔː'], eat:['ᦂᦲᧃ','kin'], drink:['ᦂᦲᧃᦓᧄᧉ','kin nam'], love:['ᦣᧅ','hak'], heart:['ᦗᦸ','pɔ'], tree:['ᦷᦎᧃᦺᦙᧉ','ton mai'], house:['ᦠᦴᧃᧉ','huːn'], dog:['ᦙᦱ','maː'], cat:['ᦙᦦᧁ','mɛw'], hand:['ᦙᦹ','muː'], eye:['ᦎᦱ','taː'], hello:['ᦷᦡᧃᦟᦲ','dɔn liː'], thanks:['ᦀᦸᧃᦷᦓᧁ','ʔɔn nau'], one:['ᦓᦹᧂᧈ','nuŋ'], good:['ᦡᦲ','diː'] }},
  // === Phase 9: African + Filipino gap-fillers ===
  pam: { name: 'Kapampangan', native: 'Kapampangan', lat: 15.03, lng: 120.69, // San Fernando
    words: { water:['danum','daˈnum'], fire:['api','ʔaˈpi'], sun:['aldo','ʔalˈdoʔ'], moon:['bulan','buˈlan'], mother:['ima','ˈʔima'], father:['tata','ˈtataʔ'], eat:['mangan','maˈŋan'], drink:['minum','miˈnum'], love:['lugud','luˈɡud'], heart:['pusu','ˈpusoʔ'], tree:['dutung','duˈtuŋ'], house:['bale','baˈle'], dog:['asu','ˈʔasu'], cat:['pusa','ˈpusa'], hand:['gamat','ɡaˈmat'], eye:['mata','maˈta'], hello:['kumusta','kuˈmusta'], thanks:['dakal a salamat','dakal a saˈlamat'], one:['metung','meˈtuŋ'], good:['mayap','maˈjap'] }},
  pag: { name: 'Pangasinan', native: 'Pangasinan', lat: 16.04, lng: 120.34, // Dagupan
    words: { water:['danum','daˈnum'], fire:['apoy','ˈʔapoj'], sun:['agew','ˈʔaɡew'], moon:['bulan','buˈlan'], mother:['ina','ˈʔina'], father:['ama','ˈʔama'], eat:['mangan','maˈŋan'], drink:['oninum','ʔoˈninum'], love:['aro','ˈʔaɾo'], heart:['puso','ˈpuso'], tree:['kiew','ˈkiew'], house:['abong','ˈʔaboŋ'], dog:['aso','ˈʔaso'], cat:['pusa','ˈpusa'], hand:['lima','liˈma'], eye:['mata','maˈta'], hello:['maabig ya agew','maˈʔabiɡ ja ˈʔaɡew'], thanks:['salamat','saˈlamat'], one:['sakey','saˈkej'], good:['maong','maˈʔoŋ'] }},
  mdh: { name: 'Maguindanao', native: 'Magindanaw', lat: 7.22, lng: 124.25, // Cotabato
    words: { water:['ig','ʔiɡ'], fire:['apoy','ʔaˈpoj'], sun:['senang','seˈnaŋ'], moon:['ulan-ulan','ʔulanʔulan'], mother:['ina','ˈʔina'], father:['ama','ˈʔama'], eat:['kakan','kaˈkan'], drink:['inum','ʔiˈnum'], love:['kalini','kaˈlini'], heart:['pusong','puˈsoŋ'], tree:['kayu','kaˈju'], house:['walay','waˈlaj'], dog:['aso','ˈʔaso'], cat:['kuting','kuˈtiŋ'], hand:['lima','liˈma'], eye:['mata','maˈta'], hello:['assalamu alaikum','assaˈlamu ʔaˈlajkum'], thanks:['sukran','ˈsukɾan'], one:['isa','ˈʔisa'], good:['mapiya','maˈpija'] }},
  gor: { name: 'Gorontalo', native: 'Bahasa Hulontalo', lat: 0.54, lng: 123.06, // Gorontalo
    words: { water:['taluhu','taˈluhu'], fire:['tulu','ˈtulu'], sun:['mata lo dulahu','mata lo duˈlahu'], moon:['hulalo','huˈlalo'], mother:['ti mama','ti ˈmama'], father:['ti papa','ti ˈpapa'], eat:['monga','ˈmoŋa'], drink:['mongilu','moˈŋilu'], love:['otoliangu','ʔotoliˈʔaŋu'], heart:['hilao','hiˈlaʔo'], tree:['ayu','ˈʔaju'], house:['bele','ˈbele'], dog:['apula','ʔaˈpula'], cat:['tete','ˈtete'], hand:['olu\'u','ʔoluˈʔu'], eye:['mato','ˈmato'], hello:['assalamu alaikum','assaˈlamu ʔaˈlajkum'], thanks:['terima kasih','teɾima ˈkasih'], one:['tuwau','tuˈwaʔu'], good:['mopiyohu','mopiˈjohu'] }},
  mak: { name: 'Makassarese', native: 'ᨅᨔ ᨆᨀᨔᨑ', lat: -5.13, lng: 119.41, // Makassar
    words: { water:['je\'ne\'','ˈdʒeʔneʔ'], fire:['pepe\'','ˈpepeʔ'], sun:['mata allo','mata ˈʔallo'], moon:['bulang','buˈlaŋ'], mother:['amma\'','ˈʔammaʔ'], father:['bapa\'','ˈbapaʔ'], eat:['angnganre','ʔaŋˈŋanɾe'], drink:['angnginung','ʔaŋˈŋinuŋ'], love:['mangngai','maŋˈŋai'], heart:['ati','ˈʔati'], tree:['poko\' kayu','pokoʔ kaˈju'], house:['balla\'','ˈballaʔ'], dog:['kongkong','koŋˈkoŋ'], cat:['ngeong','ŋeˈʔoŋ'], hand:['lima','liˈma'], eye:['mata','maˈta'], hello:['salama\'','saˈlamaʔ'], thanks:['tarima kasi','taɾima ˈkasi'], one:['se\'re','ˈseʔɾe'], good:['baji\'','ˈbadʒiʔ'] }},
  fon: { name: 'Fon', native: 'Fɔ̀ngbè', lat: 7.18, lng: 1.99, // Abomey
    words: { water:['sin','sĩ'], fire:['zo','zo'], sun:['hwe','xʷe'], moon:['sun','sũ'], mother:['nɔ','nɔ'], father:['tɔ','tɔ'], eat:['ɖu','ɖu'], drink:['nu','nu'], love:['yiwanu','jiwanu'], heart:['ayi','aji'], tree:['atin','atĩ'], house:['xwé','xʷe'], dog:['avun','avũ'], cat:['kpɔnyɔ','kpɔɲɔ'], hand:['alɔ','alɔ'], eye:['nukún','nukṹ'], hello:['a fɔn ganji','a fɔ̃ ɡãdʒi'], thanks:['àwǎnú','àwǎnú'], one:['ɖokpó','ɖokpó'], good:['ɖagbe','ɖaɡbe'] }},
  kri: { name: 'Krio', native: 'Krio', lat: 8.48, lng: -13.23, // Freetown
    words: { water:['wata','ˈwata'], fire:['faya','ˈfaja'], sun:['san','san'], moon:['mun','mun'], mother:['mama','ˈmama'], father:['papa','ˈpapa'], eat:['it','iːt'], drink:['drink','drɪŋk'], love:['lɛk','lɛk'], heart:['at','at'], tree:['tik','tik'], house:['os','ɔs'], dog:['dɔg','dɔɡ'], cat:['pus','pʊs'], hand:['an','an'], eye:['ay','aj'], hello:['kushɛ','kuˈʃɛ'], thanks:['tɛnki','ˈtɛŋki'], one:['wan','wan'], good:['gud','ɡud'] }},
  dag: { name: 'Dagbani', native: 'Dagbanli', lat: 9.41, lng: -0.84, // Tamale
    words: { water:['kom','kɔm'], fire:['buɣim','buɣim'], sun:['wuntaŋa','wuntaŋa'], moon:['goli','ɡoli'], mother:['ma','ma'], father:['ba','ba'], eat:['di','di'], drink:['nyu','ɲu'], love:['yu','ju'], heart:['suhu','suhu'], tree:['tia','tia'], house:['yili','jili'], dog:['baa','baː'], cat:['jɛŋkuno','dʒɛŋkuno'], hand:['nuu','nuː'], eye:['nini','nini'], hello:['dasiba','dasiba'], thanks:['mpaɣya','mpaɣja'], one:['yini','jini'], good:['viɛla','viɛla'] }},
  xog: { name: 'Soga', native: 'Lusoga', lat: 0.45, lng: 33.20, // Jinja
    words: { water:['amaaji','amaːdʒi'], fire:['omuliro','omuliɾo'], sun:['enjuba','eɲɟuba'], moon:['omwezi','omwezi'], mother:['maama','maːma'], father:['taata','taːta'], eat:['kulya','kulja'], drink:['kunywa','kuɲʷa'], love:['kwagala','kwaɡala'], heart:['omutima','omutima'], tree:['omuti','omuti'], house:['enju','eɲɟu'], dog:['embwa','embwa'], cat:['enkaaku','eŋkaːku'], hand:['omukono','omukono'], eye:['eriiso','eɾiːso'], hello:['mwaakire','mwaːkiɾe'], thanks:['weebale','weːbale'], one:['ndala','ndala'], good:['bulungi','buluŋɡi'] }},
  teo: { name: 'Ateso', native: 'Ateso', lat: 1.72, lng: 33.61, // Soroti
    words: { water:['akipi','akipi'], fire:['akim','akim'], sun:['akolong','akoloŋ'], moon:['elap','elap'], mother:['toto','toto'], father:['papa','papa'], eat:['akinyam','akiɲam'], drink:['akimat','akimat'], love:['akimina','akimina'], heart:['etau','etau'], tree:['ekitoi','ekitoi'], house:['ekal','ekal'], dog:['ekingok','ekiŋɡok'], cat:['ekapa','ekapa'], hand:['akan','akan'], eye:['akongu','akoŋɡu'], hello:['yoga','joɡa'], thanks:['eyalama','ejalama'], one:['ediopet','ediopet'], good:['ejok','edʒok'] }},
  dyo: { name: 'Jola-Fonyi', native: 'Kujamaat', lat: 12.58, lng: -16.27, // Ziguinchor
    words: { water:['mumel','mumel'], fire:['sambun','sambun'], sun:['funak','funak'], moon:['furu','furu'], mother:['ino','ino'], father:['ampa','ampa'], eat:['e-ri','eri'], drink:['ka-piti','kapiti'], love:['bu-yopo','bujopo'], heart:['pu-ngor','puŋɡor'], tree:['bu-rok','burok'], house:['e-laaf','elaːf'], dog:['e-buy','ebuj'], cat:['e-busa','ebusa'], hand:['bu-kal','bukal'], eye:['u-kil','ukil'], hello:['kasumay','kasumaj'], thanks:['abara\'k','abaɾaʔk'], one:['enor','enor'], good:['esum','esum'] }},
  bci: { name: 'Baoulé', native: 'Wawle', lat: 7.69, lng: -5.03, // Bouaké
    words: { water:['nzue','nzue'], fire:['sin','sĩ'], sun:['wia','wia'], moon:['anglo','aŋlo'], mother:['nin','nĩ'], father:['baba','baba'], eat:['di','di'], drink:['nɔ','nɔ'], love:['klo','klo'], heart:['awlɛn','awlɛ̃'], tree:['waka','waka'], house:['sua','sua'], dog:['alua','alua'], cat:['bisua','bisua'], hand:['sa','sa'], eye:['nyrun','ɲɾũ'], hello:['akwaba','akwaba'], thanks:['moh','mo'], one:['kun','kũ'], good:['kpa','kpa'] }},
  // === Phase 10: South Asian / Central Asian / East African / Mesoamerican gap-fillers ===
  tcy: { name: 'Tulu', native: 'ತುಳು', lat: 12.91, lng: 74.86, // Mangalore
    words: { water:['ನೀರ್','niːr'], fire:['ತೂ','tuː'], sun:['ಸೂರ್ಯ','suːrja'], moon:['ತಿಂಗೊಳು','tiŋɡoɭu'], mother:['ಅಪ್ಪೆ','appeː'], father:['ಅಮ್ಮೆ','ammeː'], eat:['ತಿನ್ಪಿನಿ','tinpini'], drink:['ಪರ್ಪಿನಿ','paɾpini'], love:['ಪ್ರೀತಿ','pɾiːti'], heart:['ಕಂಜೆಲ್','kandʒeɭ'], tree:['ಮರ','maɾa'], house:['ಇಲ್ಲ್','ill'], dog:['ನಾಯಿ','naːji'], cat:['ಪುಚ್ಚೆ','putʃe'], hand:['ಕೈ','kai'], eye:['ಕಣ್','kaɳ'], hello:['ನಮಸ್ಕಾರ','namaskaːɾa'], thanks:['ಸೊಲ್ಮೆಲು','solmelu'], one:['ಒಂಜಿ','oɲdʒi'], good:['ಪೊರ್ಲು','poɾlu'] }},
  haz: { name: 'Hazaragi', native: 'هزارگی', lat: 34.82, lng: 67.83, // Bamiyan
    words: { water:['آو','ɑːw'], fire:['آتش','ɑːtaʃ'], sun:['آفتو','ɑːftow'], moon:['مه','maː'], mother:['آبه','ɑːba'], father:['آته','ɑːta'], eat:['خوردو','xoɾdoː'], drink:['نوشیدو','noʃidoː'], love:['عشق','eʃq'], heart:['دل','dil'], tree:['درخت','daɾaxt'], house:['خانه','xɑːna'], dog:['سگ','seɡ'], cat:['پشک','poʃak'], hand:['دست','dast'], eye:['چم','tʃam'], hello:['سلام','salom'], thanks:['تشکر','taʃakkur'], one:['یک','jak'], good:['خو','xoː'] }},
  tly: { name: 'Talysh', native: 'Tolışi', lat: 38.75, lng: 48.85, // Lankaran
    words: { water:['ov','ov'], fire:['tasə','tasə'], sun:['rüj','ɾyʒ'], moon:['ümüj','ymyʒ'], mother:['muə','muə'], father:['pıə','pɯə'], eat:['hardə','haɾdə'], drink:['peşomə','peʃomə'], love:['hışt','hɯʃt'], heart:['zırə','zɯɾə'], tree:['dor','doɾ'], house:['ka','ka'], dog:['səg','səɡ'], cat:['pışi','pɯʃi'], hand:['dast','dast'], eye:['çəş','tʃəʃ'], hello:['xəyrli ruj','xəjɾli ɾuʒ'], thanks:['minnətdar','minnətdaɾ'], one:['i','i'], good:['çoki','tʃoki'] }},
  kaa: { name: 'Karakalpak', native: 'Qaraqalpaqsha', lat: 42.45, lng: 59.61, // Nukus
    words: { water:['suw','suw'], fire:['ot','ot'], sun:['kún','kyn'], moon:['ay','aj'], mother:['ana','ana'], father:['ata','ata'], eat:['jew','ʒew'], drink:['ishiw','iʃiw'], love:['muhabbat','muhabbat'], heart:['júrek','ʒyɾek'], tree:['ag\'ash','aʁaʃ'], house:['úy','yj'], dog:['iyt','ijt'], cat:['pishik','piʃik'], hand:['qol','qol'], eye:['kóz','køz'], hello:['salam','salam'], thanks:['rahmet','ɾaχmet'], one:['bir','biɾ'], good:['jaqsi','ʒaqsɯ'] }},
  bej: { name: 'Beja', native: 'Bidhaawyeet', lat: 19.62, lng: 37.22, // Port Sudan
    words: { water:['yam','jam'], fire:['neʼaat','neʔaːt'], sun:['yint','jint'], moon:['tirig','tiɾiɡ'], mother:['indee','iːndeː'], father:['baab','baːb'], eat:['tame','tame'], drink:['gwaʼa','ɡʷaʕa'], love:['kima','kima'], heart:['ginʼa','ɡinʕa'], tree:['hindeb','hindeb'], house:['gaw','ɡaw'], dog:['yas','jas'], cat:['kabsoot','kabsoːt'], hand:['ay','aj'], eye:['liili','liːli'], hello:['salaam','salaːm'], thanks:['baraʼoo','baɾaʕoː'], one:['gaal','ɡaːl'], good:['dabaab','dabaːb'] }},
  tig: { name: 'Tigre', native: 'ትግረ', lat: 15.78, lng: 38.45, // Keren
    words: { water:['ማይ','maj'], fire:['እሳት','əssat'], sun:['ጸሓይ','tsʼəħaj'], moon:['ወርሕ','waɾəħ'], mother:['እሞ','əmmo'], father:['አቦ','abbo'], eat:['በልዐ','balʕa'], drink:['ሰትየ','satja'], love:['ፍቅሪ','fəqri'], heart:['ልቢ','ləbbi'], tree:['ዕጨይ','ʕətʃaj'], house:['ቤት','beːt'], dog:['ከልብ','kalb'], cat:['ድሙ','dəmmu'], hand:['እድ','əd'], eye:['ዐይን','ʕajn'], hello:['ሰላም','salaːm'], thanks:['የቀንየለይ','jəqanjəlej'], one:['ዎሮ','woɾo'], good:['ጽቡቕ','tsʼəbbuq'] }},
  ssy: { name: 'Saho', native: 'Saaho', lat: 15.20, lng: 39.40, // Foro
    words: { water:['lee','leː'], fire:['gira','ɡira'], sun:['ayro','ajɾo'], moon:['alsa','alsa'], mother:['ina','ina'], father:['abba','abba'], eat:['niitan','niːtan'], drink:['yaaqab','jaːqab'], love:['kichanam','kitʃanam'], heart:['laffa','laffa'], tree:['caar','tʃaːr'], house:['kalo','kalo'], dog:['kare','kaɾe'], cat:['dummu','dummu'], hand:['gaba','ɡaba'], eye:['int','int'], hello:['malaal','malaːl'], thanks:['galatto','ɡalatto'], one:['inki','inki'], good:['meqe','meqe'] }},
  ewo: { name: 'Ewondo', native: 'Kɔlɔ', lat: 3.85, lng: 11.50, // Yaoundé
    words: { water:['medzim','medzim'], fire:['ndoa','ndoa'], sun:['dzōb','dʒoːb'], moon:['ngɔn','ŋɡɔn'], mother:['nyia','ɲia'], father:['tara','taɾa'], eat:['di','di'], drink:['nyu','ɲu'], love:['nye\'e','ɲeʔe'], heart:['nlem','nlem'], tree:['elé','ele'], house:['nda','nda'], dog:['mvu','mvu'], cat:['esìŋga','esiŋɡa'], hand:['woó','woʔo'], eye:['dzìs','dʒis'], hello:['mbɔlɔ','mbɔlɔ'], thanks:['akiba','akiba'], one:['fok','fok'], good:['mbaŋ','mbaŋ'] }},
  bum: { name: 'Bulu', native: 'Bulu', lat: 2.93, lng: 11.99, // Sangmélima
    words: { water:['medim','medim'], fire:['ndoa','ndoa'], sun:['zobé','zobe'], moon:['ngon','ŋɡon'], mother:['nyia','ɲia'], father:['tata','tata'], eat:['dzia','dʒia'], drink:['nyu','ɲu'], love:['nye\'a','ɲeʔa'], heart:['nlem','nlem'], tree:['élé','ele'], house:['nda','nda'], dog:['mvu','mvu'], cat:['esinga','esiŋɡa'], hand:['wo','wo'], eye:['zis','zis'], hello:['mbolo','mbolo'], thanks:['akiba','akiba'], one:['fok','fok'], good:['mbamba','mbamba'] }},
  ndc: { name: 'Ndau', native: 'ChiNdau', lat: -19.12, lng: 33.48, // Chimoio
    words: { water:['mvura','mvuɾa'], fire:['muriro','muɾiɾo'], sun:['zuva','zuva'], moon:['mwedzi','mwedzi'], mother:['amai','amai'], father:['baba','baba'], eat:['kudya','kudʒa'], drink:['kunwa','kunwa'], love:['rudo','ɾudo'], heart:['mwoyo','mwojo'], tree:['muti','muti'], house:['nyumba','ɲumba'], dog:['imbga','imbɡa'], cat:['kiti','kiti'], hand:['chanza','tʃanza'], eye:['ziso','ziso'], hello:['mhoroi','mhoɾoji'], thanks:['ndatenda','ndatenda'], one:['chimwe','tʃimwe'], good:['kanaka','kanaka'] }},
  ote: { name: 'Otomi', native: 'Hñähñu', lat: 20.48, lng: -99.22, // Ixmiquilpan
    words: { water:['dehe','tehe'], fire:['tsibi','tsʼibi'], sun:['hyadi','hjadi'], moon:['zänä','zãnã'], mother:['nänä','nãnã'], father:['tada','tada'], eat:['ñuni','ɲuni'], drink:['tsi','tsi'], love:['mädi','mãdi'], heart:['mui','mui'], tree:['za','za'], house:['ngu','ŋɡu'], dog:['yo','jo'], cat:['mixi','miʃi'], hand:['\'ye','ʔje'], eye:['da','da'], hello:['hatsi','hatsi'], thanks:['jamädi','hamãdi'], one:['\'ra','ʔɾa'], good:['hño','hɲo'] }},
  tar: { name: 'Tarahumara', native: 'Rarámuri', lat: 27.75, lng: -107.63, // Creel
    words: { water:['bawí','bawi'], fire:['nahí','nahi'], sun:['rayó','ɾajo'], moon:['mecá','metʃa'], mother:['iyé','ije'], father:['onó','ono'], eat:['ko\'a','koʔa'], drink:['bahí','bahi'], love:['nakí','naki'], heart:['surí','suɾi'], tree:['gokó','ɡoko'], house:['kalí','kali'], dog:['kochí','kotʃi'], cat:['misí','misi'], hand:['sekuá','sekwa'], eye:['pusí','pusi'], hello:['kuira','kuiɾa'], thanks:['matéterabá','mateteɾaba'], one:['bilé','bile'], good:['galá','ɡala'] }},

  // === Phase 13c: Russia / Thailand / Africa / Americas / Indonesia / Philippines ancient ===
  // Old East Slavic — Kievan Rus' (10-15c.), ancestor of Russian/Ukrainian/Belarusian.
  // Old Cyrillic with archaic letters (yus, yer, yat).
  orv: { name: 'Old East Slavic', native: 'рꙋсьскъ ꙗꙁꙑкъ', lat: 50.45, lng: 30.52, // Kyiv
    words: { water:['вода','voda'], fire:['огнь','ogonu'], sun:['сълньце','sŭlnĭtse'], moon:['мѣсѧць','měsętsĭ'], mother:['мати','mati'], father:['отьць','otĭtsĭ'], eat:['ѣсти','ěsti'], drink:['пити','piti'], love:['любити','ljubiti'], heart:['сьрдьце','sĭrdĭtse'], tree:['дрѣво','drěvo'], house:['домъ','domŭ'], dog:['пьсъ','pĭsŭ'], cat:['котъка','kotŭka'], hand:['рѫка','rǫka'], eye:['око','oko'], hello:['здравъ','zdravŭ'], thanks:['благодарю','blagodarju'], one:['одинъ','odinŭ'], good:['добръ','dobrŭ'] }},
  // Scythian — Iranian, NE/SE European steppes (~7c. BCE - 4c. CE). Very fragmentary;
  // mostly known through Greek transcriptions of names + Ossetian cognates. Many entries
  // are reconstructed proxies based on Avestan/Old Iranian.
  xsc: { name: 'Scythian', native: 'Skuda', lat: 47.00, lng: 35.00, // Pontic steppe
    words: { water:['ap','ap'], fire:['ātar','aːtar'], sun:['hvar','xʷar'], moon:['māh','maːh'], mother:['mātar','maːtar'], father:['pitar','pitar'], eat:['xwartan','xʷartan'], drink:['—','—'], love:['—','—'], heart:['zard-','zard'], tree:['—','—'], house:['—','—'], dog:['spaka','spaka'], cat:['—','—'], hand:['zasta','zasta'], eye:['čašm','tʃaʃm'], hello:['—','—'], thanks:['—','—'], one:['aiwa','aiwa'], good:['vohu','wohu'] }},
  // Old Thai (Sukhothai era) — 13c. Ramkhamhaeng inscription (1283), the earliest
  // attested Thai. Sukhothai script, ancestor of modern Thai. Many words cognate
  // with modern Thai.
  sukh: { name: 'Old Thai (Sukhothai)', native: 'ภาสาไทย (สุโขทัย)', lat: 17.02, lng: 99.82,
    words: { water:['น้ำ','naːm'], fire:['ไฟ','faj'], sun:['ตะวัน','tawan'], moon:['เดือน','dɯːan'], mother:['แม่','mɛː'], father:['พ่อ','pʰɔː'], eat:['กิน','kin'], drink:['กิน','kin'], love:['รัก','rak'], heart:['ใจ','tɕaj'], tree:['ไม้','maːj'], house:['เรือน','rɯːan'], dog:['หมา','maː'], cat:['แมว','mɛːw'], hand:['มือ','mɯː'], eye:['ตา','taː'], hello:['—','—'], thanks:['—','—'], one:['หนึ่ง','nɯŋ'], good:['ดี','diː'] }},
  // Meroitic — Kingdom of Kush / Meroe (Sudan, ~3c. BCE - 4c. CE). Two scripts
  // (Hieroglyphic U+10980, Cursive U+109A0). Script deciphered (Griffith), but
  // language still poorly understood; many entries are titles, names, or unknown.
  xmr: { name: 'Meroitic', native: '𐦨𐦫𐦡𐦴𐦢𐦤', lat: 16.94, lng: 33.72, // Meroe
    words: { water:['𐦠𐦴','at'], fire:['—','—'], sun:['𐦨𐦬','ms'], moon:['—','—'], mother:['𐦢𐦫𐦡𐦡','kdke'], father:['𐦡𐦢','qor'], eat:['—','—'], drink:['—','—'], love:['—','—'], heart:['—','—'], tree:['—','—'], house:['—','—'], dog:['—','—'], cat:['—','—'], hand:['—','—'], eye:['—','—'], hello:['—','—'], thanks:['—','—'], one:['—','—'], good:['𐦞𐦢𐦮𐦤','akheniska'] }},
  // Old Nubian — Christian Nubian kingdoms (Makuria, Alodia; 8-15c.). Coptic-derived
  // alphabet with extra Nubian letters; well-attested via translations of biblical and
  // liturgical texts.
  onw: { name: 'Old Nubian', native: 'ⲛⲟⲩⲃⲓⲁ ⲡⲁⲡⲁⲗⲁ', lat: 18.70, lng: 30.80, // Old Dongola
    words: { water:['ⲁⲙ','am'], fire:['ⲓⲕ','ik'], sun:['ⲙⲁⲥⲁⲗ','masal'], moon:['ⲟⲩⲣⲟⲛ','uron'], mother:['ⲉⲛ','en'], father:['ⲁⲃ','ab'], eat:['ⲕⲁⲃ','kab'], drink:['ϫⲓ','dʒi'], love:['ⲇⲟⲩⲗⲗ','dull'], heart:['ⲉⲓⲡ','eip'], tree:['ⲕⲟ','ko'], house:['ⲇⲟⲩⲗ','dul'], dog:['ⲡⲱⲗ','poːl'], cat:['—','—'], hand:['ⲇⲉⲥⲥⲓ','dessi'], eye:['ⲙⲁⲥⲥⲓ','massi'], hello:['ⲉⲓⲗⲗⲉ','ille'], thanks:['ⲡⲓⲥⲧⲁ','pista'], one:['ⲱⲉⲣ','wer'], good:['ⲇⲱⲗⲗⲉ','dolle'] }},
  // Classical Quechua — lingua franca of the Inca Empire (~15-16c.). Latin script
  // (Spanish friars). Well-attested; Cuzco Quechua is the closest modern descendant.
  cqu: { name: 'Classical Quechua', native: 'Runa simi', lat: -13.53, lng: -71.97, // Cuzco
    words: { water:['yaku','jaku'], fire:['nina','nina'], sun:['inti','inti'], moon:['killa','killa'], mother:['mama','mama'], father:['tayta','tajta'], eat:['mikhuy','mikʰuj'], drink:['upyay','upjaj'], love:['munay','munaj'], heart:['sunqu','suŋqu'], tree:["sach'a","satʃʼa"], house:['wasi','wasi'], dog:['allqu','aʎqu'], cat:['misi','misi'], hand:['maki','maki'], eye:['ñawi','ɲawi'], hello:['rimaykullayki','rimajkuʎajki'], thanks:['añay','aɲaj'], one:['huk','huk'], good:['allin','aʎin'] }},
  // Mochica / Yunga — pre-Columbian Pacific coast Peru. No native script; vocabulary
  // recorded by Carrera Daza (1644). Limited attestation; many entries are tentative.
  omc: { name: 'Mochica', native: 'Yunga', lat: -8.11, lng: -79.03, // Trujillo / Chan Chan
    words: { water:['lā','laː'], fire:['oc','ok'], sun:['jiang','dʒiaŋ'], moon:['si','si'], mother:['eng','eŋ'], father:['ef','ef'], eat:['—','—'], drink:['—','—'], love:['—','—'], heart:['polæng','polæŋ'], tree:['—','—'], house:['æn','æn'], dog:['fanu','fanu'], cat:['—','—'], hand:['mæcæc','mætʃætʃ'], eye:['lecɥ','letʃ'], hello:['—','—'], thanks:['—','—'], one:['onæc','onæk'], good:['peñaeñ','peɲaeɲ'] }},
  // Chibcha / Muisca — pre-Columbian Andean Colombia. Recorded in Lugo's grammar
  // (1619) and the Anonymous grammar (early 17c.). Latin transcription.
  chb: { name: 'Chibcha', native: 'Muysccubun', lat: 5.00, lng: -73.10, // Bogotá highlands
    words: { water:['sié','sje'], fire:['gata','gata'], sun:['súa','sua'], moon:['chía','tʃia'], mother:['waia','waia'], father:['paba','paba'], eat:['quychua','kʷitʃwa'], drink:['biohotysuca','bjohoty'], love:['chihizagosqua','tʃihizagoskwa'], heart:['puyquy','pujkʷy'], tree:['quye','kʷye'], house:['gué','gwe'], dog:['to','to'], cat:['—','—'], hand:['ytaca','ytaka'], eye:['upcua','upkʷa'], hello:['chibu','tʃibu'], thanks:['chibchachoa','tʃibtʃatʃoa'], one:['ata','ata'], good:['choin','tʃoin'] }},
  // Old Malay — Srivijaya inscriptions (7c. CE+); the Kedukan Bukit (683) is the
  // earliest. Pallava-derived Brahmi script; many words cognate with modern Malay.
  oma: { name: 'Old Malay', native: 'bhāṣā Mlayu kuna', lat: -2.99, lng: 104.76, // Palembang
    words: { water:['ayar','ajar'], fire:['api','api'], sun:['matari','matari'], moon:['bulan','bulan'], mother:['ibu','ibu'], father:['bapa','bapa'], eat:['makan','makan'], drink:['minum','minum'], love:['sayang','sajaŋ'], heart:['hati','hati'], tree:['kayu','kaju'], house:['rumah','rumah'], dog:['anjing','andʒiŋ'], cat:['kucing','kutʃiŋ'], hand:['tangan','taŋan'], eye:['mata','mata'], hello:['—','—'], thanks:['—','—'], one:['sa','sa'], good:['baik','baik'] }},
  // Old Sundanese — Sunda Kingdom / Pajajaran (14-16c.). Old Sundanese script
  // (Brahmic; ancestor of modern Sundanese script).
  osu: { name: 'Old Sundanese', native: 'basa Sunda buhun', lat: -6.59, lng: 106.80, // Pakuan Pajajaran
    words: { water:['cai','tʃai'], fire:['seuneu','sɯnɯ'], sun:['poé','poe'], moon:['bulan','bulan'], mother:['indung','induŋ'], father:['bapa','bapa'], eat:['dahar','dahar'], drink:['nginum','ŋinum'], love:['nyaah','ɲaːh'], heart:['hate','hate'], tree:['tangkal','taŋkal'], house:['imah','imah'], dog:['anjing','andʒiŋ'], cat:['ucing','utʃiŋ'], hand:['leungeun','lɯŋɯn'], eye:['panon','panon'], hello:['wilujeng','wiludʒəŋ'], thanks:['nuhun','nuhun'], one:['hiji','hidʒi'], good:['hade','hade'] }},
  // Old Tagalog (pre-Hispanic) — used Baybayin script (Tagalog block U+1700).
  // Vocabulary attested via early Spanish-era dictionaries (Pedro de San Buenaventura,
  // 1613). Many words still in modern Tagalog.
  otl: { name: 'Old Tagalog', native: 'ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔', lat: 14.60, lng: 120.98, // Manila / Tondo
    words: { water:['ᜆᜓᜊᜒᜄ᜔','tubig'], fire:['ᜀᜉᜓᜌ᜔','apuj'], sun:['ᜀᜇᜏ᜔','araw'], moon:['ᜊᜓᜏᜈ᜔','buwan'], mother:['ᜁᜈ','ina'], father:['ᜀᜋ','ama'], eat:['ᜃᜁᜈ᜔','kain'], drink:['ᜁᜈᜓᜋ᜔','inom'], love:['ᜁᜊᜒᜄ᜔','ibig'], heart:['ᜉᜓᜐᜓ','puso'], tree:['ᜃᜑᜓᜌ᜔','kahoj'], house:['ᜊᜑᜌ᜔','bahaj'], dog:['ᜀᜐᜓ','aso'], cat:['ᜉᜓᜐ','pusa'], hand:['ᜃᜋᜌ᜔','kamaj'], eye:['ᜋᜆ','mata'], hello:['ᜋᜊᜓᜑᜌ᜔','mabuhaj'], thanks:['ᜐᜎᜋᜆ᜔','salamat'], one:['ᜁᜐ','isa'], good:['ᜋᜊᜓᜆᜒ','mabuti'] }},

  // === Phase 13b: Northeast Asian + SE Asian ancient languages ===
  // Khitan — Liao dynasty (907-1125). Khitan Small Script (U+18B00-U+18CFF)
  // is partially deciphered; many words use Latin transliteration based on
  // Kane (2009) and Aisin Gioro reconstructions.
  zkt: { name: 'Khitan', native: 'mos diau-d', lat: 43.97, lng: 119.41,
    words: { water:['muri','muri'], fire:['niár','niar'], sun:['nair','nair'], moon:['sair','sair'], mother:['eme','eme'], father:['mai','mai'], eat:['idi','idi'], drink:['umi','umi'], love:['nasun','nasun'], heart:['niyàmen','niaman'], tree:['mau','mau'], house:['boo','boː'], dog:['nïaqan','niaqan'], cat:['—','—'], hand:['ɣar','ɣar'], eye:['nït','nit'], hello:['—','—'], thanks:['—','—'], one:['omsu','omsu'], good:['sayïn','sajin'] }},
  // Jurchen — Jin dynasty (1115-1234), ancestor of Manchu. Jurchen script is
  // not in Unicode; Latin transliteration after Kane (1989), Jin (1984).
  juc: { name: 'Jurchen', native: 'jušen gisun', lat: 45.55, lng: 126.97,
    words: { water:['muke','muke'], fire:['tuwa','tuwa'], sun:['šun','ʃun'], moon:['biya','bija'], mother:['eme','eme'], father:['ama','ama'], eat:['jefu','dʒefu'], drink:['omi','omi'], love:['gosi','ɡosi'], heart:['niyaman','niaman'], tree:['mo','mo'], house:['boo','boː'], dog:['indahǔn','indahuːn'], cat:['kesike','kesike'], hand:['gala','ɡala'], eye:['yasa','jasa'], hello:['—','—'], thanks:['—','—'], one:['emu','emu'], good:['sain','sain'] }},
  // Old Mon — Dvaravati / Pagan-era Mon (6-11c.). Mon script (Brahmic).
  // Reconstructions follow Shorto (1971) and Diffloth.
  omx: { name: 'Old Mon', native: 'ဘာသာ မန်', lat: 16.92, lng: 97.36, // Thaton
    words: { water:['ဍာ်','ɗaːk'], fire:['ပ်ၟ','pmaʔ'], sun:['တ္ၚဲ','tŋai'], moon:['ဂျိုၚ်','klɔŋ'], mother:['ၚာ','ŋaː'], father:['ဖ','pʰɛʔ'], eat:['စိ','tɕiʔ'], drink:['သုက်','sok'], love:['ဖျုန်','pʰyon'], heart:['လုပ်','lup'], tree:['ဆု','tɕu'], house:['သ္ၚိ','sŋiʔ'], dog:['ခၠဵု','kʰlou'], cat:['ဂျိ','kluj'], hand:['တၟုိ','toi'], eye:['မတ်','mat'], hello:['—','—'], thanks:['—','—'], one:['မွဲ','mwɛ'], good:['ခိုဟ်','kʰɔh'] }},
  // Pyu — ancient Burma (4-12c.), Sino-Tibetan. Pyu script (Brahmic-derived,
  // incompletely deciphered). Most words tentative; many entries marked '—'.
  pyx: { name: 'Pyu', native: 'Pyu', lat: 18.81, lng: 95.21, // Sri Ksetra (Pyay)
    words: { water:['ʔuy','uj'], fire:['vyaŋ','wjaŋ'], sun:['ño','ɲo'], moon:['hla','hla'], mother:['na','na'], father:['paʔ','paʔ'], eat:['cyaʔ','tɕaʔ'], drink:['—','—'], love:['—','—'], heart:['—','—'], tree:['siŋ','siŋ'], house:['vaiŋ','waiŋ'], dog:['kwiy','kwij'], cat:['—','—'], hand:['lak','lak'], eye:['mik','mik'], hello:['—','—'], thanks:['—','—'], one:['te','te'], good:['—','—'] }},
  // Old Burmese — Pagan period (11-16c.). Pagan-era Burmese script, ancestor
  // of modern Burmese script.
  obr: { name: 'Old Burmese', native: 'ပုဂံ ဘာသာ', lat: 21.17, lng: 94.86, // Bagan
    words: { water:['ရိ','riy'], fire:['မိး','miːʔ'], sun:['နိ','niy'], moon:['လ','lat'], mother:['အဝ','ʔaw'], father:['အဖ','ʔap'], eat:['စား','tsaːʔ'], drink:['ၐုက်','suk'], love:['ချစ်','klyit'], heart:['နှလုံး','hnaluːŋ'], tree:['သစ်','sit'], house:['အိမ်','ʔim'], dog:['ခွၞး','kʰwiː'], cat:['ကြောင်','klyaŋ'], hand:['လက်','lak'], eye:['မ္ယက်','mlak'], hello:['—','—'], thanks:['—','—'], one:['တ','tac'], good:['ကောင်း','kawŋ'] }},
  // Old Cham — Champa kingdom inscriptions (~4c. CE+). Cham script (Brahmic);
  // Latin transliteration used for portability. Mỹ Sơn sanctuary area.
  occ: { name: 'Old Cham', native: 'aksara cam', lat: 15.76, lng: 108.12,
    words: { water:['ie','ʔiə'], fire:['apuy','ʔapuj'], sun:['aṇdaw','ʔadaw'], moon:['bulan','bulan'], mother:['amɛ','amɛ'], father:['amaŋ','amaŋ'], eat:['bɔh','bɔh'], drink:['mɛnum','mɛnum'], love:['klɛn','klɛn'], heart:['hatai','hatai'], tree:['phuəŋ','pʰuəŋ'], house:['sɔŋ','sɔŋ'], dog:['asɔ','asɔ'], cat:['mɛw','mɛw'], hand:['taŋin','taŋin'], eye:['mata','mata'], hello:['—','—'], thanks:['—','—'], one:['sa','sa'], good:['siam','siam'] }},

  // === Ancient Asian languages (Phase 13) ===
  // Old Chinese — Baxter-Sagart 2014 reconstructions. Anyang (Shang capital area).
  och: { name: 'Old Chinese', native: '上古漢語', lat: 36.10, lng: 114.40,
    words: { water:['水','*s.turʔ'], fire:['火','*qʷʰəjʔ'], sun:['日','*C.nik'], moon:['月','*ŋʷat'], mother:['母','*məʔ'], father:['父','*paʔ'], eat:['食','*mə.lək'], drink:['飲','*qrəmʔ'], love:['愛','*qˤəts'], heart:['心','*səm'], tree:['木','*C.mˤok'], house:['室','*l̥ik'], dog:['犬','*kʷʰˤinʔ'], cat:['貓','*mˤraw'], hand:['手','*n̥uʔ'], eye:['目','*C.muk'], hello:['拜','*pˤret-s'], thanks:['謝','*s.ɢAk-s'], one:['一','*ʔit'], good:['好','*qʰˤuʔ'] }},
  // Old Japanese (Asuka-Nara, 7-8c.) — Manyōshū / Kojiki period. Heijō-kyō (Nara).
  ojp: { name: 'Old Japanese', native: '上代日本語', lat: 34.69, lng: 135.83,
    words: { water:['水','mintu'], fire:['火','pə'], sun:['日','pi'], moon:['月','tukï'], mother:['母','papa'], father:['父','titi'], eat:['食ぶ','tabu'], drink:['飲む','nəmu'], love:['愛し','kanasi'], heart:['心','kəkərə'], tree:['木','kə'], house:['家','ipey'], dog:['犬','inu'], cat:['猫','neko'], hand:['手','ta'], eye:['目','ma'], hello:['安し','yasusi'], thanks:['忝し','katadʑike₁nasi'], one:['一つ','pïtətu'], good:['良し','yo₁si'] }},
  // Vedic Sanskrit — Rigveda period (~1500-500 BCE). Sapta Sindhu (Punjab/Saraswati basin).
  vsa: { name: 'Vedic Sanskrit', native: 'वैदिक संस्कृतम्', lat: 30.50, lng: 75.00,
    words: { water:['आपः','aːpaɦ'], fire:['अग्निः','agniɦ'], sun:['सूर्यः','suːrjaɦ'], moon:['चन्द्रमाः','tɕandramaːɦ'], mother:['माता','maːtaː'], father:['पिता','pitaː'], eat:['अद्मि','admi'], drink:['पिबति','pibati'], love:['स्निह्यति','snihjati'], heart:['हृदयम्','hr̩dajam'], tree:['वृक्षः','wr̩kʂaɦ'], house:['गृहम्','gr̩ham'], dog:['श्वा','ɕwaː'], cat:['मार्जारः','maːrdʑaːraɦ'], hand:['हस्तः','hastaɦ'], eye:['अक्षि','akʂi'], hello:['स्वस्ति','swasti'], thanks:['—','—'], one:['एकम्','eːkam'], good:['साधु','saːdhu'] }},
  // Tangut (Western Xia, 11-13c.) — Sofronov / Gong reconstructions; tones 1=level (˧), 2=rising (˧˥).
  // Tangut script chars are Unicode block U+17000-U+187FF; some readings are scholarly approximations.
  txg: { name: 'Tangut', native: '𗼇𗟲', lat: 38.50, lng: 106.27,
    words: { water:['𗀚','tjɨ˧'], fire:['𘎩','me˧'], sun:['𘂴','pjij˧˥'], moon:['𗏯','lja˧˥'], mother:['𘎒','ma˧˥'], father:['𗥃','pa˧'], eat:['𗅋','dzjij˧˥'], drink:['𘉞','tʰjij˧˥'], love:['𗙊','lhjij˧˥'], heart:['𘃠','njij˧˥'], tree:['𘀇','sji˧'], house:['𗩴','kʰjwa˧˥'], dog:['𗋒','kʰwjɨ˧'], cat:['𗦷','mji˧˥'], hand:['𘀔','lje˧'], eye:['𗞴','mjij˧'], hello:['—','—'], thanks:['—','—'], one:['𘈩','lew˧˥'], good:['𗏁','tsji˧'] }},
  // Sogdian — Silk Road lingua franca (5-9c.). Manichaean / Buddhist Sogdian. Samarkand.
  // Latin transliteration shown; native Sogdian script (Aramaic-derived) is U+10F30.
  sog: { name: 'Sogdian', native: 'sγwδyk', lat: 39.65, lng: 66.97,
    words: { water:['ʾāp','aːp'], fire:['ʾātar','aːtar'], sun:['xwr','xwar'], moon:['mʾx','maːx'], mother:['mʾtr','maːtar'], father:['ptr','pitar'], eat:['xwartan','xwartan'], drink:['pi-','pi'], love:['frytk','friːtak'], heart:['dyl','dil'], tree:['drxt','draxt'], house:['kṯʾk','katʰaːk'], dog:['ʾkw','aːkuː'], cat:['—','—'], hand:['dst','dast'], eye:['cšm','tʃaʃm'], hello:['drwd','druːd'], thanks:['—','—'], one:['yw','jɛw'], good:['nyk','neːk'] }},
  // Old Turkic — Orkhon inscriptions (8c.). Earliest Turkic written record.
  // Co-located with Middle Mongolian at Karakorum/Orkhon (47.20, 102.83);
  // the wordmap auto-stacks shared-coord labels.
  // Orthography in Old Turkic script (U+10C00-U+10C4F) where attested; Latin in IPA field.
  otk: { name: 'Old Turkic', native: '𐱅𐰇𐰼𐰰', lat: 47.20, lng: 102.83,
    words: { water:['𐰽𐰆𐰉','sub'], fire:['𐰆𐱃','ot'], sun:['𐰚𐰰𐰣','kyn'], moon:['𐰀𐰖','aj'], mother:['𐰆𐰍','oɣ'], father:['𐰴𐰭','qaŋ'], eat:['𐰘𐰃-','je'], drink:['𐰃𐰲-','itʃ'], love:['𐰽𐰋-','sæb'], heart:['𐰚𐰭𐰠','køŋyl'], tree:['𐰃𐰍𐰲','ɯɣatʃ'], house:['𐰋','æb'], dog:['𐰃𐱃','it'], cat:['—','—'], hand:['𐰘𐰠𐰏','elig'], eye:['𐰚𐰕','køz'], hello:['𐰰𐰠𐰢','esænmy'], thanks:['—','—'], one:['𐰋𐰃𐰼','bir'], good:['𐰓𐰏𐰢','ædɡy'] }},

  // === Phase 14: Taiwan minority languages (Formosan + Taiwanese Hakka) ===
  // 7 Formosan languages (Austronesian, indigenous to Taiwan) + Taiwanese
  // Hakka (distinct from mainland Hakka). Forms reflect the most common
  // standard dialect of each: Amis = Central Amis (Hualien); Paiwan =
  // northern; Atayal = Squliq; Bunun = Isbukun; Truku = Truku/Seediq;
  // Tsou = Cou; Tao = Yami (Lanyu); Hakka = Sixian (Miaoli/Pingtung).
  ami: { name: 'Amis', native: 'Pangcah', lat: 23.96, lng: 121.60, // Hualien
    words: { water:['nanom','nanom'], fire:['namal','namal'], sun:['cidal','tʃidal'], moon:['folad','folad'], mother:['ina','ina'], father:['ama','ama'], eat:['komaen','komaen'], drink:['minom','minom'], love:['maolah','maolah'], heart:["faloko'",'falokoʔ'], tree:['kilang','kilaŋ'], house:["loma'",'lomaʔ'], dog:['wacu','watʃu'], cat:['posi','posi'], hand:['kamay','kamai'], eye:['mata','mata'], hello:["nga'ay ho",'ŋaʔai ho'], thanks:['aray','arai'], one:['cecay','tʃetʃai'], good:['kapah','kapah'] }},
  pwn: { name: 'Paiwan', native: 'Pinayuanan', lat: 22.30, lng: 120.62, // Pingtung
    words: { water:['zaljum','zaɭum'], fire:['sapuy','sapui'], sun:['qadaw','qadaw'], moon:['qiljas','qiɭas'], mother:['kina','kina'], father:['kama','kama'], eat:['keman','kəman'], drink:['temekel','təməkəl'], love:['nasaqaqa','nasaqaqa'], heart:['varung','vaɾuŋ'], tree:['kasiw','kasiw'], house:['umaq','umaq'], dog:['vatu','vatu'], cat:['ngiaw','ŋiaw'], hand:['lima','lima'], eye:['maca','matsa'], hello:['masalu','masalu'], thanks:['masalu','masalu'], one:['ita','ita'], good:['nguanguaq','ŋuaŋuaq'] }},
  tay: { name: 'Atayal', native: 'Tayal', lat: 24.86, lng: 121.55, // Wulai
    words: { water:["qsya'",'qsijaʔ'], fire:['puniq','puniq'], sun:["wagi'",'waɡiʔ'], moon:['byacing','bjatʃiŋ'], mother:["yaya'",'jajaʔ'], father:["yaba'",'jabaʔ'], eat:['maniq','maniq'], drink:['mqwalax','mqwalax'], love:['kmalu inlungan','kmalu inluŋan'], heart:['nyux','njux'], tree:['qhuniq','qhuniq'], house:['ngasal','ŋasal'], dog:['huzil','huzil'], cat:['ngiyaw','ŋijaw'], hand:["qba'",'qbaʔ'], eye:['roziq','roziq'], hello:['lokah','lokah'], thanks:['mhuway','mhuwaj'], one:['qutux','qutux'], good:['blaq','blaq'] }},
  bnn: { name: 'Bunun', native: 'Bunun', lat: 23.83, lng: 121.05, // Nantou/Bunun area
    words: { water:['danum','danum'], fire:['sapuz','sapuz'], sun:['vali','vali'], moon:['buan','buan'], mother:['tina','tina'], father:['tama','tama'], eat:['maun','maun'], drink:['muqun','muqun'], love:['madaidaz','madaidaz'], heart:['is-ang','isaŋ'], tree:['kahu','kahu'], house:['lumaq','lumaq'], dog:['asu','asu'], cat:['ngingiyaw','ŋiŋijaw'], hand:['ima','ima'], eye:['mata','mata'], hello:['uninang','uninaŋ'], thanks:['uninang','uninaŋ'], one:['tasa','tasa'], good:['masial','masial'] }},
  trv: { name: 'Truku (Seediq)', native: 'Seediq Truku', lat: 24.16, lng: 121.62, // Hualien (Taroko)
    words: { water:['qsiya','qsija'], fire:['puniq','puniq'], sun:['hidaw','hidaw'], moon:['idas','idas'], mother:['bubu','bubu'], father:['tama','tama'], eat:['meekan','meekan'], drink:['mimah','mimah'], love:['gmalu','gmalu'], heart:['lnglungan','lŋluŋan'], tree:['qhuni','qhuni'], house:['sapah','sapah'], dog:['huling','huliŋ'], cat:['ngiyaw','ŋijaw'], hand:['baga','baga'], eye:['dowriq','dowriq'], hello:['malu','malu'], thanks:['mhuway','mhuwaj'], one:['kingal','kiŋal'], good:['malu','malu'] }},
  tsu: { name: 'Tsou', native: 'Cou', lat: 23.51, lng: 120.80, // Alishan
    words: { water:['chumu','tsumu'], fire:['poepe','poepe'], sun:['hie','hie'], moon:["yum'au",'jumʔau'], mother:['ino','ino'], father:['amo','amo'], eat:['bonu','bonu'], drink:["'umnu",'ʔumnu'], love:['yainca','jaintsa'], heart:['yofu','jofu'], tree:['evi','evi'], house:['emoo','emoo'], dog:["avo'u",'avoʔu'], cat:['ngiao','ŋiao'], hand:['muu','muu'], eye:['maso','maso'], hello:['yokeoasu','jokeoasu'], thanks:['aveoveoyu','aveoveoju'], one:['cone','tsone'], good:["'aem'aemo",'ʔaemʔaemo'] }},
  tao: { name: 'Tao (Yami)', native: 'Tao', lat: 22.04, lng: 121.55, // Orchid Island (Lanyu)
    words: { water:['ranom','ranom'], fire:['apuy','apui'], sun:['araw','araw'], moon:['vehan','vehan'], mother:['ina','ina'], father:['ama','ama'], eat:['kuman','kuman'], drink:['minum','minum'], love:['makakdeng','makakdəŋ'], heart:['paso','paso'], tree:['kayo','kajo'], house:['vahay','vahai'], dog:['ino','ino'], cat:['koving','koviŋ'], hand:['kamay','kamai'], eye:['mata','mata'], hello:['akokay','akokai'], thanks:['ayoy','ajoi'], one:['asa','asa'], good:['mapia','mapia'] }},
  hak_tw: { name: 'Taiwanese Hakka (Sixian)', native: '台灣客家話 (四縣腔)', lat: 24.55, lng: 120.93, // Miaoli (Sixian heartland)
    words: { water:['水','sui˧˩'], fire:['火','fo˧˩'], sun:['日頭','ŋit˨ tʰeu˩˩'], moon:['月光','ŋiet˨ koŋ˨'], mother:['阿姆','a˨ me˨'], father:['阿爸','a˨ pa˨'], eat:['食','sit˨'], drink:['啉','lim˩˩'], love:['惜','siak˨'], heart:['心臟','sim˨ tsʰoŋ˥'], tree:['樹仔','su˥ e˧˩'], house:['屋','vuk˨'], dog:['狗','keu˧˩'], cat:['貓仔','meu˨ e˧˩'], hand:['手','su˧˩'], eye:['目珠','muk˨ tsu˨'], hello:['你好','ŋi˩˩ ho˧˩'], thanks:['承蒙你','sin˩˩ muŋ˩˩ ŋi˩˩'], one:['一','jit˨'], good:['好','ho˧˩'] }},

  // === Phase 15: more Chinese dialects ===
  // 8 additions covering major gaps: Suzhou & Wenzhou Wu, Quanzhou Hokkien
  // & Hainanese (Min Nan branches), Wuhan & Zhengzhou Mandarin (SW + Zhongyuan
  // groups), Hailu Taiwanese Hakka, and Pu-Xian Min. Tones use Chao numbers
  // converted to Chao tone letters where standard; some sources differ on
  // narrow tone values for these underdocumented varieties.
  wuu_sz: { name: 'Wu (Suzhou)', native: '苏州话', lat: 31.30, lng: 120.59, // Suzhou
    words: { water:['水','sɿ˥˨'], fire:['火','hu˥˨'], sun:['太阳','tʰɛ˧˧ɦiɔ̃˨˧'], moon:['月亮','ɦyɪʔ˧liɑ̃˨˧'], mother:['姆妈','m̩˨˧ma˧˧'], father:['爹爹','tia˧˧tia'], eat:['吃','tɕʰiɪʔ˥'], drink:['喝','xəʔ˥'], love:['爱','ɛ˥˨'], heart:['心','ɕin˦˦'], tree:['树','zɿ˨˧˩'], house:['屋里','oʔ˦li˥˨'], dog:['狗','kɤ˥˨'], cat:['猫','mɔ˦˦'], hand:['手','sɤ˥˨'], eye:['眼睛','ŋɛ˨˧˩tɕin˦˦'], hello:['你好','ne˨˧ɦɔ˥˨'], thanks:['谢谢','ʑia˨˧˩ʑia'], one:['一','iɪʔ˥'], good:['好','hɔ˥˨'] }},
  wuu_wz: { name: 'Wu (Wenzhou)', native: '温州话', lat: 27.99, lng: 120.66, // Wenzhou
    words: { water:['水','sɿ˧˥'], fire:['火','hu˧˥'], sun:['日头','zai˨˩˧dau˧˩'], moon:['月光','ɦyø˨˩˧kuɔ˧˧'], mother:['阿娘','a˧˩ɲiɛ˧˩'], father:['阿爸','a˧˩pa˧˧'], eat:['食','dzai˨˩˧'], drink:['吃','kʰa˧˧'], love:['爱','ai˦˨'], heart:['心','saŋ˧˧'], tree:['树','zɿ˧˩'], house:['屋','au˧˩'], dog:['犬','kʰyø˧˥'], cat:['猫','mau˧˧'], hand:['手','ɕiu˧˥'], eye:['眼睛','ŋa˨˩˧tsaŋ˧˧'], hello:['你好','ŋ˧˩hau˧˥'], thanks:['谢谢','zia˨˩˧zia'], one:['一','iai̯˥'], good:['好','hau˧˥'] }},
  nan_qz: { name: 'Min Nan (Quanzhou)', native: '泉州話', lat: 24.87, lng: 118.68, // Quanzhou
    words: { water:['水','tsui˨˨'], fire:['火','hə˧˥'], sun:['日頭','dʑit˨tʰau˨˦'], moon:['月','ɡə˦'], mother:['老母','lau˦˩bo˧˧'], father:['老父','lau˦˩pɛ˧˧'], eat:['食','tsiaʔ˨˦'], drink:['啉','lim˨˦'], love:['愛','ai˦˩'], heart:['心','sim˨˨'], tree:['樹','tsʰiu˦˩'], house:['厝','tsʰu˦˩'], dog:['狗','kau˧˥'], cat:['貓','niau˨˨'], hand:['手','tsʰiu˧˥'], eye:['目','bak˦'], hello:['汝好','li˧˥ho˧˥'], thanks:['多謝','to˨˨siaʔ˦˩'], one:['一','it˨'], good:['好','ho˧˥'] }},
  nan_hai: { name: 'Hainanese', native: '海南话', lat: 20.04, lng: 110.32, // Haikou
    words: { water:['水','zui˨˩˧'], fire:['火','hə˨˩˧'], sun:['日头','dit˨˨tʰau˨˦'], moon:['月','ŋet˨˨'], mother:['母','bo˨˩˧'], father:['父','ba˨˨'], eat:['食','tʰeʔ˥˥'], drink:['啉','lim˨˦'], love:['爱','ai˨˩'], heart:['心','sim˨˩'], tree:['树','tsʰi˨˨'], house:['厝','tsʰu˨˩'], dog:['狗','kau˨˩˧'], cat:['猫','ŋiau˥˥'], hand:['手','tsʰiu˨˩˧'], eye:['目','bak˨˨'], hello:['汝好','li˨˩˧ho˨˩˧'], thanks:['多谢','to˨˩jia˨˨'], one:['一','it˥˥'], good:['好','ho˨˩˧'] }},
  zh_wh: { name: 'Mandarin (Wuhan)', native: '武汉话', lat: 30.59, lng: 114.30, // Wuhan
    words: { water:['水','suei˧˥'], fire:['火','huo˨˩˧'], sun:['太阳','tʰai˥˧ian˨˩˧'], moon:['月亮','yɛ˨˩˧lian'], mother:['妈妈','ma˨˩˧ma'], father:['爸爸','pa˨˩˧pa'], eat:['吃','tʂʰʅ˥˥'], drink:['喝','xo˥˥'], love:['爱','ai˥˧'], heart:['心','ɕin˥˥'], tree:['树','ʂu˨˩˧'], house:['屋里','u˥˥li'], dog:['狗','kəu˨˩˧'], cat:['猫','mau˥˥'], hand:['手','ʂəu˨˩˧'], eye:['眼睛','ɲɛn˨˩˧tɕin˥˥'], hello:['你好','ni˨˩˧xau˨˩˧'], thanks:['谢谢','ɕiɛ˥˧ɕiɛ'], one:['一','i˥˥'], good:['好','xau˨˩˧'] }},
  zh_zz: { name: 'Mandarin (Zhongyuan)', native: '郑州话', lat: 34.75, lng: 113.62, // Zhengzhou
    words: { water:['水','suei˥˥'], fire:['火','xuo˨˩˧'], sun:['太阳','tʰai˨˩iaŋ˨˩˧'], moon:['月亮','yɛ˨˦liaŋ'], mother:['妈妈','ma˨˦ma'], father:['爸爸','pa˨˩˧pa'], eat:['吃','tʂʰʅ˨˦'], drink:['喝','xɤ˨˦'], love:['爱','ai˨˩'], heart:['心','ɕin˨˦'], tree:['树','ʂu˨˩'], house:['屋里','u˨˦li'], dog:['狗','kou˥˥'], cat:['猫','mau˨˦'], hand:['手','ʂou˥˥'], eye:['眼睛','ian˥˥tɕin˨˦'], hello:['你好','ni˥˥xau˥˥'], thanks:['谢谢','ɕiɛ˨˩ɕiɛ'], one:['一','i˨˦'], good:['好','xau˥˥'] }},
  hak_hl: { name: 'Taiwanese Hakka (Hailu)', native: '台灣客家話 (海陸腔)', lat: 24.81, lng: 120.97, // Hsinchu (Hailu heartland)
    words: { water:['水','ʃui˨˦'], fire:['火','fo˨˦'], sun:['日頭','ŋit˨tʰeu˨˦'], moon:['月光','ŋiet˥koŋ˥˥'], mother:['阿姆','a˥˥me˥˥'], father:['阿爸','a˥˥pa˥˥'], eat:['食','ʃit˥'], drink:['啉','lim˨˦'], love:['惜','ʃiak˨'], heart:['心臟','sim˥˥tʃʰoŋ˨˨'], tree:['樹仔','ʃu˨˨e˨˦'], house:['屋','vuk˨'], dog:['狗','keu˨˦'], cat:['貓仔','meu˥˥e˨˦'], hand:['手','ʃu˨˦'], eye:['目珠','muk˨tʃu˥˥'], hello:['你好','ŋi˨˦ho˨˦'], thanks:['承蒙你','ʃin˨˦muŋ˨˦ŋi˨˦'], one:['一','ʒit˨'], good:['好','ho˨˦'] }},
  cpx: { name: 'Pu-Xian Min (Hinghwa)', native: '莆仙话', lat: 25.43, lng: 119.00, // Putian
    words: { water:['水','tsui˦˩'], fire:['火','hø˦˩'], sun:['日头','lit˥˥tʰau˧˧'], moon:['月','ɣueʔ˥˥'], mother:['老母','lau˥˥bo˦˩'], father:['老父','lau˥˥pe˥˧'], eat:['食','siaʔ˥'], drink:['啉','lim˧˧'], love:['疼','tʰiã˨˩'], heart:['心','ɬim˧˧'], tree:['树','ɬiu˥˧'], house:['厝','tsʰu˨˩'], dog:['狗','kau˦˩'], cat:['猫','ŋiau˧˧'], hand:['手','tsʰiu˦˩'], eye:['目珠','bak˥˥tsiu˧˧'], hello:['你好','ni˦˩ho˦˩'], thanks:['多谢','to˧˧ɬia˥˧'], one:['一','it˥'], good:['好','ho˦˩'] }},

  // === Phase 16: SE Asian high-population minority languages ===
  // 8 additions covering significant gaps: Patani Malay (S. Thailand), Mường
  // (sister of Vietnamese), Tày (Tai-Kadai of N. Vietnam), Pwo Karen (Karen
  // branch distinct from Sgaw), Jingpo/Kachin (Myanmar), Wa (Burma-Yunnan
  // Palaungic), Akha (Loloish, Yunnan/Myanmar/Thailand), Kadazan-Dusun (Sabah).
  // Word data and IPA reflect commonly cited forms in standard reference
  // works; tone marking is approximate for the lesser-documented varieties.
  mfa: { name: 'Patani Malay', native: 'Bahasa Melayu Patani', lat: 6.87, lng: 101.25, // Pattani
    words: { water:['ayé','ajeʔ'], fire:['api','api'], sun:['matari','mataʁe'], moon:['bulé','buleʔ'], mother:['emak','əmaʔ'], father:['aboh','aboh'], eat:['makae','makajɛ'], drink:['minon','minon'], love:['cinto','tʃinto'], heart:['ati','ati'], tree:['pokok','pokoʔ'], house:['rumoh','rumoh'], dog:['anjeng','andʒeŋ'], cat:['kuche','kutʃeʔ'], hand:['tagae','taŋajɛ'], eye:['mato','mato'], hello:['nyaman ka','ɲaman ka'], thanks:['terimo kasih','tərimo kaseh'], one:['satu','satu'], good:['baghuh','baɣuh'] }},
  mtq: { name: 'Mường', native: 'Tiếng Mường', lat: 20.81, lng: 105.34, // Hòa Bình
    words: { water:['đác','ɗaːk'], fire:['lửa','lɨə'], sun:['mặt côi','məːt koːi'], moon:['rằng','raŋ'], mother:['mệ','meː'], father:['bố','bo'], eat:['ăn','ăn'], drink:['uống','uəŋ'], love:['thương','tʰɨəŋ'], heart:['tlái côi','tlaːi koːi'], tree:['cẳl','kăl'], house:['nhà','ɲaː'], dog:['chó','tʃɔ'], cat:['meo','meo'], hand:['thay','tʰaːi'], eye:['mặt','məːt'], hello:['đám rộ','ɗaːm roː'], thanks:['cám ơn','kaːm ɤn'], one:['mộch','moːtʃ'], good:['lành','laːɲ'] }},
  tyz: { name: 'Tày', native: 'Cần Tày', lat: 22.66, lng: 106.25, // Cao Bằng
    words: { water:['nặm','naːm˨˩'], fire:['phầy','fəj˨˩'], sun:['tha vằn','tʰaː˧˧vən˨˩'], moon:['bươn','bɯən˧˧'], mother:['mẻ','mɛ˨˩˧'], father:['pò','pɔ˨˩'], eat:['kin','kin˧˧'], drink:['uống','uəŋ˧˥'], love:['hắc','hak˧˥'], heart:['chầy','tʃəj˨˩'], tree:['mạy','maːj˨˩'], house:['rườn','zɯən˨˩'], dog:['ma','maː˧˧'], cat:['meo','meo˧˧'], hand:['mừng','mɯŋ˨˩'], eye:['tha','tʰaː˧˧'], hello:['chào','tʃaːw˨˩'], thanks:['cảm ơn','kaːm˨˩˧ɤn˧˧'], one:['nưng','nɯŋ˧˧'], good:['đây','ɗəj˧˧'] }},
  kjp: { name: 'Pwo Karen', native: 'ဖျိၣ်', lat: 16.71, lng: 98.57, // Mae Sot area (Pwo communities)
    words: { water:['ထံ','tʰi˧'], fire:['မ့ၣ်','me˨˩'], sun:['မုန်','mu˧'], moon:['လး','la˧'], mother:['မိ','mu˧˥'], father:['ဖါ','pa˧'], eat:['အၢင်','ai˧˩'], drink:['အူ','ɔ˧'], love:['အဲင်','ai˧kʰe˧'], heart:['သး','tʰa˧'], tree:['သုၣ်','tʰoŋ˧'], house:['ဟံၣ်','hi˧'], dog:['ထွဲ','tʰwi˧'], cat:['ဖၣ်','tʰə˧'], hand:['စူ','sɔ˨'], eye:['မဲာ်','mɛ˧'], hello:['နာမှၤ','na˧ʃi˧'], thanks:['တၢ်ဘျုး','ta˧blu˧'], one:['တ','ta˧˩'], good:['ဂ့ၤ','ɣai˧'] }},
  kac: { name: 'Jingpo (Kachin)', native: 'Jinghpaw', lat: 25.38, lng: 97.40, // Myitkyina
    words: { water:['hka','hkaː˧'], fire:['wan','waːn˧'], sun:['jan','tsan˧'], moon:['shata','ʃata˧'], mother:['nu','nu˧'], father:['wa','wa˧'], eat:['sha','ʃa˧'], drink:['lu','lu˧'], love:['tsaw ra','tsau˧ra˧'], heart:['salum','salum˧'], tree:['hpun','pʰun˧'], house:['nta','nta˧'], dog:['gwi','ɡwi˧'], cat:['nyaung','ɲaŋ˧'], hand:['lata','lata˧'], eye:['myi','mji˧'], hello:['kaja i','kadʒa˧i˧'], thanks:['chyeju kaba','tʃedʒu˧kaba˧'], one:['langai','laŋai˧'], good:['kaja','kadʒa˧'] }},
  wbm: { name: 'Wa', native: 'Vāx', lat: 22.07, lng: 99.21, // Pangsang/Wa State
    words: { water:['rom','rɔm'], fire:['ngo','ŋo'], sun:['cangaiʔ','tʃaŋaiʔ'], moon:['khaiʔ','kʰaiʔ'], mother:['yaʔ','jaʔ'], father:['paiʔ','paiʔ'], eat:['cha','tʃa'], drink:['ɔk','ɔk'], love:['hak','hak'], heart:['nuim','nuim'], tree:['maiʔ','maiʔ'], house:['nyiex','ɲiɛʔ'], dog:['so','so'], cat:['meo','meo'], hand:['tai','tai'], eye:['ngai','ŋai'], hello:['sao','sao'], thanks:['ban prix','ban priʔ'], one:['ti','ti'], good:['dim','dim'] }},
  ahk: { name: 'Akha', native: 'Akhazà', lat: 20.50, lng: 100.07, // Chiang Rai area
    words: { water:['i tsi','i˧tsɨ˧'], fire:['mji','mji˧'], sun:['nyi ma','ɲi˧ma˧'], moon:['ba la','ba˧la˧'], mother:['a ma','a˧ma˧'], father:['a da','a˧da˧'], eat:['za','dza˧'], drink:['tu','tu˧'], love:['gaq','ɡaʔ˧'], heart:['ne ma','ne˧ma˧'], tree:['aq xeu','aʔ˧ɕeu˧'], house:['nyma','ɲma˧'], dog:['jia','tɕa˧'], cat:['a yi','a˧ji˧'], hand:['la pa','la˧pa˧'], eye:['nyaq','ɲaʔ˧'], hello:['u du la','u˧du˧la˧'], thanks:['gv ya','ɡɯ˧ja˧'], one:['ti','ti˧'], good:['jau','tɕau˧'] }},
  dtp: { name: 'Kadazan-Dusun', native: 'Boros Dusun', lat: 5.96, lng: 116.07, // Penampang
    words: { water:['waig','waig'], fire:['tapui','tapui'], sun:['todau','todau'], moon:['vulan','vulan'], mother:['tina','tina'], father:['tama','tama'], eat:['mangakan','maŋakan'], drink:['monginum','moŋinum'], love:['gimbai','ɡimbai'], heart:['pusod','pusod'], tree:['kayu','kayu'], house:['walai','walai'], dog:['tasu','tasu'], cat:['tingau','tiŋau'], hand:['lima','lima'], eye:['mato','mato'], hello:['kopivosian','kopivosian'], thanks:['pounsikou','pounsikou'], one:['iso','iso'], good:['avasi','avasi'] }},

  // === Phase 17: 12 more 100K+ minority languages ===
  // Spread across India (Chhattisgarhi, Garo), SE Asia (Mon, Nùng, Ngaju,
  // Toraja-Sa'dan), Mesoamerica (K'iche', Q'eqchi', Mam — three of the
  // largest Mayan languages), Ethiopia (Wolaytta, Sidama), and China
  // (Tujia). All have 500K+ speakers; several are major regional lingua
  // francas without prior coverage in the map.
  hne: { name: 'Chhattisgarhi', native: 'छत्तीसगढ़ी', lat: 21.25, lng: 81.63, // Raipur
    words: { water:['पानी','paːni'], fire:['आगि','aːɡi'], sun:['सूरज','suːrəj'], moon:['चंदा','tʃəndaː'], mother:['दाई','daːi'], father:['ददा','dadaː'], eat:['खाना','kʰaːnaː'], drink:['पीना','piːnaː'], love:['मया','məjaː'], heart:['हिरदा','hirdaː'], tree:['रूख','ruːkʰ'], house:['घर','ɡʱər'], dog:['कुकुर','kukur'], cat:['बिलई','bilai'], hand:['हाथ','haːtʰ'], eye:['आँखी','aːŋkʰi'], hello:['जोहार','dʒoːɦaːr'], thanks:['धन्यवाद','dʱənjəwaːd'], one:['एक','eːk'], good:['बने','bəne'] }},
  mnw: { name: 'Mon', native: 'ဘာသာ မန်', lat: 16.49, lng: 97.62, // Mawlamyine
    words: { water:['ဍာ်','ɗaʔ'], fire:['ပၟတ်','pəmoʔ'], sun:['တ္ၚဲ','tŋoa'], moon:['ဂိတု','kətoa'], mother:['မိ','mi'], father:['အပါ','ʔəpa'], eat:['ဂစုက်','caʔ'], drink:['သုၚ်','soŋ'], love:['ဍေံ','ɗɛm'], heart:['ဗ္ၜေံ','məɓɛm'], tree:['ဆု','sɔ'], house:['သ္ၚိ','heŋ'], dog:['ပ္ၟိၚ်','klɛp'], cat:['ဗ္ဍိုၚ်','ɓɔŋ'], hand:['တဲ','toa'], eye:['မတ်','mɔʔ'], hello:['ပ္ဍဲဂေါဝ်','ɓɔŋ kaow'], thanks:['တၚ်ဂုဏ်','təŋ ɡɔn'], one:['မွဲ','mwoa'], good:['ခိုဟ်','khɔh'] }},
  grt: { name: 'Garo', native: 'A·chik', lat: 25.51, lng: 90.21, // Tura, Meghalaya
    words: { water:['chi·','tʃi'], fire:['wa·al','waʔal'], sun:['sal','sal'], moon:['ja·tong','dʒatoŋ'], mother:['ama','ama'], father:['apa','apa'], eat:['cha·a','tʃaʔa'], drink:['ring·a','riŋa'], love:['katchea','katʃea'], heart:['ja·rik','dʒarik'], tree:['bol','bol'], house:['nok','nok'], dog:['atcha','atʃa'], cat:['menggo','meŋɡo'], hand:['jak','dʒak'], eye:['mikron','mikron'], hello:['namaste','namaste'], thanks:['mittela','mitːela'], one:['sa','sa'], good:['nama','nama'] }},
  nut: { name: 'Nùng', native: 'Cần Nùng', lat: 21.85, lng: 106.76, // Lạng Sơn
    words: { water:['nặm','naːm˨˩'], fire:['fầy','fəj˨˩'], sun:['tha vằn','tʰaː˧˧vən˨˩'], moon:['boon','boːn˧˧'], mother:['mé','mɛ˨˩˧'], father:['pò','pɔ˨˩'], eat:['kin','kin˧˧'], drink:['kin nặm','kin˧˧naːm˨˩'], love:['rắc','rak˧˥'], heart:['cấy','kəj˨˩˧'], tree:['mạy','maːj˨˩'], house:['rườn','zɯən˨˩'], dog:['ma','maː˧˧'], cat:['meo','meo˧˧'], hand:['mừ','mɯ˨˩'], eye:['tha','tʰaː˧˧'], hello:['choà','tʃɔaː˨˩'], thanks:['ơn rể','ɤn˧˧zɛ˨˩˧'], one:['nưng','nɯŋ˧˧'], good:['đây','ɗəj˧˧'] }},
  quc: { name: 'Kʼicheʼ', native: 'Qatzijobʼal', lat: 14.84, lng: -91.52, // Quetzaltenango
    words: { water:['jaʼ','xaʔ'], fire:['qʼaqʼ','qʼaqʼ'], sun:['qʼij','qʼih'], moon:['ikʼ','ikʼ'], mother:['nan','nan'], father:['tat','tat'], eat:['tijow','tihow'], drink:['ukʼaaj','ukʼaːh'], love:['loqʼoj','loqʼoh'], heart:['animaʼ','animaʔ'], tree:['cheʼ','tʃeʔ'], house:['ja','xa'], dog:['tzʼiʼ','tsʼiʔ'], cat:['meʼs','meʔs'], hand:['qʼabʼ','qʼaɓ'], eye:['bʼaqʼwach','ɓaqʼwatʃ'], hello:['saqarik','saqaɾik'], thanks:['maltyox','maltjoʃ'], one:['jun','xun'], good:['utz','uts'] }},
  kek: { name: 'Qʼeqchiʼ', native: 'Qʼeqchiʼ', lat: 15.47, lng: -90.37, // Cobán
    words: { water:['haʼ','haʔ'], fire:['xamʼ','ʃam'], sun:['saqʼe','saqʼe'], moon:['poo','poː'], mother:['naʼ','naʔ'], father:['yuwaʼ','juwaʔ'], eat:['taawaʼ','tawaʔ'], drink:['tuʼ','tuʔ'], love:['rahok','rahok'], heart:['chʼoolej','tʃʼoːlej'], tree:['cheʼ','tʃeʔ'], house:['ochoch','otʃotʃ'], dog:['tzʼiʼ','tsʼiʔ'], cat:['mes','mes'], hand:['ruqʼ','ruqʼ'], eye:['xnaqʼ ru','ʃnaqʼ ru'], hello:['ma saʼ laachʼool','ma sa laːtʃʼoːl'], thanks:['bantyox','bantjoʃ'], one:['jun','hun'], good:['us','us'] }},
  mam: { name: 'Mam', native: 'Qyool Mam', lat: 15.32, lng: -91.47, // Huehuetenango
    words: { water:['aʼ','aʔ'], fire:['qʼaqʼ','qʼaqʼ'], sun:['qʼij','qʼiχ'], moon:['xjaw','ʃhaw'], mother:['nan','nan'], father:['mam','mam'], eat:['waan','waːn'], drink:['kʼaan','kʼaːn'], love:['oqxan','oqʃan'], heart:['anma','anma'], tree:['tzeʼ','tseʔ'], house:['jaa','haː'], dog:['txʼyan','tʼʃjan'], cat:['wiix','wiːʃ'], hand:['qʼobʼ','qʼob'], eye:['witz','wits'], hello:['chjonte tey','tʃhonte tej'], thanks:['chjonte','tʃhonte'], one:['jun','hun'], good:['banix','baniʃ'] }},
  wal: { name: 'Wolaytta', native: 'Wolayttattuwaa', lat: 6.85, lng: 37.76, // Wolaita Sodo
    words: { water:["haatta",'haːtːa'], fire:['tama','tama'], sun:["awa",'awa'], moon:['ageena','aɡeːna'], mother:['aaya','aːja'], father:['aawa','aːwa'], eat:["miya",'miːja'], drink:["ushiya",'uʃija'], love:["siiqaa",'siːqaː'], heart:['wozanaa','wozanaː'], tree:['mittaa','mitːaː'], house:['keettaa','keːtːaː'], dog:['kanaa','kanaː'], cat:['gaaduwaa','ɡaːduwaː'], hand:['kushiyaa','kuʃijaː'], eye:["ayfee",'ajfeː'], hello:['saro','saro'], thanks:["galatay","ɡalataj"], one:['issino','isːino'], good:["lo'o",'loʔo'] }},
  sid: { name: 'Sidamo', native: 'Sidaamu Afoo', lat: 7.06, lng: 38.48, // Hawassa
    words: { water:["waayyo",'waːjːo'], fire:["giiraa",'ɡiːraː'], sun:['arrishshe','arːiʃːe'], moon:['agana','aɡana'], mother:['ama','ama'], father:['anna','anːa'], eat:["itaa",'itaː'], drink:["aguraa",'aɡuraː'], love:['baxa','baxa'], heart:['wodanaa','wodanaː'], tree:['haqqe','haqːe'], house:['mine','mine'], dog:['minceeti','mintʃeːti'], cat:['adurree','adurːeː'], hand:['anga','anɡa'], eye:['ille','ilːe'], hello:["nagaa yi'ne",'naɡaː jiʔne'], thanks:["gali'ne",'ɡaliʔne'], one:['mitto','mitːo'], good:['danchu','dantʃu'] }},
  tji: { name: 'Tujia', native: 'Bizisa', lat: 29.31, lng: 109.49, // Zhangjiajie/Enshi
    words: { water:['zi','tsɨ˥˧'], fire:['mi','mi˥˧'], sun:['ni','ni˧˥'], moon:['nie','nie˧˥'], mother:['a-mie','a˧mie˧'], father:['a-pa','a˧pa˧'], eat:['za','tsa˨˩'], drink:['da','ta˧'], love:['a2ci1','atsi'], heart:['xin','ɕin˧'], tree:['si','sɨ˧˥'], house:['li','li˧˥'], dog:['kvʼ','kʰə˨˩'], cat:['mau','mau˧'], hand:['lo','lo˨˩'], eye:['mie','mie˨˩'], hello:['shu shu','ʃu˧ʃu˧'], thanks:['ang2zai1','aŋtsai'], one:['lao','lao˧˥'], good:['ngaq','ŋaʔ˧˥'] }},
  nij: { name: 'Ngaju', native: 'Basa Ngaju', lat: -2.21, lng: 113.92, // Palangka Raya
    words: { water:['danum','danum'], fire:['apui','apui'], sun:['matanandau','matananˈdau'], moon:['bulan','bulan'], mother:['indu','indu'], father:['bapa','bapa'], eat:['kuman','kuman'], drink:['mihop','mihop'], love:['sinta','sinta'], heart:['atei','atei'], tree:['kayu','kaju'], house:['huma','huma'], dog:['asu','asu'], cat:['posa','posa'], hand:['lengen','ləŋən'], eye:['mate','mate'], hello:['tabea','tabea'], thanks:['sahindai','sahindai'], one:['ije','ije'], good:['bahalap','bahalap'] }},
  sda: { name: "Toraja-Sa'dan", native: "Basa Toraya", lat: -2.97, lng: 119.90, // Rantepao
    words: { water:['uai','uai'], fire:['api','api'], sun:['mata allo','mataʔalːo'], moon:['bulan','bulan'], mother:['indo','indo'], father:['ambe','ambe'], eat:['kumande','kumande'], drink:["ma'iru",'maʔiru'], love:["ma'pa'iya",'maʔpaʔija'], heart:['penaa','penaː'], tree:['kayu','kaju'], house:['banua','banua'], dog:['asu','asu'], cat:['serre','serːe'], hand:['lima','lima'], eye:['mata','mata'], hello:['tabe','tabe'], thanks:["kurre sumanga'",'kurːe sumaŋaʔ'], one:['mesa','mesa'], good:['melo','melo'] }},
};

// === Data-status overrides for historical / reconstructed languages ===
// Per wordmap-check-2.md §8 — moved from wordmap.html to the data layer so
// the validator and other consumers can read it. Modern languages default
// to status 'modern'; historical languages get 'attested' or auto-derived
// 'fragmentary' (≥30% '—' entries) unless overridden here.
//
// Reclassifications per wordmap-check-3.md §6 — the previous pass was too
// generous with 'reconstructed' / 'undeciphered'. 'reconstructed' is now
// reserved for genuine comparative reconstructions with no direct text
// record (PIE only). Languages with substantial direct attestation move
// to 'attested' even if their phonology has scholarly reconstructions.
// 'partly-understood' is added for languages whose script is read but
// whose vocabulary/grammar is only partially known (e.g. Elamite).
const DATA_STATUS_OVERRIDES = {
    // Genuinely reconstructed (no direct text record):
    ine:       'reconstructed',  // Proto-Indo-European — comparative reconstruction
    // Attested in primary text records (despite scholarly phonological reconstruction):
    vsa:       'attested',       // Vedic Sanskrit — Rigveda et al. directly transmitted
    xto:       'attested',       // Tocharian A — 5-8c. CE manuscripts
    txb:       'attested',       // Tocharian B — same
    xlu:       'attested',       // Luwian — cuneiform + hieroglyphic Luwian texts
    xpu:       'attested',       // Punic — Phoenician-script inscriptions, Carthage texts
    sux:       'attested',       // Sumerian — earliest extensive text record (~3100 BCE+)
    xhu:       'attested',       // Hurrian — extensive cuneiform incl. bilingual texts
    // Partially understood (script readable; lexicon/grammar incomplete):
    // Reclassified from 'undeciphered' per wordmap-full-audit.md §6.21 —
    // for all four, the script is read and basic vocabulary is known,
    // even if much of the lexicon and grammar remains unclear.
    xmr:       'partly-understood', // Meroitic
    zkt:       'partly-understood', // Khitan
    pyx:       'partly-understood', // Pyu
    elx:       'partly-understood', // Elamite
    // Pedagogical reconstructions (not attested forms; teaching approximations):
    ja_edo:    'pedagogical',
    ja_heian:  'pedagogical',
    ko_mid:    'pedagogical',
    ko_em:     'pedagogical',
    vi_nom:    'pedagogical',
    // Well-attested historical Sinitic:
    zh_song:   'attested',
    zh_han:    'attested',
    zh_tang:   'attested',
};

// Six-color palette for country fills (pastel, semi-transparent)
const COUNTRY_PALETTE = [
  'rgba(100,149,237,0.20)', // cornflower blue
  'rgba(144,238,144,0.20)', // light green
  'rgba(250,128,114,0.20)', // salmon
  'rgba(255,255,150,0.20)', // light yellow
  'rgba(221,160,221,0.20)', // plum
  'rgba(175,238,238,0.20)', // pale turquoise
];

// === UI translations for Word Map ===
const WM_UI = {
  ja: { native:'現地名', size:'サイズ', word:'表記', ipa:'発音', ipaCol:'発音/転写', wordCol:'表記', concept:'概念', name:'言語名', back:'← LangMap', family:'語族', speakers:'話者数', countries:'使用国', official:'公用語', script:'文字', url:'langmap.heuron.com/wordmap.html', modern:'現代言語', historical:'歴史言語' },
  ko: { native:'현지어', size:'크기', word:'표기', ipa:'발음', ipaCol:'발음/전사', wordCol:'표기', concept:'개념', name:'언어명', back:'← LangMap', family:'어족', speakers:'화자 수', countries:'사용 국가', official:'공용어', script:'문자', url:'langmap.heuron.com/wordmap.html', modern:'현대 언어', historical:'역사 언어' },
  zh: { native:'当地语', size:'大小', word:'写法', ipa:'发音', ipaCol:'发音/转写', wordCol:'写法', concept:'概念', name:'语言名', back:'← LangMap', family:'语族', speakers:'使用人数', countries:'使用国家', official:'官方语言', script:'文字', url:'langmap.heuron.com/wordmap.html', modern:'现代语言', historical:'历史语言' },
  yue: { native:'當地語', size:'大細', word:'寫法', ipa:'發音', ipaCol:'發音/轉寫', wordCol:'寫法', concept:'概念', name:'語言名', back:'← LangMap', family:'語族', speakers:'使用人數', countries:'使用國家', official:'官方語言', script:'文字', url:'langmap.heuron.com/wordmap.html', modern:'現代語言', historical:'歷史語言' },
  vi: { native:'Bản địa', size:'Cỡ', word:'Chữ viết', ipa:'Phiên âm', ipaCol:'Phiên âm / Ký âm', wordCol:'Chữ viết / Phiên tự', concept:'Khái niệm', name:'Tên ngôn ngữ', back:'← LangMap', family:'Ngữ hệ', speakers:'Số người nói', countries:'Quốc gia', official:'Ngôn ngữ chính thức', script:'Chữ viết', url:'langmap.heuron.com/wordmap.html', modern:'Hiện đại', historical:'Ngôn ngữ lịch sử' },
  th: { native:'ท้องถิ่น', size:'ขนาด', word:'รูปเขียน', ipa:'สัทอักษร', ipaCol:'สัทอักษร / ถ่ายถอด', wordCol:'รูปเขียน', concept:'ความหมาย', name:'ชื่อภาษา', back:'← LangMap', family:'ตระกูลภาษา', speakers:'ผู้พูด', countries:'ประเทศ', official:'ภาษาราชการ', script:'อักษร', url:'langmap.heuron.com/wordmap.html', modern:'สมัยใหม่', historical:'ภาษาประวัติศาสตร์' },
  id: { native:'Lokal', size:'Ukuran', word:'Ejaan', ipa:'IPA', ipaCol:'IPA / Transkripsi', wordCol:'Ejaan / Transliterasi', concept:'Konsep', name:'Nama bahasa', back:'← LangMap', family:'Rumpun bahasa', speakers:'Penutur', countries:'Negara', official:'Bahasa resmi', script:'Aksara', url:'langmap.heuron.com/wordmap.html', modern:'Modern', historical:'Bahasa historis' },
  hi: { native:'स्थानीय', size:'आकार', word:'लेखन', ipa:'उच्चारण', ipaCol:'उच्चारण / लिप्यंतरण', wordCol:'लेखन / लिप्यंतरण', concept:'अवधारणा', name:'भाषा नाम', back:'← LangMap', family:'भाषा परिवार', speakers:'वक्ता', countries:'देश', official:'राजभाषा', script:'लिपि', url:'langmap.heuron.com/wordmap.html', modern:'आधुनिक', historical:'ऐतिहासिक भाषा' },
  en: { native:'Native', size:'Size', word:'Form', ipa:'IPA', ipaCol:'IPA / Transcription', wordCol:'Form / Transliteration', concept:'Concept', name:'Name', back:'← LangMap', family:'Language family', speakers:'Speakers', countries:'Countries', official:'Official in', script:'Script', url:'langmap.heuron.com/wordmap.html', modern:'Modern', historical:'Historical' },
  de: { native:'Einheimisch', size:'Größe', word:'Form', ipa:'IPA', ipaCol:'IPA / Transkription', wordCol:'Form / Transliteration', concept:'Konzept', name:'Sprache', back:'← LangMap', family:'Sprachfamilie', speakers:'Sprecher', countries:'Länder', official:'Amtssprache', script:'Schrift', url:'langmap.heuron.com/wordmap.html', modern:'Modern', historical:'Historisch' },
  fr: { native:'Locale', size:'Taille', word:'Forme', ipa:'API', ipaCol:'API / Transcription', wordCol:'Forme / Translittération', concept:'Concept', name:'Nom', back:'← LangMap', family:'Famille', speakers:'Locuteurs', countries:'Pays', official:'Langue officielle', script:'Écriture', url:'langmap.heuron.com/wordmap.html', modern:'Moderne', historical:'Historique' },
  it: { native:'Locale', size:'Dimensione', word:'Forma', ipa:'IPA', ipaCol:'IPA / Trascrizione', wordCol:'Forma / Traslitterazione', concept:'Concetto', name:'Nome', back:'← LangMap', family:'Famiglia linguistica', speakers:'Parlanti', countries:'Paesi', official:'Lingua ufficiale', script:'Scrittura', url:'langmap.heuron.com/wordmap.html', modern:'Moderno', historical:'Storico' },
  es_eu: { native:'Local', size:'Tamaño', word:'Forma', ipa:'AFI', ipaCol:'AFI / Transcripción', wordCol:'Forma / Transliteración', concept:'Concepto', name:'Nombre', back:'← LangMap', family:'Familia lingüística', speakers:'Hablantes', countries:'Países', official:'Idioma oficial', script:'Escritura', url:'langmap.heuron.com/wordmap.html', modern:'Moderno', historical:'Histórico' },
  es_mx: { native:'Local', size:'Tamaño', word:'Forma', ipa:'AFI', ipaCol:'AFI / Transcripción', wordCol:'Forma / Transliteración', concept:'Concepto', name:'Nombre', back:'← LangMap', family:'Familia lingüística', speakers:'Hablantes', countries:'Países', official:'Idioma oficial', script:'Escritura', url:'langmap.heuron.com/wordmap.html', modern:'Moderno', historical:'Histórico' },
  pt_eu: { native:'Local', size:'Tamanho', word:'Forma', ipa:'AFI', ipaCol:'AFI / Transcrição', wordCol:'Forma / Transliteração', concept:'Conceito', name:'Nome', back:'← LangMap', family:'Família linguística', speakers:'Falantes', countries:'Países', official:'Língua oficial', script:'Escrita', url:'langmap.heuron.com/wordmap.html', modern:'Moderno', historical:'Histórico' },
  pt_br: { native:'Local', size:'Tamanho', word:'Forma', ipa:'AFI', ipaCol:'AFI / Transcrição', wordCol:'Forma / Transliteração', concept:'Conceito', name:'Nome', back:'← LangMap', family:'Família linguística', speakers:'Falantes', countries:'Países', official:'Língua oficial', script:'Escrita', url:'langmap.heuron.com/wordmap.html', modern:'Moderno', historical:'Histórico' },
  ru: { native:'Местный', size:'Размер', word:'Форма', ipa:'МФА', ipaCol:'МФА / Транскрипция', wordCol:'Форма / Транслитерация', concept:'Понятие', name:'Название', back:'← LangMap', family:'Языковая семья', speakers:'Носители', countries:'Страны', official:'Официальный', script:'Письменность', url:'langmap.heuron.com/wordmap.html', modern:'Современные', historical:'Исторические' },
  uk: { native:'Місцева', size:'Розмір', word:'Форма', ipa:'МФА', ipaCol:'МФА / Транскрипція', wordCol:'Форма / Транслітерація', concept:'Поняття', name:'Назва', back:'← LangMap', family:'Мовна сім\'я', speakers:'Носії', countries:'Країни', official:'Офіційна', script:'Писемність', url:'langmap.heuron.com/wordmap.html', modern:'Сучасні', historical:'Історичні' },
  ar: { native:'محلي', size:'الحجم', word:'كتابة', ipa:'صوتي', ipaCol:'صوتي / نسخ', wordCol:'كتابة / حرفنة', concept:'مفهوم', name:'الاسم', back:'← LangMap', family:'عائلة اللغة', speakers:'المتحدثون', countries:'البلدان', official:'رسمية في', script:'الخط', url:'langmap.heuron.com/wordmap.html', modern:'حديثة', historical:'تاريخية' },
  he: { native:'מקומי', size:'גודל', word:'כתיב', ipa:'תעתיק', ipaCol:'תעתיק / תמלול', wordCol:'כתיב / תעתיק', concept:'מושג', name:'שם', back:'← LangMap', family:'משפחת שפות', speakers:'דוברים', countries:'מדינות', official:'רשמית ב', script:'כתב', url:'langmap.heuron.com/wordmap.html', modern:'מודרניות', historical:'היסטוריות' },
  sw: { native:'Asili', size:'Ukubwa', word:'Umbo', ipa:'IPA', ipaCol:'IPA / Unukuzi', wordCol:'Umbo / Tafsiri', concept:'Dhana', name:'Jina', back:'← LangMap', family:'Familia ya lugha', speakers:'Wasemaji', countries:'Nchi', official:'Rasmi katika', script:'Hati', url:'langmap.heuron.com/wordmap.html', modern:'Kisasa', historical:'Lugha za kihistoria' },
};
const WM_UI_LABELS = { ja:'日本語', ko:'한국어', zh:'中文', yue:'粤语', vi:'Tiếng Việt', th:'ไทย', id:'Indonesia', hi:'हिन्दी', en:'English', de:'Deutsch', fr:'Français', it:'Italiano', es_eu:'Español(ES)', es_mx:'Español(MX)', pt_eu:'Português(PT)', pt_br:'Português(BR)', ru:'Русский', uk:'Українська', ar:'العربية', he:'עברית', sw:'Kiswahili' };



// === Lazy-loaded data ===
// Per-language metadata, multilingual descriptions, and meta-attribute translations
// live in wordmap_meta.js. wordmap.html loads it on first modal open.
