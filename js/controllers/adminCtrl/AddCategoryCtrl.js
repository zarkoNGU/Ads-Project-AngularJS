app.controller('AddCategoryCtrl', ['$scope', 'adminCategoriesData', 'filter', function($scope, adminCategoriesData, filter){  
              
    $scope.publish = function publishCategory(category) {
        adminCategoriesData.add(category)
            .$promise
            .then(function (data) {
                console.log("Successfuly added new category."); 
            })
    }    
}])