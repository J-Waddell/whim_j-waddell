'use strict'

app.factory('userProfile', ['$http', function($http) {

    const userLike = function() {
        return $http.post(`/addUserPost`).then(function(data) {
            return data
        })
    }
}])