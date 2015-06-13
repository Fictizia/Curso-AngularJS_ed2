/* globals angular */
'use strict';

angular.module('modulo.db', ['firebase'])
    .controller('DBController', ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {
        // var oFB_DB = new Firebase('https://angular-mayo.firebaseio.com/alumnos');
        var oFB_DB = new Firebase('https://kaplan-angular.firebaseio.com/');
        
        $scope.alumnos = $firebaseArray(oFB_DB);
    }])
    .controller('alumnosCtrl', ['$scope', function ($scope) {
        $scope.alumno = {};
        
        $scope.newAlumn = function (alumno) {
            console.log(alumno);
            $scope.alumnos.$add(alumno);
        };
    }]);