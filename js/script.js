//Se capturan los valores de los inputs
let email = document.getElementById("email");
let password = document.getElementById("password");

function submit(event){
    console.log('Hay un evento de click');
    
    if(email.value === "" || password.value === ""){
        alert("Ingrese datos válidos");
    }else {
        window.location.href = "https://www.google.com";
        alert("ha ingresado correctamente");
        sessionStorage.setItem("sesionUsuario", email.value);
    }
    event.preventDefault();
};

let button = document.querySelector("button").addEventListener("click", submit);

//Evento sobre un popup
document.addEventListener("DOMContentLoaded", function (){
    setTimeout(function () {
        let popup = document.getElementById("popup");
        let body = document.querySelector("body");


        popup.style.display = "block";
        body.style.opacity = "50%";
        document.addEventListener("click", function(){
            popup.style.display = "none";
            body.style.opacity = "100%"
        })
    }, 5000);
});

let objeto = [
    {name:'manzana Verde', tipo: 'fruta', img: '/img/...', precio: '$2.100',},
]

for(let i = 0; i < 10; i++){
    objeto.forEach(e => {
        //se crean elemento DOM
    })

}