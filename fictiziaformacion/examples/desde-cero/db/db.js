/* globals angular */
'use strict';

angular.module('modulo.db', ['firebase'])
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
    })
    .factory('servicioDeAlertas', ['$window', function ($window) {
        var aMensajes = [];
        
        return {
            alerta: function () {
                $window.alert(aMensajes.join('\n'));
            },
            nuevoMensaje: function (pcMensaje) {
                $window.push(pcMensaje);
            }
        };
    }])
    .factory('DBService', ['$firebaseArray', function ($firebaseArray) {
        var oFB_DB = new Firebase('https://angular-mayo.firebaseio.com/alumnos');
        
        return {
            getAlumnos: function () {
                var oFB_Array = $firebaseArray(oFB_DB)
                
                
                oFB_Array.$loaded().then(function(poDB) {
                    console.log('DB cargada', poDB);
                    poDB === oFB_Array; // true
                })
                .catch(function(error) {
                    console.log("Error:", error);
                });
                
                return oFB_Array;
            }
        };
    }]);