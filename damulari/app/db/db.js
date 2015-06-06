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
    .controller('DBCtrl', [ 
        '$scope', '$firebaseArray', function($scope, $firebaseArray){
            var ref = new Firebase("https://damulari-app.firebaseio.com/");  
            
            
            $scope.datas = $firebaseArray(ref);
        }
    ])
    .controller('DataCtrl', ['$scope', function($scope){
        $scope.user = {};

        $scope.addData = function(user) {
            console.log(user);
            $scope.datas.$add(user)
         }
    }])