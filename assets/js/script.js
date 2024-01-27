//globales
let suma = 0;
let local = {}
let objeto = [];
atributoLocal = 0;
if(location.href.includes("index.html")){
localStorage.setItem("controlador", "no") 
}

if(localStorage.getItem("productos")){
  let cantidadProductos = document.querySelector(".comprasCheckOut");
  let objeto = JSON.parse(localStorage.getItem("productos"))
  for (const key in objeto) {
    console.log(key + " : " + objeto[key])
    let copia = document.createElement("div");
    copia.classList.add("productosSeleccionados")
    copia.id = "ProductosCarrito" + ((cantidadProductos.children).length - 1)
    copia.innerHTML = objeto[key]
    let precio = copia.querySelector("strong").innerText
    actualizarCarrito((cantidadProductos.children).length - 1, precio)
    cantidadProductos.insertBefore(copia, cantidadProductos.children[cantidadProductos.children.length - 1]);
        
      
    }
  }

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
        window.location.href = "./index.html";
        alert("ha ingresado correctamente");
        sessionStorage.setItem("sesionUsuario", email.value);
    }
    event.preventDefault();
};

let button = document.querySelector("button").addEventListener("click", submit);




fetch("http://localhost:3000/products")
.then((response) => {
  return response.json();
})
.then((data) => {
  objeto = Array.from(data);
  llenerDescuentos("containerPopulares");
});


function filtrar(filtro){
    localStorage.setItem("filtrado", filtro)
    window.location.href = "./productos/productos.html"
}


function mandarCarrito(elemento) {
  factoryCarrito(
    elemento.children[0].src,
    elemento.children[1].innerText,
    elemento.children[2].innerText
  );
}

//evento cerrar y abrir carrito


function mostrar(){
  /* const carrito = document.getElementById('carrito');
    const closeShop = document.getElementById('closeShop'); */

  const compras = document.getElementById("compras");
  compras.style.display = "block";

  const sombra = document.getElementById("sombras");
  sombra.style.display = "block";
}


function cerrar() {
  const compras = document.getElementById("compras");
  compras.style.display = "none";

  const sombra = document.getElementById("sombras");
  sombra.style.display = "none";
}





function factoryCarrito(img, titulo, precio) {

  let cantidadProductos = document.querySelector(".comprasCheckOut");
  actualizarCarrito((cantidadProductos.children).length - 1, precio)
  let copia = document.createElement("div");
  copia.classList.add("productosSeleccionados")
  copia.id = "ProductosCarrito" + ((cantidadProductos.children).length - 1)

  copia.innerHTML = `
    <img src="${img}" alt="">
    <div class="productoInformacion">
      <p>${titulo}</p>
      <span>1kg x <strong>${precio}</strong></span>
      <img src="./assets/img/cerrar.png" alt="boton cerrar" width="32px" height="32px" onclick="borrar((this.parentElement).parentElement)">
    </div>`;

    local["hijo"+atributoLocal] = copia.innerHTML
    localStorage.setItem("productos", JSON.stringify(local))
    atributoLocal++

  cantidadProductos.insertBefore(copia, cantidadProductos.children[cantidadProductos.children.length - 1]);
}

function borrar(objeto) {
  let precio = objeto.querySelector("strong").innerText
  objeto.remove()
  
  let cantidadProductos = document.querySelector(".comprasCheckOut");
  actualizarCarrito((cantidadProductos.children).length - 2, precio, true)
}

function actualizarCarrito(cantidadActual, precio, control){
  const cantidad = document.getElementById("cantidadProductos");
  const total = document.getElementById("totalAgregados"); 
  const precioCarrito = document.getElementById("bolsa");

  cantidad.innerText = `Carrito de Compra(${cantidadActual})`

  if(control){
    precio = String(precio)
    suma -= parseInt(precio.replaceAll(/[.*+\-?^${}()|[\]\\]/g, ""))

  }else{

    suma += parseInt(precio.replaceAll(/[.*+\-?^${}()|[\]\\]/g, ""))
    
  }
  var montoFormateado = suma.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  total.innerText = `$ ${montoFormateado}`
  precioCarrito.innerText = `$ ${montoFormateado}`

}

//Evento para las cartas de prodctos en descuento
objeto = []
    fetch("http://localhost:3000/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        objeto = Array.from(data);
        llenerDescuentos("containerDescuento");
      });

      
function llenerDescuentos(lugar){

  const containerDescuento = document.getElementById(lugar);
  const rowDescuento = document.createElement('div');
  rowDescuento.classList.add("row");

let cont = 0;

for(let i = 0; i < 12; i++){
    if(objeto[cont]){
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
        imgDescuento.src = objeto[cont].src;
        imgDescuento.style.width = "100vw";
        imgDescuento.style.height = "230px";
        imgDescuento.style.objectFit = "cover";
        
        
        //titulo
        const titulosDescuento = document.createElement('h4');
        titulosDescuento.innerText = objeto[cont].name;
        
        //p
        const parrafoDescuento = document.createElement('p');
        parrafoDescuento.innerText = objeto[cont].precio;
        
        //boton
        const botonDescuento = document.createElement('button');
        botonDescuento.innerText = "Añadir al Carrito";
        botonDescuento.classList.add("btn", "btn-success");
        botonDescuento.setAttribute("onclick", "mandarCarrito(this.parentElement)")
        
        
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
localStorage.setItem("controlador", "si")
}
