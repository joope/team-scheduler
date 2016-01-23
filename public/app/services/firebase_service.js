WannaApp.service('FirebaseService', function($firebaseArray){
    var ref = new Firebase('https://wanna.firebaseio.com/activities');
    var activities = $firebaseArray(ref);
    
    this.getActivities = function(){
        return activities;
    }
    
    this.getUser = function(uid){
        var user = $firebaseObject(ref.child(uid));
        return user;
    }
    
    this.addUser = function(useruid, user){
        ref.child(useruid).set(user);
    }
    
    this.saveUser = function(user){
        user.$save();
    }

    this.addActivity = function(activity){
        activities.$add(activity);
    }

    this.removeAll = function(){
        activities.$remove();
    }
    
    this.removeActivity = function(activity){
        activities.$remove(activity);
    }

    this.save = function(activity){
        activities.$save(activity);
    }
});
