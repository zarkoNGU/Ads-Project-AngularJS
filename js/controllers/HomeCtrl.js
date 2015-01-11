app.controller('HomeCtrl', ['$scope', 'authentication', function($scope, authentication){
    $scope.pageTitle = 'Home';                   
    $scope.isLoggedIn = authentication.isLoggedIn();
    console.log(authentication.isAdmin());
    $scope.isAdmin = authentication.isAdmin();
}])