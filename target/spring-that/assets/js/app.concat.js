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
}());;
(function () {
  "use strict";

  angular.module('app').config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }
}());;
(function () {
  "use strict";

  angular.module('app').controller('App', App);

  App.$inject = ['$scope'];

  function App($scope) {
  }
}());;
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
}());;
(function () {
  "use strict";

  angular.module('app').controller('Index', Index);

  Index.$inject = ['stocks'];

  function Index(stocks) {
    var vm = this;

    vm.message = "Hello, Index!";
    vm.stocks = stocks;
  }
}());