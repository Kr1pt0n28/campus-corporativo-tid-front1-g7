import { alerta } from "../helpers/alertas.js";
import { actualizarContrasena, obtenerCorreo } from "../helpers/local-storage.js";

// Obtenemos el botón
let btnReestablecer = document.getElementById("btnReestablecer");

btnReestablecer.addEventListener("click", () => {
    // Capturamos el correo ingresado por el usuario en un input
    const correoInput = document.getElementById("email").value;

    // Obtenemos el correo registrado
    const correoRegistrado = obtenerCorreo();

    // Validamos si coincide
    if (correoInput !== correoRegistrado) {
        alerta("Error", "El correo no está registrado", "error");
        return;
    }

    // Pedimos la nueva contraseña mediante prompt
    const nuevaContrasena = prompt("Ingresa tu nueva contraseña:");
    const confirmarContrasena = prompt("Confirma tu nueva contraseña:");

    // Validamos que coincidan
    if (nuevaContrasena !== confirmarContrasena) {
        alerta("Error", "Las contraseñas no coinciden", "error");
        return;
    }

    // Actualizamos la contraseña
    actualizarContrasena(nuevaContrasena);
    alerta("Éxito", "Contraseña actualizada correctamente", "success");
});

// Prevenimos que el formulario se envíe
document.getElementById("form-registro").addEventListener("submit", (e) => e.preventDefault());
