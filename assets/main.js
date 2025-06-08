document.querySelector("#yearFooter").textContent = new Date().getFullYear();
document.querySelector("#year").textContent = new Date().getFullYear();
window.addEventListener('load', function () {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});