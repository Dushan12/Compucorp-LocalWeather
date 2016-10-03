(function() {

    var app = angular.module('bfMainModule', ['ngRoute','LandingPageModule', 'CurrentLocationModule']);

    app.config(['$routeProvider', '$compileProvider', '$httpProvider', 
        function ($routeProvider, $compileProvider, $httpProvider) {
        
        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|local|data):/);    
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|data):/);

        $httpProvider.interceptors.push('responseObserver');
        
            $routeProvider            
                .when('/coordinates', {
                    controller: 'CurrentLocationController',
                    templateUrl: 'Modules/CurrentLocation/CurrentLocationTemplate.html',
                    reloadOnSearch: false
                })
                .when('/', {
                    controller: 'LandingPageController',
                    templateUrl: 'Modules/LandingPage/LandingPageTemplate.html',
                    reloadOnSearch: false
                })
                .otherwise({ redirectTo: '/' });
    }]);

    app.run(['$rootScope', function($rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, toState, toParams) {
            if(toParams)
                $rootScope.$broadcast('URL_PARAMETERS', toParams.params);
        });
    }]);

    app.controller('bfMainController', ['$rootScope', '$location', '$http', '$scope', 
        function($rootScope, $location, $http, $scope) {      
        
        $rootScope.appEnable = false;

        $rootScope.$on('URL_PARAMETERS', function(event, parameters) {
            $location.search(parameters);
        });  
    }]);

    app.factory('responseObserver', ['$q', '$window',function($q, $window) {
        return {
            'request': function(conf) {
                console.log('Request made');
                return conf;
            },
            'responseError': function(errorResponse) {
                switch (errorResponse.status) {
                    case 403: {
                        $window.location = COGNISMAPP.config.authenticationlogin();
                        break;
                    }
                    case 401: {
                        $window.location = COGNISMAPP.config.authenticationlogin();
                        break;
                    }
                }
                return $q.reject(errorResponse);
            }
        };
    }]);

}());