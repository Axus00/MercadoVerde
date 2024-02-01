const searchContainer = document.querySelector('.search-box');
const inputSearch = searchContainer.querySelector('input');
const boxSuggestions = document.querySelector('.suggestions');

const button = document.getElementById('enlace');



inputSearch.onkeyup = (event) => {
    let userData = event.target.value
    let emptyArray = [];


    if(userData){
        emptyArray = suggestions.filter(data => {
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        })


        emptyArray = emptyArray.map(data => {
            return data = `<li>${data}</li>`
        })
        
        searchContainer.classList.add('active')
        mostrarSugerencias(emptyArray)


        let todaLista = boxSuggestions.querySelectorAll('li');

        todaLista.forEach(li => {
            li.setAttribute('onclick', 'select(this)')
        })

    } else {

        if(userData == ""){
            searchContainer.classList.remove('active')
            boxSuggestions.style.display = "none"
        }
    }

    
};


function select(element) {
    let selectUserData = element.textContent;
    inputSearch.value = selectUserData;

    if(selectUserData.toLocaleLowerCase() == "verduras"){
        button.href = `http://127.0.0.1:5500/index.html${inputSearch.value}`
    } else if (selectUserData.toLocaleLowerCase() == "frutas"){
        button.href = `https://www.google.com/search?q=${inputSearch.value}`
    } else if (selectUserData.toLocaleLowerCase() == "tienda") {
        button.href = `https://www.google.com/search?q=${inputSearch.value}`
    } else if (selectUserData.toLocaleLowerCase() == "políticas de privacidad") {
        button.href = `https://www.google.com/search?q=${inputSearch.value}`
    } else if (selectUserData.toLocaleLowerCase() == "términos y condiciones") {
        button.href = `https://www.google.com/search?q=${inputSearch.value}`
    } else if (selectUserData.toLocaleLowerCase() == "carrito de compras") {
        button.href = `https://www.google.com/search?q=${inputSearch.value}`
    }
    
    
    searchContainer.classList.remove('active');
}

const mostrarSugerencias = list => {
    let listData;

    if(!list.length){
        userValue = inputSearch.value;
        listData = `<li>${userValue}</li>`
    } else {
        listData = list.join('')
    }


    boxSuggestions.innerHTML = listData;
};

