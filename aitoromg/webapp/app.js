/* globals angular */
'use strict';

angular.module('myApp', [])
    .controller('MenuController', ['$scope', function($scope) {
        $scope.contador = 0;
        $scope.menuClick = function (e){
            $scope.contador++;
            console.log('click', this);
            e.preventDefault();
            e.stopPropagation();
        };
        $scope.name = 'hiho';
    }])
    .controller('FormController', ['$scope', function($scope) {
        $scope.contador = 0;
        $scope.menuClick = function (e){
            $scope.loginModel+=$scope.contador;
            $scope.contador++;
            console.log('click', $scope.loginModel);
            e.preventDefault();
            e.stopPropagation();
        };
        $scope.name = 'hiho';
    }]);
