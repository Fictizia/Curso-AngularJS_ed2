/* globals angular */
'use strict';

angular
  .module('myApp.home', [
    'ngRoute',
    'myApp.db',
    'myApp.filter'
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

  .controller('HomeCtrl',['$scope', 'appURLS', 'appDB', 'dayLocaleFilter', function($scope, appURLS, appDB, dayLocaleFilter){
    $scope.myName = 'David';
    $scope.cars = appDB.cars
    $scope.date = new Date() | dayLocaleFilter ;
    $scope.myDatas = {
      name     : 'David',
      lastname : 'Mulero',
      age      : '26'
    }
  }])