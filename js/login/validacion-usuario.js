import { usuarios } from "./usuarios.js";


const formularioLogin = document.querySelector(".login__form");

formularioLogin.addEventListener("submit",(event) => {
    event.preventDefault();

    const emailIngresado = document.querySelector("#login__form__email").value;
    const passwordIngresado = document.querySelector("#login__form__password").value;
    
    let usuarioEncontrado = false;

    usuarios.forEach((usuario) => {
        if ( (usuario.email === emailIngresado) && (usuario.password === passwordIngresado) ) {
            usuarioEncontrado = true;
        }
    });

    if(!usuarioEncontrado){
        document.querySelector(".login__error").classList.add("input__invalido");
    }else{
        document.querySelector(".login__error").classList.remove("input__invalido");
        window.location.href = "usuario-productos.html";
    }

});