/* globals angular */
'use strict';
angular.module('modulo.producto', ['ngRoute'])
    .constant('oURLs', {
        templates: {
           home: 'producto/producto.html'
        }
    })
    .config(['$routeProvider', 'oURLs', function($routeProvider, oURLs) {
        console.log('Me carga el config del módulo producto');
        $routeProvider
        .when( '/productos/:producto', {
            templateUrl: oURLs.templates.home,
            controller: 'productoController'
        });
    }])
    .controller('productoController', ['$scope', '$routeParams', function($scope, $routeParams) {
        $scope.producto = $routeParams.producto;
    }]);
  