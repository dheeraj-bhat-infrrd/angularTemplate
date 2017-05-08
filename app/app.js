'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.homePage',
  'myApp.loginPage',
  'myApp.registrationPage',

]).
config(['$stateProvider','$urlRouterProvider','$locationProvider',function($stateProvider,$urlRouterProvider,$locationProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('home', {
    url:'/home',
    templateUrl: 'homePage/homePage.html',
    controller: 'homePageCtrl'
  })

  .state('login', {
    url:'/login',
    templateUrl: 'loginPage/loginPage.html',
    controller: 'loginPageCtrl'
  })

  .state('registration', {
    url:'/registration',
    templateUrl: 'registrationPage/registrationPage.html',
    controller: 'registrationPageCtrl'
  })

  $locationProvider.html5Mode(true);
}]);
