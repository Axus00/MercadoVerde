// Evento sobre el popup de suscripcion.
window.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById('close');
    const popupContainer = document.getElementById('popup');
    const opacidad = document.getElementById('fondo-opaco');

    // Este archivo tambien se carga en paginas sin popup.
    if (!boton || !popupContainer || !opacidad) return;

    boton.addEventListener("click", function () {
        popupContainer.classList.remove('contenedor-popup');
        opacidad.style.display = "none";
    });

    setTimeout(function () {
        popupContainer.classList.add('contenedor-popup');
        opacidad.style.display = "block";
    }, 5000);
});

//evento para la pasarela de comrpas

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

