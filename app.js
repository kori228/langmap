// UI translations
const UI_STRINGS = {
    ja: { title: 'LangMap', subtitle: '多言語語順マップ', selectSentence: '文章選択:', langToggle: '表示言語 ON/OFF:', langOrder: '言語の順序', dragHint: 'ドラッグで並べ替え', defaultOrder: 'デフォルト順', random: 'ランダム', prev: '◀', next: '▶', allOn: '全ON', allOff: '全OFF', savePng: 'PNG保存', saveSvg: 'SVG保存', copyUrl: 'URLコピー', copied: 'URLをコピーしました', uiLang: 'UI言語:', noLangSelected: '1つ以上の言語を選択してください', showMore: 'もっと表示', showLess: '閉じる', edit: '編集', save: '保存', cancel: 'キャンセル', corrector: '添削者:', correctionSaved: '修正を保存しました', copyText: 'テキストをコピー', copiedText: 'テキストをコピーしました', rtlNote: '※ アラビア語・ヘブライ語は比較のため左→右で表示しています（実際は右→左に読みます）', rtlToggle: '元の語順(←)で表示' },
    ko: { title: 'LangMap', subtitle: '다국어 어순 맵', selectSentence: '문장 선택:', langToggle: '표시 언어 ON/OFF:', langOrder: '언어 순서', dragHint: '드래그하여 정렬', defaultOrder: '기본 순서', random: '랜덤', prev: '◀', next: '▶', allOn: '전체 ON', allOff: '전체 OFF', savePng: 'PNG 저장', saveSvg: 'SVG 저장', copyUrl: 'URL 복사', copied: 'URL을 복사했습니다', uiLang: 'UI 언어:', noLangSelected: '1개 이상의 언어를 선택하세요', showMore: '더 보기', showLess: '닫기', rtlNote: '※ 아랍어·히브리어는 비교를 위해 왼→오른쪽으로 표시합니다 (실제로는 오른→왼쪽으로 읽습니다)', rtlToggle: '원래 방향(←)으로 표시' },
    zh: { title: 'LangMap', subtitle: '多语言语序图', selectSentence: '选择句子:', langToggle: '显示语言 ON/OFF:', langOrder: '语言顺序', dragHint: '拖拽排序', defaultOrder: '默认顺序', random: '随机', prev: '◀', next: '▶', allOn: '全部开', allOff: '全部关', savePng: 'PNG保存', saveSvg: 'SVG保存', copyUrl: '复制链接', copied: '链接已复制', uiLang: 'UI语言:', noLangSelected: '请选择至少一种语言', showMore: '显示更多', showLess: '收起', rtlNote: '※ 阿拉伯语和希伯来语为便于比较从左→右显示（实际从右→左阅读）', rtlToggle: '显示原始方向(←)' },
    yue: { title: 'LangMap', subtitle: '多語言語序圖', selectSentence: '揀句子:', langToggle: '顯示語言 ON/OFF:', langOrder: '語言順序', dragHint: '拖嚟排序', defaultOrder: '預設順序', random: '隨機', prev: '◀', next: '▶', allOn: '全開', allOff: '全關', savePng: 'PNG儲存', saveSvg: 'SVG儲存', copyUrl: '複製連結', copied: '連結已複製', uiLang: 'UI語言:', noLangSelected: '請揀至少一種語言', showMore: '顯示更多', showLess: '收起', rtlNote: '※ 阿拉伯語同希伯來語為咗比較用左→右顯示（實際係右→左讀）', rtlToggle: '顯示原本方向(←)' },
    vi: { title: 'LangMap', subtitle: 'Bản đồ trật tự từ đa ngôn ngữ', selectSentence: 'Chọn câu:', langToggle: 'Ngôn ngữ hiển thị ON/OFF:', langOrder: 'Thứ tự ngôn ngữ', dragHint: 'kéo để sắp xếp', defaultOrder: 'Mặc định', random: 'Ngẫu nhiên', prev: '◀', next: '▶', allOn: 'Bật tất cả', allOff: 'Tắt tất cả', savePng: 'Lưu PNG', saveSvg: 'Lưu SVG', copyUrl: 'Sao chép URL', copied: 'Đã sao chép URL', uiLang: 'Ngôn ngữ UI:', noLangSelected: 'Vui lòng chọn ít nhất một ngôn ngữ', showMore: 'Xem thêm', showLess: 'Thu gọn', rtlNote: '※ Tiếng Ả Rập và tiếng Do Thái được hiển thị trái→phải để so sánh (thực tế đọc phải→trái)', rtlToggle: 'Hiển thị hướng gốc (←)' },
    th: { title: 'LangMap', subtitle: 'แผนที่ลำดับคำหลายภาษา', selectSentence: 'เลือกประโยค:', langToggle: 'ภาษาที่แสดง ON/OFF:', langOrder: 'ลำดับภาษา', dragHint: 'ลากเพื่อจัดเรียง', defaultOrder: 'ค่าเริ่มต้น', random: 'สุ่ม', prev: '◀', next: '▶', allOn: 'เปิดทั้งหมด', allOff: 'ปิดทั้งหมด', savePng: 'บันทึก PNG', saveSvg: 'บันทึก SVG', copyUrl: 'คัดลอก URL', copied: 'คัดลอก URL แล้ว', uiLang: 'ภาษา UI:', noLangSelected: 'กรุณาเลือกอย่างน้อยหนึ่งภาษา', showMore: 'แสดงเพิ่มเติม', showLess: 'ซ่อน', rtlNote: '※ ภาษาอาหรับและฮีบรูแสดงซ้าย→ขวาเพื่อการเปรียบเทียบ (ปกติอ่านขวา→ซ้าย)', rtlToggle: 'แสดงทิศทางดั้งเดิม (←)' },
    id: { title: 'LangMap', subtitle: 'Peta Urutan Kata Multibahasa', selectSentence: 'Pilih kalimat:', langToggle: 'Bahasa ditampilkan ON/OFF:', langOrder: 'Urutan bahasa', dragHint: 'seret untuk mengurutkan', defaultOrder: 'Urutan default', random: 'Acak', prev: '◀', next: '▶', allOn: 'Semua ON', allOff: 'Semua OFF', savePng: 'Simpan PNG', saveSvg: 'Simpan SVG', copyUrl: 'Salin URL', copied: 'URL disalin', uiLang: 'Bahasa UI:', noLangSelected: 'Pilih setidaknya satu bahasa', showMore: 'Tampilkan lainnya', showLess: 'Tutup', rtlNote: '※ Bahasa Arab dan Ibrani ditampilkan kiri→kanan untuk perbandingan (biasanya dibaca kanan→kiri)', rtlToggle: 'Tampilkan arah asli (←)' },
    hi: { title: 'LangMap', subtitle: 'बहुभाषी शब्द क्रम मानचित्र', selectSentence: 'वाक्य चुनें:', langToggle: 'प्रदर्शन भाषा ON/OFF:', langOrder: 'भाषा क्रम', dragHint: 'क्रम बदलने के लिए खींचें', defaultOrder: 'डिफ़ॉल्ट क्रम', random: 'रैंडम', prev: '◀', next: '▶', allOn: 'सभी ON', allOff: 'सभी OFF', savePng: 'PNG सहेजें', saveSvg: 'SVG सहेजें', copyUrl: 'URL कॉपी', copied: 'URL कॉपी हो गया', uiLang: 'UI भाषा:', noLangSelected: 'कृपया कम से कम एक भाषा चुनें', showMore: 'और दिखाएं', showLess: 'बंद करें', rtlNote: '※ अरबी और हिब्रू तुलना के लिए बाएं→दाएं दिखाए गए हैं (वास्तव में दाएं→बाएं पढ़े जाते हैं)', rtlToggle: 'मूल दिशा में दिखाएं (←)' },
    en: { title: 'LangMap', subtitle: 'Multilingual Word Order Map', selectSentence: 'Select sentence:', langToggle: 'Display languages ON/OFF:', langOrder: 'Language order', dragHint: 'drag to reorder', defaultOrder: 'Default order', random: 'Random', prev: '◀', next: '▶', allOn: 'All ON', allOff: 'All OFF', savePng: 'Save PNG', saveSvg: 'Save SVG', copyUrl: 'Copy URL', copied: 'URL copied', uiLang: 'UI Language:', noLangSelected: 'Please select at least one language', showMore: 'Show more', showLess: 'Show less', edit: 'Edit', save: 'Save', cancel: 'Cancel', corrector: 'Corrector:', correctionSaved: 'Correction saved', copyText: 'Copy text', copiedText: 'Text copied', rtlNote: '* Arabic and Hebrew are shown left-to-right for comparison (they are normally read right-to-left)', rtlToggle: 'Show native direction' },
    de: { title: 'LangMap', subtitle: 'Mehrsprachige Wortstellungskarte', selectSentence: 'Satz wählen:', langToggle: 'Angezeigte Sprachen ON/OFF:', langOrder: 'Sprachreihenfolge', dragHint: 'ziehen zum Sortieren', defaultOrder: 'Standardreihenfolge', random: 'Zufällig', prev: '◀', next: '▶', allOn: 'Alle AN', allOff: 'Alle AUS', savePng: 'PNG speichern', saveSvg: 'SVG speichern', copyUrl: 'URL kopieren', copied: 'URL kopiert', uiLang: 'UI-Sprache:', noLangSelected: 'Bitte wählen Sie mindestens eine Sprache', showMore: 'Mehr anzeigen', showLess: 'Weniger', rtlNote: '※ Arabisch und Hebräisch werden zum Vergleich links→rechts angezeigt (normalerweise rechts→links gelesen)', rtlToggle: 'Originalrichtung anzeigen (←)' },
    fr: { title: 'LangMap', subtitle: "Carte de l'ordre des mots multilingue", selectSentence: 'Sélectionner une phrase :', langToggle: 'Langues affichées ON/OFF :', langOrder: 'Ordre des langues', dragHint: 'glisser pour réorganiser', defaultOrder: 'Ordre par défaut', random: 'Aléatoire', prev: '◀', next: '▶', allOn: 'Tout ON', allOff: 'Tout OFF', savePng: 'Enregistrer PNG', saveSvg: 'Enregistrer SVG', copyUrl: "Copier l'URL", copied: 'URL copié', uiLang: 'Langue UI :', noLangSelected: 'Veuillez sélectionner au moins une langue', showMore: 'Afficher plus', showLess: 'Réduire', rtlNote: "※ L'arabe et l'hébreu sont affichés gauche→droite pour comparaison (normalement lus droite→gauche)", rtlToggle: 'Afficher la direction originale (←)' },
    it: { title: 'LangMap', subtitle: "Mappa dell'ordine delle parole multilingue", selectSentence: 'Seleziona frase:', langToggle: 'Lingue visualizzate ON/OFF:', langOrder: 'Ordine delle lingue', dragHint: 'trascina per riordinare', defaultOrder: 'Ordine predefinito', random: 'Casuale', prev: '◀', next: '▶', allOn: 'Tutti ON', allOff: 'Tutti OFF', savePng: 'Salva PNG', saveSvg: 'Salva SVG', copyUrl: 'Copia URL', copied: 'URL copiato', uiLang: 'Lingua UI:', noLangSelected: 'Seleziona almeno una lingua', showMore: 'Mostra altro', showLess: 'Chiudi', rtlNote: '※ Arabo ed ebraico sono mostrati sinistra→destra per confronto (normalmente letti destra→sinistra)', rtlToggle: 'Mostra direzione originale (←)' },
    es_eu: { title: 'LangMap', subtitle: 'Mapa de orden de palabras multilingüe', selectSentence: 'Seleccionar oración:', langToggle: 'Idiomas mostrados ON/OFF:', langOrder: 'Orden de idiomas', dragHint: 'arrastrar para reordenar', defaultOrder: 'Orden predeterminado', random: 'Aleatorio', prev: '◀', next: '▶', allOn: 'Todo ON', allOff: 'Todo OFF', savePng: 'Guardar PNG', saveSvg: 'Guardar SVG', copyUrl: 'Copiar URL', copied: 'URL copiado', uiLang: 'Idioma UI:', noLangSelected: 'Seleccione al menos un idioma', showMore: 'Mostrar más', showLess: 'Cerrar', rtlNote: '※ El árabe y el hebreo se muestran de izquierda→derecha para comparación (normalmente se leen de derecha→izquierda)', rtlToggle: 'Mostrar dirección original (←)' },
    es_mx: { title: 'LangMap', subtitle: 'Mapa de orden de palabras multilingüe', selectSentence: 'Seleccionar oración:', langToggle: 'Idiomas mostrados ON/OFF:', langOrder: 'Orden de idiomas', dragHint: 'arrastrar para reordenar', defaultOrder: 'Orden predeterminado', random: 'Aleatorio', prev: '◀', next: '▶', allOn: 'Todo ON', allOff: 'Todo OFF', savePng: 'Guardar PNG', saveSvg: 'Guardar SVG', copyUrl: 'Copiar URL', copied: 'URL copiado', uiLang: 'Idioma UI:', noLangSelected: 'Seleccione al menos un idioma', showMore: 'Mostrar más', showLess: 'Cerrar', rtlNote: '※ El árabe y el hebreo se muestran de izquierda→derecha para comparación (normalmente se leen de derecha→izquierda)', rtlToggle: 'Mostrar dirección original (←)' },
    pt_eu: { title: 'LangMap', subtitle: 'Mapa de ordem de palavras multilíngue', selectSentence: 'Selecionar frase:', langToggle: 'Idiomas exibidos ON/OFF:', langOrder: 'Ordem dos idiomas', dragHint: 'arraste para reordenar', defaultOrder: 'Ordem padrão', random: 'Aleatório', prev: '◀', next: '▶', allOn: 'Todos ON', allOff: 'Todos OFF', savePng: 'Guardar PNG', saveSvg: 'Guardar SVG', copyUrl: 'Copiar URL', copied: 'URL copiado', uiLang: 'Idioma UI:', noLangSelected: 'Selecione pelo menos um idioma', showMore: 'Mostrar mais', showLess: 'Fechar', rtlNote: '※ O árabe e o hebraico são exibidos da esquerda→direita para comparação (normalmente lidos da direita→esquerda)', rtlToggle: 'Mostrar direção original (←)' },
    pt_br: { title: 'LangMap', subtitle: 'Mapa de ordem de palavras multilíngue', selectSentence: 'Selecionar frase:', langToggle: 'Idiomas exibidos ON/OFF:', langOrder: 'Ordem dos idiomas', dragHint: 'arraste para reordenar', defaultOrder: 'Ordem padrão', random: 'Aleatório', prev: '◀', next: '▶', allOn: 'Todos ON', allOff: 'Todos OFF', savePng: 'Salvar PNG', saveSvg: 'Salvar SVG', copyUrl: 'Copiar URL', copied: 'URL copiado', uiLang: 'Idioma UI:', noLangSelected: 'Selecione pelo menos um idioma', showMore: 'Mostrar mais', showLess: 'Fechar', rtlNote: '※ O árabe e o hebraico são exibidos da esquerda→direita para comparação (normalmente lidos da direita→esquerda)', rtlToggle: 'Mostrar direção original (←)' },
    ru: { title: 'LangMap', subtitle: 'Многоязычная карта порядка слов', selectSentence: 'Выбрать предложение:', langToggle: 'Отображаемые языки ON/OFF:', langOrder: 'Порядок языков', dragHint: 'перетащите для сортировки', defaultOrder: 'По умолчанию', random: 'Случайное', prev: '◀', next: '▶', allOn: 'Все ВКЛ', allOff: 'Все ВЫКЛ', savePng: 'Сохранить PNG', saveSvg: 'Сохранить SVG', copyUrl: 'Копировать URL', copied: 'URL скопирован', uiLang: 'Язык UI:', noLangSelected: 'Выберите хотя бы один язык', showMore: 'Показать ещё', showLess: 'Свернуть', rtlNote: '※ Арабский и иврит отображаются слева→направо для сравнения (обычно читаются справа→налево)', rtlToggle: 'Показать исходное направление (←)' },
    uk: { title: 'LangMap', subtitle: 'Багатомовна карта порядку слів', selectSentence: 'Обрати речення:', langToggle: 'Мови відображення ON/OFF:', langOrder: 'Порядок мов', dragHint: 'перетягніть для сортування', defaultOrder: 'За замовчуванням', random: 'Випадкове', prev: '◀', next: '▶', allOn: 'Усі УВІМК', allOff: 'Усі ВИМК', savePng: 'Зберегти PNG', saveSvg: 'Зберегти SVG', copyUrl: 'Копіювати URL', copied: 'URL скопійовано', uiLang: 'Мова UI:', noLangSelected: 'Будь ласка, оберіть хоча б одну мову', showMore: 'Показати більше', showLess: 'Згорнути', rtlNote: '※ Арабська та іврит відображаються зліва→направо для порівняння (зазвичай читаються справа→наліво)', rtlToggle: 'Показати оригінальний напрямок (←)' },
    ar: { title: 'LangMap', subtitle: 'خريطة ترتيب الكلمات متعددة اللغات', selectSentence: 'اختر جملة:', langToggle: 'اللغات المعروضة ON/OFF:', langOrder: 'ترتيب اللغات', dragHint: 'اسحب لإعادة الترتيب', defaultOrder: 'الترتيب الافتراضي', random: 'عشوائي', prev: '◀', next: '▶', allOn: 'تشغيل الكل', allOff: 'إيقاف الكل', savePng: 'حفظ PNG', saveSvg: 'حفظ SVG', copyUrl: 'نسخ الرابط', copied: 'تم نسخ الرابط', uiLang: 'لغة الواجهة:', noLangSelected: 'يرجى اختيار لغة واحدة على الأقل', showMore: 'عرض المزيد', showLess: 'إغلاق', rtlNote: '※ العربية والعبرية معروضة من اليسار إلى اليمين للمقارنة (تُقرأ عادةً من اليمين إلى اليسار)', rtlToggle: 'عرض بالاتجاه الأصلي (←)' },
    he: { title: 'LangMap', subtitle: 'מפת סדר מילים רב-לשונית', selectSentence: 'בחר משפט:', langToggle: 'שפות תצוגה ON/OFF:', langOrder: 'סדר שפות', dragHint: 'גרור לשינוי סדר', defaultOrder: 'סדר ברירת מחדל', random: 'אקראי', prev: '◀', next: '▶', allOn: 'הכל ON', allOff: 'הכל OFF', savePng: 'שמור PNG', saveSvg: 'שמור SVG', copyUrl: 'העתק URL', copied: 'URL הועתק', uiLang: 'שפת ממשק:', noLangSelected: 'אנא בחר לפחות שפה אחת', showMore: 'הצג עוד', showLess: 'סגור', rtlNote: '※ ערבית ועברית מוצגות משמאל לימין להשוואה (בפועל נקראות מימין לשמאל)', rtlToggle: 'הצג בכיוון המקורי (←)' },
    sw: { title: 'LangMap', subtitle: 'Ramani ya Mpangilio wa Maneno', selectSentence: 'Chagua sentensi:', langToggle: 'Lugha zinazoonyeshwa ON/OFF:', langOrder: 'Mpangilio wa lugha', dragHint: 'buruta ili kupanga upya', defaultOrder: 'Mpangilio chaguo-msingi', random: 'Nasibu', prev: '◀', next: '▶', allOn: 'Zote ON', allOff: 'Zote OFF', savePng: 'Hifadhi PNG', saveSvg: 'Hifadhi SVG', copyUrl: 'Nakili URL', copied: 'URL imenakiliwa', uiLang: 'Lugha ya UI:', noLangSelected: 'Tafadhali chagua lugha angalau moja', showMore: 'Onyesha zaidi', showLess: 'Funga', rtlNote: '※ Kiarabu na Kiebrania zinaonyeshwa kushoto→kulia kwa kulinganisha (kawaida zinasomwa kulia→kushoto)', rtlToggle: 'Onyesha mwelekeo asili (←)' },
};

