'use strict';

angular.module('directivas', [])


    .directive('navegacion', function() {
        
        var directive = {};
    
        directive.restrict = 'E'; /* restrict this directive to elements */
        directive.templateUrl = "/templates/navegacion.html";
    
        return directive;
        
    });