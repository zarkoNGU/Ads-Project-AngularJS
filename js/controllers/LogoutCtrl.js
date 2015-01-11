app.controller('LogoutCtrl', ['$scope', '$location', 'userData', 'authentication', function($scope, $location, userData, authentication){     
        
    userData.logout();                     
           
    if(!authentication.isLoggedIn()){ 
        $location.path('/login');
    }                                  
         
}])