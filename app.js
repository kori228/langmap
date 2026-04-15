// UI translations
const UI_STRINGS = {
    ja: { title: 'LangMap', subtitle: '多言語語順マップ', selectSentence: '文章選択', langToggle: '表示言語', langOrder: '言語の順序', dragHint: 'ドラッグで並べ替え', defaultOrder: 'デフォルト順', random: 'ランダム', prev: '◀', next: '▶', allOn: '全ON', allOff: '全OFF', savePng: 'PNG保存', saveSvg: 'SVG保存', copyUrl: 'URLコピー', copied: 'URLをコピーしました', uiLang: 'UI言語:', noLangSelected: '1つ以上の言語を選択してください', selectLangs: '言語選択（全{n}言語・準備中{p}）', selectLangsTitle: '言語選択', modalConfirm: '選択', modalCancel: 'キャンセル', edit: '編集', save: '保存', cancel: 'キャンセル', corrector: '添削者:', correctionSaved: '修正を保存しました', copyText: 'テキストをコピー', copiedText: 'テキストをコピーしました', rtlNote: '※ アラビア文字・ヘブライ文字は比較のため左→右で表示しています（実際は右→左に読みます）', rtlToggle: '元の語順(←)で表示' , en_au:"英語(オーストラリア)", en_in:"英語(インド)", es_ar:"スペイン語(アルゼンチン)", ar_iq:"アラビア語(イラク方言)", hak_cn:"客家語"},
    ko: { title: 'LangMap', subtitle: '다국어 어순 맵', selectSentence: '문장 선택', langToggle: '표시 언어', langOrder: '언어 순서', dragHint: '드래그하여 정렬', defaultOrder: '기본 순서', random: '랜덤', prev: '◀', next: '▶', allOn: '전체 ON', allOff: '전체 OFF', savePng: 'PNG 저장', saveSvg: 'SVG 저장', copyUrl: 'URL 복사', copied: 'URL을 복사했습니다', uiLang: 'UI 언어:', noLangSelected: '1개 이상의 언어를 선택하세요', selectLangs: '언어 선택 (전체 {n}개)', selectLangsTitle: '언어 선택', modalConfirm: '선택', modalCancel: '취소', rtlNote: '※ 아랍 문자·히브리 문자는 비교를 위해 왼→오른쪽으로 표시합니다 (실제로는 오른→왼쪽으로 읽습니다)', rtlToggle: '원래 방향(←)으로 표시' , en_au:"영어(호주)", en_in:"영어(인도)", es_ar:"스페인어(아르헨티나)", ar_iq:"아랍어(이라크 방언)", hak_cn:"객가어"},
    zh: { title: 'LangMap', subtitle: '多语言语序图', selectSentence: '选择句子', langToggle: '显示语言', langOrder: '语言顺序', dragHint: '拖拽排序', defaultOrder: '默认顺序', random: '随机', prev: '◀', next: '▶', allOn: '全部开', allOff: '全部关', savePng: 'PNG保存', saveSvg: 'SVG保存', copyUrl: '复制链接', copied: '链接已复制', uiLang: 'UI语言:', noLangSelected: '请选择至少一种语言', selectLangs: '语言选择（共{n}种）', selectLangsTitle: '语言选择', modalConfirm: '确定', modalCancel: '取消', rtlNote: '※ 阿拉伯文字、希伯来文字为便于比较从左→右显示（实际从右→左阅读）', rtlToggle: '显示原始方向(←)' , en_au:"英语(澳大利亚)", en_in:"英语(印度)", es_ar:"西班牙语(阿根廷)", ar_iq:"阿拉伯语(伊拉克方言)", hak_cn:"客家话"},
    yue: { title: 'LangMap', subtitle: '多語言語序圖', selectSentence: '揀句子', langToggle: '顯示語言', langOrder: '語言順序', dragHint: '拖嚟排序', defaultOrder: '預設順序', random: '隨機', prev: '◀', next: '▶', allOn: '全開', allOff: '全關', savePng: 'PNG儲存', saveSvg: 'SVG儲存', copyUrl: '複製連結', copied: '連結已複製', uiLang: 'UI語言:', noLangSelected: '請揀至少一種語言', selectLangs: '語言選擇（共{n}種）', selectLangsTitle: '語言選擇', modalConfirm: '確定', modalCancel: '取消', rtlNote: '※ 阿拉伯文字、希伯來文字為咗比較用左→右顯示（實際係右→左讀）', rtlToggle: '顯示原本方向(←)' , en_au:"英文(澳洲)", en_in:"英文(印度)", es_ar:"西班牙文(阿根廷)", ar_iq:"阿拉伯文(伊拉克)", hak_cn:"客家話"},
    vi: { title: 'LangMap', subtitle: 'Bản đồ trật tự từ đa ngôn ngữ', selectSentence: 'Chọn câu', langToggle: 'Ngôn ngữ hiển thị', langOrder: 'Thứ tự ngôn ngữ', dragHint: 'kéo để sắp xếp', defaultOrder: 'Mặc định', random: 'Ngẫu nhiên', prev: '◀', next: '▶', allOn: 'Bật tất cả', allOff: 'Tắt tất cả', savePng: 'Lưu PNG', saveSvg: 'Lưu SVG', copyUrl: 'Sao chép URL', copied: 'Đã sao chép URL', uiLang: 'Ngôn ngữ UI:', noLangSelected: 'Vui lòng chọn ít nhất một ngôn ngữ', selectLangs: 'Chọn ngôn ngữ ({n})', selectLangsTitle: 'Chọn ngôn ngữ', modalConfirm: 'Chọn', modalCancel: 'Hủy', rtlNote: '※ Chữ Ả Rập và chữ Do Thái được hiển thị trái→phải để so sánh (thực tế đọc phải→trái)', rtlToggle: 'Hiển thị hướng gốc (←)' , en_au:"Tiếng Anh (Úc)", en_in:"Tiếng Anh (Ấn Độ)", es_ar:"Tiếng Tây Ban Nha (Argentina)", ar_iq:"Tiếng Ả Rập (Iraq)", hak_cn:"Tiếng Khách Gia"},
    th: { title: 'LangMap', subtitle: 'แผนที่ลำดับคำหลายภาษา', selectSentence: 'เลือกประโยค', langToggle: 'ภาษาที่แสดง', langOrder: 'ลำดับภาษา', dragHint: 'ลากเพื่อจัดเรียง', defaultOrder: 'ค่าเริ่มต้น', random: 'สุ่ม', prev: '◀', next: '▶', allOn: 'เปิดทั้งหมด', allOff: 'ปิดทั้งหมด', savePng: 'บันทึก PNG', saveSvg: 'บันทึก SVG', copyUrl: 'คัดลอก URL', copied: 'คัดลอก URL แล้ว', uiLang: 'ภาษา UI:', noLangSelected: 'กรุณาเลือกอย่างน้อยหนึ่งภาษา', selectLangs: 'เลือกภาษา ({n} ภาษา)', selectLangsTitle: 'เลือกภาษา', modalConfirm: 'เลือก', modalCancel: 'ยกเลิก', rtlNote: '※ อักษรอาหรับและอักษรฮีบรูแสดงซ้าย→ขวาเพื่อการเปรียบเทียบ (ปกติอ่านขวา→ซ้าย)', rtlToggle: 'แสดงทิศทางดั้งเดิม (←)' , en_au:"อังกฤษ (ออสเตรเลีย)", en_in:"อังกฤษ (อินเดีย)", es_ar:"สเปน (อาร์เจนตินา)", ar_iq:"อาหรับ (อิรัก)", hak_cn:"จีนแคะ"},
    id: { title: 'LangMap', subtitle: 'Peta Urutan Kata Multibahasa', selectSentence: 'Pilih kalimat', langToggle: 'Bahasa ditampilkan', langOrder: 'Urutan bahasa', dragHint: 'seret untuk mengurutkan', defaultOrder: 'Urutan default', random: 'Acak', prev: '◀', next: '▶', allOn: 'Semua ON', allOff: 'Semua OFF', savePng: 'Simpan PNG', saveSvg: 'Simpan SVG', copyUrl: 'Salin URL', copied: 'URL disalin', uiLang: 'Bahasa UI:', noLangSelected: 'Pilih setidaknya satu bahasa', selectLangs: 'Pilih bahasa ({n})', selectLangsTitle: 'Pilih bahasa', modalConfirm: 'Pilih', modalCancel: 'Batal', rtlNote: '※ Aksara Arab dan aksara Ibrani ditampilkan kiri→kanan untuk perbandingan (biasanya dibaca kanan→kiri)', rtlToggle: 'Tampilkan arah asli (←)' , en_au:"Inggris (Australia)", en_in:"Inggris (India)", es_ar:"Spanyol (Argentina)", ar_iq:"Arab (Irak)", hak_cn:"Hakka"},
    hi: { title: 'LangMap', subtitle: 'बहुभाषी शब्द क्रम मानचित्र', selectSentence: 'वाक्य चुनें', langToggle: 'प्रदर्शन भाषा', langOrder: 'भाषा क्रम', dragHint: 'क्रम बदलने के लिए खींचें', defaultOrder: 'डिफ़ॉल्ट क्रम', random: 'रैंडम', prev: '◀', next: '▶', allOn: 'सभी ON', allOff: 'सभी OFF', savePng: 'PNG सहेजें', saveSvg: 'SVG सहेजें', copyUrl: 'URL कॉपी', copied: 'URL कॉपी हो गया', uiLang: 'UI भाषा:', noLangSelected: 'कृपया कम से कम एक भाषा चुनें', selectLangs: 'भाषा चुनें ({n})', selectLangsTitle: 'भाषा चुनें', modalConfirm: 'चुनें', modalCancel: 'रद्द', rtlNote: '※ अरबी लिपि और हिब्रू लिपि तुलना के लिए बाएं→दाएं दिखाई गई हैं (वास्तव में दाएं→बाएं पढ़ी जाती हैं)', rtlToggle: 'मूल दिशा में दिखाएं (←)' , en_au:"अंग्रेज़ी (ऑस्ट्रेलियाई)", en_in:"अंग्रेज़ी (भारतीय)", es_ar:"स्पेनिश (अर्जेंटीनी)", ar_iq:"अरबी (इराकी)", hak_cn:"हक्का चीनी"},
    en: { title: 'LangMap', subtitle: 'Multilingual Word Order Map', selectSentence: 'Select sentence', langToggle: 'Languages', langOrder: 'Language order', dragHint: 'drag to reorder', defaultOrder: 'Default order', random: 'Random', prev: '◀', next: '▶', allOn: 'All ON', allOff: 'All OFF', savePng: 'Save PNG', saveSvg: 'Save SVG', copyUrl: 'Copy URL', copied: 'URL copied', uiLang: 'UI Language:', noLangSelected: 'Please select at least one language', selectLangs: 'Select languages ({n}, {p} pending)', selectLangsTitle: 'Select languages', modalConfirm: 'Apply', modalCancel: 'Cancel', edit: 'Edit', save: 'Save', cancel: 'Cancel', corrector: 'Corrector:', correctionSaved: 'Correction saved', copyText: 'Copy text', copiedText: 'Text copied', rtlNote: '* Arabic script and Hebrew script are shown left-to-right for comparison (they are normally read right-to-left)', rtlToggle: 'Show native direction' , en_au:"English (Australian)", en_in:"English (Indian)", es_ar:"Spanish (Argentine)", ar_iq:"Arabic (Iraqi)", hak_cn:"Hakka Chinese"},
    de: { title: 'LangMap', subtitle: 'Mehrsprachige Wortstellungskarte', selectSentence: 'Satz wählen', langToggle: 'Sprachen', langOrder: 'Sprachreihenfolge', dragHint: 'ziehen zum Sortieren', defaultOrder: 'Standardreihenfolge', random: 'Zufällig', prev: '◀', next: '▶', allOn: 'Alle AN', allOff: 'Alle AUS', savePng: 'PNG speichern', saveSvg: 'SVG speichern', copyUrl: 'URL kopieren', copied: 'URL kopiert', uiLang: 'UI-Sprache:', noLangSelected: 'Bitte wählen Sie mindestens eine Sprache', selectLangs: 'Sprachen wählen ({n})', selectLangsTitle: 'Sprachen wählen', modalConfirm: 'Anwenden', modalCancel: 'Abbrechen', rtlNote: '※ Arabische Schrift und hebräische Schrift werden zum Vergleich links→rechts angezeigt (normalerweise rechts→links gelesen)', rtlToggle: 'Originalrichtung anzeigen (←)' , en_au:"Englisch (australisch)", en_in:"Englisch (indisch)", es_ar:"Spanisch (argentinisch)", ar_iq:"Arabisch (irakisch)", hak_cn:"Hakka-Chinesisch"},
    fr: { title: 'LangMap', subtitle: "Carte de l'ordre des mots multilingue", selectSentence: 'Sélectionner une phrase ', langToggle: 'Langues ', langOrder: 'Ordre des langues', dragHint: 'glisser pour réorganiser', defaultOrder: 'Ordre par défaut', random: 'Aléatoire', prev: '◀', next: '▶', allOn: 'Tout ON', allOff: 'Tout OFF', savePng: 'Enregistrer PNG', saveSvg: 'Enregistrer SVG', copyUrl: "Copier l'URL", copied: 'URL copié', uiLang: 'Langue UI :', noLangSelected: 'Veuillez sélectionner au moins une langue', selectLangs: 'Choisir les langues ({n})', selectLangsTitle: 'Choisir les langues', modalConfirm: 'Appliquer', modalCancel: 'Annuler', rtlNote: "※ L'écriture arabe et l'écriture hébraïque sont affichées gauche→droite pour comparaison (normalement lues droite→gauche)", rtlToggle: 'Afficher la direction originale (←)' , en_au:"Anglais (australien)", en_in:"Anglais (indien)", es_ar:"Espagnol (argentin)", ar_iq:"Arabe (irakien)", hak_cn:"Hakka"},
    it: { title: 'LangMap', subtitle: "Mappa dell'ordine delle parole multilingue", selectSentence: 'Seleziona frase', langToggle: 'Lingue', langOrder: 'Ordine delle lingue', dragHint: 'trascina per riordinare', defaultOrder: 'Ordine predefinito', random: 'Casuale', prev: '◀', next: '▶', allOn: 'Tutti ON', allOff: 'Tutti OFF', savePng: 'Salva PNG', saveSvg: 'Salva SVG', copyUrl: 'Copia URL', copied: 'URL copiato', uiLang: 'Lingua UI:', noLangSelected: 'Seleziona almeno una lingua', selectLangs: 'Seleziona lingue ({n})', selectLangsTitle: 'Seleziona lingue', modalConfirm: 'Applica', modalCancel: 'Annulla', rtlNote: '※ La scrittura araba e la scrittura ebraica sono mostrate sinistra→destra per confronto (normalmente lette destra→sinistra)', rtlToggle: 'Mostra direzione originale (←)' , en_au:"Inglese (australiano)", en_in:"Inglese (indiano)", es_ar:"Spagnolo (argentino)", ar_iq:"Arabo (iracheno)", hak_cn:"Hakka cinese"},
    es_eu: { title: 'LangMap', subtitle: 'Mapa de orden de palabras multilingüe', selectSentence: 'Seleccionar oración', langToggle: 'Idiomas', langOrder: 'Orden de idiomas', dragHint: 'arrastrar para reordenar', defaultOrder: 'Orden predeterminado', random: 'Aleatorio', prev: '◀', next: '▶', allOn: 'Todo ON', allOff: 'Todo OFF', savePng: 'Guardar PNG', saveSvg: 'Guardar SVG', copyUrl: 'Copiar URL', copied: 'URL copiado', uiLang: 'Idioma UI:', noLangSelected: 'Seleccione al menos un idioma', selectLangs: 'Seleccionar idiomas ({n})', selectLangsTitle: 'Seleccionar idiomas', modalConfirm: 'Aplicar', modalCancel: 'Cancelar', rtlNote: '※ La escritura árabe y la escritura hebrea se muestran de izquierda→derecha para comparación (normalmente se leen de derecha→izquierda)', rtlToggle: 'Mostrar dirección original (←)' , en_au:"Inglés (australiano)", en_in:"Inglés (indio)", es_ar:"Español (argentino)", ar_iq:"Árabe (iraquí)", hak_cn:"Chino hakka"},
    es_mx: { title: 'LangMap', subtitle: 'Mapa de orden de palabras multilingüe', selectSentence: 'Seleccionar oración', langToggle: 'Idiomas', langOrder: 'Orden de idiomas', dragHint: 'arrastrar para reordenar', defaultOrder: 'Orden predeterminado', random: 'Aleatorio', prev: '◀', next: '▶', allOn: 'Todo ON', allOff: 'Todo OFF', savePng: 'Guardar PNG', saveSvg: 'Guardar SVG', copyUrl: 'Copiar URL', copied: 'URL copiado', uiLang: 'Idioma UI:', noLangSelected: 'Seleccione al menos un idioma', selectLangs: 'Seleccionar idiomas ({n})', selectLangsTitle: 'Seleccionar idiomas', modalConfirm: 'Aplicar', modalCancel: 'Cancelar', rtlNote: '※ La escritura árabe y la escritura hebrea se muestran de izquierda→derecha para comparación (normalmente se leen de derecha→izquierda)', rtlToggle: 'Mostrar dirección original (←)' , en_au:"Inglés (australiano)", en_in:"Inglés (indio)", es_ar:"Español (argentino)", ar_iq:"Árabe (iraquí)", hak_cn:"Chino hakka"},
    pt_eu: { title: 'LangMap', subtitle: 'Mapa de ordem de palavras multilíngue', selectSentence: 'Selecionar frase', langToggle: 'Idiomas', langOrder: 'Ordem dos idiomas', dragHint: 'arraste para reordenar', defaultOrder: 'Ordem padrão', random: 'Aleatório', prev: '◀', next: '▶', allOn: 'Todos ON', allOff: 'Todos OFF', savePng: 'Guardar PNG', saveSvg: 'Guardar SVG', copyUrl: 'Copiar URL', copied: 'URL copiado', uiLang: 'Idioma UI:', noLangSelected: 'Selecione pelo menos um idioma', selectLangs: 'Selecionar idiomas ({n})', selectLangsTitle: 'Selecionar idiomas', modalConfirm: 'Aplicar', modalCancel: 'Cancelar', rtlNote: '※ A escrita árabe e a escrita hebraica são exibidas da esquerda→direita para comparação (normalmente lidas da direita→esquerda)', rtlToggle: 'Mostrar direção original (←)' , en_au:"Inglês (australiano)", en_in:"Inglês (indiano)", es_ar:"Espanhol (argentino)", ar_iq:"Árabe (iraquiano)", hak_cn:"Chinês hakka"},
    pt_br: { title: 'LangMap', subtitle: 'Mapa de ordem de palavras multilíngue', selectSentence: 'Selecionar frase', langToggle: 'Idiomas', langOrder: 'Ordem dos idiomas', dragHint: 'arraste para reordenar', defaultOrder: 'Ordem padrão', random: 'Aleatório', prev: '◀', next: '▶', allOn: 'Todos ON', allOff: 'Todos OFF', savePng: 'Salvar PNG', saveSvg: 'Salvar SVG', copyUrl: 'Copiar URL', copied: 'URL copiado', uiLang: 'Idioma UI:', noLangSelected: 'Selecione pelo menos um idioma', selectLangs: 'Selecionar idiomas ({n})', selectLangsTitle: 'Selecionar idiomas', modalConfirm: 'Aplicar', modalCancel: 'Cancelar', rtlNote: '※ A escrita árabe e a escrita hebraica são exibidas da esquerda→direita para comparação (normalmente lidas da direita→esquerda)', rtlToggle: 'Mostrar direção original (←)' , en_au:"Inglês (australiano)", en_in:"Inglês (indiano)", es_ar:"Espanhol (argentino)", ar_iq:"Árabe (iraquiano)", hak_cn:"Chinês hakka"},
    ru: { title: 'LangMap', subtitle: 'Многоязычная карта порядка слов', selectSentence: 'Выбрать предложение', langToggle: 'Языки', langOrder: 'Порядок языков', dragHint: 'перетащите для сортировки', defaultOrder: 'По умолчанию', random: 'Случайное', prev: '◀', next: '▶', allOn: 'Все ВКЛ', allOff: 'Все ВЫКЛ', savePng: 'Сохранить PNG', saveSvg: 'Сохранить SVG', copyUrl: 'Копировать URL', copied: 'URL скопирован', uiLang: 'Язык UI:', noLangSelected: 'Выберите хотя бы один язык', selectLangs: 'Выбор языков ({n})', selectLangsTitle: 'Выбор языков', modalConfirm: 'Применить', modalCancel: 'Отмена', rtlNote: '※ Арабское и еврейское письмо отображаются слева→направо для сравнения (обычно читаются справа→налево)', rtlToggle: 'Показать исходное направление (←)' , en_au:"Английский (австралийский)", en_in:"Английский (индийский)", es_ar:"Испанский (аргентинский)", ar_iq:"Арабский (иракский)", hak_cn:"Хакка"},
    uk: { title: 'LangMap', subtitle: 'Багатомовна карта порядку слів', selectSentence: 'Обрати речення', langToggle: 'Мови', langOrder: 'Порядок мов', dragHint: 'перетягніть для сортування', defaultOrder: 'За замовчуванням', random: 'Випадкове', prev: '◀', next: '▶', allOn: 'Усі УВІМК', allOff: 'Усі ВИМК', savePng: 'Зберегти PNG', saveSvg: 'Зберегти SVG', copyUrl: 'Копіювати URL', copied: 'URL скопійовано', uiLang: 'Мова UI:', noLangSelected: 'Будь ласка, оберіть хоча б одну мову', selectLangs: 'Вибір мов ({n})', selectLangsTitle: 'Вибір мов', modalConfirm: 'Застосувати', modalCancel: 'Скасувати', rtlNote: '※ Арабське та єврейське письмо відображаються зліва→направо для порівняння (зазвичай читаються справа→наліво)', rtlToggle: 'Показати оригінальний напрямок (←)' , en_au:"Англійська (австралійська)", en_in:"Англійська (індійська)", es_ar:"Іспанська (аргентинська)", ar_iq:"Арабська (іракська)", hak_cn:"Хакка"},
    ar: { title: 'LangMap', subtitle: 'خريطة ترتيب الكلمات متعددة اللغات', selectSentence: 'اختر جملة', langToggle: 'اللغات', langOrder: 'ترتيب اللغات', dragHint: 'اسحب لإعادة الترتيب', defaultOrder: 'الترتيب الافتراضي', random: 'عشوائي', prev: '◀', next: '▶', allOn: 'تشغيل الكل', allOff: 'إيقاف الكل', savePng: 'حفظ PNG', saveSvg: 'حفظ SVG', copyUrl: 'نسخ الرابط', copied: 'تم نسخ الرابط', uiLang: 'لغة الواجهة:', noLangSelected: 'يرجى اختيار لغة واحدة على الأقل', selectLangs: 'اختيار اللغات ({n})', selectLangsTitle: 'اختيار اللغات', modalConfirm: 'تطبيق', modalCancel: 'إلغاء', rtlNote: '※ الكتابة العربية والعبرية معروضة من اليسار إلى اليمين للمقارنة (تُقرأ عادةً من اليمين إلى اليسار)', rtlToggle: 'عرض بالاتجاه الأصلي (←)' , en_au:"الإنجليزية (أسترالية)", en_in:"الإنجليزية (هندية)", es_ar:"الإسبانية (أرجنتينية)", ar_iq:"العربية (عراقية)", hak_cn:"الهاكا الصينية"},
    he: { title: 'LangMap', subtitle: 'מפת סדר מילים רב-לשונית', selectSentence: 'בחר משפט', langToggle: 'שפות', langOrder: 'סדר שפות', dragHint: 'גרור לשינוי סדר', defaultOrder: 'סדר ברירת מחדל', random: 'אקראי', prev: '◀', next: '▶', allOn: 'הכל ON', allOff: 'הכל OFF', savePng: 'שמור PNG', saveSvg: 'שמור SVG', copyUrl: 'העתק URL', copied: 'URL הועתק', uiLang: 'שפת ממשק:', noLangSelected: 'אנא בחר לפחות שפה אחת', selectLangs: 'בחירת שפות ({n})', selectLangsTitle: 'בחירת שפות', modalConfirm: 'החל', modalCancel: 'ביטול', rtlNote: '※ הכתב הערבי והכתב העברי מוצגים משמאל לימין להשוואה (בפועל נקראים מימין לשמאל)', rtlToggle: 'הצג בכיוון המקורי (←)' , en_au:"אנגלית (אוסטרלית)", en_in:"אנגלית (הודית)", es_ar:"ספרדית (ארגנטינאית)", ar_iq:"ערבית (עיראקית)", hak_cn:"האקה סינית"},
    sw: { title: 'LangMap', subtitle: 'Ramani ya Mpangilio wa Maneno', selectSentence: 'Chagua sentensi', langToggle: 'Lugha', langOrder: 'Mpangilio wa lugha', dragHint: 'buruta ili kupanga upya', defaultOrder: 'Mpangilio chaguo-msingi', random: 'Nasibu', prev: '◀', next: '▶', allOn: 'Zote ON', allOff: 'Zote OFF', savePng: 'Hifadhi PNG', saveSvg: 'Hifadhi SVG', copyUrl: 'Nakili URL', copied: 'URL imenakiliwa', uiLang: 'Lugha ya UI:', noLangSelected: 'Tafadhali chagua lugha angalau moja', selectLangs: 'Chagua lugha ({n})', selectLangsTitle: 'Chagua lugha', modalConfirm: 'Chagua', modalCancel: 'Ghairi', rtlNote: '※ Maandishi ya Kiarabu na Kiebrania yanaonyeshwa kushoto→kulia kwa kulinganisha (kawaida yanasomwa kulia→kushoto)', rtlToggle: 'Onyesha mwelekeo asili (←)' , en_au:"Kiingereza (Australia)", en_in:"Kiingereza (India)", es_ar:"Kihispania (Argentina)", ar_iq:"Kiarabu (Iraq)", hak_cn:"Kihakka"},
};

