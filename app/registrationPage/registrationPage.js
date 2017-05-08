'use strict';

angular.module('myApp.registrationPage', ['ui.router'])

.controller('registrationPageCtrl', ['$scope','$state','$timeout',function($scope,$state,$timeout){
  $scope.xhr = false;
  $scope.redirect = false;

  $scope.registerObj = {
    role: 'user'
  };

  $scope.submit = function (formInstance) {
    // xhr is departing
    $scope.xhr = true;

      $scope.xhr = false;
      $scope.redirect = true;
      $timeout(function () {
        $state.go('home');
      }, 2000);

    /*.error(function (data, status, headers, config) {
      data.errors.forEach(function (error, index, array) {
        formInstance[error.field].$error[error.name] = true;
      });
      formInstance.$setPristine();
      console.info('post error - ', data);
      $scope.xhr = false;
    });*/
  };

}])

.directive('passwordMatch', function () {
  return {
    restrict: 'A',
    scope: false,
    require: 'ngModel',
    link: function (scope, elem, attrs, controller) {
      var checker = function () {
        // get the value of the first password
        var pwd = scope.$eval(attrs.ngModel);
        // get the value of the other password
        var pwd2 = scope.$eval(attrs.passwordMatch);
        return pwd === pwd2;
      };
      scope.$watch(checker, function (pwdMatch) {
        controller.$setValidity('match', pwdMatch);
      });
    }
  };
});
