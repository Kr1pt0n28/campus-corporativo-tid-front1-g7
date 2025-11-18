import { alerta } from "../helpers/alertas.js";

let btnLogin = document.getElementById("btnLogin");
btnLogin.addEventListener("click", () =>{
    let correo = document.getElementById("email").value;
    let contrasena = document.getElementById("password").value;
    if (correo == "correo@correo.com" && contrasena=="12345"){
        alerta("bienvenido", "Será redireccionado", "Success")
     setTimeout(() => {
        window.location.href ="https://sweetalert2.github.io/"
     }, 5000);
    }
       
    else{
       alerta("Error","Usuario y/o contraseña incorrecto","error")
    }
});

document.getElementById("form-registro").addEventListener("submit", (e) => {
    e.preventDefault();
});