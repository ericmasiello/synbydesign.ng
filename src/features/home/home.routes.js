routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('./home.html'),
      controller: 'HomeController',
      controllerAs: 'home',
      resolve: {
        aboutContent: resolveAbout,
        portfolioContent: resolvePortfolio
      }
    });
}

function resolveAbout(AboutModel) {
  'use strict';

  return AboutModel.load();
}

resolveAbout.$inject = ['AboutModel'];

function resolvePortfolio($q, PortfolioModel, PortfolioHelperFns) {
  'use strict';

  return PortfolioModel.load().then(function (list) {
    const deferred = $q.defer();

    deferred.resolve({
      web: PortfolioHelperFns.simplifyModelForDisplay(PortfolioHelperFns.filterByWeb(list)),
      design: PortfolioHelperFns.simplifyModelForDisplay(PortfolioHelperFns.filterByDesign(list)),
      other: PortfolioHelperFns.simplifyModelForDisplay(PortfolioHelperFns.filterByOther(list))
    });

    return deferred.promise;
  });
}

resolvePortfolio.$inject = ['$q', 'PortfolioModel', 'PortfolioHelperFns'];
