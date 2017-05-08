'use strict';

angular.module('myApp.homePage', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('home', {
      url:'/home',
      templateUrl: 'homePage/homePage.html',
      controller: 'homePageCtrl'
  });
}])

.controller('homePageCtrl', ['$scope',function($scope){

}]);
