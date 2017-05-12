'use strict'

app.factory('exploreFactory', function ($http) {

    const exploreFactory = {}

    const redditAPI = 'http://reddit.com/r/popular/.json?'
    const get6P = function() {
        return $http.get(`${redditAPI}limit=6`).then(function(top6results) {
            return top6results.data.data.children;
        })
    }

    const getList = function() {
            return $http.get('http://reddit.com/r/popular/.json?')
            .then(function(httpResObj) {
                return httpResObj
            })
        }

    // const userLike = function(likedPost) {
    //     $http.post('./addUserPost',{likedPost}).then(function(data) {
    //         console.log("data", data)
    //         return data
    //     })
    // }

    const userLike = function(likedPost) {
        $http({
            url: '/addUserPost',
            method: 'POST',
            data: {likedPost}
        }).then(function(data) {
            console.log("data", data)
            // return data
        })
    }

    exploreFactory.getList = getList;
    exploreFactory.get6P = get6P;
    exploreFactory.userLike = userLike;
    return exploreFactory;

});