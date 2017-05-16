'use strict'

app.factory('profileFactory', function($http) {

    const profileFactory = {}
    const postedURL = './addUserPost'

    const getPost = function() {
        return $http.get(`./getUserLikes`).then(function(favorited) {
            console.log("help", favorited)
            return favorited.data
        })
    }

    const deletePost = function() {
        return $http.delete('./deleteUsersPost').then(function(remove) {
            console.log("removed", remove)
            return remove.data
        })
    }


    // profileFactory.userLike = userLike;
    profileFactory.getPost = getPost;
    profileFactory.deletePost = deletePost
    return profileFactory;
})