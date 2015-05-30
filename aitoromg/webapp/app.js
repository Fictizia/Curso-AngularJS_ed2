/* globals angular */
'use strict';

angular.module('myApp', [
    'ngRoute', 
    'modulo.home', 
    'modulo.chat',
    'modulo.chatdet'
    ])
    .constant('oURLs', {
        partials: {
            menu: 'partials/header.html'
        },
        templates: {
            error: 'error/error.html'
        }
    })
    .config(['$routeProvider', '$locationProvider', 'oURLs' , function($routeProvider, $locationProvider, oURLs) {
        console.log('config app');
        $locationProvider.html5Mode({
            enabled: true
        });
        $routeProvider
        .otherwise({
            templateUrl: oURLs.templates.error
        });
    }])
    .controller('HeaderController', ['$scope', 'oURLs', function($scope, oURLs) {
        $scope.url_menu = oURLs.partials.menu;
    }])
    /*.controller('MenuController', ['$scope', function($scope) {
        $scope.contador = 0;
        $scope.menuClick = function (e){
            $scope.contador++;
            console.log('click', this);
            e.preventDefault();
            e.stopPropagation();
        };
        $scope.name = 'hiho';
    }])
    .controller('FormController', ['$scope', function($scope) {
        $scope.contador = 0;
        $scope.menuClick = function (e){
            $scope.loginModel+=$scope.contador;
            $scope.contador++;
            console.log('click', $scope.loginModel);
            e.preventDefault();
            e.stopPropagation();
        };
        $scope.name = 'hiho';
    }])*/;
