'use strict';
angular.module('miApp',['ngRoute'])
  .controller('Controller', ['$scope', function ($scope) {
        // $scope variables
        //$scope.URL_MENU = 'templates/menu.html';
        // $scope methods
        $scope.addMenuItem = function () {
           $scope.menuItems.push(angular.copy($scope.menuItem));
            $scope.menuItem = '';
        };
    }])
    .config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider) {
        $routeProvider 
        // Home
        .when("/", {templateUrl: "templates/home.html", controller: "PageCtrl"})
       // Pages
        .when("/crearcuenta", {templateUrl: "templates/crearcuenta.html", controller: "PageCtrl"})
        .when("/login", {templateUrl: "templates/login.html", controller: "PageCtrl"})
        // else 404
        .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"}); 
        
        $locationProvider.html5Mode(true);
    }]);
   /* .controller('BlogCtrl', function ($scope, $location, $http) {
        console.log("Blog Controller reporting for duty.");
    })
    .controller('PageCtrl', function ($scope, $location, $http) {
        console.log("Page Controller reporting for duty.");
    });*/