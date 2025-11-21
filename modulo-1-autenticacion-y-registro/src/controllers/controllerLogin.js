import { alerta } from "../helpers/alertas.js";
import { obtenerUsuario } from "../helpers/local-storage.js";


let btnLogin = document.getElementById("btnLogin");
btnLogin.addEventListener("click", () =>{
    let correo = document.getElementById("email").value;
    let contrasena = document.getElementById("password").value;

    const usuario = obtenerUsuario();

// Validar que existan datos
    if (!usuario.correo || !usuario.contrasena) {
        alerta("Error", "No existe un usuario registrado", "error");
        return;
    }

    // Validar login
    if (
        correo === usuario.correo &&
        contrasena === usuario.contrasena
    ) {
        alerta("Bienvenido", `Hola ${usuario.nombre}`, "success");

        setTimeout(() => {
            window.location.href="https://sweetalert2.github.io/";
        }, 3000);
    } else {
        alerta("Error", "Usuario y/o contraseña incorrecto", "error");
    }
});

document.getElementById("form-registro").addEventListener("submit", (e) => e.preventDefault());