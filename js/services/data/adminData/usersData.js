app.factory('adminUsersData', ['$resource', 'baseServiceUrl', 'authentication', function($resource, baseServiceUrl, authentication) {
    var resource = $resource(baseServiceUrl + 'admin/users', {}, {
        get: {   
            method: 'GET',
            headers: authentication.getHeaders()
        },  
        save: {
            method: 'POST',
            headers: authentication.getHeaders()
        },                            
    })  
                                                 
    function getUsers () {                                                     
        return resource.get();    
    }
    
    function getUserById(userId) {
        var resource = $resource(baseServiceUrl + 'admin/users/' + userId, {}, {
            getUser: {                                    
                method: 'GET',
                headers: authentication.getHeaders()
            }
        });                                                                                                                    
        return resource.getUser();
    }
    
    function editUserById(user) {
        var resource = $resource(baseServiceUrl + 'admin/ads/' + user.username, {}, {
            editUser: {                                    
                method: 'PUT',
                data: user,
                headers: authentication.getHeaders()
            }
        });                                                                                                                    
        return resource.editUser();
    }
    
    function deleteUserById(userId) {
        var resource = $resource(baseServiceUrl + 'admin/users/' + userId, {}, {
            deleteUser: {                                    
                method: 'DELETE',             
                headers: authentication.getHeaders()
            }
        });                                                                                               
        return resource.deleteUser();
    }   

    return {
        getUsers: getUsers,
        getUser: getUserById,
        editUser: editUserById,
        deleteUser: deleteUserById,
    }
}])