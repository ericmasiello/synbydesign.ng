import angular from 'angular';
import mockdata from './about.service.mockdata';

class AboutModel {
  constructor($http, $q) {
    this.model = {};

    this.$http = $http;
    this.$q = $q;
  }

  load() {
    "use strict";
    const deferred = this.$q.defer();

    this.$http.get('http://www.synbydesign.com/wp/wp-json/pages/about').then((data)=>{

      //FIXME: Pipeline the data here to slim it down to what the UI actually needs
      deferred.resolve(data.data);
    });

    return deferred.promise;
  }
}

export default angular.module('services.about', [])
  .service('aboutModel', AboutModel)
  .name;

AboutModel.$inject = ['$http', '$q'];