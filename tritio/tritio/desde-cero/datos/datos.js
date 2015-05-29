'use strict';
angular.module('modulo.db', [])  //hay que inyectar el módulo ngRoute para usar el servicio routeProvider
    .constant('oDB', 
        [
            {
                matricula: 'ffasdf',
                color: 'rojo'
            },
            {
                matricula: '354345',
                color: 'verde'
            }
            
        ]
    );