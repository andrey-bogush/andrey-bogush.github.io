function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 37.777460, lng: -122.439846};
    
    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'San Francisco, United States' // Title Location
    });
}