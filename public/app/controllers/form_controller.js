WannaApp.controller('FormController', function ($scope, $rootScope, FirebaseService) {
    $scope.activities = FirebaseService.getActivities();
    $scope.dates = [];

    $scope.addActivity = function () {
        //console.log("added activity: " + $scope.activity);
        if ($rootScope.auth) {
            FirebaseService.addActivity({
                what: $scope.activity,
                who: $rootScope.auth.uid,
                when: "huomenna",
                amount: 1
            });
            $scope.activity = "";
        } else{
            $rootScope.errorMSG = "Kirjaudu ensin sisään!";
        }
    }
    
    $scope.query = function(){
        console.log("query: " + $scope.activity);
    }

    $scope.addDate = function () {
        console.log("date: " + $scope.date); 
        $scope.dates.push($scope.date);
        $scope.date = "";
    }

})