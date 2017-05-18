app.controller('ProfileCtrl', function($scope, $http, profileFactory) {
    profileFactory.getPost().then(likes => $scope.likes = likes);
    console.log('likes', profileFactory.getPost());

    $scope.ShowLikes = function(like) {
        $http.get(`http://localhost:3000/getUserLikes`)
        .then(function(saved) {
        })
    }

    $scope.DeleteLike = function(gone) {
        // console.log("gone", gone)
        // profileFactory.deletePost(gone).then()
        $http.post(`http://localhost:3000/deleteUsersPost/${gone}`)
        .then(function(removed) {
            console.log("gone", removed)
        })
    }

    // $scope.addPostToLikes = function(like) {
    //     console.log('like', like)
    //     exploreFactory.userLike(like);
    // }
})