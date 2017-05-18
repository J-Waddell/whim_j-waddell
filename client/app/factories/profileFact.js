'use strict'

app.factory('profileFactory', function($http) {

    const profileFactory = {}
    const postedURL = 'http://localhost:3000/addPost'

    const getPost = function() {
        return $http.get(`http://localhost:3000/getUserLikes`).then(function(favorited) {
            return favorited.data
        })
    }

    // const deletePost = function(data) {
    //     console.log("data", data)
    //     return $http.delete('http://localhost:3000/deleteUsersPost').then(function(remove) {
    //         console.log("removed", remove)
    //         return remove
    //     })
    // }


    // profileFactory.userLike = userLike;
    profileFactory.getPost = getPost;
    // profileFactory.deletePost = deletePost
    return profileFactory;
})