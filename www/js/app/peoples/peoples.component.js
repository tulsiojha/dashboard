angular.
    module("peoples").
    component("peoples",{
        templateUrl:"./js/app/peoples/peoples.template.html",
        controller: function ($scope) {
            $scope.persons = peoplesData;
           
        }
    })