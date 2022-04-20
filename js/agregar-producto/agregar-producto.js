

/*Muestra la imagen seleccionada para agregar en el nuevo producto y deja la URL del archivo para usar luego*/

const btnAgregarImagen = document.querySelector(".agregar__imagen");

let fileImagen = "";

btnAgregarImagen.addEventListener('change', cargar);

function cargar(ev) {
    var arch = new FileReader();
    arch.addEventListener('load',leer);
    arch.readAsDataURL(ev.target.files[0]);

    fileImagen = ev.target.files[0];
}

function leer(ev) {
    document.getElementById('box__imagen').style.backgroundImage = "url('" + ev.target.result + "')";

    document.querySelector(".archivo__faltante").parentElement.classList.remove("input__invalido");
}


/*Submit del formulario de cargar nuevo producto.
Chequeo que tenga el archivo de foto seleccionado*/
const formAgregarProducto = document.querySelector(".agregar__form");

formAgregarProducto.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if(!fileImagen){
        
        document.querySelector(".archivo__faltante").parentElement.classList.add("input__invalido");

    }else{
        window.location.href = "usuario-productos.html";

    }
});
