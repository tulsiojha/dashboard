// Code goes here

var routerApp = angular.module("routerApp", ['ngAnimate',"ui.router",'login','dashboard', 'modal']);



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

routerApp.controller("modalController", ["$scope",
  function($scope) {
   
  }
]);


routerApp.factory("ModalService", function() {
  var modals = [];
  var service = {};

  service.Add = Add;
  service.Remove = Remove;
  service.Open = Open;
  service.Close = Close;

  console.log("modalService");
  return service;


  function Add(modal) {
    modals.push(modal)
  }

  function Remove(id) {
    var modalToRemove = _.findWhere(modals, {id:id});
    modals = _.without(modals, modalToRemove);
  }


  function Open(id) {
    var modalToOpen = _.findWhere(modals, {id:id});
    modalToOpen.open(id);
  }

  function Close(id) {
    var modalToClose = _.findWhere(modals, {id:id});
    modalToClose.close(id);
  }
  
})


routerApp.directive("bnModal",function($animate,ModalService){
  return (link)
  function link( scope, element, attributes ) {
    $animate.enabled(false, element);
    scope.shouldShow = false;
    scope.id = null;
    var modal = {
      id:attributes.id,
      open:openModal,
      close:closeModal
    }
    closeModal()

    ModalService.Add(modal);

    scope.$on('$destroy', function() {
      ModalService.Remove(attributes.id);
      // element.remove();
      closeModal();
    });
    console.log("modalDirective");

    function openModal(id){
      // element.show()
      $animate.enabled(true);
      scope.shouldShow = true;
      scope.id = id;
    }

    function closeModal(id){
      // element.hide()
      scope.shouldShow = false;
      scope.id = id;
    }
  }
})