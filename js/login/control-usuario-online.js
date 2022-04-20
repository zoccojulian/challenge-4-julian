import { controlUsuarioOk } from "./usuarios.js";



if(controlUsuarioOk.verUsuarioOnline()){
    controlUsuarioOk.btnSalir();

    if (window.location.pathname === "/todos-los-productos.html"){
        controlUsuarioOk.btnAgregarProducto();
    };
}

