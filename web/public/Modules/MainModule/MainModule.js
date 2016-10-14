(function() {

    var app = angular.module('bfMainModule', ['ngRoute','LandingPageModule', 'WeatherModule', 'ui-notification']);

    app.config(['$routeProvider', '$compileProvider', '$httpProvider', 
        function ($routeProvider, $compileProvider, $httpProvider) {
        
        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|local|data):/);    
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|data):/);

        
            $routeProvider            
                .when('/coordinates', {
                    controller: 'CurrentLocationController',
                    templateUrl: 'Modules/WeatherModule/CurrentLocation/CurrentLocationTemplate.html',
                    reloadOnSearch: false
                })
                .when('/', {
                    controller: 'LandingPageController',
                    templateUrl: 'Modules/LandingPage/LandingPageTemplate.html',
                    reloadOnSearch: false
                })
                .when('/input', {
                    controller: 'InsertLocationController',
                    templateUrl: 'Modules/WeatherModule/InsertLocation/InsertLocationTemplate.html',
                    reloadOnSearch: false
                })
                .otherwise({ redirectTo: '/' });
    }]);

    app.config(['NotificationProvider', function(NotificationProvider) {
        NotificationProvider.setOptions({
            delay: 10000,
            startTop: 20,
            startRight: 10,
            verticalSpacing: 20,
            horizontalSpacing: 20,
            positionX: 'left',
            positionY: 'bottom'
        });
    }]);

    app.controller('bfMainController', ['$rootScope', '$location', '$http', '$scope', 
        function($rootScope, $location, $http, $scope) {      
    }]);

}());