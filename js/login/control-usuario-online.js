import { controlUsuarioOk } from "./usuarios.js";


if(controlUsuarioOk.verUsuarioOnline()){
    controlUsuarioOk.btnSalir();

    if (document.querySelector(".productos__todos")){
        controlUsuarioOk.btnAgregarProducto();
    };

    if (document.querySelector(".productos")){
        controlUsuarioOk.btnModificar();
    };
}

