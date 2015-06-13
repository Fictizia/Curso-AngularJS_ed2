/* globals angular */
'use strict';
angular.module('modulo.formularios', [])
    .controller('miformularioController', ['$scope', function($scope) {
        $scope.user = {
            name: '',
            surname : '',
            email : '',
            gender : '',
            age : ''
        }
    }]);
  