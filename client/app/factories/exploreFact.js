'use strict'

app.factory('topFactory', ['$http', function ($http) {

    const topFactory = {}

    const redditAPI = 'http://reddit.com/r/popular/.json?'
    const get5P = function() {
        return $http.get(`${redditAPI}limit=5`).then(function(top5results) {
            console.log("top5results", top5results)
            return top5results.data.data.children;
        })
    }

    topFactory.get5P = get5P;
    return topFactory;

}]);