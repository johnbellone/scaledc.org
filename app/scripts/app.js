'use strict';

angular.module('scaledc.orgApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

window.onload = function () {
    var scientist = new Scientist();
    scientist.initialize('UA-41226650-1').trackPageView();
};
