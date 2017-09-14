angular.module('App', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state({
    name: 'home&login',
    url: '/',
    templateUrl: '/templates/homepage.html',
    controller: 'HomeController'
  })

  .state({
    name: 'form',
    url: '/add',
    templateUrl: '/templates/form-view.html',
    controller: 'FormController'
  })

  .state({
    name: 'list',
    url: '/dashboard',
    templateUrl: '/templates/list-view.html',
    controller: 'ListController'
  })

  .state({
    name: '404',
    url: '/404',
    template: '<p> Not found </p>'
  })

//  $urlRouterProvider.otherwise('404');
})

.directive('listItem', function() {
  return {
    scope: {
      info: '<'
    },
    template: `
      <div>
        {{$parent.number}}
        <br><hr>
      </div>
    `
  }
})
