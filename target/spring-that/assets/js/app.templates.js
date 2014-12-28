angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/index/index.html',
    "<div class=\"container\"><header class=\"page-header\"><h1 class=\"text-center\">Index</h1></header><div class=\"row\"><table class=\"table table-condensed\"><tr><th>Date</th><th>Open</th><th>Close</th><th>High</th><th>Low</th><th>AdjClose</th></tr><tr ng-repeat=\"s in vm.stocks\"><td>{{s.date}}</td><td>{{s.open}}</td><td>{{s.close}}</td><td>{{s.high}}</td><td>{{s.low}}</td><td>{{s.adjClose}}</td></tr></table></div></div>"
  );

}]);
