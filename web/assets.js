module.exports = function(assets) {

    //assets.addCssUrl('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.css')
	//assets.addCssUrl('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.css')
	//assets.addCssUrl('https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css')
	//assets.addCssUrl('https://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css')

	assets.addCss(__dirname + '/public/css/libs/bootstrap.css')
	assets.addCss(__dirname + '/public/css/libs/bootstrap-theme.css')
	//assets.addCssUrl("https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css")
	assets.addCss(__dirname + '/public/css/libs/font-awesome.min.css')
	assets.addCss(__dirname + '/public/css/libs/jquery-ui.css')

    assets.addCss(__dirname + '/public/css/Progress/progress.css')    
    assets.addCss(__dirname + '/public/css/style.css')

	assets.addJs(__dirname + '/public/js/libs/jquery.js')
	assets.addJs(__dirname + '/public/js/libs/jquery-ui.js')
	assets.addJs(__dirname + '/public/js/libs/bootstrap.js')
	assets.addJs(__dirname + '/public/js/libs/angular.js')
	assets.addJs(__dirname + '/public/js/angular-material/angular-aria.js')
	assets.addJs(__dirname + '/public/js/angular-material/angular-animate.js')
	assets.addJs(__dirname + '/public/js/angular-material/angular-material.js')
	assets.addJs(__dirname + '/public/js/angular-material/angular-messages.js')
	assets.addJs(__dirname + '/public/js/libs/angular-route.js')
	assets.addJs(__dirname + '/public/js/libs/angular-cookies.js')
	assets.addJs(__dirname + '/public/js/libs/angular-resource.js')
	assets.addJs(__dirname + '/public/js/libs/angular-sanitize.js')
	assets.addJs(__dirname + '/public/js/libs/angular-mocks.js')
	assets.addJs(__dirname + '/public/js/libs/ui-bootstrap-tpls.js')
	assets.addJs(__dirname + '/public/js/libs/angular-local-storage.js')
	assets.addJs(__dirname + '/public/js/libs/moment.js')
	assets.addJs(__dirname + '/public/js/libs/ui-bootstrap-tpls-0.14.3.js')
	assets.addJs(__dirname + '/public/js/notify/bootstrap-notify.js')	
	assets.addJs(__dirname + '/public/config.js')	
	assets.addJs(__dirname + '/public/Modules/MainModule/MainModule.js')
	assets.addJs(__dirname + '/public/Modules/Menu/Menu.js')
	assets.addJs(__dirname + '/public/Modules/BlockUI/angular-block-ui.js')
	assets.addJs(__dirname + '/public/Modules/DatabaseFactory/DatabaseFactory.js')
	assets.addJs(__dirname + '/public/Modules/Utilities/UtilitiesModule.js')
	assets.addJs(__dirname + '/public/Modules/LandingPage/LandingPageModule.js')
	assets.addJs(__dirname + '/public/Modules/CurrentLocation/CurrentLocationModule.js')
	

};