'use strict';

/**
 * @ngdoc function
 * @name ambassadorApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ambassadorApp
 */
angular.module('ambassadorApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
