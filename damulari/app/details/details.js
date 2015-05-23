/* globals angular */
'use strict';

angular
  .module('myApp.details', [
    'ngRoute'
  ])
  .constant('appURLS', {
    templates : {
      home    : 'home/home.html',
    }
  })
  
  .config(['$routeProvider','appURLS', function($routeProvider, appURLS){
    $routeProvider
      .when('/', {
        templateUrl : appURLS.templates.home,
        controller  : 'HomeCtrl'
      })
  }])

  .controller('DetailsCtrl',['$scope', 'appURLS', 'appDB' function($scope, appURLS, appDB){
    $scope.cars = appDB.cars;
  }])
;