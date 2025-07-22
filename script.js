// // Function menu mobile
// const menuBtn = document.getElementById('menu-btn');
// const mobileMenu = document.getElementById('mobile-menu');
// menuBtn.addEventListener('click', () => {
//     menuBtn.classList.toggle('active');
//     mobileMenu.classList.toggle('hidden');
//     mobileMenu.classList.toggle('max-h-0');
//     mobileMenu.classList.toggle('max-h-screen');
// });
// // Close menu when a link is clicked Tutup klik
// const navLinks = document.querySelectorAll('#mobile-menu a');
// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         menuBtn.classList.remove('active');
//         mobileMenu.classList.add('hidden');
//         mobileMenu.classList.add('max-h-0');
//         mobileMenu.classList.remove('max-h-screen');
//     });
// });
// Shadow Sewaktu Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 10) {
        header.classList.add('shadow-md');
        header.classList.remove('shadow-sm');
    } else {
        header.classList.remove('shadow-md');
        header.classList.add('shadow-sm');
    }
});