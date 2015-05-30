/* globals angular */
'use strict';

angular.module('modulo.miDirectiva', [])
    .directive('miDirectiva', function () {
        console.log('miDirectiva instanciada');
        return {
            restrict: 'E',
            templateUrl: 'directivas/miDirectiva/miDirectiva.html',
            scope: {
                datos: '='
            },
            link: function (scope, element, attrs) {
                console.log('link de ', element);
                
                element.css({
                    border: '2px solid red'
                });
                element.attr('prueba', 'hola');
            }
        };
    });