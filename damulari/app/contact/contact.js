/* globals angular */
'use strict';

angular
  .module('myApp.contact', [
    'ngRoute'
  ])
  .constant('appURLS', {
    templates : {
      contact : 'contact/contact.html',
    }
  })
  
  .config(['$routeProvider','appURLS', function($routeProvider, appURLS){
    $routeProvider
      .when('/contact', {
        templateUrl : appURLS.templates.contact,
        controller  : 'ContactCtrl'
      })
  }])

  .controller('ContactCtrl',['$scope', 'appURLS', function($scope, appURLS){
    $scope.myName = 'David';

    $scope.master = {};
    
    $scope.update = function(user) {
        $scope.master = angular.copy(user);
      };

      $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };

      $scope.reset();
  }])