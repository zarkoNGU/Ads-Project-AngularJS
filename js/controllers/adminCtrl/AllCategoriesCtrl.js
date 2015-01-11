app.controller('AllCategoriesCtrl', ['$scope', 'adminCategoriesData', 'filter', function($scope, adminCategoriesData, filter){   
    $scope.editPart = false;
    
    adminCategoriesData.getCategories()
        .$promise
        .then(function(data) {
            $scope.categories = data.categories; 
        })
            
    $scope.get = function getCategory(catId) {
        adminCategoriesData.getCategory(catId)
            .$promise
            .then(function (data) {
                $scope.categories = data;      
                $scope.editAdPart = true; 
            })
    }
    
//    $scope.set = function setPassword(adId) {
//        adminAdsData.setPassword(adId)
//            .$promise
//            .then(function (data) {
//                $scope.topic = data;        
//            })
//    }
//    
    $scope.edit = function editAd(category) {
        adminCategoriesData.editCategory(category)
            .$promise
            .then(function (data) {
                console.log("Successfuly edited category."); 
            })
    }
    
    $scope.deleteCategory = function deleteAd(adId) {
        adminCategoriesData.deleteCategory(adId)
            .$promise
            .then(function (data) {
                console.log("Successfuly deleted category."); 
            })
    }
}])