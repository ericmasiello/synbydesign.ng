import angular from 'angular';
import appConsts from '../consts/appConsts';

class AboutModel {
  constructor($http, $q) {
    this.model = {};

    this.$http = $http;
    this.$q = $q;
  }

  load() {
    'use strict';
    const deferred = this.$q.defer();

    this.$http.get(`${appConsts.SERVER}/pages/about`).then((data)=>{
      this.model.content = data.data.content;
      deferred.resolve(this.model);
    });

    return deferred.promise;
  }
}

export default angular.module('services.about', [])
  .service('AboutModel', AboutModel)
  .name;

AboutModel.$inject = ['$http', '$q'];