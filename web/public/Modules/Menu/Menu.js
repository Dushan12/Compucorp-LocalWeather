(function() {

	var app = angular.module("MenuModule", []);

	app.directive('mainMenu', ['$rootScope', function($rootScope) {
        return {
            restrict: 'E',
            templateUrl: 'Modules/Menu/Menu.html',
            link: function (scope, elem) {
            	scope.menuItems = [];
            			var menuItems = [
            				{ url: '#/emailProvider', displayName: 'Email Provider'}
					    ];
					    scope.menuItems = menuItems;

            }
        }
    }]);

}());