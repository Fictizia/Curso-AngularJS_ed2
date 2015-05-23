'use strict';

angular.module('myApp', ['ngRoute','modulo.home'])  //hay que inyectar el módulo ngRoute para usar el servicio routeProvider
    .constant('rutasURL',{
        partials: {
            miMenu: 'partials/menu.html'
        },
        templates: {
           // home: 'home/home.html',
            chat: 'chat/chat.html',
            notFound: '404/404.html'
        }
    })
    .config(['$routeProvider','$locationProvider','rutasURL',function($routerProvider,$locationProvider,rutasURL){
        $locationProvider.html5Mode({
            enabled:true
        });
       $routerProvider
       /*.when('/',{
            templateUrl: rutasURL.templates.home,
            controller: 'HomeCtrl'
        }) */
       
        .when('/chat',{
            templateUrl: rutasURL.templates.chat,
            controller: 'ChatCtrl'
        })
        .otherwise({
            templateUrl:rutasURL.templates.notFound
        });
    }])
    .controller('ChatCtrl',['$scope',function($scope){
        console.log('se carga el chat');
    }]) 
    .controller('HeaderController',['$scope','rutasURL',function($scope,rutasURL){
        $scope.laRuta=rutasURL.partials.miMenu;
    }])
    .controller('MenuController',['$scope', function($scope){
        $scope.contadorDeClicks=0;
        $scope.menuClick=function(poEvent){
            $scope.contadorDeClicks++;
            console.log('click',poEvent);
            poEvent.preventDefault();
            poEvent.stopPropagation();
        };
    }]);

 