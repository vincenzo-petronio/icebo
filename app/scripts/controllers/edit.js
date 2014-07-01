'use strict';

angular.module('iceboApp')
  .controller('EditCtrl', function ($scope, $http) {
    $scope.nuovafrase = '';
    $scope.predicate='-contatore';
    $http( {
        method: 'GET',
        url: 'http://www.dav91.altervista.org/icebotari/webservice_json.php?action=getListaFrasi'
    }).success(function(data) {
        $scope.listaFrasi = data; // response data
        $scope.listaFrasi.forEach(function(f) {
            f.contatore = parseInt(f.contatore);
            f.idFrase = parseInt(f.idFrase);
        });
    }).error(function() {
        alert('AJAX failed!');
    });
    $scope.addFrase = function(item, event) {
        console.log('HTTP Req: ' + $scope.nuovafrase);
        if ($scope.nuovafrase !== '') {
            var responsePromise = $http.get('http://www.dav91.altervista.org/icebotari/webservice_json.php?action=aggiungiFrase&frase=' + $scope.nuovafrase, {});
            responsePromise.success(function (dataFromServer) {
                console.log('HTTP Res: ' + dataFromServer.errorDescription);
            });
            responsePromise.error(function () {
                alert('Submitting form failed!');
            });
        }
    };
    $scope.editCounter = function(count) {
        var frase = this.f;
        console.log('Edit Counter: ' + this.f.idFrase + ' ' + count);
        var url = '';
        if(count == '1') {
            url = 'http://www.dav91.altervista.org/icebotari/webservice_json.php?action=incrementaFrase&idFrase=' + this.f.idFrase;
        } else if(count == '-1') {
            url = 'http://www.dav91.altervista.org/icebotari/webservice_json.php?action=decrementaFrase&idFrase=' + this.f.idFrase;
        }
        console.log('HTTP Req: ' + url);
        var responsePromise = $http.get(url);
        responsePromise.success(function(dataFromServer) {
            console.log('HTTP Res: ' + dataFromServer.errorDescription);
            frase.contatore = parseInt(frase.contatore) + count;
        });
        responsePromise.error(function() {
            alert('HTTP Request failed!');
        });
    };
  });
