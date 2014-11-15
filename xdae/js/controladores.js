'use strict';

angular.module('controladores', [])

    .controller('PageCtrl', ['$scope', function ($scope, ruta) {
      
    }])
    
    .controller( 'HeaderController', [ '$scope', '$location', function ($scope, $location) {
    
        $scope.isActive = function (viewLocation) { 
            return viewLocation === $location.path();
        };
        
    }])
    
    .controller('FilterController', [ '$scope', 'filterFilter', function($scope, filterFilter) {
        
        this.array = [
            
            { name: 'Tobias', terminado: true },
            { name: 'Jeff', terminado: false },
            { name: 'Brian', terminado: false },
            { name: 'Igor', terminado: true },
            { name: 'James', terminado: false },
            { name: 'Brad', terminado: true }
            
        ];
        
    }]);