(function () {
  "use strict";

  angular.module('app').controller('Index', Index);

  function Index() {
    var vm = this;

    vm.message = "Hello, Index!";
  }
}());