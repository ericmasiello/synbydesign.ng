routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('./home.html'),
      controller: 'HomeController',
      controllerAs: 'home',
      resolve: {
        aboutContent: function(AboutModel){
          "use strict";

          return AboutModel.load();
        }
      }
    });
}
