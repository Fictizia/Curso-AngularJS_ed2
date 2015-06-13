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
        $scope.alumno = {};
        
        $scope.newAlumn = function (alumno) {
            console.log(alumno);
            $scope.alumnos.$add(alumno);
        };
        
        $scope.alumnos = DBService.getAlumnos();
        $scope.borrarAlumno = function (alumno) {
            $scope.alumnos.$remove(alumno).then(function(ref) {
                console.log('se ha borrado el alumno', alumno.$id);
                ref.key() === alumno.$id; // true
            });
        };
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