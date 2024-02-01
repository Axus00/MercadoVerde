let cantidadProductos = document.querySelector(".comprasCheckOut").children;
let insertarProductos = document.getElementById("tbody")
let pagos = document.getElementById("pagos")
let suma1 = 0;

function cargar(){
for(let i = 1; i < cantidadProductos.length - 1; i++){
    fetch("http://localhost:3000/products/"+cantidadProductos[i].id)
    .then(response => {return response.json()})
    .then(data => {
        llenar(data)
    })
}
}

function llenar(data){

        let subTotal = parseInt(data.precio.replaceAll(/[.*+\-?^${}()|[\]\\]/g, "")) * 5
        suma1 += subTotal;
        var montoFormateado = subTotal.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        let tr = document.createElement("tr")
        tr.id = data.id
        tr.innerHTML = `
        <td><img src="${data.src}" alt="pimentón verde" width="100px" height="100px"></td>
        <td>${data.precio}</td>
        <td>5</td>
        <td name="subtotal">$${montoFormateado}</td>`

        
        insertarProductos.appendChild(tr)
        var montoFormateado = suma1.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        let total = suma1 + 25000
        var montoFormateado1 = total.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        pagos.innerHTML = `<tr>
                                <td>Subtotal:</td>
                                <td>$${montoFormateado}</td>
                            </tr>
                            <tr>
                                <td>Shipping:</td>
                                <td>$25.000</td>
                            </tr>
                            <tr>
                                <td>Total:</td>
                                <td id="totalCompra">$${montoFormateado1}</td>
                            </tr>`
}

function mandardb(){
    let idsproductos = insertarProductos.children
    let registro = {
        date: "01/FEB/2024",
        total : document.getElementById("totalCompra").innerText,
        state : "Proceso",
        id_usuario : sessionStorage.getItem("id"),
        productos : []
    }
    for(let i = 0; i < idsproductos.length; i++){
        registro.productos.push(idsproductos[i].id)
    }

    console.log(registro)

        fetch("http://localhost:3000/ordens_history",{
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(registro)
        })
}