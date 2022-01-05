const menuBtn = document.getElementById('menu-btn')

function toggleMenu() {
    const nav = document.getElementById('nav')
    nav.classList.toggle('ativo')
}


menuBtn.addEventListener('click', toggleMenu)