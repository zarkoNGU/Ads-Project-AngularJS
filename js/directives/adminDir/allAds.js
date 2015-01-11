app.directive('allAds', function() {

    return {
        controller: 'AllAdsCtrl',
        restrict: 'E',
        templateUrl: 'templates/admin_tmp/allAds.html',
        replace: true
    }
})