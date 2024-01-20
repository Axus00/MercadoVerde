//función para cuando le den click al logo de la web
let titulo = document.getElementById("titulo");

titulo.addEventListener('click', () => {
    console.log('Hay un click');

    location.href = "index.html";
    
}) //Fin de funcionalidad para volver a la web


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
/* document.addEventListener("DOMContentLoaded", function (){
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
 */
let objeto = [
    {name:'Manzana Verde - Unidad', tipo: 'fruta', src: './img/Manzana.png', precio: '$2.100',},
    {name:'Naranja', tipo: 'fruta', src: './img/Naranja.png', precio: '$1.495',},
    {name:'Col china x 2000gr', tipo: 'vegetal', src: './img/Col China.png', precio: '$10.956',},
    {name:'Lechuga x 500gr', tipo: 'vegetal', src: './img/Lechuga.png', precio: '$3.090',},
    {name:'Berenjena', tipo: 'vegetal', src: './img/Berenjena.png', precio: '$2.820',},
    {name:'Papa Capira', tipo: 'tubérculo', src: './img/PAPA.png', precio: '$1.600',},
    {name:'Mazorca x 500gr', tipo: 'vegetal', src: './img/Mazorca.png', precio: '$4.145',},
    {name:'Coliflor Fresca', tipo: 'fruta', src: './img/Coliflor.png', precio: '$5.640',},
    {name:'Pimentón Verde', tipo: 'fruta', src: './img/Pimenton Verde.png', precio: '$3.645',},
    {name:'Ají Jalapeño Verde x 500gr', tipo: 'fruta', src: './img/ají verde.png', precio: '$6.820',}
]
const container= document.getElementById("container");
let contador = 0;
a: while(true){
const row = document.createElement("div");
row.classList.add("row");
for (let i = 0; i < 4; i++) {

   
    const col = document.createElement("div");
    col.classList.add("col-md-3")

    const card = document.createElement("div")
    card.classList.add("card", "d-flex", "flex-fill", "mt-4")

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body")
    
    let img = document.createElement('img');
        img.src = objeto[contador].src;
        img.style.width = "250px";
        img.style.height = "230px";

    let parrafo = document.createElement('p');
    parrafo.innerText = objeto[contador].precio;
        
    let titulo = document.createElement('h4');
    titulo.innerText = objeto[contador].name;

    cardBody.appendChild(img);
    cardBody.appendChild(titulo);
    cardBody.appendChild(parrafo);
    card.appendChild(cardBody);
    col.appendChild(card);
    row.appendChild(col)
    contador++;

    if(contador == (objeto.length)){
        container.appendChild(row)
        break a;
    }
}
container.appendChild(row)
}

function filtrar(filtro){
    localStorage.setItem("filtrado", filtro)

}

/* for(let i = 0; i < 10; i++){
        let e = objeto[i % objeto.length];
    
        let productos = document.getElementById('productos');

        let row = document.createElement('div');
        row.classList.add('row');

        //se crean elemento DOM
        let divCarta = document.createElement('div');
        divCarta.classList.add('col-md-3', 'mb-3');
        
        let divCard = document.createElement('div');
        divCard.classList.add('card');
        
        
        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        cardBody.style.display = "flex";
        cardBody.style.flexDirection = "column";
        
        
        let img = document.createElement('img');
        img.src = objeto[i % objeto.length].src;
        img.style.width = "250px";
        img.style.height = "230px";
        
        let parrafo = document.createElement('p');
        parrafo.innerText = objeto[i % objeto.length].precio;
        
        let titulo = document.createElement('h4');
        titulo.innerText = e.name;
        
        //árbol del DOM
        cardBody.appendChild(img);
        cardBody.appendChild(titulo);
        cardBody.appendChild(parrafo);
        divCard.appendChild(cardBody);
        divCarta.appendChild(divCard);
        
        
        //se agrega al cuerpo del div de productos
        productos.appendChild(divCarta);
        //productos.appendChild(divCard);
} */