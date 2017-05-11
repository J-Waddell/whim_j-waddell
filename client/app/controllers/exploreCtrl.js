app.controller('ExploreCtrl', function($scope, $http, topFactory) {
    topFactory.get6P().then(posts => $scope.posts = posts);
        console.log("posts", topFactory.get6P());

    $scope.ShowSrch= function(result) {
        console.log("result", result)
        $http.get(`https://www.reddit.com/search?q=${result}&restrict_sr=&sort=relevance&t=all/`)
        .then(function(search) {
            // console.log("search", search)
        })
    }
});