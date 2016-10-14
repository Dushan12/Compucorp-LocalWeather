(function() {

	var app = angular.module("MetricWeatherDataModule", []);
	app.controller('MetricWeatherDataController', ['$scope', function($scope)
	{

	}]);

	app.directive("metricWeatherData", function() {
		return {
		    restrict: 'E',
		    transclude: true,
		    scope: {
		      'weatherData': '='
		    },
		    templateUrl: 'Modules/WeatherData/Metric/MetricWeatherDataTemplate.html',
		    link: function(scope, element, attrs) {
		    	
    		}
		};
	})


}());