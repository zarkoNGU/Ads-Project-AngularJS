app.factory('adsData', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl) {
    var resource = $resource(baseServiceUrl + 'ads:adId', {adId: '@id'}, {
        update: { method: 'PUT' }    
    })
    function getPublicAds (filterParams, page) {
        //console.log(filterParams);
//        if( page != undefined) {               
//            resource = $resource(baseServiceUrl + 'ads?startpage=' + page);
//        }                                                       
        return resource.get(filterParams);    
    }
    
    function editAd( adId, ad) {
        return resource.update({ id: adId }, ad);
    }
    
    function getAdById(adId) {
        return resource.get({ id: adId });
    }
    
    function addAd(ad) {
        return resource.save(ad);
    }
    
    function deleteAd(adId) {
        return resource.delete({id: AdId});
    }

    return {
        getPublicAds: getPublicAds,
        edit: editAd,
        getAdById: getAdById,
        add: addAd,
        delete: deleteAd
    }
}])