function detectBrowserLang() {
    const langs = navigator.languages || [navigator.language || 'ja'];
    for (const lang of langs) {
        const code = lang.toLowerCase().replace('-', '_');
        if (UI_STRINGS[code]) return code;
        const base = code.split('_')[0];
        if (UI_STRINGS[base]) return base;
        // Map common browser codes to our UI codes
        for (const uiCode of Object.keys(UI_STRINGS)) {
            if (uiCode.startsWith(base)) return uiCode;
        }
    }
    return 'en';
}

let currentUILang = detectBrowserLang();

function t(key) {
    return (UI_STRINGS[currentUILang] || UI_STRINGS.ja)[key] || UI_STRINGS.ja[key] || key;
}

// Language names per UI language
const LANG_NAMES = {
    ja: { ja:'日本語(標準)', ja_osa:'日本語(大阪弁)', ja_aom:'日本語(青森弁)', ja_oki:'日本語(沖縄弁)', ja_hak:'日本語(博多弁)', ja_edo:'日本語(江戸時代)', ja_heian:'日本語(平安時代)', ko:'韓国語(標準)', ko_kp:'韓国語(北朝鮮)', ko_bus:'韓国語(釜山弁)', zh:'中国語(普通話)', yue:'広東語', nan:'台湾語', wuu:'上海語', zh_song:'中国語(宋明文言)', vi:'ベトナム語', vi_nom:'ベトナム語(チューノム)', th:'タイ語', id:'インドネシア語', sa:'サンスクリット語', hi:'ヒンディー語', en:'英語', en_aave:'英語(AAVE)', en_south:'英語(アメリカ南部)', en_app:'英語(アパラチア)', en_ie:'英語(アイルランド)', en_sco:'英語(スコットランド)', en_yk:'英語(ヨークシャー)', en_ck:'英語(コックニー)', de:'ドイツ語', fr:'フランス語', it:'イタリア語', es_eu:'スペイン語(欧州)', es_mx:'スペイン語(メキシコ)', pt_eu:'ポルトガル語(欧州)', pt_br:'ポルトガル語(ブラジル)', la:'ラテン語', ru:'ロシア語', uk:'ウクライナ語', ar:'アラビア語(フスハー)', ar_eg:'アラビア語(エジプト方言)', he:'ヘブライ語', sw:'スワヒリ語', tr:'トルコ語', fa:'ペルシャ語', tl:'タガログ語', ga:'アイルランド語', eu:'バスク語', mn:'モンゴル語', my:'ミャンマー語', am:'アムハラ語', egy:'古代エジプト語', ta:'タミル語', hu:'ハンガリー語', nl:'オランダ語', pl:'ポーランド語', ms:'マレー語', mg:'マダガスカル語', cy:'ウェールズ語', fi:'フィンランド語', ain:'アイヌ語', bn:'ベンガル語', ur:'ウルドゥー語', te:'テルグ語', jv:'ジャワ語', ko_jeju:'韓国語(済州)', ko_mid:'韓国語(中世)', ko_em:'韓国語(近世)', ka:'グルジア語', el:'ギリシャ語', el_grc:'ギリシャ語(古代)', nv:'ナバホ語', qu:'ケチュア語', mi:'マオリ語', haw:'ハワイ語', km:'クメール語', lo:'ラオ語', yo:'ヨルバ語', zu:'ズールー語', bo:'チベット語', hy:'アルメニア語', ilo:'イロカノ語', bho:'ボージュプリー語', th_s:'タイ語(南部)', th_n:'タイ語(北部)', vec:'ヴェネト語', nds:'低地ドイツ語', de_by:'ドイツ語(バイエルン)', de_at:'ドイツ語(オーストリア)', fr_be:'フランス語(ベルギー)', fr_af:'フランス語(アフリカ)', es_an:'スペイン語(アンダルシア)', es_pe:'スペイン語(ペルー)', es_cu:'スペイン語(キューバ)', ar_sd:'アラビア語(スーダン方言)', ar_tn:'アラビア語(チュニジア方言)' , ja_kyo:'日本語(京都弁)', ja_hir:'日本語(広島弁)', ja_mvi:'宮古語', ja_rys:'八重山語', ar_lev:'アラビア語(レバント方言)', ar_ma:'アラビア語(モロッコ方言)', ar_gulf:'アラビア語(湾岸方言)', zh_sc:'中国語(四川話)', zh_db:'中国語(東北話)', nap:'ナポリ語', scn:'シチリア語', de_gsw:'ドイツ語(スイス)', fr_qc:'フランス語(ケベック)', sco:'スコットランド語', en_sg:'英語(シンガポール)', hwc:'ハワイ・クレオール', pcm:'ナイジェリア・ピジン', tpi:'トク・ピシン', en_ang:'古英語', sv:'スウェーデン語', no:'ノルウェー語', si:'シンハラ語', ro:'ルーマニア語', cs:'チェコ語', ca:'カタルーニャ語', da:'デンマーク語', is:'アイスランド語', lt:'リトアニア語', sq:'アルバニア語', mt:'マルタ語', so:'ソマリ語', ml:'マラヤーラム語', pa:'パンジャーブ語', ku:'クルド語', ug:'ウイグル語', kk:'カザフ語', ha:'ハウサ語', ig:'イグボ語', eo:'エスペラント', tok:'トキポナ', ht:'ハイチクレオール', ps:'パシュトー語', uz:'ウズベク語', mr:'マラーティー語', gu:'グジャラート語', kn:'カンナダ語', ne:'ネパール語', om:'オロモ語', ti:'ティグリニャ語', wo:'ウォロフ語', ln:'リンガラ語', sn:'ショナ語', sr:'セルビア語', bg:'ブルガリア語', sk:'スロバキア語', lv:'ラトビア語', et:'エストニア語', be:'ベラルーシ語', yi:'イディッシュ語', non:'古ノルド語', arc:'アラム語', cop:'コプト語', rom:'ロマニ語', br:'ブルトン語', xh:'コサ語', lad:'ラディーノ語', tlh:'クリンゴン語', jbo:'ロジバン', fj:'フィジー語', sm:'サモア語', en_au:'英語(オーストラリア)', en_in:'英語(インド)', es_ar:'スペイン語(アルゼンチン)', ar_iq:'アラビア語(イラク方言)', hak_cn:'客家語', sux:'シュメール語', akk:'アッカド語', hit:'ヒッタイト語', nci:'古典ナワトル語', myn:'古典マヤ語', ine:'印欧祖語' , zh_han:'中国語(漢代漢文)', zh_tang:'中国語(唐代漢文)', ceb:'セブアノ語', su:'スンダ語', th_isan:'タイ語(イサーン方言)', es_co:'スペイン語(コロンビア)', es_cl:'スペイン語(チリ)', gl:'ガリシア語', oc:'オック語', fo:'フェロー語', jam:'ジャマイカ・パトワ', pap:'パピアメント語', ko_yb:'延辺朝鮮語', mn_cn:'内モンゴルモンゴル語', za:'チワン語', ii:'イ語', hmn:'ミャオ語', mnc:'満州語', af:'アフリカーンス語', az:'アゼルバイジャン語', tg:'タジク語', gn:'グアラニー語', iu:'イヌクティトゥット語', ky:'キルギス語', ckb:'クルド語(ソラニー)', nn:'ノルウェー語(ニーノシュク)', got:'ゴート語', cu:'古教会スラヴ語', pi:'パーリ語', rm:'ロマンシュ語', fy:'フリジア語', sc:'サルデーニャ語', chr:'チェロキー語', or:'オディア語', sd:'シンド語', as:'アッサム語', rw:'キニヤルワンダ語', ny:'チェワ語', tk:'トルクメン語', cdo:'閩東語', gd:'スコットランド・ゲール語', sl:'スロベニア語', enm:'中英語', fr_ch:'フランス語(スイス)', to:'トンガ語', se:'北サーミ語'},
    en: { ja:'Japanese', ja_osa:'Japanese (Osaka)', ja_aom:'Japanese (Aomori)', ja_oki:'Japanese (Okinawa)', ja_hak:'Japanese (Hakata)', ja_edo:'Japanese (Edo period)', ja_heian:'Middle Japanese (Heian)', ko:'Korean', ko_kp:'Korean (North Korea)', ko_bus:'Korean (Busan)', zh:'Chinese (Mandarin)', yue:'Cantonese', nan:'Taiwanese', wuu:'Shanghainese', zh_song:'Chinese (Classical)', vi:'Vietnamese', vi_nom:'Vietnamese (Chữ Nôm)', th:'Thai', id:'Indonesian', sa:'Sanskrit', hi:'Hindi', en:'English', en_aave:'English (AAVE)', en_south:'English (Southern US)', en_app:'English (Appalachian)', en_ie:'English (Irish)', en_sco:'English (Scottish)', en_yk:'English (Yorkshire)', en_ck:'English (Cockney)', de:'German', fr:'French', it:'Italian', es_eu:'Spanish (Europe)', es_mx:'Spanish (Mexico)', pt_eu:'Portuguese (Europe)', pt_br:'Portuguese (Brazil)', la:'Latin', ru:'Russian', uk:'Ukrainian', ar:'Arabic (MSA)', ar_eg:'Arabic (Egyptian)', he:'Hebrew', sw:'Swahili', tr:'Turkish', fa:'Persian', tl:'Tagalog', ga:'Irish', eu:'Basque', mn:'Mongolian', my:'Burmese', am:'Amharic', egy:'Ancient Egyptian', ta:'Tamil', hu:'Hungarian', nl:'Dutch', pl:'Polish', ms:'Malay', mg:'Malagasy', cy:'Welsh', fi:'Finnish', ain:'Ainu', bn:'Bengali', ur:'Urdu', te:'Telugu', jv:'Javanese', ko_jeju:'Korean (Jeju)', ko_mid:'Middle Korean', ko_em:'Early Modern Korean', ka:'Georgian', el:'Greek', el_grc:'Greek (Ancient)', nv:'Navajo', qu:'Quechua', mi:'Māori', haw:'Hawaiian', km:'Khmer', lo:'Lao', yo:'Yoruba', zu:'Zulu', bo:'Tibetan', hy:'Armenian', ilo:'Ilocano', bho:'Bhojpuri', th_s:'Thai (Southern)', th_n:'Thai (Northern)', vec:'Venetian', nds:'Low German', de_by:'German (Bavarian)', de_at:'German (Austrian)', fr_be:'French (Belgian)', fr_af:'French (African)', es_an:'Spanish (Andalusian)', es_pe:'Spanish (Peruvian)', es_cu:'Spanish (Cuban)', ar_sd:'Arabic (Sudanese)', ar_tn:'Arabic (Tunisian)' , ja_kyo:'Japanese (Kyoto)', ja_hir:'Japanese (Hiroshima)', ja_mvi:'Miyako', ja_rys:'Yaeyama', ar_lev:'Arabic (Levantine)', ar_ma:'Arabic (Moroccan)', ar_gulf:'Arabic (Gulf)', zh_sc:'Chinese (Sichuan)', zh_db:'Chinese (Northeastern)', nap:'Neapolitan', scn:'Sicilian', de_gsw:'German (Swiss)', fr_qc:'French (Québec)', sco:'Scots', en_sg:'English (Singapore)', hwc:'Hawaiian Creole', pcm:'Nigerian Pidgin', tpi:'Tok Pisin', en_ang:'Old English', sv:'Swedish', no:'Norwegian', si:'Sinhala', ro:'Romanian', cs:'Czech', ca:'Catalan', da:'Danish', is:'Icelandic', lt:'Lithuanian', sq:'Albanian', mt:'Maltese', so:'Somali', ml:'Malayalam', pa:'Punjabi', ku:'Kurdish', ug:'Uyghur', kk:'Kazakh', ha:'Hausa', ig:'Igbo', eo:'Esperanto', tok:'Toki Pona', ht:'Haitian Creole', ps:'Pashto', uz:'Uzbek', mr:'Marathi', gu:'Gujarati', kn:'Kannada', ne:'Nepali', om:'Oromo', ti:'Tigrinya', wo:'Wolof', ln:'Lingala', sn:'Shona', sr:'Serbian', bg:'Bulgarian', sk:'Slovak', lv:'Latvian', et:'Estonian', be:'Belarusian', yi:'Yiddish', non:'Old Norse', arc:'Aramaic', cop:'Coptic', rom:'Romani', br:'Breton', xh:'Xhosa', lad:'Ladino', tlh:'Klingon', jbo:'Lojban', fj:'Fijian', sm:'Samoan', en_au:'English (Australian)', en_in:'English (Indian)', es_ar:'Spanish (Argentina)', ar_iq:'Arabic (Iraqi)', hak_cn:'Hakka Chinese', sux:'Sumerian', akk:'Akkadian', hit:'Hittite', nci:'Classical Nahuatl', myn:'Classical Maya', ine:'Proto-Indo-European' , zh_han:'Chinese (Han dynasty Classical)', zh_tang:'Chinese (Tang dynasty Classical)', ceb:'Cebuano', su:'Sundanese', th_isan:'Thai (Isan)', es_co:'Spanish (Colombia)', es_cl:'Spanish (Chile)', gl:'Galician', oc:'Occitan', fo:'Faroese', jam:'Jamaican Patois', pap:'Papiamento', ko_yb:'Yanbian Korean', mn_cn:'Inner Mongolian', za:'Zhuang', ii:'Yi (Nuosu)', hmn:'Hmong', mnc:'Manchu', af:'Afrikaans', az:'Azerbaijani', tg:'Tajik', gn:'Guaraní', iu:'Inuktitut', ky:'Kyrgyz', ckb:'Kurdish (Sorani)', nn:'Norwegian Nynorsk', got:'Gothic', cu:'Old Church Slavonic', pi:'Pali', rm:'Romansh', fy:'Frisian', sc:'Sardinian', chr:'Cherokee', or:'Odia', sd:'Sindhi', as:'Assamese', rw:'Kinyarwanda', ny:'Chewa', tk:'Turkmen', cdo:'Eastern Min', gd:'Scottish Gaelic', sl:'Slovenian', enm:'Middle English', fr_ch:'French (Swiss)', to:'Tongan', se:'Northern Sami'},
    ko: { ja:'일본어(표준)', ja_osa:'일본어(오사카)', ja_aom:'일본어(아오모리)', ja_oki:'일본어(오키나와)', ja_hak:'일본어(하카타)', ja_edo:'일본어(에도시대)', ko:'한국어(표준)', ko_kp:'한국어(북한)', ko_bus:'한국어(부산)', zh:'중국어(보통화)', yue:'광둥어', nan:'대만어', wuu:'상하이어', zh_song:'중국어(송명문언)', vi:'베트남어', vi_nom:'베트남어(쯔놈)', th:'태국어', id:'인도네시아어', sa:'산스크리트어', hi:'힌디어', en:'영어', en_aave:'영어(AAVE)', en_south:'영어(미국 남부)', en_app:'영어(애팔래치아)', en_ie:'영어(아일랜드)', en_sco:'영어(스코틀랜드)', en_yk:'영어(요크셔)', en_ck:'영어(코크니)', de:'독일어', fr:'프랑스어', it:'이탈리아어', es_eu:'스페인어(유럽)', es_mx:'스페인어(멕시코)', pt_eu:'포르투갈어(유럽)', pt_br:'포르투갈어(브라질)', la:'라틴어', ru:'러시아어', uk:'우크라이나어', ar:'아랍어(푸스하)', ar_eg:'아랍어(이집트 방언)', he:'히브리어', sw:'스와힐리어', tr:'터키어', fa:'페르시아어', tl:'타갈로그어', ga:'아일랜드어', eu:'바스크어', mn:'몽골어', my:'미얀마어', am:'암하라어', egy:'고대 이집트어', ta:'타밀어', hu:'헝가리어', nl:'네덜란드어', pl:'폴란드어', ms:'말레이어', mg:'말라가시어', cy:'웨일스어', fi:'핀란드어', ain:'아이누어', bn:'벵골어', ur:'우르두어', te:'텔루구어', jv:'자와어', ko_jeju:'한국어(제주)', ko_mid:'한국어(중세)', ko_em:'한국어(근세)', ka:'조지아어', el:'그리스어', el_grc:'그리스어(고대)', nv:'나바호어', qu:'케추아어', mi:'마오리어', haw:'하와이어', km:'크메르어', lo:'라오어', yo:'요루바어', zu:'줄루어', bo:'티베트어', hy:'아르메니아어' , ja_kyo:'일본어(교토)', ja_hir:'일본어(히로시마)', ja_mvi:'미야코어', ja_rys:'야에야마어', ar_lev:'아랍어(레반트 방언)', ar_ma:'아랍어(모로코 방언)', ar_gulf:'아랍어(걸프 방언)', zh_sc:'중국어(쓰촨)', zh_db:'중국어(동북)', nap:'나폴리어', scn:'시칠리아어', de_gsw:'독일어(스위스)', fr_qc:'프랑스어(퀘벡)', sco:'스코트어', en_sg:'영어(싱가포르)', hwc:'하와이 크레올', pcm:'나이지리아 피진', tpi:'토크 피신', en_ang:'고대 영어', sv:'스웨덴어', no:'노르웨이어', si:'싱할라어', ro:'루마니아어', cs:'체코어', ca:'카탈루냐어', da:'덴마크어', is:'아이슬란드어', lt:'리투아니아어', sq:'알바니아어', mt:'몰타어', so:'소말리어', ml:'말라얄람어', pa:'펀자브어', ku:'쿠르드어', ug:'위구르어', kk:'카자흐어', ha:'하우사어', ig:'이그보어', eo:'에스페란토', tok:'토키포나', ht:'아이티 크레올', ps:'파슈토어', uz:'우즈베크어', mr:'마라티어', gu:'구자라트어', kn:'칸나다어', ne:'네팔어', om:'오로모어', ti:'티그리냐어', wo:'월로프어', ln:'링갈라어', sn:'쇼나어', sr:'세르비아어', bg:'불가리아어', sk:'슬로바키아어', lv:'라트비아어', et:'에스토니아어', be:'벨라루스어', yi:'이디시어', non:'고대 노르드어', arc:'아람어', cop:'콥트어', rom:'로마니어', br:'브르타뉴어', xh:'코사어', lad:'라디노어', tlh:'클링온어', jbo:'로지반', fj:'피지어', sm:'사모아어' , zh_han:'중국어(한대 한문)', zh_tang:'중국어(당대 한문)', ceb:'세부아노어', su:'순다어', th_isan:'태국어(이산 방언)', es_co:'스페인어(콜롬비아)', es_cl:'스페인어(칠레)', gl:'갈리시아어', oc:'오크어', fo:'페로어', jam:'자메이카 파트와', pap:'파피아멘토어', ko_yb:'연변조선어', mn_cn:'내몽골몽골어', za:'좡어', ii:'이어', hmn:'먀오어', mnc:'만주어', af:'아프리칸스어', az:'아제르바이잔어', tg:'타지크어', gn:'과라니어', iu:'이누크티투트어', ky:'키르기스어', ckb:'쿠르드어(소라니)', nn:'노르웨이어(뉘노르스크)', got:'고트어', cu:'고대 교회 슬라브어', pi:'팔리어', rm:'로만슈어', fy:'프리지아어', sc:'사르데냐어', chr:'체로키어', or:'오디아어', sd:'신디어', as:'아삼어', rw:'킨야르완다어', ny:'체와어', tk:'투르크멘어', cdo:'민동어'},
    zh: { ja:'日语(标准)', ja_osa:'日语(大阪)', ja_aom:'日语(青森)', ja_oki:'日语(冲绳)', ja_hak:'日语(博多)', ja_edo:'日语(江户时代)', ja_heian:'中古日语(平安时代)', ko:'韩语(标准)', ko_kp:'韩语(朝鲜)', ko_bus:'韩语(釜山)', zh:'中文(普通话)', yue:'粤语', nan:'台湾话', wuu:'上海话', zh_song:'中国語(宋明文言)', vi:'越南语', vi_nom:'越南语(字喃)', th:'泰语', id:'印尼语', sa:'梵语', hi:'印地语', en:'英语', en_aave:'英语(AAVE)', en_south:'英语(美国南方)', en_app:'英语(阿巴拉契亚)', en_ie:'英语(爱尔兰)', en_sco:'英语(苏格兰)', en_yk:'英语(约克郡)', en_ck:'英语(伦敦东区)', de:'德语', fr:'法语', it:'意大利语', es_eu:'西班牙语(欧洲)', es_mx:'西班牙语(墨西哥)', pt_eu:'葡萄牙语(欧洲)', pt_br:'葡萄牙语(巴西)', la:'拉丁语', ru:'俄语', uk:'乌克兰语', ar:'阿拉伯语(标准)', ar_eg:'阿拉伯语(埃及方言)', he:'希伯来语', sw:'斯瓦希里语', tr:'土耳其语', fa:'波斯语', tl:'他加禄语', ga:'爱尔兰语', eu:'巴斯克语', mn:'蒙古语', my:'缅甸语', am:'阿姆哈拉语', egy:'古埃及语', ta:'泰米尔语', hu:'匈牙利语', nl:'荷兰语', pl:'波兰语', ms:'马来语', mg:'马达加斯加语', cy:'威尔士语', fi:'芬兰语', ain:'阿伊努语', bn:'孟加拉语', ur:'乌尔都语', te:'泰卢固语', jv:'爪哇语', ko_jeju:'韩语(济州)', ko_mid:'中世韩语', ko_em:'近世韩语', ka:'格鲁吉亚语', el:'希腊语', el_grc:'希腊语(古代)', nv:'纳瓦霍语', qu:'克丘亚语', mi:'毛利语', haw:'夏威夷语', km:'高棉语', lo:'老挝语', yo:'约鲁巴语', zu:'祖鲁语', bo:'藏语', hy:'亚美尼亚语', ilo:'伊洛卡诺语', bho:'博杰普尔语', th_s:'泰语(南部)', th_n:'泰语(北部)', vec:'威尼斯语', nds:'低地德语', de_by:'德语(巴伐利亚)', de_at:'德语(奥地利)', fr_be:'法语(比利时)', fr_af:'法语(非洲)', es_an:'西班牙语(安达卢西亚)', es_pe:'西班牙语(秘鲁)', es_cu:'西班牙语(古巴)', ar_sd:'阿拉伯语(苏丹方言)', ar_tn:'阿拉伯语(突尼斯方言)' , ja_kyo:'日语(京都)', ja_hir:'日语(广岛)', ja_mvi:'宫古语', ja_rys:'八重山语', ar_lev:'阿拉伯语(黎凡特方言)', ar_ma:'阿拉伯语(摩洛哥方言)', ar_gulf:'阿拉伯语(海湾方言)', zh_sc:'中文(四川话)', zh_db:'中文(东北话)', nap:'那不勒斯语', scn:'西西里语', de_gsw:'德语(瑞士)', fr_qc:'法语(魁北克)', sco:'苏格兰语', en_sg:'英语(新加坡)', hwc:'夏威夷克里奥尔', pcm:'尼日利亚皮钦语', tpi:'托克皮辛', en_ang:'古英语', sv:'瑞典语', no:'挪威语', si:'僧伽罗语', ro:'罗马尼亚语', cs:'捷克语', ca:'加泰罗尼亚语', da:'丹麦语', is:'冰岛语', lt:'立陶宛语', sq:'阿尔巴尼亚语', mt:'马耳他语', so:'索马里语', ml:'马拉雅拉姆语', pa:'旁遮普语', ku:'库尔德语', ug:'维吾尔语', kk:'哈萨克语', ha:'豪萨语', ig:'伊博语', eo:'世界语', tok:'道本语', ht:'海地克里奥尔语', ps:'普什图语', uz:'乌兹别克语', mr:'马拉地语', gu:'古吉拉特语', kn:'卡纳达语', ne:'尼泊尔语', om:'奥罗莫语', ti:'提格利尼亚语', wo:'沃洛夫语', ln:'林加拉语', sn:'绍纳语', sr:'塞尔维亚语', bg:'保加利亚语', sk:'斯洛伐克语', lv:'拉脱维亚语', et:'爱沙尼亚语', be:'白俄罗斯语', yi:'意第绪语', non:'古诺尔斯语', arc:'阿拉米语', cop:'科普特语', rom:'罗姆语', br:'布列塔尼语', xh:'科萨语', lad:'拉迪诺语', tlh:'克林贡语', jbo:'逻辑语', fj:'斐济语', sm:'萨摩亚语', en_au:'英语(澳大利亚)', en_in:'英语(印度)', es_ar:'西班牙语(阿根廷)', ar_iq:'阿拉伯语(伊拉克方言)', hak_cn:'客家话', sux:'苏美尔语', akk:'阿卡德语', hit:'赫梯语', nci:'古典纳瓦特尔语', myn:'古典玛雅语', ine:'原始印欧语' , zh_han:'中文(汉代汉文)', zh_tang:'中文(唐代汉文)', ceb:'宿雾语', su:'巽他语', th_isan:'泰语(伊桑方言)', es_co:'西班牙语(哥伦比亚)', es_cl:'西班牙语(智利)', gl:'加利西亚语', oc:'奥克语', fo:'法罗语', jam:'牙买加帕特瓦', pap:'帕皮阿门托语', ko_yb:'延边朝鲜语', mn_cn:'内蒙古蒙古语', za:'壮语', ii:'彝语', hmn:'苗语', mnc:'满语', af:'南非荷兰语', az:'阿塞拜疆语', tg:'塔吉克语', gn:'瓜拉尼语', iu:'因纽特语', ky:'吉尔吉斯语', ckb:'库尔德语(索拉尼)', nn:'挪威语(尼诺斯克)', got:'哥特语', cu:'古教会斯拉夫语', pi:'巴利语', rm:'罗曼什语', fy:'弗里斯兰语', sc:'撒丁语', chr:'切罗基语', or:'奥里亚语', sd:'信德语', as:'阿萨姆语', rw:'卢旺达语', ny:'齐切瓦语', tk:'土库曼语', cdo:'闽东语'},
    fr: { ja:'Japonais', ja_osa:'Japonais (Osaka)', ja_aom:'Japonais (Aomori)', ja_oki:'Japonais (Okinawa)', ja_hak:'Japonais (Hakata)', ja_edo:'Japonais (Edo)', ko:'Coréen', ko_kp:'Coréen (Corée du Nord)', ko_bus:'Coréen (Busan)', zh:'Chinois (mandarin)', yue:'Cantonais', nan:'Taïwanais', wuu:'Shanghaïen', zh_song:'Chinois (classique)', vi:'Vietnamien', vi_nom:'Vietnamese (Chữ Nôm)', th:'Thaï', id:'Indonésien', sa:'Sanskrit', hi:'Hindi', en:'Anglais', en_aave:'English (AAVE)', en_south:'Anglais (sud des É-U)', en_app:'Anglais (Appalachien)', en_ie:'Anglais (irlandais)', en_sco:'Anglais (écossais)', en_yk:'Anglais (Yorkshire)', en_ck:'Anglais (cockney)', de:'Allemand', fr:'Français', it:'Italien', es_eu:'Espagnol (Europe)', es_mx:'Espagnol (Mexique)', pt_eu:'Portugais (Europe)', pt_br:'Portugais (Brésil)', la:'Latin', ru:'Russe', uk:'Ukrainien', ar:'Arabe (standard)', ar_eg:'Arabe (égyptien)', he:'Hébreu', sw:'Swahili', tr:'Turc', fa:'Persan', tl:'Tagalog', ga:'Irlandais', eu:'Basque', mn:'Mongol', my:'Birman', am:'Amharique', egy:'Égyptien ancien', ta:'Tamoul', hu:'Hongrois', nl:'Néerlandais', pl:'Polonais', ms:'Malais', mg:'Malgache', cy:'Gallois', fi:'Finnois', ain:'Aïnou', bn:'Bengali', ur:'Ourdou', te:'Télougou', jv:'Javanais', ko_jeju:'Korean (Jeju)', ko_mid:'Middle Korean', ko_em:'Early Modern Korean', ka:'Géorgien', el:'Grec', el_grc:'Grec (ancien)', nv:'Navajo', qu:'Quechua', mi:'Māori', haw:'Hawaïen', km:'Khmer', lo:'Lao', yo:'Yoruba', zu:'Zoulou', bo:'Tibétain', hy:'Arménien' , ja_kyo:'Japonais (Kyoto)', ja_hir:'Japonais (Hiroshima)', ja_mvi:'Miyako', ja_rys:'Yaeyama', ar_lev:'Arabe (levantin)', ar_ma:'Arabe (marocain)', ar_gulf:'Arabe (golfe)', zh_sc:'Chinois (Sichuan)', zh_db:'Chinois (nord-est)', nap:'Napolitain', scn:'Sicilien', de_gsw:'Allemand (suisse)', fr_qc:'Français (Québec)', sco:'Écossais', en_sg:'English (Singapore)', hwc:'Créole hawaïen', pcm:'Pidgin nigérian', tpi:'Tok pisin', en_ang:'Vieil anglais', sv:'Suédois', no:'Norvégien', si:'Cinghalais', ro:'Roumain', cs:'Tchèque', ca:'Catalan', da:'Danois', is:'Islandais', lt:'Lituanien', sq:'Albanais', mt:'Maltais', so:'Somali', ml:'Malayalam', pa:'Pendjabi', ku:'Kurde', ug:'Ouïghour', kk:'Kazakh', ha:'Haoussa', ig:'Igbo', eo:'Espéranto', tok:'Toki Pona', ht:'Créole haïtien', ps:'Pachto', uz:'Ouzbek', mr:'Marathi', gu:'Gujarati', kn:'Kannada', ne:'Népalais', om:'Oromo', ti:'Tigrinya', wo:'Wolof', ln:'Lingala', sn:'Shona', sr:'Serbe', bg:'Bulgare', sk:'Slovaque', lv:'Letton', et:'Estonien', be:'Biélorusse', yi:'Yiddish', non:'Vieux norrois', arc:'Araméen', cop:'Copte', rom:'Romani', br:'Breton', xh:'Xhosa', lad:'Ladino', tlh:'Klingon', jbo:'Lojban', fj:'Fidjien', sm:'Samoan', zh_han:'Chinois (Classique des Han)', zh_tang:'Chinois (Classique des Tang)', ceb:'Cebuano', su:'Soundanais', th_isan:'Thaï (Isan)', es_co:'Espagnol (Colombie)', es_cl:'Espagnol (Chili)', gl:'Galicien', oc:'Occitan', fo:'Féroïen', jam:'Patois jamaïcain', pap:'Papiamento'},
    de: { ja:'Japanisch', ja_osa:'Japanisch (Osaka)', ja_aom:'Japanisch (Aomori)', ja_oki:'Japanisch (Okinawa)', ja_hak:'Japanisch (Hakata)', ja_edo:'Japanisch (Edo)', ko:'Koreanisch', ko_kp:'Koreanisch (Nordkorea)', ko_bus:'Koreanisch (Busan)', zh:'Chinesisch (Mandarin)', yue:'Kantonesisch', nan:'Taiwanisch', wuu:'Shanghainesisch', zh_song:'Chinesisch (klassisch)', vi:'Vietnamesisch', vi_nom:'Vietnamese (Chữ Nôm)', th:'Thai', id:'Indonesisch', sa:'Sanskrit', hi:'Hindi', en:'Englisch', en_aave:'English (AAVE)', en_south:'Englisch (US-Süd)', en_app:'Englisch (Appalachen)', en_ie:'Englisch (irisch)', en_sco:'Englisch (schottisch)', en_yk:'Englisch (Yorkshire)', en_ck:'Englisch (Cockney)', de:'Deutsch', fr:'Französisch', it:'Italienisch', es_eu:'Spanisch (Europa)', es_mx:'Spanisch (Mexiko)', pt_eu:'Portugiesisch (Europa)', pt_br:'Portugiesisch (Brasilien)', la:'Latein', ru:'Russisch', uk:'Ukrainisch', ar:'Arabisch (Standard)', ar_eg:'Arabisch (ägyptisch)', he:'Hebräisch', sw:'Swahili', tr:'Türkisch', fa:'Persisch', tl:'Tagalog', ga:'Irisch', eu:'Baskisch', mn:'Mongolisch', my:'Birmanisch', am:'Amharisch', egy:'Altägyptisch', ta:'Tamilisch', hu:'Ungarisch', nl:'Niederländisch', pl:'Polnisch', ms:'Malaiisch', mg:'Madagassisch', cy:'Walisisch', fi:'Finnisch', ain:'Ainu', bn:'Bengalisch', ur:'Urdu', te:'Telugu', jv:'Javanisch', ko_jeju:'Korean (Jeju)', ko_mid:'Middle Korean', ko_em:'Early Modern Korean', ka:'Georgisch', el:'Griechisch', el_grc:'Griechisch (antik)', nv:'Navajo', qu:'Quechua', mi:'Māori', haw:'Hawaiisch', km:'Khmer', lo:'Lao', yo:'Yoruba', zu:'Zulu', bo:'Tibetisch', hy:'Armenisch' , ja_kyo:'Japanisch (Kyoto)', ja_hir:'Japanisch (Hiroshima)', ja_mvi:'Miyako', ja_rys:'Yaeyama', ar_lev:'Arabisch (Levantinisch)', ar_ma:'Arabisch (Marokkanisch)', ar_gulf:'Arabisch (Golf)', zh_sc:'Chinesisch (Sichuan)', zh_db:'Chinesisch (Nordost)', nap:'Neapolitanisch', scn:'Sizilianisch', de_gsw:'Deutsch (Schweiz)', fr_qc:'Französisch (Québec)', sco:'Scots', en_sg:'English (Singapore)', hwc:'Hawaiianisches Kreol', pcm:'Nigerianisches Pidgin', tpi:'Tok Pisin', en_ang:'Altenglisch', sv:'Schwedisch', no:'Norwegisch', si:'Singhalesisch', ro:'Rumänisch', cs:'Tschechisch', ca:'Katalanisch', da:'Dänisch', is:'Isländisch', lt:'Litauisch', sq:'Albanisch', mt:'Maltesisch', so:'Somali', ml:'Malayalam', pa:'Pandschabi', ku:'Kurdisch', ug:'Uigurisch', kk:'Kasachisch', ha:'Hausa', ig:'Igbo', eo:'Esperanto', tok:'Toki Pona', ht:'Haitianisches Kreol', ps:'Paschtu', uz:'Usbekisch', mr:'Marathi', gu:'Gujarati', kn:'Kannada', ne:'Nepalesisch', om:'Oromo', ti:'Tigrinya', wo:'Wolof', ln:'Lingala', sn:'Shona', sr:'Serbisch', bg:'Bulgarisch', sk:'Slowakisch', lv:'Lettisch', et:'Estnisch', be:'Belarussisch', yi:'Jiddisch', non:'Altnordisch', arc:'Aramäisch', cop:'Koptisch', rom:'Romani', br:'Bretonisch', xh:'Xhosa', lad:'Ladino', tlh:'Klingonisch', jbo:'Lojban', fj:'Fidschianisch', sm:'Samoanisch', zh_han:'Chinesisch (Han-Klassisch)', zh_tang:'Chinesisch (Tang-Klassisch)', ceb:'Cebuano', su:'Sundanesisch', th_isan:'Thai (Isan)', es_co:'Spanisch (Kolumbien)', es_cl:'Spanisch (Chile)', gl:'Galizisch', oc:'Okzitanisch', fo:'Färöisch', jam:'Jamaika-Patois', pap:'Papiamento'},
    es_eu: { ja:'Japonés', ja_osa:'Japonés (Osaka)', ja_aom:'Japonés (Aomori)', ja_oki:'Japonés (Okinawa)', ja_hak:'Japonés (Hakata)', ja_edo:'Japonés (Edo)', ko:'Coreano', ko_kp:'Coreano (Corea del Norte)', ko_bus:'Coreano (Busan)', zh:'Chino (mandarín)', yue:'Cantonés', nan:'Taiwanés', wuu:'Shanghainés', zh_song:'Chino (clásico)', vi:'Vietnamita', vi_nom:'Vietnamese (Chữ Nôm)', th:'Tailandés', id:'Indonesio', sa:'Sánscrito', hi:'Hindi', en:'Inglés', en_aave:'English (AAVE)', en_south:'Inglés (sur de EE.UU.)', en_app:'Inglés (Apalaches)', en_ie:'Inglés (irlandés)', en_sco:'Inglés (escocés)', en_yk:'Inglés (Yorkshire)', en_ck:'Inglés (cockney)', de:'Alemán', fr:'Francés', it:'Italiano', es_eu:'Español (Europa)', es_mx:'Español (México)', pt_eu:'Portugués (Europa)', pt_br:'Portugués (Brasil)', la:'Latín', ru:'Ruso', uk:'Ucraniano', ar:'Árabe (estándar)', ar_eg:'Árabe (egipcio)', he:'Hebreo', sw:'Suajili', tr:'Turco', fa:'Persa', tl:'Tagalo', ga:'Irlandés', eu:'Vasco', mn:'Mongol', my:'Birmano', am:'Amárico', egy:'Egipcio antiguo', ta:'Tamil', hu:'Húngaro', nl:'Neerlandés', pl:'Polaco', ms:'Malayo', mg:'Malgache', cy:'Galés', fi:'Finlandés', ain:'Ainu', bn:'Bengalí', ur:'Urdu', te:'Telugu', jv:'Javanés', ko_jeju:'Korean (Jeju)', ko_mid:'Middle Korean', ko_em:'Early Modern Korean', ka:'Georgiano', el:'Griego', el_grc:'Griego (antiguo)', nv:'Navajo', qu:'Quechua', mi:'Maorí', haw:'Hawaiano', km:'Jemer', lo:'Lao', yo:'Yoruba', zu:'Zulú', bo:'Tibetano', hy:'Armenio' , ja_kyo:'Japonés (Kioto)', ja_hir:'Japonés (Hiroshima)', ja_mvi:'Miyako', ja_rys:'Yaeyama', ar_lev:'Árabe (levantino)', ar_ma:'Árabe (marroquí)', ar_gulf:'Árabe (golfo)', zh_sc:'Chino (Sichuan)', zh_db:'Chino (noreste)', nap:'Napolitano', scn:'Siciliano', de_gsw:'Alemán (suizo)', fr_qc:'Francés (Quebec)', sco:'Escocés', en_sg:'English (Singapore)', hwc:'Criollo hawaiano', pcm:'Pidgin nigeriano', tpi:'Tok pisin', en_ang:'Inglés antiguo', sv:'Sueco', no:'Noruego', si:'Cingalés', ro:'Rumano', cs:'Checo', ca:'Catalán', da:'Danés', is:'Islandés', lt:'Lituano', sq:'Albanés', mt:'Maltés', so:'Somalí', ml:'Malayalam', pa:'Punyabí', ku:'Kurdo', ug:'Uigur', kk:'Kazajo', ha:'Hausa', ig:'Igbo', eo:'Esperanto', tok:'Toki Pona', ht:'Criollo haitiano', ps:'Pastún', uz:'Uzbeko', mr:'Maratí', gu:'Guyaratí', kn:'Canarés', ne:'Nepalí', om:'Oromo', ti:'Tigriña', wo:'Wólof', ln:'Lingala', sn:'Shona', sr:'Serbio', bg:'Búlgaro', sk:'Eslovaco', lv:'Letón', et:'Estonio', be:'Bielorruso', yi:'Yidis', non:'Nórdico antiguo', arc:'Arameo', cop:'Copto', rom:'Romaní', br:'Bretón', xh:'Xhosa', lad:'Ladino', tlh:'Klingon', jbo:'Lojban', fj:'Fiyiano', sm:'Samoano', zh_han:'Chino (Clásico Han)', zh_tang:'Chino (Clásico Tang)', ceb:'Cebuano', su:'Sundanés', th_isan:'Tailandés (Isan)', es_co:'Español (Colombia)', es_cl:'Español (Chile)', gl:'Gallego', oc:'Occitano', fo:'Feroés', jam:'Patois jamaicano', pap:'Papiamento'},
    ru: { ja:'Японский', ja_osa:'Японский (Осака)', ja_aom:'Японский (Аомори)', ja_oki:'Японский (Окинава)', ja_hak:'Японский (Хаката)', ja_edo:'Японский (Эдо)', ko:'Корейский', ko_kp:'Корейский (Северная Корея)', ko_bus:'Корейский (Пусан)', zh:'Китайский (путунхуа)', yue:'Кантонский', nan:'Тайваньский', wuu:'Шанхайский', zh_song:'Китайский (вэньянь)', vi:'Вьетнамский', vi_nom:'Тьы-ном', th:'Тайский', id:'Индонезийский', sa:'Санскрит', hi:'Хинди', en:'Английский', en_aave:'English (AAVE)', en_south:'Английский (южный)', en_app:'Английский (Аппалачи)', en_ie:'Английский (ирландский)', en_sco:'Английский (шотландский)', en_yk:'Английский (Йоркшир)', en_ck:'Английский (кокни)', de:'Немецкий', fr:'Французский', it:'Итальянский', es_eu:'Испанский (Европа)', es_mx:'Испанский (Мексика)', pt_eu:'Португальский (Европа)', pt_br:'Португальский (Бразилия)', la:'Латинский', ru:'Русский', uk:'Украинский', ar:'Арабский (стандарт)', ar_eg:'Арабский (египетский)', he:'Иврит', sw:'Суахили', tr:'Турецкий', fa:'Персидский', tl:'Тагальский', ga:'Ирландский', eu:'Баскский', mn:'Монгольский', my:'Бирманский', am:'Амхарский', egy:'Древнеегипетский', ta:'Тамильский', hu:'Венгерский', nl:'Нидерландский', pl:'Польский', ms:'Малайский', mg:'Малагасийский', cy:'Валлийский', fi:'Финский', ain:'Айнский', bn:'Бенгальский', ur:'Урду', te:'Телугу', jv:'Яванский', ko_jeju:'Корейский (Чеджу)', ko_mid:'Среднекорейский', ko_em:'Раннеcовременный корейский', ka:'Грузинский', el:'Греческий', el_grc:'Греческий (древний)', nv:'Навахо', qu:'Кечуа', mi:'Маори', haw:'Гавайский', km:'Кхмерский', lo:'Лаосский', yo:'Йоруба', zu:'Зулу', bo:'Тибетский', hy:'Армянский' , ja_kyo:'Японский (Киото)', ja_hir:'Японский (Хиросима)', ja_mvi:'Мияко', ja_rys:'Яэяма', ar_lev:'Арабский (левантийский)', ar_ma:'Арабский (марокканский)', ar_gulf:'Арабский (заливный)', zh_sc:'Китайский (Сычуань)', zh_db:'Китайский (северо-восток)', nap:'Неаполитанский', scn:'Сицилийский', de_gsw:'Немецкий (Швейцария)', fr_qc:'Французский (Квебек)', sco:'Шотландский', en_sg:'Синглиш', hwc:'Гавайский креольский', pcm:'Нигерийский пиджин', tpi:'Ток-писин', en_ang:'Древнеанглийский', sv:'Шведский', no:'Норвежский', si:'Сингальский', ro:'Румынский', cs:'Чешский', ca:'Каталанский', da:'Датский', is:'Исландский', lt:'Литовский', sq:'Албанский', mt:'Мальтийский', so:'Сомалийский', ml:'Малаялам', pa:'Панджаби', ku:'Курдский', ug:'Уйгурский', kk:'Казахский', ha:'Хауса', ig:'Игбо', eo:'Эсперанто', tok:'Токи Пона', ht:'Гаитянский креольский', ps:'Пушту', uz:'Узбекский', mr:'Маратхи', gu:'Гуджарати', kn:'Каннада', ne:'Непальский', om:'Оромо', ti:'Тигринья', wo:'Волоф', ln:'Лингала', sn:'Шона', sr:'Сербский', bg:'Болгарский', sk:'Словацкий', lv:'Латышский', et:'Эстонский', be:'Белорусский', yi:'Идиш', non:'Древнескандинавский', arc:'Арамейский', cop:'Коптский', rom:'Цыганский', br:'Бретонский', xh:'Коса', lad:'Ладино', tlh:'Клингонский', jbo:'Ложбан', fj:'Фиджийский', sm:'Самоанский', zh_han:'Китайский (Хань)', zh_tang:'Китайский (Тан)', ceb:'Себуано', su:'Сунданский', th_isan:'Тайский (Исан)', es_co:'Испанский (Колумбия)', es_cl:'Испанский (Чили)', gl:'Галисийский', oc:'Окситанский', fo:'Фарерский', jam:'Ямайский патуа', pap:'Папьяменто'},
    ar: { ja:'يابانية', ja_osa:'لهجة أوساكا', ja_aom:'لهجة أوموري', ja_oki:'أوكيناوية', ja_hak:'لهجة هاكاتا', ja_edo:'يابانية عصر إيدو', ko:'كورية', ko_kp:'كورية شمالية', ko_bus:'لهجة بوسان', zh:'صينية (ماندرين)', yue:'كانتونية', nan:'تايوانية', wuu:'شنغهاية', zh_song:'الصينية الكلاسيكية', vi:'فيتنامية', vi_nom:'تشو نوم', th:'تايلاندية', id:'إندونيسية', sa:'سنسكريتية', hi:'هندية', en:'إنجليزية', en_aave:'English (AAVE)', en_south:'إنجليزية (جنوب أمريكا)', en_app:'إنجليزية (أبالاتشيا)', en_ie:'إنجليزية (أيرلندية)', en_sco:'إنجليزية (اسكتلندية)', en_yk:'إنجليزية (يوركشاير)', en_ck:'إنجليزية (كوكني)', de:'ألمانية', fr:'فرنسية', it:'إيطالية', es_eu:'إسبانية (أوروبا)', es_mx:'إسبانية (المكسيك)', pt_eu:'برتغالية (أوروبا)', pt_br:'برتغالية (البرازيل)', la:'لاتينية', ru:'روسية', uk:'أوكرانية', ar:'عربية (فصحى)', ar_eg:'عربية (مصرية)', he:'عبرية', sw:'سواحيلية', tr:'تركية', fa:'فارسية', tl:'تاغالوغية', ga:'أيرلندية', eu:'باسكية', mn:'منغولية', my:'بورمية', am:'أمهرية', egy:'مصرية قديمة', ta:'تاميلية', hu:'مجرية', nl:'هولندية', pl:'بولندية', ms:'ملايوية', mg:'ملغاشية', cy:'ويلزية', fi:'فنلندية', ain:'أينوية', bn:'بنغالية', ur:'أردية', te:'تيلوغوية', jv:'جاوية', ko_jeju:'جيجوية', ko_mid:'الكورية الوسطى', ko_em:'الكورية الحديثة المبكرة', ka:'جورجية', el:'يونانية', el_grc:'يونانية قديمة', nv:'نافاهو', qu:'كتشوية', mi:'ماورية', haw:'هاوايية', km:'خميرية', lo:'لاوية', yo:'يوروبية', zu:'زولوية', bo:'تبتية', hy:'أرمنية' , ja_kyo:'لهجة كيوتو', ja_hir:'لهجة هيروشيما', ja_mvi:'ميياكو', ja_rys:'يايياما', ar_lev:'عربية (شامية)', ar_ma:'عربية (مغربية)', ar_gulf:'عربية (خليجية)', zh_sc:'صينية سيتشوانية', zh_db:'صينية شمالية شرقية', nap:'نابولية', scn:'صقلية', de_gsw:'ألمانية سويسرية', fr_qc:'فرنسية كيبيكية', sco:'اسكتلندية', en_sg:'سينغليش', hwc:'كريول هاوايي', pcm:'بيدجن نيجيري', tpi:'توك بيسين', en_ang:'إنجليزية قديمة', sv:'سويدية', no:'نرويجية', si:'سنهالية', ro:'رومانية', cs:'تشيكية', ca:'كتالونية', da:'دنماركية', is:'آيسلندية', lt:'ليتوانية', sq:'ألبانية', mt:'مالطية', so:'صومالية', ml:'مالايالامية', pa:'بنجابية', ku:'كردية', ug:'أويغورية', kk:'كازاخية', ha:'هوسية', ig:'إيغبوية', eo:'إسبرانتو', tok:'توكي بونا', ht:'كريول هايتي', ps:'بشتوية', uz:'أوزبكية', mr:'ماراثية', gu:'غوجاراتية', kn:'كنادية', ne:'نيبالية', om:'أورومية', ti:'تغرينية', wo:'ولوفية', ln:'لينغالية', sn:'شونية', sr:'صربية', bg:'بلغارية', sk:'سلوفاكية', lv:'لاتفية', et:'إستونية', be:'بيلاروسية', yi:'يديشية', non:'نوردية قديمة', arc:'آرامية', cop:'قبطية', rom:'رومانية', br:'بريتونية', xh:'خوسية', lad:'لادينو', tlh:'كلينغون', jbo:'لوجبان', fj:'فيجية', sm:'ساموية', zh_han:'الصينية (هان)', zh_tang:'الصينية (تانغ)', ceb:'السيبوانية', su:'السوندانية', th_isan:'التايلاندية (إيسان)', es_co:'الإسبانية (كولومبيا)', es_cl:'الإسبانية (تشيلي)', gl:'الجاليقية', oc:'الأكسيتانية', fo:'الفاروية', jam:'الباتوا الجامايكية', pap:'البابيامنتو'},
    he: { ja:'יפנית', ja_osa:'ניב אוסקה', ja_aom:'ניב אאומורי', ja_oki:'אוקינאווית', ja_hak:'ניב הקאטה', ja_edo:'יפנית תקופת אדו', ko:'קוריאנית', ko_kp:'צפון קוריאנית', ko_bus:'ניב בוסאן', zh:'סינית (מנדרינית)', yue:'קנטונזית', nan:'טייוואנית', wuu:'שנגחאית', zh_song:'סינית קלאסית', vi:'וייטנאמית', vi_nom:"צ'ו נום", th:'תאית', id:'אינדונזית', sa:'סנסקריט', hi:'הינדי', en:'אנגלית', en_aave:'English (AAVE)', en_south:'אנגלית (דרום ארה"ב)', en_app:'אנגלית (אפלצ\'יה)', en_ie:'אנגלית (אירית)', en_sco:'אנגלית (סקוטית)', en_yk:'אנגלית (יורקשייר)', en_ck:'אנגלית (קוקני)', de:'גרמנית', fr:'צרפתית', it:'איטלקית', es_eu:'ספרדית (אירופה)', es_mx:'ספרדית (מקסיקו)', pt_eu:'פורטוגזית (אירופה)', pt_br:'פורטוגזית (ברזיל)', la:'לטינית', ru:'רוסית', uk:'אוקראינית', ar:'ערבית (ספרותית)', ar_eg:'ערבית (מצרית)', he:'עברית', sw:'סווהילי', tr:'טורקית', fa:'פרסית', tl:'טגלוג', ga:'אירית', eu:'בסקית', mn:'מונגולית', my:'בורמזית', am:'אמהרית', egy:'מצרית עתיקה', ta:'טמילית', hu:'הונגרית', nl:'הולנדית', pl:'פולנית', ms:'מלאית', mg:'מלגשית', cy:'וולשית', fi:'פינית', ain:'אינו', bn:'בנגלית', ur:'אורדו', te:'טלוגו', jv:'ג׳אוונית', ko_jeju:'ג׳ג׳ואית', ko_mid:'קוריאנית תיכונה', ko_em:'קוריאנית מודרנית מוקדמת', ka:'גאורגית', el:'יוונית', el_grc:'יוונית עתיקה', nv:'נאוואחו', qu:'קצ׳ואה', mi:'מאורית', haw:'הוואית', km:'חמרית', lo:'לאוסית', yo:'יורובה', zu:'זולו', bo:'טיבטית', hy:'ארמנית' , ja_kyo:'ניב קיוטו', ja_hir:'ניב הירושימה', ja_mvi:'מיאקו', ja_rys:'יאאיאמה', ar_lev:'ערבית (לבנטינית)', ar_ma:'ערבית (מרוקאית)', ar_gulf:'ערבית (מפרצית)', zh_sc:'סצ\'ואנית', zh_db:'צפון-מזרח סינית', nap:'נאפוליטנית', scn:'סיציליאנית', de_gsw:'גרמנית שוויצרית', fr_qc:'צרפתית קוויבקית', sco:'סקוטית', en_sg:'סינגליש', hwc:'קריאולית הוואית', pcm:'פידג\'ין ניגרי', tpi:'טוק פיסין', en_ang:'אנגלית עתיקה', sv:'שוודית', no:'נורווגית', si:'סינהלית', ro:'רומנית', cs:'צ׳כית', ca:'קטלאנית', da:'דנית', is:'איסלנדית', lt:'ליטאית', sq:'אלבנית', mt:'מלטזית', so:'סומלית', ml:'מלאיאלאם', pa:'פנג׳אבית', ku:'כורדית', ug:'אויגורית', kk:'קזחית', ha:'האוסה', ig:'איגבו', eo:'אספרנטו', tok:'טוקי פונה', ht:'קריאולית האיטית', ps:'פשטו', uz:'אוזבקית', mr:'מראטהי', gu:'גוג׳ראטי', kn:'קאנאדה', ne:'נפאלית', om:'אורומו', ti:'תגרינית', wo:'וולוף', ln:'לינגלה', sn:'שונה', sr:'סרבית', bg:'בולגרית', sk:'סלובקית', lv:'לטבית', et:'אסטונית', be:'בלארוסית', yi:'יידיש', non:'נורדית עתיקה', arc:'ארמית', cop:'קופטית', rom:'רומאני', br:'ברטונית', xh:'קוסה', lad:'לאדינו', tlh:'קלינגון', jbo:'לוז׳באן', fj:'פיג׳ית', sm:'סמואית', zh_han:'סינית (האן)', zh_tang:'סינית (טאנג)', ceb:'סבואנו', su:'סונדנזית', th_isan:'תאית (איסאן)', es_co:'ספרדית (קולומביה)', es_cl:'ספרדית (צ\'ילה)', gl:'גליסית', oc:'אוקסיטנית', fo:'פארואזית', jam:'פטואה ג\'מייקנית', pap:'פפיאמנטו'},
    sw: { ja:'Kijapani', ja_osa:'Lahaja ya Osaka', ja_aom:'Lahaja ya Aomori', ja_oki:'Kiokinawa', ja_hak:'Lahaja ya Hakata', ja_edo:'Kijapani cha Edo', ko:'Kikorea', ko_kp:'Kikorea Kaskazini', ko_bus:'Lahaja ya Busan', zh:'Kichina (Mandarin)', yue:'Kikantoni', nan:'Kitaiwani', wuu:'Kishanghai', zh_song:'Kichina cha kale', vi:'Kivietinamu', vi_nom:'Vietnamese (Chữ Nôm)', th:'Kithai', id:'Kiindonesia', sa:'Kisanskriti', hi:'Kihindi', en:'Kiingereza', en_aave:'English (AAVE)', en_south:'Kiingereza (Kusini mwa Marekani)', en_app:'Kiingereza (Appalachia)', en_ie:'Kiingereza (Kiayalandi)', en_sco:'Kiingereza (Uskoti)', en_yk:'Kiingereza (Yorkshire)', en_ck:'Kiingereza (Cockney)', de:'Kijerumani', fr:'Kifaransa', it:'Kiitaliano', es_eu:'Kihispania (Ulaya)', es_mx:'Kihispania (Meksiko)', pt_eu:'Kireno (Ulaya)', pt_br:'Kireno (Brazili)', la:'Kilatini', ru:'Kirusi', uk:'Kiukraini', ar:'Kiarabu (sanifu)', ar_eg:'Kiarabu (Misri)', he:'Kiebrania', sw:'Kiswahili', tr:'Kituruki', fa:'Kiajemi', tl:'Kitagalog', ga:'Kiayalandi', eu:'Kibasque', mn:'Kimongolia', my:'Kiburma', am:'Kiamhari', egy:'Kimisri cha kale', ta:'Kitamil', hu:'Kihungari', nl:'Kiholanzi', pl:'Kipolandi', ms:'Kimalei', mg:'Kimalagasi', cy:'Kiwelshi', fi:'Kifinlandi', ain:'Kiainu', bn:'Kibengali', ur:'Kiurdu', te:'Kitelugu', jv:'Kijava', ko_jeju:'Kijeju', ko_mid:'Kikorea cha Kati', ko_em:'Kikorea cha Kisasa cha Mapema', ka:'Kijojia', el:'Kigiriki', el_grc:'Kigiriki cha kale', nv:'Kinavaho', qu:'Kikechua', mi:'Kimaori', haw:'Kihawai', km:'Kikhmeri', lo:'Kilao', yo:'Kiyoruba', zu:'Kizulu', bo:'Kitibeti', hy:'Kiarmenia' , ja_kyo:'Lahaja ya Kyoto', ja_hir:'Lahaja ya Hiroshima', ja_mvi:'Kimiyako', ja_rys:'Kiyaeyama', ar_lev:'Kiarabu (Levanti)', ar_ma:'Kiarabu (Moroko)', ar_gulf:'Kiarabu (Ghuba)', zh_sc:'Kisichuan', zh_db:'Kichina Kaskazini-Mashariki', nap:'Kinapoli', scn:'Kisisilia', de_gsw:'Kijerumani cha Uswisi', fr_qc:'Kifaransa cha Quebec', sco:'Kiskoti', en_sg:'English (Singapore)', hwc:'Krioli ya Hawaii', pcm:'Pidgin ya Nigeria', tpi:'Tok Pisin', en_ang:'Kiingereza cha Kale', sv:'Kiswidi', no:'Kinorwe', si:'Kisinhala', ro:'Kiromania', cs:'Kicheki', ca:'Kikatalani', da:'Kidenmaki', is:'Kiaisilandi', lt:'Kilithuania', sq:'Kialbania', mt:'Kimalta', so:'Kisomali', ml:'Kimalayalamu', pa:'Kipunjabi', ku:'Kikurdi', ug:'Kiuygur', kk:'Kikazaki', ha:'Kihausa', ig:'Kiigbo', eo:'Kiesperanto', tok:'Toki Pona', ht:'Krioli ya Haiti', ps:'Kipashto', uz:'Kiuzbeki', mr:'Kimarathi', gu:'Kigujarati', kn:'Kikannada', ne:'Kinepali', om:'Kioromo', ti:'Kitigrinya', wo:'Kiwolof', ln:'Kilingala', sn:'Kishona', sr:'Kiserbia', bg:'Kibulgaria', sk:'Kislovakia', lv:'Kilatvia', et:'Kiestonia', be:'Kibelarusi', yi:'Kiyidishi', non:'Kinordi cha Kale', arc:'Kiaramu', cop:'Kikopti', rom:'Kiromani', br:'Kibretoni', xh:'Kixhosa', lad:'Kiladino', tlh:'Kiklingon', jbo:'Kilojban', fj:'Kifiji', sm:'Kisamoa', zh_han:'Kichina (Han)', zh_tang:'Kichina (Tang)', ceb:'Kisebuano', su:'Kisunda', th_isan:'Kithai (Isan)', es_co:'Kihispania (Kolombia)', es_cl:'Kihispania (Chile)', gl:'Kigalisia', oc:'Kioksitani', fo:'Kifaroe', jam:'Kijamaika Patwah', pap:'Kipapiamento'},
    yue: { ja:'日本語(標準)', ja_osa:'大阪話', ja_aom:'青森話', ja_oki:'沖繩話', ja_hak:'博多話', ja_edo:'江戶時代話', ko:'韓文(標準)', ko_kp:'北韓話', ko_bus:'釜山話', zh:'普通話', yue:'廣東話', nan:'台灣話', wuu:'上海話', zh_song:'中国語(宋明文言)', vi:'越南話', vi_nom:'越南语(字喃)', th:'泰文', id:'印尼話', sa:'梵文', hi:'印地話', en:'英文', en_aave:'AAVE(黑人英語)', en_south:'英文(美國南方)', en_app:'英文(阿巴拉契亞)', en_ie:'英文(愛爾蘭)', en_sco:'英文(蘇格蘭)', en_yk:'英文(約克郡)', en_ck:'英文(倫敦東區)', de:'德文', fr:'法文', it:'意大利文', es_eu:'西班牙文(歐洲)', es_mx:'西班牙文(墨西哥)', pt_eu:'葡萄牙文(歐洲)', pt_br:'葡萄牙文(巴西)', la:'拉丁文', ru:'俄文', uk:'烏克蘭文', ar:'阿拉伯文(標準)', ar_eg:'阿拉伯文(埃及方言)', he:'希伯來文', sw:'斯瓦希里文', tr:'土耳其文', fa:'波斯文', tl:'他加祿文', ga:'愛爾蘭文', eu:'巴斯克文', mn:'蒙古文', my:'緬甸文', am:'阿姆哈拉文', egy:'古埃及文', ta:'泰米爾文', hu:'匈牙利文', nl:'荷蘭文', pl:'波蘭文', ms:'馬來文', mg:'馬達加斯加語', cy:'威爾斯語', fi:'芬蘭語', ain:'阿伊努語', bn:'孟加拉語', ur:'烏爾都語', te:'泰盧固語', jv:'爪哇語', ko_jeju:'濟州語', ko_mid:'中世韓國語', ko_em:'近世韓國語', ka:'格魯吉亞語', el:'希臘語', el_grc:'古希臘語', nv:'納瓦霍語', qu:'克丘亞語', mi:'毛利語', haw:'夏威夷語', km:'高棉語', lo:'老撾語', yo:'約魯巴語', zu:'祖魯語', bo:'藏語', hy:'亞美尼亞語' , ja_kyo:'京都話', ja_hir:'廣島話', ja_mvi:'宮古語', ja_rys:'八重山語', ar_lev:'阿拉伯文(黎凡特方言)', ar_ma:'阿拉伯文(摩洛哥方言)', ar_gulf:'阿拉伯文(海灣方言)', zh_sc:'中国語(四川話)', zh_db:'中国語(東北話)', nap:'那不勒斯語', scn:'西西里語', de_gsw:'瑞士德語', fr_qc:'魁北克法語', sco:'蘇格蘭語', en_sg:'新加坡式英語', hwc:'夏威夷克里奧爾', pcm:'尼日利亞皮欽語', tpi:'托克皮辛', en_ang:'古英語', sv:'瑞典語', no:'挪威語', si:'僧伽羅語', ro:'羅馬尼亞語', cs:'捷克語', ca:'加泰羅尼亞語', da:'丹麥語', is:'冰島語', lt:'立陶宛語', sq:'阿爾巴尼亞語', mt:'馬耳他語', so:'索馬里語', ml:'馬拉雅拉姆語', pa:'旁遮普語', ku:'庫爾德語', ug:'維吾爾語', kk:'哈薩克語', ha:'豪薩語', ig:'伊博語', eo:'世界語', tok:'道本語', ht:'海地克里奧爾語', ps:'普什圖語', uz:'烏茲別克語', mr:'馬拉地語', gu:'古吉拉特語', kn:'卡納達語', ne:'尼泊爾語', om:'奧羅莫語', ti:'提格利尼亞語', wo:'沃洛夫語', ln:'林加拉語', sn:'紹納語', sr:'塞爾維亞語', bg:'保加利亞語', sk:'斯洛伐克語', lv:'拉脫維亞語', et:'愛沙尼亞語', be:'白俄羅斯語', yi:'意第緒語', non:'古諾爾斯語', arc:'阿拉米語', cop:'科普特語', rom:'羅姆語', br:'布列塔尼語', xh:'科薩語', lad:'拉迪諾語', tlh:'克林貢語', jbo:'邏輯語', fj:'斐濟語', sm:'薩摩亞語', zh_han:'中文(漢代漢文)', zh_tang:'中文(唐代漢文)', ceb:'宿霧語', su:'巽他語', th_isan:'泰語(伊桑方言)', es_co:'西班牙語(哥倫比亞)', es_cl:'西班牙語(智利)', gl:'加利西亞語', oc:'奧克語', fo:'法羅語', jam:'牙買加帕特瓦', pap:'帕皮阿門托語', ko_yb:'延邊朝鮮語', mn_cn:'內蒙古蒙古語', za:'壯語', ii:'彝語', hmn:'苗語', mnc:'滿語'},
    vi: { ja:'Tiếng Nhật', ja_osa:'Phương ngữ Osaka', ja_aom:'Phương ngữ Aomori', ja_oki:'Tiếng Okinawa', ja_hak:'Phương ngữ Hakata', ja_edo:'Tiếng Nhật thời Edo', ko:'Tiếng Hàn', ko_kp:'Tiếng Triều Tiên', ko_bus:'Phương ngữ Busan', zh:'Tiếng Trung (Phổ thông)', yue:'Tiếng Quảng Đông', nan:'Tiếng Đài Loan', wuu:'Tiếng Thượng Hải', zh_song:'Văn ngôn', vi:'Tiếng Việt', vi_nom:'Vietnamese (Chữ Nôm)', th:'Tiếng Thái', id:'Tiếng Indonesia', sa:'Tiếng Phạn', hi:'Tiếng Hindi', en:'Tiếng Anh', en_aave:'English (AAVE)', en_south:'Tiếng Anh (miền Nam Mỹ)', en_app:'Tiếng Anh (Appalachia)', en_ie:'Tiếng Anh (Ireland)', en_sco:'Tiếng Anh (Scotland)', en_yk:'Tiếng Anh (Yorkshire)', en_ck:'Tiếng Anh (Cockney)', de:'Tiếng Đức', fr:'Tiếng Pháp', it:'Tiếng Ý', es_eu:'Tiếng Tây Ban Nha (châu Âu)', es_mx:'Tiếng Tây Ban Nha (Mexico)', pt_eu:'Tiếng Bồ Đào Nha (châu Âu)', pt_br:'Tiếng Bồ Đào Nha (Brazil)', la:'Tiếng Latin', ru:'Tiếng Nga', uk:'Tiếng Ukraina', ar:'Tiếng Ả Rập (chuẩn)', ar_eg:'Tiếng Ả Rập (Ai Cập)', he:'Tiếng Do Thái', sw:'Tiếng Swahili', tr:'Tiếng Thổ Nhĩ Kỳ', fa:'Tiếng Ba Tư', tl:'Tiếng Tagalog', ga:'Tiếng Ireland', eu:'Tiếng Basque', mn:'Tiếng Mông Cổ', my:'Tiếng Miến Điện', am:'Tiếng Amhara', egy:'Tiếng Ai Cập cổ đại', ta:'Tiếng Tamil', hu:'Tiếng Hungary', nl:'Tiếng Hà Lan', pl:'Tiếng Ba Lan', ms:'Tiếng Mã Lai', mg:'Tiếng Malagasy', cy:'Tiếng Wales', fi:'Tiếng Phần Lan', ain:'Tiếng Ainu', bn:'Tiếng Bengal', ur:'Tiếng Urdu', te:'Tiếng Telugu', jv:'Tiếng Java', ko_jeju:'Tiếng Jeju', ko_mid:'Tiếng Hàn trung đại', ko_em:'Tiếng Hàn cận đại', ka:'Tiếng Gruzia', el:'Tiếng Hy Lạp', el_grc:'Tiếng Hy Lạp cổ đại', nv:'Tiếng Navajo', qu:'Tiếng Quechua', mi:'Tiếng Māori', haw:'Tiếng Hawaii', km:'Tiếng Khmer', lo:'Tiếng Lào', yo:'Tiếng Yoruba', zu:'Tiếng Zulu', bo:'Tiếng Tây Tạng', hy:'Tiếng Armenia' , ja_kyo:'Phương ngữ Kyoto', ja_hir:'Phương ngữ Hiroshima', ja_mvi:'Tiếng Miyako', ja_rys:'Tiếng Yaeyama', ar_lev:'Tiếng Ả Rập (Levant)', ar_ma:'Tiếng Ả Rập (Maroc)', ar_gulf:'Tiếng Ả Rập (Vùng Vịnh)', zh_sc:'Tiếng Tứ Xuyên', zh_db:'Tiếng Đông Bắc Trung Quốc', nap:'Tiếng Napoli', scn:'Tiếng Sicilia', de_gsw:'Tiếng Đức Thụy Sĩ', fr_qc:'Tiếng Pháp Québec', sco:'Tiếng Scotland', en_sg:'English (Singapore)', hwc:'Creole Hawaii', pcm:'Pidgin Nigeria', tpi:'Tok Pisin', en_ang:'Tiếng Anh cổ', sv:'Tiếng Thụy Điển', no:'Tiếng Na Uy', si:'Tiếng Sinhala', ro:'Tiếng Romania', cs:'Tiếng Séc', ca:'Tiếng Catalan', da:'Tiếng Đan Mạch', is:'Tiếng Iceland', lt:'Tiếng Litva', sq:'Tiếng Albania', mt:'Tiếng Malta', so:'Tiếng Somali', ml:'Tiếng Malayalam', pa:'Tiếng Punjab', ku:'Tiếng Kurd', ug:'Tiếng Duy Ngô Nhĩ', kk:'Tiếng Kazakh', ha:'Tiếng Hausa', ig:'Tiếng Igbo', eo:'Tiếng Esperanto', tok:'Toki Pona', ht:'Tiếng Creole Haiti', ps:'Tiếng Pashto', uz:'Tiếng Uzbek', mr:'Tiếng Marathi', gu:'Tiếng Gujarati', kn:'Tiếng Kannada', ne:'Tiếng Nepal', om:'Tiếng Oromo', ti:'Tiếng Tigrinya', wo:'Tiếng Wolof', ln:'Tiếng Lingala', sn:'Tiếng Shona', sr:'Tiếng Serbia', bg:'Tiếng Bulgaria', sk:'Tiếng Slovak', lv:'Tiếng Latvia', et:'Tiếng Estonia', be:'Tiếng Belarus', yi:'Tiếng Yiddish', non:'Tiếng Bắc Âu cổ', arc:'Tiếng Aramaic', cop:'Tiếng Coptic', rom:'Tiếng Romani', br:'Tiếng Breton', xh:'Tiếng Xhosa', lad:'Tiếng Ladino', tlh:'Tiếng Klingon', jbo:'Tiếng Lojban', fj:'Tiếng Fiji', sm:'Tiếng Samoa', zh_han:'Trung Quốc (Hán văn Hán)', zh_tang:'Trung Quốc (Hán văn Đường)', ceb:'Cebuano', su:'Sunda', th_isan:'Thái (Isan)', es_co:'Tây Ban Nha (Colombia)', es_cl:'Tây Ban Nha (Chile)', gl:'Galicia', oc:'Occitan', fo:'Faroe', jam:'Jamaica Patois', pap:'Papiamento'},
    th: { ja:'ภาษาญี่ปุ่น', ja_osa:'สำเนียงโอซากะ', ja_aom:'สำเนียงอาโอโมริ', ja_oki:'ภาษาโอกินาวา', ja_hak:'สำเนียงฮากาตะ', ja_edo:'ภาษาญี่ปุ่นสมัยเอโดะ', ko:'ภาษาเกาหลี', ko_kp:'ภาษาเกาหลีเหนือ', ko_bus:'สำเนียงปูซาน', zh:'ภาษาจีน (กลาง)', yue:'ภาษากวางตุ้ง', nan:'ภาษาไต้หวัน', wuu:'ภาษาเซี่ยงไฮ้', zh_song:'ภาษาจีนคลาสสิก', vi:'ภาษาเวียดนาม', vi_nom:'จื๋อโนม', th:'ภาษาไทย', id:'ภาษาอินโดนีเซีย', sa:'ภาษาสันสกฤต', hi:'ภาษาฮินดี', en:'ภาษาอังกฤษ', en_aave:'English (AAVE)', en_south:'ภาษาอังกฤษ(ภาคใต้สหรัฐ)', en_app:'ภาษาอังกฤษ(แอปพาเลเชีย)', en_ie:'ภาษาอังกฤษ(ไอร์แลนด์)', en_sco:'ภาษาอังกฤษ(สกอตแลนด์)', en_yk:'ภาษาอังกฤษ(ยอร์กเชียร์)', en_ck:'ภาษาอังกฤษ(ค็อกนีย์)', de:'ภาษาเยอรมัน', fr:'ภาษาฝรั่งเศส', it:'ภาษาอิตาลี', es_eu:'ภาษาสเปน (ยุโรป)', es_mx:'ภาษาสเปน (เม็กซิโก)', pt_eu:'ภาษาโปรตุเกส (ยุโรป)', pt_br:'ภาษาโปรตุเกส (บราซิล)', la:'ภาษาละติน', ru:'ภาษารัสเซีย', uk:'ภาษายูเครน', ar:'ภาษาอาหรับ (มาตรฐาน)', ar_eg:'ภาษาอาหรับ(อียิปต์)', he:'ภาษาฮีบรู', sw:'ภาษาสวาฮีลี', tr:'ภาษาตุรกี', fa:'ภาษาเปอร์เซีย', tl:'ภาษาตากาล็อก', ga:'ภาษาไอริช', eu:'ภาษาบาสก์', mn:'ภาษามองโกล', my:'ภาษาพม่า', am:'ภาษาอัมฮาริก', egy:'ภาษาอียิปต์โบราณ', ta:'ภาษาทมิฬ', hu:'ภาษาฮังการี', nl:'ภาษาดัตช์', pl:'ภาษาโปแลนด์', ms:'ภาษามลายู', mg:'ภาษามาลากาซี', cy:'ภาษาเวลส์', fi:'ภาษาฟินแลนด์', ain:'ภาษาไอนุ', bn:'ภาษาเบงกาลี', ur:'ภาษาอูรดู', te:'ภาษาเตลูกู', jv:'ภาษาชวา', ko_jeju:'ภาษาเชจู', ko_mid:'ภาษาเกาหลีกลาง', ko_em:'ภาษาเกาหลีสมัยใหม่ตอนต้น', ka:'ภาษาจอร์เจีย', el:'ภาษากรีก', el_grc:'ภาษากรีกโบราณ', nv:'ภาษานาวาโฮ', qu:'ภาษาเกชัว', mi:'ภาษาเมารี', haw:'ภาษาฮาวาย', km:'ภาษาเขมร', lo:'ภาษาลาว', yo:'ภาษาโยรูบา', zu:'ภาษาซูลู', bo:'ภาษาทิเบต', hy:'ภาษาอาร์เมเนีย' , ja_kyo:'สำเนียงเกียวโต', ja_hir:'สำเนียงฮิโรชิมะ', ja_mvi:'ภาษามิยาโกะ', ja_rys:'ภาษายาเอยามะ', ar_lev:'ภาษาอาหรับ(เลแวนต์)', ar_ma:'ภาษาอาหรับ(โมร็อกโก)', ar_gulf:'ภาษาอาหรับ(อ่าวเปอร์เซีย)', zh_sc:'ภาษาจีนเสฉวน', zh_db:'ภาษาจีนตะวันออกเฉียงเหนือ', nap:'ภาษาเนเปิลส์', scn:'ภาษาซิซิลี', de_gsw:'ภาษาเยอรมันสวิส', fr_qc:'ภาษาฝรั่งเศสเควเบก', sco:'ภาษาสกอต', en_sg:'ซิงกลิช', hwc:'ครีโอลฮาวาย', pcm:'พิดจินไนจีเรีย', tpi:'ต็อกพิซิน', en_ang:'ภาษาอังกฤษโบราณ', sv:'ภาษาสวีเดน', no:'ภาษานอร์เวย์', si:'ภาษาสิงหล', ro:'ภาษาโรมาเนีย', cs:'ภาษาเช็ก', ca:'ภาษาคาตาลัน', da:'ภาษาเดนมาร์ก', is:'ภาษาไอซ์แลนด์', lt:'ภาษาลิทัวเนีย', sq:'ภาษาแอลเบเนีย', mt:'ภาษามอลตา', so:'ภาษาโซมาลี', ml:'ภาษามาลายาลัม', pa:'ภาษาปัญจาบ', ku:'ภาษาเคิร์ด', ug:'ภาษาอุยกูร์', kk:'ภาษาคาซัค', ha:'ภาษาเฮาซา', ig:'ภาษาอิกโบ', eo:'ภาษาเอสเปรันโต', tok:'โทกิโปนา', ht:'ครีโอลเฮติ', ps:'ภาษาปาชโต', uz:'ภาษาอุซเบก', mr:'ภาษามราฐี', gu:'ภาษาคุชราต', kn:'ภาษากันนาดา', ne:'ภาษาเนปาล', om:'ภาษาโอโรโม', ti:'ภาษาติกรินยา', wo:'ภาษาโวลอฟ', ln:'ภาษาลิงกาลา', sn:'ภาษาโชนา', sr:'ภาษาเซอร์เบีย', bg:'ภาษาบัลแกเรีย', sk:'ภาษาสโลวัก', lv:'ภาษาลัตเวีย', et:'ภาษาเอสโตเนีย', be:'ภาษาเบลารุส', yi:'ภาษายิดดิช', non:'ภาษานอร์สโบราณ', arc:'ภาษาอาราเมอิก', cop:'ภาษาคอปติก', rom:'ภาษาโรมานี', br:'ภาษาเบรอตง', xh:'ภาษาโคซา', lad:'ภาษาลาดีโน', tlh:'ภาษาคลิงออน', jbo:'ภาษาโลจบัน', fj:'ภาษาฟิจิ', sm:'ภาษาซามัว', zh_han:'จีน (ฮั่น)', zh_tang:'จีน (ถัง)', ceb:'เซบูอาโน', su:'ซุนดา', th_isan:'ไทย (อีสาน)', es_co:'สเปน (โคลอมเบีย)', es_cl:'สเปน (ชิลี)', gl:'กาลิเซีย', oc:'อ็อกซิตัน', fo:'แฟโร', jam:'จาเมกาปาตัว', pap:'ปาเปียเมนโต'},
    id: { ja:'Bahasa Jepang', ja_osa:'Dialek Osaka', ja_aom:'Dialek Aomori', ja_oki:'Bahasa Okinawa', ja_hak:'Dialek Hakata', ja_edo:'Bahasa Jepang Edo', ko:'Bahasa Korea', ko_kp:'Bahasa Korea Utara', ko_bus:'Dialek Busan', zh:'Bahasa Mandarin', yue:'Bahasa Kanton', nan:'Bahasa Taiwan', wuu:'Bahasa Shanghai', zh_song:'Bahasa Tionghoa Klasik', vi:'Bahasa Vietnam', vi_nom:'Vietnamese (Chữ Nôm)', th:'Bahasa Thai', id:'Bahasa Indonesia', sa:'Bahasa Sanskerta', hi:'Bahasa Hindi', en:'Bahasa Inggris', en_aave:'English (AAVE)', en_south:'Bahasa Inggris (AS Selatan)', en_app:'Bahasa Inggris (Appalachia)', en_ie:'Bahasa Inggris (Irlandia)', en_sco:'Bahasa Inggris (Skotlandia)', en_yk:'Bahasa Inggris (Yorkshire)', en_ck:'Bahasa Inggris (Cockney)', de:'Bahasa Jerman', fr:'Bahasa Prancis', it:'Bahasa Italia', es_eu:'Bahasa Spanyol (Eropa)', es_mx:'Bahasa Spanyol (Meksiko)', pt_eu:'Bahasa Portugis (Eropa)', pt_br:'Bahasa Portugis (Brasil)', la:'Bahasa Latin', ru:'Bahasa Rusia', uk:'Bahasa Ukraina', ar:'Bahasa Arab (standar)', ar_eg:'Bahasa Arab (Mesir)', he:'Bahasa Ibrani', sw:'Bahasa Swahili', tr:'Bahasa Turki', fa:'Bahasa Persia', tl:'Bahasa Tagalog', ga:'Bahasa Irlandia', eu:'Bahasa Basque', mn:'Bahasa Mongolia', my:'Bahasa Myanmar', am:'Bahasa Amhara', egy:'Bahasa Mesir Kuno', ta:'Bahasa Tamil', hu:'Bahasa Hungaria', nl:'Bahasa Belanda', pl:'Bahasa Polandia', ms:'Bahasa Melayu', mg:'Bahasa Malagasi', cy:'Bahasa Wales', fi:'Bahasa Finlandia', ain:'Bahasa Ainu', bn:'Bahasa Bengali', ur:'Bahasa Urdu', te:'Bahasa Telugu', jv:'Bahasa Jawa', ko_jeju:'Bahasa Jeju', ko_mid:'Bahasa Korea Pertengahan', ko_em:'Bahasa Korea Modern Awal', ka:'Bahasa Georgia', el:'Bahasa Yunani', el_grc:'Bahasa Yunani Kuno', nv:'Bahasa Navajo', qu:'Bahasa Quechua', mi:'Bahasa Māori', haw:'Bahasa Hawaii', km:'Bahasa Khmer', lo:'Bahasa Lao', yo:'Bahasa Yoruba', zu:'Bahasa Zulu', bo:'Bahasa Tibet', hy:'Bahasa Armenia' , ja_kyo:'Dialek Kyoto', ja_hir:'Dialek Hiroshima', ja_mvi:'Bahasa Miyako', ja_rys:'Bahasa Yaeyama', ar_lev:'Bahasa Arab (Levant)', ar_ma:'Bahasa Arab (Maroko)', ar_gulf:'Bahasa Arab (Teluk)', zh_sc:'Bahasa Sichuan', zh_db:'Bahasa Mandarin Timur Laut', nap:'Bahasa Napoli', scn:'Bahasa Sisilia', de_gsw:'Bahasa Jerman Swiss', fr_qc:'Bahasa Prancis Québec', sco:'Bahasa Skotlandia', en_sg:'English (Singapore)', hwc:'Kreol Hawaii', pcm:'Pidgin Nigeria', tpi:'Tok Pisin', en_ang:'Bahasa Inggris Kuno', sv:'Bahasa Swedia', no:'Bahasa Norwegia', si:'Bahasa Sinhala', ro:'Bahasa Romania', cs:'Bahasa Ceko', ca:'Bahasa Katalan', da:'Bahasa Denmark', is:'Bahasa Islandia', lt:'Bahasa Lituania', sq:'Bahasa Albania', mt:'Bahasa Malta', so:'Bahasa Somali', ml:'Bahasa Malayalam', pa:'Bahasa Punjabi', ku:'Bahasa Kurdi', ug:'Bahasa Uyghur', kk:'Bahasa Kazakh', ha:'Bahasa Hausa', ig:'Bahasa Igbo', eo:'Bahasa Esperanto', tok:'Toki Pona', ht:'Bahasa Kreol Haiti', ps:'Bahasa Pashto', uz:'Bahasa Uzbek', mr:'Bahasa Marathi', gu:'Bahasa Gujarat', kn:'Bahasa Kannada', ne:'Bahasa Nepal', om:'Bahasa Oromo', ti:'Bahasa Tigrinya', wo:'Bahasa Wolof', ln:'Bahasa Lingala', sn:'Bahasa Shona', sr:'Bahasa Serbia', bg:'Bahasa Bulgaria', sk:'Bahasa Slowakia', lv:'Bahasa Latvia', et:'Bahasa Estonia', be:'Bahasa Belarus', yi:'Bahasa Yiddish', non:'Bahasa Norse Kuno', arc:'Bahasa Aram', cop:'Bahasa Koptik', rom:'Bahasa Romani', br:'Bahasa Breton', xh:'Bahasa Xhosa', lad:'Bahasa Ladino', tlh:'Bahasa Klingon', jbo:'Bahasa Lojban', fj:'Bahasa Fiji', sm:'Bahasa Samoa', zh_han:'Tionghoa (Klasik Han)', zh_tang:'Tionghoa (Klasik Tang)', ceb:'Cebuano', su:'Sunda', th_isan:'Thai (Isan)', es_co:'Spanyol (Kolombia)', es_cl:'Spanyol (Chili)', gl:'Galisia', oc:'Oksitan', fo:'Faroe', jam:'Patois Jamaika', pap:'Papiamento'},
    hi: { ja:'जापानी', ja_osa:'ओसाका बोली', ja_aom:'आओमोरी बोली', ja_oki:'ओकिनावा बोली', ja_hak:'हकाता बोली', ja_edo:'एदो काल जापानी', ko:'कोरियाई', ko_kp:'उत्तर कोरियाई', ko_bus:'बुसान बोली', zh:'चीनी (मंदारिन)', yue:'कैंटोनीज़', nan:'ताइवानी', wuu:'शंघाई भाषा', zh_song:'शास्त्रीय चीनी', vi:'वियतनामी', vi_nom:'चू नोम', th:'थाई', id:'इंडोनेशियाई', sa:'संस्कृत', hi:'हिन्दी', en:'अंग्रेज़ी', en_aave:'English (AAVE)', en_south:'अंग्रेज़ी (दक्षिणी अमेरिका)', en_app:'अंग्रेज़ी (ऐपलेशिया)', en_ie:'अंग्रेज़ी (आयरिश)', en_sco:'अंग्रेज़ी (स्कॉटिश)', en_yk:'अंग्रेज़ी (यॉर्कशायर)', en_ck:'अंग्रेज़ी (कॉकनी)', de:'जर्मन', fr:'फ़्रेंच', it:'इतालवी', es_eu:'स्पेनिश (यूरोप)', es_mx:'स्पेनिश (मेक्सिको)', pt_eu:'पुर्तगाली (यूरोप)', pt_br:'पुर्तगाली (ब्राज़ील)', la:'लैटिन', ru:'रूसी', uk:'यूक्रेनी', ar:'अरबी (मानक)', ar_eg:'अरबी (मिस्री)', he:'हिब्रू', sw:'स्वाहिली', tr:'तुर्की', fa:'फ़ारसी', tl:'तागालोग', ga:'आयरिश', eu:'बास्क', mn:'मंगोलियाई', my:'बर्मी', am:'अम्हारी', egy:'प्राचीन मिस्री', ta:'तमिल', hu:'हंगेरियन', nl:'डच', pl:'पोलिश', ms:'मलय', mg:'मालागासी', cy:'वेल्श', fi:'फ़िनिश', ain:'ऐनु', bn:'बांग्ला', ur:'उर्दू', te:'तेलुगु', jv:'जावानी', ko_jeju:'जेजू', ko_mid:'मध्यकालीन कोरियाई', ko_em:'आधुनिक पूर्व कोरियाई', ka:'जॉर्जियाई', el:'यूनानी', el_grc:'प्राचीन यूनानी', nv:'नवाहो', qu:'क्वेचुआ', mi:'माओरी', haw:'हवाईयन', km:'ख्मेर', lo:'लाओ', yo:'योरूबा', zu:'ज़ुलू', bo:'तिब्बती', hy:'आर्मेनियाई' , ja_kyo:'क्योतो बोली', ja_hir:'हिरोशिमा बोली', ja_mvi:'मियाको', ja_rys:'याएयामा', ar_lev:'अरबी (लेवेंटाइन)', ar_ma:'अरबी (मोरक्को)', ar_gulf:'अरबी (खाड़ी)', zh_sc:'सिचुआनी', zh_db:'उत्तर-पूर्वी चीनी', nap:'नेपोलिटन', scn:'सिसिलियन', de_gsw:'स्विस जर्मन', fr_qc:'क्वेबेक फ़्रेंच', sco:'स्कॉट्स', en_sg:'सिंग्लिश', hwc:'हवाईयन क्रियोल', pcm:'नाइजीरियन पिजिन', tpi:'टोक पिसिन', en_ang:'पुरानी अंग्रेज़ी', sv:'स्वीडिश', no:'नॉर्वेजियन', si:'सिंहली', ro:'रोमानियाई', cs:'चेक', ca:'कातालान', da:'डेनिश', is:'आइसलैंडिक', lt:'लिथुआनियाई', sq:'अल्बानियाई', mt:'माल्टीज़', so:'सोमाली', ml:'मलयालम', pa:'पंजाबी', ku:'कुर्दी', ug:'उइगुर', kk:'कज़ाख़', ha:'हौसा', ig:'इग्बो', eo:'एस्पेरांतो', tok:'तोकी पोना', ht:'हैतियन क्रियोल', ps:'पश्तो', uz:'उज़्बेक', mr:'मराठी', gu:'गुजराती', kn:'कन्नड', ne:'नेपाली', om:'ओरोमो', ti:'तिग्रिन्या', wo:'वोलोफ़', ln:'लिंगाला', sn:'शोना', sr:'सर्बियाई', bg:'बुल्गारियाई', sk:'स्लोवाक', lv:'लातवियाई', et:'एस्तोनियाई', be:'बेलारूसी', yi:'यिद्दिश', non:'पुरानी नॉर्स', arc:'अरामी', cop:'कॉप्टिक', rom:'रोमानी', br:'ब्रेटन', xh:'कोसा', lad:'लाडिनो', tlh:'क्लिंगॉन', jbo:'लोज्बान', fj:'फ़ीजी', sm:'सामोन', zh_han:'चीनी (हान)', zh_tang:'चीनी (तांग)', ceb:'सेबुआनो', su:'सुंडानी', th_isan:'थाई (ईसान)', es_co:'स्पेनी (कोलंबिया)', es_cl:'स्पेनी (चिली)', gl:'गैलिशियन', oc:'ऑक्सिटन', fo:'फ़ैरोइज़', jam:'जमैकन पटवा', pap:'पापियामेंतो'},
    it: { ja:'Giapponese', ja_osa:'Giapponese (Osaka)', ja_aom:'Giapponese (Aomori)', ja_oki:'Giapponese (Okinawa)', ja_hak:'Giapponese (Hakata)', ja_edo:'Giapponese (Edo)', ko:'Coreano', ko_kp:'Coreano (Corea del Nord)', ko_bus:'Coreano (Busan)', zh:'Cinese (mandarino)', yue:'Cantonese', nan:'Taiwanese', wuu:'Shangaiese', zh_song:'Cinese (classico)', vi:'Vietnamita', vi_nom:'Vietnamese (Chữ Nôm)', th:'Tailandese', id:'Indonesiano', sa:'Sanscrito', hi:'Hindi', en:'Inglese', en_aave:'English (AAVE)', en_south:'Inglese (sud USA)', en_app:'Inglese (Appalachia)', en_ie:'Inglese (irlandese)', en_sco:'Inglese (scozzese)', en_yk:'Inglese (Yorkshire)', en_ck:'Inglese (cockney)', de:'Tedesco', fr:'Francese', it:'Italiano', es_eu:'Spagnolo (Europa)', es_mx:'Spagnolo (Messico)', pt_eu:'Portoghese (Europa)', pt_br:'Portoghese (Brasile)', la:'Latino', ru:'Russo', uk:'Ucraino', ar:'Arabo (standard)', ar_eg:'Arabo (egiziano)', he:'Ebraico', sw:'Swahili', tr:'Turco', fa:'Persiano', tl:'Tagalog', ga:'Irlandese', eu:'Basco', mn:'Mongolo', my:'Birmano', am:'Amarico', egy:'Egizio antico', ta:'Tamil', hu:'Ungherese', nl:'Olandese', pl:'Polacco', ms:'Malese', mg:'Malgascio', cy:'Gallese', fi:'Finlandese', ain:'Ainu', bn:'Bengalese', ur:'Urdu', te:'Telugu', jv:'Giavanese', ko_jeju:'Korean (Jeju)', ko_mid:'Middle Korean', ko_em:'Early Modern Korean', ka:'Georgiano', el:'Greco', el_grc:'Greco (antico)', nv:'Navajo', qu:'Quechua', mi:'Māori', haw:'Hawaiano', km:'Khmer', lo:'Lao', yo:'Yoruba', zu:'Zulu', bo:'Tibetano', hy:'Armeno' , ja_kyo:'Giapponese (Kyoto)', ja_hir:'Giapponese (Hiroshima)', ja_mvi:'Miyako', ja_rys:'Yaeyama', ar_lev:'Arabo (levantino)', ar_ma:'Arabo (marocchino)', ar_gulf:'Arabo (del Golfo)', zh_sc:'Chinese (Sichuan)', zh_db:'Cinese (nordorientale)', nap:'Napoletano', scn:'Siciliano', de_gsw:'Tedesco (svizzero)', fr_qc:'Francese (Québec)', sco:'Scots', en_sg:'English (Singapore)', hwc:'Creolo hawaiano', pcm:'Pidgin nigeriano', tpi:'Tok Pisin', en_ang:'Inglese antico', sv:'Svedese', no:'Norvegese', si:'Singalese', ro:'Rumeno', cs:'Ceco', ca:'Catalano', da:'Danese', is:'Islandese', lt:'Lituano', sq:'Albanese', mt:'Maltese', so:'Somalo', ml:'Malayalam', pa:'Punjabi', ku:'Curdo', ug:'Uiguro', kk:'Kazako', ha:'Hausa', ig:'Igbo', eo:'Esperanto', tok:'Toki Pona', ht:'Creolo haitiano', ps:'Pashto', uz:'Uzbeco', mr:'Marathi', gu:'Gujarati', kn:'Kannada', ne:'Nepalese', om:'Oromo', ti:'Tigrino', wo:'Wolof', ln:'Lingala', sn:'Shona', sr:'Serbo', bg:'Bulgaro', sk:'Slovacco', lv:'Lettone', et:'Estone', be:'Bielorusso', yi:'Yiddish', non:'Norreno antico', arc:'Aramaico', cop:'Copto', rom:'Romanì', br:'Bretone', xh:'Xhosa', lad:'Ladino', tlh:'Klingon', jbo:'Lojban', fj:'Figiano', sm:'Samoano', zh_han:'Cinese (Han classico)', zh_tang:'Cinese (Tang classico)', ceb:'Cebuano', su:'Sundanese', th_isan:'Tailandese (Isan)', es_co:'Spagnolo (Colombia)', es_cl:'Spagnolo (Cile)', gl:'Galiziano', oc:'Occitano', fo:'Faroese', jam:'Patois giamaicano', pap:'Papiamento'},
    es_mx: { ja:'Japonés', ja_osa:'Japonés (Osaka)', ja_aom:'Japonés (Aomori)', ja_oki:'Japonés (Okinawa)', ja_hak:'Japonés (Hakata)', ja_edo:'Japonés (Edo)', ko:'Coreano', ko_kp:'Coreano (Corea del Norte)', ko_bus:'Coreano (Busan)', zh:'Chino (mandarín)', yue:'Cantonés', nan:'Taiwanés', wuu:'Shanghainés', zh_song:'Chino (clásico)', vi:'Vietnamita', vi_nom:'Vietnamese (Chữ Nôm)', th:'Tailandés', id:'Indonesio', sa:'Sánscrito', hi:'Hindi', en:'Inglés', en_aave:'English (AAVE)', en_south:'Inglés (sur de EE.UU.)', en_app:'Inglés (Apalaches)', en_ie:'Inglés (irlandés)', en_sco:'Inglés (escocés)', en_yk:'Inglés (Yorkshire)', en_ck:'Inglés (cockney)', de:'Alemán', fr:'Francés', it:'Italiano', es_eu:'Español (Europa)', es_mx:'Español (México)', pt_eu:'Portugués (Europa)', pt_br:'Portugués (Brasil)', la:'Latín', ru:'Ruso', uk:'Ucraniano', ar:'Árabe (estándar)', ar_eg:'Árabe (egipcio)', he:'Hebreo', sw:'Suajili', tr:'Turco', fa:'Persa', tl:'Tagalo', ga:'Irlandés', eu:'Vasco', mn:'Mongol', my:'Birmano', am:'Amárico', egy:'Egipcio antiguo', ta:'Tamil', hu:'Húngaro', nl:'Neerlandés', pl:'Polaco', ms:'Malayo', mg:'Malgache', cy:'Galés', fi:'Finlandés', ain:'Ainu', bn:'Bengalí', ur:'Urdu', te:'Telugu', jv:'Javanés', ko_jeju:'Korean (Jeju)', ko_mid:'Middle Korean', ko_em:'Early Modern Korean', ka:'Georgiano', el:'Griego', el_grc:'Griego (antiguo)', nv:'Navajo', qu:'Quechua', mi:'Maorí', haw:'Hawaiano', km:'Jemer', lo:'Lao', yo:'Yoruba', zu:'Zulú', bo:'Tibetano', hy:'Armenio' , ja_kyo:'Japonés (Kioto)', ja_hir:'Japonés (Hiroshima)', ja_mvi:'Miyako', ja_rys:'Yaeyama', ar_lev:'Árabe (levantino)', ar_ma:'Árabe (marroquí)', ar_gulf:'Árabe (golfo)', zh_sc:'Chino (Sichuan)', zh_db:'Chino (noreste)', nap:'Napolitano', scn:'Siciliano', de_gsw:'Alemán (suizo)', fr_qc:'Francés (Quebec)', sco:'Escocés', en_sg:'English (Singapore)', hwc:'Criollo hawaiano', pcm:'Pidgin nigeriano', tpi:'Tok pisin', en_ang:'Inglés antiguo', sv:'Sueco', no:'Noruego', si:'Cingalés', ro:'Rumano', cs:'Checo', ca:'Catalán', da:'Danés', is:'Islandés', lt:'Lituano', sq:'Albanés', mt:'Maltés', so:'Somalí', ml:'Malayalam', pa:'Punyabí', ku:'Kurdo', ug:'Uigur', kk:'Kazajo', ha:'Hausa', ig:'Igbo', eo:'Esperanto', tok:'Toki Pona', ht:'Criollo haitiano', ps:'Pastún', uz:'Uzbeko', mr:'Maratí', gu:'Guyaratí', kn:'Canarés', ne:'Nepalí', om:'Oromo', ti:'Tigriña', wo:'Wólof', ln:'Lingala', sn:'Shona', sr:'Serbio', bg:'Búlgaro', sk:'Eslovaco', lv:'Letón', et:'Estonio', be:'Bielorruso', yi:'Yidis', non:'Nórdico antiguo', arc:'Arameo', cop:'Copto', rom:'Romaní', br:'Bretón', xh:'Xhosa', lad:'Ladino', tlh:'Klingon', jbo:'Lojban', fj:'Fiyiano', sm:'Samoano', zh_han:'Chino (Clásico Han)', zh_tang:'Chino (Clásico Tang)', ceb:'Cebuano', su:'Sundanés', th_isan:'Tailandés (Isan)', es_co:'Español (Colombia)', es_cl:'Español (Chile)', gl:'Gallego', oc:'Occitano', fo:'Feroés', jam:'Patois jamaicano', pap:'Papiamento'},
    pt_eu: { ja:'Japonês', ja_osa:'Japonés (Osaka)', ja_aom:'Japonés (Aomori)', ja_oki:'Giapponese (Okinawa)', ja_hak:'Dialeto de Hakata', ja_edo:'Japonês de Edo', ko:'Coreano', ko_kp:'Norte-coreano', ko_bus:'Coreano (Busan)', zh:'Chinês (mandarim)', yue:'Cantonês', nan:'Taiwanês', wuu:'Xangaiês', zh_song:'Chinês clássico', vi:'Vietnamita', vi_nom:'Vietnamese (Chữ Nôm)', th:'Tailandês', id:'Indonésio', sa:'Sânscrito', hi:'Hindi', en:'Inglês', en_aave:'English (AAVE)', en_south:'Inglês (sul dos EUA)', en_app:'Inglês (Apalaches)', en_ie:'Inglês (irlandês)', en_sco:'Inglês (escocês)', en_yk:'Inglês (Yorkshire)', en_ck:'Inglês (cockney)', de:'Alemão', fr:'Francês', it:'Italiano', es_eu:'Espanhol (Europa)', es_mx:'Espanhol (México)', pt_eu:'Português (Europa)', pt_br:'Português (Brasil)', la:'Latim', ru:'Russo', uk:'Ucraniano', ar:'Árabe (padrão)', ar_eg:'Árabe (egípcio)', he:'Hebraico', sw:'Suaíli', tr:'Turco', fa:'Persa', tl:'Tagalo', ga:'Irlandês', eu:'Basco', mn:'Mongol', my:'Birmanês', am:'Amárico', egy:'Egípcio antigo', ta:'Tâmil', hu:'Húngaro', nl:'Neerlandês', pl:'Polaco', ms:'Malaio', mg:'Malgaxe', cy:'Galês', fi:'Finlandês', ain:'Ainu', bn:'Bengali', ur:'Urdu', te:'Telugu', jv:'Javanês', ko_jeju:'Korean (Jeju)', ko_mid:'Middle Korean', ko_em:'Early Modern Korean', ka:'Georgiano', el:'Grego', el_grc:'Grego antigo', nv:'Navajo', qu:'Quíchua', mi:'Māori', haw:'Havaiano', km:'Khmer', lo:'Lao', yo:'Iorubá', zu:'Zulu', bo:'Tibetano', hy:'Arménio' , ja_kyo:'Dialecto de Quioto', ja_hir:'Japonés (Hiroshima)', ja_mvi:'Miyako', ja_rys:'Yaeyama', ar_lev:'Árabe (levantino)', ar_ma:'Árabe (marroquino)', ar_gulf:'Árabe (do Golfo)', zh_sc:'Sichuanês', zh_db:'Chinês do nordeste', nap:'Napolitano', scn:'Siciliano', de_gsw:'Alemão suíço', fr_qc:'Francês quebequense', sco:'Escocês', en_sg:'English (Singapore)', hwc:'Crioulo havaiano', pcm:'Pidgin nigeriano', tpi:'Tok Pisin', en_ang:'Inglês antigo', sv:'Sueco', no:'Norueguês', si:'Cingalês', ro:'Romeno', cs:'Checo', ca:'Catalão', da:'Dinamarquês', is:'Islandês', lt:'Lituano', sq:'Albanês', mt:'Maltês', so:'Somali', ml:'Malaiala', pa:'Punjabi', ku:'Curdo', ug:'Uigur', kk:'Cazaque', ha:'Hauçá', ig:'Igbo', eo:'Esperanto', tok:'Toki Pona', ht:'Crioulo haitiano', ps:'Pastó', uz:'Uzbeque', mr:'Marata', gu:'Guzerate', kn:'Canarês', ne:'Nepalês', om:'Oromo', ti:'Tigrínia', wo:'Uolofe', ln:'Lingala', sn:'Xona', sr:'Sérvio', bg:'Búlgaro', sk:'Eslovaco', lv:'Letão', et:'Estónio', be:'Bielorrusso', yi:'Iídiche', non:'Nórdico antigo', arc:'Aramaico', cop:'Copta', rom:'Romani', br:'Bretão', xh:'Xhosa', lad:'Ladino', tlh:'Klingon', jbo:'Lojban', fj:'Fijiano', sm:'Samoano', zh_han:'Chinês (Clássico Han)', zh_tang:'Chinês (Clássico Tang)', ceb:'Cebuano', su:'Sundanês', th_isan:'Tailandês (Isan)', es_co:'Espanhol (Colômbia)', es_cl:'Espanhol (Chile)', gl:'Galego', oc:'Occitano', fo:'Faroês', jam:'Patois jamaicano', pap:'Papiamento'},
    pt_br: { ja:'Japonês', ja_osa:'Dialeto de Osaka', ja_aom:'Dialeto de Aomori', ja_oki:'Giapponese (Okinawa)', ja_hak:'Dialeto de Hakata', ja_edo:'Japonês de Edo', ko:'Coreano', ko_kp:'Norte-coreano', ko_bus:'Dialeto de Busan', zh:'Chinês (mandarim)', yue:'Cantonês', nan:'Taiwanês', wuu:'Xangainês', zh_song:'Chinês clássico', vi:'Vietnamita', vi_nom:'Vietnamese (Chữ Nôm)', th:'Tailandês', id:'Indonésio', sa:'Sânscrito', hi:'Hindi', en:'Inglês', en_aave:'English (AAVE)', en_south:'Inglês (sul dos EUA)', en_app:'Inglês (Apalaches)', en_ie:'Inglês (irlandês)', en_sco:'Inglês (escocês)', en_yk:'Inglês (Yorkshire)', en_ck:'Inglês (cockney)', de:'Alemão', fr:'Francês', it:'Italiano', es_eu:'Espanhol (Europa)', es_mx:'Espanhol (México)', pt_eu:'Português (Europa)', pt_br:'Português (Brasil)', la:'Latim', ru:'Russo', uk:'Ucraniano', ar:'Árabe (padrão)', ar_eg:'Árabe (egípcio)', he:'Hebraico', sw:'Suaíli', tr:'Turco', fa:'Persa', tl:'Tagalo', ga:'Irlandês', eu:'Basco', mn:'Mongol', my:'Birmanês', am:'Amárico', egy:'Egípcio antigo', ta:'Tâmil', hu:'Húngaro', nl:'Neerlandês', pl:'Polonês', ms:'Malaio', mg:'Malgaxe', cy:'Galês', fi:'Finlandês', ain:'Ainu', bn:'Bengali', ur:'Urdu', te:'Telugu', jv:'Javanês', ko_jeju:'Korean (Jeju)', ko_mid:'Middle Korean', ko_em:'Early Modern Korean', ka:'Georgiano', el:'Grego', el_grc:'Grego antigo', nv:'Navajo', qu:'Quíchua', mi:'Māori', haw:'Havaiano', km:'Khmer', lo:'Lao', yo:'Iorubá', zu:'Zulu', bo:'Tibetano', hy:'Arménio' , ja_kyo:'Dialeto de Quioto', ja_hir:'Dialeto de Hiroshima', ja_mvi:'Miyako', ja_rys:'Yaeyama', ar_lev:'Árabe (levantino)', ar_ma:'Árabe (marroquino)', ar_gulf:'Árabe (do Golfo)', zh_sc:'Sichuanês', zh_db:'Chinês do nordeste', nap:'Napolitano', scn:'Siciliano', de_gsw:'Alemão suíço', fr_qc:'Francês quebequense', sco:'Escocês', en_sg:'English (Singapore)', hwc:'Crioulo havaiano', pcm:'Pidgin nigeriano', tpi:'Tok Pisin', en_ang:'Inglês antigo', sv:'Sueco', no:'Norueguês', si:'Cingalês', ro:'Romeno', cs:'Tcheco', ca:'Catalão', da:'Dinamarquês', is:'Islandês', lt:'Lituano', sq:'Albanês', mt:'Maltês', so:'Somali', ml:'Malaiala', pa:'Punjabi', ku:'Curdo', ug:'Uigur', kk:'Cazaque', ha:'Hauçá', ig:'Igbo', eo:'Esperanto', tok:'Toki Pona', ht:'Crioulo haitiano', ps:'Pastó', uz:'Uzbeque', mr:'Marata', gu:'Guzerate', kn:'Canarês', ne:'Nepalês', om:'Oromo', ti:'Tigrínia', wo:'Uolofe', ln:'Lingala', sn:'Xona', sr:'Sérvio', bg:'Búlgaro', sk:'Eslovaco', lv:'Letão', et:'Estoniano', be:'Bielorrusso', yi:'Iídiche', non:'Nórdico antigo', arc:'Aramaico', cop:'Copta', rom:'Romani', br:'Bretão', xh:'Xhosa', lad:'Ladino', tlh:'Klingon', jbo:'Lojban', fj:'Fijiano', sm:'Samoano', zh_han:'Chinês (Clássico Han)', zh_tang:'Chinês (Clássico Tang)', ceb:'Cebuano', su:'Sundanês', th_isan:'Tailandês (Isan)', es_co:'Espanhol (Colômbia)', es_cl:'Espanhol (Chile)', gl:'Galego', oc:'Occitano', fo:'Feroês', jam:'Patois jamaicano', pap:'Papiamento'},
    uk: { ja:'Японська', ja_osa:'Осакський діалект', ja_aom:'Аоморійський діалект', ja_oki:'Окінавська', ja_hak:'Хакатський діалект', ja_edo:'Японська доби Едо', ko:'Корейська', ko_kp:'Північнокорейська', ko_bus:'Пусанський діалект', zh:'Китайська (путунхуа)', yue:'Кантонська', nan:'Тайванська', wuu:'Шанхайська', zh_song:'Веньянь', vi:'В\'єтнамська', vi_nom:'Тьи-ном', th:'Тайська', id:'Індонезійська', sa:'Санскрит', hi:'Гінді', en:'Англійська', en_aave:'English (AAVE)', en_south:'Англійська (південь США)', en_app:'Англійська (Аппалачі)', en_ie:'Англійська (ірландська)', en_sco:'Англійська (шотландська)', en_yk:'Англійська (Йоркшир)', en_ck:'Англійська (кокні)', de:'Німецька', fr:'Французька', it:'Італійська', es_eu:'Іспанська (Європа)', es_mx:'Іспанська (Мексика)', pt_eu:'Португальська (Європа)', pt_br:'Португальська (Бразилія)', la:'Латинська', ru:'Російська', uk:'Українська', ar:'Арабська (стандарт)', ar_eg:'Арабська (єгипетська)', he:'Іврит', sw:'Суахілі', tr:'Турецька', fa:'Перська', tl:'Тагальська', ga:'Ірландська', eu:'Баскська', mn:'Монгольська', my:'Бірманська', am:'Амхарська', egy:'Давньоєгипетська', ta:'Тамільська', hu:'Угорська', nl:'Нідерландська', pl:'Польська', ms:'Малайська', mg:'Малагасійська', cy:'Валлійська', fi:'Фінська', ain:'Айнська', bn:'Бенгальська', ur:'Урду', te:'Телугу', jv:'Яванська', ko_jeju:'Корейский (Чеджу)', ko_mid:'Среднекорейский', ko_em:'Раннеcовременный корейский', ka:'Грузинська', el:'Грецька', el_grc:'Давньогрецька', nv:'Навахо', qu:'Кечуа', mi:'Маорі', haw:'Гавайська', km:'Кхмерська', lo:'Лаоська', yo:'Йоруба', zu:'Зулу', bo:'Тибетська', hy:'Вірменська' , ja_kyo:'Кіотський діалект', ja_hir:'Хіросімський діалект', ja_mvi:'Мійяко', ja_rys:'Яеяма', ar_lev:'Арабська (левантійська)', ar_ma:'Арабська (марокканська)', ar_gulf:'Арабська (затоцька)', zh_sc:'Сичуаньська', zh_db:'Північно-східна китайська', nap:'Неаполітанська', scn:'Сицилійська', de_gsw:'Швейцарська німецька', fr_qc:'Квебекська французька', sco:'Шотландська', en_sg:'Сінгліш', hwc:'Гавайська креольська', pcm:'Нігерійський піджин', tpi:'Ток-пісін', en_ang:'Давньоанглійська', sv:'Шведська', no:'Норвезька', si:'Сингальська', ro:'Румунська', cs:'Чеська', ca:'Каталанська', da:'Данська', is:'Ісландська', lt:'Литовська', sq:'Албанська', mt:'Мальтійська', so:'Сомалійська', ml:'Малаялам', pa:'Панджабі', ku:'Курдська', ug:'Уйгурська', kk:'Казахська', ha:'Хауса', ig:'Ігбо', eo:'Есперанто', tok:'Токі Пона', ht:'Гаїтянська креольська', ps:'Пушту', uz:'Узбецька', mr:'Маратхі', gu:'Гуджараті', kn:'Каннада', ne:'Непальська', om:'Оромо', ti:'Тигринья', wo:'Волоф', ln:'Лінгала', sn:'Шона', sr:'Сербська', bg:'Болгарська', sk:'Словацька', lv:'Латвійська', et:'Естонська', be:'Білоруська', yi:'Їдиш', non:'Давньоскандинавська', arc:'Арамейська', cop:'Коптська', rom:'Циганська', br:'Бретонська', xh:'Коса', lad:'Ладіно', tlh:'Клінгонська', jbo:'Ложбан', fj:'Фіджійська', sm:'Самоанська', zh_han:'Китайська (Хань)', zh_tang:'Китайська (Тан)', ceb:'Себуано', su:'Сунданська', th_isan:'Тайська (Ісан)', es_co:'Іспанська (Колумбія)', es_cl:'Іспанська (Чилі)', gl:'Галісійська', oc:'Окситанська', fo:'Фарерська', jam:'Ямайський патуа', pap:'Папʼяменто'},
};

