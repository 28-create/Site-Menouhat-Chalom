// ... (Translations kept same) ...
const translations = {
    he: {
        prayer_times_title: '<ion-icon name="time-outline"></ion-icon> זמני תפילה',
        weekday_title: '<ion-icon name="briefcase-outline"></ion-icon> יום חול',
        shacharit: 'שחרית',
        mincha: 'מנחה',
        arvit: 'ערבית',
        nets: 'נץ החמה',
        shabbat_title: '<ion-icon name="flame-outline"></ion-icon> שבת קודש',
        candles: 'הדלקת נרות',
        mincha_erev_shabbat: 'מנחה ע"ש',
        shacharit_shabbat: 'שחרית שבת',
        mincha_shabbat: 'מנחה שבת',
        arvit_motzash: 'ערבית מוצ"ש',
        rt_label: 'רבינו תם',
        motzash_label: 'מוצאי שבת',
        daily_info_title: '<ion-icon name="calendar-outline"></ion-icon> הלכה וזמנים (ירושלים)',
        parasha: 'פרשת השבוע',
        events_title: 'חיי הקהילה',
        details_btn: 'פרטים',
        register_btn: 'להרשמה',
        contact_title: 'צור קשר',
        address: 'רחוב בית וגן 6, ירושלים',
        donate_title: 'תרומות',
        donate_text: 'הנדיבות שלכם מחזקת את הקהילה.',
        donate_btn: 'להקדשה', // Changed from לתרומה to להקדשה as requested contextually (user asked 'pour la hakdacha mets ...' - actually usually Hakdasha is Dedication Banner, not Donation Button, but user said 'pour la hakdacha mets ... a la place de לתרומה'. Wait, 'לתרומה' is on the donation button. 'להקדשה' usually means 'To Dedicate'. The dedication banner button says 'לתרומות...' currently. I will change buttons text contexts).
        synagogue_name: 'בית כנסת מנוחת שלום',
        suggestion_text: 'יש לך רעיון לשיפור? כתוב לנו',
        zman_alot: 'עלות השחר',
        zman_ks_mga: 'סו"ז ק"ש (מג"א)',
        zman_ks_gra: 'סו"ז ק"ש (גר"א)',
        zman_tf_mga: 'סו"ז תפילה (מג"א)',
        zman_tf_gra: 'סו"ז תפילה (גר"א)',
        zman_chatzot: 'חצות היום',
        zman_mincha_ged: 'מנחה גדולה',
        zman_mincha_ket: 'מנחה קטנה',
        zman_plag: 'פלג המנחה',
        zman_shkia: 'שקיעת החמה',
    },
    fr: {
        prayer_times_title: '<ion-icon name="time-outline"></ion-icon> Horaires des Prières',
        weekday_title: '<ion-icon name="briefcase-outline"></ion-icon> Semaine',
        shacharit: 'Cha\'harit',
        mincha: 'Min\'ha',
        arvit: 'Arvit',
        nets: 'Nets Hahama',
        shabbat_title: '<ion-icon name="flame-outline"></ion-icon> Chabbat Kodech',
        candles: 'Allumage',
        mincha_erev_shabbat: 'Min\'ha E.S.',
        shacharit_shabbat: 'Cha\'harit Chabbat',
        mincha_shabbat: 'Min\'ha Chabbat',
        arvit_motzash: 'Arvit Motsach',
        rt_label: 'Rabenou Tam',
        motzash_label: 'Motsaé Chabbat',
        daily_info_title: '<ion-icon name="calendar-outline"></ion-icon> Halakha & Zmanim (Jérusalem)',
        parasha: 'Paracha',
        events_title: 'Vie de la Communauté',
        details_btn: 'Détails',
        register_btn: 'S\'inscrire',
        contact_title: 'Contact',
        address: '6 Rue Bayit VeGan, Jérusalem',
        donate_title: 'Dons',
        donate_text: 'Soutenez la communauté.',
        donate_btn: 'Faire une dédicace',
        synagogue_name: 'Synagogue Menuchat Shalom',
        suggestion_text: 'Une idée ? Écrivez-nous',
        zman_alot: 'Aube (Alot)',
        zman_ks_mga: 'Sof K"S (MGA)',
        zman_ks_gra: 'Sof K"S (GRA)',
        zman_tf_mga: 'Sof Tefila (MGA)',
        zman_tf_gra: 'Sof Tefila (GRA)',
        zman_chatzot: 'Hatsot (Midi)',
        zman_mincha_ged: 'Mincha Gedola',
        zman_mincha_ket: 'Mincha Ketana',
        zman_plag: 'Plag HaMincha',
        zman_shkia: 'Coucher soleil (Shkia)',
    },
    en: {
        prayer_times_title: 'Prayer Times',
        weekday_title: 'Weekday',
        shacharit: 'Shacharit',
        mincha: 'Mincha',
        arvit: 'Arvit',
        nets: 'Sunrise',
        shabbat_title: 'Shabbat Kodesh',
        candles: 'Candle Lighting',
        mincha_erev_shabbat: 'Mincha E.S.',
        shacharit_shabbat: 'Shacharit Shabbat',
        mincha_shabbat: 'Mincha Shabbat',
        arvit_motzash: 'Arvit Motzash',
        rt_label: 'Rabeinu Tam',
        motzash_label: 'Motzaei Shabbat',
        daily_info_title: 'Halacha & Zmanim (Jerusalem)',
        parasha: 'Weekly Portion',
        events_title: 'Community Life',
        details_btn: 'Details',
        register_btn: 'Register',
        contact_title: 'Contact Us',
        address: '6 Bayit VeGan St, Jerusalem',
        donate_title: 'Donate',
        donate_text: 'Support our community.',
        donate_btn: 'Dedicate',
        synagogue_name: 'Menuchat Shalom',
        suggestion_text: 'Have an idea? Write to us',
        zman_alot: 'Alot HaShachar',
        zman_ks_mga: 'Sof K"S (MGA)',
        zman_ks_gra: 'Sof K"S (GRA)',
        zman_tf_mga: 'Sof Tefila (MGA)',
        zman_tf_gra: 'Sof Tefila (GRA)',
        zman_chatzot: 'Chatzot',
        zman_mincha_ged: 'Mincha Gedola',
        zman_mincha_ket: 'Mincha Ketana',
        zman_plag: 'Plag HaMincha',
        zman_shkia: 'Sunset',
        zman_plag: 'Plag HaMincha',
        zman_shkia: 'Sunset',
        dracha: 'Drasha',
        chir_hachirim: 'Shir HaShirim',
        history_title: 'Our History',
        contact_title: 'Contact Us',
    }
};