let currentUILang = 'ja';

function t(key) {
    return (UI_STRINGS[currentUILang] || UI_STRINGS.ja)[key] || UI_STRINGS.ja[key] || key;
}

// Language names per UI language
const LANG_NAMES = {
    ja: { ja:'日本語(標準)', osa:'大阪弁', aom:'青森弁', oki:'沖縄弁', hak:'博多弁', ja_edo:'江戸時代語', ko:'韓国語(標準)', kp:'北朝鮮語', bus:'釜山弁', zh:'中国語(普通話)', yue:'広東語', nan:'台湾語', wuu:'上海語', zh_classical:'文言', vi:'ベトナム語', vi_nom:'チューノム', th:'タイ語', id:'インドネシア語', hi:'ヒンディー語', en:'英語', de:'ドイツ語', fr:'フランス語', it:'イタリア語', es_eu:'スペイン語(欧州)', es_mx:'スペイン語(メキシコ)', pt_eu:'ポルトガル語(欧州)', pt_br:'ポルトガル語(ブラジル)', ru:'ロシア語', uk:'ウクライナ語', ar:'アラビア語(フスハー)', ar_eg:'アラビア語(エジプト方言)', he:'ヘブライ語', sw:'スワヒリ語' },
    en: { ja:'Japanese', osa:'Osaka dialect', aom:'Aomori dialect', oki:'Okinawan', hak:'Hakata dialect', ja_edo:'Edo-period Japanese', ko:'Korean', kp:'North Korean', bus:'Busan dialect', zh:'Chinese (Mandarin)', yue:'Cantonese', nan:'Taiwanese', wuu:'Shanghainese', zh_classical:'Classical Chinese', vi:'Vietnamese', vi_nom:'Chữ Nôm', th:'Thai', id:'Indonesian', hi:'Hindi', en:'English', de:'German', fr:'French', it:'Italian', es_eu:'Spanish (Europe)', es_mx:'Spanish (Mexico)', pt_eu:'Portuguese (Europe)', pt_br:'Portuguese (Brazil)', ru:'Russian', uk:'Ukrainian', ar:'Arabic (MSA)', ar_eg:'Arabic (Egyptian)', he:'Hebrew', sw:'Swahili' },
    ko: { ja:'일본어(표준)', osa:'오사카 사투리', aom:'아오모리 사투리', oki:'오키나와 사투리', hak:'하카타 사투리', ja_edo:'에도시대 일본어', ko:'한국어(표준)', kp:'북한어', bus:'부산 사투리', zh:'중국어(보통화)', yue:'광둥어', nan:'대만어', wuu:'상하이어', zh_classical:'문언(文言)', vi:'베트남어', vi_nom:'쯔놈', th:'태국어', id:'인도네시아어', hi:'힌디어', en:'영어', de:'독일어', fr:'프랑스어', it:'이탈리아어', es_eu:'스페인어(유럽)', es_mx:'스페인어(멕시코)', pt_eu:'포르투갈어(유럽)', pt_br:'포르투갈어(브라질)', ru:'러시아어', uk:'우크라이나어', ar:'아랍어(푸스하)', ar_eg:'아랍어(이집트 방언)', he:'히브리어', sw:'스와힐리어' },
    zh: { ja:'日语(标准)', osa:'大阪方言', aom:'青森方言', oki:'冲绳方言', hak:'博多方言', ja_edo:'江户时代日语', ko:'韩语(标准)', kp:'朝鲜语', bus:'釜山方言', zh:'中文(普通话)', yue:'粤语', nan:'台湾话', wuu:'上海话', zh_classical:'文言', vi:'越南语', vi_nom:'字喃', th:'泰语', id:'印尼语', hi:'印地语', en:'英语', de:'德语', fr:'法语', it:'意大利语', es_eu:'西班牙语(欧洲)', es_mx:'西班牙语(墨西哥)', pt_eu:'葡萄牙语(欧洲)', pt_br:'葡萄牙语(巴西)', ru:'俄语', uk:'乌克兰语', ar:'阿拉伯语(标准)', ar_eg:'阿拉伯语(埃及方言)', he:'希伯来语', sw:'斯瓦希里语' },
    fr: { ja:'Japonais', osa:'Dialecte d\'Osaka', aom:'Dialecte d\'Aomori', oki:'Okinawaïen', hak:'Dialecte de Hakata', ja_edo:'Japonais d\'Edo', ko:'Coréen', kp:'Nord-coréen', bus:'Dialecte de Busan', zh:'Chinois (mandarin)', yue:'Cantonais', nan:'Taïwanais', wuu:'Shanghaïen', zh_classical:'Chinois classique', vi:'Vietnamien', vi_nom:'Chữ Nôm', th:'Thaï', id:'Indonésien', hi:'Hindi', en:'Anglais', de:'Allemand', fr:'Français', it:'Italien', es_eu:'Espagnol (Europe)', es_mx:'Espagnol (Mexique)', pt_eu:'Portugais (Europe)', pt_br:'Portugais (Brésil)', ru:'Russe', uk:'Ukrainien', ar:'Arabe (standard)', ar_eg:'Arabe (égyptien)', he:'Hébreu', sw:'Swahili' },
    de: { ja:'Japanisch', osa:'Osaka-Dialekt', aom:'Aomori-Dialekt', oki:'Okinawanisch', hak:'Hakata-Dialekt', ja_edo:'Edo-Japanisch', ko:'Koreanisch', kp:'Nordkoreanisch', bus:'Busan-Dialekt', zh:'Chinesisch (Mandarin)', yue:'Kantonesisch', nan:'Taiwanisch', wuu:'Shanghainesisch', zh_classical:'Klassisches Chinesisch', vi:'Vietnamesisch', vi_nom:'Chữ Nôm', th:'Thai', id:'Indonesisch', hi:'Hindi', en:'Englisch', de:'Deutsch', fr:'Französisch', it:'Italienisch', es_eu:'Spanisch (Europa)', es_mx:'Spanisch (Mexiko)', pt_eu:'Portugiesisch (Europa)', pt_br:'Portugiesisch (Brasilien)', ru:'Russisch', uk:'Ukrainisch', ar:'Arabisch (Standard)', ar_eg:'Arabisch (ägyptisch)', he:'Hebräisch', sw:'Swahili' },
    es_eu: { ja:'Japonés', osa:'Dialecto de Osaka', aom:'Dialecto de Aomori', oki:'Okinawense', hak:'Dialecto de Hakata', ja_edo:'Japonés de Edo', ko:'Coreano', kp:'Norcoreano', bus:'Dialecto de Busan', zh:'Chino (mandarín)', yue:'Cantonés', nan:'Taiwanés', wuu:'Shanghainés', zh_classical:'Chino clásico', vi:'Vietnamita', vi_nom:'Chữ Nôm', th:'Tailandés', id:'Indonesio', hi:'Hindi', en:'Inglés', de:'Alemán', fr:'Francés', it:'Italiano', es_eu:'Español (Europa)', es_mx:'Español (México)', pt_eu:'Portugués (Europa)', pt_br:'Portugués (Brasil)', ru:'Ruso', uk:'Ucraniano', ar:'Árabe (estándar)', ar_eg:'Árabe (egipcio)', he:'Hebreo', sw:'Suajili' },
    ru: { ja:'Японский', osa:'Осакский диалект', aom:'Аомори диалект', oki:'Окинавский', hak:'Хакатский диалект', ja_edo:'Японский эпохи Эдо', ko:'Корейский', kp:'Северокорейский', bus:'Пусанский диалект', zh:'Китайский (путунхуа)', yue:'Кантонский', nan:'Тайваньский', wuu:'Шанхайский', zh_classical:'Вэньянь', vi:'Вьетнамский', vi_nom:'Тьы-ном', th:'Тайский', id:'Индонезийский', hi:'Хинди', en:'Английский', de:'Немецкий', fr:'Французский', it:'Итальянский', es_eu:'Испанский (Европа)', es_mx:'Испанский (Мексика)', pt_eu:'Португальский (Европа)', pt_br:'Португальский (Бразилия)', ru:'Русский', uk:'Украинский', ar:'Арабский (стандарт)', ar_eg:'Арабский (египетский)', he:'Иврит', sw:'Суахили' },
    ar: { ja:'يابانية', osa:'لهجة أوساكا', aom:'لهجة أوموري', oki:'أوكيناوية', hak:'لهجة هاكاتا', ja_edo:'يابانية عصر إيدو', ko:'كورية', kp:'كورية شمالية', bus:'لهجة بوسان', zh:'صينية (ماندرين)', yue:'كانتونية', nan:'تايوانية', wuu:'شنغهاية', zh_classical:'الصينية الكلاسيكية', vi:'فيتنامية', vi_nom:'تشو نوم', th:'تايلاندية', id:'إندونيسية', hi:'هندية', en:'إنجليزية', de:'ألمانية', fr:'فرنسية', it:'إيطالية', es_eu:'إسبانية (أوروبا)', es_mx:'إسبانية (المكسيك)', pt_eu:'برتغالية (أوروبا)', pt_br:'برتغالية (البرازيل)', ru:'روسية', uk:'أوكرانية', ar:'عربية (فصحى)', ar_eg:'عربية (مصرية)', he:'عبرية', sw:'سواحيلية' },
    he: { ja:'יפנית', osa:'ניב אוסקה', aom:'ניב אאומורי', oki:'אוקינאווית', hak:'ניב הקאטה', ja_edo:'יפנית תקופת אדו', ko:'קוריאנית', kp:'צפון קוריאנית', bus:'ניב בוסאן', zh:'סינית (מנדרינית)', yue:'קנטונזית', nan:'טייוואנית', wuu:'שנגחאית', zh_classical:'סינית קלאסית', vi:'וייטנאמית', vi_nom:"צ'ו נום", th:'תאית', id:'אינדונזית', hi:'הינדי', en:'אנגלית', de:'גרמנית', fr:'צרפתית', it:'איטלקית', es_eu:'ספרדית (אירופה)', es_mx:'ספרדית (מקסיקו)', pt_eu:'פורטוגזית (אירופה)', pt_br:'פורטוגזית (ברזיל)', ru:'רוסית', uk:'אוקראינית', ar:'ערבית (ספרותית)', ar_eg:'ערבית (מצרית)', he:'עברית', sw:'סווהילי' },
    sw: { ja:'Kijapani', osa:'Lahaja ya Osaka', aom:'Lahaja ya Aomori', oki:'Kiokinawa', hak:'Lahaja ya Hakata', ja_edo:'Kijapani cha Edo', ko:'Kikorea', kp:'Kikorea Kaskazini', bus:'Lahaja ya Busan', zh:'Kichina (Mandarin)', yue:'Kikantoni', nan:'Kitaiwani', wuu:'Kishanghai', zh_classical:'Kichina cha kale', vi:'Kivietinamu', vi_nom:'Chữ Nôm', th:'Kithai', id:'Kiindonesia', hi:'Kihindi', en:'Kiingereza', de:'Kijerumani', fr:'Kifaransa', it:'Kiitaliano', es_eu:'Kihispania (Ulaya)', es_mx:'Kihispania (Meksiko)', pt_eu:'Kireno (Ulaya)', pt_br:'Kireno (Brazili)', ru:'Kirusi', uk:'Kiukraini', ar:'Kiarabu (sanifu)', ar_eg:'Kiarabu (Misri)', he:'Kiebrania', sw:'Kiswahili' },
    yue: { ja:'日本語(標準)', osa:'大阪話', aom:'青森話', oki:'沖繩話', hak:'博多話', ja_edo:'江戶時代話', ko:'韓文(標準)', kp:'北韓話', bus:'釜山話', zh:'普通話', yue:'廣東話', nan:'台灣話', wuu:'上海話', zh_classical:'文言', vi:'越南話', vi_nom:'字喃', th:'泰文', id:'印尼話', hi:'印地話', en:'英文', de:'德文', fr:'法文', it:'意大利文', es_eu:'西班牙文(歐洲)', es_mx:'西班牙文(墨西哥)', pt_eu:'葡萄牙文(歐洲)', pt_br:'葡萄牙文(巴西)', ru:'俄文', uk:'烏克蘭文', ar:'阿拉伯文(標準)', ar_eg:'阿拉伯文(埃及方言)', he:'希伯來文', sw:'斯瓦希里文' },
    vi: { ja:'Tiếng Nhật', osa:'Phương ngữ Osaka', aom:'Phương ngữ Aomori', oki:'Tiếng Okinawa', hak:'Phương ngữ Hakata', ja_edo:'Tiếng Nhật thời Edo', ko:'Tiếng Hàn', kp:'Tiếng Triều Tiên', bus:'Phương ngữ Busan', zh:'Tiếng Trung (Phổ thông)', yue:'Tiếng Quảng Đông', nan:'Tiếng Đài Loan', wuu:'Tiếng Thượng Hải', zh_classical:'Văn ngôn', vi:'Tiếng Việt', vi_nom:'Chữ Nôm', th:'Tiếng Thái', id:'Tiếng Indonesia', hi:'Tiếng Hindi', en:'Tiếng Anh', de:'Tiếng Đức', fr:'Tiếng Pháp', it:'Tiếng Ý', es_eu:'Tiếng Tây Ban Nha (châu Âu)', es_mx:'Tiếng Tây Ban Nha (Mexico)', pt_eu:'Tiếng Bồ Đào Nha (châu Âu)', pt_br:'Tiếng Bồ Đào Nha (Brazil)', ru:'Tiếng Nga', uk:'Tiếng Ukraina', ar:'Tiếng Ả Rập (chuẩn)', ar_eg:'Tiếng Ả Rập (Ai Cập)', he:'Tiếng Do Thái', sw:'Tiếng Swahili' },
    th: { ja:'ภาษาญี่ปุ่น', osa:'สำเนียงโอซากะ', aom:'สำเนียงอาโอโมริ', oki:'ภาษาโอกินาวา', hak:'สำเนียงฮากาตะ', ja_edo:'ภาษาญี่ปุ่นสมัยเอโดะ', ko:'ภาษาเกาหลี', kp:'ภาษาเกาหลีเหนือ', bus:'สำเนียงปูซาน', zh:'ภาษาจีน (กลาง)', yue:'ภาษากวางตุ้ง', nan:'ภาษาไต้หวัน', wuu:'ภาษาเซี่ยงไฮ้', zh_classical:'ภาษาจีนคลาสสิก', vi:'ภาษาเวียดนาม', vi_nom:'จื๋อโนม', th:'ภาษาไทย', id:'ภาษาอินโดนีเซีย', hi:'ภาษาฮินดี', en:'ภาษาอังกฤษ', de:'ภาษาเยอรมัน', fr:'ภาษาฝรั่งเศส', it:'ภาษาอิตาลี', es_eu:'ภาษาสเปน (ยุโรป)', es_mx:'ภาษาสเปน (เม็กซิโก)', pt_eu:'ภาษาโปรตุเกส (ยุโรป)', pt_br:'ภาษาโปรตุเกส (บราซิล)', ru:'ภาษารัสเซีย', uk:'ภาษายูเครน', ar:'ภาษาอาหรับ (มาตรฐาน)', ar_eg:'ภาษาอาหรับ(อียิปต์)', he:'ภาษาฮีบรู', sw:'ภาษาสวาฮีลี' },
    id: { ja:'Bahasa Jepang', osa:'Dialek Osaka', aom:'Dialek Aomori', oki:'Bahasa Okinawa', hak:'Dialek Hakata', ja_edo:'Bahasa Jepang Edo', ko:'Bahasa Korea', kp:'Bahasa Korea Utara', bus:'Dialek Busan', zh:'Bahasa Mandarin', yue:'Bahasa Kanton', nan:'Bahasa Taiwan', wuu:'Bahasa Shanghai', zh_classical:'Bahasa Tionghoa Klasik', vi:'Bahasa Vietnam', vi_nom:'Chữ Nôm', th:'Bahasa Thai', id:'Bahasa Indonesia', hi:'Bahasa Hindi', en:'Bahasa Inggris', de:'Bahasa Jerman', fr:'Bahasa Prancis', it:'Bahasa Italia', es_eu:'Bahasa Spanyol (Eropa)', es_mx:'Bahasa Spanyol (Meksiko)', pt_eu:'Bahasa Portugis (Eropa)', pt_br:'Bahasa Portugis (Brasil)', ru:'Bahasa Rusia', uk:'Bahasa Ukraina', ar:'Bahasa Arab (standar)', ar_eg:'Bahasa Arab (Mesir)', he:'Bahasa Ibrani', sw:'Bahasa Swahili' },
    hi: { ja:'जापानी', osa:'ओसाका बोली', aom:'आओमोरी बोली', oki:'ओकिनावा बोली', hak:'हकाता बोली', ja_edo:'एदो काल जापानी', ko:'कोरियाई', kp:'उत्तर कोरियाई', bus:'बुसान बोली', zh:'चीनी (मंदारिन)', yue:'कैंटोनीज़', nan:'ताइवानी', wuu:'शंघाई भाषा', zh_classical:'शास्त्रीय चीनी', vi:'वियतनामी', vi_nom:'चू नोम', th:'थाई', id:'इंडोनेशियाई', hi:'हिन्दी', en:'अंग्रेज़ी', de:'जर्मन', fr:'फ़्रेंच', it:'इतालवी', es_eu:'स्पेनिश (यूरोप)', es_mx:'स्पेनिश (मेक्सिको)', pt_eu:'पुर्तगाली (यूरोप)', pt_br:'पुर्तगाली (ब्राज़ील)', ru:'रूसी', uk:'यूक्रेनी', ar:'अरबी (मानक)', ar_eg:'अरबी (मिस्री)', he:'हिब्रू', sw:'स्वाहिली' },
    it: { ja:'Giapponese', osa:'Dialetto di Osaka', aom:'Dialetto di Aomori', oki:'Okinawano', hak:'Dialetto di Hakata', ja_edo:'Giapponese di Edo', ko:'Coreano', kp:'Nordcoreano', bus:'Dialetto di Busan', zh:'Cinese (mandarino)', yue:'Cantonese', nan:'Taiwanese', wuu:'Shangaiese', zh_classical:'Cinese classico', vi:'Vietnamita', vi_nom:'Chữ Nôm', th:'Tailandese', id:'Indonesiano', hi:'Hindi', en:'Inglese', de:'Tedesco', fr:'Francese', it:'Italiano', es_eu:'Spagnolo (Europa)', es_mx:'Spagnolo (Messico)', pt_eu:'Portoghese (Europa)', pt_br:'Portoghese (Brasile)', ru:'Russo', uk:'Ucraino', ar:'Arabo (standard)', ar_eg:'Arabo (egiziano)', he:'Ebraico', sw:'Swahili' },
    es_mx: { ja:'Japonés', osa:'Dialecto de Osaka', aom:'Dialecto de Aomori', oki:'Okinawense', hak:'Dialecto de Hakata', ja_edo:'Japonés de Edo', ko:'Coreano', kp:'Norcoreano', bus:'Dialecto de Busan', zh:'Chino (mandarín)', yue:'Cantonés', nan:'Taiwanés', wuu:'Shanghainés', zh_classical:'Chino clásico', vi:'Vietnamita', vi_nom:'Chữ Nôm', th:'Tailandés', id:'Indonesio', hi:'Hindi', en:'Inglés', de:'Alemán', fr:'Francés', it:'Italiano', es_eu:'Español (Europa)', es_mx:'Español (México)', pt_eu:'Portugués (Europa)', pt_br:'Portugués (Brasil)', ru:'Ruso', uk:'Ucraniano', ar:'Árabe (estándar)', ar_eg:'Árabe (egipcio)', he:'Hebreo', sw:'Suajili' },
    pt_eu: { ja:'Japonês', osa:'Dialecto de Osaka', aom:'Dialecto de Aomori', oki:'Okinawano', hak:'Dialeto de Hakata', ja_edo:'Japonês de Edo', ko:'Coreano', kp:'Norte-coreano', bus:'Dialecto de Busan', zh:'Chinês (mandarim)', yue:'Cantonês', nan:'Taiwanês', wuu:'Xangaiês', zh_classical:'Chinês clássico', vi:'Vietnamita', vi_nom:'Chữ Nôm', th:'Tailandês', id:'Indonésio', hi:'Hindi', en:'Inglês', de:'Alemão', fr:'Francês', it:'Italiano', es_eu:'Espanhol (Europa)', es_mx:'Espanhol (México)', pt_eu:'Português (Europa)', pt_br:'Português (Brasil)', ru:'Russo', uk:'Ucraniano', ar:'Árabe (padrão)', ar_eg:'Árabe (egípcio)', he:'Hebraico', sw:'Suaíli' },
    pt_br: { ja:'Japonês', osa:'Dialeto de Osaka', aom:'Dialeto de Aomori', oki:'Okinawano', hak:'Dialeto de Hakata', ja_edo:'Japonês de Edo', ko:'Coreano', kp:'Norte-coreano', bus:'Dialeto de Busan', zh:'Chinês (mandarim)', yue:'Cantonês', nan:'Taiwanês', wuu:'Xangainês', zh_classical:'Chinês clássico', vi:'Vietnamita', vi_nom:'Chữ Nôm', th:'Tailandês', id:'Indonésio', hi:'Hindi', en:'Inglês', de:'Alemão', fr:'Francês', it:'Italiano', es_eu:'Espanhol (Europa)', es_mx:'Espanhol (México)', pt_eu:'Português (Europa)', pt_br:'Português (Brasil)', ru:'Russo', uk:'Ucraniano', ar:'Árabe (padrão)', ar_eg:'Árabe (egípcio)', he:'Hebraico', sw:'Suaíli' },
    uk: { ja:'Японська', osa:'Осакський діалект', aom:'Аоморійський діалект', oki:'Окінавська', hak:'Хакатський діалект', ja_edo:'Японська доби Едо', ko:'Корейська', kp:'Північнокорейська', bus:'Пусанський діалект', zh:'Китайська (путунхуа)', yue:'Кантонська', nan:'Тайванська', wuu:'Шанхайська', zh_classical:'Веньянь', vi:'В\'єтнамська', vi_nom:'Тьи-ном', th:'Тайська', id:'Індонезійська', hi:'Гінді', en:'Англійська', de:'Німецька', fr:'Французька', it:'Італійська', es_eu:'Іспанська (Європа)', es_mx:'Іспанська (Мексика)', pt_eu:'Португальська (Європа)', pt_br:'Португальська (Бразилія)', ru:'Російська', uk:'Українська', ar:'Арабська (стандарт)', ar_eg:'Арабська (єгипетська)', he:'Іврит', sw:'Суахілі' },
};

