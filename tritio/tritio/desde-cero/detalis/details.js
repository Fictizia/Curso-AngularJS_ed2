'use strict';
angular.module('modulo.details', ['ngRoute'])  //hay que inyectar el módulo ngRoute para usar el servicio routeProvider
    .constant('rutasURL',{
        templates: {
            detalle: 'details/:matricula/:color',
        }
    })
    .config(['$routeProvider','rutasURL',function($routerProvider,rutasURL){
       console.log('config del módulo de la home');
        $routerProvider
         .when('/details',{
             templateUrl: rutasURL.templates.detalle,
             controller: 'DetailsCtrl'
        })
    }])
    .controller('DetailsCtrl',['$scope','datos',function($scope,datos){
        $scope.matricula = datos.matricula;
        $scope.color = datos.color;
    }]);