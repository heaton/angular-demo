'use strict';

/**
 * @ngdoc function
 * @name htWebappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the htWebappApp
 */
angular.module('htWebappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
