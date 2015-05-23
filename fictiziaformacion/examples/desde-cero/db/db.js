/* globals angular */
'use strict';

angular.module('modulo.db', [])
    .constant('oDB', {
        coches: [
            {
                matricula: 'F555X',
                color: 'rojo'
            },
            {
                matricula: 'CDD55',
                color: 'azul'
            }
        ]
    });