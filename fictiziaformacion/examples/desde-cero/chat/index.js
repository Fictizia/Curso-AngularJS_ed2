/* globals angular */
'use strict';

angular.module('modulo.chat', ['ngRoute'])
    .constant('oURLs', {
        templates: {
            chat: 'chat/',
            resolve: {
                user: ['$q', '$timeout', function ($q, $timeout) {
                    var defer = $q.defer();
                    
                    $timeout(function () {
                        defer.reject("user"); 
                    }, 2000);
                    
                    return defer.promise;
                }]
            }
        }
    })
    .config(['$routeProvider', 'oURLs', function ($routeProvider, oURLs){
        console.log('config del modulo del chat');
        $routeProvider.when('/chat', {
            templateUrl: oURLs.templates.chat,
            controller: 'ChatCtrl'
        })
    }])
    .controller('ChatCtrl', ['$scope', 'user', function ($scope, user) {
        $scope.user = user;
        // $scope.miNombre = 'Alvaro';
    }]);