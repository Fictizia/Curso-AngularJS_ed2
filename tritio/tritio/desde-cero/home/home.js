'use strict';
angular.module('modulo.home', ['ngRoute'])  //hay que inyectar el módulo ngRoute para usar el servicio routeProvider
    .constant('rutasURL',{
        templates: {
            home: 'home/home.html',
        }
    })
    .config(['$routeProvider','rutasURL',function($routerProvider,rutasURL){
       console.log('config del módulo de la home');
        $routerProvider
         .when('/',{
             templateUrl: rutasURL.templates.home,
             controller: 'HomeCtrl'
        })
        .when('/home',{
            templateUrl: rutasURL.templates.home,
            controller: 'HomeCtrl'
        })
        }])
    .controller('HomeCtrl',['$scope',function($scope){
        $scope.elNombre='Gonzalo';
    }]);