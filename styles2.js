// L.map es la clase central de la API. Se usa para crear y manipular el mapa.
//  En el mapa establecemos unas coordeanas de la vista y un nivel de zoom.

var map = L.map('map').
// es la latitud y longitud de la zona que queremos mostrar, en nuestro caso Ibi 
setView([41.3870154, 2.1700471],
    15);

    // Añadiendo las capas de OpenStreetMap
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
}).addTo(map);

// Añadiendo un control de escala
L.control.scale().addTo(map);

// Añadiendo un marcador
// L.marker([41.3868561,2.1661102],{draggable: true}).addTo(map);
//MARCADOR contenido
var marker = L.marker([41.3868561,2.1661102]).addTo(map);
marker.bindPopup("<b>Restaurant Centfocs</b><br>Restaurante mediterráneo.<br>Carrer de balmes, 16, 08007 Barcelona").openPopup();


// Alert
// function onMapClick(e) {
    //     alert("You clicked the map at " + e.latlng);
    // }
    
    // map.on('click', onMapClick);
    
    // Popup
    var popup = L.popup();
    
    function onMapClick(e) {
        marker.remove(map);
        popup
        .setLatLng(e.latlng)
        .setContent("Mis coordenadas son: <br>" + e.latlng.toString())
        .openOn(map);
        
        
        // var marker = L.marker([e.latlng]).addTo(map);
        // marker.addTo(map);
        
        
        
}

map.on('click', onMapClick);