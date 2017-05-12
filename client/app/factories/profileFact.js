'use strict'

app.factory('profileFactory', function($http) {

    const profileFactory = {}
    const postedURL = './addUserPost'

    const getPost = function() {
        return $http.get(`./addUserPost`).then(function(favorited) {
            return favorited.data.data.children
        })
    }

    // profileFactory.userLike = userLike;
    // profileFactory.getPost = getPost;
    return profileFactory;
})