function langName(code) {
    const names = LANG_NAMES[currentUILang] || LANG_NAMES.ja;
    return names[code] || LANG_NAMES.ja[code] || code;
}

// Language definitions - ordered by similarity
const LANGUAGES = [
    // Japanese & dialects
    { code: 'ja', name: '日本語(標準)', group: 'JPN' },
    { code: 'osa', name: '大阪弁', group: 'JPN', experimental: true },
    { code: 'hak', name: '博多弁', group: 'JPN', experimental: true },
    { code: 'oki', name: '沖縄弁', group: 'JPN', experimental: true },
    { code: 'aom', name: '青森弁', group: 'JPN', experimental: true },
    { code: 'ja_edo', name: '江戸時代語', group: 'JPN', experimental: true },
    // Korean & variants
    { code: 'ko', name: '韓国語(標準)', group: 'KOR' },
    { code: 'kp', name: '北朝鮮語', group: 'KOR', experimental: true },
    { code: 'bus', name: '釜山弁', group: 'KOR', experimental: true },
    // Chinese & variants
    { code: 'zh', name: '中国語(普通話)', group: 'CHN' },
    { code: 'yue', name: '広東語', group: 'CHN' },
    { code: 'nan', name: '台湾語', group: 'CHN' },
    { code: 'wuu', name: '上海語', group: 'CHN' },
    { code: 'zh_classical', name: '文言', group: 'CHN', experimental: true },
    // Southeast Asian
    { code: 'vi', name: 'ベトナム語', group: 'SEA' },
    { code: 'vi_nom', name: 'チューノム', group: 'SEA', experimental: true },
    { code: 'th', name: 'タイ語', group: 'SEA' },
    { code: 'id', name: 'インドネシア語', group: 'SEA' },
    // South Asian
    { code: 'hi', name: 'ヒンディー語', group: 'SAS' },
    // Germanic
    { code: 'en', name: '英語', group: 'EUR' },
    { code: 'de', name: 'ドイツ語', group: 'EUR' },
    // Romance
    { code: 'fr', name: 'フランス語', group: 'ROM' },
    { code: 'it', name: 'イタリア語', group: 'ROM' },
    { code: 'es_eu', name: 'スペイン語(欧州)', group: 'ROM' },
    { code: 'es_mx', name: 'スペイン語(メキシコ)', group: 'ROM' },
    { code: 'pt_eu', name: 'ポルトガル語(欧州)', group: 'ROM' },
    { code: 'pt_br', name: 'ポルトガル語(ブラジル)', group: 'ROM' },
    // Slavic
    { code: 'ru', name: 'ロシア語', group: 'SLV' },
    { code: 'uk', name: 'ウクライナ語', group: 'SLV' },
    // Semitic
    { code: 'ar', name: 'アラビア語(フスハー)', group: 'SEM' },
    { code: 'ar_eg', name: 'アラビア語(エジプト方言)', group: 'SEM', experimental: true },
    { code: 'he', name: 'ヘブライ語', group: 'SEM' },
    // African
    { code: 'sw', name: 'スワヒリ語', group: 'AFR' },
];

