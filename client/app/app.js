const app = angular.module('whim', ['ngRoute'])

app.config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('')
    $routeProvider
        .when('/home', {
            controller: 'HomeCtrl',
            templateUrl: '../partials/home.html'
        })
        .when('/', {
            controller: 'LoginCtrl',
            templateUrl: '../partials/login.html'
        })
        .when('/profile', {
            controller: 'ProfileCtrl',
            templateUrl: '../partials/profile.html'
        })
})