
function agregarDatos (){
    const datosTabla = [
        {id: '#703', fecha: '15 Feb, 2024', total: '$25.000(1 Producto)', estatus: 'En Camino', acciones: 'Ver Detalles'},
        {id: '#130', fecha: '30 Dic, 2024', total: '$250.000(4 Productos)', estatus: 'Completado', acciones: 'Ver Detalles'},
        {id: '#561', fecha: '15 Nov, 2024', total: '$35.000(1 Producto)', estatus: 'Completado', acciones: 'Ver Detalles'},
        {id: '#536', fecha: '25 Mar, 2024', total: '$578.000(13 Productos)', estatus: 'Completado', acciones: 'Ver Detalles'},
        {id: '#492', fecha: '15 Feb, 2024', total: '$345.000(7 Productos)', estatus: 'Completado', acciones: 'Ver Detalles'},
    ]
    let tbody = document.getElementById('tbody');
    tbody.innerHTML = '';

    datosTabla.forEach(element => {
        console.log(element.datosTabla);
        
        let tr = document.createElement('tr');
        tr.innerHTML += `
                        <td>${element.id}</td>
                        <td>${element.fecha}</td>
                        <td>${element.total}</td>
                        <td>${element.estatus}</td>
                        <td>${element.acciones}</td>`

        tbody.appendChild(tr);
    })
};