const DEFAULT_ORDER = LANGUAGES.map(l => l.code);
const EXPERIMENTAL_LANGS = new Set(LANGUAGES.filter(l => l.experimental).map(l => l.code));
const MAJOR_LANGS = new Set(['ja', 'ko', 'zh', 'en', 'es_mx', 'ar']);
const NO_SPACE_LANGS = new Set(['ja', 'osa', 'aom', 'oki', 'hak', 'ja_edo', 'zh', 'yue', 'nan', 'wuu', 'zh_classical', 'th', 'vi_nom']);

// State — only major languages are ON by default
let enabledLangs = new Set(MAJOR_LANGS);
let langOrder = [...DEFAULT_ORDER];
let currentSentenceIdx = 0;
let redrawTimer = null;
let suppressHashUpdate = false;
let langTogglesExpanded = false;
let rtlNative = false; // true = show RTL languages in native reading direction

const RTL_LANGS = new Set(['ar', 'ar_eg', 'he']);

// --- URL hash state management (ultra-compact encoding) ---
const DEFAULT_ENABLED = new Set(MAJOR_LANGS);

const LANG_INDEX = Object.fromEntries(DEFAULT_ORDER.map((c, i) => [c, i]));
const INDEX_LANG = DEFAULT_ORDER;
const UI_LANG_CODES = Object.keys(UI_STRINGS);
const UI_LANG_INDEX = Object.fromEntries(UI_LANG_CODES.map((c, i) => [c, i]));
const NUM_LANGS = DEFAULT_ORDER.length;

