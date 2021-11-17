// Code goes here

var routerApp = angular.module("dashboard", ["ui.router",'news', 'tools', 'peoples']);



routerApp.config(
  ["$stateProvider", "$urlRouterProvider",
    function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/dashboard/main")
      $urlRouterProvider.when("/dashboard","/dashboard/main");

      $stateProvider
        .state("news", {
            parent:'dashboard',
            url: "/news",
            template: "<news></news>",
            controller: "tmp1Controller"
          
        })
        .state("main", {
          parent:"dashboard",
          url: "/main",
          template: "<tools></tools>",
          controller: "tmp2Controller",
        })
        .state("peoples",{
          parent:"dashboard",
          url:"/peoples",
          template:"<peoples></peoples>",
          controller:"peopleController"
      });

    }
  ]);

  routerApp.controller("peopleController", ["$scope",
  function($scope) {
  
  }
]);

routerApp.controller("mainCtrl", ["$scope",
  function($scope) {
  
  }
]);
routerApp.controller("tmp1Controller", ["$scope",
  function($scope) {
   
  }
]);

routerApp.controller("tmp2Controller", ["$scope",
  function($scope) {
   
  }
]);