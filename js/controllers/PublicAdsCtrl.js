app.controller('PublicAdsCtrl', ['$scope', 'adsData', 'filter', function($scope, adsData, filter){
    $scope.ready = false;
    
    function loadPublicAds(filterParams, startPage) {
        filterParams = filterParams || {};
        startPage = startPage || undefined;
        adsData.getPublicAds(filterParams, startPage)
            .$promise
            .then(function (data) {
                $scope.adsData = data;
                $scope.ready = true;
            })
    }
    
    function getAdById(adId) {
        adId = adId || 1;                  
        adsData.getAdById(adId)
            .$promise
            .then(function (data) {
                $scope.topic = data;  
            })
    }
    
    loadPublicAds();
    getAdById();
    
    $scope.getAd = function getAd(adId){
        getAdById(adId);
    }
    
    $scope.pagePrevious = function() {
        page = filter.getPageParams();     
        filter.setPageParams(page - 1);
        loadPublicAds(filter.getFilterParams(), filter.getPageParams());    
    }
    $scope.pageNext = function() {
        page = filter.getPageParams();     
        filter.setPageParams(page + 1);
        loadPublicAds(filter.getFilterParams(), filter.getPageParams());    
    }
        
    $scope.$on('categoryClicked', function(event, category) {
        loadPublicAds(filter.getFilterParams());    
    })
    $scope.$on('townClicked', function(event, town) {
        loadPublicAds(filter.getFilterParams());    
    })    
}])