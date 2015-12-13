routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('detail', {
      url: '/detail/:id',
      template: require('./detail.html'),
      controller: 'DetailController',
      controllerAs: 'detail',
      resolve: {
        portfolioDetail: function($q, $stateParams, PortfolioModel){
          'use strict';

          return PortfolioModel.loadDetail(parseInt($stateParams.id));
        }
      }
    });
}
