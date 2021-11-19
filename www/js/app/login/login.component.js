angular.
  module('login').
  component('login', {
    templateUrl:'./js/app/login/login.template.html',
    controller: function($rootScope, $scope, $state, $http, ModalService) {

      this.showErrorModal = false;

      $scope.username = "";
      $scope.password = "";
      console.log(ModalService);
      console.log($rootScope);
      // this.background ="white";
     $scope.onLoginClicked = function() {
       if($scope.username.toLowerCase() != "admin" || $scope.password != "admin"){
        // $scope.showErrorModal = true;
        ModalService.Open("1");
       }   
        else{
          $state.go("dashboard")   
        }

        console.log(this.showErrorModal);
     }

     $scope.closeErrorModal = function() {
      ModalService.Close("1");
      // $scope.showErrorModal = false;
     }

    }
  });