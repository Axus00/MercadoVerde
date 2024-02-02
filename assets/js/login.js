//se obtiene sesion storage
const existSesion = sessionStorage.getItem("id");

if(existSesion){
  alert("El usuario ya está logeado");
  window.location.href = ".././panel-de-control.html";
}


//se conecta los usuarios con la base de datos para el login

function submit(){
  
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let ingresar = document.querySelector("#login");
  console.log("hola")
  
  
  if(email.value === "" && password.value === ""){
    alert("Ingrese datos válidos")
    
  }else if(email.value === "" || password.value === ""){
    alert("Tienes una información errada, verifica nuevamente")
    return
  }
  
  // se agarra el click del check
  const check = document.getElementById("miCheckBox");
  
  fetch("http://localhost:3000/users")
  .then(response => {return response.json()}).then(data => {
    
    let user = data.find(element => element.email === email.value && element.password === password.value);
    
    if(user && check){
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


