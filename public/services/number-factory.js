angular.module('App')
.factory('Numbers', function($http) {
  return {
    getNumbers: function() {
      return $http({
        method: "GET",
        url: "/api/numbers"
      })
      .then( (res) => {
        return res.data
      })
    },

    addNumber: function(number) {
      return $http({
        method: "POST",
        url: "/api/numbers",
        data: {
          number: number
        }
      })
    }  
  }
})
