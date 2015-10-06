angular.module('myApp.services')
  .factory('Portfolio', function ($http, $q) {

    return {
      load: function () {

        var deferred = $q.defer();

        // Simple GET request example:
        $http({
          method: 'GET',
          url: 'http://localhost/synbydesign/wp/wp-json/posts/?filter[category_name]=web,other,logos,illustration,flyers,business-cards'
        }).then(function successCallback(response) {

          deferred.resolve(response.data);

          // this callback will be called asynchronously
          // when the response is available
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.

          deferred.reject(response);
        });

        return deferred.promise;;
      }
    }
  });