tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
            },
            colors: {
                'brand-blue': '#2a57c4',
                'brand-blue-dark': '#1e40af',
            }
        }
    }
}

const currentYear = new Date().getFullYear();
document.getElementById('yearFooter').textContent = currentYear;
document.getElementById('year').textContent = currentYear;

// Hide loading screen when page is loaded
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
});

const originalTitle = document.title;
const tabMessages = [
    'Gelecek için bizimle kalın! 🚀',
    'Yenilikler için takipte kalın!',
    'Fırat Soft yakında burada! ✨',
    'Döndüğünüzde sürprizlerimiz olacak! 🎉',
];

document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden') {
        const randomMessage = tabMessages[Math.floor(Math.random() * tabMessages.length)];
        document.title = randomMessage;
    } else {
        document.title = originalTitle;
    }
});