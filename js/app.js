
//Evento sobre un popup
window.addEventListener("DOMContentLoaded", function (){
    setTimeout(function () {
        console.log('hay un evento');
        
        const boton = document.getElementById('close');
        const popupContainer = document.getElementById('popup');
        const opacidad = document.querySelector('#fondo-opaco');


        if(popupContainer){
            popupContainer.classList.replace('popup', 'contenedor-popup');
            opacidad.style.display = "block";
        }
        boton.addEventListener("click", function(){
            popupContainer.classList.replace('contenedor-popup', 'popup');
            opacidad.style.display = "none";
            console.log('hay un click');
            
        })
    }, 5000);
});

//evento para la pasarela de comrpas

function mostrar(){
    const carrito = document.getElementById('carrito');
    const compras = document.getElementById('compras');
    const closeShop = document.getElementById('closeShop');
    
    if(carrito){
        alert("Compras")
    }

    closeShop.addEventListener('click', () => {
        console.log('cerrar');
        if(closeShop){
            compras.style.display = "none";
        }
    });
}