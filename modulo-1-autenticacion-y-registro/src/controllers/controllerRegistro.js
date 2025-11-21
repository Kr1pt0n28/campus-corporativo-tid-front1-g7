import { alerta } from "../helpers/alertas.js";
import { guardarUsuario } from "../helpers/local-storage.js";


let btnRegister = document.getElementById("btnRegister");
btnRegister.addEventListener("click", () =>{
    let correo = document.getElementById("email").value;
    let contrasena = document.getElementById("password").value;
    let confirmar = document.getElementById("confirmar").value;
    let nombre = document.getElementById("nombre").value;

    if (contrasena === confirmar){
        guardarUsuario({
            correo,
            contrasena,
            nombre
        });
       alerta("Registro exitoso","Se ha completado su registro","success")
        setTimeout(() => {
        window.location.href ="../pages/login.html"
     }, 5000);
    }
    else{
        alerta("Registro fallido","Las contraseñas no coinciden","error")
    }
});
document.getElementById("form-registro").addEventListener("submit", (e) => {
    e.preventDefault();
});
