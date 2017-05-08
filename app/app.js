'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.homePage'
]).
config(['$stateProvider','$urlRouterProvider','$locationProvider',function($stateProvider,$urlRouterProvider,$locationProvider) {

  $urlRouterProvider.otherwise('/home');

  $locationProvider.html5Mode(true);
}]);
