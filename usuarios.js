let nombre = document.getElementById("nombre")
let correo = document.getElementById("correo")
let contraseña = document.getElementById("contraseña")

let biniciar = document.getElementById("Iniciar")
let bregistro = document.getElementById("Registrarse")

let usuario = []

document.addEventListener("DOMContentLoaded", carga)

function carga(){
    if (localStorage.getItem("usuario") === null) {
        usuario = []
    } else {
        usuario = JSON.parse(localStorage.getItem("usuario"))
    }
}

bregistro.addEventListener("click", () =>{
    let usuarioo = {
        nombre: nombre.value,
        correo: correo.value,
        contraseña: contraseña.value
    }
    usuario.push(usuarioo)

    localStorage.setItem("usuario", JSON.stringify(usuario))
    
    cargar()
})

biniciar.addEventListener("click", () =>{
    let usu = {
        nombre: nombre.value,
        correo: correo.value,
        contraseña: contraseña.value
    }

    let nombreed= usuario.find(usuarioo => usuarioo.nombre === usu.nombre)
    let correoed=usuario.find(usuarioo => usuarioo.correo === usu.correo)
    let contraseñaed=usuario.find(usuarioo => usuarioo.contraseña === usu.contraseña)

    if (nombreed && correoed && contraseñaed) {

            carga()
            alert("bienvenido")
        } else {
          alert("Usuario no encontrado")
        }
})
