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
        return resource.get({ id: adId });
    }
    
    function getUserAds() {
        return userResource.get();
    }
    
    function addAd(ad) {                                                                                                                    
        return userResource.save(ad);
    }
    
    function deleteAd(adId) {
        return resource.delete({id: AdId});
    }

    return {
        getPublicAds: getPublicAds,
        getUserAds: getUserAds,
        edit: editAd,
        getAdById: getAdById,
        add: addAd,
        delete: deleteAd
    }
}])