// Base62 encoding
const B62 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function toB62(n) {
    if (n === 0) return '0';
    let s = '';
    while (n > 0) { s = B62[n % 62] + s; n = Math.floor(n / 62); }
    return s;
}
function fromB62(s) {
    let n = 0;
    for (const c of s) { n = n * 62 + B62.indexOf(c); }
    return n;
}

// Mixed-radix pack: sentence(100) * langBits(2^NUM_LANGS) * uiLang(32) * rtl(2)
// Use 2**i instead of 1<<i to avoid 32-bit signed integer overflow at i>=31
const LANG_BITS_MOD = Math.pow(2, NUM_LANGS);
function packCore() {
    let langBits = 0;
    for (const c of enabledLangs) {
        const i = LANG_INDEX[c];
        if (i !== undefined) langBits += 2 ** i;
    }
    const ui = UI_LANG_INDEX[currentUILang] || 0;
    return currentSentenceIdx
        + 100 * langBits
        + 100 * LANG_BITS_MOD * ui
        + 100 * LANG_BITS_MOD * 32 * (rtlNative ? 1 : 0);
}

function unpackCore(n) {
    const s = n % 100; n = Math.floor(n / 100);
    const langBits = n % LANG_BITS_MOD; n = Math.floor(n / LANG_BITS_MOD);
    const ui = n % 32; n = Math.floor(n / 32);
    const rtl = n % 2;
    return { s, langBits, ui, rtl };
}

function stateToHash() {
    let hash = toB62(packCore());
    // Only encode enabled languages' order (much shorter than full 28)
    const enabledOrder = langOrder.filter(c => enabledLangs.has(c));
    const defaultEnabledOrder = DEFAULT_ORDER.filter(c => enabledLangs.has(c));
    const orderChanged = enabledOrder.join(',') !== defaultEnabledOrder.join(',');
    if (orderChanged) {
        hash += '-' + enabledOrder.map(c => B62[LANG_INDEX[c]]).join('');
    }
    return hash;
}

function updateURL() {
    if (suppressHashUpdate) return;
    history.replaceState(null, '', '#' + stateToHash());
}

function loadFromHash() {
    const hash = location.hash.slice(1);
    if (!hash) return;

    // Legacy format: key=value pairs
    if (hash.includes('=')) { loadFromLegacyHash(hash); return; }

    // Compact format: <base62packed>[-<order>]
    const [packed, orderStr] = hash.split('-');
    const n = fromB62(packed);
    const { s, langBits, ui, rtl } = unpackCore(n);

    if (s >= 0 && s < SENTENCES.length) currentSentenceIdx = s;

    const langs = new Set();
    for (let i = 0; i < NUM_LANGS; i++) {
        if (Math.floor(langBits / 2 ** i) % 2) langs.add(INDEX_LANG[i]);
    }
    if (langs.size > 0) enabledLangs = langs;

    if (ui < UI_LANG_CODES.length) currentUILang = UI_LANG_CODES[ui];
    rtlNative = rtl === 1;

    if (orderStr) {
        // Order string contains only enabled languages' order
        const orderedEnabled = [];
        for (const ch of orderStr) {
            const idx = B62.indexOf(ch);
            if (idx >= 0 && idx < NUM_LANGS) orderedEnabled.push(INDEX_LANG[idx]);
        }
        if (orderedEnabled.length > 0) {
            // Rebuild full langOrder: place ordered enabled langs among disabled in default positions
            const orderedSet = new Set(orderedEnabled);
            langOrder = [];
            let oi = 0;
            for (const c of DEFAULT_ORDER) {
                if (orderedSet.has(c)) {
                    // Skip — will be inserted by enabled order
                } else if (enabledLangs.has(c) && !orderedSet.has(c)) {
                    // Enabled but not in order string — append at default position
                    langOrder.push(c);
                } else {
                    langOrder.push(c);
                }
            }
            // Now insert ordered enabled langs at correct positions
            // Strategy: walk default order, replace enabled slots with orderedEnabled in sequence
            langOrder = [];
            oi = 0;
            for (const c of DEFAULT_ORDER) {
                if (enabledLangs.has(c)) {
                    if (oi < orderedEnabled.length) {
                        langOrder.push(orderedEnabled[oi++]);
                    }
                } else {
                    langOrder.push(c);
                }
            }
            // Append any remaining
            while (oi < orderedEnabled.length) {
                langOrder.push(orderedEnabled[oi++]);
            }
        }
    }

    if ([...enabledLangs].some(c => !MAJOR_LANGS.has(c))) {
        langTogglesExpanded = true;
    }
}

// Backward compat: old key=value format
function loadFromLegacyHash(hash) {
    const params = new URLSearchParams(hash);
    if (params.has('s')) {
        const idx = parseInt(params.get('s'));
        if (!isNaN(idx) && idx >= 0 && idx < SENTENCES.length) currentSentenceIdx = idx;
    }
    if (params.has('l')) {
        const val = params.get('l');
        enabledLangs = val === '' ? new Set() : new Set(val.split(',').filter(c => DEFAULT_ORDER.includes(c)));
    }
    if (params.has('o')) {
        const codes = params.get('o').split(',').filter(c => DEFAULT_ORDER.includes(c));
        const missing = DEFAULT_ORDER.filter(c => !codes.includes(c));
        if (codes.length > 0) langOrder = [...codes, ...missing];
    }
    if (params.has('ui') && UI_STRINGS[params.get('ui')]) currentUILang = params.get('ui');
    if (params.has('rtl')) rtlNative = params.get('rtl') === '1';
    if ([...enabledLangs].some(c => !MAJOR_LANGS.has(c))) langTogglesExpanded = true;
}

// Reset all state to defaults
function resetToDefaults() {
    currentSentenceIdx = 0;
    enabledLangs = new Set(MAJOR_LANGS);
    langOrder = [...DEFAULT_ORDER];
    currentUILang = 'ja';
    rtlNative = false;
    langTogglesExpanded = false;
    history.replaceState(null, '', location.pathname);
    syncUIFromState();
    applyUILang();
}

