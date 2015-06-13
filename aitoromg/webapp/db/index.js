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
    .factory('DBService', ['$firebaseArray', function($firebaseArray) {
        var fb_db = new Firebase("https://aitoromg-angularjs.firebaseio.com/users");
        
        return {
            getChat: function() {
                var fb_Array = $firebaseArray(fb_db)
                
                
                fb_Array.$loaded().then(function(poDB) {
                    console.log('DB cargada', poDB);
                    poDB === fb_Array; // true
                })
                .catch(function(error) {
                    console.log("Error:", error);
                });
                
                return fb_Array;
            },
            ordenar: function() {
                var fb_Array = $firebaseArray(fb_db.orderByChild('name'));
                
                return fb_Array;
            }
        }
    }])
    .controller('ChatCont', ['$scope', 'DBService', function($scope, DBService) {
        $scope.users = DBService.getChat();
        $scope.borrarUser = function (user) {
            $scope.users.$remove(user).then(function(ref) {
                console.log('Se ha borrado el usuario ', user.$id);
                ref.key() === user.$id; // true
            });
        };
        $scope.actualizarUser = function (user) {
            $scope.users.$save(user).then(function(ref) {
                console.log('Se ha actualizado el usuario ', user.$id);
                ref.key() === user.$id; // true
            });
        };
        $scope.ordenarUser = function (user){
            $scope.users = DBService.ordenar();
        }
    }])
    .controller('UserCont', ['$scope', function($scope) {
        $scope.user = {};
        
        $scope.newUser = function (user){
            console.log(user);
            $scope.users.$add(user);
        }
    }]);