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

// customizar marcador
var customIcon = new L.Icon({
    iconUrl: 'https://image.flaticon.com/icons/svg/854/854866.svg',
    iconSize: [50, 50],
    iconAnchor: [25, 50]
});
var marker = L.marker([41.3868561,2.1661102]).addTo(map);
L.marker([41.3868561, 2.1661102], {
    icon: customIcon
}).addTo(map);
marker.bindPopup("<b>Restaurant Centfocs</b><br>Restaurante mediterráneo.<br>Carrer de balmes, 16, 08007 Barcelona").openPopup();

// Popup
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Mis coordenadas son: <br><br>" + e.latlng.toString())
        .openOn(map);

    // maxZoom: 35;

}
map.on('click', onMapClick);

// Añadiendo un circulo
var circle = L.circle([41.3868561, 2.1661102], {
    color: 'brown',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 70,

}).addTo(map);
circle.bindPopup("En esta zona se encuentra el restaurante seleccionado");


//RECTANGULO
var rectangle = L.polygon([
    [41.38976, 2.164392],
    [41.389277, 2.164993],
    [41.388569, 2.164134],
    [41.389096, 2.163255],


]).addTo(map);
rectangle.bindPopup("Parking gratuito.");

//TRIANGULO
var triangle = L.polygon([

    [41.387925, 2.17053],
    [41.387345, 2.171431],
    [41.388536, 2.172461],


]).addTo(map);
triangle.bindPopup("Aquí tenemos nuestro segundo restaurante");
