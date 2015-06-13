/* globals angular */
'use strict';
angular.module('modulo.filtros', [])
    .config(['$routeProvider', 'oURLs', function($routeProvider, oURLs) {
        console.log('Me carga el config del módulo filtros');
    }])
    // .filter('mifiltro', function() {
    //     return function(input, valor1, valor2) {
    //         var output;
    //         output = input;
    //         return output;
    //     }
    // })
    .filter('daysAgo', function() {
        return function(input, pcLocale) {
            var output;
            output = '[' + pcLocale + ']' + input;
            return output;
        }
    })
    .controller('filtrosController', ['$scope', function($scope) {
        
    }]);
  