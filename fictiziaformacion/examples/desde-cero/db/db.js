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
        var oFB_DB = new Firebase('https://angular-mayo.firebaseio.com/alumnos'),
            oUsuario = {};
        
        return {
            register: function () {
                var oFB_Users = new Firebase('https://angular-mayo.firebaseio.com/users');
                
                oFB_Users.child(oUsuario.github.username).set(oUsuario);
            },
            login: function (pfCallback) {
                oFB_DB.authWithOAuthPopup("github", function(error, authData) {
                    if (error) {
                        console.log("Login Failed!", error);
                    } else {
                        console.log("Authenticated successfully with payload:", authData);
                        oUsuario = authData;
                        pfCallback(authData);
                    }
                });
            },
            logout: function () {
                oFB_DB.unauth();
            },
            orderBySurname: function () {
                var oFB_Array = $firebaseArray(oFB_DB.orderByChild('apellido'));
                
                return oFB_Array;
            },
            getPagedQuery: function (piRows){
                var oFB_Array = $firebaseArray(oFB_DB.limitToFirst(piRows));
                
                return oFB_Array;
            },
            getAlumnos: function () {
                var oFB_Array = $firebaseArray(oFB_DB);
                
                
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