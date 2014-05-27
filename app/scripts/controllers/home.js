'use strict';

angular.module('iceboApp')
  .controller('HomeCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.rndmData = {};
    $scope.rndmData.doClick = function(item, event) {
        var responsePromise = $http.get("http://www.dav91.altervista.org/icebotari/webservice_json.php?action=getFraseRandom");

        responsePromise.success(function(data, status, headers, config) {
            $scope.rndmData.fromServer = data.frase;
        });
        responsePromise.error(function(data, status, headers, config) {
            alert("AJAX failed!");
        });
    };
  });
