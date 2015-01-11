app.controller('AllAdsCtrl', ['$scope', 'adminAdsData', 'categoriesData', 'townsData' , 'filter', function($scope, adminAdsData, categoriesData, townsData, filter){
    $scope.ready = false;
    $scope.editAdPart = false;
    
    categoriesData.getCategories()
        .$promise
        .then(function(data) {
            $scope.categories = data; 
        })
    
    townsData.getTowns()
        .$promise
        .then(function(data) {
            $scope.towns = data; 
        }) 
    
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
    
    $scope.get = function getAd(adId) {
        adminAdsData.getAd(adId)
            .$promise
            .then(function (data) {
                $scope.topic = data;    
                $scope.editAdPart = true; 
            })
    }
    
    $scope.edit = function editAd(topic) {
        adminAdsData.editAd(topic)
            .$promise
            .then(function (data) {
                console.log("Successfuly edited topic."); 
            })
    }
    
    $scope.deleteAd = function deleteAd(adId) {
        adminAdsData.deleteAd(adId)
            .$promise
            .then(function (data) {
                console.log("Successfuly deleted topic."); 
            })
    }
}])