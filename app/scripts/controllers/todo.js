'use strict';

angular.module('htWebappApp')
  .controller('TodoCtrl', ['$scope', function ($scope) {
    $scope.todos = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
