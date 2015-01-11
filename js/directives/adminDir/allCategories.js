app.directive('allCategories', function() {

    return {
        controller: 'AllCategoriesCtrl',
        restrict: 'E',
        templateUrl: 'templates/admin_tmp/allCategories.html',
        replace: true
    }
})