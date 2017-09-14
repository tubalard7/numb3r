angular.module('App')
.controller('ListController', function($scope, Numbers) {
  Numbers.getNumbers()
  .then( (numbers) => {
    console.log(numbers);
    $scope.numbers = numbers;
  })
})