const DEFAULT_ANNOUNCEMENTS = [
    { title: 'Mazal Tov!', content: 'To the Cohen family on the Bar Mitzvah.', type: 'good' },
    { title: 'Shiur Update', content: 'Daf Yomi at 8:00 AM.', type: 'info' }
];

const DEFAULT_HISTORY = `בית הכנסת "מנוחת שלום" מקורו במרסיי (צרפת). במקור קראו לו "מינחת שלום" אך לאחר פטירת המייסד סב המשפחה ר' שלום בוגיד סגרון ז"ל הוחלף השם לזכרו. \nThis synagogue has been a beacon of light...`;
const DEFAULT_CONTACTS = [
    { name: 'מנהל האתר: משה מימרן', phone: '053-4139660' },
    { name: 'Office', phone: '02-0000000' }
];

let currentLang = 'he';
const JERSUALEM_GEO_ID = '281184';
const STORE_PREFIX = 'menuchat_shalom_';

// Defaults
const DEFAULT_GALLERY = [
    { url: 'https://i.ibb.co/Ld10Nzck/Whats-App-Image-2026-01-12-at-07-33-28.jpg', caption: 'שיעור תורה' },
    { url: 'https://i.ibb.co/bMtzmrhR/Whats-App-Image-2026-01-12-at-07-33-31-1.jpg', caption: 'הרב ראובן אלבז שליט"א' },
        { url: 'https://i.ibb.co/ymS4RKqW/Whats-App-Image-2026-01-12-at-07-33-33-1.jpg', caption: 'אבות ובנים' },
    { url: 'https://i.ibb.co/67CYc6gg/Whats-App-Image-2026-01-12-at-07-33-36-1.jpg', caption: 'פעילות לילדים' },
    { url: 'https://i.ibb.co/0pgnc1jb/Whats-App-Image-2026-01-12-at-07-33-35.jpg', caption: 'ריקודים' },
    { url: 'https://i.ibb.co/C3CrDYM4/Whats-App-Image-2026-01-12-at-07-33-34-1.jpg', caption: 'פורים' },
    { url: 'https://i.ibb.co/gFT4wX5B/Whats-App-Image-2026-01-12-at-07-33-33.jpg', caption: 'קריאת המגילה' },
    { url: 'https://i.ibb.co/wrQKXpSV/Whats-App-Image-2026-01-12-at-07-33-28-1.jpg', caption: 'בית הכנסת' },
    { url: 'https://i.ibb.co/MkJ1FKDp/Whats-App-Image-2026-01-12-at-07-33-30.jpg', caption: 'לימוד תורה' }
];

const DEFAULT_ACTIVITIES = [
    { title: 'שיעור דף היומי', time: 'ימים א-ו 08:55', desc: 'שיעור קבוע בדף היומי בבהירות.', type: 'btn', btnText: 'פרטים', gradient: 'gradient-1', icon: 'book-outline' },
    { title: 'קידוש קהילתי', time: 'שבת בבוקר', desc: 'קידוש חברתי עם דבר תורה לאחר התפילה.', type: 'btn', btnText: 'פרטים', gradient: 'gradient-3', icon: 'wine' },
    { title: 'חוגים לילדים', time: 'ימי ראשון ושלישי', desc: 'פעילויות העשרה, יצירה ומשחק.', type: 'link', link: 'https://www.matara.pro/nedarimplus/Forms/1683.html?MasofId=&ClientId=&Zeout=&Version=3', btnText: 'להרשמה', gradient: 'gradient-2', icon: 'brush' }
];

const DEFAULT_DEDICATIONS = [
    { title: 'היום הלימוד לע"נ', text: 'פלוני בן פלוני ז"ל' }
];

document.addEventListener('DOMContentLoaded', () => {
    loadSettings();
    updateDates();
    setupLanguageSwitcher();
    setupAdminModal();
    fetchZmanim();
    fetchShabbatTimes();
    fetchDafo();
    renderGallery();
    renderActivities();
    renderAnnouncements();
    renderFooter();
    renderDedications();
    setInterval(updateDates, 60000);
});




// Admin Helpers
window.addAnnouncementRow = () => {
    const container = document.getElementById('announcement-inputs');
    const row = document.createElement('div');
    row.className = 'dedication-admin-row';
    row.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:5px; flex:1; margin-bottom:5px;">
             <input type="text" class="ann-title-in" placeholder="כותרת (מזל טוב...)">
             <input type="text" class="ann-badge-in" placeholder="Badge (Mazal Tov)" style="font-size:0.8rem; height:28px;">
             <input type="text" class="ann-img-in" placeholder="כתובת תמונה URL (אופציונלי)">
        </div>
        <textarea class="ann-content-in" rows="2" placeholder="תוכן..."></textarea>
        <div style="display:flex; align-items:center; gap:10px; margin-top:5px;">
             <input type="checkbox" class="ann-visible-in" checked title="Afficher?">
             <span style="font-size:0.8rem;">הצג באתר</span>
             <button type="button" onclick="this.parentElement.parentElement.remove()" style="color:red; background:none; border:none; margin-right:auto;">מחק</button>
        </div>
    `;
    container.appendChild(row);
};

window.addGalleryRow = () => {
    const container = document.getElementById('gallery-inputs');
    const row = document.createElement('div');
    row.className = 'row-inputs';
    row.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:5px; flex:1;">
             <input type="text" class="gallery-url-input" placeholder="כתובת תמונה / או העלה קובץ ->">
             <input type="file" accept="image/*" class="image-upload-input" style="font-size:0.8rem;">
        </div>
        <input type="text" class="gallery-caption-input" placeholder="כותרת" style="flex:1;">
    `;
    container.appendChild(row);
};

window.addActivityRow = () => {
    const container = document.getElementById('activity-inputs');
    const row = document.createElement('div');
    row.className = 'admin-section';
    row.innerHTML = `
        <div class="row-inputs">
            <input type="text" class="act-title" placeholder="כותרת">
            <input type="text" class="act-time" placeholder="זמן">
        </div>
        <div class="row-inputs">
            <textarea class="act-desc" placeholder="תיאור" rows="2"></textarea>
            <input type="text" class="act-link" placeholder="קישור">
        </div>
        <div class="row-inputs" style="align-items:center;">
             <input type="text" class="act-img" placeholder="כתובת תמונה..." style="grid-column: 1 / -1; width:100%;">
             <input type="file" accept="image/*" class="image-upload-input" style="grid-column: 1 / -1;">
        </div>
        <div class="row-inputs">
            <select class="act-btn-type" style="width:100%; padding:8px;">
                <option value="details">לפרטים (Details)</option>
                <option value="register">להרשמה (Register)</option>
            </select>
        </div>
        <button type="button" onclick="this.parentElement.remove()" style="color:red; background:none; border:none;">מחק פעילות</button>
    `;
    container.appendChild(row);
};

