app.directive('addCategory', function() {

    return {
        controller: 'AddCategoryCtrl',
        restrict: 'E',
        templateUrl: 'templates/admin_tmp/addCategory.html',
        replace: true
    }
})