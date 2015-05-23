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
        $scope.inputModel = 0;
        $scope.formClick = function (poEvent) {
            $scope.inputModel++;
            console.log('Click ' + $scope.inputModel + ' in FORM')
            poEvent.preventDefault();
            poEvent.stopPropagation();
        }
    }]);