// Debounced line redraw
function scheduleRedrawLines() {
    if (redrawTimer) cancelAnimationFrame(redrawTimer);
    redrawTimer = requestAnimationFrame(() => {
        const sentence = SENTENCES[currentSentenceIdx];
        if (!sentence) return;
        // Read active langs from DOM order (supports live reorder during drag)
        const container = document.getElementById('langRows');
        const rows = container.querySelectorAll('.lang-row');
        const activeLangs = Array.from(rows).map(r => r.dataset.lang);
        drawLines(sentence, activeLangs);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Restore state from URL hash before building UI
    loadFromHash();

    initUILangSelect();
    initSampleSelect();
    initLangToggles();
    syncUIFromState();
    applyUILang();

    // Redraw lines on resize
    window.addEventListener('resize', scheduleRedrawLines);
    const container = document.getElementById('mapContainer');
    if (window.ResizeObserver) {
        new ResizeObserver(scheduleRedrawLines).observe(container);
    }

    // Handle browser back/forward
    window.addEventListener('hashchange', () => {
        suppressHashUpdate = true;
        loadFromHash();
        syncUIFromState();
        render();
        suppressHashUpdate = false;
    });
});

// Sync UI elements to match current state (after loadFromHash)
function syncUIFromState() {
    // Sentence select
    document.getElementById('sampleSelect').value = currentSentenceIdx;

    // Language toggles
    document.querySelectorAll('.lang-toggle').forEach(label => {
        const cb = label.querySelector('input');
        if (!cb) return; // skip "show more" button
        const code = cb.dataset.lang;
        cb.checked = enabledLangs.has(code);
        label.classList.toggle('active', enabledLangs.has(code));
    });

}

function initUILangSelect() {
    const sel = document.getElementById('uiLangSelect');
    LANGUAGES.forEach(lang => {
        if (UI_STRINGS[lang.code]) {
            const opt = document.createElement('option');
            opt.value = lang.code;
            opt.textContent = langName(lang.code);
            sel.appendChild(opt);
        }
    });
    sel.value = currentUILang;
    sel.addEventListener('change', () => {
        currentUILang = sel.value;
        applyUILang();
        updateURL();
    });
}

function applyUILang() {
    const ids = {
        uiTitle: 'title', uiSubtitle: 'subtitle', lblSentence: 'selectSentence',
        lblLangToggle: 'langToggle', btnRandom: 'random', btnAllOn: 'allOn',
        btnAllOff: 'allOff', btnSavePng: 'savePng', btnSaveSvg: 'saveSvg',
        btnCopyUrl: 'copyUrl', copyToast: 'copied', lblUiLang: 'uiLang',
        lblResetOrder: 'defaultOrder'
    };
    for (const [id, key] of Object.entries(ids)) {
        const el = document.getElementById(id);
        if (el) el.textContent = t(key);
    }
    const uiSel = document.getElementById('uiLangSelect');
    if (uiSel) {
        uiSel.value = currentUILang;
        Array.from(uiSel.options).forEach(opt => { opt.textContent = langName(opt.value); });
    }
    // Set RTL on body for Arabic/Hebrew UI
    document.body.dir = (currentUILang === 'ar' || currentUILang === 'he') ? 'rtl' : 'ltr';
    // Update sentence select labels
    updateSampleSelectLabels();
    // Update language toggle labels
    document.querySelectorAll('.lang-toggle').forEach(label => {
        const cb = label.querySelector('input');
        if (!cb) return; // skip "show more" button
        const nameSpan = label.querySelector('span:nth-child(3)');
        if (nameSpan) nameSpan.textContent = langName(cb.dataset.lang);
    });
    // Update "more" button text
    const moreBtn = document.getElementById('btnMoreLangs');
    if (moreBtn) moreBtn.innerHTML = '<span>' + t(langTogglesExpanded ? 'showLess' : 'showMore') + '</span>';
    // Re-render map to update row labels
    render();
}

function toggleRtlNative(on) {
    rtlNative = on;
    render();
}

function toggleAllLangs(on) {
    if (on) {
        if (langTogglesExpanded) {
            // All languages visible — enable all
            enabledLangs = new Set(DEFAULT_ORDER);
        } else {
            // Only major languages visible — enable only major
            enabledLangs = new Set(MAJOR_LANGS);
        }
    } else {
        enabledLangs.clear();
    }
    syncUIFromState();
    render();
}

function sentenceLabel(s) {
    // Build label from the current UI language's data, fallback to ja, then title
    const lang = currentUILang;
    const data = s.langs[lang] || s.langs.ja;
    if (data) {
        const text = data.map(([, t]) => t).join(' ');
        return `${s.id}. ${text}`;
    }
    return `${s.id}. ${s.title}`;
}

function updateSampleSelectLabels() {
    const sel = document.getElementById('sampleSelect');
    Array.from(sel.options).forEach((opt, i) => {
        opt.textContent = sentenceLabel(SENTENCES[i]);
    });
}

function initSampleSelect() {
    const sel = document.getElementById('sampleSelect');
    SENTENCES.forEach((s, i) => {
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = sentenceLabel(s);
        sel.appendChild(opt);
    });
    sel.addEventListener('change', () => {
        currentSentenceIdx = parseInt(sel.value);
        render();
    });
}

// When enabling a language, move it in langOrder to just after
// the preceding enabled language in DEFAULT_ORDER
function insertLangInOrder(code) {
    // Remove from current position
    const curIdx = langOrder.indexOf(code);
    if (curIdx !== -1) langOrder.splice(curIdx, 1);

    // Find the closest preceding language (in DEFAULT_ORDER) that is currently enabled and in langOrder
    const defIdx = DEFAULT_ORDER.indexOf(code);
    let insertAfterIdx = -1;
    for (let i = defIdx - 1; i >= 0; i--) {
        const prev = DEFAULT_ORDER[i];
        if (enabledLangs.has(prev)) {
            insertAfterIdx = langOrder.indexOf(prev);
            if (insertAfterIdx !== -1) break;
        }
    }

    if (insertAfterIdx !== -1) {
        langOrder.splice(insertAfterIdx + 1, 0, code);
    } else {
        // No preceding enabled language found — insert at the beginning
        langOrder.unshift(code);
    }
}

function createLangToggle(lang) {
    const isOn = enabledLangs.has(lang.code);
    const label = document.createElement('label');
    label.className = 'lang-toggle' + (isOn ? ' active' : '');
    if (lang.experimental) label.classList.add('experimental');
    const expBadge = lang.experimental ? '<span class="exp-badge">Exp</span>' : '';
    label.innerHTML = `
        <span class="dot"></span>
        <input type="checkbox" ${isOn ? 'checked' : ''} data-lang="${lang.code}">
        <span>${langName(lang.code)}</span>${expBadge}
    `;
    label.addEventListener('click', (e) => {
        e.preventDefault();
        const cb = label.querySelector('input');
        cb.checked = !cb.checked;
        if (cb.checked) {
            enabledLangs.add(lang.code);
            label.classList.add('active');
            insertLangInOrder(lang.code);
        } else {
            enabledLangs.delete(lang.code);
            label.classList.remove('active');
        }
        render();
    });
    return label;
}

function initLangToggles() {
    const container = document.getElementById('langToggles');
    container.innerHTML = '';

    const majorLangs = LANGUAGES.filter(l => MAJOR_LANGS.has(l.code));
    const otherLangs = LANGUAGES.filter(l => !MAJOR_LANGS.has(l.code) && !l.experimental);
    const expLangs = LANGUAGES.filter(l => l.experimental);

    majorLangs.forEach(lang => container.appendChild(createLangToggle(lang)));

    // "More" toggle
    const moreBtn = document.createElement('label');
    moreBtn.className = 'lang-toggle btn-more-langs';
    moreBtn.id = 'btnMoreLangs';
    moreBtn.innerHTML = '<span>' + (langTogglesExpanded ? t('showLess') : t('showMore')) + '</span>';
    container.appendChild(moreBtn);

    // Extra languages container (non-experimental, then experimental at bottom)
    const extraContainer = document.createElement('div');
    extraContainer.className = 'lang-toggles-extra';
    extraContainer.id = 'langTogglesExtra';
    extraContainer.style.display = langTogglesExpanded ? '' : 'none';
    otherLangs.forEach(lang => extraContainer.appendChild(createLangToggle(lang)));
    if (expLangs.length > 0) {
        const expSection = document.createElement('div');
        expSection.className = 'lang-toggles-experimental';
        expLangs.forEach(lang => expSection.appendChild(createLangToggle(lang)));
        extraContainer.appendChild(expSection);
    }
    container.appendChild(extraContainer);

    moreBtn.addEventListener('click', () => {
        langTogglesExpanded = !langTogglesExpanded;
        extraContainer.style.display = langTogglesExpanded ? '' : 'none';
        moreBtn.innerHTML = '<span>' + t(langTogglesExpanded ? 'showLess' : 'showMore') + '</span>';
    });
}

// --- Row drag (reorder from the map display — insert between rows) ---

function clearDropIndicators() {
    document.querySelectorAll('.row-drop-before, .row-drop-after').forEach(el => {
        el.classList.remove('row-drop-before', 'row-drop-after');
    });
}

let pointerDragState = null;

function onRowPointerDown(e) {
    if (!e.target.closest('.lang-label')) return;
    e.preventDefault();

    const row = e.currentTarget;
    const rowRect = row.getBoundingClientRect();

    pointerDragState = {
        lang: row.dataset.lang,
        row: row,
        offsetY: e.clientY - rowRect.top
    };

    row.classList.add('dragging');
    row.setPointerCapture(e.pointerId);

    document.addEventListener('pointermove', onDocPointerMove);
    document.addEventListener('pointerup', onDocPointerUp);
}

function onDocPointerMove(e) {
    if (!pointerDragState) return;
    e.preventDefault();

    const { row } = pointerDragState;

    // Check if we need to swap with neighbors
    const container = document.getElementById('langRows');
    const rows = Array.from(container.querySelectorAll('.lang-row'));
    const dragIdx = rows.indexOf(row);

    // Use cursor Y to determine swap
    const cursorY = e.clientY;

    let swapped = false;

    if (dragIdx < rows.length - 1) {
        const nextRow = rows[dragIdx + 1];
        const nextRect = nextRow.getBoundingClientRect();
        if (cursorY > nextRect.top + nextRect.height / 2) {
            container.insertBefore(nextRow, row);
            swapped = true;
        }
    }

    if (!swapped && dragIdx > 0) {
        const prevRow = rows[dragIdx - 1];
        const prevRect = prevRow.getBoundingClientRect();
        if (cursorY < prevRect.top + prevRect.height / 2) {
            container.insertBefore(row, prevRow);
            swapped = true;
        }
    }

    if (swapped) {
        scheduleRedrawLines();
    }
}

function onDocPointerUp(e) {
    if (!pointerDragState) return;

    const { row } = pointerDragState;
    row.classList.remove('dragging');

    pointerDragState = null;

    document.removeEventListener('pointermove', onDocPointerMove);
    document.removeEventListener('pointerup', onDocPointerUp);

    syncLangOrderFromDOM();
    updateURL();
    scheduleRedrawLines();
}

function syncLangOrderFromDOM() {
    const container = document.getElementById('langRows');
    const rows = container.querySelectorAll('.lang-row');
    const newVisualOrder = Array.from(rows).map(r => r.dataset.lang);
    const activeLangsSet = new Set(newVisualOrder);
    const newLangOrder = [];
    let visualIdx = 0;
    for (const code of langOrder) {
        if (activeLangsSet.has(code)) {
            newLangOrder.push(newVisualOrder[visualIdx++]);
        } else {
            newLangOrder.push(code);
        }
    }
    langOrder.length = 0;
    langOrder.push(...newLangOrder);
}

function prevSentence() {
    currentSentenceIdx = (currentSentenceIdx - 1 + SENTENCES.length) % SENTENCES.length;
    document.getElementById('sampleSelect').value = currentSentenceIdx;
    render();
}

function nextSentence() {
    currentSentenceIdx = (currentSentenceIdx + 1) % SENTENCES.length;
    document.getElementById('sampleSelect').value = currentSentenceIdx;
    render();
}

function randomSentence() {
    currentSentenceIdx = Math.floor(Math.random() * SENTENCES.length);
    document.getElementById('sampleSelect').value = currentSentenceIdx;
    render();
}

function resetOrder() {
    langOrder = [...DEFAULT_ORDER];
    render();
}

// Main render
function render() {
    const sentence = SENTENCES[currentSentenceIdx];
    if (!sentence) return;

    editingRow = null;

    const rowsContainer = document.getElementById('langRows');
    rowsContainer.innerHTML = '';

    const activeLangs = langOrder.filter(code => enabledLangs.has(code) && sentence.langs[code]);

    const mapContainer = document.getElementById('mapContainer');
    const emptyMsg = document.getElementById('emptyMessage');
    if (activeLangs.length === 0) {
        mapContainer.style.display = 'none';
        if (!emptyMsg) {
            const msg = document.createElement('div');
            msg.id = 'emptyMessage';
            msg.className = 'empty-message';
            msg.textContent = t('noLangSelected');
            mapContainer.parentNode.insertBefore(msg, mapContainer.nextSibling);
        } else {
            emptyMsg.style.display = '';
            emptyMsg.textContent = t('noLangSelected');
        }
        updateURL();
        return;
    } else {
        mapContainer.style.display = '';
        if (emptyMsg) emptyMsg.style.display = 'none';
    }

    activeLangs.forEach(code => {
        const lang = LANGUAGES.find(l => l.code === code);
        const langData = sentence.langs[code];

        const row = document.createElement('div');
        row.className = 'lang-row';
        row.dataset.lang = code;
        row.addEventListener('pointerdown', onRowPointerDown);

        const label = document.createElement('div');
        label.className = 'lang-label';
        label.textContent = langName(code);
        row.appendChild(label);

        const textDiv = document.createElement('div');
        textDiv.className = 'lang-text';

        langData.forEach(([segId, text], i) => {
            const seg = document.createElement('span');
            seg.className = 'segment';
            seg.dataset.seg = segId;
            seg.dataset.lang = code;
            const segColor = sentence.segments[segId]?.color || '#666';
            seg.style.color = segColor;
            seg.textContent = text;
            seg.title = `${segId}: ${text}`;
            textDiv.appendChild(seg);

            // Add space between segments
            if (i < langData.length - 1) {
                const space = document.createElement('span');
                space.className = 'segment-space';
                textDiv.appendChild(space);
            }
        });

        row.appendChild(textDiv);

        // Apply RTL native direction if toggled
        if (rtlNative && RTL_LANGS.has(code)) {
            row.classList.add('rtl-native');
        }

        // Copy button (appears on hover)
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
        copyBtn.title = t('copyText');
        copyBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const text = langData.map(seg => seg[1]).join(NO_SPACE_LANGS.has(code) ? '' : ' ');
            navigator.clipboard.writeText(text).then(() => {
                const toast = document.getElementById('copyToast');
                toast.textContent = t('copiedText');
                toast.classList.add('show');
                setTimeout(() => {
                    toast.classList.remove('show');
                    toast.textContent = t('copied');
                }, 2000);
            });
        });
        row.appendChild(copyBtn);

        // Edit button (appears on hover)
        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>';
        editBtn.title = t('edit');
        editBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            enterEditMode(row, code);
        });
        row.appendChild(editBtn);

        rowsContainer.appendChild(row);
    });

    // Show/hide RTL note based on whether any RTL language is active
    const rtlNoteEl = document.getElementById('rtlNote');
    if (rtlNoteEl) {
        const hasRtl = activeLangs.some(c => RTL_LANGS.has(c));
        rtlNoteEl.style.display = hasRtl ? '' : 'none';
        if (hasRtl) {
            document.getElementById('rtlNoteText').textContent = t('rtlNote');
            document.getElementById('rtlToggleLabel').textContent = t('rtlToggle');
            document.getElementById('rtlToggle').checked = rtlNative;
        }
    }

    // Draw lines after layout settles
    scheduleRedrawLines();

    // Update URL to reflect current state
    updateURL();
}

