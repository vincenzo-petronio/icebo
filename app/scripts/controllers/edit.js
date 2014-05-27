'use strict';

angular.module('iceboApp')
  .controller('EditCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http( {
        method: "POST",
        url: "http://www.dav91.altervista.org/icebotari/webservice_json.php?action=getListaFrasi"
    }).success(function(data) {
        $scope.listaFrasi = data; // response data
    }).error(function(data, status, headers, config) {
        alert("AJAX failed!");
    });
  });
