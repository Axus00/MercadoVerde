//se obtiene sesion storage
const existSesion = sessionStorage.getItem("id");
const existSesion2 = localStorage.getItem("id");

if(existSesion2){
  alert("El usuario ya está logeado");
  window.location.href = ".././panel-de-control.html";
}else if (existSesion){
  alert("El usuario ya está logeado");
  window.location.href = ".././panel-de-control.html";
}


//se conecta los usuarios con la base de datos para el login

function submit(){

  let control = document.getElementById("miCheckBox").checked
  
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let ingresar = document.querySelector("#login");

  
  
  if(email.value === "" && password.value === ""){
    alert("Ingrese datos válidos")
    
  }else if(email.value === "" || password.value === ""){
    alert("Tienes una información errada, verifica nuevamente")
    return
  }
  
  
  fetch("http://localhost:3000/users")
  .then(response => {return response.json()}).then(data => {
    
    let user = data.find(element => element.email === email.value && element.password === password.value);
    
    if(user){
      if(control){

        localStorage.setItem("id", user.id)
        console.log(user)
      }
      else{
        sessionStorage.setItem("id", user.id)
        console.log(user)
      }
      window.location.href = ".././panel-de-control.html"
    }else {
      alert("Diligencie todos los campos")
    }
    
  })
  .catch(error => {
    console.error("Error al consultar con la data: ", error)
  });
};


