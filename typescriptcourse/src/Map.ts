import LatLng = google.maps.LatLng;

export interface PositionAble {
    location: {
        lat: number;
        lon: number;
    };
    describe(): string;
}

export class Map {
    private readonly map: google.maps.Map;

    constructor(el: Element) {
        this.map = new google.maps.Map(el, {
            center: new LatLng(0, 0),
            zoom: 5,
            controlSize: 50
        });
    }

    addMarker(pos: PositionAble): void {
        const infoWindow = new google.maps.InfoWindow({
            content: pos.describe()
        });

        const marker = new google.maps.Marker(
            {
                map: this.map,
                position: {
                    lat: pos.location.lat,
                    lng: pos.location.lon
                }}
        );

        marker.addListener("click", () => {
            infoWindow.open(this.map, marker);
        });
    }

}