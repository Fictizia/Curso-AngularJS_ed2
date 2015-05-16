/* globals angular */
'use strict';

angular.module('myApp', [])
    .controller('MenuController', ['$scope', function ($scope) {
        $scope.contadorDeClicks = 0;
        $scope.menuClick = function (poEvent) {
            $scope.contadorDeClicks++;
            console.log('click', poEvent);
            poEvent.preventDefault();
            poEvent.stopPropagation();
        };
    }])
    .controller('FormController', ['$scope', function ($scope) {
        $scope.padre = {};
        $scope.padre.contadorDeClicks = 0;
        
        $scope.formClick = function (poEvent) {
            $scope.padre.contadorDeClicks++;
            
            $scope.loginModel += $scope.padre.contadorDeClicks;
            
            console.log('click');
            poEvent.preventDefault();
            poEvent.stopPropagation();
        };
        
    }])
    .controller('ClickController', ['$scope', function ($scope) {
        
    }]);