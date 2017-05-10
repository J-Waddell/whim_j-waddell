app.controller('ExploreCtrl', function($scope, topFactory) {
    topFactory.get6P().then(posts => $scope.posts = posts);
        console.log("posts", topFactory.get6P())
});