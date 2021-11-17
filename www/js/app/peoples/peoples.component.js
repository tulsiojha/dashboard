angular.
    module("peoples").
    component("peoples",{
        templateUrl:"./js/app/peoples/peoples.template.html",
        controller: function ($scope, $state) {
            $scope.persons = peoplesData;

            $scope.showDetail = function (people) {
                console.log(people);
                $state.go("peoplesdetail",{user_id:people})
            }
        }
    })