/* globals angular */
'use strict';

angular.module('myApp', ['ngRoute', 'modulo.home', 'modulo.chat', 'modulo.detail'])
    .constant('oURLs', {
        partials: {
            menu: 'partials/menu.html'
        },
        templates: {
            notFound: '404/404.html',
            login: 'login/login.html'
        },
        paths: {
            login: '/login'
        }
    })
    .config(['$routeProvider', '$locationProvider', 'oURLs', 'oDB', function ($routeProvider, $locationProvider, oURLs) {
        console.log('config de mi app');
        $locationProvider.html5Mode({
            enabled: true/*,
            requireBase: false*/
        });
        $routeProvider
        .otherwise({
            templateUrl: oURLs.templates.notFound
        });
    }])
    .controller('AppCtrl', ['$rootScope', 'oURLs', '$location', function ($rootScope, oURLs, $location) {
        $rootScope.$on("$routeChangeError", function (event, current, previous, rejection) {
            console.log(rejection);
          //if (err === "AUTH_REQUIRED") {
            $location.path(oURLs.paths.login);
          //}
        });
    }])
    .controller('HeaderController', ['$scope', 'oURLs', function ($scope, oURLs){
        $scope.URL_menu = oURLs.partials.menu;
    }])
    .controller('MenuController', ['$scope', function ($scope) {
        // ...
    }]);