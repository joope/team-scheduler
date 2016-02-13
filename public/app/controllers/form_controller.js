WannaApp.controller('FormController', function ($scope, $rootScope, FirebaseService) {
    $scope.activities = FirebaseService.getActivities();
    $scope.dates = [];

    $scope.addActivity = function () {
        //console.log("added activity: " + $scope.activity);
        if ($rootScope.auth) {
            FirebaseService.addActivity({
                what: $scope.activity.what,
                users: $rootScope.auth.uid,
                when: "huomenna",
                amount: 1
            });
            $scope.activity.what = "";
        } else{
            $rootScope.errorMSG = "Kirjaudu ensin sisään!";
        }
    }
    
    $scope.activityClicked = function(activity){
        activity.amount++;
        //activity.users = sinä
        //$scope.activity = "";
        FirebaseService.save(activity);
    }
    
    $scope.query = function(){
        if ($scope.activity && $scope.activity.what !== ''){
            $scope.search = true;
        }
        $scope.search = false;

    }
    $scope.addDate = function () {
        console.log("date: " + $scope.date); 
        $scope.dates.push($scope.date);
        $scope.date = "";
    }

})