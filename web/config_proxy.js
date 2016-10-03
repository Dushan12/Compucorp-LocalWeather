var CONFIG_PROXY = {
	version : function() { return "0.0.0.0"; },	
	httpTimeout : function() { return 30000; },
	debugmode : function() { return false; },
	config : {	
		applicationPort: function() {
			return 3090;
		},
		applicationSecureProtocol: function() {
			return false;
		},
		emailDataEndpoint: function() {
			return "http://graph.cognism.io/api/v1/enrichment/email"
		}
	}
}

module.exports.CONFIG_PROXY = CONFIG_PROXY;
