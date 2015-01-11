app.factory('adminAdsData', ['$resource', 'baseServiceUrl', 'authentication', function($resource, baseServiceUrl, authentication) {
    var resource = $resource(baseServiceUrl + 'admin/ads', {}, {
        get: {   
            method: 'GET',
            headers: authentication.getHeaders()
        },  
        save: {
            method: 'POST',
            headers: authentication.getHeaders()
        },
        update: { method: 'PUT' },    
    })  
                                                 
    function getAds (filterParams) {                                                     
        return resource.get(filterParams);    
    }
    
    function getAdById(adId) {
        var resource = $resource(baseServiceUrl + 'admin/ads/' + adId, {}, {
            getAd: {                                    
                method: 'GET',
                headers: authentication.getHeaders()
            }
        });                                                                                                                    
        return resource.getAd();
    }
    
    function editAdById(topic) {
        var resource = $resource(baseServiceUrl + 'admin/ads/' + topic.id, {}, {
            editAd: {                                    
                method: 'PUT',
                data: {'title': topic.title},
                headers: authentication.getHeaders()
            }
        });                                                                                                                    
        return resource.editAd();
    }
    
    function deleteAdById(adId) {
        var resource = $resource(baseServiceUrl + 'admin/ads/' + adId, {}, {
            deleteAd: {                                    
                method: 'DELETE',             
                headers: authentication.getHeaders()
            }
        });                                                                                               
        return resource.deleteAd();
    }
    
    function approveAd (adId) {
        var resource = $resource(baseServiceUrl + 'admin/ads/approve/' + adId, {}, {
            approve: {                                    
                method: 'PUT',
                headers: authentication.getHeaders()
            }
        });                                                                                                                    
        return resource.approve();
    }
    
    function rejectAd (adId) {
        var resource = $resource(baseServiceUrl + 'admin/ads/reject/' + adId, {}, {
            reject: {                                    
                method: 'PUT',
                headers: authentication.getHeaders()
            }
        });                                                                                                                    
        return resource.reject();
    }

    return {
        getAds: getAds,
        getAd: getAdById,
        editAd: editAdById,
        deleteAd: deleteAdById,
        approveAd: approveAd,
        rejectAd: rejectAd
    }
}])