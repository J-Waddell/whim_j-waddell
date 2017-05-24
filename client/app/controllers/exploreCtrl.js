app.controller('ExploreCtrl', function($scope, $http, exploreFactory) {
    exploreFactory.get6P().then(posts => $scope.posts = posts);
        console.log("posts", exploreFactory.get6P());


    $scope.ShowSrch= function(query) {
    exploreFactory.getSearch(query).then(info => $scope.posts = info)
        console.log("info", exploreFactory.getSearch())
        $http.get(`https://www.reddit.com/search.json?q=${query}`)
        .then(function(search) {
            console.log("search", search)
        })
    }

    $scope.addPostToLikes = function(post) {
        $http.post(`http://localhost:3000/addPost`, post)
        .then((data) => {
        })
    }
});