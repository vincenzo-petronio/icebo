'use strict';

angular.module('iceboApp')
  .controller('EditCtrl', function ($scope, $http) {
    $http( {
        method: "POST",
        url: "http://www.dav91.altervista.org/icebotari/webservice_json.php?action=getListaFrasi"
    }).success(function(data) {
        $scope.listaFrasi = data; // response data
    }).error(function(data, status, headers, config) {
        alert("AJAX failed!");
    });
    $scope.addFrase = function(item, event) {
        console.log("Form Req");

        var responsePromise = $http.get("http://www.dav91.altervista.org/icebotari/webservice_json.php?action=aggiungiFrase&frase=" + $scope.nuovafrase, {});
        responsePromise.success(function(dataFromServer, status, headers, config) {
            console.log("Form Res: "+ dataFromServer.errorDescription);
        });
        responsePromise.error(function(data, status, headers, config) {
            alert("Submitting form failed!");
        });
    };
    $scope.editCounter = function(item, event) {
        console.log("Edit Counter: " + item)
    };
  });
