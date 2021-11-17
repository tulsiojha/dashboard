angular.
  module('peoplesdetail').
  component('peoplesdetail', {
    bindings:{
      data:'<'
    },
    templateUrl:'./js/app/peoplesdetail/peoplesdetail.template.html',
    controller: function($scope, $stateParams, $state, $location,$urlMatcherFactory) {

      $scope.showEditModal = false;
      $scope.showErrorModal = false;

      $scope.data = peoplesData[$stateParams.user_id];
      $scope.name = peoplesData[$stateParams.user_id].name;
      $scope.email = peoplesData[$stateParams.user_id].email;
      $scope.phone = peoplesData[$stateParams.user_id].phone;
      $scope.address = peoplesData[$stateParams.user_id].address;   
      $scope.avatar =  peoplesData[$stateParams.user_id].avatar;   
     
      $scope.onSaveClicked =function(name, email, phone, address, avatar){
       if (name !="" && email != "" && phone != "" && address != "" && avatar != "") {
          peoplesData[$stateParams.user_id].name = name;
          peoplesData[$stateParams.user_id].email = email;
          peoplesData[$stateParams.user_id].phone = phone;
          peoplesData[$stateParams.user_id].address = address;
          peoplesData[$stateParams.user_id].avatar = avatar;
          $scope.showEditModal= false;
          $scope.$apply();
       }else{
         $scope.showErrorModal= true;
         $scope.$apply();
       }
        console.log(name);
      }

      $scope.onEditClicked=function() {
        $scope.showEditModal = true;
        $scope.$apply();
      }

      $scope.onBackClicked= function() {
        $state.go("peoples")
      }
      $scope.onCancelClicked=function() {
        $scope.showEditModal = false;
        $scope.$apply();
      }

      $scope.closeErrorModal = function() {
        $scope.showErrorModal = false;
        $scope.$apply();
      }

      function onPhotoURISuccess(response) {
        console.log(response);
        $scope.avatar = response;
        $scope.$apply();
      }

      function onFail(response) {
      console.log(response);  
      }

      $scope.getPhoto = function(source) {
        // Retrieve image file location from specified source
        navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
          destinationType: Camera.DestinationType.FILE_URI,
          sourceType: source==="choose"?Camera.PictureSourceType.PHOTOLIBRARY:Camera.PictureSourceType.CAMERA });
      }

      document.addEventListener("backbutton", onBackKeyDown, false);

      function onBackKeyDown() {
        const url = $location.path();
        var urlMatcher = $urlMatcherFactory.compile("/dashboard/peoplesdetail/:id");
        var matched = urlMatcher.exec($location.path());
       console.log(url)
       if (matched != null) {
        console.log($scope.showErrorModal, $scope.showEditModal);
        if ($scope.showErrorModal || $scope.showEditModal) {
          if ($scope.showErrorModal) {
            $scope.showErrorModal = false;
            $scope.$apply()
          }else{
            $scope.showEditModal = false;
            $scope.$apply()
          }
        }else{
          $state.go("peoples")
        }
        
      }
      }
    }
  });