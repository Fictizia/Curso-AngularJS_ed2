/* globals angular */
'use strict';

angular.module('modulo.chat', ['ngRoute', 'modulo.db', 'modulo.filter', 'modulo.directive'])
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
    .controller('ChatCtrl', ['$scope', 'oUsers', 'imparFilter', function($scope, oUsers, imparFilter) {
        $scope.name = 'Aitor';
        $scope.users = oUsers.users;// | imparFilter;
    }]);