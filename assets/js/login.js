//se conecta los usuarios con la base de datos para el login
let email = document.getElementById("email");
let password = document.getElementById("password");
let ingresar = document.querySelector("#login");

ingresar.addEventListener('click', submit);

function submit(){
  if(email.value === "" && password.value === ""){
    alert("Ingrese datos válidos")
    return
  }
  fetch("http://localhost:3000/users")
  .then(response => {return response.json()}).then(data => {

      let user = data.find(element => element.email === email.value && element.password === password.value);

      if(user){
        window.location.href = ".././index.html"
        let saveDates = {};
        sessionStorage.setItem("sesion",  user.status, JSON.stringify(saveDates))
      }else {
        alert("Diligencie todos los campos")
      }
    
  })
  .catch(error => {
    console.error("Error al consultar con la data: ", error)
  });
};