function drawLines(sentence, activeLangs) {
    const svg = document.getElementById('linesSvg');
    const container = document.getElementById('mapContainer');
    const rect = container.getBoundingClientRect();

    svg.setAttribute('width', container.scrollWidth);
    svg.setAttribute('height', container.scrollHeight);
    svg.style.width = container.scrollWidth + 'px';
    svg.style.height = container.scrollHeight + 'px';
    svg.innerHTML = '';

    // Collect segment positions per language (include both .segment and .segment-input for edit mode)
    const segPositions = {}; // segId -> [{lang, x, y}]
    const allSegments = container.querySelectorAll('.segment, .segment-input');

    allSegments.forEach(el => {
        const segId = el.dataset.seg;
        const elRect = el.getBoundingClientRect();
        const x = elRect.left + elRect.width / 2 - rect.left;
        const y = elRect.top + elRect.height - rect.top + 2;

        if (!segPositions[segId]) segPositions[segId] = [];
        segPositions[segId].push({ lang: el.dataset.lang, x, y, top: elRect.top - rect.top - 2 });
    });

    // Draw lines between consecutive language pairs
    for (let i = 0; i < activeLangs.length - 1; i++) {
        const langA = activeLangs[i];
        const langB = activeLangs[i + 1];

        Object.keys(segPositions).forEach(segId => {
            const points = segPositions[segId];
            const pA = points.filter(p => p.lang === langA);
            const pB = points.filter(p => p.lang === langB);

            pA.forEach(a => {
                pB.forEach(b => {
                    const color = sentence.segments[segId]?.color || '#999';
                    const line = createCurvedLine(a.x, a.y, b.x, b.top, color);
                    line.dataset.langA = langA;
                    line.dataset.langB = langB;
                    svg.appendChild(line);
                });
            });
        });
    }
}

function createCurvedLine(x1, y1, x2, y2, color) {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const midY = (y1 + y2) / 2;
    const d = `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`;
    path.setAttribute('d', d);
    path.setAttribute('stroke', color);
    path.setAttribute('stroke-width', '2');
    path.setAttribute('fill', 'none');
    path.setAttribute('opacity', '0.6');
    return path;
}

// Export functions
function buildExportSVG() {
    const container = document.getElementById('mapContainer');
    const containerRect = container.getBoundingClientRect();
    const w = container.scrollWidth;
    const h = container.scrollHeight;

    let svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">`;
    svgContent += `<rect width="${w}" height="${h}" fill="white"/>`;

    // Copy the SVG lines
    const linesSvg = document.getElementById('linesSvg');
    if (linesSvg) {
        linesSvg.querySelectorAll('path').forEach(path => {
            svgContent += `<path d="${path.getAttribute('d')}" stroke="${path.getAttribute('stroke')}" stroke-width="${path.getAttribute('stroke-width')}" fill="none" opacity="${path.getAttribute('opacity')}"/>`;
        });
    }

    // Render text elements
    const rows = container.querySelectorAll('.lang-row');
    rows.forEach(row => {
        const label = row.querySelector('.lang-label');
        if (label) {
            const r = label.getBoundingClientRect();
            const x = r.left - containerRect.left;
            const y = r.top - containerRect.top + r.height * 0.75;
            svgContent += `<text x="${x}" y="${y}" font-family="sans-serif" font-size="16" font-weight="700" fill="#333">${escapeXml(label.textContent)}</text>`;
        }
        row.querySelectorAll('.segment').forEach(seg => {
            const r = seg.getBoundingClientRect();
            const x = r.left - containerRect.left;
            const y = r.top - containerRect.top + r.height * 0.75;
            svgContent += `<text x="${x}" y="${y}" font-family="sans-serif" font-size="20" font-weight="600" fill="${seg.style.color}">${escapeXml(seg.textContent)}</text>`;
        });
    });

    svgContent += `</svg>`;
    return svgContent;
}

function escapeXml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function downloadAsPNG() {
    const svgData = buildExportSVG();
    const container = document.getElementById('mapContainer');
    const scale = 2;
    const canvas = document.createElement('canvas');
    canvas.width = container.scrollWidth * scale;
    canvas.height = container.scrollHeight * scale;
    const ctx = canvas.getContext('2d');
    ctx.scale(scale, scale);

    const img = new Image();
    img.onload = () => {
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        const link = document.createElement('a');
        link.download = 'langmap.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    };
    img.onerror = () => {
        // Fallback: use html2canvas if available, or alert
        alert('PNG export failed. Please use SVG export instead.');
    };
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    img.src = URL.createObjectURL(blob);
}

function downloadAsSVG() {
    const svgData = buildExportSVG();
    const blob = new Blob([svgData], { type: 'image/svg+xml' });
    const link = document.createElement('a');
    link.download = 'langmap.svg';
    link.href = URL.createObjectURL(blob);
    link.click();
}

// Share functions
function getShareURL() {
    return location.href;
}

function getShareText() {
    const sentence = SENTENCES[currentSentenceIdx];
    return sentence ? `LangMap: ${sentence.title}` : 'LangMap - 多言語語順マップ';
}

function copyShareURL() {
    navigator.clipboard.writeText(getShareURL()).then(() => {
        const toast = document.getElementById('copyToast');
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2000);
    });
}

function shareToX() {
    const url = encodeURIComponent(getShareURL());
    const text = encodeURIComponent(getShareText());
    window.open(`https://x.com/intent/tweet?text=${text}&url=${url}`, '_blank', 'width=550,height=420');
}

function shareToFacebook() {
    const url = encodeURIComponent(getShareURL());
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=550,height=420');
}

function shareToLINE() {
    const url = encodeURIComponent(getShareURL());
    const text = encodeURIComponent(getShareText());
    window.open(`https://social-plugins.line.me/lineit/share?url=${url}&text=${text}`, '_blank', 'width=550,height=420');
}

// --- Inline editing ---
let editingRow = null; // { lang, sentenceIdx }
let segDragWrapper = null; // currently dragged segment wrapper

function enterEditMode(row, langCode) {
    if (editingRow) return;
    editingRow = { lang: langCode, sentenceIdx: currentSentenceIdx };

    // Add overlay
    const overlay = document.createElement('div');
    overlay.className = 'edit-overlay';
    overlay.id = 'editOverlay';
    overlay.addEventListener('click', () => cancelEdit(row, langCode));
    document.body.appendChild(overlay);

    // Move row to body so it sits above the overlay
    row.remove();
    row.classList.add('editing');
    row.draggable = false;
    document.body.appendChild(row);

    // Hide edit button, show save bar
    const editBtn = row.querySelector('.edit-btn');
    editBtn.style.display = 'none';

    const saveBar = document.createElement('div');
    saveBar.className = 'save-bar';

    const saveBtn = document.createElement('button');
    saveBtn.className = 'btn btn-sm btn-accent save-btn';
    saveBtn.textContent = t('save');
    saveBtn.addEventListener('click', () => saveEdit(row, langCode));

    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'btn btn-sm cancel-btn';
    cancelBtn.textContent = t('cancel');
    cancelBtn.addEventListener('click', () => cancelEdit(row, langCode));

    saveBar.appendChild(saveBtn);
    saveBar.appendChild(cancelBtn);
    row.appendChild(saveBar);

    // Transform segments into draggable input wrappers
    const textDiv = row.querySelector('.lang-text');
    const segments = textDiv.querySelectorAll('.segment');
    const spaces = textDiv.querySelectorAll('.segment-space');
    spaces.forEach(sp => sp.remove());

    segments.forEach(seg => {
        const wrapper = createSegmentWrapper(seg, langCode);
        seg.replaceWith(wrapper);
    });

    // Set up drag container on textDiv for segment reordering
    setupSegmentDragContainer(textDiv);

    // Add "+" button for adding new segments
    const sentence = SENTENCES[currentSentenceIdx];
    const addBtn = document.createElement('button');
    addBtn.className = 'add-segment-btn';
    addBtn.type = 'button';
    addBtn.textContent = '+';
    addBtn.title = t('addSegment') || 'Add segment';
    addBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showAddSegmentMenu(addBtn, textDiv, langCode, sentence);
    });
    textDiv.appendChild(addBtn);

    // Redraw lines so they stay connected with the input elements
    scheduleRedrawLines();
}

