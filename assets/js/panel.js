const fecha = new Date()
console.log(fecha.getDate())
console.log(fecha.getFullYear())
console.log(fecha.getMonth()+1)

let informacion0 = document.getElementById("informacion0");
let informacion1 = document.getElementById("informacion1");
let registro = {}
let id = sessionStorage.getItem("id")

fetch("http://localhost:3000/users/"+id)
.then(response => { return response.json()})
.then(data => {
    registro = data;
    llenar();
})
function llenar(){
    informacion0.innerHTML = `
    <img src="${registro.img}" alt="" >
    <h3>${registro.name} ${registro.lastName}</h3>
    <p>${registro.comercial_activity}</p>
    <a href="">Editar Perfil</a>`;

    informacion1.innerHTML = `
    <h3>DIRECCION DE ENVÍO</h3>
    <p>${registro.adress}</p>
    <h3>Correo Electrónico</h3>
    <p>${registro.email}</p>
    <span>${registro.tel}</span>
    <a href="">Editar Dirección</a>`
}


//Se verifica el inicio de sesión
const sesionGuardada = sessionStorage.getItem("id")

if(!sesionGuardada){
    window.location.href = ".././index.html";
}


//Función evento para cerrar sesión
//se llaman los eventos de los botones
const cerrar = document.getElementById("close");


cerrar.addEventListener("click", closeSession)

function closeSession(){
    console.log("evento")


    sessionStorage.clear()
    window.location.href = ".././login.html";
}
//Fin evento para el cierre de sesión


//evento para la suscripción
const suscripcion = document.getElementById("suscribe");

suscripcion.addEventListener("click", function(event){
    console.log("Te has suscrito");

    const accion = event.target
    
    if(accion){
        alert("Gracias por suscribirte a nuestro newslatter")
        location.href = "https://www.gmail.com";
    }
});

