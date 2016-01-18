WannaApp.controller('FormController', function($scope, $rootScope, FirebaseService){
    $scope.activityList = FirebaseService.getActivities();
    $scope.dateList = [];
    
    $scope.addActivity = function(){
        //console.log("added activity: " + $scope.activity);
        FirebaseService.addActivity({
            what: $scope.activity,
            who: $rootScope.auth.uid,
            when: "huomenna",
            amount: 1
        });
        $scope.activity = "";
        
    }
    
    $scope.addDate = function(){
        
        $scope.date = "";
    }
    
})