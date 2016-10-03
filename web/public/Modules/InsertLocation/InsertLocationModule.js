(function() {

	var app = angular.module("InsertLocationModule", ['DatabaseFactoryModule', 'ngResource']);
	app.controller('InsertLocationController', ['$scope', 'Geolocation', 'WeatherData', function($scope, Geolocation, WeatherData)
	{
			
			$scope.GetGeolocation=function() {
				return Geolocation.GetLocation()
				
			}

			$scope.GetWeatherData = function(coordinates, callback, reason) {
				// validate
				WeatherData.get({ lat:coordinates.lat, lon:coordinates.lon, APPID: "be387e1d2d78b173ca0835a104bc614e"}).$promise.then(function(res) {
					callback(res);
				}, function(reason) {
					reason(reason);
				})
			}

			$scope.GetWeatherForGeolocation = function() {
				$scope.GetGeolocation().then(function(coordinates) {
					$scope.GetWeatherData(coordinates, function(result) {
						$scope.weather = result;
					}, function(reason) {
						console.log(reason)
					})
				}, function(reason) {
					console.log(reason);
				})
				
			}

			$scope.GetWeatherForGeolocation();

	}]);


}());