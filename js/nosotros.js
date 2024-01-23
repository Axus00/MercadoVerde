//se obtiene la url de la api maps de leaflet
let mapa = L.map("contenedor-del-mapa")
.setView([6.2193831, -76.5849115], 11)

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(mapa);

//Se cambia el marcador a una sirena de ambulancia
let iconoMarker = L.icon({
    iconUrl: '.././img/ambulancia.png',
    iconSize: [22, 22],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16]
});




//actualizar posición en el mapa
/* function actualizarPosicion() {


let nuevasCoordenadas = {
        lat: 6.2193831,
        lng: -76.5849115
};


if(nuevasCoordenadas){
    let marcador = L.marker([nuevasCoordenadas.lat, nuevasCoordenadas.lng], { icon: iconoMarker }).addTo(mapa);
    let coordenadas = `Sus coordenadas son de latitud: ${nuevasCoordenadas.lat} y longitud: ${nuevasCoordenadas.lng}`
       
    marcador.bindPopup(coordenadas);
    
    console.log(`Las nuevas coordenadas son: ${nuevasCoordenadas.lat} y ${nuevasCoordenadas.lng}`);
    mapa.setView([nuevasCoordenadas.lat, nuevasCoordenadas.lng], 11);
    
    mapa.eachLayer(function (layer) {
        if (layer instanceof L.marker) {
            layer.remove();
        }
    });

}


};

setInterval(actualizarPosicion, 5000); */