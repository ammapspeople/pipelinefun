import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class GoogleMapService {

	googleMap: google.maps.Map;
	infoWindow = new google.maps.InfoWindow;
	venue: any;

	mapOptions = {
		// center: new google.maps.LatLng(18.5793, 73.8143),
		zoom: 17,
		maxZoom: 21,
		mapTypeControl: false,
		streetViewControl: false
	}

	// #region || LOAD GOOGLE MAP
	initMap() {
		return new Promise(async (resolve, reject) => {
			this.googleMap = await new google.maps.Map(document.getElementById('gmap'), this.mapOptions);
			resolve();
		});
	}
	// #endregion

	// // #region || SET INFO WINDOW AT MAP
	// //TODO: Maybe just move this to the places where it's called?
	// setInfoWindow() {
	// 	return new google.maps.InfoWindow({});
	// }
	// // #endregion
}