/* globals angular */
'use strict';

angular.module('modulo.db', ['ngRoute', "firebase"])
    .constant('oUsers', {
        users: [
            {
                id: 0,
                name: 'Lok'
            },
            {
                id: 1,
                name: 'Mak'
            }
            ]
    })
    .controller('DBCont', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
        var fb_db = new Firebase("https://aitoromg-angularjs.firebaseio.com/users");
        // download the data into a local object
        $scope.users = $firebaseArray(fb_db);
    }])
    .controller('UserCont', ['$scope', function($scope) {
        $scope.user = {};
        
        $scope.newUser = function (user){
            console.log(user);
            $scope.users.$add(user);
        }
    }]);