var COGNISMAPP = {
	version : function() { return "0.0.0.0"; },	
	httpTimeout : function() { return 30000; },
	debugmode : function() { return false; },
	organisation: function() { return 'Cognism' },
	config : {		
		emailDataEndpoint: function() {
			return "/api/v1/enrichment/email/:id"
		}
	}
}