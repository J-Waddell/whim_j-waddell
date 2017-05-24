'use strict'

app.factory('exploreFactory', function ($http) {

    const exploreFactory = {}

    const redditSearch = 'https://www.reddit.com/search.json?q='
    const redditAPI = 'http://reddit.com/r/popular/.json?'
    const get6P = function() {
        return $http.get(`${redditAPI}limit=10`).then(function(top6results) {
            console.log("results breh", top6results)
            return top6results.data.data.children;
        })
    }

    const getSearch = function(query) {
        return $http.get(`${redditSearch}${query}`).then(function(queries) {
            console.log("more goodies", queries)
            return queries.data.data.children
        })
    }

    const getList = function() {
            return $http.get('http://reddit.com/r/popular/.json?')
            .then(function(httpResObj) {
                return httpResObj
            })
        }

    const userLike = function(likedPost) {
        $http({
            url: '/addUserPost',
            method: 'POST',
            data: {likedPost}
        }).then(function(data) {
            console.log("data", data)
            })
    }

    exploreFactory.getSearch = getSearch;
    exploreFactory.getList = getList;
    exploreFactory.get6P = get6P;
    exploreFactory.userLike = userLike;
    return exploreFactory;

});

// app.factory('searchFactory', function ($http) {
//     const searchFactory = {}
    
// })