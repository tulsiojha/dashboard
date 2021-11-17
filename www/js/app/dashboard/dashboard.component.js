angular.
  module('dashboard').
  component('dashboard', {  // This name is what AngularJS uses to match to the `<phone-list>` element.
    templateUrl:'./js/app/dashboard/dashboard.template.html',
    controller: function($scope) {
     $scope.loadPage=function(){
         console.log("v");
     }
    }
  });