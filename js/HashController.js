(function () {
  'use strict'

  angular.module('Examples')
    .controller('HashController', HashController)

  HashController.$inject = ['$scope', 'cryptoService']

  function HashController ($scope, cryptoService) {
    $scope.textToHash = ''
    $scope.updateHashedText = function () {
      $scope.textLength = $scope.textToHash.length

      $scope.hashedText = $scope.textToHash == '' ? '' : cryptoService.sha256($scope.textToHash)
      $scope.hashedTextLength = $scope.hashedText.length

      var bytes = []

      for (var i = 0; i < $scope.hashedText.length; i++) {
        bytes.push(cryptoService.ConvertBase($scope.hashedText.substr(i, 1)).from(16).to(2))
      }

      $scope.binaryValue = bytes.join('')
      $scope.binaryValueLength = $scope.binaryValue.length
    }
  }
})()
