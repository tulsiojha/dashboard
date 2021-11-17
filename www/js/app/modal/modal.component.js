angular.
    module("modal").
    component("modal",{
        transclude: true,
        templateUrl:"./js/app/modal/modal.template.html",
        controller: function($scope) {
            console.log("modal loaded");
        }
    })
