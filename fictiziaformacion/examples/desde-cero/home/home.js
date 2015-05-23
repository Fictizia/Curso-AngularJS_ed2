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
    .controller('HomeCtrl', ['$scope', 'oDB', function ($scope, oDB) {
        console.log(oDB);
        $scope.miNombre = 'Alvaro';
        $scope.coches = oDB.coches;
    }]);