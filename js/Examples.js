(function () {
  'use strict'

  angular.module('Examples', ['ngMaterial', 'ngMessages'])

  angular.module('Examples').config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('light-blue')
      .accentPalette('blue')
  })

})()
