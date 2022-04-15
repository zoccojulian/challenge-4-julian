const local = JSON.parse(localStorage.getItem("producto")) || [];

const links = document.querySelectorAll(".producto__venta-link");

links.forEach ((link) =>{
    link.addEventListener("click",(evento) =>{
        const padre = link.parentElement;
        console.log(padre);

        const producto = [{
            imagen: padre.querySelector(".producto__venta-img").getAttribute("src"),
            titulo: padre.querySelector(".producto__venta-titulo").textContent}
        ];

        localStorage.setItem("producto",JSON.stringify(producto));

    });
});

