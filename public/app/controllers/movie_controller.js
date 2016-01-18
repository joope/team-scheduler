WannaApp.controller('MovieController', function($scope, $location, $timeout, currentAuth, FirebaseService){
    $scope.movies = FirebaseService.getAllMovies();
    $scope.logged = currentAuth;
    if(currentAuth){
        $scope.userData = FirebaseService.getUser(currentAuth.uid);
    }
    function sortMovies(){
        $scope.movies.sort(function(a, b){ return b.votes - a.votes });
    }

    $scope.addMovie = function(){
        if(!$scope.userData.posted){
            if($scope.newMovie !== '' && $scope.newNick !== ''){
                FirebaseService.addMovie({
                    name: $scope.newMovie,
                    user: $scope.newNick.toLowerCase(),
                    userID: currentAuth.uid,
                    link: $scope.movieLink,
                    votes: 0
                });
                FirebaseService.addUser(currentAuth.uid,{
                    posted: true,
                    votes: 5
                });
                $location.path('/');
                sortMovies();
            }
        } else{
            console.log("lisätty jo leffa!");
        }
    };
    
    $scope.removeMovie = function(movie){
        FirebaseService.removeMovie(movie);
    }

    $scope.upvote = function(movie){
        if($scope.userData.votes > 0){
            movie.votes += 1;
            $scope.userData.votes -= 1;
            FirebaseService.saveUser($scope.userData);
            FirebaseService.save(movie);
            sortMovies();
        }
    }
    
    $scope.downvote = function(movie){
        movie.votes -= 1;
        FirebaseService.save(movie);
        sortMovies();
    }
    
    $timeout(sortMovies, 1500);

});
