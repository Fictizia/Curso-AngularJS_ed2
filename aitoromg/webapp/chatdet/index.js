/* globals angular */
'use strict';

angular.module('modulo.chatdet', ['ngRoute'])
    .constant('oURLs', {
        templates: {
            chatDet: 'chatdet/'
        }
    })
    .config(['$routeProvider', 'oURLs' , function($routeProvider, oURLs) {
        console.log('chat log');
        $routeProvider
        .when('/chatdet/:id', {
            templateUrl: oURLs.templates.chatDet,
            controller: 'ChatDetCtrl'
        })
        
    }])
    .controller('ChatDetCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
        $scope.id = $routeParams.id;
    }]);