function langName(code) {
    const names = LANG_NAMES[currentUILang] || LANG_NAMES.ja;
    return names[code] || LANG_NAMES.ja[code] || code;
}

// Language definitions - ordered by linguistic similarity within groups
const LANGUAGES = [
    // Japonic: Standard → Kansai → Western → Northern → Ryukyuan → Historical → Ainu
    { code: 'ja', name: '日本語(標準)', group: 'JPN' },
    { code: 'ja_kyo', name: '日本語(京都弁)', group: 'JPN', experimental: true },
    { code: 'ja_osa', name: '日本語(大阪弁)', group: 'JPN', experimental: true },
    { code: 'ja_hir', name: '日本語(広島弁)', group: 'JPN', experimental: true },
    { code: 'ja_hak', name: '日本語(博多弁)', group: 'JPN', experimental: true },
    { code: 'ja_aom', name: '日本語(青森弁)', group: 'JPN', experimental: true },
    { code: 'ja_oki', name: '日本語(沖縄弁)', group: 'JPN', experimental: true },
    { code: 'ja_mvi', name: '宮古語', group: 'JPN', experimental: true },
    { code: 'ja_rys', name: '八重山語', group: 'JPN', experimental: true },
    // Japonic Historical (chronological: oldest first)
    { code: 'ja_edo', name: '日本語(江戸時代)', group: 'JPN', experimental: true, historical: true },
    { code: 'ja_heian', name: '日本語(平安時代)', group: 'JPN', experimental: true, historical: true },
    // Ainu (isolate)
    { code: 'ain', name: 'アイヌ語', group: 'JPN' },
    // Koreanic: Standard → Dialects → Historical (oldest first)
    { code: 'ko', name: '韓国語(標準)', group: 'KOR' },
    { code: 'ko_kp', name: '韓国語(北朝鮮)', group: 'KOR', experimental: true },
    { code: 'ko_bus', name: '韓国語(釜山弁)', group: 'KOR', experimental: true },
    { code: 'ko_jeju', name: '韓国語(済州)', group: 'KOR', experimental: true },
    { code: 'ko_yb', name: '延辺朝鮮語', group: 'KOR', experimental: true },
    { code: 'ko_em', name: '韓国語(近世)', group: 'KOR', experimental: true, historical: true },
    { code: 'ko_mid', name: '韓国語(中世)', group: 'KOR', experimental: true, historical: true },
    // Sinitic: Mandarin → Southern → Classical
    { code: 'zh', name: '中国語(普通話)', group: 'CHN' },
    { code: 'zh_db', name: '中国語(東北話)', group: 'CHN', experimental: true },
    { code: 'zh_sc', name: '中国語(四川話)', group: 'CHN', experimental: true },
    { code: 'yue', name: '広東語', group: 'CHN' },
    { code: 'nan', name: '台湾語', group: 'CHN' },
    { code: 'wuu', name: '上海語', group: 'CHN' },
    { code: 'hak_cn', name: '客家語', group: 'CHN', experimental: true },
    { code: 'cdo', name: '閩東語', group: 'CHN', experimental: true },
    { code: 'zh_song', name: '中国語(宋明文言)', group: 'CHN', experimental: true, historical: true },
    { code: 'zh_tang', name: '中国語(唐代漢文)', group: 'CHN', experimental: true, historical: true },
    { code: 'zh_han', name: '中国語(漢代漢文)', group: 'CHN', experimental: true, historical: true },
    // Tibeto-Burman
    { code: 'bo', name: 'チベット語', group: 'TIB' },
    { code: 'my', name: 'ミャンマー語', group: 'TIB' },
    { code: 'ii', name: 'イ語', group: 'TIB', experimental: true },
    // Austroasiatic
    { code: 'vi', name: 'ベトナム語', group: 'SEA' },
    { code: 'vi_nom', name: 'ベトナム語(チューノム)', group: 'SEA', experimental: true, historical: true },
    { code: 'km', name: 'クメール語', group: 'SEA' },
    // Tai-Kadai
    { code: 'th', name: 'タイ語', group: 'SEA' },
    { code: 'th_isan', name: 'タイ語(イサーン方言)', group: 'SEA', experimental: true },
    { code: 'th_n', name: 'タイ語(北部)', group: 'SEA', experimental: true },
    { code: 'th_s', name: 'タイ語(南部)', group: 'SEA', experimental: true },
    { code: 'lo', name: 'ラオ語', group: 'SEA' },
    { code: 'za', name: 'チワン語', group: 'SEA', experimental: true },
    { code: 'hmn', name: 'ミャオ語', group: 'SEA', experimental: true },
    // Austronesian: Western → Philippine → Oceanic
    { code: 'id', name: 'インドネシア語', group: 'SEA' },
    { code: 'ms', name: 'マレー語', group: 'SEA' },
    { code: 'jv', name: 'ジャワ語', group: 'SEA' },
    { code: 'su', name: 'スンダ語', group: 'SEA', experimental: true },
    { code: 'tl', name: 'タガログ語', group: 'SEA' },
    { code: 'ceb', name: 'セブアノ語', group: 'SEA', experimental: true },
    { code: 'ilo', name: 'イロカノ語', group: 'SEA', experimental: true },
    { code: 'mg', name: 'マダガスカル語', group: 'AUS' },
    { code: 'mi', name: 'マオリ語', group: 'AUS' },
    { code: 'haw', name: 'ハワイ語', group: 'AUS', experimental: true },
    { code: 'fj', name: 'フィジー語', group: 'AUS', experimental: true },
    { code: 'sm', name: 'サモア語', group: 'AUS', experimental: true },
    { code: 'to', name: 'トンガ語', group: 'AUS', experimental: true },
    // Indo-Aryan: Sanskrit → Hindustani → Eastern → Western → Insular
    { code: 'sa', name: 'サンスクリット語', group: 'SAS', experimental: true, historical: true },
    { code: 'pi', name: 'パーリ語', group: 'SAS', experimental: true, historical: true },
    { code: 'hi', name: 'ヒンディー語', group: 'SAS' },
    { code: 'ur', name: 'ウルドゥー語', group: 'SAS' },
    { code: 'sd', name: 'シンド語', group: 'SAS', experimental: true },
    { code: 'pa', name: 'パンジャーブ語', group: 'SAS' },
    { code: 'bn', name: 'ベンガル語', group: 'SAS' },
    { code: 'as', name: 'アッサム語', group: 'SAS', experimental: true },
    { code: 'or', name: 'オディア語', group: 'SAS', experimental: true },
    { code: 'ne', name: 'ネパール語', group: 'SAS', experimental: true },
    { code: 'bho', name: 'ボージュプリー語', group: 'SAS', experimental: true },
    { code: 'mr', name: 'マラーティー語', group: 'SAS', experimental: true },
    { code: 'gu', name: 'グジャラート語', group: 'SAS', experimental: true },
    { code: 'si', name: 'シンハラ語', group: 'SAS' },
    { code: 'rom', name: 'ロマニ語', group: 'SAS', experimental: true },
    // Dravidian
    { code: 'ta', name: 'タミル語', group: 'SAS' },
    { code: 'te', name: 'テルグ語', group: 'SAS' },
    { code: 'kn', name: 'カンナダ語', group: 'SAS', experimental: true },
    { code: 'ml', name: 'マラヤーラム語', group: 'SAS' },
    // Iranian
    { code: 'fa', name: 'ペルシャ語', group: 'SAS' },
    { code: 'tg', name: 'タジク語', group: 'SAS', experimental: true },
    { code: 'ku', name: 'クルド語', group: 'SAS' },
    { code: 'ckb', name: 'クルド語(ソラニー)', group: 'SAS', experimental: true },
    { code: 'ps', name: 'パシュトー語', group: 'SAS', experimental: true },
    // Turkic
    { code: 'tr', name: 'トルコ語', group: 'TRK' },
    { code: 'az', name: 'アゼルバイジャン語', group: 'TRK', experimental: true },
    { code: 'ug', name: 'ウイグル語', group: 'TRK' },
    { code: 'kk', name: 'カザフ語', group: 'TRK' },
    { code: 'ky', name: 'キルギス語', group: 'TRK', experimental: true },
    { code: 'uz', name: 'ウズベク語', group: 'TRK', experimental: true },
    { code: 'tk', name: 'トルクメン語', group: 'TRK', experimental: true },
    // Mongolic
    { code: 'mn', name: 'モンゴル語', group: 'MON' },
    { code: 'mn_cn', name: '内モンゴルモンゴル語', group: 'MON', experimental: true },
    // Tungusic
    { code: 'mnc', name: '満州語', group: 'TNG', experimental: true, historical: true },
    // Kartvelian
    { code: 'ka', name: 'グルジア語', group: 'KAR' },
    // Semitic: Arabic → Hebrew → Aramaic → Akkadian → Ethiopic → Maltese
    { code: 'ar', name: 'アラビア語(フスハー)', group: 'SEM' },
    { code: 'ar_eg', name: 'アラビア語(エジプト方言)', group: 'SEM', experimental: true },
    { code: 'ar_lev', name: 'アラビア語(レバント方言)', group: 'SEM', experimental: true },
    { code: 'ar_gulf', name: 'アラビア語(湾岸方言)', group: 'SEM', experimental: true },
    { code: 'ar_iq', name: 'アラビア語(イラク方言)', group: 'SEM', experimental: true },
    { code: 'ar_ma', name: 'アラビア語(モロッコ方言)', group: 'SEM', experimental: true },
    { code: 'ar_tn', name: 'アラビア語(チュニジア方言)', group: 'SEM', experimental: true },
    { code: 'ar_sd', name: 'アラビア語(スーダン方言)', group: 'SEM', experimental: true },
    { code: 'he', name: 'ヘブライ語', group: 'SEM' },
    { code: 'arc', name: 'アラム語', group: 'SEM', experimental: true, historical: true },
    { code: 'akk', name: 'アッカド語', group: 'SEM', experimental: true, historical: true },
    { code: 'am', name: 'アムハラ語', group: 'SEM' },
    { code: 'ti', name: 'ティグリニャ語', group: 'SEM', experimental: true },
    { code: 'mt', name: 'マルタ語', group: 'SEM' },
    // Egyptian (Afro-Asiatic, non-Semitic)
    { code: 'egy', name: '古代エジプト語', group: 'ANE', experimental: true, historical: true },
    { code: 'cop', name: 'コプト語', group: 'ANE', experimental: true, historical: true },
    // Sumerian (isolate, Ancient Near East)
    { code: 'sux', name: 'シュメール語', group: 'ANE', experimental: true, historical: true },
    // African: Bantu (East → South) → West African → Cushitic
    { code: 'sw', name: 'スワヒリ語', group: 'AFR' },
    { code: 'rw', name: 'キニヤルワンダ語', group: 'AFR', experimental: true },
    { code: 'ny', name: 'チェワ語', group: 'AFR', experimental: true },
    { code: 'ln', name: 'リンガラ語', group: 'AFR', experimental: true },
    { code: 'sn', name: 'ショナ語', group: 'AFR', experimental: true },
    { code: 'zu', name: 'ズールー語', group: 'AFR' },
    { code: 'xh', name: 'コサ語', group: 'AFR', experimental: true },
    { code: 'yo', name: 'ヨルバ語', group: 'AFR' },
    { code: 'ig', name: 'イグボ語', group: 'AFR' },
    { code: 'ha', name: 'ハウサ語', group: 'AFR' },
    { code: 'wo', name: 'ウォロフ語', group: 'AFR', experimental: true },
    { code: 'so', name: 'ソマリ語', group: 'AFR' },
    { code: 'om', name: 'オロモ語', group: 'AFR', experimental: true },
    // Proto-Indo-European → Anatolian (placed near IE European languages)
    { code: 'ine', name: '印欧祖語', group: 'PIE', experimental: true, historical: true },
    { code: 'hit', name: 'ヒッタイト語', group: 'PIE', experimental: true, historical: true },
    // Germanic: English → dialects → West Germanic → North Germanic → Historical
    { code: 'en', name: '英語', group: 'GER' },
    { code: 'en_aave', name: '英語(AAVE)', group: 'GER', experimental: true },
    { code: 'en_south', name: '英語(アメリカ南部)', group: 'GER', experimental: true },
    { code: 'en_app', name: '英語(アパラチア)', group: 'GER', experimental: true },
    { code: 'en_au', name: '英語(オーストラリア)', group: 'GER', experimental: true },
    { code: 'en_in', name: '英語(インド)', group: 'GER', experimental: true },
    { code: 'en_ie', name: '英語(アイルランド)', group: 'GER', experimental: true },
    { code: 'en_sco', name: '英語(スコットランド)', group: 'GER', experimental: true },
    { code: 'en_yk', name: '英語(ヨークシャー)', group: 'GER', experimental: true },
    { code: 'en_ck', name: '英語(コックニー)', group: 'GER', experimental: true },
    { code: 'en_sg', name: '英語(シンガポール)', group: 'GER', experimental: true },
    { code: 'sco', name: 'スコットランド語', group: 'GER', experimental: true },
    { code: 'nl', name: 'オランダ語', group: 'GER' },
    { code: 'af', name: 'アフリカーンス語', group: 'GER', experimental: true },
    { code: 'fy', name: 'フリジア語', group: 'GER', experimental: true },
    { code: 'de', name: 'ドイツ語', group: 'GER' },
    { code: 'de_gsw', name: 'ドイツ語(スイス)', group: 'GER', experimental: true },
    { code: 'de_at', name: 'ドイツ語(オーストリア)', group: 'GER', experimental: true },
    { code: 'de_by', name: 'ドイツ語(バイエルン)', group: 'GER', experimental: true },
    { code: 'nds', name: '低地ドイツ語', group: 'GER', experimental: true },
    { code: 'yi', name: 'イディッシュ語', group: 'GER', experimental: true },
    { code: 'sv', name: 'スウェーデン語', group: 'GER' },
    { code: 'no', name: 'ノルウェー語', group: 'GER' },
    { code: 'nn', name: 'ノルウェー語(ニーノシュク)', group: 'GER', experimental: true },
    { code: 'da', name: 'デンマーク語', group: 'GER' },
    { code: 'is', name: 'アイスランド語', group: 'GER' },
    { code: 'fo', name: 'フェロー語', group: 'GER', experimental: true },
    { code: 'enm', name: '中英語', group: 'GER', experimental: true, historical: true },
    { code: 'en_ang', name: '古英語', group: 'GER', experimental: true, historical: true },
    { code: 'non', name: '古ノルド語', group: 'GER', experimental: true, historical: true },
    { code: 'got', name: 'ゴート語', group: 'GER', experimental: true, historical: true },
    // Celtic
    { code: 'ga', name: 'アイルランド語', group: 'CEL' },
    { code: 'gd', name: 'スコットランド・ゲール語', group: 'CEL', experimental: true },
    { code: 'cy', name: 'ウェールズ語', group: 'CEL' },
    { code: 'br', name: 'ブルトン語', group: 'CEL', experimental: true },
    // Romance: Latin → Italo-Dalmatian → Gallo-Romance → Ibero-Romance → Eastern
    { code: 'la', name: 'ラテン語', group: 'ROM', experimental: true, historical: true },
    { code: 'it', name: 'イタリア語', group: 'ROM' },
    { code: 'nap', name: 'ナポリ語', group: 'ROM', experimental: true },
    { code: 'scn', name: 'シチリア語', group: 'ROM', experimental: true },
    { code: 'vec', name: 'ヴェネト語', group: 'ROM', experimental: true },
    { code: 'fr', name: 'フランス語', group: 'ROM' },
    { code: 'fr_qc', name: 'フランス語(ケベック)', group: 'ROM', experimental: true },
    { code: 'fr_af', name: 'フランス語(アフリカ)', group: 'ROM', experimental: true },
    { code: 'fr_be', name: 'フランス語(ベルギー)', group: 'ROM', experimental: true },
    { code: 'fr_ch', name: 'フランス語(スイス)', group: 'ROM', experimental: true },
    { code: 'oc', name: 'オック語', group: 'ROM', experimental: true },
    { code: 'ca', name: 'カタルーニャ語', group: 'ROM' },
    { code: 'es_eu', name: 'スペイン語(欧州)', group: 'ROM' },
    { code: 'es_mx', name: 'スペイン語(メキシコ)', group: 'ROM' },
    { code: 'es_co', name: 'スペイン語(コロンビア)', group: 'ROM', experimental: true },
    { code: 'es_cl', name: 'スペイン語(チリ)', group: 'ROM', experimental: true },
    { code: 'es_ar', name: 'スペイン語(アルゼンチン)', group: 'ROM', experimental: true },
    { code: 'es_cu', name: 'スペイン語(キューバ)', group: 'ROM', experimental: true },
    { code: 'es_pe', name: 'スペイン語(ペルー)', group: 'ROM', experimental: true },
    { code: 'es_an', name: 'スペイン語(アンダルシア)', group: 'ROM', experimental: true },
    { code: 'lad', name: 'ラディーノ語', group: 'ROM', experimental: true, historical: true },
    { code: 'gl', name: 'ガリシア語', group: 'ROM', experimental: true },
    { code: 'pt_eu', name: 'ポルトガル語(欧州)', group: 'ROM' },
    { code: 'pt_br', name: 'ポルトガル語(ブラジル)', group: 'ROM' },
    { code: 'ro', name: 'ルーマニア語', group: 'ROM' },
    { code: 'rm', name: 'ロマンシュ語', group: 'ROM', experimental: true },
    { code: 'sc', name: 'サルデーニャ語', group: 'ROM', experimental: true },
    // Slavic: East → West → South
    { code: 'ru', name: 'ロシア語', group: 'SLV' },
    { code: 'uk', name: 'ウクライナ語', group: 'SLV' },
    { code: 'be', name: 'ベラルーシ語', group: 'SLV', experimental: true },
    { code: 'pl', name: 'ポーランド語', group: 'SLV' },
    { code: 'cs', name: 'チェコ語', group: 'SLV' },
    { code: 'sk', name: 'スロバキア語', group: 'SLV', experimental: true },
    { code: 'sl', name: 'スロベニア語', group: 'SLV', experimental: true },
    { code: 'sr', name: 'セルビア語', group: 'SLV', experimental: true },
    { code: 'bg', name: 'ブルガリア語', group: 'SLV', experimental: true },
    { code: 'cu', name: '古教会スラヴ語', group: 'SLV', experimental: true, historical: true },
    // Baltic
    { code: 'lt', name: 'リトアニア語', group: 'OEU' },
    { code: 'lv', name: 'ラトビア語', group: 'OEU', experimental: true },
    // Hellenic
    { code: 'el', name: 'ギリシャ語', group: 'OEU' },
    { code: 'el_grc', name: 'ギリシャ語(古代)', group: 'OEU', experimental: true, historical: true },
    // Albanian
    { code: 'sq', name: 'アルバニア語', group: 'OEU' },
    // Armenian
    { code: 'hy', name: 'アルメニア語', group: 'OEU' },
    // Uralic: Finnic → Hungarian
    { code: 'fi', name: 'フィンランド語', group: 'OEU' },
    { code: 'et', name: 'エストニア語', group: 'OEU', experimental: true },
    { code: 'se', name: '北サーミ語', group: 'OEU', experimental: true },
    { code: 'hu', name: 'ハンガリー語', group: 'OEU' },
    // Basque (isolate)
    { code: 'eu', name: 'バスク語', group: 'OEU' },
    // Americas
    { code: 'nv', name: 'ナバホ語', group: 'AMR', experimental: true },
    { code: 'qu', name: 'ケチュア語', group: 'AMR', experimental: true },
    { code: 'gn', name: 'グアラニー語', group: 'AMR', experimental: true },
    { code: 'iu', name: 'イヌクティトゥット語', group: 'AMR', experimental: true },
    { code: 'chr', name: 'チェロキー語', group: 'AMR', experimental: true },
    { code: 'nci', name: '古典ナワトル語', group: 'AMR', experimental: true, historical: true },
    { code: 'myn', name: '古典マヤ語', group: 'AMR', experimental: true, historical: true },
    // Creoles & Pidgins
    { code: 'hwc', name: 'ハワイ・クレオール', group: 'CRL', experimental: true },
    { code: 'pcm', name: 'ナイジェリア・ピジン', group: 'CRL', experimental: true },
    { code: 'tpi', name: 'トク・ピシン', group: 'CRL', experimental: true },
    { code: 'ht', name: 'ハイチクレオール', group: 'CRL' },
    { code: 'jam', name: 'ジャマイカ・パトワ', group: 'CRL', experimental: true },
    { code: 'pap', name: 'パピアメント語', group: 'CRL', experimental: true },
    // Constructed
    { code: 'eo', name: 'エスペラント', group: 'CON' },
    { code: 'tok', name: 'トキポナ', group: 'CON' },
    { code: 'jbo', name: 'ロジバン', group: 'CON', experimental: true },
    { code: 'tlh', name: 'クリンゴン語', group: 'CON', experimental: true },
];

