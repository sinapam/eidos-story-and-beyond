bs.factory 'StoriesCounter', [
    '$http', '$q', ($http, $q)->
        count: ->
            deferred = $q.defer()
            promise = $http.get('/story/count')
            promise.success (data)-> deferred.resolve data.response.numFound
            return deferred.promise
]
