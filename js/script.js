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



    let objeto = [];
    fetch("http://localhost:3000/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        objeto = Array.from(data);
        llenar();
      });

function llenar() {
  const container = document.getElementById("container");
  let contador = 0;
  a: while (true) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let i = 0; i < 4; i++) {
      const col = document.createElement("div");
      col.classList.add("col-md-3");

      const card = document.createElement("div");
      card.classList.add("card", "d-flex", "flex-fill", "mt-4");

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      let img = document.createElement("img");
      img.classList.add("img-fluid");
      img.src = objeto[contador].src;
      img.style.width = "250px";
      img.style.height = "230px";

      let titulo = document.createElement("h4");
      titulo.innerText = objeto[contador].name;

      let parrafo = document.createElement("p");
      parrafo.innerText = objeto[contador].precio;
      parrafo.style.color = "black";
      parrafo.style.textAlign = "left";
      parrafo.style.marginTop = "0";

      let boton = document.createElement("button");
      boton.setAttribute("onclick", "mandarCarrito(this.parentElement)");
      boton.classList.add("btn", "btn-success");
      boton.innerText = "Agregar al Carrito";

      cardBody.appendChild(img);
      cardBody.appendChild(titulo);
      cardBody.appendChild(parrafo);
      cardBody.appendChild(boton);
      card.appendChild(cardBody);
      col.appendChild(card);
      row.appendChild(col);
      contador++;

      if (contador == objeto.length) {
        container.appendChild(row);
        break a;
      }
    }
    container.appendChild(row);
  }
}

function filtrar(filtro){
    localStorage.setItem("filtrado", filtro)
    window.location.href = "productos/productos.html"
}


function mandarCarrito(elemento) {
  console.log(elemento);
  factoryCarrito(
    elemento.children[0].src,
    elemento.children[1].innerText,
    elemento.children[2].innerText
  );
}

function factoryCarrito(img, titulo, precio) {
  console.log(img);
  console.log(titulo);
  console.log(precio);
  let cantidadProductos = document.querySelector(".comprasCheckOut");
  const base = document.getElementById("ProductosCarrito");
  console.log(cantidadProductos.children.length);

  let copia = `           <img src="${img}" alt="">
                            <div class="productoInformacion">
                                <p>${titulo}</p>
                                <span>1kg x <strong>${precio}</strong></span>
                                <img src="./img/cerrar.png" alt="boton cerrar" width="32px" height="32px" onclick="borrar(this)">
                            </div>`;
  let newProduct = base.cloneNode(true);
  newProduct.innerHTML = copia;
  newProduct.id += cantidadProductos.children.length - 2;
  console.log(newProduct);
  cantidadProductos.insertBefore(newProduct, cantidadProductos.children[2]);
}

//Evento para las cartas de prodctos en descuento
let objetoDescuentos = [];
    fetch("http://localhost:3000/productosDescuento")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        objetoDescuentos = Array.from(data);
        llenerDescuentos();
      });

      
function llenerDescuentos(){
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
}
}