const DEFAULT_ORDER = LANGUAGES.map(l => l.code);
const EXPERIMENTAL_LANGS = new Set(LANGUAGES.filter(l => l.experimental).map(l => l.code));
const HISTORICAL_LANGS = new Set(LANGUAGES.filter(l => l.historical).map(l => l.code));
const MAJOR_LANGS = new Set(['ja', 'ko', 'zh', 'en', 'es_mx', 'ar']);
const NO_SPACE_LANGS = new Set(['ja', 'ja_kyo', 'ja_osa', 'ja_hir', 'ja_hak', 'ja_aom', 'ja_oki', 'ja_mvi', 'ja_rys', 'ja_edo', 'ja_heian', 'zh', 'zh_db', 'zh_sc', 'yue', 'nan', 'wuu', 'hak_cn', 'cdo', 'zh_song', 'zh_tang', 'zh_han', 'th', 'th_isan', 'th_n', 'th_s', 'lo', 'my', 'km', 'vi_nom', 'ii', 'egy']);

// State — only major languages are ON by default
let enabledLangs = new Set(MAJOR_LANGS);
let langOrder = [...DEFAULT_ORDER];
let currentSentenceIdx = 0;
let redrawTimer = null;
let suppressHashUpdate = false;
let rtlNative = false; // true = show RTL languages in native reading direction

