/* globals angular */
'use strict';

angular.module('modulo.filtros', [])
    .filter('daysAgo', function () {
        return function (input, pcLocale) {
            var output;
            
            output = '[' + pcLocale + '] ' + input;
            
            return output;
        }
    });