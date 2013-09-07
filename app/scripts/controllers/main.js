'use strict';

angular.module('profileApp')
  .controller('MainCtrl', function ($scope) {


        $scope.aboutMe = "This is me";
        $scope.title = "title";



        $scope.toggleDirection = function(){
            if ( $scope.direction == "rtl"){
                $scope.direction = "ltr";
            }else{
                $scope.direction = "rtl";
            }
        };

        $scope.toggleDirection();

  });
