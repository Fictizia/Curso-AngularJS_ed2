/* globals angular */
'use scrict';

// Use Fluent code style guide, no globals!
angular.module('myAppModule', ['ngRoute'])
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
    .controller('HomePageController', ['$scope', function ($scope) {
        console.log('home cargada');
    }])
    .controller('OtherPageController', ['$scope', function ($scope) {
        console.log('otra pagina cargada');
    }])
    .config(['$routeProvider', function ($routeProvider, $locationProvider) {
        $routeProvider 
        // Home
        .when("/", {templateUrl: "partials/home.html", controller: "HomePageController"});
        // Pages
        //.when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
        //.when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
        // Blog
        //.when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
        //.when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
        // else 404
        //.otherwise("/404", {templateUrl: "partials/404.html", controller: "OtherPageController"});
        // configure html5 to get links working on jsfiddle
        $locationProvider.html5Mode(true);
    }])
    .controller('BlogCtrl', function ($scope, $location, $http) {
        console.log("Blog Controller reporting for duty.");
    })
    .controller('PageCtrl', function ($scope, $location, $http) {
        console.log("Page Controller reporting for duty.");
    });