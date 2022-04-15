
const btnAgregarImagen = document.querySelector(".agregar__imagen");



btnAgregarImagen.addEventListener('change', cargar);

function cargar(ev) {
    var arch=new FileReader();
    arch.addEventListener('load',leer);
    arch.readAsDataURL(ev.target.files[0]);
}

function leer(ev) {
    console.log(ev.target.result)
    document.getElementById('box__imagen').style.backgroundImage = "url('" + ev.target.result + "')"
}
