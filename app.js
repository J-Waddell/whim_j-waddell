const app = angular.module('whim', ['ngRoute'])

app.config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('')
    $routeProvider
        .when('/home', {
            controller: 'HomeCtrl',
            templateUrl: '/client/partials/home.html'
        })
})