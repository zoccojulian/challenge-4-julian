export const validarInput = (input) =>{
    const tipoDeInput = input.dataset.input;

    if(input.validity.valid){
        input.parentElement.classList.remove("input__invalido");
        input.parentElement.querySelector(".mensaje__error").innerHTML = "";
    }else{
        input.parentElement.classList.add("input__invalido");
        input.parentElement.querySelector(".mensaje__error").innerHTML = imprimirMensaje(tipoDeInput,input);
    }
    
};

const tipoDeErrores = [
    "valueMissing",
    "patternMismatch"
];

const mensajesDeError = {
    nombre_footer:{
        valueMissing:"El campo Nombre no puede estar vacío"
    },
    mensaje_footer:{
        valueMissing:"El campo Mensaje no puede estar vacío"
    },
    email_login:{
        valueMissing:"El campo email no puede estar vacío",
        patternMismatch:"No es un tipo de mail válido(nombre@dominio.xxx)"
    },
    password_login:{
        valueMissing:"El campo Password no puede estar vacío"
    },
    nombre_agregar_producto:{
        valueMissing:"Debe ingresar un nombre para el producto"
    },
    precio_agregar_producto:{
        valueMissing:"Debe ingresar el precio del producto (ej: 1000,00)"
    },
    descripcion_agregar_producto:{
        valueMissing:"Debe ingresar una breve descripcion del producto"
    }
}


const imprimirMensaje = (tipoDeInput,input) => {
    let mensaje = "";

    tipoDeErrores.forEach((error) => {
        if(input.validity[error]){
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });

    return mensaje;
}