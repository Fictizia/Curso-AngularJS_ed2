/* globals angular */
'use strict';

angular.module('modulo.home', ['ngRoute'])
    .constant('oURLs', {
        templates: {
            home: 'home/home.html'
        }
    })
    .config(['$routeProvider', 'oURLs' , function($routeProvider, oURLs) {
        console.log('home log');
        $routeProvider
        .when('/', {
            templateUrl: oURLs.templates.home,
            controller: 'HomeCtrl'
        })
        
    }])
    .controller('HomeCtrl', ['$scope', function($scope) {
        $scope.name = 'Aitor';
    }]);