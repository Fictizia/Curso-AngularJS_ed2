/* globals angular */
'use strict';

angular.module('modulo.chatdet', ['ngRoute'])
    .constant('oURLs', {
        templates: {
            chat: 'chatDet/'
        }
    })
    .config(['$routeProvider', 'oURLs' , function($routeProvider, oURLs) {
        console.log('chat log');
        $routeProvider
        .when('/chatDet/:id', {
            templateUrl: oURLs.templates.chat,
            controller: 'ChatDetCtrl'
        })
        
    }])
    .controller('ChatDetCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
        $scope.name = $routeParams.name;
    }]);