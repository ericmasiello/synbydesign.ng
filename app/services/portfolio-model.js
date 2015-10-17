'use strict';
angular.module('myApp.portfolio.service', [])
.factory('portfolio', ['$q', '$http', function($q, $http){

    return {
      load: function(){

        var deferred = $q.defer();

        $http.get('/test.py').success(function(data, status, headers) {

          deferred.resolve(data);
        });

        return deferred.promise;;
      }
    };
  }]);