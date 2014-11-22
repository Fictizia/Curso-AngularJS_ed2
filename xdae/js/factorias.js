'use strict';

angular.module('factorias', [])

    .factory('carrito', function carritoFactory() {
        
        var listaCamisetas = [];
        
         var f = function anadirAlCarrito(camiseta){
             
             listaCamisetas.push(camiseta);
             
             console.log(listaCamisetas);
             
         }
        
        return {
            
            addCamiseta: f
            
        }
      
    });