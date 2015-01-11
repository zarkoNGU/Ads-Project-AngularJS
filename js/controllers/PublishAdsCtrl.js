app.controller('PublishAdsCtrl', ['$scope', 'categoriesData', 'townsData', 'adsData', function($scope, categoriesData, townsData, adsData){ 
    
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
    
    $scope.publishAd = function(ad) {    
        adsData.add(ad).$promise
        .then(function(data) {
            console.log("ura");
        })       
    }    
}])