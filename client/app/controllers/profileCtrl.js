app.controller('ProfileCtrl', function($scope, $http, profileFactory) {
    profileFactory.getPost().then(likes => $scope.likes = likes);
    console.log('likes', profileFactory.getPost());

    $scope.ShowLikes = function(like) {
        $http.get(`http://localhost:3000/getUserLikes`)
        .then(function(saved) {
        })
    }

    // $scope.addPostToLikes = function(like) {
    //     console.log('like', like)
    //     exploreFactory.userLike(like);
    // }
})