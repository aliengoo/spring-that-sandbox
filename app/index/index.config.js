(function () {
  "use strict";

  angular.module('app').config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider.state('index', {
      url : '/',
      controller : 'Index',
      controllerAs : 'vm',
      templateUrl : 'app/index/index.html'
    });
  }
}());