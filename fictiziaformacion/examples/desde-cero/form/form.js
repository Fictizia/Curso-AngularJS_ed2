/* globals angular */
'use strict';

angular.module('modulo.form', ['ngRoute'])
    .constant('oURLs', {
        templates: {
            form: 'form/form.html',
        }
    })
    .config(['$routeProvider', 'oURLs', function ($routeProvider, oURLs){
        console.log('config del modulo de form');
        $routeProvider.when('/form', {
            templateUrl: oURLs.templates.form,
            controller: 'FormCtrl'
        })
    }])
    .controller('FormCtrl', ['$scope', function ($scope) {
        
    }]);