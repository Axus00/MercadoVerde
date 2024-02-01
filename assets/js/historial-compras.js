let tbody = document.getElementById("tbody")
    fetch("http://localhost:3000/ordens_history")
    .then(response => {return response.json()})
    .then(data => {
        data.forEach(registro => {
            if(registro.id_usuario == sessionStorage.getItem("id")){
                let tr = document.createElement("tr")
                tr.innerHTML = ` 
                <td>${registro.id}</td>
                <td>${registro.date}</td>
                <td>${registro.total}</td>
                <td>${registro.state}</td>
                <td class="link" onclick="detalles('${registro.productos}')">Ver Detalles</td>`
                tbody.appendChild(tr)
            }
        })
    })

function detalles(productos){
    let lista = productos.split(",")
    lista.forEach(element => {
        fetch("http://localhost:3000/products/"+element)
        .then(response => {return response.json()})
        .then(data => {
            console.log(data)
        })
    })
}