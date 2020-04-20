export interface markerInterface {
    location: {
        lat: number,
        lng: number
    },
    color : string
}

export class GoogleMap {
    private readonly googleMap: google.maps.Map;

    constructor(divId: string) {
        const element = document.getElementById(divId) as HTMLInputElement
        this.googleMap = new google.maps.Map(element, {
            zoom: 1,
            center: {
                lat: 1,
                lng: 1
            }
        })
    }

    addMarker(marker: markerInterface): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: marker.location.lat,
                lng: marker.location.lng
            }
        })
    }


}