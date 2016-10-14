var COGNISMAPP = {
	version : function() { return "0.0.0.0"; },	
	httpTimeout : function() { return 30000; },
	debugmode : function() { return false; },
	organisation: function() { return 'Cognism' },
	config : {		
		weatherEndpoint: function() {
			return "/v1/weather/location"
		},
		geocodeEndpoint: function() {
			return "/v1/geocode"
		}
	}
}