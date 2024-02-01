//se conecta los usuarios con la base de datos para el login

let email = document.getElementById("email");
let password = document.getElementById("password");
let ingresar = document.querySelector("#login");

function submit(){
  console.log("hola")
  if(email.value === "" && password.value === ""){
    alert("Ingrese datos válidos")
    return
  }
  fetch("http://localhost:3000/users")
  .then(response => {return response.json()}).then(data => {

      let user = data.find(element => element.email === email.value && element.password === password.value);

      if(user){
        sessionStorage.setItem("id", user.id)
        console.log(user)
        window.location.href = ".././panel-de-control.html"
      }else {
        alert("Diligencie todos los campos")
      }
    
  })
  .catch(error => {
    console.error("Error al consultar con la data: ", error)
  });
};
