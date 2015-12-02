'use strict';

(function(window, angular, undefined){
	function pdfThumbnail($window){
		return{
      restrict: 'E',
      scope: {
        'source': '=',
        'maxHeight': '@',
        'maxWidth': '@'
      },
			link  : function(scope, elem, attr){
        var canvas = document.createElement('canvas');
        renderPdfThumbnail(scope, canvas);
        elem.append(canvas);

        //method with uses PDFJS to open the pdf n render it in canvas
        function renderPdfThumbnail(scope, canvas){
          var pdfDoc = null;

          if (!scope.source) {
              return;
          }

          $window.PDFJS.disableWorker = true;
          //get pdf here
          $window.PDFJS.getDocument(scope.source).then(function (_pdfDoc) {
            pdfDoc = _pdfDoc;

             // get page here
            pdfDoc.getPage(1).then(function(page) { 
              var viewport = page.getViewport(1);
              var context = canvas.getContext('2d');

              //following few lines will adjust/scale the canvas sizing
              var ratio = viewport.width / viewport.height;
              canvas.height =  Math.floor(scope.maxHeight || viewport.height)*ratio;
              canvas.width =   Math.floor(scope.maxWidth || viewport.width)*ratio;

              var renderContext = {
                canvasContext: context,
                viewport: page.getViewport(
                  canvas.height / viewport.height,
                )
              };

              page.render(renderContext);
            });
          }, function (error) {
            console.log(error);
          });

        }
      }
    };
  }

  pdfThumbnail.$inject = ['$window'];

  angular.module('thumbnail')
  .directive('pdfThumbnail', pdfThumbnail);

})(window, window.angular);
