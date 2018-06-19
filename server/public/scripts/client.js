const ngApp = angular.module('ngApp', ['ngRoute']);

ngApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html'
    }).when('/rent', {
        templateUrl: 'views/rent.html'
    }).when('/sales', {
        templateUrl: 'views/sales.html'
    }).otherwise({
        template: `<h1> 404 No Bueno / C'EST PERDU</h1>`

    });
});