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
      templateUrl : 'app/index/index.html'
    });
  }
}());;
(function () {
  "use strict";

  angular.module('app').controller('Index', Index);

  function Index() {
    var vm = this;

    vm.message = "Hello, Index!";
  }
}());