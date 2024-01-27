
//Evento sobre un popup
window.addEventListener("DOMContentLoaded", function (){
    setTimeout(function () {
        console.log('hay un evento');
        const popupContainer = document.getElementById('popup');
        const opacidad = document.querySelector('#fondo-opaco');
        
        const boton = document.getElementById('close');
        boton.setAttribute("onclick", "cerrarModal()")


        if(popupContainer){
            popupContainer.classList.replace('popup', 'contenedor-popup');
            opacidad.style.display = "block";
        }
    }, 5000);
});
function cerrarModal(){
  const popupContainer = document.getElementById('popup');
  const opacidad = document.querySelector('#fondo-opaco');
  popupContainer.classList.replace('contenedor-popup', 'popup');
  opacidad.style.display = "none";
  console.log("malparido")
  
}
//evento para la pasarela de comrpas