window.addDedicationRow = () => {
    const container = document.getElementById('dedication-inputs');
    const row = document.createElement('div');
    row.className = 'dedication-admin-row';
    row.innerHTML = `
        <input type="text" class="ded-title" placeholder="כותרת הקדשה (למשל: יום זיכרון)">
        <textarea class="ded-text" rows="2" placeholder="טקסט (שמות)..."></textarea>
         <button type="button" onclick="this.parentElement.remove()" style="grid-column:1/-1; width:fit-content; color:red; background:none; border:none;">מחק</button>
    `;
    container.appendChild(row);
};

function setupAdminModal() {
    const openBtn = document.getElementById('open-admin-btn');
    const closeBtn = document.getElementById('close-admin-btn');
    const modal = document.getElementById('admin-modal');

    // Global file upload handler (attached once or checked)
    if (!window.uploadHandlerAttached) {
        document.addEventListener('change', (e) => {
            if (e.target && e.target.classList.contains('image-upload-input')) {
                const file = e.target.files[0];
                if (!file) return;

                if (file.size > 800000) { // ~800KB limit
                    alert("Image trop grande (Max 800KB).");
                    e.target.value = '';
                    return;
                }

                const reader = new FileReader();
                reader.onload = (evt) => {
                    const parent = e.target.parentElement.parentElement; // .row-inputs or similar container
                    // Try to find the URL input in the same container or parent
                    let urlInput = parent.querySelector('input[type="text"].gallery-url-input') || parent.querySelector('input[type="text"].act-img');

                    // Fallback to searching nearby
                    if (!urlInput) {
                        const container = e.target.closest('.row-inputs');
                        if (container) urlInput = container.querySelector('input[type="text"]');
                    }

                    if (urlInput) {
                        urlInput.value = evt.target.result;
                        urlInput.style.borderColor = '#4caf50';
                        urlInput.style.borderWidth = '2px';
                    }
                };
                reader.readAsDataURL(file);
            }
        });
        window.uploadHandlerAttached = true;
    }

    if (openBtn) openBtn.onclick = () => {
        const code = prompt("Accès réservé aux administrateurs / הגישה למנהלים בלבד\nCode:");
        if (code !== '613613613') { alert("Code incorrect"); return; }

        document.getElementById('input-shacharit').value = document.getElementById('t-shacharit').textContent;
        document.getElementById('input-mincha').value = document.getElementById('t-mincha').textContent;
        document.getElementById('input-arvit').value = document.getElementById('t-arvit').textContent;
        document.getElementById('input-shacharit-shabbat').value = document.getElementById('t-shacharit-shabbat').textContent;

        // Load Manual Overrides
        const overrides = JSON.parse(localStorage.getItem(STORE_PREFIX + 'manual_overrides')) || {};
        document.getElementById('input-manual-candles').value = overrides.candles || '';
        document.getElementById('input-manual-chir').value = overrides.chir || '';
        document.getElementById('input-manual-mincha-erev').value = overrides.minchaErev || '';
        document.getElementById('input-manual-mincha-shabbat').value = overrides.minchaShabbat || '';
        document.getElementById('input-manual-arvit-motzash').value = overrides.arvitMotzash || '';
        document.getElementById('input-manual-motzash').value = overrides.motzash || '';

        // REMOVED OFFSETS INPUT LOADING

        // No rounding checkbox
        // document.getElementById('check-round-prayers').checked = rounding; // REMOVED

        document.getElementById('input-dracha-speaker').value = localStorage.getItem(STORE_PREFIX + 'dracha_speaker') || '';
        document.getElementById('input-history-text').value = localStorage.getItem(STORE_PREFIX + 'history') || DEFAULT_HISTORY;
        // Announcements Title
        document.getElementById('input-ann-title').value = localStorage.getItem(STORE_PREFIX + 'ann_title') || 'לוח מודעות';

        // Contacts
        const coContainer = document.getElementById('contact-inputs'); // Renamed variable
        coContainer.innerHTML = '';
        getStoredContacts().forEach(c => {
            const row = document.createElement('div');
            row.className = 'dedication-admin-row';
            row.innerHTML = `
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" class="contact-visible-in" ${c.visible !== false ? 'checked' : ''}>
                    <input type="text" class="contact-name-in" value="${c.name}">
                </div>
                <input type="text" class="contact-phone-in" value="${c.phone}">
                <input type="text" class="contact-email-in" value="${c.email || ''}" placeholder="Email" style="margin-top:5px; grid-column:1/-1;">
                 <button type="button" onclick="this.parentElement.remove()" style="color:red; background:none; border:none;">מחק</button>
            `;
            coContainer.appendChild(row);
        });

        // Announcements
        const annContainer = document.getElementById('announcement-inputs'); // Renamed variable
        annContainer.innerHTML = '';
        getStoredAnnouncements().forEach(a => {
            const row = document.createElement('div');
            row.className = 'dedication-admin-row';
            row.innerHTML = `
                <div style="display:flex; align-items:center; gap:10px; margin-bottom:5px;">
                     <input type="checkbox" class="ann-visible-in" ${a.visible !== false ? 'checked' : ''} title="Afficher?">
                     <span style="font-size:0.8rem;">Afficher</span>
                </div>
                <div style="display:flex; flex-direction:column; gap:5px; flex:1; margin-bottom:5px;">
                    <input type="text" class="ann-title-in" value="${a.title}">
                    <input type="text" class="ann-img-in" value="${a.imageUrl || ''}" placeholder="URL Image">
                </div>
                <textarea class="ann-content-in" rows="2">${a.content}</textarea>
                 <button type="button" onclick="this.parentElement.remove()" style="color:red; background:none; border:none;">מחק</button>
            `;
            annContainer.appendChild(row);
        });

        const dContainer = document.getElementById('dedication-inputs');
        dContainer.innerHTML = '';
        getStoredDedications().forEach(ded => {
            const row = document.createElement('div');
            row.className = 'dedication-admin-row';
            row.innerHTML = `
                <div style="display:flex; gap:10px; grid-column:1/-1; margin-bottom:5px;">
                    <input type="checkbox" class="ded-visible-in" ${ded.visible !== false ? 'checked' : ''}>
                    <span>הצג</span>
                </div>
                <input type="text" class="ded-title" value="${ded.title}">
                <textarea class="ded-text" rows="2">${ded.text}</textarea>
                <button type="button" onclick="this.parentElement.remove()" style="grid-column:1/-1; width:fit-content; color:red; background:none; border:none;">מחק</button>
            `;
            dContainer.appendChild(row);
        });

        const gContainer = document.getElementById('gallery-inputs');
        gContainer.innerHTML = '';
        getStoredGallery().forEach(item => {
            const row = document.createElement('div');
            row.className = 'row-inputs';
            row.innerHTML = `
                <div style="display:flex; align-items:center; gap:5px;">
                    <input type="checkbox" class="gallery-visible-in" ${item.visible !== false ? 'checked' : ''}>
                    <div style="display:flex; flex-direction:column; gap:5px; flex:1;">
                         <input type="text" class="gallery-url-input" value="${item.url}" placeholder="URL / Upload ->">
                         <input type="file" accept="image/*" class="image-upload-input" style="font-size:0.8rem;">
                    </div>
                </div>
                <input type="text" class="gallery-caption-input" value="${item.caption}">
            `;
            gContainer.appendChild(row);
        });

        const aContainer = document.getElementById('activity-inputs');
        aContainer.innerHTML = '';
        getStoredActivities().forEach(act => {
            const row = document.createElement('div');
            row.className = 'admin-section';
            row.innerHTML = `
                <div style="margin-bottom:10px;"><input type="checkbox" class="act-visible-in" ${act.visible !== false ? 'checked' : ''}> הצג פעילות</div>
                <div class="row-inputs">
                    <input type="text" class="act-title" value="${act.title}">
                    <input type="text" class="act-time" value="${act.time}">
                </div>
                <div class="row-inputs">
                    <textarea class="act-desc" rows="2">${act.desc}</textarea>
                    <input type="text" class="act-link" value="${act.link || ''}">
                </div>
                <div class="row-inputs" style="align-items:center;">
                     <input type="text" class="act-img" value="${act.imageUrl || ''}" placeholder="URL..." style="grid-column: 1 / -1; width:100%;">
                     <input type="file" accept="image/*" class="image-upload-input" style="grid-column: 1 / -1;">
                </div>
                <div class="row-inputs">
                    <select class="act-btn-type" style="width:100%;">
                        <option value="details" ${act.btnType === 'details' ? 'selected' : ''}>לפרטים (Details)</option>
                        <option value="register" ${act.btnType === 'register' ? 'selected' : ''}>להרשמה (Register)</option>
                    </select>
                </div>
                <button type="button" onclick="this.parentElement.remove()" style="color:red; background:none; border:none;">מחק פעילות</button>
            `;
            aContainer.appendChild(row);
        });

        // Contacts
        const cContainer = document.getElementById('contact-inputs');
        cContainer.innerHTML = '';
        getStoredContacts().forEach(c => {
            const row = document.createElement('div');
            row.className = 'dedication-admin-row';
            row.innerHTML = `
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" class="contact-visible-in" ${c.visible !== false ? 'checked' : ''}>
                    <input type="text" class="contact-name-in" value="${c.name}">
                </div>
                <input type="text" class="contact-phone-in" value="${c.phone}">
                <input type="text" class="contact-email-in" value="${c.email || ''}" placeholder="Email" style="margin-top:5px; grid-column:1/-1;">
                 <button type="button" onclick="this.parentElement.remove()" style="color:red; background:none; border:none;">מחק</button>
            `;
            cContainer.appendChild(row);
        });

        // Announcements
        const anContainer = document.getElementById('announcement-inputs');
        anContainer.innerHTML = '';
        getStoredAnnouncements().forEach(a => {
            const row = document.createElement('div');
            row.className = 'dedication-admin-row';
            row.innerHTML = `
                <div style="display:flex; align-items:center; gap:10px; margin-bottom:5px;">
                     <input type="checkbox" class="ann-visible-in" ${a.visible !== false ? 'checked' : ''} title="Afficher?">
                     <span style="font-size:0.8rem;">Afficher</span>
                </div>
                <div style="display:flex; flex-direction:column; gap:5px; flex:1; margin-bottom:5px;">
                    <input type="text" class="ann-title-in" value="${a.title}">
                    <input type="text" class="ann-img-in" value="${a.imageUrl || ''}" placeholder="URL Image">
                </div>
                <textarea class="ann-content-in" rows="2">${a.content}</textarea>
                 <button type="button" onclick="this.parentElement.remove()" style="color:red; background:none; border:none;">מחק</button>
            `;
            anContainer.appendChild(row);
        });

        modal.classList.remove('hidden');
    };

    if (closeBtn) closeBtn.onclick = () => modal.classList.add('hidden');
    document.getElementById('admin-form').onsubmit = (e) => {
        e.preventDefault();
        saveSettings();
        modal.classList.add('hidden'); // Ensure close
    };
}

