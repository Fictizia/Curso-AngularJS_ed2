'use strict';

angular.module('fictiziaApp', ['ngRoute', 'controladores', 'directivas'])
    
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        
        $routeProvider
        
        // Home
        .when("/", {templateUrl: "templates/home.html", controller: "PageCtrl"})
        
        // Login
        .when("/login", {templateUrl: "templates/login.html", controller: "PageCtrl"})
        
        // Registro
        .when("/registro", {templateUrl: "templates/registro.html", controller: "PageCtrl"})

        // Proyectos
        .when("/proyectos", {templateUrl: "templates/proyectos.html", controller: "PageCtrl"})
        
        .when("/blog/proyecto", {templateUrl: "partials/single-proyecto.html", controller: "PageCtrl"})
        
        // else 404
        .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
        
        $locationProvider.html5Mode(true);
        
    }])