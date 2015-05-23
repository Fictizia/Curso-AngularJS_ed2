/* globals angular */
'use strict';

angular
  .module('myApp', [
    'myApp.home',
    'myApp.aboutUs',
    'myApp.contact',
    'myApp.db',
    'ngRoute'
  ])

  .constant('appURLS', {
    partials : {
      menu : 'partials/menu.html'
    },
    templates : {
      about_us : 'about-us/about-us.html',
      contact  : 'contact/contact.html',
      details  : 'details/details.html',
      notFoud  : '404/404.html'
    },
    paths : {
      home     : './',
      about_us : './about-us',
      contact  : './contact',
      details  : './details'
    }
  })

  .config(['$routeProvider', '$locationProvider','appURLS', function($routeProvider, $locationProvider, appURLS){
    $locationProvider.html5Mode({
      enabled: true
      //requireBase: false
    })

    $routeProvider
      .otherwise({
        templateUrl : appURLS.templates.notFoud
      })
  }])

  .controller('GeneralCtrl', ['$scope', 'appURLS', function($scope, appURLS){
    $scope.menu = appURLS.partials.menu;
    $scope.linksNav = [
      {
        'name' : 'home',
        'url'  : appURLS.paths.home
      },
      {
        'name' : 'about us',
        'url'  : appURLS.paths.about_us
      },
      {
        'name' : 'contact',
        'url'  : appURLS.paths.contact
      },
      {
        'name' : 'details',
        'url'  : appURLS.paths.details
      }
    ]
  }])
;
