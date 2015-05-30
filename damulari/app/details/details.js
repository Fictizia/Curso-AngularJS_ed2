/* globals angular */
'use strict';

angular
  .module('myApp.details', [
    'ngRoute'
  ])
  .constant('appURLS', {
    templates : {
      details    : 'details/details.html',
    }
  })
  
  .config(['$routeProvider','appURLS', function($routeProvider, appURLS){
    $routeProvider
      .when('/details/', {
        templateUrl : appURLS.templates.details,
        controller  : 'DetailsCtrl'
      })
  }])

  .controller('DetailsCtrl',['$scope', 'appURLS', 'appDB', function($scope, appURLS, appDB){
    $scope.cars = appDB.cars;
  }])
;