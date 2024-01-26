let objeto = [
    {name:'Manzana Verde - Unidad', tipo: 'fruta', src: '.././assets/img/Manzana.png', precio: '$2.100',},
    {name:'Naranja', tipo: 'fruta', src: '.././assets/img/Naranja.png', precio: '$1.495',},
    {name:'Col china x 2000gr', tipo: 'vegetal', src: '.././assets/img/Col China.png', precio: '$10.956',},
    {name:'Lechuga x 500gr', tipo: 'vegetal', src: '.././assets/img/Lechuga.png', precio: '$3.090',},
    {name:'Berenjena', tipo: 'vegetal', src: '../.assets/img/Berenjena.png', precio: '$2.820',},
    {name:'Papa Capira', tipo: 'tubérculo', src: '.././assets/img/PAPA.png', precio: '$1.600',},
    {name:'Mazorca x 500gr', tipo: 'vegetal', src: '.././assets/img/Mazorca.png', precio: '$4.145',},
    {name:'Coliflor Fresca', tipo: 'fruta', src: '.././assets/img/Coliflor.png', precio: '$5.640',},
    {name:'Pimentón Verde', tipo: 'fruta', src: '.././assets/img/Pimenton Verde.png', precio: '$3.645',},
    {name:'Ají Jalapeño Verde x 500gr', tipo: 'fruta', src: '../.assets/img/Chile Rojo.png', precio: '$6.820',}
]
const container= document.getElementById("container");
let contador = 0;

a: while(true){

const row = document.createElement("div");
row.classList.add("row");

for (let i = 0; i < 4; i++) {

    if(localStorage.getItem("filtrado") == objeto[contador].tipo || localStorage.getItem("filtrado") == 3){
        const col = document.createElement("div");
        col.classList.add("col-md-3")
        col.setAttribute("name", objeto[contador].tipo)

        const card = document.createElement("div")
        card.classList.add("card", "mt-4")

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body", "h-100")
        
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
        
    }
    console.log(i)
    contador++;
    i--
    

    if(contador == (objeto.length)){
        container.appendChild(row)
        break a;
    }
}
container.appendChild(row)
}
