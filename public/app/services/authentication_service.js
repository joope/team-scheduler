WannaApp.service('AuthenticationService', function($firebaseAuth, $firebaseObject){
  var fire = new Firebase('https://wanna.firebaseio.com/');  
  var user = null;

  // Create a callback which logs the current auth state
  fire.onAuth(authDataCallback);
  function authDataCallback(authData) {
        if (authData) {
            console.log("User " + authData.uid + " is logged in with " + authData.provider);
        } else {
            console.log("User is logged out");
        }
        user = authData;
    }
    
  function getUserFromFirebase(uid){
      return $firebaseObject(fire.child('users').child(uid));
  }
  
  this.getUser = function(){
      return user;
  }

  this.login = function(){
    fire.authWithOAuthPopup("google", function(error, authData) {
        if (error) {
            console.log("Login Failed!", error);
        } else {
            console.log("Authenticated successfully");
            //fire.child('users').child(authData.uid).set(authData.google);
            user = authData;
        }
    }, {
        scope: "profile, email"
    });
  };
  
  this.checkLoggedIn = function(){
    return fire.getAuth();
  };
  
  this.logout = function(){
    fire.unauth();
  };
});