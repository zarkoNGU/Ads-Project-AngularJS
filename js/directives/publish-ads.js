app.directive('publishAds', function() {

    return {
        controller: 'PublishAdsCtrl',
        restrict: 'E',
        templateUrl: 'templates/logged-in/publish-ads.html',
        replace: true
    }
})