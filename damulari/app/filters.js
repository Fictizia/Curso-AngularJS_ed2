/* globals angular */
'use strict';

angular
.module('myApp.filter',[])
  .filter('dayLocale', function() {
      return function(input) {
        var output;

        output = input;
        
        return output;
      }
  })