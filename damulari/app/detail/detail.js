/* globals angular */
'use strict';

angular
  .module('myApp.detail', [
    'ngRoute'
  ])
  .constant('appURLS', {
    templates : {
      aboutUs    : 'detail/detail.html',
    }
  })
  
  .config(['$routeProvider','appURLS', function($routeProvider, appURLS){
    $routeProvider
      .when('/detail/:color', {
        templateUrl : appURLS.templates.detail,
        controller  : 'DetailCtrl'
      })
  }])

  .controller('DetailCtrl',['$scope', '$routeParams', function($scope, $routeParams){
    $scope.color = $routeParams.color;
  }])