var CONFIG_PROXY = {
	version : function() { return "0.0.0.0"; },	
	httpTimeout : function() { return 30000; },
	debugmode : function() { return false; },
	config : {	
		applicationPort: function() {
			return 80;
		},
		applicationSecureProtocol: function() {
			return false;
		},
		emailDataEndpoint: function() {
			return "http://graph.cognism.io/api/v1/enrichment/email"
		},
		geocodeEndpoint: function(address, key) {
			return "https://maps.googleapis.com/maps/api/geocode/json"
		},
		weatherDataUrl: function() {
			return "http://api.openweathermap.org/data/2.5/weather"
		}
	}
}

module.exports.CONFIG_PROXY = CONFIG_PROXY;
