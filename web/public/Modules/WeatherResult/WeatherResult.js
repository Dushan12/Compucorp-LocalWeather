var DOMAIN = function() {

	var WeatherResultFactory = function(raw_data, measures) {
		if(measures == "imperial") 
			return WeatherResultImperial(raw_data);
		return WeatherResultMetric(raw_data);
	}

	function WeatherResultBase(raw_data){
        this.raw_data = raw_data
		if(this.raw_data == undefined )
			this.raw_data =  {}		
		if(this.raw_data.main == undefined)
			this.raw_data.main = {}
		this.metricCoeficient = function(){ return 1 }
		this.pressureCoeficient = function(){ return 1 }
    }

    WeatherResultBase.prototype = {
		get clouds() {
			return this.raw_data.clouds
		},
		get humidity() {
			return this.raw_data.main.humidity
		},
		get pressure() {
			return (this.raw_data.main.pressure * this.pressureCoeficient()) + " hPa"
		},
		get sea_level() {
			return this.raw_data.main.sea_level * this.metricCoeficient()
		},
		get temp() {
			return this.raw_data.main.temp * this.metricCoeficient()
		},
		get temp_min() {
			return this.raw_data.main.temp_min * this.metricCoeficient()
		},
		get temp_max() {
			return this.raw_data.main.temp_max * this.metricCoeficient()
		}

	};

	WeatherResultMetric.prototype = new WeatherResultBase();
    WeatherResultMetric.constructor = WeatherResultMetric;

    function WeatherResultMetric( raw_data ){
        WeatherResultBase.call(this, raw_data)
		//function metricCoeficient(){ return 2 }
		//function pressureCoeficient(){ return 0.0145037738 }
		this.metricCoeficient = function(){ return 2 }
		this.pressureCoeficient = function(){ return 0.0145037738 }
    }

    WeatherResultImperial.prototype = new WeatherResultBase();
    WeatherResultImperial.constructor = WeatherResultImperial;

    function WeatherResultImperial( raw_data ){
        WeatherResultBase.call(this, raw_data)
    }

	

  return {
    WeatherResultMetric: WeatherResultMetric,
    WeatherResultImperial: WeatherResultImperial
  };

}();