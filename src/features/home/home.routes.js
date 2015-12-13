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
          'use strict';

          return AboutModel.load();
        },
        portfolioContent: function($q, PortfolioModel, PortfolioHelperFns){
          'use strict';

          return PortfolioModel.load().then(function(list){
            const deferred = $q.defer();

            deferred.resolve({
              web: PortfolioHelperFns.simplifyModelForDisplay(PortfolioHelperFns.filterByWeb(list)),
              design: PortfolioHelperFns.simplifyModelForDisplay(PortfolioHelperFns.filterByDesign(list)),
              other: PortfolioHelperFns.simplifyModelForDisplay(PortfolioHelperFns.filterByOther(list))
            });

            return deferred.promise;
          });
        }
      }
    });
}
