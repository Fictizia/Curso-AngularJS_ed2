/* globals angular */
'use strict';

angular.module('modulo.home', ['ngRoute', 'modulo.db'])
    .constant('oURLs', {
        templates: {
            home: 'home/home.html',
        }
    })
    .config(['$routeProvider', 'oURLs', function ($routeProvider, oURLs){
        console.log('config del modulo de la home');
        $routeProvider.when('/', {
            templateUrl: oURLs.templates.home,
            controller: 'HomeCtrl'
        })
    }])
    .controller('AlumnosDataController', ['$scope', 'DBService', function ($scope, DBService) {
        $scope.alumnos = DBService.getAlumnos();
    }])
    .controller('HomeCtrl', ['$scope', 'oDB', 'servicioDeAlertas', function ($scope, oDB, servicioDeAlertas) {
        console.log(oDB);
        $scope.miNombreHome = 'Alvaro Isorna';
        $scope.mostrarLista = (oDB.coches > 0);
        $scope.coches = oDB.coches;
        
        $scope.nuevoMensaje = '';
        $scope.guardarMensaje = function (pcMensaje) {
            servicioDeAlertas.nuevoMensaje(pcMensaje);
        };
        $scope.mostrarMensajes = function () {
            servicioDeAlertas.alerta();
        };
        
    }]);