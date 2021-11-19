angular.
    module("modal").
    component("modal",{
        transclude: true,
       bindings:{
           data:"<"
       },
        templateUrl:"./js/app/modal/modal.template.html",
        controller: function($scope) {
            var $ctrl = this;
            $scope.showErrorModal = $scope.$parent.showErrorModal;
            this.$onChanges=function(changesObj){
                console.log("changes"+changesObj);
            }
            
        }
    })
