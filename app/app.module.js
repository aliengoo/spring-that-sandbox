(function () {

  "use strict";

  angular.module('app', [
    // Angularjs
    'ngResource',
    'ngCookies',
    'ngAnimate',

    // third-party modules
    'ui.router',
    'ui.utils',
    'ui.bootstrap',
    'angular-loading-bar',
    'toastr',
    'cfp.hotkeys',
    'LocalStorageModule',
    'ui.select2'
  ]);
}());