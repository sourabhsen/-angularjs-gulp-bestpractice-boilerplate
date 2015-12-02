'use strict';
(function(window, angular, undefined){
  function actionControl($modal){
    return {
      replace     : true,
      restrict: 'E',
      templateUrl : 'app/modules/action-control/action-control-template.html',
      link        : function(scope, elem, attr){
        scope.open = function () {
          $modal.open({
            templateUrl: 'app/modules/action-control/modal-template.html'
         });
        };
      }
    };
  }

  actionControl.$inject = ['ngDialog'];

  angular.module('easysign')
  .directive('actionControl', actionControl);
})(window, window.angular);
