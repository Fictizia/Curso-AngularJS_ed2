/* globals angular */
'use strict';
angular.module('modulo.chat', ['ngRoute'])
    .constant('oURLs', {
        templates: {
           home: 'chat/chat.html'
        }
    })
    .config(['$routeProvider', 'oURLs', function($routeProvider, oURLs) {
        console.log('Me carga el config del módulo chat');
        $routeProvider
        .when( '/chat', {
            templateUrl: oURLs.templates.home,
            controller: 'ChatController'
        });
    }])
    .controller('ChatController', ['$scope', function($scope) {
        // $scope.miPuesto = 'Desarrollador';
        // $scope.miNombre = 'Andrés Gesteira';
    }]);
  