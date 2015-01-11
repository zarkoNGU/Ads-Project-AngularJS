app.controller('UserAdsCtrl', ['$scope', 'adsData', function($scope, adsData){
    var ready = false;
    
    adsData.getUserAds()
        .$promise
        .then(function (data) {
            $scope.adsData = data;
            $scope.ready = true;
        })
}])