const RTL_LANGS = new Set(['ar', 'ar_eg', 'ar_lev', 'ar_ma', 'ar_gulf', 'he', 'fa', 'ur', 'sd']);

// --- URL hash state management ---
// New URLs use explicit key=value format for stability across language additions.
// Old compact format (base62) is still decoded for backward compatibility.

const DEFAULT_ENABLED = new Set(MAJOR_LANGS);
const UI_LANG_CODES = Object.keys(UI_STRINGS);

// --- Stable URL generation (key=value format) ---
function stateToHash() {
    const parts = [];
    parts.push('s=' + currentSentenceIdx);

    // Always include enabled langs and their order for URL stability
    const enabledOrder = langOrder.filter(c => enabledLangs.has(c));
    parts.push('l=' + enabledOrder.join(','));

    // Only include UI lang if not browser default
    if (currentUILang !== detectBrowserLang()) {
        parts.push('ui=' + currentUILang);
    }

    if (rtlNative) parts.push('rtl=1');

    return parts.join('&');
}

// --- Frozen compact format decoder (backward compat for old URLs) ---
// These indices were valid when compact URLs were generated.
// NEVER modify this list — it exists solely to decode old URLs.
const FROZEN_INDEX_LANG = ['ja','ja_osa','ja_hak','ja_oki','ja_aom','ja_edo','ko','ko_kp','ko_bus','mn','tr','zh','yue','nan','wuu','zh_song','vi','vi_nom','th','my','id','ms','tl','sa','hi','ta','fa','ar','ar_eg','he','am','egy','sw','en','nl','de','ga','la','fr','it','es_eu','es_mx','pt_eu','pt_br','eu','ru','uk','pl','hu'];
const FROZEN_LANG_INDEX = Object.fromEntries(FROZEN_INDEX_LANG.map((c, i) => [c, i]));
const FROZEN_NUM_LANGS = FROZEN_INDEX_LANG.length;
const FROZEN_UI_LANG_CODES = ['ja','ko','zh','yue','vi','th','id','hi','en','de','fr','it','es_eu','es_mx','pt_eu','pt_br','ru','uk','ar','he','sw'];
const FROZEN_LANG_BITS_MOD = Math.pow(2, FROZEN_NUM_LANGS);

