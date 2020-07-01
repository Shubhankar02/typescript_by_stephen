var GoogleMap = /** @class */ (function () {
    function GoogleMap(divId) {
        var element = document.getElementById(divId);
        this.googleMap = new google.maps.Map(element, {
            zoom: 1,
            center: {
                lat: 1,
                lng: 1
            }
        });
    }
    GoogleMap.prototype.addMarker = function (marker) {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: marker.location.lat,
                lng: marker.location.lng
            }
        });
    };
    return GoogleMap;
}());
export { GoogleMap };
