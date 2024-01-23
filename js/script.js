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
    card.classList.add("card", "d-flex", "flex-fill", "mt-4", "h-100")

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body")
    
    let img = document.createElement('img');
    img.classList.add("img-fluid");
    img.src = objeto[contador].src;
    img.style.width = "100vw";
    img.style.height = "230px";
    img.style.objectFit = "cover";

    
    let titulo = document.createElement('h4');
    titulo.innerText = objeto[contador].name;

    let parrafo = document.createElement('p');
    parrafo.innerText = objeto[contador].precio;
    parrafo.style.color = "black";
    parrafo.style.textAlign = "left";
    parrafo.style.marginTop = "0";

    let boton = document.createElement('button');
    boton.classList.add("btn", "btn-success");
    boton.style.width = "100%";
    boton.innerText = "Agregar al Carrito";
    
    cardBody.appendChild(img);
    cardBody.appendChild(titulo);
    cardBody.appendChild(parrafo);
    cardBody.appendChild(boton);
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
    window.location.href = "productos/productos.html"
}


//Evento para las cartas de prodctos en descuento
let objetoDescuentos = [
    {name:'Manzana Verde - Unidad', tipo: 'fruta', src: './img/Manzana.png', precio: '$2.100',},
    {name:'Col china x 2000gr', tipo: 'vegetal', src: './img/Col China.png', precio: '$10.956',},
    {name:'Lechuga x 500gr', tipo: 'vegetal', src: './img/Lechuga.png', precio: '$3.090',},
    {name:'Berenjena', tipo: 'vegetal', src: './img/Berenjena.png', precio: '$2.820',},
    {name:'Papa Capira', tipo: 'tubérculo', src: './img/PAPA.png', precio: '$1.600',},
    {name:'Mazorca x 500gr', tipo: 'vegetal', src: './img/Mazorca.png', precio: '$4.145',},
    {name:'Naranja', tipo: 'fruta', src: './img/Naranja.png', precio: '$1.495',},
    {name:'Coliflor Fresca', tipo: 'fruta', src: './img/Coliflor.png', precio: '$5.640',},
    {name:'Pimentón Verde', tipo: 'fruta', src: './img/Pimenton Verde.png', precio: '$3.645',},
    {name:'Ají Jalapeño Verde x 500gr', tipo: 'fruta', src: './img/ají verde.png', precio: '$6.820',},
    {name:'Tomate Rojo x 500gr', tipo: 'fruta', src: './img/Tomate.png', precio: '$3.045',},
    {name:'Mango Tommy', tipo: 'fruta', src: './img/Mango.png', precio: '$2.990',}
]

const containerDescuento = document.getElementById("containerDescuento");
console.log(containerDescuento);

const rowDescuento = document.createElement('div');
rowDescuento.classList.add("row");


let cont = 0;
for(let i = 0; i < 12; i++){
    if(objetoDescuentos[cont]){
        //se crea el div col-md-3
        const colDescuento = document.createElement('div');
        colDescuento.classList.add("col-md-3")
        
        //elemento card 
        const cardDescuento = document.createElement('div');
        cardDescuento.classList.add("card", "d-flex", "flex-fill", "mt-4", "h-100");
        
        //elemento card-body
        const cardBodyDescuento = document.createElement('div');
        cardBodyDescuento.classList.add("card-body");
        
        
        //img
        const imgDescuento = document.createElement('img');
        imgDescuento.classList.add("img-fluid", "imagenDescuento")
        imgDescuento.src = objetoDescuentos[cont].src;
        imgDescuento.style.width = "100vw";
        imgDescuento.style.height = "230px";
        imgDescuento.style.objectFit = "cover";
        
        
        //titulo
        const titulosDescuento = document.createElement('h4');
        titulosDescuento.innerText = objetoDescuentos[cont].name;
        
        //p
        const parrafoDescuento = document.createElement('p');
        parrafoDescuento.innerText = objetoDescuentos[cont].precio;
        
        //boton
        const botonDescuento = document.createElement('button');
        botonDescuento.innerText = "Añadir al Carrito";
        botonDescuento.classList.add("btn", "btn-success");
        
        
        //se agregan al padre
        containerDescuento.appendChild(rowDescuento)
        rowDescuento.appendChild(colDescuento);
        colDescuento.appendChild(cardDescuento);
        cardDescuento.appendChild(cardBodyDescuento);
        cardBodyDescuento.appendChild(imgDescuento);
        cardBodyDescuento.appendChild(titulosDescuento);
        cardBodyDescuento.appendChild(parrafoDescuento);
        cardBodyDescuento.appendChild(botonDescuento);

        cont++;

    }
};
