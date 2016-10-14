module.exports = function(assets) {

    assets.addCss(__dirname + '/public/css/libs/bootstrap.css')
	assets.addCss(__dirname + '/public/css/libs/bootstrap-theme.css')
	assets.addCss(__dirname + '/public/css/libs/font-awesome.min.css')
	assets.addCss(__dirname + '/public/css/libs/jquery-ui.css')
 	assets.addCss(__dirname + '/public/bower_components/angular-ui-notification/dist/angular-ui-notification.css')	
    assets.addCss(__dirname + '/public/css/style.css')
	assets.addCss(__dirname + '/public/Modules/WeatherData/Metric/MetricWeatherStyle.css')

	assets.addJs(__dirname + '/public/js/libs/jquery.js')
	assets.addJs(__dirname + '/public/js/libs/jquery-ui.js')
	assets.addJs(__dirname + '/public/js/libs/bootstrap.js')
	assets.addJs(__dirname + '/public/js/libs/angular.js')
	assets.addJs(__dirname + '/public/js/libs/angular-route.js')
	assets.addJs(__dirname + '/public/js/libs/angular-resource.js')
	assets.addJs(__dirname + '/public/js/libs/angular-sanitize.js')
	//assets.addJs(__dirname + '/public/js/libs/angular-mocks.js')
	assets.addJs(__dirname + '/public/js/libs/ui-bootstrap-tpls.js')
	assets.addJs(__dirname + '/public/js/libs/moment.js')
	assets.addJs(__dirname + '/public/js/libs/ui-bootstrap-tpls-0.14.3.js')
	assets.addJs(__dirname + '/public/bower_components/angular-ui-notification/dist/angular-ui-notification.js')	



	assets.addJs(__dirname + '/public/config.js')	
	assets.addJs(__dirname + '/public/Modules/MainModule/MainModule.js')
	assets.addJs(__dirname + '/public/Modules/Menu/Menu.js')
	assets.addJs(__dirname + '/public/Modules/DatabaseFactory/DatabaseFactory.js')
	assets.addJs(__dirname + '/public/Modules/LandingPage/LandingPageModule.js')
	assets.addJs(__dirname + '/public/Modules/WeatherModule/WeatherController.js')
	assets.addJs(__dirname + '/public/Modules/WeatherModule/CurrentLocation/CurrentLocationModule.js')
	assets.addJs(__dirname + '/public/Modules/WeatherModule/InsertLocation/InsertLocationModule.js')	
	assets.addJs(__dirname + '/public/Modules/WeatherData/Metric/MetricWeatherData.js')
	

};