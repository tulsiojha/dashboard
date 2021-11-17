angular.
  module('dashboard').
  component('dashboard', {  // This name is what AngularJS uses to match to the `<phone-list>` element.
    templateUrl:'./js/app/dashboard/dashboard.template.html',
    controller: function($scope,$state, $location,$urlMatcherFactory) {
     $scope.loadPage=function(){
         console.log("v");
     }


     document.addEventListener("backbutton", onBackKeyDown, false);

     function onBackKeyDown() {
       const url = $location.path();
       console.log(url);
       var urlMatcher = $urlMatcherFactory.compile("/dashboard/peoplesdetail/:id");
       var matched = urlMatcher.exec($location.path());
       console.log("matched", matched);
       if (url === "/dashboard/main") {
         navigator.app.exitApp();
       }else if (url === "/dashboard/peoples") {
         $state.go("dashboard")
       }else if (matched != null) {
         console.log("peoples");
         $state.go("peoples")
       }
     }
    }
  });