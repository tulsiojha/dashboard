angular.
    module("tools").
    component("tools",{
        templateUrl:"./js/app/tools/tools.template.html",
        controller:function ($scope, $state, $http,$location) {
            $scope.temp=0;
            $scope.cityName="";          

            $scope.time = {hrs:new Date().getHours(), mins:new Date().getMinutes(), secs:new Date().getSeconds()}
            // console.log();


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


          document.addEventListener('deviceready', onDeviceReady, false);

          function onDeviceReady(){
            if(device.platform != "browser"){
              cordova.plugins.locationAccuracy.request(function (success){
                console.log("Successfully requested accuracy: "+success.message);
                handleSuccess();
            }, function (error){
              console.error("Accuracy request failed: error code="+error.code+"; error message="+error.message);
              if(error.code !== cordova.plugins.locationAccuracy.ERROR_USER_DISAGREED){
                  if(window.confirm("Failed to automatically set Location Mode to 'High Accuracy'. Would you like to switch to the Location Settings page and do this manually?")){
                      cordova.plugins.diagnostic.switchToLocationSettings();
                  }
              }
            }, cordova.plugins.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY);
           }
          }
      

        var onGetLocation = function(position) {
          
          $http.get("https://api.openweathermap.org/data/2.5/weather?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&APPID=3be1ef657db450342995fb0c65e58a33").
          then(function mSuccess(response) {
            console.log(response.data);
            // $scope.weatherData = response.data;
            $scope.temp = Math.round((response.data.main.temp-273.15) * 100) / 100;
            $scope.cityName = response.data.name;
          },function mError(response) {
            console.log("error:",response);
          })
        
      };
  
      // onError Callback receives a PositionError object
      //
      var onLocationFailed = function(error) {
          alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
      }

        
        const handleSuccess = () =>{
          navigator.geolocation.getCurrentPosition(onGetLocation, onLocationFailed);
        }
        }
    })