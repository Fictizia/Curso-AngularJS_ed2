/* globals angular */
'use strict';
angular.module('kplAngularCero', [
                                    'modulo.home',
                                    'modulo.chat',
                                    'modulo.productos',
                                    'modulo.producto',
                                    'modulo.filtros',
                                    'modulo.directivas',
                                    'modulo.db',
                                    'modulo.formularios'
                                ])
    // .constant('oURLs', {/*
    //     partials: {
            
    //     },*/
    //     templates: {
    //         menu: 'templates/menu-controller.html',
    //         form: 'templates/form-controller.html'
    //     }
    // })
    .config(['$routeProvider', '$locationProvider', 'oURLs', function($routeProvider, $locationProvider, oURLs) {
        // Esto sirve para quitar las almohadilas (#) al comienzo de las URLs.
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        // $routeProvider
        // .when( '/menu', {
        //     templateUrl: oURLs.templates.menu,
        //     controller: 'MenuController'
        // })
        // .when( '/form', {
        //     templateUrl: oURLs.templates.form,
        //     controller: 'FormController'
        // });
    }])
    // .controller('MenuController', ['$scope', function($scope) {
    //     $scope.contadorDeClics = 0;
    //     $scope.menuClick = function (poEvent) {
    //         $scope.contadorDeClics++;
    //         console.log('click', this, poEvent)
    //         poEvent.preventDefault();
    //         poEvent.stopPropagation();
    //     }
    // }])
    // .controller('FormController', ['$scope', function ($scope) {
    //     $scope.inputModel = 0;
    //     $scope.formClick = function (poEvent) {
    //         $scope.inputModel++;
    //         console.log('Click ' + $scope.inputModel + ' in FORM')
    //         poEvent.preventDefault();
    //         poEvent.stopPropagation();
    //     }
    // }])
    ;