
export function alerta (titulo,mensaje,icono){
     Swal.fire({
            title:titulo,
            text: mensaje,
            icon:icono,
            
        })
}