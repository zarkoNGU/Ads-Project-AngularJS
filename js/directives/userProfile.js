app.directive('userProfile', function() {

    return {
        controller: 'UserProfileCtrl',
        restrict: 'E',
        templateUrl: 'templates/logged-in/userProfile.html',
        replace: true
    }
})