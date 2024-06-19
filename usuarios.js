let nombre = document.getElementById("nombre")
let correo = document.getElementById("correo")
let contraseña = document.getElementById("contraseña")
let nombrecorreo = document.getElementById("nombrecorreo")
let contraseñain = document.getElementById("contraseñain")

let biniciar = document.getElementById("Iniciar")
let bregistro = document.getElementById("Registrarse")

let usuario = []

let tema=document.getElementById("tema")
let tema1=document.getElementById("tema1")
let tema2=document.getElementById("tema2")
let tema3=document.getElementById("tema3")
let body=document.getElementById("body")

function remobeAllClass(){
    body.classList.remove("body")
    body.classList.remove("body1")
    body.classList.remove("body2")
    body.classList.remove("body3")
}
tema.addEventListener("click",()=>{
    remobeAllClass()
    body.classList.add("body")
    localStorage.setItem("body", 0)
})
tema1.addEventListener("click",()=>{
    remobeAllClass()
    body.classList.add("body1")
    localStorage.setItem("body", 1)
})
tema2.addEventListener("click",()=>{
    remobeAllClass()
    body.classList.add("body2")
    localStorage.setItem("body", 2)
})
tema3.addEventListener("click",()=>{
    remobeAllClass()
    body.classList.add("body3")
    localStorage.setItem("body", 3)
})

document.addEventListener("DOMContentLoaded", carga)


function carga(){
    
    if (localStorage.getItem("usuario") === null) {
        usuario = []
    } else {
        usuario = JSON.parse(localStorage.getItem("usuario"))
    }
    
    switch(localStorage.getItem("body")){
        case "1":
            body.classList.add("body1")
        break
        case "2":
            body.classList.add("body2")
        break
        case "3":
            body.classList.add("body3")
        break
        default:
            body.classList.add("body")
        break
    }
}

bregistro.addEventListener("click", () =>{
    let usuarioo = {
        nombre: nombre.value,
        correo: correo.value,
        contraseña: contraseña.value
    }

    if(nombre.value ==="" || correo.value ==="" || contraseña.value ===""){
        alert("Llena todos los campos")
    }
   else{
    let nombrevr = usuario.find(usuarioo => usuarioo.nombre === nombre.value)
    let correovr = usuario.find(usuarioo => usuarioo.correo === correo.value)
    if(nombrevr){
        alert("Nombre ya registrado")
    }
    else if(correovr){
        alert("Correo ya registrado")
    }
    else{
        usuario.push(usuarioo)

    localStorage.setItem("usuario", JSON.stringify(usuario))

    carga()
      }
    }
})

biniciar.addEventListener("click", () =>{
   let usu = {
        nombrecorreo: nombrecorreo.value,
        contraseñain: contraseñain.value
    }
    if(nombrecorreo.value ==="" || contraseñain.value ===""){
        alert("Llena todos los campos")
    }
    else if(nombrecorreo.value !=="" || contraseñain.value !==""){ 
        
    let nombrecorreoed=usuario.find(usuarioo => usuarioo.nombre === usu.nombrecorreo) || usuario.find(usuarioo => usuarioo.correo === usu.nombrecorreo)

    let contraseñaed=usuario.find(usuarioo => usuarioo.contraseña === usu.contraseñain)

    if (nombrecorreoed && contraseñaed) {

            carga()

            alert("bienvenido")

        } else {
          alert("Usuario no encontrado")
        }
    }
})
