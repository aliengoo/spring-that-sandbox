angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/index/index.html',
    "<div class=\"container\"><header class=\"page-header\"><h1 class=\"text-center\">Index</h1></header></div>"
  );

}]);