const B62 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function fromB62(s) {
    let n = 0;
    for (const c of s) { n = n * 62 + B62.indexOf(c); }
    return n;
}

function unpackCompact(n) {
    const s = n % 100; n = Math.floor(n / 100);
    const langBits = n % FROZEN_LANG_BITS_MOD; n = Math.floor(n / FROZEN_LANG_BITS_MOD);
    const ui = n % 32; n = Math.floor(n / 32);
    const rtl = n % 2;
    return { s, langBits, ui, rtl };
}

function updateURL() {
    if (suppressHashUpdate) return;
    const newHash = '#' + stateToHash();
    if (location.hash !== newHash) {
        history.pushState(null, '', newHash);
    }
}

function loadFromHash() {
    const hash = location.hash.slice(1);
    if (!hash) return;

    // Key=value format (stable, current): s=0&l=ja,ko&ui=en
    if (hash.includes('=')) { loadFromKeyValue(hash); return; }

    // Old compact format (base62): decode with frozen indices for backward compat
    loadFromCompact(hash);
}

function loadFromKeyValue(hash) {
    const params = new URLSearchParams(hash);
    if (params.has('s')) {
        const idx = parseInt(params.get('s'));
        if (idx >= 0 && idx < SENTENCES.length) currentSentenceIdx = idx;
    }
    if (params.has('l')) {
        const codes = params.get('l').split(',').filter(c => DEFAULT_ORDER.includes(c));
        if (codes.length > 0) {
            enabledLangs = new Set(codes);
            // Restore language order from l= parameter order
            const orderedSet = new Set(codes);
            const rest = DEFAULT_ORDER.filter(c => !orderedSet.has(c));
            langOrder = [...codes, ...rest];
        }
    }
    if (params.has('ui') && UI_STRINGS[params.get('ui')]) currentUILang = params.get('ui');
    if (params.has('rtl')) rtlNative = params.get('rtl') === '1';
}