function getStoredGallery() { return JSON.parse(localStorage.getItem(STORE_PREFIX + 'gallery')) || DEFAULT_GALLERY; }
function getStoredActivities() { return JSON.parse(localStorage.getItem(STORE_PREFIX + 'activities')) || DEFAULT_ACTIVITIES; }
function getStoredDedications() { return JSON.parse(localStorage.getItem(STORE_PREFIX + 'dedications')) || DEFAULT_DEDICATIONS; }
function getStoredAnnouncements() { return JSON.parse(localStorage.getItem(STORE_PREFIX + 'announcements')) || DEFAULT_ANNOUNCEMENTS; }
function getStoredContacts() { return JSON.parse(localStorage.getItem(STORE_PREFIX + 'contacts')) || DEFAULT_CONTACTS; }
function getStoredOffsets() { return JSON.parse(localStorage.getItem(STORE_PREFIX + 'offsets')) || {}; }

function saveSettings() {
    const settings = {
        shacharit: document.getElementById('input-shacharit').value,
        mincha: document.getElementById('input-mincha').value,
        arvit: document.getElementById('input-arvit').value,
        shacharitShabbat: document.getElementById('input-shacharit-shabbat').value,
    };

    // Save Manual Overrides
    const overrides = {
        candles: document.getElementById('input-manual-candles').value,
        chir: document.getElementById('input-manual-chir').value,
        minchaErev: document.getElementById('input-manual-mincha-erev').value,
        minchaShabbat: document.getElementById('input-manual-mincha-shabbat').value,
        arvitMotzash: document.getElementById('input-manual-arvit-motzash').value,
        motzash: document.getElementById('input-manual-motzash').value
    };
    localStorage.setItem(STORE_PREFIX + 'manual_overrides', JSON.stringify(overrides));

    localStorage.setItem(STORE_PREFIX + 'settings', JSON.stringify(settings));
    applySettings(settings);

    // Offsets - UI removed, skipping save.

    // Store Dracha Speaker
    localStorage.setItem(STORE_PREFIX + 'dracha_speaker', document.getElementById('input-dracha-speaker').value);

    // Store Footer
    localStorage.setItem(STORE_PREFIX + 'history', document.getElementById('input-history-text').value);
    // Store Title
    localStorage.setItem(STORE_PREFIX + 'ann_title', document.getElementById('input-ann-title').value);

    // Explicitly update Dracha Speaker in UI immediately
    const speaker = document.getElementById('input-dracha-speaker').value;
    const sEl = document.getElementById('dracha-speaker');
    if (sEl) sEl.textContent = speaker || '...';

    const cNames = document.querySelectorAll('.contact-name-in');
    const cPhones = document.querySelectorAll('.contact-phone-in');
    const cEmails = document.querySelectorAll('.contact-email-in');
    const cVis = document.querySelectorAll('.contact-visible-in');
    const newContacts = [];
    cNames.forEach((n, i) => { if (n.value) newContacts.push({ name: n.value, phone: cPhones[i].value, email: cEmails[i].value, visible: cVis[i].checked }); });
    localStorage.setItem(STORE_PREFIX + 'contacts', JSON.stringify(newContacts));
    renderFooter();

    const anTitles = document.querySelectorAll('.ann-title-in');
    const anContent = document.querySelectorAll('.ann-content-in');
    const anImgs = document.querySelectorAll('.ann-img-in');
    const anBadges = document.querySelectorAll('.ann-badge-in');
    const anVis = document.querySelectorAll('.ann-visible-in');
    const newAnn = [];
    anTitles.forEach((t, i) => { if (t.value) newAnn.push({ title: t.value, content: anContent[i].value, imageUrl: anImgs[i].value, badge: anBadges[i].value, visible: anVis[i].checked }); });
    localStorage.setItem(STORE_PREFIX + 'announcements', JSON.stringify(newAnn));
    renderAnnouncements();

    // Explicitly update Dracha Speaker in UI immediately
    // This block was duplicated in the original code, keeping the one after contacts/announcements.
    // const speaker = document.getElementById('input-dracha-speaker').value;
    // const sEl = document.getElementById('dracha-speaker');
    // if (sEl) sEl.textContent = speaker || '...';

    const dTitles = document.querySelectorAll('.ded-title');
    const dTexts = document.querySelectorAll('.ded-text');
    const dVis = document.querySelectorAll('.ded-visible-in');
    const newDed = [];
    dTitles.forEach((t, i) => { if (t.value) newDed.push({ title: t.value, text: dTexts[i].value, visible: dVis[i].checked }); });
    localStorage.setItem(STORE_PREFIX + 'dedications', JSON.stringify(newDed));
    renderDedications();

    const gUrls = document.querySelectorAll('.gallery-url-input');
    const gCaps = document.querySelectorAll('.gallery-caption-input');
    const gVis = document.querySelectorAll('.gallery-visible-in');
    const newG = [];
    gUrls.forEach((input, i) => { if (input.value) newG.push({ url: input.value, caption: gCaps[i].value, visible: gVis[i].checked }); });
    localStorage.setItem(STORE_PREFIX + 'gallery', JSON.stringify(newG));
    renderGallery();

    const aTitles = document.querySelectorAll('.act-title');
    const aTimes = document.querySelectorAll('.act-time');
    const aDescs = document.querySelectorAll('.act-desc');
    const aLinks = document.querySelectorAll('.act-link');
    const aImgs = document.querySelectorAll('.act-img');
    const aVis = document.querySelectorAll('.act-visible-in');
    const aBtns = document.querySelectorAll('.act-btn-type');
    const newA = [];
    aTitles.forEach((t, i) => {
        if (t.value) {
            newA.push({
                title: t.value,
                type: aLinks[i].value ? 'link' : 'btn',
                time: aTimes[i].value,
                desc: aDescs[i].value,
                link: aLinks[i].value,
                imageUrl: aImgs[i].value || '',
                visible: aVis[i].checked,
                btnType: aBtns[i].value,
                icon: 'star',
                gradient: 'gradient-2'
            });
        }
    });
    localStorage.setItem(STORE_PREFIX + 'activities', JSON.stringify(newA));
    renderActivities();

    fetchZmanim();
    fetchShabbatTimes();
}

