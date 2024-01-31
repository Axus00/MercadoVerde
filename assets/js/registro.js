//Se obtienen los valores para el registro}
const URL = "http://localhost:3000/users";
let nombre = document.getElementById("name");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let select = document.getElementById("miSelect");
let masculino = document.getElementById("masculino");
let femenino = document.getElementById("femenino");
let select2 = document.getElementById("miSelect2");
let mayorista = document.getElementById("wholesaler");
let personaNatural = document.getElementById("naturalPerson");
let password = document.getElementById("password");

let button = document.querySelector("#singUp");

button.addEventListener('click', submit);

function submit() {

    let registerUser = {
        status: "cliente",
        name: nombre.value,
        lastName: lastName.value,
        email: email.value,
        gender: select.value,
        comercial_activity: select2.value,
        password: password.value
    };
    
    fetch(URL, {
        method: "POST",
        body: JSON.stringify(registerUser),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(repsonse => {
        return repsonse.json()
    })
    .then(data => {
        console.log(data);
    })
}