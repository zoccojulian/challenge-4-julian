let header = document.querySelector(".header");

let scrollAnterior = 0


window.addEventListener("scroll", () =>{

    if (((window.scrollY > scrollAnterior) && !header.classList.contains("header__arriba") && (scrollAnterior != 0)) || ((window.scrollY<scrollAnterior) && header.classList.contains("header__arriba"))){
        
        header.classList.toggle("header__arriba");

    }

    scrollAnterior = window.scrollY;

}); 