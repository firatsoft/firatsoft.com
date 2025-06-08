// Otomatik yıl güncelleme
function updateYearSpans() {
    const currentYear = new Date().getFullYear();
    const yearFooter = document.getElementById('yearFooter');
    const year = document.getElementById('year');
    if (yearFooter) yearFooter.textContent = currentYear;
    if (year) year.textContent = currentYear;
}

// Yükleme ekranı yönetimi
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (!loadingScreen) return;
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
}

// Sekme başlığı mesajı
const tabMessages = [
    'Gelecek için bizimle kalın! 🚀',
    'Yenilikler için takipte kalın!',
    'Fırat Soft yakında burada! ✨',
    'Döndüğünüzde sürprizlerimiz olacak! 🎉',
];
let originalTitle = '';

function handleVisibilityChange() {
    if (document.visibilityState === 'hidden') {
        const randomMessage = tabMessages[Math.floor(Math.random() * tabMessages.length)];
        document.title = randomMessage;
    } else {
        document.title = originalTitle;
    }
}

// Hepsini başlatan fonksiyon
function initLandingPage() {
    updateYearSpans();
    originalTitle = document.title;
    document.addEventListener('visibilitychange', handleVisibilityChange);
}

// DOM tamamen yüklendiğinde çalışacak fonksiyonlar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLandingPage);
} else {
    initLandingPage();
}

// Sayfa tam yüklendiğinde yükleme ekranını gizle
window.addEventListener('load', hideLoadingScreen);