function loadSettings() {
    const raw = localStorage.getItem(STORE_PREFIX + 'settings');
    if (raw) applySettings(JSON.parse(raw));
}

function applySettings(s) {
    if (s.shacharit) document.getElementById('t-shacharit').textContent = s.shacharit;
    if (s.mincha) document.getElementById('t-mincha').textContent = s.mincha;
    if (s.arvit) document.getElementById('t-arvit').textContent = s.arvit;
    if (s.shacharitShabbat) document.getElementById('t-shacharit-shabbat').textContent = s.shacharitShabbat;
}

function renderDedications() {
    const container = document.getElementById('dedications-wrapper');
    const dedications = getStoredDedications();
    container.innerHTML = '';

    dedications.filter(d => d.visible !== false).forEach(ded => {
        const div = document.createElement('div');
        div.className = 'dedication-card';
        div.innerHTML = `
            <div class="dedication-inner">
                 <div class="dedication-title">${ded.title}</div>
                 <div class="dedication-text">${ded.text}</div>
                 <a href="https://www.matara.pro/nedarimplus/online/?mosad=7016601" target="_blank" class="dedication-btn-small">
                     <ion-icon name="heart"></ion-icon> להקדשה
                </a>
            </div>
        `;
        container.appendChild(div);
    });
}

