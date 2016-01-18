var WannaApp = angular.module('WannaApp', ['ngRoute', 'firebase']);

WannaApp.config(function($routeProvider){
  $routeProvider
    .when('/', {
        controller: 'FormController',
        templateUrl: 'app/views/form.html',
    }).when('/login', {
        controller: 'UserController',
        templateUrl: 'app/views/login.html'
    }).otherwise({
        redirectTo: '/'
    });
});

WannaApp.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://wanna.firebaseio.com");
    return $firebaseAuth(ref);
  }
]);

WannaApp.run(function($rootScope, $location, Auth){
  $rootScope.logout = function(){
      Auth.$unauth();
      $location.path('/');
  }  
  $rootScope.login = function(){
      Auth.$authWithOAuthPopup('google');
      $location.path('/');
  }
  Auth.$onAuth(function(authData){
      $rootScope.auth = authData;
  })
});