'use strict';

angular.module('directivas', [])

    .directive('navegacion', function() {
        
        var directive = {};
    
        directive.restrict = 'E'; /* restrict this directive to elements */
        directive.templateUrl = "/templates/navegacion.html";
    
        return directive;
        
    })

    .directive('sidebar', function() {
        
        var directive = {};
    
        directive.restrict = 'E'; /* restrict this directive to elements */
        directive.templateUrl = "/templates/sidebar.html";
    
        return directive;
        
    })

    .directive('headerweb', function() {
        
        var directive = {};
    
        directive.restrict = 'E'; /* restrict this directive to elements */
        directive.templateUrl = "/templates/headerweb.html";
    
        return directive;
        
    })

    .directive('footerweb', function() {
        
        var directive = {};
    
        directive.restrict = 'E'; /* restrict this directive to elements */
        directive.templateUrl = "/templates/footerweb.html";
    
        return directive;
        
    });