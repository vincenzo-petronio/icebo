'use strict';

angular.module('iceboApp')
  .controller('HomeCtrl', function ($scope, $http) {
    $scope.rndmData = {};
    $scope.rndmData.doClick = function() {
        var responsePromise = $http.get('http://www.dav91.altervista.org/icebotari/webservice_json.php?action=getFraseRandom');

        responsePromise.success(function(data) {
            $scope.rndmData.fromServer = data.frase;
        });
        responsePromise.error(function() {
            alert('AJAX failed!');
        });
    };
  });
