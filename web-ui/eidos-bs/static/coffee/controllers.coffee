bs.controller 'StoriesCountCtrl', [
    '$scope', 'StoriesCounter', ($scope, counter)->
        countPromise = counter.count()
        countPromise.then (numFound)-> $scope.storiesCount = numFound
]
