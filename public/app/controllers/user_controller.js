WannaApp.controller('UserController', function($scope, $location, AuthenticationService){
    
    $scope.login = function(){
      AuthenticationService.getAuth()
      .then(function(){
        $scope.userLoggedIn = true;
        $location.path('/');
      })
      .catch(function(){
        $scope.message = 'Kirjautuminen epäonnistui!'
      });
    }

    $scope.register = function(){
      AuthenticationService.createUser($scope.newEmail, $scope.newPassword)
      .then(function(){
        AuthenticationService.logUserIn($scope.newEmail, $scope.newPassword)
        .then(function(){
          $location.path('/lisaa');
        });
      })
      .catch(function(){
        $scope.message = 'Tapahtui virhe! Yritä uudestaan';
      });
    }
})