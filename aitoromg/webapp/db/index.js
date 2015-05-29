/* globals angular */
'use strict';

angular.module('modulo.db', ['ngRoute'])
    .constant('oUsers', {
        users: [
            {
                id: 0,
                name: 'Lok'
            },
            {
                id: 1,
                name: 'Mak'
            }
            ]
    });