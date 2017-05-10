'use strict'

app.factory('userProfile', ['$http', function($http) {

    const userLike = function() {
        return $http.post(`/addUser`).then(function(data) {
            return data
        })
    }
}])