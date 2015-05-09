/* globals angular */
'use strict';
angular.module('kplAngularCero', [])
    .controller('MenuController', ['$scope', function($scope) {
        $scope.contadorDeClics = 0;
        $scope.menuClick = function (poEvent) {
            $scope.contadorDeClics++;
            console.log('click', this, poEvent)
            poEvent.preventDefault();
            poEvent.stopPropagation();
        }
    }])
    .controller('FormController', ['$scope', function ($scope) {
        $scope.contadorDeClics = 0;
        $scope.contadorDeClics++;
        $scope.inputModel = 0;
        $scope.formClick = function (poEvent) {
            $scope.inputModel += $scope.contadorDeClics;
            console.log('click in FORM')
            poEvent.preventDefault();
            poEvent.stopPropagation();
        }
    }]);