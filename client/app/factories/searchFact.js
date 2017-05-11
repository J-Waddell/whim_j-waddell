'use strict'

app.factory('searchFactory', function($http) {
    return {
        getList : () => {
            return $http.get('http://reddit.com/r/popular/.json?')
            .then(function(httpResObj) {
                return httpResObj
            })
        }
    }
})