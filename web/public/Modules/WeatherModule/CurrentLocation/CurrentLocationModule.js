(function() {

	var app = angular.module("WeatherModule");
	app.controller('CurrentLocationController', ['$scope', 'Geolocation', '$location', 'WeatherData', 'Notification', '$controller',
		function($scope, Geolocation, $location, WeatherData, Notification, $controller)
	{
		angular.extend(this, $controller('WeatherController', {$scope: $scope}));
		
		$scope.GetGeolocation=function() {
			return Geolocation.GetLocation()				
		}

		$scope.GetWeatherForGeolocation = function() {
			$scope.GetGeolocation().then(function(coordinates) {
				$scope.GetWeatherData(coordinates)
			}, function(reason) {
				Notification.warning(reason)
				$location.path('/input')
			})				
		}

		$scope.GetWeatherForGeolocation();

	}]);


}());