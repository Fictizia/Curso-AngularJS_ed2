/* globals angular */
'use strict';

angular
  .module('myApp.aboutUs', [
    'ngRoute'
  ])
  .constant('appURLS', {
    templates : {
      aboutUs    : 'about-us/about-us.html',
    }
  })
  
  .config(['$routeProvider','appURLS', function($routeProvider, appURLS){
    $routeProvider
      .when('/about-us', {
        templateUrl : appURLS.templates.aboutUs,
        controller  : 'AboutUsCtrl'
      })
  }])

  .controller('AboutUsCtrl',['$scope', 'appURLS', function($scope, appURLS){
    $scope.myName = 'David';
  }])