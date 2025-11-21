export function guardarUsuario({ correo, contrasena, nombre }) {

        localStorage.setItem("correo", correo);
        localStorage.setItem("contrasena", contrasena);
        localStorage.setItem("nombre", nombre);

}

export function obtenerUsuario() {
    return{
        correo:localStorage.getItem("correo"),
        contrasena:localStorage.getItem("contrasena"),
        nombre:localStorage.getItem("nombre"),
    };
}

//Funcion para actualizar la contraseña registrada
export function actualizarContrasena(nuevaContrasena) {
    localStorage.setItem("contrasena", nuevaContrasena);
}
//Obtener el correo del usuario
export function obtenerCorreo() {
    return localStorage.getItem("correo");
}