import angular from 'angular';
import appConsts from '../../consts/appConsts';

let hasLoadedAll = false;

export default class PortfolioModel {
  constructor($http, $q, PortfolioHelperFns) {
    this.model = {};
    this.$http = $http;
    this.$q = $q;
    this.PortfolioHelperFns = PortfolioHelperFns;
  }

  load() {
    'use strict';
    const deferred = this.$q.defer();

    if( hasLoadedAll ){
      deferred.resolve(this.model.list);
      return deferred.promise;
    }

    this.$http.get(`${appConsts.SERVER}/posts/?filter[category_name]=web,other,logos,illustration,flyers,business-cards`).then((data)=>{
      this.model.list = data.data;
      hasLoadedAll = true;
      deferred.resolve(this.model.list);
    });

    return deferred.promise;
  }

  loadDetail(id){
    'use strict';

    const deferred = this.$q.defer();

    if( hasLoadedAll ){
      deferred.resolve(this.PortfolioHelperFns.simplifyModelForDisplay(
        this.model.list.filter((p) => p.ID === id)));
      return deferred.promise;
    }

    this.$http.get(`${appConsts.SERVER}/posts/${id}`).then((data)=>{
      deferred.resolve(this.PortfolioHelperFns.simplifyModelForDisplay([data.data]));
    });

    return deferred.promise;
  }
}

PortfolioModel.$inject = ['$http', '$q', 'PortfolioHelperFns'];