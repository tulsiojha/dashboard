// Code goes here

var routerApp = angular.module("routerApp", ["ui.router",'login','dashboard', 'modal']);



routerApp.config(
  ["$stateProvider", "$urlRouterProvider",
    function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise("/login");

      $stateProvider
        .state("login", {
          url: "/login",
          template: "<login></login>",
          controller: "tmp1Controller"
          
        })
        .state("dashboard", {
          url: "/dashboard",
          template: "<dashboard></dashboard>",
          controller: "tmp2Controller",
        });

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