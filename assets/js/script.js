//globales
let objeto = [];
let suma = 0;
atributoLocal = 0;

if(localStorage.getItem("productos")){
  let cantidadProductos = document.querySelector(".comprasCheckOut");
  let objeto = JSON.parse(localStorage.getItem("productos"))

  for (const key in objeto) {
    let copia = document.createElement("div");
    let id = objeto[key].substring(objeto[key].indexOf("id=")+3)
    objeto[key] = objeto[key].replace("id="+id,"")
    copia.classList.add("productosSeleccionados")
    copia.id = id
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
    elemento.children[2].innerText,
    elemento.id
  );
}

function factoryCarrito(img, titulo, precio, id) {

  let cantidadProductos = document.querySelector(".comprasCheckOut");
  let productos = cantidadProductos.children;
  actualizarCarrito((cantidadProductos.children).length - 1, precio)
  let copia = document.createElement("div");
  copia.classList.add("productosSeleccionados")
  copia.id = id

  copia.innerHTML = `
    <img src="${img}" alt="">
    <div class="productoInformacion">
      <p>${titulo}</p>
      <span>1kg x <strong>${precio}</strong></span>
      <img src="./assets/img/cerrar.png" alt="boton cerrar" width="32px" height="32px" onclick="borrar((this.parentElement).parentElement)">
    </div>`;
    cantidadProductos.insertBefore(copia, cantidadProductos.children[cantidadProductos.children.length - 1]);
    let local = {}
        for (let i = 1; i < productos.length - 1; i++) {
          local["hijo"+i] = productos[i].innerHTML+"id="+productos[i].id
          localStorage.setItem("productos", JSON.stringify(local))
          
        }
}

function borrar(objeto) {
  let precio = objeto.querySelector("strong").innerText
  objeto.remove()
  let local = {}
  
  let cantidadProductos = document.querySelector(".comprasCheckOut");
  actualizarCarrito((cantidadProductos.children).length - 2, precio, true)
    let productos = cantidadProductos.children;
  
    if(productos.length == 2){
      localStorage.removeItem("productos")
    }
    else{
  for (let i = 1; i < productos.length -1; i++) {
    local["hijo"+i] = productos[i].innerHTML+"id="+productos[i].id
    
  }
  localStorage.setItem("productos", JSON.stringify(local))
}
}

function actualizarCarrito(cantidadActual, precio, control){
  const cantidad = document.getElementById("cantidadProductos");
  const total = document.getElementById("totalAgregados"); 
  const precioCarrito = document.getElementById("bolsa");

  cantidad.innerText = cantidad.innerText.replace(/[0-9]/g,cantidadActual)
  precio = precio.replace(",", ".")

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
{
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
}
      
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
        cardBodyDescuento.id = objeto[cont].id
        
        
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
}

