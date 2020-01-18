"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LatLng = google.maps.LatLng;
var Map = /** @class */ (function () {
    function Map(el) {
        this.map = new google.maps.Map(el, {
            center: new LatLng(0, 0),
            zoom: 5,
            controlSize: 50
        });
    }
    Map.prototype.addMarker = function (pos) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: pos.describe()
        });
        var marker = new google.maps.Marker({
            map: this.map,
            position: {
                lat: pos.location.lat,
                lng: pos.location.lon
            }
        });
        marker.addListener("click", function () {
            infoWindow.open(_this.map, marker);
        });
    };
    return Map;
}());
exports.Map = Map;
