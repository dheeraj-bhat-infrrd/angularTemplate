'use strict';

angular.module('myApp.loginPage', ['ui.router'])

.controller('loginPageCtrl', ['$scope','$rootScope','$state','$timeout',function($scope,$rootScope,$state,$timeout){

  $scope.redirect= false;
  
  $scope.login = function () {
      $scope.dataLoading = true;

      $scope.redirect = true;
      $timeout(function () {
        $state.go('home');
      }, 1000);

        /*  } else {
              $scope.error = response.message;
              $scope.dataLoading = false;
          }*/

  };
}]);
