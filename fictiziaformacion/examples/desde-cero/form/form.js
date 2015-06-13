/* globals angular */
'use strict';

angular.module('modulo.form', ['ngRoute', 'modulo.db'])
    .constant('oURLs', {
        templates: {
            form: 'form/form.html',
        }
    })
    .config(['$routeProvider', 'oURLs', function ($routeProvider, oURLs){
        console.log('config del modulo de form');
        $routeProvider.when('/form', {
            templateUrl: oURLs.templates.form,
            controller: 'FormCtrl'
        })
    }])
    .controller('FormCtrl', ['$scope', 'servicioDeAlertas', function ($scope, servicioDeAlertas) {
        $scope.nuevoMensaje = '';
        $scope.guardarMensaje = function (pcMensaje) {
            servicioDeAlertas.nuevoMensaje(pcMensaje);
        };
        $scope.mostrarMensajes = function () {
            servicioDeAlertas.alerta();
        };
    }]);