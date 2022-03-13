function mapLoad(){
    var latLng = [41.793849, -87.585555];
    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">0penStreetMap</a> contributors,' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
    mbUrl='https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifo.rJcFIG214AriI SLbB6B5aw';
    var grayscale = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tilrSize: 512, zoomOffset: -1, attribution: mbAttr});
    var streets = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
    var map = L.map('map', {
        center: latLng,
        zoom: 16,
        layers: [streets]
    });
    var baseLayers = {
        "Grayscale": grayscale,
        "Streets": streets
      };
    L.control.layers(baseLayers).addTo(map);
    L.marker(latLng).addTo(map)
      .bindPopup("<b>Andres<br>Studio</b>").openPopup();
    var popup = L.popup();
    function onMapClick(e){
        popup
        .setLatLng(e.latLng)
        .setContent("You clicked the map at "+ e.latLng.toString())
        .openOn(map);
    }
    map.on('click', onMapClick);
}

    





function howdy(MyFriend) {
    alert("Howdy "+MyFriend);
}

function evalNumber(){
    var inputValue = prompt("Enter any five-digit number withou commas")
    if (isNaN(inputValue)) {
        alert(inputValue + " is not a number.")
    } else if (inputValue % 2 == 0){
        alert(inputValue + " is an even number.")
    } else {
        alert(inputValue + " is an odd number.")
    }
}

function changeTitle(){
    let selecteElement = document.getElementById("time display")
    selecteElement.innerText = new Date()
}

function hideFunction() { 
	document.getElementById("paragraph").style.display="none"; 
}

