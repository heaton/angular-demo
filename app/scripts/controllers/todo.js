'use strict';

angular.module('htWebappApp')
  .controller('TodoCtrl', ['$scope', function ($scope) {
    $scope.todos = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.addTodo = function() {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };

    $scope.removeTodo = function(i) {
      $scope.todos.splice(i, 1);
    };
  }]);
