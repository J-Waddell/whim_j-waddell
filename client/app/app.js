const app = angular.module('whim', ['ngRoute'])

app.config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('')
    $routeProvider
        .when('/explore', {
            controller: 'ExploreCtrl',
            templateUrl: '../partials/explore.html'
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