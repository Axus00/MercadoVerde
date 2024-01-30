//función para cuando le den click al logo de la web
let titulo = document.getElementById("titulo");

titulo.addEventListener('click', () => {
    console.log('Hay un click');

    location.href = "index.html";
    
}) //Fin de funcionalidad para volver a la web




let objeto = [];
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

let suma = 0;

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
      <img src="./img/cerrar.png" alt="boton cerrar" width="32px" height="32px" onclick="borrar((this.parentElement).parentElement)">
    </div>`;

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
}

