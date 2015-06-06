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
    .controller('DBController', ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {
        var oFB_DB = new Firebase('https://angular-mayo.firebaseio.com/alumnos');
        
        $scope.alumnos = $firebaseArray(oFB_DB);
    }])
    .controller('alumnosCtrl', ['$scope', function ($scope) {
        $scope.alumno = {};
        
        $scope.newAlumn = function (alumno) {
            console.log(alumno);
            $scope.alumnos.$add(alumno);
        };
    }]);