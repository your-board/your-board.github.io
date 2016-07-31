// public/js/appRoutes.js

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        // home page
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'mainController'
        })
        // board page that will use the BoardController
        .when('/boards', {
            templateUrl: 'views/boards.html',
            controller: 'boardCtrl'
        });

    $locationProvider.html5Mode(false);

}]);
