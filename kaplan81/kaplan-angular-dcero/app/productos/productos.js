/* globals angular */
'use strict';
angular.module('modulo.productos', ['ngRoute'])
    .constant('oURLs', {
        templates: {
           home: 'productos/productos.html'
        }
    })
    .config(['$routeProvider', 'oURLs', function($routeProvider, oURLs) {
        console.log('Me carga el config del módulo productos');
        $routeProvider
        .when( '/productos', {
            templateUrl: oURLs.templates.home,
            controller: 'productosController'
        });
    }])
    .controller('productosController', ['$scope', function($scope) {
        $scope.productos = {'Producto 1': './productos/producto1', 'Producto 2': './productos/producto2' , 'Producto 3': './productos/producto3'};
    }]);
  