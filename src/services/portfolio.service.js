import angular from 'angular';
import routePaths from './baseRoutePaths.js';

class PortfolioModel {
  constructor($http, $q, routesPaths) {
    this.model = {};

    this.$http = $http;
    this.$q = $q;
    this.routePaths = routesPaths;
  }

  load() {
    "use strict";
    const deferred = this.$q.defer();

    this.$http.get(`${this.routePaths.root}/posts/?filter[category_name]=web,other,logos,illustration,flyers,business-cards`).then((data)=>{
      this.model.list = data.data;
      deferred.resolve(this.model);
    });

    return deferred.promise;
  }
}

export default angular.module('services.portfolio', [])
  .service('PortfolioModel', PortfolioModel)
  .constant('routesPaths', routePaths)
  .name;

PortfolioModel.$inject = ['$http', '$q', 'routesPaths'];