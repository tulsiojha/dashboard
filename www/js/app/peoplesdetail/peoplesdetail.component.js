angular.
  module('peoplesdetail').
  component('peoplesdetail', {
    bindings:{
      data:'<'
    },
    templateUrl:'./js/app/peoplesdetail/peoplesdetail.template.html',
    controller: function($stateParams,$scope, $state, $http) {
      $scope.data = peoplesData[$stateParams.user_id];
      console.log($scope.data);
    }
  });