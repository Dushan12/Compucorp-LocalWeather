(function() {

	var app = angular.module("WeatherModule", ['DatabaseFactoryModule', 'ngResource', 'MetricWeatherDataModule', 'ui-notification', 'WeatherModule']);
	
	app.controller('WeatherController', ['$scope', 'WeatherData', 'Notification', function($scope, WeatherData, Notification)
	{
		$scope.GetWeatherData = function(coordinates, callback, error) {
			WeatherData.get({ lat:coordinates.lat, lon:coordinates.lon, APPID: "be387e1d2d78b173ca0835a104bc614e", units: "metric"}).$promise.then(function(res) {
				$scope.weather = res//new DOMAIN.WeatherResultImperial(result);
				Notification.info("Weather data loaded successfuly")
			}, function(reason) {
				console.log(reason)
				Notification.warning(reason)
			})
		}

	}]);


}());