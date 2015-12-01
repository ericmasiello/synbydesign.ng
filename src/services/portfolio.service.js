import angular from 'angular';
import routesPaths from './baseRoutePaths.js';

class PortfolioModel {
  constructor($http, $q, RoutesPaths) {
    this.model = {};

    this.$http = $http;
    this.$q = $q;
    this.RoutesPaths = RoutesPaths;
  }

  load() {
    "use strict";
    const deferred = this.$q.defer();

    this.$http.get(`${this.RoutesPaths.root}/posts/?filter[category_name]=web,other,logos,illustration,flyers,business-cards`).then((data)=>{
      this.model.list = data.data;
      deferred.resolve(this.model.list);
    });

    return deferred.promise;
  }
}

const PortfolioHelperFns = function(){
  "use strict";

  var containsCategory = function containsCategory(categories){
    return (function(item){
      return item.terms.category.reduce(function(previousValue, currentValue){
        return previousValue || (categories.indexOf(currentValue.slug) >= 0);
      }, false);
    });
  };

  return {
    filterByWeb(list){
      "use strict";
      return list.filter(containsCategory(['web']));
    },

    filterByDesign(list){
      "use strict";
      return list.filter(containsCategory(['logos','illustration','flyers','business-cards']));
    },

    filterByOther(list){
      "use strict";
      return list.filter(containsCategory(['other']));
    },

    simplifyModelForDisplay(list){
      return list.map(function(item){
        const {ID, content, featured_image, slug, title, terms} = item;
        return {
          ID,
          content,
          featured_image: featured_image.source,
          slug,
          title,
          post_tag: Array.isArray(terms.post_tag) ? terms.post_tag.map(function(tag){
            return tag.name;
          }) : []
        };
      });
    }
  }
};

export default angular.module('services.portfolio', [])
  .service('PortfolioModel', PortfolioModel)
  .factory('PortfolioHelperFns', PortfolioHelperFns)
  .constant('RoutesPaths', routesPaths)
  .name;

PortfolioModel.$inject = ['$http', '$q', 'RoutesPaths'];