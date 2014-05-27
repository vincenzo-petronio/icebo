'use strict';

angular.module('iceboApp')
  .filter('filterOrderByCount', function () {
    return function (input) {
      return input.slice().reverse();
    };
  });
