/* globals angular */
'use strict';

angular.module('modulo.directive', [])
    .directive('miDir', function() {
        return {
            restrict: 'E',
            template: 'Id: {{datos[0].id}} / Name: {{datos[0].name}}',
            scope: {
                datos: '=ok'
            },
            link: function (scope, element, attrs) {
                console.log(element);
                element.css({
                    'border' : '6px solid blue'
                });
            }
        }
    });