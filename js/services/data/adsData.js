app.factory('adsData', ['$resource', 'baseServiceUrl', 'authentication', function($resource, baseServiceUrl, authentication) {
    var resource = $resource(baseServiceUrl + 'ads:adId', {adId: '@id'}, {
        update: { method: 'PUT' },    
    })
    var userResource = $resource(baseServiceUrl + 'user/ads', {}, {
        get: {   
            method: 'GET',
            headers: authentication.getHeaders()
        },  
        save: {
            method: 'POST',
            headers: authentication.getHeaders()
        }
    });                                             
    function getPublicAds (filterParams) {                                                     
        return resource.get(filterParams);    
    }
    
    function editAd( adId, ad) {
        return resource.update({ id: adId }, ad);
    }
    
    function getAdById(adId) {
         var getResource = $resource(baseServiceUrl + 'user/ads/' + adId, {}, {
            get: {   
                method: 'GET',
                headers: authentication.getHeaders()
            }
        });
        return getResource.get();
    }
    
    function getUserAds() {
        return userResource.get();
    }
    
    function addAd(ad) {                                                                                                                    
        return userResource.save(ad);
    }
    
    function activateAd(adId) {
        var userResource = $resource(baseServiceUrl + 'user/ads/publishagain/' + adId, {}, {
            activate: {                                    
                method: 'PUT',
                headers: authentication.getHeaders()
            }
        });                                                                                                                    
        return userResource.activate();
    }
    
    function deactivateAd(adId) {
        var userResource = $resource(baseServiceUrl + 'user/ads/deactivate/' + adId, {}, {
            deactivate: {                                    
                method: 'PUT',
                headers: authentication.getHeaders()
            }
        });                                                                                                                    
        return userResource.deactivate();
    }
    
    function deleteAd(adId) {  
        var userResource = $resource(baseServiceUrl + 'user/ads/' + adId, {}, {
            deleteAd: {                                    
                method: 'DELETE',
                headers: authentication.getHeaders()
            }
        });
        return userResource.deleteAd(adId);
    }

    return {
        getPublicAds: getPublicAds,
        getUserAds: getUserAds,
        activateAd: activateAd,
        deactivateAd: deactivateAd,
        edit: editAd,
        getAdById: getAdById,
        add: addAd,
        deleteAd: deleteAd
    }
}])