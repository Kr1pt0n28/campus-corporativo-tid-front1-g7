let btnLogin = document.getElementById("btnLogin");
btnLogin.addEventListener("click", () =>{
    let correo = document.getElementById("email").value;
    let contrasena = document.getElementById("password").value;
    if (correo == "correo@correo.com" && contrasena=="12345"){
        Swal.fire({
            title:"Bienvenido",
            text: "Sera redireccionado al Home",
            icon:"success",
            
        })
     window.location.href ="https://sweetalert2.github.io/"
    }
       
    else{
        Swal.fire({
            title:"Error",
            text: "Usuario y/o contraseña incorrecto",
            icon:"error",
        })
    }
});

document.getElementById("form-registro").addEventListener("submit", (e) => {
    e.preventDefault();
});