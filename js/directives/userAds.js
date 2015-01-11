app.directive('userAds', function() {

    return {
        controller: 'UserAdsCtrl',
        restrict: 'E',
        templateUrl: 'templates/logged-in/user-ads.html',
        replace: true
    }
})