describe('My controller', function() {
    var $controller;

    beforeEach(module('WeatherModule'));

    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
    }));

    it('should contain GetWeatherData function', function() {
        var $scope = {};
        var controller = $controller('WeatherController', {
            $scope: $scope
        });
        expect($scope.GetWeatherData).toBeDefined();
    })

});
