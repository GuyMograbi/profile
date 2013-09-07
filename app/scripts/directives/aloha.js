'use strict';

angular.module('profileApp')
  .directive('aloha', function ( $timeout ) {
    return {
      template: '<div></div>',
      restrict: 'A',
        scope:{
            "text":"="
        },
      link: function(scope, element, attrs) {
          var $ = Aloha.jQuery;
          function handleAlohaChange( ){
              if ( $(element).html() != scope.text ){
                  scope.text = $(element).html();
              }
              $timeout( handleAlohaChange, 100);
          }

          element.text(scope.text);
          if ( !!Aloha ){
              Aloha.ready( function() {
             $(element).aloha();


              $timeout( handleAlohaChange, 100);


              });
          }

      }
    };
  });