function createSegmentWrapper(seg, langCode) {
    const sentence = SENTENCES[currentSentenceIdx];
    const wrapper = document.createElement('span');
    wrapper.className = 'segment-input-wrapper';
    wrapper.draggable = false;

    const handle = document.createElement('span');
    handle.className = 'drag-handle';
    handle.textContent = '⠿';
    handle.draggable = true;

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'segment-input';
    input.draggable = false; // prevent native text drag
    input.value = seg.textContent;
    input.dataset.seg = seg.dataset.seg;
    input.dataset.lang = seg.dataset.lang || langCode;
    const segColor = seg.style.color || sentence.segments[seg.dataset.seg]?.color || '#666';
    input.style.color = segColor;
    input.style.borderColor = segColor;
    // Auto-size: use character count as initial estimate, then refine after render
    const charWidth = seg.textContent.length * 14 + 24;
    input.style.width = Math.max(charWidth, 50) + 'px';
    requestAnimationFrame(() => {
        input.style.width = Math.max(input.scrollWidth + 16, 50) + 'px';
    });
    input.addEventListener('input', () => {
        input.style.width = '0';
        input.style.width = Math.max(input.scrollWidth + 16, 50) + 'px';
    });

    const deleteBtn = document.createElement('span');
    deleteBtn.className = 'seg-delete-btn';
    deleteBtn.textContent = '\u00d7';
    deleteBtn.title = t('deleteSegment') || 'Delete';
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        wrapper.remove();
        scheduleRedrawLines();
    });

    // Segment ID badge
    const badge = document.createElement('span');
    badge.className = 'seg-id-badge';
    badge.textContent = seg.dataset.seg;
    badge.style.background = segColor;

    wrapper.appendChild(handle);
    wrapper.appendChild(badge);
    wrapper.appendChild(input);
    wrapper.appendChild(deleteBtn);

    // Only the handle initiates drag (not the input)
    handle.addEventListener('dragstart', (e) => {
        e.stopPropagation();
        segDragWrapper = wrapper;
        wrapper.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', 'seg');
    });

    handle.addEventListener('dragend', () => {
        wrapper.classList.remove('dragging');
        segDragWrapper = null;
        clearSegDropIndicators();
    });

    return wrapper;
}

function clearSegDropIndicators() {
    document.querySelectorAll('.segment-input-wrapper').forEach(w => {
        w.classList.remove('drag-over-left', 'drag-over-right');
    });
}

function setupSegmentDragContainer(textDiv) {
    textDiv.addEventListener('dragover', (e) => {
        if (!segDragWrapper) return;
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = 'move';

        clearSegDropIndicators();
        const target = findClosestWrapper(e.target);
        if (!target || target === segDragWrapper) return;
        const rect = target.getBoundingClientRect();
        const midX = rect.left + rect.width / 2;
        target.classList.add(e.clientX < midX ? 'drag-over-left' : 'drag-over-right');
    });

    textDiv.addEventListener('dragleave', (e) => {
        if (!segDragWrapper) return;
        // Only clear if leaving the textDiv entirely
        if (!textDiv.contains(e.relatedTarget)) {
            clearSegDropIndicators();
        }
    });

    textDiv.addEventListener('drop', (e) => {
        if (!segDragWrapper) return;
        e.preventDefault();
        e.stopPropagation();
        clearSegDropIndicators();

        const target = findClosestWrapper(e.target);
        if (!target || target === segDragWrapper) return;

        const rect = target.getBoundingClientRect();
        const midX = rect.left + rect.width / 2;
        if (e.clientX < midX) {
            textDiv.insertBefore(segDragWrapper, target);
        } else {
            textDiv.insertBefore(segDragWrapper, target.nextSibling);
        }
        scheduleRedrawLines();
    });
}

function findClosestWrapper(el) {
    while (el && !el.classList?.contains('segment-input-wrapper')) {
        el = el.parentElement;
    }
    return el;
}

// Default palette for new segments
const SEGMENT_COLORS = [
    '#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6',
    '#1abc9c', '#e67e22', '#34495e', '#e91e63', '#00bcd4',
    '#8bc34a', '#ff5722', '#607d8b', '#795548', '#673ab7'
];

function nextSegmentId(sentence) {
    const existing = Object.keys(sentence.segments);
    // Find next unused letter: A, B, C, ... Z, AA, AB, ...
    for (let i = 0; ; i++) {
        const id = i < 26 ? String.fromCharCode(65 + i) : 'A' + String.fromCharCode(65 + i - 26);
        if (!existing.includes(id)) return id;
    }
}

function nextSegmentColor(sentence) {
    const usedColors = new Set(Object.values(sentence.segments).map(s => s.color));
    return SEGMENT_COLORS.find(c => !usedColors.has(c)) || SEGMENT_COLORS[Object.keys(sentence.segments).length % SEGMENT_COLORS.length];
}

function showAddSegmentMenu(anchorBtn, textDiv, langCode, sentence) {
    // Remove existing menu
    const existing = document.querySelector('.add-segment-menu');
    if (existing) { existing.remove(); return; }

    const allSegs = Object.keys(sentence.segments);

    const menu = document.createElement('div');
    menu.className = 'add-segment-menu';

    // Existing segment IDs
    allSegs.forEach(segId => {
        const item = document.createElement('div');
        item.className = 'add-segment-menu-item';
        const dot = document.createElement('span');
        dot.className = 'seg-dot';
        dot.style.background = sentence.segments[segId].color;
        item.appendChild(dot);
        const label = document.createElement('span');
        label.textContent = segId;
        item.appendChild(label);
        item.addEventListener('click', () => {
            menu.remove();
            addNewSegment(textDiv, langCode, segId, sentence);
        });
        menu.appendChild(item);
    });

    // Separator
    const sep = document.createElement('div');
    sep.style.cssText = 'border-top:1px solid #e0e0e0; margin:4px 0;';
    menu.appendChild(sep);

    // "New segment" option
    const newItem = document.createElement('div');
    newItem.className = 'add-segment-menu-item';
    const newDot = document.createElement('span');
    newDot.className = 'seg-dot';
    newDot.style.background = nextSegmentColor(sentence);
    newItem.appendChild(newDot);
    const newLabel = document.createElement('span');
    newLabel.textContent = '+ ' + (nextSegmentId(sentence));
    newLabel.style.fontWeight = '600';
    newItem.appendChild(newLabel);
    newItem.addEventListener('click', () => {
        menu.remove();
        const newId = nextSegmentId(sentence);
        const newColor = nextSegmentColor(sentence);
        // Register the new segment in the sentence data
        sentence.segments[newId] = { color: newColor };
        addNewSegment(textDiv, langCode, newId, sentence);
    });
    menu.appendChild(newItem);

    // Position below the button
    const rect = anchorBtn.getBoundingClientRect();
    menu.style.position = 'fixed';
    menu.style.left = rect.left + 'px';
    menu.style.top = rect.bottom + 4 + 'px';
    document.body.appendChild(menu);

    // Close on outside click
    const closeHandler = (e) => {
        if (!menu.contains(e.target) && e.target !== anchorBtn) {
            menu.remove();
            document.removeEventListener('click', closeHandler, true);
        }
    };
    setTimeout(() => document.addEventListener('click', closeHandler, true), 0);
}

function addNewSegment(textDiv, langCode, segId, sentence) {
    // Create a fake segment element to pass to createSegmentWrapper
    const seg = document.createElement('span');
    seg.className = 'segment';
    seg.dataset.seg = segId;
    seg.dataset.lang = langCode;
    seg.style.color = sentence.segments[segId].color;
    seg.textContent = '';
    seg.offsetWidth = 0; // will default to min-width

    const wrapper = createSegmentWrapper(seg, langCode);
    // Insert before the "+" button
    const addBtn = textDiv.querySelector('.add-segment-btn');
    textDiv.insertBefore(wrapper, addBtn);

    // Focus the new input
    const input = wrapper.querySelector('.segment-input');
    input.style.width = '40px';
    input.focus();

    scheduleRedrawLines();
}

function saveEdit(row, langCode) {
    const sentence = SENTENCES[editingRow.sentenceIdx];
    const textDiv = row.querySelector('.lang-text');
    const wrappers = textDiv.querySelectorAll('.segment-input-wrapper');

    // Build new segment order from current wrapper positions
    const newLangData = [];
    wrappers.forEach(wrapper => {
        const input = wrapper.querySelector('.segment-input');
        const segId = input.dataset.seg;
        const text = input.value;
        newLangData.push([segId, text]);
    });

    // Detect changes (text edits, reorders, additions)
    const oldLangData = sentence.langs[langCode];
    const corrections = [];
    const orderChanged = newLangData.length !== oldLangData.length ||
        newLangData.some(([id, text], i) => oldLangData[i]?.[0] !== id || oldLangData[i]?.[1] !== text);

    if (orderChanged) {
        newLangData.forEach(([segId, newText]) => {
            const original = oldLangData.find(([id]) => id === segId);
            if (!original) {
                corrections.push({ seg: segId, old: null, new: newText, action: 'add' });
            } else if (original[1] !== newText) {
                corrections.push({ seg: segId, old: original[1], new: newText });
            }
        });
        // Check for removed segments
        oldLangData.forEach(([segId, text]) => {
            if (!newLangData.find(([id]) => id === segId)) {
                corrections.push({ seg: segId, old: text, new: null, action: 'remove' });
            }
        });
        // Check reorder
        const oldOrder = oldLangData.map(([id]) => id).join(',');
        const newOrder = newLangData.map(([id]) => id).join(',');
        if (oldOrder !== newOrder && corrections.length === 0) {
            corrections.push({ action: 'reorder', oldOrder, newOrder });
        }
        // Apply changes to data
        sentence.langs[langCode] = newLangData;
    }

    if (corrections.length > 0) {
        const correction = {
            sentenceId: sentence.id,
            lang: langCode,
            corrections,
            timestamp: new Date().toISOString()
        };
        // Store to localStorage
        const stored = JSON.parse(localStorage.getItem('langmap_corrections') || '[]');
        stored.push(correction);
        localStorage.setItem('langmap_corrections', JSON.stringify(stored));

        // Show toast
        const toast = document.getElementById('copyToast');
        toast.textContent = t('correctionSaved');
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
            toast.textContent = t('copied');
        }, 2000);
    }

    exitEditMode();
}

function cancelEdit(row, langCode) {
    exitEditMode();
}

function exitEditMode() {
    editingRow = null;
    // Remove overlay
    const overlay = document.getElementById('editOverlay');
    if (overlay) overlay.remove();
    // Remove editing row from body (it was moved there in enterEditMode)
    const editingEl = document.querySelector('body > .lang-row.editing');
    if (editingEl) editingEl.remove();
    render();
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && editingRow) { exitEditMode(); return; }
    if (e.target.tagName === 'SELECT' || e.target.tagName === 'INPUT') return;
    if (e.key === 'ArrowLeft') prevSentence();
    if (e.key === 'ArrowRight') nextSentence();
    if (e.key === 'r' && !e.ctrlKey && !e.metaKey) randomSentence();
});
