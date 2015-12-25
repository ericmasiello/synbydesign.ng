import PortfolioModel from './portfolioModel.service';
import PortfolioHelperFns from './portfolioHelpers.factory';

export default angular.module('services.portfolio', [])
  .service('PortfolioModel', PortfolioModel)
  .factory('PortfolioHelperFns', PortfolioHelperFns)
  .name;