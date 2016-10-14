exports.httpBackendMock = function() {
    angular.module('httpBackendMock', ['bfMainModule', 'ngMockE2E'])
    .run(function($httpBackend) {

        console.log('Test platform bootstrapping');  

		$httpBackend.whenGET(
	      'http://api.openweathermap.org\/.*/')  
	      .respond(function(method,url,requestData) {
	      	[200, {"coord":{"lon":21.43,"lat":42},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":3.25,"pressure":967,"humidity":90,"temp_min":3.25,"temp_max":3.25,"sea_level":1036.92,"grnd_level":967},"wind":{"speed":0.67,"deg":352.501},"clouds":{"all":0},"dt":1476429201,"sys":{"message":0.0077,"country":"MK","sunrise":1476420372,"sunset":1476460403},"id":785842,"name":"Skopje","cod":200}, {}] 
	      });
    	$httpBackend.whenGET(/^Modules\//).passThrough();
        //$httpBackend.whenGET('Modules/WeatherModule/CurrentLocation/CurrentLocationTemplate.html').passThrough();        

        console.log('Test platform bootstrapping ... done');

    });
}
