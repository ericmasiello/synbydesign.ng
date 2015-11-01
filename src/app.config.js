routing.$inject = ['$urlRouterProvider', '$locationProvider'];

export default function routing($urlRouterProvider, $locationProvider) {
  //$locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  //$stateProvider
  //  .state('state1', {
  //    url: "/state1",
  //    templateUrl: "src/features/portfolio/detail.html"
  //  });
}
