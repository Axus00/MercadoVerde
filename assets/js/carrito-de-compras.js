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
                                <td>$${montoFormateado1}</td>
                            </tr>`
}

