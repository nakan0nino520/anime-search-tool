const translations = {
 en: {
 title: "Anime Finder",
 searchBtn: "Search",
 historyTitle: "Search History"
 },
 vi: {
 title: "Tìm Kiếm Anime",
 searchBtn: "Tìm",
 historyTitle: "Lịch Sử Tìm Kiếm"
 },
 th: {
 title: "ค้นหาอนิเมะ",
 searchBtn: "ค้นหา",
 historyTitle: "ประวัติการค้นหา"
 },
 ja: {
 title: "アニメ検索",
 searchBtn: "検索する",
 historyTitle: "検索履歴"
 },
 // Add more as needed
};

function setLanguage(langCode) {
 const keys = Object.keys(translations[langCode] || {});
 keys.forEach(key => {
 const element = document.querySelector(`[data-i18n="${key}"]`);
 if (element) {
 element.textContent = translations[langCode][key];
 }
 });
 localStorage.setItem('language', langCode);
}
