const menuEmail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
menuEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu() {
    console.log('click')
    desktopmenu.classList.toggle('inactive');
}