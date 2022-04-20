export const usuarios = [
    {email:"admin@gmail.com",
    password:"Admin2022"},
    {email:"julian@gmail.com",
    password:"Julian2045"}
];


const verUsuarioOnline = () => {
    const usuarioOk = JSON.parse(sessionStorage.getItem("usuario-ok")) || false;
    return usuarioOk;
};

const btnSalir = () => {
    const btnlogin = document.querySelector(".header__login");

    btnlogin.innerHTML = "Salir";
    btnlogin.href = "index.html";

    btnlogin.addEventListener("click", (evento) => {
        const usuarioOK = false;
        sessionStorage.setItem("usuario-ok",JSON.stringify(usuarioOK));
    });

};

const btnAgregarProducto = () => {
    const btnAgregar = document.querySelector(".producto__header__link");
    btnAgregar.style.visibility = "visible";
}

export const controlUsuarioOk = {
    verUsuarioOnline,
    btnSalir,
    btnAgregarProducto
}