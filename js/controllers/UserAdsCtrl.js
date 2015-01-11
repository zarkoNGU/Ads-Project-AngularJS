app.controller('UserAdsCtrl', ['$scope', 'adsData', function($scope, adsData){ 
    var ready = false;
    
    adsData.getUserAds()
        .$promise
        .then(function (data) {
            $scope.adsData = data;   
            $scope.ready = true;
        })
    
    $scope.activate = function activateAd(adId) {
        adsData.activateAd(adId)
            .$promise
            .then(function (data) {
                console.log("uraaaa");
            })
    }
    
    $scope.deactivate = function activateAd(adId) {
        adsData.deactivateAd(adId)
            .$promise
            .then(function (data) {
                console.log("uraaaa");
            })
    } 
    
    $scope.deleteAd = function activateAd(adId) {
        adsData.deleteAd(adId)
            .$promise
            .then(function (data) {
                console.log("uraaaa");
            })
    } 
}])