/* globals angular */
'use strict';
angular.module('modulo.home', ['ngRoute'])
    .constant('oURLs', {
        templates: {
           home: 'home/home.html'
        }
    })
    .config(['$routeProvider', 'oURLs', function($routeProvider, oURLs) {
        console.log('Me carga el config del módulo home');
        $routeProvider
        .when( '/', {
            templateUrl: oURLs.templates.home,
            controller: 'HomeController'
        });
    }])
    .controller('HomeController', ['$scope', function($scope) {
        $scope.miPuesto = 'Desarrollador';
        $scope.miNombre = 'Andrés Gesteira';
    }]);
  