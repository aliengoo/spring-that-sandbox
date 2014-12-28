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