function loadFromCompact(hash) {
    const [packed, orderStr] = hash.split('-');
    const n = fromB62(packed);
    const { s, langBits, ui, rtl } = unpackCompact(n);

    if (s >= 0 && s < SENTENCES.length) currentSentenceIdx = s;

    const langs = new Set();
    for (let i = 0; i < FROZEN_NUM_LANGS; i++) {
        if (Math.floor(langBits / 2 ** i) % 2) {
            const code = FROZEN_INDEX_LANG[i];
            if (DEFAULT_ORDER.includes(code)) langs.add(code);
        }
    }
    if (langs.size > 0) enabledLangs = langs;

    if (ui < FROZEN_UI_LANG_CODES.length) {
        const uiCode = FROZEN_UI_LANG_CODES[ui];
        if (UI_STRINGS[uiCode]) currentUILang = uiCode;
    }
    rtlNative = rtl === 1;

    if (orderStr) {
        const orderedEnabled = [];
        for (const ch of orderStr) {
            const idx = B62.indexOf(ch);
            if (idx >= 0 && idx < FROZEN_NUM_LANGS) {
                const code = FROZEN_INDEX_LANG[idx];
                if (DEFAULT_ORDER.includes(code)) orderedEnabled.push(code);
            }
        }
        if (orderedEnabled.length > 0) {
            langOrder = [];
            let oi = 0;
            for (const c of DEFAULT_ORDER) {
                if (enabledLangs.has(c)) {
                    if (oi < orderedEnabled.length) {
                        langOrder.push(orderedEnabled[oi++]);
                    }
                } else {
                    langOrder.push(c);
                }
            }
            while (oi < orderedEnabled.length) {
                langOrder.push(orderedEnabled[oi++]);
            }
        }
    }
}

