import { validarInput } from "./validaciones.js";

const inputs = document.querySelectorAll(".input");

inputs.forEach((input) => {
    input.addEventListener("blur",()=>{
        validarInput(input);
    });
});

