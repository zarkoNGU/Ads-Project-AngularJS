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
        approveAd: approveAd,
        rejectAd: rejectAd
    }
}])