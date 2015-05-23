/* globals angular */
'use strict';

angular
  .module('myApp.home', [
    'ngRoute'
  ])
  .constant('appURLS', {
    templates : {
      home : 'home/home.html',
    }
  })
  
  .config(['$routeProvider','appURLS', function($routeProvider, appURLS){
    $routeProvider
      .when('/', {
        templateUrl : appURLS.templates.home,
        controller  : 'HomeCtrl'
      })
  }])

  .controller('HomeCtrl',['$scope', 'appURLS', function($scope, appURLS){
    $scope.myName = 'David';
  }])