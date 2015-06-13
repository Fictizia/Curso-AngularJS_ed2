/* globals angular */
'use strict';
angular.module('modulo.directivas', [])
    .directive('kplMidirectiva', function() {
       return {
           templateUrl: 'directivas/midirectiva.html',
           restrict: 'E',
           scope: {
               datos : '=misdatos'
           },
           link: function(scope, element, attrs) {
               console.log('DIRECTIVA');
               element.attr('prueba', 'hola');
               element.css({
                   'border': '2px solid red'
               });
           }
       };
    }) 
    .controller('midirectivaController', ['$scope', function($scope) {
        $scope.datosAndres = {
            nombre: 'Pepito',
            apellido: 'Pérez'
        }
    }]);
  