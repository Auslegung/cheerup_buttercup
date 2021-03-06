(function() {
  angular.module('cheerup', ['ui.router'])
    .config(MainRouter);

    MainRouter.$inject = ['$stateProvider', '$urlRouterProvider']

    function MainRouter($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: '../partials/_home.html'
        })
        .state('signup', {
          url: '/signup',
          templateUrl: '../partials/_signup.html'
        })
        .state('profile', {
          url: '/profile',
          templateUrl: '../partials/_profile.html',
          // controller: 'railsController',
          // controllerAs: 'rails',
          data: {currentUser: null}
          // resolve: {promiseObj: function($http){
          //
          // }}
        })
        .state('cheerups', {
          url: '/cheerups',
          templateUrl: '../partials/_cheerups.html'
        })

        $urlRouterProvider.otherwise('/');

      }

})()
