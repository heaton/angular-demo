'use strict';

/**
 * @ngdoc function
 * @name htWebappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the htWebappApp
 */
angular.module('htWebappApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
