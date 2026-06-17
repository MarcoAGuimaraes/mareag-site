/* =========================================================
MENU MOBILE
========================================================= */

const menuToggle = document.getElementById('menuToggle');

const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {

    mobileMenu.classList.toggle('active');

});

/* =========================================================
FECHAR MENU AO CLICAR
========================================================= */

const mobileLinks = document.querySelectorAll('.mobile-menu a');

mobileLinks.forEach(link => {

    link.addEventListener('click', () => {

        mobileMenu.classList.remove('active');

    });

});

/* =========================================================
SCROLL REVEAL
Animação suave ao rolar
========================================================= */

const reveals = document.querySelectorAll('.reveal');

function revealOnScroll(){

    reveals.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            element.classList.add('active');

        }

    });

}

window.addEventListener('scroll', revealOnScroll);

/* =========================================================
HEADER SCROLL
Escurece menu ao rolar
========================================================= */

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

    if(window.scrollY > 50){

        /*header.style.background = 'rgba(0,0,0,0.65)';*/
        header.style.background =
        header.style.background =
            'linear-gradient(90deg, rgba(3,18,22,.98), rgba(1,8,10,.98))';

    }else{

        /*header.style.background = 'rgba(0,0,0,0.15)';*/
        header.style.background =
            'linear-gradient(90deg, rgba(3,18,22,.98), rgba(1,8,10,.98))';
    }

});

/* =========================================================
OBSERVAÇÕES IMPORTANTES

1 - UTILIZAR WEBP OU AVIF
2 - EVITAR PNG GIGANTE
3 - COMPRIMIR IMAGENS
4 - USAR LAZY LOADING
5 - MANTER VÍDEOS LEVES
6 - EVITAR MUITAS ANIMAÇÕES
7 - SITE PREPARADO PARA:
   - painel admin
   - carrinho
   - backend
   - catálogo dinâmico
========================================================= */