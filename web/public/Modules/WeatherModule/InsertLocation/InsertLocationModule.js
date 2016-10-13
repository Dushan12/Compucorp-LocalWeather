(function() {

	var app = angular.module("WeatherModule");
	app.controller('InsertLocationController', ['$scope', 'Geolocation', 'WeatherData', 'Geocode', '$controller', 'Notification', 
		function($scope, Geolocation, WeatherData, Geocode, $controller, Notification)
	{			
		angular.extend(this, $controller('WeatherController', {$scope: $scope}));

		$scope.postcode = "1000"
		$scope.city = "Skopje"
		$scope.state = "Macedonia"

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
		
		$scope.getWeather = function() {
			var generatedAddress = $scope.postcode + " " + $scope.city + " " + $scope.state
			$scope.getGeocoordinates(generatedAddress, 
				function(coordinates) {
					$scope.GetWeatherData(coordinates)
				}, function(reason){
					Notification.warning(reason)
				})
		}

	}]);


}());