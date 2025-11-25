import { alerta } from "../helpers/alertas.js";
import { guardarUsuario } from "../helpers/local-storage.js";

document.getElementById("form-registro").addEventListener("submit", (e) => {
    e.preventDefault();

    let correo = document.getElementById("email").value.trim();
    let contrasena = document.getElementById("password").value.trim();
    let confirmar = document.getElementById("confirmar").value.trim();
    let nombre = document.getElementById("nombre").value.trim();

    // Validación manual por si acaso
    if (!correo || !contrasena || !confirmar || !nombre) {
        alerta("Campos incompletos", "Debe llenar todos los campos", "warning");
        return;
    }

    if (contrasena !== confirmar) {
        alerta("Registro fallido", "Las contraseñas no coinciden", "error");
        return;
    }

    guardarUsuario({ correo, contrasena, nombre });

    alerta("Registro exitoso", "Se ha completado su registro", "success");

    setTimeout(() => {
        window.location.href = "../pages/login.html";
    }, 3000);
});
