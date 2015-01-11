app.controller('UserAdsCtrl', ['$scope', 'adsData', 'categoriesData', 'townsData' , function($scope, adsData, categoriesData, townsData){ 
    var ready = false;
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
    
    $scope.edit = function editAd(adId) {
        adsData.edit(adId)
            .$promise
            .then(function (data) {
                console.log("uraaaa");
            })
    }
    
    $scope.get = function getAd(adId) {
        adsData.getAdById(adId)
            .$promise
            .then(function (data) {
                $scope.topic = data;    
                $scope.editAdPart = true; 
            })
    }
    
    $scope.edit = function editAd(topic) {
        adsData.edit(topic)
            .$promise
            .then(function (data) {
                console.log("Successfuly edited topic."); 
            })
    }
}])