const hora = new Date().getHours();
const hero = document.querySelector('.hero');

if(hora >= 6 && hora < 18){

    hero.style.background = `
    linear-gradient(
        rgba(8,18,32,0.40),
        rgba(8,18,32,0.45)
    ),
    url('assets/img/dia.webp')
    `;

}else{

    hero.style.background = `
    linear-gradient(
        rgba(8,18,32,0.70),
        rgba(8,18,32,0.75)
    ),
    url('assets/img/noite.webp')
    `;

}
hero.style.backgroundSize = "cover";
hero.style.backgroundPosition = "center";
hero.style.backgroundRepeat = "no-repeat";
