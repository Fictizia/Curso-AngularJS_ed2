/* globals angular */
'use strict';

angular
  .module('myApp', [])
  .controller( 'MenuController', ['$scope', function($scope) {
    $scope.contadorDeClicks = 0;
    $scope.menuClick = function(e){
      $scope.contadorDeClicks++;
      e.preventDefault();
      e.stopPropagation();
    }
    //$scope.name = 'Max Karl Ernst Ludwig Planck (April 23, 1858 – October 4, 1947)';
  }])
  .controller('FormController', ['$scope', function($scope) {
    $scope.contadorDeClicks = 0;
    $scope.formClick = function(e){
      $scope.contadorDeClicks++;
      e.preventDefault();
      e.stopPropagation();
    }
  }]);
