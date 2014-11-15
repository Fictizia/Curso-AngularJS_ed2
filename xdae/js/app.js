'use strict';

angular.module('fictiziaApp', ['ngRoute'])
    .controller('MenuController', ['$scope', function ($scope) {
        // $scope variables
        $scope.URL_MENU = 'templates/menu.html';
        $scope.menuItems = ['Home'];
        // $scope methods
        $scope.addMenuItem = function () {
            $scope.menuItems.push(angular.copy($scope.menuItem));
            $scope.menuItem = '';
        };
    }])
    
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        
        $routeProvider
        
        // Home
        .when("/", {templateUrl: "templates/home.html", controller: "PageCtrl"})
        
        // Login
        .when("/login", {templateUrl: "templates/login.html", controller: "PageCtrl"})
        
        // Registro
        .when("/registro", {templateUrl: "templates/registro.html", controller: "PageCtrl"})

        // Blog
        .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
        .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
        
        // else 404
        .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
        
        $locationProvider.html5Mode(true);
        
    }])
    
    .controller('BlogCtrl', function ($scope, $location, $http) {
        console.log("Blog Controller reporting for duty.");
    })
    
    .controller('PageCtrl', function ($scope, $location, $http) {
        console.log("Page Controller reporting for duty.");
    })
    
    .directive('navegacion', function() {
        var directive = {};
    
        directive.restrict = 'E'; /* restrict this directive to elements */
        directive.templateUrl = "/templates/navegacion.html";
    
        return directive;
    });