function renderGallery() {
    const container = document.getElementById('gallery-container');
    const galleryData = getStoredGallery();
    container.innerHTML = '';
    galleryData.filter(g => g.visible !== false).forEach(item => {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        div.innerHTML = `<img src="${item.url}" class="gallery-img"><div class="gallery-caption">${item.caption}</div>`;
        container.appendChild(div);
    });
}
function renderAnnouncements() {
    const container = document.getElementById('announcements-container');

    // Update Section Title
    const titleEl = document.getElementById('announcements-section-title');
    if (titleEl) titleEl.textContent = localStorage.getItem(STORE_PREFIX + 'ann_title') || 'לוח מודעות';

    if (!container) return; // Safety
    const data = getStoredAnnouncements();
    container.innerHTML = '';
    data.filter(a => a.visible !== false).forEach(item => {
        const div = document.createElement('div');
        div.className = 'announcement-card';
        // Simple badge logic based on title keywords or random
        const imgHtml = item.imageUrl ? `<div style="text-align:center; margin-bottom:10rem;"><img src="${item.imageUrl}" style="max-width:100%; max-height:150px; border-radius:8px;"></div>` : '';
        const imgStyle = item.imageUrl ? 'margin-bottom:0.5rem;' : 'margin-bottom:0.5rem;';
        const badgeText = item.badge || (item.title.includes('מזל') || item.title.includes('Mazal') ? 'Mazal Tov' : 'Info');

        div.innerHTML = `
            <div class="ann-badge" style="display:block; width:fit-content; margin:0 auto 0.5rem auto;">${badgeText}</div>
            ${item.imageUrl ? `<img src="${item.imageUrl}" style="width:100%; height:150px; object-fit:cover; border-radius:6px; margin-bottom:10px;">` : ''}
            <div class="ann-title" style="text-align:center;">${item.title}</div>
            <div class="ann-content" style="text-align:center;">${item.content}</div>
        `;
        container.appendChild(div);
    });
}

function renderFooter() {
    const historyText = localStorage.getItem(STORE_PREFIX + 'history') || DEFAULT_HISTORY;
    const historyContainer = document.getElementById('footer-history-text');
    if (historyContainer) historyContainer.textContent = historyText;

    const contacts = getStoredContacts();
    const contactList = document.getElementById('footer-contact-list');
    if (contactList) {
        contactList.innerHTML = '';
        contacts.filter(c => c.visible !== false).forEach(c => {
            const p = document.createElement('div');
            p.style.marginBottom = '1rem';
            p.innerHTML = `
                <div style="display:flex; align-items:center; gap:8px; color:#fff;">
                    <ion-icon name="person-circle-outline" style="color:var(--gold-accent);"></ion-icon> 
                    <strong>${c.name}</strong>
                </div>
                <div style="padding-right:24px; font-size:0.9rem; color:#bdc3c7;">
                    <div>${c.phone}</div>
                    ${c.email ? `<a href="mailto:${c.email}" style="color:#bdc3c7; text-decoration:none; display:flex; align-items:center; gap:5px;"><ion-icon name="mail-outline" style="color:var(--gold-accent); font-size:0.8rem;"></ion-icon> ${c.email}</a>` : ''}
                </div>
             `;
            contactList.appendChild(p);
        });
    }
}
function renderActivities() {
    const container = document.getElementById('events-grid');
    const data = getStoredActivities();
    container.innerHTML = '';
    data.filter(a => a.visible !== false).forEach(act => {
        const btnBg = act.btnType === 'register' ? 'var(--gold-accent)' : 'transparent';
        const btnCl = act.btnType === 'register' ? '#fff' : 'var(--primary-accent)';
        const btnTx = act.btnType === 'register' ? (translations[currentLang]['register_btn'] || 'להרשמה') : (translations[currentLang]['details_btn'] || 'לפרטים');

        const btnHtml = act.link
            ? `<a href="${act.link}" target="_blank" class="btn-sm" style="background:${btnBg}; color:${btnCl}; border-color:var(--gold-accent);">${btnTx}</a>`
            : `<button class="btn-sm" style="background:${btnBg}; color:${btnCl}; border-color:var(--gold-accent);">${btnTx}</button>`;
        const div = document.createElement('div');
        div.className = 'event-card';
        let extraHtml = '';
        // ... (existing Daf html) ...
        if (act.title.includes('דף יומי') || act.title.includes('Daf')) {
            extraHtml = `<div style="font-weight:800; color:#4a4a4a; margin-bottom:0.5rem; font-size:1.1rem;" id="card-daf-val">...</div>`;
        }

        const bgStyle = act.imageUrl ? `background-image: url('${act.imageUrl}');` : '';
        const bgClass = act.imageUrl ? '' : (act.gradient || 'gradient-2');

        div.innerHTML = `
            <div class="card-image ${bgClass}" style="${bgStyle}"></div>
            <div class="card-content">
                <h3>${act.title}</h3>
                <p class="time"><ion-icon name="${act.icon || 'calendar-outline'}"></ion-icon> ${act.time}</p>
                ${extraHtml}
                <p>${act.desc}</p>
                ${btnHtml}
            </div>
        `;
        container.appendChild(div);
    });
    fetchDafo();
}

