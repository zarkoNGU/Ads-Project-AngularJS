app.controller('UserProfileCtrl', ['$scope', 'userData', 'townsData', function($scope, userData, townsData){ 
    townsData.getTowns()
        .$promise
        .then(function (data) {
            $scope.towns = data;
        })
    
    userData.getUserData()
        .$promise
        .then(function(data) {
            $scope.user = data;
        })
        
    $scope.edit = function(user) {    
        userData.edit(user);
    }     
}])