/* globals angular */
'use strict';

angular.module('modulo.detail', ['ngRoute'])
    .constant('oURLs', {
        templates: {
            detail: 'detail/detail.html',
        }
    })
    .config(['$routeProvider', 'oURLs', function ($routeProvider, oURLs){
        console.log('config del modulo de detalle');
        $routeProvider.when('/detail/:matricula/:color', {
            templateUrl: oURLs.templates.detail,
            controller: 'DetailCtrl'
        })
    }])
    .controller('DetailCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
        $scope.matricula = $routeParams.matricula;
        $scope.color = $routeParams.color;
    }]);