(function() {

	var databaseModule = angular.module('DatabaseFactoryModule', ['LocalStorageModule', 'ngResource']);

	databaseModule.service('Geolocation', ['$q', function ($q) {
		this.GetLocation = function () {
			return $q(function(resolve, reject) {
				try {
					navigator.geolocation.getCurrentPosition(function(res) { 
						resolve({ lat: res.coords.latitude, lon: res.coords.longitude });
					},function (error) { 
					      reject(error.message);
					})
				}
				catch(e) {
					reject(e);
				}
			});
			
			
		};
	}]);

	databaseModule.factory('WeatherData', ['$resource', function($resource) {
		return $resource(COGNISMAPP.config.weatherEndpoint(),
			{lon: '@_lon', lat: '@_lat', key:'@_key', units: "@_units"}, //&units=metric
			{
				get: {
					method: 'GET'
				}			
			});
		//http://api.openweathermap.org/data/2.5/weather?lat=41.997346&lon=21.427996&APPID=be387e1d2d78b173ca0835a104bc614e
	}])

	databaseModule.factory('Geocode', ['$resource', function($resource) {
		return $resource(COGNISMAPP.config.geocodeEndpoint(),
			{address: "@_address", key: "@_key"},
			{
				get: {
					method: 'GET'
				}			
			});
		//https://maps.googleapis.com/maps/api/geocode/json?address=1000,%20Skopje&key=AIzaSyCEPlC_soXCV0G42S4rXeok8ItrDpNmNnE
	}])

}());