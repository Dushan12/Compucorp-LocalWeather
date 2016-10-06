(function() {

	var app = angular.module("InsertLocationModule", ['DatabaseFactoryModule', 'ngResource']);
	app.controller('InsertLocationController', ['$scope', 'Geolocation', 'WeatherData', 'Geocode', function($scope, Geolocation, WeatherData, Geocode)
	{			
		$scope.postcode = "1000"
		$scope.city = "Skopje"
		$scope.weather = {}
		$scope.getGeocoordinates = function(address, resolve, error) {
			
			Geocode.get({ address: address, key: "AIzaSyCEPlC_soXCV0G42S4rXeok8ItrDpNmNnE" }).$promise.then(function(res) {
				if(res.status == "OK")
				{	
					if(res.results != undefined && res.results.length > 0 && res.results[0].geometry != undefined)
						resolve({ lat: res.results[0].geometry.location.lat, lon: res.results[0].geometry.location.lng });
					else
						error("Result string is incorrect format")
				}
				else {
					error("Error loading geocode data. Status : " + res.status)
				}
			}, function(reason) {
				error(reason);
			})
		}

		$scope.GetWeatherData = function(coordinates, callback, error) {
			// validate
			WeatherData.get({ lat:coordinates.lat, lon:coordinates.lon, APPID: "be387e1d2d78b173ca0835a104bc614e"}).$promise.then(function(res) {
				callback(res);
			}, function(reason) {
				error(reason);
			})
		}

		$scope.getWeather = function() {
			var generatedAddress = $scope.postcode + " " + $scope.city
			$scope.getGeocoordinates(generatedAddress, 
				function(coordinates) {
					$scope.GetWeatherData(coordinates, function(result) {
						$scope.weather = new DOMAIN.WeatherResultMetric(result);
					}, function(reason) {
						console.log(reason)
					})
				}, function(reason){
					console.log(reason)
				})
		}

	}]);


}());