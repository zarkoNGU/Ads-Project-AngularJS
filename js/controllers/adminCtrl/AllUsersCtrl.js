app.controller('AllUsersCtrl', ['$scope', 'adminUsersData', 'categoriesData', 'townsData' , 'filter', function($scope, adminUsersData, categoriesData, townsData, filter){
    $scope.ready = false;
    $scope.editPart = false;
    
    categoriesData.getCategories()
        .$promise
        .then(function(data) {
            $scope.categories = data; 
        })
    
    townsData.getTowns()
        .$promise
        .then(function(data) {
            $scope.towns = data; 
        }) 
    
    function loadUsers() {                  
        adminUsersData.getUsers()
            .$promise
            .then(function (data) {
                $scope.usersData = data;
                $scope.ready = true;
            })
    }
    
    loadUsers();  
         
    $scope.get = function getUser(userId) {
        adminUsersData.getUser(userId)
            .$promise
            .then(function (data) {
                $scope.users = data;      
                $scope.editAdPart = true; 
            })
    }
    
    $scope.set = function setPassword(userId) {
        adminUsersData.setPassword(userId)
            .$promise
            .then(function (data) {
                $scope.topic = data;        
            })
    }
    
    $scope.edit = function editAd(user) {
        adminUsersData.editUser(user)
            .$promise
            .then(function (data) {
                console.log("Successfuly edited user."); 
            })
    }
    
    $scope.deleteAd = function deleteUser(userId) {
        adminUsersData.deleteUser(userId)
            .$promise
            .then(function (data) {
                console.log("Successfuly deleted user."); 
            })
    }
}])