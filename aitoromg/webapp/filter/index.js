/* globals angular */
'use strict';

angular.module('modulo.filter', [])
    .filter('impar', function() {
        return function(input) {
            console.log(input);
            return input;
        }
    });