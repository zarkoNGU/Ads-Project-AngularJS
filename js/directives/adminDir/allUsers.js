app.directive('allUsers', function() {

    return {
        controller: 'AllUsersCtrl',
        restrict: 'E',
        templateUrl: 'templates/admin_tmp/allUsers.html',
        replace: true
    }
})