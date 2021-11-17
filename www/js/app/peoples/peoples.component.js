angular.
    module("peoples").
    component("peoples",{
        templateUrl:"./js/app/peoples/peoples.template.html",
        controller: function ($scope, $state) {
            $scope.loading = true;
            $scope.persons = peoplesData;
            $scope.loading = false;
            // $scope.$apply();
            

            $scope.showDetail = function (people) {
                console.log(people);
                $state.go("peoplesdetail",{user_id:people})
            }

            $scope.onBackClicked=function() {
               $state.go("dashboard")
            }

        
            // myElements.forEach(element => {
            //     var mc = new Hammer.Manager(element);
            //     mc.on("tap", function(ev) {
            //         console.log("tap");
            //     })
            // });
            // var mc = new Hammer.Manager(myElement);
            // mc.on("press tap", function(ev) {
            //     if(ev.type === "tap"){
            //         console.log(tap);
            //     }else{
            //         console.log("press");
            //     }
            // })
        }
    })