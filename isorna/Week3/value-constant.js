// define a value
app.value('myThing', 'weee');

// define a constant
app.constant('myConst', 'blah');

// use it in a service
app.factory('myService', ['myThing', 'myConst', function(myThing, myConst){
   return {
       whatsMyThing: function() { 
          return myThing; //weee
       },
       getMyConst: function () {
          return myConst; //blah
       }
   };
}]);

// use it in a controller
app.controller('someController', ['$scope', 'myThing', 'myConst', 
    function($scope, myThing, myConst) {
        $scope.foo = myThing; //weee
        $scope.bar = myConst; //blah
    });