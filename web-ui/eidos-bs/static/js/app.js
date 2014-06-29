(function() {
  var bs;

  bs = angular.module('eidosBs', []);

  bs.controller('StoriesCountCtrl', [
    '$scope', 'StoriesCounter', function($scope, counter) {
      var countPromise;
      countPromise = counter.count();
      return countPromise.then(function(numFound) {
        return $scope.storiesCount = numFound;
      });
    }
  ]);

  bs.factory('StoriesCounter', [
    '$http', '$q', function($http, $q) {
      return {
        count: function() {
          var deferred, promise;
          deferred = $q.defer();
          promise = $http.get('/story/count');
          promise.success(function(data) {
            return deferred.resolve(data.response.numFound);
          });
          return deferred.promise;
        }
      };
    }
  ]);

}).call(this);
