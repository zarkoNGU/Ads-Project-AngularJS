app.factory('adminCategoriesData', ['$resource', 'baseServiceUrl', 'authentication', function($resource, baseServiceUrl, authentication) {
    var resource = $resource(baseServiceUrl + 'admin/categories');
    function getAllCategories() {
        var resource = $resource(baseServiceUrl + 'admin/categories/', {}, {
            getAllCategories: {                                    
                method: 'GET',
                headers: authentication.getHeaders()
            }
        });
        return resource.getAllCategories();    
    }
    
    function getCategoryById(userId) {
        var resource = $resource(baseServiceUrl + 'admin/categories/' + userId, {}, {
            getCategory: {                                    
                method: 'GET',
                headers: authentication.getHeaders()
            }
        });                                                                                                                    
        return resource.getCategory();
    }
    
    function editCategoryById(category) {     
        var resource = $resource(baseServiceUrl + 'admin/categories/' + category.username, {}, {
            editCategory: {                                    
                method: 'PUT',
                data: category,
                headers: authentication.getHeaders()
            }
        });                                                                                                                    
        return resource.editCategory();
    }
    
    function deleteCategoryById(categoryId) {
        var resource = $resource(baseServiceUrl + 'admin/categories/' + categoryId, {}, {
            deleteCategory: {                                    
                method: 'DELETE',             
                headers: authentication.getHeaders()
            }
        });                                                                                               
        return resource.deleteCategory();
    } 
    
    function addCategory(category) {    
        console.log(category);
        console.log(category.name);
   //     console.log(angular.toJson(category));
//        console.log(angular.fromJson(category));
        var resource = $resource(baseServiceUrl + 'admin/categories/', {}, {
            addCategory: {                                    
                method: 'POST',                            
                headers: authentication.getHeaders(),
                data: category,
                dataType: "json"
            }
        });                                                                                               
        return resource.addCategory();
    }  

    return {                   
        getCategories: getAllCategories,
        getCategory: getCategoryById,
        editCategory: editCategoryById,
        deleteCategory: deleteCategoryById,
        add: addCategory
    }  
}])