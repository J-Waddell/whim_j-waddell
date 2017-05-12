app.controller('ExploreCtrl', function($scope, $http, exploreFactory) {
    exploreFactory.get6P().then(posts => $scope.posts = posts);
        console.log("posts", exploreFactory.get6P());

    $scope.ShowSrch= function(result) {
        $http.get(`https://www.reddit.com/search.json?q=${result}`)
        .then(function(search) {
            console.log("search", search)
        })
    }

    $scope.addPostToLikes = function(post) {
        console.log('post', post)
        exploreFactory.userLike(post);
    }
});