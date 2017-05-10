'use strict'

app.factory('topFactory', ['$http', function ($http) {

    const topFactory = {}

    const redditAPI = 'http://reddit.com/r/popular/.json?'
    const get6P = function() {
        return $http.get(`${redditAPI}limit=6`).then(function(top6results) {
            // console.log("top6results", top6results)
            return top6results.data.data.children;
        })
    }

    topFactory.get6P = get6P;
    return topFactory;

}]);