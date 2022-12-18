
export class GeolocationService {
	static getLocation(callback) {
		navigator.geolocation.getCurrentPosition(
			(location) => callback(location)
		);
	}

}
