(function () {
  "use strict";

  angular.module('app').config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider.state('index', {
      url : '/',
      controller : 'Index',
      controllerAs : 'vm',
      templateUrl : 'app/index/index.html',
      resolve :{
        stocks : ['$resource', function($resource){
          return $resource('api/nasdaq', {}).query({
            start : "2014-07-11",
            end : "2014-08-11"
          }).$promise;
        }]
      }
    });
  }
}());