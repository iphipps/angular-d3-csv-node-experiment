'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

    
  }])
  .controller('MyCtrl2', [function() {

  }]);

    function Ctrl($scope) {
      $scope.MultiMedalOlympians = smalldataset;
      $scope.predicate = '-Year';
    }
    function Ctrl2($scope) {
      $scope.Olympians = largedataset;
      $scope.predicate = '-Year';
    }

   
