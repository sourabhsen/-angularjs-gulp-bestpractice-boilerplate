'use strict';
(function(window, angular, undefined) {

  angular.module('easysign', [
    'ui.bootstrap',
    'thumbnail',
    'ui.router',
    'ngDialog'
  ])
  .config([ '$stateProvider','$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
      // For any unmatched url, redirect to /overview
      $urlRouterProvider.otherwise('/overview');

      $stateProvider
        .state('overview', {
          url   : '/overview',
          views : {
            'main' : {
              templateUrl  : 'app/views/overview/overview.html'
            },
            'header':{
              templateUrl  : 'app/views/header.html'
            }
          },

        })
    }
  ])
  .controller('AppController', [
    function() { }
  ]);

})(window, window.angular);
