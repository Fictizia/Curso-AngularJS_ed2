'use strict';

angular.module('trippin', ['ngRoute', 'firebase'])
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
                
                $routeProvider
                .when('/', {
                    templateUrl: 'templates/home.html',
                    controller: 'HomeController'
                    })
                .when('/about', {
                    templateUrl: 'templates/about.html',
                    controller: 'AboutController'
                })
                .when('/newart', {
                    templateUrl: 'templates/new.html',
                    controller: 'NewArtController'
                })
                    ;
                $locationProvider.html5Mode(true);    
            
            
        }])
                
        //FaMoe's
        .controller('FamousController',['$scope', function($scope){
            
        }])
                
        //página de inicio        
        .controller('HomeController', ['$scope', '$firebase', function($scope, $firebase){
        
        console.log('app init..........');
        var oReferenciaBDD = new Firebase('https://trippin4.firebaseio.com/');
        var ArtReferencia = oReferenciaBDD.child('articulos');
        
        ArtReferencia.on("value", function(snapshot){
            $scope.articles = snapshot.val();
        });
        
        
      
        }])
        //nuevo artículo
        .controller('NewArtController', ['$scope', 'Article', function($scope, Article){
            $scope.addArt = function(){
                var sube = Article.$add({
                    header: $scope.header,
                    subheader: $scope.subheader,
                    body: $scope.body
                });
                /*$scope.header = '';
               // $scope.subheader = '';
                $scope.body = '';
                */
                if(sube){
                    console.log('subido archivo');
                }
                else{
                    console.log('error');
                }
            }
        }])
        //Info
        .controller('AboutController', ['$scope', 'mySelf', function ($scope, mySelf) {
            $scope.name = mySelf.name;
            $scope.surname = mySelf.surname;
            $scope.work = mySelf.prof;
            $scope.town = mySelf.currentTown;
        }])
/////////////////////////////////////////////////////////////////        //.controller('FooterController', ['$scope'])
        
        
        .directive('status', function(){
            var directive = {};
    
            directive.restrict = 'E'; /* restrict this directive to elements */
            directive.templateUrl = "/templates/status.html";
////////////////////////////////////////////////////////////////        //    controller: 'FooterController'
            return directive;
        })
        
        .value('firebaseURL', 'https://trippin4.firebaseio.com/')
        .factory('Article', function ArticleFactory(firebaseURL, $firebase){
            return $firebase(new Firebase(firebaseURL)).$asArray();
        })
        .factory('mySelf', function mySelfFactory(){
            var mySelf = {
                name: 'Deogracias',
                surname: 'Maroto',
                prof: 'Student/work',
                currentTown: 'Madrid'
            };
            return mySelf;
        })
                
                
                
;