/* globals angular */
'use strict';

angular.module('modulo.db', ['firebase'])
    .constant('oDB', {
        coches: [
            {
                matricula: 'F555X',
                color: 'rojo'
            },
            {
                matricula: 'CDD55',
                color: 'azul'
            }
        ]
    })
    .factory('servicioDeAlertas', ['$window', function (poWindow) {
        var aMensajes = [];
        
        return {
            alerta: function () {
                poWindow.alert(aMensajes.join('\n'));
            },
            nuevoMensaje: function (pcMensaje) {
                aMensajes.push(pcMensaje);
            }
        };
    }])
    .factory('DBService', ['$firebaseArray', function ($firebaseArray) {
        var oFB_DB = new Firebase('https://angular-mayo.firebaseio.com/alumnos');
        
        return {
            getAlumnos: function () {
                return $firebaseArray(oFB_DB);
            }
        };
    }])
    .controller('alumnosCtrl', ['$scope', function ($scope) {
        $scope.alumno = {};
        
        $scope.newAlumn = function (alumno) {
            console.log(alumno);
            $scope.alumnos.$add(alumno);
        };
    }]);