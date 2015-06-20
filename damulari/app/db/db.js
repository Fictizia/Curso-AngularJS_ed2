angular
    .module('myApp.db', [
    'firebase'
    ])
    .constant('appDB', {
        cars : [
            {
                color : 'red',
                model : 'seat panda'
            },
            {
                color : 'blue',
                model : 'mazda x3'
            },
            {
                color : 'green',
                model : 'fiat bravo'
            }
        ]
    })
    .factory('alerts', ['$window', function($window){
        return function(poMsg){
            $window.alert(poMsg);
        }
    }])
    .factory('DBService', ['$firebaseArray', function ($firebaseArray) {
        var db = new Firebase("https://damulari-app.firebaseio.com/");  

        return {
            getPageQuery : function(nRows){
                var db_array = $firebaseArray(db.limitToFirst(nRows));
                
                return db_array;
            },
            getDatas : function(){
                var db_array =  $firebaseArray(db);
                
                db_array.$loaded().then(function(db) {
                    console.log('DB cargada', db);
                    db === db_array; // true
                })
                .catch(function(error) {
                    console.log("Error:", error);
                });
                
                return db_array;
            }
        }
    }])
    .controller('DBCtrl', ['$scope', 'DBService', function($scope, DBService){
            $scope.datas = DBService.getDatas();
            $scope.user  = {};

            $scope.addData = function(user) {
                console.log(user);
                $scope.datas.$add(user);
            };

            $scope.dltData = function(user) {
                $scope.datas.$remove(user).then(function(ref) {
                    console.log('se ha borrado el usuario', user.$id);
                    ref.key() === user.$id; //true
                });
            };

            $scope.pagedQuery = function(nRow){
                DBService.getPageQuery(nRow);
            }
        }
    ])