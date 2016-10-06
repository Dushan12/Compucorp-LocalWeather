(function() {

	var app = angular.module("CurrentLocationModule", ['DatabaseFactoryModule', 'ngResource']);
	app.controller('CurrentLocationController', ['$scope', 'Geolocation', 'WeatherData', function($scope, Geolocation, WeatherData)
	{
			
			$scope.GetGeolocation=function() {
				return Geolocation.GetLocation()
				
			}

			$scope.GetWeatherData = function(coordinates, callback, error) {
				// validate
				WeatherData.get({ lat:coordinates.lat, lon:coordinates.lon, APPID: "be387e1d2d78b173ca0835a104bc614e"}).$promise.then(function(res) {
					callback(res);
				}, function(reason) {
					error(reason);
				})
			}

			$scope.GetWeatherForGeolocation = function() {
				$scope.GetGeolocation().then(function(coordinates) {
					$scope.GetWeatherData(coordinates, function(result) {
						$scope.weather = new DOMAIN.WeatherResultImperial(result);
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