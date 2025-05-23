const hamburgerMenu = document.getElementById('hamburger-menu');
const closeMenu = document.getElementById('close-menu');
const mobileNavOverlay = document.getElementById('mobile-nav-overlay');

hamburgerMenu.addEventListener('click', () => {
    mobileNavOverlay.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
    mobileNavOverlay.style.display = 'none';
});
