//Se captura el input de búsqueda
const search = document.getElementById("search");

document.addEventListener('keypress', search =>{
    
    if(search.target.marches('#search')){
        let searchDate = search.target.value.toLowerCase();
        document.querySelector('body').forEach(dato => {
            let contenido = dato.textContent.toLowerCase();

            if(contenido.includes(searchDate)){
                body.style.display = 'block';
            }
        })
    }
    
});
