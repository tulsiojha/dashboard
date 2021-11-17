angular.
    module("tools").
    component("tools",{
        templateUrl:"./js/app/tools/tools.template.html",
        controller:function ($scope, $state, $http) {
            $scope.weatherData = {}

            $scope.time = {hrs:new Date().getHours(), mins:new Date().getMinutes(), secs:new Date().getSeconds()}
            // console.log();

            $http.get("https://api.openweathermap.org/data/2.5/weather?q=Dhangadhi&APPID=3be1ef657db450342995fb0c65e58a33").
            then(function mSuccess(response) {
              console.log(response.data);
              $scope.weatherData = response.data;
            },function mError(response) {
              console.log("error:",response);
            })

           $scope.loadPeoples=function () {
               $state.go("peoples")
           }

           const updateTime = () =>{
            setTimeout(() => {
                console.log("time");
                $scope.time = {hrs:new Date().getHours(), mins:new Date().getMinutes(), secs:new Date().getSeconds()}
                $scope.$apply()
                updateTime()
               }, 500);
           }
          updateTime();
        }
    })