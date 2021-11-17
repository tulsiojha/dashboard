angular.
  module('login').
  component('login', {
    templateUrl:'./js/app/login/login.template.html',
    controller: function($scope, $state, $http) {

     


      $scope.username = "";
      $scope.password = "";

      // this.background ="white";
     $scope.onLoginClicked = function() {
       if($scope.username != "admin" || $scope.password != "admin"){
          $scope.showErrorModal = true;
       }   
        else{
          $state.go("dashboard")   
        }
     }

     $scope.closeErrorModal = function() {
       $scope.showErrorModal = false;
     }
    }
  });