// Zmanim
function updateShabbatUI(data) {
    const offs = getStoredOffsets();
    const rounding = localStorage.getItem(STORE_PREFIX + 'rounding') === 'true';
    const overrides = JSON.parse(localStorage.getItem(STORE_PREFIX + 'manual_overrides')) || {};

    const format = (dStr, off = 0, allowedRound = false) => {
        let date = new Date(dStr);
        if (off !== 0) date.setMinutes(date.getMinutes() + off);
        if (rounding && allowedRound) {
            const coeff = 1000 * 60 * 5;
            date = new Date(Math.round(date.getTime() / coeff) * coeff);
        }
        return date.toLocaleTimeString('en-IL', { hour: '2-digit', minute: '2-digit', hour12: false });
    };

    const parashaItem = data.items.find(i => i.category === 'parashat');
    if (parashaItem) {
        let text = '';
        if (currentLang === 'he') text = parashaItem.hebrew;
        else text = parashaItem.title.replace('Parashat', '').trim();
        const pEl = document.getElementById('parasha-val-shabbat');
        if (pEl) pEl.textContent = text;
    }

    const candlesItem = data.items.find(i => i.category === 'candles');
    if (candlesItem) {
        // Candles (Exact)
        if (document.getElementById('t-candles')) document.getElementById('t-candles').textContent = format(candlesItem.date, offs.candles, false);

        // Chir Hachirim: Manual OR Candles rounded UP to next 5 min
        if (overrides.chir) {
            if (document.getElementById('t-chir')) document.getElementById('t-chir').textContent = overrides.chir;
        } else {
            const cDate = new Date(candlesItem.date);
            if (offs.candles) cDate.setMinutes(cDate.getMinutes() + offs.candles);
            let m = cDate.getMinutes();
            let diff = 0;
            if (m % 5 !== 0) diff = 5 - (m % 5);
            cDate.setMinutes(m + diff);
            cDate.setSeconds(0);
            if (document.getElementById('t-chir')) document.getElementById('t-chir').textContent = cDate.toLocaleTimeString('en-IL', { hour: '2-digit', minute: '2-digit', hour12: false });
        }

        if (overrides.candles) {
            if (document.getElementById('t-candles')) document.getElementById('t-candles').textContent = overrides.candles;
        }

        // Mincha Erev Shabbat (Manual OR Standard +20)
        if (overrides.minchaErev) {
            if (document.getElementById('t-mincha-erev')) document.getElementById('t-mincha-erev').textContent = overrides.minchaErev;
        } else {
            const minchaDate = new Date(new Date(candlesItem.date).getTime() + 20 * 60000);
            if (document.getElementById('t-mincha-erev')) document.getElementById('t-mincha-erev').textContent = format(minchaDate.toISOString(), offs.candles, false);
        }
    }

    // Mincha Shabbat logic
    // Check for Manual Override
    if (overrides.minchaShabbat) {
        if (document.getElementById('t-mincha-day')) document.getElementById('t-mincha-day').textContent = overrides.minchaShabbat;
    } else {
        // Automatic Logic
        const havItem = data.items.find(i => i.category === 'havdalah');
        if (havItem) {
            const hDate = new Date(havItem.date);
            const minchaShabbat = new Date(hDate.getTime() - 95 * 60000);
            let m = minchaShabbat.getMinutes();
            const rem = m % 5;
            if (rem !== 0) {
                minchaShabbat.setMinutes(m + (5 - rem));
            }
            minchaShabbat.setSeconds(0);
            if (document.getElementById('t-mincha-day')) document.getElementById('t-mincha-day').textContent = minchaShabbat.toLocaleTimeString('en-IL', { hour: '2-digit', minute: '2-digit', hour12: false });
        }
    }

    const havItem = data.items.find(i => i.category === 'havdalah');
    if (havItem) {
        if (overrides.arvitMotzash) {
            if (document.getElementById('t-arvit-motzash-pray')) document.getElementById('t-arvit-motzash-pray').textContent = overrides.arvitMotzash;
        } else {
            if (document.getElementById('t-arvit-motzash-pray')) document.getElementById('t-arvit-motzash-pray').textContent = format(havItem.date, offs.motzash, false);
        }

        // Zmanim List (Motzash)
        if (overrides.motzash) {
            if (document.getElementById('z-motzash')) document.getElementById('z-motzash').textContent = overrides.motzash;
        } else {
            if (document.getElementById('z-motzash')) document.getElementById('z-motzash').textContent = format(havItem.date, offs.motzash, false);
        }

        // Rabbeinu Tam (Based on Havdalah or Manual?)
        // If Manual Motzash is set, maybe RT should adjust? Usually RT is standard. I'll leave RT automatic unless requested.
        const havDate = new Date(havItem.date);
        const rtDate = new Date(havDate.getTime() + 22 * 60000); // RT Logic (approx)
        if (document.getElementById('z-rt')) document.getElementById('z-rt').textContent = format(rtDate.toISOString(), offs.motzash, false);
    }

    // Candles Manual?
    if (overrides.candles && document.getElementById('t-candles')) {
        document.getElementById('t-candles').textContent = overrides.candles;
    } else if (overrides.candles === '') {
        // Ensure automatic if empty (handled by normal logic if code wasn't blocking, but normal logic ran before this block for candles.
        // I need to ensure normal logic runs OR is overridden.
        // Currently `updateShabbatUI` runs sequentially. I should move Candle logic here or check override there.
        // Let's rely on re-running `updateShabbatUI` fully?
        // Actually, the candle setting logic is above lines 726. I should fix that area too or overwrite it here.
        // I will overwrite it here if manual exists.
    }

    // Dracha Text Update (Ensure it runs here too)
    const speaker = localStorage.getItem(STORE_PREFIX + 'dracha_speaker');
    const dEl = document.getElementById('dracha-speaker');
    if (dEl) dEl.textContent = speaker || '...';
}

