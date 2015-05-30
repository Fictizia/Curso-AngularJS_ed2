/* globals angular */
'use strict';

angular
.module('myApp.directives', [])
  .directive('myDirective', function(){
    return {
      restrict    : 'E',
      templateUrl : './directives/diretiveTemplates/myDirective.html',
      scope       : {
          datas : '='
      },
      link : function(scope, element, attrs) {
          console.log(element);
          element
            .css({
                'border'           : '2px solid #ddd',
                'background-color' : '#fafafa',
                'color'            : '#333',
                'width'            : '100%',
                'float'            : 'left',
                'padding'          : '8px 3px'
            })
            .attr('test', 'test')
      }
    }
  })