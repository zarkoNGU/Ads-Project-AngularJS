app.controller('AllAdsCtrl', ['$scope', 'adminAdsData', 'filter', function($scope, adminAdsData, filter){
    $scope.ready = false;
    
    function loadAds(filterParams, startPage) {
        filterParams = filterParams || {};
        startPage = startPage || undefined;
        adminAdsData.getAds(filterParams, startPage)
            .$promise
            .then(function (data) {
                $scope.adsData = data;
                $scope.ready = true;
            })
    }
    
    loadAds();
    
    
    $scope.pagePrevious = function() {
        page = filter.getPageParams();     
        filter.setPageParams(page - 1);
        loadAds(filter.getFilterParams(), filter.getPageParams());    
    }
    $scope.pageNext = function() {
        page = filter.getPageParams();     
        filter.setPageParams(page + 1);
        loadAds(filter.getFilterParams(), filter.getPageParams());    
    }
    
    $scope.approve = function approveAd(adId) {
        adminAdsData.approveAd(adId)
            .$promise
            .then(function (data) {
                console.log("Approvna se :)");
            })
    }
    
    $scope.reject = function rejectAd(adId) {
        adminAdsData.rejectAd(adId)
            .$promise
            .then(function (data) {
                console.log("Rejectna se :)");
            })
    }
}])