async function fetchZmanim() {
    const today = new Date();
    const dateStr = today.toISOString().split('T')[0];
    const url = `https://www.hebcal.com/zmanim?cfg=json&geonameid=${JERSUALEM_GEO_ID}&date=${dateStr}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        renderZmanim(data.times);
    } catch (e) { }
}
function renderZmanim(times) {
    const list = document.getElementById('zmanim-list');
    list.innerHTML = '';
    const offs = getStoredOffsets();

    // Explicit NO ROUNDING here
    const formatTime = (isoString, offsetMin = 0) => {
        if (!isoString) return '--:--';
        const date = new Date(isoString);
        if (offsetMin !== 0) date.setMinutes(date.getMinutes() + offsetMin);
        return date.toLocaleTimeString('en-IL', { hour: '2-digit', minute: '2-digit', hour12: false });
    };

    const add = (label, valueRaw, off, iconHtml = '') => {
        const val = formatTime(valueRaw, off);
        const div = document.createElement('div');
        div.className = 'zmanim-item';
        div.innerHTML = `<span class="zmanim-label">${label} ${iconHtml}</span><span class="zmanim-value">${val}</span>`;
        list.appendChild(div);
    };

    add(translations[currentLang]['zman_alot'], times.alotHaShachar, offs.alot, '<span style="color:transparent; text-shadow:0 0 0 var(--gold-accent);">🐓</span>'); // Rooster Monochrome
    add(translations[currentLang]['nets'], times.sunrise, offs.nets, '<ion-icon name="partly-sunny"></ion-icon>');
    add(translations[currentLang]['zman_ks_mga'], times.sofZmanShmaMGA, offs.shma, '<ion-icon name="hand-right-outline"></ion-icon>'); // Hand
    add(translations[currentLang]['zman_ks_gra'], times.sofZmanShma, offs.shma, '<ion-icon name="hand-right-outline"></ion-icon>');

    // Added BOOK icon for Tfila
    add(translations[currentLang]['zman_tf_mga'], times.sofZmanTfillaMGA, offs.tfila, '<ion-icon name="book"></ion-icon>');
    add(translations[currentLang]['zman_tf_gra'], times.sofZmanTfilla, offs.tfila, '<ion-icon name="book"></ion-icon>');

    add(translations[currentLang]['zman_chatzot'], times.chatzot, offs.chatzot, '<ion-icon name="sunny"></ion-icon>');
    add(translations[currentLang]['zman_mincha_ged'], times.minchaGedola, offs.mincha_g, '<ion-icon name="book-outline"></ion-icon>'); // Open Book
    add(translations[currentLang]['zman_plag'], times.plagHaMincha, offs.plag, '<ion-icon name="partly-sunny-outline"></ion-icon>'); // Half Sun
    add(translations[currentLang]['zman_shkia'], times.sunset, offs.shkia, '<ion-icon name="cloudy-night-outline"></ion-icon>');

    // Stars fixed (grouped)
    const stars3 = `<span style="display:inline-flex; gap:1px; margin-right:5px; font-size:0.8em; color:#b4924c;"><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon></span>`;

    const motzashDiv = document.createElement('div');
    motzashDiv.className = 'zmanim-item';
    motzashDiv.innerHTML = `<span class="zmanim-label">${translations[currentLang]['motzash_label']} ${stars3}</span><span class="zmanim-value" id="z-motzash">...</span>`;
    list.appendChild(motzashDiv);

    const rtDiv = document.createElement('div');
    rtDiv.className = 'zmanim-item';
    rtDiv.innerHTML = `<span class="zmanim-label">${translations[currentLang]['rt_label']} <ion-icon name="moon"></ion-icon></span><span class="zmanim-value" id="z-rt">...</span>`;
    list.appendChild(rtDiv);

    // DAF YOMI (Below RT)
    const dafDiv = document.createElement('div');
    dafDiv.className = 'zmanim-item zmanim-daf';
    dafDiv.style.borderRight = '4px solid #b4924c';
    dafDiv.style.background = '#fff8e1';
    // Use Flexbox for centering
    dafDiv.style.display = 'flex';
    dafDiv.style.flexDirection = 'column';
    dafDiv.style.alignItems = 'center';
    dafDiv.style.padding = '10px';

    dafDiv.innerHTML = `
        <span class="zmanim-label" style="font-weight:800; font-size:1.1em; margin-bottom:5px;">דף היומי <ion-icon name="book-outline"></ion-icon></span>
        <span class="zmanim-value" id="z-daf" style="font-size:1.2rem; width:100%; text-align:center;">...</span>
    `;
    list.appendChild(dafDiv);

    if (window.cachedShabbatData) updateShabbatUI(window.cachedShabbatData);
}

// ... Fetch Shabbat / Dafo / Date / Language (unchanged) ...
async function fetchShabbatTimes() {
    const url = `https://www.hebcal.com/shabbat?cfg=json&geonameid=${JERSUALEM_GEO_ID}&m=50`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        window.cachedShabbatData = data;
        updateShabbatUI(data);
    } catch (e) { }
}
async function fetchDafo() {
    // Sefaria API for Israel/Jerusalem
    // Default fallback
    const fallbackTitle = '...';

    // Attempt Sefaria API
    try {
        const url = 'https://www.sefaria.org/api/calendars?timezone=Asia/Jerusalem';
        const response = await fetch(url);
        const data = await response.json();

        const dafItem = data.calendar_items.find(i => i.title.en === 'Daf Yomi');
        if (dafItem) {
            const hebrewVal = dafItem.displayValue.he; // e.g. "בבא בתרא י״ב"
            const linkUrl = `https://www.sefaria.org.il/${dafItem.url}`;

            // Update UI
            const els = document.querySelectorAll('#card-daf-val');
            els.forEach(el => el.textContent = hebrewVal);

            // Update Zmanim list item
            const zDaf = document.getElementById('z-daf');
            if (zDaf) {
                zDaf.innerHTML = `
                    <div style="font-weight:bold; margin-bottom:8px;">${hebrewVal}</div>
                    <a href="https://hebrewbooks.org/shas" target="_blank" style="display:inline-block; padding:6px 14px; background:var(--gold-accent); color:white; border-radius:6px; text-decoration:none; font-size:0.9em; font-weight:500; transition:all 0.2s;">
                        ללימוד הדף לחצו כאן
                    </a>
                 `;
            }
        }
    } catch (e) { console.error("Sefaria Error", e); }
}
function toHebrewNumeral(n) {
    if (n === 15) return 'ט"ו';
    if (n === 16) return 'ט"ז';
    const letters = [{ val: 400, char: 'ת' }, { val: 300, char: 'ש' }, { val: 200, char: 'ר' }, { val: 100, char: 'ק' }, { val: 90, char: 'צ' }, { val: 80, char: 'פ' }, { val: 70, char: 'ע' }, { val: 60, char: 'ס' }, { val: 50, char: 'נ' }, { val: 40, char: 'מ' }, { val: 30, char: 'ל' }, { val: 20, char: 'כ' }, { val: 10, char: 'י' }, { val: 9, char: 'ט' }, { val: 8, char: 'ח' }, { val: 7, char: 'ז' }, { val: 6, char: 'ו' }, { val: 5, char: 'ה' }, { val: 4, char: 'ד' }, { val: 3, char: 'ג' }, { val: 2, char: 'ב' }, { val: 1, char: 'א' }];
    let result = '';
    let tempN = n;
    for (let l of letters) {
        while (tempN >= l.val) {
            result += l.char;
            tempN -= l.val;
        }
    }
    if (result.length === 1) result += "'";
    else result = result.slice(0, -1) + '"' + result.slice(-1);
    return result;
}
function getHebrewDateCustom() {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('he-IL', { calendar: 'hebrew', day: 'numeric', month: 'long', year: 'numeric' });
    const parts = formatter.formatToParts(now);
    const dayVal = parseInt(parts.find(p => p.type === 'day').value);
    const yearVal = parseInt(parts.find(p => p.type === 'year').value);
    const monthVal = parts.find(p => p.type === 'month').value;
    const dayHeb = toHebrewNumeral(dayVal);
    const yearHeb = toHebrewNumeral(yearVal % 1000);
    return `${dayHeb} ${monthVal} ${yearHeb}`;
}
function updateDates() {
    const now = new Date();
    const locale = currentLang === 'he' ? 'fr-FR' : (currentLang === 'fr' ? 'fr-FR' : 'en-GB');
    const civilFormatter = new Intl.DateTimeFormat(locale, { day: '2-digit', month: '2-digit', year: 'numeric' });
    document.getElementById('civil-date').textContent = civilFormatter.format(now);
    if (currentLang === 'he') document.getElementById('hebrew-date').textContent = getHebrewDateCustom();
    else {
        const hebrewFormatter = new Intl.DateTimeFormat('he-IL', { calendar: 'hebrew', day: 'numeric', month: 'long', year: 'numeric' });
        document.getElementById('hebrew-date').textContent = hebrewFormatter.format(now);
    }
}
function setupLanguageSwitcher() {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setLanguage(lang);
        });
    });
}
function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.dir = (lang === 'he') ? 'rtl' : 'ltr';
    document.body.style.textAlign = (lang === 'he') ? 'right' : 'left';
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
    const dashboard = document.querySelector('.hero-dashboard');
    if (dashboard) {
        if (lang === 'he') dashboard.classList.add('rtl'); else dashboard.classList.remove('rtl');
    }
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang][key]) {
            if (translations[lang][key].includes('<')) {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
    fetchShabbatTimes();
    updateDates();
    fetchZmanim();
    fetchDafo();
    renderActivities();
    renderDedications();
}
