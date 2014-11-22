'use strict';

angular.module('fictiziaApp', ['ngRoute', 'directivas', 'filtros', 'controladores', 'usuarios'])

    .value ('listaCamisetas', ['betis', 'madrid', 'barcelona', 'celta'])
        
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        
        $routeProvider
        
        // Home
        .when("/", {
            templateUrl: "templates/home.html", 
            controller: "PageCtrl"
        })
        
        // Login
        .when("/login", {
            templateUrl: "templates/login.html", 
            controller: "PageCtrl"
        })
        
        // Registro
        .when("/registro", {
            templateUrl: "templates/registro.html", 
            controller: "PageCtrl"
        })

        // Proyectos
        .when("/proyectos", {
            templateUrl: "templates/proyectos.html", 
            controller: "PageCtrl"
        })

        .when("/proyecto-single", {
            templateUrl: "templates/proyecto-single.html", 
            controller: "PageCtrl"
        })

        // Clientes
        .when("/clientes", {
            templateUrl: "templates/clientes.html", 
            controller: "PageCtrl"
        })
        
        // Clientes
        .when("/carrito", {
            templateUrl: "templates/carrito.html", 
            controller: "carritoCtrl"
        })
        
        // else 404
        .otherwise("/404", {
            templateUrl: "partials/404.html", 
            controller: "PageCtrl"
        });
        
        $locationProvider.html5Mode(true);
        
    }])