/* globals angular */
'use strict';

angular.module('modulo.chat', ['ngRoute'])
    .constant('oURLs', {
        templates: {
            chat: 'chat/'
        }
    })
    .config(['$routeProvider', 'oURLs', function ($routeProvider, oURLs){
        console.log('config del modulo del chat');
        $routeProvider.when('/chat', {
            templateUrl: oURLs.templates.chat,
            controller: 'ChatCtrl',
            resolve: {
                user: ['$q', '$timeout', function ($q, $timeout) {
                    var defer = $q.defer();
                    
                    $timeout(function () {
                        defer.reject("User not logged in."); 
                    }, 2000);
                    
                    return defer.promise;
                }]
            }
        })
    }])
    .controller('ChatCtrl', ['$scope', function ($scope) {
        // $scope.miNombre = 'Alvaro';
    }]);