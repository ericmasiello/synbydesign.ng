import angular from 'angular';
import routePaths from './baseRoutePaths.js';

class AboutModel {
  constructor($http, $q, routesPaths) {
    this.model = {};

    this.$http = $http;
    this.$q = $q;
    this.routePaths = routesPaths;
  }

  load() {
    'use strict';
    const deferred = this.$q.defer();

    this.$http.get(`${this.routePaths.root}/pages/about`).then((data)=>{
      this.model.content = data.data.content;
      deferred.resolve(this.model);
    });

    return deferred.promise;
  }
}

export default angular.module('services.about', [])
  .service('AboutModel', AboutModel)
  .constant('routesPaths', routePaths)
  .name;

AboutModel.$inject = ['$http', '$q', 'routesPaths'];