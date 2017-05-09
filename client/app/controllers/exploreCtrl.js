app.controller('ExploreCtrl', ['$scope', 'topFactory', function($scope, topFactory) {
    $scope.posts = topFactory.get5P()
        console.log("posts", $scope.posts)
}]);