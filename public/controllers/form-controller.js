angular.module('App')
.controller('FormController', function($scope, $state, Numbers) {
  $scope.addNumber = function() {
    Numbers.addNumber($scope.number)
    .then ( () => {
      $state.go('list')
    })
  }
})