// Reset all state to defaults
function resetToDefaults() {
    currentSentenceIdx = 0;
    enabledLangs = new Set(MAJOR_LANGS);
    langOrder = [...DEFAULT_ORDER];
    currentUILang = detectBrowserLang();
    rtlNative = false;
    history.pushState(null, '', location.pathname);
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
    initCSVLangSelect();
    updateLangSummary();
    syncUIFromState();
    applyUILang();

    // Redraw lines on resize
    window.addEventListener('resize', scheduleRedrawLines);
    const container = document.getElementById('mapContainer');
    if (window.ResizeObserver) {
        new ResizeObserver(scheduleRedrawLines).observe(container);
    }

    // Handle browser back/forward
    window.addEventListener('popstate', () => {
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

    // Update language summary pills
    updateLangSummary();
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
        lblLangToggle: 'langToggle', btnRandom: 'random',
        btnSavePng: 'savePng', btnSaveSvg: 'saveSvg',
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
    // Update language summary pills and modal button
    updateLangSummary();
    // Update modal button labels
    const modalTitle = document.getElementById('langModalTitle');
    if (modalTitle) modalTitle.textContent = t('selectLangsTitle');
    const modalConfirm = document.getElementById('btnModalConfirm');
    if (modalConfirm) modalConfirm.textContent = t('modalConfirm');
    const modalCancel = document.getElementById('btnModalCancel');
    if (modalCancel) modalCancel.textContent = t('modalCancel');
    const modalAllOn = document.getElementById('btnModalAllOn');
    if (modalAllOn) modalAllOn.textContent = t('allOn');
    const modalAllOff = document.getElementById('btnModalAllOff');
    if (modalAllOff) modalAllOff.textContent = t('allOff');
    // Re-render map to update row labels
    render();
}

function toggleRtlNative(on) {
    rtlNative = on;
    render();
}

function toggleAllLangs(on) {
    enabledLangs = on ? new Set(DEFAULT_ORDER) : new Set();
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

// Temporary set for modal editing (committed on confirm)
let modalPendingLangs = null;

function hasLangData(code) {
    return SENTENCES.some(s => s.langs[code]);
}

function createModalToggle(lang) {
    const pending = !hasLangData(lang.code);
    const isOn = modalPendingLangs.has(lang.code) && !pending;
    const label = document.createElement('label');
    label.className = 'lang-toggle' + (isOn ? ' active' : '');
    if (lang.experimental) label.classList.add('experimental');
    if (pending) label.classList.add('pending');
    const badge = pending ? '<span class="pending-badge">準備中</span>'
        : lang.historical ? '<span class="hist-badge">Hist</span>'
        : lang.experimental ? '<span class="exp-badge">Exp</span>' : '';
    label.innerHTML = `
        <span class="dot"></span>
        <input type="checkbox" ${isOn ? 'checked' : ''} ${pending ? 'disabled' : ''} data-lang="${lang.code}">
        <span>${langName(lang.code)}</span>${badge}
    `;
    label.addEventListener('click', (e) => {
        e.preventDefault();
        if (pending) return;
        const cb = label.querySelector('input');
        cb.checked = !cb.checked;
        if (cb.checked) {
            modalPendingLangs.add(lang.code);
            label.classList.add('active');
        } else {
            modalPendingLangs.delete(lang.code);
            label.classList.remove('active');
        }
    });
    return label;
}

const GROUP_NAMES = {
    ja: { JPN:'日本語', KOR:'韓国語', CHN:'中国語', TIB:'チベット・ビルマ語', SEA:'東南アジア', AUS:'オーストロネシア(大洋州)', SAS:'南アジア', TRK:'テュルク語族', MON:'モンゴル語族', TNG:'ツングース語族', KAR:'カルトヴェリ語族', SEM:'セム語', ANE:'古代近東', AFR:'アフリカ', PIE:'印欧祖語', GER:'ゲルマン語', CEL:'ケルト語', ROM:'ロマンス語', SLV:'スラヴ語', OEU:'バルト・ギリシャ・ウラル他', AMR:'アメリカ先住民', CRL:'クレオール・ピジン', CON:'人工言語' },
    en: { JPN:'Japanese', KOR:'Korean', CHN:'Sinitic', TIB:'Tibeto-Burman', SEA:'SE Asian & Austronesian', AUS:'Austronesian (Oceanic)', SAS:'South Asian', TRK:'Turkic', MON:'Mongolic', TNG:'Tungusic', KAR:'Kartvelian', SEM:'Semitic', ANE:'Ancient Near East', AFR:'African', PIE:'Proto-Indo-European', GER:'Germanic', CEL:'Celtic', ROM:'Romance', SLV:'Slavic', OEU:'Baltic, Hellenic, Uralic & more', AMR:'Americas', CRL:'Creoles & Pidgins', CON:'Constructed' },
};

function groupLabel(groupCode) {
    const names = GROUP_NAMES[currentUILang] || GROUP_NAMES.en;
    return names[groupCode] || GROUP_NAMES.en[groupCode] || groupCode;
}

function updateLangSummary() {
    const container = document.getElementById('langSummary');
    container.innerHTML = '';
    // Show pills for enabled languages in LANGUAGES order
    for (const lang of LANGUAGES) {
        if (!enabledLangs.has(lang.code)) continue;
        const pill = document.createElement('span');
        pill.className = 'lang-pill' + (lang.experimental ? ' experimental' : '');
        pill.textContent = langName(lang.code);
        container.appendChild(pill);
    }
    // Update the static button text
    const btn = document.getElementById('btnOpenLangModal');
    if (btn) {
        const ready = LANGUAGES.filter(l => hasLangData(l.code)).length;
        const pending = LANGUAGES.length - ready;
        btn.textContent = t('selectLangs').replace('{n}', ready).replace('{p}', pending);
    }
}

function openLangModal() {
    modalPendingLangs = new Set([...enabledLangs].filter(c => hasLangData(c)));
    const body = document.getElementById('langModalBody');
    body.innerHTML = '';

    // Build groups preserving LANGUAGES order
    const groups = [];
    const groupMap = {};
    for (const lang of LANGUAGES) {
        if (!groupMap[lang.group]) {
            groupMap[lang.group] = [];
            groups.push(lang.group);
        }
        groupMap[lang.group].push(lang);
    }
    for (const groupCode of groups) {
        const langs = groupMap[groupCode];
        const groupDiv = document.createElement('div');
        groupDiv.className = 'lang-group';

        const header = document.createElement('span');
        header.className = 'lang-group-label';
        header.textContent = groupLabel(groupCode);
        groupDiv.appendChild(header);

        const toggles = document.createElement('div');
        toggles.className = 'lang-group-toggles';
        langs.forEach(lang => toggles.appendChild(createModalToggle(lang)));
        groupDiv.appendChild(toggles);

        body.appendChild(groupDiv);
    }

    const overlay = document.getElementById('langModalOverlay');
    overlay.classList.add('open');
    // Close on overlay background click
    overlay.onclick = (e) => { if (e.target === overlay) closeLangModal(false); };
}

function closeLangModal(confirm) {
    if (confirm && modalPendingLangs) {
        // Find newly added languages
        const added = [...modalPendingLangs].filter(c => !enabledLangs.has(c));
        enabledLangs = modalPendingLangs;
        // Insert newly enabled languages in default order
        for (const code of added) {
            insertLangInOrder(code);
        }
        updateLangSummary();
        render();
    }
    modalPendingLangs = null;
    document.getElementById('langModalOverlay').classList.remove('open');
}

function modalToggleAll(on) {
    const body = document.getElementById('langModalBody');
    if (on) {
        modalPendingLangs = new Set(DEFAULT_ORDER);
    } else {
        modalPendingLangs = new Set();
    }
    body.querySelectorAll('.lang-toggle').forEach(label => {
        const cb = label.querySelector('input');
        if (!cb) return;
        const code = cb.dataset.lang;
        cb.checked = modalPendingLangs.has(code);
        label.classList.toggle('active', modalPendingLangs.has(code));
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
function buildSegmentTooltip(sentence, segId) {
    const refLangs = ['ja', 'zh', 'en', 'es_mx', 'ar'];
    const labels = { ja: '日', zh: '中', en: '英', es_mx: '西', ar: '阿' };
    const lines = [];
    for (const lang of refLangs) {
        const segs = sentence.langs[lang];
        if (!segs) continue;
        const subIds = segId.split('|');
        const texts = segs.filter(s => subIds.some(id => s[0] === id || s[0].split('|').includes(id))).map(s => s[1]);
        if (texts.length > 0) {
            lines.push(`${labels[lang]}: ${texts.join(' ')}`);
        }
    }
    return lines.join('\n');
}

function render() {
    const sentence = SENTENCES[currentSentenceIdx];
    if (!sentence) return;

    editingRow = null;

    // Reset SVG lines to prevent stale width from previous sentence causing right margin
    const svg = document.getElementById('linesSvg');
    if (svg) {
        svg.innerHTML = '';
        svg.setAttribute('width', 0);
        svg.setAttribute('height', 0);
        svg.style.width = '0';
        svg.style.height = '0';
    }

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
        if (HISTORICAL_LANGS.has(code)) {
            label.innerHTML = langName(code) + '<span class="hist-badge">Hist</span>';
        } else {
            label.textContent = langName(code);
        }
        row.appendChild(label);

        const textDiv = document.createElement('div');
        textDiv.className = 'lang-text';

        langData.forEach(([segId, text], i) => {
            const seg = document.createElement('span');
            seg.className = 'segment';
            seg.dataset.seg = segId;
            seg.dataset.lang = code;
            // Handle compound segments (e.g. "B|D")
            const subIds = segId.split('|');
            const segColor = subIds.length > 1
                ? null  // handled via gradient below
                : (sentence.segments[segId]?.color || '#666');
            if (subIds.length > 1) {
                const colors = subIds.map(id => sentence.segments[id]?.color || '#666');
                seg.style.backgroundImage = `linear-gradient(90deg, ${colors.join(', ')})`;
                seg.style.webkitBackgroundClip = 'text';
                seg.style.backgroundClip = 'text';
                seg.style.color = 'transparent';
                seg.classList.add('segment-compound');
            } else {
                seg.style.color = segColor;
            }
            seg.dataset.rawText = text;
            if (code === 'egy' && text.includes('|')) {
                const [hiero, translit] = text.split('|');
                seg.classList.add('segment-dual');
                const hieroWords = hiero.split(' ');
                const translitWords = translit.split(' ');
                hieroWords.forEach((hw, wi) => {
                    const pair = document.createElement('span');
                    pair.className = 'hiero-pair';
                    const hieroSpan = document.createElement('span');
                    hieroSpan.className = 'segment-hiero';
                    hieroSpan.textContent = hw;
                    const translitSpan = document.createElement('span');
                    translitSpan.className = 'segment-translit';
                    translitSpan.textContent = translitWords[wi] || '';
                    pair.appendChild(hieroSpan);
                    pair.appendChild(translitSpan);
                    seg.appendChild(pair);
                });
            } else {
                seg.textContent = text;
            }
            seg.title = buildSegmentTooltip(sentence, segId);
            textDiv.appendChild(seg);

            // Add space between segments
            if (i < langData.length - 1) {
                const space = document.createElement('span');
                space.className = 'segment-space';
                textDiv.appendChild(space);
            }
        });

        // Add sentence-ending punctuation if applicable
        if (sentence.type === 'question') {
            // Language-specific question marks
            const SPANISH_LANGS = new Set(['es_eu','es_mx','es_ar','es_co','es_cl','es_cu','es_pe','es_an','lad','gl','ca']);
            const ARABIC_QM_LANGS = new Set(['ar','ar_eg','ar_lev','ar_ma','ar_gulf','ar_iq','ar_tn','ar_sd','fa','ur','sd','ps','ckb']);
            const GREEK_LANGS = new Set(['el','el_grc']);
            const ETHIOPIC_LANGS = new Set(['am','ti']);
            const NO_QM_LANGS = new Set(['th','th_isan','th_n','th_s','lo','km']); // question particles, no mark needed
            if (SPANISH_LANGS.has(code)) {
                const openPunct = document.createElement('span');
                openPunct.className = 'segment-punct';
                openPunct.textContent = '¿';
                textDiv.insertBefore(openPunct, textDiv.firstChild);
                const closePunct = document.createElement('span');
                closePunct.className = 'segment-punct';
                closePunct.textContent = '?';
                textDiv.appendChild(closePunct);
            } else if (ARABIC_QM_LANGS.has(code)) {
                const punct = document.createElement('span');
                punct.className = 'segment-punct';
                punct.textContent = '؟';
                textDiv.appendChild(punct);
            } else if (GREEK_LANGS.has(code)) {
                const punct = document.createElement('span');
                punct.className = 'segment-punct';
                punct.textContent = ';';
                textDiv.appendChild(punct);
            } else if (ETHIOPIC_LANGS.has(code)) {
                const punct = document.createElement('span');
                punct.className = 'segment-punct';
                punct.textContent = '፧';
                textDiv.appendChild(punct);
            } else if (code === 'hy') {
                const punct = document.createElement('span');
                punct.className = 'segment-punct';
                punct.textContent = '՞';
                textDiv.appendChild(punct);
            } else if (!NO_QM_LANGS.has(code)) {
                const punct = document.createElement('span');
                punct.className = 'segment-punct';
                punct.textContent = '?';
                textDiv.appendChild(punct);
            }
        }

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
            let text = langData.map(seg => { const t = seg[1]; return t.includes('|') ? t.split('|')[0] : t; }).join(NO_SPACE_LANGS.has(code) ? '' : ' ');
            if (sentence.type === 'question') {
                const SPANISH_LANGS = new Set(['es_eu','es_mx','es_ar','es_co','es_cl','es_cu','es_pe','es_an','lad','gl','ca']);
                const ARABIC_QM_LANGS = new Set(['ar','ar_eg','ar_lev','ar_ma','ar_gulf','ar_iq','ar_tn','ar_sd','fa','ur','sd','ps','ckb']);
                const GREEK_LANGS = new Set(['el','el_grc']);
                const ETHIOPIC_LANGS = new Set(['am','ti']);
                const NO_QM_LANGS = new Set(['th','th_isan','th_n','th_s','lo','km']);
                if (SPANISH_LANGS.has(code)) { text = '¿' + text + '?'; }
                else if (ARABIC_QM_LANGS.has(code)) { text += '؟'; }
                else if (GREEK_LANGS.has(code)) { text += ';'; }
                else if (ETHIOPIC_LANGS.has(code)) { text += '፧'; }
                else if (code === 'hy') { text += '՞'; }
                else if (!NO_QM_LANGS.has(code)) { text += '?'; }
            }
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
        const pos = { lang: el.dataset.lang, x, y, top: elRect.top - rect.top - 2 };

        // Register compound segments (e.g. "B|D") under each sub-ID
        const subIds = segId.split('|');
        for (const id of subIds) {
            if (!segPositions[id]) segPositions[id] = [];
            segPositions[id].push(pos);
        }
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
// Cache for embedded font data
let _embeddedHieroFont = null;

async function fetchHieroFontBase64() {
    if (_embeddedHieroFont) return _embeddedHieroFont;
    try {
        // Fetch Google Fonts CSS to get the actual font URL
        const cssResp = await fetch('https://fonts.googleapis.com/css2?family=Noto+Sans+Egyptian+Hieroglyphs&display=swap');
        const cssText = await cssResp.text();
        const urlMatch = cssText.match(/url\((https:\/\/[^)]+\.woff2)\)/);
        if (!urlMatch) return null;
        // Fetch the font binary
        const fontResp = await fetch(urlMatch[1]);
        const fontBuf = await fontResp.arrayBuffer();
        const bytes = new Uint8Array(fontBuf);
        let binary = '';
        for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
        const base64 = btoa(binary);
        _embeddedHieroFont = base64;
        return base64;
    } catch (e) {
        console.warn('Failed to fetch hieroglyph font for embedding:', e);
        return null;
    }
}

async function buildExportSVG() {
    const container = document.getElementById('mapContainer');

    // Temporarily force desktop layout for export (remove mobile constraints)
    container.classList.add('export-mode');
    // Force reflow so getBoundingClientRect reflects the new layout
    container.offsetHeight;

    const containerRect = container.getBoundingClientRect();
    const langRows = document.getElementById('langRows');
    const w = container.scrollWidth;
    // Use actual content height (langRows) + padding, not scrollHeight which may include SVG overflow
    const padding = 30; // matches CSS padding
    const h = langRows ? langRows.offsetHeight + padding * 2 : container.scrollHeight;

    // Check if we have Egyptian hieroglyph content
    const hasHiero = container.querySelector('.segment-dual') !== null;
    let fontStyle = '';
    if (hasHiero) {
        const fontBase64 = await fetchHieroFontBase64();
        if (fontBase64) {
            fontStyle = `<defs><style>@font-face { font-family: 'Noto Sans Egyptian Hieroglyphs'; src: url(data:font/woff2;base64,${fontBase64}) format('woff2'); }</style></defs>`;
        }
    }

    let svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">`;
    svgContent += fontStyle;
    svgContent += `<rect width="${w}" height="${h}" fill="white"/>`;

    // Copy the SVG lines
    const linesSvg = document.getElementById('linesSvg');
    if (linesSvg) {
        linesSvg.querySelectorAll('path').forEach(path => {
            svgContent += `<path d="${path.getAttribute('d')}" stroke="${path.getAttribute('stroke')}" stroke-width="${path.getAttribute('stroke-width')}" fill="none" opacity="${path.getAttribute('opacity')}"/>`;
        });
    }

    // Helper to get computed styles for SVG text rendering
    function getSvgTextAttrs(el) {
        const cs = getComputedStyle(el);
        const fontSize = cs.fontSize; // e.g. "16px"
        const fontWeight = cs.fontWeight;
        const fontFamily = cs.fontFamily;
        return { fontSize, fontWeight, fontFamily: escapeXml(fontFamily) };
    }

    // Render text elements
    const rows = container.querySelectorAll('.lang-row');
    rows.forEach(row => {
        const label = row.querySelector('.lang-label');
        if (label) {
            const r = label.getBoundingClientRect();
            const x = r.left - containerRect.left;
            const y = r.top - containerRect.top + r.height * 0.75;
            const a = getSvgTextAttrs(label);
            svgContent += `<text x="${x}" y="${y}" font-family="${a.fontFamily}" font-size="${a.fontSize}" font-weight="${a.fontWeight}" fill="#333">${escapeXml(label.textContent)}</text>`;
        }
        row.querySelectorAll('.segment').forEach(seg => {
            const color = seg.style.color;
            if (seg.classList.contains('segment-dual')) {
                // Render each hiero-pair: hieroglyph above, transliteration below
                seg.querySelectorAll('.hiero-pair').forEach(pair => {
                    const hieroEl = pair.querySelector('.segment-hiero');
                    const translitEl = pair.querySelector('.segment-translit');
                    if (hieroEl) {
                        const r = hieroEl.getBoundingClientRect();
                        const x = r.left - containerRect.left;
                        const y = r.top - containerRect.top + r.height * 0.75;
                        const a = getSvgTextAttrs(hieroEl);
                        svgContent += `<text x="${x}" y="${y}" font-family="${a.fontFamily}" font-size="${a.fontSize}" font-weight="${a.fontWeight}" fill="${color}">${escapeXml(hieroEl.textContent)}</text>`;
                    }
                    if (translitEl) {
                        const r = translitEl.getBoundingClientRect();
                        const x = r.left - containerRect.left;
                        const y = r.top - containerRect.top + r.height * 0.75;
                        const a = getSvgTextAttrs(translitEl);
                        svgContent += `<text x="${x}" y="${y}" font-family="${a.fontFamily}" font-size="${a.fontSize}" font-weight="${a.fontWeight}" fill="${color}" opacity="0.65">${escapeXml(translitEl.textContent)}</text>`;
                    }
                });
            } else {
                const r = seg.getBoundingClientRect();
                const x = r.left - containerRect.left;
                const y = r.top - containerRect.top + r.height * 0.75;
                const a = getSvgTextAttrs(seg);
                svgContent += `<text x="${x}" y="${y}" font-family="${a.fontFamily}" font-size="${a.fontSize}" font-weight="${a.fontWeight}" fill="${color}">${escapeXml(seg.textContent)}</text>`;
            }
        });
    });

    svgContent += `</svg>`;

    // Restore mobile layout
    container.classList.remove('export-mode');

    return svgContent;
}

function escapeXml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

async function downloadAsPNG() {
    const svgData = await buildExportSVG();
    const container = document.getElementById('mapContainer');
    const langRows = document.getElementById('langRows');
    const padding = 30;
    const scale = 2;
    const canvas = document.createElement('canvas');
    canvas.width = container.scrollWidth * scale;
    canvas.height = (langRows ? langRows.offsetHeight + padding * 2 : container.scrollHeight) * scale;
    const ctx = canvas.getContext('2d');
    ctx.scale(scale, scale);

    const img = new Image();
    img.onload = () => {
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        const link = document.createElement('a');
        link.download = 'langmap-s' + currentSentenceIdx + '-' + fileTimestamp() + '.png';
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

async function downloadAsSVG() {
    const svgData = await buildExportSVG();
    const blob = new Blob([svgData], { type: 'image/svg+xml' });
    const link = document.createElement('a');
    link.download = 'langmap-s' + currentSentenceIdx + '-' + fileTimestamp() + '.svg';
    link.href = URL.createObjectURL(blob);
    link.click();
}

// CSV export
function initCSVLangSelect() {
    const sel = document.getElementById('csvLangSelect');
    if (!sel) return;
    sel.innerHTML = '';
    let currentGroup = '';
    let optgroup = null;
    LANGUAGES.forEach(lang => {
        if (lang.group !== currentGroup) {
            currentGroup = lang.group;
            optgroup = document.createElement('optgroup');
            optgroup.label = groupLabel(currentGroup);
            sel.appendChild(optgroup);
        }
        const opt = document.createElement('option');
        opt.value = lang.code;
        opt.textContent = langName(lang.code);
        (optgroup || sel).appendChild(opt);
    });
}

function downloadAsCSV() {
    const sel = document.getElementById('csvLangSelect');
    if (!sel) return;
    const langCode = sel.value;
    const rows = [];
    // Check if this language uses transliteration (| separator)
    const hasTranslit = SENTENCES.some(s => s.langs[langCode]?.some(([, t]) => t.includes('|')));
    // Find max segment count
    let maxSegs = 0;
    SENTENCES.forEach(s => {
        const langData = s.langs[langCode];
        if (langData && langData.length > maxSegs) maxSegs = langData.length;
    });
    // Header: No., English, FullText, then (SegID, SegText, SegTranslit) × maxSegs
    const header = ['No.', 'English', 'FullText'];
    for (let i = 0; i < maxSegs; i++) {
        header.push('Seg' + (i + 1) + '_ID');
        header.push('Seg' + (i + 1) + '_Text');
        if (hasTranslit) header.push('Seg' + (i + 1) + '_Translit');
    }
    rows.push(header);
    // Data rows
    SENTENCES.forEach((s, idx) => {
        const langData = s.langs[langCode];
        if (!langData) return;
        // Build full text
        const joiner = NO_SPACE_LANGS.has(langCode) ? '' : ' ';
        const fullText = langData.map(([, t]) => t.includes('|') ? t.split('|')[0] : t).join(joiner);
        const enText = s.langs.en ? s.langs.en.map(([, t]) => t).join(' ') : (s.title || '');
        const row = [idx + 1, csvQuote(enText), csvQuote(fullText)];
        langData.forEach(([segId, segText]) => {
            row.push(segId);
            if (segText.includes('|')) {
                const [text, translit] = segText.split('|');
                row.push(csvQuote(text));
                if (hasTranslit) row.push(csvQuote(translit));
            } else {
                row.push(csvQuote(segText));
                if (hasTranslit) row.push('');
            }
        });
        // Pad remaining columns
        const colsPerSeg = hasTranslit ? 3 : 2;
        for (let i = langData.length; i < maxSegs; i++) {
            for (let j = 0; j < colsPerSeg; j++) row.push('');
        }
        rows.push(row);
    });
    const csv = rows.map(r => r.join(',')).join('\n');
    const bom = '\uFEFF';
    const blob = new Blob([bom + csv], { type: 'text/csv;charset=utf-8' });
    const link = document.createElement('a');
    const now = new Date();
    const dateStr = now.getFullYear() + String(now.getMonth() + 1).padStart(2, '0') + String(now.getDate()).padStart(2, '0');
    link.download = 'langmap-' + langCode + '-' + fileTimestamp() + '.csv';
    link.href = URL.createObjectURL(blob);
    link.click();
}
function csvQuote(s) { return '"' + (s || '').replace(/"/g, '""') + '"'; }
function fileTimestamp() {
    const n = new Date();
    return n.getFullYear() + String(n.getMonth()+1).padStart(2,'0') + String(n.getDate()).padStart(2,'0')
         + String(n.getHours()).padStart(2,'0') + String(n.getMinutes()).padStart(2,'0') + String(n.getSeconds()).padStart(2,'0');
}

function downloadViewAsCSV() {
    const sentence = SENTENCES[currentSentenceIdx];
    if (!sentence) return;
    // Collect displayed languages
    const container = document.getElementById('langRows');
    const displayedLangs = [];
    container.querySelectorAll('.lang-row').forEach(row => {
        const code = row.dataset.lang;
        if (code && sentence.langs[code]) displayedLangs.push(code);
    });
    if (!displayedLangs.length) return;
    // Check if any displayed language uses transliteration
    const hasTranslit = displayedLangs.some(code =>
        sentence.langs[code].some(([, t]) => t.includes('|'))
    );
    // Find max segment count across displayed languages
    let maxSegs = 0;
    displayedLangs.forEach(code => {
        const len = sentence.langs[code].length;
        if (len > maxSegs) maxSegs = len;
    });
    const rows = [];
    // Header
    const header = ['Lang', 'FullText'];
    for (let i = 0; i < maxSegs; i++) {
        header.push('Seg' + (i + 1) + '_ID');
        header.push('Seg' + (i + 1) + '_Text');
        if (hasTranslit) header.push('Seg' + (i + 1) + '_Translit');
    }
    rows.push(header.join(','));
    // Data rows
    displayedLangs.forEach(code => {
        const langData = sentence.langs[code];
        const joiner = NO_SPACE_LANGS.has(code) ? '' : ' ';
        const fullText = langData.map(([, t]) => t.includes('|') ? t.split('|')[0] : t).join(joiner);
        const row = [csvQuote(langName(code)), csvQuote(fullText)];
        langData.forEach(([segId, segText]) => {
            row.push(segId);
            if (segText.includes('|')) {
                const [text, translit] = segText.split('|');
                row.push(csvQuote(text));
                if (hasTranslit) row.push(csvQuote(translit));
            } else {
                row.push(csvQuote(segText));
                if (hasTranslit) row.push('');
            }
        });
        const colsPerSeg = hasTranslit ? 3 : 2;
        for (let i = langData.length; i < maxSegs; i++) {
            for (let j = 0; j < colsPerSeg; j++) row.push('');
        }
        rows.push(row.join(','));
    });
    const csv = rows.join('\n');
    const bom = '\uFEFF';
    const blob = new Blob([bom + csv], { type: 'text/csv;charset=utf-8' });
    const link = document.createElement('a');
    const now = new Date();
    const dateStr = now.getFullYear() + String(now.getMonth() + 1).padStart(2, '0') + String(now.getDate()).padStart(2, '0');
    link.download = 'langmap-s' + currentSentenceIdx + '-' + fileTimestamp() + '.csv';
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

    const rawText = seg.dataset.rawText || seg.textContent;
    const hasDualText = rawText.includes('|');
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'segment-input';
    input.draggable = false;
    input.value = hasDualText ? rawText.split('|')[0] : rawText;
    input.dataset.seg = seg.dataset.seg;
    input.dataset.lang = seg.dataset.lang || langCode;
    input.placeholder = hasDualText ? 'Text' : '';
    let translitInput = null;
    if (hasDualText) {
        translitInput = document.createElement('input');
        translitInput.type = 'text';
        translitInput.className = 'segment-input segment-input-translit';
        translitInput.draggable = false;
        translitInput.value = rawText.split('|')[1] || '';
        translitInput.dataset.seg = seg.dataset.seg;
        translitInput.dataset.lang = seg.dataset.lang || langCode;
        translitInput.placeholder = 'Transliteration';
        translitInput.style.fontSize = '11px';
    }
    // Handle compound segments (e.g. "B|D")
    const segSubIds = seg.dataset.seg.split('|');
    const isCompound = segSubIds.length > 1;
    let segColor;
    if (isCompound) {
        const colors = segSubIds.map(id => sentence.segments[id]?.color || '#666');
        segColor = colors[0]; // use first color for border
        input.style.backgroundImage = `linear-gradient(90deg, ${colors.join(', ')})`;
        input.style.webkitBackgroundClip = 'text';
        input.style.backgroundClip = 'text';
        input.style.color = 'transparent';
        input.style.borderColor = segColor;
    } else {
        segColor = seg.style.color || sentence.segments[seg.dataset.seg]?.color || '#666';
        input.style.color = segColor;
        input.style.borderColor = segColor;
    }
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

    // Segment ID badge (clickable to change segment type)
    const badge = document.createElement('span');
    badge.className = 'seg-id-badge';
    badge.textContent = seg.dataset.seg;
    badge.title = 'Change segment type';
    if (isCompound) {
        const colors = segSubIds.map(id => sentence.segments[id]?.color || '#666');
        badge.style.background = `linear-gradient(90deg, ${colors.join(', ')})`;
    } else {
        badge.style.background = segColor;
    }
    badge.addEventListener('click', (e) => {
        e.stopPropagation();
        showChangeSegMenu(badge, wrapper, input, sentence);
    });

    wrapper.appendChild(handle);
    wrapper.appendChild(badge);
    if (hasDualText) {
        const dualContainer = document.createElement('span');
        dualContainer.className = 'segment-dual-inputs';
        dualContainer.style.display = 'inline-flex';
        dualContainer.style.flexDirection = 'column';
        dualContainer.style.gap = '2px';
        dualContainer.style.verticalAlign = 'middle';
        dualContainer.appendChild(input);
        dualContainer.appendChild(translitInput);
        wrapper.appendChild(dualContainer);
        wrapper.dataset.dual = '1';
        // Auto-size translitInput
        const translitCharWidth = translitInput.value.length * 8 + 24;
        translitInput.style.width = Math.max(translitCharWidth, 50) + 'px';
        requestAnimationFrame(() => {
            translitInput.style.width = Math.max(translitInput.scrollWidth + 16, 50) + 'px';
        });
        translitInput.addEventListener('input', () => {
            translitInput.style.width = '0';
            translitInput.style.width = Math.max(translitInput.scrollWidth + 16, 50) + 'px';
        });
    } else {
        wrapper.appendChild(input);
    }
    wrapper.appendChild(deleteBtn);

    // Touch reorder support
    setupTouchReorder(handle, wrapper);

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

    // Compound segment options (e.g. "A|B", "B|C", etc.)
    if (allSegs.length >= 2) {
        const compSep = document.createElement('div');
        compSep.style.cssText = 'border-top:1px solid #e0e0e0; margin:4px 0;';
        menu.appendChild(compSep);
        for (let a = 0; a < allSegs.length; a++) {
            for (let b = a + 1; b < allSegs.length; b++) {
                const compId = allSegs[a] + '|' + allSegs[b];
                const item = document.createElement('div');
                item.className = 'add-segment-menu-item';
                const dot = document.createElement('span');
                dot.className = 'seg-dot';
                const c1 = sentence.segments[allSegs[a]].color;
                const c2 = sentence.segments[allSegs[b]].color;
                dot.style.background = `linear-gradient(90deg, ${c1}, ${c2})`;
                item.appendChild(dot);
                const label = document.createElement('span');
                label.textContent = compId;
                item.appendChild(label);
                item.addEventListener('click', () => {
                    menu.remove();
                    addNewSegment(textDiv, langCode, compId, sentence);
                });
                menu.appendChild(item);
            }
        }
    }

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
    const subIds = segId.split('|');
    if (subIds.length > 1) {
        const colors = subIds.map(id => sentence.segments[id]?.color || '#666');
        seg.style.backgroundImage = `linear-gradient(90deg, ${colors.join(', ')})`;
        seg.style.webkitBackgroundClip = 'text';
        seg.style.backgroundClip = 'text';
        seg.style.color = 'transparent';
    } else {
        seg.style.color = sentence.segments[segId]?.color || '#666';
    }
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

function showChangeSegMenu(badge, wrapper, input, sentence) {
    const existing = document.querySelector('.add-segment-menu');
    if (existing) { existing.remove(); return; }

    const currentSeg = input.dataset.seg;
    const allSegs = Object.keys(sentence.segments);
    const menu = document.createElement('div');
    menu.className = 'add-segment-menu';

    allSegs.forEach(segId => {
        const item = document.createElement('div');
        item.className = 'add-segment-menu-item' + (segId === currentSeg ? ' active' : '');
        const dot = document.createElement('span');
        dot.className = 'seg-dot';
        dot.style.background = sentence.segments[segId].color;
        item.appendChild(dot);
        const label = document.createElement('span');
        label.textContent = segId;
        item.appendChild(label);
        item.addEventListener('click', () => {
            menu.remove();
            applySegChange(badge, input, segId, sentence);
        });
        menu.appendChild(item);
    });

    // Compound options
    if (allSegs.length >= 2) {
        const sep = document.createElement('div');
        sep.style.cssText = 'border-top:1px solid #e0e0e0; margin:4px 0;';
        menu.appendChild(sep);
        for (let a = 0; a < allSegs.length; a++) {
            for (let b = a + 1; b < allSegs.length; b++) {
                const compId = allSegs[a] + '|' + allSegs[b];
                const item = document.createElement('div');
                item.className = 'add-segment-menu-item' + (compId === currentSeg ? ' active' : '');
                const dot = document.createElement('span');
                dot.className = 'seg-dot';
                dot.style.background = `linear-gradient(90deg, ${sentence.segments[allSegs[a]].color}, ${sentence.segments[allSegs[b]].color})`;
                item.appendChild(dot);
                const label = document.createElement('span');
                label.textContent = compId;
                item.appendChild(label);
                item.addEventListener('click', () => {
                    menu.remove();
                    applySegChange(badge, input, compId, sentence);
                });
                menu.appendChild(item);
            }
        }
    }

    const rect = badge.getBoundingClientRect();
    menu.style.position = 'fixed';
    menu.style.left = Math.min(rect.left, window.innerWidth - 120) + 'px';
    menu.style.top = rect.bottom + 4 + 'px';
    menu.style.zIndex = '200';
    document.body.appendChild(menu);

    const closeHandler = (e) => {
        if (!menu.contains(e.target) && e.target !== badge) {
            menu.remove();
            document.removeEventListener('click', closeHandler, true);
        }
    };
    setTimeout(() => document.addEventListener('click', closeHandler, true), 0);
}

function applySegChange(badge, input, newSegId, sentence) {
    input.dataset.seg = newSegId;
    badge.textContent = newSegId;
    const subIds = newSegId.split('|');
    if (subIds.length > 1) {
        const colors = subIds.map(id => sentence.segments[id]?.color || '#666');
        badge.style.background = `linear-gradient(90deg, ${colors.join(', ')})`;
        input.style.backgroundImage = `linear-gradient(90deg, ${colors.join(', ')})`;
        input.style.webkitBackgroundClip = 'text';
        input.style.backgroundClip = 'text';
        input.style.color = 'transparent';
        input.style.borderColor = colors[0];
    } else {
        const color = sentence.segments[newSegId]?.color || '#666';
        badge.style.background = color;
        input.style.backgroundImage = '';
        input.style.webkitBackgroundClip = '';
        input.style.backgroundClip = '';
        input.style.color = color;
        input.style.borderColor = color;
    }
    scheduleRedrawLines();
}

// Touch reorder for mobile
function setupTouchReorder(handle, wrapper) {
    let touchStartY = 0;
    let touchStartX = 0;
    let placeholder = null;
    let isDragging = false;

    handle.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        touchStartX = touch.clientX;
        touchStartY = touch.clientY;
        isDragging = true;

        placeholder = document.createElement('span');
        placeholder.className = 'segment-input-wrapper touch-placeholder';
        placeholder.style.width = wrapper.offsetWidth + 'px';
        placeholder.style.height = wrapper.offsetHeight + 'px';

        wrapper.parentElement.insertBefore(placeholder, wrapper);
        wrapper.classList.add('touch-dragging');
        wrapper.style.position = 'fixed';
        wrapper.style.zIndex = '300';
        wrapper.style.width = wrapper.offsetWidth + 'px';
        wrapper.style.left = (touch.clientX - wrapper.offsetWidth / 2) + 'px';
        wrapper.style.top = (touch.clientY - wrapper.offsetHeight / 2) + 'px';
    }, { passive: false });

    handle.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const touch = e.touches[0];
        wrapper.style.left = (touch.clientX - wrapper.offsetWidth / 2) + 'px';
        wrapper.style.top = (touch.clientY - wrapper.offsetHeight / 2) + 'px';

        // Find drop target
        wrapper.style.pointerEvents = 'none';
        const el = document.elementFromPoint(touch.clientX, touch.clientY);
        wrapper.style.pointerEvents = '';
        const target = el ? findClosestWrapper(el) : null;
        clearSegDropIndicators();
        if (target && target !== placeholder && target.classList.contains('segment-input-wrapper') && !target.classList.contains('touch-placeholder')) {
            const rect = target.getBoundingClientRect();
            const midX = rect.left + rect.width / 2;
            target.classList.add(touch.clientX < midX ? 'drag-over-left' : 'drag-over-right');
        }
    }, { passive: false });

    handle.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        isDragging = false;

        const touch = e.changedTouches[0];
        wrapper.classList.remove('touch-dragging');
        wrapper.style.position = '';
        wrapper.style.zIndex = '';
        wrapper.style.width = '';
        wrapper.style.left = '';
        wrapper.style.top = '';

        wrapper.style.pointerEvents = 'none';
        const el = document.elementFromPoint(touch.clientX, touch.clientY);
        wrapper.style.pointerEvents = '';
        const target = el ? findClosestWrapper(el) : null;
        clearSegDropIndicators();

        if (target && target !== placeholder && target.classList.contains('segment-input-wrapper') && !target.classList.contains('touch-placeholder')) {
            const rect = target.getBoundingClientRect();
            const midX = rect.left + rect.width / 2;
            const textDiv = placeholder.parentElement;
            if (touch.clientX < midX) {
                textDiv.insertBefore(wrapper, target);
            } else {
                textDiv.insertBefore(wrapper, target.nextSibling);
            }
        } else {
            placeholder.parentElement.insertBefore(wrapper, placeholder);
        }
        if (placeholder) { placeholder.remove(); placeholder = null; }
        scheduleRedrawLines();
    });
}

function saveEdit(row, langCode) {
    const sentence = SENTENCES[editingRow.sentenceIdx];
    const textDiv = row.querySelector('.lang-text');
    const wrappers = textDiv.querySelectorAll('.segment-input-wrapper');

    // Build new segment order from current wrapper positions
    const newLangData = [];
    wrappers.forEach(wrapper => {
        const input = wrapper.querySelector('.segment-input:not(.segment-input-translit)');
        const translitInput = wrapper.querySelector('.segment-input-translit');
        const segId = input.dataset.seg;
        let text = input.value;
        if (translitInput && translitInput.value.trim()) {
            text = text + '|' + translitInput.value;
        }
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
    if (document.getElementById('langModalOverlay')?.classList.contains('open')) return;
    if (e.key === 'ArrowLeft') prevSentence();
    if (e.key === 'ArrowRight') nextSentence();
    if (e.key === 'r' && !e.ctrlKey && !e.metaKey) randomSentence();
});
