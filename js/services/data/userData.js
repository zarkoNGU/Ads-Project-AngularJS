app.factory('userData', ['$resource', 'baseServiceUrl', 'authentication', function($resource, baseServiceUrl, authentication) {    
    
    function getUserData() {
        var resource = $resource(baseServiceUrl + 'user/profile', {}, {
            get: {   
                method: 'GET',
                headers: authentication.getHeaders()
            }
        });
        return resource.get();    
    }
    
    function editUser(user) {
        var resource = $resource(baseServiceUrl + 'user/profile', {}, {
            edit: {   
                method: 'PUT',           
                headers: authentication.getHeaders()
            }
        }); 
        return resource.edit(user)
            .$promise
            .then(function(data) {   
                authentication.saveUser(data);               
            })    
    }
    
    function registerUser(user) {
        return $resource(baseServiceUrl + "user/register")
            .save(user)
            .$promise
            .then(function(data) {
                authentication.saveUser(data);               
            })    
    }
    
    function loginUser(user) {
        var resource = $resource(baseServiceUrl + "user/login")
            .save(user);
            
        resource.$promise
            .then(function(data) {
                authentication.saveUser(data);                   
            })    
        return resource;   
    }
    
    function logoutUser(user) { 
        authentication.removeUser();  
    }


    return {
        getUserData: getUserData,
        edit: editUser,
        register: registerUser,
        login: loginUser,
        logout: logoutUser
    }
}])