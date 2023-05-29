const menuToggle = document.getElementById('hamburger-btn');
const mainMenu = document.getElementById('main-menu');

menuToggle.addEventListener('click', function() {
    mainMenu.classList.toggle('active');
});