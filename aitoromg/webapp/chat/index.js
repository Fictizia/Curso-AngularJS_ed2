/* globals angular */
'use strict';

angular.module('modulo.chat', ['ngRoute', 'modulo.db'])
    .constant('oURLs', {
        templates: {
            chat: 'chat/'
        }
    })
    .config(['$routeProvider', 'oURLs' , function($routeProvider, oURLs) {
        console.log('chat log');
        $routeProvider
        .when('/chat', {
            templateUrl: oURLs.templates.chat,
            controller: 'ChatCtrl'
        })
        
    }])
    .controller('ChatCtrl', ['$scope', 'oUsers', function($scope, oUsers) {
        $scope.name = 'Aitor';
        $scope.users = oUsers.users;
    }]);