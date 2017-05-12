app.controller('ProfileCtrl', function($scope, $http, profileFactory) {
    // profileFactory.getLike().then(likes => $scope.likes = likes);
    // console.log('likes', profileFactory.getLike());

    $scope.ShowLikes = function(like) {
        $http.get(`./addUserPost`)
        .then(function(saved) {
            console.log('saved', saved)
        })
    }
})