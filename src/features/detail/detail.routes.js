routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('detail', {
      url: '/detail',
      template: require('./detail.html'),
      controller: 'DetailController',
      controllerAs: 'detail'
    });
}
